import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as r,
    G5 as i,
    K5 as a,
    PH as o,
    aE as s,
    aq as c,
    eat as l,
    f8 as u,
    fq as d,
    jH as f,
    nat as p,
    rE as m
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as h,
    Vn as g,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    dGn as v,
    fGn as y
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as b,
    t as x
} from "./6105d6cc-e7tiyjn7ljvobl3g.js";

function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? S(Object(n), !0).forEach(function(t) {
            A(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function w() {
    w = function() {
        return e
    };
    var e = {},
        t = Object.prototype,
        n = t.hasOwnProperty,
        r = Object.defineProperty || function(e, t, n) {
            e[t] = n.value
        },
        i = typeof Symbol == `function` ? Symbol : {},
        a = i.iterator || `@@iterator`,
        o = i.asyncIterator || `@@asyncIterator`,
        s = i.toStringTag || `@@toStringTag`;

    function c(e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), e[t]
    }
    try {
        c({}, ``)
    } catch {
        c = function(e, t, n) {
            return e[t] = n
        }
    }

    function l(e, t, n, i) {
        var a = t && t.prototype instanceof f ? t : f,
            o = Object.create(a.prototype);
        return r(o, `_invoke`, {
            value: x(e, n, new E(i || []))
        }), o
    }

    function u(e, t, n) {
        try {
            return {
                type: `normal`,
                arg: e.call(t, n)
            }
        } catch (e) {
            return {
                type: `throw`,
                arg: e
            }
        }
    }
    e.wrap = l;
    var d = {};

    function f() {}

    function p() {}

    function m() {}
    var h = {};
    c(h, a, function() {
        return this
    });
    var g = Object.getPrototypeOf,
        _ = g && g(g(D([])));
    _ && _ !== t && n.call(_, a) && (h = _);
    var v = m.prototype = f.prototype = Object.create(h);

    function y(e) {
        [`next`, `throw`, `return`].forEach(function(t) {
            c(e, t, function(e) {
                return this._invoke(t, e)
            })
        })
    }

    function b(e, t) {
        function i(r, a, o, s) {
            var c = u(e[r], e, a);
            if (c.type !== `throw`) {
                var l = c.arg,
                    d = l.value;
                return d && typeof d == `object` && n.call(d, `__await`) ? t.resolve(d.__await).then(function(e) {
                    i(`next`, e, o, s)
                }, function(e) {
                    i(`throw`, e, o, s)
                }) : t.resolve(d).then(function(e) {
                    l.value = e, o(l)
                }, function(e) {
                    return i(`throw`, e, o, s)
                })
            }
            s(c.arg)
        }
        var a;
        r(this, `_invoke`, {
            value: function(e, n) {
                function r() {
                    return new t(function(t, r) {
                        i(e, n, t, r)
                    })
                }
                return a = a ? a.then(r, r) : r()
            }
        })
    }

    function x(e, t, n) {
        var r = `suspendedStart`;
        return function(i, a) {
            if (r === `executing`) throw Error(`Generator is already running`);
            if (r === `completed`) {
                if (i === `throw`) throw a;
                return O()
            }
            for (n.method = i, n.arg = a;;) {
                var o = n.delegate;
                if (o) {
                    var s = S(o, n);
                    if (s) {
                        if (s === d) continue;
                        return s
                    }
                }
                if (n.method === `next`) n.sent = n._sent = n.arg;
                else if (n.method === `throw`) {
                    if (r === `suspendedStart`) throw r = `completed`, n.arg;
                    n.dispatchException(n.arg)
                } else n.method === `return` && n.abrupt(`return`, n.arg);
                r = `executing`;
                var c = u(e, t, n);
                if (c.type === `normal`) {
                    if (r = n.done ? `completed` : `suspendedYield`, c.arg === d) continue;
                    return {
                        value: c.arg,
                        done: n.done
                    }
                }
                c.type === `throw` && (r = `completed`, n.method = `throw`, n.arg = c.arg)
            }
        }
    }

    function S(e, t) {
        var n = t.method,
            r = e.iterator[n];
        if (r === void 0) return t.delegate = null, n === `throw` && e.iterator.return && (t.method = `return`, t.arg = void 0, S(e, t), t.method === `throw`) || n !== `return` && (t.method = `throw`, t.arg = TypeError(`The iterator does not provide a '` + n + `' method`)), d;
        var i = u(r, e.iterator, t.arg);
        if (i.type === `throw`) return t.method = `throw`, t.arg = i.arg, t.delegate = null, d;
        var a = i.arg;
        return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, t.method !== `return` && (t.method = `next`, t.arg = void 0), t.delegate = null, d) : a : (t.method = `throw`, t.arg = TypeError(`iterator result is not an object`), t.delegate = null, d)
    }

    function C(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function T(e) {
        var t = e.completion || {};
        t.type = `normal`, delete t.arg, e.completion = t
    }

    function E(e) {
        this.tryEntries = [{
            tryLoc: `root`
        }], e.forEach(C, this), this.reset(!0)
    }

    function D(e) {
        if (e) {
            var t = e[a];
            if (t) return t.call(e);
            if (typeof e.next == `function`) return e;
            if (!isNaN(e.length)) {
                var r = -1,
                    i = function t() {
                        for (; ++r < e.length;)
                            if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                        return t.value = void 0, t.done = !0, t
                    };
                return i.next = i
            }
        }
        return {
            next: O
        }
    }

    function O() {
        return {
            value: void 0,
            done: !0
        }
    }
    return p.prototype = m, r(v, `constructor`, {
        value: m,
        configurable: !0
    }), r(m, `constructor`, {
        value: p,
        configurable: !0
    }), p.displayName = c(m, s, `GeneratorFunction`), e.isGeneratorFunction = function(e) {
        var t = typeof e == `function` && e.constructor;
        return !!t && (t === p || (t.displayName || t.name) === `GeneratorFunction`)
    }, e.mark = function(e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, c(e, s, `GeneratorFunction`)), e.prototype = Object.create(v), e
    }, e.awrap = function(e) {
        return {
            __await: e
        }
    }, y(b.prototype), c(b.prototype, o, function() {
        return this
    }), e.AsyncIterator = b, e.async = function(t, n, r, i, a) {
        a === void 0 && (a = Promise);
        var o = new b(l(t, n, r, i), a);
        return e.isGeneratorFunction(n) ? o : o.next().then(function(e) {
            return e.done ? e.value : o.next()
        })
    }, y(v), c(v, s, `Generator`), c(v, a, function() {
        return this
    }), c(v, `toString`, function() {
        return `[object Generator]`
    }), e.keys = function(e) {
        var t = Object(e),
            n = [];
        for (var r in t) n.push(r);
        return n.reverse(),
            function e() {
                for (; n.length;) {
                    var r = n.pop();
                    if (r in t) return e.value = r, e.done = !1, e
                }
                return e.done = !0, e
            }
    }, e.values = D, E.prototype = {
        constructor: E,
        reset: function(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = `next`, this.arg = void 0, this.tryEntries.forEach(T), !e)
                for (var t in this) t.charAt(0) === `t` && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
        },
        stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if (e.type === `throw`) throw e.arg;
            return this.rval
        },
        dispatchException: function(e) {
            if (this.done) throw e;
            var t = this;

            function r(n, r) {
                return o.type = `throw`, o.arg = e, t.next = n, r && (t.method = `next`, t.arg = void 0), !!r
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                    o = a.completion;
                if (a.tryLoc === `root`) return r(`end`);
                if (a.tryLoc <= this.prev) {
                    var s = n.call(a, `catchLoc`),
                        c = n.call(a, `finallyLoc`);
                    if (s && c) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                    } else if (s) {
                        if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                    } else {
                        if (!c) throw Error(`try statement without catch or finally`);
                        if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (i.tryLoc <= this.prev && n.call(i, `finallyLoc`) && this.prev < i.finallyLoc) {
                    var a = i;
                    break
                }
            }
            a && (e === `break` || e === `continue`) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
            var o = a ? a.completion : {};
            return o.type = e, o.arg = t, a ? (this.method = `next`, this.next = a.finallyLoc, d) : this.complete(o)
        },
        complete: function(e, t) {
            if (e.type === `throw`) throw e.arg;
            return e.type === `break` || e.type === `continue` ? this.next = e.arg : e.type === `return` ? (this.rval = this.arg = e.arg, this.method = `return`, this.next = `end`) : e.type === `normal` && t && (this.next = t), d
        },
        finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), d
            }
        },
        catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    var r = n.completion;
                    if (r.type === `throw`) {
                        var i = r.arg;
                        T(n)
                    }
                    return i
                }
            }
            throw Error(`illegal catch attempt`)
        },
        delegateYield: function(e, t, n) {
            return this.delegate = {
                iterator: D(e),
                resultName: t,
                nextLoc: n
            }, this.method === `next` && (this.arg = void 0), d
        }
    }, e
}

