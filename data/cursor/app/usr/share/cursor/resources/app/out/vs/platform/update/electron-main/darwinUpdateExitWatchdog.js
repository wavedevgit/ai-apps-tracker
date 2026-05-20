/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "679c9829-6360-5ad4-ac6d-0dcd2120f966")
    } catch (e) {}
}();
var S = function(e, t) {
    return S = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
    }, S(e, t)
};
export function __extends(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    S(e, t);

    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
export var __assign = function() {
    return __assign = Object.assign || function(t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
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
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
    return r
}
export function __decorate(e, t, r, n) {
    var i = arguments.length,
        o = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n,
        a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, r, n);
    else
        for (var u = e.length - 1; u >= 0; u--)(a = e[u]) && (o = (i < 3 ? a(o) : i > 3 ? a(t, r, o) : a(t, r)) || o);
    return i > 3 && o && Object.defineProperty(t, r, o), o
}
export function __param(e, t) {
    return function(r, n) {
        t(r, n, e)
    }
}
export function __esDecorate(e, t, r, n, i, o) {
    function a(h) {
        if (h !== void 0 && typeof h != "function") throw new TypeError("Function expected");
        return h
    }
    for (var u = n.kind, p = u === "getter" ? "get" : u === "setter" ? "set" : "value", c = !t && e ? n.static ? e : e.prototype : null, f = t || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), l, g = !1, s = r.length - 1; s >= 0; s--) {
        var y = {};
        for (var _ in n) y[_] = _ === "access" ? {} : n[_];
        for (var _ in n.access) y.access[_] = n.access[_];
        y.addInitializer = function(h) {
            if (g) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(h || null))
        };
        var d = (0, r[s])(u === "accessor" ? {
            get: f.get,
            set: f.set
        } : f[p], y);
        if (u === "accessor") {
            if (d === void 0) continue;
            if (d === null || typeof d != "object") throw new TypeError("Object expected");
            (l = a(d.get)) && (f.get = l), (l = a(d.set)) && (f.set = l), (l = a(d.init)) && i.unshift(l)
        } else(l = a(d)) && (u === "field" ? i.unshift(l) : f[p] = l)
    }
    c && Object.defineProperty(c, n.name, f), g = !0
}
export function __runInitializers(e, t, r) {
    for (var n = arguments.length > 2, i = 0; i < t.length; i++) r = n ? t[i].call(e, r) : t[i].call(e);
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
    function i(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function u(f) {
            try {
                c(n.next(f))
            } catch (l) {
                a(l)
            }
        }

        function p(f) {
            try {
                c(n.throw(f))
            } catch (l) {
                a(l)
            }
        }

        function c(f) {
            f.done ? o(f.value) : i(f.value).then(u, p)
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
        n, i, o, a;
    return a = {
        next: u(0),
        throw: u(1),
        return: u(2)
    }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function u(c) {
        return function(f) {
            return p([c, f])
        }
    }

    function p(c) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; a && (a = 0, c[0] && (r = 0)), r;) try {
            if (n = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done) return o;
            switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
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
                    r.label++, i = c[1], c = [0];
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
            c = [6, f], i = 0
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
    var i = Object.getOwnPropertyDescriptor(t, r);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
        enumerable: !0,
        get: function() {
            return t[r]
        }
    }), Object.defineProperty(e, n, i)
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
        i, o = [],
        a;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (u) {
        a = {
            error: u
        }
    } finally {
        try {
            i && !i.done && (r = n.return) && r.call(n)
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
    for (var n = Array(e), i = 0, t = 0; t < r; t++)
        for (var o = arguments[t], a = 0, u = o.length; a < u; a++, i++) n[i] = o[a];
    return n
}
export function __spreadArray(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = t.length, o; n < i; n++)(o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
    return e.concat(o || Array.prototype.slice.call(t))
}
export function __await(e) {
    return this instanceof __await ? (this.v = e, this) : new __await(e)
}
export function __asyncGenerator(e, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []),
        i, o = [];
    return i = {}, u("next"), u("throw"), u("return", a), i[Symbol.asyncIterator] = function() {
        return this
    }, i;

    function a(s) {
        return function(y) {
            return Promise.resolve(y).then(s, l)
        }
    }

    function u(s, y) {
        n[s] && (i[s] = function(_) {
            return new Promise(function(d, h) {
                o.push([s, _, d, h]) > 1 || p(s, _)
            })
        }, y && (i[s] = y(i[s])))
    }

    function p(s, y) {
        try {
            c(n[s](y))
        } catch (_) {
            g(o[0][3], _)
        }
    }

    function c(s) {
        s.value instanceof __await ? Promise.resolve(s.value.v).then(f, l) : g(o[0][2], s)
    }

    function f(s) {
        p("next", s)
    }

    function l(s) {
        p("throw", s)
    }

    function g(s, y) {
        s(y), o.shift(), o.length && p(o[0][0], o[0][1])
    }
}
export function __asyncDelegator(e) {
    var t, r;
    return t = {}, n("next"), n("throw", function(i) {
        throw i
    }), n("return"), t[Symbol.iterator] = function() {
        return this
    }, t;

    function n(i, o) {
        t[i] = e[i] ? function(a) {
            return (r = !r) ? {
                value: __await(e[i](a)),
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
            return new Promise(function(u, p) {
                a = e[o](a), i(u, p, a.done, a.value)
            })
        }
    }

    function i(o, a, u, p) {
        Promise.resolve(p).then(function(c) {
            o({
                value: c,
                done: u
            })
        }, a)
    }
}
export function __makeTemplateObject(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t, e
}
var j = Object.create ? (function(e, t) {
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
    return j(t, e), t
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
export function __classPrivateFieldSet(e, t, r, n, i) {
    if (n === "m") throw new TypeError("Private method is not writable");
    if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
    if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r
}
export function __classPrivateFieldIn(e, t) {
    if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof e == "function" ? t === e : e.has(t)
}
export function __addDisposableResource(e, t, r) {
    if (t != null) {
        if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
        var n, i;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
        }
        if (n === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (i = n)
        }
        if (typeof n != "function") throw new TypeError("Object not disposable.");
        i && (n = function() {
            try {
                i.call(this)
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
var T = typeof SuppressedError == "function" ? SuppressedError : function(e, t, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
};
export function __disposeResources(e) {
    function t(n) {
        e.error = e.hasError ? new T(n, e.error, "An error was suppressed during disposal.") : n, e.hasError = !0
    }

    function r() {
        for (; e.stack.length;) {
            var n = e.stack.pop();
            try {
                var i = n.dispose && n.dispose.call(n.value);
                if (n.async) return Promise.resolve(i).then(r, function(o) {
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
import {
    execFileSync as P
} from "child_process";
import {
    mkdirSync as x,
    renameSync as D,
    writeFileSync as M
} from "fs";
import {
    basename as O,
    dirname as E
} from "path";
var [A, R, w, m] = process.argv.slice(2), b = Number(A), v = Number(R), F = Date.now(), I = 1, N = 10, C = 3e3;

function $() {
    return Number.isInteger(b) && b > 0 && Number.isFinite(v) && v >= 0 && typeof w == "string" && w.length > 0 && typeof m == "string" && m.length > 0
}

function V() {
    try {
        process.kill(b, 0)
    } catch (e) {
        if (!G(e)) return {
            matches: !1
        }
    }
    try {
        const e = P("/bin/ps", ["-ww", "-p", String(b), "-o", "command="], {
            encoding: "utf8"
        }).trim();
        return {
            matches: L(e),
            actualCommand: e
        }
    } catch {
        return {
            matches: !1
        }
    }
}

function G(e) {
    return e instanceof Error && "code" in e && e.code === "EPERM"
}

function L(e) {
    if (e === w || e.startsWith(`${w} `)) return !0;
    const t = O(w);
    return e.includes(`/Contents/MacOS/${t} `) || e.endsWith(`/Contents/MacOS/${t}`)
}

function B() {
    try {
        x(E(m), {
            recursive: !0
        });
        const e = `${m}.${b}.${Date.now()}.sample.txt`;
        return P("/usr/bin/sample", [String(b), String(I), String(N), "-file", e], {
            stdio: "ignore",
            timeout: C
        }), e
    } catch {
        return
    }
}

function K(e, t) {
    try {
        x(E(m), {
            recursive: !0
        });
        const r = `${m}.${process.pid}.tmp`;
        M(r, JSON.stringify({
            schemaVersion: 1,
            createdAt: new Date().toISOString(),
            parentPid: b,
            timeoutMs: v,
            elapsedMs: Date.now() - F,
            expectedCommand: O(w),
            actualCommand: e,
            samplePath: t
        }) + `
`), D(r, m)
    } catch {}
}

function U() {
    if (!$()) return;
    const e = V();
    if (!e.matches) return;
    const t = B();
    K(e.actualCommand, t)
}
setTimeout(U, v);

//# sourceMappingURL=http://go/sourcemap/sourcemaps/0cf8b06883f54e26bb4f0fb8647c9500ccb43310/core/vs/platform/update/electron-main/darwinUpdateExitWatchdog.js.map

//# debugId=679c9829-6360-5ad4-ac6d-0dcd2120f966