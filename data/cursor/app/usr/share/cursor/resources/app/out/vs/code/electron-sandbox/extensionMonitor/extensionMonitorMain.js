/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b9aa610b-df3d-5033-ba0a-abaeec0ed9b2")
    } catch (e) {}
}();
var Ir = function(e, t) {
    return Ir = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (r[s] = n[s])
    }, Ir(e, t)
};
export function __extends(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    Ir(e, t);

    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
export var __assign = function() {
    return __assign = Object.assign || function(t) {
        for (var r, n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
        return t
    }, __assign.apply(this, arguments)
};
export function __rest(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
    return r
}
export function __decorate(e, t, r, n) {
    var s = arguments.length,
        o = s < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n,
        a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, r, n);
    else
        for (var l = e.length - 1; l >= 0; l--)(a = e[l]) && (o = (s < 3 ? a(o) : s > 3 ? a(t, r, o) : a(t, r)) || o);
    return s > 3 && o && Object.defineProperty(t, r, o), o
}
export function __param(e, t) {
    return function(r, n) {
        t(r, n, e)
    }
}
export function __esDecorate(e, t, r, n, s, o) {
    function a($) {
        if ($ !== void 0 && typeof $ != "function") throw new TypeError("Function expected");
        return $
    }
    for (var l = n.kind, u = l === "getter" ? "get" : l === "setter" ? "set" : "value", c = !t && e ? n.static ? e : e.prototype : null, f = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), h, p = !1, m = r.length - 1; m >= 0; m--) {
        var S = {};
        for (var k in n) S[k] = k === "access" ? {} : n[k];
        for (var k in n.access) S.access[k] = n.access[k];
        S.addInitializer = function($) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a($ || null))
        };
        var D = (0, r[m])(l === "accessor" ? {
            get: f.get,
            set: f.set
        } : f[u], S);
        if (l === "accessor") {
            if (D === void 0) continue;
            if (D === null || typeof D != "object") throw new TypeError("Object expected");
            (h = a(D.get)) && (f.get = h), (h = a(D.set)) && (f.set = h), (h = a(D.init)) && s.unshift(h)
        } else(h = a(D)) && (l === "field" ? s.unshift(h) : f[u] = h)
    }
    c && Object.defineProperty(c, n.name, f), p = !0
}
export function __runInitializers(e, t, r) {
    for (var n = arguments.length > 2, s = 0; s < t.length; s++) r = n ? t[s].call(e, r) : t[s].call(e);
    return n ? r : void 0
}
export function __propKey(e) {
    return typeof e == "symbol" ? e : "".concat(e)
}
export function __setFunctionName(e, t, r) {
    return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
        configurable: !0,
        value: r ? "".concat(r, " ", t) : t
    })
}
export function __metadata(e, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t)
}
export function __awaiter(e, t, r, n) {
    function s(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(f) {
            try {
                c(n.next(f))
            } catch (h) {
                a(h)
            }
        }

        function u(f) {
            try {
                c(n.throw(f))
            } catch (h) {
                a(h)
            }
        }

        function c(f) {
            f.done ? o(f.value) : s(f.value).then(l, u)
        }
        c((n = n.apply(e, t || [])).next())
    })
}
export function __generator(e, t) {
    var r = {
            label: 0,
            sent: function() {
                if (o[0] & 1) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        },
        n, s, o, a;
    return a = {
        next: l(0),
        throw: l(1),
        return: l(2)
    }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function l(c) {
        return function(f) {
            return u([c, f])
        }
    }

    function u(c) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; a && (a = 0, c[0] && (r = 0)), r;) try {
            if (n = 1, s && (o = c[0] & 2 ? s.return : c[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, c[1])).done) return o;
            switch (s = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
                case 0:
                case 1:
                    o = c;
                    break;
                case 4:
                    return r.label++, {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    r.label++, s = c[1], c = [0];
                    continue;
                case 7:
                    c = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
                        r.label = c[1];
                        break
                    }
                    if (c[0] === 6 && r.label < o[1]) {
                        r.label = o[1], o = c;
                        break
                    }
                    if (o && r.label < o[2]) {
                        r.label = o[2], r.ops.push(c);
                        break
                    }
                    o[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            c = t.call(e, r)
        } catch (f) {
            c = [6, f], s = 0
        } finally {
            n = o = 0
        }
        if (c[0] & 5) throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}
export var __createBinding = Object.create ? (function(e, t, r, n) {
    n === void 0 && (n = r);
    var s = Object.getOwnPropertyDescriptor(t, r);
    (!s || ("get" in s ? !t.__esModule : s.writable || s.configurable)) && (s = {
        enumerable: !0,
        get: function() {
            return t[r]
        }
    }), Object.defineProperty(e, n, s)
}) : (function(e, t, r, n) {
    n === void 0 && (n = r), e[n] = t[r]
});
export function __exportStar(e, t) {
    for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && __createBinding(t, e, r)
}
export function __values(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        r = t && e[t],
        n = 0;
    if (r) return r.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && n >= e.length && (e = void 0), {
                value: e && e[n++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
export function __read(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r) return e;
    var n = r.call(e),
        s, o = [],
        a;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(s = n.next()).done;) o.push(s.value)
    } catch (l) {
        a = {
            error: l
        }
    } finally {
        try {
            s && !s.done && (r = n.return) && r.call(n)
        } finally {
            if (a) throw a.error
        }
    }
    return o
}
export function __spread() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
    return e
}
export function __spreadArrays() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
    for (var n = Array(e), s = 0, t = 0; t < r; t++)
        for (var o = arguments[t], a = 0, l = o.length; a < l; a++, s++) n[s] = o[a];
    return n
}
export function __spreadArray(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, s = t.length, o; n < s; n++)(o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
    return e.concat(o || Array.prototype.slice.call(t))
}
export function __await(e) {
    return this instanceof __await ? (this.v = e, this) : new __await(e)
}
export function __asyncGenerator(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []),
        s, o = [];
    return s = {}, l("next"), l("throw"), l("return", a), s[Symbol.asyncIterator] = function() {
        return this
    }, s;

    function a(m) {
        return function(S) {
            return Promise.resolve(S).then(m, h)
        }
    }

    function l(m, S) {
        n[m] && (s[m] = function(k) {
            return new Promise(function(D, $) {
                o.push([m, k, D, $]) > 1 || u(m, k)
            })
        }, S && (s[m] = S(s[m])))
    }

    function u(m, S) {
        try {
            c(n[m](S))
        } catch (k) {
            p(o[0][3], k)
        }
    }

    function c(m) {
        m.value instanceof __await ? Promise.resolve(m.value.v).then(f, h) : p(o[0][2], m)
    }

    function f(m) {
        u("next", m)
    }

    function h(m) {
        u("throw", m)
    }

    function p(m, S) {
        m(S), o.shift(), o.length && u(o[0][0], o[0][1])
    }
}
export function __asyncDelegator(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(s) {
        throw s
    }), n("return"), t[Symbol.iterator] = function() {
        return this
    }, t;

    function n(s, o) {
        t[s] = e[s] ? function(a) {
            return (r = !r) ? {
                value: __await(e[s](a)),
                done: !1
            } : o ? o(a) : a
        } : o
    }
}
export function __asyncValues(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator],
        r;
    return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this
    }, r);

    function n(o) {
        r[o] = e[o] && function(a) {
            return new Promise(function(l, u) {
                a = e[o](a), s(l, u, a.done, a.value)
            })
        }
    }

    function s(o, a, l, u) {
        Promise.resolve(u).then(function(c) {
            o({
                value: c,
                done: l
            })
        }, a)
    }
}
export function __makeTemplateObject(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t, e
}
var gs = Object.create ? (function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    })
}) : function(e, t) {
    e.default = t
};
export function __importStar(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (e != null)
        for (var r in e) r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
    return gs(t, e), t
}
export function __importDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
export function __classPrivateFieldGet(e, t, r, n) {
    if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e)
}
export function __classPrivateFieldSet(e, t, r, n, s) {
    if (n === "m") throw new TypeError("Private method is not writable");
    if (n === "a" && !s) throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? s.call(e, r) : s ? s.value = r : t.set(e, r), r
}
export function __classPrivateFieldIn(e, t) {
    if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof e == "function" ? t === e : e.has(t)
}
export function __addDisposableResource(e, t, r) {
    if (t != null) {
        if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
        var n, s;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
        }
        if (n === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (s = n)
        }
        if (typeof n != "function") throw new TypeError("Object not disposable.");
        s && (n = function() {
            try {
                s.call(this)
            } catch (o) {
                return Promise.reject(o)
            }
        }), e.stack.push({
            value: t,
            dispose: n,
            async: r
        })
    } else r && e.stack.push({
        async: !0
    });
    return t
}
var ys = typeof SuppressedError == "function" ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
};
export function __disposeResources(e) {
    function t(n) {
        e.error = e.hasError ? new ys(n, e.error, "An error was suppressed during disposal.") : n, e.hasError = !0
    }

    function r() {
        for (; e.stack.length;) {
            var n = e.stack.pop();
            try {
                var s = n.dispose && n.dispose.call(n.value);
                if (n.async) return Promise.resolve(s).then(r, function(o) {
                    return t(o), r()
                })
            } catch (o) {
                t(o)
            }
        }
        if (e.hasError) throw e.error
    }
    return r()
}
export default {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
};

function vs(e, t, r = 0, n = e.length) {
    let s = r,
        o = n;
    for (; s < o;) {
        const a = Math.floor((s + o) / 2);
        t(e[a]) ? s = a + 1 : o = a
    }
    return s - 1
}
var _s = class Ji {
    constructor(t) {
        this._array = t, this._findLastMonotonousLastIdx = 0
    }
    findLastMonotonous(t) {
        if (Ji.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const n of this._array)
                    if (this._prevFindLastPredicate(n) && !t(n)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.")
            }
            this._prevFindLastPredicate = t
        }
        const r = vs(this._array, t, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = r + 1, r === -1 ? void 0 : this._array[r]
    }
};
_s.assertInvariants = !1;
var bs = class {
        constructor() {
            this.listeners = [], this.unexpectedErrorHandler = function(e) {
                setTimeout(() => {
                    throw e.stack ? t1.isErrorNoTelemetry(e) ? new t1(e.message + `

` + e.stack) : new Error(e.message + `

` + e.stack) : e
                }, 0)
            }
        }
        addListener(e) {
            return this.listeners.push(e), () => {
                this._removeListener(e)
            }
        }
        emit(e) {
            this.listeners.forEach(t => {
                t(e)
            })
        }
        _removeListener(e) {
            this.listeners.splice(this.listeners.indexOf(e), 1)
        }
        setUnexpectedErrorHandler(e) {
            this.unexpectedErrorHandler = e
        }
        getUnexpectedErrorHandler() {
            return this.unexpectedErrorHandler
        }
        onUnexpectedError(e) {
            this.unexpectedErrorHandler(e), this.emit(e)
        }
        onUnexpectedExternalError(e) {
            this.unexpectedErrorHandler(e)
        }
    },
    e1 = new bs;

function qt(e) {
    e1.onUnexpectedError(e)
}

function De(e) {
    ws(e) || e1.onUnexpectedError(e)
}
var kr = "Canceled";

function ws(e) {
    return e instanceof Cs ? !0 : e instanceof Error && e.name === kr && e.message === kr
}
var Cs = class extends Error {
        constructor() {
            if (super(kr), this.name = this.message, Es && typeof console < "u") {
                const e = new Error().stack ?? "";
                As.some(t => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created")
            }
        }
    },
    t1 = class Tn extends Error {
        constructor(t) {
            super(t), this.name = "CodeExpectedError"
        }
        static fromError(t) {
            if (t instanceof Tn) return t;
            const r = new Tn;
            return r.message = t.message, r.stack = t.stack, r
        }
        static isErrorNoTelemetry(t) {
            return t.name === "CodeExpectedError"
        }
    },
    Be = class es extends Error {
        constructor(t) {
            super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, es.prototype)
        }
    },
    As = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "ComposerToolFormerMessage", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"],
    Es = !1,
    Rr;
(e => {
    function t(o) {
        return o < 0
    }
    e.isLessThan = t;

    function r(o) {
        return o <= 0
    }
    e.isLessThanOrEqual = r;

    function n(o) {
        return o > 0
    }
    e.isGreaterThan = n;

    function s(o) {
        return o === 0
    }
    e.isNeitherLessOrGreaterThan = s, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0
})(Rr || (Rr = {}));

function Ss(e, t) {
    return (r, n) => t(e(r), e(n))
}
var Ts = (e, t) => e - t,
    r1 = class On {
        constructor(t) {
            this.iterate = t
        }
        forEach(t) {
            this.iterate(r => (t(r), !0))
        }
        toArray() {
            const t = [];
            return this.iterate(r => (t.push(r), !0)), t
        }
        filter(t) {
            return new On(r => this.iterate(n => t(n) ? r(n) : !0))
        }
        map(t) {
            return new On(r => this.iterate(n => r(t(n))))
        }
        some(t) {
            let r = !1;
            return this.iterate(n => (r = t(n), !r)), r
        }
        findFirst(t) {
            let r;
            return this.iterate(n => t(n) ? (r = n, !1) : !0), r
        }
        findLast(t) {
            let r;
            return this.iterate(n => (t(n) && (r = n), !0)), r
        }
        findLastMaxBy(t) {
            let r, n = !0;
            return this.iterate(s => ((n || Rr.isGreaterThan(t(s, r))) && (n = !1, r = s), !0)), r
        }
    };
r1.empty = new r1(e => {});
var n1, i1;

function Os(e, t) {
    const r = Object.create(null);
    for (const n of e) {
        const s = t(n);
        let o = r[s];
        o || (o = r[s] = []), o.push(n)
    }
    return r
}
var wl = class {
        constructor(e, t) {
            this.toKey = t, this._map = new Map, this[n1] = "SetWithKey";
            for (const r of e) this.add(r)
        }
        get size() {
            return this._map.size
        }
        add(e) {
            const t = this.toKey(e);
            return this._map.set(t, e), this
        }
        delete(e) {
            return this._map.delete(this.toKey(e))
        }
        has(e) {
            return this._map.has(this.toKey(e))
        }* entries() {
            for (const e of this._map.values()) yield [e, e]
        }
        keys() {
            return this.values()
        }* values() {
            for (const e of this._map.values()) yield e
        }
        clear() {
            this._map.clear()
        }
        forEach(e, t) {
            this._map.forEach(r => e.call(t, r, r, this))
        } [(i1 = Symbol.iterator, n1 = Symbol.toStringTag, i1)]() {
            return this.values()
        }
    },
    s1, o1, a1, Is = class {
        constructor(e, t) {
            this.uri = e, this.value = t
        }
    };

