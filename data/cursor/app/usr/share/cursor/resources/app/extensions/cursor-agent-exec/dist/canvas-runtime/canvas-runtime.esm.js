/*! For license information please see canvas-runtime.esm.js.LICENSE.txt */
var __create = Object.create,
    __defProp = Object.defineProperty,
    __getOwnPropDesc = Object.getOwnPropertyDescriptor,
    __getOwnPropNames = Object.getOwnPropertyNames,
    __getProtoOf = Object.getPrototypeOf,
    __hasOwnProp = Object.prototype.hasOwnProperty,
    __commonJS = (e, t) => function() {
        return t || (0, e[__getOwnPropNames(e)[0]])((t = {
            exports: {}
        }).exports, t), t.exports
    },
    __export = (e, t) => {
        for (var n in t) __defProp(e, n, {
            get: t[n],
            enumerable: !0
        })
    },
    __copyProps = (e, t, n, r) => {
        if (t && "object" == typeof t || "function" == typeof t)
            for (let l of __getOwnPropNames(t)) __hasOwnProp.call(e, l) || l === n || __defProp(e, l, {
                get: () => t[l],
                enumerable: !(r = __getOwnPropDesc(t, l)) || r.enumerable
            });
        return e
    },
    __toESM = (e, t, n) => (n = null != e ? __create(__getProtoOf(e)) : {}, __copyProps(!t && e && e.__esModule ? n : __defProp(n, "default", {
        value: e,
        enumerable: !0
    }), e)),
    require_react_jsx_runtime_production = __commonJS({
        "../../node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react-jsx-runtime.production.js"(e) {
            "use strict";
            var t = Symbol.for("react.transitional.element"),
                n = Symbol.for("react.fragment");

            function r(e, n, r) {
                var l = null;
                if (void 0 !== r && (l = "" + r), void 0 !== n.key && (l = "" + n.key), "key" in n)
                    for (var a in r = {}, n) "key" !== a && (r[a] = n[a]);
                else r = n;
                return n = r.ref, {
                    $$typeof: t,
                    type: e,
                    key: l,
                    ref: void 0 !== n ? n : null,
                    props: r
                }
            }
            e.Fragment = n, e.jsx = r, e.jsxs = r
        }
    }),
    require_jsx_runtime = __commonJS({
        "../../node_modules/.pnpm/react@19.2.4/node_modules/react/jsx-runtime.js"(e, t) {
            "use strict";
            t.exports = require_react_jsx_runtime_production()
        }
    }),
    require_react_production = __commonJS({
        "../../node_modules/.pnpm/react@19.2.4/node_modules/react/cjs/react.production.js"(e) {
            "use strict";
            var t = Symbol.for("react.transitional.element"),
                n = Symbol.for("react.portal"),
                r = Symbol.for("react.fragment"),
                l = Symbol.for("react.strict_mode"),
                a = Symbol.for("react.profiler"),
                o = Symbol.for("react.consumer"),
                i = Symbol.for("react.context"),
                u = Symbol.for("react.forward_ref"),
                s = Symbol.for("react.suspense"),
                c = Symbol.for("react.memo"),
                f = Symbol.for("react.lazy"),
                d = Symbol.for("react.activity"),
                p = Symbol.iterator,
                m = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                h = Object.assign,
                g = {};

            function y(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || m
            }

            function v() {}

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || m
            }
            y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, y.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, v.prototype = y.prototype;
            var k = b.prototype = new v;
            k.constructor = b, h(k, y.prototype), k.isPureReactComponent = !0;
            var S = Array.isArray;

            function w() {}
            var x = {
                    H: null,
                    A: null,
                    T: null,
                    S: null
                },
                _ = Object.prototype.hasOwnProperty;

            function E(e, n, r) {
                var l = r.ref;
                return {
                    $$typeof: t,
                    type: e,
                    key: n,
                    ref: void 0 !== l ? l : null,
                    props: r
                }
            }

            function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === t
            }
            var P = /\/+/g;

            function T(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = {
                    "=": "=0",
                    ":": "=2"
                }, "$" + n.replace(/[=:]/g, function(e) {
                    return r[e]
                })) : t.toString(36);
                var n, r
            }

            function z(e, r, l, a, o) {
                var i = typeof e;
                "undefined" !== i && "boolean" !== i || (e = null);
                var u, s, c = !1;
                if (null === e) c = !0;
                else switch (i) {
                    case "bigint":
                    case "string":
                    case "number":
                        c = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case t:
                            case n:
                                c = !0;
                                break;
                            case f:
                                return z((c = e._init)(e._payload), r, l, a, o)
                        }
                }
                if (c) return o = o(e), c = "" === a ? "." + T(e, 0) : a, S(o) ? (l = "", null != c && (l = c.replace(P, "$&/") + "/"), z(o, r, l, "", function(e) {
                    return e
                })) : null != o && (C(o) && (u = o, s = l + (null == o.key || e && e.key === o.key ? "" : ("" + o.key).replace(P, "$&/") + "/") + c, o = E(u.type, s, u.props)), r.push(o)), 1;
                c = 0;
                var d, m = "" === a ? "." : a + ":";
                if (S(e))
                    for (var h = 0; h < e.length; h++) c += z(a = e[h], r, l, i = m + T(a, h), o);
                else if ("function" == typeof(h = null === (d = e) || "object" != typeof d ? null : "function" == typeof(d = p && d[p] || d["@@iterator"]) ? d : null))
                    for (e = h.call(e), h = 0; !(a = e.next()).done;) c += z(a = a.value, r, l, i = m + T(a, h++), o);
                else if ("object" === i) {
                    if ("function" == typeof e.then) return z(function(e) {
                        switch (e.status) {
                            case "fulfilled":
                                return e.value;
                            case "rejected":
                                throw e.reason;
                            default:
                                switch ("string" == typeof e.status ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
                                        "pending" === e.status && (e.status = "fulfilled", e.value = t)
                                    }, function(t) {
                                        "pending" === e.status && (e.status = "rejected", e.reason = t)
                                    })), e.status) {
                                    case "fulfilled":
                                        return e.value;
                                    case "rejected":
                                        throw e.reason
                                }
                        }
                        throw e
                    }(e), r, l, a, o);
                    throw r = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.")
                }
                return c
            }

            function N(e, t, n) {
                if (null == e) return e;
                var r = [],
                    l = 0;
                return z(e, r, "", "", function(e) {
                    return t.call(n, e, l++)
                }), r
            }

            function L(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then(function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }, function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    }), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }
            var A = "function" == typeof reportError ? reportError : function(e) {
                    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                        var t = new window.ErrorEvent("error", {
                            bubbles: !0,
                            cancelable: !0,
                            message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                            error: e
                        });
                        if (!window.dispatchEvent(t)) return
                    } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
                    console.error(e)
                },
                O = {
                    map: N,
                    forEach: function(e, t, n) {
                        N(e, function() {
                            t.apply(this, arguments)
                        }, n)
                    },
                    count: function(e) {
                        var t = 0;
                        return N(e, function() {
                            t++
                        }), t
                    },
                    toArray: function(e) {
                        return N(e, function(e) {
                            return e
                        }) || []
                    },
                    only: function(e) {
                        if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                };
            e.Activity = d, e.Children = O, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = b, e.StrictMode = l, e.Suspense = s, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x, e.__COMPILER_RUNTIME = {
                __proto__: null,
                c: function(e) {
                    return x.H.useMemoCache(e)
                }
            }, e.cache = function(e) {
                return function() {
                    return e.apply(null, arguments)
                }
            }, e.cacheSignal = function() {
                return null
            }, e.cloneElement = function(e, t, n) {
                if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
                var r = h({}, e.props),
                    l = e.key;
                if (null != t)
                    for (a in void 0 !== t.key && (l = "" + t.key), t) !_.call(t, a) || "key" === a || "__self" === a || "__source" === a || "ref" === a && void 0 === t.ref || (r[a] = t[a]);
                var a = arguments.length - 2;
                if (1 === a) r.children = n;
                else if (1 < a) {
                    for (var o = Array(a), i = 0; i < a; i++) o[i] = arguments[i + 2];
                    r.children = o
                }
                return E(e.type, l, r)
            }, e.createContext = function(e) {
                return (e = {
                    $$typeof: i,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = e, e.Consumer = {
                    $$typeof: o,
                    _context: e
                }, e
            }, e.createElement = function(e, t, n) {
                var r, l = {},
                    a = null;
                if (null != t)
                    for (r in void 0 !== t.key && (a = "" + t.key), t) _.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (l[r] = t[r]);
                var o = arguments.length - 2;
                if (1 === o) l.children = n;
                else if (1 < o) {
                    for (var i = Array(o), u = 0; u < o; u++) i[u] = arguments[u + 2];
                    l.children = i
                }
                if (e && e.defaultProps)
                    for (r in o = e.defaultProps) void 0 === l[r] && (l[r] = o[r]);
                return E(e, a, l)
            }, e.createRef = function() {
                return {
                    current: null
                }
            }, e.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }, e.isValidElement = C, e.lazy = function(e) {
                return {
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: L
                }
            }, e.memo = function(e, t) {
                return {
                    $$typeof: c,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, e.startTransition = function(e) {
                var t = x.T,
                    n = {};
                x.T = n;
                try {
                    var r = e(),
                        l = x.S;
                    null !== l && l(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(w, A)
                } catch (e) {
                    A(e)
                } finally {
                    null !== t && null !== n.types && (t.types = n.types), x.T = t
                }
            }, e.unstable_useCacheRefresh = function() {
                return x.H.useCacheRefresh()
            }, e.use = function(e) {
                return x.H.use(e)
            }, e.useActionState = function(e, t, n) {
                return x.H.useActionState(e, t, n)
            }, e.useCallback = function(e, t) {
                return x.H.useCallback(e, t)
            }, e.useContext = function(e) {
                return x.H.useContext(e)
            }, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
                return x.H.useDeferredValue(e, t)
            }, e.useEffect = function(e, t) {
                return x.H.useEffect(e, t)
            }, e.useEffectEvent = function(e) {
                return x.H.useEffectEvent(e)
            }, e.useId = function() {
                return x.H.useId()
            }, e.useImperativeHandle = function(e, t, n) {
                return x.H.useImperativeHandle(e, t, n)
            }, e.useInsertionEffect = function(e, t) {
                return x.H.useInsertionEffect(e, t)
            }, e.useLayoutEffect = function(e, t) {
                return x.H.useLayoutEffect(e, t)
            }, e.useMemo = function(e, t) {
                return x.H.useMemo(e, t)
            }, e.useOptimistic = function(e, t) {
                return x.H.useOptimistic(e, t)
            }, e.useReducer = function(e, t, n) {
                return x.H.useReducer(e, t, n)
            }, e.useRef = function(e) {
                return x.H.useRef(e)
            }, e.useState = function(e) {
                return x.H.useState(e)
            }, e.useSyncExternalStore = function(e, t, n) {
                return x.H.useSyncExternalStore(e, t, n)
            }, e.useTransition = function() {
                return x.H.useTransition()
            }, e.version = "19.2.4"
        }
    }),
    require_react = __commonJS({
        "../../node_modules/.pnpm/react@19.2.4/node_modules/react/index.js"(e, t) {
            "use strict";
            t.exports = require_react_production()
        }
    }),
    require_scheduler_production = __commonJS({
        "../../node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.production.js"(e) {
            "use strict";

            function t(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n;) {
                    var r = n - 1 >>> 1,
                        a = e[r];
                    if (!(0 < l(a, t))) break e;
                    e[r] = t, e[n] = a, n = r
                }
            }

            function n(e) {
                return 0 === e.length ? null : e[0]
            }

            function r(e) {
                if (0 === e.length) return null;
                var t = e[0],
                    n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                        var i = 2 * (r + 1) - 1,
                            u = e[i],
                            s = i + 1,
                            c = e[s];
                        if (0 > l(u, n)) s < a && 0 > l(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                        else {
                            if (!(s < a && 0 > l(c, n))) break e;
                            e[r] = c, e[s] = n, r = s
                        }
                    }
                }
                return t
            }

            function l(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            var a, o, i;
            e.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now ? (a = performance, e.unstable_now = function() {
                return a.now()
            }) : (o = Date, i = o.now(), e.unstable_now = function() {
                return o.now() - i
            });
            var u = [],
                s = [],
                c = 1,
                f = null,
                d = 3,
                p = !1,
                m = !1,
                h = !1,
                g = !1,
                y = "function" == typeof setTimeout ? setTimeout : null,
                v = "function" == typeof clearTimeout ? clearTimeout : null,
                b = "undefined" != typeof setImmediate ? setImmediate : null;

            function k(e) {
                for (var l = n(s); null !== l;) {
                    if (null === l.callback) r(s);
                    else {
                        if (!(l.startTime <= e)) break;
                        r(s), l.sortIndex = l.expirationTime, t(u, l)
                    }
                    l = n(s)
                }
            }

            function S(e) {
                if (h = !1, k(e), !m)
                    if (null !== n(u)) m = !0, E || (E = !0, w());
                    else {
                        var t = n(s);
                        null !== t && L(S, t.startTime - e)
                    }
            }
            var w, x, _, E = !1,
                C = -1,
                P = 5,
                T = -1;

            function z() {
                return !(!g && e.unstable_now() - T < P)
            }

            function N() {
                if (g = !1, E) {
                    var t = e.unstable_now();
                    T = t;
                    var l = !0;
                    try {
                        e: {
                            m = !1,
                            h && (h = !1, v(C), C = -1),
                            p = !0;
                            var a = d;
                            try {
                                t: {
                                    for (k(t), f = n(u); null !== f && !(f.expirationTime > t && z());) {
                                        var o = f.callback;
                                        if ("function" == typeof o) {
                                            f.callback = null, d = f.priorityLevel;
                                            var i = o(f.expirationTime <= t);
                                            if (t = e.unstable_now(), "function" == typeof i) {
                                                f.callback = i, k(t), l = !0;
                                                break t
                                            }
                                            f === n(u) && r(u), k(t)
                                        } else r(u);
                                        f = n(u)
                                    }
                                    if (null !== f) l = !0;
                                    else {
                                        var c = n(s);
                                        null !== c && L(S, c.startTime - t), l = !1
                                    }
                                }
                                break e
                            }
                            finally {
                                f = null, d = a, p = !1
                            }
                            l = void 0
                        }
                    }
                    finally {
                        l ? w() : E = !1
                    }
                }
            }

            function L(t, n) {
                C = y(function() {
                    t(e.unstable_now())
                }, n)
            }
            "function" == typeof b ? w = function() {
                b(N)
            } : "undefined" != typeof MessageChannel ? (x = new MessageChannel, _ = x.port2, x.port1.onmessage = N, w = function() {
                _.postMessage(null)
            }) : w = function() {
                y(N, 0)
            }, e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
                e.callback = null
            }, e.unstable_forceFrameRate = function(e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5
            }, e.unstable_getCurrentPriorityLevel = function() {
                return d
            }, e.unstable_next = function(e) {
                switch (d) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = d
                }
                var n = d;
                d = t;
                try {
                    return e()
                } finally {
                    d = n
                }
            }, e.unstable_requestPaint = function() {
                g = !0
            }, e.unstable_runWithPriority = function(e, t) {
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
                var n = d;
                d = e;
                try {
                    return t()
                } finally {
                    d = n
                }
            }, e.unstable_scheduleCallback = function(r, l, a) {
                var o = e.unstable_now();
                switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, r) {
                    case 1:
                        var i = -1;
                        break;
                    case 2:
                        i = 250;
                        break;
                    case 5:
                        i = 1073741823;
                        break;
                    case 4:
                        i = 1e4;
                        break;
                    default:
                        i = 5e3
                }
                return r = {
                    id: c++,
                    callback: l,
                    priorityLevel: r,
                    startTime: a,
                    expirationTime: i = a + i,
                    sortIndex: -1
                }, a > o ? (r.sortIndex = a, t(s, r), null === n(u) && r === n(s) && (h ? (v(C), C = -1) : h = !0, L(S, a - o))) : (r.sortIndex = i, t(u, r), m || p || (m = !0, E || (E = !0, w()))), r
            }, e.unstable_shouldYield = z, e.unstable_wrapCallback = function(e) {
                var t = d;
                return function() {
                    var n = d;
                    d = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        d = n
                    }
                }
            }
        }
    }),
    require_scheduler = __commonJS({
        "../../node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/index.js"(e, t) {
            "use strict";
            t.exports = require_scheduler_production()
        }
    }),
    require_react_dom_production = __commonJS({
        "../../node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom.production.js"(e) {
            "use strict";
            var t = require_react();

            function n(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            function r() {}
            var l = {
                    d: {
                        f: r,
                        r: function() {
                            throw Error(n(522))
                        },
                        D: r,
                        C: r,
                        L: r,
                        m: r,
                        X: r,
                        S: r,
                        M: r
                    },
                    p: 0,
                    findDOMNode: null
                },
                a = Symbol.for("react.portal"),
                o = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

            function i(e, t) {
                return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
            }
            e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l, e.createPortal = function(e, t) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType) throw Error(n(299));
                return function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: a,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, r)
            }, e.flushSync = function(e) {
                var t = o.T,
                    n = l.p;
                try {
                    if (o.T = null, l.p = 2, e) return e()
                } finally {
                    o.T = t, l.p = n, l.d.f()
                }
            }, e.preconnect = function(e, t) {
                "string" == typeof e && (t = t ? "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : null, l.d.C(e, t))
            }, e.prefetchDNS = function(e) {
                "string" == typeof e && l.d.D(e)
            }, e.preinit = function(e, t) {
                if ("string" == typeof e && t && "string" == typeof t.as) {
                    var n = t.as,
                        r = i(n, t.crossOrigin),
                        a = "string" == typeof t.integrity ? t.integrity : void 0,
                        o = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
                    "style" === n ? l.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                        crossOrigin: r,
                        integrity: a,
                        fetchPriority: o
                    }) : "script" === n && l.d.X(e, {
                        crossOrigin: r,
                        integrity: a,
                        fetchPriority: o,
                        nonce: "string" == typeof t.nonce ? t.nonce : void 0
                    })
                }
            }, e.preinitModule = function(e, t) {
                if ("string" == typeof e)
                    if ("object" == typeof t && null !== t) {
                        if (null == t.as || "script" === t.as) {
                            var n = i(t.as, t.crossOrigin);
                            l.d.M(e, {
                                crossOrigin: n,
                                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                                nonce: "string" == typeof t.nonce ? t.nonce : void 0
                            })
                        }
                    } else null == t && l.d.M(e)
            }, e.preload = function(e, t) {
                if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
                    var n = t.as,
                        r = i(n, t.crossOrigin);
                    l.d.L(e, n, {
                        crossOrigin: r,
                        integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                        nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                        type: "string" == typeof t.type ? t.type : void 0,
                        fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                        referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                        imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                        imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                        media: "string" == typeof t.media ? t.media : void 0
                    })
                }
            }, e.preloadModule = function(e, t) {
                if ("string" == typeof e)
                    if (t) {
                        var n = i(t.as, t.crossOrigin);
                        l.d.m(e, {
                            as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                            crossOrigin: n,
                            integrity: "string" == typeof t.integrity ? t.integrity : void 0
                        })
                    } else l.d.m(e)
            }, e.requestFormReset = function(e) {
                l.d.r(e)
            }, e.unstable_batchedUpdates = function(e, t) {
                return e(t)
            }, e.useFormState = function(e, t, n) {
                return o.H.useFormState(e, t, n)
            }, e.useFormStatus = function() {
                return o.H.useHostTransitionStatus()
            }, e.version = "19.2.4"
        }
    }),
    require_react_dom = __commonJS({
        "../../node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/index.js"(e, t) {
            "use strict";
            ! function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }(), t.exports = require_react_dom_production()
        }
    }),
    require_react_dom_client_production = __commonJS({
        "../../node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/cjs/react-dom-client.production.js"(e) {
            "use strict";
            var t = require_scheduler(),
                n = require_react(),
                r = require_react_dom();

            function l(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            function a(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function o(e) {
                var t = e,
                    n = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do {
                        !!(4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function i(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
                }
                return null
            }

            function u(e) {
                if (31 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated
                }
                return null
            }

            function s(e) {
                if (o(e) !== e) throw Error(l(188))
            }

            function c(e) {
                var t = e.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t) return e;
                for (e = e.child; null !== e;) {
                    if (null !== (t = c(e))) return t;
                    e = e.sibling
                }
                return null
            }
            var f = Object.assign,
                d = Symbol.for("react.element"),
                p = Symbol.for("react.transitional.element"),
                m = Symbol.for("react.portal"),
                h = Symbol.for("react.fragment"),
                g = Symbol.for("react.strict_mode"),
                y = Symbol.for("react.profiler"),
                v = Symbol.for("react.consumer"),
                b = Symbol.for("react.context"),
                k = Symbol.for("react.forward_ref"),
                S = Symbol.for("react.suspense"),
                w = Symbol.for("react.suspense_list"),
                x = Symbol.for("react.memo"),
                _ = Symbol.for("react.lazy");
            Symbol.for("react.scope");
            var E = Symbol.for("react.activity");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
            var C = Symbol.for("react.memo_cache_sentinel");
            Symbol.for("react.view_transition");
            var P = Symbol.iterator;

            function T(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof(e = P && e[P] || e["@@iterator"]) ? e : null
            }
            var z = Symbol.for("react.client.reference");

            function N(e) {
                if (null == e) return null;
                if ("function" == typeof e) return e.$$typeof === z ? null : e.displayName || e.name || null;
                if ("string" == typeof e) return e;
                switch (e) {
                    case h:
                        return "Fragment";
                    case y:
                        return "Profiler";
                    case g:
                        return "StrictMode";
                    case S:
                        return "Suspense";
                    case w:
                        return "SuspenseList";
                    case E:
                        return "Activity"
                }
                if ("object" == typeof e) switch (e.$$typeof) {
                    case m:
                        return "Portal";
                    case b:
                        return e.displayName || "Context";
                    case v:
                        return (e._context.displayName || "Context") + ".Consumer";
                    case k:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case x:
                        return null !== (t = e.displayName || null) ? t : N(e.type) || "Memo";
                    case _:
                        t = e._payload, e = e._init;
                        try {
                            return N(e(t))
                        } catch (e) {}
                }
                return null
            }
            var L = Array.isArray,
                A = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                j = {
                    pending: !1,
                    data: null,
                    method: null,
                    action: null
                },
                R = [],
                M = -1;

            function F(e) {
                return {
                    current: e
                }
            }

            function D(e) {
                0 > M || (e.current = R[M], R[M] = null, M--)
            }

            function $(e, t) {
                M++, R[M] = e.current, e.current = t
            }
            var I, H, U = F(null),
                B = F(null),
                V = F(null),
                W = F(null);

            function q(e, t) {
                switch ($(V, t), $(B, e), $(U, null), t.nodeType) {
                    case 9:
                    case 11:
                        e = (e = t.documentElement) && (e = e.namespaceURI) ? gf(e) : 0;
                        break;
                    default:
                        if (e = t.tagName, t = t.namespaceURI) e = yf(t = gf(t), e);
                        else switch (e) {
                            case "svg":
                                e = 1;
                                break;
                            case "math":
                                e = 2;
                                break;
                            default:
                                e = 0
                        }
                }
                D(U), $(U, e)
            }

            function Q() {
                D(U), D(B), D(V)
            }

            function K(e) {
                null !== e.memoizedState && $(W, e);
                var t = U.current,
                    n = yf(t, e.type);
                t !== n && ($(B, e), $(U, n))
            }

            function G(e) {
                B.current === e && (D(U), D(B)), W.current === e && (D(W), sd._currentValue = j)
            }

            function Y(e) {
                if (void 0 === I) try {
                    throw Error()
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    I = t && t[1] || "", H = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
                }
                return "\n" + I + e + H
            }
            var X = !1;

            function Z(e, t) {
                if (!e || X) return "";
                X = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    var r = {
                        DetermineComponentFrameRoot: function() {
                            try {
                                if (t) {
                                    var n = function() {
                                        throw Error()
                                    };
                                    if (Object.defineProperty(n.prototype, "props", {
                                            set: function() {
                                                throw Error()
                                            }
                                        }), "object" == typeof Reflect && Reflect.construct) {
                                        try {
                                            Reflect.construct(n, [])
                                        } catch (e) {
                                            var r = e
                                        }
                                        Reflect.construct(e, [], n)
                                    } else {
                                        try {
                                            n.call()
                                        } catch (e) {
                                            r = e
                                        }
                                        e.call(n.prototype)
                                    }
                                } else {
                                    try {
                                        throw Error()
                                    } catch (e) {
                                        r = e
                                    }(n = e()) && "function" == typeof n.catch && n.catch(function() {})
                                }
                            } catch (e) {
                                if (e && r && "string" == typeof e.stack) return [e.stack, r.stack]
                            }
                            return [null, null]
                        }
                    };
                    r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                    var l = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
                    l && l.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                        value: "DetermineComponentFrameRoot"
                    });
                    var a = r.DetermineComponentFrameRoot(),
                        o = a[0],
                        i = a[1];
                    if (o && i) {
                        var u = o.split("\n"),
                            s = i.split("\n");
                        for (l = r = 0; r < u.length && !u[r].includes("DetermineComponentFrameRoot");) r++;
                        for (; l < s.length && !s[l].includes("DetermineComponentFrameRoot");) l++;
                        if (r === u.length || l === s.length)
                            for (r = u.length - 1, l = s.length - 1; 1 <= r && 0 <= l && u[r] !== s[l];) l--;
                        for (; 1 <= r && 0 <= l; r--, l--)
                            if (u[r] !== s[l]) {
                                if (1 !== r || 1 !== l)
                                    do {
                                        if (r--, 0 > --l || u[r] !== s[l]) {
                                            var c = "\n" + u[r].replace(" at new ", " at ");
                                            return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                        }
                                    } while (1 <= r && 0 <= l);
                                break
                            }
                    }
                } finally {
                    X = !1, Error.prepareStackTrace = n
                }
                return (n = e ? e.displayName || e.name : "") ? Y(n) : ""
            }

            function J(e, t) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        return Y(e.type);
                    case 16:
                        return Y("Lazy");
                    case 13:
                        return e.child !== t && null !== t ? Y("Suspense Fallback") : Y("Suspense");
                    case 19:
                        return Y("SuspenseList");
                    case 0:
                    case 15:
                        return Z(e.type, !1);
                    case 11:
                        return Z(e.type.render, !1);
                    case 1:
                        return Z(e.type, !0);
                    case 31:
                        return Y("Activity");
                    default:
                        return ""
                }
            }

            function ee(e) {
                try {
                    var t = "",
                        n = null;
                    do {
                        t += J(e, n), n = e, e = e.return
                    } while (e);
                    return t
                } catch (e) {
                    return "\nError generating stack: " + e.message + "\n" + e.stack
                }
            }
            var te = Object.prototype.hasOwnProperty,
                ne = t.unstable_scheduleCallback,
                re = t.unstable_cancelCallback,
                le = t.unstable_shouldYield,
                ae = t.unstable_requestPaint,
                oe = t.unstable_now,
                ie = t.unstable_getCurrentPriorityLevel,
                ue = t.unstable_ImmediatePriority,
                se = t.unstable_UserBlockingPriority,
                ce = t.unstable_NormalPriority,
                fe = t.unstable_LowPriority,
                de = t.unstable_IdlePriority,
                pe = t.log,
                me = t.unstable_setDisableYieldValue,
                he = null,
                ge = null;

            function ye(e) {
                if ("function" == typeof pe && me(e), ge && "function" == typeof ge.setStrictMode) try {
                    ge.setStrictMode(he, e)
                } catch (e) {}
            }
            var ve = Math.clz32 ? Math.clz32 : function(e) {
                    return 0 == (e >>>= 0) ? 32 : 31 - (be(e) / ke | 0) | 0
                },
                be = Math.log,
                ke = Math.LN2,
                Se = 256,
                we = 262144,
                xe = 4194304;

            function _e(e) {
                var t = 42 & e;
                if (0 !== t) return t;
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                        return 64;
                    case 128:
                        return 128;
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                        return 261888 & e;
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 3932160 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                        return 62914560 & e;
                    case 67108864:
                        return 67108864;
                    case 134217728:
                        return 134217728;
                    case 268435456:
                        return 268435456;
                    case 536870912:
                        return 536870912;
                    case 1073741824:
                        return 0;
                    default:
                        return e
                }
            }

            function Ee(e, t, n) {
                var r = e.pendingLanes;
                if (0 === r) return 0;
                var l = 0,
                    a = e.suspendedLanes,
                    o = e.pingedLanes;
                e = e.warmLanes;
                var i = 134217727 & r;
                return 0 !== i ? 0 !== (r = i & ~a) ? l = _e(r) : 0 !== (o &= i) ? l = _e(o) : n || 0 !== (n = i & ~e) && (l = _e(n)) : 0 !== (i = r & ~a) ? l = _e(i) : 0 !== o ? l = _e(o) : n || 0 !== (n = r & ~e) && (l = _e(n)), 0 === l ? 0 : 0 !== t && t !== l && 0 === (t & a) && ((a = l & -l) >= (n = t & -t) || 32 === a && 4194048 & n) ? t : l
            }

            function Ce(e, t) {
                return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
            }

            function Pe(e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 4:
                    case 8:
                    case 64:
                        return t + 250;
                    case 16:
                    case 32:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return t + 5e3;
                    default:
                        return -1
                }
            }

            function Te() {
                var e = xe;
                return !(62914560 & (xe <<= 1)) && (xe = 4194304), e
            }

            function ze(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function Ne(e, t) {
                e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
            }

            function Le(e, t, n) {
                e.pendingLanes |= t, e.suspendedLanes &= ~t;
                var r = 31 - ve(t);
                e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 261930 & n
            }

            function Ae(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - ve(n),
                        l = 1 << r;
                    l & t | e[r] & t && (e[r] |= t), n &= ~l
                }
            }

            function Oe(e, t) {
                var n = t & -t;
                return 0 !== ((n = 42 & n ? 1 : je(n)) & (e.suspendedLanes | t)) ? 0 : n
            }

            function je(e) {
                switch (e) {
                    case 2:
                        e = 1;
                        break;
                    case 8:
                        e = 4;
                        break;
                    case 32:
                        e = 16;
                        break;
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                        e = 128;
                        break;
                    case 268435456:
                        e = 134217728;
                        break;
                    default:
                        e = 0
                }
                return e
            }

            function Re(e) {
                return 2 < (e &= -e) ? 8 < e ? 134217727 & e ? 32 : 268435456 : 8 : 2
            }

            function Me() {
                var e = O.p;
                return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Ed(e.type)
            }

            function Fe(e, t) {
                var n = O.p;
                try {
                    return O.p = e, t()
                } finally {
                    O.p = n
                }
            }
            var De = Math.random().toString(36).slice(2),
                $e = "__reactFiber$" + De,
                Ie = "__reactProps$" + De,
                He = "__reactContainer$" + De,
                Ue = "__reactEvents$" + De,
                Be = "__reactListeners$" + De,
                Ve = "__reactHandles$" + De,
                We = "__reactResources$" + De,
                qe = "__reactMarker$" + De;

            function Qe(e) {
                delete e[$e], delete e[Ie], delete e[Ue], delete e[Be], delete e[Ve]
            }

            function Ke(e) {
                var t = e[$e];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[He] || n[$e]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                            for (e = Rf(e); null !== e;) {
                                if (n = e[$e]) return n;
                                e = Rf(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function Ge(e) {
                if (e = e[$e] || e[He]) {
                    var t = e.tag;
                    if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t) return e
                }
                return null
            }

            function Ye(e) {
                var t = e.tag;
                if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
                throw Error(l(33))
            }

            function Xe(e) {
                var t = e[We];
                return t || (t = e[We] = {
                    hoistableStyles: new Map,
                    hoistableScripts: new Map
                }), t
            }

            function Ze(e) {
                e[qe] = !0
            }
            var Je = new Set,
                et = {};

            function tt(e, t) {
                nt(e, t), nt(e + "Capture", t)
            }

            function nt(e, t) {
                for (et[e] = t, e = 0; e < t.length; e++) Je.add(t[e])
            }
            var rt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
                lt = {},
                at = {};

            function ot(e, t, n) {
                if (l = t, te.call(at, l) || !te.call(lt, l) && (rt.test(l) ? at[l] = !0 : (lt[l] = !0, 0)))
                    if (null === n) e.removeAttribute(t);
                    else {
                        switch (typeof n) {
                            case "undefined":
                            case "function":
                            case "symbol":
                                return void e.removeAttribute(t);
                            case "boolean":
                                var r = t.toLowerCase().slice(0, 5);
                                if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t)
                        }
                        e.setAttribute(t, "" + n)
                    } var l
            }

            function it(e, t, n) {
                if (null === n) e.removeAttribute(t);
                else {
                    switch (typeof n) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                            return void e.removeAttribute(t)
                    }
                    e.setAttribute(t, "" + n)
                }
            }

            function ut(e, t, n, r) {
                if (null === r) e.removeAttribute(n);
                else {
                    switch (typeof r) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                            return void e.removeAttribute(n)
                    }
                    e.setAttributeNS(t, n, "" + r)
                }
            }

            function st(e) {
                switch (typeof e) {
                    case "bigint":
                    case "boolean":
                    case "number":
                    case "string":
                    case "undefined":
                    case "object":
                        return e;
                    default:
                        return ""
                }
            }

            function ct(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function ft(e) {
                if (!e._valueTracker) {
                    var t = ct(e) ? "checked" : "value";
                    e._valueTracker = function(e, t, n) {
                        var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
                        if (!e.hasOwnProperty(t) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
                            var l = r.get,
                                a = r.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return l.call(this)
                                },
                                set: function(e) {
                                    n = "" + e, a.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: r.enumerable
                            }), {
                                getValue: function() {
                                    return n
                                },
                                setValue: function(e) {
                                    n = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e, t, "" + e[t])
                }
            }

            function dt(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = ct(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function pt(e) {
                if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            var mt = /[\n"\\]/g;

            function ht(e) {
                return e.replace(mt, function(e) {
                    return "\\" + e.charCodeAt(0).toString(16) + " "
                })
            }

            function gt(e, t, n, r, l, a, o, i) {
                e.name = "", null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + st(t)) : e.value !== "" + st(t) && (e.value = "" + st(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? vt(e, o, st(t)) : null != n ? vt(e, o, st(n)) : null != r && e.removeAttribute("value"), null == l && null != a && (e.defaultChecked = !!a), null != l && (e.checked = l && "function" != typeof l && "symbol" != typeof l), null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i ? e.name = "" + st(i) : e.removeAttribute("name")
            }

            function yt(e, t, n, r, l, a, o, i) {
                if (null != a && "function" != typeof a && "symbol" != typeof a && "boolean" != typeof a && (e.type = a), null != t || null != n) {
                    if (("submit" === a || "reset" === a) && null == t) return void ft(e);
                    n = null != n ? "" + st(n) : "", t = null != t ? "" + st(t) : n, i || t === e.value || (e.value = t), e.defaultValue = t
                }
                r = "function" != typeof(r = null != r ? r : l) && "symbol" != typeof r && !!r, e.checked = i ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.name = o), ft(e)
            }

            function vt(e, t, n) {
                "number" === t && pt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
            }

            function bt(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
                    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + st(n), t = null, l = 0; l < e.length; l++) {
                        if (e[l].value === n) return e[l].selected = !0, void(r && (e[l].defaultSelected = !0));
                        null !== t || e[l].disabled || (t = e[l])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function kt(e, t, n) {
                null == t || ((t = "" + st(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + st(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
            }

            function St(e, t, n, r) {
                if (null == t) {
                    if (null != r) {
                        if (null != n) throw Error(l(92));
                        if (L(r)) {
                            if (1 < r.length) throw Error(l(93));
                            r = r[0]
                        }
                        n = r
                    }
                    null == n && (n = ""), t = n
                }
                n = st(t), e.defaultValue = n, (r = e.textContent) === n && "" !== r && null !== r && (e.value = r), ft(e)
            }

            function wt(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                }
                e.textContent = t
            }
            var xt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

            function _t(e, t, n) {
                var r = 0 === t.indexOf("--");
                null == n || "boolean" == typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" != typeof n || 0 === n || xt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
            }

            function Et(e, t, n) {
                if (null != t && "object" != typeof t) throw Error(l(62));
                if (e = e.style, null != n) {
                    for (var r in n) !n.hasOwnProperty(r) || null != t && t.hasOwnProperty(r) || (0 === r.indexOf("--") ? e.setProperty(r, "") : "float" === r ? e.cssFloat = "" : e[r] = "");
                    for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && _t(e, a, r)
                } else
                    for (var o in t) t.hasOwnProperty(o) && _t(e, o, t[o])
            }

            function Ct(e) {
                if (-1 === e.indexOf("-")) return !1;
                switch (e) {
                    case "annotation-xml":
                    case "color-profile":
                    case "font-face":
                    case "font-face-src":
                    case "font-face-uri":
                    case "font-face-format":
                    case "font-face-name":
                    case "missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }
            var Pt = new Map([
                    ["acceptCharset", "accept-charset"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"],
                    ["crossOrigin", "crossorigin"],
                    ["accentHeight", "accent-height"],
                    ["alignmentBaseline", "alignment-baseline"],
                    ["arabicForm", "arabic-form"],
                    ["baselineShift", "baseline-shift"],
                    ["capHeight", "cap-height"],
                    ["clipPath", "clip-path"],
                    ["clipRule", "clip-rule"],
                    ["colorInterpolation", "color-interpolation"],
                    ["colorInterpolationFilters", "color-interpolation-filters"],
                    ["colorProfile", "color-profile"],
                    ["colorRendering", "color-rendering"],
                    ["dominantBaseline", "dominant-baseline"],
                    ["enableBackground", "enable-background"],
                    ["fillOpacity", "fill-opacity"],
                    ["fillRule", "fill-rule"],
                    ["floodColor", "flood-color"],
                    ["floodOpacity", "flood-opacity"],
                    ["fontFamily", "font-family"],
                    ["fontSize", "font-size"],
                    ["fontSizeAdjust", "font-size-adjust"],
                    ["fontStretch", "font-stretch"],
                    ["fontStyle", "font-style"],
                    ["fontVariant", "font-variant"],
                    ["fontWeight", "font-weight"],
                    ["glyphName", "glyph-name"],
                    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
                    ["glyphOrientationVertical", "glyph-orientation-vertical"],
                    ["horizAdvX", "horiz-adv-x"],
                    ["horizOriginX", "horiz-origin-x"],
                    ["imageRendering", "image-rendering"],
                    ["letterSpacing", "letter-spacing"],
                    ["lightingColor", "lighting-color"],
                    ["markerEnd", "marker-end"],
                    ["markerMid", "marker-mid"],
                    ["markerStart", "marker-start"],
                    ["overlinePosition", "overline-position"],
                    ["overlineThickness", "overline-thickness"],
                    ["paintOrder", "paint-order"],
                    ["panose-1", "panose-1"],
                    ["pointerEvents", "pointer-events"],
                    ["renderingIntent", "rendering-intent"],
                    ["shapeRendering", "shape-rendering"],
                    ["stopColor", "stop-color"],
                    ["stopOpacity", "stop-opacity"],
                    ["strikethroughPosition", "strikethrough-position"],
                    ["strikethroughThickness", "strikethrough-thickness"],
                    ["strokeDasharray", "stroke-dasharray"],
                    ["strokeDashoffset", "stroke-dashoffset"],
                    ["strokeLinecap", "stroke-linecap"],
                    ["strokeLinejoin", "stroke-linejoin"],
                    ["strokeMiterlimit", "stroke-miterlimit"],
                    ["strokeOpacity", "stroke-opacity"],
                    ["strokeWidth", "stroke-width"],
                    ["textAnchor", "text-anchor"],
                    ["textDecoration", "text-decoration"],
                    ["textRendering", "text-rendering"],
                    ["transformOrigin", "transform-origin"],
                    ["underlinePosition", "underline-position"],
                    ["underlineThickness", "underline-thickness"],
                    ["unicodeBidi", "unicode-bidi"],
                    ["unicodeRange", "unicode-range"],
                    ["unitsPerEm", "units-per-em"],
                    ["vAlphabetic", "v-alphabetic"],
                    ["vHanging", "v-hanging"],
                    ["vIdeographic", "v-ideographic"],
                    ["vMathematical", "v-mathematical"],
                    ["vectorEffect", "vector-effect"],
                    ["vertAdvY", "vert-adv-y"],
                    ["vertOriginX", "vert-origin-x"],
                    ["vertOriginY", "vert-origin-y"],
                    ["wordSpacing", "word-spacing"],
                    ["writingMode", "writing-mode"],
                    ["xmlnsXlink", "xmlns:xlink"],
                    ["xHeight", "x-height"]
                ]),
                Tt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

            function zt(e) {
                return Tt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
            }

            function Nt() {}
            var Lt = null;

            function At(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }
            var Ot = null,
                jt = null;

            function Rt(e) {
                var t = Ge(e);
                if (t && (e = t.stateNode)) {
                    var n = e[Ie] || null;
                    e: switch (e = t.stateNode, t.type) {
                        case "input":
                            if (gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll('input[name="' + ht("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var a = r[Ie] || null;
                                        if (!a) throw Error(l(90));
                                        gt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                                    }
                                }
                                for (t = 0; t < n.length; t++)(r = n[t]).form === e.form && dt(r)
                            }
                            break e;
                        case "textarea":
                            kt(e, n.value, n.defaultValue);
                            break e;
                        case "select":
                            null != (t = n.value) && bt(e, !!n.multiple, t, !1)
                    }
                }
            }
            var Mt = !1;

            function Ft(e, t, n) {
                if (Mt) return e(t, n);
                Mt = !0;
                try {
                    return e(t)
                } finally {
                    if (Mt = !1, (null !== Ot || null !== jt) && (Xs(), Ot && (t = Ot, e = jt, jt = Ot = null, Rt(t), e)))
                        for (t = 0; t < e.length; t++) Rt(e[t])
                }
            }

            function Dt(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = n[Ie] || null;
                if (null === r) return null;
                n = r[t];
                e: switch (t) {
                    case "onClick":
                    case "onClickCapture":
                    case "onDoubleClick":
                    case "onDoubleClickCapture":
                    case "onMouseDown":
                    case "onMouseDownCapture":
                    case "onMouseMove":
                    case "onMouseMoveCapture":
                    case "onMouseUp":
                    case "onMouseUpCapture":
                    case "onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" != typeof n) throw Error(l(231, t, typeof n));
                return n
            }
            var $t, It = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
                Ht = !1;
            if (It) try {
                $t = {}, Object.defineProperty($t, "passive", {
                    get: function() {
                        Ht = !0
                    }
                }), window.addEventListener("test", $t, $t), window.removeEventListener("test", $t, $t)
            } catch (e) {
                Ht = !1
            }
            var Ut = null,
                Bt = null,
                Vt = null;

            function Wt() {
                if (Vt) return Vt;
                var e, t, n = Bt,
                    r = n.length,
                    l = "value" in Ut ? Ut.value : Ut.textContent,
                    a = l.length;
                for (e = 0; e < r && n[e] === l[e]; e++);
                var o = r - e;
                for (t = 1; t <= o && n[r - t] === l[a - t]; t++);
                return Vt = l.slice(e, 1 < t ? 1 - t : void 0)
            }

            function qt(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function Qt() {
                return !0
            }

            function Kt() {
                return !1
            }

            function Gt(e) {
                function t(t, n, r, l, a) {
                    for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = l, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(l) : l[o]);
                    return this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue) ? Qt : Kt, this.isPropagationStopped = Kt, this
                }
                return f(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Qt)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Qt)
                    },
                    persist: function() {},
                    isPersistent: Qt
                }), t
            }
            var Yt, Xt, Zt, Jt = {
                    eventPhase: 0,
                    bubbles: 0,
                    cancelable: 0,
                    timeStamp: function(e) {
                        return e.timeStamp || Date.now()
                    },
                    defaultPrevented: 0,
                    isTrusted: 0
                },
                en = Gt(Jt),
                tn = f({}, Jt, {
                    view: 0,
                    detail: 0
                }),
                nn = Gt(tn),
                rn = f({}, tn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: hn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function(e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function(e) {
                        return "movementX" in e ? e.movementX : (e !== Zt && (Zt && "mousemove" === e.type ? (Yt = e.screenX - Zt.screenX, Xt = e.screenY - Zt.screenY) : Xt = Yt = 0, Zt = e), Yt)
                    },
                    movementY: function(e) {
                        return "movementY" in e ? e.movementY : Xt
                    }
                }),
                ln = Gt(rn),
                an = Gt(f({}, rn, {
                    dataTransfer: 0
                })),
                on = Gt(f({}, tn, {
                    relatedTarget: 0
                })),
                un = Gt(f({}, Jt, {
                    animationName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                sn = Gt(f({}, Jt, {
                    clipboardData: function(e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                })),
                cn = Gt(f({}, Jt, {
                    data: 0
                })),
                fn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                },
                dn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
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
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                },
                pn = {
                    Alt: "altKey",
                    Control: "ctrlKey",
                    Meta: "metaKey",
                    Shift: "shiftKey"
                };

            function mn(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = pn[e]) && !!t[e]
            }

            function hn() {
                return mn
            }
            var gn = Gt(f({}, tn, {
                    key: function(e) {
                        if (e.key) {
                            var t = fn[e.key] || e.key;
                            if ("Unidentified" !== t) return t
                        }
                        return "keypress" === e.type ? 13 === (e = qt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? dn[e.keyCode] || "Unidentified" : ""
                    },
                    code: 0,
                    location: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    repeat: 0,
                    locale: 0,
                    getModifierState: hn,
                    charCode: function(e) {
                        return "keypress" === e.type ? qt(e) : 0
                    },
                    keyCode: function(e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    },
                    which: function(e) {
                        return "keypress" === e.type ? qt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                    }
                })),
                yn = Gt(f({}, rn, {
                    pointerId: 0,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    pointerType: 0,
                    isPrimary: 0
                })),
                vn = Gt(f({}, tn, {
                    touches: 0,
                    targetTouches: 0,
                    changedTouches: 0,
                    altKey: 0,
                    metaKey: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    getModifierState: hn
                })),
                bn = Gt(f({}, Jt, {
                    propertyName: 0,
                    elapsedTime: 0,
                    pseudoElement: 0
                })),
                kn = Gt(f({}, rn, {
                    deltaX: function(e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                    },
                    deltaY: function(e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                    },
                    deltaZ: 0,
                    deltaMode: 0
                })),
                Sn = Gt(f({}, Jt, {
                    newState: 0,
                    oldState: 0
                })),
                wn = [9, 13, 27, 32],
                xn = It && "CompositionEvent" in window,
                _n = null;
            It && "documentMode" in document && (_n = document.documentMode);
            var En = It && "TextEvent" in window && !_n,
                Cn = It && (!xn || _n && 8 < _n && 11 >= _n),
                Pn = String.fromCharCode(32),
                Tn = !1;

            function zn(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== wn.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Nn(e) {
                return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
            }
            var Ln = !1,
                An = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

            function On(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!An[e.type] : "textarea" === t
            }

            function jn(e, t, n, r) {
                Ot ? jt ? jt.push(r) : jt = [r] : Ot = r, 0 < (t = tf(t, "onChange")).length && (n = new en("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Rn = null,
                Mn = null;

            function Fn(e) {
                Qc(e, 0)
            }

            function Dn(e) {
                if (dt(Ye(e))) return e
            }

            function $n(e, t) {
                if ("change" === e) return t
            }
            var In, Hn, Un, Bn = !1;

            function Vn() {
                Rn && (Rn.detachEvent("onpropertychange", Wn), Mn = Rn = null)
            }

            function Wn(e) {
                if ("value" === e.propertyName && Dn(Mn)) {
                    var t = [];
                    jn(t, Mn, e, At(e)), Ft(Fn, t)
                }
            }

            function qn(e, t, n) {
                "focusin" === e ? (Vn(), Mn = n, (Rn = t).attachEvent("onpropertychange", Wn)) : "focusout" === e && Vn()
            }

            function Qn(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Dn(Mn)
            }

            function Kn(e, t) {
                if ("click" === e) return Dn(t)
            }

            function Gn(e, t) {
                if ("input" === e || "change" === e) return Dn(t)
            }
            It && (It ? ((Hn = "oninput" in document) || ((Un = document.createElement("div")).setAttribute("oninput", "return;"), Hn = "function" == typeof Un.oninput), In = Hn) : In = !1, Bn = In && (!document.documentMode || 9 < document.documentMode));
            var Yn = "function" == typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            };

            function Xn(e, t) {
                if (Yn(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var l = n[r];
                    if (!te.call(t, l) || !Yn(e[l], t[l])) return !1
                }
                return !0
            }

            function Zn(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function Jn(e, t) {
                var n, r = Zn(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {
                            node: r,
                            offset: t - e
                        };
                        e = n
                    }
                    e: {
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = Zn(r)
                }
            }

            function er(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? er(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function tr(e) {
                for (var t = pt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" == typeof t.contentWindow.location.href
                    } catch (e) {
                        n = !1
                    }
                    if (!n) break;
                    t = pt((e = t.contentWindow).document)
                }
                return t
            }

            function nr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            var rr = It && "documentMode" in document && 11 >= document.documentMode,
                lr = null,
                ar = null,
                or = null,
                ir = !1;

            function ur(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                ir || null == lr || lr !== pt(r) || (r = "selectionStart" in (r = lr) && nr(r) ? {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, or && Xn(or, r) || (or = r, 0 < (r = tf(ar, "onSelect")).length && (t = new en("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = lr)))
            }

            function sr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }
            var cr = {
                    animationend: sr("Animation", "AnimationEnd"),
                    animationiteration: sr("Animation", "AnimationIteration"),
                    animationstart: sr("Animation", "AnimationStart"),
                    transitionrun: sr("Transition", "TransitionRun"),
                    transitionstart: sr("Transition", "TransitionStart"),
                    transitioncancel: sr("Transition", "TransitionCancel"),
                    transitionend: sr("Transition", "TransitionEnd")
                },
                fr = {},
                dr = {};

            function pr(e) {
                if (fr[e]) return fr[e];
                if (!cr[e]) return e;
                var t, n = cr[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in dr) return fr[e] = n[t];
                return e
            }
            It && (dr = document.createElement("div").style, "AnimationEvent" in window || (delete cr.animationend.animation, delete cr.animationiteration.animation, delete cr.animationstart.animation), "TransitionEvent" in window || delete cr.transitionend.transition);
            var mr = pr("animationend"),
                hr = pr("animationiteration"),
                gr = pr("animationstart"),
                yr = pr("transitionrun"),
                vr = pr("transitionstart"),
                br = pr("transitioncancel"),
                kr = pr("transitionend"),
                Sr = new Map,
                wr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function xr(e, t) {
                Sr.set(e, t), tt(t, [e])
            }
            wr.push("scrollEnd");
            var _r = "function" == typeof reportError ? reportError : function(e) {
                    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                        var t = new window.ErrorEvent("error", {
                            bubbles: !0,
                            cancelable: !0,
                            message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                            error: e
                        });
                        if (!window.dispatchEvent(t)) return
                    } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
                    console.error(e)
                },
                Er = [],
                Cr = 0,
                Pr = 0;

            function Tr() {
                for (var e = Cr, t = Pr = Cr = 0; t < e;) {
                    var n = Er[t];
                    Er[t++] = null;
                    var r = Er[t];
                    Er[t++] = null;
                    var l = Er[t];
                    Er[t++] = null;
                    var a = Er[t];
                    if (Er[t++] = null, null !== r && null !== l) {
                        var o = r.pending;
                        null === o ? l.next = l : (l.next = o.next, o.next = l), r.pending = l
                    }
                    0 !== a && Ar(n, l, a)
                }
            }

            function zr(e, t, n, r) {
                Er[Cr++] = e, Er[Cr++] = t, Er[Cr++] = n, Er[Cr++] = r, Pr |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
            }

            function Nr(e, t, n, r) {
                return zr(e, t, n, r), Or(e)
            }

            function Lr(e, t) {
                return zr(e, null, null, t), Or(e)
            }

            function Ar(e, t, n) {
                e.lanes |= n;
                var r = e.alternate;
                null !== r && (r.lanes |= n);
                for (var l = !1, a = e.return; null !== a;) a.childLanes |= n, null !== (r = a.alternate) && (r.childLanes |= n), 22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (l = !0)), e = a, a = a.return;
                return 3 === e.tag ? (a = e.stateNode, l && null !== t && (l = 31 - ve(n), null === (r = (e = a.hiddenUpdates)[l]) ? e[l] = [t] : r.push(t), t.lane = 536870912 | n), a) : null
            }

            function Or(e) {
                if (50 < Us) throw Us = 0, Bs = null, Error(l(185));
                for (var t = e.return; null !== t;) t = (e = t).return;
                return 3 === e.tag ? e.stateNode : null
            }
            var jr = {};

            function Rr(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Mr(e, t, n, r) {
                return new Rr(e, t, n, r)
            }

            function Fr(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Dr(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Mr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
            }

            function $r(e, t) {
                e.flags &= 65011714;
                var n = e.alternate;
                return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }), e
            }

            function Ir(e, t, n, r, a, o) {
                var i = 0;
                if (r = e, "function" == typeof e) Fr(e) && (i = 1);
                else if ("string" == typeof e) i = function(e, t, n) {
                    if (1 === n || null != t.itemProp) return !1;
                    switch (e) {
                        case "meta":
                        case "title":
                            return !0;
                        case "style":
                            if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
                            return !0;
                        case "link":
                            if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                            return "stylesheet" !== t.rel || (e = t.disabled, "string" == typeof t.precedence && null == e);
                        case "script":
                            if (t.async && "function" != typeof t.async && "symbol" != typeof t.async && !t.onLoad && !t.onError && t.src && "string" == typeof t.src) return !0
                    }
                    return !1
                }(e, n, U.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
                else e: switch (e) {
                    case E:
                        return (e = Mr(31, n, t, a)).elementType = E, e.lanes = o, e;
                    case h:
                        return Hr(n.children, a, o, t);
                    case g:
                        i = 8, a |= 24;
                        break;
                    case y:
                        return (e = Mr(12, n, t, 2 | a)).elementType = y, e.lanes = o, e;
                    case S:
                        return (e = Mr(13, n, t, a)).elementType = S, e.lanes = o, e;
                    case w:
                        return (e = Mr(19, n, t, a)).elementType = w, e.lanes = o, e;
                    default:
                        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                            case b:
                                i = 10;
                                break e;
                            case v:
                                i = 9;
                                break e;
                            case k:
                                i = 11;
                                break e;
                            case x:
                                i = 14;
                                break e;
                            case _:
                                i = 16, r = null;
                                break e
                        }
                        i = 29, n = Error(l(130, null === e ? "null" : typeof e, "")), r = null
                }
                return (t = Mr(i, n, t, a)).elementType = e, t.type = r, t.lanes = o, t
            }

            function Hr(e, t, n, r) {
                return (e = Mr(7, e, r, t)).lanes = n, e
            }

            function Ur(e, t, n) {
                return (e = Mr(6, e, null, t)).lanes = n, e
            }

            function Br(e) {
                var t = Mr(18, null, null, 0);
                return t.stateNode = e, t
            }

            function Vr(e, t, n) {
                return (t = Mr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }
            var Wr = new WeakMap;

            function qr(e, t) {
                if ("object" == typeof e && null !== e) {
                    var n = Wr.get(e);
                    return void 0 !== n ? n : (t = {
                        value: e,
                        source: t,
                        stack: ee(t)
                    }, Wr.set(e, t), t)
                }
                return {
                    value: e,
                    source: t,
                    stack: ee(t)
                }
            }
            var Qr = [],
                Kr = 0,
                Gr = null,
                Yr = 0,
                Xr = [],
                Zr = 0,
                Jr = null,
                el = 1,
                tl = "";

            function nl(e, t) {
                Qr[Kr++] = Yr, Qr[Kr++] = Gr, Gr = e, Yr = t
            }

            function rl(e, t, n) {
                Xr[Zr++] = el, Xr[Zr++] = tl, Xr[Zr++] = Jr, Jr = e;
                var r = el;
                e = tl;
                var l = 32 - ve(r) - 1;
                r &= ~(1 << l), n += 1;
                var a = 32 - ve(t) + l;
                if (30 < a) {
                    var o = l - l % 5;
                    a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, el = 1 << 32 - ve(t) + l | n << l | r, tl = a + e
                } else el = 1 << a | n << l | r, tl = e
            }

            function ll(e) {
                null !== e.return && (nl(e, 1), rl(e, 1, 0))
            }

            function al(e) {
                for (; e === Gr;) Gr = Qr[--Kr], Qr[Kr] = null, Yr = Qr[--Kr], Qr[Kr] = null;
                for (; e === Jr;) Jr = Xr[--Zr], Xr[Zr] = null, tl = Xr[--Zr], Xr[Zr] = null, el = Xr[--Zr], Xr[Zr] = null
            }

            function ol(e, t) {
                Xr[Zr++] = el, Xr[Zr++] = tl, Xr[Zr++] = Jr, el = t.id, tl = t.overflow, Jr = e
            }
            var il = null,
                ul = null,
                sl = !1,
                cl = null,
                fl = !1,
                dl = Error(l(519));

            function pl(e) {
                throw bl(qr(Error(l(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", "")), e)), dl
            }

            function ml(e) {
                var t = e.stateNode,
                    n = e.type,
                    r = e.memoizedProps;
                switch (t[$e] = e, t[Ie] = r, n) {
                    case "dialog":
                        Kc("cancel", t), Kc("close", t);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Kc("load", t);
                        break;
                    case "video":
                    case "audio":
                        for (n = 0; n < Wc.length; n++) Kc(Wc[n], t);
                        break;
                    case "source":
                        Kc("error", t);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Kc("error", t), Kc("load", t);
                        break;
                    case "details":
                        Kc("toggle", t);
                        break;
                    case "input":
                        Kc("invalid", t), yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                        break;
                    case "select":
                        Kc("invalid", t);
                        break;
                    case "textarea":
                        Kc("invalid", t), St(t, r.value, r.defaultValue, r.children)
                }
                "string" != typeof(n = r.children) && "number" != typeof n && "bigint" != typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || uf(t.textContent, n) ? (null != r.popover && (Kc("beforetoggle", t), Kc("toggle", t)), null != r.onScroll && Kc("scroll", t), null != r.onScrollEnd && Kc("scrollend", t), null != r.onClick && (t.onclick = Nt), t = !0) : t = !1, t || pl(e, !0)
            }

            function hl(e) {
                for (il = e.return; il;) switch (il.tag) {
                    case 5:
                    case 31:
                    case 13:
                        return void(fl = !1);
                    case 27:
                    case 3:
                        return void(fl = !0);
                    default:
                        il = il.return
                }
            }

            function gl(e) {
                if (e !== il) return !1;
                if (!sl) return hl(e), sl = !0, !1;
                var t, n = e.tag;
                if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || vf(e.type, e.memoizedProps)), t = !t), t && ul && pl(e), hl(e), 13 === n) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
                    ul = jf(e)
                } else if (31 === n) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
                    ul = jf(e)
                } else 27 === n ? (n = ul, Ef(e.type) ? (e = Of, Of = null, ul = e) : ul = n) : ul = il ? Af(e.stateNode.nextSibling) : null;
                return !0
            }

            function yl() {
                ul = il = null, sl = !1
            }

            function vl() {
                var e = cl;
                return null !== e && (null === Ts ? Ts = e : Ts.push.apply(Ts, e), cl = null), e
            }

            function bl(e) {
                null === cl ? cl = [e] : cl.push(e)
            }
            var kl = F(null),
                Sl = null,
                wl = null;

            function xl(e, t, n) {
                $(kl, t._currentValue), t._currentValue = n
            }

            function _l(e) {
                e._currentValue = kl.current, D(kl)
            }

            function El(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function Cl(e, t, n, r) {
                var a = e.child;
                for (null !== a && (a.return = e); null !== a;) {
                    var o = a.dependencies;
                    if (null !== o) {
                        var i = a.child;
                        o = o.firstContext;
                        e: for (; null !== o;) {
                            var u = o;
                            o = a;
                            for (var s = 0; s < t.length; s++)
                                if (u.context === t[s]) {
                                    o.lanes |= n, null !== (u = o.alternate) && (u.lanes |= n), El(o.return, n, e), r || (i = null);
                                    break e
                                } o = u.next
                        }
                    } else if (18 === a.tag) {
                        if (null === (i = a.return)) throw Error(l(341));
                        i.lanes |= n, null !== (o = i.alternate) && (o.lanes |= n), El(i, n, e), i = null
                    } else i = a.child;
                    if (null !== i) i.return = a;
                    else
                        for (i = a; null !== i;) {
                            if (i === e) {
                                i = null;
                                break
                            }
                            if (null !== (a = i.sibling)) {
                                a.return = i.return, i = a;
                                break
                            }
                            i = i.return
                        }
                    a = i
                }
            }

            function Pl(e, t, n, r) {
                e = null;
                for (var a = t, o = !1; null !== a;) {
                    if (!o)
                        if (524288 & a.flags) o = !0;
                        else if (262144 & a.flags) break;
                    if (10 === a.tag) {
                        var i = a.alternate;
                        if (null === i) throw Error(l(387));
                        if (null !== (i = i.memoizedProps)) {
                            var u = a.type;
                            Yn(a.pendingProps.value, i.value) || (null !== e ? e.push(u) : e = [u])
                        }
                    } else if (a === W.current) {
                        if (null === (i = a.alternate)) throw Error(l(387));
                        i.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(sd) : e = [sd])
                    }
                    a = a.return
                }
                null !== e && Cl(t, e, n, r), t.flags |= 262144
            }

            function Tl(e) {
                for (e = e.firstContext; null !== e;) {
                    if (!Yn(e.context._currentValue, e.memoizedValue)) return !0;
                    e = e.next
                }
                return !1
            }

            function zl(e) {
                Sl = e, wl = null, null !== (e = e.dependencies) && (e.firstContext = null)
            }

            function Nl(e) {
                return Al(Sl, e)
            }

            function Ll(e, t) {
                return null === Sl && zl(e), Al(e, t)
            }

            function Al(e, t) {
                var n = t._currentValue;
                if (t = {
                        context: t,
                        memoizedValue: n,
                        next: null
                    }, null === wl) {
                    if (null === e) throw Error(l(308));
                    wl = t, e.dependencies = {
                        lanes: 0,
                        firstContext: t
                    }, e.flags |= 524288
                } else wl = wl.next = t;
                return n
            }
            var Ol = "undefined" != typeof AbortController ? AbortController : function() {
                    var e = [],
                        t = this.signal = {
                            aborted: !1,
                            addEventListener: function(t, n) {
                                e.push(n)
                            }
                        };
                    this.abort = function() {
                        t.aborted = !0, e.forEach(function(e) {
                            return e()
                        })
                    }
                },
                jl = t.unstable_scheduleCallback,
                Rl = t.unstable_NormalPriority,
                Ml = {
                    $$typeof: b,
                    Consumer: null,
                    Provider: null,
                    _currentValue: null,
                    _currentValue2: null,
                    _threadCount: 0
                };

            function Fl() {
                return {
                    controller: new Ol,
                    data: new Map,
                    refCount: 0
                }
            }

            function Dl(e) {
                e.refCount--, 0 === e.refCount && jl(Rl, function() {
                    e.controller.abort()
                })
            }
            var $l = null,
                Il = 0,
                Hl = 0,
                Ul = null;

            function Bl() {
                if (0 === --Il && null !== $l) {
                    null !== Ul && (Ul.status = "fulfilled");
                    var e = $l;
                    $l = null, Hl = 0, Ul = null;
                    for (var t = 0; t < e.length; t++)(0, e[t])()
                }
            }
            var Vl = A.S;
            A.S = function(e, t) {
                Ls = oe(), "object" == typeof t && null !== t && "function" == typeof t.then && function(e, t) {
                    if (null === $l) {
                        var n = $l = [];
                        Il = 0, Hl = Uc(), Ul = {
                            status: "pending",
                            value: void 0,
                            then: function(e) {
                                n.push(e)
                            }
                        }
                    }
                    Il++, t.then(Bl, Bl)
                }(0, t), null !== Vl && Vl(e, t)
            };
            var Wl = F(null);

            function ql() {
                var e = Wl.current;
                return null !== e ? e : ds.pooledCache
            }

            function Ql(e, t) {
                $(Wl, null === t ? Wl.current : t.pool)
            }

            function Kl() {
                var e = ql();
                return null === e ? null : {
                    parent: Ml._currentValue,
                    pool: e
                }
            }
            var Gl = Error(l(460)),
                Yl = Error(l(474)),
                Xl = Error(l(542)),
                Zl = {
                    then: function() {}
                };

            function Jl(e) {
                return "fulfilled" === (e = e.status) || "rejected" === e
            }

            function ea(e, t, n) {
                switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Nt, Nt), t = n), t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw la(e = t.reason), e;
                    default:
                        if ("string" == typeof t.status) t.then(Nt, Nt);
                        else {
                            if (null !== (e = ds) && 100 < e.shellSuspendCounter) throw Error(l(482));
                            (e = t).status = "pending", e.then(function(e) {
                                if ("pending" === t.status) {
                                    var n = t;
                                    n.status = "fulfilled", n.value = e
                                }
                            }, function(e) {
                                if ("pending" === t.status) {
                                    var n = t;
                                    n.status = "rejected", n.reason = e
                                }
                            })
                        }
                        switch (t.status) {
                            case "fulfilled":
                                return t.value;
                            case "rejected":
                                throw la(e = t.reason), e
                        }
                        throw na = t, Gl
                }
            }

            function ta(e) {
                try {
                    return (0, e._init)(e._payload)
                } catch (e) {
                    if (null !== e && "object" == typeof e && "function" == typeof e.then) throw na = e, Gl;
                    throw e
                }
            }
            var na = null;

            function ra() {
                if (null === na) throw Error(l(459));
                var e = na;
                return na = null, e
            }

            function la(e) {
                if (e === Gl || e === Xl) throw Error(l(483))
            }
            var aa = null,
                oa = 0;

            function ia(e) {
                var t = oa;
                return oa += 1, null === aa && (aa = []), ea(aa, e, t)
            }

            function ua(e, t) {
                t = t.props.ref, e.ref = void 0 !== t ? t : null
            }

            function sa(e, t) {
                if (t.$$typeof === d) throw Error(l(525));
                throw e = Object.prototype.toString.call(t), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function ca(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e) {
                    for (var t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                    return t
                }

                function a(e, t) {
                    return (e = Dr(e, t)).index = 0, e.sibling = null, e
                }

                function o(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 67108866, n) : r : (t.flags |= 67108866, n) : (t.flags |= 1048576, n)
                }

                function i(t) {
                    return e && null === t.alternate && (t.flags |= 67108866), t
                }

                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Ur(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function s(e, t, n, r) {
                    var l = n.type;
                    return l === h ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" == typeof l && null !== l && l.$$typeof === _ && ta(l) === t.type) ? (ua(t = a(t, n.props), n), t.return = e, t) : (ua(t = Ir(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
                }

                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Vr(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
                }

                function f(e, t, n, r, l) {
                    return null === t || 7 !== t.tag ? ((t = Hr(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t)
                }

                function d(e, t, n) {
                    if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return (t = Ur("" + t, e.mode, n)).return = e, t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case p:
                                return ua(n = Ir(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                            case m:
                                return (t = Vr(t, e.mode, n)).return = e, t;
                            case _:
                                return d(e, t = ta(t), n)
                        }
                        if (L(t) || T(t)) return (t = Hr(t, e.mode, n, null)).return = e, t;
                        if ("function" == typeof t.then) return d(e, ia(t), n);
                        if (t.$$typeof === b) return d(e, Ll(e, t), n);
                        sa(e, t)
                    }
                    return null
                }

                function g(e, t, n, r) {
                    var l = null !== t ? t.key : null;
                    if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n) return null !== l ? null : u(e, t, "" + n, r);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case p:
                                return n.key === l ? s(e, t, n, r) : null;
                            case m:
                                return n.key === l ? c(e, t, n, r) : null;
                            case _:
                                return g(e, t, n = ta(n), r)
                        }
                        if (L(n) || T(n)) return null !== l ? null : f(e, t, n, r, null);
                        if ("function" == typeof n.then) return g(e, t, ia(n), r);
                        if (n.$$typeof === b) return g(e, t, Ll(e, n), r);
                        sa(e, n)
                    }
                    return null
                }

                function y(e, t, n, r, l) {
                    if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r) return u(t, e = e.get(n) || null, "" + r, l);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case p:
                                return s(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
                            case m:
                                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, l);
                            case _:
                                return y(e, t, n, r = ta(r), l)
                        }
                        if (L(r) || T(r)) return f(t, e = e.get(n) || null, r, l, null);
                        if ("function" == typeof r.then) return y(e, t, n, ia(r), l);
                        if (r.$$typeof === b) return y(e, t, n, Ll(t, r), l);
                        sa(t, r)
                    }
                    return null
                }

                function v(u, s, c, f) {
                    if ("object" == typeof c && null !== c && c.type === h && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
                        switch (c.$$typeof) {
                            case p:
                                e: {
                                    for (var k = c.key; null !== s;) {
                                        if (s.key === k) {
                                            if ((k = c.type) === h) {
                                                if (7 === s.tag) {
                                                    n(u, s.sibling), (f = a(s, c.props.children)).return = u, u = f;
                                                    break e
                                                }
                                            } else if (s.elementType === k || "object" == typeof k && null !== k && k.$$typeof === _ && ta(k) === s.type) {
                                                n(u, s.sibling), ua(f = a(s, c.props), c), f.return = u, u = f;
                                                break e
                                            }
                                            n(u, s);
                                            break
                                        }
                                        t(u, s), s = s.sibling
                                    }
                                    c.type === h ? ((f = Hr(c.props.children, u.mode, f, c.key)).return = u, u = f) : (ua(f = Ir(c.type, c.key, c.props, null, u.mode, f), c), f.return = u, u = f)
                                }
                                return i(u);
                            case m:
                                e: {
                                    for (k = c.key; null !== s;) {
                                        if (s.key === k) {
                                            if (4 === s.tag && s.stateNode.containerInfo === c.containerInfo && s.stateNode.implementation === c.implementation) {
                                                n(u, s.sibling), (f = a(s, c.children || [])).return = u, u = f;
                                                break e
                                            }
                                            n(u, s);
                                            break
                                        }
                                        t(u, s), s = s.sibling
                                    }(f = Vr(c, u.mode, f)).return = u,
                                    u = f
                                }
                                return i(u);
                            case _:
                                return v(u, s, c = ta(c), f)
                        }
                        if (L(c)) return function(l, a, i, u) {
                            for (var s = null, c = null, f = a, p = a = 0, m = null; null !== f && p < i.length; p++) {
                                f.index > p ? (m = f, f = null) : m = f.sibling;
                                var h = g(l, f, i[p], u);
                                if (null === h) {
                                    null === f && (f = m);
                                    break
                                }
                                e && f && null === h.alternate && t(l, f), a = o(h, a, p), null === c ? s = h : c.sibling = h, c = h, f = m
                            }
                            if (p === i.length) return n(l, f), sl && nl(l, p), s;
                            if (null === f) {
                                for (; p < i.length; p++) null !== (f = d(l, i[p], u)) && (a = o(f, a, p), null === c ? s = f : c.sibling = f, c = f);
                                return sl && nl(l, p), s
                            }
                            for (f = r(f); p < i.length; p++) null !== (m = y(f, l, p, i[p], u)) && (e && null !== m.alternate && f.delete(null === m.key ? p : m.key), a = o(m, a, p), null === c ? s = m : c.sibling = m, c = m);
                            return e && f.forEach(function(e) {
                                return t(l, e)
                            }), sl && nl(l, p), s
                        }(u, s, c, f);
                        if (T(c)) {
                            if ("function" != typeof(k = T(c))) throw Error(l(150));
                            return function(a, i, u, s) {
                                if (null == u) throw Error(l(151));
                                for (var c = null, f = null, p = i, m = i = 0, h = null, v = u.next(); null !== p && !v.done; m++, v = u.next()) {
                                    p.index > m ? (h = p, p = null) : h = p.sibling;
                                    var b = g(a, p, v.value, s);
                                    if (null === b) {
                                        null === p && (p = h);
                                        break
                                    }
                                    e && p && null === b.alternate && t(a, p), i = o(b, i, m), null === f ? c = b : f.sibling = b, f = b, p = h
                                }
                                if (v.done) return n(a, p), sl && nl(a, m), c;
                                if (null === p) {
                                    for (; !v.done; m++, v = u.next()) null !== (v = d(a, v.value, s)) && (i = o(v, i, m), null === f ? c = v : f.sibling = v, f = v);
                                    return sl && nl(a, m), c
                                }
                                for (p = r(p); !v.done; m++, v = u.next()) null !== (v = y(p, a, m, v.value, s)) && (e && null !== v.alternate && p.delete(null === v.key ? m : v.key), i = o(v, i, m), null === f ? c = v : f.sibling = v, f = v);
                                return e && p.forEach(function(e) {
                                    return t(a, e)
                                }), sl && nl(a, m), c
                            }(u, s, c = k.call(c), f)
                        }
                        if ("function" == typeof c.then) return v(u, s, ia(c), f);
                        if (c.$$typeof === b) return v(u, s, Ll(u, c), f);
                        sa(u, c)
                    }
                    return "string" == typeof c && "" !== c || "number" == typeof c || "bigint" == typeof c ? (c = "" + c, null !== s && 6 === s.tag ? (n(u, s.sibling), (f = a(s, c)).return = u, u = f) : (n(u, s), (f = Ur(c, u.mode, f)).return = u, u = f), i(u)) : n(u, s)
                }
                return function(e, t, n, r) {
                    try {
                        oa = 0;
                        var l = v(e, t, n, r);
                        return aa = null, l
                    } catch (t) {
                        if (t === Gl || t === Xl) throw t;
                        var a = Mr(29, t, null, e.mode);
                        return a.lanes = r, a.return = e, a
                    }
                }
            }
            var fa = ca(!0),
                da = ca(!1),
                pa = !1;

            function ma(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        lanes: 0,
                        hiddenCallbacks: null
                    },
                    callbacks: null
                }
            }

            function ha(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null
                })
            }

            function ga(e) {
                return {
                    lane: e,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }

            function ya(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 2 & fs) {
                    var l = r.pending;
                    return null === l ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, t = Or(e), Ar(e, null, n), t
                }
                return zr(e, r, t, n), Or(e)
            }

            function va(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 4194048 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, Ae(e, n)
                }
            }

            function ba(e, t) {
                var n = e.updateQueue,
                    r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var l = null,
                        a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var o = {
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: null,
                                next: null
                            };
                            null === a ? l = a = o : a = a.next = o, n = n.next
                        } while (null !== n);
                        null === a ? l = a = t : a = a.next = t
                    } else l = a = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: l,
                        lastBaseUpdate: a,
                        shared: r.shared,
                        callbacks: r.callbacks
                    }, void(e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }
            var ka = !1;

            function Sa() {
                if (ka && null !== Ul) throw Ul
            }

            function wa(e, t, n, r) {
                ka = !1;
                var l = e.updateQueue;
                pa = !1;
                var a = l.firstBaseUpdate,
                    o = l.lastBaseUpdate,
                    i = l.shared.pending;
                if (null !== i) {
                    l.shared.pending = null;
                    var u = i,
                        s = u.next;
                    u.next = null, null === o ? a = s : o.next = s, o = u;
                    var c = e.alternate;
                    null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u)
                }
                if (null !== a) {
                    var d = l.baseState;
                    for (o = 0, c = s = u = null, i = a;;) {
                        var p = -536870913 & i.lane,
                            m = p !== i.lane;
                        if (m ? (ms & p) === p : (r & p) === p) {
                            0 !== p && p === Hl && (ka = !0), null !== c && (c = c.next = {
                                lane: 0,
                                tag: i.tag,
                                payload: i.payload,
                                callback: null,
                                next: null
                            });
                            e: {
                                var h = e,
                                    g = i;p = t;
                                var y = n;
                                switch (g.tag) {
                                    case 1:
                                        if ("function" == typeof(h = g.payload)) {
                                            d = h.call(y, d, p);
                                            break e
                                        }
                                        d = h;
                                        break e;
                                    case 3:
                                        h.flags = -65537 & h.flags | 128;
                                    case 0:
                                        if (null == (p = "function" == typeof(h = g.payload) ? h.call(y, d, p) : h)) break e;
                                        d = f({}, d, p);
                                        break e;
                                    case 2:
                                        pa = !0
                                }
                            }
                            null !== (p = i.callback) && (e.flags |= 64, m && (e.flags |= 8192), null === (m = l.callbacks) ? l.callbacks = [p] : m.push(p))
                        } else m = {
                            lane: p,
                            tag: i.tag,
                            payload: i.payload,
                            callback: i.callback,
                            next: null
                        }, null === c ? (s = c = m, u = d) : c = c.next = m, o |= p;
                        if (null === (i = i.next)) {
                            if (null === (i = l.shared.pending)) break;
                            i = (m = i).next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
                        }
                    }
                    null === c && (u = d), l.baseState = u, l.firstBaseUpdate = s, l.lastBaseUpdate = c, null === a && (l.shared.lanes = 0), ws |= o, e.lanes = o, e.memoizedState = d
                }
            }

            function xa(e, t) {
                if ("function" != typeof e) throw Error(l(191, e));
                e.call(t)
            }

            function _a(e, t) {
                var n = e.callbacks;
                if (null !== n)
                    for (e.callbacks = null, e = 0; e < n.length; e++) xa(n[e], t)
            }
            var Ea = F(null),
                Ca = F(0);

            function Pa(e, t) {
                $(Ca, e = ks), $(Ea, t), ks = e | t.baseLanes
            }

            function Ta() {
                $(Ca, ks), $(Ea, Ea.current)
            }

            function za() {
                ks = Ca.current, D(Ea), D(Ca)
            }
            var Na = F(null),
                La = null;

            function Aa(e) {
                var t = e.alternate;
                $(Fa, 1 & Fa.current), $(Na, e), null === La && (null === t || null !== Ea.current || null !== t.memoizedState) && (La = e)
            }

            function Oa(e) {
                $(Fa, Fa.current), $(Na, e), null === La && (La = e)
            }

            function ja(e) {
                22 === e.tag ? ($(Fa, Fa.current), $(Na, e), null === La && (La = e)) : Ra()
            }

            function Ra() {
                $(Fa, Fa.current), $(Na, Na.current)
            }

            function Ma(e) {
                D(Na), La === e && (La = null), D(Fa)
            }
            var Fa = F(0);

            function Da(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || Nf(n) || Lf(n))) return t
                    } else if (19 !== t.tag || "forwards" !== t.memoizedProps.revealOrder && "backwards" !== t.memoizedProps.revealOrder && "unstable_legacy-backwards" !== t.memoizedProps.revealOrder && "together" !== t.memoizedProps.revealOrder) {
                        if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                    } else if (128 & t.flags) return t;
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }
            var $a = 0,
                Ia = null,
                Ha = null,
                Ua = null,
                Ba = !1,
                Va = !1,
                Wa = !1,
                qa = 0,
                Qa = 0,
                Ka = null,
                Ga = 0;

            function Ya() {
                throw Error(l(321))
            }

            function Xa(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!Yn(e[n], t[n])) return !1;
                return !0
            }

            function Za(e, t, n, r, l, a) {
                return $a = a, Ia = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = null === e || null === e.memoizedState ? mi : hi, Wa = !1, a = n(r, l), Wa = !1, Va && (a = eo(t, n, r, l)), Ja(e), a
            }

            function Ja(e) {
                A.H = pi;
                var t = null !== Ha && null !== Ha.next;
                if ($a = 0, Ua = Ha = Ia = null, Ba = !1, Qa = 0, Ka = null, t) throw Error(l(300));
                null === e || Li || null !== (e = e.dependencies) && Tl(e) && (Li = !0)
            }

            function eo(e, t, n, r) {
                Ia = e;
                var a = 0;
                do {
                    if (Va && (Ka = null), Qa = 0, Va = !1, 25 <= a) throw Error(l(301));
                    if (a += 1, Ua = Ha = null, null != e.updateQueue) {
                        var o = e.updateQueue;
                        o.lastEffect = null, o.events = null, o.stores = null, null != o.memoCache && (o.memoCache.index = 0)
                    }
                    A.H = gi, o = t(n, r)
                } while (Va);
                return o
            }

            function to() {
                var e = A.H,
                    t = e.useState()[0];
                return t = "function" == typeof t.then ? io(t) : t, e = e.useState()[0], (null !== Ha ? Ha.memoizedState : null) !== e && (Ia.flags |= 1024), t
            }

            function no() {
                var e = 0 !== qa;
                return qa = 0, e
            }

            function ro(e, t, n) {
                t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
            }

            function lo(e) {
                if (Ba) {
                    for (e = e.memoizedState; null !== e;) {
                        var t = e.queue;
                        null !== t && (t.pending = null), e = e.next
                    }
                    Ba = !1
                }
                $a = 0, Ua = Ha = Ia = null, Va = !1, Qa = qa = 0, Ka = null
            }

            function ao() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === Ua ? Ia.memoizedState = Ua = e : Ua = Ua.next = e, Ua
            }

            function oo() {
                if (null === Ha) {
                    var e = Ia.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = Ha.next;
                var t = null === Ua ? Ia.memoizedState : Ua.next;
                if (null !== t) Ua = t, Ha = e;
                else {
                    if (null === e) {
                        if (null === Ia.alternate) throw Error(l(467));
                        throw Error(l(310))
                    }
                    e = {
                        memoizedState: (Ha = e).memoizedState,
                        baseState: Ha.baseState,
                        baseQueue: Ha.baseQueue,
                        queue: Ha.queue,
                        next: null
                    }, null === Ua ? Ia.memoizedState = Ua = e : Ua = Ua.next = e
                }
                return Ua
            }

            function io(e) {
                var t = Qa;
                return Qa += 1, null === Ka && (Ka = []), e = ea(Ka, e, t), t = Ia, null === (null === Ua ? t.memoizedState : Ua.next) && (t = t.alternate, A.H = null === t || null === t.memoizedState ? mi : hi), e
            }

            function uo(e) {
                if (null !== e && "object" == typeof e) {
                    if ("function" == typeof e.then) return io(e);
                    if (e.$$typeof === b) return Nl(e)
                }
                throw Error(l(438, String(e)))
            }

            function so(e) {
                var t = null,
                    n = Ia.updateQueue;
                if (null !== n && (t = n.memoCache), null == t) {
                    var r = Ia.alternate;
                    null !== r && null !== (r = r.updateQueue) && null != (r = r.memoCache) && (t = {
                        data: r.data.map(function(e) {
                            return e.slice()
                        }),
                        index: 0
                    })
                }
                if (null == t && (t = {
                        data: [],
                        index: 0
                    }), null === n && (n = {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }, Ia.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
                    for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = C;
                return t.index++, n
            }

            function co(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function fo(e) {
                return po(oo(), Ha, e)
            }

            function po(e, t, n) {
                var r = e.queue;
                if (null === r) throw Error(l(311));
                r.lastRenderedReducer = n;
                var a = e.baseQueue,
                    o = r.pending;
                if (null !== o) {
                    if (null !== a) {
                        var i = a.next;
                        a.next = o.next, o.next = i
                    }
                    t.baseQueue = a = o, r.pending = null
                }
                if (o = e.baseState, null === a) e.memoizedState = o;
                else {
                    var u = i = null,
                        s = null,
                        c = t = a.next,
                        f = !1;
                    do {
                        var d = -536870913 & c.lane;
                        if (d !== c.lane ? (ms & d) === d : ($a & d) === d) {
                            var p = c.revertLane;
                            if (0 === p) null !== s && (s = s.next = {
                                lane: 0,
                                revertLane: 0,
                                gesture: null,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), d === Hl && (f = !0);
                            else {
                                if (($a & p) === p) {
                                    c = c.next, p === Hl && (f = !0);
                                    continue
                                }
                                d = {
                                    lane: 0,
                                    revertLane: c.revertLane,
                                    gesture: null,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                }, null === s ? (u = s = d, i = o) : s = s.next = d, Ia.lanes |= p, ws |= p
                            }
                            d = c.action, Wa && n(o, d), o = c.hasEagerState ? c.eagerState : n(o, d)
                        } else p = {
                            lane: d,
                            revertLane: c.revertLane,
                            gesture: c.gesture,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }, null === s ? (u = s = p, i = o) : s = s.next = p, Ia.lanes |= d, ws |= d;
                        c = c.next
                    } while (null !== c && c !== t);
                    if (null === s ? i = o : s.next = u, !Yn(o, e.memoizedState) && (Li = !0, f && null !== (n = Ul))) throw n;
                    e.memoizedState = o, e.baseState = i, e.baseQueue = s, r.lastRenderedState = o
                }
                return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch]
            }

            function mo(e) {
                var t = oo(),
                    n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    a = n.pending,
                    o = t.memoizedState;
                if (null !== a) {
                    n.pending = null;
                    var i = a = a.next;
                    do {
                        o = e(o, i.action), i = i.next
                    } while (i !== a);
                    Yn(o, t.memoizedState) || (Li = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
                }
                return [o, r]
            }

            function ho(e, t, n) {
                var r = Ia,
                    a = oo(),
                    o = sl;
                if (o) {
                    if (void 0 === n) throw Error(l(407));
                    n = n()
                } else n = t();
                var i = !Yn((Ha || a).memoizedState, n);
                if (i && (a.memoizedState = n, Li = !0), a = a.queue, Io(vo.bind(null, r, a, e), [e]), a.getSnapshot !== t || i || null !== Ua && 1 & Ua.memoizedState.tag) {
                    if (r.flags |= 2048, Ro(9, {
                            destroy: void 0
                        }, yo.bind(null, r, a, n, t), null), null === ds) throw Error(l(349));
                    o || 127 & $a || go(r, t, n)
                }
                return n
            }

            function go(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = Ia.updateQueue) ? (t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, Ia.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function yo(e, t, n, r) {
                t.value = n, t.getSnapshot = r, bo(t) && ko(e)
            }

            function vo(e, t, n) {
                return n(function() {
                    bo(t) && ko(e)
                })
            }

            function bo(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !Yn(e, n)
                } catch (e) {
                    return !0
                }
            }

            function ko(e) {
                var t = Lr(e, 2);
                null !== t && qs(t, 0, 2)
            }

            function So(e) {
                var t = ao();
                if ("function" == typeof e) {
                    var n = e;
                    if (e = n(), Wa) {
                        ye(!0);
                        try {
                            n()
                        } finally {
                            ye(!1)
                        }
                    }
                }
                return t.memoizedState = t.baseState = e, t.queue = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: co,
                    lastRenderedState: e
                }, t
            }

            function wo(e, t, n, r) {
                return e.baseState = n, po(e, Ha, "function" == typeof r ? r : co)
            }

            function xo(e, t, n, r, a) {
                if (ci(e)) throw Error(l(485));
                if (null !== (e = t.action)) {
                    var o = {
                        payload: a,
                        action: e,
                        next: null,
                        isTransition: !0,
                        status: "pending",
                        value: null,
                        reason: null,
                        listeners: [],
                        then: function(e) {
                            o.listeners.push(e)
                        }
                    };
                    null !== A.T ? n(!0) : o.isTransition = !1, r(o), null === (n = t.pending) ? (o.next = t.pending = o, _o(t, o)) : (o.next = n.next, t.pending = n.next = o)
                }
            }

            function _o(e, t) {
                var n = t.action,
                    r = t.payload,
                    l = e.state;
                if (t.isTransition) {
                    var a = A.T,
                        o = {};
                    A.T = o;
                    try {
                        var i = n(l, r),
                            u = A.S;
                        null !== u && u(o, i), Eo(e, t, i)
                    } catch (n) {
                        Po(e, t, n)
                    } finally {
                        null !== a && null !== o.types && (a.types = o.types), A.T = a
                    }
                } else try {
                    Eo(e, t, a = n(l, r))
                } catch (n) {
                    Po(e, t, n)
                }
            }

            function Eo(e, t, n) {
                null !== n && "object" == typeof n && "function" == typeof n.then ? n.then(function(n) {
                    Co(e, t, n)
                }, function(n) {
                    return Po(e, t, n)
                }) : Co(e, t, n)
            }

            function Co(e, t, n) {
                t.status = "fulfilled", t.value = n, To(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, _o(e, n)))
            }

            function Po(e, t, n) {
                var r = e.pending;
                if (e.pending = null, null !== r) {
                    r = r.next;
                    do {
                        t.status = "rejected", t.reason = n, To(t), t = t.next
                    } while (t !== r)
                }
                e.action = null
            }

            function To(e) {
                e = e.listeners;
                for (var t = 0; t < e.length; t++)(0, e[t])()
            }

            function zo(e, t) {
                return t
            }

            function No(e, t) {
                if (sl) {
                    var n = ds.formState;
                    if (null !== n) {
                        e: {
                            var r = Ia;
                            if (sl) {
                                if (ul) {
                                    t: {
                                        for (var l = ul, a = fl; 8 !== l.nodeType;) {
                                            if (!a) {
                                                l = null;
                                                break t
                                            }
                                            if (null === (l = Af(l.nextSibling))) {
                                                l = null;
                                                break t
                                            }
                                        }
                                        l = "F!" === (a = l.data) || "F" === a ? l : null
                                    }
                                    if (l) {
                                        ul = Af(l.nextSibling), r = "F!" === l.data;
                                        break e
                                    }
                                }
                                pl(r)
                            }
                            r = !1
                        }
                        r && (t = n[0])
                    }
                }
                return (n = ao()).memoizedState = n.baseState = t, r = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: zo,
                    lastRenderedState: t
                }, n.queue = r, n = ii.bind(null, Ia, r), r.dispatch = n, r = So(!1), a = si.bind(null, Ia, !1, r.queue), l = {
                    state: t,
                    dispatch: null,
                    action: e,
                    pending: null
                }, (r = ao()).queue = l, n = xo.bind(null, Ia, l, a, n), l.dispatch = n, r.memoizedState = e, [t, n, !1]
            }

            function Lo(e) {
                return Ao(oo(), Ha, e)
            }

            function Ao(e, t, n) {
                if (t = po(e, t, zo)[0], e = fo(co)[0], "object" == typeof t && null !== t && "function" == typeof t.then) try {
                    var r = io(t)
                } catch (e) {
                    if (e === Gl) throw Xl;
                    throw e
                } else r = t;
                var l = (t = oo()).queue,
                    a = l.dispatch;
                return n !== t.memoizedState && (Ia.flags |= 2048, Ro(9, {
                    destroy: void 0
                }, Oo.bind(null, l, n), null)), [r, a, e]
            }

            function Oo(e, t) {
                e.action = t
            }

            function jo(e) {
                var t = oo(),
                    n = Ha;
                if (null !== n) return Ao(t, n, e);
                oo(), t = t.memoizedState;
                var r = (n = oo()).queue.dispatch;
                return n.memoizedState = e, [t, r, !1]
            }

            function Ro(e, t, n, r) {
                return e = {
                    tag: e,
                    create: n,
                    deps: r,
                    inst: t,
                    next: null
                }, null === (t = Ia.updateQueue) && (t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, Ia.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function Mo() {
                return oo().memoizedState
            }

            function Fo(e, t, n, r) {
                var l = ao();
                Ia.flags |= e, l.memoizedState = Ro(1 | t, {
                    destroy: void 0
                }, n, void 0 === r ? null : r)
            }

            function Do(e, t, n, r) {
                var l = oo();
                r = void 0 === r ? null : r;
                var a = l.memoizedState.inst;
                null !== Ha && null !== r && Xa(r, Ha.memoizedState.deps) ? l.memoizedState = Ro(t, a, n, r) : (Ia.flags |= e, l.memoizedState = Ro(1 | t, a, n, r))
            }

            function $o(e, t) {
                Fo(8390656, 8, e, t)
            }

            function Io(e, t) {
                Do(2048, 8, e, t)
            }

            function Ho(e) {
                var t = oo().memoizedState;
                return function(e) {
                        Ia.flags |= 4;
                        var t = Ia.updateQueue;
                        if (null === t) t = {
                            lastEffect: null,
                            events: null,
                            stores: null,
                            memoCache: null
                        }, Ia.updateQueue = t, t.events = [e];
                        else {
                            var n = t.events;
                            null === n ? t.events = [e] : n.push(e)
                        }
                    }({
                        ref: t,
                        nextImpl: e
                    }),
                    function() {
                        if (2 & fs) throw Error(l(440));
                        return t.impl.apply(void 0, arguments)
                    }
            }

            function Uo(e, t) {
                return Do(4, 2, e, t)
            }

            function Bo(e, t) {
                return Do(4, 4, e, t)
            }

            function Vo(e, t) {
                if ("function" == typeof t) {
                    e = e();
                    var n = t(e);
                    return function() {
                        "function" == typeof n ? n() : t(null)
                    }
                }
                if (null != t) return e = e(), t.current = e,
                    function() {
                        t.current = null
                    }
            }

            function Wo(e, t, n) {
                n = null != n ? n.concat([e]) : null, Do(4, 4, Vo.bind(null, t, e), n)
            }

            function qo() {}

            function Qo(e, t) {
                var n = oo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== t && Xa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Ko(e, t) {
                var n = oo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                if (null !== t && Xa(t, r[1])) return r[0];
                if (r = e(), Wa) {
                    ye(!0);
                    try {
                        e()
                    } finally {
                        ye(!1)
                    }
                }
                return n.memoizedState = [r, t], r
            }

            function Go(e, t, n) {
                return void 0 === n || 1073741824 & $a && !(261930 & ms) ? e.memoizedState = t : (e.memoizedState = n, e = Ws(), Ia.lanes |= e, ws |= e, n)
            }

            function Yo(e, t, n, r) {
                return Yn(n, t) ? n : null !== Ea.current ? (e = Go(e, n, r), Yn(e, t) || (Li = !0), e) : 42 & $a && (!(1073741824 & $a) || 261930 & ms) ? (e = Ws(), Ia.lanes |= e, ws |= e, t) : (Li = !0, e.memoizedState = n)
            }

            function Xo(e, t, n, r, l) {
                var a = O.p;
                O.p = 0 !== a && 8 > a ? a : 8;
                var o, i, u, s = A.T,
                    c = {};
                A.T = c, si(e, !1, t, n);
                try {
                    var f = l(),
                        d = A.S;
                    null !== d && d(c, f), null !== f && "object" == typeof f && "function" == typeof f.then ? ui(e, t, (o = r, i = [], u = {
                        status: "pending",
                        value: null,
                        reason: null,
                        then: function(e) {
                            i.push(e)
                        }
                    }, f.then(function() {
                        u.status = "fulfilled", u.value = o;
                        for (var e = 0; e < i.length; e++)(0, i[e])(o)
                    }, function(e) {
                        for (u.status = "rejected", u.reason = e, e = 0; e < i.length; e++)(0, i[e])(void 0)
                    }), u), Vs()) : ui(e, t, r, Vs())
                } catch (n) {
                    ui(e, t, {
                        then: function() {},
                        status: "rejected",
                        reason: n
                    }, Vs())
                } finally {
                    O.p = a, null !== s && null !== c.types && (s.types = c.types), A.T = s
                }
            }

            function Zo() {}

            function Jo(e, t, n, r) {
                if (5 !== e.tag) throw Error(l(476));
                var a = ei(e).queue;
                Xo(e, a, t, j, null === n ? Zo : function() {
                    return ti(e), n(r)
                })
            }

            function ei(e) {
                var t = e.memoizedState;
                if (null !== t) return t;
                var n = {};
                return (t = {
                    memoizedState: j,
                    baseState: j,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: co,
                        lastRenderedState: j
                    },
                    next: null
                }).next = {
                    memoizedState: n,
                    baseState: n,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: co,
                        lastRenderedState: n
                    },
                    next: null
                }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
            }

            function ti(e) {
                var t = ei(e);
                null === t.next && (t = e.alternate.memoizedState), ui(e, t.next.queue, {}, Vs())
            }

            function ni() {
                return Nl(sd)
            }

            function ri() {
                return oo().memoizedState
            }

            function li() {
                return oo().memoizedState
            }

            function ai(e) {
                for (var t = e.return; null !== t;) {
                    switch (t.tag) {
                        case 24:
                        case 3:
                            var n = Vs(),
                                r = ya(t, e = ga(n), n);
                            return null !== r && (qs(r, 0, n), va(r, t, n)), t = {
                                cache: Fl()
                            }, void(e.payload = t)
                    }
                    t = t.return
                }
            }

            function oi(e, t, n) {
                var r = Vs();
                n = {
                    lane: r,
                    revertLane: 0,
                    gesture: null,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, ci(e) ? fi(t, n) : null !== (n = Nr(e, t, n, r)) && (qs(n, 0, r), di(n, t, r))
            }

            function ii(e, t, n) {
                ui(e, t, n, Vs())
            }

            function ui(e, t, n, r) {
                var l = {
                    lane: r,
                    revertLane: 0,
                    gesture: null,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (ci(e)) fi(t, l);
                else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                        var o = t.lastRenderedState,
                            i = a(o, n);
                        if (l.hasEagerState = !0, l.eagerState = i, Yn(i, o)) return zr(e, t, l, 0), null === ds && Tr(), !1
                    } catch (e) {}
                    if (null !== (n = Nr(e, t, l, r))) return qs(n, 0, r), di(n, t, r), !0
                }
                return !1
            }

            function si(e, t, n, r) {
                if (r = {
                        lane: 2,
                        revertLane: Uc(),
                        gesture: null,
                        action: r,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, ci(e)) {
                    if (t) throw Error(l(479))
                } else null !== (t = Nr(e, n, r, 2)) && qs(t, 0, 2)
            }

            function ci(e) {
                var t = e.alternate;
                return e === Ia || null !== t && t === Ia
            }

            function fi(e, t) {
                Va = Ba = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function di(e, t, n) {
                if (4194048 & n) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, Ae(e, n)
                }
            }
            var pi = {
                readContext: Nl,
                use: uo,
                useCallback: Ya,
                useContext: Ya,
                useEffect: Ya,
                useImperativeHandle: Ya,
                useLayoutEffect: Ya,
                useInsertionEffect: Ya,
                useMemo: Ya,
                useReducer: Ya,
                useRef: Ya,
                useState: Ya,
                useDebugValue: Ya,
                useDeferredValue: Ya,
                useTransition: Ya,
                useSyncExternalStore: Ya,
                useId: Ya,
                useHostTransitionStatus: Ya,
                useFormState: Ya,
                useActionState: Ya,
                useOptimistic: Ya,
                useMemoCache: Ya,
                useCacheRefresh: Ya
            };
            pi.useEffectEvent = Ya;
            var mi = {
                    readContext: Nl,
                    use: uo,
                    useCallback: function(e, t) {
                        return ao().memoizedState = [e, void 0 === t ? null : t], e
                    },
                    useContext: Nl,
                    useEffect: $o,
                    useImperativeHandle: function(e, t, n) {
                        n = null != n ? n.concat([e]) : null, Fo(4194308, 4, Vo.bind(null, t, e), n)
                    },
                    useLayoutEffect: function(e, t) {
                        return Fo(4194308, 4, e, t)
                    },
                    useInsertionEffect: function(e, t) {
                        Fo(4, 2, e, t)
                    },
                    useMemo: function(e, t) {
                        var n = ao();
                        t = void 0 === t ? null : t;
                        var r = e();
                        if (Wa) {
                            ye(!0);
                            try {
                                e()
                            } finally {
                                ye(!1)
                            }
                        }
                        return n.memoizedState = [r, t], r
                    },
                    useReducer: function(e, t, n) {
                        var r = ao();
                        if (void 0 !== n) {
                            var l = n(t);
                            if (Wa) {
                                ye(!0);
                                try {
                                    n(t)
                                } finally {
                                    ye(!1)
                                }
                            }
                        } else l = t;
                        return r.memoizedState = r.baseState = l, e = {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: e,
                            lastRenderedState: l
                        }, r.queue = e, e = e.dispatch = oi.bind(null, Ia, e), [r.memoizedState, e]
                    },
                    useRef: function(e) {
                        return e = {
                            current: e
                        }, ao().memoizedState = e
                    },
                    useState: function(e) {
                        var t = (e = So(e)).queue,
                            n = ii.bind(null, Ia, t);
                        return t.dispatch = n, [e.memoizedState, n]
                    },
                    useDebugValue: qo,
                    useDeferredValue: function(e, t) {
                        return Go(ao(), e, t)
                    },
                    useTransition: function() {
                        var e = So(!1);
                        return e = Xo.bind(null, Ia, e.queue, !0, !1), ao().memoizedState = e, [!1, e]
                    },
                    useSyncExternalStore: function(e, t, n) {
                        var r = Ia,
                            a = ao();
                        if (sl) {
                            if (void 0 === n) throw Error(l(407));
                            n = n()
                        } else {
                            if (n = t(), null === ds) throw Error(l(349));
                            127 & ms || go(r, t, n)
                        }
                        a.memoizedState = n;
                        var o = {
                            value: n,
                            getSnapshot: t
                        };
                        return a.queue = o, $o(vo.bind(null, r, o, e), [e]), r.flags |= 2048, Ro(9, {
                            destroy: void 0
                        }, yo.bind(null, r, o, n, t), null), n
                    },
                    useId: function() {
                        var e = ao(),
                            t = ds.identifierPrefix;
                        if (sl) {
                            var n = tl;
                            t = "_" + t + "R_" + (n = (el & ~(1 << 32 - ve(el) - 1)).toString(32) + n), 0 < (n = qa++) && (t += "H" + n.toString(32)), t += "_"
                        } else t = "_" + t + "r_" + (n = Ga++).toString(32) + "_";
                        return e.memoizedState = t
                    },
                    useHostTransitionStatus: ni,
                    useFormState: No,
                    useActionState: No,
                    useOptimistic: function(e) {
                        var t = ao();
                        t.memoizedState = t.baseState = e;
                        var n = {
                            pending: null,
                            lanes: 0,
                            dispatch: null,
                            lastRenderedReducer: null,
                            lastRenderedState: null
                        };
                        return t.queue = n, t = si.bind(null, Ia, !0, n), n.dispatch = t, [e, t]
                    },
                    useMemoCache: so,
                    useCacheRefresh: function() {
                        return ao().memoizedState = ai.bind(null, Ia)
                    },
                    useEffectEvent: function(e) {
                        var t = ao(),
                            n = {
                                impl: e
                            };
                        return t.memoizedState = n,
                            function() {
                                if (2 & fs) throw Error(l(440));
                                return n.impl.apply(void 0, arguments)
                            }
                    }
                },
                hi = {
                    readContext: Nl,
                    use: uo,
                    useCallback: Qo,
                    useContext: Nl,
                    useEffect: Io,
                    useImperativeHandle: Wo,
                    useInsertionEffect: Uo,
                    useLayoutEffect: Bo,
                    useMemo: Ko,
                    useReducer: fo,
                    useRef: Mo,
                    useState: function() {
                        return fo(co)
                    },
                    useDebugValue: qo,
                    useDeferredValue: function(e, t) {
                        return Yo(oo(), Ha.memoizedState, e, t)
                    },
                    useTransition: function() {
                        var e = fo(co)[0],
                            t = oo().memoizedState;
                        return ["boolean" == typeof e ? e : io(e), t]
                    },
                    useSyncExternalStore: ho,
                    useId: ri,
                    useHostTransitionStatus: ni,
                    useFormState: Lo,
                    useActionState: Lo,
                    useOptimistic: function(e, t) {
                        return wo(oo(), 0, e, t)
                    },
                    useMemoCache: so,
                    useCacheRefresh: li
                };
            hi.useEffectEvent = Ho;
            var gi = {
                readContext: Nl,
                use: uo,
                useCallback: Qo,
                useContext: Nl,
                useEffect: Io,
                useImperativeHandle: Wo,
                useInsertionEffect: Uo,
                useLayoutEffect: Bo,
                useMemo: Ko,
                useReducer: mo,
                useRef: Mo,
                useState: function() {
                    return mo(co)
                },
                useDebugValue: qo,
                useDeferredValue: function(e, t) {
                    var n = oo();
                    return null === Ha ? Go(n, e, t) : Yo(n, Ha.memoizedState, e, t)
                },
                useTransition: function() {
                    var e = mo(co)[0],
                        t = oo().memoizedState;
                    return ["boolean" == typeof e ? e : io(e), t]
                },
                useSyncExternalStore: ho,
                useId: ri,
                useHostTransitionStatus: ni,
                useFormState: jo,
                useActionState: jo,
                useOptimistic: function(e, t) {
                    var n = oo();
                    return null !== Ha ? wo(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch])
                },
                useMemoCache: so,
                useCacheRefresh: li
            };

            function yi(e, t, n, r) {
                n = null == (n = n(r, t = e.memoizedState)) ? t : f({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }
            gi.useEffectEvent = Ho;
            var vi = {
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Vs(),
                        l = ga(r);
                    l.payload = t, null != n && (l.callback = n), null !== (t = ya(e, l, r)) && (qs(t, 0, r), va(t, e, r))
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = Vs(),
                        l = ga(r);
                    l.tag = 1, l.payload = t, null != n && (l.callback = n), null !== (t = ya(e, l, r)) && (qs(t, 0, r), va(t, e, r))
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = Vs(),
                        r = ga(n);
                    r.tag = 2, null != t && (r.callback = t), null !== (t = ya(e, r, n)) && (qs(t, 0, n), va(t, e, n))
                }
            };

            function bi(e, t, n, r, l, a, o) {
                return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, o) : !(t.prototype && t.prototype.isPureReactComponent && Xn(n, r) && Xn(l, a))
            }

            function ki(e, t, n, r) {
                e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vi.enqueueReplaceState(t, t.state, null)
            }

            function Si(e, t) {
                var n = t;
                if ("ref" in t)
                    for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
                if (e = e.defaultProps)
                    for (var l in n === t && (n = f({}, n)), e) void 0 === n[l] && (n[l] = e[l]);
                return n
            }

            function wi(e) {
                _r(e)
            }

            function xi(e) {
                console.error(e)
            }

            function _i(e) {
                _r(e)
            }

            function Ei(e, t) {
                try {
                    (0, e.onUncaughtError)(t.value, {
                        componentStack: t.stack
                    })
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    })
                }
            }

            function Ci(e, t, n) {
                try {
                    (0, e.onCaughtError)(n.value, {
                        componentStack: n.stack,
                        errorBoundary: 1 === t.tag ? t.stateNode : null
                    })
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    })
                }
            }

            function Pi(e, t, n) {
                return (n = ga(n)).tag = 3, n.payload = {
                    element: null
                }, n.callback = function() {
                    Ei(e, t)
                }, n
            }

            function Ti(e) {
                return (e = ga(e)).tag = 3, e
            }

            function zi(e, t, n, r) {
                var l = n.type.getDerivedStateFromError;
                if ("function" == typeof l) {
                    var a = r.value;
                    e.payload = function() {
                        return l(a)
                    }, e.callback = function() {
                        Ci(t, n, r)
                    }
                }
                var o = n.stateNode;
                null !== o && "function" == typeof o.componentDidCatch && (e.callback = function() {
                    Ci(t, n, r), "function" != typeof l && (null === js ? js = new Set([this]) : js.add(this));
                    var e = r.stack;
                    this.componentDidCatch(r.value, {
                        componentStack: null !== e ? e : ""
                    })
                })
            }
            var Ni = Error(l(461)),
                Li = !1;

            function Ai(e, t, n, r) {
                t.child = null === e ? da(t, null, n, r) : fa(t, e.child, n, r)
            }

            function Oi(e, t, n, r, l) {
                n = n.render;
                var a = t.ref;
                if ("ref" in r) {
                    var o = {};
                    for (var i in r) "ref" !== i && (o[i] = r[i])
                } else o = r;
                return zl(t), r = Za(e, t, n, o, a, l), i = no(), null === e || Li ? (sl && i && ll(t), t.flags |= 1, Ai(e, t, r, l), t.child) : (ro(e, t, l), nu(e, t, l))
            }

            function ji(e, t, n, r, l) {
                if (null === e) {
                    var a = n.type;
                    return "function" != typeof a || Fr(a) || void 0 !== a.defaultProps || null !== n.compare ? ((e = Ir(n.type, null, r, t, t.mode, l)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Ri(e, t, a, r, l))
                }
                if (a = e.child, !ru(e, l)) {
                    var o = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : Xn)(o, r) && e.ref === t.ref) return nu(e, t, l)
                }
                return t.flags |= 1, (e = Dr(a, r)).ref = t.ref, e.return = t, t.child = e
            }

            function Ri(e, t, n, r, l) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (Xn(a, r) && e.ref === t.ref) {
                        if (Li = !1, t.pendingProps = r = a, !ru(e, l)) return t.lanes = e.lanes, nu(e, t, l);
                        131072 & e.flags && (Li = !0)
                    }
                }
                return Ui(e, t, n, r, l)
            }

            function Mi(e, t, n, r) {
                var l = r.children,
                    a = null !== e ? e.memoizedState : null;
                if (null === e && null === t.stateNode && (t.stateNode = {
                        _visibility: 1,
                        _pendingMarkers: null,
                        _retryCache: null,
                        _transitions: null
                    }), "hidden" === r.mode) {
                    if (128 & t.flags) {
                        if (a = null !== a ? a.baseLanes | n : n, null !== e) {
                            for (r = t.child = e.child, l = 0; null !== r;) l = l | r.lanes | r.childLanes, r = r.sibling;
                            r = l & ~a
                        } else r = 0, t.child = null;
                        return Di(e, t, a, n, r)
                    }
                    if (!(536870912 & n)) return r = t.lanes = 536870912, Di(e, t, null !== a ? a.baseLanes | n : n, n, r);
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    }, null !== e && Ql(0, null !== a ? a.cachePool : null), null !== a ? Pa(t, a) : Ta(), ja(t)
                } else null !== a ? (Ql(0, a.cachePool), Pa(t, a), Ra(), t.memoizedState = null) : (null !== e && Ql(0, null), Ta(), Ra());
                return Ai(e, t, l, n), t.child
            }

            function Fi(e, t) {
                return null !== e && 22 === e.tag || null !== t.stateNode || (t.stateNode = {
                    _visibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null
                }), t.sibling
            }

            function Di(e, t, n, r, l) {
                var a = ql();
                return a = null === a ? null : {
                    parent: Ml._currentValue,
                    pool: a
                }, t.memoizedState = {
                    baseLanes: n,
                    cachePool: a
                }, null !== e && Ql(0, null), Ta(), ja(t), null !== e && Pl(e, t, r, !0), t.childLanes = l, null
            }

            function $i(e, t) {
                return (t = Xi({
                    mode: t.mode,
                    children: t.children
                }, e.mode)).ref = e.ref, e.child = t, t.return = e, t
            }

            function Ii(e, t, n) {
                return fa(t, e.child, null, n), (e = $i(t, t.pendingProps)).flags |= 2, Ma(t), t.memoizedState = null, e
            }

            function Hi(e, t) {
                var n = t.ref;
                if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
                else {
                    if ("function" != typeof n && "object" != typeof n) throw Error(l(284));
                    null !== e && e.ref === n || (t.flags |= 4194816)
                }
            }

            function Ui(e, t, n, r, l) {
                return zl(t), n = Za(e, t, n, r, void 0, l), r = no(), null === e || Li ? (sl && r && ll(t), t.flags |= 1, Ai(e, t, n, l), t.child) : (ro(e, t, l), nu(e, t, l))
            }

            function Bi(e, t, n, r, l, a) {
                return zl(t), t.updateQueue = null, n = eo(t, r, n, l), Ja(e), r = no(), null === e || Li ? (sl && r && ll(t), t.flags |= 1, Ai(e, t, n, a), t.child) : (ro(e, t, a), nu(e, t, a))
            }

            function Vi(e, t, n, r, l) {
                if (zl(t), null === t.stateNode) {
                    var a = jr,
                        o = n.contextType;
                    "object" == typeof o && null !== o && (a = Nl(o)), a = new n(r, a), t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, a.updater = vi, t.stateNode = a, a._reactInternals = t, (a = t.stateNode).props = r, a.state = t.memoizedState, a.refs = {}, ma(t), o = n.contextType, a.context = "object" == typeof o && null !== o ? Nl(o) : jr, a.state = t.memoizedState, "function" == typeof(o = n.getDerivedStateFromProps) && (yi(t, n, o, r), a.state = t.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (o = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), o !== a.state && vi.enqueueReplaceState(a, a.state, null), wa(t, r, a, l), Sa(), a.state = t.memoizedState), "function" == typeof a.componentDidMount && (t.flags |= 4194308), r = !0
                } else if (null === e) {
                    a = t.stateNode;
                    var i = t.memoizedProps,
                        u = Si(n, i);
                    a.props = u;
                    var s = a.context,
                        c = n.contextType;
                    o = jr, "object" == typeof c && null !== c && (o = Nl(c));
                    var f = n.getDerivedStateFromProps;
                    c = "function" == typeof f || "function" == typeof a.getSnapshotBeforeUpdate, i = t.pendingProps !== i, c || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (i || s !== o) && ki(t, a, r, o), pa = !1;
                    var d = t.memoizedState;
                    a.state = d, wa(t, r, a, l), Sa(), s = t.memoizedState, i || d !== s || pa ? ("function" == typeof f && (yi(t, n, f, r), s = t.memoizedState), (u = pa || bi(t, n, u, r, d, s, o)) ? (c || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), a.props = r, a.state = s, a.context = o, r = u) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    a = t.stateNode, ha(e, t), c = Si(n, o = t.memoizedProps), a.props = c, f = t.pendingProps, d = a.context, s = n.contextType, u = jr, "object" == typeof s && null !== s && (u = Nl(s)), (s = "function" == typeof(i = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (o !== f || d !== u) && ki(t, a, r, u), pa = !1, d = t.memoizedState, a.state = d, wa(t, r, a, l), Sa();
                    var p = t.memoizedState;
                    o !== f || d !== p || pa || null !== e && null !== e.dependencies && Tl(e.dependencies) ? ("function" == typeof i && (yi(t, n, i, r), p = t.memoizedState), (c = pa || bi(t, n, c, r, d, p, u) || null !== e && null !== e.dependencies && Tl(e.dependencies)) ? (s || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, u), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, u)), "function" == typeof a.componentDidUpdate && (t.flags |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = u, r = c) : ("function" != typeof a.componentDidUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || o === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return a = r, Hi(e, t), r = !!(128 & t.flags), a || r ? (a = t.stateNode, n = r && "function" != typeof n.getDerivedStateFromError ? null : a.render(), t.flags |= 1, null !== e && r ? (t.child = fa(t, e.child, null, l), t.child = fa(t, null, n, l)) : Ai(e, t, n, l), t.memoizedState = a.state, e = t.child) : e = nu(e, t, l), e
            }

            function Wi(e, t, n, r) {
                return yl(), t.flags |= 256, Ai(e, t, n, r), t.child
            }
            var qi = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0,
                hydrationErrors: null
            };

            function Qi(e) {
                return {
                    baseLanes: e,
                    cachePool: Kl()
                }
            }

            function Ki(e, t, n) {
                return e = null !== e ? e.childLanes & ~n : 0, t && (e |= Es), e
            }

            function Gi(e, t, n) {
                var r, a = t.pendingProps,
                    o = !1,
                    i = !!(128 & t.flags);
                if ((r = i) || (r = (null === e || null !== e.memoizedState) && !!(2 & Fa.current)), r && (o = !0, t.flags &= -129), r = !!(32 & t.flags), t.flags &= -33, null === e) {
                    if (sl) {
                        if (o ? Aa(t) : Ra(), (e = ul) ? null !== (e = null !== (e = zf(e, fl)) && "&" !== e.data ? e : null) && (t.memoizedState = {
                                dehydrated: e,
                                treeContext: null !== Jr ? {
                                    id: el,
                                    overflow: tl
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, (n = Br(e)).return = t, t.child = n, il = t, ul = null) : e = null, null === e) throw pl(t);
                        return Lf(e) ? t.lanes = 32 : t.lanes = 536870912, null
                    }
                    var u = a.children;
                    return a = a.fallback, o ? (Ra(), u = Xi({
                        mode: "hidden",
                        children: u
                    }, o = t.mode), a = Hr(a, o, n, null), u.return = t, a.return = t, u.sibling = a, t.child = u, (a = t.child).memoizedState = Qi(n), a.childLanes = Ki(e, r, n), t.memoizedState = qi, Fi(null, a)) : (Aa(t), Yi(t, u))
                }
                var s = e.memoizedState;
                if (null !== s && null !== (u = s.dehydrated)) {
                    if (i) 256 & t.flags ? (Aa(t), t.flags &= -257, t = Zi(e, t, n)) : null !== t.memoizedState ? (Ra(), t.child = e.child, t.flags |= 128, t = null) : (Ra(), u = a.fallback, o = t.mode, a = Xi({
                        mode: "visible",
                        children: a.children
                    }, o), (u = Hr(u, o, n, null)).flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, fa(t, e.child, null, n), (a = t.child).memoizedState = Qi(n), a.childLanes = Ki(e, r, n), t.memoizedState = qi, t = Fi(null, a));
                    else if (Aa(t), Lf(u)) {
                        if (r = u.nextSibling && u.nextSibling.dataset) var c = r.dgst;
                        r = c, (a = Error(l(419))).stack = "", a.digest = r, bl({
                            value: a,
                            source: null,
                            stack: null
                        }), t = Zi(e, t, n)
                    } else if (Li || Pl(e, t, n, !1), r = 0 !== (n & e.childLanes), Li || r) {
                        if (null !== (r = ds) && 0 !== (a = Oe(r, n)) && a !== s.retryLane) throw s.retryLane = a, Lr(e, a), qs(r, 0, a), Ni;
                        Nf(u) || lc(), t = Zi(e, t, n)
                    } else Nf(u) ? (t.flags |= 192, t.child = e.child, t = null) : (e = s.treeContext, ul = Af(u.nextSibling), il = t, sl = !0, cl = null, fl = !1, null !== e && ol(t, e), (t = Yi(t, a.children)).flags |= 4096);
                    return t
                }
                return o ? (Ra(), u = a.fallback, o = t.mode, c = (s = e.child).sibling, (a = Dr(s, {
                    mode: "hidden",
                    children: a.children
                })).subtreeFlags = 65011712 & s.subtreeFlags, null !== c ? u = Dr(c, u) : (u = Hr(u, o, n, null)).flags |= 2, u.return = t, a.return = t, a.sibling = u, t.child = a, Fi(null, a), a = t.child, null === (u = e.child.memoizedState) ? u = Qi(n) : (null !== (o = u.cachePool) ? (s = Ml._currentValue, o = o.parent !== s ? {
                    parent: s,
                    pool: s
                } : o) : o = Kl(), u = {
                    baseLanes: u.baseLanes | n,
                    cachePool: o
                }), a.memoizedState = u, a.childLanes = Ki(e, r, n), t.memoizedState = qi, Fi(e.child, a)) : (Aa(t), e = (n = e.child).sibling, (n = Dr(n, {
                    mode: "visible",
                    children: a.children
                })).return = t, n.sibling = null, null !== e && (null === (r = t.deletions) ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n)
            }

            function Yi(e, t) {
                return (t = Xi({
                    mode: "visible",
                    children: t
                }, e.mode)).return = e, e.child = t
            }

            function Xi(e, t) {
                return (e = Mr(22, e, null, t)).lanes = 0, e
            }

            function Zi(e, t, n) {
                return fa(t, e.child, null, n), (e = Yi(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function Ji(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), El(e.return, t, n)
            }

            function eu(e, t, n, r, l, a) {
                var o = e.memoizedState;
                null === o ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: l,
                    treeForkCount: a
                } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l, o.treeForkCount = a)
            }

            function tu(e, t, n) {
                var r = t.pendingProps,
                    l = r.revealOrder,
                    a = r.tail;
                r = r.children;
                var o = Fa.current,
                    i = !!(2 & o);
                if (i ? (o = 1 & o | 2, t.flags |= 128) : o &= 1, $(Fa, o), Ai(e, t, r, n), r = sl ? Yr : 0, !i && null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
                    if (13 === e.tag) null !== e.memoizedState && Ji(e, n, t);
                    else if (19 === e.tag) Ji(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                switch (l) {
                    case "forwards":
                        for (n = t.child, l = null; null !== n;) null !== (e = n.alternate) && null === Da(e) && (l = n), n = n.sibling;
                        null === (n = l) ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), eu(t, !1, l, n, a, r);
                        break;
                    case "backwards":
                    case "unstable_legacy-backwards":
                        for (n = null, l = t.child, t.child = null; null !== l;) {
                            if (null !== (e = l.alternate) && null === Da(e)) {
                                t.child = l;
                                break
                            }
                            e = l.sibling, l.sibling = n, n = l, l = e
                        }
                        eu(t, !0, n, null, a, r);
                        break;
                    case "together":
                        eu(t, !1, null, null, void 0, r);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function nu(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), ws |= t.lanes, 0 === (n & t.childLanes)) {
                    if (null === e) return null;
                    if (Pl(e, t, n, !1), 0 === (n & t.childLanes)) return null
                }
                if (null !== e && t.child !== e.child) throw Error(l(153));
                if (null !== t.child) {
                    for (n = Dr(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Dr(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function ru(e, t) {
                return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Tl(e))
            }

            function lu(e, t, n) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps) Li = !0;
                    else {
                        if (!(ru(e, n) || 128 & t.flags)) return Li = !1,
                            function(e, t, n) {
                                switch (t.tag) {
                                    case 3:
                                        q(t, t.stateNode.containerInfo), xl(0, Ml, e.memoizedState.cache), yl();
                                        break;
                                    case 27:
                                    case 5:
                                        K(t);
                                        break;
                                    case 4:
                                        q(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        xl(0, t.type, t.memoizedProps.value);
                                        break;
                                    case 31:
                                        if (null !== t.memoizedState) return t.flags |= 128, Oa(t), null;
                                        break;
                                    case 13:
                                        var r = t.memoizedState;
                                        if (null !== r) return null !== r.dehydrated ? (Aa(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Gi(e, t, n) : (Aa(t), null !== (e = nu(e, t, n)) ? e.sibling : null);
                                        Aa(t);
                                        break;
                                    case 19:
                                        var l = !!(128 & e.flags);
                                        if ((r = 0 !== (n & t.childLanes)) || (Pl(e, t, n, !1), r = 0 !== (n & t.childLanes)), l) {
                                            if (r) return tu(e, t, n);
                                            t.flags |= 128
                                        }
                                        if (null !== (l = t.memoizedState) && (l.rendering = null, l.tail = null, l.lastEffect = null), $(Fa, Fa.current), r) break;
                                        return null;
                                    case 22:
                                        return t.lanes = 0, Mi(e, t, n, t.pendingProps);
                                    case 24:
                                        xl(0, Ml, e.memoizedState.cache)
                                }
                                return nu(e, t, n)
                            }(e, t, n);
                        Li = !!(131072 & e.flags)
                    }
                else Li = !1, sl && 1048576 & t.flags && rl(t, Yr, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 16:
                        e: {
                            var r = t.pendingProps;
                            if (e = ta(t.elementType), t.type = e, "function" != typeof e) {
                                if (null != e) {
                                    var a = e.$$typeof;
                                    if (a === k) {
                                        t.tag = 11, t = Oi(null, t, e, r, n);
                                        break e
                                    }
                                    if (a === x) {
                                        t.tag = 14, t = ji(null, t, e, r, n);
                                        break e
                                    }
                                }
                                throw t = N(e) || e, Error(l(306, t, ""))
                            }
                            Fr(e) ? (r = Si(e, r), t.tag = 1, t = Vi(null, t, e, r, n)) : (t.tag = 0, t = Ui(null, t, e, r, n))
                        }
                        return t;
                    case 0:
                        return Ui(e, t, t.type, t.pendingProps, n);
                    case 1:
                        return Vi(e, t, r = t.type, a = Si(r, t.pendingProps), n);
                    case 3:
                        e: {
                            if (q(t, t.stateNode.containerInfo), null === e) throw Error(l(387));r = t.pendingProps;
                            var o = t.memoizedState;a = o.element,
                            ha(e, t),
                            wa(t, r, null, n);
                            var i = t.memoizedState;
                            if (r = i.cache, xl(0, Ml, r), r !== o.cache && Cl(t, [Ml], n, !0), Sa(), r = i.element, o.isDehydrated) {
                                if (o = {
                                        element: r,
                                        isDehydrated: !1,
                                        cache: i.cache
                                    }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                                    t = Wi(e, t, r, n);
                                    break e
                                }
                                if (r !== a) {
                                    bl(a = qr(Error(l(424)), t)), t = Wi(e, t, r, n);
                                    break e
                                }
                                for (e = 9 === (e = t.stateNode.containerInfo).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, ul = Af(e.firstChild), il = t, sl = !0, cl = null, fl = !0, n = da(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (yl(), r === a) {
                                    t = nu(e, t, n);
                                    break e
                                }
                                Ai(e, t, r, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 26:
                        return Hi(e, t), null === e ? (n = Vf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : sl || (n = t.type, e = t.pendingProps, (r = hf(V.current).createElement(n))[$e] = t, r[Ie] = e, ff(r, n, e), Ze(r), t.stateNode = r) : t.memoizedState = Vf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                    case 27:
                        return K(t), null === e && sl && (r = t.stateNode = Mf(t.type, t.pendingProps, V.current), il = t, fl = !0, a = ul, Ef(t.type) ? (Of = a, ul = Af(r.firstChild)) : ul = a), Ai(e, t, t.pendingProps.children, n), Hi(e, t), null === e && (t.flags |= 4194304), t.child;
                    case 5:
                        return null === e && sl && ((a = r = ul) && (null !== (r = function(e, t, n, r) {
                            for (; 1 === e.nodeType;) {
                                var l = n;
                                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                                    if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                                } else if (r) {
                                    if (!e[qe]) switch (t) {
                                        case "meta":
                                            if (!e.hasAttribute("itemprop")) break;
                                            return e;
                                        case "link":
                                            if ("stylesheet" === (a = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                            if (a !== l.rel || e.getAttribute("href") !== (null == l.href || "" === l.href ? null : l.href) || e.getAttribute("crossorigin") !== (null == l.crossOrigin ? null : l.crossOrigin) || e.getAttribute("title") !== (null == l.title ? null : l.title)) break;
                                            return e;
                                        case "style":
                                            if (e.hasAttribute("data-precedence")) break;
                                            return e;
                                        case "script":
                                            if (((a = e.getAttribute("src")) !== (null == l.src ? null : l.src) || e.getAttribute("type") !== (null == l.type ? null : l.type) || e.getAttribute("crossorigin") !== (null == l.crossOrigin ? null : l.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                            return e;
                                        default:
                                            return e
                                    }
                                } else {
                                    if ("input" !== t || "hidden" !== e.type) return e;
                                    var a = null == l.name ? null : "" + l.name;
                                    if ("hidden" === l.type && e.getAttribute("name") === a) return e
                                }
                                if (null === (e = Af(e.nextSibling))) break
                            }
                            return null
                        }(r, t.type, t.pendingProps, fl)) ? (t.stateNode = r, il = t, ul = Af(r.firstChild), fl = !1, a = !0) : a = !1), a || pl(t)), K(t), a = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, r = o.children, vf(a, o) ? r = null : null !== i && vf(a, i) && (t.flags |= 32), null !== t.memoizedState && (a = Za(e, t, to, null, null, n), sd._currentValue = a), Hi(e, t), Ai(e, t, r, n), t.child;
                    case 6:
                        return null === e && sl && ((e = n = ul) && (null !== (n = function(e, t, n) {
                            if ("" === t) return null;
                            for (; 3 !== e.nodeType;) {
                                if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                                if (null === (e = Af(e.nextSibling))) return null
                            }
                            return e
                        }(n, t.pendingProps, fl)) ? (t.stateNode = n, il = t, ul = null, e = !0) : e = !1), e || pl(t)), null;
                    case 13:
                        return Gi(e, t, n);
                    case 4:
                        return q(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = fa(t, null, r, n) : Ai(e, t, r, n), t.child;
                    case 11:
                        return Oi(e, t, t.type, t.pendingProps, n);
                    case 7:
                        return Ai(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Ai(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        return r = t.pendingProps, xl(0, t.type, r.value), Ai(e, t, r.children, n), t.child;
                    case 9:
                        return a = t.type._context, r = t.pendingProps.children, zl(t), r = r(a = Nl(a)), t.flags |= 1, Ai(e, t, r, n), t.child;
                    case 14:
                        return ji(e, t, t.type, t.pendingProps, n);
                    case 15:
                        return Ri(e, t, t.type, t.pendingProps, n);
                    case 19:
                        return tu(e, t, n);
                    case 31:
                        return function(e, t, n) {
                            var r = t.pendingProps,
                                a = !!(128 & t.flags);
                            if (t.flags &= -129, null === e) {
                                if (sl) {
                                    if ("hidden" === r.mode) return e = $i(t, r), t.lanes = 536870912, Fi(null, e);
                                    if (Oa(t), (e = ul) ? null !== (e = null !== (e = zf(e, fl)) && "&" === e.data ? e : null) && (t.memoizedState = {
                                            dehydrated: e,
                                            treeContext: null !== Jr ? {
                                                id: el,
                                                overflow: tl
                                            } : null,
                                            retryLane: 536870912,
                                            hydrationErrors: null
                                        }, (n = Br(e)).return = t, t.child = n, il = t, ul = null) : e = null, null === e) throw pl(t);
                                    return t.lanes = 536870912, null
                                }
                                return $i(t, r)
                            }
                            var o = e.memoizedState;
                            if (null !== o) {
                                var i = o.dehydrated;
                                if (Oa(t), a)
                                    if (256 & t.flags) t.flags &= -257, t = Ii(e, t, n);
                                    else {
                                        if (null === t.memoizedState) throw Error(l(558));
                                        t.child = e.child, t.flags |= 128, t = null
                                    }
                                else if (Li || Pl(e, t, n, !1), a = 0 !== (n & e.childLanes), Li || a) {
                                    if (null !== (r = ds) && 0 !== (i = Oe(r, n)) && i !== o.retryLane) throw o.retryLane = i, Lr(e, i), qs(r, 0, i), Ni;
                                    lc(), t = Ii(e, t, n)
                                } else e = o.treeContext, ul = Af(i.nextSibling), il = t, sl = !0, cl = null, fl = !1, null !== e && ol(t, e), (t = $i(t, r)).flags |= 4096;
                                return t
                            }
                            return (e = Dr(e.child, {
                                mode: r.mode,
                                children: r.children
                            })).ref = t.ref, t.child = e, e.return = t, e
                        }(e, t, n);
                    case 22:
                        return Mi(e, t, n, t.pendingProps);
                    case 24:
                        return zl(t), r = Nl(Ml), null === e ? (null === (a = ql()) && (a = ds, o = Fl(), a.pooledCache = o, o.refCount++, null !== o && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
                            parent: r,
                            cache: a
                        }, ma(t), xl(0, Ml, a)) : (0 !== (e.lanes & n) && (ha(e, t), wa(t, null, null, n), Sa()), a = e.memoizedState, o = t.memoizedState, a.parent !== r ? (a = {
                            parent: r,
                            cache: r
                        }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), xl(0, Ml, r)) : (r = o.cache, xl(0, Ml, r), r !== a.cache && Cl(t, [Ml], n, !0))), Ai(e, t, t.pendingProps.children, n), t.child;
                    case 29:
                        throw t.pendingProps
                }
                throw Error(l(156, t.tag))
            }

            function au(e) {
                e.flags |= 4
            }

            function ou(e, t, n, r, l) {
                if ((t = !!(32 & e.mode)) && (t = !1), t) {
                    if (e.flags |= 16777216, (335544128 & l) === l)
                        if (e.stateNode.complete) e.flags |= 8192;
                        else {
                            if (!tc()) throw na = Zl, Yl;
                            e.flags |= 8192
                        }
                } else e.flags &= -16777217
            }

            function iu(e, t) {
                if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
                else if (e.flags |= 16777216, !rd(t)) {
                    if (!tc()) throw na = Zl, Yl;
                    e.flags |= 8192
                }
            }

            function uu(e, t) {
                null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? Te() : 536870912, e.lanes |= t, Cs |= t)
            }

            function su(e, t) {
                if (!sl) switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function cu(e) {
                var t = null !== e.alternate && e.alternate.child === e.child,
                    n = 0,
                    r = 0;
                if (t)
                    for (var l = e.child; null !== l;) n |= l.lanes | l.childLanes, r |= 65011712 & l.subtreeFlags, r |= 65011712 & l.flags, l.return = e, l = l.sibling;
                else
                    for (l = e.child; null !== l;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function fu(e, t, n) {
                var r = t.pendingProps;
                switch (al(t), t.tag) {
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                    case 1:
                        return cu(t), null;
                    case 3:
                        return n = t.stateNode, r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), _l(Ml), Q(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (gl(t) ? au(t) : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, vl())), cu(t), null;
                    case 26:
                        var a = t.type,
                            o = t.memoizedState;
                        return null === e ? (au(t), null !== o ? (cu(t), iu(t, o)) : (cu(t), ou(t, a, 0, 0, n))) : o ? o !== e.memoizedState ? (au(t), cu(t), iu(t, o)) : (cu(t), t.flags &= -16777217) : ((e = e.memoizedProps) !== r && au(t), cu(t), ou(t, a, 0, 0, n)), null;
                    case 27:
                        if (G(t), n = V.current, a = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && au(t);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(l(166));
                                return cu(t), null
                            }
                            e = U.current, gl(t) ? ml(t) : (e = Mf(a, r, n), t.stateNode = e, au(t))
                        }
                        return cu(t), null;
                    case 5:
                        if (G(t), a = t.type, null !== e && null != t.stateNode) e.memoizedProps !== r && au(t);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(l(166));
                                return cu(t), null
                            }
                            if (o = U.current, gl(t)) ml(t);
                            else {
                                var i = hf(V.current);
                                switch (o) {
                                    case 1:
                                        o = i.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case 2:
                                        o = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    default:
                                        switch (a) {
                                            case "svg":
                                                o = i.createElementNS("http://www.w3.org/2000/svg", a);
                                                break;
                                            case "math":
                                                o = i.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                                break;
                                            case "script":
                                                (o = i.createElement("div")).innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
                                                break;
                                            case "select":
                                                o = "string" == typeof r.is ? i.createElement("select", {
                                                    is: r.is
                                                }) : i.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
                                                break;
                                            default:
                                                o = "string" == typeof r.is ? i.createElement(a, {
                                                    is: r.is
                                                }) : i.createElement(a)
                                        }
                                }
                                o[$e] = t, o[Ie] = r;
                                e: for (i = t.child; null !== i;) {
                                    if (5 === i.tag || 6 === i.tag) o.appendChild(i.stateNode);
                                    else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                                        i.child.return = i, i = i.child;
                                        continue
                                    }
                                    if (i === t) break e;
                                    for (; null === i.sibling;) {
                                        if (null === i.return || i.return === t) break e;
                                        i = i.return
                                    }
                                    i.sibling.return = i.return, i = i.sibling
                                }
                                t.stateNode = o;
                                e: switch (ff(o, a, r), a) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        r = !!r.autoFocus;
                                        break e;
                                    case "img":
                                        r = !0;
                                        break e;
                                    default:
                                        r = !1
                                }
                                r && au(t)
                            }
                        }
                        return cu(t), ou(t, t.type, null === e || e.memoizedProps, t.pendingProps, n), null;
                    case 6:
                        if (e && null != t.stateNode) e.memoizedProps !== r && au(t);
                        else {
                            if ("string" != typeof r && null === t.stateNode) throw Error(l(166));
                            if (e = V.current, gl(t)) {
                                if (e = t.stateNode, n = t.memoizedProps, r = null, null !== (a = il)) switch (a.tag) {
                                    case 27:
                                    case 5:
                                        r = a.memoizedProps
                                }
                                e[$e] = t, (e = !!(e.nodeValue === n || null !== r && !0 === r.suppressHydrationWarning || uf(e.nodeValue, n))) || pl(t, !0)
                            } else(e = hf(e).createTextNode(r))[$e] = t, t.stateNode = e
                        }
                        return cu(t), null;
                    case 31:
                        if (n = t.memoizedState, null === e || null !== e.memoizedState) {
                            if (r = gl(t), null !== n) {
                                if (null === e) {
                                    if (!r) throw Error(l(318));
                                    if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null)) throw Error(l(557));
                                    e[$e] = t
                                } else yl(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                cu(t), e = !1
                            } else n = vl(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n), e = !0;
                            if (!e) return 256 & t.flags ? (Ma(t), t) : (Ma(t), null);
                            if (128 & t.flags) throw Error(l(558))
                        }
                        return cu(t), null;
                    case 13:
                        if (r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (a = gl(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!a) throw Error(l(318));
                                    if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(l(317));
                                    a[$e] = t
                                } else yl(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                cu(t), a = !1
                            } else a = vl(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = a), a = !0;
                            if (!a) return 256 & t.flags ? (Ma(t), t) : (Ma(t), null)
                        }
                        return Ma(t), 128 & t.flags ? (t.lanes = n, t) : (n = null !== r, e = null !== e && null !== e.memoizedState, n && (a = null, null !== (r = t.child).alternate && null !== r.alternate.memoizedState && null !== r.alternate.memoizedState.cachePool && (a = r.alternate.memoizedState.cachePool.pool), o = null, null !== r.memoizedState && null !== r.memoizedState.cachePool && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), uu(t, t.updateQueue), cu(t), null);
                    case 4:
                        return Q(), null === e && Xc(t.stateNode.containerInfo), cu(t), null;
                    case 10:
                        return _l(t.type), cu(t), null;
                    case 19:
                        if (D(Fa), null === (r = t.memoizedState)) return cu(t), null;
                        if (a = !!(128 & t.flags), null === (o = r.rendering))
                            if (a) su(r, !1);
                            else {
                                if (0 !== Ss || null !== e && 128 & e.flags)
                                    for (e = t.child; null !== e;) {
                                        if (null !== (o = Da(e))) {
                                            for (t.flags |= 128, su(r, !1), e = o.updateQueue, t.updateQueue = e, uu(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) $r(n, e), n = n.sibling;
                                            return $(Fa, 1 & Fa.current | 2), sl && nl(t, r.treeForkCount), t.child
                                        }
                                        e = e.sibling
                                    }
                                null !== r.tail && oe() > As && (t.flags |= 128, a = !0, su(r, !1), t.lanes = 4194304)
                            }
                        else {
                            if (!a)
                                if (null !== (e = Da(o))) {
                                    if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, uu(t, e), su(r, !0), null === r.tail && "hidden" === r.tailMode && !o.alternate && !sl) return cu(t), null
                                } else 2 * oe() - r.renderingStartTime > As && 536870912 !== n && (t.flags |= 128, a = !0, su(r, !1), t.lanes = 4194304);
                            r.isBackwards ? (o.sibling = t.child, t.child = o) : (null !== (e = r.last) ? e.sibling = o : t.child = o, r.last = o)
                        }
                        return null !== r.tail ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = oe(), e.sibling = null, n = Fa.current, $(Fa, a ? 1 & n | 2 : 1 & n), sl && nl(t, r.treeForkCount), e) : (cu(t), null);
                    case 22:
                    case 23:
                        return Ma(t), za(), r = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? !!(536870912 & n) && !(128 & t.flags) && (cu(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : cu(t), null !== (n = t.updateQueue) && uu(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), r = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), null !== e && D(Wl), null;
                    case 24:
                        return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), _l(Ml), cu(t), null;
                    case 25:
                    case 30:
                        return null
                }
                throw Error(l(156, t.tag))
            }

            function du(e, t) {
                switch (al(t), t.tag) {
                    case 1:
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return _l(Ml), Q(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 26:
                    case 27:
                    case 5:
                        return G(t), null;
                    case 31:
                        if (null !== t.memoizedState) {
                            if (Ma(t), null === t.alternate) throw Error(l(340));
                            yl()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 13:
                        if (Ma(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(l(340));
                            yl()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return D(Fa), null;
                    case 4:
                        return Q(), null;
                    case 10:
                        return _l(t.type), null;
                    case 22:
                    case 23:
                        return Ma(t), za(), null !== e && D(Wl), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 24:
                        return _l(Ml), null;
                    default:
                        return null
                }
            }

            function pu(e, t) {
                switch (al(t), t.tag) {
                    case 3:
                        _l(Ml), Q();
                        break;
                    case 26:
                    case 27:
                    case 5:
                        G(t);
                        break;
                    case 4:
                        Q();
                        break;
                    case 31:
                        null !== t.memoizedState && Ma(t);
                        break;
                    case 13:
                        Ma(t);
                        break;
                    case 19:
                        D(Fa);
                        break;
                    case 10:
                        _l(t.type);
                        break;
                    case 22:
                    case 23:
                        Ma(t), za(), null !== e && D(Wl);
                        break;
                    case 24:
                        _l(Ml)
                }
            }

            function mu(e, t) {
                try {
                    var n = t.updateQueue,
                        r = null !== n ? n.lastEffect : null;
                    if (null !== r) {
                        var l = r.next;
                        n = l;
                        do {
                            if ((n.tag & e) === e) {
                                r = void 0;
                                var a = n.create,
                                    o = n.inst;
                                r = a(), o.destroy = r
                            }
                            n = n.next
                        } while (n !== l)
                    }
                } catch (e) {
                    Sc(t, t.return, e)
                }
            }

            function hu(e, t, n) {
                try {
                    var r = t.updateQueue,
                        l = null !== r ? r.lastEffect : null;
                    if (null !== l) {
                        var a = l.next;
                        r = a;
                        do {
                            if ((r.tag & e) === e) {
                                var o = r.inst,
                                    i = o.destroy;
                                if (void 0 !== i) {
                                    o.destroy = void 0, l = t;
                                    var u = n,
                                        s = i;
                                    try {
                                        s()
                                    } catch (e) {
                                        Sc(l, u, e)
                                    }
                                }
                            }
                            r = r.next
                        } while (r !== a)
                    }
                } catch (e) {
                    Sc(t, t.return, e)
                }
            }

            function gu(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    var n = e.stateNode;
                    try {
                        _a(t, n)
                    } catch (t) {
                        Sc(e, e.return, t)
                    }
                }
            }

            function yu(e, t, n) {
                n.props = Si(e.type, e.memoizedProps), n.state = e.memoizedState;
                try {
                    n.componentWillUnmount()
                } catch (n) {
                    Sc(e, t, n)
                }
            }

            function vu(e, t) {
                try {
                    var n = e.ref;
                    if (null !== n) {
                        switch (e.tag) {
                            case 26:
                            case 27:
                            case 5:
                                var r = e.stateNode;
                                break;
                            default:
                                r = e.stateNode
                        }
                        "function" == typeof n ? e.refCleanup = n(r) : n.current = r
                    }
                } catch (n) {
                    Sc(e, t, n)
                }
            }

            function bu(e, t) {
                var n = e.ref,
                    r = e.refCleanup;
                if (null !== n)
                    if ("function" == typeof r) try {
                        r()
                    } catch (n) {
                        Sc(e, t, n)
                    } finally {
                        e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
                    } else if ("function" == typeof n) try {
                        n(null)
                    } catch (n) {
                        Sc(e, t, n)
                    } else n.current = null
            }

            function ku(e) {
                var t = e.type,
                    n = e.memoizedProps,
                    r = e.stateNode;
                try {
                    e: switch (t) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            n.autoFocus && r.focus();
                            break e;
                        case "img":
                            n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
                    }
                }
                catch (t) {
                    Sc(e, e.return, t)
                }
            }

            function Su(e, t, n) {
                try {
                    var r = e.stateNode;
                    ! function(e, t, n, r) {
                        switch (t) {
                            case "div":
                            case "span":
                            case "svg":
                            case "path":
                            case "a":
                            case "g":
                            case "p":
                            case "li":
                                break;
                            case "input":
                                var a = null,
                                    o = null,
                                    i = null,
                                    u = null,
                                    s = null,
                                    c = null,
                                    f = null;
                                for (m in n) {
                                    var d = n[m];
                                    if (n.hasOwnProperty(m) && null != d) switch (m) {
                                        case "checked":
                                        case "value":
                                            break;
                                        case "defaultValue":
                                            s = d;
                                        default:
                                            r.hasOwnProperty(m) || sf(e, t, m, null, r, d)
                                    }
                                }
                                for (var p in r) {
                                    var m = r[p];
                                    if (d = n[p], r.hasOwnProperty(p) && (null != m || null != d)) switch (p) {
                                        case "type":
                                            o = m;
                                            break;
                                        case "name":
                                            a = m;
                                            break;
                                        case "checked":
                                            c = m;
                                            break;
                                        case "defaultChecked":
                                            f = m;
                                            break;
                                        case "value":
                                            i = m;
                                            break;
                                        case "defaultValue":
                                            u = m;
                                            break;
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            if (null != m) throw Error(l(137, t));
                                            break;
                                        default:
                                            m !== d && sf(e, t, p, m, r, d)
                                    }
                                }
                                return void gt(e, i, u, s, c, f, o, a);
                            case "select":
                                for (o in m = i = u = p = null, n)
                                    if (s = n[o], n.hasOwnProperty(o) && null != s) switch (o) {
                                        case "value":
                                            break;
                                        case "multiple":
                                            m = s;
                                        default:
                                            r.hasOwnProperty(o) || sf(e, t, o, null, r, s)
                                    }
                                for (a in r)
                                    if (o = r[a], s = n[a], r.hasOwnProperty(a) && (null != o || null != s)) switch (a) {
                                        case "value":
                                            p = o;
                                            break;
                                        case "defaultValue":
                                            u = o;
                                            break;
                                        case "multiple":
                                            i = o;
                                        default:
                                            o !== s && sf(e, t, a, o, r, s)
                                    }
                                return t = u, n = i, r = m, void(null != p ? bt(e, !!n, p, !1) : !!r != !!n && (null != t ? bt(e, !!n, t, !0) : bt(e, !!n, n ? [] : "", !1)));
                            case "textarea":
                                for (u in m = p = null, n)
                                    if (a = n[u], n.hasOwnProperty(u) && null != a && !r.hasOwnProperty(u)) switch (u) {
                                        case "value":
                                        case "children":
                                            break;
                                        default:
                                            sf(e, t, u, null, r, a)
                                    }
                                for (i in r)
                                    if (a = r[i], o = n[i], r.hasOwnProperty(i) && (null != a || null != o)) switch (i) {
                                        case "value":
                                            p = a;
                                            break;
                                        case "defaultValue":
                                            m = a;
                                            break;
                                        case "children":
                                            break;
                                        case "dangerouslySetInnerHTML":
                                            if (null != a) throw Error(l(91));
                                            break;
                                        default:
                                            a !== o && sf(e, t, i, a, r, o)
                                    }
                                return void kt(e, p, m);
                            case "option":
                                for (var h in n) p = n[h], n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h) && ("selected" === h ? e.selected = !1 : sf(e, t, h, null, r, p));
                                for (s in r) p = r[s], m = n[s], !r.hasOwnProperty(s) || p === m || null == p && null == m || ("selected" === s ? e.selected = p && "function" != typeof p && "symbol" != typeof p : sf(e, t, s, p, r, m));
                                return;
                            case "img":
                            case "link":
                            case "area":
                            case "base":
                            case "br":
                            case "col":
                            case "embed":
                            case "hr":
                            case "keygen":
                            case "meta":
                            case "param":
                            case "source":
                            case "track":
                            case "wbr":
                            case "menuitem":
                                for (var g in n) p = n[g], n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && sf(e, t, g, null, r, p);
                                for (c in r)
                                    if (p = r[c], m = n[c], r.hasOwnProperty(c) && p !== m && (null != p || null != m)) switch (c) {
                                        case "children":
                                        case "dangerouslySetInnerHTML":
                                            if (null != p) throw Error(l(137, t));
                                            break;
                                        default:
                                            sf(e, t, c, p, r, m)
                                    }
                                return;
                            default:
                                if (Ct(t)) {
                                    for (var y in n) p = n[y], n.hasOwnProperty(y) && void 0 !== p && !r.hasOwnProperty(y) && cf(e, t, y, void 0, r, p);
                                    for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || void 0 === p && void 0 === m || cf(e, t, f, p, r, m);
                                    return
                                }
                        }
                        for (var v in n) p = n[v], n.hasOwnProperty(v) && null != p && !r.hasOwnProperty(v) && sf(e, t, v, null, r, p);
                        for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || null == p && null == m || sf(e, t, d, p, r, m)
                    }(r, e.type, n, t), r[Ie] = t
                } catch (t) {
                    Sc(e, e.return, t)
                }
            }

            function wu(e) {
                return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && Ef(e.type) || 4 === e.tag
            }

            function xu(e) {
                e: for (;;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || wu(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (27 === e.tag && Ef(e.type)) continue e;
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function _u(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t) : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Nt));
                else if (4 !== r && (27 === r && Ef(e.type) && (n = e.stateNode, t = null), null !== (e = e.child)))
                    for (_u(e, t, n), e = e.sibling; null !== e;) _u(e, t, n), e = e.sibling
            }

            function Eu(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && (27 === r && Ef(e.type) && (n = e.stateNode), null !== (e = e.child)))
                    for (Eu(e, t, n), e = e.sibling; null !== e;) Eu(e, t, n), e = e.sibling
            }

            function Cu(e) {
                var t = e.stateNode,
                    n = e.memoizedProps;
                try {
                    for (var r = e.type, l = t.attributes; l.length;) t.removeAttributeNode(l[0]);
                    ff(t, r, n), t[$e] = e, t[Ie] = n
                } catch (t) {
                    Sc(e, e.return, t)
                }
            }
            var Pu = !1,
                Tu = !1,
                zu = !1,
                Nu = "function" == typeof WeakSet ? WeakSet : Set,
                Lu = null;

            function Au(e, t, n) {
                var r = n.flags;
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        qu(e, n), 4 & r && mu(5, n);
                        break;
                    case 1:
                        if (qu(e, n), 4 & r)
                            if (e = n.stateNode, null === t) try {
                                e.componentDidMount()
                            } catch (e) {
                                Sc(n, n.return, e)
                            } else {
                                var l = Si(n.type, t.memoizedProps);
                                t = t.memoizedState;
                                try {
                                    e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate)
                                } catch (e) {
                                    Sc(n, n.return, e)
                                }
                            }
                        64 & r && gu(n), 512 & r && vu(n, n.return);
                        break;
                    case 3:
                        if (qu(e, n), 64 & r && null !== (e = n.updateQueue)) {
                            if (t = null, null !== n.child) switch (n.child.tag) {
                                case 27:
                                case 5:
                                case 1:
                                    t = n.child.stateNode
                            }
                            try {
                                _a(e, t)
                            } catch (e) {
                                Sc(n, n.return, e)
                            }
                        }
                        break;
                    case 27:
                        null === t && 4 & r && Cu(n);
                    case 26:
                    case 5:
                        qu(e, n), null === t && 4 & r && ku(n), 512 & r && vu(n, n.return);
                        break;
                    case 12:
                        qu(e, n);
                        break;
                    case 31:
                        qu(e, n), 4 & r && Du(e, n);
                        break;
                    case 13:
                        qu(e, n), 4 & r && $u(e, n), 64 & r && null !== (e = n.memoizedState) && null !== (e = e.dehydrated) && function(e, t) {
                            var n = e.ownerDocument;
                            if ("$~" === e.data) e._reactRetry = t;
                            else if ("$?" !== e.data || "loading" !== n.readyState) t();
                            else {
                                var r = function() {
                                    t(), n.removeEventListener("DOMContentLoaded", r)
                                };
                                n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
                            }
                        }(e, n = Ec.bind(null, n));
                        break;
                    case 22:
                        if (!(r = null !== n.memoizedState || Pu)) {
                            t = null !== t && null !== t.memoizedState || Tu, l = Pu;
                            var a = Tu;
                            Pu = r, (Tu = t) && !a ? Ku(e, n, !!(8772 & n.subtreeFlags)) : qu(e, n), Pu = l, Tu = a
                        }
                        break;
                    case 30:
                        break;
                    default:
                        qu(e, n)
                }
            }

            function Ou(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, Ou(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && Qe(t), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }
            var ju = null,
                Ru = !1;

            function Mu(e, t, n) {
                for (n = n.child; null !== n;) Fu(e, t, n), n = n.sibling
            }

            function Fu(e, t, n) {
                if (ge && "function" == typeof ge.onCommitFiberUnmount) try {
                    ge.onCommitFiberUnmount(he, n)
                } catch (e) {}
                switch (n.tag) {
                    case 26:
                        Tu || bu(n, t), Mu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                        break;
                    case 27:
                        Tu || bu(n, t);
                        var r = ju,
                            l = Ru;
                        Ef(n.type) && (ju = n.stateNode, Ru = !1), Mu(e, t, n), Ff(n.stateNode), ju = r, Ru = l;
                        break;
                    case 5:
                        Tu || bu(n, t);
                    case 6:
                        if (r = ju, l = Ru, ju = null, Mu(e, t, n), Ru = l, null !== (ju = r))
                            if (Ru) try {
                                (9 === ju.nodeType ? ju.body : "HTML" === ju.nodeName ? ju.ownerDocument.body : ju).removeChild(n.stateNode)
                            } catch (e) {
                                Sc(n, t, e)
                            } else try {
                                ju.removeChild(n.stateNode)
                            } catch (e) {
                                Sc(n, t, e)
                            }
                        break;
                    case 18:
                        null !== ju && (Ru ? (Cf(9 === (e = ju).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), Bd(e)) : Cf(ju, n.stateNode));
                        break;
                    case 4:
                        r = ju, l = Ru, ju = n.stateNode.containerInfo, Ru = !0, Mu(e, t, n), ju = r, Ru = l;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        hu(2, n, t), Tu || hu(4, n, t), Mu(e, t, n);
                        break;
                    case 1:
                        Tu || (bu(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount && yu(n, t, r)), Mu(e, t, n);
                        break;
                    case 21:
                        Mu(e, t, n);
                        break;
                    case 22:
                        Tu = (r = Tu) || null !== n.memoizedState, Mu(e, t, n), Tu = r;
                        break;
                    default:
                        Mu(e, t, n)
                }
            }

            function Du(e, t) {
                if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState)) {
                    e = e.dehydrated;
                    try {
                        Bd(e)
                    } catch (e) {
                        Sc(t, t.return, e)
                    }
                }
            }

            function $u(e, t) {
                if (null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated)) try {
                    Bd(e)
                } catch (e) {
                    Sc(t, t.return, e)
                }
            }

            function Iu(e, t) {
                var n = function(e) {
                    switch (e.tag) {
                        case 31:
                        case 13:
                        case 19:
                            var t = e.stateNode;
                            return null === t && (t = e.stateNode = new Nu), t;
                        case 22:
                            return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Nu), t;
                        default:
                            throw Error(l(435, e.tag))
                    }
                }(e);
                t.forEach(function(t) {
                    if (!n.has(t)) {
                        n.add(t);
                        var r = Cc.bind(null, e, t);
                        t.then(r, r)
                    }
                })
            }

            function Hu(e, t) {
                var n = t.deletions;
                if (null !== n)
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r],
                            o = e,
                            i = t,
                            u = i;
                        e: for (; null !== u;) {
                            switch (u.tag) {
                                case 27:
                                    if (Ef(u.type)) {
                                        ju = u.stateNode, Ru = !1;
                                        break e
                                    }
                                    break;
                                case 5:
                                    ju = u.stateNode, Ru = !1;
                                    break e;
                                case 3:
                                case 4:
                                    ju = u.stateNode.containerInfo, Ru = !0;
                                    break e
                            }
                            u = u.return
                        }
                        if (null === ju) throw Error(l(160));
                        Fu(o, i, a), ju = null, Ru = !1, null !== (o = a.alternate) && (o.return = null), a.return = null
                    }
                if (13886 & t.subtreeFlags)
                    for (t = t.child; null !== t;) Bu(t, e), t = t.sibling
            }
            var Uu = null;

            function Bu(e, t) {
                var n = e.alternate,
                    r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Hu(t, e), Vu(e), 4 & r && (hu(3, e, e.return), mu(3, e), hu(5, e, e.return));
                        break;
                    case 1:
                        Hu(t, e), Vu(e), 512 & r && (Tu || null === n || bu(n, n.return)), 64 & r && Pu && null !== (e = e.updateQueue) && null !== (r = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? r : n.concat(r));
                        break;
                    case 26:
                        var a = Uu;
                        if (Hu(t, e), Vu(e), 512 & r && (Tu || null === n || bu(n, n.return)), 4 & r) {
                            var o = null !== n ? n.memoizedState : null;
                            if (r = e.memoizedState, null === n)
                                if (null === r)
                                    if (null === e.stateNode) {
                                        e: {
                                            r = e.type,
                                            n = e.memoizedProps,
                                            a = a.ownerDocument || a;t: switch (r) {
                                                case "title":
                                                    (!(o = a.getElementsByTagName("title")[0]) || o[qe] || o[$e] || "http://www.w3.org/2000/svg" === o.namespaceURI || o.hasAttribute("itemprop")) && (o = a.createElement(r), a.head.insertBefore(o, a.querySelector("head > title"))), ff(o, r, n), o[$e] = e, Ze(o), r = o;
                                                    break e;
                                                case "link":
                                                    var i = td("link", "href", a).get(r + (n.href || ""));
                                                    if (i)
                                                        for (var u = 0; u < i.length; u++)
                                                            if ((o = i[u]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && o.getAttribute("rel") === (null == n.rel ? null : n.rel) && o.getAttribute("title") === (null == n.title ? null : n.title) && o.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                                i.splice(u, 1);
                                                                break t
                                                            } ff(o = a.createElement(r), r, n), a.head.appendChild(o);
                                                    break;
                                                case "meta":
                                                    if (i = td("meta", "content", a).get(r + (n.content || "")))
                                                        for (u = 0; u < i.length; u++)
                                                            if ((o = i[u]).getAttribute("content") === (null == n.content ? null : "" + n.content) && o.getAttribute("name") === (null == n.name ? null : n.name) && o.getAttribute("property") === (null == n.property ? null : n.property) && o.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && o.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                                i.splice(u, 1);
                                                                break t
                                                            } ff(o = a.createElement(r), r, n), a.head.appendChild(o);
                                                    break;
                                                default:
                                                    throw Error(l(468, r))
                                            }
                                            o[$e] = e,
                                            Ze(o),
                                            r = o
                                        }
                                        e.stateNode = r
                                    }
                            else nd(a, e.type, e.stateNode);
                            else e.stateNode = Yf(a, r, e.memoizedProps);
                            else o !== r ? (null === o ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : o.count--, null === r ? nd(a, e.type, e.stateNode) : Yf(a, r, e.memoizedProps)) : null === r && null !== e.stateNode && Su(e, e.memoizedProps, n.memoizedProps)
                        }
                        break;
                    case 27:
                        Hu(t, e), Vu(e), 512 & r && (Tu || null === n || bu(n, n.return)), null !== n && 4 & r && Su(e, e.memoizedProps, n.memoizedProps);
                        break;
                    case 5:
                        if (Hu(t, e), Vu(e), 512 & r && (Tu || null === n || bu(n, n.return)), 32 & e.flags) {
                            a = e.stateNode;
                            try {
                                wt(a, "")
                            } catch (t) {
                                Sc(e, e.return, t)
                            }
                        }
                        4 & r && null != e.stateNode && Su(e, a = e.memoizedProps, null !== n ? n.memoizedProps : a), 1024 & r && (zu = !0);
                        break;
                    case 6:
                        if (Hu(t, e), Vu(e), 4 & r) {
                            if (null === e.stateNode) throw Error(l(162));
                            r = e.memoizedProps, n = e.stateNode;
                            try {
                                n.nodeValue = r
                            } catch (t) {
                                Sc(e, e.return, t)
                            }
                        }
                        break;
                    case 3:
                        if (ed = null, a = Uu, Uu = If(t.containerInfo), Hu(t, e), Uu = a, Vu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            Bd(t.containerInfo)
                        } catch (t) {
                            Sc(e, e.return, t)
                        }
                        zu && (zu = !1, Wu(e));
                        break;
                    case 4:
                        r = Uu, Uu = If(e.stateNode.containerInfo), Hu(t, e), Vu(e), Uu = r;
                        break;
                    case 12:
                    default:
                        Hu(t, e), Vu(e);
                        break;
                    case 31:
                    case 19:
                        Hu(t, e), Vu(e), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, Iu(e, r));
                        break;
                    case 13:
                        Hu(t, e), Vu(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== n && null !== n.memoizedState) && (Ns = oe()), 4 & r && null !== (r = e.updateQueue) && (e.updateQueue = null, Iu(e, r));
                        break;
                    case 22:
                        a = null !== e.memoizedState;
                        var s = null !== n && null !== n.memoizedState,
                            c = Pu,
                            f = Tu;
                        if (Pu = c || a, Tu = f || s, Hu(t, e), Tu = f, Pu = c, Vu(e), 8192 & r) e: for (t = e.stateNode, t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (null === n || s || Pu || Tu || Qu(e)), n = null, t = e;;) {
                            if (5 === t.tag || 26 === t.tag) {
                                if (null === n) {
                                    s = n = t;
                                    try {
                                        if (o = s.stateNode, a) "function" == typeof(i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none";
                                        else {
                                            u = s.stateNode;
                                            var d = s.memoizedProps.style,
                                                p = null != d && d.hasOwnProperty("display") ? d.display : null;
                                            u.style.display = null == p || "boolean" == typeof p ? "" : ("" + p).trim()
                                        }
                                    } catch (e) {
                                        Sc(s, s.return, e)
                                    }
                                }
                            } else if (6 === t.tag) {
                                if (null === n) {
                                    s = t;
                                    try {
                                        s.stateNode.nodeValue = a ? "" : s.memoizedProps
                                    } catch (e) {
                                        Sc(s, s.return, e)
                                    }
                                }
                            } else if (18 === t.tag) {
                                if (null === n) {
                                    s = t;
                                    try {
                                        var m = s.stateNode;
                                        a ? Pf(m, !0) : Pf(s.stateNode, !1)
                                    } catch (e) {
                                        Sc(s, s.return, e)
                                    }
                                }
                            } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                t.child.return = t, t = t.child;
                                continue
                            }
                            if (t === e) break e;
                            for (; null === t.sibling;) {
                                if (null === t.return || t.return === e) break e;
                                n === t && (n = null), t = t.return
                            }
                            n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                        }
                        4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && (r.retryQueue = null, Iu(e, n));
                    case 30:
                    case 21:
                }
            }

            function Vu(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        for (var n, r = e.return; null !== r;) {
                            if (wu(r)) {
                                n = r;
                                break
                            }
                            r = r.return
                        }
                        if (null == n) throw Error(l(160));
                        switch (n.tag) {
                            case 27:
                                var a = n.stateNode;
                                Eu(e, xu(e), a);
                                break;
                            case 5:
                                var o = n.stateNode;
                                32 & n.flags && (wt(o, ""), n.flags &= -33), Eu(e, xu(e), o);
                                break;
                            case 3:
                            case 4:
                                var i = n.stateNode.containerInfo;
                                _u(e, xu(e), i);
                                break;
                            default:
                                throw Error(l(161))
                        }
                    } catch (t) {
                        Sc(e, e.return, t)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function Wu(e) {
                if (1024 & e.subtreeFlags)
                    for (e = e.child; null !== e;) {
                        var t = e;
                        Wu(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling
                    }
            }

            function qu(e, t) {
                if (8772 & t.subtreeFlags)
                    for (t = t.child; null !== t;) Au(e, t.alternate, t), t = t.sibling
            }

            function Qu(e) {
                for (e = e.child; null !== e;) {
                    var t = e;
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            hu(4, t, t.return), Qu(t);
                            break;
                        case 1:
                            bu(t, t.return);
                            var n = t.stateNode;
                            "function" == typeof n.componentWillUnmount && yu(t, t.return, n), Qu(t);
                            break;
                        case 27:
                            Ff(t.stateNode);
                        case 26:
                        case 5:
                            bu(t, t.return), Qu(t);
                            break;
                        case 22:
                            null === t.memoizedState && Qu(t);
                            break;
                        default:
                            Qu(t)
                    }
                    e = e.sibling
                }
            }

            function Ku(e, t, n) {
                for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t;) {
                    var r = t.alternate,
                        l = e,
                        a = t,
                        o = a.flags;
                    switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ku(l, a, n), mu(4, a);
                            break;
                        case 1:
                            if (Ku(l, a, n), "function" == typeof(l = (r = a).stateNode).componentDidMount) try {
                                l.componentDidMount()
                            } catch (e) {
                                Sc(r, r.return, e)
                            }
                            if (null !== (l = (r = a).updateQueue)) {
                                var i = r.stateNode;
                                try {
                                    var u = l.shared.hiddenCallbacks;
                                    if (null !== u)
                                        for (l.shared.hiddenCallbacks = null, l = 0; l < u.length; l++) xa(u[l], i)
                                } catch (e) {
                                    Sc(r, r.return, e)
                                }
                            }
                            n && 64 & o && gu(a), vu(a, a.return);
                            break;
                        case 27:
                            Cu(a);
                        case 26:
                        case 5:
                            Ku(l, a, n), n && null === r && 4 & o && ku(a), vu(a, a.return);
                            break;
                        case 12:
                            Ku(l, a, n);
                            break;
                        case 31:
                            Ku(l, a, n), n && 4 & o && Du(l, a);
                            break;
                        case 13:
                            Ku(l, a, n), n && 4 & o && $u(l, a);
                            break;
                        case 22:
                            null === a.memoizedState && Ku(l, a, n), vu(a, a.return);
                            break;
                        case 30:
                            break;
                        default:
                            Ku(l, a, n)
                    }
                    t = t.sibling
                }
            }

            function Gu(e, t) {
                var n = null;
                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Dl(n))
            }

            function Yu(e, t) {
                e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Dl(e))
            }

            function Xu(e, t, n, r) {
                if (10256 & t.subtreeFlags)
                    for (t = t.child; null !== t;) Zu(e, t, n, r), t = t.sibling
            }

            function Zu(e, t, n, r) {
                var l = t.flags;
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Xu(e, t, n, r), 2048 & l && mu(9, t);
                        break;
                    case 1:
                    case 31:
                    case 13:
                    default:
                        Xu(e, t, n, r);
                        break;
                    case 3:
                        Xu(e, t, n, r), 2048 & l && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Dl(e)));
                        break;
                    case 12:
                        if (2048 & l) {
                            Xu(e, t, n, r), e = t.stateNode;
                            try {
                                var a = t.memoizedProps,
                                    o = a.id,
                                    i = a.onPostCommit;
                                "function" == typeof i && i(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                            } catch (e) {
                                Sc(t, t.return, e)
                            }
                        } else Xu(e, t, n, r);
                        break;
                    case 23:
                        break;
                    case 22:
                        a = t.stateNode, o = t.alternate, null !== t.memoizedState ? 2 & a._visibility ? Xu(e, t, n, r) : es(e, t) : 2 & a._visibility ? Xu(e, t, n, r) : (a._visibility |= 2, Ju(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)), 2048 & l && Gu(o, t);
                        break;
                    case 24:
                        Xu(e, t, n, r), 2048 & l && Yu(t.alternate, t)
                }
            }

            function Ju(e, t, n, r, l) {
                for (l = l && (!!(10256 & t.subtreeFlags) || !1), t = t.child; null !== t;) {
                    var a = e,
                        o = t,
                        i = n,
                        u = r,
                        s = o.flags;
                    switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ju(a, o, i, u, l), mu(8, o);
                            break;
                        case 23:
                            break;
                        case 22:
                            var c = o.stateNode;
                            null !== o.memoizedState ? 2 & c._visibility ? Ju(a, o, i, u, l) : es(a, o) : (c._visibility |= 2, Ju(a, o, i, u, l)), l && 2048 & s && Gu(o.alternate, o);
                            break;
                        case 24:
                            Ju(a, o, i, u, l), l && 2048 & s && Yu(o.alternate, o);
                            break;
                        default:
                            Ju(a, o, i, u, l)
                    }
                    t = t.sibling
                }
            }

            function es(e, t) {
                if (10256 & t.subtreeFlags)
                    for (t = t.child; null !== t;) {
                        var n = e,
                            r = t,
                            l = r.flags;
                        switch (r.tag) {
                            case 22:
                                es(n, r), 2048 & l && Gu(r.alternate, r);
                                break;
                            case 24:
                                es(n, r), 2048 & l && Yu(r.alternate, r);
                                break;
                            default:
                                es(n, r)
                        }
                        t = t.sibling
                    }
            }
            var ts = 8192;

            function ns(e, t, n) {
                if (e.subtreeFlags & ts)
                    for (e = e.child; null !== e;) rs(e, t, n), e = e.sibling
            }

            function rs(e, t, n) {
                switch (e.tag) {
                    case 26:
                        ns(e, t, n), e.flags & ts && null !== e.memoizedState && function(e, t, n, r) {
                            if (!("stylesheet" !== n.type || "string" == typeof r.media && !1 === matchMedia(r.media).matches || 4 & n.state.loading)) {
                                if (null === n.instance) {
                                    var l = Wf(r.href),
                                        a = t.querySelector(qf(l));
                                    if (a) return null !== (t = a._p) && "object" == typeof t && "function" == typeof t.then && (e.count++, e = ad.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, void Ze(a);
                                    a = t.ownerDocument || t, r = Qf(r), (l = Df.get(l)) && Zf(r, l), Ze(a = a.createElement("link"));
                                    var o = a;
                                    o._p = new Promise(function(e, t) {
                                        o.onload = e, o.onerror = t
                                    }), ff(a, "link", r), n.instance = a
                                }
                                null === e.stylesheets && (e.stylesheets = new Map), e.stylesheets.set(n, t), (t = n.state.preload) && !(3 & n.state.loading) && (e.count++, n = ad.bind(e), t.addEventListener("load", n), t.addEventListener("error", n))
                            }
                        }(n, Uu, e.memoizedState, e.memoizedProps);
                        break;
                    case 5:
                    default:
                        ns(e, t, n);
                        break;
                    case 3:
                    case 4:
                        var r = Uu;
                        Uu = If(e.stateNode.containerInfo), ns(e, t, n), Uu = r;
                        break;
                    case 22:
                        null === e.memoizedState && (null !== (r = e.alternate) && null !== r.memoizedState ? (r = ts, ts = 16777216, ns(e, t, n), ts = r) : ns(e, t, n))
                }
            }

            function ls(e) {
                var t = e.alternate;
                if (null !== t && null !== (e = t.child)) {
                    t.child = null;
                    do {
                        t = e.sibling, e.sibling = null, e = t
                    } while (null !== e)
                }
            }

            function as(e) {
                var t = e.deletions;
                if (16 & e.flags) {
                    if (null !== t)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            Lu = r, us(r, e)
                        }
                    ls(e)
                }
                if (10256 & e.subtreeFlags)
                    for (e = e.child; null !== e;) os(e), e = e.sibling
            }

            function os(e) {
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        as(e), 2048 & e.flags && hu(9, e, e.return);
                        break;
                    case 3:
                    case 12:
                    default:
                        as(e);
                        break;
                    case 22:
                        var t = e.stateNode;
                        null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, is(e)) : as(e)
                }
            }

            function is(e) {
                var t = e.deletions;
                if (16 & e.flags) {
                    if (null !== t)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            Lu = r, us(r, e)
                        }
                    ls(e)
                }
                for (e = e.child; null !== e;) {
                    switch ((t = e).tag) {
                        case 0:
                        case 11:
                        case 15:
                            hu(8, t, t.return), is(t);
                            break;
                        case 22:
                            2 & (n = t.stateNode)._visibility && (n._visibility &= -3, is(t));
                            break;
                        default:
                            is(t)
                    }
                    e = e.sibling
                }
            }

            function us(e, t) {
                for (; null !== Lu;) {
                    var n = Lu;
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            hu(8, n, t);
                            break;
                        case 23:
                        case 22:
                            if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                                var r = n.memoizedState.cachePool.pool;
                                null != r && r.refCount++
                            }
                            break;
                        case 24:
                            Dl(n.memoizedState.cache)
                    }
                    if (null !== (r = n.child)) r.return = n, Lu = r;
                    else e: for (n = e; null !== Lu;) {
                        var l = (r = Lu).sibling,
                            a = r.return;
                        if (Ou(r), r === n) {
                            Lu = null;
                            break e
                        }
                        if (null !== l) {
                            l.return = a, Lu = l;
                            break e
                        }
                        Lu = a
                    }
                }
            }
            var ss = {
                    getCacheForType: function(e) {
                        var t = Nl(Ml),
                            n = t.data.get(e);
                        return void 0 === n && (n = e(), t.data.set(e, n)), n
                    },
                    cacheSignal: function() {
                        return Nl(Ml).controller.signal
                    }
                },
                cs = "function" == typeof WeakMap ? WeakMap : Map,
                fs = 0,
                ds = null,
                ps = null,
                ms = 0,
                hs = 0,
                gs = null,
                ys = !1,
                vs = !1,
                bs = !1,
                ks = 0,
                Ss = 0,
                ws = 0,
                xs = 0,
                _s = 0,
                Es = 0,
                Cs = 0,
                Ps = null,
                Ts = null,
                zs = !1,
                Ns = 0,
                Ls = 0,
                As = 1 / 0,
                Os = null,
                js = null,
                Rs = 0,
                Ms = null,
                Fs = null,
                Ds = 0,
                $s = 0,
                Is = null,
                Hs = null,
                Us = 0,
                Bs = null;

            function Vs() {
                return 2 & fs && 0 !== ms ? ms & -ms : null !== A.T ? Uc() : Me()
            }

            function Ws() {
                if (0 === Es)
                    if (536870912 & ms && !sl) Es = 536870912;
                    else {
                        var e = we;
                        !(3932160 & (we <<= 1)) && (we = 262144), Es = e
                    } return null !== (e = Na.current) && (e.flags |= 32), Es
            }

            function qs(e, t, n) {
                (e !== ds || 2 !== hs && 9 !== hs) && null === e.cancelPendingCommit || (Js(e, 0), Ys(e, ms, Es, !1)), Ne(e, n), 2 & fs && e === ds || (e === ds && (!(2 & fs) && (xs |= n), 4 === Ss && Ys(e, ms, Es, !1)), Rc(e))
            }

            function Qs(e, t, n) {
                if (6 & fs) throw Error(l(327));
                for (var r = !n && !(127 & t) && 0 === (t & e.expiredLanes) || Ce(e, t), a = r ? function(e, t) {
                        var n = fs;
                        fs |= 2;
                        var r = nc(),
                            a = rc();
                        ds !== e || ms !== t ? (Os = null, As = oe() + 500, Js(e, t)) : vs = Ce(e, t);
                        e: for (;;) try {
                            if (0 !== hs && null !== ps) {
                                t = ps;
                                var o = gs;
                                t: switch (hs) {
                                    case 1:
                                        hs = 0, gs = null, cc(e, t, o, 1);
                                        break;
                                    case 2:
                                    case 9:
                                        if (Jl(o)) {
                                            hs = 0, gs = null, sc(t);
                                            break
                                        }
                                        t = function() {
                                            2 !== hs && 9 !== hs || ds !== e || (hs = 7), Rc(e)
                                        }, o.then(t, t);
                                        break e;
                                    case 3:
                                        hs = 7;
                                        break e;
                                    case 4:
                                        hs = 5;
                                        break e;
                                    case 7:
                                        Jl(o) ? (hs = 0, gs = null, sc(t)) : (hs = 0, gs = null, cc(e, t, o, 7));
                                        break;
                                    case 5:
                                        var i = null;
                                        switch (ps.tag) {
                                            case 26:
                                                i = ps.memoizedState;
                                            case 5:
                                            case 27:
                                                var u = ps;
                                                if (i ? rd(i) : u.stateNode.complete) {
                                                    hs = 0, gs = null;
                                                    var s = u.sibling;
                                                    if (null !== s) ps = s;
                                                    else {
                                                        var c = u.return;
                                                        null !== c ? (ps = c, fc(c)) : ps = null
                                                    }
                                                    break t
                                                }
                                        }
                                        hs = 0, gs = null, cc(e, t, o, 5);
                                        break;
                                    case 6:
                                        hs = 0, gs = null, cc(e, t, o, 6);
                                        break;
                                    case 8:
                                        Zs(), Ss = 6;
                                        break e;
                                    default:
                                        throw Error(l(462))
                                }
                            }
                            ic();
                            break
                        } catch (t) {
                            ec(e, t)
                        }
                        return wl = Sl = null, A.H = r, A.A = a, fs = n, null !== ps ? 0 : (ds = null, ms = 0, Tr(), Ss)
                    }(e, t) : ac(e, t, !0), o = r;;) {
                    if (0 === a) {
                        vs && !r && Ys(e, t, 0, !1);
                        break
                    }
                    if (n = e.current.alternate, !o || Gs(n)) {
                        if (2 === a) {
                            if (o = t, e.errorRecoveryDisabledLanes & o) var i = 0;
                            else i = 0 != (i = -536870913 & e.pendingLanes) ? i : 536870912 & i ? 536870912 : 0;
                            if (0 !== i) {
                                t = i;
                                e: {
                                    var u = e;a = Ps;
                                    var s = u.current.memoizedState.isDehydrated;
                                    if (s && (Js(u, i).flags |= 256), 2 !== (i = ac(u, i, !1))) {
                                        if (bs && !s) {
                                            u.errorRecoveryDisabledLanes |= o, xs |= o, a = 4;
                                            break e
                                        }
                                        o = Ts, Ts = a, null !== o && (null === Ts ? Ts = o : Ts.push.apply(Ts, o))
                                    }
                                    a = i
                                }
                                if (o = !1, 2 !== a) continue
                            }
                        }
                        if (1 === a) {
                            Js(e, 0), Ys(e, t, 0, !0);
                            break
                        }
                        e: {
                            switch (r = e, o = a) {
                                case 0:
                                case 1:
                                    throw Error(l(345));
                                case 4:
                                    if ((4194048 & t) !== t) break;
                                case 6:
                                    Ys(r, t, Es, !ys);
                                    break e;
                                case 2:
                                    Ts = null;
                                    break;
                                case 3:
                                case 5:
                                    break;
                                default:
                                    throw Error(l(329))
                            }
                            if ((62914560 & t) === t && 10 < (a = Ns + 300 - oe())) {
                                if (Ys(r, t, Es, !ys), 0 !== Ee(r, 0, !0)) break e;
                                Ds = t, r.timeoutHandle = kf(Ks.bind(null, r, n, Ts, Os, zs, t, Es, xs, Cs, ys, o, "Throttled", -0, 0), a)
                            } else Ks(r, n, Ts, Os, zs, t, Es, xs, Cs, ys, o, null, -0, 0)
                        }
                        break
                    }
                    a = ac(e, t, !1), o = !1
                }
                Rc(e)
            }

            function Ks(e, t, n, r, l, a, o, i, u, s, c, f, d, p) {
                if (e.timeoutHandle = -1, 8192 & (f = t.subtreeFlags) || !(16785408 & ~f)) {
                    rs(t, a, f = {
                        stylesheets: null,
                        count: 0,
                        imgCount: 0,
                        imgBytes: 0,
                        suspenseyImages: [],
                        waitingForImages: !0,
                        waitingForViewTransition: !1,
                        unsuspend: Nt
                    });
                    var m = (62914560 & a) === a ? Ns - oe() : (4194048 & a) === a ? Ls - oe() : 0;
                    if (null !== (m = function(e, t) {
                            return e.stylesheets && 0 === e.count && id(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
                                var r = setTimeout(function() {
                                    if (e.stylesheets && id(e, e.stylesheets), e.unsuspend) {
                                        var t = e.unsuspend;
                                        e.unsuspend = null, t()
                                    }
                                }, 6e4 + t);
                                0 < e.imgBytes && 0 === ld && (ld = 62500 * function() {
                                    if ("function" == typeof performance.getEntriesByType) {
                                        for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
                                            var l = n[r],
                                                a = l.transferSize,
                                                o = l.initiatorType,
                                                i = l.duration;
                                            if (a && i && df(o)) {
                                                for (o = 0, i = l.responseEnd, r += 1; r < n.length; r++) {
                                                    var u = n[r],
                                                        s = u.startTime;
                                                    if (s > i) break;
                                                    var c = u.transferSize,
                                                        f = u.initiatorType;
                                                    c && df(f) && (o += c * ((u = u.responseEnd) < i ? 1 : (i - s) / (u - s)))
                                                }
                                                if (--r, t += 8 * (a + o) / (l.duration / 1e3), 10 < ++e) break
                                            }
                                        }
                                        if (0 < e) return t / e / 1e6
                                    }
                                    return navigator.connection && "number" == typeof(e = navigator.connection.downlink) ? e : 5
                                }());
                                var l = setTimeout(function() {
                                    if (e.waitingForImages = !1, 0 === e.count && (e.stylesheets && id(e, e.stylesheets), e.unsuspend)) {
                                        var t = e.unsuspend;
                                        e.unsuspend = null, t()
                                    }
                                }, (e.imgBytes > ld ? 50 : 800) + t);
                                return e.unsuspend = n,
                                    function() {
                                        e.unsuspend = null, clearTimeout(r), clearTimeout(l)
                                    }
                            } : null
                        }(f, m))) return Ds = a, e.cancelPendingCommit = m(pc.bind(null, e, t, a, n, r, l, o, i, u, c, f, null, d, p)), void Ys(e, a, o, !s)
                }
                pc(e, t, a, n, r, l, o, i, u)
            }

            function Gs(e) {
                for (var t = e;;) {
                    var n = t.tag;
                    if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && null !== (n = t.updateQueue) && null !== (n = n.stores))
                        for (var r = 0; r < n.length; r++) {
                            var l = n[r],
                                a = l.getSnapshot;
                            l = l.value;
                            try {
                                if (!Yn(a(), l)) return !1
                            } catch (e) {
                                return !1
                            }
                        }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                    else {
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return !0;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }
                return !0
            }

            function Ys(e, t, n, r) {
                t &= ~_s, t &= ~xs, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
                for (var l = t; 0 < l;) {
                    var a = 31 - ve(l),
                        o = 1 << a;
                    r[a] = -1, l &= ~o
                }
                0 !== n && Le(e, n, t)
            }

            function Xs() {
                return !!(6 & fs) || (Mc(0, !1), !1)
            }

            function Zs() {
                if (null !== ps) {
                    if (0 === hs) var e = ps.return;
                    else wl = Sl = null, lo(e = ps), aa = null, oa = 0, e = ps;
                    for (; null !== e;) pu(e.alternate, e), e = e.return;
                    ps = null
                }
            }

            function Js(e, t) {
                var n = e.timeoutHandle; - 1 !== n && (e.timeoutHandle = -1, Sf(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Ds = 0, Zs(), ds = e, ps = n = Dr(e.current, null), ms = t, hs = 0, gs = null, ys = !1, vs = Ce(e, t), bs = !1, Cs = Es = _s = xs = ws = Ss = 0, Ts = Ps = null, zs = !1, 8 & t && (t |= 32 & t);
                var r = e.entangledLanes;
                if (0 !== r)
                    for (e = e.entanglements, r &= t; 0 < r;) {
                        var l = 31 - ve(r),
                            a = 1 << l;
                        t |= e[l], r &= ~a
                    }
                return ks = t, Tr(), n
            }

            function ec(e, t) {
                Ia = null, A.H = pi, t === Gl || t === Xl ? (t = ra(), hs = 3) : t === Yl ? (t = ra(), hs = 4) : hs = t === Ni ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, gs = t, null === ps && (Ss = 1, Ei(e, qr(t, e.current)))
            }

            function tc() {
                var e = Na.current;
                return null === e || ((4194048 & ms) === ms ? null === La : !!((62914560 & ms) === ms || 536870912 & ms) && e === La)
            }

            function nc() {
                var e = A.H;
                return A.H = pi, null === e ? pi : e
            }

            function rc() {
                var e = A.A;
                return A.A = ss, e
            }

            function lc() {
                Ss = 4, ys || (4194048 & ms) !== ms && null !== Na.current || (vs = !0), !(134217727 & ws) && !(134217727 & xs) || null === ds || Ys(ds, ms, Es, !1)
            }

            function ac(e, t, n) {
                var r = fs;
                fs |= 2;
                var l = nc(),
                    a = rc();
                ds === e && ms === t || (Os = null, Js(e, t)), t = !1;
                var o = Ss;
                e: for (;;) try {
                    if (0 !== hs && null !== ps) {
                        var i = ps,
                            u = gs;
                        switch (hs) {
                            case 8:
                                Zs(), o = 6;
                                break e;
                            case 3:
                            case 2:
                            case 9:
                            case 6:
                                null === Na.current && (t = !0);
                                var s = hs;
                                if (hs = 0, gs = null, cc(e, i, u, s), n && vs) {
                                    o = 0;
                                    break e
                                }
                                break;
                            default:
                                s = hs, hs = 0, gs = null, cc(e, i, u, s)
                        }
                    }
                    oc(), o = Ss;
                    break
                } catch (t) {
                    ec(e, t)
                }
                return t && e.shellSuspendCounter++, wl = Sl = null, fs = r, A.H = l, A.A = a, null === ps && (ds = null, ms = 0, Tr()), o
            }

            function oc() {
                for (; null !== ps;) uc(ps)
            }

            function ic() {
                for (; null !== ps && !le();) uc(ps)
            }

            function uc(e) {
                var t = lu(e.alternate, e, ks);
                e.memoizedProps = e.pendingProps, null === t ? fc(e) : ps = t
            }

            function sc(e) {
                var t = e,
                    n = t.alternate;
                switch (t.tag) {
                    case 15:
                    case 0:
                        t = Bi(n, t, t.pendingProps, t.type, void 0, ms);
                        break;
                    case 11:
                        t = Bi(n, t, t.pendingProps, t.type.render, t.ref, ms);
                        break;
                    case 5:
                        lo(t);
                    default:
                        pu(n, t), t = lu(n, t = ps = $r(t, ks), ks)
                }
                e.memoizedProps = e.pendingProps, null === t ? fc(e) : ps = t
            }

            function cc(e, t, n, r) {
                wl = Sl = null, lo(t), aa = null, oa = 0;
                var a = t.return;
                try {
                    if (function(e, t, n, r, a) {
                            if (n.flags |= 32768, null !== r && "object" == typeof r && "function" == typeof r.then) {
                                if (null !== (t = n.alternate) && Pl(t, n, a, !0), null !== (n = Na.current)) {
                                    switch (n.tag) {
                                        case 31:
                                        case 13:
                                            return null === La ? lc() : null === n.alternate && 0 === Ss && (Ss = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Zl ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([r]) : t.add(r), wc(e, r, a)), !1;
                                        case 22:
                                            return n.flags |= 65536, r === Zl ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                                transitions: null,
                                                markerInstances: null,
                                                retryQueue: new Set([r])
                                            }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([r]) : n.add(r), wc(e, r, a)), !1
                                    }
                                    throw Error(l(435, n.tag))
                                }
                                return wc(e, r, a), lc(), !1
                            }
                            if (sl) return null !== (t = Na.current) ? (!(65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== dl && bl(qr(e = Error(l(422), {
                                cause: r
                            }), n))) : (r !== dl && bl(qr(t = Error(l(423), {
                                cause: r
                            }), n)), (e = e.current.alternate).flags |= 65536, a &= -a, e.lanes |= a, r = qr(r, n), ba(e, a = Pi(e.stateNode, r, a)), 4 !== Ss && (Ss = 2)), !1;
                            var o = Error(l(520), {
                                cause: r
                            });
                            if (o = qr(o, n), null === Ps ? Ps = [o] : Ps.push(o), 4 !== Ss && (Ss = 2), null === t) return !0;
                            r = qr(r, n), n = t;
                            do {
                                switch (n.tag) {
                                    case 3:
                                        return n.flags |= 65536, e = a & -a, n.lanes |= e, ba(n, e = Pi(n.stateNode, r, e)), !1;
                                    case 1:
                                        if (t = n.type, o = n.stateNode, !(128 & n.flags || "function" != typeof t.getDerivedStateFromError && (null === o || "function" != typeof o.componentDidCatch || null !== js && js.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, zi(a = Ti(a), e, n, r), ba(n, a), !1
                                }
                                n = n.return
                            } while (null !== n);
                            return !1
                        }(e, a, t, n, ms)) return Ss = 1, Ei(e, qr(n, e.current)), void(ps = null)
                } catch (t) {
                    if (null !== a) throw ps = a, t;
                    return Ss = 1, Ei(e, qr(n, e.current)), void(ps = null)
                }
                32768 & t.flags ? (sl || 1 === r ? e = !0 : vs || 536870912 & ms ? e = !1 : (ys = e = !0, (2 === r || 9 === r || 3 === r || 6 === r) && null !== (r = Na.current) && 13 === r.tag && (r.flags |= 16384)), dc(t, e)) : fc(t)
            }

            function fc(e) {
                var t = e;
                do {
                    if (32768 & t.flags) return void dc(t, ys);
                    e = t.return;
                    var n = fu(t.alternate, t, ks);
                    if (null !== n) return void(ps = n);
                    if (null !== (t = t.sibling)) return void(ps = t);
                    ps = t = e
                } while (null !== t);
                0 === Ss && (Ss = 5)
            }

            function dc(e, t) {
                do {
                    var n = du(e.alternate, e);
                    if (null !== n) return n.flags &= 32767, void(ps = n);
                    if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) return void(ps = e);
                    ps = e = n
                } while (null !== e);
                Ss = 6, ps = null
            }

            function pc(e, t, n, r, a, o, i, u, s) {
                e.cancelPendingCommit = null;
                do {
                    vc()
                } while (0 !== Rs);
                if (6 & fs) throw Error(l(327));
                if (null !== t) {
                    if (t === e.current) throw Error(l(177));
                    if (o = t.lanes | t.childLanes, function(e, t, n, r, l, a) {
                            var o = e.pendingLanes;
                            e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                            var i = e.entanglements,
                                u = e.expirationTimes,
                                s = e.hiddenUpdates;
                            for (n = o & ~n; 0 < n;) {
                                var c = 31 - ve(n),
                                    f = 1 << c;
                                i[c] = 0, u[c] = -1;
                                var d = s[c];
                                if (null !== d)
                                    for (s[c] = null, c = 0; c < d.length; c++) {
                                        var p = d[c];
                                        null !== p && (p.lane &= -536870913)
                                    }
                                n &= ~f
                            }
                            0 !== r && Le(e, r, 0), 0 !== a && 0 === l && 0 !== e.tag && (e.suspendedLanes |= a & ~(o & ~t))
                        }(e, n, o |= Pr, i, u, s), e === ds && (ps = ds = null, ms = 0), Fs = t, Ms = e, Ds = n, $s = o, Is = a, Hs = r, 10256 & t.subtreeFlags || 10256 & t.flags ? (e.callbackNode = null, e.callbackPriority = 0, ne(ce, function() {
                            return bc(), null
                        })) : (e.callbackNode = null, e.callbackPriority = 0), r = !!(13878 & t.flags), 13878 & t.subtreeFlags || r) {
                        r = A.T, A.T = null, a = O.p, O.p = 2, i = fs, fs |= 4;
                        try {
                            ! function(e, t) {
                                if (e = e.containerInfo, pf = vd, nr(e = tr(e))) {
                                    if ("selectionStart" in e) var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    };
                                    else e: {
                                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var a = r.anchorOffset,
                                                o = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType, o.nodeType
                                            } catch (e) {
                                                n = null;
                                                break e
                                            }
                                            var i = 0,
                                                u = -1,
                                                s = -1,
                                                c = 0,
                                                f = 0,
                                                d = e,
                                                p = null;
                                            t: for (;;) {
                                                for (var m; d !== n || 0 !== a && 3 !== d.nodeType || (u = i + a), d !== o || 0 !== r && 3 !== d.nodeType || (s = i + r), 3 === d.nodeType && (i += d.nodeValue.length), null !== (m = d.firstChild);) p = d, d = m;
                                                for (;;) {
                                                    if (d === e) break t;
                                                    if (p === n && ++c === a && (u = i), p === o && ++f === r && (s = i), null !== (m = d.nextSibling)) break;
                                                    p = (d = p).parentNode
                                                }
                                                d = m
                                            }
                                            n = -1 === u || -1 === s ? null : {
                                                start: u,
                                                end: s
                                            }
                                        } else n = null
                                    }
                                    n = n || {
                                        start: 0,
                                        end: 0
                                    }
                                } else n = null;
                                for (mf = {
                                        focusedElem: e,
                                        selectionRange: n
                                    }, vd = !1, Lu = t; null !== Lu;)
                                    if (e = (t = Lu).child, 1028 & t.subtreeFlags && null !== e) e.return = t, Lu = e;
                                    else
                                        for (; null !== Lu;) {
                                            switch (o = (t = Lu).alternate, e = t.flags, t.tag) {
                                                case 0:
                                                    if (4 & e && null !== (e = null !== (e = t.updateQueue) ? e.events : null))
                                                        for (n = 0; n < e.length; n++)(a = e[n]).ref.impl = a.nextImpl;
                                                    break;
                                                case 11:
                                                case 15:
                                                case 5:
                                                case 26:
                                                case 27:
                                                case 6:
                                                case 4:
                                                case 17:
                                                    break;
                                                case 1:
                                                    if (1024 & e && null !== o) {
                                                        e = void 0, n = t, a = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
                                                        try {
                                                            var h = Si(n.type, a);
                                                            e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e
                                                        } catch (e) {
                                                            Sc(n, n.return, e)
                                                        }
                                                    }
                                                    break;
                                                case 3:
                                                    if (1024 & e)
                                                        if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) Tf(e);
                                                        else if (1 === n) switch (e.nodeName) {
                                                        case "HEAD":
                                                        case "HTML":
                                                        case "BODY":
                                                            Tf(e);
                                                            break;
                                                        default:
                                                            e.textContent = ""
                                                    }
                                                    break;
                                                default:
                                                    if (1024 & e) throw Error(l(163))
                                            }
                                            if (null !== (e = t.sibling)) {
                                                e.return = t.return, Lu = e;
                                                break
                                            }
                                            Lu = t.return
                                        }
                            }(e, t)
                        } finally {
                            fs = i, O.p = a, A.T = r
                        }
                    }
                    Rs = 1, mc(), hc(), gc()
                }
            }

            function mc() {
                if (1 === Rs) {
                    Rs = 0;
                    var e = Ms,
                        t = Fs,
                        n = !!(13878 & t.flags);
                    if (13878 & t.subtreeFlags || n) {
                        n = A.T, A.T = null;
                        var r = O.p;
                        O.p = 2;
                        var l = fs;
                        fs |= 4;
                        try {
                            Bu(t, e);
                            var a = mf,
                                o = tr(e.containerInfo),
                                i = a.focusedElem,
                                u = a.selectionRange;
                            if (o !== i && i && i.ownerDocument && er(i.ownerDocument.documentElement, i)) {
                                if (null !== u && nr(i)) {
                                    var s = u.start,
                                        c = u.end;
                                    if (void 0 === c && (c = s), "selectionStart" in i) i.selectionStart = s, i.selectionEnd = Math.min(c, i.value.length);
                                    else {
                                        var f = i.ownerDocument || document,
                                            d = f && f.defaultView || window;
                                        if (d.getSelection) {
                                            var p = d.getSelection(),
                                                m = i.textContent.length,
                                                h = Math.min(u.start, m),
                                                g = void 0 === u.end ? h : Math.min(u.end, m);
                                            !p.extend && h > g && (o = g, g = h, h = o);
                                            var y = Jn(i, h),
                                                v = Jn(i, g);
                                            if (y && v && (1 !== p.rangeCount || p.anchorNode !== y.node || p.anchorOffset !== y.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                                var b = f.createRange();
                                                b.setStart(y.node, y.offset), p.removeAllRanges(), h > g ? (p.addRange(b), p.extend(v.node, v.offset)) : (b.setEnd(v.node, v.offset), p.addRange(b))
                                            }
                                        }
                                    }
                                }
                                for (f = [], p = i; p = p.parentNode;) 1 === p.nodeType && f.push({
                                    element: p,
                                    left: p.scrollLeft,
                                    top: p.scrollTop
                                });
                                for ("function" == typeof i.focus && i.focus(), i = 0; i < f.length; i++) {
                                    var k = f[i];
                                    k.element.scrollLeft = k.left, k.element.scrollTop = k.top
                                }
                            }
                            vd = !!pf, mf = pf = null
                        } finally {
                            fs = l, O.p = r, A.T = n
                        }
                    }
                    e.current = t, Rs = 2
                }
            }

            function hc() {
                if (2 === Rs) {
                    Rs = 0;
                    var e = Ms,
                        t = Fs,
                        n = !!(8772 & t.flags);
                    if (8772 & t.subtreeFlags || n) {
                        n = A.T, A.T = null;
                        var r = O.p;
                        O.p = 2;
                        var l = fs;
                        fs |= 4;
                        try {
                            Au(e, t.alternate, t)
                        } finally {
                            fs = l, O.p = r, A.T = n
                        }
                    }
                    Rs = 3
                }
            }

            function gc() {
                if (4 === Rs || 3 === Rs) {
                    Rs = 0, ae();
                    var e = Ms,
                        t = Fs,
                        n = Ds,
                        r = Hs;
                    10256 & t.subtreeFlags || 10256 & t.flags ? Rs = 5 : (Rs = 0, Fs = Ms = null, yc(e, e.pendingLanes));
                    var l = e.pendingLanes;
                    if (0 === l && (js = null), Re(n), t = t.stateNode, ge && "function" == typeof ge.onCommitFiberRoot) try {
                        ge.onCommitFiberRoot(he, t, void 0, !(128 & ~t.current.flags))
                    } catch (e) {}
                    if (null !== r) {
                        t = A.T, l = O.p, O.p = 2, A.T = null;
                        try {
                            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                                var i = r[o];
                                a(i.value, {
                                    componentStack: i.stack
                                })
                            }
                        } finally {
                            A.T = t, O.p = l
                        }
                    }
                    3 & Ds && vc(), Rc(e), l = e.pendingLanes, 261930 & n && 42 & l ? e === Bs ? Us++ : (Us = 0, Bs = e) : Us = 0, Mc(0, !1)
                }
            }

            function yc(e, t) {
                0 === (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && (e.pooledCache = null, Dl(t))
            }

            function vc() {
                return mc(), hc(), gc(), bc()
            }

            function bc() {
                if (5 !== Rs) return !1;
                var e = Ms,
                    t = $s;
                $s = 0;
                var n = Re(Ds),
                    r = A.T,
                    a = O.p;
                try {
                    O.p = 32 > n ? 32 : n, A.T = null, n = Is, Is = null;
                    var o = Ms,
                        i = Ds;
                    if (Rs = 0, Fs = Ms = null, Ds = 0, 6 & fs) throw Error(l(331));
                    var u = fs;
                    if (fs |= 4, os(o.current), Zu(o, o.current, i, n), fs = u, Mc(0, !1), ge && "function" == typeof ge.onPostCommitFiberRoot) try {
                        ge.onPostCommitFiberRoot(he, o)
                    } catch (e) {}
                    return !0
                } finally {
                    O.p = a, A.T = r, yc(e, t)
                }
            }

            function kc(e, t, n) {
                t = qr(n, t), null !== (e = ya(e, t = Pi(e.stateNode, t, 2), 2)) && (Ne(e, 2), Rc(e))
            }

            function Sc(e, t, n) {
                if (3 === e.tag) kc(e, e, n);
                else
                    for (; null !== t;) {
                        if (3 === t.tag) {
                            kc(t, e, n);
                            break
                        }
                        if (1 === t.tag) {
                            var r = t.stateNode;
                            if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === js || !js.has(r))) {
                                e = qr(n, e), null !== (r = ya(t, n = Ti(2), 2)) && (zi(n, r, t, e), Ne(r, 2), Rc(r));
                                break
                            }
                        }
                        t = t.return
                    }
            }

            function wc(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new cs;
                    var l = new Set;
                    r.set(t, l)
                } else void 0 === (l = r.get(t)) && (l = new Set, r.set(t, l));
                l.has(n) || (bs = !0, l.add(n), e = xc.bind(null, e, t, n), t.then(e, e))
            }

            function xc(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ds === e && (ms & n) === n && (4 === Ss || 3 === Ss && (62914560 & ms) === ms && 300 > oe() - Ns ? !(2 & fs) && Js(e, 0) : _s |= n, Cs === ms && (Cs = 0)), Rc(e)
            }

            function _c(e, t) {
                0 === t && (t = Te()), null !== (e = Lr(e, t)) && (Ne(e, t), Rc(e))
            }

            function Ec(e) {
                var t = e.memoizedState,
                    n = 0;
                null !== t && (n = t.retryLane), _c(e, n)
            }

            function Cc(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 31:
                    case 13:
                        var r = e.stateNode,
                            a = e.memoizedState;
                        null !== a && (n = a.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    case 22:
                        r = e.stateNode._retryCache;
                        break;
                    default:
                        throw Error(l(314))
                }
                null !== r && r.delete(t), _c(e, n)
            }
            var Pc, Tc, zc = null,
                Nc = null,
                Lc = !1,
                Ac = !1,
                Oc = !1,
                jc = 0;

            function Rc(e) {
                e !== Nc && null === e.next && (null === Nc ? zc = Nc = e : Nc = Nc.next = e), Ac = !0, Lc || (Lc = !0, xf(function() {
                    6 & fs ? ne(ue, Fc) : Dc()
                }))
            }

            function Mc(e, t) {
                if (!Oc && Ac) {
                    Oc = !0;
                    do {
                        for (var n = !1, r = zc; null !== r;) {
                            if (!t)
                                if (0 !== e) {
                                    var l = r.pendingLanes;
                                    if (0 === l) var a = 0;
                                    else {
                                        var o = r.suspendedLanes,
                                            i = r.pingedLanes;
                                        a = (1 << 31 - ve(42 | e) + 1) - 1, a = 201326741 & (a &= l & ~(o & ~i)) ? 201326741 & a | 1 : a ? 2 | a : 0
                                    }
                                    0 !== a && (n = !0, Hc(r, a))
                                } else a = ms, !(3 & (a = Ee(r, r === ds ? a : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || Ce(r, a) || (n = !0, Hc(r, a));
                            r = r.next
                        }
                    } while (n);
                    Oc = !1
                }
            }

            function Fc() {
                Dc()
            }

            function Dc() {
                Ac = Lc = !1;
                var e, t = 0;
                0 !== jc && ((e = window.event) && "popstate" === e.type ? e !== bf && (bf = e, 1) : (bf = null, 0)) && (t = jc);
                for (var n = oe(), r = null, l = zc; null !== l;) {
                    var a = l.next,
                        o = $c(l, n);
                    0 === o ? (l.next = null, null === r ? zc = a : r.next = a, null === a && (Nc = r)) : (r = l, (0 !== t || 3 & o) && (Ac = !0)), l = a
                }
                0 !== Rs && 5 !== Rs || Mc(t, !1), 0 !== jc && (jc = 0)
            }

            function $c(e, t) {
                for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = -62914561 & e.pendingLanes; 0 < a;) {
                    var o = 31 - ve(a),
                        i = 1 << o,
                        u = l[o]; - 1 === u ? 0 !== (i & n) && 0 === (i & r) || (l[o] = Pe(i, t)) : u <= t && (e.expiredLanes |= i), a &= ~i
                }
                if (n = ms, n = Ee(e, e === (t = ds) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === hs || 9 === hs) || null !== e.cancelPendingCommit) return null !== r && null !== r && re(r), e.callbackNode = null, e.callbackPriority = 0;
                if (!(3 & n) || Ce(e, n)) {
                    if ((t = n & -n) === e.callbackPriority) return t;
                    switch (null !== r && re(r), Re(n)) {
                        case 2:
                        case 8:
                            n = se;
                            break;
                        case 32:
                        default:
                            n = ce;
                            break;
                        case 268435456:
                            n = de
                    }
                    return r = Ic.bind(null, e), n = ne(n, r), e.callbackPriority = t, e.callbackNode = n, t
                }
                return null !== r && null !== r && re(r), e.callbackPriority = 2, e.callbackNode = null, 2
            }

            function Ic(e, t) {
                if (0 !== Rs && 5 !== Rs) return e.callbackNode = null, e.callbackPriority = 0, null;
                var n = e.callbackNode;
                if (vc() && e.callbackNode !== n) return null;
                var r = ms;
                return 0 === (r = Ee(e, e === ds ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (Qs(e, r, t), $c(e, oe()), null != e.callbackNode && e.callbackNode === n ? Ic.bind(null, e) : null)
            }

            function Hc(e, t) {
                if (vc()) return null;
                Qs(e, t, !0)
            }

            function Uc() {
                if (0 === jc) {
                    var e = Hl;
                    0 === e && (e = Se, !(261888 & (Se <<= 1)) && (Se = 256)), jc = e
                }
                return jc
            }

            function Bc(e) {
                return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : zt("" + e)
            }

            function Vc(e, t) {
                var n = t.ownerDocument.createElement("input");
                return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
            }
            for (Tc = 0; Tc < wr.length; Tc++) xr((Pc = wr[Tc]).toLowerCase(), "on" + (Pc[0].toUpperCase() + Pc.slice(1)));
            xr(mr, "onAnimationEnd"), xr(hr, "onAnimationIteration"), xr(gr, "onAnimationStart"), xr("dblclick", "onDoubleClick"), xr("focusin", "onFocus"), xr("focusout", "onBlur"), xr(yr, "onTransitionRun"), xr(vr, "onTransitionStart"), xr(br, "onTransitionCancel"), xr(kr, "onTransitionEnd"), nt("onMouseEnter", ["mouseout", "mouseover"]), nt("onMouseLeave", ["mouseout", "mouseover"]), nt("onPointerEnter", ["pointerout", "pointerover"]), nt("onPointerLeave", ["pointerout", "pointerover"]), tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Wc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                qc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wc));

            function Qc(e, t) {
                t = !!(4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        l = r.event;
                    r = r.listeners;
                    e: {
                        var a = void 0;
                        if (t)
                            for (var o = r.length - 1; 0 <= o; o--) {
                                var i = r[o],
                                    u = i.instance,
                                    s = i.currentTarget;
                                if (i = i.listener, u !== a && l.isPropagationStopped()) break e;
                                a = i, l.currentTarget = s;
                                try {
                                    a(l)
                                } catch (e) {
                                    _r(e)
                                }
                                l.currentTarget = null, a = u
                            } else
                                for (o = 0; o < r.length; o++) {
                                    if (u = (i = r[o]).instance, s = i.currentTarget, i = i.listener, u !== a && l.isPropagationStopped()) break e;
                                    a = i, l.currentTarget = s;
                                    try {
                                        a(l)
                                    } catch (e) {
                                        _r(e)
                                    }
                                    l.currentTarget = null, a = u
                                }
                    }
                }
            }

            function Kc(e, t) {
                var n = t[Ue];
                void 0 === n && (n = t[Ue] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Zc(t, e, 2, !1), n.add(r))
            }

            function Gc(e, t, n) {
                var r = 0;
                t && (r |= 4), Zc(n, e, r, t)
            }
            var Yc = "_reactListening" + Math.random().toString(36).slice(2);

            function Xc(e) {
                if (!e[Yc]) {
                    e[Yc] = !0, Je.forEach(function(t) {
                        "selectionchange" !== t && (qc.has(t) || Gc(t, !1, e), Gc(t, !0, e))
                    });
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Yc] || (t[Yc] = !0, Gc("selectionchange", !1, t))
                }
            }

            function Zc(e, t, n, r) {
                switch (Ed(t)) {
                    case 2:
                        var l = bd;
                        break;
                    case 8:
                        l = kd;
                        break;
                    default:
                        l = Sd
                }
                n = l.bind(null, t, n, e), l = void 0, !Ht || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (l = !0), r ? void 0 !== l ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: l
                }) : e.addEventListener(t, n, !0) : void 0 !== l ? e.addEventListener(t, n, {
                    passive: l
                }) : e.addEventListener(t, n, !1)
            }

            function Jc(e, t, n, r, l) {
                var a = r;
                if (!(1 & t || 2 & t || null === r)) e: for (;;) {
                    if (null === r) return;
                    var i = r.tag;
                    if (3 === i || 4 === i) {
                        var u = r.stateNode.containerInfo;
                        if (u === l) break;
                        if (4 === i)
                            for (i = r.return; null !== i;) {
                                var s = i.tag;
                                if ((3 === s || 4 === s) && i.stateNode.containerInfo === l) return;
                                i = i.return
                            }
                        for (; null !== u;) {
                            if (null === (i = Ke(u))) return;
                            if (5 === (s = i.tag) || 6 === s || 26 === s || 27 === s) {
                                r = a = i;
                                continue e
                            }
                            u = u.parentNode
                        }
                    }
                    r = r.return
                }
                Ft(function() {
                    var r = a,
                        l = At(n),
                        i = [];
                    e: {
                        var u = Sr.get(e);
                        if (void 0 !== u) {
                            var s = en,
                                c = e;
                            switch (e) {
                                case "keypress":
                                    if (0 === qt(n)) break e;
                                case "keydown":
                                case "keyup":
                                    s = gn;
                                    break;
                                case "focusin":
                                    c = "focus", s = on;
                                    break;
                                case "focusout":
                                    c = "blur", s = on;
                                    break;
                                case "beforeblur":
                                case "afterblur":
                                    s = on;
                                    break;
                                case "click":
                                    if (2 === n.button) break e;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    s = ln;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    s = an;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    s = vn;
                                    break;
                                case mr:
                                case hr:
                                case gr:
                                    s = un;
                                    break;
                                case kr:
                                    s = bn;
                                    break;
                                case "scroll":
                                case "scrollend":
                                    s = nn;
                                    break;
                                case "wheel":
                                    s = kn;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    s = sn;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    s = yn;
                                    break;
                                case "toggle":
                                case "beforetoggle":
                                    s = Sn
                            }
                            var f = !!(4 & t),
                                d = !f && ("scroll" === e || "scrollend" === e),
                                p = f ? null !== u ? u + "Capture" : null : u;
                            f = [];
                            for (var m, h = r; null !== h;) {
                                var g = h;
                                if (m = g.stateNode, 5 !== (g = g.tag) && 26 !== g && 27 !== g || null === m || null === p || null != (g = Dt(h, p)) && f.push(ef(h, g, m)), d) break;
                                h = h.return
                            }
                            0 < f.length && (u = new s(u, c, null, n, l), i.push({
                                event: u,
                                listeners: f
                            }))
                        }
                    }
                    if (!(7 & t)) {
                        if (s = "mouseout" === e || "pointerout" === e, (!(u = "mouseover" === e || "pointerover" === e) || n === Lt || !(c = n.relatedTarget || n.fromElement) || !Ke(c) && !c[He]) && (s || u) && (u = l.window === l ? l : (u = l.ownerDocument) ? u.defaultView || u.parentWindow : window, s ? (s = r, null !== (c = (c = n.relatedTarget || n.toElement) ? Ke(c) : null) && (d = o(c), f = c.tag, c !== d || 5 !== f && 27 !== f && 6 !== f) && (c = null)) : (s = null, c = r), s !== c)) {
                            if (f = ln, g = "onMouseLeave", p = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (f = yn, g = "onPointerLeave", p = "onPointerEnter", h = "pointer"), d = null == s ? u : Ye(s), m = null == c ? u : Ye(c), (u = new f(g, h + "leave", s, n, l)).target = d, u.relatedTarget = m, g = null, Ke(l) === r && ((f = new f(p, h + "enter", c, n, l)).target = m, f.relatedTarget = d, g = f), d = g, s && c) e: {
                                for (f = nf, h = c, m = 0, g = p = s; g; g = f(g)) m++;g = 0;
                                for (var y = h; y; y = f(y)) g++;
                                for (; 0 < m - g;) p = f(p),
                                m--;
                                for (; 0 < g - m;) h = f(h),
                                g--;
                                for (; m--;) {
                                    if (p === h || null !== h && p === h.alternate) {
                                        f = p;
                                        break e
                                    }
                                    p = f(p), h = f(h)
                                }
                                f = null
                            }
                            else f = null;
                            null !== s && rf(i, u, s, f, !1), null !== c && null !== d && rf(i, d, c, f, !0)
                        }
                        if ("select" === (s = (u = r ? Ye(r) : window).nodeName && u.nodeName.toLowerCase()) || "input" === s && "file" === u.type) var v = $n;
                        else if (On(u))
                            if (Bn) v = Gn;
                            else {
                                v = Qn;
                                var b = qn
                            }
                        else !(s = u.nodeName) || "input" !== s.toLowerCase() || "checkbox" !== u.type && "radio" !== u.type ? r && Ct(r.elementType) && (v = $n) : v = Kn;
                        switch (v && (v = v(e, r)) ? jn(i, v, n, l) : (b && b(e, u, r), "focusout" === e && r && "number" === u.type && null != r.memoizedProps.value && vt(u, "number", u.value)), b = r ? Ye(r) : window, e) {
                            case "focusin":
                                (On(b) || "true" === b.contentEditable) && (lr = b, ar = r, or = null);
                                break;
                            case "focusout":
                                or = ar = lr = null;
                                break;
                            case "mousedown":
                                ir = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                ir = !1, ur(i, n, l);
                                break;
                            case "selectionchange":
                                if (rr) break;
                            case "keydown":
                            case "keyup":
                                ur(i, n, l)
                        }
                        var k;
                        if (xn) e: {
                            switch (e) {
                                case "compositionstart":
                                    var S = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    S = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    S = "onCompositionUpdate";
                                    break e
                            }
                            S = void 0
                        }
                        else Ln ? zn(e, n) && (S = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (S = "onCompositionStart");
                        S && (Cn && "ko" !== n.locale && (Ln || "onCompositionStart" !== S ? "onCompositionEnd" === S && Ln && (k = Wt()) : (Bt = "value" in (Ut = l) ? Ut.value : Ut.textContent, Ln = !0)), 0 < (b = tf(r, S)).length && (S = new cn(S, e, null, n, l), i.push({
                                event: S,
                                listeners: b
                            }), (k || null !== (k = Nn(n))) && (S.data = k))), (k = En ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Nn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Tn = !0, Pn);
                                    case "textInput":
                                        return (e = t.data) === Pn && Tn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Ln) return "compositionend" === e || !xn && zn(e, t) ? (e = Wt(), Vt = Bt = Ut = null, Ln = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Cn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && 0 < (S = tf(r, "onBeforeInput")).length && (b = new cn("onBeforeInput", "beforeinput", null, n, l), i.push({
                                event: b,
                                listeners: S
                            }), b.data = k),
                            function(e, t, n, r, l) {
                                if ("submit" === t && n && n.stateNode === l) {
                                    var a = Bc((l[Ie] || null).action),
                                        o = r.submitter;
                                    o && null !== (t = (t = o[Ie] || null) ? Bc(t.formAction) : o.getAttribute("formAction")) && (a = t, o = null);
                                    var i = new en("action", "action", null, r, l);
                                    e.push({
                                        event: i,
                                        listeners: [{
                                            instance: null,
                                            listener: function() {
                                                if (r.defaultPrevented) {
                                                    if (0 !== jc) {
                                                        var e = o ? Vc(l, o) : new FormData(l);
                                                        Jo(n, {
                                                            pending: !0,
                                                            data: e,
                                                            method: l.method,
                                                            action: a
                                                        }, null, e)
                                                    }
                                                } else "function" == typeof a && (i.preventDefault(), e = o ? Vc(l, o) : new FormData(l), Jo(n, {
                                                    pending: !0,
                                                    data: e,
                                                    method: l.method,
                                                    action: a
                                                }, a, e))
                                            },
                                            currentTarget: l
                                        }]
                                    })
                                }
                            }(i, e, r, n, l)
                    }
                    Qc(i, t)
                })
            }

            function ef(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }

            function tf(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var l = e,
                        a = l.stateNode;
                    if (5 !== (l = l.tag) && 26 !== l && 27 !== l || null === a || (null != (l = Dt(e, n)) && r.unshift(ef(e, l, a)), null != (l = Dt(e, t)) && r.push(ef(e, l, a))), 3 === e.tag) return r;
                    e = e.return
                }
                return []
            }

            function nf(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag && 27 !== e.tag);
                return e || null
            }

            function rf(e, t, n, r, l) {
                for (var a = t._reactName, o = []; null !== n && n !== r;) {
                    var i = n,
                        u = i.alternate,
                        s = i.stateNode;
                    if (i = i.tag, null !== u && u === r) break;
                    5 !== i && 26 !== i && 27 !== i || null === s || (u = s, l ? null != (s = Dt(n, a)) && o.unshift(ef(n, s, u)) : l || null != (s = Dt(n, a)) && o.push(ef(n, s, u))), n = n.return
                }
                0 !== o.length && e.push({
                    event: t,
                    listeners: o
                })
            }
            var lf = /\r\n?/g,
                af = /\u0000|\uFFFD/g;

            function of(e) {
                return ("string" == typeof e ? e : "" + e).replace(lf, "\n").replace(af, "")
            }

            function uf(e, t) {
                return t = of(t), of(e) === t
            }

            function sf(e, t, n, r, a, o) {
                switch (n) {
                    case "children":
                        "string" == typeof r ? "body" === t || "textarea" === t && "" === r || wt(e, r) : ("number" == typeof r || "bigint" == typeof r) && "body" !== t && wt(e, "" + r);
                        break;
                    case "className":
                        it(e, "class", r);
                        break;
                    case "tabIndex":
                        it(e, "tabindex", r);
                        break;
                    case "dir":
                    case "role":
                    case "viewBox":
                    case "width":
                    case "height":
                        it(e, n, r);
                        break;
                    case "style":
                        Et(e, r, o);
                        break;
                    case "data":
                        if ("object" !== t) {
                            it(e, "data", r);
                            break
                        }
                    case "src":
                    case "href":
                        if ("" === r && ("a" !== t || "href" !== n)) {
                            e.removeAttribute(n);
                            break
                        }
                        if (null == r || "function" == typeof r || "symbol" == typeof r || "boolean" == typeof r) {
                            e.removeAttribute(n);
                            break
                        }
                        r = zt("" + r), e.setAttribute(n, r);
                        break;
                    case "action":
                    case "formAction":
                        if ("function" == typeof r) {
                            e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                            break
                        }
                        if ("function" == typeof o && ("formAction" === n ? ("input" !== t && sf(e, t, "name", a.name, a, null), sf(e, t, "formEncType", a.formEncType, a, null), sf(e, t, "formMethod", a.formMethod, a, null), sf(e, t, "formTarget", a.formTarget, a, null)) : (sf(e, t, "encType", a.encType, a, null), sf(e, t, "method", a.method, a, null), sf(e, t, "target", a.target, a, null))), null == r || "symbol" == typeof r || "boolean" == typeof r) {
                            e.removeAttribute(n);
                            break
                        }
                        r = zt("" + r), e.setAttribute(n, r);
                        break;
                    case "onClick":
                        null != r && (e.onclick = Nt);
                        break;
                    case "onScroll":
                        null != r && Kc("scroll", e);
                        break;
                    case "onScrollEnd":
                        null != r && Kc("scrollend", e);
                        break;
                    case "dangerouslySetInnerHTML":
                        if (null != r) {
                            if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                            if (null != (n = r.__html)) {
                                if (null != a.children) throw Error(l(60));
                                e.innerHTML = n
                            }
                        }
                        break;
                    case "multiple":
                        e.multiple = r && "function" != typeof r && "symbol" != typeof r;
                        break;
                    case "muted":
                        e.muted = r && "function" != typeof r && "symbol" != typeof r;
                        break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "defaultValue":
                    case "defaultChecked":
                    case "innerHTML":
                    case "ref":
                    case "autoFocus":
                        break;
                    case "xlinkHref":
                        if (null == r || "function" == typeof r || "boolean" == typeof r || "symbol" == typeof r) {
                            e.removeAttribute("xlink:href");
                            break
                        }
                        n = zt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                        break;
                    case "contentEditable":
                    case "spellCheck":
                    case "draggable":
                    case "value":
                    case "autoReverse":
                    case "externalResourcesRequired":
                    case "focusable":
                    case "preserveAlpha":
                        null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
                        break;
                    case "inert":
                    case "allowFullScreen":
                    case "async":
                    case "autoPlay":
                    case "controls":
                    case "default":
                    case "defer":
                    case "disabled":
                    case "disablePictureInPicture":
                    case "disableRemotePlayback":
                    case "formNoValidate":
                    case "hidden":
                    case "loop":
                    case "noModule":
                    case "noValidate":
                    case "open":
                    case "playsInline":
                    case "readOnly":
                    case "required":
                    case "reversed":
                    case "scoped":
                    case "seamless":
                    case "itemScope":
                        r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, "") : e.removeAttribute(n);
                        break;
                    case "capture":
                    case "download":
                        !0 === r ? e.setAttribute(n, "") : !1 !== r && null != r && "function" != typeof r && "symbol" != typeof r ? e.setAttribute(n, r) : e.removeAttribute(n);
                        break;
                    case "cols":
                    case "rows":
                    case "size":
                    case "span":
                        null != r && "function" != typeof r && "symbol" != typeof r && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
                        break;
                    case "rowSpan":
                    case "start":
                        null == r || "function" == typeof r || "symbol" == typeof r || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
                        break;
                    case "popover":
                        Kc("beforetoggle", e), Kc("toggle", e), ot(e, "popover", r);
                        break;
                    case "xlinkActuate":
                        ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
                        break;
                    case "xlinkArcrole":
                        ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
                        break;
                    case "xlinkRole":
                        ut(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
                        break;
                    case "xlinkShow":
                        ut(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
                        break;
                    case "xlinkTitle":
                        ut(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
                        break;
                    case "xlinkType":
                        ut(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
                        break;
                    case "xmlBase":
                        ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
                        break;
                    case "xmlLang":
                        ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
                        break;
                    case "xmlSpace":
                        ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
                        break;
                    case "is":
                        ot(e, "is", r);
                        break;
                    case "innerText":
                    case "textContent":
                        break;
                    default:
                        (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && ot(e, n = Pt.get(n) || n, r)
                }
            }

            function cf(e, t, n, r, a, o) {
                switch (n) {
                    case "style":
                        Et(e, r, o);
                        break;
                    case "dangerouslySetInnerHTML":
                        if (null != r) {
                            if ("object" != typeof r || !("__html" in r)) throw Error(l(61));
                            if (null != (n = r.__html)) {
                                if (null != a.children) throw Error(l(60));
                                e.innerHTML = n
                            }
                        }
                        break;
                    case "children":
                        "string" == typeof r ? wt(e, r) : ("number" == typeof r || "bigint" == typeof r) && wt(e, "" + r);
                        break;
                    case "onScroll":
                        null != r && Kc("scroll", e);
                        break;
                    case "onScrollEnd":
                        null != r && Kc("scrollend", e);
                        break;
                    case "onClick":
                        null != r && (e.onclick = Nt);
                        break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "innerHTML":
                    case "ref":
                    case "innerText":
                    case "textContent":
                        break;
                    default:
                        et.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), "function" == typeof(o = null != (o = e[Ie] || null) ? o[n] : null) && e.removeEventListener(t, o, a), "function" != typeof r) ? n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : ot(e, n, r) : ("function" != typeof o && null !== o && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a)))
                }
            }

            function ff(e, t, n) {
                switch (t) {
                    case "div":
                    case "span":
                    case "svg":
                    case "path":
                    case "a":
                    case "g":
                    case "p":
                    case "li":
                        break;
                    case "img":
                        Kc("error", e), Kc("load", e);
                        var r, a = !1,
                            o = !1;
                        for (r in n)
                            if (n.hasOwnProperty(r)) {
                                var i = n[r];
                                if (null != i) switch (r) {
                                    case "src":
                                        a = !0;
                                        break;
                                    case "srcSet":
                                        o = !0;
                                        break;
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        throw Error(l(137, t));
                                    default:
                                        sf(e, t, r, i, n, null)
                                }
                            } return o && sf(e, t, "srcSet", n.srcSet, n, null), void(a && sf(e, t, "src", n.src, n, null));
                    case "input":
                        Kc("invalid", e);
                        var u = r = i = o = null,
                            s = null,
                            c = null;
                        for (a in n)
                            if (n.hasOwnProperty(a)) {
                                var f = n[a];
                                if (null != f) switch (a) {
                                    case "name":
                                        o = f;
                                        break;
                                    case "type":
                                        i = f;
                                        break;
                                    case "checked":
                                        s = f;
                                        break;
                                    case "defaultChecked":
                                        c = f;
                                        break;
                                    case "value":
                                        r = f;
                                        break;
                                    case "defaultValue":
                                        u = f;
                                        break;
                                    case "children":
                                    case "dangerouslySetInnerHTML":
                                        if (null != f) throw Error(l(137, t));
                                        break;
                                    default:
                                        sf(e, t, a, f, n, null)
                                }
                            } return void yt(e, r, u, s, c, i, o, !1);
                    case "select":
                        for (o in Kc("invalid", e), a = i = r = null, n)
                            if (n.hasOwnProperty(o) && null != (u = n[o])) switch (o) {
                                case "value":
                                    r = u;
                                    break;
                                case "defaultValue":
                                    i = u;
                                    break;
                                case "multiple":
                                    a = u;
                                default:
                                    sf(e, t, o, u, n, null)
                            }
                        return t = r, n = i, e.multiple = !!a, void(null != t ? bt(e, !!a, t, !1) : null != n && bt(e, !!a, n, !0));
                    case "textarea":
                        for (i in Kc("invalid", e), r = o = a = null, n)
                            if (n.hasOwnProperty(i) && null != (u = n[i])) switch (i) {
                                case "value":
                                    a = u;
                                    break;
                                case "defaultValue":
                                    o = u;
                                    break;
                                case "children":
                                    r = u;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    if (null != u) throw Error(l(91));
                                    break;
                                default:
                                    sf(e, t, i, u, n, null)
                            }
                        return void St(e, a, o, r);
                    case "option":
                        for (s in n) n.hasOwnProperty(s) && null != (a = n[s]) && ("selected" === s ? e.selected = a && "function" != typeof a && "symbol" != typeof a : sf(e, t, s, a, n, null));
                        return;
                    case "dialog":
                        Kc("beforetoggle", e), Kc("toggle", e), Kc("cancel", e), Kc("close", e);
                        break;
                    case "iframe":
                    case "object":
                        Kc("load", e);
                        break;
                    case "video":
                    case "audio":
                        for (a = 0; a < Wc.length; a++) Kc(Wc[a], e);
                        break;
                    case "image":
                        Kc("error", e), Kc("load", e);
                        break;
                    case "details":
                        Kc("toggle", e);
                        break;
                    case "embed":
                    case "source":
                    case "link":
                        Kc("error", e), Kc("load", e);
                    case "area":
                    case "base":
                    case "br":
                    case "col":
                    case "hr":
                    case "keygen":
                    case "meta":
                    case "param":
                    case "track":
                    case "wbr":
                    case "menuitem":
                        for (c in n)
                            if (n.hasOwnProperty(c) && null != (a = n[c])) switch (c) {
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(l(137, t));
                                default:
                                    sf(e, t, c, a, n, null)
                            }
                        return;
                    default:
                        if (Ct(t)) {
                            for (f in n) n.hasOwnProperty(f) && void 0 !== (a = n[f]) && cf(e, t, f, a, n, void 0);
                            return
                        }
                }
                for (u in n) n.hasOwnProperty(u) && null != (a = n[u]) && sf(e, t, u, a, n, null)
            }

            function df(e) {
                switch (e) {
                    case "css":
                    case "script":
                    case "font":
                    case "img":
                    case "image":
                    case "input":
                    case "link":
                        return !0;
                    default:
                        return !1
                }
            }
            var pf = null,
                mf = null;

            function hf(e) {
                return 9 === e.nodeType ? e : e.ownerDocument
            }

            function gf(e) {
                switch (e) {
                    case "http://www.w3.org/2000/svg":
                        return 1;
                    case "http://www.w3.org/1998/Math/MathML":
                        return 2;
                    default:
                        return 0
                }
            }

            function yf(e, t) {
                if (0 === e) switch (t) {
                    case "svg":
                        return 1;
                    case "math":
                        return 2;
                    default:
                        return 0
                }
                return 1 === e && "foreignObject" === t ? 0 : e
            }

            function vf(e, t) {
                return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "bigint" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var bf = null,
                kf = "function" == typeof setTimeout ? setTimeout : void 0,
                Sf = "function" == typeof clearTimeout ? clearTimeout : void 0,
                wf = "function" == typeof Promise ? Promise : void 0,
                xf = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== wf ? function(e) {
                    return wf.resolve(null).then(e).catch(_f)
                } : kf;

            function _f(e) {
                setTimeout(function() {
                    throw e
                })
            }

            function Ef(e) {
                return "head" === e
            }

            function Cf(e, t) {
                var n = t,
                    r = 0;
                do {
                    var l = n.nextSibling;
                    if (e.removeChild(n), l && 8 === l.nodeType)
                        if ("/$" === (n = l.data) || "/&" === n) {
                            if (0 === r) return e.removeChild(l), void Bd(t);
                            r--
                        } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
                    else if ("html" === n) Ff(e.ownerDocument.documentElement);
                    else if ("head" === n) {
                        Ff(n = e.ownerDocument.head);
                        for (var a = n.firstChild; a;) {
                            var o = a.nextSibling,
                                i = a.nodeName;
                            a[qe] || "SCRIPT" === i || "STYLE" === i || "LINK" === i && "stylesheet" === a.rel.toLowerCase() || n.removeChild(a), a = o
                        }
                    } else "body" === n && Ff(e.ownerDocument.body);
                    n = l
                } while (n);
                Bd(t)
            }

            function Pf(e, t) {
                var n = e;
                e = 0;
                do {
                    var r = n.nextSibling;
                    if (1 === n.nodeType ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", "" === n.getAttribute("style") && n.removeAttribute("style")) : 3 === n.nodeType && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && 8 === r.nodeType)
                        if ("/$" === (n = r.data)) {
                            if (0 === e) break;
                            e--
                        } else "$" !== n && "$?" !== n && "$~" !== n && "$!" !== n || e++;
                    n = r
                } while (n)
            }

            function Tf(e) {
                var t = e.firstChild;
                for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
                    var n = t;
                    switch (t = t.nextSibling, n.nodeName) {
                        case "HTML":
                        case "HEAD":
                        case "BODY":
                            Tf(n), Qe(n);
                            continue;
                        case "SCRIPT":
                        case "STYLE":
                            continue;
                        case "LINK":
                            if ("stylesheet" === n.rel.toLowerCase()) continue
                    }
                    e.removeChild(n)
                }
            }

            function zf(e, t) {
                for (; 8 !== e.nodeType;) {
                    if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t) return null;
                    if (null === (e = Af(e.nextSibling))) return null
                }
                return e
            }

            function Nf(e) {
                return "$?" === e.data || "$~" === e.data
            }

            function Lf(e) {
                return "$!" === e.data || "$?" === e.data && "loading" !== e.ownerDocument.readyState
            }

            function Af(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t || "$~" === t || "&" === t || "F!" === t || "F" === t) break;
                        if ("/$" === t || "/&" === t) return null
                    }
                }
                return e
            }
            var Of = null;

            function jf(e) {
                e = e.nextSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n || "/&" === n) {
                            if (0 === t) return Af(e.nextSibling);
                            t--
                        } else "$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n || t++
                    }
                    e = e.nextSibling
                }
                return null
            }

            function Rf(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n || "$~" === n || "&" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" !== n && "/&" !== n || t++
                    }
                    e = e.previousSibling
                }
                return null
            }

            function Mf(e, t, n) {
                switch (t = hf(n), e) {
                    case "html":
                        if (!(e = t.documentElement)) throw Error(l(452));
                        return e;
                    case "head":
                        if (!(e = t.head)) throw Error(l(453));
                        return e;
                    case "body":
                        if (!(e = t.body)) throw Error(l(454));
                        return e;
                    default:
                        throw Error(l(451))
                }
            }

            function Ff(e) {
                for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
                Qe(e)
            }
            var Df = new Map,
                $f = new Set;

            function If(e) {
                return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument
            }
            var Hf = O.d;
            O.d = {
                f: function() {
                    var e = Hf.f(),
                        t = Xs();
                    return e || t
                },
                r: function(e) {
                    var t = Ge(e);
                    null !== t && 5 === t.tag && "form" === t.type ? ti(t) : Hf.r(e)
                },
                D: function(e) {
                    Hf.D(e), Bf("dns-prefetch", e, null)
                },
                C: function(e, t) {
                    Hf.C(e, t), Bf("preconnect", e, t)
                },
                L: function(e, t, n) {
                    Hf.L(e, t, n);
                    var r = Uf;
                    if (r && e && t) {
                        var l = 'link[rel="preload"][as="' + ht(t) + '"]';
                        "image" === t && n && n.imageSrcSet ? (l += '[imagesrcset="' + ht(n.imageSrcSet) + '"]', "string" == typeof n.imageSizes && (l += '[imagesizes="' + ht(n.imageSizes) + '"]')) : l += '[href="' + ht(e) + '"]';
                        var a = l;
                        switch (t) {
                            case "style":
                                a = Wf(e);
                                break;
                            case "script":
                                a = Kf(e)
                        }
                        Df.has(a) || (e = f({
                            rel: "preload",
                            href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                            as: t
                        }, n), Df.set(a, e), null !== r.querySelector(l) || "style" === t && r.querySelector(qf(a)) || "script" === t && r.querySelector(Gf(a)) || (ff(t = r.createElement("link"), "link", e), Ze(t), r.head.appendChild(t)))
                    }
                },
                m: function(e, t) {
                    Hf.m(e, t);
                    var n = Uf;
                    if (n && e) {
                        var r = t && "string" == typeof t.as ? t.as : "script",
                            l = 'link[rel="modulepreload"][as="' + ht(r) + '"][href="' + ht(e) + '"]',
                            a = l;
                        switch (r) {
                            case "audioworklet":
                            case "paintworklet":
                            case "serviceworker":
                            case "sharedworker":
                            case "worker":
                            case "script":
                                a = Kf(e)
                        }
                        if (!Df.has(a) && (e = f({
                                rel: "modulepreload",
                                href: e
                            }, t), Df.set(a, e), null === n.querySelector(l))) {
                            switch (r) {
                                case "audioworklet":
                                case "paintworklet":
                                case "serviceworker":
                                case "sharedworker":
                                case "worker":
                                case "script":
                                    if (n.querySelector(Gf(a))) return
                            }
                            ff(r = n.createElement("link"), "link", e), Ze(r), n.head.appendChild(r)
                        }
                    }
                },
                X: function(e, t) {
                    Hf.X(e, t);
                    var n = Uf;
                    if (n && e) {
                        var r = Xe(n).hoistableScripts,
                            l = Kf(e),
                            a = r.get(l);
                        a || ((a = n.querySelector(Gf(l))) || (e = f({
                            src: e,
                            async: !0
                        }, t), (t = Df.get(l)) && Jf(e, t), Ze(a = n.createElement("script")), ff(a, "link", e), n.head.appendChild(a)), a = {
                            type: "script",
                            instance: a,
                            count: 1,
                            state: null
                        }, r.set(l, a))
                    }
                },
                S: function(e, t, n) {
                    Hf.S(e, t, n);
                    var r = Uf;
                    if (r && e) {
                        var l = Xe(r).hoistableStyles,
                            a = Wf(e);
                        t = t || "default";
                        var o = l.get(a);
                        if (!o) {
                            var i = {
                                loading: 0,
                                preload: null
                            };
                            if (o = r.querySelector(qf(a))) i.loading = 5;
                            else {
                                e = f({
                                    rel: "stylesheet",
                                    href: e,
                                    "data-precedence": t
                                }, n), (n = Df.get(a)) && Zf(e, n);
                                var u = o = r.createElement("link");
                                Ze(u), ff(u, "link", e), u._p = new Promise(function(e, t) {
                                    u.onload = e, u.onerror = t
                                }), u.addEventListener("load", function() {
                                    i.loading |= 1
                                }), u.addEventListener("error", function() {
                                    i.loading |= 2
                                }), i.loading |= 4, Xf(o, t, r)
                            }
                            o = {
                                type: "stylesheet",
                                instance: o,
                                count: 1,
                                state: i
                            }, l.set(a, o)
                        }
                    }
                },
                M: function(e, t) {
                    Hf.M(e, t);
                    var n = Uf;
                    if (n && e) {
                        var r = Xe(n).hoistableScripts,
                            l = Kf(e),
                            a = r.get(l);
                        a || ((a = n.querySelector(Gf(l))) || (e = f({
                            src: e,
                            async: !0,
                            type: "module"
                        }, t), (t = Df.get(l)) && Jf(e, t), Ze(a = n.createElement("script")), ff(a, "link", e), n.head.appendChild(a)), a = {
                            type: "script",
                            instance: a,
                            count: 1,
                            state: null
                        }, r.set(l, a))
                    }
                }
            };
            var Uf = "undefined" == typeof document ? null : document;

            function Bf(e, t, n) {
                var r = Uf;
                if (r && "string" == typeof t && t) {
                    var l = ht(t);
                    l = 'link[rel="' + e + '"][href="' + l + '"]', "string" == typeof n && (l += '[crossorigin="' + n + '"]'), $f.has(l) || ($f.add(l), e = {
                        rel: e,
                        crossOrigin: n,
                        href: t
                    }, null === r.querySelector(l) && (ff(t = r.createElement("link"), "link", e), Ze(t), r.head.appendChild(t)))
                }
            }

            function Vf(e, t, n, r) {
                var a, o, i, u, s = (s = V.current) ? If(s) : null;
                if (!s) throw Error(l(446));
                switch (e) {
                    case "meta":
                    case "title":
                        return null;
                    case "style":
                        return "string" == typeof n.precedence && "string" == typeof n.href ? (t = Wf(n.href), (r = (n = Xe(s).hoistableStyles).get(t)) || (r = {
                            type: "style",
                            instance: null,
                            count: 0,
                            state: null
                        }, n.set(t, r)), r) : {
                            type: "void",
                            instance: null,
                            count: 0,
                            state: null
                        };
                    case "link":
                        if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                            e = Wf(n.href);
                            var c = Xe(s).hoistableStyles,
                                f = c.get(e);
                            if (f || (s = s.ownerDocument || s, f = {
                                    type: "stylesheet",
                                    instance: null,
                                    count: 0,
                                    state: {
                                        loading: 0,
                                        preload: null
                                    }
                                }, c.set(e, f), (c = s.querySelector(qf(e))) && !c._p && (f.instance = c, f.state.loading = 5), Df.has(e) || (n = {
                                    rel: "preload",
                                    as: "style",
                                    href: n.href,
                                    crossOrigin: n.crossOrigin,
                                    integrity: n.integrity,
                                    media: n.media,
                                    hrefLang: n.hrefLang,
                                    referrerPolicy: n.referrerPolicy
                                }, Df.set(e, n), c || (a = s, o = e, i = n, u = f.state, a.querySelector('link[rel="preload"][as="style"][' + o + "]") ? u.loading = 1 : (o = a.createElement("link"), u.preload = o, o.addEventListener("load", function() {
                                    return u.loading |= 1
                                }), o.addEventListener("error", function() {
                                    return u.loading |= 2
                                }), ff(o, "link", i), Ze(o), a.head.appendChild(o))))), t && null === r) throw Error(l(528, ""));
                            return f
                        }
                        if (t && null !== r) throw Error(l(529, ""));
                        return null;
                    case "script":
                        return t = n.async, "string" == typeof(n = n.src) && t && "function" != typeof t && "symbol" != typeof t ? (t = Kf(n), (r = (n = Xe(s).hoistableScripts).get(t)) || (r = {
                            type: "script",
                            instance: null,
                            count: 0,
                            state: null
                        }, n.set(t, r)), r) : {
                            type: "void",
                            instance: null,
                            count: 0,
                            state: null
                        };
                    default:
                        throw Error(l(444, e))
                }
            }

            function Wf(e) {
                return 'href="' + ht(e) + '"'
            }

            function qf(e) {
                return 'link[rel="stylesheet"][' + e + "]"
            }

            function Qf(e) {
                return f({}, e, {
                    "data-precedence": e.precedence,
                    precedence: null
                })
            }

            function Kf(e) {
                return '[src="' + ht(e) + '"]'
            }

            function Gf(e) {
                return "script[async]" + e
            }

            function Yf(e, t, n) {
                if (t.count++, null === t.instance) switch (t.type) {
                    case "style":
                        var r = e.querySelector('style[data-href~="' + ht(n.href) + '"]');
                        if (r) return t.instance = r, Ze(r), r;
                        var a = f({}, n, {
                            "data-href": n.href,
                            "data-precedence": n.precedence,
                            href: null,
                            precedence: null
                        });
                        return Ze(r = (e.ownerDocument || e).createElement("style")), ff(r, "style", a), Xf(r, n.precedence, e), t.instance = r;
                    case "stylesheet":
                        a = Wf(n.href);
                        var o = e.querySelector(qf(a));
                        if (o) return t.state.loading |= 4, t.instance = o, Ze(o), o;
                        r = Qf(n), (a = Df.get(a)) && Zf(r, a), Ze(o = (e.ownerDocument || e).createElement("link"));
                        var i = o;
                        return i._p = new Promise(function(e, t) {
                            i.onload = e, i.onerror = t
                        }), ff(o, "link", r), t.state.loading |= 4, Xf(o, n.precedence, e), t.instance = o;
                    case "script":
                        return o = Kf(n.src), (a = e.querySelector(Gf(o))) ? (t.instance = a, Ze(a), a) : (r = n, (a = Df.get(o)) && Jf(r = f({}, n), a), Ze(a = (e = e.ownerDocument || e).createElement("script")), ff(a, "link", r), e.head.appendChild(a), t.instance = a);
                    case "void":
                        return null;
                    default:
                        throw Error(l(443, t.type))
                } else "stylesheet" === t.type && !(4 & t.state.loading) && (r = t.instance, t.state.loading |= 4, Xf(r, n.precedence, e));
                return t.instance
            }

            function Xf(e, t, n) {
                for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = r.length ? r[r.length - 1] : null, a = l, o = 0; o < r.length; o++) {
                    var i = r[o];
                    if (i.dataset.precedence === t) a = i;
                    else if (a !== l) break
                }
                a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
            }

            function Zf(e, t) {
                null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
            }

            function Jf(e, t) {
                null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
            }
            var ed = null;

            function td(e, t, n) {
                if (null === ed) {
                    var r = new Map,
                        l = ed = new Map;
                    l.set(n, r)
                } else(r = (l = ed).get(n)) || (r = new Map, l.set(n, r));
                if (r.has(e)) return r;
                for (r.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
                    var a = n[l];
                    if (!(a[qe] || a[$e] || "link" === e && "stylesheet" === a.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== a.namespaceURI) {
                        var o = a.getAttribute(t) || "";
                        o = e + o;
                        var i = r.get(o);
                        i ? i.push(a) : r.set(o, [a])
                    }
                }
                return r
            }

            function nd(e, t, n) {
                (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
            }

            function rd(e) {
                return !!("stylesheet" !== e.type || 3 & e.state.loading)
            }
            var ld = 0;

            function ad() {
                if (this.count--, 0 === this.count && (0 === this.imgCount || !this.waitingForImages))
                    if (this.stylesheets) id(this, this.stylesheets);
                    else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e()
                }
            }
            var od = null;

            function id(e, t) {
                e.stylesheets = null, null !== e.unsuspend && (e.count++, od = new Map, t.forEach(ud, e), od = null, ad.call(e))
            }

            function ud(e, t) {
                if (!(4 & t.state.loading)) {
                    var n = od.get(e);
                    if (n) var r = n.get(null);
                    else {
                        n = new Map, od.set(e, n);
                        for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < l.length; a++) {
                            var o = l[a];
                            "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o), r = o)
                        }
                        r && n.set(null, r)
                    }
                    o = (l = t.instance).getAttribute("data-precedence"), (a = n.get(o) || r) === r && n.set(null, l), n.set(o, l), this.count++, r = ad.bind(this), l.addEventListener("load", r), l.addEventListener("error", r), a ? a.parentNode.insertBefore(l, a.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(l, e.firstChild), t.state.loading |= 4
                }
            }
            var sd = {
                $$typeof: b,
                Provider: null,
                Consumer: null,
                _currentValue: j,
                _currentValue2: j,
                _threadCount: 0
            };

            function cd(e, t, n, r, l, a, o, i, u) {
                this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ze(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ze(0), this.hiddenUpdates = ze(null), this.identifierPrefix = r, this.onUncaughtError = l, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = u, this.incompleteTransitions = new Map
            }

            function fd(e, t, n, r, l, a, o, i, u, s, c, f) {
                return e = new cd(e, t, n, o, u, s, c, f, i), t = 1, !0 === a && (t |= 24), a = Mr(3, null, null, t), e.current = a, a.stateNode = e, (t = Fl()).refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: t
                }, ma(a), e
            }

            function dd(e) {
                return e ? e = jr : jr
            }

            function pd(e, t, n, r, l, a) {
                l = dd(l), null === r.context ? r.context = l : r.pendingContext = l, (r = ga(t)).payload = {
                    element: n
                }, null !== (a = void 0 === a ? null : a) && (r.callback = a), null !== (n = ya(e, r, t)) && (qs(n, 0, t), va(n, e, t))
            }

            function md(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function hd(e, t) {
                md(e, t), (e = e.alternate) && md(e, t)
            }

            function gd(e) {
                if (13 === e.tag || 31 === e.tag) {
                    var t = Lr(e, 67108864);
                    null !== t && qs(t, 0, 67108864), hd(e, 67108864)
                }
            }

            function yd(e) {
                if (13 === e.tag || 31 === e.tag) {
                    var t = Vs(),
                        n = Lr(e, t = je(t));
                    null !== n && qs(n, 0, t), hd(e, t)
                }
            }
            var vd = !0;

            function bd(e, t, n, r) {
                var l = A.T;
                A.T = null;
                var a = O.p;
                try {
                    O.p = 2, Sd(e, t, n, r)
                } finally {
                    O.p = a, A.T = l
                }
            }

            function kd(e, t, n, r) {
                var l = A.T;
                A.T = null;
                var a = O.p;
                try {
                    O.p = 8, Sd(e, t, n, r)
                } finally {
                    O.p = a, A.T = l
                }
            }

            function Sd(e, t, n, r) {
                if (vd) {
                    var l = wd(r);
                    if (null === l) Jc(e, t, r, xd, n), jd(e, r);
                    else if (function(e, t, n, r, l) {
                            switch (t) {
                                case "focusin":
                                    return Pd = Rd(Pd, e, t, n, r, l), !0;
                                case "dragenter":
                                    return Td = Rd(Td, e, t, n, r, l), !0;
                                case "mouseover":
                                    return zd = Rd(zd, e, t, n, r, l), !0;
                                case "pointerover":
                                    var a = l.pointerId;
                                    return Nd.set(a, Rd(Nd.get(a) || null, e, t, n, r, l)), !0;
                                case "gotpointercapture":
                                    return a = l.pointerId, Ld.set(a, Rd(Ld.get(a) || null, e, t, n, r, l)), !0
                            }
                            return !1
                        }(l, e, t, n, r)) r.stopPropagation();
                    else if (jd(e, r), 4 & t && -1 < Od.indexOf(e)) {
                        for (; null !== l;) {
                            var a = Ge(l);
                            if (null !== a) switch (a.tag) {
                                case 3:
                                    if ((a = a.stateNode).current.memoizedState.isDehydrated) {
                                        var o = _e(a.pendingLanes);
                                        if (0 !== o) {
                                            var i = a;
                                            for (i.pendingLanes |= 2, i.entangledLanes |= 2; o;) {
                                                var u = 1 << 31 - ve(o);
                                                i.entanglements[1] |= u, o &= ~u
                                            }
                                            Rc(a), !(6 & fs) && (As = oe() + 500, Mc(0, !1))
                                        }
                                    }
                                    break;
                                case 31:
                                case 13:
                                    null !== (i = Lr(a, 2)) && qs(i, 0, 2), Xs(), hd(a, 2)
                            }
                            if (null === (a = wd(r)) && Jc(e, t, r, xd, n), a === l) break;
                            l = a
                        }
                        null !== l && r.stopPropagation()
                    } else Jc(e, t, r, null, n)
                }
            }

            function wd(e) {
                return _d(e = At(e))
            }
            var xd = null;

            function _d(e) {
                if (xd = null, null !== (e = Ke(e))) {
                    var t = o(e);
                    if (null === t) e = null;
                    else {
                        var n = t.tag;
                        if (13 === n) {
                            if (null !== (e = i(t))) return e;
                            e = null
                        } else if (31 === n) {
                            if (null !== (e = u(t))) return e;
                            e = null
                        } else if (3 === n) {
                            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                            e = null
                        } else t !== e && (e = null)
                    }
                }
                return xd = e, null
            }

            function Ed(e) {
                switch (e) {
                    case "beforetoggle":
                    case "cancel":
                    case "click":
                    case "close":
                    case "contextmenu":
                    case "copy":
                    case "cut":
                    case "auxclick":
                    case "dblclick":
                    case "dragend":
                    case "dragstart":
                    case "drop":
                    case "focusin":
                    case "focusout":
                    case "input":
                    case "invalid":
                    case "keydown":
                    case "keypress":
                    case "keyup":
                    case "mousedown":
                    case "mouseup":
                    case "paste":
                    case "pause":
                    case "play":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointerup":
                    case "ratechange":
                    case "reset":
                    case "resize":
                    case "seeked":
                    case "submit":
                    case "toggle":
                    case "touchcancel":
                    case "touchend":
                    case "touchstart":
                    case "volumechange":
                    case "change":
                    case "selectionchange":
                    case "textInput":
                    case "compositionstart":
                    case "compositionend":
                    case "compositionupdate":
                    case "beforeblur":
                    case "afterblur":
                    case "beforeinput":
                    case "blur":
                    case "fullscreenchange":
                    case "focus":
                    case "hashchange":
                    case "popstate":
                    case "select":
                    case "selectstart":
                        return 2;
                    case "drag":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "mousemove":
                    case "mouseout":
                    case "mouseover":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "scroll":
                    case "touchmove":
                    case "wheel":
                    case "mouseenter":
                    case "mouseleave":
                    case "pointerenter":
                    case "pointerleave":
                        return 8;
                    case "message":
                        switch (ie()) {
                            case ue:
                                return 2;
                            case se:
                                return 8;
                            case ce:
                            case fe:
                                return 32;
                            case de:
                                return 268435456;
                            default:
                                return 32
                        }
                    default:
                        return 32
                }
            }
            var Cd = !1,
                Pd = null,
                Td = null,
                zd = null,
                Nd = new Map,
                Ld = new Map,
                Ad = [],
                Od = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

            function jd(e, t) {
                switch (e) {
                    case "focusin":
                    case "focusout":
                        Pd = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        Td = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        zd = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        Nd.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        Ld.delete(t.pointerId)
                }
            }

            function Rd(e, t, n, r, l, a) {
                return null === e || e.nativeEvent !== a ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: a,
                    targetContainers: [l]
                }, null !== t && null !== (t = Ge(t)) && gd(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== l && -1 === t.indexOf(l) && t.push(l), e)
            }

            function Md(e) {
                var t = Ke(e.target);
                if (null !== t) {
                    var n = o(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = i(n))) return e.blockedOn = t, void Fe(e.priority, function() {
                                yd(n)
                            })
                        } else if (31 === t) {
                        if (null !== (t = u(n))) return e.blockedOn = t, void Fe(e.priority, function() {
                            yd(n)
                        })
                    } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function Fd(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = wd(e.nativeEvent);
                    if (null !== n) return null !== (t = Ge(n)) && gd(t), e.blockedOn = n, !1;
                    var r = new(n = e.nativeEvent).constructor(n.type, n);
                    Lt = r, n.target.dispatchEvent(r), Lt = null, t.shift()
                }
                return !0
            }

            function Dd(e, t, n) {
                Fd(e) && n.delete(t)
            }

            function $d() {
                Cd = !1, null !== Pd && Fd(Pd) && (Pd = null), null !== Td && Fd(Td) && (Td = null), null !== zd && Fd(zd) && (zd = null), Nd.forEach(Dd), Ld.forEach(Dd)
            }

            function Id(e, n) {
                e.blockedOn === n && (e.blockedOn = null, Cd || (Cd = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, $d)))
            }
            var Hd = null;

            function Ud(e) {
                Hd !== e && (Hd = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
                    Hd === e && (Hd = null);
                    for (var t = 0; t < e.length; t += 3) {
                        var n = e[t],
                            r = e[t + 1],
                            l = e[t + 2];
                        if ("function" != typeof r) {
                            if (null === _d(r || n)) continue;
                            break
                        }
                        var a = Ge(n);
                        null !== a && (e.splice(t, 3), t -= 3, Jo(a, {
                            pending: !0,
                            data: l,
                            method: n.method,
                            action: r
                        }, r, l))
                    }
                }))
            }

            function Bd(e) {
                function t(t) {
                    return Id(t, e)
                }
                null !== Pd && Id(Pd, e), null !== Td && Id(Td, e), null !== zd && Id(zd, e), Nd.forEach(t), Ld.forEach(t);
                for (var n = 0; n < Ad.length; n++) {
                    var r = Ad[n];
                    r.blockedOn === e && (r.blockedOn = null)
                }
                for (; 0 < Ad.length && null === (n = Ad[0]).blockedOn;) Md(n), null === n.blockedOn && Ad.shift();
                if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
                    for (r = 0; r < n.length; r += 3) {
                        var l = n[r],
                            a = n[r + 1],
                            o = l[Ie] || null;
                        if ("function" == typeof a) o || Ud(n);
                        else if (o) {
                            var i = null;
                            if (a && a.hasAttribute("formAction")) {
                                if (l = a, o = a[Ie] || null) i = o.formAction;
                                else if (null !== _d(l)) continue
                            } else i = o.action;
                            "function" == typeof i ? n[r + 1] = i : (n.splice(r, 3), r -= 3), Ud(n)
                        }
                    }
            }

            function Vd() {
                function e(e) {
                    e.canIntercept && "react-transition" === e.info && e.intercept({
                        handler: function() {
                            return new Promise(function(e) {
                                return l = e
                            })
                        },
                        focusReset: "manual",
                        scroll: "manual"
                    })
                }

                function t() {
                    null !== l && (l(), l = null), r || setTimeout(n, 20)
                }

                function n() {
                    if (!r && !navigation.transition) {
                        var e = navigation.currentEntry;
                        e && null != e.url && navigation.navigate(e.url, {
                            state: e.getState(),
                            info: "react-transition",
                            history: "replace"
                        })
                    }
                }
                if ("object" == typeof navigation) {
                    var r = !1,
                        l = null;
                    return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100),
                        function() {
                            r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), null !== l && (l(), l = null)
                        }
                }
            }

            function Wd(e) {
                this._internalRoot = e
            }

            function qd(e) {
                this._internalRoot = e
            }
            qd.prototype.render = Wd.prototype.render = function(e) {
                var t = this._internalRoot;
                if (null === t) throw Error(l(409));
                pd(t.current, Vs(), e, t, null, null)
            }, qd.prototype.unmount = Wd.prototype.unmount = function() {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    pd(e.current, 2, null, e, null, null), Xs(), t[He] = null
                }
            }, qd.prototype.unstable_scheduleHydration = function(e) {
                if (e) {
                    var t = Me();
                    e = {
                        blockedOn: null,
                        target: e,
                        priority: t
                    };
                    for (var n = 0; n < Ad.length && 0 !== t && t < Ad[n].priority; n++);
                    Ad.splice(n, 0, e), 0 === n && Md(e)
                }
            };
            var Qd = n.version;
            if ("19.2.4" !== Qd) throw Error(l(527, Qd, "19.2.4"));
            O.findDOMNode = function(e) {
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw Error(l(188));
                    throw e = Object.keys(e).join(","), Error(l(268, e))
                }
                return e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = o(e))) throw Error(l(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t;;) {
                        var a = n.return;
                        if (null === a) break;
                        var i = a.alternate;
                        if (null === i) {
                            if (null !== (r = a.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (a.child === i.child) {
                            for (i = a.child; i;) {
                                if (i === n) return s(a), e;
                                if (i === r) return s(a), t;
                                i = i.sibling
                            }
                            throw Error(l(188))
                        }
                        if (n.return !== r.return) n = a, r = i;
                        else {
                            for (var u = !1, c = a.child; c;) {
                                if (c === n) {
                                    u = !0, n = a, r = i;
                                    break
                                }
                                if (c === r) {
                                    u = !0, r = a, n = i;
                                    break
                                }
                                c = c.sibling
                            }
                            if (!u) {
                                for (c = i.child; c;) {
                                    if (c === n) {
                                        u = !0, n = i, r = a;
                                        break
                                    }
                                    if (c === r) {
                                        u = !0, r = i, n = a;
                                        break
                                    }
                                    c = c.sibling
                                }
                                if (!u) throw Error(l(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(l(190))
                    }
                    if (3 !== n.tag) throw Error(l(188));
                    return n.stateNode.current === n ? e : t
                }(t), null === (e = null !== e ? c(e) : null) ? null : e.stateNode
            };
            var Kd, Gd = {
                bundleType: 0,
                version: "19.2.4",
                rendererPackageName: "react-dom",
                currentDispatcherRef: A,
                reconcilerVersion: "19.2.4"
            };
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && !(Kd = __REACT_DEVTOOLS_GLOBAL_HOOK__).isDisabled && Kd.supportsFiber) try {
                he = Kd.inject(Gd), ge = Kd
            } catch (e) {}
            e.createRoot = function(e, t) {
                if (!a(e)) throw Error(l(299));
                var n = !1,
                    r = "",
                    o = wi,
                    i = xi,
                    u = _i;
                return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onUncaughtError && (o = t.onUncaughtError), void 0 !== t.onCaughtError && (i = t.onCaughtError), void 0 !== t.onRecoverableError && (u = t.onRecoverableError)), t = fd(e, 1, !1, null, 0, n, r, null, o, i, u, Vd), e[He] = t.current, Xc(e), new Wd(t)
            }, e.hydrateRoot = function(e, t, n) {
                if (!a(e)) throw Error(l(299));
                var r = !1,
                    o = "",
                    i = wi,
                    u = xi,
                    s = _i,
                    c = null;
                return null != n && (!0 === n.unstable_strictMode && (r = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onUncaughtError && (i = n.onUncaughtError), void 0 !== n.onCaughtError && (u = n.onCaughtError), void 0 !== n.onRecoverableError && (s = n.onRecoverableError), void 0 !== n.formState && (c = n.formState)), (t = fd(e, 1, !0, t, 0, r, o, c, i, u, s, Vd)).context = dd(null), n = t.current, (o = ga(r = je(r = Vs()))).callback = null, ya(n, o, r), n = r, t.current.lanes = n, Ne(t, n), Rc(t), e[He] = t.current, Xc(e), new qd(t)
            }, e.version = "19.2.4"
        }
    }),
    require_client = __commonJS({
        "../../node_modules/.pnpm/react-dom@19.2.4_react@19.2.4/node_modules/react-dom/client.js"(e, t) {
            "use strict";
            ! function e() {
                if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (e) {
                    console.error(e)
                }
            }(), t.exports = require_react_dom_client_production()
        }
    }),
    dist_exports = {};
__export(dist_exports, {
    Badge: () => Badge,
    BarChart: () => BarChart,
    Button: () => Button,
    Callout: () => Callout,
    Card: () => Card,
    CardBody: () => CardBody,
    CardHeader: () => CardHeader,
    Code: () => Code,
    Grid: () => Grid,
    H1: () => H1,
    H2: () => H2,
    LineChart: () => LineChart,
    PieChart: () => PieChart,
    Row: () => Row,
    Stack: () => Stack,
    Table: () => Table,
    Text: () => Text,
    canvasTokens: () => canvasTokens
});
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1),
    import_react = __toESM(require_react(), 1),
    canvasPalette = {
        foreground: "#E4E4E4EB",
        foregroundSecondary: "#E4E4E48D",
        foregroundTertiary: "#E4E4E45E",
        foregroundQuaternary: "#E4E4E442",
        editor: "#181818",
        chrome: "#141414",
        sidebar: "#141414",
        elevated: "#181818",
        fillPrimary: "#E4E4E430",
        fillSecondary: "#E4E4E41E",
        fillTertiary: "#E4E4E411",
        fillQuaternary: "#E4E4E40A",
        strokePrimary: "#E4E4E426",
        strokeSecondary: "#E4E4E418",
        strokeTertiary: "#E4E4E40A",
        accent: "#599CE7",
        buttonBackground: "#81A1C1",
        buttonForeground: "#191c22",
        buttonHoverBackground: "#87A6C4",
        red: "#E34671",
        yellow: "#F1B467",
        green: "#3FA266",
        link: "#87c3ff"
    },
    canvasTokens = {
        bg: {
            editor: canvasPalette.editor,
            chrome: canvasPalette.chrome,
            elevated: canvasPalette.elevated
        },
        text: {
            primary: canvasPalette.foreground,
            secondary: canvasPalette.foregroundSecondary,
            tertiary: canvasPalette.foregroundTertiary,
            quaternary: canvasPalette.foregroundQuaternary,
            link: canvasPalette.link,
            onAccent: canvasPalette.buttonForeground
        },
        stroke: {
            primary: canvasPalette.strokePrimary,
            secondary: canvasPalette.strokeSecondary,
            tertiary: canvasPalette.strokeTertiary
        },
        fill: {
            primary: canvasPalette.fillPrimary,
            secondary: canvasPalette.fillSecondary,
            tertiary: canvasPalette.fillTertiary,
            quaternary: canvasPalette.fillQuaternary
        },
        accent: {
            primary: canvasPalette.accent,
            control: canvasPalette.buttonBackground,
            controlHover: canvasPalette.buttonHoverBackground
        },
        status: {
            danger: canvasPalette.red,
            warning: canvasPalette.yellow,
            success: canvasPalette.green
        }
    },
    canvasTypography = {
        h1: {
            fontSize: "22px",
            lineHeight: "26px",
            fontWeight: 600
        },
        h2: {
            fontSize: "16px",
            lineHeight: "21px",
            fontWeight: 600
        },
        body: {
            fontSize: "13px",
            lineHeight: "18px",
            fontWeight: 400
        },
        small: {
            fontSize: "11px",
            lineHeight: "14px",
            fontWeight: 400
        }
    },
    canvasSpacing = {
        .5: 2,
        1: 4,
        1.5: 6,
        2: 8,
        2.5: 10,
        3: 12,
        3.5: 14,
        4: 16,
        4.5: 18,
        5: 20,
        6: 24,
        7: 28,
        8: 32,
        9: 36,
        10: 40
    },
    canvasRadius = {
        none: 0,
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 12,
        full: 9999
    },
    import_jsx_runtime = __toESM(require_jsx_runtime(), 1),
    t = canvasTokens;

function mergeStyle(e, t) {
    return t ? {
        ...e,
        ...t
    } : e
}
var mono = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

function Stack({
    children: e,
    gap: t = 12,
    style: n
}) {
    return (0, import_jsx_runtime.jsx)("div", {
        style: mergeStyle({
            display: "flex",
            flexDirection: "column",
            gap: `${t}px`,
            width: "100%"
        }, n),
        children: e
    })
}

function Row({
    children: e,
    gap: t = 8,
    align: n = "center",
    justify: r = "start",
    wrap: l = !1,
    style: a
}) {
    return (0, import_jsx_runtime.jsx)("div", {
        style: mergeStyle({
            display: "flex",
            flexDirection: "row",
            flexWrap: l ? "wrap" : "nowrap",
            alignItems: n,
            justifyContent: r,
            gap: `${t}px`,
            width: "100%"
        }, a),
        children: e
    })
}

function Grid({
    children: e,
    columns: t,
    gap: n = 12,
    align: r = "stretch",
    style: l
}) {
    const a = "number" == typeof t ? `repeat(${t}, minmax(0, 1fr))` : t;
    return (0, import_jsx_runtime.jsx)("div", {
        style: mergeStyle({
            display: "grid",
            gridTemplateColumns: a,
            gap: `${n}px`,
            alignItems: r,
            width: "100%"
        }, l),
        children: e
    })
}
var tableCellPadding = {
    padding: `${canvasSpacing[2]}px ${canvasSpacing[3]}px`
};

function Table({
    headers: e,
    rows: n,
    columnAlign: r,
    framed: l = !0,
    style: a,
    emptyMessage: o = "No rows."
}) {
    if (0 === e.length) return (0, import_jsx_runtime.jsx)("div", {
        style: {
            padding: `${canvasSpacing[3]}px`,
            color: t.text.secondary,
            fontSize: canvasTypography.body.fontSize
        },
        children: "Add at least one header."
    });
    const i = e.length,
        u = {
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "auto",
            fontSize: canvasTypography.body.fontSize,
            lineHeight: canvasTypography.body.lineHeight,
            color: t.text.primary
        },
        s = e => r?.[e] ?? "left",
        c = e => ({
            ...tableCellPadding,
            textAlign: s(e),
            fontWeight: 600,
            color: t.text.secondary,
            borderBottom: `1px solid ${t.stroke.primary}`
        }),
        f = e => ({
            ...tableCellPadding,
            textAlign: s(e),
            verticalAlign: "top"
        }),
        d = {
            borderBottom: `1px solid ${t.stroke.secondary}`
        },
        p = (0, import_jsx_runtime.jsxs)("table", {
            style: mergeStyle(u, a),
            children: [(0, import_jsx_runtime.jsx)("thead", {
                style: {
                    background: t.bg.chrome
                },
                children: (0, import_jsx_runtime.jsx)("tr", {
                    children: e.map((e, t) => (0, import_jsx_runtime.jsx)("th", {
                        scope: "col",
                        style: c(t),
                        children: e
                    }, t))
                })
            }), (0, import_jsx_runtime.jsx)("tbody", {
                children: 0 === n.length ? (0, import_jsx_runtime.jsx)("tr", {
                    children: (0, import_jsx_runtime.jsx)("td", {
                        colSpan: i,
                        style: mergeStyle(f(0), {
                            color: t.text.secondary,
                            borderBottom: `1px solid ${t.stroke.secondary}`
                        }),
                        children: o
                    })
                }) : n.map((e, t) => (0, import_jsx_runtime.jsx)("tr", {
                    style: d,
                    children: Array.from({
                        length: i
                    }, (t, n) => (0, import_jsx_runtime.jsx)("td", {
                        style: f(n),
                        children: e[n] ?? null
                    }, n))
                }, t))
            })]
        });
    return l ? (0, import_jsx_runtime.jsx)("div", {
        style: {
            width: "100%",
            minWidth: 0,
            overflowX: "auto",
            border: `1px solid ${t.stroke.primary}`,
            borderRadius: `${canvasRadius.lg}px`,
            background: t.bg.elevated
        },
        children: p
    }) : p
}
var textToneColor = {
    primary: t.text.primary,
    secondary: t.text.secondary,
    tertiary: t.text.tertiary,
    quaternary: t.text.quaternary
};

function Text({
    children: e,
    tone: t = "primary",
    size: n = "body",
    style: r
}) {
    const l = "small" === n ? canvasTypography.small : canvasTypography.body;
    return (0, import_jsx_runtime.jsx)("p", {
        style: mergeStyle({
            margin: 0,
            color: textToneColor[t],
            fontSize: l.fontSize,
            lineHeight: l.lineHeight,
            fontWeight: l.fontWeight
        }, r),
        children: e
    })
}

function H1({
    children: e,
    style: n
}) {
    return (0, import_jsx_runtime.jsx)("h1", {
        style: mergeStyle({
            margin: 0,
            color: t.text.primary,
            fontSize: canvasTypography.h1.fontSize,
            lineHeight: canvasTypography.h1.lineHeight,
            fontWeight: canvasTypography.h1.fontWeight
        }, n),
        children: e
    })
}

function H2({
    children: e,
    style: n
}) {
    return (0, import_jsx_runtime.jsx)("h2", {
        style: mergeStyle({
            margin: 0,
            color: t.text.primary,
            fontSize: canvasTypography.h2.fontSize,
            lineHeight: canvasTypography.h2.lineHeight,
            fontWeight: canvasTypography.h2.fontWeight
        }, n),
        children: e
    })
}

function Code({
    children: e,
    style: n
}) {
    return (0, import_jsx_runtime.jsx)("code", {
        style: mergeStyle({
            fontFamily: mono,
            fontSize: "12px",
            padding: "1px 4px",
            borderRadius: `${canvasRadius.sm}px`,
            background: t.fill.quaternary,
            color: t.text.primary
        }, n),
        children: e
    })
}

function Card({
    children: e,
    style: n
}) {
    return (0, import_jsx_runtime.jsx)("div", {
        style: mergeStyle({
            borderRadius: `${canvasRadius.lg}px`,
            border: `1px solid ${t.stroke.primary}`,
            background: t.bg.elevated,
            overflow: "hidden"
        }, n),
        children: e
    })
}

function CardHeader({
    children: e,
    style: n
}) {
    return (0, import_jsx_runtime.jsx)("div", {
        style: mergeStyle({
            padding: `${canvasSpacing[3]}px ${canvasSpacing[4]}px`,
            borderBottom: `1px solid ${t.stroke.secondary}`,
            background: t.bg.chrome
        }, n),
        children: e
    })
}

function CardBody({
    children: e,
    style: t
}) {
    return (0, import_jsx_runtime.jsx)("div", {
        style: mergeStyle({
            padding: `${canvasSpacing[4]}px`
        }, t),
        children: e
    })
}

function Button({
    children: e,
    variant: n = "primary",
    disabled: r = !1,
    type: l = "button",
    style: a,
    onClick: o
}) {
    const i = {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: `${canvasSpacing[1.5]}px`,
            padding: `${canvasSpacing[1.5]}px ${canvasSpacing[3]}px`,
            borderRadius: `${canvasRadius.md}px`,
            fontSize: canvasTypography.body.fontSize,
            lineHeight: canvasTypography.body.lineHeight,
            fontWeight: 500,
            fontFamily: "inherit",
            cursor: r ? "not-allowed" : "pointer",
            border: "1px solid transparent",
            opacity: r ? .5 : 1
        },
        u = {
            primary: {
                background: t.accent.control,
                color: t.text.onAccent,
                borderColor: t.accent.control
            },
            secondary: {
                background: t.fill.secondary,
                color: t.text.primary,
                borderColor: t.stroke.primary
            },
            ghost: {
                background: "transparent",
                color: t.text.secondary,
                borderColor: "transparent"
            },
            danger: {
                background: `${t.status.danger}22`,
                color: t.status.danger,
                borderColor: `${t.status.danger}44`
            }
        },
        s = "primary" === n || "ghost" === n ? {
            transition: "background 120ms ease"
        } : {};
    return (0, import_jsx_runtime.jsx)("button", {
        type: l,
        disabled: r,
        onClick: r ? void 0 : o,
        style: mergeStyle(mergeStyle(mergeStyle(i, u[n]), s), a),
        children: e
    })
}

function Badge({
    children: e,
    tone: n = "neutral",
    style: r
}) {
    const l = "success" === n ? {
        color: t.status.success,
        background: `${t.status.success}22`
    } : "warning" === n ? {
        color: t.status.warning,
        background: `${t.status.warning}22`
    } : "danger" === n ? {
        color: t.status.danger,
        background: `${t.status.danger}22`
    } : {
        color: t.text.secondary,
        background: t.fill.tertiary
    };
    return (0, import_jsx_runtime.jsx)("span", {
        style: mergeStyle({
            display: "inline-flex",
            alignItems: "center",
            padding: `2px ${canvasSpacing[2]}px`,
            borderRadius: `${canvasRadius.full}px`,
            fontSize: canvasTypography.small.fontSize,
            lineHeight: canvasTypography.small.lineHeight,
            fontWeight: 500,
            border: `1px solid ${t.stroke.tertiary}`
        }, mergeStyle(l, r)),
        children: e
    })
}

function Callout({
    children: e,
    variant: n = "info",
    style: r
}) {
    const l = "success" === n ? t.status.success : "warning" === n ? t.status.warning : "danger" === n ? t.status.danger : t.accent.primary;
    return (0, import_jsx_runtime.jsx)("div", {
        style: mergeStyle({
            padding: `${canvasSpacing[3]}px 14px`,
            borderRadius: `${canvasRadius.md}px`,
            border: `1px solid ${t.stroke.secondary}`,
            background: t.fill.secondary,
            borderLeft: `3px solid ${l}`
        }, r),
        children: e
    })
}
var t2 = canvasTokens,
    FALLBACK_CHART_WIDTH = 480,
    DEFAULT_CHART_HEIGHT = 200,
    DEFAULT_PIE_SIZE = 200,
    chartPalette = ["#7BAFE9", "#3FA266", "#D08770", "#B48EAD", "#E34671", "#F1B467", "#81A1C1", "#599CE7"],
    chartFrameStyle = {
        width: "100%",
        minWidth: 0
    },
    VERTICAL_CHART_MARGINS = {
        top: 12,
        right: 12,
        bottom: 36,
        left: 42
    },
    HORIZONTAL_BAR_CHART_MARGINS = {
        top: 12,
        right: 28,
        bottom: 24,
        left: 96
    },
    svgTextProps = {
        fill: t2.text.secondary,
        fontFamily: "inherit",
        fontSize: canvasTypography.small.fontSize,
        lineHeight: canvasTypography.small.lineHeight
    };

function useMeasuredWidth() {
    const e = (0, import_react.useRef)(null),
        [t, n] = (0, import_react.useState)(FALLBACK_CHART_WIDTH);
    return (0, import_react.useEffect)(() => {
        const t = e.current;
        if (null === t) return;
        const r = e => {
            const r = Math.round(e ?? t.getBoundingClientRect().width ?? t.clientWidth);
            r > 0 && n(r)
        };
        r();
        const l = new ResizeObserver(e => {
            r(e[0]?.contentRect.width)
        });
        return l.observe(t), () => {
            l.disconnect()
        }
    }, []), {
        ref: e,
        width: t
    }
}

function sanitizeValue(e) {
    return !Number.isFinite(e) || e < 0 ? 0 : e
}

function normalizeChartData(e) {
    const t = new Map;
    return e.map(e => {
        const n = sanitizeValue(e.value),
            r = `${e.label}:${n}`,
            l = t.get(r) ?? 0;
        return t.set(r, l + 1), {
            label: e.label,
            value: n,
            key: 0 === l ? r : `${r}:${l}`
        }
    })
}

function normalizePieChartData(e) {
    return normalizeChartData(e).map((t, n) => ({
        ...t,
        color: e[n]?.color ?? chartPalette[n % chartPalette.length]
    }))
}

function getChartMaxValue(e) {
    return e.reduce((e, t) => Math.max(e, t.value), 0)
}

function getAxisMax(e) {
    return e[e.length - 1] ?? 1
}

function shouldRenderIndexLabel(e, t, n) {
    return e % n === 0 || e === t - 1
}

function getLinePointX(e, t, n, r) {
    return 1 === t ? n + r / 2 : n + r * e / (t - 1)
}

function buildAreaPath(e, t) {
    if (!(e.length < 2)) return [`M ${e[0].x} ${t}`, ...e.map(e => `L ${e.x} ${e.y}`), `L ${e[e.length-1].x} ${t}`, "Z"].join(" ")
}

function getHorizontalValueLabel(e, t, n) {
    return e >= t - 16 ? {
        x: n + e - 6,
        anchor: "end",
        fill: t2.text.primary
    } : {
        x: n + Math.min(e + 6, t - 4),
        anchor: "start",
        fill: t2.text.secondary
    }
}

function trimTrailingZeros(e) {
    return e.replace(/\.0+$/, "").replace(/(\.\d*[1-9])0+$/, "$1")
}

function formatValue(e) {
    const t = Math.abs(e);
    return t >= 1e6 ? `${trimTrailingZeros((e/1e6).toFixed(t>=1e7?0:1))}M` : t >= 1e3 ? `${trimTrailingZeros((e/1e3).toFixed(t>=1e4?0:1))}K` : Number.isInteger(e) ? `${e}` : trimTrailingZeros(e.toFixed(t >= 10 ? 1 : 2))
}

function formatPercent(e) {
    return e >= 10 ? `${Math.round(e)}%` : `${trimTrailingZeros(e.toFixed(1))}%`
}

function truncateLabel(e, t = 12) {
    return e.length <= t ? e : `${e.slice(0,Math.max(1,t-3))}...`
}

function getLabelStride(e, t = 8) {
    return e <= t ? 1 : Math.ceil(e / t)
}

function niceStep(e) {
    if (!Number.isFinite(e) || e <= 0) return 1;
    const t = 10 ** Math.floor(Math.log10(e)),
        n = e / t;
    return n <= 1 ? t : n <= 2 ? 2 * t : n <= 5 ? 5 * t : 10 * t
}

function computeAxisTicks(e, t) {
    if (e <= 0) return [0, 1];
    const n = niceStep(e / Math.max(t - 1, 1)),
        r = Math.ceil(e / n) * n,
        l = [];
    for (let e = 0; e <= r + n / 2; e += n) l.push(Number(e.toFixed(10)));
    return l
}

function polarToCartesian(e, t, n, r) {
    const l = (r - 90) * Math.PI / 180;
    return {
        x: e + n * Math.cos(l),
        y: t + n * Math.sin(l)
    }
}

function describeArc(e, t, n, r, l) {
    const a = polarToCartesian(e, t, n, l);
    return `A ${n} ${n} 0 ${l-r>180?1:0} 1 ${a.x} ${a.y}`
}

function renderChartEmptyState(e, t) {
    return (0, import_jsx_runtime2.jsx)("div", {
        style: mergeStyle({
            ...chartFrameStyle,
            height: `${e}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: `${canvasRadius.md}px`,
            border: `1px solid ${t2.stroke.secondary}`,
            background: t2.fill.quaternary,
            color: t2.text.secondary,
            fontSize: canvasTypography.small.fontSize,
            lineHeight: canvasTypography.small.lineHeight
        }, t),
        children: "No data"
    })
}

function renderYAxis(e, t, n, r, l) {
    const a = Math.max(t - n.top - n.bottom, 1);
    return r.map(t => {
        const r = n.top + a - t / l * a;
        return (0, import_jsx_runtime2.jsxs)("g", {
            children: [(0, import_jsx_runtime2.jsx)("line", {
                x1: n.left,
                x2: e - n.right,
                y1: r,
                y2: r,
                stroke: t2.stroke.secondary,
                strokeWidth: 1
            }), (0, import_jsx_runtime2.jsx)("text", {
                x: n.left - canvasSpacing[2],
                y: r + 4,
                textAnchor: "end",
                ...svgTextProps,
                children: formatValue(t)
            })]
        }, t)
    })
}

function BarChart({
    data: e,
    height: t = DEFAULT_CHART_HEIGHT,
    color: n = t2.accent.primary,
    horizontal: r = !1,
    style: l
}) {
    const a = normalizeChartData(e),
        {
            ref: o,
            width: i
        } = useMeasuredWidth();
    if (0 === a.length) return renderChartEmptyState(t, l);
    const u = Math.max(i, 1),
        s = r ? HORIZONTAL_BAR_CHART_MARGINS : VERTICAL_CHART_MARGINS,
        c = Math.max(u - s.left - s.right, 1),
        f = Math.max(t - s.top - s.bottom, 1),
        d = computeAxisTicks(getChartMaxValue(a), 4),
        p = getAxisMax(d),
        m = a.length <= 8,
        h = getLabelStride(a.length, r ? 10 : 8);
    if (r) {
        const e = f / Math.max(a.length, 1),
            r = Math.max(Math.min(.6 * e, 28), 8);
        return (0, import_jsx_runtime2.jsx)("div", {
            ref: o,
            style: mergeStyle(chartFrameStyle, l),
            children: (0, import_jsx_runtime2.jsxs)("svg", {
                width: u,
                height: t,
                viewBox: `0 0 ${u} ${t}`,
                role: "img",
                "aria-label": "Horizontal bar chart",
                style: {
                    display: "block",
                    width: "100%",
                    height: `${t}px`
                },
                children: [d.map(e => {
                    const n = s.left + e / p * c;
                    return (0, import_jsx_runtime2.jsxs)("g", {
                        children: [(0, import_jsx_runtime2.jsx)("line", {
                            x1: n,
                            x2: n,
                            y1: s.top,
                            y2: t - s.bottom,
                            stroke: t2.stroke.secondary,
                            strokeWidth: 1
                        }), (0, import_jsx_runtime2.jsx)("text", {
                            x: n,
                            y: t - canvasSpacing[1],
                            textAnchor: "middle",
                            ...svgTextProps,
                            children: formatValue(e)
                        })]
                    }, e)
                }), a.map((t, l) => {
                    const o = s.top + l * e + Math.max((e - r) / 2, 0),
                        i = t.value / p * c,
                        u = getHorizontalValueLabel(i, c, s.left);
                    return (0, import_jsx_runtime2.jsxs)("g", {
                        children: [shouldRenderIndexLabel(l, a.length, h) ? (0, import_jsx_runtime2.jsx)("text", {
                            x: s.left - canvasSpacing[2],
                            y: o + r / 2,
                            textAnchor: "end",
                            dominantBaseline: "middle",
                            ...svgTextProps,
                            children: truncateLabel(t.label, 14)
                        }) : null, (0, import_jsx_runtime2.jsx)("rect", {
                            x: s.left,
                            y: o,
                            width: i,
                            height: r,
                            rx: canvasRadius.sm,
                            fill: n,
                            fillOpacity: .2,
                            stroke: n,
                            strokeWidth: 1
                        }), m && t.value > 0 ? (0, import_jsx_runtime2.jsx)("text", {
                            x: u.x,
                            y: o + r / 2,
                            textAnchor: u.anchor,
                            dominantBaseline: "middle",
                            fill: u.fill,
                            fontFamily: "inherit",
                            fontSize: canvasTypography.small.fontSize,
                            children: formatValue(t.value)
                        }) : null]
                    }, t.key)
                })]
            })
        })
    }
    const g = c / Math.max(a.length, 1),
        y = Math.max(Math.min(.6 * g, 56), 8);
    return (0, import_jsx_runtime2.jsx)("div", {
        ref: o,
        style: mergeStyle(chartFrameStyle, l),
        children: (0, import_jsx_runtime2.jsxs)("svg", {
            width: u,
            height: t,
            viewBox: `0 0 ${u} ${t}`,
            role: "img",
            "aria-label": "Bar chart",
            style: {
                display: "block",
                width: "100%",
                height: `${t}px`
            },
            children: [renderYAxis(u, t, s, d, p), a.map((e, r) => {
                const l = e.value / p * f,
                    o = s.left + r * g + (g - y) / 2,
                    i = s.top + f - l;
                return (0, import_jsx_runtime2.jsxs)("g", {
                    children: [(0, import_jsx_runtime2.jsx)("rect", {
                        x: o,
                        y: i,
                        width: y,
                        height: l,
                        rx: canvasRadius.sm,
                        fill: n,
                        fillOpacity: .2,
                        stroke: n,
                        strokeWidth: 1
                    }), m && e.value > 0 ? (0, import_jsx_runtime2.jsx)("text", {
                        x: o + y / 2,
                        y: Math.max(i - 6, s.top - 2),
                        textAnchor: "middle",
                        fill: t2.text.primary,
                        fontFamily: "inherit",
                        fontSize: canvasTypography.small.fontSize,
                        fontWeight: 500,
                        children: formatValue(e.value)
                    }) : null, shouldRenderIndexLabel(r, a.length, h) ? (0, import_jsx_runtime2.jsx)("text", {
                        x: o + y / 2,
                        y: t - canvasSpacing[1],
                        textAnchor: "middle",
                        ...svgTextProps,
                        children: truncateLabel(e.label)
                    }) : null]
                }, e.key)
            })]
        })
    })
}

function LineChart({
    data: e,
    height: t = DEFAULT_CHART_HEIGHT,
    color: n = t2.accent.primary,
    fill: r = !1,
    style: l
}) {
    const a = normalizeChartData(e),
        {
            ref: o,
            width: i
        } = useMeasuredWidth();
    if (0 === a.length) return renderChartEmptyState(t, l);
    const u = Math.max(i, 1),
        s = VERTICAL_CHART_MARGINS,
        c = Math.max(u - s.left - s.right, 1),
        f = Math.max(t - s.top - s.bottom, 1),
        d = computeAxisTicks(getChartMaxValue(a), 4),
        p = getAxisMax(d),
        m = getLabelStride(a.length, 7),
        h = a.map((e, t) => {
            const n = getLinePointX(t, a.length, s.left, c),
                r = s.top + f - e.value / p * f;
            return {
                ...e,
                x: n,
                y: r
            }
        }),
        g = h.map(e => `${e.x},${e.y}`).join(" "),
        y = buildAreaPath(h, s.top + f);
    return (0, import_jsx_runtime2.jsx)("div", {
        ref: o,
        style: mergeStyle(chartFrameStyle, l),
        children: (0, import_jsx_runtime2.jsxs)("svg", {
            width: u,
            height: t,
            viewBox: `0 0 ${u} ${t}`,
            role: "img",
            "aria-label": "Line chart",
            style: {
                display: "block",
                width: "100%",
                height: `${t}px`
            },
            children: [renderYAxis(u, t, s, d, p), r && void 0 !== y ? (0, import_jsx_runtime2.jsx)("path", {
                d: y,
                fill: n,
                fillOpacity: .16,
                stroke: "none"
            }) : null, h.length > 1 ? (0, import_jsx_runtime2.jsx)("polyline", {
                points: g,
                fill: "none",
                stroke: n,
                strokeWidth: 2.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }) : null, h.map((e, r) => (0, import_jsx_runtime2.jsxs)("g", {
                children: [(0, import_jsx_runtime2.jsx)("circle", {
                    cx: e.x,
                    cy: e.y,
                    r: 4,
                    fill: n,
                    stroke: t2.bg.editor,
                    strokeWidth: 2
                }), shouldRenderIndexLabel(r, h.length, m) ? (0, import_jsx_runtime2.jsx)("text", {
                    x: e.x,
                    y: t - canvasSpacing[1],
                    textAnchor: "middle",
                    ...svgTextProps,
                    children: truncateLabel(e.label)
                }) : null]
            }, e.key))]
        })
    })
}

function buildSlicePath(e, t, n, r, l, a, o) {
    if (!e) {
        const e = polarToCartesian(t, n, r, a);
        return [`M ${t} ${n}`, `L ${e.x} ${e.y}`, describeArc(t, n, r, a, o), "Z"].join(" ")
    }
    const i = polarToCartesian(t, n, r, a),
        u = polarToCartesian(t, n, l, o),
        s = polarToCartesian(t, n, l, a),
        c = o - a > 180 ? 1 : 0;
    return [`M ${i.x} ${i.y}`, describeArc(t, n, r, a, o), `L ${u.x} ${u.y}`, `A ${l} ${l} 0 ${c} 0 ${s.x} ${s.y}`, "Z"].join(" ")
}

function PieChart({
    data: e,
    size: t = DEFAULT_PIE_SIZE,
    donut: n = !1,
    style: r
}) {
    const l = normalizePieChartData(e),
        a = l.reduce((e, t) => e + t.value, 0);
    if (0 === l.length || a <= 0) return renderChartEmptyState(t, r);
    const o = t / 2,
        i = Math.max(t / 2 - canvasSpacing[2], 16),
        u = n ? .55 * i : 0;
    let s = 0;
    const c = l.filter(e => e.value > 0),
        f = 1 === c.length;
    return (0, import_jsx_runtime2.jsxs)("div", {
        style: mergeStyle({
            ...chartFrameStyle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: `${canvasSpacing[3]}px`
        }, r),
        children: [(0, import_jsx_runtime2.jsx)("svg", {
            width: t,
            height: t,
            viewBox: `0 0 ${t} ${t}`,
            role: "img",
            "aria-label": "Pie chart",
            style: {
                display: "block"
            },
            children: f ? (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
                children: [(0, import_jsx_runtime2.jsx)("circle", {
                    cx: o,
                    cy: o,
                    r: i,
                    fill: c[0].color ?? chartPalette[0]
                }), n ? (0, import_jsx_runtime2.jsx)("circle", {
                    cx: o,
                    cy: o,
                    r: u,
                    fill: t2.bg.editor
                }) : null]
            }) : l.map(e => {
                const t = e.value / a * 360,
                    r = s + t,
                    l = buildSlicePath(n, o, o, i, u, s, r);
                return s = r, e.value <= 0 ? null : (0, import_jsx_runtime2.jsx)("path", {
                    d: l,
                    fill: e.color
                }, e.key)
            })
        }), (0, import_jsx_runtime2.jsx)("div", {
            style: {
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: `${canvasSpacing[2]}px ${canvasSpacing[3]}px`
            },
            children: l.map(e => {
                const t = a > 0 ? e.value / a * 100 : 0;
                return (0, import_jsx_runtime2.jsxs)("div", {
                    style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: `${canvasSpacing[1.5]}px`,
                        color: t2.text.secondary,
                        fontSize: canvasTypography.small.fontSize,
                        lineHeight: canvasTypography.small.lineHeight
                    },
                    children: [(0, import_jsx_runtime2.jsx)("span", {
                        "aria-hidden": !0,
                        style: {
                            width: `${canvasSpacing[2]}px`,
                            height: `${canvasSpacing[2]}px`,
                            borderRadius: `${canvasRadius.full}px`,
                            background: e.color
                        }
                    }), (0, import_jsx_runtime2.jsx)("span", {
                        children: truncateLabel(e.label, 18)
                    }), (0, import_jsx_runtime2.jsx)("span", {
                        style: {
                            color: t2.text.tertiary
                        },
                        children: formatPercent(t)
                    })]
                }, e.key)
            })
        })]
    })
}
var import_react2 = __toESM(require_react(), 1),
    import_client = __toESM(require_client(), 1),
    CANVAS_BACKGROUND_COLOR = "#181818",
    CANVAS_TEXT_COLOR = "#E4E4E4EB",
    CANVAS_SECONDARY_TEXT_COLOR = "#E4E4E48D",
    CANVAS_FONT_FAMILY = 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function renderBootstrapError(e) {
    const t = document.getElementById("root") ?? document.body;
    if (!t) return;
    const n = document.createElement("div");
    n.style.minHeight = "100vh", n.style.padding = "24px", n.style.boxSizing = "border-box", n.style.background = CANVAS_BACKGROUND_COLOR, n.style.color = CANVAS_TEXT_COLOR, n.style.fontFamily = CANVAS_FONT_FAMILY;
    const r = document.createElement("h1");
    r.textContent = "Canvas Runtime Error", r.style.margin = "0 0 12px 0", r.style.fontSize = "20px", r.style.fontWeight = "700";
    const l = document.createElement("p");
    l.textContent = e, l.style.margin = "0", l.style.color = CANVAS_SECONDARY_TEXT_COLOR, l.style.lineHeight = "1.5", n.append(r, l), t.replaceChildren(n)
}

function renderRuntimeError(e) {
    return import_react2.default.createElement("div", {
        style: {
            minHeight: "100vh",
            padding: "24px",
            boxSizing: "border-box",
            background: CANVAS_BACKGROUND_COLOR,
            color: CANVAS_TEXT_COLOR,
            fontFamily: CANVAS_FONT_FAMILY
        }
    }, import_react2.default.createElement("h1", {
        style: {
            margin: "0 0 12px 0",
            fontSize: "20px",
            fontWeight: "700"
        }
    }, "Canvas Runtime Error"), import_react2.default.createElement("p", {
        style: {
            margin: "0",
            color: CANVAS_SECONDARY_TEXT_COLOR,
            lineHeight: "1.5"
        }
    }, e))
}
var HostRuntimeErrorBoundary = class extends import_react2.default.Component {
    constructor() {
        super(...arguments), this.state = {}
    }
    static getDerivedStateFromError(e) {
        return {
            errorMessage: e instanceof Error ? e.message : String(e)
        }
    }
    componentDidCatch(e, t) {
        console.error("[CursorCanvas] Runtime error", e, t)
    }
    render() {
        return void 0 === this.state.errorMessage ? this.props.children : renderRuntimeError(this.state.errorMessage)
    }
};
async function mountCanvas(e) {
    globalThis.React = import_react2.default, Object.assign(globalThis, import_react2.default), Object.assign(globalThis, dist_exports);
    const t = document.getElementById("root");
    if (t instanceof HTMLElement) try {
        const n = (await import(e)).default;
        if ("function" != typeof n && "object" != typeof n) throw new Error("Canvas modules must default export a React component.");
        (0, import_client.createRoot)(t).render(import_react2.default.createElement(HostRuntimeErrorBoundary, null, import_react2.default.createElement(n)))
    } catch (e) {
        renderBootstrapError(e instanceof Error ? e.message : String(e))
    } else renderBootstrapError("Canvas root element was not found.")
}
export {
    mountCanvas
};