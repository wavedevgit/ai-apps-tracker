/*! LICENSE: 807489.b7e7128b38.js.LICENSE.txt */
export const __rspack_esm_id = 807489;
export const __rspack_esm_ids = [807489];
export const __webpack_modules__ = {
    drW: (function(e, t, n) {
        var i = /^\s+|\s+$/g,
            a = /^[-+]0x[0-9a-f]+$/i,
            o = /^0b[01]+$/i,
            r = /^0o[0-7]+$/i,
            s = parseInt,
            c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
            l = "object" == typeof self && self && self.Object === Object && self,
            p = c || l || Function("return this")(),
            u = Object.prototype.toString,
            d = Math.max,
            m = Math.min,
            f = function() {
                return p.Date.now()
            };

        function x(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function h(e) {
            if ("number" == typeof e) return e;
            if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == u.call(t)) return 0 / 0;
            if (x(e)) {
                var t, n = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = x(n) ? n + "" : n
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(i, "");
            var c = o.test(e);
            return c || r.test(e) ? s(e.slice(2), c ? 2 : 8) : a.test(e) ? 0 / 0 : +e
        }
        e.exports = function(e, t, n) {
            var i, a, o, r, s, c, l = 0,
                p = !1,
                u = !1,
                g = !0;
            if ("function" != typeof e) throw TypeError("Expected a function");

            function v(t) {
                var n = i,
                    o = a;
                return i = a = void 0, l = t, r = e.apply(o, n)
            }

            function b(e) {
                var n = e - c,
                    i = e - l;
                return void 0 === c || n >= t || n < 0 || u && i >= o
            }

            function k() {
                var e, n, i, a = f();
                if (b(a)) return y(a);
                s = setTimeout(k, (e = a - c, n = a - l, i = t - e, u ? m(i, o - n) : i))
            }

            function y(e) {
                return (s = void 0, g && i) ? v(e) : (i = a = void 0, r)
            }

            function w() {
                var e, n = f(),
                    o = b(n);
                if (i = arguments, a = this, c = n, o) {
                    if (void 0 === s) return l = e = c, s = setTimeout(k, t), p ? v(e) : r;
                    if (u) return s = setTimeout(k, t), v(c)
                }
                return void 0 === s && (s = setTimeout(k, t)), r
            }
            return t = h(t) || 0, x(n) && (p = !!n.leading, o = (u = "maxWait" in n) ? d(h(n.maxWait) || 0, t) : o, g = "trailing" in n ? !!n.trailing : g), w.cancel = function() {
                void 0 !== s && clearTimeout(s), l = 0, i = c = a = s = void 0
            }, w.flush = function() {
                return void 0 === s ? r : y(f())
            }, w
        }
    }),
    p2: (function(e, t, n) {
        var i = n("pU"),
            a = Object.create,
            o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            var t, n = 0,
                r = 1,
                s = a(null),
                c = a(null),
                l = 0;
            return e = i(e), {
                hit: function(i) {
                    var a = c[i],
                        p = ++l;
                    if (s[p] = i, c[i] = p, !a) {
                        if (++n <= e) return;
                        return i = s[r], t(i), i
                    }
                    if (delete s[a], r === a)
                        for (; !o.call(s, ++r););
                },
                delete: t = function(e) {
                    var t = c[e];
                    if (t && (delete s[t], delete c[e], --n, r === t)) {
                        if (!n) {
                            l = 0, r = 1;
                            return
                        }
                        for (; !o.call(s, ++r););
                    }
                },
                clear: function() {
                    n = 0, r = 1, s = a(null), c = a(null), l = 0
                }
            }
        }
    }),
    Cu: (function(e, t, n) {
        var i = Number.isNaN || function(e) {
            return "number" == typeof e && e != e
        };

        function a(e, t) {
            if (e.length !== t.length) return !1;
            for (var n, a, o = 0; o < e.length; o++)
                if (!((n = e[o]) === (a = t[o]) || i(n) && i(a)) && 1) return !1;
            return !0
        }

        function o(e, t) {
            void 0 === t && (t = a);
            var n = null;

            function i() {
                for (var i = [], a = 0; a < arguments.length; a++) i[a] = arguments[a];
                if (n && n.lastThis === this && t(i, n.lastArgs)) return n.lastResult;
                var o = e.apply(this, i);
                return n = {
                    lastResult: o,
                    lastArgs: i,
                    lastThis: this
                }, o
            }
            return i.clear = function() {
                n = null
            }, i
        }
        n.d(t, {
            a: () => o
        })
    }),
    gpx: (function(e, t, n) {
        var i = n("Hn"),
            a = n("bB"),
            o = n("Kp"),
            r = n("wv"),
            s = n("XQd"),
            c = Array.prototype.slice,
            l = Function.prototype.apply,
            p = Object.create;
        n("Uh").async = function(e, t) {
            var n, u, d, m = p(null),
                f = p(null),
                x = t.memoized,
                h = t.original;
            t.memoized = r(function(e) {
                var t = arguments,
                    i = t[t.length - 1];
                return "function" == typeof i && (n = i, t = c.call(t, 0, -1)), x.apply(u = this, d = t)
            }, x);
            try {
                o(t.memoized, x)
            } catch (e) {}
            t.on("get", function(e) {
                var i, a, o;
                if (n) {
                    if (m[e]) {
                        "function" == typeof m[e] ? m[e] = [m[e], n] : m[e].push(n), n = null;
                        return
                    }
                    i = n, a = u, o = d, n = u = d = null, s(function() {
                        var r;
                        hasOwnProperty.call(f, e) ? (r = f[e], t.emit("getasync", e, o, a), l.call(i, r.context, r.args)) : (n = i, u = a, d = o, x.apply(a, o))
                    })
                }
            }), t.original = function() {
                var e, a, o, r;
                return n ? (e = i(arguments), a = function e(n) {
                    var a, o, c = e.id;
                    return null == c ? void s(l.bind(e, this, arguments)) : (delete e.id, a = m[c], delete m[c], a) ? (o = i(arguments), t.has(c) && (n ? t.delete(c) : (f[c] = {
                        context: this,
                        args: o
                    }, t.emit("setasync", c, "function" == typeof a ? 1 : a.length))), "function" == typeof a ? r = l.call(a, this, o) : a.forEach(function(e) {
                        r = l.call(e, this, o)
                    }, this), r) : void 0
                }, o = n, n = u = d = null, e.push(a), r = l.call(h, this, e), a.cb = o, n = a, r) : l.call(h, this, arguments)
            }, t.on("set", function(e) {
                n ? (m[e] ? "function" == typeof m[e] ? m[e] = [m[e], n.cb] : m[e].push(n.cb) : m[e] = n.cb, delete n.cb, n.id = e, n = null) : t.delete(e)
            }), t.on("delete", function(e) {
                var n;
                hasOwnProperty.call(m, e) || f[e] && (n = f[e], delete f[e], t.emit("deleteasync", e, c.call(n.args, 1)))
            }), t.on("clear", function() {
                var e = f;
                f = p(null), t.emit("clearasync", a(e, function(e) {
                    return c.call(e.args, 1)
                }))
            })
        }
    }),
    qar: (function(e, t, n) {
        var i = n("Yb"),
            a = n("H3"),
            o = n("Uh"),
            r = Function.prototype.apply;
        o.dispose = function(e, t, n) {
            var s;
            if (i(e), n.async && o.async || n.promise && o.promise) {
                t.on("deleteasync", s = function(t, n) {
                    r.call(e, null, n)
                }), t.on("clearasync", function(e) {
                    a(e, function(e, t) {
                        s(t, e)
                    })
                });
                return
            }
            t.on("delete", s = function(t, n) {
                e(n)
            }), t.on("clear", function(e) {
                a(e, function(e, t) {
                    s(t, e)
                })
            })
        }
    }),
    d72: (function(e, t, n) {
        var i = n("Hn"),
            a = n("H3"),
            o = n("XQd"),
            r = n("o0"),
            s = n("b2"),
            c = n("Uh"),
            l = Function.prototype,
            p = Math.max,
            u = Math.min,
            d = Object.create;
        c.maxAge = function(e, t, n) {
            var m, f, x, h;
            (e = s(e)) && (m = d(null), f = n.async && c.async || n.promise && c.promise ? "async" : "", t.on("set" + f, function(n) {
                m[n] = setTimeout(function() {
                    t.delete(n)
                }, e), "function" == typeof m[n].unref && m[n].unref(), h && (h[n] && "nextTick" !== h[n] && clearTimeout(h[n]), h[n] = setTimeout(function() {
                    delete h[n]
                }, x), "function" == typeof h[n].unref && h[n].unref())
            }), t.on("delete" + f, function(e) {
                clearTimeout(m[e]), delete m[e], h && ("nextTick" !== h[e] && clearTimeout(h[e]), delete h[e])
            }), n.preFetch && (x = !0 === n.preFetch || isNaN(n.preFetch) ? .333 : p(u(Number(n.preFetch), 1), 0)) && (h = {}, x = (1 - x) * e, t.on("get" + f, function(e, a, s) {
                h[e] || (h[e] = "nextTick", o(function() {
                    var o;
                    "nextTick" === h[e] && (delete h[e], t.delete(e), n.async && (a = i(a)).push(l), o = t.memoized.apply(s, a), n.promise && r(o) && ("function" == typeof o.done ? o.done(l, l) : o.then(l, l)))
                }))
            })), t.on("clear" + f, function() {
                a(m, function(e) {
                    clearTimeout(e)
                }), m = {}, h && (a(h, function(e) {
                    "nextTick" !== e && clearTimeout(e)
                }), h = {})
            }))
        }
    }),
    w2: (function(e, t, n) {
        var i = n("pU"),
            a = n("p2"),
            o = n("Uh");
        o.max = function(e, t, n) {
            var r, s, c;
            (e = i(e)) && (s = a(e), r = n.async && o.async || n.promise && o.promise ? "async" : "", t.on("set" + r, c = function(e) {
                void 0 !== (e = s.hit(e)) && t.delete(e)
            }), t.on("get" + r, c), t.on("delete" + r, s.delete), t.on("clear" + r, s.clear))
        }
    }),
    B6: (function(e, t, n) {
        var i = n("bB"),
            a = n("ys"),
            o = n("yy"),
            r = n("qq"),
            s = n("o0"),
            c = n("XQd"),
            l = Object.create,
            p = a("then", "then:finally", "done", "done:finally");
        n("Uh").promise = function(e, t) {
            var n = l(null),
                a = l(null),
                u = l(null);
            if (!0 === e) e = null;
            else if (!p[e = o(e)]) throw TypeError("'" + r(e) + "' is not valid promise mode");
            t.on("set", function(i, o, r) {
                var l = !1;
                if (!s(r)) {
                    a[i] = r, t.emit("setasync", i, 1);
                    return
                }
                n[i] = 1, u[i] = r;
                var p = function(e) {
                        var o = n[i];
                        if (l) throw Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.");
                        o && (delete n[i], a[i] = e, t.emit("setasync", i, o))
                    },
                    d = function() {
                        l = !0, n[i] && (delete n[i], delete u[i], t.delete(i))
                    },
                    m = e;
                if (m || (m = "then"), "then" === m) {
                    var f = function() {
                        c(d)
                    };
                    "function" == typeof(r = r.then(function(e) {
                        c(p.bind(this, e))
                    }, f)).finally && r.finally(f)
                } else if ("done" === m) {
                    if ("function" != typeof r.done) throw Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
                    r.done(p, d)
                } else if ("done:finally" === m) {
                    if ("function" != typeof r.done) throw Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
                    if ("function" != typeof r.finally) throw Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
                    r.done(p), r.finally(d)
                }
            }), t.on("get", function(e, i, a) {
                if (n[e]) return void++n[e];
                var o = u[e],
                    r = function() {
                        t.emit("getasync", e, i, a)
                    };
                s(o) ? "function" == typeof o.done ? o.done(r) : o.then(function() {
                    c(r)
                }) : r()
            }), t.on("delete", function(e) {
                if (delete u[e], n[e]) return void delete n[e];
                if (hasOwnProperty.call(a, e)) {
                    var i = a[e];
                    delete a[e], t.emit("deleteasync", e, [i])
                }
            }), t.on("clear", function() {
                var e = a;
                a = l(null), n = l(null), u = l(null), t.emit("clearasync", i(e, function(e) {
                    return [e]
                }))
            })
        }
    }),
    DT: (function(e, t, n) {
        var i = n("Ygb"),
            a = n("Uh"),
            o = Object.create,
            r = Object.defineProperties;
        a.refCounter = function(e, t, n) {
            var s, c;
            s = o(null), c = n.async && a.async || n.promise && a.promise ? "async" : "", t.on("set" + c, function(e, t) {
                s[e] = t || 1
            }), t.on("get" + c, function(e) {
                ++s[e]
            }), t.on("delete" + c, function(e) {
                delete s[e]
            }), t.on("clear" + c, function() {
                s = {}
            }), r(t.memoized, {
                deleteRef: i(function() {
                    var e = t.get(arguments);
                    return null !== e && s[e] ? !--s[e] && (t.delete(e), !0) : null
                }),
                getRefCount: i(function() {
                    var e = t.get(arguments);
                    return null !== e && s[e] ? s[e] : 0
                })
            })
        }
    }),
    ev: (function(e, t, n) {
        var i = n("E1"),
            a = n("F8"),
            o = n("IM");
        e.exports = function(e) {
            var t, r = i(arguments[1]);
            return !r.normalizer && 0 !== (t = r.length = a(r.length, e.length, r.async)) && (r.primitive ? !1 === t ? r.normalizer = n("uV") : t > 1 && (r.normalizer = n("dyh")(t)) : !1 === t ? r.normalizer = n("xK")() : 1 === t ? r.normalizer = n("NM")() : r.normalizer = n("ek")(t)), r.async && n("gpx"), r.promise && n("B6"), r.dispose && n("qar"), r.maxAge && n("d72"), r.max && n("w2"), r.refCounter && n("DT"), o(e, r)
        }
    }),
    TR: (function(e, t, n) {
        var i = n("ey"),
            a = n("wv"),
            o = n("Ygb"),
            r = n("WO").methods,
            s = n("xNE"),
            c = n("Nk"),
            l = Function.prototype.apply,
            p = Function.prototype.call,
            u = Object.create,
            d = Object.defineProperties,
            m = r.on,
            f = r.emit;
        e.exports = function(e, t, n) {
            var r, x, h, g, v, b, k, y, w, j, _, z, S, T, C, A = u(null);
            return x = !1 !== t ? t : isNaN(e.length) ? 1 : e.length, n.normalizer && (h = (j = c(n.normalizer)).get, g = j.set, v = j.delete, b = j.clear), null != n.resolvers && (C = s(n.resolvers)), T = h ? a(function(t) {
                var n, a, o = arguments;
                if (C && (o = C(o)), null !== (n = h(o)) && hasOwnProperty.call(A, n)) return _ && r.emit("get", n, o, this), A[n];
                if (a = 1 === o.length ? p.call(e, this, o[0]) : l.call(e, this, o), null === n) {
                    if (null !== (n = h(o))) throw i("Circular invocation", "CIRCULAR_INVOCATION");
                    n = g(o)
                } else if (hasOwnProperty.call(A, n)) throw i("Circular invocation", "CIRCULAR_INVOCATION");
                return A[n] = a, z && r.emit("set", n, null, a), a
            }, x) : 0 === t ? function() {
                var t;
                if (hasOwnProperty.call(A, "data")) return _ && r.emit("get", "data", arguments, this), A.data;
                if (t = arguments.length ? l.call(e, this, arguments) : p.call(e, this), hasOwnProperty.call(A, "data")) throw i("Circular invocation", "CIRCULAR_INVOCATION");
                return A.data = t, z && r.emit("set", "data", null, t), t
            } : function(t) {
                var n, a, o = arguments;
                if (C && (o = C(arguments)), a = String(o[0]), hasOwnProperty.call(A, a)) return _ && r.emit("get", a, o, this), A[a];
                if (n = 1 === o.length ? p.call(e, this, o[0]) : l.call(e, this, o), hasOwnProperty.call(A, a)) throw i("Circular invocation", "CIRCULAR_INVOCATION");
                return A[a] = n, z && r.emit("set", a, null, n), n
            }, r = {
                original: e,
                memoized: T,
                profileName: n.profileName,
                get: function(e) {
                    return (C && (e = C(e)), h) ? h(e) : String(e[0])
                },
                has: function(e) {
                    return hasOwnProperty.call(A, e)
                },
                delete: function(e) {
                    var t;
                    hasOwnProperty.call(A, e) && (v && v(e), t = A[e], delete A[e], S && r.emit("delete", e, t))
                },
                clear: function() {
                    var e = A;
                    b && b(), A = u(null), r.emit("clear", e)
                },
                on: function(e, t) {
                    return "get" === e ? _ = !0 : "set" === e ? z = !0 : "delete" === e && (S = !0), m.call(this, e, t)
                },
                emit: f,
                updateEnv: function() {
                    e = r.original
                }
            }, k = h ? a(function(e) {
                var t, n = arguments;
                C && (n = C(n)), null !== (t = h(n)) && r.delete(t)
            }, x) : 0 === t ? function() {
                return r.delete("data")
            } : function(e) {
                return C && (e = C(arguments)[0]), r.delete(e)
            }, y = a(function() {
                var e = arguments;
                return 0 === t ? A.data : (C && (e = C(e)), A[h ? h(e) : String(e[0])])
            }), w = a(function() {
                var e, n = arguments;
                return 0 === t ? r.has("data") : (C && (n = C(n)), null !== (e = h ? h(n) : String(n[0])) && r.has(e))
            }), d(T, {
                __memoized__: o(!0),
                delete: o(k),
                clear: o(r.clear),
                _get: o(y),
                _has: o(w)
            }), r
        }
    }),
    Uh: (function() {}),
    F8: (function(e, t, n) {
        var i = n("pU");
        e.exports = function(e, t, n) {
            return isNaN(e) ? t >= 0 ? n && t ? t - 1 : t : 1 : !1 !== e && i(e)
        }
    }),
    Nk: (function(e, t, n) {
        var i = n("Yb");
        e.exports = function(e) {
            var t;
            return "function" == typeof e ? {
                set: e,
                get: e
            } : ((t = {
                get: i(e.get)
            }, void 0 !== e.set) ? (t.set = i(e.set), e.delete && (t.delete = i(e.delete)), e.clear && (t.clear = i(e.clear))) : t.set = t.get, t)
        }
    }),
    xNE: (function(e, t, n) {
        var i, a = n("qj"),
            o = n("YB"),
            r = n("Yb"),
            s = Array.prototype.slice;
        i = function(e) {
            return this.map(function(t, n) {
                return t ? t(e[n]) : e[n]
            }).concat(s.call(e, this.length))
        }, e.exports = function(e) {
            return (e = a(e)).forEach(function(e) {
                o(e) && r(e)
            }), i.bind(e)
        }
    }),
    NM: (function(e, t, n) {
        var i = n("J5");
        e.exports = function() {
            var e = 0,
                t = [],
                n = [];
            return {
                get: function(e) {
                    var a = i.call(t, e[0]);
                    return -1 === a ? null : n[a]
                },
                set: function(i) {
                    return t.push(i[0]), n.push(++e), e
                },
                delete: function(e) {
                    var a = i.call(n, e); - 1 !== a && (t.splice(a, 1), n.splice(a, 1))
                },
                clear: function() {
                    t = [], n = []
                }
            }
        }
    }),
    ek: (function(e, t, n) {
        var i = n("J5"),
            a = Object.create;
        e.exports = function(e) {
            var t = 0,
                n = [
                    [],
                    []
                ],
                o = a(null);
            return {
                get: function(t) {
                    for (var a, o = 0, r = n; o < e - 1;) {
                        if (-1 === (a = i.call(r[0], t[o]))) return null;
                        r = r[1][a], ++o
                    }
                    return -1 === (a = i.call(r[0], t[o])) ? null : r[1][a] || null
                },
                set: function(a) {
                    for (var r, s = 0, c = n; s < e - 1;) - 1 === (r = i.call(c[0], a[s])) && (r = c[0].push(a[s]) - 1, c[1].push([
                        [],
                        []
                    ])), c = c[1][r], ++s;
                    return -1 === (r = i.call(c[0], a[s])) && (r = c[0].push(a[s]) - 1), c[1][r] = ++t, o[t] = a, t
                },
                delete: function(t) {
                    for (var a, r = 0, s = n, c = [], l = o[t]; r < e - 1;) {
                        if (-1 === (a = i.call(s[0], l[r]))) return;
                        c.push(s, a), s = s[1][a], ++r
                    }
                    if (-1 !== (a = i.call(s[0], l[r]))) {
                        for (t = s[1][a], s[0].splice(a, 1), s[1].splice(a, 1); !s[0].length && c.length;) a = c.pop(), (s = c.pop())[0].splice(a, 1), s[1].splice(a, 1);
                        delete o[t]
                    }
                },
                clear: function() {
                    n = [
                        [],
                        []
                    ], o = a(null)
                }
            }
        }
    }),
    dyh: (function(e) {
        e.exports = function(e) {
            return e ? function(t) {
                for (var n = String(t[0]), i = 0, a = e; --a;) n += "\x01" + t[++i];
                return n
            } : function() {
                return ""
            }
        }
    }),
    xK: (function(e, t, n) {
        var i = n("J5"),
            a = Object.create;
        e.exports = function() {
            var e = 0,
                t = [],
                n = a(null);
            return {
                get: function(e) {
                    var n, a = 0,
                        o = t,
                        r = e.length;
                    if (0 === r) return o[r] || null;
                    if (o = o[r]) {
                        for (; a < r - 1;) {
                            if (-1 === (n = i.call(o[0], e[a]))) return null;
                            o = o[1][n], ++a
                        }
                        return -1 === (n = i.call(o[0], e[a])) ? null : o[1][n] || null
                    }
                    return null
                },
                set: function(a) {
                    var o, r = 0,
                        s = t,
                        c = a.length;
                    if (0 === c) s[c] = ++e;
                    else {
                        for (s[c] || (s[c] = [
                                [],
                                []
                            ]), s = s[c]; r < c - 1;) - 1 === (o = i.call(s[0], a[r])) && (o = s[0].push(a[r]) - 1, s[1].push([
                            [],
                            []
                        ])), s = s[1][o], ++r; - 1 === (o = i.call(s[0], a[r])) && (o = s[0].push(a[r]) - 1), s[1][o] = ++e
                    }
                    return n[e] = a, e
                },
                delete: function(e) {
                    var a, o = 0,
                        r = t,
                        s = n[e],
                        c = s.length,
                        l = [];
                    if (0 === c) delete r[c];
                    else if (r = r[c]) {
                        for (; o < c - 1;) {
                            if (-1 === (a = i.call(r[0], s[o]))) return;
                            l.push(r, a), r = r[1][a], ++o
                        }
                        if (-1 === (a = i.call(r[0], s[o]))) return;
                        for (e = r[1][a], r[0].splice(a, 1), r[1].splice(a, 1); !r[0].length && l.length;) a = l.pop(), (r = l.pop())[0].splice(a, 1), r[1].splice(a, 1)
                    }
                    delete n[e]
                },
                clear: function() {
                    t = [], n = a(null)
                }
            }
        }
    }),
    uV: (function(e) {
        e.exports = function(e) {
            var t, n, i = e.length;
            if (!i) return "\x02";
            for (t = String(e[n = 0]); --i;) t += "\x01" + e[++n];
            return t
        }
    }),
    IM: (function(e, t, n) {
        var i = n("Yb"),
            a = n("H3"),
            o = n("Uh"),
            r = n("TR"),
            s = n("F8");
        e.exports = function e(t) {
            var n, c, l;
            if (i(t), n = Object(arguments[1]), n.async && n.promise) throw Error("Options 'async' and 'promise' cannot be used together");
            return hasOwnProperty.call(t, "__memoized__") && !n.force ? t : (c = s(n.length, t.length, n.async && o.async), l = r(t, c, n), a(o, function(e, t) {
                n[t] && e(n[t], l, n)
            }), e.__profiler__ && e.__profiler__(l), l.updateEnv(), l.memoized)
        }
    }),
    oW: (function(e, t, n) {
        e.exports = n("HCz")
    }),
    zkY: (function(e, t, n) {
        var i, a, o, r = n("oW"),
            s = n("zK").extname,
            c = /^\s*([^;\s]*)(?:;|\s|$)/,
            l = /^text\//i;

        function p(e) {
            if (!e || "string" != typeof e) return !1;
            var t = c.exec(e),
                n = t && r[t[1].toLowerCase()];
            return n && n.charset ? n.charset : !!(t && l.test(t[1])) && "UTF-8"
        }
        t.charset = p, t.charsets = {
            lookup: p
        }, t.contentType = function(e) {
            if (!e || "string" != typeof e) return !1;
            var n = -1 === e.indexOf("/") ? t.lookup(e) : e;
            if (!n) return !1;
            if (-1 === n.indexOf("charset")) {
                var i = t.charset(n);
                i && (n += "; charset=" + i.toLowerCase())
            }
            return n
        }, t.extension = function(e) {
            if (!e || "string" != typeof e) return !1;
            var n = c.exec(e),
                i = n && t.extensions[n[1].toLowerCase()];
            return !!i && !!i.length && i[0]
        }, t.extensions = Object.create(null), t.lookup = function(e) {
            if (!e || "string" != typeof e) return !1;
            var n = s("x." + e).toLowerCase().substr(1);
            return !!n && (t.types[n] || !1)
        }, t.types = Object.create(null), i = t.extensions, a = t.types, o = ["nginx", "apache", void 0, "iana"], Object.keys(r).forEach(function(e) {
            var t = r[e],
                n = t.extensions;
            if (n && n.length) {
                i[e] = n;
                for (var s = 0; s < n.length; s++) {
                    var c = n[s];
                    if (a[c]) {
                        var l = o.indexOf(r[a[c]].source),
                            p = o.indexOf(t.source);
                        if ("application/octet-stream" !== a[c] && (l > p || l === p && "application/" === a[c].substr(0, 12))) continue
                    }
                    a[c] = e
                }
            }
        })
    }),
    FfD: (function(e) {
        var t;
        t = function() {
            "use strict";
            var e = Object.prototype.hasOwnProperty,
                t = Object.prototype.toString,
                n = "boolean" == typeof RegExp().sticky;

            function i(e) {
                return e && "[object RegExp]" === t.call(e)
            }

            function a(e) {
                return e && "object" == typeof e && !i(e) && !Array.isArray(e)
            }

            function o(e) {
                return e.length ? "(?:" + e.map(function(e) {
                    return "(?:" + e + ")"
                }).join("|") + ")" : "(?!)"
            }

            function r(e) {
                if ("string" == typeof e) return "(?:" + e.replace(/[-\/\\^$*+?.()|[\]{}]/g, function(e) {
                    return "-" === e ? "\\x2d" : "\\" + e
                }) + ")";
                if (i(e)) {
                    if (e.ignoreCase) throw Error("RegExp /i flag not allowed");
                    if (e.global) throw Error("RegExp /g flag is implied");
                    if (e.sticky) throw Error("RegExp /y flag is implied");
                    if (e.multiline) throw Error("RegExp /m flag is implied");
                    return e.source
                }
                throw Error("Not a pattern: " + e)
            }

            function s(e, t) {
                return e.length > t ? e : Array(t - e.length + 1).join(" ") + e
            }

            function c(t, n) {
                if (a(n) || (n = {
                        match: n
                    }), n.include) throw Error("Matching rules cannot also include states");
                var o = {
                    defaultType: t,
                    lineBreaks: !!n.error || !!n.fallback,
                    pop: !1,
                    next: null,
                    push: null,
                    error: !1,
                    fallback: !1,
                    value: null,
                    type: null,
                    shouldThrow: !1
                };
                for (var r in n) e.call(n, r) && (o[r] = n[r]);
                if ("string" == typeof o.type && t !== o.type) throw Error("Type transform cannot be a string (type '" + o.type + "' for token '" + t + "')");
                var s = o.match;
                return o.match = Array.isArray(s) ? s : s ? [s] : [], o.match.sort(function(e, t) {
                    return i(e) && i(t) ? 0 : i(t) ? -1 : i(e) ? 1 : t.length - e.length
                }), o
            }

            function l(e) {
                return Array.isArray(e) ? function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = e[n];
                        if (i.include) {
                            for (var a = [].concat(i.include), o = 0; o < a.length; o++) t.push({
                                include: a[o]
                            });
                            continue
                        }
                        if (!i.type) throw Error("Rule has no type: " + JSON.stringify(i));
                        t.push(c(i.type, i))
                    }
                    return t
                }(e) : function(e) {
                    for (var t = Object.getOwnPropertyNames(e), n = [], i = 0; i < t.length; i++) {
                        var o = t[i],
                            r = [].concat(e[o]);
                        if ("include" === o) {
                            for (var s = 0; s < r.length; s++) n.push({
                                include: r[s]
                            });
                            continue
                        }
                        var l = [];
                        r.forEach(function(e) {
                            a(e) ? (l.length && n.push(c(o, l)), n.push(c(o, e)), l = []) : l.push(e)
                        }), l.length && n.push(c(o, l))
                    }
                    return n
                }(e)
            }
            var p = c("error", {
                lineBreaks: !0,
                shouldThrow: !0
            });

            function u(e, t) {
                for (var a = null, s = Object.create(null), c = !0, l = null, u = [], d = [], m = 0; m < e.length; m++) e[m].fallback && (c = !1);
                for (var m = 0; m < e.length; m++) {
                    var f = e[m];
                    if (f.include) throw Error("Inheritance is not allowed in stateless lexers");
                    if (f.error || f.fallback) {
                        if (a)
                            if (!f.fallback == !a.fallback) throw Error("Multiple " + (f.fallback ? "fallback" : "error") + " rules not allowed (for token '" + f.defaultType + "')");
                            else throw Error("fallback and error are mutually exclusive (for token '" + f.defaultType + "')");
                        a = f
                    }
                    var x = f.match.slice();
                    if (c)
                        for (; x.length && "string" == typeof x[0] && 1 === x[0].length;) s[x.shift().charCodeAt(0)] = f;
                    if (f.pop || f.push || f.next) {
                        if (!t) throw Error("State-switching options are not allowed in stateless lexers (for token '" + f.defaultType + "')");
                        if (f.fallback) throw Error("State-switching options are not allowed on fallback tokens (for token '" + f.defaultType + "')")
                    }
                    if (0 !== x.length) {
                        c = !1, u.push(f);
                        for (var h = 0; h < x.length; h++) {
                            var g = x[h];
                            if (i(g)) {
                                if (null === l) l = g.unicode;
                                else if (l !== g.unicode && !1 === f.fallback) throw Error("If one rule is /u then all must be")
                            }
                        }
                        var v = o(x.map(r)),
                            b = new RegExp(v);
                        if (b.test("")) throw Error("RegExp matches empty string: " + b);
                        if (RegExp("|" + v).exec("").length - 1 > 0) throw Error("RegExp has capture groups: " + b + "\nUse (?: … ) instead");
                        if (!f.lineBreaks && b.test("\n")) throw Error("Rule should declare lineBreaks: " + b);
                        d.push("(" + v + ")")
                    }
                }
                var k = a && a.fallback,
                    y = n && !k ? "ym" : "gm";
                return !0 === l && (y += "u"), {
                    regexp: new RegExp(o(d) + (n || k ? "" : "|"), y),
                    groups: u,
                    fast: s,
                    error: a || p
                }
            }

            function d(e, t, n) {
                var i = e && (e.push || e.next);
                if (i && !n[i]) throw Error("Missing state '" + i + "' (in token '" + e.defaultType + "' of state '" + t + "')");
                if (e && e.pop && 1 != +e.pop) throw Error("pop must be 1 (in token '" + e.defaultType + "' of state '" + t + "')")
            }
            var m = function(e, t) {
                this.startState = t, this.states = e, this.buffer = "", this.stack = [], this.reset()
            };
            m.prototype.reset = function(e, t) {
                return this.buffer = e || "", this.index = 0, this.line = t ? t.line : 1, this.col = t ? t.col : 1, this.queuedToken = t ? t.queuedToken : null, this.queuedText = t ? t.queuedText : "", this.queuedThrow = t ? t.queuedThrow : null, this.setState(t ? t.state : this.startState), this.stack = t && t.stack ? t.stack.slice() : [], this
            }, m.prototype.save = function() {
                return {
                    line: this.line,
                    col: this.col,
                    state: this.state,
                    stack: this.stack.slice(),
                    queuedToken: this.queuedToken,
                    queuedText: this.queuedText,
                    queuedThrow: this.queuedThrow
                }
            }, m.prototype.setState = function(e) {
                if (e && this.state !== e) {
                    this.state = e;
                    var t = this.states[e];
                    this.groups = t.groups, this.error = t.error, this.re = t.regexp, this.fast = t.fast
                }
            }, m.prototype.popState = function() {
                this.setState(this.stack.pop())
            }, m.prototype.pushState = function(e) {
                this.stack.push(this.state), this.setState(e)
            };
            var f = n ? function(e, t) {
                return e.exec(t)
            } : function(e, t) {
                var n = e.exec(t);
                return 0 === n[0].length ? null : n
            };

            function x() {
                return this.value
            }
            if (m.prototype._getGroup = function(e) {
                    for (var t = this.groups.length, n = 0; n < t; n++)
                        if (void 0 !== e[n + 1]) return this.groups[n];
                    throw Error("Cannot find token type for matched text")
                }, m.prototype.next = function() {
                    var e = this.index;
                    if (this.queuedGroup) {
                        var t = this._token(this.queuedGroup, this.queuedText, e);
                        return this.queuedGroup = null, this.queuedText = "", t
                    }
                    var n = this.buffer;
                    if (e !== n.length) {
                        var i = this.fast[n.charCodeAt(e)];
                        if (i) return this._token(i, n.charAt(e), e);
                        var a = this.re;
                        a.lastIndex = e;
                        var o = f(a, n),
                            r = this.error;
                        if (null == o) return this._token(r, n.slice(e, n.length), e);
                        var i = this._getGroup(o),
                            s = o[0];
                        return r.fallback && o.index !== e ? (this.queuedGroup = i, this.queuedText = s, this._token(r, n.slice(e, o.index), e)) : this._token(i, s, e)
                    }
                }, m.prototype._token = function(e, t, n) {
                    var i = 0;
                    if (e.lineBreaks) {
                        var a = /\n/g,
                            o = 1;
                        if ("\n" === t) i = 1;
                        else
                            for (; a.exec(t);) i++, o = a.lastIndex
                    }
                    var r = {
                            type: "function" == typeof e.type && e.type(t) || e.defaultType,
                            value: "function" == typeof e.value ? e.value(t) : t,
                            text: t,
                            toString: x,
                            offset: n,
                            lineBreaks: i,
                            line: this.line,
                            col: this.col
                        },
                        s = t.length;
                    if (this.index += s, this.line += i, 0 !== i ? this.col = s - o + 1 : this.col += s, e.shouldThrow) throw Error(this.formatError(r, "invalid syntax"));
                    return e.pop ? this.popState() : e.push ? this.pushState(e.push) : e.next && this.setState(e.next), r
                }, "u" > typeof Symbol && Symbol.iterator) {
                var h = function(e) {
                    this.lexer = e
                };
                h.prototype.next = function() {
                    var e = this.lexer.next();
                    return {
                        value: e,
                        done: !e
                    }
                }, h.prototype[Symbol.iterator] = function() {
                    return this
                }, m.prototype[Symbol.iterator] = function() {
                    return new h(this)
                }
            }
            return m.prototype.formatError = function(e, t) {
                if (null == e) var n = this.buffer.slice(this.index),
                    e = {
                        text: n,
                        offset: this.index,
                        lineBreaks: +(-1 !== n.indexOf("\n")),
                        line: this.line,
                        col: this.col
                    };
                var i = Math.max(e.line - 2, 1),
                    a = String(e.line + 2).length,
                    o = (function(e, t) {
                        for (var n = e.length, i = 0;;) {
                            var a = e.lastIndexOf("\n", n - 1);
                            if (-1 === a) break;
                            if (i++, n = a, i === t || 0 === n) break
                        }
                        var o = i < t ? 0 : n + 1;
                        return e.substring(o).split("\n")
                    })(this.buffer, this.line - e.line + 2 + 1).slice(0, 5),
                    r = [];
                r.push(t + " at line " + e.line + " col " + e.col + ":"), r.push("");
                for (var c = 0; c < o.length; c++) {
                    var l = o[c],
                        p = i + c;
                    r.push(s(String(p), a) + "  " + l), p === e.line && r.push(s("", a + e.col + 1) + "^")
                }
                return r.join("\n")
            }, m.prototype.clone = function() {
                return new m(this.states, this.state)
            }, m.prototype.has = function(e) {
                return !0
            }, {
                compile: function(e) {
                    return new m({
                        start: u(l(e))
                    }, "start")
                },
                states: function(e, t) {
                    var n = e.$all ? l(e.$all) : [];
                    delete e.$all;
                    var i = Object.getOwnPropertyNames(e);
                    t || (t = i[0]);
                    for (var a = Object.create(null), o = 0; o < i.length; o++) {
                        var r = i[o];
                        a[r] = l(e[r]).concat(n)
                    }
                    for (var o = 0; o < i.length; o++)
                        for (var r = i[o], s = a[r], c = Object.create(null), p = 0; p < s.length; p++) {
                            var f = s[p];
                            if (f.include) {
                                var x = [p, 1];
                                if (f.include !== r && !c[f.include]) {
                                    c[f.include] = !0;
                                    var h = a[f.include];
                                    if (!h) throw Error("Cannot include nonexistent state '" + f.include + "' (in state '" + r + "')");
                                    for (var g = 0; g < h.length; g++) {
                                        var v = h[g]; - 1 === s.indexOf(v) && x.push(v)
                                    }
                                }
                                s.splice.apply(s, x), p--
                            }
                        }
                    for (var b = Object.create(null), o = 0; o < i.length; o++) {
                        var r = i[o];
                        b[r] = u(a[r], !0)
                    }
                    for (var o = 0; o < i.length; o++) {
                        for (var k = i[o], y = b[k], w = y.groups, p = 0; p < w.length; p++) d(w[p], k, b);
                        for (var j = Object.getOwnPropertyNames(y.fast), p = 0; p < j.length; p++) d(y.fast[j[p]], k, b)
                    }
                    return new m(b, t)
                },
                error: Object.freeze({
                    error: !0
                }),
                fallback: Object.freeze({
                    fallback: !0
                }),
                keywords: function(e) {
                    for (var t = "u" > typeof Map, n = t ? new Map : Object.create(null), i = Object.getOwnPropertyNames(e), a = 0; a < i.length; a++) {
                        var o = i[a],
                            r = e[o];
                        (Array.isArray(r) ? r : [r]).forEach(function(e) {
                            if ("string" != typeof e) throw Error("keyword must be string (in keyword '" + o + "')");
                            t ? n.set(e, o) : n[e] = o
                        })
                    }
                    return function(e) {
                        return t ? n.get(e) : n[e]
                    }
                }
            }
        }, "function" == typeof define && define.amd ? define([], t) : e.exports ? e.exports = t() : this.moo = t()
    }),
    BDA: (function(e, t, n) {
        n.d(t, {
            a: () => ti,
            b: () => I,
            c: () => tc,
            d: () => to,
            e: () => eP,
            f: () => eo,
            g: () => ta,
            h: () => tu,
            i: () => ts,
            j: () => tp
        });
        var i = n("AS"),
            a = n("fDv"),
            o = n("Fw"),
            r = n("I"),
            s = n("o7r");
        let c = i.lazy(() => i.union([i.string(), i.number(), i.boolean(), i.null(), i.record(i.string(), c), i.array(c)])),
            l = i.record(i.string(), c);
        i.array(c);
        let p = i.union([i.string(), i.number().int()]),
            u = i.string(),
            d = i.object({
                ttl: i.number().optional()
            }),
            m = i.object({
                taskId: i.string()
            }),
            f = i.looseObject({
                progressToken: p.optional(),
                "io.modelcontextprotocol/related-task": m.optional()
            }),
            x = i.object({
                _meta: f.optional()
            }),
            h = x.extend({
                task: d.optional()
            }),
            g = i.object({
                method: i.string(),
                params: x.loose().optional()
            }),
            v = i.object({
                _meta: f.optional()
            }),
            b = i.object({
                method: i.string(),
                params: v.loose().optional()
            }),
            k = i.looseObject({
                get "io.modelcontextprotocol/serverInfo"() {
                    return F.optional().catch(void 0)
                }
            }),
            y = i.looseObject({
                _meta: k.optional()
            }),
            w = i.union([i.string(), i.number().int()]),
            j = i.object({
                jsonrpc: i.literal("2.0"),
                id: w,
                ...g.shape
            }).strict(),
            _ = i.object({
                jsonrpc: i.literal("2.0"),
                ...b.shape
            }).strict(),
            z = i.object({
                jsonrpc: i.literal("2.0"),
                id: w,
                result: y
            }).strict(),
            S = i.object({
                jsonrpc: i.literal("2.0"),
                id: w.optional(),
                error: i.object({
                    code: i.number().int(),
                    message: i.string(),
                    data: i.unknown().optional()
                })
            }).strict();
        i.union([j, _, z, S]), i.union([z, S]);
        let T = y.strict(),
            C = v.extend({
                requestId: w.optional(),
                reason: i.string().optional()
            }),
            A = b.extend({
                method: i.literal("notifications/cancelled"),
                params: C
            }),
            I = i.object({
                src: i.string(),
                mimeType: i.string().optional(),
                sizes: i.array(i.string()).optional(),
                theme: i.enum(["light", "dark"]).optional()
            }),
            q = i.object({
                icons: i.array(I).optional()
            }),
            E = i.object({
                name: i.string(),
                title: i.string().optional()
            }),
            F = E.extend({
                ...E.shape,
                ...q.shape,
                version: i.string(),
                websiteUrl: i.string().optional(),
                description: i.string().optional()
            }),
            L = i.intersection(i.object({
                applyDefaults: i.boolean().optional()
            }), l),
            R = i.preprocess(e => e && "object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length ? {
                form: {}
            } : e, i.intersection(i.object({
                form: L.optional(),
                url: l.optional()
            }), l.optional())),
            O = i.looseObject({
                list: l.optional(),
                cancel: l.optional(),
                requests: i.looseObject({
                    sampling: i.looseObject({
                        createMessage: l.optional()
                    }).optional(),
                    elicitation: i.looseObject({
                        create: l.optional()
                    }).optional()
                }).optional()
            }),
            P = i.looseObject({
                list: l.optional(),
                cancel: l.optional(),
                requests: i.looseObject({
                    tools: i.looseObject({
                        call: l.optional()
                    }).optional()
                }).optional()
            }),
            D = i.object({
                experimental: i.record(i.string(), l).optional(),
                sampling: i.object({
                    context: l.optional(),
                    tools: l.optional()
                }).optional(),
                elicitation: R.optional(),
                roots: i.object({
                    listChanged: i.boolean().optional()
                }).optional(),
                tasks: O.optional(),
                extensions: i.record(i.string(), l).optional()
            }),
            $ = x.extend({
                protocolVersion: i.string(),
                capabilities: D,
                clientInfo: F
            }),
            M = g.extend({
                method: i.literal("initialize"),
                params: $
            }),
            B = i.object({
                experimental: i.record(i.string(), l).optional(),
                logging: l.optional(),
                completions: l.optional(),
                prompts: i.object({
                    listChanged: i.boolean().optional()
                }).optional(),
                resources: i.object({
                    subscribe: i.boolean().optional(),
                    listChanged: i.boolean().optional()
                }).optional(),
                tools: i.object({
                    listChanged: i.boolean().optional()
                }).optional(),
                tasks: P.optional(),
                extensions: i.record(i.string(), l).optional()
            }),
            U = y.extend({
                protocolVersion: i.string(),
                capabilities: B,
                serverInfo: F,
                instructions: i.string().optional()
            }),
            N = b.extend({
                method: i.literal("notifications/initialized"),
                params: v.optional()
            }),
            H = g.extend({
                method: i.literal("server/discover"),
                params: x.optional()
            }),
            V = y.extend({
                supportedVersions: i.array(i.string()),
                capabilities: B,
                instructions: i.string().optional()
            }),
            Q = g.extend({
                method: i.literal("ping"),
                params: x.optional()
            }),
            W = i.object({
                progress: i.number(),
                total: i.optional(i.number()),
                message: i.optional(i.string())
            }),
            Z = i.object({
                ...v.shape,
                ...W.shape,
                progressToken: p
            }),
            G = b.extend({
                method: i.literal("notifications/progress"),
                params: Z
            }),
            X = x.extend({
                cursor: u.optional()
            }),
            J = g.extend({
                params: X.optional()
            }),
            Y = y.extend({
                nextCursor: u.optional()
            }),
            K = i.object({
                uri: i.string(),
                mimeType: i.optional(i.string()),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            ee = K.extend({
                text: i.string()
            }),
            et = i.string().refine(e => {
                try {
                    return atob(e), !0
                } catch {
                    return !1
                }
            }, {
                message: "Invalid Base64 string"
            }),
            en = K.extend({
                blob: et
            }),
            ei = i.enum(["user", "assistant"]),
            ea = i.object({
                audience: i.array(ei).optional(),
                priority: i.number().min(0).max(1).optional(),
                lastModified: a.datetime({
                    offset: !0
                }).optional()
            }),
            eo = i.object({
                ...E.shape,
                ...q.shape,
                uri: i.string(),
                description: i.optional(i.string()),
                mimeType: i.optional(i.string()),
                size: i.optional(i.number()),
                annotations: ea.optional(),
                _meta: i.optional(i.looseObject({}))
            }),
            er = i.object({
                ...E.shape,
                ...q.shape,
                uriTemplate: i.string(),
                description: i.optional(i.string()),
                mimeType: i.optional(i.string()),
                annotations: ea.optional(),
                _meta: i.optional(i.looseObject({}))
            }),
            es = J.extend({
                method: i.literal("resources/list")
            }),
            ec = Y.extend({
                resources: i.array(eo)
            }),
            el = J.extend({
                method: i.literal("resources/templates/list")
            }),
            ep = Y.extend({
                resourceTemplates: i.array(er)
            }),
            eu = x.extend({
                uri: i.string()
            }),
            ed = g.extend({
                method: i.literal("resources/read"),
                params: eu
            }),
            em = y.extend({
                contents: i.array(i.union([ee, en]))
            }),
            ef = b.extend({
                method: i.literal("notifications/resources/list_changed"),
                params: v.optional()
            }),
            ex = g.extend({
                method: i.literal("resources/subscribe"),
                params: eu
            }),
            eh = g.extend({
                method: i.literal("resources/unsubscribe"),
                params: eu
            }),
            eg = i.object({
                toolsListChanged: i.boolean().optional(),
                promptsListChanged: i.boolean().optional(),
                resourcesListChanged: i.boolean().optional(),
                resourceSubscriptions: i.array(i.string()).optional()
            }),
            ev = x.extend({
                notifications: eg
            }),
            eb = g.extend({
                method: i.literal("subscriptions/listen"),
                params: ev
            }),
            ek = v.extend({
                notifications: eg
            }),
            ey = b.extend({
                method: i.literal("notifications/subscriptions/acknowledged"),
                params: ek
            }),
            ew = k.extend({
                "io.modelcontextprotocol/subscriptionId": w
            }),
            ej = y.extend({
                _meta: ew
            }),
            e_ = v.extend({
                uri: i.string()
            }),
            ez = b.extend({
                method: i.literal("notifications/resources/updated"),
                params: e_
            }),
            eS = i.object({
                name: i.string(),
                description: i.optional(i.string()),
                required: i.optional(i.boolean())
            }),
            eT = i.object({
                ...E.shape,
                ...q.shape,
                description: i.optional(i.string()),
                arguments: i.optional(i.array(eS)),
                _meta: i.optional(i.looseObject({}))
            }),
            eC = J.extend({
                method: i.literal("prompts/list")
            }),
            eA = Y.extend({
                prompts: i.array(eT)
            }),
            eI = x.extend({
                name: i.string(),
                arguments: i.record(i.string(), i.string()).optional()
            }),
            eq = g.extend({
                method: i.literal("prompts/get"),
                params: eI
            }),
            eE = i.object({
                type: i.literal("text"),
                text: i.string(),
                annotations: ea.optional(),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            eF = i.object({
                type: i.literal("image"),
                data: et,
                mimeType: i.string(),
                annotations: ea.optional(),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            eL = i.object({
                type: i.literal("audio"),
                data: et,
                mimeType: i.string(),
                annotations: ea.optional(),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            eR = i.object({
                type: i.literal("tool_use"),
                name: i.string(),
                id: i.string(),
                input: i.record(i.string(), i.unknown()),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            eO = i.object({
                type: i.literal("resource"),
                resource: i.union([ee, en]),
                annotations: ea.optional(),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            eP = eo.extend({
                type: i.literal("resource_link")
            }),
            eD = i.union([eE, eF, eL, eP, eO]),
            e$ = i.object({
                role: ei,
                content: eD
            }),
            eM = y.extend({
                description: i.string().optional(),
                messages: i.array(e$)
            }),
            eB = b.extend({
                method: i.literal("notifications/prompts/list_changed"),
                params: v.optional()
            }),
            eU = i.object({
                title: i.string().optional(),
                readOnlyHint: i.boolean().optional(),
                destructiveHint: i.boolean().optional(),
                idempotentHint: i.boolean().optional(),
                openWorldHint: i.boolean().optional()
            }),
            eN = i.object({
                taskSupport: i.enum(["required", "optional", "forbidden"]).optional()
            }),
            eH = i.object({
                ...E.shape,
                ...q.shape,
                description: i.string().optional(),
                inputSchema: i.object({
                    type: i.literal("object"),
                    properties: i.record(i.string(), c).optional(),
                    required: i.array(i.string()).optional()
                }).catchall(i.unknown()),
                outputSchema: i.looseObject({
                    $schema: i.string().optional()
                }).optional(),
                annotations: eU.optional(),
                execution: eN.optional(),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            eV = J.extend({
                method: i.literal("tools/list")
            }),
            eQ = Y.extend({
                tools: i.array(eH)
            }),
            eW = y.extend({
                content: i.array(eD).default([]),
                structuredContent: i.unknown().optional(),
                isError: i.boolean().optional()
            });
        eW.or(y.extend({
            toolResult: i.unknown()
        }));
        let eZ = h.extend({
                name: i.string(),
                arguments: i.record(i.string(), i.unknown()).optional()
            }),
            eG = g.extend({
                method: i.literal("tools/call"),
                params: eZ
            }),
            eX = b.extend({
                method: i.literal("notifications/tools/list_changed"),
                params: v.optional()
            });
        i.object({
            autoRefresh: i.boolean().default(!0),
            debounceMs: i.number().int().nonnegative().default(300)
        });
        let eJ = i.enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
            eY = x.extend({
                level: eJ
            }),
            eK = g.extend({
                method: i.literal("logging/setLevel"),
                params: eY
            }),
            e0 = v.extend({
                level: eJ,
                logger: i.string().optional(),
                data: i.unknown()
            }),
            e1 = b.extend({
                method: i.literal("notifications/message"),
                params: e0
            }),
            e2 = i.object({
                name: i.string().optional()
            }),
            e3 = i.object({
                hints: i.array(e2).optional(),
                costPriority: i.number().min(0).max(1).optional(),
                speedPriority: i.number().min(0).max(1).optional(),
                intelligencePriority: i.number().min(0).max(1).optional()
            }),
            e4 = i.object({
                mode: i.enum(["auto", "required", "none"]).optional()
            }),
            e9 = i.object({
                type: i.literal("tool_result"),
                toolUseId: i.string().describe("The unique identifier for the corresponding tool call."),
                content: i.array(eD),
                structuredContent: i.unknown().optional(),
                isError: i.boolean().optional(),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            e6 = i.discriminatedUnion("type", [eE, eF, eL]),
            e5 = i.discriminatedUnion("type", [eE, eF, eL, eR, e9]),
            e8 = i.object({
                role: ei,
                content: i.union([e5, i.array(e5)]),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            e7 = h.extend({
                messages: i.array(e8),
                modelPreferences: e3.optional(),
                systemPrompt: i.string().optional(),
                includeContext: i.enum(["none", "thisServer", "allServers"]).optional(),
                temperature: i.number().optional(),
                maxTokens: i.number().int(),
                stopSequences: i.array(i.string()).optional(),
                metadata: l.optional(),
                tools: i.array(eH).optional(),
                toolChoice: e4.optional()
            }),
            te = g.extend({
                method: i.literal("sampling/createMessage"),
                params: e7
            }),
            tt = y.extend({
                model: i.string(),
                stopReason: i.optional(i.enum(["endTurn", "stopSequence", "maxTokens"]).or(i.string())),
                role: ei,
                content: e6
            }),
            tn = y.extend({
                model: i.string(),
                stopReason: i.optional(i.enum(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(i.string())),
                role: ei,
                content: i.union([e5, i.array(e5)])
            }),
            ti = i.object({
                type: i.literal("boolean"),
                title: i.string().optional(),
                description: i.string().optional(),
                default: i.boolean().optional()
            }),
            ta = i.object({
                type: i.literal("string"),
                title: i.string().optional(),
                description: i.string().optional(),
                minLength: i.number().optional(),
                maxLength: i.number().optional(),
                format: i.enum(["email", "uri", "date", "date-time"]).optional(),
                default: i.string().optional()
            }),
            to = i.object({
                type: i.enum(["number", "integer"]),
                title: i.string().optional(),
                description: i.string().optional(),
                minimum: i.number().optional(),
                maximum: i.number().optional(),
                default: i.number().optional()
            }),
            tr = i.object({
                type: i.literal("string"),
                title: i.string().optional(),
                description: i.string().optional(),
                enum: i.array(i.string()),
                default: i.string().optional()
            }),
            ts = i.object({
                type: i.literal("string"),
                title: i.string().optional(),
                description: i.string().optional(),
                oneOf: i.array(i.object({
                    const: i.string(),
                    title: i.string()
                })),
                default: i.string().optional()
            }),
            tc = i.object({
                type: i.literal("string"),
                title: i.string().optional(),
                description: i.string().optional(),
                enum: i.array(i.string()),
                enumNames: i.array(i.string()).optional(),
                default: i.string().optional()
            }),
            tl = i.union([tr, ts]),
            tp = i.object({
                type: i.literal("array"),
                title: i.string().optional(),
                description: i.string().optional(),
                minItems: i.number().optional(),
                maxItems: i.number().optional(),
                items: i.object({
                    type: i.literal("string"),
                    enum: i.array(i.string())
                }),
                default: i.array(i.string()).optional()
            }),
            tu = i.object({
                type: i.literal("array"),
                title: i.string().optional(),
                description: i.string().optional(),
                minItems: i.number().optional(),
                maxItems: i.number().optional(),
                items: i.object({
                    anyOf: i.array(i.object({
                        const: i.string(),
                        title: i.string()
                    }))
                }),
                default: i.array(i.string()).optional()
            }),
            td = i.union([tp, tu]),
            tm = i.union([tc, tl, td]),
            tf = i.union([tm, ti, ta, to]),
            tx = h.extend({
                mode: i.literal("form").optional(),
                message: i.string(),
                requestedSchema: i.object({
                    type: i.literal("object"),
                    properties: i.record(i.string(), tf),
                    required: i.array(i.string()).optional()
                }).catchall(i.unknown())
            }),
            th = h.extend({
                mode: i.literal("url"),
                message: i.string(),
                elicitationId: i.string(),
                url: i.string().url()
            }),
            tg = i.union([tx, th]),
            tv = g.extend({
                method: i.literal("elicitation/create"),
                params: tg
            }),
            tb = v.extend({
                elicitationId: i.string()
            }),
            tk = b.extend({
                method: i.literal("notifications/elicitation/complete"),
                params: tb
            }),
            ty = y.extend({
                action: i.enum(["accept", "decline", "cancel"]),
                content: i.preprocess(e => null === e ? void 0 : e, i.record(i.string(), i.union([i.string(), i.number(), i.boolean(), i.array(i.string())])).optional())
            }),
            tw = i.object({
                type: i.literal("ref/resource"),
                uri: i.string()
            }),
            tj = i.object({
                type: i.literal("ref/prompt"),
                name: i.string()
            }),
            t_ = x.extend({
                ref: i.union([tj, tw]),
                argument: i.object({
                    name: i.string(),
                    value: i.string()
                }),
                context: i.object({
                    arguments: i.record(i.string(), i.string()).optional()
                }).optional()
            }),
            tz = g.extend({
                method: i.literal("completion/complete"),
                params: t_
            }),
            tS = y.extend({
                completion: i.looseObject({
                    values: i.array(i.string()).max(100),
                    total: i.optional(i.number().int()),
                    hasMore: i.optional(i.boolean())
                })
            }),
            tT = i.object({
                uri: i.string().startsWith("file://"),
                name: i.string().optional(),
                _meta: i.record(i.string(), i.unknown()).optional()
            }),
            tC = g.extend({
                method: i.literal("roots/list"),
                params: x.optional()
            }),
            tA = y.extend({
                roots: i.array(tT)
            }),
            tI = b.extend({
                method: i.literal("notifications/roots/list_changed"),
                params: v.optional()
            });
        i.looseObject({
            ttl: i.number().optional(),
            pollInterval: i.number().optional()
        });
        let tq = i.enum(["working", "input_required", "completed", "failed", "cancelled"]),
            tE = i.object({
                taskId: i.string(),
                status: tq,
                ttl: i.union([i.number(), i.null()]),
                createdAt: i.string(),
                lastUpdatedAt: i.string(),
                pollInterval: i.optional(i.number()),
                statusMessage: i.optional(i.string())
            });
        y.extend({
            task: tE
        });
        let tF = v.merge(tE);
        b.extend({
            method: i.literal("notifications/tasks/status"),
            params: tF
        }), g.extend({
            method: i.literal("tasks/get"),
            params: x.extend({
                taskId: i.string()
            })
        }), y.merge(tE), g.extend({
            method: i.literal("tasks/result"),
            params: x.extend({
                taskId: i.string()
            })
        }), y.loose(), J.extend({
            method: i.literal("tasks/list")
        }), Y.extend({
            tasks: i.array(tE)
        }), g.extend({
            method: i.literal("tasks/cancel"),
            params: x.extend({
                taskId: i.string()
            })
        }), y.merge(tE), i.union([Q, M, H, tz, eK, eq, eC, es, el, ed, ex, eh, eb, eG, eV]), i.union([A, G, N, tI]), i.union([T, tt, tn, ty, tA]), i.union([Q, te, tv, tC]), i.union([A, G, e1, ez, ef, eX, eB, ey, tk]), i.union([T, U, V, tS, eM, eA, ec, ep, em, eW, eQ, ej]);
        let tL = i.url().superRefine((e, t) => {
            if (!URL.canParse(e)) return t.addIssue({
                code: o.b.custom,
                message: "URL must be parseable",
                fatal: !0
            }), r.e
        }).refine(e => {
            let t = new URL(e);
            return "javascript:" !== t.protocol && "data:" !== t.protocol && "vbscript:" !== t.protocol
        }, {
            message: "URL cannot use javascript:, data:, or vbscript: scheme"
        });
        i.looseObject({
            resource: i.string().url(),
            authorization_servers: i.array(tL).optional(),
            jwks_uri: i.string().url().optional(),
            scopes_supported: i.array(i.string()).optional(),
            bearer_methods_supported: i.array(i.string()).optional(),
            resource_signing_alg_values_supported: i.array(i.string()).optional(),
            resource_name: i.string().optional(),
            resource_documentation: i.string().optional(),
            resource_policy_uri: i.string().url().optional(),
            resource_tos_uri: i.string().url().optional(),
            tls_client_certificate_bound_access_tokens: i.boolean().optional(),
            authorization_details_types_supported: i.array(i.string()).optional(),
            dpop_signing_alg_values_supported: i.array(i.string()).optional(),
            dpop_bound_access_tokens_required: i.boolean().optional()
        });
        let tR = i.looseObject({
                issuer: i.string(),
                authorization_endpoint: tL,
                token_endpoint: tL,
                registration_endpoint: tL.optional(),
                scopes_supported: i.array(i.string()).optional(),
                response_types_supported: i.array(i.string()),
                response_modes_supported: i.array(i.string()).optional(),
                grant_types_supported: i.array(i.string()).optional(),
                token_endpoint_auth_methods_supported: i.array(i.string()).optional(),
                token_endpoint_auth_signing_alg_values_supported: i.array(i.string()).optional(),
                service_documentation: tL.optional(),
                revocation_endpoint: tL.optional(),
                revocation_endpoint_auth_methods_supported: i.array(i.string()).optional(),
                revocation_endpoint_auth_signing_alg_values_supported: i.array(i.string()).optional(),
                introspection_endpoint: i.string().optional(),
                introspection_endpoint_auth_methods_supported: i.array(i.string()).optional(),
                introspection_endpoint_auth_signing_alg_values_supported: i.array(i.string()).optional(),
                code_challenge_methods_supported: i.array(i.string()).optional(),
                client_id_metadata_document_supported: i.boolean().optional(),
                authorization_response_iss_parameter_supported: i.boolean().optional().catch(void 0),
                dpop_signing_alg_values_supported: i.array(i.string()).optional()
            }),
            tO = i.looseObject({
                issuer: i.string(),
                authorization_endpoint: tL,
                token_endpoint: tL,
                userinfo_endpoint: tL.optional(),
                jwks_uri: tL,
                registration_endpoint: tL.optional(),
                scopes_supported: i.array(i.string()).optional(),
                response_types_supported: i.array(i.string()),
                response_modes_supported: i.array(i.string()).optional(),
                grant_types_supported: i.array(i.string()).optional(),
                acr_values_supported: i.array(i.string()).optional(),
                subject_types_supported: i.array(i.string()),
                id_token_signing_alg_values_supported: i.array(i.string()),
                id_token_encryption_alg_values_supported: i.array(i.string()).optional(),
                id_token_encryption_enc_values_supported: i.array(i.string()).optional(),
                userinfo_signing_alg_values_supported: i.array(i.string()).optional(),
                userinfo_encryption_alg_values_supported: i.array(i.string()).optional(),
                userinfo_encryption_enc_values_supported: i.array(i.string()).optional(),
                request_object_signing_alg_values_supported: i.array(i.string()).optional(),
                request_object_encryption_alg_values_supported: i.array(i.string()).optional(),
                request_object_encryption_enc_values_supported: i.array(i.string()).optional(),
                token_endpoint_auth_methods_supported: i.array(i.string()).optional(),
                token_endpoint_auth_signing_alg_values_supported: i.array(i.string()).optional(),
                display_values_supported: i.array(i.string()).optional(),
                claim_types_supported: i.array(i.string()).optional(),
                claims_supported: i.array(i.string()).optional(),
                service_documentation: i.string().optional(),
                claims_locales_supported: i.array(i.string()).optional(),
                ui_locales_supported: i.array(i.string()).optional(),
                claims_parameter_supported: i.boolean().optional(),
                request_parameter_supported: i.boolean().optional(),
                request_uri_parameter_supported: i.boolean().optional(),
                require_request_uri_registration: i.boolean().optional(),
                op_policy_uri: tL.optional(),
                op_tos_uri: tL.optional(),
                client_id_metadata_document_supported: i.boolean().optional(),
                authorization_response_iss_parameter_supported: i.boolean().optional().catch(void 0)
            });
        i.object({
            ...tO.shape,
            ...tR.pick({
                code_challenge_methods_supported: !0
            }).shape
        }), i.object({
            access_token: i.string(),
            id_token: i.string().optional(),
            token_type: i.string(),
            expires_in: s.number().optional(),
            scope: i.string().optional(),
            refresh_token: i.string().optional(),
            issuer: i.string().optional().catch(void 0)
        }).strip(), i.object({
            issued_token_type: i.literal("urn:ietf:params:oauth:token-type:id-jag"),
            access_token: i.string(),
            token_type: i.string().optional(),
            expires_in: i.number().optional(),
            scope: i.string().optional()
        }).strip(), i.object({
            error: i.string(),
            error_description: i.string().optional(),
            error_uri: i.string().optional()
        });
        let tP = tL.optional().or(i.literal("").transform(() => void 0)),
            tD = i.object({
                redirect_uris: i.array(tL),
                token_endpoint_auth_method: i.string().optional(),
                grant_types: i.array(i.string()).optional(),
                response_types: i.array(i.string()).optional(),
                application_type: i.string().optional(),
                client_name: i.string().optional(),
                client_uri: tL.optional(),
                logo_uri: tP,
                scope: i.string().optional(),
                contacts: i.array(i.string()).optional(),
                tos_uri: tP,
                policy_uri: i.string().optional(),
                jwks_uri: tL.optional(),
                jwks: i.any().optional(),
                software_id: i.string().optional(),
                software_version: i.string().optional(),
                software_statement: i.string().optional()
            }).strip(),
            t$ = i.object({
                client_id: i.string(),
                client_secret: i.string().optional(),
                client_id_issued_at: i.number().optional(),
                client_secret_expires_at: i.number().optional(),
                issuer: i.string().optional().catch(void 0)
            }).strip();
        tD.merge(t$), i.object({
            error: i.string(),
            error_description: i.string().optional()
        }).strip(), i.object({
            token: i.string(),
            token_type_hint: i.string().optional()
        }).strip()
    }),
    kS: (function(e, t, n) {
        var i, a, o = n("AS"),
            r = n("fDv");
        let s = "io.modelcontextprotocol/related-task",
            c = o.custom(e => null !== e && ("object" == typeof e || "function" == typeof e)),
            l = o.union([o.string(), o.number().int()]),
            p = o.string();
        o.looseObject({
            ttl: o.number().optional(),
            pollInterval: o.number().optional()
        });
        let u = o.object({
                ttl: o.number().optional()
            }),
            d = o.object({
                taskId: o.string()
            }),
            m = o.looseObject({
                progressToken: l.optional(),
                [s]: d.optional()
            }),
            f = o.object({
                _meta: m.optional()
            }),
            x = f.extend({
                task: u.optional()
            }),
            h = o.object({
                method: o.string(),
                params: f.loose().optional()
            }),
            g = o.object({
                _meta: m.optional()
            }),
            v = o.object({
                method: o.string(),
                params: g.loose().optional()
            }),
            b = o.looseObject({
                _meta: m.optional()
            }),
            k = o.union([o.string(), o.number().int()]),
            y = o.object({
                jsonrpc: o.literal("2.0"),
                id: k,
                ...h.shape
            }).strict(),
            w = o.object({
                jsonrpc: o.literal("2.0"),
                ...v.shape
            }).strict(),
            j = o.object({
                jsonrpc: o.literal("2.0"),
                id: k,
                result: b
            }).strict();
        (i = a || (a = {}))[i.ConnectionClosed = -32e3] = "ConnectionClosed", i[i.RequestTimeout = -32001] = "RequestTimeout", i[i.ParseError = -32700] = "ParseError", i[i.InvalidRequest = -32600] = "InvalidRequest", i[i.MethodNotFound = -32601] = "MethodNotFound", i[i.InvalidParams = -32602] = "InvalidParams", i[i.InternalError = -32603] = "InternalError", i[i.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
        let _ = o.object({
                jsonrpc: o.literal("2.0"),
                id: k.optional(),
                error: o.object({
                    code: o.number().int(),
                    message: o.string(),
                    data: o.unknown().optional()
                })
            }).strict(),
            z = o.union([y, w, j, _]),
            S = o.union([j, _]),
            T = b.strict(),
            C = g.extend({
                requestId: k.optional(),
                reason: o.string().optional()
            }),
            A = v.extend({
                method: o.literal("notifications/cancelled"),
                params: C
            }),
            I = o.object({
                src: o.string(),
                mimeType: o.string().optional(),
                sizes: o.array(o.string()).optional(),
                theme: o.enum(["light", "dark"]).optional()
            }),
            q = o.object({
                icons: o.array(I).optional()
            }),
            E = o.object({
                name: o.string(),
                title: o.string().optional()
            }),
            F = E.extend({
                ...E.shape,
                ...q.shape,
                version: o.string(),
                websiteUrl: o.string().optional(),
                description: o.string().optional()
            }),
            L = o.intersection(o.object({
                applyDefaults: o.boolean().optional()
            }), o.record(o.string(), o.unknown())),
            R = o.preprocess(e => e && "object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length ? {
                form: {}
            } : e, o.intersection(o.object({
                form: L.optional(),
                url: c.optional()
            }), o.record(o.string(), o.unknown()).optional())),
            O = o.looseObject({
                list: c.optional(),
                cancel: c.optional(),
                requests: o.looseObject({
                    sampling: o.looseObject({
                        createMessage: c.optional()
                    }).optional(),
                    elicitation: o.looseObject({
                        create: c.optional()
                    }).optional()
                }).optional()
            }),
            P = o.looseObject({
                list: c.optional(),
                cancel: c.optional(),
                requests: o.looseObject({
                    tools: o.looseObject({
                        call: c.optional()
                    }).optional()
                }).optional()
            }),
            D = o.object({
                experimental: o.record(o.string(), c).optional(),
                sampling: o.object({
                    context: c.optional(),
                    tools: c.optional()
                }).optional(),
                elicitation: R.optional(),
                roots: o.object({
                    listChanged: o.boolean().optional()
                }).optional(),
                tasks: O.optional(),
                extensions: o.record(o.string(), c).optional()
            }),
            $ = f.extend({
                protocolVersion: o.string(),
                capabilities: D,
                clientInfo: F
            }),
            M = h.extend({
                method: o.literal("initialize"),
                params: $
            }),
            B = o.object({
                experimental: o.record(o.string(), c).optional(),
                logging: c.optional(),
                completions: c.optional(),
                prompts: o.object({
                    listChanged: o.boolean().optional()
                }).optional(),
                resources: o.object({
                    subscribe: o.boolean().optional(),
                    listChanged: o.boolean().optional()
                }).optional(),
                tools: o.object({
                    listChanged: o.boolean().optional()
                }).optional(),
                tasks: P.optional(),
                extensions: o.record(o.string(), c).optional()
            }),
            U = b.extend({
                protocolVersion: o.string(),
                capabilities: B,
                serverInfo: F,
                instructions: o.string().optional()
            }),
            N = v.extend({
                method: o.literal("notifications/initialized"),
                params: g.optional()
            }),
            H = h.extend({
                method: o.literal("ping"),
                params: f.optional()
            }),
            V = o.object({
                progress: o.number(),
                total: o.optional(o.number()),
                message: o.optional(o.string())
            }),
            Q = o.object({
                ...g.shape,
                ...V.shape,
                progressToken: l
            }),
            W = v.extend({
                method: o.literal("notifications/progress"),
                params: Q
            }),
            Z = f.extend({
                cursor: p.optional()
            }),
            G = h.extend({
                params: Z.optional()
            }),
            X = b.extend({
                nextCursor: p.optional()
            }),
            J = o.enum(["working", "input_required", "completed", "failed", "cancelled"]),
            Y = o.object({
                taskId: o.string(),
                status: J,
                ttl: o.union([o.number(), o.null()]),
                createdAt: o.string(),
                lastUpdatedAt: o.string(),
                pollInterval: o.optional(o.number()),
                statusMessage: o.optional(o.string())
            }),
            K = b.extend({
                task: Y
            }),
            ee = g.merge(Y),
            et = v.extend({
                method: o.literal("notifications/tasks/status"),
                params: ee
            }),
            en = h.extend({
                method: o.literal("tasks/get"),
                params: f.extend({
                    taskId: o.string()
                })
            }),
            ei = b.merge(Y),
            ea = h.extend({
                method: o.literal("tasks/result"),
                params: f.extend({
                    taskId: o.string()
                })
            });
        b.loose();
        let eo = G.extend({
                method: o.literal("tasks/list")
            }),
            er = X.extend({
                tasks: o.array(Y)
            }),
            es = h.extend({
                method: o.literal("tasks/cancel"),
                params: f.extend({
                    taskId: o.string()
                })
            }),
            ec = b.merge(Y),
            el = o.object({
                uri: o.string(),
                mimeType: o.optional(o.string()),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            ep = el.extend({
                text: o.string()
            }),
            eu = o.string().refine(e => {
                try {
                    return atob(e), !0
                } catch {
                    return !1
                }
            }, {
                message: "Invalid Base64 string"
            }),
            ed = el.extend({
                blob: eu
            }),
            em = o.enum(["user", "assistant"]),
            ef = o.object({
                audience: o.array(em).optional(),
                priority: o.number().min(0).max(1).optional(),
                lastModified: r.datetime({
                    offset: !0
                }).optional()
            }),
            ex = o.object({
                ...E.shape,
                ...q.shape,
                uri: o.string(),
                description: o.optional(o.string()),
                mimeType: o.optional(o.string()),
                size: o.optional(o.number()),
                annotations: ef.optional(),
                _meta: o.optional(o.looseObject({}))
            }),
            eh = o.object({
                ...E.shape,
                ...q.shape,
                uriTemplate: o.string(),
                description: o.optional(o.string()),
                mimeType: o.optional(o.string()),
                annotations: ef.optional(),
                _meta: o.optional(o.looseObject({}))
            }),
            eg = G.extend({
                method: o.literal("resources/list")
            }),
            ev = X.extend({
                resources: o.array(ex)
            }),
            eb = G.extend({
                method: o.literal("resources/templates/list")
            }),
            ek = X.extend({
                resourceTemplates: o.array(eh)
            }),
            ey = f.extend({
                uri: o.string()
            }),
            ew = h.extend({
                method: o.literal("resources/read"),
                params: ey
            }),
            ej = b.extend({
                contents: o.array(o.union([ep, ed]))
            }),
            e_ = v.extend({
                method: o.literal("notifications/resources/list_changed"),
                params: g.optional()
            }),
            ez = h.extend({
                method: o.literal("resources/subscribe"),
                params: ey
            }),
            eS = h.extend({
                method: o.literal("resources/unsubscribe"),
                params: ey
            }),
            eT = g.extend({
                uri: o.string()
            }),
            eC = v.extend({
                method: o.literal("notifications/resources/updated"),
                params: eT
            }),
            eA = o.object({
                name: o.string(),
                description: o.optional(o.string()),
                required: o.optional(o.boolean())
            }),
            eI = o.object({
                ...E.shape,
                ...q.shape,
                description: o.optional(o.string()),
                arguments: o.optional(o.array(eA)),
                _meta: o.optional(o.looseObject({}))
            }),
            eq = G.extend({
                method: o.literal("prompts/list")
            }),
            eE = X.extend({
                prompts: o.array(eI)
            }),
            eF = f.extend({
                name: o.string(),
                arguments: o.record(o.string(), o.string()).optional()
            }),
            eL = h.extend({
                method: o.literal("prompts/get"),
                params: eF
            }),
            eR = o.object({
                type: o.literal("text"),
                text: o.string(),
                annotations: ef.optional(),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            eO = o.object({
                type: o.literal("image"),
                data: eu,
                mimeType: o.string(),
                annotations: ef.optional(),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            eP = o.object({
                type: o.literal("audio"),
                data: eu,
                mimeType: o.string(),
                annotations: ef.optional(),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            eD = o.object({
                type: o.literal("tool_use"),
                name: o.string(),
                id: o.string(),
                input: o.record(o.string(), o.unknown()),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            e$ = o.object({
                type: o.literal("resource"),
                resource: o.union([ep, ed]),
                annotations: ef.optional(),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            eM = ex.extend({
                type: o.literal("resource_link")
            }),
            eB = o.union([eR, eO, eP, eM, e$]),
            eU = o.object({
                role: em,
                content: eB
            }),
            eN = b.extend({
                description: o.string().optional(),
                messages: o.array(eU)
            }),
            eH = v.extend({
                method: o.literal("notifications/prompts/list_changed"),
                params: g.optional()
            }),
            eV = o.object({
                title: o.string().optional(),
                readOnlyHint: o.boolean().optional(),
                destructiveHint: o.boolean().optional(),
                idempotentHint: o.boolean().optional(),
                openWorldHint: o.boolean().optional()
            }),
            eQ = o.object({
                taskSupport: o.enum(["required", "optional", "forbidden"]).optional()
            }),
            eW = o.object({
                ...E.shape,
                ...q.shape,
                description: o.string().optional(),
                inputSchema: o.object({
                    type: o.literal("object"),
                    properties: o.record(o.string(), c).optional(),
                    required: o.array(o.string()).optional()
                }).catchall(o.unknown()),
                outputSchema: o.object({
                    type: o.literal("object"),
                    properties: o.record(o.string(), c).optional(),
                    required: o.array(o.string()).optional()
                }).catchall(o.unknown()).optional(),
                annotations: eV.optional(),
                execution: eQ.optional(),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            eZ = G.extend({
                method: o.literal("tools/list")
            }),
            eG = X.extend({
                tools: o.array(eW)
            }),
            eX = b.extend({
                content: o.array(eB).default([]),
                structuredContent: o.record(o.string(), o.unknown()).optional(),
                isError: o.boolean().optional()
            });
        eX.or(b.extend({
            toolResult: o.unknown()
        }));
        let eJ = x.extend({
                name: o.string(),
                arguments: o.record(o.string(), o.unknown()).optional()
            }),
            eY = h.extend({
                method: o.literal("tools/call"),
                params: eJ
            }),
            eK = v.extend({
                method: o.literal("notifications/tools/list_changed"),
                params: g.optional()
            });
        o.object({
            autoRefresh: o.boolean().default(!0),
            debounceMs: o.number().int().nonnegative().default(300)
        });
        let e0 = o.enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
            e1 = f.extend({
                level: e0
            }),
            e2 = h.extend({
                method: o.literal("logging/setLevel"),
                params: e1
            }),
            e3 = g.extend({
                level: e0,
                logger: o.string().optional(),
                data: o.unknown()
            }),
            e4 = v.extend({
                method: o.literal("notifications/message"),
                params: e3
            }),
            e9 = o.object({
                name: o.string().optional()
            }),
            e6 = o.object({
                hints: o.array(e9).optional(),
                costPriority: o.number().min(0).max(1).optional(),
                speedPriority: o.number().min(0).max(1).optional(),
                intelligencePriority: o.number().min(0).max(1).optional()
            }),
            e5 = o.object({
                mode: o.enum(["auto", "required", "none"]).optional()
            }),
            e8 = o.object({
                type: o.literal("tool_result"),
                toolUseId: o.string().describe("The unique identifier for the corresponding tool call."),
                content: o.array(eB).default([]),
                structuredContent: o.object({}).loose().optional(),
                isError: o.boolean().optional(),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            e7 = o.discriminatedUnion("type", [eR, eO, eP]),
            te = o.discriminatedUnion("type", [eR, eO, eP, eD, e8]),
            tt = o.object({
                role: em,
                content: o.union([te, o.array(te)]),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            tn = x.extend({
                messages: o.array(tt),
                modelPreferences: e6.optional(),
                systemPrompt: o.string().optional(),
                includeContext: o.enum(["none", "thisServer", "allServers"]).optional(),
                temperature: o.number().optional(),
                maxTokens: o.number().int(),
                stopSequences: o.array(o.string()).optional(),
                metadata: c.optional(),
                tools: o.array(eW).optional(),
                toolChoice: e5.optional()
            }),
            ti = h.extend({
                method: o.literal("sampling/createMessage"),
                params: tn
            }),
            ta = b.extend({
                model: o.string(),
                stopReason: o.optional(o.enum(["endTurn", "stopSequence", "maxTokens"]).or(o.string())),
                role: em,
                content: e7
            }),
            to = b.extend({
                model: o.string(),
                stopReason: o.optional(o.enum(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o.string())),
                role: em,
                content: o.union([te, o.array(te)])
            }),
            tr = o.object({
                type: o.literal("boolean"),
                title: o.string().optional(),
                description: o.string().optional(),
                default: o.boolean().optional()
            }),
            ts = o.object({
                type: o.literal("string"),
                title: o.string().optional(),
                description: o.string().optional(),
                minLength: o.number().optional(),
                maxLength: o.number().optional(),
                format: o.enum(["email", "uri", "date", "date-time"]).optional(),
                default: o.string().optional()
            }),
            tc = o.object({
                type: o.enum(["number", "integer"]),
                title: o.string().optional(),
                description: o.string().optional(),
                minimum: o.number().optional(),
                maximum: o.number().optional(),
                default: o.number().optional()
            }),
            tl = o.object({
                type: o.literal("string"),
                title: o.string().optional(),
                description: o.string().optional(),
                enum: o.array(o.string()),
                default: o.string().optional()
            }),
            tp = o.object({
                type: o.literal("string"),
                title: o.string().optional(),
                description: o.string().optional(),
                oneOf: o.array(o.object({
                    const: o.string(),
                    title: o.string()
                })),
                default: o.string().optional()
            }),
            tu = o.object({
                type: o.literal("string"),
                title: o.string().optional(),
                description: o.string().optional(),
                enum: o.array(o.string()),
                enumNames: o.array(o.string()).optional(),
                default: o.string().optional()
            }),
            td = o.union([tl, tp]),
            tm = o.object({
                type: o.literal("array"),
                title: o.string().optional(),
                description: o.string().optional(),
                minItems: o.number().optional(),
                maxItems: o.number().optional(),
                items: o.object({
                    type: o.literal("string"),
                    enum: o.array(o.string())
                }),
                default: o.array(o.string()).optional()
            }),
            tf = o.object({
                type: o.literal("array"),
                title: o.string().optional(),
                description: o.string().optional(),
                minItems: o.number().optional(),
                maxItems: o.number().optional(),
                items: o.object({
                    anyOf: o.array(o.object({
                        const: o.string(),
                        title: o.string()
                    }))
                }),
                default: o.array(o.string()).optional()
            }),
            tx = o.union([tm, tf]),
            th = o.union([tu, td, tx]),
            tg = o.union([th, tr, ts, tc]),
            tv = x.extend({
                mode: o.literal("form").optional(),
                message: o.string(),
                requestedSchema: o.object({
                    type: o.literal("object"),
                    properties: o.record(o.string(), tg),
                    required: o.array(o.string()).optional()
                })
            }),
            tb = x.extend({
                mode: o.literal("url"),
                message: o.string(),
                elicitationId: o.string(),
                url: o.string().url()
            }),
            tk = o.union([tv, tb]),
            ty = h.extend({
                method: o.literal("elicitation/create"),
                params: tk
            }),
            tw = g.extend({
                elicitationId: o.string()
            }),
            tj = v.extend({
                method: o.literal("notifications/elicitation/complete"),
                params: tw
            }),
            t_ = b.extend({
                action: o.enum(["accept", "decline", "cancel"]),
                content: o.preprocess(e => null === e ? void 0 : e, o.record(o.string(), o.union([o.string(), o.number(), o.boolean(), o.array(o.string())])).optional())
            }),
            tz = o.object({
                type: o.literal("ref/resource"),
                uri: o.string()
            }),
            tS = o.object({
                type: o.literal("ref/prompt"),
                name: o.string()
            }),
            tT = f.extend({
                ref: o.union([tS, tz]),
                argument: o.object({
                    name: o.string(),
                    value: o.string()
                }),
                context: o.object({
                    arguments: o.record(o.string(), o.string()).optional()
                }).optional()
            }),
            tC = h.extend({
                method: o.literal("completion/complete"),
                params: tT
            }),
            tA = b.extend({
                completion: o.looseObject({
                    values: o.array(o.string()).max(100),
                    total: o.optional(o.number().int()),
                    hasMore: o.optional(o.boolean())
                })
            }),
            tI = o.object({
                uri: o.string().startsWith("file://"),
                name: o.string().optional(),
                _meta: o.record(o.string(), o.unknown()).optional()
            }),
            tq = h.extend({
                method: o.literal("roots/list"),
                params: f.optional()
            }),
            tE = b.extend({
                roots: o.array(tI)
            }),
            tF = v.extend({
                method: o.literal("notifications/roots/list_changed"),
                params: g.optional()
            });
        o.union([H, M, tC, e2, eL, eq, eg, eb, ew, ez, eS, eY, eZ, en, ea, eo, es]), o.union([A, W, N, tF, et]), o.union([T, ta, to, t_, tE, ei, er, K]), o.union([H, ti, ty, tq, en, ea, eo, es]), o.union([A, W, e4, eC, e_, eK, eH, et, tj]), o.union([T, U, tA, eN, eE, ev, ek, ej, eX, eG, ei, er, K]);
        class tL extends Error {
            constructor(e, t, n) {
                super(`MCP error ${e}: ${t}`), this.code = e, this.data = n, this.name = "McpError"
            }
            static fromError(e, t, n) {
                return e === a.UrlElicitationRequired && n && n.elicitations ? new tR(n.elicitations, t) : new tL(e, t, n)
            }
        }
        class tR extends tL {
            constructor(e, t = `URL elicitation${e.length>1?"s":""} required`) {
                super(a.UrlElicitationRequired, t, {
                    elicitations: e
                })
            }
            get elicitations() {
                return this.data?.elicitations ?? []
            }
        }
        n.d(t, {
            M: () => tL,
            q: () => a
        }, {
            $: ts,
            A: j,
            B: eq,
            C: eE,
            D: eb,
            E: ek,
            F: eg,
            G: ev,
            H: eo,
            I: er,
            J: eZ,
            K: eG,
            L: e4,
            N: tc,
            O: H,
            P: W,
            Q: l,
            R: eH,
            S: s,
            T: ew,
            U: ej,
            V: d,
            W: k,
            X: h,
            Y: eM,
            Z: e_,
            _: b,
            a: tr,
            ab: et,
            b: eY,
            bb: eR,
            c: eX,
            cb: eV,
            d: es,
            db: eK,
            e: ec,
            eb: eW,
            f: A,
            fb: e => _.safeParse(e).success,
            g: eB,
            gb: e => w.safeParse(e).success,
            h: ti,
            hb: e => y.safeParse(e).success,
            i: ta,
            ib: e => j.safeParse(e).success,
            j: to,
            jb: e => x.safeParse(e).success,
            k: K,
            l: tv,
            m: tb,
            n: e$,
            o: T,
            p: th,
            r: ea,
            s: en,
            t: ei,
            u: I,
            v: eO,
            w: F,
            x: _,
            y: z,
            z: S
        })
    }),
    jb: (function(e, t, n) {
        function i(e, t) {
            let n = String(e),
                i = n.indexOf(t),
                a = i,
                o = 0,
                r = 0;
            if ("string" != typeof t) throw TypeError("Expected substring");
            for (; - 1 !== i;) i === a ? ++o > r && (r = o) : o = 1, a = i + t.length, i = n.indexOf(t, a);
            return r
        }
        n.d(t, {
            a: () => i
        })
    }),
    ct: (function(e, t, n) {
        var i, a = n("FfD"),
            o = ("u" > typeof globalThis || ("u" > typeof window ? window : "u" > typeof global ? global : "u" > typeof self && self), {
                exports: {}
            });
        o.exports,
            function(e) {
                function t(e) {
                    var t, n = this,
                        i = (t = 0xefc8249d, function(e) {
                            e = String(e);
                            for (var n = 0; n < e.length; n++) {
                                var i = .02519603282416938 * (t += e.charCodeAt(n));
                                t = i >>> 0, i -= t, i *= t, t = i >>> 0, i -= t, t += 0x100000000 * i
                            }
                            return (t >>> 0) * 23283064365386963e-26
                        });
                    n.next = function() {
                        var e = 2091639 * n.s0 + 23283064365386963e-26 * n.c;
                        return n.s0 = n.s1, n.s1 = n.s2, n.s2 = e - (n.c = 0 | e)
                    }, n.c = 1, n.s0 = i(" "), n.s1 = i(" "), n.s2 = i(" "), n.s0 -= i(e), n.s0 < 0 && (n.s0 += 1), n.s1 -= i(e), n.s1 < 0 && (n.s1 += 1), n.s2 -= i(e), n.s2 < 0 && (n.s2 += 1), i = null
                }

                function n(e, t) {
                    return t.c = e.c, t.s0 = e.s0, t.s1 = e.s1, t.s2 = e.s2, t
                }

                function i(e, i) {
                    var a = new t(e),
                        o = i && i.state,
                        r = a.next;
                    return r.int32 = function() {
                        return 0x100000000 * a.next() | 0
                    }, r.double = function() {
                        return r() + (2097152 * r() | 0) * 11102230246251565e-32
                    }, r.quick = r, o && ("object" == typeof o && n(o, a), r.state = function() {
                        return n(a, {})
                    }), r
                }
                e && e.exports ? e.exports = i : this.alea = i
            }(o);
        let r = (i = o.exports) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i,
            s = a.compile({
                WhiteSpace: {
                    match: /[\t\v\f\ufeff\p{Zs}]+/u,
                    lineBreaks: !0
                },
                Lines: {
                    match: /\r?\n|[\r\u2028\u2029]/u,
                    lineBreaks: !0
                },
                ObjectKey: /\[?(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+\]?(?=:)/u,
                Punctuator: /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![/*]))=?|[?~,:;[\](){}]/u,
                BooleanLiteral: /true|false/u,
                NumericLiteral: /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/u,
                StringLiteral: {
                    match: /(?:'(?:(?!')[^\\\n\r]|\\(?:\r\n|[^]))*')|(?:"(?:(?!")[^\\\n\r]|\\(?:\r\n|[^]))*")/u,
                    value: e => `"${e.slice(1,-1)}"`
                },
                Identifier: /(?:\x23)?(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/u
            }),
            c = /[ \t\v\f\ufeff]+/,
            l = /(?:(?![\s\x00\x22\x27\x3E\x2F\x3D\x00-\x1F\x7F-\x9F])[^\s\x00-\x1F\x7F-\x9F\x22\x27\x3E\x2F\x3D])+/,
            p = /[.#](?:(?!-?\d)(?:[a-zA-Z0-9\xA0-\uFFFF_-])+)/,
            u = RegExp("(?:true|false)"),
            d = RegExp("-?(?:(?:0[xX][\\da-fA-F](?:_?[\\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|-?0n|-?[1-9](?:_?\\d)*n|(?:(?:0(?!\\d)|0\\d*[89]\\d*|[1-9](?:_?\\d)*)(?:\\.(?:\\d(?:_?\\d)*)?)?|\\.\\d(?:_?\\d)*)(?:[eE][+-]?\\d(?:_?\\d)*)?|-?0[0-7]+)"),
            m = RegExp("'(?!.*&[0-9a-zA-Z]+;)[^'\\\\]*(?:\\\\.|\\\\n[^\"\\\\]*|&[^0-9a-zA-Z;]*)*'"),
            f = RegExp('"(?!.*&[0-9a-zA-Z]+;)[^"\\\\]*(?:\\\\.|\\\\n[^"\\\\]*|&[^0-9a-zA-Z;]*)*"'),
            x = RegExp("[^\"\\s'`=<>\\x00]+");

        function h(e) {
            let t = "string" == typeof e && /^(['"]).*?\1$/.test(e) ? e.slice(1, -1) : e;
            return t.startsWith("[") && t.endsWith("]") || t.startsWith("{") && t.endsWith("}") ? JSON.parse(function(e, t = {}) {
                var n;
                let i = e.trim().replace(/[,]+$/, "");
                if ("" === i) return "{}";
                if (!((n = i).startsWith("{") && n.endsWith("}") || n.startsWith("[") && n.endsWith("]"))) throw TypeError("Unexpected input format");
                let a = "";
                for (let e of (s.reset(i), s))
                    if ("WhiteSpace" !== e.type && "Lines" !== e.type) {
                        switch (e.type) {
                            case "Identifier":
                                e.value = `"${t[e.value]||e.value}"`;
                                break;
                            case "ObjectKey":
                                "[" === e.value.slice(0, 1) && "]" === e.value.slice(-1) ? e.value = `"${t[e.value.slice(1,-1)]||e.value.slice(1,-1)}"` : e.value = `"${e.value}"`
                        }
                        a += e.value
                    } return a.replace(/,([}\]])/g, "$1")
            }(t)) : t
        }
        let g = a.states({
                main: {
                    WhiteSpace: c,
                    AttributeShorthand: p,
                    AttributeName: l,
                    Separator: {
                        match: "=",
                        next: "value"
                    }
                },
                value: {
                    WhiteSpace: {
                        match: c,
                        next: "main"
                    },
                    AttributeShorthand: {
                        match: p,
                        next: "main"
                    },
                    BooleanLiteral: {
                        match: u,
                        next: "main",
                        value: e => "true" === e
                    },
                    NumericLiteral: {
                        match: d,
                        next: "main",
                        value: e => Number.isNaN(Number(e)) ? Number(e.replace(/_|n$/g, "")) : Number(e)
                    },
                    SingleQuotedValue: {
                        match: m,
                        next: "main",
                        value: h,
                        type: () => "StringLiteral"
                    },
                    DoubleQuotedLiteral: {
                        match: f,
                        next: "main",
                        value: h,
                        type: () => "StringLiteral"
                    },
                    UnquotedLiteral: {
                        match: x,
                        next: "main",
                        value: h,
                        type: () => "StringLiteral"
                    },
                    AttributeName: {
                        match: l,
                        next: "main"
                    },
                    Separator: "="
                }
            }),
            v = a.compile({
                spaces: /[\t\v\f\ufeff ]+/,
                name: /[a-zA-Z][\w-]*/,
                attrs: {
                    match: /\{.*\}/,
                    value: e => (function(e) {
                        let t = null,
                            n = g.reset(e),
                            i = {};
                        Object.defineProperties(i, {
                            toString: {
                                writable: !1,
                                enumerable: !1,
                                configurable: !1,
                                value: () => (function(e) {
                                    let t = "";
                                    for (let n in e) {
                                        let i = e[n];
                                        switch (typeof i) {
                                            case "object":
                                                t += ` ${n}='${JSON.stringify(i)}'`;
                                                break;
                                            case "string":
                                                t += ` ${n}="${i}"`;
                                                break;
                                            case "number":
                                            case "boolean":
                                                t += ` ${n}=${i}`
                                        }
                                    }
                                    return t.slice(1)
                                })(i)
                            },
                            getTokens: {
                                writable: !1,
                                enumerable: !1,
                                configurable: !1,
                                value: () => Array.from(g.reset(e))
                            }
                        });
                        let a = [];
                        for (let {
                                type: e,
                                value: o
                            }
                            of n) switch (e) {
                            case "AttributeName":
                                i[t = o] = t;
                                break;
                            case "AttributeShorthand":
                                "." === o[0] ? a.push(o.slice(1)) : "#" === o[0] && (i.id = o.slice(1));
                                break;
                            case "BooleanLiteral":
                            case "NumericLiteral":
                            case "StringLiteral":
                                t && ("class" === t && a.push(o), i[t] = o, t = null)
                        }
                        return a.length && (i.class = a.join(" ")), i
                    })(e.slice(1, -1))
                },
                text: {
                    match: /\[.*\]/,
                    value: e => e.slice(1, -1)
                },
                blockText: {
                    match: /[\s\S]+/,
                    lineBreaks: !0
                }
            });

        function b(e) {
            let {
                type: t,
                level: n,
                raw: i,
                content: a,
                marker: o,
                tag: r
            } = e, s = v.reset(a), c, l, p = "", u = [];
            for (let {
                    type: e,
                    value: t
                }
                of s) switch (e) {
                case "name":
                    c = t;
                    break;
                case "attrs":
                    l = t;
                    break;
                case "text":
                case "blockText":
                    p = t, u = "container" === n ? this.lexer.blockTokens(t) : this.lexer.inlineTokens(t)
            }
            return {
                type: t,
                raw: i,
                meta: {
                    level: n,
                    marker: o,
                    tag: r,
                    name: c
                },
                attrs: l,
                text: p,
                tokens: u
            }
        }

        function k(e) {
            return ["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].includes(e)
        }

        function y(e) {
            let {
                meta: t,
                attrs: n,
                tokens: i = []
            } = e, a = t.name || t.tag, o = `<${a}`;
            return o += n ? " " + n.toString() : "", o += k(a) ? " />" : ">", o += "container" === t.level ? `
` : "", k(a) || (o += "container" === t.level ? this.parser.parse(i) : this.parser.parseInline(i), o += `</${a}>`), o += "inline" === t.level ? "" : `
`
        }
        let w = [{
            level: "container",
            marker: ":::"
        }, {
            level: "block",
            marker: "::"
        }, {
            level: "inline",
            marker: ":"
        }];

        function j(e = w) {
            return {
                extensions: e.map(({
                    level: e,
                    marker: t,
                    tag: n,
                    renderer: i
                }) => {
                    let a = r(t).int32(),
                        o = `directive${e[0].toUpperCase()+e.slice(1).toLowerCase()}${a}`;
                    return {
                        name: o,
                        level: "inline" === e ? "inline" : "block",
                        start: e => {
                            var n;
                            return null == (n = e.match(new RegExp(t))) ? void 0 : n.index
                        },
                        tokenizer(i) {
                            let a = function(e, t) {
                                    switch (e) {
                                        case "container":
                                            return `^${t}([\\s\\S]*?)\\n${t}`;
                                        case "block":
                                            return `^${t}((?:[a-zA-Z][\\w-]*|[\\{\\[].*?[\\}\\]])+)`;
                                        case "inline":
                                            return `^${t}((?:[a-zA-Z][\\w-]*|[\\{].*?[\\}]+|[\\[].*?[\\]])+)`
                                    }
                                }(e, t),
                                r = i.match(new RegExp(a));
                            if (r) {
                                let [i, a = ""] = r;
                                return b.call(this, {
                                    type: o,
                                    level: e,
                                    raw: i,
                                    content: a,
                                    marker: t,
                                    tag: n || ("inline" === e ? "span" : "div")
                                })
                            }
                        },
                        renderer: i || y
                    }
                })
            }
        }
        n.d(t, {
            a: () => j
        })
    }),
    i6: (function(e, t, n) {
        function i() {
            return {
                async: !1,
                breaks: !1,
                extensions: null,
                gfm: !0,
                hooks: null,
                pedantic: !1,
                renderer: null,
                silent: !1,
                tokenizer: null,
                walkTokens: null
            }
        }
        var a = i(),
            o = {
                exec: () => null
            };

        function r(e, t = "") {
            let n = "string" == typeof e ? e : e.source,
                i = {
                    replace: (e, t) => {
                        let a = "string" == typeof t ? t : t.source;
                        return a = a.replace(s.caret, "$1"), n = n.replace(e, a), i
                    },
                    getRegex: () => new RegExp(n, t)
                };
            return i
        }
        var s = {
                codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
                outputLinkReplace: /\\([\[\]])/g,
                indentCodeCompensation: /^(\s+)(?:```)/,
                beginningSpace: /^\s+/,
                endingHash: /#$/,
                startingSpaceChar: /^ /,
                endingSpaceChar: / $/,
                nonSpaceChar: /[^ ]/,
                newLineCharGlobal: /\n/g,
                tabCharGlobal: /\t/g,
                multipleSpaceGlobal: /\s+/g,
                blankLine: /^[ \t]*$/,
                doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
                blockquoteStart: /^ {0,3}>/,
                blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
                blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
                listReplaceTabs: /^\t+/,
                listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
                listIsTask: /^\[[ xX]\] /,
                listReplaceTask: /^\[[ xX]\] +/,
                anyLine: /\n.*\n/,
                hrefBrackets: /^<(.*)>$/,
                tableDelimiter: /[:|]/,
                tableAlignChars: /^\||\| *$/g,
                tableRowBlankLine: /\n[ \t]*$/,
                tableAlignRight: /^ *-+: *$/,
                tableAlignCenter: /^ *:-+: *$/,
                tableAlignLeft: /^ *:-+ *$/,
                startATag: /^<a /i,
                endATag: /^<\/a>/i,
                startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
                endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
                startAngleBracket: /^</,
                endAngleBracket: />$/,
                pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
                unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
                escapeTest: /[&<>"']/,
                escapeReplace: /[&<>"']/g,
                escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
                escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
                unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
                caret: /(^|[^\[])\^/g,
                percentDecode: /%25/g,
                findPipe: /\|/g,
                splitPipe: / \|/,
                slashPipe: /\\\|/g,
                carriageReturn: /\r\n|\r/g,
                spaceLine: /^ +$/gm,
                notSpaceStart: /^\S*/,
                endingNewline: /\n$/,
                listItemRegex: e => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
                nextBulletRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
                hrRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
                fencesBeginRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),
                headingBeginRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}#`),
                htmlBeginRegex: e => RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`, "i")
            },
            c = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
            l = /(?:[*+-]|\d{1,9}[.)])/,
            p = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
            u = r(p).replace(/bull/g, l).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(),
            d = r(p).replace(/bull/g, l).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),
            m = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
            f = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
            x = r(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", f).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
            h = r(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, l).getRegex(),
            g = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
            v = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
            b = r("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", v).replace("tag", g).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
            k = r(m).replace("hr", c).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", g).getRegex(),
            y = {
                blockquote: r(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", k).getRegex(),
                code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
                def: x,
                fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
                heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
                hr: c,
                html: b,
                lheading: u,
                list: h,
                newline: /^(?:[ \t]*(?:\n|$))+/,
                paragraph: k,
                table: o,
                text: /^[^\n]+/
            },
            w = r("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", c).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", g).getRegex(),
            j = {
                ...y,
                lheading: d,
                table: w,
                paragraph: r(m).replace("hr", c).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", w).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", g).getRegex()
            },
            _ = {
                ...y,
                html: r("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", v).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
                heading: /^(#{1,6})(.*)(?:\n+|$)/,
                fences: o,
                lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
                paragraph: r(m).replace("hr", c).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", u).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
            },
            z = /^( {2,}|\\)\n(?!\s*$)/,
            S = /[\p{P}\p{S}]/u,
            T = /[\s\p{P}\p{S}]/u,
            C = /[^\s\p{P}\p{S}]/u,
            A = r(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, T).getRegex(),
            I = /(?!~)[\p{P}\p{S}]/u,
            q = r(/link|html|code/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("code", /[^`](?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(),
            E = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,
            F = r(E, "u").replace(/punct/g, S).getRegex(),
            L = r(E, "u").replace(/punct/g, I).getRegex(),
            R = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",
            O = r(R, "gu").replace(/notPunctSpace/g, C).replace(/punctSpace/g, T).replace(/punct/g, S).getRegex(),
            P = r(R, "gu").replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g, I).getRegex(),
            D = r("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, C).replace(/punctSpace/g, T).replace(/punct/g, S).getRegex(),
            $ = r(/\\(punct)/, "gu").replace(/punct/g, S).getRegex(),
            M = r(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
            B = r(v).replace("(?:--\x3e|$)", "--\x3e").getRegex(),
            U = r("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", B).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
            N = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,
            H = r(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", N).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
            V = r(/^!?\[(label)\]\[(ref)\]/).replace("label", N).replace("ref", f).getRegex(),
            Q = r(/^!?\[(ref)\](?:\[\])?/).replace("ref", f).getRegex(),
            W = r("reflink|nolink(?!\\()", "g").replace("reflink", V).replace("nolink", Q).getRegex(),
            Z = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
            G = {
                _backpedal: o,
                anyPunctuation: $,
                autolink: M,
                blockSkip: q,
                br: z,
                code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                del: o,
                emStrongLDelim: F,
                emStrongRDelimAst: O,
                emStrongRDelimUnd: D,
                escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
                link: H,
                nolink: Q,
                punctuation: A,
                reflink: V,
                reflinkSearch: W,
                tag: U,
                text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
                url: o
            },
            X = {
                ...G,
                link: r(/^!?\[(label)\]\((.*?)\)/).replace("label", N).getRegex(),
                reflink: r(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", N).getRegex()
            },
            J = {
                ...G,
                emStrongRDelimAst: P,
                emStrongLDelim: L,
                url: r(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Z).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
                _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
                del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
                text: r(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Z).getRegex()
            },
            Y = {
                ...J,
                br: r(z).replace("{2,}", "*").getRegex(),
                text: r(J.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
            },
            K = {
                normal: y,
                gfm: j,
                pedantic: _
            },
            ee = {
                normal: G,
                gfm: J,
                breaks: Y,
                pedantic: X
            },
            et = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            en = e => et[e];

        function ei(e, t) {
            if (t) {
                if (s.escapeTest.test(e)) return e.replace(s.escapeReplace, en)
            } else if (s.escapeTestNoEncode.test(e)) return e.replace(s.escapeReplaceNoEncode, en);
            return e
        }

        function ea(e) {
            try {
                e = encodeURI(e).replace(s.percentDecode, "%")
            } catch {
                return null
            }
            return e
        }

        function eo(e, t) {
            let n = e.replace(s.findPipe, (e, t, n) => {
                    let i = !1,
                        a = t;
                    for (; --a >= 0 && "\\" === n[a];) i = !i;
                    return i ? "|" : " |"
                }).split(s.splitPipe),
                i = 0;
            if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t)
                if (n.length > t) n.splice(t);
                else
                    for (; n.length < t;) n.push("");
            for (; i < n.length; i++) n[i] = n[i].trim().replace(s.slashPipe, "|");
            return n
        }

        function er(e, t, n) {
            let i = e.length;
            if (0 === i) return "";
            let a = 0;
            for (; a < i;) {
                let o = e.charAt(i - a - 1);
                if (o !== t || n)
                    if (o !== t && n) a++;
                    else break;
                else a++
            }
            return e.slice(0, i - a)
        }

        function es(e, t, n, i, a) {
            let o = t.href,
                r = t.title || null,
                s = e[1].replace(a.other.outputLinkReplace, "$1");
            i.state.inLink = !0;
            let c = {
                type: "!" === e[0].charAt(0) ? "image" : "link",
                raw: n,
                href: o,
                title: r,
                text: s,
                tokens: i.inlineTokens(s)
            };
            return i.state.inLink = !1, c
        }
        var ec = class {
                options;
                rules;
                lexer;
                constructor(e) {
                    this.options = e || a
                }
                space(e) {
                    let t = this.rules.block.newline.exec(e);
                    if (t && t[0].length > 0) return {
                        type: "space",
                        raw: t[0]
                    }
                }
                code(e) {
                    let t = this.rules.block.code.exec(e);
                    if (t) {
                        let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
                        return {
                            type: "code",
                            raw: t[0],
                            codeBlockStyle: "indented",
                            text: this.options.pedantic ? e : er(e, `
`)
                        }
                    }
                }
                fences(e) {
                    let t = this.rules.block.fences.exec(e);
                    if (t) {
                        let e = t[0],
                            n = function(e, t, n) {
                                let i = e.match(n.other.indentCodeCompensation);
                                if (null === i) return t;
                                let a = i[1];
                                return t.split(`
`).map(e => {
                                    let t = e.match(n.other.beginningSpace);
                                    if (null === t) return e;
                                    let [i] = t;
                                    return i.length >= a.length ? e.slice(a.length) : e
                                }).join(`
`)
                            }(e, t[3] || "", this.rules);
                        return {
                            type: "code",
                            raw: e,
                            lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                            text: n
                        }
                    }
                }
                heading(e) {
                    let t = this.rules.block.heading.exec(e);
                    if (t) {
                        let e = t[2].trim();
                        if (this.rules.other.endingHash.test(e)) {
                            let t = er(e, "#");
                            (this.options.pedantic || !t || this.rules.other.endingSpaceChar.test(t)) && (e = t.trim())
                        }
                        return {
                            type: "heading",
                            raw: t[0],
                            depth: t[1].length,
                            text: e,
                            tokens: this.lexer.inline(e)
                        }
                    }
                }
                hr(e) {
                    let t = this.rules.block.hr.exec(e);
                    if (t) return {
                        type: "hr",
                        raw: er(t[0], `
`)
                    }
                }
                blockquote(e) {
                    let t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        let e = er(t[0], `
`).split(`
`),
                            n = "",
                            i = "",
                            a = [];
                        for (; e.length > 0;) {
                            let t = !1,
                                o = [],
                                r;
                            for (r = 0; r < e.length; r++)
                                if (this.rules.other.blockquoteStart.test(e[r])) o.push(e[r]), t = !0;
                                else if (t) break;
                            else o.push(e[r]);
                            e = e.slice(r);
                            let s = o.join(`
`),
                                c = s.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                            n = n ? `${n}
${s}` : s, i = i ? `${i}
${c}` : c;
                            let l = this.lexer.state.top;
                            if (this.lexer.state.top = !0, this.lexer.blockTokens(c, a, !0), this.lexer.state.top = l, 0 === e.length) break;
                            let p = a.at(-1);
                            if (p?.type === "code") break;
                            if (p?.type === "blockquote") {
                                let t = p.raw + `
` + e.join(`
`),
                                    o = this.blockquote(t);
                                a[a.length - 1] = o, n = n.substring(0, n.length - p.raw.length) + o.raw, i = i.substring(0, i.length - p.text.length) + o.text;
                                break
                            }
                            if (p?.type === "list") {
                                let t = p.raw + `
` + e.join(`
`),
                                    o = this.list(t);
                                a[a.length - 1] = o, n = n.substring(0, n.length - p.raw.length) + o.raw, i = i.substring(0, i.length - p.raw.length) + o.raw, e = t.substring(a.at(-1).raw.length).split(`
`);
                                continue
                            }
                        }
                        return {
                            type: "blockquote",
                            raw: n,
                            tokens: a,
                            text: i
                        }
                    }
                }
                list(e) {
                    let t = this.rules.block.list.exec(e);
                    if (t) {
                        let n = t[1].trim(),
                            i = n.length > 1,
                            a = {
                                type: "list",
                                raw: "",
                                ordered: i,
                                start: i ? +n.slice(0, -1) : "",
                                loose: !1,
                                items: []
                            };
                        n = i ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = i ? n : "[*+-]");
                        let o = this.rules.other.listItemRegex(n),
                            r = !1;
                        for (; e;) {
                            let n = !1,
                                i = "",
                                s = "";
                            if (!(t = o.exec(e)) || this.rules.block.hr.test(e)) break;
                            i = t[0], e = e.substring(i.length);
                            let c = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, e => " ".repeat(3 * e.length)),
                                l = e.split(`
`, 1)[0],
                                p = !c.trim(),
                                u = 0;
                            if (this.options.pedantic ? (u = 2, s = c.trimStart()) : p ? u = t[1].length + 1 : (u = (u = t[2].search(this.rules.other.nonSpaceChar)) > 4 ? 1 : u, s = c.slice(u), u += t[1].length), p && this.rules.other.blankLine.test(l) && (i += l + `
`, e = e.substring(l.length + 1), n = !0), !n) {
                                let t = this.rules.other.nextBulletRegex(u),
                                    n = this.rules.other.hrRegex(u),
                                    a = this.rules.other.fencesBeginRegex(u),
                                    o = this.rules.other.headingBeginRegex(u),
                                    r = this.rules.other.htmlBeginRegex(u);
                                for (; e;) {
                                    let d = e.split(`
`, 1)[0],
                                        m;
                                    if (l = d, m = this.options.pedantic ? l = l.replace(this.rules.other.listReplaceNesting, "  ") : l.replace(this.rules.other.tabCharGlobal, "    "), a.test(l) || o.test(l) || r.test(l) || t.test(l) || n.test(l)) break;
                                    if (m.search(this.rules.other.nonSpaceChar) >= u || !l.trim()) s += `
` + m.slice(u);
                                    else {
                                        if (p || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || a.test(c) || o.test(c) || n.test(c)) break;
                                        s += `
` + l
                                    }
                                    p || l.trim() || (p = !0), i += d + `
`, e = e.substring(d.length + 1), c = m.slice(u)
                                }
                            }
                            a.loose || (r ? a.loose = !0 : this.rules.other.doubleBlankLine.test(i) && (r = !0));
                            let d = null,
                                m;
                            this.options.gfm && (d = this.rules.other.listIsTask.exec(s)) && (m = "[ ] " !== d[0], s = s.replace(this.rules.other.listReplaceTask, "")), a.items.push({
                                type: "list_item",
                                raw: i,
                                task: !!d,
                                checked: m,
                                loose: !1,
                                text: s,
                                tokens: []
                            }), a.raw += i
                        }
                        let s = a.items.at(-1);
                        if (!s) return;
                        s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd(), a.raw = a.raw.trimEnd();
                        for (let e = 0; e < a.items.length; e++)
                            if (this.lexer.state.top = !1, a.items[e].tokens = this.lexer.blockTokens(a.items[e].text, []), !a.loose) {
                                let t = a.items[e].tokens.filter(e => "space" === e.type);
                                a.loose = t.length > 0 && t.some(e => this.rules.other.anyLine.test(e.raw))
                            } if (a.loose)
                            for (let e = 0; e < a.items.length; e++) a.items[e].loose = !0;
                        return a
                    }
                }
                html(e) {
                    let t = this.rules.block.html.exec(e);
                    if (t) return {
                        type: "html",
                        block: !0,
                        raw: t[0],
                        pre: "pre" === t[1] || "script" === t[1] || "style" === t[1],
                        text: t[0]
                    }
                }
                def(e) {
                    let t = this.rules.block.def.exec(e);
                    if (t) {
                        let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
                            n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
                            i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
                        return {
                            type: "def",
                            tag: e,
                            raw: t[0],
                            href: n,
                            title: i
                        }
                    }
                }
                table(e) {
                    let t = this.rules.block.table.exec(e);
                    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
                    let n = eo(t[1]),
                        i = t[2].replace(this.rules.other.tableAlignChars, "").split("|"),
                        a = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [],
                        o = {
                            type: "table",
                            raw: t[0],
                            header: [],
                            align: [],
                            rows: []
                        };
                    if (n.length === i.length) {
                        for (let e of i) this.rules.other.tableAlignRight.test(e) ? o.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? o.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? o.align.push("left") : o.align.push(null);
                        for (let e = 0; e < n.length; e++) o.header.push({
                            text: n[e],
                            tokens: this.lexer.inline(n[e]),
                            header: !0,
                            align: o.align[e]
                        });
                        for (let e of a) o.rows.push(eo(e, o.header.length).map((e, t) => ({
                            text: e,
                            tokens: this.lexer.inline(e),
                            header: !1,
                            align: o.align[t]
                        })));
                        return o
                    }
                }
                lheading(e) {
                    let t = this.rules.block.lheading.exec(e);
                    if (t) return {
                        type: "heading",
                        raw: t[0],
                        depth: "=" === t[2].charAt(0) ? 1 : 2,
                        text: t[1],
                        tokens: this.lexer.inline(t[1])
                    }
                }
                paragraph(e) {
                    let t = this.rules.block.paragraph.exec(e);
                    if (t) {
                        let e = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
                        return {
                            type: "paragraph",
                            raw: t[0],
                            text: e,
                            tokens: this.lexer.inline(e)
                        }
                    }
                }
                text(e) {
                    let t = this.rules.block.text.exec(e);
                    if (t) return {
                        type: "text",
                        raw: t[0],
                        text: t[0],
                        tokens: this.lexer.inline(t[0])
                    }
                }
                escape(e) {
                    let t = this.rules.inline.escape.exec(e);
                    if (t) return {
                        type: "escape",
                        raw: t[0],
                        text: t[1]
                    }
                }
                tag(e) {
                    let t = this.rules.inline.tag.exec(e);
                    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
                        type: "html",
                        raw: t[0],
                        inLink: this.lexer.state.inLink,
                        inRawBlock: this.lexer.state.inRawBlock,
                        block: !1,
                        text: t[0]
                    }
                }
                link(e) {
                    let t = this.rules.inline.link.exec(e);
                    if (t) {
                        let e = t[2].trim();
                        if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
                            if (!this.rules.other.endAngleBracket.test(e)) return;
                            let t = er(e.slice(0, -1), "\\");
                            if ((e.length - t.length) % 2 == 0) return
                        } else {
                            let e = function(e) {
                                if (-1 === e.indexOf(")")) return -1;
                                let t = 0;
                                for (let n = 0; n < e.length; n++)
                                    if ("\\" === e[n]) n++;
                                    else if ("(" === e[n]) t++;
                                else if (")" === e[n] && --t < 0) return n;
                                return t > 0 ? -2 : -1
                            }(t[2]);
                            if (-2 === e) return;
                            if (e > -1) {
                                let n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                                t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = ""
                            }
                        }
                        let n = t[2],
                            i = "";
                        if (this.options.pedantic) {
                            let e = this.rules.other.pedanticHrefTitle.exec(n);
                            e && (n = e[1], i = e[3])
                        } else i = t[3] ? t[3].slice(1, -1) : "";
                        return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), es(t, {
                            href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
                            title: i && i.replace(this.rules.inline.anyPunctuation, "$1")
                        }, t[0], this.lexer, this.rules)
                    }
                }
                reflink(e, t) {
                    let n;
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
                        if (!e) {
                            let e = n[0].charAt(0);
                            return {
                                type: "text",
                                raw: e,
                                text: e
                            }
                        }
                        return es(n, e, n[0], this.lexer, this.rules)
                    }
                }
                emStrong(e, t, n = "") {
                    let i = this.rules.inline.emStrongLDelim.exec(e);
                    if (!(!i || i[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(i[1] || i[2]) || !n || this.rules.inline.punctuation.exec(n))) {
                        let n = [...i[0]].length - 1,
                            a, o, r = n,
                            s = 0,
                            c = "*" === i[0][0] ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                        for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (i = c.exec(t));) {
                            if (!(a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6])) continue;
                            if (o = [...a].length, i[3] || i[4]) {
                                r += o;
                                continue
                            }
                            if ((i[5] || i[6]) && n % 3 && !((n + o) % 3)) {
                                s += o;
                                continue
                            }
                            if ((r -= o) > 0) continue;
                            o = Math.min(o, o + r + s);
                            let t = [...i[0]][0].length,
                                c = e.slice(0, n + i.index + t + o);
                            if (Math.min(n, o) % 2) {
                                let e = c.slice(1, -1);
                                return {
                                    type: "em",
                                    raw: c,
                                    text: e,
                                    tokens: this.lexer.inlineTokens(e)
                                }
                            }
                            let l = c.slice(2, -2);
                            return {
                                type: "strong",
                                raw: c,
                                text: l,
                                tokens: this.lexer.inlineTokens(l)
                            }
                        }
                    }
                }
                codespan(e) {
                    let t = this.rules.inline.code.exec(e);
                    if (t) {
                        let e = t[2].replace(this.rules.other.newLineCharGlobal, " "),
                            n = this.rules.other.nonSpaceChar.test(e),
                            i = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
                        return n && i && (e = e.substring(1, e.length - 1)), {
                            type: "codespan",
                            raw: t[0],
                            text: e
                        }
                    }
                }
                br(e) {
                    let t = this.rules.inline.br.exec(e);
                    if (t) return {
                        type: "br",
                        raw: t[0]
                    }
                }
                del(e) {
                    let t = this.rules.inline.del.exec(e);
                    if (t) return {
                        type: "del",
                        raw: t[0],
                        text: t[2],
                        tokens: this.lexer.inlineTokens(t[2])
                    }
                }
                autolink(e) {
                    let t = this.rules.inline.autolink.exec(e);
                    if (t) {
                        let e, n;
                        return n = "@" === t[2] ? "mailto:" + (e = t[1]) : e = t[1], {
                            type: "link",
                            raw: t[0],
                            text: e,
                            href: n,
                            tokens: [{
                                type: "text",
                                raw: e,
                                text: e
                            }]
                        }
                    }
                }
                url(e) {
                    let t;
                    if (t = this.rules.inline.url.exec(e)) {
                        let e, n;
                        if ("@" === t[2]) n = "mailto:" + (e = t[0]);
                        else {
                            let i;
                            do i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ""; while (i !== t[0]) e = t[0], n = "www." === t[1] ? "http://" + t[0] : t[0]
                        }
                        return {
                            type: "link",
                            raw: t[0],
                            text: e,
                            href: n,
                            tokens: [{
                                type: "text",
                                raw: e,
                                text: e
                            }]
                        }
                    }
                }
                inlineText(e) {
                    let t = this.rules.inline.text.exec(e);
                    if (t) {
                        let e = this.lexer.state.inRawBlock;
                        return {
                            type: "text",
                            raw: t[0],
                            text: t[0],
                            escaped: e
                        }
                    }
                }
            },
            el = class e {
                tokens;
                options;
                state;
                tokenizer;
                inlineQueue;
                constructor(e) {
                    this.tokens = [], this.tokens.links = Object.create(null), this.options = e || a, this.options.tokenizer = this.options.tokenizer || new ec, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                        inLink: !1,
                        inRawBlock: !1,
                        top: !0
                    };
                    let t = {
                        other: s,
                        block: K.normal,
                        inline: ee.normal
                    };
                    this.options.pedantic ? (t.block = K.pedantic, t.inline = ee.pedantic) : this.options.gfm && (t.block = K.gfm, this.options.breaks ? t.inline = ee.breaks : t.inline = ee.gfm), this.tokenizer.rules = t
                }
                static get rules() {
                    return {
                        block: K,
                        inline: ee
                    }
                }
                static lex(t, n) {
                    return new e(n).lex(t)
                }
                static lexInline(t, n) {
                    return new e(n).inlineTokens(t)
                }
                lex(e) {
                    e = e.replace(s.carriageReturn, `
`), this.blockTokens(e, this.tokens);
                    for (let e = 0; e < this.inlineQueue.length; e++) {
                        let t = this.inlineQueue[e];
                        this.inlineTokens(t.src, t.tokens)
                    }
                    return this.inlineQueue = [], this.tokens
                }
                blockTokens(e, t = [], n = !1) {
                    for (this.options.pedantic && (e = e.replace(s.tabCharGlobal, "    ").replace(s.spaceLine, "")); e;) {
                        let i;
                        if (this.options.extensions?.block?.some(n => !!(i = n.call({
                                lexer: this
                            }, e, t)) && (e = e.substring(i.raw.length), t.push(i), !0))) continue;
                        if (i = this.tokenizer.space(e)) {
                            e = e.substring(i.raw.length);
                            let n = t.at(-1);
                            1 === i.raw.length && void 0 !== n ? n.raw += `
` : t.push(i);
                            continue
                        }
                        if (i = this.tokenizer.code(e)) {
                            e = e.substring(i.raw.length);
                            let n = t.at(-1);
                            n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith(`
`) ? "" : `
`) + i.raw, n.text += `
` + i.text, this.inlineQueue.at(-1).src = n.text) : t.push(i);
                            continue
                        }
                        if ((i = this.tokenizer.fences(e)) || (i = this.tokenizer.heading(e)) || (i = this.tokenizer.hr(e)) || (i = this.tokenizer.blockquote(e)) || (i = this.tokenizer.list(e)) || (i = this.tokenizer.html(e))) {
                            e = e.substring(i.raw.length), t.push(i);
                            continue
                        }
                        if (i = this.tokenizer.def(e)) {
                            e = e.substring(i.raw.length);
                            let n = t.at(-1);
                            n?.type === "paragraph" || n?.type === "text" ? (n.raw += (n.raw.endsWith(`
`) ? "" : `
`) + i.raw, n.text += `
` + i.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
                                href: i.href,
                                title: i.title
                            }, t.push(i));
                            continue
                        }
                        if ((i = this.tokenizer.table(e)) || (i = this.tokenizer.lheading(e))) {
                            e = e.substring(i.raw.length), t.push(i);
                            continue
                        }
                        let a = e;
                        if (this.options.extensions?.startBlock) {
                            let t = 1 / 0,
                                n = e.slice(1),
                                i;
                            this.options.extensions.startBlock.forEach(e => {
                                "number" == typeof(i = e.call({
                                    lexer: this
                                }, n)) && i >= 0 && (t = Math.min(t, i))
                            }), t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1))
                        }
                        if (this.state.top && (i = this.tokenizer.paragraph(a))) {
                            let o = t.at(-1);
                            n && o?.type === "paragraph" ? (o.raw += (o.raw.endsWith(`
`) ? "" : `
`) + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = o.text) : t.push(i), n = a.length !== e.length, e = e.substring(i.raw.length);
                            continue
                        }
                        if (i = this.tokenizer.text(e)) {
                            e = e.substring(i.raw.length);
                            let n = t.at(-1);
                            n?.type === "text" ? (n.raw += (n.raw.endsWith(`
`) ? "" : `
`) + i.raw, n.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(i);
                            continue
                        }
                        if (e) {
                            let t = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(t);
                                break
                            }
                            throw Error(t)
                        }
                    }
                    return this.state.top = !0, t
                }
                inline(e, t = []) {
                    return this.inlineQueue.push({
                        src: e,
                        tokens: t
                    }), t
                }
                inlineTokens(e, t = []) {
                    let n = e,
                        i = null;
                    if (this.tokens.links) {
                        let e = Object.keys(this.tokens.links);
                        if (e.length > 0)
                            for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(n));) e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
                    }
                    for (; null != (i = this.tokenizer.rules.inline.anyPunctuation.exec(n));) n = n.slice(0, i.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                    for (n = " " + n; null != (i = this.tokenizer.rules.inline.blockSkip.exec(n));) {
                        let e = i.index + +!!i.groups?.b;
                        n = n.slice(0, e) + "[" + "a".repeat(this.tokenizer.rules.inline.blockSkip.lastIndex - e - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex), this.tokenizer.rules.inline.blockSkip.lastIndex--
                    }
                    n = n.slice(1), n = this.options.hooks?.emStrongMask?.call({
                        lexer: this
                    }, n) ?? n;
                    let a = !1,
                        o = "";
                    for (; e;) {
                        let i;
                        if (a || (o = ""), a = !1, this.options.extensions?.inline?.some(n => !!(i = n.call({
                                lexer: this
                            }, e, t)) && (e = e.substring(i.raw.length), t.push(i), !0))) continue;
                        if ((i = this.tokenizer.escape(e)) || (i = this.tokenizer.tag(e)) || (i = this.tokenizer.link(e))) {
                            e = e.substring(i.raw.length), t.push(i);
                            continue
                        }
                        if (i = this.tokenizer.reflink(e, this.tokens.links)) {
                            e = e.substring(i.raw.length);
                            let n = t.at(-1);
                            "text" === i.type && n?.type === "text" ? (n.raw += i.raw, n.text += i.text) : t.push(i);
                            continue
                        }
                        if ((i = this.tokenizer.emStrong(e, n, o)) || (i = this.tokenizer.codespan(e)) || (i = this.tokenizer.br(e)) || (i = this.tokenizer.del(e)) || (i = this.tokenizer.autolink(e)) || !this.state.inLink && (i = this.tokenizer.url(e))) {
                            e = e.substring(i.raw.length), t.push(i);
                            continue
                        }
                        let r = e;
                        if (this.options.extensions?.startInline) {
                            let t = 1 / 0,
                                n = e.slice(1),
                                i;
                            this.options.extensions.startInline.forEach(e => {
                                "number" == typeof(i = e.call({
                                    lexer: this
                                }, n)) && i >= 0 && (t = Math.min(t, i))
                            }), t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1))
                        }
                        if (i = this.tokenizer.inlineText(r)) {
                            e = e.substring(i.raw.length), "_" !== i.raw.slice(-1) && (o = i.raw.slice(-1)), a = !0;
                            let n = t.at(-1);
                            n?.type === "text" ? (n.raw += i.raw, n.text += i.text) : t.push(i);
                            continue
                        }
                        if (e) {
                            let t = "Infinite loop on byte: " + e.charCodeAt(0);
                            if (this.options.silent) {
                                console.error(t);
                                break
                            }
                            throw Error(t)
                        }
                    }
                    return t
                }
            },
            ep = class {
                options;
                parser;
                constructor(e) {
                    this.options = e || a
                }
                space(e) {
                    return ""
                }
                code({
                    text: e,
                    lang: t,
                    escaped: n
                }) {
                    let i = (t || "").match(s.notSpaceStart)?.[0],
                        a = e.replace(s.endingNewline, "") + `
`;
                    return i ? '<pre><code class="language-' + ei(i) + '">' + (n ? a : ei(a, !0)) + `</code></pre>
` : "<pre><code>" + (n ? a : ei(a, !0)) + `</code></pre>
`
                }
                blockquote({
                    tokens: e
                }) {
                    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`
                }
                html({
                    text: e
                }) {
                    return e
                }
                def(e) {
                    return ""
                }
                heading({
                    tokens: e,
                    depth: t
                }) {
                    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`
                }
                hr(e) {
                    return `<hr>
`
                }
                list(e) {
                    let t = e.ordered,
                        n = e.start,
                        i = "";
                    for (let t = 0; t < e.items.length; t++) {
                        let n = e.items[t];
                        i += this.listitem(n)
                    }
                    let a = t ? "ol" : "ul";
                    return "<" + a + (t && 1 !== n ? ' start="' + n + '"' : "") + `>
` + i + "</" + a + `>
`
                }
                listitem(e) {
                    let t = "";
                    if (e.task) {
                        let n = this.checkbox({
                            checked: !!e.checked
                        });
                        e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && "text" === e.tokens[0].tokens[0].type && (e.tokens[0].tokens[0].text = n + " " + ei(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
                            type: "text",
                            raw: n + " ",
                            text: n + " ",
                            escaped: !0
                        }) : t += n + " "
                    }
                    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`
                }
                checkbox({
                    checked: e
                }) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
                }
                paragraph({
                    tokens: e
                }) {
                    return `<p>${this.parser.parseInline(e)}</p>
`
                }
                table(e) {
                    let t = "",
                        n = "";
                    for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
                    t += this.tablerow({
                        text: n
                    });
                    let i = "";
                    for (let t = 0; t < e.rows.length; t++) {
                        let a = e.rows[t];
                        n = "";
                        for (let e = 0; e < a.length; e++) n += this.tablecell(a[e]);
                        i += this.tablerow({
                            text: n
                        })
                    }
                    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + i + `</table>
`
                }
                tablerow({
                    text: e
                }) {
                    return `<tr>
${e}</tr>
`
                }
                tablecell(e) {
                    let t = this.parser.parseInline(e.tokens),
                        n = e.header ? "th" : "td";
                    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`
                }
                strong({
                    tokens: e
                }) {
                    return `<strong>${this.parser.parseInline(e)}</strong>`
                }
                em({
                    tokens: e
                }) {
                    return `<em>${this.parser.parseInline(e)}</em>`
                }
                codespan({
                    text: e
                }) {
                    return `<code>${ei(e,!0)}</code>`
                }
                br(e) {
                    return "<br>"
                }
                del({
                    tokens: e
                }) {
                    return `<del>${this.parser.parseInline(e)}</del>`
                }
                link({
                    href: e,
                    title: t,
                    tokens: n
                }) {
                    let i = this.parser.parseInline(n),
                        a = ea(e);
                    if (null === a) return i;
                    let o = '<a href="' + (e = a) + '"';
                    return t && (o += ' title="' + ei(t) + '"'), o += ">" + i + "</a>"
                }
                image({
                    href: e,
                    title: t,
                    text: n,
                    tokens: i
                }) {
                    i && (n = this.parser.parseInline(i, this.parser.textRenderer));
                    let a = ea(e);
                    if (null === a) return ei(n);
                    e = a;
                    let o = `<img src="${e}" alt="${n}"`;
                    return t && (o += ` title="${ei(t)}"`), o += ">"
                }
                text(e) {
                    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : ei(e.text)
                }
            },
            eu = class {
                strong({
                    text: e
                }) {
                    return e
                }
                em({
                    text: e
                }) {
                    return e
                }
                codespan({
                    text: e
                }) {
                    return e
                }
                del({
                    text: e
                }) {
                    return e
                }
                html({
                    text: e
                }) {
                    return e
                }
                text({
                    text: e
                }) {
                    return e
                }
                link({
                    text: e
                }) {
                    return "" + e
                }
                image({
                    text: e
                }) {
                    return "" + e
                }
                br() {
                    return ""
                }
            },
            ed = class e {
                options;
                renderer;
                textRenderer;
                constructor(e) {
                    this.options = e || a, this.options.renderer = this.options.renderer || new ep, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new eu
                }
                static parse(t, n) {
                    return new e(n).parse(t)
                }
                static parseInline(t, n) {
                    return new e(n).parseInline(t)
                }
                parse(e, t = !0) {
                    let n = "";
                    for (let i = 0; i < e.length; i++) {
                        let a = e[i];
                        if (this.options.extensions?.renderers?.[a.type]) {
                            let e = this.options.extensions.renderers[a.type].call({
                                parser: this
                            }, a);
                            if (!1 !== e || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
                                n += e || "";
                                continue
                            }
                        }
                        switch (a.type) {
                            case "space":
                                n += this.renderer.space(a);
                                continue;
                            case "hr":
                                n += this.renderer.hr(a);
                                continue;
                            case "heading":
                                n += this.renderer.heading(a);
                                continue;
                            case "code":
                                n += this.renderer.code(a);
                                continue;
                            case "table":
                                n += this.renderer.table(a);
                                continue;
                            case "blockquote":
                                n += this.renderer.blockquote(a);
                                continue;
                            case "list":
                                n += this.renderer.list(a);
                                continue;
                            case "html":
                                n += this.renderer.html(a);
                                continue;
                            case "def":
                                n += this.renderer.def(a);
                                continue;
                            case "paragraph":
                                n += this.renderer.paragraph(a);
                                continue;
                            case "text": {
                                let o = a,
                                    r = this.renderer.text(o);
                                for (; i + 1 < e.length && "text" === e[i + 1].type;) o = e[++i], r += `
` + this.renderer.text(o);
                                t ? n += this.renderer.paragraph({
                                    type: "paragraph",
                                    raw: r,
                                    text: r,
                                    tokens: [{
                                        type: "text",
                                        raw: r,
                                        text: r,
                                        escaped: !0
                                    }]
                                }) : n += r;
                                continue
                            }
                            default: {
                                let e = 'Token with "' + a.type + '" type was not found.';
                                if (this.options.silent) return console.error(e), "";
                                throw Error(e)
                            }
                        }
                    }
                    return n
                }
                parseInline(e, t = this.renderer) {
                    let n = "";
                    for (let i = 0; i < e.length; i++) {
                        let a = e[i];
                        if (this.options.extensions?.renderers?.[a.type]) {
                            let e = this.options.extensions.renderers[a.type].call({
                                parser: this
                            }, a);
                            if (!1 !== e || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
                                n += e || "";
                                continue
                            }
                        }
                        switch (a.type) {
                            case "escape":
                            case "text":
                                n += t.text(a);
                                break;
                            case "html":
                                n += t.html(a);
                                break;
                            case "link":
                                n += t.link(a);
                                break;
                            case "image":
                                n += t.image(a);
                                break;
                            case "strong":
                                n += t.strong(a);
                                break;
                            case "em":
                                n += t.em(a);
                                break;
                            case "codespan":
                                n += t.codespan(a);
                                break;
                            case "br":
                                n += t.br(a);
                                break;
                            case "del":
                                n += t.del(a);
                                break;
                            default: {
                                let e = 'Token with "' + a.type + '" type was not found.';
                                if (this.options.silent) return console.error(e), "";
                                throw Error(e)
                            }
                        }
                    }
                    return n
                }
            },
            em = class {
                options;
                block;
                constructor(e) {
                    this.options = e || a
                }
                static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
                static passThroughHooksRespectAsync = new Set(["preprocess", "postprocess", "processAllTokens"]);
                preprocess(e) {
                    return e
                }
                postprocess(e) {
                    return e
                }
                processAllTokens(e) {
                    return e
                }
                emStrongMask(e) {
                    return e
                }
                provideLexer() {
                    return this.block ? el.lex : el.lexInline
                }
                provideParser() {
                    return this.block ? ed.parse : ed.parseInline
                }
            },
            ef = class {
                defaults = i();
                options = this.setOptions;
                parse = this.parseMarkdown(!0);
                parseInline = this.parseMarkdown(!1);
                Parser = ed;
                Renderer = ep;
                TextRenderer = eu;
                Lexer = el;
                Tokenizer = ec;
                Hooks = em;
                constructor(...e) {
                    this.use(...e)
                }
                walkTokens(e, t) {
                    let n = [];
                    for (let i of e) switch (n = n.concat(t.call(this, i)), i.type) {
                        case "table":
                            for (let e of i.header) n = n.concat(this.walkTokens(e.tokens, t));
                            for (let e of i.rows)
                                for (let i of e) n = n.concat(this.walkTokens(i.tokens, t));
                            break;
                        case "list":
                            n = n.concat(this.walkTokens(i.items, t));
                            break;
                        default: {
                            let e = i;
                            this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach(i => {
                                let a = e[i].flat(1 / 0);
                                n = n.concat(this.walkTokens(a, t))
                            }) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)))
                        }
                    }
                    return n
                }
                use(...e) {
                    let t = this.defaults.extensions || {
                        renderers: {},
                        childTokens: {}
                    };
                    return e.forEach(e => {
                        let n = {
                            ...e
                        };
                        if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach(e => {
                                if (!e.name) throw Error("extension name required");
                                if ("renderer" in e) {
                                    let n = t.renderers[e.name];
                                    n ? t.renderers[e.name] = function(...t) {
                                        let i = e.renderer.apply(this, t);
                                        return !1 === i && (i = n.apply(this, t)), i
                                    } : t.renderers[e.name] = e.renderer
                                }
                                if ("tokenizer" in e) {
                                    if (!e.level || "block" !== e.level && "inline" !== e.level) throw Error("extension level must be 'block' or 'inline'");
                                    let n = t[e.level];
                                    n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && ("block" === e.level ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]))
                                }
                                "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens)
                            }), n.extensions = t), e.renderer) {
                            let t = this.defaults.renderer || new ep(this.defaults);
                            for (let n in e.renderer) {
                                if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
                                if (["options", "parser"].includes(n)) continue;
                                let i = e.renderer[n],
                                    a = t[n];
                                t[n] = (...e) => {
                                    let n = i.apply(t, e);
                                    return !1 === n && (n = a.apply(t, e)), n || ""
                                }
                            }
                            n.renderer = t
                        }
                        if (e.tokenizer) {
                            let t = this.defaults.tokenizer || new ec(this.defaults);
                            for (let n in e.tokenizer) {
                                if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
                                if (["options", "rules", "lexer"].includes(n)) continue;
                                let i = e.tokenizer[n],
                                    a = t[n];
                                t[n] = (...e) => {
                                    let n = i.apply(t, e);
                                    return !1 === n && (n = a.apply(t, e)), n
                                }
                            }
                            n.tokenizer = t
                        }
                        if (e.hooks) {
                            let t = this.defaults.hooks || new em;
                            for (let n in e.hooks) {
                                if (!(n in t)) throw Error(`hook '${n}' does not exist`);
                                if (["options", "block"].includes(n)) continue;
                                let i = e.hooks[n],
                                    a = t[n];
                                em.passThroughHooks.has(n) ? t[n] = e => {
                                    if (this.defaults.async && em.passThroughHooksRespectAsync.has(n)) return (async () => {
                                        let n = await i.call(t, e);
                                        return a.call(t, n)
                                    })();
                                    let o = i.call(t, e);
                                    return a.call(t, o)
                                } : t[n] = (...e) => {
                                    if (this.defaults.async) return (async () => {
                                        let n = await i.apply(t, e);
                                        return !1 === n && (n = await a.apply(t, e)), n
                                    })();
                                    let n = i.apply(t, e);
                                    return !1 === n && (n = a.apply(t, e)), n
                                }
                            }
                            n.hooks = t
                        }
                        if (e.walkTokens) {
                            let t = this.defaults.walkTokens,
                                i = e.walkTokens;
                            n.walkTokens = function(e) {
                                let n = [];
                                return n.push(i.call(this, e)), t && (n = n.concat(t.call(this, e))), n
                            }
                        }
                        this.defaults = {
                            ...this.defaults,
                            ...n
                        }
                    }), this
                }
                setOptions(e) {
                    return this.defaults = {
                        ...this.defaults,
                        ...e
                    }, this
                }
                lexer(e, t) {
                    return el.lex(e, t ?? this.defaults)
                }
                parser(e, t) {
                    return ed.parse(e, t ?? this.defaults)
                }
                parseMarkdown(e) {
                    return (t, n) => {
                        let i = {
                                ...n
                            },
                            a = {
                                ...this.defaults,
                                ...i
                            },
                            o = this.onError(!!a.silent, !!a.async);
                        if (!0 === this.defaults.async && !1 === i.async) return o(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
                        if (typeof t > "u" || null === t) return o(Error("marked(): input parameter is undefined or null"));
                        if ("string" != typeof t) return o(Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
                        if (a.hooks && (a.hooks.options = a, a.hooks.block = e), a.async) return (async () => {
                            let n = a.hooks ? await a.hooks.preprocess(t) : t,
                                i = await (a.hooks ? await a.hooks.provideLexer() : e ? el.lex : el.lexInline)(n, a),
                                o = a.hooks ? await a.hooks.processAllTokens(i) : i;
                            a.walkTokens && await Promise.all(this.walkTokens(o, a.walkTokens));
                            let r = await (a.hooks ? await a.hooks.provideParser() : e ? ed.parse : ed.parseInline)(o, a);
                            return a.hooks ? await a.hooks.postprocess(r) : r
                        })().catch(o);
                        try {
                            a.hooks && (t = a.hooks.preprocess(t));
                            let n = (a.hooks ? a.hooks.provideLexer() : e ? el.lex : el.lexInline)(t, a);
                            a.hooks && (n = a.hooks.processAllTokens(n)), a.walkTokens && this.walkTokens(n, a.walkTokens);
                            let i = (a.hooks ? a.hooks.provideParser() : e ? ed.parse : ed.parseInline)(n, a);
                            return a.hooks && (i = a.hooks.postprocess(i)), i
                        } catch (e) {
                            return o(e)
                        }
                    }
                }
                onError(e, t) {
                    return n => {
                        if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
                            let e = "<p>An error occurred:</p><pre>" + ei(n.message + "", !0) + "</pre>";
                            return t ? Promise.resolve(e) : e
                        }
                        if (t) return Promise.reject(n);
                        throw n
                    }
                }
            },
            ex = new ef;

        function eh(e, t) {
            return ex.parse(e, t)
        }
        eh.options = eh.setOptions = function(e) {
            return ex.setOptions(e), eh.defaults = ex.defaults, a = eh.defaults, eh
        }, eh.getDefaults = i, eh.defaults = a, eh.use = function(...e) {
            return ex.use(...e), eh.defaults = ex.defaults, a = eh.defaults, eh
        }, eh.walkTokens = function(e, t) {
            return ex.walkTokens(e, t)
        }, eh.parseInline = ex.parseInline, eh.Parser = ed, eh.parser = ed.parse, eh.Renderer = ep, eh.TextRenderer = eu, eh.Lexer = el, eh.lexer = el.lex, eh.Tokenizer = ec, eh.Hooks = em, eh.parse = eh, eh.options, eh.setOptions, eh.use;
        var eg = eh.walkTokens,
            ev = (eh.parseInline, ed.parse, el.lex);
        n.d(t, {
            a: () => el,
            b: () => ef,
            c: () => ed,
            d: () => eu,
            e: () => ec,
            f: () => ev,
            g: () => eh,
            h: () => eg
        })
    }),
    Vn: (function(e, t, n) {
        var i = n("Qk"),
            a = n("EAw"),
            o = n("Xq"),
            r = n("fDO"),
            s = n("rBm");
        let c = {}.hasOwnProperty,
            l = {},
            p = /^[^\t\n\r "#'.<=>`}]+$/,
            u = /^[^\t\n\r "'<=>`}]+$/;

        function d() {
            return {
                canContainEols: ["textDirective"],
                enter: {
                    directiveContainer: f,
                    directiveContainerAttributes: y,
                    directiveContainerLabel: b,
                    directiveLeaf: x,
                    directiveLeafAttributes: y,
                    directiveText: h,
                    directiveTextAttributes: y
                },
                exit: {
                    directiveContainer: T,
                    directiveContainerAttributeClassValue: j,
                    directiveContainerAttributeIdValue: w,
                    directiveContainerAttributeName: z,
                    directiveContainerAttributeValue: _,
                    directiveContainerAttributes: S,
                    directiveContainerLabel: k,
                    directiveContainerName: v,
                    directiveLeaf: T,
                    directiveLeafAttributeClassValue: j,
                    directiveLeafAttributeIdValue: w,
                    directiveLeafAttributeName: z,
                    directiveLeafAttributeValue: _,
                    directiveLeafAttributes: S,
                    directiveLeafName: v,
                    directiveText: T,
                    directiveTextAttributeClassValue: j,
                    directiveTextAttributeIdValue: w,
                    directiveTextAttributeName: z,
                    directiveTextAttributeValue: _,
                    directiveTextAttributes: S,
                    directiveTextName: v
                }
            }
        }

        function m(e) {
            let t = e || l;
            if ('"' !== t.quote && "'" !== t.quote && null !== t.quote && void 0 !== t.quote) throw Error("Invalid quote `" + t.quote + "`, expected `'` or `\"`");
            return n.peek = C, {
                handlers: {
                    containerDirective: n,
                    leafDirective: n,
                    textDirective: n
                },
                unsafe: [{
                    character: "\r",
                    inConstruct: ["leafDirectiveLabel", "containerDirectiveLabel"]
                }, {
                    character: "\n",
                    inConstruct: ["leafDirectiveLabel", "containerDirectiveLabel"]
                }, {
                    before: "[^:]",
                    character: ":",
                    after: "[A-Za-z]",
                    inConstruct: ["phrasing"]
                }, {
                    atBreak: !0,
                    character: ":",
                    after: ":"
                }]
            };

            function n(e, n, i, o) {
                var r;
                let l, u, d = i.createTracker(o),
                    m = (l = 0, "containerDirective" === (r = e).type ? ((0, s.a)(r, function(e, t) {
                        if ("containerDirective" === e.type) {
                            let e = t.length,
                                n = 0;
                            for (; e--;) "containerDirective" === t[e].type && n++;
                            n > l && (l = n)
                        }
                    }), l += 3) : l = "leafDirective" === r.type ? 2 : 1, ":".repeat(l)),
                    f = i.enter(e.type),
                    x = d.move(m + (e.name || ""));
                if ("containerDirective" === e.type) {
                    let t = (e.children || [])[0];
                    u = A(t) ? t : void 0
                } else u = e;
                if (u && u.children && u.children.length > 0) {
                    let t = i.enter("label"),
                        n = `${e.type}Label`,
                        a = i.enter(n);
                    x += d.move("["), x += d.move(i.containerPhrasing(u, {
                        ...d.current(),
                        before: x,
                        after: "]"
                    })), x += d.move("]"), a(), t()
                }
                if (x += d.move(function(e, n) {
                        let i, o, r, s, l = e.attributes || {},
                            u = [];
                        for (s in l)
                            if (c.call(l, s) && void 0 !== l[s] && null !== l[s]) {
                                let c = String(l[s]);
                                if ("id" === s) r = !1 !== t.preferShortcut && p.test(c) ? "#" + c : a("id", c, e, n);
                                else if ("class" === s) {
                                    let r = c.split(/[\t\n\r ]+/g),
                                        s = [],
                                        l = [],
                                        u = -1;
                                    for (; ++u < r.length;)(!1 !== t.preferShortcut && p.test(r[u]) ? l : s).push(r[u]);
                                    i = s.length > 0 ? a("class", s.join(" "), e, n) : "", o = l.length > 0 ? "." + l.join(".") : ""
                                } else u.push(a(s, c, e, n))
                            } return i && u.unshift(i), o && u.unshift(o), r && u.unshift(r), u.length > 0 ? "{" + u.join(" ") + "}" : ""
                    }(e, i)), "containerDirective" === e.type) {
                    let t = (e.children || [])[0],
                        n = e;
                    A(t) && (n = Object.assign({}, e, {
                        children: e.children.slice(1)
                    })), n && n.children && n.children.length > 0 && (x += d.move("\n"), x += d.move(i.containerFlow(n, d.current()))), x += d.move("\n" + m)
                }
                return f(), x
            }

            function a(e, n, a, o) {
                if (!1 !== t.collapseEmptyAttributes && !n) return e;
                if (t.preferUnquoted && u.test(n)) return e + "=" + n;
                let s = t.quote || o.options.quote || '"',
                    c = '"' === s ? "'" : '"',
                    l = t.quoteSmart && (0, i.a)(n, s) > (0, i.a)(n, c) ? c : s,
                    p = "textDirective" === a.type ? [l] : [l, "\n", "\r"];
                return e + "=" + l + (0, r.b)(n, {
                    subset: p
                }) + l
            }
        }

        function f(e) {
            g.call(this, "containerDirective", e)
        }

        function x(e) {
            g.call(this, "leafDirective", e)
        }

        function h(e) {
            g.call(this, "textDirective", e)
        }

        function g(e, t) {
            this.enter({
                type: e,
                name: "",
                attributes: {},
                children: []
            }, t)
        }

        function v(e) {
            let t = this.stack[this.stack.length - 1];
            (0, a.a)("containerDirective" === t.type || "leafDirective" === t.type || "textDirective" === t.type), t.name = this.sliceSerialize(e)
        }

        function b(e) {
            this.enter({
                type: "paragraph",
                data: {
                    directiveLabel: !0
                },
                children: []
            }, e)
        }

        function k(e) {
            this.exit(e)
        }

        function y() {
            this.data.directiveAttributes = [], this.buffer()
        }

        function w(e) {
            let t = this.data.directiveAttributes;
            (0, a.a)(t, "expected `directiveAttributes`"), t.push(["id", (0, o.a)(this.sliceSerialize(e), {
                attribute: !0
            })])
        }

        function j(e) {
            let t = this.data.directiveAttributes;
            (0, a.a)(t, "expected `directiveAttributes`"), t.push(["class", (0, o.a)(this.sliceSerialize(e), {
                attribute: !0
            })])
        }

        function _(e) {
            let t = this.data.directiveAttributes;
            (0, a.a)(t, "expected `directiveAttributes`"), t[t.length - 1][1] = (0, o.a)(this.sliceSerialize(e), {
                attribute: !0
            })
        }

        function z(e) {
            let t = this.data.directiveAttributes;
            (0, a.a)(t, "expected `directiveAttributes`"), t.push([this.sliceSerialize(e), ""])
        }

        function S() {
            let e = this.data.directiveAttributes;
            (0, a.a)(e, "expected `directiveAttributes`");
            let t = {},
                n = -1;
            for (; ++n < e.length;) {
                let i = e[n];
                "class" === i[0] && t.class ? t.class += " " + i[1] : t[i[0]] = i[1]
            }
            this.data.directiveAttributes = void 0, this.resume();
            let i = this.stack[this.stack.length - 1];
            (0, a.a)("containerDirective" === i.type || "leafDirective" === i.type || "textDirective" === i.type), i.attributes = t
        }

        function T(e) {
            this.exit(e)
        }

        function C() {
            return ":"
        }

        function A(e) {
            return !!(e && "paragraph" === e.type && e.data && e.data.directiveLabel)
        }
        n.d(t, {
            a: () => d,
            b: () => m
        })
    }),
    RJ: (function(e, t, n) {
        var i = n("UEO"),
            a = n("rBm"),
            o = n("UFz");

        function r(e, t, n) {
            let r = (0, o.a)((n || {}).ignore || []),
                s = function(e) {
                    let t = [];
                    if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
                    let n = !e[0] || Array.isArray(e[0]) ? e : [e],
                        a = -1;
                    for (; ++a < n.length;) {
                        var o;
                        let e = n[a];
                        t.push(["string" == typeof(o = e[0]) ? RegExp((0, i.a)(o), "g") : o, function(e) {
                            return "function" == typeof e ? e : function() {
                                return e
                            }
                        }(e[1])])
                    }
                    return t
                }(t),
                c = -1;
            for (; ++c < s.length;)(0, a.a)(e, "text", l);

            function l(e, t) {
                let n, i = -1;
                for (; ++i < t.length;) {
                    let e = t[i],
                        a = n ? n.children : void 0;
                    if (r(e, a ? a.indexOf(e) : void 0, n)) return;
                    n = e
                }
                if (n) return function(e, t) {
                    let n = t[t.length - 1],
                        i = s[c][0],
                        a = s[c][1],
                        o = 0,
                        r = n.children.indexOf(e),
                        l = !1,
                        p = [];
                    i.lastIndex = 0;
                    let u = i.exec(e.value);
                    for (; u;) {
                        let n = u.index,
                            r = {
                                index: u.index,
                                input: u.input,
                                stack: [...t, e]
                            },
                            s = a(...u, r);
                        if ("string" == typeof s && (s = s.length > 0 ? {
                                type: "text",
                                value: s
                            } : void 0), !1 === s ? i.lastIndex = n + 1 : (o !== n && p.push({
                                type: "text",
                                value: e.value.slice(o, n)
                            }), Array.isArray(s) ? p.push(...s) : s && p.push(s), o = n + u[0].length, l = !0), !i.global) break;
                        u = i.exec(e.value)
                    }
                    return l ? (o < e.value.length && p.push({
                        type: "text",
                        value: e.value.slice(o)
                    }), n.children.splice(r, 1, ...p)) : p = [e], r + p.length
                }(e, t)
            }
        }
        n.d(t, {
            a: () => r
        })
    }),
    cC: (function(e, t, n) {
        n.d(t, {
            a: () => eb
        });
        var i = {};
        n.r(i), n.d(i, {
            attentionMarkers: () => ed,
            contentInitial: () => er,
            disable: () => em,
            document: () => eo,
            flow: () => ec,
            flowInitial: () => es,
            insideSpan: () => eu,
            string: () => el,
            text: () => ep
        });
        var a = n("aV"),
            o = n("Qy");
        class r {
            constructor(e) {
                this.left = e ? [...e] : [], this.right = []
            }
            get(e) {
                if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
                return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1]
            }
            get length() {
                return this.left.length + this.right.length
            }
            shift() {
                return this.setCursor(0), this.right.pop()
            }
            slice(e, t) {
                let n = null == t ? 1 / 0 : t;
                return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse())
            }
            splice(e, t, n) {
                this.setCursor(Math.trunc(e));
                let i = this.right.splice(this.right.length - (t || 0), 1 / 0);
                return n && s(this.left, n), i.reverse()
            }
            pop() {
                return this.setCursor(1 / 0), this.left.pop()
            }
            push(e) {
                this.setCursor(1 / 0), this.left.push(e)
            }
            pushMany(e) {
                this.setCursor(1 / 0), s(this.left, e)
            }
            unshift(e) {
                this.setCursor(0), this.right.push(e)
            }
            unshiftMany(e) {
                this.setCursor(0), s(this.right, e.reverse())
            }
            setCursor(e) {
                if (e !== this.left.length && (!(e > this.left.length) || 0 !== this.right.length) && (!(e < 0) || 0 !== this.left.length))
                    if (e < this.left.length) {
                        let t = this.left.splice(e, 1 / 0);
                        s(this.right, t.reverse())
                    } else {
                        let t = this.right.splice(this.left.length + this.right.length - e, 1 / 0);
                        s(this.left, t.reverse())
                    }
            }
        }

        function s(e, t) {
            let n = 0;
            if (t.length < 1e4) e.push(...t);
            else
                for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4
        }

        function c(e) {
            let t, n, i, a, s, c, l, p = {},
                u = -1,
                d = new r(e);
            for (; ++u < d.length;) {
                for (; u in p;) u = p[u];
                if (t = d.get(u), u && "chunkFlow" === t[1].type && "listItemPrefix" === d.get(u - 1)[1].type && ((i = 0) < (c = t[1]._tokenizer.events).length && "lineEndingBlank" === c[i][1].type && (i += 2), i < c.length && "content" === c[i][1].type))
                    for (; ++i < c.length && "content" !== c[i][1].type;) "chunkText" === c[i][1].type && (c[i][1]._isInFirstContentOfListItem = !0, i++);
                if ("enter" === t[0]) t[1].contentType && (Object.assign(p, function(e, t) {
                    let n, i, a = e.get(t)[1],
                        o = e.get(t)[2],
                        r = t - 1,
                        s = [],
                        c = a._tokenizer;
                    !c && (c = o.parser[a.contentType](a.start), a._contentTypeTextTrailing && (c._contentTypeTextTrailing = !0));
                    let l = c.events,
                        p = [],
                        u = {},
                        d = -1,
                        m = a,
                        f = 0,
                        x = 0,
                        h = [0];
                    for (; m;) {
                        for (; e.get(++r)[1] !== m;);
                        s.push(r), !m._tokenizer && (n = o.sliceStream(m), m.next || n.push(null), i && c.defineSkip(m.start), m._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = !0), c.write(n), m._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)), i = m, m = m.next
                    }
                    for (m = a; ++d < l.length;) "exit" === l[d][0] && "enter" === l[d - 1][0] && l[d][1].type === l[d - 1][1].type && l[d][1].start.line !== l[d][1].end.line && (x = d + 1, h.push(x), m._tokenizer = void 0, m.previous = void 0, m = m.next);
                    for (c.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : h.pop(), d = h.length; d--;) {
                        let t = l.slice(h[d], h[d + 1]),
                            n = s.pop();
                        p.push([n, n + t.length - 1]), e.splice(n, 2, t)
                    }
                    for (p.reverse(), d = -1; ++d < p.length;) u[f + p[d][0]] = f + p[d][1], f += p[d][1] - p[d][0] - 1;
                    return u
                }(d, u)), u = p[u], l = !0);
                else if (t[1]._container) {
                    for (i = u, n = void 0; i--;)
                        if ("lineEnding" === (a = d.get(i))[1].type || "lineEndingBlank" === a[1].type) "enter" === a[0] && (n && (d.get(n)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", n = i);
                        else if ("linePrefix" === a[1].type || "listItemIndent" === a[1].type);
                    else break;
                    n && (t[1].end = {
                        ...d.get(n)[1].start
                    }, (s = d.slice(n, u)).unshift(t), d.splice(n, u - n + 1, s))
                }
            }
            return (0, o.b)(e, 0, 1 / 0, d.slice(0)), !l
        }
        var l = n("REn"),
            p = n("qe"),
            u = n("Ec");
        let d = {
                tokenize: function(e) {
                    let t, n = e.attempt(this.parser.constructs.contentInitial, function(t) {
                        return null === t ? void e.consume(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, p.a)(e, n, "linePrefix"))
                    }, function(n) {
                        return e.enter("paragraph"),
                            function n(i) {
                                let a = e.enter("chunkText", {
                                    contentType: "text",
                                    previous: t
                                });
                                return t && (t.next = a), t = a,
                                    function t(i) {
                                        if (null === i) {
                                            e.exit("chunkText"), e.exit("paragraph"), e.consume(i);
                                            return
                                        }
                                        return (0, u.h)(i) ? (e.consume(i), e.exit("chunkText"), n) : (e.consume(i), t)
                                    }(i)
                            }(n)
                    });
                    return n
                }
            },
            m = {
                tokenize: function(e) {
                    let t, n, i, a = this,
                        r = [],
                        s = 0;
                    return c;

                    function c(t) {
                        if (s < r.length) {
                            let n = r[s];
                            return a.containerState = n[1], e.attempt(n[0].continuation, l, p)(t)
                        }
                        return p(t)
                    }

                    function l(e) {
                        if (s++, a.containerState._closeFlow) {
                            let n;
                            a.containerState._closeFlow = void 0, t && k();
                            let i = a.events.length,
                                r = i;
                            for (; r--;)
                                if ("exit" === a.events[r][0] && "chunkFlow" === a.events[r][1].type) {
                                    n = a.events[r][1].end;
                                    break
                                } b(s);
                            let c = i;
                            for (; c < a.events.length;) a.events[c][1].end = {
                                ...n
                            }, c++;
                            return (0, o.b)(a.events, r + 1, 0, a.events.slice(i)), a.events.length = c, p(e)
                        }
                        return c(e)
                    }

                    function p(n) {
                        if (s === r.length) {
                            if (!t) return x(n);
                            if (t.currentConstruct && t.currentConstruct.concrete) return g(n);
                            a.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
                        }
                        return a.containerState = {}, e.check(f, d, m)(n)
                    }

                    function d(e) {
                        return t && k(), b(s), x(e)
                    }

                    function m(e) {
                        return a.parser.lazy[a.now().line] = s !== r.length, i = a.now().offset, g(e)
                    }

                    function x(t) {
                        return a.containerState = {}, e.attempt(f, h, g)(t)
                    }

                    function h(e) {
                        return s++, r.push([a.currentConstruct, a.containerState]), x(e)
                    }

                    function g(i) {
                        if (null === i) {
                            t && k(), b(0), e.consume(i);
                            return
                        }
                        return t = t || a.parser.flow(a.now()), e.enter("chunkFlow", {
                                _tokenizer: t,
                                contentType: "flow",
                                previous: n
                            }),
                            function t(n) {
                                if (null === n) {
                                    v(e.exit("chunkFlow"), !0), b(0), e.consume(n);
                                    return
                                }
                                return (0, u.h)(n) ? (e.consume(n), v(e.exit("chunkFlow")), s = 0, a.interrupt = void 0, c) : (e.consume(n), t)
                            }(i)
                    }

                    function v(e, r) {
                        let c = a.sliceStream(e);
                        if (r && c.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(c), a.parser.lazy[e.start.line]) {
                            let e, n, r = t.events.length;
                            for (; r--;)
                                if (t.events[r][1].start.offset < i && (!t.events[r][1].end || t.events[r][1].end.offset > i)) return;
                            let c = a.events.length,
                                l = c;
                            for (; l--;)
                                if ("exit" === a.events[l][0] && "chunkFlow" === a.events[l][1].type) {
                                    if (e) {
                                        n = a.events[l][1].end;
                                        break
                                    }
                                    e = !0
                                } for (b(s), r = c; r < a.events.length;) a.events[r][1].end = {
                                ...n
                            }, r++;
                            (0, o.b)(a.events, l + 1, 0, a.events.slice(c)), a.events.length = r
                        }
                    }

                    function b(t) {
                        let n = r.length;
                        for (; n-- > t;) {
                            let t = r[n];
                            a.containerState = t[1], t[0].exit.call(a, e)
                        }
                        r.length = t
                    }

                    function k() {
                        t.write([null]), n = void 0, t = void 0, a.containerState._closeFlow = void 0
                    }
                }
            },
            f = {
                tokenize: function(e, t, n) {
                    return (0, p.a)(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                }
            };
        var x = n("QoD");
        let h = {
                resolve: function(e) {
                    return c(e), e
                },
                tokenize: function(e, t) {
                    let n;
                    return function(t) {
                        return e.enter("content"), n = e.enter("chunkContent", {
                            contentType: "content"
                        }), i(t)
                    };

                    function i(t) {
                        return null === t ? a(t) : (0, u.h)(t) ? e.check(g, o, a)(t) : (e.consume(t), i)
                    }

                    function a(n) {
                        return e.exit("chunkContent"), e.exit("content"), t(n)
                    }

                    function o(t) {
                        return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                            contentType: "content",
                            previous: n
                        }), n = n.next, i
                    }
                }
            },
            g = {
                partial: !0,
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, p.a)(e, a, "linePrefix")
                    };

                    function a(a) {
                        if (null === a || (0, u.h)(a)) return n(a);
                        let o = i.events[i.events.length - 1];
                        return !i.parser.constructs.disable.null.includes("codeIndented") && o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(a) : e.interrupt(i.parser.constructs.flow, n, t)(a)
                    }
                }
            },
            v = {
                tokenize: function(e) {
                    let t = this,
                        n = e.attempt(x.a, function(i) {
                            return null === i ? void e.consume(i) : (e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n)
                        }, e.attempt(this.parser.constructs.flowInitial, i, (0, p.a)(e, e.attempt(this.parser.constructs.flow, i, e.attempt(h, i)), "linePrefix")));
                    return n;

                    function i(i) {
                        return null === i ? void e.consume(i) : (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t.currentConstruct = void 0, n)
                    }
                }
            },
            b = {
                resolveAll: j()
            },
            k = w("string"),
            y = w("text");

        function w(e) {
            return {
                resolveAll: j("text" === e ? _ : void 0),
                tokenize: function(t) {
                    let n = this,
                        i = this.parser.constructs[e],
                        a = t.attempt(i, o, r);
                    return o;

                    function o(e) {
                        return c(e) ? a(e) : r(e)
                    }

                    function r(e) {
                        return null === e ? void t.consume(e) : (t.enter("data"), t.consume(e), s)
                    }

                    function s(e) {
                        return c(e) ? (t.exit("data"), a(e)) : (t.consume(e), s)
                    }

                    function c(e) {
                        if (null === e) return !0;
                        let t = i[e],
                            a = -1;
                        if (t)
                            for (; ++a < t.length;) {
                                let e = t[a];
                                if (!e.previous || e.previous.call(n, n.previous)) return !0
                            }
                        return !1
                    }
                }
            }
        }

        function j(e) {
            return function(t, n) {
                let i, a = -1;
                for (; ++a <= t.length;) void 0 === i ? t[a] && "data" === t[a][1].type && (i = a, a++) : t[a] && "data" === t[a][1].type || (a !== i + 2 && (t[i][1].end = t[a - 1][1].end, t.splice(i + 2, a - i - 2), a = i + 2), i = void 0);
                return e ? e(t, n) : t
            }
        }

        function _(e, t) {
            let n = 0;
            for (; ++n <= e.length;)
                if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                    let i, a = e[n - 1][1],
                        o = t.sliceStream(a),
                        r = o.length,
                        s = -1,
                        c = 0;
                    for (; r--;) {
                        let e = o[r];
                        if ("string" == typeof e) {
                            for (s = e.length; 32 === e.charCodeAt(s - 1);) c++, s--;
                            if (s) break;
                            s = -1
                        } else if (-2 === e) i = !0, c++;
                        else if (-1 === e);
                        else {
                            r++;
                            break
                        }
                    }
                    if (t._contentTypeTextTrailing && n === e.length && (c = 0), c) {
                        let o = {
                            type: n === e.length || i || c < 2 ? "lineSuffix" : "hardBreakTrailing",
                            start: {
                                _bufferIndex: r ? s : a.start._bufferIndex + s,
                                _index: a.start._index + r,
                                line: a.end.line,
                                column: a.end.column - c,
                                offset: a.end.offset - c
                            },
                            end: {
                                ...a.end
                            }
                        };
                        a.end = {
                            ...o.start
                        }, a.start.offset === a.end.offset ? Object.assign(a, o) : (e.splice(n, 0, ["enter", o, t], ["exit", o, t]), n += 2)
                    }
                    n++
                } return e
        }
        let z = {
                name: "thematicBreak",
                tokenize: function(e, t, n) {
                    let i, a = 0;
                    return function(o) {
                        var r;
                        return e.enter("thematicBreak"), i = r = o,
                            function o(r) {
                                return r === i ? (e.enter("thematicBreakSequence"), function t(n) {
                                    return n === i ? (e.consume(n), a++, t) : (e.exit("thematicBreakSequence"), (0, u.j)(n) ? (0, p.a)(e, o, "whitespace")(n) : o(n))
                                }(r)) : a >= 3 && (null === r || (0, u.h)(r)) ? (e.exit("thematicBreak"), t(r)) : n(r)
                            }(r)
                    }
                }
            },
            S = {
                continuation: {
                    tokenize: function(e, t, n) {
                        let i = this;
                        return i.containerState._closeFlow = void 0, e.check(x.a, function(n) {
                            return i.containerState.furtherBlankLines = i.containerState.furtherBlankLines || i.containerState.initialBlankLine, (0, p.a)(e, t, "listItemIndent", i.containerState.size + 1)(n)
                        }, function(n) {
                            return i.containerState.furtherBlankLines || !(0, u.j)(n) ? (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, a(n)) : (i.containerState.furtherBlankLines = void 0, i.containerState.initialBlankLine = void 0, e.attempt(C, t, a)(n))
                        });

                        function a(a) {
                            return i.containerState._closeFlow = !0, i.interrupt = void 0, (0, p.a)(e, e.attempt(S, t, n), "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
                        }
                    }
                },
                exit: function(e) {
                    e.exit(this.containerState.type)
                },
                name: "list",
                tokenize: function(e, t, n) {
                    let i = this,
                        a = i.events[i.events.length - 1],
                        o = a && "linePrefix" === a[1].type ? a[2].sliceSerialize(a[1], !0).length : 0,
                        r = 0;
                    return function(t) {
                        let a = i.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                        if ("listUnordered" === a ? !i.containerState.marker || t === i.containerState.marker : (0, u.e)(t)) {
                            if (i.containerState.type || (i.containerState.type = a, e.enter(a, {
                                    _container: !0
                                })), "listUnordered" === a) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(z, n, s)(t) : s(t);
                            if (!i.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"),
                                function t(a) {
                                    return (0, u.e)(a) && ++r < 10 ? (e.consume(a), t) : (!i.interrupt || r < 2) && (i.containerState.marker ? a === i.containerState.marker : 41 === a || 46 === a) ? (e.exit("listItemValue"), s(a)) : n(a)
                                }(t)
                        }
                        return n(t)
                    };

                    function s(t) {
                        return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), i.containerState.marker = i.containerState.marker || t, e.check(x.a, i.interrupt ? n : c, e.attempt(T, p, l))
                    }

                    function c(e) {
                        return i.containerState.initialBlankLine = !0, o++, p(e)
                    }

                    function l(t) {
                        return (0, u.j)(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), p) : n(t)
                    }

                    function p(n) {
                        return i.containerState.size = o + i.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
                    }
                }
            },
            T = {
                partial: !0,
                tokenize: function(e, t, n) {
                    let i = this;
                    return (0, p.a)(e, function(e) {
                        let a = i.events[i.events.length - 1];
                        return !(0, u.j)(e) && a && "listItemPrefixWhitespace" === a[1].type ? t(e) : n(e)
                    }, "listItemPrefixWhitespace", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
                }
            },
            C = {
                partial: !0,
                tokenize: function(e, t, n) {
                    let i = this;
                    return (0, p.a)(e, function(e) {
                        let a = i.events[i.events.length - 1];
                        return a && "listItemIndent" === a[1].type && a[2].sliceSerialize(a[1], !0).length === i.containerState.size ? t(e) : n(e)
                    }, "listItemIndent", i.containerState.size + 1)
                }
            },
            A = {
                continuation: {
                    tokenize: function(e, t, n) {
                        let i = this;
                        return function(t) {
                            return (0, u.j)(t) ? (0, p.a)(e, a, "linePrefix", i.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t)
                        };

                        function a(i) {
                            return e.attempt(A, t, n)(i)
                        }
                    }
                },
                exit: function(e) {
                    e.exit("blockQuote")
                },
                name: "blockQuote",
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        if (62 === t) {
                            let n = i.containerState;
                            return n.open || (e.enter("blockQuote", {
                                _container: !0
                            }), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a
                        }
                        return n(t)
                    };

                    function a(n) {
                        return (0, u.j)(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                    }
                }
            };

        function I(e, t, n, i, a, o, r, s, c) {
            let l = c || 1 / 0,
                p = 0;
            return function(t) {
                return 60 === t ? (e.enter(i), e.enter(a), e.enter(o), e.consume(t), e.exit(o), d) : null === t || 32 === t || 41 === t || (0, u.d)(t) ? n(t) : (e.enter(i), e.enter(r), e.enter(s), e.enter("chunkString", {
                    contentType: "string"
                }), x(t))
            };

            function d(n) {
                return 62 === n ? (e.enter(o), e.consume(n), e.exit(o), e.exit(a), e.exit(i), t) : (e.enter(s), e.enter("chunkString", {
                    contentType: "string"
                }), m(n))
            }

            function m(t) {
                return 62 === t ? (e.exit("chunkString"), e.exit(s), d(t)) : null === t || 60 === t || (0, u.h)(t) ? n(t) : (e.consume(t), 92 === t ? f : m)
            }

            function f(t) {
                return 60 === t || 62 === t || 92 === t ? (e.consume(t), m) : m(t)
            }

            function x(a) {
                return !p && (null === a || 41 === a || (0, u.i)(a)) ? (e.exit("chunkString"), e.exit(s), e.exit(r), e.exit(i), t(a)) : p < l && 40 === a ? (e.consume(a), p++, x) : 41 === a ? (e.consume(a), p--, x) : null === a || 32 === a || 40 === a || (0, u.d)(a) ? n(a) : (e.consume(a), 92 === a ? h : x)
            }

            function h(t) {
                return 40 === t || 41 === t || 92 === t ? (e.consume(t), x) : x(t)
            }
        }

        function q(e, t, n, i, a, o) {
            let r, s = this,
                c = 0;
            return function(t) {
                return e.enter(i), e.enter(a), e.consume(t), e.exit(a), e.enter(o), l
            };

            function l(d) {
                return c > 999 || null === d || 91 === d || 93 === d && !r || 94 === d && !c && "_hiddenFootnoteSupport" in s.parser.constructs ? n(d) : 93 === d ? (e.exit(o), e.enter(a), e.consume(d), e.exit(a), e.exit(i), t) : (0, u.h)(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), l) : (e.enter("chunkString", {
                    contentType: "string"
                }), p(d))
            }

            function p(t) {
                return null === t || 91 === t || 93 === t || (0, u.h)(t) || c++ > 999 ? (e.exit("chunkString"), l(t)) : (e.consume(t), r || (r = !(0, u.j)(t)), 92 === t ? d : p)
            }

            function d(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t), c++, p) : p(t)
            }
        }

        function E(e, t, n, i, a, o) {
            let r;
            return function(t) {
                return 34 === t || 39 === t || 40 === t ? (e.enter(i), e.enter(a), e.consume(t), e.exit(a), r = 40 === t ? 41 : t, s) : n(t)
            };

            function s(n) {
                return n === r ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), t) : (e.enter(o), c(n))
            }

            function c(t) {
                return t === r ? (e.exit(o), s(r)) : null === t ? n(t) : (0, u.h)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), (0, p.a)(e, c, "linePrefix")) : (e.enter("chunkString", {
                    contentType: "string"
                }), l(t))
            }

            function l(t) {
                return t === r || null === t || (0, u.h)(t) ? (e.exit("chunkString"), c(t)) : (e.consume(t), 92 === t ? d : l)
            }

            function d(t) {
                return t === r || 92 === t ? (e.consume(t), l) : l(t)
            }
        }
        var F = n("Avl"),
            L = n("kUC");
        let R = {
                partial: !0,
                tokenize: function(e, t, n) {
                    return function(t) {
                        return (0, u.i)(t) ? (0, F.a)(e, i)(t) : n(t)
                    };

                    function i(t) {
                        return E(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t)
                    }

                    function a(t) {
                        return (0, u.j)(t) ? (0, p.a)(e, o, "whitespace")(t) : o(t)
                    }

                    function o(e) {
                        return null === e || (0, u.h)(e) ? t(e) : n(e)
                    }
                }
            },
            O = {
                name: "codeIndented",
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return e.enter("codeIndented"), (0, p.a)(e, a, "linePrefix", 5)(t)
                    };

                    function a(t) {
                        let a = i.events[i.events.length - 1];
                        return a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? function t(n) {
                            return null === n ? o(n) : (0, u.h)(n) ? e.attempt(P, t, o)(n) : (e.enter("codeFlowValue"), function n(i) {
                                return null === i || (0, u.h)(i) ? (e.exit("codeFlowValue"), t(i)) : (e.consume(i), n)
                            }(n))
                        }(t) : n(t)
                    }

                    function o(n) {
                        return e.exit("codeIndented"), t(n)
                    }
                }
            },
            P = {
                partial: !0,
                tokenize: function(e, t, n) {
                    let i = this;
                    return a;

                    function a(t) {
                        return i.parser.lazy[i.now().line] ? n(t) : (0, u.h)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : (0, p.a)(e, o, "linePrefix", 5)(t)
                    }

                    function o(e) {
                        let o = i.events[i.events.length - 1];
                        return o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(e) : (0, u.h)(e) ? a(e) : n(e)
                    }
                }
            },
            D = {
                name: "setextUnderline",
                resolveTo: function(e, t) {
                    let n, i, a, o = e.length;
                    for (; o--;)
                        if ("enter" === e[o][0]) {
                            if ("content" === e[o][1].type) {
                                n = o;
                                break
                            }
                            "paragraph" === e[o][1].type && (i = o)
                        } else "content" === e[o][1].type && e.splice(o, 1), a || "definition" !== e[o][1].type || (a = o);
                    let r = {
                        type: "setextHeading",
                        start: {
                            ...e[n][1].start
                        },
                        end: {
                            ...e[e.length - 1][1].end
                        }
                    };
                    return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", r, t]), e.splice(a + 1, 0, ["exit", e[n][1], t]), e[n][1].end = {
                        ...e[a][1].end
                    }) : e[n][1] = r, e.push(["exit", r, t]), e
                },
                tokenize: function(e, t, n) {
                    let i, a = this;
                    return function(t) {
                        var r;
                        let s, c = a.events.length;
                        for (; c--;)
                            if ("lineEnding" !== a.events[c][1].type && "linePrefix" !== a.events[c][1].type && "content" !== a.events[c][1].type) {
                                s = "paragraph" === a.events[c][1].type;
                                break
                            } return !a.parser.lazy[a.now().line] && (a.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, r = t, e.enter("setextHeadingLineSequence"), function t(n) {
                            return n === i ? (e.consume(n), t) : (e.exit("setextHeadingLineSequence"), (0, u.j)(n) ? (0, p.a)(e, o, "lineSuffix")(n) : o(n))
                        }(r)) : n(t)
                    };

                    function o(i) {
                        return null === i || (0, u.h)(i) ? (e.exit("setextHeadingLine"), t(i)) : n(i)
                    }
                }
            },
            $ = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
            M = ["pre", "script", "style", "textarea"],
            B = {
                partial: !0,
                tokenize: function(e, t, n) {
                    return function(i) {
                        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(x.a, t, n)
                    }
                }
            },
            U = {
                partial: !0,
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return (0, u.h)(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t)
                    };

                    function a(e) {
                        return i.parser.lazy[i.now().line] ? n(e) : t(e)
                    }
                }
            },
            N = {
                partial: !0,
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return null === t ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a)
                    };

                    function a(e) {
                        return i.parser.lazy[i.now().line] ? n(e) : t(e)
                    }
                }
            },
            H = {
                concrete: !0,
                name: "codeFenced",
                tokenize: function(e, t, n) {
                    let i, a = this,
                        o = {
                            partial: !0,
                            tokenize: function(e, t, n) {
                                let o = 0;
                                return function(t) {
                                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r
                                };

                                function r(t) {
                                    return e.enter("codeFencedFence"), (0, u.j)(t) ? (0, p.a)(e, c, "linePrefix", a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : c(t)
                                }

                                function c(t) {
                                    return t === i ? (e.enter("codeFencedFenceSequence"), function t(a) {
                                        return a === i ? (o++, e.consume(a), t) : o >= s ? (e.exit("codeFencedFenceSequence"), (0, u.j)(a) ? (0, p.a)(e, l, "whitespace")(a) : l(a)) : n(a)
                                    }(t)) : n(t)
                                }

                                function l(i) {
                                    return null === i || (0, u.h)(i) ? (e.exit("codeFencedFence"), t(i)) : n(i)
                                }
                            }
                        },
                        r = 0,
                        s = 0;
                    return function(t) {
                        var o;
                        let l;
                        return o = t, r = (l = a.events[a.events.length - 1]) && "linePrefix" === l[1].type ? l[2].sliceSerialize(l[1], !0).length : 0, i = o, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"),
                            function t(a) {
                                return a === i ? (s++, e.consume(a), t) : s < 3 ? n(a) : (e.exit("codeFencedFenceSequence"), (0, u.j)(a) ? (0, p.a)(e, c, "whitespace")(a) : c(a))
                            }(o)
                    };

                    function c(o) {
                        return null === o || (0, u.h)(o) ? (e.exit("codeFencedFence"), a.interrupt ? t(o) : e.check(N, d, h)(o)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
                            contentType: "string"
                        }), function t(a) {
                            return null === a || (0, u.h)(a) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(a)) : (0, u.j)(a) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), (0, p.a)(e, l, "whitespace")(a)) : 96 === a && a === i ? n(a) : (e.consume(a), t)
                        }(o))
                    }

                    function l(t) {
                        return null === t || (0, u.h)(t) ? c(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
                            contentType: "string"
                        }), function t(a) {
                            return null === a || (0, u.h)(a) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(a)) : 96 === a && a === i ? n(a) : (e.consume(a), t)
                        }(t))
                    }

                    function d(t) {
                        return e.attempt(o, h, m)(t)
                    }

                    function m(t) {
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), f
                    }

                    function f(t) {
                        return r > 0 && (0, u.j)(t) ? (0, p.a)(e, x, "linePrefix", r + 1)(t) : x(t)
                    }

                    function x(t) {
                        return null === t || (0, u.h)(t) ? e.check(N, d, h)(t) : (e.enter("codeFlowValue"), function t(n) {
                            return null === n || (0, u.h)(n) ? (e.exit("codeFlowValue"), x(n)) : (e.consume(n), t)
                        }(t))
                    }

                    function h(n) {
                        return e.exit("codeFenced"), t(n)
                    }
                }
            };
        var V = n("cx");
        let Q = {
                name: "characterReference",
                tokenize: function(e, t, n) {
                    let i, a, o = this,
                        r = 0;
                    return function(t) {
                        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), s
                    };

                    function s(t) {
                        return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), i = 31, a = u.b, l(t))
                    }

                    function c(t) {
                        return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), i = 6, a = u.f, l) : (e.enter("characterReferenceValue"), i = 7, a = u.e, l(t))
                    }

                    function l(s) {
                        if (59 === s && r) {
                            let i = e.exit("characterReferenceValue");
                            return a !== u.b || (0, V.a)(o.sliceSerialize(i)) ? (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(s)
                        }
                        return a(s) && r++ < i ? (e.consume(s), l) : n(s)
                    }
                }
            },
            W = {
                name: "characterEscape",
                tokenize: function(e, t, n) {
                    return function(t) {
                        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i
                    };

                    function i(i) {
                        return (0, u.g)(i) ? (e.enter("characterEscapeValue"), e.consume(i), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(i)
                    }
                }
            },
            Z = {
                name: "lineEnding",
                tokenize: function(e, t) {
                    return function(n) {
                        return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), (0, p.a)(e, t, "linePrefix")
                    }
                }
            };
        var G = n("yH");
        let X = {
                name: "labelEnd",
                resolveAll: function(e) {
                    let t = -1,
                        n = [];
                    for (; ++t < e.length;) {
                        let i = e[t][1];
                        if (n.push(e[t]), "labelImage" === i.type || "labelLink" === i.type || "labelEnd" === i.type) {
                            let e = "labelImage" === i.type ? 4 : 2;
                            i.type = "data", t += e
                        }
                    }
                    return e.length !== n.length && (0, o.b)(e, 0, e.length, n), e
                },
                resolveTo: function(e, t) {
                    let n, i, a, r, s = e.length,
                        c = 0;
                    for (; s--;)
                        if (n = e[s][1], i) {
                            if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
                            "enter" === e[s][0] && "labelLink" === n.type && (n._inactive = !0)
                        } else if (a) {
                        if ("enter" === e[s][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (i = s, "labelLink" !== n.type)) {
                            c = 2;
                            break
                        }
                    } else "labelEnd" === n.type && (a = s);
                    let l = {
                            type: "labelLink" === e[i][1].type ? "link" : "image",
                            start: {
                                ...e[i][1].start
                            },
                            end: {
                                ...e[e.length - 1][1].end
                            }
                        },
                        p = {
                            type: "label",
                            start: {
                                ...e[i][1].start
                            },
                            end: {
                                ...e[a][1].end
                            }
                        },
                        u = {
                            type: "labelText",
                            start: {
                                ...e[i + c + 2][1].end
                            },
                            end: {
                                ...e[a - 2][1].start
                            }
                        };
                    return r = [
                        ["enter", l, t],
                        ["enter", p, t]
                    ], r = (0, o.a)(r, e.slice(i + 1, i + c + 3)), r = (0, o.a)(r, [
                        ["enter", u, t]
                    ]), r = (0, o.a)(r, (0, G.a)(t.parser.constructs.insideSpan.null, e.slice(i + c + 4, a - 3), t)), r = (0, o.a)(r, [
                        ["exit", u, t], e[a - 2], e[a - 1],
                        ["exit", p, t]
                    ]), r = (0, o.a)(r, e.slice(a + 1)), r = (0, o.a)(r, [
                        ["exit", l, t]
                    ]), (0, o.b)(e, i, e.length, r), e
                },
                tokenize: function(e, t, n) {
                    let i, a, o = this,
                        r = o.events.length;
                    for (; r--;)
                        if (("labelImage" === o.events[r][1].type || "labelLink" === o.events[r][1].type) && !o.events[r][1]._balanced) {
                            i = o.events[r][1];
                            break
                        } return function(t) {
                        return i ? i._inactive ? p(t) : (a = o.parser.defined.includes((0, L.a)(o.sliceSerialize({
                            start: i.end,
                            end: o.now()
                        }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(t)
                    };

                    function s(t) {
                        return 40 === t ? e.attempt(J, l, a ? l : p)(t) : 91 === t ? e.attempt(Y, l, a ? c : p)(t) : a ? l(t) : p(t)
                    }

                    function c(t) {
                        return e.attempt(K, l, p)(t)
                    }

                    function l(e) {
                        return t(e)
                    }

                    function p(e) {
                        return i._balanced = !0, n(e)
                    }
                }
            },
            J = {
                tokenize: function(e, t, n) {
                    return function(t) {
                        return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i
                    };

                    function i(t) {
                        return (0, u.i)(t) ? (0, F.a)(e, a)(t) : a(t)
                    }

                    function a(t) {
                        return 41 === t ? l(t) : I(e, o, r, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                    }

                    function o(t) {
                        return (0, u.i)(t) ? (0, F.a)(e, s)(t) : l(t)
                    }

                    function r(e) {
                        return n(e)
                    }

                    function s(t) {
                        return 34 === t || 39 === t || 40 === t ? E(e, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : l(t)
                    }

                    function c(t) {
                        return (0, u.i)(t) ? (0, F.a)(e, l)(t) : l(t)
                    }

                    function l(i) {
                        return 41 === i ? (e.enter("resourceMarker"), e.consume(i), e.exit("resourceMarker"), e.exit("resource"), t) : n(i)
                    }
                }
            },
            Y = {
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return q.call(i, e, a, o, "reference", "referenceMarker", "referenceString")(t)
                    };

                    function a(e) {
                        return i.parser.defined.includes((0, L.a)(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                    }

                    function o(e) {
                        return n(e)
                    }
                }
            },
            K = {
                tokenize: function(e, t, n) {
                    return function(t) {
                        return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i
                    };

                    function i(i) {
                        return 93 === i ? (e.enter("referenceMarker"), e.consume(i), e.exit("referenceMarker"), e.exit("reference"), t) : n(i)
                    }
                }
            },
            ee = {
                name: "labelStartImage",
                resolveAll: X.resolveAll,
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a
                    };

                    function a(t) {
                        return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t)
                    }

                    function o(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in i.parser.constructs ? n(e) : t(e)
                    }
                }
            };
        var et = n("hm");
        let en = {
            name: "attention",
            resolveAll: function(e, t) {
                let n, i, a, r, s, c, l, p, u = -1;
                for (; ++u < e.length;)
                    if ("enter" === e[u][0] && "attentionSequence" === e[u][1].type && e[u][1]._close) {
                        for (n = u; n--;)
                            if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[u][1]).charCodeAt(0)) {
                                if ((e[n][1]._close || e[u][1]._open) && (e[u][1].end.offset - e[u][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[u][1].end.offset - e[u][1].start.offset) % 3)) continue;
                                c = e[n][1].end.offset - e[n][1].start.offset > 1 && e[u][1].end.offset - e[u][1].start.offset > 1 ? 2 : 1;
                                let d = {
                                        ...e[n][1].end
                                    },
                                    m = {
                                        ...e[u][1].start
                                    };
                                ei(d, -c), ei(m, c), r = {
                                    type: c > 1 ? "strongSequence" : "emphasisSequence",
                                    start: d,
                                    end: {
                                        ...e[n][1].end
                                    }
                                }, s = {
                                    type: c > 1 ? "strongSequence" : "emphasisSequence",
                                    start: {
                                        ...e[u][1].start
                                    },
                                    end: m
                                }, a = {
                                    type: c > 1 ? "strongText" : "emphasisText",
                                    start: {
                                        ...e[n][1].end
                                    },
                                    end: {
                                        ...e[u][1].start
                                    }
                                }, i = {
                                    type: c > 1 ? "strong" : "emphasis",
                                    start: {
                                        ...r.start
                                    },
                                    end: {
                                        ...s.end
                                    }
                                }, e[n][1].end = {
                                    ...r.start
                                }, e[u][1].start = {
                                    ...s.end
                                }, l = [], e[n][1].end.offset - e[n][1].start.offset && (l = (0, o.a)(l, [
                                    ["enter", e[n][1], t],
                                    ["exit", e[n][1], t]
                                ])), l = (0, o.a)(l, [
                                    ["enter", i, t],
                                    ["enter", r, t],
                                    ["exit", r, t],
                                    ["enter", a, t]
                                ]), l = (0, o.a)(l, (0, G.a)(t.parser.constructs.insideSpan.null, e.slice(n + 1, u), t)), l = (0, o.a)(l, [
                                    ["exit", a, t],
                                    ["enter", s, t],
                                    ["exit", s, t],
                                    ["exit", i, t]
                                ]), e[u][1].end.offset - e[u][1].start.offset ? (p = 2, l = (0, o.a)(l, [
                                    ["enter", e[u][1], t],
                                    ["exit", e[u][1], t]
                                ])) : p = 0, (0, o.b)(e, n - 1, u - n + 3, l), u = n + l.length - p - 2;
                                break
                            }
                    } for (u = -1; ++u < e.length;) "attentionSequence" === e[u][1].type && (e[u][1].type = "data");
                return e
            },
            tokenize: function(e, t) {
                let n, i = this.parser.constructs.attentionMarkers.null,
                    a = this.previous,
                    o = (0, et.a)(a);
                return function(r) {
                    return n = r, e.enter("attentionSequence"),
                        function r(s) {
                            if (s === n) return e.consume(s), r;
                            let c = e.exit("attentionSequence"),
                                l = (0, et.a)(s),
                                p = !l || 2 === l && o || i.includes(s),
                                u = !o || 2 === o && l || i.includes(a);
                            return c._open = !!(42 === n ? p : p && (o || !u)), c._close = !!(42 === n ? u : u && (l || !p)), t(s)
                        }(r)
                }
            }
        };

        function ei(e, t) {
            e.column += t, e.offset += t, e._bufferIndex += t
        }
        let ea = {
                name: "labelStartLink",
                resolveAll: X.resolveAll,
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a
                    };

                    function a(e) {
                        return 94 === e && "_hiddenFootnoteSupport" in i.parser.constructs ? n(e) : t(e)
                    }
                }
            },
            eo = {
                42: S,
                43: S,
                45: S,
                48: S,
                49: S,
                50: S,
                51: S,
                52: S,
                53: S,
                54: S,
                55: S,
                56: S,
                57: S,
                62: A
            },
            er = {
                91: {
                    name: "definition",
                    tokenize: function(e, t, n) {
                        let i, a = this;
                        return function(t) {
                            var i;
                            return e.enter("definition"), i = t, q.call(a, e, o, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(i)
                        };

                        function o(t) {
                            return (i = (0, L.a)(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), r) : n(t)
                        }

                        function r(t) {
                            return (0, u.i)(t) ? (0, F.a)(e, s)(t) : s(t)
                        }

                        function s(t) {
                            return I(e, c, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t)
                        }

                        function c(t) {
                            return e.attempt(R, l, l)(t)
                        }

                        function l(t) {
                            return (0, u.j)(t) ? (0, p.a)(e, d, "whitespace")(t) : d(t)
                        }

                        function d(o) {
                            return null === o || (0, u.h)(o) ? (e.exit("definition"), a.parser.defined.push(i), t(o)) : n(o)
                        }
                    }
                }
            },
            es = {
                [-2]: O,
                [-1]: O,
                32: O
            },
            ec = {
                35: {
                    name: "headingAtx",
                    resolve: function(e, t) {
                        let n, i, a = e.length - 2,
                            r = 3;
                        return "whitespace" === e[3][1].type && (r += 2), a - 2 > r && "whitespace" === e[a][1].type && (a -= 2), "atxHeadingSequence" === e[a][1].type && (r === a - 1 || a - 4 > r && "whitespace" === e[a - 2][1].type) && (a -= r + 1 === a ? 2 : 4), a > r && (n = {
                            type: "atxHeadingText",
                            start: e[r][1].start,
                            end: e[a][1].end
                        }, i = {
                            type: "chunkText",
                            start: e[r][1].start,
                            end: e[a][1].end,
                            contentType: "text"
                        }, (0, o.b)(e, r, a - r + 1, [
                            ["enter", n, t],
                            ["enter", i, t],
                            ["exit", i, t],
                            ["exit", n, t]
                        ])), e
                    },
                    tokenize: function(e, t, n) {
                        let i = 0;
                        return function(a) {
                            var o;
                            return e.enter("atxHeading"), o = a, e.enter("atxHeadingSequence"),
                                function a(o) {
                                    return 35 === o && i++ < 6 ? (e.consume(o), a) : null === o || (0, u.i)(o) ? (e.exit("atxHeadingSequence"), function n(i) {
                                        return 35 === i ? (e.enter("atxHeadingSequence"), function t(i) {
                                            return 35 === i ? (e.consume(i), t) : (e.exit("atxHeadingSequence"), n(i))
                                        }(i)) : null === i || (0, u.h)(i) ? (e.exit("atxHeading"), t(i)) : (0, u.j)(i) ? (0, p.a)(e, n, "whitespace")(i) : (e.enter("atxHeadingText"), function t(i) {
                                            return null === i || 35 === i || (0, u.i)(i) ? (e.exit("atxHeadingText"), n(i)) : (e.consume(i), t)
                                        }(i))
                                    }(o)) : n(o)
                                }(o)
                        }
                    }
                },
                42: z,
                45: [D, z],
                60: {
                    concrete: !0,
                    name: "htmlFlow",
                    resolveTo: function(e) {
                        let t = e.length;
                        for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type););
                        return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
                    },
                    tokenize: function(e, t, n) {
                        let i, a, o, r, s, c = this;
                        return function(t) {
                            var n;
                            return n = t, e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(n), l
                        };

                        function l(r) {
                            return 33 === r ? (e.consume(r), p) : 47 === r ? (e.consume(r), a = !0, f) : 63 === r ? (e.consume(r), i = 3, c.interrupt ? t : F) : (0, u.a)(r) ? (e.consume(r), o = String.fromCharCode(r), x) : n(r)
                        }

                        function p(a) {
                            return 45 === a ? (e.consume(a), i = 2, d) : 91 === a ? (e.consume(a), i = 5, r = 0, m) : (0, u.a)(a) ? (e.consume(a), i = 4, c.interrupt ? t : F) : n(a)
                        }

                        function d(i) {
                            return 45 === i ? (e.consume(i), c.interrupt ? t : F) : n(i)
                        }

                        function m(i) {
                            let a = "CDATA[";
                            return i === a.charCodeAt(r++) ? (e.consume(i), r === a.length) ? c.interrupt ? t : z : m : n(i)
                        }

                        function f(t) {
                            return (0, u.a)(t) ? (e.consume(t), o = String.fromCharCode(t), x) : n(t)
                        }

                        function x(r) {
                            if (null === r || 47 === r || 62 === r || (0, u.i)(r)) {
                                let s = 47 === r,
                                    l = o.toLowerCase();
                                return !s && !a && M.includes(l) ? (i = 1, c.interrupt ? t(r) : z(r)) : $.includes(o.toLowerCase()) ? (i = 6, s) ? (e.consume(r), h) : c.interrupt ? t(r) : z(r) : (i = 7, c.interrupt && !c.parser.lazy[c.now().line] ? n(r) : a ? function t(n) {
                                    return (0, u.j)(n) ? (e.consume(n), t) : j(n)
                                }(r) : g(r))
                            }
                            return 45 === r || (0, u.b)(r) ? (e.consume(r), o += String.fromCharCode(r), x) : n(r)
                        }

                        function h(i) {
                            return 62 === i ? (e.consume(i), c.interrupt ? t : z) : n(i)
                        }

                        function g(t) {
                            return 47 === t ? (e.consume(t), j) : 58 === t || 95 === t || (0, u.a)(t) ? (e.consume(t), v) : (0, u.j)(t) ? (e.consume(t), g) : j(t)
                        }

                        function v(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || (0, u.b)(t) ? (e.consume(t), v) : b(t)
                        }

                        function b(t) {
                            return 61 === t ? (e.consume(t), k) : (0, u.j)(t) ? (e.consume(t), b) : g(t)
                        }

                        function k(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), s = t, y) : (0, u.j)(t) ? (e.consume(t), k) : function t(n) {
                                return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || (0, u.i)(n) ? b(n) : (e.consume(n), t)
                            }(t)
                        }

                        function y(t) {
                            return t === s ? (e.consume(t), s = null, w) : null === t || (0, u.h)(t) ? n(t) : (e.consume(t), y)
                        }

                        function w(e) {
                            return 47 === e || 62 === e || (0, u.j)(e) ? g(e) : n(e)
                        }

                        function j(t) {
                            return 62 === t ? (e.consume(t), _) : n(t)
                        }

                        function _(t) {
                            return null === t || (0, u.h)(t) ? z(t) : (0, u.j)(t) ? (e.consume(t), _) : n(t)
                        }

                        function z(t) {
                            return 45 === t && 2 === i ? (e.consume(t), A) : 60 === t && 1 === i ? (e.consume(t), I) : 62 === t && 4 === i ? (e.consume(t), L) : 63 === t && 3 === i ? (e.consume(t), F) : 93 === t && 5 === i ? (e.consume(t), E) : (0, u.h)(t) && (6 === i || 7 === i) ? (e.exit("htmlFlowData"), e.check(B, R, S)(t)) : null === t || (0, u.h)(t) ? (e.exit("htmlFlowData"), S(t)) : (e.consume(t), z)
                        }

                        function S(t) {
                            return e.check(U, T, R)(t)
                        }

                        function T(t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), C
                        }

                        function C(t) {
                            return null === t || (0, u.h)(t) ? S(t) : (e.enter("htmlFlowData"), z(t))
                        }

                        function A(t) {
                            return 45 === t ? (e.consume(t), F) : z(t)
                        }

                        function I(t) {
                            return 47 === t ? (e.consume(t), o = "", q) : z(t)
                        }

                        function q(t) {
                            if (62 === t) {
                                let n = o.toLowerCase();
                                return M.includes(n) ? (e.consume(t), L) : z(t)
                            }
                            return (0, u.a)(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), q) : z(t)
                        }

                        function E(t) {
                            return 93 === t ? (e.consume(t), F) : z(t)
                        }

                        function F(t) {
                            return 62 === t ? (e.consume(t), L) : 45 === t && 2 === i ? (e.consume(t), F) : z(t)
                        }

                        function L(t) {
                            return null === t || (0, u.h)(t) ? (e.exit("htmlFlowData"), R(t)) : (e.consume(t), L)
                        }

                        function R(n) {
                            return e.exit("htmlFlow"), t(n)
                        }
                    }
                },
                61: D,
                95: z,
                96: H,
                126: H
            },
            el = {
                38: Q,
                92: W
            },
            ep = {
                [-5]: Z,
                [-4]: Z,
                [-3]: Z,
                33: ee,
                38: Q,
                42: en,
                60: [{
                    name: "autolink",
                    tokenize: function(e, t, n) {
                        let i = 0;
                        return function(t) {
                            return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a
                        };

                        function a(t) {
                            return (0, u.a)(t) ? (e.consume(t), o) : 64 === t ? n(t) : s(t)
                        }

                        function o(t) {
                            return 43 === t || 45 === t || 46 === t || (0, u.b)(t) ? (i = 1, function t(n) {
                                return 58 === n ? (e.consume(n), i = 0, r) : (43 === n || 45 === n || 46 === n || (0, u.b)(n)) && i++ < 32 ? (e.consume(n), t) : (i = 0, s(n))
                            }(t)) : s(t)
                        }

                        function r(i) {
                            return 62 === i ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(i), e.exit("autolinkMarker"), e.exit("autolink"), t) : null === i || 32 === i || 60 === i || (0, u.d)(i) ? n(i) : (e.consume(i), r)
                        }

                        function s(t) {
                            return 64 === t ? (e.consume(t), c) : (0, u.c)(t) ? (e.consume(t), s) : n(t)
                        }

                        function c(a) {
                            return (0, u.b)(a) ? function a(o) {
                                return 46 === o ? (e.consume(o), i = 0, c) : 62 === o ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(o), e.exit("autolinkMarker"), e.exit("autolink"), t) : function t(o) {
                                    if ((45 === o || (0, u.b)(o)) && i++ < 63) {
                                        let n = 45 === o ? t : a;
                                        return e.consume(o), n
                                    }
                                    return n(o)
                                }(o)
                            }(a) : n(a)
                        }
                    }
                }, {
                    name: "htmlText",
                    tokenize: function(e, t, n) {
                        let i, a, o, r = this;
                        return function(t) {
                            return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), s
                        };

                        function s(t) {
                            return 33 === t ? (e.consume(t), c) : 47 === t ? (e.consume(t), w) : 63 === t ? (e.consume(t), k) : (0, u.a)(t) ? (e.consume(t), _) : n(t)
                        }

                        function c(t) {
                            return 45 === t ? (e.consume(t), l) : 91 === t ? (e.consume(t), a = 0, x) : (0, u.a)(t) ? (e.consume(t), b) : n(t)
                        }

                        function l(t) {
                            return 45 === t ? (e.consume(t), f) : n(t)
                        }

                        function d(t) {
                            return null === t ? n(t) : 45 === t ? (e.consume(t), m) : (0, u.h)(t) ? (o = d, E(t)) : (e.consume(t), d)
                        }

                        function m(t) {
                            return 45 === t ? (e.consume(t), f) : d(t)
                        }

                        function f(e) {
                            return 62 === e ? q(e) : 45 === e ? m(e) : d(e)
                        }

                        function x(t) {
                            let i = "CDATA[";
                            return t === i.charCodeAt(a++) ? (e.consume(t), a === i.length ? h : x) : n(t)
                        }

                        function h(t) {
                            return null === t ? n(t) : 93 === t ? (e.consume(t), g) : (0, u.h)(t) ? (o = h, E(t)) : (e.consume(t), h)
                        }

                        function g(t) {
                            return 93 === t ? (e.consume(t), v) : h(t)
                        }

                        function v(t) {
                            return 62 === t ? q(t) : 93 === t ? (e.consume(t), v) : h(t)
                        }

                        function b(t) {
                            return null === t || 62 === t ? q(t) : (0, u.h)(t) ? (o = b, E(t)) : (e.consume(t), b)
                        }

                        function k(t) {
                            return null === t ? n(t) : 63 === t ? (e.consume(t), y) : (0, u.h)(t) ? (o = k, E(t)) : (e.consume(t), k)
                        }

                        function y(e) {
                            return 62 === e ? q(e) : k(e)
                        }

                        function w(t) {
                            return (0, u.a)(t) ? (e.consume(t), j) : n(t)
                        }

                        function j(t) {
                            return 45 === t || (0, u.b)(t) ? (e.consume(t), j) : function t(n) {
                                return (0, u.h)(n) ? (o = t, E(n)) : (0, u.j)(n) ? (e.consume(n), t) : q(n)
                            }(t)
                        }

                        function _(t) {
                            return 45 === t || (0, u.b)(t) ? (e.consume(t), _) : 47 === t || 62 === t || (0, u.i)(t) ? z(t) : n(t)
                        }

                        function z(t) {
                            return 47 === t ? (e.consume(t), q) : 58 === t || 95 === t || (0, u.a)(t) ? (e.consume(t), S) : (0, u.h)(t) ? (o = z, E(t)) : (0, u.j)(t) ? (e.consume(t), z) : q(t)
                        }

                        function S(t) {
                            return 45 === t || 46 === t || 58 === t || 95 === t || (0, u.b)(t) ? (e.consume(t), S) : function t(n) {
                                return 61 === n ? (e.consume(n), T) : (0, u.h)(n) ? (o = t, E(n)) : (0, u.j)(n) ? (e.consume(n), t) : z(n)
                            }(t)
                        }

                        function T(t) {
                            return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), i = t, C) : (0, u.h)(t) ? (o = T, E(t)) : (0, u.j)(t) ? (e.consume(t), T) : (e.consume(t), A)
                        }

                        function C(t) {
                            return t === i ? (e.consume(t), i = void 0, I) : null === t ? n(t) : (0, u.h)(t) ? (o = C, E(t)) : (e.consume(t), C)
                        }

                        function A(t) {
                            return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || (0, u.i)(t) ? z(t) : (e.consume(t), A)
                        }

                        function I(e) {
                            return 47 === e || 62 === e || (0, u.i)(e) ? z(e) : n(e)
                        }

                        function q(i) {
                            return 62 === i ? (e.consume(i), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(i)
                        }

                        function E(t) {
                            return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), F
                        }

                        function F(t) {
                            return (0, u.j)(t) ? (0, p.a)(e, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : L(t)
                        }

                        function L(t) {
                            return e.enter("htmlTextData"), o(t)
                        }
                    }
                }],
                91: ea,
                92: [{
                    name: "hardBreakEscape",
                    tokenize: function(e, t, n) {
                        return function(t) {
                            return e.enter("hardBreakEscape"), e.consume(t), i
                        };

                        function i(i) {
                            return (0, u.h)(i) ? (e.exit("hardBreakEscape"), t(i)) : n(i)
                        }
                    }
                }, W],
                93: X,
                95: en,
                96: {
                    name: "codeText",
                    previous: function(e) {
                        return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                    },
                    resolve: function(e) {
                        let t, n, i = e.length - 4,
                            a = 3;
                        if (("lineEnding" === e[3][1].type || "space" === e[a][1].type) && ("lineEnding" === e[i][1].type || "space" === e[i][1].type)) {
                            for (t = a; ++t < i;)
                                if ("codeTextData" === e[t][1].type) {
                                    e[a][1].type = "codeTextPadding", e[i][1].type = "codeTextPadding", a += 2, i -= 2;
                                    break
                                }
                        }
                        for (t = a - 1, i++; ++t <= i;) void 0 === n ? t !== i && "lineEnding" !== e[t][1].type && (n = t) : (t === i || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), i -= t - n - 2, t = n + 2), n = void 0);
                        return e
                    },
                    tokenize: function(e, t, n) {
                        let i, a, o = 0;
                        return function(t) {
                            return e.enter("codeText"), e.enter("codeTextSequence"),
                                function t(n) {
                                    return 96 === n ? (e.consume(n), o++, t) : (e.exit("codeTextSequence"), r(n))
                                }(t)
                        };

                        function r(c) {
                            return null === c ? n(c) : 32 === c ? (e.enter("space"), e.consume(c), e.exit("space"), r) : 96 === c ? (a = e.enter("codeTextSequence"), i = 0, function n(r) {
                                return 96 === r ? (e.consume(r), i++, n) : i === o ? (e.exit("codeTextSequence"), e.exit("codeText"), t(r)) : (a.type = "codeTextData", s(r))
                            }(c)) : (0, u.h)(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), r) : (e.enter("codeTextData"), s(c))
                        }

                        function s(t) {
                            return null === t || 32 === t || 96 === t || (0, u.h)(t) ? (e.exit("codeTextData"), r(t)) : (e.consume(t), s)
                        }
                    }
                }
            },
            eu = {
                null: [en, b]
            },
            ed = {
                null: [42, 95]
            },
            em = {
                null: []
            },
            ef = /[\0\t\n\r]/g;
        var ex = n("VD"),
            eh = n("zHD"),
            eg = n("huI");
        let ev = {}.hasOwnProperty;

        function eb(e, t, n) {
            let r, s, p, f;
            return t && "object" == typeof t && (n = t, t = void 0), (function(e) {
                let t = {
                    transforms: [],
                    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                    enter: {
                        autolink: i(v),
                        autolinkProtocol: p,
                        autolinkEmail: p,
                        atxHeading: i(x),
                        blockQuote: i(function() {
                            return {
                                type: "blockquote",
                                children: []
                            }
                        }),
                        characterEscape: p,
                        characterReference: p,
                        codeFenced: i(f),
                        codeFencedFenceInfo: o,
                        codeFencedFenceMeta: o,
                        codeIndented: i(f, o),
                        codeText: i(function() {
                            return {
                                type: "inlineCode",
                                value: ""
                            }
                        }, o),
                        codeTextData: p,
                        data: p,
                        codeFlowValue: p,
                        definition: i(function() {
                            return {
                                type: "definition",
                                identifier: "",
                                label: null,
                                title: null,
                                url: ""
                            }
                        }),
                        definitionDestinationString: o,
                        definitionLabelString: o,
                        definitionTitleString: o,
                        emphasis: i(function() {
                            return {
                                type: "emphasis",
                                children: []
                            }
                        }),
                        hardBreakEscape: i(h),
                        hardBreakTrailing: i(h),
                        htmlFlow: i(g, o),
                        htmlFlowData: p,
                        htmlText: i(g, o),
                        htmlTextData: p,
                        image: i(function() {
                            return {
                                type: "image",
                                title: null,
                                url: "",
                                alt: null
                            }
                        }),
                        label: o,
                        link: i(v),
                        listItem: i(function(e) {
                            return {
                                type: "listItem",
                                spread: e._spread,
                                checked: null,
                                children: []
                            }
                        }),
                        listItemValue: function(e) {
                            this.data.expectingFirstListItemValue && (this.stack[this.stack.length - 2].start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0)
                        },
                        listOrdered: i(b, function() {
                            this.data.expectingFirstListItemValue = !0
                        }),
                        listUnordered: i(b),
                        paragraph: i(function() {
                            return {
                                type: "paragraph",
                                children: []
                            }
                        }),
                        reference: function() {
                            this.data.referenceType = "collapsed"
                        },
                        referenceString: o,
                        resourceDestinationString: o,
                        resourceTitleString: o,
                        setextHeading: i(x),
                        strong: i(function() {
                            return {
                                type: "strong",
                                children: []
                            }
                        }),
                        thematicBreak: i(function() {
                            return {
                                type: "thematicBreak"
                            }
                        })
                    },
                    exit: {
                        atxHeading: s(),
                        atxHeadingSequence: function(e) {
                            let t = this.stack[this.stack.length - 1];
                            t.depth || (t.depth = this.sliceSerialize(e).length)
                        },
                        autolink: s(),
                        autolinkEmail: function(e) {
                            u.call(this, e), this.stack[this.stack.length - 1].url = "mailto:" + this.sliceSerialize(e)
                        },
                        autolinkProtocol: function(e) {
                            u.call(this, e), this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
                        },
                        blockQuote: s(),
                        characterEscapeValue: u,
                        characterReferenceMarkerHexadecimal: m,
                        characterReferenceMarkerNumeric: m,
                        characterReferenceValue: function(e) {
                            let t, n = this.sliceSerialize(e),
                                i = this.data.characterReferenceType;
                            i ? (t = (0, ex.a)(n, "characterReferenceMarkerNumeric" === i ? 10 : 16), this.data.characterReferenceType = void 0) : t = (0, V.a)(n);
                            let a = this.stack[this.stack.length - 1];
                            a.value += t
                        },
                        characterReference: function(e) {
                            this.stack.pop().position.end = ek(e.end)
                        },
                        codeFenced: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
                        }),
                        codeFencedFence: function() {
                            this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
                        },
                        codeFencedFenceInfo: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].lang = e
                        },
                        codeFencedFenceMeta: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].meta = e
                        },
                        codeFlowValue: u,
                        codeIndented: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e.replace(/(\r?\n|\r)$/g, "")
                        }),
                        codeText: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e
                        }),
                        codeTextData: u,
                        data: u,
                        definition: s(),
                        definitionDestinationString: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].url = e
                        },
                        definitionLabelString: function(e) {
                            let t = this.resume(),
                                n = this.stack[this.stack.length - 1];
                            n.label = t, n.identifier = (0, L.a)(this.sliceSerialize(e)).toLowerCase()
                        },
                        definitionTitleString: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].title = e
                        },
                        emphasis: s(),
                        hardBreakEscape: s(d),
                        hardBreakTrailing: s(d),
                        htmlFlow: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e
                        }),
                        htmlFlowData: u,
                        htmlText: s(function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].value = e
                        }),
                        htmlTextData: u,
                        image: s(function() {
                            let e = this.stack[this.stack.length - 1];
                            if (this.data.inReference) {
                                let t = this.data.referenceType || "shortcut";
                                e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                            } else delete e.identifier, delete e.label;
                            this.data.referenceType = void 0
                        }),
                        label: function() {
                            let e = this.stack[this.stack.length - 1],
                                t = this.resume(),
                                n = this.stack[this.stack.length - 1];
                            this.data.inReference = !0, "link" === n.type ? n.children = e.children : n.alt = t
                        },
                        labelText: function(e) {
                            let t = this.sliceSerialize(e),
                                n = this.stack[this.stack.length - 2];
                            n.label = (0, eh.a)(t), n.identifier = (0, L.a)(t).toLowerCase()
                        },
                        lineEnding: function(e) {
                            let n = this.stack[this.stack.length - 1];
                            if (this.data.atHardBreak) {
                                n.children[n.children.length - 1].position.end = ek(e.end), this.data.atHardBreak = void 0;
                                return
                            }!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (p.call(this, e), u.call(this, e))
                        },
                        link: s(function() {
                            let e = this.stack[this.stack.length - 1];
                            if (this.data.inReference) {
                                let t = this.data.referenceType || "shortcut";
                                e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                            } else delete e.identifier, delete e.label;
                            this.data.referenceType = void 0
                        }),
                        listItem: s(),
                        listOrdered: s(),
                        listUnordered: s(),
                        paragraph: s(),
                        referenceString: function(e) {
                            let t = this.resume(),
                                n = this.stack[this.stack.length - 1];
                            n.label = t, n.identifier = (0, L.a)(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full"
                        },
                        resourceDestinationString: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].url = e
                        },
                        resourceTitleString: function() {
                            let e = this.resume();
                            this.stack[this.stack.length - 1].title = e
                        },
                        resource: function() {
                            this.data.inReference = void 0
                        },
                        setextHeading: s(function() {
                            this.data.setextHeadingSlurpLineEnding = void 0
                        }),
                        setextHeadingLineSequence: function(e) {
                            this.stack[this.stack.length - 1].depth = 61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2
                        },
                        setextHeadingText: function() {
                            this.data.setextHeadingSlurpLineEnding = !0
                        },
                        strong: s(),
                        thematicBreak: s()
                    }
                };
                ! function e(t, n) {
                    let i = -1;
                    for (; ++i < n.length;) {
                        let a = n[i];
                        Array.isArray(a) ? e(t, a) : function(e, t) {
                            let n;
                            for (n in t)
                                if (ev.call(t, n)) switch (n) {
                                    case "canContainEols": {
                                        let i = t[n];
                                        i && e[n].push(...i);
                                        break
                                    }
                                    case "transforms": {
                                        let i = t[n];
                                        i && e[n].push(...i);
                                        break
                                    }
                                    case "enter":
                                    case "exit": {
                                        let i = t[n];
                                        i && Object.assign(e[n], i)
                                    }
                                }
                        }(t, a)
                    }
                }(t, (e || {}).mdastExtensions || []);
                let n = {};
                return function(e) {
                    let i = {
                            type: "root",
                            children: []
                        },
                        a = {
                            stack: [i],
                            tokenStack: [],
                            config: t,
                            enter: r,
                            exit: c,
                            buffer: o,
                            resume: l,
                            data: n
                        },
                        s = [],
                        p = -1;
                    for (; ++p < e.length;)("listOrdered" === e[p][1].type || "listUnordered" === e[p][1].type) && ("enter" === e[p][0] ? s.push(p) : p = function(e, t, n) {
                        let i, a, o, r, s = t - 1,
                            c = -1,
                            l = !1;
                        for (; ++s <= n;) {
                            let t = e[s];
                            switch (t[1].type) {
                                case "listUnordered":
                                case "listOrdered":
                                case "blockQuote":
                                    "enter" === t[0] ? c++ : c--, r = void 0;
                                    break;
                                case "lineEndingBlank":
                                    "enter" === t[0] && (!i || r || c || o || (o = s), r = void 0);
                                    break;
                                case "linePrefix":
                                case "listItemValue":
                                case "listItemMarker":
                                case "listItemPrefix":
                                case "listItemPrefixWhitespace":
                                    break;
                                default:
                                    r = void 0
                            }
                            if (!c && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === c && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
                                if (i) {
                                    let r = s;
                                    for (a = void 0; r--;) {
                                        let t = e[r];
                                        if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
                                            if ("exit" === t[0]) continue;
                                            a && (e[a][1].type = "lineEndingBlank", l = !0), t[1].type = "lineEnding", a = r
                                        } else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type);
                                        else break
                                    }
                                    o && (!a || o < a) && (i._spread = !0), i.end = Object.assign({}, a ? e[a][1].start : t[1].end), e.splice(a || s, 0, ["exit", i, t[2]]), s++, n++
                                }
                                if ("listItemPrefix" === t[1].type) {
                                    let a = {
                                        type: "listItem",
                                        _spread: !1,
                                        start: Object.assign({}, t[1].start),
                                        end: void 0
                                    };
                                    i = a, e.splice(s, 0, ["enter", a, t[2]]), s++, n++, o = void 0, r = !0
                                }
                            }
                        }
                        return e[t][1]._spread = l, n
                    }(e, s.pop(), p));
                    for (p = -1; ++p < e.length;) {
                        let n = t[e[p][0]];
                        ev.call(n, e[p][1].type) && n[e[p][1].type].call(Object.assign({
                            sliceSerialize: e[p][2].sliceSerialize
                        }, a), e[p][1])
                    }
                    if (a.tokenStack.length > 0) {
                        let e = a.tokenStack[a.tokenStack.length - 1];
                        (e[1] || ey).call(a, void 0, e[0])
                    }
                    for (i.position = {
                            start: ek(e.length > 0 ? e[0][1].start : {
                                line: 1,
                                column: 1,
                                offset: 0
                            }),
                            end: ek(e.length > 0 ? e[e.length - 2][1].end : {
                                line: 1,
                                column: 1,
                                offset: 0
                            })
                        }, p = -1; ++p < t.transforms.length;) i = t.transforms[p](i) || i;
                    return i
                };

                function i(e, t) {
                    return function(n) {
                        r.call(this, e(n), n), t && t.call(this, n)
                    }
                }

                function o() {
                    this.stack.push({
                        type: "fragment",
                        children: []
                    })
                }

                function r(e, t, n) {
                    this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
                        start: ek(t.start),
                        end: void 0
                    }
                }

                function s(e) {
                    return function(t) {
                        e && e.call(this, t), c.call(this, t)
                    }
                }

                function c(e, t) {
                    let n = this.stack.pop(),
                        i = this.tokenStack.pop();
                    if (i) i[0].type !== e.type && (t ? t.call(this, e, i[0]) : (i[1] || ey).call(this, e, i[0]));
                    else throw Error("Cannot close `" + e.type + "` (" + (0, eg.a)({
                        start: e.start,
                        end: e.end
                    }) + "): it’s not open");
                    n.position.end = ek(e.end)
                }

                function l() {
                    return (0, a.a)(this.stack.pop())
                }

                function p(e) {
                    let t = this.stack[this.stack.length - 1].children,
                        n = t[t.length - 1];
                    n && "text" === n.type || ((n = {
                        type: "text",
                        value: ""
                    }).position = {
                        start: ek(e.start),
                        end: void 0
                    }, t.push(n)), this.stack.push(n)
                }

                function u(e) {
                    let t = this.stack.pop();
                    t.value += this.sliceSerialize(e), t.position.end = ek(e.end)
                }

                function d() {
                    this.data.atHardBreak = !0
                }

                function m(e) {
                    this.data.characterReferenceType = e.type
                }

                function f() {
                    return {
                        type: "code",
                        lang: null,
                        meta: null,
                        value: ""
                    }
                }

                function x() {
                    return {
                        type: "heading",
                        depth: 0,
                        children: []
                    }
                }

                function h() {
                    return {
                        type: "break"
                    }
                }

                function g() {
                    return {
                        type: "html",
                        value: ""
                    }
                }

                function v() {
                    return {
                        type: "link",
                        title: null,
                        url: "",
                        children: []
                    }
                }

                function b(e) {
                    return {
                        type: "list",
                        ordered: "listOrdered" === e.type,
                        start: null,
                        spread: e._spread,
                        children: []
                    }
                }
            })(n)(function(e) {
                for (; !c(e););
                return e
            }((function(e) {
                let t = {
                    constructs: (0, l.a)([i, ...(e || {}).extensions || []]),
                    content: n(d),
                    defined: [],
                    document: n(m),
                    flow: n(v),
                    lazy: {},
                    string: n(k),
                    text: n(y)
                };
                return t;

                function n(e) {
                    return function(n) {
                        return function(e, t, n) {
                            let i = {
                                    _bufferIndex: -1,
                                    _index: 0,
                                    line: n && n.line || 1,
                                    column: n && n.column || 1,
                                    offset: n && n.offset || 0
                                },
                                a = {},
                                r = [],
                                s = [],
                                c = [],
                                l = {
                                    attempt: h(function(e, t) {
                                        g(e, t.from)
                                    }),
                                    check: h(x),
                                    consume: function(e) {
                                        (0, u.h)(e) ? (i.line++, i.column = 1, i.offset += -3 === e ? 2 : 1, v()) : -1 !== e && (i.column++, i.offset++), i._bufferIndex < 0 ? i._index++ : (i._bufferIndex++, i._bufferIndex === s[i._index].length && (i._bufferIndex = -1, i._index++)), p.previous = e
                                    },
                                    enter: function(e, t) {
                                        let n = t || {};
                                        return n.type = e, n.start = f(), p.events.push(["enter", n, p]), c.push(n), n
                                    },
                                    exit: function(e) {
                                        let t = c.pop();
                                        return t.end = f(), p.events.push(["exit", t, p]), t
                                    },
                                    interrupt: h(x, {
                                        interrupt: !0
                                    })
                                },
                                p = {
                                    code: null,
                                    containerState: {},
                                    defineSkip: function(e) {
                                        a[e.line] = e.column, v()
                                    },
                                    events: [],
                                    now: f,
                                    parser: e,
                                    previous: null,
                                    sliceSerialize: function(e, t) {
                                        return function(e, t) {
                                            let n, i = -1,
                                                a = [];
                                            for (; ++i < e.length;) {
                                                let o, r = e[i];
                                                if ("string" == typeof r) o = r;
                                                else switch (r) {
                                                    case -5:
                                                        o = "\r";
                                                        break;
                                                    case -4:
                                                        o = "\n";
                                                        break;
                                                    case -3:
                                                        o = "\r\n";
                                                        break;
                                                    case -2:
                                                        o = t ? " " : "	";
                                                        break;
                                                    case -1:
                                                        if (!t && n) continue;
                                                        o = " ";
                                                        break;
                                                    default:
                                                        o = String.fromCharCode(r)
                                                }
                                                n = -2 === r, a.push(o)
                                            }
                                            return a.join("")
                                        }(m(e), t)
                                    },
                                    sliceStream: m,
                                    write: function(e) {
                                        return (s = (0, o.a)(s, e), function() {
                                            let e;
                                            for (; i._index < s.length;) {
                                                let n = s[i._index];
                                                if ("string" == typeof n)
                                                    for (e = i._index, i._bufferIndex < 0 && (i._bufferIndex = 0); i._index === e && i._bufferIndex < n.length;) {
                                                        var t;
                                                        t = n.charCodeAt(i._bufferIndex), d = d(t)
                                                    } else d = d(n)
                                            }
                                        }(), null !== s[s.length - 1]) ? [] : (g(t, 0), p.events = (0, G.a)(r, p.events, p), p.events)
                                    }
                                },
                                d = t.tokenize.call(p, l);
                            return t.resolveAll && r.push(t), p;

                            function m(e) {
                                return function(e, t) {
                                    let n, i = t.start._index,
                                        a = t.start._bufferIndex,
                                        o = t.end._index,
                                        r = t.end._bufferIndex;
                                    if (i === o) n = [e[i].slice(a, r)];
                                    else {
                                        if (n = e.slice(i, o), a > -1) {
                                            let e = n[0];
                                            "string" == typeof e ? n[0] = e.slice(a) : n.shift()
                                        }
                                        r > 0 && n.push(e[o].slice(0, r))
                                    }
                                    return n
                                }(s, e)
                            }

                            function f() {
                                let {
                                    _bufferIndex: e,
                                    _index: t,
                                    line: n,
                                    column: a,
                                    offset: o
                                } = i;
                                return {
                                    _bufferIndex: e,
                                    _index: t,
                                    line: n,
                                    column: a,
                                    offset: o
                                }
                            }

                            function x(e, t) {
                                t.restore()
                            }

                            function h(e, t) {
                                return function(n, a, o) {
                                    var r;
                                    let s, u, d, m;
                                    return Array.isArray(n) ? x(n) : "tokenize" in n ? x([n]) : (r = n, function(e) {
                                        let t = null !== e && r[e],
                                            n = null !== e && r.null;
                                        return x([...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []])(e)
                                    });

                                    function x(e) {
                                        return (s = e, u = 0, 0 === e.length) ? o : h(e[u])
                                    }

                                    function h(e) {
                                        return function(n) {
                                            let a, o, r, s, u;
                                            return (a = f(), o = p.previous, r = p.currentConstruct, s = p.events.length, u = Array.from(c), m = {
                                                from: s,
                                                restore: function() {
                                                    i = a, p.previous = o, p.currentConstruct = r, p.events.length = s, c = u, v()
                                                }
                                            }, d = e, e.partial || (p.currentConstruct = e), e.name && p.parser.constructs.disable.null.includes(e.name)) ? b(n) : e.tokenize.call(t ? Object.assign(Object.create(p), t) : p, l, g, b)(n)
                                        }
                                    }

                                    function g(t) {
                                        return e(d, m), a
                                    }

                                    function b(e) {
                                        return (m.restore(), ++u < s.length) ? h(s[u]) : o
                                    }
                                }
                            }

                            function g(e, t) {
                                e.resolveAll && !r.includes(e) && r.push(e), e.resolve && (0, o.b)(p.events, t, p.events.length - t, e.resolve(p.events.slice(t), p)), e.resolveTo && (p.events = e.resolveTo(p.events, p))
                            }

                            function v() {
                                i.line in a && i.column < 2 && (i.column = a[i.line], i.offset += a[i.line] - 1)
                            }
                        }(t, e, n)
                    }
                }
            })(n).document().write((s = 1, p = "", f = !0, function(e, t, n) {
                let i, a, o, c, l, u = [];
                for (e = p + ("string" == typeof e ? e.toString() : new TextDecoder(t || void 0).decode(e)), o = 0, p = "", f && (65279 === e.charCodeAt(0) && o++, f = void 0); o < e.length;) {
                    if (ef.lastIndex = o, c = (i = ef.exec(e)) && void 0 !== i.index ? i.index : e.length, l = e.charCodeAt(c), !i) {
                        p = e.slice(o);
                        break
                    }
                    if (10 === l && o === c && r) u.push(-3), r = void 0;
                    else switch (r && (u.push(-5), r = void 0), o < c && (u.push(e.slice(o, c)), s += c - o), l) {
                        case 0:
                            u.push(65533), s++;
                            break;
                        case 9:
                            for (a = 4 * Math.ceil(s / 4), u.push(-2); s++ < a;) u.push(-1);
                            break;
                        case 10:
                            u.push(-4), s = 1;
                            break;
                        default:
                            r = !0, s = 1
                    }
                    o = c + 1
                }
                return n && (r && u.push(-5), p && u.push(p), u.push(null)), u
            })(e, t, !0))))
        }

        function ek(e) {
            return {
                line: e.line,
                column: e.column,
                offset: e.offset
            }
        }

        function ey(e, t) {
            if (e) throw Error("Cannot close `" + e.type + "` (" + (0, eg.a)({
                start: e.start,
                end: e.end
            }) + "): a different token (`" + t.type + "`, " + (0, eg.a)({
                start: t.start,
                end: t.end
            }) + ") is open");
            throw Error("Cannot close document, a token (`" + t.type + "`, " + (0, eg.a)({
                start: t.start,
                end: t.end
            }) + ") is still open")
        }
    }),
    nd: (function(e, t, n) {
        n.d(t, {
            a: () => Z,
            b: () => G
        });
        var i = n("Qk"),
            a = n("EAw"),
            o = n("Ec"),
            r = n("RJ");
        let s = "phrasing",
            c = ["autolink", "link", "image", "label"];

        function l(e) {
            this.enter({
                type: "link",
                title: null,
                url: "",
                children: []
            }, e)
        }

        function p(e) {
            this.config.enter.autolinkProtocol.call(this, e)
        }

        function u(e) {
            this.config.exit.autolinkProtocol.call(this, e)
        }

        function d(e) {
            this.config.exit.data.call(this, e);
            let t = this.stack[this.stack.length - 1];
            (0, a.a)("link" === t.type), t.url = "http://" + this.sliceSerialize(e)
        }

        function m(e) {
            this.config.exit.autolinkEmail.call(this, e)
        }

        function f(e) {
            this.exit(e)
        }

        function x(e) {
            (0, r.a)(e, [
                [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, h],
                [/(^|(?=[\u0000-\uFFFF])[\s\p{P}\p{S}])([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, g]
            ], {
                ignore: ["link", "linkReference"]
            })
        }

        function h(e, t, n, a, o) {
            let r, s = "";
            if (!v(o)) return !1;
            if (/^w/i.test(t) && (n = t + n, t = "", s = "http://"), (r = n.split(".")).length < 2 || r[r.length - 1] && (/_/.test(r[r.length - 1]) || !/[a-zA-Z\d]/.test(r[r.length - 1])) || r[r.length - 2] && (/_/.test(r[r.length - 2]) || !/[a-zA-Z\d]/.test(r[r.length - 2]))) return !1;
            let c = function(e) {
                let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
                if (!t) return [e, void 0];
                e = e.slice(0, t.index);
                let n = t[0],
                    a = n.indexOf(")"),
                    o = (0, i.a)(e, "("),
                    r = (0, i.a)(e, ")");
                for (; - 1 !== a && o > r;) e += n.slice(0, a + 1), a = (n = n.slice(a + 1)).indexOf(")"), r++;
                return [e, n]
            }(n + a);
            if (!c[0]) return !1;
            let l = {
                type: "link",
                title: null,
                url: s + t + c[0],
                children: [{
                    type: "text",
                    value: t + c[0]
                }]
            };
            return c[1] ? [l, {
                type: "text",
                value: c[1]
            }] : l
        }

        function g(e, t, n, i, a) {
            if (a.index += t.length, !v(a, !0) || /[-\d_]$/.test(i)) return !1;
            let o = {
                type: "link",
                title: null,
                url: "mailto:" + n + "@" + i,
                children: [{
                    type: "text",
                    value: n + "@" + i
                }]
            };
            return t ? [{
                type: "text",
                value: t
            }, o] : o
        }

        function v(e, t) {
            let n = e.input.charCodeAt(e.index - 1);
            return (0 === e.index || (0, o.l)(n) || (0, o.k)(n)) && (!t || 47 !== n)
        }
        var b = n("kUC");

        function k() {
            this.buffer()
        }

        function y(e) {
            this.enter({
                type: "footnoteReference",
                identifier: "",
                label: ""
            }, e)
        }

        function w() {
            this.buffer()
        }

        function j(e) {
            this.enter({
                type: "footnoteDefinition",
                identifier: "",
                label: "",
                children: []
            }, e)
        }

        function _(e) {
            let t = this.resume(),
                n = this.stack[this.stack.length - 1];
            (0, a.a)("footnoteReference" === n.type), n.identifier = (0, b.a)(this.sliceSerialize(e)).toLowerCase(), n.label = t
        }

        function z(e) {
            this.exit(e)
        }

        function S(e) {
            let t = this.resume(),
                n = this.stack[this.stack.length - 1];
            (0, a.a)("footnoteDefinition" === n.type), n.identifier = (0, b.a)(this.sliceSerialize(e)).toLowerCase(), n.label = t
        }

        function T(e) {
            this.exit(e)
        }

        function C(e, t, n, i) {
            let a = n.createTracker(i),
                o = a.move("[^"),
                r = n.enter("footnoteReference"),
                s = n.enter("reference");
            return o += a.move(n.safe(n.associationId(e), {
                after: "]",
                before: o
            })), s(), r(), o += a.move("]")
        }

        function A(e, t, n) {
            return 0 === t ? e : I(e, t, n)
        }

        function I(e, t, n) {
            return (n ? "" : "    ") + e
        }
        C.peek = function() {
            return "["
        };
        let q = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];

        function E(e) {
            this.enter({
                type: "delete",
                children: []
            }, e)
        }

        function F(e) {
            this.exit(e)
        }

        function L(e, t, n, i) {
            let a = n.createTracker(i),
                o = n.enter("strikethrough"),
                r = a.move("~~");
            return r += n.containerPhrasing(e, {
                ...a.current(),
                before: r,
                after: "~"
            }), r += a.move("~~"), o(), r
        }

        function R(e) {
            return e.length
        }

        function O(e) {
            let t = "string" == typeof e ? e.codePointAt(0) : 0;
            return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 114 * (82 === t || 114 === t)
        }
        L.peek = function() {
            return "~"
        };
        var P = n("kN");

        function D(e) {
            let t = e._align;
            (0, a.a)(t, "expected `_align` on table"), this.enter({
                type: "table",
                align: t.map(function(e) {
                    return "none" === e ? null : e
                }),
                children: []
            }, e), this.data.inTable = !0
        }

        function $(e) {
            this.exit(e), this.data.inTable = void 0
        }

        function M(e) {
            this.enter({
                type: "tableRow",
                children: []
            }, e)
        }

        function B(e) {
            this.exit(e)
        }

        function U(e) {
            this.enter({
                type: "tableCell",
                children: []
            }, e)
        }

        function N(e) {
            let t = this.resume();
            this.data.inTable && (t = t.replace(/\\([\\|])/g, H));
            let n = this.stack[this.stack.length - 1];
            (0, a.a)("inlineCode" === n.type), n.value = t, this.exit(e)
        }

        function H(e, t) {
            return "|" === t ? t : e
        }

        function V(e) {
            let t = this.stack[this.stack.length - 2];
            (0, a.a)("listItem" === t.type), t.checked = "taskListCheckValueChecked" === e.type
        }

        function Q(e) {
            let t = this.stack[this.stack.length - 2];
            if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
                let e = this.stack[this.stack.length - 1];
                (0, a.a)("paragraph" === e.type);
                let n = e.children[0];
                if (n && "text" === n.type) {
                    let i, a = t.children,
                        o = -1;
                    for (; ++o < a.length;) {
                        let e = a[o];
                        if ("paragraph" === e.type) {
                            i = e;
                            break
                        }
                    }
                    i === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)))
                }
            }
            this.exit(e)
        }

        function W(e, t, n, i) {
            let a = e.children[0],
                o = "boolean" == typeof e.checked && a && "paragraph" === a.type,
                r = "[" + (e.checked ? "x" : " ") + "] ",
                s = n.createTracker(i);
            o && s.move(r);
            let c = P.a.listItem(e, t, n, {
                ...i,
                ...s.current()
            });
            return o && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function(e) {
                return e + r
            })), c
        }

        function Z() {
            return [{
                transforms: [x],
                enter: {
                    literalAutolink: l,
                    literalAutolinkEmail: p,
                    literalAutolinkHttp: p,
                    literalAutolinkWww: p
                },
                exit: {
                    literalAutolink: f,
                    literalAutolinkEmail: m,
                    literalAutolinkHttp: u,
                    literalAutolinkWww: d
                }
            }, {
                enter: {
                    gfmFootnoteCallString: k,
                    gfmFootnoteCall: y,
                    gfmFootnoteDefinitionLabelString: w,
                    gfmFootnoteDefinition: j
                },
                exit: {
                    gfmFootnoteCallString: _,
                    gfmFootnoteCall: z,
                    gfmFootnoteDefinitionLabelString: S,
                    gfmFootnoteDefinition: T
                }
            }, {
                canContainEols: ["delete"],
                enter: {
                    strikethrough: E
                },
                exit: {
                    strikethrough: F
                }
            }, {
                enter: {
                    table: D,
                    tableData: U,
                    tableHeader: U,
                    tableRow: M
                },
                exit: {
                    codeText: N,
                    table: $,
                    tableData: B,
                    tableHeader: B,
                    tableRow: B
                }
            }, {
                exit: {
                    taskListCheckValueChecked: V,
                    taskListCheckValueUnchecked: V,
                    paragraph: Q
                }
            }]
        }

        function G(e) {
            let t;
            return {
                extensions: [{
                    unsafe: [{
                        character: "@",
                        before: "[+\\-.\\w]",
                        after: "[\\-.\\w]",
                        inConstruct: s,
                        notInConstruct: c
                    }, {
                        character: ".",
                        before: "[Ww]",
                        after: "[\\-.\\w]",
                        inConstruct: s,
                        notInConstruct: c
                    }, {
                        character: ":",
                        before: "[ps]",
                        after: "\\/",
                        inConstruct: s,
                        notInConstruct: c
                    }]
                }, (t = !1, e && e.firstLineBlank && (t = !0), {
                    handlers: {
                        footnoteDefinition: function(e, n, i, a) {
                            let o = i.createTracker(a),
                                r = o.move("[^"),
                                s = i.enter("footnoteDefinition"),
                                c = i.enter("label");
                            return r += o.move(i.safe(i.associationId(e), {
                                before: r,
                                after: "]"
                            })), c(), r += o.move("]:"), e.children && e.children.length > 0 && (o.shift(4), r += o.move((t ? "\n" : " ") + i.indentLines(i.containerFlow(e, o.current()), t ? I : A))), s(), r
                        },
                        footnoteReference: C
                    },
                    unsafe: [{
                        character: "[",
                        inConstruct: ["label", "phrasing", "reference"]
                    }]
                }), {
                    unsafe: [{
                        character: "~",
                        inConstruct: "phrasing",
                        notInConstruct: q
                    }],
                    handlers: {
                        delete: L
                    }
                }, function(e) {
                    let t = e || {},
                        n = t.tableCellPadding,
                        i = t.tablePipeAlign,
                        a = t.stringLength,
                        o = n ? " " : "|";
                    return {
                        unsafe: [{
                            character: "\r",
                            inConstruct: "tableCell"
                        }, {
                            character: "\n",
                            inConstruct: "tableCell"
                        }, {
                            atBreak: !0,
                            character: "|",
                            after: "[	 :-]"
                        }, {
                            character: "|",
                            inConstruct: "tableCell"
                        }, {
                            atBreak: !0,
                            character: ":",
                            after: "-"
                        }, {
                            atBreak: !0,
                            character: "-",
                            after: "[:|-]"
                        }],
                        handlers: {
                            inlineCode: function(e, t, n) {
                                let i = P.a.inlineCode(e, t, n);
                                return n.stack.includes("tableCell") && (i = i.replace(/\|/g, "\\$&")), i
                            },
                            table: function(e, t, n, i) {
                                return s(function(e, t, n) {
                                    let i = e.children,
                                        a = -1,
                                        o = [],
                                        r = t.enter("table");
                                    for (; ++a < i.length;) o[a] = c(i[a], t, n);
                                    return r(), o
                                }(e, n, i), e.align)
                            },
                            tableCell: r,
                            tableRow: function(e, t, n, i) {
                                let a = s([c(e, n, i)]);
                                return a.slice(0, a.indexOf("\n"))
                            }
                        }
                    };

                    function r(e, t, n, i) {
                        let a = n.enter("tableCell"),
                            r = n.enter("phrasing"),
                            s = n.containerPhrasing(e, {
                                ...i,
                                before: o,
                                after: o
                            });
                        return r(), a(), s
                    }

                    function s(e, t) {
                        return function(e, t) {
                            let n = t || {},
                                i = (n.align || []).concat(),
                                a = n.stringLength || R,
                                o = [],
                                r = [],
                                s = [],
                                c = [],
                                l = 0,
                                p = -1;
                            for (; ++p < e.length;) {
                                let t = [],
                                    i = [],
                                    o = -1;
                                for (e[p].length > l && (l = e[p].length); ++o < e[p].length;) {
                                    var u;
                                    let r = null == (u = e[p][o]) ? "" : String(u);
                                    if (!1 !== n.alignDelimiters) {
                                        let e = a(r);
                                        i[o] = e, (void 0 === c[o] || e > c[o]) && (c[o] = e)
                                    }
                                    t.push(r)
                                }
                                r[p] = t, s[p] = i
                            }
                            let d = -1;
                            if ("object" == typeof i && "length" in i)
                                for (; ++d < l;) o[d] = O(i[d]);
                            else {
                                let e = O(i);
                                for (; ++d < l;) o[d] = e
                            }
                            d = -1;
                            let m = [],
                                f = [];
                            for (; ++d < l;) {
                                let e = o[d],
                                    t = "",
                                    i = "";
                                99 === e ? (t = ":", i = ":") : 108 === e ? t = ":" : 114 === e && (i = ":");
                                let a = !1 === n.alignDelimiters ? 1 : Math.max(1, c[d] - t.length - i.length),
                                    r = t + "-".repeat(a) + i;
                                !1 !== n.alignDelimiters && ((a = t.length + a + i.length) > c[d] && (c[d] = a), f[d] = a), m[d] = r
                            }
                            r.splice(1, 0, m), s.splice(1, 0, f), p = -1;
                            let x = [];
                            for (; ++p < r.length;) {
                                let e = r[p],
                                    t = s[p];
                                d = -1;
                                let i = [];
                                for (; ++d < l;) {
                                    let a = e[d] || "",
                                        r = "",
                                        s = "";
                                    if (!1 !== n.alignDelimiters) {
                                        let e = c[d] - (t[d] || 0),
                                            n = o[d];
                                        114 === n ? r = " ".repeat(e) : 99 === n ? e % 2 ? (r = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : s = r = " ".repeat(e / 2) : s = " ".repeat(e)
                                    }!1 === n.delimiterStart || d || i.push("|"), !1 !== n.padding && (!1 !== n.alignDelimiters || "" !== a) && (!1 !== n.delimiterStart || d) && i.push(" "), !1 !== n.alignDelimiters && i.push(r), i.push(a), !1 !== n.alignDelimiters && i.push(s), !1 !== n.padding && i.push(" "), (!1 !== n.delimiterEnd || d !== l - 1) && i.push("|")
                                }
                                x.push(!1 === n.delimiterEnd ? i.join("").replace(/ +$/, "") : i.join(""))
                            }
                            return x.join("\n")
                        }(e, {
                            align: t,
                            alignDelimiters: i,
                            padding: n,
                            stringLength: a
                        })
                    }

                    function c(e, t, n) {
                        let i = e.children,
                            a = -1,
                            o = [],
                            s = t.enter("tableRow");
                        for (; ++a < i.length;) o[a] = r(i[a], e, t, n);
                        return s(), o
                    }
                }(e), {
                    unsafe: [{
                        atBreak: !0,
                        character: "-",
                        after: "[:|-]"
                    }],
                    handlers: {
                        listItem: W
                    }
                }]
            }
        }
    }),
    Bz: (function(e, t, n) {
        var i = n("RJ");

        function a(e) {
            (0, i.a)(e, [/\r?\n|\r/g, o])
        }

        function o() {
            return {
                type: "break"
            }
        }
        n.d(t, {
            a: () => a
        })
    }),
    kN: (function(e, t, n) {
        function i(e, t, n) {
            return ">" + (n ? "" : " ") + e
        }
        n.d(t, {
            a: () => T
        });
        var a = n("PML");

        function o(e, t, n, i) {
            let o = -1;
            for (; ++o < n.unsafe.length;)
                if ("\n" === n.unsafe[o].character && (0, a.a)(n.stack, n.unsafe[o])) return /[ \t]/.test(i.before) ? "" : " ";
            return "\\\n"
        }
        var r = n("jb"),
            s = n("oGX");

        function c(e, t, n) {
            return (n ? "" : "    ") + e
        }

        function l(e) {
            let t = e.options.quote || '"';
            if ('"' !== t && "'" !== t) throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
            return t
        }
        var p = n("lu"),
            u = n("hm");

        function d(e, t, n) {
            let i = (0, u.a)(e),
                a = (0, u.a)(t);
            return void 0 === i ? void 0 === a ? "_" === n ? {
                inside: !0,
                outside: !0
            } : {
                inside: !1,
                outside: !1
            } : 1 === a ? {
                inside: !0,
                outside: !0
            } : {
                inside: !1,
                outside: !0
            } : 1 === i ? void 0 === a ? {
                inside: !1,
                outside: !1
            } : 1 === a ? {
                inside: !0,
                outside: !0
            } : {
                inside: !1,
                outside: !1
            } : void 0 === a ? {
                inside: !1,
                outside: !1
            } : 1 === a ? {
                inside: !0,
                outside: !1
            } : {
                inside: !1,
                outside: !1
            }
        }

        function m(e, t, n, i) {
            let a = function(e) {
                    let t = e.options.emphasis || "*";
                    if ("*" !== t && "_" !== t) throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
                    return t
                }(n),
                o = n.enter("emphasis"),
                r = n.createTracker(i),
                s = r.move(a),
                c = r.move(n.containerPhrasing(e, {
                    after: a,
                    before: s,
                    ...r.current()
                })),
                l = c.charCodeAt(0),
                u = d(i.before.charCodeAt(i.before.length - 1), l, a);
            u.inside && (c = (0, p.a)(l) + c.slice(1));
            let m = c.charCodeAt(c.length - 1),
                f = d(i.after.charCodeAt(0), m, a);
            f.inside && (c = c.slice(0, -1) + (0, p.a)(m));
            let x = r.move(a);
            return o(), n.attentionEncodeSurroundingInfo = {
                after: f.outside,
                before: u.outside
            }, s + c + x
        }
        m.peek = function(e, t, n) {
            return n.options.emphasis || "*"
        };
        var f = n("xLX");

        function x(e) {
            return e.value || ""
        }

        function h(e, t, n, i) {
            let a = l(n),
                o = '"' === a ? "Quote" : "Apostrophe",
                r = n.enter("image"),
                s = n.enter("label"),
                c = n.createTracker(i),
                p = c.move("![");
            return p += c.move(n.safe(e.alt, {
                before: p,
                after: "]",
                ...c.current()
            })), p += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), p += c.move("<"), p += c.move(n.safe(e.url, {
                before: p,
                after: ">",
                ...c.current()
            })), p += c.move(">")) : (s = n.enter("destinationRaw"), p += c.move(n.safe(e.url, {
                before: p,
                after: e.title ? " " : ")",
                ...c.current()
            }))), s(), e.title && (s = n.enter(`title${o}`), p += c.move(" " + a), p += c.move(n.safe(e.title, {
                before: p,
                after: a,
                ...c.current()
            })), p += c.move(a), s()), p += c.move(")"), r(), p
        }

        function g(e, t, n, i) {
            let a = e.referenceType,
                o = n.enter("imageReference"),
                r = n.enter("label"),
                s = n.createTracker(i),
                c = s.move("!["),
                l = n.safe(e.alt, {
                    before: c,
                    after: "]",
                    ...s.current()
                });
            c += s.move(l + "]["), r();
            let p = n.stack;
            n.stack = [], r = n.enter("reference");
            let u = n.safe(n.associationId(e), {
                before: c,
                after: "]",
                ...s.current()
            });
            return r(), n.stack = p, o(), "full" !== a && l && l === u ? "shortcut" === a ? c = c.slice(0, -1) : c += s.move("]") : c += s.move(u + "]"), c
        }

        function v(e, t, n) {
            let i = e.value || "",
                a = "`",
                o = -1;
            for (; RegExp("(^|[^`])" + a + "([^`]|$)").test(i);) a += "`";
            for (/[^ \r\n]/.test(i) && (/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i) || /^`|`$/.test(i)) && (i = " " + i + " "); ++o < n.unsafe.length;) {
                let e, t = n.unsafe[o],
                    a = n.compilePattern(t);
                if (t.atBreak)
                    for (; e = a.exec(i);) {
                        let t = e.index;
                        10 === i.charCodeAt(t) && 13 === i.charCodeAt(t - 1) && t--, i = i.slice(0, t) + " " + i.slice(e.index + 1)
                    }
            }
            return a + i + a
        }
        x.peek = function() {
            return "<"
        }, h.peek = function() {
            return "!"
        }, g.peek = function() {
            return "!"
        }, v.peek = function() {
            return "`"
        };
        var b = n("aV");

        function k(e, t) {
            let n = (0, b.a)(e);
            return !!(!t.options.resourceLink && e.url && !e.title && e.children && 1 === e.children.length && "text" === e.children[0].type && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url))
        }

        function y(e, t, n, i) {
            let a, o, r = l(n),
                s = '"' === r ? "Quote" : "Apostrophe",
                c = n.createTracker(i);
            if (k(e, n)) {
                let t = n.stack;
                n.stack = [], a = n.enter("autolink");
                let i = c.move("<");
                return i += c.move(n.containerPhrasing(e, {
                    before: i,
                    after: ">",
                    ...c.current()
                })), i += c.move(">"), a(), n.stack = t, i
            }
            a = n.enter("link"), o = n.enter("label");
            let p = c.move("[");
            return p += c.move(n.containerPhrasing(e, {
                before: p,
                after: "](",
                ...c.current()
            })), p += c.move("]("), o(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (o = n.enter("destinationLiteral"), p += c.move("<"), p += c.move(n.safe(e.url, {
                before: p,
                after: ">",
                ...c.current()
            })), p += c.move(">")) : (o = n.enter("destinationRaw"), p += c.move(n.safe(e.url, {
                before: p,
                after: e.title ? " " : ")",
                ...c.current()
            }))), o(), e.title && (o = n.enter(`title${s}`), p += c.move(" " + r), p += c.move(n.safe(e.title, {
                before: p,
                after: r,
                ...c.current()
            })), p += c.move(r), o()), p += c.move(")"), a(), p
        }

        function w(e, t, n, i) {
            let a = e.referenceType,
                o = n.enter("linkReference"),
                r = n.enter("label"),
                s = n.createTracker(i),
                c = s.move("["),
                l = n.containerPhrasing(e, {
                    before: c,
                    after: "]",
                    ...s.current()
                });
            c += s.move(l + "]["), r();
            let p = n.stack;
            n.stack = [], r = n.enter("reference");
            let u = n.safe(n.associationId(e), {
                before: c,
                after: "]",
                ...s.current()
            });
            return r(), n.stack = p, o(), "full" !== a && l && l === u ? "shortcut" === a ? c = c.slice(0, -1) : c += s.move("]") : c += s.move(u + "]"), c
        }

        function j(e) {
            let t = e.options.bullet || "*";
            if ("*" !== t && "+" !== t && "-" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
            return t
        }

        function _(e) {
            let t = e.options.rule || "*";
            if ("*" !== t && "-" !== t && "_" !== t) throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
            return t
        }
        y.peek = function(e, t, n) {
            return k(e, n) ? "<" : "["
        }, w.peek = function() {
            return "["
        };
        let z = (0, n("UFz").a)(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);

        function S(e, t, n, i) {
            let a = function(e) {
                    let t = e.options.strong || "*";
                    if ("*" !== t && "_" !== t) throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
                    return t
                }(n),
                o = n.enter("strong"),
                r = n.createTracker(i),
                s = r.move(a + a),
                c = r.move(n.containerPhrasing(e, {
                    after: a,
                    before: s,
                    ...r.current()
                })),
                l = c.charCodeAt(0),
                u = d(i.before.charCodeAt(i.before.length - 1), l, a);
            u.inside && (c = (0, p.a)(l) + c.slice(1));
            let m = c.charCodeAt(c.length - 1),
                f = d(i.after.charCodeAt(0), m, a);
            f.inside && (c = c.slice(0, -1) + (0, p.a)(m));
            let x = r.move(a + a);
            return o(), n.attentionEncodeSurroundingInfo = {
                after: f.outside,
                before: u.outside
            }, s + c + x
        }
        S.peek = function(e, t, n) {
            return n.options.strong || "*"
        };
        let T = {
            blockquote: function(e, t, n, a) {
                let o = n.enter("blockquote"),
                    r = n.createTracker(a);
                r.move("> "), r.shift(2);
                let s = n.indentLines(n.containerFlow(e, r.current()), i);
                return o(), s
            },
            break: o,
            code: function(e, t, n, i) {
                let a = function(e) {
                        let t = e.options.fence || "`";
                        if ("`" !== t && "~" !== t) throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
                        return t
                    }(n),
                    o = e.value || "",
                    l = "`" === a ? "GraveAccent" : "Tilde";
                if ((0, s.a)(e, n)) {
                    let e = n.enter("codeIndented"),
                        t = n.indentLines(o, c);
                    return e(), t
                }
                let p = n.createTracker(i),
                    u = a.repeat(Math.max((0, r.a)(o, a) + 1, 3)),
                    d = n.enter("codeFenced"),
                    m = p.move(u);
                if (e.lang) {
                    let t = n.enter(`codeFencedLang${l}`);
                    m += p.move(n.safe(e.lang, {
                        before: m,
                        after: " ",
                        encode: ["`"],
                        ...p.current()
                    })), t()
                }
                if (e.lang && e.meta) {
                    let t = n.enter(`codeFencedMeta${l}`);
                    m += p.move(" "), m += p.move(n.safe(e.meta, {
                        before: m,
                        after: "\n",
                        encode: ["`"],
                        ...p.current()
                    })), t()
                }
                return m += p.move("\n"), o && (m += p.move(o + "\n")), m += p.move(u), d(), m
            },
            definition: function(e, t, n, i) {
                let a = l(n),
                    o = '"' === a ? "Quote" : "Apostrophe",
                    r = n.enter("definition"),
                    s = n.enter("label"),
                    c = n.createTracker(i),
                    p = c.move("[");
                return p += c.move(n.safe(n.associationId(e), {
                    before: p,
                    after: "]",
                    ...c.current()
                })), p += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), p += c.move("<"), p += c.move(n.safe(e.url, {
                    before: p,
                    after: ">",
                    ...c.current()
                })), p += c.move(">")) : (s = n.enter("destinationRaw"), p += c.move(n.safe(e.url, {
                    before: p,
                    after: e.title ? " " : "\n",
                    ...c.current()
                }))), s(), e.title && (s = n.enter(`title${o}`), p += c.move(" " + a), p += c.move(n.safe(e.title, {
                    before: p,
                    after: a,
                    ...c.current()
                })), p += c.move(a), s()), r(), p
            },
            emphasis: m,
            hardBreak: o,
            heading: function(e, t, n, i) {
                let a = Math.max(Math.min(6, e.depth || 1), 1),
                    o = n.createTracker(i);
                if ((0, f.a)(e, n)) {
                    let t = n.enter("headingSetext"),
                        i = n.enter("phrasing"),
                        r = n.containerPhrasing(e, {
                            ...o.current(),
                            before: "\n",
                            after: "\n"
                        });
                    return i(), t(), r + "\n" + (1 === a ? "=" : "-").repeat(r.length - (Math.max(r.lastIndexOf("\r"), r.lastIndexOf("\n")) + 1))
                }
                let r = "#".repeat(a),
                    s = n.enter("headingAtx"),
                    c = n.enter("phrasing");
                o.move(r + " ");
                let l = n.containerPhrasing(e, {
                    before: "# ",
                    after: "\n",
                    ...o.current()
                });
                return /^[\t ]/.test(l) && (l = (0, p.a)(l.charCodeAt(0)) + l.slice(1)), l = l ? r + " " + l : r, n.options.closeAtx && (l += " " + r), c(), s(), l
            },
            html: x,
            image: h,
            imageReference: g,
            inlineCode: v,
            link: y,
            linkReference: w,
            list: function(e, t, n, i) {
                let a = n.enter("list"),
                    o = n.bulletCurrent,
                    r = e.ordered ? function(e) {
                        let t = e.options.bulletOrdered || ".";
                        if ("." !== t && ")" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
                        return t
                    }(n) : j(n),
                    s = e.ordered ? "." === r ? ")" : "." : function(e) {
                        let t = j(e),
                            n = e.options.bulletOther;
                        if (!n) return "*" === t ? "-" : "*";
                        if ("*" !== n && "+" !== n && "-" !== n) throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
                        if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
                        return n
                    }(n),
                    c = !!t && !!n.bulletLastUsed && r === n.bulletLastUsed;
                if (!e.ordered) {
                    let t = e.children ? e.children[0] : void 0;
                    if ("*" !== r && "-" !== r || !t || t.children && t.children[0] || "list" !== n.stack[n.stack.length - 1] || "listItem" !== n.stack[n.stack.length - 2] || "list" !== n.stack[n.stack.length - 3] || "listItem" !== n.stack[n.stack.length - 4] || 0 !== n.indexStack[n.indexStack.length - 1] || 0 !== n.indexStack[n.indexStack.length - 2] || 0 !== n.indexStack[n.indexStack.length - 3] || (c = !0), _(n) === r && t) {
                        let t = -1;
                        for (; ++t < e.children.length;) {
                            let n = e.children[t];
                            if (n && "listItem" === n.type && n.children && n.children[0] && "thematicBreak" === n.children[0].type) {
                                c = !0;
                                break
                            }
                        }
                    }
                }
                c && (r = s), n.bulletCurrent = r;
                let l = n.containerFlow(e, i);
                return n.bulletLastUsed = r, n.bulletCurrent = o, a(), l
            },
            listItem: function(e, t, n, i) {
                let a = function(e) {
                        let t = e.options.listItemIndent || "one";
                        if ("tab" !== t && "one" !== t && "mixed" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
                        return t
                    }(n),
                    o = n.bulletCurrent || j(n);
                t && "list" === t.type && t.ordered && (o = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + o);
                let r = o.length + 1;
                ("tab" === a || "mixed" === a && (t && "list" === t.type && t.spread || e.spread)) && (r = 4 * Math.ceil(r / 4));
                let s = n.createTracker(i);
                s.move(o + " ".repeat(r - o.length)), s.shift(r);
                let c = n.enter("listItem"),
                    l = n.indentLines(n.containerFlow(e, s.current()), function(e, t, n) {
                        return t ? (n ? "" : " ".repeat(r)) + e : (n ? o : o + " ".repeat(r - o.length)) + e
                    });
                return c(), l
            },
            paragraph: function(e, t, n, i) {
                let a = n.enter("paragraph"),
                    o = n.enter("phrasing"),
                    r = n.containerPhrasing(e, i);
                return o(), a(), r
            },
            root: function(e, t, n, i) {
                return (e.children.some(function(e) {
                    return z(e)
                }) ? n.containerPhrasing : n.containerFlow).call(n, e, i)
            },
            strong: S,
            text: function(e, t, n, i) {
                return n.safe(e.value, i)
            },
            thematicBreak: function(e, t, n) {
                let i = (_(n) + (n.options.ruleSpaces ? " " : "")).repeat(function(e) {
                    let t = e.options.ruleRepetition || 3;
                    if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
                    return t
                }(n));
                return n.options.ruleSpaces ? i.slice(0, -1) : i
            }
        }
    }),
    mMF: (function(e, t, n) {
        n.d(t, {
            a: () => y
        });
        var i = n("ryc");
        let a = {}.hasOwnProperty;
        var o = n("kN"),
            r = n("oGX"),
            s = n("xLX");
        let c = [function(e, t, n, i) {
                if ("code" === t.type && (0, r.a)(t, i) && ("list" === e.type || e.type === t.type && (0, r.a)(e, i))) return !1;
                if ("spread" in n && "boolean" == typeof n.spread) {
                    if ("paragraph" === e.type && (e.type === t.type || "definition" === t.type || "heading" === t.type && (0, s.a)(t, i))) return;
                    return +!!n.spread
                }
            }],
            l = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"],
            p = [{
                character: "	",
                after: "[\\r\\n]",
                inConstruct: "phrasing"
            }, {
                character: "	",
                before: "[\\r\\n]",
                inConstruct: "phrasing"
            }, {
                character: "	",
                inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
            }, {
                character: "\r",
                inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"]
            }, {
                character: "\n",
                inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"]
            }, {
                character: " ",
                after: "[\\r\\n]",
                inConstruct: "phrasing"
            }, {
                character: " ",
                before: "[\\r\\n]",
                inConstruct: "phrasing"
            }, {
                character: " ",
                inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
            }, {
                character: "!",
                after: "\\[",
                inConstruct: "phrasing",
                notInConstruct: l
            }, {
                character: '"',
                inConstruct: "titleQuote"
            }, {
                atBreak: !0,
                character: "#"
            }, {
                character: "#",
                inConstruct: "headingAtx",
                after: "(?:[\r\n]|$)"
            }, {
                character: "&",
                after: "[#A-Za-z]",
                inConstruct: "phrasing"
            }, {
                character: "'",
                inConstruct: "titleApostrophe"
            }, {
                character: "(",
                inConstruct: "destinationRaw"
            }, {
                before: "\\]",
                character: "(",
                inConstruct: "phrasing",
                notInConstruct: l
            }, {
                atBreak: !0,
                before: "\\d+",
                character: ")"
            }, {
                character: ")",
                inConstruct: "destinationRaw"
            }, {
                atBreak: !0,
                character: "*",
                after: "(?:[ 	\r\n*])"
            }, {
                character: "*",
                inConstruct: "phrasing",
                notInConstruct: l
            }, {
                atBreak: !0,
                character: "+",
                after: "(?:[ 	\r\n])"
            }, {
                atBreak: !0,
                character: "-",
                after: "(?:[ 	\r\n-])"
            }, {
                atBreak: !0,
                before: "\\d+",
                character: ".",
                after: "(?:[ 	\r\n]|$)"
            }, {
                atBreak: !0,
                character: "<",
                after: "[!/?A-Za-z]"
            }, {
                character: "<",
                after: "[!/?A-Za-z]",
                inConstruct: "phrasing",
                notInConstruct: l
            }, {
                character: "<",
                inConstruct: "destinationLiteral"
            }, {
                atBreak: !0,
                character: "="
            }, {
                atBreak: !0,
                character: ">"
            }, {
                character: ">",
                inConstruct: "destinationLiteral"
            }, {
                atBreak: !0,
                character: "["
            }, {
                character: "[",
                inConstruct: "phrasing",
                notInConstruct: l
            }, {
                character: "[",
                inConstruct: ["label", "reference"]
            }, {
                character: "\\",
                after: "[\\r\\n]",
                inConstruct: "phrasing"
            }, {
                character: "]",
                inConstruct: ["label", "reference"]
            }, {
                atBreak: !0,
                character: "_"
            }, {
                character: "_",
                inConstruct: "phrasing",
                notInConstruct: l
            }, {
                atBreak: !0,
                character: "`"
            }, {
                character: "`",
                inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
            }, {
                character: "`",
                inConstruct: "phrasing",
                notInConstruct: l
            }, {
                atBreak: !0,
                character: "~"
            }];
        var u = n("zHD");

        function d(e) {
            return e.label || !e.identifier ? e.label || "" : (0, u.a)(e.identifier)
        }

        function m(e) {
            if (!e._compiled) {
                let t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
                e._compiled = RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
            }
            return e._compiled
        }
        var f = n("lu");
        let x = /\r?\n|\r/g;

        function h(e, t) {
            let n, i = [],
                a = 0,
                o = 0;
            for (; n = x.exec(e);) r(e.slice(a, n.index)), i.push(n[0]), a = n.index + n[0].length, o++;
            return r(e.slice(a)), i.join("");

            function r(e) {
                i.push(t(e, o, !e))
            }
        }
        var g = n("PML");

        function v(e, t) {
            return e - t
        }

        function b(e, t) {
            let n, i = /\\(?=[!-/:-@[-`{-~])/g,
                a = [],
                o = [],
                r = e + t,
                s = -1,
                c = 0;
            for (; n = i.exec(r);) a.push(n.index);
            for (; ++s < a.length;) c !== a[s] && o.push(e.slice(c, a[s])), o.push("\\"), c = a[s];
            return o.push(e.slice(c)), o.join("")
        }

        function k(e) {
            let t = e || {},
                n = t.now || {},
                i = t.lineShift || 0,
                a = n.line || 1,
                o = n.column || 1;
            return {
                move: function(e) {
                    let t = e || "",
                        n = t.split(/\r?\n|\r/g),
                        r = n[n.length - 1];
                    return a += n.length - 1, o = 1 === n.length ? o + r.length : 1 + r.length + i, t
                },
                current: function() {
                    return {
                        now: {
                            line: a,
                            column: o
                        },
                        lineShift: i
                    }
                },
                shift: function(e) {
                    i += e
                }
            }
        }

        function y(e, t) {
            let n = {
                associationId: d,
                containerPhrasing: z,
                containerFlow: S,
                createTracker: k,
                compilePattern: m,
                enter: function(e) {
                    return n.stack.push(e),
                        function() {
                            n.stack.pop()
                        }
                },
                handlers: {
                    ...o.a
                },
                handle: void 0,
                indentLines: h,
                indexStack: [],
                join: [...c],
                options: {},
                safe: T,
                stack: [],
                unsafe: [...p]
            };
            ! function e(t, n) {
                var i, o, r, s;
                let c, l = -1;
                if (n.extensions)
                    for (; ++l < n.extensions.length;) e(t, n.extensions[l]);
                for (c in n)
                    if (a.call(n, c)) switch (c) {
                        case "extensions":
                            break;
                        case "unsafe":
                        case "join":
                            i = t[c], (o = n[c]) && i.push(...o);
                            break;
                        case "handlers":
                            r = t[c], (s = n[c]) && Object.assign(r, s);
                            break;
                        default:
                            t.options[c] = n[c]
                    }
                return t
            }(n, t || {}), n.options.tightDefinitions && n.join.push(_), n.handle = (0, i.a)("type", {
                invalid: w,
                unknown: j,
                handlers: n.handlers
            });
            let r = n.handle(e, void 0, n, {
                before: "\n",
                after: "\n",
                now: {
                    line: 1,
                    column: 1
                },
                lineShift: 0
            });
            return r && 10 !== r.charCodeAt(r.length - 1) && 13 !== r.charCodeAt(r.length - 1) && (r += "\n"), r
        }

        function w(e) {
            throw Error("Cannot handle value `" + e + "`, expected node")
        }

        function j(e) {
            throw Error("Cannot handle unknown node `" + e.type + "`")
        }

        function _(e, t) {
            if ("definition" === e.type && e.type === t.type) return 0
        }

        function z(e, t) {
            return function(e, t, n) {
                let i, a = t.indexStack,
                    o = e.children || [],
                    r = [],
                    s = -1,
                    c = n.before;
                a.push(-1);
                let l = t.createTracker(n);
                for (; ++s < o.length;) {
                    let p, u = o[s];
                    if (a[a.length - 1] = s, s + 1 < o.length) {
                        let n = t.handle.handlers[o[s + 1].type];
                        n && n.peek && (n = n.peek), p = n ? n(o[s + 1], e, t, {
                            before: "",
                            after: "",
                            ...l.current()
                        }).charAt(0) : ""
                    } else p = n.after;
                    r.length > 0 && ("\r" === c || "\n" === c) && "html" === u.type && (r[r.length - 1] = r[r.length - 1].replace(/(\r?\n|\r)$/, " "), c = " ", (l = t.createTracker(n)).move(r.join("")));
                    let d = t.handle(u, e, t, {
                        ...l.current(),
                        after: p,
                        before: c
                    });
                    i && i === d.slice(0, 1) && (d = (0, f.a)(i.charCodeAt(0)) + d.slice(1));
                    let m = t.attentionEncodeSurroundingInfo;
                    t.attentionEncodeSurroundingInfo = void 0, i = void 0, m && (r.length > 0 && m.before && c === r[r.length - 1].slice(-1) && (r[r.length - 1] = r[r.length - 1].slice(0, -1) + (0, f.a)(c.charCodeAt(0))), m.after && (i = p)), l.move(d), r.push(d), c = d.slice(-1)
                }
                return a.pop(), r.join("")
            }(e, this, t)
        }

        function S(e, t) {
            return function(e, t, n) {
                let i = t.indexStack,
                    a = e.children || [],
                    o = t.createTracker(n),
                    r = [],
                    s = -1;
                for (i.push(-1); ++s < a.length;) {
                    let n = a[s];
                    i[i.length - 1] = s, r.push(o.move(t.handle(n, e, t, {
                        before: "\n",
                        after: "\n",
                        ...o.current()
                    }))), "list" !== n.type && (t.bulletLastUsed = void 0), s < a.length - 1 && r.push(o.move(function(e, t, n, i) {
                        let a = i.join.length;
                        for (; a--;) {
                            let o = i.join[a](e, t, n, i);
                            if (!0 === o || 1 === o) break;
                            if ("number" == typeof o) return "\n".repeat(1 + o);
                            if (!1 === o) return "\n\n\x3c!----\x3e\n\n"
                        }
                        return "\n\n"
                    }(n, a[s + 1], e, t)))
                }
                return i.pop(), r.join("")
            }(e, this, t)
        }

        function T(e, t) {
            return function(e, t, n) {
                let i = (n.before || "") + (t || "") + (n.after || ""),
                    a = [],
                    o = [],
                    r = {},
                    s = -1;
                for (; ++s < e.unsafe.length;) {
                    let t, n = e.unsafe[s];
                    if (!(0, g.a)(e.stack, n)) continue;
                    let o = e.compilePattern(n);
                    for (; t = o.exec(i);) {
                        let e = "before" in n || !!n.atBreak,
                            i = "after" in n,
                            o = t.index + (e ? t[1].length : 0);
                        a.includes(o) ? (r[o].before && !e && (r[o].before = !1), r[o].after && !i && (r[o].after = !1)) : (a.push(o), r[o] = {
                            before: e,
                            after: i
                        })
                    }
                }
                a.sort(v);
                let c = n.before ? n.before.length : 0,
                    l = i.length - (n.after ? n.after.length : 0);
                for (s = -1; ++s < a.length;) {
                    let e = a[s];
                    !(e < c) && !(e >= l) && (!(e + 1 < l) || a[s + 1] !== e + 1 || !r[e].after || r[e + 1].before || r[e + 1].after) && (a[s - 1] !== e - 1 || !r[e].before || r[e - 1].before || r[e - 1].after) && (c !== e && o.push(b(i.slice(c, e), "\\")), c = e, !/[!-/:-@[-`{-~]/.test(i.charAt(e)) || n.encode && n.encode.includes(i.charAt(e)) ? (o.push((0, f.a)(i.charCodeAt(e))), c++) : o.push("\\"))
                }
                return o.push(b(i.slice(c, l), n.after)), o.join("")
            }(this, e, t)
        }
    }),
    lu: (function(e, t, n) {
        function i(e) {
            return "&#x" + e.toString(16).toUpperCase() + ";"
        }
        n.d(t, {
            a: () => i
        })
    }),
    oGX: (function(e, t, n) {
        function i(e, t) {
            return !!(!1 === t.options.fences && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))
        }
        n.d(t, {
            a: () => i
        })
    }),
    xLX: (function(e, t, n) {
        var i = n("JV"),
            a = n("aV");

        function o(e, t) {
            let n = !1;
            return (0, i.a)(e, function(e) {
                if ("value" in e && /\r?\n|\r/.test(e.value) || "break" === e.type) return n = !0, !1
            }), !!((!e.depth || e.depth < 3) && (0, a.a)(e) && (t.options.setext || n))
        }
        n.d(t, {
            a: () => o
        })
    }),
    PML: (function(e, t, n) {
        function i(e, t) {
            return a(e, t.inConstruct, !0) && !a(e, t.notInConstruct, !1)
        }

        function a(e, t, n) {
            if ("string" == typeof t && (t = [t]), !t || 0 === t.length) return n;
            let i = -1;
            for (; ++i < t.length;)
                if (e.includes(t[i])) return !0;
            return !1
        }
        n.d(t, {
            a: () => i
        })
    }),
    aV: (function(e, t, n) {
        let i = {};

        function a(e, t) {
            let n = t || i;
            return o(e, "boolean" != typeof n.includeImageAlt || n.includeImageAlt, "boolean" != typeof n.includeHtml || n.includeHtml)
        }

        function o(e, t, n) {
            var i;
            if ((i = e) && "object" == typeof i) {
                if ("value" in e) return "html" !== e.type || n ? e.value : "";
                if (t && "alt" in e && e.alt) return e.alt;
                if ("children" in e) return r(e.children, t, n)
            }
            return Array.isArray(e) ? r(e, t, n) : ""
        }

        function r(e, t, n) {
            let i = [],
                a = -1;
            for (; ++a < e.length;) i[a] = o(e[a], t, n);
            return i.join("")
        }
        n.d(t, {
            a: () => a
        })
    }),
    QoD: (function(e, t, n) {
        var i = n("qe"),
            a = n("Ec");
        n.d(t, {}, {
            a: {
                partial: !0,
                tokenize: function(e, t, n) {
                    return function(t) {
                        return (0, a.j)(t) ? (0, i.a)(e, o, "linePrefix")(t) : o(t)
                    };

                    function o(e) {
                        return null === e || (0, a.h)(e) ? t(e) : n(e)
                    }
                }
            }
        })
    }),
    L0h: (function(e, t, n) {
        n.d(t, {
            a: () => b
        });
        var i = n("qe"),
            a = n("Ec"),
            o = n("Avl");

        function r(e, t, n, r, s, c, l, p, u, d, m, f, x, h, g) {
            let v, b;
            return function(t) {
                return e.enter(r), e.enter(s), e.consume(t), e.exit(s), k
            };

            function k(t) {
                return 35 === t ? (v = l, y(t)) : 46 === t ? (v = p, y(t)) : 58 === t || 95 === t || (0, a.a)(t) ? (e.enter(c), e.enter(u), e.consume(t), _) : g && (0, a.j)(t) ? (0, i.a)(e, k, "whitespace")(t) : !g && (0, a.i)(t) ? (0, o.a)(e, k)(t) : E(t)
            }

            function y(t) {
                let n = v + "Marker";
                return e.enter(c), e.enter(v), e.enter(n), e.consume(t), e.exit(n), w
            }

            function w(t) {
                if (null === t || 34 === t || 35 === t || 39 === t || 46 === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || (0, a.i)(t)) return n(t);
                let i = v + "Value";
                return e.enter(i), e.consume(t), j
            }

            function j(t) {
                if (null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t) return n(t);
                if (35 === t || 46 === t || 125 === t || (0, a.i)(t)) {
                    let n = v + "Value";
                    return e.exit(n), e.exit(v), e.exit(c), k(t)
                }
                return e.consume(t), j
            }

            function _(t) {
                return 45 === t || 46 === t || 58 === t || 95 === t || (0, a.b)(t) ? (e.consume(t), _) : (e.exit(u), g && (0, a.j)(t)) ? (0, i.a)(e, z, "whitespace")(t) : !g && (0, a.i)(t) ? (0, o.a)(e, z)(t) : z(t)
            }

            function z(t) {
                return 61 === t ? (e.enter(d), e.consume(t), e.exit(d), S) : (e.exit(c), k(t))
            }

            function S(t) {
                return null === t || 60 === t || 61 === t || 62 === t || 96 === t || 125 === t || g && (0, a.h)(t) ? n(t) : 34 === t || 39 === t ? (e.enter(m), e.enter(x), e.consume(t), e.exit(x), b = t, C) : g && (0, a.j)(t) ? (0, i.a)(e, S, "whitespace")(t) : !g && (0, a.i)(t) ? (0, o.a)(e, S)(t) : (e.enter(f), e.enter(h), e.consume(t), b = void 0, T)
            }

            function T(t) {
                return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 125 === t || (0, a.i)(t) ? (e.exit(h), e.exit(f), e.exit(c), k(t)) : (e.consume(t), T)
            }

            function C(t) {
                return t === b ? (e.enter(x), e.consume(t), e.exit(x), e.exit(m), e.exit(c), q) : (e.enter(f), A(t))
            }

            function A(t) {
                return t === b ? (e.exit(f), C(t)) : null === t ? n(t) : (0, a.h)(t) ? g ? n(t) : (0, o.a)(e, A)(t) : (e.enter(h), e.consume(t), I)
            }

            function I(t) {
                return t === b || null === t || (0, a.h)(t) ? (e.exit(h), A(t)) : (e.consume(t), I)
            }

            function q(e) {
                return 125 === e || (0, a.i)(e) ? k(e) : E(e)
            }

            function E(i) {
                return 125 === i ? (e.enter(s), e.consume(i), e.exit(s), e.exit(r), t) : n(i)
            }
        }

        function s(e, t, n, i, o, r, s) {
            let c, l = 0,
                p = 0;
            return function(t) {
                return e.enter(i), e.enter(o), e.consume(t), e.exit(o), u
            };

            function u(n) {
                return 93 === n ? (e.enter(o), e.consume(n), e.exit(o), e.exit(i), t) : (e.enter(r), d(n))
            }

            function d(t) {
                if (93 === t && !p) return x(t);
                let n = e.enter("chunkText", {
                    contentType: "text",
                    previous: c
                });
                return c && (c.next = n), c = n, m(t)
            }

            function m(t) {
                return null === t || l > 999 || 91 === t && ++p > 32 ? n(t) : 93 !== t || p-- ? (0, a.h)(t) ? s ? n(t) : (e.consume(t), e.exit("chunkText"), d) : (e.consume(t), 92 === t ? f : m) : (e.exit("chunkText"), x(t))
            }

            function f(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, m) : m(t)
            }

            function x(n) {
                return e.exit(r), e.enter(o), e.consume(n), e.exit(o), e.exit(i), t
            }
        }

        function c(e, t, n, i) {
            let o = this;
            return function(t) {
                return (0, a.a)(t) ? (e.enter(i), e.consume(t), r) : n(t)
            };

            function r(s) {
                return 45 === s || 95 === s || (0, a.b)(s) ? (e.consume(s), r) : (e.exit(i), 45 === o.previous || 95 === o.previous ? n(s) : t(s))
            }
        }
        let l = {
                tokenize: function(e, t, n) {
                    let o, r = this,
                        s = r.events[r.events.length - 1],
                        l = s && "linePrefix" === s[1].type ? s[2].sliceSerialize(s[1], !0).length : 0,
                        m = 0;
                    return function(t) {
                        return e.enter("directiveContainer"), e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"),
                            function t(i) {
                                return 58 === i ? (e.consume(i), m++, t) : m < 3 ? n(i) : (e.exit("directiveContainerSequence"), c.call(r, e, f, n, "directiveContainerName")(i))
                            }(t)
                    };

                    function f(t) {
                        return 91 === t ? e.attempt(p, x, x)(t) : x(t)
                    }

                    function x(t) {
                        return 123 === t ? e.attempt(u, h, h)(t) : h(t)
                    }

                    function h(t) {
                        return (0, i.a)(e, g, "whitespace")(t)
                    }

                    function g(i) {
                        return (e.exit("directiveContainerFence"), null === i) ? S(i) : (0, a.h)(i) ? r.interrupt ? t(i) : e.attempt(d, v, S)(i) : n(i)
                    }

                    function v(t) {
                        return null === t ? S(t) : (0, a.h)(t) ? e.check(d, w, S)(t) : (e.enter("directiveContainerContent"), b(t))
                    }

                    function b(t) {
                        return e.attempt({
                            tokenize: T,
                            partial: !0
                        }, z, l ? (0, i.a)(e, k, "linePrefix", l + 1) : k)(t)
                    }

                    function k(t) {
                        return null === t ? z(t) : (0, a.h)(t) ? e.check(d, y, z)(t) : y(t)
                    }

                    function y(t) {
                        let n = e.enter("chunkDocument", {
                            contentType: "document",
                            previous: o
                        });
                        return o && (o.next = n), o = n,
                            function t(n) {
                                if (null === n) {
                                    let t = e.exit("chunkDocument");
                                    return r.parser.lazy[t.start.line] = !1, z(n)
                                }
                                return (0, a.h)(n) ? e.check(d, j, _)(n) : (e.consume(n), t)
                            }(t)
                    }

                    function w(t) {
                        return e.enter("directiveContainerContent"), b(t)
                    }

                    function j(t) {
                        e.consume(t);
                        let n = e.exit("chunkDocument");
                        return r.parser.lazy[n.start.line] = !1, b
                    }

                    function _(t) {
                        let n = e.exit("chunkDocument");
                        return r.parser.lazy[n.start.line] = !1, z(t)
                    }

                    function z(t) {
                        return e.exit("directiveContainerContent"), S(t)
                    }

                    function S(n) {
                        return e.exit("directiveContainer"), t(n)
                    }

                    function T(e, t, n) {
                        let o = 0;
                        return (0, i.a)(e, function(t) {
                            return e.enter("directiveContainerFence"), e.enter("directiveContainerSequence"),
                                function t(a) {
                                    return 58 === a ? (e.consume(a), o++, t) : o < m ? n(a) : (e.exit("directiveContainerSequence"), (0, i.a)(e, s, "whitespace")(a))
                                }(t)
                        }, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

                        function s(i) {
                            return null === i || (0, a.h)(i) ? (e.exit("directiveContainerFence"), t(i)) : n(i)
                        }
                    }
                },
                concrete: !0
            },
            p = {
                tokenize: function(e, t, n) {
                    return s(e, t, n, "directiveContainerLabel", "directiveContainerLabelMarker", "directiveContainerLabelString", !0)
                },
                partial: !0
            },
            u = {
                tokenize: function(e, t, n) {
                    return r(e, t, n, "directiveContainerAttributes", "directiveContainerAttributesMarker", "directiveContainerAttribute", "directiveContainerAttributeId", "directiveContainerAttributeClass", "directiveContainerAttributeName", "directiveContainerAttributeInitializerMarker", "directiveContainerAttributeValueLiteral", "directiveContainerAttributeValue", "directiveContainerAttributeValueMarker", "directiveContainerAttributeValueData", !0)
                },
                partial: !0
            },
            d = {
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a
                    };

                    function a(e) {
                        return i.parser.lazy[i.now().line] ? n(e) : t(e)
                    }
                },
                partial: !0
            },
            m = {
                tokenize: function(e, t, n) {
                    let o = this;
                    return function(t) {
                        return e.enter("directiveLeaf"), e.enter("directiveLeafSequence"), e.consume(t), r
                    };

                    function r(t) {
                        return 58 === t ? (e.consume(t), e.exit("directiveLeafSequence"), c.call(o, e, s, n, "directiveLeafName")) : n(t)
                    }

                    function s(t) {
                        return 91 === t ? e.attempt(f, l, l)(t) : l(t)
                    }

                    function l(t) {
                        return 123 === t ? e.attempt(x, p, p)(t) : p(t)
                    }

                    function p(t) {
                        return (0, i.a)(e, u, "whitespace")(t)
                    }

                    function u(i) {
                        return null === i || (0, a.h)(i) ? (e.exit("directiveLeaf"), t(i)) : n(i)
                    }
                }
            },
            f = {
                tokenize: function(e, t, n) {
                    return s(e, t, n, "directiveLeafLabel", "directiveLeafLabelMarker", "directiveLeafLabelString", !0)
                },
                partial: !0
            },
            x = {
                tokenize: function(e, t, n) {
                    return r(e, t, n, "directiveLeafAttributes", "directiveLeafAttributesMarker", "directiveLeafAttribute", "directiveLeafAttributeId", "directiveLeafAttributeClass", "directiveLeafAttributeName", "directiveLeafAttributeInitializerMarker", "directiveLeafAttributeValueLiteral", "directiveLeafAttributeValue", "directiveLeafAttributeValueMarker", "directiveLeafAttributeValueData", !0)
                },
                partial: !0
            },
            h = {
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return e.enter("directiveText"), e.enter("directiveTextMarker"), e.consume(t), e.exit("directiveTextMarker"), c.call(i, e, a, n, "directiveTextName")
                    };

                    function a(t) {
                        return 58 === t ? n(t) : 91 === t ? e.attempt(g, o, o)(t) : o(t)
                    }

                    function o(t) {
                        return 123 === t ? e.attempt(v, r, r)(t) : r(t)
                    }

                    function r(n) {
                        return e.exit("directiveText"), t(n)
                    }
                },
                previous: function(e) {
                    return 58 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                }
            },
            g = {
                tokenize: function(e, t, n) {
                    return s(e, t, n, "directiveTextLabel", "directiveTextLabelMarker", "directiveTextLabelString")
                },
                partial: !0
            },
            v = {
                tokenize: function(e, t, n) {
                    return r(e, t, n, "directiveTextAttributes", "directiveTextAttributesMarker", "directiveTextAttribute", "directiveTextAttributeId", "directiveTextAttributeClass", "directiveTextAttributeName", "directiveTextAttributeInitializerMarker", "directiveTextAttributeValueLiteral", "directiveTextAttributeValue", "directiveTextAttributeValueMarker", "directiveTextAttributeValueData")
                },
                partial: !0
            };

        function b() {
            return {
                text: {
                    58: h
                },
                flow: {
                    58: [l, m]
                }
            }
        }
    }),
    dVr: (function(e, t, n) {
        n.d(t, {
            a: () => B
        });
        var i = n("REn"),
            a = n("Ec");
        let o = {
                tokenize: function(e, t, n) {
                    let i = 0;
                    return function t(o) {
                        return (87 === o || 119 === o) && i < 3 ? (i++, e.consume(o), t) : 46 === o && 3 === i ? (e.consume(o), a) : n(o)
                    };

                    function a(e) {
                        return null === e ? n(e) : t(e)
                    }
                },
                partial: !0
            },
            r = {
                tokenize: function(e, t, n) {
                    let i, o, r;
                    return s;

                    function s(t) {
                        return 46 === t || 95 === t ? e.check(c, p, l)(t) : null === t || (0, a.i)(t) || (0, a.l)(t) || 45 !== t && (0, a.k)(t) ? p(t) : (r = !0, e.consume(t), s)
                    }

                    function l(t) {
                        return 95 === t ? i = !0 : (o = i, i = void 0), e.consume(t), s
                    }

                    function p(e) {
                        return o || i || !r ? n(e) : t(e)
                    }
                },
                partial: !0
            },
            s = {
                tokenize: function(e, t) {
                    let n = 0,
                        i = 0;
                    return o;

                    function o(s) {
                        return 40 === s ? (n++, e.consume(s), o) : 41 === s && i < n ? r(s) : 33 === s || 34 === s || 38 === s || 39 === s || 41 === s || 42 === s || 44 === s || 46 === s || 58 === s || 59 === s || 60 === s || 63 === s || 93 === s || 95 === s || 126 === s ? e.check(c, t, r)(s) : null === s || (0, a.i)(s) || (0, a.l)(s) ? t(s) : (e.consume(s), o)
                    }

                    function r(t) {
                        return 41 === t && i++, e.consume(t), o
                    }
                },
                partial: !0
            },
            c = {
                tokenize: function(e, t, n) {
                    return i;

                    function i(s) {
                        return 33 === s || 34 === s || 39 === s || 41 === s || 42 === s || 44 === s || 46 === s || 58 === s || 59 === s || 63 === s || 95 === s || 126 === s ? (e.consume(s), i) : 38 === s ? (e.consume(s), r) : 93 === s ? (e.consume(s), o) : 60 === s || null === s || (0, a.i)(s) || (0, a.l)(s) ? t(s) : n(s)
                    }

                    function o(e) {
                        return null === e || 40 === e || 91 === e || (0, a.i)(e) || (0, a.l)(e) ? t(e) : i(e)
                    }

                    function r(t) {
                        return (0, a.a)(t) ? function t(o) {
                            return 59 === o ? (e.consume(o), i) : (0, a.a)(o) ? (e.consume(o), t) : n(o)
                        }(t) : n(t)
                    }
                },
                partial: !0
            },
            l = {
                tokenize: function(e, t, n) {
                    return function(t) {
                        return e.consume(t), i
                    };

                    function i(e) {
                        return (0, a.b)(e) ? n(e) : t(e)
                    }
                },
                partial: !0
            },
            p = {
                name: "wwwAutolink",
                tokenize: function(e, t, n) {
                    let i = this;
                    return function(t) {
                        return 87 !== t && 119 !== t || !x.call(i, i.previous) || b(i.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(o, e.attempt(r, e.attempt(s, a), n), n)(t))
                    };

                    function a(n) {
                        return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
                    }
                },
                previous: x
            },
            u = {
                name: "protocolAutolink",
                tokenize: function(e, t, n) {
                    let i = this,
                        o = "",
                        c = !1;
                    return function(t) {
                        return (72 === t || 104 === t) && h.call(i, i.previous) && !b(i.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), o += String.fromCodePoint(t), e.consume(t), l) : n(t)
                    };

                    function l(t) {
                        if ((0, a.a)(t) && o.length < 5) return o += String.fromCodePoint(t), e.consume(t), l;
                        if (58 === t) {
                            let n = o.toLowerCase();
                            if ("http" === n || "https" === n) return e.consume(t), p
                        }
                        return n(t)
                    }

                    function p(t) {
                        return 47 === t ? (e.consume(t), c) ? u : (c = !0, p) : n(t)
                    }

                    function u(t) {
                        return null === t || (0, a.d)(t) || (0, a.i)(t) || (0, a.l)(t) || (0, a.k)(t) ? n(t) : e.attempt(r, e.attempt(s, d), n)(t)
                    }

                    function d(n) {
                        return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
                    }
                },
                previous: h
            },
            d = {
                name: "emailAutolink",
                tokenize: function(e, t, n) {
                    let i, o, r = this;
                    return function(t) {
                        return !v(t) || !g.call(r, r.previous) || b(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(i) {
                            return v(i) ? (e.consume(i), t) : 64 === i ? (e.consume(i), s) : n(i)
                        }(t))
                    };

                    function s(t) {
                        return 46 === t ? e.check(l, p, c)(t) : 45 === t || 95 === t || (0, a.b)(t) ? (o = !0, e.consume(t), s) : p(t)
                    }

                    function c(t) {
                        return e.consume(t), i = !0, s
                    }

                    function p(s) {
                        return o && i && (0, a.a)(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(s)) : n(s)
                    }
                },
                previous: g
            },
            m = {},
            f = 48;
        for (; f < 123;) m[f] = d, 58 == ++f ? f = 65 : 91 === f && (f = 97);

        function x(e) {
            return null === e || 40 === e || 42 === e || 95 === e || 91 === e || 93 === e || 126 === e || (0, a.i)(e)
        }

        function h(e) {
            return !(0, a.a)(e)
        }

        function g(e) {
            return !(47 === e || v(e))
        }

        function v(e) {
            return 43 === e || 45 === e || 46 === e || 95 === e || (0, a.b)(e)
        }

        function b(e) {
            let t = e.length,
                n = !1;
            for (; t--;) {
                let i = e[t][1];
                if (("labelLink" === i.type || "labelImage" === i.type) && !i._balanced) {
                    n = !0;
                    break
                }
                if (i._gfmAutolinkLiteralWalkedInto) {
                    n = !1;
                    break
                }
            }
            return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
        }
        m[43] = d, m[45] = d, m[46] = d, m[95] = d, m[72] = [d, u], m[104] = [d, u], m[87] = [d, p], m[119] = [d, p];
        var k = n("QoD"),
            y = n("qe"),
            w = n("kUC");
        let j = {
            tokenize: function(e, t, n) {
                let i = this;
                return (0, y.a)(e, function(e) {
                    let a = i.events[i.events.length - 1];
                    return a && "gfmFootnoteDefinitionIndent" === a[1].type && 4 === a[2].sliceSerialize(a[1], !0).length ? t(e) : n(e)
                }, "gfmFootnoteDefinitionIndent", 5)
            },
            partial: !0
        };

        function _(e, t, n) {
            let i, a = this,
                o = a.events.length,
                r = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []);
            for (; o--;) {
                let e = a.events[o][1];
                if ("labelImage" === e.type) {
                    i = e;
                    break
                }
                if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break
            }
            return function(o) {
                if (!i || !i._balanced) return n(o);
                let s = (0, w.a)(a.sliceSerialize({
                    start: i.end,
                    end: a.now()
                }));
                return 94 === s.codePointAt(0) && r.includes(s.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(o), e.exit("gfmFootnoteCallLabelMarker"), t(o)) : n(o)
            }
        }

        function z(e, t) {
            let n = e.length;
            for (; n--;)
                if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                    e[n][1];
                    break
                } e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
            let i = {
                    type: "gfmFootnoteCall",
                    start: Object.assign({}, e[n + 3][1].start),
                    end: Object.assign({}, e[e.length - 1][1].end)
                },
                a = {
                    type: "gfmFootnoteCallMarker",
                    start: Object.assign({}, e[n + 3][1].end),
                    end: Object.assign({}, e[n + 3][1].end)
                };
            a.end.column++, a.end.offset++, a.end._bufferIndex++;
            let o = {
                    type: "gfmFootnoteCallString",
                    start: Object.assign({}, a.end),
                    end: Object.assign({}, e[e.length - 1][1].start)
                },
                r = {
                    type: "chunkString",
                    contentType: "string",
                    start: Object.assign({}, o.start),
                    end: Object.assign({}, o.end)
                },
                s = [e[n + 1], e[n + 2],
                    ["enter", i, t], e[n + 3], e[n + 4],
                    ["enter", a, t],
                    ["exit", a, t],
                    ["enter", o, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", o, t], e[e.length - 2], e[e.length - 1],
                    ["exit", i, t]
                ];
            return e.splice(n, e.length - n + 1, ...s), e
        }

        function S(e, t, n) {
            let i, o = this,
                r = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []),
                s = 0;
            return function(t) {
                return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c
            };

            function c(t) {
                return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l)
            }

            function l(c) {
                if (s > 999 || 93 === c && !i || null === c || 91 === c || (0, a.i)(c)) return n(c);
                if (93 === c) {
                    e.exit("chunkString");
                    let i = e.exit("gfmFootnoteCallString");
                    return r.includes((0, w.a)(o.sliceSerialize(i))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c)
                }
                return (0, a.i)(c) || (i = !0), s++, e.consume(c), 92 === c ? p : l
            }

            function p(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, l) : l(t)
            }
        }

        function T(e, t, n) {
            let i, o, r = this,
                s = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []),
                c = 0;
            return function(t) {
                return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l
            };

            function l(t) {
                return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", p) : n(t)
            }

            function p(t) {
                if (c > 999 || 93 === t && !o || null === t || 91 === t || (0, a.i)(t)) return n(t);
                if (93 === t) {
                    e.exit("chunkString");
                    let n = e.exit("gfmFootnoteDefinitionLabelString");
                    return i = (0, w.a)(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d
                }
                return (0, a.i)(t) || (o = !0), c++, e.consume(t), 92 === t ? u : p
            }

            function u(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t), c++, p) : p(t)
            }

            function d(t) {
                return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), s.includes(i) || s.push(i), (0, y.a)(e, m, "gfmFootnoteDefinitionWhitespace")) : n(t)
            }

            function m(e) {
                return t(e)
            }
        }

        function C(e, t, n) {
            return e.check(k.a, t, e.attempt(j, t, n))
        }

        function A(e) {
            e.exit("gfmFootnoteDefinition")
        }
        var I = n("Qy"),
            q = n("hm"),
            E = n("yH");
        class F {
            constructor() {
                this.map = [], this.index = new Map
            }
            add(e, t, n) {
                ! function(e, t, n, i) {
                    if (0 === n && 0 === i.length) return;
                    let a = e.index.get(t);
                    if (a) {
                        a[1] += n, a[2].push(...i);
                        return
                    }
                    let o = [t, n, i];
                    e.map.push(o), e.index.set(t, o)
                }(this, e, t, n)
            }
            consume(e) {
                if (this.map.sort(function(e, t) {
                        return e[0] - t[0]
                    }), 0 === this.map.length) return;
                let t = this.map.length,
                    n = [];
                for (; t > 0;) t -= 1, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
                n.push(e.slice()), e.length = 0;
                let i = n.pop();
                for (; i;) {
                    for (let t of i) e.push(t);
                    i = n.pop()
                }
                this.map.length = 0, this.index.clear()
            }
        }

        function L(e, t, n) {
            let i, o = this,
                r = 0,
                s = 0;
            return function(e) {
                let t = o.events.length - 1;
                for (; t > -1;) {
                    let {
                        type: e
                    } = o.events[t][1];
                    if ("lineEnding" === e || "linePrefix" === e) t--;
                    else break
                }
                let i = t > -1 ? o.events[t][1].type : null,
                    a = "tableHead" === i || "tableRow" === i ? b : c;
                return a === b && o.parser.lazy[o.now().line] ? n(e) : a(e)
            };

            function c(t) {
                var n;
                return e.enter("tableHead"), e.enter("tableRow"), 124 === (n = t) || (i = !0, s += 1), l(n)
            }

            function l(t) {
                return null === t ? n(t) : (0, a.h)(t) ? s > 1 ? (s = 0, o.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), d) : n(t) : (0, a.j)(t) ? (0, y.a)(e, l, "whitespace")(t) : (s += 1, i && (i = !1, r += 1), 124 === t) ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), i = !0, l) : (e.enter("data"), p(t))
            }

            function p(t) {
                return null === t || 124 === t || (0, a.i)(t) ? (e.exit("data"), l(t)) : (e.consume(t), 92 === t ? u : p)
            }

            function u(t) {
                return 92 === t || 124 === t ? (e.consume(t), p) : p(t)
            }

            function d(t) {
                return (o.interrupt = !1, o.parser.lazy[o.now().line]) ? n(t) : (e.enter("tableDelimiterRow"), i = !1, (0, a.j)(t)) ? (0, y.a)(e, m, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t)
            }

            function m(t) {
                return 45 === t || 58 === t ? x(t) : 124 === t ? (i = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), f) : n(t)
            }

            function f(t) {
                return (0, a.j)(t) ? (0, y.a)(e, x, "whitespace")(t) : x(t)
            }

            function x(t) {
                return 58 === t ? (s += 1, i = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), h) : 45 === t ? (s += 1, h(t)) : null === t || (0, a.h)(t) ? v(t) : n(t)
            }

            function h(t) {
                return 45 === t ? (e.enter("tableDelimiterFiller"), function t(n) {
                    return 45 === n ? (e.consume(n), t) : 58 === n ? (i = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(n), e.exit("tableDelimiterMarker"), g) : (e.exit("tableDelimiterFiller"), g(n))
                }(t)) : n(t)
            }

            function g(t) {
                return (0, a.j)(t) ? (0, y.a)(e, v, "whitespace")(t) : v(t)
            }

            function v(o) {
                if (124 === o) return m(o);
                if (null === o || (0, a.h)(o)) return i && r === s ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(o)) : n(o);
                return n(o)
            }

            function b(t) {
                return e.enter("tableRow"), k(t)
            }

            function k(n) {
                return 124 === n ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), k) : null === n || (0, a.h)(n) ? (e.exit("tableRow"), t(n)) : (0, a.j)(n) ? (0, y.a)(e, k, "whitespace")(n) : (e.enter("data"), w(n))
            }

            function w(t) {
                return null === t || 124 === t || (0, a.i)(t) ? (e.exit("data"), k(t)) : (e.consume(t), 92 === t ? j : w)
            }

            function j(t) {
                return 92 === t || 124 === t ? (e.consume(t), w) : w(t)
            }
        }

        function R(e, t) {
            let n, i, a, o = -1,
                r = !0,
                s = 0,
                c = [0, 0, 0, 0],
                l = [0, 0, 0, 0],
                p = !1,
                u = 0,
                d = new F;
            for (; ++o < e.length;) {
                let m = e[o],
                    f = m[1];
                "enter" === m[0] ? "tableHead" === f.type ? (p = !1, 0 !== u && (P(d, t, u, n, i), i = void 0, u = 0), n = {
                    type: "table",
                    start: Object.assign({}, f.start),
                    end: Object.assign({}, f.end)
                }, d.add(o, 0, [
                    ["enter", n, t]
                ])) : "tableRow" === f.type || "tableDelimiterRow" === f.type ? (r = !0, a = void 0, c = [0, 0, 0, 0], l = [0, o + 1, 0, 0], p && (p = !1, i = {
                    type: "tableBody",
                    start: Object.assign({}, f.start),
                    end: Object.assign({}, f.end)
                }, d.add(o, 0, [
                    ["enter", i, t]
                ])), s = "tableDelimiterRow" === f.type ? 2 : i ? 3 : 1) : s && ("data" === f.type || "tableDelimiterMarker" === f.type || "tableDelimiterFiller" === f.type) ? (r = !1, 0 === l[2] && (0 !== c[1] && (l[0] = l[1], a = O(d, t, c, s, void 0, a), c = [0, 0, 0, 0]), l[2] = o)) : "tableCellDivider" === f.type && (r ? r = !1 : (0 !== c[1] && (l[0] = l[1], a = O(d, t, c, s, void 0, a)), l = [(c = l)[1], o, 0, 0])) : "tableHead" === f.type ? (p = !0, u = o) : "tableRow" === f.type || "tableDelimiterRow" === f.type ? (u = o, 0 !== c[1] ? (l[0] = l[1], a = O(d, t, c, s, o, a)) : 0 !== l[1] && (a = O(d, t, l, s, o, a)), s = 0) : s && ("data" === f.type || "tableDelimiterMarker" === f.type || "tableDelimiterFiller" === f.type) && (l[3] = o)
            }
            for (0 !== u && P(d, t, u, n, i), d.consume(t.events), o = -1; ++o < t.events.length;) {
                let e = t.events[o];
                "enter" === e[0] && "table" === e[1].type && (e[1]._align = function(e, t) {
                    let n = !1,
                        i = [];
                    for (; t < e.length;) {
                        let a = e[t];
                        if (n) {
                            if ("enter" === a[0]) "tableContent" === a[1].type && i.push("tableDelimiterMarker" === e[t + 1][1].type ? "left" : "none");
                            else if ("tableContent" === a[1].type) {
                                if ("tableDelimiterMarker" === e[t - 1][1].type) {
                                    let e = i.length - 1;
                                    i[e] = "left" === i[e] ? "center" : "right"
                                }
                            } else if ("tableDelimiterRow" === a[1].type) break
                        } else "enter" === a[0] && "tableDelimiterRow" === a[1].type && (n = !0);
                        t += 1
                    }
                    return i
                }(t.events, o))
            }
            return e
        }

        function O(e, t, n, i, a, o) {
            0 !== n[0] && (o.end = Object.assign({}, D(t.events, n[0])), e.add(n[0], 0, [
                ["exit", o, t]
            ]));
            let r = D(t.events, n[1]);
            if (o = {
                    type: 1 === i ? "tableHeader" : 2 === i ? "tableDelimiter" : "tableData",
                    start: Object.assign({}, r),
                    end: Object.assign({}, r)
                }, e.add(n[1], 0, [
                    ["enter", o, t]
                ]), 0 !== n[2]) {
                let a = D(t.events, n[2]),
                    o = D(t.events, n[3]),
                    r = {
                        type: "tableContent",
                        start: Object.assign({}, a),
                        end: Object.assign({}, o)
                    };
                if (e.add(n[2], 0, [
                        ["enter", r, t]
                    ]), 2 !== i) {
                    let i = t.events[n[2]],
                        a = t.events[n[3]];
                    if (i[1].end = Object.assign({}, a[1].end), i[1].type = "chunkText", i[1].contentType = "text", n[3] > n[2] + 1) {
                        let t = n[2] + 1,
                            i = n[3] - n[2] - 1;
                        e.add(t, i, [])
                    }
                }
                e.add(n[3] + 1, 0, [
                    ["exit", r, t]
                ])
            }
            return void 0 !== a && (o.end = Object.assign({}, D(t.events, a)), e.add(a, 0, [
                ["exit", o, t]
            ]), o = void 0), o
        }

        function P(e, t, n, i, a) {
            let o = [],
                r = D(t.events, n);
            a && (a.end = Object.assign({}, r), o.push(["exit", a, t])), i.end = Object.assign({}, r), o.push(["exit", i, t]), e.add(n + 1, 0, o)
        }

        function D(e, t) {
            let n = e[t],
                i = "enter" === n[0] ? "start" : "end";
            return n[1][i]
        }
        let $ = {
            name: "tasklistCheck",
            tokenize: function(e, t, n) {
                let i = this;
                return function(t) {
                    return null === i.previous && i._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), o) : n(t)
                };

                function o(t) {
                    return (0, a.i)(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), r) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), r) : n(t)
                }

                function r(t) {
                    return 93 === t ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t)
                }

                function s(i) {
                    return (0, a.h)(i) ? t(i) : (0, a.j)(i) ? e.check({
                        tokenize: M
                    }, t, n)(i) : n(i)
                }
            }
        };

        function M(e, t, n) {
            return (0, y.a)(e, function(e) {
                return null === e ? n(e) : t(e)
            }, "whitespace")
        }

        function B(e) {
            let t, n;
            return (0, i.a)([{
                text: m
            }, {
                document: {
                    91: {
                        name: "gfmFootnoteDefinition",
                        tokenize: T,
                        continuation: {
                            tokenize: C
                        },
                        exit: A
                    }
                },
                text: {
                    91: {
                        name: "gfmFootnoteCall",
                        tokenize: S
                    },
                    93: {
                        name: "gfmPotentialFootnoteCall",
                        add: "after",
                        tokenize: _,
                        resolveTo: z
                    }
                }
            }, (t = (e || {}).singleTilde, n = {
                name: "strikethrough",
                tokenize: function(e, n, i) {
                    let a = this.previous,
                        o = this.events,
                        r = 0;
                    return function(s) {
                        return 126 === a && "characterEscape" !== o[o.length - 1][1].type ? i(s) : (e.enter("strikethroughSequenceTemporary"), function o(s) {
                            let c = (0, q.a)(a);
                            if (126 === s) return r > 1 ? i(s) : (e.consume(s), r++, o);
                            if (r < 2 && !t) return i(s);
                            let l = e.exit("strikethroughSequenceTemporary"),
                                p = (0, q.a)(s);
                            return l._open = !p || 2 === p && !!c, l._close = !c || 2 === c && !!p, n(s)
                        }(s))
                    }
                },
                resolveAll: function(e, t) {
                    let n = -1;
                    for (; ++n < e.length;)
                        if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
                            let i = n;
                            for (; i--;)
                                if ("exit" === e[i][0] && "strikethroughSequenceTemporary" === e[i][1].type && e[i][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[i][1].end.offset - e[i][1].start.offset) {
                                    e[n][1].type = "strikethroughSequence", e[i][1].type = "strikethroughSequence";
                                    let a = {
                                            type: "strikethrough",
                                            start: Object.assign({}, e[i][1].start),
                                            end: Object.assign({}, e[n][1].end)
                                        },
                                        o = {
                                            type: "strikethroughText",
                                            start: Object.assign({}, e[i][1].end),
                                            end: Object.assign({}, e[n][1].start)
                                        },
                                        r = [
                                            ["enter", a, t],
                                            ["enter", e[i][1], t],
                                            ["exit", e[i][1], t],
                                            ["enter", o, t]
                                        ],
                                        s = t.parser.constructs.insideSpan.null;
                                    s && (0, I.b)(r, r.length, 0, (0, E.a)(s, e.slice(i + 1, n), t)), (0, I.b)(r, r.length, 0, [
                                        ["exit", o, t],
                                        ["enter", e[n][1], t],
                                        ["exit", e[n][1], t],
                                        ["exit", a, t]
                                    ]), (0, I.b)(e, i - 1, n - i + 3, r), n = i + r.length - 2;
                                    break
                                }
                        } for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
                    return e
                }
            }, null == t && (t = !0), {
                text: {
                    126: n
                },
                insideSpan: {
                    null: [n]
                },
                attentionMarkers: {
                    null: [126]
                }
            }), {
                flow: {
                    null: {
                        name: "table",
                        tokenize: L,
                        resolveAll: R
                    }
                }
            }, {
                text: {
                    91: $
                }
            }])
        }
    }),
    qe: (function(e, t, n) {
        var i = n("Ec");

        function a(e, t, n, a) {
            let o = a ? a - 1 : 1 / 0,
                r = 0;
            return function(a) {
                return (0, i.j)(a) ? (e.enter(n), function a(s) {
                    return (0, i.j)(s) && r++ < o ? (e.consume(s), a) : (e.exit(n), t(s))
                }(a)) : t(a)
            }
        }
        n.d(t, {
            a: () => a
        })
    }),
    Avl: (function(e, t, n) {
        var i = n("qe"),
            a = n("Ec");

        function o(e, t) {
            let n;
            return function o(r) {
                return (0, a.h)(r) ? (e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), n = !0, o) : (0, a.j)(r) ? (0, i.a)(e, o, n ? "linePrefix" : "lineSuffix")(r) : t(r)
            }
        }
        n.d(t, {
            a: () => o
        })
    }),
    Ec: (function(e, t, n) {
        let i = x(/[A-Za-z]/),
            a = x(/[\dA-Za-z]/),
            o = x(/[#-'*+\--9=?A-Z^-~]/);

        function r(e) {
            return null !== e && (e < 32 || 127 === e)
        }
        let s = x(/\d/),
            c = x(/[\dA-Fa-f]/),
            l = x(/[!-/:-@[-`{-~]/);

        function p(e) {
            return null !== e && e < -2
        }

        function u(e) {
            return null !== e && (e < 0 || 32 === e)
        }

        function d(e) {
            return -2 === e || -1 === e || 32 === e
        }
        let m = x(/\p{P}|\p{S}/u),
            f = x(/\s/);

        function x(e) {
            return function(t) {
                return null !== t && t > -1 && e.test(String.fromCharCode(t))
            }
        }
        n.d(t, {
            d: () => r,
            h: () => p,
            i: () => u,
            j: () => d
        }, {
            a: i,
            b: a,
            c: o,
            e: s,
            f: c,
            g: l,
            k: m,
            l: f
        })
    }),
    Qy: (function(e, t, n) {
        function i(e, t, n, i) {
            let a, o = e.length,
                r = 0;
            if (t = t < 0 ? -t > o ? 0 : o + t : t > o ? o : t, n = n > 0 ? n : 0, i.length < 1e4)(a = Array.from(i)).unshift(t, n), e.splice(...a);
            else
                for (n && e.splice(t, n); r < i.length;)(a = i.slice(r, r + 1e4)).unshift(t, 0), e.splice(...a), r += 1e4, t += 1e4
        }

        function a(e, t) {
            return e.length > 0 ? (i(e, e.length, 0, t), e) : t
        }
        n.d(t, {
            a: () => a,
            b: () => i
        })
    }),
    hm: (function(e, t, n) {
        var i = n("Ec");

        function a(e) {
            return null === e || (0, i.i)(e) || (0, i.l)(e) ? 1 : (0, i.k)(e) ? 2 : void 0
        }
        n.d(t, {
            a: () => a
        })
    }),
    REn: (function(e, t, n) {
        var i = n("Qy");
        let a = {}.hasOwnProperty;

        function o(e) {
            let t = {},
                n = -1;
            for (; ++n < e.length;) ! function(e, t) {
                let n;
                for (n in t) {
                    let o, r = (a.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                        s = t[n];
                    if (s)
                        for (o in s) {
                            a.call(r, o) || (r[o] = []);
                            let e = s[o];
                            ! function(e, t) {
                                let n = -1,
                                    a = [];
                                for (; ++n < t.length;)("after" === t[n].add ? e : a).push(t[n]);
                                (0, i.b)(e, 0, 0, a)
                            }(r[o], Array.isArray(e) ? e : e ? [e] : [])
                        }
                }
            }(t, e[n]);
            return t
        }
        n.d(t, {
            a: () => o
        })
    }),
    VD: (function(e, t, n) {
        function i(e, t) {
            let n = Number.parseInt(e, t);
            return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n)
        }
        n.d(t, {
            a: () => i
        })
    }),
    zHD: (function(e, t, n) {
        var i = n("cx"),
            a = n("VD");
        let o = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

        function r(e) {
            return e.replace(o, s)
        }

        function s(e, t, n) {
            if (t) return t;
            if (35 === n.charCodeAt(0)) {
                let e = n.charCodeAt(1),
                    t = 120 === e || 88 === e;
                return (0, a.a)(n.slice(t ? 2 : 1), t ? 16 : 10)
            }
            return (0, i.a)(n) || e
        }
        n.d(t, {
            a: () => r
        })
    }),
    kUC: (function(e, t, n) {
        function i(e) {
            return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
        }
        n.d(t, {
            a: () => i
        })
    }),
    yH: (function(e, t, n) {
        function i(e, t, n) {
            let i = [],
                a = -1;
            for (; ++a < e.length;) {
                let o = e[a].resolveAll;
                o && !i.includes(o) && (t = o(t, n), i.push(o))
            }
            return t
        }
        n.d(t, {
            a: () => i
        })
    }),
    HCz: (function(e) {
        e.exports = JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/city+json":{"source":"iana","compressible":true},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true,"extensions":["cpl"]},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dash-patch+xml":{"source":"iana","compressible":true,"extensions":["mpp"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true,"extensions":["mpf"]},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/oblivious-dns-message":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana","extensions":["asc"]},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.eclipse.ditto+json":{"source":"iana","compressible":true},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eu.kasparian.car+json":{"source":"iana","compressible":true},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.familysearch.gedcom+zip":{"source":"iana","compressible":false},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hl7cda+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hl7v2+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxar.archive.3tz+zip":{"source":"iana","compressible":false},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.syft+json":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true,"extensions":["wif"]},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana","extensions":["avci"]},"image/avcs":{"source":"iana","extensions":["avcs"]},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}')
    })
};