function T(e, t, n, r, i, a, o) {
    try {
        var s = e[a](o),
            c = s.value
    } catch (e) {
        n(e);
        return
    }
    s.done ? t(c) : Promise.resolve(c).then(r, i)
}

function E(e) {
    return function() {
        var t = this,
            n = arguments;
        return new Promise(function(r, i) {
            var a = e.apply(t, n);

            function o(e) {
                T(a, r, i, o, s, `next`, e)
            }

            function s(e) {
                T(a, r, i, o, s, `throw`, e)
            }
            o(void 0)
        })
    }
}

function D(e, t) {
    if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
}

function O(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, re(r.key), r)
    }
}

function k(e, t, n) {
    return t && O(e.prototype, t), n && O(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function A(e, t, n) {
    return t = re(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function j(e, t) {
    if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function`);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && N(e, t)
}

function M(e) {
    return M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, M(e)
}

function N(e, t) {
    return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    }, N(e, t)
}

function P() {
    if (typeof Reflect > `u` || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == `function`) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function F(e, t, n) {
    return F = P() ? Reflect.construct.bind() : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && N(i, n.prototype), i
    }, F.apply(null, arguments)
}

function I(e) {
    return Function.toString.call(e).indexOf(`[native code]`) !== -1
}

function L(e) {
    var t = typeof Map == `function` ? new Map : void 0;
    return L = function(e) {
        if (e === null || !I(e)) return e;
        if (typeof e != `function`) throw TypeError(`Super expression must either be null or a function`);
        if (t !== void 0) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return F(e, arguments, M(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), N(n, e)
    }, L(e)
}

function R(e) {
    if (e === void 0) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e
}

function ee(e, t) {
    if (t && (typeof t == `object` || typeof t == `function`)) return t;
    if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
    return R(e)
}

function te(e) {
    var t = P();
    return function() {
        var n = M(e),
            r;
        if (t) {
            var i = M(this).constructor;
            r = Reflect.construct(n, arguments, i)
        } else r = n.apply(this, arguments);
        return ee(this, r)
    }
}

function ne(e, t) {
    if (typeof e != `object` || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (typeof r != `object`) return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}

function re(e) {
    var t = ne(e, `string`);
    return typeof t == `symbol` ? t : String(t)
}

function ie(e, t) {
    return e.indexOf(t.toLowerCase()) === 0 ? e : `${t.toLowerCase()}${e.substr(0,1).toUpperCase()}${e.substr(1)}`
}

function ae(e) {
    return !!(e && e.nodeType === 1 && `nodeName` in e && e.ownerDocument && e.ownerDocument.defaultView)
}

function oe(e) {
    return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
}

function z(e) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(e)
}

function se(e) {
    return /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/.test(e)
}

function ce(e) {
    for (var t = (e || ``).match(/^(?:https?:)?(?:\/\/)?([^/?]+)/), n = (t && t[1] || ``).replace(`player.`, ``), r = [`.videoji.hk`, `.vimeo.work`, `.videoji.cn`], i = 0, a = r; i < a.length; i++) {
        var o = a[i];
        if (n.endsWith(o)) return n
    }
    return `vimeo.com`
}

function le() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = e.id,
        n = e.url,
        r = t || n;
    if (!r) throw Error(`An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.`);
    if (oe(r)) return `https://vimeo.com/${r}`;
    if (z(r)) return r.replace(`http:`, `https:`);
    throw TypeError(t ? `“${t}” is not a valid video id.` : `“${r}” is not a vimeo.com url.`)
}

function ue(e, t) {
    return t = {
        exports: {}
    }, e(t, t.exports), t.exports
}

function B(e, t, n) {
    var r = K.get(e.element) || {};
    t in r || (r[t] = []), r[t].push(n), K.set(e.element, r)
}

function V(e, t) {
    return (K.get(e.element) || {})[t] || []
}

function H(e, t, n) {
    var r = K.get(e.element) || {};
    if (!r[t]) return !0;
    if (!n) return r[t] = [], K.set(e.element, r), !0;
    var i = r[t].indexOf(n);
    return i !== -1 && r[t].splice(i, 1), K.set(e.element, r), r[t] && r[t].length === 0
}

function de(e, t) {
    var n = V(e, t);
    if (n.length < 1) return !1;
    var r = n.shift();
    return H(e, t, r), r
}

function fe(e, t) {
    var n = K.get(e);
    K.set(t, n), K.delete(e)
}

function U(e) {
    if (typeof e == `string`) try {
        e = JSON.parse(e)
    } catch (e) {
        return console.warn(e), {}
    }
    return e
}

function W(e, t, n) {
    if (!(!e.element.contentWindow || !e.element.contentWindow.postMessage)) {
        var r = {
            method: t
        };
        n !== void 0 && (r.value = n);
        var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, `$1`));
        i >= 8 && i < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin)
    }
}

function pe(e, t) {
    t = U(t);
    var n = [],
        r;
    if (t.event) t.event === `error` && V(e, t.data.method).forEach(function(n) {
        var r = Error(t.data.message);
        r.name = t.data.name, n.reject(r), H(e, t.data.method, n)
    }), n = V(e, `event:${t.event}`), r = t.data;
    else if (t.method) {
        var i = de(e, t.method);
        i && (n.push(i), r = t.value)
    }
    n.forEach(function(t) {
        try {
            if (typeof t == `function`) {
                t.call(e, r);
                return
            }
            t.resolve(r)
        } catch {}
    })
}

function me(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return De.reduce(function(t, n) {
        var r = e.getAttribute(`data-vimeo-${n}`);
        return (r || r === ``) && (t[n] = r === `` ? 1 : r), t
    }, t)
}

function he(e, t) {
    var n = e.html;
    if (!t) throw TypeError(`An element must be provided`);
    if (t.getAttribute(`data-vimeo-initialized`) !== null) return t.querySelector(`iframe`);
    var r = document.createElement(`div`);
    return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute(`data-vimeo-initialized`, `true`), t.querySelector(`iframe`)
}

function ge(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function(r, i) {
        if (!z(e)) throw TypeError(`“${e}” is not a vimeo.com url.`);
        var a = `https://${ce(e)}/api/oembed.json?url=${encodeURIComponent(e)}`;
        for (var o in t) t.hasOwnProperty(o) && (a += `&${o}=${encodeURIComponent(t[o])}`);
        var s = `XDomainRequest` in window ? new XDomainRequest : new XMLHttpRequest;
        s.open(`GET`, a, !0), s.onload = function() {
            if (s.status === 404) {
                i(Error(`“${e}” was not found.`));
                return
            }
            if (s.status === 403) {
                i(Error(`“${e}” is not embeddable.`));
                return
            }
            try {
                var t = JSON.parse(s.responseText);
                if (t.domain_status_code === 403) {
                    he(t, n), i(Error(`“${e}” is not embeddable.`));
                    return
                }
                r(t)
            } catch (e) {
                i(e)
            }
        }, s.onerror = function() {
            var e = s.status ? ` (${s.status})` : ``;
            i(Error(`There was an error fetching the embed code from Vimeo${e}.`))
        }, s.send()
    })
}

