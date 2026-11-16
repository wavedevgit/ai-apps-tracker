/*! LICENSE: 321957.745ede45f0.js.LICENSE.txt */
export const __rspack_esm_ids = [321957];
export const __webpack_modules__ = {
    x9vW: (function(e, n) {
        function t(e, n) {
            var t = e.length;
            for (e.push(n); 0 < t;) {
                var a = t - 1 >>> 1,
                    r = e[a];
                if (0 < l(r, n)) e[a] = n, e[t] = r, t = a;
                else break
            }
        }

        function a(e) {
            return 0 === e.length ? null : e[0]
        }

        function r(e) {
            if (0 === e.length) return null;
            var n = e[0],
                t = e.pop();
            if (t !== n) {
                e[0] = t;
                for (var a = 0, r = e.length, i = r >>> 1; a < i;) {
                    var o = 2 * (a + 1) - 1,
                        u = e[o],
                        s = o + 1,
                        f = e[s];
                    if (0 > l(u, t)) s < r && 0 > l(f, u) ? (e[a] = f, e[s] = t, a = s) : (e[a] = u, e[o] = t, a = o);
                    else if (s < r && 0 > l(f, t)) e[a] = f, e[s] = t, a = s;
                    else break
                }
            }
            return n
        }

        function l(e, n) {
            var t = e.sortIndex - n.sortIndex;
            return 0 !== t ? t : e.id - n.id
        }
        if (n.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
            var i, o = performance;
            n.unstable_now = function() {
                return o.now()
            }
        } else {
            var u = Date,
                s = u.now();
            n.unstable_now = function() {
                return u.now() - s
            }
        }
        var f = [],
            c = [],
            b = 1,
            p = null,
            _ = 3,
            v = !1,
            y = !1,
            m = !1,
            d = "function" == typeof setTimeout ? setTimeout : null,
            k = "function" == typeof clearTimeout ? clearTimeout : null,
            w = "u" > typeof setImmediate ? setImmediate : null;

        function x(e) {
            for (var n = a(c); null !== n;) {
                if (null === n.callback) r(c);
                else if (n.startTime <= e) r(c), n.sortIndex = n.expirationTime, t(f, n);
                else break;
                n = a(c)
            }
        }

        function h(e) {
            if (m = !1, x(e), !y)
                if (null !== a(f)) y = !0, W();
                else {
                    var n = a(c);
                    null !== n && j(h, n.startTime - e)
                }
        }
        var g = !1,
            T = -1,
            I = 5,
            P = -1;

        function C() {
            return !(n.unstable_now() - P < I)
        }

        function L() {
            if (g) {
                var e = n.unstable_now();
                P = e;
                var t = !0;
                try {
                    e: {
                        y = !1,
                        m && (m = !1, k(T), T = -1),
                        v = !0;
                        var l = _;
                        try {
                            n: {
                                for (x(e), p = a(f); null !== p && !(p.expirationTime > e && C());) {
                                    var o = p.callback;
                                    if ("function" == typeof o) {
                                        p.callback = null, _ = p.priorityLevel;
                                        var u = o(p.expirationTime <= e);
                                        if (e = n.unstable_now(), "function" == typeof u) {
                                            p.callback = u, x(e), t = !0;
                                            break n
                                        }
                                        p === a(f) && r(f), x(e)
                                    } else r(f);
                                    p = a(f)
                                }
                                if (null !== p) t = !0;
                                else {
                                    var s = a(c);
                                    null !== s && j(h, s.startTime - e), t = !1
                                }
                            }
                            break e
                        }
                        finally {
                            p = null, _ = l, v = !1
                        }
                    }
                }
                finally {
                    t ? i() : g = !1
                }
            }
        }
        if ("function" == typeof w) i = function() {
            w(L)
        };
        else if ("u" > typeof MessageChannel) {
            var M = new MessageChannel,
                F = M.port2;
            M.port1.onmessage = L, i = function() {
                F.postMessage(null)
            }
        } else i = function() {
            d(L, 0)
        };

        function W() {
            g || (g = !0, i())
        }

        function j(e, t) {
            T = d(function() {
                e(n.unstable_now())
            }, t)
        }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(e) {
            e.callback = null
        }, n.unstable_continueExecution = function() {
            y || v || (y = !0, W())
        }, n.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < e ? Math.floor(1e3 / e) : 5
        }, n.unstable_getCurrentPriorityLevel = function() {
            return _
        }, n.unstable_getFirstCallbackNode = function() {
            return a(f)
        }, n.unstable_next = function(e) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default:
                    n = _
            }
            var t = _;
            _ = n;
            try {
                return e()
            } finally {
                _ = t
            }
        }, n.unstable_pauseExecution = function() {}, n.unstable_requestPaint = function() {}, n.unstable_runWithPriority = function(e, n) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var t = _;
            _ = e;
            try {
                return n()
            } finally {
                _ = t
            }
        }, n.unstable_scheduleCallback = function(e, r, l) {
            var i = n.unstable_now();
            switch (l = "object" == typeof l && null !== l && "number" == typeof(l = l.delay) && 0 < l ? i + l : i, e) {
                case 1:
                    var o = -1;
                    break;
                case 2:
                    o = 250;
                    break;
                case 5:
                    o = 0x3fffffff;
                    break;
                case 4:
                    o = 1e4;
                    break;
                default:
                    o = 5e3
            }
            return o = l + o, e = {
                id: b++,
                callback: r,
                priorityLevel: e,
                startTime: l,
                expirationTime: o,
                sortIndex: -1
            }, l > i ? (e.sortIndex = l, t(c, e), null === a(f) && e === a(c) && (m ? (k(T), T = -1) : m = !0, j(h, l - i))) : (e.sortIndex = o, t(f, e), y || v || (y = !0, W())), e
        }, n.unstable_shouldYield = C, n.unstable_wrapCallback = function(e) {
            var n = _;
            return function() {
                var t = _;
                _ = n;
                try {
                    return e.apply(this, arguments)
                } finally {
                    _ = t
                }
            }
        }
    }),
    i8Tz: (function(e, n, t) {
        e.exports = t("x9vW")
    })
};