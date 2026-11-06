export const __rspack_esm_ids = [806110];
export const __webpack_modules__ = {
    HJNo: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            (0, o.default)(e), (t = (0, i.default)(t, a)).allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1)), !0 === t.allow_wildcard && 0 === e.indexOf("*.") && (e = e.substring(2));
            var r = e.split("."),
                n = r[r.length - 1];
            return !(t.require_tld && (r.length < 2 || !t.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(n) || /\s/.test(n))) && !(!t.allow_numeric_tld && /^\d+$/.test(n)) && r.every(function(e) {
                return !(e.length > 63 && !t.ignore_max_length || !/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e) || /[\uff01-\uff5e]/.test(e) || /^-|-$/.test(e) || !t.allow_underscores && /_/.test(e))
            })
        };
        var o = n(r("NgaJ")),
            i = n(r("Y4hk"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
            allow_numeric_tld: !1,
            allow_wildcard: !1,
            ignore_max_length: !1
        };
        e.exports = t.default, e.exports.default = t.default
    }),
    BMmD: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function e(t) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0, i.default)(t);
            var o = ("object" === n(r) ? r.version : arguments[1]) || "";
            return o ? "4" === o.toString() ? h.test(t) : "6" === o.toString() && d.test(t) : e(t, {
                version: 4
            }) || e(t, {
                version: 6
            })
        };
        var o, i = (o = r("NgaJ")) && o.__esModule ? o : {
            default: o
        };

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var a = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",
            l = "(".concat(a, "[.]){3}").concat(a),
            h = new RegExp("^".concat(l, "$")),
            c = "(?:[0-9a-fA-F]{1,4})",
            d = RegExp("^(" + "(?:".concat(c, ":){7}(?:").concat(c, "|:)|") + "(?:".concat(c, ":){6}(?:").concat(l, "|:").concat(c, "|:)|") + "(?:".concat(c, ":){5}(?::").concat(l, "|(:").concat(c, "){1,2}|:)|") + "(?:".concat(c, ":){4}(?:(:").concat(c, "){0,1}:").concat(l, "|(:").concat(c, "){1,3}|:)|") + "(?:".concat(c, ":){3}(?:(:").concat(c, "){0,2}:").concat(l, "|(:").concat(c, "){1,4}|:)|") + "(?:".concat(c, ":){2}(?:(:").concat(c, "){0,3}:").concat(l, "|(:").concat(c, "){1,5}|:)|") + "(?:".concat(c, ":){1}(?:(:").concat(c, "){0,4}:").concat(l, "|(:").concat(c, "){1,6}|:)|") + "(?::((?::".concat(c, "){0,5}:").concat(l, "|(?::").concat(c, "){1,7}|:))") + ")(%[0-9a-zA-Z.]{1,})?$");
        e.exports = t.default, e.exports.default = t.default
    }),
    Tv1c: (function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if ((0, o.default)(e), !e || /[\s<>]/.test(e) || 0 === e.indexOf("mailto:") || (t = (0, h.default)(t, C)).validate_length && e.length > t.max_allowed_length || !t.allow_fragments && (0, n.default)(e, "#") || !t.allow_query_components && ((0, n.default)(e, "?") || (0, n.default)(e, "&"))) return !1;
            var r, c, s, p, f, y, x, g, m = (e = (x = (e = (x = e.split("#")).shift()).split("?")).shift()).match(/^([a-z][a-z0-9+\-.]*):/i),
                v = !1,
                w = function(o) {
                    return v = !0, r = o.toLowerCase(), (!t.require_valid_protocol || -1 !== t.protocols.indexOf(r)) && e.substring(m[0].length)
                };
            if (m) {
                var b = m[1],
                    H = e.substring(m[0].length);
                if ("//" === H.slice(0, 2)) {
                    if (!1 === (e = w(b))) return !1
                } else {
                    var V = H.indexOf("/"),
                        M = -1 === V ? H : H.substring(0, V),
                        k = M.indexOf("@");
                    if (-1 !== k) {
                        var _ = M.substring(0, k),
                            Z = /^[a-zA-Z0-9\-_.%:]*$/.test(_),
                            L = /%[0-9a-fA-F]{2}/.test(_);
                        if (Z && !L) {
                            if (t.require_protocol) return !1
                        } else if (!1 === (e = w(b))) return !1
                    } else if (/^[0-9]/.test(H)) {
                        if (t.require_protocol) return !1
                    } else if (!1 === (e = w(b))) return !1
                }
            } else if (t.require_protocol) return !1;
            if ("//" === e.slice(0, 2)) {
                if (!v && !t.allow_protocol_relative_urls) return !1;
                e = e.slice(2)
            }
            if ("" === e) return !1;
            if ("" === (e = (x = e.split("/")).shift()) && !t.require_host) return !0;
            if ((x = e.split("@")).length > 1) {
                if (t.disallow_auth || "" === x[0] || (c = x.shift()).indexOf(":") >= 0 && c.split(":").length > 2) return !1;
                var B, E = function(e) {
                        if (Array.isArray(e)) return e
                    }(B = c.split(":")) || function(e) {
                        var t = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, o, i, n, a = [],
                                l = !0,
                                h = !1;
                            try {
                                i = (t = t.call(e)).next, !1;
                                for (; !(l = (r = i.call(t)).done) && (a.push(r.value), 2 !== a.length); l = !0);
                            } catch (e) {
                                h = !0, o = e
                            } finally {
                                try {
                                    if (!l && null != t.return && (n = t.return(), Object(n) !== n)) return
                                } finally {
                                    if (h) throw o
                                }
                            }
                            return a
                        }
                    }(B) || function(e) {
                        if (e) {
                            if ("string" == typeof e) return d(e, 2);
                            var t = ({}).toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? d(e, 2) : void 0
                        }
                    }(B) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(),
                    P = E[0],
                    S = E[1];
                if ("" === P && "" === S) return !1
            }
            p = x.join("@"), y = null, g = null;
            var J = p.match(u);
            if (J ? (s = "", g = J[1], y = J[2] || null) : (s = (x = p.split(":")).shift(), x.length && (y = x.join(":"))), null !== y && y.length > 0) {
                if (f = parseInt(y, 10), !/^[0-9]+$/.test(y) || f <= 0 || f > 65535) return !1
            } else if (t.require_port) return !1;
            return t.host_whitelist ? (0, i.default)(s, t.host_whitelist) : "" === s && !t.require_host || (!!(0, l.default)(s) || !!(0, a.default)(s, t) || !!g && !!(0, l.default)(g, 6)) && (s = s || g, !(t.host_blacklist && (0, i.default)(s, t.host_blacklist)))
        };
        var o = c(r("NgaJ")),
            i = c(r("bPnx")),
            n = c(r("skvE")),
            a = c(r("HJNo")),
            l = c(r("BMmD")),
            h = c(r("Y4hk"));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
            return o
        }
        var C = {
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
            u = /^\[([^\]]+)\](?::([0-9]+))?$/;
        e.exports = t.default, e.exports.default = t.default
    }),
    NgaJ: (function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            if (null == e) throw TypeError("Expected a string but received a ".concat(e));
            if ("String" !== e.constructor.name) throw TypeError("Expected a string but received a ".concat(e.constructor.name))
        }, e.exports = t.default, e.exports.default = t.default
    }),
    bPnx: (function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                if (e === o || "[object RegExp]" === Object.prototype.toString.call(o) && o.test(e)) return !0
            }
            return !1
        }, e.exports = t.default, e.exports.default = t.default
    }),
    skvE: (function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, t.default = function(e, t) {
            return -1 !== e.indexOf(t)
        }, e.exports = t.default, e.exports.default = t.default
    }),
    Y4hk: (function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            for (var r in t) void 0 === e[r] && (e[r] = t[r]);
            return e
        }, e.exports = t.default, e.exports.default = t.default
    }),
    bFOP: (function(e, t, r) {
        r.d(t, {
            a: () => p,
            b: () => x.b
        });
        var o = r("ABep"),
            i = r("on57"),
            n = r("YLKE"),
            a = r("zd8w"),
            l = r("Cmnu"),
            h = r("BAKu"),
            c = r("We8q"),
            d = r("fZ4G"),
            C = r("EYJV"),
            u = r("DL3o"),
            s = r("vliF");
        let p = e => {
                let {
                    open: t,
                    onOpenChange: r,
                    showOnHover: i = !1,
                    hoverOpenDelay: h = 150,
                    children: d
                } = e, [C, u] = (0, a.useState)(!1), [p, f] = (0, a.useState)(!1), y = (0, a.useRef)(null), [x, g] = (0, a.useState)(null), m = (0, a.useRef)(null), v = (0, a.useRef)(void 0), w = (0, a.useRef)(!1), b = (0, a.useRef)(!1), H = t ?? C, [V, M] = (0, a.useState)(!1);
                (0, l.g)(() => M(!1), V ? 500 : null);
                let k = (0, c.a)(r),
                    _ = (0, c.a)(e => {
                        clearTimeout(v.current), H !== e && (e || (f(!1), i && w.current && y.current?.focus(), w.current = !1), k.current?.(e), u(e), i && M(e))
                    }),
                    Z = (0, a.useCallback)(e => {
                        _.current(e)
                    }, [_]),
                    L = (0, a.useCallback)(() => {
                        v.current = setTimeout(() => Z(!0), h)
                    }, [Z, h]),
                    B = (0, a.useCallback)(() => {
                        clearTimeout(v.current)
                    }, []);
                (0, a.useEffect)(() => () => {
                    clearTimeout(v.current)
                }, []);
                let E = (0, a.useMemo)(() => ({
                    open: H,
                    setOpen: Z,
                    shake: p,
                    setShake: f,
                    showOnHover: i,
                    temporarilyPreventClickToClose: V,
                    onTriggerEnter: L,
                    onTriggerLeave: B,
                    isPointerInTransitRef: b,
                    triggerRef: y,
                    triggerElement: x,
                    setTriggerElement: g,
                    contentRef: m,
                    hoverOpenFocusedWithTab: w
                }), [H, Z, p, f, i, V, w, b, x, L, B]);
                return (0, o.jsx)(s.a, {
                    value: E,
                    children: (0, o.jsx)(n.f, {
                        open: H,
                        onOpenChange: Z,
                        modal: !1,
                        children: d
                    })
                })
            },
            f = e => {
                let {
                    children: t,
                    "aria-label": r,
                    "aria-labelledby": a,
                    avoidCollisions: l,
                    width: h,
                    minWidth: c,
                    maxWidth: C,
                    side: u,
                    sideOffset: p = 8,
                    align: f,
                    alignOffset: y,
                    translucent: x,
                    className: g,
                    autoFocus: m = !0,
                    onCloseAutoFocus: v,
                    preventCloseOnFocusOutside: w = !1
                } = e, {
                    showOnHover: b,
                    shake: H,
                    contentRef: V
                } = (0, s.b)();
                return (0, o.jsx)(n.d, {
                    forceMount: !0,
                    ref: V,
                    "aria-label": r,
                    "aria-labelledby": a,
                    className: (0, i.b)("Popover-x1v5UD", g),
                    style: (0, d.e)({
                        "popover-width": h,
                        "popover-min-width": c,
                        "popover-max-width": C
                    }),
                    onCloseAutoFocus: v ?? (b ? d.d : void 0),
                    "data-animate": H ? "shake" : void 0,
                    "data-translucent": x ? "true" : void 0,
                    side: u,
                    sideOffset: p,
                    align: f,
                    alignOffset: y ?? ("center" === f ? 0 : -5),
                    avoidCollisions: l ?? !0,
                    hideWhenDetached: !0,
                    collisionPadding: 20,
                    onFocusOutside: w ? d.d : void 0,
                    onOpenAutoFocus: e => {
                        e.preventDefault();
                        let t = V.current;
                        m && !b && t && !t.contains(document.activeElement) && t.focus({
                            preventScroll: !0
                        })
                    },
                    onEscapeKeyDown: d.d,
                    onKeyDown: e => {
                        let t = V.current;
                        if (t && e.target === t && "Tab" === e.key && e.shiftKey) {
                            e.preventDefault(), e.stopPropagation();
                            let r = (0, d.a)(t),
                                o = r[r.length - 1];
                            o?.focus()
                        }
                    },
                    children: t
                })
            },
            y = e => {
                let {
                    setOpen: t,
                    triggerRef: r,
                    contentRef: i,
                    isPointerInTransitRef: n,
                    hoverOpenFocusedWithTab: l
                } = (0, s.b)(), [h, c] = (0, a.useState)(null), C = (0, a.useCallback)(() => {
                    c(null), n.current = !1
                }, [n]), u = (0, a.useCallback)((e, t) => {
                    c(((e, t) => {
                        let r, o = e.currentTarget;
                        if (!(o instanceof HTMLElement)) return [];
                        let i = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            n = function(e, t) {
                                let r = Math.abs(t.top - e.y),
                                    o = Math.abs(t.bottom - e.y),
                                    i = Math.abs(t.right - e.x),
                                    n = Math.abs(t.left - e.x);
                                switch (Math.min(r, o, i, n)) {
                                    case n:
                                        return "left";
                                    case i:
                                        return "right";
                                    case r:
                                        return "top";
                                    case o:
                                        return "bottom";
                                    default:
                                        throw Error("unreachable")
                                }
                            }(i, o.getBoundingClientRect()),
                            a = function(e, t) {
                                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                    o = [];
                                switch (t) {
                                    case "top":
                                        o.push({
                                            x: e.x - r,
                                            y: e.y + r
                                        }, {
                                            x: e.x + r,
                                            y: e.y + r
                                        });
                                        break;
                                    case "bottom":
                                        o.push({
                                            x: e.x - r,
                                            y: e.y - r
                                        }, {
                                            x: e.x + r,
                                            y: e.y - r
                                        });
                                        break;
                                    case "left":
                                        o.push({
                                            x: e.x + r,
                                            y: e.y - r
                                        }, {
                                            x: e.x + r,
                                            y: e.y + r
                                        });
                                        break;
                                    case "right":
                                        o.push({
                                            x: e.x - r,
                                            y: e.y - r
                                        }, {
                                            x: e.x - r,
                                            y: e.y + r
                                        })
                                }
                                return o
                            }(i, n),
                            l = function(e) {
                                let {
                                    top: t,
                                    right: r,
                                    bottom: o,
                                    left: i
                                } = e;
                                return [{
                                    x: i,
                                    y: t
                                }, {
                                    x: r,
                                    y: t
                                }, {
                                    x: r,
                                    y: o
                                }, {
                                    x: i,
                                    y: o
                                }]
                            }(t.getBoundingClientRect());
                        return (r = [...a, ...l].slice()).sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)),
                            function(e) {
                                if (e.length <= 1) return e.slice();
                                let t = [];
                                for (let r of e) {
                                    for (; t.length >= 2;) {
                                        let e = t.at(-1),
                                            o = t.at(-2);
                                        if (e && o && (e.x - o.x) * (r.y - o.y) >= (e.y - o.y) * (r.x - o.x)) t.pop();
                                        else break
                                    }
                                    t.push(r)
                                }
                                t.pop();
                                let r = [];
                                for (let t of [...e].reverse()) {
                                    for (; r.length >= 2;) {
                                        let e = r.at(-1),
                                            o = r.at(-2);
                                        if (e && o && (e.x - o.x) * (t.y - o.y) >= (e.y - o.y) * (t.x - o.x)) r.pop();
                                        else break
                                    }
                                    r.push(t)
                                }
                                return (r.pop(), 1 === t.length && 1 === r.length && t[0]?.x === r[0]?.x && t[0]?.y === r[0]?.y) ? t : t.concat(r)
                            }(r)
                    })(e, t)), n.current = !0
                }, [n]);
                return (0, a.useEffect)(() => () => C(), [C]), (0, a.useEffect)(() => {
                    let e = r.current,
                        t = i.current;
                    if (!e || !t) return;
                    let o = e => u(e, t),
                        n = t => u(t, e);
                    return e.addEventListener("pointerleave", o), t.addEventListener("pointerleave", n), () => {
                        e.removeEventListener("pointerleave", o), t.removeEventListener("pointerleave", n)
                    }
                }, [i, r, u, C]), (0, a.useEffect)(() => {
                    if (!h) return;
                    let e = e => {
                        let o = r.current,
                            n = i.current,
                            a = e.target;
                        if (!(a instanceof Element)) return;
                        let l = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            c = o?.contains(a) || n?.contains(a),
                            d = ! function(e, t) {
                                let {
                                    x: r,
                                    y: o
                                } = e, i = !1, n = t.at(-1);
                                for (let e of t) n && e.y > o != n.y > o && r < (n.x - e.x) * (o - e.y) / (n.y - e.y) + e.x && (i = !i), n = e;
                                return i
                            }(l, h),
                            u = a.hasAttribute("aria-haspopup");
                        c ? C() : (d || u) && (C(), t(!1))
                    };
                    return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                }, [h, t, C, r, i]), (0, a.useEffect)(() => {
                    let e = t => {
                        if (i.current && "Tab" === t.key && !t.shiftKey) {
                            let [r] = (0, d.a)(i.current);
                            r && (t.preventDefault(), r.focus(), l.current = !0, document.removeEventListener("keydown", e))
                        }
                    };
                    return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    }
                }, [i, l]), (0, o.jsx)(f, {
                    ...e
                })
            };
        p.Trigger = e => {
            let {
                children: t,
                onPointerDown: r,
                onClick: i
            } = e, {
                setOpen: l,
                showOnHover: h,
                temporarilyPreventClickToClose: c,
                onTriggerEnter: d,
                onTriggerLeave: C,
                isPointerInTransitRef: u,
                triggerRef: p,
                setTriggerElement: f,
                contentRef: y
            } = (0, s.b)(), x = (0, a.useRef)(!1), g = (0, a.useCallback)(e => {
                p.current = e, f(e)
            }, [p, f]), m = e => {
                "a" !== e.currentTarget.nodeName.toLocaleLowerCase() && c && (e.preventDefault(), e.stopPropagation())
            };
            return (0, o.jsx)(n.g, {
                asChild: !0,
                ref: g,
                onPointerDown: e => {
                    m(e), r?.(e)
                },
                onClick: e => {
                    m(e), i?.(e)
                },
                onPointerMove: h ? e => {
                    "touch" !== e.pointerType && (x.current || u.current || (d(), x.current = !0))
                } : void 0,
                onPointerLeave: h ? () => {
                    x.current && (C(), x.current = !1)
                } : void 0,
                onFocus: h ? () => l(!0) : void 0,
                onBlur: h ? () => {
                    setTimeout(() => {
                        y.current?.contains(document.activeElement) || p.current?.contains(document.activeElement) || l(!1)
                    }, 50)
                } : void 0,
                children: t
            })
        }, p.Content = e => {
            let {
                open: t,
                showOnHover: r,
                setOpen: i,
                triggerElement: a
            } = (0, s.b)(), l = (0, C.b)() ?? a?.closest('[role="dialog"]') ?? void 0;
            return (0, h.b)(t, () => {
                i(!1)
            }), (0, o.jsx)(n.e, {
                forceMount: !0,
                container: l,
                children: (0, o.jsx)(u.b, {
                    enterDuration: 600,
                    exitDuration: 300,
                    className: "Transition-TpKe3L",
                    children: t && (r ? (0, o.jsx)(y, {
                        ...e
                    }, "popover-hover") : (0, o.jsx)(f, {
                        ...e
                    }, "popover"))
                })
            })
        };
        var x = r("U8Jh")
    }),
    vliF: (function(e, t, r) {
        var o = r("zd8w");
        let i = (0, o.createContext)(null);
        r.d(t, {}, {
            a: i,
            b: () => {
                let e = (0, o.use)(i);
                if (!e) throw Error("Popover components must be wrapped in <Popover />");
                return e
            }
        })
    }),
    U8Jh: (function(e, t, r) {
        var o = r("zd8w"),
            i = r("v7qY"),
            n = r("fZ4G"),
            a = r("vliF");
        let l = () => {
            let {
                setOpen: e
            } = (0, a.b)();
            return (0, o.useCallback)(() => e(!1), [e])
        };
        r.d(t, {}, {
            a: l,
            b: () => {
                let e = (() => {
                    let {
                        setShake: e
                    } = (0, a.b)();
                    return (0, o.useCallback)(() => {
                        (0, i.flushSync)(() => {
                            e(!1)
                        }), (0, n.j)(() => e(!0))
                    }, [e])
                })();
                return {
                    close: l(),
                    shake: e
                }
            }
        })
    }),
    BAmR: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "location-arrow-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-location-arrow-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .095947,
                    y: .020508,
                    overflows: !1
                },
                composite: {
                    x: .095947,
                    y: .020508,
                    overflows: !1
                }
            }
        }
    }),
    pw0J: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "photo-on-tilted-square-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-photo-on-tilted-square-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.166123,
                    y: -.144044,
                    overflows: !1
                },
                composite: {
                    x: -.166123,
                    y: -.144044,
                    overflows: !1
                }
            }
        }
    }),
    nPAz: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "bar-chart-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.474609,
                    y: 1.474609,
                    width: 13.050781,
                    height: 13.050781
                },
                visualBounds: {
                    x: 1.474609,
                    y: 1.474609,
                    width: 13.050781,
                    height: 13.050781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.474609,
                    y: 1.474609,
                    width: 13.050781,
                    height: 13.050781
                },
                center: {
                    x: 8,
                    y: 8
                },
                insets: {
                    top: 1.474609,
                    right: 1.47461,
                    bottom: 1.47461,
                    left: 1.474609
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8,
                        y: 8
                    },
                    foreground: {
                        x: 8,
                        y: 8
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99707 1.47461C9.8393 1.47461 10.5225 2.15777 10.5225 3V4.45703H13C13.8422 4.45703 14.5254 5.14019 14.5254 5.98242V12.6494C14.5252 13.6755 13.6931 14.5076 12.667 14.5078H10.125C10.0839 14.5181 10.0413 14.5254 9.99707 14.5254C9.95279 14.5254 9.91023 14.5181 9.86914 14.5078H6.125C6.08391 14.5181 6.04135 14.5254 5.99707 14.5254C5.95279 14.5254 5.91023 14.5181 5.86914 14.5078H3.33301C2.30694 14.5076 1.47479 13.6755 1.47461 12.6494V8.98242C1.47461 8.14019 2.15777 7.45703 3 7.45703H5.47168V3C5.47168 2.15777 6.15484 1.47461 6.99707 1.47461H8.99707ZM10.5225 13.457H12.667C13.1132 13.4569 13.4744 13.0956 13.4746 12.6494V5.98242C13.4746 5.72009 13.2623 5.50781 13 5.50781H10.5225V13.457ZM6.99707 2.52539C6.73474 2.52539 6.52246 2.73766 6.52246 3V13.457H9.47168V3C9.47168 2.73766 9.25941 2.52539 8.99707 2.52539H6.99707ZM3 8.50781C2.73766 8.50781 2.52539 8.72009 2.52539 8.98242V12.6494C2.52557 13.0956 2.88684 13.4569 3.33301 13.457H5.47168V8.50781H3Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    kMBy: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "bar-chart-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 1.834961,
                    y: 1.835938,
                    width: 16.330078,
                    height: 16.330078
                },
                visualBounds: {
                    x: 1.834961,
                    y: 1.835938,
                    width: 16.330078,
                    height: 16.330078
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.834961,
                    y: 1.835938,
                    width: 16.330078,
                    height: 16.330078
                },
                center: {
                    x: 10,
                    y: 10.000977
                },
                insets: {
                    top: 1.835938,
                    right: 1.834961,
                    bottom: 1.833984,
                    left: 1.834961
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10,
                        y: 10.000977
                    },
                    foreground: {
                        x: 10,
                        y: 10.000977
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2471 1.83594C12.3047 1.83594 13.1621 2.69335 13.1621 3.75098V5.56445H16.25C17.3076 5.56445 18.165 6.42187 18.165 7.47949V15.8125C18.165 17.1002 17.1208 18.1445 15.833 18.1445H12.6562C12.6051 18.1571 12.5521 18.166 12.4971 18.166C12.442 18.166 12.3891 18.1571 12.3379 18.1445H7.65625C7.60509 18.1571 7.55213 18.166 7.49707 18.166C7.44201 18.166 7.38905 18.1571 7.33789 18.1445H4.16699C2.87925 18.1445 1.83496 17.1002 1.83496 15.8125V11.2295C1.83496 10.1719 2.69238 9.31445 3.75 9.31445H6.83203V3.75098C6.83203 2.69335 7.68945 1.83594 8.74707 1.83594H11.2471ZM13.1621 16.8145H15.833C16.3862 16.8145 16.835 16.3657 16.835 15.8125V7.47949C16.835 7.15641 16.5731 6.89453 16.25 6.89453H13.1621V16.8145ZM8.74707 3.16602C8.42398 3.16602 8.16211 3.42789 8.16211 3.75098V16.8145H11.832V3.75098C11.832 3.42789 11.5702 3.16602 11.2471 3.16602H8.74707ZM3.75 10.6445C3.42691 10.6445 3.16504 10.9064 3.16504 11.2295V15.8125C3.16504 16.3657 3.61379 16.8145 4.16699 16.8145H6.83203V10.6445H3.75Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    DmTj: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "building-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                },
                visualBounds: {
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                },
                center: {
                    x: 6,
                    y: 6
                },
                insets: {
                    top: 1.599609,
                    right: .59961,
                    bottom: 1.59961,
                    left: .599609
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6,
                        y: 6
                    },
                    foreground: {
                        x: 6,
                        y: 6
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M9.59961 5C9.59961 4.66863 9.33137 4.40039 9 4.40039H7.40039V9.59961H9.59961V5ZM6.59961 3C6.59961 2.66863 6.33137 2.40039 6 2.40039H3C2.66863 2.40039 2.40039 2.66863 2.40039 3V9.59961H4.09961V8.5C4.09961 8.27909 4.27909 8.09961 4.5 8.09961C4.72091 8.09961 4.90039 8.27909 4.90039 8.5V9.59961H6.59961V3ZM7.40039 3.59961H9C9.7732 3.59961 10.4004 4.2268 10.4004 5V9.59961H11C11.2209 9.59961 11.4004 9.77909 11.4004 10C11.4004 10.2209 11.2209 10.4004 11 10.4004H1C0.779086 10.4004 0.599609 10.2209 0.599609 10C0.599609 9.77909 0.779086 9.59961 1 9.59961H1.59961V3C1.59961 2.2268 2.2268 1.59961 3 1.59961H6C6.7732 1.59961 7.40039 2.2268 7.40039 3V3.59961Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    vKUH: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "building-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: .807861,
                    y: 2.141602,
                    width: 14.383789,
                    height: 11.716797
                },
                visualBounds: {
                    x: .807861,
                    y: 2.141602,
                    width: 14.383789,
                    height: 11.716797
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .807861,
                    y: 2.141602,
                    width: 14.383789,
                    height: 11.716797
                },
                center: {
                    x: 7.999756,
                    y: 8
                },
                insets: {
                    top: 2.141602,
                    right: .80835,
                    bottom: 2.141601,
                    left: .807861
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 7.999756,
                        y: 8
                    },
                    foreground: {
                        x: 7.999756,
                        y: 8
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M12.8079 6.66699C12.8079 6.22067 12.4465 5.85857 12.0002 5.8584H9.85864V12.8086H12.8079V6.66699ZM8.80786 4C8.80769 3.55383 8.44642 3.19256 8.00024 3.19238H4.00024C3.55392 3.19238 3.19183 3.55372 3.19165 4V12.8086H5.47485V11.334C5.47485 11.044 5.71029 10.8086 6.00024 10.8086C6.29004 10.8088 6.52466 11.0441 6.52466 11.334V12.8086H8.80786V4ZM9.85864 4.80859H12.0002C13.0264 4.80877 13.8586 5.64077 13.8586 6.66699V12.8086H14.6663C14.9562 12.8086 15.1917 13.044 15.1917 13.334C15.1915 13.6238 14.9561 13.8584 14.6663 13.8584H1.33325C1.04341 13.8584 0.808037 13.6238 0.807861 13.334C0.807861 13.044 1.0433 12.8086 1.33325 12.8086H2.14185V4C2.14202 2.97382 2.97402 2.1416 4.00024 2.1416H8.00024C9.02631 2.14178 9.85847 2.97393 9.85864 4V4.80859Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    ngmq: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "building-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 1.001709,
                    y: 2.667969,
                    width: 17.99707,
                    height: 14.663086
                },
                visualBounds: {
                    x: 1.001709,
                    y: 2.667969,
                    width: 17.99707,
                    height: 14.663086
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.001709,
                    y: 2.667969,
                    width: 17.99707,
                    height: 14.663086
                },
                center: {
                    x: 10.000244,
                    y: 9.999512
                },
                insets: {
                    top: 2.667969,
                    right: 1.001221,
                    bottom: 2.668945,
                    left: 1.001709
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.000244,
                        y: 9.999512
                    },
                    foreground: {
                        x: 10.000244,
                        y: 9.999512
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M16.0017 8.33301C16.0017 7.7798 15.553 7.33105 14.9998 7.33105H12.3318V16.001H16.0017V8.33301ZM11.0017 5C11.0017 4.44679 10.553 3.99805 9.99976 3.99805H4.99976C4.4467 3.99822 3.99878 4.4469 3.99878 5V16.001H6.83472V14.166C6.83489 13.799 7.13274 13.5012 7.49976 13.501C7.86692 13.501 8.16462 13.7989 8.16479 14.166V16.001H11.0017V5ZM12.3318 6.00098H14.9998C16.2875 6.00098 17.3318 7.04526 17.3318 8.33301V16.001H18.3337C18.7008 16.0012 18.9986 16.299 18.9988 16.666C18.9988 17.0332 18.7009 17.3309 18.3337 17.3311H1.66675C1.29948 17.3311 1.00171 17.0333 1.00171 16.666C1.00188 16.2989 1.29959 16.001 1.66675 16.001H2.6687V5C2.6687 3.71236 3.71216 2.66814 4.99976 2.66797H9.99976C11.2875 2.66797 12.3318 3.71226 12.3318 5V6.00098Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    ZM65: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "document-badge-magnifyingglass-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.644531,
                    y: 1.349609,
                    width: 9.256836,
                    height: 10.067383
                },
                visualBounds: {
                    x: 1.644531,
                    y: 1.349609,
                    width: 9.256836,
                    height: 10.067383
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.644531,
                    y: 1.349609,
                    width: 9.256836,
                    height: 10.067383
                },
                center: {
                    x: 6.272949,
                    y: 6.383301
                },
                insets: {
                    top: 1.349609,
                    right: 1.098633,
                    bottom: .583008,
                    left: 1.644531
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6.272949,
                        y: 6.383301
                    },
                    foreground: {
                        x: 6.272949,
                        y: 6.383301
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.15332 6.59863C9.29195 6.59876 10.2148 7.52247 10.2148 8.66113C10.2147 9.08762 10.0852 9.48375 9.86328 9.8125L10.7842 10.7344C10.9404 10.8906 10.9404 11.1436 10.7842 11.2998C10.628 11.456 10.3749 11.456 10.2188 11.2998L9.29395 10.376C8.96715 10.5937 8.57546 10.7226 8.15332 10.7227C7.01494 10.7225 6.09121 9.79946 6.09082 8.66113C6.09082 7.52248 7.01469 6.59876 8.15332 6.59863ZM8.15332 7.39941C7.45652 7.39955 6.8916 7.9643 6.8916 8.66113C6.89199 9.35763 7.45676 9.92272 8.15332 9.92285C8.84988 9.92272 9.41465 9.35763 9.41504 8.66113C9.41504 7.9643 8.85012 7.39954 8.15332 7.39941Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.92383 1.34961C7.42766 1.34967 7.91131 1.54998 8.26758 1.90625L9.38867 3.02734C9.73987 3.37854 9.93867 3.85354 9.94434 4.34961H10V5.15039H9.94531V5.24512C9.94519 5.46593 9.76576 5.64453 9.54492 5.64453C9.32408 5.64453 9.14465 5.46593 9.14453 5.24512V5.15039H8.25C7.4768 5.15039 6.84961 4.5232 6.84961 3.75V2.15039H3.54492C2.93741 2.15039 2.44531 2.64249 2.44531 3.25V8.75C2.44531 9.35751 2.93741 9.84961 3.54492 9.84961H4.54492C4.76584 9.84961 4.94531 10.0291 4.94531 10.25C4.94531 10.4709 4.76584 10.6504 4.54492 10.6504H3.54492C2.49558 10.6504 1.64453 9.79934 1.64453 8.75V3.25C1.64453 2.20066 2.49558 1.34961 3.54492 1.34961H6.92383ZM7.65039 3.75C7.65039 4.08137 7.91863 4.34961 8.25 4.34961H9.14355C9.13795 4.06575 9.02343 3.79491 8.82227 3.59375L7.70117 2.47266C7.68498 2.45646 7.66746 2.44182 7.65039 2.42676V3.75Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    G9K2: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "document-badge-magnifyingglass-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 2.337891,
                    y: 1.808105,
                    width: 12.189697,
                    height: 13.406738
                },
                visualBounds: {
                    x: 2.337891,
                    y: 1.808105,
                    width: 12.189697,
                    height: 13.406738
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.337891,
                    y: 1.808105,
                    width: 12.189697,
                    height: 13.406738
                },
                center: {
                    x: 8.43274,
                    y: 8.511474
                },
                insets: {
                    top: 1.808105,
                    right: 1.472412,
                    bottom: .785157,
                    left: 2.337891
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.43274,
                        y: 8.511474
                    },
                    foreground: {
                        x: 8.43274,
                        y: 8.511474
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8711 8.80615C12.3848 8.80615 13.6123 10.0336 13.6123 11.5474C13.6123 12.1172 13.4374 12.646 13.1396 13.0845L14.374 14.3179C14.579 14.5228 14.5789 14.856 14.374 15.061C14.169 15.266 13.8359 15.266 13.6309 15.061L12.3945 13.8237C11.9586 14.1161 11.4353 14.2886 10.8711 14.2886C9.35746 14.2886 8.13001 13.061 8.12988 11.5474C8.12989 10.0337 9.35738 8.80616 10.8711 8.80615ZM10.8711 9.85693C9.93728 9.85694 9.18067 10.6136 9.18066 11.5474C9.1808 12.4811 9.93736 13.2378 10.8711 13.2378C11.8048 13.2378 12.5614 12.4811 12.5615 11.5474C12.5615 10.6135 11.8049 9.85693 10.8711 9.85693Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.36816 1.80811C10.0378 1.80811 10.6798 2.07482 11.1533 2.54834L12.6484 4.04346C13.122 4.51699 13.3887 5.15895 13.3887 5.82861V7.16357C13.3886 7.45346 13.1532 7.68799 12.8633 7.68799C12.5734 7.68799 12.338 7.45346 12.3379 7.16357V6.85889H10.833C9.80694 6.85871 8.97479 6.02656 8.97461 5.00049V2.85889H4.86328C4.04866 2.85889 3.38867 3.51888 3.38867 4.3335V11.6665C3.38867 12.4811 4.04866 13.1421 4.86328 13.1421H6.36328C6.65312 13.1421 6.8885 13.3767 6.88867 13.6665C6.88867 13.9565 6.65323 14.1919 6.36328 14.1919H4.86328C3.46876 14.1919 2.33789 13.061 2.33789 11.6665V4.3335C2.33789 2.93898 3.46876 1.80811 4.86328 1.80811H9.36816ZM10.0254 5.00049C10.0256 5.44666 10.3868 5.80793 10.833 5.80811H12.3369C12.3316 5.42434 12.178 5.05742 11.9062 4.78564L10.4111 3.29053C10.2975 3.17693 10.1665 3.08541 10.0254 3.01514V5.00049Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    EZXn: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "live-signal-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.10498,
                    y: 2.386719,
                    width: 9.800781,
                    height: 7.224609
                },
                visualBounds: {
                    x: 1.10498,
                    y: 2.386719,
                    width: 9.800781,
                    height: 7.224609
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.10498,
                    y: 2.386719,
                    width: 9.800781,
                    height: 7.224609
                },
                center: {
                    x: 6.005371,
                    y: 5.999024
                },
                insets: {
                    top: 2.386719,
                    right: 1.094239,
                    bottom: 2.388672,
                    left: 1.10498
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6.005371,
                        y: 5.999024
                    },
                    foreground: {
                        x: 6.005371,
                        y: 5.999024
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M2.57471 2.50118C2.73233 2.3468 2.98549 2.34873 3.14014 2.50607C3.29476 2.66371 3.29179 2.91679 3.13428 3.0715C2.37525 3.81594 1.90587 4.85274 1.90576 5.99923C1.90577 7.14578 2.37529 8.18245 3.13428 8.92697C3.29191 9.08159 3.29461 9.33467 3.14014 9.49239C2.98544 9.64999 2.73238 9.65193 2.57471 9.49728C1.66869 8.60851 1.10498 7.36929 1.10498 5.99923C1.10509 4.62924 1.66866 3.38988 2.57471 2.50118Z" fill="currentColor"/> <path d="M8.87061 2.50607C9.0252 2.34865 9.27836 2.34689 9.43604 2.50118C10.3421 3.38988 10.9056 4.62924 10.9058 5.99923C10.9058 7.36935 10.3421 8.6085 9.43604 9.49728C9.27836 9.65193 9.0253 9.64999 8.87061 9.49239C8.71625 9.33466 8.71888 9.08155 8.87646 8.92697C9.63553 8.18244 10.105 7.14584 10.105 5.99923C10.1049 4.85274 9.63549 3.81594 8.87646 3.0715C8.71908 2.91678 8.71603 2.66367 8.87061 2.50607Z" fill="currentColor"/> <path d="M3.94287 3.96114C4.09817 3.80422 4.35124 3.80301 4.5083 3.95821C4.66516 4.11352 4.66642 4.3666 4.51123 4.52364C4.13624 4.90327 3.90585 5.424 3.90576 5.99923C3.9058 6.57466 4.13606 7.09611 4.51123 7.47579C4.66643 7.63292 4.66536 7.88596 4.5083 8.04122C4.35131 8.19629 4.09817 8.19497 3.94287 8.03829C3.42571 7.51495 3.10502 6.79363 3.10498 5.99923C3.10507 5.20495 3.42579 4.48444 3.94287 3.96114Z" fill="currentColor"/> <path d="M7.50244 3.95821C7.65951 3.80301 7.91257 3.80422 8.06787 3.96114C8.58495 4.48444 8.90567 5.20495 8.90576 5.99923C8.90573 6.79363 8.58503 7.51495 8.06787 8.03829C7.91258 8.19497 7.65944 8.19629 7.50244 8.04122C7.34538 7.88596 7.34432 7.63292 7.49951 7.47579C7.87468 7.09611 8.10495 6.57466 8.10498 5.99923C8.10489 5.424 7.87451 4.90327 7.49951 4.52364C7.34432 4.3666 7.34558 4.11352 7.50244 3.95821Z" fill="currentColor"/> <path d="M6.00537 5.04122C6.53101 5.04122 6.95752 5.46773 6.95752 5.99337C6.95752 6.51901 6.53101 6.94552 6.00537 6.94552C5.47973 6.94552 5.05322 6.51901 5.05322 5.99337C5.05322 5.46773 5.47973 5.04122 6.00537 5.04122Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    lq2s: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "live-signal-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.481812,
                    y: 3.191406,
                    width: 13.050781,
                    height: 9.617188
                },
                visualBounds: {
                    x: 1.481812,
                    y: 3.191406,
                    width: 13.050781,
                    height: 9.617188
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.481812,
                    y: 3.191406,
                    width: 13.050781,
                    height: 9.617188
                },
                center: {
                    x: 8.007203,
                    y: 8
                },
                insets: {
                    top: 3.191406,
                    right: 1.467407,
                    bottom: 3.191406,
                    left: 1.481812
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.007203,
                        y: 8
                    },
                    foreground: {
                        x: 8.007203,
                        y: 8
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M3.43884 3.341C3.64582 3.13844 3.97812 3.14212 4.18103 3.34881C4.38372 3.55573 4.38082 3.88802 4.17419 4.091C3.16059 5.08513 2.53269 6.46911 2.53259 8.00017C2.53269 9.53114 3.1607 10.9143 4.17419 11.9084C4.38114 12.1113 4.38388 12.4445 4.18103 12.6515C3.97803 12.8584 3.64582 12.8613 3.43884 12.6584C2.23229 11.4749 1.48191 9.82457 1.48181 8.00017C1.48191 6.1757 2.23219 4.52447 3.43884 3.341Z" fill="currentColor"/> <path d="M11.8334 3.34881C12.0362 3.14201 12.3685 3.13857 12.5756 3.341C13.7822 4.52447 14.5325 6.1757 14.5326 8.00017C14.5325 9.82466 13.7822 11.4749 12.5756 12.6584C12.3686 12.8613 12.0364 12.8584 11.8334 12.6515C11.6307 12.4445 11.6333 12.1113 11.8402 11.9084C12.8538 10.9142 13.4817 9.53123 13.4818 8.00017C13.4817 6.46911 12.8538 5.08513 11.8402 4.091C11.6338 3.88801 11.6308 3.55567 11.8334 3.34881Z" fill="currentColor"/> <path d="M5.26306 5.28728C5.46687 5.08148 5.79914 5.07979 6.00525 5.28338C6.21128 5.48706 6.21352 5.81932 6.01013 6.02557C5.50845 6.53324 5.19973 7.22978 5.19958 7.9992C5.19958 8.76875 5.50842 9.46505 6.01013 9.97283C6.21383 10.179 6.21116 10.5122 6.00525 10.716C5.79899 10.9195 5.46677 10.9173 5.26306 10.7111C4.57502 10.0148 4.1488 9.05612 4.1488 7.9992C4.14894 6.94242 4.57507 5.98351 5.26306 5.28728Z" fill="currentColor"/> <path d="M10.0092 5.28338C10.2152 5.07975 10.5475 5.08152 10.7513 5.28728C11.4393 5.98351 11.8655 6.94242 11.8656 7.9992C11.8656 9.05615 11.4394 10.0148 10.7513 10.7111C10.5476 10.9173 10.2154 10.9195 10.0092 10.716C9.8033 10.5122 9.8006 10.1789 10.0043 9.97283C10.506 9.46505 10.8148 8.76879 10.8148 7.9992C10.8147 7.22978 10.506 6.53324 10.0043 6.02557C9.80095 5.81932 9.80315 5.48704 10.0092 5.28338Z" fill="currentColor"/> <path d="M8.0072 6.73162C8.70323 6.73175 9.26777 7.29634 9.26794 7.99236C9.26768 8.68831 8.70318 9.25297 8.0072 9.2531C7.31126 9.25293 6.74672 8.68828 6.74646 7.99236C6.74664 7.29637 7.31121 6.7318 8.0072 6.73162Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    RZ27: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "live-signal-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 1.843994,
                    y: 3.980469,
                    width: 16.330078,
                    height: 12.039063
                },
                visualBounds: {
                    x: 1.843994,
                    y: 3.980469,
                    width: 16.330078,
                    height: 12.039063
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.843994,
                    y: 3.980469,
                    width: 16.330078,
                    height: 12.039063
                },
                center: {
                    x: 10.009033,
                    y: 10.000001
                },
                insets: {
                    top: 3.980469,
                    right: 1.825928,
                    bottom: 3.980468,
                    left: 1.843994
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.009033,
                        y: 10.000001
                    },
                    foreground: {
                        x: 10.009033,
                        y: 10.000001
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M4.29224 4.17087C4.55444 3.9137 4.9755 3.91745 5.23267 4.17965C5.48982 4.44186 5.4851 4.86292 5.2229 5.12008C3.95758 6.3612 3.17416 8.08862 3.17407 9.99997C3.17408 11.9113 3.95769 13.6387 5.2229 14.8799C5.48499 15.1369 5.48953 15.5581 5.23267 15.8203C4.97556 16.0824 4.55445 16.087 4.29224 15.83C2.78223 14.349 1.844 12.2832 1.84399 9.99997C1.84408 7.71688 2.7823 5.65181 4.29224 4.17087Z" fill="currentColor"/> <path d="M14.7854 4.17965C15.0425 3.91751 15.4636 3.91387 15.7258 4.17087C17.2358 5.65181 18.174 7.71687 18.1741 9.99997C18.1741 12.2832 17.2358 14.349 15.7258 15.83C15.4636 16.0868 15.0424 16.0824 14.7854 15.8203C14.5288 15.5581 14.5333 15.1369 14.7952 14.8799C16.0604 13.6387 16.844 11.9113 16.844 9.99997C16.8439 8.08861 16.0605 6.3612 14.7952 5.12008C14.5332 4.86297 14.5285 4.44182 14.7854 4.17965Z" fill="currentColor"/> <path d="M6.57153 6.60348C6.82956 6.34243 7.25071 6.34087 7.51196 6.5986C7.77317 6.85674 7.77593 7.27779 7.51782 7.53903C6.89235 8.17209 6.5072 9.04061 6.50708 9.99997C6.50711 10.9593 6.89245 11.8278 7.51782 12.4609C7.77596 12.7221 7.77317 13.1432 7.51196 13.4013C7.25072 13.6594 6.82965 13.6567 6.57153 13.3955C5.71031 12.5236 5.17703 11.3232 5.177 9.99997C5.17712 8.67651 5.70994 7.47538 6.57153 6.60348Z" fill="currentColor"/> <path d="M12.5061 6.5986C12.7673 6.34083 13.1885 6.34247 13.4465 6.60348C14.3081 7.47538 14.8409 8.67651 14.8411 9.99997C14.841 11.3232 14.3078 12.5236 13.4465 13.3955C13.1884 13.6567 12.7673 13.6594 12.5061 13.4013C12.245 13.1432 12.2421 12.7221 12.5002 12.4609C13.1257 11.8278 13.511 10.9593 13.511 9.99997C13.5109 9.04061 13.1257 8.17209 12.5002 7.53903C12.2422 7.27779 12.2449 6.85672 12.5061 6.5986Z" fill="currentColor"/> <path d="M10.009 8.40622C10.884 8.40639 11.593 9.11614 11.593 9.99118C11.5928 10.8661 10.8839 11.575 10.009 11.5752C9.13416 11.575 8.42425 10.8661 8.42407 9.99118C8.42407 9.11615 9.13405 8.40642 10.009 8.40622Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    Bv22: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "newspaper-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.099609,
                    y: 1.599609,
                    width: 9.800781,
                    height: 8.800781
                },
                visualBounds: {
                    x: 1.099609,
                    y: 1.599609,
                    width: 9.800781,
                    height: 8.800781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.099609,
                    y: 1.599609,
                    width: 9.800781,
                    height: 8.800781
                },
                center: {
                    x: 6,
                    y: 6
                },
                insets: {
                    top: 1.599609,
                    right: 1.09961,
                    bottom: 1.59961,
                    left: 1.099609
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6,
                        y: 6
                    },
                    foreground: {
                        x: 6,
                        y: 6
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8.5 7.59961C8.72091 7.59961 8.90039 7.77909 8.90039 8C8.90039 8.22091 8.72091 8.40039 8.5 8.40039H3.5C3.27909 8.40039 3.09961 8.22091 3.09961 8C3.09961 7.77909 3.27909 7.59961 3.5 7.59961H8.5Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 3.59961C5.60898 3.59961 5.90039 3.89101 5.90039 4.25V5.75C5.90039 6.10898 5.60898 6.40039 5.25 6.40039H3.75C3.39101 6.40039 3.09961 6.10898 3.09961 5.75V4.25C3.09961 3.89101 3.39101 3.59961 3.75 3.59961H5.25ZM3.90039 5.59961H5.09961V4.40039H3.90039V5.59961Z" fill="currentColor"/> <path d="M8.5 5.59961C8.72091 5.59961 8.90039 5.77909 8.90039 6C8.90039 6.22091 8.72091 6.40039 8.5 6.40039H7.25C7.02909 6.40039 6.84961 6.22091 6.84961 6C6.84961 5.77909 7.02909 5.59961 7.25 5.59961H8.5Z" fill="currentColor"/> <path d="M8.5 3.59961C8.72091 3.59961 8.90039 3.77909 8.90039 4C8.90039 4.22091 8.72091 4.40039 8.5 4.40039H7.25C7.02909 4.40039 6.84961 4.22091 6.84961 4C6.84961 3.77909 7.02909 3.59961 7.25 3.59961H8.5Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.7002 1.59961C9.91507 1.59972 10.9003 2.58493 10.9004 3.7998V8.2002C10.9003 9.41507 9.91507 10.4003 8.7002 10.4004H3.2998C2.08493 10.4003 1.09971 9.41507 1.09961 8.2002V3.7998C1.09972 2.58493 2.08493 1.59971 3.2998 1.59961H8.7002ZM3.2998 2.40039C2.52676 2.4005 1.9005 3.02676 1.90039 3.7998V8.2002C1.9005 8.97324 2.52676 9.5995 3.2998 9.59961H8.7002C9.47324 9.5995 10.0995 8.97324 10.0996 8.2002V3.7998C10.0995 3.02676 9.47324 2.4005 8.7002 2.40039H3.2998Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    mJVb: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "newspaper-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.474609,
                    y: 2.141357,
                    width: 13.050781,
                    height: 11.716797
                },
                visualBounds: {
                    x: 1.474609,
                    y: 2.141357,
                    width: 13.050781,
                    height: 11.716797
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.474609,
                    y: 2.141357,
                    width: 13.050781,
                    height: 11.716797
                },
                center: {
                    x: 8,
                    y: 7.999756
                },
                insets: {
                    top: 2.141357,
                    right: 1.47461,
                    bottom: 2.141846,
                    left: 1.474609
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8,
                        y: 7.999756
                    },
                    foreground: {
                        x: 8,
                        y: 7.999756
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M11.334 10.1414C11.6236 10.1417 11.8584 10.377 11.8584 10.6667C11.8583 10.9564 11.6235 11.1918 11.334 11.1921H4.66699C4.37712 11.1921 4.14173 10.9566 4.1416 10.6667C4.1416 10.3768 4.37704 10.1414 4.66699 10.1414H11.334Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4.80835C7.47379 4.80851 7.85822 5.19295 7.8584 5.66675V7.66675C7.85813 8.14047 7.47374 8.52498 7 8.52515H5C4.52627 8.52497 4.14187 8.14046 4.1416 7.66675V5.66675C4.14178 5.19296 4.52621 4.80853 5 4.80835H7ZM5.19238 7.47534H6.80859V5.85913H5.19238V7.47534Z" fill="currentColor"/> <path d="M11.334 7.47437C11.6235 7.47474 11.8583 7.71015 11.8584 7.99976C11.8584 8.28947 11.6236 8.52477 11.334 8.52515H9.66699C9.37704 8.52515 9.1416 8.28971 9.1416 7.99976C9.14173 7.70992 9.37712 7.47437 9.66699 7.47437H11.334Z" fill="currentColor"/> <path d="M11.334 4.80835C11.6236 4.80872 11.8584 5.04402 11.8584 5.33374C11.8583 5.62335 11.6235 5.85876 11.334 5.85913H9.66699C9.37712 5.85913 9.14173 5.62358 9.1416 5.33374C9.1416 5.04379 9.37704 4.80835 9.66699 4.80835H11.334Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1338 2.14136C13.4543 2.1416 14.5251 3.21244 14.5254 4.53296V11.4666C14.5254 12.7873 13.4545 13.8579 12.1338 13.8582H3.86621C2.54554 13.8579 1.47461 12.7873 1.47461 11.4666V4.53296C1.47486 3.21244 2.54569 2.1416 3.86621 2.14136H12.1338ZM3.86621 3.19214C3.12559 3.19238 2.52564 3.79234 2.52539 4.53296V11.4666C2.52539 12.2074 3.12544 12.8081 3.86621 12.8083H12.1338C12.8746 12.8081 13.4746 12.2074 13.4746 11.4666V4.53296C13.4744 3.79234 12.8744 3.19238 12.1338 3.19214H3.86621Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    xtW8: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "phone-wave-voice-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.286133,
                    y: .849609,
                    width: 9.614258,
                    height: 9.863037
                },
                visualBounds: {
                    x: 1.286133,
                    y: .849609,
                    width: 9.614258,
                    height: 9.863037
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.286133,
                    y: .849609,
                    width: 9.614258,
                    height: 9.863037
                },
                center: {
                    x: 6.093262,
                    y: 5.781128
                },
                insets: {
                    top: .849609,
                    right: 1.099609,
                    bottom: 1.287354,
                    left: 1.286133
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6.093262,
                        y: 5.781128
                    },
                    foreground: {
                        x: 6.093262,
                        y: 5.781128
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17764 1.28752C3.51913 1.28752 3.86063 1.41826 4.1211 1.67969L5.4336 2.99805C5.6023 3.16762 5.68668 3.38953 5.68668 3.61143C5.68668 3.83328 5.60234 4.05511 5.4336 4.22461L5.13771 4.52246C5.01281 4.64795 4.91793 4.79376 4.91793 4.97736C4.91793 5.03253 4.92604 5.09294 4.94435 5.16016C5.02035 5.4388 5.26137 5.80623 5.73731 6.28418C6.0209 6.56893 6.59402 7.10643 7.03629 7.10643C7.08726 7.10643 7.13365 7.09935 7.17677 7.08691C7.26792 7.06056 7.37187 7.00163 7.48731 6.88574L7.78321 6.58887C7.95254 6.41888 8.17454 6.33387 8.39653 6.33387C8.61851 6.33387 8.84048 6.41886 9.00978 6.58887L10.3223 7.90625C10.5824 8.16752 10.7125 8.51066 10.7125 8.85182C10.7125 9.2611 10.5282 9.58978 10.2442 9.875C9.66014 10.4612 8.98489 10.7126 8.27644 10.7126C7.89025 10.7126 7.49419 10.6379 7.09767 10.502C5.99834 10.125 4.86452 9.27415 3.80958 8.21484C2.72243 7.12308 1.28613 5.43395 1.28613 3.77197C1.28613 2.91702 1.69138 2.22503 2.23438 1.67969C2.49478 1.41823 2.8362 1.28752 3.17764 1.28752ZM3.17836 2.08751C3.04214 2.08751 2.9059 2.13974 2.80177 2.24414C2.35547 2.69236 2.08692 3.19317 2.08692 3.77227C2.08692 5.17285 3.48335 6.75299 4.37696 7.65039C5.30488 8.5821 6.8735 9.9134 8.27414 9.9134C8.7979 9.9134 9.26665 9.72319 9.67774 9.31055C9.80498 9.18278 9.91234 9.03964 9.91234 8.85174C9.91234 8.71306 9.85923 8.57556 9.75489 8.4707L8.44337 7.15332C8.4304 7.1403 8.41345 7.13379 8.39649 7.13379C8.37954 7.13379 8.36259 7.1403 8.34962 7.15332L8.05372 7.4502C7.77517 7.72986 7.43767 7.9065 7.03684 7.9065C6.90562 7.9065 6.77409 7.88739 6.64356 7.85156C6.15898 7.71848 5.67085 7.35163 5.16993 6.84863C4.69533 6.37202 4.11784 5.6935 4.11784 4.97429C4.11784 4.36681 4.46583 4.06284 4.8672 3.66016C4.88037 3.64676 4.88694 3.6291 4.88694 3.61143C4.88694 3.59371 4.88034 3.57598 4.8672 3.5625L3.5547 2.24414C3.45066 2.1397 3.31452 2.08751 3.17836 2.08751Z" fill="currentColor"/> <path d="M8.75001 0.849609C8.97092 0.849609 9.1504 1.02909 9.1504 1.25V4.5C9.1504 4.72091 8.97092 4.90039 8.75001 4.90039C8.5291 4.90039 8.34962 4.72091 8.34962 4.5V1.25C8.34962 1.02909 8.5291 0.849609 8.75001 0.849609Z" fill="currentColor"/> <path d="M7.00001 1.84961C7.22092 1.84961 7.4004 2.02909 7.4004 2.25V3.5C7.4004 3.72091 7.22092 3.90039 7.00001 3.90039C6.7791 3.90039 6.59962 3.72091 6.59962 3.5V2.25C6.59962 2.02909 6.7791 1.84961 7.00001 1.84961Z" fill="currentColor"/> <path d="M10.5 1.84961C10.7209 1.84961 10.9004 2.02909 10.9004 2.25V3.5C10.9004 3.72091 10.7209 3.90039 10.5 3.90039C10.2791 3.90039 10.0996 3.72091 10.0996 3.5V2.25C10.0996 2.02909 10.2791 1.84961 10.5 1.84961Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    c6PF: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "phone-wave-voice-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.723633,
                    y: 1.141357,
                    width: 12.801758,
                    height: 13.133789
                },
                visualBounds: {
                    x: 1.723633,
                    y: 1.141357,
                    width: 12.801758,
                    height: 13.133789
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.723633,
                    y: 1.141357,
                    width: 12.801758,
                    height: 13.133789
                },
                center: {
                    x: 8.124512,
                    y: 7.708252
                },
                insets: {
                    top: 1.141357,
                    right: 1.474609,
                    bottom: 1.724854,
                    left: 1.723633
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.124512,
                        y: 7.708252
                    },
                    foreground: {
                        x: 8.124512,
                        y: 7.708252
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.23731 1.72521C4.69047 1.72521 5.14363 1.89876 5.48927 2.24585L7.23927 4.00269C7.46272 4.22711 7.57443 4.52089 7.57443 4.81467C7.57443 5.10846 7.46271 5.40226 7.23927 5.62671L6.84474 6.02319C6.67604 6.19261 6.54904 6.38751 6.54904 6.63342C6.54904 6.70838 6.56017 6.7904 6.58497 6.88159C6.68677 7.2553 7.00856 7.74683 7.64357 8.38452C8.02376 8.7663 8.79068 9.48291 9.3841 9.48291C9.45223 9.48291 9.51439 9.47352 9.57228 9.45679C9.69532 9.42114 9.83381 9.3423 9.98829 9.18726L10.3838 8.79077C10.6079 8.56575 10.9019 8.45323 11.1959 8.45323C11.4898 8.45323 11.7837 8.56573 12.0078 8.79077L13.7568 10.5476C14.1022 10.8944 14.2752 11.3498 14.2752 11.8027C14.2752 12.3471 14.0301 12.7825 13.6543 13.1599C12.8772 13.9403 11.9786 14.2752 11.0355 14.2752C8.81325 14.2752 6.55649 12.4237 5.08595 10.947C3.61767 9.47252 1.72363 7.23279 1.72363 5.02907C1.72363 3.89207 2.26242 2.97194 2.98536 2.24585C3.33101 1.89876 3.78416 1.72521 4.23731 1.72521ZM4.23786 2.7746C4.05392 2.7746 3.86996 2.8451 3.72951 2.98608C3.13334 3.58476 2.77442 4.25402 2.77442 5.02909C2.77442 6.8862 4.60684 8.97737 5.83009 10.2058C7.06886 11.4497 9.16129 13.2262 11.0312 13.2262C11.7321 13.2262 12.3598 12.9714 12.9102 12.4187C13.0817 12.2463 13.2249 12.0551 13.2249 11.8018C13.2249 11.615 13.1543 11.4302 13.0137 11.2888L11.2637 9.53198C11.2448 9.51298 11.2203 9.50348 11.1958 9.50348C11.1713 9.50348 11.1469 9.51298 11.1279 9.53198L10.7324 9.92749C10.3633 10.2981 9.91509 10.533 9.38387 10.533C9.20931 10.533 9.03429 10.5075 8.86036 10.4597C8.21642 10.2828 7.56804 9.79519 6.9004 9.12476C6.26588 8.48756 5.49902 7.58842 5.49902 6.63639C5.49902 6.47478 5.52069 6.31359 5.56642 6.15405C5.66073 5.82525 5.84817 5.5365 6.1006 5.28296L6.49513 4.88647C6.51465 4.86687 6.52441 4.84079 6.52441 4.81471C6.52441 4.78862 6.51464 4.76253 6.49513 4.74292L4.74611 2.98608C4.6057 2.84508 4.42178 2.7746 4.23786 2.7746Z" fill="currentColor"/> <path d="M11.666 1.14136C11.956 1.14136 12.1914 1.3768 12.1914 1.66675V5.99976C12.1914 6.28971 11.956 6.52515 11.666 6.52515C11.3761 6.52515 11.1406 6.28971 11.1406 5.99976V1.66675C11.1406 1.3768 11.3761 1.14136 11.666 1.14136Z" fill="currentColor"/> <path d="M9.334 2.47437C9.62384 2.47437 9.85921 2.70996 9.85939 2.99976V4.66675C9.85921 4.95655 9.62384 5.19116 9.334 5.19116C9.04416 5.19116 8.80878 4.95655 8.80861 4.66675V2.99976C8.80879 2.70996 9.04416 2.47437 9.334 2.47437Z" fill="currentColor"/> <path d="M14 2.47437C14.2899 2.47437 14.5252 2.70996 14.5254 2.99976V4.66675C14.5252 4.95655 14.2899 5.19116 14 5.19116C13.7102 5.19116 13.4748 4.95655 13.4746 4.66675V2.99976C13.4748 2.70996 13.7102 2.47437 14 2.47437Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    VOqi: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "phone-wave-voice-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 2.147461,
                    y: 1.418213,
                    width: 16.017578,
                    height: 16.433838
                },
                visualBounds: {
                    x: 2.147461,
                    y: 1.418213,
                    width: 16.017578,
                    height: 16.433838
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.147461,
                    y: 1.418213,
                    width: 16.017578,
                    height: 16.433838
                },
                center: {
                    x: 10.15625,
                    y: 9.635132
                },
                insets: {
                    top: 1.418213,
                    right: 1.834961,
                    bottom: 2.147949,
                    left: 2.147461
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.15625,
                        y: 9.635132
                    },
                    foreground: {
                        x: 10.15625,
                        y: 9.635132
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29773 2.14688C5.86654 2.14688 6.43537 2.36462 6.86916 2.80005L9.05666 4.99634C9.33769 5.27856 9.47818 5.64812 9.47818 6.01771C9.47818 6.38735 9.33766 6.757 9.05666 7.03931L8.56349 7.5354C8.3535 7.74627 8.19586 7.9869 8.19586 8.29305C8.19586 8.38565 8.20955 8.48705 8.24025 8.59985C8.36687 9.06475 8.76893 9.67695 9.56252 10.4739C10.0416 10.955 10.9949 11.8443 11.7298 11.8443C11.8147 11.8443 11.892 11.8326 11.9639 11.8118C12.1161 11.7677 12.288 11.6701 12.4805 11.4768L12.9746 10.9817C13.2565 10.6988 13.626 10.5573 13.9956 10.5573C14.3652 10.5573 14.7348 10.6988 15.0166 10.9817L17.2041 13.178C17.6374 13.6131 17.8535 14.1841 17.8535 14.7522C17.8535 15.4355 17.5462 15.9822 17.0752 16.4553C16.1019 17.4328 14.9764 17.8521 13.7956 17.8521C11.0119 17.8521 8.1831 15.5269 6.35256 13.6887C4.51376 11.8421 2.14746 9.04457 2.14746 6.28601C2.14746 4.86158 2.82169 3.70877 3.72658 2.80005C4.16026 2.36458 4.72899 2.14688 5.29773 2.14688ZM5.29774 3.47686C5.07022 3.47686 4.84273 3.56406 4.66896 3.73853C3.92485 4.4858 3.47754 5.32006 3.47754 6.28586C3.47754 8.60371 5.76416 11.2129 7.29494 12.7502C8.8142 14.2758 11.4442 16.5235 13.7904 16.5235C14.6645 16.5235 15.4468 16.2058 16.1328 15.5168C16.3456 15.3031 16.5238 15.0664 16.5238 14.7521C16.5238 14.5206 16.436 14.2915 16.2617 14.1165L14.0742 11.9202C14.0523 11.8983 14.024 11.8873 13.9956 11.8873C13.9673 11.8873 13.9389 11.8983 13.917 11.9202L13.4229 12.4153C12.9594 12.8807 12.397 13.175 11.73 13.175C11.5112 13.175 11.292 13.1431 11.0742 13.0833C10.2671 12.8615 9.45492 12.2506 8.62013 11.4124C7.82409 10.613 6.86597 9.48696 6.86597 8.29303C6.86597 8.09092 6.893 7.88928 6.95021 7.6897C7.15131 6.98856 7.6116 6.6065 8.11427 6.10083C8.13688 6.078 8.14821 6.04784 8.14821 6.0177C8.14821 5.98762 8.13692 5.95756 8.11427 5.93481L5.92677 3.73853C5.75291 3.56411 5.52531 3.47686 5.29774 3.47686Z" fill="currentColor"/> <path d="M14.584 1.41821C14.9513 1.41821 15.249 1.71598 15.249 2.08325V7.50024C15.2489 7.86736 14.9512 8.16528 14.584 8.16528C14.2168 8.16528 13.9191 7.86736 13.919 7.50024V2.08325C13.919 1.71598 14.2167 1.41821 14.584 1.41821Z" fill="currentColor"/> <path d="M11.666 3.08521C12.0333 3.08521 12.3311 3.38297 12.3311 3.75024V5.83325C12.3309 6.20037 12.0332 6.49829 11.666 6.49829C11.2989 6.49829 11.0012 6.20037 11.001 5.83325V3.75024C11.001 3.38297 11.2988 3.08521 11.666 3.08521Z" fill="currentColor"/> <path d="M17.5 3.08521C17.8673 3.08521 18.1651 3.38297 18.1651 3.75024V5.83325C18.1649 6.20037 17.8672 6.49829 17.5 6.49829C17.1329 6.49829 16.8352 6.20037 16.835 5.83325V3.75024C16.835 3.38297 17.1327 3.08521 17.5 3.08521Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    hnKH: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "pin-location-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                },
                visualBounds: {
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                },
                center: {
                    x: 6,
                    y: 5.999512
                },
                insets: {
                    top: 1.099609,
                    right: 1.09961,
                    bottom: 1.100586,
                    left: 1.099609
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6,
                        y: 5.999512
                    },
                    foreground: {
                        x: 6,
                        y: 5.999512
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8.07617 6.78906C8.8447 6.93761 9.52002 7.17067 10.0146 7.47461C10.4925 7.76835 10.9003 8.19408 10.9004 8.75C10.9003 9.1412 10.6942 9.47064 10.417 9.72559C10.14 9.9802 9.76135 10.1915 9.32715 10.3604C8.45593 10.6992 7.27935 10.8994 6 10.8994C4.72066 10.8994 3.54407 10.6992 2.67285 10.3604C2.23865 10.1915 1.85999 9.9802 1.58301 9.72559C1.30577 9.47064 1.0997 9.1412 1.09961 8.75C1.09974 8.19409 1.5075 7.76835 1.98535 7.47461C2.47998 7.17067 3.1553 6.93761 3.92383 6.78906C4.14053 6.74721 4.35042 6.8889 4.39258 7.10547C4.43447 7.32226 4.29288 7.53215 4.07617 7.57422C3.36362 7.71192 2.78913 7.91979 2.4043 8.15625C2.00292 8.40298 1.90053 8.61892 1.90039 8.75C1.90048 8.84183 1.94629 8.97324 2.12402 9.13672C2.30239 9.30072 2.583 9.4665 2.96289 9.61426C3.72035 9.90882 4.79406 10.0996 6 10.0996C7.20595 10.0996 8.27965 9.90882 9.03711 9.61426C9.417 9.4665 9.69761 9.30072 9.87598 9.13672C10.0537 8.97324 10.0995 8.84183 10.0996 8.75C10.0995 8.61892 9.99708 8.40298 9.5957 8.15625C9.21087 7.91979 8.63638 7.71192 7.92383 7.57422C7.70712 7.53215 7.56553 7.32226 7.60742 7.10547C7.64958 6.88889 7.85947 6.74721 8.07617 6.78906Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.09961C7.04934 1.09961 7.90039 1.95066 7.90039 3C7.90039 3.91187 7.25738 4.67241 6.40039 4.85645V8.5C6.40039 8.72091 6.22091 8.90039 6 8.90039C5.77909 8.90039 5.59961 8.72091 5.59961 8.5V4.85645C4.74262 4.67241 4.09961 3.91187 4.09961 3C4.09961 1.95066 4.95066 1.09961 6 1.09961ZM6 1.90039C5.39249 1.90039 4.90039 2.39249 4.90039 3C4.90039 3.60751 5.39249 4.09961 6 4.09961C6.60751 4.09961 7.09961 3.60751 7.09961 3C7.09961 2.39249 6.60751 1.90039 6 1.90039Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    D8FC: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "presentation-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.320313,
                    y: 1.052734,
                    width: 9.300781,
                    height: 9.764648
                },
                visualBounds: {
                    x: 1.320313,
                    y: 1.052734,
                    width: 9.300781,
                    height: 9.764648
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.320313,
                    y: 1.052734,
                    width: 9.300781,
                    height: 9.764648
                },
                center: {
                    x: 5.970704,
                    y: 5.935058
                },
                insets: {
                    top: 1.052734,
                    right: 1.378906,
                    bottom: 1.182618,
                    left: 1.320313
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 5.970704,
                        y: 5.935058
                    },
                    foreground: {
                        x: 5.970704,
                        y: 5.935058
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.9707 1.05273C6.19162 1.05273 6.37109 1.23221 6.37109 1.45312V1.92285H8.7207C9.77001 1.92285 10.621 2.77395 10.6211 3.82324V6.82324C10.6211 7.87258 9.77004 8.72363 8.7207 8.72363H8.37305L9.71289 10.1436C9.864 10.3042 9.85654 10.5575 9.69629 10.709C9.53568 10.8603 9.28242 10.8528 9.13086 10.6924L7.27344 8.72363H6.40039V10.418C6.40024 10.6388 6.22082 10.8174 6 10.8174C5.77918 10.8174 5.59976 10.6388 5.59961 10.418V8.72363H4.72656L2.86914 10.6924C2.7176 10.8529 2.46438 10.8603 2.30371 10.709C2.14315 10.5574 2.13575 10.3042 2.28711 10.1436L3.62695 8.72363H3.2207C2.17136 8.72363 1.32031 7.87258 1.32031 6.82324V3.82324C1.32037 2.77395 2.1714 1.92285 3.2207 1.92285H5.57031V1.45312C5.57031 1.23221 5.74979 1.05273 5.9707 1.05273ZM3.2207 2.72363C2.61323 2.72363 2.12115 3.21578 2.12109 3.82324V6.82324C2.12109 7.43076 2.61319 7.92285 3.2207 7.92285H8.7207C9.32822 7.92285 9.82031 7.43076 9.82031 6.82324V3.82324C9.82026 3.21578 9.32818 2.72363 8.7207 2.72363H3.2207Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    MVL1: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "presentation-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.788086,
                    y: 1.412109,
                    width: 12.383789,
                    height: 13.00293
                },
                visualBounds: {
                    x: 1.788086,
                    y: 1.412109,
                    width: 12.383789,
                    height: 13.00293
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.788086,
                    y: 1.412109,
                    width: 12.383789,
                    height: 13.00293
                },
                center: {
                    x: 7.979981,
                    y: 7.913574
                },
                insets: {
                    top: 1.412109,
                    right: 1.828125,
                    bottom: 1.584961,
                    left: 1.788086
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 7.979981,
                        y: 7.913574
                    },
                    foreground: {
                        x: 7.979981,
                        y: 7.913574
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.98047 1.41211C8.27042 1.41211 8.50586 1.64755 8.50586 1.9375V2.57227H11.6465C13.041 2.57227 14.1718 3.7032 14.1719 5.09766V9.09766C14.1719 10.4922 13.041 11.623 11.6465 11.623H11.165L12.9639 13.5303C13.1627 13.7411 13.1531 14.0735 12.9424 14.2725C12.7316 14.4712 12.3992 14.4616 12.2002 14.251L9.7207 11.623H8.54492V13.8906C8.54472 14.1804 8.30935 14.415 8.01953 14.415C7.72971 14.415 7.49435 14.1804 7.49414 13.8906V11.623H6.31836L3.83887 14.251C3.6399 14.4616 3.3075 14.4712 3.09668 14.2725C2.88594 14.0735 2.8764 13.7411 3.0752 13.5303L4.87402 11.623H4.31348C2.91896 11.623 1.78809 10.4922 1.78809 9.09766V5.09766C1.78816 3.7032 2.91901 2.57227 4.31348 2.57227H7.45508V1.9375C7.45508 1.64755 7.69052 1.41211 7.98047 1.41211ZM4.31348 3.62305C3.4989 3.62305 2.83894 4.2831 2.83887 5.09766V9.09766C2.83887 9.91228 3.49886 10.5723 4.31348 10.5723H11.6465C12.4611 10.5723 13.1221 9.91228 13.1221 9.09766V5.09766C13.122 4.2831 12.4611 3.62305 11.6465 3.62305H4.31348Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    mdjO: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "presentation-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 2.241699,
                    y: 1.756836,
                    width: 15.49707,
                    height: 16.270508
                },
                visualBounds: {
                    x: 2.241699,
                    y: 1.756836,
                    width: 15.49707,
                    height: 16.270508
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.241699,
                    y: 1.756836,
                    width: 15.49707,
                    height: 16.270508
                },
                center: {
                    x: 9.990234,
                    y: 9.89209
                },
                insets: {
                    top: 1.756836,
                    right: 2.261231,
                    bottom: 1.972656,
                    left: 2.241699
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 9.990234,
                        y: 9.89209
                    },
                    foreground: {
                        x: 9.990234,
                        y: 9.89209
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99072 1.75684C10.3578 1.7571 10.6558 2.05477 10.6558 2.42188V3.20703H14.5737C16.3215 3.20721 17.7387 4.62428 17.7388 6.37207V11.3721C17.7388 13.1199 16.3216 14.5369 14.5737 14.5371H13.9888L16.2251 16.9062C16.4772 17.1734 16.4649 17.5946 16.1978 17.8467C15.9307 18.0983 15.5103 18.0861 15.2583 17.8193L12.1616 14.5371H10.7046V17.3633C10.7043 17.7303 10.4067 18.0273 10.0396 18.0273C9.67244 18.0273 9.37477 17.7303 9.37451 17.3633V14.5371H7.9165L4.81982 17.8193C4.56786 18.0861 4.14744 18.0983 3.88037 17.8467C3.61325 17.5946 3.60097 17.1734 3.85303 16.9062L6.08936 14.5371H5.40674C3.65876 14.5371 2.2417 13.1201 2.2417 11.3721V6.37207C2.2418 4.62417 3.65882 3.20703 5.40674 3.20703H9.32568V2.42188C9.32568 2.05461 9.62345 1.75684 9.99072 1.75684ZM5.40674 4.53711C4.39335 4.53711 3.57187 5.35871 3.57178 6.37207V11.3721C3.57178 12.3855 4.3933 13.207 5.40674 13.207H14.5737C15.587 13.2069 16.4087 12.3854 16.4087 11.3721V6.37207C16.4086 5.35882 15.587 4.53729 14.5737 4.53711H5.40674Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    tszw: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "star-fill-regular-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: .311462,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                visualBounds: {
                    x: .311462,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .311462,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                center: {
                    x: 5.999572,
                    y: 5.94159
                },
                insets: {
                    top: .492554,
                    right: .312317,
                    bottom: .609375,
                    left: .311462
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 5.999572,
                        y: 5.94159
                    },
                    foreground: {
                        x: 5.999572,
                        y: 5.94159
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M5.36559 0.80407C5.68213 0.388703 6.31758 0.388727 6.63414 0.80407L6.69664 0.899774L8.14781 3.47399L11.0453 4.05895C11.6562 4.18222 11.8977 4.92632 11.4759 5.38513L9.47496 7.55993L9.81481 10.4974C9.88625 11.1165 9.25352 11.5761 8.68688 11.3168L5.99938 10.0853L3.31188 11.3168C2.74534 11.5757 2.11256 11.1163 2.18395 10.4974L2.52379 7.56091L0.522814 5.38513C0.101618 4.92646 0.343211 4.18259 0.953478 4.05895L3.84996 3.47399L5.30309 0.899774L5.36559 0.80407Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    NExk: (function(e, t, r) {
        let o = (0, r("iJY0").a)({
            name: "text-page-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.849609,
                    y: 1.349609,
                    width: 8.300781,
                    height: 9.300781
                },
                visualBounds: {
                    x: 1.849609,
                    y: 1.349609,
                    width: 8.300781,
                    height: 9.300781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.849609,
                    y: 1.349609,
                    width: 8.300781,
                    height: 9.300781
                },
                center: {
                    x: 6,
                    y: 6
                },
                insets: {
                    top: 1.349609,
                    right: 1.84961,
                    bottom: 1.34961,
                    left: 1.849609
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6,
                        y: 6
                    },
                    foreground: {
                        x: 6,
                        y: 6
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M6.5 6.84961C6.72091 6.84961 6.90039 7.02909 6.90039 7.25C6.90039 7.47091 6.72091 7.65039 6.5 7.65039H4.5C4.27909 7.65039 4.09961 7.47091 4.09961 7.25C4.09961 7.02909 4.27909 6.84961 4.5 6.84961H6.5Z" fill="currentColor"/> <path d="M7.5 4.59961C7.72091 4.59961 7.90039 4.77909 7.90039 5C7.90039 5.22091 7.72091 5.40039 7.5 5.40039H4.5C4.27909 5.40039 4.09961 5.22091 4.09961 5C4.09961 4.77909 4.27909 4.59961 4.5 4.59961H7.5Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9502 1.34961C9.16507 1.34972 10.1503 2.33493 10.1504 3.5498V8.4502C10.1503 9.66507 9.16507 10.6503 7.9502 10.6504H4.0498C2.83493 10.6503 1.84971 9.66507 1.84961 8.4502V3.5498C1.84972 2.33493 2.83493 1.34971 4.0498 1.34961H7.9502ZM4.0498 2.15039C3.27676 2.1505 2.6505 2.77676 2.65039 3.5498V8.4502C2.6505 9.22324 3.27676 9.8495 4.0498 9.84961H7.9502C8.72324 9.8495 9.3495 9.22324 9.34961 8.4502V3.5498C9.3495 2.77676 8.72324 2.1505 7.9502 2.15039H4.0498Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    FER9: (function(e, t) {
        let r = String.raw,
            o = r`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
        t.a = () => RegExp(r`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${o}(?:\u200D${o})*`, "gu")
    }),
    EbvC: (function(e, t, r) {
        let o = (e, t) => t.some(t => t instanceof RegExp ? t.test(e) : t === e),
            i = new Set(["https:", "http:", "file:"]);
        r.d(t, {}, {
            a: function(e, t) {
                if ("string" != typeof(t = {
                        defaultProtocol: "http",
                        normalizeProtocol: !0,
                        forceHttp: !1,
                        forceHttps: !1,
                        stripAuthentication: !0,
                        stripHash: !1,
                        stripTextFragment: !0,
                        stripWWW: !0,
                        removeQueryParameters: [/^utm_\w+/i],
                        removeTrailingSlash: !0,
                        removeSingleSlash: !0,
                        removeDirectoryIndex: !1,
                        removeExplicitPort: !1,
                        sortQueryParameters: !0,
                        ...t
                    }).defaultProtocol || t.defaultProtocol.endsWith(":") || (t.defaultProtocol = `${t.defaultProtocol}:`), e = e.trim(), /^data:/i.test(e)) return ((e, {
                    stripHash: t
                }) => {
                    let r = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(e);
                    if (!r) throw Error(`Invalid URL: ${e}`);
                    let {
                        type: o,
                        data: i,
                        hash: n
                    } = r.groups, a = o.split(";");
                    n = t ? "" : n;
                    let l = !1;
                    "base64" === a[a.length - 1] && (a.pop(), l = !0);
                    let h = a.shift()?.toLowerCase() ?? "",
                        c = [...a.map(e => {
                            let [t, r = ""] = e.split("=").map(e => e.trim());
                            return "charset" === t && "us-ascii" === (r = r.toLowerCase()) ? "" : `${t}${r?`=${r}`:""}`
                        }).filter(Boolean)];
                    return l && c.push("base64"), (c.length > 0 || h && "text/plain" !== h) && c.unshift(h), `data:${c.join(";")},${l?i.trim():i}${n?`#${n}`:""}`
                })(e, t);
                if ((e => {
                        try {
                            let {
                                protocol: t
                            } = new URL(e);
                            return t.endsWith(":") && !t.includes(".") && !i.has(t)
                        } catch {
                            return !1
                        }
                    })(e)) return e;
                let r = e.startsWith("//");
                !r && /^\.*\//.test(e) || (e = e.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, t.defaultProtocol));
                let n = new URL(e);
                if (t.forceHttp && t.forceHttps) throw Error("The `forceHttp` and `forceHttps` options cannot be used together");
                if (t.forceHttp && "https:" === n.protocol && (n.protocol = "http:"), t.forceHttps && "http:" === n.protocol && (n.protocol = "https:"), t.stripAuthentication && (n.username = "", n.password = ""), t.stripHash ? n.hash = "" : t.stripTextFragment && (n.hash = n.hash.replace(/#?:~:text.*?$/i, "")), n.pathname) {
                    let e = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g,
                        t = 0,
                        r = "";
                    for (;;) {
                        let o = e.exec(n.pathname);
                        if (!o) break;
                        let i = o[0],
                            a = o.index;
                        r += n.pathname.slice(t, a).replace(/\/{2,}/g, "/"), r += i, t = a + i.length
                    }
                    r += n.pathname.slice(t, n.pathname.length).replace(/\/{2,}/g, "/"), n.pathname = r
                }
                if (n.pathname) try {
                    n.pathname = decodeURI(n.pathname).replace(/\\/g, "%5C")
                } catch {}
                if (!0 === t.removeDirectoryIndex && (t.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(t.removeDirectoryIndex) && t.removeDirectoryIndex.length > 0) {
                    let e = n.pathname.split("/");
                    o(e[e.length - 1], t.removeDirectoryIndex) && (n.pathname = (e = e.slice(0, -1)).slice(1).join("/") + "/")
                }
                if (n.hostname && (n.hostname = n.hostname.replace(/\.$/, ""), t.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(n.hostname) && (n.hostname = n.hostname.replace(/^www\./, ""))), Array.isArray(t.removeQueryParameters))
                    for (let e of [...n.searchParams.keys()]) o(e, t.removeQueryParameters) && n.searchParams.delete(e);
                if (Array.isArray(t.keepQueryParameters) || !0 !== t.removeQueryParameters || (n.search = ""), Array.isArray(t.keepQueryParameters) && t.keepQueryParameters.length > 0)
                    for (let e of [...n.searchParams.keys()]) o(e, t.keepQueryParameters) || n.searchParams.delete(e);
                if (t.sortQueryParameters) {
                    n.searchParams.sort();
                    try {
                        n.search = decodeURIComponent(n.search)
                    } catch {}
                }
                t.removeTrailingSlash && (n.pathname = n.pathname.replace(/\/$/, "")), t.removeExplicitPort && n.port && (n.port = "");
                let a = e;
                return e = n.toString(), t.removeSingleSlash || "/" !== n.pathname || a.endsWith("/") || "" !== n.hash || (e = e.replace(/\/$/, "")), (t.removeTrailingSlash || "/" === n.pathname) && "" === n.hash && t.removeSingleSlash && (e = e.replace(/\/$/, "")), r && !t.normalizeProtocol && (e = e.replace(/^http:\/\//, "//")), t.stripProtocol && (e = e.replace(/^(?:https?:)?\/\//, "")), e
            }
        })
    })
};