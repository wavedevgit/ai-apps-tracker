import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    XU as n
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Vn as r
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AC as i,
    BC as a,
    EC as o,
    FC as s,
    HC as c,
    LC as l,
    OC as u,
    RC as d,
    TC as f,
    UC as p,
    WC as m,
    zC as h
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    t as g
} from "./49c3887d-mf5sqw9p62ea3pza.js";

function _(e, t, n) {
    switch (n) {
        case `Backspace`:
            t > 0 && (e = e.slice(0, t - 1) + e.slice(t), t--);
            break;
        case `Delete`:
            e = e.slice(0, t) + e.slice(t + 1);
            break
    }
    return {
        value: e,
        caret: t
    }
}
var v = e((() => {}));

function y(e, t, n) {
    for (var r = {}, i = ``, a = 0, o = 0; o < e.length;) {
        var s = n(e[o], i, r);
        s !== void 0 && (i += s, t !== void 0 && (t === o ? a = i.length - 1 : t > o && (a = i.length))), o++
    }
    return t === void 0 && (a = i.length), {
        value: i,
        caret: a
    }
}
var b = e((() => {}));

function x(e, t) {
    var n = typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = S(e)) || t && e && typeof e.length == `number`) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function S(e, t) {
    if (e) {
        if (typeof e == `string`) return C(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set`) return Array.from(e);
        if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
    }
}

function C(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function w(e, t) {
    for (var n = 0, r = x(t.split(``)), i; !(i = r()).done;) i.value === e && n++;
    return n
}
var ee = e((() => {}));

function te(e, t) {
    for (var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : `x`, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ` `, i = e.length, a = w(`(`, e) - w(`)`, e); a > 0 && i < t.length;) e += t[i].replace(n, r), t[i] === `)` && a--, i++;
    return e
}
var ne = e((() => {
    ee()
}));

function re(e, t) {
    var n = typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = ie(e)) || t && e && typeof e.length == `number`) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function ie(e, t) {
    if (e) {
        if (typeof e == `string`) return ae(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set`) return Array.from(e);
        if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t)
    }
}