function _e() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
        t = [].slice.call(e.querySelectorAll(`[data-vimeo-id], [data-vimeo-url]`)),
        n = function(e) {
            `console` in window && console.error && console.error(`There was an error creating an embed: ${e}`)
        };
    t.forEach(function(e) {
        try {
            if (e.getAttribute(`data-vimeo-defer`) !== null) return;
            var t = me(e);
            ge(le(t), t, e).then(function(t) {
                return he(t, e)
            }).catch(n)
        } catch (e) {
            n(e)
        }
    })
}

function ve() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0, window.addEventListener(`message`, function(t) {
        if (z(t.origin) && !(!t.data || t.data.event !== `spacechange`)) {
            for (var n = e.querySelectorAll(`iframe`), r = 0; r < n.length; r++)
                if (n[r].contentWindow === t.source) {
                    var i = n[r].parentElement;
                    i.style.paddingBottom = `${t.data.data[0].bottom}px`;
                    break
                }
        }
    }))
}

function ye() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    window.VimeoSeoMetadataAppended || (window.VimeoSeoMetadataAppended = !0, window.addEventListener(`message`, function(t) {
        if (z(t.origin)) {
            var n = U(t.data);
            if (!(!n || n.event !== `ready`))
                for (var r = e.querySelectorAll(`iframe`), i = 0; i < r.length; i++) {
                    var a = r[i],
                        o = a.contentWindow === t.source;
                    se(a.src) && o && new X(a).callMethod(`appendVideoMetadata`, window.location.href)
                }
        }
    }))
}

function be() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
        window.VimeoCheckedUrlTimeParam = !0;
        var t = function(e) {
            `console` in window && console.error && console.error(`There was an error getting video Id: ${e}`)
        };
        window.addEventListener(`message`, function(n) {
            if (z(n.origin)) {
                var r = U(n.data);
                if (!(!r || r.event !== `ready`))
                    for (var i = e.querySelectorAll(`iframe`), a = function() {
                            var e = i[o],
                                r = e.contentWindow === n.source;
                            if (se(e.src) && r) {
                                var a = new X(e);
                                a.getVideoId().then(function(e) {
                                    var t = RegExp(`[?&]vimeo_t_${e}=([^&#]*)`).exec(window.location.href);
                                    if (t && t[1]) {
                                        var n = decodeURI(t[1]);
                                        a.setCurrentTime(n)
                                    }
                                }).catch(t)
                            }
                        }, o = 0; o < i.length; o++) a()
            }
        })
    }
}

