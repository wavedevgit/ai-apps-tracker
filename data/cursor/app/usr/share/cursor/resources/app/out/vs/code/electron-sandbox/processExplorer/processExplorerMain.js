/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f1c943ca-5b15-58bd-b82b-18687180f2d5")
    } catch (e) {}
}();
var _r = function(e, t) {
    return _r = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(i, s) {
        i.__proto__ = s
    } || function(i, s) {
        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (i[n] = s[n])
    }, _r(e, t)
};
export function __extends(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    _r(e, t);

    function i() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i)
}
export var __assign = function() {
    return __assign = Object.assign || function(t) {
        for (var i, s = 1, n = arguments.length; s < n; s++) {
            i = arguments[s];
            for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
        }
        return t
    }, __assign.apply(this, arguments)
};
export function __rest(e, t) {
    var i = {};
    for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]]);
    return i
}
export function __decorate(e, t, i, s) {
    var n = arguments.length,
        r = n < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, i) : s,
        o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(e, t, i, s);
    else
        for (var a = e.length - 1; a >= 0; a--)(o = e[a]) && (r = (n < 3 ? o(r) : n > 3 ? o(t, i, r) : o(t, i)) || r);
    return n > 3 && r && Object.defineProperty(t, i, r), r
}
export function __param(e, t) {
    return function(i, s) {
        t(i, s, e)
    }
}
export function __esDecorate(e, t, i, s, n, r) {
    function o(w) {
        if (w !== void 0 && typeof w != "function") throw new TypeError("Function expected");
        return w
    }
    for (var a = s.kind, c = a === "getter" ? "get" : a === "setter" ? "set" : "value", h = !t && e ? s.static ? e : e.prototype : null, d = t || (h ? Object.getOwnPropertyDescriptor(h, s.name) : {}), u, f = !1, p = i.length - 1; p >= 0; p--) {
        var g = {};
        for (var _ in s) g[_] = _ === "access" ? {} : s[_];
        for (var _ in s.access) g.access[_] = s.access[_];
        g.addInitializer = function(w) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            r.push(o(w || null))
        };
        var y = (0, i[p])(a === "accessor" ? {
            get: d.get,
            set: d.set
        } : d[c], g);
        if (a === "accessor") {
            if (y === void 0) continue;
            if (y === null || typeof y != "object") throw new TypeError("Object expected");
            (u = o(y.get)) && (d.get = u), (u = o(y.set)) && (d.set = u), (u = o(y.init)) && n.unshift(u)
        } else(u = o(y)) && (a === "field" ? n.unshift(u) : d[c] = u)
    }
    h && Object.defineProperty(h, s.name, d), f = !0
}
export function __runInitializers(e, t, i) {
    for (var s = arguments.length > 2, n = 0; n < t.length; n++) i = s ? t[n].call(e, i) : t[n].call(e);
    return s ? i : void 0
}
export function __propKey(e) {
    return typeof e == "symbol" ? e : "".concat(e)
}
export function __setFunctionName(e, t, i) {
    return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
        configurable: !0,
        value: i ? "".concat(i, " ", t) : t
    })
}
export function __metadata(e, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t)
}
export function __awaiter(e, t, i, s) {
    function n(r) {
        return r instanceof i ? r : new i(function(o) {
            o(r)
        })
    }
    return new(i || (i = Promise))(function(r, o) {
        function a(d) {
            try {
                h(s.next(d))
            } catch (u) {
                o(u)
            }
        }

        function c(d) {
            try {
                h(s.throw(d))
            } catch (u) {
                o(u)
            }
        }

        function h(d) {
            d.done ? r(d.value) : n(d.value).then(a, c)
        }
        h((s = s.apply(e, t || [])).next())
    })
}
export function __generator(e, t) {
    var i = {
            label: 0,
            sent: function() {
                if (r[0] & 1) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        },
        s, n, r, o;
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function a(h) {
        return function(d) {
            return c([h, d])
        }
    }

    function c(h) {
        if (s) throw new TypeError("Generator is already executing.");
        for (; o && (o = 0, h[0] && (i = 0)), i;) try {
            if (s = 1, n && (r = h[0] & 2 ? n.return : h[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, h[1])).done) return r;
            switch (n = 0, r && (h = [h[0] & 2, r.value]), h[0]) {
                case 0:
                case 1:
                    r = h;
                    break;
                case 4:
                    return i.label++, {
                        value: h[1],
                        done: !1
                    };
                case 5:
                    i.label++, n = h[1], h = [0];
                    continue;
                case 7:
                    h = i.ops.pop(), i.trys.pop();
                    continue;
                default:
                    if (r = i.trys, !(r = r.length > 0 && r[r.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (h[0] === 3 && (!r || h[1] > r[0] && h[1] < r[3])) {
                        i.label = h[1];
                        break
                    }
                    if (h[0] === 6 && i.label < r[1]) {
                        i.label = r[1], r = h;
                        break
                    }
                    if (r && i.label < r[2]) {
                        i.label = r[2], i.ops.push(h);
                        break
                    }
                    r[2] && i.ops.pop(), i.trys.pop();
                    continue
            }
            h = t.call(e, i)
        } catch (d) {
            h = [6, d], n = 0
        } finally {
            s = r = 0
        }
        if (h[0] & 5) throw h[1];
        return {
            value: h[0] ? h[1] : void 0,
            done: !0
        }
    }
}
export var __createBinding = Object.create ? (function(e, t, i, s) {
    s === void 0 && (s = i);
    var n = Object.getOwnPropertyDescriptor(t, i);
    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
        enumerable: !0,
        get: function() {
            return t[i]
        }
    }), Object.defineProperty(e, s, n)
}) : (function(e, t, i, s) {
    s === void 0 && (s = i), e[s] = t[i]
});
export function __exportStar(e, t) {
    for (var i in e) i !== "default" && !Object.prototype.hasOwnProperty.call(t, i) && __createBinding(t, e, i)
}
export function __values(e) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        i = t && e[t],
        s = 0;
    if (i) return i.call(e);
    if (e && typeof e.length == "number") return {
        next: function() {
            return e && s >= e.length && (e = void 0), {
                value: e && e[s++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
export function __read(e, t) {
    var i = typeof Symbol == "function" && e[Symbol.iterator];
    if (!i) return e;
    var s = i.call(e),
        n, r = [],
        o;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(n = s.next()).done;) r.push(n.value)
    } catch (a) {
        o = {
            error: a
        }
    } finally {
        try {
            n && !n.done && (i = s.return) && i.call(s)
        } finally {
            if (o) throw o.error
        }
    }
    return r
}
export function __spread() {
    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
    return e
}
export function __spreadArrays() {
    for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
    for (var s = Array(e), n = 0, t = 0; t < i; t++)
        for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++) s[n] = r[o];
    return s
}
export function __spreadArray(e, t, i) {
    if (i || arguments.length === 2)
        for (var s = 0, n = t.length, r; s < n; s++)(r || !(s in t)) && (r || (r = Array.prototype.slice.call(t, 0, s)), r[s] = t[s]);
    return e.concat(r || Array.prototype.slice.call(t))
}
export function __await(e) {
    return this instanceof __await ? (this.v = e, this) : new __await(e)
}
export function __asyncGenerator(e, t, i) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var s = i.apply(e, t || []),
        n, r = [];
    return n = {}, a("next"), a("throw"), a("return", o), n[Symbol.asyncIterator] = function() {
        return this
    }, n;

    function o(p) {
        return function(g) {
            return Promise.resolve(g).then(p, u)
        }
    }

    function a(p, g) {
        s[p] && (n[p] = function(_) {
            return new Promise(function(y, w) {
                r.push([p, _, y, w]) > 1 || c(p, _)
            })
        }, g && (n[p] = g(n[p])))
    }

    function c(p, g) {
        try {
            h(s[p](g))
        } catch (_) {
            f(r[0][3], _)
        }
    }

    function h(p) {
        p.value instanceof __await ? Promise.resolve(p.value.v).then(d, u) : f(r[0][2], p)
    }

    function d(p) {
        c("next", p)
    }

    function u(p) {
        c("throw", p)
    }

    function f(p, g) {
        p(g), r.shift(), r.length && c(r[0][0], r[0][1])
    }
}
export function __asyncDelegator(e) {
    var t, i;
    return t = {}, s("next"), s("throw", function(n) {
        throw n
    }), s("return"), t[Symbol.iterator] = function() {
        return this
    }, t;

    function s(n, r) {
        t[n] = e[n] ? function(o) {
            return (i = !i) ? {
                value: __await(e[n](o)),
                done: !1
            } : r ? r(o) : o
        } : r
    }
}
export function __asyncValues(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator],
        i;
    return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](), i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
        return this
    }, i);

    function s(r) {
        i[r] = e[r] && function(o) {
            return new Promise(function(a, c) {
                o = e[r](o), n(a, c, o.done, o.value)
            })
        }
    }

    function n(r, o, a, c) {
        Promise.resolve(c).then(function(h) {
            r({
                value: h,
                done: a
            })
        }, o)
    }
}
export function __makeTemplateObject(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t, e
}
var Cu = Object.create ? (function(e, t) {
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
        for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && __createBinding(t, e, i);
    return Cu(t, e), t
}
export function __importDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
export function __classPrivateFieldGet(e, t, i, s) {
    if (i === "a" && !s) throw new TypeError("Private accessor was defined without a getter");
    if (typeof t == "function" ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return i === "m" ? s : i === "a" ? s.call(e) : s ? s.value : t.get(e)
}
export function __classPrivateFieldSet(e, t, i, s, n) {
    if (s === "m") throw new TypeError("Private method is not writable");
    if (s === "a" && !n) throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return s === "a" ? n.call(e, i) : n ? n.value = i : t.set(e, i), i
}
export function __classPrivateFieldIn(e, t) {
    if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof e == "function" ? t === e : e.has(t)
}
export function __addDisposableResource(e, t, i) {
    if (t != null) {
        if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
        var s, n;
        if (i) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            s = t[Symbol.asyncDispose]
        }
        if (s === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            s = t[Symbol.dispose], i && (n = s)
        }
        if (typeof s != "function") throw new TypeError("Object not disposable.");
        n && (s = function() {
            try {
                n.call(this)
            } catch (r) {
                return Promise.reject(r)
            }
        }), e.stack.push({
            value: t,
            dispose: s,
            async: i
        })
    } else i && e.stack.push({
        async: !0
    });
    return t
}
var Du = typeof SuppressedError == "function" ? SuppressedError : function(e, t, i) {
    var s = new Error(i);
    return s.name = "SuppressedError", s.error = e, s.suppressed = t, s
};
export function __disposeResources(e) {
    function t(s) {
        e.error = e.hasError ? new Du(s, e.error, "An error was suppressed during disposal.") : s, e.hasError = !0
    }

    function i() {
        for (; e.stack.length;) {
            var s = e.stack.pop();
            try {
                var n = s.dispose && s.dispose.call(s.value);
                if (s.async) return Promise.resolve(n).then(i, function(r) {
                    return t(r), i()
                })
            } catch (r) {
                t(r)
            }
        }
        if (e.hasError) throw e.error
    }
    return i()
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

function Eu() {
    return globalThis._VSCODE_NLS_MESSAGES
}

function cl() {
    return globalThis._VSCODE_NLS_LANGUAGE
}
var ku = cl() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;

function hl(e, t) {
    let i;
    return t.length === 0 ? i = e : i = e.replace(/\{(\d+)\}/g, (s, n) => {
        const r = parseInt(n, 10),
            o = t[r];
        let a = s;
        return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a
    }), ku && (i = "\uFF3B" + i.replace(/[aouei]/g, "$&$&") + "\uFF3D"), i
}

function V(e, t, ...i) {
    return hl(typeof e == "number" ? Tu(e, t) : t, i)
}

function Tu(e, t) {
    const i = Eu()?.[e];
    if (typeof i != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`)
    }
    return i
}
var T = window;

function xu(e, t) {
    const i = e;
    typeof i.vscodeWindowId != "number" && Object.defineProperty(i, "vscodeWindowId", {
        get: () => t
    })
}
var dl, ul;

function Au(e, t) {
    const i = Object.create(null);
    for (const s of e) {
        const n = t(s);
        let r = i[n];
        r || (r = i[n] = []), r.push(s)
    }
    return i
}
var t5 = class {
        constructor(e, t) {
            this.toKey = t, this._map = new Map, this[dl] = "SetWithKey";
            for (const i of e) this.add(i)
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
            this._map.forEach(i => e.call(t, i, i, this))
        } [(ul = Symbol.iterator, dl = Symbol.toStringTag, ul)]() {
            return this.values()
        }
    },
    Nu = class {
        constructor() {
            this.listeners = [], this.unexpectedErrorHandler = function(e) {
                setTimeout(() => {
                    throw e.stack ? hs.isErrorNoTelemetry(e) ? new hs(e.message + `

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
    fl = new Nu;

function ln(e) {
    fl.onUnexpectedError(e)
}

function ft(e) {
    Iu(e) || fl.onUnexpectedError(e)
}
var wr = "Canceled";

function Iu(e) {
    return e instanceof Ot ? !0 : e instanceof Error && e.name === wr && e.message === wr
}
var Ot = class extends Error {
    constructor() {
        if (super(wr), this.name = this.message, Mu && typeof console < "u") {
            const e = new Error().stack ?? "";
            Ru.some(t => e.includes(t)) && console.trace("[DebugCancellation] CancellationError created")
        }
    }
};

function Lu(e) {
    return e ? new Error(`Illegal argument: ${e}`) : new Error("Illegal argument")
}
var hs = class ka extends Error {
        constructor(t) {
            super(t), this.name = "CodeExpectedError"
        }
        static fromError(t) {
            if (t instanceof ka) return t;
            const i = new ka;
            return i.message = t.message, i.stack = t.stack, i
        }
        static isErrorNoTelemetry(t) {
            return t.name === "CodeExpectedError"
        }
    },
    et = class eu extends Error {
        constructor(t) {
            super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, eu.prototype)
        }
    },
    Ru = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "ComposerToolFormerMessage", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"],
    Mu = !1;

function pl(e, t) {
    const i = this;
    let s = !1,
        n;
    return function() {
        if (s) return n;
        if (s = !0, t) try {
            n = e.apply(i, arguments)
        } finally {
            t()
        } else n = e.apply(i, arguments);
        return n
    }
}

function Pu(e, t, i = 0, s = e.length) {
    let n = i,
        r = s;
    for (; n < r;) {
        const o = Math.floor((n + r) / 2);
        t(e[o]) ? n = o + 1 : r = o
    }
    return n - 1
}
var Ou = class tu {
    constructor(t) {
        this._array = t, this._findLastMonotonousLastIdx = 0
    }
    findLastMonotonous(t) {
        if (tu.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const s of this._array)
                    if (this._prevFindLastPredicate(s) && !t(s)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.")
            }
            this._prevFindLastPredicate = t
        }
        const i = Pu(this._array, t, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = i + 1, i === -1 ? void 0 : this._array[i]
    }
};
Ou.assertInvariants = !1;

function Fu(e) {
    if (e.length === 0) throw new Error("Invalid tail call");
    return [e.slice(0, e.length - 1), e[e.length - 1]]
}

function ds(e, t, i = (s, n) => s === n) {
    if (e === t) return !0;
    if (!e || !t || e.length !== t.length) return !1;
    for (let s = 0, n = e.length; s < n; s++)
        if (!i(e[s], t[s])) return !1;
    return !0
}

function Bu(e, t, i) {
    return Hu(e.length, s => i(e[s], t))
}

function Hu(e, t) {
    let i = 0,
        s = e - 1;
    for (; i <= s;) {
        const n = (i + s) / 2 | 0,
            r = t(n);
        if (r < 0) i = n + 1;
        else if (r > 0) s = n - 1;
        else return n
    }
    return -(i + 1)
}

function Sr(e, t = i => i) {
    const i = new Set;
    return e.filter(s => {
        const n = t(s);
        return i.has(n) ? !1 : (i.add(n), !0)
    })
}

function Cr(e, t) {
    let i = typeof t == "number" ? e : 0;
    typeof t == "number" ? i = e : (i = 0, t = e);
    const s = [];
    if (i <= t)
        for (let n = i; n < t; n++) s.push(n);
    else
        for (let n = i; n > t; n--) s.push(n);
    return s
}

function gl(e, t) {
    let i;
    if (typeof t == "number") {
        let s = t;
        i = () => {
            const n = Math.sin(s++) * 179426549;
            return n - Math.floor(n)
        }
    } else i = Math.random;
    for (let s = e.length - 1; s > 0; s -= 1) {
        const n = Math.floor(i() * (s + 1)),
            r = e[s];
        e[s] = e[n], e[n] = r
    }
}

function ml(e, t, i) {
    const s = vl(e, t),
        n = e.length,
        r = i.length;
    e.length = n + r;
    for (let o = n - 1; o >= s; o--) e[o + r] = e[o];
    for (let o = 0; o < r; o++) e[o + s] = i[o]
}

function Dr(e, t, i, s) {
    const n = vl(e, t);
    let r = e.splice(n, i);
    return r === void 0 && (r = []), ml(e, n, s), r
}

function vl(e, t) {
    return t < 0 ? Math.max(t + e.length, 0) : Math.min(t, e.length)
}
var Er;
(e => {
    function t(r) {
        return r < 0
    }
    e.isLessThan = t;

    function i(r) {
        return r <= 0
    }
    e.isLessThanOrEqual = i;

    function s(r) {
        return r > 0
    }
    e.isGreaterThan = s;

    function n(r) {
        return r === 0
    }
    e.isNeitherLessOrGreaterThan = n, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0
})(Er || (Er = {}));

function zu(e, t) {
    return (i, s) => t(e(i), e(s))
}
var $u = (e, t) => e - t,
    yl = class Ta {
        constructor(t) {
            this.iterate = t
        }
        forEach(t) {
            this.iterate(i => (t(i), !0))
        }
        toArray() {
            const t = [];
            return this.iterate(i => (t.push(i), !0)), t
        }
        filter(t) {
            return new Ta(i => this.iterate(s => t(s) ? i(s) : !0))
        }
        map(t) {
            return new Ta(i => this.iterate(s => i(t(s))))
        }
        some(t) {
            let i = !1;
            return this.iterate(s => (i = t(s), !i)), i
        }
        findFirst(t) {
            let i;
            return this.iterate(s => t(s) ? (i = s, !1) : !0), i
        }
        findLast(t) {
            let i;
            return this.iterate(s => (t(s) && (i = s), !0)), i
        }
        findLastMaxBy(t) {
            let i, s = !0;
            return this.iterate(n => ((s || Er.isGreaterThan(t(n, i))) && (s = !1, i = n), !0)), i
        }
    };
yl.empty = new yl(e => {});
var bl, _l, wl, Uu = class {
    constructor(e, t) {
        this.uri = e, this.value = t
    }
};

function Wu(e) {
    return Array.isArray(e)
}
var Sl = class Ys {
    constructor(t, i) {
        if (this[bl] = "ResourceMap", t instanceof Ys) this.map = new Map(t.map), this.toKey = i ?? Ys.defaultToKey;
        else if (Wu(t)) {
            this.map = new Map, this.toKey = i ?? Ys.defaultToKey;
            for (const [s, n] of t) this.set(s, n)
        } else this.map = new Map, this.toKey = t ?? Ys.defaultToKey
    }
    set(t, i) {
        return this.map.set(this.toKey(t), new Uu(t, i)), this
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
    forEach(t, i) {
        typeof i < "u" && (t = t.bind(i));
        for (const [s, n] of this.map) t(n.value, n.uri, this)
    }* values() {
        for (const t of this.map.values()) yield t.value
    }* keys() {
        for (const t of this.map.values()) yield t.uri
    }* entries() {
        for (const t of this.map.values()) yield [t.uri, t.value]
    }*[(bl = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, t] of this.map) yield [t.uri, t.value]
    }
};
Sl.defaultToKey = e => e.toString();
var Cl = Sl,
    i5 = class {
        constructor(e, t) {
            this[_l] = "ResourceSet", !e || typeof e == "function" ? this._map = new Cl(e) : (this._map = new Cl(t), e.forEach(this.add, this))
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
            this._map.forEach((i, s) => e.call(t, s, s, this))
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
        } [(_l = Symbol.toStringTag, Symbol.iterator)]() {
            return this.keys()
        }
    },
    Vu = class {
        constructor() {
            this[wl] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0
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
            const i = this._map.get(e);
            if (i) return t !== 0 && this.touch(i, t), i.value
        }
        set(e, t, i = 0) {
            let s = this._map.get(e);
            if (s) s.value = t, i !== 0 && this.touch(s, i);
            else {
                switch (s = {
                        key: e,
                        value: t,
                        next: void 0,
                        previous: void 0
                    }, i) {
                    case 0:
                        this.addItemLast(s);
                        break;
                    case 1:
                        this.addItemFirst(s);
                        break;
                    case 2:
                        this.addItemLast(s);
                        break;
                    default:
                        this.addItemLast(s);
                        break
                }
                this._map.set(e, s), this._size++
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
            const i = this._state;
            let s = this._head;
            for (; s;) {
                if (t ? e.bind(t)(s.value, s.key, this) : e(s.value, s.key, this), this._state !== i) throw new Error("LinkedMap got modified during iteration.");
                s = s.next
            }
        }
        keys() {
            const e = this,
                t = this._state;
            let i = this._head;
            const s = {
                [Symbol.iterator]() {
                    return s
                },
                next() {
                    if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
                    if (i) {
                        const n = {
                            value: i.key,
                            done: !1
                        };
                        return i = i.next, n
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return s
        }
        values() {
            const e = this,
                t = this._state;
            let i = this._head;
            const s = {
                [Symbol.iterator]() {
                    return s
                },
                next() {
                    if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
                    if (i) {
                        const n = {
                            value: i.value,
                            done: !1
                        };
                        return i = i.next, n
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return s
        }
        entries() {
            const e = this,
                t = this._state;
            let i = this._head;
            const s = {
                [Symbol.iterator]() {
                    return s
                },
                next() {
                    if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
                    if (i) {
                        const n = {
                            value: [i.key, i.value],
                            done: !1
                        };
                        return i = i.next, n
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return s
        } [(wl = Symbol.toStringTag, Symbol.iterator)]() {
            return this.entries()
        }
        trimOld(e) {
            if (e >= this.size) return;
            if (e === 0) {
                this.clear();
                return
            }
            let t = this._head,
                i = this.size;
            for (; t && i > e;) this._map.delete(t.key), t = t.next, i--;
            this._head = t, this._size = i, t && (t.previous = void 0), this._state++
        }
        trimNew(e) {
            if (e >= this.size) return;
            if (e === 0) {
                this.clear();
                return
            }
            let t = this._tail,
                i = this.size;
            for (; t && i > e;) this._map.delete(t.key), t = t.previous, i--;
            this._tail = t, this._size = i, t && (t.next = void 0), this._state++
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
                    i = e.previous;
                if (!t || !i) throw new Error("Invalid list");
                t.previous = i, i.next = t
            }
            e.next = void 0, e.previous = void 0, this._state++
        }
        touch(e, t) {
            if (!this._head || !this._tail) throw new Error("Invalid list");
            if (!(t !== 1 && t !== 2)) {
                if (t === 1) {
                    if (e === this._head) return;
                    const i = e.next,
                        s = e.previous;
                    e === this._tail ? (s.next = void 0, this._tail = s) : (i.previous = s, s.next = i), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++
                } else if (t === 2) {
                    if (e === this._tail) return;
                    const i = e.next,
                        s = e.previous;
                    e === this._head ? (i.previous = void 0, this._head = i) : (i.previous = s, s.next = i), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++
                }
            }
        }
        toJSON() {
            const e = [];
            return this.forEach((t, i) => {
                e.push([i, t])
            }), e
        }
        fromJSON(e) {
            this.clear();
            for (const [t, i] of e) this.set(t, i)
        }
    },
    Ku = class extends Vu {
        constructor(e, t = 1) {
            super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1)
        }
        get limit() {
            return this._limit
        }
        set limit(e) {
            this._limit = e, this.checkTrim()
        }
        get ratio() {
            return this._ratio
        }
        set ratio(e) {
            this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim()
        }
        get(e, t = 2) {
            return super.get(e, t)
        }
        peek(e) {
            return super.get(e, 0)
        }
        set(e, t) {
            return super.set(e, t, 2), this
        }
        checkTrim() {
            this.size > this._limit && this.trim(Math.round(this._limit * this._ratio))
        }
    },
    Gu = class extends Ku {
        constructor(e, t = 1) {
            super(e, t)
        }
        trim(e) {
            this.trimOld(e)
        }
        set(e, t) {
            return super.set(e, t), this.checkTrim(), this
        }
    },
    Dl = class {
        constructor() {
            this.map = new Map
        }
        add(e, t) {
            let i = this.map.get(e);
            i || (i = new Set, this.map.set(e, i)), i.add(t)
        }
        delete(e, t) {
            const i = this.map.get(e);
            i && (i.delete(t), i.size === 0 && this.map.delete(e))
        }
        forEach(e, t) {
            const i = this.map.get(e);
            i && i.forEach(t)
        }
        get(e) {
            const t = this.map.get(e);
            return t || new Set
        }
    };

function kr(e, t) {
    if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed")
}

function El(e) {
    if (!e()) {
        debugger;
        e(), ft(new et("Assertion Failed"))
    }
}

function us(e) {
    return typeof e == "string"
}

function kl(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e) && !(e instanceof RegExp) && !(e instanceof Date)
}

function Tr(e) {
    return typeof e == "number" && !isNaN(e)
}

function qu(e) {
    return !!e && typeof e[Symbol.iterator] == "function"
}

function ju(e) {
    return typeof e > "u"
}

function fs(e) {
    return !cn(e)
}

function cn(e) {
    return ju(e) || e === null
}

function Yu(e, t) {
    if (!e) throw new Error(t ? `Unexpected type, expected '${t}'` : "Unexpected type")
}

function xr(e) {
    return typeof e == "function"
}
var Ie;
(e => {
    function t(b) {
        return b && typeof b == "object" && typeof b[Symbol.iterator] == "function"
    }
    e.is = t;
    const i = Object.freeze([]);

    function s() {
        return i
    }
    e.empty = s;

    function* n(b) {
        yield b
    }
    e.single = n;

    function r(b) {
        return t(b) ? b : n(b)
    }
    e.wrap = r;

    function o(b) {
        return b || i
    }
    e.from = o;

    function* a(b) {
        for (let S = b.length - 1; S >= 0; S--) yield b[S]
    }
    e.reverse = a;

    function c(b) {
        return !b || b[Symbol.iterator]().next().done === !0
    }
    e.isEmpty = c;

    function h(b) {
        return b[Symbol.iterator]().next().value
    }
    e.first = h;

    function d(b, S) {
        let I = 0;
        for (const P of b)
            if (S(P, I++)) return !0;
        return !1
    }
    e.some = d;

    function u(b, S) {
        for (const I of b)
            if (S(I)) return I
    }
    e.find = u;

    function* f(b, S) {
        for (const I of b) S(I) && (yield I)
    }
    e.filter = f;

    function* p(b, S) {
        let I = 0;
        for (const P of b) yield S(P, I++)
    }
    e.map = p;

    function* g(b, S) {
        let I = 0;
        for (const P of b) yield* S(P, I++)
    }
    e.flatMap = g;

    function* _(...b) {
        for (const S of b) qu(S) ? yield* S: yield S
    }
    e.concat = _;

    function y(b, S, I) {
        let P = I;
        for (const j of b) P = S(P, j);
        return P
    }
    e.reduce = y;

    function w(b) {
        let S = 0;
        for (const I of b) S++;
        return S
    }
    e.length = w;

    function* C(b, S, I = b.length) {
        for (S < -b.length && (S = 0), S < 0 && (S += b.length), I < 0 ? I += b.length : I > b.length && (I = b.length); S < I; S++) yield b[S]
    }
    e.slice = C;

    function D(b, S = Number.POSITIVE_INFINITY) {
        const I = [];
        if (S === 0) return [I, b];
        const P = b[Symbol.iterator]();
        for (let j = 0; j < S; j++) {
            const ue = P.next();
            if (ue.done) return [I, e.empty()];
            I.push(ue.value)
        }
        return [I, {
            [Symbol.iterator]() {
                return P
            }
        }]
    }
    e.consume = D;
    async function E(b) {
        const S = [];
        for await (const I of b) S.push(I);
        return Promise.resolve(S)
    }
    e.asyncToArray = E
})(Ie || (Ie = {}));
var Xu = !1,
    ti = null,
    Zu = class iu {
        constructor() {
            this.livingDisposables = new Map
        }
        getDisposableData(t) {
            let i = this.livingDisposables.get(t);
            return i || (i = {
                parent: null,
                source: null,
                isSingleton: !1,
                value: t,
                idx: iu.idx++
            }, this.livingDisposables.set(t, i)), i
        }
        trackDisposable(t) {
            const i = this.getDisposableData(t);
            i.source || (i.source = new Error().stack)
        }
        setParent(t, i) {
            const s = this.getDisposableData(t);
            s.parent = i
        }
        markAsDisposed(t) {
            this.livingDisposables.delete(t)
        }
        markAsSingleton(t) {
            this.getDisposableData(t).isSingleton = !0
        }
        getRootParent(t, i) {
            const s = i.get(t);
            if (s) return s;
            const n = t.parent ? this.getRootParent(this.getDisposableData(t.parent), i) : t;
            return i.set(t, n), n
        }
        getTrackedDisposables() {
            const t = new Map;
            return [...this.livingDisposables.entries()].filter(([, s]) => s.source !== null && !this.getRootParent(s, t).isSingleton).flatMap(([s]) => s)
        }
        computeLeakingDisposables(t = 10, i) {
            let s;
            if (i) s = i;
            else {
                const c = new Map,
                    h = [...this.livingDisposables.values()].filter(u => u.source !== null && !this.getRootParent(u, c).isSingleton);
                if (h.length === 0) return;
                const d = new Set(h.map(u => u.value));
                if (s = h.filter(u => !(u.parent && d.has(u.parent))), s.length === 0) throw new Error("There are cyclic diposable chains!")
            }
            if (!s) return;

            function n(c) {
                function h(u, f) {
                    for (; u.length > 0 && f.some(p => typeof p == "string" ? p === u[0] : u[0].match(p));) u.shift()
                }
                const d = c.source.split(`
`).map(u => u.trim().replace("at ", "")).filter(u => u !== "");
                return h(d, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), d.reverse()
            }
            const r = new Dl;
            for (const c of s) {
                const h = n(c);
                for (let d = 0; d <= h.length; d++) r.add(h.slice(0, d).join(`
`), c)
            }
            s.sort(zu(c => c.idx, $u));
            let o = "",
                a = 0;
            for (const c of s.slice(0, t)) {
                a++;
                const h = n(c),
                    d = [];
                for (let u = 0; u < h.length; u++) {
                    let f = h[u];
                    f = `(shared with ${r.get(h.slice(0,u+1).join(`
`)).size}/${s.length} leaks) at ${f}`;
                    const g = r.get(h.slice(0, u).join(`
`)),
                        _ = Au([...g].map(y => n(y)[u]), y => y);
                    delete _[h[u]];
                    for (const [y, w] of Object.entries(_)) d.unshift(`    - stacktraces of ${w.length} other leaks continue with ${y}`);
                    d.unshift(f)
                }
                o += `


==================== Leaking disposable ${a}/${s.length}: ${c.value.constructor.name} ====================
${d.join(`
`)}
============================================================

`
            }
            return s.length > t && (o += `


... and ${s.length-t} more leaking disposables

`), {
                leaks: s,
                details: o
            }
        }
    };
Zu.idx = 0;

function Qu(e) {
    ti = e
}
if (Xu) {
    const e = "__is_disposable_tracked__";
    Qu(new class {
        trackDisposable(t) {
            const i = new Error("Potentially leaked disposable").stack;
            setTimeout(() => {
                t[e] || console.log(i)
            }, 3e3)
        }
        setParent(t, i) {
            if (t && t !== q.None) try {
                t[e] = !0
            } catch {}
        }
        markAsDisposed(t) {
            if (t && t !== q.None) try {
                t[e] = !0
            } catch {}
        }
        markAsSingleton(t) {}
    })
}

function Li(e) {
    return ti?.trackDisposable(e), e
}

function Ri(e) {
    ti?.markAsDisposed(e)
}

function ps(e, t) {
    ti?.setParent(e, t)
}

function Ju(e, t) {
    if (ti)
        for (const i of e) ti.setParent(i, t)
}

function Tl(e) {
    return ti?.markAsSingleton(e), e
}

function e1(e) {
    return typeof e == "object" && e !== null && typeof e.dispose == "function" && e.dispose.length === 0
}

function Ke(e) {
    if (Ie.is(e)) {
        const t = [];
        for (const i of e)
            if (i) try {
                i.dispose()
            } catch (s) {
                t.push(s)
            }
        if (t.length === 1) throw t[0];
        if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
        return Array.isArray(e) ? [] : e
    } else if (e) return e.dispose(), e
}

function t1(...e) {
    const t = de(() => Ke(e));
    return Ju(e, t), t
}

function de(e) {
    const t = Li({
        dispose: pl(() => {
            Ri(t), e()
        })
    });
    return t
}
var xl = class su {
    constructor() {
        this._toDispose = new Set, this._isDisposed = !1, Li(this)
    }
    dispose() {
        this._isDisposed || (Ri(this), this._isDisposed = !0, this.clear())
    }
    get isDisposed() {
        return this._isDisposed
    }
    clear() {
        if (this._toDispose.size !== 0) try {
            Ke(this._toDispose)
        } finally {
            this._toDispose.clear()
        }
    }
    add(t) {
        if (!t) return t;
        if (t === this) throw new Error("Cannot register a disposable on itself!");
        return ps(t, this), this._isDisposed ? su.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(t), t
    }
    delete(t) {
        if (t) {
            if (t === this) throw new Error("Cannot dispose a disposable on itself!");
            this._toDispose.delete(t), t.dispose()
        }
    }
    deleteAndLeak(t) {
        t && this._toDispose.has(t) && (this._toDispose.delete(t), ps(t, null))
    }
};
xl.DISABLE_DISPOSED_WARNING = !1;
var Y = xl,
    q = class {
        constructor() {
            this._store = new Y, Li(this), ps(this._store, this)
        }
        dispose() {
            Ri(this), this._store.dispose()
        }
        _register(e) {
            if (e === this) throw new Error("Cannot register a disposable on itself!");
            return this._store.add(e)
        }
    };
q.None = Object.freeze({
    dispose() {}
});
var Al = class {
        constructor() {
            this._isDisposed = !1, Li(this)
        }
        get value() {
            return this._isDisposed ? void 0 : this._value
        }
        set value(e) {
            this._isDisposed || e === this._value || (this._value?.dispose(), e && ps(e, this), this._value = e)
        }
        clear() {
            this.value = void 0
        }
        dispose() {
            this._isDisposed = !0, Ri(this), this._value?.dispose(), this._value = void 0
        }
        clearAndLeak() {
            const e = this._value;
            return this._value = void 0, e && ps(e, null), e
        }
    },
    i1 = class {
        constructor() {
            this._store = new Map, this._isDisposed = !1, Li(this)
        }
        dispose() {
            Ri(this), this._isDisposed = !0, this.clearAndDisposeAll()
        }
        clearAndDisposeAll() {
            if (this._store.size) try {
                Ke(this._store.values())
            } finally {
                this._store.clear()
            }
        }
        has(e) {
            return this._store.has(e)
        }
        get size() {
            return this._store.size
        }
        get(e) {
            return this._store.get(e)
        }
        set(e, t, i = !1) {
            this._isDisposed && console.warn(new Error("Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!").stack), i || this._store.get(e)?.dispose(), this._store.set(e, t)
        }
        deleteAndDispose(e) {
            this._store.get(e)?.dispose(), this._store.delete(e)
        }
        deleteAndLeak(e) {
            const t = this._store.get(e);
            return this._store.delete(e), t
        }
        keys() {
            return this._store.keys()
        }
        values() {
            return this._store.values()
        } [Symbol.iterator]() {
            return this._store[Symbol.iterator]()
        }
    },
    Ar = class xa {
        constructor(t) {
            this.element = t, this.next = xa.Undefined, this.prev = xa.Undefined
        }
    };
Ar.Undefined = new Ar(void 0);
var pe = Ar,
    Nl = class {
        constructor() {
            this._first = pe.Undefined, this._last = pe.Undefined, this._size = 0
        }
        get size() {
            return this._size
        }
        get first() {
            return this._first
        }
        isEmpty() {
            return this._first === pe.Undefined
        }
        clear() {
            let e = this._first;
            for (; e !== pe.Undefined;) {
                const t = e.next;
                e.prev = pe.Undefined, e.next = pe.Undefined, e = t
            }
            this._first = pe.Undefined, this._last = pe.Undefined, this._size = 0
        }
        unshift(e) {
            return this._insert(e, !1)
        }
        push(e) {
            return this._insert(e, !0)
        }
        _insert(e, t) {
            const i = new pe(e);
            if (this._first === pe.Undefined) this._first = i, this._last = i;
            else if (t) {
                const n = this._last;
                this._last = i, i.prev = n, n.next = i
            } else {
                const n = this._first;
                this._first = i, i.next = n, n.prev = i
            }
            this._size += 1;
            let s = !1;
            return () => {
                s || (s = !0, this._remove(i))
            }
        }
        shift() {
            if (this._first !== pe.Undefined) {
                const e = this._first.element;
                return this._remove(this._first), e
            }
        }
        pop() {
            if (this._last !== pe.Undefined) {
                const e = this._last.element;
                return this._remove(this._last), e
            }
        }
        remove(e) {
            this._remove(e)
        }
        _remove(e) {
            if (e.prev !== pe.Undefined && e.next !== pe.Undefined) {
                const t = e.prev;
                t.next = e.next, e.next.prev = t
            } else e.prev === pe.Undefined && e.next === pe.Undefined ? (this._first = pe.Undefined, this._last = pe.Undefined) : e.next === pe.Undefined ? (this._last = this._last.prev, this._last.next = pe.Undefined) : e.prev === pe.Undefined && (this._first = this._first.next, this._first.prev = pe.Undefined);
            this._size -= 1
        }*[Symbol.iterator]() {
            let e = this._first;
            for (; e !== pe.Undefined;) yield e.element, e = e.next
        }
    },
    s1 = globalThis.performance && typeof globalThis.performance.now == "function",
    n1 = class nu {
        static create(t) {
            return new nu(t)
        }
        constructor(t) {
            this._now = s1 && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1
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
    Il = !1,
    r1 = !1,
    A;
(e => {
    e.None = () => q.None;

    function t(M) {
        if (r1) {
            const {
                onDidAddListener: k
            } = M, R = Ir.create();
            let N = 0;
            M.onDidAddListener = () => {
                ++N === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), R.print()), k?.()
            }
        }
    }

    function i(M, k) {
        return p(M, () => {}, 0, void 0, !0, void 0, k)
    }
    e.defer = i;

    function s(M) {
        return (k, R = null, N) => {
            let B = !1,
                W;
            return W = M(U => {
                if (!B) return W ? W.dispose() : B = !0, k.call(R, U)
            }, null, N), B && W.dispose(), W
        }
    }
    e.once = s;

    function n(M, k) {
        return e.once(e.filter(M, k))
    }
    e.onceIf = n;

    function r(M, k, R) {
        return u((N, B = null, W) => M(U => N.call(B, k(U)), null, W), R)
    }
    e.map = r;

    function o(M, k, R) {
        return u((N, B = null, W) => M(U => {
            k(U), N.call(B, U)
        }, null, W), R)
    }
    e.forEach = o;

    function a(M, k, R) {
        return u((N, B = null, W) => M(U => k(U) && N.call(B, U), null, W), R)
    }
    e.filter = a;

    function c(M) {
        return M
    }
    e.signal = c;

    function h(...M) {
        return (k, R = null, N) => {
            const B = t1(...M.map(W => W(U => k.call(R, U))));
            return f(B, N)
        }
    }
    e.any = h;

    function d(M, k, R, N) {
        let B = R;
        return r(M, W => (B = k(B, W), B), N)
    }
    e.reduce = d;

    function u(M, k) {
        let R;
        const N = {
            onWillAddFirstListener() {
                R = M(B.fire, B)
            },
            onDidRemoveLastListener() {
                R?.dispose()
            }
        };
        k || t(N);
        const B = new L(N);
        return k?.add(B), B.event
    }

    function f(M, k) {
        return k instanceof Array ? k.push(M) : k && k.add(M), M
    }

    function p(M, k, R = 100, N = !1, B = !1, W, U) {
        let be, J, _t, ce = 0,
            at;
        const Ei = {
            leakWarningThreshold: W,
            onWillAddFirstListener() {
                be = M(os => {
                    ce++, J = k(J, os), N && !_t && (Jt.fire(J), J = void 0), at = () => {
                        const tn = J;
                        J = void 0, _t = void 0, (!N || ce > 1) && Jt.fire(tn), ce = 0
                    }, typeof R == "number" ? (clearTimeout(_t), _t = setTimeout(at, R)) : _t === void 0 && (_t = 0, queueMicrotask(at))
                })
            },
            onWillRemoveListener() {
                B && ce > 0 && at?.()
            },
            onDidRemoveLastListener() {
                at = void 0, be.dispose()
            }
        };
        U || t(Ei);
        const Jt = new L(Ei);
        return U?.add(Jt), Jt.event
    }
    e.debounce = p;

    function g(M, k = 0, R) {
        return e.debounce(M, (N, B) => N ? (N.push(B), N) : [B], k, void 0, !0, void 0, R)
    }
    e.accumulate = g;

    function _(M, k = (N, B) => N === B, R) {
        let N = !0,
            B;
        return a(M, W => {
            const U = N || !k(W, B);
            return N = !1, B = W, U
        }, R)
    }
    e.latch = _;

    function y(M, k, R) {
        return [e.filter(M, k, R), e.filter(M, N => !k(N), R)]
    }
    e.split = y;

    function w(M, k = !1, R = [], N) {
        let B = R.slice(),
            W = M(J => {
                B ? B.push(J) : be.fire(J)
            });
        N && N.add(W);
        const U = () => {
                B?.forEach(J => be.fire(J)), B = null
            },
            be = new L({
                onWillAddFirstListener() {
                    W || (W = M(J => be.fire(J)), N && N.add(W))
                },
                onDidAddFirstListener() {
                    B && (k ? setTimeout(U) : U())
                },
                onDidRemoveLastListener() {
                    W && W.dispose(), W = null
                }
            });
        return N && N.add(be), be.event
    }
    e.buffer = w;

    function C(M, k) {
        return (N, B, W) => {
            const U = k(new E);
            return M(function(be) {
                const J = U.evaluate(be);
                J !== D && N.call(B, J)
            }, void 0, W)
        }
    }
    e.chain = C;
    const D = Symbol("HaltChainable");
    class E {
        constructor() {
            this.steps = []
        }
        map(k) {
            return this.steps.push(k), this
        }
        forEach(k) {
            return this.steps.push(R => (k(R), R)), this
        }
        filter(k) {
            return this.steps.push(R => k(R) ? R : D), this
        }
        reduce(k, R) {
            let N = R;
            return this.steps.push(B => (N = k(N, B), N)), this
        }
        latch(k = (R, N) => R === N) {
            let R = !0,
                N;
            return this.steps.push(B => {
                const W = R || !k(B, N);
                return R = !1, N = B, W ? B : D
            }), this
        }
        evaluate(k) {
            for (const R of this.steps)
                if (k = R(k), k === D) break;
            return k
        }
    }

    function b(M, k, R = N => N) {
        const N = (...be) => U.fire(R(...be)),
            B = () => M.on(k, N),
            W = () => M.removeListener(k, N),
            U = new L({
                onWillAddFirstListener: B,
                onDidRemoveLastListener: W
            });
        return U.event
    }
    e.fromNodeEventEmitter = b;

    function S(M) {
        let k;
        const R = () => {
                k = M.subscribe(W => B.fire(W))
            },
            N = () => {
                k?.unsubscribe(), k = void 0
            },
            B = new L({
                onWillAddFirstListener: R,
                onDidRemoveLastListener: N
            });
        return B.event
    }
    e.fromRxJS = S;

    function I(M, k, R = N => N) {
        const N = (...be) => U.fire(R(...be)),
            B = () => M.addEventListener(k, N),
            W = () => M.removeEventListener(k, N),
            U = new L({
                onWillAddFirstListener: B,
                onDidRemoveLastListener: W
            });
        return U.event
    }
    e.fromDOMEventEmitter = I;

    function P(M, k) {
        return new Promise(R => s(M)(R, null, k))
    }
    e.toPromise = P;

    function j(M) {
        const k = new L;
        return M.then(R => {
            k.fire(R)
        }, () => {
            k.fire(void 0)
        }).finally(() => {
            k.dispose()
        }), k.event
    }
    e.fromPromise = j;

    function ue(M, k) {
        return M(R => k.fire(R))
    }
    e.forward = ue;

    function K(M, k, R) {
        return k(R), M(N => k(N))
    }
    e.runAndSubscribe = K;
    class $ {
        constructor(k, R) {
            this._observable = k, this._counter = 0, this._hasChanged = !1;
            const N = {
                onWillAddFirstListener: () => {
                    k.addObserver(this), this._observable.reportChanges()
                },
                onDidRemoveLastListener: () => {
                    k.removeObserver(this)
                }
            };
            R || t(N), this.emitter = new L(N), R && R.add(this.emitter)
        }
        beginUpdate(k) {
            this._counter++
        }
        handlePossibleChange(k) {}
        handleChange(k, R) {
            this._hasChanged = !0
        }
        endUpdate(k) {
            this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())))
        }
    }

    function Oe(M, k) {
        return new $(M, k).emitter.event
    }
    e.fromObservable = Oe;

    function Qt(M) {
        return (k, R, N) => {
            let B = 0,
                W = !1;
            const U = {
                beginUpdate() {
                    B++
                },
                endUpdate() {
                    B--, B === 0 && (M.reportChanges(), W && (W = !1, k.call(R)))
                },
                handlePossibleChange() {},
                handleChange() {
                    W = !0
                }
            };
            M.addObserver(U), M.reportChanges();
            const be = {
                dispose() {
                    M.removeObserver(U)
                }
            };
            return N instanceof Y ? N.add(be) : Array.isArray(N) && N.push(be), be
        }
    }
    e.fromObservableLight = Qt
})(A || (A = {}));
var Nr = class Aa {
    constructor(t) {
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${Aa._idPool++}`, Aa.all.add(this)
    }
    start(t) {
        this._stopWatch = new n1, this.listenerCount = t
    }
    stop() {
        if (this._stopWatch) {
            const t = this._stopWatch.elapsed();
            this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0
        }
    }
};
Nr.all = new Set, Nr._idPool = 0;
var o1 = Nr,
    Ll = -1,
    Rl = class ru {
        constructor(t, i, s = (ru._idPool++).toString(16).padStart(3, "0")) {
            this._errorHandler = t, this.threshold = i, this.name = s, this._warnCountdown = 0
        }
        dispose() {
            this._stacks?.clear()
        }
        check(t, i) {
            const s = this.threshold;
            if (s <= 0 || i < s) return;
            this._stacks || (this._stacks = new Map);
            const n = this._stacks.get(t.value) || 0;
            if (this._stacks.set(t.value, n + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
                this._warnCountdown = s * .5;
                const [r, o] = this.getMostFrequentStack(), a = `[${this.name}] potential listener LEAK detected, having ${i} listeners already. MOST frequent listener (${o}):`;
                console.warn(a), console.warn(r);
                const c = new l1(a, r);
                this._errorHandler(c)
            }
            return () => {
                const r = this._stacks.get(t.value) || 0;
                this._stacks.set(t.value, r - 1)
            }
        }
        getMostFrequentStack() {
            if (!this._stacks) return;
            let t, i = 0;
            for (const [s, n] of this._stacks)(!t || i < n) && (t = [s, n], i = n);
            return t
        }
    };
Rl._idPool = 1;
var a1 = Rl,
    Ir = class ou {
        constructor(t) {
            this.value = t
        }
        static create() {
            const t = new Error;
            return new ou(t.stack ?? "")
        }
        print() {
            console.warn(this.value.split(`
`).slice(2).join(`
`))
        }
    },
    l1 = class extends Error {
        constructor(e, t) {
            super(e), this.name = "ListenerLeakError", this.stack = t
        }
    },
    c1 = class extends Error {
        constructor(e, t) {
            super(e), this.name = "ListenerRefusalError", this.stack = t
        }
    },
    h1 = 0,
    hn = class {
        constructor(e) {
            this.value = e, this.id = h1++
        }
    },
    d1 = 2,
    u1 = (e, t) => {
        if (e instanceof hn) t(e);
        else
            for (let i = 0; i < e.length; i++) {
                const s = e[i];
                s && t(s)
            }
    },
    L = class {
        constructor(e) {
            this._size = 0, this._options = e, this._leakageMon = Ll > 0 || this._options?.leakWarningThreshold ? new a1(e?.onListenerError ?? ft, this._options?.leakWarningThreshold ?? Ll) : void 0, this._perfMon = this._options?._profName ? new o1(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue
        }
        dispose() {
            if (!this._disposed) {
                if (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
                    if (Il) {
                        const e = this._listeners;
                        queueMicrotask(() => {
                            u1(e, t => t.stack?.print())
                        })
                    }
                    this._listeners = void 0, this._size = 0
                }
                this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose()
            }
        }
        get event() {
            return this._event ??= (e, t, i) => {
                if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
                    const a = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
                    console.warn(a);
                    const c = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1],
                        h = new c1(`${a}. HINT: Stack shows most frequent listener (${c[1]}-times)`, c[0]);
                    return (this._options?.onListenerError || ft)(h), q.None
                }
                if (this._disposed) return q.None;
                t && (e = e.bind(t));
                const s = new hn(e);
                let n, r;
                this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * .2) && (s.stack = Ir.create(), n = this._leakageMon.check(s.stack, this._size + 1)), Il && (s.stack = r ?? Ir.create()), this._listeners ? this._listeners instanceof hn ? (this._deliveryQueue ??= new f1, this._listeners = [this._listeners, s]) : this._listeners.push(s) : (this._options?.onWillAddFirstListener?.(this), this._listeners = s, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
                const o = de(() => {
                    n?.(), this._removeListener(s)
                });
                return i instanceof Y ? i.add(o) : Array.isArray(i) && i.push(o), o
            }, this._event
        }
        _removeListener(e) {
            if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
            if (this._size === 1) {
                this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
                return
            }
            const t = this._listeners,
                i = t.indexOf(e);
            if (i === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
            this._size--, t[i] = void 0;
            const s = this._deliveryQueue.current === this;
            if (this._size * d1 <= t.length) {
                let n = 0;
                for (let r = 0; r < t.length; r++) t[r] ? t[n++] = t[r] : s && n < this._deliveryQueue.end && (this._deliveryQueue.end--, n < this._deliveryQueue.i && this._deliveryQueue.i--);
                t.length = n
            }
        }
        _deliver(e, t) {
            if (!e) return;
            const i = this._options?.onListenerError || ft;
            if (!i) {
                e.value(t);
                return
            }
            try {
                e.value(t)
            } catch (s) {
                i(s)
            }
        }
        _deliverQueue(e) {
            const t = e.current._listeners;
            for (; e.i < e.end;) this._deliver(t[e.i++], e.value);
            e.reset()
        }
        fire(e) {
            if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners)
                if (this._listeners instanceof hn) this._deliver(this._listeners, e);
                else {
                    const t = this._deliveryQueue;
                    t.enqueue(this, e, this._listeners.length), this._deliverQueue(t)
                } this._perfMon?.stop()
        }
        hasListeners() {
            return this._size > 0
        }
    },
    f1 = class {
        constructor() {
            this.i = -1, this.end = 0
        }
        enqueue(e, t, i) {
            this.i = 0, this.end = i, this.current = e, this.value = t
        }
        reset() {
            this.i = this.end, this.current = void 0, this.value = void 0
        }
    },
    Lr = class {
        constructor() {
            this.data = []
        }
        wrapEvent(e, t, i) {
            return (s, n, r) => e(o => {
                const a = this.data[this.data.length - 1];
                if (!t) {
                    a ? a.buffers.push(() => s.call(n, o)) : s.call(n, o);
                    return
                }
                const c = a;
                if (!c) {
                    s.call(n, t(i, o));
                    return
                }
                c.items ??= [], c.items.push(o), c.buffers.length === 0 && a.buffers.push(() => {
                    c.reducedResult ??= i ? c.items.reduce(t, i) : c.items.reduce(t), s.call(n, c.reducedResult)
                })
            }, void 0, r)
        }
        bufferEvents(e) {
            const t = {
                buffers: new Array
            };
            this.data.push(t);
            const i = e();
            return this.data.pop(), t.buffers.forEach(s => s()), i
        }
    },
    gs = class {
        constructor() {
            this.listening = !1, this.inputEvent = A.None, this.inputEventListener = q.None, this.emitter = new L({
                onDidAddFirstListener: () => {
                    this.listening = !0, this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter)
                },
                onDidRemoveLastListener: () => {
                    this.listening = !1, this.inputEventListener.dispose()
                }
            }), this.event = this.emitter.event
        }
        set input(e) {
            this.inputEvent = e, this.listening && (this.inputEventListener.dispose(), this.inputEventListener = e(this.emitter.fire, this.emitter))
        }
        dispose() {
            this.inputEventListener.dispose(), this.emitter.dispose()
        }
    },
    Rr = class {
        constructor() {
            this.mapWindowIdToZoomLevel = new Map, this._onDidChangeZoomLevel = new L, this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event, this.mapWindowIdToZoomFactor = new Map, this._onDidChangeFullscreen = new L, this.onDidChangeFullscreen = this._onDidChangeFullscreen.event, this.mapWindowIdToFullScreen = new Map
        }
        getZoomLevel(t) {
            return this.mapWindowIdToZoomLevel.get(this.getWindowId(t)) ?? 0
        }
        setZoomLevel(t, i) {
            if (this.getZoomLevel(i) === t) return;
            const s = this.getWindowId(i);
            this.mapWindowIdToZoomLevel.set(s, t), this._onDidChangeZoomLevel.fire(s)
        }
        getZoomFactor(t) {
            return this.mapWindowIdToZoomFactor.get(this.getWindowId(t)) ?? 1
        }
        setZoomFactor(t, i) {
            this.mapWindowIdToZoomFactor.set(this.getWindowId(i), t)
        }
        setFullscreen(t, i) {
            if (this.isFullscreen(i) === t) return;
            const s = this.getWindowId(i);
            this.mapWindowIdToFullScreen.set(s, t), this._onDidChangeFullscreen.fire(s)
        }
        isFullscreen(t) {
            return !!this.mapWindowIdToFullScreen.get(this.getWindowId(t))
        }
        getWindowId(t) {
            return t.vscodeWindowId
        }
    };
Rr.INSTANCE = new Rr;
var Mi = Rr;

function p1(e, t, i) {
    typeof t == "string" && (t = e.matchMedia(t)), t.addEventListener("change", i)
}

function g1(e, t) {
    Mi.INSTANCE.setZoomLevel(e, t)
}

function Ml(e) {
    return Mi.INSTANCE.getZoomLevel(e)
}
var n5 = Mi.INSTANCE.onDidChangeZoomLevel;

function m1(e) {
    return Mi.INSTANCE.getZoomFactor(e)
}

function v1(e, t) {
    Mi.INSTANCE.setZoomFactor(e, t)
}
var r5 = Mi.INSTANCE.onDidChangeFullscreen,
    Pi = navigator.userAgent,
    dn = Pi.indexOf("Firefox") >= 0,
    un = Pi.indexOf("AppleWebKit") >= 0,
    Mr = Pi.indexOf("Chrome") >= 0,
    Pl = !Mr && Pi.indexOf("Safari") >= 0,
    o5 = Pi.indexOf("Electron/") >= 0,
    a5 = Pi.indexOf("Android") >= 0,
    fn = !1;
if (typeof T.matchMedia == "function") {
    const e = T.matchMedia("(display-mode: standalone) or (display-mode: window-controls-overlay)"),
        t = T.matchMedia("(display-mode: fullscreen)");
    fn = e.matches, p1(T, e, ({
        matches: i
    }) => {
        fn && t.matches || (fn = i)
    })
}

function y1() {
    return fn
}
var Oi = "en",
    pn = !1,
    gn = !1,
    ms = !1,
    b1 = !1,
    Ol = !1,
    Pr = !1,
    _1 = !1,
    w1 = !1,
    S1 = !1,
    C1 = !1,
    mn = void 0,
    vn = Oi,
    Fl = Oi,
    D1 = void 0,
    Ct = void 0,
    Dt = globalThis,
    Le = void 0;
typeof Dt.vscode < "u" && typeof Dt.vscode.process < "u" ? Le = Dt.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (Le = process);
var Bl = typeof Le?.versions?.electron == "string",
    E1 = Bl && Le?.type === "renderer";
if (typeof Le == "object") {
    pn = Le.platform === "win32", gn = Le.platform === "darwin", ms = Le.platform === "linux", b1 = ms && !!Le.env.SNAP && !!Le.env.SNAP_REVISION, _1 = Bl, S1 = !!Le.env.CI || !!Le.env.BUILD_ARTIFACTSTAGINGDIRECTORY, mn = Oi, vn = Oi;
    const e = Le.env.VSCODE_NLS_CONFIG;
    if (e) try {
        const t = JSON.parse(e);
        mn = t.userLocale, Fl = t.osLocale, vn = t.resolvedLanguage || Oi, D1 = t.languagePack?.translationsConfigFile
    } catch {}
    Ol = !0
} else typeof navigator == "object" && !E1 ? (Ct = navigator.userAgent, pn = Ct.indexOf("Windows") >= 0, gn = Ct.indexOf("Macintosh") >= 0, w1 = (Ct.indexOf("Macintosh") >= 0 || Ct.indexOf("iPad") >= 0 || Ct.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, ms = Ct.indexOf("Linux") >= 0, C1 = Ct?.indexOf("Mobi") >= 0, Pr = !0, vn = cl() || Oi, mn = navigator.language.toLowerCase(), Fl = mn) : console.error("Unable to resolve platform.");
var Or = 0;
gn ? Or = 1 : pn ? Or = 3 : ms && (Or = 2);
var Ft = pn,
    Re = gn,
    Hl = ms,
    yn = Ol,
    k1 = Pr,
    T1 = Pr && typeof Dt.importScripts == "function",
    x1 = T1 ? Dt.origin : void 0,
    pt = Ct,
    Bt = vn,
    zl;
(e => {
    function t() {
        return Bt
    }
    e.value = t;

    function i() {
        return Bt.length === 2 ? Bt === "en" : Bt.length >= 3 ? Bt[0] === "e" && Bt[1] === "n" && Bt[2] === "-" : !1
    }
    e.isDefaultVariant = i;

    function s() {
        return Bt === "en"
    }
    e.isDefault = s
})(zl || (zl = {}));
var A1 = typeof Dt.postMessage == "function" && !Dt.importScripts,
    N1 = (() => {
        if (A1) {
            const e = [];
            Dt.addEventListener("message", i => {
                if (i.data && i.data.vscodeScheduleAsyncWork)
                    for (let s = 0, n = e.length; s < n; s++) {
                        const r = e[s];
                        if (r.id === i.data.vscodeScheduleAsyncWork) {
                            e.splice(s, 1), r.callback();
                            return
                        }
                    }
            });
            let t = 0;
            return i => {
                const s = ++t;
                e.push({
                    id: s,
                    callback: i
                }), Dt.postMessage({
                    vscodeScheduleAsyncWork: s
                }, "*")
            }
        }
        return e => setTimeout(e)
    })(),
    I1 = !!(pt && pt.indexOf("Chrome") >= 0),
    l5 = !!(pt && pt.indexOf("Firefox") >= 0),
    c5 = !!(!I1 && pt && pt.indexOf("Safari") >= 0),
    h5 = !!(pt && pt.indexOf("Edg/") >= 0),
    d5 = !!(pt && pt.indexOf("Android") >= 0),
    u5 = Le?.arch,
    f5 = Le?.platform,
    p5 = Le?.versions?.node,
    g5 = {
        clipboard: {
            writeText: yn || document.queryCommandSupported && document.queryCommandSupported("copy") || !!(navigator && navigator.clipboard && navigator.clipboard.writeText),
            readText: yn || !!(navigator && navigator.clipboard && navigator.clipboard.readText)
        },
        keyboard: yn || y1() ? 0 : navigator.keyboard || Pl ? 1 : 2,
        touch: "ontouchstart" in T || navigator.maxTouchPoints > 0,
        pointerEvents: T.PointerEvent && ("ontouchstart" in T || navigator.maxTouchPoints > 0)
    },
    Fr = class {
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
    bn = new Fr,
    Br = new Fr,
    Hr = new Fr,
    $l = new Array(230),
    L1 = {},
    R1 = [],
    M1 = Object.create(null),
    P1 = Object.create(null),
    Ul = [],
    zr = [];
for (let e = 0; e <= 193; e++) Ul[e] = -1;
for (let e = 0; e <= 132; e++) zr[e] = -1;
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
        i = [],
        s = [];
    for (const n of t) {
        const [r, o, a, c, h, d, u, f, p] = n;
        if (s[o] || (s[o] = !0, R1[o] = a, M1[a] = o, P1[a.toLowerCase()] = o, r && (Ul[o] = c, c !== 0 && c !== 3 && c !== 5 && c !== 4 && c !== 6 && c !== 57 && (zr[c] = o))), !i[c]) {
            if (i[c] = !0, !h) throw new Error(`String representation missing for key code ${c} around scan code ${a}`);
            bn.define(c, h), Br.define(c, f || h), Hr.define(c, p || f || h)
        }
        d && ($l[d] = c), u && (L1[u] = c)
    }
    zr[3] = 46
})();
var _n;
(e => {
    function t(a) {
        return bn.keyCodeToStr(a)
    }
    e.toString = t;

    function i(a) {
        return bn.strToKeyCode(a)
    }
    e.fromString = i;

    function s(a) {
        return Br.keyCodeToStr(a)
    }
    e.toUserSettingsUS = s;

    function n(a) {
        return Hr.keyCodeToStr(a)
    }
    e.toUserSettingsGeneral = n;

    function r(a) {
        return Br.strToKeyCode(a) || Hr.strToKeyCode(a)
    }
    e.fromUserSettings = r;

    function o(a) {
        if (a >= 98 && a <= 113) return null;
        switch (a) {
            case 16:
                return "Up";
            case 18:
                return "Down";
            case 15:
                return "Left";
            case 17:
                return "Right"
        }
        return bn.keyCodeToStr(a)
    }
    e.toElectronAccelerator = o
})(_n || (_n = {}));
var m5 = 2091,
    v5 = 2096,
    O1 = class au {
        constructor(t, i, s, n, r) {
            this.ctrlKey = t, this.shiftKey = i, this.altKey = s, this.metaKey = n, this.keyCode = r
        }
        equals(t) {
            return t instanceof au && this.ctrlKey === t.ctrlKey && this.shiftKey === t.shiftKey && this.altKey === t.altKey && this.metaKey === t.metaKey && this.keyCode === t.keyCode
        }
        getHashCode() {
            const t = this.ctrlKey ? "1" : "0",
                i = this.shiftKey ? "1" : "0",
                s = this.altKey ? "1" : "0",
                n = this.metaKey ? "1" : "0";
            return `K${t}${i}${s}${n}${this.keyCode}`
        }
        isModifierKey() {
            return this.keyCode === 0 || this.keyCode === 5 || this.keyCode === 57 || this.keyCode === 6 || this.keyCode === 4
        }
        toKeybinding() {
            return new F1([this])
        }
        isDuplicateModifierCase() {
            return this.ctrlKey && this.keyCode === 5 || this.shiftKey && this.keyCode === 4 || this.altKey && this.keyCode === 6 || this.metaKey && this.keyCode === 57
        }
    },
    F1 = class {
        constructor(e) {
            if (e.length === 0) throw Lu("chords");
            this.chords = e
        }
        getHashCode() {
            let e = "";
            for (let t = 0, i = this.chords.length; t < i; t++) t !== 0 && (e += ";"), e += this.chords[t].getHashCode();
            return e
        }
        equals(e) {
            if (e === null || this.chords.length !== e.chords.length) return !1;
            for (let t = 0; t < this.chords.length; t++)
                if (!this.chords[t].equals(e.chords[t])) return !1;
            return !0
        }
    };

function B1(e) {
    if (e.charCode) {
        const i = String.fromCharCode(e.charCode).toUpperCase();
        return _n.fromString(i)
    }
    const t = e.keyCode;
    if (t === 3) return 7;
    if (dn) switch (t) {
        case 59:
            return 85;
        case 60:
            if (Hl) return 97;
            break;
        case 61:
            return 86;
        case 107:
            return 109;
        case 109:
            return 111;
        case 173:
            return 88;
        case 224:
            if (Re) return 57;
            break
    } else if (un) {
        if (Re && t === 93) return 57;
        if (!Re && t === 92) return 57
    } return $l[t] || 0
}
var H1 = Re ? 256 : 2048,
    z1 = 512,
    $1 = 1024,
    U1 = Re ? 2048 : 256,
    Me = class {
        constructor(e) {
            this._standardKeyboardEventBrand = !0;
            const t = e;
            this.browserEvent = t, this.target = t.target, this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, this.altGraphKey = t.getModifierState?.("AltGraph"), this.keyCode = B1(t), this.code = t.code, this.ctrlKey = this.ctrlKey || this.keyCode === 5, this.altKey = this.altKey || this.keyCode === 6, this.shiftKey = this.shiftKey || this.keyCode === 4, this.metaKey = this.metaKey || this.keyCode === 57, this._asKeybinding = this._computeKeybinding(), this._asKeyCodeChord = this._computeKeyCodeChord()
        }
        preventDefault() {
            this.browserEvent && this.browserEvent.preventDefault && this.browserEvent.preventDefault()
        }
        stopPropagation() {
            this.browserEvent && this.browserEvent.stopPropagation && this.browserEvent.stopPropagation()
        }
        toKeyCodeChord() {
            return this._asKeyCodeChord
        }
        equals(e) {
            return this._asKeybinding === e
        }
        _computeKeybinding() {
            let e = 0;
            this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (e = this.keyCode);
            let t = 0;
            return this.ctrlKey && (t |= H1), this.altKey && (t |= z1), this.shiftKey && (t |= $1), this.metaKey && (t |= U1), t |= e, t
        }
        _computeKeyCodeChord() {
            let e = 0;
            return this.keyCode !== 5 && this.keyCode !== 4 && this.keyCode !== 6 && this.keyCode !== 57 && (e = this.keyCode), new O1(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, e)
        }
    },
    Wl = new WeakMap;

function W1(e) {
    if (!e.parent || e.parent === e) return null;
    try {
        const t = e.location,
            i = e.parent.location;
        if (t.origin !== "null" && i.origin !== "null" && t.origin !== i.origin) return null
    } catch {
        return null
    }
    return e.parent
}
var V1 = class {
        static getSameOriginWindowChain(e) {
            let t = Wl.get(e);
            if (!t) {
                t = [], Wl.set(e, t);
                let i = e,
                    s;
                do s = W1(i), s ? t.push({
                    window: new WeakRef(i),
                    iframeElement: i.frameElement || null
                }) : t.push({
                    window: new WeakRef(i),
                    iframeElement: null
                }), i = s; while (i)
            }
            return t.slice(0)
        }
        static getPositionOfChildWindowRelativeToAncestorWindow(e, t) {
            if (!t || e === t) return {
                top: 0,
                left: 0
            };
            let i = 0,
                s = 0;
            const n = this.getSameOriginWindowChain(e);
            for (const r of n) {
                const o = r.window.deref();
                if (i += o?.scrollY ?? 0, s += o?.scrollX ?? 0, o === t || !r.iframeElement) break;
                const a = r.iframeElement.getBoundingClientRect();
                i += a.top, s += a.left
            }
            return {
                top: i,
                left: s
            }
        }
    },
    ii = class {
        constructor(e, t) {
            this.timestamp = Date.now(), this.browserEvent = t, this.leftButton = t.button === 0, this.middleButton = t.button === 1, this.rightButton = t.button === 2, this.buttons = t.buttons, this.target = t.target, this.detail = t.detail || 1, t.type === "dblclick" && (this.detail = 2), this.ctrlKey = t.ctrlKey, this.shiftKey = t.shiftKey, this.altKey = t.altKey, this.metaKey = t.metaKey, typeof t.pageX == "number" ? (this.posx = t.pageX, this.posy = t.pageY) : (this.posx = t.clientX + this.target.ownerDocument.body.scrollLeft + this.target.ownerDocument.documentElement.scrollLeft, this.posy = t.clientY + this.target.ownerDocument.body.scrollTop + this.target.ownerDocument.documentElement.scrollTop);
            const i = V1.getPositionOfChildWindowRelativeToAncestorWindow(e, t.view);
            this.posx -= i.left, this.posy -= i.top
        }
        preventDefault() {
            this.browserEvent.preventDefault()
        }
        stopPropagation() {
            this.browserEvent.stopPropagation()
        }
    },
    Fi = class {
        constructor(e, t = 0, i = 0) {
            this.browserEvent = e || null, this.target = e ? e.target || e.targetNode || e.srcElement : null, this.deltaY = i, this.deltaX = t;
            let s = !1;
            if (Mr) {
                const n = navigator.userAgent.match(/Chrome\/(\d+)/);
                s = (n ? parseInt(n[1]) : 123) <= 122
            }
            if (e) {
                const n = e,
                    r = e,
                    o = e.view?.devicePixelRatio || 1;
                if (typeof n.wheelDeltaY < "u") s ? this.deltaY = n.wheelDeltaY / (120 * o) : this.deltaY = n.wheelDeltaY / 120;
                else if (typeof r.VERTICAL_AXIS < "u" && r.axis === r.VERTICAL_AXIS) this.deltaY = -r.detail / 3;
                else if (e.type === "wheel") {
                    const a = e;
                    a.deltaMode === a.DOM_DELTA_LINE ? dn && !Re ? this.deltaY = -e.deltaY / 3 : this.deltaY = -e.deltaY : this.deltaY = -e.deltaY / 40
                }
                if (typeof n.wheelDeltaX < "u") Pl && Ft ? this.deltaX = -(n.wheelDeltaX / 120) : s ? this.deltaX = n.wheelDeltaX / (120 * o) : this.deltaX = n.wheelDeltaX / 120;
                else if (typeof r.HORIZONTAL_AXIS < "u" && r.axis === r.HORIZONTAL_AXIS) this.deltaX = -e.detail / 3;
                else if (e.type === "wheel") {
                    const a = e;
                    a.deltaMode === a.DOM_DELTA_LINE ? dn && !Re ? this.deltaX = -e.deltaX / 3 : this.deltaX = -e.deltaX : this.deltaX = -e.deltaX / 40
                }
                this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta && (s ? this.deltaY = e.wheelDelta / (120 * o) : this.deltaY = e.wheelDelta / 120)
            }
        }
        preventDefault() {
            this.browserEvent?.preventDefault()
        }
        stopPropagation() {
            this.browserEvent?.stopPropagation()
        }
    },
    Vl = Object.freeze(function(e, t) {
        const i = setTimeout(e.bind(t), 0);
        return {
            dispose() {
                clearTimeout(i)
            }
        }
    }),
    vs;
(e => {
    function t(i) {
        return i === e.None || i === e.Cancelled || i instanceof wn ? !0 : !i || typeof i != "object" ? !1 : typeof i.isCancellationRequested == "boolean" && typeof i.onCancellationRequested == "function"
    }
    e.isCancellationToken = t, e.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: A.None
    }), e.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: Vl
    })
})(vs || (vs = {}));
var wn = class {
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
            return this._isCancelled ? Vl : (this._emitter || (this._emitter = new L), this._emitter.event)
        }
        dispose() {
            this._emitter && (this._emitter.dispose(), this._emitter = null)
        }
    },
    Kl = class {
        constructor(e) {
            this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this)
        }
        get token() {
            return this._token || (this._token = new wn), this._token
        }
        cancel() {
            this._token ? this._token instanceof wn && this._token.cancel() : this._token = vs.Cancelled
        }
        dispose(e = !1) {
            e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof wn && this._token.dispose() : this._token = vs.None
        }
    },
    si, $r = globalThis.vscode;
if (typeof $r < "u" && typeof $r.process < "u") {
    const e = $r.process;
    si = {
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
} else typeof process < "u" && typeof process?.versions?.node == "string" ? si = {
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
} : si = {
    get platform() {
        return Ft ? "win32" : Re ? "darwin" : "linux"
    },
    get arch() {},
    get env() {
        return {}
    },
    cwd() {
        return "/"
    }
};
var Sn = si.cwd,
    Ur = si.env,
    K1 = si.platform,
    y5 = si.arch,
    G1 = 65,
    q1 = 97,
    j1 = 90,
    Y1 = 122,
    ni = 46,
    Ee = 47,
    Ge = 92,
    Et = 58,
    X1 = 63,
    Gl = class extends Error {
        constructor(e, t, i) {
            let s;
            typeof t == "string" && t.indexOf("not ") === 0 ? (s = "must not be", t = t.replace(/^not /, "")) : s = "must be";
            const n = e.indexOf(".") !== -1 ? "property" : "argument";
            let r = `The "${e}" ${n} ${s} of type ${t}`;
            r += `. Received type ${typeof i}`, super(r), this.code = "ERR_INVALID_ARG_TYPE"
        }
    };

function Z1(e, t) {
    if (e === null || typeof e != "object") throw new Gl(t, "Object", e)
}

function ve(e, t) {
    if (typeof e != "string") throw new Gl(t, "string", e)
}
var qe = K1 === "win32";

function G(e) {
    return e === Ee || e === Ge
}

function Wr(e) {
    return e === Ee
}

function kt(e) {
    return e >= G1 && e <= j1 || e >= q1 && e <= Y1
}

function Cn(e, t, i, s) {
    let n = "",
        r = 0,
        o = -1,
        a = 0,
        c = 0;
    for (let h = 0; h <= e.length; ++h) {
        if (h < e.length) c = e.charCodeAt(h);
        else {
            if (s(c)) break;
            c = Ee
        }
        if (s(c)) {
            if (!(o === h - 1 || a === 1))
                if (a === 2) {
                    if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== ni || n.charCodeAt(n.length - 2) !== ni) {
                        if (n.length > 2) {
                            const d = n.lastIndexOf(i);
                            d === -1 ? (n = "", r = 0) : (n = n.slice(0, d), r = n.length - 1 - n.lastIndexOf(i)), o = h, a = 0;
                            continue
                        } else if (n.length !== 0) {
                            n = "", r = 0, o = h, a = 0;
                            continue
                        }
                    }
                    t && (n += n.length > 0 ? `${i}..` : "..", r = 2)
                } else n.length > 0 ? n += `${i}${e.slice(o+1,h)}` : n = e.slice(o + 1, h), r = h - o - 1;
            o = h, a = 0
        } else c === ni && a !== -1 ? ++a : a = -1
    }
    return n
}

function Q1(e) {
    return e ? `${e[0]==="."?"":"."}${e}` : ""
}

function ql(e, t) {
    Z1(t, "pathObject");
    const i = t.dir || t.root,
        s = t.base || `${t.name||""}${Q1(t.ext)}`;
    return i ? i === t.root ? `${i}${s}` : `${i}${e}${s}` : s
}
var _e = {
        resolve(...e) {
            let t = "",
                i = "",
                s = !1;
            for (let n = e.length - 1; n >= -1; n--) {
                let r;
                if (n >= 0) {
                    if (r = e[n], ve(r, `paths[${n}]`), r.length === 0) continue
                } else t.length === 0 ? r = Sn() : (r = Ur[`=${t}`] || Sn(), (r === void 0 || r.slice(0, 2).toLowerCase() !== t.toLowerCase() && r.charCodeAt(2) === Ge) && (r = `${t}\\`));
                const o = r.length;
                let a = 0,
                    c = "",
                    h = !1;
                const d = r.charCodeAt(0);
                if (o === 1) G(d) && (a = 1, h = !0);
                else if (G(d))
                    if (h = !0, G(r.charCodeAt(1))) {
                        let u = 2,
                            f = u;
                        for (; u < o && !G(r.charCodeAt(u));) u++;
                        if (u < o && u !== f) {
                            const p = r.slice(f, u);
                            for (f = u; u < o && G(r.charCodeAt(u));) u++;
                            if (u < o && u !== f) {
                                for (f = u; u < o && !G(r.charCodeAt(u));) u++;
                                (u === o || u !== f) && (c = `\\\\${p}\\${r.slice(f,u)}`, a = u)
                            }
                        }
                    } else a = 1;
                else kt(d) && r.charCodeAt(1) === Et && (c = r.slice(0, 2), a = 2, o > 2 && G(r.charCodeAt(2)) && (h = !0, a = 3));
                if (c.length > 0)
                    if (t.length > 0) {
                        if (c.toLowerCase() !== t.toLowerCase()) continue
                    } else t = c;
                if (s) {
                    if (t.length > 0) break
                } else if (i = `${r.slice(a)}\\${i}`, s = h, h && t.length > 0) break
            }
            return i = Cn(i, !s, "\\", G), s ? `${t}\\${i}` : `${t}${i}` || "."
        },
        normalize(e) {
            ve(e, "path");
            const t = e.length;
            if (t === 0) return ".";
            let i = 0,
                s, n = !1;
            const r = e.charCodeAt(0);
            if (t === 1) return Wr(r) ? "\\" : e;
            if (G(r))
                if (n = !0, G(e.charCodeAt(1))) {
                    let a = 2,
                        c = a;
                    for (; a < t && !G(e.charCodeAt(a));) a++;
                    if (a < t && a !== c) {
                        const h = e.slice(c, a);
                        for (c = a; a < t && G(e.charCodeAt(a));) a++;
                        if (a < t && a !== c) {
                            for (c = a; a < t && !G(e.charCodeAt(a));) a++;
                            if (a === t) return `\\\\${h}\\${e.slice(c)}\\`;
                            a !== c && (s = `\\\\${h}\\${e.slice(c,a)}`, i = a)
                        }
                    }
                } else i = 1;
            else kt(r) && e.charCodeAt(1) === Et && (s = e.slice(0, 2), i = 2, t > 2 && G(e.charCodeAt(2)) && (n = !0, i = 3));
            let o = i < t ? Cn(e.slice(i), !n, "\\", G) : "";
            if (o.length === 0 && !n && (o = "."), o.length > 0 && G(e.charCodeAt(t - 1)) && (o += "\\"), !n && s === void 0 && e.includes(":")) {
                if (o.length >= 2 && kt(o.charCodeAt(0)) && o.charCodeAt(1) === Et) return `.\\${o}`;
                let a = e.indexOf(":");
                do
                    if (a === t - 1 || G(e.charCodeAt(a + 1))) return `.\\${o}`; while ((a = e.indexOf(":", a + 1)) !== -1)
            }
            return s === void 0 ? n ? `\\${o}` : o : n ? `${s}\\${o}` : `${s}${o}`
        },
        isAbsolute(e) {
            ve(e, "path");
            const t = e.length;
            if (t === 0) return !1;
            const i = e.charCodeAt(0);
            return G(i) || t > 2 && kt(i) && e.charCodeAt(1) === Et && G(e.charCodeAt(2))
        },
        join(...e) {
            if (e.length === 0) return ".";
            let t, i;
            for (let r = 0; r < e.length; ++r) {
                const o = e[r];
                ve(o, "path"), o.length > 0 && (t === void 0 ? t = i = o : t += `\\${o}`)
            }
            if (t === void 0) return ".";
            let s = !0,
                n = 0;
            if (typeof i == "string" && G(i.charCodeAt(0))) {
                ++n;
                const r = i.length;
                r > 1 && G(i.charCodeAt(1)) && (++n, r > 2 && (G(i.charCodeAt(2)) ? ++n : s = !1))
            }
            if (s) {
                for (; n < t.length && G(t.charCodeAt(n));) n++;
                n >= 2 && (t = `\\${t.slice(n)}`)
            }
            return _e.normalize(t)
        },
        relative(e, t) {
            if (ve(e, "from"), ve(t, "to"), e === t) return "";
            const i = _e.resolve(e),
                s = _e.resolve(t);
            if (i === s || (e = i.toLowerCase(), t = s.toLowerCase(), e === t)) return "";
            if (i.length !== e.length || s.length !== t.length) {
                const g = i.split("\\"),
                    _ = s.split("\\");
                g[g.length - 1] === "" && g.pop(), _[_.length - 1] === "" && _.pop();
                const y = g.length,
                    w = _.length,
                    C = y < w ? y : w;
                let D;
                for (D = 0; D < C && g[D].toLowerCase() === _[D].toLowerCase(); D++);
                return D === 0 ? s : D === C ? w > C ? _.slice(D).join("\\") : y > C ? "..\\".repeat(y - 1 - D) + ".." : "" : "..\\".repeat(y - D) + _.slice(D).join("\\")
            }
            let n = 0;
            for (; n < e.length && e.charCodeAt(n) === Ge;) n++;
            let r = e.length;
            for (; r - 1 > n && e.charCodeAt(r - 1) === Ge;) r--;
            const o = r - n;
            let a = 0;
            for (; a < t.length && t.charCodeAt(a) === Ge;) a++;
            let c = t.length;
            for (; c - 1 > a && t.charCodeAt(c - 1) === Ge;) c--;
            const h = c - a,
                d = o < h ? o : h;
            let u = -1,
                f = 0;
            for (; f < d; f++) {
                const g = e.charCodeAt(n + f);
                if (g !== t.charCodeAt(a + f)) break;
                g === Ge && (u = f)
            }
            if (f !== d) {
                if (u === -1) return s
            } else {
                if (h > d) {
                    if (t.charCodeAt(a + f) === Ge) return s.slice(a + f + 1);
                    if (f === 2) return s.slice(a + f)
                }
                o > d && (e.charCodeAt(n + f) === Ge ? u = f : f === 2 && (u = 3)), u === -1 && (u = 0)
            }
            let p = "";
            for (f = n + u + 1; f <= r; ++f)(f === r || e.charCodeAt(f) === Ge) && (p += p.length === 0 ? ".." : "\\..");
            return a += u, p.length > 0 ? `${p}${s.slice(a,c)}` : (s.charCodeAt(a) === Ge && ++a, s.slice(a, c))
        },
        toNamespacedPath(e) {
            if (typeof e != "string" || e.length === 0) return e;
            const t = _e.resolve(e);
            if (t.length <= 2) return e;
            if (t.charCodeAt(0) === Ge) {
                if (t.charCodeAt(1) === Ge) {
                    const i = t.charCodeAt(2);
                    if (i !== X1 && i !== ni) return `\\\\?\\UNC\\${t.slice(2)}`
                }
            } else if (kt(t.charCodeAt(0)) && t.charCodeAt(1) === Et && t.charCodeAt(2) === Ge) return `\\\\?\\${t}`;
            return t
        },
        dirname(e) {
            ve(e, "path");
            const t = e.length;
            if (t === 0) return ".";
            let i = -1,
                s = 0;
            const n = e.charCodeAt(0);
            if (t === 1) return G(n) ? e : ".";
            if (G(n)) {
                if (i = s = 1, G(e.charCodeAt(1))) {
                    let a = 2,
                        c = a;
                    for (; a < t && !G(e.charCodeAt(a));) a++;
                    if (a < t && a !== c) {
                        for (c = a; a < t && G(e.charCodeAt(a));) a++;
                        if (a < t && a !== c) {
                            for (c = a; a < t && !G(e.charCodeAt(a));) a++;
                            if (a === t) return e;
                            a !== c && (i = s = a + 1)
                        }
                    }
                }
            } else kt(n) && e.charCodeAt(1) === Et && (i = t > 2 && G(e.charCodeAt(2)) ? 3 : 2, s = i);
            let r = -1,
                o = !0;
            for (let a = t - 1; a >= s; --a)
                if (G(e.charCodeAt(a))) {
                    if (!o) {
                        r = a;
                        break
                    }
                } else o = !1;
            if (r === -1) {
                if (i === -1) return ".";
                r = i
            }
            return e.slice(0, r)
        },
        basename(e, t) {
            t !== void 0 && ve(t, "suffix"), ve(e, "path");
            let i = 0,
                s = -1,
                n = !0,
                r;
            if (e.length >= 2 && kt(e.charCodeAt(0)) && e.charCodeAt(1) === Et && (i = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e) return "";
                let o = t.length - 1,
                    a = -1;
                for (r = e.length - 1; r >= i; --r) {
                    const c = e.charCodeAt(r);
                    if (G(c)) {
                        if (!n) {
                            i = r + 1;
                            break
                        }
                    } else a === -1 && (n = !1, a = r + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (s = r) : (o = -1, s = a))
                }
                return i === s ? s = a : s === -1 && (s = e.length), e.slice(i, s)
            }
            for (r = e.length - 1; r >= i; --r)
                if (G(e.charCodeAt(r))) {
                    if (!n) {
                        i = r + 1;
                        break
                    }
                } else s === -1 && (n = !1, s = r + 1);
            return s === -1 ? "" : e.slice(i, s)
        },
        extname(e) {
            ve(e, "path");
            let t = 0,
                i = -1,
                s = 0,
                n = -1,
                r = !0,
                o = 0;
            e.length >= 2 && e.charCodeAt(1) === Et && kt(e.charCodeAt(0)) && (t = s = 2);
            for (let a = e.length - 1; a >= t; --a) {
                const c = e.charCodeAt(a);
                if (G(c)) {
                    if (!r) {
                        s = a + 1;
                        break
                    }
                    continue
                }
                n === -1 && (r = !1, n = a + 1), c === ni ? i === -1 ? i = a : o !== 1 && (o = 1) : i !== -1 && (o = -1)
            }
            return i === -1 || n === -1 || o === 0 || o === 1 && i === n - 1 && i === s + 1 ? "" : e.slice(i, n)
        },
        format: ql.bind(null, "\\"),
        parse(e) {
            ve(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0) return t;
            const i = e.length;
            let s = 0,
                n = e.charCodeAt(0);
            if (i === 1) return G(n) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
            if (G(n)) {
                if (s = 1, G(e.charCodeAt(1))) {
                    let u = 2,
                        f = u;
                    for (; u < i && !G(e.charCodeAt(u));) u++;
                    if (u < i && u !== f) {
                        for (f = u; u < i && G(e.charCodeAt(u));) u++;
                        if (u < i && u !== f) {
                            for (f = u; u < i && !G(e.charCodeAt(u));) u++;
                            u === i ? s = u : u !== f && (s = u + 1)
                        }
                    }
                }
            } else if (kt(n) && e.charCodeAt(1) === Et) {
                if (i <= 2) return t.root = t.dir = e, t;
                if (s = 2, G(e.charCodeAt(2))) {
                    if (i === 3) return t.root = t.dir = e, t;
                    s = 3
                }
            }
            s > 0 && (t.root = e.slice(0, s));
            let r = -1,
                o = s,
                a = -1,
                c = !0,
                h = e.length - 1,
                d = 0;
            for (; h >= s; --h) {
                if (n = e.charCodeAt(h), G(n)) {
                    if (!c) {
                        o = h + 1;
                        break
                    }
                    continue
                }
                a === -1 && (c = !1, a = h + 1), n === ni ? r === -1 ? r = h : d !== 1 && (d = 1) : r !== -1 && (d = -1)
            }
            return a !== -1 && (r === -1 || d === 0 || d === 1 && r === a - 1 && r === o + 1 ? t.base = t.name = e.slice(o, a) : (t.name = e.slice(o, r), t.base = e.slice(o, a), t.ext = e.slice(r, a))), o > 0 && o !== s ? t.dir = e.slice(0, o - 1) : t.dir = t.root, t
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null
    },
    J1 = (() => {
        if (qe) {
            const e = /\\/g;
            return () => {
                const t = Sn().replace(e, "/");
                return t.slice(t.indexOf("/"))
            }
        }
        return () => Sn()
    })(),
    se = {
        resolve(...e) {
            let t = "",
                i = !1;
            for (let s = e.length - 1; s >= 0 && !i; s--) {
                const n = e[s];
                ve(n, `paths[${s}]`), n.length !== 0 && (t = `${n}/${t}`, i = n.charCodeAt(0) === Ee)
            }
            if (!i) {
                const s = J1();
                t = `${s}/${t}`, i = s.charCodeAt(0) === Ee
            }
            return t = Cn(t, !i, "/", Wr), i ? `/${t}` : t.length > 0 ? t : "."
        },
        normalize(e) {
            if (ve(e, "path"), e.length === 0) return ".";
            const t = e.charCodeAt(0) === Ee,
                i = e.charCodeAt(e.length - 1) === Ee;
            return e = Cn(e, !t, "/", Wr), e.length === 0 ? t ? "/" : i ? "./" : "." : (i && (e += "/"), t ? `/${e}` : e)
        },
        isAbsolute(e) {
            return ve(e, "path"), e.length > 0 && e.charCodeAt(0) === Ee
        },
        join(...e) {
            if (e.length === 0) return ".";
            const t = [];
            for (let i = 0; i < e.length; ++i) {
                const s = e[i];
                ve(s, "path"), s.length > 0 && t.push(s)
            }
            return t.length === 0 ? "." : se.normalize(t.join("/"))
        },
        relative(e, t) {
            if (ve(e, "from"), ve(t, "to"), e === t || (e = se.resolve(e), t = se.resolve(t), e === t)) return "";
            const i = 1,
                s = e.length,
                n = s - i,
                r = 1,
                o = t.length - r,
                a = n < o ? n : o;
            let c = -1,
                h = 0;
            for (; h < a; h++) {
                const u = e.charCodeAt(i + h);
                if (u !== t.charCodeAt(r + h)) break;
                u === Ee && (c = h)
            }
            if (h === a)
                if (o > a) {
                    if (t.charCodeAt(r + h) === Ee) return t.slice(r + h + 1);
                    if (h === 0) return t.slice(r + h)
                } else n > a && (e.charCodeAt(i + h) === Ee ? c = h : h === 0 && (c = 0));
            let d = "";
            for (h = i + c + 1; h <= s; ++h)(h === s || e.charCodeAt(h) === Ee) && (d += d.length === 0 ? ".." : "/..");
            return `${d}${t.slice(r+c)}`
        },
        toNamespacedPath(e) {
            return e
        },
        dirname(e) {
            if (ve(e, "path"), e.length === 0) return ".";
            const t = e.charCodeAt(0) === Ee;
            let i = -1,
                s = !0;
            for (let n = e.length - 1; n >= 1; --n)
                if (e.charCodeAt(n) === Ee) {
                    if (!s) {
                        i = n;
                        break
                    }
                } else s = !1;
            return i === -1 ? t ? "/" : "." : t && i === 1 ? "//" : e.slice(0, i)
        },
        basename(e, t) {
            t !== void 0 && ve(t, "suffix"), ve(e, "path");
            let i = 0,
                s = -1,
                n = !0,
                r;
            if (t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t === e) return "";
                let o = t.length - 1,
                    a = -1;
                for (r = e.length - 1; r >= 0; --r) {
                    const c = e.charCodeAt(r);
                    if (c === Ee) {
                        if (!n) {
                            i = r + 1;
                            break
                        }
                    } else a === -1 && (n = !1, a = r + 1), o >= 0 && (c === t.charCodeAt(o) ? --o === -1 && (s = r) : (o = -1, s = a))
                }
                return i === s ? s = a : s === -1 && (s = e.length), e.slice(i, s)
            }
            for (r = e.length - 1; r >= 0; --r)
                if (e.charCodeAt(r) === Ee) {
                    if (!n) {
                        i = r + 1;
                        break
                    }
                } else s === -1 && (n = !1, s = r + 1);
            return s === -1 ? "" : e.slice(i, s)
        },
        extname(e) {
            ve(e, "path");
            let t = -1,
                i = 0,
                s = -1,
                n = !0,
                r = 0;
            for (let o = e.length - 1; o >= 0; --o) {
                const a = e[o];
                if (a === "/") {
                    if (!n) {
                        i = o + 1;
                        break
                    }
                    continue
                }
                s === -1 && (n = !1, s = o + 1), a === "." ? t === -1 ? t = o : r !== 1 && (r = 1) : t !== -1 && (r = -1)
            }
            return t === -1 || s === -1 || r === 0 || r === 1 && t === s - 1 && t === i + 1 ? "" : e.slice(t, s)
        },
        format: ql.bind(null, "/"),
        parse(e) {
            ve(e, "path");
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0) return t;
            const i = e.charCodeAt(0) === Ee;
            let s;
            i ? (t.root = "/", s = 1) : s = 0;
            let n = -1,
                r = 0,
                o = -1,
                a = !0,
                c = e.length - 1,
                h = 0;
            for (; c >= s; --c) {
                const d = e.charCodeAt(c);
                if (d === Ee) {
                    if (!a) {
                        r = c + 1;
                        break
                    }
                    continue
                }
                o === -1 && (a = !1, o = c + 1), d === ni ? n === -1 ? n = c : h !== 1 && (h = 1) : n !== -1 && (h = -1)
            }
            if (o !== -1) {
                const d = r === 0 && i ? 1 : r;
                n === -1 || h === 0 || h === 1 && n === o - 1 && n === r + 1 ? t.base = t.name = e.slice(d, o) : (t.name = e.slice(d, n), t.base = e.slice(d, o), t.ext = e.slice(n, o))
            }
            return r > 0 ? t.dir = e.slice(0, r - 1) : i && (t.dir = "/"), t
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
se.win32 = _e.win32 = _e, se.posix = _e.posix = se;
var ef = qe ? _e.normalize : se.normalize,
    b5 = qe ? _e.isAbsolute : se.isAbsolute,
    tf = qe ? _e.join : se.join,
    sf = qe ? _e.resolve : se.resolve,
    nf = qe ? _e.relative : se.relative,
    rf = qe ? _e.dirname : se.dirname,
    _5 = qe ? _e.basename : se.basename,
    w5 = qe ? _e.extname : se.extname,
    S5 = qe ? _e.format : se.format,
    C5 = qe ? _e.parse : se.parse,
    D5 = qe ? _e.toNamespacedPath : se.toNamespacedPath,
    Dn = qe ? _e.sep : se.sep,
    E5 = qe ? _e.delimiter : se.delimiter;

function of(e) {
    return e
}
var af = class {
        constructor(e, t) {
            this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = of) : (this._fn = t, this._computeKey = e.getCacheKey)
        }
        get(e) {
            const t = this._computeKey(e);
            return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache
        }
    },
    gt = class {
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

function Bi(e) {
    return e.replace(/[<>&]/g, function(t) {
        switch (t) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            default:
                return t
        }
    })
}

function Vr(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
}

function Kr(e, t, i = 0, s = e.length, n = 0, r = t.length) {
    for (; i < s && n < r; i++, n++) {
        const c = e.charCodeAt(i),
            h = t.charCodeAt(n);
        if (c < h) return -1;
        if (c > h) return 1
    }
    const o = s - i,
        a = r - n;
    return o < a ? -1 : o > a ? 1 : 0
}

function jl(e, t) {
    return Hi(e, t, 0, e.length, 0, t.length)
}

function Hi(e, t, i = 0, s = e.length, n = 0, r = t.length) {
    for (; i < s && n < r; i++, n++) {
        let c = e.charCodeAt(i),
            h = t.charCodeAt(n);
        if (c === h) continue;
        if (c >= 128 || h >= 128) return Kr(e.toLowerCase(), t.toLowerCase(), i, s, n, r);
        Yl(c) && (c -= 32), Yl(h) && (h -= 32);
        const d = c - h;
        if (d !== 0) return d
    }
    const o = s - i,
        a = r - n;
    return o < a ? -1 : o > a ? 1 : 0
}

function Yl(e) {
    return e >= 97 && e <= 122
}

function Xl(e) {
    return e >= 65 && e <= 90
}

function lf(e, t) {
    return e.length === t.length && Hi(e, t) === 0
}

function cf(e, t) {
    const i = t.length;
    return t.length > e.length ? !1 : Hi(e, t, 0, i) === 0
}

function hf(e) {
    return 55296 <= e && e <= 56319
}

function Zl(e) {
    return 56320 <= e && e <= 57343
}

function df(e, t) {
    return (e - 55296 << 10) + (t - 56320) + 65536
}

function uf(e) {
    return e >= 127462 && e <= 127487 || e === 8986 || e === 8987 || e === 9200 || e === 9203 || e >= 9728 && e <= 10175 || e === 11088 || e === 11093 || e >= 127744 && e <= 128591 || e >= 128640 && e <= 128764 || e >= 128992 && e <= 129008 || e >= 129280 && e <= 129535 || e >= 129648 && e <= 129782
}
var ff = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/,
    pf = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/,
    gf = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/,
    k5 = new RegExp("(?:" + [ff.source, pf.source, gf.source].join("|") + ")", "g"),
    T5 = "\uFEFF",
    mf = class Xs {
        static getInstance() {
            return Xs._INSTANCE || (Xs._INSTANCE = new Xs), Xs._INSTANCE
        }
        constructor() {
            this._data = vf()
        }
        getGraphemeBreakType(t) {
            if (t < 32) return t === 10 ? 3 : t === 13 ? 2 : 4;
            if (t < 127) return 0;
            const i = this._data,
                s = i.length / 3;
            let n = 1;
            for (; n <= s;)
                if (t < i[3 * n]) n = 2 * n;
                else if (t > i[3 * n + 1]) n = 2 * n + 1;
            else return i[3 * n + 2];
            return 0
        }
    };
mf._INSTANCE = null;

function vf() {
    return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]")
}
var zi = class Na {
    constructor(t) {
        this.confusableDictionary = t
    }
    static getInstance(t) {
        return Na.cache.get(Array.from(t))
    }
    static getLocales() {
        return Na._locales.value
    }
    isAmbiguous(t) {
        return this.confusableDictionary.has(t)
    }
    containsAmbiguousCharacter(t) {
        for (let i = 0; i < t.length; i++) {
            const s = t.codePointAt(i);
            if (typeof s == "number" && this.isAmbiguous(s)) return !0
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
zi.ambiguousCharacterData = new gt(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), zi.cache = new af({
    getCacheKey: JSON.stringify
}, e => {
    function t(h) {
        const d = new Map;
        for (let u = 0; u < h.length; u += 2) d.set(h[u], h[u + 1]);
        return d
    }

    function i(h, d) {
        const u = new Map(h);
        for (const [f, p] of d) u.set(f, p);
        return u
    }

    function s(h, d) {
        if (!h) return d;
        const u = new Map;
        for (const [f, p] of h) d.has(f) && u.set(f, p);
        return u
    }
    const n = zi.ambiguousCharacterData.value;
    let r = e.filter(h => !h.startsWith("_") && h in n);
    r.length === 0 && (r = ["_default"]);
    let o;
    for (const h of r) {
        const d = t(n[h]);
        o = s(o, d)
    }
    const a = t(n._common),
        c = i(a, o);
    return new zi(c)
}), zi._locales = new gt(() => Object.keys(zi.ambiguousCharacterData.value).filter(e => !e.startsWith("_")));
var yf = class Zs {
    static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}')
    }
    static getData() {
        return this._data || (this._data = new Set([...Object.values(Zs.getRawData())].flat())), this._data
    }
    static isInvisibleCharacter(t) {
        return Zs.getData().has(t)
    }
    static containsInvisibleCharacter(t) {
        for (let i = 0; i < t.length; i++) {
            const s = t.codePointAt(i);
            if (typeof s == "number" && (Zs.isInvisibleCharacter(s) || s === 32)) return !0
        }
        return !1
    }
    static get codePoints() {
        return Zs.getData()
    }
};
yf._data = void 0;

function Ht(e) {
    return e === 47 || e === 92
}

function Ql(e) {
    return e.replace(/[\\/]/g, se.sep)
}

function bf(e) {
    return e.indexOf("/") === -1 && (e = Ql(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e
}

function Jl(e, t = se.sep) {
    if (!e) return "";
    const i = e.length,
        s = e.charCodeAt(0);
    if (Ht(s)) {
        if (Ht(e.charCodeAt(1)) && !Ht(e.charCodeAt(2))) {
            let r = 3;
            const o = r;
            for (; r < i && !Ht(e.charCodeAt(r)); r++);
            if (o !== r && !Ht(e.charCodeAt(r + 1))) {
                for (r += 1; r < i; r++)
                    if (Ht(e.charCodeAt(r))) return e.slice(0, r + 1).replace(/[\\/]/g, t)
            }
        }
        return t
    } else if (Sf(s) && e.charCodeAt(1) === 58) return Ht(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
    let n = e.indexOf("://");
    if (n !== -1) {
        for (n += 3; n < i; n++)
            if (Ht(e.charCodeAt(n))) return e.slice(0, n + 1)
    }
    return ""
}

function _f(e, t, i) {
    return i === 0 ? !0 : e.charCodeAt(0) !== t.charCodeAt(0) ? !1 : i === 1 ? !0 : e.charCodeAt(i - 1) !== t.charCodeAt(i - 1) ? !1 : e.startsWith(t)
}

function wf(e, t, i) {
    for (let s = 0; s < i; s++) {
        let n = e.charCodeAt(s),
            r = t.charCodeAt(s);
        if (n !== r) {
            if (n >= 128 || r >= 128) return Hi(e, t, s, i, s, i) === 0;
            if (n >= 97 && n <= 122 && (n -= 32), r >= 97 && r <= 122 && (r -= 32), n !== r) return !1
        }
    }
    return !0
}

function ec(e, t, i, s = Dn) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    const n = e.length,
        r = t.length;
    if (r > n) return !1;
    const o = s.charCodeAt(0),
        a = t.charCodeAt(r - 1) === o;
    if (r < n && !a && e.charCodeAt(r) !== o) return !1;
    if (i) {
        if (!wf(e, t, r)) return !1
    } else if (!_f(e, t, r)) return !1;
    return r === n || a ? !0 : e.charCodeAt(r) === o
}

function Sf(e) {
    return e >= 65 && e <= 90 || e >= 97 && e <= 122
}
var En = typeof Buffer < "u",
    Cf = new gt(() => new Uint8Array(256)),
    Gr, qr, Df = 1 / 0,
    tc, mt = class rt {
        static alloc(t) {
            return En ? new rt(Buffer.allocUnsafe(t)) : new rt(new Uint8Array(t))
        }
        static wrap(t) {
            return En && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)), new rt(t)
        }
        static fromString(t, i) {
            return !(i?.dontUseNodeBuffer || !1) && En ? new rt(Buffer.from(t)) : (Gr || (Gr = new TextEncoder), new rt(Gr.encode(t)))
        }
        static fromByteArray(t) {
            const i = rt.alloc(t.length);
            for (let s = 0, n = t.length; s < n; s++) i.buffer[s] = t[s];
            return i
        }
        static concat(t, i) {
            if (typeof i > "u") {
                i = 0;
                for (let r = 0, o = t.length; r < o; r++) i += t[r].byteLength
            }
            const s = rt.alloc(i);
            let n = 0;
            for (let r = 0, o = t.length; r < o; r++) {
                const a = t[r];
                s.set(a, n), n += a.byteLength
            }
            return s
        }
        constructor(t) {
            this.buffer = t, this.byteLength = this.buffer.byteLength
        }
        clone() {
            const t = rt.alloc(this.byteLength);
            return t.set(this), t
        }
        toString() {
            if (En) return this.buffer.toString();
            if (tc && this.buffer.byteLength > Df) try {
                tc(this.buffer.byteLength)
            } catch {}
            return qr || (qr = new TextDecoder), qr.decode(this.buffer)
        }
        slice(t, i) {
            return new rt(this.buffer.subarray(t, i))
        }
        set(t, i) {
            if (t instanceof rt) this.buffer.set(t.buffer, i);
            else if (t instanceof Uint8Array) this.buffer.set(t, i);
            else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), i);
            else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i);
            else throw new Error("Unknown argument 'array'")
        }
        readUInt32BE(t) {
            return kf(this.buffer, t)
        }
        writeUInt32BE(t, i) {
            Tf(this.buffer, t, i)
        }
        readUInt32LE(t) {
            return xf(this.buffer, t)
        }
        writeUInt32LE(t, i) {
            Af(this.buffer, t, i)
        }
        readUInt8(t) {
            return Nf(this.buffer, t)
        }
        writeUInt8(t, i) {
            If(this.buffer, t, i)
        }
        indexOf(t, i = 0) {
            return Ef(this.buffer, t instanceof rt ? t.buffer : t, i)
        }
        equals(t) {
            return this === t ? !0 : this.byteLength !== t.byteLength ? !1 : this.buffer.every((i, s) => i === t.buffer[s])
        }
    };

function Ef(e, t, i = 0) {
    const s = t.byteLength,
        n = e.byteLength;
    if (s === 0) return 0;
    if (s === 1) return e.indexOf(t[0]);
    if (s > n - i) return -1;
    const r = Cf.value;
    r.fill(t.length);
    for (let h = 0; h < t.length; h++) r[t[h]] = t.length - h - 1;
    let o = i + t.length - 1,
        a = o,
        c = -1;
    for (; o < n;)
        if (e[o] === t[a]) {
            if (a === 0) {
                c = o;
                break
            }
            o--, a--
        } else o += Math.max(t.length - a, r[e[o]]), a = t.length - 1;
    return c
}

function kf(e, t) {
    return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3]
}

function Tf(e, t, i) {
    e[i + 3] = t, t = t >>> 8, e[i + 2] = t, t = t >>> 8, e[i + 1] = t, t = t >>> 8, e[i] = t
}

function xf(e, t) {
    return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0
}

function Af(e, t, i) {
    e[i + 0] = t & 255, t = t >>> 8, e[i + 1] = t & 255, t = t >>> 8, e[i + 2] = t & 255, t = t >>> 8, e[i + 3] = t & 255
}

function Nf(e, t) {
    return e[t]
}

function If(e, t, i) {
    e[i] = t
}
var Lf = /^\w[\w\d+.-]*$/,
    Rf = /^\//,
    Mf = /^\/\//;

function Pf(e, t) {
    if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
    if (e.scheme && !Lf.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (e.path) {
        if (e.authority) {
            if (!Rf.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
        } else if (Mf.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
    }
}

function Of(e, t) {
    return !e && !t ? "file" : e
}

function Ff(e, t) {
    switch (e) {
        case "https":
        case "http":
        case "file":
            t ? t[0] !== lt && (t = lt + t) : t = lt;
            break
    }
    return t
}
var ae = "",
    lt = "/",
    Bf = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
    we = class ar {
        static isUri(t) {
            return t instanceof ar ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1
        }
        constructor(t, i, s, n, r, o = !1) {
            typeof t == "object" ? (this.scheme = t.scheme || ae, this.authority = t.authority || ae, this.path = t.path || ae, this.query = t.query || ae, this.fragment = t.fragment || ae) : (this.scheme = Of(t, o), this.authority = i || ae, this.path = Ff(this.scheme, s || ae), this.query = n || ae, this.fragment = r || ae, Pf(this, o))
        }
        get fsPath() {
            return kn(this, !1)
        }
        with(t) {
            if (!t) return this;
            let {
                scheme: i,
                authority: s,
                path: n,
                query: r,
                fragment: o
            } = t;
            return i === void 0 ? i = this.scheme : i === null && (i = ae), s === void 0 ? s = this.authority : s === null && (s = ae), n === void 0 ? n = this.path : n === null && (n = ae), r === void 0 ? r = this.query : r === null && (r = ae), o === void 0 ? o = this.fragment : o === null && (o = ae), i === this.scheme && s === this.authority && n === this.path && r === this.query && o === this.fragment ? this : new $i(i, s, n, r, o)
        }
        static parse(t, i = !1) {
            const s = Bf.exec(t);
            return s ? new $i(s[2] || ae, Tn(s[4] || ae), Tn(s[5] || ae), Tn(s[7] || ae), Tn(s[9] || ae), i) : new $i(ae, ae, ae, ae, ae)
        }
        static file(t) {
            let i = ae;
            if (Ft && (t = t.replace(/\\/g, lt)), t[0] === lt && t[1] === lt) {
                const s = t.indexOf(lt, 2);
                s === -1 ? (i = t.substring(2), t = lt) : (i = t.substring(2, s), t = t.substring(s) || lt)
            }
            return new $i("file", i, t, ae, ae)
        }
        static from(t, i) {
            return new $i(t.scheme, t.authority, t.path, t.query, t.fragment, i)
        }
        static joinPath(t, ...i) {
            if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
            let s;
            return Ft && t.scheme === "file" ? s = ar.file(_e.join(kn(t, !0), ...i)).path : s = se.join(t.path, ...i), t.with({
                path: s
            })
        }
        toString(t = !1) {
            return jr(this, t)
        }
        toJSON() {
            return this
        }
        static revive(t) {
            if (t) {
                if (t instanceof ar) return t;
                {
                    const i = new $i(t);
                    return i._formatted = t.external ?? null, i._fsPath = t._sep === ic ? t.fsPath ?? null : null, i
                }
            } else return t
        } [Symbol.for("debug.description")]() {
            return `URI(${this.toString()})`
        }
    },
    ic = Ft ? 1 : void 0,
    $i = class extends we {
        constructor() {
            super(...arguments), this._formatted = null, this._fsPath = null
        }
        get fsPath() {
            return this._fsPath || (this._fsPath = kn(this, !1)), this._fsPath
        }
        toString(e = !1) {
            return e ? jr(this, !0) : (this._formatted || (this._formatted = jr(this, !1)), this._formatted)
        }
        toJSON() {
            const e = {
                $mid: 1
            };
            return this._fsPath && (e.fsPath = this._fsPath, e._sep = ic), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
        }
    },
    sc = {
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

function nc(e, t, i) {
    let s, n = -1;
    for (let r = 0; r < e.length; r++) {
        const o = e.charCodeAt(r);
        if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || i && o === 91 || i && o === 93 || i && o === 58) n !== -1 && (s += encodeURIComponent(e.substring(n, r)), n = -1), s !== void 0 && (s += e.charAt(r));
        else {
            s === void 0 && (s = e.substr(0, r));
            const a = sc[o];
            a !== void 0 ? (n !== -1 && (s += encodeURIComponent(e.substring(n, r)), n = -1), s += a) : n === -1 && (n = r)
        }
    }
    return n !== -1 && (s += encodeURIComponent(e.substring(n))), s !== void 0 ? s : e
}

function Hf(e) {
    let t;
    for (let i = 0; i < e.length; i++) {
        const s = e.charCodeAt(i);
        s === 35 || s === 63 ? (t === void 0 && (t = e.substr(0, i)), t += sc[s]) : t !== void 0 && (t += e[i])
    }
    return t !== void 0 ? t : e
}

function kn(e, t) {
    let i;
    return e.authority && e.path.length > 1 && e.scheme === "file" ? i = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? i = e.path.substr(1) : i = e.path[1].toLowerCase() + e.path.substr(2) : i = e.path, Ft && (i = i.replace(/\//g, "\\")), i
}

function jr(e, t) {
    const i = t ? Hf : nc;
    let s = "",
        {
            scheme: n,
            authority: r,
            path: o,
            query: a,
            fragment: c
        } = e;
    if (n && (s += n, s += ":"), (r || n === "file") && (s += lt, s += lt), r) {
        let h = r.indexOf("@");
        if (h !== -1) {
            const d = r.substr(0, h);
            r = r.substr(h + 1), h = d.lastIndexOf(":"), h === -1 ? s += i(d, !1, !1) : (s += i(d.substr(0, h), !1, !1), s += ":", s += i(d.substr(h + 1), !1, !0)), s += "@"
        }
        r = r.toLowerCase(), h = r.lastIndexOf(":"), h === -1 ? s += i(r, !1, !0) : (s += i(r.substr(0, h), !1, !0), s += r.substr(h))
    }
    if (o) {
        if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
            const h = o.charCodeAt(1);
            h >= 65 && h <= 90 && (o = `/${String.fromCharCode(h+32)}:${o.substr(3)}`)
        } else if (o.length >= 2 && o.charCodeAt(1) === 58) {
            const h = o.charCodeAt(0);
            h >= 65 && h <= 90 && (o = `${String.fromCharCode(h+32)}:${o.substr(2)}`)
        }
        s += i(o, !0, !1)
    }
    return a && (s += "?", s += i(a, !1, !1)), c && (s += "#", s += t ? c : nc(c, !1, !1)), s
}

function rc(e) {
    try {
        return decodeURIComponent(e)
    } catch {
        return e.length > 3 ? e.substr(0, 3) + rc(e.substr(3)) : e
    }
}
var oc = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

function Tn(e) {
    return e.match(oc) ? e.replace(oc, t => rc(t)) : e
}
var ee;
(e => {
    e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.git = "git", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebook = "vscode-notebook", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.terminal = "terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.aiChat = "cursor.aichat", e.contextObject = "cursor.context-object", e.composer = "cursor.composer", e.aiSettings = "cursor.aisettings", e.tinderDiffEditor = "cursor.tinderdiffeditor", e.vscodeFileResource = "vscode-file", e.cursorRpcDevtools = "cursor-rpc-devtools", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.cursorDev = "cursor-dev-utils", e.outputChannel = "output", e.accessibleView = "accessible-view", e.backgroundComposer = "cursor.backgroundcomposer", e.personalEnvironmentJson = "cursor.personalenvironmentjson", e.bugbot = "cursor.bugbot", e.aiEditorBox = "aiEditorBox", e.backgroundComposerPeek = "background-composer-peek", e.cursorPlan = "cursor-plan", e.reviewChanges = "cursor.reviewchanges", e.cursorBlame = "cursor.blame", e.cursorFileBlame = "cursor.fileblame"
})(ee || (ee = {}));
var zf = "tkn",
    $f = class {
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
            this._serverRootPath = se.join(t ?? "/", Uf(e))
        }
        getServerRootPath() {
            return this._serverRootPath
        }
        get _remoteResourcesPath() {
            return se.join(this._serverRootPath, ee.vscodeRemoteResource)
        }
        set(e, t, i) {
            this._hosts[e] = t, this._ports[e] = i
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
            } catch (o) {
                return ft(o), e
            }
            const t = e.authority;
            let i = this._hosts[t];
            i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
            const s = this._ports[t],
                n = this._connectionTokens[t];
            let r = `path=${encodeURIComponent(e.path)}`;
            return typeof n == "string" && (r += `&${zf}=${encodeURIComponent(n)}`), we.from({
                scheme: k1 ? this._preferredWebSchema : ee.vscodeRemoteResource,
                authority: `${i}:${s}`,
                path: this._remoteResourcesPath,
                query: r
            })
        }
    },
    ac = new $f;

function Uf(e) {
    return `${e.quality??"oss"}-${e.commit??"dev"}`
}
var Wf = "vscode-app",
    lc = class lr {
        asBrowserUri(t) {
            const i = this.toUri(t);
            return this.uriToBrowserUri(i)
        }
        uriToBrowserUri(t) {
            return t.scheme === ee.vscodeRemote ? ac.rewrite(t) : t.scheme === ee.file && (yn || x1 === `${ee.vscodeFileResource}://${lr.FALLBACK_AUTHORITY}`) ? t.with({
                scheme: ee.vscodeFileResource,
                authority: t.authority || lr.FALLBACK_AUTHORITY,
                query: null,
                fragment: null
            }) : t
        }
        asFileUri(t) {
            const i = this.toUri(t);
            return this.uriToFileUri(i)
        }
        uriToFileUri(t) {
            return t.scheme === ee.vscodeFileResource ? t.with({
                scheme: ee.file,
                authority: t.authority !== lr.FALLBACK_AUTHORITY ? t.authority : null,
                query: null,
                fragment: null
            }) : t
        }
        toUri(t) {
            if (we.isUri(t)) return t;
            if (globalThis._VSCODE_FILE_ROOT) {
                const i = globalThis._VSCODE_FILE_ROOT;
                if (/^\w[\w\d+.-]*:\/\//.test(i)) return we.joinPath(we.parse(i, !0), t);
                const s = tf(i, t);
                return we.file(s)
            }
            throw new Error("Cannot determine URI for module id!")
        }
    };
lc.FALLBACK_AUTHORITY = Wf;
var Vf = lc,
    cc = new Vf,
    x5 = Object.freeze({
        "Cache-Control": "no-cache, no-store"
    }),
    A5 = Object.freeze({
        "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling"
    }),
    hc;
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
    const i = "vscode-coi";

    function s(r) {
        let o;
        typeof r == "string" ? o = new URL(r).searchParams : r instanceof URL ? o = r.searchParams : we.isUri(r) && (o = new URL(r.toString(!0)).searchParams);
        const a = o?.get(i);
        if (a) return t.get(a)
    }
    e.getHeadersFromQuery = s;

    function n(r, o, a) {
        if (!globalThis.crossOriginIsolated) return;
        const c = o && a ? "3" : a ? "2" : "1";
        r instanceof URLSearchParams ? r.set(i, c) : r[i] = c
    }
    e.addSearchParam = n
})(hc || (hc = {}));

function Tt(e) {
    return kn(e, !0)
}
var Yr = class {
        constructor(e) {
            this._ignorePathCasing = e
        }
        compare(e, t, i = !1) {
            return e === t ? 0 : Vr(this.getComparisonKey(e, i), this.getComparisonKey(t, i))
        }
        isEqual(e, t, i = !1) {
            return e === t ? !0 : !e || !t ? !1 : this.getComparisonKey(e, i) === this.getComparisonKey(t, i)
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
        isEqualOrParent(e, t, i = !1) {
            if (e.scheme === t.scheme) {
                if (e.scheme === ee.file) return ec(Tt(e), Tt(t), this._ignorePathCasing(e)) && e.query === t.query && (i || e.fragment === t.fragment);
                if (uc(e.authority, t.authority)) return ec(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (i || e.fragment === t.fragment)
            }
            return !1
        }
        joinPath(e, ...t) {
            return we.joinPath(e, ...t)
        }
        basenameOrAuthority(e) {
            return Kf(e) || e.authority
        }
        basename(e) {
            return se.basename(e.path)
        }
        extname(e) {
            return se.extname(e.path)
        }
        dirname(e) {
            if (e.path.length === 0) return e;
            let t;
            return e.scheme === ee.file ? t = we.file(rf(Tt(e))).path : (t = se.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== 47 && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({
                path: t
            })
        }
        normalizePath(e) {
            if (!e.path.length) return e;
            let t;
            return e.scheme === ee.file ? t = we.file(ef(Tt(e))).path : t = se.normalize(e.path), e.with({
                path: t
            })
        }
        relativePath(e, t) {
            if (e.scheme !== t.scheme || !uc(e.authority, t.authority)) return;
            if (e.scheme === ee.file) {
                const n = nf(Tt(e), Tt(t));
                return Ft ? Ql(n) : n
            }
            let i = e.path || "/";
            const s = t.path || "/";
            if (this._ignorePathCasing(e)) {
                let n = 0;
                for (const r = Math.min(i.length, s.length); n < r && !(i.charCodeAt(n) !== s.charCodeAt(n) && i.charAt(n).toLowerCase() !== s.charAt(n).toLowerCase()); n++);
                i = s.substr(0, n) + i.substr(n)
            }
            return se.relative(i, s)
        }
        resolvePath(e, t) {
            if (e.scheme === ee.file) {
                const i = we.file(sf(Tt(e), t));
                return e.with({
                    authority: i.authority,
                    path: i.path
                })
            }
            return t = bf(t), e.with({
                path: se.resolve(e.path, t)
            })
        }
        isAbsolutePath(e) {
            return !!e.path && e.path[0] === "/"
        }
        isEqualAuthority(e, t) {
            return e === t || e !== void 0 && t !== void 0 && lf(e, t)
        }
        hasTrailingPathSeparator(e, t = Dn) {
            if (e.scheme === ee.file) {
                const i = Tt(e);
                return i.length > Jl(i).length && i[i.length - 1] === t
            } else {
                const i = e.path;
                return i.length > 1 && i.charCodeAt(i.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath)
            }
        }
        removeTrailingPathSeparator(e, t = Dn) {
            return fc(e, t) ? e.with({
                path: e.path.substr(0, e.path.length - 1)
            }) : e
        }
        addTrailingPathSeparator(e, t = Dn) {
            let i = !1;
            if (e.scheme === ee.file) {
                const s = Tt(e);
                i = s !== void 0 && s.length === Jl(s).length && s[s.length - 1] === t
            } else {
                t = "/";
                const s = e.path;
                i = s.length === 1 && s.charCodeAt(s.length - 1) === 47
            }
            return !i && !fc(e, t) ? e.with({
                path: e.path + "/"
            }) : e
        }
    },
    te = new Yr(() => !1),
    N5 = new Yr(e => e.scheme === ee.file ? !Hl : !0),
    I5 = new Yr(e => !0),
    L5 = te.isEqual.bind(te),
    R5 = te.isEqualOrParent.bind(te),
    M5 = te.getComparisonKey.bind(te),
    P5 = te.basenameOrAuthority.bind(te),
    Kf = te.basename.bind(te),
    O5 = te.extname.bind(te),
    Gf = te.dirname.bind(te),
    F5 = te.joinPath.bind(te),
    B5 = te.normalizePath.bind(te),
    H5 = te.relativePath.bind(te),
    dc = te.resolvePath.bind(te),
    z5 = te.isAbsolutePath.bind(te),
    uc = te.isEqualAuthority.bind(te),
    fc = te.hasTrailingPathSeparator.bind(te),
    $5 = te.removeTrailingPathSeparator.bind(te),
    U5 = te.addTrailingPathSeparator.bind(te),
    pc;
(e => {
    e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";

    function t(i) {
        const s = new Map;
        i.path.substring(i.path.indexOf(";") + 1, i.path.lastIndexOf(";")).split(";").forEach(o => {
            const [a, c] = o.split(":");
            a && c && s.set(a, c)
        });
        const r = i.path.substring(0, i.path.indexOf(";"));
        return r && s.set(e.META_DATA_MIME, r), s
    }
    e.parseMetaData = t
})(pc || (pc = {}));
var gc = Symbol("MicrotaskDelay");

function Xr(e) {
    const t = new Kl,
        i = e(t.token);
    let s = !1;
    const n = new Promise((r, o) => {
        const a = t.token.onCancellationRequested(() => {
            s = !0, a.dispose(), o(new Ot)
        });
        Promise.resolve(i).then(c => {
            a.dispose(), t.dispose(), s ? e1(c) && c.dispose() : r(c)
        }, c => {
            a.dispose(), t.dispose(), o(c)
        })
    });
    return new class {
        cancel() {
            t.cancel(), t.dispose()
        }
        then(r, o) {
            return n.then(r, o)
        } catch (r) {
            return this.then(void 0, r)
        } finally(r) {
            return n.finally(r)
        }
    }
}
var qf = (e, t) => {
        let i = !0;
        const s = setTimeout(() => {
            i = !1, t()
        }, e);
        return {
            isTriggered: () => i,
            dispose: () => {
                clearTimeout(s), i = !1
            }
        }
    },
    jf = e => {
        let t = !0;
        return queueMicrotask(() => {
            t && (t = !1, e())
        }), {
            isTriggered: () => t,
            dispose: () => {
                t = !1
            }
        }
    },
    Zr = class {
        constructor(e) {
            this.defaultDelay = e, this.deferred = null, this.completionPromise = null, this.doResolve = null, this.doReject = null, this.task = null
        }
        trigger(e, t = this.defaultDelay) {
            this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((s, n) => {
                this.doResolve = s, this.doReject = n
            }).then(() => {
                if (this.completionPromise = null, this.doResolve = null, this.task) {
                    const s = this.task;
                    return this.task = null, s()
                }
            }));
            const i = () => {
                this.deferred = null, this.doResolve?.(null)
            };
            return this.deferred = t === gc ? jf(i) : qf(t, i), this.completionPromise
        }
        isTriggered() {
            return !!this.deferred?.isTriggered()
        }
        cancel() {
            this.cancelTimeout(), this.completionPromise && (this.doReject?.(new Ot), this.completionPromise = null)
        }
        cancelTimeout() {
            this.deferred?.dispose(), this.deferred = null
        }
        dispose() {
            this.cancel()
        }
    };

function xn(e, t) {
    return t ? new Promise((i, s) => {
        const n = setTimeout(() => {
                r.dispose(), i()
            }, e),
            r = t.onCancellationRequested(() => {
                clearTimeout(n), r.dispose(), s(new Ot)
            })
    }) : Xr(i => xn(e, i))
}

function Qr(e, t = 0, i) {
    const s = setTimeout(() => {
            e(), i && n.dispose()
        }, t),
        n = de(() => {
            clearTimeout(s), i?.delete(n)
        });
    return i?.add(n), n
}
var Jr = class {
        constructor(e, t) {
            this._isDisposed = !1, this._token = -1, typeof e == "function" && typeof t == "number" && this.setIfNotSet(e, t)
        }
        dispose() {
            this.cancel(), this._isDisposed = !0
        }
        cancel() {
            this._token !== -1 && (clearTimeout(this._token), this._token = -1)
        }
        cancelAndSet(e, t) {
            if (this._isDisposed) throw new et("Calling 'cancelAndSet' on a disposed TimeoutTimer");
            this.cancel(), this._token = setTimeout(() => {
                this._token = -1, e()
            }, t)
        }
        setIfNotSet(e, t) {
            if (this._isDisposed) throw new et("Calling 'setIfNotSet' on a disposed TimeoutTimer");
            this._token === -1 && (this._token = setTimeout(() => {
                this._token = -1, e()
            }, t))
        }
    },
    Yf = class {
        constructor() {
            this.disposable = void 0, this.isDisposed = !1
        }
        cancel() {
            this.disposable?.dispose(), this.disposable = void 0
        }
        cancelAndSet(e, t, i = globalThis) {
            if (this.isDisposed) throw new et("Calling 'cancelAndSet' on a disposed IntervalTimer");
            this.cancel();
            const s = i.setInterval(() => {
                e()
            }, t);
            this.disposable = de(() => {
                i.clearInterval(s), this.disposable = void 0
            })
        }
        dispose() {
            this.cancel(), this.isDisposed = !0
        }
    },
    mc = class {
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
    Xf, eo;
(function() {
    typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? eo = (e, t, i) => {
        N1(() => {
            if (s) return;
            const n = Date.now() + 15;
            t(Object.freeze({
                didTimeout: !0,
                timeRemaining() {
                    return Math.max(0, n - Date.now())
                }
            }))
        });
        let s = !1;
        return {
            dispose() {
                s || (s = !0)
            }
        }
    } : eo = (e, t, i) => {
        const s = e.requestIdleCallback(t, typeof i == "number" ? {
            timeout: i
        } : void 0);
        let n = !1;
        return {
            dispose() {
                n || (n = !0, e.cancelIdleCallback(s))
            }
        }
    }, Xf = (e, t) => eo(globalThis, e, t)
})();
var vc;
(e => {
    async function t(s) {
        let n;
        const r = await Promise.all(s.map(o => o.then(a => a, a => {
            n || (n = a)
        })));
        if (typeof n < "u") throw n;
        return r
    }
    e.settled = t;

    function i(s) {
        return new Promise(async (n, r) => {
            try {
                await s(n, r)
            } catch (o) {
                r(o)
            }
        })
    }
    e.withAsyncBody = i
})(vc || (vc = {}));
var yc = class ot {
    static fromArray(t) {
        return new ot(i => {
            i.emitMany(t)
        })
    }
    static fromPromise(t) {
        return new ot(async i => {
            i.emitMany(await t)
        })
    }
    static fromPromisesResolveOrder(t) {
        return new ot(async i => {
            await Promise.all(t.map(async s => i.emitOne(await s)))
        })
    }
    static merge(t) {
        return new ot(async i => {
            await Promise.all(t.map(async s => {
                for await (const n of s) i.emitOne(n)
            }))
        })
    }
    constructor(t, i) {
        this._state = 0, this._results = [], this._error = null, this._onReturn = i, this._onStateChanged = new L, queueMicrotask(async () => {
            const s = {
                emitOne: n => this.emitOne(n),
                emitMany: n => this.emitMany(n),
                reject: n => this.reject(n)
            };
            try {
                await Promise.resolve(t(s)), this.resolve()
            } catch (n) {
                this.reject(n)
            } finally {
                s.emitOne = void 0, s.emitMany = void 0, s.reject = void 0
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
                    await A.toPromise(this._onStateChanged.event)
                } while (!0)
            },
            return: async () => (this._onReturn?.(), {
                done: !0,
                value: void 0
            })
        }
    }
    static map(t, i) {
        return new ot(async s => {
            for await (const n of t) s.emitOne(i(n))
        })
    }
    map(t) {
        return ot.map(this, t)
    }
    static filter(t, i) {
        return new ot(async s => {
            for await (const n of t) i(n) && s.emitOne(n)
        })
    }
    filter(t) {
        return ot.filter(this, t)
    }
    static coalesce(t) {
        return ot.filter(t, i => !!i)
    }
    coalesce() {
        return ot.coalesce(this)
    }
    static async toPromise(t) {
        const i = [];
        for await (const s of t) i.push(s);
        return i
    }
    toPromise() {
        return ot.toPromise(this)
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
yc.EMPTY = yc.fromArray([]);
var {
    entries: bc,
    setPrototypeOf: _c,
    isFrozen: Zf,
    getPrototypeOf: Qf,
    getOwnPropertyDescriptor: Jf
} = Object, {
    freeze: Be,
    seal: tt,
    create: wc
} = Object, {
    apply: to,
    construct: io
} = typeof Reflect < "u" && Reflect;
Be || (Be = function(t) {
    return t
}), tt || (tt = function(t) {
    return t
}), to || (to = function(t, i, s) {
    return t.apply(i, s)
}), io || (io = function(t, i) {
    return new t(...i)
});
var An = Ze(Array.prototype.forEach),
    Sc = Ze(Array.prototype.pop),
    ys = Ze(Array.prototype.push),
    Nn = Ze(String.prototype.toLowerCase),
    so = Ze(String.prototype.toString),
    Cc = Ze(String.prototype.match),
    bs = Ze(String.prototype.replace),
    ep = Ze(String.prototype.indexOf),
    tp = Ze(String.prototype.trim),
    ct = Ze(Object.prototype.hasOwnProperty),
    He = Ze(RegExp.prototype.test),
    _s = ip(TypeError);

function Ze(e) {
    return function(t) {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++) s[n - 1] = arguments[n];
        return to(e, t, s)
    }
}

function ip(e) {
    return function() {
        for (var t = arguments.length, i = new Array(t), s = 0; s < t; s++) i[s] = arguments[s];
        return io(e, i)
    }
}

function Z(e, t) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Nn;
    _c && _c(e, null);
    let s = t.length;
    for (; s--;) {
        let n = t[s];
        if (typeof n == "string") {
            const r = i(n);
            r !== n && (Zf(t) || (t[s] = r), n = r)
        }
        e[n] = !0
    }
    return e
}

function sp(e) {
    for (let t = 0; t < e.length; t++) ct(e, t) || (e[t] = null);
    return e
}

function ri(e) {
    const t = wc(null);
    for (const [i, s] of bc(e)) ct(e, i) && (Array.isArray(s) ? t[i] = sp(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ri(s) : t[i] = s);
    return t
}

function ws(e, t) {
    for (; e !== null;) {
        const s = Jf(e, t);
        if (s) {
            if (s.get) return Ze(s.get);
            if (typeof s.value == "function") return Ze(s.value)
        }
        e = Qf(e)
    }

    function i() {
        return null
    }
    return i
}
var Dc = Be(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    no = Be(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    ro = Be(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    np = Be(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    oo = Be(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    rp = Be(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    Ec = Be(["#text"]),
    kc = Be(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
    ao = Be(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    Tc = Be(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    In = Be(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    op = tt(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    ap = tt(/<%[\w\W]*|[\w\W]*%>/gm),
    lp = tt(/\${[\w\W]*}/gm),
    cp = tt(/^data-[\-\w.\u00B7-\uFFFF]/),
    hp = tt(/^aria-[\-\w]+$/),
    xc = tt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    dp = tt(/^(?:\w+script|data):/i),
    up = tt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    Ac = tt(/^html$/i),
    fp = tt(/^[a-z][.\w]*(-[.\w]+)+$/i),
    Nc = Object.freeze({
        __proto__: null,
        MUSTACHE_EXPR: op,
        ERB_EXPR: ap,
        TMPLIT_EXPR: lp,
        DATA_ATTR: cp,
        ARIA_ATTR: hp,
        IS_ALLOWED_URI: xc,
        IS_SCRIPT_OR_DATA: dp,
        ATTR_WHITESPACE: up,
        DOCTYPE_NAME: Ac,
        CUSTOM_ELEMENT: fp
    }),
    Ss = {
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
    pp = function() {
        return typeof window > "u" ? null : window
    },
    gp = function(t, i) {
        if (typeof t != "object" || typeof t.createPolicy != "function") return null;
        let s = null;
        const n = "data-tt-policy-suffix";
        i && i.hasAttribute(n) && (s = i.getAttribute(n));
        const r = "dompurify" + (s ? "#" + s : "");
        try {
            return t.createPolicy(r, {
                createHTML(o) {
                    return o
                },
                createScriptURL(o) {
                    return o
                }
            })
        } catch {
            return console.warn("TrustedTypes policy " + r + " could not be created."), null
        }
    };

function Ic() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pp();
    const t = H => Ic(H);
    if (t.version = "3.1.7", t.removed = [], !e || !e.document || e.document.nodeType !== Ss.document) return t.isSupported = !1, t;
    let {
        document: i
    } = e;
    const s = i,
        n = s.currentScript,
        {
            DocumentFragment: r,
            HTMLTemplateElement: o,
            Node: a,
            Element: c,
            NodeFilter: h,
            NamedNodeMap: d = e.NamedNodeMap || e.MozNamedAttrMap,
            HTMLFormElement: u,
            DOMParser: f,
            trustedTypes: p
        } = e,
        g = c.prototype,
        _ = ws(g, "cloneNode"),
        y = ws(g, "remove"),
        w = ws(g, "nextSibling"),
        C = ws(g, "childNodes"),
        D = ws(g, "parentNode");
    if (typeof o == "function") {
        const H = i.createElement("template");
        H.content && H.content.ownerDocument && (i = H.content.ownerDocument)
    }
    let E, b = "";
    const {
        implementation: S,
        createNodeIterator: I,
        createDocumentFragment: P,
        getElementsByTagName: j
    } = i, {
        importNode: ue
    } = s;
    let K = {};
    t.isSupported = typeof bc == "function" && typeof D == "function" && S && S.createHTMLDocument !== void 0;
    const {
        MUSTACHE_EXPR: $,
        ERB_EXPR: Oe,
        TMPLIT_EXPR: Qt,
        DATA_ATTR: M,
        ARIA_ATTR: k,
        IS_SCRIPT_OR_DATA: R,
        ATTR_WHITESPACE: N,
        CUSTOM_ELEMENT: B
    } = Nc;
    let {
        IS_ALLOWED_URI: W
    } = Nc, U = null;
    const be = Z({}, [...Dc, ...no, ...ro, ...oo, ...Ec]);
    let J = null;
    const _t = Z({}, [...kc, ...ao, ...Tc, ...In]);
    let ce = Object.seal(wc(null, {
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
        at = null,
        Ei = null,
        Jt = !0,
        os = !0,
        tn = !1,
        $a = !0,
        ki = !1,
        ur = !0,
        ei = !1,
        fr = !1,
        pr = !1,
        Ti = !1,
        sn = !1,
        nn = !1,
        Ua = !0,
        Wa = !1;
    const gu = "user-content-";
    let gr = !0,
        as = !1,
        xi = {},
        Ai = null;
    const Va = Z({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let Ka = null;
    const Ga = Z({}, ["audio", "video", "img", "source", "image", "track"]);
    let mr = null;
    const qa = Z({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
        rn = "http://www.w3.org/1998/Math/MathML",
        on = "http://www.w3.org/2000/svg",
        wt = "http://www.w3.org/1999/xhtml";
    let Ni = wt,
        vr = !1,
        yr = null;
    const mu = Z({}, [rn, on, wt], so);
    let ls = null;
    const vu = ["application/xhtml+xml", "text/html"],
        yu = "text/html";
    let De = null,
        Ii = null;
    const bu = i.createElement("form"),
        ja = function(m) {
            return m instanceof RegExp || m instanceof Function
        },
        br = function() {
            let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!(Ii && Ii === m)) {
                if ((!m || typeof m != "object") && (m = {}), m = ri(m), ls = vu.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? yu : m.PARSER_MEDIA_TYPE, De = ls === "application/xhtml+xml" ? so : Nn, U = ct(m, "ALLOWED_TAGS") ? Z({}, m.ALLOWED_TAGS, De) : be, J = ct(m, "ALLOWED_ATTR") ? Z({}, m.ALLOWED_ATTR, De) : _t, yr = ct(m, "ALLOWED_NAMESPACES") ? Z({}, m.ALLOWED_NAMESPACES, so) : mu, mr = ct(m, "ADD_URI_SAFE_ATTR") ? Z(ri(qa), m.ADD_URI_SAFE_ATTR, De) : qa, Ka = ct(m, "ADD_DATA_URI_TAGS") ? Z(ri(Ga), m.ADD_DATA_URI_TAGS, De) : Ga, Ai = ct(m, "FORBID_CONTENTS") ? Z({}, m.FORBID_CONTENTS, De) : Va, at = ct(m, "FORBID_TAGS") ? Z({}, m.FORBID_TAGS, De) : {}, Ei = ct(m, "FORBID_ATTR") ? Z({}, m.FORBID_ATTR, De) : {}, xi = ct(m, "USE_PROFILES") ? m.USE_PROFILES : !1, Jt = m.ALLOW_ARIA_ATTR !== !1, os = m.ALLOW_DATA_ATTR !== !1, tn = m.ALLOW_UNKNOWN_PROTOCOLS || !1, $a = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ki = m.SAFE_FOR_TEMPLATES || !1, ur = m.SAFE_FOR_XML !== !1, ei = m.WHOLE_DOCUMENT || !1, Ti = m.RETURN_DOM || !1, sn = m.RETURN_DOM_FRAGMENT || !1, nn = m.RETURN_TRUSTED_TYPE || !1, pr = m.FORCE_BODY || !1, Ua = m.SANITIZE_DOM !== !1, Wa = m.SANITIZE_NAMED_PROPS || !1, gr = m.KEEP_CONTENT !== !1, as = m.IN_PLACE || !1, W = m.ALLOWED_URI_REGEXP || xc, Ni = m.NAMESPACE || wt, ce = m.CUSTOM_ELEMENT_HANDLING || {}, m.CUSTOM_ELEMENT_HANDLING && ja(m.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ce.tagNameCheck = m.CUSTOM_ELEMENT_HANDLING.tagNameCheck), m.CUSTOM_ELEMENT_HANDLING && ja(m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ce.attributeNameCheck = m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ce.allowCustomizedBuiltInElements = m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ki && (os = !1), sn && (Ti = !0), xi && (U = Z({}, Ec), J = [], xi.html === !0 && (Z(U, Dc), Z(J, kc)), xi.svg === !0 && (Z(U, no), Z(J, ao), Z(J, In)), xi.svgFilters === !0 && (Z(U, ro), Z(J, ao), Z(J, In)), xi.mathMl === !0 && (Z(U, oo), Z(J, Tc), Z(J, In))), m.ADD_TAGS && (U === be && (U = ri(U)), Z(U, m.ADD_TAGS, De)), m.ADD_ATTR && (J === _t && (J = ri(J)), Z(J, m.ADD_ATTR, De)), m.ADD_URI_SAFE_ATTR && Z(mr, m.ADD_URI_SAFE_ATTR, De), m.FORBID_CONTENTS && (Ai === Va && (Ai = ri(Ai)), Z(Ai, m.FORBID_CONTENTS, De)), gr && (U["#text"] = !0), ei && Z(U, ["html", "head", "body"]), U.table && (Z(U, ["tbody"]), delete at.tbody), m.TRUSTED_TYPES_POLICY) {
                    if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function") throw _s('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                    if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw _s('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                    E = m.TRUSTED_TYPES_POLICY, b = E.createHTML("")
                } else E === void 0 && (E = gp(p, n)), E !== null && typeof b == "string" && (b = E.createHTML(""));
                Be && Be(m), Ii = m
            }
        },
        Ya = Z({}, ["mi", "mo", "mn", "ms", "mtext"]),
        Xa = Z({}, ["annotation-xml"]),
        _u = Z({}, ["title", "style", "font", "a", "script"]),
        Za = Z({}, [...no, ...ro, ...np]),
        Qa = Z({}, [...oo, ...rp]),
        wu = function(m) {
            let x = D(m);
            (!x || !x.tagName) && (x = {
                namespaceURI: Ni,
                tagName: "template"
            });
            const F = Nn(m.tagName),
                he = Nn(x.tagName);
            return yr[m.namespaceURI] ? m.namespaceURI === on ? x.namespaceURI === wt ? F === "svg" : x.namespaceURI === rn ? F === "svg" && (he === "annotation-xml" || Ya[he]) : !!Za[F] : m.namespaceURI === rn ? x.namespaceURI === wt ? F === "math" : x.namespaceURI === on ? F === "math" && Xa[he] : !!Qa[F] : m.namespaceURI === wt ? x.namespaceURI === on && !Xa[he] || x.namespaceURI === rn && !Ya[he] ? !1 : !Qa[F] && (_u[F] || !Za[F]) : !!(ls === "application/xhtml+xml" && yr[m.namespaceURI]) : !1
        },
        dt = function(m) {
            ys(t.removed, {
                element: m
            });
            try {
                D(m).removeChild(m)
            } catch {
                y(m)
            }
        },
        an = function(m, x) {
            try {
                ys(t.removed, {
                    attribute: x.getAttributeNode(m),
                    from: x
                })
            } catch {
                ys(t.removed, {
                    attribute: null,
                    from: x
                })
            }
            if (x.removeAttribute(m), m === "is" && !J[m])
                if (Ti || sn) try {
                    dt(x)
                } catch {} else try {
                    x.setAttribute(m, "")
                } catch {}
        },
        Ja = function(m) {
            let x = null,
                F = null;
            if (pr) m = "<remove></remove>" + m;
            else {
                const Te = Cc(m, /^[\r\n\t ]+/);
                F = Te && Te[0]
            }
            ls === "application/xhtml+xml" && Ni === wt && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
            const he = E ? E.createHTML(m) : m;
            if (Ni === wt) try {
                x = new f().parseFromString(he, ls)
            } catch {}
            if (!x || !x.documentElement) {
                x = S.createDocument(Ni, "template", null);
                try {
                    x.documentElement.innerHTML = vr ? b : he
                } catch {}
            }
            const Ne = x.body || x.documentElement;
            return m && F && Ne.insertBefore(i.createTextNode(F), Ne.childNodes[0] || null), Ni === wt ? j.call(x, ei ? "html" : "body")[0] : ei ? x.documentElement : Ne
        },
        el = function(m) {
            return I.call(m.ownerDocument || m, m, h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION, null)
        },
        tl = function(m) {
            return m instanceof u && (typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || !(m.attributes instanceof d) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function")
        },
        il = function(m) {
            return typeof a == "function" && m instanceof a
        },
        St = function(m, x, F) {
            K[m] && An(K[m], he => {
                he.call(t, x, F, Ii)
            })
        },
        sl = function(m) {
            let x = null;
            if (St("beforeSanitizeElements", m, null), tl(m)) return dt(m), !0;
            const F = De(m.nodeName);
            if (St("uponSanitizeElement", m, {
                    tagName: F,
                    allowedTags: U
                }), m.hasChildNodes() && !il(m.firstElementChild) && He(/<[/\w]/g, m.innerHTML) && He(/<[/\w]/g, m.textContent) || m.nodeType === Ss.progressingInstruction || ur && m.nodeType === Ss.comment && He(/<[/\w]/g, m.data)) return dt(m), !0;
            if (!U[F] || at[F]) {
                if (!at[F] && rl(F) && (ce.tagNameCheck instanceof RegExp && He(ce.tagNameCheck, F) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(F))) return !1;
                if (gr && !Ai[F]) {
                    const he = D(m) || m.parentNode,
                        Ne = C(m) || m.childNodes;
                    if (Ne && he) {
                        const Te = Ne.length;
                        for (let Ve = Te - 1; Ve >= 0; --Ve) {
                            const ut = _(Ne[Ve], !0);
                            ut.__removalCount = (m.__removalCount || 0) + 1, he.insertBefore(ut, w(m))
                        }
                    }
                }
                return dt(m), !0
            }
            return m instanceof c && !wu(m) || (F === "noscript" || F === "noembed" || F === "noframes") && He(/<\/no(script|embed|frames)/i, m.innerHTML) ? (dt(m), !0) : (ki && m.nodeType === Ss.text && (x = m.textContent, An([$, Oe, Qt], he => {
                x = bs(x, he, " ")
            }), m.textContent !== x && (ys(t.removed, {
                element: m.cloneNode()
            }), m.textContent = x)), St("afterSanitizeElements", m, null), !1)
        },
        nl = function(m, x, F) {
            if (Ua && (x === "id" || x === "name") && (F in i || F in bu)) return !1;
            if (!(os && !Ei[x] && He(M, x))) {
                if (!(Jt && He(k, x))) {
                    if (!J[x] || Ei[x]) {
                        if (!(rl(m) && (ce.tagNameCheck instanceof RegExp && He(ce.tagNameCheck, m) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(m)) && (ce.attributeNameCheck instanceof RegExp && He(ce.attributeNameCheck, x) || ce.attributeNameCheck instanceof Function && ce.attributeNameCheck(x)) || x === "is" && ce.allowCustomizedBuiltInElements && (ce.tagNameCheck instanceof RegExp && He(ce.tagNameCheck, F) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(F)))) return !1
                    } else if (!mr[x]) {
                        if (!He(W, bs(F, N, ""))) {
                            if (!((x === "src" || x === "xlink:href" || x === "href") && m !== "script" && ep(F, "data:") === 0 && Ka[m])) {
                                if (!(tn && !He(R, bs(F, N, "")))) {
                                    if (F) return !1
                                }
                            }
                        }
                    }
                }
            }
            return !0
        },
        rl = function(m) {
            return m !== "annotation-xml" && Cc(m, B)
        },
        ol = function(m) {
            St("beforeSanitizeAttributes", m, null);
            const {
                attributes: x
            } = m;
            if (!x) return;
            const F = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: J
            };
            let he = x.length;
            for (; he--;) {
                const Ne = x[he],
                    {
                        name: Te,
                        namespaceURI: Ve,
                        value: ut
                    } = Ne,
                    cs = De(Te);
                let Fe = Te === "value" ? ut : tp(ut);
                if (F.attrName = cs, F.attrValue = Fe, F.keepAttr = !0, F.forceKeepAttr = void 0, St("uponSanitizeAttribute", m, F), Fe = F.attrValue, F.forceKeepAttr || (an(Te, m), !F.keepAttr)) continue;
                if (!$a && He(/\/>/i, Fe)) {
                    an(Te, m);
                    continue
                }
                ki && An([$, Oe, Qt], ll => {
                    Fe = bs(Fe, ll, " ")
                });
                const al = De(m.nodeName);
                if (nl(al, cs, Fe)) {
                    if (Wa && (cs === "id" || cs === "name") && (an(Te, m), Fe = gu + Fe), ur && He(/((--!?|])>)|<\/(style|title)/i, Fe)) {
                        an(Te, m);
                        continue
                    }
                    if (E && typeof p == "object" && typeof p.getAttributeType == "function" && !Ve) switch (p.getAttributeType(al, cs)) {
                        case "TrustedHTML": {
                            Fe = E.createHTML(Fe);
                            break
                        }
                        case "TrustedScriptURL": {
                            Fe = E.createScriptURL(Fe);
                            break
                        }
                    }
                    try {
                        Ve ? m.setAttributeNS(Ve, Te, Fe) : m.setAttribute(Te, Fe), tl(m) ? dt(m) : Sc(t.removed)
                    } catch {}
                }
            }
            St("afterSanitizeAttributes", m, null)
        },
        Su = function H(m) {
            let x = null;
            const F = el(m);
            for (St("beforeSanitizeShadowDOM", m, null); x = F.nextNode();) St("uponSanitizeShadowNode", x, null), !sl(x) && (x.content instanceof r && H(x.content), ol(x));
            St("afterSanitizeShadowDOM", m, null)
        };
    return t.sanitize = function(H) {
        let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            x = null,
            F = null,
            he = null,
            Ne = null;
        if (vr = !H, vr && (H = "<!-->"), typeof H != "string" && !il(H))
            if (typeof H.toString == "function") {
                if (H = H.toString(), typeof H != "string") throw _s("dirty is not a string, aborting")
            } else throw _s("toString is not a function");
        if (!t.isSupported) return H;
        if (fr || br(m), t.removed = [], typeof H == "string" && (as = !1), as) {
            if (H.nodeName) {
                const ut = De(H.nodeName);
                if (!U[ut] || at[ut]) throw _s("root node is forbidden and cannot be sanitized in-place")
            }
        } else if (H instanceof a) x = Ja("<!---->"), F = x.ownerDocument.importNode(H, !0), F.nodeType === Ss.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? x = F : x.appendChild(F);
        else {
            if (!Ti && !ki && !ei && H.indexOf("<") === -1) return E && nn ? E.createHTML(H) : H;
            if (x = Ja(H), !x) return Ti ? null : nn ? b : ""
        }
        x && pr && dt(x.firstChild);
        const Te = el(as ? H : x);
        for (; he = Te.nextNode();) sl(he) || (he.content instanceof r && Su(he.content), ol(he));
        if (as) return H;
        if (Ti) {
            if (sn)
                for (Ne = P.call(x.ownerDocument); x.firstChild;) Ne.appendChild(x.firstChild);
            else Ne = x;
            return (J.shadowroot || J.shadowrootmode) && (Ne = ue.call(s, Ne, !0)), Ne
        }
        let Ve = ei ? x.outerHTML : x.innerHTML;
        return ei && U["!doctype"] && x.ownerDocument && x.ownerDocument.doctype && x.ownerDocument.doctype.name && He(Ac, x.ownerDocument.doctype.name) && (Ve = "<!DOCTYPE " + x.ownerDocument.doctype.name + `>
` + Ve), ki && An([$, Oe, Qt], ut => {
            Ve = bs(Ve, ut, " ")
        }), E && nn ? E.createHTML(Ve) : Ve
    }, t.setConfig = function() {
        let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        br(H), fr = !0
    }, t.clearConfig = function() {
        Ii = null, fr = !1
    }, t.isValidAttribute = function(H, m, x) {
        Ii || br({});
        const F = De(H),
            he = De(m);
        return nl(F, he, x)
    }, t.addHook = function(H, m) {
        typeof m == "function" && (K[H] = K[H] || [], ys(K[H], m))
    }, t.removeHook = function(H) {
        if (K[H]) return Sc(K[H])
    }, t.removeHooks = function(H) {
        K[H] && (K[H] = [])
    }, t.removeAllHooks = function() {
        K = {}
    }, t
}
var Cs = Ic();

function mp(e) {
    return lo(e, 0)
}

function lo(e, t) {
    switch (typeof e) {
        case "object":
            return e === null ? xt(349, t) : Array.isArray(e) ? yp(e, t) : bp(e, t);
        case "string":
            return co(e, t);
        case "boolean":
            return vp(e, t);
        case "number":
            return xt(e, t);
        case "undefined":
            return xt(937, t);
        default:
            return xt(617, t)
    }
}

function xt(e, t) {
    return (t << 5) - t + e | 0
}

function vp(e, t) {
    return xt(e ? 433 : 863, t)
}

function co(e, t) {
    t = xt(149417, t);
    for (let i = 0, s = e.length; i < s; i++) t = xt(e.charCodeAt(i), t);
    return t
}

function yp(e, t) {
    return t = xt(104579, t), e.reduce((i, s) => lo(s, i), t)
}

function bp(e, t) {
    return t = xt(181387, t), Object.keys(e).sort().reduce((i, s) => (i = co(s, i), lo(e[s], i)), t)
}

function ho(e, t, i = 32) {
    const s = i - t,
        n = ~((1 << s) - 1);
    return (e << t | (n & e) >>> s) >>> 0
}

function Ds(e, t = 32) {
    return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map(i => i.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0")
}
var _p = class lu {
    constructor() {
        this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(67), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1
    }
    update(t) {
        const i = t.length;
        if (i === 0) return;
        const s = this._buff;
        let n = this._buffLen,
            r = this._leftoverHighSurrogate,
            o, a;
        for (r !== 0 ? (o = r, a = -1, r = 0) : (o = t.charCodeAt(0), a = 0);;) {
            let c = o;
            if (hf(o))
                if (a + 1 < i) {
                    const h = t.charCodeAt(a + 1);
                    Zl(h) ? (a++, c = df(o, h)) : c = 65533
                } else {
                    r = o;
                    break
                }
            else Zl(o) && (c = 65533);
            if (n = this._push(s, n, c), a++, a < i) o = t.charCodeAt(a);
            else break
        }
        this._buffLen = n, this._leftoverHighSurrogate = r
    }
    _push(t, i, s) {
        return s < 128 ? t[i++] = s : s < 2048 ? (t[i++] = 192 | (s & 1984) >>> 6, t[i++] = 128 | (s & 63) >>> 0) : s < 65536 ? (t[i++] = 224 | (s & 61440) >>> 12, t[i++] = 128 | (s & 4032) >>> 6, t[i++] = 128 | (s & 63) >>> 0) : (t[i++] = 240 | (s & 1835008) >>> 18, t[i++] = 128 | (s & 258048) >>> 12, t[i++] = 128 | (s & 4032) >>> 6, t[i++] = 128 | (s & 63) >>> 0), i >= 64 && (this._step(), i -= 64, this._totalLen += 64, t[0] = t[64], t[1] = t[65], t[2] = t[66]), i
    }
    digest() {
        return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, 65533)), this._totalLen += this._buffLen, this._wrapUp()), Ds(this._h0) + Ds(this._h1) + Ds(this._h2) + Ds(this._h3) + Ds(this._h4)
    }
    _wrapUp() {
        this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
        const t = 8 * this._totalLen;
        this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step()
    }
    _step() {
        const t = lu._bigBlock32,
            i = this._buffDV;
        for (let u = 0; u < 64; u += 4) t.setUint32(u, i.getUint32(u, !1), !1);
        for (let u = 64; u < 320; u += 4) t.setUint32(u, ho(t.getUint32(u - 12, !1) ^ t.getUint32(u - 32, !1) ^ t.getUint32(u - 56, !1) ^ t.getUint32(u - 64, !1), 1), !1);
        let s = this._h0,
            n = this._h1,
            r = this._h2,
            o = this._h3,
            a = this._h4,
            c, h, d;
        for (let u = 0; u < 80; u++) u < 20 ? (c = n & r | ~n & o, h = 1518500249) : u < 40 ? (c = n ^ r ^ o, h = 1859775393) : u < 60 ? (c = n & r | n & o | r & o, h = 2400959708) : (c = n ^ r ^ o, h = 3395469782), d = ho(s, 5) + c + a + h + t.getUint32(u * 4, !1) & 4294967295, a = o, o = r, r = ho(n, 30), n = s, s = d;
        this._h0 = this._h0 + s & 4294967295, this._h1 = this._h1 + n & 4294967295, this._h2 = this._h2 + r & 4294967295, this._h3 = this._h3 + o & 4294967295, this._h4 = this._h4 + a & 4294967295
    }
};
_p._bigBlock32 = new DataView(new ArrayBuffer(320));

function Ln(e, t, i) {
    return Math.min(Math.max(e, t), i)
}
var W5 = Date.now(),
    V5 = 1800 * 1e3,
    wp = ["vscode.typescript", "vscode.javascript", "vscode.python", "vscode.json", "vscode.html", "vscode.css", "vscode.markdown", "vscode.yaml", "vscode.xml", "vscode.go", "vscode.rust", "vscode.cpp", "vscode.java", "vscode.csharp", "vscode.ruby", "vscode.sql", "vscode.shellscript", "vscode.swift", "vscode.dart", "vscode.scss", "vscode.less", "vscode.lua", "vscode.perl", "vscode.r", "vscode.php", "vscode.docker", "vscode.ini", "vscode.diff", "vscode.make", "vscode.log", "mechatroner.rainbow-csv"],
    Lc = ["anysphere.cursor-resolver", "anysphere.cursor-always-local", "anysphere.cursor-agent-worker", "anysphere.cursor-agent-exec", "anysphere.cursor-checkout", "anysphere.cursor-explorer", "anysphere.cursor-commits", "anysphere.cursor-mcp", "anysphere.cursor-ndjson-ingest", "anysphere.cursor-retrieval", "cursor.cursor-browser-automation", "vscode.git", "vscode.git-base", "vscode.vscode-theme-seti", "undefined_publisher.cursor-themes", ...wp, "vscodevim.vim", "asvetliakov.vscode-neovim", "tuttieee.emacs-mcx"],
    Sp = ["vscode.css-language-features", "vscode.html-language-features", "vscode.json-language-features", "vscode.php-language-features", "vscode.typescript-language-features", "typescriptteam.native-preview", "dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "biomejs.biome", "denoland.vscode-deno", "vue.volar", "svelte.svelte-vscode", "astro-build.astro-vscode", "angular.ng-template", "bradlc.vscode-tailwindcss", "stylelint.vscode-stylelint", "unifiedjs.vscode-mdx", "ms-python.python", "ms-python.vscode-pylance", "charliermarsh.ruff", "golang.go", "rust-lang.rust-analyzer", "ms-vscode.cpptools", "llvm-vs-code-extensions.vscode-clangd", "ms-vscode.cmake-tools", "twxs.cmake", "ms-dotnettools.csharp", "redhat.java", "vscjava.vscode-gradle", "fwcd.kotlin", "mathiasfrohlich.kotlin", "scalameta.metals", "scala-lang.scala", "swiftlang.swift-vscode", "sswg.swift-lang", "bmewburn.vscode-intelephense-client", "devsense.phptools-vscode", "shopify.ruby-lsp", "dart-code.dart-code", "dart-code.flutter", "jakebecker.elixir-ls", "pgourlain.erlang", "betterthantomorrow.calva", "ziglang.vscode-zig", "sumneko.lua", "julialang.language-julia", "reditorsupport.r", "haskell.haskell", "ocamllabs.ocaml-platform", "fortran-lang.linter-gfortran", "ms-vscode.powershell", "timonwong.shellcheck", "mads-hartmann.bash-ide-vscode", "juanblanco.solidity", "nomicfoundation.hardhat-solidity", "james-yu.latex-workshop", "graphql.vscode-graphql", "graphql.vscode-graphql-syntax", "prisma.prisma", "hashicorp.terraform", "ms-azuretools.vscode-bicep", "ms-azuretools.vscode-docker", "docker.docker", "redhat.vscode-yaml", "redhat.vscode-xml", "tamasfe.even-better-toml", "tombi-toml.tombi", "wholroyd.jinja", "samuelcolvin.jinjahtml", "zxh404.vscode-proto3", "bufbuild.vscode-buf", "jnoortheen.nix-ide", "bbenoist.nix"],
    Cp = [...Lc, "anysphere.cursor-deeplink", "anysphere.cursor-resolver-helper", "anysphere.cursor-socket", "vscode.github-authentication"],
    Dp = [...Lc, "anysphere.remote-ssh", "anysphere.remote-wsl", "anysphere.remote-containers"],
    Ep = [...Dp, ...Sp],
    K5 = [...Ep, ...Cp],
    Rc = "src.vs.platform.reactivestorage.browser.reactiveStorageServiceImpl.persistentStorage",
    G5 = `${Rc}.applicationUser`,
    q5 = `${Rc}.applicationUser.subscription`,
    kp = "workbench.panel.aichat.view",
    j5 = kp + ".aichat.chatdata",
    Tp = [.85, 1, 1.15, 1.3],
    xp = "default",
    Y5 = [xp, ...Tp.map(e => `${e}`)],
    Ap = ["aichat.newchataction", "composer.focusComposer", "aiSettings.action.open", "workbench.action.openSettings", "workbench.action.showCommands", "workbench.action.togglePanel", "workbench.action.toggleSidebarVisibility", "workbench.action.toggleUnifiedSidebar", "workbench.action.toggleAuxiliaryBar", "workbench.action.toggleFullScreen", "workbench.action.terminal.toggleTerminal", "workbench.action.terminal.new", "workbench.action.quickOpen", "workbench.action.closeActiveEditor", "workbench.action.newBrowserTab", "workbench.action.reloadBrowserTab", "workbench.action.focusBrowserLocationBar"],
    Np = ["glass.newAgentFromKeyboard", "glass.newBrowser", "glass.newTab", "glass.openEditorPanelNewTabMenu", "glass.nextTab", "glass.previousTab", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.focusBrowserLocationBar", "glass.hardReloadBrowserTab", "glass.showBrowserFind", "glass.hideBrowserFind", "glass.toggleDesignMode", "glass.togglePanel", "glass.toggleSidebar", "glass.toggleSidebarFromKeyboard", "glass.toggleTerminal", "glass.focusInput", "glass.openFilePrioritizedPalette", "glass.openActionsPalette"],
    X5 = new Set([...Ap, ...Np]),
    zt = class {
        constructor(e, t, i) {
            this.owner = e, this.debugNameSource = t, this.referenceFn = i
        }
        getDebugName(e) {
            return Ip(e, this)
        }
    },
    Mc = new Map,
    uo = new WeakMap;

function Ip(e, t) {
    const i = uo.get(e);
    if (i) return i;
    const s = Lp(e, t);
    if (s) {
        let n = Mc.get(s) ?? 0;
        n++, Mc.set(s, n);
        const r = n === 1 ? s : `${s}#${n}`;
        return uo.set(e, r), r
    }
}

function Lp(e, t) {
    const i = uo.get(e);
    if (i) return i;
    const s = t.owner ? Mp(t.owner) + "." : "";
    let n;
    const r = t.debugNameSource;
    if (r !== void 0)
        if (typeof r == "function") {
            if (n = r(), n !== void 0) return s + n
        } else return s + r;
    const o = t.referenceFn;
    if (o !== void 0 && (n = fo(o), n !== void 0)) return s + n;
    if (t.owner !== void 0) {
        const a = Rp(t.owner, e);
        if (a !== void 0) return s + a
    }
}

function Rp(e, t) {
    for (const i in e)
        if (e[i] === t) return i
}
var Pc = new Map,
    Oc = new WeakMap;

function Mp(e) {
    const t = Oc.get(e);
    if (t) return t;
    const i = Fc(e) ?? "Object";
    let s = Pc.get(i) ?? 0;
    s++, Pc.set(i, s);
    const n = s === 1 ? i : `${i}#${s}`;
    return Oc.set(e, n), n
}

function Fc(e) {
    const t = e.constructor;
    if (t) return t.name === "Object" ? void 0 : t.name
}

function fo(e) {
    const t = e.toString(),
        s = /\/\*\*\s*@description\s*([^*]*)\*\//.exec(t);
    return (s ? s[1] : void 0)?.trim()
}
var Ui = (e, t) => e === t,
    oi;

function po(e) {
    oi ? oi instanceof Bc ? oi.loggers.push(e) : oi = new Bc([oi, e]) : oi = e
}

function Ce() {
    return oi
}
var go = void 0;

function Pp(e) {
    go = e
}

function Op(e) {
    go && go(e)
}
var Bc = class {
        constructor(e) {
            this.loggers = e
        }
        handleObservableCreated(e) {
            for (const t of this.loggers) t.handleObservableCreated(e)
        }
        handleOnListenerCountChanged(e, t) {
            for (const i of this.loggers) i.handleOnListenerCountChanged(e, t)
        }
        handleObservableUpdated(e, t) {
            for (const i of this.loggers) i.handleObservableUpdated(e, t)
        }
        handleAutorunCreated(e) {
            for (const t of this.loggers) t.handleAutorunCreated(e)
        }
        handleAutorunDisposed(e) {
            for (const t of this.loggers) t.handleAutorunDisposed(e)
        }
        handleAutorunDependencyChanged(e, t, i) {
            for (const s of this.loggers) s.handleAutorunDependencyChanged(e, t, i)
        }
        handleAutorunStarted(e) {
            for (const t of this.loggers) t.handleAutorunStarted(e)
        }
        handleAutorunFinished(e) {
            for (const t of this.loggers) t.handleAutorunFinished(e)
        }
        handleDerivedDependencyChanged(e, t, i) {
            for (const s of this.loggers) s.handleDerivedDependencyChanged(e, t, i)
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
    Hc;

function Fp(e) {
    Hc = e
}
var zc;

function Bp(e) {
    zc = e
}
var mo;

function Hp(e) {
    mo = e
}
var $c = class {
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
            const i = t === void 0 ? void 0 : e,
                s = t === void 0 ? e : t;
            return mo({
                owner: i,
                debugName: () => {
                    const n = fo(s);
                    if (n !== void 0) return n;
                    const o = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(s.toString());
                    if (o) return `${this.debugName}.${o[2]}`;
                    if (!i) return `${this.debugName} (mapped)`
                },
                debugReferenceFn: s
            }, n => s(this.read(n), n))
        }
        flatten() {
            return mo({
                owner: void 0,
                debugName: () => `${this.debugName} (flattened)`
            }, e => this.read(e).read(e))
        }
        recomputeInitiallyAndOnChange(e, t) {
            return e.add(Hc(this, t)), this
        }
        keepObserved(e) {
            return e.add(zc(this)), this
        }
        get debugValue() {
            return this.get()
        }
    },
    vo = class extends $c {
        constructor() {
            super(), this._observers = new Set, Ce()?.handleObservableCreated(this)
        }
        addObserver(e) {
            const t = this._observers.size;
            this._observers.add(e), t === 0 && this.onFirstObserverAdded(), t !== this._observers.size && Ce()?.handleOnListenerCountChanged(this, this._observers.size)
        }
        removeObserver(e) {
            const t = this._observers.delete(e);
            t && this._observers.size === 0 && this.onLastObserverRemoved(), t && Ce()?.handleOnListenerCountChanged(this, this._observers.size)
        }
        onFirstObserverAdded() {}
        onLastObserverRemoved() {}
        log() {
            const e = !!Ce();
            return Op(this), e || Ce()?.handleObservableCreated(this), this
        }
        debugGetObservers() {
            return this._observers
        }
    };

function Uc(e, t) {
    const i = new Wc(e, t);
    try {
        e(i)
    } finally {
        i.finish()
    }
}

function zp(e, t, i) {
    e ? t(e) : Uc(t, i)
}
var Wc = class {
    constructor(e, t) {
        this._fn = e, this._getDebugName = t, this._updatingObservers = [], Ce()?.handleBeginTransaction(this)
    }
    getDebugName() {
        return this._getDebugName ? this._getDebugName() : fo(this._fn)
    }
    updateObserver(e, t) {
        if (!this._updatingObservers) {
            Vc("Transaction already finished!"), Uc(i => {
                i.updateObserver(e, t)
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
            Vc("transaction.finish() has already been called!");
            return
        }
        for (let t = 0; t < e.length; t++) {
            const {
                observer: i,
                observable: s
            } = e[t];
            i.endUpdate(s)
        }
        this._updatingObservers = null, Ce()?.handleEndTransaction(this)
    }
    debugGetUpdatingObservers() {
        return this._updatingObservers
    }
};

function Vc(e) {
    const t = new Error("BugIndicatingErrorRecovery: " + e);
    ft(t), console.error("recovered from an error that indicates a bug", t)
}

function Kc(e, t) {
    let i;
    return typeof e == "string" ? i = new zt(void 0, e, void 0) : i = new zt(e, void 0, void 0), new yo(i, t, Ui)
}
var yo = class extends vo {
    constructor(e, t, i) {
        super(), this._debugNameData = e, this._equalityComparator = i, this._value = t, Ce()?.handleObservableUpdated(this, {
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
    set(e, t, i) {
        if (i === void 0 && this._equalityComparator(this._value, e)) return;
        let s;
        t || (t = s = new Wc(() => {}, () => `Setting ${this.debugName}`));
        try {
            const n = this._value;
            this._setValue(e), Ce()?.handleObservableUpdated(this, {
                oldValue: n,
                newValue: e,
                change: i,
                didChange: !0,
                hadValue: !0
            });
            for (const r of this._observers) t.updateObserver(r, this), r.handleChange(this, i)
        } finally {
            s && s.finish()
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

function Rn(e) {
    return new bo(new zt(void 0, void 0, e), e, void 0, void 0)
}
var bo = class {
    constructor(e, t, i, s) {
        this._debugNameData = e, this._runFn = t, this.createChangeSummary = i, this._handleChange = s, this._state = 2, this._updateCount = 0, this._disposed = !1, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._isRunning = !1, this._changeSummary = this.createChangeSummary?.(), Ce()?.handleAutorunCreated(this), this._run(), Li(this)
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)"
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = !0;
            for (const e of this._dependencies) e.removeObserver(this);
            this._dependencies.clear(), Ce()?.handleAutorunDisposed(this), Ri(this)
        }
    }
    _run() {
        const e = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e, this._state = 3;
        try {
            if (!this._disposed) {
                Ce()?.handleAutorunStarted(this);
                const t = this._changeSummary;
                try {
                    this._changeSummary = this.createChangeSummary?.(), this._isRunning = !0, this._runFn(this, t)
                } catch (i) {
                    ln(i)
                } finally {
                    this._isRunning = !1
                }
            }
        } finally {
            this._disposed || Ce()?.handleAutorunFinished(this);
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
        El(() => this._updateCount >= 0)
    }
    handlePossibleChange(e) {
        this._state === 3 && this._isDependency(e) && (this._state = 1)
    }
    handleChange(e, t) {
        if (this._isDependency(e)) {
            Ce()?.handleAutorunDependencyChanged(this, e, t);
            try {
                (this._handleChange ? this._handleChange({
                    changedObservable: e,
                    change: t,
                    didChange: s => s === e
                }, this._changeSummary) : !0) && (this._state = 2)
            } catch (i) {
                ln(i)
            }
        }
    }
    _isDependency(e) {
        return this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)
    }
    readObservable(e) {
        if (!this._isRunning) throw new et("The reader object cannot be used outside its compute function!");
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
    e.Observer = bo
})(Rn || (Rn = {}));

function Mn(e, t) {
    return t !== void 0 ? new it(new zt(e, void 0, t), t, void 0, void 0, void 0, Ui) : new it(new zt(void 0, void 0, e), e, void 0, void 0, void 0, Ui)
}

function _o(e, t) {
    return new it(new zt(e.owner, e.debugName, e.debugReferenceFn), t, void 0, void 0, e.onLastObserverRemoved, e.equalsFn ?? Ui)
}
Hp(_o);

function $p(e, t) {
    let i, s;
    t === void 0 ? (i = e, s = void 0) : (s = e, i = t);
    let n = new Y;
    return new it(new zt(s, void 0, i), r => (n.isDisposed ? n = new Y : n.clear(), i(r, n)), void 0, void 0, () => n.dispose(), Ui)
}
var it = class extends vo {
    constructor(e, t, i, s, n = void 0, r) {
        super(), this._debugNameData = e, this._computeFn = t, this.createChangeSummary = i, this._handleChange = s, this._handleLastObserverRemoved = n, this._equalityComparator = r, this._state = 0, this._value = void 0, this._updateCount = 0, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._changeSummary = void 0, this._isUpdating = !1, this._isComputing = !1, this._removedObserverToCallEndUpdateOn = null, this._isReaderValid = !1, this._changeSummary = this.createChangeSummary?.()
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)"
    }
    onLastObserverRemoved() {
        this._state = 0, this._value = void 0, Ce()?.handleDerivedCleared(this);
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
            i = this._value;
        this._state = 3;
        let s = !1;
        this._isComputing = !0;
        try {
            const n = this._changeSummary;
            this._changeSummary = this.createChangeSummary?.();
            try {
                this._isReaderValid = !0, this._value = this._computeFn(this, n)
            } finally {
                this._isReaderValid = !1;
                for (const r of this._dependenciesToBeRemoved) r.removeObserver(this);
                this._dependenciesToBeRemoved.clear()
            }
            s = t && !this._equalityComparator(i, this._value), Ce()?.handleObservableUpdated(this, {
                oldValue: i,
                newValue: this._value,
                change: void 0,
                didChange: s,
                hadValue: t
            })
        } catch (n) {
            ln(n)
        }
        if (this._isComputing = !1, s)
            for (const n of this._observers) n.handleChange(this, void 0)
    }
    toString() {
        return `LazyDerived<${this.debugName}>`
    }
    beginUpdate(e) {
        if (this._isUpdating) throw new et("Cyclic deriveds are not supported yet!");
        this._updateCount++, this._isUpdating = !0;
        try {
            const t = this._updateCount === 1;
            if (this._state === 3 && (this._state = 1, !t))
                for (const i of this._observers) i.handlePossibleChange(this);
            if (t)
                for (const i of this._observers) i.beginUpdate(this)
        } finally {
            this._isUpdating = !1
        }
    }
    endUpdate(e) {
        if (this._updateCount--, this._updateCount === 0) {
            const t = [...this._observers];
            for (const i of t) i.endUpdate(this);
            if (this._removedObserverToCallEndUpdateOn) {
                const i = [...this._removedObserverToCallEndUpdateOn];
                this._removedObserverToCallEndUpdateOn = null;
                for (const s of i) s.endUpdate(this)
            }
        }
        El(() => this._updateCount >= 0)
    }
    handlePossibleChange(e) {
        if (this._state === 3 && this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
            this._state = 1;
            for (const t of this._observers) t.handlePossibleChange(this)
        }
    }
    handleChange(e, t) {
        if (this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
            Ce()?.handleDerivedDependencyChanged(this, e, t);
            let i = !1;
            try {
                i = this._handleChange ? this._handleChange({
                    changedObservable: e,
                    change: t,
                    didChange: n => n === e
                }, this._changeSummary) : !0
            } catch (n) {
                ln(n)
            }
            const s = this._state === 3;
            if (i && (this._state === 1 || s) && (this._state = 2, s))
                for (const n of this._observers) n.handlePossibleChange(this)
        }
    }
    readObservable(e) {
        if (!this._isReaderValid) throw new et("The reader object cannot be used outside its compute function!");
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

function Gc(e) {
    return new Up(e)
}
var Up = class extends $c {
    constructor(e) {
        super(), this.value = e
    }
    get debugName() {
        return this.toString()
    }
    get() {
        return this.value
    }
    addObserver(e) {}
    removeObserver(e) {}
    log() {
        return this
    }
    toString() {
        return `Const: ${this.value}`
    }
};

function qc(...e) {
    let t, i, s;
    return e.length === 3 ? [t, i, s] = e : [i, s] = e, new ai(new zt(t, void 0, s), i, s, () => ai.globalTransaction, Ui)
}
var ai = class extends vo {
    constructor(e, t, i, s, n) {
        super(), this._debugNameData = e, this.event = t, this._getValue = i, this._getTransaction = s, this._equalityComparator = n, this._hasValue = !1, this.handleEvent = r => {
            const o = this._getValue(r),
                a = this._value,
                c = !this._hasValue || !this._equalityComparator(a, o);
            let h = !1;
            c && (this._value = o, this._hasValue && (h = !0, zp(this._getTransaction(), d => {
                Ce()?.handleObservableUpdated(this, {
                    oldValue: a,
                    newValue: o,
                    change: void 0,
                    didChange: c,
                    hadValue: this._hasValue
                });
                for (const u of this._observers) d.updateObserver(u, this), u.handleChange(this, void 0)
            }, () => {
                const d = this.getDebugName();
                return "Event fired" + (d ? `: ${d}` : "")
            })), this._hasValue = !0), h || Ce()?.handleObservableUpdated(this, {
                oldValue: a,
                newValue: o,
                change: void 0,
                didChange: c,
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
    e.Observer = ai;

    function t(i, s) {
        let n = !1;
        ai.globalTransaction === void 0 && (ai.globalTransaction = i, n = !0);
        try {
            s()
        } finally {
            n && (ai.globalTransaction = void 0)
        }
    }
    e.batchEventsGlobally = t
})(qc || (qc = {}));

function Wp(e) {
    const t = new jc(!1, void 0);
    return e.addObserver(t), de(() => {
        e.removeObserver(t)
    })
}
Bp(Wp);

function Vp(e, t) {
    const i = new jc(!0, t);
    e.addObserver(i);
    try {
        i.beginUpdate(e)
    } finally {
        i.endUpdate(e)
    }
    return de(() => {
        e.removeObserver(i)
    })
}
Fp(Vp);
var jc = class {
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
    Pn;

function Kp(e) {
    Pn || (Pn = new Yc, po(Pn)), Pn.addFilteredObj(e)
}
var Yc = class {
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
        return Gp([Wi(Yp("|  ", this.indentation)), e])
    }
    formatInfo(e) {
        return e.hadValue ? e.didChange ? [Wi(" "), st(At(e.oldValue, 70), {
            color: "red",
            strikeThrough: !0
        }), Wi(" "), st(At(e.newValue, 60), {
            color: "green"
        })] : [Wi(" (unchanged)")] : [Wi(" "), st(At(e.newValue, 60), {
            color: "green"
        }), Wi(" (initial)")]
    }
    handleObservableCreated(e) {
        if (e instanceof it) {
            const t = e;
            if (this.changedObservablesSets.set(t, new Set), !1) {
                const s = [];
                t.__debugUpdating = s;
                const n = t.beginUpdate;
                t.beginUpdate = o => (s.push(o), n.apply(t, [o]));
                const r = t.endUpdate;
                t.endUpdate = o => {
                    const a = s.indexOf(o);
                    return a === -1 && console.error("endUpdate called without beginUpdate", t.debugName, o.debugName), s.splice(a, 1), r.apply(t, [o])
                }
            }
        }
    }
    handleOnListenerCountChanged(e, t) {}
    handleObservableUpdated(e, t) {
        if (this._isIncluded(e)) {
            if (e instanceof it) {
                this._handleDerivedRecomputed(e, t);
                return
            }
            console.log(...this.textToConsoleArgs([Vi("observable value changed"), st(e.debugName, {
                color: "BlueViolet"
            }), ...this.formatInfo(t)]))
        }
    }
    formatChanges(e) {
        if (e.size !== 0) return st(" (changed deps: " + [...e].map(t => t.debugName).join(", ") + ")", {
            color: "gray"
        })
    }
    handleDerivedDependencyChanged(e, t, i) {
        this._isIncluded(e) && this.changedObservablesSets.get(e)?.add(t)
    }
    _handleDerivedRecomputed(e, t) {
        if (!this._isIncluded(e)) return;
        const i = this.changedObservablesSets.get(e);
        i && (console.log(...this.textToConsoleArgs([Vi("derived recomputed"), st(e.debugName, {
            color: "BlueViolet"
        }), ...this.formatInfo(t), this.formatChanges(i), {
            data: [{
                fn: e._debugNameData.referenceFn ?? e._computeFn
            }]
        }])), i.clear())
    }
    handleDerivedCleared(e) {
        this._isIncluded(e) && console.log(...this.textToConsoleArgs([Vi("derived cleared"), st(e.debugName, {
            color: "BlueViolet"
        })]))
    }
    handleFromEventObservableTriggered(e, t) {
        this._isIncluded(e) && console.log(...this.textToConsoleArgs([Vi("observable from event triggered"), st(e.debugName, {
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
    handleAutorunDependencyChanged(e, t, i) {
        this._isIncluded(e) && this.changedObservablesSets.get(e).add(t)
    }
    handleAutorunStarted(e) {
        const t = this.changedObservablesSets.get(e);
        t && (this._isIncluded(e) && console.log(...this.textToConsoleArgs([Vi("autorun"), st(e.debugName, {
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
        t === void 0 && (t = ""), this._isIncluded(e) && console.log(...this.textToConsoleArgs([Vi("transaction"), st(t, {
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

function Gp(e) {
    const t = new Array,
        i = [];
    let s = "";

    function n(o) {
        if ("length" in o)
            for (const a of o) a && n(a);
        else "text" in o ? (s += `%c${o.text}`, t.push(o.style), o.data && i.push(...o.data)) : "data" in o && i.push(...o.data)
    }
    n(e);
    const r = [s, ...t];
    return r.push(...i), r
}

function Wi(e) {
    return st(e, {
        color: "black"
    })
}

function Vi(e) {
    return st(Xp(`${e}: `, 10), {
        color: "black",
        bold: !0
    })
}

function st(e, t = {
    color: "black"
}) {
    function i(n) {
        return Object.entries(n).reduce((r, [o, a]) => `${r}${o}:${a};`, "")
    }
    const s = {
        color: t.color
    };
    return t.strikeThrough && (s["text-decoration"] = "line-through"), t.bold && (s["font-weight"] = "bold"), {
        text: e,
        style: i(s)
    }
}

function At(e, t) {
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
            return e === null ? "null" : Array.isArray(e) ? qp(e, t) : jp(e, t);
        case "symbol":
            return e.toString();
        case "function":
            return `[[Function${e.name?" "+e.name:""}]]`;
        default:
            return "" + e
    }
}

function qp(e, t) {
    let i = "[ ",
        s = !0;
    for (const n of e) {
        if (s || (i += ", "), i.length - 5 > t) {
            i += "...";
            break
        }
        s = !1, i += `${At(n,t-i.length)}`
    }
    return i += " ]", i
}

function jp(e, t) {
    if (typeof e.toString == "function" && e.toString !== Object.prototype.toString) {
        const r = e.toString();
        return r.length <= t ? r : r.substring(0, t - 3) + "..."
    }
    const i = Fc(e);
    let s = i ? i + "(" : "{ ",
        n = !0;
    for (const [r, o] of Object.entries(e)) {
        if (n || (s += ", "), s.length - 5 > t) {
            s += "...";
            break
        }
        n = !1, s += `${r}: ${At(o,t-s.length)}`
    }
    return s += i ? ")" : " }", s
}

function Yp(e, t) {
    let i = "";
    for (let s = 1; s <= t; s++) i += e;
    return i
}

function Xp(e, t) {
    for (; e.length < t;) e += " ";
    return e
}
var Zp = class Ia {
    constructor(t, i) {
        this._channelFactory = t, this._getHandler = i, this._channel = this._channelFactory({
            handleNotification: r => {
                const o = r,
                    a = this._getHandler().notifications[o[0]];
                if (!a) throw new Error(`Unknown notification "${o[0]}"!`);
                a(...o[1])
            },
            handleRequest: r => {
                const o = r;
                try {
                    return {
                        type: "result",
                        value: this._getHandler().requests[o[0]](...o[1])
                    }
                } catch (a) {
                    return {
                        type: "error",
                        value: a
                    }
                }
            }
        });
        const s = new Proxy({}, {
                get: (r, o) => async (...a) => {
                    const c = await this._channel.sendRequest([o, a]);
                    if (c.type === "error") throw c.value;
                    return c.value
                }
            }),
            n = new Proxy({}, {
                get: (r, o) => (...a) => {
                    this._channel.sendNotification([o, a])
                }
            });
        this.api = {
            notifications: n,
            requests: s
        }
    }
    static createHost(t, i) {
        return new Ia(t, i)
    }
    static createClient(t, i) {
        return new Ia(t, i)
    }
};

function Qp(e, t) {
    const i = globalThis;
    let s = [],
        n;
    const {
        channel: r,
        handler: o
    } = Jp({
        sendNotification: c => {
            n ? n.sendNotification(c) : s.push(c)
        }
    });
    let a;
    return (i.$$debugValueEditor_debugChannels ?? (i.$$debugValueEditor_debugChannels = {}))[e] = c => {
        a = t(), n = c;
        for (const h of s) c.sendNotification(h);
        return s = [], o
    }, Zp.createClient(r, () => {
        if (!a) throw new Error("Not supported");
        return a
    })
}

function Jp(e) {
    let t;
    return {
        channel: s => (t = s, {
            sendNotification: n => {
                e.sendNotification(n)
            },
            sendRequest: n => {
                throw new Error("not supported")
            }
        }),
        handler: {
            handleRequest: s => s.type === "notification" ? t?.handleNotification(s.data) : t?.handleRequest(s.data)
        }
    }
}

function Xc(e, t) {
    const i = e.split(`
`);
    let s = -1;
    for (const n of i.slice(1)) {
        if (s++, t && t.test(n)) continue;
        const r = e0(n);
        if (r) return r
    }
}

function e0(e) {
    const t = e.match(/\((.*):(\d+):(\d+)\)/);
    if (t) return {
        fileName: t[1],
        line: parseInt(t[2]),
        column: parseInt(t[3]),
        id: e
    };
    const i = e.match(/at ([^\(\)]*):(\d+):(\d+)/);
    if (i) return {
        fileName: i[1],
        line: parseInt(i[2]),
        column: parseInt(i[3]),
        id: e
    }
}
var t0 = class {
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

function Zc(e, t) {
    for (const i in t) e[i] && typeof e[i] == "object" && t[i] && typeof t[i] == "object" ? Zc(e[i], t[i]) : e[i] = t[i]
}

function Qc(e, t) {
    for (const i in t) t[i] === null ? delete e[i] : e[i] && typeof e[i] == "object" && t[i] && typeof t[i] == "object" ? Qc(e[i], t[i]) : e[i] = t[i]
}
var Jc = class Qs {
    constructor() {
        this._declarationId = 0, this._instanceId = 0, this._declarations = new Map, this._instanceInfos = new WeakMap, this._aliveInstances = new Map, this._activeTransactions = new Set, this._channel = Qp("observableDevTools", () => ({
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
                    for (const i of this._declarations.values()) t[i.id] = i;
                    return {
                        decls: t
                    }
                },
                getSummarizedInstances: () => null,
                getObservableValueInfo: t => ({
                    observers: [...this._aliveInstances.get(t).debugGetObservers()].map(s => this._formatObserver(s)).filter(fs)
                }),
                getDerivedInfo: t => {
                    const i = this._aliveInstances.get(t);
                    return {
                        dependencies: [...i.debugGetState().dependencies].map(s => this._formatObservable(s)).filter(fs),
                        observers: [...i.debugGetObservers()].map(s => this._formatObserver(s)).filter(fs)
                    }
                },
                getAutorunInfo: t => ({
                    dependencies: [...this._aliveInstances.get(t).debugGetState().dependencies].map(s => this._formatObservable(s)).filter(fs)
                }),
                getTransactionState: () => this.getTransactionState(),
                setValue: (t, i) => {
                    const s = this._aliveInstances.get(t);
                    if (s instanceof it) s.debugSetValue(i);
                    else if (s instanceof yo) s.debugSetValue(i);
                    else if (s instanceof ai) s.debugSetValue(i);
                    else throw new et("Observable is not supported");
                    const n = [...s.debugGetObservers()];
                    for (const r of n) r.beginUpdate(s);
                    for (const r of n) r.handleChange(s, void 0);
                    for (const r of n) r.endUpdate(s)
                },
                getValue: t => {
                    const i = this._aliveInstances.get(t);
                    if (i instanceof it) return At(i.debugGetState().value, 200);
                    if (i instanceof yo) return At(i.debugGetState().value, 200)
                }
            }
        })), this._pendingChanges = null, this._changeThrottler = new t0, this._fullState = {}, this._flushUpdates = () => {
            this._pendingChanges !== null && (this._channel.api.notifications.handleChange(this._pendingChanges, !1), this._pendingChanges = null)
        }
    }
    static getInstance() {
        return Qs._instance === void 0 && (Qs._instance = new Qs), Qs._instance
    }
    getTransactionState() {
        const t = [],
            i = [...this._activeTransactions];
        if (i.length === 0) return;
        const s = i.flatMap(r => r.debugGetUpdatingObservers() ?? []).map(r => r.observer),
            n = new Set;
        for (; s.length > 0;) {
            const r = s.shift();
            if (n.has(r)) continue;
            n.add(r);
            const o = this._getInfo(r, a => {
                n.has(a) || s.push(a)
            });
            o && t.push(o)
        }
        return {
            names: i.map(r => r.getDebugName() ?? "tx"),
            affected: t
        }
    }
    _getObservableInfo(t) {
        const i = this._instanceInfos.get(t);
        if (!i) {
            ft(new et("No info found"));
            return
        }
        return i
    }
    _getAutorunInfo(t) {
        const i = this._instanceInfos.get(t);
        if (!i) {
            ft(new et("No info found"));
            return
        }
        return i
    }
    _getInfo(t, i) {
        if (t instanceof it) {
            const s = [...t.debugGetObservers()];
            for (const c of s) i(c);
            const n = this._getObservableInfo(t);
            if (!n) return;
            const r = t.debugGetState(),
                o = {
                    name: t.debugName,
                    instanceId: n.instanceId,
                    updateCount: r.updateCount
                },
                a = [...n.changedObservables].map(c => this._instanceInfos.get(c)?.instanceId).filter(fs);
            if (r.isComputing) return {
                ...o,
                type: "observable/derived",
                state: "updating",
                changedDependencies: a,
                initialComputation: !1
            };
            switch (r.state) {
                case 0:
                    return {
                        ...o, type: "observable/derived", state: "noValue"
                    };
                case 3:
                    return {
                        ...o, type: "observable/derived", state: "upToDate"
                    };
                case 2:
                    return {
                        ...o, type: "observable/derived", state: "stale", changedDependencies: a
                    };
                case 1:
                    return {
                        ...o, type: "observable/derived", state: "possiblyStale"
                    }
            }
        } else if (t instanceof bo) {
            const s = this._getAutorunInfo(t);
            if (!s) return;
            const n = {
                    name: t.debugName,
                    instanceId: s.instanceId,
                    updateCount: s.updateCount
                },
                r = [...s.changedObservables].map(o => this._instanceInfos.get(o).instanceId);
            if (t.debugGetState().isRunning) return {
                ...n,
                type: "autorun",
                state: "updating",
                changedDependencies: r
            };
            switch (t.debugGetState().state) {
                case 3:
                    return {
                        ...n, type: "autorun", state: "upToDate"
                    };
                case 2:
                    return {
                        ...n, type: "autorun", state: "stale", changedDependencies: r
                    };
                case 1:
                    return {
                        ...n, type: "autorun", state: "possiblyStale"
                    }
            }
        }
    }
    _formatObservable(t) {
        const i = this._getObservableInfo(t);
        if (i) return {
            name: t.debugName,
            instanceId: i.instanceId
        }
    }
    _formatObserver(t) {
        if (t instanceof it) return {
            name: t.toString(),
            instanceId: this._getObservableInfo(t)?.instanceId
        };
        const i = this._getAutorunInfo(t);
        if (i) return {
            name: t.toString(),
            instanceId: i.instanceId
        }
    }
    _handleChange(t) {
        Qc(this._fullState, t), this._pendingChanges === null ? this._pendingChanges = t : Zc(this._pendingChanges, t), this._changeThrottler.throttle(this._flushUpdates, 10)
    }
    _getDeclarationId(t) {
        let i = !0,
            s;
        const n = Error;
        for (;;) {
            const o = n.stackTraceLimit;
            n.stackTraceLimit = i ? 6 : 20;
            const a = new Error().stack;
            n.stackTraceLimit = o;
            let c = Xc(a, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
            if (!i && !c && (c = Xc(a, /[/\\]observableInternal[/\\]|\.observe/)), c) {
                s = c;
                break
            }
            if (!i) {
                console.error("Could not find location for declaration", new Error().stack), s = {
                    fileName: "unknown",
                    line: 0,
                    column: 0,
                    id: "unknown"
                };
                break
            }
            i = !1
        }
        let r = this._declarations.get(s.id);
        return r === void 0 && (r = {
            id: this._declarationId++,
            type: t,
            url: s.fileName,
            line: s.line,
            column: s.column
        }, this._declarations.set(s.id, r), this._handleChange({
            decls: {
                [r.id]: r
            }
        })), r.id
    }
    handleObservableCreated(t) {
        const s = {
            declarationId: this._getDeclarationId("observable/value"),
            instanceId: this._instanceId++,
            listenerCount: 0,
            lastValue: void 0,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(t, s)
    }
    handleOnListenerCountChanged(t, i) {
        const s = this._getObservableInfo(t);
        if (s) {
            if (s.listenerCount === 0 && i > 0) {
                const n = t instanceof it ? "observable/derived" : "observable/value";
                this._aliveInstances.set(s.instanceId, t), this._handleChange({
                    instances: {
                        [s.instanceId]: {
                            instanceId: s.instanceId,
                            declarationId: s.declarationId,
                            formattedValue: s.lastValue,
                            type: n,
                            name: t.debugName
                        }
                    }
                })
            } else s.listenerCount > 0 && i === 0 && (this._handleChange({
                instances: {
                    [s.instanceId]: null
                }
            }), this._aliveInstances.delete(s.instanceId));
            s.listenerCount = i
        }
    }
    handleObservableUpdated(t, i) {
        if (t instanceof it) {
            this._handleDerivedRecomputed(t, i);
            return
        }
        const s = this._getObservableInfo(t);
        s && i.didChange && (s.lastValue = At(i.newValue, 30), s.listenerCount > 0 && this._handleChange({
            instances: {
                [s.instanceId]: {
                    formattedValue: s.lastValue
                }
            }
        }))
    }
    handleAutorunCreated(t) {
        const s = {
            declarationId: this._getDeclarationId("autorun"),
            instanceId: this._instanceId++,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(t, s), this._aliveInstances.set(s.instanceId, t), s && this._handleChange({
            instances: {
                [s.instanceId]: {
                    instanceId: s.instanceId,
                    declarationId: s.declarationId,
                    runCount: 0,
                    type: "autorun",
                    name: t.debugName
                }
            }
        })
    }
    handleAutorunDisposed(t) {
        const i = this._getAutorunInfo(t);
        i && (this._handleChange({
            instances: {
                [i.instanceId]: null
            }
        }), this._instanceInfos.delete(t), this._aliveInstances.delete(i.instanceId))
    }
    handleAutorunDependencyChanged(t, i, s) {
        const n = this._getAutorunInfo(t);
        n && n.changedObservables.add(i)
    }
    handleAutorunStarted(t) {}
    handleAutorunFinished(t) {
        const i = this._getAutorunInfo(t);
        i && (i.changedObservables.clear(), i.updateCount++, this._handleChange({
            instances: {
                [i.instanceId]: {
                    runCount: i.updateCount
                }
            }
        }))
    }
    handleDerivedDependencyChanged(t, i, s) {
        const n = this._getObservableInfo(t);
        n && n.changedObservables.add(i)
    }
    _handleDerivedRecomputed(t, i) {
        const s = this._getObservableInfo(t);
        if (!s) return;
        const n = At(i.newValue, 30);
        s.updateCount++, s.changedObservables.clear(), s.lastValue = n, s.listenerCount > 0 && this._handleChange({
            instances: {
                [s.instanceId]: {
                    formattedValue: n,
                    recomputationCount: s.updateCount
                }
            }
        })
    }
    handleDerivedCleared(t) {
        const i = this._getObservableInfo(t);
        i && (i.lastValue = void 0, i.changedObservables.clear(), i.listenerCount > 0 && this._handleChange({
            instances: {
                [i.instanceId]: {
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
Jc._instance = void 0;
var i0 = Jc;
Pp(Kp);
var s0 = !1;
s0 && po(new Yc), Ur && Ur.VSCODE_DEV_DEBUG && po(i0.getInstance());
var n0 = new Map;

function Es(e = T.document.head, t, i) {
    const s = document.createElement("style");
    if (s.type = "text/css", s.media = "screen", t?.(s), e.appendChild(s), i && i.add(de(() => s.remove())), e === T.document.head) {
        const n = new Set;
        n0.set(s, n);
        for (const {
                window: r,
                disposables: o
            }
            of So()) {
            if (r === T) continue;
            const a = o.add(r0(s, n, r));
            i?.add(a)
        }
    }
    return s
}

function r0(e, t, i) {
    const s = new Y,
        n = e.cloneNode(!0);
    i.document.head.appendChild(n), s.add(de(() => n.remove()));
    for (const r of o0(e)) n.sheet?.insertRule(r.cssText, n.sheet?.cssRules.length);
    return s.add(S0.observe(e, s, {
        childList: !0
    })(() => {
        n.textContent = e.textContent
    })), t.add(n), s.add(de(() => t.delete(n))), s
}

function o0(e) {
    return e?.sheet?.rules ? e.sheet.rules : e?.sheet?.cssRules ? e.sheet.cssRules : []
}
var eh;
(e => {
    function t(n = void 0) {
        return (r, o, a) => {
            const c = o.class;
            delete o.class;
            const h = o.ref;
            delete o.ref;
            const d = o.obsRef;
            return delete o.obsRef, new c0(r, h, d, n, c, o, a)
        }
    }

    function i(n, r = void 0) {
        const o = t(r);
        return (a, c) => o(n, a, c)
    }
    e.div = i("div"), e.elem = t(void 0), e.svg = i("svg", "http://www.w3.org/2000/svg"), e.svgElem = t("http://www.w3.org/2000/svg");

    function s() {
        let n;
        const r = function(o) {
            n = o
        };
        return Object.defineProperty(r, "element", {
            get() {
                if (!n) throw new et("Make sure the ref is set before accessing the element. Maybe wrong initialization order?");
                return n
            }
        }), r
    }
    e.ref = s
})(eh || (eh = {}));
var a0 = class cu {
    constructor(t, i, s, n, r, o, a) {
        this._deriveds = [], this._element = n ? document.createElementNS(n, t) : document.createElement(t), i && i(this._element), s && this._deriveds.push($p((h, d) => {
            s(this), d.add({
                dispose: () => {
                    s(null)
                }
            })
        })), r && (nh(r) ? this._deriveds.push(Mn(this, h => {
            th(this._element, sh(r, h))
        })) : th(this._element, sh(r, void 0)));
        for (const [h, d] of Object.entries(o))
            if (h === "style")
                for (const [u, f] of Object.entries(d)) {
                    const p = wo(u);
                    li(f) ? this._deriveds.push(_o({
                        owner: this,
                        debugName: () => `set.style.${p}`
                    }, g => {
                        this._element.style.setProperty(p, rh(f.read(g)))
                    })) : this._element.style.setProperty(p, rh(f))
                } else h === "tabIndex" ? li(d) ? this._deriveds.push(Mn(this, u => {
                    this._element.tabIndex = d.read(u)
                })) : this._element.tabIndex = d : h.startsWith("on") ? this._element[h] = d : li(d) ? this._deriveds.push(_o({
                    owner: this,
                    debugName: () => `set.${h}`
                }, u => {
                    ah(this._element, h, d.read(u))
                })) : ah(this._element, h, d);
        if (a) {
            let h = function(u, f) {
                return li(f) ? h(u, f.read(u)) : Array.isArray(f) ? f.flatMap(p => h(u, p)) : f instanceof cu ? (u && f.readEffect(u), [f._element]) : f ? [f] : []
            };
            var c = h;
            const d = Mn(this, u => {
                this._element.replaceChildren(...h(u, a))
            });
            this._deriveds.push(d), oh(a) || d.get()
        }
    }
    readEffect(t) {
        for (const i of this._deriveds) i.read(t)
    }
    keepUpdated(t) {
        return Mn(i => {
            this.readEffect(i)
        }).recomputeInitiallyAndOnChange(t), this
    }
    toDisposableLiveElement() {
        const t = new Y;
        return this.keepUpdated(t), new l0(this._element, t)
    }
};

function th(e, t) {
    gh(e) ? e.setAttribute("class", t) : e.className = t
}

function ih(e, t, i) {
    if (li(e)) {
        i(e.read(t));
        return
    }
    if (Array.isArray(e)) {
        for (const s of e) ih(s, t, i);
        return
    }
    i(e)
}

function sh(e, t) {
    let i = "";
    return ih(e, t, s => {
        s && (i.length === 0 ? i = s : i += " " + s)
    }), i
}

function nh(e) {
    return li(e) ? !0 : Array.isArray(e) ? e.some(t => nh(t)) : !1
}

function rh(e) {
    return typeof e == "number" ? e + "px" : e
}

function oh(e) {
    return li(e) ? !0 : Array.isArray(e) ? e.some(t => oh(t)) : !1
}
var l0 = class {
        constructor(e, t) {
            this.element = e, this._disposable = t
        }
        dispose() {
            this._disposable.dispose()
        }
    },
    c0 = class extends a0 {
        constructor() {
            super(...arguments), this._isHovered = void 0, this._didMouseMoveDuringHover = void 0
        }
        get element() {
            return this._element
        }
        get isHovered() {
            if (!this._isHovered) {
                const e = Kc("hovered", !1);
                this._element.addEventListener("mouseenter", t => e.set(!0, void 0)), this._element.addEventListener("mouseleave", t => e.set(!1, void 0)), this._isHovered = e
            }
            return this._isHovered
        }
        get didMouseMoveDuringHover() {
            if (!this._didMouseMoveDuringHover) {
                let e = !1;
                const t = Kc("didMouseMoveDuringHover", !1);
                this._element.addEventListener("mouseenter", i => {
                    e = !0
                }), this._element.addEventListener("mousemove", i => {
                    e && t.set(!0, void 0)
                }), this._element.addEventListener("mouseleave", i => {
                    e = !1, t.set(!1, void 0)
                }), this._didMouseMoveDuringHover = t
            }
            return this._didMouseMoveDuringHover
        }
    };

function ah(e, t, i) {
    i == null ? e.removeAttribute(wo(t)) : e.setAttribute(wo(t), String(i))
}

function wo(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function li(e) {
    return e && typeof e == "object" && e.read !== void 0 && e.reportChanges !== void 0
}
var {
    registerWindow: Z5,
    getWindow: re,
    getDocument: h0,
    getWindows: So,
    getWindowsCount: d0,
    getWindowId: lh,
    getWindowById: Q5,
    hasWindow: J5,
    onDidRegisterWindow: u0,
    onWillUnregisterWindow: ev,
    onDidUnregisterWindow: tv
} = (function() {
    const e = new Map;
    xu(T, 1);
    const t = {
        window: T,
        disposables: new Y
    };
    e.set(T.vscodeWindowId, t);
    const i = new L,
        s = new L,
        n = new L;

    function r(o, a) {
        return (typeof o == "number" ? e.get(o) : void 0) ?? (a ? t : void 0)
    }
    return {
        onDidRegisterWindow: i.event,
        onWillUnregisterWindow: n.event,
        onDidUnregisterWindow: s.event,
        registerWindow(o) {
            if (e.has(o.vscodeWindowId)) return q.None;
            const a = new Y,
                c = {
                    window: o,
                    disposables: a.add(new Y)
                };
            return e.set(o.vscodeWindowId, c), a.add(de(() => {
                e.delete(o.vscodeWindowId), s.fire(o)
            })), a.add(O(o, X.BEFORE_UNLOAD, () => {
                n.fire(o)
            })), i.fire(c), a
        },
        getWindows() {
            return e.values()
        },
        getWindowsCount() {
            return e.size
        },
        getWindowId(o) {
            return o.vscodeWindowId
        },
        hasWindow(o) {
            return e.has(o)
        },
        getWindowById: r,
        getWindow(o) {
            const a = o;
            if (a?.ownerDocument?.defaultView) return a.ownerDocument.defaultView.window;
            const c = o;
            return c?.view ? c.view.window : T
        },
        getDocument(o) {
            return re(o).document
        }
    }
})();

function ci(e) {
    for (; e.firstChild;) e.firstChild.remove()
}
var f0 = class {
    constructor(e, t, i, s) {
        this._node = e, this._type = t, this._handler = i, this._options = s || !1, this._node.addEventListener(this._type, this._handler, this._options)
    }
    dispose() {
        this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), this._node = null, this._handler = null)
    }
};

function O(e, t, i, s) {
    return new f0(e, t, i, s)
}

function p0(e, t) {
    return function(i) {
        return t(new ii(e, i))
    }
}

function g0(e) {
    return function(t) {
        return e(new Me(t))
    }
}
var On = function(t, i, s, n) {
        let r = s;
        return i === "click" || i === "mousedown" || i === "contextmenu" ? r = p0(re(t), s) : (i === "keydown" || i === "keypress" || i === "keyup") && (r = g0(s)), O(t, i, r, n)
    },
    m0, $t, v0 = class extends Yf {
        constructor(e) {
            super(), this.defaultTarget = e && re(e)
        }
        cancelAndSet(e, t, i) {
            return super.cancelAndSet(e, t, i ?? this.defaultTarget)
        }
    },
    Co = class {
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
                ft(e)
            }
        }
        static sort(e, t) {
            return t.priority - e.priority
        }
    };
(function() {
    const e = new Map,
        t = new Map,
        i = new Map,
        s = new Map,
        n = r => {
            i.set(r, !1);
            const o = e.get(r) ?? [];
            for (t.set(r, o), e.set(r, []), s.set(r, !0); o.length > 0;) o.sort(Co.sort), o.shift().execute();
            s.set(r, !1)
        };
    $t = (r, o, a = 0) => {
        const c = lh(r),
            h = new Co(o, a);
        let d = e.get(c);
        return d || (d = [], e.set(c, d)), d.push(h), i.get(c) || (i.set(c, !0), r.requestAnimationFrame(() => n(c))), h
    }, m0 = (r, o, a) => {
        const c = lh(r);
        if (s.get(c)) {
            const h = new Co(o, a);
            let d = t.get(c);
            return d || (d = [], t.set(c, d)), d.push(h), h
        } else return $t(r, o, a)
    }
})();

function ch(e) {
    return re(e).getComputedStyle(e, null)
}
var je = class Xe {
        static convertToPixels(t, i) {
            return parseFloat(i) || 0
        }
        static getDimension(t, i) {
            const s = ch(t),
                n = s ? s.getPropertyValue(i) : "0";
            return Xe.convertToPixels(t, n)
        }
        static getBorderLeftWidth(t) {
            return Xe.getDimension(t, "border-left-width")
        }
        static getBorderRightWidth(t) {
            return Xe.getDimension(t, "border-right-width")
        }
        static getBorderTopWidth(t) {
            return Xe.getDimension(t, "border-top-width")
        }
        static getBorderBottomWidth(t) {
            return Xe.getDimension(t, "border-bottom-width")
        }
        static getPaddingLeft(t) {
            return Xe.getDimension(t, "padding-left")
        }
        static getPaddingRight(t) {
            return Xe.getDimension(t, "padding-right")
        }
        static getPaddingTop(t) {
            return Xe.getDimension(t, "padding-top")
        }
        static getPaddingBottom(t) {
            return Xe.getDimension(t, "padding-bottom")
        }
        static getMarginLeft(t) {
            return Xe.getDimension(t, "margin-left")
        }
        static getMarginTop(t) {
            return Xe.getDimension(t, "margin-top")
        }
        static getMarginRight(t) {
            return Xe.getDimension(t, "margin-right")
        }
        static getMarginBottom(t) {
            return Xe.getDimension(t, "margin-bottom")
        }
    },
    hh = class cr {
        constructor(t, i) {
            this.width = t, this.height = i
        }
        with(t = this.width, i = this.height) {
            return t !== this.width || i !== this.height ? new cr(t, i) : this
        }
        static is(t) {
            return typeof t == "object" && typeof t.height == "number" && typeof t.width == "number"
        }
        static lift(t) {
            return t instanceof cr ? t : new cr(t.width, t.height)
        }
        static equals(t, i) {
            return t === i ? !0 : !t || !i ? !1 : t.width === i.width && t.height === i.height
        }
    };
hh.None = new hh(0, 0);

function y0(e) {
    let t = e.offsetParent,
        i = e.offsetTop,
        s = e.offsetLeft;
    for (;
        (e = e.parentNode) !== null && e !== e.ownerDocument.body && e !== e.ownerDocument.documentElement;) {
        i -= e.scrollTop;
        const n = fh(e) ? null : ch(e);
        n && (s -= n.direction !== "rtl" ? e.scrollLeft : -e.scrollLeft), e === t && (s += je.getBorderLeftWidth(e), i += je.getBorderTopWidth(e), i += e.offsetTop, s += e.offsetLeft, t = e.offsetParent)
    }
    return {
        left: s,
        top: i
    }
}

function dh(e) {
    const t = e.getBoundingClientRect(),
        i = re(e);
    return {
        left: t.left + i.scrollX,
        top: t.top + i.scrollY,
        width: t.width,
        height: t.height
    }
}

function Do(e) {
    const t = je.getMarginLeft(e) + je.getMarginRight(e);
    return e.offsetWidth + t
}

function Eo(e) {
    const t = je.getBorderLeftWidth(e) + je.getBorderRightWidth(e),
        i = je.getPaddingLeft(e) + je.getPaddingRight(e);
    return e.offsetWidth - t - i
}

function b0(e) {
    const t = je.getBorderTopWidth(e) + je.getBorderBottomWidth(e),
        i = je.getPaddingTop(e) + je.getPaddingBottom(e);
    return e.offsetHeight - t - i
}

function uh(e) {
    const t = je.getMarginTop(e) + je.getMarginBottom(e);
    return e.offsetHeight + t
}

function Ki(e, t) {
    return !!t?.contains(e)
}

function _0(e, t, i) {
    for (; e && e.nodeType === e.ELEMENT_NODE;) {
        if (e.classList.contains(t)) return e;
        if (i) {
            if (typeof i == "string") {
                if (e.classList.contains(i)) return null
            } else if (e === i) return null
        }
        e = e.parentNode
    }
    return null
}

function ko(e, t, i) {
    return !!_0(e, t, i)
}

function fh(e) {
    return e && !!e.host && !!e.mode
}

function w0(e) {
    for (; e.parentNode;) {
        if (e === e.ownerDocument?.body) return null;
        e = e.parentNode
    }
    return fh(e) ? e : null
}

function Gi() {
    let e = ph().activeElement;
    for (; e?.shadowRoot;) e = e.shadowRoot.activeElement;
    return e
}

function ks(e) {
    return Gi() === e
}

function ph() {
    return d0() <= 1 ? T.document : Array.from(So()).map(({
        window: t
    }) => t.document).find(t => t.hasFocus()) ?? T.document
}

function To() {
    return ph().defaultView?.window ?? T
}
var S0 = new class {
    constructor() {
        this.mutationObservers = new Map
    }
    observe(e, t, i) {
        let s = this.mutationObservers.get(e);
        s || (s = new Map, this.mutationObservers.set(e, s));
        const n = mp(i);
        let r = s.get(n);
        if (r) r.users += 1;
        else {
            const o = new L,
                a = new MutationObserver(h => o.fire(h));
            a.observe(e, i);
            const c = r = {
                users: 1,
                observer: a,
                onDidMutate: o.event
            };
            t.add(de(() => {
                c.users -= 1, c.users === 0 && (o.dispose(), a.disconnect(), s?.delete(n), s?.size === 0 && this.mutationObservers.delete(e))
            })), s.set(n, r)
        }
        return r.onDidMutate
    }
};

function Nt(e) {
    return e instanceof HTMLElement || e instanceof re(e).HTMLElement
}

function gh(e) {
    return e instanceof SVGElement || e instanceof re(e).SVGElement
}

function C0(e) {
    return e instanceof MouseEvent || e instanceof re(e).MouseEvent
}

function hi(e) {
    return e instanceof KeyboardEvent || e instanceof re(e).KeyboardEvent
}
var X = {
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
        ANIMATION_START: un ? "webkitAnimationStart" : "animationstart",
        ANIMATION_END: un ? "webkitAnimationEnd" : "animationend",
        ANIMATION_ITERATION: un ? "webkitAnimationIteration" : "animationiteration"
    },
    fe = {
        stop: (e, t) => (e.preventDefault(), t && e.stopPropagation(), e)
    },
    D0 = class La extends q {
        constructor(t) {
            super(), this._onDidFocus = this._register(new L), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new L), this.onDidBlur = this._onDidBlur.event;
            let i = La.hasFocusWithin(t),
                s = !1;
            const n = () => {
                    s = !1, i || (i = !0, this._onDidFocus.fire())
                },
                r = () => {
                    i && (s = !0, (Nt(t) ? re(t) : t).setTimeout(() => {
                        s && (s = !1, i = !1, this._onDidBlur.fire())
                    }, 0))
                };
            this._refreshStateHandler = () => {
                La.hasFocusWithin(t) !== i && (i ? r() : n())
            }, this._register(O(t, X.FOCUS, n, !0)), this._register(O(t, X.BLUR, r, !0)), Nt(t) && (this._register(O(t, X.FOCUS_IN, () => this._refreshStateHandler())), this._register(O(t, X.FOCUS_OUT, () => this._refreshStateHandler())))
        }
        static hasFocusWithin(t) {
            if (Nt(t)) {
                const i = w0(t),
                    s = i ? i.activeElement : t.ownerDocument.activeElement;
                return Ki(s, t)
            } else {
                const i = t;
                return Ki(i.document.activeElement, i.document)
            }
        }
        refreshState() {
            this._refreshStateHandler()
        }
    };

function E0(e) {
    return new D0(e)
}

function Q(e, ...t) {
    if (e.append(...t), t.length === 1 && typeof t[0] != "string") return t[0]
}

function mh(e, ...t) {
    e.innerText = "", Q(e, ...t)
}
var k0 = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;

function vh(e, t, i, ...s) {
    const n = k0.exec(t);
    if (!n) throw new Error("Bad use of emmet");
    const r = n[1] || "div";
    let o;
    return e !== "http://www.w3.org/1999/xhtml" ? o = document.createElementNS(e, r) : o = document.createElement(r), n[3] && (o.id = n[3]), n[4] && (o.className = n[4].replace(/\./g, " ").trim()), i && Object.entries(i).forEach(([a, c]) => {
        typeof c > "u" || (/^on\w+$/.test(a) ? o[a] = c : a === "selected" ? c && o.setAttribute(a, "true") : o.setAttribute(a, c))
    }), o.append(...s), o
}

function ie(e, t, ...i) {
    return vh("http://www.w3.org/1999/xhtml", e, t, ...i)
}
ie.SVG = function(e, t, ...i) {
    return vh("http://www.w3.org/2000/svg", e, t, ...i)
};

function T0(e, t) {
    const i = () => {
        t(), s = $t(e, i)
    };
    let s = $t(e, i);
    return de(() => s.dispose())
}
ac.setPreferredWebSchema(/^https:/.test(T.location.href) ? "https" : "http");

function x0(e, t = !1) {
    const i = document.createElement("a");
    return Cs.addHook("afterSanitizeAttributes", s => {
        for (const n of ["href", "src"])
            if (s.hasAttribute(n)) {
                const r = s.getAttribute(n);
                if (n === "href" && r.startsWith("#")) continue;
                if (i.href = r, !e.includes(i.protocol.replace(/:$/, ""))) {
                    if (t && n === "src" && i.href.startsWith("data:")) continue;
                    s.removeAttribute(n)
                }
            }
    }), de(() => {
        Cs.removeHook("afterSanitizeAttributes")
    })
}
var iv = [ee.http, ee.https, ee.command],
    A0 = Object.freeze(["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "img", "input", "ins", "kbd", "label", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "samp", "small", "small", "source", "span", "strike", "strong", "sub", "summary", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var", "video", "wbr"]),
    sv = Object.freeze({
        ALLOWED_TAGS: ["a", "button", "blockquote", "code", "div", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "input", "label", "li", "p", "pre", "select", "small", "span", "strong", "textarea", "ul", "ol"],
        ALLOWED_ATTR: ["href", "data-href", "data-command", "target", "title", "name", "src", "alt", "class", "id", "role", "tabindex", "style", "data-code", "width", "height", "align", "x-dispatch", "required", "checked", "placeholder", "type", "start"],
        RETURN_DOM: !1,
        RETURN_DOM_FRAGMENT: !1,
        RETURN_TRUSTED_TYPE: !0
    }),
    N0 = /(?<tag>[\w\-]+)?(?:#(?<id>[\w\-]+))?(?<class>(?:\.(?:[\w\-]+))*)(?:@(?<name>(?:[\w\_])+))?/;

function xo(e, ...t) {
    let i, s;
    Array.isArray(t[0]) ? (i = {}, s = t[0]) : (i = t[0] || {}, s = t[1]);
    const n = N0.exec(e);
    if (!n || !n.groups) throw new Error("Bad use of h");
    const r = n.groups.tag || "div",
        o = document.createElement(r);
    n.groups.id && (o.id = n.groups.id);
    const a = [];
    if (n.groups.class)
        for (const h of n.groups.class.split(".")) h !== "" && a.push(h);
    if (i.className !== void 0)
        for (const h of i.className.split(".")) h !== "" && a.push(h);
    a.length > 0 && (o.className = a.join(" "));
    const c = {};
    if (n.groups.name && (c[n.groups.name] = o), s)
        for (const h of s) Nt(h) ? o.appendChild(h) : typeof h == "string" ? o.append(h) : "root" in h && (Object.assign(c, h), o.appendChild(h.root));
    for (const [h, d] of Object.entries(i))
        if (h !== "className")
            if (h === "style")
                for (const [u, f] of Object.entries(d)) o.style.setProperty(yh(u), typeof f == "number" ? f + "px" : "" + f);
            else h === "tabIndex" ? o.tabIndex = d : o.setAttribute(yh(h), d.toString());
    return c.root = o, c
}

function yh(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function Ut(e) {
    return e.tagName.toLowerCase() === "input" || e.tagName.toLowerCase() === "textarea" || Nt(e) && !!e.editContext
}

function nv(e) {
    return e
}

function It(e, t) {
    if (e !== void 0) {
        const i = e.match(/^\s*var\((.+)\)$/);
        if (i) {
            const s = i[1].split(",", 2);
            return s.length === 2 && (t = It(s[1].trim(), t)), `var(${s[0]}, ${t})`
        }
        return e
    }
    return t
}

function bh(e) {
    const t = e.replaceAll(/[^_\-a-z0-9]/gi, "");
    return t !== e && console.warn(`CSS ident value ${e} modified to ${t} to be safe for CSS`), t
}

function Wt(e) {
    return `'${e.replaceAll(/'/g,"\\000027")}'`
}

function I0(e) {
    return e ? ze`url('${CSS.escape(cc.uriToBrowserUri(e).toString(!0))}')` : "url('')"
}

function Fn(e, t = !1) {
    const i = CSS.escape(e);
    return !t && i !== e && console.warn(`CSS class name ${e} modified to ${i} to be safe for CSS`), i
}

function ze(e, ...t) {
    return e.reduce((i, s, n) => {
        const r = t[n] || "";
        return i + s + r
    }, "")
}
var Ao = class {
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
    le = class {
        get event() {
            return this.emitter.event
        }
        constructor(e, t, i) {
            const s = n => this.emitter.fire(n);
            this.emitter = new L({
                onWillAddFirstListener: () => e.addEventListener(t, s, i),
                onDidRemoveLastListener: () => e.removeEventListener(t, s, i)
            })
        }
        dispose() {
            this.emitter.dispose()
        }
    },
    L0 = Object.freeze({
        text: "text/plain",
        binary: "application/octet-stream",
        unknown: "application/unknown",
        markdown: "text/markdown",
        latex: "text/latex",
        uriList: "text/uri-list",
        html: "text/html"
    }),
    _h = {
        RESOURCES: "ResourceURLs",
        DOWNLOAD_URL: "DownloadURL",
        FILES: "Files",
        TEXT: L0.text,
        INTERNAL_URI_LIST: "application/vnd.code.uri-list"
    };

function ge(e, t, i) {
    let s = null,
        n = null;
    if (typeof i.value == "function" ? (s = "value", n = i.value, n.length !== 0 && console.warn("Memoize should only be used in functions with zero parameters")) : typeof i.get == "function" && (s = "get", n = i.get), !n) throw new Error("not supported");
    const r = `$memoize$${t}`;
    i[s] = function(...o) {
        return this.hasOwnProperty(r) || Object.defineProperty(this, r, {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: n.apply(this, o)
        }), this[r]
    }
}
var $e;
(e => {
    e.Tap = "-monaco-gesturetap", e.Change = "-monaco-gesturechange", e.Start = "-monaco-gesturestart", e.End = "-monaco-gesturesend", e.Contextmenu = "-monaco-gesturecontextmenu"
})($e || ($e = {}));
var Ts = class Pe extends q {
    constructor() {
        super(), this.dispatched = !1, this.targets = new Nl, this.ignoreTargets = new Nl, this.activeTouches = {}, this.handle = null, this._lastSetTapCountTime = 0, this._register(A.runAndSubscribe(u0, ({
            window: t,
            disposables: i
        }) => {
            i.add(O(t.document, "touchstart", s => this.onTouchStart(s), {
                passive: !1
            })), i.add(O(t.document, "touchend", s => this.onTouchEnd(t, s))), i.add(O(t.document, "touchmove", s => this.onTouchMove(s), {
                passive: !1
            }))
        }, {
            window: T,
            disposables: this._store
        }))
    }
    static addTarget(t) {
        if (!Pe.isTouchDevice()) return q.None;
        Pe.INSTANCE || (Pe.INSTANCE = Tl(new Pe));
        const i = Pe.INSTANCE.targets.push(t);
        return de(i)
    }
    static ignoreTarget(t) {
        if (!Pe.isTouchDevice()) return q.None;
        Pe.INSTANCE || (Pe.INSTANCE = Tl(new Pe));
        const i = Pe.INSTANCE.ignoreTargets.push(t);
        return de(i)
    }
    static isTouchDevice() {
        return "ontouchstart" in T || navigator.maxTouchPoints > 0
    }
    dispose() {
        this.handle && (this.handle.dispose(), this.handle = null), super.dispose()
    }
    onTouchStart(t) {
        const i = Date.now();
        this.handle && (this.handle.dispose(), this.handle = null);
        for (let s = 0, n = t.targetTouches.length; s < n; s++) {
            const r = t.targetTouches.item(s);
            this.activeTouches[r.identifier] = {
                id: r.identifier,
                initialTarget: r.target,
                initialTimeStamp: i,
                initialPageX: r.pageX,
                initialPageY: r.pageY,
                rollingTimestamps: [i],
                rollingPageX: [r.pageX],
                rollingPageY: [r.pageY]
            };
            const o = this.newGestureEvent($e.Start, r.target);
            o.pageX = r.pageX, o.pageY = r.pageY, this.dispatchEvent(o)
        }
        this.dispatched && (t.preventDefault(), t.stopPropagation(), this.dispatched = !1)
    }
    onTouchEnd(t, i) {
        const s = Date.now(),
            n = Object.keys(this.activeTouches).length;
        for (let r = 0, o = i.changedTouches.length; r < o; r++) {
            const a = i.changedTouches.item(r);
            if (!this.activeTouches.hasOwnProperty(String(a.identifier))) {
                console.warn("move of an UNKNOWN touch", a);
                continue
            }
            const c = this.activeTouches[a.identifier],
                h = Date.now() - c.initialTimeStamp;
            if (h < Pe.HOLD_DELAY && Math.abs(c.initialPageX - c.rollingPageX.at(-1)) < 30 && Math.abs(c.initialPageY - c.rollingPageY.at(-1)) < 30) {
                const d = this.newGestureEvent($e.Tap, c.initialTarget);
                d.pageX = c.rollingPageX.at(-1), d.pageY = c.rollingPageY.at(-1), this.dispatchEvent(d)
            } else if (h >= Pe.HOLD_DELAY && Math.abs(c.initialPageX - c.rollingPageX.at(-1)) < 30 && Math.abs(c.initialPageY - c.rollingPageY.at(-1)) < 30) {
                const d = this.newGestureEvent($e.Contextmenu, c.initialTarget);
                d.pageX = c.rollingPageX.at(-1), d.pageY = c.rollingPageY.at(-1), this.dispatchEvent(d)
            } else if (n === 1) {
                const d = c.rollingPageX.at(-1),
                    u = c.rollingPageY.at(-1),
                    f = c.rollingTimestamps.at(-1) - c.rollingTimestamps[0],
                    p = d - c.rollingPageX[0],
                    g = u - c.rollingPageY[0],
                    _ = [...this.targets].filter(y => c.initialTarget instanceof Node && y.contains(c.initialTarget));
                this.inertia(t, _, s, Math.abs(p) / f, p > 0 ? 1 : -1, d, Math.abs(g) / f, g > 0 ? 1 : -1, u)
            }
            this.dispatchEvent(this.newGestureEvent($e.End, c.initialTarget)), delete this.activeTouches[a.identifier]
        }
        this.dispatched && (i.preventDefault(), i.stopPropagation(), this.dispatched = !1)
    }
    newGestureEvent(t, i) {
        const s = document.createEvent("CustomEvent");
        return s.initEvent(t, !1, !0), s.initialTarget = i, s.tapCount = 0, s
    }
    dispatchEvent(t) {
        if (t.type === $e.Tap) {
            const i = new Date().getTime();
            let s = 0;
            i - this._lastSetTapCountTime > Pe.CLEAR_TAP_COUNT_TIME ? s = 1 : s = 2, this._lastSetTapCountTime = i, t.tapCount = s
        } else(t.type === $e.Change || t.type === $e.Contextmenu) && (this._lastSetTapCountTime = 0);
        if (t.initialTarget instanceof Node) {
            for (const s of this.ignoreTargets)
                if (s.contains(t.initialTarget)) return;
            const i = [];
            for (const s of this.targets)
                if (s.contains(t.initialTarget)) {
                    let n = 0,
                        r = t.initialTarget;
                    for (; r && r !== s;) n++, r = r.parentElement;
                    i.push([n, s])
                } i.sort((s, n) => s[0] - n[0]);
            for (const [s, n] of i) n.dispatchEvent(t), this.dispatched = !0
        }
    }
    inertia(t, i, s, n, r, o, a, c, h) {
        this.handle = $t(t, () => {
            const d = Date.now(),
                u = d - s;
            let f = 0,
                p = 0,
                g = !0;
            n += Pe.SCROLL_FRICTION * u, a += Pe.SCROLL_FRICTION * u, n > 0 && (g = !1, f = r * n * u), a > 0 && (g = !1, p = c * a * u);
            const _ = this.newGestureEvent($e.Change);
            _.translationX = f, _.translationY = p, i.forEach(y => y.dispatchEvent(_)), g || this.inertia(t, i, d, n, r, o + f, a, c, h + p)
        })
    }
    onTouchMove(t) {
        const i = Date.now();
        for (let s = 0, n = t.changedTouches.length; s < n; s++) {
            const r = t.changedTouches.item(s);
            if (!this.activeTouches.hasOwnProperty(String(r.identifier))) {
                console.warn("end of an UNKNOWN touch", r);
                continue
            }
            const o = this.activeTouches[r.identifier],
                a = this.newGestureEvent($e.Change, o.initialTarget);
            a.translationX = r.pageX - o.rollingPageX.at(-1), a.translationY = r.pageY - o.rollingPageY.at(-1), a.pageX = r.pageX, a.pageY = r.pageY, this.dispatchEvent(a), o.rollingPageX.length > 3 && (o.rollingPageX.shift(), o.rollingPageY.shift(), o.rollingTimestamps.shift()), o.rollingPageX.push(r.pageX), o.rollingPageY.push(r.pageY), o.rollingTimestamps.push(i)
        }
        this.dispatched && (t.preventDefault(), t.stopPropagation(), this.dispatched = !1)
    }
};
Ts.SCROLL_FRICTION = -.005, Ts.HOLD_DELAY = 700, Ts.CLEAR_TAP_COUNT_TIME = 400, __decorate([ge], Ts, "isTouchDevice", null);
var Bn = Ts,
    R0 = () => ({
        get delay() {
            return -1
        },
        dispose: () => {},
        showHover: () => {}
    }),
    No = R0,
    M0 = new gt(() => No("mouse", !1)),
    P0 = new gt(() => No("element", !1));

function qi(e) {
    return e === "element" ? P0.value : M0.value
}

function Io() {
    return No("element", !0)
}
var wh = 2e4,
    Sh, Lo, Ch, Ro, Dh;

function xs(e) {
    Sh && (Lo.textContent !== e ? (ci(Ch), Hn(Lo, e)) : (ci(Lo), Hn(Ch, e)))
}

function Eh(e) {
    Sh && (Ro.textContent !== e ? (ci(Dh), Hn(Ro, e)) : (ci(Ro), Hn(Dh, e)))
}

function Hn(e, t) {
    ci(e), t.length > wh && (t = t.substr(0, wh)), e.textContent = t, e.style.visibility = "hidden", e.style.visibility = "visible"
}
var O0 = class {
    constructor(e) {
        this.spliceables = e
    }
    splice(e, t, i) {
        this.spliceables.forEach(s => s.splice(e, t, i))
    }
};

function Vt(e, t) {
    const i = Math.pow(10, t);
    return Math.round(e * i) / i
}
var v = class {
        constructor(e, t, i, s = 1) {
            this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, i)) | 0, this.a = Vt(Math.max(Math.min(1, s), 0), 3)
        }
        static equals(e, t) {
            return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a
        }
    },
    ji = class Js {
        constructor(t, i, s, n) {
            this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Vt(Math.max(Math.min(1, i), 0), 3), this.l = Vt(Math.max(Math.min(1, s), 0), 3), this.a = Vt(Math.max(Math.min(1, n), 0), 3)
        }
        static equals(t, i) {
            return t.h === i.h && t.s === i.s && t.l === i.l && t.a === i.a
        }
        static fromRGBA(t) {
            const i = t.r / 255,
                s = t.g / 255,
                n = t.b / 255,
                r = t.a,
                o = Math.max(i, s, n),
                a = Math.min(i, s, n);
            let c = 0,
                h = 0;
            const d = (a + o) / 2,
                u = o - a;
            if (u > 0) {
                switch (h = Math.min(d <= .5 ? u / (2 * d) : u / (2 - 2 * d), 1), o) {
                    case i:
                        c = (s - n) / u + (s < n ? 6 : 0);
                        break;
                    case s:
                        c = (n - i) / u + 2;
                        break;
                    case n:
                        c = (i - s) / u + 4;
                        break
                }
                c *= 60, c = Math.round(c)
            }
            return new Js(c, h, d, r)
        }
        static _hue2rgb(t, i, s) {
            return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + (i - t) * 6 * s : s < 1 / 2 ? i : s < 2 / 3 ? t + (i - t) * (2 / 3 - s) * 6 : t
        }
        static toRGBA(t) {
            const i = t.h / 360,
                {
                    s,
                    l: n,
                    a: r
                } = t;
            let o, a, c;
            if (s === 0) o = a = c = n;
            else {
                const h = n < .5 ? n * (1 + s) : n + s - n * s,
                    d = 2 * n - h;
                o = Js._hue2rgb(d, h, i + 1 / 3), a = Js._hue2rgb(d, h, i), c = Js._hue2rgb(d, h, i - 1 / 3)
            }
            return new v(Math.round(o * 255), Math.round(a * 255), Math.round(c * 255), r)
        }
    },
    zn = class hu {
        constructor(t, i, s, n) {
            this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Vt(Math.max(Math.min(1, i), 0), 3), this.v = Vt(Math.max(Math.min(1, s), 0), 3), this.a = Vt(Math.max(Math.min(1, n), 0), 3)
        }
        static equals(t, i) {
            return t.h === i.h && t.s === i.s && t.v === i.v && t.a === i.a
        }
        static fromRGBA(t) {
            const i = t.r / 255,
                s = t.g / 255,
                n = t.b / 255,
                r = Math.max(i, s, n),
                o = Math.min(i, s, n),
                a = r - o,
                c = r === 0 ? 0 : a / r;
            let h;
            return a === 0 ? h = 0 : r === i ? h = ((s - n) / a % 6 + 6) % 6 : r === s ? h = (n - i) / a + 2 : h = (i - s) / a + 4, new hu(Math.round(h * 60), c, r, t.a)
        }
        static toRGBA(t) {
            const {
                h: i,
                s,
                v: n,
                a: r
            } = t, o = n * s, a = o * (1 - Math.abs(i / 60 % 2 - 1)), c = n - o;
            let [h, d, u] = [0, 0, 0];
            return i < 60 ? (h = o, d = a) : i < 120 ? (h = a, d = o) : i < 180 ? (d = o, u = a) : i < 240 ? (d = a, u = o) : i < 300 ? (h = a, u = o) : i <= 360 && (h = o, u = a), h = Math.round((h + c) * 255), d = Math.round((d + c) * 255), u = Math.round((u + c) * 255), new v(h, d, u, r)
        }
    },
    xe = class Se {
        static fromHex(t) {
            return Se.Format.CSS.parseHex(t) || Se.red
        }
        static equals(t, i) {
            return !t && !i ? !0 : !t || !i ? !1 : t.equals(i)
        }
        get hsla() {
            return this._hsla ? this._hsla : ji.fromRGBA(this.rgba)
        }
        get hsva() {
            return this._hsva ? this._hsva : zn.fromRGBA(this.rgba)
        }
        constructor(t) {
            if (t)
                if (t instanceof v) this.rgba = t;
                else if (t instanceof ji) this._hsla = t, this.rgba = ji.toRGBA(t);
            else if (t instanceof zn) this._hsva = t, this.rgba = zn.toRGBA(t);
            else throw new Error("Invalid color ctor argument");
            else throw new Error("Color needs a value")
        }
        equals(t) {
            return !!t && v.equals(this.rgba, t.rgba) && ji.equals(this.hsla, t.hsla) && zn.equals(this.hsva, t.hsva)
        }
        getRelativeLuminance() {
            const t = Se._relativeLuminanceForComponent(this.rgba.r),
                i = Se._relativeLuminanceForComponent(this.rgba.g),
                s = Se._relativeLuminanceForComponent(this.rgba.b),
                n = .2126 * t + .7152 * i + .0722 * s;
            return Vt(n, 4)
        }
        reduceRelativeLuminace(t, i) {
            let {
                r: s,
                g: n,
                b: r
            } = t.rgba, o = this.getContrastRatio(t);
            for (; o < i && (s > 0 || n > 0 || r > 0);) s -= Math.max(0, Math.ceil(s * .1)), n -= Math.max(0, Math.ceil(n * .1)), r -= Math.max(0, Math.ceil(r * .1)), o = this.getContrastRatio(new Se(new v(s, n, r)));
            return new Se(new v(s, n, r))
        }
        increaseRelativeLuminace(t, i) {
            let {
                r: s,
                g: n,
                b: r
            } = t.rgba, o = this.getContrastRatio(t);
            for (; o < i && (s < 255 || n < 255 || r < 255);) s = Math.min(255, s + Math.ceil((255 - s) * .1)), n = Math.min(255, n + Math.ceil((255 - n) * .1)), r = Math.min(255, r + Math.ceil((255 - r) * .1)), o = this.getContrastRatio(new Se(new v(s, n, r)));
            return new Se(new v(s, n, r))
        }
        static _relativeLuminanceForComponent(t) {
            const i = t / 255;
            return i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
        }
        getContrastRatio(t) {
            const i = this.getRelativeLuminance(),
                s = t.getRelativeLuminance();
            return i > s ? (i + .05) / (s + .05) : (s + .05) / (i + .05)
        }
        isDarker() {
            return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128
        }
        isLighter() {
            return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128
        }
        isLighterThan(t) {
            const i = this.getRelativeLuminance(),
                s = t.getRelativeLuminance();
            return i > s
        }
        isDarkerThan(t) {
            const i = this.getRelativeLuminance(),
                s = t.getRelativeLuminance();
            return i < s
        }
        ensureConstrast(t, i) {
            const s = this.getRelativeLuminance(),
                n = t.getRelativeLuminance();
            if (this.getContrastRatio(t) < i) {
                if (n < s) {
                    const c = this.reduceRelativeLuminace(t, i),
                        h = this.getContrastRatio(c);
                    if (h < i) {
                        const d = this.increaseRelativeLuminace(t, i),
                            u = this.getContrastRatio(d);
                        return h > u ? c : d
                    }
                    return c
                }
                const o = this.increaseRelativeLuminace(t, i),
                    a = this.getContrastRatio(o);
                if (a < i) {
                    const c = this.reduceRelativeLuminace(t, i),
                        h = this.getContrastRatio(c);
                    return a > h ? o : c
                }
                return o
            }
            return t
        }
        lighten(t) {
            return new Se(new ji(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a))
        }
        darken(t) {
            return new Se(new ji(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a))
        }
        transparent(t) {
            const {
                r: i,
                g: s,
                b: n,
                a: r
            } = this.rgba;
            return new Se(new v(i, s, n, r * t))
        }
        isTransparent() {
            return this.rgba.a === 0
        }
        isOpaque() {
            return this.rgba.a === 1
        }
        opposite() {
            return new Se(new v(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a))
        }
        blend(t) {
            const i = t.rgba,
                s = this.rgba.a,
                n = i.a,
                r = s + n * (1 - s);
            if (r < 1e-6) return Se.transparent;
            const o = this.rgba.r * s / r + i.r * n * (1 - s) / r,
                a = this.rgba.g * s / r + i.g * n * (1 - s) / r,
                c = this.rgba.b * s / r + i.b * n * (1 - s) / r;
            return new Se(new v(o, a, c, r))
        }
        makeOpaque(t) {
            if (this.isOpaque() || t.rgba.a !== 1) return this;
            const {
                r: i,
                g: s,
                b: n,
                a: r
            } = this.rgba;
            return new Se(new v(t.rgba.r - r * (t.rgba.r - i), t.rgba.g - r * (t.rgba.g - s), t.rgba.b - r * (t.rgba.b - n), 1))
        }
        flatten(...t) {
            const i = t.reduceRight((s, n) => Se._flatten(n, s));
            return Se._flatten(this, i)
        }
        static _flatten(t, i) {
            const s = 1 - t.rgba.a;
            return new Se(new v(s * i.rgba.r + t.rgba.a * t.rgba.r, s * i.rgba.g + t.rgba.a * t.rgba.g, s * i.rgba.b + t.rgba.a * t.rgba.b))
        }
        toString() {
            return this._toString || (this._toString = Se.Format.CSS.format(this)), this._toString
        }
        toNumber32Bit() {
            return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit
        }
        static getLighterColor(t, i, s) {
            if (t.isLighterThan(i)) return t;
            s = s || .5;
            const n = t.getRelativeLuminance(),
                r = i.getRelativeLuminance();
            return s = s * (r - n) / r, t.lighten(s)
        }
        static getDarkerColor(t, i, s) {
            if (t.isDarkerThan(i)) return t;
            s = s || .5;
            const n = t.getRelativeLuminance(),
                r = i.getRelativeLuminance();
            return s = s * (n - r) / n, t.darken(s)
        }
    };
xe.white = new xe(new v(255, 255, 255, 1)), xe.black = new xe(new v(0, 0, 0, 1)), xe.red = new xe(new v(255, 0, 0, 1)), xe.blue = new xe(new v(0, 0, 255, 1)), xe.green = new xe(new v(0, 255, 0, 1)), xe.cyan = new xe(new v(0, 255, 255, 1)), xe.lightgrey = new xe(new v(211, 211, 211, 1)), xe.transparent = new xe(new v(0, 0, 0, 0));
var As = xe;
(e => {
    let t;
    (i => {
        let s;
        (n => {
            function r(w) {
                return w.rgba.a === 1 ? `rgb(${w.rgba.r}, ${w.rgba.g}, ${w.rgba.b})` : e.Format.CSS.formatRGBA(w)
            }
            n.formatRGB = r;

            function o(w) {
                return `rgba(${w.rgba.r}, ${w.rgba.g}, ${w.rgba.b}, ${+w.rgba.a.toFixed(2)})`
            }
            n.formatRGBA = o;

            function a(w) {
                return w.hsla.a === 1 ? `hsl(${w.hsla.h}, ${(w.hsla.s*100).toFixed(2)}%, ${(w.hsla.l*100).toFixed(2)}%)` : e.Format.CSS.formatHSLA(w)
            }
            n.formatHSL = a;

            function c(w) {
                return `hsla(${w.hsla.h}, ${(w.hsla.s*100).toFixed(2)}%, ${(w.hsla.l*100).toFixed(2)}%, ${w.hsla.a.toFixed(2)})`
            }
            n.formatHSLA = c;

            function h(w) {
                const C = w.toString(16);
                return C.length !== 2 ? "0" + C : C
            }

            function d(w) {
                return `#${h(w.rgba.r)}${h(w.rgba.g)}${h(w.rgba.b)}`
            }
            n.formatHex = d;

            function u(w, C = !1) {
                return C && w.rgba.a === 1 ? e.Format.CSS.formatHex(w) : `#${h(w.rgba.r)}${h(w.rgba.g)}${h(w.rgba.b)}${h(Math.round(w.rgba.a*255))}`
            }
            n.formatHexA = u;

            function f(w) {
                return w.isOpaque() ? e.Format.CSS.formatHex(w) : e.Format.CSS.formatRGBA(w)
            }
            n.format = f;

            function p(w) {
                if (w === "transparent") return e.transparent;
                if (w.startsWith("#")) return _(w);
                if (w.startsWith("rgba(")) {
                    const C = w.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
                    if (!C) throw new Error("Invalid color format " + w);
                    const D = parseInt(C.groups?.r ?? "0"),
                        E = parseInt(C.groups?.g ?? "0"),
                        b = parseInt(C.groups?.b ?? "0"),
                        S = parseFloat(C.groups?.a ?? "0");
                    return new e(new v(D, E, b, S))
                }
                if (w.startsWith("rgb(")) {
                    const C = w.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
                    if (!C) throw new Error("Invalid color format " + w);
                    const D = parseInt(C.groups?.r ?? "0"),
                        E = parseInt(C.groups?.g ?? "0"),
                        b = parseInt(C.groups?.b ?? "0");
                    return new e(new v(D, E, b))
                }
                return g(w)
            }
            n.parse = p;

            function g(w) {
                switch (w) {
                    case "aliceblue":
                        return new e(new v(240, 248, 255, 1));
                    case "antiquewhite":
                        return new e(new v(250, 235, 215, 1));
                    case "aqua":
                        return new e(new v(0, 255, 255, 1));
                    case "aquamarine":
                        return new e(new v(127, 255, 212, 1));
                    case "azure":
                        return new e(new v(240, 255, 255, 1));
                    case "beige":
                        return new e(new v(245, 245, 220, 1));
                    case "bisque":
                        return new e(new v(255, 228, 196, 1));
                    case "black":
                        return new e(new v(0, 0, 0, 1));
                    case "blanchedalmond":
                        return new e(new v(255, 235, 205, 1));
                    case "blue":
                        return new e(new v(0, 0, 255, 1));
                    case "blueviolet":
                        return new e(new v(138, 43, 226, 1));
                    case "brown":
                        return new e(new v(165, 42, 42, 1));
                    case "burlywood":
                        return new e(new v(222, 184, 135, 1));
                    case "cadetblue":
                        return new e(new v(95, 158, 160, 1));
                    case "chartreuse":
                        return new e(new v(127, 255, 0, 1));
                    case "chocolate":
                        return new e(new v(210, 105, 30, 1));
                    case "coral":
                        return new e(new v(255, 127, 80, 1));
                    case "cornflowerblue":
                        return new e(new v(100, 149, 237, 1));
                    case "cornsilk":
                        return new e(new v(255, 248, 220, 1));
                    case "crimson":
                        return new e(new v(220, 20, 60, 1));
                    case "cyan":
                        return new e(new v(0, 255, 255, 1));
                    case "darkblue":
                        return new e(new v(0, 0, 139, 1));
                    case "darkcyan":
                        return new e(new v(0, 139, 139, 1));
                    case "darkgoldenrod":
                        return new e(new v(184, 134, 11, 1));
                    case "darkgray":
                        return new e(new v(169, 169, 169, 1));
                    case "darkgreen":
                        return new e(new v(0, 100, 0, 1));
                    case "darkgrey":
                        return new e(new v(169, 169, 169, 1));
                    case "darkkhaki":
                        return new e(new v(189, 183, 107, 1));
                    case "darkmagenta":
                        return new e(new v(139, 0, 139, 1));
                    case "darkolivegreen":
                        return new e(new v(85, 107, 47, 1));
                    case "darkorange":
                        return new e(new v(255, 140, 0, 1));
                    case "darkorchid":
                        return new e(new v(153, 50, 204, 1));
                    case "darkred":
                        return new e(new v(139, 0, 0, 1));
                    case "darksalmon":
                        return new e(new v(233, 150, 122, 1));
                    case "darkseagreen":
                        return new e(new v(143, 188, 143, 1));
                    case "darkslateblue":
                        return new e(new v(72, 61, 139, 1));
                    case "darkslategray":
                        return new e(new v(47, 79, 79, 1));
                    case "darkslategrey":
                        return new e(new v(47, 79, 79, 1));
                    case "darkturquoise":
                        return new e(new v(0, 206, 209, 1));
                    case "darkviolet":
                        return new e(new v(148, 0, 211, 1));
                    case "deeppink":
                        return new e(new v(255, 20, 147, 1));
                    case "deepskyblue":
                        return new e(new v(0, 191, 255, 1));
                    case "dimgray":
                        return new e(new v(105, 105, 105, 1));
                    case "dimgrey":
                        return new e(new v(105, 105, 105, 1));
                    case "dodgerblue":
                        return new e(new v(30, 144, 255, 1));
                    case "firebrick":
                        return new e(new v(178, 34, 34, 1));
                    case "floralwhite":
                        return new e(new v(255, 250, 240, 1));
                    case "forestgreen":
                        return new e(new v(34, 139, 34, 1));
                    case "fuchsia":
                        return new e(new v(255, 0, 255, 1));
                    case "gainsboro":
                        return new e(new v(220, 220, 220, 1));
                    case "ghostwhite":
                        return new e(new v(248, 248, 255, 1));
                    case "gold":
                        return new e(new v(255, 215, 0, 1));
                    case "goldenrod":
                        return new e(new v(218, 165, 32, 1));
                    case "gray":
                        return new e(new v(128, 128, 128, 1));
                    case "green":
                        return new e(new v(0, 128, 0, 1));
                    case "greenyellow":
                        return new e(new v(173, 255, 47, 1));
                    case "grey":
                        return new e(new v(128, 128, 128, 1));
                    case "honeydew":
                        return new e(new v(240, 255, 240, 1));
                    case "hotpink":
                        return new e(new v(255, 105, 180, 1));
                    case "indianred":
                        return new e(new v(205, 92, 92, 1));
                    case "indigo":
                        return new e(new v(75, 0, 130, 1));
                    case "ivory":
                        return new e(new v(255, 255, 240, 1));
                    case "khaki":
                        return new e(new v(240, 230, 140, 1));
                    case "lavender":
                        return new e(new v(230, 230, 250, 1));
                    case "lavenderblush":
                        return new e(new v(255, 240, 245, 1));
                    case "lawngreen":
                        return new e(new v(124, 252, 0, 1));
                    case "lemonchiffon":
                        return new e(new v(255, 250, 205, 1));
                    case "lightblue":
                        return new e(new v(173, 216, 230, 1));
                    case "lightcoral":
                        return new e(new v(240, 128, 128, 1));
                    case "lightcyan":
                        return new e(new v(224, 255, 255, 1));
                    case "lightgoldenrodyellow":
                        return new e(new v(250, 250, 210, 1));
                    case "lightgray":
                        return new e(new v(211, 211, 211, 1));
                    case "lightgreen":
                        return new e(new v(144, 238, 144, 1));
                    case "lightgrey":
                        return new e(new v(211, 211, 211, 1));
                    case "lightpink":
                        return new e(new v(255, 182, 193, 1));
                    case "lightsalmon":
                        return new e(new v(255, 160, 122, 1));
                    case "lightseagreen":
                        return new e(new v(32, 178, 170, 1));
                    case "lightskyblue":
                        return new e(new v(135, 206, 250, 1));
                    case "lightslategray":
                        return new e(new v(119, 136, 153, 1));
                    case "lightslategrey":
                        return new e(new v(119, 136, 153, 1));
                    case "lightsteelblue":
                        return new e(new v(176, 196, 222, 1));
                    case "lightyellow":
                        return new e(new v(255, 255, 224, 1));
                    case "lime":
                        return new e(new v(0, 255, 0, 1));
                    case "limegreen":
                        return new e(new v(50, 205, 50, 1));
                    case "linen":
                        return new e(new v(250, 240, 230, 1));
                    case "magenta":
                        return new e(new v(255, 0, 255, 1));
                    case "maroon":
                        return new e(new v(128, 0, 0, 1));
                    case "mediumaquamarine":
                        return new e(new v(102, 205, 170, 1));
                    case "mediumblue":
                        return new e(new v(0, 0, 205, 1));
                    case "mediumorchid":
                        return new e(new v(186, 85, 211, 1));
                    case "mediumpurple":
                        return new e(new v(147, 112, 219, 1));
                    case "mediumseagreen":
                        return new e(new v(60, 179, 113, 1));
                    case "mediumslateblue":
                        return new e(new v(123, 104, 238, 1));
                    case "mediumspringgreen":
                        return new e(new v(0, 250, 154, 1));
                    case "mediumturquoise":
                        return new e(new v(72, 209, 204, 1));
                    case "mediumvioletred":
                        return new e(new v(199, 21, 133, 1));
                    case "midnightblue":
                        return new e(new v(25, 25, 112, 1));
                    case "mintcream":
                        return new e(new v(245, 255, 250, 1));
                    case "mistyrose":
                        return new e(new v(255, 228, 225, 1));
                    case "moccasin":
                        return new e(new v(255, 228, 181, 1));
                    case "navajowhite":
                        return new e(new v(255, 222, 173, 1));
                    case "navy":
                        return new e(new v(0, 0, 128, 1));
                    case "oldlace":
                        return new e(new v(253, 245, 230, 1));
                    case "olive":
                        return new e(new v(128, 128, 0, 1));
                    case "olivedrab":
                        return new e(new v(107, 142, 35, 1));
                    case "orange":
                        return new e(new v(255, 165, 0, 1));
                    case "orangered":
                        return new e(new v(255, 69, 0, 1));
                    case "orchid":
                        return new e(new v(218, 112, 214, 1));
                    case "palegoldenrod":
                        return new e(new v(238, 232, 170, 1));
                    case "palegreen":
                        return new e(new v(152, 251, 152, 1));
                    case "paleturquoise":
                        return new e(new v(175, 238, 238, 1));
                    case "palevioletred":
                        return new e(new v(219, 112, 147, 1));
                    case "papayawhip":
                        return new e(new v(255, 239, 213, 1));
                    case "peachpuff":
                        return new e(new v(255, 218, 185, 1));
                    case "peru":
                        return new e(new v(205, 133, 63, 1));
                    case "pink":
                        return new e(new v(255, 192, 203, 1));
                    case "plum":
                        return new e(new v(221, 160, 221, 1));
                    case "powderblue":
                        return new e(new v(176, 224, 230, 1));
                    case "purple":
                        return new e(new v(128, 0, 128, 1));
                    case "rebeccapurple":
                        return new e(new v(102, 51, 153, 1));
                    case "red":
                        return new e(new v(255, 0, 0, 1));
                    case "rosybrown":
                        return new e(new v(188, 143, 143, 1));
                    case "royalblue":
                        return new e(new v(65, 105, 225, 1));
                    case "saddlebrown":
                        return new e(new v(139, 69, 19, 1));
                    case "salmon":
                        return new e(new v(250, 128, 114, 1));
                    case "sandybrown":
                        return new e(new v(244, 164, 96, 1));
                    case "seagreen":
                        return new e(new v(46, 139, 87, 1));
                    case "seashell":
                        return new e(new v(255, 245, 238, 1));
                    case "sienna":
                        return new e(new v(160, 82, 45, 1));
                    case "silver":
                        return new e(new v(192, 192, 192, 1));
                    case "skyblue":
                        return new e(new v(135, 206, 235, 1));
                    case "slateblue":
                        return new e(new v(106, 90, 205, 1));
                    case "slategray":
                        return new e(new v(112, 128, 144, 1));
                    case "slategrey":
                        return new e(new v(112, 128, 144, 1));
                    case "snow":
                        return new e(new v(255, 250, 250, 1));
                    case "springgreen":
                        return new e(new v(0, 255, 127, 1));
                    case "steelblue":
                        return new e(new v(70, 130, 180, 1));
                    case "tan":
                        return new e(new v(210, 180, 140, 1));
                    case "teal":
                        return new e(new v(0, 128, 128, 1));
                    case "thistle":
                        return new e(new v(216, 191, 216, 1));
                    case "tomato":
                        return new e(new v(255, 99, 71, 1));
                    case "turquoise":
                        return new e(new v(64, 224, 208, 1));
                    case "violet":
                        return new e(new v(238, 130, 238, 1));
                    case "wheat":
                        return new e(new v(245, 222, 179, 1));
                    case "white":
                        return new e(new v(255, 255, 255, 1));
                    case "whitesmoke":
                        return new e(new v(245, 245, 245, 1));
                    case "yellow":
                        return new e(new v(255, 255, 0, 1));
                    case "yellowgreen":
                        return new e(new v(154, 205, 50, 1));
                    default:
                        return null
                }
            }

            function _(w) {
                const C = w.length;
                if (C === 0 || w.charCodeAt(0) !== 35) return null;
                if (C === 7) {
                    const D = 16 * y(w.charCodeAt(1)) + y(w.charCodeAt(2)),
                        E = 16 * y(w.charCodeAt(3)) + y(w.charCodeAt(4)),
                        b = 16 * y(w.charCodeAt(5)) + y(w.charCodeAt(6));
                    return new e(new v(D, E, b, 1))
                }
                if (C === 9) {
                    const D = 16 * y(w.charCodeAt(1)) + y(w.charCodeAt(2)),
                        E = 16 * y(w.charCodeAt(3)) + y(w.charCodeAt(4)),
                        b = 16 * y(w.charCodeAt(5)) + y(w.charCodeAt(6)),
                        S = 16 * y(w.charCodeAt(7)) + y(w.charCodeAt(8));
                    return new e(new v(D, E, b, S / 255))
                }
                if (C === 4) {
                    const D = y(w.charCodeAt(1)),
                        E = y(w.charCodeAt(2)),
                        b = y(w.charCodeAt(3));
                    return new e(new v(16 * D + D, 16 * E + E, 16 * b + b))
                }
                if (C === 5) {
                    const D = y(w.charCodeAt(1)),
                        E = y(w.charCodeAt(2)),
                        b = y(w.charCodeAt(3)),
                        S = y(w.charCodeAt(4));
                    return new e(new v(16 * D + D, 16 * E + E, 16 * b + b, (16 * S + S) / 255))
                }
                return null
            }
            n.parseHex = _;

            function y(w) {
                switch (w) {
                    case 48:
                        return 0;
                    case 49:
                        return 1;
                    case 50:
                        return 2;
                    case 51:
                        return 3;
                    case 52:
                        return 4;
                    case 53:
                        return 5;
                    case 54:
                        return 6;
                    case 55:
                        return 7;
                    case 56:
                        return 8;
                    case 57:
                        return 9;
                    case 97:
                        return 10;
                    case 65:
                        return 10;
                    case 98:
                        return 11;
                    case 66:
                        return 11;
                    case 99:
                        return 12;
                    case 67:
                        return 12;
                    case 100:
                        return 13;
                    case 68:
                        return 13;
                    case 101:
                        return 14;
                    case 69:
                        return 14;
                    case 102:
                        return 15;
                    case 70:
                        return 15
                }
                return 0
            }
        })(s = i.CSS || (i.CSS = {}))
    })(t = e.Format || (e.Format = {}))
})(As || (As = {}));
var rv = new Uint32Array(10),
    ov = new Uint8Array([114, 82, 115, 101, 69, 102, 97, 113, 81, 116, 84, 100, 119, 87, 99, 122, 120, 118, 103]),
    av = new Uint16Array([107, 111, 105, 79, 106, 112, 117, 80, 104, 27496, 28520, 27752, 121, 110, 27246, 28782, 27758, 98, 109, 27757, 108]),
    lv = new Uint16Array([114, 82, 29810, 115, 30579, 26483, 101, 102, 29286, 24934, 29030, 29798, 30822, 30310, 26470, 97, 113, 29809, 116, 84, 100, 119, 99, 122, 120, 118, 103]),
    cv = new Uint16Array([114, 82, 29810, 115, 30579, 26483, 101, 69, 102, 29286, 24934, 29030, 29798, 30822, 30310, 26470, 97, 113, 81, 29809, 116, 84, 100, 119, 87, 99, 122, 120, 118, 103, 107, 111, 105, 79, 106, 112, 117, 80, 104, 27496, 28520, 27752, 121, 110, 27246, 28782, 27758, 98, 109, 27757, 108]);

function kh(...e) {
    return function(t, i) {
        for (let s = 0, n = e.length; s < n; s++) {
            const r = e[s](t, i);
            if (r) return r
        }
        return null
    }
}
var hv = Th.bind(void 0, !1),
    $n = Th.bind(void 0, !0);

function Th(e, t, i) {
    if (!i || i.length < t.length) return null;
    let s;
    return e ? s = cf(i, t) : s = i.indexOf(t) === 0, s ? t.length > 0 ? [{
        start: 0,
        end: t.length
    }] : [] : null
}

function F0(e, t) {
    const i = t.toLowerCase().indexOf(e.toLowerCase());
    return i === -1 ? null : [{
        start: i,
        end: i + e.length
    }]
}

function B0(e, t) {
    return Mo(e.toLowerCase(), t.toLowerCase(), 0, 0)
}

function Mo(e, t, i, s) {
    if (i === e.length) return [];
    if (s === t.length) return null;
    if (e[i] === t[s]) {
        let n = null;
        return (n = Mo(e, t, i + 1, s + 1)) ? Ah({
            start: s,
            end: s + 1
        }, n) : null
    }
    return Mo(e, t, i, s + 1)
}

function Po(e) {
    return 97 <= e && e <= 122
}

function Un(e) {
    return 65 <= e && e <= 90
}

function Oo(e) {
    return 48 <= e && e <= 57
}

function H0(e) {
    return e === 32 || e === 9 || e === 10 || e === 13
}
var z0 = new Set;
"()[]{}<>`'\"-/;:,.?!".split("").forEach(e => z0.add(e.charCodeAt(0)));

function xh(e) {
    return Po(e) || Un(e) || Oo(e)
}

function Ah(e, t) {
    return t.length === 0 ? t = [e] : e.end === t[0].start ? t[0].start = e.start : t.unshift(e), t
}

function Nh(e, t) {
    for (let i = t; i < e.length; i++) {
        const s = e.charCodeAt(i);
        if (Un(s) || Oo(s) || i > 0 && !xh(e.charCodeAt(i - 1))) return i
    }
    return e.length
}

function Fo(e, t, i, s) {
    if (i === e.length) return [];
    if (s === t.length) return null;
    if (e[i] !== t[s].toLowerCase()) return null;
    {
        let n = null,
            r = s + 1;
        for (n = Fo(e, t, i + 1, s + 1); !n && (r = Nh(t, r)) < t.length;) n = Fo(e, t, i + 1, r), r++;
        return n === null ? null : Ah({
            start: s,
            end: s + 1
        }, n)
    }
}

function $0(e) {
    let t = 0,
        i = 0,
        s = 0,
        n = 0,
        r = 0;
    for (let d = 0; d < e.length; d++) r = e.charCodeAt(d), Un(r) && t++, Po(r) && i++, xh(r) && s++, Oo(r) && n++;
    const o = t / e.length,
        a = i / e.length,
        c = s / e.length,
        h = n / e.length;
    return {
        upperPercent: o,
        lowerPercent: a,
        alphaPercent: c,
        numericPercent: h
    }
}

function U0(e) {
    const {
        upperPercent: t,
        lowerPercent: i
    } = e;
    return i === 0 && t > .6
}

function W0(e) {
    const {
        upperPercent: t,
        lowerPercent: i,
        alphaPercent: s,
        numericPercent: n
    } = e;
    return i > .2 && t < .8 && s > .6 && n < .2
}

function V0(e) {
    let t = 0,
        i = 0,
        s = 0,
        n = 0;
    for (let r = 0; r < e.length; r++) s = e.charCodeAt(r), Un(s) && t++, Po(s) && i++, H0(s) && n++;
    return (t === 0 || i === 0) && n === 0 ? e.length <= 30 : t <= 5
}

function Ih(e, t) {
    if (!t || (t = t.trim(), t.length === 0) || !V0(e)) return null;
    t.length > 60 && (t = t.substring(0, 60));
    const i = $0(t);
    if (!W0(i)) {
        if (!U0(i)) return null;
        t = t.toLowerCase()
    }
    let s = null,
        n = 0;
    for (e = e.toLowerCase(); n < t.length && (s = Fo(e, t, 0, n)) === null;) n = Nh(t, n + 1);
    return s
}
var dv = kh($n, Ih, F0),
    uv = kh($n, Ih, B0),
    fv = new Gu(1e4);

function K0(e, t) {
    const i = Oh(e, e.toLowerCase(), 0, t, t.toLowerCase(), 0, {
        firstMatchCanBeWeak: !0,
        boostFullMatch: !0
    });
    return i ? G0(i) : null
}

function G0(e) {
    if (typeof e > "u") return [];
    const t = [],
        i = e[1];
    for (let s = e.length - 1; s > 1; s--) {
        const n = e[s] + i,
            r = t[t.length - 1];
        r && r.end === n ? r.end = n + 1 : t.push({
            start: n,
            end: n + 1
        })
    }
    return t
}
var Kt = 128;

function Bo() {
    const e = [],
        t = [];
    for (let i = 0; i <= Kt; i++) t[i] = 0;
    for (let i = 0; i <= Kt; i++) e.push(t.slice(0));
    return e
}

function Lh(e) {
    const t = [];
    for (let i = 0; i <= e; i++) t[i] = 0;
    return t
}
var Rh = Lh(2 * Kt),
    Ho = Lh(2 * Kt),
    vt = Bo(),
    Gt = Bo(),
    Ns = Bo(),
    q0 = !1;

function zo(e, t, i, s, n) {
    function r(a, c, h = " ") {
        for (; a.length < c;) a = h + a;
        return a
    }
    let o = ` |   |${s.split("").map(a=>r(a,3)).join("|")}
`;
    for (let a = 0; a <= i; a++) a === 0 ? o += " |" : o += `${t[a-1]}|`, o += e[a].slice(0, n + 1).map(c => r(c.toString(), 3)).join("|") + `
`;
    return o
}

function j0(e, t, i, s) {
    e = e.substr(t), i = i.substr(s), console.log(zo(Gt, e, e.length, i, i.length)), console.log(zo(Ns, e, e.length, i, i.length)), console.log(zo(vt, e, e.length, i, i.length))
}

function Wn(e, t) {
    if (t < 0 || t >= e.length) return !1;
    const i = e.codePointAt(t);
    switch (i) {
        case 95:
        case 45:
        case 46:
        case 32:
        case 47:
        case 92:
        case 39:
        case 34:
        case 58:
        case 36:
        case 60:
        case 62:
        case 40:
        case 41:
        case 91:
        case 93:
        case 123:
        case 125:
            return !0;
        case void 0:
            return !1;
        default:
            return !!uf(i)
    }
}

function Mh(e, t) {
    if (t < 0 || t >= e.length) return !1;
    switch (e.charCodeAt(t)) {
        case 32:
        case 9:
            return !0;
        default:
            return !1
    }
}

function Vn(e, t, i) {
    return t[e] !== i[e]
}

function Y0(e, t, i, s, n, r, o = !1) {
    for (; t < i && n < r;) e[t] === s[n] && (o && (Rh[t] = n), t += 1), n += 1;
    return t === i
}
var di;
(e => {
    e.Default = [-100, 0];

    function t(i) {
        return !i || i.length === 2 && i[0] === -100 && i[1] === 0
    }
    e.isDefault = t
})(di || (di = {}));
var Ph = class {
    constructor(e, t) {
        this.firstMatchCanBeWeak = e, this.boostFullMatch = t
    }
};
Ph.default = {
    boostFullMatch: !0,
    firstMatchCanBeWeak: !1
};

function Oh(e, t, i, s, n, r, o = Ph.default) {
    const a = e.length > Kt ? Kt : e.length,
        c = s.length > Kt ? Kt : s.length;
    if (i >= a || r >= c || a - i > c - r || !Y0(t, i, a, n, r, c, !0)) return;
    X0(a, c, i, r, t, n);
    let h = 1,
        d = 1,
        u = i,
        f = r;
    const p = [!1];
    for (h = 1, u = i; u < a; h++, u++) {
        const C = Rh[u],
            D = Ho[u],
            E = u + 1 < a ? Ho[u + 1] : c;
        for (d = C - r + 1, f = C; f < E; d++, f++) {
            let b = Number.MIN_SAFE_INTEGER,
                S = !1;
            f <= D && (b = Z0(e, t, u, i, s, n, f, c, r, vt[h - 1][d - 1] === 0, p));
            let I = 0;
            b !== Number.MIN_SAFE_INTEGER && (S = !0, I = b + Gt[h - 1][d - 1]);
            const P = f > C,
                j = P ? Gt[h][d - 1] + (vt[h][d - 1] > 0 ? -5 : 0) : 0,
                ue = f > C + 1 && vt[h][d - 1] > 0,
                K = ue ? Gt[h][d - 2] + (vt[h][d - 2] > 0 ? -5 : 0) : 0;
            if (ue && (!P || K >= j) && (!S || K >= I)) Gt[h][d] = K, Ns[h][d] = 3, vt[h][d] = 0;
            else if (P && (!S || j >= I)) Gt[h][d] = j, Ns[h][d] = 2, vt[h][d] = 0;
            else if (S) Gt[h][d] = I, Ns[h][d] = 1, vt[h][d] = vt[h - 1][d - 1] + 1;
            else throw new Error("not possible")
        }
    }
    if (q0 && j0(e, i, s, r), !p[0] && !o.firstMatchCanBeWeak) return;
    h--, d--;
    const g = [Gt[h][d], r];
    let _ = 0,
        y = 0;
    for (; h >= 1;) {
        let C = d;
        do {
            const D = Ns[h][C];
            if (D === 3) C = C - 2;
            else if (D === 2) C = C - 1;
            else break
        } while (C >= 1);
        _ > 1 && t[i + h - 1] === n[r + d - 1] && !Vn(C + r - 1, s, n) && _ + 1 > vt[h][C] && (C = d), C === d ? _++ : _ = 1, y || (y = C), h--, d = C - 1, g.push(d)
    }
    c - r === a && o.boostFullMatch && (g[0] += 2);
    const w = y - a;
    return g[0] -= w, g
}

function X0(e, t, i, s, n, r) {
    let o = e - 1,
        a = t - 1;
    for (; o >= i && a >= s;) n[o] === r[a] && (Ho[o] = a, o--), a--
}

function Z0(e, t, i, s, n, r, o, a, c, h, d) {
    if (t[i] !== r[o]) return Number.MIN_SAFE_INTEGER;
    let u = 1,
        f = !1;
    return o === i - s ? u = e[i] === n[o] ? 7 : 5 : Vn(o, n, r) && (o === 0 || !Vn(o - 1, n, r)) ? (u = e[i] === n[o] ? 7 : 5, f = !0) : Wn(r, o) && (o === 0 || !Wn(r, o - 1)) ? u = 5 : (Wn(r, o - 1) || Mh(r, o - 1)) && (u = 5, f = !0), u > 1 && i === s && (d[0] = !0), f || (f = Vn(o, n, r) || Wn(r, o - 1) || Mh(r, o - 1)), i === s ? o > c && (u -= f ? 3 : 5) : h ? u += f ? 2 : 0 : u += f ? 0 : 1, o + 1 === a && (u -= f ? 3 : 5), u
}
var ui = class extends Error {
        constructor(e, t) {
            super(`ListError [${e}] ${t}`)
        }
    },
    Q0 = class {
        constructor(e) {
            this.domNode = e, this._maxWidth = "", this._width = "", this._height = "", this._top = "", this._left = "", this._bottom = "", this._right = "", this._paddingTop = "", this._paddingLeft = "", this._paddingBottom = "", this._paddingRight = "", this._fontFamily = "", this._fontWeight = "", this._fontSize = "", this._fontStyle = "", this._fontFeatureSettings = "", this._fontVariationSettings = "", this._textDecoration = "", this._lineHeight = "", this._letterSpacing = "", this._className = "", this._display = "", this._position = "", this._visibility = "", this._color = "", this._backgroundColor = "", this._layerHint = !1, this._contain = "none", this._boxShadow = ""
        }
        focus() {
            this.domNode.focus()
        }
        setMaxWidth(e) {
            const t = Ye(e);
            this._maxWidth !== t && (this._maxWidth = t, this.domNode.style.maxWidth = this._maxWidth)
        }
        setWidth(e) {
            const t = Ye(e);
            this._width !== t && (this._width = t, this.domNode.style.width = this._width)
        }
        setHeight(e) {
            const t = Ye(e);
            this._height !== t && (this._height = t, this.domNode.style.height = this._height)
        }
        setTop(e) {
            const t = Ye(e);
            this._top !== t && (this._top = t, this.domNode.style.top = this._top)
        }
        setLeft(e) {
            const t = Ye(e);
            this._left !== t && (this._left = t, this.domNode.style.left = this._left)
        }
        setBottom(e) {
            const t = Ye(e);
            this._bottom !== t && (this._bottom = t, this.domNode.style.bottom = this._bottom)
        }
        setRight(e) {
            const t = Ye(e);
            this._right !== t && (this._right = t, this.domNode.style.right = this._right)
        }
        setPaddingTop(e) {
            const t = Ye(e);
            this._paddingTop !== t && (this._paddingTop = t, this.domNode.style.paddingTop = this._paddingTop)
        }
        setPaddingLeft(e) {
            const t = Ye(e);
            this._paddingLeft !== t && (this._paddingLeft = t, this.domNode.style.paddingLeft = this._paddingLeft)
        }
        setPaddingBottom(e) {
            const t = Ye(e);
            this._paddingBottom !== t && (this._paddingBottom = t, this.domNode.style.paddingBottom = this._paddingBottom)
        }
        setPaddingRight(e) {
            const t = Ye(e);
            this._paddingRight !== t && (this._paddingRight = t, this.domNode.style.paddingRight = this._paddingRight)
        }
        setFontFamily(e) {
            this._fontFamily !== e && (this._fontFamily = e, this.domNode.style.fontFamily = this._fontFamily)
        }
        setFontWeight(e) {
            this._fontWeight !== e && (this._fontWeight = e, this.domNode.style.fontWeight = this._fontWeight)
        }
        setFontSize(e) {
            const t = Ye(e);
            this._fontSize !== t && (this._fontSize = t, this.domNode.style.fontSize = this._fontSize)
        }
        setFontStyle(e) {
            this._fontStyle !== e && (this._fontStyle = e, this.domNode.style.fontStyle = this._fontStyle)
        }
        setFontFeatureSettings(e) {
            this._fontFeatureSettings !== e && (this._fontFeatureSettings = e, this.domNode.style.fontFeatureSettings = this._fontFeatureSettings)
        }
        setFontVariationSettings(e) {
            this._fontVariationSettings !== e && (this._fontVariationSettings = e, this.domNode.style.fontVariationSettings = this._fontVariationSettings)
        }
        setTextDecoration(e) {
            this._textDecoration !== e && (this._textDecoration = e, this.domNode.style.textDecoration = this._textDecoration)
        }
        setLineHeight(e) {
            const t = Ye(e);
            this._lineHeight !== t && (this._lineHeight = t, this.domNode.style.lineHeight = this._lineHeight)
        }
        setLetterSpacing(e) {
            const t = Ye(e);
            this._letterSpacing !== t && (this._letterSpacing = t, this.domNode.style.letterSpacing = this._letterSpacing)
        }
        setClassName(e) {
            this._className !== e && (this._className = e, this.domNode.className = this._className)
        }
        toggleClassName(e, t) {
            this.domNode.classList.toggle(e, t), this._className = this.domNode.className
        }
        setDisplay(e) {
            this._display !== e && (this._display = e, this.domNode.style.display = this._display)
        }
        setPosition(e) {
            this._position !== e && (this._position = e, this.domNode.style.position = this._position)
        }
        setVisibility(e) {
            this._visibility !== e && (this._visibility = e, this.domNode.style.visibility = this._visibility)
        }
        setColor(e) {
            this._color !== e && (this._color = e, this.domNode.style.color = this._color)
        }
        setBackgroundColor(e) {
            this._backgroundColor !== e && (this._backgroundColor = e, this.domNode.style.backgroundColor = this._backgroundColor)
        }
        setLayerHinting(e) {
            this._layerHint !== e && (this._layerHint = e, this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "")
        }
        setBoxShadow(e) {
            this._boxShadow !== e && (this._boxShadow = e, this.domNode.style.boxShadow = e)
        }
        setContain(e) {
            this._contain !== e && (this._contain = e, this.domNode.style.contain = this._contain)
        }
        setAttribute(e, t) {
            this.domNode.setAttribute(e, t)
        }
        removeAttribute(e) {
            this.domNode.removeAttribute(e)
        }
        appendChild(e) {
            this.domNode.appendChild(e.domNode)
        }
        removeChild(e) {
            this.domNode.removeChild(e.domNode)
        }
    };

function Ye(e) {
    return typeof e == "number" ? `${e}px` : e
}

function Is(e) {
    return new Q0(e)
}
var Fh = class {
        constructor() {
            this._hooks = new Y, this._pointerMoveCallback = null, this._onStopCallback = null
        }
        dispose() {
            this.stopMonitoring(!1), this._hooks.dispose()
        }
        stopMonitoring(e, t) {
            if (!this.isMonitoring()) return;
            this._hooks.clear(), this._pointerMoveCallback = null;
            const i = this._onStopCallback;
            this._onStopCallback = null, e && i && i(t)
        }
        isMonitoring() {
            return !!this._pointerMoveCallback
        }
        startMonitoring(e, t, i, s, n) {
            this.isMonitoring() && this.stopMonitoring(!1), this._pointerMoveCallback = s, this._onStopCallback = n;
            let r = e;
            try {
                e.setPointerCapture(t), this._hooks.add(de(() => {
                    try {
                        e.releasePointerCapture(t)
                    } catch {}
                }))
            } catch {
                r = re(e)
            }
            this._hooks.add(O(r, X.POINTER_MOVE, o => {
                if (o.buttons !== i) {
                    this.stopMonitoring(!0);
                    return
                }
                o.preventDefault(), this._pointerMoveCallback(o)
            })), this._hooks.add(O(r, X.POINTER_UP, o => this.stopMonitoring(!0)))
        }
    },
    fi = class extends q {
        onclick(e, t) {
            this._register(O(e, X.CLICK, i => t(new ii(re(e), i))))
        }
        onmousedown(e, t) {
            this._register(O(e, X.MOUSE_DOWN, i => t(new ii(re(e), i))))
        }
        onmouseover(e, t) {
            this._register(O(e, X.MOUSE_OVER, i => t(new ii(re(e), i))))
        }
        onmouseleave(e, t) {
            this._register(O(e, X.MOUSE_LEAVE, i => t(new ii(re(e), i))))
        }
        onkeydown(e, t) {
            this._register(O(e, X.KEY_DOWN, i => t(new Me(i))))
        }
        onkeyup(e, t) {
            this._register(O(e, X.KEY_UP, i => t(new Me(i))))
        }
        oninput(e, t) {
            this._register(O(e, X.INPUT, t))
        }
        onblur(e, t) {
            this._register(O(e, X.BLUR, t))
        }
        onfocus(e, t) {
            this._register(O(e, X.FOCUS, t))
        }
        onchange(e, t) {
            this._register(O(e, X.CHANGE, t))
        }
        ignoreGesture(e) {
            return Bn.ignoreTarget(e)
        }
    },
    $o = Object.create(null);

function l(e, t) {
    if (us(t)) {
        const i = $o[t];
        if (i === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
        t = i
    }
    return $o[e] = t, {
        id: e
    }
}

function J0() {
    return $o
}
var eg = {
        semantic: l("semantic", 62e3),
        githubCopilot: l("github-copilot", 62001),
        plusCircle: l("plus-circle", 62002),
        smileySad: l("smiley-sad", 62003),
        smileyHappy: l("smiley-happy", 62004),
        smileyMedium: l("smiley-medium", 62005),
        sparkleStrikethrough: l("sparkle-strikethrough", 62006),
        keyPlusSparkle: l("key-plus-sparkle", 62007),
        paperclip: l("paperclip", 60500),
        atSign: l("at-sign", 60501),
        image: l("image", 60502),
        logo: l("logo", 60503),
        sparkleTwo: l("sparkle-two", 60504),
        logoSlash: l("logo-slash", 60505),
        arrowsExpand: l("arrows-expand", 60506),
        arrowsContract: l("arrows-contract", 60507),
        expandDiffUp: l("expand-diff-up", 60508),
        expandDiffDown: l("expand-diff-down", 60509),
        add: l("add", 6e4),
        plus: l("plus", 6e4),
        gistNew: l("gist-new", 6e4),
        repoCreate: l("repo-create", 6e4),
        lightbulb: l("lightbulb", 60001),
        lightBulb: l("light-bulb", 60001),
        repo: l("repo", 60002),
        repoDelete: l("repo-delete", 60002),
        gistFork: l("gist-fork", 60003),
        repoForked: l("repo-forked", 60003),
        gitPullRequest: l("git-pull-request", 60004),
        gitPullRequestAbandoned: l("git-pull-request-abandoned", 60004),
        recordKeys: l("record-keys", 60005),
        keyboard: l("keyboard", 60005),
        tag: l("tag", 60006),
        gitPullRequestLabel: l("git-pull-request-label", 60006),
        tagAdd: l("tag-add", 60006),
        tagRemove: l("tag-remove", 60006),
        person: l("person", 60007),
        personFollow: l("person-follow", 60007),
        personOutline: l("person-outline", 60007),
        personFilled: l("person-filled", 60007),
        gitBranch: l("git-branch", 60008),
        gitBranchCreate: l("git-branch-create", 60008),
        gitBranchDelete: l("git-branch-delete", 60008),
        sourceControl: l("source-control", 60008),
        mirror: l("mirror", 60009),
        mirrorPublic: l("mirror-public", 60009),
        star: l("star", 60010),
        starAdd: l("star-add", 60010),
        starDelete: l("star-delete", 60010),
        starEmpty: l("star-empty", 60010),
        comment: l("comment", 60011),
        commentAdd: l("comment-add", 60011),
        alert: l("alert", 60012),
        warning: l("warning", 60012),
        search: l("search", 60013),
        searchSave: l("search-save", 60013),
        logOut: l("log-out", 60014),
        signOut: l("sign-out", 60014),
        logIn: l("log-in", 60015),
        signIn: l("sign-in", 60015),
        eye: l("eye", 60016),
        eyeUnwatch: l("eye-unwatch", 60016),
        eyeWatch: l("eye-watch", 60016),
        circleFilled: l("circle-filled", 60017),
        primitiveDot: l("primitive-dot", 60017),
        closeDirty: l("close-dirty", 60017),
        debugBreakpoint: l("debug-breakpoint", 60017),
        debugBreakpointDisabled: l("debug-breakpoint-disabled", 60017),
        debugHint: l("debug-hint", 60017),
        terminalDecorationSuccess: l("terminal-decoration-success", 60017),
        primitiveSquare: l("primitive-square", 60018),
        edit: l("edit", 60019),
        pencil: l("pencil", 60019),
        info: l("info", 60020),
        issueOpened: l("issue-opened", 60020),
        gistPrivate: l("gist-private", 60021),
        gitForkPrivate: l("git-fork-private", 60021),
        lock: l("lock", 60021),
        mirrorPrivate: l("mirror-private", 60021),
        close: l("close", 60022),
        removeClose: l("remove-close", 60022),
        x: l("x", 60022),
        repoSync: l("repo-sync", 60023),
        sync: l("sync", 60023),
        clone: l("clone", 60024),
        desktopDownload: l("desktop-download", 60024),
        beaker: l("beaker", 60025),
        microscope: l("microscope", 60025),
        vm: l("vm", 60026),
        deviceDesktop: l("device-desktop", 60026),
        file: l("file", 60027),
        fileText: l("file-text", 60027),
        more: l("more", 60028),
        ellipsis: l("ellipsis", 60028),
        kebabHorizontal: l("kebab-horizontal", 60028),
        mailReply: l("mail-reply", 60029),
        reply: l("reply", 60029),
        organization: l("organization", 60030),
        organizationFilled: l("organization-filled", 60030),
        organizationOutline: l("organization-outline", 60030),
        newFile: l("new-file", 60031),
        fileAdd: l("file-add", 60031),
        newFolder: l("new-folder", 60032),
        fileDirectoryCreate: l("file-directory-create", 60032),
        trash: l("trash", 60033),
        trashcan: l("trashcan", 60033),
        history: l("history", 60034),
        clock: l("clock", 60034),
        folder: l("folder", 60035),
        fileDirectory: l("file-directory", 60035),
        symbolFolder: l("symbol-folder", 60035),
        logoGithub: l("logo-github", 60036),
        markGithub: l("mark-github", 60036),
        github: l("github", 60036),
        terminal: l("terminal", 60037),
        console: l("console", 60037),
        repl: l("repl", 60037),
        zap: l("zap", 60038),
        symbolEvent: l("symbol-event", 60038),
        error: l("error", 60039),
        stop: l("stop", 60039),
        variable: l("variable", 60040),
        symbolVariable: l("symbol-variable", 60040),
        array: l("array", 60042),
        symbolArray: l("symbol-array", 60042),
        symbolModule: l("symbol-module", 60043),
        symbolPackage: l("symbol-package", 60043),
        symbolNamespace: l("symbol-namespace", 60043),
        symbolObject: l("symbol-object", 60043),
        symbolMethod: l("symbol-method", 60044),
        symbolFunction: l("symbol-function", 60044),
        symbolConstructor: l("symbol-constructor", 60044),
        symbolBoolean: l("symbol-boolean", 60047),
        symbolNull: l("symbol-null", 60047),
        symbolNumeric: l("symbol-numeric", 60048),
        symbolNumber: l("symbol-number", 60048),
        symbolStructure: l("symbol-structure", 60049),
        symbolStruct: l("symbol-struct", 60049),
        symbolParameter: l("symbol-parameter", 60050),
        symbolTypeParameter: l("symbol-type-parameter", 60050),
        symbolKey: l("symbol-key", 60051),
        symbolText: l("symbol-text", 60051),
        symbolReference: l("symbol-reference", 60052),
        goToFile: l("go-to-file", 60052),
        symbolEnum: l("symbol-enum", 60053),
        symbolValue: l("symbol-value", 60053),
        symbolRuler: l("symbol-ruler", 60054),
        symbolUnit: l("symbol-unit", 60054),
        activateBreakpoints: l("activate-breakpoints", 60055),
        archive: l("archive", 60056),
        arrowBoth: l("arrow-both", 60057),
        arrowDown: l("arrow-down", 60058),
        arrowLeft: l("arrow-left", 60059),
        arrowRight: l("arrow-right", 60060),
        arrowSmallDown: l("arrow-small-down", 60061),
        arrowSmallLeft: l("arrow-small-left", 60062),
        arrowSmallRight: l("arrow-small-right", 60063),
        arrowSmallUp: l("arrow-small-up", 60064),
        arrowUp: l("arrow-up", 60065),
        bell: l("bell", 60066),
        bold: l("bold", 60067),
        book: l("book", 60068),
        bookmark: l("bookmark", 60069),
        debugBreakpointConditionalUnverified: l("debug-breakpoint-conditional-unverified", 60070),
        debugBreakpointConditional: l("debug-breakpoint-conditional", 60071),
        debugBreakpointConditionalDisabled: l("debug-breakpoint-conditional-disabled", 60071),
        debugBreakpointDataUnverified: l("debug-breakpoint-data-unverified", 60072),
        debugBreakpointData: l("debug-breakpoint-data", 60073),
        debugBreakpointDataDisabled: l("debug-breakpoint-data-disabled", 60073),
        debugBreakpointLogUnverified: l("debug-breakpoint-log-unverified", 60074),
        debugBreakpointLog: l("debug-breakpoint-log", 60075),
        debugBreakpointLogDisabled: l("debug-breakpoint-log-disabled", 60075),
        briefcase: l("briefcase", 60076),
        broadcast: l("broadcast", 60077),
        browser: l("browser", 60078),
        bug: l("bug", 60079),
        calendar: l("calendar", 60080),
        caseSensitive: l("case-sensitive", 60081),
        check: l("check", 60082),
        checklist: l("checklist", 60083),
        chevronDown: l("chevron-down", 60084),
        chevronLeft: l("chevron-left", 60085),
        chevronRight: l("chevron-right", 60086),
        chevronUp: l("chevron-up", 60087),
        chromeClose: l("chrome-close", 60088),
        chromeMaximize: l("chrome-maximize", 60089),
        chromeMinimize: l("chrome-minimize", 60090),
        chromeRestore: l("chrome-restore", 60091),
        circleOutline: l("circle-outline", 60092),
        circle: l("circle", 60092),
        debugBreakpointUnverified: l("debug-breakpoint-unverified", 60092),
        terminalDecorationIncomplete: l("terminal-decoration-incomplete", 60092),
        circleSlash: l("circle-slash", 60093),
        circuitBoard: l("circuit-board", 60094),
        clearAll: l("clear-all", 60095),
        clippy: l("clippy", 60096),
        closeAll: l("close-all", 60097),
        cloudDownload: l("cloud-download", 60098),
        cloudUpload: l("cloud-upload", 60099),
        code: l("code", 60100),
        collapseAll: l("collapse-all", 60101),
        colorMode: l("color-mode", 60102),
        commentDiscussion: l("comment-discussion", 60103),
        creditCard: l("credit-card", 60105),
        dash: l("dash", 60108),
        dashboard: l("dashboard", 60109),
        database: l("database", 60110),
        debugContinue: l("debug-continue", 60111),
        debugDisconnect: l("debug-disconnect", 60112),
        debugPause: l("debug-pause", 60113),
        debugRestart: l("debug-restart", 60114),
        debugStart: l("debug-start", 60115),
        debugStepInto: l("debug-step-into", 60116),
        debugStepOut: l("debug-step-out", 60117),
        debugStepOver: l("debug-step-over", 60118),
        debugStop: l("debug-stop", 60119),
        debug: l("debug", 60120),
        deviceCameraVideo: l("device-camera-video", 60121),
        deviceCamera: l("device-camera", 60122),
        deviceMobile: l("device-mobile", 60123),
        diffAdded: l("diff-added", 60124),
        diffIgnored: l("diff-ignored", 60125),
        diffModified: l("diff-modified", 60126),
        diffRemoved: l("diff-removed", 60127),
        diffRenamed: l("diff-renamed", 60128),
        diff: l("diff", 60129),
        diffSidebyside: l("diff-sidebyside", 60129),
        discard: l("discard", 60130),
        editorLayout: l("editor-layout", 60131),
        emptyWindow: l("empty-window", 60132),
        exclude: l("exclude", 60133),
        extensions: l("extensions", 60134),
        eyeClosed: l("eye-closed", 60135),
        fileBinary: l("file-binary", 60136),
        fileCode: l("file-code", 60137),
        fileMedia: l("file-media", 60138),
        filePdf: l("file-pdf", 60139),
        fileSubmodule: l("file-submodule", 60140),
        fileSymlinkDirectory: l("file-symlink-directory", 60141),
        fileSymlinkFile: l("file-symlink-file", 60142),
        fileZip: l("file-zip", 60143),
        files: l("files", 60144),
        filter: l("filter", 60145),
        flame: l("flame", 60146),
        foldDown: l("fold-down", 60147),
        foldUp: l("fold-up", 60148),
        fold: l("fold", 60149),
        folderActive: l("folder-active", 60150),
        folderOpened: l("folder-opened", 60151),
        gear: l("gear", 60152),
        gift: l("gift", 60153),
        gistSecret: l("gist-secret", 60154),
        gist: l("gist", 60155),
        gitCommit: l("git-commit", 60156),
        gitCompare: l("git-compare", 60157),
        compareChanges: l("compare-changes", 60157),
        gitMerge: l("git-merge", 60158),
        githubAction: l("github-action", 60159),
        githubAlt: l("github-alt", 60160),
        globe: l("globe", 60161),
        grabber: l("grabber", 60162),
        graph: l("graph", 60163),
        gripper: l("gripper", 60164),
        heart: l("heart", 60165),
        home: l("home", 60166),
        horizontalRule: l("horizontal-rule", 60167),
        hubot: l("hubot", 60168),
        inbox: l("inbox", 60169),
        issueReopened: l("issue-reopened", 60171),
        issues: l("issues", 60172),
        italic: l("italic", 60173),
        jersey: l("jersey", 60174),
        json: l("json", 60175),
        kebabVertical: l("kebab-vertical", 60176),
        key: l("key", 60177),
        law: l("law", 60178),
        lightbulbAutofix: l("lightbulb-autofix", 60179),
        linkExternal: l("link-external", 60180),
        link: l("link", 60181),
        listOrdered: l("list-ordered", 60182),
        listUnordered: l("list-unordered", 60183),
        liveShare: l("live-share", 60184),
        loading: l("loading", 60185),
        location: l("location", 60186),
        mailRead: l("mail-read", 60187),
        mail: l("mail", 60188),
        markdown: l("markdown", 60189),
        megaphone: l("megaphone", 60190),
        mention: l("mention", 60191),
        milestone: l("milestone", 60192),
        gitPullRequestMilestone: l("git-pull-request-milestone", 60192),
        mortarBoard: l("mortar-board", 60193),
        move: l("move", 60194),
        multipleWindows: l("multiple-windows", 60195),
        mute: l("mute", 60196),
        noNewline: l("no-newline", 60197),
        note: l("note", 60198),
        octoface: l("octoface", 60199),
        openPreview: l("open-preview", 60200),
        package: l("package", 60201),
        paintcan: l("paintcan", 60202),
        pin: l("pin", 60203),
        play: l("play", 60204),
        run: l("run", 60204),
        plug: l("plug", 60205),
        preserveCase: l("preserve-case", 60206),
        preview: l("preview", 60207),
        project: l("project", 60208),
        pulse: l("pulse", 60209),
        question: l("question", 60210),
        quote: l("quote", 60211),
        radioTower: l("radio-tower", 60212),
        reactions: l("reactions", 60213),
        references: l("references", 60214),
        refresh: l("refresh", 60215),
        regex: l("regex", 60216),
        remoteExplorer: l("remote-explorer", 60217),
        remote: l("remote", 60218),
        remove: l("remove", 60219),
        replaceAll: l("replace-all", 60220),
        replace: l("replace", 60221),
        repoClone: l("repo-clone", 60222),
        repoForcePush: l("repo-force-push", 60223),
        repoPull: l("repo-pull", 60224),
        repoPush: l("repo-push", 60225),
        report: l("report", 60226),
        requestChanges: l("request-changes", 60227),
        rocket: l("rocket", 60228),
        rootFolderOpened: l("root-folder-opened", 60229),
        rootFolder: l("root-folder", 60230),
        rss: l("rss", 60231),
        ruby: l("ruby", 60232),
        saveAll: l("save-all", 60233),
        saveAs: l("save-as", 60234),
        save: l("save", 60235),
        screenFull: l("screen-full", 60236),
        screenNormal: l("screen-normal", 60237),
        searchStop: l("search-stop", 60238),
        server: l("server", 60240),
        settingsGear: l("settings-gear", 60241),
        settings: l("settings", 60242),
        shield: l("shield", 60243),
        smiley: l("smiley", 60244),
        sortPrecedence: l("sort-precedence", 60245),
        splitHorizontal: l("split-horizontal", 60246),
        splitVertical: l("split-vertical", 60247),
        squirrel: l("squirrel", 60248),
        starFull: l("star-full", 60249),
        starHalf: l("star-half", 60250),
        symbolClass: l("symbol-class", 60251),
        symbolColor: l("symbol-color", 60252),
        symbolConstant: l("symbol-constant", 60253),
        symbolEnumMember: l("symbol-enum-member", 60254),
        symbolField: l("symbol-field", 60255),
        symbolFile: l("symbol-file", 60256),
        symbolInterface: l("symbol-interface", 60257),
        symbolKeyword: l("symbol-keyword", 60258),
        symbolMisc: l("symbol-misc", 60259),
        symbolOperator: l("symbol-operator", 60260),
        symbolProperty: l("symbol-property", 60261),
        wrench: l("wrench", 60261),
        wrenchSubaction: l("wrench-subaction", 60261),
        symbolSnippet: l("symbol-snippet", 60262),
        tasklist: l("tasklist", 60263),
        telescope: l("telescope", 60264),
        textSize: l("text-size", 60265),
        threeBars: l("three-bars", 60266),
        thumbsdown: l("thumbsdown", 60267),
        thumbsup: l("thumbsup", 60268),
        tools: l("tools", 60269),
        triangleDown: l("triangle-down", 60270),
        triangleLeft: l("triangle-left", 60271),
        triangleRight: l("triangle-right", 60272),
        triangleUp: l("triangle-up", 60273),
        twitter: l("twitter", 60274),
        unfold: l("unfold", 60275),
        unlock: l("unlock", 60276),
        unmute: l("unmute", 60277),
        unverified: l("unverified", 60278),
        verified: l("verified", 60279),
        versions: l("versions", 60280),
        vmActive: l("vm-active", 60281),
        vmOutline: l("vm-outline", 60282),
        vmRunning: l("vm-running", 60283),
        watch: l("watch", 60284),
        whitespace: l("whitespace", 60285),
        wholeWord: l("whole-word", 60286),
        window: l("window", 60287),
        wordWrap: l("word-wrap", 60288),
        zoomIn: l("zoom-in", 60289),
        zoomOut: l("zoom-out", 60290),
        listFilter: l("list-filter", 60291),
        listFlat: l("list-flat", 60292),
        listSelection: l("list-selection", 60293),
        selection: l("selection", 60293),
        listTree: l("list-tree", 60294),
        debugBreakpointFunctionUnverified: l("debug-breakpoint-function-unverified", 60295),
        debugBreakpointFunction: l("debug-breakpoint-function", 60296),
        debugBreakpointFunctionDisabled: l("debug-breakpoint-function-disabled", 60296),
        debugStackframeActive: l("debug-stackframe-active", 60297),
        circleSmallFilled: l("circle-small-filled", 60298),
        debugStackframeDot: l("debug-stackframe-dot", 60298),
        terminalDecorationMark: l("terminal-decoration-mark", 60298),
        debugStackframe: l("debug-stackframe", 60299),
        debugStackframeFocused: l("debug-stackframe-focused", 60299),
        debugBreakpointUnsupported: l("debug-breakpoint-unsupported", 60300),
        symbolString: l("symbol-string", 60301),
        debugReverseContinue: l("debug-reverse-continue", 60302),
        debugStepBack: l("debug-step-back", 60303),
        debugRestartFrame: l("debug-restart-frame", 60304),
        debugAlt: l("debug-alt", 60305),
        callIncoming: l("call-incoming", 60306),
        callOutgoing: l("call-outgoing", 60307),
        menu: l("menu", 60308),
        expandAll: l("expand-all", 60309),
        feedback: l("feedback", 60310),
        gitPullRequestReviewer: l("git-pull-request-reviewer", 60310),
        groupByRefType: l("group-by-ref-type", 60311),
        ungroupByRefType: l("ungroup-by-ref-type", 60312),
        account: l("account", 60313),
        gitPullRequestAssignee: l("git-pull-request-assignee", 60313),
        bellDot: l("bell-dot", 60314),
        debugConsole: l("debug-console", 60315),
        library: l("library", 60316),
        output: l("output", 60317),
        runAll: l("run-all", 60318),
        syncIgnored: l("sync-ignored", 60319),
        pinned: l("pinned", 60320),
        githubInverted: l("github-inverted", 60321),
        serverProcess: l("server-process", 60322),
        serverEnvironment: l("server-environment", 60323),
        pass: l("pass", 60324),
        issueClosed: l("issue-closed", 60324),
        stopCircle: l("stop-circle", 60325),
        playCircle: l("play-circle", 60326),
        record: l("record", 60327),
        debugAltSmall: l("debug-alt-small", 60328),
        vmConnect: l("vm-connect", 60329),
        cloud: l("cloud", 60330),
        merge: l("merge", 60331),
        export: l("export", 60332),
        graphLeft: l("graph-left", 60333),
        magnet: l("magnet", 60334),
        notebook: l("notebook", 60335),
        redo: l("redo", 60336),
        checkAll: l("check-all", 60337),
        pinnedDirty: l("pinned-dirty", 60338),
        passFilled: l("pass-filled", 60339),
        circleLargeFilled: l("circle-large-filled", 60340),
        circleLarge: l("circle-large", 60341),
        circleLargeOutline: l("circle-large-outline", 60341),
        combine: l("combine", 60342),
        gather: l("gather", 60342),
        table: l("table", 60343),
        variableGroup: l("variable-group", 60344),
        typeHierarchy: l("type-hierarchy", 60345),
        typeHierarchySub: l("type-hierarchy-sub", 60346),
        typeHierarchySuper: l("type-hierarchy-super", 60347),
        gitPullRequestCreate: l("git-pull-request-create", 60348),
        runAbove: l("run-above", 60349),
        runBelow: l("run-below", 60350),
        notebookTemplate: l("notebook-template", 60351),
        debugRerun: l("debug-rerun", 60352),
        workspaceTrusted: l("workspace-trusted", 60353),
        workspaceUntrusted: l("workspace-untrusted", 60354),
        workspaceUnknown: l("workspace-unknown", 60355),
        terminalCmd: l("terminal-cmd", 60356),
        terminalDebian: l("terminal-debian", 60357),
        terminalLinux: l("terminal-linux", 60358),
        terminalPowershell: l("terminal-powershell", 60359),
        terminalTmux: l("terminal-tmux", 60360),
        terminalUbuntu: l("terminal-ubuntu", 60361),
        terminalBash: l("terminal-bash", 60362),
        arrowSwap: l("arrow-swap", 60363),
        copy: l("copy", 60364),
        personAdd: l("person-add", 60365),
        filterFilled: l("filter-filled", 60366),
        wand: l("wand", 60367),
        debugLineByLine: l("debug-line-by-line", 60368),
        inspect: l("inspect", 60369),
        layers: l("layers", 60370),
        layersDot: l("layers-dot", 60371),
        layersActive: l("layers-active", 60372),
        compass: l("compass", 60373),
        compassDot: l("compass-dot", 60374),
        compassActive: l("compass-active", 60375),
        azure: l("azure", 60376),
        issueDraft: l("issue-draft", 60377),
        gitPullRequestClosed: l("git-pull-request-closed", 60378),
        gitPullRequestDraft: l("git-pull-request-draft", 60379),
        debugAll: l("debug-all", 60380),
        debugCoverage: l("debug-coverage", 60381),
        runErrors: l("run-errors", 60382),
        folderLibrary: l("folder-library", 60383),
        debugContinueSmall: l("debug-continue-small", 60384),
        beakerStop: l("beaker-stop", 60385),
        graphLine: l("graph-line", 60386),
        graphScatter: l("graph-scatter", 60387),
        pieChart: l("pie-chart", 60388),
        bracket: l("bracket", 60175),
        bracketDot: l("bracket-dot", 60389),
        bracketError: l("bracket-error", 60390),
        lockSmall: l("lock-small", 60391),
        azureDevops: l("azure-devops", 60392),
        verifiedFilled: l("verified-filled", 60393),
        newline: l("newline", 60394),
        layout: l("layout", 60395),
        layoutActivitybarLeft: l("layout-activitybar-left", 60396),
        layoutActivitybarRight: l("layout-activitybar-right", 60397),
        layoutPanelLeft: l("layout-panel-left", 60398),
        layoutPanelCenter: l("layout-panel-center", 60399),
        layoutPanelJustify: l("layout-panel-justify", 60400),
        layoutPanelRight: l("layout-panel-right", 60401),
        layoutPanel: l("layout-panel", 60402),
        layoutSidebarLeft: l("layout-sidebar-left", 60403),
        layoutSidebarRight: l("layout-sidebar-right", 60404),
        layoutStatusbar: l("layout-statusbar", 60405),
        layoutMenubar: l("layout-menubar", 60406),
        layoutCentered: l("layout-centered", 60407),
        target: l("target", 60408),
        indent: l("indent", 60409),
        recordSmall: l("record-small", 60410),
        errorSmall: l("error-small", 60411),
        terminalDecorationError: l("terminal-decoration-error", 60411),
        arrowCircleDown: l("arrow-circle-down", 60412),
        arrowCircleLeft: l("arrow-circle-left", 60413),
        arrowCircleRight: l("arrow-circle-right", 60414),
        arrowCircleUp: l("arrow-circle-up", 60415),
        layoutSidebarRightOff: l("layout-sidebar-right-off", 60416),
        layoutPanelOff: l("layout-panel-off", 60417),
        layoutSidebarLeftOff: l("layout-sidebar-left-off", 60418),
        blank: l("blank", 60419),
        heartFilled: l("heart-filled", 60420),
        map: l("map", 60421),
        mapHorizontal: l("map-horizontal", 60421),
        foldHorizontal: l("fold-horizontal", 60421),
        mapFilled: l("map-filled", 60422),
        mapHorizontalFilled: l("map-horizontal-filled", 60422),
        foldHorizontalFilled: l("fold-horizontal-filled", 60422),
        circleSmall: l("circle-small", 60423),
        bellSlash: l("bell-slash", 60424),
        bellSlashDot: l("bell-slash-dot", 60425),
        commentUnresolved: l("comment-unresolved", 60426),
        gitPullRequestGoToChanges: l("git-pull-request-go-to-changes", 60427),
        gitPullRequestNewChanges: l("git-pull-request-new-changes", 60428),
        searchFuzzy: l("search-fuzzy", 60429),
        commentDraft: l("comment-draft", 60430),
        send: l("send", 60431),
        sparkle: l("sparkle", 60432),
        insert: l("insert", 60433),
        mic: l("mic", 60434),
        thumbsdownFilled: l("thumbsdown-filled", 60435),
        thumbsupFilled: l("thumbsup-filled", 60436),
        coffee: l("coffee", 60437),
        snake: l("snake", 60438),
        game: l("game", 60439),
        vr: l("vr", 60440),
        chip: l("chip", 60441),
        piano: l("piano", 60442),
        music: l("music", 60443),
        micFilled: l("mic-filled", 60444),
        repoFetch: l("repo-fetch", 60445),
        copilot: l("copilot", 60446),
        lightbulbSparkle: l("lightbulb-sparkle", 60447),
        robot: l("robot", 60448),
        sparkleFilled: l("sparkle-filled", 60449),
        diffSingle: l("diff-single", 60450),
        diffMultiple: l("diff-multiple", 60451),
        surroundWith: l("surround-with", 60452),
        share: l("share", 60453),
        gitStash: l("git-stash", 60454),
        gitStashApply: l("git-stash-apply", 60455),
        gitStashPop: l("git-stash-pop", 60456),
        vscode: l("vscode", 60457),
        vscodeInsiders: l("vscode-insiders", 60458),
        codeOss: l("code-oss", 60459),
        runCoverage: l("run-coverage", 60460),
        runAllCoverage: l("run-all-coverage", 60461),
        coverage: l("coverage", 60462),
        githubProject: l("github-project", 60463),
        mapVertical: l("map-vertical", 60464),
        foldVertical: l("fold-vertical", 60464),
        mapVerticalFilled: l("map-vertical-filled", 60465),
        foldVerticalFilled: l("fold-vertical-filled", 60465),
        goToSearch: l("go-to-search", 60466),
        percentage: l("percentage", 60467),
        sortPercentage: l("sort-percentage", 60467),
        attach: l("attach", 60468),
        goToEditingSession: l("go-to-editing-session", 60469),
        editSession: l("edit-session", 60470),
        codeReview: l("code-review", 60471),
        copilotWarning: l("copilot-warning", 60472),
        python: l("python", 60473),
        copilotLarge: l("copilot-large", 60474),
        copilotWarningLarge: l("copilot-warning-large", 60475),
        keyboardTab: l("keyboard-tab", 60476),
        copilotBlocked: l("copilot-blocked", 60477),
        copilotNotConnected: l("copilot-not-connected", 60478),
        flag: l("flag", 60479),
        lightbulbEmpty: l("lightbulb-empty", 60480),
        symbolMethodArrow: l("symbol-method-arrow", 60481),
        copilotUnavailable: l("copilot-unavailable", 60482),
        repoPinned: l("repo-pinned", 60483),
        keyboardTabAbove: l("keyboard-tab-above", 60484),
        keyboardTabBelow: l("keyboard-tab-below", 60485),
        gitPullRequestDone: l("git-pull-request-done", 60486),
        mcp: l("mcp", 60487),
        extensionsLarge: l("extensions-large", 60488),
        layoutPanelDock: l("layout-panel-dock", 60489),
        layoutSidebarLeftDock: l("layout-sidebar-left-dock", 60490),
        layoutSidebarRightDock: l("layout-sidebar-right-dock", 60491),
        terminalTwo: l("terminal-two", 60800),
        checkTwo: l("check-two", 60801),
        xTwo: l("x-two", 60802),
        expander: l("expander", 60803),
        restore: l("restore", 60804),
        pinTwo: l("pin-two", 60805),
        stopTwo: l("stop-two", 60806),
        brain: l("brain", 60807),
        magnifyingGlass: l("magnifying-glass", 60808),
        imageTwo: l("image-two", 60809),
        microphone: l("microphone", 60810),
        submit: l("submit", 60811),
        running: l("running", 60812),
        fileAddTwo: l("file-add-two", 60813),
        infinity: l("infinity", 60814),
        editTwo: l("edit-two", 60815),
        stopThree: l("stop-three", 60816),
        warningTwo: l("warning-two", 60817),
        arrowLeftTwo: l("arrow-left-two", 60818),
        redoTwo: l("redo-two", 60819),
        infoTwo: l("info-two", 60820),
        chat: l("chat", 60821),
        thumbsDown: l("thumbs-down", 60822),
        thumbsUp: l("thumbs-up", 60823),
        thumbsDownFilled: l("thumbs-down-filled", 60824),
        thumbsUpFilled: l("thumbs-up-filled", 60825),
        copyTwo: l("copy-two", 60826),
        ellipsisTwo: l("ellipsis-two", 60827),
        eyeTwo: l("eye-two", 60828),
        globeTwo: l("globe-two", 60829),
        reload: l("reload", 60830),
        folderTwo: l("folder-two", 60831),
        eraser: l("eraser", 60832),
        swirlSparkle: l("swirl-sparkle", 60833),
        sendTwo: l("send-two", 60834),
        inboxTwo: l("inbox-two", 60835),
        fileTwo: l("file-two", 60836),
        list: l("list", 60837),
        calendarTwo: l("calendar-two", 60838),
        openNotebook: l("open-notebook", 60839),
        paperWords: l("paper-words", 60840),
        mortarboard: l("mortarboard", 60841),
        lightning: l("lightning", 60842),
        hammer: l("hammer", 60843),
        keyboardTwo: l("keyboard-two", 60844),
        arrowUpTwo: l("arrow-up-two", 60845),
        import: l("import", 60846),
        targetTwo: l("target-two", 60847),
        tab: l("tab", 60848),
        magic: l("magic", 60849),
        cloneTwo: l("clone-two", 60850),
        brush: l("brush", 60851),
        branch: l("branch", 60852),
        addTwo: l("add-two", 60853),
        historyTwo: l("history-two", 60854),
        cloudTwo: l("cloud-two", 60855),
        review: l("review", 60856),
        plusSquare: l("plus-square", 60857),
        checkCircled: l("check-circled", 60858),
        dottedCircle: l("dotted-circle", 60859),
        warnCircle: l("warn-circle", 60860),
        downLocalMachine: l("down-local-machine", 60861),
        mergeUpwards: l("merge-upwards", 60862),
        asterisk: l("asterisk", 60863),
        time: l("time", 60864),
        arrowUpRight: l("arrow-up-right", 60865),
        arrowUpRightSquare: l("arrow-up-right-square", 60866),
        bubbleAndPencil: l("bubble-and-pencil", 60867),
        downloadOnSquare: l("download-on-square", 60868),
        shippingBox: l("shipping-box", 60869),
        chevronForwardDotted: l("chevron-forward-dotted", 60870),
        cylinderSplit: l("cylinder-split", 60871),
        cubeNodes: l("cube-nodes", 60872),
        clipboardList: l("clipboard-list", 60873),
        circleShine: l("circle-shine", 60874),
        chevronUpDown: l("chevron-up-down", 60875),
        cube: l("cube", 60876),
        telecom: l("telecom", 60877),
        micTwo: l("mic-two", 60878),
        hourglass: l("hourglass", 60879),
        todos: l("todos", 60880),
        hourglassTwo: l("hourglass-two", 60881),
        laptop: l("laptop", 60882),
        grep: l("grep", 60883),
        chevronDblLeft: l("chevron-dbl-left", 60884),
        chevronDblRight: l("chevron-dbl-right", 62237),
        squareAndPencil: l("square-and-pencil", 60885),
        doubleTerminal: l("double-terminal", 60886),
        sidebarLeft: l("sidebar-left", 60887),
        filesTwo: l("files-two", 60888),
        cursor: l("cursor", 60889),
        testIcon3: l("test-icon-3", 60890),
        testIcon4: l("test-icon-4", 60891),
        testIconic: l("test-iconic", 60892),
        compose: l("compose", 60893),
        composeTwo: l("compose-two", 60894),
        cursorOutlineTransparent: l("cursor-outline-transparent", 60895),
        cursorFrame: l("cursor-frame", 60896),
        cursorFrames: l("cursor-frames", 60897),
        cursorBigger: l("cursor-bigger", 60898),
        cursorBiggest: l("cursor-biggest", 60899),
        terminalFilled: l("terminal-filled", 60900),
        rectangleDashed: l("rectangle-dashed", 60901),
        squareArrow: l("square-arrow", 60902),
        unfoldVertical: l("unfold-vertical", 60903),
        unfoldDashed: l("unfold-dashed", 60904),
        foldDashed: l("fold-dashed", 60905),
        playwright: l("playwright", 60906),
        searchSparkle: l("search-sparkle", 60496),
        settingsRound: l("settings-round", 60497),
        panelRounded: l("panel-rounded", 60498),
        fileList: l("file-list", 60499),
        rectangleArrow: l("rectangle-arrow", 60500),
        rectangleGlobe: l("rectangle-globe", 60501),
        rules: l("rules", 60502),
        squaresArrow: l("squares-arrow", 60504),
        bugbot: l("bugbot", 60505),
        thinking: l("thinking", 60506),
        splitDashed: l("split-dashed", 60507),
        splitPanel: l("split-panel", 60508),
        splitFile: l("split-file", 62008),
        splitDash: l("split-dash", 62009),
        panelExpand: l("panel-expand", 62010),
        panelCollapse: l("panel-collapse", 62011),
        chatQuestion: l("chat-question", 62012),
        branchDot: l("branch-dot", 62013),
        gitBranchDot: l("git-branch-dot", 62014),
        alignTop: l("align-top", 62023),
        alignHcenter: l("align-hcenter", 62024),
        alignVcenter: l("align-vcenter", 62025),
        alignBottom: l("align-bottom", 62026),
        alignRight: l("align-right", 62027),
        alignLeft: l("align-left", 62028),
        angle: l("angle", 62029),
        alignBottomfill: l("align-bottomfill", 62030),
        alignHcenterfill: l("align-hcenterfill", 62031),
        alignLeftfill: l("align-leftfill", 62032),
        alignRightfill: l("align-rightfill", 62033),
        alignTopfill: l("align-topfill", 62034),
        alignVcenterfill: l("align-vcenterfill", 62035),
        freeform: l("freeform", 62036),
        layoutGrid: l("layout-grid", 62037),
        corners: l("corners", 62038),
        opacity: l("opacity", 62039),
        maximize: l("maximize", 62040),
        minimize: l("minimize", 62041),
        panelBottomon: l("panel-bottomon", 62042),
        panelBottomoff: l("panel-bottomoff", 62043),
        panelFrame: l("panel-frame", 62044),
        panelBottomOverlay: l("panel-bottom-overlay", 62045),
        panelRightOverlay: l("panel-right-overlay", 62046),
        panelLeftOverlay: l("panel-left-overlay", 62047),
        chatRounded: l("chat-rounded", 62048),
        fileRounded: l("file-rounded", 62049),
        judge: l("judge", 62050),
        minmize: l("minmize", 62051),
        borderAll: l("border-all", 62052),
        borderBottom: l("border-bottom", 62053),
        borderLeft: l("border-left", 62054),
        borderRight: l("border-right", 62055),
        borderTop: l("border-top", 62056),
        rotate: l("rotate", 62057),
        flipVertical: l("flip-vertical", 62058),
        flipHorizontal: l("flip-horizontal", 62059),
        padVertical: l("pad-vertical", 62060),
        padHorizontal: l("pad-horizontal", 62061),
        padTop: l("pad-top", 62062),
        padLeft: l("pad-left", 62063),
        padRight: l("pad-right", 62064),
        padBottom: l("pad-bottom", 62065),
        weight: l("weight", 62066),
        padAll: l("pad-all", 62067),
        absolutePosition: l("absolute-position", 62068),
        minWidth: l("min-width", 62069),
        maxWidth: l("max-width", 62070),
        hug: l("hug", 62071),
        fixed: l("fixed", 62072),
        removeWidth: l("remove-width", 62073),
        fillWidth: l("fill-width", 62074),
        letterSpacing: l("letter-spacing", 62075),
        lineHeight: l("line-height", 62076),
        leftAlign: l("left-align", 62077),
        centerAlign: l("center-align", 62078),
        rightAlign: l("right-align", 62079),
        textTop: l("text-top", 62080),
        textCenter: l("text-center", 62081),
        textBottom: l("text-bottom", 62082),
        layerBlur: l("layer-blur", 62083),
        backgroundBlur: l("background-blur", 62084),
        cornerTl: l("corner-tl", 62085),
        cornerTr: l("corner-tr", 62086),
        cornerBl: l("corner-bl", 62087),
        cornerBr: l("corner-br", 62088),
        flowCol: l("flow-col", 62089),
        flowRow: l("flow-row", 62090),
        gap: l("gap", 62091),
        gridCol: l("grid-col", 62092),
        gridRow: l("grid-row", 62093),
        sun: l("sun", 62094),
        unlink: l("unlink", 62095),
        arrowFilled: l("arrow-filled", 62096)
    },
    tg = {
        dialogError: l("dialog-error", "error"),
        dialogWarning: l("dialog-warning", "warning"),
        dialogInfo: l("dialog-info", "info"),
        dialogClose: l("dialog-close", "close"),
        treeItemExpanded: l("tree-item-expanded", "chevron-down"),
        treeFilterOnTypeOn: l("tree-filter-on-type-on", "list-filter"),
        treeFilterOnTypeOff: l("tree-filter-on-type-off", "list-selection"),
        treeFilterClear: l("tree-filter-clear", "close"),
        treeItemLoading: l("tree-item-loading", "loading"),
        menuSelection: l("menu-selection", "check"),
        menuSubmenu: l("menu-submenu", "chevron-right"),
        menuBarMore: l("menubar-more", "more"),
        scrollbarButtonLeft: l("scrollbar-button-left", "triangle-left"),
        scrollbarButtonRight: l("scrollbar-button-right", "triangle-right"),
        scrollbarButtonUp: l("scrollbar-button-up", "triangle-up"),
        scrollbarButtonDown: l("scrollbar-button-down", "triangle-down"),
        toolBarMore: l("toolbar-more", "more"),
        quickInputBack: l("quick-input-back", "arrow-left"),
        dropDownButton: l("drop-down-button", 60084),
        symbolCustomColor: l("symbol-customcolor", 60252),
        exportIcon: l("export", 60332),
        workspaceUnspecified: l("workspace-unspecified", 60355),
        newLine: l("newline", 60394),
        gitFetch: l("git-fetch", 60445),
        lightbulbSparkleAutofix: l("lightbulb-sparkle-autofix", 60447),
        debugBreakpointPending: l("debug-breakpoint-pending", 60377),
        circles: l("circles", 62352)
    },
    me = {
        ...eg,
        ...tg
    },
    Uo;
(e => {
    function t(i) {
        return i && typeof i == "object" && typeof i.id == "string"
    }
    e.isThemeColor = t
})(Uo || (Uo = {}));
var ye;
(e => {
    e.iconNameSegment = "[A-Za-z0-9]+", e.iconNameExpression = "[A-Za-z0-9-]+", e.iconModifierExpression = "~[A-Za-z]+", e.iconNameCharacter = "[A-Za-z0-9~-]";
    const t = new RegExp(`^(${e.iconNameExpression})(${e.iconModifierExpression})?$`);

    function i(f) {
        if (!f) return i(me.error);
        const p = t.exec(f.id);
        if (!p) return i(me.error);
        const [, g, _] = p, y = ["codicon", "codicon-" + g];
        return _ && y.push("codicon-modifier-" + _.substring(1)), y
    }
    e.asClassNameArray = i;

    function s(f) {
        if (!f) return s(me.error);
        const p = t.exec(f.id);
        if (!p) return s(me.error);
        const [, g, _] = p;
        let y = `codicon codicon-${g}`;
        return _ && (y += ` codicon-modifier-${_.substring(1)}`), y
    }
    e.asClassName = s;

    function n(f) {
        if (!f) return n(me.error);
        const p = t.exec(f.id);
        if (!p) return n(me.error);
        const [, g, _] = p;
        let y = `.codicon.codicon-${g}`;
        return _ && (y += `.codicon-modifier-${_.substring(1)}`), y
    }
    e.asCSSSelector = n;

    function r(f) {
        return f && typeof f == "object" && typeof f.id == "string" && (typeof f.color > "u" || Uo.isThemeColor(f.color))
    }
    e.isThemeIcon = r;
    const o = new RegExp(`^\\$\\((${e.iconNameExpression}(?:${e.iconModifierExpression})?)\\)$`);

    function a(f) {
        const p = o.exec(f);
        if (!p) return;
        const [, g] = p;
        return {
            id: g
        }
    }
    e.fromString = a;

    function c(f) {
        return {
            id: f
        }
    }
    e.fromId = c;

    function h(f, p) {
        let g = f.id;
        const _ = g.lastIndexOf("~");
        return _ !== -1 && (g = g.substring(0, _)), p && (g = `${g}~${p}`), {
            id: g
        }
    }
    e.modify = h;

    function d(f) {
        const p = f.id.lastIndexOf("~");
        if (p !== -1) return f.id.substring(p + 1)
    }
    e.getModifier = d;

    function u(f, p) {
        return f.id === p.id && f.color?.id === p.color?.id
    }
    e.isEqual = u
})(ye || (ye = {}));
var Yi = 11,
    ig = class extends fi {
        constructor(e) {
            super(), this._onActivate = e.onActivate, this.bgDomNode = document.createElement("div"), this.bgDomNode.className = "arrow-background", this.bgDomNode.style.position = "absolute", this.bgDomNode.style.width = e.bgWidth + "px", this.bgDomNode.style.height = e.bgHeight + "px", typeof e.top < "u" && (this.bgDomNode.style.top = "0px"), typeof e.left < "u" && (this.bgDomNode.style.left = "0px"), typeof e.bottom < "u" && (this.bgDomNode.style.bottom = "0px"), typeof e.right < "u" && (this.bgDomNode.style.right = "0px"), this.domNode = document.createElement("div"), this.domNode.className = e.className, this.domNode.classList.add(...ye.asClassNameArray(e.icon)), this.domNode.style.position = "absolute", this.domNode.style.width = Yi + "px", this.domNode.style.height = Yi + "px", typeof e.top < "u" && (this.domNode.style.top = e.top + "px"), typeof e.left < "u" && (this.domNode.style.left = e.left + "px"), typeof e.bottom < "u" && (this.domNode.style.bottom = e.bottom + "px"), typeof e.right < "u" && (this.domNode.style.right = e.right + "px"), this._pointerMoveMonitor = this._register(new Fh), this._register(On(this.bgDomNode, X.POINTER_DOWN, t => this._arrowPointerDown(t))), this._register(On(this.domNode, X.POINTER_DOWN, t => this._arrowPointerDown(t))), this._pointerdownRepeatTimer = this._register(new v0), this._pointerdownScheduleRepeatTimer = this._register(new Jr)
        }
        _arrowPointerDown(e) {
            if (!e.target || !(e.target instanceof Element)) return;
            const t = () => {
                this._pointerdownRepeatTimer.cancelAndSet(() => this._onActivate(), 1e3 / 24, re(e))
            };
            this._onActivate(), this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancelAndSet(t, 200), this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, i => {}, () => {
                this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancel()
            }), e.preventDefault()
        }
    },
    sg = class extends q {
        constructor(e, t, i) {
            super(), this._visibility = e, this._visibleClassName = t, this._invisibleClassName = i, this._domNode = null, this._isVisible = !1, this._isNeeded = !1, this._rawShouldBeVisible = !1, this._shouldBeVisible = !1, this._revealTimer = this._register(new Jr)
        }
        setVisibility(e) {
            this._visibility !== e && (this._visibility = e, this._updateShouldBeVisible())
        }
        setShouldBeVisible(e) {
            this._rawShouldBeVisible = e, this._updateShouldBeVisible()
        }
        _applyVisibilitySetting() {
            return this._visibility === 2 ? !1 : this._visibility === 3 ? !0 : this._rawShouldBeVisible
        }
        _updateShouldBeVisible() {
            const e = this._applyVisibilitySetting();
            this._shouldBeVisible !== e && (this._shouldBeVisible = e, this.ensureVisibility())
        }
        setIsNeeded(e) {
            this._isNeeded !== e && (this._isNeeded = e, this.ensureVisibility())
        }
        setDomNode(e) {
            this._domNode = e, this._domNode.setClassName(this._invisibleClassName), this.setShouldBeVisible(!1)
        }
        ensureVisibility() {
            if (!this._isNeeded) {
                this._hide(!1);
                return
            }
            this._shouldBeVisible ? this._reveal() : this._hide(!0)
        }
        _reveal() {
            this._isVisible || (this._isVisible = !0, this._revealTimer.setIfNotSet(() => {
                this._domNode?.setClassName(this._visibleClassName)
            }, 0))
        }
        _hide(e) {
            this._revealTimer.cancel(), this._isVisible && (this._isVisible = !1, this._domNode?.setClassName(this._invisibleClassName + (e ? " fade" : "")))
        }
    },
    ng = 140,
    Bh = class extends fi {
        constructor(e) {
            super(), this._lazyRender = e.lazyRender, this._host = e.host, this._scrollable = e.scrollable, this._scrollByPage = e.scrollByPage, this._scrollbarState = e.scrollbarState, this._visibilityController = this._register(new sg(e.visibility, "visible scrollbar " + e.extraScrollbarClassName, "invisible scrollbar " + e.extraScrollbarClassName)), this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._pointerMoveMonitor = this._register(new Fh), this._shouldRender = !0, this.domNode = Is(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this._visibilityController.setDomNode(this.domNode), this.domNode.setPosition("absolute"), this._register(O(this.domNode.domNode, X.POINTER_DOWN, t => this._domNodePointerDown(t)))
        }
        _createArrow(e) {
            const t = this._register(new ig(e));
            this.domNode.domNode.appendChild(t.bgDomNode), this.domNode.domNode.appendChild(t.domNode)
        }
        _createSlider(e, t, i, s) {
            this.slider = Is(document.createElement("div")), this.slider.setClassName("slider"), this.slider.setPosition("absolute"), this.slider.setTop(e), this.slider.setLeft(t), typeof i == "number" && this.slider.setWidth(i), typeof s == "number" && this.slider.setHeight(s), this.slider.setLayerHinting(!0), this.slider.setContain("strict"), this.domNode.domNode.appendChild(this.slider.domNode), this._register(O(this.slider.domNode, X.POINTER_DOWN, n => {
                n.button === 0 && (n.preventDefault(), this._sliderPointerDown(n))
            })), this.onclick(this.slider.domNode, n => {
                n.leftButton && n.stopPropagation()
            })
        }
        _onElementSize(e) {
            return this._scrollbarState.setVisibleSize(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender
        }
        _onElementScrollSize(e) {
            return this._scrollbarState.setScrollSize(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender
        }
        _onElementScrollPosition(e) {
            return this._scrollbarState.setScrollPosition(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender
        }
        beginReveal() {
            this._visibilityController.setShouldBeVisible(!0)
        }
        beginHide() {
            this._visibilityController.setShouldBeVisible(!1)
        }
        render() {
            this._shouldRender && (this._shouldRender = !1, this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize()), this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition()))
        }
        _domNodePointerDown(e) {
            e.target === this.domNode.domNode && this._onPointerDown(e)
        }
        delegatePointerDown(e) {
            const t = this.domNode.domNode.getClientRects()[0].top,
                i = t + this._scrollbarState.getSliderPosition(),
                s = t + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize(),
                n = this._sliderPointerPosition(e);
            i <= n && n <= s ? e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e)) : this._onPointerDown(e)
        }
        _onPointerDown(e) {
            let t, i;
            if (e.target === this.domNode.domNode && typeof e.offsetX == "number" && typeof e.offsetY == "number") t = e.offsetX, i = e.offsetY;
            else {
                const n = dh(this.domNode.domNode);
                t = e.pageX - n.left, i = e.pageY - n.top
            }
            const s = this._pointerDownRelativePosition(t, i);
            this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(s) : this._scrollbarState.getDesiredScrollPositionFromOffset(s)), e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e))
        }
        _sliderPointerDown(e) {
            if (!e.target || !(e.target instanceof Element)) return;
            const t = this._sliderPointerPosition(e),
                i = this._sliderOrthogonalPointerPosition(e),
                s = this._scrollbarState.clone();
            this.slider.toggleClassName("active", !0), this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, n => {
                const r = this._sliderOrthogonalPointerPosition(n),
                    o = Math.abs(r - i);
                if (Ft && o > ng) {
                    this._setDesiredScrollPositionNow(s.getScrollPosition());
                    return
                }
                const c = this._sliderPointerPosition(n) - t;
                this._setDesiredScrollPositionNow(s.getDesiredScrollPositionFromDelta(c))
            }, () => {
                this.slider.toggleClassName("active", !1), this._host.onDragEnd()
            }), this._host.onDragStart()
        }
        _setDesiredScrollPositionNow(e) {
            const t = {};
            this.writeScrollPosition(t, e), this._scrollable.setScrollPositionNow(t), this._lazyRender && this.render()
        }
        updateScrollbarSize(e) {
            this._updateScrollbarSize(e), this._scrollbarState.setScrollbarSize(e), this._shouldRender = !0, this._lazyRender || this.render()
        }
        isNeeded() {
            return this._scrollbarState.isNeeded()
        }
    },
    rg = 20,
    Hh = class Ra {
        constructor(t, i, s, n, r, o) {
            this._scrollbarSize = Math.round(i), this._oppositeScrollbarSize = Math.round(s), this._arrowSize = Math.round(t), this._visibleSize = n, this._scrollSize = r, this._scrollPosition = o, this._computedAvailableSize = 0, this._computedIsNeeded = !1, this._computedSliderSize = 0, this._computedSliderRatio = 0, this._computedSliderPosition = 0, this._refreshComputedValues()
        }
        clone() {
            return new Ra(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition)
        }
        setVisibleSize(t) {
            const i = Math.round(t);
            return this._visibleSize !== i ? (this._visibleSize = i, this._refreshComputedValues(), !0) : !1
        }
        setScrollSize(t) {
            const i = Math.round(t);
            return this._scrollSize !== i ? (this._scrollSize = i, this._refreshComputedValues(), !0) : !1
        }
        setScrollPosition(t) {
            const i = Math.round(t);
            return this._scrollPosition !== i ? (this._scrollPosition = i, this._refreshComputedValues(), !0) : !1
        }
        setScrollbarSize(t) {
            this._scrollbarSize = Math.round(t)
        }
        setOppositeScrollbarSize(t) {
            this._oppositeScrollbarSize = Math.round(t)
        }
        static _computeValues(t, i, s, n, r) {
            const o = Math.max(0, s - t),
                a = Math.max(0, o - 2 * i),
                c = n > 0 && n > s;
            if (!c) return {
                computedAvailableSize: Math.round(o),
                computedIsNeeded: c,
                computedSliderSize: Math.round(a),
                computedSliderRatio: 0,
                computedSliderPosition: 0
            };
            const h = Math.round(Math.max(rg, Math.floor(s * a / n))),
                d = (a - h) / (n - s),
                u = r * d;
            return {
                computedAvailableSize: Math.round(o),
                computedIsNeeded: c,
                computedSliderSize: Math.round(h),
                computedSliderRatio: d,
                computedSliderPosition: Math.round(u)
            }
        }
        _refreshComputedValues() {
            const t = Ra._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
            this._computedAvailableSize = t.computedAvailableSize, this._computedIsNeeded = t.computedIsNeeded, this._computedSliderSize = t.computedSliderSize, this._computedSliderRatio = t.computedSliderRatio, this._computedSliderPosition = t.computedSliderPosition
        }
        getArrowSize() {
            return this._arrowSize
        }
        getScrollPosition() {
            return this._scrollPosition
        }
        getRectangleLargeSize() {
            return this._computedAvailableSize
        }
        getRectangleSmallSize() {
            return this._scrollbarSize
        }
        isNeeded() {
            return this._computedIsNeeded
        }
        getSliderSize() {
            return this._computedSliderSize
        }
        getSliderPosition() {
            return this._computedSliderPosition
        }
        getDesiredScrollPositionFromOffset(t) {
            if (!this._computedIsNeeded) return 0;
            const i = t - this._arrowSize - this._computedSliderSize / 2;
            return Math.round(i / this._computedSliderRatio)
        }
        getDesiredScrollPositionFromOffsetPaged(t) {
            if (!this._computedIsNeeded) return 0;
            const i = t - this._arrowSize;
            let s = this._scrollPosition;
            return i < this._computedSliderPosition ? s -= this._visibleSize : s += this._visibleSize, s
        }
        getDesiredScrollPositionFromDelta(t) {
            if (!this._computedIsNeeded) return 0;
            const i = this._computedSliderPosition + t;
            return Math.round(i / this._computedSliderRatio)
        }
    },
    og = class extends Bh {
        constructor(e, t, i) {
            const s = e.getScrollDimensions(),
                n = e.getCurrentScrollPosition();
            if (super({
                    lazyRender: t.lazyRender,
                    host: i,
                    scrollbarState: new Hh(t.horizontalHasArrows ? t.arrowSize : 0, t.horizontal === 2 ? 0 : t.horizontalScrollbarSize, t.vertical === 2 ? 0 : t.verticalScrollbarSize, s.width, s.scrollWidth, n.scrollLeft),
                    visibility: t.horizontal,
                    extraScrollbarClassName: "horizontal",
                    scrollable: e,
                    scrollByPage: t.scrollByPage
                }), t.horizontalHasArrows) {
                const r = (t.arrowSize - Yi) / 2,
                    o = (t.horizontalScrollbarSize - Yi) / 2;
                this._createArrow({
                    className: "scra",
                    icon: me.scrollbarButtonLeft,
                    top: o,
                    left: r,
                    bottom: void 0,
                    right: void 0,
                    bgWidth: t.arrowSize,
                    bgHeight: t.horizontalScrollbarSize,
                    onActivate: () => this._host.onMouseWheel(new Fi(null, 1, 0))
                }), this._createArrow({
                    className: "scra",
                    icon: me.scrollbarButtonRight,
                    top: o,
                    left: void 0,
                    bottom: void 0,
                    right: r,
                    bgWidth: t.arrowSize,
                    bgHeight: t.horizontalScrollbarSize,
                    onActivate: () => this._host.onMouseWheel(new Fi(null, -1, 0))
                })
            }
            this._createSlider(Math.floor((t.horizontalScrollbarSize - t.horizontalSliderSize) / 2), 0, void 0, t.horizontalSliderSize)
        }
        _updateSlider(e, t) {
            this.slider.setWidth(e), this.slider.setLeft(t)
        }
        _renderDomNode(e, t) {
            this.domNode.setWidth(e), this.domNode.setHeight(t), this.domNode.setLeft(0), this.domNode.setBottom(0)
        }
        onDidScroll(e) {
            return this._shouldRender = this._onElementScrollSize(e.scrollWidth) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(e.scrollLeft) || this._shouldRender, this._shouldRender = this._onElementSize(e.width) || this._shouldRender, this._shouldRender
        }
        _pointerDownRelativePosition(e, t) {
            return e
        }
        _sliderPointerPosition(e) {
            return e.pageX
        }
        _sliderOrthogonalPointerPosition(e) {
            return e.pageY
        }
        _updateScrollbarSize(e) {
            this.slider.setHeight(e)
        }
        writeScrollPosition(e, t) {
            e.scrollLeft = t
        }
        updateOptions(e) {
            this.updateScrollbarSize(e.horizontal === 2 ? 0 : e.horizontalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(e.vertical === 2 ? 0 : e.verticalScrollbarSize), this._visibilityController.setVisibility(e.horizontal), this._scrollByPage = e.scrollByPage
        }
    },
    ag = class extends Bh {
        constructor(e, t, i) {
            const s = e.getScrollDimensions(),
                n = e.getCurrentScrollPosition();
            if (super({
                    lazyRender: t.lazyRender,
                    host: i,
                    scrollbarState: new Hh(t.verticalHasArrows ? t.arrowSize : 0, t.vertical === 2 ? 0 : t.verticalScrollbarSize, 0, s.height, s.scrollHeight, n.scrollTop),
                    visibility: t.vertical,
                    extraScrollbarClassName: "vertical",
                    scrollable: e,
                    scrollByPage: t.scrollByPage
                }), t.verticalHasArrows) {
                const r = (t.arrowSize - Yi) / 2,
                    o = (t.verticalScrollbarSize - Yi) / 2;
                this._createArrow({
                    className: "scra",
                    icon: me.scrollbarButtonUp,
                    top: r,
                    left: o,
                    bottom: void 0,
                    right: void 0,
                    bgWidth: t.verticalScrollbarSize,
                    bgHeight: t.arrowSize,
                    onActivate: () => this._host.onMouseWheel(new Fi(null, 0, 1))
                }), this._createArrow({
                    className: "scra",
                    icon: me.scrollbarButtonDown,
                    top: void 0,
                    left: o,
                    bottom: r,
                    right: void 0,
                    bgWidth: t.verticalScrollbarSize,
                    bgHeight: t.arrowSize,
                    onActivate: () => this._host.onMouseWheel(new Fi(null, 0, -1))
                })
            }
            this._createSlider(0, Math.floor((t.verticalScrollbarSize - t.verticalSliderSize) / 2), t.verticalSliderSize, void 0)
        }
        _updateSlider(e, t) {
            this.slider.setHeight(e), this.slider.setTop(t)
        }
        _renderDomNode(e, t) {
            this.domNode.setWidth(t), this.domNode.setHeight(e), this.domNode.setRight(0), this.domNode.setTop(0)
        }
        onDidScroll(e) {
            return this._shouldRender = this._onElementScrollSize(e.scrollHeight) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(e.scrollTop) || this._shouldRender, this._shouldRender = this._onElementSize(e.height) || this._shouldRender, this._shouldRender
        }
        _pointerDownRelativePosition(e, t) {
            return t
        }
        _sliderPointerPosition(e) {
            return e.pageY
        }
        _sliderOrthogonalPointerPosition(e) {
            return e.pageX
        }
        _updateScrollbarSize(e) {
            this.slider.setWidth(e)
        }
        writeScrollPosition(e, t) {
            e.scrollTop = t
        }
        updateOptions(e) {
            this.updateScrollbarSize(e.vertical === 2 ? 0 : e.verticalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(0), this._visibilityController.setVisibility(e.vertical), this._scrollByPage = e.scrollByPage
        }
    },
    lg = class Ma {
        constructor(t, i, s, n, r, o, a) {
            this._forceIntegerValues = t, this._scrollStateBrand = void 0, this._forceIntegerValues && (i = i | 0, s = s | 0, n = n | 0, r = r | 0, o = o | 0, a = a | 0), this.rawScrollLeft = n, this.rawScrollTop = a, i < 0 && (i = 0), n + i > s && (n = s - i), n < 0 && (n = 0), r < 0 && (r = 0), a + r > o && (a = o - r), a < 0 && (a = 0), this.width = i, this.scrollWidth = s, this.scrollLeft = n, this.height = r, this.scrollHeight = o, this.scrollTop = a
        }
        equals(t) {
            return this.rawScrollLeft === t.rawScrollLeft && this.rawScrollTop === t.rawScrollTop && this.width === t.width && this.scrollWidth === t.scrollWidth && this.scrollLeft === t.scrollLeft && this.height === t.height && this.scrollHeight === t.scrollHeight && this.scrollTop === t.scrollTop
        }
        withScrollDimensions(t, i) {
            return new Ma(this._forceIntegerValues, typeof t.width < "u" ? t.width : this.width, typeof t.scrollWidth < "u" ? t.scrollWidth : this.scrollWidth, i ? this.rawScrollLeft : this.scrollLeft, typeof t.height < "u" ? t.height : this.height, typeof t.scrollHeight < "u" ? t.scrollHeight : this.scrollHeight, i ? this.rawScrollTop : this.scrollTop)
        }
        withScrollPosition(t) {
            return new Ma(this._forceIntegerValues, this.width, this.scrollWidth, typeof t.scrollLeft < "u" ? t.scrollLeft : this.rawScrollLeft, this.height, this.scrollHeight, typeof t.scrollTop < "u" ? t.scrollTop : this.rawScrollTop)
        }
        createScrollEvent(t, i) {
            const s = this.width !== t.width,
                n = this.scrollWidth !== t.scrollWidth,
                r = this.scrollLeft !== t.scrollLeft,
                o = this.height !== t.height,
                a = this.scrollHeight !== t.scrollHeight,
                c = this.scrollTop !== t.scrollTop;
            return {
                inSmoothScrolling: i,
                oldWidth: t.width,
                oldScrollWidth: t.scrollWidth,
                oldScrollLeft: t.scrollLeft,
                width: this.width,
                scrollWidth: this.scrollWidth,
                scrollLeft: this.scrollLeft,
                oldHeight: t.height,
                oldScrollHeight: t.scrollHeight,
                oldScrollTop: t.scrollTop,
                height: this.height,
                scrollHeight: this.scrollHeight,
                scrollTop: this.scrollTop,
                widthChanged: s,
                scrollWidthChanged: n,
                scrollLeftChanged: r,
                heightChanged: o,
                scrollHeightChanged: a,
                scrollTopChanged: c
            }
        }
    },
    zh = class extends q {
        constructor(e) {
            super(), this._options = e, this._scrollableBrand = void 0, this._onScroll = this._register(new L), this.onScroll = this._onScroll.event, this._smoothScrollDuration = this._options.smoothScrollDuration, this._scheduleAtNextAnimationFrame = this._options.scheduleAtNextAnimationFrame, this._state = new lg(this._options.forceIntegerValues, 0, 0, 0, 0, 0, 0), this._smoothScrolling = null
        }
        dispose() {
            this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), super.dispose()
        }
        setSmoothScrollDuration(e) {
            this._smoothScrollDuration = e
        }
        validateScrollPosition(e) {
            return this._state.withScrollPosition(e)
        }
        getScrollDimensions() {
            return this._state
        }
        setScrollDimensions(e, t) {
            const i = this._state.withScrollDimensions(e, t);
            this._setState(i, !!this._smoothScrolling), this._smoothScrolling?.acceptScrollDimensions(this._state)
        }
        getFutureScrollPosition() {
            return this._smoothScrolling ? this._smoothScrolling.to : this._state
        }
        getCurrentScrollPosition() {
            return this._state
        }
        setScrollPositionNow(e) {
            const t = this._state.withScrollPosition(e);
            this._smoothScrolling && (this._smoothScrolling.dispose(), this._smoothScrolling = null), this._setState(t, !1)
        }
        setScrollPositionSmooth(e, t) {
            if (this._smoothScrollDuration === 0) return this.setScrollPositionNow(e);
            if (this._smoothScrolling) {
                e = {
                    scrollLeft: typeof e.scrollLeft > "u" ? this._smoothScrolling.to.scrollLeft : e.scrollLeft,
                    scrollTop: typeof e.scrollTop > "u" ? this._smoothScrolling.to.scrollTop : e.scrollTop
                };
                const i = this._state.withScrollPosition(e);
                if (this._smoothScrolling.to.scrollLeft === i.scrollLeft && this._smoothScrolling.to.scrollTop === i.scrollTop) return;
                let s;
                t ? s = new Uh(this._smoothScrolling.from, i, this._smoothScrolling.startTime, this._smoothScrolling.duration) : s = this._smoothScrolling.combine(this._state, i, this._smoothScrollDuration), this._smoothScrolling.dispose(), this._smoothScrolling = s
            } else {
                const i = this._state.withScrollPosition(e);
                this._smoothScrolling = Uh.start(this._state, i, this._smoothScrollDuration)
            }
            this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
                this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable = null, this._performSmoothScrolling())
            })
        }
        hasPendingScrollAnimation() {
            return !!this._smoothScrolling
        }
        _performSmoothScrolling() {
            if (!this._smoothScrolling) return;
            const e = this._smoothScrolling.tick(),
                t = this._state.withScrollPosition(e);
            if (this._setState(t, !0), !!this._smoothScrolling) {
                if (e.isDone) {
                    this._smoothScrolling.dispose(), this._smoothScrolling = null;
                    return
                }
                this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
                    this._smoothScrolling && (this._smoothScrolling.animationFrameDisposable = null, this._performSmoothScrolling())
                })
            }
        }
        _setState(e, t) {
            const i = this._state;
            i.equals(e) || (this._options.stickyScrollHorizontal && ((this._options.stickyScrollHorizontal === "right" || typeof this._options.stickyScrollHorizontal == "function" && this._options.stickyScrollHorizontal() === "right") && e.scrollLeft + e.width >= e.scrollWidth && (e = e.withScrollPosition({
                scrollLeft: 1 / 0
            })), (this._options.stickyScrollHorizontal === "left" || typeof this._options.stickyScrollHorizontal == "function" && this._options.stickyScrollHorizontal() === "left") && e.scrollLeft <= 0 && (e = e.withScrollPosition({
                scrollLeft: -1 / 0
            }))), this._options.stickyScrollVertical && ((this._options.stickyScrollVertical === "down" || typeof this._options.stickyScrollVertical == "function" && this._options.stickyScrollVertical() === "down") && e.scrollTop + e.height >= e.scrollHeight && (e = e.withScrollPosition({
                scrollTop: 1 / 0
            })), (this._options.stickyScrollVertical === "up" || typeof this._options.stickyScrollVertical == "function" && this._options.stickyScrollVertical() === "up") && e.scrollTop <= 0 && (e = e.withScrollPosition({
                scrollTop: -1 / 0
            }))), this._state = e, this._onScroll.fire(this._state.createScrollEvent(i, t)))
        }
        getScrollHeight() {
            return this._state.scrollHeight
        }
    },
    $h = class {
        constructor(e, t, i) {
            this.scrollLeft = e, this.scrollTop = t, this.isDone = i
        }
    };

function Wo(e, t) {
    const i = t - e;
    return function(s) {
        return e + i * dg(s)
    }
}

function cg(e, t, i) {
    return function(s) {
        return s < i ? e(s / i) : t((s - i) / (1 - i))
    }
}
var Uh = class Pa {
    constructor(t, i, s, n) {
        this.from = t, this.to = i, this.duration = n, this.startTime = s, this.animationFrameDisposable = null, this._initAnimations()
    }
    _initAnimations() {
        this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width), this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height)
    }
    _initAnimation(t, i, s) {
        if (Math.abs(t - i) > 2.5 * s) {
            let r, o;
            return t < i ? (r = t + .75 * s, o = i - .75 * s) : (r = t - .75 * s, o = i + .75 * s), cg(Wo(t, r), Wo(o, i), .33)
        }
        return Wo(t, i)
    }
    dispose() {
        this.animationFrameDisposable !== null && (this.animationFrameDisposable.dispose(), this.animationFrameDisposable = null)
    }
    acceptScrollDimensions(t) {
        this.to = t.withScrollPosition(this.to), this._initAnimations()
    }
    tick() {
        return this._tick(Date.now())
    }
    _tick(t) {
        const i = (t - this.startTime) / this.duration;
        if (i < 1) {
            const s = this.scrollLeft(i),
                n = this.scrollTop(i);
            return new $h(s, n, !1)
        }
        return new $h(this.to.scrollLeft, this.to.scrollTop, !0)
    }
    combine(t, i, s) {
        return Pa.start(t, i, s)
    }
    static start(t, i, s) {
        s = s + 10;
        const n = Date.now() - 10;
        return new Pa(t, i, n, s)
    }
};

function hg(e) {
    return Math.pow(e, 3)
}

function dg(e) {
    return 1 - hg(1 - e)
}
var ug = 500,
    Wh = 50,
    Vh = !0,
    fg = class {
        constructor(e, t, i) {
            this.timestamp = e, this.deltaX = t, this.deltaY = i, this.score = 0
        }
    },
    Vo = class {
        constructor() {
            this._capacity = 5, this._memory = [], this._front = -1, this._rear = -1
        }
        isPhysicalMouseWheel() {
            if (this._front === -1 && this._rear === -1) return !1;
            let t = 1,
                i = 0,
                s = 1,
                n = this._rear;
            do {
                const r = n === this._front ? t : Math.pow(2, -s);
                if (t -= r, i += this._memory[n].score * r, n === this._front) break;
                n = (this._capacity + n - 1) % this._capacity, s++
            } while (!0);
            return i <= .5
        }
        acceptStandardWheelEvent(t) {
            if (Mr) {
                const i = re(t.browserEvent),
                    s = m1(i);
                this.accept(Date.now(), t.deltaX * s, t.deltaY * s)
            } else this.accept(Date.now(), t.deltaX, t.deltaY)
        }
        accept(t, i, s) {
            let n = null;
            const r = new fg(t, i, s);
            this._front === -1 && this._rear === -1 ? (this._memory[0] = r, this._front = 0, this._rear = 0) : (n = this._memory[this._rear], this._rear = (this._rear + 1) % this._capacity, this._rear === this._front && (this._front = (this._front + 1) % this._capacity), this._memory[this._rear] = r), r.score = this._computeScore(r, n)
        }
        _computeScore(t, i) {
            if (Math.abs(t.deltaX) > 0 && Math.abs(t.deltaY) > 0) return 1;
            let s = .5;
            if ((!this._isAlmostInt(t.deltaX) || !this._isAlmostInt(t.deltaY)) && (s += .25), i) {
                const n = Math.abs(t.deltaX),
                    r = Math.abs(t.deltaY),
                    o = Math.abs(i.deltaX),
                    a = Math.abs(i.deltaY),
                    c = Math.max(Math.min(n, o), 1),
                    h = Math.max(Math.min(r, a), 1),
                    d = Math.max(n, o),
                    u = Math.max(r, a);
                d % c === 0 && u % h === 0 && (s -= .5)
            }
            return Math.min(Math.max(s, 0), 1)
        }
        _isAlmostInt(t) {
            return Math.abs(Math.round(t) - t) < .01
        }
    };
Vo.INSTANCE = new Vo;
var pg = Vo,
    Kh = class extends fi {
        constructor(e, t, i) {
            super(), this._onScroll = this._register(new L), this.onScroll = this._onScroll.event, this._onWillScroll = this._register(new L), this.onWillScroll = this._onWillScroll.event, e.style.overflow = "hidden", this._options = vg(t), this._scrollable = i, this._register(this._scrollable.onScroll(r => {
                this._onWillScroll.fire(r), this._onDidScroll(r), this._onScroll.fire(r)
            }));
            const s = {
                onMouseWheel: r => this._onMouseWheel(r),
                onDragStart: () => this._onDragStart(),
                onDragEnd: () => this._onDragEnd()
            };
            this._verticalScrollbar = this._register(new ag(this._scrollable, this._options, s)), this._horizontalScrollbar = this._register(new og(this._scrollable, this._options, s)), this._domNode = document.createElement("div"), this._domNode.className = "monaco-scrollable-element " + this._options.className, this._domNode.setAttribute("role", "presentation"), this._domNode.style.position = "relative";
            const n = t.horizontal && t.vertical ? "both" : t.horizontal ? "horizontal" : "vertical";
            n === "both" ? this._domNode.style.overflow = "hidden" : n === "horizontal" ? this._domNode.style.overflowX = "hidden" : this._domNode.style.overflowY = "hidden", this._domNode.appendChild(e), this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode), this._domNode.appendChild(this._verticalScrollbar.domNode.domNode), this._options.useShadows ? (this._leftShadowDomNode = Is(document.createElement("div")), this._leftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._leftShadowDomNode.domNode), this._topShadowDomNode = Is(document.createElement("div")), this._topShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topShadowDomNode.domNode), this._topLeftShadowDomNode = Is(document.createElement("div")), this._topLeftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topLeftShadowDomNode.domNode)) : (this._leftShadowDomNode = null, this._topShadowDomNode = null, this._topLeftShadowDomNode = null), this._listenOnDomNode = this._options.listenOnDomNode || this._domNode, this._mouseWheelToDispose = [], this._setListeningToMouseWheel(this._options.handleMouseWheel), this.onmouseover(this._listenOnDomNode, r => this._onMouseOver(r)), this.onmouseleave(this._listenOnDomNode, r => this._onMouseLeave(r)), this._hideTimeout = this._register(new Jr), this._isDragging = !1, this._mouseIsOver = !1, this._shouldRender = !0, this._revealOnScroll = !0
        }
        get options() {
            return this._options
        }
        dispose() {
            this._mouseWheelToDispose = Ke(this._mouseWheelToDispose), super.dispose()
        }
        getDomNode() {
            return this._domNode
        }
        getOverviewRulerLayoutInfo() {
            return {
                parent: this._domNode,
                insertBefore: this._verticalScrollbar.domNode.domNode
            }
        }
        delegateVerticalScrollbarPointerDown(e) {
            this._verticalScrollbar.delegatePointerDown(e)
        }
        getScrollDimensions() {
            return this._scrollable.getScrollDimensions()
        }
        setScrollDimensions(e) {
            this._scrollable.setScrollDimensions(e, !1)
        }
        updateClassName(e) {
            this._options.className = e, Re && (this._options.className += " mac"), this._domNode.className = "monaco-scrollable-element " + this._options.className
        }
        updateOptions(e) {
            typeof e.handleMouseWheel < "u" && (this._options.handleMouseWheel = e.handleMouseWheel, this._setListeningToMouseWheel(this._options.handleMouseWheel)), typeof e.ignoreVerticalScrolling < "u" && (this._options.ignoreVerticalScrolling = e.ignoreVerticalScrolling), typeof e.mouseWheelScrollSensitivity < "u" && (this._options.mouseWheelScrollSensitivity = e.mouseWheelScrollSensitivity), typeof e.fastScrollSensitivity < "u" && (this._options.fastScrollSensitivity = e.fastScrollSensitivity), typeof e.scrollPredominantAxis < "u" && (this._options.scrollPredominantAxis = e.scrollPredominantAxis), typeof e.horizontal < "u" && (this._options.horizontal = e.horizontal), typeof e.vertical < "u" && (this._options.vertical = e.vertical), typeof e.horizontalScrollbarSize < "u" && (this._options.horizontalScrollbarSize = e.horizontalScrollbarSize), typeof e.verticalScrollbarSize < "u" && (this._options.verticalScrollbarSize = e.verticalScrollbarSize), typeof e.scrollByPage < "u" && (this._options.scrollByPage = e.scrollByPage), this._horizontalScrollbar.updateOptions(this._options), this._verticalScrollbar.updateOptions(this._options), this._options.lazyRender || this._render()
        }
        setRevealOnScroll(e) {
            this._revealOnScroll = e
        }
        delegateScrollFromMouseWheelEvent(e) {
            this._onMouseWheel(new Fi(e))
        }
        _setListeningToMouseWheel(e) {
            if (this._mouseWheelToDispose.length > 0 !== e && (this._mouseWheelToDispose = Ke(this._mouseWheelToDispose), e)) {
                const i = s => {
                    this._onMouseWheel(new Fi(s))
                };
                this._mouseWheelToDispose.push(O(this._listenOnDomNode, X.MOUSE_WHEEL, i, {
                    passive: !1
                }))
            }
        }
        _onMouseWheel(e) {
            if (e.browserEvent?.defaultPrevented) return;
            const t = pg.INSTANCE;
            Vh && t.acceptStandardWheelEvent(e);
            let i = !1;
            if (e.deltaY || e.deltaX) {
                let n = e.deltaY * this._options.mouseWheelScrollSensitivity,
                    r = e.deltaX * this._options.mouseWheelScrollSensitivity;
                this._options.scrollPredominantAxis && (this._options.scrollYToX && r + n === 0 ? r = n = 0 : Math.abs(n) >= Math.abs(r) ? r = 0 : n = 0), this._options.ignoreVerticalScrolling === !0 && (n = 0), this._options.flipAxes && ([n, r] = [r, n]);
                const o = !Re && e.browserEvent && e.browserEvent.shiftKey;
                (this._options.scrollYToX || o) && !r && (r = n, n = 0), e.browserEvent && e.browserEvent.altKey && (r = r * this._options.fastScrollSensitivity, n = n * this._options.fastScrollSensitivity);
                const a = this._scrollable.getFutureScrollPosition();
                let c = {};
                if (n) {
                    const h = Wh * n,
                        d = a.scrollTop - (h < 0 ? Math.floor(h) : Math.ceil(h));
                    this._verticalScrollbar.writeScrollPosition(c, d)
                }
                if (r) {
                    const h = Wh * r,
                        d = a.scrollLeft - (h < 0 ? Math.floor(h) : Math.ceil(h));
                    this._horizontalScrollbar.writeScrollPosition(c, d)
                }
                c = this._scrollable.validateScrollPosition(c), (a.scrollLeft !== c.scrollLeft || a.scrollTop !== c.scrollTop) && (Vh && this._options.mouseWheelSmoothScroll && t.isPhysicalMouseWheel() ? this._scrollable.setScrollPositionSmooth(c) : this._scrollable.setScrollPositionNow(c), i = !0)
            }
            let s = i;
            !s && this._options.alwaysConsumeMouseWheel && (s = !0), !s && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded()) && (s = !0), s && (e.preventDefault(), e.stopPropagation())
        }
        _onDidScroll(e) {
            this._shouldRender = this._horizontalScrollbar.onDidScroll(e) || this._shouldRender, this._shouldRender = this._verticalScrollbar.onDidScroll(e) || this._shouldRender, this._options.useShadows && (this._shouldRender = !0), this._revealOnScroll && this._reveal(), this._options.lazyRender || this._render()
        }
        renderNow() {
            if (!this._options.lazyRender) throw new Error("Please use `lazyRender` together with `renderNow`!");
            this._render()
        }
        _render() {
            if (this._shouldRender && (this._shouldRender = !1, this._horizontalScrollbar.render(), this._verticalScrollbar.render(), this._options.useShadows)) {
                const e = this._scrollable.getCurrentScrollPosition(),
                    t = e.scrollTop > 0,
                    i = e.scrollLeft > 0,
                    s = i ? " left" : "",
                    n = t ? " top" : "",
                    r = i || t ? " top-left-corner" : "";
                this._leftShadowDomNode.setClassName(`shadow${s}`), this._topShadowDomNode.setClassName(`shadow${n}`), this._topLeftShadowDomNode.setClassName(`shadow${r}${n}${s}`)
            }
        }
        _onDragStart() {
            this._isDragging = !0, this._reveal()
        }
        _onDragEnd() {
            this._isDragging = !1, this._hide()
        }
        _onMouseLeave(e) {
            this._mouseIsOver = !1, this._hide()
        }
        _onMouseOver(e) {
            this._mouseIsOver = !0, this._reveal()
        }
        _reveal() {
            this._verticalScrollbar.beginReveal(), this._horizontalScrollbar.beginReveal(), this._scheduleHide()
        }
        _hide() {
            !this._mouseIsOver && !this._isDragging && (this._verticalScrollbar.beginHide(), this._horizontalScrollbar.beginHide())
        }
        _scheduleHide() {
            !this._mouseIsOver && !this._isDragging && this._hideTimeout.cancelAndSet(() => this._hide(), ug)
        }
    },
    gg = class extends Kh {
        constructor(e, t) {
            t = t || {}, t.mouseWheelSmoothScroll = !1;
            const i = new zh({
                forceIntegerValues: !0,
                smoothScrollDuration: 0,
                scheduleAtNextAnimationFrame: s => $t(re(e), s)
            });
            super(e, t, i), this._register(i)
        }
        setScrollPosition(e) {
            this._scrollable.setScrollPositionNow(e)
        }
        getScrollPosition() {
            return this._scrollable.getCurrentScrollPosition()
        }
    },
    mg = class extends Kh {
        constructor(e, t, i) {
            super(e, t, i)
        }
        setScrollPosition(e) {
            e.reuseAnimation ? this._scrollable.setScrollPositionSmooth(e, e.reuseAnimation) : this._scrollable.setScrollPositionNow(e)
        }
        getScrollPosition() {
            return this._scrollable.getCurrentScrollPosition()
        }
    };

function vg(e) {
    const t = {
        lazyRender: typeof e.lazyRender < "u" ? e.lazyRender : !1,
        className: typeof e.className < "u" ? e.className : "",
        useShadows: typeof e.useShadows < "u" ? e.useShadows : !0,
        handleMouseWheel: typeof e.handleMouseWheel < "u" ? e.handleMouseWheel : !0,
        ignoreVerticalScrolling: typeof e.ignoreVerticalScrolling < "u" ? e.ignoreVerticalScrolling : !1,
        flipAxes: typeof e.flipAxes < "u" ? e.flipAxes : !1,
        consumeMouseWheelIfScrollbarIsNeeded: typeof e.consumeMouseWheelIfScrollbarIsNeeded < "u" ? e.consumeMouseWheelIfScrollbarIsNeeded : !1,
        alwaysConsumeMouseWheel: typeof e.alwaysConsumeMouseWheel < "u" ? e.alwaysConsumeMouseWheel : !1,
        scrollYToX: typeof e.scrollYToX < "u" ? e.scrollYToX : !1,
        mouseWheelScrollSensitivity: typeof e.mouseWheelScrollSensitivity < "u" ? e.mouseWheelScrollSensitivity : 1,
        fastScrollSensitivity: typeof e.fastScrollSensitivity < "u" ? e.fastScrollSensitivity : 5,
        scrollPredominantAxis: typeof e.scrollPredominantAxis < "u" ? e.scrollPredominantAxis : !0,
        mouseWheelSmoothScroll: typeof e.mouseWheelSmoothScroll < "u" ? e.mouseWheelSmoothScroll : !0,
        arrowSize: typeof e.arrowSize < "u" ? e.arrowSize : 11,
        listenOnDomNode: typeof e.listenOnDomNode < "u" ? e.listenOnDomNode : null,
        horizontal: typeof e.horizontal < "u" ? e.horizontal : 1,
        horizontalScrollbarSize: typeof e.horizontalScrollbarSize < "u" ? e.horizontalScrollbarSize : 10,
        horizontalSliderSize: typeof e.horizontalSliderSize < "u" ? e.horizontalSliderSize : 0,
        horizontalHasArrows: typeof e.horizontalHasArrows < "u" ? e.horizontalHasArrows : !1,
        vertical: typeof e.vertical < "u" ? e.vertical : 1,
        verticalScrollbarSize: typeof e.verticalScrollbarSize < "u" ? e.verticalScrollbarSize : 10,
        verticalHasArrows: typeof e.verticalHasArrows < "u" ? e.verticalHasArrows : !1,
        verticalSliderSize: typeof e.verticalSliderSize < "u" ? e.verticalSliderSize : 0,
        scrollByPage: typeof e.scrollByPage < "u" ? e.scrollByPage : !1
    };
    return t.horizontalSliderSize = typeof e.horizontalSliderSize < "u" ? e.horizontalSliderSize : t.horizontalScrollbarSize, t.verticalSliderSize = typeof e.verticalSliderSize < "u" ? e.verticalSliderSize : t.verticalScrollbarSize, Re && (t.className += " mac"), t
}
var Ue;
(e => {
    function t(r, o) {
        if (r.start >= o.end || o.start >= r.end) return {
            start: 0,
            end: 0
        };
        const a = Math.max(r.start, o.start),
            c = Math.min(r.end, o.end);
        return c - a <= 0 ? {
            start: 0,
            end: 0
        } : {
            start: a,
            end: c
        }
    }
    e.intersect = t;

    function i(r) {
        return r.end - r.start <= 0
    }
    e.isEmpty = i;

    function s(r, o) {
        return !i(t(r, o))
    }
    e.intersects = s;

    function n(r, o) {
        const a = [],
            c = {
                start: r.start,
                end: Math.min(o.start, r.end)
            },
            h = {
                start: Math.max(o.end, r.start),
                end: r.end
            };
        return i(c) || a.push(c), i(h) || a.push(h), a
    }
    e.relativeComplement = n
})(Ue || (Ue = {}));

function Gh(e, t) {
    const i = [];
    for (const s of t) {
        if (e.start >= s.range.end) continue;
        if (e.end < s.range.start) break;
        const n = Ue.intersect(e, s.range);
        Ue.isEmpty(n) || i.push({
            range: n,
            size: s.size
        })
    }
    return i
}

function Ko({
    start: e,
    end: t
}, i) {
    return {
        start: e + i,
        end: t + i
    }
}

function yg(e) {
    const t = [];
    let i = null;
    for (const s of e) {
        const n = s.range.start,
            r = s.range.end,
            o = s.size;
        if (i && o === i.size) {
            i.range.end = r;
            continue
        }
        i = {
            range: {
                start: n,
                end: r
            },
            size: o
        }, t.push(i)
    }
    return t
}

function bg(...e) {
    return yg(e.reduce((t, i) => t.concat(i), []))
}
var _g = class {
        constructor(e) {
            this.groups = [], this._size = 0, this._paddingTop = 0, this._paddingTop = e ?? 0, this._size = this._paddingTop
        }
        get paddingTop() {
            return this._paddingTop
        }
        set paddingTop(e) {
            this._size = this._size + e - this._paddingTop, this._paddingTop = e
        }
        splice(e, t, i = []) {
            const s = i.length - t,
                n = Gh({
                    start: 0,
                    end: e
                }, this.groups),
                r = Gh({
                    start: e + t,
                    end: Number.POSITIVE_INFINITY
                }, this.groups).map(a => ({
                    range: Ko(a.range, s),
                    size: a.size
                })),
                o = i.map((a, c) => ({
                    range: {
                        start: e + c,
                        end: e + c + 1
                    },
                    size: a.size
                }));
            this.groups = bg(n, o, r), this._size = this._paddingTop + this.groups.reduce((a, c) => a + c.size * (c.range.end - c.range.start), 0)
        }
        get count() {
            const e = this.groups.length;
            return e ? this.groups[e - 1].range.end : 0
        }
        get size() {
            return this._size
        }
        indexAt(e) {
            if (e < 0) return -1;
            if (e < this._paddingTop) return 0;
            let t = 0,
                i = this._paddingTop;
            for (const s of this.groups) {
                const n = s.range.end - s.range.start,
                    r = i + n * s.size;
                if (e < r) return t + Math.floor((e - i) / s.size);
                t += n, i = r
            }
            return t
        }
        indexAfter(e) {
            return Math.min(this.indexAt(e) + 1, this.count)
        }
        positionAt(e) {
            if (e < 0) return -1;
            let t = 0,
                i = 0;
            for (const s of this.groups) {
                const n = s.range.end - s.range.start,
                    r = i + n;
                if (e < r) return this._paddingTop + t + (e - i) * s.size;
                t += n * s.size, i = r
            }
            return -1
        }
    },
    wg = class {
        constructor(e) {
            this.renderers = e, this.cache = new Map, this.transactionNodesPendingRemoval = new Set, this.inTransaction = !1
        }
        alloc(e) {
            let t = this.getTemplateCache(e).pop(),
                i = !1;
            if (t) i = this.transactionNodesPendingRemoval.has(t.domNode), i && this.transactionNodesPendingRemoval.delete(t.domNode);
            else {
                const s = ie(".monaco-list-row"),
                    r = this.getRenderer(e).renderTemplate(s);
                t = {
                    domNode: s,
                    templateId: e,
                    templateData: r
                }
            }
            return {
                row: t,
                isReusingConnectedDomNode: i
            }
        }
        release(e) {
            e && this.releaseRow(e)
        }
        transact(e) {
            if (this.inTransaction) throw new Error("Already in transaction");
            this.inTransaction = !0;
            try {
                e()
            } finally {
                for (const t of this.transactionNodesPendingRemoval) this.doRemoveNode(t);
                this.transactionNodesPendingRemoval.clear(), this.inTransaction = !1
            }
        }
        releaseRow(e) {
            const {
                domNode: t,
                templateId: i
            } = e;
            t && (this.inTransaction ? this.transactionNodesPendingRemoval.add(t) : this.doRemoveNode(t)), this.getTemplateCache(i).push(e)
        }
        doRemoveNode(e) {
            e.classList.remove("scrolling"), e.remove()
        }
        getTemplateCache(e) {
            let t = this.cache.get(e);
            return t || (t = [], this.cache.set(e, t)), t
        }
        dispose() {
            this.cache.forEach((e, t) => {
                for (const i of e) this.getRenderer(t).disposeTemplate(i.templateData), i.templateData = null
            }), this.cache.clear(), this.transactionNodesPendingRemoval.clear()
        }
        getRenderer(e) {
            const t = this.renderers.get(e);
            if (!t) throw new Error(`No renderer found for ${e}`);
            return t
        }
    };

function Sg(e, t, i, s = []) {
    if (!e.dataTransfer) return;
    const n = ie(".monaco-drag-image");
    n.textContent = i, n.classList.add(...s), (a => {
        for (; a && !a.classList.contains("monaco-workbench");) a = a.parentElement;
        return a || t.ownerDocument.body
    })(t).appendChild(n), e.dataTransfer.setDragImage(n, -10, -10), setTimeout(() => n.remove(), 0)
}
var pi = {
        CurrentDragAndDropData: void 0
    },
    yt = {
        useShadows: !0,
        verticalScrollMode: 1,
        setRowLineHeight: !0,
        setRowHeight: !0,
        supportDynamicHeights: !1,
        dnd: {
            getDragElements(e) {
                return [e]
            },
            getDragURI() {
                return null
            },
            onDragStart() {},
            onDragOver() {
                return !1
            },
            drop() {},
            dispose() {}
        },
        horizontalScrolling: !1,
        transformOptimization: !0,
        alwaysConsumeMouseWheel: !0
    },
    Go = class {
        get context() {
            return this._context
        }
        set context(e) {
            this._context = e
        }
        constructor(e) {
            this.elements = e
        }
        update() {}
        getData() {
            return this.elements
        }
    },
    Cg = class {
        constructor(e) {
            this.elements = e
        }
        update() {}
        getData() {
            return this.elements
        }
    },
    Dg = class {
        constructor() {
            this.types = [], this.files = []
        }
        update(e) {
            if (e.types && this.types.splice(0, this.types.length, ...e.types), e.files) {
                this.files.splice(0, this.files.length);
                for (let t = 0; t < e.files.length; t++) {
                    const i = e.files.item(t);
                    i && (i.size || i.type) && this.files.push(i)
                }
            }
        }
        getData() {
            return {
                types: this.types,
                files: this.files
            }
        }
    };

function Eg(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? ds(e, t) : e === t
}
var kg = class {
        constructor(e) {
            e?.getSetSize ? this.getSetSize = e.getSetSize.bind(e) : this.getSetSize = (t, i, s) => s, e?.getPosInSet ? this.getPosInSet = e.getPosInSet.bind(e) : this.getPosInSet = (t, i) => i + 1, e?.getRole ? this.getRole = e.getRole.bind(e) : this.getRole = t => "listitem", e?.isChecked ? this.isChecked = e.isChecked.bind(e) : this.isChecked = t => {}
        }
    },
    Qe = class du {
        constructor(t, i, s, n = yt) {
            if (this.virtualDelegate = i, this.domId = `list_id_${++du.InstanceCount}`, this.renderers = new Map, this.renderWidth = 0, this._scrollHeight = 0, this.scrollableElementUpdateDisposable = null, this.scrollableElementWidthDelayer = new Zr(50), this.splicing = !1, this.dragOverAnimationStopDisposable = q.None, this.dragOverMouseY = 0, this.canDrop = !1, this.currentDragFeedbackDisposable = q.None, this.onDragLeaveTimeout = q.None, this.currentSelectionDisposable = q.None, this.disposables = new Y, this._onDidChangeContentHeight = new L, this._onDidChangeContentWidth = new L, this.onDidChangeContentHeight = A.latch(this._onDidChangeContentHeight.event, void 0, this.disposables), this.onDidChangeContentWidth = A.latch(this._onDidChangeContentWidth.event, void 0, this.disposables), this._horizontalScrolling = !1, n.horizontalScrolling && n.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
            this.items = [], this.itemId = 0, this.rangeMap = this.createRangeMap(n.paddingTop ?? 0);
            for (const o of s) this.renderers.set(o.templateId, o);
            if (this.cache = this.disposables.add(new wg(this.renderers)), this.lastRenderTop = 0, this.lastRenderHeight = 0, this.domNode = document.createElement("div"), this.domNode.className = "monaco-list", this.domNode.classList.add(this.domId), this.domNode.tabIndex = 0, this.domNode.classList.toggle("mouse-support", typeof n.mouseSupport == "boolean" ? n.mouseSupport : !0), this._horizontalScrolling = n.horizontalScrolling ?? yt.horizontalScrolling, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this.paddingBottom = typeof n.paddingBottom > "u" ? 0 : n.paddingBottom, this.itemGap = typeof n.itemGap > "u" ? 0 : n.itemGap, this.accessibilityProvider = new kg(n.accessibilityProvider), this.rowsContainer = document.createElement("div"), this.rowsContainer.className = "monaco-list-rows", (n.transformOptimization ?? yt.transformOptimization) && (this.rowsContainer.style.transform = "translate3d(0px, 0px, 0px)", this.rowsContainer.style.overflow = "hidden", this.rowsContainer.style.contain = "strict"), this.disposables.add(Bn.addTarget(this.rowsContainer)), this.scrollable = this.disposables.add(new zh({
                    forceIntegerValues: !0,
                    smoothScrollDuration: n.smoothScrolling ?? !1 ? 125 : 0,
                    scheduleAtNextAnimationFrame: o => $t(re(this.domNode), o)
                })), this.scrollableElement = this.disposables.add(new mg(this.rowsContainer, {
                    alwaysConsumeMouseWheel: n.alwaysConsumeMouseWheel ?? yt.alwaysConsumeMouseWheel,
                    horizontal: 1,
                    vertical: n.verticalScrollMode ?? yt.verticalScrollMode,
                    useShadows: n.useShadows ?? yt.useShadows,
                    mouseWheelScrollSensitivity: n.mouseWheelScrollSensitivity,
                    fastScrollSensitivity: n.fastScrollSensitivity,
                    scrollByPage: n.scrollByPage
                }, this.scrollable)), this.domNode.appendChild(this.scrollableElement.getDomNode()), t.appendChild(this.domNode), this.scrollableElement.onScroll(this.onScroll, this, this.disposables), this.disposables.add(O(this.rowsContainer, $e.Change, o => this.onTouchChange(o))), this.disposables.add(O(this.scrollableElement.getDomNode(), "scroll", o => {
                    const a = o.target,
                        c = a.scrollTop;
                    a.scrollTop = 0, n.scrollToActiveElement && this.setScrollTop(this.scrollTop + c)
                })), this.disposables.add(O(this.domNode, "dragover", o => this.onDragOver(this.toDragEvent(o)))), this.disposables.add(O(this.domNode, "drop", o => this.onDrop(this.toDragEvent(o)))), this.disposables.add(O(this.domNode, "dragleave", o => this.onDragLeave(this.toDragEvent(o)))), this.disposables.add(O(this.domNode, "dragend", o => this.onDragEnd(o))), n.userSelection) {
                if (n.dnd) throw new Error("DND and user selection cannot be used simultaneously");
                this.disposables.add(O(this.domNode, "mousedown", o => this.onPotentialSelectionStart(o)))
            }
            this.setRowLineHeight = n.setRowLineHeight ?? yt.setRowLineHeight, this.setRowHeight = n.setRowHeight ?? yt.setRowHeight, this.supportDynamicHeights = n.supportDynamicHeights ?? yt.supportDynamicHeights, this.dnd = n.dnd ?? this.disposables.add(yt.dnd), this.layout(n.initialSize?.height, n.initialSize?.width), n.scrollToActiveElement && this._setupFocusObserver(t)
        }
        get contentHeight() {
            return this.rangeMap.size
        }
        get contentWidth() {
            return this.scrollWidth ?? 0
        }
        get onDidScroll() {
            return this.scrollableElement.onScroll
        }
        get onWillScroll() {
            return this.scrollableElement.onWillScroll
        }
        get containerDomNode() {
            return this.rowsContainer
        }
        get scrollableElementDomNode() {
            return this.scrollableElement.getDomNode()
        }
        get horizontalScrolling() {
            return this._horizontalScrolling
        }
        set horizontalScrolling(t) {
            if (t !== this._horizontalScrolling) {
                if (t && this.supportDynamicHeights) throw new Error("Horizontal scrolling and dynamic heights not supported simultaneously");
                if (this._horizontalScrolling = t, this.domNode.classList.toggle("horizontal-scrolling", this._horizontalScrolling), this._horizontalScrolling) {
                    for (const i of this.items) this.measureItemWidth(i);
                    this.updateScrollWidth(), this.scrollableElement.setScrollDimensions({
                        width: Eo(this.domNode)
                    }), this.rowsContainer.style.width = `${Math.max(this.scrollWidth||0,this.renderWidth)}px`
                } else this.scrollableElementWidthDelayer.cancel(), this.scrollableElement.setScrollDimensions({
                    width: this.renderWidth,
                    scrollWidth: this.renderWidth
                }), this.rowsContainer.style.width = ""
            }
        }
        _setupFocusObserver(t) {
            this.disposables.add(O(t, "focus", () => {
                const i = Gi();
                this.activeElement !== i && i !== null && (this.activeElement = i, this._scrollToActiveElement(this.activeElement, t))
            }, !0))
        }
        _scrollToActiveElement(t, i) {
            const s = i.getBoundingClientRect(),
                r = t.getBoundingClientRect().top - s.top;
            r < 0 && this.setScrollTop(this.scrollTop + r)
        }
        updateOptions(t) {
            if (t.paddingBottom !== void 0 && (this.paddingBottom = t.paddingBottom, this.scrollableElement.setScrollDimensions({
                    scrollHeight: this.scrollHeight
                })), t.smoothScrolling !== void 0 && this.scrollable.setSmoothScrollDuration(t.smoothScrolling ? 125 : 0), t.horizontalScrolling !== void 0 && (this.horizontalScrolling = t.horizontalScrolling), t.itemGap !== void 0 && t.itemGap !== this.itemGap) {
                this.itemGap = t.itemGap;
                const s = this.items.slice();
                this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop), this._splice(0, s.length, s.map(n => n.element))
            }
            let i;
            if (t.scrollByPage !== void 0 && (i = {
                    ...i ?? {},
                    scrollByPage: t.scrollByPage
                }), t.mouseWheelScrollSensitivity !== void 0 && (i = {
                    ...i ?? {},
                    mouseWheelScrollSensitivity: t.mouseWheelScrollSensitivity
                }), t.fastScrollSensitivity !== void 0 && (i = {
                    ...i ?? {},
                    fastScrollSensitivity: t.fastScrollSensitivity
                }), i && this.scrollableElement.updateOptions(i), t.paddingTop !== void 0 && t.paddingTop !== this.rangeMap.paddingTop) {
                const s = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight),
                    n = t.paddingTop - this.rangeMap.paddingTop;
                this.rangeMap.paddingTop = t.paddingTop, this.render(s, Math.max(0, this.lastRenderTop + n), this.lastRenderHeight, void 0, void 0, !0), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.lastRenderTop, this.lastRenderHeight)
            }
        }
        delegateScrollFromMouseWheelEvent(t) {
            this.scrollableElement.delegateScrollFromMouseWheelEvent(t)
        }
        delegateVerticalScrollbarPointerDown(t) {
            this.scrollableElement.delegateVerticalScrollbarPointerDown(t)
        }
        updateElementHeight(t, i, s) {
            if (t < 0 || t >= this.items.length) return;
            const n = this.items[t].size;
            if (typeof i > "u") {
                if (!this.supportDynamicHeights) {
                    console.warn("Dynamic heights not supported", new Error().stack);
                    return
                }
                this.items[t].lastDynamicHeightWidth = void 0, i = n + this.probeDynamicHeight(t)
            }
            if (n === i) return;
            const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
            let o = 0;
            t < r.start || s !== null && s > t && s < r.end ? o = i - n : o = 0;
            const a = this.itemGap > 0 ? i + this.itemGap : i;
            this.rangeMap.splice(t, 1, [{
                size: a
            }]), this.items[t].size = i, this.render(r, Math.max(0, this.lastRenderTop + o), this.lastRenderHeight, void 0, void 0, !0), this.setScrollTop(this.lastRenderTop), this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights ? this._rerender(this.lastRenderTop, this.lastRenderHeight) : this._onDidChangeContentHeight.fire(this.contentHeight)
        }
        createRangeMap(t) {
            return new _g(t)
        }
        splice(t, i, s = []) {
            if (this.splicing) throw new Error("Can't run recursive splices.");
            this.splicing = !0;
            try {
                return this._splice(t, i, s)
            } finally {
                this.splicing = !1, this._onDidChangeContentHeight.fire(this.contentHeight)
            }
        }
        _splice(t, i, s = []) {
            const n = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight),
                r = {
                    start: t,
                    end: t + i
                },
                o = Ue.intersect(n, r),
                a = new Map;
            for (let b = o.end - 1; b >= o.start; b--) {
                const S = this.items[b];
                if (S.dragStartDisposable.dispose(), S.checkedDisposable.dispose(), S.row) {
                    let I = a.get(S.templateId);
                    I || (I = [], a.set(S.templateId, I));
                    const P = this.renderers.get(S.templateId);
                    P && P.disposeElement && P.disposeElement(S.element, b, S.row.templateData, S.size), I.unshift(S.row)
                }
                S.row = null, S.stale = !0
            }
            const c = {
                    start: t + i,
                    end: this.items.length
                },
                h = Ue.intersect(c, n),
                d = Ue.relativeComplement(c, n),
                u = s.map(b => ({
                    id: String(this.itemId++),
                    element: b,
                    templateId: this.virtualDelegate.getTemplateId(b),
                    size: this.virtualDelegate.getHeight(b),
                    width: void 0,
                    hasDynamicHeight: !!this.virtualDelegate.hasDynamicHeight && this.virtualDelegate.hasDynamicHeight(b),
                    lastDynamicHeightWidth: void 0,
                    row: null,
                    uri: void 0,
                    dropTarget: !1,
                    dragStartDisposable: q.None,
                    checkedDisposable: q.None,
                    stale: !1
                }));
            let f;
            if (t === 0 && i >= this.items.length) {
                if (this.rangeMap = this.createRangeMap(this.rangeMap.paddingTop), this.itemGap > 0) {
                    const b = u.map(S => ({
                        ...S,
                        size: S.size + this.itemGap
                    }));
                    if (b.length > 0) {
                        const S = b[b.length - 1];
                        b[b.length - 1] = {
                            ...S,
                            size: S.size - this.itemGap
                        }
                    }
                    this.rangeMap.splice(0, 0, b)
                } else this.rangeMap.splice(0, 0, u);
                f = this.items, this.items = u
            } else {
                if (this.itemGap > 0) {
                    const b = u.map(S => ({
                        ...S,
                        size: S.size + this.itemGap
                    }));
                    if (b.length > 0 && t + b.length === this.items.length + b.length) {
                        const S = b[b.length - 1];
                        b[b.length - 1] = {
                            ...S,
                            size: S.size - this.itemGap
                        }
                    }
                    this.rangeMap.splice(t, i, b)
                } else this.rangeMap.splice(t, i, u);
                f = Dr(this.items, t, i, u)
            }
            const p = s.length - i,
                g = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight),
                _ = Ko(h, p),
                y = Ue.intersect(g, _);
            for (let b = y.start; b < y.end; b++) this.updateItemInDOM(this.items[b], b);
            const w = Ue.relativeComplement(_, g);
            for (const b of w)
                for (let S = b.start; S < b.end; S++) this.removeItemFromDOM(S);
            const C = d.map(b => Ko(b, p)),
                E = [{
                    start: t,
                    end: t + s.length
                }, ...C].map(b => Ue.intersect(g, b)).reverse();
            for (const b of E)
                for (let S = b.end - 1; S >= b.start; S--) {
                    const I = this.items[S],
                        j = a.get(I.templateId)?.pop();
                    this.insertItemInDOM(S, j)
                }
            for (const b of a.values())
                for (const S of b) this.cache.release(S);
            return this.eventuallyUpdateScrollDimensions(), this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight), f.map(b => b.element)
        }
        eventuallyUpdateScrollDimensions() {
            this._scrollHeight = this.contentHeight, this.rowsContainer.style.height = `${this._scrollHeight}px`, this.scrollableElementUpdateDisposable || (this.scrollableElementUpdateDisposable = $t(re(this.domNode), () => {
                this.scrollableElement.setScrollDimensions({
                    scrollHeight: this.scrollHeight
                }), this.updateScrollWidth(), this.scrollableElementUpdateDisposable = null
            }))
        }
        eventuallyUpdateScrollWidth() {
            if (!this.horizontalScrolling) {
                this.scrollableElementWidthDelayer.cancel();
                return
            }
            this.scrollableElementWidthDelayer.trigger(() => this.updateScrollWidth())
        }
        updateScrollWidth() {
            if (!this.horizontalScrolling) return;
            let t = 0;
            for (const i of this.items) typeof i.width < "u" && (t = Math.max(t, i.width));
            this.scrollWidth = t, this.scrollableElement.setScrollDimensions({
                scrollWidth: t === 0 ? 0 : t + 10
            }), this._onDidChangeContentWidth.fire(this.scrollWidth)
        }
        updateWidth(t) {
            if (!this.horizontalScrolling || typeof this.scrollWidth > "u") return;
            const i = this.items[t];
            this.measureItemWidth(i), typeof i.width < "u" && i.width > this.scrollWidth && (this.scrollWidth = i.width, this.scrollableElement.setScrollDimensions({
                scrollWidth: this.scrollWidth + 10
            }), this._onDidChangeContentWidth.fire(this.scrollWidth))
        }
        rerender() {
            if (this.supportDynamicHeights) {
                for (const t of this.items) t.lastDynamicHeightWidth = void 0;
                this._rerender(this.lastRenderTop, this.lastRenderHeight)
            }
        }
        get length() {
            return this.items.length
        }
        get renderHeight() {
            return this.scrollableElement.getScrollDimensions().height
        }
        get firstVisibleIndex() {
            return this.getVisibleRange(this.lastRenderTop, this.lastRenderHeight).start
        }
        get firstMostlyVisibleIndex() {
            const t = this.firstVisibleIndex,
                i = this.rangeMap.positionAt(t),
                s = this.rangeMap.positionAt(t + 1);
            return s !== -1 && (s - i) / 2 + i < this.scrollTop ? t + 1 : t
        }
        get lastVisibleIndex() {
            return this.getRenderRange(this.lastRenderTop, this.lastRenderHeight).end - 1
        }
        element(t) {
            return this.items[t].element
        }
        indexOf(t) {
            return this.items.findIndex(i => i.element === t)
        }
        domElement(t) {
            const i = this.items[t].row;
            return i && i.domNode
        }
        elementHeight(t) {
            return this.items[t].size
        }
        elementTop(t) {
            return this.rangeMap.positionAt(t)
        }
        indexAt(t) {
            return this.rangeMap.indexAt(t)
        }
        indexAfter(t) {
            return this.rangeMap.indexAfter(t)
        }
        layout(t, i) {
            const s = {
                height: typeof t == "number" ? t : b0(this.domNode)
            };
            this.scrollableElementUpdateDisposable && (this.scrollableElementUpdateDisposable.dispose(), this.scrollableElementUpdateDisposable = null, s.scrollHeight = this.scrollHeight), this.scrollableElement.setScrollDimensions(s), typeof i < "u" && (this.renderWidth = i, this.supportDynamicHeights && this._rerender(this.scrollTop, this.renderHeight)), this.horizontalScrolling && this.scrollableElement.setScrollDimensions({
                width: typeof i == "number" ? i : Eo(this.domNode)
            })
        }
        render(t, i, s, n, r, o = !1) {
            const a = this.getRenderRange(i, s),
                c = Ue.relativeComplement(a, t).reverse(),
                h = Ue.relativeComplement(t, a);
            if (o) {
                const d = Ue.intersect(t, a);
                for (let u = d.start; u < d.end; u++) this.updateItemInDOM(this.items[u], u)
            }
            this.cache.transact(() => {
                for (const d of h)
                    for (let u = d.start; u < d.end; u++) this.removeItemFromDOM(u);
                for (const d of c)
                    for (let u = d.end - 1; u >= d.start; u--) this.insertItemInDOM(u)
            }), n !== void 0 && (this.rowsContainer.style.left = `-${n}px`), this.rowsContainer.style.top = `-${i}px`, this.horizontalScrolling && r !== void 0 && (this.rowsContainer.style.width = `${Math.max(r,this.renderWidth)}px`), this.lastRenderTop = i, this.lastRenderHeight = s
        }
        insertItemInDOM(t, i) {
            const s = this.items[t];
            if (!s.row)
                if (i) s.row = i, s.stale = !0;
                else {
                    const c = this.cache.alloc(s.templateId);
                    s.row = c.row, s.stale ||= c.isReusingConnectedDomNode
                } const n = this.accessibilityProvider.getRole(s.element) || "listitem";
            s.row.domNode.setAttribute("role", n);
            const r = this.accessibilityProvider.isChecked(s.element);
            if (typeof r == "boolean") s.row.domNode.setAttribute("aria-checked", String(!!r));
            else if (r) {
                const c = h => s.row.domNode.setAttribute("aria-checked", String(!!h));
                c(r.value), s.checkedDisposable = r.onDidChange(() => c(r.value))
            }
            if (s.stale || !s.row.domNode.parentElement) {
                const c = this.items.at(t + 1)?.row?.domNode ?? null;
                (s.row.domNode.parentElement !== this.rowsContainer || s.row.domNode.nextElementSibling !== c) && this.rowsContainer.insertBefore(s.row.domNode, c), s.stale = !1
            }
            this.updateItemInDOM(s, t);
            const o = this.renderers.get(s.templateId);
            if (!o) throw new Error(`No renderer found for template id ${s.templateId}`);
            o?.renderElement(s.element, t, s.row.templateData, s.size);
            const a = this.dnd.getDragURI(s.element);
            s.dragStartDisposable.dispose(), s.row.domNode.draggable = !!a, a && (s.dragStartDisposable = O(s.row.domNode, "dragstart", c => this.onDragStart(s.element, a, c))), this.horizontalScrolling && (this.measureItemWidth(s), this.eventuallyUpdateScrollWidth())
        }
        measureItemWidth(t) {
            if (!t.row || !t.row.domNode) return;
            t.row.domNode.style.width = "fit-content", t.width = Eo(t.row.domNode);
            const i = re(t.row.domNode).getComputedStyle(t.row.domNode);
            i.paddingLeft && (t.width += parseFloat(i.paddingLeft)), i.paddingRight && (t.width += parseFloat(i.paddingRight)), t.row.domNode.style.width = ""
        }
        updateItemInDOM(t, i) {
            t.row.domNode.style.top = `${this.elementTop(i)}px`, this.setRowHeight && (t.row.domNode.style.height = `${t.size}px`), this.setRowLineHeight && (t.row.domNode.style.lineHeight = `${t.size}px`), t.row.domNode.setAttribute("data-index", `${i}`), t.row.domNode.setAttribute("data-last-element", i === this.length - 1 ? "true" : "false"), t.row.domNode.setAttribute("data-parity", i % 2 === 0 ? "even" : "odd"), t.row.domNode.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(t.element, i, this.length))), t.row.domNode.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(t.element, i))), t.row.domNode.setAttribute("id", this.getElementDomId(i)), t.row.domNode.classList.toggle("drop-target", t.dropTarget)
        }
        removeItemFromDOM(t) {
            const i = this.items[t];
            if (i.dragStartDisposable.dispose(), i.checkedDisposable.dispose(), i.row) {
                const s = this.renderers.get(i.templateId);
                s && s.disposeElement && s.disposeElement(i.element, t, i.row.templateData, i.size), this.cache.release(i.row), i.row = null
            }
            this.horizontalScrolling && this.eventuallyUpdateScrollWidth()
        }
        getScrollTop() {
            return this.scrollableElement.getScrollPosition().scrollTop
        }
        setScrollTop(t, i) {
            this.scrollableElementUpdateDisposable && (this.scrollableElementUpdateDisposable.dispose(), this.scrollableElementUpdateDisposable = null, this.scrollableElement.setScrollDimensions({
                scrollHeight: this.scrollHeight
            })), this.scrollableElement.setScrollPosition({
                scrollTop: t,
                reuseAnimation: i
            })
        }
        getScrollLeft() {
            return this.scrollableElement.getScrollPosition().scrollLeft
        }
        setScrollLeft(t) {
            this.scrollableElementUpdateDisposable && (this.scrollableElementUpdateDisposable.dispose(), this.scrollableElementUpdateDisposable = null, this.scrollableElement.setScrollDimensions({
                scrollWidth: this.scrollWidth
            })), this.scrollableElement.setScrollPosition({
                scrollLeft: t
            })
        }
        get scrollTop() {
            return this.getScrollTop()
        }
        set scrollTop(t) {
            this.setScrollTop(t)
        }
        get scrollHeight() {
            return this._scrollHeight + (this.horizontalScrolling ? 10 : 0) + this.paddingBottom
        }
        get onMouseClick() {
            return A.map(this.disposables.add(new le(this.domNode, "click")).event, t => this.toMouseEvent(t), this.disposables)
        }
        get onMouseDblClick() {
            return A.map(this.disposables.add(new le(this.domNode, "dblclick")).event, t => this.toMouseEvent(t), this.disposables)
        }
        get onMouseMiddleClick() {
            return A.filter(A.map(this.disposables.add(new le(this.domNode, "auxclick")).event, t => this.toMouseEvent(t), this.disposables), t => t.browserEvent.button === 1, this.disposables)
        }
        get onMouseUp() {
            return A.map(this.disposables.add(new le(this.domNode, "mouseup")).event, t => this.toMouseEvent(t), this.disposables)
        }
        get onMouseDown() {
            return A.map(this.disposables.add(new le(this.domNode, "mousedown")).event, t => this.toMouseEvent(t), this.disposables)
        }
        get onMouseOver() {
            return A.map(this.disposables.add(new le(this.domNode, "mouseover")).event, t => this.toMouseEvent(t), this.disposables)
        }
        get onMouseMove() {
            return A.map(this.disposables.add(new le(this.domNode, "mousemove")).event, t => this.toMouseEvent(t), this.disposables)
        }
        get onMouseOut() {
            return A.map(this.disposables.add(new le(this.domNode, "mouseout")).event, t => this.toMouseEvent(t), this.disposables)
        }
        get onContextMenu() {
            return A.any(A.map(this.disposables.add(new le(this.domNode, "contextmenu")).event, t => this.toMouseEvent(t), this.disposables), A.map(this.disposables.add(new le(this.domNode, $e.Contextmenu)).event, t => this.toGestureEvent(t), this.disposables))
        }
        get onTouchStart() {
            return A.map(this.disposables.add(new le(this.domNode, "touchstart")).event, t => this.toTouchEvent(t), this.disposables)
        }
        get onTap() {
            return A.map(this.disposables.add(new le(this.rowsContainer, $e.Tap)).event, t => this.toGestureEvent(t), this.disposables)
        }
        toMouseEvent(t) {
            const i = this.getItemIndexFromEventTarget(t.target || null),
                s = typeof i > "u" ? void 0 : this.items[i],
                n = s && s.element;
            return {
                browserEvent: t,
                index: i,
                element: n
            }
        }
        toTouchEvent(t) {
            const i = this.getItemIndexFromEventTarget(t.target || null),
                s = typeof i > "u" ? void 0 : this.items[i],
                n = s && s.element;
            return {
                browserEvent: t,
                index: i,
                element: n
            }
        }
        toGestureEvent(t) {
            const i = this.getItemIndexFromEventTarget(t.initialTarget || null),
                s = typeof i > "u" ? void 0 : this.items[i],
                n = s && s.element;
            return {
                browserEvent: t,
                index: i,
                element: n
            }
        }
        toDragEvent(t) {
            const i = this.getItemIndexFromEventTarget(t.target || null),
                s = typeof i > "u" ? void 0 : this.items[i],
                n = s && s.element,
                r = this.getTargetSector(t, i);
            return {
                browserEvent: t,
                index: i,
                element: n,
                sector: r
            }
        }
        onScroll(t) {
            try {
                const i = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
                this.render(i, t.scrollTop, t.height, t.scrollLeft, t.scrollWidth), this.supportDynamicHeights && this._rerender(t.scrollTop, t.height, t.inSmoothScrolling)
            } catch (i) {
                throw console.error("Got bad scroll event:", t), i
            }
        }
        onTouchChange(t) {
            t.preventDefault(), t.stopPropagation(), this.scrollTop -= t.translationY
        }
        onDragStart(t, i, s) {
            if (!s.dataTransfer) return;
            const n = this.dnd.getDragElements(t);
            s.dataTransfer.effectAllowed = "copyMove", s.dataTransfer.setData(_h.TEXT, i);
            let r;
            this.dnd.getDragLabel && (r = this.dnd.getDragLabel(n, s)), typeof r > "u" && (r = String(n.length)), Sg(s, this.domNode, r, [this.domId]), this.domNode.classList.add("dragging"), this.currentDragData = new Go(n), pi.CurrentDragAndDropData = new Cg(n), this.dnd.onDragStart?.(this.currentDragData, s)
        }
        onPotentialSelectionStart(t) {
            this.currentSelectionDisposable.dispose();
            const i = h0(this.domNode),
                s = this.currentSelectionDisposable = new Y,
                n = s.add(new Y);
            n.add(O(this.domNode, "selectstart", () => {
                n.add(O(i, "mousemove", r => {
                    i.getSelection()?.isCollapsed === !1 && this.setupDragAndDropScrollTopAnimation(r)
                })), s.add(de(() => {
                    const r = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
                    this.currentSelectionBounds = void 0, this.render(r, this.lastRenderTop, this.lastRenderHeight, void 0, void 0)
                })), s.add(O(i, "selectionchange", () => {
                    const r = i.getSelection();
                    if (!r || r.isCollapsed) {
                        n.isDisposed && s.dispose();
                        return
                    }
                    let o = this.getIndexOfListElement(r.anchorNode),
                        a = this.getIndexOfListElement(r.focusNode);
                    o !== void 0 && a !== void 0 && (a < o && ([o, a] = [a, o]), this.currentSelectionBounds = {
                        start: o,
                        end: a
                    })
                }))
            })), n.add(O(i, "mouseup", () => {
                n.dispose(), this.teardownDragAndDropScrollTopAnimation(), i.getSelection()?.isCollapsed !== !1 && s.dispose()
            }))
        }
        getIndexOfListElement(t) {
            if (!(!t || !this.domNode.contains(t)))
                for (; t && t !== this.domNode;) {
                    if (t.dataset?.index) return Number(t.dataset.index);
                    t = t.parentElement
                }
        }
        onDragOver(t) {
            if (t.browserEvent.preventDefault(), this.onDragLeaveTimeout.dispose(), pi.CurrentDragAndDropData && pi.CurrentDragAndDropData.getData() === "vscode-ui" || (this.setupDragAndDropScrollTopAnimation(t.browserEvent), !t.browserEvent.dataTransfer)) return !1;
            if (!this.currentDragData)
                if (pi.CurrentDragAndDropData) this.currentDragData = pi.CurrentDragAndDropData;
                else {
                    if (!t.browserEvent.dataTransfer.types) return !1;
                    this.currentDragData = new Dg
                } const i = this.dnd.onDragOver(this.currentDragData, t.element, t.index, t.sector, t.browserEvent);
            if (this.canDrop = typeof i == "boolean" ? i : i.accept, !this.canDrop) return this.currentDragFeedback = void 0, this.currentDragFeedbackDisposable.dispose(), !1;
            t.browserEvent.dataTransfer.dropEffect = typeof i != "boolean" && i.effect?.type === 0 ? "copy" : "move";
            let s;
            typeof i != "boolean" && i.feedback ? s = i.feedback : typeof t.index > "u" ? s = [-1] : s = [t.index], s = Sr(s).filter(r => r >= -1 && r < this.length).sort((r, o) => r - o), s = s[0] === -1 ? [-1] : s;
            let n = typeof i != "boolean" && i.effect && i.effect.position ? i.effect.position : "drop-target";
            if (Eg(this.currentDragFeedback, s) && this.currentDragFeedbackPosition === n) return !0;
            if (this.currentDragFeedback = s, this.currentDragFeedbackPosition = n, this.currentDragFeedbackDisposable.dispose(), s[0] === -1) this.domNode.classList.add(n), this.rowsContainer.classList.add(n), this.currentDragFeedbackDisposable = de(() => {
                this.domNode.classList.remove(n), this.rowsContainer.classList.remove(n)
            });
            else {
                if (s.length > 1 && n !== "drop-target") throw new Error("Can't use multiple feedbacks with position different than 'over'");
                n === "drop-target-after" && s[0] < this.length - 1 && (s[0] += 1, n = "drop-target-before");
                for (const r of s) {
                    const o = this.items[r];
                    o.dropTarget = !0, o.row?.domNode.classList.add(n)
                }
                this.currentDragFeedbackDisposable = de(() => {
                    for (const r of s) {
                        const o = this.items[r];
                        o.dropTarget = !1, o.row?.domNode.classList.remove(n)
                    }
                })
            }
            return !0
        }
        onDragLeave(t) {
            this.onDragLeaveTimeout.dispose(), this.onDragLeaveTimeout = Qr(() => this.clearDragOverFeedback(), 100, this.disposables), this.currentDragData && this.dnd.onDragLeave?.(this.currentDragData, t.element, t.index, t.browserEvent)
        }
        onDrop(t) {
            if (!this.canDrop) return;
            const i = this.currentDragData;
            this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData = void 0, pi.CurrentDragAndDropData = void 0, !(!i || !t.browserEvent.dataTransfer) && (t.browserEvent.preventDefault(), i.update(t.browserEvent.dataTransfer), this.dnd.drop(i, t.element, t.index, t.sector, t.browserEvent))
        }
        onDragEnd(t) {
            this.canDrop = !1, this.teardownDragAndDropScrollTopAnimation(), this.clearDragOverFeedback(), this.domNode.classList.remove("dragging"), this.currentDragData = void 0, pi.CurrentDragAndDropData = void 0, this.dnd.onDragEnd?.(t)
        }
        clearDragOverFeedback() {
            this.currentDragFeedback = void 0, this.currentDragFeedbackPosition = void 0, this.currentDragFeedbackDisposable.dispose(), this.currentDragFeedbackDisposable = q.None
        }
        setupDragAndDropScrollTopAnimation(t) {
            if (!this.dragOverAnimationDisposable) {
                const i = y0(this.domNode).top;
                this.dragOverAnimationDisposable = T0(re(this.domNode), this.animateDragAndDropScrollTop.bind(this, i))
            }
            this.dragOverAnimationStopDisposable.dispose(), this.dragOverAnimationStopDisposable = Qr(() => {
                this.dragOverAnimationDisposable && (this.dragOverAnimationDisposable.dispose(), this.dragOverAnimationDisposable = void 0)
            }, 1e3, this.disposables), this.dragOverMouseY = t.pageY
        }
        animateDragAndDropScrollTop(t) {
            if (this.dragOverMouseY === void 0) return;
            const i = this.dragOverMouseY - t,
                s = this.renderHeight - 35;
            i < 35 ? this.scrollTop += Math.max(-14, Math.floor(.3 * (i - 35))) : i > s && (this.scrollTop += Math.min(14, Math.floor(.3 * (i - s))))
        }
        teardownDragAndDropScrollTopAnimation() {
            this.dragOverAnimationStopDisposable.dispose(), this.dragOverAnimationDisposable && (this.dragOverAnimationDisposable.dispose(), this.dragOverAnimationDisposable = void 0)
        }
        getTargetSector(t, i) {
            if (i === void 0) return;
            const s = t.offsetY / this.items[i].size,
                n = Math.floor(s / .25);
            return Ln(n, 0, 3)
        }
        getItemIndexFromEventTarget(t) {
            const i = this.scrollableElement.getDomNode();
            let s = t;
            for (;
                (Nt(s) || gh(s)) && s !== this.rowsContainer && i.contains(s);) {
                const n = s.getAttribute("data-index");
                if (n) {
                    const r = Number(n);
                    if (!isNaN(r)) return r
                }
                s = s.parentElement
            }
        }
        getVisibleRange(t, i) {
            return {
                start: this.rangeMap.indexAt(t),
                end: this.rangeMap.indexAfter(t + i - 1)
            }
        }
        getRenderRange(t, i) {
            const s = this.getVisibleRange(t, i);
            if (this.currentSelectionBounds) {
                const n = this.rangeMap.count;
                s.start = Math.min(s.start, this.currentSelectionBounds.start, n), s.end = Math.min(Math.max(s.end, this.currentSelectionBounds.end + 1), n)
            }
            return s
        }
        _rerender(t, i, s) {
            const n = this.getRenderRange(t, i);
            let r, o;
            t === this.elementTop(n.start) ? (r = n.start, o = 0) : n.end - n.start > 1 && (r = n.start + 1, o = this.elementTop(r) - t);
            let a = 0;
            for (;;) {
                const c = this.getRenderRange(t, i);
                let h = !1;
                for (let d = c.start; d < c.end; d++) {
                    const u = this.probeDynamicHeight(d);
                    u !== 0 && this.rangeMap.splice(d, 1, [this.items[d]]), a += u, h = h || u !== 0
                }
                if (!h) {
                    a !== 0 && this.eventuallyUpdateScrollDimensions();
                    const d = Ue.relativeComplement(n, c);
                    for (const f of d)
                        for (let p = f.start; p < f.end; p++) this.items[p].row && this.removeItemFromDOM(p);
                    const u = Ue.relativeComplement(c, n).reverse();
                    for (const f of u)
                        for (let p = f.end - 1; p >= f.start; p--) this.insertItemInDOM(p);
                    for (let f = c.start; f < c.end; f++) this.items[f].row && this.updateItemInDOM(this.items[f], f);
                    if (typeof r == "number") {
                        const f = this.scrollable.getFutureScrollPosition().scrollTop - t,
                            p = this.elementTop(r) - o + f;
                        this.setScrollTop(p, s)
                    }
                    this._onDidChangeContentHeight.fire(this.contentHeight);
                    return
                }
            }
        }
        probeDynamicHeight(t) {
            const i = this.items[t];
            if (this.virtualDelegate.getDynamicHeight) {
                const o = this.virtualDelegate.getDynamicHeight(i.element);
                if (o !== null) {
                    const a = i.size;
                    return i.size = o, i.lastDynamicHeightWidth = this.renderWidth, o - a
                }
            }
            if (!i.hasDynamicHeight || i.lastDynamicHeightWidth === this.renderWidth || this.virtualDelegate.hasDynamicHeight && !this.virtualDelegate.hasDynamicHeight(i.element)) return 0;
            const s = i.size;
            if (i.row) return i.row.domNode.style.height = "", i.size = i.row.domNode.offsetHeight, i.size === 0 && !Ki(i.row.domNode, re(i.row.domNode).document.body) && console.warn("Measuring item node that is not in DOM! Add ListView to the DOM before measuring row height!", new Error().stack), i.lastDynamicHeightWidth = this.renderWidth, i.size - s;
            const {
                row: n
            } = this.cache.alloc(i.templateId);
            n.domNode.style.height = "", this.rowsContainer.appendChild(n.domNode);
            const r = this.renderers.get(i.templateId);
            if (!r) throw new et("Missing renderer for templateId: " + i.templateId);
            return r.renderElement(i.element, t, n.templateData, void 0), i.size = n.domNode.offsetHeight, r.disposeElement?.(i.element, t, n.templateData, void 0), this.virtualDelegate.setDynamicHeight?.(i.element, i.size), i.lastDynamicHeightWidth = this.renderWidth, n.domNode.remove(), this.cache.release(n), i.size - s
        }
        getElementDomId(t) {
            return `${this.domId}_${t}`
        }
        dispose() {
            for (const t of this.items)
                if (t.dragStartDisposable.dispose(), t.checkedDisposable.dispose(), t.row) {
                    const i = this.renderers.get(t.row.templateId);
                    i && (i.disposeElement?.(t.element, -1, t.row.templateData, void 0), i.disposeTemplate(t.row.templateData))
                } this.items = [], this.domNode?.remove(), this.dragOverAnimationDisposable?.dispose(), this.disposables.dispose()
        }
    };
Qe.InstanceCount = 0, __decorate([ge], Qe.prototype, "onMouseClick", null), __decorate([ge], Qe.prototype, "onMouseDblClick", null), __decorate([ge], Qe.prototype, "onMouseMiddleClick", null), __decorate([ge], Qe.prototype, "onMouseUp", null), __decorate([ge], Qe.prototype, "onMouseDown", null), __decorate([ge], Qe.prototype, "onMouseOver", null), __decorate([ge], Qe.prototype, "onMouseMove", null), __decorate([ge], Qe.prototype, "onMouseOut", null), __decorate([ge], Qe.prototype, "onContextMenu", null), __decorate([ge], Qe.prototype, "onTouchStart", null), __decorate([ge], Qe.prototype, "onTap", null);
var Tg = Qe,
    xg = class {
        constructor(e) {
            this.trait = e, this.renderedElements = []
        }
        get templateId() {
            return `template:${this.trait.name}`
        }
        renderTemplate(e) {
            return e
        }
        renderElement(e, t, i) {
            const s = this.renderedElements.findIndex(n => n.templateData === i);
            if (s >= 0) {
                const n = this.renderedElements[s];
                this.trait.unrender(i), n.index = t
            } else {
                const n = {
                    index: t,
                    templateData: i
                };
                this.renderedElements.push(n)
            }
            this.trait.renderIndex(t, i)
        }
        splice(e, t, i) {
            const s = [];
            for (const n of this.renderedElements) n.index < e ? s.push(n) : n.index >= e + t && s.push({
                index: n.index + i - t,
                templateData: n.templateData
            });
            this.renderedElements = s
        }
        renderIndexes(e) {
            for (const {
                    index: t,
                    templateData: i
                }
                of this.renderedElements) e.indexOf(t) > -1 && this.trait.renderIndex(t, i)
        }
        disposeTemplate(e) {
            const t = this.renderedElements.findIndex(i => i.templateData === e);
            t < 0 || this.renderedElements.splice(t, 1)
        }
    },
    Kn = class {
        constructor(e) {
            this._trait = e, this.indexes = [], this.sortedIndexes = [], this._onChange = new L, this.onChange = this._onChange.event
        }
        get name() {
            return this._trait
        }
        get renderer() {
            return new xg(this)
        }
        splice(e, t, i) {
            const s = i.length - t,
                n = e + t,
                r = [];
            let o = 0;
            for (; o < this.sortedIndexes.length && this.sortedIndexes[o] < e;) r.push(this.sortedIndexes[o++]);
            for (let a = 0; a < i.length; a++) i[a] && r.push(a + e);
            for (; o < this.sortedIndexes.length && this.sortedIndexes[o] >= n;) r.push(this.sortedIndexes[o++] + s);
            this.renderer.splice(e, t, i.length), this._set(r, r)
        }
        renderIndex(e, t) {
            t.classList.toggle(this._trait, this.contains(e))
        }
        unrender(e) {
            e.classList.remove(this._trait)
        }
        set(e, t) {
            return this._set(e, [...e].sort(Zh), t)
        }
        _set(e, t, i) {
            const s = this.indexes,
                n = this.sortedIndexes;
            this.indexes = e, this.sortedIndexes = t;
            const r = jo(n, e);
            return this.renderer.renderIndexes(r), this._onChange.fire({
                indexes: e,
                browserEvent: i
            }), s
        }
        get() {
            return this.indexes
        }
        contains(e) {
            return Bu(this.sortedIndexes, e, Zh) >= 0
        }
        dispose() {
            Ke(this._onChange)
        }
    };
__decorate([ge], Kn.prototype, "renderer", null);
var Ag = class extends Kn {
        constructor(e) {
            super("selected"), this.setAriaSelected = e
        }
        renderIndex(e, t) {
            super.renderIndex(e, t), this.setAriaSelected && (this.contains(e) ? t.setAttribute("aria-selected", "true") : t.setAttribute("aria-selected", "false"))
        }
    },
    qo = class {
        constructor(e, t, i) {
            this.trait = e, this.view = t, this.identityProvider = i
        }
        splice(e, t, i) {
            if (!this.identityProvider) return this.trait.splice(e, t, new Array(i.length).fill(!1));
            const s = this.trait.get().map(o => this.identityProvider.getId(this.view.element(o)).toString());
            if (s.length === 0) return this.trait.splice(e, t, new Array(i.length).fill(!1));
            const n = new Set(s),
                r = i.map(o => n.has(this.identityProvider.getId(o).toString()));
            this.trait.splice(e, t, r)
        }
    };

function Ls(e, t) {
    return e.classList.contains(t) ? !0 : e.classList.contains("monaco-list") || !e.parentElement ? !1 : Ls(e.parentElement, t)
}

function Rs(e) {
    return Ls(e, "monaco-editor")
}

function Ng(e) {
    return Ls(e, "monaco-custom-toggle")
}

function Ig(e) {
    return Ls(e, "action-item")
}

function Ms(e) {
    return Ls(e, "monaco-tree-sticky-row")
}

function Ps(e) {
    return e.classList.contains("monaco-tree-sticky-container")
}

function qh(e) {
    return e.tagName === "A" && e.classList.contains("monaco-button") || e.tagName === "DIV" && e.classList.contains("monaco-button-dropdown") ? !0 : e.classList.contains("monaco-list") || !e.parentElement ? !1 : qh(e.parentElement)
}
var jh = class {
    constructor(e, t, i) {
        this.list = e, this.view = t, this.disposables = new Y, this.multipleSelectionDisposables = new Y, this.multipleSelectionSupport = i.multipleSelectionSupport, this.disposables.add(this.onKeyDown(s => {
            switch (s.keyCode) {
                case 3:
                    return this.onEnter(s);
                case 16:
                    return this.onUpArrow(s);
                case 18:
                    return this.onDownArrow(s);
                case 11:
                    return this.onPageUpArrow(s);
                case 12:
                    return this.onPageDownArrow(s);
                case 9:
                    return this.onEscape(s);
                case 31:
                    this.multipleSelectionSupport && (Re ? s.metaKey : s.ctrlKey) && this.onCtrlA(s)
            }
        }))
    }
    get onKeyDown() {
        return A.chain(this.disposables.add(new le(this.view.domNode, "keydown")).event, e => e.filter(t => !Ut(t.target)).map(t => new Me(t)))
    }
    updateOptions(e) {
        e.multipleSelectionSupport !== void 0 && (this.multipleSelectionSupport = e.multipleSelectionSupport)
    }
    onEnter(e) {
        e.preventDefault(), e.stopPropagation(), this.list.setSelection(this.list.getFocus(), e.browserEvent)
    }
    onUpArrow(e) {
        e.preventDefault(), e.stopPropagation(), this.list.focusPrevious(1, !1, e.browserEvent);
        const t = this.list.getFocus()[0];
        this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus()
    }
    onDownArrow(e) {
        e.preventDefault(), e.stopPropagation(), this.list.focusNext(1, !1, e.browserEvent);
        const t = this.list.getFocus()[0];
        this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus()
    }
    onPageUpArrow(e) {
        e.preventDefault(), e.stopPropagation(), this.list.focusPreviousPage(e.browserEvent);
        const t = this.list.getFocus()[0];
        this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus()
    }
    onPageDownArrow(e) {
        e.preventDefault(), e.stopPropagation(), this.list.focusNextPage(e.browserEvent);
        const t = this.list.getFocus()[0];
        this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus()
    }
    onCtrlA(e) {
        e.preventDefault(), e.stopPropagation(), this.list.setSelection(Cr(this.list.length), e.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus()
    }
    onEscape(e) {
        this.list.getSelection().length && (e.preventDefault(), e.stopPropagation(), this.list.setSelection([], e.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus())
    }
    dispose() {
        this.disposables.dispose(), this.multipleSelectionDisposables.dispose()
    }
};
__decorate([ge], jh.prototype, "onKeyDown", null);
var Lg = new class {
        mightProducePrintableCharacter(e) {
            return e.ctrlKey || e.metaKey || e.altKey ? !1 : e.keyCode >= 31 && e.keyCode <= 56 || e.keyCode >= 21 && e.keyCode <= 30 || e.keyCode >= 98 && e.keyCode <= 107 || e.keyCode >= 85 && e.keyCode <= 95
        }
    },
    Rg = class {
        constructor(e, t, i, s, n) {
            this.list = e, this.view = t, this.keyboardNavigationLabelProvider = i, this.keyboardNavigationEventFilter = s, this.delegate = n, this.enabled = !1, this.state = 0, this.mode = 0, this.triggered = !1, this.previouslyFocused = -1, this.enabledDisposables = new Y, this.disposables = new Y, this.updateOptions(e.options)
        }
        updateOptions(e) {
            e.typeNavigationEnabled ?? !0 ? this.enable() : this.disable(), this.mode = e.typeNavigationMode ?? 0
        }
        trigger() {
            this.triggered = !this.triggered
        }
        enable() {
            if (this.enabled) return;
            let e = !1;
            const t = A.chain(this.enabledDisposables.add(new le(this.view.domNode, "keydown")).event, n => n.filter(r => !Ut(r.target)).filter(() => this.mode === 0 || this.triggered).map(r => new Me(r)).filter(r => e || this.keyboardNavigationEventFilter(r)).filter(r => this.delegate.mightProducePrintableCharacter(r)).forEach(r => fe.stop(r, !0)).map(r => r.browserEvent.key)),
                i = A.debounce(t, () => null, 800, void 0, void 0, void 0, this.enabledDisposables);
            A.reduce(A.any(t, i), (n, r) => r === null ? null : (n || "") + r, void 0, this.enabledDisposables)(this.onInput, this, this.enabledDisposables), i(this.onClear, this, this.enabledDisposables), t(() => e = !0, void 0, this.enabledDisposables), i(() => e = !1, void 0, this.enabledDisposables), this.enabled = !0, this.triggered = !1
        }
        disable() {
            this.enabled && (this.enabledDisposables.clear(), this.enabled = !1, this.triggered = !1)
        }
        onClear() {
            const e = this.list.getFocus();
            if (e.length > 0 && e[0] === this.previouslyFocused) {
                const t = this.list.options.accessibilityProvider?.getAriaLabel(this.list.element(e[0]));
                typeof t == "string" ? xs(t) : t && xs(t.get())
            }
            this.previouslyFocused = -1
        }
        onInput(e) {
            if (!e) {
                this.state = 0, this.triggered = !1;
                return
            }
            const t = this.list.getFocus(),
                i = t.length > 0 ? t[0] : 0,
                s = this.state === 0 ? 1 : 0;
            this.state = 1;
            for (let n = 0; n < this.list.length; n++) {
                const r = (i + n + s) % this.list.length,
                    o = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(r)),
                    a = o && o.toString();
                if (this.list.options.typeNavigationEnabled) {
                    if (typeof a < "u") {
                        if ($n(e, a)) {
                            this.previouslyFocused = i, this.list.setFocus([r]), this.list.reveal(r);
                            return
                        }
                        const c = K0(e, a);
                        if (c && c[0].end - c[0].start > 1 && c.length === 1) {
                            this.previouslyFocused = i, this.list.setFocus([r]), this.list.reveal(r);
                            return
                        }
                    }
                } else if (typeof a > "u" || $n(e, a)) {
                    this.previouslyFocused = i, this.list.setFocus([r]), this.list.reveal(r);
                    return
                }
            }
        }
        dispose() {
            this.disable(), this.enabledDisposables.dispose(), this.disposables.dispose()
        }
    },
    Mg = class {
        constructor(e, t) {
            this.list = e, this.view = t, this.disposables = new Y;
            const i = A.chain(this.disposables.add(new le(t.domNode, "keydown")).event, n => n.filter(r => !Ut(r.target)).map(r => new Me(r)));
            A.chain(i, n => n.filter(r => r.keyCode === 2 && !r.ctrlKey && !r.metaKey && !r.shiftKey && !r.altKey))(this.onTab, this, this.disposables)
        }
        onTab(e) {
            if (e.target !== this.view.domNode) return;
            const t = this.list.getFocus();
            if (t.length === 0) return;
            const i = this.view.domElement(t[0]);
            if (!i) return;
            const s = i.querySelector("[tabIndex]");
            if (!s || !Nt(s) || s.tabIndex === -1) return;
            const n = re(s).getComputedStyle(s);
            n.visibility === "hidden" || n.display === "none" || (e.preventDefault(), e.stopPropagation(), s.focus())
        }
        dispose() {
            this.disposables.dispose()
        }
    };

function Pg(e) {
    return Re ? e.browserEvent.metaKey : e.browserEvent.ctrlKey
}

function Og(e) {
    return e.browserEvent.shiftKey
}

function Fg(e) {
    return C0(e) && e.button === 2
}
var Yh = {
        isSelectionSingleChangeEvent: Pg,
        isSelectionRangeChangeEvent: Og
    },
    Xh = class {
        constructor(e) {
            this.list = e, this.disposables = new Y, this._onPointer = new L, this.onPointer = this._onPointer.event, e.options.multipleSelectionSupport !== !1 && (this.multipleSelectionController = this.list.options.multipleSelectionController || Yh), this.mouseSupport = typeof e.options.mouseSupport > "u" || !!e.options.mouseSupport, this.mouseSupport && (e.onMouseDown(this.onMouseDown, this, this.disposables), e.onContextMenu(this.onContextMenu, this, this.disposables), e.onMouseDblClick(this.onDoubleClick, this, this.disposables), e.onTouchStart(this.onMouseDown, this, this.disposables), this.disposables.add(Bn.addTarget(e.getHTMLElement()))), A.any(e.onMouseClick, e.onMouseMiddleClick, e.onTap)(this.onViewPointer, this, this.disposables)
        }
        updateOptions(e) {
            e.multipleSelectionSupport !== void 0 && (this.multipleSelectionController = void 0, e.multipleSelectionSupport && (this.multipleSelectionController = this.list.options.multipleSelectionController || Yh))
        }
        isSelectionSingleChangeEvent(e) {
            return this.multipleSelectionController ? this.multipleSelectionController.isSelectionSingleChangeEvent(e) : !1
        }
        isSelectionRangeChangeEvent(e) {
            return this.multipleSelectionController ? this.multipleSelectionController.isSelectionRangeChangeEvent(e) : !1
        }
        isSelectionChangeEvent(e) {
            return this.isSelectionSingleChangeEvent(e) || this.isSelectionRangeChangeEvent(e)
        }
        onMouseDown(e) {
            Rs(e.browserEvent.target) || Gi() !== e.browserEvent.target && this.list.domFocus()
        }
        onContextMenu(e) {
            if (Ut(e.browserEvent.target) || Rs(e.browserEvent.target)) return;
            const t = typeof e.index > "u" ? [] : [e.index];
            this.list.setFocus(t, e.browserEvent)
        }
        onViewPointer(e) {
            if (!this.mouseSupport || Ut(e.browserEvent.target) || Rs(e.browserEvent.target) || e.browserEvent.isHandledByList) return;
            e.browserEvent.isHandledByList = !0;
            const t = e.index;
            if (typeof t > "u") {
                this.list.setFocus([], e.browserEvent), this.list.setSelection([], e.browserEvent), this.list.setAnchor(void 0);
                return
            }
            if (this.isSelectionChangeEvent(e)) return this.changeSelection(e);
            this.list.setFocus([t], e.browserEvent), this.list.setAnchor(t), Fg(e.browserEvent) || this.list.setSelection([t], e.browserEvent), this._onPointer.fire(e)
        }
        onDoubleClick(e) {
            if (Ut(e.browserEvent.target) || Rs(e.browserEvent.target) || this.isSelectionChangeEvent(e) || e.browserEvent.isHandledByList) return;
            e.browserEvent.isHandledByList = !0;
            const t = this.list.getFocus();
            this.list.setSelection(t, e.browserEvent)
        }
        changeSelection(e) {
            const t = e.index;
            let i = this.list.getAnchor();
            if (this.isSelectionRangeChangeEvent(e)) {
                typeof i > "u" && (i = this.list.getFocus()[0] ?? t, this.list.setAnchor(i));
                const s = Math.min(i, t),
                    n = Math.max(i, t),
                    r = Cr(s, n + 1),
                    o = this.list.getSelection(),
                    a = $g(jo(o, [i]), i);
                if (a.length === 0) return;
                const c = jo(r, Ug(o, a));
                this.list.setSelection(c, e.browserEvent), this.list.setFocus([t], e.browserEvent)
            } else if (this.isSelectionSingleChangeEvent(e)) {
                const s = this.list.getSelection(),
                    n = s.filter(r => r !== t);
                this.list.setFocus([t]), this.list.setAnchor(t), s.length === n.length ? this.list.setSelection([...n, t], e.browserEvent) : this.list.setSelection(n, e.browserEvent)
            }
        }
        dispose() {
            this.disposables.dispose()
        }
    },
    Bg = class {
        constructor(e, t) {
            this.styleElement = e, this.selectorSuffix = t
        }
        style(e) {
            const t = this.selectorSuffix && `.${this.selectorSuffix}`,
                i = [];
            e.listBackground && i.push(`.monaco-list${t} .monaco-list-rows { background: ${e.listBackground}; }`), e.listFocusBackground && (i.push(`.monaco-list${t}:focus .monaco-list-row.focused { background-color: ${e.listFocusBackground}; }`), i.push(`.monaco-list${t}:focus .monaco-list-row.focused:hover { background-color: ${e.listFocusBackground}; }`)), e.listFocusForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), e.listActiveSelectionBackground && (i.push(`.monaco-list${t}:focus .monaco-list-row.selected { background-color: ${e.listActiveSelectionBackground}; }`), i.push(`.monaco-list${t}:focus .monaco-list-row.selected:hover { background-color: ${e.listActiveSelectionBackground}; }`)), e.listActiveSelectionForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.selected { color: ${e.listActiveSelectionForeground}; }`), e.listActiveSelectionIconForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.selected .codicon { color: ${e.listActiveSelectionIconForeground}; }`), e.listFocusAndSelectionBackground && i.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.selected.focused { background-color: ${e.listFocusAndSelectionBackground}; }
			`), e.listFocusAndSelectionForeground && i.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.selected.focused { color: ${e.listFocusAndSelectionForeground}; }
			`), e.listInactiveFocusForeground && (i.push(`.monaco-list${t} .monaco-list-row.focused { color:  ${e.listInactiveFocusForeground}; }`), i.push(`.monaco-list${t} .monaco-list-row.focused:hover { color:  ${e.listInactiveFocusForeground}; }`)), e.listInactiveSelectionIconForeground && i.push(`.monaco-list${t} .monaco-list-row.focused .codicon { color:  ${e.listInactiveSelectionIconForeground}; }`), e.listInactiveFocusBackground && (i.push(`.monaco-list${t} .monaco-list-row.focused { background-color:  ${e.listInactiveFocusBackground}; }`), i.push(`.monaco-list${t} .monaco-list-row.focused:hover { background-color:  ${e.listInactiveFocusBackground}; }`)), e.listInactiveSelectionBackground && (i.push(`.monaco-list${t} .monaco-list-row.selected { background-color:  ${e.listInactiveSelectionBackground}; }`), i.push(`.monaco-list${t} .monaco-list-row.selected:hover { background-color:  ${e.listInactiveSelectionBackground}; }`)), e.listInactiveSelectionForeground && i.push(`.monaco-list${t} .monaco-list-row.selected { color: ${e.listInactiveSelectionForeground}; }`), e.listHoverBackground && i.push(`.monaco-list${t}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${e.listHoverBackground}; }`), e.listHoverForeground && i.push(`.monaco-list${t}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${e.listHoverForeground}; }`);
            const s = It(e.listFocusAndSelectionOutline, It(e.listSelectionOutline, e.listFocusOutline ?? ""));
            s && i.push(`.monaco-list${t}:focus .monaco-list-row.focused.selected { outline: 1px solid ${s}; outline-offset: -1px;}`), e.listFocusOutline && i.push(`
				.monaco-drag-image${t},
				.monaco-list${t}:focus .monaco-list-row.focused,
				.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }
			`);
            const n = It(e.listSelectionOutline, e.listInactiveFocusOutline ?? "");
            n && i.push(`.monaco-list${t} .monaco-list-row.focused.selected { outline: 1px dotted ${n}; outline-offset: -1px; }`), e.listSelectionOutline && i.push(`.monaco-list${t} .monaco-list-row.selected { outline: 1px dotted ${e.listSelectionOutline}; outline-offset: -1px; }`), e.listInactiveFocusOutline && i.push(`.monaco-list${t} .monaco-list-row.focused { outline: 1px dotted ${e.listInactiveFocusOutline}; outline-offset: -1px; }`), e.listHoverOutline && i.push(`.monaco-list${t} .monaco-list-row:hover { outline: 1px dashed ${e.listHoverOutline}; outline-offset: -1px; }`), e.listDropOverBackground && i.push(`
				.monaco-list${t}.drop-target,
				.monaco-list${t} .monaco-list-rows.drop-target,
				.monaco-list${t} .monaco-list-row.drop-target { background-color: ${e.listDropOverBackground} !important; color: inherit !important; }
			`), e.listDropBetweenBackground && (i.push(`
			.monaco-list${t} .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,
			.monaco-list${t} .monaco-list-row.drop-target-before::before {
				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${e.listDropBetweenBackground};
			}`), i.push(`
			.monaco-list${t} .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,
			.monaco-list${t} .monaco-list-row.drop-target-after::after {
				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${e.listDropBetweenBackground};
			}`)), e.tableColumnsBorder && i.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${e.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`), e.tableOddRowsBackgroundColor && i.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${e.tableOddRowsBackgroundColor};
				}
			`), this.styleElement.textContent = i.join(`
`)
        }
    },
    Hg = {
        listFocusBackground: "#7FB0D0",
        listActiveSelectionBackground: "#0E639C",
        listActiveSelectionForeground: "#FFFFFF",
        listActiveSelectionIconForeground: "#FFFFFF",
        listFocusAndSelectionOutline: "#90C2F9",
        listFocusAndSelectionBackground: "#094771",
        listFocusAndSelectionForeground: "#FFFFFF",
        listInactiveSelectionBackground: "#3F3F46",
        listInactiveSelectionIconForeground: "#FFFFFF",
        listHoverBackground: "#2A2D2E",
        listDropOverBackground: "#383B3D",
        listDropBetweenBackground: "#EEEEEE",
        treeIndentGuidesStroke: "#a9a9a9",
        treeInactiveIndentGuidesStroke: As.fromHex("#a9a9a9").transparent(.4).toString(),
        tableColumnsBorder: As.fromHex("#cccccc").transparent(.2).toString(),
        tableOddRowsBackgroundColor: As.fromHex("#cccccc").transparent(.04).toString(),
        listBackground: void 0,
        listFocusForeground: void 0,
        listInactiveSelectionForeground: void 0,
        listInactiveFocusForeground: void 0,
        listInactiveFocusBackground: void 0,
        listHoverForeground: void 0,
        listFocusOutline: void 0,
        listInactiveFocusOutline: void 0,
        listSelectionOutline: void 0,
        listHoverOutline: void 0,
        treeStickyScrollBackground: void 0,
        treeStickyScrollBorder: void 0,
        treeStickyScrollShadow: void 0
    },
    zg = {
        keyboardSupport: !0,
        mouseSupport: !0,
        multipleSelectionSupport: !0,
        dnd: {
            getDragURI() {
                return null
            },
            onDragStart() {},
            onDragOver() {
                return !1
            },
            drop() {},
            dispose() {}
        }
    };

function $g(e, t) {
    const i = e.indexOf(t);
    if (i === -1) return [];
    const s = [];
    let n = i - 1;
    for (; n >= 0 && e[n] === t - (i - n);) s.push(e[n--]);
    for (s.reverse(), n = i; n < e.length && e[n] === t + (n - i);) s.push(e[n++]);
    return s
}

function jo(e, t) {
    const i = [];
    let s = 0,
        n = 0;
    for (; s < e.length || n < t.length;)
        if (s >= e.length) i.push(t[n++]);
        else if (n >= t.length) i.push(e[s++]);
    else if (e[s] === t[n]) {
        i.push(e[s]), s++, n++;
        continue
    } else e[s] < t[n] ? i.push(e[s++]) : i.push(t[n++]);
    return i
}

function Ug(e, t) {
    const i = [];
    let s = 0,
        n = 0;
    for (; s < e.length || n < t.length;)
        if (s >= e.length) i.push(t[n++]);
        else if (n >= t.length) i.push(e[s++]);
    else if (e[s] === t[n]) {
        s++, n++;
        continue
    } else e[s] < t[n] ? i.push(e[s++]) : n++;
    return i
}
var Zh = (e, t) => e - t,
    Wg = class {
        constructor(e, t) {
            this._templateId = e, this.renderers = t
        }
        get templateId() {
            return this._templateId
        }
        renderTemplate(e) {
            return this.renderers.map(t => t.renderTemplate(e))
        }
        renderElement(e, t, i, s) {
            let n = 0;
            for (const r of this.renderers) r.renderElement(e, t, i[n++], s)
        }
        disposeElement(e, t, i, s) {
            let n = 0;
            for (const r of this.renderers) r.disposeElement?.(e, t, i[n], s), n += 1
        }
        disposeTemplate(e) {
            let t = 0;
            for (const i of this.renderers) i.disposeTemplate(e[t++])
        }
    },
    Vg = class {
        constructor(e) {
            this.accessibilityProvider = e, this.templateId = "a18n"
        }
        renderTemplate(e) {
            return {
                container: e,
                disposables: new Y
            }
        }
        renderElement(e, t, i) {
            const s = this.accessibilityProvider.getAriaLabel(e),
                n = s && typeof s != "string" ? s : Gc(s);
            i.disposables.add(Rn(o => {
                this.setAriaLabel(o.readObservable(n), i.container)
            }));
            const r = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(e);
            typeof r == "number" ? i.container.setAttribute("aria-level", `${r}`) : i.container.removeAttribute("aria-level")
        }
        setAriaLabel(e, t) {
            e ? t.setAttribute("aria-label", e) : t.removeAttribute("aria-label")
        }
        disposeElement(e, t, i, s) {
            i.disposables.clear()
        }
        disposeTemplate(e) {
            e.disposables.dispose()
        }
    },
    Kg = class {
        constructor(e, t) {
            this.list = e, this.dnd = t
        }
        getDragElements(e) {
            const t = this.list.getSelectedElements();
            return t.indexOf(e) > -1 ? t : [e]
        }
        getDragURI(e) {
            return this.dnd.getDragURI(e)
        }
        getDragLabel(e, t) {
            if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e, t)
        }
        onDragStart(e, t) {
            this.dnd.onDragStart?.(e, t)
        }
        onDragOver(e, t, i, s, n) {
            return this.dnd.onDragOver(e, t, i, s, n)
        }
        onDragLeave(e, t, i, s) {
            this.dnd.onDragLeave?.(e, t, i, s)
        }
        onDragEnd(e) {
            this.dnd.onDragEnd?.(e)
        }
        drop(e, t, i, s, n) {
            this.dnd.drop(e, t, i, s, n)
        }
        dispose() {
            this.dnd.dispose()
        }
    },
    bt = class {
        constructor(e, t, i, s, n = zg) {
            this.user = e, this._options = n, this.focus = new Kn("focused"), this.anchor = new Kn("anchor"), this.eventBufferer = new Lr, this._ariaLabel = "", this.disposables = new Y, this._onDidDispose = new L, this.onDidDispose = this._onDidDispose.event;
            const r = this._options.accessibilityProvider && this._options.accessibilityProvider.getWidgetRole ? this._options.accessibilityProvider?.getWidgetRole() : "list";
            this.selection = new Ag(r !== "listbox");
            const o = [this.focus.renderer, this.selection.renderer];
            this.accessibilityProvider = n.accessibilityProvider, this.accessibilityProvider && (o.push(new Vg(this.accessibilityProvider)), this.accessibilityProvider.onDidChangeActiveDescendant?.(this.onDidChangeActiveDescendant, this, this.disposables)), s = s.map(c => new Wg(c.templateId, [...o, c]));
            const a = {
                ...n,
                dnd: n.dnd && new Kg(this, n.dnd)
            };
            if (this.view = this.createListView(t, i, s, a), this.view.domNode.setAttribute("role", r), n.styleController) this.styleController = n.styleController(this.view.domId);
            else {
                const c = Es(this.view.domNode);
                this.styleController = new Bg(c, this.view.domId)
            }
            if (this.spliceable = new O0([new qo(this.focus, this.view, n.identityProvider), new qo(this.selection, this.view, n.identityProvider), new qo(this.anchor, this.view, n.identityProvider), this.view]), this.disposables.add(this.focus), this.disposables.add(this.selection), this.disposables.add(this.anchor), this.disposables.add(this.view), this.disposables.add(this._onDidDispose), this.disposables.add(new Mg(this, this.view)), (typeof n.keyboardSupport != "boolean" || n.keyboardSupport) && (this.keyboardController = new jh(this, this.view, n), this.disposables.add(this.keyboardController)), n.keyboardNavigationLabelProvider) {
                const c = n.keyboardNavigationDelegate || Lg;
                this.typeNavigationController = new Rg(this, this.view, n.keyboardNavigationLabelProvider, n.keyboardNavigationEventFilter ?? (() => !0), c), this.disposables.add(this.typeNavigationController)
            }
            this.mouseController = this.createMouseController(n), this.disposables.add(this.mouseController), this.onDidChangeFocus(this._onFocusChange, this, this.disposables), this.onDidChangeSelection(this._onSelectionChange, this, this.disposables), this.accessibilityProvider && (this.ariaLabel = this.accessibilityProvider.getWidgetAriaLabel()), this._options.multipleSelectionSupport !== !1 && this.view.domNode.setAttribute("aria-multiselectable", "true")
        }
        get onDidChangeFocus() {
            return A.map(this.eventBufferer.wrapEvent(this.focus.onChange), e => this.toListEvent(e), this.disposables)
        }
        get onDidChangeSelection() {
            return A.map(this.eventBufferer.wrapEvent(this.selection.onChange), e => this.toListEvent(e), this.disposables)
        }
        get domId() {
            return this.view.domId
        }
        get onDidScroll() {
            return this.view.onDidScroll
        }
        get onMouseClick() {
            return this.view.onMouseClick
        }
        get onMouseDblClick() {
            return this.view.onMouseDblClick
        }
        get onMouseMiddleClick() {
            return this.view.onMouseMiddleClick
        }
        get onPointer() {
            return this.mouseController.onPointer
        }
        get onMouseUp() {
            return this.view.onMouseUp
        }
        get onMouseDown() {
            return this.view.onMouseDown
        }
        get onMouseOver() {
            return this.view.onMouseOver
        }
        get onMouseMove() {
            return this.view.onMouseMove
        }
        get onMouseOut() {
            return this.view.onMouseOut
        }
        get onTouchStart() {
            return this.view.onTouchStart
        }
        get onTap() {
            return this.view.onTap
        }
        get onContextMenu() {
            let e = !1;
            const t = A.chain(this.disposables.add(new le(this.view.domNode, "keydown")).event, n => n.map(r => new Me(r)).filter(r => e = r.keyCode === 58 || r.shiftKey && r.keyCode === 68).map(r => fe.stop(r, !0)).filter(() => !1)),
                i = A.chain(this.disposables.add(new le(this.view.domNode, "keyup")).event, n => n.forEach(() => e = !1).map(r => new Me(r)).filter(r => r.keyCode === 58 || r.shiftKey && r.keyCode === 68).map(r => fe.stop(r, !0)).map(({
                    browserEvent: r
                }) => {
                    const o = this.getFocus(),
                        a = o.length ? o[0] : void 0,
                        c = typeof a < "u" ? this.view.element(a) : void 0,
                        h = typeof a < "u" ? this.view.domElement(a) : this.view.domNode;
                    return {
                        index: a,
                        element: c,
                        anchor: h,
                        browserEvent: r
                    }
                })),
                s = A.chain(this.view.onContextMenu, n => n.filter(r => !e).map(({
                    element: r,
                    index: o,
                    browserEvent: a
                }) => ({
                    element: r,
                    index: o,
                    anchor: new ii(re(this.view.domNode), a),
                    browserEvent: a
                })));
            return A.any(t, i, s)
        }
        get onKeyDown() {
            return this.disposables.add(new le(this.view.domNode, "keydown")).event
        }
        get onKeyUp() {
            return this.disposables.add(new le(this.view.domNode, "keyup")).event
        }
        get onKeyPress() {
            return this.disposables.add(new le(this.view.domNode, "keypress")).event
        }
        get onDidFocus() {
            return A.signal(this.disposables.add(new le(this.view.domNode, "focus", !0)).event)
        }
        get onDidBlur() {
            return A.signal(this.disposables.add(new le(this.view.domNode, "blur", !0)).event)
        }
        createListView(e, t, i, s) {
            return new Tg(e, t, i, s)
        }
        createMouseController(e) {
            return new Xh(this)
        }
        updateOptions(e = {}) {
            this._options = {
                ...this._options,
                ...e
            }, this.typeNavigationController?.updateOptions(this._options), this._options.multipleSelectionController !== void 0 && (this._options.multipleSelectionSupport ? this.view.domNode.setAttribute("aria-multiselectable", "true") : this.view.domNode.removeAttribute("aria-multiselectable")), this.mouseController.updateOptions(e), this.keyboardController?.updateOptions(e), this.view.updateOptions(e)
        }
        get options() {
            return this._options
        }
        splice(e, t, i = []) {
            if (e < 0 || e > this.view.length) throw new ui(this.user, `Invalid start index: ${e}`);
            if (t < 0) throw new ui(this.user, `Invalid delete count: ${t}`);
            t === 0 && i.length === 0 || this.eventBufferer.bufferEvents(() => this.spliceable.splice(e, t, i))
        }
        updateWidth(e) {
            this.view.updateWidth(e)
        }
        updateElementHeight(e, t) {
            this.view.updateElementHeight(e, t, null)
        }
        rerender() {
            this.view.rerender()
        }
        element(e) {
            return this.view.element(e)
        }
        indexOf(e) {
            return this.view.indexOf(e)
        }
        indexAt(e) {
            return this.view.indexAt(e)
        }
        get length() {
            return this.view.length
        }
        get contentHeight() {
            return this.view.contentHeight
        }
        get contentWidth() {
            return this.view.contentWidth
        }
        get onDidChangeContentHeight() {
            return this.view.onDidChangeContentHeight
        }
        get onDidChangeContentWidth() {
            return this.view.onDidChangeContentWidth
        }
        get scrollTop() {
            return this.view.getScrollTop()
        }
        set scrollTop(e) {
            this.view.setScrollTop(e)
        }
        get scrollLeft() {
            return this.view.getScrollLeft()
        }
        set scrollLeft(e) {
            this.view.setScrollLeft(e)
        }
        get scrollHeight() {
            return this.view.scrollHeight
        }
        get renderHeight() {
            return this.view.renderHeight
        }
        get firstVisibleIndex() {
            return this.view.firstVisibleIndex
        }
        get firstMostlyVisibleIndex() {
            return this.view.firstMostlyVisibleIndex
        }
        get lastVisibleIndex() {
            return this.view.lastVisibleIndex
        }
        get ariaLabel() {
            return this._ariaLabel
        }
        set ariaLabel(e) {
            this._ariaLabel = e, this.view.domNode.setAttribute("aria-label", e)
        }
        domFocus() {
            this.view.domNode.focus({
                preventScroll: !0
            })
        }
        layout(e, t) {
            this.view.layout(e, t)
        }
        triggerTypeNavigation() {
            this.typeNavigationController?.trigger()
        }
        setSelection(e, t) {
            for (const i of e)
                if (i < 0 || i >= this.length) throw new ui(this.user, `Invalid index ${i}`);
            this.selection.set(e, t)
        }
        getSelection() {
            return this.selection.get()
        }
        getSelectedElements() {
            return this.getSelection().map(e => this.view.element(e))
        }
        setAnchor(e) {
            if (typeof e > "u") {
                this.anchor.set([]);
                return
            }
            if (e < 0 || e >= this.length) throw new ui(this.user, `Invalid index ${e}`);
            this.anchor.set([e])
        }
        getAnchor() {
            return this.anchor.get().at(0)
        }
        getAnchorElement() {
            const e = this.getAnchor();
            return typeof e > "u" ? void 0 : this.element(e)
        }
        setFocus(e, t) {
            for (const i of e)
                if (i < 0 || i >= this.length) throw new ui(this.user, `Invalid index ${i}`);
            this.focus.set(e, t)
        }
        focusNext(e = 1, t = !1, i, s) {
            if (this.length === 0) return;
            const n = this.focus.get(),
                r = this.findNextIndex(n.length > 0 ? n[0] + e : 0, t, s);
            r > -1 && this.setFocus([r], i)
        }
        focusPrevious(e = 1, t = !1, i, s) {
            if (this.length === 0) return;
            const n = this.focus.get(),
                r = this.findPreviousIndex(n.length > 0 ? n[0] - e : 0, t, s);
            r > -1 && this.setFocus([r], i)
        }
        async focusNextPage(e, t) {
            let i = this.view.indexAt(this.view.getScrollTop() + this.view.renderHeight);
            i = i === 0 ? 0 : i - 1;
            const s = this.getFocus()[0];
            if (s !== i && (s === void 0 || i > s)) {
                const n = this.findPreviousIndex(i, !1, t);
                n > -1 && s !== n ? this.setFocus([n], e) : this.setFocus([i], e)
            } else {
                const n = this.view.getScrollTop();
                let r = n + this.view.renderHeight;
                i > s && (r -= this.view.elementHeight(i)), this.view.setScrollTop(r), this.view.getScrollTop() !== n && (this.setFocus([]), await xn(0), await this.focusNextPage(e, t))
            }
        }
        async focusPreviousPage(e, t, i = () => 0) {
            let s;
            const n = i(),
                r = this.view.getScrollTop() + n;
            r === 0 ? s = this.view.indexAt(r) : s = this.view.indexAfter(r - 1);
            const o = this.getFocus()[0];
            if (o !== s && (o === void 0 || o >= s)) {
                const a = this.findNextIndex(s, !1, t);
                a > -1 && o !== a ? this.setFocus([a], e) : this.setFocus([s], e)
            } else {
                const a = r;
                this.view.setScrollTop(r - this.view.renderHeight - n), this.view.getScrollTop() + i() !== a && (this.setFocus([]), await xn(0), await this.focusPreviousPage(e, t, i))
            }
        }
        focusLast(e, t) {
            if (this.length === 0) return;
            const i = this.findPreviousIndex(this.length - 1, !1, t);
            i > -1 && this.setFocus([i], e)
        }
        focusFirst(e, t) {
            this.focusNth(0, e, t)
        }
        focusNth(e, t, i) {
            if (this.length === 0) return;
            const s = this.findNextIndex(e, !1, i);
            s > -1 && this.setFocus([s], t)
        }
        findNextIndex(e, t = !1, i) {
            for (let s = 0; s < this.length; s++) {
                if (e >= this.length && !t) return -1;
                if (e = e % this.length, !i || i(this.element(e))) return e;
                e++
            }
            return -1
        }
        findPreviousIndex(e, t = !1, i) {
            for (let s = 0; s < this.length; s++) {
                if (e < 0 && !t) return -1;
                if (e = (this.length + e % this.length) % this.length, !i || i(this.element(e))) return e;
                e--
            }
            return -1
        }
        getFocus() {
            return this.focus.get()
        }
        getFocusedElements() {
            return this.getFocus().map(e => this.view.element(e))
        }
        reveal(e, t, i = 0) {
            if (e < 0 || e >= this.length) throw new ui(this.user, `Invalid index ${e}`);
            const s = this.view.getScrollTop(),
                n = this.view.elementTop(e),
                r = this.view.elementHeight(e);
            if (Tr(t)) {
                const o = r - this.view.renderHeight + i;
                this.view.setScrollTop(o * Ln(t, 0, 1) + n - i)
            } else {
                const o = n + r,
                    a = s + this.view.renderHeight;
                n < s + i && o >= a || (n < s + i || o >= a && r >= this.view.renderHeight ? this.view.setScrollTop(n - i) : o >= a && this.view.setScrollTop(o - this.view.renderHeight))
            }
        }
        getRelativeTop(e, t = 0) {
            if (e < 0 || e >= this.length) throw new ui(this.user, `Invalid index ${e}`);
            const i = this.view.getScrollTop(),
                s = this.view.elementTop(e),
                n = this.view.elementHeight(e);
            if (s < i + t || s + n > i + this.view.renderHeight) return null;
            const r = n - this.view.renderHeight + t;
            return Math.abs((i + t - s) / r)
        }
        isDOMFocused() {
            return ks(this.view.domNode)
        }
        getHTMLElement() {
            return this.view.domNode
        }
        getScrollableElement() {
            return this.view.scrollableElementDomNode
        }
        getElementID(e) {
            return this.view.getElementDomId(e)
        }
        getElementTop(e) {
            return this.view.elementTop(e)
        }
        style(e) {
            this.styleController.style(e)
        }
        toListEvent({
            indexes: e,
            browserEvent: t
        }) {
            return {
                indexes: e,
                elements: e.map(i => this.view.element(i)),
                browserEvent: t
            }
        }
        _onFocusChange() {
            const e = this.focus.get();
            this.view.domNode.classList.toggle("element-focused", e.length > 0), this.onDidChangeActiveDescendant()
        }
        onDidChangeActiveDescendant() {
            const e = this.focus.get();
            if (e.length > 0) {
                let t;
                this.accessibilityProvider?.getActiveDescendantId && (t = this.accessibilityProvider.getActiveDescendantId(this.view.element(e[0]))), this.view.domNode.setAttribute("aria-activedescendant", t || this.view.getElementDomId(e[0]))
            } else this.view.domNode.removeAttribute("aria-activedescendant")
        }
        _onSelectionChange() {
            const e = this.selection.get();
            this.view.domNode.classList.toggle("selection-none", e.length === 0), this.view.domNode.classList.toggle("selection-single", e.length === 1), this.view.domNode.classList.toggle("selection-multiple", e.length > 1)
        }
        dispose() {
            this._onDidDispose.fire(), this.disposables.dispose(), this._onDidDispose.dispose()
        }
    };
__decorate([ge], bt.prototype, "onDidChangeFocus", null), __decorate([ge], bt.prototype, "onDidChangeSelection", null), __decorate([ge], bt.prototype, "onContextMenu", null), __decorate([ge], bt.prototype, "onKeyDown", null), __decorate([ge], bt.prototype, "onKeyUp", null), __decorate([ge], bt.prototype, "onKeyPress", null), __decorate([ge], bt.prototype, "onDidFocus", null), __decorate([ge], bt.prototype, "onDidBlur", null);
var Yo = new RegExp(`\\$\\(${ye.iconNameExpression}(?:${ye.iconModifierExpression})?\\)`, "g"),
    gv = new RegExp(`(\\\\)?${Yo.source}`, "g"),
    Gg = new RegExp(`\\\\${Yo.source}`, "g");

function qg(e) {
    return e.replace(Gg, t => `\\${t}`)
}
var mv = new RegExp(`(\\s)?(\\\\)?${Yo.source}(\\s)?`, "g"),
    vv = new RegExp(`\\$\\(${ye.iconNameCharacter}+\\)`, "g");

function Gn(e) {
    return e.replace(/"/g, "&quot;")
}

function Xo(e) {
    return e && e.replace(/\\([\\`*_{}[\]()#+\-.!~])/g, "$1")
}

function jg(e) {
    const t = [],
        i = e.split("|").map(n => n.trim());
    e = i[0];
    const s = i[1];
    if (s) {
        const n = /height=(\d+)/.exec(s),
            r = /width=(\d+)/.exec(s),
            o = n ? n[1] : "",
            a = r ? r[1] : "",
            c = isFinite(parseInt(a)),
            h = isFinite(parseInt(o));
        c && t.push(`width="${a}"`), h && t.push(`height="${o}"`)
    }
    return {
        href: e,
        dimensions: t
    }
}
var Yg = class {
        constructor(e) {
            this._prefix = e, this._lastId = 0
        }
        nextId() {
            return this._prefix + ++this._lastId
        }
    },
    Qh = new Yg("id#");

function Zo() {
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
var qt = Zo();

function Jh(e) {
    qt = e
}
var ed = /[&<>"']/,
    Xg = new RegExp(ed.source, "g"),
    td = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    Zg = new RegExp(td.source, "g"),
    Qg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    },
    id = e => Qg[e];

function Je(e, t) {
    if (t) {
        if (ed.test(e)) return e.replace(Xg, id)
    } else if (td.test(e)) return e.replace(Zg, id);
    return e
}
var Jg = /(^|[^\[])\^/g;

function oe(e, t) {
    let i = typeof e == "string" ? e : e.source;
    t = t || "";
    const s = {
        replace: (n, r) => {
            let o = typeof r == "string" ? r : r.source;
            return o = o.replace(Jg, "$1"), i = i.replace(n, o), s
        },
        getRegex: () => new RegExp(i, t)
    };
    return s
}

function sd(e) {
    try {
        e = encodeURI(e).replace(/%25/g, "%")
    } catch {
        return null
    }
    return e
}
var Os = {
    exec: () => null
};

function nd(e, t) {
    const i = e.replace(/\|/g, (r, o, a) => {
            let c = !1,
                h = o;
            for (; --h >= 0 && a[h] === "\\";) c = !c;
            return c ? "|" : " |"
        }),
        s = i.split(/ \|/);
    let n = 0;
    if (s[0].trim() || s.shift(), s.length > 0 && !s[s.length - 1].trim() && s.pop(), t)
        if (s.length > t) s.splice(t);
        else
            for (; s.length < t;) s.push("");
    for (; n < s.length; n++) s[n] = s[n].trim().replace(/\\\|/g, "|");
    return s
}

function Fs(e, t, i) {
    const s = e.length;
    if (s === 0) return "";
    let n = 0;
    for (; n < s;) {
        const r = e.charAt(s - n - 1);
        if (r === t && !i) n++;
        else if (r !== t && i) n++;
        else break
    }
    return e.slice(0, s - n)
}

function em(e, t) {
    if (e.indexOf(t[1]) === -1) return -1;
    let i = 0;
    for (let s = 0; s < e.length; s++)
        if (e[s] === "\\") s++;
        else if (e[s] === t[0]) i++;
    else if (e[s] === t[1] && (i--, i < 0)) return s;
    return -1
}

function rd(e, t, i, s) {
    const n = t.href,
        r = t.title ? Je(t.title) : null,
        o = e[1].replace(/\\([\[\]])/g, "$1");
    if (e[0].charAt(0) !== "!") {
        s.state.inLink = !0;
        const a = {
            type: "link",
            raw: i,
            href: n,
            title: r,
            text: o,
            tokens: s.inlineTokens(o)
        };
        return s.state.inLink = !1, a
    }
    return {
        type: "image",
        raw: i,
        href: n,
        title: r,
        text: Je(o)
    }
}

function tm(e, t) {
    const i = e.match(/^(\s+)(?:```)/);
    if (i === null) return t;
    const s = i[1];
    return t.split(`
`).map(n => {
        const r = n.match(/^\s+/);
        if (r === null) return n;
        const [o] = r;
        return o.length >= s.length ? n.slice(s.length) : n
    }).join(`
`)
}
var qn = class {
        options;
        rules;
        lexer;
        constructor(e) {
            this.options = e || qt
        }
        space(e) {
            const t = this.rules.block.newline.exec(e);
            if (t && t[0].length > 0) return {
                type: "space",
                raw: t[0]
            }
        }
        code(e) {
            const t = this.rules.block.code.exec(e);
            if (t) {
                const i = t[0].replace(/^ {1,4}/gm, "");
                return {
                    type: "code",
                    raw: t[0],
                    codeBlockStyle: "indented",
                    text: this.options.pedantic ? i : Fs(i, `
`)
                }
            }
        }
        fences(e) {
            const t = this.rules.block.fences.exec(e);
            if (t) {
                const i = t[0],
                    s = tm(i, t[3] || "");
                return {
                    type: "code",
                    raw: i,
                    lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
                    text: s
                }
            }
        }
        heading(e) {
            const t = this.rules.block.heading.exec(e);
            if (t) {
                let i = t[2].trim();
                if (/#$/.test(i)) {
                    const s = Fs(i, "#");
                    (this.options.pedantic || !s || / $/.test(s)) && (i = s.trim())
                }
                return {
                    type: "heading",
                    raw: t[0],
                    depth: t[1].length,
                    text: i,
                    tokens: this.lexer.inline(i)
                }
            }
        }
        hr(e) {
            const t = this.rules.block.hr.exec(e);
            if (t) return {
                type: "hr",
                raw: Fs(t[0], `
`)
            }
        }
        blockquote(e) {
            const t = this.rules.block.blockquote.exec(e);
            if (t) {
                let i = Fs(t[0], `
`).split(`
`),
                    s = "",
                    n = "";
                const r = [];
                for (; i.length > 0;) {
                    let o = !1;
                    const a = [];
                    let c;
                    for (c = 0; c < i.length; c++)
                        if (/^ {0,3}>/.test(i[c])) a.push(i[c]), o = !0;
                        else if (!o) a.push(i[c]);
                    else break;
                    i = i.slice(c);
                    const h = a.join(`
`),
                        d = h.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`).replace(/^ {0,3}>[ \t]?/gm, "");
                    s = s ? `${s}
${h}` : h, n = n ? `${n}
${d}` : d;
                    const u = this.lexer.state.top;
                    if (this.lexer.state.top = !0, this.lexer.blockTokens(d, r, !0), this.lexer.state.top = u, i.length === 0) break;
                    const f = r[r.length - 1];
                    if (f?.type === "code") break;
                    if (f?.type === "blockquote") {
                        const p = f,
                            g = p.raw + `
` + i.join(`
`),
                            _ = this.blockquote(g);
                        r[r.length - 1] = _, s = s.substring(0, s.length - p.raw.length) + _.raw, n = n.substring(0, n.length - p.text.length) + _.text;
                        break
                    } else if (f?.type === "list") {
                        const p = f,
                            g = p.raw + `
` + i.join(`
`),
                            _ = this.list(g);
                        r[r.length - 1] = _, s = s.substring(0, s.length - f.raw.length) + _.raw, n = n.substring(0, n.length - p.raw.length) + _.raw, i = g.substring(r[r.length - 1].raw.length).split(`
`);
                        continue
                    }
                }
                return {
                    type: "blockquote",
                    raw: s,
                    tokens: r,
                    text: n
                }
            }
        }
        list(e) {
            let t = this.rules.block.list.exec(e);
            if (t) {
                let i = t[1].trim();
                const s = i.length > 1,
                    n = {
                        type: "list",
                        raw: "",
                        ordered: s,
                        start: s ? +i.slice(0, -1) : "",
                        loose: !1,
                        items: []
                    };
                i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
                const r = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
                let o = !1;
                for (; e;) {
                    let a = !1,
                        c = "",
                        h = "";
                    if (!(t = r.exec(e)) || this.rules.block.hr.test(e)) break;
                    c = t[0], e = e.substring(c.length);
                    let d = t[2].split(`
`, 1)[0].replace(/^\t+/, y => " ".repeat(3 * y.length)),
                        u = e.split(`
`, 1)[0],
                        f = !d.trim(),
                        p = 0;
                    if (this.options.pedantic ? (p = 2, h = d.trimStart()) : f ? p = t[1].length + 1 : (p = t[2].search(/[^ ]/), p = p > 4 ? 1 : p, h = d.slice(p), p += t[1].length), f && /^ *$/.test(u) && (c += u + `
`, e = e.substring(u.length + 1), a = !0), !a) {
                        const y = new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
                            w = new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
                            C = new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),
                            D = new RegExp(`^ {0,${Math.min(3,p-1)}}#`);
                        for (; e;) {
                            const E = e.split(`
`, 1)[0];
                            if (u = E, this.options.pedantic && (u = u.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), C.test(u) || D.test(u) || y.test(u) || w.test(e)) break;
                            if (u.search(/[^ ]/) >= p || !u.trim()) h += `
` + u.slice(p);
                            else {
                                if (f || d.search(/[^ ]/) >= 4 || C.test(d) || D.test(d) || w.test(d)) break;
                                h += `
` + u
                            }!f && !u.trim() && (f = !0), c += E + `
`, e = e.substring(E.length + 1), d = u.slice(p)
                        }
                    }
                    n.loose || (o ? n.loose = !0 : /\n *\n *$/.test(c) && (o = !0));
                    let g = null,
                        _;
                    this.options.gfm && (g = /^\[[ xX]\] /.exec(h), g && (_ = g[0] !== "[ ] ", h = h.replace(/^\[[ xX]\] +/, ""))), n.items.push({
                        type: "list_item",
                        raw: c,
                        task: !!g,
                        checked: _,
                        loose: !1,
                        text: h,
                        tokens: []
                    }), n.raw += c
                }
                n.items[n.items.length - 1].raw = n.items[n.items.length - 1].raw.trimEnd(), n.items[n.items.length - 1].text = n.items[n.items.length - 1].text.trimEnd(), n.raw = n.raw.trimEnd();
                for (let a = 0; a < n.items.length; a++)
                    if (this.lexer.state.top = !1, n.items[a].tokens = this.lexer.blockTokens(n.items[a].text, []), !n.loose) {
                        const c = n.items[a].tokens.filter(d => d.type === "space"),
                            h = c.length > 0 && c.some(d => /\n.*\n/.test(d.raw));
                        n.loose = h
                    } if (n.loose)
                    for (let a = 0; a < n.items.length; a++) n.items[a].loose = !0;
                return n
            }
        }
        html(e) {
            const t = this.rules.block.html.exec(e);
            if (t) return {
                type: "html",
                block: !0,
                raw: t[0],
                pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
                text: t[0]
            }
        }
        def(e) {
            const t = this.rules.block.def.exec(e);
            if (t) {
                const i = t[1].toLowerCase().replace(/\s+/g, " "),
                    s = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
                    n = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
                return {
                    type: "def",
                    tag: i,
                    raw: t[0],
                    href: s,
                    title: n
                }
            }
        }
        table(e) {
            const t = this.rules.block.table.exec(e);
            if (!t || !/[:|]/.test(t[2])) return;
            const i = nd(t[1]),
                s = t[2].replace(/^\||\| *$/g, "").split("|"),
                n = t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [],
                r = {
                    type: "table",
                    raw: t[0],
                    header: [],
                    align: [],
                    rows: []
                };
            if (i.length === s.length) {
                for (const o of s) /^ *-+: *$/.test(o) ? r.align.push("right") : /^ *:-+: *$/.test(o) ? r.align.push("center") : /^ *:-+ *$/.test(o) ? r.align.push("left") : r.align.push(null);
                for (let o = 0; o < i.length; o++) r.header.push({
                    text: i[o],
                    tokens: this.lexer.inline(i[o]),
                    header: !0,
                    align: r.align[o]
                });
                for (const o of n) r.rows.push(nd(o, r.header.length).map((a, c) => ({
                    text: a,
                    tokens: this.lexer.inline(a),
                    header: !1,
                    align: r.align[c]
                })));
                return r
            }
        }
        lheading(e) {
            const t = this.rules.block.lheading.exec(e);
            if (t) return {
                type: "heading",
                raw: t[0],
                depth: t[2].charAt(0) === "=" ? 1 : 2,
                text: t[1],
                tokens: this.lexer.inline(t[1])
            }
        }
        paragraph(e) {
            const t = this.rules.block.paragraph.exec(e);
            if (t) {
                const i = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
                return {
                    type: "paragraph",
                    raw: t[0],
                    text: i,
                    tokens: this.lexer.inline(i)
                }
            }
        }
        text(e) {
            const t = this.rules.block.text.exec(e);
            if (t) return {
                type: "text",
                raw: t[0],
                text: t[0],
                tokens: this.lexer.inline(t[0])
            }
        }
        escape(e) {
            const t = this.rules.inline.escape.exec(e);
            if (t) return {
                type: "escape",
                raw: t[0],
                text: Je(t[1])
            }
        }
        tag(e) {
            const t = this.rules.inline.tag.exec(e);
            if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
                type: "html",
                raw: t[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: t[0]
            }
        }
        link(e) {
            const t = this.rules.inline.link.exec(e);
            if (t) {
                const i = t[2].trim();
                if (!this.options.pedantic && /^</.test(i)) {
                    if (!/>$/.test(i)) return;
                    const r = Fs(i.slice(0, -1), "\\");
                    if ((i.length - r.length) % 2 === 0) return
                } else {
                    const r = em(t[2], "()");
                    if (r > -1) {
                        const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + r;
                        t[2] = t[2].substring(0, r), t[0] = t[0].substring(0, a).trim(), t[3] = ""
                    }
                }
                let s = t[2],
                    n = "";
                if (this.options.pedantic) {
                    const r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);
                    r && (s = r[1], n = r[3])
                } else n = t[3] ? t[3].slice(1, -1) : "";
                return s = s.trim(), /^</.test(s) && (this.options.pedantic && !/>$/.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), rd(t, {
                    href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
                    title: n && n.replace(this.rules.inline.anyPunctuation, "$1")
                }, t[0], this.lexer)
            }
        }
        reflink(e, t) {
            let i;
            if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
                const s = (i[2] || i[1]).replace(/\s+/g, " "),
                    n = t[s.toLowerCase()];
                if (!n) {
                    const r = i[0].charAt(0);
                    return {
                        type: "text",
                        raw: r,
                        text: r
                    }
                }
                return rd(i, n, i[0], this.lexer)
            }
        }
        emStrong(e, t, i = "") {
            let s = this.rules.inline.emStrongLDelim.exec(e);
            if (!s || s[3] && i.match(/[\p{L}\p{N}]/u)) return;
            if (!(s[1] || s[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
                const r = [...s[0]].length - 1;
                let o, a, c = r,
                    h = 0;
                const d = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
                for (d.lastIndex = 0, t = t.slice(-1 * e.length + r);
                    (s = d.exec(t)) != null;) {
                    if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o) continue;
                    if (a = [...o].length, s[3] || s[4]) {
                        c += a;
                        continue
                    } else if ((s[5] || s[6]) && r % 3 && !((r + a) % 3)) {
                        h += a;
                        continue
                    }
                    if (c -= a, c > 0) continue;
                    a = Math.min(a, a + c + h);
                    const u = [...s[0]][0].length,
                        f = e.slice(0, r + s.index + u + a);
                    if (Math.min(r, a) % 2) {
                        const g = f.slice(1, -1);
                        return {
                            type: "em",
                            raw: f,
                            text: g,
                            tokens: this.lexer.inlineTokens(g)
                        }
                    }
                    const p = f.slice(2, -2);
                    return {
                        type: "strong",
                        raw: f,
                        text: p,
                        tokens: this.lexer.inlineTokens(p)
                    }
                }
            }
        }
        codespan(e) {
            const t = this.rules.inline.code.exec(e);
            if (t) {
                let i = t[2].replace(/\n/g, " ");
                const s = /[^ ]/.test(i),
                    n = /^ /.test(i) && / $/.test(i);
                return s && n && (i = i.substring(1, i.length - 1)), i = Je(i, !0), {
                    type: "codespan",
                    raw: t[0],
                    text: i
                }
            }
        }
        br(e) {
            const t = this.rules.inline.br.exec(e);
            if (t) return {
                type: "br",
                raw: t[0]
            }
        }
        del(e) {
            const t = this.rules.inline.del.exec(e);
            if (t) return {
                type: "del",
                raw: t[0],
                text: t[2],
                tokens: this.lexer.inlineTokens(t[2])
            }
        }
        autolink(e) {
            const t = this.rules.inline.autolink.exec(e);
            if (t) {
                let i, s;
                return t[2] === "@" ? (i = Je(t[1]), s = "mailto:" + i) : (i = Je(t[1]), s = i), {
                    type: "link",
                    raw: t[0],
                    text: i,
                    href: s,
                    tokens: [{
                        type: "text",
                        raw: i,
                        text: i
                    }]
                }
            }
        }
        url(e) {
            let t;
            if (t = this.rules.inline.url.exec(e)) {
                let i, s;
                if (t[2] === "@") i = Je(t[0]), s = "mailto:" + i;
                else {
                    let n;
                    do n = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ""; while (n !== t[0]);
                    i = Je(t[0]), t[1] === "www." ? s = "http://" + t[0] : s = t[0]
                }
                return {
                    type: "link",
                    raw: t[0],
                    text: i,
                    href: s,
                    tokens: [{
                        type: "text",
                        raw: i,
                        text: i
                    }]
                }
            }
        }
        inlineText(e) {
            const t = this.rules.inline.text.exec(e);
            if (t) {
                let i;
                return this.lexer.state.inRawBlock ? i = t[0] : i = Je(t[0]), {
                    type: "text",
                    raw: t[0],
                    text: i
                }
            }
        }
    },
    im = /^(?: *(?:\n|$))+/,
    sm = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    nm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    Bs = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    rm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    od = /(?:[*+-]|\d{1,9}[.)])/,
    ad = oe(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, od).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(),
    Qo = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    om = /^[^\n]+/,
    Jo = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    am = oe(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Jo).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),
    lm = oe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, od).getRegex(),
    jn = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
    ea = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    cm = oe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", ea).replace("tag", jn).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),
    ld = oe(Qo).replace("hr", Bs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jn).getRegex(),
    hm = oe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ld).getRegex(),
    ta = {
        blockquote: hm,
        code: sm,
        def: am,
        fences: nm,
        heading: rm,
        hr: Bs,
        html: cm,
        lheading: ad,
        list: lm,
        newline: im,
        paragraph: ld,
        table: Os,
        text: om
    },
    cd = oe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Bs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jn).getRegex(),
    dm = {
        ...ta,
        table: cd,
        paragraph: oe(Qo).replace("hr", Bs).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", cd).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", jn).getRegex()
    },
    um = {
        ...ta,
        html: oe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ea).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: Os,
        lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
        paragraph: oe(Qo).replace("hr", Bs).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ad).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
    },
    hd = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    fm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    dd = /^( {2,}|\\)\n(?!\s*$)/,
    pm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    Hs = "\\p{P}\\p{S}",
    gm = oe(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Hs).getRegex(),
    mm = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
    vm = oe(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Hs).getRegex(),
    ym = oe("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Hs).getRegex(),
    bm = oe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Hs).getRegex(),
    _m = oe(/\\([punct])/, "gu").replace(/punct/g, Hs).getRegex(),
    wm = oe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),
    Sm = oe(ea).replace("(?:-->|$)", "-->").getRegex(),
    Cm = oe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Sm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),
    Yn = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
    Dm = oe(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Yn).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),
    ud = oe(/^!?\[(label)\]\[(ref)\]/).replace("label", Yn).replace("ref", Jo).getRegex(),
    fd = oe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Jo).getRegex(),
    Em = oe("reflink|nolink(?!\\()", "g").replace("reflink", ud).replace("nolink", fd).getRegex(),
    ia = {
        _backpedal: Os,
        anyPunctuation: _m,
        autolink: wm,
        blockSkip: mm,
        br: dd,
        code: fm,
        del: Os,
        emStrongLDelim: vm,
        emStrongRDelimAst: ym,
        emStrongRDelimUnd: bm,
        escape: hd,
        link: Dm,
        nolink: fd,
        punctuation: gm,
        reflink: ud,
        reflinkSearch: Em,
        tag: Cm,
        text: pm,
        url: Os
    },
    km = {
        ...ia,
        link: oe(/^!?\[(label)\]\((.*?)\)/).replace("label", Yn).getRegex(),
        reflink: oe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Yn).getRegex()
    },
    sa = {
        ...ia,
        escape: oe(hd).replace("])", "~|])").getRegex(),
        url: oe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
        _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    },
    Tm = {
        ...sa,
        br: oe(dd).replace("{2,}", "*").getRegex(),
        text: oe(sa.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    },
    Xn = {
        normal: ta,
        gfm: dm,
        pedantic: um
    },
    zs = {
        normal: ia,
        gfm: sa,
        breaks: Tm,
        pedantic: km
    },
    gi = class Oa {
        tokens;
        options;
        state;
        tokenizer;
        inlineQueue;
        constructor(t) {
            this.tokens = [], this.tokens.links = Object.create(null), this.options = t || qt, this.options.tokenizer = this.options.tokenizer || new qn, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
                inLink: !1,
                inRawBlock: !1,
                top: !0
            };
            const i = {
                block: Xn.normal,
                inline: zs.normal
            };
            this.options.pedantic ? (i.block = Xn.pedantic, i.inline = zs.pedantic) : this.options.gfm && (i.block = Xn.gfm, this.options.breaks ? i.inline = zs.breaks : i.inline = zs.gfm), this.tokenizer.rules = i
        }
        static get rules() {
            return {
                block: Xn,
                inline: zs
            }
        }
        static lex(t, i) {
            return new Oa(i).lex(t)
        }
        static lexInline(t, i) {
            return new Oa(i).inlineTokens(t)
        }
        lex(t) {
            t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
            for (let i = 0; i < this.inlineQueue.length; i++) {
                const s = this.inlineQueue[i];
                this.inlineTokens(s.src, s.tokens)
            }
            return this.inlineQueue = [], this.tokens
        }
        blockTokens(t, i = [], s = !1) {
            this.options.pedantic ? t = t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t = t.replace(/^( *)(\t+)/gm, (a, c, h) => c + "    ".repeat(h.length));
            let n, r, o;
            for (; t;)
                if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(a => (n = a.call({
                        lexer: this
                    }, t, i)) ? (t = t.substring(n.raw.length), i.push(n), !0) : !1))) {
                    if (n = this.tokenizer.space(t)) {
                        t = t.substring(n.raw.length), n.raw.length === 1 && i.length > 0 ? i[i.length - 1].raw += `
` : i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.code(t)) {
                        t = t.substring(n.raw.length), r = i[i.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.fences(t)) {
                        t = t.substring(n.raw.length), i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.heading(t)) {
                        t = t.substring(n.raw.length), i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.hr(t)) {
                        t = t.substring(n.raw.length), i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.blockquote(t)) {
                        t = t.substring(n.raw.length), i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.list(t)) {
                        t = t.substring(n.raw.length), i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.html(t)) {
                        t = t.substring(n.raw.length), i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.def(t)) {
                        t = t.substring(n.raw.length), r = i[i.length - 1], r && (r.type === "paragraph" || r.type === "text") ? (r.raw += `
` + n.raw, r.text += `
` + n.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : this.tokens.links[n.tag] || (this.tokens.links[n.tag] = {
                            href: n.href,
                            title: n.title
                        });
                        continue
                    }
                    if (n = this.tokenizer.table(t)) {
                        t = t.substring(n.raw.length), i.push(n);
                        continue
                    }
                    if (n = this.tokenizer.lheading(t)) {
                        t = t.substring(n.raw.length), i.push(n);
                        continue
                    }
                    if (o = t, this.options.extensions && this.options.extensions.startBlock) {
                        let a = 1 / 0;
                        const c = t.slice(1);
                        let h;
                        this.options.extensions.startBlock.forEach(d => {
                            h = d.call({
                                lexer: this
                            }, c), typeof h == "number" && h >= 0 && (a = Math.min(a, h))
                        }), a < 1 / 0 && a >= 0 && (o = t.substring(0, a + 1))
                    }
                    if (this.state.top && (n = this.tokenizer.paragraph(o))) {
                        r = i[i.length - 1], s && r?.type === "paragraph" ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : i.push(n), s = o.length !== t.length, t = t.substring(n.raw.length);
                        continue
                    }
                    if (n = this.tokenizer.text(t)) {
                        t = t.substring(n.raw.length), r = i[i.length - 1], r && r.type === "text" ? (r.raw += `
` + n.raw, r.text += `
` + n.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : i.push(n);
                        continue
                    }
                    if (t) {
                        const a = "Infinite loop on byte: " + t.charCodeAt(0);
                        if (this.options.silent) {
                            console.error(a);
                            break
                        } else throw new Error(a)
                    }
                } return this.state.top = !0, i
        }
        inline(t, i = []) {
            return this.inlineQueue.push({
                src: t,
                tokens: i
            }), i
        }
        inlineTokens(t, i = []) {
            let s, n, r, o = t,
                a, c, h;
            if (this.tokens.links) {
                const d = Object.keys(this.tokens.links);
                if (d.length > 0)
                    for (;
                        (a = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null;) d.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
            }
            for (;
                (a = this.tokenizer.rules.inline.blockSkip.exec(o)) != null;) o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (;
                (a = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null;) o = o.slice(0, a.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
            for (; t;)
                if (c || (h = ""), c = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(d => (s = d.call({
                        lexer: this
                    }, t, i)) ? (t = t.substring(s.raw.length), i.push(s), !0) : !1))) {
                    if (s = this.tokenizer.escape(t)) {
                        t = t.substring(s.raw.length), i.push(s);
                        continue
                    }
                    if (s = this.tokenizer.tag(t)) {
                        t = t.substring(s.raw.length), n = i[i.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : i.push(s);
                        continue
                    }
                    if (s = this.tokenizer.link(t)) {
                        t = t.substring(s.raw.length), i.push(s);
                        continue
                    }
                    if (s = this.tokenizer.reflink(t, this.tokens.links)) {
                        t = t.substring(s.raw.length), n = i[i.length - 1], n && s.type === "text" && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : i.push(s);
                        continue
                    }
                    if (s = this.tokenizer.emStrong(t, o, h)) {
                        t = t.substring(s.raw.length), i.push(s);
                        continue
                    }
                    if (s = this.tokenizer.codespan(t)) {
                        t = t.substring(s.raw.length), i.push(s);
                        continue
                    }
                    if (s = this.tokenizer.br(t)) {
                        t = t.substring(s.raw.length), i.push(s);
                        continue
                    }
                    if (s = this.tokenizer.del(t)) {
                        t = t.substring(s.raw.length), i.push(s);
                        continue
                    }
                    if (s = this.tokenizer.autolink(t)) {
                        t = t.substring(s.raw.length), i.push(s);
                        continue
                    }
                    if (!this.state.inLink && (s = this.tokenizer.url(t))) {
                        t = t.substring(s.raw.length), i.push(s);
                        continue
                    }
                    if (r = t, this.options.extensions && this.options.extensions.startInline) {
                        let d = 1 / 0;
                        const u = t.slice(1);
                        let f;
                        this.options.extensions.startInline.forEach(p => {
                            f = p.call({
                                lexer: this
                            }, u), typeof f == "number" && f >= 0 && (d = Math.min(d, f))
                        }), d < 1 / 0 && d >= 0 && (r = t.substring(0, d + 1))
                    }
                    if (s = this.tokenizer.inlineText(r)) {
                        t = t.substring(s.raw.length), s.raw.slice(-1) !== "_" && (h = s.raw.slice(-1)), c = !0, n = i[i.length - 1], n && n.type === "text" ? (n.raw += s.raw, n.text += s.text) : i.push(s);
                        continue
                    }
                    if (t) {
                        const d = "Infinite loop on byte: " + t.charCodeAt(0);
                        if (this.options.silent) {
                            console.error(d);
                            break
                        } else throw new Error(d)
                    }
                } return i
        }
    },
    Xi = class {
        options;
        parser;
        constructor(e) {
            this.options = e || qt
        }
        space(e) {
            return ""
        }
        code({
            text: e,
            lang: t,
            escaped: i
        }) {
            const s = (t || "").match(/^\S*/)?.[0],
                n = e.replace(/\n$/, "") + `
`;
            return s ? '<pre><code class="language-' + Je(s) + '">' + (i ? n : Je(n, !0)) + `</code></pre>
` : "<pre><code>" + (i ? n : Je(n, !0)) + `</code></pre>
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
            const t = e.ordered,
                i = e.start;
            let s = "";
            for (let o = 0; o < e.items.length; o++) {
                const a = e.items[o];
                s += this.listitem(a)
            }
            const n = t ? "ol" : "ul",
                r = t && i !== 1 ? ' start="' + i + '"' : "";
            return "<" + n + r + `>
` + s + "</" + n + `>
`
        }
        listitem(e) {
            let t = "";
            if (e.task) {
                const i = this.checkbox({
                    checked: !!e.checked
                });
                e.loose ? e.tokens.length > 0 && e.tokens[0].type === "paragraph" ? (e.tokens[0].text = i + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = i + " " + e.tokens[0].tokens[0].text)) : e.tokens.unshift({
                    type: "text",
                    raw: i + " ",
                    text: i + " "
                }) : t += i + " "
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
                i = "";
            for (let n = 0; n < e.header.length; n++) i += this.tablecell(e.header[n]);
            t += this.tablerow({
                text: i
            });
            let s = "";
            for (let n = 0; n < e.rows.length; n++) {
                const r = e.rows[n];
                i = "";
                for (let o = 0; o < r.length; o++) i += this.tablecell(r[o]);
                s += this.tablerow({
                    text: i
                })
            }
            return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
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
            const t = this.parser.parseInline(e.tokens),
                i = e.header ? "th" : "td";
            return (e.align ? `<${i} align="${e.align}">` : `<${i}>`) + t + `</${i}>
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
            return `<code>${e}</code>`
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
            tokens: i
        }) {
            const s = this.parser.parseInline(i),
                n = sd(e);
            if (n === null) return s;
            e = n;
            let r = '<a href="' + e + '"';
            return t && (r += ' title="' + t + '"'), r += ">" + s + "</a>", r
        }
        image({
            href: e,
            title: t,
            text: i
        }) {
            const s = sd(e);
            if (s === null) return i;
            e = s;
            let n = `<img src="${e}" alt="${i}"`;
            return t && (n += ` title="${t}"`), n += ">", n
        }
        text(e) {
            return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : e.text
        }
    },
    na = class {
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
    mi = class Fa {
        options;
        renderer;
        textRenderer;
        constructor(t) {
            this.options = t || qt, this.options.renderer = this.options.renderer || new Xi, this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new na
        }
        static parse(t, i) {
            return new Fa(i).parse(t)
        }
        static parseInline(t, i) {
            return new Fa(i).parseInline(t)
        }
        parse(t, i = !0) {
            let s = "";
            for (let n = 0; n < t.length; n++) {
                const r = t[n];
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                    const a = r,
                        c = this.options.extensions.renderers[a.type].call({
                            parser: this
                        }, a);
                    if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
                        s += c || "";
                        continue
                    }
                }
                const o = r;
                switch (o.type) {
                    case "space": {
                        s += this.renderer.space(o);
                        continue
                    }
                    case "hr": {
                        s += this.renderer.hr(o);
                        continue
                    }
                    case "heading": {
                        s += this.renderer.heading(o);
                        continue
                    }
                    case "code": {
                        s += this.renderer.code(o);
                        continue
                    }
                    case "table": {
                        s += this.renderer.table(o);
                        continue
                    }
                    case "blockquote": {
                        s += this.renderer.blockquote(o);
                        continue
                    }
                    case "list": {
                        s += this.renderer.list(o);
                        continue
                    }
                    case "html": {
                        s += this.renderer.html(o);
                        continue
                    }
                    case "paragraph": {
                        s += this.renderer.paragraph(o);
                        continue
                    }
                    case "text": {
                        let a = o,
                            c = this.renderer.text(a);
                        for (; n + 1 < t.length && t[n + 1].type === "text";) a = t[++n], c += `
` + this.renderer.text(a);
                        i ? s += this.renderer.paragraph({
                            type: "paragraph",
                            raw: c,
                            text: c,
                            tokens: [{
                                type: "text",
                                raw: c,
                                text: c
                            }]
                        }) : s += c;
                        continue
                    }
                    default: {
                        const a = 'Token with "' + o.type + '" type was not found.';
                        if (this.options.silent) return console.error(a), "";
                        throw new Error(a)
                    }
                }
            }
            return s
        }
        parseInline(t, i) {
            i = i || this.renderer;
            let s = "";
            for (let n = 0; n < t.length; n++) {
                const r = t[n];
                if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                    const a = this.options.extensions.renderers[r.type].call({
                        parser: this
                    }, r);
                    if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
                        s += a || "";
                        continue
                    }
                }
                const o = r;
                switch (o.type) {
                    case "escape": {
                        s += i.text(o);
                        break
                    }
                    case "html": {
                        s += i.html(o);
                        break
                    }
                    case "link": {
                        s += i.link(o);
                        break
                    }
                    case "image": {
                        s += i.image(o);
                        break
                    }
                    case "strong": {
                        s += i.strong(o);
                        break
                    }
                    case "em": {
                        s += i.em(o);
                        break
                    }
                    case "codespan": {
                        s += i.codespan(o);
                        break
                    }
                    case "br": {
                        s += i.br(o);
                        break
                    }
                    case "del": {
                        s += i.del(o);
                        break
                    }
                    case "text": {
                        s += i.text(o);
                        break
                    }
                    default: {
                        const a = 'Token with "' + o.type + '" type was not found.';
                        if (this.options.silent) return console.error(a), "";
                        throw new Error(a)
                    }
                }
            }
            return s
        }
    },
    Zn = class {
        options;
        constructor(e) {
            this.options = e || qt
        }
        static passThroughHooks = new Set(["preprocess", "postprocess", "processAllTokens"]);
        preprocess(e) {
            return e
        }
        postprocess(e) {
            return e
        }
        processAllTokens(e) {
            return e
        }
    },
    xm = class {
        defaults = Zo();
        options = this.setOptions;
        parse = this.parseMarkdown(gi.lex, mi.parse);
        parseInline = this.parseMarkdown(gi.lexInline, mi.parseInline);
        Parser = mi;
        Renderer = Xi;
        TextRenderer = na;
        Lexer = gi;
        Tokenizer = qn;
        Hooks = Zn;
        constructor(...e) {
            this.use(...e)
        }
        walkTokens(e, t) {
            let i = [];
            for (const s of e) switch (i = i.concat(t.call(this, s)), s.type) {
                case "table": {
                    const n = s;
                    for (const r of n.header) i = i.concat(this.walkTokens(r.tokens, t));
                    for (const r of n.rows)
                        for (const o of r) i = i.concat(this.walkTokens(o.tokens, t));
                    break
                }
                case "list": {
                    const n = s;
                    i = i.concat(this.walkTokens(n.items, t));
                    break
                }
                default: {
                    const n = s;
                    this.defaults.extensions?.childTokens?.[n.type] ? this.defaults.extensions.childTokens[n.type].forEach(r => {
                        const o = n[r].flat(1 / 0);
                        i = i.concat(this.walkTokens(o, t))
                    }) : n.tokens && (i = i.concat(this.walkTokens(n.tokens, t)))
                }
            }
            return i
        }
        use(...e) {
            const t = this.defaults.extensions || {
                renderers: {},
                childTokens: {}
            };
            return e.forEach(i => {
                const s = {
                    ...i
                };
                if (s.async = this.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach(n => {
                        if (!n.name) throw new Error("extension name required");
                        if ("renderer" in n) {
                            const r = t.renderers[n.name];
                            r ? t.renderers[n.name] = function(...o) {
                                let a = n.renderer.apply(this, o);
                                return a === !1 && (a = r.apply(this, o)), a
                            } : t.renderers[n.name] = n.renderer
                        }
                        if ("tokenizer" in n) {
                            if (!n.level || n.level !== "block" && n.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
                            const r = t[n.level];
                            r ? r.unshift(n.tokenizer) : t[n.level] = [n.tokenizer], n.start && (n.level === "block" ? t.startBlock ? t.startBlock.push(n.start) : t.startBlock = [n.start] : n.level === "inline" && (t.startInline ? t.startInline.push(n.start) : t.startInline = [n.start]))
                        }
                        "childTokens" in n && n.childTokens && (t.childTokens[n.name] = n.childTokens)
                    }), s.extensions = t), i.renderer) {
                    const n = this.defaults.renderer || new Xi(this.defaults);
                    for (const r in i.renderer) {
                        if (!(r in n)) throw new Error(`renderer '${r}' does not exist`);
                        if (["options", "parser"].includes(r)) continue;
                        const o = r,
                            a = i.renderer[o],
                            c = n[o];
                        n[o] = (...h) => {
                            let d = a.apply(n, h);
                            return d === !1 && (d = c.apply(n, h)), d || ""
                        }
                    }
                    s.renderer = n
                }
                if (i.tokenizer) {
                    const n = this.defaults.tokenizer || new qn(this.defaults);
                    for (const r in i.tokenizer) {
                        if (!(r in n)) throw new Error(`tokenizer '${r}' does not exist`);
                        if (["options", "rules", "lexer"].includes(r)) continue;
                        const o = r,
                            a = i.tokenizer[o],
                            c = n[o];
                        n[o] = (...h) => {
                            let d = a.apply(n, h);
                            return d === !1 && (d = c.apply(n, h)), d
                        }
                    }
                    s.tokenizer = n
                }
                if (i.hooks) {
                    const n = this.defaults.hooks || new Zn;
                    for (const r in i.hooks) {
                        if (!(r in n)) throw new Error(`hook '${r}' does not exist`);
                        if (r === "options") continue;
                        const o = r,
                            a = i.hooks[o],
                            c = n[o];
                        Zn.passThroughHooks.has(r) ? n[o] = h => {
                            if (this.defaults.async) return Promise.resolve(a.call(n, h)).then(u => c.call(n, u));
                            const d = a.call(n, h);
                            return c.call(n, d)
                        } : n[o] = (...h) => {
                            let d = a.apply(n, h);
                            return d === !1 && (d = c.apply(n, h)), d
                        }
                    }
                    s.hooks = n
                }
                if (i.walkTokens) {
                    const n = this.defaults.walkTokens,
                        r = i.walkTokens;
                    s.walkTokens = function(o) {
                        let a = [];
                        return a.push(r.call(this, o)), n && (a = a.concat(n.call(this, o))), a
                    }
                }
                this.defaults = {
                    ...this.defaults,
                    ...s
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
            return gi.lex(e, t ?? this.defaults)
        }
        parser(e, t) {
            return mi.parse(e, t ?? this.defaults)
        }
        parseMarkdown(e, t) {
            return (s, n) => {
                const r = {
                        ...n
                    },
                    o = {
                        ...this.defaults,
                        ...r
                    },
                    a = this.onError(!!o.silent, !!o.async);
                if (this.defaults.async === !0 && r.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
                if (typeof s > "u" || s === null) return a(new Error("marked(): input parameter is undefined or null"));
                if (typeof s != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(s) + ", string expected"));
                if (o.hooks && (o.hooks.options = o), o.async) return Promise.resolve(o.hooks ? o.hooks.preprocess(s) : s).then(c => e(c, o)).then(c => o.hooks ? o.hooks.processAllTokens(c) : c).then(c => o.walkTokens ? Promise.all(this.walkTokens(c, o.walkTokens)).then(() => c) : c).then(c => t(c, o)).then(c => o.hooks ? o.hooks.postprocess(c) : c).catch(a);
                try {
                    o.hooks && (s = o.hooks.preprocess(s));
                    let c = e(s, o);
                    o.hooks && (c = o.hooks.processAllTokens(c)), o.walkTokens && this.walkTokens(c, o.walkTokens);
                    let h = t(c, o);
                    return o.hooks && (h = o.hooks.postprocess(h)), h
                } catch (c) {
                    return a(c)
                }
            }
        }
        onError(e, t) {
            return i => {
                if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
                    const s = "<p>An error occurred:</p><pre>" + Je(i.message + "", !0) + "</pre>";
                    return t ? Promise.resolve(s) : s
                }
                if (t) return Promise.reject(i);
                throw i
            }
        }
    },
    vi = new xm;

function ne(e, t) {
    return vi.parse(e, t)
}
ne.options = ne.setOptions = function(e) {
    return vi.setOptions(e), ne.defaults = vi.defaults, Jh(ne.defaults), ne
}, ne.getDefaults = Zo, ne.defaults = qt, ne.use = function(...e) {
    return vi.use(...e), ne.defaults = vi.defaults, Jh(ne.defaults), ne
}, ne.walkTokens = function(e, t) {
    return vi.walkTokens(e, t)
}, ne.parseInline = vi.parseInline, ne.Parser = mi, ne.parser = mi.parse, ne.Renderer = Xi, ne.TextRenderer = na, ne.Lexer = gi, ne.lexer = gi.lex, ne.Tokenizer = qn, ne.Hooks = Zn, ne.parse = ne;
var yv = ne.options,
    bv = ne.setOptions,
    _v = ne.use,
    wv = ne.walkTokens,
    Sv = ne.parseInline,
    Am = ne,
    Nm = mi.parse,
    $s = gi.lex;

function Im(e) {
    let t = JSON.parse(e);
    return t = Us(t), t
}

function Us(e, t = 0) {
    if (!e || t > 200) return e;
    if (typeof e == "object") {
        switch (e.$mid) {
            case 1:
                return we.revive(e);
            case 2:
                return new RegExp(e.source, e.flags);
            case 17:
                return new Date(e.source)
        }
        if (e instanceof mt || e instanceof Uint8Array) return e;
        if (Array.isArray(e))
            for (let i = 0; i < e.length; ++i) e[i] = Us(e[i], t + 1);
        else
            for (const i in e) Object.hasOwnProperty.call(e, i) && (e[i] = Us(e[i], t + 1))
    }
    return e
}
var Lm = Object.prototype.hasOwnProperty;

function Rm(e, t) {
    return ra(e, t, new Set)
}

function ra(e, t, i) {
    if (cn(e)) return e;
    const s = t(e);
    if (typeof s < "u") return s;
    if (Array.isArray(e)) {
        const n = [];
        for (const r of e) n.push(ra(r, t, i));
        return n
    }
    if (kl(e)) {
        if (i.has(e)) throw new Error("Cannot clone recursive data-structure");
        i.add(e);
        const n = {};
        for (const r in e) Lm.call(e, r) && (n[r] = ra(e[r], t, i));
        return i.delete(e), n
    }
    return e
}

function Qn(e, t) {
    if (e === t) return !0;
    if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
    let i, s;
    if (Array.isArray(e)) {
        if (e.length !== t.length) return !1;
        for (i = 0; i < e.length; i++)
            if (!Qn(e[i], t[i])) return !1
    } else {
        const n = [];
        for (s in e) n.push(s);
        n.sort();
        const r = [];
        for (s in t) r.push(s);
        if (r.sort(), !Qn(n, r)) return !1;
        for (i = 0; i < n.length; i++)
            if (!Qn(e[n[i]], t[n[i]])) return !1
    }
    return !0
}

function Mm(e, t = {}) {
    const i = oa(t);
    return i.textContent = e, i
}

function Pm(e, t = {}) {
    const i = oa(t);
    return pd(i, Fm(e, !!t.renderCodeSegments), t.actionHandler, t.renderCodeSegments), i
}

function oa(e) {
    const t = e.inline ? "span" : "div",
        i = document.createElement(t);
    return e.className && (i.className = e.className), i
}
var Om = class {
    constructor(e) {
        this.source = e, this.index = 0
    }
    eos() {
        return this.index >= this.source.length
    }
    next() {
        const e = this.peek();
        return this.advance(), e
    }
    peek() {
        return this.source[this.index]
    }
    advance() {
        this.index++
    }
};

function pd(e, t, i, s) {
    let n;
    if (t.type === 2) n = document.createTextNode(t.content || "");
    else if (t.type === 3) n = document.createElement("b");
    else if (t.type === 4) n = document.createElement("i");
    else if (t.type === 7 && s) n = document.createElement("code");
    else if (t.type === 5 && i) {
        const r = document.createElement("a");
        i.disposables.add(On(r, "click", o => {
            i.callback(String(t.index), o)
        })), n = r
    } else t.type === 8 ? n = document.createElement("br") : t.type === 1 && (n = e);
    n && e !== n && e.appendChild(n), n && Array.isArray(t.children) && t.children.forEach(r => {
        pd(n, r, i, s)
    })
}

function Fm(e, t) {
    const i = {
        type: 1,
        children: []
    };
    let s = 0,
        n = i;
    const r = [],
        o = new Om(e);
    for (; !o.eos();) {
        let a = o.next();
        const c = a === "\\" && aa(o.peek(), t) !== 0;
        if (c && (a = o.next()), !c && Bm(a, t) && a === o.peek()) {
            o.advance(), n.type === 2 && (n = r.pop());
            const h = aa(a, t);
            if (n.type === h || n.type === 5 && h === 6) n = r.pop();
            else {
                const d = {
                    type: h,
                    children: []
                };
                h === 5 && (d.index = s, s++), n.children.push(d), r.push(n), n = d
            }
        } else if (a === `
`) n.type === 2 && (n = r.pop()), n.children.push({
            type: 8
        });
        else if (n.type !== 2) {
            const h = {
                type: 2,
                content: a
            };
            n.children.push(h), r.push(n), n = h
        } else n.content += a
    }
    return n.type === 2 && (n = r.pop()), r.length, i
}

function Bm(e, t) {
    return aa(e, t) !== 0
}

function aa(e, t) {
    switch (e) {
        case "*":
            return 3;
        case "_":
            return 4;
        case "[":
            return 5;
        case "]":
            return 6;
        case "`":
            return t ? 7 : 0;
        default:
            return 0
    }
}
var Hm = new RegExp(`(\\\\)?\\$\\((${ye.iconNameExpression}(?:${ye.iconModifierExpression})?)(?:#([\\w-]+))?\\)`, "g");

function zm(e) {
    const t = new Array;
    let i, s = 0,
        n = 0;
    for (;
        (i = Hm.exec(e)) !== null;) {
        n = i.index || 0, s < n && t.push(e.substring(s, n)), s = (i.index || 0) + i[0].length;
        const [, r, o, a] = i;
        t.push(r ? `$(${o}${a?`#${a}`:""})` : $m({
            id: o
        }, a))
    }
    return s < e.length && t.push(e.substring(s)), t
}

function $m(e, t) {
    const i = ie("span");
    return i.classList.add(...ye.asClassNameArray(e)), t && i.classList.add(t), i
}
var la = Object.freeze({
    image: ({
        href: e,
        title: t,
        text: i
    }) => {
        let s = [],
            n = [];
        return e && ({
            href: e,
            dimensions: s
        } = jg(e), n.push(`src="${Gn(e)}"`)), i && n.push(`alt="${Gn(i)}"`), t && n.push(`title="${Gn(t)}"`), s.length && (n = n.concat(s)), "<img " + n.join(" ") + ">"
    },
    paragraph({
        tokens: e
    }) {
        return `<p>${this.parser.parseInline(e)}</p>`
    },
    link({
        href: e,
        title: t,
        tokens: i
    }) {
        let s = this.parser.parseInline(i);
        return typeof e != "string" ? "" : (e === s && (s = Xo(s)), t = typeof t == "string" ? Gn(Xo(t)) : "", e = Xo(e), e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"), `<a href="${e}" title="${t||e}" draggable="false">${s}</a>`)
    }
});

function Um(e, t = {}, i = {}) {
    const s = new Y;
    let n = !1;
    const r = oa(t),
        {
            renderer: o,
            codeBlocks: a,
            syncCodeBlocks: c
        } = Vm(t, e),
        h = Km(e);
    let d;
    if (t.fillInIncompleteTokens) {
        const p = {
                ...qt,
                ...i,
                renderer: o
            },
            g = $s(h, p),
            _ = e2(g);
        d = Nm(_, p)
    } else d = Am(h, {
        ...i,
        renderer: o,
        async: !1
    });
    e.supportThemeIcons && (d = zm(d).map(g => typeof g == "string" ? g : g.outerHTML).join(""));
    const f = new DOMParser().parseFromString(yd({
        isTrusted: e.isTrusted,
        ...t.sanitizerOptions
    }, d), "text/html");
    if (Wm(e, t, f.body), r.innerHTML = yd({
            isTrusted: e.isTrusted,
            ...t.sanitizerOptions
        }, f.body.innerHTML), a.length > 0) Promise.all(a).then(p => {
        if (n) return;
        const g = new Map(p),
            _ = r.querySelectorAll("div[data-code]");
        for (const y of _) {
            const w = g.get(y.dataset.code ?? "");
            w && mh(y, w)
        }
        t.asyncRenderCallback?.()
    });
    else if (c.length > 0) {
        const p = new Map(c),
            g = r.querySelectorAll("div[data-code]");
        for (const _ of g) {
            const y = p.get(_.dataset.code ?? "");
            y && mh(_, y)
        }
    }
    if (t.asyncRenderCallback)
        for (const p of r.getElementsByTagName("img")) {
            const g = s.add(O(p, "load", () => {
                g.dispose(), t.asyncRenderCallback()
            }))
        }
    if (t.actionHandler) {
        const p = t.actionHandler.disposables.add(new le(r, "click")),
            g = t.actionHandler.disposables.add(new le(r, "auxclick"));
        t.actionHandler.disposables.add(A.any(p.event, g.event)(_ => {
            const y = new ii(re(r), _);
            !y.leftButton && !y.middleButton || gd(e, t, y)
        })), t.actionHandler.disposables.add(O(r, "keydown", _ => {
            const y = new Me(_);
            !y.equals(10) && !y.equals(3) || gd(e, t, y)
        }))
    }
    return {
        element: r,
        dispose: () => {
            n = !0, s.dispose()
        }
    }
}

function Wm(e, t, i) {
    for (const s of i.querySelectorAll("img, audio, video, source")) {
        const n = s.getAttribute("src");
        if (n) {
            let r = n;
            try {
                e.baseUri && (r = ca(we.from(e.baseUri), r))
            } catch {}
            if (s.setAttribute("src", md(e, r, !0)), t.remoteImageIsAllowed) {
                const o = we.parse(r);
                o.scheme !== ee.file && o.scheme !== ee.data && !t.remoteImageIsAllowed(o) && s.replaceWith(ie("", void 0, s.outerHTML))
            }
        }
    }
    for (const s of i.querySelectorAll("a")) {
        const n = s.getAttribute("href");
        if (s.setAttribute("href", ""), !n || /^data:|javascript:/i.test(n) || /^command:/i.test(n) && !e.isTrusted || /^command:(\/\/\/)?_workbench\.downloadResource/i.test(n)) s.replaceWith(...s.childNodes);
        else {
            let r = md(e, n, !1);
            e.baseUri && (r = ca(we.from(e.baseUri), n)), s.dataset.href = r
        }
    }
}

function Vm(e, t) {
    const i = new Xi;
    i.image = la.image, i.link = la.link, i.paragraph = la.paragraph;
    const s = [],
        n = [];
    return e.codeBlockRendererSync ? i.code = ({
        text: r,
        lang: o,
        raw: a
    }) => {
        const c = Qh.nextId(),
            h = e.codeBlockRendererSync(vd(o), r, a);
        return n.push([c, h]), `<div class="code" data-code="${c}">${Bi(r)}</div>`
    } : e.codeBlockRenderer && (i.code = ({
        text: r,
        lang: o
    }) => {
        const a = Qh.nextId(),
            c = e.codeBlockRenderer(vd(o), r);
        return s.push(c.then(h => [a, h])), `<div class="code" data-code="${a}">${Bi(r)}</div>`
    }), t.supportHtml || (i.html = ({
        text: r
    }) => e.sanitizerOptions?.replaceWithPlaintext ? Bi(r) : (t.isTrusted ? r.match(/^(<span[^>]+>)|(<\/\s*span>)$/) : void 0) ? r : ""), {
        renderer: i,
        codeBlocks: s,
        syncCodeBlocks: n
    }
}

function Km(e) {
    let t = e.value;
    return t.length > 1e5 && (t = `${t.substr(0,1e5)}\u2026`), e.supportThemeIcons && (t = qg(t)), t
}

function gd(e, t, i) {
    const s = i.target.closest("a[data-href]");
    if (Nt(s)) try {
        let n = s.dataset.href;
        n && (e.baseUri && (n = ca(we.from(e.baseUri), n)), t.actionHandler.callback(n, i))
    } catch (n) {
        ft(n)
    } finally {
        i.preventDefault()
    }
}

function Gm(e, t) {
    let i;
    try {
        i = Im(decodeURIComponent(t))
    } catch {}
    return i ? (i = Rm(i, s => {
        if (e.uris && e.uris[s]) return we.revive(e.uris[s])
    }), encodeURIComponent(JSON.stringify(i))) : t
}

function md(e, t, i) {
    const s = e.uris && e.uris[t];
    let n = we.revive(s);
    return i ? t.startsWith(ee.data + ":") ? t : (n || (n = we.parse(t)), cc.uriToBrowserUri(n).toString(!0)) : !n || we.parse(t).toString() === n.toString() ? t : (n.query && (n = n.with({
        query: Gm(e, n.query)
    })), n.toString())
}

function vd(e) {
    if (!e) return "";
    const t = e.split(/[\s+|:|,|\{|\?]/, 1);
    return t.length ? t[0] : e
}

function ca(e, t) {
    return /^\w[\w\d+.-]*:/.test(t) ? t : e.path.endsWith("/") ? dc(e, t).toString() : dc(Gf(e), t).toString()
}
var qm = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];

function yd(e, t) {
    const {
        config: i,
        allowedSchemes: s
    } = Ym(e), n = new Y;
    n.add(wd("uponSanitizeAttribute", (r, o) => {
        if (o.attrName === "style" || o.attrName === "class") {
            if (r.tagName === "SPAN") {
                if (o.attrName === "style") {
                    o.keepAttr = /^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z0-9]+)+\));)?(border-radius:[0-9]+px;)?$/.test(o.attrValue);
                    return
                } else if (o.attrName === "class") {
                    o.keepAttr = /^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(o.attrValue);
                    return
                }
            }
            o.keepAttr = !1;
            return
        } else if (r.tagName === "INPUT" && r.attributes.getNamedItem("type")?.value === "checkbox") {
            if (o.attrName === "type" && o.attrValue === "checkbox" || o.attrName === "disabled" || o.attrName === "checked") {
                o.keepAttr = !0;
                return
            }
            o.keepAttr = !1
        }
    })), n.add(wd("uponSanitizeElement", (r, o) => {
        if (o.tagName === "input" && (r.attributes.getNamedItem("type")?.value === "checkbox" ? r.setAttribute("disabled", "") : e.replaceWithPlaintext || r.remove()), e.replaceWithPlaintext && !o.allowedTags[o.tagName] && o.tagName !== "body" && r.parentElement) {
            let a, c;
            if (o.tagName === "#comment") a = `<!--${r.textContent}-->`;
            else {
                const f = qm.includes(o.tagName),
                    p = r.attributes.length ? " " + Array.from(r.attributes).map(g => `${g.name}="${g.value}"`).join(" ") : "";
                a = `<${o.tagName}${p}>`, f || (c = `</${o.tagName}>`)
            }
            const h = document.createDocumentFragment(),
                d = r.parentElement.ownerDocument.createTextNode(a);
            h.appendChild(d);
            const u = c ? r.parentElement.ownerDocument.createTextNode(c) : void 0;
            for (; r.firstChild;) h.appendChild(r.firstChild);
            u && h.appendChild(u), r.nodeType === Node.COMMENT_NODE ? r.parentElement.insertBefore(h, r) : r.parentElement.replaceChild(h, r)
        }
    })), n.add(x0(s));
    try {
        return Cs.sanitize(t, {
            ...i,
            RETURN_TRUSTED_TYPE: !0
        })
    } finally {
        n.dispose()
    }
}
var jm = ["align", "autoplay", "alt", "checked", "class", "colspan", "controls", "data-code", "data-href", "disabled", "draggable", "height", "href", "loop", "muted", "playsinline", "poster", "rowspan", "src", "style", "target", "title", "type", "width", "start"];

function Ym(e) {
    const t = [ee.http, ee.https, ee.mailto, ee.data, ee.file, ee.vscodeFileResource, ee.vscodeRemote, ee.vscodeRemoteResource];
    return e.isTrusted && t.push(ee.command), {
        config: {
            ALLOWED_TAGS: e.allowedTags ?? [...A0],
            ALLOWED_ATTR: jm,
            ALLOW_UNKNOWN_PROTOCOLS: !0
        },
        allowedSchemes: t
    }
}

function bd() {
    const e = new Xi;
    return e.code = ({
        text: t
    }) => Bi(t), e.blockquote = ({
        text: t
    }) => t + `
`, e.html = t => "", e.heading = function({
        tokens: t
    }) {
        return this.parser.parseInline(t) + `
`
    }, e.hr = () => "", e.list = function({
        items: t
    }) {
        return t.map(i => this.listitem(i)).join(`
`) + `
`
    }, e.listitem = ({
        text: t
    }) => t + `
`, e.paragraph = function({
        tokens: t
    }) {
        return this.parser.parseInline(t) + `
`
    }, e.table = function({
        header: t,
        rows: i
    }) {
        return t.map(s => this.tablecell(s)).join(" ") + `
` + i.map(s => s.map(n => this.tablecell(n)).join(" ")).join(`
`) + `
`
    }, e.tablerow = ({
        text: t
    }) => t, e.tablecell = function({
        tokens: t
    }) {
        return this.parser.parseInline(t)
    }, e.strong = ({
        text: t
    }) => t, e.em = ({
        text: t
    }) => t, e.codespan = ({
        text: t
    }) => Bi(t), e.br = t => `
`, e.del = ({
        text: t
    }) => t, e.image = t => "", e.text = ({
        text: t
    }) => t, e.link = ({
        text: t
    }) => t, e
}
var Cv = new gt(bd),
    Dv = new gt(() => {
        const e = bd();
        return e.code = ({
            text: t
        }) => `
\`\`\`
${Bi(t)}
\`\`\`
`, e
    });

function Jn(e) {
    let t = "";
    return e.forEach(i => {
        t += i.raw
    }), t
}

function _d(e) {
    if (e.tokens)
        for (let t = e.tokens.length - 1; t >= 0; t--) {
            const i = e.tokens[t];
            if (i.type === "text") {
                const s = i.raw.split(`
`),
                    n = s[s.length - 1];
                if (n.includes("`")) return i2(e);
                if (n.includes("**")) return l2(e);
                if (n.match(/\*\w/)) return s2(e);
                if (n.match(/(^|\s)__\w/)) return c2(e);
                if (n.match(/(^|\s)_\w/)) return n2(e);
                if (Xm(n) || Zm(n) && e.tokens.slice(0, t).some(r => r.type === "text" && r.raw.match(/\[[^\]]*$/))) {
                    const r = e.tokens.slice(t + 1);
                    return r[0]?.type === "link" && r[1]?.type === "text" && r[1].raw.match(/^ *"[^"]*$/) || n.match(/^[^"]* +"[^"]*$/) ? o2(e) : r2(e)
                } else if (n.match(/(^|\s)\[\w*/)) return a2(e)
            }
        }
}

function Xm(e) {
    return !!e.match(/(^|\s)\[.*\]\(\w*/)
}

function Zm(e) {
    return !!e.match(/^[^\[]*\]\([^\)]*$/)
}

function Qm(e) {
    const t = e.items[e.items.length - 1],
        i = t.tokens ? t.tokens[t.tokens.length - 1] : void 0,
        s = h => {
            const u = h.items.at(-1)?.tokens.at(-1);
            return u?.type === "heading" || u?.type === "list" && s(u)
        };
    let n;
    if (i?.type === "text" && !("inRawBlock" in t)) n = _d(i);
    else if (s(e)) {
        const h = $s(e.raw.trim() + " &nbsp;")[0];
        return h.type !== "list" ? void 0 : h
    }
    if (!n || n.type !== "paragraph") return;
    const r = Jn(e.items.slice(0, -1)),
        o = t.raw.match(/^(\s*(-|\d+\.|\*) +)/)?.[0];
    if (!o) return;
    const a = o + Jn(t.tokens.slice(0, -1)) + n.raw,
        c = $s(r + a)[0];
    if (c.type === "list") return c
}
var Jm = 3;

function e2(e) {
    for (let t = 0; t < Jm; t++) {
        const i = t2(e);
        if (i) e = i;
        else break
    }
    return e
}

function t2(e) {
    let t, i;
    for (t = 0; t < e.length; t++) {
        const s = e[t];
        if (s.type === "paragraph" && s.raw.match(/(\n|^)\|/)) {
            i = h2(e.slice(t));
            break
        }
        if (t === e.length - 1 && s.type === "list") {
            const n = Qm(s);
            if (n) {
                i = [n];
                break
            }
        }
        if (t === e.length - 1 && s.type === "paragraph") {
            const n = _d(s);
            if (n) {
                i = [n];
                break
            }
        }
    }
    if (i) {
        const s = [...e.slice(0, t), ...i];
        return s.links = e.links, s
    }
    return null
}

function i2(e) {
    return jt(e, "`")
}

function s2(e) {
    return jt(e, "*")
}

function n2(e) {
    return jt(e, "_")
}

function r2(e) {
    return jt(e, ")")
}

function o2(e) {
    return jt(e, '")')
}

function a2(e) {
    return jt(e, "](https://microsoft.com)")
}

function l2(e) {
    return jt(e, "**")
}

function c2(e) {
    return jt(e, "__")
}

function jt(e, t) {
    const i = Jn(Array.isArray(e) ? e : [e]);
    return $s(i + t)[0]
}

function h2(e) {
    const t = Jn(e),
        i = t.split(`
`);
    let s, n = !1;
    for (let r = 0; r < i.length; r++) {
        const o = i[r].trim();
        if (typeof s > "u" && o.match(/^\s*\|/)) {
            const a = o.match(/(\|[^\|]+)(?=\||$)/g);
            a && (s = a.length)
        } else if (typeof s == "number")
            if (o.match(/^\s*\|/)) {
                if (r !== i.length - 1) return;
                n = !0
            } else return
    }
    if (typeof s == "number" && s > 0) {
        const r = n ? i.slice(0, -1).join(`
`) : t,
            o = !!r.match(/\|\s*$/),
            a = r + (o ? "" : "|") + `
|${" --- |".repeat(s)}`;
        return $s(a)
    }
}

function wd(e, t) {
    return Cs.addHook(e, t), de(() => Cs.removeHook(e))
}
var d2 = {
    showInstantHover: () => {},
    showDelayedHover: () => {},
    setupDelayedHover: () => q.None,
    setupDelayedHoverAtMouse: () => q.None,
    hideHover: () => {},
    showAndFocusLastHover: () => {},
    setupManagedHover: () => null,
    showManagedHover: () => {}
};

function er() {
    return d2
}
var yi = ie,
    Sd = "selectOption.entry.template",
    u2 = class {
        get templateId() {
            return Sd
        }
        renderTemplate(e) {
            const t = Object.create(null);
            return t.root = e, t.text = Q(e, yi(".option-text")), t.detail = Q(e, yi(".option-detail")), t.decoratorRight = Q(e, yi(".option-decorator-right")), t
        }
        renderElement(e, t, i) {
            const s = i,
                n = e.text,
                r = e.detail,
                o = e.decoratorRight,
                a = e.isDisabled;
            s.text.textContent = n, s.detail.textContent = r || "", s.decoratorRight.innerText = o || "", a ? s.root.classList.add("option-disabled") : s.root.classList.remove("option-disabled")
        }
        disposeTemplate(e) {}
    },
    ha = class ns extends q {
        constructor(t, i, s, n, r) {
            super(), this.options = [], this._currentSelection = 0, this._hasDetails = !1, this._skipLayout = !1, this._sticky = !1, this._isVisible = !1, this.styles = n, this.selectBoxOptions = r || Object.create(null), typeof this.selectBoxOptions.minBottomMargin != "number" ? this.selectBoxOptions.minBottomMargin = ns.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN : this.selectBoxOptions.minBottomMargin < 0 && (this.selectBoxOptions.minBottomMargin = 0), this.selectElement = document.createElement("select"), this.selectElement.className = "monaco-select-box monaco-select-box-dropdown-padding", typeof this.selectBoxOptions.ariaLabel == "string" && this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel), typeof this.selectBoxOptions.ariaDescription == "string" && this.selectElement.setAttribute("aria-description", this.selectBoxOptions.ariaDescription), this._onDidSelect = new L, this._register(this._onDidSelect), this.registerListeners(), this.constructSelectDropDown(s), this.selected = i || 0, t && this.setOptions(t, i), this.initStyleSheet()
        }
        setTitle(t) {
            !this._hover && t ? this._hover = this._register(er().setupManagedHover(qi("mouse"), this.selectElement, t)) : this._hover && this._hover.update(t)
        }
        getHeight() {
            return 22
        }
        getTemplateId() {
            return Sd
        }
        constructSelectDropDown(t) {
            this.contextViewProvider = t, this.selectDropDownContainer = ie(".monaco-select-box-dropdown-container"), this.selectDropDownContainer.classList.add("monaco-select-box-dropdown-padding"), this.selectionDetailsPane = Q(this.selectDropDownContainer, yi(".select-box-details-pane"));
            const i = Q(this.selectDropDownContainer, yi(".select-box-dropdown-container-width-control")),
                s = Q(i, yi(".width-control-div"));
            this.widthControlElement = document.createElement("span"), this.widthControlElement.className = "option-text-width-control", Q(s, this.widthControlElement), this._dropDownPosition = 0, this.styleElement = Es(this.selectDropDownContainer), this.selectDropDownContainer.setAttribute("draggable", "true"), this._register(O(this.selectDropDownContainer, X.DRAG_START, n => {
                fe.stop(n, !0)
            }))
        }
        registerListeners() {
            this._register(On(this.selectElement, "change", i => {
                this.selected = i.target.selectedIndex, this._onDidSelect.fire({
                    index: i.target.selectedIndex,
                    selected: i.target.value
                }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)
            })), this._register(O(this.selectElement, X.CLICK, i => {
                fe.stop(i), this._isVisible ? this.hideSelectDropDown(!0) : this.showSelectDropDown()
            })), this._register(O(this.selectElement, X.MOUSE_DOWN, i => {
                fe.stop(i)
            }));
            let t;
            this._register(O(this.selectElement, "touchstart", i => {
                t = this._isVisible
            })), this._register(O(this.selectElement, "touchend", i => {
                fe.stop(i), t ? this.hideSelectDropDown(!0) : this.showSelectDropDown()
            })), this._register(O(this.selectElement, X.KEY_DOWN, i => {
                const s = new Me(i);
                let n = !1;
                Re ? (s.keyCode === 18 || s.keyCode === 16 || s.keyCode === 10 || s.keyCode === 3) && (n = !0) : (s.keyCode === 18 && s.altKey || s.keyCode === 16 && s.altKey || s.keyCode === 10 || s.keyCode === 3) && (n = !0), n && (this.showSelectDropDown(), fe.stop(i, !0))
            }))
        }
        get onDidSelect() {
            return this._onDidSelect.event
        }
        setOptions(t, i) {
            ds(this.options, t) || (this.options = t, this.selectElement.options.length = 0, this._hasDetails = !1, this._cachedMaxDetailsHeight = void 0, this.options.forEach((s, n) => {
                this.selectElement.add(this.createOption(s.text, n, s.isDisabled)), typeof s.description == "string" && (this._hasDetails = !0)
            })), i !== void 0 && (this.select(i), this._currentSelection = this.selected)
        }
        setEnabled(t) {
            this.selectElement.disabled = !t
        }
        setOptionsList() {
            this.selectList?.splice(0, this.selectList.length, this.options)
        }
        select(t) {
            t >= 0 && t < this.options.length ? this.selected = t : t > this.options.length - 1 ? this.select(this.options.length - 1) : this.selected < 0 && (this.selected = 0), this.selectElement.selectedIndex = this.selected, this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)
        }
        setAriaLabel(t) {
            this.selectBoxOptions.ariaLabel = t, this.selectElement.setAttribute("aria-label", this.selectBoxOptions.ariaLabel)
        }
        focus() {
            this.selectElement && (this.selectElement.tabIndex = 0, this.selectElement.focus())
        }
        blur() {
            this.selectElement && (this.selectElement.tabIndex = -1, this.selectElement.blur())
        }
        setFocusable(t) {
            this.selectElement.tabIndex = t ? 0 : -1
        }
        render(t) {
            this.container = t, t.classList.add("select-container"), t.appendChild(this.selectElement), this.styleSelectElement()
        }
        initStyleSheet() {
            const t = [];
            this.styles.listFocusBackground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ${this.styles.listFocusBackground} !important; }`), this.styles.listFocusForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ${this.styles.listFocusForeground} !important; }`), this.styles.decoratorRightForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ${this.styles.decoratorRightForeground}; }`), this.styles.selectBackground && this.styles.selectBorder && this.styles.selectBorder !== this.styles.selectBackground ? (t.push(`.monaco-select-box-dropdown-container { border: 1px solid ${this.styles.selectBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectBorder} } `)) : this.styles.selectListBorder && (t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectListBorder} } `), t.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectListBorder} } `)), this.styles.listHoverForeground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ${this.styles.listHoverForeground} !important; }`), this.styles.listHoverBackground && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ${this.styles.listHoverBackground} !important; }`), this.styles.listFocusOutline && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ${this.styles.listFocusOutline} !important; outline-offset: -1.6px !important; }`), this.styles.listHoverOutline && t.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ${this.styles.listHoverOutline} !important; outline-offset: -1.6px !important; }`), t.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }"), t.push(".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }"), this.styleElement.textContent = t.join(`
`)
        }
        styleSelectElement() {
            const t = this.styles.selectBackground ?? "",
                i = this.styles.selectForeground ?? "",
                s = this.styles.selectBorder ?? "";
            this.selectElement.style.backgroundColor = t, this.selectElement.style.color = i, this.selectElement.style.borderColor = s
        }
        styleList() {
            const t = this.styles.selectBackground ?? "",
                i = It(this.styles.selectListBackground, t);
            this.selectDropDownListContainer.style.backgroundColor = i, this.selectionDetailsPane.style.backgroundColor = i;
            const s = this.styles.focusBorder ?? "";
            this.selectDropDownContainer.style.outlineColor = s, this.selectDropDownContainer.style.outlineOffset = "-1px", this.selectList.style(this.styles)
        }
        createOption(t, i, s) {
            const n = document.createElement("option");
            return n.value = t, n.text = t, n.disabled = !!s, n
        }
        showSelectDropDown() {
            this.selectionDetailsPane.innerText = "", !(!this.contextViewProvider || this._isVisible) && (this.createSelectList(this.selectDropDownContainer), this.setOptionsList(), this.contextViewProvider.showContextView({
                getAnchor: () => this.selectElement,
                render: t => this.renderSelectDropDown(t, !0),
                layout: () => {
                    this.layoutSelectDropDown()
                },
                onHide: () => {
                    this.selectDropDownContainer.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus")
                },
                anchorPosition: this._dropDownPosition
            }, this.selectBoxOptions.optionsAsChildren ? this.container : void 0), this._isVisible = !0, this.hideSelectDropDown(!1), this.contextViewProvider.showContextView({
                getAnchor: () => this.selectElement,
                render: t => this.renderSelectDropDown(t),
                layout: () => this.layoutSelectDropDown(),
                onHide: () => {
                    this.selectDropDownContainer.classList.remove("visible"), this.selectElement.classList.remove("synthetic-focus")
                },
                anchorPosition: this._dropDownPosition
            }, this.selectBoxOptions.optionsAsChildren ? this.container : void 0), this._currentSelection = this.selected, this._isVisible = !0, this.selectElement.setAttribute("aria-expanded", "true"))
        }
        hideSelectDropDown(t) {
            !this.contextViewProvider || !this._isVisible || (this._isVisible = !1, this.selectElement.setAttribute("aria-expanded", "false"), t && this.selectElement.focus(), this.contextViewProvider.hideContextView())
        }
        renderSelectDropDown(t, i) {
            return t.appendChild(this.selectDropDownContainer), this.layoutSelectDropDown(i), {
                dispose: () => {
                    this.selectDropDownContainer.remove()
                }
            }
        }
        measureMaxDetailsHeight() {
            let t = 0;
            return this.options.forEach((i, s) => {
                this.updateDetail(s), this.selectionDetailsPane.offsetHeight > t && (t = this.selectionDetailsPane.offsetHeight)
            }), t
        }
        layoutSelectDropDown(t) {
            if (this._skipLayout) return !1;
            if (this.selectList) {
                this.selectDropDownContainer.classList.add("visible");
                const i = re(this.selectElement),
                    s = dh(this.selectElement),
                    n = re(this.selectElement).getComputedStyle(this.selectElement),
                    r = parseFloat(n.getPropertyValue("--dropdown-padding-top")) + parseFloat(n.getPropertyValue("--dropdown-padding-bottom")),
                    o = i.innerHeight - s.top - s.height - (this.selectBoxOptions.minBottomMargin || 0),
                    a = s.top - ns.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN,
                    c = this.selectElement.offsetWidth,
                    h = this.setWidthControlElement(this.widthControlElement),
                    d = Math.max(h, Math.round(c)).toString() + "px";
                this.selectDropDownContainer.style.width = d, this.selectList.getHTMLElement().style.height = "", this.selectList.layout();
                let u = this.selectList.contentHeight;
                this._hasDetails && this._cachedMaxDetailsHeight === void 0 && (this._cachedMaxDetailsHeight = this.measureMaxDetailsHeight());
                const f = this._hasDetails ? this._cachedMaxDetailsHeight : 0,
                    p = u + r + f,
                    g = Math.floor((o - r - f) / this.getHeight()),
                    _ = Math.floor((a - r - f) / this.getHeight());
                if (t) return s.top + s.height > i.innerHeight - 22 || s.top < ns.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || g < 1 && _ < 1 ? !1 : (g < ns.DEFAULT_MINIMUM_VISIBLE_OPTIONS && _ > g && this.options.length > g ? (this._dropDownPosition = 1, this.selectDropDownListContainer.remove(), this.selectionDetailsPane.remove(), this.selectDropDownContainer.appendChild(this.selectionDetailsPane), this.selectDropDownContainer.appendChild(this.selectDropDownListContainer), this.selectionDetailsPane.classList.remove("border-top"), this.selectionDetailsPane.classList.add("border-bottom")) : (this._dropDownPosition = 0, this.selectDropDownListContainer.remove(), this.selectionDetailsPane.remove(), this.selectDropDownContainer.appendChild(this.selectDropDownListContainer), this.selectDropDownContainer.appendChild(this.selectionDetailsPane), this.selectionDetailsPane.classList.remove("border-bottom"), this.selectionDetailsPane.classList.add("border-top")), !0);
                if (s.top + s.height > i.innerHeight - 22 || s.top < ns.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN || this._dropDownPosition === 0 && g < 1 || this._dropDownPosition === 1 && _ < 1) return this.hideSelectDropDown(!0), !1;
                if (this._dropDownPosition === 0) {
                    if (this._isVisible && g + _ < 1) return this.hideSelectDropDown(!0), !1;
                    p > o && (u = g * this.getHeight())
                } else p > a && (u = _ * this.getHeight());
                return this.selectList.layout(u), this.selectList.domFocus(), this.selectList.length > 0 && (this.selectList.setFocus([this.selected || 0]), this.selectList.reveal(this.selectList.getFocus()[0] || 0)), this._hasDetails ? (this.selectList.getHTMLElement().style.height = u + r + "px", this.selectDropDownContainer.style.height = "") : this.selectDropDownContainer.style.height = u + r + "px", this.updateDetail(this.selected), this.selectDropDownContainer.style.width = d, this.selectDropDownListContainer.setAttribute("tabindex", "0"), this.selectElement.classList.add("synthetic-focus"), this.selectDropDownContainer.classList.add("synthetic-focus"), !0
            } else return !1
        }
        setWidthControlElement(t) {
            let i = 0;
            if (t) {
                let s = 0,
                    n = 0;
                this.options.forEach((r, o) => {
                    const a = r.detail ? r.detail.length : 0,
                        c = r.decoratorRight ? r.decoratorRight.length : 0,
                        h = r.text.length + a + c;
                    h > n && (s = o, n = h)
                }), t.textContent = this.options[s].text + (this.options[s].decoratorRight ? this.options[s].decoratorRight + " " : ""), i = Do(t)
            }
            return i
        }
        createSelectList(t) {
            if (this.selectList) return;
            this.selectDropDownListContainer = Q(t, yi(".select-box-dropdown-list-container")), this.listRenderer = new u2, this.selectList = this._register(new bt("SelectBoxCustom", this.selectDropDownListContainer, this, [this.listRenderer], {
                useShadows: !1,
                verticalScrollMode: 3,
                keyboardSupport: !1,
                mouseSupport: !1,
                accessibilityProvider: {
                    getAriaLabel: n => {
                        let r = n.text;
                        return n.detail && (r += `. ${n.detail}`), n.decoratorRight && (r += `. ${n.decoratorRight}`), n.description && (r += `. ${n.description}`), r
                    },
                    getWidgetAriaLabel: () => V(28, null),
                    getRole: () => Re ? "" : "option",
                    getWidgetRole: () => "listbox"
                }
            })), this.selectBoxOptions.ariaLabel && (this.selectList.ariaLabel = this.selectBoxOptions.ariaLabel);
            const i = this._register(new le(this.selectDropDownListContainer, "keydown")),
                s = A.chain(i.event, n => n.filter(() => this.selectList.length > 0).map(r => new Me(r)));
            this._register(A.chain(s, n => n.filter(r => r.keyCode === 3))(this.onEnter, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode === 2))(this.onEnter, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode === 9))(this.onEscape, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode === 16))(this.onUpArrow, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode === 18))(this.onDownArrow, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode === 12))(this.onPageDown, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode === 11))(this.onPageUp, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode === 14))(this.onHome, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode === 13))(this.onEnd, this)), this._register(A.chain(s, n => n.filter(r => r.keyCode >= 21 && r.keyCode <= 56 || r.keyCode >= 85 && r.keyCode <= 113))(this.onCharacter, this)), this._register(O(this.selectList.getHTMLElement(), X.POINTER_UP, n => this.onPointerUp(n))), this._register(this.selectList.onMouseOver(n => typeof n.index < "u" && this.selectList.setFocus([n.index]))), this._register(this.selectList.onDidChangeFocus(n => this.onListFocus(n))), this._register(O(this.selectDropDownContainer, X.FOCUS_OUT, n => {
                !this._isVisible || Ki(n.relatedTarget, this.selectDropDownContainer) || this.onListBlur()
            })), this.selectList.getHTMLElement().setAttribute("aria-label", this.selectBoxOptions.ariaLabel || ""), this.selectList.getHTMLElement().setAttribute("aria-expanded", "true"), this.styleList()
        }
        onPointerUp(t) {
            if (!this.selectList.length) return;
            fe.stop(t);
            const i = t.target;
            if (!i || i.classList.contains("slider")) return;
            const s = i.closest(".monaco-list-row");
            if (!s) return;
            const n = Number(s.getAttribute("data-index")),
                r = s.classList.contains("option-disabled");
            n >= 0 && n < this.options.length && !r && (this.selected = n, this.select(this.selected), this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selectList.getFocus()[0]), this.selected !== this._currentSelection && (this._currentSelection = this.selected, this._onDidSelect.fire({
                index: this.selectElement.selectedIndex,
                selected: this.options[this.selected].text
            }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)), this.hideSelectDropDown(!0))
        }
        onListBlur() {
            this._sticky || (this.selected !== this._currentSelection && this.select(this._currentSelection), this.hideSelectDropDown(!1))
        }
        renderDescriptionMarkdown(t, i) {
            const s = r => {
                    for (let o = 0; o < r.childNodes.length; o++) {
                        const a = r.childNodes.item(o);
                        (a.tagName && a.tagName.toLowerCase()) === "img" ? a.remove(): s(a)
                    }
                },
                n = Um({
                    value: t,
                    supportThemeIcons: !0
                }, {
                    actionHandler: i
                });
            return n.element.classList.add("select-box-description-markdown"), s(n.element), n.element
        }
        onListFocus(t) {
            !this._isVisible || !this._hasDetails || this.updateDetail(t.indexes[0])
        }
        updateDetail(t) {
            this.selectionDetailsPane.innerText = "";
            const i = this.options[t],
                s = i?.description ?? "",
                n = i?.descriptionIsMarkdown ?? !1;
            if (s) {
                if (n) {
                    const r = i.descriptionMarkdownActionHandler;
                    this.selectionDetailsPane.appendChild(this.renderDescriptionMarkdown(s, r))
                } else this.selectionDetailsPane.innerText = s;
                this.selectionDetailsPane.style.display = "block"
            } else this.selectionDetailsPane.style.display = "none";
            this._skipLayout = !0, this.contextViewProvider.layout(), this._skipLayout = !1
        }
        onEscape(t) {
            fe.stop(t), this.select(this._currentSelection), this.hideSelectDropDown(!0)
        }
        onEnter(t) {
            fe.stop(t), this.selected !== this._currentSelection && (this._currentSelection = this.selected, this._onDidSelect.fire({
                index: this.selectElement.selectedIndex,
                selected: this.options[this.selected].text
            }), this.options[this.selected] && this.options[this.selected].text && this.setTitle(this.options[this.selected].text)), this.hideSelectDropDown(!0)
        }
        onDownArrow(t) {
            if (this.selected < this.options.length - 1) {
                fe.stop(t, !0);
                const i = this.options[this.selected + 1].isDisabled;
                if (i && this.options.length > this.selected + 2) this.selected += 2;
                else {
                    if (i) return;
                    this.selected++
                }
                this.select(this.selected), this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selectList.getFocus()[0])
            }
        }
        onUpArrow(t) {
            this.selected > 0 && (fe.stop(t, !0), this.options[this.selected - 1].isDisabled && this.selected > 1 ? this.selected -= 2 : this.selected--, this.select(this.selected), this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selectList.getFocus()[0]))
        }
        onPageUp(t) {
            fe.stop(t), this.selectList.focusPreviousPage(), setTimeout(() => {
                this.selected = this.selectList.getFocus()[0], this.options[this.selected].isDisabled && this.selected < this.options.length - 1 && (this.selected++, this.selectList.setFocus([this.selected])), this.selectList.reveal(this.selected), this.select(this.selected)
            }, 1)
        }
        onPageDown(t) {
            fe.stop(t), this.selectList.focusNextPage(), setTimeout(() => {
                this.selected = this.selectList.getFocus()[0], this.options[this.selected].isDisabled && this.selected > 0 && (this.selected--, this.selectList.setFocus([this.selected])), this.selectList.reveal(this.selected), this.select(this.selected)
            }, 1)
        }
        onHome(t) {
            fe.stop(t), !(this.options.length < 2) && (this.selected = 0, this.options[this.selected].isDisabled && this.selected > 1 && this.selected++, this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selected), this.select(this.selected))
        }
        onEnd(t) {
            fe.stop(t), !(this.options.length < 2) && (this.selected = this.options.length - 1, this.options[this.selected].isDisabled && this.selected > 1 && this.selected--, this.selectList.setFocus([this.selected]), this.selectList.reveal(this.selected), this.select(this.selected))
        }
        onCharacter(t) {
            const i = _n.toString(t.keyCode);
            let s = -1;
            for (let n = 0; n < this.options.length - 1; n++)
                if (s = (n + this.selected + 1) % this.options.length, this.options[s].text.charAt(0).toUpperCase() === i && !this.options[s].isDisabled) {
                    this.select(s), this.selectList.setFocus([s]), this.selectList.reveal(this.selectList.getFocus()[0]), fe.stop(t);
                    break
                }
        }
        dispose() {
            this.hideSelectDropDown(!1), super.dispose()
        }
    };
ha.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN = 32, ha.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN = 2, ha.DEFAULT_MINIMUM_VISIBLE_OPTIONS = 3;
var Ev = {
        ...Hg,
        selectBackground: "#3C3C3C",
        selectForeground: "#F0F0F0",
        selectBorder: "#3C3C3C",
        decoratorRightForeground: void 0,
        selectListBackground: void 0,
        selectListBorder: void 0,
        focusBorder: void 0
    },
    da = class extends q {
        constructor(e, t = "", i = "", s = !0, n) {
            super(), this._onDidChange = this._register(new L), this.onDidChange = this._onDidChange.event, this._enabled = !0, this._id = e, this._label = t, this._cssClass = i, this._enabled = s, this._actionCallback = n
        }
        get id() {
            return this._id
        }
        get label() {
            return this._label
        }
        set label(e) {
            this._setLabel(e)
        }
        _setLabel(e) {
            this._label !== e && (this._label = e, this._onDidChange.fire({
                label: e
            }))
        }
        get tooltip() {
            return this._tooltip || ""
        }
        set tooltip(e) {
            this._setTooltip(e)
        }
        _setTooltip(e) {
            this._tooltip !== e && (this._tooltip = e, this._onDidChange.fire({
                tooltip: e
            }))
        }
        get class() {
            return this._cssClass
        }
        set class(e) {
            this._setClass(e)
        }
        _setClass(e) {
            this._cssClass !== e && (this._cssClass = e, this._onDidChange.fire({
                class: e
            }))
        }
        get enabled() {
            return this._enabled
        }
        set enabled(e) {
            this._setEnabled(e)
        }
        _setEnabled(e) {
            this._enabled !== e && (this._enabled = e, this._onDidChange.fire({
                enabled: e
            }))
        }
        get checked() {
            return this._checked
        }
        set checked(e) {
            this._setChecked(e)
        }
        _setChecked(e) {
            this._checked !== e && (this._checked = e, this._onDidChange.fire({
                checked: e
            }))
        }
        async run(e, t) {
            this._actionCallback && await this._actionCallback(e)
        }
    },
    Cd = class extends q {
        constructor() {
            super(...arguments), this._onWillRun = this._register(new L), this.onWillRun = this._onWillRun.event, this._onDidRun = this._register(new L), this.onDidRun = this._onDidRun.event
        }
        async run(e, t) {
            if (!e.enabled) return;
            this._onWillRun.fire({
                action: e
            });
            let i;
            try {
                await this.runAction(e, t)
            } catch (s) {
                i = s
            }
            this._onDidRun.fire({
                action: e,
                error: i
            })
        }
        async runAction(e, t) {
            await e.run(t)
        }
    },
    Dd = class Ba {
        constructor() {
            this.id = Ba.ID, this.label = "", this.tooltip = "", this.class = "separator", this.enabled = !1, this.checked = !1
        }
        static join(...t) {
            let i = [];
            for (const s of t) s.length && (i.length ? i = [...i, new Ba, ...s] : i = s);
            return i
        }
        async run() {}
    };
Dd.ID = "vs.actions.separator";
var tr = Dd,
    f2 = class uu extends da {
        constructor() {
            super(uu.ID, V(44, null), void 0, !1)
        }
    };
f2.ID = "vs.actions.empty";
var bi = class extends q {
        constructor(e, t, i = {}) {
            super(), this.options = i, this._context = e || this, this._action = t, t instanceof da && this._register(t.onDidChange(s => {
                this.element && this.handleActionChangeEvent(s)
            }))
        }
        get action() {
            return this._action
        }
        handleActionChangeEvent(e) {
            e.enabled !== void 0 && this.updateEnabled(), e.checked !== void 0 && this.updateChecked(), e.class !== void 0 && this.updateClass(), e.label !== void 0 && (this.updateLabel(), this.updateTooltip()), e.tooltip !== void 0 && this.updateTooltip()
        }
        get actionRunner() {
            return this._actionRunner || (this._actionRunner = this._register(new Cd)), this._actionRunner
        }
        set actionRunner(e) {
            this._actionRunner = e
        }
        isEnabled() {
            return this._action.enabled
        }
        setActionContext(e) {
            this._context = e
        }
        render(e) {
            const t = this.element = e;
            this._register(Bn.addTarget(e));
            const i = this.options && this.options.draggable;
            i && (e.draggable = !0, dn && this._register(O(e, X.DRAG_START, s => s.dataTransfer?.setData(_h.TEXT, this._action.label)))), this._register(O(t, $e.Tap, s => this.onClick(s, !0))), this._register(O(t, X.MOUSE_DOWN, s => {
                i || fe.stop(s, !0), this._action.enabled && s.button === 0 && t.classList.add("active")
            })), Re && this._register(O(t, X.CONTEXT_MENU, s => {
                s.button === 0 && s.ctrlKey === !0 && this.onClick(s)
            })), this._register(O(t, X.CLICK, s => {
                fe.stop(s, !0), this.options && this.options.isMenu || this.onClick(s)
            })), this._register(O(t, X.DBLCLICK, s => {
                fe.stop(s, !0)
            })), [X.MOUSE_UP, X.MOUSE_OUT].forEach(s => {
                this._register(O(t, s, n => {
                    fe.stop(n), t.classList.remove("active")
                }))
            })
        }
        onClick(e, t = !1) {
            fe.stop(e, !0);
            const i = cn(this._context) ? this.options?.useEventAsContext ? e : {
                preserveFocus: t
            } : this._context;
            this.actionRunner.run(this._action, i)
        }
        focus() {
            this.element && (this.element.tabIndex = 0, this.element.focus(), this.element.classList.add("focused"))
        }
        isFocused() {
            return !!this.element?.classList.contains("focused")
        }
        blur() {
            this.element && (this.element.blur(), this.element.tabIndex = -1, this.element.classList.remove("focused"))
        }
        setFocusable(e) {
            this.element && (this.element.tabIndex = e ? 0 : -1)
        }
        get trapsArrowNavigation() {
            return !1
        }
        updateEnabled() {}
        updateLabel() {}
        getClass() {
            return this.action.class
        }
        getTooltip() {
            return this.action.tooltip
        }
        updateTooltip() {
            if (!this.element) return;
            const e = this.getTooltip() ?? "";
            if (this.updateAriaLabel(), this.options.hoverDelegate?.showNativeHover) this.element.title = e;
            else if (!this.customHover && e !== "") {
                const t = this.options.hoverDelegate ?? qi("element");
                this.customHover = this._store.add(er().setupManagedHover(t, this.element, e))
            } else this.customHover && this.customHover.update(e)
        }
        updateAriaLabel() {
            if (this.element) {
                const e = this.getTooltip() ?? "";
                this.element.setAttribute("aria-label", e)
            }
        }
        updateClass() {}
        updateChecked() {}
        dispose() {
            this.element && (this.element.remove(), this.element = void 0), this._context = void 0, super.dispose()
        }
    },
    p2 = class extends bi {
        constructor(e, t, i) {
            super(e, t, i), this.options = i, this.options.icon = i.icon !== void 0 ? i.icon : !1, this.options.label = i.label !== void 0 ? i.label : !0, this.cssClass = ""
        }
        render(e) {
            super.render(e), Yu(this.element);
            const t = document.createElement("a");
            if (t.classList.add("action-label"), t.setAttribute("role", this.getDefaultAriaRole()), this.label = t, this.element.appendChild(t), this.options.label && this.options.keybinding && !this.options.keybindingNotRenderedWithLabel) {
                const i = document.createElement("span");
                i.classList.add("keybinding"), i.textContent = this.options.keybinding, this.element.appendChild(i)
            }
            this.updateClass(), this.updateLabel(), this.updateTooltip(), this.updateEnabled(), this.updateChecked()
        }
        getDefaultAriaRole() {
            return this._action.id === tr.ID ? "presentation" : this.options.isMenu ? "menuitem" : this.options.isTabList ? "tab" : "button"
        }
        focus() {
            this.label && (this.label.tabIndex = 0, this.label.focus())
        }
        isFocused() {
            return !!this.label && this.label?.tabIndex === 0
        }
        blur() {
            this.label && (this.label.tabIndex = -1)
        }
        setFocusable(e) {
            this.label && (this.label.tabIndex = e ? 0 : -1)
        }
        updateLabel() {
            this.options.label && this.label && (this.label.textContent = this.action.label)
        }
        getTooltip() {
            let e = null;
            return this.action.tooltip ? e = this.action.tooltip : this.action.label && (e = this.action.label, this.options.keybinding && (e = V(0, null, e, this.options.keybinding))), e ?? void 0
        }
        updateClass() {
            this.cssClass && this.label && this.label.classList.remove(...this.cssClass.split(" ")), this.options.icon ? (this.cssClass = this.getClass(), this.label && (this.label.classList.add("codicon"), this.cssClass && this.label.classList.add(...this.cssClass.split(" "))), this.updateEnabled()) : this.label?.classList.remove("codicon")
        }
        updateEnabled() {
            this.action.enabled ? (this.label && (this.label.removeAttribute("aria-disabled"), this.label.classList.remove("disabled")), this.element?.classList.remove("disabled")) : (this.label && (this.label.setAttribute("aria-disabled", "true"), this.label.classList.add("disabled")), this.element?.classList.add("disabled"))
        }
        updateAriaLabel() {
            if (this.label) {
                const e = this.getTooltip() ?? "";
                this.label.setAttribute("aria-label", e)
            }
        }
        updateChecked() {
            this.label && (this.action.checked !== void 0 ? (this.label.classList.toggle("checked", this.action.checked), this.options.isTabList ? this.label.setAttribute("aria-selected", this.action.checked ? "true" : "false") : (this.label.setAttribute("aria-checked", this.action.checked ? "true" : "false"), this.label.setAttribute("role", "checkbox"))) : (this.label.classList.remove("checked"), this.label.removeAttribute(this.options.isTabList ? "aria-selected" : "aria-checked"), this.label.setAttribute("role", this.getDefaultAriaRole())))
        }
    },
    Ed = class extends q {
        constructor(e, t = {}) {
            super(), this._actionRunnerDisposables = this._register(new Y), this.viewItemDisposables = this._register(new i1), this.triggerKeyDown = !1, this.focusable = !0, this._onDidBlur = this._register(new L), this.onDidBlur = this._onDidBlur.event, this._onDidCancel = this._register(new L({
                onWillAddFirstListener: () => this.cancelHasListener = !0
            })), this.onDidCancel = this._onDidCancel.event, this.cancelHasListener = !1, this._onDidRun = this._register(new L), this.onDidRun = this._onDidRun.event, this._onWillRun = this._register(new L), this.onWillRun = this._onWillRun.event, this.options = t, this._context = t.context ?? null, this._orientation = this.options.orientation ?? 0, this._triggerKeys = {
                keyDown: this.options.triggerKeys?.keyDown ?? !1,
                keys: this.options.triggerKeys?.keys ?? [3, 10]
            }, this._hoverDelegate = t.hoverDelegate ?? this._register(Io()), this.options.actionRunner ? this._actionRunner = this.options.actionRunner : (this._actionRunner = new Cd, this._actionRunnerDisposables.add(this._actionRunner)), this._actionRunnerDisposables.add(this._actionRunner.onDidRun(n => this._onDidRun.fire(n))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun(n => this._onWillRun.fire(n))), this.viewItems = [], this.focusedItem = void 0, this.domNode = document.createElement("div"), this.domNode.className = "monaco-action-bar";
            let i, s;
            switch (this._orientation) {
                case 0:
                    i = [15], s = [17];
                    break;
                case 1:
                    i = [16], s = [18], this.domNode.className += " vertical";
                    break
            }
            this._register(O(this.domNode, X.KEY_DOWN, n => {
                const r = new Me(n);
                let o = !0;
                const a = typeof this.focusedItem == "number" ? this.viewItems[this.focusedItem] : void 0;
                i && (r.equals(i[0]) || r.equals(i[1])) ? o = this.focusPrevious() : s && (r.equals(s[0]) || r.equals(s[1])) ? o = this.focusNext() : r.equals(9) && this.cancelHasListener ? this._onDidCancel.fire() : r.equals(14) ? o = this.focusFirst() : r.equals(13) ? o = this.focusLast() : r.equals(2) && a instanceof bi && a.trapsArrowNavigation ? o = this.focusNext(void 0, !0) : this.isTriggerKeyEvent(r) ? this._triggerKeys.keyDown ? this.doTrigger(r) : this.triggerKeyDown = !0 : o = !1, o && (r.preventDefault(), r.stopPropagation())
            })), this._register(O(this.domNode, X.KEY_UP, n => {
                const r = new Me(n);
                this.isTriggerKeyEvent(r) ? (!this._triggerKeys.keyDown && this.triggerKeyDown && (this.triggerKeyDown = !1, this.doTrigger(r)), r.preventDefault(), r.stopPropagation()) : (r.equals(2) || r.equals(1026) || r.equals(16) || r.equals(18) || r.equals(15) || r.equals(17)) && this.updateFocusedItem()
            })), this.focusTracker = this._register(E0(this.domNode)), this._register(this.focusTracker.onDidBlur(() => {
                (Gi() === this.domNode || !Ki(Gi(), this.domNode)) && (this._onDidBlur.fire(), this.previouslyFocusedItem = this.focusedItem, this.focusedItem = void 0, this.triggerKeyDown = !1)
            })), this._register(this.focusTracker.onDidFocus(() => this.updateFocusedItem())), this.actionsList = document.createElement("ul"), this.actionsList.className = "actions-container", this.options.highlightToggledItems && this.actionsList.classList.add("highlight-toggled"), this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar"), this.options.ariaLabel && this.actionsList.setAttribute("aria-label", this.options.ariaLabel), this.domNode.appendChild(this.actionsList), e.appendChild(this.domNode)
        }
        refreshRole() {
            this.length() >= 1 ? this.actionsList.setAttribute("role", this.options.ariaRole || "toolbar") : this.actionsList.setAttribute("role", "presentation")
        }
        setAriaLabel(e) {
            e ? this.actionsList.setAttribute("aria-label", e) : this.actionsList.removeAttribute("aria-label")
        }
        setFocusable(e) {
            if (this.focusable = e, this.focusable) {
                const t = this.viewItems.find(i => i instanceof bi && i.isEnabled());
                t instanceof bi && t.setFocusable(!0)
            } else this.viewItems.forEach(t => {
                t instanceof bi && t.setFocusable(!1)
            })
        }
        isTriggerKeyEvent(e) {
            let t = !1;
            return this._triggerKeys.keys.forEach(i => {
                t = t || e.equals(i)
            }), t
        }
        updateFocusedItem() {
            for (let e = 0; e < this.actionsList.children.length; e++) {
                const t = this.actionsList.children[e];
                if (Ki(Gi(), t)) {
                    this.focusedItem = e, this.viewItems[this.focusedItem]?.showHover?.();
                    break
                }
            }
        }
        get context() {
            return this._context
        }
        set context(e) {
            this._context = e, this.viewItems.forEach(t => t.setActionContext(e))
        }
        get actionRunner() {
            return this._actionRunner
        }
        set actionRunner(e) {
            this._actionRunner = e, this._actionRunnerDisposables.clear(), this._actionRunnerDisposables.add(this._actionRunner.onDidRun(t => this._onDidRun.fire(t))), this._actionRunnerDisposables.add(this._actionRunner.onWillRun(t => this._onWillRun.fire(t))), this.viewItems.forEach(t => t.actionRunner = e)
        }
        getContainer() {
            return this.domNode
        }
        hasAction(e) {
            return this.viewItems.findIndex(t => t.action.id === e.id) !== -1
        }
        getAction(e) {
            if (typeof e == "number") return this.viewItems[e]?.action;
            if (Nt(e)) {
                for (; e.parentElement !== this.actionsList;) {
                    if (!e.parentElement) return;
                    e = e.parentElement
                }
                for (let t = 0; t < this.actionsList.childNodes.length; t++)
                    if (this.actionsList.childNodes[t] === e) return this.viewItems[t].action
            }
        }
        push(e, t = {}) {
            const i = Array.isArray(e) ? e : [e];
            let s = Tr(t.index) ? t.index : null;
            i.forEach(n => {
                const r = document.createElement("li");
                r.className = "action-item", r.setAttribute("role", "presentation");
                let o;
                const a = {
                    hoverDelegate: this._hoverDelegate,
                    ...t,
                    isTabList: this.options.ariaRole === "tablist"
                };
                this.options.actionViewItemProvider && (o = this.options.actionViewItemProvider(n, a)), o || (o = new p2(this.context, n, a)), this.options.allowContextMenu || this.viewItemDisposables.set(o, O(r, X.CONTEXT_MENU, c => {
                    fe.stop(c, !0)
                })), o.actionRunner = this._actionRunner, o.setActionContext(this.context), o.render(r), this.focusable && o instanceof bi && this.viewItems.length === 0 && o.setFocusable(!0), s === null || s < 0 || s >= this.actionsList.children.length ? (this.actionsList.appendChild(r), this.viewItems.push(o)) : (this.actionsList.insertBefore(r, this.actionsList.children[s]), this.viewItems.splice(s, 0, o), s++)
            }), typeof this.focusedItem == "number" && this.focus(this.focusedItem), this.refreshRole()
        }
        getWidth(e) {
            if (e >= 0 && e < this.actionsList.children.length) {
                const t = this.actionsList.children.item(e);
                if (t) return t.clientWidth
            }
            return 0
        }
        getHeight(e) {
            if (e >= 0 && e < this.actionsList.children.length) {
                const t = this.actionsList.children.item(e);
                if (t) return t.clientHeight
            }
            return 0
        }
        pull(e) {
            e >= 0 && e < this.viewItems.length && (this.actionsList.childNodes[e].remove(), this.viewItemDisposables.deleteAndDispose(this.viewItems[e]), Ke(this.viewItems.splice(e, 1)), this.refreshRole())
        }
        clear() {
            this.isEmpty() || (this.viewItems = Ke(this.viewItems), this.viewItemDisposables.clearAndDisposeAll(), ci(this.actionsList), this.refreshRole())
        }
        length() {
            return this.viewItems.length
        }
        isEmpty() {
            return this.viewItems.length === 0
        }
        focus(e) {
            let t = !1,
                i;
            if (e === void 0 ? t = !0 : typeof e == "number" ? i = e : typeof e == "boolean" && (t = e), t && typeof this.focusedItem > "u") {
                const s = this.viewItems.findIndex(n => n.isEnabled());
                this.focusedItem = s === -1 ? void 0 : s, this.updateFocus(void 0, void 0, !0)
            } else i !== void 0 && (this.focusedItem = i), this.updateFocus(void 0, void 0, !0)
        }
        focusFirst() {
            return this.focusedItem = this.length() - 1, this.focusNext(!0)
        }
        focusLast() {
            return this.focusedItem = 0, this.focusPrevious(!0)
        }
        focusNext(e, t) {
            if (typeof this.focusedItem > "u") this.focusedItem = this.viewItems.length - 1;
            else if (this.viewItems.length <= 1) return !1;
            const i = this.focusedItem;
            let s;
            do {
                if (!e && this.options.preventLoopNavigation && this.focusedItem + 1 >= this.viewItems.length) return this.focusedItem = i, !1;
                this.focusedItem = (this.focusedItem + 1) % this.viewItems.length, s = this.viewItems[this.focusedItem]
            } while (this.focusedItem !== i && (this.options.focusOnlyEnabledItems && !s.isEnabled() || s.action.id === tr.ID));
            return this.updateFocus(void 0, void 0, t), !0
        }
        focusPrevious(e) {
            if (typeof this.focusedItem > "u") this.focusedItem = 0;
            else if (this.viewItems.length <= 1) return !1;
            const t = this.focusedItem;
            let i;
            do {
                if (this.focusedItem = this.focusedItem - 1, this.focusedItem < 0) {
                    if (!e && this.options.preventLoopNavigation) return this.focusedItem = t, !1;
                    this.focusedItem = this.viewItems.length - 1
                }
                i = this.viewItems[this.focusedItem]
            } while (this.focusedItem !== t && (this.options.focusOnlyEnabledItems && !i.isEnabled() || i.action.id === tr.ID));
            return this.updateFocus(!0), !0
        }
        updateFocus(e, t, i = !1) {
            typeof this.focusedItem > "u" && this.actionsList.focus({
                preventScroll: t
            }), this.previouslyFocusedItem !== void 0 && this.previouslyFocusedItem !== this.focusedItem && this.viewItems[this.previouslyFocusedItem]?.blur();
            const s = this.focusedItem !== void 0 ? this.viewItems[this.focusedItem] : void 0;
            if (s) {
                let n = !0;
                xr(s.focus) || (n = !1), this.options.focusOnlyEnabledItems && xr(s.isEnabled) && !s.isEnabled() && (n = !1), s.action.id === tr.ID && (n = !1), n ? (i || this.previouslyFocusedItem !== this.focusedItem) && (s.focus(e), this.previouslyFocusedItem = this.focusedItem) : (this.actionsList.focus({
                    preventScroll: t
                }), this.previouslyFocusedItem = void 0), n && s.showHover?.()
            }
        }
        doTrigger(e) {
            if (typeof this.focusedItem > "u") return;
            const t = this.viewItems[this.focusedItem];
            if (t instanceof bi) {
                const i = t._context === null || t._context === void 0 ? e : t._context;
                this.run(t._action, i)
            }
        }
        async run(e, t) {
            await this._actionRunner.run(e, t)
        }
        dispose() {
            this._context = void 0, this.viewItems = Ke(this.viewItems), this.getContainer().remove(), super.dispose()
        }
    },
    kd = {
        inputActiveOptionBorder: "#007ACC00",
        inputActiveOptionForeground: "#FFFFFF",
        inputActiveOptionBackground: "#0E639C50"
    },
    Ws = class extends fi {
        constructor(e) {
            super(), this._onChange = this._register(new L), this.onChange = this._onChange.event, this._onKeyDown = this._register(new L), this.onKeyDown = this._onKeyDown.event, this._opts = e, this._checked = this._opts.isChecked;
            const t = ["monaco-custom-toggle"];
            this._opts.icon && (this._icon = this._opts.icon, t.push(...ye.asClassNameArray(this._icon))), this._opts.actionClassName && t.push(...this._opts.actionClassName.split(" ")), this._checked && t.push("checked"), this.domNode = document.createElement("div"), this._hover = this._register(er().setupManagedHover(e.hoverDelegate ?? qi("mouse"), this.domNode, this._opts.title)), this.domNode.classList.add(...t), this._opts.notFocusable || (this.domNode.tabIndex = 0), this.domNode.setAttribute("role", "checkbox"), this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.setAttribute("aria-label", this._opts.title), this.applyStyles(), this.onclick(this.domNode, i => {
                this.enabled && (this.checked = !this._checked, this._onChange.fire(!1), i.preventDefault())
            }), this._register(this.ignoreGesture(this.domNode)), this.onkeydown(this.domNode, i => {
                if (i.keyCode === 10 || i.keyCode === 3) {
                    this.checked = !this._checked, this._onChange.fire(!0), i.preventDefault(), i.stopPropagation();
                    return
                }
                this._onKeyDown.fire(i)
            })
        }
        get enabled() {
            return this.domNode.getAttribute("aria-disabled") !== "true"
        }
        focus() {
            this.domNode.focus()
        }
        get checked() {
            return this._checked
        }
        set checked(e) {
            this._checked = e, this.domNode.setAttribute("aria-checked", String(this._checked)), this.domNode.classList.toggle("checked", this._checked), this.applyStyles()
        }
        setIcon(e) {
            this._icon && this.domNode.classList.remove(...ye.asClassNameArray(this._icon)), this._icon = e, this._icon && this.domNode.classList.add(...ye.asClassNameArray(this._icon))
        }
        width() {
            return 22
        }
        applyStyles() {
            this.domNode && (this.domNode.style.borderColor = this._checked && this._opts.inputActiveOptionBorder || "", this.domNode.style.color = this._checked && this._opts.inputActiveOptionForeground || "inherit", this.domNode.style.backgroundColor = this._checked && this._opts.inputActiveOptionBackground || "")
        }
        enable() {
            this.domNode.setAttribute("aria-disabled", String(!1))
        }
        disable() {
            this.domNode.setAttribute("aria-disabled", String(!0))
        }
        setTitle(e) {
            this._hover.update(e), this.domNode.setAttribute("aria-label", e)
        }
        set visible(e) {
            this.domNode.style.display = e ? "" : "none"
        }
        get visible() {
            return this.domNode.style.display !== "none"
        }
    },
    g2 = class fu extends fi {
        constructor(t, i, s) {
            super(), this.title = t, this.isChecked = i, this._onChange = this._register(new L), this.onChange = this._onChange.event, this.checkbox = this._register(new Ws({
                title: this.title,
                isChecked: this.isChecked,
                icon: me.check,
                actionClassName: fu.CLASS_NAME,
                ...kd
            })), this.domNode = this.checkbox.domNode, this.styles = s, this.applyStyles(), this._register(this.checkbox.onChange(n => {
                this.applyStyles(), this._onChange.fire(n)
            }))
        }
        get checked() {
            return this.checkbox.checked
        }
        get enabled() {
            return this.checkbox.enabled
        }
        set checked(t) {
            this.checkbox.checked = t, this.applyStyles()
        }
        focus() {
            this.domNode.focus()
        }
        hasFocus() {
            return ks(this.domNode)
        }
        enable() {
            this.checkbox.enable()
        }
        disable() {
            this.checkbox.disable()
        }
        applyStyles() {
            this.domNode.style.color = this.styles.checkboxForeground || "", this.domNode.style.backgroundColor = this.styles.checkboxBackground || "", this.domNode.style.borderColor = this.styles.checkboxBorder || ""
        }
    };
g2.CLASS_NAME = "monaco-checkbox";
var m2 = V(10, null),
    v2 = V(11, null),
    y2 = V(12, null),
    b2 = class extends Ws {
        constructor(e) {
            super({
                icon: me.caseSensitive,
                title: m2 + e.appendTitle,
                isChecked: e.isChecked,
                hoverDelegate: e.hoverDelegate ?? qi("element"),
                inputActiveOptionBorder: e.inputActiveOptionBorder,
                inputActiveOptionForeground: e.inputActiveOptionForeground,
                inputActiveOptionBackground: e.inputActiveOptionBackground
            })
        }
    },
    _2 = class extends Ws {
        constructor(e) {
            super({
                icon: me.wholeWord,
                title: v2 + e.appendTitle,
                isChecked: e.isChecked,
                hoverDelegate: e.hoverDelegate ?? qi("element"),
                inputActiveOptionBorder: e.inputActiveOptionBorder,
                inputActiveOptionForeground: e.inputActiveOptionForeground,
                inputActiveOptionBackground: e.inputActiveOptionBackground
            })
        }
    },
    w2 = class extends Ws {
        constructor(e) {
            super({
                icon: me.regex,
                title: y2 + e.appendTitle,
                isChecked: e.isChecked,
                hoverDelegate: e.hoverDelegate ?? qi("element"),
                inputActiveOptionBorder: e.inputActiveOptionBorder,
                inputActiveOptionForeground: e.inputActiveOptionForeground,
                inputActiveOptionBackground: e.inputActiveOptionBackground
            })
        }
    },
    S2 = class {
        constructor(e, t = 0, i = e.length, s = t - 1) {
            this.items = e, this.start = t, this.end = i, this.index = s
        }
        current() {
            return this.index === this.start - 1 || this.index === this.end ? null : this.items[this.index]
        }
        next() {
            return this.index = Math.min(this.index + 1, this.end), this.current()
        }
        previous() {
            return this.index = Math.max(this.index - 1, this.start - 1), this.current()
        }
        first() {
            return this.index = this.start, this.current()
        }
        last() {
            return this.index = this.end - 1, this.current()
        }
    },
    C2 = class {
        constructor(e = new Set, t = 10) {
            this._history = e, this._limit = t, this._onChange(), this._history.onDidChange && (this._disposable = this._history.onDidChange(() => this._onChange()))
        }
        getHistory() {
            return this._elements
        }
        add(e) {
            this._history.delete(e), this._history.add(e), this._onChange()
        }
        next() {
            return this._navigator.next()
        }
        previous() {
            return this._currentPosition() !== 0 ? this._navigator.previous() : null
        }
        current() {
            return this._navigator.current()
        }
        first() {
            return this._navigator.first()
        }
        last() {
            return this._navigator.last()
        }
        isFirst() {
            return this._currentPosition() === 0
        }
        isLast() {
            return this._currentPosition() >= this._elements.length - 1
        }
        isNowhere() {
            return this._navigator.current() === null
        }
        has(e) {
            return this._history.has(e)
        }
        clear() {
            this._history.clear(), this._onChange()
        }
        _onChange() {
            this._reduceToLimit();
            const e = this._elements;
            this._navigator = new S2(e, 0, e.length, e.length)
        }
        _reduceToLimit() {
            const e = this._elements;
            if (e.length > this._limit) {
                const t = e.slice(e.length - this._limit);
                this._history.replace ? this._history.replace(t) : this._history = new Set(t)
            }
        }
        _currentPosition() {
            const e = this._navigator.current();
            return e ? this._elements.indexOf(e) : -1
        }
        get _elements() {
            const e = [];
            return this._history.forEach(t => e.push(t)), e
        }
        dispose() {
            this._disposable && (this._disposable.dispose(), this._disposable = void 0)
        }
    },
    Vs = ie,
    D2 = {
        inputBackground: "#3C3C3C",
        inputForeground: "#CCCCCC",
        inputValidationInfoBorder: "#55AAFF",
        inputValidationInfoBackground: "#063B49",
        inputValidationWarningBorder: "#B89500",
        inputValidationWarningBackground: "#352A05",
        inputValidationErrorBorder: "#BE1100",
        inputValidationErrorBackground: "#5A1D1D",
        inputBorder: void 0,
        inputValidationErrorForeground: void 0,
        inputValidationInfoForeground: void 0,
        inputValidationWarningForeground: void 0
    },
    E2 = class extends fi {
        constructor(e, t, i) {
            super(), this.state = "idle", this.maxHeight = Number.POSITIVE_INFINITY, this.hover = this._register(new Al), this._onDidChange = this._register(new L), this.onDidChange = this._onDidChange.event, this._onDidHeightChange = this._register(new L), this.onDidHeightChange = this._onDidHeightChange.event, this.contextViewProvider = t, this.options = i, this.message = null, this.placeholder = this.options.placeholder || "", this.tooltip = this.options.tooltip ?? (this.placeholder || ""), this.ariaLabel = this.options.ariaLabel || "", this.options.validationOptions && (this.validation = this.options.validationOptions.validation), this.element = Q(e, Vs(".monaco-inputbox.idle"));
            const s = this.options.flexibleHeight ? "textarea" : "input",
                n = Q(this.element, Vs(".ibwrapper"));
            if (this.input = Q(n, Vs(s + ".input.empty")), this.input.setAttribute("autocorrect", "off"), this.input.setAttribute("autocapitalize", "off"), this.input.setAttribute("spellcheck", "false"), this.onfocus(this.input, () => this.element.classList.add("synthetic-focus")), this.onblur(this.input, () => this.element.classList.remove("synthetic-focus")), this.options.flexibleHeight) {
                this.maxHeight = typeof this.options.flexibleMaxHeight == "number" ? this.options.flexibleMaxHeight : Number.POSITIVE_INFINITY, this.mirror = Q(n, Vs("div.mirror")), this.mirror.innerText = "\xA0", this.scrollableElement = new gg(this.element, {
                    vertical: 1
                }), this.options.flexibleWidth && (this.input.setAttribute("wrap", "off"), this.mirror.style.whiteSpace = "pre", this.mirror.style.wordWrap = "initial"), Q(e, this.scrollableElement.getDomNode()), this._register(this.scrollableElement), this._register(this.scrollableElement.onScroll(a => this.input.scrollTop = a.scrollTop));
                const r = this._register(new le(e.ownerDocument, "selectionchange")),
                    o = A.filter(r.event, () => e.ownerDocument.getSelection()?.anchorNode === n);
                this._register(o(this.updateScrollDimensions, this)), this._register(this.onDidHeightChange(this.updateScrollDimensions, this))
            } else this.input.type = this.options.type || "text", this.input.setAttribute("wrap", "off");
            this.ariaLabel && this.input.setAttribute("aria-label", this.ariaLabel), this.placeholder && !this.options.showPlaceholderOnFocus && this.setPlaceHolder(this.placeholder), this.tooltip && this.setTooltip(this.tooltip), this.oninput(this.input, () => this.onValueChange()), this.onblur(this.input, () => this.onBlur()), this.onfocus(this.input, () => this.onFocus()), this._register(this.ignoreGesture(this.input)), setTimeout(() => this.updateMirror(), 0), this.options.actions && (this.actionbar = this._register(new Ed(this.element)), this.actionbar.push(this.options.actions, {
                icon: !0,
                label: !1
            })), this.applyStyles()
        }
        onBlur() {
            this._hideMessage(), this.options.showPlaceholderOnFocus && this.input.setAttribute("placeholder", "")
        }
        onFocus() {
            this._showMessage(), this.options.showPlaceholderOnFocus && this.input.setAttribute("placeholder", this.placeholder || "")
        }
        setPlaceHolder(e) {
            this.placeholder = e, this.input.setAttribute("placeholder", e)
        }
        setTooltip(e) {
            this.tooltip = e, !this.hover.value && e && (this.hover.value = this._register(er().setupDelayedHoverAtMouse(this.input, () => ({
                content: this.tooltip,
                appearance: {
                    compact: !0
                }
            }))))
        }
        setAriaLabel(e) {
            this.ariaLabel = e, e ? this.input.setAttribute("aria-label", this.ariaLabel) : this.input.removeAttribute("aria-label")
        }
        getAriaLabel() {
            return this.ariaLabel
        }
        get mirrorElement() {
            return this.mirror
        }
        get inputElement() {
            return this.input
        }
        get value() {
            return this.input.value
        }
        set value(e) {
            this.input.value !== e && (this.input.value = e, this.onValueChange())
        }
        get step() {
            return this.input.step
        }
        set step(e) {
            this.input.step = e
        }
        get height() {
            return typeof this.cachedHeight == "number" ? this.cachedHeight : uh(this.element)
        }
        focus() {
            this.input.focus()
        }
        blur() {
            this.input.blur()
        }
        hasFocus() {
            return ks(this.input)
        }
        select(e = null) {
            this.input.select(), e && (this.input.setSelectionRange(e.start, e.end), e.end === this.input.value.length && (this.input.scrollLeft = this.input.scrollWidth))
        }
        isSelectionAtEnd() {
            return this.input.selectionEnd === this.input.value.length && this.input.selectionStart === this.input.selectionEnd
        }
        getSelection() {
            const e = this.input.selectionStart;
            if (e === null) return null;
            const t = this.input.selectionEnd ?? e;
            return {
                start: e,
                end: t
            }
        }
        enable() {
            this.input.removeAttribute("disabled")
        }
        disable() {
            this.blur(), this.input.disabled = !0, this._hideMessage()
        }
        setEnabled(e) {
            e ? this.enable() : this.disable()
        }
        get width() {
            return Do(this.input)
        }
        set width(e) {
            if (this.options.flexibleHeight && this.options.flexibleWidth) {
                let t = 0;
                if (this.mirror) {
                    const i = parseFloat(this.mirror.style.paddingLeft || "") || 0,
                        s = parseFloat(this.mirror.style.paddingRight || "") || 0;
                    t = i + s
                }
                this.input.style.width = e - t + "px"
            } else this.input.style.width = e + "px";
            this.mirror && (this.mirror.style.width = e + "px")
        }
        set paddingRight(e) {
            this.input.style.width = `calc(100% - ${e}px)`, this.mirror && (this.mirror.style.paddingRight = e + "px")
        }
        updateScrollDimensions() {
            if (typeof this.cachedContentHeight != "number" || typeof this.cachedHeight != "number" || !this.scrollableElement) return;
            const e = this.cachedContentHeight,
                t = this.cachedHeight,
                i = this.input.scrollTop;
            this.scrollableElement.setScrollDimensions({
                scrollHeight: e,
                height: t
            }), this.scrollableElement.setScrollPosition({
                scrollTop: i
            })
        }
        showMessage(e, t) {
            if (this.state === "open" && Qn(this.message, e)) return;
            this.message = e, this.element.classList.remove("idle"), this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add(this.classForType(e.type));
            const i = this.stylesForType(this.message.type);
            this.element.style.border = `1px solid ${It(i.border,"transparent")}`, this.message.content && (this.hasFocus() || t) && this._showMessage()
        }
        hideMessage() {
            this.message = null, this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add("idle"), this._hideMessage(), this.applyStyles()
        }
        isInputValid() {
            return !!this.validation && !this.validation(this.value)
        }
        validate() {
            let e = null;
            return this.validation && (e = this.validation(this.value), e ? (this.inputElement.setAttribute("aria-invalid", "true"), this.showMessage(e)) : this.inputElement.hasAttribute("aria-invalid") && (this.inputElement.removeAttribute("aria-invalid"), this.hideMessage())), e?.type
        }
        stylesForType(e) {
            const t = this.options.inputBoxStyles;
            switch (e) {
                case 1:
                    return {
                        border: t.inputValidationInfoBorder, background: t.inputValidationInfoBackground, foreground: t.inputValidationInfoForeground
                    };
                case 2:
                    return {
                        border: t.inputValidationWarningBorder, background: t.inputValidationWarningBackground, foreground: t.inputValidationWarningForeground
                    };
                default:
                    return {
                        border: t.inputValidationErrorBorder, background: t.inputValidationErrorBackground, foreground: t.inputValidationErrorForeground
                    }
            }
        }
        classForType(e) {
            switch (e) {
                case 1:
                    return "info";
                case 2:
                    return "warning";
                default:
                    return "error"
            }
        }
        _showMessage() {
            if (!this.contextViewProvider || !this.message) return;
            let e;
            const t = () => e.style.width = Do(this.element) + "px";
            this.contextViewProvider.showContextView({
                getAnchor: () => this.element,
                anchorAlignment: 1,
                render: s => {
                    if (!this.message) return null;
                    e = Q(s, Vs(".monaco-inputbox-container")), t();
                    const n = {
                            inline: !0,
                            className: "monaco-inputbox-message"
                        },
                        r = this.message.formatContent ? Pm(this.message.content, n) : Mm(this.message.content, n);
                    r.classList.add(this.classForType(this.message.type));
                    const o = this.stylesForType(this.message.type);
                    return r.style.backgroundColor = o.background ?? "", r.style.color = o.foreground ?? "", r.style.border = o.border ? `1px solid ${o.border}` : "", Q(e, r), null
                },
                onHide: () => {
                    this.state = "closed"
                },
                layout: t
            });
            let i;
            this.message.type === 3 ? i = V(19, null, this.message.content) : this.message.type === 2 ? i = V(20, null, this.message.content) : i = V(21, null, this.message.content), xs(i), this.state = "open"
        }
        _hideMessage() {
            this.contextViewProvider && (this.state === "open" && this.contextViewProvider.hideContextView(), this.state = "idle")
        }
        onValueChange() {
            this._onDidChange.fire(this.value), this.validate(), this.updateMirror(), this.input.classList.toggle("empty", !this.value), this.state === "open" && this.contextViewProvider && this.contextViewProvider.layout()
        }
        updateMirror() {
            if (!this.mirror) return;
            const e = this.value,
                i = e.charCodeAt(e.length - 1) === 10 ? " " : "";
            (e + i).replace(/\u000c/g, "") ? this.mirror.textContent = e + i : this.mirror.innerText = "\xA0", this.layout()
        }
        applyStyles() {
            const e = this.options.inputBoxStyles,
                t = e.inputBackground ?? "",
                i = e.inputForeground ?? "",
                s = e.inputBorder ?? "";
            this.element.style.backgroundColor = t, this.element.style.color = i, this.input.style.backgroundColor = "inherit", this.input.style.color = i, this.element.style.border = `1px solid ${It(s,"transparent")}`
        }
        layout() {
            if (!this.mirror) return;
            const e = this.cachedContentHeight;
            this.cachedContentHeight = uh(this.mirror), e !== this.cachedContentHeight && (this.cachedHeight = Math.min(this.cachedContentHeight, this.maxHeight), this.input.style.height = this.cachedHeight + "px", this._onDidHeightChange.fire(this.cachedContentHeight))
        }
        insertAtCursor(e) {
            const t = this.inputElement,
                i = t.selectionStart,
                s = t.selectionEnd,
                n = t.value;
            i !== null && s !== null && (this.value = n.substr(0, i) + e + n.substr(s), t.setSelectionRange(i + 1, i + 1), this.layout())
        }
        dispose() {
            this._hideMessage(), this.message = null, this.actionbar?.dispose(), super.dispose()
        }
    },
    k2 = class extends E2 {
        constructor(e, t, i) {
            const s = V(22, null, "\u21C5"),
                n = V(23, null, "\u21C5");
            super(e, t, i), this._onDidFocus = this._register(new L), this.onDidFocus = this._onDidFocus.event, this._onDidBlur = this._register(new L), this.onDidBlur = this._onDidBlur.event, this.history = this._register(new C2(i.history, 100)), this.addCurrentToHistoryOnNavigate = i.addCurrentToHistoryOnNavigate ?? !0;
            const r = () => {
                if (i.showHistoryHint && i.showHistoryHint() && !this.placeholder.endsWith(s) && !this.placeholder.endsWith(n) && this.history.getHistory().length) {
                    const o = this.placeholder.endsWith(")") ? s : n,
                        a = this.placeholder + o;
                    i.showPlaceholderOnFocus && !ks(this.input) ? this.placeholder = a : this.setPlaceHolder(a)
                }
            };
            this.observer = new MutationObserver((o, a) => {
                o.forEach(c => {
                    c.target.textContent || r()
                })
            }), this.observer.observe(this.input, {
                attributeFilter: ["class"]
            }), this.onfocus(this.input, () => r()), this.onblur(this.input, () => {
                const o = a => {
                    if (this.placeholder.endsWith(a)) {
                        const c = this.placeholder.slice(0, this.placeholder.length - a.length);
                        return i.showPlaceholderOnFocus ? this.placeholder = c : this.setPlaceHolder(c), !0
                    } else return !1
                };
                o(n) || o(s)
            })
        }
        dispose() {
            super.dispose(), this.observer && (this.observer.disconnect(), this.observer = void 0)
        }
        addToHistory(e) {
            this.value && (e || this.value !== this.getCurrentValue()) && this.history.add(this.value)
        }
        prependHistory(e) {
            const t = this.getHistory();
            this.clearHistory(), e.forEach(i => {
                this.history.add(i)
            }), t.forEach(i => {
                this.history.add(i)
            })
        }
        getHistory() {
            return this.history.getHistory()
        }
        isAtFirstInHistory() {
            return this.history.isFirst()
        }
        isAtLastInHistory() {
            return this.history.isLast()
        }
        isNowhereInHistory() {
            return this.history.isNowhere()
        }
        showNextValue() {
            this.addCurrentToHistoryOnNavigate && !this.history.has(this.value) && this.addToHistory();
            let e = this.getNextValue();
            e && (e = e === this.value ? this.getNextValue() : e), this.value = e ?? "", Eh(this.value ? this.value : V(24, null))
        }
        showPreviousValue() {
            this.addCurrentToHistoryOnNavigate && !this.history.has(this.value) && this.addToHistory();
            let e = this.getPreviousValue();
            e && (e = e === this.value ? this.getPreviousValue() : e), e && (this.value = e, Eh(this.value))
        }
        clearHistory() {
            this.history.clear()
        }
        setPlaceHolder(e) {
            super.setPlaceHolder(e), this.setTooltip(e)
        }
        onBlur() {
            super.onBlur(), this._onDidBlur.fire()
        }
        onFocus() {
            super.onFocus(), this._onDidFocus.fire()
        }
        getCurrentValue() {
            let e = this.history.current();
            return e || (e = this.history.last(), this.history.next()), e
        }
        getPreviousValue() {
            return this.history.previous() || this.history.first()
        }
        getNextValue() {
            return this.history.next()
        }
    },
    T2 = V(9, null),
    Td = class extends fi {
        constructor(e, t, i) {
            super(), this.fixFocusOnOptionClickEnabled = !0, this.imeSessionInProgress = !1, this.additionalTogglesDisposables = this._register(new Al), this.additionalToggles = [], this._onDidOptionChange = this._register(new L), this.onDidOptionChange = this._onDidOptionChange.event, this._onKeyDown = this._register(new L), this.onKeyDown = this._onKeyDown.event, this._onMouseDown = this._register(new L), this.onMouseDown = this._onMouseDown.event, this._onInput = this._register(new L), this.onInput = this._onInput.event, this._onKeyUp = this._register(new L), this.onKeyUp = this._onKeyUp.event, this._onCaseSensitiveKeyDown = this._register(new L), this.onCaseSensitiveKeyDown = this._onCaseSensitiveKeyDown.event, this._onRegexKeyDown = this._register(new L), this.onRegexKeyDown = this._onRegexKeyDown.event, this._lastHighlightFindOptions = 0, this.placeholder = i.placeholder || "", this.validation = i.validation, this.label = i.label || T2, this.showCommonFindToggles = !!i.showCommonFindToggles;
            const s = i.appendCaseSensitiveLabel || "",
                n = i.appendWholeWordsLabel || "",
                r = i.appendRegexLabel || "",
                o = !!i.flexibleHeight,
                a = !!i.flexibleWidth,
                c = i.flexibleMaxHeight;
            this.domNode = document.createElement("div"), this.domNode.classList.add("monaco-findInput"), this.inputBox = this._register(new k2(this.domNode, t, {
                placeholder: this.placeholder || "",
                ariaLabel: this.label || "",
                validationOptions: {
                    validation: this.validation
                },
                showHistoryHint: i.showHistoryHint,
                flexibleHeight: o,
                flexibleWidth: a,
                flexibleMaxHeight: c,
                inputBoxStyles: i.inputBoxStyles,
                history: i.history,
                addCurrentToHistoryOnNavigate: i.addCurrentToHistoryOnNavigate
            }));
            const h = this._register(Io());
            if (this.showCommonFindToggles) {
                this.regex = this._register(new w2({
                    appendTitle: r,
                    isChecked: !1,
                    hoverDelegate: h,
                    ...i.toggleStyles
                })), this._register(this.regex.onChange(u => {
                    this._onDidOptionChange.fire(u), !u && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate()
                })), this._register(this.regex.onKeyDown(u => {
                    this._onRegexKeyDown.fire(u)
                })), this.wholeWords = this._register(new _2({
                    appendTitle: n,
                    isChecked: !1,
                    hoverDelegate: h,
                    ...i.toggleStyles
                })), this._register(this.wholeWords.onChange(u => {
                    this._onDidOptionChange.fire(u), !u && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate()
                })), this.caseSensitive = this._register(new b2({
                    appendTitle: s,
                    isChecked: !1,
                    hoverDelegate: h,
                    ...i.toggleStyles
                })), this._register(this.caseSensitive.onChange(u => {
                    this._onDidOptionChange.fire(u), !u && this.fixFocusOnOptionClickEnabled && this.inputBox.focus(), this.validate()
                })), this._register(this.caseSensitive.onKeyDown(u => {
                    this._onCaseSensitiveKeyDown.fire(u)
                }));
                const d = [this.caseSensitive.domNode, this.wholeWords.domNode, this.regex.domNode];
                this.onkeydown(this.domNode, u => {
                    if (u.equals(15) || u.equals(17) || u.equals(9)) {
                        const f = d.indexOf(this.domNode.ownerDocument.activeElement);
                        if (f >= 0) {
                            let p = -1;
                            u.equals(17) ? p = (f + 1) % d.length : u.equals(15) && (f === 0 ? p = d.length - 1 : p = f - 1), u.equals(9) ? (d[f].blur(), this.inputBox.focus()) : p >= 0 && d[p].focus(), fe.stop(u, !0)
                        }
                    }
                })
            }
            this.controls = document.createElement("div"), this.controls.className = "controls", this.controls.style.display = this.showCommonFindToggles ? "" : "none", this.caseSensitive && this.controls.append(this.caseSensitive.domNode), this.wholeWords && this.controls.appendChild(this.wholeWords.domNode), this.regex && this.controls.appendChild(this.regex.domNode), this.setAdditionalToggles(i?.additionalToggles), this.controls && this.domNode.appendChild(this.controls), e?.appendChild(this.domNode), this._register(O(this.inputBox.inputElement, "compositionstart", d => {
                this.imeSessionInProgress = !0
            })), this._register(O(this.inputBox.inputElement, "compositionend", d => {
                this.imeSessionInProgress = !1, this._onInput.fire()
            })), this.onkeydown(this.inputBox.inputElement, d => this._onKeyDown.fire(d)), this.onkeyup(this.inputBox.inputElement, d => this._onKeyUp.fire(d)), this.oninput(this.inputBox.inputElement, d => this._onInput.fire()), this.onmousedown(this.inputBox.inputElement, d => this._onMouseDown.fire(d))
        }
        get isImeSessionInProgress() {
            return this.imeSessionInProgress
        }
        get onDidChange() {
            return this.inputBox.onDidChange
        }
        layout(e) {
            this.inputBox.layout(), this.updateInputBoxPadding(e.collapsedFindWidget)
        }
        enable() {
            this.domNode.classList.remove("disabled"), this.inputBox.enable(), this.regex?.enable(), this.wholeWords?.enable(), this.caseSensitive?.enable();
            for (const e of this.additionalToggles) e.enable()
        }
        disable() {
            this.domNode.classList.add("disabled"), this.inputBox.disable(), this.regex?.disable(), this.wholeWords?.disable(), this.caseSensitive?.disable();
            for (const e of this.additionalToggles) e.disable()
        }
        setFocusInputOnOptionClick(e) {
            this.fixFocusOnOptionClickEnabled = e
        }
        setEnabled(e) {
            e ? this.enable() : this.disable()
        }
        setAdditionalToggles(e) {
            for (const t of this.additionalToggles) t.domNode.remove();
            this.additionalToggles = [], this.additionalTogglesDisposables.value = new Y;
            for (const t of e ?? []) this.additionalTogglesDisposables.value.add(t), this.controls.appendChild(t.domNode), this.additionalTogglesDisposables.value.add(t.onChange(i => {
                this._onDidOptionChange.fire(i), !i && this.fixFocusOnOptionClickEnabled && this.inputBox.focus()
            })), this.additionalToggles.push(t);
            this.additionalToggles.length > 0 && (this.controls.style.display = ""), this.updateInputBoxPadding()
        }
        updateInputBoxPadding(e = !1) {
            e ? this.inputBox.paddingRight = 0 : this.inputBox.paddingRight = (this.caseSensitive?.width() ?? 0) + (this.wholeWords?.width() ?? 0) + (this.regex?.width() ?? 0) + this.additionalToggles.reduce((t, i) => t + i.width(), 0)
        }
        clear() {
            this.clearValidation(), this.setValue(""), this.focus()
        }
        getValue() {
            return this.inputBox.value
        }
        setValue(e) {
            this.inputBox.value !== e && (this.inputBox.value = e)
        }
        onSearchSubmit() {
            this.inputBox.addToHistory()
        }
        select() {
            this.inputBox.select()
        }
        focus() {
            this.inputBox.focus()
        }
        getCaseSensitive() {
            return this.caseSensitive?.checked ?? !1
        }
        setCaseSensitive(e) {
            this.caseSensitive && (this.caseSensitive.checked = e)
        }
        getWholeWords() {
            return this.wholeWords?.checked ?? !1
        }
        setWholeWords(e) {
            this.wholeWords && (this.wholeWords.checked = e)
        }
        getRegex() {
            return this.regex?.checked ?? !1
        }
        setRegex(e) {
            this.regex && (this.regex.checked = e, this.validate())
        }
        focusOnCaseSensitive() {
            this.caseSensitive?.focus()
        }
        focusOnRegex() {
            this.regex?.focus()
        }
        highlightFindOptions() {
            this.domNode.classList.remove("highlight-" + this._lastHighlightFindOptions), this._lastHighlightFindOptions = 1 - this._lastHighlightFindOptions, this.domNode.classList.add("highlight-" + this._lastHighlightFindOptions)
        }
        validate() {
            this.inputBox.validate()
        }
        showMessage(e) {
            this.inputBox.showMessage(e)
        }
        clearMessage() {
            this.inputBox.hideMessage()
        }
        clearValidation() {
            this.inputBox.hideMessage()
        }
    };
Td.OPTION_CHANGE = "optionChange";
var Lt = (e => (e[e.Expanded = 0] = "Expanded", e[e.Collapsed = 1] = "Collapsed", e[e.PreserveOrExpanded = 2] = "PreserveOrExpanded", e[e.PreserveOrCollapsed = 3] = "PreserveOrCollapsed", e))(Lt || {}),
    Zi = (e => (e[e.Unknown = 0] = "Unknown", e[e.Twistie = 1] = "Twistie", e[e.Element = 2] = "Element", e[e.Filter = 3] = "Filter", e))(Zi || {}),
    nt = class extends Error {
        constructor(e, t) {
            super(`TreeError [${e}] ${t}`)
        }
    },
    Yt = class {
        constructor(e, t, i, s) {
            this.originalStart = e, this.originalLength = t, this.modifiedStart = i, this.modifiedLength = s
        }
        getOriginalEnd() {
            return this.originalStart + this.originalLength
        }
        getModifiedEnd() {
            return this.modifiedStart + this.modifiedLength
        }
    },
    Qi = class {
        static Assert(e, t) {
            if (!e) throw new Error(t)
        }
    },
    Ji = class {
        static Copy(e, t, i, s, n) {
            for (let r = 0; r < n; r++) i[s + r] = e[t + r]
        }
        static Copy2(e, t, i, s, n) {
            for (let r = 0; r < n; r++) i[s + r] = e[t + r]
        }
    },
    xd = class {
        constructor() {
            this.m_changes = [], this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824, this.m_originalCount = 0, this.m_modifiedCount = 0
        }
        MarkNextChange() {
            (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new Yt(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = 1073741824, this.m_modifiedStart = 1073741824
        }
        AddOriginalElement(e, t) {
            this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++
        }
        AddModifiedElement(e, t) {
            this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++
        }
        getChanges() {
            return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes
        }
        getReverseChanges() {
            return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes
        }
    },
    x2 = class rs {
        constructor(t, i, s = null) {
            this.ContinueProcessingPredicate = s, this._originalSequence = t, this._modifiedSequence = i;
            const [n, r, o] = rs._getElements(t), [a, c, h] = rs._getElements(i);
            this._hasStrings = o && h, this._originalStringElements = n, this._originalElementsOrHash = r, this._modifiedStringElements = a, this._modifiedElementsOrHash = c, this.m_forwardHistory = [], this.m_reverseHistory = []
        }
        static _isStringArray(t) {
            return t.length > 0 && typeof t[0] == "string"
        }
        static _getElements(t) {
            const i = t.getElements();
            if (rs._isStringArray(i)) {
                const s = new Int32Array(i.length);
                for (let n = 0, r = i.length; n < r; n++) s[n] = co(i[n], 0);
                return [i, s, !0]
            }
            return i instanceof Int32Array ? [
                [], i, !1
            ] : [
                [], new Int32Array(i), !1
            ]
        }
        ElementsAreEqual(t, i) {
            return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[i] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[i] : !0
        }
        ElementsAreStrictEqual(t, i) {
            if (!this.ElementsAreEqual(t, i)) return !1;
            const s = rs._getStrictElement(this._originalSequence, t),
                n = rs._getStrictElement(this._modifiedSequence, i);
            return s === n
        }
        static _getStrictElement(t, i) {
            return typeof t.getStrictElement == "function" ? t.getStrictElement(i) : null
        }
        OriginalElementsAreEqual(t, i) {
            return this._originalElementsOrHash[t] !== this._originalElementsOrHash[i] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[i] : !0
        }
        ModifiedElementsAreEqual(t, i) {
            return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[i] ? !1 : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[i] : !0
        }
        ComputeDiff(t) {
            return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t)
        }
        _ComputeDiff(t, i, s, n, r) {
            const o = [!1];
            let a = this.ComputeDiffRecursive(t, i, s, n, o);
            return r && (a = this.PrettifyChanges(a)), {
                quitEarly: o[0],
                changes: a
            }
        }
        ComputeDiffRecursive(t, i, s, n, r) {
            for (r[0] = !1; t <= i && s <= n && this.ElementsAreEqual(t, s);) t++, s++;
            for (; i >= t && n >= s && this.ElementsAreEqual(i, n);) i--, n--;
            if (t > i || s > n) {
                let u;
                return s <= n ? (Qi.Assert(t === i + 1, "originalStart should only be one more than originalEnd"), u = [new Yt(t, 0, s, n - s + 1)]) : t <= i ? (Qi.Assert(s === n + 1, "modifiedStart should only be one more than modifiedEnd"), u = [new Yt(t, i - t + 1, s, 0)]) : (Qi.Assert(t === i + 1, "originalStart should only be one more than originalEnd"), Qi.Assert(s === n + 1, "modifiedStart should only be one more than modifiedEnd"), u = []), u
            }
            const o = [0],
                a = [0],
                c = this.ComputeRecursionPoint(t, i, s, n, o, a, r),
                h = o[0],
                d = a[0];
            if (c !== null) return c;
            if (!r[0]) {
                const u = this.ComputeDiffRecursive(t, h, s, d, r);
                let f = [];
                return r[0] ? f = [new Yt(h + 1, i - (h + 1) + 1, d + 1, n - (d + 1) + 1)] : f = this.ComputeDiffRecursive(h + 1, i, d + 1, n, r), this.ConcatenateChanges(u, f)
            }
            return [new Yt(t, i - t + 1, s, n - s + 1)]
        }
        WALKTRACE(t, i, s, n, r, o, a, c, h, d, u, f, p, g, _, y, w, C) {
            let D = null,
                E = null,
                b = new xd,
                S = i,
                I = s,
                P = p[0] - y[0] - n,
                j = -1073741824,
                ue = this.m_forwardHistory.length - 1;
            do {
                const K = P + t;
                K === S || K < I && h[K - 1] < h[K + 1] ? (u = h[K + 1], g = u - P - n, u < j && b.MarkNextChange(), j = u, b.AddModifiedElement(u + 1, g), P = K + 1 - t) : (u = h[K - 1] + 1, g = u - P - n, u < j && b.MarkNextChange(), j = u - 1, b.AddOriginalElement(u, g + 1), P = K - 1 - t), ue >= 0 && (h = this.m_forwardHistory[ue], t = h[0], S = 1, I = h.length - 1)
            } while (--ue >= -1);
            if (D = b.getReverseChanges(), C[0]) {
                let K = p[0] + 1,
                    $ = y[0] + 1;
                if (D !== null && D.length > 0) {
                    const Oe = D[D.length - 1];
                    K = Math.max(K, Oe.getOriginalEnd()), $ = Math.max($, Oe.getModifiedEnd())
                }
                E = [new Yt(K, f - K + 1, $, _ - $ + 1)]
            } else {
                b = new xd, S = o, I = a, P = p[0] - y[0] - c, j = 1073741824, ue = w ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
                do {
                    const K = P + r;
                    K === S || K < I && d[K - 1] >= d[K + 1] ? (u = d[K + 1] - 1, g = u - P - c, u > j && b.MarkNextChange(), j = u + 1, b.AddOriginalElement(u + 1, g + 1), P = K + 1 - r) : (u = d[K - 1], g = u - P - c, u > j && b.MarkNextChange(), j = u, b.AddModifiedElement(u + 1, g + 1), P = K - 1 - r), ue >= 0 && (d = this.m_reverseHistory[ue], r = d[0], S = 1, I = d.length - 1)
                } while (--ue >= -1);
                E = b.getChanges()
            }
            return this.ConcatenateChanges(D, E)
        }
        ComputeRecursionPoint(t, i, s, n, r, o, a) {
            let c = 0,
                h = 0,
                d = 0,
                u = 0,
                f = 0,
                p = 0;
            t--, s--, r[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
            const g = i - t + (n - s),
                _ = g + 1,
                y = new Int32Array(_),
                w = new Int32Array(_),
                C = n - s,
                D = i - t,
                E = t - s,
                b = i - n,
                I = (D - C) % 2 === 0;
            y[C] = t, w[D] = i, a[0] = !1;
            for (let P = 1; P <= g / 2 + 1; P++) {
                let j = 0,
                    ue = 0;
                d = this.ClipDiagonalBound(C - P, P, C, _), u = this.ClipDiagonalBound(C + P, P, C, _);
                for (let $ = d; $ <= u; $ += 2) {
                    $ === d || $ < u && y[$ - 1] < y[$ + 1] ? c = y[$ + 1] : c = y[$ - 1] + 1, h = c - ($ - C) - E;
                    const Oe = c;
                    for (; c < i && h < n && this.ElementsAreEqual(c + 1, h + 1);) c++, h++;
                    if (y[$] = c, c + h > j + ue && (j = c, ue = h), !I && Math.abs($ - D) <= P - 1 && c >= w[$]) return r[0] = c, o[0] = h, Oe <= w[$] && P <= 1448 ? this.WALKTRACE(C, d, u, E, D, f, p, b, y, w, c, i, r, h, n, o, I, a) : null
                }
                const K = (j - t + (ue - s) - P) / 2;
                if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(j, K)) return a[0] = !0, r[0] = j, o[0] = ue, K > 0 && P <= 1448 ? this.WALKTRACE(C, d, u, E, D, f, p, b, y, w, c, i, r, h, n, o, I, a) : (t++, s++, [new Yt(t, i - t + 1, s, n - s + 1)]);
                f = this.ClipDiagonalBound(D - P, P, D, _), p = this.ClipDiagonalBound(D + P, P, D, _);
                for (let $ = f; $ <= p; $ += 2) {
                    $ === f || $ < p && w[$ - 1] >= w[$ + 1] ? c = w[$ + 1] - 1 : c = w[$ - 1], h = c - ($ - D) - b;
                    const Oe = c;
                    for (; c > t && h > s && this.ElementsAreEqual(c, h);) c--, h--;
                    if (w[$] = c, I && Math.abs($ - C) <= P && c <= y[$]) return r[0] = c, o[0] = h, Oe >= y[$] && P <= 1448 ? this.WALKTRACE(C, d, u, E, D, f, p, b, y, w, c, i, r, h, n, o, I, a) : null
                }
                if (P <= 1447) {
                    let $ = new Int32Array(u - d + 2);
                    $[0] = C - d + 1, Ji.Copy2(y, d, $, 1, u - d + 1), this.m_forwardHistory.push($), $ = new Int32Array(p - f + 2), $[0] = D - f + 1, Ji.Copy2(w, f, $, 1, p - f + 1), this.m_reverseHistory.push($)
                }
            }
            return this.WALKTRACE(C, d, u, E, D, f, p, b, y, w, c, i, r, h, n, o, I, a)
        }
        PrettifyChanges(t) {
            for (let i = 0; i < t.length; i++) {
                const s = t[i],
                    n = i < t.length - 1 ? t[i + 1].originalStart : this._originalElementsOrHash.length,
                    r = i < t.length - 1 ? t[i + 1].modifiedStart : this._modifiedElementsOrHash.length,
                    o = s.originalLength > 0,
                    a = s.modifiedLength > 0;
                for (; s.originalStart + s.originalLength < n && s.modifiedStart + s.modifiedLength < r && (!o || this.OriginalElementsAreEqual(s.originalStart, s.originalStart + s.originalLength)) && (!a || this.ModifiedElementsAreEqual(s.modifiedStart, s.modifiedStart + s.modifiedLength));) {
                    const h = this.ElementsAreStrictEqual(s.originalStart, s.modifiedStart);
                    if (this.ElementsAreStrictEqual(s.originalStart + s.originalLength, s.modifiedStart + s.modifiedLength) && !h) break;
                    s.originalStart++, s.modifiedStart++
                }
                const c = [null];
                if (i < t.length - 1 && this.ChangesOverlap(t[i], t[i + 1], c)) {
                    t[i] = c[0], t.splice(i + 1, 1), i--;
                    continue
                }
            }
            for (let i = t.length - 1; i >= 0; i--) {
                const s = t[i];
                let n = 0,
                    r = 0;
                if (i > 0) {
                    const u = t[i - 1];
                    n = u.originalStart + u.originalLength, r = u.modifiedStart + u.modifiedLength
                }
                const o = s.originalLength > 0,
                    a = s.modifiedLength > 0;
                let c = 0,
                    h = this._boundaryScore(s.originalStart, s.originalLength, s.modifiedStart, s.modifiedLength);
                for (let u = 1;; u++) {
                    const f = s.originalStart - u,
                        p = s.modifiedStart - u;
                    if (f < n || p < r || o && !this.OriginalElementsAreEqual(f, f + s.originalLength) || a && !this.ModifiedElementsAreEqual(p, p + s.modifiedLength)) break;
                    const _ = (f === n && p === r ? 5 : 0) + this._boundaryScore(f, s.originalLength, p, s.modifiedLength);
                    _ > h && (h = _, c = u)
                }
                s.originalStart -= c, s.modifiedStart -= c;
                const d = [null];
                if (i > 0 && this.ChangesOverlap(t[i - 1], t[i], d)) {
                    t[i - 1] = d[0], t.splice(i, 1), i++;
                    continue
                }
            }
            if (this._hasStrings)
                for (let i = 1, s = t.length; i < s; i++) {
                    const n = t[i - 1],
                        r = t[i],
                        o = r.originalStart - n.originalStart - n.originalLength,
                        a = n.originalStart,
                        c = r.originalStart + r.originalLength,
                        h = c - a,
                        d = n.modifiedStart,
                        u = r.modifiedStart + r.modifiedLength,
                        f = u - d;
                    if (o < 5 && h < 20 && f < 20) {
                        const p = this._findBetterContiguousSequence(a, h, d, f, o);
                        if (p) {
                            const [g, _] = p;
                            (g !== n.originalStart + n.originalLength || _ !== n.modifiedStart + n.modifiedLength) && (n.originalLength = g - n.originalStart, n.modifiedLength = _ - n.modifiedStart, r.originalStart = g + o, r.modifiedStart = _ + o, r.originalLength = c - r.originalStart, r.modifiedLength = u - r.modifiedStart)
                        }
                    }
                }
            return t
        }
        _findBetterContiguousSequence(t, i, s, n, r) {
            if (i < r || n < r) return null;
            const o = t + i - r + 1,
                a = s + n - r + 1;
            let c = 0,
                h = 0,
                d = 0;
            for (let u = t; u < o; u++)
                for (let f = s; f < a; f++) {
                    const p = this._contiguousSequenceScore(u, f, r);
                    p > 0 && p > c && (c = p, h = u, d = f)
                }
            return c > 0 ? [h, d] : null
        }
        _contiguousSequenceScore(t, i, s) {
            let n = 0;
            for (let r = 0; r < s; r++) {
                if (!this.ElementsAreEqual(t + r, i + r)) return 0;
                n += this._originalStringElements[t + r].length
            }
            return n
        }
        _OriginalIsBoundary(t) {
            return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t])
        }
        _OriginalRegionIsBoundary(t, i) {
            if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1)) return !0;
            if (i > 0) {
                const s = t + i;
                if (this._OriginalIsBoundary(s - 1) || this._OriginalIsBoundary(s)) return !0
            }
            return !1
        }
        _ModifiedIsBoundary(t) {
            return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t])
        }
        _ModifiedRegionIsBoundary(t, i) {
            if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1)) return !0;
            if (i > 0) {
                const s = t + i;
                if (this._ModifiedIsBoundary(s - 1) || this._ModifiedIsBoundary(s)) return !0
            }
            return !1
        }
        _boundaryScore(t, i, s, n) {
            const r = this._OriginalRegionIsBoundary(t, i) ? 1 : 0,
                o = this._ModifiedRegionIsBoundary(s, n) ? 1 : 0;
            return r + o
        }
        ConcatenateChanges(t, i) {
            const s = [];
            if (t.length === 0 || i.length === 0) return i.length > 0 ? i : t;
            if (this.ChangesOverlap(t[t.length - 1], i[0], s)) {
                const n = new Array(t.length + i.length - 1);
                return Ji.Copy(t, 0, n, 0, t.length - 1), n[t.length - 1] = s[0], Ji.Copy(i, 1, n, t.length, i.length - 1), n
            } else {
                const n = new Array(t.length + i.length);
                return Ji.Copy(t, 0, n, 0, t.length), Ji.Copy(i, 0, n, t.length, i.length), n
            }
        }
        ChangesOverlap(t, i, s) {
            if (Qi.Assert(t.originalStart <= i.originalStart, "Left change is not less than or equal to right change"), Qi.Assert(t.modifiedStart <= i.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= i.originalStart || t.modifiedStart + t.modifiedLength >= i.modifiedStart) {
                const n = t.originalStart;
                let r = t.originalLength;
                const o = t.modifiedStart;
                let a = t.modifiedLength;
                return t.originalStart + t.originalLength >= i.originalStart && (r = i.originalStart + i.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= i.modifiedStart && (a = i.modifiedStart + i.modifiedLength - t.modifiedStart), s[0] = new Yt(n, r, o, a), !0
            } else return s[0] = null, !1
        }
        ClipDiagonalBound(t, i, s, n) {
            if (t >= 0 && t < n) return t;
            const r = s,
                o = n - s - 1,
                a = i % 2 === 0;
            if (t < 0) {
                const c = r % 2 === 0;
                return a === c ? 0 : 1
            } else {
                const c = o % 2 === 0;
                return a === c ? n - 1 : n - 2
            }
        }
    },
    kv = new Uint32Array(65536);

function Ad(e) {
    return typeof e == "object" && "visibility" in e && "data" in e
}

function ua(e) {
    switch (e) {
        case !0:
            return 1;
        case !1:
            return 0;
        default:
            return e
    }
}

function fa(e) {
    return typeof e.collapsible == "boolean"
}
var A2 = class {
        constructor(e, t, i = {}) {
            this.user = e, this.rootRef = [], this.eventBufferer = new Lr, this._onDidSpliceModel = new L, this.onDidSpliceModel = this._onDidSpliceModel.event, this._onDidSpliceRenderedNodes = new L, this.onDidSpliceRenderedNodes = this._onDidSpliceRenderedNodes.event, this._onDidChangeCollapseState = new L, this.onDidChangeCollapseState = this.eventBufferer.wrapEvent(this._onDidChangeCollapseState.event), this._onDidChangeRenderNodeCount = new L, this.onDidChangeRenderNodeCount = this.eventBufferer.wrapEvent(this._onDidChangeRenderNodeCount.event), this.refilterDelayer = new Zr(gc), this.collapseByDefault = typeof i.collapseByDefault > "u" ? !1 : i.collapseByDefault, this.allowNonCollapsibleParents = i.allowNonCollapsibleParents ?? !1, this.filter = i.filter, this.autoExpandSingleChildren = typeof i.autoExpandSingleChildren > "u" ? !1 : i.autoExpandSingleChildren, this.root = {
                parent: void 0,
                element: t,
                children: [],
                depth: 0,
                visibleChildrenCount: 0,
                visibleChildIndex: -1,
                collapsible: !1,
                collapsed: !1,
                renderNodeCount: 0,
                visibility: 1,
                visible: !0,
                filterData: void 0
            }
        }
        splice(e, t, i = Ie.empty(), s = {}) {
            if (e.length === 0) throw new nt(this.user, "Invalid tree location");
            s.diffIdentityProvider ? this.spliceSmart(s.diffIdentityProvider, e, t, i, s) : this.spliceSimple(e, t, i, s)
        }
        spliceSmart(e, t, i, s = Ie.empty(), n, r = n.diffDepth ?? 0) {
            const {
                parentNode: o
            } = this.getParentNodeWithListIndex(t);
            if (!o.lastDiffIds) return this.spliceSimple(t, i, s, n);
            const a = [...s],
                c = t[t.length - 1],
                h = new x2({
                    getElements: () => o.lastDiffIds
                }, {
                    getElements: () => [...o.children.slice(0, c), ...a, ...o.children.slice(c + i)].map(g => e.getId(g.element).toString())
                }).ComputeDiff(!1);
            if (h.quitEarly) return o.lastDiffIds = void 0, this.spliceSimple(t, i, a, n);
            const d = t.slice(0, -1),
                u = (g, _, y) => {
                    if (r > 0)
                        for (let w = 0; w < y; w++) g--, _--, this.spliceSmart(e, [...d, g, 0], Number.MAX_SAFE_INTEGER, a[_].children, n, r - 1)
                };
            let f = Math.min(o.children.length, c + i),
                p = a.length;
            for (const g of h.changes.sort((_, y) => y.originalStart - _.originalStart)) u(f, p, f - (g.originalStart + g.originalLength)), f = g.originalStart, p = g.modifiedStart - c, this.spliceSimple([...d, f], g.originalLength, Ie.slice(a, p, p + g.modifiedLength), n);
            u(f, p, f)
        }
        spliceSimple(e, t, i = Ie.empty(), {
            onDidCreateNode: s,
            onDidDeleteNode: n,
            diffIdentityProvider: r
        }) {
            const {
                parentNode: o,
                listIndex: a,
                revealed: c,
                visible: h
            } = this.getParentNodeWithListIndex(e), d = [], u = Ie.map(i, E => this.createTreeNode(E, o, o.visible ? 1 : 0, c, d, s)), f = e[e.length - 1];
            let p = 0;
            for (let E = f; E >= 0 && E < o.children.length; E--) {
                const b = o.children[E];
                if (b.visible) {
                    p = b.visibleChildIndex;
                    break
                }
            }
            const g = [];
            let _ = 0,
                y = 0;
            for (const E of u) g.push(E), y += E.renderNodeCount, E.visible && (E.visibleChildIndex = p + _++);
            const w = Dr(o.children, f, t, g);
            r ? o.lastDiffIds ? Dr(o.lastDiffIds, f, t, g.map(E => r.getId(E.element).toString())) : o.lastDiffIds = o.children.map(E => r.getId(E.element).toString()) : o.lastDiffIds = void 0;
            let C = 0;
            for (const E of w) E.visible && C++;
            if (C !== 0)
                for (let E = f + g.length; E < o.children.length; E++) {
                    const b = o.children[E];
                    b.visible && (b.visibleChildIndex -= C)
                }
            if (o.visibleChildrenCount += _ - C, w.length > 0 && n) {
                const E = b => {
                    n(b), b.children.forEach(E)
                };
                w.forEach(E)
            }
            if (c && h) {
                const E = w.reduce((b, S) => b + (S.visible ? S.renderNodeCount : 0), 0);
                this._updateAncestorsRenderNodeCount(o, y - E), this._onDidSpliceRenderedNodes.fire({
                    start: a,
                    deleteCount: E,
                    elements: d
                })
            }
            this._onDidSpliceModel.fire({
                insertedNodes: g,
                deletedNodes: w
            });
            let D = o;
            for (; D;) {
                if (D.visibility === 2) {
                    this.refilterDelayer.trigger(() => this.refilter());
                    break
                }
                D = D.parent
            }
        }
        rerender(e) {
            if (e.length === 0) throw new nt(this.user, "Invalid tree location");
            const {
                node: t,
                listIndex: i,
                revealed: s
            } = this.getTreeNodeWithListIndex(e);
            t.visible && s && this._onDidSpliceRenderedNodes.fire({
                start: i,
                deleteCount: 1,
                elements: [t]
            })
        }
        has(e) {
            return this.hasTreeNode(e)
        }
        getListIndex(e) {
            const {
                listIndex: t,
                visible: i,
                revealed: s
            } = this.getTreeNodeWithListIndex(e);
            return i && s ? t : -1
        }
        getListRenderCount(e) {
            return this.getTreeNode(e).renderNodeCount
        }
        isCollapsible(e) {
            return this.getTreeNode(e).collapsible
        }
        setCollapsible(e, t) {
            const i = this.getTreeNode(e);
            typeof t > "u" && (t = !i.collapsible);
            const s = {
                collapsible: t
            };
            return this.eventBufferer.bufferEvents(() => this._setCollapseState(e, s))
        }
        isCollapsed(e) {
            return this.getTreeNode(e).collapsed
        }
        setCollapsed(e, t, i) {
            const s = this.getTreeNode(e);
            typeof t > "u" && (t = !s.collapsed);
            const n = {
                collapsed: t,
                recursive: i || !1
            };
            return this.eventBufferer.bufferEvents(() => this._setCollapseState(e, n))
        }
        _setCollapseState(e, t) {
            const {
                node: i,
                listIndex: s,
                revealed: n
            } = this.getTreeNodeWithListIndex(e), r = this._setListNodeCollapseState(i, s, n, t);
            if (i !== this.root && this.autoExpandSingleChildren && r && !fa(t) && i.collapsible && !i.collapsed && !t.recursive) {
                let o = -1;
                for (let a = 0; a < i.children.length; a++)
                    if (i.children[a].visible)
                        if (o > -1) {
                            o = -1;
                            break
                        } else o = a;
                o > -1 && this._setCollapseState([...e, o], t)
            }
            return r
        }
        _setListNodeCollapseState(e, t, i, s) {
            const n = this._setNodeCollapseState(e, s, !1);
            if (!i || !e.visible || !n) return n;
            const r = e.renderNodeCount,
                o = this.updateNodeAfterCollapseChange(e),
                a = r - (t === -1 ? 0 : 1);
            return this._onDidSpliceRenderedNodes.fire({
                start: t + 1,
                deleteCount: a,
                elements: o.slice(1)
            }), n
        }
        _setNodeCollapseState(e, t, i) {
            let s;
            if (e === this.root ? s = !1 : (fa(t) ? (s = e.collapsible !== t.collapsible, e.collapsible = t.collapsible) : e.collapsible ? (s = e.collapsed !== t.collapsed, e.collapsed = t.collapsed) : s = !1, s && this._onDidChangeCollapseState.fire({
                    node: e,
                    deep: i
                })), !fa(t) && t.recursive)
                for (const n of e.children) s = this._setNodeCollapseState(n, t, !0) || s;
            return s
        }
        expandTo(e) {
            this.eventBufferer.bufferEvents(() => {
                let t = this.getTreeNode(e);
                for (; t.parent;) t = t.parent, e = e.slice(0, e.length - 1), t.collapsed && this._setCollapseState(e, {
                    collapsed: !1,
                    recursive: !1
                })
            })
        }
        refilter() {
            const e = this.root.renderNodeCount,
                t = this.updateNodeAfterFilterChange(this.root);
            this._onDidSpliceRenderedNodes.fire({
                start: 0,
                deleteCount: e,
                elements: t
            }), this.refilterDelayer.cancel()
        }
        createTreeNode(e, t, i, s, n, r) {
            const o = {
                    parent: t,
                    element: e.element,
                    children: [],
                    depth: t.depth + 1,
                    visibleChildrenCount: 0,
                    visibleChildIndex: -1,
                    collapsible: typeof e.collapsible == "boolean" ? e.collapsible : typeof e.collapsed < "u",
                    collapsed: typeof e.collapsed > "u" ? this.collapseByDefault : e.collapsed,
                    renderNodeCount: 1,
                    visibility: 1,
                    visible: !0,
                    filterData: void 0
                },
                a = this._filterNode(o, i);
            o.visibility = a, s && n.push(o);
            const c = e.children || Ie.empty(),
                h = s && a !== 0 && !o.collapsed;
            let d = 0,
                u = 1;
            for (const f of c) {
                const p = this.createTreeNode(f, o, a, h, n, r);
                o.children.push(p), u += p.renderNodeCount, p.visible && (p.visibleChildIndex = d++)
            }
            return this.allowNonCollapsibleParents || (o.collapsible = o.collapsible || o.children.length > 0), o.visibleChildrenCount = d, o.visible = a === 2 ? d > 0 : a === 1, o.visible ? o.collapsed || (o.renderNodeCount = u) : (o.renderNodeCount = 0, s && n.pop()), r?.(o), o
        }
        updateNodeAfterCollapseChange(e) {
            const t = e.renderNodeCount,
                i = [];
            return this._updateNodeAfterCollapseChange(e, i), this._updateAncestorsRenderNodeCount(e.parent, i.length - t), i
        }
        _updateNodeAfterCollapseChange(e, t) {
            if (e.visible === !1) return 0;
            if (t.push(e), e.renderNodeCount = 1, !e.collapsed)
                for (const i of e.children) e.renderNodeCount += this._updateNodeAfterCollapseChange(i, t);
            return this._onDidChangeRenderNodeCount.fire(e), e.renderNodeCount
        }
        updateNodeAfterFilterChange(e) {
            const t = e.renderNodeCount,
                i = [];
            return this._updateNodeAfterFilterChange(e, e.visible ? 1 : 0, i), this._updateAncestorsRenderNodeCount(e.parent, i.length - t), i
        }
        _updateNodeAfterFilterChange(e, t, i, s = !0) {
            let n;
            if (e !== this.root) {
                if (n = this._filterNode(e, t), n === 0) return e.visible = !1, e.renderNodeCount = 0, !1;
                s && i.push(e)
            }
            const r = i.length;
            e.renderNodeCount = e === this.root ? 0 : 1;
            let o = !1;
            if (!e.collapsed || n !== 0) {
                let a = 0;
                for (const c of e.children) o = this._updateNodeAfterFilterChange(c, n, i, s && !e.collapsed) || o, c.visible && (c.visibleChildIndex = a++);
                e.visibleChildrenCount = a
            } else e.visibleChildrenCount = 0;
            return e !== this.root && (e.visible = n === 2 ? o : n === 1, e.visibility = n), e.visible ? e.collapsed || (e.renderNodeCount += i.length - r) : (e.renderNodeCount = 0, s && i.pop()), this._onDidChangeRenderNodeCount.fire(e), e.visible
        }
        _updateAncestorsRenderNodeCount(e, t) {
            if (t !== 0)
                for (; e;) e.renderNodeCount += t, this._onDidChangeRenderNodeCount.fire(e), e = e.parent
        }
        _filterNode(e, t) {
            const i = this.filter ? this.filter.filter(e.element, t) : 1;
            return typeof i == "boolean" ? (e.filterData = void 0, i ? 1 : 0) : Ad(i) ? (e.filterData = i.data, ua(i.visibility)) : (e.filterData = void 0, ua(i))
        }
        hasTreeNode(e, t = this.root) {
            if (!e || e.length === 0) return !0;
            const [i, ...s] = e;
            return i < 0 || i > t.children.length ? !1 : this.hasTreeNode(s, t.children[i])
        }
        getTreeNode(e, t = this.root) {
            if (!e || e.length === 0) return t;
            const [i, ...s] = e;
            if (i < 0 || i > t.children.length) throw new nt(this.user, "Invalid tree location");
            return this.getTreeNode(s, t.children[i])
        }
        getTreeNodeWithListIndex(e) {
            if (e.length === 0) return {
                node: this.root,
                listIndex: -1,
                revealed: !0,
                visible: !1
            };
            const {
                parentNode: t,
                listIndex: i,
                revealed: s,
                visible: n
            } = this.getParentNodeWithListIndex(e), r = e[e.length - 1];
            if (r < 0 || r > t.children.length) throw new nt(this.user, "Invalid tree location");
            const o = t.children[r];
            return {
                node: o,
                listIndex: i,
                revealed: s,
                visible: n && o.visible
            }
        }
        getParentNodeWithListIndex(e, t = this.root, i = 0, s = !0, n = !0) {
            const [r, ...o] = e;
            if (r < 0 || r > t.children.length) throw new nt(this.user, "Invalid tree location");
            for (let a = 0; a < r; a++) i += t.children[a].renderNodeCount;
            return s = s && !t.collapsed, n = n && t.visible, o.length === 0 ? {
                parentNode: t,
                listIndex: i,
                revealed: s,
                visible: n
            } : this.getParentNodeWithListIndex(o, t.children[r], i + 1, s, n)
        }
        getNode(e = []) {
            return this.getTreeNode(e)
        }
        getNodeLocation(e) {
            const t = [];
            let i = e;
            for (; i.parent;) t.push(i.parent.children.indexOf(i)), i = i.parent;
            return t.reverse()
        }
        getParentNodeLocation(e) {
            if (e.length !== 0) return e.length === 1 ? [] : Fu(e)[0]
        }
        getFirstElementChild(e) {
            const t = this.getTreeNode(e);
            if (t.children.length !== 0) return t.children[0].element
        }
        getLastElementAncestor(e = []) {
            const t = this.getTreeNode(e);
            if (t.children.length !== 0) return this._getLastElementAncestor(t)
        }
        _getLastElementAncestor(e) {
            return e.children.length === 0 ? e.element : this._getLastElementAncestor(e.children[e.children.length - 1])
        }
    },
    N2 = class extends Go {
        constructor(e) {
            super(e.elements.map(t => t.element)), this.data = e
        }
        set context(e) {
            this.data.context = e
        }
        get context() {
            return this.data.context
        }
    };

function pa(e) {
    return e instanceof Go ? new N2(e) : e
}
var I2 = class {
    constructor(e, t) {
        this.modelProvider = e, this.dnd = t, this.autoExpandDisposable = q.None, this.disposables = new Y
    }
    getDragURI(e) {
        return this.dnd.getDragURI(e.element)
    }
    getDragLabel(e, t) {
        if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e.map(i => i.element), t)
    }
    onDragStart(e, t) {
        this.dnd.onDragStart?.(pa(e), t)
    }
    onDragOver(e, t, i, s, n, r = !0) {
        const o = this.dnd.onDragOver(pa(e), t && t.element, i, s, n),
            a = this.autoExpandNode !== t;
        if (a && (this.autoExpandDisposable.dispose(), this.autoExpandNode = t), typeof t > "u") return o;
        if (a && typeof o != "boolean" && o.autoExpand && (this.autoExpandDisposable = Qr(() => {
                const f = this.modelProvider(),
                    p = f.getNodeLocation(t);
                f.isCollapsed(p) && f.setCollapsed(p, !1), this.autoExpandNode = void 0
            }, 500, this.disposables)), typeof o == "boolean" || !o.accept || typeof o.bubble > "u" || o.feedback) {
            if (!r) {
                const f = typeof o == "boolean" ? o : o.accept,
                    p = typeof o == "boolean" ? void 0 : o.effect;
                return {
                    accept: f,
                    effect: p,
                    feedback: [i]
                }
            }
            return o
        }
        if (o.bubble === 1) {
            const f = this.modelProvider(),
                p = f.getNodeLocation(t),
                g = f.getParentNodeLocation(p),
                _ = f.getNode(g),
                y = g && f.getListIndex(g);
            return this.onDragOver(e, _, y, s, n, !1)
        }
        const c = this.modelProvider(),
            h = c.getNodeLocation(t),
            d = c.getListIndex(h),
            u = c.getListRenderCount(h);
        return {
            ...o,
            feedback: Cr(d, d + u)
        }
    }
    drop(e, t, i, s, n) {
        this.autoExpandDisposable.dispose(), this.autoExpandNode = void 0, this.dnd.drop(pa(e), t && t.element, i, s, n)
    }
    onDragEnd(e) {
        this.dnd.onDragEnd?.(e)
    }
    dispose() {
        this.disposables.dispose(), this.dnd.dispose()
    }
};

function L2(e, t, i) {
    return i && {
        ...i,
        identityProvider: i.identityProvider && {
            getId(s) {
                return i.identityProvider.getId(s.element)
            }
        },
        dnd: i.dnd && t.add(new I2(e, i.dnd)),
        multipleSelectionController: i.multipleSelectionController && {
            isSelectionSingleChangeEvent(s) {
                return i.multipleSelectionController.isSelectionSingleChangeEvent({
                    ...s,
                    element: s.element
                })
            },
            isSelectionRangeChangeEvent(s) {
                return i.multipleSelectionController.isSelectionRangeChangeEvent({
                    ...s,
                    element: s.element
                })
            }
        },
        accessibilityProvider: i.accessibilityProvider && {
            ...i.accessibilityProvider,
            getSetSize(s) {
                const n = e(),
                    r = n.getNodeLocation(s),
                    o = n.getParentNodeLocation(r);
                return n.getNode(o).visibleChildrenCount
            },
            getPosInSet(s) {
                return s.visibleChildIndex + 1
            },
            isChecked: i.accessibilityProvider && i.accessibilityProvider.isChecked ? s => i.accessibilityProvider.isChecked(s.element) : void 0,
            getRole: i.accessibilityProvider && i.accessibilityProvider.getRole ? s => i.accessibilityProvider.getRole(s.element) : () => "treeitem",
            getAriaLabel(s) {
                return i.accessibilityProvider.getAriaLabel(s.element)
            },
            getWidgetAriaLabel() {
                return i.accessibilityProvider.getWidgetAriaLabel()
            },
            getWidgetRole: i.accessibilityProvider && i.accessibilityProvider.getWidgetRole ? () => i.accessibilityProvider.getWidgetRole() : () => "tree",
            getAriaLevel: i.accessibilityProvider && i.accessibilityProvider.getAriaLevel ? s => i.accessibilityProvider.getAriaLevel(s.element) : s => s.depth,
            getActiveDescendantId: i.accessibilityProvider.getActiveDescendantId && (s => i.accessibilityProvider.getActiveDescendantId(s.element))
        },
        keyboardNavigationLabelProvider: i.keyboardNavigationLabelProvider && {
            ...i.keyboardNavigationLabelProvider,
            getKeyboardNavigationLabel(s) {
                return i.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(s.element)
            }
        }
    }
}
var R2 = class {
        constructor(e) {
            this.delegate = e
        }
        getHeight(e) {
            return this.delegate.getHeight(e.element)
        }
        getTemplateId(e) {
            return this.delegate.getTemplateId(e.element)
        }
        hasDynamicHeight(e) {
            return !!this.delegate.hasDynamicHeight && this.delegate.hasDynamicHeight(e.element)
        }
        setDynamicHeight(e, t) {
            this.delegate.setDynamicHeight?.(e.element, t)
        }
    },
    M2 = class hr {
        static lift(t) {
            return t instanceof hr ? t : new hr(t)
        }
        static empty(t = 0) {
            return new hr({
                focus: [],
                selection: [],
                expanded: Object.create(null),
                scrollTop: t
            })
        }
        constructor(t) {
            if (this.focus = new Set(t.focus), this.selection = new Set(t.selection), t.expanded instanceof Array) {
                this.expanded = Object.create(null);
                for (const i of t.expanded) this.expanded[i] = 1
            } else this.expanded = t.expanded;
            this.expanded = t.expanded, this.scrollTop = t.scrollTop
        }
        toJSON() {
            return {
                focus: Array.from(this.focus),
                selection: Array.from(this.selection),
                expanded: this.expanded,
                scrollTop: this.scrollTop
            }
        }
    },
    P2 = class {
        constructor(e, t = []) {
            this._elements = t, this.disposables = new Y, this.onDidChange = A.forEach(e, i => this._elements = i, this.disposables)
        }
        get elements() {
            return this._elements
        }
        dispose() {
            this.disposables.dispose()
        }
    },
    Nd = class Ha {
        constructor(t, i, s, n, r, o = {}) {
            this.renderer = t, this.model = i, this.activeNodes = n, this.renderedIndentGuides = r, this.renderedElements = new Map, this.renderedNodes = new Map, this.indent = Ha.DefaultIndent, this.hideTwistiesOfChildlessElements = !1, this.shouldRenderIndentGuides = !1, this.activeIndentNodes = new Set, this.indentGuidesDisposable = q.None, this.disposables = new Y, this.templateId = t.templateId, this.updateOptions(o), A.map(s, a => a.node)(this.onDidChangeNodeTwistieState, this, this.disposables), t.onDidChangeTwistieState?.(this.onDidChangeTwistieState, this, this.disposables)
        }
        updateOptions(t = {}) {
            if (typeof t.indent < "u") {
                const i = Ln(t.indent, 0, 40);
                if (i !== this.indent) {
                    this.indent = i;
                    for (const [s, n] of this.renderedNodes) this.renderTreeElement(s, n)
                }
            }
            if (typeof t.renderIndentGuides < "u") {
                const i = t.renderIndentGuides !== "none";
                if (i !== this.shouldRenderIndentGuides) {
                    this.shouldRenderIndentGuides = i;
                    for (const [s, n] of this.renderedNodes) this._renderIndentGuides(s, n);
                    if (this.indentGuidesDisposable.dispose(), i) {
                        const s = new Y;
                        this.activeNodes.onDidChange(this._onDidChangeActiveNodes, this, s), this.indentGuidesDisposable = s, this._onDidChangeActiveNodes(this.activeNodes.elements)
                    }
                }
            }
            typeof t.hideTwistiesOfChildlessElements < "u" && (this.hideTwistiesOfChildlessElements = t.hideTwistiesOfChildlessElements)
        }
        renderTemplate(t) {
            const i = Q(t, ie(".monaco-tl-row")),
                s = Q(i, ie(".monaco-tl-indent")),
                n = Q(i, ie(".monaco-tl-twistie")),
                r = Q(i, ie(".monaco-tl-contents")),
                o = this.renderer.renderTemplate(r);
            return {
                container: t,
                indent: s,
                twistie: n,
                indentGuidesDisposable: q.None,
                templateData: o
            }
        }
        renderElement(t, i, s, n) {
            this.renderedNodes.set(t, s), this.renderedElements.set(t.element, t), this.renderTreeElement(t, s), this.renderer.renderElement(t, i, s.templateData, n)
        }
        disposeElement(t, i, s, n) {
            s.indentGuidesDisposable.dispose(), this.renderer.disposeElement?.(t, i, s.templateData, n), typeof n == "number" && (this.renderedNodes.delete(t), this.renderedElements.delete(t.element))
        }
        disposeTemplate(t) {
            this.renderer.disposeTemplate(t.templateData)
        }
        onDidChangeTwistieState(t) {
            const i = this.renderedElements.get(t);
            i && this.onDidChangeNodeTwistieState(i)
        }
        onDidChangeNodeTwistieState(t) {
            const i = this.renderedNodes.get(t);
            i && (this._onDidChangeActiveNodes(this.activeNodes.elements), this.renderTreeElement(t, i))
        }
        renderTreeElement(t, i) {
            const s = Ha.DefaultIndent + (t.depth - 1) * this.indent;
            i.twistie.style.paddingLeft = `${s}px`, i.indent.style.width = `${s+this.indent-16}px`, t.collapsible ? i.container.setAttribute("aria-expanded", String(!t.collapsed)) : i.container.removeAttribute("aria-expanded"), i.twistie.classList.remove(...ye.asClassNameArray(me.treeItemExpanded));
            let n = !1;
            this.renderer.renderTwistie && (n = this.renderer.renderTwistie(t.element, i.twistie)), t.collapsible && (!this.hideTwistiesOfChildlessElements || t.visibleChildrenCount > 0) ? (n || i.twistie.classList.add(...ye.asClassNameArray(me.treeItemExpanded)), i.twistie.classList.add("collapsible"), i.twistie.classList.toggle("collapsed", t.collapsed)) : i.twistie.classList.remove("collapsible", "collapsed"), this._renderIndentGuides(t, i)
        }
        _renderIndentGuides(t, i) {
            if (ci(i.indent), i.indentGuidesDisposable.dispose(), !this.shouldRenderIndentGuides) return;
            const s = new Y;
            for (;;) {
                const n = this.model.getNodeLocation(t),
                    r = this.model.getParentNodeLocation(n);
                if (!r) break;
                const o = this.model.getNode(r),
                    a = ie(".indent-guide", {
                        style: `width: ${this.indent}px`
                    });
                this.activeIndentNodes.has(o) && a.classList.add("active"), i.indent.childElementCount === 0 ? i.indent.appendChild(a) : i.indent.insertBefore(a, i.indent.firstElementChild), this.renderedIndentGuides.add(o, a), s.add(de(() => this.renderedIndentGuides.delete(o, a))), t = o
            }
            i.indentGuidesDisposable = s
        }
        _onDidChangeActiveNodes(t) {
            if (!this.shouldRenderIndentGuides) return;
            const i = new Set;
            t.forEach(s => {
                const n = this.model.getNodeLocation(s);
                try {
                    const r = this.model.getParentNodeLocation(n);
                    s.collapsible && s.children.length > 0 && !s.collapsed ? i.add(s) : r && i.add(this.model.getNode(r))
                } catch {}
            }), this.activeIndentNodes.forEach(s => {
                i.has(s) || this.renderedIndentGuides.forEach(s, n => n.classList.remove("active"))
            }), i.forEach(s => {
                this.activeIndentNodes.has(s) || this.renderedIndentGuides.forEach(s, n => n.classList.add("active"))
            }), this.activeIndentNodes = i
        }
        dispose() {
            this.renderedNodes.clear(), this.renderedElements.clear(), this.indentGuidesDisposable.dispose(), Ke(this.disposables)
        }
    };
Nd.DefaultIndent = 8;
var O2 = Nd;

function F2(e, t) {
    const i = t.toLowerCase().indexOf(e);
    let s;
    if (i > -1) {
        s = [Number.MAX_SAFE_INTEGER, 0];
        for (let n = e.length; n > 0; n--) s.push(i + n - 1)
    }
    return s
}
var B2 = class {
        constructor(e, t, i) {
            this._keyboardNavigationLabelProvider = e, this._filter = t, this._defaultFindVisibility = i, this._totalCount = 0, this._matchCount = 0, this._findMatchType = 0, this._findMode = 0, this._pattern = "", this._lowercasePattern = "", this.disposables = new Y
        }
        get totalCount() {
            return this._totalCount
        }
        get matchCount() {
            return this._matchCount
        }
        set findMatchType(e) {
            this._findMatchType = e
        }
        get findMatchType() {
            return this._findMatchType
        }
        set findMode(e) {
            this._findMode = e
        }
        get findMode() {
            return this._findMode
        }
        set pattern(e) {
            this._pattern = e, this._lowercasePattern = e.toLowerCase()
        }
        filter(e, t) {
            let i = 1;
            if (this._filter) {
                const r = this._filter.filter(e, t);
                if (typeof r == "boolean" ? i = r ? 1 : 0 : Ad(r) ? i = ua(r.visibility) : i = r, i === 0) return !1
            }
            if (this._totalCount++, !this._pattern) return this._matchCount++, {
                data: di.Default,
                visibility: i
            };
            const s = this._keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e),
                n = Array.isArray(s) ? s : [s];
            for (const r of n) {
                const o = r && r.toString();
                if (typeof o > "u") return {
                    data: di.Default,
                    visibility: i
                };
                let a;
                if (this._findMatchType === 1 ? a = F2(this._lowercasePattern, o.toLowerCase()) : a = Oh(this._pattern, this._lowercasePattern, 0, o, o.toLowerCase(), 0, {
                        firstMatchCanBeWeak: !0,
                        boostFullMatch: !0
                    }), a) return this._matchCount++, n.length === 1 ? {
                    data: a,
                    visibility: i
                } : {
                    data: {
                        label: o,
                        score: a
                    },
                    visibility: i
                }
            }
            return this._findMode === 1 ? typeof this._defaultFindVisibility == "number" ? this._defaultFindVisibility : this._defaultFindVisibility ? this._defaultFindVisibility(e) : 2 : {
                data: di.Default,
                visibility: i
            }
        }
        reset() {
            this._totalCount = 0, this._matchCount = 0
        }
        dispose() {
            Ke(this.disposables)
        }
    },
    H2 = class extends Ws {
        constructor(e, t, i) {
            super({
                icon: e.icon,
                title: e.title,
                isChecked: e.isChecked,
                inputActiveOptionBorder: t.inputActiveOptionBorder,
                inputActiveOptionForeground: t.inputActiveOptionForeground,
                inputActiveOptionBackground: t.inputActiveOptionBackground,
                hoverDelegate: i
            }), this.id = e.id
        }
    },
    z2 = class {
        constructor(e) {
            this.stateMap = new Map(e.map(t => [t.id, {
                ...t
            }]))
        }
        states() {
            return Array.from(this.stateMap.values())
        }
        get(e) {
            const t = this.stateMap.get(e);
            if (t === void 0) throw new Error(`No state found for toggle id ${e}`);
            return t.isChecked
        }
        set(e, t) {
            const i = this.stateMap.get(e);
            if (i === void 0) throw new Error(`No state found for toggle id ${e}`);
            return i.isChecked === t ? !1 : (i.isChecked = t, !0)
        }
    },
    $2 = {
        inputBoxStyles: D2,
        toggleStyles: kd,
        listFilterWidgetBackground: void 0,
        listFilterWidgetNoMatchesOutline: void 0,
        listFilterWidgetOutline: void 0,
        listFilterWidgetShadow: void 0
    },
    U2 = class extends q {
        constructor(e, t, i, s, n = [], r) {
            super(), this.tree = t, this.elements = xo(".monaco-tree-type-filter", [xo(".monaco-tree-type-filter-input@findInput"), xo(".monaco-tree-type-filter-actionbar@actionbar")]), this.toggles = [], this._onDidDisable = new L, this.onDidDisable = this._onDidDisable.event, e.appendChild(this.elements.root), this._register(de(() => this.elements.root.remove()));
            const o = r?.styles ?? $2;
            o.listFilterWidgetBackground && (this.elements.root.style.backgroundColor = o.listFilterWidgetBackground), o.listFilterWidgetShadow && (this.elements.root.style.boxShadow = `0 0 8px 2px ${o.listFilterWidgetShadow}`);
            const a = this._register(Io());
            this.toggles = n.map(f => this._register(new H2(f, o.toggleStyles, a))), this.onDidToggleChange = A.any(...this.toggles.map(f => A.map(f.onChange, () => ({
                id: f.id,
                isChecked: f.checked
            }))));
            const c = r?.history || [];
            this.findInput = this._register(new Td(this.elements.findInput, i, {
                label: V(31, null),
                placeholder: s,
                additionalToggles: this.toggles,
                showCommonFindToggles: !1,
                inputBoxStyles: o.inputBoxStyles,
                toggleStyles: o.toggleStyles,
                history: new Set(c)
            })), this.actionbar = this._register(new Ed(this.elements.actionbar));
            const h = this._register(new le(this.findInput.inputBox.inputElement, "keydown")),
                d = A.chain(h.event, f => f.map(p => new Me(p)));
            this._register(d(f => {
                if (f.equals(3)) {
                    f.preventDefault(), f.stopPropagation(), this.findInput.inputBox.addToHistory(), this.tree.domFocus();
                    return
                }
                if (f.equals(18)) {
                    f.preventDefault(), f.stopPropagation(), this.findInput.inputBox.isAtLastInHistory() || this.findInput.inputBox.isNowhereInHistory() ? (this.findInput.inputBox.addToHistory(), this.tree.domFocus()) : this.findInput.inputBox.showNextValue();
                    return
                }
                if (f.equals(16)) {
                    f.preventDefault(), f.stopPropagation(), this.findInput.inputBox.showPreviousValue();
                    return
                }
            }));
            const u = this._register(new da("close", V(32, null), "codicon codicon-close", !0, () => this.dispose()));
            this.actionbar.push(u, {
                icon: !0,
                label: !1
            }), this.onDidChangeValue = this.findInput.onDidChange
        }
        get value() {
            return this.findInput.inputBox.value
        }
        set value(e) {
            this.findInput.inputBox.value = e
        }
        setToggleState(e, t) {
            const i = this.toggles.find(s => s.id === e);
            i && (i.checked = t)
        }
        setPlaceHolder(e) {
            this.findInput.inputBox.setPlaceHolder(e)
        }
        getHistory() {
            return this.findInput.inputBox.getHistory()
        }
        focus() {
            this.findInput.focus()
        }
        select() {
            this.findInput.select(), this.findInput.inputBox.addToHistory(!0)
        }
        showMessage(e) {
            this.findInput.showMessage(e)
        }
        clearMessage() {
            this.findInput.clearMessage()
        }
        async dispose() {
            this._onDidDisable.fire(), this.elements.root.classList.add("disabled"), await xn(300), super.dispose()
        }
    },
    W2 = class {
        constructor(e, t, i, s = {}) {
            this.tree = e, this.filter = t, this.contextViewProvider = i, this.options = s, this._pattern = "", this.previousPattern = "", this._onDidChangePattern = new L, this.onDidChangePattern = this._onDidChangePattern.event, this._onDidChangeOpenState = new L, this.onDidChangeOpenState = this._onDidChangeOpenState.event, this.enabledDisposables = new Y, this.disposables = new Y, this.toggles = new z2(s.toggles ?? []), this._placeholder = s.placeholder ?? V(33, null)
        }
        get pattern() {
            return this._pattern
        }
        get placeholder() {
            return this._placeholder
        }
        set placeholder(e) {
            this._placeholder = e, this.widget?.setPlaceHolder(e)
        }
        isOpened() {
            return !!this.widget
        }
        open() {
            if (this.widget) {
                this.widget.focus(), this.widget.select();
                return
            }
            this.tree.updateOptions({
                paddingTop: 30
            }), this.widget = new U2(this.tree.getHTMLElement(), this.tree, this.contextViewProvider, this.placeholder, this.toggles.states(), {
                ...this.options,
                history: this._history
            }), this.enabledDisposables.add(this.widget), this.widget.onDidChangeValue(this.onDidChangeValue, this, this.enabledDisposables), this.widget.onDidDisable(this.close, this, this.enabledDisposables), this.widget.onDidToggleChange(this.onDidToggleChange, this, this.enabledDisposables), this.widget.focus(), this.widget.value = this.previousPattern, this.widget.select(), this._onDidChangeOpenState.fire(!0)
        }
        close() {
            this.widget && (this.tree.updateOptions({
                paddingTop: 0
            }), this._history = this.widget.getHistory(), this.widget = void 0, this.enabledDisposables.clear(), this.previousPattern = this.pattern, this.onDidChangeValue(""), this.tree.domFocus(), this._onDidChangeOpenState.fire(!1))
        }
        onDidChangeValue(e) {
            this._pattern = e, this._onDidChangePattern.fire(e), this.filter.pattern = e, this.applyPattern(e)
        }
        onDidToggleChange(e) {
            this.toggles.set(e.id, e.isChecked)
        }
        updateToggleState(e, t) {
            this.toggles.set(e, t), this.widget?.setToggleState(e, t)
        }
        renderMessage(e, t) {
            e ? this.tree.options.showNotFoundMessage ?? !0 ? this.widget?.showMessage({
                type: 2,
                content: t ?? V(34, null)
            }) : this.widget?.showMessage({
                type: 2
            }) : this.widget?.clearMessage()
        }
        alertResults(e) {
            xs(e ? V(36, null, e) : V(35, null))
        }
        dispose() {
            this._history = void 0, this._onDidChangePattern.dispose(), this.enabledDisposables.dispose(), this.disposables.dispose()
        }
    },
    V2 = class extends W2 {
        constructor(e, t, i, s = {}) {
            const n = s.defaultFindMode ?? 0,
                r = s.defaultFindMatchType ?? 0,
                o = [{
                    id: "mode",
                    icon: me.listFilter,
                    title: V(39, null),
                    isChecked: n === 1
                }, {
                    id: "matchType",
                    icon: me.searchFuzzy,
                    title: V(40, null),
                    isChecked: r === 0
                }];
            t.findMatchType = r, t.findMode = n, super(e, t, i, {
                ...s,
                toggles: o
            }), this.filter = t, this._onDidChangeMode = new L, this.onDidChangeMode = this._onDidChangeMode.event, this._onDidChangeMatchType = new L, this.onDidChangeMatchType = this._onDidChangeMatchType.event, this.disposables.add(this.tree.onDidChangeModel(() => {
                this.isOpened() && (this.pattern.length !== 0 && this.tree.refilter(), this.render())
            })), this.disposables.add(this.tree.onWillRefilter(() => this.filter.reset()))
        }
        get mode() {
            return this.toggles.get("mode") ? 1 : 0
        }
        set mode(e) {
            if (e === this.mode) return;
            const t = e === 1;
            this.updateToggleState("mode", t), this.placeholder = V(t ? 37 : 38, null), this.filter.findMode = e, this.tree.refilter(), this.render(), this._onDidChangeMode.fire(e)
        }
        get matchType() {
            return this.toggles.get("matchType") ? 0 : 1
        }
        set matchType(e) {
            e !== this.matchType && (this.updateToggleState("matchType", e === 0), this.filter.findMatchType = e, this.tree.refilter(), this.render(), this._onDidChangeMatchType.fire(e))
        }
        updateOptions(e = {}) {
            e.defaultFindMode !== void 0 && (this.mode = e.defaultFindMode), e.defaultFindMatchType !== void 0 && (this.matchType = e.defaultFindMatchType)
        }
        applyPattern(e) {
            this.tree.refilter(), e && this.tree.focusNext(0, !0, void 0, i => !di.isDefault(i.filterData));
            const t = this.tree.getFocus();
            if (t.length > 0) {
                const i = t[0];
                this.tree.getRelativeTop(i) === null && this.tree.reveal(i, .5)
            }
            this.render()
        }
        shouldAllowFocus(e) {
            return !this.isOpened() || !this.pattern || this.filter.totalCount > 0 && this.filter.matchCount <= 1 ? !0 : !di.isDefault(e.filterData)
        }
        onDidToggleChange(e) {
            e.id === "mode" ? this.mode = e.isChecked ? 1 : 0 : e.id === "matchType" && (this.matchType = e.isChecked ? 0 : 1)
        }
        render() {
            const t = this.filter.matchCount === 0 && this.filter.totalCount > 0 && this.pattern.length > 0;
            this.renderMessage(t), this.pattern.length && this.alertResults(this.filter.matchCount)
        }
    };

function K2(e, t) {
    return e.position === t.position && Id(e, t)
}

function Id(e, t) {
    return e.node.element === t.node.element && e.startIndex === t.startIndex && e.height === t.height && e.endIndex === t.endIndex
}
var G2 = class {
        constructor(e = []) {
            this.stickyNodes = e
        }
        get count() {
            return this.stickyNodes.length
        }
        equal(e) {
            return ds(this.stickyNodes, e.stickyNodes, K2)
        }
        contains(e) {
            return this.stickyNodes.some(t => t.node.element === e.element)
        }
        lastNodePartiallyVisible() {
            if (this.count === 0) return !1;
            const e = this.stickyNodes[this.count - 1];
            if (this.count === 1) return e.position !== 0;
            const t = this.stickyNodes[this.count - 2];
            return t.position + t.height !== e.position
        }
        animationStateChanged(e) {
            if (!ds(this.stickyNodes, e.stickyNodes, Id) || this.count === 0) return !1;
            const t = this.stickyNodes[this.count - 1],
                i = e.stickyNodes[e.count - 1];
            return t.position !== i.position
        }
    },
    q2 = class {
        constrainStickyScrollNodes(e, t, i) {
            for (let s = 0; s < e.length; s++) {
                const n = e[s];
                if (n.position + n.height > i || s >= t) return e.slice(0, s)
            }
            return e
        }
    },
    Ld = class extends q {
        constructor(e, t, i, s, n, r = {}) {
            super(), this.tree = e, this.model = t, this.view = i, this.treeDelegate = n, this.maxWidgetViewRatio = .4;
            const o = this.validateStickySettings(r);
            this.stickyScrollMaxItemCount = o.stickyScrollMaxItemCount, this.stickyScrollDelegate = r.stickyScrollDelegate ?? new q2, this.paddingTop = r.paddingTop ?? 0, this._widget = this._register(new j2(i.getScrollableElement(), i, e, s, n, r.accessibilityProvider)), this.onDidChangeHasFocus = this._widget.onDidChangeHasFocus, this.onContextMenu = this._widget.onContextMenu, this._register(i.onDidScroll(() => this.update())), this._register(i.onDidChangeContentHeight(() => this.update())), this._register(e.onDidChangeCollapseState(() => this.update())), this._register(t.onDidSpliceRenderedNodes(a => {
                const c = this._widget.state;
                if (!c) return;
                if (a.deleteCount > 0 && c.stickyNodes.some(u => !this.model.has(this.model.getNodeLocation(u.node)))) {
                    this.update();
                    return
                }
                c.stickyNodes.some(u => {
                    const f = this.model.getListIndex(this.model.getNodeLocation(u.node));
                    return f >= a.start && f < a.start + a.deleteCount && c.contains(u.node)
                }) && this._widget.rerender()
            })), this.update()
        }
        get height() {
            return this._widget.height
        }
        get count() {
            return this._widget.count
        }
        getNode(e) {
            return this._widget.getNode(e)
        }
        getNodeAtHeight(e) {
            let t;
            if (e === 0 ? t = this.view.firstVisibleIndex : t = this.view.indexAt(e + this.view.scrollTop), !(t < 0 || t >= this.view.length)) return this.view.element(t)
        }
        update() {
            const e = this.getNodeAtHeight(this.paddingTop);
            if (!e || this.tree.scrollTop <= this.paddingTop) {
                this._widget.setState(void 0);
                return
            }
            const t = this.findStickyState(e);
            this._widget.setState(t)
        }
        findStickyState(e) {
            const t = [];
            let i = e,
                s = 0,
                n = this.getNextStickyNode(i, void 0, s);
            for (; n && (t.push(n), s += n.height, !(t.length <= this.stickyScrollMaxItemCount && (i = this.getNextVisibleNode(n), !i)));) n = this.getNextStickyNode(i, n.node, s);
            const r = this.constrainStickyNodes(t);
            return r.length ? new G2(r) : void 0
        }
        getNextVisibleNode(e) {
            return this.getNodeAtHeight(e.position + e.height)
        }
        getNextStickyNode(e, t, i) {
            const s = this.getAncestorUnderPrevious(e, t);
            if (s && !(s === e && (!this.nodeIsUncollapsedParent(e) || this.nodeTopAlignsWithStickyNodesBottom(e, i)))) return this.createStickyScrollNode(s, i)
        }
        nodeTopAlignsWithStickyNodesBottom(e, t) {
            const i = this.getNodeIndex(e),
                s = this.view.getElementTop(i),
                n = t;
            return this.view.scrollTop === s - n
        }
        createStickyScrollNode(e, t) {
            const i = this.treeDelegate.getHeight(e),
                {
                    startIndex: s,
                    endIndex: n
                } = this.getNodeRange(e),
                r = this.calculateStickyNodePosition(n, t, i);
            return {
                node: e,
                position: r,
                height: i,
                startIndex: s,
                endIndex: n
            }
        }
        getAncestorUnderPrevious(e, t = void 0) {
            let i = e,
                s = this.getParentNode(i);
            for (; s;) {
                if (s === t) return i;
                i = s, s = this.getParentNode(i)
            }
            if (t === void 0) return i
        }
        calculateStickyNodePosition(e, t, i) {
            let s = this.view.getRelativeTop(e);
            if (s === null && this.view.firstVisibleIndex === e && e + 1 < this.view.length) {
                const c = this.treeDelegate.getHeight(this.view.element(e)),
                    h = this.view.getRelativeTop(e + 1);
                s = h ? h - c / this.view.renderHeight : null
            }
            if (s === null) return t;
            const n = this.view.element(e),
                r = this.treeDelegate.getHeight(n),
                a = s * this.view.renderHeight + r;
            return t + i > a && t <= a ? a - i : t
        }
        constrainStickyNodes(e) {
            if (e.length === 0) return [];
            const t = this.view.renderHeight * this.maxWidgetViewRatio,
                i = e[e.length - 1];
            if (e.length <= this.stickyScrollMaxItemCount && i.position + i.height <= t) return e;
            const s = this.stickyScrollDelegate.constrainStickyScrollNodes(e, this.stickyScrollMaxItemCount, t);
            if (!s.length) return [];
            const n = s[s.length - 1];
            if (s.length > this.stickyScrollMaxItemCount || n.position + n.height > t) throw new Error("stickyScrollDelegate violates constraints");
            return s
        }
        getParentNode(e) {
            const t = this.model.getNodeLocation(e),
                i = this.model.getParentNodeLocation(t);
            return i ? this.model.getNode(i) : void 0
        }
        nodeIsUncollapsedParent(e) {
            const t = this.model.getNodeLocation(e);
            return this.model.getListRenderCount(t) > 1
        }
        getNodeIndex(e) {
            const t = this.model.getNodeLocation(e);
            return this.model.getListIndex(t)
        }
        getNodeRange(e) {
            const t = this.model.getNodeLocation(e),
                i = this.model.getListIndex(t);
            if (i < 0) throw new Error("Node not found in tree");
            const s = this.model.getListRenderCount(t),
                n = i + s - 1;
            return {
                startIndex: i,
                endIndex: n
            }
        }
        nodePositionTopBelowWidget(e) {
            const t = [];
            let i = this.getParentNode(e);
            for (; i;) t.push(i), i = this.getParentNode(i);
            let s = 0;
            for (let n = 0; n < t.length && n < this.stickyScrollMaxItemCount; n++) s += this.treeDelegate.getHeight(t[n]);
            return s
        }
        getFocus() {
            return this._widget.getFocus()
        }
        domFocus() {
            this._widget.domFocus()
        }
        focusedLast() {
            return this._widget.focusedLast()
        }
        updateOptions(e = {}) {
            if (e.paddingTop !== void 0 && (this.paddingTop = e.paddingTop), e.stickyScrollMaxItemCount !== void 0) {
                const t = this.validateStickySettings(e);
                this.stickyScrollMaxItemCount !== t.stickyScrollMaxItemCount && (this.stickyScrollMaxItemCount = t.stickyScrollMaxItemCount, this.update())
            }
        }
        validateStickySettings(e) {
            let t = 7;
            return typeof e.stickyScrollMaxItemCount == "number" && (t = Math.max(e.stickyScrollMaxItemCount, 1)), {
                stickyScrollMaxItemCount: t
            }
        }
        setModel(e) {
            this.model = e
        }
    },
    j2 = class {
        constructor(e, t, i, s, n, r) {
            this.view = t, this.tree = i, this.treeRenderers = s, this.treeDelegate = n, this.accessibilityProvider = r, this._previousElements = [], this._previousStateDisposables = new Y, this._rootDomNode = ie(".monaco-tree-sticky-container.empty"), e.appendChild(this._rootDomNode);
            const o = ie(".monaco-tree-sticky-container-shadow");
            this._rootDomNode.appendChild(o), this.stickyScrollFocus = new Y2(this._rootDomNode, t), this.onDidChangeHasFocus = this.stickyScrollFocus.onDidChangeHasFocus, this.onContextMenu = this.stickyScrollFocus.onContextMenu
        }
        get state() {
            return this._previousState
        }
        get height() {
            if (!this._previousState) return 0;
            const e = this._previousState.stickyNodes[this._previousState.count - 1];
            return e.position + e.height
        }
        get count() {
            return this._previousState?.count ?? 0
        }
        getNode(e) {
            return this._previousState?.stickyNodes.find(t => t.node === e)
        }
        setState(e) {
            const t = !!this._previousState && this._previousState.count > 0,
                i = !!e && e.count > 0;
            if (!t && !i || t && i && this._previousState.equal(e)) return;
            if (t !== i && this.setVisible(i), !i) {
                this._previousState = void 0, this._previousElements = [], this._previousStateDisposables.clear();
                return
            }
            const s = e.stickyNodes[e.count - 1];
            this._previousState && e.animationStateChanged(this._previousState) ? this._previousElements[this._previousState.count - 1].style.top = `${s.position}px` : this.renderState(e), this._previousState = e, this._rootDomNode.style.height = `${s.position+s.height}px`
        }
        renderState(e) {
            this._previousStateDisposables.clear();
            const t = Array(e.count);
            for (let i = e.count - 1; i >= 0; i--) {
                const s = e.stickyNodes[i],
                    {
                        element: n,
                        disposable: r
                    } = this.createElement(s, i, e.count);
                t[i] = n, this._rootDomNode.appendChild(n), this._previousStateDisposables.add(r)
            }
            this.stickyScrollFocus.updateElements(t, e), this._previousElements = t
        }
        rerender() {
            this._previousState && this.renderState(this._previousState)
        }
        createElement(e, t, i) {
            const s = e.startIndex,
                n = document.createElement("div");
            n.style.top = `${e.position}px`, this.tree.options.setRowHeight !== !1 && (n.style.height = `${e.height}px`), this.tree.options.setRowLineHeight !== !1 && (n.style.lineHeight = `${e.height}px`), n.classList.add("monaco-tree-sticky-row"), n.classList.add("monaco-list-row"), n.setAttribute("data-index", `${s}`), n.setAttribute("data-parity", s % 2 === 0 ? "even" : "odd"), n.setAttribute("id", this.view.getElementID(s));
            const r = this.setAccessibilityAttributes(n, e.node.element, t, i),
                o = this.treeDelegate.getTemplateId(e.node),
                a = this.treeRenderers.find(u => u.templateId === o);
            if (!a) throw new Error(`No renderer found for template id ${o}`);
            let c = e.node;
            c === this.tree.getNode(this.tree.getNodeLocation(e.node)) && (c = new Proxy(e.node, {}));
            const h = a.renderTemplate(n);
            a.renderElement(c, e.startIndex, h, e.height);
            const d = de(() => {
                r.dispose(), a.disposeElement(c, e.startIndex, h, e.height), a.disposeTemplate(h), n.remove()
            });
            return {
                element: n,
                disposable: d
            }
        }
        setAccessibilityAttributes(e, t, i, s) {
            if (!this.accessibilityProvider) return q.None;
            this.accessibilityProvider.getSetSize && e.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(t, i, s))), this.accessibilityProvider.getPosInSet && e.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(t, i))), this.accessibilityProvider.getRole && e.setAttribute("role", this.accessibilityProvider.getRole(t) ?? "treeitem");
            const n = this.accessibilityProvider.getAriaLabel(t),
                r = n && typeof n != "string" ? n : Gc(n),
                o = Rn(c => {
                    const h = c.readObservable(r);
                    h ? e.setAttribute("aria-label", h) : e.removeAttribute("aria-label")
                });
            typeof n == "string" || n && e.setAttribute("aria-label", n.get());
            const a = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(t);
            return typeof a == "number" && e.setAttribute("aria-level", `${a}`), e.setAttribute("aria-selected", String(!1)), o
        }
        setVisible(e) {
            this._rootDomNode.classList.toggle("empty", !e), e || this.stickyScrollFocus.updateElements([], void 0)
        }
        getFocus() {
            return this.stickyScrollFocus.getFocus()
        }
        domFocus() {
            this.stickyScrollFocus.domFocus()
        }
        focusedLast() {
            return this.stickyScrollFocus.focusedLast()
        }
        dispose() {
            this.stickyScrollFocus.dispose(), this._previousStateDisposables.dispose(), this._rootDomNode.remove()
        }
    },
    Y2 = class extends q {
        constructor(e, t) {
            super(), this.container = e, this.view = t, this.focusedIndex = -1, this.elements = [], this._onDidChangeHasFocus = new L, this.onDidChangeHasFocus = this._onDidChangeHasFocus.event, this._onContextMenu = new L, this.onContextMenu = this._onContextMenu.event, this._domHasFocus = !1, this._register(O(this.container, "focus", () => this.onFocus())), this._register(O(this.container, "blur", () => this.onBlur())), this._register(this.view.onDidFocus(() => this.toggleStickyScrollFocused(!1))), this._register(this.view.onKeyDown(i => this.onKeyDown(i))), this._register(this.view.onMouseDown(i => this.onMouseDown(i))), this._register(this.view.onContextMenu(i => this.handleContextMenu(i)))
        }
        get domHasFocus() {
            return this._domHasFocus
        }
        set domHasFocus(e) {
            e !== this._domHasFocus && (this._onDidChangeHasFocus.fire(e), this._domHasFocus = e)
        }
        handleContextMenu(e) {
            const t = e.browserEvent.target;
            if (!Ps(t) && !Ms(t)) {
                this.focusedLast() && this.view.domFocus();
                return
            }
            if (!hi(e.browserEvent)) {
                if (!this.state) throw new Error("Context menu should not be triggered when state is undefined");
                const r = this.state.stickyNodes.findIndex(o => o.node.element === e.element?.element);
                if (r === -1) throw new Error("Context menu should not be triggered when element is not in sticky scroll widget");
                this.container.focus(), this.setFocus(r);
                return
            }
            if (!this.state || this.focusedIndex < 0) throw new Error("Context menu key should not be triggered when focus is not in sticky scroll widget");
            const s = this.state.stickyNodes[this.focusedIndex].node.element,
                n = this.elements[this.focusedIndex];
            this._onContextMenu.fire({
                element: s,
                anchor: n,
                browserEvent: e.browserEvent,
                isStickyScroll: !0
            })
        }
        onKeyDown(e) {
            if (this.domHasFocus && this.state) {
                if (e.key === "ArrowUp") this.setFocusedElement(Math.max(0, this.focusedIndex - 1)), e.preventDefault(), e.stopPropagation();
                else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                    if (this.focusedIndex >= this.state.count - 1) {
                        const t = this.state.stickyNodes[this.state.count - 1].startIndex + 1;
                        this.view.domFocus(), this.view.setFocus([t]), this.scrollNodeUnderWidget(t, this.state)
                    } else this.setFocusedElement(this.focusedIndex + 1);
                    e.preventDefault(), e.stopPropagation()
                }
            }
        }
        onMouseDown(e) {
            const t = e.browserEvent.target;
            !Ps(t) && !Ms(t) || (e.browserEvent.preventDefault(), e.browserEvent.stopPropagation())
        }
        updateElements(e, t) {
            if (t && t.count === 0) throw new Error("Sticky scroll state must be undefined when there are no sticky nodes");
            if (t && t.count !== e.length) throw new Error("Sticky scroll focus received illigel state");
            const i = this.focusedIndex;
            if (this.removeFocus(), this.elements = e, this.state = t, t) {
                const s = Ln(i, 0, t.count - 1);
                this.setFocus(s)
            } else this.domHasFocus && this.view.domFocus();
            this.container.tabIndex = t ? 0 : -1
        }
        setFocusedElement(e) {
            const t = this.state;
            if (!t) throw new Error("Cannot set focus when state is undefined");
            if (this.setFocus(e), !(e < t.count - 1) && t.lastNodePartiallyVisible()) {
                const i = t.stickyNodes[e];
                this.scrollNodeUnderWidget(i.endIndex + 1, t)
            }
        }
        scrollNodeUnderWidget(e, t) {
            const i = t.stickyNodes[t.count - 1],
                s = t.count > 1 ? t.stickyNodes[t.count - 2] : void 0,
                n = this.view.getElementTop(e),
                r = s ? s.position + s.height + i.height : i.height;
            this.view.scrollTop = n - r
        }
        getFocus() {
            if (!(!this.state || this.focusedIndex === -1)) return this.state.stickyNodes[this.focusedIndex].node.element
        }
        domFocus() {
            if (!this.state) throw new Error("Cannot focus when state is undefined");
            this.container.focus()
        }
        focusedLast() {
            return this.state ? this.view.getHTMLElement().classList.contains("sticky-scroll-focused") : !1
        }
        removeFocus() {
            this.focusedIndex !== -1 && (this.toggleElementFocus(this.elements[this.focusedIndex], !1), this.focusedIndex = -1)
        }
        setFocus(e) {
            if (0 > e) throw new Error("addFocus() can not remove focus");
            if (!this.state && e >= 0) throw new Error("Cannot set focus index when state is undefined");
            if (this.state && e >= this.state.count) throw new Error("Cannot set focus index to an index that does not exist");
            const t = this.focusedIndex;
            t >= 0 && this.toggleElementFocus(this.elements[t], !1), e >= 0 && this.toggleElementFocus(this.elements[e], !0), this.focusedIndex = e
        }
        toggleElementFocus(e, t) {
            this.toggleElementActiveFocus(e, t && this.domHasFocus), this.toggleElementPassiveFocus(e, t)
        }
        toggleCurrentElementActiveFocus(e) {
            this.focusedIndex !== -1 && this.toggleElementActiveFocus(this.elements[this.focusedIndex], e)
        }
        toggleElementActiveFocus(e, t) {
            e.classList.toggle("focused", t)
        }
        toggleElementPassiveFocus(e, t) {
            e.classList.toggle("passive-focused", t)
        }
        toggleStickyScrollFocused(e) {
            this.view.getHTMLElement().classList.toggle("sticky-scroll-focused", e)
        }
        onFocus() {
            if (!this.state || this.elements.length === 0) throw new Error("Cannot focus when state is undefined or elements are empty");
            this.domHasFocus = !0, this.toggleStickyScrollFocused(!0), this.toggleCurrentElementActiveFocus(!0), this.focusedIndex === -1 && this.setFocus(0)
        }
        onBlur() {
            this.domHasFocus = !1, this.toggleCurrentElementActiveFocus(!1)
        }
        dispose() {
            this.toggleStickyScrollFocused(!1), this._onDidChangeHasFocus.fire(!1), super.dispose()
        }
    };

function es(e) {
    let t = Zi.Unknown;
    return ko(e.browserEvent.target, "monaco-tl-twistie", "monaco-tl-row") ? t = Zi.Twistie : ko(e.browserEvent.target, "monaco-tl-contents", "monaco-tl-row") ? t = Zi.Element : ko(e.browserEvent.target, "monaco-tree-type-filter", "monaco-list") && (t = Zi.Filter), {
        browserEvent: e.browserEvent,
        element: e.element ? e.element.element : null,
        target: t
    }
}

function X2(e) {
    const t = Ps(e.browserEvent.target);
    return {
        element: e.element ? e.element.element : null,
        browserEvent: e.browserEvent,
        anchor: e.anchor,
        isStickyScroll: t
    }
}

function ir(e, t) {
    t(e), e.children.forEach(i => ir(i, t))
}
var ga = class {
        constructor(e, t) {
            this.getFirstViewElementWithTrait = e, this.identityProvider = t, this.nodes = [], this._onDidChange = new L, this.onDidChange = this._onDidChange.event
        }
        get nodeSet() {
            return this._nodeSet || (this._nodeSet = this.createNodeSet()), this._nodeSet
        }
        set(e, t) {
            !t?.__forceEvent && ds(this.nodes, e) || this._set(e, !1, t)
        }
        _set(e, t, i) {
            if (this.nodes = [...e], this.elements = void 0, this._nodeSet = void 0, !t) {
                const s = this;
                this._onDidChange.fire({
                    get elements() {
                        return s.get()
                    },
                    browserEvent: i
                })
            }
        }
        get() {
            return this.elements || (this.elements = this.nodes.map(e => e.element)), [...this.elements]
        }
        getNodes() {
            return this.nodes
        }
        has(e) {
            return this.nodeSet.has(e)
        }
        onDidModelSplice({
            insertedNodes: e,
            deletedNodes: t
        }) {
            if (!this.identityProvider) {
                const a = this.createNodeSet(),
                    c = h => a.delete(h);
                t.forEach(h => ir(h, c)), this.set([...a.values()]);
                return
            }
            const i = new Set,
                s = a => i.add(this.identityProvider.getId(a.element).toString());
            t.forEach(a => ir(a, s));
            const n = new Map,
                r = a => n.set(this.identityProvider.getId(a.element).toString(), a);
            e.forEach(a => ir(a, r));
            const o = [];
            for (const a of this.nodes) {
                const c = this.identityProvider.getId(a.element).toString();
                if (!i.has(c)) o.push(a);
                else {
                    const d = n.get(c);
                    d && d.visible && o.push(d)
                }
            }
            if (this.nodes.length > 0 && o.length === 0) {
                const a = this.getFirstViewElementWithTrait();
                a && o.push(a)
            }
            this._set(o, !0)
        }
        createNodeSet() {
            const e = new Set;
            for (const t of this.nodes) e.add(t);
            return e
        }
    },
    Z2 = class extends Xh {
        constructor(e, t, i) {
            super(e), this.tree = t, this.stickyScrollProvider = i
        }
        onViewPointer(e) {
            if (qh(e.browserEvent.target) || Ut(e.browserEvent.target) || Rs(e.browserEvent.target) || e.browserEvent.isHandledByList) return;
            const t = e.element;
            if (!t) return super.onViewPointer(e);
            if (this.isSelectionRangeChangeEvent(e) || this.isSelectionSingleChangeEvent(e)) return super.onViewPointer(e);
            const i = e.browserEvent.target,
                s = i.classList.contains("monaco-tl-twistie") || i.classList.contains("monaco-icon-label") && i.classList.contains("folder-icon") && e.browserEvent.offsetX < 16,
                n = Ms(e.browserEvent.target);
            let r = !1;
            if (n ? r = !0 : typeof this.tree.expandOnlyOnTwistieClick == "function" ? r = this.tree.expandOnlyOnTwistieClick(t.element) : r = !!this.tree.expandOnlyOnTwistieClick, n) this.handleStickyScrollMouseEvent(e, t);
            else {
                if (r && !s && e.browserEvent.detail !== 2) return super.onViewPointer(e);
                if (!this.tree.expandOnDoubleClick && e.browserEvent.detail === 2) return super.onViewPointer(e)
            }
            if (t.collapsible && (!n || s)) {
                const o = this.tree.getNodeLocation(t),
                    a = e.browserEvent.altKey;
                if (this.tree.setFocus([o]), this.tree.toggleCollapsed(o, a), s) {
                    e.browserEvent.isHandledByList = !0;
                    return
                }
            }
            n || super.onViewPointer(e)
        }
        handleStickyScrollMouseEvent(e, t) {
            if (Ng(e.browserEvent.target) || Ig(e.browserEvent.target)) return;
            const i = this.stickyScrollProvider();
            if (!i) throw new Error("Sticky scroll controller not found");
            const s = this.list.indexOf(t),
                n = this.list.getElementTop(s),
                r = i.nodePositionTopBelowWidget(t);
            this.tree.scrollTop = n - r, this.list.domFocus(), this.list.setFocus([s]), this.list.setSelection([s])
        }
        onDoubleClick(e) {
            e.browserEvent.target.classList.contains("monaco-tl-twistie") || !this.tree.expandOnDoubleClick || e.browserEvent.isHandledByList || super.onDoubleClick(e)
        }
        onMouseDown(e) {
            const t = e.browserEvent.target;
            if (!Ps(t) && !Ms(t)) {
                super.onMouseDown(e);
                return
            }
        }
        onContextMenu(e) {
            const t = e.browserEvent.target;
            if (!Ps(t) && !Ms(t)) {
                super.onContextMenu(e);
                return
            }
        }
    },
    Q2 = class extends bt {
        constructor(e, t, i, s, n, r, o, a) {
            super(e, t, i, s, a), this.focusTrait = n, this.selectionTrait = r, this.anchorTrait = o
        }
        createMouseController(e) {
            return new Z2(this, e.tree, e.stickyScrollProvider)
        }
        splice(e, t, i = []) {
            if (super.splice(e, t, i), i.length === 0) return;
            const s = [],
                n = [];
            let r;
            i.forEach((o, a) => {
                this.focusTrait.has(o) && s.push(e + a), this.selectionTrait.has(o) && n.push(e + a), this.anchorTrait.has(o) && (r = e + a)
            }), s.length > 0 && super.setFocus(Sr([...super.getFocus(), ...s])), n.length > 0 && super.setSelection(Sr([...super.getSelection(), ...n])), typeof r == "number" && super.setAnchor(r)
        }
        setFocus(e, t, i = !1) {
            super.setFocus(e, t), i || this.focusTrait.set(e.map(s => this.element(s)), t)
        }
        setSelection(e, t, i = !1) {
            super.setSelection(e, t), i || this.selectionTrait.set(e.map(s => this.element(s)), t)
        }
        setAnchor(e, t = !1) {
            super.setAnchor(e), t || (typeof e > "u" ? this.anchorTrait.set([]) : this.anchorTrait.set([this.element(e)]))
        }
    },
    J2 = class {
        constructor(e, t, i, s, n = {}) {
            this._user = e, this._options = n, this.eventBufferer = new Lr, this.onDidChangeFindOpenState = A.None, this.onDidChangeStickyScrollFocused = A.None, this.disposables = new Y, this.onDidSwapModel = this.disposables.add(new L), this.onDidChangeModelRelay = this.disposables.add(new gs), this.onDidSpliceModelRelay = this.disposables.add(new gs), this.onDidChangeCollapseStateRelay = this.disposables.add(new gs), this.onDidChangeRenderNodeCountRelay = this.disposables.add(new gs), this.onDidChangeActiveNodesRelay = this.disposables.add(new gs), this._onWillRefilter = new L, this.onWillRefilter = this._onWillRefilter.event, this._onDidUpdateOptions = new L, this.onDidUpdateOptions = this._onDidUpdateOptions.event, this.modelDisposables = new Y, n.keyboardNavigationLabelProvider && (n.findWidgetEnabled ?? !0) && (this.findFilter = new B2(n.keyboardNavigationLabelProvider, n.filter, n.defaultFindVisibility), n = {
                ...n,
                filter: this.findFilter
            }, this.disposables.add(this.findFilter)), this.model = this.createModel(e, n), this.treeDelegate = new R2(i);
            const r = this.disposables.add(new P2(this.onDidChangeActiveNodesRelay.event)),
                o = new Dl;
            this.renderers = s.map(a => new O2(a, this.model, this.onDidChangeCollapseStateRelay.event, r, o, n));
            for (const a of this.renderers) this.disposables.add(a);
            if (this.focus = new ga(() => this.view.getFocusedElements()[0], n.identityProvider), this.selection = new ga(() => this.view.getSelectedElements()[0], n.identityProvider), this.anchor = new ga(() => this.view.getAnchorElement(), n.identityProvider), this.view = new Q2(e, t, this.treeDelegate, this.renderers, this.focus, this.selection, this.anchor, {
                    ...L2(() => this.model, this.disposables, n),
                    tree: this,
                    stickyScrollProvider: () => this.stickyScrollController
                }), this.setupModel(this.model), n.keyboardSupport !== !1) {
                const a = A.chain(this.view.onKeyDown, c => c.filter(h => !Ut(h.target)).map(h => new Me(h)));
                A.chain(a, c => c.filter(h => h.keyCode === 15))(this.onLeftArrow, this, this.disposables), A.chain(a, c => c.filter(h => h.keyCode === 17))(this.onRightArrow, this, this.disposables), A.chain(a, c => c.filter(h => h.keyCode === 10))(this.onSpace, this, this.disposables)
            }
            if ((n.findWidgetEnabled ?? !0) && n.keyboardNavigationLabelProvider && n.contextViewProvider) {
                const a = {
                    styles: n.findWidgetStyles,
                    defaultFindMode: n.defaultFindMode,
                    defaultFindMatchType: n.defaultFindMatchType,
                    showNotFoundMessage: n.showNotFoundMessage
                };
                this.findController = this.disposables.add(new V2(this, this.findFilter, n.contextViewProvider, a)), this.focusNavigationFilter = c => this.findController.shouldAllowFocus(c), this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState, this.onDidChangeFindMode = this.findController.onDidChangeMode, this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType
            } else this.onDidChangeFindMode = A.None, this.onDidChangeFindMatchType = A.None;
            n.enableStickyScroll && (this.stickyScrollController = new Ld(this, this.model, this.view, this.renderers, this.treeDelegate, n), this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus), this.styleElement = Es(this.view.getHTMLElement()), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === "always")
        }
        get onDidScroll() {
            return this.view.onDidScroll
        }
        get onDidChangeFocus() {
            return this.eventBufferer.wrapEvent(this.focus.onDidChange)
        }
        get onDidChangeSelection() {
            return this.eventBufferer.wrapEvent(this.selection.onDidChange)
        }
        get onMouseClick() {
            return A.map(this.view.onMouseClick, es)
        }
        get onMouseDblClick() {
            return A.filter(A.map(this.view.onMouseDblClick, es), e => e.target !== Zi.Filter)
        }
        get onMouseOver() {
            return A.map(this.view.onMouseOver, es)
        }
        get onMouseOut() {
            return A.map(this.view.onMouseOut, es)
        }
        get onContextMenu() {
            return A.any(A.filter(A.map(this.view.onContextMenu, X2), e => !e.isStickyScroll), this.stickyScrollController?.onContextMenu ?? A.None)
        }
        get onTap() {
            return A.map(this.view.onTap, es)
        }
        get onPointer() {
            return A.map(this.view.onPointer, es)
        }
        get onKeyDown() {
            return this.view.onKeyDown
        }
        get onKeyUp() {
            return this.view.onKeyUp
        }
        get onKeyPress() {
            return this.view.onKeyPress
        }
        get onDidFocus() {
            return this.view.onDidFocus
        }
        get onDidBlur() {
            return this.view.onDidBlur
        }
        get onDidChangeModel() {
            return A.any(this.onDidChangeModelRelay.event, this.onDidSwapModel.event)
        }
        get onDidChangeCollapseState() {
            return this.onDidChangeCollapseStateRelay.event
        }
        get onDidChangeRenderNodeCount() {
            return this.onDidChangeRenderNodeCountRelay.event
        }
        get findMode() {
            return this.findController?.mode ?? 0
        }
        set findMode(e) {
            this.findController && (this.findController.mode = e)
        }
        get findMatchType() {
            return this.findController?.matchType ?? 0
        }
        set findMatchType(e) {
            this.findController && (this.findController.matchType = e)
        }
        get onDidChangeFindPattern() {
            return this.findController ? this.findController.onDidChangePattern : A.None
        }
        get expandOnDoubleClick() {
            return typeof this._options.expandOnDoubleClick > "u" ? !0 : this._options.expandOnDoubleClick
        }
        get expandOnlyOnTwistieClick() {
            return typeof this._options.expandOnlyOnTwistieClick > "u" ? !0 : this._options.expandOnlyOnTwistieClick
        }
        get onDidDispose() {
            return this.view.onDidDispose
        }
        updateOptions(e = {}) {
            this._options = {
                ...this._options,
                ...e
            };
            for (const t of this.renderers) t.updateOptions(e);
            this.view.updateOptions(this._options), this.findController?.updateOptions(e), this.updateStickyScroll(e), this._onDidUpdateOptions.fire(this._options), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === "always")
        }
        get options() {
            return this._options
        }
        updateStickyScroll(e) {
            !this.stickyScrollController && this._options.enableStickyScroll ? (this.stickyScrollController = new Ld(this, this.model, this.view, this.renderers, this.treeDelegate, this._options), this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus) : this.stickyScrollController && !this._options.enableStickyScroll && (this.onDidChangeStickyScrollFocused = A.None, this.stickyScrollController.dispose(), this.stickyScrollController = void 0), this.stickyScrollController?.updateOptions(e)
        }
        updateWidth(e) {
            const t = this.model.getListIndex(e);
            t !== -1 && this.view.updateWidth(t)
        }
        getHTMLElement() {
            return this.view.getHTMLElement()
        }
        get contentHeight() {
            return this.view.contentHeight
        }
        get contentWidth() {
            return this.view.contentWidth
        }
        get onDidChangeContentHeight() {
            return this.view.onDidChangeContentHeight
        }
        get onDidChangeContentWidth() {
            return this.view.onDidChangeContentWidth
        }
        get scrollTop() {
            return this.view.scrollTop
        }
        set scrollTop(e) {
            this.view.scrollTop = e
        }
        get scrollLeft() {
            return this.view.scrollLeft
        }
        set scrollLeft(e) {
            this.view.scrollLeft = e
        }
        get scrollHeight() {
            return this.view.scrollHeight
        }
        get renderHeight() {
            return this.view.renderHeight
        }
        get firstVisibleElement() {
            let e = this.view.firstVisibleIndex;
            return this.stickyScrollController && (e += this.stickyScrollController.count), e < 0 || e >= this.view.length ? void 0 : this.view.element(e).element
        }
        get lastVisibleElement() {
            const e = this.view.lastVisibleIndex;
            return this.view.element(e).element
        }
        get ariaLabel() {
            return this.view.ariaLabel
        }
        set ariaLabel(e) {
            this.view.ariaLabel = e
        }
        get selectionSize() {
            return this.selection.getNodes().length
        }
        domFocus() {
            this.stickyScrollController?.focusedLast() ? this.stickyScrollController.domFocus() : this.view.domFocus()
        }
        isDOMFocused() {
            return ks(this.getHTMLElement())
        }
        layout(e, t) {
            this.view.layout(e, t)
        }
        style(e) {
            const t = `.${this.view.domId}`,
                i = [];
            e.treeIndentGuidesStroke && (i.push(`.monaco-list${t}:hover .monaco-tl-indent > .indent-guide, .monaco-list${t}.always .monaco-tl-indent > .indent-guide  { border-color: ${e.treeInactiveIndentGuidesStroke}; }`), i.push(`.monaco-list${t} .monaco-tl-indent > .indent-guide.active { border-color: ${e.treeIndentGuidesStroke}; }`));
            const s = e.treeStickyScrollBackground ?? e.listBackground;
            s && (i.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container { background-color: ${s}; }`), i.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-row { background-color: ${s}; }`)), e.treeStickyScrollBorder && i.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container { border-bottom: 1px solid ${e.treeStickyScrollBorder}; }`), e.treeStickyScrollShadow && i.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-container-shadow { box-shadow: ${e.treeStickyScrollShadow} 0 6px 6px -6px inset; height: 3px; }`), e.listFocusForeground && (i.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), i.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { color: inherit; }`));
            const n = It(e.listFocusAndSelectionOutline, It(e.listSelectionOutline, e.listFocusOutline ?? ""));
            n && (i.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused.selected { outline: 1px solid ${n}; outline-offset: -1px;}`), i.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused.selected { outline: inherit;}`)), e.listFocusOutline && (i.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }`), i.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { outline: inherit; }`), i.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.passive-focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }`), i.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused.sticky-scroll-focused .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`), i.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused:not(.sticky-scroll-focused) .monaco-tree-sticky-container .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`)), this.styleElement.textContent = i.join(`
`), this.view.style(e)
        }
        getParentElement(e) {
            const t = this.model.getParentNodeLocation(e);
            return this.model.getNode(t).element
        }
        getFirstElementChild(e) {
            return this.model.getFirstElementChild(e)
        }
        getNode(e) {
            return this.model.getNode(e)
        }
        getNodeLocation(e) {
            return this.model.getNodeLocation(e)
        }
        collapse(e, t = !1) {
            return this.model.setCollapsed(e, !0, t)
        }
        expand(e, t = !1) {
            return this.model.setCollapsed(e, !1, t)
        }
        toggleCollapsed(e, t = !1) {
            return this.model.setCollapsed(e, void 0, t)
        }
        expandAll() {
            this.model.setCollapsed(this.model.rootRef, !1, !0)
        }
        collapseAll() {
            this.model.setCollapsed(this.model.rootRef, !0, !0)
        }
        isCollapsible(e) {
            return this.model.isCollapsible(e)
        }
        setCollapsible(e, t) {
            return this.model.setCollapsible(e, t)
        }
        isCollapsed(e) {
            return this.model.isCollapsed(e)
        }
        expandTo(e) {
            this.model.expandTo(e)
        }
        triggerTypeNavigation() {
            this.view.triggerTypeNavigation()
        }
        openFind() {
            this.findController?.open()
        }
        closeFind() {
            this.findController?.close()
        }
        refilter() {
            this._onWillRefilter.fire(void 0), this.model.refilter()
        }
        setAnchor(e) {
            if (typeof e > "u") return this.view.setAnchor(void 0);
            this.eventBufferer.bufferEvents(() => {
                const t = this.model.getNode(e);
                this.anchor.set([t]);
                const i = this.model.getListIndex(e);
                i > -1 && this.view.setAnchor(i, !0)
            })
        }
        getAnchor() {
            return this.anchor.get().at(0)
        }
        setSelection(e, t) {
            this.eventBufferer.bufferEvents(() => {
                const i = e.map(n => this.model.getNode(n));
                this.selection.set(i, t);
                const s = e.map(n => this.model.getListIndex(n)).filter(n => n > -1);
                this.view.setSelection(s, t, !0)
            })
        }
        getSelection() {
            return this.selection.get()
        }
        setFocus(e, t) {
            this.eventBufferer.bufferEvents(() => {
                const i = e.map(n => this.model.getNode(n));
                this.focus.set(i, t);
                const s = e.map(n => this.model.getListIndex(n)).filter(n => n > -1);
                this.view.setFocus(s, t, !0)
            })
        }
        focusNext(e = 1, t = !1, i, s = hi(i) && i.altKey ? void 0 : this.focusNavigationFilter) {
            this.view.focusNext(e, t, i, s)
        }
        focusPrevious(e = 1, t = !1, i, s = hi(i) && i.altKey ? void 0 : this.focusNavigationFilter) {
            this.view.focusPrevious(e, t, i, s)
        }
        focusNextPage(e, t = hi(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
            return this.view.focusNextPage(e, t)
        }
        focusPreviousPage(e, t = hi(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
            return this.view.focusPreviousPage(e, t, () => this.stickyScrollController?.height ?? 0)
        }
        focusLast(e, t = hi(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
            this.view.focusLast(e, t)
        }
        focusFirst(e, t = hi(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
            this.view.focusFirst(e, t)
        }
        getFocus() {
            return this.focus.get()
        }
        getStickyScrollFocus() {
            const e = this.stickyScrollController?.getFocus();
            return e !== void 0 ? [e] : []
        }
        getFocusedPart() {
            return this.stickyScrollController?.focusedLast() ? 1 : 0
        }
        reveal(e, t) {
            this.model.expandTo(e);
            const i = this.model.getListIndex(e);
            if (i !== -1)
                if (!this.stickyScrollController) this.view.reveal(i, t);
                else {
                    const s = this.stickyScrollController.nodePositionTopBelowWidget(this.getNode(e));
                    this.view.reveal(i, t, s)
                }
        }
        getRelativeTop(e) {
            const t = this.model.getListIndex(e);
            if (t === -1) return null;
            const i = this.stickyScrollController?.getNode(this.getNode(e));
            return this.view.getRelativeTop(t, i?.position ?? this.stickyScrollController?.height)
        }
        getViewState(e = this.options.identityProvider) {
            if (!e) throw new nt(this._user, "Can't get tree view state without an identity provider");
            const t = r => e.getId(r).toString(),
                i = M2.empty(this.scrollTop);
            for (const r of this.getFocus()) i.focus.add(t(r));
            for (const r of this.getSelection()) i.selection.add(t(r));
            const s = this.model.getNode(),
                n = [s];
            for (; n.length > 0;) {
                const r = n.pop();
                r !== s && r.collapsible && (i.expanded[t(r.element)] = r.collapsed ? 0 : 1), ml(n, n.length, r.children)
            }
            return i
        }
        onLeftArrow(e) {
            e.preventDefault(), e.stopPropagation();
            const t = this.view.getFocusedElements();
            if (t.length === 0) return;
            const i = t[0],
                s = this.model.getNodeLocation(i);
            if (!this.model.setCollapsed(s, !0)) {
                const r = this.model.getParentNodeLocation(s);
                if (!r) return;
                const o = this.model.getListIndex(r);
                this.view.reveal(o), this.view.setFocus([o])
            }
        }
        onRightArrow(e) {
            e.preventDefault(), e.stopPropagation();
            const t = this.view.getFocusedElements();
            if (t.length === 0) return;
            const i = t[0],
                s = this.model.getNodeLocation(i);
            if (!this.model.setCollapsed(s, !1)) {
                if (!i.children.some(a => a.visible)) return;
                const [r] = this.view.getFocus(), o = r + 1;
                this.view.reveal(o), this.view.setFocus([o])
            }
        }
        onSpace(e) {
            e.preventDefault(), e.stopPropagation();
            const t = this.view.getFocusedElements();
            if (t.length === 0) return;
            const i = t[0],
                s = this.model.getNodeLocation(i),
                n = e.browserEvent.altKey;
            this.model.setCollapsed(s, void 0, n)
        }
        setupModel(e) {
            this.modelDisposables.clear(), this.modelDisposables.add(e.onDidSpliceRenderedNodes(({
                start: n,
                deleteCount: r,
                elements: o
            }) => this.view.splice(n, r, o)));
            const t = A.forEach(e.onDidSpliceModel, n => {
                this.eventBufferer.bufferEvents(() => {
                    this.focus.onDidModelSplice(n), this.selection.onDidModelSplice(n)
                })
            }, this.modelDisposables);
            t(() => null, null, this.modelDisposables);
            const i = this.modelDisposables.add(new L),
                s = this.modelDisposables.add(new Zr(0));
            this.modelDisposables.add(A.any(t, this.focus.onDidChange, this.selection.onDidChange)(() => {
                s.trigger(() => {
                    const n = new Set;
                    for (const r of this.focus.getNodes()) n.add(r);
                    for (const r of this.selection.getNodes()) n.add(r);
                    i.fire([...n.values()])
                })
            })), this.onDidChangeActiveNodesRelay.input = i.event, this.onDidChangeModelRelay.input = A.signal(e.onDidSpliceModel), this.onDidChangeCollapseStateRelay.input = e.onDidChangeCollapseState, this.onDidChangeRenderNodeCountRelay.input = e.onDidChangeRenderNodeCount, this.onDidSpliceModelRelay.input = e.onDidSpliceModel
        }
        navigate(e) {
            return new e4(this.view, this.model, e)
        }
        dispose() {
            Ke(this.disposables), this.stickyScrollController?.dispose(), this.view.dispose(), this.modelDisposables.dispose()
        }
    },
    e4 = class {
        constructor(e, t, i) {
            this.view = e, this.model = t, i ? this.index = this.model.getListIndex(i) : this.index = -1
        }
        current() {
            return this.index < 0 || this.index >= this.view.length ? null : this.view.element(this.index).element
        }
        previous() {
            return this.index--, this.current()
        }
        next() {
            return this.index++, this.current()
        }
        first() {
            return this.index = 0, this.current()
        }
        last() {
            return this.index = this.view.length - 1, this.current()
        }
    },
    t4 = class {
        constructor(e, t = {}) {
            this.user = e, this.rootRef = null, this.nodes = new Map, this.nodesByIdentity = new Map, this.model = new A2(e, null, t), this.onDidSpliceModel = this.model.onDidSpliceModel, this.onDidSpliceRenderedNodes = this.model.onDidSpliceRenderedNodes, this.onDidChangeCollapseState = this.model.onDidChangeCollapseState, this.onDidChangeRenderNodeCount = this.model.onDidChangeRenderNodeCount, t.sorter && (this.sorter = {
                compare(i, s) {
                    return t.sorter.compare(i.element, s.element)
                }
            }), this.identityProvider = t.identityProvider
        }
        get size() {
            return this.nodes.size
        }
        setChildren(e, t = Ie.empty(), i = {}) {
            const s = this.getElementLocation(e);
            this._setChildren(s, this.preserveCollapseState(t), i)
        }
        _setChildren(e, t = Ie.empty(), i) {
            const s = new Set,
                n = new Set,
                r = a => {
                    if (a.element === null) return;
                    const c = a;
                    if (s.add(c.element), this.nodes.set(c.element, c), this.identityProvider) {
                        const h = this.identityProvider.getId(c.element).toString();
                        n.add(h), this.nodesByIdentity.set(h, c)
                    }
                    i.onDidCreateNode?.(c)
                },
                o = a => {
                    if (a.element === null) return;
                    const c = a;
                    if (s.has(c.element) || this.nodes.delete(c.element), this.identityProvider) {
                        const h = this.identityProvider.getId(c.element).toString();
                        n.has(h) || this.nodesByIdentity.delete(h)
                    }
                    i.onDidDeleteNode?.(c)
                };
            this.model.splice([...e, 0], Number.MAX_VALUE, t, {
                ...i,
                onDidCreateNode: r,
                onDidDeleteNode: o
            })
        }
        preserveCollapseState(e = Ie.empty()) {
            return this.sorter && (e = [...e].sort(this.sorter.compare.bind(this.sorter))), Ie.map(e, t => {
                let i = this.nodes.get(t.element);
                if (!i && this.identityProvider) {
                    const r = this.identityProvider.getId(t.element).toString();
                    i = this.nodesByIdentity.get(r)
                }
                if (!i) {
                    let r;
                    return typeof t.collapsed > "u" ? r = void 0 : t.collapsed === Lt.Collapsed || t.collapsed === Lt.PreserveOrCollapsed ? r = !0 : t.collapsed === Lt.Expanded || t.collapsed === Lt.PreserveOrExpanded ? r = !1 : r = !!t.collapsed, {
                        ...t,
                        children: this.preserveCollapseState(t.children),
                        collapsed: r
                    }
                }
                const s = typeof t.collapsible == "boolean" ? t.collapsible : i.collapsible;
                let n;
                return typeof t.collapsed > "u" || t.collapsed === Lt.PreserveOrCollapsed || t.collapsed === Lt.PreserveOrExpanded ? n = i.collapsed : t.collapsed === Lt.Collapsed ? n = !0 : t.collapsed === Lt.Expanded ? n = !1 : n = !!t.collapsed, {
                    ...t,
                    collapsible: s,
                    collapsed: n,
                    children: this.preserveCollapseState(t.children)
                }
            })
        }
        rerender(e) {
            const t = this.getElementLocation(e);
            this.model.rerender(t)
        }
        resort(e = null, t = !0) {
            if (!this.sorter) return;
            const i = this.getElementLocation(e),
                s = this.model.getNode(i);
            this._setChildren(i, this.resortChildren(s, t), {})
        }
        resortChildren(e, t, i = !0) {
            let s = [...e.children];
            return (t || i) && (s = s.sort(this.sorter.compare.bind(this.sorter))), Ie.map(s, n => ({
                element: n.element,
                collapsible: n.collapsible,
                collapsed: n.collapsed,
                children: this.resortChildren(n, t, !1)
            }))
        }
        getFirstElementChild(e = null) {
            const t = this.getElementLocation(e);
            return this.model.getFirstElementChild(t)
        }
        getLastElementAncestor(e = null) {
            const t = this.getElementLocation(e);
            return this.model.getLastElementAncestor(t)
        }
        has(e) {
            return this.nodes.has(e)
        }
        getListIndex(e) {
            const t = this.getElementLocation(e);
            return this.model.getListIndex(t)
        }
        getListRenderCount(e) {
            const t = this.getElementLocation(e);
            return this.model.getListRenderCount(t)
        }
        isCollapsible(e) {
            const t = this.getElementLocation(e);
            return this.model.isCollapsible(t)
        }
        setCollapsible(e, t) {
            const i = this.getElementLocation(e);
            return this.model.setCollapsible(i, t)
        }
        isCollapsed(e) {
            const t = this.getElementLocation(e);
            return this.model.isCollapsed(t)
        }
        setCollapsed(e, t, i) {
            const s = this.getElementLocation(e);
            return this.model.setCollapsed(s, t, i)
        }
        expandTo(e) {
            const t = this.getElementLocation(e);
            this.model.expandTo(t)
        }
        refilter() {
            this.model.refilter()
        }
        getNode(e = null) {
            if (e === null) return this.model.getNode(this.model.rootRef);
            const t = this.nodes.get(e);
            if (!t) throw new nt(this.user, `Tree element not found: ${e}`);
            return t
        }
        getNodeLocation(e) {
            return e.element
        }
        getParentNodeLocation(e) {
            if (e === null) throw new nt(this.user, "Invalid getParentNodeLocation call");
            const t = this.nodes.get(e);
            if (!t) throw new nt(this.user, `Tree element not found: ${e}`);
            const i = this.model.getNodeLocation(t),
                s = this.model.getParentNodeLocation(i);
            return this.model.getNode(s).element
        }
        getElementLocation(e) {
            if (e === null) return [];
            const t = this.nodes.get(e);
            if (!t) throw new nt(this.user, `Tree element not found: ${e}`);
            return this.model.getNodeLocation(t)
        }
    },
    i4 = class extends J2 {
        constructor(e, t, i, s, n, r = {}) {
            super(e, t, i, s, r), this.user = e, this.dataSource = n, this.nodesByIdentity = new Map, this.identityProvider = r.identityProvider
        }
        getInput() {
            return this.input
        }
        setInput(e, t) {
            if (t && !this.identityProvider) throw new nt(this.user, "Can't restore tree view state without an identity provider");
            if (this.input = e, !e) {
                this.nodesByIdentity.clear(), this.model.setChildren(null, Ie.empty());
                return
            }
            if (!t) {
                this._refresh(e);
                return
            }
            const i = [],
                s = [],
                n = o => {
                    const a = this.identityProvider.getId(o).toString();
                    return !t.expanded[a]
                },
                r = o => {
                    const a = this.identityProvider.getId(o.element).toString();
                    t.focus.has(a) && i.push(o.element), t.selection.has(a) && s.push(o.element)
                };
            this._refresh(e, n, r), this.setFocus(i), this.setSelection(s), t && typeof t.scrollTop == "number" && (this.scrollTop = t.scrollTop)
        }
        updateChildren(e = this.input) {
            if (typeof this.input > "u") throw new nt(this.user, "Tree input not set");
            let t;
            this.identityProvider && (t = i => {
                const s = this.identityProvider.getId(i).toString(),
                    n = this.nodesByIdentity.get(s);
                if (n) return n.collapsed
            }), this._refresh(e, t)
        }
        resort(e = this.input, t = !0) {
            this.model.resort(e === this.input ? null : e, t)
        }
        refresh(e) {
            if (e === void 0) {
                this.view.rerender();
                return
            }
            this.model.rerender(e)
        }
        _refresh(e, t, i) {
            let s;
            if (this.identityProvider) {
                const n = new Set,
                    r = i;
                i = o => {
                    const a = this.identityProvider.getId(o.element).toString();
                    n.add(a), this.nodesByIdentity.set(a, o), r?.(o)
                }, s = o => {
                    const a = this.identityProvider.getId(o.element).toString();
                    n.has(a) || this.nodesByIdentity.delete(a)
                }
            }
            this.model.setChildren(e === this.input ? null : e, this.iterate(e, t).elements, {
                onDidCreateNode: i,
                onDidDeleteNode: s
            })
        }
        iterate(e, t) {
            const i = [...this.dataSource.getChildren(e)];
            return {
                elements: Ie.map(i, n => {
                    const {
                        elements: r,
                        size: o
                    } = this.iterate(n, t), a = this.dataSource.hasChildren ? this.dataSource.hasChildren(n) : void 0, c = o === 0 ? void 0 : t && t(n);
                    return {
                        element: n,
                        children: r,
                        collapsible: a,
                        collapsed: c
                    }
                }),
                size: i.length
            }
        }
        createModel(e, t) {
            return new t4(e, t)
        }
    },
    s4 = "vscode:contextmenu",
    n4 = "vscode:onCloseContextMenu",
    ts = globalThis.vscode,
    ke = ts.ipcRenderer,
    Tv = ts.ipcMessagePort,
    r4 = ts.webFrame,
    xv = ts.process,
    Av = ts.context,
    Nv = ts.webUtils,
    o4 = 0;

function a4(e, t, i) {
    const s = [],
        n = o4++,
        r = `vscode:onContextMenu${n}`,
        o = (a, c, h) => {
            s[c].click?.(h)
        };
    ke.once(r, o), ke.once(n4, (a, c) => {
        c === n && (ke.removeListener(r, o), i?.())
    }), ke.send(s4, n, e.map(a => Rd(a, s)), r, t)
}

function Rd(e, t) {
    const i = {
        id: t.length,
        label: e.label,
        type: e.type,
        accelerator: e.accelerator,
        checked: e.checked,
        enabled: typeof e.enabled == "boolean" ? e.enabled : !0,
        visible: typeof e.visible == "boolean" ? e.visible : !0
    };
    return t.push(e), Array.isArray(e.submenu) && (i.submenu = e.submenu.map(s => Rd(s, t))), i
}
var Rt;
(e => {
    e.serviceIds = new Map, e.DI_TARGET = "$di$target", e.DI_DEPENDENCIES = "$di$dependencies";

    function t(i) {
        return i[e.DI_DEPENDENCIES] || []
    }
    e.getServiceDependencies = t
})(Rt || (Rt = {}));
var Iv = sr("instantiationService");

function l4(e, t, i) {
    t[Rt.DI_TARGET] === t ? t[Rt.DI_DEPENDENCIES].push({
        id: e,
        index: i
    }) : (t[Rt.DI_DEPENDENCIES] = [{
        id: e,
        index: i
    }], t[Rt.DI_TARGET] = t)
}

function sr(e) {
    if (Rt.serviceIds.has(e)) return Rt.serviceIds.get(e);
    const t = function(i, s, n) {
        if (arguments.length !== 3) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
        l4(t, i, n)
    };
    return t.toString = () => e, Rt.serviceIds.set(e, t), t
}
var c4 = "diagnosticsService",
    Lv = sr(c4);

function nr(e) {
    return !!e.hostName && !!e.errorMessage
}
var h4 = class {
        constructor() {
            this._value = "", this._pos = 0
        }
        reset(e) {
            return this._value = e, this._pos = 0, this
        }
        next() {
            return this._pos += 1, this
        }
        hasNext() {
            return this._pos < this._value.length - 1
        }
        cmp(e) {
            const t = e.charCodeAt(0),
                i = this._value.charCodeAt(this._pos);
            return t - i
        }
        value() {
            return this._value[this._pos]
        }
    },
    d4 = class {
        constructor(e = !0) {
            this._caseSensitive = e
        }
        reset(e) {
            return this._value = e, this._from = 0, this._to = 0, this.next()
        }
        hasNext() {
            return this._to < this._value.length
        }
        next() {
            this._from = this._to;
            let e = !0;
            for (; this._to < this._value.length; this._to++)
                if (this._value.charCodeAt(this._to) === 46)
                    if (e) this._from++;
                    else break;
            else e = !1;
            return this
        }
        cmp(e) {
            return this._caseSensitive ? Kr(e, this._value, 0, e.length, this._from, this._to) : Hi(e, this._value, 0, e.length, this._from, this._to)
        }
        value() {
            return this._value.substring(this._from, this._to)
        }
    },
    Md = class {
        constructor(e = !0, t = !0) {
            this._splitOnBackslash = e, this._caseSensitive = t
        }
        reset(e) {
            this._from = 0, this._to = 0, this._value = e, this._valueLen = e.length;
            for (let t = e.length - 1; t >= 0; t--, this._valueLen--) {
                const i = this._value.charCodeAt(t);
                if (!(i === 47 || this._splitOnBackslash && i === 92)) break
            }
            return this.next()
        }
        hasNext() {
            return this._to < this._valueLen
        }
        next() {
            this._from = this._to;
            let e = !0;
            for (; this._to < this._valueLen; this._to++) {
                const t = this._value.charCodeAt(this._to);
                if (t === 47 || this._splitOnBackslash && t === 92)
                    if (e) this._from++;
                    else break;
                else e = !1
            }
            return this
        }
        cmp(e) {
            return this._caseSensitive ? Kr(e, this._value, 0, e.length, this._from, this._to) : Hi(e, this._value, 0, e.length, this._from, this._to)
        }
        value() {
            return this._value.substring(this._from, this._to)
        }
    },
    u4 = class {
        constructor(e, t) {
            this._ignorePathCasing = e, this._ignoreQueryAndFragment = t, this._states = [], this._stateIdx = 0
        }
        reset(e) {
            return this._value = e, this._states = [], this._value.scheme && this._states.push(1), this._value.authority && this._states.push(2), this._value.path && (this._pathIterator = new Md(!1, !this._ignorePathCasing(e)), this._pathIterator.reset(e.path), this._pathIterator.value() && this._states.push(3)), this._ignoreQueryAndFragment(e) || (this._value.query && this._states.push(4), this._value.fragment && this._states.push(5)), this._stateIdx = 0, this
        }
        next() {
            return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() ? this._pathIterator.next() : this._stateIdx += 1, this
        }
        hasNext() {
            return this._states[this._stateIdx] === 3 && this._pathIterator.hasNext() || this._stateIdx < this._states.length - 1
        }
        cmp(e) {
            if (this._states[this._stateIdx] === 1) return jl(e, this._value.scheme);
            if (this._states[this._stateIdx] === 2) return jl(e, this._value.authority);
            if (this._states[this._stateIdx] === 3) return this._pathIterator.cmp(e);
            if (this._states[this._stateIdx] === 4) return Vr(e, this._value.query);
            if (this._states[this._stateIdx] === 5) return Vr(e, this._value.fragment);
            throw new Error
        }
        value() {
            if (this._states[this._stateIdx] === 1) return this._value.scheme;
            if (this._states[this._stateIdx] === 2) return this._value.authority;
            if (this._states[this._stateIdx] === 3) return this._pathIterator.value();
            if (this._states[this._stateIdx] === 4) return this._value.query;
            if (this._states[this._stateIdx] === 5) return this._value.fragment;
            throw new Error
        }
    },
    Pd = class za {
        static wrap(t) {
            return t === void 0 ? za.Val : t
        }
        static unwrap(t) {
            return t === za.Val ? void 0 : t
        }
    };
Pd.Val = Symbol("undefined_placeholder");
var _i = Pd,
    rr = class {
        constructor() {
            this.height = 1
        }
        isEmpty() {
            return !this.left && !this.mid && !this.right && this.value === void 0
        }
        rotateLeft() {
            const e = this.right;
            return this.right = e.left, e.left = this, this.updateHeight(), e.updateHeight(), e
        }
        rotateRight() {
            const e = this.left;
            return this.left = e.right, e.right = this, this.updateHeight(), e.updateHeight(), e
        }
        updateHeight() {
            this.height = 1 + Math.max(this.heightLeft, this.heightRight)
        }
        balanceFactor() {
            return this.heightRight - this.heightLeft
        }
        get heightLeft() {
            return this.left?.height ?? 0
        }
        get heightRight() {
            return this.right?.height ?? 0
        }
    },
    ma = class en {
        static forUris(t = () => !1, i = () => !1) {
            return new en(new u4(t, i))
        }
        static forPaths(t = !1) {
            return new en(new Md(void 0, !t))
        }
        static forStrings() {
            return new en(new h4)
        }
        static forConfigKeys() {
            return new en(new d4)
        }
        constructor(t) {
            this._iter = t
        }
        clear() {
            this._root = void 0
        }
        fill(t, i) {
            if (i) {
                const s = i.slice(0);
                gl(s);
                for (const n of s) this.set(n, t)
            } else {
                const s = t.slice(0);
                gl(s);
                for (const n of s) this.set(n[0], n[1])
            }
        }
        set(t, i) {
            const s = this._iter.reset(t);
            let n;
            this._root || (this._root = new rr, this._root.segment = s.value());
            const r = [];
            for (n = this._root;;) {
                const a = s.cmp(n.segment);
                if (a > 0) n.left || (n.left = new rr, n.left.segment = s.value()), r.push([-1, n]), n = n.left;
                else if (a < 0) n.right || (n.right = new rr, n.right.segment = s.value()), r.push([1, n]), n = n.right;
                else if (s.hasNext()) s.next(), n.mid || (n.mid = new rr, n.mid.segment = s.value()), r.push([0, n]), n = n.mid;
                else break
            }
            const o = _i.unwrap(n.value);
            n.value = _i.wrap(i), n.key = t;
            for (let a = r.length - 1; a >= 0; a--) {
                const c = r[a][1];
                c.updateHeight();
                const h = c.balanceFactor();
                if (h < -1 || h > 1) {
                    const d = r[a][0],
                        u = r[a + 1][0];
                    if (d === 1 && u === 1) r[a][1] = c.rotateLeft();
                    else if (d === -1 && u === -1) r[a][1] = c.rotateRight();
                    else if (d === 1 && u === -1) c.right = r[a + 1][1] = r[a + 1][1].rotateRight(), r[a][1] = c.rotateLeft();
                    else if (d === -1 && u === 1) c.left = r[a + 1][1] = r[a + 1][1].rotateLeft(), r[a][1] = c.rotateRight();
                    else throw new Error;
                    if (a > 0) switch (r[a - 1][0]) {
                        case -1:
                            r[a - 1][1].left = r[a][1];
                            break;
                        case 1:
                            r[a - 1][1].right = r[a][1];
                            break;
                        case 0:
                            r[a - 1][1].mid = r[a][1];
                            break
                    } else this._root = r[0][1]
                }
            }
            return o
        }
        get(t) {
            return _i.unwrap(this._getNode(t)?.value)
        }
        _getNode(t) {
            const i = this._iter.reset(t);
            let s = this._root;
            for (; s;) {
                const n = i.cmp(s.segment);
                if (n > 0) s = s.left;
                else if (n < 0) s = s.right;
                else if (i.hasNext()) i.next(), s = s.mid;
                else break
            }
            return s
        }
        has(t) {
            const i = this._getNode(t);
            return !(i?.value === void 0 && i?.mid === void 0)
        }
        delete(t) {
            return this._delete(t, !1)
        }
        deleteSuperstr(t) {
            return this._delete(t, !0)
        }
        _delete(t, i) {
            const s = this._iter.reset(t),
                n = [];
            let r = this._root;
            for (; r;) {
                const o = s.cmp(r.segment);
                if (o > 0) n.push([-1, r]), r = r.left;
                else if (o < 0) n.push([1, r]), r = r.right;
                else if (s.hasNext()) s.next(), n.push([0, r]), r = r.mid;
                else break
            }
            if (r) {
                if (i ? (r.left = void 0, r.mid = void 0, r.right = void 0, r.height = 1) : (r.key = void 0, r.value = void 0), !r.mid && !r.value)
                    if (r.left && r.right) {
                        const o = this._min(r.right);
                        if (o.key) {
                            const {
                                key: a,
                                value: c,
                                segment: h
                            } = o;
                            this._delete(o.key, !1), r.key = a, r.value = c, r.segment = h
                        }
                    } else {
                        const o = r.left ?? r.right;
                        if (n.length > 0) {
                            const [a, c] = n[n.length - 1];
                            switch (a) {
                                case -1:
                                    c.left = o;
                                    break;
                                case 0:
                                    c.mid = o;
                                    break;
                                case 1:
                                    c.right = o;
                                    break
                            }
                        } else this._root = o
                    } for (let o = n.length - 1; o >= 0; o--) {
                    const a = n[o][1];
                    a.updateHeight();
                    const c = a.balanceFactor();
                    if (c > 1 ? (a.right.balanceFactor() >= 0 || (a.right = a.right.rotateRight()), n[o][1] = a.rotateLeft()) : c < -1 && (a.left.balanceFactor() <= 0 || (a.left = a.left.rotateLeft()), n[o][1] = a.rotateRight()), o > 0) switch (n[o - 1][0]) {
                        case -1:
                            n[o - 1][1].left = n[o][1];
                            break;
                        case 1:
                            n[o - 1][1].right = n[o][1];
                            break;
                        case 0:
                            n[o - 1][1].mid = n[o][1];
                            break
                    } else this._root = n[0][1]
                }
            }
        }
        _min(t) {
            for (; t.left;) t = t.left;
            return t
        }
        findSubstr(t) {
            const i = this._iter.reset(t);
            let s = this._root,
                n;
            for (; s;) {
                const r = i.cmp(s.segment);
                if (r > 0) s = s.left;
                else if (r < 0) s = s.right;
                else if (i.hasNext()) i.next(), n = _i.unwrap(s.value) || n, s = s.mid;
                else break
            }
            return s && _i.unwrap(s.value) || n
        }
        findSuperstr(t) {
            return this._findSuperstrOrElement(t, !1)
        }
        _findSuperstrOrElement(t, i) {
            const s = this._iter.reset(t);
            let n = this._root;
            for (; n;) {
                const r = s.cmp(n.segment);
                if (r > 0) n = n.left;
                else if (r < 0) n = n.right;
                else if (s.hasNext()) s.next(), n = n.mid;
                else return n.mid ? this._entries(n.mid) : i ? _i.unwrap(n.value) : void 0
            }
        }
        hasElementOrSubtree(t) {
            return this._findSuperstrOrElement(t, !0) !== void 0
        }
        forEach(t) {
            for (const [i, s] of this) t(s, i)
        }*[Symbol.iterator]() {
            yield* this._entries(this._root)
        }
        _entries(t) {
            const i = [];
            return this._dfsEntries(t, i), i[Symbol.iterator]()
        }
        _dfsEntries(t, i) {
            t && (t.left && this._dfsEntries(t.left, i), t.value !== void 0 && i.push([t.key, _i.unwrap(t.value)]), t.mid && this._dfsEntries(t.mid, i), t.right && this._dfsEntries(t.right, i))
        }
        _isBalanced() {
            const t = i => {
                if (!i) return !0;
                const s = i.balanceFactor();
                return s < -1 || s > 1 ? !1 : t(i.left) && t(i.right)
            };
            return t(this._root)
        }
    },
    Rv = sr("fileService"),
    f4 = class dr {
        constructor(t, i) {
            this.ignorePathCasing = i, this.correlationId = void 0, this.added = new gt(() => {
                const s = ma.forUris(() => this.ignorePathCasing);
                return s.fill(this.rawAdded.map(n => [n, !0])), s
            }), this.updated = new gt(() => {
                const s = ma.forUris(() => this.ignorePathCasing);
                return s.fill(this.rawUpdated.map(n => [n, !0])), s
            }), this.deleted = new gt(() => {
                const s = ma.forUris(() => this.ignorePathCasing);
                return s.fill(this.rawDeleted.map(n => [n, !0])), s
            }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
            for (const s of t) {
                switch (s.type) {
                    case 1:
                        this.rawAdded.push(s.resource);
                        break;
                    case 0:
                        this.rawUpdated.push(s.resource);
                        break;
                    case 2:
                        this.rawDeleted.push(s.resource);
                        break
                }
                this.correlationId !== dr.MIXED_CORRELATION && (typeof s.cId == "number" ? this.correlationId === void 0 ? this.correlationId = s.cId : this.correlationId !== s.cId && (this.correlationId = dr.MIXED_CORRELATION) : this.correlationId !== void 0 && (this.correlationId = dr.MIXED_CORRELATION))
            }
        }
        contains(t, ...i) {
            return this.doContains(t, {
                includeChildren: !1
            }, ...i)
        }
        affects(t, ...i) {
            return this.doContains(t, {
                includeChildren: !0
            }, ...i)
        }
        doContains(t, i, ...s) {
            if (!t) return !1;
            const n = s.length > 0;
            return !!((!n || s.includes(1)) && (this.added.value.get(t) || i.includeChildren && this.added.value.findSuperstr(t)) || (!n || s.includes(0)) && (this.updated.value.get(t) || i.includeChildren && this.updated.value.findSuperstr(t)) || (!n || s.includes(2)) && (this.deleted.value.findSubstr(t) || i.includeChildren && this.deleted.value.findSuperstr(t)))
        }
        gotAdded() {
            return this.rawAdded.length > 0
        }
        gotDeleted() {
            return this.rawDeleted.length > 0
        }
        gotUpdated() {
            return this.rawUpdated.length > 0
        }
        correlates(t) {
            return this.correlationId === t
        }
        hasCorrelation() {
            return typeof this.correlationId == "number"
        }
    };
f4.MIXED_CORRELATION = null;
var ht = class Pt {
    static formatSize(t) {
        return Tr(t) || (t = 0), t < Pt.KB ? V(2033, null, t.toFixed(0)) : t < Pt.MB ? V(2034, null, (t / Pt.KB).toFixed(2)) : t < Pt.GB ? V(2035, null, (t / Pt.MB).toFixed(2)) : t < Pt.TB ? V(2036, null, (t / Pt.GB).toFixed(2)) : V(2037, null, (t / Pt.TB).toFixed(2))
    }
};
ht.KB = 1024, ht.MB = ht.KB * ht.KB, ht.GB = ht.MB * ht.KB, ht.TB = ht.GB * ht.KB;
var va = ht,
    Od = 50,
    Fd = !1,
    Bd;

function wi(e) {
    switch (e) {
        case 100:
            return "req";
        case 101:
            return "cancel";
        case 102:
            return "subscribe";
        case 103:
            return "unsubscribe"
    }
}

function Ks(e) {
    switch (e) {
        case 200:
            return "init";
        case 201:
            return "reply:";
        case 202:
        case 203:
            return "replyErr:";
        case 204:
            return "event:"
    }
}

function Si(e) {
    let t = 0;
    for (let i = 0;; i += 7) {
        const s = e.read(1);
        if (t |= (s.buffer[0] & 127) << i, !(s.buffer[0] & 128)) return t
    }
}
var p4 = Mt(0);

function Ci(e, t) {
    if (t === 0) {
        e.write(p4);
        return
    }
    let i = 0;
    for (let n = t; n !== 0; n = n >>> 7) i++;
    const s = mt.alloc(i);
    for (let n = 0; t !== 0; n++) s.buffer[n] = t & 127, t = t >>> 7, t > 0 && (s.buffer[n] |= 128);
    e.write(s)
}
var Hd = class {
        constructor(e) {
            this.buffer = e, this.pos = 0
        }
        read(e) {
            const t = this.buffer.slice(this.pos, this.pos + e);
            return this.pos += t.byteLength, t
        }
    },
    ya = class {
        constructor() {
            this.buffers = []
        }
        get buffer() {
            return mt.concat(this.buffers)
        }
        write(e) {
            this.buffers.push(e)
        }
    };

function Mt(e) {
    const t = mt.alloc(1);
    return t.writeUInt8(e, 0), t
}
var Xt = {
        Undefined: Mt(0),
        String: Mt(1),
        Buffer: Mt(2),
        VSBuffer: Mt(3),
        Array: Mt(4),
        Object: Mt(5),
        Uint: Mt(6),
        Uint8Array: Mt(7)
    },
    g4 = typeof Buffer < "u";

function is(e, t) {
    if (typeof t > "u") e.write(Xt.Undefined);
    else if (typeof t == "string") {
        const i = mt.fromString(t);
        e.write(Xt.String), Ci(e, i.byteLength), e.write(i)
    } else if (g4 && Buffer.isBuffer(t)) {
        const i = mt.wrap(t);
        e.write(Xt.Buffer), Ci(e, i.byteLength), e.write(i)
    } else if (t instanceof mt) e.write(Xt.VSBuffer), Ci(e, t.byteLength), e.write(t);
    else if (Array.isArray(t)) {
        e.write(Xt.Array), Ci(e, t.length);
        for (const i of t) is(e, i)
    } else if (typeof t == "number" && (t | 0) === t) e.write(Xt.Uint), Ci(e, t);
    else if (t instanceof Uint8Array) e.write(Xt.Uint8Array), Ci(e, t.length), e.write(mt.wrap(t));
    else {
        const i = mt.fromString(JSON.stringify(t));
        e.write(Xt.Object), Ci(e, i.byteLength), e.write(i)
    }
}

function Gs(e) {
    switch (e.read(1).readUInt8(0)) {
        case 0:
            return;
        case 1:
            return e.read(Si(e)).toString();
        case 2:
            return e.read(Si(e)).buffer;
        case 3:
            return e.read(Si(e));
        case 7:
            return e.read(Si(e)).buffer;
        case 4: {
            const i = Si(e),
                s = [];
            for (let n = 0; n < i; n++) s.push(Gs(e));
            return s
        }
        case 5:
            return JSON.parse(e.read(Si(e)).toString());
        case 6:
            return Si(e)
    }
}
var m4 = class {
        constructor(e, t, i = null, s = 1e3) {
            this.protocol = e, this.ctx = t, this.logger = i, this.timeoutDelay = s, this.channels = new Map, this.activeRequests = new Map, this.pendingRequests = new Map, this.protocolListener = this.protocol.onMessage(n => this.onRawMessage(n)), this.sendResponse({
                type: 200
            })
        }
        registerChannel(e, t) {
            this.channels.set(e, t), setTimeout(() => this.flushPendingRequests(e), 0)
        }
        sendResponse(e) {
            switch (e.type) {
                case 200: {
                    const t = this.send([e.type]);
                    this.logger?.logOutgoing(t, 0, 1, Ks(e.type));
                    return
                }
                case 201:
                case 202:
                case 204:
                case 203: {
                    const t = this.send([e.type, e.id], e.data);
                    this.logger?.logOutgoing(t, e.id, 1, Ks(e.type), e.data);
                    return
                }
            }
        }
        send(e, t = void 0) {
            const i = new ya;
            return is(i, e), is(i, t), this.sendBuffer(i.buffer)
        }
        sendBuffer(e) {
            try {
                return this.protocol.send(e), e.byteLength
            } catch {
                return 0
            }
        }
        onRawMessage(e) {
            const t = new Hd(e),
                i = Fd,
                s = i ? performance.now() : 0,
                n = Gs(t),
                r = Gs(t),
                o = n[0];
            if (i) {
                const a = performance.now() - s;
                a > Od && Bd?.({
                    durationMs: a,
                    byteLength: e.byteLength,
                    requestId: n[1] ?? 0,
                    channelName: n[2],
                    command: n[3],
                    messageType: wi(o)
                })
            }
            switch (o) {
                case 100:
                    return this.logger?.logIncoming(e.byteLength, n[1], 1, `${wi(o)}: ${n[2]}.${n[3]}`, r), this.onPromise({
                        type: o,
                        id: n[1],
                        channelName: n[2],
                        name: n[3],
                        arg: r
                    });
                case 102:
                    return this.logger?.logIncoming(e.byteLength, n[1], 1, `${wi(o)}: ${n[2]}.${n[3]}`, r), this.onEventListen({
                        type: o,
                        id: n[1],
                        channelName: n[2],
                        name: n[3],
                        arg: r
                    });
                case 101:
                    return this.logger?.logIncoming(e.byteLength, n[1], 1, `${wi(o)}`), this.disposeActiveRequest({
                        type: o,
                        id: n[1]
                    });
                case 103:
                    return this.logger?.logIncoming(e.byteLength, n[1], 1, `${wi(o)}`), this.disposeActiveRequest({
                        type: o,
                        id: n[1]
                    })
            }
        }
        onPromise(e) {
            const t = this.channels.get(e.channelName);
            if (!t) {
                this.collectPendingRequest(e);
                return
            }
            const i = new Kl;
            let s;
            try {
                s = t.call(this.ctx, e.name, e.arg, i.token)
            } catch (o) {
                s = Promise.reject(o)
            }
            const n = e.id;
            s.then(o => {
                this.sendResponse({
                    id: n,
                    data: o,
                    type: 201
                })
            }, o => {
                o instanceof Error ? this.sendResponse({
                    id: n,
                    data: {
                        message: o.message,
                        name: o.name,
                        stack: o.stack ? o.stack.split(`
`) : void 0
                    },
                    type: 202
                }) : this.sendResponse({
                    id: n,
                    data: o,
                    type: 203
                })
            }).finally(() => {
                r.dispose(), this.activeRequests.delete(e.id)
            });
            const r = de(() => i.cancel());
            this.activeRequests.set(e.id, r)
        }
        onEventListen(e) {
            const t = this.channels.get(e.channelName);
            if (!t) {
                this.collectPendingRequest(e);
                return
            }
            const i = e.id,
                n = t.listen(this.ctx, e.name, e.arg)(r => this.sendResponse({
                    id: i,
                    data: r,
                    type: 204
                }));
            this.activeRequests.set(e.id, n)
        }
        disposeActiveRequest(e) {
            const t = this.activeRequests.get(e.id);
            t && (t.dispose(), this.activeRequests.delete(e.id))
        }
        collectPendingRequest(e) {
            let t = this.pendingRequests.get(e.channelName);
            t || (t = [], this.pendingRequests.set(e.channelName, t));
            const i = setTimeout(() => {
                console.error(`Unknown channel: ${e.channelName}`), e.type === 100 && this.sendResponse({
                    id: e.id,
                    data: {
                        name: "Unknown channel",
                        message: `Channel name '${e.channelName}' timed out after ${this.timeoutDelay}ms`,
                        stack: void 0
                    },
                    type: 202
                })
            }, this.timeoutDelay);
            t.push({
                request: e,
                timeoutTimer: i
            })
        }
        flushPendingRequests(e) {
            const t = this.pendingRequests.get(e);
            if (t) {
                for (const i of t) switch (clearTimeout(i.timeoutTimer), i.request.type) {
                    case 100:
                        this.onPromise(i.request);
                        break;
                    case 102:
                        this.onEventListen(i.request);
                        break
                }
                this.pendingRequests.delete(e)
            }
        }
        dispose() {
            this.protocolListener && (this.protocolListener.dispose(), this.protocolListener = null), Ke(this.activeRequests.values()), this.activeRequests.clear()
        }
    },
    zd = class {
        constructor(e, t = null) {
            this.protocol = e, this.isDisposed = !1, this.state = 0, this.activeRequests = new Set, this.handlers = new Map, this.lastRequestId = 0, this._pendingRPCDetails = new Map, this._onDidInitialize = new L, this.onDidInitialize = this._onDidInitialize.event, this.protocolListener = this.protocol.onMessage(i => this.onBuffer(i)), this.logger = t
        }
        getChannel(e) {
            const t = this;
            return {
                call(i, s, n) {
                    return t.isDisposed ? Promise.reject(new Ot) : t.requestPromise(e, i, s, n)
                },
                listen(i, s) {
                    return t.isDisposed ? A.None : t.requestEvent(e, i, s)
                }
            }
        }
        requestPromise(e, t, i, s = vs.None) {
            const n = this.lastRequestId++,
                o = {
                    id: n,
                    type: 100,
                    channelName: e,
                    name: t,
                    arg: i
                };
            if (s.isCancellationRequested) return Promise.reject(new Ot);
            let a, c;
            return new Promise((d, u) => {
                if (s.isCancellationRequested) return u(new Ot);
                const f = () => {
                    const _ = y => {
                        switch (y.type) {
                            case 201:
                                this.handlers.delete(n), this._pendingRPCDetails.delete(n), d(y.data);
                                break;
                            case 202: {
                                this.handlers.delete(n), this._pendingRPCDetails.delete(n);
                                const w = new Error(y.data.message);
                                w.stack = Array.isArray(y.data.stack) ? y.data.stack.join(`
`) : y.data.stack, w.name = y.data.name, u(w);
                                break
                            }
                            case 203:
                                this.handlers.delete(n), this._pendingRPCDetails.delete(n), u(y.data);
                                break
                        }
                    };
                    this.handlers.set(n, _), this._pendingRPCDetails.set(n, {
                        channelName: e,
                        command: t
                    }), this.sendRequest(o)
                };
                let p = null;
                this.state === 1 ? f() : (p = Xr(_ => this.whenInitialized()), p.then(() => {
                    p = null, f()
                }));
                const g = () => {
                    p ? (p.cancel(), p = null) : this.sendRequest({
                        id: n,
                        type: 101
                    }), u(new Ot)
                };
                a = s.onCancellationRequested(g), c = {
                    dispose: pl(() => {
                        g(), a.dispose()
                    })
                }, this.activeRequests.add(c)
            }).finally(() => {
                a?.dispose(), this.activeRequests.delete(c)
            })
        }
        requestEvent(e, t, i) {
            const s = this.lastRequestId++,
                r = {
                    id: s,
                    type: 102,
                    channelName: e,
                    name: t,
                    arg: i
                };
            let o = null;
            const a = new L({
                    onWillAddFirstListener: () => {
                        const h = () => {
                            this.activeRequests.add(a), this._pendingRPCDetails.set(s, {
                                channelName: e,
                                command: t
                            }), this.sendRequest(r)
                        };
                        this.state === 1 ? h() : (o = Xr(d => this.whenInitialized()), o.then(() => {
                            o = null, h()
                        }))
                    },
                    onDidRemoveLastListener: () => {
                        o ? (o.cancel(), o = null) : (this.activeRequests.delete(a), this._pendingRPCDetails.delete(s), this.sendRequest({
                            id: s,
                            type: 103
                        }))
                    }
                }),
                c = h => a.fire(h.data);
            return this.handlers.set(s, c), a.event
        }
        sendRequest(e) {
            switch (e.type) {
                case 100:
                case 102: {
                    const t = this.send([e.type, e.id, e.channelName, e.name], e.arg);
                    this.logger?.logOutgoing(t, e.id, 0, `${wi(e.type)}: ${e.channelName}.${e.name}`, e.arg);
                    return
                }
                case 101:
                case 103: {
                    const t = this.send([e.type, e.id]);
                    this.logger?.logOutgoing(t, e.id, 0, wi(e.type));
                    return
                }
            }
        }
        send(e, t = void 0) {
            const i = new ya;
            return is(i, e), is(i, t), this.sendBuffer(i.buffer)
        }
        sendBuffer(e) {
            try {
                return this.protocol.send(e), e.byteLength
            } catch {
                return 0
            }
        }
        onBuffer(e) {
            const t = new Hd(e),
                i = Fd,
                s = i ? performance.now() : 0,
                n = Gs(t),
                r = Gs(t),
                o = n[0];
            if (i) {
                const a = performance.now() - s;
                if (a > Od) {
                    const c = n[1] ?? 0,
                        h = this._pendingRPCDetails.get(c);
                    Bd?.({
                        durationMs: a,
                        byteLength: e.byteLength,
                        requestId: c,
                        channelName: h?.channelName,
                        command: h?.command,
                        messageType: Ks(o)
                    })
                }
            }
            switch (o) {
                case 200:
                    return this.logger?.logIncoming(e.byteLength, 0, 0, Ks(o)), this.onResponse({
                        type: n[0]
                    });
                case 201:
                case 202:
                case 204:
                case 203:
                    return this.logger?.logIncoming(e.byteLength, n[1], 0, Ks(o), r), this.onResponse({
                        type: n[0],
                        id: n[1],
                        data: r
                    })
            }
        }
        onResponse(e) {
            if (e.type === 200) {
                this.state = 1, this._onDidInitialize.fire();
                return
            }
            this.handlers.get(e.id)?.(e)
        }
        get onDidInitializePromise() {
            return A.toPromise(this.onDidInitialize)
        }
        whenInitialized() {
            return this.state === 1 ? Promise.resolve() : this.onDidInitializePromise
        }
        dispose() {
            this.isDisposed = !0, this.protocolListener && (this.protocolListener.dispose(), this.protocolListener = null), Ke(this.activeRequests.values()), this.activeRequests.clear(), this._pendingRPCDetails.clear()
        }
    };
__decorate([ge], zd.prototype, "onDidInitializePromise", null);
var v4 = class {
        constructor(e, t, i = null) {
            const s = new ya;
            is(s, t), e.send(s.buffer), this.channelClient = new zd(e, i), this.channelServer = new m4(e, t, i)
        }
        getChannel(e) {
            return this.channelClient.getChannel(e)
        }
        registerChannel(e, t) {
            this.channelServer.registerChannel(e, t)
        }
        dispose() {
            this.channelClient.dispose(), this.channelServer.dispose()
        }
    },
    ba;
(e => {
    function t(r, o, a) {
        const c = r,
            h = a && a.disableMarshalling,
            d = new Map;
        for (const u in c) s(u) && d.set(u, A.buffer(c[u], !0, void 0, o));
        return new class {
            listen(u, f, p) {
                const g = d.get(f);
                if (g) return g;
                const _ = c[f];
                if (typeof _ == "function") {
                    if (n(f)) return _.call(c, p);
                    if (s(f)) return d.set(f, A.buffer(c[f], !0, void 0, o)), d.get(f)
                }
                throw new hs(`Event not found: ${f}`)
            }
            call(u, f, p) {
                const g = c[f];
                if (typeof g == "function") {
                    if (!h && Array.isArray(p))
                        for (let y = 0; y < p.length; y++) p[y] = Us(p[y]);
                    let _ = g.apply(c, p);
                    return _ instanceof Promise || (_ = Promise.resolve(_)), _
                }
                throw new hs(`Method not found: ${f}`)
            }
        }
    }
    e.fromService = t;

    function i(r, o) {
        const a = o && o.disableMarshalling;
        return new Proxy({}, {
            get(c, h) {
                if (typeof h != "symbol") {
                    if (typeof h == "string") return o?.properties?.has(h) ? o.properties.get(h) : n(h) ? function(d) {
                        return r.listen(h, d)
                    } : s(h) ? r.listen(h) : async function(...d) {
                        let u;
                        o && !cn(o.context) ? u = [o.context, ...d] : u = d;
                        const f = await r.call(h, u);
                        return a ? f : Us(f)
                    };
                    throw new hs(`Property not found: ${String(h)}`)
                }
            }
        })
    }
    e.toService = i;

    function s(r) {
        return r[0] === "o" && r[1] === "n" && Xl(r.charCodeAt(2))
    }

    function n(r) {
        return /^onDynamic/.test(r) && Xl(r.charCodeAt(9))
    }
})(ba || (ba = {}));
var y4 = class {
        constructor(e, t) {
            this.sender = e, this.onMessage = t
        }
        send(e) {
            try {
                this.sender.send("vscode:message", e.buffer)
            } catch {}
        }
        disconnect() {
            this.sender.send("vscode:disconnect", null)
        }
    },
    b4 = class pu extends v4 {
        static createProtocol() {
            const t = A.fromNodeEventEmitter(ke, "vscode:message", (i, s) => mt.wrap(s));
            return ke.send("vscode:hello"), new y4(ke, t)
        }
        constructor(t) {
            const i = pu.createProtocol();
            super(i, t), this.protocol = i
        }
        dispose() {
            this.protocol.disconnect(), super.dispose()
        }
    };

function _4(e) {
    return `window:${e}`
}
var w4 = class extends q {
        constructor(e) {
            super(), this.mainProcessConnection = this._register(new b4(_4(e)))
        }
        getChannel(e) {
            return this.mainProcessConnection.getChannel(e)
        }
        registerChannel(e, t) {
            this.mainProcessConnection.registerChannel(e, t)
        }
        sendRawMessage(e, t) {
            ke.invoke(e)
        }
    },
    S4 = sr("mainProcessService"),
    _a = class {
        constructor(e, t) {
            return this.windowId = e, ba.toService(t.getChannel("nativeHost"), {
                context: e,
                properties: (() => {
                    const i = new Map;
                    return i.set("windowId", e), i
                })()
            })
        }
    };
_a = __decorate([__param(1, S4)], _a);

function C4(e) {
    let t = !1;
    const i = new Map,
        s = new Map;
    if (D4(e, d => {
            if (e === d) return !0;
            const u = JSON.stringify(d);
            if (u.length < 30) return !0;
            const f = i.get(u);
            if (!f) {
                const p = {
                    schemas: [d]
                };
                return i.set(u, p), s.set(d, p), !0
            }
            return f.schemas.push(d), s.set(d, f), t = !0, !1
        }), i.clear(), !t) return JSON.stringify(e);
    let r = "$defs";
    for (; e.hasOwnProperty(r);) r += "_";
    const o = [];

    function a(d) {
        return JSON.stringify(d, (u, f) => {
            if (f !== d) {
                const p = s.get(f);
                if (p && p.schemas.length > 1) return p.id || (p.id = `_${o.length}`, o.push(p.schemas[0])), {
                    $ref: `#/${r}/${p.id}`
                }
            }
            return f
        })
    }
    const c = a(e),
        h = [];
    for (let d = 0; d < o.length; d++) h.push(`"_${d}":${a(o[d])}`);
    return h.length ? `${c.substring(0,c.length-1)},"${r}":{${h.join(",")}}}` : c
}

function ss(e) {
    return typeof e == "object" && e !== null
}

function D4(e, t) {
    if (!e || typeof e != "object") return;
    const i = (...c) => {
            for (const h of c) ss(h) && o.push(h)
        },
        s = (...c) => {
            for (const h of c)
                if (ss(h))
                    for (const d in h) {
                        const u = h[d];
                        ss(u) && o.push(u)
                    }
        },
        n = (...c) => {
            for (const h of c)
                if (Array.isArray(h))
                    for (const d of h) ss(d) && o.push(d)
        },
        r = c => {
            if (Array.isArray(c))
                for (const h of c) ss(h) && o.push(h);
            else ss(c) && o.push(c)
        },
        o = [e];
    let a = o.pop();
    for (; a;) t(a) && (i(a.additionalItems, a.additionalProperties, a.not, a.contains, a.propertyNames, a.if, a.then, a.else, a.unevaluatedItems, a.unevaluatedProperties), s(a.definitions, a.$defs, a.properties, a.patternProperties, a.dependencies, a.dependentSchemas), n(a.anyOf, a.allOf, a.oneOf, a.prefixItems), r(a.items)), a = o.pop()
}
var E4 = class {
        constructor() {
            this.data = new Map
        }
        add(e, t) {
            kr(us(e)), kr(kl(t)), kr(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t)
        }
        knows(e) {
            return this.data.has(e)
        }
        as(e) {
            return this.data.get(e) || null
        }
        dispose() {
            this.data.forEach(e => {
                xr(e.dispose) && e.dispose()
            }), this.data.clear()
        }
    },
    wa = new E4,
    $d = {
        JSONContribution: "base.contributions.json"
    };

function Ud(e) {
    return e.length > 0 && e.charAt(e.length - 1) === "#" ? e.substring(0, e.length - 1) : e
}
var k4 = class extends q {
        constructor() {
            super(...arguments), this.schemasById = {}, this.schemaAssociations = {}, this._onDidChangeSchema = this._register(new L), this.onDidChangeSchema = this._onDidChangeSchema.event, this._onDidChangeSchemaAssociations = this._register(new L), this.onDidChangeSchemaAssociations = this._onDidChangeSchemaAssociations.event
        }
        registerSchema(e, t, i) {
            const s = Ud(e);
            this.schemasById[s] = t, this._onDidChangeSchema.fire(e), i && i.add(de(() => {
                delete this.schemasById[s], this._onDidChangeSchema.fire(e)
            }))
        }
        registerSchemaAssociation(e, t) {
            const i = Ud(e);
            return this.schemaAssociations[i] || (this.schemaAssociations[i] = []), this.schemaAssociations[i].includes(t) || (this.schemaAssociations[i].push(t), this._onDidChangeSchemaAssociations.fire()), de(() => {
                const s = this.schemaAssociations[i];
                if (s) {
                    const n = s.indexOf(t);
                    n !== -1 && (s.splice(n, 1), s.length === 0 && delete this.schemaAssociations[i], this._onDidChangeSchemaAssociations.fire())
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
            return t ? C4(t) : void 0
        }
        hasSchemaContent(e) {
            return !!this.schemasById[e]
        }
        getSchemaAssociations() {
            return this.schemaAssociations
        }
    },
    T4 = new k4;
wa.add($d.JSONContribution, T4);
var x4 = {
        IconContribution: "base.contributions.icons"
    },
    Wd;
(e => {
    function t(i, s) {
        let n = i.defaults;
        for (; ye.isThemeIcon(n);) {
            const r = Di.getIcon(n.id);
            if (!r) return;
            n = r.defaults
        }
        return n
    }
    e.getDefinition = t
})(Wd || (Wd = {}));
var Vd;
(e => {
    function t(s) {
        return {
            weight: s.weight,
            style: s.style,
            src: s.src.map(n => ({
                format: n.format,
                location: n.location.toString()
            }))
        }
    }
    e.toJSONObject = t;

    function i(s) {
        const n = r => us(r) ? r : void 0;
        if (s && Array.isArray(s.src) && s.src.every(r => us(r.format) && us(r.location))) return {
            weight: n(s.weight),
            style: n(s.style),
            src: s.src.map(r => ({
                format: r.format,
                location: we.parse(r.location)
            }))
        }
    }
    e.fromJSONObject = i
})(Vd || (Vd = {}));
var A4 = /^([\w_-]+)$/,
    N4 = V(2547, null),
    I4 = class extends q {
        constructor() {
            super(), this._onDidChange = this._register(new L), this.onDidChange = this._onDidChange.event, this.iconSchema = {
                definitions: {
                    icons: {
                        type: "object",
                        properties: {
                            fontId: {
                                type: "string",
                                description: V(2548, null),
                                pattern: A4.source,
                                patternErrorMessage: N4
                            },
                            fontCharacter: {
                                type: "string",
                                description: V(2549, null)
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
                pattern: `^${ye.iconNameExpression}$`,
                enum: [],
                enumDescriptions: []
            }, this.iconsById = {}, this.iconFontsById = {}
        }
        registerIcon(e, t, i, s) {
            const n = this.iconsById[e];
            if (n) {
                if (i && !n.description) {
                    n.description = i, this.iconSchema.properties[e].markdownDescription = `${i} $(${e})`;
                    const a = this.iconReferenceSchema.enum.indexOf(e);
                    a !== -1 && (this.iconReferenceSchema.enumDescriptions[a] = i), this._onDidChange.fire()
                }
                return n
            }
            const r = {
                id: e,
                description: i,
                defaults: t,
                deprecationMessage: s
            };
            this.iconsById[e] = r;
            const o = {
                $ref: "#/definitions/icons"
            };
            return s && (o.deprecationMessage = s), i && (o.markdownDescription = `${i}: $(${e})`), this.iconSchema.properties[e] = o, this.iconReferenceSchema.enum.push(e), this.iconReferenceSchema.enumDescriptions.push(i || ""), this._onDidChange.fire(), {
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
            const i = this.iconFontsById[e];
            return i || (this.iconFontsById[e] = t, this._onDidChange.fire(), t)
        }
        deregisterIconFont(e) {
            delete this.iconFontsById[e]
        }
        getIconFont(e) {
            return this.iconFontsById[e]
        }
        toString() {
            const e = (n, r) => n.id.localeCompare(r.id),
                t = n => {
                    for (; ye.isThemeIcon(n.defaults);) n = this.iconsById[n.defaults.id];
                    return `codicon codicon-${n?n.id:""}`
                },
                i = [];
            i.push("| preview     | identifier                        | default codicon ID                | description"), i.push("| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |");
            const s = Object.keys(this.iconsById).map(n => this.iconsById[n]);
            for (const n of s.filter(r => !!r.description).sort(e)) i.push(`|<i class="${t(n)}"></i>|${n.id}|${ye.isThemeIcon(n.defaults)?n.defaults.id:n.id}|${n.description||""}|`);
            i.push("| preview     | identifier                        "), i.push("| ----------- | --------------------------------- |");
            for (const n of s.filter(r => !ye.isThemeIcon(r.defaults)).sort(e)) i.push(`|<i class="${t(n)}"></i>|${n.id}|`);
            return i.join(`
`)
        }
    },
    Di = new I4;
wa.add(x4.IconContribution, Di);

function Sa(e, t, i, s) {
    return Di.registerIcon(e, t, i, s)
}

function Kd() {
    return Di
}

function L4() {
    const e = J0();
    for (const t in e) {
        const i = "\\" + e[t].toString(16);
        Di.registerIcon(t, {
            fontCharacter: i
        })
    }
}
L4();
var Gd = "vscode://schemas/icons",
    qd = wa.as($d.JSONContribution);
qd.registerSchema(Gd, Di.getIconSchema());
var jd = new mc(() => qd.notifySchemaChanged(Gd), 200);
Di.onDidChange(() => {
    jd.isScheduled() || jd.schedule()
});
var Mv = Sa("widget-close", me.close, V(2550, null)),
    Pv = Sa("goto-previous-location", me.arrowUp, V(2551, null)),
    Ov = Sa("goto-next-location", me.arrowDown, V(2552, null)),
    Fv = ye.modify(me.sync, "spin"),
    Bv = ye.modify(me.loading, "spin");

function R4(e) {
    const t = new Y,
        i = t.add(new L),
        s = Kd();
    return t.add(s.onDidChange(() => i.fire())), e && t.add(e.onDidProductIconThemeChange(() => i.fire())), {
        dispose: () => t.dispose(),
        onDidChange: i.event,
        getCSS() {
            const n = e ? e.getProductIconTheme() : new M4,
                r = {},
                o = new Ao,
                a = new Ao;
            for (const c of s.getIcons()) {
                const h = n.getIcon(c);
                if (!h) continue;
                const d = h.font,
                    u = ze`--vscode-icon-${Fn(c.id)}-font-family`,
                    f = ze`--vscode-icon-${Fn(c.id)}-content`;
                d ? (r[d.id] = d.definition, a.push(ze`${u}: ${Wt(d.id)};`, ze`${f}: ${Wt(h.fontCharacter)};`), o.push(ze`.codicon-${Fn(c.id)}:before { content: ${Wt(h.fontCharacter)}; font-family: ${Wt(d.id)}; }`)) : (a.push(ze`${f}: ${Wt(h.fontCharacter)}; ${u}: 'codicon';`), o.push(ze`.codicon-${Fn(c.id)}:before { content: ${Wt(h.fontCharacter)}; }`))
            }
            for (const c in r) {
                const h = r[c],
                    d = h.weight ? ze`font-weight: ${bh(h.weight)};` : ze``,
                    u = h.style ? ze`font-style: ${bh(h.style)};` : ze``,
                    f = new Ao;
                for (const p of h.src) f.push(ze`${I0(p.location)} format(${Wt(p.format)})`);
                o.push(ze`@font-face { src: ${f.join(", ")}; font-family: ${Wt(c)};${d}${u} font-display: block; }`)
            }
            return o.push(ze`:root { ${a.join(" ")} }`), o.join(`
`)
        }
    }
}
var M4 = class {
    getIcon(e) {
        const t = Kd();
        let i = e.defaults;
        for (; ye.isThemeIcon(i);) {
            const s = t.getIcon(i.id);
            if (!s) return;
            i = s.defaults
        }
        return i
    }
};

function P4(e = 0) {
    return Math.pow(1.2, e)
}
var O4 = 8,
    F4 = -8;

function Ca(e, t) {
    e = Math.min(Math.max(e, F4), O4);
    const i = [];
    t === 1 ? i.push(To()) : t === 2 ? i.push(...Array.from(So()).map(({
        window: s
    }) => s)) : i.push(t);
    for (const s of i) B4(s)?.webFrame?.setZoomLevel(e), v1(P4(e), s), g1(e, s)
}

function B4(e) {
    if (e === T) return {
        ipcRenderer: ke,
        webFrame: r4
    };
    {
        const t = e;
        if (t?.vscode?.ipcRenderer && t?.vscode?.webFrame) return t.vscode
    }
}

function H4(e) {
    Ca(Ml(typeof e == "number" ? To() : e) + 1, e)
}

function z4(e) {
    Ca(Ml(typeof e == "number" ? To() : e) - 1, e)
}
var Ae = class {
    static get theme() {
        return this._theme
    }
    static applyTheme(t) {
        this._theme = {
            ...this.DEFAULT_THEME,
            ...$4(t)
        }
    }
    static getFillColor(t) {
        return this.BASE_COLORS[t % this.BASE_COLORS.length] + this.FILL_OPACITY
    }
    static getStrokeColor(t) {
        return this.BASE_COLORS[t % this.BASE_COLORS.length]
    }
    static getUnit(t) {
        return t === "memory" ? "MB" : "%"
    }
    static appendOthersSeries(t, i, s) {
        if (t.length === 0 || i.length === 0) return t;
        const n = s === "memory",
            r = i.map(h => n ? h.totalPeakMemMb : h.totalPeakCpuPct),
            a = i.map((h, d) => t.reduce((u, f) => u + f.values[d], 0)).map((h, d) => Math.max(0, r[d] - h)),
            c = a.reduce((h, d) => h + d, 0);
        return c > 0 ? [...t, {
            processName: "Others",
            totalContrib: c,
            values: a,
            color: this.BASE_COLORS[this.BASE_COLORS.length - 1]
        }] : t
    }
};
Ae.BASE_COLORS = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD", "#F28E2B", "#76B7B2", "#E15759", "#B07AA1", "#59A14F", "#EDC948", "#B6992D", "#F1CE63", "#499894", "#86BCB6", "#E15759", "#FF9DA7", "#9C755F", "#BAB0AC", "#999999"], Ae.MARGIN = {
    top: 18,
    right: 20,
    bottom: 46,
    left: 64
}, Ae.MIN_CSS_WIDTH = 640, Ae.CSS_HEIGHT = 420, Ae.CONTAINER_PADDING = 16, Ae.FILL_OPACITY = "40", Ae.LINE_WIDTH = 2, Ae.DEFAULT_THEME = {
    backgroundColor: "#1e1e1e",
    gridColor: "#2a2a2a",
    axisColor: "#666",
    textColor: "#bbb",
    textColorMuted: "#888",
    hoverLineColor: "#ddd",
    selectionLineColor: "#ffffff",
    tooltipBackground: "rgba(30, 30, 30, 0.95)",
    tooltipBorder: "rgba(76, 114, 176, 0.4)",
    tooltipForeground: "#ffffff",
    gapFillColor: "rgba(200,200,200,0.04)",
    gapBorderColor: "rgba(200,200,200,0.25)",
    gapTextColor: "rgba(230,230,230,0.75)",
    gapSubtextColor: "rgba(200,200,200,0.7)",
    emptyStateTextColor: "#ccc",
    legendHeaderBorder: "#3a3a3a",
    legendSecondaryForeground: "#ccc",
    legendTertiaryForeground: "#888",
    legendHoverBackground: "#2a2a2a",
    legendPidForeground: "#999",
    legendExtensionForeground: "#777",
    legendValueForeground: "#aaa",
    legendInactiveSwatchBorder: "rgba(150,150,150,0.5)",
    legendActiveSwatchBorder: "rgba(255,255,255,0.15)",
    legendUnmappedSwatchBackground: "#555",
    legendUnmappedSwatchBorder: "rgba(255,255,255,0.3)"
}, Ae._theme = {
    ...Ae.DEFAULT_THEME
}, Ae.GAP_MIN_WIDTH_FOR_TEXT = 90, Ae.GAP_DASH_PATTERN = [5, 6], Ae.GAP_SPACING_MULTIPLIER = 6, Ae.GAP_PIXEL_MULTIPLIER = 80, Ae.GAP_MIN_THRESHOLD_MS = 300 * 1e3, Ae.TIME_RANGES = [{
    label: "15m",
    ms: 900 * 1e3
}, {
    label: "1h",
    ms: 3600 * 1e3
}, {
    label: "6h",
    ms: 360 * 60 * 1e3
}, {
    label: "All",
    ms: null
}];
var z = Ae;

function $4(e) {
    const t = {};
    for (const i in e) {
        const s = i,
            n = e[s];
        n !== void 0 && (t[s] = n)
    }
    return t
}
var Da = class {
    static niceNumber(e) {
        const t = Math.floor(Math.log10(e)),
            i = e / Math.pow(10, t);
        let s;
        return i < 1.5 ? s = 1 : i < 3 ? s = 2 : i < 7 ? s = 5 : s = 10, s * Math.pow(10, t)
    }
    static chooseTimeStep(e, t) {
        const i = e / Math.max(1, t);
        for (const s of this.TIME_STEPS_MS)
            if (s >= i) return s;
        return this.TIME_STEPS_MS[this.TIME_STEPS_MS.length - 1]
    }
    static buildTimeTicks(e, t, i) {
        const s = t - e,
            n = Math.max(2, Math.floor(i / 90)),
            r = this.chooseTimeStep(s, n),
            o = Math.floor(e / r) * r,
            a = [];
        for (let c = o; c <= t + 1e-6; c += r) c >= e && a.push(c);
        return a.length === 0 && a.push(e, t), a
    }
    static buildYTicks(e, t) {
        const i = e / t,
            s = Math.max(1, this.niceNumber(i)),
            n = [];
        for (let r = 0; r <= e + 1e-6; r += s) n.push(r);
        return n
    }
};
Da.TIME_STEPS_MS = [6e4, 5 * 6e4, 15 * 6e4, 30 * 6e4, 60 * 6e4, 180 * 6e4, 360 * 6e4, 720 * 6e4, 1440 * 6e4, 2880 * 6e4, 10080 * 6e4];
var We = class {
        static setupCanvas(e, t) {
            const i = Math.max(1, Math.floor(T.devicePixelRatio || 1)),
                s = Math.max(z.MIN_CSS_WIDTH, t.clientWidth - z.CONTAINER_PADDING),
                n = z.CSS_HEIGHT;
            e.style.width = `${s}px`, e.style.height = `${n}px`, e.width = Math.floor(s * i), e.height = Math.floor(n * i);
            const r = s - z.MARGIN.left - z.MARGIN.right,
                o = n - z.MARGIN.top - z.MARGIN.bottom;
            return {
                cssWidth: s,
                cssHeight: n,
                canvasWidth: e.width,
                canvasHeight: e.height,
                margin: z.MARGIN,
                chartWidth: r,
                chartHeight: o,
                dpr: i
            }
        }
        static drawBackground(e, t) {
            e.fillStyle = z.theme.backgroundColor, e.fillRect(0, 0, t.cssWidth, t.cssHeight)
        }
        static drawGrid(e, t, i, s, n, r) {
            const {
                margin: o,
                cssWidth: a,
                cssHeight: c
            } = t;
            e.strokeStyle = z.theme.gridColor, e.lineWidth = 1;
            for (const h of i) {
                const d = n(h);
                e.beginPath(), e.moveTo(o.left, d), e.lineTo(a - o.right, d), e.stroke()
            }
            for (const h of s) {
                const d = r(h);
                e.beginPath(), e.moveTo(d, o.top), e.lineTo(d, c - o.bottom), e.stroke()
            }
        }
        static drawAxes(e, t) {
            const {
                margin: i,
                cssWidth: s,
                cssHeight: n
            } = t;
            e.strokeStyle = z.theme.axisColor, e.lineWidth = 1, e.beginPath(), e.moveTo(i.left, i.top), e.lineTo(i.left, n - i.bottom), e.stroke(), e.beginPath(), e.moveTo(i.left, n - i.bottom), e.lineTo(s - i.right, n - i.bottom), e.stroke()
        }
        static drawYLabels(e, t, i, s, n) {
            e.fillStyle = z.theme.textColor, e.font = "11px sans-serif", e.textAlign = "right";
            for (const r of i) {
                const o = s(r);
                e.fillText(`${Math.round(r)} ${n}`, t.margin.left - 8, o + 3)
            }
        }
        static drawXLabels(e, t, i, s, n) {
            const {
                margin: r,
                cssHeight: o
            } = t;
            e.textAlign = "center";
            const a = new Intl.DateTimeFormat(void 0, {
                    hour: "2-digit",
                    minute: "2-digit"
                }),
                c = new Intl.DateTimeFormat(void 0, {
                    month: "short",
                    day: "2-digit"
                });
            let h = -1 / 0;
            for (const d of i) {
                const u = s(d),
                    f = a.format(new Date(d));
                u - h >= 64 && (e.fillStyle = z.theme.textColor, e.fillText(f, u, o - r.bottom + 16), n > 1440 * 60 * 1e3 && (e.fillStyle = z.theme.textColorMuted, e.fillText(c.format(new Date(d)), u, o - r.bottom + 30)), h = u)
            }
        }
        static drawGapOverlays(e, t, i, s) {
            if (i.length === 0) return;
            const {
                margin: n,
                cssHeight: r
            } = t;
            e.save(), e.textAlign = "center", e.textBaseline = "middle", e.font = "10px sans-serif";
            for (const o of i) {
                const a = s(o.startTime),
                    c = s(o.endTime),
                    h = Math.max(1, c - a);
                if (e.fillStyle = z.theme.gapFillColor, e.fillRect(a, n.top, h, t.chartHeight), e.strokeStyle = z.theme.gapBorderColor, e.setLineDash(z.GAP_DASH_PATTERN), e.beginPath(), e.moveTo(a, n.top), e.lineTo(a, r - n.bottom), e.moveTo(c, n.top), e.lineTo(c, r - n.bottom), e.stroke(), e.setLineDash([]), h >= z.GAP_MIN_WIDTH_FOR_TEXT) {
                    const d = a + h / 2;
                    e.fillStyle = z.theme.gapTextColor, e.fillText("No Data", d, n.top + t.chartHeight / 2 - 8), e.fillStyle = z.theme.gapSubtextColor, e.fillText(this.formatGapDuration(o.duration), d, n.top + t.chartHeight / 2 + 8)
                }
            }
            e.restore()
        }
        static drawStackedAreas(e, t, i, s, n, r, o, a) {
            for (let c = i.length - 1; c >= 0; c--)
                for (const h of r) {
                    if (h.endIdx < h.startIdx) continue;
                    e.beginPath();
                    for (let u = h.startIdx; u <= h.endIdx; u++) {
                        const f = o(s[u].sampleEnd),
                            p = a(n[u][c]);
                        u === h.startIdx ? e.moveTo(f, p) : e.lineTo(f, p)
                    }
                    for (let u = h.endIdx; u >= h.startIdx; u--) {
                        const f = o(s[u].sampleEnd),
                            p = a(c + 1 < i.length ? n[u][c + 1] : 0);
                        e.lineTo(f, p)
                    }
                    e.closePath();
                    const d = i[c].color || z.BASE_COLORS[c % z.BASE_COLORS.length];
                    e.fillStyle = d + z.FILL_OPACITY, e.fill(), e.strokeStyle = d, e.lineWidth = z.LINE_WIDTH, e.stroke()
                }
        }
        static drawSelectionIndicator(e, t, i, s, n) {
            if (i < 0 || i >= s.length) return;
            const {
                margin: r,
                cssHeight: o
            } = t, a = n(s[i].sampleEnd);
            e.strokeStyle = z.theme.selectionLineColor, e.lineWidth = 2, e.beginPath(), e.moveTo(a, r.top), e.lineTo(a, o - r.bottom), e.stroke(), e.lineWidth = 1
        }
        static drawHoverIndicator(e, t, i, s, n) {
            if (i < 0 || i >= s.length) return;
            const {
                margin: r,
                cssHeight: o
            } = t, a = n(s[i].sampleEnd);
            e.strokeStyle = z.theme.hoverLineColor, e.lineWidth = 1, e.setLineDash([3, 3]), e.beginPath(), e.moveTo(a, r.top), e.lineTo(a, o - r.bottom), e.stroke(), e.setLineDash([])
        }
        static drawHoverTooltip(e, t, i, s, n, r, o, a, c) {
            if (i < 0 || i >= s.length) return;
            const h = s[i],
                d = a ? h.totalPeakMemMb : h.totalPeakCpuPct,
                f = new Date(h.sampleEnd).toLocaleTimeString(),
                p = `${d.toFixed(1)} ${c}`;
            e.font = "11px sans-serif";
            const g = e.measureText(f).width,
                _ = e.measureText(p).width,
                y = Math.max(g, _),
                w = 8,
                C = 14,
                D = y + w * 2,
                E = C * 2 + w * 2;
            let b = r + 12,
                S = o - E / 2;
            b + D > t.cssWidth - t.margin.right && (b = r - D - 12), S < t.margin.top && (S = t.margin.top), S + E > t.cssHeight - t.margin.bottom && (S = t.cssHeight - t.margin.bottom - E), e.fillStyle = z.theme.tooltipBackground, e.strokeStyle = z.theme.tooltipBorder, e.lineWidth = .5;
            const I = 4;
            e.beginPath(), e.moveTo(b + I, S), e.lineTo(b + D - I, S), e.arcTo(b + D, S, b + D, S + I, I), e.lineTo(b + D, S + E - I), e.arcTo(b + D, S + E, b + D - I, S + E, I), e.lineTo(b + I, S + E), e.arcTo(b, S + E, b, S + E - I, I), e.lineTo(b, S + I), e.arcTo(b, S, b + I, S, I), e.closePath(), e.fill(), e.stroke(), e.fillStyle = z.theme.tooltipForeground, e.textAlign = "left", e.textBaseline = "top", e.fillText(f, b + w, S + w), e.fillStyle = z.theme.tooltipForeground, e.font = "11px sans-serif", e.fillText(p, b + w, S + w + C)
        }
        static formatGapDuration(e) {
            const t = Math.max(0, Math.round(e / 1e3)),
                i = Math.floor(t / 3600),
                s = Math.floor(t % 3600 / 60),
                n = t % 60,
                r = [];
            return i > 0 && r.push(`${i}h`), (s > 0 || i > 0) && r.push(`${s}m`), i === 0 && s === 0 && r.push(`${n}s`), r.join(" ")
        }
        static computeCumulativeStacks(e, t) {
            const i = [];
            for (let s = 0; s < e.length; s++) {
                const n = new Array(t.length);
                let r = 0;
                for (let o = t.length - 1; o >= 0; o--) r += t[o].values[s], n[o] = r;
                i[s] = n
            }
            return i
        }
        static computeMaxY(e) {
            let t = 0;
            for (const i of e) {
                const s = Math.max(...i);
                s > t && (t = s)
            }
            return Math.max(1, t)
        }
    },
    U4 = class {
        static computeGapSegments(e, t, i) {
            const s = [],
                n = [];
            if (e.length === 0) return {
                segments: s,
                gaps: n
            };
            const r = this.computeGapThreshold(e, t, i);
            let o = 0;
            for (let a = 1; a < e.length; a++) {
                const c = e[a].sampleEnd - e[a - 1].sampleEnd;
                c >= r && (o <= a - 1 && s.push({
                    startIdx: o,
                    endIdx: a - 1
                }), n.push({
                    startTime: e[a - 1].sampleEnd,
                    endTime: e[a].sampleEnd,
                    duration: c
                }), o = a)
            }
            return o <= e.length - 1 && s.push({
                startIdx: o,
                endIdx: e.length - 1
            }), {
                segments: s,
                gaps: n
            }
        }
        static computeGapThreshold(e, t, i) {
            const s = e.length > 1 ? t / Math.max(1, e.length - 1) : t,
                n = i > 0 ? t / i : t,
                r = s * z.GAP_SPACING_MULTIPLIER,
                o = n * z.GAP_PIXEL_MULTIPLIER;
            return Math.max(z.GAP_MIN_THRESHOLD_MS, r, o)
        }
    };

function W4(e) {
    return e.memoryDuringSamplePeakMb > 0 || e.cpuDuringSamplePeakPct > 0
}
var Yd = class {
    static updateLegend(e, t, i, s, n, r, o, a) {
        if (s < 0 || s >= i.length) {
            this.clearChildren(e);
            return
        }
        const c = i[s],
            h = o ? c.totalPeakMemMb : c.totalPeakCpuPct,
            d = c.rows.map(p => ({
                processName: p.processName,
                value: o ? p.memoryDuringSamplePeakMb : p.cpuDuringSamplePeakPct,
                historyRow: p
            })).sort((p, g) => g.value - p.value);
        this.clearChildren(e);
        const u = this.renderHeader(c, h, d.length, r);
        e.appendChild(u);
        const f = this.renderItems(d, h, n, r, a);
        e.appendChild(f)
    }
    static renderHeader(e, t, i, s) {
        const n = this.createElement("div");
        n.style.marginBottom = "10px", n.style.paddingBottom = "8px", n.style.borderBottom = `1px solid ${z.theme.legendHeaderBorder}`;
        const r = this.createElement("strong");
        r.style.fontSize = "12px", r.textContent = new Date(e.sampleEnd).toLocaleString(), n.appendChild(r);
        const o = this.createElement("div");
        o.style.color = z.theme.legendSecondaryForeground, o.style.fontSize = "11px", o.style.marginTop = "4px", o.textContent = `Total Peak (all processes): ${t.toFixed(1)} ${s}`, n.appendChild(o);
        const a = this.createElement("div");
        return a.style.color = z.theme.legendTertiaryForeground, a.style.fontSize = "10px", a.textContent = `Processes in sample: ${i}`, n.appendChild(a), n
    }
    static renderItems(e, t, i, s, n) {
        const r = this.createElement("div");
        r.style.fontSize = "11px", r.style.maxHeight = "360px", r.style.overflowY = "auto", r.style.paddingRight = "6px";
        const o = T.document.createDocumentFragment();
        for (const {
                processName: a,
                value: c,
                historyRow: h
            }
            of e) {
            const d = this.renderProcessRow(a, c, t, i, s, h, n);
            o.appendChild(d)
        }
        return r.appendChild(o), r
    }
    static renderProcessRow(e, t, i, s, n, r, o) {
        const a = this.createElement("div");
        a.style.display = "flex", a.style.alignItems = "center", a.style.margin = "2px 0", a.style.padding = "2px 4px", a.style.borderRadius = "3px", a.style.transition = "background-color 0.15s ease";
        const c = W4(r),
            h = o?.isSelected(e) ?? !0;
        c ? h || (a.style.opacity = "0.4") : a.style.opacity = "0.5", a.addEventListener("mouseenter", () => {
            a.style.backgroundColor = z.theme.legendHoverBackground
        }), a.addEventListener("mouseleave", () => {
            a.style.backgroundColor = "transparent"
        });
        const d = this.createElement("span");
        if (d.style.display = "inline-block", d.style.width = "12px", d.style.height = "12px", d.style.marginRight = "8px", d.style.borderRadius = "2px", d.style.flexShrink = "0", d.style.cursor = o ? "pointer" : "default", o && d.addEventListener("click", y => {
                y.preventDefault(), y.stopPropagation(), o.toggleProcess(e)
            }), !c) d.style.background = "transparent", d.style.border = `1px dashed ${z.theme.legendInactiveSwatchBorder}`;
        else {
            const y = s.get(e);
            y ? (d.style.background = y, d.style.border = `0.5px solid ${z.theme.legendActiveSwatchBorder}`) : (d.style.background = z.theme.legendUnmappedSwatchBackground, d.style.border = `1px dashed ${z.theme.legendUnmappedSwatchBorder}`)
        }
        a.appendChild(d);
        const u = this.createElement("span");
        u.style.width = "50px", u.style.flexShrink = "0", u.style.marginRight = "2px", u.style.marginLeft = "10px", u.style.color = z.theme.legendPidForeground, u.style.fontFamily = "monospace", u.style.fontSize = "10px", u.textContent = r.pid.toString(), a.appendChild(u);
        const f = this.createElement("span");
        if (f.style.flex = "1", f.style.marginRight = "12px", f.style.overflow = "hidden", f.style.textOverflow = "ellipsis", f.style.whiteSpace = "nowrap", f.textContent = e, r.argv.length > 0) {
            const y = this.createElement("span");
            y.style.color = "#888", y.style.marginLeft = "6px", y.textContent = r.argv.join(" "), f.appendChild(y)
        }
        if (f.addEventListener("dblclick", y => {
                y.preventDefault(), y.stopPropagation(), o?.selectOnly(e)
            }), r.isRemote) {
            const y = this.createElement("span");
            y.textContent = "\u{1F310}", y.style.fontSize = "10px", y.style.marginLeft = "4px", y.style.opacity = "0.7", y.title = r.remoteAuthority || "Remote process", f.appendChild(y)
        }
        a.appendChild(f);
        let p = null;
        if (r.extensionId && r.extensionId.length > 0) p = this.createElement("span"), p.style.flexShrink = "0", p.style.marginRight = "12px", p.style.color = z.theme.legendExtensionForeground, p.style.fontSize = "10px", p.style.fontStyle = "italic", p.style.overflow = "hidden", p.style.textOverflow = "ellipsis", p.style.whiteSpace = "nowrap", p.style.width = "180px", p.style.display = "inline-block", p.style.textAlign = "right", p.textContent = r.extensionId, p.title = r.extensionId, a.appendChild(p);
        else {
            const y = this.createElement("span");
            y.style.width = "180px", y.style.display = "inline-block", y.style.marginRight = "12px", a.appendChild(y)
        }
        const g = this.createElement("span");
        g.style.color = z.theme.legendValueForeground, g.style.fontWeight = "600", g.style.flexShrink = "0", g.style.whiteSpace = "nowrap", g.style.width = "110px", g.style.display = "inline-block";
        const _ = i > 0 ? t / i * 100 : 0;
        return g.textContent = `${t.toFixed(1)} ${n} (${_.toFixed(1)}%)`, a.appendChild(g), a
    }
    static clearChildren(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }
    static createElement(e) {
        return T.document.createElement(e)
    }
};

function Xd(e) {
    if (!e) return;
    const t = e.split("+");
    if (t.length < 2) return;
    const i = t[0];
    if (!i || i !== "background-composer") return;
    const s = t[1];
    if (s) return s
}
var qs = "Shared",
    js = class {
        static parse(e, t) {
            const i = e.split(`
`).filter(a => a.trim().length > 0),
                s = this.createParseContext(t);
            if (i.length === 0) return {
                samples: [],
                seriesMem: [],
                seriesCpu: [],
                groupBy: s.groupBy
            };
            const n = this.parseSamples(i, s);
            if (n.length === 0) return {
                samples: n,
                seriesMem: [],
                seriesCpu: [],
                groupBy: s.groupBy
            };
            const r = this.computeTopSeries(n, "memory", 20, s.groupBy),
                o = this.computeTopSeries(n, "cpu", 20, s.groupBy);
            return {
                samples: n,
                seriesMem: r,
                seriesCpu: o,
                groupBy: s.groupBy
            }
        }
        static parseSamples(e, t) {
            const i = [];
            for (const s of e) try {
                const n = this.parseLine(s, t);
                n && i.push(n)
            } catch {}
            return i.sort((s, n) => s.sampleEnd - n.sampleEnd)
        }
        static parseLine(e, t) {
            const i = JSON.parse(e),
                s = Number(i.sampleEnd);
            if (!Number.isFinite(s)) return null;
            const n = i.origin === "remote",
                r = i.remoteOs,
                o = i.remoteAuthority,
                c = (Array.isArray(i.rows) ? i.rows : []).map(u => {
                    const f = this.parseRow(u);
                    return n && (f.isRemote = !0, f.remoteOs = r, f.remoteAuthority = o), t.groupBy === "workspace" && (f.workspaceGroup = n ? this.resolveWorkspaceGroupName(o, t.workspaceNameByBcId) : qs), f
                }),
                h = c.reduce((u, f) => u + f.memoryDuringSamplePeakMb, 0),
                d = c.reduce((u, f) => u + f.cpuDuringSamplePeakPct, 0);
            return {
                sampleEnd: s,
                totalPeakMemMb: h,
                totalPeakCpuPct: d,
                rows: c
            }
        }
        static createParseContext(e) {
            if (!e?.groupByWorkspace) return {
                groupBy: "process",
                workspaceNameByBcId: new Map
            };
            const t = new Map;
            for (const i of e.workspaceEntries ?? []) {
                const s = Xd(i.remoteAuthority);
                s && (t.has(s) || t.set(s, i.displayName))
            }
            return {
                groupBy: "workspace",
                workspaceNameByBcId: t
            }
        }
        static resolveWorkspaceGroupName(e, t) {
            const i = Xd(e);
            return i ? t.get(i) ?? qs : qs
        }
        static parseRow(e) {
            const t = Number(e?.pid ?? 0),
                i = String(e?.processName ?? "unknown"),
                s = String(e?.extensionId ?? ""),
                n = Number(e?.memoryDuringSamplePeakMb ?? 0),
                r = Number(e?.cpuDuringSamplePeakPct ?? 0),
                o = Array.isArray(e?.argv) ? e.argv : [];
            return {
                pid: Number.isFinite(t) ? t : 0,
                processName: i,
                extensionId: s,
                memoryDuringSamplePeakMb: Number.isFinite(n) ? n : 0,
                cpuDuringSamplePeakPct: Number.isFinite(r) ? r : 0,
                argv: o
            }
        }
        static computeTopSeries(e, t, i, s = "process") {
            const n = t === "memory",
                r = new Map;
            for (const a of e)
                for (const c of a.rows) {
                    const h = n ? c.memoryDuringSamplePeakMb : c.cpuDuringSamplePeakPct,
                        d = s === "workspace" ? c.workspaceGroup ?? qs : c.processName;
                    r.set(d, (r.get(d) ?? 0) + h)
                }
            return Array.from(r.entries()).sort((a, c) => c[1] - a[1]).slice(0, i).map(([a, c]) => {
                const h = e.map(d => {
                    const u = d.rows.filter(f => s === "workspace" ? (f.workspaceGroup ?? qs) === a : f.processName === a);
                    return u.length === 0 ? 0 : u.reduce((f, p) => {
                        const g = n ? p.memoryDuringSamplePeakMb : p.cpuDuringSamplePeakPct;
                        return f + g
                    }, 0)
                });
                return {
                    processName: a,
                    totalContrib: c,
                    values: h
                }
            })
        }
        static filterToTimeRange(e, t, i) {
            if (i === null || e.length === 0) return {
                samples: e,
                series: t
            };
            const s = e[e.length - 1].sampleEnd - i,
                n = e.findIndex(a => a.sampleEnd >= s);
            if (n === -1) return {
                samples: [],
                series: []
            };
            if (n === 0) return {
                samples: e,
                series: t
            };
            const r = e.slice(n),
                o = t.map(a => ({
                    processName: a.processName,
                    totalContrib: a.totalContrib,
                    values: a.values.slice(n)
                }));
            return {
                samples: r,
                series: o
            }
        }
    },
    Zd = class {
        constructor() {
            this.allProcessNames = new Set, this.onChangeCallback = null, this.deselectedProcesses = new Set
        }
        updateAllProcessNames(e) {
            this.allProcessNames.clear();
            for (const t of e) t.processName !== "Others" && this.allProcessNames.add(t.processName);
            for (const t of this.deselectedProcesses) this.allProcessNames.has(t) || this.deselectedProcesses.delete(t)
        }
        toggleProcess(e) {
            this.deselectedProcesses.has(e) ? this.deselectedProcesses.delete(e) : (this.deselectedProcesses.add(e), this.deselectedProcesses.size === this.allProcessNames.size && this.deselectedProcesses.clear()), this.notifyChange()
        }
        selectOnly(e) {
            this.deselectedProcesses.clear();
            for (const t of this.allProcessNames) t !== e && this.deselectedProcesses.add(t);
            this.notifyChange()
        }
        isSelected(e) {
            return !this.deselectedProcesses.has(e)
        }
        isActive() {
            return this.deselectedProcesses.size > 0
        }
        clearAll() {
            this.deselectedProcesses.clear(), this.notifyChange()
        }
        filterSeries(e) {
            return this.isActive() ? e.filter(t => this.isSelected(t.processName)) : e
        }
        filterSamples(e) {
            return this.isActive() ? e.map(t => ({
                ...t,
                rows: t.rows.filter(i => this.isSelected(i.processName))
            })) : e
        }
        onChange(e) {
            this.onChangeCallback = e
        }
        notifyChange() {
            this.onChangeCallback && this.onChangeCallback()
        }
    },
    Qd = class {
        constructor(e) {
            this.fullHistoryData = e, this.originFilter = "local", this.selectedTimeRangeMsMemory = null, this.selectedTimeRangeMsCpu = null, this.historyCanvasMouseMoveMem = null, this.historyCanvasMouseMoveCpu = null, this.historyCanvasMouseLeaveMem = null, this.historyCanvasMouseLeaveCpu = null, this.historyCanvasClickMem = null, this.historyCanvasClickCpu = null, this.historyResizeHandlerMem = null, this.historyResizeHandlerCpu = null, this.hoveredSampleIndexMem = -1, this.hoveredSampleIndexCpu = -1, this.selectedSampleIndexMem = -1, this.selectedSampleIndexCpu = -1, this.isMouseOverChartMem = !1, this.isMouseOverChartCpu = !1, this.analysisManagerMem = new Zd, this.analysisManagerCpu = new Zd, this.analysisManagerMem.onChange(() => this.render("memory")), this.analysisManagerCpu.onChange(() => this.render("cpu"))
        }
        setOriginFilter(e) {
            this.originFilter = e
        }
        hasRemoteData() {
            return this.fullHistoryData.samples.some(e => e.rows.some(t => t.isRemote === !0))
        }
        render(e) {
            const t = e === "memory",
                i = t ? "mem" : "cpu",
                s = z.getUnit(e),
                n = t ? this.analysisManagerMem : this.analysisManagerCpu,
                r = this.filterDataByOrigin(this.fullHistoryData),
                o = T.document.getElementById(`history-${i}-chart`),
                a = T.document.getElementById(`history-${i}-legend`),
                c = T.document.getElementById(`history-${i}`);
            if (!o || !a || !c) return;
            const h = t ? this.selectedTimeRangeMsMemory : this.selectedTimeRangeMsCpu;
            let {
                samples: d,
                series: u,
                colorMap: f
            } = this.prepareData(r, e, h, n);
            if (d.length === 0 || u.length === 0) {
                this.renderEmptyState(o, c), Yd.updateLegend(a, [], [], 0, f, s, t, n);
                return
            }
            const p = We.setupCanvas(o, c),
                g = o.getContext("2d");
            if (!g) return;
            g.setTransform(p.dpr, 0, 0, p.dpr, 0, 0);
            const {
                minTime: _,
                maxTime: y,
                timeRange: w,
                timeToX: C,
                maxY: D,
                valueToY: E
            } = this.computeScales(d, u, p), b = We.computeCumulativeStacks(d, u), {
                segments: S,
                gaps: I
            } = U4.computeGapSegments(d, w, p.chartWidth);
            let P = t ? this.hoveredSampleIndexMem : this.hoveredSampleIndexCpu,
                j = t ? this.selectedSampleIndexMem : this.selectedSampleIndexCpu;
            (P < 0 || P >= d.length) && (P = d.length - 1, t ? this.hoveredSampleIndexMem = P : this.hoveredSampleIndexCpu = P), (j < 0 || j >= d.length) && (j = d.length - 1, t ? this.selectedSampleIndexMem = j : this.selectedSampleIndexCpu = j);
            const ue = ($, Oe, Qt, M, k) => {
                    We.drawBackground(g, p), We.drawGapOverlays(g, p, I, C);
                    const R = Da.buildYTicks(D, 5),
                        N = Da.buildTimeTicks(_, y, p.chartWidth);
                    We.drawGrid(g, p, R, N, E, C), We.drawStackedAreas(g, p, u, d, b, S, C, E), We.drawAxes(g, p), We.drawYLabels(g, p, R, E, s), We.drawXLabels(g, p, N, C, w), We.drawSelectionIndicator(g, p, Oe, d, C), Qt && (We.drawHoverIndicator(g, p, $, d, C), M !== void 0 && k !== void 0 && $ >= 0 && $ < d.length && We.drawHoverTooltip(g, p, $, d, C, M, k, t, s)), Yd.updateLegend(a, u, d, Oe, f, s, t, n)
                },
                K = t ? this.isMouseOverChartMem : this.isMouseOverChartCpu;
            ue(P, j, K), this.setupMouseInteraction(o, d, C, P, j, ue, e), this.setupTimeRangeControls(i, e), this.setupResizeHandler(e)
        }
        prepareData(e, t, i, s) {
            const r = t === "memory" ? e.seriesMem : e.seriesCpu;
            let o = e.samples;
            const a = new Map;
            for (let d = 0; d < r.length; d++) {
                const u = r[d].processName;
                if (u !== "Others") {
                    const f = z.BASE_COLORS[d % z.BASE_COLORS.length];
                    a.set(u, f)
                }
            }
            const c = js.filterToTimeRange(o, r, i);
            o = c.samples;
            let h = c.series;
            return s.updateAllProcessNames(h), h = h.map(d => {
                const u = a.get(d.processName);
                return {
                    ...d,
                    color: u || z.BASE_COLORS[z.BASE_COLORS.length - 1]
                }
            }), s.isActive() && (h = s.filterSeries(h)), s.isActive() || (h = z.appendOthersSeries(h, o, t)), {
                samples: o,
                series: h,
                colorMap: a
            }
        }
        computeScales(e, t, i) {
            const s = e[0].sampleEnd,
                n = e[e.length - 1].sampleEnd,
                r = Math.max(1, n - s),
                o = d => i.margin.left + (d - s) / r * i.chartWidth,
                a = We.computeCumulativeStacks(e, t),
                c = We.computeMaxY(a);
            return {
                minTime: s,
                maxTime: n,
                timeRange: r,
                timeToX: o,
                maxY: c,
                valueToY: d => i.margin.top + i.chartHeight - d / c * i.chartHeight
            }
        }
        setupMouseInteraction(e, t, i, s, n, r, o) {
            const a = o === "memory",
                c = a ? this.historyCanvasMouseMoveMem : this.historyCanvasMouseMoveCpu,
                h = a ? this.historyCanvasMouseLeaveMem : this.historyCanvasMouseLeaveCpu,
                d = a ? this.historyCanvasClickMem : this.historyCanvasClickCpu;
            c && e.removeEventListener("mousemove", c), h && e.removeEventListener("mouseleave", h), d && e.removeEventListener("click", d);
            const u = _ => {
                    let y = 0,
                        w = Number.POSITIVE_INFINITY;
                    for (let C = 0; C < t.length; C++) {
                        const D = Math.abs(i(t[C].sampleEnd) - _);
                        D < w && (w = D, y = C)
                    }
                    return y
                },
                f = _ => {
                    const y = e.getBoundingClientRect(),
                        w = _.clientX - y.left,
                        C = _.clientY - y.top,
                        D = u(w);
                    D !== s && (s = D, a ? this.hoveredSampleIndexMem = D : this.hoveredSampleIndexCpu = D), a ? this.isMouseOverChartMem = !0 : this.isMouseOverChartCpu = !0, T.requestAnimationFrame(() => r(s, n, !0, w, C))
                },
                p = () => {
                    a ? this.isMouseOverChartMem = !1 : this.isMouseOverChartCpu = !1, T.requestAnimationFrame(() => r(s, n, !1))
                },
                g = _ => {
                    const y = e.getBoundingClientRect(),
                        w = _.clientX - y.left,
                        C = _.clientY - y.top,
                        D = u(w);
                    n = D, a ? this.selectedSampleIndexMem = D : this.selectedSampleIndexCpu = D, T.requestAnimationFrame(() => r(s, n, !0, w, C))
                };
            e.addEventListener("mousemove", f), e.addEventListener("mouseleave", p), e.addEventListener("click", g), e.style.cursor = "pointer", a ? (this.historyCanvasMouseMoveMem = f, this.historyCanvasMouseLeaveMem = p, this.historyCanvasClickMem = g) : (this.historyCanvasMouseMoveCpu = f, this.historyCanvasMouseLeaveCpu = p, this.historyCanvasClickCpu = g)
        }
        setupTimeRangeControls(e, t) {
            const i = t === "memory",
                s = T.document.getElementById(`time-range-controls-${e}`);
            if (!s) return;
            const n = () => i ? this.selectedTimeRangeMsMemory : this.selectedTimeRangeMsCpu,
                r = o => {
                    i ? this.selectedTimeRangeMsMemory = o : this.selectedTimeRangeMsCpu = o
                };
            if (s.children.length === 0)
                for (const o of z.TIME_RANGES) {
                    const a = T.document.createElement("button");
                    a.textContent = o.label, a.setAttribute("data-range", String(o.ms)), this.styleRangeButton(a, n() === o.ms), a.addEventListener("click", () => {
                        r(o.ms), this.render(t)
                    }), s.appendChild(a)
                } else Array.from(s.querySelectorAll("button")).forEach((a, c) => {
                    const h = n() === z.TIME_RANGES[c].ms;
                    this.styleRangeButton(a, h)
                })
        }
        setupResizeHandler(e) {
            const t = e === "memory";
            this.historyResizeHandlerMem && (T.removeEventListener("resize", this.historyResizeHandlerMem), this.historyResizeHandlerMem = null), this.historyResizeHandlerCpu && (T.removeEventListener("resize", this.historyResizeHandlerCpu), this.historyResizeHandlerCpu = null);
            const i = () => {
                this.render(e)
            };
            T.addEventListener("resize", i, {
                passive: !0
            }), t ? this.historyResizeHandlerMem = i : this.historyResizeHandlerCpu = i
        }
        styleRangeButton(e, t) {
            e.classList.add("process-history-range-button"), e.classList.toggle("active", t)
        }
        renderEmptyState(e, t) {
            const i = We.setupCanvas(e, t),
                s = e.getContext("2d");
            s && (s.setTransform(i.dpr, 0, 0, i.dpr, 0, 0), s.fillStyle = z.theme.backgroundColor, s.fillRect(0, 0, i.cssWidth, i.cssHeight), s.fillStyle = z.theme.emptyStateTextColor, s.font = "13px sans-serif", s.fillText("No data available", i.margin.left + 8, i.margin.top + 18))
        }
        updateData(e) {
            this.fullHistoryData = e
        }
        filterDataByOrigin(e) {
            const t = e.samples.map(i => ({
                ...i,
                rows: i.rows.filter(s => {
                    const n = s.isRemote === !0;
                    return this.originFilter === "remote" ? n : !n
                })
            })).filter(i => i.rows.length > 0);
            return {
                samples: t,
                seriesMem: js.computeTopSeries(t, "memory", 20, e.groupBy),
                seriesCpu: js.computeTopSeries(t, "cpu", 20, e.groupBy),
                groupBy: e.groupBy
            }
        }
    },
    Jd = /\s--inspect(?:-brk|port)?=(?<port>\d+)?/,
    V4 = /\s--inspect-port=(?<port>\d+)/,
    K4 = class {
        getHeight(e) {
            return 22
        }
        getTemplateId(e) {
            return Zt(e) ? "process" : or(e) ? "machine" : nr(e) ? "error" : Ea(e) ? "header" : ""
        }
    },
    G4 = class {
        constructor(e) {
            this.flattenGroupRoots = e
        }
        hasChildren(e) {
            if (nr(e)) return !1;
            if (or(e) && this.flattenGroupRoots && Zt(e.rootProcess)) {
                const t = e.rootProcess;
                if (t.isGroupRoot) return !!t.children?.length
            }
            return Zt(e) ? !!e.children?.length : !0
        }
        getChildren(e) {
            if (Zt(e)) return e.children ? e.children : [];
            if (nr(e)) return [];
            if (Ea(e)) return e.processRoots.length > 1 ? e.processRoots : [e.processRoots[0].rootProcess];
            if (or(e)) {
                if (this.flattenGroupRoots && Zt(e.rootProcess)) {
                    const t = e.rootProcess;
                    if (t.isGroupRoot) return t.children ?? []
                }
                return [e.rootProcess]
            }
            return [e.processes]
        }
    },
    q4 = class {
        constructor() {
            this.templateId = "header"
        }
        renderTemplate(e) {
            const t = Q(e, ie(".row")),
                i = Q(t, ie(".nameLabel")),
                s = Q(t, ie(".cpu")),
                n = Q(t, ie(".memory")),
                r = Q(t, ie(".remoteIcon"));
            r.style.display = "flex", r.style.alignItems = "center", r.style.justifyContent = "center", r.style.width = "16px", r.style.paddingRight = "4px";
            const o = Q(t, ie(".pid"));
            return {
                name: i,
                CPU: s,
                memory: n,
                PID: o,
                remoteIcon: r
            }
        }
        renderElement(e, t, i, s) {
            i.name.textContent = V(165, null), i.CPU.textContent = V(166, null), i.PID.textContent = V(167, null), i.memory.textContent = V(168, null)
        }
        disposeTemplate(e) {}
    },
    j4 = class {
        constructor() {
            this.templateId = "machine"
        }
        renderTemplate(e) {
            const t = Object.create(null),
                i = Q(e, ie(".row"));
            return t.name = Q(i, ie(".nameLabel")), t
        }
        renderElement(e, t, i, s) {
            i.name.textContent = e.element.name
        }
        disposeTemplate(e) {}
    },
    Y4 = class {
        constructor() {
            this.templateId = "error"
        }
        renderTemplate(e) {
            const t = Object.create(null),
                i = Q(e, ie(".row"));
            return t.name = Q(i, ie(".nameLabel")), t
        }
        renderElement(e, t, i, s) {
            i.name.textContent = e.element.errorMessage
        }
        disposeTemplate(e) {}
    },
    X4 = class {
        constructor(e, t, i) {
            this.platform = e, this.totalMem = t, this.mapPidToName = i, this.templateId = "process"
        }
        renderTemplate(e) {
            const t = Q(e, ie(".row")),
                i = Q(t, ie(".nameLabel")),
                s = Q(t, ie(".cpu")),
                n = Q(t, ie(".memory")),
                r = Q(t, ie(".remoteIcon"));
            r.style.display = "flex", r.style.alignItems = "center", r.style.justifyContent = "center", r.style.width = "16px", r.style.paddingRight = "4px";
            const o = Q(t, ie(".pid"));
            return {
                name: i,
                CPU: s,
                PID: o,
                memory: n,
                remoteIcon: r
            }
        }
        renderElement(e, t, i, s) {
            const {
                element: n
            } = e, r = n.pid.toFixed(0);
            let o = n.name;
            this.mapPidToName.has(n.pid) && (o = this.mapPidToName.get(n.pid)), i.name.textContent = o, i.name.title = n.cmd, i.CPU.textContent = n.load.toFixed(0), i.PID.textContent = r, i.PID.parentElement.id = `pid-${r}`;
            let a = "";
            const c = n.remoteMem;
            n.isRemote || n.mem === 0 ? (typeof c == "number" && c > 0 ? a = `${(c/va.MB).toFixed(0)}` : a = "?", i.memory.style.fontStyle = "italic") : (a = ((this.platform === "win32" ? n.mem : this.totalMem * (n.mem / 100)) / va.MB).toFixed(0), i.memory.style.fontStyle = "normal"), i.memory.textContent = a, n.isRemote ? (i.remoteIcon.className = "remoteIcon codicon codicon-globe", i.remoteIcon.title = "Remote Process") : (i.remoteIcon.className = "remoteIcon", i.remoteIcon.title = "")
        }
        disposeTemplate(e) {}
    };

function or(e) {
    return !!e.name && !!e.rootProcess
}

function Ea(e) {
    return !!e.processRoots
}

function Zt(e) {
    return !!e.pid
}
var Z4 = class {
    constructor(e, t) {
        this.data = t, this.mapPidToName = new Map, this.processNodeIdByItem = new WeakMap, this.nextProcessNodeId = 0, this.historyChartRenderer = null, this.historyContent = null, this.mainProcessService = new w4(e), this.nativeHostService = new _a(e, this.mainProcessService), this.isGlassWorkspaceMode = t.mode === "glassWorkspace", this.applyStyles(t.styles), this.setEventHandlers(t);
        const i = T.document.getElementById("tab-live"),
            s = T.document.getElementById("tab-history-mem"),
            n = T.document.getElementById("tab-history-cpu");
        i?.addEventListener("click", () => this.showLive()), s?.addEventListener("click", () => {
            this.showHistoryMem()
        }), n?.addEventListener("click", () => {
            this.showHistoryCpu()
        }), this.initializeHistorySnapshotControls(), this.setActiveTab(i, [s, n]), ke.on("vscode:pidToNameResponse", (r, o) => {
            this.mapPidToName.clear();
            for (const [a, c] of o) this.mapPidToName.set(a, c)
        }), this.isGlassWorkspaceMode ? ke.on("vscode:listProcessesForGlassResponse", async (r, o) => {
            try {
                const a = await this.toGlassMachineProcessInformation(o.groups);
                await this.updateProcessTree(a)
            } catch {
                const c = o.groups.map(h => ({
                    id: h.workspaceId,
                    name: h.displayName,
                    rootProcess: h.rootProcess
                }));
                await this.updateProcessTree(c)
            } finally {
                this.requestProcessList(0)
            }
        }) : ke.on("vscode:listProcessesResponse", async (r, o) => {
            o.forEach((a, c) => {
                Zt(a.rootProcess) && (a.rootProcess.name = c === 0 ? `${this.data.applicationName} main` : "remote agent")
            }), await this.updateProcessTree(o), this.requestProcessList(0)
        }), this.lastRequestTime = Date.now(), this.requestCurrentProcessList()
    }
    async updateProcessTree(e) {
        if (!this.tree) {
            await this.createProcessTree(e);
            return
        }
        this.tree.setInput({
            processes: {
                processRoots: e
            }
        }), this.tree.layout(T.innerHeight, T.innerWidth)
    }
    requestCurrentProcessList() {
        if (ke.send("vscode:pidToNameRequest"), this.isGlassWorkspaceMode) {
            ke.send("vscode:listProcessesForGlass", this.data.glassContext);
            return
        }
        ke.send("vscode:listProcesses")
    }
    getProcessNodeId(e) {
        if (!this.isGlassWorkspaceMode) return e.pid.toString();
        let t = this.processNodeIdByItem.get(e);
        return t || (t = `${e.pid}:${this.nextProcessNodeId++}`, this.processNodeIdByItem.set(e, t)), t
    }
    async getTotalMemBytes() {
        if (this.totalMemBytes !== void 0) return this.totalMemBytes;
        const {
            totalmem: e
        } = await this.nativeHostService.getOSStatistics();
        return this.totalMemBytes = e, e
    }
    async toGlassMachineProcessInformation(e) {
        const t = await this.getTotalMemBytes();
        return e.map(i => {
            const s = this.summarizeGroup(i.rootProcess, t),
                n = s.processCount === 1 ? "process" : "processes",
                r = `${i.displayName}  |  CPU ${s.cpu.toFixed(0)}  |  Mem ${s.memoryMb.toFixed(0)} MB  |  ${s.processCount} ${n}`;
            return {
                id: i.workspaceId,
                name: r,
                rootProcess: i.rootProcess
            }
        })
    }
    summarizeGroup(e, t) {
        let i = 0,
            s = 0,
            n = 0;
        const r = new Set;
        for (const o of e.children ?? []) {
            const a = this.summarizeProcessTree(o, t, r);
            i += a.cpu, s += a.memoryBytes, n += a.processCount
        }
        return {
            cpu: i,
            memoryMb: s / va.MB,
            processCount: n
        }
    }
    summarizeProcessTree(e, t, i) {
        if (i.has(e)) return {
            cpu: 0,
            memoryBytes: 0,
            processCount: 0
        };
        i.add(e);
        const s = e;
        let n = s.load,
            r = this.getProcessMemoryBytes(s, t),
            o = s.isGroupRoot ? 0 : 1;
        for (const a of s.children ?? []) {
            const c = this.summarizeProcessTree(a, t, i);
            n += c.cpu, r += c.memoryBytes, o += c.processCount
        }
        return {
            cpu: n,
            memoryBytes: r,
            processCount: o
        }
    }
    getProcessMemoryBytes(e, t) {
        return e.isRemote || e.mem === 0 ? e.remoteMem ?? 0 : this.data.platform === "win32" ? e.mem : t * (e.mem / 100)
    }
    getHistoryParseOptions() {
        if (this.isGlassWorkspaceMode) return {
            groupByWorkspace: !0,
            workspaceEntries: this.data.glassContext?.workspaceEntries
        }
    }
    showLive() {
        const e = T.document.getElementById("process-list"),
            t = T.document.getElementById("history-mem"),
            i = T.document.getElementById("history-cpu"),
            s = T.document.getElementById("tab-live"),
            n = T.document.getElementById("tab-history-mem"),
            r = T.document.getElementById("tab-history-cpu");
        e && (e.style.display = "", t && (t.style.display = "none"), i && (i.style.display = "none"), this.setActiveTab(s, [n, r]))
    }
    async showHistoryMem() {
        await this.showHistoryTab("memory")
    }
    async showHistoryCpu() {
        await this.showHistoryTab("cpu")
    }
    async showHistoryTab(e) {
        const t = T.document.getElementById("process-list"),
            i = T.document.getElementById("history-mem"),
            s = T.document.getElementById("history-cpu"),
            n = T.document.getElementById("tab-live"),
            r = T.document.getElementById("tab-history-mem"),
            o = T.document.getElementById("tab-history-cpu"),
            a = e === "memory",
            c = a ? i : s,
            h = a ? r : o,
            d = a ? [n, o] : [n, r],
            u = T.document.getElementById(a ? "history-mem-legend" : "history-cpu-legend");
        if (!(!c || !t)) {
            t.style.display = "none", i && (i.style.display = a ? "" : "none"), s && (s.style.display = a ? "none" : ""), this.setActiveTab(h, d);
            try {
                if (!this.historyChartRenderer) {
                    const p = await this.mainProcessService.getChannel("cursorProclist").call("readProcessMonitorData");
                    if (!p || p.length === 0) {
                        u && (u.textContent = `No history data available yet.
Waiting for samples to be collected...`);
                        return
                    }
                    const g = js.parse(p, this.getHistoryParseOptions());
                    if (!g) {
                        u && (u.textContent = "Failed to parse history data.");
                        return
                    }
                    this.historyChartRenderer = new Qd(g), this.historyContent = p, this.addOriginFilterDropdown(g)
                }
                this.historyChartRenderer.render(e)
            } catch (f) {
                u && (u.textContent = `Failed to load history: ${String(f)}`)
            }
        }
    }
    initializeHistorySnapshotControls() {
        const e = (t, i) => {
            const s = t === "mem" ? "analysis-bar-mem" : "analysis-bar-cpu",
                n = T.document.getElementById(s);
            if (!n) return;
            n.style.display = "flex";
            const r = T.document.createElement("div");
            r.className = "process-history-right-controls";
            const o = T.document.createElement("input");
            o.type = "file", o.accept = ".log,.jsonl,text/plain,*/*", o.style.display = "none", r.appendChild(o);
            const a = T.document.createElement("button");
            a.className = "process-history-control-button codicon codicon-save", a.title = "Download snapshot", a.setAttribute("aria-label", "Download snapshot"), a.addEventListener("click", () => {
                this.downloadHistorySnapshot()
            }), r.appendChild(a);
            const c = T.document.createElement("button");
            c.className = "process-history-control-button codicon codicon-cloud-upload", c.title = "Upload snapshot", c.setAttribute("aria-label", "Upload snapshot"), c.addEventListener("click", () => {
                o.click()
            }), r.appendChild(c), n.appendChild(r), o.addEventListener("change", () => {
                const h = o.files,
                    d = h && h.length > 0 ? h[0] : void 0;
                d && (this.uploadHistorySnapshotFromFile(d, i), o.value = "")
            })
        };
        e("mem", "memory"), e("cpu", "cpu")
    }
    addOriginFilterDropdown(e) {
        e.samples.some(i => i.rows.some(s => s.isRemote === !0)) && ["analysis-bar-mem", "analysis-bar-cpu"].forEach(i => {
            const s = T.document.getElementById(i);
            if (!s || s.querySelector("select")) return;
            const n = T.document.createElement("div");
            n.className = "process-history-left-controls";
            const r = T.document.createElement("select");
            r.className = "process-history-select";
            const o = T.document.createElement("option");
            o.value = "local", o.textContent = "Local", r.appendChild(o);
            const a = T.document.createElement("option");
            a.value = "remote", a.textContent = "Remote", r.appendChild(a), r.addEventListener("change", () => {
                if (this.historyChartRenderer) {
                    const c = i.includes("mem") ? "memory" : "cpu";
                    this.historyChartRenderer.setOriginFilter(r.value), this.historyChartRenderer.render(c)
                }
            }), n.appendChild(r), s.insertBefore(n, s.firstChild)
        })
    }
    async downloadHistorySnapshot() {
        try {
            let e = this.historyContent;
            if (!e || e.length === 0) {
                if (e = await this.mainProcessService.getChannel("cursorProclist").call("readProcessMonitorData"), !e || e.length === 0) return;
                this.historyContent = e
            }
            const t = new Blob([e], {
                    type: "text/plain;charset=utf-8"
                }),
                i = T.URL.createObjectURL(t),
                s = T.document.createElement("a"),
                n = new Date().toISOString().replace(/[:.]/g, "-");
            s.href = i, s.download = `cursor-process-history-${n}.jsonl`, T.document.body.appendChild(s), s.click(), T.document.body.removeChild(s), T.URL.revokeObjectURL(i)
        } catch {}
    }
    uploadHistorySnapshotFromFile(e, t) {
        const i = new FileReader;
        i.onload = () => {
            const s = i.result,
                n = typeof s == "string" ? s : "";
            if (!n) return;
            const r = js.parse(n, this.getHistoryParseOptions());
            if (!r) {
                const o = t === "memory" ? "history-mem-legend" : "history-cpu-legend",
                    a = T.document.getElementById(o);
                a && (a.textContent = "Failed to parse uploaded history snapshot.");
                return
            }
            this.historyChartRenderer ? this.historyChartRenderer.updateData(r) : this.historyChartRenderer = new Qd(r), this.historyContent = n, this.addOriginFilterDropdown(r), this.historyChartRenderer.render(t)
        }, i.readAsText(e)
    }
    setActiveTab(e, t) {
        e && e.classList.add("active");
        const i = Array.isArray(t) ? t : [t];
        for (const s of i) s && s.classList.remove("active")
    }
    setEventHandlers(e) {
        T.document.onkeydown = t => {
            const i = e.platform === "darwin" ? t.metaKey : t.ctrlKey;
            i && t.keyCode === 87 && (t.stopPropagation(), t.preventDefault(), ke.send("vscode:closeProcessExplorer")), i && t.keyCode === 187 && H4(T), i && t.keyCode === 189 && z4(T)
        }
    }
    async createProcessTree(e) {
        const t = T.document.getElementById("process-list");
        if (!t) return;
        const {
            totalmem: i
        } = await this.nativeHostService.getOSStatistics(), s = [new X4(this.data.platform, i, this.mapPidToName), new q4, new j4, new Y4];
        this.tree = new i4("processExplorer", t, new K4, s, new G4(this.isGlassWorkspaceMode), {
            identityProvider: {
                getId: n => Zt(n) ? this.getProcessNodeId(n) : nr(n) ? n.hostName : Ea(n) ? "processes" : or(n) ? n.id ?? n.name : "header"
            }
        }), this.tree.setInput({
            processes: {
                processRoots: e
            }
        }), this.tree.layout(T.innerHeight, T.innerWidth), this.tree.onKeyDown(n => {
            const r = new Me(n);
            if (r.keyCode === 35 && r.altKey) {
                const o = this.getSelectedPids();
                Promise.all(o.map(a => this.nativeHostService.killProcess(a, "SIGTERM"))).then(() => this.tree?.refresh())
            }
        }), this.tree.onContextMenu(n => {
            Zt(n.element) && this.showContextMenu(n.element, !0)
        }), t.style.height = `${T.innerHeight}px`, T.addEventListener("resize", () => {
            t.style.height = `${T.innerHeight}px`, this.tree?.layout(T.innerHeight, T.innerWidth)
        })
    }
    isDebuggable(e) {
        const t = Jd.exec(e);
        return t && t.groups.port !== "0" || e.indexOf("node ") >= 0 || e.indexOf("node.exe") >= 0
    }
    isBgWindow(e) {
        const t = this.mapPidToName.get(e.pid);
        return t ? t.startsWith("bg-window (") : !1
    }
    isRemoteAgent(e) {
        return e.name === "remote agent"
    }
    openDevToolsForBgWindow(e) {
        ke.send("vscode:workbenchCommand", {
            id: "workbench.action.openDevToolsForBgWindow",
            from: "processExplorer",
            args: [{
                pid: e.pid
            }]
        })
    }
    attachTo(e) {
        const t = {
            type: "node",
            request: "attach",
            name: `process ${e.pid}`
        };
        let i = Jd.exec(e.cmd);
        i ? t.port = Number(i.groups.port) : t.processId = String(e.pid), i = V4.exec(e.cmd), i && (t.port = Number(i.groups.port)), ke.send("vscode:workbenchCommand", {
            id: "debug.startFromConfig",
            from: "processExplorer",
            args: [t]
        })
    }
    applyStyles(e) {
        const t = Es(),
            i = [];
        e.listFocusBackground && (i.push(`.monaco-list:focus .monaco-list-row.focused { background-color: ${e.listFocusBackground}; }`), i.push(`.monaco-list:focus .monaco-list-row.focused:hover { background-color: ${e.listFocusBackground}; }`)), e.listFocusForeground && i.push(`.monaco-list:focus .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), e.listActiveSelectionBackground && (i.push(`.monaco-list:focus .monaco-list-row.selected { background-color: ${e.listActiveSelectionBackground}; }`), i.push(`.monaco-list:focus .monaco-list-row.selected:hover { background-color: ${e.listActiveSelectionBackground}; }`)), e.listActiveSelectionForeground && i.push(`.monaco-list:focus .monaco-list-row.selected { color: ${e.listActiveSelectionForeground}; }`), e.listHoverBackground && i.push(`.monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${e.listHoverBackground}; }`), e.listHoverForeground && i.push(`.monaco-list-row:hover:not(.selected):not(.focused) { color: ${e.listHoverForeground}; }`), e.listFocusOutline && i.push(`.monaco-list:focus .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }`), e.listHoverOutline && i.push(`.monaco-list-row:hover { outline: 1px dashed ${e.listHoverOutline}; outline-offset: -1px; }`), e.scrollbarShadowColor && i.push(`
				.monaco-scrollable-element > .shadow.top {
					box-shadow: ${e.scrollbarShadowColor} 0 6px 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.left {
					box-shadow: ${e.scrollbarShadowColor} 6px 0 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.top.left {
					box-shadow: ${e.scrollbarShadowColor} 6px 6px 6px -6px inset;
				}
			`), e.scrollbarSliderBackgroundColor && i.push(`
				.monaco-scrollable-element > .scrollbar > .slider {
					background: ${e.scrollbarSliderBackgroundColor};
				}
			`), e.scrollbarSliderHoverBackgroundColor && i.push(`
				.monaco-scrollable-element > .scrollbar > .slider:hover {
					background: ${e.scrollbarSliderHoverBackgroundColor};
				}
			`), e.scrollbarSliderActiveBackgroundColor && i.push(`
				.monaco-scrollable-element > .scrollbar > .slider.active {
					background: ${e.scrollbarSliderActiveBackgroundColor};
				}
			`), t.textContent = i.join(`
`);
        const s = e.backgroundColor ?? "#1e1e1e",
            n = e.color ?? "#cccccc",
            r = e.listHoverBackground ?? "#2a2a2a",
            o = e.listHoverForeground ?? n,
            a = e.listActiveSelectionBackground ?? "#4C72B0",
            c = e.listActiveSelectionForeground ?? n,
            h = e.listFocusOutline ?? e.listHoverOutline ?? e.scrollbarShadowColor ?? "#3a3a3a",
            d = e.listFocusBackground ?? s,
            u = e.listFocusForeground ?? n,
            f = e.listFocusOutline ?? h,
            p = e.listHoverBackground ?? r,
            g = e.listHoverForeground ?? n,
            _ = (y, w) => {
                T.document.body.style.setProperty(y, w)
            };
        T.document.body.style.backgroundColor = s, T.document.body.style.color = n, _("--process-explorer-background", s), _("--process-explorer-foreground", n), _("--process-explorer-tab-background", s), _("--process-explorer-tab-foreground", n), _("--process-explorer-border", h), _("--process-explorer-hover-background", r), _("--process-explorer-hover-foreground", o), _("--process-explorer-active-background", a), _("--process-explorer-active-foreground", c), _("--process-explorer-active-border", a), _("--process-explorer-control-background", d), _("--process-explorer-control-foreground", u), _("--process-explorer-control-border", f), _("--process-explorer-control-hover-background", p), _("--process-explorer-range-button-background", d), _("--process-explorer-range-button-foreground", u), _("--process-explorer-range-button-border", f), _("--process-explorer-range-button-hover-background", p), _("--process-explorer-range-button-active-background", a), _("--process-explorer-range-button-active-foreground", c), _("--process-explorer-range-button-active-border", a), z.applyTheme({
            backgroundColor: s,
            gridColor: r,
            axisColor: h,
            textColor: n,
            textColorMuted: g,
            hoverLineColor: h,
            selectionLineColor: a,
            tooltipBackground: s,
            tooltipBorder: a,
            tooltipForeground: n,
            gapFillColor: r,
            gapBorderColor: h,
            gapTextColor: n,
            gapSubtextColor: g,
            emptyStateTextColor: g,
            legendHeaderBorder: h,
            legendSecondaryForeground: n,
            legendTertiaryForeground: g,
            legendHoverBackground: r,
            legendPidForeground: g,
            legendExtensionForeground: g,
            legendValueForeground: n,
            legendInactiveSwatchBorder: h,
            legendActiveSwatchBorder: h,
            legendUnmappedSwatchBackground: g,
            legendUnmappedSwatchBorder: h
        })
    }
    showContextMenu(e, t) {
        const i = [],
            s = Number(e.pid);
        t && (i.push({
            accelerator: "Alt+E",
            label: V(169, null),
            click: () => {
                this.nativeHostService.killProcess(s, "SIGTERM")
            }
        }), i.push({
            label: V(170, null),
            click: () => {
                this.nativeHostService.killProcess(s, "SIGKILL")
            }
        }), i.push({
            type: "separator"
        })), i.push({
            label: V(171, null),
            click: () => {
                const n = this.getSelectedPids();
                n?.includes(s) || (n.length = 0, n.push(s));
                const r = n?.map(o => T.document.getElementById(`pid-${o}`)).filter(o => !!o);
                if (r) {
                    const o = r.map(a => a.innerText).filter(a => !!a);
                    this.nativeHostService.writeClipboardText(o.join(`
`))
                }
            }
        }), i.push({
            label: V(172, null),
            click: () => {
                const n = T.document.getElementById("process-list");
                n && this.nativeHostService.writeClipboardText(n.innerText)
            }
        }), e && t && this.isBgWindow(e) && (i.push({
            type: "separator"
        }), i.push({
            label: V(173, null),
            click: () => {
                this.openDevToolsForBgWindow(e)
            }
        })), e && t && !this.isBgWindow(e) && !this.isRemoteAgent(e) && this.isDebuggable(e.cmd) && (i.some(n => n.label === V(174, null)) || (i.push({
            type: "separator"
        }), i.push({
            label: V(175, null),
            click: () => {
                this.attachTo(e)
            }
        }))), a4(i)
    }
    requestProcessList(e) {
        setTimeout(() => {
            const t = Date.now(),
                i = e + t - this.lastRequestTime;
            this.lastRequestTime = t, i > 1e3 ? this.requestCurrentProcessList() : this.requestProcessList(i)
        }, 200)
    }
    getSelectedPids() {
        return this.tree?.getSelection()?.map(e => {
            if (!(!e || !("pid" in e))) return e.pid
        }).filter(e => !!e)
    }
};

function Q4() {
    const e = Es();
    e.id = "codiconStyles";
    const t = R4(void 0);

    function i() {
        e.textContent = t.getCSS()
    }
    const s = new mc(i, 0);
    t.onDidChange(() => s.schedule()), s.schedule()
}

function J4(e) {
    const t = e.data.platform === "win32" ? "windows" : e.data.platform === "linux" ? "linux" : "mac";
    T.document.body.classList.add(t), Q4(), Ca(e.data.zoomLevel, T), new Z4(e.windowId, e.data)
}
export {
    J4 as startup
}; /*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */

//# sourceMappingURL=http://go/sourcemap/sourcemaps/776d1f9d76df50a4e0aeca61819a88e7c1b861e0/core/vs/code/electron-sandbox/processExplorer/processExplorerMain.js.map

//# debugId=f1c943ca-5b15-58bd-b82b-18687180f2d5