function ks(e) {
    return Array.isArray(e)
}
var l1 = class Ut {
    constructor(t, r) {
        if (this[s1] = "ResourceMap", t instanceof Ut) this.map = new Map(t.map), this.toKey = r ?? Ut.defaultToKey;
        else if (ks(t)) {
            this.map = new Map, this.toKey = r ?? Ut.defaultToKey;
            for (const [n, s] of t) this.set(n, s)
        } else this.map = new Map, this.toKey = t ?? Ut.defaultToKey
    }
    set(t, r) {
        return this.map.set(this.toKey(t), new Is(t, r)), this
    }
    get(t) {
        return this.map.get(this.toKey(t))?.value
    }
    has(t) {
        return this.map.has(this.toKey(t))
    }
    get size() {
        return this.map.size
    }
    clear() {
        this.map.clear()
    }
    delete(t) {
        return this.map.delete(this.toKey(t))
    }
    forEach(t, r) {
        typeof r < "u" && (t = t.bind(r));
        for (const [n, s] of this.map) t(s.value, s.uri, this)
    }* values() {
        for (const t of this.map.values()) yield t.value
    }* keys() {
        for (const t of this.map.values()) yield t.uri
    }* entries() {
        for (const t of this.map.values()) yield [t.uri, t.value]
    }*[(s1 = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, t] of this.map) yield [t.uri, t.value]
    }
};
l1.defaultToKey = e => e.toString();
var c1 = l1,
    Cl = class {
        constructor(e, t) {
            this[o1] = "ResourceSet", !e || typeof e == "function" ? this._map = new c1(e) : (this._map = new c1(t), e.forEach(this.add, this))
        }
        get size() {
            return this._map.size
        }
        add(e) {
            return this._map.set(e, e), this
        }
        clear() {
            this._map.clear()
        }
        delete(e) {
            return this._map.delete(e)
        }
        forEach(e, t) {
            this._map.forEach((r, n) => e.call(t, n, n, this))
        }
        has(e) {
            return this._map.has(e)
        }
        entries() {
            return this._map.entries()
        }
        keys() {
            return this._map.keys()
        }
        values() {
            return this._map.keys()
        } [(o1 = Symbol.toStringTag, Symbol.iterator)]() {
            return this.keys()
        }
    },
    Al = class {
        constructor() {
            this[a1] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0
        }
        clear() {
            this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++
        }
        isEmpty() {
            return !this._head && !this._tail
        }
        get size() {
            return this._size
        }
        get first() {
            return this._head?.value
        }
        get last() {
            return this._tail?.value
        }
        has(e) {
            return this._map.has(e)
        }
        get(e, t = 0) {
            const r = this._map.get(e);
            if (r) return t !== 0 && this.touch(r, t), r.value
        }
        set(e, t, r = 0) {
            let n = this._map.get(e);
            if (n) n.value = t, r !== 0 && this.touch(n, r);
            else {
                switch (n = {
                        key: e,
                        value: t,
                        next: void 0,
                        previous: void 0
                    }, r) {
                    case 0:
                        this.addItemLast(n);
                        break;
                    case 1:
                        this.addItemFirst(n);
                        break;
                    case 2:
                        this.addItemLast(n);
                        break;
                    default:
                        this.addItemLast(n);
                        break
                }
                this._map.set(e, n), this._size++
            }
            return this
        }
        delete(e) {
            return !!this.remove(e)
        }
        remove(e) {
            const t = this._map.get(e);
            if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value
        }
        shift() {
            if (!this._head && !this._tail) return;
            if (!this._head || !this._tail) throw new Error("Invalid list");
            const e = this._head;
            return this._map.delete(e.key), this.removeItem(e), this._size--, e.value
        }
        forEach(e, t) {
            const r = this._state;
            let n = this._head;
            for (; n;) {
                if (t ? e.bind(t)(n.value, n.key, this) : e(n.value, n.key, this), this._state !== r) throw new Error("LinkedMap got modified during iteration.");
                n = n.next
            }
        }
        keys() {
            const e = this,
                t = this._state;
            let r = this._head;
            const n = {
                [Symbol.iterator]() {
                    return n
                },
                next() {
                    if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
                    if (r) {
                        const s = {
                            value: r.key,
                            done: !1
                        };
                        return r = r.next, s
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return n
        }
        values() {
            const e = this,
                t = this._state;
            let r = this._head;
            const n = {
                [Symbol.iterator]() {
                    return n
                },
                next() {
                    if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
                    if (r) {
                        const s = {
                            value: r.value,
                            done: !1
                        };
                        return r = r.next, s
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return n
        }
        entries() {
            const e = this,
                t = this._state;
            let r = this._head;
            const n = {
                [Symbol.iterator]() {
                    return n
                },
                next() {
                    if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
                    if (r) {
                        const s = {
                            value: [r.key, r.value],
                            done: !1
                        };
                        return r = r.next, s
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return n
        } [(a1 = Symbol.toStringTag, Symbol.iterator)]() {
            return this.entries()
        }
        trimOld(e) {
            if (e >= this.size) return;
            if (e === 0) {
                this.clear();
                return
            }
            let t = this._head,
                r = this.size;
            for (; t && r > e;) this._map.delete(t.key), t = t.next, r--;
            this._head = t, this._size = r, t && (t.previous = void 0), this._state++
        }
        trimNew(e) {
            if (e >= this.size) return;
            if (e === 0) {
                this.clear();
                return
            }
            let t = this._tail,
                r = this.size;
            for (; t && r > e;) this._map.delete(t.key), t = t.previous, r--;
            this._tail = t, this._size = r, t && (t.next = void 0), this._state++
        }
        addItemFirst(e) {
            if (!this._head && !this._tail) this._tail = e;
            else if (this._head) e.next = this._head, this._head.previous = e;
            else throw new Error("Invalid list");
            this._head = e, this._state++
        }
        addItemLast(e) {
            if (!this._head && !this._tail) this._head = e;
            else if (this._tail) e.previous = this._tail, this._tail.next = e;
            else throw new Error("Invalid list");
            this._tail = e, this._state++
        }
        removeItem(e) {
            if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
            else if (e === this._head) {
                if (!e.next) throw new Error("Invalid list");
                e.next.previous = void 0, this._head = e.next
            } else if (e === this._tail) {
                if (!e.previous) throw new Error("Invalid list");
                e.previous.next = void 0, this._tail = e.previous
            } else {
                const t = e.next,
                    r = e.previous;
                if (!t || !r) throw new Error("Invalid list");
                t.previous = r, r.next = t
            }
            e.next = void 0, e.previous = void 0, this._state++
        }
        touch(e, t) {
            if (!this._head || !this._tail) throw new Error("Invalid list");
            if (!(t !== 1 && t !== 2)) {
                if (t === 1) {
                    if (e === this._head) return;
                    const r = e.next,
                        n = e.previous;
                    e === this._tail ? (n.next = void 0, this._tail = n) : (r.previous = n, n.next = r), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++
                } else if (t === 2) {
                    if (e === this._tail) return;
                    const r = e.next,
                        n = e.previous;
                    e === this._head ? (r.previous = void 0, this._head = r) : (r.previous = n, n.next = r), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++
                }
            }
        }
        toJSON() {
            const e = [];
            return this.forEach((t, r) => {
                e.push([r, t])
            }), e
        }
        fromJSON(e) {
            this.clear();
            for (const [t, r] of e) this.set(t, r)
        }
    },
    Rs = class {
        constructor() {
            this.map = new Map
        }
        add(e, t) {
            let r = this.map.get(e);
            r || (r = new Set, this.map.set(e, r)), r.add(t)
        }
        delete(e, t) {
            const r = this.map.get(e);
            r && (r.delete(t), r.size === 0 && this.map.delete(e))
        }
        forEach(e, t) {
            const r = this.map.get(e);
            r && r.forEach(t)
        }
        get(e) {
            const t = this.map.get(e);
            return t || new Set
        }
    };

function Ds(e, t) {
    const r = this;
    let n = !1,
        s;
    return function() {
        if (n) return s;
        if (n = !0, t) try {
            s = e.apply(r, arguments)
        } finally {
            t()
        } else s = e.apply(r, arguments);
        return s
    }
}

function Dr(e, t) {
    if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed")
}

function u1(e) {
    if (!e()) {
        debugger;
        e(), De(new Be("Assertion Failed"))
    }
}

function Ot(e) {
    return typeof e == "string"
}

function Ls(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date)
}

function xs(e) {
    return !!e && typeof e[Symbol.iterator] == "function"
}

function Ns(e) {
    return typeof e > "u"
}

function It(e) {
    return !Ps(e)
}

function Ps(e) {
    return Ns(e) || e === null
}

function Ms(e) {
    return typeof e == "function"
}
var Lr;
(e => {
    function t(C) {
        return C && typeof C == "object" && typeof C[Symbol.iterator] == "function"
    }
    e.is = t;
    const r = Object.freeze([]);

    function n() {
        return r
    }
    e.empty = n;

    function* s(C) {
        yield C
    }
    e.single = s;

    function o(C) {
        return t(C) ? C : s(C)
    }
    e.wrap = o;

    function a(C) {
        return C || r
    }
    e.from = a;

    function* l(C) {
        for (let I = C.length - 1; I >= 0; I--) yield C[I]
    }
    e.reverse = l;

    function u(C) {
        return !C || C[Symbol.iterator]().next().done === !0
    }
    e.isEmpty = u;

    function c(C) {
        return C[Symbol.iterator]().next().value
    }
    e.first = c;

    function f(C, I) {
        let P = 0;
        for (const q of C)
            if (I(q, P++)) return !0;
        return !1
    }
    e.some = f;

    function h(C, I) {
        for (const P of C)
            if (I(P)) return P
    }
    e.find = h;

    function* p(C, I) {
        for (const P of C) I(P) && (yield P)
    }
    e.filter = p;

    function* m(C, I) {
        let P = 0;
        for (const q of C) yield I(q, P++)
    }
    e.map = m;

    function* S(C, I) {
        let P = 0;
        for (const q of C) yield* I(q, P++)
    }
    e.flatMap = S;

    function* k(...C) {
        for (const I of C) xs(I) ? yield* I: yield I
    }
    e.concat = k;

    function D(C, I, P) {
        let q = P;
        for (const de of C) q = I(q, de);
        return q
    }
    e.reduce = D;

    function $(C) {
        let I = 0;
        for (const P of C) I++;
        return I
    }
    e.length = $;

    function* ue(C, I, P = C.length) {
        for (I < -C.length && (I = 0), I < 0 && (I += C.length), P < 0 ? P += C.length : P > C.length && (P = C.length); I < P; I++) yield C[I]
    }
    e.slice = ue;

    function V(C, I = Number.POSITIVE_INFINITY) {
        const P = [];
        if (I === 0) return [P, C];
        const q = C[Symbol.iterator]();
        for (let de = 0; de < I; de++) {
            const et = q.next();
            if (et.done) return [P, e.empty()];
            P.push(et.value)
        }
        return [P, {
            [Symbol.iterator]() {
                return q
            }
        }]
    }
    e.consume = V;
    async function H(C) {
        const I = [];
        for await (const P of C) I.push(P);
        return Promise.resolve(I)
    }
    e.asyncToArray = H
})(Lr || (Lr = {}));
var Fs = !1,
    lt = null,
    Us = class ts {
        constructor() {
            this.livingDisposables = new Map
        }
        getDisposableData(t) {
            let r = this.livingDisposables.get(t);
            return r || (r = {
                parent: null,
                source: null,
                isSingleton: !1,
                value: t,
                idx: ts.idx++
            }, this.livingDisposables.set(t, r)), r
        }
        trackDisposable(t) {
            const r = this.getDisposableData(t);
            r.source || (r.source = new Error().stack)
        }
        setParent(t, r) {
            const n = this.getDisposableData(t);
            n.parent = r
        }
        markAsDisposed(t) {
            this.livingDisposables.delete(t)
        }
        markAsSingleton(t) {
            this.getDisposableData(t).isSingleton = !0
        }
        getRootParent(t, r) {
            const n = r.get(t);
            if (n) return n;
            const s = t.parent ? this.getRootParent(this.getDisposableData(t.parent), r) : t;
            return r.set(t, s), s
        }
        getTrackedDisposables() {
            const t = new Map;
            return [...this.livingDisposables.entries()].filter(([, n]) => n.source !== null && !this.getRootParent(n, t).isSingleton).flatMap(([n]) => n)
        }
        computeLeakingDisposables(t = 10, r) {
            let n;
            if (r) n = r;
            else {
                const u = new Map,
                    c = [...this.livingDisposables.values()].filter(h => h.source !== null && !this.getRootParent(h, u).isSingleton);
                if (c.length === 0) return;
                const f = new Set(c.map(h => h.value));
                if (n = c.filter(h => !(h.parent && f.has(h.parent))), n.length === 0) throw new Error("There are cyclic diposable chains!")
            }
            if (!n) return;

            function s(u) {
                function c(h, p) {
                    for (; h.length > 0 && p.some(m => typeof m == "string" ? m === h[0] : h[0].match(m));) h.shift()
                }
                const f = u.source.split(`
`).map(h => h.trim().replace("at ", "")).filter(h => h !== "");
                return c(f, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), f.reverse()
            }
            const o = new Rs;
            for (const u of n) {
                const c = s(u);
                for (let f = 0; f <= c.length; f++) o.add(c.slice(0, f).join(`
`), u)
            }
            n.sort(Ss(u => u.idx, Ts));
            let a = "",
                l = 0;
            for (const u of n.slice(0, t)) {
                l++;
                const c = s(u),
                    f = [];
                for (let h = 0; h < c.length; h++) {
                    let p = c[h];
                    p = `(shared with ${o.get(c.slice(0,h+1).join(`
`)).size}/${n.length} leaks) at ${p}`;
                    const S = o.get(c.slice(0, h).join(`
`)),
                        k = Os([...S].map(D => s(D)[h]), D => D);
                    delete k[c[h]];
                    for (const [D, $] of Object.entries(k)) f.unshift(`    - stacktraces of ${$.length} other leaks continue with ${D}`);
                    f.unshift(p)
                }
                a += `


==================== Leaking disposable ${l}/${n.length}: ${u.value.constructor.name} ====================
${f.join(`
`)}
============================================================

`
            }
            return n.length > t && (a += `


... and ${n.length-t} more leaking disposables

`), {
                leaks: n,
                details: a
            }
        }
    };
Us.idx = 0;

function Vs(e) {
    lt = e
}
if (Fs) {
    const e = "__is_disposable_tracked__";
    Vs(new class {
        trackDisposable(t) {
            const r = new Error("Potentially leaked disposable").stack;
            setTimeout(() => {
                t[e] || console.log(r)
            }, 3e3)
        }
        setParent(t, r) {
            if (t && t !== Le.None) try {
                t[e] = !0
            } catch {}
        }
        markAsDisposed(t) {
            if (t && t !== Le.None) try {
                t[e] = !0
            } catch {}
        }
        markAsSingleton(t) {}
    })
}

function Zt(e) {
    return lt?.trackDisposable(e), e
}

function Yt(e) {
    lt?.markAsDisposed(e)
}

function xr(e, t) {
    lt?.setParent(e, t)
}

function Bs(e, t) {
    if (lt)
        for (const r of e) lt.setParent(r, t)
}

function d1(e) {
    if (Lr.is(e)) {
        const t = [];
        for (const r of e)
            if (r) try {
                r.dispose()
            } catch (n) {
                t.push(n)
            }
        if (t.length === 1) throw t[0];
        if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
        return Array.isArray(e) ? [] : e
    } else if (e) return e.dispose(), e
}

function Ks(...e) {
    const t = _e(() => d1(e));
    return Bs(e, t), t
}

function _e(e) {
    const t = Zt({
        dispose: Ds(() => {
            Yt(t), e()
        })
    });
    return t
}
var h1 = class rs {
    constructor() {
        this._toDispose = new Set, this._isDisposed = !1, Zt(this)
    }
    dispose() {
        this._isDisposed || (Yt(this), this._isDisposed = !0, this.clear())
    }
    get isDisposed() {
        return this._isDisposed
    }
    clear() {
        if (this._toDispose.size !== 0) try {
            d1(this._toDispose)
        } finally {
            this._toDispose.clear()
        }
    }
    add(t) {
        if (!t) return t;
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return xr(t, this), this._isDisposed ? rs.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t), t
    }
    delete(t) {
        if (t) {
            if (t === this) throw new Error("Cannot dispose a disposable on itself!");
            this._toDispose.delete(t), t.dispose()
        }
    }
    deleteAndLeak(t) {
        t && this._toDispose.has(t) && (this._toDispose.delete(t), xr(t, null))
    }
};
h1.DISABLE_DISPOSED_WARNING = !1;
var be = h1,
    Le = class {
        constructor() {
            this._store = new be, Zt(this), xr(this._store, this)
        }
        dispose() {
            Yt(this), this._store.dispose()
        }
        _register(e) {
            if (e === this) throw new Error("Cannot register a disposable on itself!");
            return this._store.add(e)
        }
    };
Le.None = Object.freeze({
    dispose() {}
});
var L = window;

function $s(e, t) {
    const r = e;
    typeof r.vscodeWindowId != "number" && Object.defineProperty(r, "vscodeWindowId", {
        get: () => t
    })
}
var f1 = class In {
    constructor(t) {
        this.element = t, this.next = In.Undefined, this.prev = In.Undefined
    }
};
f1.Undefined = new f1(void 0);
var Ws = globalThis.performance && typeof globalThis.performance.now == "function",
    Hs = class ns {
        static create(t) {
            return new ns(t)
        }
        constructor(t) {
            this._now = Ws && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1
        }
        stop() {
            this._stopTime = this._now()
        }
        reset() {
            this._startTime = this._now(), this._stopTime = -1
        }
        elapsed() {
            return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime
        }
    },
    p1 = !1,
    zs = !1,
    Qt;
(e => {
    e.None = () => Le.None;

    function t(b) {
        if (zs) {
            const {
                onDidAddListener: g
            } = b, _ = Pr.create();
            let v = 0;
            b.onDidAddListener = () => {
                ++v === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), _.print()), g?.()
            }
        }
    }

    function r(b, g) {
        return m(b, () => {}, 0, void 0, !0, void 0, g)
    }
    e.defer = r;

    function n(b) {
        return (g, _ = null, v) => {
            let A = !1,
                O;
            return O = b(T => {
                if (!A) return O ? O.dispose() : A = !0, g.call(_, T)
            }, null, v), A && O.dispose(), O
        }
    }
    e.once = n;

    function s(b, g) {
        return e.once(e.filter(b, g))
    }
    e.onceIf = s;

    function o(b, g, _) {
        return h((v, A = null, O) => b(T => v.call(A, g(T)), null, O), _)
    }
    e.map = o;

    function a(b, g, _) {
        return h((v, A = null, O) => b(T => {
            g(T), v.call(A, T)
        }, null, O), _)
    }
    e.forEach = a;

    function l(b, g, _) {
        return h((v, A = null, O) => b(T => g(T) && v.call(A, T), null, O), _)
    }
    e.filter = l;

    function u(b) {
        return b
    }
    e.signal = u;

    function c(...b) {
        return (g, _ = null, v) => {
            const A = Ks(...b.map(O => O(T => g.call(_, T))));
            return p(A, v)
        }
    }
    e.any = c;

    function f(b, g, _, v) {
        let A = _;
        return o(b, O => (A = g(A, O), A), v)
    }
    e.reduce = f;

    function h(b, g) {
        let _;
        const v = {
            onWillAddFirstListener() {
                _ = b(A.fire, A)
            },
            onDidRemoveLastListener() {
                _?.dispose()
            }
        };
        g || t(v);
        const A = new Z(v);
        return g?.add(A), A.event
    }

    function p(b, g) {
        return g instanceof Array ? g.push(b) : g && g.add(b), b
    }

    function m(b, g, _ = 100, v = !1, A = !1, O, T) {
        let z, N, Ie, B = 0,
            ve;
        const tt = {
            leakWarningThreshold: O,
            onWillAddFirstListener() {
                z = b(At => {
                    B++, N = g(N, At), v && !Ie && (ze.fire(N), N = void 0), ve = () => {
                        const $t = N;
                        N = void 0, Ie = void 0, (!v || B > 1) && ze.fire($t), B = 0
                    }, typeof _ == "number" ? (clearTimeout(Ie), Ie = setTimeout(ve, _)) : Ie === void 0 && (Ie = 0, queueMicrotask(ve))
                })
            },
            onWillRemoveListener() {
                A && B > 0 && ve?.()
            },
            onDidRemoveLastListener() {
                ve = void 0, z.dispose()
            }
        };
        T || t(tt);
        const ze = new Z(tt);
        return T?.add(ze), ze.event
    }
    e.debounce = m;

    function S(b, g = 0, _) {
        return e.debounce(b, (v, A) => v ? (v.push(A), v) : [A], g, void 0, !0, void 0, _)
    }
    e.accumulate = S;

    function k(b, g = (v, A) => v === A, _) {
        let v = !0,
            A;
        return l(b, O => {
            const T = v || !g(O, A);
            return v = !1, A = O, T
        }, _)
    }
    e.latch = k;

    function D(b, g, _) {
        return [e.filter(b, g, _), e.filter(b, v => !g(v), _)]
    }
    e.split = D;

    function $(b, g = !1, _ = [], v) {
        let A = _.slice(),
            O = b(N => {
                A ? A.push(N) : z.fire(N)
            });
        v && v.add(O);
        const T = () => {
                A?.forEach(N => z.fire(N)), A = null
            },
            z = new Z({
                onWillAddFirstListener() {
                    O || (O = b(N => z.fire(N)), v && v.add(O))
                },
                onDidAddFirstListener() {
                    A && (g ? setTimeout(T) : T())
                },
                onDidRemoveLastListener() {
                    O && O.dispose(), O = null
                }
            });
        return v && v.add(z), z.event
    }
    e.buffer = $;

    function ue(b, g) {
        return (v, A, O) => {
            const T = g(new H);
            return b(function(z) {
                const N = T.evaluate(z);
                N !== V && v.call(A, N)
            }, void 0, O)
        }
    }
    e.chain = ue;
    const V = Symbol("HaltChainable");
    class H {
        constructor() {
            this.steps = []
        }
        map(g) {
            return this.steps.push(g), this
        }
        forEach(g) {
            return this.steps.push(_ => (g(_), _)), this
        }
        filter(g) {
            return this.steps.push(_ => g(_) ? _ : V), this
        }
        reduce(g, _) {
            let v = _;
            return this.steps.push(A => (v = g(v, A), v)), this
        }
        latch(g = (_, v) => _ === v) {
            let _ = !0,
                v;
            return this.steps.push(A => {
                const O = _ || !g(A, v);
                return _ = !1, v = A, O ? A : V
            }), this
        }
        evaluate(g) {
            for (const _ of this.steps)
                if (g = _(g), g === V) break;
            return g
        }
    }

    function C(b, g, _ = v => v) {
        const v = (...z) => T.fire(_(...z)),
            A = () => b.on(g, v),
            O = () => b.removeListener(g, v),
            T = new Z({
                onWillAddFirstListener: A,
                onDidRemoveLastListener: O
            });
        return T.event
    }
    e.fromNodeEventEmitter = C;

    function I(b) {
        let g;
        const _ = () => {
                g = b.subscribe(O => A.fire(O))
            },
            v = () => {
                g?.unsubscribe(), g = void 0
            },
            A = new Z({
                onWillAddFirstListener: _,
                onDidRemoveLastListener: v
            });
        return A.event
    }
    e.fromRxJS = I;

    function P(b, g, _ = v => v) {
        const v = (...z) => T.fire(_(...z)),
            A = () => b.addEventListener(g, v),
            O = () => b.removeEventListener(g, v),
            T = new Z({
                onWillAddFirstListener: A,
                onDidRemoveLastListener: O
            });
        return T.event
    }
    e.fromDOMEventEmitter = P;

    function q(b, g) {
        return new Promise(_ => n(b)(_, null, g))
    }
    e.toPromise = q;

    function de(b) {
        const g = new Z;
        return b.then(_ => {
            g.fire(_)
        }, () => {
            g.fire(void 0)
        }).finally(() => {
            g.dispose()
        }), g.event
    }
    e.fromPromise = de;

    function et(b, g) {
        return b(_ => g.fire(_))
    }
    e.forward = et;

    function he(b, g, _) {
        return g(_), b(v => g(v))
    }
    e.runAndSubscribe = he;
    class bt {
        constructor(g, _) {
            this._observable = g, this._counter = 0, this._hasChanged = !1;
            const v = {
                onWillAddFirstListener: () => {
                    g.addObserver(this), this._observable.reportChanges()
                },
                onDidRemoveLastListener: () => {
                    g.removeObserver(this)
                }
            };
            _ || t(v), this.emitter = new Z(v), _ && _.add(this.emitter)
        }
        beginUpdate(g) {
            this._counter++
        }
        handlePossibleChange(g) {}
        handleChange(g, _) {
            this._hasChanged = !0
        }
        endUpdate(g) {
            this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())))
        }
    }

    function wt(b, g) {
        return new bt(b, g).emitter.event
    }
    e.fromObservable = wt;

    function Ct(b) {
        return (g, _, v) => {
            let A = 0,
                O = !1;
            const T = {
                beginUpdate() {
                    A++
                },
                endUpdate() {
                    A--, A === 0 && (b.reportChanges(), O && (O = !1, g.call(_)))
                },
                handlePossibleChange() {},
                handleChange() {
                    O = !0
                }
            };
            b.addObserver(T), b.reportChanges();
            const z = {
                dispose() {
                    b.removeObserver(T)
                }
            };
            return v instanceof be ? v.add(z) : Array.isArray(v) && v.push(z), z
        }
    }
    e.fromObservableLight = Ct
})(Qt || (Qt = {}));
var Nr = class kn {
    constructor(t) {
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${kn._idPool++}`, kn.all.add(this)
    }
    start(t) {
        this._stopWatch = new Hs, this.listenerCount = t
    }
    stop() {
        if (this._stopWatch) {
            const t = this._stopWatch.elapsed();
            this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0
        }
    }
};
Nr.all = new Set, Nr._idPool = 0;
var js = Nr,
    m1 = -1,
    g1 = class is {
        constructor(t, r, n = (is._idPool++).toString(16).padStart(3, "0")) {
            this._errorHandler = t, this.threshold = r, this.name = n, this._warnCountdown = 0
        }
        dispose() {
            this._stacks?.clear()
        }
        check(t, r) {
            const n = this.threshold;
            if (n <= 0 || r < n) return;
            this._stacks || (this._stacks = new Map);
            const s = this._stacks.get(t.value) || 0;
            if (this._stacks.set(t.value, s + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
                this._warnCountdown = n * .5;
                const [o, a] = this.getMostFrequentStack(), l = `[${this.name}] potential listener LEAK detected, having ${r} listeners already. MOST frequent listener (${a}):`;
                console.warn(l), console.warn(o);
                const u = new qs(l, o);
                this._errorHandler(u)
            }
            return () => {
                const o = this._stacks.get(t.value) || 0;
                this._stacks.set(t.value, o - 1)
            }
        }
        getMostFrequentStack() {
            if (!this._stacks) return;
            let t, r = 0;
            for (const [n, s] of this._stacks)(!t || r < s) && (t = [n, s], r = s);
            return t
        }
    };
g1._idPool = 1;
var Gs = g1,
    Pr = class ss {
        constructor(t) {
            this.value = t
        }
        static create() {
            const t = new Error;
            return new ss(t.stack ?? "")
        }
        print() {
            console.warn(this.value.split(`
`).slice(2).join(`
`))
        }
    },
    qs = class extends Error {
        constructor(e, t) {
            super(e), this.name = "ListenerLeakError", this.stack = t
        }
    },
    Zs = class extends Error {
        constructor(e, t) {
            super(e), this.name = "ListenerRefusalError", this.stack = t
        }
    },
    Ys = 0,
    Xt = class {
        constructor(e) {
            this.value = e, this.id = Ys++
        }
    },
    Qs = 2,
    Xs = (e, t) => {
        if (e instanceof Xt) t(e);
        else
            for (let r = 0; r < e.length; r++) {
                const n = e[r];
                n && t(n)
            }
    },
    Z = class {
        constructor(e) {
            this._size = 0, this._options = e, this._leakageMon = m1 > 0 || this._options?.leakWarningThreshold ? new Gs(e?.onListenerError ?? De, this._options?.leakWarningThreshold ?? m1) : void 0, this._perfMon = this._options?._profName ? new js(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue
        }
        dispose() {
            if (!this._disposed) {
                if (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
                    if (p1) {
                        const e = this._listeners;
                        queueMicrotask(() => {
                            Xs(e, t => t.stack?.print())
                        })
                    }
                    this._listeners = void 0, this._size = 0
                }
                this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose()
            }
        }
        get event() {
            return this._event ??= (e, t, r) => {
                if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
                    const l = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
                    console.warn(l);
                    const u = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1],
                        c = new Zs(`${l}. HINT: Stack shows most frequent listener (${u[1]}-times)`, u[0]);
                    return (this._options?.onListenerError || De)(c), Le.None
                }
                if (this._disposed) return Le.None;
                t && (e = e.bind(t));
                const n = new Xt(e);
                let s, o;
                this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * .2) && (n.stack = Pr.create(), s = this._leakageMon.check(n.stack, this._size + 1)), p1 && (n.stack = o ?? Pr.create()), this._listeners ? this._listeners instanceof Xt ? (this._deliveryQueue ??= new Js, this._listeners = [this._listeners, n]) : this._listeners.push(n) : (this._options?.onWillAddFirstListener?.(this), this._listeners = n, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
                const a = _e(() => {
                    s?.(), this._removeListener(n)
                });
                return r instanceof be ? r.add(a) : Array.isArray(r) && r.push(a), a
            }, this._event
        }
        _removeListener(e) {
            if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
            if (this._size === 1) {
                this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
                return
            }
            const t = this._listeners,
                r = t.indexOf(e);
            if (r === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
            this._size--, t[r] = void 0;
            const n = this._deliveryQueue.current === this;
            if (this._size * Qs <= t.length) {
                let s = 0;
                for (let o = 0; o < t.length; o++) t[o] ? t[s++] = t[o] : n && s < this._deliveryQueue.end && (this._deliveryQueue.end--, s < this._deliveryQueue.i && this._deliveryQueue.i--);
                t.length = s
            }
        }
        _deliver(e, t) {
            if (!e) return;
            const r = this._options?.onListenerError || De;
            if (!r) {
                e.value(t);
                return
            }
            try {
                e.value(t)
            } catch (n) {
                r(n)
            }
        }
        _deliverQueue(e) {
            const t = e.current._listeners;
            for (; e.i < e.end;) this._deliver(t[e.i++], e.value);
            e.reset()
        }
        fire(e) {
            if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners)
                if (this._listeners instanceof Xt) this._deliver(this._listeners, e);
                else {
                    const t = this._deliveryQueue;
                    t.enqueue(this, e, this._listeners.length), this._deliverQueue(t)
                } this._perfMon?.stop()
        }
        hasListeners() {
            return this._size > 0
        }
    },
    Js = class {
        constructor() {
            this.i = -1, this.end = 0
        }
        enqueue(e, t, r) {
            this.i = 0, this.end = r, this.current = e, this.value = t
        }
        reset() {
            this.i = this.end, this.current = void 0, this.value = void 0
        }
    },
    Mr = class {
        constructor() {
            this.mapWindowIdToZoomLevel = new Map, this._onDidChangeZoomLevel = new Z, this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event, this.mapWindowIdToZoomFactor = new Map, this._onDidChangeFullscreen = new Z, this.onDidChangeFullscreen = this._onDidChangeFullscreen.event, this.mapWindowIdToFullScreen = new Map
        }
        getZoomLevel(t) {
            return this.mapWindowIdToZoomLevel.get(this.getWindowId(t)) ?? 0
        }
        setZoomLevel(t, r) {
            if (this.getZoomLevel(r) === t) return;
            const n = this.getWindowId(r);
            this.mapWindowIdToZoomLevel.set(n, t), this._onDidChangeZoomLevel.fire(n)
        }
        getZoomFactor(t) {
            return this.mapWindowIdToZoomFactor.get(this.getWindowId(t)) ?? 1
        }
        setZoomFactor(t, r) {
            this.mapWindowIdToZoomFactor.set(this.getWindowId(r), t)
        }
        setFullscreen(t, r) {
            if (this.isFullscreen(r) === t) return;
            const n = this.getWindowId(r);
            this.mapWindowIdToFullScreen.set(n, t), this._onDidChangeFullscreen.fire(n)
        }
        isFullscreen(t) {
            return !!this.mapWindowIdToFullScreen.get(this.getWindowId(t))
        }
        getWindowId(t) {
            return t.vscodeWindowId
        }
    };
Mr.INSTANCE = new Mr;
var kt = Mr;

function eo(e, t, r) {
    typeof t == "string" && (t = e.matchMedia(t)), t.addEventListener("change", r)
}

function to(e, t) {
    kt.INSTANCE.setZoomLevel(e, t)
}

function y1(e) {
    return kt.INSTANCE.getZoomLevel(e)
}
var Sl = kt.INSTANCE.onDidChangeZoomLevel;

function ro(e, t) {
    kt.INSTANCE.setZoomFactor(e, t)
}
var Tl = kt.INSTANCE.onDidChangeFullscreen,
    ct = navigator.userAgent,
    Ol = ct.indexOf("Firefox") >= 0,
    Fr = ct.indexOf("AppleWebKit") >= 0,
    no = ct.indexOf("Chrome") >= 0,
    io = !no && ct.indexOf("Safari") >= 0,
    Il = ct.indexOf("Electron/") >= 0,
    kl = ct.indexOf("Android") >= 0,
    Jt = !1;
if (typeof L.matchMedia == "function") {
    const e = L.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"),
        t = L.matchMedia("(display-mode: fullscreen)");
    Jt = e.matches, eo(L, e, ({
        matches: r
    }) => {
        Jt && t.matches || (Jt = r)
    })
}

function so() {
    return Jt
}

function oo() {
    return globalThis._VSCODE_NLS_MESSAGES
}

function v1() {
    return globalThis._VSCODE_NLS_LANGUAGE
}
var ao = v1() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;

function _1(e, t) {
    let r;
    return t.length === 0 ? r = e : r = e.replace(/\{(\d+)\}/g, (n, s) => {
        const o = parseInt(s, 10),
            a = t[o];
        let l = n;
        return typeof a == "string" ? l = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (l = String(a)), l
    }), ao && (r = "\uFF3B" + r.replace(/[aouei]/g, "$&$&") + "\uFF3D"), r
}

function ut(e, t, ...r) {
    return _1(typeof e == "number" ? lo(e, t) : t, r)
}

function lo(e, t) {
    const r = oo()?.[e];
    if (typeof r != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`)
    }
    return r
}
var dt = "en",
    er = !1,
    tr = !1,
    Rt = !1,
    co = !1,
    b1 = !1,
    Ur = !1,
    uo = !1,
    ho = !1,
    fo = !1,
    po = !1,
    rr = void 0,
    nr = dt,
    w1 = dt,
    mo = void 0,
    xe = void 0,
    Ne = globalThis,
    te = void 0;
typeof Ne.vscode < "u" && typeof Ne.vscode.process < "u" ? te = Ne.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (te = process);
var C1 = typeof te?.versions?.electron == "string",
    go = C1 && te?.type === "renderer";
if (typeof te == "object") {
    er = te.platform === "win32", tr = te.platform === "darwin", Rt = te.platform === "linux", co = Rt && !!te.env.SNAP && !!te.env.SNAP_REVISION, uo = C1, fo = !!te.env.CI || !!te.env.BUILD_ARTIFACTSTAGINGDIRECTORY, rr = dt, nr = dt;
    const e = te.env.VSCODE_NLS_CONFIG;
    if (e) try {
        const t = JSON.parse(e);
        rr = t.userLocale, w1 = t.osLocale, nr = t.resolvedLanguage || dt, mo = t.languagePack?.translationsConfigFile
    } catch {}
    b1 = !0
} else typeof navigator == "object" && !go ? (xe = navigator.userAgent, er = xe.indexOf("Windows") >= 0, tr = xe.indexOf("Macintosh") >= 0, ho = (xe.indexOf("Macintosh") >= 0 || xe.indexOf("iPad") >= 0 || xe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Rt = xe.indexOf("Linux") >= 0, po = xe?.indexOf("Mobi") >= 0, Ur = !0, nr = v1() || dt, rr = navigator.language.toLowerCase(), w1 = rr) : console.error("Unable to resolve platform.");
var Vr = 0;
tr ? Vr = 1 : er ? Vr = 3 : Rt && (Vr = 2);
var ht = er,
    yo = tr,
    vo = Rt,
    ir = b1,
    _o = Ur,
    bo = Ur && typeof Ne.importScripts == "function",
    wo = bo ? Ne.origin : void 0,
    Te = xe,
    Ke = nr,
    A1;
(e => {
    function t() {
        return Ke
    }
    e.value = t;

    function r() {
        return Ke.length === 2 ? Ke === "en" : Ke.length >= 3 ? Ke[0] === "e" && Ke[1] === "n" && Ke[2] === "-" : !1
    }
    e.isDefaultVariant = r;

    function n() {
        return Ke === "en"
    }
    e.isDefault = n
})(A1 || (A1 = {}));
var Co = typeof Ne.postMessage == "function" && !Ne.importScripts,
    Ao = (() => {
        if (Co) {
            const e = [];
            Ne.addEventListener("message", r => {
                if (r.data && r.data.vscodeScheduleAsyncWork)
                    for (let n = 0, s = e.length; n < s; n++) {
                        const o = e[n];
                        if (o.id === r.data.vscodeScheduleAsyncWork) {
                            e.splice(n, 1), o.callback();
                            return
                        }
                    }
            });
            let t = 0;
            return r => {
                const n = ++t;
                e.push({
                    id: n,
                    callback: r
                }), Ne.postMessage({
                    vscodeScheduleAsyncWork: n
                }, "*")
            }
        }
        return e => setTimeout(e)
    })(),
    Eo = !!(Te && Te.indexOf("Chrome") >= 0),
    Rl = !!(Te && Te.indexOf("Firefox") >= 0),
    Dl = !!(!Eo && Te && Te.indexOf("Safari") >= 0),
    Ll = !!(Te && Te.indexOf("Edg/") >= 0),
    xl = !!(Te && Te.indexOf("Android") >= 0),
    Nl = te?.arch,
    Pl = te?.platform,
    Ml = te?.versions?.node,
    Fl = {
        clipboard: {
            writeText: ir || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
            readText: ir || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
        },
        keyboard: ir || so() ? 0 : navigator.keyboard || io ? 1 : 2,
        touch: "ontouchstart" in L || navigator.maxTouchPoints > 0,
        pointerEvents: L.PointerEvent && ("ontouchstart" in L || navigator.maxTouchPoints > 0)
    },
    Br = class {
        constructor() {
            this._keyCodeToStr = [], this._strToKeyCode = Object.create(null)
        }
        define(e, t) {
            this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e
        }
        keyCodeToStr(e) {
            return this._keyCodeToStr[e]
        }
        strToKeyCode(e) {
            return this._strToKeyCode[e.toLowerCase()] || 0
        }
    },
    sr = new Br,
    Kr = new Br,
    $r = new Br,
    So = new Array(230),
    To = {},
    Oo = [],
    Io = Object.create(null),
    ko = Object.create(null),
    E1 = [],
    Wr = [];
for (let e = 0; e <= 193; e++) E1[e] = -1;
for (let e = 0; e <= 132; e++) Wr[e] = -1;
(function() {
    const t = [
            [1, 0, "None", 0, "unknown", 0, "VK_UNKNOWN", "", ""],
            [1, 1, "Hyper", 0, "", 0, "", "", ""],
            [1, 2, "Super", 0, "", 0, "", "", ""],
            [1, 3, "Fn", 0, "", 0, "", "", ""],
            [1, 4, "FnLock", 0, "", 0, "", "", ""],
            [1, 5, "Suspend", 0, "", 0, "", "", ""],
            [1, 6, "Resume", 0, "", 0, "", "", ""],
            [1, 7, "Turbo", 0, "", 0, "", "", ""],
            [1, 8, "Sleep", 0, "", 0, "VK_SLEEP", "", ""],
            [1, 9, "WakeUp", 0, "", 0, "", "", ""],
            [0, 10, "KeyA", 31, "A", 65, "VK_A", "", ""],
            [0, 11, "KeyB", 32, "B", 66, "VK_B", "", ""],
            [0, 12, "KeyC", 33, "C", 67, "VK_C", "", ""],
            [0, 13, "KeyD", 34, "D", 68, "VK_D", "", ""],
            [0, 14, "KeyE", 35, "E", 69, "VK_E", "", ""],
            [0, 15, "KeyF", 36, "F", 70, "VK_F", "", ""],
            [0, 16, "KeyG", 37, "G", 71, "VK_G", "", ""],
            [0, 17, "KeyH", 38, "H", 72, "VK_H", "", ""],
            [0, 18, "KeyI", 39, "I", 73, "VK_I", "", ""],
            [0, 19, "KeyJ", 40, "J", 74, "VK_J", "", ""],
            [0, 20, "KeyK", 41, "K", 75, "VK_K", "", ""],
            [0, 21, "KeyL", 42, "L", 76, "VK_L", "", ""],
            [0, 22, "KeyM", 43, "M", 77, "VK_M", "", ""],
            [0, 23, "KeyN", 44, "N", 78, "VK_N", "", ""],
            [0, 24, "KeyO", 45, "O", 79, "VK_O", "", ""],
            [0, 25, "KeyP", 46, "P", 80, "VK_P", "", ""],
            [0, 26, "KeyQ", 47, "Q", 81, "VK_Q", "", ""],
            [0, 27, "KeyR", 48, "R", 82, "VK_R", "", ""],
            [0, 28, "KeyS", 49, "S", 83, "VK_S", "", ""],
            [0, 29, "KeyT", 50, "T", 84, "VK_T", "", ""],
            [0, 30, "KeyU", 51, "U", 85, "VK_U", "", ""],
            [0, 31, "KeyV", 52, "V", 86, "VK_V", "", ""],
            [0, 32, "KeyW", 53, "W", 87, "VK_W", "", ""],
            [0, 33, "KeyX", 54, "X", 88, "VK_X", "", ""],
            [0, 34, "KeyY", 55, "Y", 89, "VK_Y", "", ""],
            [0, 35, "KeyZ", 56, "Z", 90, "VK_Z", "", ""],
            [0, 36, "Digit1", 22, "1", 49, "VK_1", "", ""],
            [0, 37, "Digit2", 23, "2", 50, "VK_2", "", ""],
            [0, 38, "Digit3", 24, "3", 51, "VK_3", "", ""],
            [0, 39, "Digit4", 25, "4", 52, "VK_4", "", ""],
            [0, 40, "Digit5", 26, "5", 53, "VK_5", "", ""],
            [0, 41, "Digit6", 27, "6", 54, "VK_6", "", ""],
            [0, 42, "Digit7", 28, "7", 55, "VK_7", "", ""],
            [0, 43, "Digit8", 29, "8", 56, "VK_8", "", ""],
            [0, 44, "Digit9", 30, "9", 57, "VK_9", "", ""],
            [0, 45, "Digit0", 21, "0", 48, "VK_0", "", ""],
            [1, 46, "Enter", 3, "Enter", 13, "VK_RETURN", "", ""],
            [1, 47, "Escape", 9, "Escape", 27, "VK_ESCAPE", "", ""],
            [1, 48, "Backspace", 1, "Backspace", 8, "VK_BACK", "", ""],
            [1, 49, "Tab", 2, "Tab", 9, "VK_TAB", "", ""],
            [1, 50, "Space", 10, "Space", 32, "VK_SPACE", "", ""],
            [0, 51, "Minus", 88, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
            [0, 52, "Equal", 86, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
            [0, 53, "BracketLeft", 92, "[", 219, "VK_OEM_4", "[", "OEM_4"],
            [0, 54, "BracketRight", 94, "]", 221, "VK_OEM_6", "]", "OEM_6"],
            [0, 55, "Backslash", 93, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
            [0, 56, "IntlHash", 0, "", 0, "", "", ""],
            [0, 57, "Semicolon", 85, ";", 186, "VK_OEM_1", ";", "OEM_1"],
            [0, 58, "Quote", 95, "'", 222, "VK_OEM_7", "'", "OEM_7"],
            [0, 59, "Backquote", 91, "`", 192, "VK_OEM_3", "`", "OEM_3"],
            [0, 60, "Comma", 87, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
            [0, 61, "Period", 89, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
            [0, 62, "Slash", 90, "/", 191, "VK_OEM_2", "/", "OEM_2"],
            [1, 63, "CapsLock", 8, "CapsLock", 20, "VK_CAPITAL", "", ""],
            [1, 64, "F1", 59, "F1", 112, "VK_F1", "", ""],
            [1, 65, "F2", 60, "F2", 113, "VK_F2", "", ""],
            [1, 66, "F3", 61, "F3", 114, "VK_F3", "", ""],
            [1, 67, "F4", 62, "F4", 115, "VK_F4", "", ""],
            [1, 68, "F5", 63, "F5", 116, "VK_F5", "", ""],
            [1, 69, "F6", 64, "F6", 117, "VK_F6", "", ""],
            [1, 70, "F7", 65, "F7", 118, "VK_F7", "", ""],
            [1, 71, "F8", 66, "F8", 119, "VK_F8", "", ""],
            [1, 72, "F9", 67, "F9", 120, "VK_F9", "", ""],
            [1, 73, "F10", 68, "F10", 121, "VK_F10", "", ""],
            [1, 74, "F11", 69, "F11", 122, "VK_F11", "", ""],
            [1, 75, "F12", 70, "F12", 123, "VK_F12", "", ""],
            [1, 76, "PrintScreen", 0, "", 0, "", "", ""],
            [1, 77, "ScrollLock", 84, "ScrollLock", 145, "VK_SCROLL", "", ""],
            [1, 78, "Pause", 7, "PauseBreak", 19, "VK_PAUSE", "", ""],
            [1, 79, "Insert", 19, "Insert", 45, "VK_INSERT", "", ""],
            [1, 80, "Home", 14, "Home", 36, "VK_HOME", "", ""],
            [1, 81, "PageUp", 11, "PageUp", 33, "VK_PRIOR", "", ""],
            [1, 82, "Delete", 20, "Delete", 46, "VK_DELETE", "", ""],
            [1, 83, "End", 13, "End", 35, "VK_END", "", ""],
            [1, 84, "PageDown", 12, "PageDown", 34, "VK_NEXT", "", ""],
            [1, 85, "ArrowRight", 17, "RightArrow", 39, "VK_RIGHT", "Right", ""],
            [1, 86, "ArrowLeft", 15, "LeftArrow", 37, "VK_LEFT", "Left", ""],
            [1, 87, "ArrowDown", 18, "DownArrow", 40, "VK_DOWN", "Down", ""],
            [1, 88, "ArrowUp", 16, "UpArrow", 38, "VK_UP", "Up", ""],
            [1, 89, "NumLock", 83, "NumLock", 144, "VK_NUMLOCK", "", ""],
            [1, 90, "NumpadDivide", 113, "NumPad_Divide", 111, "VK_DIVIDE", "", ""],
            [1, 91, "NumpadMultiply", 108, "NumPad_Multiply", 106, "VK_MULTIPLY", "", ""],
            [1, 92, "NumpadSubtract", 111, "NumPad_Subtract", 109, "VK_SUBTRACT", "", ""],
            [1, 93, "NumpadAdd", 109, "NumPad_Add", 107, "VK_ADD", "", ""],
            [1, 94, "NumpadEnter", 3, "", 0, "", "", ""],
            [1, 95, "Numpad1", 99, "NumPad1", 97, "VK_NUMPAD1", "", ""],
            [1, 96, "Numpad2", 100, "NumPad2", 98, "VK_NUMPAD2", "", ""],
            [1, 97, "Numpad3", 101, "NumPad3", 99, "VK_NUMPAD3", "", ""],
            [1, 98, "Numpad4", 102, "NumPad4", 100, "VK_NUMPAD4", "", ""],
            [1, 99, "Numpad5", 103, "NumPad5", 101, "VK_NUMPAD5", "", ""],
            [1, 100, "Numpad6", 104, "NumPad6", 102, "VK_NUMPAD6", "", ""],
            [1, 101, "Numpad7", 105, "NumPad7", 103, "VK_NUMPAD7", "", ""],
            [1, 102, "Numpad8", 106, "NumPad8", 104, "VK_NUMPAD8", "", ""],
            [1, 103, "Numpad9", 107, "NumPad9", 105, "VK_NUMPAD9", "", ""],
            [1, 104, "Numpad0", 98, "NumPad0", 96, "VK_NUMPAD0", "", ""],
            [1, 105, "NumpadDecimal", 112, "NumPad_Decimal", 110, "VK_DECIMAL", "", ""],
            [0, 106, "IntlBackslash", 97, "OEM_102", 226, "VK_OEM_102", "", ""],
            [1, 107, "ContextMenu", 58, "ContextMenu", 93, "", "", ""],
            [1, 108, "Power", 0, "", 0, "", "", ""],
            [1, 109, "NumpadEqual", 0, "", 0, "", "", ""],
            [1, 110, "F13", 71, "F13", 124, "VK_F13", "", ""],
            [1, 111, "F14", 72, "F14", 125, "VK_F14", "", ""],
            [1, 112, "F15", 73, "F15", 126, "VK_F15", "", ""],
            [1, 113, "F16", 74, "F16", 127, "VK_F16", "", ""],
            [1, 114, "F17", 75, "F17", 128, "VK_F17", "", ""],
            [1, 115, "F18", 76, "F18", 129, "VK_F18", "", ""],
            [1, 116, "F19", 77, "F19", 130, "VK_F19", "", ""],
            [1, 117, "F20", 78, "F20", 131, "VK_F20", "", ""],
            [1, 118, "F21", 79, "F21", 132, "VK_F21", "", ""],
            [1, 119, "F22", 80, "F22", 133, "VK_F22", "", ""],
            [1, 120, "F23", 81, "F23", 134, "VK_F23", "", ""],
            [1, 121, "F24", 82, "F24", 135, "VK_F24", "", ""],
            [1, 122, "Open", 0, "", 0, "", "", ""],
            [1, 123, "Help", 0, "", 0, "", "", ""],
            [1, 124, "Select", 0, "", 0, "", "", ""],
            [1, 125, "Again", 0, "", 0, "", "", ""],
            [1, 126, "Undo", 0, "", 0, "", "", ""],
            [1, 127, "Cut", 0, "", 0, "", "", ""],
            [1, 128, "Copy", 0, "", 0, "", "", ""],
            [1, 129, "Paste", 0, "", 0, "", "", ""],
            [1, 130, "Find", 0, "", 0, "", "", ""],
            [1, 131, "AudioVolumeMute", 117, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", "", ""],
            [1, 132, "AudioVolumeUp", 118, "AudioVolumeUp", 175, "VK_VOLUME_UP", "", ""],
            [1, 133, "AudioVolumeDown", 119, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", "", ""],
            [1, 134, "NumpadComma", 110, "NumPad_Separator", 108, "VK_SEPARATOR", "", ""],
            [0, 135, "IntlRo", 115, "ABNT_C1", 193, "VK_ABNT_C1", "", ""],
            [1, 136, "KanaMode", 0, "", 0, "", "", ""],
            [0, 137, "IntlYen", 0, "", 0, "", "", ""],
            [1, 138, "Convert", 0, "", 0, "", "", ""],
            [1, 139, "NonConvert", 0, "", 0, "", "", ""],
            [1, 140, "Lang1", 0, "", 0, "", "", ""],
            [1, 141, "Lang2", 0, "", 0, "", "", ""],
            [1, 142, "Lang3", 0, "", 0, "", "", ""],
            [1, 143, "Lang4", 0, "", 0, "", "", ""],
            [1, 144, "Lang5", 0, "", 0, "", "", ""],
            [1, 145, "Abort", 0, "", 0, "", "", ""],
            [1, 146, "Props", 0, "", 0, "", "", ""],
            [1, 147, "NumpadParenLeft", 0, "", 0, "", "", ""],
            [1, 148, "NumpadParenRight", 0, "", 0, "", "", ""],
            [1, 149, "NumpadBackspace", 0, "", 0, "", "", ""],
            [1, 150, "NumpadMemoryStore", 0, "", 0, "", "", ""],
            [1, 151, "NumpadMemoryRecall", 0, "", 0, "", "", ""],
            [1, 152, "NumpadMemoryClear", 0, "", 0, "", "", ""],
            [1, 153, "NumpadMemoryAdd", 0, "", 0, "", "", ""],
            [1, 154, "NumpadMemorySubtract", 0, "", 0, "", "", ""],
            [1, 155, "NumpadClear", 131, "Clear", 12, "VK_CLEAR", "", ""],
            [1, 156, "NumpadClearEntry", 0, "", 0, "", "", ""],
            [1, 0, "", 5, "Ctrl", 17, "VK_CONTROL", "", ""],
            [1, 0, "", 4, "Shift", 16, "VK_SHIFT", "", ""],
            [1, 0, "", 6, "Alt", 18, "VK_MENU", "", ""],
            [1, 0, "", 57, "Meta", 91, "VK_COMMAND", "", ""],
            [1, 157, "ControlLeft", 5, "", 0, "VK_LCONTROL", "", ""],
            [1, 158, "ShiftLeft", 4, "", 0, "VK_LSHIFT", "", ""],
            [1, 159, "AltLeft", 6, "", 0, "VK_LMENU", "", ""],
            [1, 160, "MetaLeft", 57, "", 0, "VK_LWIN", "", ""],
            [1, 161, "ControlRight", 5, "", 0, "VK_RCONTROL", "", ""],
            [1, 162, "ShiftRight", 4, "", 0, "VK_RSHIFT", "", ""],
            [1, 163, "AltRight", 6, "", 0, "VK_RMENU", "", ""],
            [1, 164, "MetaRight", 57, "", 0, "VK_RWIN", "", ""],
            [1, 165, "BrightnessUp", 0, "", 0, "", "", ""],
            [1, 166, "BrightnessDown", 0, "", 0, "", "", ""],
            [1, 167, "MediaPlay", 0, "", 0, "", "", ""],
            [1, 168, "MediaRecord", 0, "", 0, "", "", ""],
            [1, 169, "MediaFastForward", 0, "", 0, "", "", ""],
            [1, 170, "MediaRewind", 0, "", 0, "", "", ""],
            [1, 171, "MediaTrackNext", 124, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", "", ""],
            [1, 172, "MediaTrackPrevious", 125, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", "", ""],
            [1, 173, "MediaStop", 126, "MediaStop", 178, "VK_MEDIA_STOP", "", ""],
            [1, 174, "Eject", 0, "", 0, "", "", ""],
            [1, 175, "MediaPlayPause", 127, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", "", ""],
            [1, 176, "MediaSelect", 128, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", "", ""],
            [1, 177, "LaunchMail", 129, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", "", ""],
            [1, 178, "LaunchApp2", 130, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", "", ""],
            [1, 179, "LaunchApp1", 0, "", 0, "VK_MEDIA_LAUNCH_APP1", "", ""],
            [1, 180, "SelectTask", 0, "", 0, "", "", ""],
            [1, 181, "LaunchScreenSaver", 0, "", 0, "", "", ""],
            [1, 182, "BrowserSearch", 120, "BrowserSearch", 170, "VK_BROWSER_SEARCH", "", ""],
            [1, 183, "BrowserHome", 121, "BrowserHome", 172, "VK_BROWSER_HOME", "", ""],
            [1, 184, "BrowserBack", 122, "BrowserBack", 166, "VK_BROWSER_BACK", "", ""],
            [1, 185, "BrowserForward", 123, "BrowserForward", 167, "VK_BROWSER_FORWARD", "", ""],
            [1, 186, "BrowserStop", 0, "", 0, "VK_BROWSER_STOP", "", ""],
            [1, 187, "BrowserRefresh", 0, "", 0, "VK_BROWSER_REFRESH", "", ""],
            [1, 188, "BrowserFavorites", 0, "", 0, "VK_BROWSER_FAVORITES", "", ""],
            [1, 189, "ZoomToggle", 0, "", 0, "", "", ""],
            [1, 190, "MailReply", 0, "", 0, "", "", ""],
            [1, 191, "MailForward", 0, "", 0, "", "", ""],
            [1, 192, "MailSend", 0, "", 0, "", "", ""],
            [1, 0, "", 114, "KeyInComposition", 229, "", "", ""],
            [1, 0, "", 116, "ABNT_C2", 194, "VK_ABNT_C2", "", ""],
            [1, 0, "", 96, "OEM_8", 223, "VK_OEM_8", "", ""],
            [1, 0, "", 0, "", 0, "VK_KANA", "", ""],
            [1, 0, "", 0, "", 0, "VK_HANGUL", "", ""],
            [1, 0, "", 0, "", 0, "VK_JUNJA", "", ""],
            [1, 0, "", 0, "", 0, "VK_FINAL", "", ""],
            [1, 0, "", 0, "", 0, "VK_HANJA", "", ""],
            [1, 0, "", 0, "", 0, "VK_KANJI", "", ""],
            [1, 0, "", 0, "", 0, "VK_CONVERT", "", ""],
            [1, 0, "", 0, "", 0, "VK_NONCONVERT", "", ""],
            [1, 0, "", 0, "", 0, "VK_ACCEPT", "", ""],
            [1, 0, "", 0, "", 0, "VK_MODECHANGE", "", ""],
            [1, 0, "", 0, "", 0, "VK_SELECT", "", ""],
            [1, 0, "", 0, "", 0, "VK_PRINT", "", ""],
            [1, 0, "", 0, "", 0, "VK_EXECUTE", "", ""],
            [1, 0, "", 0, "", 0, "VK_SNAPSHOT", "", ""],
            [1, 0, "", 0, "", 0, "VK_HELP", "", ""],
            [1, 0, "", 0, "", 0, "VK_APPS", "", ""],
            [1, 0, "", 0, "", 0, "VK_PROCESSKEY", "", ""],
            [1, 0, "", 0, "", 0, "VK_PACKET", "", ""],
            [1, 0, "", 0, "", 0, "VK_DBE_SBCSCHAR", "", ""],
            [1, 0, "", 0, "", 0, "VK_DBE_DBCSCHAR", "", ""],
            [1, 0, "", 0, "", 0, "VK_ATTN", "", ""],
            [1, 0, "", 0, "", 0, "VK_CRSEL", "", ""],
            [1, 0, "", 0, "", 0, "VK_EXSEL", "", ""],
            [1, 0, "", 0, "", 0, "VK_EREOF", "", ""],
            [1, 0, "", 0, "", 0, "VK_PLAY", "", ""],
            [1, 0, "", 0, "", 0, "VK_ZOOM", "", ""],
            [1, 0, "", 0, "", 0, "VK_NONAME", "", ""],
            [1, 0, "", 0, "", 0, "VK_PA1", "", ""],
            [1, 0, "", 0, "", 0, "VK_OEM_CLEAR", "", ""]
        ],
        r = [],
        n = [];
    for (const s of t) {
        const [o, a, l, u, c, f, h, p, m] = s;
        if (n[a] || (n[a] = !0, Oo[a] = l, Io[l] = a, ko[l.toLowerCase()] = a, o && (E1[a] = u, u !== 0 && u !== 3 && u !== 5 && u !== 4 && u !== 6 && u !== 57 && (Wr[u] = a))), !r[u]) {
            if (r[u] = !0, !c) throw new Error(`String representation missing for key code ${u} around scan code ${l}`);
            sr.define(u, c), Kr.define(u, p || c), $r.define(u, m || p || c)
        }
        f && (So[f] = u), h && (To[h] = u)
    }
    Wr[3] = 46
})();
var S1;
(e => {
    function t(l) {
        return sr.keyCodeToStr(l)
    }
    e.toString = t;

    function r(l) {
        return sr.strToKeyCode(l)
    }
    e.fromString = r;

    function n(l) {
        return Kr.keyCodeToStr(l)
    }
    e.toUserSettingsUS = n;

    function s(l) {
        return $r.keyCodeToStr(l)
    }
    e.toUserSettingsGeneral = s;

    function o(l) {
        return Kr.strToKeyCode(l) || $r.strToKeyCode(l)
    }
    e.fromUserSettings = o;

    function a(l) {
        if (l >= 98 && l <= 113) return null;
        switch (l) {
            case 16:
                return "Up";
            case 18:
                return "Down";
            case 15:
                return "Left";
            case 17:
                return "Right"
        }
        return sr.keyCodeToStr(l)
    }
    e.toElectronAccelerator = a
})(S1 || (S1 = {}));
var Ul = 2091,
    Vl = 2096,
    T1 = Object.freeze(function(e, t) {
        const r = setTimeout(e.bind(t), 0);
        return {
            dispose() {
                clearTimeout(r)
            }
        }
    }),
    O1;
(e => {
    function t(r) {
        return r === e.None || r === e.Cancelled || r instanceof Ro ? !0 : !r || typeof r != "object" ? !1 : typeof r.isCancellationRequested == "boolean" && typeof r.onCancellationRequested == "function"
    }
    e.isCancellationToken = t, e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: Qt.None
    }), e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: T1
    })
})(O1 || (O1 = {}));
var Ro = class {
        constructor() {
            this._isCancelled = !1, this._emitter = null
        }
        cancel() {
            this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()))
        }
        get isCancellationRequested() {
            return this._isCancelled
        }
        get onCancellationRequested() {
            return this._isCancelled ? T1 : (this._emitter || (this._emitter = new Z), this._emitter.event)
        }
        dispose() {
            this._emitter && (this._emitter.dispose(), this._emitter = null)
        }
    },
    Ge, Hr = globalThis.vscode;
if (typeof Hr < "u" && typeof Hr.process < "u") {
    const e = Hr.process;
    Ge = {
        get platform() {
            return e.platform
        },
        get arch() {
            return e.arch
        },
        get env() {
            return e.env
        },
        cwd() {
            return e.cwd()
        }
    }
} else typeof process < "u" && typeof process?.versions?.node == "string" ? Ge = {
    get platform() {
        return process.platform
    },
    get arch() {
        return process.arch
    },
    get env() {
        return process.env
    },
    cwd() {
        return process.env.VSCODE_CWD || process.cwd()
    }
} : Ge = {
    get platform() {
        return ht ? "win32" : yo ? "darwin" : "linux"
    },
    get arch() {},
    get env() {
        return {}
    },
    cwd() {
        return "/"
    }
};
var or = Ge.cwd,
    zr = Ge.env,
    Do = Ge.platform,
    Bl = Ge.arch,
    Lo = 65,
    xo = 97,
    No = 90,
    Po = 122,
    qe = 46,
    X = 47,
    ae = 92,
    Pe = 58,
    Mo = 63,
    I1 = class extends Error {
        constructor(e, t, r) {
            let n;
            typeof t == "string" && t.indexOf("not ") === 0 ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be";
            const s = e.indexOf(".") !== -1 ? "property" : "argument";
            let o = `The "${e}" ${s} ${n} of type ${t}`;
            o += `. Received type ${typeof r}`, super(o), this.code = "ERR_INVALID_ARG_TYPE"
        }
    };

function Fo(e, t) {
    if (e === null || typeof e != "object") throw new I1(t, "Object", e)
}

function W(e, t) {
    if (typeof e != "string") throw new I1(t, "string", e)
}
var le = Do === "win32";

function R(e) {
    return e === X || e === ae
}

function jr(e) {
    return e === X
}

function Me(e) {
    return e >= Lo && e <= No || e >= xo && e <= Po
}

function ar(e, t, r, n) {
    let s = "",
        o = 0,
        a = -1,
        l = 0,
        u = 0;
    for (let c = 0; c <= e.length; ++c) {
        if (c < e.length) u = e.charCodeAt(c);
        else {
            if (n(u)) break;
            u = X
        }
        if (n(u)) {
            if (!(a === c - 1 || l === 1))
                if (l === 2) {
                    if (s.length < 2 || o !== 2 || s.charCodeAt(s.length - 1) !== qe || s.charCodeAt(s.length - 2) !== qe) {
                        if (s.length > 2) {
                            const f = s.lastIndexOf(r);
                            f === -1 ? (s = "", o = 0) : (s = s.slice(0, f), o = s.length - 1 - s.lastIndexOf(r)), a = c, l = 0;
                            continue
                        } else if (s.length !== 0) {
                            s = "", o = 0, a = c, l = 0;
                            continue
                        }
                    }
                    t && (s += s.length > 0 ? `${r}..` : "..", o = 2)
                } else s.length > 0 ? s += `${r}${e.slice(a+1,c)}` : s = e.slice(a + 1, c), o = c - a - 1;
            a = c, l = 0
        } else u === qe && l !== -1 ? ++l : l = -1
    }
    return s
}

function Uo(e) {
    return e ? `${e[0]==="."?"":"."}${e}` : ""
}

function k1(e, t) {
    Fo(t, "pathObject");
    const r = t.dir || t.root,
        n = t.base || `${t.name||""}${Uo(t.ext)}`;
    return r ? r === t.root ? `${r}${n}` : `${r}${e}${n}` : n
}
var j = {
        resolve(...e) {
            let t = "",
                r = "",
                n = !1;
            for (let s = e.length - 1; s >= -1; s--) {
                let o;
                if (s >= 0) {
                    if (o = e[s], W(o, `paths[${s}]`), o.length === 0) continue
                } else t.length === 0 ? o = or() : (o = zr[`=${t}`] || or(), (o === void 0 || o.slice(0, 2).toLowerCase() !== t.toLowerCase() && o.charCodeAt(2) === ae) && (o = `${t}\\`));
                const a = o.length;
                let l = 0,
                    u = "",
                    c = !1;
                const f = o.charCodeAt(0);
                if (a === 1) R(f) && (l = 1, c = !0);
                else if (R(f))
                    if (c = !0, R(o.charCodeAt(1))) {
                        let h = 2,
                            p = h;
                        for (; h < a && !R(o.charCodeAt(h));) h++;
                        if (h < a && h !== p) {
                            const m = o.slice(p, h);
                            for (p = h; h < a && R(o.charCodeAt(h));) h++;
                            if (h < a && h !== p) {
                                for (p = h; h < a && !R(o.charCodeAt(h));) h++;
                                (h === a || h !== p) && (u = `\\\\${m}\\${o.slice(p,h)}`, l = h)
                            }
                        }
                    } else l = 1;
                else Me(f) && o.charCodeAt(1) === Pe && (u = o.slice(0, 2), l = 2, a > 2 && R(o.charCodeAt(2)) && (c = !0, l = 3));
                if (u.length > 0)
                    if (t.length > 0) {
                        if (u.toLowerCase() !== t.toLowerCase()) continue
                    } else t = u;
                if (n) {
                    if (t.length > 0) break
                } else if (r = `${o.slice(l)}\\${r}`, n = c, c && t.length > 0) break
            }
            return r = ar(r, !n, "\\", R), n ? `${t}\\${r}` : `${t}${r}` || "."
        },
        normalize(e) {
            W(e, "path");
            const t = e.length;
            if (t === 0) return ".";
            let r = 0,
                n, s = !1;
            const o = e.charCodeAt(0);
            if (t === 1) return jr(o) ? "\\" : e;
            if (R(o))
                if (s = !0, R(e.charCodeAt(1))) {
                    let l = 2,
                        u = l;
                    for (; l < t && !R(e.charCodeAt(l));) l++;
                    if (l < t && l !== u) {
                        const c = e.slice(u, l);
                        for (u = l; l < t && R(e.charCodeAt(l));) l++;
                        if (l < t && l !== u) {
                            for (u = l; l < t && !R(e.charCodeAt(l));) l++;
                            if (l === t) return `\\\\${c}\\${e.slice(u)}\\`;
                            l !== u && (n = `\\\\${c}\\${e.slice(u,l)}`, r = l)
                        }
                    }
                } else r = 1;
            else Me(o) && e.charCodeAt(1) === Pe && (n = e.slice(0, 2), r = 2, t > 2 && R(e.charCodeAt(2)) && (s = !0, r = 3));
            let a = r < t ? ar(e.slice(r), !s, "\\", R) : "";
            if (a.length === 0 && !s && (a = "."), a.length > 0 && R(e.charCodeAt(t - 1)) && (a += "\\"), !s && n === void 0 && e.includes(":")) {
                if (a.length >= 2 && Me(a.charCodeAt(0)) && a.charCodeAt(1) === Pe) return `.\\${a}`;
                let l = e.indexOf(":");
                do
                    if (l === t - 1 || R(e.charCodeAt(l + 1))) return `.\\${a}`; while ((l = e.indexOf(":", l + 1)) !== -1)
            }
            return n === void 0 ? s ? `\\${a}` : a : s ? `${n}\\${a}` : `${n}${a}`
        },
        isAbsolute(e) {
            W(e, "path");
            const t = e.length;
            if (t === 0) return !1;
            const r = e.charCodeAt(0);
            return R(r) || t > 2 && Me(r) && e.charCodeAt(1) === Pe && R(e.charCodeAt(2))
        },
        join(...e) {
            if (e.length === 0) return ".";
            let t, r;
            for (let o = 0; o < e.length; ++o) {
                const a = e[o];
                W(a, "path"), a.length > 0 && (t === void 0 ? t = r = a : t += `\\${a}`)
            }
            if (t === void 0) return ".";
            let n = !0,
                s = 0;
            if (typeof r == "string" && R(r.charCodeAt(0))) {
                ++s;
                const o = r.length;
                o > 1 && R(r.charCodeAt(1)) && (++s, o > 2 && (R(r.charCodeAt(2)) ? ++s : n = !1))
            }
            if (n) {
                for (; s < t.length && R(t.charCodeAt(s));) s++;
                s >= 2 && (t = `\\${t.slice(s)}`)
            }
            return j.normalize(t)
        },
        relative(e, t) {
            if (W(e, "from"), W(t, "to"), e === t) return "";
            const r = j.resolve(e),
                n = j.resolve(t);
            if (r === n || (e = r.toLowerCase(), t = n.toLowerCase(), e === t)) return "";
            if (r.length !== e.length || n.length !== t.length) {
                const S = r.split("\\"),
                    k = n.split("\\");
                S[S.length - 1] === "" && S.pop(), k[k.length - 1] === "" && k.pop();
                const D = S.length,
                    $ = k.length,
                    ue = D < $ ? D : $;
                let V;
                for (V = 0; V < ue && S[V].toLowerCase() === k[V].toLowerCase(); V++);
                return V === 0 ? n : V === ue ? $ > ue ? k.slice(V).join("\\") : D > ue ? "..\\".repeat(D - 1 - V) + ".." : "" : "..\\".repeat(D - V) + k.slice(V).join("\\")
            }
            let s = 0;
            for (; s < e.length && e.charCodeAt(s) === ae;) s++;
            let o = e.length;
            for (; o - 1 > s && e.charCodeAt(o - 1) === ae;) o--;
            const a = o - s;
            let l = 0;
            for (; l < t.length && t.charCodeAt(l) === ae;) l++;
            let u = t.length;
            for (; u - 1 > l && t.charCodeAt(u - 1) === ae;) u--;
            const c = u - l,
                f = a < c ? a : c;
            let h = -1,
                p = 0;
            for (; p < f; p++) {
                const S = e.charCodeAt(s + p);
                if (S !== t.charCodeAt(l + p)) break;
                S === ae && (h = p)
            }
            if (p !== f) {
                if (h === -1) return n
            } else {
                if (c > f) {
                    if (t.charCodeAt(l + p) === ae) return n.slice(l + p + 1);
                    if (p === 2) return n.slice(l + p)
                }
                a > f && (e.charCodeAt(s + p) === ae ? h = p : p === 2 && (h = 3)), h === -1 && (h = 0)
            }
            let m = "";
            for (p = s + h + 1; p <= o; ++p)(p === o || e.charCodeAt(p) === ae) && (m += m.length === 0 ? ".." : "\\..");
            return l += h, m.length > 0 ? `${m}${n.slice(l,u)}` : (n.charCodeAt(l) === ae && ++l, n.slice(l, u))
        },
        toNamespacedPath(e) {
            if (typeof e != "string" || e.length === 0) return e;
            const t = j.resolve(e);
            if (t.length <= 2) return e;
            if (t.charCodeAt(0) === ae) {
                if (t.charCodeAt(1) === ae) {
                    const r = t.charCodeAt(2);
                    if (r !== Mo && r !== qe) return `\\\\?\\UNC\\${t.slice(2)}`
                }
            } else if (Me(t.charCodeAt(0)) && t.charCodeAt(1) === Pe && t.charCodeAt(2) === ae) return `\\\\?\\${t}`;
            return t
        },
        dirname(e) {
            W(e, "path");
            const t = e.length;
            if (t === 0) return ".";
            let r = -1,
                n = 0;
            const s = e.charCodeAt(0);
            if (t === 1) return R(s) ? e : ".";
            if (R(s)) {
                if (r = n = 1, R(e.charCodeAt(1))) {
                    let l = 2,
                        u = l;
                    for (; l < t && !R(e.charCodeAt(l));) l++;
                    if (l < t && l !== u) {
                        for (u = l; l < t && R(e.charCodeAt(l));) l++;
                        if (l < t && l !== u) {
                            for (u = l; l < t && !R(e.charCodeAt(l));) l++;
                            if (l === t) return e;
                            l !== u && (r = n = l + 1)
                        }
                    }
                }
            } else Me(s) && e.charCodeAt(1) === Pe && (r = t > 2 && R(e.charCodeAt(2)) ? 3 : 2, n = r);
            let o = -1,
                a = !0;
            for (let l = t - 1; l >= n; --l)
                if (R(e.charCodeAt(l))) {
                    if (!a) {
                        o = l;
                        break
                    }
                } else a = !1;
            if (o === -1) {
                if (r === -1) return ".";
                o = r
            }
            return e.slice(0, o)
        },
        basename(e, t) {
            t !== void 0 && W(t, "suffix"), W(e, "path");
            let r = 0,
                n = -1,
                s = !0,
                o;
            if (e.length >= 2 && Me(e.charCodeAt(0)) && e.charCodeAt(1) === Pe && (r = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e) return "";
                let a = t.length - 1,
                    l = -1;
                for (o = e.length - 1; o >= r; --o) {
                    const u = e.charCodeAt(o);
                    if (R(u)) {
                        if (!s) {
                            r = o + 1;
                            break
                        }
                    } else l === -1 && (s = !1, l = o + 1), a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (n = o) : (a = -1, n = l))
                }
                return r === n ? n = l : n === -1 && (n = e.length), e.slice(r, n)
            }
            for (o = e.length - 1; o >= r; --o)
                if (R(e.charCodeAt(o))) {
                    if (!s) {
                        r = o + 1;
                        break
                    }
                } else n === -1 && (s = !1, n = o + 1);
            return n === -1 ? "" : e.slice(r, n)
        },
        extname(e) {
            W(e, "path");
            let t = 0,
                r = -1,
                n = 0,
                s = -1,
                o = !0,
                a = 0;
            e.length >= 2 && e.charCodeAt(1) === Pe && Me(e.charCodeAt(0)) && (t = n = 2);
            for (let l = e.length - 1; l >= t; --l) {
                const u = e.charCodeAt(l);
                if (R(u)) {
                    if (!o) {
                        n = l + 1;
                        break
                    }
                    continue
                }
                s === -1 && (o = !1, s = l + 1), u === qe ? r === -1 ? r = l : a !== 1 && (a = 1) : r !== -1 && (a = -1)
            }
            return r === -1 || s === -1 || a === 0 || a === 1 && r === s - 1 && r === n + 1 ? "" : e.slice(r, s)
        },
        format: k1.bind(null, "\\"),
        parse(e) {
            W(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0) return t;
            const r = e.length;
            let n = 0,
                s = e.charCodeAt(0);
            if (r === 1) return R(s) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
            if (R(s)) {
                if (n = 1, R(e.charCodeAt(1))) {
                    let h = 2,
                        p = h;
                    for (; h < r && !R(e.charCodeAt(h));) h++;
                    if (h < r && h !== p) {
                        for (p = h; h < r && R(e.charCodeAt(h));) h++;
                        if (h < r && h !== p) {
                            for (p = h; h < r && !R(e.charCodeAt(h));) h++;
                            h === r ? n = h : h !== p && (n = h + 1)
                        }
                    }
                }
            } else if (Me(s) && e.charCodeAt(1) === Pe) {
                if (r <= 2) return t.root = t.dir = e, t;
                if (n = 2, R(e.charCodeAt(2))) {
                    if (r === 3) return t.root = t.dir = e, t;
                    n = 3
                }
            }
            n > 0 && (t.root = e.slice(0, n));
            let o = -1,
                a = n,
                l = -1,
                u = !0,
                c = e.length - 1,
                f = 0;
            for (; c >= n; --c) {
                if (s = e.charCodeAt(c), R(s)) {
                    if (!u) {
                        a = c + 1;
                        break
                    }
                    continue
                }
                l === -1 && (u = !1, l = c + 1), s === qe ? o === -1 ? o = c : f !== 1 && (f = 1) : o !== -1 && (f = -1)
            }
            return l !== -1 && (o === -1 || f === 0 || f === 1 && o === l - 1 && o === a + 1 ? t.base = t.name = e.slice(a, l) : (t.name = e.slice(a, o), t.base = e.slice(a, l), t.ext = e.slice(o, l))), a > 0 && a !== n ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null
    },
    Vo = (() => {
        if (le) {
            const e = /\\/g;
            return () => {
                const t = or().replace(e, "/");
                return t.slice(t.indexOf("/"))
            }
        }
        return () => or()
    })(),
    F = {
        resolve(...e) {
            let t = "",
                r = !1;
            for (let n = e.length - 1; n >= 0 && !r; n--) {
                const s = e[n];
                W(s, `paths[${n}]`), s.length !== 0 && (t = `${s}/${t}`, r = s.charCodeAt(0) === X)
            }
            if (!r) {
                const n = Vo();
                t = `${n}/${t}`, r = n.charCodeAt(0) === X
            }
            return t = ar(t, !r, "/", jr), r ? `/${t}` : t.length > 0 ? t : "."
        },
        normalize(e) {
            if (W(e, "path"), e.length === 0) return ".";
            const t = e.charCodeAt(0) === X,
                r = e.charCodeAt(e.length - 1) === X;
            return e = ar(e, !t, "/", jr), e.length === 0 ? t ? "/" : r ? "./" : "." : (r && (e += "/"), t ? `/${e}` : e)
        },
        isAbsolute(e) {
            return W(e, "path"), e.length > 0 && e.charCodeAt(0) === X
        },
        join(...e) {
            if (e.length === 0) return ".";
            const t = [];
            for (let r = 0; r < e.length; ++r) {
                const n = e[r];
                W(n, "path"), n.length > 0 && t.push(n)
            }
            return t.length === 0 ? "." : F.normalize(t.join("/"))
        },
        relative(e, t) {
            if (W(e, "from"), W(t, "to"), e === t || (e = F.resolve(e), t = F.resolve(t), e === t)) return "";
            const r = 1,
                n = e.length,
                s = n - r,
                o = 1,
                a = t.length - o,
                l = s < a ? s : a;
            let u = -1,
                c = 0;
            for (; c < l; c++) {
                const h = e.charCodeAt(r + c);
                if (h !== t.charCodeAt(o + c)) break;
                h === X && (u = c)
            }
            if (c === l)
                if (a > l) {
                    if (t.charCodeAt(o + c) === X) return t.slice(o + c + 1);
                    if (c === 0) return t.slice(o + c)
                } else s > l && (e.charCodeAt(r + c) === X ? u = c : c === 0 && (u = 0));
            let f = "";
            for (c = r + u + 1; c <= n; ++c)(c === n || e.charCodeAt(c) === X) && (f += f.length === 0 ? ".." : "/..");
            return `${f}${t.slice(o+u)}`
        },
        toNamespacedPath(e) {
            return e
        },
        dirname(e) {
            if (W(e, "path"), e.length === 0) return ".";
            const t = e.charCodeAt(0) === X;
            let r = -1,
                n = !0;
            for (let s = e.length - 1; s >= 1; --s)
                if (e.charCodeAt(s) === X) {
                    if (!n) {
                        r = s;
                        break
                    }
                } else n = !1;
            return r === -1 ? t ? "/" : "." : t && r === 1 ? "//" : e.slice(0, r)
        },
        basename(e, t) {
            t !== void 0 && W(t, "suffix"), W(e, "path");
            let r = 0,
                n = -1,
                s = !0,
                o;
            if (t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e) return "";
                let a = t.length - 1,
                    l = -1;
                for (o = e.length - 1; o >= 0; --o) {
                    const u = e.charCodeAt(o);
                    if (u === X) {
                        if (!s) {
                            r = o + 1;
                            break
                        }
                    } else l === -1 && (s = !1, l = o + 1), a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (n = o) : (a = -1, n = l))
                }
                return r === n ? n = l : n === -1 && (n = e.length), e.slice(r, n)
            }
            for (o = e.length - 1; o >= 0; --o)
                if (e.charCodeAt(o) === X) {
                    if (!s) {
                        r = o + 1;
                        break
                    }
                } else n === -1 && (s = !1, n = o + 1);
            return n === -1 ? "" : e.slice(r, n)
        },
        extname(e) {
            W(e, "path");
            let t = -1,
                r = 0,
                n = -1,
                s = !0,
                o = 0;
            for (let a = e.length - 1; a >= 0; --a) {
                const l = e[a];
                if (l === "/") {
                    if (!s) {
                        r = a + 1;
                        break
                    }
                    continue
                }
                n === -1 && (s = !1, n = a + 1), l === "." ? t === -1 ? t = a : o !== 1 && (o = 1) : t !== -1 && (o = -1)
            }
            return t === -1 || n === -1 || o === 0 || o === 1 && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
        },
        format: k1.bind(null, "/"),
        parse(e) {
            W(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0) return t;
            const r = e.charCodeAt(0) === X;
            let n;
            r ? (t.root = "/", n = 1) : n = 0;
            let s = -1,
                o = 0,
                a = -1,
                l = !0,
                u = e.length - 1,
                c = 0;
            for (; u >= n; --u) {
                const f = e.charCodeAt(u);
                if (f === X) {
                    if (!l) {
                        o = u + 1;
                        break
                    }
                    continue
                }
                a === -1 && (l = !1, a = u + 1), f === qe ? s === -1 ? s = u : c !== 1 && (c = 1) : s !== -1 && (c = -1)
            }
            if (a !== -1) {
                const f = o === 0 && r ? 1 : o;
                s === -1 || c === 0 || c === 1 && s === a - 1 && s === o + 1 ? t.base = t.name = e.slice(f, a) : (t.name = e.slice(f, s), t.base = e.slice(f, a), t.ext = e.slice(s, a))
            }
            return o > 0 ? t.dir = e.slice(0, o - 1) : r && (t.dir = "/"), t
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
F.win32 = j.win32 = j, F.posix = j.posix = F;
var Bo = le ? j.normalize : F.normalize,
    Kl = le ? j.isAbsolute : F.isAbsolute,
    Ko = le ? j.join : F.join,
    $o = le ? j.resolve : F.resolve,
    Wo = le ? j.relative : F.relative,
    Ho = le ? j.dirname : F.dirname,
    $l = le ? j.basename : F.basename,
    Wl = le ? j.extname : F.extname,
    Hl = le ? j.format : F.format,
    zl = le ? j.parse : F.parse,
    jl = le ? j.toNamespacedPath : F.toNamespacedPath,
    lr = le ? j.sep : F.sep,
    Gl = le ? j.delimiter : F.delimiter;

function zo(e) {
    return e
}
var jo = class {
        constructor(e, t) {
            this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = zo) : (this._fn = t, this._computeKey = e.getCacheKey)
        }
        get(e) {
            const t = this._computeKey(e);
            return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache
        }
    },
    Gr = class {
        constructor(e) {
            this.executor = e, this._didRun = !1
        }
        get hasValue() {
            return this._didRun
        }
        get value() {
            if (!this._didRun) try {
                this._value = this.executor()
            } catch (e) {
                this._error = e
            } finally {
                this._didRun = !0
            }
            if (this._error) throw this._error;
            return this._value
        }
        get rawValue() {
            return this._value
        }
    };

function Go(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
}

function qo(e, t, r = 0, n = e.length, s = 0, o = t.length) {
    for (; r < n && s < o; r++, s++) {
        const u = e.charCodeAt(r),
            c = t.charCodeAt(s);
        if (u < c) return -1;
        if (u > c) return 1
    }
    const a = n - r,
        l = o - s;
    return a < l ? -1 : a > l ? 1 : 0
}

function R1(e, t, r = 0, n = e.length, s = 0, o = t.length) {
    for (; r < n && s < o; r++, s++) {
        let u = e.charCodeAt(r),
            c = t.charCodeAt(s);
        if (u === c) continue;
        if (u >= 128 || c >= 128) return qo(e.toLowerCase(), t.toLowerCase(), r, n, s, o);
        D1(u) && (u -= 32), D1(c) && (c -= 32);
        const f = u - c;
        if (f !== 0) return f
    }
    const a = n - r,
        l = o - s;
    return a < l ? -1 : a > l ? 1 : 0
}

function D1(e) {
    return e >= 97 && e <= 122
}

function Zo(e, t) {
    return e.length === t.length && R1(e, t) === 0
}

function Yo(e) {
    return 55296 <= e && e <= 56319
}

function L1(e) {
    return 56320 <= e && e <= 57343
}

function Qo(e, t) {
    return (e - 55296 << 10) + (t - 56320) + 65536
}
var Xo = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/,
    Jo = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/,
    ea = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/,
    ql = new RegExp("(?:" + [Xo.source, Jo.source, ea.source].join("|") + ")", "g"),
    Zl = "\uFEFF",
    ta = class Vt {
        static getInstance() {
            return Vt._INSTANCE || (Vt._INSTANCE = new Vt), Vt._INSTANCE
        }
        constructor() {
            this._data = ra()
        }
        getGraphemeBreakType(t) {
            if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
            if (t < 127) return 0;
            const r = this._data,
                n = r.length / 3;
            let s = 1;
            for (; s <= n;)
                if (t < r[3 * s]) s = 2 * s;
                else if (t > r[3 * s + 1]) s = 2 * s + 1;
            else return r[3 * s + 2];
            return 0
        }
    };
ta._INSTANCE = null;

function ra() {
    return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]")
}
var ft = class Rn {
    constructor(t) {
        this.confusableDictionary = t
    }
    static getInstance(t) {
        return Rn.cache.get(Array.from(t))
    }
    static getLocales() {
        return Rn._locales.value
    }
    isAmbiguous(t) {
        return this.confusableDictionary.has(t)
    }
    containsAmbiguousCharacter(t) {
        for (let r = 0; r < t.length; r++) {
            const n = t.codePointAt(r);
            if (typeof n == "number" && this.isAmbiguous(n)) return !0
        }
        return !1
    }
    getPrimaryConfusable(t) {
        return this.confusableDictionary.get(t)
    }
    getConfusableCodePoints() {
        return new Set(this.confusableDictionary.keys())
    }
};
ft.ambiguousCharacterData = new Gr(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), ft.cache = new jo({
    getCacheKey: JSON.stringify
}, e => {
    function t(c) {
        const f = new Map;
        for (let h = 0; h < c.length; h += 2) f.set(c[h], c[h + 1]);
        return f
    }

    function r(c, f) {
        const h = new Map(c);
        for (const [p, m] of f) h.set(p, m);
        return h
    }

    function n(c, f) {
        if (!c) return f;
        const h = new Map;
        for (const [p, m] of c) f.has(p) && h.set(p, m);
        return h
    }
    const s = ft.ambiguousCharacterData.value;
    let o = e.filter(c => !c.startsWith("_") && c in s);
    o.length === 0 && (o = ["_default"]);
    let a;
    for (const c of o) {
        const f = t(s[c]);
        a = n(a, f)
    }
    const l = t(s._common),
        u = r(l, a);
    return new ft(u)
}), ft._locales = new Gr(() => Object.keys(ft.ambiguousCharacterData.value).filter(e => !e.startsWith("_")));
var na = class Bt {
    static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}')
    }
    static getData() {
        return this._data || (this._data = new Set([...Object.values(Bt.getRawData())].flat())), this._data
    }
    static isInvisibleCharacter(t) {
        return Bt.getData().has(t)
    }
    static containsInvisibleCharacter(t) {
        for (let r = 0; r < t.length; r++) {
            const n = t.codePointAt(r);
            if (typeof n == "number" && (Bt.isInvisibleCharacter(n) || n === 32)) return !0
        }
        return !1
    }
    static get codePoints() {
        return Bt.getData()
    }
};
na._data = void 0;

function $e(e) {
    return e === 47 || e === 92
}

function x1(e) {
    return e.replace(/[\\/]/g, F.sep)
}

function ia(e) {
    return e.indexOf("/") === -1 && (e = x1(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e
}

function N1(e, t = F.sep) {
    if (!e) return "";
    const r = e.length,
        n = e.charCodeAt(0);
    if ($e(n)) {
        if ($e(e.charCodeAt(1)) && !$e(e.charCodeAt(2))) {
            let o = 3;
            const a = o;
            for (; o < r && !$e(e.charCodeAt(o)); o++);
            if (a !== o && !$e(e.charCodeAt(o + 1))) {
                for (o += 1; o < r; o++)
                    if ($e(e.charCodeAt(o))) return e.slice(0, o + 1).replace(/[\\/]/g, t)
            }
        }
        return t
    } else if (aa(n) && e.charCodeAt(1) === 58) return $e(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
    let s = e.indexOf("://");
    if (s !== -1) {
        for (s += 3; s < r; s++)
            if ($e(e.charCodeAt(s))) return e.slice(0, s + 1)
    }
    return ""
}

function sa(e, t, r) {
    return r === 0 ? !0 : e.charCodeAt(0) !== t.charCodeAt(0) ? !1 : r === 1 ? !0 : e.charCodeAt(r - 1) !== t.charCodeAt(r - 1) ? !1 : e.startsWith(t)
}

function oa(e, t, r) {
    for (let n = 0; n < r; n++) {
        let s = e.charCodeAt(n),
            o = t.charCodeAt(n);
        if (s !== o) {
            if (s >= 128 || o >= 128) return R1(e, t, n, r, n, r) === 0;
            if (s >= 97 && s <= 122 && (s -= 32), o >= 97 && o <= 122 && (o -= 32), s !== o) return !1
        }
    }
    return !0
}

function P1(e, t, r, n = lr) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    const s = e.length,
        o = t.length;
    if (o > s) return !1;
    const a = n.charCodeAt(0),
        l = t.charCodeAt(o - 1) === a;
    if (o < s && !l && e.charCodeAt(o) !== a) return !1;
    if (r) {
        if (!oa(e, t, o)) return !1
    } else if (!sa(e, t, o)) return !1;
    return o === s || l ? !0 : e.charCodeAt(o) === a
}

function aa(e) {
    return e >= 65 && e <= 90 || e >= 97 && e <= 122
}
var Yl = new Gr(() => new Uint8Array(256)),
    la = /^\w[\w\d+.-]*$/,
    ca = /^\//,
    ua = /^\/\//;

function da(e, t) {
    if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
    if (e.scheme && !la.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (e.path) {
        if (e.authority) {
            if (!ca.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
        } else if (ua.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
    }
}

function ha(e, t) {
    return !e && !t ? "file" : e
}

function fa(e, t) {
    switch (e) {
        case "https":
        case "http":
        case "file":
            t ? t[0] !== we && (t = we + t) : t = we;
            break
    }
    return t
}
var U = "",
    we = "/",
    pa = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
    fe = class yr {
        static isUri(t) {
            return t instanceof yr ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1
        }
        constructor(t, r, n, s, o, a = !1) {
            typeof t == "object" ? (this.scheme = t.scheme || U, this.authority = t.authority || U, this.path = t.path || U, this.query = t.query || U, this.fragment = t.fragment || U) : (this.scheme = ha(t, a), this.authority = r || U, this.path = fa(this.scheme, n || U), this.query = s || U, this.fragment = o || U, da(this, a))
        }
        get fsPath() {
            return cr(this, !1)
        }
        with(t) {
            if (!t) return this;
            let {
                scheme: r,
                authority: n,
                path: s,
                query: o,
                fragment: a
            } = t;
            return r === void 0 ? r = this.scheme : r === null && (r = U), n === void 0 ? n = this.authority : n === null && (n = U), s === void 0 ? s = this.path : s === null && (s = U), o === void 0 ? o = this.query : o === null && (o = U), a === void 0 ? a = this.fragment : a === null && (a = U), r === this.scheme && n === this.authority && s === this.path && o === this.query && a === this.fragment ? this : new pt(r, n, s, o, a)
        }
        static parse(t, r = !1) {
            const n = pa.exec(t);
            return n ? new pt(n[2] || U, ur(n[4] || U), ur(n[5] || U), ur(n[7] || U), ur(n[9] || U), r) : new pt(U, U, U, U, U)
        }
        static file(t) {
            let r = U;
            if (ht && (t = t.replace(/\\/g, we)), t[0] === we && t[1] === we) {
                const n = t.indexOf(we, 2);
                n === -1 ? (r = t.substring(2), t = we) : (r = t.substring(2, n), t = t.substring(n) || we)
            }
            return new pt("file", r, t, U, U)
        }
        static from(t, r) {
            return new pt(t.scheme, t.authority, t.path, t.query, t.fragment, r)
        }
        static joinPath(t, ...r) {
            if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
            let n;
            return ht && t.scheme === "file" ? n = yr.file(j.join(cr(t, !0), ...r)).path : n = F.join(t.path, ...r), t.with({
                path: n
            })
        }
        toString(t = !1) {
            return qr(this, t)
        }
        toJSON() {
            return this
        }
        static revive(t) {
            if (t) {
                if (t instanceof yr) return t;
                {
                    const r = new pt(t);
                    return r._formatted = t.external ?? null, r._fsPath = t._sep === M1 ? t.fsPath ?? null : null, r
                }
            } else return t
        } [Symbol.for("debug.description")]() {
            return `URI(${this.toString()})`
        }
    },
    M1 = ht ? 1 : void 0,
    pt = class extends fe {
        constructor() {
            super(...arguments), this._formatted = null, this._fsPath = null
        }
        get fsPath() {
            return this._fsPath || (this._fsPath = cr(this, !1)), this._fsPath
        }
        toString(e = !1) {
            return e ? qr(this, !0) : (this._formatted || (this._formatted = qr(this, !1)), this._formatted)
        }
        toJSON() {
            const e = {
                $mid: 1
            };
            return this._fsPath && (e.fsPath = this._fsPath, e._sep = M1), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
        }
    },
    F1 = {
        58: "%3A",
        47: "%2F",
        63: "%3F",
        35: "%23",
        91: "%5B",
        93: "%5D",
        64: "%40",
        33: "%21",
        36: "%24",
        38: "%26",
        39: "%27",
        40: "%28",
        41: "%29",
        42: "%2A",
        43: "%2B",
        44: "%2C",
        59: "%3B",
        61: "%3D",
        32: "%20"
    };

function U1(e, t, r) {
    let n, s = -1;
    for (let o = 0; o < e.length; o++) {
        const a = e.charCodeAt(o);
        if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || t && a === 47 || r && a === 91 || r && a === 93 || r && a === 58) s !== -1 && (n += encodeURIComponent(e.substring(s, o)), s = -1), n !== void 0 && (n += e.charAt(o));
        else {
            n === void 0 && (n = e.substr(0, o));
            const l = F1[a];
            l !== void 0 ? (s !== -1 && (n += encodeURIComponent(e.substring(s, o)), s = -1), n += l) : s === -1 && (s = o)
        }
    }
    return s !== -1 && (n += encodeURIComponent(e.substring(s))), n !== void 0 ? n : e
}

function ma(e) {
    let t;
    for (let r = 0; r < e.length; r++) {
        const n = e.charCodeAt(r);
        n === 35 || n === 63 ? (t === void 0 && (t = e.substr(0, r)), t += F1[n]) : t !== void 0 && (t += e[r])
    }
    return t !== void 0 ? t : e
}

function cr(e, t) {
    let r;
    return e.authority && e.path.length > 1 && e.scheme === "file" ? r = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? r = e.path.substr(1) : r = e.path[1].toLowerCase() + e.path.substr(2) : r = e.path, ht && (r = r.replace(/\//g, "\\")), r
}

function qr(e, t) {
    const r = t ? ma : U1;
    let n = "",
        {
            scheme: s,
            authority: o,
            path: a,
            query: l,
            fragment: u
        } = e;
    if (s && (n += s, n += ":"), (o || s === "file") && (n += we, n += we), o) {
        let c = o.indexOf("@");
        if (c !== -1) {
            const f = o.substr(0, c);
            o = o.substr(c + 1), c = f.lastIndexOf(":"), c === -1 ? n += r(f, !1, !1) : (n += r(f.substr(0, c), !1, !1), n += ":", n += r(f.substr(c + 1), !1, !0)), n += "@"
        }
        o = o.toLowerCase(), c = o.lastIndexOf(":"), c === -1 ? n += r(o, !1, !0) : (n += r(o.substr(0, c), !1, !0), n += o.substr(c))
    }
    if (a) {
        if (a.length >= 3 && a.charCodeAt(0) === 47 && a.charCodeAt(2) === 58) {
            const c = a.charCodeAt(1);
            c >= 65 && c <= 90 && (a = `/${String.fromCharCode(c+32)}:${a.substr(3)}`)
        } else if (a.length >= 2 && a.charCodeAt(1) === 58) {
            const c = a.charCodeAt(0);
            c >= 65 && c <= 90 && (a = `${String.fromCharCode(c+32)}:${a.substr(2)}`)
        }
        n += r(a, !0, !1)
    }
    return l && (n += "?", n += r(l, !1, !1)), u && (n += "#", n += t ? u : U1(u, !1, !1)), n
}

function V1(e) {
    try {
        return decodeURIComponent(e)
    } catch {
        return e.length > 3 ? e.substr(0, 3) + V1(e.substr(3)) : e
    }
}
var B1 = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

function ur(e) {
    return e.match(B1) ? e.replace(B1, t => V1(t)) : e
}
var G;
(e => {
    e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.aiEditorBox = "aiEditorBox", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame"
})(G || (G = {}));
var ga = "tkn",
    ya = class {
        constructor() {
            this._hosts = Object.create(null), this._ports = Object.create(null), this._connectionTokens = Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/"
        }
        setPreferredWebSchema(e) {
            this._preferredWebSchema = e
        }
        setDelegate(e) {
            this._delegate = e
        }
        setServerRootPath(e, t) {
            this._serverRootPath = F.join(t ?? "/", va(e))
        }
        getServerRootPath() {
            return this._serverRootPath
        }
        get _remoteResourcesPath() {
            return F.join(this._serverRootPath, G.vscodeRemoteResource)
        }
        set(e, t, r) {
            this._hosts[e] = t, this._ports[e] = r
        }
        setConnectionToken(e, t) {
            this._connectionTokens[e] = t
        }
        getPreferredWebSchema() {
            return this._preferredWebSchema
        }
        rewrite(e) {
            if (this._delegate) try {
                return this._delegate(e)
            } catch (a) {
                return De(a), e
            }
            const t = e.authority;
            let r = this._hosts[t];
            r && r.indexOf(":") !== -1 && r.indexOf("[") === -1 && (r = `[${r}]`);
            const n = this._ports[t],
                s = this._connectionTokens[t];
            let o = `path=${encodeURIComponent(e.path)}`;
            return typeof s == "string" && (o += `&${ga}=${encodeURIComponent(s)}`), fe.from({
                scheme: _o ? this._preferredWebSchema : G.vscodeRemoteResource,
                authority: `${r}:${n}`,
                path: this._remoteResourcesPath,
                query: o
            })
        }
    },
    K1 = new ya;

function va(e) {
    return `${e.quality??"oss"}-${e.commit??"dev"}`
}
var _a = "vscode-app",
    $1 = class vr {
        asBrowserUri(t) {
            const r = this.toUri(t);
            return this.uriToBrowserUri(r)
        }
        uriToBrowserUri(t) {
            return t.scheme === G.vscodeRemote ? K1.rewrite(t) : t.scheme === G.file && (ir || wo === `${G.vscodeFileResource}://${vr.FALLBACK_AUTHORITY}`) ? t.with({
                scheme: G.vscodeFileResource,
                authority: t.authority || vr.FALLBACK_AUTHORITY,
                query: null,
                fragment: null
            }) : t
        }
        asFileUri(t) {
            const r = this.toUri(t);
            return this.uriToFileUri(r)
        }
        uriToFileUri(t) {
            return t.scheme === G.vscodeFileResource ? t.with({
                scheme: G.file,
                authority: t.authority !== vr.FALLBACK_AUTHORITY ? t.authority : null,
                query: null,
                fragment: null
            }) : t
        }
        toUri(t) {
            if (fe.isUri(t)) return t;
            if (globalThis._VSCODE_FILE_ROOT) {
                const r = globalThis._VSCODE_FILE_ROOT;
                if (/^\w[\w\d+.-]*:\/\//.test(r)) return fe.joinPath(fe.parse(r, !0), t);
                const n = Ko(r, t);
                return fe.file(n)
            }
            throw new Error("Cannot determine URI for module id!")
        }
    };
$1.FALLBACK_AUTHORITY = _a;
var ba = $1,
    wa = new ba,
    Ql = Object.freeze({
        "Cache-Control": "no-cache, no-store"
    }),
    Xl = Object.freeze({
        "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling"
    }),
    W1;
(e => {
    const t = new Map([
        ["1", {
            "Cross-Origin-Opener-Policy": "same-origin"
        }],
        ["2", {
            "Cross-Origin-Embedder-Policy": "require-corp"
        }],
        ["3", {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp"
        }]
    ]);
    e.CoopAndCoep = Object.freeze(t.get("3"));
    const r = "vscode-coi";

    function n(o) {
        let a;
        typeof o == "string" ? a = new URL(o).searchParams : o instanceof URL ? a = o.searchParams : fe.isUri(o) && (a = new URL(o.toString(!0)).searchParams);
        const l = a?.get(r);
        if (l) return t.get(l)
    }
    e.getHeadersFromQuery = n;

    function s(o, a, l) {
        if (!globalThis.crossOriginIsolated) return;
        const u = a && l ? "3" : l ? "2" : "1";
        o instanceof URLSearchParams ? o.set(r, u) : o[r] = u
    }
    e.addSearchParam = s
})(W1 || (W1 = {}));

function Fe(e) {
    return cr(e, !0)
}
var Zr = class {
        constructor(e) {
            this._ignorePathCasing = e
        }
        compare(e, t, r = !1) {
            return e === t ? 0 : Go(this.getComparisonKey(e, r), this.getComparisonKey(t, r))
        }
        isEqual(e, t, r = !1) {
            return e === t ? !0 : !e || !t ? !1 : this.getComparisonKey(e, r) === this.getComparisonKey(t, r)
        }
        getComparisonKey(e, t = !1) {
            return e.with({
                path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0,
                fragment: t ? null : void 0
            }).toString()
        }
        ignorePathCasing(e) {
            return this._ignorePathCasing(e)
        }
        isEqualOrParent(e, t, r = !1) {
            if (e.scheme === t.scheme) {
                if (e.scheme === G.file) return P1(Fe(e), Fe(t), this._ignorePathCasing(e)) && e.query === t.query && (r || e.fragment === t.fragment);
                if (H1(e.authority, t.authority)) return P1(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (r || e.fragment === t.fragment)
            }
            return !1
        }
        joinPath(e, ...t) {
            return fe.joinPath(e, ...t)
        }
        basenameOrAuthority(e) {
            return Ca(e) || e.authority
        }
        basename(e) {
            return F.basename(e.path)
        }
        extname(e) {
            return F.extname(e.path)
        }
        dirname(e) {
            if (e.path.length === 0) return e;
            let t;
            return e.scheme === G.file ? t = fe.file(Ho(Fe(e))).path : (t = F.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({
                path: t
            })
        }
        normalizePath(e) {
            if (!e.path.length) return e;
            let t;
            return e.scheme === G.file ? t = fe.file(Bo(Fe(e))).path : t = F.normalize(e.path), e.with({
                path: t
            })
        }
        relativePath(e, t) {
            if (e.scheme !== t.scheme || !H1(e.authority, t.authority)) return;
            if (e.scheme === G.file) {
                const s = Wo(Fe(e), Fe(t));
                return ht ? x1(s) : s
            }
            let r = e.path || "/";
            const n = t.path || "/";
            if (this._ignorePathCasing(e)) {
                let s = 0;
                for (const o = Math.min(r.length, n.length); s < o && !(r.charCodeAt(s) !== n.charCodeAt(s) && r.charAt(s).toLowerCase() !== n.charAt(s).toLowerCase()); s++);
                r = n.substr(0, s) + r.substr(s)
            }
            return F.relative(r, n)
        }
        resolvePath(e, t) {
            if (e.scheme === G.file) {
                const r = fe.file($o(Fe(e), t));
                return e.with({
                    authority: r.authority,
                    path: r.path
                })
            }
            return t = ia(t), e.with({
                path: F.resolve(e.path, t)
            })
        }
        isAbsolutePath(e) {
            return !!e.path && e.path[0] === "/"
        }
        isEqualAuthority(e, t) {
            return e === t || e !== void 0 && t !== void 0 && Zo(e, t)
        }
        hasTrailingPathSeparator(e, t = lr) {
            if (e.scheme === G.file) {
                const r = Fe(e);
                return r.length > N1(r).length && r[r.length - 1] === t
            } else {
                const r = e.path;
                return r.length > 1 && r.charCodeAt(r.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath)
            }
        }
        removeTrailingPathSeparator(e, t = lr) {
            return z1(e, t) ? e.with({
                path: e.path.substr(0, e.path.length - 1)
            }) : e
        }
        addTrailingPathSeparator(e, t = lr) {
            let r = !1;
            if (e.scheme === G.file) {
                const n = Fe(e);
                r = n !== void 0 && n.length === N1(n).length && n[n.length - 1] === t
            } else {
                t = "/";
                const n = e.path;
                r = n.length === 1 && n.charCodeAt(n.length - 1) === 47
            }
            return !r && !z1(e, t) ? e.with({
                path: e.path + "/"
            }) : e
        }
    },
    M = new Zr(() => !1),
    Jl = new Zr(e => e.scheme === G.file ? !vo : !0),
    ec = new Zr(e => !0),
    tc = M.isEqual.bind(M),
    rc = M.isEqualOrParent.bind(M),
    nc = M.getComparisonKey.bind(M),
    ic = M.basenameOrAuthority.bind(M),
    Ca = M.basename.bind(M),
    sc = M.extname.bind(M),
    oc = M.dirname.bind(M),
    ac = M.joinPath.bind(M),
    lc = M.normalizePath.bind(M),
    cc = M.relativePath.bind(M),
    uc = M.resolvePath.bind(M),
    dc = M.isAbsolutePath.bind(M),
    H1 = M.isEqualAuthority.bind(M),
    z1 = M.hasTrailingPathSeparator.bind(M),
    hc = M.removeTrailingPathSeparator.bind(M),
    fc = M.addTrailingPathSeparator.bind(M),
    j1;
(e => {
    e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";

    function t(r) {
        const n = new Map;
        r.path.substring(r.path.indexOf(";") + 1, r.path.lastIndexOf(";")).split(";").forEach(a => {
            const [l, u] = a.split(":");
            l && u && n.set(l, u)
        });
        const o = r.path.substring(0, r.path.indexOf(";"));
        return o && n.set(e.META_DATA_MIME, o), n
    }
    e.parseMetaData = t
})(j1 || (j1 = {}));
var pc = Symbol("MicrotaskDelay"),
    G1 = class {
        constructor(e, t) {
            this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this)
        }
        dispose() {
            this.cancel(), this.runner = null
        }
        cancel() {
            this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1)
        }
        schedule(e = this.timeout) {
            this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e)
        }
        get delay() {
            return this.timeout
        }
        set delay(e) {
            this.timeout = e
        }
        isScheduled() {
            return this.timeoutToken !== -1
        }
        flush() {
            this.isScheduled() && (this.cancel(), this.doRun())
        }
        onTimeout() {
            this.timeoutToken = -1, this.runner && this.doRun()
        }
        doRun() {
            this.runner?.()
        }
    },
    Aa, Yr;
(function() {
    typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Yr = (e, t, r) => {
        Ao(() => {
            if (n) return;
            const s = Date.now() + 15;
            t(Object.freeze({
                didTimeout: !0,
                timeRemaining() {
                    return Math.max(0, s - Date.now())
                }
            }))
        });
        let n = !1;
        return {
            dispose() {
                n || (n = !0)
            }
        }
    } : Yr = (e, t, r) => {
        const n = e.requestIdleCallback(t, typeof r == "number" ? {
            timeout: r
        } : void 0);
        let s = !1;
        return {
            dispose() {
                s || (s = !0, e.cancelIdleCallback(n))
            }
        }
    }, Aa = (e, t) => Yr(globalThis, e, t)
})();
var q1;
(e => {
    async function t(n) {
        let s;
        const o = await Promise.all(n.map(a => a.then(l => l, l => {
            s || (s = l)
        })));
        if (typeof s < "u") throw s;
        return o
    }
    e.settled = t;

    function r(n) {
        return new Promise(async (s, o) => {
            try {
                await n(s, o)
            } catch (a) {
                o(a)
            }
        })
    }
    e.withAsyncBody = r
})(q1 || (q1 = {}));
var Z1 = class ye {
    static fromArray(t) {
        return new ye(r => {
            r.emitMany(t)
        })
    }
    static fromPromise(t) {
        return new ye(async r => {
            r.emitMany(await t)
        })
    }
    static fromPromisesResolveOrder(t) {
        return new ye(async r => {
            await Promise.all(t.map(async n => r.emitOne(await n)))
        })
    }
    static merge(t) {
        return new ye(async r => {
            await Promise.all(t.map(async n => {
                for await (const s of n) r.emitOne(s)
            }))
        })
    }
    constructor(t, r) {
        this._state = 0, this._results = [], this._error = null, this._onReturn = r, this._onStateChanged = new Z, queueMicrotask(async () => {
            const n = {
                emitOne: s => this.emitOne(s),
                emitMany: s => this.emitMany(s),
                reject: s => this.reject(s)
            };
            try {
                await Promise.resolve(t(n)), this.resolve()
            } catch (s) {
                this.reject(s)
            } finally {
                n.emitOne = void 0, n.emitMany = void 0, n.reject = void 0
            }
        })
    } [Symbol.asyncIterator]() {
        let t = 0;
        return {
            next: async () => {
                do {
                    if (this._state === 2) throw this._error;
                    if (t < this._results.length) return {
                        done: !1,
                        value: this._results[t++]
                    };
                    if (this._state === 1) return {
                        done: !0,
                        value: void 0
                    };
                    await Qt.toPromise(this._onStateChanged.event)
                } while (!0)
            },
            return: async () => (this._onReturn?.(), {
                done: !0,
                value: void 0
            })
        }
    }
    static map(t, r) {
        return new ye(async n => {
            for await (const s of t) n.emitOne(r(s))
        })
    }
    map(t) {
        return ye.map(this, t)
    }
    static filter(t, r) {
        return new ye(async n => {
            for await (const s of t) r(s) && n.emitOne(s)
        })
    }
    filter(t) {
        return ye.filter(this, t)
    }
    static coalesce(t) {
        return ye.filter(t, r => !!r)
    }
    coalesce() {
        return ye.coalesce(this)
    }
    static async toPromise(t) {
        const r = [];
        for await (const n of t) r.push(n);
        return r
    }
    toPromise() {
        return ye.toPromise(this)
    }
    emitOne(t) {
        this._state === 0 && (this._results.push(t), this._onStateChanged.fire())
    }
    emitMany(t) {
        this._state === 0 && (this._results = this._results.concat(t), this._onStateChanged.fire())
    }
    resolve() {
        this._state === 0 && (this._state = 1, this._onStateChanged.fire())
    }
    reject(t) {
        this._state === 0 && (this._state = 2, this._error = t, this._onStateChanged.fire())
    }
};
Z1.EMPTY = Z1.fromArray([]);
var {
    entries: Y1,
    setPrototypeOf: Q1,
    isFrozen: Ea,
    getPrototypeOf: Sa,
    getOwnPropertyDescriptor: Ta
} = Object, {
    freeze: ne,
    seal: pe,
    create: X1
} = Object, {
    apply: Qr,
    construct: Xr
} = typeof Reflect < "u" && Reflect;
ne || (ne = function(t) {
    return t
}), pe || (pe = function(t) {
    return t
}), Qr || (Qr = function(t, r, n) {
    return t.apply(r, n)
}), Xr || (Xr = function(t, r) {
    return new t(...r)
});
var dr = ce(Array.prototype.forEach),
    J1 = ce(Array.prototype.pop),
    Dt = ce(Array.prototype.push),
    hr = ce(String.prototype.toLowerCase),
    Jr = ce(String.prototype.toString),
    ei = ce(String.prototype.match),
    Lt = ce(String.prototype.replace),
    Oa = ce(String.prototype.indexOf),
    Ia = ce(String.prototype.trim),
    Ce = ce(Object.prototype.hasOwnProperty),
    ie = ce(RegExp.prototype.test),
    xt = ka(TypeError);

function ce(e) {
    return function(t) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) n[s - 1] = arguments[s];
        return Qr(e, t, n)
    }
}

function ka(e) {
    return function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return Xr(e, r)
    }
}

function x(e, t) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : hr;
    Q1 && Q1(e, null);
    let n = t.length;
    for (; n--;) {
        let s = t[n];
        if (typeof s == "string") {
            const o = r(s);
            o !== s && (Ea(t) || (t[n] = o), s = o)
        }
        e[s] = !0
    }
    return e
}

function Ra(e) {
    for (let t = 0; t < e.length; t++) Ce(e, t) || (e[t] = null);
    return e
}

function Ze(e) {
    const t = X1(null);
    for (const [r, n] of Y1(e)) Ce(e, r) && (Array.isArray(n) ? t[r] = Ra(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Ze(n) : t[r] = n);
    return t
}

function Nt(e, t) {
    for (; e !== null;) {
        const n = Ta(e, t);
        if (n) {
            if (n.get) return ce(n.get);
            if (typeof n.value == "function") return ce(n.value)
        }
        e = Sa(e)
    }

    function r() {
        return null
    }
    return r
}
var ti = ne(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    en = ne(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    tn = ne(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    Da = ne(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    rn = ne(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    La = ne(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    ri = ne(["#text"]),
    ni = ne(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
    nn = ne(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    ii = ne(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    fr = ne(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    xa = pe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    Na = pe(/<%[\w\W]*|[\w\W]*%>/gm),
    Pa = pe(/\${[\w\W]*}/gm),
    Ma = pe(/^data-[\-\w.\u00B7-\uFFFF]/),
    Fa = pe(/^aria-[\-\w]+$/),
    si = pe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    Ua = pe(/^(?:\w+script|data):/i),
    Va = pe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    oi = pe(/^html$/i),
    Ba = pe(/^[a-z][.\w]*(-[.\w]+)+$/i),
    ai = Object.freeze({
        __proto__: null,
        MUSTACHE_EXPR: xa,
        ERB_EXPR: Na,
        TMPLIT_EXPR: Pa,
        DATA_ATTR: Ma,
        ARIA_ATTR: Fa,
        IS_ALLOWED_URI: si,
        IS_SCRIPT_OR_DATA: Ua,
        ATTR_WHITESPACE: Va,
        DOCTYPE_NAME: oi,
        CUSTOM_ELEMENT: Ba
    }),
    Pt = {
        element: 1,
        attribute: 2,
        text: 3,
        cdataSection: 4,
        entityReference: 5,
        entityNode: 6,
        progressingInstruction: 7,
        comment: 8,
        document: 9,
        documentType: 10,
        documentFragment: 11,
        notation: 12
    },
    Ka = function() {
        return typeof window > "u" ? null : window
    },
    $a = function(t, r) {
        if (typeof t != "object" || typeof t.createPolicy != "function") return null;
        let n = null;
        const s = "data-tt-policy-suffix";
        r && r.hasAttribute(s) && (n = r.getAttribute(s));
        const o = "dompurify" + (n ? "#" + n : "");
        try {
            return t.createPolicy(o, {
                createHTML(a) {
                    return a
                },
                createScriptURL(a) {
                    return a
                }
            })
        } catch {
            return console.warn("TrustedTypes policy " + o + " could not be created."), null
        }
    };

function li() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ka();
    const t = E => li(E);
    if (t.version = "3.1.7", t.removed = [], !e || !e.document || e.document.nodeType !== Pt.document) return t.isSupported = !1, t;
    let {
        document: r
    } = e;
    const n = r,
        s = n.currentScript,
        {
            DocumentFragment: o,
            HTMLTemplateElement: a,
            Node: l,
            Element: u,
            NodeFilter: c,
            NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap,
            HTMLFormElement: h,
            DOMParser: p,
            trustedTypes: m
        } = e,
        S = u.prototype,
        k = Nt(S, "cloneNode"),
        D = Nt(S, "remove"),
        $ = Nt(S, "nextSibling"),
        ue = Nt(S, "childNodes"),
        V = Nt(S, "parentNode");
    if (typeof a == "function") {
        const E = r.createElement("template");
        E.content && E.content.ownerDocument && (r = E.content.ownerDocument)
    }
    let H, C = "";
    const {
        implementation: I,
        createNodeIterator: P,
        createDocumentFragment: q,
        getElementsByTagName: de
    } = r, {
        importNode: et
    } = n;
    let he = {};
    t.isSupported = typeof Y1 == "function" && typeof V == "function" && I && I.createHTMLDocument !== void 0;
    const {
        MUSTACHE_EXPR: bt,
        ERB_EXPR: wt,
        TMPLIT_EXPR: Ct,
        DATA_ATTR: b,
        ARIA_ATTR: g,
        IS_SCRIPT_OR_DATA: _,
        ATTR_WHITESPACE: v,
        CUSTOM_ELEMENT: A
    } = ai;
    let {
        IS_ALLOWED_URI: O
    } = ai, T = null;
    const z = x({}, [...ti, ...en, ...tn, ...rn, ...ri]);
    let N = null;
    const Ie = x({}, [...ni, ...nn, ...ii, ...fr]);
    let B = Object.seal(X1(null, {
            tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
            }
        })),
        ve = null,
        tt = null,
        ze = !0,
        At = !0,
        $t = !1,
        Ln = !0,
        rt = !1,
        br = !0,
        je = !1,
        wr = !1,
        Cr = !1,
        nt = !1,
        Wt = !1,
        Ht = !1,
        xn = !0,
        Nn = !1;
    const ls = "user-content-";
    let Ar = !0,
        Et = !1,
        it = {},
        st = null;
    const Pn = x({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let Mn = null;
    const Fn = x({}, ["audio", "video", "img", "source", "image", "track"]);
    let Er = null;
    const Un = x({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
        zt = "http://www.w3.org/1998/Math/MathML",
        jt = "http://www.w3.org/2000/svg",
        ke = "http://www.w3.org/1999/xhtml";
    let ot = ke,
        Sr = !1,
        Tr = null;
    const cs = x({}, [zt, jt, ke], Jr);
    let St = null;
    const us = ["application/xhtml+xml", "text/html"],
        ds = "text/html";
    let Q = null,
        at = null;
    const hs = r.createElement("form"),
        Vn = function(d) {
            return d instanceof RegExp || d instanceof Function
        },
        Or = function() {
            let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!(at && at === d)) {
                if ((!d || typeof d != "object") && (d = {}), d = Ze(d), St = us.indexOf(d.PARSER_MEDIA_TYPE) === -1 ? ds : d.PARSER_MEDIA_TYPE, Q = St === "application/xhtml+xml" ? Jr : hr, T = Ce(d, "ALLOWED_TAGS") ? x({}, d.ALLOWED_TAGS, Q) : z, N = Ce(d, "ALLOWED_ATTR") ? x({}, d.ALLOWED_ATTR, Q) : Ie, Tr = Ce(d, "ALLOWED_NAMESPACES") ? x({}, d.ALLOWED_NAMESPACES, Jr) : cs, Er = Ce(d, "ADD_URI_SAFE_ATTR") ? x(Ze(Un), d.ADD_URI_SAFE_ATTR, Q) : Un, Mn = Ce(d, "ADD_DATA_URI_TAGS") ? x(Ze(Fn), d.ADD_DATA_URI_TAGS, Q) : Fn, st = Ce(d, "FORBID_CONTENTS") ? x({}, d.FORBID_CONTENTS, Q) : Pn, ve = Ce(d, "FORBID_TAGS") ? x({}, d.FORBID_TAGS, Q) : {}, tt = Ce(d, "FORBID_ATTR") ? x({}, d.FORBID_ATTR, Q) : {}, it = Ce(d, "USE_PROFILES") ? d.USE_PROFILES : !1, ze = d.ALLOW_ARIA_ATTR !== !1, At = d.ALLOW_DATA_ATTR !== !1, $t = d.ALLOW_UNKNOWN_PROTOCOLS || !1, Ln = d.ALLOW_SELF_CLOSE_IN_ATTR !== !1, rt = d.SAFE_FOR_TEMPLATES || !1, br = d.SAFE_FOR_XML !== !1, je = d.WHOLE_DOCUMENT || !1, nt = d.RETURN_DOM || !1, Wt = d.RETURN_DOM_FRAGMENT || !1, Ht = d.RETURN_TRUSTED_TYPE || !1, Cr = d.FORCE_BODY || !1, xn = d.SANITIZE_DOM !== !1, Nn = d.SANITIZE_NAMED_PROPS || !1, Ar = d.KEEP_CONTENT !== !1, Et = d.IN_PLACE || !1, O = d.ALLOWED_URI_REGEXP || si, ot = d.NAMESPACE || ke, B = d.CUSTOM_ELEMENT_HANDLING || {}, d.CUSTOM_ELEMENT_HANDLING && Vn(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (B.tagNameCheck = d.CUSTOM_ELEMENT_HANDLING.tagNameCheck), d.CUSTOM_ELEMENT_HANDLING && Vn(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (B.attributeNameCheck = d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), d.CUSTOM_ELEMENT_HANDLING && typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (B.allowCustomizedBuiltInElements = d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), rt && (At = !1), Wt && (nt = !0), it && (T = x({}, ri), N = [], it.html === !0 && (x(T, ti), x(N, ni)), it.svg === !0 && (x(T, en), x(N, nn), x(N, fr)), it.svgFilters === !0 && (x(T, tn), x(N, nn), x(N, fr)), it.mathMl === !0 && (x(T, rn), x(N, ii), x(N, fr))), d.ADD_TAGS && (T === z && (T = Ze(T)), x(T, d.ADD_TAGS, Q)), d.ADD_ATTR && (N === Ie && (N = Ze(N)), x(N, d.ADD_ATTR, Q)), d.ADD_URI_SAFE_ATTR && x(Er, d.ADD_URI_SAFE_ATTR, Q), d.FORBID_CONTENTS && (st === Pn && (st = Ze(st)), x(st, d.FORBID_CONTENTS, Q)), Ar && (T["#text"] = !0), je && x(T, ["html", "head", "body"]), T.table && (x(T, ["tbody"]), delete ve.tbody), d.TRUSTED_TYPES_POLICY) {
                    if (typeof d.TRUSTED_TYPES_POLICY.createHTML != "function") throw xt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                    if (typeof d.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw xt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                    H = d.TRUSTED_TYPES_POLICY, C = H.createHTML("")
                } else H === void 0 && (H = $a(m, s)), H !== null && typeof C == "string" && (C = H.createHTML(""));
                ne && ne(d), at = d
            }
        },
        Bn = x({}, ["mi", "mo", "mn", "ms", "mtext"]),
        Kn = x({}, ["annotation-xml"]),
        fs = x({}, ["title", "style", "font", "a", "script"]),
        $n = x({}, [...en, ...tn, ...Da]),
        Wn = x({}, [...rn, ...La]),
        ps = function(d) {
            let y = V(d);
            (!y || !y.tagName) && (y = {
                namespaceURI: ot,
                tagName: "template"
            });
            const w = hr(d.tagName),
                K = hr(y.tagName);
            return Tr[d.namespaceURI] ? d.namespaceURI === jt ? y.namespaceURI === ke ? w === "svg" : y.namespaceURI === zt ? w === "svg" && (K === "annotation-xml" || Bn[K]) : !!$n[w] : d.namespaceURI === zt ? y.namespaceURI === ke ? w === "math" : y.namespaceURI === jt ? w === "math" && Kn[K] : !!Wn[w] : d.namespaceURI === ke ? y.namespaceURI === jt && !Kn[K] || y.namespaceURI === zt && !Bn[K] ? !1 : !Wn[w] && (fs[w] || !$n[w]) : !!(St === "application/xhtml+xml" && Tr[d.namespaceURI]) : !1
        },
        Ee = function(d) {
            Dt(t.removed, {
                element: d
            });
            try {
                V(d).removeChild(d)
            } catch {
                D(d)
            }
        },
        Gt = function(d, y) {
            try {
                Dt(t.removed, {
                    attribute: y.getAttributeNode(d),
                    from: y
                })
            } catch {
                Dt(t.removed, {
                    attribute: null,
                    from: y
                })
            }
            if (y.removeAttribute(d), d === "is" && !N[d])
                if (nt || Wt) try {
                    Ee(y)
                } catch {} else try {
                    y.setAttribute(d, "")
                } catch {}
        },
        Hn = function(d) {
            let y = null,
                w = null;
            if (Cr) d = "<remove></remove>" + d;
            else {
                const J = ei(d, /^[\r\n\t ]+/);
                w = J && J[0]
            }
            St === "application/xhtml+xml" && ot === ke && (d = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + d + "</body></html>");
            const K = H ? H.createHTML(d) : d;
            if (ot === ke) try {
                y = new p().parseFromString(K, St)
            } catch {}
            if (!y || !y.documentElement) {
                y = I.createDocument(ot, "template", null);
                try {
                    y.documentElement.innerHTML = Sr ? C : K
                } catch {}
            }
            const ee = y.body || y.documentElement;
            return d && w && ee.insertBefore(r.createTextNode(w), ee.childNodes[0] || null), ot === ke ? de.call(y, je ? "html" : "body")[0] : je ? y.documentElement : ee
        },
        zn = function(d) {
            return P.call(d.ownerDocument || d, d, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null)
        },
        jn = function(d) {
            return d instanceof h && (typeof d.nodeName != "string" || typeof d.textContent != "string" || typeof d.removeChild != "function" || !(d.attributes instanceof f) || typeof d.removeAttribute != "function" || typeof d.setAttribute != "function" || typeof d.namespaceURI != "string" || typeof d.insertBefore != "function" || typeof d.hasChildNodes != "function")
        },
        Gn = function(d) {
            return typeof l == "function" && d instanceof l
        },
        Re = function(d, y, w) {
            he[d] && dr(he[d], K => {
                K.call(t, y, w, at)
            })
        },
        qn = function(d) {
            let y = null;
            if (Re("beforeSanitizeElements", d, null), jn(d)) return Ee(d), !0;
            const w = Q(d.nodeName);
            if (Re("uponSanitizeElement", d, {
                    tagName: w,
                    allowedTags: T
                }), d.hasChildNodes() && !Gn(d.firstElementChild) && ie(/<[/\w]/g, d.innerHTML) && ie(/<[/\w]/g, d.textContent) || d.nodeType === Pt.progressingInstruction || br && d.nodeType === Pt.comment && ie(/<[/\w]/g, d.data)) return Ee(d), !0;
            if (!T[w] || ve[w]) {
                if (!ve[w] && Yn(w) && (B.tagNameCheck instanceof RegExp && ie(B.tagNameCheck, w) || B.tagNameCheck instanceof Function && B.tagNameCheck(w))) return !1;
                if (Ar && !st[w]) {
                    const K = V(d) || d.parentNode,
                        ee = ue(d) || d.childNodes;
                    if (ee && K) {
                        const J = ee.length;
                        for (let oe = J - 1; oe >= 0; --oe) {
                            const Se = k(ee[oe], !0);
                            Se.__removalCount = (d.__removalCount || 0) + 1, K.insertBefore(Se, $(d))
                        }
                    }
                }
                return Ee(d), !0
            }
            return d instanceof u && !ps(d) || (w === "noscript" || w === "noembed" || w === "noframes") && ie(/<\/no(script|embed|frames)/i, d.innerHTML) ? (Ee(d), !0) : (rt && d.nodeType === Pt.text && (y = d.textContent, dr([bt, wt, Ct], K => {
                y = Lt(y, K, " ")
            }), d.textContent !== y && (Dt(t.removed, {
                element: d.cloneNode()
            }), d.textContent = y)), Re("afterSanitizeElements", d, null), !1)
        },
        Zn = function(d, y, w) {
            if (xn && (y === "id" || y === "name") && (w in r || w in hs)) return !1;
            if (!(At && !tt[y] && ie(b, y))) {
                if (!(ze && ie(g, y))) {
                    if (!N[y] || tt[y]) {
                        if (!(Yn(d) && (B.tagNameCheck instanceof RegExp && ie(B.tagNameCheck, d) || B.tagNameCheck instanceof Function && B.tagNameCheck(d)) && (B.attributeNameCheck instanceof RegExp && ie(B.attributeNameCheck, y) || B.attributeNameCheck instanceof Function && B.attributeNameCheck(y)) || y === "is" && B.allowCustomizedBuiltInElements && (B.tagNameCheck instanceof RegExp && ie(B.tagNameCheck, w) || B.tagNameCheck instanceof Function && B.tagNameCheck(w)))) return !1
                    } else if (!Er[y]) {
                        if (!ie(O, Lt(w, v, ""))) {
                            if (!((y === "src" || y === "xlink:href" || y === "href") && d !== "script" && Oa(w, "data:") === 0 && Mn[d])) {
                                if (!($t && !ie(_, Lt(w, v, "")))) {
                                    if (w) return !1
                                }
                            }
                        }
                    }
                }
            }
            return !0
        },
        Yn = function(d) {
            return d !== "annotation-xml" && ei(d, A)
        },
        Qn = function(d) {
            Re("beforeSanitizeAttributes", d, null);
            const {
                attributes: y
            } = d;
            if (!y) return;
            const w = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: N
            };
            let K = y.length;
            for (; K--;) {
                const ee = y[K],
                    {
                        name: J,
                        namespaceURI: oe,
                        value: Se
                    } = ee,
                    Tt = Q(J);
                let re = J === "value" ? Se : Ia(Se);
                if (w.attrName = Tt, w.attrValue = re, w.keepAttr = !0, w.forceKeepAttr = void 0, Re("uponSanitizeAttribute", d, w), re = w.attrValue, w.forceKeepAttr || (Gt(J, d), !w.keepAttr)) continue;
                if (!Ln && ie(/\/>/i, re)) {
                    Gt(J, d);
                    continue
                }
                rt && dr([bt, wt, Ct], Jn => {
                    re = Lt(re, Jn, " ")
                });
                const Xn = Q(d.nodeName);
                if (Zn(Xn, Tt, re)) {
                    if (Nn && (Tt === "id" || Tt === "name") && (Gt(J, d), re = ls + re), br && ie(/((--!?|])>)|<\/(style|title)/i, re)) {
                        Gt(J, d);
                        continue
                    }
                    if (H && typeof m == "object" && typeof m.getAttributeType == "function" && !oe) switch (m.getAttributeType(Xn, Tt)) {
                        case "TrustedHTML": {
                            re = H.createHTML(re);
                            break
                        }
                        case "TrustedScriptURL": {
                            re = H.createScriptURL(re);
                            break
                        }
                    }
                    try {
                        oe ? d.setAttributeNS(oe, J, re) : d.setAttribute(J, re), jn(d) ? Ee(d) : J1(t.removed)
                    } catch {}
                }
            }
            Re("afterSanitizeAttributes", d, null)
        },
        ms = function E(d) {
            let y = null;
            const w = zn(d);
            for (Re("beforeSanitizeShadowDOM", d, null); y = w.nextNode();) Re("uponSanitizeShadowNode", y, null), !qn(y) && (y.content instanceof o && E(y.content), Qn(y));
            Re("afterSanitizeShadowDOM", d, null)
        };
    return t.sanitize = function(E) {
        let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            y = null,
            w = null,
            K = null,
            ee = null;
        if (Sr = !E, Sr && (E = "<!-->"), typeof E != "string" && !Gn(E))
            if (typeof E.toString == "function") {
                if (E = E.toString(), typeof E != "string") throw xt("dirty is not a string, aborting")
            } else throw xt("toString is not a function");
        if (!t.isSupported) return E;
        if (wr || Or(d), t.removed = [], typeof E == "string" && (Et = !1), Et) {
            if (E.nodeName) {
                const Se = Q(E.nodeName);
                if (!T[Se] || ve[Se]) throw xt("root node is forbidden and cannot be sanitized in-place")
            }
        } else if (E instanceof l) y = Hn("<!---->"), w = y.ownerDocument.importNode(E, !0), w.nodeType === Pt.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? y = w : y.appendChild(w);
        else {
            if (!nt && !rt && !je && E.indexOf("<") === -1) return H && Ht ? H.createHTML(E) : E;
            if (y = Hn(E), !y) return nt ? null : Ht ? C : ""
        }
        y && Cr && Ee(y.firstChild);
        const J = zn(Et ? E : y);
        for (; K = J.nextNode();) qn(K) || (K.content instanceof o && ms(K.content), Qn(K));
        if (Et) return E;
        if (nt) {
            if (Wt)
                for (ee = q.call(y.ownerDocument); y.firstChild;) ee.appendChild(y.firstChild);
            else ee = y;
            return (N.shadowroot || N.shadowrootmode) && (ee = et.call(n, ee, !0)), ee
        }
        let oe = je ? y.outerHTML : y.innerHTML;
        return je && T["!doctype"] && y.ownerDocument && y.ownerDocument.doctype && y.ownerDocument.doctype.name && ie(oi, y.ownerDocument.doctype.name) && (oe = "<!DOCTYPE " + y.ownerDocument.doctype.name + `>
` + oe), rt && dr([bt, wt, Ct], Se => {
            oe = Lt(oe, Se, " ")
        }), H && Ht ? H.createHTML(oe) : oe
    }, t.setConfig = function() {
        let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Or(E), wr = !0
    }, t.clearConfig = function() {
        at = null, wr = !1
    }, t.isValidAttribute = function(E, d, y) {
        at || Or({});
        const w = Q(E),
            K = Q(d);
        return Zn(w, K, y)
    }, t.addHook = function(E, d) {
        typeof d == "function" && (he[E] = he[E] || [], Dt(he[E], d))
    }, t.removeHook = function(E) {
        if (he[E]) return J1(he[E])
    }, t.removeHooks = function(E) {
        he[E] && (he[E] = [])
    }, t.removeAllHooks = function() {
        he = {}
    }, t
}
var mc = li();

function Wa(e) {
    return sn(e, 0)
}

function sn(e, t) {
    switch (typeof e) {
        case "object":
            return e === null ? Ue(349, t) : Array.isArray(e) ? za(e, t) : ja(e, t);
        case "string":
            return ci(e, t);
        case "boolean":
            return Ha(e, t);
        case "number":
            return Ue(e, t);
        case "undefined":
            return Ue(937, t);
        default:
            return Ue(617, t)
    }
}

function Ue(e, t) {
    return (t << 5) - t + e | 0
}

function Ha(e, t) {
    return Ue(e ? 433 : 863, t)
}

function ci(e, t) {
    t = Ue(149417, t);
    for (let r = 0, n = e.length; r < n; r++) t = Ue(e.charCodeAt(r), t);
    return t
}

function za(e, t) {
    return t = Ue(104579, t), e.reduce((r, n) => sn(n, r), t)
}

function ja(e, t) {
    return t = Ue(181387, t), Object.keys(e).sort().reduce((r, n) => (r = ci(n, r), sn(e[n], r)), t)
}

function on(e, t, r = 32) {
    const n = r - t,
        s = ~((1 << n) - 1);
    return (e << t | (s & e) >>> n) >>> 0
}

function Mt(e, t = 32) {
    return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map(r => r.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0")
}
var Ga = class os {
    constructor() {
        this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1
    }
    update(t) {
        const r = t.length;
        if (r === 0) return;
        const n = this._buff;
        let s = this._buffLen,
            o = this._leftoverHighSurrogate,
            a, l;
        for (o !== 0 ? (a = o, l = -1, o = 0) : (a = t.charCodeAt(0), l = 0);;) {
            let u = a;
            if (Yo(a))
                if (l + 1 < r) {
                    const c = t.charCodeAt(l + 1);
                    L1(c) ? (l++, u = Qo(a, c)) : u = 65533
                } else {
                    o = a;
                    break
                }
            else L1(a) && (u = 65533);
            if (s = this._push(n, s, u), l++, l < r) a = t.charCodeAt(l);
            else break
        }
        this._buffLen = s, this._leftoverHighSurrogate = o
    }
    _push(t, r, n) {
        return n < 128 ? t[r++] = n : n < 2048 ? (t[r++] = 192 | (n & 1984) >>> 6, t[r++] = 128 | (n & 63) >>> 0) : n < 65536 ? (t[r++] = 224 | (n & 61440) >>> 12, t[r++] = 128 | (n & 4032) >>> 6, t[r++] = 128 | (n & 63) >>> 0) : (t[r++] = 240 | (n & 1835008) >>> 18, t[r++] = 128 | (n & 258048) >>> 12, t[r++] = 128 | (n & 4032) >>> 6, t[r++] = 128 | (n & 63) >>> 0), r >= 64 && (this._step(), r -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), r
    }
    digest() {
        return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), Mt(this._h0) + Mt(this._h1) + Mt(this._h2) + Mt(this._h3) + Mt(this._h4)
    }
    _wrapUp() {
        this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
        const t = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step()
    }
    _step() {
        const t = os._bigBlock32,
            r = this._buffDV;
        for (let h = 0; h < 64; h += 4) t.setUint32(h, r.getUint32(h, !1), !1);
        for (let h = 64; h < 320; h += 4) t.setUint32(h, on(t.getUint32(h - 12, !1) ^ t.getUint32(h - 32, !1) ^ t.getUint32(h - 56, !1) ^ t.getUint32(h - 64, !1), 1), !1);
        let n = this._h0,
            s = this._h1,
            o = this._h2,
            a = this._h3,
            l = this._h4,
            u, c, f;
        for (let h = 0; h < 80; h++) h < 20 ? (u = s & o | ~s & a, c = 1518500249) : h < 40 ? (u = s ^ o ^ a, c = 1859775393) : h < 60 ? (u = s & o | s & a | o & a, c = 2400959708) : (u = s ^ o ^ a, c = 3395469782), f = on(n, 5) + u + l + c + t.getUint32(h * 4, !1) & 4294967295, l = a, a = o, o = on(s, 30), s = n, n = f;
        this._h0 = this._h0 + n & 4294967295, this._h1 = this._h1 + s & 4294967295, this._h2 = this._h2 + o & 4294967295, this._h3 = this._h3 + a & 4294967295, this._h4 = this._h4 + l & 4294967295
    }
};
Ga._bigBlock32 = new DataView(new ArrayBuffer(320));
var gc = Date.now(),
    yc = 1800 * 1e3,
    qa = ["vscode.typescript", "vscode.javascript", "vscode.python", "vscode.json", "vscode.html", "vscode.css", "vscode.markdown", "vscode.yaml", "vscode.xml", "vscode.go", "vscode.rust", "vscode.cpp", "vscode.java", "vscode.csharp", "vscode.ruby", "vscode.sql", "vscode.shellscript", "vscode.swift", "vscode.dart", "vscode.scss", "vscode.less", "vscode.lua", "vscode.perl", "vscode.r", "vscode.php", "vscode.docker", "vscode.ini", "vscode.diff", "vscode.make", "vscode.log", "mechatroner.rainbow-csv"],
    ui = ["anysphere.cursor-resolver", "anysphere.cursor-always-local", "anysphere.cursor-agent-worker", "anysphere.cursor-agent-exec", "anysphere.cursor-checkout", "anysphere.cursor-explorer", "anysphere.cursor-commits", "anysphere.cursor-mcp", "anysphere.cursor-ndjson-ingest", "anysphere.cursor-retrieval", "cursor.cursor-browser-automation", "vscode.git", "vscode.git-base", "vscode.vscode-theme-seti", "undefined_publisher.cursor-themes", ...qa, "vscodevim.vim", "asvetliakov.vscode-neovim", "tuttieee.emacs-mcx"],
    Za = ["vscode.css-language-features", "vscode.html-language-features", "vscode.json-language-features", "vscode.php-language-features", "vscode.typescript-language-features", "typescriptteam.native-preview", "dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "biomejs.biome", "denoland.vscode-deno", "vue.volar", "svelte.svelte-vscode", "astro-build.astro-vscode", "angular.ng-template", "bradlc.vscode-tailwindcss", "stylelint.vscode-stylelint", "unifiedjs.vscode-mdx", "ms-python.python", "ms-python.vscode-pylance", "charliermarsh.ruff", "golang.go", "rust-lang.rust-analyzer", "ms-vscode.cpptools", "llvm-vs-code-extensions.vscode-clangd", "ms-vscode.cmake-tools", "twxs.cmake", "ms-dotnettools.csharp", "redhat.java", "vscjava.vscode-gradle", "fwcd.kotlin", "mathiasfrohlich.kotlin", "scalameta.metals", "scala-lang.scala", "swiftlang.swift-vscode", "sswg.swift-lang", "bmewburn.vscode-intelephense-client", "devsense.phptools-vscode", "shopify.ruby-lsp", "dart-code.dart-code", "dart-code.flutter", "jakebecker.elixir-ls", "pgourlain.erlang", "betterthantomorrow.calva", "ziglang.vscode-zig", "sumneko.lua", "geequlim.godot-tools", "julialang.language-julia", "reditorsupport.r", "haskell.haskell", "ocamllabs.ocaml-platform", "fortran-lang.linter-gfortran", "ms-vscode.powershell", "timonwong.shellcheck", "mads-hartmann.bash-ide-vscode", "juanblanco.solidity", "nomicfoundation.hardhat-solidity", "james-yu.latex-workshop", "graphql.vscode-graphql", "graphql.vscode-graphql-syntax", "prisma.prisma", "hashicorp.terraform", "hashicorp.hcl", "ms-azuretools.vscode-bicep", "ms-azuretools.vscode-docker", "docker.docker", "redhat.vscode-yaml", "redhat.vscode-xml", "tamasfe.even-better-toml", "tombi-toml.tombi", "wholroyd.jinja", "samuelcolvin.jinjahtml", "zxh404.vscode-proto3", "bufbuild.vscode-buf", "jnoortheen.nix-ide", "bbenoist.nix"],
    Ya = [...ui, "anysphere.cursor-deeplink", "anysphere.cursor-resolver-helper", "anysphere.cursor-socket", "vscode.github-authentication"],
    Qa = [...ui, "anysphere.remote-ssh", "anysphere.remote-wsl", "anysphere.remote-containers"],
    Xa = [...Qa, ...Za],
    vc = [...Xa, ...Ya],
    di = "src.vs.platform.reactivestorage.browser.reactiveStorageServiceImpl.persistentStorage",
    _c = `${di}.applicationUser`,
    bc = `${di}.applicationUser.subscription`,
    Ja = "workbench.panel.aichat.view",
    wc = Ja + ".aichat.chatdata",
    e0 = [.85, 1, 1.15, 1.3],
    t0 = "default",
    Cc = [t0, ...e0.map(e => `${e}`)],
    r0 = ["aichat.newchataction", "composer.focusComposer", "aiSettings.action.open", "workbench.action.openSettings", "workbench.action.showCommands", "workbench.action.togglePanel", "workbench.action.toggleSidebarVisibility", "workbench.action.toggleUnifiedSidebar", "workbench.action.toggleAuxiliaryBar", "workbench.action.toggleFullScreen", "workbench.action.terminal.toggleTerminal", "workbench.action.terminal.new", "workbench.action.quickOpen", "workbench.action.closeActiveEditor", "workbench.action.newBrowserTab", "workbench.action.reloadBrowserTab", "workbench.action.focusBrowserLocationBar"],
    n0 = ["glass.newAgentFromKeyboard", "glass.newBrowser", "glass.newTab", "glass.openEditorPanelNewTabMenu", "glass.nextTab", "glass.previousTab", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.focusBrowserLocationBar", "glass.hardReloadBrowserTab", "glass.showBrowserFind", "glass.hideBrowserFind", "glass.toggleDesignMode", "glass.togglePanel", "glass.toggleSidebar", "glass.toggleSidebarFromKeyboard", "glass.toggleTerminal", "glass.focusInput", "glass.openFilePrioritizedPalette", "glass.openActionsPalette"],
    Ac = new Set([...r0, ...n0]),
    We = class {
        constructor(e, t, r) {
            this.owner = e, this.debugNameSource = t, this.referenceFn = r
        }
        getDebugName(e) {
            return i0(e, this)
        }
    },
    hi = new Map,
    an = new WeakMap;

function i0(e, t) {
    const r = an.get(e);
    if (r) return r;
    const n = s0(e, t);
    if (n) {
        let s = hi.get(n) ?? 0;
        s++, hi.set(n, s);
        const o = s === 1 ? n : `${n}#${s}`;
        return an.set(e, o), o
    }
}

function s0(e, t) {
    const r = an.get(e);
    if (r) return r;
    const n = t.owner ? a0(t.owner) + "." : "";
    let s;
    const o = t.debugNameSource;
    if (o !== void 0)
        if (typeof o == "function") {
            if (s = o(), s !== void 0) return n + s
        } else return n + o;
    const a = t.referenceFn;
    if (a !== void 0 && (s = ln(a), s !== void 0)) return n + s;
    if (t.owner !== void 0) {
        const l = o0(t.owner, e);
        if (l !== void 0) return n + l
    }
}

function o0(e, t) {
    for (const r in e)
        if (e[r] === t) return r
}
var fi = new Map,
    pi = new WeakMap;

function a0(e) {
    const t = pi.get(e);
    if (t) return t;
    const r = mi(e) ?? "Object";
    let n = fi.get(r) ?? 0;
    n++, fi.set(r, n);
    const s = n === 1 ? r : `${r}#${n}`;
    return pi.set(e, s), s
}

function mi(e) {
    const t = e.constructor;
    if (t) return t.name === "Object" ? void 0 : t.name
}

function ln(e) {
    const t = e.toString(),
        n = /\/\*\*\s*@description\s*([^*]*)\*\//.exec(t);
    return (n ? n[1] : void 0)?.trim()
}
var mt = (e, t) => e === t,
    Ye;

function cn(e) {
    Ye ? Ye instanceof gi ? Ye.loggers.push(e) : Ye = new gi([Ye, e]) : Ye = e
}

function Y() {
    return Ye
}
var un = void 0;

function l0(e) {
    un = e
}

function c0(e) {
    un && un(e)
}
var gi = class {
        constructor(e) {
            this.loggers = e
        }
        handleObservableCreated(e) {
            for (const t of this.loggers) t.handleObservableCreated(e)
        }
        handleOnListenerCountChanged(e, t) {
            for (const r of this.loggers) r.handleOnListenerCountChanged(e, t)
        }
        handleObservableUpdated(e, t) {
            for (const r of this.loggers) r.handleObservableUpdated(e, t)
        }
        handleAutorunCreated(e) {
            for (const t of this.loggers) t.handleAutorunCreated(e)
        }
        handleAutorunDisposed(e) {
            for (const t of this.loggers) t.handleAutorunDisposed(e)
        }
        handleAutorunDependencyChanged(e, t, r) {
            for (const n of this.loggers) n.handleAutorunDependencyChanged(e, t, r)
        }
        handleAutorunStarted(e) {
            for (const t of this.loggers) t.handleAutorunStarted(e)
        }
        handleAutorunFinished(e) {
            for (const t of this.loggers) t.handleAutorunFinished(e)
        }
        handleDerivedDependencyChanged(e, t, r) {
            for (const n of this.loggers) n.handleDerivedDependencyChanged(e, t, r)
        }
        handleDerivedCleared(e) {
            for (const t of this.loggers) t.handleDerivedCleared(e)
        }
        handleBeginTransaction(e) {
            for (const t of this.loggers) t.handleBeginTransaction(e)
        }
        handleEndTransaction(e) {
            for (const t of this.loggers) t.handleEndTransaction(e)
        }
    },
    yi;

function u0(e) {
    yi = e
}
var vi;

function d0(e) {
    vi = e
}
var dn;

function h0(e) {
    dn = e
}
var f0 = class {
        get TChange() {
            return null
        }
        reportChanges() {
            this.get()
        }
        read(e) {
            return e ? e.readObservable(this) : this.get()
        }
        map(e, t) {
            const r = t === void 0 ? void 0 : e,
                n = t === void 0 ? e : t;
            return dn({
                owner: r,
                debugName: () => {
                    const s = ln(n);
                    if (s !== void 0) return s;
                    const a = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(n.toString());
                    if (a) return `${this.debugName}.${a[2]}`;
                    if (!r) return `${this.debugName} (mapped)`
                },
                debugReferenceFn: n
            }, s => n(this.read(s), s))
        }
        flatten() {
            return dn({
                owner: void 0,
                debugName: () => `${this.debugName} (flattened)`
            }, e => this.read(e).read(e))
        }
        recomputeInitiallyAndOnChange(e, t) {
            return e.add(yi(this, t)), this
        }
        keepObserved(e) {
            return e.add(vi(this)), this
        }
        get debugValue() {
            return this.get()
        }
    },
    hn = class extends f0 {
        constructor() {
            super(), this._observers = new Set, Y()?.handleObservableCreated(this)
        }
        addObserver(e) {
            const t = this._observers.size;
            this._observers.add(e), t === 0 && this.onFirstObserverAdded(), t !== this._observers.size && Y()?.handleOnListenerCountChanged(this, this._observers.size)
        }
        removeObserver(e) {
            const t = this._observers.delete(e);
            t && this._observers.size === 0 && this.onLastObserverRemoved(), t && Y()?.handleOnListenerCountChanged(this, this._observers.size)
        }
        onFirstObserverAdded() {}
        onLastObserverRemoved() {}
        log() {
            const e = !!Y();
            return c0(this), e || Y()?.handleObservableCreated(this), this
        }
        debugGetObservers() {
            return this._observers
        }
    };

function _i(e, t) {
    const r = new bi(e, t);
    try {
        e(r)
    } finally {
        r.finish()
    }
}

function p0(e, t, r) {
    e ? t(e) : _i(t, r)
}
var bi = class {
    constructor(e, t) {
        this._fn = e, this._getDebugName = t, this._updatingObservers = [], Y()?.handleBeginTransaction(this)
    }
    getDebugName() {
        return this._getDebugName ? this._getDebugName() : ln(this._fn)
    }
    updateObserver(e, t) {
        if (!this._updatingObservers) {
            wi("Transaction already finished!"), _i(r => {
                r.updateObserver(e, t)
            });
            return
        }
        this._updatingObservers.push({
            observer: e,
            observable: t
        }), e.beginUpdate(t)
    }
    finish() {
        const e = this._updatingObservers;
        if (!e) {
            wi("transaction.finish() has already been called!");
            return
        }
        for (let t = 0; t < e.length; t++) {
            const {
                observer: r,
                observable: n
            } = e[t];
            r.endUpdate(n)
        }
        this._updatingObservers = null, Y()?.handleEndTransaction(this)
    }
    debugGetUpdatingObservers() {
        return this._updatingObservers
    }
};

function wi(e) {
    const t = new Error("BugIndicatingErrorRecovery: " + e);
    De(t), console.error("recovered from an error that indicates a bug", t)
}

function Ci(e, t) {
    let r;
    return typeof e == "string" ? r = new We(void 0, e, void 0) : r = new We(e, void 0, void 0), new fn(r, t, mt)
}
var fn = class extends hn {
    constructor(e, t, r) {
        super(), this._debugNameData = e, this._equalityComparator = r, this._value = t, Y()?.handleObservableUpdated(this, {
            hadValue: !1,
            newValue: t,
            change: void 0,
            didChange: !0,
            oldValue: void 0
        })
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "ObservableValue"
    }
    get() {
        return this._value
    }
    set(e, t, r) {
        if (r === void 0 && this._equalityComparator(this._value, e)) return;
        let n;
        t || (t = n = new bi(() => {}, () => `Setting ${this.debugName}`));
        try {
            const s = this._value;
            this._setValue(e), Y()?.handleObservableUpdated(this, {
                oldValue: s,
                newValue: e,
                change: r,
                didChange: !0,
                hadValue: !0
            });
            for (const o of this._observers) t.updateObserver(o, this), o.handleChange(this, r)
        } finally {
            n && n.finish()
        }
    }
    toString() {
        return `${this.debugName}: ${this._value}`
    }
    _setValue(e) {
        this._value = e
    }
    debugGetState() {
        return {
            value: this._value
        }
    }
    debugSetValue(e) {
        this._value = e
    }
};

function Ai(e) {
    return new pn(new We(void 0, void 0, e), e, void 0, void 0)
}
var pn = class {
    constructor(e, t, r, n) {
        this._debugNameData = e, this._runFn = t, this.createChangeSummary = r, this._handleChange = n, this._state = 2, this._updateCount = 0, this._disposed = !1, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._isRunning = !1, this._changeSummary = this.createChangeSummary?.(), Y()?.handleAutorunCreated(this), this._run(), Zt(this)
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)"
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = !0;
            for (const e of this._dependencies) e.removeObserver(this);
            this._dependencies.clear(), Y()?.handleAutorunDisposed(this), Yt(this)
        }
    }
    _run() {
        const e = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e, this._state = 3;
        try {
            if (!this._disposed) {
                Y()?.handleAutorunStarted(this);
                const t = this._changeSummary;
                try {
                    this._changeSummary = this.createChangeSummary?.(), this._isRunning = !0, this._runFn(this, t)
                } catch (r) {
                    qt(r)
                } finally {
                    this._isRunning = !1
                }
            }
        } finally {
            this._disposed || Y()?.handleAutorunFinished(this);
            for (const t of this._dependenciesToBeRemoved) t.removeObserver(this);
            this._dependenciesToBeRemoved.clear()
        }
    }
    toString() {
        return `Autorun<${this.debugName}>`
    }
    beginUpdate(e) {
        this._state === 3 && (this._state = 1), this._updateCount++
    }
    endUpdate(e) {
        try {
            if (this._updateCount === 1)
                do {
                    if (this._state === 1) {
                        this._state = 3;
                        for (const t of this._dependencies)
                            if (t.reportChanges(), this._state === 2) break
                    }
                    this._state !== 3 && this._run()
                } while (this._state !== 3)
        } finally {
            this._updateCount--
        }
        u1(() => this._updateCount >= 0)
    }
    handlePossibleChange(e) {
        this._state === 3 && this._isDependency(e) && (this._state = 1)
    }
    handleChange(e, t) {
        if (this._isDependency(e)) {
            Y()?.handleAutorunDependencyChanged(this, e, t);
            try {
                (this._handleChange ? this._handleChange({
                    changedObservable: e,
                    change: t,
                    didChange: n => n === e
                }, this._changeSummary) : !0) && (this._state = 2)
            } catch (r) {
                qt(r)
            }
        }
    }
    _isDependency(e) {
        return this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)
    }
    readObservable(e) {
        if (!this._isRunning) throw new Be("The reader object cannot be used outside its compute function!");
        if (this._disposed) return e.get();
        e.addObserver(this);
        const t = e.get();
        return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t
    }
    debugGetState() {
        return {
            isRunning: this._isRunning,
            updateCount: this._updateCount,
            dependencies: this._dependencies,
            state: this._state
        }
    }
    debugRerun() {
        this._isRunning ? this._state = 2 : this._run()
    }
};
(e => {
    e.Observer = pn
})(Ai || (Ai = {}));

function pr(e, t) {
    return t !== void 0 ? new me(new We(e, void 0, t), t, void 0, void 0, void 0, mt) : new me(new We(void 0, void 0, e), e, void 0, void 0, void 0, mt)
}

function mn(e, t) {
    return new me(new We(e.owner, e.debugName, e.debugReferenceFn), t, void 0, void 0, e.onLastObserverRemoved, e.equalsFn ?? mt)
}
h0(mn);

function m0(e, t) {
    let r, n;
    t === void 0 ? (r = e, n = void 0) : (n = e, r = t);
    let s = new be;
    return new me(new We(n, void 0, r), o => (s.isDisposed ? s = new be : s.clear(), r(o, s)), void 0, void 0, () => s.dispose(), mt)
}
var me = class extends hn {
    constructor(e, t, r, n, s = void 0, o) {
        super(), this._debugNameData = e, this._computeFn = t, this.createChangeSummary = r, this._handleChange = n, this._handleLastObserverRemoved = s, this._equalityComparator = o, this._state = 0, this._value = void 0, this._updateCount = 0, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._changeSummary = void 0, this._isUpdating = !1, this._isComputing = !1, this._removedObserverToCallEndUpdateOn = null, this._isReaderValid = !1, this._changeSummary = this.createChangeSummary?.()
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)"
    }
    onLastObserverRemoved() {
        this._state = 0, this._value = void 0, Y()?.handleDerivedCleared(this);
        for (const e of this._dependencies) e.removeObserver(this);
        this._dependencies.clear(), this._handleLastObserverRemoved?.()
    }
    get() {
        if (this._isComputing, this._observers.size === 0) {
            let t;
            try {
                this._isReaderValid = !0, t = this._computeFn(this, this.createChangeSummary?.())
            } finally {
                this._isReaderValid = !1
            }
            return this.onLastObserverRemoved(), t
        } else {
            do {
                if (this._state === 1) {
                    for (const t of this._dependencies)
                        if (t.reportChanges(), this._state === 2) break
                }
                this._state === 1 && (this._state = 3), this._state !== 3 && this._recompute()
            } while (this._state !== 3);
            return this._value
        }
    }
    _recompute() {
        const e = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e;
        const t = this._state !== 0,
            r = this._value;
        this._state = 3;
        let n = !1;
        this._isComputing = !0;
        try {
            const s = this._changeSummary;
            this._changeSummary = this.createChangeSummary?.();
            try {
                this._isReaderValid = !0, this._value = this._computeFn(this, s)
            } finally {
                this._isReaderValid = !1;
                for (const o of this._dependenciesToBeRemoved) o.removeObserver(this);
                this._dependenciesToBeRemoved.clear()
            }
            n = t && !this._equalityComparator(r, this._value), Y()?.handleObservableUpdated(this, {
                oldValue: r,
                newValue: this._value,
                change: void 0,
                didChange: n,
                hadValue: t
            })
        } catch (s) {
            qt(s)
        }
        if (this._isComputing = !1, n)
            for (const s of this._observers) s.handleChange(this, void 0)
    }
    toString() {
        return `LazyDerived<${this.debugName}>`
    }
    beginUpdate(e) {
        if (this._isUpdating) throw new Be("Cyclic deriveds are not supported yet!");
        this._updateCount++, this._isUpdating = !0;
        try {
            const t = this._updateCount === 1;
            if (this._state === 3 && (this._state = 1, !t))
                for (const r of this._observers) r.handlePossibleChange(this);
            if (t)
                for (const r of this._observers) r.beginUpdate(this)
        } finally {
            this._isUpdating = !1
        }
    }
    endUpdate(e) {
        if (this._updateCount--, this._updateCount === 0) {
            const t = [...this._observers];
            for (const r of t) r.endUpdate(this);
            if (this._removedObserverToCallEndUpdateOn) {
                const r = [...this._removedObserverToCallEndUpdateOn];
                this._removedObserverToCallEndUpdateOn = null;
                for (const n of r) n.endUpdate(this)
            }
        }
        u1(() => this._updateCount >= 0)
    }
    handlePossibleChange(e) {
        if (this._state === 3 && this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
            this._state = 1;
            for (const t of this._observers) t.handlePossibleChange(this)
        }
    }
    handleChange(e, t) {
        if (this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
            Y()?.handleDerivedDependencyChanged(this, e, t);
            let r = !1;
            try {
                r = this._handleChange ? this._handleChange({
                    changedObservable: e,
                    change: t,
                    didChange: s => s === e
                }, this._changeSummary) : !0
            } catch (s) {
                qt(s)
            }
            const n = this._state === 3;
            if (r && (this._state === 1 || n) && (this._state = 2, n))
                for (const s of this._observers) s.handlePossibleChange(this)
        }
    }
    readObservable(e) {
        if (!this._isReaderValid) throw new Be("The reader object cannot be used outside its compute function!");
        e.addObserver(this);
        const t = e.get();
        return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t
    }
    addObserver(e) {
        const t = !this._observers.has(e) && this._updateCount > 0;
        super.addObserver(e), t && (this._removedObserverToCallEndUpdateOn && this._removedObserverToCallEndUpdateOn.has(e) ? this._removedObserverToCallEndUpdateOn.delete(e) : e.beginUpdate(this))
    }
    removeObserver(e) {
        this._observers.has(e) && this._updateCount > 0 && (this._removedObserverToCallEndUpdateOn || (this._removedObserverToCallEndUpdateOn = new Set), this._removedObserverToCallEndUpdateOn.add(e)), super.removeObserver(e)
    }
    debugGetState() {
        return {
            state: this._state,
            updateCount: this._updateCount,
            isComputing: this._isComputing,
            dependencies: this._dependencies,
            value: this._value
        }
    }
    debugSetValue(e) {
        this._value = e
    }
};

function Ei(...e) {
    let t, r, n;
    return e.length === 3 ? [t, r, n] = e : [r, n] = e, new Qe(new We(t, void 0, n), r, n, () => Qe.globalTransaction, mt)
}
var Qe = class extends hn {
    constructor(e, t, r, n, s) {
        super(), this._debugNameData = e, this.event = t, this._getValue = r, this._getTransaction = n, this._equalityComparator = s, this._hasValue = !1, this.handleEvent = o => {
            const a = this._getValue(o),
                l = this._value,
                u = !this._hasValue || !this._equalityComparator(l, a);
            let c = !1;
            u && (this._value = a, this._hasValue && (c = !0, p0(this._getTransaction(), f => {
                Y()?.handleObservableUpdated(this, {
                    oldValue: l,
                    newValue: a,
                    change: void 0,
                    didChange: u,
                    hadValue: this._hasValue
                });
                for (const h of this._observers) f.updateObserver(h, this), h.handleChange(this, void 0)
            }, () => {
                const f = this.getDebugName();
                return "Event fired" + (f ? `: ${f}` : "")
            })), this._hasValue = !0), c || Y()?.handleObservableUpdated(this, {
                oldValue: l,
                newValue: a,
                change: void 0,
                didChange: u,
                hadValue: this._hasValue
            })
        }
    }
    getDebugName() {
        return this._debugNameData.getDebugName(this)
    }
    get debugName() {
        const e = this.getDebugName();
        return "From Event" + (e ? `: ${e}` : "")
    }
    onFirstObserverAdded() {
        this._subscription = this.event(this.handleEvent)
    }
    onLastObserverRemoved() {
        this._subscription.dispose(), this._subscription = void 0, this._hasValue = !1, this._value = void 0
    }
    get() {
        return this._subscription ? (this._hasValue || this.handleEvent(void 0), this._value) : this._getValue(void 0)
    }
    debugSetValue(e) {
        this._value = e
    }
};
(e => {
    e.Observer = Qe;

    function t(r, n) {
        let s = !1;
        Qe.globalTransaction === void 0 && (Qe.globalTransaction = r, s = !0);
        try {
            n()
        } finally {
            s && (Qe.globalTransaction = void 0)
        }
    }
    e.batchEventsGlobally = t
})(Ei || (Ei = {}));

function g0(e) {
    const t = new Si(!1, void 0);
    return e.addObserver(t), _e(() => {
        e.removeObserver(t)
    })
}
d0(g0);

function y0(e, t) {
    const r = new Si(!0, t);
    e.addObserver(r);
    try {
        r.beginUpdate(e)
    } finally {
        r.endUpdate(e)
    }
    return _e(() => {
        e.removeObserver(r)
    })
}
u0(y0);
var Si = class {
        constructor(e, t) {
            this._forceRecompute = e, this._handleValue = t, this._counter = 0
        }
        beginUpdate(e) {
            this._counter++
        }
        endUpdate(e) {
            this._counter === 1 && this._forceRecompute && (this._handleValue ? this._handleValue(e.get()) : e.reportChanges()), this._counter--
        }
        handlePossibleChange(e) {}
        handleChange(e, t) {}
    },
    mr;

function v0(e) {
    mr || (mr = new Ti, cn(mr)), mr.addFilteredObj(e)
}
var Ti = class {
    constructor() {
        this.indentation = 0, this.changedObservablesSets = new WeakMap
    }
    addFilteredObj(e) {
        this._filteredObjects || (this._filteredObjects = new Set), this._filteredObjects.add(e)
    }
    _isIncluded(e) {
        return this._filteredObjects?.has(e) ?? !0
    }
    textToConsoleArgs(e) {
        return _0([gt(C0("|  ", this.indentation)), e])
    }
    formatInfo(e) {
        return e.hadValue ? e.didChange ? [gt(" "), ge(Ve(e.oldValue, 70), {
            color: "red",
            strikeThrough: !0
        }), gt(" "), ge(Ve(e.newValue, 60), {
            color: "green"
        })] : [gt(" (unchanged)")] : [gt(" "), ge(Ve(e.newValue, 60), {
            color: "green"
        }), gt(" (initial)")]
    }
    handleObservableCreated(e) {
        if (e instanceof me) {
            const t = e;
            if (this.changedObservablesSets.set(t, new Set), !1) {
                const n = [];
                t.__debugUpdating = n;
                const s = t.beginUpdate;
                t.beginUpdate = a => (n.push(a), s.apply(t, [a]));
                const o = t.endUpdate;
                t.endUpdate = a => {
                    const l = n.indexOf(a);
                    return l === -1 && console.error("endUpdate called without beginUpdate", t.debugName, a.debugName), n.splice(l, 1), o.apply(t, [a])
                }
            }
        }
    }
    handleOnListenerCountChanged(e, t) {}
    handleObservableUpdated(e, t) {
        if (this._isIncluded(e)) {
            if (e instanceof me) {
                this._handleDerivedRecomputed(e, t);
                return
            }
            console.log(...this.textToConsoleArgs([yt("observable value changed"), ge(e.debugName, {
                color: "BlueViolet"
            }), ...this.formatInfo(t)]))
        }
    }
    formatChanges(e) {
        if (e.size !== 0) return ge(" (changed deps: " + [...e].map(t => t.debugName).join(", ") + ")", {
            color: "gray"
        })
    }
    handleDerivedDependencyChanged(e, t, r) {
        this._isIncluded(e) && this.changedObservablesSets.get(e)?.add(t)
    }
    _handleDerivedRecomputed(e, t) {
        if (!this._isIncluded(e)) return;
        const r = this.changedObservablesSets.get(e);
        r && (console.log(...this.textToConsoleArgs([yt("derived recomputed"), ge(e.debugName, {
            color: "BlueViolet"
        }), ...this.formatInfo(t), this.formatChanges(r), {
            data: [{
                fn: e._debugNameData.referenceFn ?? e._computeFn
            }]
        }])), r.clear())
    }
    handleDerivedCleared(e) {
        this._isIncluded(e) && console.log(...this.textToConsoleArgs([yt("derived cleared"), ge(e.debugName, {
            color: "BlueViolet"
        })]))
    }
    handleFromEventObservableTriggered(e, t) {
        this._isIncluded(e) && console.log(...this.textToConsoleArgs([yt("observable from event triggered"), ge(e.debugName, {
            color: "BlueViolet"
        }), ...this.formatInfo(t), {
            data: [{
                fn: e._getValue
            }]
        }]))
    }
    handleAutorunCreated(e) {
        this._isIncluded(e) && this.changedObservablesSets.set(e, new Set)
    }
    handleAutorunDisposed(e) {}
    handleAutorunDependencyChanged(e, t, r) {
        this._isIncluded(e) && this.changedObservablesSets.get(e).add(t)
    }
    handleAutorunStarted(e) {
        const t = this.changedObservablesSets.get(e);
        t && (this._isIncluded(e) && console.log(...this.textToConsoleArgs([yt("autorun"), ge(e.debugName, {
            color: "BlueViolet"
        }), this.formatChanges(t), {
            data: [{
                fn: e._debugNameData.referenceFn ?? e._runFn
            }]
        }])), t.clear(), this.indentation++)
    }
    handleAutorunFinished(e) {
        this.indentation--
    }
    handleBeginTransaction(e) {
        let t = e.getDebugName();
        t === void 0 && (t = ""), this._isIncluded(e) && console.log(...this.textToConsoleArgs([yt("transaction"), ge(t, {
            color: "BlueViolet"
        }), {
            data: [{
                fn: e._fn
            }]
        }])), this.indentation++
    }
    handleEndTransaction() {
        this.indentation--
    }
};

function _0(e) {
    const t = new Array,
        r = [];
    let n = "";

    function s(a) {
        if ("length" in a)
            for (const l of a) l && s(l);
        else "text" in a ? (n += `%c${a.text}`, t.push(a.style), a.data && r.push(...a.data)) : "data" in a && r.push(...a.data)
    }
    s(e);
    const o = [n, ...t];
    return o.push(...r), o
}

function gt(e) {
    return ge(e, {
        color: "black"
    })
}

function yt(e) {
    return ge(A0(`${e}: `, 10), {
        color: "black",
        bold: !0
    })
}

function ge(e, t = {
    color: "black"
}) {
    function r(s) {
        return Object.entries(s).reduce((o, [a, l]) => `${o}${a}:${l};`, "")
    }
    const n = {
        color: t.color
    };
    return t.strikeThrough && (n["text-decoration"] = "line-through"), t.bold && (n["font-weight"] = "bold"), {
        text: e,
        style: r(n)
    }
}

function Ve(e, t) {
    switch (typeof e) {
        case "number":
            return "" + e;
        case "string":
            return e.length + 2 <= t ? `"${e}"` : `"${e.substr(0,t-7)}"+...`;
        case "boolean":
            return e ? "true" : "false";
        case "undefined":
            return "undefined";
        case "object":
            return e === null ? "null" : Array.isArray(e) ? b0(e, t) : w0(e, t);
        case "symbol":
            return e.toString();
        case "function":
            return `[[Function${e.name?" "+e.name:""}]]`;
        default:
            return "" + e
    }
}

function b0(e, t) {
    let r = "[ ",
        n = !0;
    for (const s of e) {
        if (n || (r += ", "), r.length - 5 > t) {
            r += "...";
            break
        }
        n = !1, r += `${Ve(s,t-r.length)}`
    }
    return r += " ]", r
}

function w0(e, t) {
    if (typeof e.toString == "function" && e.toString !== Object.prototype.toString) {
        const o = e.toString();
        return o.length <= t ? o : o.substring(0, t - 3) + "..."
    }
    const r = mi(e);
    let n = r ? r + "(" : "{ ",
        s = !0;
    for (const [o, a] of Object.entries(e)) {
        if (s || (n += ", "), n.length - 5 > t) {
            n += "...";
            break
        }
        s = !1, n += `${o}: ${Ve(a,t-n.length)}`
    }
    return n += r ? ")" : " }", n
}

function C0(e, t) {
    let r = "";
    for (let n = 1; n <= t; n++) r += e;
    return r
}

function A0(e, t) {
    for (; e.length < t;) e += " ";
    return e
}
var E0 = class Dn {
    constructor(t, r) {
        this._channelFactory = t, this._getHandler = r, this._channel = this._channelFactory({
            handleNotification: o => {
                const a = o,
                    l = this._getHandler().notifications[a[0]];
                if (!l) throw new Error(`Unknown notification "${a[0]}"!`);
                l(...a[1])
            },
            handleRequest: o => {
                const a = o;
                try {
                    return {
                        type: "result",
                        value: this._getHandler().requests[a[0]](...a[1])
                    }
                } catch (l) {
                    return {
                        type: "error",
                        value: l
                    }
                }
            }
        });
        const n = new Proxy({}, {
                get: (o, a) => async (...l) => {
                    const u = await this._channel.sendRequest([a, l]);
                    if (u.type === "error") throw u.value;
                    return u.value
                }
            }),
            s = new Proxy({}, {
                get: (o, a) => (...l) => {
                    this._channel.sendNotification([a, l])
                }
            });
        this.api = {
            notifications: s,
            requests: n
        }
    }
    static createHost(t, r) {
        return new Dn(t, r)
    }
    static createClient(t, r) {
        return new Dn(t, r)
    }
};

function S0(e, t) {
    const r = globalThis;
    let n = [],
        s;
    const {
        channel: o,
        handler: a
    } = T0({
        sendNotification: u => {
            s ? s.sendNotification(u) : n.push(u)
        }
    });
    let l;
    return (r.$$debugValueEditor_debugChannels ?? (r.$$debugValueEditor_debugChannels = {}))[e] = u => {
        l = t(), s = u;
        for (const c of n) u.sendNotification(c);
        return n = [], a
    }, E0.createClient(o, () => {
        if (!l) throw new Error("Not supported");
        return l
    })
}

function T0(e) {
    let t;
    return {
        channel: n => (t = n, {
            sendNotification: s => {
                e.sendNotification(s)
            },
            sendRequest: s => {
                throw new Error("not supported")
            }
        }),
        handler: {
            handleRequest: n => n.type === "notification" ? t?.handleNotification(n.data) : t?.handleRequest(n.data)
        }
    }
}

function Oi(e, t) {
    const r = e.split(`
`);
    let n = -1;
    for (const s of r.slice(1)) {
        if (n++, t && t.test(s)) continue;
        const o = O0(s);
        if (o) return o
    }
}

function O0(e) {
    const t = e.match(/\((.*):(\d+):(\d+)\)/);
    if (t) return {
        fileName: t[1],
        line: parseInt(t[2]),
        column: parseInt(t[3]),
        id: e
    };
    const r = e.match(/at ([^\(\)]*):(\d+):(\d+)/);
    if (r) return {
        fileName: r[1],
        line: parseInt(r[2]),
        column: parseInt(r[3]),
        id: e
    }
}
var I0 = class {
    constructor() {
        this._timeout = void 0
    }
    throttle(e, t) {
        this._timeout === void 0 && (this._timeout = setTimeout(() => {
            this._timeout = void 0, e()
        }, t))
    }
    dispose() {
        this._timeout !== void 0 && clearTimeout(this._timeout)
    }
};

function Ii(e, t) {
    for (const r in t) e[r] && typeof e[r] == "object" && t[r] && typeof t[r] == "object" ? Ii(e[r], t[r]) : e[r] = t[r]
}

function ki(e, t) {
    for (const r in t) t[r] === null ? delete e[r] : e[r] && typeof e[r] == "object" && t[r] && typeof t[r] == "object" ? ki(e[r], t[r]) : e[r] = t[r]
}
var Ri = class Kt {
    constructor() {
        this._declarationId = 0, this._instanceId = 0, this._declarations = new Map, this._instanceInfos = new WeakMap, this._aliveInstances = new Map, this._activeTransactions = new Set, this._channel = S0("observableDevTools", () => ({
            notifications: {
                setDeclarationIdFilter: t => {},
                logObservableValue: t => {
                    console.log("logObservableValue", t)
                },
                flushUpdates: () => {
                    this._flushUpdates()
                },
                resetUpdates: () => {
                    this._pendingChanges = null, this._channel.api.notifications.handleChange(this._fullState, !0)
                }
            },
            requests: {
                getDeclarations: () => {
                    const t = {};
                    for (const r of this._declarations.values()) t[r.id] = r;
                    return {
                        decls: t
                    }
                },
                getSummarizedInstances: () => null,
                getObservableValueInfo: t => ({
                    observers: [...this._aliveInstances.get(t).debugGetObservers()].map(n => this._formatObserver(n)).filter(It)
                }),
                getDerivedInfo: t => {
                    const r = this._aliveInstances.get(t);
                    return {
                        dependencies: [...r.debugGetState().dependencies].map(n => this._formatObservable(n)).filter(It),
                        observers: [...r.debugGetObservers()].map(n => this._formatObserver(n)).filter(It)
                    }
                },
                getAutorunInfo: t => ({
                    dependencies: [...this._aliveInstances.get(t).debugGetState().dependencies].map(n => this._formatObservable(n)).filter(It)
                }),
                getTransactionState: () => this.getTransactionState(),
                setValue: (t, r) => {
                    const n = this._aliveInstances.get(t);
                    if (n instanceof me) n.debugSetValue(r);
                    else if (n instanceof fn) n.debugSetValue(r);
                    else if (n instanceof Qe) n.debugSetValue(r);
                    else throw new Be("Observable is not supported");
                    const s = [...n.debugGetObservers()];
                    for (const o of s) o.beginUpdate(n);
                    for (const o of s) o.handleChange(n, void 0);
                    for (const o of s) o.endUpdate(n)
                },
                getValue: t => {
                    const r = this._aliveInstances.get(t);
                    if (r instanceof me) return Ve(r.debugGetState().value, 200);
                    if (r instanceof fn) return Ve(r.debugGetState().value, 200)
                }
            }
        })), this._pendingChanges = null, this._changeThrottler = new I0, this._fullState = {}, this._flushUpdates = () => {
            this._pendingChanges !== null && (this._channel.api.notifications.handleChange(this._pendingChanges, !1), this._pendingChanges = null)
        }
    }
    static getInstance() {
        return Kt._instance === void 0 && (Kt._instance = new Kt), Kt._instance
    }
    getTransactionState() {
        const t = [],
            r = [...this._activeTransactions];
        if (r.length === 0) return;
        const n = r.flatMap(o => o.debugGetUpdatingObservers() ?? []).map(o => o.observer),
            s = new Set;
        for (; n.length > 0;) {
            const o = n.shift();
            if (s.has(o)) continue;
            s.add(o);
            const a = this._getInfo(o, l => {
                s.has(l) || n.push(l)
            });
            a && t.push(a)
        }
        return {
            names: r.map(o => o.getDebugName() ?? "tx"),
            affected: t
        }
    }
    _getObservableInfo(t) {
        const r = this._instanceInfos.get(t);
        if (!r) {
            De(new Be("No info found"));
            return
        }
        return r
    }
    _getAutorunInfo(t) {
        const r = this._instanceInfos.get(t);
        if (!r) {
            De(new Be("No info found"));
            return
        }
        return r
    }
    _getInfo(t, r) {
        if (t instanceof me) {
            const n = [...t.debugGetObservers()];
            for (const u of n) r(u);
            const s = this._getObservableInfo(t);
            if (!s) return;
            const o = t.debugGetState(),
                a = {
                    name: t.debugName,
                    instanceId: s.instanceId,
                    updateCount: o.updateCount
                },
                l = [...s.changedObservables].map(u => this._instanceInfos.get(u)?.instanceId).filter(It);
            if (o.isComputing) return {
                ...a,
                type: "observable/derived",
                state: "updating",
                changedDependencies: l,
                initialComputation: !1
            };
            switch (o.state) {
                case 0:
                    return {
                        ...a, type: "observable/derived", state: "noValue"
                    };
                case 3:
                    return {
                        ...a, type: "observable/derived", state: "upToDate"
                    };
                case 2:
                    return {
                        ...a, type: "observable/derived", state: "stale", changedDependencies: l
                    };
                case 1:
                    return {
                        ...a, type: "observable/derived", state: "possiblyStale"
                    }
            }
        } else if (t instanceof pn) {
            const n = this._getAutorunInfo(t);
            if (!n) return;
            const s = {
                    name: t.debugName,
                    instanceId: n.instanceId,
                    updateCount: n.updateCount
                },
                o = [...n.changedObservables].map(a => this._instanceInfos.get(a).instanceId);
            if (t.debugGetState().isRunning) return {
                ...s,
                type: "autorun",
                state: "updating",
                changedDependencies: o
            };
            switch (t.debugGetState().state) {
                case 3:
                    return {
                        ...s, type: "autorun", state: "upToDate"
                    };
                case 2:
                    return {
                        ...s, type: "autorun", state: "stale", changedDependencies: o
                    };
                case 1:
                    return {
                        ...s, type: "autorun", state: "possiblyStale"
                    }
            }
        }
    }
    _formatObservable(t) {
        const r = this._getObservableInfo(t);
        if (r) return {
            name: t.debugName,
            instanceId: r.instanceId
        }
    }
    _formatObserver(t) {
        if (t instanceof me) return {
            name: t.toString(),
            instanceId: this._getObservableInfo(t)?.instanceId
        };
        const r = this._getAutorunInfo(t);
        if (r) return {
            name: t.toString(),
            instanceId: r.instanceId
        }
    }
    _handleChange(t) {
        ki(this._fullState, t), this._pendingChanges === null ? this._pendingChanges = t : Ii(this._pendingChanges, t), this._changeThrottler.throttle(this._flushUpdates, 10)
    }
    _getDeclarationId(t) {
        let r = !0,
            n;
        const s = Error;
        for (;;) {
            const a = s.stackTraceLimit;
            s.stackTraceLimit = r ? 6 : 20;
            const l = new Error().stack;
            s.stackTraceLimit = a;
            let u = Oi(l, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
            if (!r && !u && (u = Oi(l, /[/\\]observableInternal[/\\]|\.observe/)), u) {
                n = u;
                break
            }
            if (!r) {
                console.error("Could not find location for declaration", new Error().stack), n = {
                    fileName: "unknown",
                    line: 0,
                    column: 0,
                    id: "unknown"
                };
                break
            }
            r = !1
        }
        let o = this._declarations.get(n.id);
        return o === void 0 && (o = {
            id: this._declarationId++,
            type: t,
            url: n.fileName,
            line: n.line,
            column: n.column
        }, this._declarations.set(n.id, o), this._handleChange({
            decls: {
                [o.id]: o
            }
        })), o.id
    }
    handleObservableCreated(t) {
        const n = {
            declarationId: this._getDeclarationId("observable/value"),
            instanceId: this._instanceId++,
            listenerCount: 0,
            lastValue: void 0,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(t, n)
    }
    handleOnListenerCountChanged(t, r) {
        const n = this._getObservableInfo(t);
        if (n) {
            if (n.listenerCount === 0 && r > 0) {
                const s = t instanceof me ? "observable/derived" : "observable/value";
                this._aliveInstances.set(n.instanceId, t), this._handleChange({
                    instances: {
                        [n.instanceId]: {
                            instanceId: n.instanceId,
                            declarationId: n.declarationId,
                            formattedValue: n.lastValue,
                            type: s,
                            name: t.debugName
                        }
                    }
                })
            } else n.listenerCount > 0 && r === 0 && (this._handleChange({
                instances: {
                    [n.instanceId]: null
                }
            }), this._aliveInstances.delete(n.instanceId));
            n.listenerCount = r
        }
    }
    handleObservableUpdated(t, r) {
        if (t instanceof me) {
            this._handleDerivedRecomputed(t, r);
            return
        }
        const n = this._getObservableInfo(t);
        n && r.didChange && (n.lastValue = Ve(r.newValue, 30), n.listenerCount > 0 && this._handleChange({
            instances: {
                [n.instanceId]: {
                    formattedValue: n.lastValue
                }
            }
        }))
    }
    handleAutorunCreated(t) {
        const n = {
            declarationId: this._getDeclarationId("autorun"),
            instanceId: this._instanceId++,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(t, n), this._aliveInstances.set(n.instanceId, t), n && this._handleChange({
            instances: {
                [n.instanceId]: {
                    instanceId: n.instanceId,
                    declarationId: n.declarationId,
                    runCount: 0,
                    type: "autorun",
                    name: t.debugName
                }
            }
        })
    }
    handleAutorunDisposed(t) {
        const r = this._getAutorunInfo(t);
        r && (this._handleChange({
            instances: {
                [r.instanceId]: null
            }
        }), this._instanceInfos.delete(t), this._aliveInstances.delete(r.instanceId))
    }
    handleAutorunDependencyChanged(t, r, n) {
        const s = this._getAutorunInfo(t);
        s && s.changedObservables.add(r)
    }
    handleAutorunStarted(t) {}
    handleAutorunFinished(t) {
        const r = this._getAutorunInfo(t);
        r && (r.changedObservables.clear(), r.updateCount++, this._handleChange({
            instances: {
                [r.instanceId]: {
                    runCount: r.updateCount
                }
            }
        }))
    }
    handleDerivedDependencyChanged(t, r, n) {
        const s = this._getObservableInfo(t);
        s && s.changedObservables.add(r)
    }
    _handleDerivedRecomputed(t, r) {
        const n = this._getObservableInfo(t);
        if (!n) return;
        const s = Ve(r.newValue, 30);
        n.updateCount++, n.changedObservables.clear(), n.lastValue = s, n.listenerCount > 0 && this._handleChange({
            instances: {
                [n.instanceId]: {
                    formattedValue: s,
                    recomputationCount: n.updateCount
                }
            }
        })
    }
    handleDerivedCleared(t) {
        const r = this._getObservableInfo(t);
        r && (r.lastValue = void 0, r.changedObservables.clear(), r.listenerCount > 0 && this._handleChange({
            instances: {
                [r.instanceId]: {
                    formattedValue: void 0
                }
            }
        }))
    }
    handleBeginTransaction(t) {
        this._activeTransactions.add(t)
    }
    handleEndTransaction(t) {
        this._activeTransactions.delete(t)
    }
};
Ri._instance = void 0;
var k0 = Ri;
l0(v0);
var R0 = !1;
R0 && cn(new Ti), zr && zr.VSCODE_DEV_DEBUG && cn(k0.getInstance());
var Di;
(e => {
    function t(s = void 0) {
        return (o, a, l) => {
            const u = a.class;
            delete a.class;
            const c = a.ref;
            delete a.ref;
            const f = a.obsRef;
            return delete a.obsRef, new x0(o, c, f, s, u, a, l)
        }
    }

    function r(s, o = void 0) {
        const a = t(o);
        return (l, u) => a(s, l, u)
    }
    e.div = r("div"), e.elem = t(void 0), e.svg = r("svg", "http://www.w3.org/2000/svg"), e.svgElem = t("http://www.w3.org/2000/svg");

    function n() {
        let s;
        const o = function(a) {
            s = a
        };
        return Object.defineProperty(o, "element", {
            get() {
                if (!s) throw new Be("Make sure the ref is set before accessing the element. Maybe wrong initialization order?");
                return s
            }
        }), o
    }
    e.ref = n
})(Di || (Di = {}));
var D0 = class as {
    constructor(t, r, n, s, o, a, l) {
        this._deriveds = [], this._element = s ? document.createElementNS(s, t) : document.createElement(t), r && r(this._element), n && this._deriveds.push(m0((c, f) => {
            n(this), f.add({
                dispose: () => {
                    n(null)
                }
            })
        })), o && (Pi(o) ? this._deriveds.push(pr(this, c => {
            Li(this._element, Ni(o, c))
        })) : Li(this._element, Ni(o, void 0)));
        for (const [c, f] of Object.entries(a))
            if (c === "style")
                for (const [h, p] of Object.entries(f)) {
                    const m = gn(h);
                    Xe(p) ? this._deriveds.push(mn({
                        owner: this,
                        debugName: () => `set.style.${m}`
                    }, S => {
                        this._element.style.setProperty(m, Mi(p.read(S)))
                    })) : this._element.style.setProperty(m, Mi(p))
                } else c === "tabIndex" ? Xe(f) ? this._deriveds.push(pr(this, h => {
                    this._element.tabIndex = f.read(h)
                })) : this._element.tabIndex = f : c.startsWith("on") ? this._element[c] = f : Xe(f) ? this._deriveds.push(mn({
                    owner: this,
                    debugName: () => `set.${c}`
                }, h => {
                    Ui(this._element, c, f.read(h))
                })) : Ui(this._element, c, f);
        if (l) {
            let c = function(h, p) {
                return Xe(p) ? c(h, p.read(h)) : Array.isArray(p) ? p.flatMap(m => c(h, m)) : p instanceof as ? (h && p.readEffect(h), [p._element]) : p ? [p] : []
            };
            var u = c;
            const f = pr(this, h => {
                this._element.replaceChildren(...c(h, l))
            });
            this._deriveds.push(f), Fi(l) || f.get()
        }
    }
    readEffect(t) {
        for (const r of this._deriveds) r.read(t)
    }
    keepUpdated(t) {
        return pr(r => {
            this.readEffect(r)
        }).recomputeInitiallyAndOnChange(t), this
    }
    toDisposableLiveElement() {
        const t = new be;
        return this.keepUpdated(t), new L0(this._element, t)
    }
};

function Li(e, t) {
    B0(e) ? e.setAttribute("class", t) : e.className = t
}

function xi(e, t, r) {
    if (Xe(e)) {
        r(e.read(t));
        return
    }
    if (Array.isArray(e)) {
        for (const n of e) xi(n, t, r);
        return
    }
    r(e)
}

function Ni(e, t) {
    let r = "";
    return xi(e, t, n => {
        n && (r.length === 0 ? r = n : r += " " + n)
    }), r
}

function Pi(e) {
    return Xe(e) ? !0 : Array.isArray(e) ? e.some(t => Pi(t)) : !1
}

function Mi(e) {
    return typeof e == "number" ? e + "px" : e
}

function Fi(e) {
    return Xe(e) ? !0 : Array.isArray(e) ? e.some(t => Fi(t)) : !1
}
var L0 = class {
        constructor(e, t) {
            this.element = e, this._disposable = t
        }
        dispose() {
            this._disposable.dispose()
        }
    },
    x0 = class extends D0 {
        constructor() {
            super(...arguments), this._isHovered = void 0, this._didMouseMoveDuringHover = void 0
        }
        get element() {
            return this._element
        }
        get isHovered() {
            if (!this._isHovered) {
                const e = Ci("hovered", !1);
                this._element.addEventListener("mouseenter", t => e.set(!0, void 0)), this._element.addEventListener("mouseleave", t => e.set(!1, void 0)), this._isHovered = e
            }
            return this._isHovered
        }
        get didMouseMoveDuringHover() {
            if (!this._didMouseMoveDuringHover) {
                let e = !1;
                const t = Ci("didMouseMoveDuringHover", !1);
                this._element.addEventListener("mouseenter", r => {
                    e = !0
                }), this._element.addEventListener("mousemove", r => {
                    e && t.set(!0, void 0)
                }), this._element.addEventListener("mouseleave", r => {
                    e = !1, t.set(!1, void 0)
                }), this._didMouseMoveDuringHover = t
            }
            return this._didMouseMoveDuringHover
        }
    };

function Ui(e, t, r) {
    r == null ? e.removeAttribute(gn(t)) : e.setAttribute(gn(t), String(r))
}

function gn(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function Xe(e) {
    return e && typeof e == "object" && e.read !== void 0 && e.reportChanges !== void 0
}
var {
    registerWindow: Ec,
    getWindow: Vi,
    getDocument: Sc,
    getWindows: yn,
    getWindowsCount: N0,
    getWindowId: Bi,
    getWindowById: Tc,
    hasWindow: Oc,
    onDidRegisterWindow: Ic,
    onWillUnregisterWindow: kc,
    onDidUnregisterWindow: Rc
} = (function() {
    const e = new Map;
    $s(L, 1);
    const t = {
        window: L,
        disposables: new be
    };
    e.set(L.vscodeWindowId, t);
    const r = new Z,
        n = new Z,
        s = new Z;

    function o(a, l) {
        return (typeof a == "number" ? e.get(a) : void 0) ?? (l ? t : void 0)
    }
    return {
        onDidRegisterWindow: r.event,
        onWillUnregisterWindow: s.event,
        onDidUnregisterWindow: n.event,
        registerWindow(a) {
            if (e.has(a.vscodeWindowId)) return Le.None;
            const l = new be,
                u = {
                    window: a,
                    disposables: l.add(new be)
                };
            return e.set(a.vscodeWindowId, u), l.add(_e(() => {
                e.delete(a.vscodeWindowId), n.fire(a)
            })), l.add(M0(a, K0.BEFORE_UNLOAD, () => {
                s.fire(a)
            })), r.fire(u), l
        },
        getWindows() {
            return e.values()
        },
        getWindowsCount() {
            return e.size
        },
        getWindowId(a) {
            return a.vscodeWindowId
        },
        hasWindow(a) {
            return e.has(a)
        },
        getWindowById: o,
        getWindow(a) {
            const l = a;
            if (l?.ownerDocument?.defaultView) return l.ownerDocument.defaultView.window;
            const u = a;
            return u?.view ? u.view.window : L
        },
        getDocument(a) {
            return Vi(a).document
        }
    }
})(), P0 = class {
    constructor(e, t, r, n) {
        this._node = e, this._type = t, this._handler = r, this._options = n || !1, this._node.addEventListener(this._type, this._handler, this._options)
    }
    dispose() {
        this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null)
    }
};

function M0(e, t, r, n) {
    return new P0(e, t, r, n)
}
var F0, Ki, vn = class {
    constructor(e, t = 0) {
        this._runner = e, this.priority = t, this._canceled = !1
    }
    dispose() {
        this._canceled = !0
    }
    execute() {
        if (!this._canceled) try {
            this._runner()
        } catch (e) {
            De(e)
        }
    }
    static sort(e, t) {
        return t.priority - e.priority
    }
};
(function() {
    const e = new Map,
        t = new Map,
        r = new Map,
        n = new Map,
        s = o => {
            r.set(o, !1);
            const a = e.get(o) ?? [];
            for (t.set(o, a), e.set(o, []), n.set(o, !0); a.length > 0;) a.sort(vn.sort), a.shift().execute();
            n.set(o, !1)
        };
    Ki = (o, a, l = 0) => {
        const u = Bi(o),
            c = new vn(a, l);
        let f = e.get(u);
        return f || (f = [], e.set(u, f)), f.push(c), r.get(u) || (r.set(u, !0), o.requestAnimationFrame(() => s(u))), c
    }, F0 = (o, a, l) => {
        const u = Bi(o);
        if (n.get(u)) {
            const c = new vn(a, l);
            let f = t.get(u);
            return f || (f = [], t.set(u, f)), f.push(c), c
        } else return Ki(o, a, l)
    }
})();
var $i = class _r {
    constructor(t, r) {
        this.width = t, this.height = r
    }
    with(t = this.width, r = this.height) {
        return t !== this.width || r !== this.height ? new _r(t, r) : this
    }
    static is(t) {
        return typeof t == "object" && typeof t.height == "number" && typeof t.width == "number"
    }
    static lift(t) {
        return t instanceof _r ? t : new _r(t.width, t.height)
    }
    static equals(t, r) {
        return t === r ? !0 : !t || !r ? !1 : t.width === r.width && t.height === r.height
    }
};
$i.None = new $i(0, 0);

function U0() {
    return N0() <= 1 ? L.document : Array.from(yn()).map(({
        window: t
    }) => t.document).find(t => t.hasFocus()) ?? L.document
}

function _n() {
    return U0().defaultView?.window ?? L
}
var V0 = new class {
    constructor() {
        this.mutationObservers = new Map
    }
    observe(e, t, r) {
        let n = this.mutationObservers.get(e);
        n || (n = new Map, this.mutationObservers.set(e, n));
        const s = Wa(r);
        let o = n.get(s);
        if (o) o.users += 1;
        else {
            const a = new Z,
                l = new MutationObserver(c => a.fire(c));
            l.observe(e, r);
            const u = o = {
                users: 1,
                observer: l,
                onDidMutate: a.event
            };
            t.add(_e(() => {
                u.users -= 1, u.users === 0 && (a.dispose(), l.disconnect(), n?.delete(s), n?.size === 0 && this.mutationObservers.delete(e))
            })), n.set(s, o)
        }
        return o.onDidMutate
    }
};

function B0(e) {
    return e instanceof SVGElement || e instanceof Vi(e).SVGElement
}
var K0 = {
        CLICK: "click",
        AUXCLICK: "auxclick",
        DBLCLICK: "dblclick",
        MOUSE_UP: "mouseup",
        MOUSE_DOWN: "mousedown",
        MOUSE_OVER: "mouseover",
        MOUSE_MOVE: "mousemove",
        MOUSE_OUT: "mouseout",
        MOUSE_ENTER: "mouseenter",
        MOUSE_LEAVE: "mouseleave",
        MOUSE_WHEEL: "wheel",
        POINTER_UP: "pointerup",
        POINTER_DOWN: "pointerdown",
        POINTER_MOVE: "pointermove",
        POINTER_LEAVE: "pointerleave",
        CONTEXT_MENU: "contextmenu",
        WHEEL: "wheel",
        KEY_DOWN: "keydown",
        KEY_PRESS: "keypress",
        KEY_UP: "keyup",
        LOAD: "load",
        BEFORE_UNLOAD: "beforeunload",
        UNLOAD: "unload",
        PAGE_SHOW: "pageshow",
        PAGE_HIDE: "pagehide",
        PASTE: "paste",
        ABORT: "abort",
        ERROR: "error",
        RESIZE: "resize",
        SCROLL: "scroll",
        FULLSCREEN_CHANGE: "fullscreenchange",
        WK_FULLSCREEN_CHANGE: "webkitfullscreenchange",
        SELECT: "select",
        CHANGE: "change",
        SUBMIT: "submit",
        RESET: "reset",
        FOCUS: "focus",
        FOCUS_IN: "focusin",
        FOCUS_OUT: "focusout",
        BLUR: "blur",
        INPUT: "input",
        STORAGE: "storage",
        DRAG_START: "dragstart",
        DRAG: "drag",
        DRAG_ENTER: "dragenter",
        DRAG_LEAVE: "dragleave",
        DRAG_OVER: "dragover",
        DROP: "drop",
        DRAG_END: "dragend",
        ANIMATION_START: Fr ? "webkitAnimationStart" : "animationstart",
        ANIMATION_END: Fr ? "webkitAnimationEnd" : "animationend",
        ANIMATION_ITERATION: Fr ? "webkitAnimationIteration" : "animationiteration"
    },
    $0 = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;

function Wi(e, t, r, ...n) {
    const s = $0.exec(t);
    if (!s) throw new Error("Bad use of emmet");
    const o = s[1] || "div";
    let a;
    return e !== "http://www.w3.org/1999/xhtml" ? a = document.createElementNS(e, o) : a = document.createElement(o), s[3] && (a.id = s[3]), s[4] && (a.className = s[4].replace(/\./g, " ").trim()), r && Object.entries(r).forEach(([l, u]) => {
        typeof u > "u" || (/^on\w+$/.test(l) ? a[l] = u : l === "selected" ? u && a.setAttribute(l, "true") : a.setAttribute(l, u))
    }), a.append(...n), a
}

function W0(e, t, ...r) {
    return Wi("http://www.w3.org/1999/xhtml", e, t, ...r)
}
W0.SVG = function(e, t, ...r) {
    return Wi("http://www.w3.org/2000/svg", e, t, ...r)
}, K1.setPreferredWebSchema(/^https:/.test(L.location.href) ? "https" : "http");
var Dc = [G.http, G.https, G.command],
    Lc = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "kbd", "label", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]),
    xc = Object.freeze({
        ALLOWED_TAGS: ["a", "button", "blockquote", "code", "div", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "input", "label", "li", "p", "pre", "select", "small", "span", "strong", "textarea", "ul", "ol"],
        ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", "id", "role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"],
        RETURN_DOM: !1,
        RETURN_DOM_FRAGMENT: !1,
        RETURN_TRUSTED_TYPE: !0
    }),
    H0 = new Map;

function z0(e = L.document.head, t, r) {
    const n = document.createElement("style");
    if (n.type = "text/css", n.media = "screen", t?.(n), e.appendChild(n), r && r.add(_e(() => n.remove())), e === L.document.head) {
        const s = new Set;
        H0.set(n, s);
        for (const {
                window: o,
                disposables: a
            }
            of yn()) {
            if (o === L) continue;
            const l = a.add(j0(n, s, o));
            r?.add(l)
        }
    }
    return n
}

function j0(e, t, r) {
    const n = new be,
        s = e.cloneNode(!0);
    r.document.head.appendChild(s), n.add(_e(() => s.remove()));
    for (const o of G0(e)) s.sheet?.insertRule(o.cssText, s.sheet?.cssRules.length);
    return n.add(V0.observe(e, n, {
        childList: !0
    })(() => {
        s.textContent = e.textContent
    })), t.add(s), n.add(_e(() => t.delete(s))), n
}

function G0(e) {
    return e?.sheet?.rules ? e.sheet.rules : e?.sheet?.cssRules ? e.sheet.cssRules : []
}
var vt = globalThis.vscode,
    Ft = vt.ipcRenderer,
    Nc = vt.ipcMessagePort,
    q0 = vt.webFrame,
    Pc = vt.process,
    Mc = vt.context,
    Fc = vt.webUtils;

function Uc(e) {
    return e
}

function Hi(e) {
    const t = e.replaceAll(/[^_\-a-z0-9]/gi, "");
    return t !== e && console.warn(`CSS ident value ${e} modified to ${t} to be safe for CSS`), t
}

function He(e) {
    return `'${e.replaceAll(/'/g,"\\000027")}'`
}

function Z0(e) {
    return e ? se`url('${CSS.escape(wa.uriToBrowserUri(e).toString(!0))}')` : "url('')"
}

function gr(e, t = !1) {
    const r = CSS.escape(e);
    return !t && r !== e && console.warn(`CSS class name ${e} modified to ${r} to be safe for CSS`), r
}

function se(e, ...t) {
    return e.reduce((r, n, s) => {
        const o = t[s] || "";
        return r + n + o
    }, "")
}
var bn = class {
        constructor() {
            this._parts = []
        }
        push(...e) {
            this._parts.push(...e)
        }
        join(e = `
`) {
            return this._parts.join(e)
        }
    },
    wn = Object.create(null);

function i(e, t) {
    if (Ot(t)) {
        const r = wn[t];
        if (r === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
        t = r
    }
    return wn[e] = t, {
        id: e
    }
}

function Y0() {
    return wn
}
var Q0 = {
        semantic: i("semantic", 62e3),
        githubCopilot: i("github-copilot", 62001),
        plusCircle: i("plus-circle", 62002),
        smileySad: i("smiley-sad", 62003),
        smileyHappy: i("smiley-happy", 62004),
        smileyMedium: i("smiley-medium", 62005),
        sparkleStrikethrough: i("sparkle-strikethrough", 62006),
        keyPlusSparkle: i("key-plus-sparkle", 62007),
        paperclip: i("paperclip", 60500),
        atSign: i("at-sign", 60501),
        image: i("image", 60502),
        logo: i("logo", 60503),
        sparkleTwo: i("sparkle-two", 60504),
        logoSlash: i("logo-slash", 60505),
        arrowsExpand: i("arrows-expand", 60506),
        arrowsContract: i("arrows-contract", 60507),
        expandDiffUp: i("expand-diff-up", 60508),
        expandDiffDown: i("expand-diff-down", 60509),
        add: i("add", 6e4),
        plus: i("plus", 6e4),
        gistNew: i("gist-new", 6e4),
        repoCreate: i("repo-create", 6e4),
        lightbulb: i("lightbulb", 60001),
        lightBulb: i("light-bulb", 60001),
        repo: i("repo", 60002),
        repoDelete: i("repo-delete", 60002),
        gistFork: i("gist-fork", 60003),
        repoForked: i("repo-forked", 60003),
        gitPullRequest: i("git-pull-request", 60004),
        gitPullRequestAbandoned: i("git-pull-request-abandoned", 60004),
        recordKeys: i("record-keys", 60005),
        keyboard: i("keyboard", 60005),
        tag: i("tag", 60006),
        gitPullRequestLabel: i("git-pull-request-label", 60006),
        tagAdd: i("tag-add", 60006),
        tagRemove: i("tag-remove", 60006),
        person: i("person", 60007),
        personFollow: i("person-follow", 60007),
        personOutline: i("person-outline", 60007),
        personFilled: i("person-filled", 60007),
        gitBranch: i("git-branch", 60008),
        gitBranchCreate: i("git-branch-create", 60008),
        gitBranchDelete: i("git-branch-delete", 60008),
        sourceControl: i("source-control", 60008),
        mirror: i("mirror", 60009),
        mirrorPublic: i("mirror-public", 60009),
        star: i("star", 60010),
        starAdd: i("star-add", 60010),
        starDelete: i("star-delete", 60010),
        starEmpty: i("star-empty", 60010),
        comment: i("comment", 60011),
        commentAdd: i("comment-add", 60011),
        alert: i("alert", 60012),
        warning: i("warning", 60012),
        search: i("search", 60013),
        searchSave: i("search-save", 60013),
        logOut: i("log-out", 60014),
        signOut: i("sign-out", 60014),
        logIn: i("log-in", 60015),
        signIn: i("sign-in", 60015),
        eye: i("eye", 60016),
        eyeUnwatch: i("eye-unwatch", 60016),
        eyeWatch: i("eye-watch", 60016),
        circleFilled: i("circle-filled", 60017),
        primitiveDot: i("primitive-dot", 60017),
        closeDirty: i("close-dirty", 60017),
        debugBreakpoint: i("debug-breakpoint", 60017),
        debugBreakpointDisabled: i("debug-breakpoint-disabled", 60017),
        debugHint: i("debug-hint", 60017),
        terminalDecorationSuccess: i("terminal-decoration-success", 60017),
        primitiveSquare: i("primitive-square", 60018),
        edit: i("edit", 60019),
        pencil: i("pencil", 60019),
        info: i("info", 60020),
        issueOpened: i("issue-opened", 60020),
        gistPrivate: i("gist-private", 60021),
        gitForkPrivate: i("git-fork-private", 60021),
        lock: i("lock", 60021),
        mirrorPrivate: i("mirror-private", 60021),
        close: i("close", 60022),
        removeClose: i("remove-close", 60022),
        x: i("x", 60022),
        repoSync: i("repo-sync", 60023),
        sync: i("sync", 60023),
        clone: i("clone", 60024),
        desktopDownload: i("desktop-download", 60024),
        beaker: i("beaker", 60025),
        microscope: i("microscope", 60025),
        vm: i("vm", 60026),
        deviceDesktop: i("device-desktop", 60026),
        file: i("file", 60027),
        fileText: i("file-text", 60027),
        more: i("more", 60028),
        ellipsis: i("ellipsis", 60028),
        kebabHorizontal: i("kebab-horizontal", 60028),
        mailReply: i("mail-reply", 60029),
        reply: i("reply", 60029),
        organization: i("organization", 60030),
        organizationFilled: i("organization-filled", 60030),
        organizationOutline: i("organization-outline", 60030),
        newFile: i("new-file", 60031),
        fileAdd: i("file-add", 60031),
        newFolder: i("new-folder", 60032),
        fileDirectoryCreate: i("file-directory-create", 60032),
        trash: i("trash", 60033),
        trashcan: i("trashcan", 60033),
        history: i("history", 60034),
        clock: i("clock", 60034),
        folder: i("folder", 60035),
        fileDirectory: i("file-directory", 60035),
        symbolFolder: i("symbol-folder", 60035),
        logoGithub: i("logo-github", 60036),
        markGithub: i("mark-github", 60036),
        github: i("github", 60036),
        terminal: i("terminal", 60037),
        console: i("console", 60037),
        repl: i("repl", 60037),
        zap: i("zap", 60038),
        symbolEvent: i("symbol-event", 60038),
        error: i("error", 60039),
        stop: i("stop", 60039),
        variable: i("variable", 60040),
        symbolVariable: i("symbol-variable", 60040),
        array: i("array", 60042),
        symbolArray: i("symbol-array", 60042),
        symbolModule: i("symbol-module", 60043),
        symbolPackage: i("symbol-package", 60043),
        symbolNamespace: i("symbol-namespace", 60043),
        symbolObject: i("symbol-object", 60043),
        symbolMethod: i("symbol-method", 60044),
        symbolFunction: i("symbol-function", 60044),
        symbolConstructor: i("symbol-constructor", 60044),
        symbolBoolean: i("symbol-boolean", 60047),
        symbolNull: i("symbol-null", 60047),
        symbolNumeric: i("symbol-numeric", 60048),
        symbolNumber: i("symbol-number", 60048),
        symbolStructure: i("symbol-structure", 60049),
        symbolStruct: i("symbol-struct", 60049),
        symbolParameter: i("symbol-parameter", 60050),
        symbolTypeParameter: i("symbol-type-parameter", 60050),
        symbolKey: i("symbol-key", 60051),
        symbolText: i("symbol-text", 60051),
        symbolReference: i("symbol-reference", 60052),
        goToFile: i("go-to-file", 60052),
        symbolEnum: i("symbol-enum", 60053),
        symbolValue: i("symbol-value", 60053),
        symbolRuler: i("symbol-ruler", 60054),
        symbolUnit: i("symbol-unit", 60054),
        activateBreakpoints: i("activate-breakpoints", 60055),
        archive: i("archive", 60056),
        arrowBoth: i("arrow-both", 60057),
        arrowDown: i("arrow-down", 60058),
        arrowLeft: i("arrow-left", 60059),
        arrowRight: i("arrow-right", 60060),
        arrowSmallDown: i("arrow-small-down", 60061),
        arrowSmallLeft: i("arrow-small-left", 60062),
        arrowSmallRight: i("arrow-small-right", 60063),
        arrowSmallUp: i("arrow-small-up", 60064),
        arrowUp: i("arrow-up", 60065),
        bell: i("bell", 60066),
        bold: i("bold", 60067),
        book: i("book", 60068),
        bookmark: i("bookmark", 60069),
        debugBreakpointConditionalUnverified: i("debug-breakpoint-conditional-unverified", 60070),
        debugBreakpointConditional: i("debug-breakpoint-conditional", 60071),
        debugBreakpointConditionalDisabled: i("debug-breakpoint-conditional-disabled", 60071),
        debugBreakpointDataUnverified: i("debug-breakpoint-data-unverified", 60072),
        debugBreakpointData: i("debug-breakpoint-data", 60073),
        debugBreakpointDataDisabled: i("debug-breakpoint-data-disabled", 60073),
        debugBreakpointLogUnverified: i("debug-breakpoint-log-unverified", 60074),
        debugBreakpointLog: i("debug-breakpoint-log", 60075),
        debugBreakpointLogDisabled: i("debug-breakpoint-log-disabled", 60075),
        briefcase: i("briefcase", 60076),
        broadcast: i("broadcast", 60077),
        browser: i("browser", 60078),
        bug: i("bug", 60079),
        calendar: i("calendar", 60080),
        caseSensitive: i("case-sensitive", 60081),
        check: i("check", 60082),
        checklist: i("checklist", 60083),
        chevronDown: i("chevron-down", 60084),
        chevronLeft: i("chevron-left", 60085),
        chevronRight: i("chevron-right", 60086),
        chevronUp: i("chevron-up", 60087),
        chromeClose: i("chrome-close", 60088),
        chromeMaximize: i("chrome-maximize", 60089),
        chromeMinimize: i("chrome-minimize", 60090),
        chromeRestore: i("chrome-restore", 60091),
        circleOutline: i("circle-outline", 60092),
        circle: i("circle", 60092),
        debugBreakpointUnverified: i("debug-breakpoint-unverified", 60092),
        terminalDecorationIncomplete: i("terminal-decoration-incomplete", 60092),
        circleSlash: i("circle-slash", 60093),
        circuitBoard: i("circuit-board", 60094),
        clearAll: i("clear-all", 60095),
        clippy: i("clippy", 60096),
        closeAll: i("close-all", 60097),
        cloudDownload: i("cloud-download", 60098),
        cloudUpload: i("cloud-upload", 60099),
        code: i("code", 60100),
        collapseAll: i("collapse-all", 60101),
        colorMode: i("color-mode", 60102),
        commentDiscussion: i("comment-discussion", 60103),
        creditCard: i("credit-card", 60105),
        dash: i("dash", 60108),
        dashboard: i("dashboard", 60109),
        database: i("database", 60110),
        debugContinue: i("debug-continue", 60111),
        debugDisconnect: i("debug-disconnect", 60112),
        debugPause: i("debug-pause", 60113),
        debugRestart: i("debug-restart", 60114),
        debugStart: i("debug-start", 60115),
        debugStepInto: i("debug-step-into", 60116),
        debugStepOut: i("debug-step-out", 60117),
        debugStepOver: i("debug-step-over", 60118),
        debugStop: i("debug-stop", 60119),
        debug: i("debug", 60120),
        deviceCameraVideo: i("device-camera-video", 60121),
        deviceCamera: i("device-camera", 60122),
        deviceMobile: i("device-mobile", 60123),
        diffAdded: i("diff-added", 60124),
        diffIgnored: i("diff-ignored", 60125),
        diffModified: i("diff-modified", 60126),
        diffRemoved: i("diff-removed", 60127),
        diffRenamed: i("diff-renamed", 60128),
        diff: i("diff", 60129),
        diffSidebyside: i("diff-sidebyside", 60129),
        discard: i("discard", 60130),
        editorLayout: i("editor-layout", 60131),
        emptyWindow: i("empty-window", 60132),
        exclude: i("exclude", 60133),
        extensions: i("extensions", 60134),
        eyeClosed: i("eye-closed", 60135),
        fileBinary: i("file-binary", 60136),
        fileCode: i("file-code", 60137),
        fileMedia: i("file-media", 60138),
        filePdf: i("file-pdf", 60139),
        fileSubmodule: i("file-submodule", 60140),
        fileSymlinkDirectory: i("file-symlink-directory", 60141),
        fileSymlinkFile: i("file-symlink-file", 60142),
        fileZip: i("file-zip", 60143),
        files: i("files", 60144),
        filter: i("filter", 60145),
        flame: i("flame", 60146),
        foldDown: i("fold-down", 60147),
        foldUp: i("fold-up", 60148),
        fold: i("fold", 60149),
        folderActive: i("folder-active", 60150),
        folderOpened: i("folder-opened", 60151),
        gear: i("gear", 60152),
        gift: i("gift", 60153),
        gistSecret: i("gist-secret", 60154),
        gist: i("gist", 60155),
        gitCommit: i("git-commit", 60156),
        gitCompare: i("git-compare", 60157),
        compareChanges: i("compare-changes", 60157),
        gitMerge: i("git-merge", 60158),
        githubAction: i("github-action", 60159),
        githubAlt: i("github-alt", 60160),
        globe: i("globe", 60161),
        grabber: i("grabber", 60162),
        graph: i("graph", 60163),
        gripper: i("gripper", 60164),
        heart: i("heart", 60165),
        home: i("home", 60166),
        horizontalRule: i("horizontal-rule", 60167),
        hubot: i("hubot", 60168),
        inbox: i("inbox", 60169),
        issueReopened: i("issue-reopened", 60171),
        issues: i("issues", 60172),
        italic: i("italic", 60173),
        jersey: i("jersey", 60174),
        json: i("json", 60175),
        kebabVertical: i("kebab-vertical", 60176),
        key: i("key", 60177),
        law: i("law", 60178),
        lightbulbAutofix: i("lightbulb-autofix", 60179),
        linkExternal: i("link-external", 60180),
        link: i("link", 60181),
        listOrdered: i("list-ordered", 60182),
        listUnordered: i("list-unordered", 60183),
        liveShare: i("live-share", 60184),
        loading: i("loading", 60185),
        location: i("location", 60186),
        mailRead: i("mail-read", 60187),
        mail: i("mail", 60188),
        markdown: i("markdown", 60189),
        megaphone: i("megaphone", 60190),
        mention: i("mention", 60191),
        milestone: i("milestone", 60192),
        gitPullRequestMilestone: i("git-pull-request-milestone", 60192),
        mortarBoard: i("mortar-board", 60193),
        move: i("move", 60194),
        multipleWindows: i("multiple-windows", 60195),
        mute: i("mute", 60196),
        noNewline: i("no-newline", 60197),
        note: i("note", 60198),
        octoface: i("octoface", 60199),
        openPreview: i("open-preview", 60200),
        package: i("package", 60201),
        paintcan: i("paintcan", 60202),
        pin: i("pin", 60203),
        play: i("play", 60204),
        run: i("run", 60204),
        plug: i("plug", 60205),
        preserveCase: i("preserve-case", 60206),
        preview: i("preview", 60207),
        project: i("project", 60208),
        pulse: i("pulse", 60209),
        question: i("question", 60210),
        quote: i("quote", 60211),
        radioTower: i("radio-tower", 60212),
        reactions: i("reactions", 60213),
        references: i("references", 60214),
        refresh: i("refresh", 60215),
        regex: i("regex", 60216),
        remoteExplorer: i("remote-explorer", 60217),
        remote: i("remote", 60218),
        remove: i("remove", 60219),
        replaceAll: i("replace-all", 60220),
        replace: i("replace", 60221),
        repoClone: i("repo-clone", 60222),
        repoForcePush: i("repo-force-push", 60223),
        repoPull: i("repo-pull", 60224),
        repoPush: i("repo-push", 60225),
        report: i("report", 60226),
        requestChanges: i("request-changes", 60227),
        rocket: i("rocket", 60228),
        rootFolderOpened: i("root-folder-opened", 60229),
        rootFolder: i("root-folder", 60230),
        rss: i("rss", 60231),
        ruby: i("ruby", 60232),
        saveAll: i("save-all", 60233),
        saveAs: i("save-as", 60234),
        save: i("save", 60235),
        screenFull: i("screen-full", 60236),
        screenNormal: i("screen-normal", 60237),
        searchStop: i("search-stop", 60238),
        server: i("server", 60240),
        settingsGear: i("settings-gear", 60241),
        settings: i("settings", 60242),
        shield: i("shield", 60243),
        smiley: i("smiley", 60244),
        sortPrecedence: i("sort-precedence", 60245),
        splitHorizontal: i("split-horizontal", 60246),
        splitVertical: i("split-vertical", 60247),
        squirrel: i("squirrel", 60248),
        starFull: i("star-full", 60249),
        starHalf: i("star-half", 60250),
        symbolClass: i("symbol-class", 60251),
        symbolColor: i("symbol-color", 60252),
        symbolConstant: i("symbol-constant", 60253),
        symbolEnumMember: i("symbol-enum-member", 60254),
        symbolField: i("symbol-field", 60255),
        symbolFile: i("symbol-file", 60256),
        symbolInterface: i("symbol-interface", 60257),
        symbolKeyword: i("symbol-keyword", 60258),
        symbolMisc: i("symbol-misc", 60259),
        symbolOperator: i("symbol-operator", 60260),
        symbolProperty: i("symbol-property", 60261),
        wrench: i("wrench", 60261),
        wrenchSubaction: i("wrench-subaction", 60261),
        symbolSnippet: i("symbol-snippet", 60262),
        tasklist: i("tasklist", 60263),
        telescope: i("telescope", 60264),
        textSize: i("text-size", 60265),
        threeBars: i("three-bars", 60266),
        thumbsdown: i("thumbsdown", 60267),
        thumbsup: i("thumbsup", 60268),
        tools: i("tools", 60269),
        triangleDown: i("triangle-down", 60270),
        triangleLeft: i("triangle-left", 60271),
        triangleRight: i("triangle-right", 60272),
        triangleUp: i("triangle-up", 60273),
        twitter: i("twitter", 60274),
        unfold: i("unfold", 60275),
        unlock: i("unlock", 60276),
        unmute: i("unmute", 60277),
        unverified: i("unverified", 60278),
        verified: i("verified", 60279),
        versions: i("versions", 60280),
        vmActive: i("vm-active", 60281),
        vmOutline: i("vm-outline", 60282),
        vmRunning: i("vm-running", 60283),
        watch: i("watch", 60284),
        whitespace: i("whitespace", 60285),
        wholeWord: i("whole-word", 60286),
        window: i("window", 60287),
        wordWrap: i("word-wrap", 60288),
        zoomIn: i("zoom-in", 60289),
        zoomOut: i("zoom-out", 60290),
        listFilter: i("list-filter", 60291),
        listFlat: i("list-flat", 60292),
        listSelection: i("list-selection", 60293),
        selection: i("selection", 60293),
        listTree: i("list-tree", 60294),
        debugBreakpointFunctionUnverified: i("debug-breakpoint-function-unverified", 60295),
        debugBreakpointFunction: i("debug-breakpoint-function", 60296),
        debugBreakpointFunctionDisabled: i("debug-breakpoint-function-disabled", 60296),
        debugStackframeActive: i("debug-stackframe-active", 60297),
        circleSmallFilled: i("circle-small-filled", 60298),
        debugStackframeDot: i("debug-stackframe-dot", 60298),
        terminalDecorationMark: i("terminal-decoration-mark", 60298),
        debugStackframe: i("debug-stackframe", 60299),
        debugStackframeFocused: i("debug-stackframe-focused", 60299),
        debugBreakpointUnsupported: i("debug-breakpoint-unsupported", 60300),
        symbolString: i("symbol-string", 60301),
        debugReverseContinue: i("debug-reverse-continue", 60302),
        debugStepBack: i("debug-step-back", 60303),
        debugRestartFrame: i("debug-restart-frame", 60304),
        debugAlt: i("debug-alt", 60305),
        callIncoming: i("call-incoming", 60306),
        callOutgoing: i("call-outgoing", 60307),
        menu: i("menu", 60308),
        expandAll: i("expand-all", 60309),
        feedback: i("feedback", 60310),
        gitPullRequestReviewer: i("git-pull-request-reviewer", 60310),
        groupByRefType: i("group-by-ref-type", 60311),
        ungroupByRefType: i("ungroup-by-ref-type", 60312),
        account: i("account", 60313),
        gitPullRequestAssignee: i("git-pull-request-assignee", 60313),
        bellDot: i("bell-dot", 60314),
        debugConsole: i("debug-console", 60315),
        library: i("library", 60316),
        output: i("output", 60317),
        runAll: i("run-all", 60318),
        syncIgnored: i("sync-ignored", 60319),
        pinned: i("pinned", 60320),
        githubInverted: i("github-inverted", 60321),
        serverProcess: i("server-process", 60322),
        serverEnvironment: i("server-environment", 60323),
        pass: i("pass", 60324),
        issueClosed: i("issue-closed", 60324),
        stopCircle: i("stop-circle", 60325),
        playCircle: i("play-circle", 60326),
        record: i("record", 60327),
        debugAltSmall: i("debug-alt-small", 60328),
        vmConnect: i("vm-connect", 60329),
        cloud: i("cloud", 60330),
        merge: i("merge", 60331),
        export: i("export", 60332),
        graphLeft: i("graph-left", 60333),
        magnet: i("magnet", 60334),
        notebook: i("notebook", 60335),
        redo: i("redo", 60336),
        checkAll: i("check-all", 60337),
        pinnedDirty: i("pinned-dirty", 60338),
        passFilled: i("pass-filled", 60339),
        circleLargeFilled: i("circle-large-filled", 60340),
        circleLarge: i("circle-large", 60341),
        circleLargeOutline: i("circle-large-outline", 60341),
        combine: i("combine", 60342),
        gather: i("gather", 60342),
        table: i("table", 60343),
        variableGroup: i("variable-group", 60344),
        typeHierarchy: i("type-hierarchy", 60345),
        typeHierarchySub: i("type-hierarchy-sub", 60346),
        typeHierarchySuper: i("type-hierarchy-super", 60347),
        gitPullRequestCreate: i("git-pull-request-create", 60348),
        runAbove: i("run-above", 60349),
        runBelow: i("run-below", 60350),
        notebookTemplate: i("notebook-template", 60351),
        debugRerun: i("debug-rerun", 60352),
        workspaceTrusted: i("workspace-trusted", 60353),
        workspaceUntrusted: i("workspace-untrusted", 60354),
        workspaceUnknown: i("workspace-unknown", 60355),
        terminalCmd: i("terminal-cmd", 60356),
        terminalDebian: i("terminal-debian", 60357),
        terminalLinux: i("terminal-linux", 60358),
        terminalPowershell: i("terminal-powershell", 60359),
        terminalTmux: i("terminal-tmux", 60360),
        terminalUbuntu: i("terminal-ubuntu", 60361),
        terminalBash: i("terminal-bash", 60362),
        arrowSwap: i("arrow-swap", 60363),
        copy: i("copy", 60364),
        personAdd: i("person-add", 60365),
        filterFilled: i("filter-filled", 60366),
        wand: i("wand", 60367),
        debugLineByLine: i("debug-line-by-line", 60368),
        inspect: i("inspect", 60369),
        layers: i("layers", 60370),
        layersDot: i("layers-dot", 60371),
        layersActive: i("layers-active", 60372),
        compass: i("compass", 60373),
        compassDot: i("compass-dot", 60374),
        compassActive: i("compass-active", 60375),
        azure: i("azure", 60376),
        issueDraft: i("issue-draft", 60377),
        gitPullRequestClosed: i("git-pull-request-closed", 60378),
        gitPullRequestDraft: i("git-pull-request-draft", 60379),
        debugAll: i("debug-all", 60380),
        debugCoverage: i("debug-coverage", 60381),
        runErrors: i("run-errors", 60382),
        folderLibrary: i("folder-library", 60383),
        debugContinueSmall: i("debug-continue-small", 60384),
        beakerStop: i("beaker-stop", 60385),
        graphLine: i("graph-line", 60386),
        graphScatter: i("graph-scatter", 60387),
        pieChart: i("pie-chart", 60388),
        bracket: i("bracket", 60175),
        bracketDot: i("bracket-dot", 60389),
        bracketError: i("bracket-error", 60390),
        lockSmall: i("lock-small", 60391),
        azureDevops: i("azure-devops", 60392),
        verifiedFilled: i("verified-filled", 60393),
        newline: i("newline", 60394),
        layout: i("layout", 60395),
        layoutActivitybarLeft: i("layout-activitybar-left", 60396),
        layoutActivitybarRight: i("layout-activitybar-right", 60397),
        layoutPanelLeft: i("layout-panel-left", 60398),
        layoutPanelCenter: i("layout-panel-center", 60399),
        layoutPanelJustify: i("layout-panel-justify", 60400),
        layoutPanelRight: i("layout-panel-right", 60401),
        layoutPanel: i("layout-panel", 60402),
        layoutSidebarLeft: i("layout-sidebar-left", 60403),
        layoutSidebarRight: i("layout-sidebar-right", 60404),
        layoutStatusbar: i("layout-statusbar", 60405),
        layoutMenubar: i("layout-menubar", 60406),
        layoutCentered: i("layout-centered", 60407),
        target: i("target", 60408),
        indent: i("indent", 60409),
        recordSmall: i("record-small", 60410),
        errorSmall: i("error-small", 60411),
        terminalDecorationError: i("terminal-decoration-error", 60411),
        arrowCircleDown: i("arrow-circle-down", 60412),
        arrowCircleLeft: i("arrow-circle-left", 60413),
        arrowCircleRight: i("arrow-circle-right", 60414),
        arrowCircleUp: i("arrow-circle-up", 60415),
        layoutSidebarRightOff: i("layout-sidebar-right-off", 60416),
        layoutPanelOff: i("layout-panel-off", 60417),
        layoutSidebarLeftOff: i("layout-sidebar-left-off", 60418),
        blank: i("blank", 60419),
        heartFilled: i("heart-filled", 60420),
        map: i("map", 60421),
        mapHorizontal: i("map-horizontal", 60421),
        foldHorizontal: i("fold-horizontal", 60421),
        mapFilled: i("map-filled", 60422),
        mapHorizontalFilled: i("map-horizontal-filled", 60422),
        foldHorizontalFilled: i("fold-horizontal-filled", 60422),
        circleSmall: i("circle-small", 60423),
        bellSlash: i("bell-slash", 60424),
        bellSlashDot: i("bell-slash-dot", 60425),
        commentUnresolved: i("comment-unresolved", 60426),
        gitPullRequestGoToChanges: i("git-pull-request-go-to-changes", 60427),
        gitPullRequestNewChanges: i("git-pull-request-new-changes", 60428),
        searchFuzzy: i("search-fuzzy", 60429),
        commentDraft: i("comment-draft", 60430),
        send: i("send", 60431),
        sparkle: i("sparkle", 60432),
        insert: i("insert", 60433),
        mic: i("mic", 60434),
        thumbsdownFilled: i("thumbsdown-filled", 60435),
        thumbsupFilled: i("thumbsup-filled", 60436),
        coffee: i("coffee", 60437),
        snake: i("snake", 60438),
        game: i("game", 60439),
        vr: i("vr", 60440),
        chip: i("chip", 60441),
        piano: i("piano", 60442),
        music: i("music", 60443),
        micFilled: i("mic-filled", 60444),
        repoFetch: i("repo-fetch", 60445),
        copilot: i("copilot", 60446),
        lightbulbSparkle: i("lightbulb-sparkle", 60447),
        robot: i("robot", 60448),
        sparkleFilled: i("sparkle-filled", 60449),
        diffSingle: i("diff-single", 60450),
        diffMultiple: i("diff-multiple", 60451),
        surroundWith: i("surround-with", 60452),
        share: i("share", 60453),
        gitStash: i("git-stash", 60454),
        gitStashApply: i("git-stash-apply", 60455),
        gitStashPop: i("git-stash-pop", 60456),
        vscode: i("vscode", 60457),
        vscodeInsiders: i("vscode-insiders", 60458),
        codeOss: i("code-oss", 60459),
        runCoverage: i("run-coverage", 60460),
        runAllCoverage: i("run-all-coverage", 60461),
        coverage: i("coverage", 60462),
        githubProject: i("github-project", 60463),
        mapVertical: i("map-vertical", 60464),
        foldVertical: i("fold-vertical", 60464),
        mapVerticalFilled: i("map-vertical-filled", 60465),
        foldVerticalFilled: i("fold-vertical-filled", 60465),
        goToSearch: i("go-to-search", 60466),
        percentage: i("percentage", 60467),
        sortPercentage: i("sort-percentage", 60467),
        attach: i("attach", 60468),
        goToEditingSession: i("go-to-editing-session", 60469),
        editSession: i("edit-session", 60470),
        codeReview: i("code-review", 60471),
        copilotWarning: i("copilot-warning", 60472),
        python: i("python", 60473),
        copilotLarge: i("copilot-large", 60474),
        copilotWarningLarge: i("copilot-warning-large", 60475),
        keyboardTab: i("keyboard-tab", 60476),
        copilotBlocked: i("copilot-blocked", 60477),
        copilotNotConnected: i("copilot-not-connected", 60478),
        flag: i("flag", 60479),
        lightbulbEmpty: i("lightbulb-empty", 60480),
        symbolMethodArrow: i("symbol-method-arrow", 60481),
        copilotUnavailable: i("copilot-unavailable", 60482),
        repoPinned: i("repo-pinned", 60483),
        keyboardTabAbove: i("keyboard-tab-above", 60484),
        keyboardTabBelow: i("keyboard-tab-below", 60485),
        gitPullRequestDone: i("git-pull-request-done", 60486),
        mcp: i("mcp", 60487),
        extensionsLarge: i("extensions-large", 60488),
        layoutPanelDock: i("layout-panel-dock", 60489),
        layoutSidebarLeftDock: i("layout-sidebar-left-dock", 60490),
        layoutSidebarRightDock: i("layout-sidebar-right-dock", 60491),
        terminalTwo: i("terminal-two", 60800),
        checkTwo: i("check-two", 60801),
        xTwo: i("x-two", 60802),
        expander: i("expander", 60803),
        restore: i("restore", 60804),
        pinTwo: i("pin-two", 60805),
        stopTwo: i("stop-two", 60806),
        brain: i("brain", 60807),
        magnifyingGlass: i("magnifying-glass", 60808),
        imageTwo: i("image-two", 60809),
        microphone: i("microphone", 60810),
        submit: i("submit", 60811),
        running: i("running", 60812),
        fileAddTwo: i("file-add-two", 60813),
        infinity: i("infinity", 60814),
        editTwo: i("edit-two", 60815),
        stopThree: i("stop-three", 60816),
        warningTwo: i("warning-two", 60817),
        arrowLeftTwo: i("arrow-left-two", 60818),
        redoTwo: i("redo-two", 60819),
        infoTwo: i("info-two", 60820),
        chat: i("chat", 60821),
        thumbsDown: i("thumbs-down", 60822),
        thumbsUp: i("thumbs-up", 60823),
        thumbsDownFilled: i("thumbs-down-filled", 60824),
        thumbsUpFilled: i("thumbs-up-filled", 60825),
        copyTwo: i("copy-two", 60826),
        ellipsisTwo: i("ellipsis-two", 60827),
        eyeTwo: i("eye-two", 60828),
        globeTwo: i("globe-two", 60829),
        reload: i("reload", 60830),
        folderTwo: i("folder-two", 60831),
        eraser: i("eraser", 60832),
        swirlSparkle: i("swirl-sparkle", 60833),
        sendTwo: i("send-two", 60834),
        inboxTwo: i("inbox-two", 60835),
        fileTwo: i("file-two", 60836),
        list: i("list", 60837),
        calendarTwo: i("calendar-two", 60838),
        openNotebook: i("open-notebook", 60839),
        paperWords: i("paper-words", 60840),
        mortarboard: i("mortarboard", 60841),
        lightning: i("lightning", 60842),
        hammer: i("hammer", 60843),
        keyboardTwo: i("keyboard-two", 60844),
        arrowUpTwo: i("arrow-up-two", 60845),
        import: i("import", 60846),
        targetTwo: i("target-two", 60847),
        tab: i("tab", 60848),
        magic: i("magic", 60849),
        cloneTwo: i("clone-two", 60850),
        brush: i("brush", 60851),
        branch: i("branch", 60852),
        addTwo: i("add-two", 60853),
        historyTwo: i("history-two", 60854),
        cloudTwo: i("cloud-two", 60855),
        review: i("review", 60856),
        plusSquare: i("plus-square", 60857),
        checkCircled: i("check-circled", 60858),
        dottedCircle: i("dotted-circle", 60859),
        warnCircle: i("warn-circle", 60860),
        downLocalMachine: i("down-local-machine", 60861),
        mergeUpwards: i("merge-upwards", 60862),
        asterisk: i("asterisk", 60863),
        time: i("time", 60864),
        arrowUpRight: i("arrow-up-right", 60865),
        arrowUpRightSquare: i("arrow-up-right-square", 60866),
        bubbleAndPencil: i("bubble-and-pencil", 60867),
        downloadOnSquare: i("download-on-square", 60868),
        shippingBox: i("shipping-box", 60869),
        chevronForwardDotted: i("chevron-forward-dotted", 60870),
        cylinderSplit: i("cylinder-split", 60871),
        cubeNodes: i("cube-nodes", 60872),
        clipboardList: i("clipboard-list", 60873),
        circleShine: i("circle-shine", 60874),
        chevronUpDown: i("chevron-up-down", 60875),
        cube: i("cube", 60876),
        telecom: i("telecom", 60877),
        micTwo: i("mic-two", 60878),
        hourglass: i("hourglass", 60879),
        todos: i("todos", 60880),
        hourglassTwo: i("hourglass-two", 60881),
        laptop: i("laptop", 60882),
        grep: i("grep", 60883),
        chevronDblLeft: i("chevron-dbl-left", 60884),
        chevronDblRight: i("chevron-dbl-right", 62237),
        squareAndPencil: i("square-and-pencil", 60885),
        doubleTerminal: i("double-terminal", 60886),
        sidebarLeft: i("sidebar-left", 60887),
        filesTwo: i("files-two", 60888),
        cursor: i("cursor", 60889),
        testIcon3: i("test-icon-3", 60890),
        testIcon4: i("test-icon-4", 60891),
        testIconic: i("test-iconic", 60892),
        compose: i("compose", 60893),
        composeTwo: i("compose-two", 60894),
        cursorOutlineTransparent: i("cursor-outline-transparent", 60895),
        cursorFrame: i("cursor-frame", 60896),
        cursorFrames: i("cursor-frames", 60897),
        cursorBigger: i("cursor-bigger", 60898),
        cursorBiggest: i("cursor-biggest", 60899),
        terminalFilled: i("terminal-filled", 60900),
        rectangleDashed: i("rectangle-dashed", 60901),
        squareArrow: i("square-arrow", 60902),
        unfoldVertical: i("unfold-vertical", 60903),
        unfoldDashed: i("unfold-dashed", 60904),
        foldDashed: i("fold-dashed", 60905),
        playwright: i("playwright", 60906),
        searchSparkle: i("search-sparkle", 60496),
        settingsRound: i("settings-round", 60497),
        panelRounded: i("panel-rounded", 60498),
        fileList: i("file-list", 60499),
        rectangleArrow: i("rectangle-arrow", 60500),
        rectangleGlobe: i("rectangle-globe", 60501),
        rules: i("rules", 60502),
        squaresArrow: i("squares-arrow", 60504),
        bugbot: i("bugbot", 60505),
        thinking: i("thinking", 60506),
        splitDashed: i("split-dashed", 60507),
        splitPanel: i("split-panel", 60508),
        splitFile: i("split-file", 62008),
        splitDash: i("split-dash", 62009),
        panelExpand: i("panel-expand", 62010),
        panelCollapse: i("panel-collapse", 62011),
        chatQuestion: i("chat-question", 62012),
        branchDot: i("branch-dot", 62013),
        gitBranchDot: i("git-branch-dot", 62014),
        alignTop: i("align-top", 62023),
        alignHcenter: i("align-hcenter", 62024),
        alignVcenter: i("align-vcenter", 62025),
        alignBottom: i("align-bottom", 62026),
        alignRight: i("align-right", 62027),
        alignLeft: i("align-left", 62028),
        angle: i("angle", 62029),
        alignBottomfill: i("align-bottomfill", 62030),
        alignHcenterfill: i("align-hcenterfill", 62031),
        alignLeftfill: i("align-leftfill", 62032),
        alignRightfill: i("align-rightfill", 62033),
        alignTopfill: i("align-topfill", 62034),
        alignVcenterfill: i("align-vcenterfill", 62035),
        freeform: i("freeform", 62036),
        layoutGrid: i("layout-grid", 62037),
        corners: i("corners", 62038),
        opacity: i("opacity", 62039),
        maximize: i("maximize", 62040),
        minimize: i("minimize", 62041),
        panelBottomon: i("panel-bottomon", 62042),
        panelBottomoff: i("panel-bottomoff", 62043),
        panelFrame: i("panel-frame", 62044),
        panelBottomOverlay: i("panel-bottom-overlay", 62045),
        panelRightOverlay: i("panel-right-overlay", 62046),
        panelLeftOverlay: i("panel-left-overlay", 62047),
        chatRounded: i("chat-rounded", 62048),
        fileRounded: i("file-rounded", 62049),
        judge: i("judge", 62050),
        minmize: i("minmize", 62051),
        borderAll: i("border-all", 62052),
        borderBottom: i("border-bottom", 62053),
        borderLeft: i("border-left", 62054),
        borderRight: i("border-right", 62055),
        borderTop: i("border-top", 62056),
        rotate: i("rotate", 62057),
        flipVertical: i("flip-vertical", 62058),
        flipHorizontal: i("flip-horizontal", 62059),
        padVertical: i("pad-vertical", 62060),
        padHorizontal: i("pad-horizontal", 62061),
        padTop: i("pad-top", 62062),
        padLeft: i("pad-left", 62063),
        padRight: i("pad-right", 62064),
        padBottom: i("pad-bottom", 62065),
        weight: i("weight", 62066),
        padAll: i("pad-all", 62067),
        absolutePosition: i("absolute-position", 62068),
        minWidth: i("min-width", 62069),
        maxWidth: i("max-width", 62070),
        hug: i("hug", 62071),
        fixed: i("fixed", 62072),
        removeWidth: i("remove-width", 62073),
        fillWidth: i("fill-width", 62074),
        letterSpacing: i("letter-spacing", 62075),
        lineHeight: i("line-height", 62076),
        leftAlign: i("left-align", 62077),
        centerAlign: i("center-align", 62078),
        rightAlign: i("right-align", 62079),
        textTop: i("text-top", 62080),
        textCenter: i("text-center", 62081),
        textBottom: i("text-bottom", 62082),
        layerBlur: i("layer-blur", 62083),
        backgroundBlur: i("background-blur", 62084),
        cornerTl: i("corner-tl", 62085),
        cornerTr: i("corner-tr", 62086),
        cornerBl: i("corner-bl", 62087),
        cornerBr: i("corner-br", 62088),
        flowCol: i("flow-col", 62089),
        flowRow: i("flow-row", 62090),
        gap: i("gap", 62091),
        gridCol: i("grid-col", 62092),
        gridRow: i("grid-row", 62093),
        sun: i("sun", 62094),
        unlink: i("unlink", 62095),
        arrowFilled: i("arrow-filled", 62096)
    },
    X0 = {
        dialogError: i("dialog-error", "error"),
        dialogWarning: i("dialog-warning", "warning"),
        dialogInfo: i("dialog-info", "info"),
        dialogClose: i("dialog-close", "close"),
        treeItemExpanded: i("tree-item-expanded", "chevron-down"),
        treeFilterOnTypeOn: i("tree-filter-on-type-on", "list-filter"),
        treeFilterOnTypeOff: i("tree-filter-on-type-off", "list-selection"),
        treeFilterClear: i("tree-filter-clear", "close"),
        treeItemLoading: i("tree-item-loading", "loading"),
        menuSelection: i("menu-selection", "check"),
        menuSubmenu: i("menu-submenu", "chevron-right"),
        menuBarMore: i("menubar-more", "more"),
        scrollbarButtonLeft: i("scrollbar-button-left", "triangle-left"),
        scrollbarButtonRight: i("scrollbar-button-right", "triangle-right"),
        scrollbarButtonUp: i("scrollbar-button-up", "triangle-up"),
        scrollbarButtonDown: i("scrollbar-button-down", "triangle-down"),
        toolBarMore: i("toolbar-more", "more"),
        quickInputBack: i("quick-input-back", "arrow-left"),
        dropDownButton: i("drop-down-button", 60084),
        symbolCustomColor: i("symbol-customcolor", 60252),
        exportIcon: i("export", 60332),
        workspaceUnspecified: i("workspace-unspecified", 60355),
        newLine: i("newline", 60394),
        gitFetch: i("git-fetch", 60445),
        lightbulbSparkleAutofix: i("lightbulb-sparkle-autofix", 60447),
        debugBreakpointPending: i("debug-breakpoint-pending", 60377),
        circles: i("circles", 62352)
    },
    Ae = {
        ...Q0,
        ...X0
    },
    Cn;
(e => {
    function t(r) {
        return r && typeof r == "object" && typeof r.id == "string"
    }
    e.isThemeColor = t
})(Cn || (Cn = {}));
var Oe;
(e => {
    e.iconNameSegment = "[A-Za-z0-9]+", e.iconNameExpression = "[A-Za-z0-9-]+", e.iconModifierExpression = "~[A-Za-z]+", e.iconNameCharacter = "[A-Za-z0-9~-]";
    const t = new RegExp(`^(${e.iconNameExpression})(${e.iconModifierExpression})?$`);

    function r(p) {
        if (!p) return r(Ae.error);
        const m = t.exec(p.id);
        if (!m) return r(Ae.error);
        const [, S, k] = m, D = ["codicon", "codicon-" + S];
        return k && D.push("codicon-modifier-" + k.substring(1)), D
    }
    e.asClassNameArray = r;

    function n(p) {
        if (!p) return n(Ae.error);
        const m = t.exec(p.id);
        if (!m) return n(Ae.error);
        const [, S, k] = m;
        let D = `codicon codicon-${S}`;
        return k && (D += ` codicon-modifier-${k.substring(1)}`), D
    }
    e.asClassName = n;

    function s(p) {
        if (!p) return s(Ae.error);
        const m = t.exec(p.id);
        if (!m) return s(Ae.error);
        const [, S, k] = m;
        let D = `.codicon.codicon-${S}`;
        return k && (D += `.codicon-modifier-${k.substring(1)}`), D
    }
    e.asCSSSelector = s;

    function o(p) {
        return p && typeof p == "object" && typeof p.id == "string" && (typeof p.color > "u" || Cn.isThemeColor(p.color))
    }
    e.isThemeIcon = o;
    const a = new RegExp(`^\\$\\((${e.iconNameExpression}(?:${e.iconModifierExpression})?)\\)$`);

    function l(p) {
        const m = a.exec(p);
        if (!m) return;
        const [, S] = m;
        return {
            id: S
        }
    }
    e.fromString = l;

    function u(p) {
        return {
            id: p
        }
    }
    e.fromId = u;

    function c(p, m) {
        let S = p.id;
        const k = S.lastIndexOf("~");
        return k !== -1 && (S = S.substring(0, k)), m && (S = `${S}~${m}`), {
            id: S
        }
    }
    e.modify = c;

    function f(p) {
        const m = p.id.lastIndexOf("~");
        if (m !== -1) return p.id.substring(m + 1)
    }
    e.getModifier = f;

    function h(p, m) {
        return p.id === m.id && p.color?.id === m.color?.id
    }
    e.isEqual = h
})(Oe || (Oe = {}));

function J0(e) {
    let t = !1;
    const r = new Map,
        n = new Map;
    if (el(e, f => {
            if (e === f) return !0;
            const h = JSON.stringify(f);
            if (h.length < 30) return !0;
            const p = r.get(h);
            if (!p) {
                const m = {
                    schemas: [f]
                };
                return r.set(h, m), n.set(f, m), !0
            }
            return p.schemas.push(f), n.set(f, p), t = !0, !1
        }), r.clear(), !t) return JSON.stringify(e);
    let o = "$defs";
    for (; e.hasOwnProperty(o);) o += "_";
    const a = [];

    function l(f) {
        return JSON.stringify(f, (h, p) => {
            if (p !== f) {
                const m = n.get(p);
                if (m && m.schemas.length > 1) return m.id || (m.id = `_${a.length}`, a.push(m.schemas[0])), {
                    $ref: `#/${o}/${m.id}`
                }
            }
            return p
        })
    }
    const u = l(e),
        c = [];
    for (let f = 0; f < a.length; f++) c.push(`"_${f}":${l(a[f])}`);
    return c.length ? `${u.substring(0,u.length-1)},"${o}":{${c.join(",")}}}` : u
}

function _t(e) {
    return typeof e == "object" && e !== null
}

function el(e, t) {
    if (!e || typeof e != "object") return;
    const r = (...u) => {
            for (const c of u) _t(c) && a.push(c)
        },
        n = (...u) => {
            for (const c of u)
                if (_t(c))
                    for (const f in c) {
                        const h = c[f];
                        _t(h) && a.push(h)
                    }
        },
        s = (...u) => {
            for (const c of u)
                if (Array.isArray(c))
                    for (const f of c) _t(f) && a.push(f)
        },
        o = u => {
            if (Array.isArray(u))
                for (const c of u) _t(c) && a.push(c);
            else _t(u) && a.push(u)
        },
        a = [e];
    let l = a.pop();
    for (; l;) t(l) && (r(l.additionalItems, l.additionalProperties, l.not, l.contains, l.propertyNames, l.if, l.then, l.else, l.unevaluatedItems, l.unevaluatedProperties), n(l.definitions, l.$defs, l.properties, l.patternProperties, l.dependencies, l.dependentSchemas), s(l.anyOf, l.allOf, l.oneOf, l.prefixItems), o(l.items)), l = a.pop()
}
var tl = class {
        constructor() {
            this.data = new Map
        }
        add(e, t) {
            Dr(Ot(e)), Dr(Ls(t)), Dr(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t)
        }
        knows(e) {
            return this.data.has(e)
        }
        as(e) {
            return this.data.get(e) || null
        }
        dispose() {
            this.data.forEach(e => {
                Ms(e.dispose) && e.dispose()
            }), this.data.clear()
        }
    },
    An = new tl,
    zi = {
        JSONContribution: "base.contributions.json"
    };

function ji(e) {
    return e.length > 0 && e.charAt(e.length - 1) === "#" ? e.substring(0, e.length - 1) : e
}
var rl = class extends Le {
        constructor() {
            super(...arguments), this.schemasById = {}, this.schemaAssociations = {}, this._onDidChangeSchema = this._register(new Z), this.onDidChangeSchema = this._onDidChangeSchema.event, this._onDidChangeSchemaAssociations = this._register(new Z), this.onDidChangeSchemaAssociations = this._onDidChangeSchemaAssociations.event
        }
        registerSchema(e, t, r) {
            const n = ji(e);
            this.schemasById[n] = t, this._onDidChangeSchema.fire(e), r && r.add(_e(() => {
                delete this.schemasById[n], this._onDidChangeSchema.fire(e)
            }))
        }
        registerSchemaAssociation(e, t) {
            const r = ji(e);
            return this.schemaAssociations[r] || (this.schemaAssociations[r] = []), this.schemaAssociations[r].includes(t) || (this.schemaAssociations[r].push(t), this._onDidChangeSchemaAssociations.fire()), _e(() => {
                const n = this.schemaAssociations[r];
                if (n) {
                    const s = n.indexOf(t);
                    s !== -1 && (n.splice(s, 1), n.length === 0 && delete this.schemaAssociations[r], this._onDidChangeSchemaAssociations.fire())
                }
            })
        }
        notifySchemaChanged(e) {
            this._onDidChangeSchema.fire(e)
        }
        getSchemaContributions() {
            return {
                schemas: this.schemasById
            }
        }
        getSchemaContent(e) {
            const t = this.schemasById[e];
            return t ? J0(t) : void 0
        }
        hasSchemaContent(e) {
            return !!this.schemasById[e]
        }
        getSchemaAssociations() {
            return this.schemaAssociations
        }
    },
    nl = new rl;
An.add(zi.JSONContribution, nl);
var il = {
        IconContribution: "base.contributions.icons"
    },
    Gi;
(e => {
    function t(r, n) {
        let s = r.defaults;
        for (; Oe.isThemeIcon(s);) {
            const o = Je.getIcon(s.id);
            if (!o) return;
            s = o.defaults
        }
        return s
    }
    e.getDefinition = t
})(Gi || (Gi = {}));
var qi;
(e => {
    function t(n) {
        return {
            weight: n.weight,
            style: n.style,
            src: n.src.map(s => ({
                format: s.format,
                location: s.location.toString()
            }))
        }
    }
    e.toJSONObject = t;

    function r(n) {
        const s = o => Ot(o) ? o : void 0;
        if (n && Array.isArray(n.src) && n.src.every(o => Ot(o.format) && Ot(o.location))) return {
            weight: s(n.weight),
            style: s(n.style),
            src: n.src.map(o => ({
                format: o.format,
                location: fe.parse(o.location)
            }))
        }
    }
    e.fromJSONObject = r
})(qi || (qi = {}));
var sl = /^([\w_-]+)$/,
    ol = ut(2549, null),
    al = class extends Le {
        constructor() {
            super(), this._onDidChange = this._register(new Z), this.onDidChange = this._onDidChange.event, this.iconSchema = {
                definitions: {
                    icons: {
                        type: "object",
                        properties: {
                            fontId: {
                                type: "string",
                                description: ut(2550, null),
                                pattern: sl.source,
                                patternErrorMessage: ol
                            },
                            fontCharacter: {
                                type: "string",
                                description: ut(2551, null)
                            }
                        },
                        additionalProperties: !1,
                        defaultSnippets: [{
                            body: {
                                fontCharacter: "\\\\e030"
                            }
                        }]
                    }
                },
                type: "object",
                properties: {}
            }, this.iconReferenceSchema = {
                type: "string",
                pattern: `^${Oe.iconNameExpression}$`,
                enum: [],
                enumDescriptions: []
            }, this.iconsById = {}, this.iconFontsById = {}
        }
        registerIcon(e, t, r, n) {
            const s = this.iconsById[e];
            if (s) {
                if (r && !s.description) {
                    s.description = r, this.iconSchema.properties[e].markdownDescription = `${r} $(${e})`;
                    const l = this.iconReferenceSchema.enum.indexOf(e);
                    l !== -1 && (this.iconReferenceSchema.enumDescriptions[l] = r), this._onDidChange.fire()
                }
                return s
            }
            const o = {
                id: e,
                description: r,
                defaults: t,
                deprecationMessage: n
            };
            this.iconsById[e] = o;
            const a = {
                $ref: "#/definitions/icons"
            };
            return n && (a.deprecationMessage = n), r && (a.markdownDescription = `${r}: $(${e})`), this.iconSchema.properties[e] = a, this.iconReferenceSchema.enum.push(e), this.iconReferenceSchema.enumDescriptions.push(r || ""), this._onDidChange.fire(), {
                id: e
            }
        }
        deregisterIcon(e) {
            delete this.iconsById[e], delete this.iconSchema.properties[e];
            const t = this.iconReferenceSchema.enum.indexOf(e);
            t !== -1 && (this.iconReferenceSchema.enum.splice(t, 1), this.iconReferenceSchema.enumDescriptions.splice(t, 1)), this._onDidChange.fire()
        }
        getIcons() {
            return Object.keys(this.iconsById).map(e => this.iconsById[e])
        }
        getIcon(e) {
            return this.iconsById[e]
        }
        getIconSchema() {
            return this.iconSchema
        }
        getIconReferenceSchema() {
            return this.iconReferenceSchema
        }
        registerIconFont(e, t) {
            const r = this.iconFontsById[e];
            return r || (this.iconFontsById[e] = t, this._onDidChange.fire(), t)
        }
        deregisterIconFont(e) {
            delete this.iconFontsById[e]
        }
        getIconFont(e) {
            return this.iconFontsById[e]
        }
        toString() {
            const e = (s, o) => s.id.localeCompare(o.id),
                t = s => {
                    for (; Oe.isThemeIcon(s.defaults);) s = this.iconsById[s.defaults.id];
                    return `codicon codicon-${s?s.id:""}`
                },
                r = [];
            r.push("| preview     | identifier                        | default codicon ID                | description"), r.push("| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |");
            const n = Object.keys(this.iconsById).map(s => this.iconsById[s]);
            for (const s of n.filter(o => !!o.description).sort(e)) r.push(`|<i class="${t(s)}"></i>|${s.id}|${Oe.isThemeIcon(s.defaults)?s.defaults.id:s.id}|${s.description||""}|`);
            r.push("| preview     | identifier                        "), r.push("| ----------- | --------------------------------- |");
            for (const s of n.filter(o => !Oe.isThemeIcon(o.defaults)).sort(e)) r.push(`|<i class="${t(s)}"></i>|${s.id}|`);
            return r.join(`
`)
        }
    },
    Je = new al;
An.add(il.IconContribution, Je);

function En(e, t, r, n) {
    return Je.registerIcon(e, t, r, n)
}

function Zi() {
    return Je
}

function ll() {
    const e = Y0();
    for (const t in e) {
        const r = "\\" + e[t].toString(16);
        Je.registerIcon(t, {
            fontCharacter: r
        })
    }
}
ll();
var Yi = "vscode://schemas/icons",
    Qi = An.as(zi.JSONContribution);
Qi.registerSchema(Yi, Je.getIconSchema());
var Xi = new G1(() => Qi.notifySchemaChanged(Yi), 200);
Je.onDidChange(() => {
    Xi.isScheduled() || Xi.schedule()
});
var Vc = En("widget-close", Ae.close, ut(2552, null)),
    Bc = En("goto-previous-location", Ae.arrowUp, ut(2553, null)),
    Kc = En("goto-next-location", Ae.arrowDown, ut(2554, null)),
    $c = Oe.modify(Ae.sync, "spin"),
    Wc = Oe.modify(Ae.loading, "spin");

function cl(e) {
    const t = new be,
        r = t.add(new Z),
        n = Zi();
    return t.add(n.onDidChange(() => r.fire())), e && t.add(e.onDidProductIconThemeChange(() => r.fire())), {
        dispose: () => t.dispose(),
        onDidChange: r.event,
        getCSS() {
            const s = e ? e.getProductIconTheme() : new ul,
                o = {},
                a = new bn,
                l = new bn;
            for (const u of n.getIcons()) {
                const c = s.getIcon(u);
                if (!c) continue;
                const f = c.font,
                    h = se`--vscode-icon-${gr(u.id)}-font-family`,
                    p = se`--vscode-icon-${gr(u.id)}-content`;
                f ? (o[f.id] = f.definition, l.push(se`${h}: ${He(f.id)};`, se`${p}: ${He(c.fontCharacter)};`), a.push(se`.codicon-${gr(u.id)}:before { content: ${He(c.fontCharacter)}; font-family: ${He(f.id)}; }`)) : (l.push(se`${p}: ${He(c.fontCharacter)}; ${h}: 'codicon';`), a.push(se`.codicon-${gr(u.id)}:before { content: ${He(c.fontCharacter)}; }`))
            }
            for (const u in o) {
                const c = o[u],
                    f = c.weight ? se`font-weight: ${Hi(c.weight)};` : se``,
                    h = c.style ? se`font-style: ${Hi(c.style)};` : se``,
                    p = new bn;
                for (const m of c.src) p.push(se`${Z0(m.location)} format(${He(m.format)})`);
                a.push(se`@font-face { src: ${p.join(", ")}; font-family: ${He(u)};${f}${h} font-display: block; }`)
            }
            return a.push(se`:root { ${l.join(" ")} }`), a.join(`
`)
        }
    }
}
var ul = class {
    getIcon(e) {
        const t = Zi();
        let r = e.defaults;
        for (; Oe.isThemeIcon(r);) {
            const n = t.getIcon(r.id);
            if (!n) return;
            r = n.defaults
        }
        return r
    }
};

function dl(e = 0) {
    return Math.pow(1.2, e)
}
var hl = 8,
    fl = -8;

function Sn(e, t) {
    e = Math.min(Math.max(e, fl), hl);
    const r = [];
    t === 1 ? r.push(_n()) : t === 2 ? r.push(...Array.from(yn()).map(({
        window: n
    }) => n)) : r.push(t);
    for (const n of r) pl(n)?.webFrame?.setZoomLevel(e), ro(dl(e), n), to(e, n)
}

function pl(e) {
    if (e === L) return {
        ipcRenderer: Ft,
        webFrame: q0
    };
    {
        const t = e;
        if (t?.vscode?.ipcRenderer && t?.vscode?.webFrame) return t.vscode
    }
}

function ml(e) {
    Sn(y1(typeof e == "number" ? _n() : e) + 1, e)
}

function gl(e) {
    Sn(y1(typeof e == "number" ? _n() : e) - 1, e)
}
var yl = class {
    constructor(e, t) {
        this.data = t, this.expandedExtensions = new Set, this.isRendering = !1, this.eventListenersAttached = !1, this.persistedExtensions = new Map, this.persistedHosts = new Map, this.handleClick = r => {
            const n = r.target.closest(".process-toggle");
            if (!n) return;
            if (this.isRendering) {
                console.warn("Click blocked - rendering in progress");
                return
            }
            const s = n.getAttribute("data-extension");
            if (!s) return;
            const o = L.document.getElementById("extension-list");
            if (!o) return;
            const a = o.querySelector(`#processes-${s}`);
            a && (this.expandedExtensions.has(s) ? (this.expandedExtensions.delete(s), a.style.display = "none", n.textContent = "\u25B6") : (this.expandedExtensions.add(s), a.style.display = "block", n.textContent = "\u25BC"))
        }, this.applyStyles(t.styles), this.setEventHandlers(t), Ft.on("vscode:listAllExtensionsResponse", async (r, n) => {
            if (this.isRendering) {
                console.warn("Skipping render - already in progress");
                return
            }
            this.isRendering = !0;
            try {
                this.remoteServerDebugPort = n.remoteServerDebugPort;
                const s = this.renderExtensionTable(n.hosts),
                    o = new Promise((a, l) => setTimeout(() => l(new Error("Render timeout after 5 seconds")), 5e3));
                await Promise.race([s, o])
            } catch (s) {
                console.error("Render failed:", s)
            } finally {
                this.isRendering = !1
            }
        }), this.startPolling()
    }
    async renderExtensionTable(e) {
        const t = L.document.getElementById("extension-list");
        if (t) {
            await new Promise(r => L.requestAnimationFrame(r));
            try {
                const r = this.mergeWithPersistedState(e),
                    n = L.document.body.scrollTop,
                    s = L.document.documentElement.scrollTop,
                    o = t.scrollTop,
                    a = t.querySelector(".extension-table"),
                    l = a ? a.scrollTop : 0,
                    u = await this.buildTableHTML(r);
                t.innerHTML = u, await new Promise(f => L.requestAnimationFrame(f));
                const c = t.querySelector(".extension-table");
                c && l > 0 ? c.scrollTop = l : o > 0 ? t.scrollTop = o : n > 0 ? L.document.body.scrollTop = n : s > 0 && (L.document.documentElement.scrollTop = s), this.attachEventListeners(t)
            } catch (r) {
                console.error("Error during render:", r)
            }
        }
    }
    mergeWithPersistedState(e) {
        for (const r of this.persistedExtensions.values()) r.isActive = !1;
        for (const r of this.persistedHosts.values()) r.isActive = !1;
        for (const r of e) {
            const n = this.persistedHosts.get(r.id);
            n ? (n.isRemote = r.isRemote, n.hostSysMem = r.hostSysMem, n.isActive = !0) : this.persistedHosts.set(r.id, {
                id: r.id,
                isRemote: r.isRemote,
                hostSysMem: r.hostSysMem,
                isActive: !0
            });
            for (const s of r.extensions) {
                const o = this.persistedExtensions.get(s.staticInfo.id);
                o ? (o.metrics = s.metrics || {
                    pctExtHost: 0,
                    maxBlockingTime: 0,
                    pctCPU: 0,
                    memKB: 0
                }, o.processes = s.processes || [], o.isActive = !0, o.hostId = r.id) : this.persistedExtensions.set(s.staticInfo.id, {
                    staticInfo: {
                        id: s.staticInfo.id,
                        name: s.staticInfo.name,
                        isBuiltin: s.staticInfo.isBuiltin,
                        isUnderDevelopment: s.staticInfo.isUnderDevelopment,
                        extensionLocation: s.staticInfo.extensionLocation,
                        publisher: s.staticInfo.publisher,
                        version: s.staticInfo.version,
                        description: s.staticInfo.description,
                        main: s.staticInfo.main,
                        browser: s.staticInfo.browser
                    },
                    metrics: s.metrics || {
                        pctExtHost: 0,
                        maxBlockingTime: 0,
                        pctCPU: 0,
                        memKB: 0
                    },
                    processes: s.processes || [],
                    hostId: r.id,
                    isActive: !0
                })
            }
        }
        for (const r of this.persistedExtensions.values()) r.isActive || (r.metrics = {
            pctExtHost: 0,
            maxBlockingTime: 0,
            pctCPU: 0,
            memKB: 0
        }, r.processes = []);
        const t = [];
        for (const r of this.persistedHosts.values()) {
            const n = [];
            for (const s of this.persistedExtensions.values())
                if (s.hostId === r.id) {
                    const o = {
                        staticInfo: s.staticInfo,
                        metrics: s.metrics
                    };
                    s.processes && s.processes.length > 0 && (o.processes = s.processes), n.push(o)
                } n.sort((s, o) => s.staticInfo.isBuiltin !== o.staticInfo.isBuiltin ? s.staticInfo.isBuiltin ? 1 : -1 : s.staticInfo.id.localeCompare(o.staticInfo.id)), t.push({
                id: r.id,
                isRemote: r.isRemote,
                hostSysMem: r.hostSysMem,
                extensions: n
            })
        }
        return t.sort((r, n) => r.id.localeCompare(n.id)), t
    }
    async buildTableHTML(e) {
        const t = this.buildRemoteServerInfo(),
            r = this.buildTableHeader(),
            n = [];
        for (let s = 0; s < e.length; s++) n.push(this.buildExtensionHostSection(e[s])), s % 5 === 0 && s > 0 && await new Promise(o => setTimeout(o, 0));
        return `
			${t}
			<div class="extension-table">
				${r}
				${n.join("")}
			</div>
		`
    }
    buildRemoteServerInfo() {
        return this.remoteServerDebugPort ? `
			<div class="remote-server-info">
				Connected to remote Cursor server: <code class="server-address">${`localhost:${this.remoteServerDebugPort}`}</code>
			</div>
		` : ""
    }
    buildTableHeader() {
        return `
			<div class="table-header">
				<div class="col-name"></div>
				<div class="col-ext-host">% Ext Host</div>
				<div class="col-blocking">Max Blocking</div>
				<div class="col-cpu">
					<div class="col-cpu-sub">% CPU (self)</div>
					<div class="col-cpu-sub">% CPU (total)</div>
				</div>
				<div class="col-memory">
					<div class="col-memory-sub">Memory (self)</div>
					<div class="col-memory-sub">Memory (total)</div>
				</div>
			</div>
		`
    }
    buildExtensionHostSection(e) {
        const t = e.extensions.filter(s => !s.staticInfo.isBuiltin),
            r = e.extensions.filter(s => s.staticInfo.isBuiltin),
            n = e.isRemote ? "remote-host" : "local-host";
        return `
			<div class="extension-host-section" data-host-id="${e.id}">
				<div class="host-header ${n}">
					<div class="col-name">Extension Host <span class="host-id">${e.id}</span></div>
					<div class="col-ext-host"></div>
					<div class="col-blocking"></div>
					<div class="col-cpu host-single-value"></div>
					<div class="col-memory host-single-value">${e.hostSysMem?this.formatMemory(e.hostSysMem):""}</div>
				</div>
				${this.buildExtensionGroup(t,"User Extensions",t.length>0)}
				${this.buildExtensionGroup(r,"Built-in Extensions",r.length>0)}
			</div>
		`
    }
    buildExtensionGroup(e, t, r) {
        return !r || e.length === 0 ? "" : `
			<div class="extension-group">
				<div class="group-header">
					<div class="col-name">${t}</div>
					<div class="col-ext-host"></div>
					<div class="col-blocking"></div>
					<div class="col-cpu"></div>
					<div class="col-memory"></div>
				</div>
				${e.map(n=>this.buildExtensionRow(n)).join("")}
			</div>
		`
    }
    buildExtensionRow(e) {
        const t = e.processes || [],
            r = t.length > 0,
            n = e.staticInfo.id.replace(/[^a-zA-Z0-9]/g, "-"),
            s = this.expandedExtensions.has(n),
            o = t.reduce((q, de) => q + (de.pctCPU ?? 0), 0),
            a = t.reduce((q, de) => q + (de.memRssKB ?? 0), 0),
            l = e.metrics?.pctCPU ?? 0,
            u = e.metrics?.memKB ?? 0,
            c = l + o,
            f = u + a,
            h = (e.metrics?.pctExtHost ?? 0) === 0 && (e.metrics?.maxBlockingTime ?? 0) === 0 && l === 0 && u === 0 && t.length === 0;
        let p = "";
        t.length === 1 ? p = " (1 process)" : t.length > 1 && (p = ` (${t.length} processes)`);
        const m = e.metrics?.pctExtHost ?? 0,
            S = m >= 50 && e.staticInfo.id !== "<ext-host-runtime>",
            k = S ? "col-ext-host high-usage" : "col-ext-host",
            D = S ? '<span class="codicon codicon-warning usage-warning-icon"></span>' : "",
            $ = e.staticInfo.id === "<ext-host-runtime>",
            ue = Math.floor((e.metrics?.maxBlockingTime ?? 0) / 1e3),
            V = !$ && ue >= 150,
            H = V ? "col-blocking high-usage" : "col-blocking",
            I = $ ? "" : `${V?'<span class="codicon codicon-warning usage-warning-icon"></span>':""}${this.formatTime(e.metrics?.maxBlockingTime??0)}`,
            P = this.escapeHtml(e.staticInfo.id);
        return `
			<div class="extension-row ${h?"inactive":""}" data-extension-id="${n}">
				<div class="extension-main">
					<div class="col-name">
						${r?`<span class="process-toggle" data-extension="${n}">${s?"\u25BC":"\u25B6"}</span>`:'<span class="no-toggle"></span>'}
						${P}<span class="process-count">${p}</span>
					</div>
					<div class="${k}">${D}${m}%</div>
					<div class="${H}">${I}</div>
					<div class="col-cpu">
						<div class="col-cpu-value self">${l.toFixed(1)}%</div>
						<div class="col-cpu-value total">${c.toFixed(1)}%</div>
					</div>
					<div class="col-memory">
						<div class="col-memory-value self">${this.formatMemory(u)}</div>
						<div class="col-memory-value total">${this.formatMemory(f)}</div>
					</div>
				</div>
				${r?this.buildProcessSection(t,n):""}
			</div>
		`
    }
    buildProcessSection(e, t) {
        const r = this.expandedExtensions.has(t);
        return `
			<div class="process-section" id="processes-${t}" style="display: ${r?"block":"none"};">
				${e.map(n=>this.buildProcessRow(n)).join("")}
			</div>
		`
    }
    buildProcessRow(e) {
        const t = e.command || "Unknown Process",
            r = e.pctCPU?.toFixed(1) ?? "0.0",
            n = this.formatMemory(e.memRssKB ?? 0);
        return `
			<div class="process-row">
				<div class="col-name">
					<span class="process-indent">\u2514\u2500</span> ${t}
				</div>
				<div class="col-ext-host"></div>
				<div class="col-blocking"></div>
				<div class="col-cpu process-single-value">${r}%</div>
				<div class="col-memory process-single-value">${n}</div>
			</div>
		`
    }
    attachEventListeners(e) {
        this.eventListenersAttached || (e.addEventListener("click", this.handleClick.bind(this)), this.eventListenersAttached = !0)
    }
    setEventHandlers(e) {
        L.document.onkeydown = t => {
            const r = e.platform === "darwin" ? t.metaKey : t.ctrlKey;
            r && t.keyCode === 87 && (t.stopPropagation(), t.preventDefault(), this.cleanUp(), Ft.send("vscode:closeExtensionMonitor")), r && t.keyCode === 187 && ml(L), r && t.keyCode === 189 && gl(L)
        }, L.addEventListener("beforeunload", () => {
            this.cleanUp()
        })
    }
    cleanUp() {
        this.stopPolling(), this.removeEventListeners(), this.clearPersistedState()
    }
    clearPersistedState() {
        this.persistedExtensions.clear(), this.persistedHosts.clear()
    }
    removeEventListeners() {
        if (this.eventListenersAttached) {
            const e = L.document.getElementById("extension-list");
            e && e.removeEventListener("click", this.handleClick), this.eventListenersAttached = !1
        }
    }
    applyStyles(e) {
        const t = L.document.documentElement;
        t.style.setProperty("--extension-monitor-color", e.color || "#cccccc"), t.style.setProperty("--extension-monitor-hover-bg", e.listHoverBackground || "rgba(255,255,255,0.05)"), e.color && (L.document.body.style.color = e.color)
    }
    startPolling() {
        Ft.send("vscode:listAllExtensions"), this.pollingInterval = L.setInterval(() => {
            Ft.send("vscode:listAllExtensions")
        }, 1600)
    }
    stopPolling() {
        this.pollingInterval && (L.clearInterval(this.pollingInterval), this.pollingInterval = void 0)
    }
    escapeHtml(e) {
        const t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return e.replace(/[&<>"']/g, function(r) {
            return t[r]
        })
    }
    formatMemory(e) {
        return e === 0 ? "0 KB" : e < 1e3 ? `${e.toFixed(1)} KB` : e < 1e6 ? `${(e/1024).toFixed(1)} MB` : `${(e/(1024*1024)).toFixed(1)} GB`
    }
    formatTime(e) {
        const t = Math.floor(e / 1e3);
        return t === 0 ? "0 ms" : t < 1e3 ? `${t} ms` : `${(t/1e3).toFixed(2)} s`
    }
};

function vl() {
    const e = z0();
    e.id = "codiconStyles";
    const t = cl(void 0);

    function r() {
        e.textContent = t.getCSS()
    }
    const n = new G1(r, 0);
    t.onDidChange(() => n.schedule()), n.schedule()
}

function _l(e) {
    const t = e.data.platform === "win32" ? "windows" : e.data.platform === "linux" ? "linux" : "mac";
    L.document.body.classList.add(t), vl(), Sn(e.data.zoomLevel, L), new yl(e.windowId, e.data)
}
export {
    _l as startup
}; /*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */

//# sourceMappingURL=http://go/sourcemap/sourcemaps/46fb7aafe279d7c72346febe68c2e004b7d1de60/core/vs/code/electron-sandbox/extensionMonitor/extensionMonitorMain.js.map

//# debugId=b9aa610b-df3d-5033-ba0a-abaeec0ed9b2