function xe() {
    var e = function() {
            for (var e, t = [
                    [`requestFullscreen`, `exitFullscreen`, `fullscreenElement`, `fullscreenEnabled`, `fullscreenchange`, `fullscreenerror`],
                    [`webkitRequestFullscreen`, `webkitExitFullscreen`, `webkitFullscreenElement`, `webkitFullscreenEnabled`, `webkitfullscreenchange`, `webkitfullscreenerror`],
                    [`webkitRequestFullScreen`, `webkitCancelFullScreen`, `webkitCurrentFullScreenElement`, `webkitCancelFullScreen`, `webkitfullscreenchange`, `webkitfullscreenerror`],
                    [`mozRequestFullScreen`, `mozCancelFullScreen`, `mozFullScreenElement`, `mozFullScreenEnabled`, `mozfullscreenchange`, `mozfullscreenerror`],
                    [`msRequestFullscreen`, `msExitFullscreen`, `msFullscreenElement`, `msFullscreenEnabled`, `MSFullscreenChange`, `MSFullscreenError`]
                ], n = 0, r = t.length, i = {}; n < r; n++)
                if (e = t[n], e && e[1] in document) {
                    for (n = 0; n < e.length; n++) i[t[0][n]] = e[n];
                    return i
                } return !1
        }(),
        t = {
            fullscreenchange: e.fullscreenchange,
            fullscreenerror: e.fullscreenerror
        },
        n = {
            request: function(t) {
                return new Promise(function(r, i) {
                    var a = function e() {
                        n.off(`fullscreenchange`, e), r()
                    };
                    n.on(`fullscreenchange`, a), t ||= document.documentElement;
                    var o = t[e.requestFullscreen]();
                    o instanceof Promise && o.then(a).catch(i)
                })
            },
            exit: function() {
                return new Promise(function(t, r) {
                    if (!n.isFullscreen) {
                        t();
                        return
                    }
                    var i = function e() {
                        n.off(`fullscreenchange`, e), t()
                    };
                    n.on(`fullscreenchange`, i);
                    var a = document[e.exitFullscreen]();
                    a instanceof Promise && a.then(i).catch(r)
                })
            },
            on: function(e, n) {
                var r = t[e];
                r && document.addEventListener(r, n)
            },
            off: function(e, n) {
                var r = t[e];
                r && document.removeEventListener(r, n)
            }
        };
    return Object.defineProperties(n, {
        isFullscreen: {
            get: function() {
                return !!document[e.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return document[e.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!document[e.fullscreenEnabled]
            }
        }
    }), n
}
var Se, Ce, we, Te, Ee, G, K, De, Oe, ke, q, J, Y, X, Ae = e((() => {
    if (Se = typeof global < `u` && {}.toString.call(global) === `[object global]`, Ce = function(e, t, n) {
            var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : `addEventListener`,
                i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : `removeEventListener`,
                a = typeof t == `string` ? [t] : t;
            return a.forEach(function(t) {
                e[r](t, n)
            }), {
                cancel: function() {
                    return a.forEach(function(t) {
                        return e[i](t, n)
                    })
                }
            }
        }, we = Array.prototype.indexOf !== void 0, Te = typeof window < `u` && window.postMessage !== void 0, !Se && (!we || !Te)) throw Error(`Sorry, the Vimeo Player API is not available in this browser.`);
    Ee = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : {}, (function(e) {
        if (e.WeakMap) return;
        var t = Object.prototype.hasOwnProperty,
            n = Object.defineProperty && function() {
                try {
                    return Object.defineProperty({}, "x", {
                        value: 1
                    }).x === 1
                } catch {}
            }(),
            r = function(e, t, r) {
                n ? Object.defineProperty(e, t, {
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r
            };
        e.WeakMap = function() {
            function e() {
                if (this === void 0) throw TypeError(`Constructor WeakMap requires 'new'`);
                if (r(this, `_id`, a(`_WeakMap`)), arguments.length > 0) throw TypeError(`WeakMap iterable is not supported`)
            }
            r(e.prototype, `delete`, function(e) {
                if (n(this, `delete`), !i(e)) return !1;
                var t = e[this._id];
                return t && t[0] === e ? (delete e[this._id], !0) : !1
            }), r(e.prototype, `get`, function(e) {
                if (n(this, `get`), i(e)) {
                    var t = e[this._id];
                    if (t && t[0] === e) return t[1]
                }
            }), r(e.prototype, `has`, function(e) {
                if (n(this, `has`), !i(e)) return !1;
                var t = e[this._id];
                return !!(t && t[0] === e)
            }), r(e.prototype, `set`, function(e, t) {
                if (n(this, `set`), !i(e)) throw TypeError(`Invalid value used as weak map key`);
                var a = e[this._id];
                return a && a[0] === e ? (a[1] = t, this) : (r(e, this._id, [e, t]), this)
            });

            function n(e, n) {
                if (!i(e) || !t.call(e, `_id`)) throw TypeError(n + ` method called on incompatible receiver ` + typeof e)
            }

            function a(e) {
                return e + `_` + o() + `.` + o()
            }

            function o() {
                return Math.random().toString().substring(2)
            }
            return r(e, `_polyfill`, !0), e
        }();

        function i(e) {
            return Object(e) === e
        }
    })(typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : Ee), G = ue(function(e) {
        (function(t, n, r) {
            n[t] = n[t] || r(), e.exports &&= n[t]
        })(`Promise`, Ee, function() {
            var e, t, n, r = Object.prototype.toString,
                i = typeof setImmediate < `u` ? function(e) {
                    return setImmediate(e)
                } : setTimeout;
            try {
                Object.defineProperty({}, "x", {}), e = function(e, t, n, r) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        writable: !0,
                        configurable: r !== !1
                    })
                }
            } catch {
                e = function(e, t, n) {
                    return e[t] = n, e
                }
            }
            n = function() {
                var e, n, r;

                function i(e, t) {
                    this.fn = e, this.self = t, this.next = void 0
                }
                return {
                    add: function(t, a) {
                        r = new i(t, a), n ? n.next = r : e = r, n = r, r = void 0
                    },
                    drain: function() {
                        var r = e;
                        for (e = n = t = void 0; r;) r.fn.call(r.self), r = r.next
                    }
                }
            }();

            function a(e, r) {
                n.add(e, r), t ||= i(n.drain)
            }

            function o(e) {
                var t, n = typeof e;
                return e != null && (n == `object` || n == `function`) && (t = e.then), typeof t == `function` && t
            }

            function s() {
                for (var e = 0; e < this.chain.length; e++) c(this, this.state === 1 ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                this.chain.length = 0
            }

            function c(e, t, n) {
                var r, i;
                try {
                    t === !1 ? n.reject(e.msg) : (r = t === !0 ? e.msg : t.call(void 0, e.msg), r === n.promise ? n.reject(TypeError(`Promise-chain cycle`)) : (i = o(r)) ? i.call(r, n.resolve, n.reject) : n.resolve(r))
                } catch (e) {
                    n.reject(e)
                }
            }

            function l(e) {
                var t, n = this;
                if (!n.triggered) {
                    n.triggered = !0, n.def && (n = n.def);
                    try {
                        (t = o(e)) ? a(function() {
                            var r = new f(n);
                            try {
                                t.call(e, function() {
                                    l.apply(r, arguments)
                                }, function() {
                                    u.apply(r, arguments)
                                })
                            } catch (e) {
                                u.call(r, e)
                            }
                        }): (n.msg = e, n.state = 1, n.chain.length > 0 && a(s, n))
                    } catch (e) {
                        u.call(new f(n), e)
                    }
                }
            }

            function u(e) {
                var t = this;
                t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, t.chain.length > 0 && a(s, t))
            }

            function d(e, t, n, r) {
                for (var i = 0; i < t.length; i++)(function(i) {
                    e.resolve(t[i]).then(function(e) {
                        n(i, e)
                    }, r)
                })(i)
            }

            function f(e) {
                this.def = e, this.triggered = !1
            }

            function p(e) {
                this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
            }

            function m(e) {
                if (typeof e != `function`) throw TypeError(`Not a function`);
                if (this.__NPO__ !== 0) throw TypeError(`Not a promise`);
                this.__NPO__ = 1;
                var t = new p(this);
                this.then = function(e, n) {
                    var r = {
                        success: typeof e != `function` || e,
                        failure: typeof n == `function` && n
                    };
                    return r.promise = new this.constructor(function(e, t) {
                        if (typeof e != `function` || typeof t != `function`) throw TypeError(`Not a function`);
                        r.resolve = e, r.reject = t
                    }), t.chain.push(r), t.state !== 0 && a(s, t), r.promise
                }, this.catch = function(e) {
                    return this.then(void 0, e)
                };
                try {
                    e.call(void 0, function(e) {
                        l.call(t, e)
                    }, function(e) {
                        u.call(t, e)
                    })
                } catch (e) {
                    u.call(t, e)
                }
            }
            var h = e({}, `constructor`, m, !1);
            return m.prototype = h, e(h, `__NPO__`, 0, !1), e(m, `resolve`, function(e) {
                var t = this;
                return e && typeof e == `object` && e.__NPO__ === 1 ? e : new t(function(t, n) {
                    if (typeof t != `function` || typeof n != `function`) throw TypeError(`Not a function`);
                    t(e)
                })
            }), e(m, `reject`, function(e) {
                return new this(function(t, n) {
                    if (typeof t != `function` || typeof n != `function`) throw TypeError(`Not a function`);
                    n(e)
                })
            }), e(m, `all`, function(e) {
                var t = this;
                return r.call(e) == `[object Array]` ? e.length === 0 ? t.resolve([]) : new t(function(n, r) {
                    if (typeof n != `function` || typeof r != `function`) throw TypeError(`Not a function`);
                    var i = e.length,
                        a = Array(i),
                        o = 0;
                    d(t, e, function(e, t) {
                        a[e] = t, ++o === i && n(a)
                    }, r)
                }) : t.reject(TypeError(`Not an array`))
            }), e(m, `race`, function(e) {
                var t = this;
                return r.call(e) == `[object Array]` ? new t(function(n, r) {
                    if (typeof n != `function` || typeof r != `function`) throw TypeError(`Not a function`);
                    d(t, e, function(e, t) {
                        n(t)
                    }, r)
                }) : t.reject(TypeError(`Not an array`))
            }), m
        })
    }), K = new WeakMap, De = `airplay.audio_tracks.audiotrack.autopause.autoplay.background.byline.cc.chapter_id.chapters.chromecast.color.colors.controls.dnt.end_time.fullscreen.height.id.initial_quality.interactive_params.keyboard.loop.maxheight.max_quality.maxwidth.min_quality.muted.play_button_position.playsinline.portrait.preload.progress_bar.quality.quality_selector.responsive.skipping_forward.speed.start_time.texttrack.thumbnail_id.title.transcript.transparent.unmute_button.url.vimeo_logo.volume.watch_full_video.width`.split(`.`), Oe = {
        role: `viewer`,
        autoPlayMuted: !0,
        allowedDrift: .3,
        maxAllowedDrift: 1,
        minCheckInterval: .1,
        maxRateAdjustment: .2,
        maxTimeToCatchUp: 1
    }, ke = function(e) {
        j(n, e);
        var t = te(n);

        function n(e, r) {
            var i, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                o = arguments.length > 3 ? arguments[3] : void 0;
            return D(this, n), i = t.call(this), A(R(i), `logger`, void 0), A(R(i), `speedAdjustment`, 0), A(R(i), `adjustSpeed`, function() {
                var e = E(w().mark(function e(t, n) {
                    var r;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i.speedAdjustment !== n) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt(`return`);
                            case 2:
                                return e.next = 4, t.getPlaybackRate();
                            case 4:
                                return e.t0 = e.sent, e.t1 = i.speedAdjustment, e.t2 = e.t0 - e.t1, e.t3 = n, r = e.t2 + e.t3, i.log(`New playbackRate:  ${r}`), e.next = 12, t.setPlaybackRate(r);
                            case 12:
                                i.speedAdjustment = n;
                            case 13:
                            case `end`:
                                return e.stop()
                        }
                    }, e)
                }));
                return function(t, n) {
                    return e.apply(this, arguments)
                }
            }()), i.logger = o, i.init(r, e, C(C({}, Oe), a)), i
        }
        return k(n, [{
            key: `disconnect`,
            value: function() {
                this.dispatchEvent(new Event(`disconnect`))
            }
        }, {
            key: `init`,
            value: function() {
                var e = E(w().mark(function e(t, n, r) {
                    var i = this,
                        a, o, s;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.waitForTOReadyState(t, `open`);
                            case 2:
                                if (r.role !== `viewer`) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 5, this.updatePlayer(t, n, r);
                            case 5:
                                a = Ce(t, `change`, function() {
                                    return i.updatePlayer(t, n, r)
                                }), o = this.maintainPlaybackPosition(t, n, r), this.addEventListener(`disconnect`, function() {
                                    o.cancel(), a.cancel()
                                }), e.next = 14;
                                break;
                            case 10:
                                return e.next = 12, this.updateTimingObject(t, n);
                            case 12:
                                s = Ce(n, [`seeked`, `play`, `pause`, `ratechange`], function() {
                                    return i.updateTimingObject(t, n)
                                }, `on`, `off`), this.addEventListener(`disconnect`, function() {
                                    return s.cancel()
                                });
                            case 14:
                            case `end`:
                                return e.stop()
                        }
                    }, e, this)
                }));

                function t(t, n, r) {
                    return e.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: `updateTimingObject`,
            value: function() {
                var e = E(w().mark(function e(t, n) {
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.t0 = t, e.next = 3, n.getCurrentTime();
                            case 3:
                                return e.t1 = e.sent, e.next = 6, n.getPaused();
                            case 6:
                                if (!e.sent) {
                                    e.next = 10;
                                    break
                                }
                                e.t2 = 0, e.next = 13;
                                break;
                            case 10:
                                return e.next = 12, n.getPlaybackRate();
                            case 12:
                                e.t2 = e.sent;
                            case 13:
                                e.t3 = e.t2, e.t4 = {
                                    position: e.t1,
                                    velocity: e.t3
                                }, e.t0.update.call(e.t0, e.t4);
                            case 16:
                            case `end`:
                                return e.stop()
                        }
                    }, e)
                }));

                function t(t, n) {
                    return e.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: `updatePlayer`,
            value: function() {
                var e = E(w().mark(function e(t, n, r) {
                    var i, a, o;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = t.query(), a = i.position, o = i.velocity, typeof a == `number` && n.setCurrentTime(a), typeof o != `number`) {
                                    e.next = 25;
                                    break
                                }
                                if (o !== 0) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 6, n.getPaused();
                            case 6:
                                if (e.t0 = e.sent, e.t0 !== !1) {
                                    e.next = 9;
                                    break
                                }
                                n.pause();
                            case 9:
                                e.next = 25;
                                break;
                            case 11:
                                if (!(o > 0)) {
                                    e.next = 25;
                                    break
                                }
                                return e.next = 14, n.getPaused();
                            case 14:
                                if (e.t1 = e.sent, e.t1 !== !0) {
                                    e.next = 19;
                                    break
                                }
                                return e.next = 18, n.play().catch(function() {
                                    var e = E(w().mark(function e(t) {
                                        return w().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (!(t.name === `NotAllowedError` && r.autoPlayMuted)) {
                                                        e.next = 5;
                                                        break
                                                    }
                                                    return e.next = 3, n.setMuted(!0);
                                                case 3:
                                                    return e.next = 5, n.play().catch(function(e) {
                                                        return console.error(`Couldn't play the video from TimingSrcConnector. Error:`, e)
                                                    });
                                                case 5:
                                                case `end`:
                                                    return e.stop()
                                            }
                                        }, e)
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            case 18:
                                this.updatePlayer(t, n, r);
                            case 19:
                                return e.next = 21, n.getPlaybackRate();
                            case 21:
                                if (e.t2 = e.sent, e.t3 = o, e.t2 === e.t3) {
                                    e.next = 25;
                                    break
                                }
                                n.setPlaybackRate(o);
                            case 25:
                            case `end`:
                                return e.stop()
                        }
                    }, e, this)
                }));

                function t(t, n, r) {
                    return e.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: `maintainPlaybackPosition`,
            value: function(e, t, n) {
                var r = this,
                    i = n.allowedDrift,
                    a = n.maxAllowedDrift,
                    o = n.minCheckInterval,
                    s = n.maxRateAdjustment,
                    c = n.maxTimeToCatchUp,
                    l = Math.min(c, Math.max(o, a)) * 1e3,
                    u = function() {
                        var n = E(w().mark(function n() {
                            var o, l, u, d, f;
                            return w().wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (n.t0 = e.query().velocity === 0, n.t0) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.next = 4, t.getPaused();
                                    case 4:
                                        n.t1 = n.sent, n.t0 = n.t1 === !0;
                                    case 6:
                                        if (!n.t0) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.abrupt(`return`);
                                    case 8:
                                        return n.t2 = e.query().position, n.next = 11, t.getCurrentTime();
                                    case 11:
                                        if (n.t3 = n.sent, o = n.t2 - n.t3, l = Math.abs(o), r.log(`Drift: ${o}`), !(l > a)) {
                                            n.next = 22;
                                            break
                                        }
                                        return n.next = 18, r.adjustSpeed(t, 0);
                                    case 18:
                                        t.setCurrentTime(e.query().position), r.log(`Resync by currentTime`), n.next = 29;
                                        break;
                                    case 22:
                                        if (!(l > i)) {
                                            n.next = 29;
                                            break
                                        }
                                        return u = l / c, d = s, f = u < d ? (d - u) / 2 : d, n.next = 28, r.adjustSpeed(t, f * Math.sign(o));
                                    case 28:
                                        r.log(`Resync by playbackRate`);
                                    case 29:
                                    case `end`:
                                        return n.stop()
                                }
                            }, n)
                        }));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    d = setInterval(function() {
                        return u()
                    }, l);
                return {
                    cancel: function() {
                        return clearInterval(d)
                    }
                }
            }
        }, {
            key: `log`,
            value: function(e) {
                var t;
                (t = this.logger) == null || t.call(this, `TimingSrcConnector: ${e}`)
            }
        }, {
            key: `waitForTOReadyState`,
            value: function(e, t) {
                return new Promise(function(n) {
                    (function r() {
                        e.readyState === t ? n() : e.addEventListener(`readystatechange`, r, {
                            once: !0
                        })
                    })()
                })
            }
        }]), n
    }(L(EventTarget)), q = new WeakMap, J = new WeakMap, Y = {}, X = function() {
        function e(t) {
            var n = this,
                r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (D(this, e), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn(`A jQuery object with multiple elements was passed, using the first element.`), t = t[0]), typeof document < `u` && typeof t == `string` && (t = document.getElementById(t)), !ae(t)) throw TypeError(`You must pass either a valid element or a valid id.`);
            if (t.nodeName !== `IFRAME`) {
                var i = t.querySelector(`iframe`);
                i && (t = i)
            }
            if (t.nodeName === `IFRAME` && !z(t.getAttribute(`src`) || ``)) throw Error(`The player element passed isn’t a Vimeo embed.`);
            if (q.has(t)) return q.get(t);
            this._window = t.ownerDocument.defaultView, this.element = t, this.origin = `*`;
            var a = new G(function(e, i) {
                if (n._onMessage = function(t) {
                        if (!(!z(t.origin) || n.element.contentWindow !== t.source)) {
                            n.origin === `*` && (n.origin = t.origin);
                            var r = U(t.data);
                            if (r && r.event === `error` && r.data && r.data.method === `ready`) {
                                var a = Error(r.data.message);
                                a.name = r.data.name, i(a);
                                return
                            }
                            var o = r && r.event === `ready`,
                                s = r && r.method === `ping`;
                            if (o || s) {
                                n.element.setAttribute(`data-ready`, `true`), e();
                                return
                            }
                            pe(n, r)
                        }
                    }, n._window.addEventListener(`message`, n._onMessage), n.element.nodeName !== `IFRAME`) {
                    var a = me(t, r);
                    ge(le(a), a, t).then(function(e) {
                        var r = he(e, t);
                        return n.element = r, n._originalElement = t, fe(t, r), q.set(n.element, n), e
                    }).catch(i)
                }
            });
            if (J.set(this, a), q.set(this.element, this), this.element.nodeName === `IFRAME` && W(this, `ping`), Y.isEnabled) {
                var o = function() {
                    return Y.exit()
                };
                this.fullscreenchangeHandler = function() {
                    Y.isFullscreen ? B(n, `event:exitFullscreen`, o) : H(n, `event:exitFullscreen`, o), n.ready().then(function() {
                        W(n, `fullscreenchange`, Y.isFullscreen)
                    })
                }, Y.on(`fullscreenchange`, this.fullscreenchangeHandler)
            }
            return this
        }
        return k(e, [{
            key: `callMethod`,
            value: function(e) {
                var t = this,
                    n = [...arguments].slice(1);
                if (e == null) throw TypeError(`You must pass a method name.`);
                return new G(function(r, i) {
                    return t.ready().then(function() {
                        B(t, e, {
                            resolve: r,
                            reject: i
                        }), W(t, e, n)
                    }).catch(i)
                })
            }
        }, {
            key: `get`,
            value: function(e) {
                var t = this;
                return new G(function(n, r) {
                    return e = ie(e, `get`), t.ready().then(function() {
                        B(t, e, {
                            resolve: n,
                            reject: r
                        }), W(t, e)
                    }).catch(r)
                })
            }
        }, {
            key: `set`,
            value: function(e, t) {
                var n = this;
                return new G(function(r, i) {
                    if (e = ie(e, `set`), t == null) throw TypeError(`There must be a value to set.`);
                    return n.ready().then(function() {
                        B(n, e, {
                            resolve: r,
                            reject: i
                        }), W(n, e, t)
                    }).catch(i)
                })
            }
        }, {
            key: `on`,
            value: function(e, t) {
                if (!e) throw TypeError(`You must pass an event name.`);
                if (!t) throw TypeError(`You must pass a callback function.`);
                if (typeof t != `function`) throw TypeError(`The callback must be a function.`);
                V(this, `event:${e}`).length === 0 && this.callMethod(`addEventListener`, e).catch(function() {}), B(this, `event:${e}`, t)
            }
        }, {
            key: `off`,
            value: function(e, t) {
                if (!e) throw TypeError(`You must pass an event name.`);
                if (t && typeof t != `function`) throw TypeError(`The callback must be a function.`);
                H(this, `event:${e}`, t) && this.callMethod(`removeEventListener`, e).catch(function(e) {})
            }
        }, {
            key: `loadVideo`,
            value: function(e) {
                return this.callMethod(`loadVideo`, e)
            }
        }, {
            key: `ready`,
            value: function() {
                var e = J.get(this) || new G(function(e, t) {
                    t(Error(`Unknown player. Probably unloaded.`))
                });
                return G.resolve(e)
            }
        }, {
            key: `addCuePoint`,
            value: function(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return this.callMethod(`addCuePoint`, {
                    time: e,
                    data: t
                })
            }
        }, {
            key: `removeCuePoint`,
            value: function(e) {
                return this.callMethod(`removeCuePoint`, e)
            }
        }, {
            key: `enableTextTrack`,
            value: function(e, t) {
                if (!e) throw TypeError(`You must pass a language.`);
                return this.callMethod(`enableTextTrack`, {
                    language: e,
                    kind: t
                })
            }
        }, {
            key: `disableTextTrack`,
            value: function() {
                return this.callMethod(`disableTextTrack`)
            }
        }, {
            key: `pause`,
            value: function() {
                return this.callMethod(`pause`)
            }
        }, {
            key: `play`,
            value: function() {
                return this.callMethod(`play`)
            }
        }, {
            key: `requestFullscreen`,
            value: function() {
                return Y.isEnabled ? Y.request(this.element) : this.callMethod(`requestFullscreen`)
            }
        }, {
            key: `exitFullscreen`,
            value: function() {
                return Y.isEnabled ? Y.exit() : this.callMethod(`exitFullscreen`)
            }
        }, {
            key: `getFullscreen`,
            value: function() {
                return Y.isEnabled ? G.resolve(Y.isFullscreen) : this.get(`fullscreen`)
            }
        }, {
            key: `requestPictureInPicture`,
            value: function() {
                return this.callMethod(`requestPictureInPicture`)
            }
        }, {
            key: `exitPictureInPicture`,
            value: function() {
                return this.callMethod(`exitPictureInPicture`)
            }
        }, {
            key: `getPictureInPicture`,
            value: function() {
                return this.get(`pictureInPicture`)
            }
        }, {
            key: `remotePlaybackPrompt`,
            value: function() {
                return this.callMethod(`remotePlaybackPrompt`)
            }
        }, {
            key: `unload`,
            value: function() {
                return this.callMethod(`unload`)
            }
        }, {
            key: `destroy`,
            value: function() {
                var e = this;
                return new G(function(t) {
                    if (J.delete(e), q.delete(e.element), e._originalElement && (q.delete(e._originalElement), e._originalElement.removeAttribute(`data-vimeo-initialized`)), e.element && e.element.nodeName === `IFRAME` && e.element.parentNode && (e.element.parentNode.parentNode && e._originalElement && e._originalElement !== e.element.parentNode ? e.element.parentNode.parentNode.removeChild(e.element.parentNode) : e.element.parentNode.removeChild(e.element)), e.element && e.element.nodeName === `DIV` && e.element.parentNode) {
                        e.element.removeAttribute(`data-vimeo-initialized`);
                        var n = e.element.querySelector(`iframe`);
                        n && n.parentNode && (n.parentNode.parentNode && e._originalElement && e._originalElement !== n.parentNode ? n.parentNode.parentNode.removeChild(n.parentNode) : n.parentNode.removeChild(n))
                    }
                    e._window.removeEventListener(`message`, e._onMessage), Y.isEnabled && Y.off(`fullscreenchange`, e.fullscreenchangeHandler), t()
                })
            }
        }, {
            key: `getAutopause`,
            value: function() {
                return this.get(`autopause`)
            }
        }, {
            key: `setAutopause`,
            value: function(e) {
                return this.set(`autopause`, e)
            }
        }, {
            key: `getBuffered`,
            value: function() {
                return this.get(`buffered`)
            }
        }, {
            key: `getCameraProps`,
            value: function() {
                return this.get(`cameraProps`)
            }
        }, {
            key: `setCameraProps`,
            value: function(e) {
                return this.set(`cameraProps`, e)
            }
        }, {
            key: `getChapters`,
            value: function() {
                return this.get(`chapters`)
            }
        }, {
            key: `getCurrentChapter`,
            value: function() {
                return this.get(`currentChapter`)
            }
        }, {
            key: `getColor`,
            value: function() {
                return this.get(`color`)
            }
        }, {
            key: `getColors`,
            value: function() {
                return G.all([this.get(`colorOne`), this.get(`colorTwo`), this.get(`colorThree`), this.get(`colorFour`)])
            }
        }, {
            key: `setColor`,
            value: function(e) {
                return this.set(`color`, e)
            }
        }, {
            key: `setColors`,
            value: function(e) {
                if (!Array.isArray(e)) return new G(function(e, t) {
                    return t(TypeError(`Argument must be an array.`))
                });
                var t = new G(function(e) {
                        return e(null)
                    }),
                    n = [e[0] ? this.set(`colorOne`, e[0]) : t, e[1] ? this.set(`colorTwo`, e[1]) : t, e[2] ? this.set(`colorThree`, e[2]) : t, e[3] ? this.set(`colorFour`, e[3]) : t];
                return G.all(n)
            }
        }, {
            key: `getCuePoints`,
            value: function() {
                return this.get(`cuePoints`)
            }
        }, {
            key: `getCurrentTime`,
            value: function() {
                return this.get(`currentTime`)
            }
        }, {
            key: `setCurrentTime`,
            value: function(e) {
                return this.set(`currentTime`, e)
            }
        }, {
            key: `getDuration`,
            value: function() {
                return this.get(`duration`)
            }
        }, {
            key: `getEnded`,
            value: function() {
                return this.get(`ended`)
            }
        }, {
            key: `getLoop`,
            value: function() {
                return this.get(`loop`)
            }
        }, {
            key: `setLoop`,
            value: function(e) {
                return this.set(`loop`, e)
            }
        }, {
            key: `setMuted`,
            value: function(e) {
                return this.set(`muted`, e)
            }
        }, {
            key: `getMuted`,
            value: function() {
                return this.get(`muted`)
            }
        }, {
            key: `getPaused`,
            value: function() {
                return this.get(`paused`)
            }
        }, {
            key: `getPlaybackRate`,
            value: function() {
                return this.get(`playbackRate`)
            }
        }, {
            key: `setPlaybackRate`,
            value: function(e) {
                return this.set(`playbackRate`, e)
            }
        }, {
            key: `getPlayed`,
            value: function() {
                return this.get(`played`)
            }
        }, {
            key: `getQualities`,
            value: function() {
                return this.get(`qualities`)
            }
        }, {
            key: `getQuality`,
            value: function() {
                return this.get(`quality`)
            }
        }, {
            key: `setQuality`,
            value: function(e) {
                return this.set(`quality`, e)
            }
        }, {
            key: `getRemotePlaybackAvailability`,
            value: function() {
                return this.get(`remotePlaybackAvailability`)
            }
        }, {
            key: `getRemotePlaybackState`,
            value: function() {
                return this.get(`remotePlaybackState`)
            }
        }, {
            key: `getSeekable`,
            value: function() {
                return this.get(`seekable`)
            }
        }, {
            key: `getSeeking`,
            value: function() {
                return this.get(`seeking`)
            }
        }, {
            key: `getTextTracks`,
            value: function() {
                return this.get(`textTracks`)
            }
        }, {
            key: `getVideoEmbedCode`,
            value: function() {
                return this.get(`videoEmbedCode`)
            }
        }, {
            key: `getVideoId`,
            value: function() {
                return this.get(`videoId`)
            }
        }, {
            key: `getVideoTitle`,
            value: function() {
                return this.get(`videoTitle`)
            }
        }, {
            key: `getVideoWidth`,
            value: function() {
                return this.get(`videoWidth`)
            }
        }, {
            key: `getVideoHeight`,
            value: function() {
                return this.get(`videoHeight`)
            }
        }, {
            key: `getVideoUrl`,
            value: function() {
                return this.get(`videoUrl`)
            }
        }, {
            key: `getVolume`,
            value: function() {
                return this.get(`volume`)
            }
        }, {
            key: `setVolume`,
            value: function(e) {
                return this.set(`volume`, e)
            }
        }, {
            key: `setTimingSrc`,
            value: function() {
                var e = E(w().mark(function e(t, n) {
                    var r = this,
                        i;
                    return w().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                throw TypeError(`A Timing Object must be provided.`);
                            case 2:
                                return e.next = 4, this.ready();
                            case 4:
                                return i = new ke(this, t, n), W(this, `notifyTimingObjectConnect`), i.addEventListener(`disconnect`, function() {
                                    return W(r, `notifyTimingObjectDisconnect`)
                                }), e.abrupt(`return`, i);
                            case 8:
                            case `end`:
                                return e.stop()
                        }
                    }, e, this)
                }));

                function t(t, n) {
                    return e.apply(this, arguments)
                }
                return t
            }()
        }]), e
    }(), Se || (Y = xe(), _e(), ve(), ye(), be())
}));