function ae(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function oe(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : `x`,
        n = arguments.length > 2 ? arguments[2] : void 0;
    if (!e) return function(e) {
        return {
            text: e
        }
    };
    var r = w(t, e);
    return function(i) {
        if (!i) return {
            text: ``,
            template: e
        };
        for (var a = 0, o = ``, s = re(e.split(``)), c; !(c = s()).done;) {
            var l = c.value;
            if (l !== t) {
                o += l;
                continue
            }
            if (o += i[a], a++, a === i.length && i.length < r) break
        }
        return n && (o = te(o, e)), {
            text: o,
            template: e
        }
    }
}
var se = e((() => {
    ee(), ne()
}));

function ce(e, t, n) {
    typeof n == `string` && (n = oe(n));
    var r = n(e) || {},
        i = r.text,
        a = r.template;
    if (i === void 0 && (i = e), a)
        if (t === void 0) t = i.length;
        else {
            for (var o = 0, s = !1, c = -1; o < i.length && o < a.length;) {
                if (i[o] !== a[o]) {
                    if (t === 0) {
                        s = !0, t = o;
                        break
                    }
                    c = o, t--
                }
                o++
            }
            s || (t = c + 1)
        } return {
        text: i,
        caret: t
    }
}
var le = e((() => {
    se()
}));

function ue(e) {
    return e.hasAttribute(`readonly`)
}

function de(e) {
    if (e.selectionStart !== e.selectionEnd) return {
        start: e.selectionStart,
        end: e.selectionEnd
    }
}

function fe(e) {
    switch (e.keyCode) {
        case ge.Backspace:
            return `Backspace`;
        case ge.Delete:
            return `Delete`
    }
}

function pe(e) {
    return e.selectionStart
}

function me(e, t) {
    t !== void 0 && (he() ? setTimeout(function() {
        return e.setSelectionRange(t, t)
    }, 0) : e.setSelectionRange(t, t))
}

function he() {
    if (typeof navigator < `u`) return _e.test(navigator.userAgent)
}
var ge, _e, ve = e((() => {
    ge = {
        Backspace: 8,
        Delete: 46
    }, _e = /Android/i
}));

function ye(e, t, n, r, i) {
    Se(t, n, r, void 0, i)
}

function be(e, t, n, r, i) {
    if (!ue(t)) {
        var a = fe(e);
        switch (a) {
            case `Delete`:
            case `Backspace`:
                e.preventDefault();
                var o = de(t);
                return o ? (xe(t, o), Se(t, n, r, void 0, i)) : Se(t, n, r, a, i);
            default:
        }
    }
}

function xe(e, t) {
    var n = e.value;
    n = n.slice(0, t.start) + n.slice(t.end), e.value = n, me(e, t.start)
}

function Se(e, t, n, r, i) {
    var a = y(e.value, pe(e), t),
        o = a.value,
        s = a.caret;
    if (r) {
        var c = _(o, s, r);
        o = c.value, s = c.caret
    }
    var l = ce(o, s, n),
        u = l.text;
    s = l.caret, e.value = u, me(e, s), i && i(o)
}
var Ce = e((() => {
    v(), b(), le(), ve()
}));

function we(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? we(Object(n), !0).forEach(function(t) {
            Te(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : we(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function Te(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Ee(e, t) {
    if (e == null) return {};
    var n = De(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function De(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function Oe(e) {
    var t = e.ref,
        n = e.parse,
        r = e.format,
        i = e.value,
        a = e.defaultValue,
        o = e.controlled,
        s = o === void 0 || o,
        c = e.onChange,
        l = e.onKeyDown,
        u = Ee(e, Ae),
        d = (0, E.useRef)(),
        f = (0, E.useCallback)(function(e) {
            d.current = e, t && (typeof t == `function` ? t(e) : t.current = e)
        }, [t]),
        p = (0, E.useCallback)(function(e) {
            return ye(e, d.current, n, r, c)
        }, [d, n, r, c]),
        m = (0, E.useCallback)(function(e) {
            if (l && l(e), !e.defaultPrevented) return be(e, d.current, n, r, c)
        }, [d, n, r, c, l]),
        h = T(T({}, u), {}, {
            ref: f,
            onChange: p,
            onKeyDown: m
        });
    return s ? T(T({}, h), {}, {
        value: r(ke(i) ? `` : i).text
    }) : T(T({}, h), {}, {
        defaultValue: r(ke(a) ? `` : a).text
    })
}

function ke(e) {
    return e == null
}
var E, Ae, je = e((() => {
    E = t(r(), 1), Ce(), Ae = [`ref`, `parse`, `format`, `value`, `defaultValue`, `controlled`, `onChange`, `onKeyDown`]
}));

function Me(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Ne(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? Me(Object(n), !0).forEach(function(t) {
            Pe(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function Pe(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Fe(e, t) {
    if (e == null) return {};
    var n = Ie(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function Ie(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function D(e, t) {
    var n = e.inputComponent,
        r = n === void 0 ? `input` : n,
        i = e.parse,
        a = e.format,
        o = e.value,
        s = e.defaultValue,
        c = e.onChange,
        l = e.controlled,
        u = e.onKeyDown,
        d = e.type,
        f = d === void 0 ? `text` : d,
        p = Fe(e, Re),
        m = Oe(Ne({
            ref: t,
            parse: i,
            format: a,
            value: o,
            defaultValue: s,
            onChange: c,
            controlled: l,
            onKeyDown: u,
            type: f
        }, p));
    return Le.createElement(r, m)
}
var Le, O, Re, ze, Be = e((() => {
        Le = t(r(), 1), O = t(n(), 1), je(), Re = [`inputComponent`, `parse`, `format`, `value`, `defaultValue`, `onChange`, `controlled`, `onKeyDown`, `type`], D = Le.forwardRef(D), D.propTypes = {
            parse: O.default.func.isRequired,
            format: O.default.func.isRequired,
            inputComponent: O.default.elementType,
            type: O.default.string,
            value: O.default.string,
            defaultValue: O.default.string,
            onChange: O.default.func,
            controlled: O.default.bool,
            onKeyDown: O.default.func,
            onCut: O.default.func,
            onPaste: O.default.func
        }, ze = D
    })),
    Ve = e((() => {
        Be()
    }));

function He(e) {
    var t = e.inputFormat,
        n = e.country,
        r = e.metadata;
    return t === `NATIONAL_PART_OF_INTERNATIONAL` ? `+${a(n,r)}` : ``
}

function Ue(e, t) {
    return t && (e = e.slice(t.length), e[0] === ` ` && (e = e.slice(1))), e
}
var We = e((() => {
    f()
}));

function Ge(e, t, n) {
    if (!(n && n.ignoreRest)) return d(e, t, function(e) {
        if (n) switch (e) {
            case `end`:
                n.ignoreRest = !0;
                break
        }
    })
}
var Ke = e((() => {
    f()
}));

function qe(e) {
    var t = e.onKeyDown,
        n = e.inputFormat;
    return (0, Ye.useCallback)(function(e) {
        if (e.keyCode === Xe && n === `INTERNATIONAL` && e.target instanceof HTMLInputElement && Je(e.target) === Ze.length) {
            e.preventDefault();
            return
        }
        t && t(e)
    }, [t, n])
}

function Je(e) {
    return e.selectionStart
}
var Ye, Xe, Ze, Qe = e((() => {
    Ye = t(r(), 1), Xe = 8, Ze = `+`
}));

function $e() {
    return $e = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, $e.apply(this, arguments)
}

function et(e, t) {
    if (e == null) return {};
    var n = tt(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function tt(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function nt(e) {
    function t(t, n) {
        var r = t.onKeyDown,
            a = t.country,
            o = t.inputFormat,
            s = t.metadata,
            c = s === void 0 ? e : s;
        t.international, t.withCountryCallingCode;
        var l = et(t, rt),
            u = (0, k.useCallback)(function(e) {
                var t = new i(a, c),
                    n = He({
                        inputFormat: o,
                        country: a,
                        metadata: c
                    }),
                    r = t.input(n + e),
                    s = t.getTemplate();
                return n && (r = Ue(r, n), s &&= Ue(s, n)), {
                    text: r,
                    template: s
                }
            }, [a, c]),
            d = qe({
                onKeyDown: r,
                inputFormat: o
            });
        return k.createElement(ze, $e({}, l, {
            ref: n,
            parse: Ge,
            format: u,
            onKeyDown: d
        }))
    }
    return t = k.forwardRef(t), t.propTypes = {
        value: A.default.string.isRequired,
        onChange: A.default.func.isRequired,
        onKeyDown: A.default.func,
        country: A.default.string,
        inputFormat: A.default.oneOf([`INTERNATIONAL`, `NATIONAL_PART_OF_INTERNATIONAL`, `NATIONAL`, `INTERNATIONAL_OR_NATIONAL`]).isRequired,
        metadata: A.default.object
    }, t
}
var k, A, rt, it, at = e((() => {
    k = t(r(), 1), A = t(n(), 1), Ve(), f(), We(), Ke(), Qe(), rt = [`onKeyDown`, `country`, `inputFormat`, `metadata`, `international`, `withCountryCallingCode`], it = nt()
}));

function ot() {
    return ot = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ot.apply(this, arguments)
}

function st(e, t) {
    if (e == null) return {};
    var n = ct(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function ct(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function lt(e) {
    function t(t, n) {
        var r = t.value,
            i = t.onChange,
            a = t.onKeyDown,
            o = t.country,
            s = t.inputFormat,
            c = t.metadata,
            u = c === void 0 ? e : c,
            d = t.inputComponent,
            f = d === void 0 ? `input` : d;
        t.international, t.withCountryCallingCode;
        var p = st(t, dt),
            m = He({
                inputFormat: s,
                country: o,
                metadata: u
            }),
            h = (0, j.useCallback)(function(e) {
                var t = l(e.target.value);
                t === r && ut(m, t, o, u).indexOf(e.target.value) === 0 && (t = t.slice(0, -1)), i(t)
            }, [m, r, i, o, u]),
            g = qe({
                onKeyDown: a,
                inputFormat: s
            });
        return j.createElement(f, ot({}, p, {
            ref: n,
            value: ut(m, r, o, u),
            onChange: h,
            onKeyDown: g
        }))
    }
    return t = j.forwardRef(t), t.propTypes = {
        value: M.default.string.isRequired,
        onChange: M.default.func.isRequired,
        onKeyDown: M.default.func,
        country: M.default.string,
        inputFormat: M.default.oneOf([`INTERNATIONAL`, `NATIONAL_PART_OF_INTERNATIONAL`, `NATIONAL`, `INTERNATIONAL_OR_NATIONAL`]).isRequired,
        metadata: M.default.object,
        inputComponent: M.default.elementType
    }, t
}

function ut(e, t, n, r) {
    return Ue(o(e + t, n, r), e)
}
var j, M, dt, ft, pt = e((() => {
    j = t(r(), 1), M = t(n(), 1), f(), We(), Qe(), dt = [`value`, `onChange`, `onKeyDown`, `country`, `inputFormat`, `metadata`, `inputComponent`, `international`, `withCountryCallingCode`], ft = lt()
}));

function mt(e) {
    return ht(e[0]) + ht(e[1])
}

function ht(e) {
    return String.fromCodePoint(127397 + e.toUpperCase().charCodeAt(0))
}
var gt = e((() => {})),
    _t = e((() => {
        gt()
    }));

function vt(e, t) {
    var n = typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = yt(e)) || t && e && typeof e.length == `number`) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function yt(e, t) {
    if (e) {
        if (typeof e == `string`) return bt(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set`) return Array.from(e);
        if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return bt(e, t)
    }
}

function bt(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function N() {
    return N = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, N.apply(this, arguments)
}

function xt(e, t) {
    if (e == null) return {};
    var n = St(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function St(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function Ct(e) {
    var t = e.value,
        n = e.onChange,
        r = e.options,
        i = e.disabled,
        a = e.readOnly,
        o = xt(e, kt),
        s = (0, P.useCallback)(function(e) {
            var t = e.target.value;
            n(t === `ZZ` ? void 0 : t)
        }, [n]);
    return (0, P.useMemo)(function() {
        return Et(r, t)
    }, [r, t]), P.createElement(`select`, N({}, o, {
        disabled: i || a,
        readOnly: a,
        value: t || `ZZ`,
        onChange: s
    }), r.map(function(e) {
        var t = e.value,
            n = e.label,
            r = e.divider;
        return P.createElement(`option`, {
            key: r ? `|` : t || `ZZ`,
            value: r ? `|` : t || `ZZ`,
            disabled: !!r,
            style: r ? jt : void 0
        }, n)
    }))
}

function wt(e) {
    var t = e.value,
        n = e.options,
        r = e.className,
        i = e.iconComponent;
    e.getIconAspectRatio;
    var a = e.arrowComponent,
        o = a === void 0 ? Tt : a,
        s = e.unicodeFlags,
        c = xt(e, At),
        l = (0, P.useMemo)(function() {
            return Et(n, t)
        }, [n, t]);
    return P.createElement(`div`, {
        className: `PhoneInputCountry`
    }, P.createElement(Ct, N({}, c, {
        value: t,
        options: n,
        className: (0, Ot.default)(`PhoneInputCountrySelect`, r)
    })), l && (s && t ? P.createElement(`div`, {
        className: `PhoneInputCountryIconUnicode`
    }, mt(t)) : P.createElement(i, {
        "aria-hidden": !0,
        country: t,
        label: l.label,
        aspectRatio: s ? 1 : void 0
    })), P.createElement(o, null))
}

function Tt() {
    return P.createElement(`div`, {
        className: `PhoneInputCountrySelectArrow`
    })
}

function Et(e, t) {
    for (var n = vt(e), r; !(r = n()).done;) {
        var i = r.value;
        if (!i.divider && Dt(i.value, t)) return i
    }
}

function Dt(e, t) {
    return e == null ? t == null : e === t
}
var P, F, Ot, kt, At, jt, Mt = e((() => {
    P = t(r(), 1), F = t(n(), 1), Ot = t(g(), 1), _t(), kt = [`value`, `onChange`, `options`, `disabled`, `readOnly`], At = [`value`, `options`, `className`, `iconComponent`, `getIconAspectRatio`, `arrowComponent`, `unicodeFlags`], Ct.propTypes = {
        value: F.default.string,
        onChange: F.default.func.isRequired,
        options: F.default.arrayOf(F.default.shape({
            value: F.default.string,
            label: F.default.string,
            divider: F.default.bool
        })).isRequired,
        disabled: F.default.bool,
        readOnly: F.default.bool
    }, jt = {
        fontSize: `1px`,
        backgroundColor: `currentColor`,
        color: `inherit`
    }, wt.propTypes = {
        iconComponent: F.default.elementType,
        arrowComponent: F.default.elementType,
        unicodeFlags: F.default.bool
    }
}));

function Nt() {
    return Nt = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Nt.apply(this, arguments)
}

function Pt(e, t) {
    if (e == null) return {};
    var n = Ft(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function Ft(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function It(e) {
    var t = e.country,
        n = e.countryName,
        r = e.flags,
        i = e.flagUrl,
        a = Pt(e, Rt);
    return r && r[t] ? r[t]({
        title: n
    }) : Lt.createElement(`img`, Nt({}, a, {
        alt: n,
        role: n ? void 0 : `presentation`,
        src: i.replace(`{XX}`, t).replace(`{xx}`, t.toLowerCase())
    }))
}
var Lt, I, Rt, zt = e((() => {
    Lt = t(r(), 1), I = t(n(), 1), g(), Rt = [`country`, `countryName`, `flags`, `flagUrl`], It.propTypes = {
        country: I.default.string.isRequired,
        countryName: I.default.string.isRequired,
        flags: I.default.objectOf(I.default.elementType),
        flagUrl: I.default.string.isRequired
    }
}));

function Bt() {
    return Bt = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Bt.apply(this, arguments)
}

function Vt(e, t) {
    if (e == null) return {};
    var n = Ht(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function Ht(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function L(e) {
    var t = e.aspectRatio,
        n = Vt(e, Gt);
    return t === 1 ? R.createElement(Wt, n) : R.createElement(Ut, n)
}

function Ut(e) {
    var t = e.title,
        n = Vt(e, Kt);
    return R.createElement(`svg`, Bt({}, n, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 75 50`
    }), R.createElement(`title`, null, t), R.createElement(`g`, {
        className: `PhoneInputInternationalIconGlobe`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
        strokeMiterlimit: `10`
    }, R.createElement(`path`, {
        strokeLinecap: `round`,
        d: `M47.2,36.1C48.1,36,49,36,50,36c7.4,0,14,1.7,18.5,4.3`
    }), R.createElement(`path`, {
        d: `M68.6,9.6C64.2,12.3,57.5,14,50,14c-7.4,0-14-1.7-18.5-4.3`
    }), R.createElement(`line`, {
        x1: `26`,
        y1: `25`,
        x2: `74`,
        y2: `25`
    }), R.createElement(`line`, {
        x1: `50`,
        y1: `1`,
        x2: `50`,
        y2: `49`
    }), R.createElement(`path`, {
        strokeLinecap: `round`,
        d: `M46.3,48.7c1.2,0.2,2.5,0.3,3.7,0.3c13.3,0,24-10.7,24-24S63.3,1,50,1S26,11.7,26,25c0,2,0.3,3.9,0.7,5.8`
    }), R.createElement(`path`, {
        strokeLinecap: `round`,
        d: `M46.8,48.2c1,0.6,2.1,0.8,3.2,0.8c6.6,0,12-10.7,12-24S56.6,1,50,1S38,11.7,38,25c0,1.4,0.1,2.7,0.2,4c0,0.1,0,0.2,0,0.2`
    })), R.createElement(`path`, {
        className: `PhoneInputInternationalIconPhone`,
        stroke: `none`,
        fill: `currentColor`,
        d: `M12.4,17.9c2.9-2.9,5.4-4.8,0.3-11.2S4.1,5.2,1.3,8.1C-2,11.4,1.1,23.5,13.1,35.6s24.3,15.2,27.5,11.9c2.8-2.8,7.8-6.3,1.4-11.5s-8.3-2.6-11.2,0.3c-2,2-7.2-2.2-11.7-6.7S10.4,19.9,12.4,17.9z`
    }))
}

function Wt(e) {
    var t = e.title,
        n = Vt(e, qt);
    return R.createElement(`svg`, Bt({}, n, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 50 50`
    }), R.createElement(`title`, null, t), R.createElement(`g`, {
        className: `PhoneInputInternationalIconGlobe`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
        strokeLinecap: `round`
    }, R.createElement(`path`, {
        d: `M8.45,13A21.44,21.44,0,1,1,37.08,41.56`
    }), R.createElement(`path`, {
        d: `M19.36,35.47a36.9,36.9,0,0,1-2.28-13.24C17.08,10.39,21.88.85,27.8.85s10.72,9.54,10.72,21.38c0,6.48-1.44,12.28-3.71,16.21`
    }), R.createElement(`path`, {
        d: `M17.41,33.4A39,39,0,0,1,27.8,32.06c6.62,0,12.55,1.5,16.48,3.86`
    }), R.createElement(`path`, {
        d: `M44.29,8.53c-3.93,2.37-9.86,3.88-16.49,3.88S15.25,10.9,11.31,8.54`
    }), R.createElement(`line`, {
        x1: `27.8`,
        y1: `0.85`,
        x2: `27.8`,
        y2: `34.61`
    }), R.createElement(`line`, {
        x1: `15.2`,
        y1: `22.23`,
        x2: `49.15`,
        y2: `22.23`
    })), R.createElement(`path`, {
        className: `PhoneInputInternationalIconPhone`,
        stroke: `transparent`,
        fill: `currentColor`,
        d: `M9.42,26.64c2.22-2.22,4.15-3.59.22-8.49S3.08,17,.93,19.17c-2.49,2.48-.13,11.74,9,20.89s18.41,11.5,20.89,9c2.15-2.15,5.91-4.77,1-8.71s-6.27-2-8.49.22c-1.55,1.55-5.48-1.69-8.86-5.08S7.87,28.19,9.42,26.64Z`
    }))
}
var R, z, Gt, Kt, qt, Jt = e((() => {
    R = t(r(), 1), z = t(n(), 1), Gt = [`aspectRatio`], Kt = [`title`], qt = [`title`], L.propTypes = {
        title: z.default.string.isRequired,
        aspectRatio: z.default.number
    }, Ut.propTypes = {
        title: z.default.string.isRequired
    }, Wt.propTypes = {
        title: z.default.string.isRequired
    }
}));

function Yt(e) {
    if (e.length < 2 || e[0] !== `+`) return !1;
    for (var t = 1; t < e.length;) {
        var n = e.charCodeAt(t);
        if (!(n >= 48 && n <= 57)) return !1;
        t++
    }
    return !0
}

function Xt(e) {
    Yt(e) || console.error("[react-phone-number-input] Expected the initial `value` to be a E.164 phone number. Got", e)
}
var Zt = e((() => {}));

function Qt(e, t) {
    var n = typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = $t(e)) || t && e && typeof e.length == `number`) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function $t(e, t) {
    if (e) {
        if (typeof e == `string`) return en(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set`) return Array.from(e);
        if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return en(e, t)
    }
}

function en(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function tn(e, t) {
    if (!t) return e;
    for (var n = [], r = [], i = n, a = function() {
            var t = s.value;
            if (t === `|`) i.push({
                divider: !0
            });
            else if (t === `...` || t === `…`) i = r;
            else {
                var n = t === `🌐` ? void 0 : t,
                    a = e.indexOf(e.filter(function(e) {
                        return e.value === n
                    })[0]),
                    o = e[a];
                e.splice(a, 1), i.push(o)
            }
        }, o = Qt(t), s; !(s = o()).done;) a();
    return n.concat(e).concat(r)
}

function nn(e, t) {
    if (e && (e = e.filter(function(e) {
            switch (e) {
                case `🌐`:
                case `|`:
                case `...`:
                case `…`:
                    return !0;
                default:
                    return B(e, t)
            }
        }), e.length > 0)) return e
}

function B(e, t) {
    return c(e, t) ? !0 : (console.error(`Country not found: ${e}`), !1)
}

function rn(e, t) {
    return e && (e = e.filter(function(e) {
        return B(e, t)
    }), e.length === 0 && (e = void 0)), e
}
var an = e((() => {
    f()
}));

function on() {
    return on = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, on.apply(this, arguments)
}

function sn(e, t) {
    if (e == null) return {};
    var n = cn(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function cn(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function ln(e) {
    var t = e.flags,
        n = e.flagUrl,
        r = e.flagComponent,
        i = e.internationalIcon;

    function a(e) {
        var a = e.country,
            o = e.label,
            s = e.aspectRatio,
            c = sn(e, dn),
            l = i === L ? s : void 0;
        return V.createElement(`div`, on({}, c, {
            className: (0, un.default)(`PhoneInputCountryIcon`, {
                "PhoneInputCountryIcon--square": l === 1,
                "PhoneInputCountryIcon--border": a
            })
        }), a ? V.createElement(r, {
            country: a,
            countryName: o,
            flags: t,
            flagUrl: n,
            className: `PhoneInputCountryIconImg`
        }) : V.createElement(i, {
            title: o,
            aspectRatio: l,
            className: `PhoneInputCountryIconImg`
        }))
    }
    return a.propTypes = {
        country: H.default.string,
        label: H.default.string.isRequired,
        aspectRatio: H.default.number
    }, a
}
var V, H, un, dn, fn = e((() => {
    V = t(r(), 1), H = t(n(), 1), un = t(g(), 1), Jt(), zt(), dn = [`country`, `label`, `aspectRatio`], ln({
        flagUrl: `https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg`,
        flagComponent: It,
        internationalIcon: L
    })
}));

function pn(e, t) {
    var n = typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
    if (n) return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = mn(e)) || t && e && typeof e.length == `number`) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function mn(e, t) {
    if (e) {
        if (typeof e == `string`) return hn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set`) return Array.from(e);
        if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hn(e, t)
    }
}

function hn(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}

function gn(e, t) {
    for (var n = pn(e), r; !(r = n()).done;) {
        var i = r.value;
        i && _n(i, t)
    }
}

function _n(e, t) {
    typeof e == `function` ? e(t) : e.current = t
}
var vn = e((() => {
        r()
    })),
    U, yn, bn, xn = e((() => {
        U = t(n(), 1), yn = U.default.shape({
            country_calling_codes: U.default.object.isRequired,
            countries: U.default.object.isRequired
        }), bn = U.default.objectOf(U.default.string)
    }));

function W(e, t) {
    return `+` + a(e, t)
}
var Sn = e((() => {
    f()
}));

function Cn(e) {
    var t = e.value,
        n = e.phoneNumber,
        r = e.defaultCountry,
        i = e.getAnyCountry,
        a = e.countries,
        o = e.required,
        s = e.metadata,
        c;
    return n && n.country ? c = n.country : r && (!t || K(t, r, s)) && (c = r), a && a.indexOf(c) < 0 && (c = void 0), !c && o && a && a.length > 0 && (c = i()), c
}

function wn(e) {
    var t = e.countries,
        n = e.countryNames,
        r = e.addInternationalOption,
        i = e.compareStringsLocales,
        a = e.compareStrings;
    a ||= Pn;
    var o = t.map(function(e) {
        return {
            value: e,
            label: n[e] || e
        }
    });
    return o.sort(function(e, t) {
        return a(e.label, t.label, i)
    }), r && o.unshift({
        label: n.ZZ
    }), o
}

function Tn(e, t) {
    return s(e || ``, t)
}

function En(e) {
    return e.formatNational().replace(/\D/g, ``)
}

function Dn(e, t) {
    var n = t.prevCountry,
        r = t.newCountry,
        i = t.metadata,
        o = t.useNationalFormat;
    if (n === r) return e;
    if (!e) return o ? `` : r ? W(r, i) : ``;
    if (r) {
        if (e[0] === `+`) {
            if (o) return e.indexOf(`+` + a(r, i)) === 0 ? Fn(e, r, i) : ``;
            if (n) {
                var s = W(r, i);
                return e.indexOf(s) === 0 ? e : s
            } else {
                var c = W(r, i);
                return e.indexOf(c) === 0 ? e : c
            }
        }
    } else if (e[0] !== `+`) return G(e, n, i) || ``;
    return e
}

function G(e, t, n) {
    if (e) {
        if (e[0] === `+`) {
            if (e === `+`) return;
            var r = new i(t, n);
            return r.input(e), r.getNumberValue()
        }
        if (t) {
            var o = In(e, t, n);
            return `+${a(t,n)}${o||``}`
        }
    }
}

function On(e, t, n) {
    var r = In(e, t, n);
    if (r) {
        var i = r.length - kn(t, n);
        if (i > 0) return e.slice(0, e.length - i)
    }
    return e
}

function kn(e, t) {
    return t = new h(t), t.selectNumberingPlan(e), t.numberingPlan.possibleLengths()[t.numberingPlan.possibleLengths().length - 1]
}

function An(e, t) {
    var n = t.country,
        r = t.countries,
        i = t.defaultCountry,
        a = t.latestCountrySelectedByUser,
        o = t.required,
        s = t.metadata;
    if (e === `+`) return n;
    var c = Nn(e, s);
    if (c) return !r || r.indexOf(c) >= 0 ? c : void 0;
    if (n) {
        if (K(e, n, s)) {
            if (a && K(e, a, s)) return a;
            if (i && K(e, i, s)) return i;
            if (!o) return
        } else if (!o) return
    }
    return n
}

function jn(e, t) {
    var n = t.prevPhoneDigits,
        r = t.country,
        i = t.defaultCountry,
        a = t.latestCountrySelectedByUser,
        o = t.countryRequired,
        s = t.getAnyCountry,
        c = t.countries,
        l = t.international,
        u = t.limitMaxLength,
        d = t.countryCallingCodeEditable,
        f = t.metadata;
    if (l && d === !1 && r) {
        var p = W(r, f);
        if (e.indexOf(p) !== 0) {
            var m;
            return e && e[0] !== `+` ? (e = p + e, m = G(e, r, f)) : e = p, {
                phoneDigits: e,
                value: m,
                country: r
            }
        }
    }
    l === !1 && r && e && e[0] === `+` && (e = Mn(e, r, f)), e && r && u && (e = On(e, r, f)), e && e[0] !== `+` && (!r || l) && (e = `+` + e), !e && n && n[0] === `+` && (r = l ? void 0 : i), e === `+` && n && n[0] === `+` && n.length > 1 && (r = void 0);
    var h;
    return e && (h = e[0] === `+` && (e === `+` || r && W(r, f).indexOf(e) === 0) ? void 0 : G(e, r, f)), h && (r = An(h, {
        country: r,
        countries: c,
        defaultCountry: i,
        latestCountrySelectedByUser: a,
        required: !1,
        metadata: f
    }), l === !1 && r && e && e[0] === `+` && (e = Mn(e, r, f), h = G(e, r, f))), !r && o && (r = i || s()), {
        phoneDigits: e,
        country: r,
        value: h
    }
}

function Mn(e, t, n) {
    if (e.indexOf(W(t, n)) === 0) {
        var r = new i(t, n);
        r.input(e);
        var a = r.getNumber();
        return a ? a.formatNational().replace(/\D/g, ``) : ``
    } else return e.replace(/\D/g, ``)
}

function Nn(e, t) {
    var n = new i(null, t);
    return n.input(e), n.getCountry()
}

function Pn(e, t, n) {
    return String.prototype.localeCompare ? e.localeCompare(t, n) : e < t ? -1 : +(e > t)
}

function Fn(e, t, n) {
    if (t) {
        var r = `+` + a(t, n);
        if (e.length < r.length) {
            if (r.indexOf(e) === 0) return ``
        } else if (e.indexOf(r) === 0) return e.slice(r.length)
    }
    for (var i = 0, o = Object.keys(n.country_calling_codes); i < o.length; i++) {
        var s = o[i];
        if (e.indexOf(s) === 1) return e.slice(1 + s.length)
    }
    return ``
}

function In(e, t, n) {
    var r = new i(t, n);
    r.input(e);
    var a = r.getNumber();
    return a && a.nationalNumber
}

function K(e, t, n) {
    for (var r = W(t, n), i = 0; i < e.length && i < r.length;) {
        if (e[i] !== r[i]) return !1;
        i++
    }
    return !0
}

function Ln(e) {
    var t = e.value,
        n = e.phoneNumber,
        r = e.defaultCountry,
        i = e.international,
        a = e.useNationalFormat,
        o = e.metadata;
    return (i === !1 || a) && n && n.country ? En(n) : !t && i && r ? W(r, o) : t
}
var Rn = e((() => {
    f(), Sn()
}));

function q(e) {
    "@babel/helpers - typeof";
    return q = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
    }, q(e)
}

function zn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? zn(Object(n), !0).forEach(function(t) {
            Bn(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function Bn(e, t, n) {
    return t = Vn(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Vn(e) {
    var t = Hn(e, `string`);
    return q(t) == `symbol` ? t : t + ``
}

function Hn(e, t) {
    if (q(e) != `object` || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (q(r) != `object`) return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}

function Un(e, t, n) {
    var r = e.metadata,
        i = e.countries,
        a = e.defaultCountry,
        o = e.value,
        s = e.reset,
        c = e.international,
        l = e.displayInitialValueAsLocalNumber,
        u = e.initialValueFormat,
        d = t.defaultCountry,
        f = t.value,
        p = t.reset;
    n.country;
    var m = n.value,
        h = n.hasUserSelectedACountry,
        g = n.latestCountrySelectedByUser,
        _ = function(e) {
            return Ln(J(J({}, e), {}, {
                international: c,
                useNationalFormat: l || u === `national`,
                metadata: r
            }))
        };
    if (s !== p) return {
        phoneDigits: _({
            value: void 0,
            defaultCountry: a
        }),
        value: void 0,
        country: a,
        latestCountrySelectedByUser: void 0,
        hasUserSelectedACountry: void 0
    };
    if (a !== d) {
        var v = !a || B(a, r),
            y = !m || c && m === _({
                value: void 0,
                defaultCountry: d
            });
        if (!h && v && !o && y) return {
            country: a,
            phoneDigits: _({
                value: void 0,
                defaultCountry: a
            }),
            value: void 0
        }
    }
    if (!Wn(o, f) && !Wn(o, m)) {
        var b, x;
        if (o) {
            o && Xt(o), b = Tn(o, r);
            var S = rn(i, r);
            b && b.country ? (!S || S.indexOf(b.country) >= 0) && (x = b.country) : (x = An(o, {
                country: void 0,
                countries: S,
                metadata: r
            }), x || a && o.indexOf(W(a, r)) === 0 && (x = a))
        }
        var C;
        return o ? g && ((x ? g === x : K(o, g, r)) ? x ||= g : C = {
            latestCountrySelectedByUser: void 0
        }) : C = {
            latestCountrySelectedByUser: void 0,
            hasUserSelectedACountry: void 0
        }, J(J({}, C), {}, {
            phoneDigits: _({
                phoneNumber: b,
                value: o,
                defaultCountry: a
            }),
            value: o,
            country: o ? x : a
        })
    }
}

function Wn(e, t) {
    return e === null && (e = void 0), t === null && (t = void 0), e === t
}
var Gn = e((() => {
    Rn(), Zt(), Sn(), an()
}));

function Y(e) {
    "@babel/helpers - typeof";
    return Y = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e
    }, Y(e)
}

function Kn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function qn(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? Kn(Object(n), !0).forEach(function(t) {
            Z(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kn(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function X() {
    return X = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, X.apply(this, arguments)
}

function Jn(e, t) {
    if (e == null) return {};
    var n = Yn(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function Yn(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function Xn(e, t) {
    if (!(e instanceof t)) throw TypeError(`Cannot call a class as a function`)
}

function Zn(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, `value` in r && (r.writable = !0), Object.defineProperty(e, or(r.key), r)
    }
}

function Qn(e, t, n) {
    return t && Zn(e.prototype, t), n && Zn(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function $n(e, t, n) {
    return t = rr(t), er(e, nr() ? Reflect.construct(t, n || [], rr(e).constructor) : t.apply(e, n))
}

function er(e, t) {
    if (t && (Y(t) === `object` || typeof t == `function`)) return t;
    if (t !== void 0) throw TypeError(`Derived constructors may only return object or undefined`);
    return tr(e)
}

function tr(e) {
    if (e === void 0) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return e
}

function nr() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (nr = function() {
        return !!e
    })()
}

function rr(e) {
    return rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }, rr(e)
}

function ir(e, t) {
    if (typeof t != `function` && t !== null) throw TypeError(`Super expression must either be null or a function`);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && ar(e, t)
}

function ar(e, t) {
    return ar = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
        return e.__proto__ = t, e
    }, ar(e, t)
}

function Z(e, t, n) {
    return t = or(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function or(e) {
    var t = sr(e, `string`);
    return Y(t) == `symbol` ? t : t + ``
}

function sr(e, t) {
    if (Y(e) != `object` || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || `default`);
        if (Y(r) != `object`) return r;
        throw TypeError(`@@toPrimitive must return a primitive value.`)
    }
    return (t === `string` ? String : Number)(e)
}

function cr(e) {
    for (var t in e = qn({}, e), mr) e[t] === void 0 && (e[t] = mr[t]);
    return e
}

function lr(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length;) {
        if (e[n] !== t[n]) return !1;
        n++
    }
    return !0
}
var Q, $, ur, dr, fr, pr, mr, hr = e((() => {
        Q = t(r(), 1), $ = t(n(), 1), ur = t(g(), 1), at(), pt(), Mt(), zt(), Jt(), Zt(), an(), fn(), vn(), xn(), Rn(), Gn(), dr = `name.disabled.readOnly.autoComplete.style.className.inputRef.inputComponent.numberInputProps.smartCaret.countrySelectComponent.countrySelectProps.containerComponent.containerComponentProps.defaultCountry.countries.countryOptionsOrder.labels.flags.flagComponent.flagUrl.addInternationalOption.internationalIcon.displayInitialValueAsLocalNumber.initialValueFormat.onCountryChange.limitMaxLength.countryCallingCodeEditable.focusInputOnCountrySelection.reset.metadata.international.locales`.split(`.`), fr = function(e) {
            function t(e) {
                var n;
                Xn(this, t), n = $n(this, t, [e]), Z(n, `setInputRef`, function(e) {
                    gn([n.props.inputRef, n.inputRef], e)
                }), Z(n, `isCountrySupportedWithError`, function(e) {
                    var t = n.props.metadata;
                    return B(e, t)
                }), Z(n, `onCountryChange`, function(e) {
                    var t = n.props,
                        r = t.international,
                        i = t.metadata,
                        a = t.onChange,
                        o = t.focusInputOnCountrySelection,
                        s = n.state,
                        c = s.phoneDigits,
                        l = s.country,
                        u = Dn(c, {
                            prevCountry: l,
                            newCountry: e,
                            metadata: i,
                            useNationalFormat: !r
                        }),
                        d = G(u, e, i);
                    o && n.inputRef.current.focus(), n.setState({
                        country: e,
                        latestCountrySelectedByUser: e,
                        hasUserSelectedACountry: !0,
                        phoneDigits: u,
                        value: d
                    }, function() {
                        a(d)
                    })
                }), Z(n, `onChange`, function(e) {
                    var t = n.props,
                        r = t.defaultCountry,
                        i = t.onChange,
                        a = t.addInternationalOption,
                        o = t.international,
                        s = t.limitMaxLength,
                        c = t.countryCallingCodeEditable,
                        l = t.metadata,
                        u = n.state,
                        d = u.countries,
                        f = u.phoneDigits,
                        p = u.country,
                        m = u.latestCountrySelectedByUser,
                        h = jn(e, {
                            prevPhoneDigits: f,
                            country: p,
                            countryRequired: !a,
                            defaultCountry: r,
                            latestCountrySelectedByUser: m,
                            getAnyCountry: function() {
                                return n.getFirstSupportedCountry({
                                    countries: d
                                })
                            },
                            countries: d,
                            international: o,
                            limitMaxLength: s,
                            countryCallingCodeEditable: c,
                            metadata: l
                        }),
                        g = h.phoneDigits,
                        _ = h.country,
                        v = h.value,
                        y = {
                            phoneDigits: g,
                            value: v,
                            country: _
                        };
                    m && v && !K(v, m, l) && (y.latestCountrySelectedByUser = void 0), c === !1 && !v && g === n.state.phoneDigits && (y.forceRerender = {}), n.setState(y, function() {
                        return i(v)
                    })
                }), Z(n, `_onFocus`, function() {
                    return n.setState({
                        isFocused: !0
                    })
                }), Z(n, `_onBlur`, function() {
                    return n.setState({
                        isFocused: !1
                    })
                }), Z(n, `onFocus`, function(e) {
                    n._onFocus();
                    var t = n.props.onFocus;
                    t && t(e)
                }), Z(n, `onBlur`, function(e) {
                    var t = n.props.onBlur;
                    n._onBlur(), t && t(e)
                }), Z(n, `onCountryFocus`, function(e) {
                    n._onFocus();
                    var t = n.props.countrySelectProps;
                    if (t) {
                        var r = t.onFocus;
                        r && r(e)
                    }
                }), Z(n, `onCountryBlur`, function(e) {
                    n._onBlur();
                    var t = n.props.countrySelectProps;
                    if (t) {
                        var r = t.onBlur;
                        r && r(e)
                    }
                }), n.inputRef = Q.createRef();
                var r = n.props,
                    i = r.value;
                r.labels;
                var a = r.international,
                    o = r.addInternationalOption,
                    s = r.displayInitialValueAsLocalNumber,
                    c = r.initialValueFormat,
                    l = r.metadata,
                    d = n.props,
                    f = d.defaultCountry,
                    p = d.countries;
                f && (n.isCountrySupportedWithError(f) || (f = void 0)), i && Xt(i), p = rn(p, l);
                var m = Tn(i, l);
                n.CountryIcon = ln(n.props);
                var h = Cn({
                    value: i,
                    phoneNumber: m,
                    defaultCountry: f,
                    required: !o,
                    countries: p || u(l),
                    getAnyCountry: function() {
                        return n.getFirstSupportedCountry({
                            countries: p
                        })
                    },
                    metadata: l
                });
                return n.state = {
                    props: n.props,
                    country: h,
                    countries: p,
                    phoneDigits: Ln({
                        value: i,
                        phoneNumber: m,
                        defaultCountry: f,
                        international: a,
                        useNationalFormat: s || c === `national`,
                        metadata: l
                    }),
                    value: i
                }, n
            }
            return ir(t, e), Qn(t, [{
                key: `componentDidMount`,
                value: function() {
                    var e = this.props.onCountryChange,
                        t = this.props.defaultCountry,
                        n = this.state.country;
                    e && (t && (this.isCountrySupportedWithError(t) || (t = void 0)), n !== t && e(n))
                }
            }, {
                key: `componentDidUpdate`,
                value: function(e, t) {
                    var n = this.props.onCountryChange,
                        r = this.state.country;
                    n && r !== t.country && n(r)
                }
            }, {
                key: `getCountrySelectOptions`,
                value: function(e) {
                    var t = e.countries,
                        n = this.props,
                        r = n.international,
                        i = n.countryCallingCodeEditable,
                        a = n.countryOptionsOrder,
                        o = n.addInternationalOption,
                        s = n.labels,
                        c = n.locales,
                        l = n.metadata;
                    return this.useMemoCountrySelectOptions(function() {
                        return tn(wn({
                            countries: t || u(l),
                            countryNames: s,
                            addInternationalOption: r && i === !1 ? !1 : o,
                            compareStringsLocales: c
                        }), nn(a, l))
                    }, [t, a, o, s, l])
                }
            }, {
                key: `useMemoCountrySelectOptions`,
                value: function(e, t) {
                    return (!this.countrySelectOptionsMemoDependencies || !lr(t, this.countrySelectOptionsMemoDependencies)) && (this.countrySelectOptionsMemo = e(), this.countrySelectOptionsMemoDependencies = t), this.countrySelectOptionsMemo
                }
            }, {
                key: `getFirstSupportedCountry`,
                value: function(e) {
                    var t = e.countries;
                    return this.getCountrySelectOptions({
                        countries: t
                    })[0].value
                }
            }, {
                key: `render`,
                value: function() {
                    var e = this.props,
                        t = e.name,
                        n = e.disabled,
                        r = e.readOnly,
                        i = e.autoComplete,
                        a = e.style,
                        o = e.className;
                    e.inputRef;
                    var s = e.inputComponent,
                        c = e.numberInputProps,
                        l = e.smartCaret,
                        u = e.countrySelectComponent,
                        d = e.countrySelectProps,
                        f = e.containerComponent,
                        p = e.containerComponentProps;
                    e.defaultCountry, e.countries, e.countryOptionsOrder;
                    var m = e.labels;
                    e.flags, e.flagComponent, e.flagUrl, e.addInternationalOption, e.internationalIcon, e.displayInitialValueAsLocalNumber, e.initialValueFormat, e.onCountryChange, e.limitMaxLength, e.countryCallingCodeEditable, e.focusInputOnCountrySelection, e.reset;
                    var h = e.metadata,
                        g = e.international;
                    e.locales;
                    var _ = Jn(e, dr),
                        v = this.state,
                        y = v.country,
                        b = v.countries,
                        x = v.phoneDigits,
                        S = v.isFocused,
                        C = l ? it : ft,
                        w = this.getCountrySelectOptions({
                            countries: b
                        });
                    return Q.createElement(f, X({
                        style: a,
                        className: (0, ur.default)(o, `PhoneInput`, {
                            "PhoneInput--focus": S,
                            "PhoneInput--disabled": n,
                            "PhoneInput--readOnly": r
                        })
                    }, p), Q.createElement(u, X({
                        name: t ? `${t}Country` : void 0,
                        "aria-label": m.country
                    }, d, {
                        value: y,
                        options: w,
                        onChange: this.onCountryChange,
                        onFocus: this.onCountryFocus,
                        onBlur: this.onCountryBlur,
                        disabled: n || d && d.disabled,
                        readOnly: r || d && d.readOnly,
                        iconComponent: this.CountryIcon
                    })), Q.createElement(C, X({
                        ref: this.setInputRef,
                        type: `tel`,
                        autoComplete: i
                    }, c, _, {
                        inputFormat: g === !0 ? `INTERNATIONAL` : g === !1 ? `NATIONAL` : `INTERNATIONAL_OR_NATIONAL`,
                        international: g ? !0 : void 0,
                        withCountryCallingCode: g ? !0 : void 0,
                        name: t,
                        metadata: h,
                        country: y,
                        value: x || ``,
                        onChange: this.onChange,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur,
                        disabled: n,
                        readOnly: r,
                        inputComponent: s,
                        className: (0, ur.default)(`PhoneInputInput`, c && c.className, _.className)
                    })))
                }
            }], [{
                key: `getDerivedStateFromProps`,
                value: function(e, t) {
                    return qn({
                        props: e
                    }, Un(e, t.props, t))
                }
            }])
        }(Q.PureComponent), pr = Q.forwardRef(function(e, t) {
            return Q.createElement(fr, X({}, cr(e), {
                inputRef: t
            }))
        }), pr.propTypes = {
            value: $.default.string,
            onChange: $.default.func.isRequired,
            onFocus: $.default.func,
            onBlur: $.default.func,
            disabled: $.default.bool,
            readOnly: $.default.bool,
            autoComplete: $.default.string,
            initialValueFormat: $.default.oneOf([`national`]),
            displayInitialValueAsLocalNumber: $.default.bool,
            defaultCountry: $.default.string,
            countries: $.default.arrayOf($.default.string),
            labels: bn,
            locales: $.default.oneOfType([$.default.string, $.default.arrayOf($.default.string)]),
            flagUrl: $.default.string,
            flags: $.default.objectOf($.default.elementType),
            flagComponent: $.default.elementType,
            addInternationalOption: $.default.bool,
            internationalIcon: $.default.elementType,
            countryOptionsOrder: $.default.arrayOf($.default.string),
            style: $.default.object,
            className: $.default.string,
            countrySelectComponent: $.default.elementType,
            countrySelectProps: $.default.object,
            inputComponent: $.default.elementType,
            numberInputProps: $.default.object,
            containerComponent: $.default.elementType,
            containerComponentProps: $.default.object,
            smartCaret: $.default.bool,
            international: $.default.bool,
            limitMaxLength: $.default.bool,
            countryCallingCodeEditable: $.default.bool,
            metadata: yn,
            onCountryChange: $.default.func,
            focusInputOnCountrySelection: $.default.bool
        }, mr = {
            autoComplete: `tel`,
            countrySelectComponent: wt,
            flagComponent: It,
            flagUrl: `https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg`,
            internationalIcon: L,
            inputComponent: `input`,
            containerComponent: `div`,
            reset: $.default.any,
            smartCaret: !0,
            addInternationalOption: !0,
            countryCallingCodeEditable: !0,
            focusInputOnCountrySelection: !0
        }
    })),
    gr, _r = e((() => {
        gr = {
            ext: `ext.`,
            country: `Phone number country`,
            phone: `Phone`,
            AB: `Abkhazia`,
            AC: `Ascension Island`,
            AD: `Andorra`,
            AE: `United Arab Emirates`,
            AF: `Afghanistan`,
            AG: `Antigua and Barbuda`,
            AI: `Anguilla`,
            AL: `Albania`,
            AM: `Armenia`,
            AO: `Angola`,
            AQ: `Antarctica`,
            AR: `Argentina`,
            AS: `American Samoa`,
            AT: `Austria`,
            AU: `Australia`,
            AW: `Aruba`,
            AX: `Åland Islands`,
            AZ: `Azerbaijan`,
            BA: `Bosnia and Herzegovina`,
            BB: `Barbados`,
            BD: `Bangladesh`,
            BE: `Belgium`,
            BF: `Burkina Faso`,
            BG: `Bulgaria`,
            BH: `Bahrain`,
            BI: `Burundi`,
            BJ: `Benin`,
            BL: `Saint Barthélemy`,
            BM: `Bermuda`,
            BN: `Brunei Darussalam`,
            BO: `Bolivia`,
            BQ: `Bonaire, Sint Eustatius and Saba`,
            BR: `Brazil`,
            BS: `Bahamas`,
            BT: `Bhutan`,
            BV: `Bouvet Island`,
            BW: `Botswana`,
            BY: `Belarus`,
            BZ: `Belize`,
            CA: `Canada`,
            CC: `Cocos (Keeling) Islands`,
            CD: `Congo, Democratic Republic of the`,
            CF: `Central African Republic`,
            CG: `Congo`,
            CH: `Switzerland`,
            CI: `Cote d'Ivoire`,
            CK: `Cook Islands`,
            CL: `Chile`,
            CM: `Cameroon`,
            CN: `China`,
            CO: `Colombia`,
            CR: `Costa Rica`,
            CU: `Cuba`,
            CV: `Cape Verde`,
            CW: `Curaçao`,
            CX: `Christmas Island`,
            CY: `Cyprus`,
            CZ: `Czech Republic`,
            DE: `Germany`,
            DJ: `Djibouti`,
            DK: `Denmark`,
            DM: `Dominica`,
            DO: `Dominican Republic`,
            DZ: `Algeria`,
            EC: `Ecuador`,
            EE: `Estonia`,
            EG: `Egypt`,
            EH: `Western Sahara`,
            ER: `Eritrea`,
            ES: `Spain`,
            ET: `Ethiopia`,
            FI: `Finland`,
            FJ: `Fiji`,
            FK: `Falkland Islands`,
            FM: `Federated States of Micronesia`,
            FO: `Faroe Islands`,
            FR: `France`,
            GA: `Gabon`,
            GB: `United Kingdom`,
            GD: `Grenada`,
            GE: `Georgia`,
            GF: `French Guiana`,
            GG: `Guernsey`,
            GH: `Ghana`,
            GI: `Gibraltar`,
            GL: `Greenland`,
            GM: `Gambia`,
            GN: `Guinea`,
            GP: `Guadeloupe`,
            GQ: `Equatorial Guinea`,
            GR: `Greece`,
            GS: `South Georgia and the South Sandwich Islands`,
            GT: `Guatemala`,
            GU: `Guam`,
            GW: `Guinea-Bissau`,
            GY: `Guyana`,
            HK: `Hong Kong`,
            HM: `Heard Island and McDonald Islands`,
            HN: `Honduras`,
            HR: `Croatia`,
            HT: `Haiti`,
            HU: `Hungary`,
            ID: `Indonesia`,
            IE: `Ireland`,
            IL: `Israel`,
            IM: `Isle of Man`,
            IN: `India`,
            IO: `British Indian Ocean Territory`,
            IQ: `Iraq`,
            IR: `Iran`,
            IS: `Iceland`,
            IT: `Italy`,
            JE: `Jersey`,
            JM: `Jamaica`,
            JO: `Jordan`,
            JP: `Japan`,
            KE: `Kenya`,
            KG: `Kyrgyzstan`,
            KH: `Cambodia`,
            KI: `Kiribati`,
            KM: `Comoros`,
            KN: `Saint Kitts and Nevis`,
            KP: `North Korea`,
            KR: `South Korea`,
            KW: `Kuwait`,
            KY: `Cayman Islands`,
            KZ: `Kazakhstan`,
            LA: `Laos`,
            LB: `Lebanon`,
            LC: `Saint Lucia`,
            LI: `Liechtenstein`,
            LK: `Sri Lanka`,
            LR: `Liberia`,
            LS: `Lesotho`,
            LT: `Lithuania`,
            LU: `Luxembourg`,
            LV: `Latvia`,
            LY: `Libya`,
            MA: `Morocco`,
            MC: `Monaco`,
            MD: `Moldova`,
            ME: `Montenegro`,
            MF: `Saint Martin (French Part)`,
            MG: `Madagascar`,
            MH: `Marshall Islands`,
            MK: `North Macedonia`,
            ML: `Mali`,
            MM: `Myanmar`,
            MN: `Mongolia`,
            MO: `Macao`,
            MP: `Northern Mariana Islands`,
            MQ: `Martinique`,
            MR: `Mauritania`,
            MS: `Montserrat`,
            MT: `Malta`,
            MU: `Mauritius`,
            MV: `Maldives`,
            MW: `Malawi`,
            MX: `Mexico`,
            MY: `Malaysia`,
            MZ: `Mozambique`,
            NA: `Namibia`,
            NC: `New Caledonia`,
            NE: `Niger`,
            NF: `Norfolk Island`,
            NG: `Nigeria`,
            NI: `Nicaragua`,
            NL: `Netherlands`,
            NO: `Norway`,
            NP: `Nepal`,
            NR: `Nauru`,
            NU: `Niue`,
            NZ: `New Zealand`,
            OM: `Oman`,
            OS: `South Ossetia`,
            PA: `Panama`,
            PE: `Peru`,
            PF: `French Polynesia`,
            PG: `Papua New Guinea`,
            PH: `Philippines`,
            PK: `Pakistan`,
            PL: `Poland`,
            PM: `Saint Pierre and Miquelon`,
            PN: `Pitcairn`,
            PR: `Puerto Rico`,
            PS: `Palestine`,
            PT: `Portugal`,
            PW: `Palau`,
            PY: `Paraguay`,
            QA: `Qatar`,
            RE: `Reunion`,
            RO: `Romania`,
            RS: `Serbia`,
            RU: `Russia`,
            RW: `Rwanda`,
            SA: `Saudi Arabia`,
            SB: `Solomon Islands`,
            SC: `Seychelles`,
            SD: `Sudan`,
            SE: `Sweden`,
            SG: `Singapore`,
            SH: `Saint Helena`,
            SI: `Slovenia`,
            SJ: `Svalbard and Jan Mayen`,
            SK: `Slovakia`,
            SL: `Sierra Leone`,
            SM: `San Marino`,
            SN: `Senegal`,
            SO: `Somalia`,
            SR: `Suriname`,
            SS: `South Sudan`,
            ST: `Sao Tome and Principe`,
            SV: `El Salvador`,
            SX: `Sint Maarten`,
            SY: `Syria`,
            SZ: `Swaziland`,
            TA: `Tristan da Cunha`,
            TC: `Turks and Caicos Islands`,
            TD: `Chad`,
            TF: `French Southern Territories`,
            TG: `Togo`,
            TH: `Thailand`,
            TJ: `Tajikistan`,
            TK: `Tokelau`,
            TL: `Timor-Leste`,
            TM: `Turkmenistan`,
            TN: `Tunisia`,
            TO: `Tonga`,
            TR: `Turkey`,
            TT: `Trinidad and Tobago`,
            TV: `Tuvalu`,
            TW: `Taiwan`,
            TZ: `Tanzania`,
            UA: `Ukraine`,
            UG: `Uganda`,
            UM: `United States Minor Outlying Islands`,
            US: `United States`,
            UY: `Uruguay`,
            UZ: `Uzbekistan`,
            VA: `Holy See (Vatican City State)`,
            VC: `Saint Vincent and the Grenadines`,
            VE: `Venezuela`,
            VG: `Virgin Islands, British`,
            VI: `Virgin Islands, U.S.`,
            VN: `Vietnam`,
            VU: `Vanuatu`,
            WF: `Wallis and Futuna`,
            WS: `Samoa`,
            XK: `Kosovo`,
            YE: `Yemen`,
            YT: `Mayotte`,
            ZA: `South Africa`,
            ZM: `Zambia`,
            ZW: `Zimbabwe`,
            ZZ: `International`
        }
    }));

function vr() {
    return vr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, vr.apply(this, arguments)
}

function yr(e, t) {
    if (e == null) return {};
    var n = br(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function br(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, a;
    for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function xr(e) {
    var t = Sr.forwardRef(function(t, n) {
        var r = t.metadata,
            i = r === void 0 ? e : r,
            a = t.labels,
            o = a === void 0 ? gr : a,
            s = yr(t, Cr);
        return Sr.createElement(pr, vr({}, s, {
            ref: n,
            metadata: i,
            labels: o
        }))
    });
    return t.propTypes = {
        metadata: yn,
        labels: bn
    }, t
}
var Sr, Cr, wr = e((() => {
        Sr = t(r(), 1), _r(), xn(), hr(), Cr = [`metadata`, `labels`], xr()
    })),
    Tr, Er = e((() => {
        p(), wr(), Tr = xr(m)
    }));
export {
    Tr as n, Er as t
};
//# sourceMappingURL=1f6fa6f6-dp8aiz2cotxf6iox.js.map