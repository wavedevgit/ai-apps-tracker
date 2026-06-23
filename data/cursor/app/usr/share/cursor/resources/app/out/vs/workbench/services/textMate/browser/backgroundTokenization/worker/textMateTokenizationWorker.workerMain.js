/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "815a4493-8f2a-5ab0-907a-612be2bb381b")
    } catch (e) {}
}();
var kt = function(t, e) {
    return kt = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
    }, kt(t, e)
};
export function __extends(t, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    kt(t, e);

    function r() {
        this.constructor = t
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
}
export var __assign = function() {
    return __assign = Object.assign || function(e) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
        }
        return e
    }, __assign.apply(this, arguments)
};
export function __rest(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
    return r
}
export function __decorate(t, e, r, n) {
    var i = arguments.length,
        o = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n,
        a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(t, e, r, n);
    else
        for (var l = t.length - 1; l >= 0; l--)(a = t[l]) && (o = (i < 3 ? a(o) : i > 3 ? a(e, r, o) : a(e, r)) || o);
    return i > 3 && o && Object.defineProperty(e, r, o), o
}
export function __param(t, e) {
    return function(r, n) {
        e(r, n, t)
    }
}
export function __esDecorate(t, e, r, n, i, o) {
    function a(j) {
        if (j !== void 0 && typeof j != "function") throw new TypeError("Function expected");
        return j
    }
    for (var l = n.kind, u = l === "getter" ? "get" : l === "setter" ? "set" : "value", c = !e && t ? n.static ? t : t.prototype : null, h = e || (c ? Object.getOwnPropertyDescriptor(c, n.name) : {}), d, b = !1, v = r.length - 1; v >= 0; v--) {
        var E = {};
        for (var I in n) E[I] = I === "access" ? {} : n[I];
        for (var I in n.access) E.access[I] = n.access[I];
        E.addInitializer = function(j) {
            if (b) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(j || null))
        };
        var R = (0, r[v])(l === "accessor" ? {
            get: h.get,
            set: h.set
        } : h[u], E);
        if (l === "accessor") {
            if (R === void 0) continue;
            if (R === null || typeof R != "object") throw new TypeError("Object expected");
            (d = a(R.get)) && (h.get = d), (d = a(R.set)) && (h.set = d), (d = a(R.init)) && i.unshift(d)
        } else(d = a(R)) && (l === "field" ? i.unshift(d) : h[u] = d)
    }
    c && Object.defineProperty(c, n.name, h), b = !0
}
export function __runInitializers(t, e, r) {
    for (var n = arguments.length > 2, i = 0; i < e.length; i++) r = n ? e[i].call(t, r) : e[i].call(t);
    return n ? r : void 0
}
export function __propKey(t) {
    return typeof t == "symbol" ? t : "".concat(t)
}
export function __setFunctionName(t, e, r) {
    return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", {
        configurable: !0,
        value: r ? "".concat(r, " ", e) : e
    })
}
export function __metadata(t, e) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(t, e)
}
export function __awaiter(t, e, r, n) {
    function i(o) {
        return o instanceof r ? o : new r(function(a) {
            a(o)
        })
    }
    return new(r || (r = Promise))(function(o, a) {
        function l(h) {
            try {
                c(n.next(h))
            } catch (d) {
                a(d)
            }
        }

        function u(h) {
            try {
                c(n.throw(h))
            } catch (d) {
                a(d)
            }
        }

        function c(h) {
            h.done ? o(h.value) : i(h.value).then(l, u)
        }
        c((n = n.apply(t, e || [])).next())
    })
}
export function __generator(t, e) {
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
        next: l(0),
        throw: l(1),
        return: l(2)
    }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this
    }), a;

    function l(c) {
        return function(h) {
            return u([c, h])
        }
    }

    function u(c) {
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
            c = e.call(t, r)
        } catch (h) {
            c = [6, h], i = 0
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
export var __createBinding = Object.create ? (function(t, e, r, n) {
    n === void 0 && (n = r);
    var i = Object.getOwnPropertyDescriptor(e, r);
    (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = {
        enumerable: !0,
        get: function() {
            return e[r]
        }
    }), Object.defineProperty(t, n, i)
}) : (function(t, e, r, n) {
    n === void 0 && (n = r), t[n] = e[r]
});
export function __exportStar(t, e) {
    for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && __createBinding(e, t, r)
}
export function __values(t) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        r = e && t[e],
        n = 0;
    if (r) return r.call(t);
    if (t && typeof t.length == "number") return {
        next: function() {
            return t && n >= t.length && (t = void 0), {
                value: t && t[n++],
                done: !t
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
export function __read(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r) return t;
    var n = r.call(t),
        i, o = [],
        a;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
    } catch (l) {
        a = {
            error: l
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
    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
    return t
}
export function __spreadArrays() {
    for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
    for (var n = Array(t), i = 0, e = 0; e < r; e++)
        for (var o = arguments[e], a = 0, l = o.length; a < l; a++, i++) n[i] = o[a];
    return n
}
export function __spreadArray(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = e.length, o; n < i; n++)(o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)), o[n] = e[n]);
    return t.concat(o || Array.prototype.slice.call(e))
}
export function __await(t) {
    return this instanceof __await ? (this.v = t, this) : new __await(t)
}
export function __asyncGenerator(t, e, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(t, e || []),
        i, o = [];
    return i = {}, l("next"), l("throw"), l("return", a), i[Symbol.asyncIterator] = function() {
        return this
    }, i;

    function a(v) {
        return function(E) {
            return Promise.resolve(E).then(v, d)
        }
    }

    function l(v, E) {
        n[v] && (i[v] = function(I) {
            return new Promise(function(R, j) {
                o.push([v, I, R, j]) > 1 || u(v, I)
            })
        }, E && (i[v] = E(i[v])))
    }

    function u(v, E) {
        try {
            c(n[v](E))
        } catch (I) {
            b(o[0][3], I)
        }
    }

    function c(v) {
        v.value instanceof __await ? Promise.resolve(v.value.v).then(h, d) : b(o[0][2], v)
    }

    function h(v) {
        u("next", v)
    }

    function d(v) {
        u("throw", v)
    }

    function b(v, E) {
        v(E), o.shift(), o.length && u(o[0][0], o[0][1])
    }
}
export function __asyncDelegator(t) {
    var e, r;
    return e = {}, n("next"), n("throw", function(i) {
        throw i
    }), n("return"), e[Symbol.iterator] = function() {
        return this
    }, e;

    function n(i, o) {
        e[i] = t[i] ? function(a) {
            return (r = !r) ? {
                value: __await(t[i](a)),
                done: !1
            } : o ? o(a) : a
        } : o
    }
}
export function __asyncValues(t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = t[Symbol.asyncIterator],
        r;
    return e ? e.call(t) : (t = typeof __values == "function" ? __values(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this
    }, r);

    function n(o) {
        r[o] = t[o] && function(a) {
            return new Promise(function(l, u) {
                a = t[o](a), i(l, u, a.done, a.value)
            })
        }
    }

    function i(o, a, l, u) {
        Promise.resolve(u).then(function(c) {
            o({
                value: c,
                done: l
            })
        }, a)
    }
}
export function __makeTemplateObject(t, e) {
    return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
    }) : t.raw = e, t
}
var os = Object.create ? (function(t, e) {
    Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
    })
}) : function(t, e) {
    t.default = e
};
export function __importStar(t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (t != null)
        for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
    return os(e, t), e
}
export function __importDefault(t) {
    return t && t.__esModule ? t : {
        default: t
    }
}
export function __classPrivateFieldGet(t, e, r, n) {
    if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
    if (typeof e == "function" ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t)
}
export function __classPrivateFieldSet(t, e, r, n, i) {
    if (n === "m") throw new TypeError("Private method is not writable");
    if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
    if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r
}
export function __classPrivateFieldIn(t, e) {
    if (e === null || typeof e != "object" && typeof e != "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof t == "function" ? e === t : t.has(e)
}
export function __addDisposableResource(t, e, r) {
    if (e != null) {
        if (typeof e != "object" && typeof e != "function") throw new TypeError("Object expected.");
        var n, i;
        if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = e[Symbol.asyncDispose]
        }
        if (n === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = e[Symbol.dispose], r && (i = n)
        }
        if (typeof n != "function") throw new TypeError("Object not disposable.");
        i && (n = function() {
            try {
                i.call(this)
            } catch (o) {
                return Promise.reject(o)
            }
        }), t.stack.push({
            value: e,
            dispose: n,
            async: r
        })
    } else r && t.stack.push({
        async: !0
    });
    return e
}
var as = typeof SuppressedError == "function" ? SuppressedError : function(t, e, r) {
    var n = new Error(r);
    return n.name = "SuppressedError", n.error = t, n.suppressed = e, n
};
export function __disposeResources(t) {
    function e(n) {
        t.error = t.hasError ? new as(n, t.error, "An error was suppressed during disposal.") : n, t.hasError = !0
    }

    function r() {
        for (; t.stack.length;) {
            var n = t.stack.pop();
            try {
                var i = n.dispose && n.dispose.call(n.value);
                if (n.async) return Promise.resolve(i).then(r, function(o) {
                    return e(o), r()
                })
            } catch (o) {
                e(o)
            }
        }
        if (t.hasError) throw t.error
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

function ls() {
    return globalThis._VSCODE_NLS_MESSAGES
}

function gr() {
    return globalThis._VSCODE_NLS_LANGUAGE
}
var us = gr() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;

function pr(t, e) {
    let r;
    return e.length === 0 ? r = t : r = t.replace(/\{(\d+)\}/g, (n, i) => {
        const o = parseInt(i, 10),
            a = e[o];
        let l = n;
        return typeof a == "string" ? l = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (l = String(a)), l
    }), us && (r = "\uFF3B" + r.replace(/[aouei]/g, "$&$&") + "\uFF3D"), r
}

function w(t, e, ...r) {
    return pr(typeof t == "number" ? cs(t, e) : e, r)
}

function cs(t, e) {
    const r = ls()?.[t];
    if (typeof r != "string") {
        if (typeof e == "string") return e;
        throw new Error(`!!! NLS MISSING: ${t} !!!`)
    }
    return r
}
var Te = "en",
    Xe = !1,
    et = !1,
    Be = !1,
    ds = !1,
    br = !1,
    Lt = !1,
    hs = !1,
    fs = !1,
    ms = !1,
    gs = !1,
    tt = void 0,
    rt = Te,
    _r = Te,
    ps = void 0,
    oe = void 0,
    ae = globalThis,
    W = void 0;
typeof ae.vscode < "u" && typeof ae.vscode.process < "u" ? W = ae.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (W = process);
var vr = typeof W?.versions?.electron == "string",
    bs = vr && W?.type === "renderer";
if (typeof W == "object") {
    Xe = W.platform === "win32", et = W.platform === "darwin", Be = W.platform === "linux", ds = Be && !!W.env.SNAP && !!W.env.SNAP_REVISION, hs = vr, ms = !!W.env.CI || !!W.env.BUILD_ARTIFACTSTAGINGDIRECTORY, tt = Te, rt = Te;
    const t = W.env.VSCODE_NLS_CONFIG;
    if (t) try {
        const e = JSON.parse(t);
        tt = e.userLocale, _r = e.osLocale, rt = e.resolvedLanguage || Te, ps = e.languagePack?.translationsConfigFile
    } catch {}
    br = !0
} else typeof navigator == "object" && !bs ? (oe = navigator.userAgent, Xe = oe.indexOf("Windows") >= 0, et = oe.indexOf("Macintosh") >= 0, fs = (oe.indexOf("Macintosh") >= 0 || oe.indexOf("iPad") >= 0 || oe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Be = oe.indexOf("Linux") >= 0, gs = oe?.indexOf("Mobi") >= 0, Lt = !0, rt = gr() || Te, tt = navigator.language.toLowerCase(), _r = tt) : console.error("Unable to resolve platform.");
var St = 0;
et ? St = 1 : Xe ? St = 3 : Be && (St = 2);
var Ae = Xe,
    _s = et,
    vs = Be,
    ys = br,
    yr = Lt,
    ws = Lt && typeof ae.importScripts == "function",
    Cs = ws ? ae.origin : void 0,
    ie = oe,
    pe = rt,
    wr;
(t => {
    function e() {
        return pe
    }
    t.value = e;

    function r() {
        return pe.length === 2 ? pe === "en" : pe.length >= 3 ? pe[0] === "e" && pe[1] === "n" && pe[2] === "-" : !1
    }
    t.isDefaultVariant = r;

    function n() {
        return pe === "en"
    }
    t.isDefault = n
})(wr || (wr = {}));
var ks = typeof ae.postMessage == "function" && !ae.importScripts,
    Cr = (() => {
        if (ks) {
            const t = [];
            ae.addEventListener("message", r => {
                if (r.data && r.data.vscodeScheduleAsyncWork)
                    for (let n = 0, i = t.length; n < i; n++) {
                        const o = t[n];
                        if (o.id === r.data.vscodeScheduleAsyncWork) {
                            t.splice(n, 1), o.callback();
                            return
                        }
                    }
            });
            let e = 0;
            return r => {
                const n = ++e;
                t.push({
                    id: n,
                    callback: r
                }), ae.postMessage({
                    vscodeScheduleAsyncWork: n
                }, "*")
            }
        }
        return t => setTimeout(t)
    })(),
    Ls = !!(ie && ie.indexOf("Chrome") >= 0),
    po = !!(ie && ie.indexOf("Firefox") >= 0),
    bo = !!(!Ls && ie && ie.indexOf("Safari") >= 0),
    _o = !!(ie && ie.indexOf("Edg/") >= 0),
    vo = !!(ie && ie.indexOf("Android") >= 0),
    yo = W?.arch,
    wo = W?.platform,
    Co = W?.versions?.node,
    _e, Et = globalThis.vscode;
if (typeof Et < "u" && typeof Et.process < "u") {
    const t = Et.process;
    _e = {
        get platform() {
            return t.platform
        },
        get arch() {
            return t.arch
        },
        get env() {
            return t.env
        },
        cwd() {
            return t.cwd()
        }
    }
} else typeof process < "u" && typeof process?.versions?.node == "string" ? _e = {
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
} : _e = {
    get platform() {
        return Ae ? "win32" : _s ? "darwin" : "linux"
    },
    get arch() {},
    get env() {
        return {}
    },
    cwd() {
        return "/"
    }
};
var nt = _e.cwd,
    Nt = _e.env,
    Ss = _e.platform,
    ko = _e.arch,
    Es = 65,
    Ns = 97,
    xs = 90,
    Ts = 122,
    ve = 46,
    B = 47,
    Q = 92,
    le = 58,
    As = 63,
    kr = class extends Error {
        constructor(t, e, r) {
            let n;
            typeof e == "string" && e.indexOf("not ") === 0 ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be";
            const i = t.indexOf(".") !== -1 ? "property" : "argument";
            let o = `The "${t}" ${i} ${n} of type ${e}`;
            o += `. Received type ${typeof r}`, super(o), this.code = "ERR_INVALID_ARG_TYPE"
        }
    };

function Os(t, e) {
    if (t === null || typeof t != "object") throw new kr(e, "Object", t)
}

function P(t, e) {
    if (typeof t != "string") throw new kr(e, "string", t)
}
var J = Ss === "win32";

function L(t) {
    return t === B || t === Q
}

function xt(t) {
    return t === B
}

function ue(t) {
    return t >= Es && t <= xs || t >= Ns && t <= Ts
}

function st(t, e, r, n) {
    let i = "",
        o = 0,
        a = -1,
        l = 0,
        u = 0;
    for (let c = 0; c <= t.length; ++c) {
        if (c < t.length) u = t.charCodeAt(c);
        else {
            if (n(u)) break;
            u = B
        }
        if (n(u)) {
            if (!(a === c - 1 || l === 1))
                if (l === 2) {
                    if (i.length < 2 || o !== 2 || i.charCodeAt(i.length - 1) !== ve || i.charCodeAt(i.length - 2) !== ve) {
                        if (i.length > 2) {
                            const h = i.lastIndexOf(r);
                            h === -1 ? (i = "", o = 0) : (i = i.slice(0, h), o = i.length - 1 - i.lastIndexOf(r)), a = c, l = 0;
                            continue
                        } else if (i.length !== 0) {
                            i = "", o = 0, a = c, l = 0;
                            continue
                        }
                    }
                    e && (i += i.length > 0 ? `${r}..` : "..", o = 2)
                } else i.length > 0 ? i += `${r}${t.slice(a+1,c)}` : i = t.slice(a + 1, c), o = c - a - 1;
            a = c, l = 0
        } else u === ve && l !== -1 ? ++l : l = -1
    }
    return i
}

function Is(t) {
    return t ? `${t[0]==="."?"":"."}${t}` : ""
}

function Lr(t, e) {
    Os(e, "pathObject");
    const r = e.dir || e.root,
        n = e.base || `${e.name||""}${Is(e.ext)}`;
    return r ? r === e.root ? `${r}${n}` : `${r}${t}${n}` : n
}
var M = {
        resolve(...t) {
            let e = "",
                r = "",
                n = !1;
            for (let i = t.length - 1; i >= -1; i--) {
                let o;
                if (i >= 0) {
                    if (o = t[i], P(o, `paths[${i}]`), o.length === 0) continue
                } else e.length === 0 ? o = nt() : (o = Nt[`=${e}`] || nt(), (o === void 0 || o.slice(0, 2).toLowerCase() !== e.toLowerCase() && o.charCodeAt(2) === Q) && (o = `${e}\\`));
                const a = o.length;
                let l = 0,
                    u = "",
                    c = !1;
                const h = o.charCodeAt(0);
                if (a === 1) L(h) && (l = 1, c = !0);
                else if (L(h))
                    if (c = !0, L(o.charCodeAt(1))) {
                        let d = 2,
                            b = d;
                        for (; d < a && !L(o.charCodeAt(d));) d++;
                        if (d < a && d !== b) {
                            const v = o.slice(b, d);
                            for (b = d; d < a && L(o.charCodeAt(d));) d++;
                            if (d < a && d !== b) {
                                for (b = d; d < a && !L(o.charCodeAt(d));) d++;
                                (d === a || d !== b) && (u = `\\\\${v}\\${o.slice(b,d)}`, l = d)
                            }
                        }
                    } else l = 1;
                else ue(h) && o.charCodeAt(1) === le && (u = o.slice(0, 2), l = 2, a > 2 && L(o.charCodeAt(2)) && (c = !0, l = 3));
                if (u.length > 0)
                    if (e.length > 0) {
                        if (u.toLowerCase() !== e.toLowerCase()) continue
                    } else e = u;
                if (n) {
                    if (e.length > 0) break
                } else if (r = `${o.slice(l)}\\${r}`, n = c, c && e.length > 0) break
            }
            return r = st(r, !n, "\\", L), n ? `${e}\\${r}` : `${e}${r}` || "."
        },
        normalize(t) {
            P(t, "path");
            const e = t.length;
            if (e === 0) return ".";
            let r = 0,
                n, i = !1;
            const o = t.charCodeAt(0);
            if (e === 1) return xt(o) ? "\\" : t;
            if (L(o))
                if (i = !0, L(t.charCodeAt(1))) {
                    let l = 2,
                        u = l;
                    for (; l < e && !L(t.charCodeAt(l));) l++;
                    if (l < e && l !== u) {
                        const c = t.slice(u, l);
                        for (u = l; l < e && L(t.charCodeAt(l));) l++;
                        if (l < e && l !== u) {
                            for (u = l; l < e && !L(t.charCodeAt(l));) l++;
                            if (l === e) return `\\\\${c}\\${t.slice(u)}\\`;
                            l !== u && (n = `\\\\${c}\\${t.slice(u,l)}`, r = l)
                        }
                    }
                } else r = 1;
            else ue(o) && t.charCodeAt(1) === le && (n = t.slice(0, 2), r = 2, e > 2 && L(t.charCodeAt(2)) && (i = !0, r = 3));
            let a = r < e ? st(t.slice(r), !i, "\\", L) : "";
            if (a.length === 0 && !i && (a = "."), a.length > 0 && L(t.charCodeAt(e - 1)) && (a += "\\"), !i && n === void 0 && t.includes(":")) {
                if (a.length >= 2 && ue(a.charCodeAt(0)) && a.charCodeAt(1) === le) return `.\\${a}`;
                let l = t.indexOf(":");
                do
                    if (l === e - 1 || L(t.charCodeAt(l + 1))) return `.\\${a}`; while ((l = t.indexOf(":", l + 1)) !== -1)
            }
            return n === void 0 ? i ? `\\${a}` : a : i ? `${n}\\${a}` : `${n}${a}`
        },
        isAbsolute(t) {
            P(t, "path");
            const e = t.length;
            if (e === 0) return !1;
            const r = t.charCodeAt(0);
            return L(r) || e > 2 && ue(r) && t.charCodeAt(1) === le && L(t.charCodeAt(2))
        },
        join(...t) {
            if (t.length === 0) return ".";
            let e, r;
            for (let o = 0; o < t.length; ++o) {
                const a = t[o];
                P(a, "path"), a.length > 0 && (e === void 0 ? e = r = a : e += `\\${a}`)
            }
            if (e === void 0) return ".";
            let n = !0,
                i = 0;
            if (typeof r == "string" && L(r.charCodeAt(0))) {
                ++i;
                const o = r.length;
                o > 1 && L(r.charCodeAt(1)) && (++i, o > 2 && (L(r.charCodeAt(2)) ? ++i : n = !1))
            }
            if (n) {
                for (; i < e.length && L(e.charCodeAt(i));) i++;
                i >= 2 && (e = `\\${e.slice(i)}`)
            }
            return M.normalize(e)
        },
        relative(t, e) {
            if (P(t, "from"), P(e, "to"), t === e) return "";
            const r = M.resolve(t),
                n = M.resolve(e);
            if (r === n || (t = r.toLowerCase(), e = n.toLowerCase(), t === e)) return "";
            if (r.length !== t.length || n.length !== e.length) {
                const E = r.split("\\"),
                    I = n.split("\\");
                E[E.length - 1] === "" && E.pop(), I[I.length - 1] === "" && I.pop();
                const R = E.length,
                    j = I.length,
                    ge = R < j ? R : j;
                let U;
                for (U = 0; U < ge && E[U].toLowerCase() === I[U].toLowerCase(); U++);
                return U === 0 ? n : U === ge ? j > ge ? I.slice(U).join("\\") : R > ge ? "..\\".repeat(R - 1 - U) + ".." : "" : "..\\".repeat(R - U) + I.slice(U).join("\\")
            }
            let i = 0;
            for (; i < t.length && t.charCodeAt(i) === Q;) i++;
            let o = t.length;
            for (; o - 1 > i && t.charCodeAt(o - 1) === Q;) o--;
            const a = o - i;
            let l = 0;
            for (; l < e.length && e.charCodeAt(l) === Q;) l++;
            let u = e.length;
            for (; u - 1 > l && e.charCodeAt(u - 1) === Q;) u--;
            const c = u - l,
                h = a < c ? a : c;
            let d = -1,
                b = 0;
            for (; b < h; b++) {
                const E = t.charCodeAt(i + b);
                if (E !== e.charCodeAt(l + b)) break;
                E === Q && (d = b)
            }
            if (b !== h) {
                if (d === -1) return n
            } else {
                if (c > h) {
                    if (e.charCodeAt(l + b) === Q) return n.slice(l + b + 1);
                    if (b === 2) return n.slice(l + b)
                }
                a > h && (t.charCodeAt(i + b) === Q ? d = b : b === 2 && (d = 3)), d === -1 && (d = 0)
            }
            let v = "";
            for (b = i + d + 1; b <= o; ++b)(b === o || t.charCodeAt(b) === Q) && (v += v.length === 0 ? ".." : "\\..");
            return l += d, v.length > 0 ? `${v}${n.slice(l,u)}` : (n.charCodeAt(l) === Q && ++l, n.slice(l, u))
        },
        toNamespacedPath(t) {
            if (typeof t != "string" || t.length === 0) return t;
            const e = M.resolve(t);
            if (e.length <= 2) return t;
            if (e.charCodeAt(0) === Q) {
                if (e.charCodeAt(1) === Q) {
                    const r = e.charCodeAt(2);
                    if (r !== As && r !== ve) return `\\\\?\\UNC\\${e.slice(2)}`
                }
            } else if (ue(e.charCodeAt(0)) && e.charCodeAt(1) === le && e.charCodeAt(2) === Q) return `\\\\?\\${e}`;
            return e
        },
        dirname(t) {
            P(t, "path");
            const e = t.length;
            if (e === 0) return ".";
            let r = -1,
                n = 0;
            const i = t.charCodeAt(0);
            if (e === 1) return L(i) ? t : ".";
            if (L(i)) {
                if (r = n = 1, L(t.charCodeAt(1))) {
                    let l = 2,
                        u = l;
                    for (; l < e && !L(t.charCodeAt(l));) l++;
                    if (l < e && l !== u) {
                        for (u = l; l < e && L(t.charCodeAt(l));) l++;
                        if (l < e && l !== u) {
                            for (u = l; l < e && !L(t.charCodeAt(l));) l++;
                            if (l === e) return t;
                            l !== u && (r = n = l + 1)
                        }
                    }
                }
            } else ue(i) && t.charCodeAt(1) === le && (r = e > 2 && L(t.charCodeAt(2)) ? 3 : 2, n = r);
            let o = -1,
                a = !0;
            for (let l = e - 1; l >= n; --l)
                if (L(t.charCodeAt(l))) {
                    if (!a) {
                        o = l;
                        break
                    }
                } else a = !1;
            if (o === -1) {
                if (r === -1) return ".";
                o = r
            }
            return t.slice(0, o)
        },
        basename(t, e) {
            e !== void 0 && P(e, "suffix"), P(t, "path");
            let r = 0,
                n = -1,
                i = !0,
                o;
            if (t.length >= 2 && ue(t.charCodeAt(0)) && t.charCodeAt(1) === le && (r = 2), e !== void 0 && e.length > 0 && e.length <= t.length) {
                if (e === t) return "";
                let a = e.length - 1,
                    l = -1;
                for (o = t.length - 1; o >= r; --o) {
                    const u = t.charCodeAt(o);
                    if (L(u)) {
                        if (!i) {
                            r = o + 1;
                            break
                        }
                    } else l === -1 && (i = !1, l = o + 1), a >= 0 && (u === e.charCodeAt(a) ? --a === -1 && (n = o) : (a = -1, n = l))
                }
                return r === n ? n = l : n === -1 && (n = t.length), t.slice(r, n)
            }
            for (o = t.length - 1; o >= r; --o)
                if (L(t.charCodeAt(o))) {
                    if (!i) {
                        r = o + 1;
                        break
                    }
                } else n === -1 && (i = !1, n = o + 1);
            return n === -1 ? "" : t.slice(r, n)
        },
        extname(t) {
            P(t, "path");
            let e = 0,
                r = -1,
                n = 0,
                i = -1,
                o = !0,
                a = 0;
            t.length >= 2 && t.charCodeAt(1) === le && ue(t.charCodeAt(0)) && (e = n = 2);
            for (let l = t.length - 1; l >= e; --l) {
                const u = t.charCodeAt(l);
                if (L(u)) {
                    if (!o) {
                        n = l + 1;
                        break
                    }
                    continue
                }
                i === -1 && (o = !1, i = l + 1), u === ve ? r === -1 ? r = l : a !== 1 && (a = 1) : r !== -1 && (a = -1)
            }
            return r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === n + 1 ? "" : t.slice(r, i)
        },
        format: Lr.bind(null, "\\"),
        parse(t) {
            P(t, "path");
            const e = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (t.length === 0) return e;
            const r = t.length;
            let n = 0,
                i = t.charCodeAt(0);
            if (r === 1) return L(i) ? (e.root = e.dir = t, e) : (e.base = e.name = t, e);
            if (L(i)) {
                if (n = 1, L(t.charCodeAt(1))) {
                    let d = 2,
                        b = d;
                    for (; d < r && !L(t.charCodeAt(d));) d++;
                    if (d < r && d !== b) {
                        for (b = d; d < r && L(t.charCodeAt(d));) d++;
                        if (d < r && d !== b) {
                            for (b = d; d < r && !L(t.charCodeAt(d));) d++;
                            d === r ? n = d : d !== b && (n = d + 1)
                        }
                    }
                }
            } else if (ue(i) && t.charCodeAt(1) === le) {
                if (r <= 2) return e.root = e.dir = t, e;
                if (n = 2, L(t.charCodeAt(2))) {
                    if (r === 3) return e.root = e.dir = t, e;
                    n = 3
                }
            }
            n > 0 && (e.root = t.slice(0, n));
            let o = -1,
                a = n,
                l = -1,
                u = !0,
                c = t.length - 1,
                h = 0;
            for (; c >= n; --c) {
                if (i = t.charCodeAt(c), L(i)) {
                    if (!u) {
                        a = c + 1;
                        break
                    }
                    continue
                }
                l === -1 && (u = !1, l = c + 1), i === ve ? o === -1 ? o = c : h !== 1 && (h = 1) : o !== -1 && (h = -1)
            }
            return l !== -1 && (o === -1 || h === 0 || h === 1 && o === l - 1 && o === a + 1 ? e.base = e.name = t.slice(a, l) : (e.name = t.slice(a, o), e.base = t.slice(a, l), e.ext = t.slice(o, l))), a > 0 && a !== n ? e.dir = t.slice(0, a - 1) : e.dir = e.root, e
        },
        sep: "\\",
        delimiter: ";",
        win32: null,
        posix: null
    },
    Rs = (() => {
        if (J) {
            const t = /\\/g;
            return () => {
                const e = nt().replace(t, "/");
                return e.slice(e.indexOf("/"))
            }
        }
        return () => nt()
    })(),
    T = {
        resolve(...t) {
            let e = "",
                r = !1;
            for (let n = t.length - 1; n >= 0 && !r; n--) {
                const i = t[n];
                P(i, `paths[${n}]`), i.length !== 0 && (e = `${i}/${e}`, r = i.charCodeAt(0) === B)
            }
            if (!r) {
                const n = Rs();
                e = `${n}/${e}`, r = n.charCodeAt(0) === B
            }
            return e = st(e, !r, "/", xt), r ? `/${e}` : e.length > 0 ? e : "."
        },
        normalize(t) {
            if (P(t, "path"), t.length === 0) return ".";
            const e = t.charCodeAt(0) === B,
                r = t.charCodeAt(t.length - 1) === B;
            return t = st(t, !e, "/", xt), t.length === 0 ? e ? "/" : r ? "./" : "." : (r && (t += "/"), e ? `/${t}` : t)
        },
        isAbsolute(t) {
            return P(t, "path"), t.length > 0 && t.charCodeAt(0) === B
        },
        join(...t) {
            if (t.length === 0) return ".";
            const e = [];
            for (let r = 0; r < t.length; ++r) {
                const n = t[r];
                P(n, "path"), n.length > 0 && e.push(n)
            }
            return e.length === 0 ? "." : T.normalize(e.join("/"))
        },
        relative(t, e) {
            if (P(t, "from"), P(e, "to"), t === e || (t = T.resolve(t), e = T.resolve(e), t === e)) return "";
            const r = 1,
                n = t.length,
                i = n - r,
                o = 1,
                a = e.length - o,
                l = i < a ? i : a;
            let u = -1,
                c = 0;
            for (; c < l; c++) {
                const d = t.charCodeAt(r + c);
                if (d !== e.charCodeAt(o + c)) break;
                d === B && (u = c)
            }
            if (c === l)
                if (a > l) {
                    if (e.charCodeAt(o + c) === B) return e.slice(o + c + 1);
                    if (c === 0) return e.slice(o + c)
                } else i > l && (t.charCodeAt(r + c) === B ? u = c : c === 0 && (u = 0));
            let h = "";
            for (c = r + u + 1; c <= n; ++c)(c === n || t.charCodeAt(c) === B) && (h += h.length === 0 ? ".." : "/..");
            return `${h}${e.slice(o+u)}`
        },
        toNamespacedPath(t) {
            return t
        },
        dirname(t) {
            if (P(t, "path"), t.length === 0) return ".";
            const e = t.charCodeAt(0) === B;
            let r = -1,
                n = !0;
            for (let i = t.length - 1; i >= 1; --i)
                if (t.charCodeAt(i) === B) {
                    if (!n) {
                        r = i;
                        break
                    }
                } else n = !1;
            return r === -1 ? e ? "/" : "." : e && r === 1 ? "//" : t.slice(0, r)
        },
        basename(t, e) {
            e !== void 0 && P(e, "suffix"), P(t, "path");
            let r = 0,
                n = -1,
                i = !0,
                o;
            if (e !== void 0 && e.length > 0 && e.length <= t.length) {
                if (e === t) return "";
                let a = e.length - 1,
                    l = -1;
                for (o = t.length - 1; o >= 0; --o) {
                    const u = t.charCodeAt(o);
                    if (u === B) {
                        if (!i) {
                            r = o + 1;
                            break
                        }
                    } else l === -1 && (i = !1, l = o + 1), a >= 0 && (u === e.charCodeAt(a) ? --a === -1 && (n = o) : (a = -1, n = l))
                }
                return r === n ? n = l : n === -1 && (n = t.length), t.slice(r, n)
            }
            for (o = t.length - 1; o >= 0; --o)
                if (t.charCodeAt(o) === B) {
                    if (!i) {
                        r = o + 1;
                        break
                    }
                } else n === -1 && (i = !1, n = o + 1);
            return n === -1 ? "" : t.slice(r, n)
        },
        extname(t) {
            P(t, "path");
            let e = -1,
                r = 0,
                n = -1,
                i = !0,
                o = 0;
            for (let a = t.length - 1; a >= 0; --a) {
                const l = t[a];
                if (l === "/") {
                    if (!i) {
                        r = a + 1;
                        break
                    }
                    continue
                }
                n === -1 && (i = !1, n = a + 1), l === "." ? e === -1 ? e = a : o !== 1 && (o = 1) : e !== -1 && (o = -1)
            }
            return e === -1 || n === -1 || o === 0 || o === 1 && e === n - 1 && e === r + 1 ? "" : t.slice(e, n)
        },
        format: Lr.bind(null, "/"),
        parse(t) {
            P(t, "path");
            const e = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (t.length === 0) return e;
            const r = t.charCodeAt(0) === B;
            let n;
            r ? (e.root = "/", n = 1) : n = 0;
            let i = -1,
                o = 0,
                a = -1,
                l = !0,
                u = t.length - 1,
                c = 0;
            for (; u >= n; --u) {
                const h = t.charCodeAt(u);
                if (h === B) {
                    if (!l) {
                        o = u + 1;
                        break
                    }
                    continue
                }
                a === -1 && (l = !1, a = u + 1), h === ve ? i === -1 ? i = u : c !== 1 && (c = 1) : i !== -1 && (c = -1)
            }
            if (a !== -1) {
                const h = o === 0 && r ? 1 : o;
                i === -1 || c === 0 || c === 1 && i === a - 1 && i === o + 1 ? e.base = e.name = t.slice(h, a) : (e.name = t.slice(h, i), e.base = t.slice(h, a), e.ext = t.slice(i, a))
            }
            return o > 0 ? e.dir = t.slice(0, o - 1) : r && (e.dir = "/"), e
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
    };
T.win32 = M.win32 = M, T.posix = M.posix = T;
var Ds = J ? M.normalize : T.normalize,
    Lo = J ? M.isAbsolute : T.isAbsolute,
    Ps = J ? M.join : T.join,
    Ms = J ? M.resolve : T.resolve,
    zs = J ? M.relative : T.relative,
    Fs = J ? M.dirname : T.dirname,
    So = J ? M.basename : T.basename,
    Eo = J ? M.extname : T.extname,
    No = J ? M.format : T.format,
    xo = J ? M.parse : T.parse,
    To = J ? M.toNamespacedPath : T.toNamespacedPath,
    it = J ? M.sep : T.sep,
    Ao = J ? M.delimiter : T.delimiter,
    Us = class {
        constructor() {
            this.listeners = [], this.unexpectedErrorHandler = function(t) {
                setTimeout(() => {
                    throw t.stack ? Ot.isErrorNoTelemetry(t) ? new Ot(t.message + `

` + t.stack) : new Error(t.message + `

` + t.stack) : t
                }, 0)
            }
        }
        addListener(t) {
            return this.listeners.push(t), () => {
                this._removeListener(t)
            }
        }
        emit(t) {
            this.listeners.forEach(e => {
                e(t)
            })
        }
        _removeListener(t) {
            this.listeners.splice(this.listeners.indexOf(t), 1)
        }
        setUnexpectedErrorHandler(t) {
            this.unexpectedErrorHandler = t
        }
        getUnexpectedErrorHandler() {
            return this.unexpectedErrorHandler
        }
        onUnexpectedError(t) {
            this.unexpectedErrorHandler(t), this.emit(t)
        }
        onUnexpectedExternalError(t) {
            this.unexpectedErrorHandler(t)
        }
    },
    Sr = new Us;

function ot(t) {
    Sr.onUnexpectedError(t)
}

function ce(t) {
    $s(t) || Sr.onUnexpectedError(t)
}

function Tt(t) {
    if (t instanceof Error) {
        const {
            name: e,
            message: r,
            cause: n
        } = t, i = t.stacktrace || t.stack;
        return {
            $isError: !0,
            name: e,
            message: r,
            stack: i,
            noTelemetry: Ot.isErrorNoTelemetry(t),
            cause: n ? Tt(n) : void 0,
            code: t.code
        }
    }
    return t
}
var At = "Canceled";

function $s(t) {
    return t instanceof Bs ? !0 : t instanceof Error && t.name === At && t.message === At
}
var Bs = class extends Error {
        constructor() {
            if (super(At), this.name = this.message, qs && typeof console < "u") {
                const t = new Error().stack ?? "";
                js.some(e => t.includes(e)) && console.trace("[DebugCancellation] CancellationError created")
            }
        }
    },
    Ot = class or extends Error {
        constructor(e) {
            super(e), this.name = "CodeExpectedError"
        }
        static fromError(e) {
            if (e instanceof or) return e;
            const r = new or;
            return r.message = e.message, r.stack = e.stack, r
        }
        static isErrorNoTelemetry(e) {
            return e.name === "CodeExpectedError"
        }
    },
    Z = class Wn extends Error {
        constructor(e) {
            super(e || "An unexpected bug occurred."), Object.setPrototypeOf(this, Wn.prototype)
        }
    },
    js = ["composerChatService", "composerService", "composerUtilsService", "composerAgentService", "composerCapabilities", "composerDecisionsService", "aiServiceImpl", "toolsV2Service", "toolsV2HandlerRegistryService", "agentCompatService", "mockAgentStreamController", "mockComposerStreamController", "toolFormer", "ToolFormer", "tool", "agent", "Agent", "stream", "Stream", "ComposerFullInputBox", "ComposerToolFormerMessage", "composerActions", "cancelAll", "abortChatAndWaitForFinish", "abortGenerationUUID"],
    qs = !1,
    Er, Nr;

function Vs(t, e) {
    const r = Object.create(null);
    for (const n of t) {
        const i = e(n);
        let o = r[i];
        o || (o = r[i] = []), o.push(n)
    }
    return r
}
var Oo = class {
    constructor(t, e) {
        this.toKey = e, this._map = new Map, this[Er] = "SetWithKey";
        for (const r of t) this.add(r)
    }
    get size() {
        return this._map.size
    }
    add(t) {
        const e = this.toKey(t);
        return this._map.set(e, t), this
    }
    delete(t) {
        return this._map.delete(this.toKey(t))
    }
    has(t) {
        return this._map.has(this.toKey(t))
    }* entries() {
        for (const t of this._map.values()) yield [t, t]
    }
    keys() {
        return this.values()
    }* values() {
        for (const t of this._map.values()) yield t
    }
    clear() {
        this._map.clear()
    }
    forEach(t, e) {
        this._map.forEach(r => t.call(e, r, r, this))
    } [(Nr = Symbol.iterator, Er = Symbol.toStringTag, Nr)]() {
        return this.values()
    }
};

function Ws(t, e) {
    const r = this;
    let n = !1,
        i;
    return function() {
        if (n) return i;
        if (n = !0, e) try {
            i = t.apply(r, arguments)
        } finally {
            e()
        } else i = t.apply(r, arguments);
        return i
    }
}

function xr(t, e) {
    const r = at(t, e);
    return r === -1 ? void 0 : t[r]
}

function at(t, e, r = 0, n = t.length) {
    let i = r,
        o = n;
    for (; i < o;) {
        const a = Math.floor((i + o) / 2);
        e(t[a]) ? i = a + 1 : o = a
    }
    return i - 1
}

function Tr(t, e, r = 0, n = t.length) {
    let i = r,
        o = n;
    for (; i < o;) {
        const a = Math.floor((i + o) / 2);
        e(t[a]) ? o = a : i = a + 1
    }
    return i
}
var Gs = class Gn {
    constructor(e) {
        this._array = e, this._findLastMonotonousLastIdx = 0
    }
    findLastMonotonous(e) {
        if (Gn.assertInvariants) {
            if (this._prevFindLastPredicate) {
                for (const n of this._array)
                    if (this._prevFindLastPredicate(n) && !e(n)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.")
            }
            this._prevFindLastPredicate = e
        }
        const r = at(this._array, e, this._findLastMonotonousLastIdx);
        return this._findLastMonotonousLastIdx = r + 1, r === -1 ? void 0 : this._array[r]
    }
};
Gs.assertInvariants = !1;

function Ar(t, e, r) {
    const n = t.slice(0, e),
        i = t.slice(e);
    return n.concat(r, i)
}
var It;
(t => {
    function e(o) {
        return o < 0
    }
    t.isLessThan = e;

    function r(o) {
        return o <= 0
    }
    t.isLessThanOrEqual = r;

    function n(o) {
        return o > 0
    }
    t.isGreaterThan = n;

    function i(o) {
        return o === 0
    }
    t.isNeitherLessOrGreaterThan = i, t.greaterThan = 1, t.lessThan = -1, t.neitherLessOrGreaterThan = 0
})(It || (It = {}));

function Hs(t, e) {
    return (r, n) => e(t(r), t(n))
}
var Ks = (t, e) => t - e,
    Or = class ar {
        constructor(e) {
            this.iterate = e
        }
        forEach(e) {
            this.iterate(r => (e(r), !0))
        }
        toArray() {
            const e = [];
            return this.iterate(r => (e.push(r), !0)), e
        }
        filter(e) {
            return new ar(r => this.iterate(n => e(n) ? r(n) : !0))
        }
        map(e) {
            return new ar(r => this.iterate(n => r(e(n))))
        }
        some(e) {
            let r = !1;
            return this.iterate(n => (r = e(n), !r)), r
        }
        findFirst(e) {
            let r;
            return this.iterate(n => e(n) ? (r = n, !1) : !0), r
        }
        findLast(e) {
            let r;
            return this.iterate(n => (e(n) && (r = n), !0)), r
        }
        findLastMaxBy(e) {
            let r, n = !0;
            return this.iterate(i => ((n || It.isGreaterThan(e(i, r))) && (n = !1, r = i), !0)), r
        }
    };
Or.empty = new Or(t => {});
var Ir, Rr, Dr, Qs = class {
    constructor(t, e) {
        this.uri = t, this.value = e
    }
};

function Js(t) {
    return Array.isArray(t)
}
var Pr = class We {
    constructor(e, r) {
        if (this[Ir] = "ResourceMap", e instanceof We) this.map = new Map(e.map), this.toKey = r ?? We.defaultToKey;
        else if (Js(e)) {
            this.map = new Map, this.toKey = r ?? We.defaultToKey;
            for (const [n, i] of e) this.set(n, i)
        } else this.map = new Map, this.toKey = e ?? We.defaultToKey
    }
    set(e, r) {
        return this.map.set(this.toKey(e), new Qs(e, r)), this
    }
    get(e) {
        return this.map.get(this.toKey(e))?.value
    }
    has(e) {
        return this.map.has(this.toKey(e))
    }
    get size() {
        return this.map.size
    }
    clear() {
        this.map.clear()
    }
    delete(e) {
        return this.map.delete(this.toKey(e))
    }
    forEach(e, r) {
        typeof r < "u" && (e = e.bind(r));
        for (const [n, i] of this.map) e(i.value, i.uri, this)
    }* values() {
        for (const e of this.map.values()) yield e.value
    }* keys() {
        for (const e of this.map.values()) yield e.uri
    }* entries() {
        for (const e of this.map.values()) yield [e.uri, e.value]
    }*[(Ir = Symbol.toStringTag, Symbol.iterator)]() {
        for (const [, e] of this.map) yield [e.uri, e.value]
    }
};
Pr.defaultToKey = t => t.toString();
var Mr = Pr,
    Io = class {
        constructor(t, e) {
            this[Rr] = "ResourceSet", !t || typeof t == "function" ? this._map = new Mr(t) : (this._map = new Mr(e), t.forEach(this.add, this))
        }
        get size() {
            return this._map.size
        }
        add(t) {
            return this._map.set(t, t), this
        }
        clear() {
            this._map.clear()
        }
        delete(t) {
            return this._map.delete(t)
        }
        forEach(t, e) {
            this._map.forEach((r, n) => t.call(e, n, n, this))
        }
        has(t) {
            return this._map.has(t)
        }
        entries() {
            return this._map.entries()
        }
        keys() {
            return this._map.keys()
        }
        values() {
            return this._map.keys()
        } [(Rr = Symbol.toStringTag, Symbol.iterator)]() {
            return this.keys()
        }
    },
    Ro = class {
        constructor() {
            this[Dr] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0
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
        has(t) {
            return this._map.has(t)
        }
        get(t, e = 0) {
            const r = this._map.get(t);
            if (r) return e !== 0 && this.touch(r, e), r.value
        }
        set(t, e, r = 0) {
            let n = this._map.get(t);
            if (n) n.value = e, r !== 0 && this.touch(n, r);
            else {
                switch (n = {
                        key: t,
                        value: e,
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
                this._map.set(t, n), this._size++
            }
            return this
        }
        delete(t) {
            return !!this.remove(t)
        }
        remove(t) {
            const e = this._map.get(t);
            if (e) return this._map.delete(t), this.removeItem(e), this._size--, e.value
        }
        shift() {
            if (!this._head && !this._tail) return;
            if (!this._head || !this._tail) throw new Error("Invalid list");
            const t = this._head;
            return this._map.delete(t.key), this.removeItem(t), this._size--, t.value
        }
        forEach(t, e) {
            const r = this._state;
            let n = this._head;
            for (; n;) {
                if (e ? t.bind(e)(n.value, n.key, this) : t(n.value, n.key, this), this._state !== r) throw new Error("LinkedMap got modified during iteration.");
                n = n.next
            }
        }
        keys() {
            const t = this,
                e = this._state;
            let r = this._head;
            const n = {
                [Symbol.iterator]() {
                    return n
                },
                next() {
                    if (t._state !== e) throw new Error("LinkedMap got modified during iteration.");
                    if (r) {
                        const i = {
                            value: r.key,
                            done: !1
                        };
                        return r = r.next, i
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return n
        }
        values() {
            const t = this,
                e = this._state;
            let r = this._head;
            const n = {
                [Symbol.iterator]() {
                    return n
                },
                next() {
                    if (t._state !== e) throw new Error("LinkedMap got modified during iteration.");
                    if (r) {
                        const i = {
                            value: r.value,
                            done: !1
                        };
                        return r = r.next, i
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return n
        }
        entries() {
            const t = this,
                e = this._state;
            let r = this._head;
            const n = {
                [Symbol.iterator]() {
                    return n
                },
                next() {
                    if (t._state !== e) throw new Error("LinkedMap got modified during iteration.");
                    if (r) {
                        const i = {
                            value: [r.key, r.value],
                            done: !1
                        };
                        return r = r.next, i
                    } else return {
                        value: void 0,
                        done: !0
                    }
                }
            };
            return n
        } [(Dr = Symbol.toStringTag, Symbol.iterator)]() {
            return this.entries()
        }
        trimOld(t) {
            if (t >= this.size) return;
            if (t === 0) {
                this.clear();
                return
            }
            let e = this._head,
                r = this.size;
            for (; e && r > t;) this._map.delete(e.key), e = e.next, r--;
            this._head = e, this._size = r, e && (e.previous = void 0), this._state++
        }
        trimNew(t) {
            if (t >= this.size) return;
            if (t === 0) {
                this.clear();
                return
            }
            let e = this._tail,
                r = this.size;
            for (; e && r > t;) this._map.delete(e.key), e = e.previous, r--;
            this._tail = e, this._size = r, e && (e.next = void 0), this._state++
        }
        addItemFirst(t) {
            if (!this._head && !this._tail) this._tail = t;
            else if (this._head) t.next = this._head, this._head.previous = t;
            else throw new Error("Invalid list");
            this._head = t, this._state++
        }
        addItemLast(t) {
            if (!this._head && !this._tail) this._head = t;
            else if (this._tail) t.previous = this._tail, this._tail.next = t;
            else throw new Error("Invalid list");
            this._tail = t, this._state++
        }
        removeItem(t) {
            if (t === this._head && t === this._tail) this._head = void 0, this._tail = void 0;
            else if (t === this._head) {
                if (!t.next) throw new Error("Invalid list");
                t.next.previous = void 0, this._head = t.next
            } else if (t === this._tail) {
                if (!t.previous) throw new Error("Invalid list");
                t.previous.next = void 0, this._tail = t.previous
            } else {
                const e = t.next,
                    r = t.previous;
                if (!e || !r) throw new Error("Invalid list");
                e.previous = r, r.next = e
            }
            t.next = void 0, t.previous = void 0, this._state++
        }
        touch(t, e) {
            if (!this._head || !this._tail) throw new Error("Invalid list");
            if (!(e !== 1 && e !== 2)) {
                if (e === 1) {
                    if (t === this._head) return;
                    const r = t.next,
                        n = t.previous;
                    t === this._tail ? (n.next = void 0, this._tail = n) : (r.previous = n, n.next = r), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++
                } else if (e === 2) {
                    if (t === this._tail) return;
                    const r = t.next,
                        n = t.previous;
                    t === this._head ? (r.previous = void 0, this._head = r) : (r.previous = n, n.next = r), t.next = void 0, t.previous = this._tail, this._tail.next = t, this._tail = t, this._state++
                }
            }
        }
        toJSON() {
            const t = [];
            return this.forEach((e, r) => {
                t.push([r, e])
            }), t
        }
        fromJSON(t) {
            this.clear();
            for (const [e, r] of t) this.set(e, r)
        }
    },
    Zs = class {
        constructor() {
            this.map = new Map
        }
        add(t, e) {
            let r = this.map.get(t);
            r || (r = new Set, this.map.set(t, r)), r.add(e)
        }
        delete(t, e) {
            const r = this.map.get(t);
            r && (r.delete(e), r.size === 0 && this.map.delete(t))
        }
        forEach(t, e) {
            const r = this.map.get(t);
            r && r.forEach(e)
        }
        get(t) {
            const e = this.map.get(t);
            return e || new Set
        }
    };

function zr(t) {
    if (!t()) {
        debugger;
        t(), ce(new Z("Assertion Failed"))
    }
}

function Ys(t) {
    return typeof t == "string"
}

function Xs(t) {
    return !!t && typeof t[Symbol.iterator] == "function"
}

function ei(t) {
    return typeof t > "u"
}

function je(t) {
    return !ti(t)
}

function ti(t) {
    return ei(t) || t === null
}
var Rt;
(t => {
    function e(C) {
        return C && typeof C == "object" && typeof C[Symbol.iterator] == "function"
    }
    t.is = e;
    const r = Object.freeze([]);

    function n() {
        return r
    }
    t.empty = n;

    function* i(C) {
        yield C
    }
    t.single = i;

    function o(C) {
        return e(C) ? C : i(C)
    }
    t.wrap = o;

    function a(C) {
        return C || r
    }
    t.from = a;

    function* l(C) {
        for (let S = C.length - 1; S >= 0; S--) yield C[S]
    }
    t.reverse = l;

    function u(C) {
        return !C || C[Symbol.iterator]().next().done === !0
    }
    t.isEmpty = u;

    function c(C) {
        return C[Symbol.iterator]().next().value
    }
    t.first = c;

    function h(C, S) {
        let A = 0;
        for (const K of C)
            if (S(K, A++)) return !0;
        return !1
    }
    t.some = h;

    function d(C, S) {
        for (const A of C)
            if (S(A)) return A
    }
    t.find = d;

    function* b(C, S) {
        for (const A of C) S(A) && (yield A)
    }
    t.filter = b;

    function* v(C, S) {
        let A = 0;
        for (const K of C) yield S(K, A++)
    }
    t.map = v;

    function* E(C, S) {
        let A = 0;
        for (const K of C) yield* S(K, A++)
    }
    t.flatMap = E;

    function* I(...C) {
        for (const S of C) Xs(S) ? yield* S: yield S
    }
    t.concat = I;

    function R(C, S, A) {
        let K = A;
        for (const Ne of C) K = S(K, Ne);
        return K
    }
    t.reduce = R;

    function j(C) {
        let S = 0;
        for (const A of C) S++;
        return S
    }
    t.length = j;

    function* ge(C, S, A = C.length) {
        for (S < -C.length && (S = 0), S < 0 && (S += C.length), A < 0 ? A += C.length : A > C.length && (A = C.length); S < A; S++) yield C[S]
    }
    t.slice = ge;

    function U(C, S = Number.POSITIVE_INFINITY) {
        const A = [];
        if (S === 0) return [A, C];
        const K = C[Symbol.iterator]();
        for (let Ne = 0; Ne < S; Ne++) {
            const Je = K.next();
            if (Je.done) return [A, t.empty()];
            A.push(Je.value)
        }
        return [A, {
            [Symbol.iterator]() {
                return K
            }
        }]
    }
    t.consume = U;
    async function Ct(C) {
        const S = [];
        for await (const A of C) S.push(A);
        return Promise.resolve(S)
    }
    t.asyncToArray = Ct
})(Rt || (Rt = {}));
var ri = !1,
    Oe = null,
    ni = class Hn {
        constructor() {
            this.livingDisposables = new Map
        }
        getDisposableData(e) {
            let r = this.livingDisposables.get(e);
            return r || (r = {
                parent: null,
                source: null,
                isSingleton: !1,
                value: e,
                idx: Hn.idx++
            }, this.livingDisposables.set(e, r)), r
        }
        trackDisposable(e) {
            const r = this.getDisposableData(e);
            r.source || (r.source = new Error().stack)
        }
        setParent(e, r) {
            const n = this.getDisposableData(e);
            n.parent = r
        }
        markAsDisposed(e) {
            this.livingDisposables.delete(e)
        }
        markAsSingleton(e) {
            this.getDisposableData(e).isSingleton = !0
        }
        getRootParent(e, r) {
            const n = r.get(e);
            if (n) return n;
            const i = e.parent ? this.getRootParent(this.getDisposableData(e.parent), r) : e;
            return r.set(e, i), i
        }
        getTrackedDisposables() {
            const e = new Map;
            return [...this.livingDisposables.entries()].filter(([, n]) => n.source !== null && !this.getRootParent(n, e).isSingleton).flatMap(([n]) => n)
        }
        computeLeakingDisposables(e = 10, r) {
            let n;
            if (r) n = r;
            else {
                const u = new Map,
                    c = [...this.livingDisposables.values()].filter(d => d.source !== null && !this.getRootParent(d, u).isSingleton);
                if (c.length === 0) return;
                const h = new Set(c.map(d => d.value));
                if (n = c.filter(d => !(d.parent && h.has(d.parent))), n.length === 0) throw new Error("There are cyclic diposable chains!")
            }
            if (!n) return;

            function i(u) {
                function c(d, b) {
                    for (; d.length > 0 && b.some(v => typeof v == "string" ? v === d[0] : d[0].match(v));) d.shift()
                }
                const h = u.source.split(`
`).map(d => d.trim().replace("at ", "")).filter(d => d !== "");
                return c(h, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), h.reverse()
            }
            const o = new Zs;
            for (const u of n) {
                const c = i(u);
                for (let h = 0; h <= c.length; h++) o.add(c.slice(0, h).join(`
`), u)
            }
            n.sort(Hs(u => u.idx, Ks));
            let a = "",
                l = 0;
            for (const u of n.slice(0, e)) {
                l++;
                const c = i(u),
                    h = [];
                for (let d = 0; d < c.length; d++) {
                    let b = c[d];
                    b = `(shared with ${o.get(c.slice(0,d+1).join(`
`)).size}/${n.length} leaks) at ${b}`;
                    const E = o.get(c.slice(0, d).join(`
`)),
                        I = Vs([...E].map(R => i(R)[d]), R => R);
                    delete I[c[d]];
                    for (const [R, j] of Object.entries(I)) h.unshift(`    - stacktraces of ${j.length} other leaks continue with ${R}`);
                    h.unshift(b)
                }
                a += `


==================== Leaking disposable ${l}/${n.length}: ${u.value.constructor.name} ====================
${h.join(`
`)}
============================================================

`
            }
            return n.length > e && (a += `


... and ${n.length-e} more leaking disposables

`), {
                leaks: n,
                details: a
            }
        }
    };
ni.idx = 0;

function si(t) {
    Oe = t
}
if (ri) {
    const t = "__is_disposable_tracked__";
    si(new class {
        trackDisposable(e) {
            const r = new Error("Potentially leaked disposable").stack;
            setTimeout(() => {
                e[t] || console.log(r)
            }, 3e3)
        }
        setParent(e, r) {
            if (e && e !== ne.None) try {
                e[t] = !0
            } catch {}
        }
        markAsDisposed(e) {
            if (e && e !== ne.None) try {
                e[t] = !0
            } catch {}
        }
        markAsSingleton(e) {}
    })
}

function lt(t) {
    return Oe?.trackDisposable(t), t
}

function ut(t) {
    Oe?.markAsDisposed(t)
}

function Dt(t, e) {
    Oe?.setParent(t, e)
}

function ii(t, e) {
    if (Oe)
        for (const r of t) Oe.setParent(r, e)
}

function Fr(t) {
    if (Rt.is(t)) {
        const e = [];
        for (const r of t)
            if (r) try {
                r.dispose()
            } catch (n) {
                e.push(n)
            }
        if (e.length === 1) throw e[0];
        if (e.length > 1) throw new AggregateError(e, "Encountered errors while disposing of store");
        return Array.isArray(t) ? [] : t
    } else if (t) return t.dispose(), t
}

function oi(...t) {
    const e = Ie(() => Fr(t));
    return ii(t, e), e
}

function Ie(t) {
    const e = lt({
        dispose: Ws(() => {
            ut(e), t()
        })
    });
    return e
}
var Ur = class Kn {
    constructor() {
        this._toDispose = new Set, this._isDisposed = !1, lt(this)
    }
    dispose() {
        this._isDisposed || (ut(this), this._isDisposed = !0, this.clear())
    }
    get isDisposed() {
        return this._isDisposed
    }
    clear() {
        if (this._toDispose.size !== 0) try {
            Fr(this._toDispose)
        } finally {
            this._toDispose.clear()
        }
    }
    add(e) {
        if (!e) return e;
        if (e === this) throw new Error("Cannot register a disposable on itself!");
        return Dt(e, this), this._isDisposed ? Kn.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(e), e
    }
    delete(e) {
        if (e) {
            if (e === this) throw new Error("Cannot dispose a disposable on itself!");
            this._toDispose.delete(e), e.dispose()
        }
    }
    deleteAndLeak(e) {
        e && this._toDispose.has(e) && (this._toDispose.delete(e), Dt(e, null))
    }
};
Ur.DISABLE_DISPOSED_WARNING = !1;
var Pt = Ur,
    ne = class {
        constructor() {
            this._store = new Pt, lt(this), Dt(this._store, this)
        }
        dispose() {
            ut(this), this._store.dispose()
        }
        _register(t) {
            if (t === this) throw new Error("Cannot register a disposable on itself!");
            return this._store.add(t)
        }
    };
ne.None = Object.freeze({
    dispose() {}
});
var $r = class lr {
    constructor(e) {
        this.element = e, this.next = lr.Undefined, this.prev = lr.Undefined
    }
};
$r.Undefined = new $r(void 0);
var ai = globalThis.performance && typeof globalThis.performance.now == "function",
    Br = class Qn {
        static create(e) {
            return new Qn(e)
        }
        constructor(e) {
            this._now = ai && e === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1
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
    jr = !1,
    li = !1,
    ct;
(t => {
    t.None = () => ne.None;

    function e(p) {
        if (li) {
            const {
                onDidAddListener: f
            } = p, g = zt.create();
            let m = 0;
            p.onDidAddListener = () => {
                ++m === 2 && (console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here"), g.print()), f?.()
            }
        }
    }

    function r(p, f) {
        return v(p, () => {}, 0, void 0, !0, void 0, f)
    }
    t.defer = r;

    function n(p) {
        return (f, g = null, m) => {
            let y = !1,
                k;
            return k = p(x => {
                if (!y) return k ? k.dispose() : y = !0, f.call(g, x)
            }, null, m), y && k.dispose(), k
        }
    }
    t.once = n;

    function i(p, f) {
        return t.once(t.filter(p, f))
    }
    t.onceIf = i;

    function o(p, f, g) {
        return d((m, y = null, k) => p(x => m.call(y, f(x)), null, k), g)
    }
    t.map = o;

    function a(p, f, g) {
        return d((m, y = null, k) => p(x => {
            f(x), m.call(y, x)
        }, null, k), g)
    }
    t.forEach = a;

    function l(p, f, g) {
        return d((m, y = null, k) => p(x => f(x) && m.call(y, x), null, k), g)
    }
    t.filter = l;

    function u(p) {
        return p
    }
    t.signal = u;

    function c(...p) {
        return (f, g = null, m) => {
            const y = oi(...p.map(k => k(x => f.call(g, x))));
            return b(y, m)
        }
    }
    t.any = c;

    function h(p, f, g, m) {
        let y = g;
        return o(p, k => (y = f(y, k), y), m)
    }
    t.reduce = h;

    function d(p, f) {
        let g;
        const m = {
            onWillAddFirstListener() {
                g = p(y.fire, y)
            },
            onDidRemoveLastListener() {
                g?.dispose()
            }
        };
        f || e(m);
        const y = new X(m);
        return f?.add(y), y.event
    }

    function b(p, f) {
        return f instanceof Array ? f.push(p) : f && f.add(p), p
    }

    function v(p, f, g = 100, m = !1, y = !1, k, x) {
        let $, V, xe, Ze = 0,
            $e;
        const mr = {
            leakWarningThreshold: k,
            onWillAddFirstListener() {
                $ = p(ss => {
                    Ze++, V = f(V, ss), m && !xe && (Ye.fire(V), V = void 0), $e = () => {
                        const is = V;
                        V = void 0, xe = void 0, (!m || Ze > 1) && Ye.fire(is), Ze = 0
                    }, typeof g == "number" ? (clearTimeout(xe), xe = setTimeout($e, g)) : xe === void 0 && (xe = 0, queueMicrotask($e))
                })
            },
            onWillRemoveListener() {
                y && Ze > 0 && $e?.()
            },
            onDidRemoveLastListener() {
                $e = void 0, $.dispose()
            }
        };
        x || e(mr);
        const Ye = new X(mr);
        return x?.add(Ye), Ye.event
    }
    t.debounce = v;

    function E(p, f = 0, g) {
        return t.debounce(p, (m, y) => m ? (m.push(y), m) : [y], f, void 0, !0, void 0, g)
    }
    t.accumulate = E;

    function I(p, f = (m, y) => m === y, g) {
        let m = !0,
            y;
        return l(p, k => {
            const x = m || !f(k, y);
            return m = !1, y = k, x
        }, g)
    }
    t.latch = I;

    function R(p, f, g) {
        return [t.filter(p, f, g), t.filter(p, m => !f(m), g)]
    }
    t.split = R;

    function j(p, f = !1, g = [], m) {
        let y = g.slice(),
            k = p(V => {
                y ? y.push(V) : $.fire(V)
            });
        m && m.add(k);
        const x = () => {
                y?.forEach(V => $.fire(V)), y = null
            },
            $ = new X({
                onWillAddFirstListener() {
                    k || (k = p(V => $.fire(V)), m && m.add(k))
                },
                onDidAddFirstListener() {
                    y && (f ? setTimeout(x) : x())
                },
                onDidRemoveLastListener() {
                    k && k.dispose(), k = null
                }
            });
        return m && m.add($), $.event
    }
    t.buffer = j;

    function ge(p, f) {
        return (m, y, k) => {
            const x = f(new Ct);
            return p(function($) {
                const V = x.evaluate($);
                V !== U && m.call(y, V)
            }, void 0, k)
        }
    }
    t.chain = ge;
    const U = Symbol("HaltChainable");
    class Ct {
        constructor() {
            this.steps = []
        }
        map(f) {
            return this.steps.push(f), this
        }
        forEach(f) {
            return this.steps.push(g => (f(g), g)), this
        }
        filter(f) {
            return this.steps.push(g => f(g) ? g : U), this
        }
        reduce(f, g) {
            let m = g;
            return this.steps.push(y => (m = f(m, y), m)), this
        }
        latch(f = (g, m) => g === m) {
            let g = !0,
                m;
            return this.steps.push(y => {
                const k = g || !f(y, m);
                return g = !1, m = y, k ? y : U
            }), this
        }
        evaluate(f) {
            for (const g of this.steps)
                if (f = g(f), f === U) break;
            return f
        }
    }

    function C(p, f, g = m => m) {
        const m = (...$) => x.fire(g(...$)),
            y = () => p.on(f, m),
            k = () => p.removeListener(f, m),
            x = new X({
                onWillAddFirstListener: y,
                onDidRemoveLastListener: k
            });
        return x.event
    }
    t.fromNodeEventEmitter = C;

    function S(p) {
        let f;
        const g = () => {
                f = p.subscribe(k => y.fire(k))
            },
            m = () => {
                f?.unsubscribe(), f = void 0
            },
            y = new X({
                onWillAddFirstListener: g,
                onDidRemoveLastListener: m
            });
        return y.event
    }
    t.fromRxJS = S;

    function A(p, f, g = m => m) {
        const m = (...$) => x.fire(g(...$)),
            y = () => p.addEventListener(f, m),
            k = () => p.removeEventListener(f, m),
            x = new X({
                onWillAddFirstListener: y,
                onDidRemoveLastListener: k
            });
        return x.event
    }
    t.fromDOMEventEmitter = A;

    function K(p, f) {
        return new Promise(g => n(p)(g, null, f))
    }
    t.toPromise = K;

    function Ne(p) {
        const f = new X;
        return p.then(g => {
            f.fire(g)
        }, () => {
            f.fire(void 0)
        }).finally(() => {
            f.dispose()
        }), f.event
    }
    t.fromPromise = Ne;

    function Je(p, f) {
        return p(g => f.fire(g))
    }
    t.forward = Je;

    function es(p, f, g) {
        return f(g), p(m => f(m))
    }
    t.runAndSubscribe = es;
    class ts {
        constructor(f, g) {
            this._observable = f, this._counter = 0, this._hasChanged = !1;
            const m = {
                onWillAddFirstListener: () => {
                    f.addObserver(this), this._observable.reportChanges()
                },
                onDidRemoveLastListener: () => {
                    f.removeObserver(this)
                }
            };
            g || e(m), this.emitter = new X(m), g && g.add(this.emitter)
        }
        beginUpdate(f) {
            this._counter++
        }
        handlePossibleChange(f) {}
        handleChange(f, g) {
            this._hasChanged = !0
        }
        endUpdate(f) {
            this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())))
        }
    }

    function rs(p, f) {
        return new ts(p, f).emitter.event
    }
    t.fromObservable = rs;

    function ns(p) {
        return (f, g, m) => {
            let y = 0,
                k = !1;
            const x = {
                beginUpdate() {
                    y++
                },
                endUpdate() {
                    y--, y === 0 && (p.reportChanges(), k && (k = !1, f.call(g)))
                },
                handlePossibleChange() {},
                handleChange() {
                    k = !0
                }
            };
            p.addObserver(x), p.reportChanges();
            const $ = {
                dispose() {
                    p.removeObserver(x)
                }
            };
            return m instanceof Pt ? m.add($) : Array.isArray(m) && m.push($), $
        }
    }
    t.fromObservableLight = ns
})(ct || (ct = {}));
var Mt = class ur {
    constructor(e) {
        this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${e}_${ur._idPool++}`, ur.all.add(this)
    }
    start(e) {
        this._stopWatch = new Br, this.listenerCount = e
    }
    stop() {
        if (this._stopWatch) {
            const e = this._stopWatch.elapsed();
            this.durations.push(e), this.elapsedOverall += e, this.invocationCount += 1, this._stopWatch = void 0
        }
    }
};
Mt.all = new Set, Mt._idPool = 0;
var ui = Mt,
    qr = -1,
    Vr = class Jn {
        constructor(e, r, n = (Jn._idPool++).toString(16).padStart(3, "0")) {
            this._errorHandler = e, this.threshold = r, this.name = n, this._warnCountdown = 0
        }
        dispose() {
            this._stacks?.clear()
        }
        check(e, r) {
            const n = this.threshold;
            if (n <= 0 || r < n) return;
            this._stacks || (this._stacks = new Map);
            const i = this._stacks.get(e.value) || 0;
            if (this._stacks.set(e.value, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
                this._warnCountdown = n * .5;
                const [o, a] = this.getMostFrequentStack(), l = `[${this.name}] potential listener LEAK detected, having ${r} listeners already. MOST frequent listener (${a}):`;
                console.warn(l), console.warn(o);
                const u = new di(l, o);
                this._errorHandler(u)
            }
            return () => {
                const o = this._stacks.get(e.value) || 0;
                this._stacks.set(e.value, o - 1)
            }
        }
        getMostFrequentStack() {
            if (!this._stacks) return;
            let e, r = 0;
            for (const [n, i] of this._stacks)(!e || r < i) && (e = [n, i], r = i);
            return e
        }
    };
Vr._idPool = 1;
var ci = Vr,
    zt = class Zn {
        constructor(e) {
            this.value = e
        }
        static create() {
            const e = new Error;
            return new Zn(e.stack ?? "")
        }
        print() {
            console.warn(this.value.split(`
`).slice(2).join(`
`))
        }
    },
    di = class extends Error {
        constructor(t, e) {
            super(t), this.name = "ListenerLeakError", this.stack = e
        }
    },
    hi = class extends Error {
        constructor(t, e) {
            super(t), this.name = "ListenerRefusalError", this.stack = e
        }
    },
    fi = 0,
    dt = class {
        constructor(t) {
            this.value = t, this.id = fi++
        }
    },
    mi = 2,
    gi = (t, e) => {
        if (t instanceof dt) e(t);
        else
            for (let r = 0; r < t.length; r++) {
                const n = t[r];
                n && e(n)
            }
    },
    X = class {
        constructor(t) {
            this._size = 0, this._options = t, this._leakageMon = qr > 0 || this._options?.leakWarningThreshold ? new ci(t?.onListenerError ?? ce, this._options?.leakWarningThreshold ?? qr) : void 0, this._perfMon = this._options?._profName ? new ui(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue
        }
        dispose() {
            if (!this._disposed) {
                if (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners) {
                    if (jr) {
                        const t = this._listeners;
                        queueMicrotask(() => {
                            gi(t, e => e.stack?.print())
                        })
                    }
                    this._listeners = void 0, this._size = 0
                }
                this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose()
            }
        }
        get event() {
            return this._event ??= (t, e, r) => {
                if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
                    const l = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
                    console.warn(l);
                    const u = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1],
                        c = new hi(`${l}. HINT: Stack shows most frequent listener (${u[1]}-times)`, u[0]);
                    return (this._options?.onListenerError || ce)(c), ne.None
                }
                if (this._disposed) return ne.None;
                e && (t = t.bind(e));
                const n = new dt(t);
                let i, o;
                this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * .2) && (n.stack = zt.create(), i = this._leakageMon.check(n.stack, this._size + 1)), jr && (n.stack = o ?? zt.create()), this._listeners ? this._listeners instanceof dt ? (this._deliveryQueue ??= new pi, this._listeners = [this._listeners, n]) : this._listeners.push(n) : (this._options?.onWillAddFirstListener?.(this), this._listeners = n, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
                const a = Ie(() => {
                    i?.(), this._removeListener(n)
                });
                return r instanceof Pt ? r.add(a) : Array.isArray(r) && r.push(a), a
            }, this._event
        }
        _removeListener(t) {
            if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
            if (this._size === 1) {
                this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
                return
            }
            const e = this._listeners,
                r = e.indexOf(t);
            if (r === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
            this._size--, e[r] = void 0;
            const n = this._deliveryQueue.current === this;
            if (this._size * mi <= e.length) {
                let i = 0;
                for (let o = 0; o < e.length; o++) e[o] ? e[i++] = e[o] : n && i < this._deliveryQueue.end && (this._deliveryQueue.end--, i < this._deliveryQueue.i && this._deliveryQueue.i--);
                e.length = i
            }
        }
        _deliver(t, e) {
            if (!t) return;
            const r = this._options?.onListenerError || ce;
            if (!r) {
                t.value(e);
                return
            }
            try {
                t.value(e)
            } catch (n) {
                r(n)
            }
        }
        _deliverQueue(t) {
            const e = t.current._listeners;
            for (; t.i < t.end;) this._deliver(e[t.i++], t.value);
            t.reset()
        }
        fire(t) {
            if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners)
                if (this._listeners instanceof dt) this._deliver(this._listeners, t);
                else {
                    const e = this._deliveryQueue;
                    e.enqueue(this, t, this._listeners.length), this._deliverQueue(e)
                } this._perfMon?.stop()
        }
        hasListeners() {
            return this._size > 0
        }
    },
    pi = class {
        constructor() {
            this.i = -1, this.end = 0
        }
        enqueue(t, e, r) {
            this.i = 0, this.end = r, this.current = t, this.value = e
        }
        reset() {
            this.i = this.end, this.current = void 0, this.value = void 0
        }
    },
    Wr = Object.freeze(function(t, e) {
        const r = setTimeout(t.bind(e), 0);
        return {
            dispose() {
                clearTimeout(r)
            }
        }
    }),
    Gr;
(t => {
    function e(r) {
        return r === t.None || r === t.Cancelled || r instanceof bi ? !0 : !r || typeof r != "object" ? !1 : typeof r.isCancellationRequested == "boolean" && typeof r.onCancellationRequested == "function"
    }
    t.isCancellationToken = e, t.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: ct.None
    }), t.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: Wr
    })
})(Gr || (Gr = {}));
var bi = class {
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
        return this._isCancelled ? Wr : (this._emitter || (this._emitter = new X), this._emitter.event)
    }
    dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = null)
    }
};

function _i(t) {
    return t
}
var vi = class {
        constructor(t, e) {
            this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = _i) : (this._fn = e, this._computeKey = t.getCacheKey)
        }
        get(t) {
            const e = this._computeKey(t);
            return this.lastArgKey !== e && (this.lastArgKey = e, this.lastCache = this._fn(t)), this.lastCache
        }
    },
    Ft = class {
        constructor(t) {
            this.executor = t, this._didRun = !1
        }
        get hasValue() {
            return this._didRun
        }
        get value() {
            if (!this._didRun) try {
                this._value = this.executor()
            } catch (t) {
                this._error = t
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

function yi(t) {
    return t.split(/\r\n|\r|\n/)
}

function wi(t, e) {
    return t < e ? -1 : t > e ? 1 : 0
}

function Ci(t, e, r = 0, n = t.length, i = 0, o = e.length) {
    for (; r < n && i < o; r++, i++) {
        const u = t.charCodeAt(r),
            c = e.charCodeAt(i);
        if (u < c) return -1;
        if (u > c) return 1
    }
    const a = n - r,
        l = o - i;
    return a < l ? -1 : a > l ? 1 : 0
}

function Hr(t, e, r = 0, n = t.length, i = 0, o = e.length) {
    for (; r < n && i < o; r++, i++) {
        let u = t.charCodeAt(r),
            c = e.charCodeAt(i);
        if (u === c) continue;
        if (u >= 128 || c >= 128) return Ci(t.toLowerCase(), e.toLowerCase(), r, n, i, o);
        Kr(u) && (u -= 32), Kr(c) && (c -= 32);
        const h = u - c;
        if (h !== 0) return h
    }
    const a = n - r,
        l = o - i;
    return a < l ? -1 : a > l ? 1 : 0
}

function Kr(t) {
    return t >= 97 && t <= 122
}

function Qr(t) {
    return t >= 65 && t <= 90
}

function ki(t, e) {
    return t.length === e.length && Hr(t, e) === 0
}
var Li = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/,
    Si = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/,
    Ei = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/,
    Do = new RegExp("(?:" + [Li.source, Si.source, Ei.source].join("|") + ")", "g"),
    Po = "\uFEFF",
    Ni = class Ge {
        static getInstance() {
            return Ge._INSTANCE || (Ge._INSTANCE = new Ge), Ge._INSTANCE
        }
        constructor() {
            this._data = xi()
        }
        getGraphemeBreakType(e) {
            if (e < 32) return e === 10 ? 3 : e === 13 ? 2 : 4;
            if (e < 127) return 0;
            const r = this._data,
                n = r.length / 3;
            let i = 1;
            for (; i <= n;)
                if (e < r[3 * i]) i = 2 * i;
                else if (e > r[3 * i + 1]) i = 2 * i + 1;
            else return r[3 * i + 2];
            return 0
        }
    };
Ni._INSTANCE = null;

function xi() {
    return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]")
}
var Re = class cr {
    constructor(e) {
        this.confusableDictionary = e
    }
    static getInstance(e) {
        return cr.cache.get(Array.from(e))
    }
    static getLocales() {
        return cr._locales.value
    }
    isAmbiguous(e) {
        return this.confusableDictionary.has(e)
    }
    containsAmbiguousCharacter(e) {
        for (let r = 0; r < e.length; r++) {
            const n = e.codePointAt(r);
            if (typeof n == "number" && this.isAmbiguous(n)) return !0
        }
        return !1
    }
    getPrimaryConfusable(e) {
        return this.confusableDictionary.get(e)
    }
    getConfusableCodePoints() {
        return new Set(this.confusableDictionary.keys())
    }
};
Re.ambiguousCharacterData = new Ft(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Re.cache = new vi({
    getCacheKey: JSON.stringify
}, t => {
    function e(c) {
        const h = new Map;
        for (let d = 0; d < c.length; d += 2) h.set(c[d], c[d + 1]);
        return h
    }

    function r(c, h) {
        const d = new Map(c);
        for (const [b, v] of h) d.set(b, v);
        return d
    }

    function n(c, h) {
        if (!c) return h;
        const d = new Map;
        for (const [b, v] of c) h.has(b) && d.set(b, v);
        return d
    }
    const i = Re.ambiguousCharacterData.value;
    let o = t.filter(c => !c.startsWith("_") && c in i);
    o.length === 0 && (o = ["_default"]);
    let a;
    for (const c of o) {
        const h = e(i[c]);
        a = n(a, h)
    }
    const l = e(i._common),
        u = r(l, a);
    return new Re(u)
}), Re._locales = new Ft(() => Object.keys(Re.ambiguousCharacterData.value).filter(t => !t.startsWith("_")));
var Ti = class He {
    static getRawData() {
        return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}')
    }
    static getData() {
        return this._data || (this._data = new Set([...Object.values(He.getRawData())].flat())), this._data
    }
    static isInvisibleCharacter(e) {
        return He.getData().has(e)
    }
    static containsInvisibleCharacter(e) {
        for (let r = 0; r < e.length; r++) {
            const n = e.codePointAt(r);
            if (typeof n == "number" && (He.isInvisibleCharacter(n) || n === 32)) return !0
        }
        return !1
    }
    static get codePoints() {
        return He.getData()
    }
};
Ti._data = void 0;
var z;
(t => {
    t.inMemory = "inmemory", t.vscode = "vscode", t.internal = "private", t.walkThrough = "walkThrough", t.walkThroughSnippet = "walkThroughSnippet", t.http = "http", t.https = "https", t.file = "file", t.git = "git", t.mailto = "mailto", t.untitled = "untitled", t.data = "data", t.command = "command", t.vscodeRemote = "vscode-remote", t.vscodeRemoteResource = "vscode-remote-resource", t.vscodeManagedRemoteResource = "vscode-managed-remote-resource", t.vscodeUserData = "vscode-userdata", t.vscodeCustomEditor = "vscode-custom-editor", t.vscodeNotebook = "vscode-notebook", t.vscodeNotebookCell = "vscode-notebook-cell", t.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", t.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", t.vscodeNotebookCellOutput = "vscode-notebook-cell-output", t.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", t.vscodeNotebookMetadata = "vscode-notebook-metadata", t.vscodeInteractiveInput = "vscode-interactive-input", t.vscodeSettings = "vscode-settings", t.vscodeWorkspaceTrust = "vscode-workspace-trust", t.vscodeTerminal = "vscode-terminal", t.terminal = "terminal", t.vscodeChatCodeBlock = "vscode-chat-code-block", t.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", t.vscodeChatSesssion = "vscode-chat-editor", t.webviewPanel = "webview-panel", t.vscodeWebview = "vscode-webview", t.extension = "extension", t.aiChat = "cursor.aichat", t.contextObject = "cursor.context-object", t.composer = "cursor.composer", t.aiSettings = "cursor.aisettings", t.tinderDiffEditor = "cursor.tinderdiffeditor", t.vscodeFileResource = "vscode-file", t.cursorRpcDevtools = "cursor-rpc-devtools", t.tmp = "tmp", t.vsls = "vsls", t.vscodeSourceControl = "vscode-scm", t.commentsInput = "comment", t.codeSetting = "code-setting", t.cursorDev = "cursor-dev-utils", t.outputChannel = "output", t.accessibleView = "accessible-view", t.backgroundComposer = "cursor.backgroundcomposer", t.personalEnvironmentJson = "cursor.personalenvironmentjson", t.bugbot = "cursor.bugbot", t.aiEditorBox = "aiEditorBox", t.backgroundComposerPeek = "background-composer-peek", t.cursorPlan = "cursor-plan", t.reviewChanges = "cursor.reviewchanges", t.cursorBlame = "cursor.blame", t.cursorFileBlame = "cursor.fileblame"
})(z || (z = {}));
var Ai = "tkn",
    Oi = class {
        constructor() {
            this._hosts = Object.create(null), this._ports = Object.create(null), this._connectionTokens = Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/"
        }
        setPreferredWebSchema(t) {
            this._preferredWebSchema = t
        }
        setDelegate(t) {
            this._delegate = t
        }
        setServerRootPath(t, e) {
            this._serverRootPath = T.join(e ?? "/", Ri(t))
        }
        getServerRootPath() {
            return this._serverRootPath
        }
        get _remoteResourcesPath() {
            return T.join(this._serverRootPath, z.vscodeRemoteResource)
        }
        set(t, e, r) {
            this._hosts[t] = e, this._ports[t] = r
        }
        setConnectionToken(t, e) {
            this._connectionTokens[t] = e
        }
        getPreferredWebSchema() {
            return this._preferredWebSchema
        }
        rewrite(t) {
            if (this._delegate) try {
                return this._delegate(t)
            } catch (a) {
                return ce(a), t
            }
            const e = t.authority;
            let r = this._hosts[e];
            r && r.indexOf(":") !== -1 && r.indexOf("[") === -1 && (r = `[${r}]`);
            const n = this._ports[e],
                i = this._connectionTokens[e];
            let o = `path=${encodeURIComponent(t.path)}`;
            return typeof i == "string" && (o += `&${Ai}=${encodeURIComponent(i)}`), Y.from({
                scheme: yr ? this._preferredWebSchema : z.vscodeRemoteResource,
                authority: `${r}:${n}`,
                path: this._remoteResourcesPath,
                query: o
            })
        }
    },
    Ii = new Oi;

function Ri(t) {
    return `${t.quality??"oss"}-${t.commit??"dev"}`
}
var Di = "vs/../../node_modules",
    Pi = "vs/../../node_modules.asar",
    Jr = "vscode-app",
    Zr = class vt {
        asBrowserUri(e) {
            const r = this.toUri(e);
            return this.uriToBrowserUri(r)
        }
        uriToBrowserUri(e) {
            return e.scheme === z.vscodeRemote ? Ii.rewrite(e) : e.scheme === z.file && (ys || Cs === `${z.vscodeFileResource}://${vt.FALLBACK_AUTHORITY}`) ? e.with({
                scheme: z.vscodeFileResource,
                authority: e.authority || vt.FALLBACK_AUTHORITY,
                query: null,
                fragment: null
            }) : e
        }
        asFileUri(e) {
            const r = this.toUri(e);
            return this.uriToFileUri(r)
        }
        uriToFileUri(e) {
            return e.scheme === z.vscodeFileResource ? e.with({
                scheme: z.file,
                authority: e.authority !== vt.FALLBACK_AUTHORITY ? e.authority : null,
                query: null,
                fragment: null
            }) : e
        }
        toUri(e) {
            if (Y.isUri(e)) return e;
            if (globalThis._VSCODE_FILE_ROOT) {
                const r = globalThis._VSCODE_FILE_ROOT;
                if (/^\w[\w\d+.-]*:\/\//.test(r)) return Y.joinPath(Y.parse(r, !0), e);
                const n = Ps(r, e);
                return Y.file(n)
            }
            throw new Error("Cannot determine URI for module id!")
        }
    };
Zr.FALLBACK_AUTHORITY = Jr;
var Mi = Zr,
    zi = new Mi,
    Mo = Object.freeze({
        "Cache-Control": "no-cache, no-store"
    }),
    zo = Object.freeze({
        "Document-Policy": "include-js-call-stacks-in-crash-reports, js-profiling"
    }),
    Yr;
(t => {
    const e = new Map([
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
    t.CoopAndCoep = Object.freeze(e.get("3"));
    const r = "vscode-coi";

    function n(o) {
        let a;
        typeof o == "string" ? a = new URL(o).searchParams : o instanceof URL ? a = o.searchParams : Y.isUri(o) && (a = new URL(o.toString(!0)).searchParams);
        const l = a?.get(r);
        if (l) return e.get(l)
    }
    t.getHeadersFromQuery = n;

    function i(o, a, l) {
        if (!globalThis.crossOriginIsolated) return;
        const u = a && l ? "3" : l ? "2" : "1";
        o instanceof URLSearchParams ? o.set(r, u) : o[r] = u
    }
    t.addSearchParam = i
})(Yr || (Yr = {}));
var Fo = new Ft(() => new Uint8Array(256));

function ht(t, e) {
    return t[e] * 2 ** 24 + t[e + 1] * 2 ** 16 + t[e + 2] * 2 ** 8 + t[e + 3]
}

function ft(t, e, r) {
    t[r + 3] = e, e = e >>> 8, t[r + 2] = e, e = e >>> 8, t[r + 1] = e, e = e >>> 8, t[r] = e
}
var Fi = /^\w[\w\d+.-]*$/,
    Ui = /^\//,
    $i = /^\/\//;

function Bi(t, e) {
    if (!t.scheme && e) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);
    if (t.scheme && !Fi.test(t.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (t.path) {
        if (t.authority) {
            if (!Ui.test(t.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
        } else if ($i.test(t.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
    }
}

function ji(t, e) {
    return !t && !e ? "file" : t
}

function qi(t, e) {
    switch (t) {
        case "https":
        case "http":
        case "file":
            e ? e[0] !== se && (e = se + e) : e = se;
            break
    }
    return e
}
var O = "",
    se = "/",
    Vi = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
    Y = class yt {
        static isUri(e) {
            return e instanceof yt ? !0 : e ? typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function" : !1
        }
        constructor(e, r, n, i, o, a = !1) {
            typeof e == "object" ? (this.scheme = e.scheme || O, this.authority = e.authority || O, this.path = e.path || O, this.query = e.query || O, this.fragment = e.fragment || O) : (this.scheme = ji(e, a), this.authority = r || O, this.path = qi(this.scheme, n || O), this.query = i || O, this.fragment = o || O, Bi(this, a))
        }
        get fsPath() {
            return mt(this, !1)
        }
        with(e) {
            if (!e) return this;
            let {
                scheme: r,
                authority: n,
                path: i,
                query: o,
                fragment: a
            } = e;
            return r === void 0 ? r = this.scheme : r === null && (r = O), n === void 0 ? n = this.authority : n === null && (n = O), i === void 0 ? i = this.path : i === null && (i = O), o === void 0 ? o = this.query : o === null && (o = O), a === void 0 ? a = this.fragment : a === null && (a = O), r === this.scheme && n === this.authority && i === this.path && o === this.query && a === this.fragment ? this : new De(r, n, i, o, a)
        }
        static parse(e, r = !1) {
            const n = Vi.exec(e);
            return n ? new De(n[2] || O, gt(n[4] || O), gt(n[5] || O), gt(n[7] || O), gt(n[9] || O), r) : new De(O, O, O, O, O)
        }
        static file(e) {
            let r = O;
            if (Ae && (e = e.replace(/\\/g, se)), e[0] === se && e[1] === se) {
                const n = e.indexOf(se, 2);
                n === -1 ? (r = e.substring(2), e = se) : (r = e.substring(2, n), e = e.substring(n) || se)
            }
            return new De("file", r, e, O, O)
        }
        static from(e, r) {
            return new De(e.scheme, e.authority, e.path, e.query, e.fragment, r)
        }
        static joinPath(e, ...r) {
            if (!e.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
            let n;
            return Ae && e.scheme === "file" ? n = yt.file(M.join(mt(e, !0), ...r)).path : n = T.join(e.path, ...r), e.with({
                path: n
            })
        }
        toString(e = !1) {
            return Ut(this, e)
        }
        toJSON() {
            return this
        }
        static revive(e) {
            if (e) {
                if (e instanceof yt) return e;
                {
                    const r = new De(e);
                    return r._formatted = e.external ?? null, r._fsPath = e._sep === Xr ? e.fsPath ?? null : null, r
                }
            } else return e
        } [Symbol.for("debug.description")]() {
            return `URI(${this.toString()})`
        }
    },
    Xr = Ae ? 1 : void 0,
    De = class extends Y {
        constructor() {
            super(...arguments), this._formatted = null, this._fsPath = null
        }
        get fsPath() {
            return this._fsPath || (this._fsPath = mt(this, !1)), this._fsPath
        }
        toString(t = !1) {
            return t ? Ut(this, !0) : (this._formatted || (this._formatted = Ut(this, !1)), this._formatted)
        }
        toJSON() {
            const t = {
                $mid: 1
            };
            return this._fsPath && (t.fsPath = this._fsPath, t._sep = Xr), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t
        }
    },
    en = {
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

function tn(t, e, r) {
    let n, i = -1;
    for (let o = 0; o < t.length; o++) {
        const a = t.charCodeAt(o);
        if (a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 45 || a === 46 || a === 95 || a === 126 || e && a === 47 || r && a === 91 || r && a === 93 || r && a === 58) i !== -1 && (n += encodeURIComponent(t.substring(i, o)), i = -1), n !== void 0 && (n += t.charAt(o));
        else {
            n === void 0 && (n = t.substr(0, o));
            const l = en[a];
            l !== void 0 ? (i !== -1 && (n += encodeURIComponent(t.substring(i, o)), i = -1), n += l) : i === -1 && (i = o)
        }
    }
    return i !== -1 && (n += encodeURIComponent(t.substring(i))), n !== void 0 ? n : t
}

function Wi(t) {
    let e;
    for (let r = 0; r < t.length; r++) {
        const n = t.charCodeAt(r);
        n === 35 || n === 63 ? (e === void 0 && (e = t.substr(0, r)), e += en[n]) : e !== void 0 && (e += t[r])
    }
    return e !== void 0 ? e : t
}

function mt(t, e) {
    let r;
    return t.authority && t.path.length > 1 && t.scheme === "file" ? r = `//${t.authority}${t.path}` : t.path.charCodeAt(0) === 47 && (t.path.charCodeAt(1) >= 65 && t.path.charCodeAt(1) <= 90 || t.path.charCodeAt(1) >= 97 && t.path.charCodeAt(1) <= 122) && t.path.charCodeAt(2) === 58 ? e ? r = t.path.substr(1) : r = t.path[1].toLowerCase() + t.path.substr(2) : r = t.path, Ae && (r = r.replace(/\//g, "\\")), r
}

function Ut(t, e) {
    const r = e ? Wi : tn;
    let n = "",
        {
            scheme: i,
            authority: o,
            path: a,
            query: l,
            fragment: u
        } = t;
    if (i && (n += i, n += ":"), (o || i === "file") && (n += se, n += se), o) {
        let c = o.indexOf("@");
        if (c !== -1) {
            const h = o.substr(0, c);
            o = o.substr(c + 1), c = h.lastIndexOf(":"), c === -1 ? n += r(h, !1, !1) : (n += r(h.substr(0, c), !1, !1), n += ":", n += r(h.substr(c + 1), !1, !0)), n += "@"
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
    return l && (n += "?", n += r(l, !1, !1)), u && (n += "#", n += e ? u : tn(u, !1, !1)), n
}

function rn(t) {
    try {
        return decodeURIComponent(t)
    } catch {
        return t.length > 3 ? t.substr(0, 3) + rn(t.substr(3)) : t
    }
}
var nn = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

function gt(t) {
    return t.match(nn) ? t.replace(nn, e => rn(e)) : t
}

function be(t) {
    return t === 47 || t === 92
}

function sn(t) {
    return t.replace(/[\\/]/g, T.sep)
}

function Gi(t) {
    return t.indexOf("/") === -1 && (t = sn(t)), /^[a-zA-Z]:(\/|$)/.test(t) && (t = "/" + t), t
}

function on(t, e = T.sep) {
    if (!t) return "";
    const r = t.length,
        n = t.charCodeAt(0);
    if (be(n)) {
        if (be(t.charCodeAt(1)) && !be(t.charCodeAt(2))) {
            let o = 3;
            const a = o;
            for (; o < r && !be(t.charCodeAt(o)); o++);
            if (a !== o && !be(t.charCodeAt(o + 1))) {
                for (o += 1; o < r; o++)
                    if (be(t.charCodeAt(o))) return t.slice(0, o + 1).replace(/[\\/]/g, e)
            }
        }
        return e
    } else if (Qi(n) && t.charCodeAt(1) === 58) return be(t.charCodeAt(2)) ? t.slice(0, 2) + e : t.slice(0, 2);
    let i = t.indexOf("://");
    if (i !== -1) {
        for (i += 3; i < r; i++)
            if (be(t.charCodeAt(i))) return t.slice(0, i + 1)
    }
    return ""
}

function Hi(t, e, r) {
    return r === 0 ? !0 : t.charCodeAt(0) !== e.charCodeAt(0) ? !1 : r === 1 ? !0 : t.charCodeAt(r - 1) !== e.charCodeAt(r - 1) ? !1 : t.startsWith(e)
}

function Ki(t, e, r) {
    for (let n = 0; n < r; n++) {
        let i = t.charCodeAt(n),
            o = e.charCodeAt(n);
        if (i !== o) {
            if (i >= 128 || o >= 128) return Hr(t, e, n, r, n, r) === 0;
            if (i >= 97 && i <= 122 && (i -= 32), o >= 97 && o <= 122 && (o -= 32), i !== o) return !1
        }
    }
    return !0
}

function an(t, e, r, n = it) {
    if (t === e) return !0;
    if (!t || !e) return !1;
    const i = t.length,
        o = e.length;
    if (o > i) return !1;
    const a = n.charCodeAt(0),
        l = e.charCodeAt(o - 1) === a;
    if (o < i && !l && t.charCodeAt(o) !== a) return !1;
    if (r) {
        if (!Ki(t, e, o)) return !1
    } else if (!Hi(t, e, o)) return !1;
    return o === i || l ? !0 : t.charCodeAt(o) === a
}

function Qi(t) {
    return t >= 65 && t <= 90 || t >= 97 && t <= 122
}

function de(t) {
    return mt(t, !0)
}
var $t = class {
        constructor(t) {
            this._ignorePathCasing = t
        }
        compare(t, e, r = !1) {
            return t === e ? 0 : wi(this.getComparisonKey(t, r), this.getComparisonKey(e, r))
        }
        isEqual(t, e, r = !1) {
            return t === e ? !0 : !t || !e ? !1 : this.getComparisonKey(t, r) === this.getComparisonKey(e, r)
        }
        getComparisonKey(t, e = !1) {
            return t.with({
                path: this._ignorePathCasing(t) ? t.path.toLowerCase() : void 0,
                fragment: e ? null : void 0
            }).toString()
        }
        ignorePathCasing(t) {
            return this._ignorePathCasing(t)
        }
        isEqualOrParent(t, e, r = !1) {
            if (t.scheme === e.scheme) {
                if (t.scheme === z.file) return an(de(t), de(e), this._ignorePathCasing(t)) && t.query === e.query && (r || t.fragment === e.fragment);
                if (ln(t.authority, e.authority)) return an(t.path, e.path, this._ignorePathCasing(t), "/") && t.query === e.query && (r || t.fragment === e.fragment)
            }
            return !1
        }
        joinPath(t, ...e) {
            return Y.joinPath(t, ...e)
        }
        basenameOrAuthority(t) {
            return Zi(t) || t.authority
        }
        basename(t) {
            return T.basename(t.path)
        }
        extname(t) {
            return T.extname(t.path)
        }
        dirname(t) {
            if (t.path.length === 0) return t;
            let e;
            return t.scheme === z.file ? e = Y.file(Fs(de(t))).path : (e = T.dirname(t.path), t.authority && e.length && e.charCodeAt(0) !== 47 && (console.error(`dirname("${t.toString})) resulted in a relative path`), e = "/")), t.with({
                path: e
            })
        }
        normalizePath(t) {
            if (!t.path.length) return t;
            let e;
            return t.scheme === z.file ? e = Y.file(Ds(de(t))).path : e = T.normalize(t.path), t.with({
                path: e
            })
        }
        relativePath(t, e) {
            if (t.scheme !== e.scheme || !ln(t.authority, e.authority)) return;
            if (t.scheme === z.file) {
                const i = zs(de(t), de(e));
                return Ae ? sn(i) : i
            }
            let r = t.path || "/";
            const n = e.path || "/";
            if (this._ignorePathCasing(t)) {
                let i = 0;
                for (const o = Math.min(r.length, n.length); i < o && !(r.charCodeAt(i) !== n.charCodeAt(i) && r.charAt(i).toLowerCase() !== n.charAt(i).toLowerCase()); i++);
                r = n.substr(0, i) + r.substr(i)
            }
            return T.relative(r, n)
        }
        resolvePath(t, e) {
            if (t.scheme === z.file) {
                const r = Y.file(Ms(de(t), e));
                return t.with({
                    authority: r.authority,
                    path: r.path
                })
            }
            return e = Gi(e), t.with({
                path: T.resolve(t.path, e)
            })
        }
        isAbsolutePath(t) {
            return !!t.path && t.path[0] === "/"
        }
        isEqualAuthority(t, e) {
            return t === e || t !== void 0 && e !== void 0 && ki(t, e)
        }
        hasTrailingPathSeparator(t, e = it) {
            if (t.scheme === z.file) {
                const r = de(t);
                return r.length > on(r).length && r[r.length - 1] === e
            } else {
                const r = t.path;
                return r.length > 1 && r.charCodeAt(r.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath)
            }
        }
        removeTrailingPathSeparator(t, e = it) {
            return un(t, e) ? t.with({
                path: t.path.substr(0, t.path.length - 1)
            }) : t
        }
        addTrailingPathSeparator(t, e = it) {
            let r = !1;
            if (t.scheme === z.file) {
                const n = de(t);
                r = n !== void 0 && n.length === on(n).length && n[n.length - 1] === e
            } else {
                e = "/";
                const n = t.path;
                r = n.length === 1 && n.charCodeAt(n.length - 1) === 47
            }
            return !r && !un(t, e) ? t.with({
                path: t.path + "/"
            }) : t
        }
    },
    N = new $t(() => !1),
    Uo = new $t(t => t.scheme === z.file ? !vs : !0),
    $o = new $t(t => !0),
    Ji = N.isEqual.bind(N),
    Bo = N.isEqualOrParent.bind(N),
    jo = N.getComparisonKey.bind(N),
    qo = N.basenameOrAuthority.bind(N),
    Zi = N.basename.bind(N),
    Vo = N.extname.bind(N),
    Wo = N.dirname.bind(N),
    Go = N.joinPath.bind(N),
    Ho = N.normalizePath.bind(N),
    Ko = N.relativePath.bind(N),
    Qo = N.resolvePath.bind(N),
    Jo = N.isAbsolutePath.bind(N),
    ln = N.isEqualAuthority.bind(N),
    un = N.hasTrailingPathSeparator.bind(N),
    Zo = N.removeTrailingPathSeparator.bind(N),
    Yo = N.addTrailingPathSeparator.bind(N),
    cn;
(t => {
    t.META_DATA_LABEL = "label", t.META_DATA_DESCRIPTION = "description", t.META_DATA_SIZE = "size", t.META_DATA_MIME = "mime";

    function e(r) {
        const n = new Map;
        r.path.substring(r.path.indexOf(";") + 1, r.path.lastIndexOf(";")).split(";").forEach(a => {
            const [l, u] = a.split(":");
            l && u && n.set(l, u)
        });
        const o = r.path.substring(0, r.path.indexOf(";"));
        return o && n.set(t.META_DATA_MIME, o), n
    }
    t.parseMetaData = e
})(cn || (cn = {}));
var Yi = class {
        constructor() {
            this._scopeNameToLanguageRegistration = Object.create(null)
        }
        reset() {
            this._scopeNameToLanguageRegistration = Object.create(null)
        }
        register(t) {
            if (this._scopeNameToLanguageRegistration[t.scopeName]) {
                const e = this._scopeNameToLanguageRegistration[t.scopeName];
                Ji(e.location, t.location) || console.warn(`Overwriting grammar scope name to file mapping for scope ${t.scopeName}.
Old grammar file: ${e.location.toString()}.
New grammar file: ${t.location.toString()}`)
            }
            this._scopeNameToLanguageRegistration[t.scopeName] = t
        }
        getGrammarDefinition(t) {
            return this._scopeNameToLanguageRegistration[t] || null
        }
    },
    Bt = "No TM Grammar registered for this language.",
    Xi = class extends ne {
        constructor(t, e, r, n) {
            super(), this._host = t, this._initialState = r.INITIAL, this._scopeRegistry = new Yi, this._injections = {}, this._injectedEmbeddedLanguages = {}, this._languageToScope = new Map, this._grammarRegistry = this._register(new r.Registry({
                onigLib: n,
                loadGrammar: async i => {
                    const o = this._scopeRegistry.getGrammarDefinition(i);
                    if (!o) return this._host.logTrace(`No grammar found for scope ${i}`), null;
                    const a = o.location;
                    try {
                        const l = await this._host.readFile(a);
                        return r.parseRawGrammar(l, a.path)
                    } catch (l) {
                        return this._host.logError(`Unable to load and parse grammar for scope ${i} from ${a}`, l), null
                    }
                },
                getInjections: i => {
                    const o = i.split(".");
                    let a = [];
                    for (let l = 1; l <= o.length; l++) {
                        const u = o.slice(0, l).join(".");
                        a = [...a, ...this._injections[u] || []]
                    }
                    return a
                }
            }));
            for (const i of e) {
                if (this._scopeRegistry.register(i), i.injectTo) {
                    for (const o of i.injectTo) {
                        let a = this._injections[o];
                        a || (this._injections[o] = a = []), a.push(i.scopeName)
                    }
                    if (i.embeddedLanguages)
                        for (const o of i.injectTo) {
                            let a = this._injectedEmbeddedLanguages[o];
                            a || (this._injectedEmbeddedLanguages[o] = a = []), a.push(i.embeddedLanguages)
                        }
                }
                i.language && this._languageToScope.set(i.language, i.scopeName)
            }
        }
        has(t) {
            return this._languageToScope.has(t)
        }
        setTheme(t, e) {
            this._grammarRegistry.setTheme(t, e)
        }
        getColorMap() {
            return this._grammarRegistry.getColorMap()
        }
        async createGrammar(t, e) {
            const r = this._languageToScope.get(t);
            if (typeof r != "string") throw new Error(Bt);
            const n = this._scopeRegistry.getGrammarDefinition(r);
            if (!n) throw new Error(Bt);
            const i = n.embeddedLanguages;
            if (this._injectedEmbeddedLanguages[r]) {
                const l = this._injectedEmbeddedLanguages[r];
                for (const u of l)
                    for (const c of Object.keys(u)) i[c] = u[c]
            }
            const o = Object.keys(i).length > 0;
            let a;
            try {
                a = await this._grammarRegistry.loadGrammarWithConfiguration(r, e, {
                    embeddedLanguages: i,
                    tokenTypes: n.tokenTypes,
                    balancedBracketSelectors: n.balancedBracketSelectors,
                    unbalancedBracketSelectors: n.unbalancedBracketSelectors
                })
            } catch (l) {
                throw l.message && l.message.startsWith("No grammar provided for") ? new Error(Bt) : l
            }
            return {
                languageId: t,
                grammar: a,
                initialState: this._initialState,
                containsEmbeddedLanguages: o,
                sourceExtensionId: n.sourceExtensionId
            }
        }
    },
    q = [];
for (let t = 0; t < 256; t++) q.push(t.toString(16).padStart(2, "0"));
var e1 = (function() {
        if (typeof crypto.randomUUID == "function") return crypto.randomUUID.bind(crypto);
        const t = new Uint8Array(16);
        return function() {
            crypto.getRandomValues(t), t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128;
            let r = 0,
                n = "";
            return n += q[t[r++]], n += q[t[r++]], n += q[t[r++]], n += q[t[r++]], n += "-", n += q[t[r++]], n += q[t[r++]], n += "-", n += q[t[r++]], n += q[t[r++]], n += "-", n += q[t[r++]], n += q[t[r++]], n += "-", n += q[t[r++]], n += q[t[r++]], n += q[t[r++]], n += q[t[r++]], n += q[t[r++]], n += q[t[r++]], n
        }
    })(),
    t1 = !1,
    r1 = class {
        constructor(t, e, r) {
            this.id = t, this.dependencies = e, this.callback = r
        }
    },
    jt = class {
        constructor() {
            this._isWebWorker = typeof self == "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope", this._isRenderer = typeof document == "object", this._defineCalls = [], this._state = 1
        }
        _initialize() {
            if (this._state === 1) {
                if (globalThis.define) {
                    this._state = 3;
                    return
                }
            } else return;
            this._state = 2, globalThis.define = (e, r, n) => {
                typeof e != "string" && (n = r, r = e, e = null), (typeof r != "object" || !Array.isArray(r)) && (n = r, r = null), this._defineCalls.push(new r1(e, r, n))
            }, globalThis.define.amd = !0, this._isRenderer ? this._amdPolicy = globalThis._VSCODE_WEB_PACKAGE_TTP ?? window.trustedTypes?.createPolicy("amdLoader", {
                createScriptURL(e) {
                    if (e.startsWith(window.location.origin) || e.startsWith(`${z.vscodeFileResource}://${Jr}`)) return e;
                    throw new Error(`[trusted_script_src] Invalid script url: ${e}`)
                }
            }) : this._isWebWorker && (this._amdPolicy = globalThis._VSCODE_WEB_PACKAGE_TTP ?? globalThis.trustedTypes?.createPolicy("amdLoader", {
                createScriptURL(e) {
                    return e
                }
            }))
        }
        async load(e) {
            if (this._initialize(), this._state === 3) return new Promise(a => {
                const l = e1();
                globalThis.define(l, [e], function(u) {
                    a(u)
                })
            });
            const r = await (this._isWebWorker ? this._workerLoadScript(e) : this._isRenderer ? this._rendererLoadScript(e) : this._nodeJSLoadScript(e));
            if (!r) {
                console.warn(`Did not receive a define call from script ${e}`);
                return
            }
            const n = {},
                i = [],
                o = [];
            if (Array.isArray(r.dependencies))
                for (const a of r.dependencies) a === "exports" ? i.push(n) : o.push(a);
            if (o.length > 0) throw new Error(`Cannot resolve dependencies for script ${e}. The dependencies are: ${o.join(", ")}`);
            return typeof r.callback == "function" ? r.callback(...i) ?? n : r.callback
        }
        _rendererLoadScript(e) {
            return new Promise((r, n) => {
                const i = document.createElement("script");
                i.setAttribute("async", "async"), i.setAttribute("type", "text/javascript");
                const o = () => {
                        i.removeEventListener("load", a), i.removeEventListener("error", l)
                    },
                    a = u => {
                        o(), r(this._defineCalls.pop())
                    },
                    l = u => {
                        o(), n(u)
                    };
                i.addEventListener("load", a), i.addEventListener("error", l), this._amdPolicy && (e = this._amdPolicy.createScriptURL(e)), i.setAttribute("src", e), window.document.getElementsByTagName("head")[0].appendChild(i)
            })
        }
        async _workerLoadScript(e) {
            return this._amdPolicy && (e = this._amdPolicy.createScriptURL(e)), await import(e), this._defineCalls.pop()
        }
        async _nodeJSLoadScript(e) {
            try {
                const r = (await import("fs")).default,
                    n = (await import("vm")).default,
                    i = (await import("module")).default,
                    o = Y.parse(e).fsPath,
                    a = r.readFileSync(o).toString(),
                    l = i.wrap(a.replace(/^#!.*/, ""));
                return new n.Script(l).runInThisContext().apply(), this._defineCalls.pop()
            } catch (r) {
                throw r
            }
        }
    };
jt.INSTANCE = new jt;
var n1 = jt,
    qt = new Map;
async function Vt(t, e, r) {
    r === void 0 && (r = !!(globalThis._VSCODE_PRODUCT_JSON ?? globalThis.vscode?.context?.configuration()?.product)?.commit);
    const n = e ? `${t}/${e}` : t;
    if (qt.has(n)) return qt.get(n);
    let i;
    if (/^\w[\w\d+.-]*:\/\//.test(n)) i = n;
    else {
        const u = `${t1&&r&&!yr?Pi:Di}/${n}`;
        i = zi.asBrowserUri(u).toString(!0)
    }
    const o = n1.INSTANCE.load(i);
    return qt.set(n, o), o
}
var ea = Symbol("MicrotaskDelay"),
    s1 = class {
        constructor(t, e) {
            this.timeoutToken = -1, this.runner = t, this.timeout = e, this.timeoutHandler = this.onTimeout.bind(this)
        }
        dispose() {
            this.cancel(), this.runner = null
        }
        cancel() {
            this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1)
        }
        schedule(t = this.timeout) {
            this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, t)
        }
        get delay() {
            return this.timeout
        }
        set delay(t) {
            this.timeout = t
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
    i1, Wt;
(function() {
    typeof globalThis.requestIdleCallback != "function" || typeof globalThis.cancelIdleCallback != "function" ? Wt = (t, e, r) => {
        Cr(() => {
            if (n) return;
            const i = Date.now() + 15;
            e(Object.freeze({
                didTimeout: !0,
                timeRemaining() {
                    return Math.max(0, i - Date.now())
                }
            }))
        });
        let n = !1;
        return {
            dispose() {
                n || (n = !0)
            }
        }
    } : Wt = (t, e, r) => {
        const n = t.requestIdleCallback(e, typeof r == "number" ? {
            timeout: r
        } : void 0);
        let i = !1;
        return {
            dispose() {
                i || (i = !0, t.cancelIdleCallback(n))
            }
        }
    }, i1 = (t, e) => Wt(globalThis, t, e)
})();
var dn;
(t => {
    async function e(n) {
        let i;
        const o = await Promise.all(n.map(a => a.then(l => l, l => {
            i || (i = l)
        })));
        if (typeof i < "u") throw i;
        return o
    }
    t.settled = e;

    function r(n) {
        return new Promise(async (i, o) => {
            try {
                await n(i, o)
            } catch (a) {
                o(a)
            }
        })
    }
    t.withAsyncBody = r
})(dn || (dn = {}));
var hn = class te {
    static fromArray(e) {
        return new te(r => {
            r.emitMany(e)
        })
    }
    static fromPromise(e) {
        return new te(async r => {
            r.emitMany(await e)
        })
    }
    static fromPromisesResolveOrder(e) {
        return new te(async r => {
            await Promise.all(e.map(async n => r.emitOne(await n)))
        })
    }
    static merge(e) {
        return new te(async r => {
            await Promise.all(e.map(async n => {
                for await (const i of n) r.emitOne(i)
            }))
        })
    }
    constructor(e, r) {
        this._state = 0, this._results = [], this._error = null, this._onReturn = r, this._onStateChanged = new X, queueMicrotask(async () => {
            const n = {
                emitOne: i => this.emitOne(i),
                emitMany: i => this.emitMany(i),
                reject: i => this.reject(i)
            };
            try {
                await Promise.resolve(e(n)), this.resolve()
            } catch (i) {
                this.reject(i)
            } finally {
                n.emitOne = void 0, n.emitMany = void 0, n.reject = void 0
            }
        })
    } [Symbol.asyncIterator]() {
        let e = 0;
        return {
            next: async () => {
                do {
                    if (this._state === 2) throw this._error;
                    if (e < this._results.length) return {
                        done: !1,
                        value: this._results[e++]
                    };
                    if (this._state === 1) return {
                        done: !0,
                        value: void 0
                    };
                    await ct.toPromise(this._onStateChanged.event)
                } while (!0)
            },
            return: async () => (this._onReturn?.(), {
                done: !0,
                value: void 0
            })
        }
    }
    static map(e, r) {
        return new te(async n => {
            for await (const i of e) n.emitOne(r(i))
        })
    }
    map(e) {
        return te.map(this, e)
    }
    static filter(e, r) {
        return new te(async n => {
            for await (const i of e) r(i) && n.emitOne(i)
        })
    }
    filter(e) {
        return te.filter(this, e)
    }
    static coalesce(e) {
        return te.filter(e, r => !!r)
    }
    coalesce() {
        return te.coalesce(this)
    }
    static async toPromise(e) {
        const r = [];
        for await (const n of e) r.push(n);
        return r
    }
    toPromise() {
        return te.toPromise(this)
    }
    emitOne(e) {
        this._state === 0 && (this._results.push(e), this._onStateChanged.fire())
    }
    emitMany(e) {
        this._state === 0 && (this._results = this._results.concat(e), this._onStateChanged.fire())
    }
    resolve() {
        this._state === 0 && (this._state = 1, this._onStateChanged.fire())
    }
    reject(e) {
        this._state === 0 && (this._state = 2, this._error = e, this._onStateChanged.fire())
    }
};
hn.EMPTY = hn.fromArray([]);
var qe = class {
        constructor(t, e, r) {
            this.owner = t, this.debugNameSource = e, this.referenceFn = r
        }
        getDebugName(t) {
            return o1(t, this)
        }
    },
    fn = new Map,
    Gt = new WeakMap;

function o1(t, e) {
    const r = Gt.get(t);
    if (r) return r;
    const n = a1(t, e);
    if (n) {
        let i = fn.get(n) ?? 0;
        i++, fn.set(n, i);
        const o = i === 1 ? n : `${n}#${i}`;
        return Gt.set(t, o), o
    }
}

function a1(t, e) {
    const r = Gt.get(t);
    if (r) return r;
    const n = e.owner ? u1(e.owner) + "." : "";
    let i;
    const o = e.debugNameSource;
    if (o !== void 0)
        if (typeof o == "function") {
            if (i = o(), i !== void 0) return n + i
        } else return n + o;
    const a = e.referenceFn;
    if (a !== void 0 && (i = Ht(a), i !== void 0)) return n + i;
    if (e.owner !== void 0) {
        const l = l1(e.owner, t);
        if (l !== void 0) return n + l
    }
}

function l1(t, e) {
    for (const r in t)
        if (t[r] === e) return r
}
var mn = new Map,
    gn = new WeakMap;

function u1(t) {
    const e = gn.get(t);
    if (e) return e;
    const r = pn(t) ?? "Object";
    let n = mn.get(r) ?? 0;
    n++, mn.set(r, n);
    const i = n === 1 ? r : `${r}#${n}`;
    return gn.set(t, i), i
}

function pn(t) {
    const e = t.constructor;
    if (e) return e.name === "Object" ? void 0 : e.name
}

function Ht(t) {
    const e = t.toString(),
        n = /\/\*\*\s*@description\s*([^*]*)\*\//.exec(e);
    return (n ? n[1] : void 0)?.trim()
}
var Kt = (t, e) => t === e,
    ye;

function Qt(t) {
    ye ? ye instanceof bn ? ye.loggers.push(t) : ye = new bn([ye, t]) : ye = t
}

function F() {
    return ye
}
var Jt = void 0;

function c1(t) {
    Jt = t
}

function d1(t) {
    Jt && Jt(t)
}
var bn = class {
        constructor(t) {
            this.loggers = t
        }
        handleObservableCreated(t) {
            for (const e of this.loggers) e.handleObservableCreated(t)
        }
        handleOnListenerCountChanged(t, e) {
            for (const r of this.loggers) r.handleOnListenerCountChanged(t, e)
        }
        handleObservableUpdated(t, e) {
            for (const r of this.loggers) r.handleObservableUpdated(t, e)
        }
        handleAutorunCreated(t) {
            for (const e of this.loggers) e.handleAutorunCreated(t)
        }
        handleAutorunDisposed(t) {
            for (const e of this.loggers) e.handleAutorunDisposed(t)
        }
        handleAutorunDependencyChanged(t, e, r) {
            for (const n of this.loggers) n.handleAutorunDependencyChanged(t, e, r)
        }
        handleAutorunStarted(t) {
            for (const e of this.loggers) e.handleAutorunStarted(t)
        }
        handleAutorunFinished(t) {
            for (const e of this.loggers) e.handleAutorunFinished(t)
        }
        handleDerivedDependencyChanged(t, e, r) {
            for (const n of this.loggers) n.handleDerivedDependencyChanged(t, e, r)
        }
        handleDerivedCleared(t) {
            for (const e of this.loggers) e.handleDerivedCleared(t)
        }
        handleBeginTransaction(t) {
            for (const e of this.loggers) e.handleBeginTransaction(t)
        }
        handleEndTransaction(t) {
            for (const e of this.loggers) e.handleEndTransaction(t)
        }
    },
    _n;

function h1(t) {
    _n = t
}
var vn;

function f1(t) {
    vn = t
}
var Zt;

function m1(t) {
    Zt = t
}
var g1 = class {
        get TChange() {
            return null
        }
        reportChanges() {
            this.get()
        }
        read(t) {
            return t ? t.readObservable(this) : this.get()
        }
        map(t, e) {
            const r = e === void 0 ? void 0 : t,
                n = e === void 0 ? t : e;
            return Zt({
                owner: r,
                debugName: () => {
                    const i = Ht(n);
                    if (i !== void 0) return i;
                    const a = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(n.toString());
                    if (a) return `${this.debugName}.${a[2]}`;
                    if (!r) return `${this.debugName} (mapped)`
                },
                debugReferenceFn: n
            }, i => n(this.read(i), i))
        }
        flatten() {
            return Zt({
                owner: void 0,
                debugName: () => `${this.debugName} (flattened)`
            }, t => this.read(t).read(t))
        }
        recomputeInitiallyAndOnChange(t, e) {
            return t.add(_n(this, e)), this
        }
        keepObserved(t) {
            return t.add(vn(this)), this
        }
        get debugValue() {
            return this.get()
        }
    },
    Yt = class extends g1 {
        constructor() {
            super(), this._observers = new Set, F()?.handleObservableCreated(this)
        }
        addObserver(t) {
            const e = this._observers.size;
            this._observers.add(t), e === 0 && this.onFirstObserverAdded(), e !== this._observers.size && F()?.handleOnListenerCountChanged(this, this._observers.size)
        }
        removeObserver(t) {
            const e = this._observers.delete(t);
            e && this._observers.size === 0 && this.onLastObserverRemoved(), e && F()?.handleOnListenerCountChanged(this, this._observers.size)
        }
        onFirstObserverAdded() {}
        onLastObserverRemoved() {}
        log() {
            const t = !!F();
            return d1(this), t || F()?.handleObservableCreated(this), this
        }
        debugGetObservers() {
            return this._observers
        }
    };

function yn(t, e) {
    const r = new wn(t, e);
    try {
        t(r)
    } finally {
        r.finish()
    }
}

function p1(t, e, r) {
    t ? e(t) : yn(e, r)
}
var wn = class {
    constructor(t, e) {
        this._fn = t, this._getDebugName = e, this._updatingObservers = [], F()?.handleBeginTransaction(this)
    }
    getDebugName() {
        return this._getDebugName ? this._getDebugName() : Ht(this._fn)
    }
    updateObserver(t, e) {
        if (!this._updatingObservers) {
            Cn("Transaction already finished!"), yn(r => {
                r.updateObserver(t, e)
            });
            return
        }
        this._updatingObservers.push({
            observer: t,
            observable: e
        }), t.beginUpdate(e)
    }
    finish() {
        const t = this._updatingObservers;
        if (!t) {
            Cn("transaction.finish() has already been called!");
            return
        }
        for (let e = 0; e < t.length; e++) {
            const {
                observer: r,
                observable: n
            } = t[e];
            r.endUpdate(n)
        }
        this._updatingObservers = null, F()?.handleEndTransaction(this)
    }
    debugGetUpdatingObservers() {
        return this._updatingObservers
    }
};

function Cn(t) {
    const e = new Error("BugIndicatingErrorRecovery: " + t);
    ce(e), console.error("recovered from an error that indicates a bug", e)
}

function b1(t, e) {
    let r;
    return typeof t == "string" ? r = new qe(void 0, t, void 0) : r = new qe(t, void 0, void 0), new Xt(r, e, Kt)
}
var Xt = class extends Yt {
    constructor(t, e, r) {
        super(), this._debugNameData = t, this._equalityComparator = r, this._value = e, F()?.handleObservableUpdated(this, {
            hadValue: !1,
            newValue: e,
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
    set(t, e, r) {
        if (r === void 0 && this._equalityComparator(this._value, t)) return;
        let n;
        e || (e = n = new wn(() => {}, () => `Setting ${this.debugName}`));
        try {
            const i = this._value;
            this._setValue(t), F()?.handleObservableUpdated(this, {
                oldValue: i,
                newValue: t,
                change: r,
                didChange: !0,
                hadValue: !0
            });
            for (const o of this._observers) e.updateObserver(o, this), o.handleChange(this, r)
        } finally {
            n && n.finish()
        }
    }
    toString() {
        return `${this.debugName}: ${this._value}`
    }
    _setValue(t) {
        this._value = t
    }
    debugGetState() {
        return {
            value: this._value
        }
    }
    debugSetValue(t) {
        this._value = t
    }
};

function kn(t) {
    return new er(new qe(void 0, void 0, t), t, void 0, void 0)
}
var er = class {
    constructor(t, e, r, n) {
        this._debugNameData = t, this._runFn = e, this.createChangeSummary = r, this._handleChange = n, this._state = 2, this._updateCount = 0, this._disposed = !1, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._isRunning = !1, this._changeSummary = this.createChangeSummary?.(), F()?.handleAutorunCreated(this), this._run(), lt(this)
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)"
    }
    dispose() {
        if (!this._disposed) {
            this._disposed = !0;
            for (const t of this._dependencies) t.removeObserver(this);
            this._dependencies.clear(), F()?.handleAutorunDisposed(this), ut(this)
        }
    }
    _run() {
        const t = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = t, this._state = 3;
        try {
            if (!this._disposed) {
                F()?.handleAutorunStarted(this);
                const e = this._changeSummary;
                try {
                    this._changeSummary = this.createChangeSummary?.(), this._isRunning = !0, this._runFn(this, e)
                } catch (r) {
                    ot(r)
                } finally {
                    this._isRunning = !1
                }
            }
        } finally {
            this._disposed || F()?.handleAutorunFinished(this);
            for (const e of this._dependenciesToBeRemoved) e.removeObserver(this);
            this._dependenciesToBeRemoved.clear()
        }
    }
    toString() {
        return `Autorun<${this.debugName}>`
    }
    beginUpdate(t) {
        this._state === 3 && (this._state = 1), this._updateCount++
    }
    endUpdate(t) {
        try {
            if (this._updateCount === 1)
                do {
                    if (this._state === 1) {
                        this._state = 3;
                        for (const e of this._dependencies)
                            if (e.reportChanges(), this._state === 2) break
                    }
                    this._state !== 3 && this._run()
                } while (this._state !== 3)
        } finally {
            this._updateCount--
        }
        zr(() => this._updateCount >= 0)
    }
    handlePossibleChange(t) {
        this._state === 3 && this._isDependency(t) && (this._state = 1)
    }
    handleChange(t, e) {
        if (this._isDependency(t)) {
            F()?.handleAutorunDependencyChanged(this, t, e);
            try {
                (this._handleChange ? this._handleChange({
                    changedObservable: t,
                    change: e,
                    didChange: n => n === t
                }, this._changeSummary) : !0) && (this._state = 2)
            } catch (r) {
                ot(r)
            }
        }
    }
    _isDependency(t) {
        return this._dependencies.has(t) && !this._dependenciesToBeRemoved.has(t)
    }
    readObservable(t) {
        if (!this._isRunning) throw new Z("The reader object cannot be used outside its compute function!");
        if (this._disposed) return t.get();
        t.addObserver(this);
        const e = t.get();
        return this._dependencies.add(t), this._dependenciesToBeRemoved.delete(t), e
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
(t => {
    t.Observer = er
})(kn || (kn = {}));

function _1(t, e) {
    return new he(new qe(t.owner, t.debugName, t.debugReferenceFn), e, void 0, void 0, t.onLastObserverRemoved, t.equalsFn ?? Kt)
}
m1(_1);
var he = class extends Yt {
    constructor(t, e, r, n, i = void 0, o) {
        super(), this._debugNameData = t, this._computeFn = e, this.createChangeSummary = r, this._handleChange = n, this._handleLastObserverRemoved = i, this._equalityComparator = o, this._state = 0, this._value = void 0, this._updateCount = 0, this._dependencies = new Set, this._dependenciesToBeRemoved = new Set, this._changeSummary = void 0, this._isUpdating = !1, this._isComputing = !1, this._removedObserverToCallEndUpdateOn = null, this._isReaderValid = !1, this._changeSummary = this.createChangeSummary?.()
    }
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? "(anonymous)"
    }
    onLastObserverRemoved() {
        this._state = 0, this._value = void 0, F()?.handleDerivedCleared(this);
        for (const t of this._dependencies) t.removeObserver(this);
        this._dependencies.clear(), this._handleLastObserverRemoved?.()
    }
    get() {
        if (this._isComputing, this._observers.size === 0) {
            let e;
            try {
                this._isReaderValid = !0, e = this._computeFn(this, this.createChangeSummary?.())
            } finally {
                this._isReaderValid = !1
            }
            return this.onLastObserverRemoved(), e
        } else {
            do {
                if (this._state === 1) {
                    for (const e of this._dependencies)
                        if (e.reportChanges(), this._state === 2) break
                }
                this._state === 1 && (this._state = 3), this._state !== 3 && this._recompute()
            } while (this._state !== 3);
            return this._value
        }
    }
    _recompute() {
        const t = this._dependenciesToBeRemoved;
        this._dependenciesToBeRemoved = this._dependencies, this._dependencies = t;
        const e = this._state !== 0,
            r = this._value;
        this._state = 3;
        let n = !1;
        this._isComputing = !0;
        try {
            const i = this._changeSummary;
            this._changeSummary = this.createChangeSummary?.();
            try {
                this._isReaderValid = !0, this._value = this._computeFn(this, i)
            } finally {
                this._isReaderValid = !1;
                for (const o of this._dependenciesToBeRemoved) o.removeObserver(this);
                this._dependenciesToBeRemoved.clear()
            }
            n = e && !this._equalityComparator(r, this._value), F()?.handleObservableUpdated(this, {
                oldValue: r,
                newValue: this._value,
                change: void 0,
                didChange: n,
                hadValue: e
            })
        } catch (i) {
            ot(i)
        }
        if (this._isComputing = !1, n)
            for (const i of this._observers) i.handleChange(this, void 0)
    }
    toString() {
        return `LazyDerived<${this.debugName}>`
    }
    beginUpdate(t) {
        if (this._isUpdating) throw new Z("Cyclic deriveds are not supported yet!");
        this._updateCount++, this._isUpdating = !0;
        try {
            const e = this._updateCount === 1;
            if (this._state === 3 && (this._state = 1, !e))
                for (const r of this._observers) r.handlePossibleChange(this);
            if (e)
                for (const r of this._observers) r.beginUpdate(this)
        } finally {
            this._isUpdating = !1
        }
    }
    endUpdate(t) {
        if (this._updateCount--, this._updateCount === 0) {
            const e = [...this._observers];
            for (const r of e) r.endUpdate(this);
            if (this._removedObserverToCallEndUpdateOn) {
                const r = [...this._removedObserverToCallEndUpdateOn];
                this._removedObserverToCallEndUpdateOn = null;
                for (const n of r) n.endUpdate(this)
            }
        }
        zr(() => this._updateCount >= 0)
    }
    handlePossibleChange(t) {
        if (this._state === 3 && this._dependencies.has(t) && !this._dependenciesToBeRemoved.has(t)) {
            this._state = 1;
            for (const e of this._observers) e.handlePossibleChange(this)
        }
    }
    handleChange(t, e) {
        if (this._dependencies.has(t) && !this._dependenciesToBeRemoved.has(t)) {
            F()?.handleDerivedDependencyChanged(this, t, e);
            let r = !1;
            try {
                r = this._handleChange ? this._handleChange({
                    changedObservable: t,
                    change: e,
                    didChange: i => i === t
                }, this._changeSummary) : !0
            } catch (i) {
                ot(i)
            }
            const n = this._state === 3;
            if (r && (this._state === 1 || n) && (this._state = 2, n))
                for (const i of this._observers) i.handlePossibleChange(this)
        }
    }
    readObservable(t) {
        if (!this._isReaderValid) throw new Z("The reader object cannot be used outside its compute function!");
        t.addObserver(this);
        const e = t.get();
        return this._dependencies.add(t), this._dependenciesToBeRemoved.delete(t), e
    }
    addObserver(t) {
        const e = !this._observers.has(t) && this._updateCount > 0;
        super.addObserver(t), e && (this._removedObserverToCallEndUpdateOn && this._removedObserverToCallEndUpdateOn.has(t) ? this._removedObserverToCallEndUpdateOn.delete(t) : t.beginUpdate(this))
    }
    removeObserver(t) {
        this._observers.has(t) && this._updateCount > 0 && (this._removedObserverToCallEndUpdateOn || (this._removedObserverToCallEndUpdateOn = new Set), this._removedObserverToCallEndUpdateOn.add(t)), super.removeObserver(t)
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
    debugSetValue(t) {
        this._value = t
    }
};

function Ln(...t) {
    let e, r, n;
    return t.length === 3 ? [e, r, n] = t : [r, n] = t, new we(new qe(e, void 0, n), r, n, () => we.globalTransaction, Kt)
}
var we = class extends Yt {
    constructor(t, e, r, n, i) {
        super(), this._debugNameData = t, this.event = e, this._getValue = r, this._getTransaction = n, this._equalityComparator = i, this._hasValue = !1, this.handleEvent = o => {
            const a = this._getValue(o),
                l = this._value,
                u = !this._hasValue || !this._equalityComparator(l, a);
            let c = !1;
            u && (this._value = a, this._hasValue && (c = !0, p1(this._getTransaction(), h => {
                F()?.handleObservableUpdated(this, {
                    oldValue: l,
                    newValue: a,
                    change: void 0,
                    didChange: u,
                    hadValue: this._hasValue
                });
                for (const d of this._observers) h.updateObserver(d, this), d.handleChange(this, void 0)
            }, () => {
                const h = this.getDebugName();
                return "Event fired" + (h ? `: ${h}` : "")
            })), this._hasValue = !0), c || F()?.handleObservableUpdated(this, {
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
        const t = this.getDebugName();
        return "From Event" + (t ? `: ${t}` : "")
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
    debugSetValue(t) {
        this._value = t
    }
};
(t => {
    t.Observer = we;

    function e(r, n) {
        let i = !1;
        we.globalTransaction === void 0 && (we.globalTransaction = r, i = !0);
        try {
            n()
        } finally {
            i && (we.globalTransaction = void 0)
        }
    }
    t.batchEventsGlobally = e
})(Ln || (Ln = {}));

function Sn(t) {
    const e = new En(!1, void 0);
    return t.addObserver(e), Ie(() => {
        t.removeObserver(e)
    })
}
f1(Sn);

function v1(t, e) {
    const r = new En(!0, e);
    t.addObserver(r);
    try {
        r.beginUpdate(t)
    } finally {
        r.endUpdate(t)
    }
    return Ie(() => {
        t.removeObserver(r)
    })
}
h1(v1);
var En = class {
        constructor(t, e) {
            this._forceRecompute = t, this._handleValue = e, this._counter = 0
        }
        beginUpdate(t) {
            this._counter++
        }
        endUpdate(t) {
            this._counter === 1 && this._forceRecompute && (this._handleValue ? this._handleValue(t.get()) : t.reportChanges()), this._counter--
        }
        handlePossibleChange(t) {}
        handleChange(t, e) {}
    },
    pt;

function y1(t) {
    pt || (pt = new Nn, Qt(pt)), pt.addFilteredObj(t)
}
var Nn = class {
    constructor() {
        this.indentation = 0, this.changedObservablesSets = new WeakMap
    }
    addFilteredObj(t) {
        this._filteredObjects || (this._filteredObjects = new Set), this._filteredObjects.add(t)
    }
    _isIncluded(t) {
        return this._filteredObjects?.has(t) ?? !0
    }
    textToConsoleArgs(t) {
        return w1([Pe(L1("|  ", this.indentation)), t])
    }
    formatInfo(t) {
        return t.hadValue ? t.didChange ? [Pe(" "), ee(fe(t.oldValue, 70), {
            color: "red",
            strikeThrough: !0
        }), Pe(" "), ee(fe(t.newValue, 60), {
            color: "green"
        })] : [Pe(" (unchanged)")] : [Pe(" "), ee(fe(t.newValue, 60), {
            color: "green"
        }), Pe(" (initial)")]
    }
    handleObservableCreated(t) {
        if (t instanceof he) {
            const e = t;
            if (this.changedObservablesSets.set(e, new Set), !1) {
                const n = [];
                e.__debugUpdating = n;
                const i = e.beginUpdate;
                e.beginUpdate = a => (n.push(a), i.apply(e, [a]));
                const o = e.endUpdate;
                e.endUpdate = a => {
                    const l = n.indexOf(a);
                    return l === -1 && console.error("endUpdate called without beginUpdate", e.debugName, a.debugName), n.splice(l, 1), o.apply(e, [a])
                }
            }
        }
    }
    handleOnListenerCountChanged(t, e) {}
    handleObservableUpdated(t, e) {
        if (this._isIncluded(t)) {
            if (t instanceof he) {
                this._handleDerivedRecomputed(t, e);
                return
            }
            console.log(...this.textToConsoleArgs([Me("observable value changed"), ee(t.debugName, {
                color: "BlueViolet"
            }), ...this.formatInfo(e)]))
        }
    }
    formatChanges(t) {
        if (t.size !== 0) return ee(" (changed deps: " + [...t].map(e => e.debugName).join(", ") + ")", {
            color: "gray"
        })
    }
    handleDerivedDependencyChanged(t, e, r) {
        this._isIncluded(t) && this.changedObservablesSets.get(t)?.add(e)
    }
    _handleDerivedRecomputed(t, e) {
        if (!this._isIncluded(t)) return;
        const r = this.changedObservablesSets.get(t);
        r && (console.log(...this.textToConsoleArgs([Me("derived recomputed"), ee(t.debugName, {
            color: "BlueViolet"
        }), ...this.formatInfo(e), this.formatChanges(r), {
            data: [{
                fn: t._debugNameData.referenceFn ?? t._computeFn
            }]
        }])), r.clear())
    }
    handleDerivedCleared(t) {
        this._isIncluded(t) && console.log(...this.textToConsoleArgs([Me("derived cleared"), ee(t.debugName, {
            color: "BlueViolet"
        })]))
    }
    handleFromEventObservableTriggered(t, e) {
        this._isIncluded(t) && console.log(...this.textToConsoleArgs([Me("observable from event triggered"), ee(t.debugName, {
            color: "BlueViolet"
        }), ...this.formatInfo(e), {
            data: [{
                fn: t._getValue
            }]
        }]))
    }
    handleAutorunCreated(t) {
        this._isIncluded(t) && this.changedObservablesSets.set(t, new Set)
    }
    handleAutorunDisposed(t) {}
    handleAutorunDependencyChanged(t, e, r) {
        this._isIncluded(t) && this.changedObservablesSets.get(t).add(e)
    }
    handleAutorunStarted(t) {
        const e = this.changedObservablesSets.get(t);
        e && (this._isIncluded(t) && console.log(...this.textToConsoleArgs([Me("autorun"), ee(t.debugName, {
            color: "BlueViolet"
        }), this.formatChanges(e), {
            data: [{
                fn: t._debugNameData.referenceFn ?? t._runFn
            }]
        }])), e.clear(), this.indentation++)
    }
    handleAutorunFinished(t) {
        this.indentation--
    }
    handleBeginTransaction(t) {
        let e = t.getDebugName();
        e === void 0 && (e = ""), this._isIncluded(t) && console.log(...this.textToConsoleArgs([Me("transaction"), ee(e, {
            color: "BlueViolet"
        }), {
            data: [{
                fn: t._fn
            }]
        }])), this.indentation++
    }
    handleEndTransaction() {
        this.indentation--
    }
};

function w1(t) {
    const e = new Array,
        r = [];
    let n = "";

    function i(a) {
        if ("length" in a)
            for (const l of a) l && i(l);
        else "text" in a ? (n += `%c${a.text}`, e.push(a.style), a.data && r.push(...a.data)) : "data" in a && r.push(...a.data)
    }
    i(t);
    const o = [n, ...e];
    return o.push(...r), o
}

function Pe(t) {
    return ee(t, {
        color: "black"
    })
}

function Me(t) {
    return ee(S1(`${t}: `, 10), {
        color: "black",
        bold: !0
    })
}

function ee(t, e = {
    color: "black"
}) {
    function r(i) {
        return Object.entries(i).reduce((o, [a, l]) => `${o}${a}:${l};`, "")
    }
    const n = {
        color: e.color
    };
    return e.strikeThrough && (n["text-decoration"] = "line-through"), e.bold && (n["font-weight"] = "bold"), {
        text: t,
        style: r(n)
    }
}

function fe(t, e) {
    switch (typeof t) {
        case "number":
            return "" + t;
        case "string":
            return t.length + 2 <= e ? `"${t}"` : `"${t.substr(0,e-7)}"+...`;
        case "boolean":
            return t ? "true" : "false";
        case "undefined":
            return "undefined";
        case "object":
            return t === null ? "null" : Array.isArray(t) ? C1(t, e) : k1(t, e);
        case "symbol":
            return t.toString();
        case "function":
            return `[[Function${t.name?" "+t.name:""}]]`;
        default:
            return "" + t
    }
}

function C1(t, e) {
    let r = "[ ",
        n = !0;
    for (const i of t) {
        if (n || (r += ", "), r.length - 5 > e) {
            r += "...";
            break
        }
        n = !1, r += `${fe(i,e-r.length)}`
    }
    return r += " ]", r
}

function k1(t, e) {
    if (typeof t.toString == "function" && t.toString !== Object.prototype.toString) {
        const o = t.toString();
        return o.length <= e ? o : o.substring(0, e - 3) + "..."
    }
    const r = pn(t);
    let n = r ? r + "(" : "{ ",
        i = !0;
    for (const [o, a] of Object.entries(t)) {
        if (i || (n += ", "), n.length - 5 > e) {
            n += "...";
            break
        }
        i = !1, n += `${o}: ${fe(a,e-n.length)}`
    }
    return n += r ? ")" : " }", n
}

function L1(t, e) {
    let r = "";
    for (let n = 1; n <= e; n++) r += t;
    return r
}

function S1(t, e) {
    for (; t.length < e;) t += " ";
    return t
}
var E1 = class dr {
    constructor(e, r) {
        this._channelFactory = e, this._getHandler = r, this._channel = this._channelFactory({
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
            i = new Proxy({}, {
                get: (o, a) => (...l) => {
                    this._channel.sendNotification([a, l])
                }
            });
        this.api = {
            notifications: i,
            requests: n
        }
    }
    static createHost(e, r) {
        return new dr(e, r)
    }
    static createClient(e, r) {
        return new dr(e, r)
    }
};

function N1(t, e) {
    const r = globalThis;
    let n = [],
        i;
    const {
        channel: o,
        handler: a
    } = x1({
        sendNotification: u => {
            i ? i.sendNotification(u) : n.push(u)
        }
    });
    let l;
    return (r.$$debugValueEditor_debugChannels ?? (r.$$debugValueEditor_debugChannels = {}))[t] = u => {
        l = e(), i = u;
        for (const c of n) u.sendNotification(c);
        return n = [], a
    }, E1.createClient(o, () => {
        if (!l) throw new Error("Not supported");
        return l
    })
}

function x1(t) {
    let e;
    return {
        channel: n => (e = n, {
            sendNotification: i => {
                t.sendNotification(i)
            },
            sendRequest: i => {
                throw new Error("not supported")
            }
        }),
        handler: {
            handleRequest: n => n.type === "notification" ? e?.handleNotification(n.data) : e?.handleRequest(n.data)
        }
    }
}

function xn(t, e) {
    const r = t.split(`
`);
    let n = -1;
    for (const i of r.slice(1)) {
        if (n++, e && e.test(i)) continue;
        const o = T1(i);
        if (o) return o
    }
}

function T1(t) {
    const e = t.match(/\((.*):(\d+):(\d+)\)/);
    if (e) return {
        fileName: e[1],
        line: parseInt(e[2]),
        column: parseInt(e[3]),
        id: t
    };
    const r = t.match(/at ([^\(\)]*):(\d+):(\d+)/);
    if (r) return {
        fileName: r[1],
        line: parseInt(r[2]),
        column: parseInt(r[3]),
        id: t
    }
}
var A1 = class {
    constructor() {
        this._timeout = void 0
    }
    throttle(t, e) {
        this._timeout === void 0 && (this._timeout = setTimeout(() => {
            this._timeout = void 0, t()
        }, e))
    }
    dispose() {
        this._timeout !== void 0 && clearTimeout(this._timeout)
    }
};

function Tn(t, e) {
    for (const r in e) t[r] && typeof t[r] == "object" && e[r] && typeof e[r] == "object" ? Tn(t[r], e[r]) : t[r] = e[r]
}

function An(t, e) {
    for (const r in e) e[r] === null ? delete t[r] : t[r] && typeof t[r] == "object" && e[r] && typeof e[r] == "object" ? An(t[r], e[r]) : t[r] = e[r]
}
var On = class Ke {
    constructor() {
        this._declarationId = 0, this._instanceId = 0, this._declarations = new Map, this._instanceInfos = new WeakMap, this._aliveInstances = new Map, this._activeTransactions = new Set, this._channel = N1("observableDevTools", () => ({
            notifications: {
                setDeclarationIdFilter: e => {},
                logObservableValue: e => {
                    console.log("logObservableValue", e)
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
                    const e = {};
                    for (const r of this._declarations.values()) e[r.id] = r;
                    return {
                        decls: e
                    }
                },
                getSummarizedInstances: () => null,
                getObservableValueInfo: e => ({
                    observers: [...this._aliveInstances.get(e).debugGetObservers()].map(n => this._formatObserver(n)).filter(je)
                }),
                getDerivedInfo: e => {
                    const r = this._aliveInstances.get(e);
                    return {
                        dependencies: [...r.debugGetState().dependencies].map(n => this._formatObservable(n)).filter(je),
                        observers: [...r.debugGetObservers()].map(n => this._formatObserver(n)).filter(je)
                    }
                },
                getAutorunInfo: e => ({
                    dependencies: [...this._aliveInstances.get(e).debugGetState().dependencies].map(n => this._formatObservable(n)).filter(je)
                }),
                getTransactionState: () => this.getTransactionState(),
                setValue: (e, r) => {
                    const n = this._aliveInstances.get(e);
                    if (n instanceof he) n.debugSetValue(r);
                    else if (n instanceof Xt) n.debugSetValue(r);
                    else if (n instanceof we) n.debugSetValue(r);
                    else throw new Z("Observable is not supported");
                    const i = [...n.debugGetObservers()];
                    for (const o of i) o.beginUpdate(n);
                    for (const o of i) o.handleChange(n, void 0);
                    for (const o of i) o.endUpdate(n)
                },
                getValue: e => {
                    const r = this._aliveInstances.get(e);
                    if (r instanceof he) return fe(r.debugGetState().value, 200);
                    if (r instanceof Xt) return fe(r.debugGetState().value, 200)
                }
            }
        })), this._pendingChanges = null, this._changeThrottler = new A1, this._fullState = {}, this._flushUpdates = () => {
            this._pendingChanges !== null && (this._channel.api.notifications.handleChange(this._pendingChanges, !1), this._pendingChanges = null)
        }
    }
    static getInstance() {
        return Ke._instance === void 0 && (Ke._instance = new Ke), Ke._instance
    }
    getTransactionState() {
        const e = [],
            r = [...this._activeTransactions];
        if (r.length === 0) return;
        const n = r.flatMap(o => o.debugGetUpdatingObservers() ?? []).map(o => o.observer),
            i = new Set;
        for (; n.length > 0;) {
            const o = n.shift();
            if (i.has(o)) continue;
            i.add(o);
            const a = this._getInfo(o, l => {
                i.has(l) || n.push(l)
            });
            a && e.push(a)
        }
        return {
            names: r.map(o => o.getDebugName() ?? "tx"),
            affected: e
        }
    }
    _getObservableInfo(e) {
        const r = this._instanceInfos.get(e);
        if (!r) {
            ce(new Z("No info found"));
            return
        }
        return r
    }
    _getAutorunInfo(e) {
        const r = this._instanceInfos.get(e);
        if (!r) {
            ce(new Z("No info found"));
            return
        }
        return r
    }
    _getInfo(e, r) {
        if (e instanceof he) {
            const n = [...e.debugGetObservers()];
            for (const u of n) r(u);
            const i = this._getObservableInfo(e);
            if (!i) return;
            const o = e.debugGetState(),
                a = {
                    name: e.debugName,
                    instanceId: i.instanceId,
                    updateCount: o.updateCount
                },
                l = [...i.changedObservables].map(u => this._instanceInfos.get(u)?.instanceId).filter(je);
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
        } else if (e instanceof er) {
            const n = this._getAutorunInfo(e);
            if (!n) return;
            const i = {
                    name: e.debugName,
                    instanceId: n.instanceId,
                    updateCount: n.updateCount
                },
                o = [...n.changedObservables].map(a => this._instanceInfos.get(a).instanceId);
            if (e.debugGetState().isRunning) return {
                ...i,
                type: "autorun",
                state: "updating",
                changedDependencies: o
            };
            switch (e.debugGetState().state) {
                case 3:
                    return {
                        ...i, type: "autorun", state: "upToDate"
                    };
                case 2:
                    return {
                        ...i, type: "autorun", state: "stale", changedDependencies: o
                    };
                case 1:
                    return {
                        ...i, type: "autorun", state: "possiblyStale"
                    }
            }
        }
    }
    _formatObservable(e) {
        const r = this._getObservableInfo(e);
        if (r) return {
            name: e.debugName,
            instanceId: r.instanceId
        }
    }
    _formatObserver(e) {
        if (e instanceof he) return {
            name: e.toString(),
            instanceId: this._getObservableInfo(e)?.instanceId
        };
        const r = this._getAutorunInfo(e);
        if (r) return {
            name: e.toString(),
            instanceId: r.instanceId
        }
    }
    _handleChange(e) {
        An(this._fullState, e), this._pendingChanges === null ? this._pendingChanges = e : Tn(this._pendingChanges, e), this._changeThrottler.throttle(this._flushUpdates, 10)
    }
    _getDeclarationId(e) {
        let r = !0,
            n;
        const i = Error;
        for (;;) {
            const a = i.stackTraceLimit;
            i.stackTraceLimit = r ? 6 : 20;
            const l = new Error().stack;
            i.stackTraceLimit = a;
            let u = xn(l, /[/\\]observableInternal[/\\]|\.observe|[/\\]util(s)?\./);
            if (!r && !u && (u = xn(l, /[/\\]observableInternal[/\\]|\.observe/)), u) {
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
            type: e,
            url: n.fileName,
            line: n.line,
            column: n.column
        }, this._declarations.set(n.id, o), this._handleChange({
            decls: {
                [o.id]: o
            }
        })), o.id
    }
    handleObservableCreated(e) {
        const n = {
            declarationId: this._getDeclarationId("observable/value"),
            instanceId: this._instanceId++,
            listenerCount: 0,
            lastValue: void 0,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(e, n)
    }
    handleOnListenerCountChanged(e, r) {
        const n = this._getObservableInfo(e);
        if (n) {
            if (n.listenerCount === 0 && r > 0) {
                const i = e instanceof he ? "observable/derived" : "observable/value";
                this._aliveInstances.set(n.instanceId, e), this._handleChange({
                    instances: {
                        [n.instanceId]: {
                            instanceId: n.instanceId,
                            declarationId: n.declarationId,
                            formattedValue: n.lastValue,
                            type: i,
                            name: e.debugName
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
    handleObservableUpdated(e, r) {
        if (e instanceof he) {
            this._handleDerivedRecomputed(e, r);
            return
        }
        const n = this._getObservableInfo(e);
        n && r.didChange && (n.lastValue = fe(r.newValue, 30), n.listenerCount > 0 && this._handleChange({
            instances: {
                [n.instanceId]: {
                    formattedValue: n.lastValue
                }
            }
        }))
    }
    handleAutorunCreated(e) {
        const n = {
            declarationId: this._getDeclarationId("autorun"),
            instanceId: this._instanceId++,
            updateCount: 0,
            changedObservables: new Set
        };
        this._instanceInfos.set(e, n), this._aliveInstances.set(n.instanceId, e), n && this._handleChange({
            instances: {
                [n.instanceId]: {
                    instanceId: n.instanceId,
                    declarationId: n.declarationId,
                    runCount: 0,
                    type: "autorun",
                    name: e.debugName
                }
            }
        })
    }
    handleAutorunDisposed(e) {
        const r = this._getAutorunInfo(e);
        r && (this._handleChange({
            instances: {
                [r.instanceId]: null
            }
        }), this._instanceInfos.delete(e), this._aliveInstances.delete(r.instanceId))
    }
    handleAutorunDependencyChanged(e, r, n) {
        const i = this._getAutorunInfo(e);
        i && i.changedObservables.add(r)
    }
    handleAutorunStarted(e) {}
    handleAutorunFinished(e) {
        const r = this._getAutorunInfo(e);
        r && (r.changedObservables.clear(), r.updateCount++, this._handleChange({
            instances: {
                [r.instanceId]: {
                    runCount: r.updateCount
                }
            }
        }))
    }
    handleDerivedDependencyChanged(e, r, n) {
        const i = this._getObservableInfo(e);
        i && i.changedObservables.add(r)
    }
    _handleDerivedRecomputed(e, r) {
        const n = this._getObservableInfo(e);
        if (!n) return;
        const i = fe(r.newValue, 30);
        n.updateCount++, n.changedObservables.clear(), n.lastValue = i, n.listenerCount > 0 && this._handleChange({
            instances: {
                [n.instanceId]: {
                    formattedValue: i,
                    recomputationCount: n.updateCount
                }
            }
        })
    }
    handleDerivedCleared(e) {
        const r = this._getObservableInfo(e);
        r && (r.lastValue = void 0, r.changedObservables.clear(), r.listenerCount > 0 && this._handleChange({
            instances: {
                [r.instanceId]: {
                    formattedValue: void 0
                }
            }
        }))
    }
    handleBeginTransaction(e) {
        this._activeTransactions.add(e)
    }
    handleEndTransaction(e) {
        this._activeTransactions.delete(e)
    }
};
On._instance = void 0;
var O1 = On;
c1(y1);
var I1 = !1;
I1 && Qt(new Nn), Nt && Nt.VSCODE_DEV_DEBUG && Qt(O1.getInstance());
var G = class re {
        constructor(e, r) {
            if (this.start = e, this.endExclusive = r, e > r) throw new Z(`Invalid range: ${this.toString()}`)
        }
        static fromTo(e, r) {
            return new re(e, r)
        }
        static addRange(e, r) {
            let n = 0;
            for (; n < r.length && r[n].endExclusive < e.start;) n++;
            let i = n;
            for (; i < r.length && r[i].start <= e.endExclusive;) i++;
            if (n === i) r.splice(n, 0, e);
            else {
                const o = Math.min(e.start, r[n].start),
                    a = Math.max(e.endExclusive, r[i - 1].endExclusive);
                r.splice(n, i - n, new re(o, a))
            }
        }
        static tryCreate(e, r) {
            if (!(e > r)) return new re(e, r)
        }
        static ofLength(e) {
            return new re(0, e)
        }
        static ofStartAndLength(e, r) {
            return new re(e, e + r)
        }
        static emptyAt(e) {
            return new re(e, e)
        }
        get isEmpty() {
            return this.start === this.endExclusive
        }
        delta(e) {
            return new re(this.start + e, this.endExclusive + e)
        }
        deltaStart(e) {
            return new re(this.start + e, this.endExclusive)
        }
        deltaEnd(e) {
            return new re(this.start, this.endExclusive + e)
        }
        get length() {
            return this.endExclusive - this.start
        }
        toString() {
            return `[${this.start}, ${this.endExclusive})`
        }
        equals(e) {
            return this.start === e.start && this.endExclusive === e.endExclusive
        }
        containsRange(e) {
            return this.start <= e.start && e.endExclusive <= this.endExclusive
        }
        contains(e) {
            return this.start <= e && e < this.endExclusive
        }
        join(e) {
            return new re(Math.min(this.start, e.start), Math.max(this.endExclusive, e.endExclusive))
        }
        intersect(e) {
            const r = Math.max(this.start, e.start),
                n = Math.min(this.endExclusive, e.endExclusive);
            if (r <= n) return new re(r, n)
        }
        intersectionLength(e) {
            const r = Math.max(this.start, e.start),
                n = Math.min(this.endExclusive, e.endExclusive);
            return Math.max(0, n - r)
        }
        intersects(e) {
            const r = Math.max(this.start, e.start),
                n = Math.min(this.endExclusive, e.endExclusive);
            return r < n
        }
        intersectsOrTouches(e) {
            const r = Math.max(this.start, e.start),
                n = Math.min(this.endExclusive, e.endExclusive);
            return r <= n
        }
        isBefore(e) {
            return this.endExclusive <= e.start
        }
        isAfter(e) {
            return this.start >= e.endExclusive
        }
        slice(e) {
            return e.slice(this.start, this.endExclusive)
        }
        substring(e) {
            return e.substring(this.start, this.endExclusive)
        }
        clip(e) {
            if (this.isEmpty) throw new Z(`Invalid clipping range: ${this.toString()}`);
            return Math.max(this.start, Math.min(this.endExclusive - 1, e))
        }
        clipCyclic(e) {
            if (this.isEmpty) throw new Z(`Invalid clipping range: ${this.toString()}`);
            return e < this.start ? this.endExclusive - (this.start - e) % this.length : e >= this.endExclusive ? this.start + (e - this.start) % this.length : e
        }
        map(e) {
            const r = [];
            for (let n = this.start; n < this.endExclusive; n++) r.push(e(n));
            return r
        }
        forEach(e) {
            for (let r = this.start; r < this.endExclusive; r++) e(r)
        }
    },
    bt = class Se {
        constructor(e, r) {
            this.lineNumber = e, this.column = r
        }
        with(e = this.lineNumber, r = this.column) {
            return e === this.lineNumber && r === this.column ? this : new Se(e, r)
        }
        delta(e = 0, r = 0) {
            return this.with(Math.max(1, this.lineNumber + e), Math.max(1, this.column + r))
        }
        equals(e) {
            return Se.equals(this, e)
        }
        static equals(e, r) {
            return !e && !r ? !0 : !!e && !!r && e.lineNumber === r.lineNumber && e.column === r.column
        }
        isBefore(e) {
            return Se.isBefore(this, e)
        }
        static isBefore(e, r) {
            return e.lineNumber < r.lineNumber ? !0 : r.lineNumber < e.lineNumber ? !1 : e.column < r.column
        }
        isBeforeOrEqual(e) {
            return Se.isBeforeOrEqual(this, e)
        }
        static isBeforeOrEqual(e, r) {
            return e.lineNumber < r.lineNumber ? !0 : r.lineNumber < e.lineNumber ? !1 : e.column <= r.column
        }
        static compare(e, r) {
            const n = e.lineNumber | 0,
                i = r.lineNumber | 0;
            if (n === i) {
                const o = e.column | 0,
                    a = r.column | 0;
                return o - a
            }
            return n - i
        }
        clone() {
            return new Se(this.lineNumber, this.column)
        }
        toString() {
            return "(" + this.lineNumber + "," + this.column + ")"
        }
        static lift(e) {
            return new Se(e.lineNumber, e.column)
        }
        static isIPosition(e) {
            return e && typeof e.lineNumber == "number" && typeof e.column == "number"
        }
        toJSON() {
            return {
                lineNumber: this.lineNumber,
                column: this.column
            }
        }
    },
    In = class D {
        constructor(e, r, n, i) {
            let o, a, l, u;
            e == null || typeof e == "number" || Number.isNaN(e) ? (o = e, a = r, l = n, u = i) : "startLineNumber" in e && "startColumn" in e ? (o = e.startLineNumber, a = e.startColumn, l = e.endLineNumber, u = e.endColumn) : (o = e.startLineNumber, a = 1, l = e.endLineNumberExclusive, u = 1), o > l || o === l && a > u ? (this.startLineNumber = l, this.startColumn = u, this.endLineNumber = o, this.endColumn = a) : (this.startLineNumber = o, this.startColumn = a, this.endLineNumber = l, this.endColumn = u)
        }
        asIRange() {
            return {
                startLineNumber: this.startLineNumber,
                startColumn: this.startColumn,
                endLineNumber: this.endLineNumber,
                endColumn: this.endColumn
            }
        }
        isEmpty() {
            return D.isEmpty(this)
        }
        static isEmpty(e) {
            return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn
        }
        containsPosition(e) {
            return D.containsPosition(this, e)
        }
        static containsPosition(e, r) {
            return !(r.lineNumber < e.startLineNumber || r.lineNumber > e.endLineNumber || r.lineNumber === e.startLineNumber && r.column < e.startColumn || r.lineNumber === e.endLineNumber && r.column > e.endColumn)
        }
        static strictContainsPosition(e, r) {
            return !(r.lineNumber < e.startLineNumber || r.lineNumber > e.endLineNumber || r.lineNumber === e.startLineNumber && r.column <= e.startColumn || r.lineNumber === e.endLineNumber && r.column >= e.endColumn)
        }
        containsRange(e) {
            return D.containsRange(this, e)
        }
        static containsRange(e, r) {
            return !(r.startLineNumber < e.startLineNumber || r.endLineNumber < e.startLineNumber || r.startLineNumber > e.endLineNumber || r.endLineNumber > e.endLineNumber || r.startLineNumber === e.startLineNumber && r.startColumn < e.startColumn || r.endLineNumber === e.endLineNumber && r.endColumn > e.endColumn)
        }
        strictContainsRange(e) {
            return D.strictContainsRange(this, e)
        }
        static strictContainsRange(e, r) {
            return !(r.startLineNumber < e.startLineNumber || r.endLineNumber < e.startLineNumber || r.startLineNumber > e.endLineNumber || r.endLineNumber > e.endLineNumber || r.startLineNumber === e.startLineNumber && r.startColumn <= e.startColumn || r.endLineNumber === e.endLineNumber && r.endColumn >= e.endColumn)
        }
        plusRange(e) {
            return D.plusRange(this, e)
        }
        static getRangeAbove(e, r) {
            const n = Math.max(e.startLineNumber - r, 1),
                i = e.startLineNumber;
            return new D(n, e.startColumn, i, e.startColumn)
        }
        static getRangeOnBelow(e, r, n) {
            const i = e.endLineNumber,
                o = Math.min(e.endLineNumber + r, n);
            return new D(i, e.endColumn, o, e.endColumn)
        }
        static getExtendedRange(e, r, n) {
            const i = Math.max(e.startLineNumber - r, 0),
                o = Math.min(e.endLineNumber + r, n);
            return new D(i, e.startColumn, o, e.endColumn)
        }
        static plusRange(e, r) {
            let n, i, o, a;
            return r.startLineNumber < e.startLineNumber ? (n = r.startLineNumber, i = r.startColumn) : r.startLineNumber === e.startLineNumber ? (n = r.startLineNumber, i = Math.min(r.startColumn, e.startColumn)) : (n = e.startLineNumber, i = e.startColumn), r.endLineNumber > e.endLineNumber ? (o = r.endLineNumber, a = r.endColumn) : r.endLineNumber === e.endLineNumber ? (o = r.endLineNumber, a = Math.max(r.endColumn, e.endColumn)) : (o = e.endLineNumber, a = e.endColumn), new D(n, i, o, a)
        }
        intersectRanges(e) {
            return D.intersectRanges(this, e)
        }
        static intersectRanges(e, r) {
            let n = e.startLineNumber,
                i = e.startColumn,
                o = e.endLineNumber,
                a = e.endColumn;
            const l = r.startLineNumber,
                u = r.startColumn,
                c = r.endLineNumber,
                h = r.endColumn;
            return n < l ? (n = l, i = u) : n === l && (i = Math.max(i, u)), o > c ? (o = c, a = h) : o === c && (a = Math.min(a, h)), n > o || n === o && i > a ? null : new D(n, i, o, a)
        }
        static inverseEditRange(e, r) {
            return {
                startLineNumber: e.startLineNumber,
                startColumn: e.startColumn,
                endLineNumber: e.startLineNumber + r.split(`
`).length - 1,
                endColumn: r.lastIndexOf(`
`) === -1 ? e.startColumn + r.length : r.length - r.lastIndexOf(`
`)
            }
        }
        whereIs(e) {
            return e.endLineNumber < this.startLineNumber || e.endLineNumber === this.startLineNumber && e.endColumn <= this.startColumn ? "before" : e.startLineNumber > this.endLineNumber || e.startLineNumber === this.endLineNumber && e.startColumn >= this.endColumn ? "after" : "overlapping"
        }
        static rangeAfterEdit(e, r) {
            const n = D.lift(e).whereIs(r.range);
            switch (n) {
                case "overlapping":
                    throw new Error("Range is overlapping. The range after edit is ambiguous.");
                case "after":
                    return e;
                case "before": {
                    const i = r.text.split(`
`).length - 1 - (r.range.endLineNumber - r.range.startLineNumber);
                    if (r.range.endLineNumber < e.startLineNumber) return {
                        startLineNumber: e.startLineNumber + i,
                        startColumn: e.startColumn,
                        endLineNumber: e.endLineNumber + i,
                        endColumn: e.endColumn
                    };
                    {
                        const o = r.text.lastIndexOf(`
`) === -1 ? r.text.length : r.text.length - r.text.lastIndexOf(`
`) - 1,
                            a = r.range.startLineNumber === r.range.endLineNumber ? r.range.endColumn - r.range.startColumn : r.range.endColumn - 1,
                            l = o - a;
                        return {
                            startLineNumber: e.startLineNumber + i,
                            startColumn: e.startColumn + l,
                            endLineNumber: e.endLineNumber + i,
                            endColumn: e.startLineNumber === e.endLineNumber ? e.endColumn + l : e.endColumn
                        }
                    }
                }
                default: {
                    const i = n;
                    return e
                }
            }
        }
        equalsRange(e) {
            return D.equalsRange(this, e)
        }
        static equalsRange(e, r) {
            return !e && !r ? !0 : !!e && !!r && e.startLineNumber === r.startLineNumber && e.startColumn === r.startColumn && e.endLineNumber === r.endLineNumber && e.endColumn === r.endColumn
        }
        getEndPosition() {
            return D.getEndPosition(this)
        }
        static getEndPosition(e) {
            return new bt(e.endLineNumber, e.endColumn)
        }
        getStartPosition() {
            return D.getStartPosition(this)
        }
        static getStartPosition(e) {
            return new bt(e.startLineNumber, e.startColumn)
        }
        toString() {
            return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]"
        }
        setEndPosition(e, r) {
            return new D(this.startLineNumber, this.startColumn, e, r)
        }
        setStartPosition(e, r) {
            return new D(e, r, this.endLineNumber, this.endColumn)
        }
        collapseToStart() {
            return D.collapseToStart(this)
        }
        static collapseToStart(e) {
            return new D(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn)
        }
        collapseToEnd() {
            return D.collapseToEnd(this)
        }
        static collapseToEnd(e) {
            return new D(e.endLineNumber, e.endColumn, e.endLineNumber, e.endColumn)
        }
        delta(e) {
            return new D(this.startLineNumber + e, this.startColumn, this.endLineNumber + e, this.endColumn)
        }
        isSingleLine() {
            return this.startLineNumber === this.endLineNumber
        }
        static fromPositions(e, r = e) {
            return new D(e.lineNumber, e.column, r.lineNumber, r.column)
        }
        static lift(e) {
            return e ? new D(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : null
        }
        static isIRange(e) {
            return e && typeof e.startLineNumber == "number" && typeof e.startColumn == "number" && typeof e.endLineNumber == "number" && typeof e.endColumn == "number"
        }
        static areIntersectingOrTouching(e, r) {
            return !(e.endLineNumber < r.startLineNumber || e.endLineNumber === r.startLineNumber && e.endColumn < r.startColumn || r.endLineNumber < e.startLineNumber || r.endLineNumber === e.startLineNumber && r.endColumn < e.startColumn)
        }
        static areIntersecting(e, r) {
            return !(e.endLineNumber < r.startLineNumber || e.endLineNumber === r.startLineNumber && e.endColumn <= r.startColumn || r.endLineNumber < e.startLineNumber || r.endLineNumber === e.startLineNumber && r.endColumn <= e.startColumn)
        }
        static areOnlyIntersecting(e, r) {
            return !(e.endLineNumber < r.startLineNumber - 1 || e.endLineNumber === r.startLineNumber && e.endColumn < r.startColumn - 1 || r.endLineNumber < e.startLineNumber - 1 || r.endLineNumber === e.startLineNumber && r.endColumn < e.startColumn - 1)
        }
        static compareRangesUsingStarts(e, r) {
            if (e && r) {
                const o = e.startLineNumber | 0,
                    a = r.startLineNumber | 0;
                if (o === a) {
                    const l = e.startColumn | 0,
                        u = r.startColumn | 0;
                    if (l === u) {
                        const c = e.endLineNumber | 0,
                            h = r.endLineNumber | 0;
                        if (c === h) {
                            const d = e.endColumn | 0,
                                b = r.endColumn | 0;
                            return d - b
                        }
                        return c - h
                    }
                    return l - u
                }
                return o - a
            }
            return (e ? 1 : 0) - (r ? 1 : 0)
        }
        static compareRangesUsingEnds(e, r) {
            return e.endLineNumber === r.endLineNumber ? e.endColumn === r.endColumn ? e.startLineNumber === r.startLineNumber ? e.startColumn - r.startColumn : e.startLineNumber - r.startLineNumber : e.endColumn - r.endColumn : e.endLineNumber - r.endLineNumber
        }
        static spansMultipleLines(e) {
            return e.endLineNumber > e.startLineNumber
        }
        toJSON() {
            return this
        }
    },
    Ce = class H {
        static fromRange(e) {
            return new H(e.startLineNumber, e.endLineNumber)
        }
        static fromRangeInclusive(e) {
            return new H(e.startLineNumber, e.endLineNumber + 1)
        }
        static subtract(e, r) {
            return r ? e.startLineNumber < r.startLineNumber && r.endLineNumberExclusive < e.endLineNumberExclusive ? [new H(e.startLineNumber, r.startLineNumber), new H(r.endLineNumberExclusive, e.endLineNumberExclusive)] : r.startLineNumber <= e.startLineNumber && e.endLineNumberExclusive <= r.endLineNumberExclusive ? [] : r.endLineNumberExclusive < e.endLineNumberExclusive ? [new H(Math.max(r.endLineNumberExclusive, e.startLineNumber), e.endLineNumberExclusive)] : [new H(e.startLineNumber, Math.min(r.startLineNumber, e.endLineNumberExclusive))] : [e]
        }
        static joinMany(e) {
            if (e.length === 0) return [];
            let r = new Rn(e[0].slice());
            for (let n = 1; n < e.length; n++) r = r.getUnion(new Rn(e[n].slice()));
            return r.ranges
        }
        static join(e) {
            if (e.length === 0) throw new Z("lineRanges cannot be empty");
            let r = e[0].startLineNumber,
                n = e[0].endLineNumberExclusive;
            for (let i = 1; i < e.length; i++) r = Math.min(r, e[i].startLineNumber), n = Math.max(n, e[i].endLineNumberExclusive);
            return new H(r, n)
        }
        static ofLength(e, r) {
            return new H(e, e + r)
        }
        static deserialize(e) {
            return new H(e[0], e[1])
        }
        constructor(e, r) {
            if (e > r) throw new Z(`startLineNumber ${e} cannot be after endLineNumberExclusive ${r}`);
            this.startLineNumber = e, this.endLineNumberExclusive = r
        }
        contains(e) {
            return this.startLineNumber <= e && e < this.endLineNumberExclusive
        }
        get isEmpty() {
            return this.startLineNumber === this.endLineNumberExclusive
        }
        delta(e) {
            return new H(this.startLineNumber + e, this.endLineNumberExclusive + e)
        }
        deltaLength(e) {
            return new H(this.startLineNumber, this.endLineNumberExclusive + e)
        }
        get length() {
            return this.endLineNumberExclusive - this.startLineNumber
        }
        join(e) {
            return new H(Math.min(this.startLineNumber, e.startLineNumber), Math.max(this.endLineNumberExclusive, e.endLineNumberExclusive))
        }
        toString() {
            return `[${this.startLineNumber},${this.endLineNumberExclusive})`
        }
        intersect(e) {
            const r = Math.max(this.startLineNumber, e.startLineNumber),
                n = Math.min(this.endLineNumberExclusive, e.endLineNumberExclusive);
            if (r <= n) return new H(r, n)
        }
        intersectsStrict(e) {
            return this.startLineNumber < e.endLineNumberExclusive && e.startLineNumber < this.endLineNumberExclusive
        }
        overlapOrTouch(e) {
            return this.startLineNumber <= e.endLineNumberExclusive && e.startLineNumber <= this.endLineNumberExclusive
        }
        equals(e) {
            return this.startLineNumber === e.startLineNumber && this.endLineNumberExclusive === e.endLineNumberExclusive
        }
        toInclusiveRange() {
            return this.isEmpty ? null : new In(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER)
        }
        toExclusiveRange() {
            return new In(this.startLineNumber, 1, this.endLineNumberExclusive, 1)
        }
        mapToLineArray(e) {
            const r = [];
            for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++) r.push(e(n));
            return r
        }
        forEach(e) {
            for (let r = this.startLineNumber; r < this.endLineNumberExclusive; r++) e(r)
        }
        serialize() {
            return [this.startLineNumber, this.endLineNumberExclusive]
        }
        includes(e) {
            return this.startLineNumber <= e && e < this.endLineNumberExclusive
        }
        toOffsetRange() {
            return new G(this.startLineNumber - 1, this.endLineNumberExclusive - 1)
        }
        distanceToRange(e) {
            return this.endLineNumberExclusive <= e.startLineNumber ? e.startLineNumber - this.endLineNumberExclusive : e.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - e.endLineNumberExclusive : 0
        }
        distanceToLine(e) {
            return this.contains(e) ? 0 : e < this.startLineNumber ? this.startLineNumber - e : e - this.endLineNumberExclusive
        }
        addMargin(e, r) {
            return new H(this.startLineNumber - e, this.endLineNumberExclusive + r)
        }
    },
    Rn = class Ue {
        constructor(e = []) {
            this._normalizedRanges = e
        }
        get ranges() {
            return this._normalizedRanges
        }
        addRange(e) {
            if (e.length === 0) return;
            const r = Tr(this._normalizedRanges, i => i.endLineNumberExclusive >= e.startLineNumber),
                n = at(this._normalizedRanges, i => i.startLineNumber <= e.endLineNumberExclusive) + 1;
            if (r === n) this._normalizedRanges.splice(r, 0, e);
            else if (r === n - 1) {
                const i = this._normalizedRanges[r];
                this._normalizedRanges[r] = i.join(e)
            } else {
                const i = this._normalizedRanges[r].join(this._normalizedRanges[n - 1]).join(e);
                this._normalizedRanges.splice(r, n - r, i)
            }
        }
        contains(e) {
            const r = xr(this._normalizedRanges, n => n.startLineNumber <= e);
            return !!r && r.endLineNumberExclusive > e
        }
        intersects(e) {
            const r = xr(this._normalizedRanges, n => n.startLineNumber < e.endLineNumberExclusive);
            return !!r && r.endLineNumberExclusive > e.startLineNumber
        }
        getUnion(e) {
            if (this._normalizedRanges.length === 0) return e;
            if (e._normalizedRanges.length === 0) return this;
            const r = [];
            let n = 0,
                i = 0,
                o = null;
            for (; n < this._normalizedRanges.length || i < e._normalizedRanges.length;) {
                let a = null;
                if (n < this._normalizedRanges.length && i < e._normalizedRanges.length) {
                    const l = this._normalizedRanges[n],
                        u = e._normalizedRanges[i];
                    l.startLineNumber < u.startLineNumber ? (a = l, n++) : (a = u, i++)
                } else n < this._normalizedRanges.length ? (a = this._normalizedRanges[n], n++) : (a = e._normalizedRanges[i], i++);
                o === null ? o = a : o.endLineNumberExclusive >= a.startLineNumber ? o = new Ce(o.startLineNumber, Math.max(o.endLineNumberExclusive, a.endLineNumberExclusive)) : (r.push(o), o = a)
            }
            return o !== null && r.push(o), new Ue(r)
        }
        subtractFrom(e) {
            const r = Tr(this._normalizedRanges, a => a.endLineNumberExclusive >= e.startLineNumber),
                n = at(this._normalizedRanges, a => a.startLineNumber <= e.endLineNumberExclusive) + 1;
            if (r === n) return new Ue([e]);
            const i = [];
            let o = e.startLineNumber;
            for (let a = r; a < n; a++) {
                const l = this._normalizedRanges[a];
                l.startLineNumber > o && i.push(new Ce(o, l.startLineNumber)), o = l.endLineNumberExclusive
            }
            return o < e.endLineNumberExclusive && i.push(new Ce(o, e.endLineNumberExclusive)), new Ue(i)
        }
        toString() {
            return this._normalizedRanges.map(e => e.toString()).join(", ")
        }
        getIntersection(e) {
            const r = [];
            let n = 0,
                i = 0;
            for (; n < this._normalizedRanges.length && i < e._normalizedRanges.length;) {
                const o = this._normalizedRanges[n],
                    a = e._normalizedRanges[i],
                    l = o.intersect(a);
                l && !l.isEmpty && r.push(l), o.endLineNumberExclusive < a.endLineNumberExclusive ? n++ : i++
            }
            return new Ue(r)
        }
        getWithDelta(e) {
            return new Ue(this._normalizedRanges.map(r => r.delta(e)))
        }
    };

function ze(t) {
    return t < 0 ? 0 : t > 4294967295 ? 4294967295 : t | 0
}
var R1 = class {
        constructor(t) {
            this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1
        }
        getCount() {
            return this.values.length
        }
        insertValues(t, e) {
            t = ze(t);
            const r = this.values,
                n = this.prefixSum,
                i = e.length;
            return i === 0 ? !1 : (this.values = new Uint32Array(r.length + i), this.values.set(r.subarray(0, t), 0), this.values.set(r.subarray(t), t + i), this.values.set(e, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(n.subarray(0, this.prefixSumValidIndex[0] + 1)), !0)
        }
        setValue(t, e) {
            return t = ze(t), e = ze(e), this.values[t] === e ? !1 : (this.values[t] = e, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), !0)
        }
        removeValues(t, e) {
            t = ze(t), e = ze(e);
            const r = this.values,
                n = this.prefixSum;
            if (t >= r.length) return !1;
            const i = r.length - t;
            return e >= i && (e = i), e === 0 ? !1 : (this.values = new Uint32Array(r.length - e), this.values.set(r.subarray(0, t), 0), this.values.set(r.subarray(t + e), t), this.prefixSum = new Uint32Array(this.values.length), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(n.subarray(0, this.prefixSumValidIndex[0] + 1)), !0)
        }
        getTotalSum() {
            return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1)
        }
        getPrefixSum(t) {
            return t < 0 ? 0 : (t = ze(t), this._getPrefixSum(t))
        }
        _getPrefixSum(t) {
            if (t <= this.prefixSumValidIndex[0]) return this.prefixSum[t];
            let e = this.prefixSumValidIndex[0] + 1;
            e === 0 && (this.prefixSum[0] = this.values[0], e++), t >= this.values.length && (t = this.values.length - 1);
            for (let r = e; r <= t; r++) this.prefixSum[r] = this.prefixSum[r - 1] + this.values[r];
            return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t), this.prefixSum[t]
        }
        getIndexOf(t) {
            t = Math.floor(t), this.getTotalSum();
            let e = 0,
                r = this.values.length - 1,
                n = 0,
                i = 0,
                o = 0;
            for (; e <= r;)
                if (n = e + (r - e) / 2 | 0, i = this.prefixSum[n], o = i - this.values[n], t < o) r = n - 1;
                else if (t >= i) e = n + 1;
            else break;
            return new D1(n, t - o)
        }
    },
    D1 = class {
        constructor(t, e) {
            this.index = t, this.remainder = e, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = e
        }
    },
    P1 = 64,
    M1 = class {
        constructor(t, e, r, n) {
            this._uri = t, this._lines = e, this._eol = r, this._versionId = n, this._lineStarts = null, this._cachedTextValue = null
        }
        dispose() {
            this._lines.length = 0
        }
        get version() {
            return this._versionId
        }
        getText() {
            return this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue
        }
        getTextLength() {
            const t = this._lines.length - 1;
            return t < 0 ? 0 : (this._ensureLineStarts(), this._lineStarts.getPrefixSum(t - 1) + this._lines[t].length)
        }
        getMemoryEstimate(t) {
            let e = 0;
            for (let i = 0; i < this._lines.length; i++) {
                if (i % P1 === 0 && t?.shouldContinue?.() === !1) return;
                e += this._lines[i].length
            }
            const r = e * 2,
                n = this._cachedTextValue === null ? 0 : this._cachedTextValue.length * 2;
            return r + n
        }
        onEvents(t) {
            t.eol && t.eol !== this._eol && (this._eol = t.eol, this._lineStarts = null);
            const e = t.changes;
            for (const r of e) this._acceptDeleteRange(r.range), this._acceptInsertText(new bt(r.range.startLineNumber, r.range.startColumn), r.text);
            this._versionId = t.versionId, this._cachedTextValue = null
        }
        _ensureLineStarts() {
            if (!this._lineStarts) {
                const t = this._eol.length,
                    e = this._lines.length,
                    r = new Uint32Array(e);
                for (let n = 0; n < e; n++) r[n] = this._lines[n].length + t;
                this._lineStarts = new R1(r)
            }
        }
        _setLineText(t, e) {
            this._lines[t] = e, this._lineStarts && this._lineStarts.setValue(t, this._lines[t].length + this._eol.length)
        }
        _acceptDeleteRange(t) {
            if (t.startLineNumber === t.endLineNumber) {
                if (t.startColumn === t.endColumn) return;
                this._setLineText(t.startLineNumber - 1, this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) + this._lines[t.startLineNumber - 1].substring(t.endColumn - 1));
                return
            }
            this._setLineText(t.startLineNumber - 1, this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) + this._lines[t.endLineNumber - 1].substring(t.endColumn - 1)), this._lines.splice(t.startLineNumber, t.endLineNumber - t.startLineNumber), this._lineStarts && this._lineStarts.removeValues(t.startLineNumber, t.endLineNumber - t.startLineNumber)
        }
        _acceptInsertText(t, e) {
            if (e.length === 0) return;
            const r = yi(e);
            if (r.length === 1) {
                this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + r[0] + this._lines[t.lineNumber - 1].substring(t.column - 1));
                return
            }
            r[r.length - 1] += this._lines[t.lineNumber - 1].substring(t.column - 1), this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + r[0]);
            const n = new Uint32Array(r.length - 1);
            for (let i = 1; i < r.length; i++) this._lines.splice(t.lineNumber + i - 1, 0, r[i]), n[i - 1] = r[i].length + this._eol.length;
            this._lineStarts && this._lineStarts.insertValues(t.lineNumber, n)
        }
    };

function tr(t) {
    let e = 0,
        r = 0,
        n = 0,
        i = 0;
    for (let o = 0, a = t.length; o < a; o++) {
        const l = t.charCodeAt(o);
        l === 13 ? (e === 0 && (r = o), e++, o + 1 < a && t.charCodeAt(o + 1) === 10 ? (i |= 2, o++) : i |= 3, n = o + 1) : l === 10 && (i |= 1, e === 0 && (r = o), e++, n = o + 1)
    }
    return e === 0 && (r = t.length), [e, r, t.length - n, i]
}
var Dn = Object.create(null);

function s(t, e) {
    if (Ys(e)) {
        const r = Dn[e];
        if (r === void 0) throw new Error(`${t} references an unknown codicon: ${e}`);
        e = r
    }
    return Dn[t] = e, {
        id: t
    }
}
var z1 = {
        semantic: s("semantic", 62e3),
        githubCopilot: s("github-copilot", 62001),
        plusCircle: s("plus-circle", 62002),
        smileySad: s("smiley-sad", 62003),
        smileyHappy: s("smiley-happy", 62004),
        smileyMedium: s("smiley-medium", 62005),
        sparkleStrikethrough: s("sparkle-strikethrough", 62006),
        keyPlusSparkle: s("key-plus-sparkle", 62007),
        paperclip: s("paperclip", 60500),
        atSign: s("at-sign", 60501),
        image: s("image", 60502),
        logo: s("logo", 60503),
        sparkleTwo: s("sparkle-two", 60504),
        logoSlash: s("logo-slash", 60505),
        arrowsExpand: s("arrows-expand", 60506),
        arrowsContract: s("arrows-contract", 60507),
        expandDiffUp: s("expand-diff-up", 60508),
        expandDiffDown: s("expand-diff-down", 60509),
        add: s("add", 6e4),
        plus: s("plus", 6e4),
        gistNew: s("gist-new", 6e4),
        repoCreate: s("repo-create", 6e4),
        lightbulb: s("lightbulb", 60001),
        lightBulb: s("light-bulb", 60001),
        repo: s("repo", 60002),
        repoDelete: s("repo-delete", 60002),
        gistFork: s("gist-fork", 60003),
        repoForked: s("repo-forked", 60003),
        gitPullRequest: s("git-pull-request", 60004),
        gitPullRequestAbandoned: s("git-pull-request-abandoned", 60004),
        recordKeys: s("record-keys", 60005),
        keyboard: s("keyboard", 60005),
        tag: s("tag", 60006),
        gitPullRequestLabel: s("git-pull-request-label", 60006),
        tagAdd: s("tag-add", 60006),
        tagRemove: s("tag-remove", 60006),
        person: s("person", 60007),
        personFollow: s("person-follow", 60007),
        personOutline: s("person-outline", 60007),
        personFilled: s("person-filled", 60007),
        gitBranch: s("git-branch", 60008),
        gitBranchCreate: s("git-branch-create", 60008),
        gitBranchDelete: s("git-branch-delete", 60008),
        sourceControl: s("source-control", 60008),
        mirror: s("mirror", 60009),
        mirrorPublic: s("mirror-public", 60009),
        star: s("star", 60010),
        starAdd: s("star-add", 60010),
        starDelete: s("star-delete", 60010),
        starEmpty: s("star-empty", 60010),
        comment: s("comment", 60011),
        commentAdd: s("comment-add", 60011),
        alert: s("alert", 60012),
        warning: s("warning", 60012),
        search: s("search", 60013),
        searchSave: s("search-save", 60013),
        logOut: s("log-out", 60014),
        signOut: s("sign-out", 60014),
        logIn: s("log-in", 60015),
        signIn: s("sign-in", 60015),
        eye: s("eye", 60016),
        eyeUnwatch: s("eye-unwatch", 60016),
        eyeWatch: s("eye-watch", 60016),
        circleFilled: s("circle-filled", 60017),
        primitiveDot: s("primitive-dot", 60017),
        closeDirty: s("close-dirty", 60017),
        debugBreakpoint: s("debug-breakpoint", 60017),
        debugBreakpointDisabled: s("debug-breakpoint-disabled", 60017),
        debugHint: s("debug-hint", 60017),
        terminalDecorationSuccess: s("terminal-decoration-success", 60017),
        primitiveSquare: s("primitive-square", 60018),
        edit: s("edit", 60019),
        pencil: s("pencil", 60019),
        info: s("info", 60020),
        issueOpened: s("issue-opened", 60020),
        gistPrivate: s("gist-private", 60021),
        gitForkPrivate: s("git-fork-private", 60021),
        lock: s("lock", 60021),
        mirrorPrivate: s("mirror-private", 60021),
        close: s("close", 60022),
        removeClose: s("remove-close", 60022),
        x: s("x", 60022),
        repoSync: s("repo-sync", 60023),
        sync: s("sync", 60023),
        clone: s("clone", 60024),
        desktopDownload: s("desktop-download", 60024),
        beaker: s("beaker", 60025),
        microscope: s("microscope", 60025),
        vm: s("vm", 60026),
        deviceDesktop: s("device-desktop", 60026),
        file: s("file", 60027),
        fileText: s("file-text", 60027),
        more: s("more", 60028),
        ellipsis: s("ellipsis", 60028),
        kebabHorizontal: s("kebab-horizontal", 60028),
        mailReply: s("mail-reply", 60029),
        reply: s("reply", 60029),
        organization: s("organization", 60030),
        organizationFilled: s("organization-filled", 60030),
        organizationOutline: s("organization-outline", 60030),
        newFile: s("new-file", 60031),
        fileAdd: s("file-add", 60031),
        newFolder: s("new-folder", 60032),
        fileDirectoryCreate: s("file-directory-create", 60032),
        trash: s("trash", 60033),
        trashcan: s("trashcan", 60033),
        history: s("history", 60034),
        clock: s("clock", 60034),
        folder: s("folder", 60035),
        fileDirectory: s("file-directory", 60035),
        symbolFolder: s("symbol-folder", 60035),
        logoGithub: s("logo-github", 60036),
        markGithub: s("mark-github", 60036),
        github: s("github", 60036),
        terminal: s("terminal", 60037),
        console: s("console", 60037),
        repl: s("repl", 60037),
        zap: s("zap", 60038),
        symbolEvent: s("symbol-event", 60038),
        error: s("error", 60039),
        stop: s("stop", 60039),
        variable: s("variable", 60040),
        symbolVariable: s("symbol-variable", 60040),
        array: s("array", 60042),
        symbolArray: s("symbol-array", 60042),
        symbolModule: s("symbol-module", 60043),
        symbolPackage: s("symbol-package", 60043),
        symbolNamespace: s("symbol-namespace", 60043),
        symbolObject: s("symbol-object", 60043),
        symbolMethod: s("symbol-method", 60044),
        symbolFunction: s("symbol-function", 60044),
        symbolConstructor: s("symbol-constructor", 60044),
        symbolBoolean: s("symbol-boolean", 60047),
        symbolNull: s("symbol-null", 60047),
        symbolNumeric: s("symbol-numeric", 60048),
        symbolNumber: s("symbol-number", 60048),
        symbolStructure: s("symbol-structure", 60049),
        symbolStruct: s("symbol-struct", 60049),
        symbolParameter: s("symbol-parameter", 60050),
        symbolTypeParameter: s("symbol-type-parameter", 60050),
        symbolKey: s("symbol-key", 60051),
        symbolText: s("symbol-text", 60051),
        symbolReference: s("symbol-reference", 60052),
        goToFile: s("go-to-file", 60052),
        symbolEnum: s("symbol-enum", 60053),
        symbolValue: s("symbol-value", 60053),
        symbolRuler: s("symbol-ruler", 60054),
        symbolUnit: s("symbol-unit", 60054),
        activateBreakpoints: s("activate-breakpoints", 60055),
        archive: s("archive", 60056),
        arrowBoth: s("arrow-both", 60057),
        arrowDown: s("arrow-down", 60058),
        arrowLeft: s("arrow-left", 60059),
        arrowRight: s("arrow-right", 60060),
        arrowSmallDown: s("arrow-small-down", 60061),
        arrowSmallLeft: s("arrow-small-left", 60062),
        arrowSmallRight: s("arrow-small-right", 60063),
        arrowSmallUp: s("arrow-small-up", 60064),
        arrowUp: s("arrow-up", 60065),
        bell: s("bell", 60066),
        bold: s("bold", 60067),
        book: s("book", 60068),
        bookmark: s("bookmark", 60069),
        debugBreakpointConditionalUnverified: s("debug-breakpoint-conditional-unverified", 60070),
        debugBreakpointConditional: s("debug-breakpoint-conditional", 60071),
        debugBreakpointConditionalDisabled: s("debug-breakpoint-conditional-disabled", 60071),
        debugBreakpointDataUnverified: s("debug-breakpoint-data-unverified", 60072),
        debugBreakpointData: s("debug-breakpoint-data", 60073),
        debugBreakpointDataDisabled: s("debug-breakpoint-data-disabled", 60073),
        debugBreakpointLogUnverified: s("debug-breakpoint-log-unverified", 60074),
        debugBreakpointLog: s("debug-breakpoint-log", 60075),
        debugBreakpointLogDisabled: s("debug-breakpoint-log-disabled", 60075),
        briefcase: s("briefcase", 60076),
        broadcast: s("broadcast", 60077),
        browser: s("browser", 60078),
        bug: s("bug", 60079),
        calendar: s("calendar", 60080),
        caseSensitive: s("case-sensitive", 60081),
        check: s("check", 60082),
        checklist: s("checklist", 60083),
        chevronDown: s("chevron-down", 60084),
        chevronLeft: s("chevron-left", 60085),
        chevronRight: s("chevron-right", 60086),
        chevronUp: s("chevron-up", 60087),
        chromeClose: s("chrome-close", 60088),
        chromeMaximize: s("chrome-maximize", 60089),
        chromeMinimize: s("chrome-minimize", 60090),
        chromeRestore: s("chrome-restore", 60091),
        circleOutline: s("circle-outline", 60092),
        circle: s("circle", 60092),
        debugBreakpointUnverified: s("debug-breakpoint-unverified", 60092),
        terminalDecorationIncomplete: s("terminal-decoration-incomplete", 60092),
        circleSlash: s("circle-slash", 60093),
        circuitBoard: s("circuit-board", 60094),
        clearAll: s("clear-all", 60095),
        clippy: s("clippy", 60096),
        closeAll: s("close-all", 60097),
        cloudDownload: s("cloud-download", 60098),
        cloudUpload: s("cloud-upload", 60099),
        code: s("code", 60100),
        collapseAll: s("collapse-all", 60101),
        colorMode: s("color-mode", 60102),
        commentDiscussion: s("comment-discussion", 60103),
        creditCard: s("credit-card", 60105),
        dash: s("dash", 60108),
        dashboard: s("dashboard", 60109),
        database: s("database", 60110),
        debugContinue: s("debug-continue", 60111),
        debugDisconnect: s("debug-disconnect", 60112),
        debugPause: s("debug-pause", 60113),
        debugRestart: s("debug-restart", 60114),
        debugStart: s("debug-start", 60115),
        debugStepInto: s("debug-step-into", 60116),
        debugStepOut: s("debug-step-out", 60117),
        debugStepOver: s("debug-step-over", 60118),
        debugStop: s("debug-stop", 60119),
        debug: s("debug", 60120),
        deviceCameraVideo: s("device-camera-video", 60121),
        deviceCamera: s("device-camera", 60122),
        deviceMobile: s("device-mobile", 60123),
        diffAdded: s("diff-added", 60124),
        diffIgnored: s("diff-ignored", 60125),
        diffModified: s("diff-modified", 60126),
        diffRemoved: s("diff-removed", 60127),
        diffRenamed: s("diff-renamed", 60128),
        diff: s("diff", 60129),
        diffSidebyside: s("diff-sidebyside", 60129),
        discard: s("discard", 60130),
        editorLayout: s("editor-layout", 60131),
        emptyWindow: s("empty-window", 60132),
        exclude: s("exclude", 60133),
        extensions: s("extensions", 60134),
        eyeClosed: s("eye-closed", 60135),
        fileBinary: s("file-binary", 60136),
        fileCode: s("file-code", 60137),
        fileMedia: s("file-media", 60138),
        filePdf: s("file-pdf", 60139),
        fileSubmodule: s("file-submodule", 60140),
        fileSymlinkDirectory: s("file-symlink-directory", 60141),
        fileSymlinkFile: s("file-symlink-file", 60142),
        fileZip: s("file-zip", 60143),
        files: s("files", 60144),
        filter: s("filter", 60145),
        flame: s("flame", 60146),
        foldDown: s("fold-down", 60147),
        foldUp: s("fold-up", 60148),
        fold: s("fold", 60149),
        folderActive: s("folder-active", 60150),
        folderOpened: s("folder-opened", 60151),
        gear: s("gear", 60152),
        gift: s("gift", 60153),
        gistSecret: s("gist-secret", 60154),
        gist: s("gist", 60155),
        gitCommit: s("git-commit", 60156),
        gitCompare: s("git-compare", 60157),
        compareChanges: s("compare-changes", 60157),
        gitMerge: s("git-merge", 60158),
        githubAction: s("github-action", 60159),
        githubAlt: s("github-alt", 60160),
        globe: s("globe", 60161),
        grabber: s("grabber", 60162),
        graph: s("graph", 60163),
        gripper: s("gripper", 60164),
        heart: s("heart", 60165),
        home: s("home", 60166),
        horizontalRule: s("horizontal-rule", 60167),
        hubot: s("hubot", 60168),
        inbox: s("inbox", 60169),
        issueReopened: s("issue-reopened", 60171),
        issues: s("issues", 60172),
        italic: s("italic", 60173),
        jersey: s("jersey", 60174),
        json: s("json", 60175),
        kebabVertical: s("kebab-vertical", 60176),
        key: s("key", 60177),
        law: s("law", 60178),
        lightbulbAutofix: s("lightbulb-autofix", 60179),
        linkExternal: s("link-external", 60180),
        link: s("link", 60181),
        listOrdered: s("list-ordered", 60182),
        listUnordered: s("list-unordered", 60183),
        liveShare: s("live-share", 60184),
        loading: s("loading", 60185),
        location: s("location", 60186),
        mailRead: s("mail-read", 60187),
        mail: s("mail", 60188),
        markdown: s("markdown", 60189),
        megaphone: s("megaphone", 60190),
        mention: s("mention", 60191),
        milestone: s("milestone", 60192),
        gitPullRequestMilestone: s("git-pull-request-milestone", 60192),
        mortarBoard: s("mortar-board", 60193),
        move: s("move", 60194),
        multipleWindows: s("multiple-windows", 60195),
        mute: s("mute", 60196),
        noNewline: s("no-newline", 60197),
        note: s("note", 60198),
        octoface: s("octoface", 60199),
        openPreview: s("open-preview", 60200),
        package: s("package", 60201),
        paintcan: s("paintcan", 60202),
        pin: s("pin", 60203),
        play: s("play", 60204),
        run: s("run", 60204),
        plug: s("plug", 60205),
        preserveCase: s("preserve-case", 60206),
        preview: s("preview", 60207),
        project: s("project", 60208),
        pulse: s("pulse", 60209),
        question: s("question", 60210),
        quote: s("quote", 60211),
        radioTower: s("radio-tower", 60212),
        reactions: s("reactions", 60213),
        references: s("references", 60214),
        refresh: s("refresh", 60215),
        regex: s("regex", 60216),
        remoteExplorer: s("remote-explorer", 60217),
        remote: s("remote", 60218),
        remove: s("remove", 60219),
        replaceAll: s("replace-all", 60220),
        replace: s("replace", 60221),
        repoClone: s("repo-clone", 60222),
        repoForcePush: s("repo-force-push", 60223),
        repoPull: s("repo-pull", 60224),
        repoPush: s("repo-push", 60225),
        report: s("report", 60226),
        requestChanges: s("request-changes", 60227),
        rocket: s("rocket", 60228),
        rootFolderOpened: s("root-folder-opened", 60229),
        rootFolder: s("root-folder", 60230),
        rss: s("rss", 60231),
        ruby: s("ruby", 60232),
        saveAll: s("save-all", 60233),
        saveAs: s("save-as", 60234),
        save: s("save", 60235),
        screenFull: s("screen-full", 60236),
        screenNormal: s("screen-normal", 60237),
        searchStop: s("search-stop", 60238),
        server: s("server", 60240),
        settingsGear: s("settings-gear", 60241),
        settings: s("settings", 60242),
        shield: s("shield", 60243),
        smiley: s("smiley", 60244),
        sortPrecedence: s("sort-precedence", 60245),
        splitHorizontal: s("split-horizontal", 60246),
        splitVertical: s("split-vertical", 60247),
        squirrel: s("squirrel", 60248),
        starFull: s("star-full", 60249),
        starHalf: s("star-half", 60250),
        symbolClass: s("symbol-class", 60251),
        symbolColor: s("symbol-color", 60252),
        symbolConstant: s("symbol-constant", 60253),
        symbolEnumMember: s("symbol-enum-member", 60254),
        symbolField: s("symbol-field", 60255),
        symbolFile: s("symbol-file", 60256),
        symbolInterface: s("symbol-interface", 60257),
        symbolKeyword: s("symbol-keyword", 60258),
        symbolMisc: s("symbol-misc", 60259),
        symbolOperator: s("symbol-operator", 60260),
        symbolProperty: s("symbol-property", 60261),
        wrench: s("wrench", 60261),
        wrenchSubaction: s("wrench-subaction", 60261),
        symbolSnippet: s("symbol-snippet", 60262),
        tasklist: s("tasklist", 60263),
        telescope: s("telescope", 60264),
        textSize: s("text-size", 60265),
        threeBars: s("three-bars", 60266),
        thumbsdown: s("thumbsdown", 60267),
        thumbsup: s("thumbsup", 60268),
        tools: s("tools", 60269),
        triangleDown: s("triangle-down", 60270),
        triangleLeft: s("triangle-left", 60271),
        triangleRight: s("triangle-right", 60272),
        triangleUp: s("triangle-up", 60273),
        twitter: s("twitter", 60274),
        unfold: s("unfold", 60275),
        unlock: s("unlock", 60276),
        unmute: s("unmute", 60277),
        unverified: s("unverified", 60278),
        verified: s("verified", 60279),
        versions: s("versions", 60280),
        vmActive: s("vm-active", 60281),
        vmOutline: s("vm-outline", 60282),
        vmRunning: s("vm-running", 60283),
        watch: s("watch", 60284),
        whitespace: s("whitespace", 60285),
        wholeWord: s("whole-word", 60286),
        window: s("window", 60287),
        wordWrap: s("word-wrap", 60288),
        zoomIn: s("zoom-in", 60289),
        zoomOut: s("zoom-out", 60290),
        listFilter: s("list-filter", 60291),
        listFlat: s("list-flat", 60292),
        listSelection: s("list-selection", 60293),
        selection: s("selection", 60293),
        listTree: s("list-tree", 60294),
        debugBreakpointFunctionUnverified: s("debug-breakpoint-function-unverified", 60295),
        debugBreakpointFunction: s("debug-breakpoint-function", 60296),
        debugBreakpointFunctionDisabled: s("debug-breakpoint-function-disabled", 60296),
        debugStackframeActive: s("debug-stackframe-active", 60297),
        circleSmallFilled: s("circle-small-filled", 60298),
        debugStackframeDot: s("debug-stackframe-dot", 60298),
        terminalDecorationMark: s("terminal-decoration-mark", 60298),
        debugStackframe: s("debug-stackframe", 60299),
        debugStackframeFocused: s("debug-stackframe-focused", 60299),
        debugBreakpointUnsupported: s("debug-breakpoint-unsupported", 60300),
        symbolString: s("symbol-string", 60301),
        debugReverseContinue: s("debug-reverse-continue", 60302),
        debugStepBack: s("debug-step-back", 60303),
        debugRestartFrame: s("debug-restart-frame", 60304),
        debugAlt: s("debug-alt", 60305),
        callIncoming: s("call-incoming", 60306),
        callOutgoing: s("call-outgoing", 60307),
        menu: s("menu", 60308),
        expandAll: s("expand-all", 60309),
        feedback: s("feedback", 60310),
        gitPullRequestReviewer: s("git-pull-request-reviewer", 60310),
        groupByRefType: s("group-by-ref-type", 60311),
        ungroupByRefType: s("ungroup-by-ref-type", 60312),
        account: s("account", 60313),
        gitPullRequestAssignee: s("git-pull-request-assignee", 60313),
        bellDot: s("bell-dot", 60314),
        debugConsole: s("debug-console", 60315),
        library: s("library", 60316),
        output: s("output", 60317),
        runAll: s("run-all", 60318),
        syncIgnored: s("sync-ignored", 60319),
        pinned: s("pinned", 60320),
        githubInverted: s("github-inverted", 60321),
        serverProcess: s("server-process", 60322),
        serverEnvironment: s("server-environment", 60323),
        pass: s("pass", 60324),
        issueClosed: s("issue-closed", 60324),
        stopCircle: s("stop-circle", 60325),
        playCircle: s("play-circle", 60326),
        record: s("record", 60327),
        debugAltSmall: s("debug-alt-small", 60328),
        vmConnect: s("vm-connect", 60329),
        cloud: s("cloud", 60330),
        merge: s("merge", 60331),
        export: s("export", 60332),
        graphLeft: s("graph-left", 60333),
        magnet: s("magnet", 60334),
        notebook: s("notebook", 60335),
        redo: s("redo", 60336),
        checkAll: s("check-all", 60337),
        pinnedDirty: s("pinned-dirty", 60338),
        passFilled: s("pass-filled", 60339),
        circleLargeFilled: s("circle-large-filled", 60340),
        circleLarge: s("circle-large", 60341),
        circleLargeOutline: s("circle-large-outline", 60341),
        combine: s("combine", 60342),
        gather: s("gather", 60342),
        table: s("table", 60343),
        variableGroup: s("variable-group", 60344),
        typeHierarchy: s("type-hierarchy", 60345),
        typeHierarchySub: s("type-hierarchy-sub", 60346),
        typeHierarchySuper: s("type-hierarchy-super", 60347),
        gitPullRequestCreate: s("git-pull-request-create", 60348),
        runAbove: s("run-above", 60349),
        runBelow: s("run-below", 60350),
        notebookTemplate: s("notebook-template", 60351),
        debugRerun: s("debug-rerun", 60352),
        workspaceTrusted: s("workspace-trusted", 60353),
        workspaceUntrusted: s("workspace-untrusted", 60354),
        workspaceUnknown: s("workspace-unknown", 60355),
        terminalCmd: s("terminal-cmd", 60356),
        terminalDebian: s("terminal-debian", 60357),
        terminalLinux: s("terminal-linux", 60358),
        terminalPowershell: s("terminal-powershell", 60359),
        terminalTmux: s("terminal-tmux", 60360),
        terminalUbuntu: s("terminal-ubuntu", 60361),
        terminalBash: s("terminal-bash", 60362),
        arrowSwap: s("arrow-swap", 60363),
        copy: s("copy", 60364),
        personAdd: s("person-add", 60365),
        filterFilled: s("filter-filled", 60366),
        wand: s("wand", 60367),
        debugLineByLine: s("debug-line-by-line", 60368),
        inspect: s("inspect", 60369),
        layers: s("layers", 60370),
        layersDot: s("layers-dot", 60371),
        layersActive: s("layers-active", 60372),
        compass: s("compass", 60373),
        compassDot: s("compass-dot", 60374),
        compassActive: s("compass-active", 60375),
        azure: s("azure", 60376),
        issueDraft: s("issue-draft", 60377),
        gitPullRequestClosed: s("git-pull-request-closed", 60378),
        gitPullRequestDraft: s("git-pull-request-draft", 60379),
        debugAll: s("debug-all", 60380),
        debugCoverage: s("debug-coverage", 60381),
        runErrors: s("run-errors", 60382),
        folderLibrary: s("folder-library", 60383),
        debugContinueSmall: s("debug-continue-small", 60384),
        beakerStop: s("beaker-stop", 60385),
        graphLine: s("graph-line", 60386),
        graphScatter: s("graph-scatter", 60387),
        pieChart: s("pie-chart", 60388),
        bracket: s("bracket", 60175),
        bracketDot: s("bracket-dot", 60389),
        bracketError: s("bracket-error", 60390),
        lockSmall: s("lock-small", 60391),
        azureDevops: s("azure-devops", 60392),
        verifiedFilled: s("verified-filled", 60393),
        newline: s("newline", 60394),
        layout: s("layout", 60395),
        layoutActivitybarLeft: s("layout-activitybar-left", 60396),
        layoutActivitybarRight: s("layout-activitybar-right", 60397),
        layoutPanelLeft: s("layout-panel-left", 60398),
        layoutPanelCenter: s("layout-panel-center", 60399),
        layoutPanelJustify: s("layout-panel-justify", 60400),
        layoutPanelRight: s("layout-panel-right", 60401),
        layoutPanel: s("layout-panel", 60402),
        layoutSidebarLeft: s("layout-sidebar-left", 60403),
        layoutSidebarRight: s("layout-sidebar-right", 60404),
        layoutStatusbar: s("layout-statusbar", 60405),
        layoutMenubar: s("layout-menubar", 60406),
        layoutCentered: s("layout-centered", 60407),
        target: s("target", 60408),
        indent: s("indent", 60409),
        recordSmall: s("record-small", 60410),
        errorSmall: s("error-small", 60411),
        terminalDecorationError: s("terminal-decoration-error", 60411),
        arrowCircleDown: s("arrow-circle-down", 60412),
        arrowCircleLeft: s("arrow-circle-left", 60413),
        arrowCircleRight: s("arrow-circle-right", 60414),
        arrowCircleUp: s("arrow-circle-up", 60415),
        layoutSidebarRightOff: s("layout-sidebar-right-off", 60416),
        layoutPanelOff: s("layout-panel-off", 60417),
        layoutSidebarLeftOff: s("layout-sidebar-left-off", 60418),
        blank: s("blank", 60419),
        heartFilled: s("heart-filled", 60420),
        map: s("map", 60421),
        mapHorizontal: s("map-horizontal", 60421),
        foldHorizontal: s("fold-horizontal", 60421),
        mapFilled: s("map-filled", 60422),
        mapHorizontalFilled: s("map-horizontal-filled", 60422),
        foldHorizontalFilled: s("fold-horizontal-filled", 60422),
        circleSmall: s("circle-small", 60423),
        bellSlash: s("bell-slash", 60424),
        bellSlashDot: s("bell-slash-dot", 60425),
        commentUnresolved: s("comment-unresolved", 60426),
        gitPullRequestGoToChanges: s("git-pull-request-go-to-changes", 60427),
        gitPullRequestNewChanges: s("git-pull-request-new-changes", 60428),
        searchFuzzy: s("search-fuzzy", 60429),
        commentDraft: s("comment-draft", 60430),
        send: s("send", 60431),
        sparkle: s("sparkle", 60432),
        insert: s("insert", 60433),
        mic: s("mic", 60434),
        thumbsdownFilled: s("thumbsdown-filled", 60435),
        thumbsupFilled: s("thumbsup-filled", 60436),
        coffee: s("coffee", 60437),
        snake: s("snake", 60438),
        game: s("game", 60439),
        vr: s("vr", 60440),
        chip: s("chip", 60441),
        piano: s("piano", 60442),
        music: s("music", 60443),
        micFilled: s("mic-filled", 60444),
        repoFetch: s("repo-fetch", 60445),
        copilot: s("copilot", 60446),
        lightbulbSparkle: s("lightbulb-sparkle", 60447),
        robot: s("robot", 60448),
        sparkleFilled: s("sparkle-filled", 60449),
        diffSingle: s("diff-single", 60450),
        diffMultiple: s("diff-multiple", 60451),
        surroundWith: s("surround-with", 60452),
        share: s("share", 60453),
        gitStash: s("git-stash", 60454),
        gitStashApply: s("git-stash-apply", 60455),
        gitStashPop: s("git-stash-pop", 60456),
        vscode: s("vscode", 60457),
        vscodeInsiders: s("vscode-insiders", 60458),
        codeOss: s("code-oss", 60459),
        runCoverage: s("run-coverage", 60460),
        runAllCoverage: s("run-all-coverage", 60461),
        coverage: s("coverage", 60462),
        githubProject: s("github-project", 60463),
        mapVertical: s("map-vertical", 60464),
        foldVertical: s("fold-vertical", 60464),
        mapVerticalFilled: s("map-vertical-filled", 60465),
        foldVerticalFilled: s("fold-vertical-filled", 60465),
        goToSearch: s("go-to-search", 60466),
        percentage: s("percentage", 60467),
        sortPercentage: s("sort-percentage", 60467),
        attach: s("attach", 60468),
        goToEditingSession: s("go-to-editing-session", 60469),
        editSession: s("edit-session", 60470),
        codeReview: s("code-review", 60471),
        copilotWarning: s("copilot-warning", 60472),
        python: s("python", 60473),
        copilotLarge: s("copilot-large", 60474),
        copilotWarningLarge: s("copilot-warning-large", 60475),
        keyboardTab: s("keyboard-tab", 60476),
        copilotBlocked: s("copilot-blocked", 60477),
        copilotNotConnected: s("copilot-not-connected", 60478),
        flag: s("flag", 60479),
        lightbulbEmpty: s("lightbulb-empty", 60480),
        symbolMethodArrow: s("symbol-method-arrow", 60481),
        copilotUnavailable: s("copilot-unavailable", 60482),
        repoPinned: s("repo-pinned", 60483),
        keyboardTabAbove: s("keyboard-tab-above", 60484),
        keyboardTabBelow: s("keyboard-tab-below", 60485),
        gitPullRequestDone: s("git-pull-request-done", 60486),
        mcp: s("mcp", 60487),
        extensionsLarge: s("extensions-large", 60488),
        layoutPanelDock: s("layout-panel-dock", 60489),
        layoutSidebarLeftDock: s("layout-sidebar-left-dock", 60490),
        layoutSidebarRightDock: s("layout-sidebar-right-dock", 60491),
        terminalTwo: s("terminal-two", 60800),
        checkTwo: s("check-two", 60801),
        xTwo: s("x-two", 60802),
        expander: s("expander", 60803),
        restore: s("restore", 60804),
        pinTwo: s("pin-two", 60805),
        stopTwo: s("stop-two", 60806),
        brain: s("brain", 60807),
        magnifyingGlass: s("magnifying-glass", 60808),
        imageTwo: s("image-two", 60809),
        microphone: s("microphone", 60810),
        submit: s("submit", 60811),
        running: s("running", 60812),
        fileAddTwo: s("file-add-two", 60813),
        infinity: s("infinity", 60814),
        editTwo: s("edit-two", 60815),
        stopThree: s("stop-three", 60816),
        warningTwo: s("warning-two", 60817),
        arrowLeftTwo: s("arrow-left-two", 60818),
        redoTwo: s("redo-two", 60819),
        infoTwo: s("info-two", 60820),
        chat: s("chat", 60821),
        thumbsDown: s("thumbs-down", 60822),
        thumbsUp: s("thumbs-up", 60823),
        thumbsDownFilled: s("thumbs-down-filled", 60824),
        thumbsUpFilled: s("thumbs-up-filled", 60825),
        copyTwo: s("copy-two", 60826),
        ellipsisTwo: s("ellipsis-two", 60827),
        eyeTwo: s("eye-two", 60828),
        globeTwo: s("globe-two", 60829),
        reload: s("reload", 60830),
        folderTwo: s("folder-two", 60831),
        eraser: s("eraser", 60832),
        swirlSparkle: s("swirl-sparkle", 60833),
        sendTwo: s("send-two", 60834),
        inboxTwo: s("inbox-two", 60835),
        fileTwo: s("file-two", 60836),
        list: s("list", 60837),
        calendarTwo: s("calendar-two", 60838),
        openNotebook: s("open-notebook", 60839),
        paperWords: s("paper-words", 60840),
        mortarboard: s("mortarboard", 60841),
        lightning: s("lightning", 60842),
        hammer: s("hammer", 60843),
        keyboardTwo: s("keyboard-two", 60844),
        arrowUpTwo: s("arrow-up-two", 60845),
        import: s("import", 60846),
        targetTwo: s("target-two", 60847),
        tab: s("tab", 60848),
        magic: s("magic", 60849),
        cloneTwo: s("clone-two", 60850),
        brush: s("brush", 60851),
        branch: s("branch", 60852),
        addTwo: s("add-two", 60853),
        historyTwo: s("history-two", 60854),
        cloudTwo: s("cloud-two", 60855),
        review: s("review", 60856),
        plusSquare: s("plus-square", 60857),
        checkCircled: s("check-circled", 60858),
        dottedCircle: s("dotted-circle", 60859),
        warnCircle: s("warn-circle", 60860),
        downLocalMachine: s("down-local-machine", 60861),
        mergeUpwards: s("merge-upwards", 60862),
        asterisk: s("asterisk", 60863),
        time: s("time", 60864),
        arrowUpRight: s("arrow-up-right", 60865),
        arrowUpRightSquare: s("arrow-up-right-square", 60866),
        bubbleAndPencil: s("bubble-and-pencil", 60867),
        downloadOnSquare: s("download-on-square", 60868),
        shippingBox: s("shipping-box", 60869),
        chevronForwardDotted: s("chevron-forward-dotted", 60870),
        cylinderSplit: s("cylinder-split", 60871),
        cubeNodes: s("cube-nodes", 60872),
        clipboardList: s("clipboard-list", 60873),
        circleShine: s("circle-shine", 60874),
        chevronUpDown: s("chevron-up-down", 60875),
        cube: s("cube", 60876),
        telecom: s("telecom", 60877),
        micTwo: s("mic-two", 60878),
        hourglass: s("hourglass", 60879),
        todos: s("todos", 60880),
        hourglassTwo: s("hourglass-two", 60881),
        laptop: s("laptop", 60882),
        grep: s("grep", 60883),
        chevronDblLeft: s("chevron-dbl-left", 60884),
        chevronDblRight: s("chevron-dbl-right", 62237),
        squareAndPencil: s("square-and-pencil", 60885),
        doubleTerminal: s("double-terminal", 60886),
        sidebarLeft: s("sidebar-left", 60887),
        filesTwo: s("files-two", 60888),
        cursor: s("cursor", 60889),
        testIcon3: s("test-icon-3", 60890),
        testIcon4: s("test-icon-4", 60891),
        testIconic: s("test-iconic", 60892),
        compose: s("compose", 60893),
        composeTwo: s("compose-two", 60894),
        cursorOutlineTransparent: s("cursor-outline-transparent", 60895),
        cursorFrame: s("cursor-frame", 60896),
        cursorFrames: s("cursor-frames", 60897),
        cursorBigger: s("cursor-bigger", 60898),
        cursorBiggest: s("cursor-biggest", 60899),
        terminalFilled: s("terminal-filled", 60900),
        rectangleDashed: s("rectangle-dashed", 60901),
        squareArrow: s("square-arrow", 60902),
        unfoldVertical: s("unfold-vertical", 60903),
        unfoldDashed: s("unfold-dashed", 60904),
        foldDashed: s("fold-dashed", 60905),
        playwright: s("playwright", 60906),
        searchSparkle: s("search-sparkle", 60496),
        settingsRound: s("settings-round", 60497),
        panelRounded: s("panel-rounded", 60498),
        fileList: s("file-list", 60499),
        rectangleArrow: s("rectangle-arrow", 60500),
        rectangleGlobe: s("rectangle-globe", 60501),
        rules: s("rules", 60502),
        squaresArrow: s("squares-arrow", 60504),
        bugbot: s("bugbot", 60505),
        thinking: s("thinking", 60506),
        splitDashed: s("split-dashed", 60507),
        splitPanel: s("split-panel", 60508),
        splitFile: s("split-file", 62008),
        splitDash: s("split-dash", 62009),
        panelExpand: s("panel-expand", 62010),
        panelCollapse: s("panel-collapse", 62011),
        chatQuestion: s("chat-question", 62012),
        branchDot: s("branch-dot", 62013),
        gitBranchDot: s("git-branch-dot", 62014),
        alignTop: s("align-top", 62023),
        alignHcenter: s("align-hcenter", 62024),
        alignVcenter: s("align-vcenter", 62025),
        alignBottom: s("align-bottom", 62026),
        alignRight: s("align-right", 62027),
        alignLeft: s("align-left", 62028),
        angle: s("angle", 62029),
        alignBottomfill: s("align-bottomfill", 62030),
        alignHcenterfill: s("align-hcenterfill", 62031),
        alignLeftfill: s("align-leftfill", 62032),
        alignRightfill: s("align-rightfill", 62033),
        alignTopfill: s("align-topfill", 62034),
        alignVcenterfill: s("align-vcenterfill", 62035),
        freeform: s("freeform", 62036),
        layoutGrid: s("layout-grid", 62037),
        corners: s("corners", 62038),
        opacity: s("opacity", 62039),
        maximize: s("maximize", 62040),
        minimize: s("minimize", 62041),
        panelBottomon: s("panel-bottomon", 62042),
        panelBottomoff: s("panel-bottomoff", 62043),
        panelFrame: s("panel-frame", 62044),
        panelBottomOverlay: s("panel-bottom-overlay", 62045),
        panelRightOverlay: s("panel-right-overlay", 62046),
        panelLeftOverlay: s("panel-left-overlay", 62047),
        chatRounded: s("chat-rounded", 62048),
        fileRounded: s("file-rounded", 62049),
        judge: s("judge", 62050),
        minmize: s("minmize", 62051),
        borderAll: s("border-all", 62052),
        borderBottom: s("border-bottom", 62053),
        borderLeft: s("border-left", 62054),
        borderRight: s("border-right", 62055),
        borderTop: s("border-top", 62056),
        rotate: s("rotate", 62057),
        flipVertical: s("flip-vertical", 62058),
        flipHorizontal: s("flip-horizontal", 62059),
        padVertical: s("pad-vertical", 62060),
        padHorizontal: s("pad-horizontal", 62061),
        padTop: s("pad-top", 62062),
        padLeft: s("pad-left", 62063),
        padRight: s("pad-right", 62064),
        padBottom: s("pad-bottom", 62065),
        weight: s("weight", 62066),
        padAll: s("pad-all", 62067),
        absolutePosition: s("absolute-position", 62068),
        minWidth: s("min-width", 62069),
        maxWidth: s("max-width", 62070),
        hug: s("hug", 62071),
        fixed: s("fixed", 62072),
        removeWidth: s("remove-width", 62073),
        fillWidth: s("fill-width", 62074),
        letterSpacing: s("letter-spacing", 62075),
        lineHeight: s("line-height", 62076),
        leftAlign: s("left-align", 62077),
        centerAlign: s("center-align", 62078),
        rightAlign: s("right-align", 62079),
        textTop: s("text-top", 62080),
        textCenter: s("text-center", 62081),
        textBottom: s("text-bottom", 62082),
        layerBlur: s("layer-blur", 62083),
        backgroundBlur: s("background-blur", 62084),
        cornerTl: s("corner-tl", 62085),
        cornerTr: s("corner-tr", 62086),
        cornerBl: s("corner-bl", 62087),
        cornerBr: s("corner-br", 62088),
        flowCol: s("flow-col", 62089),
        flowRow: s("flow-row", 62090),
        gap: s("gap", 62091),
        gridCol: s("grid-col", 62092),
        gridRow: s("grid-row", 62093),
        sun: s("sun", 62094),
        unlink: s("unlink", 62095),
        arrowFilled: s("arrow-filled", 62096)
    },
    F1 = {
        dialogError: s("dialog-error", "error"),
        dialogWarning: s("dialog-warning", "warning"),
        dialogInfo: s("dialog-info", "info"),
        dialogClose: s("dialog-close", "close"),
        treeItemExpanded: s("tree-item-expanded", "chevron-down"),
        treeFilterOnTypeOn: s("tree-filter-on-type-on", "list-filter"),
        treeFilterOnTypeOff: s("tree-filter-on-type-off", "list-selection"),
        treeFilterClear: s("tree-filter-clear", "close"),
        treeItemLoading: s("tree-item-loading", "loading"),
        menuSelection: s("menu-selection", "check"),
        menuSubmenu: s("menu-submenu", "chevron-right"),
        menuBarMore: s("menubar-more", "more"),
        scrollbarButtonLeft: s("scrollbar-button-left", "triangle-left"),
        scrollbarButtonRight: s("scrollbar-button-right", "triangle-right"),
        scrollbarButtonUp: s("scrollbar-button-up", "triangle-up"),
        scrollbarButtonDown: s("scrollbar-button-down", "triangle-down"),
        toolBarMore: s("toolbar-more", "more"),
        quickInputBack: s("quick-input-back", "arrow-left"),
        dropDownButton: s("drop-down-button", 60084),
        symbolCustomColor: s("symbol-customcolor", 60252),
        exportIcon: s("export", 60332),
        workspaceUnspecified: s("workspace-unspecified", 60355),
        newLine: s("newline", 60394),
        gitFetch: s("git-fetch", 60445),
        lightbulbSparkleAutofix: s("lightbulb-sparkle-autofix", 60447),
        debugBreakpointPending: s("debug-breakpoint-pending", 60377),
        circles: s("circles", 62352)
    },
    _ = {
        ...z1,
        ...F1
    },
    Pn = class {
        constructor() {
            this._tokenizationSupports = new Map, this._factories = new Map, this._onDidChange = new X, this.onDidChange = this._onDidChange.event, this._colorMap = null
        }
        handleChange(t) {
            this._onDidChange.fire({
                changedLanguages: t,
                changedColorMap: !1
            })
        }
        register(t, e) {
            return this._tokenizationSupports.set(t, e), this.handleChange([t]), Ie(() => {
                this._tokenizationSupports.get(t) === e && (this._tokenizationSupports.delete(t), this.handleChange([t]))
            })
        }
        get(t) {
            return this._tokenizationSupports.get(t) || null
        }
        registerFactory(t, e) {
            this._factories.get(t)?.dispose();
            const r = new U1(this, t, e);
            this._factories.set(t, r);
            const n = new WeakRef(r);
            return Ie(() => {
                const i = this._factories.get(t),
                    o = n.deref();
                !i || !o || i !== o || (this._factories.delete(t), i.dispose())
            })
        }
        async getOrCreate(t) {
            const e = this.get(t);
            if (e) return e;
            const r = this._factories.get(t);
            return !r || r.isResolved ? null : (await r.resolve(), this.get(t))
        }
        isResolved(t) {
            if (this.get(t)) return !0;
            const r = this._factories.get(t);
            return !!(!r || r.isResolved)
        }
        setColorMap(t) {
            this._colorMap = t, this._onDidChange.fire({
                changedLanguages: Array.from(this._tokenizationSupports.keys()),
                changedColorMap: !0
            })
        }
        getColorMap() {
            return this._colorMap
        }
        getDefaultBackground() {
            return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null
        }
    },
    U1 = class extends ne {
        constructor(t, e, r) {
            super(), this._registry = t, this._languageId = e, this._factory = r, this._isDisposed = !1, this._resolvePromise = null, this._isResolved = !1
        }
        get isResolved() {
            return this._isResolved
        }
        dispose() {
            this._isDisposed = !0, super.dispose()
        }
        async resolve() {
            return this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise
        }
        async _create() {
            const t = await this._factory.tokenizationSupport;
            this._isResolved = !0, t && !this._isDisposed && this._register(this._registry.register(this._languageId, t))
        }
    },
    rr = class {
        constructor(t, e) {
            this.tokens = t, this.endState = e, this._encodedTokenizationResultBrand = void 0
        }
    },
    Mn;
(t => {
    const e = new Map;
    e.set(0, _.symbolMethod), e.set(1, _.symbolFunction), e.set(2, _.symbolConstructor), e.set(3, _.symbolField), e.set(4, _.symbolVariable), e.set(5, _.symbolClass), e.set(6, _.symbolStruct), e.set(7, _.symbolInterface), e.set(8, _.symbolModule), e.set(9, _.symbolProperty), e.set(10, _.symbolEvent), e.set(11, _.symbolOperator), e.set(12, _.symbolUnit), e.set(13, _.symbolValue), e.set(15, _.symbolEnum), e.set(14, _.symbolConstant), e.set(15, _.symbolEnum), e.set(16, _.symbolEnumMember), e.set(17, _.symbolKeyword), e.set(27, _.symbolSnippet), e.set(18, _.symbolText), e.set(19, _.symbolColor), e.set(20, _.symbolFile), e.set(21, _.symbolReference), e.set(22, _.symbolCustomColor), e.set(23, _.symbolFolder), e.set(24, _.symbolTypeParameter), e.set(25, _.account), e.set(26, _.issues);

    function r(a) {
        let l = e.get(a);
        return l || (console.info("No codicon found for CompletionItemKind " + a), l = _.symbolProperty), l
    }
    t.toIcon = r;

    function n(a) {
        switch (a) {
            case 0:
                return w(831, null);
            case 1:
                return w(832, null);
            case 2:
                return w(833, null);
            case 3:
                return w(834, null);
            case 4:
                return w(835, null);
            case 5:
                return w(836, null);
            case 6:
                return w(837, null);
            case 7:
                return w(838, null);
            case 8:
                return w(839, null);
            case 9:
                return w(840, null);
            case 10:
                return w(841, null);
            case 11:
                return w(842, null);
            case 12:
                return w(843, null);
            case 13:
                return w(844, null);
            case 14:
                return w(845, null);
            case 15:
                return w(846, null);
            case 16:
                return w(847, null);
            case 17:
                return w(848, null);
            case 18:
                return w(849, null);
            case 19:
                return w(850, null);
            case 20:
                return w(851, null);
            case 21:
                return w(852, null);
            case 22:
                return w(853, null);
            case 23:
                return w(854, null);
            case 24:
                return w(855, null);
            case 25:
                return w(856, null);
            case 26:
                return w(857, null);
            case 27:
                return w(858, null);
            default:
                return ""
        }
    }
    t.toLabel = n;
    const i = new Map;
    i.set("method", 0), i.set("function", 1), i.set("constructor", 2), i.set("field", 3), i.set("variable", 4), i.set("class", 5), i.set("struct", 6), i.set("interface", 7), i.set("module", 8), i.set("property", 9), i.set("event", 10), i.set("operator", 11), i.set("unit", 12), i.set("value", 13), i.set("constant", 14), i.set("enum", 15), i.set("enum-member", 16), i.set("enumMember", 16), i.set("keyword", 17), i.set("snippet", 27), i.set("text", 18), i.set("color", 19), i.set("file", 20), i.set("reference", 21), i.set("customcolor", 22), i.set("folder", 23), i.set("type-parameter", 24), i.set("typeParameter", 24), i.set("account", 25), i.set("issue", 26);

    function o(a, l) {
        let u = i.get(a);
        return typeof u > "u" && !l && (u = 9), u
    }
    t.fromString = o
})(Mn || (Mn = {}));
var ta = {
        17: w(859, null),
        16: w(860, null),
        4: w(861, null),
        13: w(862, null),
        8: w(863, null),
        9: w(864, null),
        21: w(865, null),
        23: w(866, null),
        7: w(867, null),
        0: w(868, null),
        11: w(869, null),
        10: w(870, null),
        19: w(871, null),
        5: w(872, null),
        1: w(873, null),
        2: w(874, null),
        20: w(875, null),
        15: w(876, null),
        18: w(877, null),
        24: w(878, null),
        3: w(879, null),
        6: w(880, null),
        14: w(881, null),
        22: w(882, null),
        25: w(883, null),
        12: w(884, null)
    },
    zn;
(t => {
    const e = new Map;
    e.set(0, _.symbolFile), e.set(1, _.symbolModule), e.set(2, _.symbolNamespace), e.set(3, _.symbolPackage), e.set(4, _.symbolClass), e.set(5, _.symbolMethod), e.set(6, _.symbolProperty), e.set(7, _.symbolField), e.set(8, _.symbolConstructor), e.set(9, _.symbolEnum), e.set(10, _.symbolInterface), e.set(11, _.symbolFunction), e.set(12, _.symbolVariable), e.set(13, _.symbolConstant), e.set(14, _.symbolString), e.set(15, _.symbolNumber), e.set(16, _.symbolBoolean), e.set(17, _.symbolArray), e.set(18, _.symbolObject), e.set(19, _.symbolKey), e.set(20, _.symbolNull), e.set(21, _.symbolEnumMember), e.set(22, _.symbolStruct), e.set(23, _.symbolEvent), e.set(24, _.symbolOperator), e.set(25, _.symbolTypeParameter);

    function r(o) {
        let a = e.get(o);
        return a || (console.info("No codicon found for SymbolKind " + o), a = _.symbolProperty), a
    }
    t.toIcon = r;
    const n = new Map;
    n.set(0, 20), n.set(1, 8), n.set(2, 8), n.set(3, 8), n.set(4, 5), n.set(5, 0), n.set(6, 9), n.set(7, 3), n.set(8, 2), n.set(9, 15), n.set(10, 7), n.set(11, 1), n.set(12, 4), n.set(13, 14), n.set(14, 18), n.set(15, 13), n.set(16, 13), n.set(17, 13), n.set(18, 13), n.set(19, 17), n.set(20, 13), n.set(21, 16), n.set(22, 6), n.set(23, 10), n.set(24, 11), n.set(25, 24);

    function i(o) {
        let a = n.get(o);
        return a === void 0 && (console.info("No completion kind found for SymbolKind " + o), a = 20), a
    }
    t.toCompletionKind = i
})(zn || (zn = {}));
var Fe = class Qe {
    constructor(e) {
        this.value = e
    }
    static fromValue(e) {
        switch (e) {
            case "comment":
                return Qe.Comment;
            case "imports":
                return Qe.Imports;
            case "region":
                return Qe.Region
        }
        return new Qe(e)
    }
};
Fe.Comment = new Fe("comment"), Fe.Imports = new Fe("imports"), Fe.Region = new Fe("region");
var Fn;
(t => {
    function e(r) {
        return !r || typeof r != "object" ? !1 : typeof r.id == "string" && typeof r.title == "string"
    }
    t.is = e
})(Fn || (Fn = {}));
var ra = new Pn,
    na = new Pn,
    $1 = new class {
        clone() {
            return this
        }
        equals(t) {
            return this === t
        }
    };

function B1(t, e) {
    const r = new Uint32Array(2);
    return r[0] = 0, r[1] = (t << 0 | 0 | 0 | 32768 | 2 << 24) >>> 0, new rr(r, e === null ? $1 : e)
}
var j1 = class {
    constructor(t) {
        this._default = t, this._store = []
    }
    get(t) {
        return t < this._store.length ? this._store[t] : this._default
    }
    set(t, e) {
        for (; t >= this._store.length;) this._store[this._store.length] = this._default;
        this._store[t] = e
    }
    replace(t, e, r) {
        if (t >= this._store.length) return;
        if (e === 0) {
            this.insert(t, r);
            return
        } else if (r === 0) {
            this.delete(t, e);
            return
        }
        const n = this._store.slice(0, t),
            i = this._store.slice(t + e),
            o = q1(r, this._default);
        this._store = n.concat(o, i)
    }
    delete(t, e) {
        e === 0 || t >= this._store.length || this._store.splice(t, e)
    }
    insert(t, e) {
        if (e === 0 || t >= this._store.length) return;
        const r = [];
        for (let n = 0; n < e; n++) r[n] = this._default;
        this._store = Ar(this._store, t, r)
    }
};

function q1(t, e) {
    const r = [];
    for (let n = 0; n < t; n++) r[n] = e;
    return r
}
var ke = class {
        static getLanguageId(t) {
            return (t & 255) >>> 0
        }
        static getTokenType(t) {
            return (t & 768) >>> 8
        }
        static containsBalancedBrackets(t) {
            return (t & 1024) !== 0
        }
        static getFontStyle(t) {
            return (t & 30720) >>> 11
        }
        static getForeground(t) {
            return (t & 16744448) >>> 15
        }
        static getBackground(t) {
            return (t & 4278190080) >>> 24
        }
        static getClassNameFromMetadata(t) {
            let r = "mtk" + this.getForeground(t);
            const n = this.getFontStyle(t);
            return n & 1 && (r += " mtki"), n & 2 && (r += " mtkb"), n & 4 && (r += " mtku"), n & 8 && (r += " mtks"), r
        }
        static getInlineStyleFromMetadata(t, e) {
            const r = this.getForeground(t),
                n = this.getFontStyle(t);
            let i = `color: ${e[r]};`;
            n & 1 && (i += "font-style: italic;"), n & 2 && (i += "font-weight: bold;");
            let o = "";
            return n & 4 && (o += " underline"), n & 8 && (o += " line-through"), o && (i += `text-decoration:${o};`), i
        }
        static getPresentationFromMetadata(t) {
            const e = this.getForeground(t),
                r = this.getFontStyle(t);
            return {
                foreground: e,
                italic: !!(r & 1),
                bold: !!(r & 2),
                underline: !!(r & 4),
                strikethrough: !!(r & 8)
            }
        }
    },
    V1 = class wt {
        constructor(e) {
            this._tokenInfo = e
        }
        static fromLineTokens(e) {
            const r = [];
            for (let n = 0; n < e.getCount(); n++) r.push(new nr(e.getEndOffset(n) - e.getStartOffset(n), e.getMetadata(n)));
            return wt.create(r)
        }
        static create(e) {
            return new wt(e)
        }
        toLineTokens(e, r) {
            return _t.createFromTextAndMetadata(this.map((n, i) => ({
                text: n.substring(e),
                metadata: i.metadata
            })), r)
        }
        forEach(e) {
            let r = 0;
            for (const n of this._tokenInfo) {
                const i = new G(r, r + n.length);
                e(i, n), r += n.length
            }
        }
        map(e) {
            const r = [];
            let n = 0;
            for (const i of this._tokenInfo) {
                const o = new G(n, n + i.length);
                r.push(e(o, i)), n += i.length
            }
            return r
        }
        slice(e) {
            const r = [];
            let n = 0;
            for (const i of this._tokenInfo) {
                const o = n,
                    a = o + i.length;
                if (a > e.start) {
                    if (o >= e.endExclusive) break;
                    const l = Math.max(0, e.start - o),
                        u = Math.max(0, a - e.endExclusive);
                    r.push(new nr(i.length - l - u, i.metadata))
                }
                n += i.length
            }
            return wt.create(r)
        }
    },
    nr = class {
        constructor(t, e) {
            this.length = t, this.metadata = e
        }
    },
    W1 = class {
        constructor() {
            this._tokens = []
        }
        add(t, e) {
            this._tokens.push(new nr(t, e))
        }
        build() {
            return V1.create(this._tokens)
        }
    },
    Un = class Ee {
        constructor(e, r, n) {
            this._lineTokensBrand = void 0, (e.length > 1 ? e[e.length - 2] : 0) !== r.length && ce(new Error("Token length and text length do not match!")), this._tokens = e, this._tokensCount = this._tokens.length >>> 1, this._text = r, this.languageIdCodec = n
        }
        static createEmpty(e, r) {
            const n = Ee.defaultTokenMetadata,
                i = new Uint32Array(2);
            return i[0] = e.length, i[1] = n, new Ee(i, e, r)
        }
        static createFromTextAndMetadata(e, r) {
            let n = 0,
                i = "";
            const o = new Array;
            for (const {
                    text: a,
                    metadata: l
                }
                of e) o.push(n + a.length, l), n += a.length, i += a;
            return new Ee(new Uint32Array(o), i, r)
        }
        static convertToEndOffset(e, r) {
            const i = (e.length >>> 1) - 1;
            for (let o = 0; o < i; o++) e[o << 1] = e[o + 1 << 1];
            e[i << 1] = r
        }
        static findIndexInTokensArray(e, r) {
            if (e.length <= 2) return 0;
            let n = 0,
                i = (e.length >>> 1) - 1;
            for (; n < i;) {
                const o = n + Math.floor((i - n) / 2),
                    a = e[o << 1];
                if (a === r) return o + 1;
                a < r ? n = o + 1 : a > r && (i = o)
            }
            return n
        }
        equals(e) {
            return e instanceof Ee ? this.slicedEquals(e, 0, this._tokensCount) : !1
        }
        slicedEquals(e, r, n) {
            if (this._text !== e._text || this._tokensCount !== e._tokensCount) return !1;
            const i = r << 1,
                o = i + (n << 1);
            for (let a = i; a < o; a++)
                if (this._tokens[a] !== e._tokens[a]) return !1;
            return !0
        }
        getLineContent() {
            return this._text
        }
        getCount() {
            return this._tokensCount
        }
        getStartOffset(e) {
            return e > 0 ? this._tokens[e - 1 << 1] : 0
        }
        getMetadata(e) {
            return this._tokens[(e << 1) + 1]
        }
        getLanguageId(e) {
            const r = this._tokens[(e << 1) + 1],
                n = ke.getLanguageId(r);
            return this.languageIdCodec.decodeLanguageId(n)
        }
        getStandardTokenType(e) {
            const r = this._tokens[(e << 1) + 1];
            return ke.getTokenType(r)
        }
        getForeground(e) {
            const r = this._tokens[(e << 1) + 1];
            return ke.getForeground(r)
        }
        getClassName(e) {
            const r = this._tokens[(e << 1) + 1];
            return ke.getClassNameFromMetadata(r)
        }
        getInlineStyle(e, r) {
            const n = this._tokens[(e << 1) + 1];
            return ke.getInlineStyleFromMetadata(n, r)
        }
        getPresentation(e) {
            const r = this._tokens[(e << 1) + 1];
            return ke.getPresentationFromMetadata(r)
        }
        getEndOffset(e) {
            return this._tokens[e << 1]
        }
        findTokenIndexAtOffset(e) {
            return Ee.findIndexInTokensArray(this._tokens, e)
        }
        inflate() {
            return this
        }
        sliceAndInflate(e, r, n) {
            return new G1(this, e, r, n)
        }
        sliceZeroCopy(e) {
            return this.sliceAndInflate(e.start, e.endExclusive, 0)
        }
        withInserted(e) {
            if (e.length === 0) return this;
            let r = 0,
                n = 0,
                i = "";
            const o = new Array;
            let a = 0;
            for (;;) {
                const l = r < this._tokensCount ? this._tokens[r << 1] : -1,
                    u = n < e.length ? e[n] : null;
                if (l !== -1 && (u === null || l <= u.offset)) {
                    i += this._text.substring(a, l);
                    const c = this._tokens[(r << 1) + 1];
                    o.push(i.length, c), r++, a = l
                } else if (u) {
                    if (u.offset > a) {
                        i += this._text.substring(a, u.offset);
                        const c = this._tokens[(r << 1) + 1];
                        o.push(i.length, c), a = u.offset
                    }
                    i += u.text, o.push(i.length, u.tokenMetadata), n++
                } else break
            }
            return new Ee(new Uint32Array(o), i, this.languageIdCodec)
        }
        getTokensInRange(e) {
            const r = new W1,
                n = this.findTokenIndexAtOffset(e.start),
                i = this.findTokenIndexAtOffset(e.endExclusive);
            for (let o = n; o <= i; o++) {
                const l = new G(this.getStartOffset(o), this.getEndOffset(o)).intersectionLength(e);
                l > 0 && r.add(l, this.getMetadata(o))
            }
            return r.build()
        }
        getTokenText(e) {
            const r = this.getStartOffset(e),
                n = this.getEndOffset(e);
            return this._text.substring(r, n)
        }
        forEach(e) {
            const r = this.getCount();
            for (let n = 0; n < r; n++) e(n)
        }
        extractObject() {
            return {
                tokens: this._tokens,
                text: this._text
            }
        }
        toString() {
            let e = "";
            return this.forEach(r => {
                e += `[${this.getTokenText(r)}]{${this.getClassName(r)}}`
            }), e
        }
    };
Un.defaultTokenMetadata = (32768 | 2 << 24) >>> 0;
var _t = Un,
    G1 = class Yn {
        constructor(e, r, n, i) {
            this._source = e, this._startOffset = r, this._endOffset = n, this._deltaOffset = i, this._firstTokenIndex = e.findTokenIndexAtOffset(r), this.languageIdCodec = e.languageIdCodec, this._tokensCount = 0;
            for (let o = this._firstTokenIndex, a = e.getCount(); o < a && !(e.getStartOffset(o) >= n); o++) this._tokensCount++
        }
        getMetadata(e) {
            return this._source.getMetadata(this._firstTokenIndex + e)
        }
        getLanguageId(e) {
            return this._source.getLanguageId(this._firstTokenIndex + e)
        }
        getLineContent() {
            return this._source.getLineContent().substring(this._startOffset, this._endOffset)
        }
        equals(e) {
            return e instanceof Yn ? this._startOffset === e._startOffset && this._endOffset === e._endOffset && this._deltaOffset === e._deltaOffset && this._source.slicedEquals(e._source, this._firstTokenIndex, this._tokensCount) : !1
        }
        getCount() {
            return this._tokensCount
        }
        getStandardTokenType(e) {
            return this._source.getStandardTokenType(this._firstTokenIndex + e)
        }
        getForeground(e) {
            return this._source.getForeground(this._firstTokenIndex + e)
        }
        getEndOffset(e) {
            const r = this._source.getEndOffset(this._firstTokenIndex + e);
            return Math.min(this._endOffset, r) - this._startOffset + this._deltaOffset
        }
        getClassName(e) {
            return this._source.getClassName(this._firstTokenIndex + e)
        }
        getInlineStyle(e, r) {
            return this._source.getInlineStyle(this._firstTokenIndex + e, r)
        }
        getPresentation(e) {
            return this._source.getPresentation(this._firstTokenIndex + e)
        }
        findTokenIndexAtOffset(e) {
            return this._source.findTokenIndexAtOffset(e + this._startOffset - this._deltaOffset) - this._firstTokenIndex
        }
        getTokenText(e) {
            const r = this._firstTokenIndex + e,
                n = this._source.getStartOffset(r),
                i = this._source.getEndOffset(r);
            let o = this._source.getTokenText(r);
            return n < this._startOffset && (o = o.substring(this._startOffset - n)), i > this._endOffset && (o = o.substring(0, o.length - (i - this._endOffset))), o
        }
        forEach(e) {
            for (let r = 0; r < this.getCount(); r++) e(r)
        }
    },
    Le = new Uint32Array(0).buffer,
    me = class hr {
        static deleteBeginning(e, r) {
            return e === null || e === Le ? e : hr.delete(e, 0, r)
        }
        static deleteEnding(e, r) {
            if (e === null || e === Le) return e;
            const n = Ve(e),
                i = n[n.length - 2];
            return hr.delete(e, r, i)
        }
        static delete(e, r, n) {
            if (e === null || e === Le || r === n) return e;
            const i = Ve(e),
                o = i.length >>> 1;
            if (r === 0 && i[i.length - 2] === n) return Le;
            const a = _t.findIndexInTokensArray(i, r),
                l = a > 0 ? i[a - 1 << 1] : 0,
                u = i[a << 1];
            if (n < u) {
                const v = n - r;
                for (let E = a; E < o; E++) i[E << 1] -= v;
                return e
            }
            let c, h;
            l !== r ? (i[a << 1] = r, c = a + 1 << 1, h = r) : (c = a << 1, h = l);
            const d = n - r;
            for (let v = a + 1; v < o; v++) {
                const E = i[v << 1] - d;
                E > h && (i[c++] = E, i[c++] = i[(v << 1) + 1], h = E)
            }
            if (c === i.length) return e;
            const b = new Uint32Array(c);
            return b.set(i.subarray(0, c), 0), b.buffer
        }
        static append(e, r) {
            if (r === Le) return e;
            if (e === Le) return r;
            if (e === null) return e;
            if (r === null) return null;
            const n = Ve(e),
                i = Ve(r),
                o = i.length >>> 1,
                a = new Uint32Array(n.length + i.length);
            a.set(n, 0);
            let l = n.length;
            const u = n[n.length - 2];
            for (let c = 0; c < o; c++) a[l++] = i[c << 1] + u, a[l++] = i[(c << 1) + 1];
            return a.buffer
        }
        static insert(e, r, n) {
            if (e === null || e === Le) return e;
            const i = Ve(e),
                o = i.length >>> 1;
            let a = _t.findIndexInTokensArray(i, r);
            a > 0 && i[a - 1 << 1] === r && a--;
            for (let l = a; l < o; l++) i[l << 1] += n;
            return e
        }
    };

function Ve(t) {
    return t instanceof Uint32Array ? t : new Uint32Array(t)
}
var $n = class Xn {
        static deserialize(e, r, n) {
            const i = new Uint32Array(e.buffer),
                o = ht(e, r);
            r += 4;
            const a = ht(e, r);
            r += 4;
            const l = [];
            for (let u = 0; u < a; u++) {
                const c = ht(e, r);
                r += 4, l.push(i.subarray(r / 4, r / 4 + c / 4)), r += c
            }
            return n.push(new Xn(o, l)), r
        }
        get startLineNumber() {
            return this._startLineNumber
        }
        get endLineNumber() {
            return this._startLineNumber + this._tokens.length - 1
        }
        constructor(e, r) {
            this._startLineNumber = e, this._tokens = r
        }
        getLineRange() {
            return new Ce(this._startLineNumber, this._startLineNumber + this._tokens.length)
        }
        getLineTokens(e) {
            return this._tokens[e - this._startLineNumber]
        }
        appendLineTokens(e) {
            this._tokens.push(e)
        }
        serializeSize() {
            let e = 0;
            e += 4, e += 4;
            for (let r = 0; r < this._tokens.length; r++) {
                const n = this._tokens[r];
                if (!(n instanceof Uint32Array)) throw new Error("Not supported!");
                e += 4, e += n.byteLength
            }
            return e
        }
        serialize(e, r) {
            ft(e, this._startLineNumber, r), r += 4, ft(e, this._tokens.length, r), r += 4;
            for (let n = 0; n < this._tokens.length; n++) {
                const i = this._tokens[n];
                if (!(i instanceof Uint32Array)) throw new Error("Not supported!");
                ft(e, i.byteLength, r), r += 4, e.set(new Uint8Array(i.buffer), r), r += i.byteLength
            }
            return r
        }
        applyEdit(e, r) {
            const [n, i] = tr(r);
            this._acceptDeleteRange(e), this._acceptInsertText(new bt(e.startLineNumber, e.startColumn), n, i)
        }
        _acceptDeleteRange(e) {
            if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) return;
            const r = e.startLineNumber - this._startLineNumber,
                n = e.endLineNumber - this._startLineNumber;
            if (n < 0) {
                const i = n - r;
                this._startLineNumber -= i;
                return
            }
            if (!(r >= this._tokens.length)) {
                if (r < 0 && n >= this._tokens.length) {
                    this._startLineNumber = 0, this._tokens = [];
                    return
                }
                if (r === n) {
                    this._tokens[r] = me.delete(this._tokens[r], e.startColumn - 1, e.endColumn - 1);
                    return
                }
                if (r >= 0)
                    if (this._tokens[r] = me.deleteEnding(this._tokens[r], e.startColumn - 1), n < this._tokens.length) {
                        const i = me.deleteBeginning(this._tokens[n], e.endColumn - 1);
                        this._tokens[r] = me.append(this._tokens[r], i), this._tokens.splice(r + 1, n - r)
                    } else this._tokens[r] = me.append(this._tokens[r], null), this._tokens = this._tokens.slice(0, r + 1);
                else {
                    const i = -r;
                    this._startLineNumber -= i, this._tokens[n] = me.deleteBeginning(this._tokens[n], e.endColumn - 1), this._tokens = this._tokens.slice(n)
                }
            }
        }
        _acceptInsertText(e, r, n) {
            if (r === 0 && n === 0) return;
            const i = e.lineNumber - this._startLineNumber;
            if (i < 0) {
                this._startLineNumber += r;
                return
            }
            if (!(i >= this._tokens.length)) {
                if (r === 0) {
                    this._tokens[i] = me.insert(this._tokens[i], e.column - 1, n);
                    return
                }
                this._tokens[i] = me.deleteEnding(this._tokens[i], e.column - 1), this._tokens[i] = me.insert(this._tokens[i], e.column - 1, n), this._insertLines(e.lineNumber, r)
            }
        }
        _insertLines(e, r) {
            if (r === 0) return;
            const n = [];
            for (let i = 0; i < r; i++) n[i] = null;
            this._tokens = Ar(this._tokens, e, n)
        }
    },
    H1 = class {
        static deserialize(t) {
            let e = 0;
            const r = ht(t, e);
            e += 4;
            const n = [];
            for (let i = 0; i < r; i++) e = $n.deserialize(t, e, n);
            return n
        }
        constructor() {
            this._tokens = []
        }
        add(t, e) {
            if (this._tokens.length > 0) {
                const r = this._tokens[this._tokens.length - 1];
                if (r.endLineNumber + 1 === t) {
                    r.appendLineTokens(e);
                    return
                }
            }
            this._tokens.push(new $n(t, [e]))
        }
        finalize() {
            return this._tokens
        }
        serialize() {
            const t = this._serializeSize(),
                e = new Uint8Array(t);
            return this._serialize(e), e
        }
        _serializeSize() {
            let t = 0;
            t += 4;
            for (let e = 0; e < this._tokens.length; e++) t += this._tokens[e].serializeSize();
            return t
        }
        _serialize(t) {
            let e = 0;
            ft(t, this._tokens.length, e), e += 4;
            for (let r = 0; r < this._tokens.length; r++) e = this._tokens[r].serialize(t, e)
        }
    },
    K1 = class {
        constructor(t, e) {
            this.tokenizationSupport = e, this.initialState = this.tokenizationSupport.getInitialState(), this.store = new Q1(t)
        }
        getStartState(t) {
            return this.store.getStartState(t, this.initialState)
        }
        getFirstInvalidLine() {
            return this.store.getFirstInvalidLine(this.initialState)
        }
    },
    Q1 = class {
        constructor(t) {
            this.lineCount = t, this._tokenizationStateStore = new J1, this._invalidEndStatesLineNumbers = new Z1, this._invalidEndStatesLineNumbers.addRange(new G(1, t + 1))
        }
        getEndState(t) {
            return this._tokenizationStateStore.getEndState(t)
        }
        setEndState(t, e) {
            if (!e) throw new Z("Cannot set null/undefined state");
            this._invalidEndStatesLineNumbers.delete(t);
            const r = this._tokenizationStateStore.setEndState(t, e);
            return r && t < this.lineCount && this._invalidEndStatesLineNumbers.addRange(new G(t + 1, t + 2)), r
        }
        acceptChange(t, e) {
            this.lineCount += e - t.length, this._tokenizationStateStore.acceptChange(t, e), this._invalidEndStatesLineNumbers.addRangeAndResize(new G(t.startLineNumber, t.endLineNumberExclusive), e)
        }
        acceptChanges(t) {
            for (const e of t) {
                const [r] = tr(e.text);
                this.acceptChange(new Ce(e.range.startLineNumber, e.range.endLineNumber + 1), r + 1)
            }
        }
        invalidateEndStateRange(t) {
            this._invalidEndStatesLineNumbers.addRange(new G(t.startLineNumber, t.endLineNumberExclusive))
        }
        getFirstInvalidEndStateLineNumber() {
            return this._invalidEndStatesLineNumbers.min
        }
        getFirstInvalidEndStateLineNumberOrMax() {
            return this.getFirstInvalidEndStateLineNumber() || Number.MAX_SAFE_INTEGER
        }
        allStatesValid() {
            return this._invalidEndStatesLineNumbers.min === null
        }
        getStartState(t, e) {
            return t === 1 ? e : this.getEndState(t - 1)
        }
        getFirstInvalidLine(t) {
            const e = this.getFirstInvalidEndStateLineNumber();
            if (e === null) return null;
            const r = this.getStartState(e, t);
            if (!r) throw new Z("Start state must be defined");
            return {
                lineNumber: e,
                startState: r
            }
        }
    },
    J1 = class {
        constructor() {
            this._lineEndStates = new j1(null)
        }
        getEndState(t) {
            return this._lineEndStates.get(t)
        }
        setEndState(t, e) {
            const r = this._lineEndStates.get(t);
            return r && r.equals(e) ? !1 : (this._lineEndStates.set(t, e), !0)
        }
        acceptChange(t, e) {
            let r = t.length;
            e > 0 && r > 0 && (r--, e--), this._lineEndStates.replace(t.startLineNumber, r, e)
        }
        acceptChanges(t) {
            for (const e of t) {
                const [r] = tr(e.text);
                this.acceptChange(new Ce(e.range.startLineNumber, e.range.endLineNumber + 1), r + 1)
            }
        }
    },
    Z1 = class {
        constructor() {
            this._ranges = []
        }
        getRanges() {
            return this._ranges
        }
        get min() {
            return this._ranges.length === 0 ? null : this._ranges[0].start
        }
        removeMin() {
            if (this._ranges.length === 0) return null;
            const t = this._ranges[0];
            return t.start + 1 === t.endExclusive ? this._ranges.shift() : this._ranges[0] = new G(t.start + 1, t.endExclusive), t.start
        }
        delete(t) {
            const e = this._ranges.findIndex(r => r.contains(t));
            if (e !== -1) {
                const r = this._ranges[e];
                r.start === t ? r.endExclusive === t + 1 ? this._ranges.splice(e, 1) : this._ranges[e] = new G(t + 1, r.endExclusive) : r.endExclusive === t + 1 ? this._ranges[e] = new G(r.start, t) : this._ranges.splice(e, 1, new G(r.start, t), new G(t + 1, r.endExclusive))
            }
        }
        addRange(t) {
            G.addRange(t, this._ranges)
        }
        addRangeAndResize(t, e) {
            let r = 0;
            for (; !(r >= this._ranges.length || t.start <= this._ranges[r].endExclusive);) r++;
            let n = r;
            for (; !(n >= this._ranges.length || t.endExclusive < this._ranges[n].start);) n++;
            const i = e - t.length;
            for (let o = n; o < this._ranges.length; o++) this._ranges[o] = this._ranges[o].delta(i);
            if (r === n) {
                const o = new G(t.start, t.start + e);
                o.isEmpty || this._ranges.splice(r, 0, o)
            } else {
                const o = Math.min(t.start, this._ranges[r].start),
                    a = Math.max(t.endExclusive, this._ranges[n - 1].endExclusive),
                    l = new G(o, a + i);
                l.isEmpty ? this._ranges.splice(r, n - r) : this._ranges.splice(r, n - r, l)
            }
        }
        toString() {
            return this._ranges.map(t => t.toString()).join(" + ")
        }
    },
    Y1 = class extends ne {
        constructor(t, e, r, n, i, o, a) {
            super(), this._grammar = t, this._initialState = e, this._containsEmbeddedLanguages = r, this._createBackgroundTokenizer = n, this._backgroundTokenizerShouldOnlyVerifyTokens = i, this._reportTokenizationTime = o, this._reportSlowTokenization = a, this._seenLanguages = [], this._onDidEncounterLanguage = this._register(new X), this.onDidEncounterLanguage = this._onDidEncounterLanguage.event
        }
        get backgroundTokenizerShouldOnlyVerifyTokens() {
            return this._backgroundTokenizerShouldOnlyVerifyTokens()
        }
        getInitialState() {
            return this._initialState
        }
        tokenize(t, e, r) {
            throw new Error("Not supported!")
        }
        createBackgroundTokenizer(t, e) {
            if (this._createBackgroundTokenizer) return this._createBackgroundTokenizer(t, e)
        }
        tokenizeEncoded(t, e, r) {
            const n = Math.random() * 1e4 < 1,
                i = this._reportSlowTokenization || n,
                o = i ? new Br(!0) : void 0,
                a = this._grammar.tokenizeLine2(t, r, 500);
            if (i) {
                const u = o.elapsed();
                (n || u > 32) && this._reportTokenizationTime(u, t.length, n)
            }
            if (a.stoppedEarly) return console.warn(`Time limit reached when tokenizing line: ${t.substring(0,100)}`), new rr(a.tokens, r);
            if (this._containsEmbeddedLanguages) {
                const u = this._seenLanguages,
                    c = a.tokens;
                for (let h = 0, d = c.length >>> 1; h < d; h++) {
                    const b = c[(h << 1) + 1],
                        v = ke.getLanguageId(b);
                    u[v] || (u[v] = !0, this._onDidEncounterLanguage.fire(v))
                }
            }
            let l;
            return r.equals(a.ruleStack) ? l = r : l = a.ruleStack, new rr(a.tokens, l)
        }
    },
    X1 = class extends ne {
        constructor(t, e, r, n) {
            super(), this._encodedLanguageId = t, this._actual = e, this._maxTokenizationLineLength = n, this._register(Sn(this._maxTokenizationLineLength)), this._register(r)
        }
        get backgroundTokenizerShouldOnlyVerifyTokens() {
            return this._actual.backgroundTokenizerShouldOnlyVerifyTokens
        }
        getInitialState() {
            return this._actual.getInitialState()
        }
        tokenize(t, e, r) {
            throw new Error("Not supported!")
        }
        tokenizeEncoded(t, e, r) {
            return t.length >= this._maxTokenizationLineLength.get() ? B1(this._encodedLanguageId, r) : this._actual.tokenizeEncoded(t, e, r)
        }
        createBackgroundTokenizer(t, e) {
            if (this._actual.createBackgroundTokenizer) return this._actual.createBackgroundTokenizer(t, e)
        }
    },
    eo = class extends M1 {
        constructor(t, e, r, n, i, o, a, l) {
            super(t, e, r, n), this._host = i, this._languageId = o, this._encodedLanguageId = a, this._tokenizerWithStateStore = null, this._isDisposed = !1, this._maxTokenizationLineLength = b1(this, -1), this._tokenizeDebouncer = new s1(() => this._tokenize(), 10), this._maxTokenizationLineLength.set(l, void 0), this._resetTokenization()
        }
        dispose() {
            this._isDisposed = !0, super.dispose()
        }
        onLanguageId(t, e) {
            this._languageId = t, this._encodedLanguageId = e, this._resetTokenization()
        }
        onEvents(t) {
            super.onEvents(t), this._tokenizerWithStateStore?.store.acceptChanges(t.changes), this._tokenizeDebouncer.schedule()
        }
        acceptMaxTokenizationLineLength(t) {
            this._maxTokenizationLineLength.set(t, void 0)
        }
        retokenize(t, e) {
            this._tokenizerWithStateStore && (this._tokenizerWithStateStore.store.invalidateEndStateRange(new Ce(t, e)), this._tokenizeDebouncer.schedule())
        }
        async _resetTokenization() {
            this._tokenizerWithStateStore = null;
            const t = this._languageId,
                e = this._encodedLanguageId,
                r = await this._host.getOrCreateGrammar(t, e);
            if (!(this._isDisposed || t !== this._languageId || e !== this._encodedLanguageId || !r)) {
                if (r.grammar) {
                    const n = new X1(this._encodedLanguageId, new Y1(r.grammar, r.initialState, !1, void 0, () => !1, (i, o, a) => {
                        this._host.reportTokenizationTime(i, t, r.sourceExtensionId, o, a)
                    }, !1), ne.None, this._maxTokenizationLineLength);
                    this._tokenizerWithStateStore = new K1(this._lines.length, n)
                } else this._tokenizerWithStateStore = null;
                this._tokenize()
            }
        }
        async _tokenize() {
            if (this._isDisposed || !this._tokenizerWithStateStore) return;
            if (!this._diffStateStacksRefEqFn) {
                const {
                    diffStateStacksRefEq: e
                } = await Vt("vscode-textmate", "release/main.js");
                this._diffStateStacksRefEqFn = e
            }
            const t = new Date().getTime();
            for (;;) {
                let e = 0;
                const r = new H1,
                    n = new to;
                for (;;) {
                    const a = this._tokenizerWithStateStore.getFirstInvalidLine();
                    if (a === null || e > 200) break;
                    e++;
                    const l = this._lines[a.lineNumber - 1],
                        u = this._tokenizerWithStateStore.tokenizationSupport.tokenizeEncoded(l, !0, a.startState);
                    if (this._tokenizerWithStateStore.store.setEndState(a.lineNumber, u.endState)) {
                        const h = this._diffStateStacksRefEqFn(a.startState, u.endState);
                        n.setState(a.lineNumber, h)
                    } else n.setState(a.lineNumber, null);
                    if (_t.convertToEndOffset(u.tokens, l.length), r.add(a.lineNumber, u.tokens), new Date().getTime() - t > 20) break
                }
                if (e === 0) break;
                const i = n.getStateDeltas();
                if (this._host.setTokensAndStates(this._versionId, r.serialize(), i), new Date().getTime() - t > 20) {
                    Cr(() => this._tokenize());
                    return
                }
            }
        }
    },
    to = class {
        constructor() {
            this._lastStartLineNumber = -1, this._stateDeltas = []
        }
        setState(t, e) {
            t === this._lastStartLineNumber + 1 ? this._stateDeltas[this._stateDeltas.length - 1].stateDeltas.push(e) : this._stateDeltas.push({
                startLineNumber: t,
                stateDeltas: [e]
            }), this._lastStartLineNumber = t
        }
        getStateDeltas() {
            return this._stateDeltas
        }
    },
    Bn = class fr {
        static getChannel(e) {
            return e.getChannel(fr.CHANNEL_NAME)
        }
        static setChannel(e, r) {
            e.setChannel(fr.CHANNEL_NAME, r)
        }
    };
Bn.CHANNEL_NAME = "textMateWorkerHost";
var ro = Bn;

function no(t) {
    return new so(t)
}
var so = class {
        constructor(t) {
            this._models = new Map, this._grammarCache = [], this._grammarFactory = Promise.resolve(null), this._host = ro.getChannel(t)
        }
        async $init(t) {
            const e = t.grammarDefinitions.map(r => ({
                location: Y.revive(r.location),
                language: r.language,
                scopeName: r.scopeName,
                embeddedLanguages: r.embeddedLanguages,
                tokenTypes: r.tokenTypes,
                injectTo: r.injectTo,
                balancedBracketSelectors: r.balancedBracketSelectors,
                unbalancedBracketSelectors: r.unbalancedBracketSelectors,
                sourceExtensionId: r.sourceExtensionId
            }));
            this._grammarFactory = this._loadTMGrammarFactory(e, t.onigurumaWASMUri)
        }
        async _loadTMGrammarFactory(t, e) {
            const r = await Vt("vscode-textmate", "release/main.js"),
                n = await Vt("vscode-oniguruma", "release/main.js"),
                o = await (await fetch(e)).arrayBuffer();
            await n.loadWASM(o);
            const a = Promise.resolve({
                createOnigScanner: l => n.createOnigScanner(l),
                createOnigString: l => n.createOnigString(l)
            });
            return new Xi({
                logTrace: l => {},
                logError: (l, u) => console.error(l, u),
                readFile: l => this._host.$readFile(l)
            }, t, r, a)
        }
        $acceptNewModel(t) {
            const e = Y.revive(t.uri),
                r = this;
            this._models.set(t.controllerId, new eo(e, t.lines, t.EOL, t.versionId, {
                async getOrCreateGrammar(n, i) {
                    const o = await r._grammarFactory;
                    return o ? (r._grammarCache[i] || (r._grammarCache[i] = o.createGrammar(n, i)), r._grammarCache[i]) : Promise.resolve(null)
                },
                setTokensAndStates(n, i, o) {
                    r._host.$setTokensAndStates(t.controllerId, n, i, o)
                },
                reportTokenizationTime(n, i, o, a, l) {
                    r._host.$reportTokenizationTime(n, i, o, a, l)
                }
            }, t.languageId, t.encodedLanguageId, t.maxTokenizationLineLength))
        }
        $acceptModelChanged(t, e) {
            this._models.get(t).onEvents(e)
        }
        $retokenize(t, e, r) {
            this._models.get(t).retokenize(e, r)
        }
        $acceptModelLanguageChanged(t, e, r) {
            this._models.get(t).onLanguageId(e, r)
        }
        $acceptRemovedModel(t) {
            const e = this._models.get(t);
            e && (e.dispose(), this._models.delete(t))
        }
        async $acceptTheme(t, e) {
            (await this._grammarFactory)?.setTheme(t, e)
        }
        $acceptMaxTokenizationLineLength(t, e) {
            this._models.get(t).acceptMaxTokenizationLineLength(e)
        }
    },
    sr = "default",
    io = "$initialize",
    oo = class {
        constructor(t, e, r, n, i) {
            this.vsWorker = t, this.req = e, this.channel = r, this.method = n, this.args = i, this.type = 0
        }
    },
    jn = class {
        constructor(t, e, r, n) {
            this.vsWorker = t, this.seq = e, this.res = r, this.err = n, this.type = 1
        }
    },
    ao = class {
        constructor(t, e, r, n, i) {
            this.vsWorker = t, this.req = e, this.channel = r, this.eventName = n, this.arg = i, this.type = 2
        }
    },
    lo = class {
        constructor(t, e, r) {
            this.vsWorker = t, this.req = e, this.event = r, this.type = 3
        }
    },
    uo = class {
        constructor(t, e) {
            this.vsWorker = t, this.req = e, this.type = 4
        }
    },
    co = class {
        constructor(t) {
            this._workerId = -1, this._handler = t, this._lastSentReq = 0, this._pendingReplies = Object.create(null), this._pendingEmitters = new Map, this._pendingEvents = new Map
        }
        setWorkerId(t) {
            this._workerId = t
        }
        sendMessage(t, e, r) {
            const n = String(++this._lastSentReq);
            return new Promise((i, o) => {
                this._pendingReplies[n] = {
                    resolve: i,
                    reject: o
                }, this._send(new oo(this._workerId, n, t, e, r))
            })
        }
        listen(t, e, r) {
            let n = null;
            const i = new X({
                onWillAddFirstListener: () => {
                    n = String(++this._lastSentReq), this._pendingEmitters.set(n, i), this._send(new ao(this._workerId, n, t, e, r))
                },
                onDidRemoveLastListener: () => {
                    this._pendingEmitters.delete(n), this._send(new uo(this._workerId, n)), n = null
                }
            });
            return i.event
        }
        handleMessage(t) {
            !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t)
        }
        createProxyToRemoteChannel(t, e) {
            const r = {
                get: (n, i) => (typeof i == "string" && !n[i] && (Vn(i) ? n[i] = o => this.listen(t, i, o) : qn(i) ? n[i] = this.listen(t, i, void 0) : i.charCodeAt(0) === 36 && (n[i] = async (...o) => (await e?.(), this.sendMessage(t, i, o)))), n[i])
            };
            return new Proxy(Object.create(null), r)
        }
        _handleMessage(t) {
            switch (t.type) {
                case 1:
                    return this._handleReplyMessage(t);
                case 0:
                    return this._handleRequestMessage(t);
                case 2:
                    return this._handleSubscribeEventMessage(t);
                case 3:
                    return this._handleEventMessage(t);
                case 4:
                    return this._handleUnsubscribeEventMessage(t)
            }
        }
        _handleReplyMessage(t) {
            if (!this._pendingReplies[t.seq]) {
                console.warn("Got reply to unknown seq");
                return
            }
            const e = this._pendingReplies[t.seq];
            if (delete this._pendingReplies[t.seq], t.err) {
                let r = t.err;
                t.err.$isError && (r = new Error, r.name = t.err.name, r.message = t.err.message, r.stack = t.err.stack), e.reject(r);
                return
            }
            e.resolve(t.res)
        }
        _handleRequestMessage(t) {
            const e = t.req;
            this._handler.handleMessage(t.channel, t.method, t.args).then(n => {
                this._send(new jn(this._workerId, e, n, void 0))
            }, n => {
                n.detail instanceof Error && (n.detail = Tt(n.detail)), this._send(new jn(this._workerId, e, void 0, Tt(n)))
            })
        }
        _handleSubscribeEventMessage(t) {
            const e = t.req,
                r = this._handler.handleEvent(t.channel, t.eventName, t.arg)(n => {
                    this._send(new lo(this._workerId, e, n))
                });
            this._pendingEvents.set(e, r)
        }
        _handleEventMessage(t) {
            if (!this._pendingEmitters.has(t.req)) {
                console.warn("Got event for unknown req");
                return
            }
            this._pendingEmitters.get(t.req).fire(t.event)
        }
        _handleUnsubscribeEventMessage(t) {
            if (!this._pendingEvents.has(t.req)) {
                console.warn("Got unsubscribe for unknown req");
                return
            }
            this._pendingEvents.get(t.req).dispose(), this._pendingEvents.delete(t.req)
        }
        _send(t) {
            const e = [];
            if (t.type === 0)
                for (let r = 0; r < t.args.length; r++) t.args[r] instanceof ArrayBuffer && e.push(t.args[r]);
            else t.type === 1 && t.res instanceof ArrayBuffer && e.push(t.res);
            this._handler.sendMessage(t, e)
        }
    };

function qn(t) {
    return t[0] === "o" && t[1] === "n" && Qr(t.charCodeAt(2))
}

function Vn(t) {
    return /^onDynamic/.test(t) && Qr(t.charCodeAt(9))
}
var ho = class {
        constructor(t, e) {
            this._localChannels = new Map, this._remoteChannels = new Map, this._protocol = new co({
                sendMessage: (r, n) => {
                    t(r, n)
                },
                handleMessage: (r, n, i) => this._handleMessage(r, n, i),
                handleEvent: (r, n, i) => this._handleEvent(r, n, i)
            }), this.requestHandler = e(this)
        }
        onmessage(t) {
            this._protocol.handleMessage(t)
        }
        _handleMessage(t, e, r) {
            if (t === sr && e === io) return this.initialize(r[0]);
            const n = t === sr ? this.requestHandler : this._localChannels.get(t);
            if (!n) return Promise.reject(new Error(`Missing channel ${t} on worker thread`));
            if (typeof n[e] != "function") return Promise.reject(new Error(`Missing method ${e} on worker thread channel ${t}`));
            try {
                return Promise.resolve(n[e].apply(n, r))
            } catch (i) {
                return Promise.reject(i)
            }
        }
        _handleEvent(t, e, r) {
            const n = t === sr ? this.requestHandler : this._localChannels.get(t);
            if (!n) throw new Error(`Missing channel ${t} on worker thread`);
            if (Vn(e)) {
                const i = n[e].call(n, r);
                if (typeof i != "function") throw new Error(`Missing dynamic event ${e} on request handler.`);
                return i
            }
            if (qn(e)) {
                const i = n[e];
                if (typeof i != "function") throw new Error(`Missing event ${e} on request handler.`);
                return i
            }
            throw new Error(`Malformed event name ${e}`)
        }
        setChannel(t, e) {
            this._localChannels.set(t, e)
        }
        getChannel(t) {
            if (!this._remoteChannels.has(t)) {
                const e = this._protocol.createProxyToRemoteChannel(t);
                this._remoteChannels.set(t, e)
            }
            return this._remoteChannels.get(t)
        }
        async initialize(t) {
            this._protocol.setWorkerId(t)
        }
    },
    ir = !1;

function fo(t) {
    if (ir) throw new Error("WebWorker already initialized!");
    ir = !0;
    const e = new ho(r => globalThis.postMessage(r), r => t(r));
    return globalThis.onmessage = r => {
        e.onmessage(r.data)
    }, e
}

function mo(t) {
    globalThis.onmessage = e => {
        ir || fo(t)
    }
}
mo(no);

//# sourceMappingURL=http://go/sourcemap/sourcemaps/46fb7aafe279d7c72346febe68c2e004b7d1de60/core/vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateTokenizationWorker.workerMain.js.map

//# debugId=815a4493-8f2a-5ab0-907a-612be2bb381b