function je(e) {
    "use forget";
    let t = (0, Me.c)(27),
        {
            aspectRatio: n,
            videoEmbedUrl: r,
            autoplay: a,
            loop: o,
            altText: c,
            showVideoControls: l,
            keyline: u
        } = e,
        d = l !== void 0 && l,
        [f, p] = (0, Z.useState)(!1),
        m = (0, Z.useRef)(void 0),
        h = (0, Z.useRef)(null),
        g;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
        root: void 0,
        rootMargin: `-10% -35%`,
        threshold: 0
    }, t[0] = g) : g = t[0];
    let [_, v] = y(g), b, x;
    t[1] === _ ? (b = t[2], x = t[3]) : (b = () => {
        _ && !m.current && p(!0)
    }, x = [_], t[1] = _, t[2] = b, t[3] = x), (0, Z.useEffect)(b, x);
    let S, C;
    t[4] !== a || t[5] !== f || t[6] !== o ? (S = () => {
        h.current && f && !m.current && (m.current = new X(h.current, {
            autoplay: a,
            loop: o,
            muted: !0
        }), a && m.current.play())
    }, C = [f, a, o, h], t[4] = a, t[5] = f, t[6] = o, t[7] = S, t[8] = C) : (S = t[7], C = t[8]), (0, Z.useEffect)(S, C);
    let w = s(h, v),
        T = n === `1:1` ? `aspect-square` : `aspect-video`,
        E = !d,
        D;
    t[9] !== T || t[10] !== u || t[11] !== E ? (D = i(T, `relative mx-auto h-full w-full overflow-hidden rounded-2xl`, {
        "pointer-events-none": E,
        "border-token-border-default border": u
    }), t[9] = T, t[10] = u, t[11] = E, t[12] = D) : D = t[12];
    let O;
    t[13] !== d || t[14] !== r ? (O = Pe(r, d), t[13] = d, t[14] = r, t[15] = O) : O = t[15];
    let k = !u,
        A;
    t[16] !== u || t[17] !== k ? (A = i(`absolute`, {
        "-start-px -top-px h-[calc(100%+2px)] w-[calc(100%+2px)]": u,
        "start-0 top-0 h-full w-full": k
    }), t[16] = u, t[17] = k, t[18] = A) : A = t[18];
    let j;
    t[19] !== c || t[20] !== w || t[21] !== A || t[22] !== O ? (j = (0, Ne.jsx)(`iframe`, {
        ref: w,
        src: O,
        allow: `autoplay; fullscreen; picture-in-picture; clipboard-write`,
        title: c,
        className: A
    }), t[19] = c, t[20] = w, t[21] = A, t[22] = O, t[23] = j) : j = t[23];
    let M;
    return t[24] !== j || t[25] !== D ? (M = (0, Ne.jsx)(`div`, {
        className: D,
        children: j
    }), t[24] = j, t[25] = D, t[26] = M) : M = t[26], M
}
var Me, Z, Ne, Pe, Fe = e((() => {
    Me = _(), v(), m(), Ae(), a(), Z = n(g()), Ne = h(), Pe = (e, t) => {
        let n = new URL(e),
            r = n.searchParams;
        return r.set(`controls`, t ? `1` : `0`), r.set(`autopause`, `0`), r.set(`muted`, `1`), n.toString()
    }
}));

function Ie(e) {
    "use forget";
    let t = (0, Le.c)(24),
        {
            videoEmbedUrl: n,
            videoEmbedUrlMobile: a,
            asset: o,
            assetUrl: s,
            loop: c,
            autoplay: l,
            altText: u,
            ratio: p,
            ratioMobile: m,
            showVideoControls: h,
            keyline: g,
            rounding: _
        } = e,
        v = _ === void 0 ? `rounded` : _,
        y = !r(d),
        b = n ? `vimeoEmbed` : `htmlVideo`,
        x = y && a ? a : n;
    if (b === `vimeoEmbed`) {
        if (!x) return null;
        let e = y && m ? m : p,
            n;
        return t[0] !== u || t[1] !== l || t[2] !== g || t[3] !== c || t[4] !== h || t[5] !== e || t[6] !== x ? (n = (0, Q.jsx)(je, {
            videoEmbedUrl: x,
            autoplay: l,
            loop: c,
            altText: u,
            aspectRatio: e,
            showVideoControls: h,
            keyline: g
        }), t[0] = u, t[1] = l, t[2] = g, t[3] = c, t[4] = h, t[5] = e, t[6] = x, t[7] = n) : n = t[7], n
    } else {
        let e;
        t[8] !== o?.file || t[9] !== s ? (e = s ?? (o?.file?.url && f(o?.file.url)), t[8] = o?.file, t[9] = s, t[10] = e) : e = t[10];
        let n = e;
        if (!n) return null;
        let r = v === `rounded`,
            a = v === `app-icon`,
            d;
        t[11] !== g || t[12] !== r || t[13] !== a ? (d = i({
            "rounded-2xl": r,
            "rounded-[24%]": a,
            "border-token-border-default border": g
        }), t[11] = g, t[12] = r, t[13] = a, t[14] = d) : d = t[14];
        let p = o?.file.contentType,
            m;
        t[15] !== n || t[16] !== p ? (m = (0, Q.jsx)(`source`, {
            src: n,
            type: p
        }), t[15] = n, t[16] = p, t[17] = m) : m = t[17];
        let h;
        return t[18] !== u || t[19] !== l || t[20] !== c || t[21] !== d || t[22] !== m ? (h = (0, Q.jsx)(`video`, {
            controls: !1,
            playsInline: !0,
            muted: !0,
            autoPlay: l,
            loop: c,
            className: d,
            title: u,
            children: m
        }), t[18] = u, t[19] = l, t[20] = c, t[21] = d, t[22] = m, t[23] = h) : h = t[23], h
    }
}
var Le, Q, Re = e((() => {
        Le = _(), u(), o(), c(), a(), Fe(), Q = h()
    })),
    ze = t({
        default: () => Ue,
        getMediaType: () => Be
    });

function Be({
    asset: e,
    videoEmbedUrl: t,
    assetUrl: n
}) {
    return t ? `video` : e?.file?.contentType?.startsWith(`image`) ? `image` : n && He.some(e => n.endsWith(e)) || e ? `video` : n ? `image` : `unknown`
}
var Ve, $, He, Ue, We = e((() => {
    Ve = _(), p(), a(), b(), Re(), $ = h(), He = [`.mp4`, `.webm`], Ue = e => {
        "use forget";
        let t = (0, Ve.c)(46),
            {
                asset: n,
                assetUrl: r,
                assetMobile: a,
                assetMobileUrl: o,
                assetDark: s,
                assetDarkUrl: c,
                assetDarkMobile: u,
                assetDarkMobileUrl: d,
                altText: f,
                videoEmbedUrl: p,
                videoEmbedUrlMobile: m,
                videoLoop: h,
                videoAutoPlay: g,
                ratio: _,
                ratioMobile: v,
                className: y,
                showVideoControls: b,
                keyline: S,
                imageLoading: C,
                imageMaxWidth: w,
                imageQuality: T,
                imageSizes: E,
                mediaClassName: D,
                wrapperClassName: O,
                rounding: k,
                contentfulDebugAttributes: A
            } = e,
            j = S !== void 0 && S,
            M = k === void 0 ? `rounded` : k,
            N;
        t[0] !== n || t[1] !== r || t[2] !== p ? (N = Be({
            asset: n,
            videoEmbedUrl: p,
            assetUrl: r
        }), t[0] = n, t[1] = r, t[2] = p, t[3] = N) : N = t[3];
        let P = N;
        if (P === `unknown`) return l.addError(Error(`Contentful media item was added but no file or url was included!`)), null;
        let F;
        t[4] === y ? F = t[5] : (F = i(`h-full w-full`, y), t[4] = y, t[5] = F);
        let I;
        t[6] !== f || t[7] !== n || t[8] !== s || t[9] !== u || t[10] !== d || t[11] !== c || t[12] !== a || t[13] !== o || t[14] !== r || t[15] !== C || t[16] !== w || t[17] !== T || t[18] !== E || t[19] !== j || t[20] !== D || t[21] !== P || t[22] !== _ || t[23] !== v || t[24] !== M || t[25] !== O ? (I = P === `image` && (0, $.jsx)(x, {
            asset: n,
            assetUrl: r,
            assetMobile: a,
            assetMobileUrl: o,
            assetDark: s,
            assetDarkUrl: c,
            assetDarkMobile: u,
            assetDarkMobileUrl: d,
            altText: f,
            loading: C,
            maxWidth: w,
            quality: T,
            sizes: E,
            keyline: j,
            mediaClassName: D,
            wrapperClassName: O,
            ratio: _,
            ratioMobile: v,
            rounding: M
        }), t[6] = f, t[7] = n, t[8] = s, t[9] = u, t[10] = d, t[11] = c, t[12] = a, t[13] = o, t[14] = r, t[15] = C, t[16] = w, t[17] = T, t[18] = E, t[19] = j, t[20] = D, t[21] = P, t[22] = _, t[23] = v, t[24] = M, t[25] = O, t[26] = I) : I = t[26];
        let L;
        t[27] !== f || t[28] !== n || t[29] !== r || t[30] !== j || t[31] !== P || t[32] !== _ || t[33] !== v || t[34] !== M || t[35] !== b || t[36] !== g || t[37] !== p || t[38] !== m || t[39] !== h ? (L = P === `video` && (0, $.jsx)(Ie, {
            videoEmbedUrl: p,
            videoEmbedUrlMobile: m,
            asset: n,
            assetUrl: r,
            loop: h,
            autoplay: g,
            altText: f,
            ratio: _,
            ratioMobile: v,
            showVideoControls: b,
            keyline: j,
            rounding: M
        }), t[27] = f, t[28] = n, t[29] = r, t[30] = j, t[31] = P, t[32] = _, t[33] = v, t[34] = M, t[35] = b, t[36] = g, t[37] = p, t[38] = m, t[39] = h, t[40] = L) : L = t[40];
        let R;
        return t[41] !== A || t[42] !== F || t[43] !== I || t[44] !== L ? (R = (0, $.jsxs)(`div`, {
            ...A,
            className: F,
            children: [I, L]
        }), t[41] = A, t[42] = F, t[43] = I, t[44] = L, t[45] = R) : R = t[45], R
    }
}));
export {
    X as a, ze as i, Be as n, Ae as o, We as r, Ue as t
};
//# sourceMappingURL=ee72d6dc-c7jh18p3xvrfc7xn.js.map