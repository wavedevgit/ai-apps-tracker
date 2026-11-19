export const __rspack_esm_ids = [212773];
export const __webpack_modules__ = {
    MBDE: (function(e, t) {
        t.a = {
            Blockquote: "Blockquote-npEA9B",
            blockquote: "Blockquote-npEA9B"
        }
    }),
    Vc7o: (function(e, t) {
        t.a = {
            Code: "Code-LNMR8q",
            code: "Code-LNMR8q"
        }
    }),
    Qbhq: (function(e, t) {
        t.a = {
            Grid: "Grid-onilkE",
            grid: "Grid-onilkE",
            Item: "Item-XqbRVj",
            item: "Item-XqbRVj"
        }
    }),
    f9K9: (function(e, t) {
        t.a = {
            NoWrap: "NoWrap-r3ljrm",
            noWrap: "NoWrap-r3ljrm",
            Tail: "Tail-Glj64G",
            tail: "Tail-Glj64G"
        }
    }),
    urXC: (function(e, t) {
        t.a = {
            List: "List-bYalj1",
            list: "List-bYalj1",
            Item: "Item-EWTmaR",
            item: "Item-EWTmaR",
            Marker: "Marker-ivTdsP",
            marker: "Marker-ivTdsP",
            RichMarker: "RichMarker-qr5RSD",
            richMarker: "RichMarker-qr5RSD",
            Content: "Content-DbD0Oj",
            content: "Content-DbD0Oj",
            Label: "Label-qdSQ_4",
            label: "Label-qdSQ_4",
            Description: "Description-xXj96o",
            description: "Description-xXj96o"
        }
    }),
    WTLH: (function(e, t) {
        t.a = {
            TableFrame: "TableFrame-goa0AO",
            tableFrame: "TableFrame-goa0AO",
            TableViewport: "TableViewport-RIVuau",
            tableViewport: "TableViewport-RIVuau",
            Table: "Table-s3u64B",
            table: "Table-s3u64B",
            RowLabelCell: "RowLabelCell-EJUANX",
            rowLabelCell: "RowLabelCell-EJUANX",
            RowLabelContent: "RowLabelContent-xlKRrQ",
            rowLabelContent: "RowLabelContent-xlKRrQ",
            RowLabelText: "RowLabelText-ukPFk_",
            rowLabelText: "RowLabelText-ukPFk_",
            EmptyCell: "EmptyCell-ct0fnN",
            emptyCell: "EmptyCell-ct0fnN"
        }
    }),
    SIlm: (function(e, t) {
        t.a = {
            DilRenderer: "DilRenderer-temL23",
            dilRenderer: "DilRenderer-temL23",
            DilResponseRoot: "DilResponseRoot-fdCmoC",
            dilResponseRoot: "DilResponseRoot-fdCmoC"
        }
    }),
    WP03: (function(e, t, n) {
        var r = n("cCxc"),
            a = n("xunV"),
            o = n("YktH");

        function l(e) {
            return this instanceof l ? (this.nodes = r(e), this) : new l(e)
        }
        l.prototype.toString = function() {
            return Array.isArray(this.nodes) ? o(this.nodes) : ""
        }, l.prototype.walk = function(e, t) {
            return a(this.nodes, e, t), this
        }, l.unit = n("OnRA"), l.walk = a, l.stringify = o, e.exports = l
    }),
    cCxc: (function(e) {
        var t = /^[a-f0-9?-]+$/i;
        e.exports = function(e) {
            for (var n, r, a, o, l, i, d, u, s, c = [], f = e, p = 0, h = f.charCodeAt(p), v = f.length, g = [{
                    nodes: c
                }], m = 0, b = "", x = "", y = ""; p < v;)
                if (h <= 32) {
                    n = p;
                    do n += 1, h = f.charCodeAt(n); while (h <= 32) o = f.slice(p, n), a = c[c.length - 1], 41 === h && m ? y = o : a && "div" === a.type ? (a.after = o, a.sourceEndIndex += o.length) : 44 === h || 58 === h || 47 === h && 42 !== f.charCodeAt(n + 1) && (!s || s && "function" === s.type && "calc" !== s.value) ? x = o : c.push({
                        type: "space",
                        sourceIndex: p,
                        sourceEndIndex: n,
                        value: o
                    }), p = n
                } else if (39 === h || 34 === h) {
                n = p, o = {
                    type: "string",
                    sourceIndex: p,
                    quote: r = 39 === h ? "'" : '"'
                };
                do
                    if (l = !1, ~(n = f.indexOf(r, n + 1)))
                        for (i = n; 92 === f.charCodeAt(i - 1);) i -= 1, l = !l;
                    else f += r, n = f.length - 1, o.unclosed = !0; while (l) o.value = f.slice(p + 1, n), o.sourceEndIndex = o.unclosed ? n : n + 1, c.push(o), p = n + 1, h = f.charCodeAt(p)
            } else if (47 === h && 42 === f.charCodeAt(p + 1)) n = f.indexOf("*/", p), o = {
                type: "comment",
                sourceIndex: p,
                sourceEndIndex: n + 2
            }, -1 === n && (o.unclosed = !0, n = f.length, o.sourceEndIndex = n), o.value = f.slice(p + 2, n), c.push(o), p = n + 2, h = f.charCodeAt(p);
            else if ((47 === h || 42 === h) && s && "function" === s.type && "calc" === s.value) o = f[p], c.push({
                type: "word",
                sourceIndex: p - x.length,
                sourceEndIndex: p + o.length,
                value: o
            }), p += 1, h = f.charCodeAt(p);
            else if (47 === h || 44 === h || 58 === h) o = f[p], c.push({
                type: "div",
                sourceIndex: p - x.length,
                sourceEndIndex: p + o.length,
                value: o,
                before: x,
                after: ""
            }), x = "", p += 1, h = f.charCodeAt(p);
            else if (40 === h) {
                n = p;
                do n += 1, h = f.charCodeAt(n); while (h <= 32) if (u = p, o = {
                        type: "function",
                        sourceIndex: p - b.length,
                        value: b,
                        before: f.slice(u + 1, n)
                    }, p = n, "url" === b && 39 !== h && 34 !== h) {
                    n -= 1;
                    do
                        if (l = !1, ~(n = f.indexOf(")", n + 1)))
                            for (i = n; 92 === f.charCodeAt(i - 1);) i -= 1, l = !l;
                        else f += ")", n = f.length - 1, o.unclosed = !0; while (l) d = n;
                    do d -= 1, h = f.charCodeAt(d); while (h <= 32) u < d ? (p !== d + 1 ? o.nodes = [{
                        type: "word",
                        sourceIndex: p,
                        sourceEndIndex: d + 1,
                        value: f.slice(p, d + 1)
                    }] : o.nodes = [], o.unclosed && d + 1 !== n ? (o.after = "", o.nodes.push({
                        type: "space",
                        sourceIndex: d + 1,
                        sourceEndIndex: n,
                        value: f.slice(d + 1, n)
                    })) : (o.after = f.slice(d + 1, n), o.sourceEndIndex = n)) : (o.after = "", o.nodes = []), p = n + 1, o.sourceEndIndex = o.unclosed ? n : p, h = f.charCodeAt(p), c.push(o)
                } else m += 1, o.after = "", o.sourceEndIndex = p + 1, c.push(o), g.push(o), c = o.nodes = [], s = o;
                b = ""
            } else if (41 === h && m) p += 1, h = f.charCodeAt(p), s.after = y, s.sourceEndIndex += y.length, y = "", m -= 1, g[g.length - 1].sourceEndIndex = p, g.pop(), c = (s = g[m]).nodes;
            else {
                n = p;
                do 92 === h && (n += 1), n += 1, h = f.charCodeAt(n); while (n < v && !(h <= 32 || 39 === h || 34 === h || 44 === h || 58 === h || 47 === h || 40 === h || 42 === h && s && "function" === s.type && "calc" === s.value || 47 === h && "function" === s.type && "calc" === s.value || 41 === h && m)) o = f.slice(p, n), 40 === h ? b = o : (117 === o.charCodeAt(0) || 85 === o.charCodeAt(0)) && 43 === o.charCodeAt(1) && t.test(o.slice(2)) ? c.push({
                    type: "unicode-range",
                    sourceIndex: p,
                    sourceEndIndex: n,
                    value: o
                }) : c.push({
                    type: "word",
                    sourceIndex: p,
                    sourceEndIndex: n,
                    value: o
                }), p = n
            }
            for (p = g.length - 1; p; p -= 1) g[p].unclosed = !0, g[p].sourceEndIndex = f.length;
            return g[0].nodes
        }
    }),
    YktH: (function(e) {
        function t(e, t) {
            var r, a, o = e.type,
                l = e.value;
            if (t && void 0 !== (a = t(e))) return a;
            if ("word" === o || "space" === o);
            else if ("string" === o) return (r = e.quote || "") + l + (e.unclosed ? "" : r);
            else if ("comment" === o) return "/*" + l + (e.unclosed ? "" : "*/");
            else if ("div" === o) return (e.before || "") + l + (e.after || "");
            else if (Array.isArray(e.nodes)) return (r = n(e.nodes, t), "function" !== o) ? r : l + "(" + (e.before || "") + r + (e.after || "") + (e.unclosed ? "" : ")");
            return l
        }

        function n(e, n) {
            var r, a;
            if (Array.isArray(e)) {
                for (r = "", a = e.length - 1; ~a; a -= 1) r = t(e[a], n) + r;
                return r
            }
            return t(e, n)
        }
        e.exports = n
    }),
    OnRA: (function(e) {
        e.exports = function(e) {
            var t, n, r, a = 0,
                o = e.length;
            if (0 === o || ! function(e) {
                    var t, n = e.charCodeAt(0);
                    if (43 === n || 45 === n) {
                        if ((t = e.charCodeAt(1)) >= 48 && t <= 57) return !0;
                        var r = e.charCodeAt(2);
                        return 46 === t && !!(r >= 48) && !!(r <= 57)
                    }
                    return 46 === n ? !!((t = e.charCodeAt(1)) >= 48) && !!(t <= 57) : !!(n >= 48) && !!(n <= 57)
                }(e)) return !1;
            for ((43 === (t = e.charCodeAt(a)) || 45 === t) && a++; a < o && !((t = e.charCodeAt(a)) < 48) && !(t > 57);) a += 1;
            if (t = e.charCodeAt(a), n = e.charCodeAt(a + 1), 46 === t && n >= 48 && n <= 57)
                for (a += 2; a < o && !((t = e.charCodeAt(a)) < 48) && !(t > 57);) a += 1;
            if (t = e.charCodeAt(a), n = e.charCodeAt(a + 1), r = e.charCodeAt(a + 2), (101 === t || 69 === t) && (n >= 48 && n <= 57 || (43 === n || 45 === n) && r >= 48 && r <= 57))
                for (a += 43 === n || 45 === n ? 3 : 2; a < o && !((t = e.charCodeAt(a)) < 48) && !(t > 57);) a += 1;
            return {
                number: e.slice(0, a),
                unit: e.slice(a)
            }
        }
    }),
    xunV: (function(e) {
        e.exports = function e(t, n, r) {
            var a, o, l, i;
            for (a = 0, o = t.length; a < o; a += 1) l = t[a], r || (i = n(l, a, t)), !1 !== i && "function" === l.type && Array.isArray(l.nodes) && e(l.nodes, n, r), r && n(l, a, t)
        }
    }),
    BnEr: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var r = n("ABep"),
            a = n("zd8w"),
            o = n("H9jZ"),
            l = n("eZy0"),
            i = n("qKzV");

        function d(e) {
            let {
                layout: t
            } = e, {
                fontFamily: n,
                inline: a,
                onVisible: i,
                onVisibleWhen: d = !0,
                onVisibleKey: u,
                ...s
            } = t, c = (0, o.a)({
                onVisible: i,
                onVisibleWhen: d,
                onVisibleKey: u
            }, a ? "span" : "div");
            return (0, r.jsx)(l.a, {
                as: a ? "span" : "div",
                component: "box",
                inline: a,
                layout: s,
                style: "app" === n ? {
                    fontFamily: "var(--font-content, var(--font-sans, inherit))"
                } : void 0,
                boxRef: c
            })
        }

        function u(e) {
            let t = (0, a.useContext)(i.a),
                n = e.onVisible ? (0, r.jsx)(d, {
                    layout: e
                }) : (0, r.jsx)(l.a, {
                    as: e.inline ? "span" : "div",
                    component: "box",
                    inline: e.inline,
                    layout: e,
                    style: "app" === e.fontFamily ? {
                        fontFamily: "var(--font-content, var(--font-sans, inherit))"
                    } : void 0
                });
            return (0, r.jsx)(i.a.Provider, {
                value: e.inline || t,
                children: n
            })
        }
    }),
    kpww: (function(e, t, n) {
        n.d(t, {
            a: () => d,
            b: () => i
        });
        var r = n("ABep"),
            a = n("zd8w"),
            o = n("gWf7"),
            l = n("qKzV");

        function i(e) {
            let {
                color: t,
                maxLines: n,
                size: r = "lg",
                textAlign: a,
                truncate: o,
                weight: l = "normal"
            } = e;
            return {
                as: "span",
                className: "Caption-s5Z8Hg",
                color: t,
                "data-d-component": "caption",
                maxLines: n,
                size: r,
                textAlign: a,
                truncate: o,
                weight: l
            }
        }

        function d(e) {
            let t = i(e);
            return (0, r.jsx)(l.a.Provider, {
                value: !0,
                children: (0, a.createElement)(o.a, t, e.children)
            })
        }
    }),
    LpLF: (function(e, t, n) {
        n.d(t, {
            a: () => d,
            b: () => i
        });
        var r = n("RdWu"),
            a = n("zd8w"),
            o = n("eZy0");
        let l = {
            default: {
                background: "surface-elevated",
                border: {
                    color: "default",
                    size: 1
                },
                padding: 4,
                radius: "xl"
            },
            soft: {
                background: "surface-tertiary",
                border: !1,
                padding: 3,
                radius: "xl"
            }
        };

        function i(e) {
            let {
                background: t,
                disableAutoSpacing: n,
                gap: r,
                height: a,
                justify: o,
                padding: i,
                radius: d,
                shadow: u,
                shadowStyle: s,
                size: c,
                theme: f,
                variant: p,
                width: h
            } = e, v = "soft" === p ? "soft" : "default", g = l[v];
            return {
                as: "div",
                background: t ?? g.background,
                border: !u && g.border,
                className: "Card-ppx8r1",
                component: "card",
                componentSize: c,
                disableAutoSpacing: n,
                direction: "col",
                gap: r,
                height: a,
                justify: o,
                padding: i ?? g.padding,
                radius: d ?? g.radius,
                shadow: u,
                style: u && "string" == typeof s ? {
                    boxShadow: s
                } : void 0,
                theme: f,
                variant: v,
                width: h
            }
        }

        function d(e) {
            var t, n;
            let l, d, [u, s] = (0, a.useState)(null);
            return t = u, n = e.onVisible, l = (0, r.a)(n ?? (() => {})), d = (0, a.useRef)(!1), (0, a.useEffect)(() => {
                if (!t || !n || d.current || "u" < typeof IntersectionObserver) return;
                let e = !0,
                    r = !1,
                    a = () => {
                        e && r && "visible" === document.visibilityState && !d.current && (d.current = !0, o.disconnect(), l())
                    },
                    o = new IntersectionObserver(e => {
                        r = e.some(e => e.isIntersecting && e.intersectionRatio >= .5), a()
                    }, {
                        threshold: .5
                    });
                return o.observe(t), document.addEventListener("visibilitychange", a), () => {
                    e = !1, o.disconnect(), document.removeEventListener("visibilitychange", a)
                }
            }, [l, n, t]), (0, a.createElement)(o.a, {
                ...i(e),
                boxRef: e.onVisible ? s : void 0
            }, e.children)
        }
    }),
    f8Zl: (function(e, t, n) {
        n.d(t, {
            a: () => f
        });
        var r = n("ABep"),
            a = n("rSUh"),
            o = n("Me4D"),
            l = n("zd8w"),
            i = n("IZ3M"),
            d = n("InHZ");
        let u = [",", ";", "\n"],
            s = [...u, " ", "	"],
            c = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

        function f(e) {
            let {
                defaultValue: t = [],
                disabled: n,
                inputType: f = "text",
                onChange: p,
                placeholder: h,
                size: v = "xl",
                value: g,
                variant: m
            } = e, b = (0, o.B)(), x = `search-ui-input-${(0,l.useId)()}`, y = (0, l.useContext)(i.a), [w, C] = (0, l.useState)(t), {
                dispatch: k,
                hasPendingEvent: E
            } = (0, o.A)(p, x), I = "email" === f ? c : void 0;
            return (0, r.jsxs)("div", {
                "data-d-component": "chip-input",
                onClickCapture: e => {
                    n || (0, o.w)(e) || b(d.a["chip-input"])
                },
                children: [y && (0, r.jsx)("label", {
                    htmlFor: x,
                    "aria-labelledby": y
                }), (0, r.jsx)(a.a, {
                    autoComplete: "off",
                    className: "plain" === m ? "Plain-pUowYe" : void 0,
                    delimiters: "email" === f ? s : u,
                    disabled: n,
                    id: x,
                    onChange: e => {
                        if (n) return;
                        let t = e.map(e => e.value);
                        C(t), k(t)
                    },
                    placeholder: h,
                    size: v,
                    validator: I,
                    value: (null == g || E ? w : g).map(e => ({
                        value: e,
                        valid: I?.(e) ?? !0
                    }))
                })]
            })
        }
    }),
    Ymsa: (function(e, t, n) {
        n.d(t, {
            a: () => o
        });
        var r = n("ABep"),
            a = n("eZy0");

        function o(e) {
            return (0, r.jsx)(a.a, {
                as: "div",
                component: "col",
                direction: "col",
                layout: e
            })
        }
    }),
    Ufhb: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var r = n("ABep"),
            a = n("eWPL"),
            o = n("Me4D"),
            l = n("zd8w"),
            i = n("IZ3M"),
            d = n("InHZ");

        function u(e) {
            let {
                align: t,
                block: n,
                clearable: u,
                defaultValue: c,
                dir: f,
                disabled: p,
                max: h,
                min: v,
                onChange: g,
                pill: m = !0,
                placeholder: b,
                side: x,
                size: y = "xl",
                value: w,
                variant: C
            } = e, k = (0, o.B)(), E = (0, l.useId)(), I = (0, l.useContext)(i.a), A = (0, l.useRef)(null), [S, N] = (0, l.useState)(() => s(c ?? w)), R = null != w, M = null == w ? S : s(w), j = new Intl.DateTimeFormat().resolvedOptions().locale;
            return (0, r.jsx)("span", {
                className: "DatePicker-sgDNFv",
                "data-d-block": n ? "" : void 0,
                "data-d-component": "date-picker",
                dir: f,
                children: (0, r.jsx)(a.a, {
                    align: t,
                    "aria-labelledby": I,
                    block: n ?? !0,
                    clearable: u,
                    disabled: p,
                    dropdownIconType: "chevronDown",
                    id: E,
                    locale: j,
                    max: s(h) ?? void 0,
                    min: s(v) ?? void 0,
                    onChange: e => {
                        let t = A.current;
                        null == e && t?.contains(t.ownerDocument.activeElement) && t.focus(), R || N(e);
                        let n = function(e) {
                            if (!e) return "";
                            let t = e.getFullYear(),
                                n = String(e.getMonth() + 1).padStart(2, "0"),
                                r = String(e.getDate()).padStart(2, "0");
                            return `${t}-${n}-${r}`
                        }(e);
                        k({
                            ...d.a["date-picker"],
                            value: n
                        }, (0, o.q)(g, n))
                    },
                    onTriggerClickCapture: () => k({
                        ...d.a["date-picker"],
                        value: w ?? c
                    }),
                    pill: m,
                    placeholder: b,
                    side: x,
                    size: y,
                    triggerDateFormat: "MM/dd/yy",
                    triggerRef: A,
                    value: M,
                    valueType: "date",
                    variant: C
                })
            })
        }

        function s(e) {
            if (!e) return null;
            let [t, n, r] = e.split("-").map(Number);
            if (!t || !n || !r) return null;
            let a = new Date(t, n - 1, r);
            return Number.isNaN(a.getTime()) ? null : a
        }
    }),
    TiFH: (function(e, t, n) {
        n.d(t, {
            a: () => d,
            b: () => i
        });
        var r = n("TE73"),
            a = n("Me4D"),
            o = n("zd8w"),
            l = n("FIwD");

        function i(e, t) {
            let {
                color: n = "default",
                flush: a,
                size: o = 1,
                spacing: i
            } = e;
            return {
                className: "Divider-aIXBUs",
                "data-d-component": "divider",
                "data-d-flush": a ? "" : void 0,
                "data-d-custom-spacing": 0 === i || i ? "" : void 0,
                style: (0, r.g)({
                    "divider-color": (0, l.e)((0, l.j)(t, n)),
                    "divider-size": o,
                    "divider-spacing": (0, l.h)(i)
                })
            }
        }

        function d(e) {
            let t = (0, o.useContext)(a.k);
            return (0, o.createElement)("div", i(e, t))
        }
    }),
    a0Bm: (function(e, t, n) {
        var r = n("ABep"),
            a = n("gcGr");
        n.d(t, {}, {
            a: function(e) {
                let {
                    children: t,
                    weight: n
                } = e;
                return (0, r.jsx)(a.a, {
                    inline: !0,
                    strong: !0,
                    weight: n,
                    children: t
                })
            },
            b: function(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(a.a, {
                    inline: !0,
                    italic: !0,
                    children: t
                })
            },
            c: function(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(a.a, {
                    inline: !0,
                    lineThrough: !0,
                    children: t
                })
            },
            d: function(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(a.a, {
                    inline: !0,
                    underline: !0,
                    children: t
                })
            }
        })
    }),
    xUWq: (function(e, t, n) {
        n.d(t, {
            a: () => u,
            b: () => c,
            c: () => s,
            d: () => d
        });
        var r = n("ABep"),
            a = n("TE73"),
            o = n("eZy0"),
            l = n("FIwD"),
            i = n("OH6Z");

        function d(e) {
            let {
                columns: t,
                gap: n = 4,
                layout: r = "pack",
                rows: a
            } = e;
            return {
                className: "Flow-fNa79S",
                "data-d-component": "flow",
                "data-d-layout": r,
                style: {
                    gap: (0, l.h)(n),
                    gridTemplateColumns: (0, i.b)(t),
                    gridTemplateRows: (0, i.b)(a),
                    height: "fixed" === r ? "100%" : void 0,
                    minHeight: "fixed" === r ? 0 : void 0
                }
            }
        }

        function u(e) {
            let t = d(e);
            return (0, r.jsx)("div", {
                className: t.className,
                "data-d-component": t["data-d-component"],
                "data-d-layout": t["data-d-layout"],
                style: t.style,
                children: e.children
            })
        }

        function s(e) {
            let {
                aspectMode: t = "soft",
                aspectRatio: n = "1 / 1",
                children: r,
                rowSpan: o,
                span: d,
                ...u
            } = e, s = (0, l.a)(n);
            return {
                as: "div",
                aspectMode: t,
                aspectRatio: "fixed" === t ? n : void 0,
                className: "Item-lvDNBY",
                component: "flow-item",
                layout: u,
                style: {
                    gridColumn: (0, i.a)(d ?? function(e) {
                        if (e) return Math.max(1, Math.min(3, Math.round(e.width / e.height)))
                    }(s)),
                    gridRow: (0, i.a)(o),
                    ... function(e, t) {
                        if ("soft" === t && e) return {
                            ...(0, a.g)({
                                "flow-item-aspect-height": String(e.height),
                                "flow-item-aspect-width": String(e.width)
                            }),
                            aspectRatio: (0, l.b)(`${e.width} / ${e.height}`)
                        }
                    }(s, t)
                }
            }
        }

        function c(e) {
            let t = s(e);
            return (0, r.jsx)(o.a, {
                as: t.as,
                aspectMode: t.aspectMode,
                aspectRatio: t.aspectRatio,
                className: t.className,
                component: t.component,
                layout: t.layout,
                style: t.style,
                children: e.children
            })
        }
    }),
    GQ93: (function(e, t, n) {
        n.d(t, {
            a: () => p,
            b: () => v,
            c: () => f
        });
        var r = n("ABep"),
            a = n("Me4D"),
            o = n("TE73"),
            l = n("zd8w"),
            i = n("Qbhq"),
            d = n("eZy0"),
            u = n("FIwD"),
            s = n("OH6Z");
        let c = {
            sm: {
                base: 2,
                sm: 3,
                md: 4
            },
            md: {
                base: 2,
                sm: 3,
                md: 3
            },
            lg: {
                base: 1,
                sm: 1,
                md: 2
            }
        };

        function f(e, t) {
            let {
                columnGap: n,
                columns: r = "md",
                gap: a,
                minChildWidth: o,
                rowGap: l,
                rows: d
            } = e, f = t.includes("md") ? "md" : t.includes("sm") ? "sm" : "base", p = "sm" === r || "md" === r || "lg" === r ? c[r][f] : r;
            return {
                className: i.a.Grid,
                "data-d-component": "grid",
                style: {
                    ...null == a ? {
                        rowGap: (0, u.h)(4),
                        columnGap: (0, u.h)(3)
                    } : {
                        gap: (0, u.h)(a)
                    },
                    ...null != l ? {
                        rowGap: (0, u.h)(l)
                    } : {},
                    ...null != n ? {
                        columnGap: (0, u.h)(n)
                    } : {},
                    gridTemplateColumns: null != o ? `repeat(auto-fit, minmax(min(${o}px, 100%), 1fr))` : (0, s.b)(p),
                    gridTemplateRows: (0, s.b)(d)
                }
            }
        }

        function p(e) {
            let t = (0, l.useContext)(a.a),
                n = (0, l.createElement)("div", f(e, t), e.children);
            return e.animateHeight ? (0, r.jsx)(h, {
                columns: "number" == typeof e.columns ? e.columns : null,
                children: n
            }) : n
        }

        function h(e) {
            let {
                children: t,
                columns: n
            } = e, a = (0, l.useRef)(null), o = (0, l.useRef)(null), i = (0, l.useRef)(!1);
            return (0, l.useLayoutEffect)(() => {
                let e = a.current,
                    t = e?.firstElementChild;
                if (!e || !t || i.current) return;
                if (3 === n) {
                    o.current = t.getBoundingClientRect();
                    return
                }
                let r = o.current;
                if (o.current = null, 1 !== n && 2 !== n || (i.current = !0, !r || !e.animate)) return;
                let l = matchMedia("(prefers-reduced-motion: reduce), (forced-colors: active)");
                if (l.matches) return;
                let d = t.getBoundingClientRect();
                if (.5 >= Math.abs(d.height - r.height) || Math.abs(d.width - r.width) > .5) return;
                let u = {
                        duration: 320,
                        easing: "cubic-bezier(0.2, 0, 0, 1)"
                    },
                    s = e.animate([{
                        height: `${r.height}px`,
                        overflow: "clip"
                    }, {
                        height: `${d.height}px`,
                        overflow: "clip"
                    }], u),
                    c = [s];
                if (d.height > r.height)
                    for (let e of t.children) {
                        let t = e.getBoundingClientRect().bottom - d.top - r.height;
                        if (t <= 0) continue;
                        let {
                            borderRadius: n,
                            clipPath: a
                        } = getComputedStyle(e);
                        n && "0px" !== n && "none" === a && c.push(e.animate([{
                            clipPath: `inset(0 0 ${t}px 0 round ${n})`
                        }, {
                            clipPath: `inset(0 0 0 0 round ${n})`
                        }], u))
                    }
                let f = () => {
                    for (let e of c) e.cancel();
                    c.length = 0, l.removeEventListener("change", f)
                };
                return s.onfinish = f, l.addEventListener("change", f), f
            }, [n]), (0, r.jsx)("div", {
                ref: a,
                children: t
            })
        }

        function v(e) {
            let {
                children: t,
                rowSpan: n,
                span: a,
                ...u
            } = e, c = (0, l.isValidElement)(t) && t.type !== l.Fragment && Object.values(u).every(e => void 0 === e);
            return (0, r.jsx)(d.a, {
                as: "div",
                className: i.a.Item,
                component: "grid-item",
                layout: u,
                gap: c ? 0 : u.gap,
                variant: c ? "transparent" : void 0,
                style: (0, o.g)({
                    "grid-item-column": (0, s.a)(a) ?? "auto",
                    "grid-item-row": (0, s.a)(n) ?? "auto"
                }),
                children: t
            })
        }
    }),
    en2n: (function(e, t, n) {
        n.d(t, {
            a: () => s
        });
        var r = n("ABep"),
            a = n("Dv4q"),
            o = n("wKck"),
            l = n("Me4D"),
            i = n("zd8w"),
            d = n("FIwD");
        let u = {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
            "2xl": 24,
            "3xl": 32
        };

        function s(e) {
            let {
                color: t,
                inline: n = !1,
                name: s,
                size: c,
                weight: f
            } = e, p = (0, i.useContext)(l.k), h = (0, a.a)(s), v = c ?? (n ? void 0 : "md"), g = v ? u[v] : void 0, m = void 0 === g ? "0.5em" : `${g/2}px`;
            return h ? (0, r.jsx)(o.a, {
                className: n ? "InlineIcon-U9ZpYM" : void 0,
                "data-d-component": "icon",
                "data-d-inline": n ? "" : void 0,
                name: h,
                weight: f,
                style: {
                    color: (0, d.i)((0, d.j)(p, t)),
                    fontSize: n ? void 0 : g,
                    width: n ? g : void 0,
                    height: n ? g : void 0,
                    display: n ? "inline-block" : void 0,
                    verticalAlign: n ? `calc(0.5cap - ${m})` : void 0
                }
            }) : null
        }
    }),
    Z8P7: (function(e, t, n) {
        n.d(t, {
            a: () => c
        });
        var r = n("ABep"),
            a = n("Awn0"),
            o = n("zd8w"),
            l = n("Me4D");

        function i(e, t) {
            if (!e) return "";
            let n = function(e) {
                    let t = [],
                        n = (e, n) => {
                            let r = t.at(-1);
                            if (r?.kind === "literal") {
                                r.value += e, r.protectsTokens ||= n;
                                return
                            }
                            t.push({
                                kind: "literal",
                                protectsTokens: n,
                                value: e
                            })
                        },
                        r = e => {
                            let n = t.at(-1);
                            n?.kind === "tokens" ? n.value.push(e) : t.push({
                                kind: "tokens",
                                value: [e]
                            })
                        };
                    for (let t = 0; t < e.length; t += 1) {
                        let a = e[t] ?? "";
                        if ("\\" === a && t + 1 < e.length) {
                            let r = e[t += 1] ?? "";
                            n(r, d(r))
                        } else d(a) ? r(a) : n(a, !1)
                    }
                    return t
                }(t),
                r = !0,
                a = "",
                o = "",
                l = 0,
                i = 0;
            for (let t = 0; t < n.length; t += 1) {
                let d = n[t];
                if (!d) continue;
                if ("literal" === d.kind) {
                    for (let t of d.value) o += t, e[i] === t && (i += 1, l = o.length);
                    continue
                }
                let u = n[t + 1],
                    s = u?.kind === "literal" && u.protectsTokens ? e.indexOf(u.value, i) : -1,
                    c = -1 === s ? e.length : s;
                for (let t of d.value) {
                    let n;
                    for (; i < c;) {
                        let r = e[i];
                        if (i += 1, r && function(e, t) {
                                let n = t.charCodeAt(0),
                                    r = n >= 48 && n <= 57,
                                    a = n >= 65 && n <= 90 || n >= 97 && n <= 122;
                                return "9" === e ? r : "a" === e ? a : r || a
                            }(t, r)) {
                            n = r;
                            break
                        }
                    }
                    if (!n) {
                        r = !1;
                        continue
                    }
                    a += o + n, o = "", l = 0
                } - 1 !== s && (i = s)
            }
            return a + (r ? o : o.slice(0, l))
        }

        function d(e) {
            return "9" === e || "a" === e || "*" === e
        }
        var u = n("IZ3M"),
            s = n("InHZ");

        function c(e) {
            let {
                autoSelect: t,
                defaultValue: n = "",
                disabled: d,
                fontSize: c,
                inputType: f = "text",
                invalid: p,
                mask: h,
                name: v,
                onChange: g,
                pill: m = !0,
                placeholder: b,
                required: x,
                size: y = "xl",
                value: w,
                variant: C
            } = e, k = (0, l.B)(), E = (0, o.useId)(), I = (0, o.useContext)(u.a), A = "plain" === C, [S, N] = (0, o.useState)(() => h ? i(n, h) : n), {
                dispatch: R,
                hasPendingEvent: M
            } = (0, l.A)(g, E), j = h && null != w ? i(w, h) : w, D = h && "number" === f ? "text" : f;
            return (0, r.jsx)(a.a, {
                "aria-invalid": p || void 0,
                "aria-labelledby": I,
                autoSelect: t,
                className: A ? "Plain-Rj9UEP" : void 0,
                "data-d-component": "input",
                disabled: d,
                id: E,
                invalid: p,
                name: v,
                onClickCapture: e => {
                    d || (0, l.w)(e) || k(s.a.input)
                },
                onChange: e => {
                    let t = e.currentTarget,
                        n = t.value,
                        r = t.selectionStart,
                        a = t.selectionEnd,
                        o = h ? i(n, h) : n;
                    h && (t.value = o, null != r && null != a && t.setSelectionRange(i(n.slice(0, r), h).length, i(n.slice(0, a), h).length, t.selectionDirection ?? void 0)), N(o), R(o)
                },
                pill: m,
                placeholder: b,
                required: x,
                size: y,
                style: "fill" === c ? {
                    fontSize: "calc(var(--input-size) * 0.75)",
                    lineHeight: 1
                } : void 0,
                type: D,
                value: null == w || M ? S : j,
                variant: A ? "outline" : C
            })
        }
    }),
    sCki: (function(e, t, n) {
        n.d(t, {
            a: () => u,
            b: () => d
        });
        var r = n("ABep"),
            a = n("zd8w"),
            o = n("gWf7"),
            l = n("IZ3M"),
            i = n("qKzV");

        function d(e, t) {
            let {
                color: n,
                htmlFor: r,
                size: a = "sm",
                textAlign: o,
                truncate: l,
                weight: i = "medium",
                width: d
            } = e;
            return {
                as: "label",
                className: "Label-yFasgm",
                color: n,
                "data-d-component": "label",
                htmlFor: r,
                id: null == r ? t : void 0,
                size: a,
                textAlign: o,
                truncate: l,
                weight: i,
                width: d
            }
        }

        function u(e) {
            let t = d(e, (0, a.useContext)(l.a));
            return (0, r.jsx)(i.a.Provider, {
                value: !0,
                children: (0, a.createElement)(o.a, t, e.children)
            })
        }
    }),
    BJV4: (function(e, t, n) {
        n.d(t, {
            a: () => o
        });
        var r = n("ABep"),
            a = n("eZy0");

        function o(e) {
            return (0, r.jsx)(a.a, {
                as: "div",
                component: "row",
                direction: "row",
                layout: e
            })
        }
    }),
    fZ05: (function(e, t, n) {
        n.d(t, {
            a: () => c
        });
        var r = n("ABep"),
            a = n("H7JM"),
            o = n("Me4D"),
            l = n("Dv4q"),
            i = n("wKck"),
            d = n("zd8w"),
            u = n("IZ3M"),
            s = n("InHZ");

        function c(e) {
            let {
                align: t,
                ariaLabel: n,
                block: c,
                clearable: f,
                clearLabel: p,
                defaultValue: h = "",
                disabled: v,
                icon: g,
                name: m,
                onChange: b,
                options: x = [],
                pill: y = !0,
                placeholder: w,
                required: C,
                searchable: k,
                searchEmptyMessage: E,
                side: I,
                size: A = "xl",
                value: S,
                variant: N
            } = e, R = (0, d.useMemo)(() => JSON.stringify(x), [x]), [M, j] = (0, d.useState)({
                choices: R,
                options: x
            });
            M.choices !== R && j({
                choices: R,
                options: x
            });
            let D = (0, o.B)(),
                T = (0, d.useId)(),
                z = (0, d.useContext)(u.a),
                [B, L] = (0, d.useState)(h),
                P = S ?? B,
                F = c ?? "ghost" !== N,
                O = g ? (0, l.a)(g) : void 0,
                $ = (0, d.useMemo)(() => O ? function(e) {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)(i.a, {
                        className: t,
                        name: O,
                        "aria-hidden": !0
                    })
                } : void 0, [O]);
            return (0, r.jsx)("span", {
                className: "Select-xXi9Ef",
                "data-d-block": F ? "" : void 0,
                "data-d-component": "select",
                children: (0, r.jsx)(a.a, {
                    TriggerStartIcon: $,
                    align: t,
                    "aria-label": n,
                    "aria-labelledby": null == n ? z : void 0,
                    block: F,
                    clearable: f,
                    clearLabel: p,
                    disabled: v,
                    dropdownIconType: "chevronDown",
                    id: T,
                    name: m,
                    onChange: e => {
                        null == S && L(e.value), D({
                            ...s.a.select,
                            value: e.value
                        }, (0, o.q)(b, e.value))
                    },
                    onTriggerClickCapture: () => D({
                        ...s.a.select,
                        value: S ?? h
                    }),
                    options: M.options,
                    pill: y,
                    placeholder: w,
                    required: C,
                    searchable: k,
                    searchEmptyMessage: E,
                    side: I,
                    size: A,
                    value: P,
                    variant: N
                })
            })
        }
    }),
    XvPX: (function(e, t, n) {
        n.d(t, {
            a: () => s
        });
        var r = n("ABep"),
            a = n("YAOF"),
            o = n("rWsf"),
            l = n("Me4D"),
            i = n("zd8w"),
            d = n("IZ3M"),
            u = n("InHZ");

        function s(e) {
            let t, {
                    defaultValue: n,
                    disabled: s,
                    marks: p,
                    max: h,
                    min: v,
                    name: g,
                    onChange: m,
                    required: b,
                    sliderStyle: x = "continuous",
                    step: y,
                    value: w
                } = e,
                C = (0, l.B)(),
                k = (0, i.useId)(),
                E = (0, i.useContext)(d.a),
                I = f(v, 0),
                A = (t = f(y, 1)) > 0 ? t : 1,
                S = Math.max(I + A, f(h, 100)),
                [N, R] = (0, i.useState)(() => {
                    var e;
                    return c(n ?? (e = I) + (S - e) / 2, {
                        max: S,
                        min: I
                    })
                }),
                M = null != w,
                {
                    dispatch: j,
                    hasPendingEvent: D
                } = (0, l.A)(m, k),
                T = c(M && !D ? w : N, {
                    max: S,
                    min: I
                }),
                z = (0, i.useMemo)(() => (function(e, t) {
                    let {
                        max: n,
                        min: r
                    } = t;
                    if (!e) return e;
                    let a = new Set,
                        o = [];
                    for (let t of e) {
                        let e = Number(t.value);
                        !Number.isFinite(e) || e < r || e > n || a.has(e) || (a.add(e), o.push({
                            ...t,
                            value: e
                        }))
                    }
                    return o
                })(p, {
                    max: S,
                    min: I
                })?.sort((e, t) => e.value - t.value), [p, S, I]),
                B = (0, i.useRef)(null),
                L = Number.isFinite(I) && Number.isFinite(S) && Number.isFinite(A) && A > 0 && S >= I ? Math.max(0, Math.round((S - I) / A)) : 0,
                P = Math.min(L + 1, 12),
                F = "stepped" === x && L > 0 ? Array.from({
                    length: P
                }, (e, t) => t) : [];
            return (0, r.jsx)("div", {
                className: "Slider-GtWxNy",
                "data-d-component": "slider",
                onClickCapture: e => {
                    s || (0, l.w)(e) || C(u.a.slider)
                },
                children: (0, r.jsxs)("div", {
                    className: "SliderContainer-_C9DdC",
                    children: [(0, r.jsxs)(a.b, {
                        className: "Root-b22fXu",
                        "data-slider-style": x,
                        disabled: s,
                        max: S,
                        min: I,
                        name: g,
                        onValueChange: e => {
                            let t;
                            R(t = c(e[0], {
                                max: S,
                                min: I
                            })), j(t)
                        },
                        step: A,
                        value: [T],
                        children: [(0, r.jsxs)(a.d, {
                            className: "Track-PxEhr6",
                            children: [(0, r.jsx)(a.a, {
                                className: "Range-UwtqDy"
                            }), F.length > 0 && (0, r.jsx)("div", {
                                "aria-hidden": !0,
                                className: "StepMarkers-UAaltx",
                                "data-slider-rendered-marker-count": F.length,
                                children: F.map(e => (0, r.jsx)("span", {
                                    className: "StepMarker-jdvuBV",
                                    "data-slider-step-marker": !0
                                }, e))
                            })]
                        }), (0, r.jsx)(a.c, {
                            "aria-label": E ? void 0 : "Slider",
                            "aria-labelledby": E,
                            "aria-required": b || void 0,
                            className: "Thumb-DXyf1A",
                            ref: B
                        })]
                    }), z && z.length > 0 && (0, r.jsx)(o.b, {
                        marks: z,
                        max: S,
                        min: I,
                        thumbRef: B
                    })]
                })
            })
        }

        function c(e, t) {
            let {
                max: n,
                min: r
            } = t;
            return Math.min(n, Math.max(r, f(e, r + (n - r) / 2)))
        }

        function f(e, t) {
            let n = Number(e);
            return Number.isFinite(n) ? n : t
        }
    }),
    gcGr: (function(e, t, n) {
        n.d(t, {
            a: () => d,
            b: () => i
        });
        var r = n("ABep"),
            a = n("gWf7"),
            o = n("qKzV"),
            l = n("zd8w");

        function i(e) {
            let {
                color: t,
                fontSize: n,
                lineHeight: r,
                highlight: a,
                inline: o,
                italic: l,
                lineThrough: i,
                maxLines: d,
                minLines: u,
                preserveWhitespace: s,
                size: c,
                strong: f = !1,
                tabularNums: p,
                textAlign: h,
                truncate: v,
                underline: g,
                weight: m,
                width: b
            } = e, x = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], y = o ?? (x || !!a);
            return {
                as: a ? "mark" : y ? "span" : "p",
                className: "Text-dOmvsS",
                color: t,
                "data-d-component": "text",
                "data-d-highlight": "string" == typeof a ? a : a ? "" : void 0,
                "data-d-inline": y ? "" : void 0,
                fontStyle: l ? "italic" : void 0,
                style: {
                    fontSize: n,
                    lineHeight: null == r ? void 0 : `${r}px`
                },
                maxLines: d,
                minLines: u,
                preserveWhitespace: s,
                size: c,
                strong: f && null == m,
                tabularNums: p,
                textAlign: h,
                textDecoration: i ? "line-through" : "dotted" === g ? "underline-dotted" : g ? "underline" : void 0,
                truncate: v,
                weight: m,
                width: b
            }
        }

        function d(e) {
            let t = i(e, (0, l.useContext)(o.a));
            return (0, r.jsx)(o.a.Provider, {
                value: !0,
                children: (0, l.createElement)(a.a, t, e.children)
            })
        }
    }),
    gWf7: (function(e, t, n) {
        n.d(t, {
            a: () => s,
            b: () => u
        });
        var r = n("ABep"),
            a = n("on57"),
            o = n("Me4D"),
            l = n("zd8w"),
            i = n("zsAy"),
            d = n("FIwD");

        function u(e, t) {
            let {
                className: n,
                color: r,
                "data-d-component": o,
                "data-d-highlight": l,
                "data-d-inline": i,
                fontStyle: u,
                htmlFor: s,
                id: c,
                maxLines: f,
                minLines: p,
                preserveWhitespace: h,
                size: v,
                style: g,
                strong: m,
                tabularNums: b,
                textAlign: x,
                textDecoration: y,
                truncate: w,
                weight: C,
                width: k
            } = e, E = null != p && Number.isFinite(p) && p > 0 ? p : void 0;
            return {
                className: (0, a.b)("TextBase-kDAqPL", n),
                "data-d-text-flow": "",
                "data-d-component": o,
                "data-d-size": v,
                "data-d-default-strong": m ? "" : void 0,
                "data-d-weight": C,
                "data-d-font-style": u,
                "data-d-has-width": null != k ? "true" : void 0,
                "data-d-highlight": l,
                "data-d-inline": i,
                "data-d-text-align": x,
                "data-d-text-decoration": y,
                "data-d-truncate": w ? "true" : void 0,
                "data-d-clamp-lines": f ? "true" : void 0,
                "data-d-min-lines": E ? "true" : void 0,
                "data-d-tabular-nums": b ? "true" : void 0,
                "data-d-whitespace": h ? "preserve" : void 0,
                htmlFor: s,
                id: c,
                style: {
                    ...g,
                    color: (0, d.i)((0, d.j)(t, r)) ?? g?.color,
                    WebkitLineClamp: f ?? g?.WebkitLineClamp,
                    minHeight: E ? `${E}lh` : g?.minHeight,
                    width: k ?? g?.width
                }
            }
        }

        function s(e) {
            let t = (0, l.useRef)(null),
                n = (0, l.useContext)(o.k),
                a = (0, l.useContext)(o.j),
                d = {
                    bold: null == e.weight ? !0 === e.strong || a.bold : "bold" === e.weight || "semibold" === e.weight,
                    italic: "italic" === e.fontStyle || a.italic,
                    strikethrough: "line-through" === e.textDecoration || a.strikethrough,
                    underline: "underline" === e.textDecoration || a.underline
                },
                s = e.as;
            return (0, l.createElement)(s, {
                ...u(e, n),
                ref: t
            }, (0, l.createElement)(o.m, {
                host: t,
                ...d
            }), (0, r.jsx)(o.j.Provider, {
                value: d,
                children: (0, i.a)(e.children, {
                    reveal: "shimmer-text" !== e["data-d-component"]
                })
            }))
        }
    }),
    kBis: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var r = n("ABep"),
            a = n("eUm4"),
            o = n("zd8w"),
            l = n("Me4D"),
            i = n("IZ3M"),
            d = n("InHZ");

        function u(e) {
            let {
                autoResize: t,
                autoSelect: n,
                defaultValue: u = "",
                disabled: s,
                invalid: c,
                maxRows: f,
                name: p,
                onChange: h,
                placeholder: v,
                required: g,
                rows: m,
                size: b = "xl",
                value: x,
                variant: y
            } = e, w = (0, l.B)(), C = (0, o.useId)(), k = (0, o.useContext)(i.a), E = "plain" === y, [I, A] = (0, o.useState)(u), {
                dispatch: S,
                hasPendingEvent: N
            } = (0, l.A)(h, C);
            return (0, r.jsx)(a.a, {
                "aria-invalid": c || void 0,
                "aria-labelledby": k,
                autoResize: t,
                autoSelect: n,
                className: E ? "Plain-sl96I9" : void 0,
                "data-d-component": "textarea",
                disabled: s,
                id: C,
                invalid: c,
                maxRows: f,
                name: p,
                onClickCapture: e => {
                    s || (0, l.w)(e) || w(d.a.textarea)
                },
                onChange: e => {
                    let t = e.target.value;
                    A(t), S(t)
                },
                placeholder: v,
                required: g,
                rows: m,
                size: b,
                value: null == x || N ? I : x,
                variant: E ? "outline" : y
            })
        }
    }),
    vZCo: (function(e, t, n) {
        n.d(t, {
            a: () => i,
            b: () => l
        });
        var r = n("zd8w"),
            a = n("gWf7");
        let o = {
            sm: "h4",
            md: "h3",
            lg: "h2",
            xl: "h1",
            "2xl": "h1",
            "3xl": "h2",
            "4xl": "h1",
            "5xl": "h1"
        };

        function l(e) {
            var t;
            let {
                color: n,
                italic: r,
                maxLines: a,
                size: l = "md",
                strong: i = !0,
                tabularNums: d,
                textAlign: u,
                truncate: s,
                weight: c,
                width: f
            } = e, p = "xs" === (t = l) ? "sm" : t;
            return {
                as: o[p] ?? "h3",
                className: "Title-ij922C",
                color: n,
                "data-d-component": "title",
                fontStyle: r ? "italic" : void 0,
                maxLines: a,
                size: p,
                tabularNums: d,
                textAlign: u,
                truncate: s,
                weight: c ?? (i ? "semibold" : "normal"),
                width: f
            }
        }

        function i(e) {
            let t = l(e);
            return (0, r.createElement)(a.a, t, e.children)
        }
    }),
    eZy0: (function(e, t, n) {
        n.d(t, {
            a: () => p,
            b: () => f
        });
        var r = n("TE73"),
            a = n("cO2G"),
            o = n("Me4D"),
            l = n("on57"),
            i = n("zd8w"),
            d = n("qF9g"),
            u = n("IZ3M"),
            s = n("vCpP"),
            c = n("FIwD");

        function f(e, t) {
            let {
                as: n,
                aspectMode: o,
                boxRef: i,
                className: d,
                component: u,
                componentSize: s,
                hostProps: f,
                inline: p,
                layout: h,
                shadow: v,
                snapAlign: g,
                style: m,
                variant: b,
                ...x
            } = e, {
                theme: y,
                autoSpacingDisabled: w
            } = t, {
                align: C,
                ariaHidden: k,
                ariaLabel: E,
                ariaLive: I,
                ariaAtomic: A,
                ariaDisabled: S,
                aspectRatio: N,
                background: R,
                border: M,
                children: j,
                clip: D,
                columnGap: T,
                disableAutoSpacing: z = !1,
                direction: B = "col",
                flex: L,
                flush: P,
                gap: F,
                height: O,
                imageFrame: $,
                flexInRow: q,
                justify: Z,
                maxHeight: V,
                maxSize: W,
                maxWidth: H,
                minHeight: _,
                minSize: G,
                minWidth: U,
                padding: X,
                radius: K,
                role: Y,
                rowGap: Q,
                scrollable: J,
                size: ee,
                theme: et,
                width: en,
                wrap: er
            } = {
                ...h,
                ...x
            }, ea = et ?? y, eo = (0, c.c)((0, c.j)(ea, R), ea), el = !(w || z) && null == F && null == Q && null == T, ei = O ?? ee, ed = en ?? ee, eu = (0, c.g)(X), es = eu?.paddingInline != null || eu?.paddingInlineStart != null || eu?.paddingInlineEnd != null, ec = "row" === B && null != ed && "auto" !== ed || "col" === B && null != ei && "auto" !== ei, ef = L ?? (q ? `var(--w-box-flex-in-row, ${ec?"0 0 auto":"0 1 auto"})` : void 0);
            return {
                ref: i,
                className: (0, l.b)("Box-JYjgF4", d),
                "data-d-align": C,
                "data-d-aspect-mode": o,
                "data-d-auto-spacing": el ? "" : void 0,
                "data-d-clip": D ? "true" : void 0,
                "data-d-component": u,
                "data-d-direction": B,
                "data-d-flush": P ? "" : void 0,
                "data-d-has-width": null != ed && "auto" !== ed && null == U && null == G ? "" : void 0,
                "data-d-has-border": null != M ? "" : void 0,
                "data-d-flex-in-row": q && null == L ? "" : void 0,
                "data-d-has-height": null != ei || null != _ || null != G || null != N ? "" : void 0,
                "data-d-image-frame": "box" === u && !0 === $ ? "" : void 0,
                "data-d-inline": p ? "" : void 0,
                "data-d-justify": Z,
                "data-d-scrollable": J ? "true" : void 0,
                "data-d-scrollable-has-inline-padding": J && es ? "" : void 0,
                "data-d-shadow": v ? "true" : void 0,
                "data-d-size": s,
                "data-d-snap-align": g,
                "data-d-variant": b,
                "data-d-wrap": er,
                "data-state": f?.["data-state"],
                "data-theme": et,
                "aria-describedby": f?.["aria-describedby"],
                "aria-disabled": S ?? ("span" === n ? f?.disabled : void 0),
                "aria-live": I,
                "aria-atomic": A,
                "aria-hidden": k,
                "aria-label": E,
                "aria-pressed": f?.["aria-pressed"],
                disabled: "button" === n ? f?.disabled : void 0,
                inert: k || void 0,
                onBlur: f?.onBlur,
                onClick: f?.onClick,
                onClickCapture: f?.onClickCapture,
                onContextMenu: f?.onContextMenu,
                onFocus: f?.onFocus,
                onKeyDown: f?.onKeyDown,
                onKeyDownCapture: f?.onKeyDownCapture,
                onMouseEnter: f?.onMouseEnter,
                onMouseLeave: f?.onMouseLeave,
                onPointerDown: f?.onPointerDown,
                onPointerDownCapture: f?.onPointerDownCapture,
                onPointerEnter: f?.onPointerEnter,
                onPointerLeave: f?.onPointerLeave,
                onPointerMove: f?.onPointerMove,
                onPointerMoveCapture: f?.onPointerMoveCapture,
                onSubmit: f?.onSubmit,
                role: Y,
                style: {
                    ...(0, r.g)({
                        "smoothing-background-color": eo
                    }),
                    ...(0, c.d)(ea, M),
                    ...(0, c.f)(K),
                    ...eu,
                    aspectRatio: (0, c.b)(N),
                    ...(0, a.a)(eo),
                    flex: ef,
                    ...ec && null == ef ? {
                        flexShrink: "0"
                    } : {},
                    gap: (0, c.h)(F),
                    ...null != Q ? {
                        rowGap: (0, c.h)(Q)
                    } : {},
                    ...null != T ? {
                        columnGap: (0, c.h)(T)
                    } : {},
                    height: ei,
                    maxHeight: V ?? W,
                    maxWidth: H ?? W,
                    minHeight: _ ?? G,
                    minWidth: U ?? G,
                    width: ed,
                    ...m
                },
                tabIndex: f?.tabIndex,
                type: "button" === n ? f?.type : void 0
            }
        }

        function p(e) {
            let {
                as: t,
                component: n,
                layout: r,
                ...a
            } = e, {
                children: l,
                theme: c,
                disableAutoSpacing: p = !1
            } = {
                ...r,
                ...a
            }, h = (0, i.useContext)(u.a), v = (0, i.useId)(), g = ("box" === n || "row" === n || "col" === n || "grid-item" === n) && (0, s.a)(l), m = (0, i.useContext)(o.k), b = (0, i.useContext)(d.a), x = c ?? m, y = b || p;
            return (0, i.createElement)(o.k.Provider, {
                value: x
            }, (0, i.createElement)(d.a.Provider, {
                value: y
            }, (0, i.createElement)(t, f(e, {
                theme: m,
                autoSpacingDisabled: b
            }), (0, i.createElement)(u.a.Provider, {
                value: void 0 === g ? h : g ? v : void 0
            }, l))))
        }
    }),
    qF9g: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(!1);
        n.d(t, {}, {
            a: r
        })
    }),
    IZ3M: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(void 0);
        n.d(t, {}, {
            a: r
        })
    }),
    vCpP: (function(e, t, n) {
        n.d(t, {
            a: () => E,
            b: () => k
        });
        var r = n("Me4D"),
            a = n("zd8w"),
            o = n("BnEr"),
            l = n("kpww"),
            i = n("Ymsa"),
            d = n("f8Zl"),
            u = n("Ufhb"),
            s = n("a0Bm"),
            c = n("GQ93"),
            f = n("en2n"),
            p = n("Z8P7"),
            h = n("sCki"),
            v = n("BJV4"),
            g = n("fZ05"),
            m = n("XvPX"),
            b = n("gcGr"),
            x = n("kBis"),
            y = n("vZCo");
        let w = new WeakSet,
            C = new WeakSet;

        function k(e) {
            return w.add(e), e
        }

        function E(e) {
            let t = function e(t) {
                let n = 0,
                    k = 0,
                    E = !1,
                    I = !1;
                for (let S of function e(t) {
                        let n = [];
                        return a.Children.forEach(t, t => {
                            let o = (0, r.v)(t);
                            o?.type === a.Fragment ? n.push(...e(o.props.children)) : o && n.push(o)
                        }), n
                    }(t))
                    if ("string" != typeof S.type && C.has(S.type) || S.type === p.a || S.type === d.a || S.type === x.a || S.type === m.a || S.type === g.a || S.type === u.a) n += 1;
                    else {
                        var A;
                        if (S.type === h.a || "string" != typeof(A = S.type) && w.has(A) || A === o.a || A === i.a || A === c.a || A === c.b || A === v.a || A === l.a || A === b.a || A === y.a || A === s.a || A === s.b || A === s.c || A === s.d) {
                            k += +(S.type === h.a);
                            let t = e(S.props.children);
                            n += t.controls, k += t.labels, E ||= t.unknown, I ||= t.invalidLabel || S.type === h.a && (null != S.props.htmlFor || ! function e(t) {
                                let n = !1;
                                return a.Children.forEach(t, t => {
                                    if ("string" == typeof t || "number" == typeof t) n ||= String(t).trim().length > 0;
                                    else {
                                        let a = (0, r.v)(t);
                                        a && (n ||= e(a.props.children))
                                    }
                                }), n
                            }(S.props.children) || t.controls > 0)
                        } else S.type !== f.a && (E = !0)
                    } return {
                    controls: n,
                    labels: k,
                    unknown: E,
                    invalidLabel: I
                }
            }(e);
            return 0 === t.labels ? void 0 : 1 === t.labels && !t.invalidLabel && !t.unknown && (0 !== t.controls ? 1 === t.controls : void 0)
        }
    }),
    qKzV: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(!1);
        n.d(t, {}, {
            a: r
        })
    }),
    zsAy: (function(e, t, n) {
        n.d(t, {
            a: () => function e(t, n) {
                return a.Children.map(t, t => "string" == typeof t || "number" == typeof t ? (0, r.jsx)(l, {
                    value: t,
                    markInlineText: n?.markInlineText,
                    reveal: n?.reveal
                }) : (0, a.isValidElement)(t) && t.type === a.Fragment ? (0, a.cloneElement)(t, {}, e(t.props.children, n)) : t)
            }
        });
        var r = n("ABep"),
            a = n("zd8w"),
            o = n("Me4D");
        let l = e => {
            let {
                value: t,
                markInlineText: n = !1,
                reveal: l = !0
            } = e, i = (0, a.useContext)(o.i), [d] = (0, a.useState)(i), u = (0, o.x)(t, (0, a.useContext)(o.j)), s = d && l;
            return (s || n) && String(t).trim() ? (0, r.jsx)("span", {
                "data-d-component": n ? "text" : void 0,
                "data-d-inline": n ? "" : void 0,
                "data-d-stream-run": s ? "" : void 0,
                "data-d-text-flow": s ? "run" : void 0,
                children: u
            }) : u
        }
    }),
    FIwD: (function(e, t, n) {
        n.d(t, {
            a: () => h,
            b: () => v,
            c: () => y,
            d: () => w,
            e: () => k,
            f: () => g,
            g: () => function e(t) {
                if (null == t) return;
                if ("number" == typeof t || "string" == typeof t) return function(t) {
                    let n = t.includes("(") ? [t] : t.trim().split(/\s+/);
                    if (n.length > 1) {
                        let [t, r = t, a = t, o = r] = n;
                        return e({
                            top: t,
                            right: r,
                            bottom: a,
                            left: o
                        })
                    }
                    return {
                        ...(0, r.g)({
                            "w-box-gutter-block-end": t,
                            "w-box-gutter-block-start": t,
                            "w-box-gutter-inline-end": t,
                            "w-box-gutter-inline-start": t
                        }),
                        paddingBlock: t,
                        paddingInline: t
                    }
                }(p(t));
                let n = p(t.top ?? t.y),
                    a = p(t.bottom ?? t.y),
                    o = p(t.left ?? t.x),
                    l = p(t.right ?? t.x),
                    i = null != o || null != l;
                return {
                    ...(0, r.g)({
                        "w-box-gutter-block-end": a,
                        "w-box-gutter-block-start": n,
                        "w-box-gutter-inline-end": i ? l ?? "0px" : void 0,
                        "w-box-gutter-inline-start": i ? o ?? "0px" : void 0
                    }),
                    paddingBlockEnd: a,
                    paddingBlockStart: n,
                    paddingInlineEnd: l,
                    paddingInlineStart: o
                }
            },
            h: () => p,
            i: () => E,
            j: () => x
        });
        var r = n("TE73");
        let a = new Set(["none", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "full", "100%"]),
            o = ["green", "red", "pink", "orange", "yellow", "purple", "blue"],
            l = new Set(["gray", ...o]),
            i = new Set(o),
            d = new Set(["0", "25", "50", "75", "100", "150", "200", "250", "300", "350", "400", "450", "500", "550", "600", "650", "700", "750", "800", "850", "900", "925", "950", "975", "1000"]),
            u = new Set(["25", "50", "75", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950", "1000"]),
            s = new Set(["a25", "a50", "a75", "a100", "a200", "a300"]),
            c = new Set(["base", "0", "01", "02", "04", "05", "06", "08", "10", "12", "15", "16", "20", "25", "30", "35", "40", "50", "60", "70"]),
            f = {
                foreground: {
                    blue: "blue-500",
                    gray: "gray-700",
                    green: "green-700",
                    orange: "orange-700",
                    pink: "pink-600",
                    purple: "purple-700",
                    red: "red-700",
                    yellow: "yellow-700"
                },
                background: {
                    blue: "blue-a50",
                    gray: "gray-100",
                    green: "green-a50",
                    orange: "orange-a50",
                    pink: "pink-a50",
                    purple: "purple-a50",
                    red: "red-a50",
                    yellow: "yellow-a50"
                },
                border: {
                    blue: "blue-a100",
                    gray: "gray-200",
                    green: "green-a100",
                    orange: "orange-a100",
                    pink: "pink-a100",
                    purple: "purple-a100",
                    red: "red-a100",
                    yellow: "yellow-a100"
                }
            };

        function p(e) {
            if (null != e) return "number" == typeof e ? `calc(var(--spacing, 0.25rem) * ${e})` : e
        }

        function h(e) {
            if (null == e) return;
            let t = String(e).split(/[:/]/).map(Number),
                [n, r = 1] = t;
            if (!(t.length > 2) && Number.isFinite(n) && Number.isFinite(r) && !(n <= 0) && !(r <= 0)) return {
                width: n,
                height: r
            }
        }

        function v(e) {
            if (null == e) return;
            let t = h(e);
            return t ? `${t.width} / ${t.height}` : "number" != typeof e && e.trim() || void 0
        }

        function g(e) {
            if (null != e) return "number" == typeof e ? {
                borderRadius: e
            } : "string" == typeof e ? {
                borderRadius: m(e)
            } : {
                borderEndEndRadius: m(e.bottomRight),
                borderEndStartRadius: m(e.bottomLeft),
                borderStartEndRadius: m(e.topRight),
                borderStartStartRadius: m(e.topLeft)
            }
        }

        function m(e) {
            if (null != e) return "number" == typeof e ? e : "none" === e ? "0" : "100%" === e ? "100%" : "full" === e ? "9999px" : a.has(e) ? `var(--dil-radius-${e})` : e
        }

        function b(e, t) {
            return l.has(e) ? `var(--${f[t][e]})` : ! function(e) {
                if ("white" === e || "black" === e) return !0;
                let t = e.indexOf("-");
                if (-1 === t) return !1;
                let n = e.slice(0, t),
                    r = e.slice(t + 1);
                return "alpha" === n ? c.has(r) : "gray" === n ? d.has(r) : i.has(n) && (u.has(r) || s.has(r))
            }(e) ? void 0 : `var(--${e})`
        }

        function x(e, t) {
            return "string" == typeof t ? t : t?.[e]
        }

        function y(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "light";
            if (e) switch (e) {
                case "surface":
                    return "var(--color-surface)";
                case "surface-inverted":
                    return "var(--color-text-prose)";
                case "info":
                    return "var(--color-background-info-surface)";
                case "warning":
                    return "var(--color-background-warning-surface)";
                case "caution":
                    return "var(--color-background-caution-surface)";
                case "success":
                    return "var(--color-background-success-surface)";
                case "danger":
                    return "var(--color-background-danger-surface)";
                case "discovery":
                    return "var(--color-background-discovery-surface)";
                case "info-solid":
                case "warning-solid":
                case "caution-solid":
                case "success-solid":
                case "danger-solid":
                case "discovery-solid":
                    return `var(--color-background-${e})`;
                case "surface-secondary":
                    return "var(--color-surface-secondary)";
                case "surface-tertiary":
                    return "var(--color-surface-tertiary)";
                case "surface-soft":
                    return "var(--color-background-primary-surface)";
                case "surface-elevated":
                    return "var(--color-surface-elevated)";
                case "surface-elevated-secondary":
                    return "var(--color-surface-elevated-secondary)";
                case "border":
                    return "var(--color-border)";
                case "border-subtle":
                    return "var(--color-border-subtle)";
                case "border-strong":
                    return "var(--color-border-strong)";
                default:
                    return function(e, t) {
                        let n = e.lastIndexOf("-");
                        if (-1 === n) return;
                        let r = e.slice(0, n);
                        if (i.has(r)) switch (e.slice(n + 1)) {
                            case "soft":
                                return `var(--${r}-${"light"===t?"100":"800"})`;
                            case "subtle":
                                return `var(--${r}-${"light"===t?"50":"900"})`;
                            default:
                                return
                        }
                    }(e, t) ?? b(e, "background") ?? e
            }
        }

        function w(e, t) {
            return null == t || !1 === t ? {} : !0 === t ? {
                border: "1px solid var(--color-border)"
            } : "string" == typeof t ? {
                border: t
            } : "number" == typeof t || "size" in t ? {
                border: C(t, e)
            } : {
                borderBlock: C(t.y, e),
                borderBlockEnd: C(t.bottom, e),
                borderBlockStart: C(t.top, e),
                borderInline: C(t.x, e),
                borderInlineEnd: C(t.right, e),
                borderInlineStart: C(t.left, e)
            }
        }

        function C(e, t) {
            if (null != e) return "number" == typeof e ? e ? `${e}px solid ${k()}` : "0" : `${e.size}px ${e.style??"solid"} ${k(x(t,e.color))}`
        }

        function k(e) {
            if (!e || "default" === e) return "var(--color-border)";
            switch (e) {
                case "subtle":
                    return "var(--color-border-subtle)";
                case "strong":
                    return "var(--color-border-strong)";
                case "info":
                    return "var(--color-border-info-surface)";
                case "warning":
                    return "var(--color-border-warning-surface)";
                case "caution":
                    return "var(--color-border-caution-surface)";
                case "success":
                    return "var(--color-border-success-surface)";
                case "danger":
                    return "var(--color-border-danger-surface)";
                case "discovery":
                    return "var(--color-border-discovery-surface)";
                default:
                    return b(e, "border") ?? e
            }
        }

        function E(e) {
            if (e) switch (e) {
                case "default":
                case "prose":
                    return "var(--color-text-prose)";
                case "primary":
                    return "var(--color-text-primary)";
                case "emphasis":
                    return "var(--color-text-emphasis)";
                case "secondary":
                    return "var(--color-text-secondary)";
                case "tertiary":
                    return "var(--color-text-tertiary)";
                case "success":
                    return "var(--color-text-success)";
                case "info":
                    return "var(--color-text-info)";
                case "warning":
                    return "var(--color-text-warning)";
                case "caution":
                    return "var(--color-text-caution)";
                case "danger":
                    return "var(--color-text-danger)";
                case "discovery":
                    return "var(--color-text-discovery)";
                default:
                    return b(e, "foreground") ?? e
            }
        }
    }),
    OH6Z: (function(e, t, n) {
        function r(e) {
            return "number" == typeof e ? `${e}fr` : e
        }
        n.d(t, {}, {
            a: function(e) {
                if (null != e) return `span ${Math.max(1,Math.floor(e))}`
            },
            b: function(e) {
                if (null != e) return "number" == typeof e ? `repeat(${Math.max(1,Math.floor(e))}, minmax(0, 1fr))` : "string" == typeof e ? e : e.map(r).join(" ")
            }
        })
    }),
    InHZ: (function(e, t, n) {
        n.d(t, {}, {
            a: {
                button: {
                    target: "button"
                },
                carousel: null,
                checkbox: {
                    affordance: "option",
                    target: "checkbox"
                },
                "chip-input": {
                    affordance: "value_input",
                    target: "chip_input"
                },
                "date-picker": {
                    affordance: "option",
                    target: "date_picker"
                },
                form: null,
                input: {
                    affordance: "value_input",
                    target: "input"
                },
                link: {
                    target: "link"
                },
                "popover-trigger": {
                    target: "popover_trigger"
                },
                pressable: {
                    target: "pressable"
                },
                "radio-group": {
                    affordance: "option",
                    target: "radio_group"
                },
                "segmented-control": {
                    affordance: "option",
                    target: "segmented_control"
                },
                select: {
                    affordance: "option",
                    target: "select"
                },
                slider: {
                    affordance: "value_input",
                    target: "slider"
                },
                textarea: {
                    affordance: "value_input",
                    target: "textarea"
                }
            }
        })
    }),
    H9jZ: (function(e, t, n) {
        var r = n("RdWu"),
            a = n("zd8w");
        n.d(t, {}, {
            a: function(e, t) {
                let {
                    onVisible: n,
                    onVisibleWhen: o = !0,
                    onVisibleKey: l
                } = e, i = (0, a.useRef)(null), d = (0, a.useRef)(null), u = (0, r.a)(n ?? (() => {})), s = null != n && o;
                return (0, a.useEffect)(() => {
                    if (!s || !i.current || d.current === l || "u" < typeof IntersectionObserver) return;
                    let e = i.current,
                        t = null,
                        n = () => {
                            t?.disconnect(), d.current !== l && (t = new IntersectionObserver((e, n) => {
                                n === t && "visible" === document.visibilityState && d.current !== l && e.some(e => e.isIntersecting && e.intersectionRatio >= .5) && (d.current = l, n.disconnect(), u())
                            }, {
                                threshold: .5
                            })).observe(e)
                        };
                    return n(), document.addEventListener("visibilitychange", n), () => {
                        t?.disconnect(), t = null, document.removeEventListener("visibilitychange", n)
                    }
                }, [s, u, t, l]), i
            }
        })
    }),
    jl2x: (function(e, t, n) {
        var r = n("zc1D"),
            a = n("zd8w");
        let o = new WeakMap;

        function l(e, t) {
            if (1 !== e.nodeType) return;
            let n = e.getAttribute("data-id");
            n !== t.applied && (t.hostId = n);
            let r = [t.hostId, ...Array.from(t.owners, e => e.ids)];
            t.applied = t.owners.size ? [...new Set(r.join(" ").split(/\s+/).filter(Boolean))].join(" ") : t.hostId, n !== t.applied && (null === t.applied ? e.removeAttribute("data-id") : e.setAttribute("data-id", t.applied))
        }

        function i(e, t, n) {
            let r = o.get(e) ?? {
                owners: new Set,
                hostId: null,
                applied: null
            };
            n ? r.owners.add(t) : r.owners.delete(t), l(e, r), r.owners.size ? o.set(e, r) : o.delete(e)
        }

        function d(e) {
            return 1 === e.nodeType && (e.hasAttribute("data-dil-id-probe") || e.hasAttribute("data-dil-host-accessory"))
        }
        let u = new WeakMap;

        function s(e) {
            let t = u.get(e);
            if (t) return t;
            let n = new WeakMap,
                r = new MutationObserver(e => {
                    let t = new Set;
                    for (let r of e) {
                        if ("attributes" === r.type) {
                            let e = o.get(r.target);
                            e && l(r.target, e);
                            continue
                        }
                        let e = Array.from(r.addedNodes).filter(e => !d(e)),
                            a = [...r.removedNodes];
                        if (e.length > 0) {
                            let o = e[0],
                                l = e[e.length - 1],
                                i = r.previousSibling ?? (o?.parentNode === r.target ? o.previousSibling : null);
                            for (; i && d(i);) i = i.previousSibling;
                            i && a.push(i);
                            let u = r.nextSibling ?? (l?.parentNode === r.target ? l.nextSibling : null);
                            for (; u && d(u);) u = u.nextSibling;
                            for (let e of (u && a.push(u), n.get(r.target) ?? [])) t.add(e)
                        }
                        for (let e of a)
                            for (let n of o.get(e)?.owners ?? []) t.add(n)
                    }
                    for (let e of t) e.requestProbe?.()
                });
            r.observe(e, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["data-id"]
            });
            let a = {
                observer: r,
                empty: n,
                count: 0
            };
            return u.set(e, a), a
        }
        n.d(t, {}, {
            a: class {
                ids;
                requestProbe;
                start = (0, a.createRef)();
                end = (0, a.createRef)();
                nodes = new Set;
                scope;
                empty;
                constructor(e, t) {
                    this.ids = e, this.requestProbe = t
                }
                capture() {
                    let e = this.start.current,
                        t = this.end.current,
                        n = e?.parentElement;
                    if (!e || !t || !n || t.parentNode !== n) return;
                    let r = n.closest("[data-dil-response]") ?? n;
                    r !== this.scope && (this.dispose(), this.scope = r, s(r).count++);
                    let a = new Set;
                    for (let n = e.nextSibling; n && n !== t; n = n.nextSibling) d(n) || a.add(n);
                    for (let e of this.nodes) a.has(e) || i(e, this, !1);
                    for (let e of a) this.nodes.has(e) || i(e, this, !0);
                    if (this.nodes = a, this.empty?.delete(this), !a.size) {
                        let e = s(r).empty;
                        this.empty = e.get(n) ?? new Set, e.set(n, this.empty), this.empty.add(this)
                    }
                }
                dispose() {
                    if (this.empty?.delete(this), this.scope) {
                        let e = u.get(this.scope);
                        0 == --e.count && (e.observer.disconnect(), u.delete(this.scope)), this.scope = void 0
                    }
                    for (let e of this.nodes) i(e, this, !1);
                    this.nodes.clear()
                }
            },
            b: function(e) {
                if (!(0, r.k)(e)) return;
                let t = {
                        ids: e
                    },
                    n = null;
                return e => {
                    n && i(n, t, !1), e && i(e, t, !0), n = e
                }
            }
        })
    }),
    o9Vw: (function(e, t, n) {
        var r = n("zc1D");
        let a = new WeakMap;
        n.d(t, {}, {
            a: function() {
                let e = (0, r.g)(),
                    t = e && a.get(e);
                if (t?.isConnected) return t.id || (t.id = `dil-trigger-${crypto.randomUUID()}`), t.id
            },
            b: function(e, t) {
                let n = t instanceof Element ? t.closest("button") : null;
                n && a.set(e, n)
            }
        })
    }),
    Me4D: (function(e, t, n) {
        n.d(t, {
            a: () => M,
            b: () => I,
            c: () => C,
            d: () => R,
            e: () => b,
            f: () => k,
            g: () => E,
            h: () => m,
            i: () => S,
            j: () => l,
            k: () => A,
            l: () => N,
            m: () => f,
            n: () => z,
            o: () => T,
            p: () => D,
            q: () => B,
            r: () => h.b,
            s: () => g.a,
            t: () => O,
            u: () => p.a,
            v: () => j,
            w: () => F,
            x: () => i,
            y: () => v.a,
            z: () => P,
            A: () => $,
            B: () => L
        });
        var r = n("zd8w"),
            a = n("ABep"),
            o = "Emphasis-BHzYtQ";
        let l = (0, r.createContext)({
            bold: !1,
            italic: !1,
            strikethrough: !1,
            underline: !1
        });

        function i(e, t) {
            let {
                bold: n,
                italic: r,
                strikethrough: l,
                underline: i
            } = t;
            return i && (e = (0, a.jsx)("u", {
                className: o,
                children: e
            })), l && (e = (0, a.jsx)("del", {
                className: o,
                children: e
            })), r && (e = (0, a.jsx)("em", {
                className: o,
                children: e
            })), n && (e = (0, a.jsx)("strong", {
                className: o,
                children: e
            })), e
        }

        function d(e) {
            return e.nodeType === Node.ELEMENT_NODE && e.classList.contains(o)
        }

        function u(e) {
            for (; e && d(e);) e = e.firstChild;
            return e?.nodeType === Node.TEXT_NODE ? e : null
        }

        function s(e, t) {
            if (!t) return;
            let n = u(t)?.nodeValue,
                r = () => Array.from(e.childNodes).filter(e => u(e)?.nodeValue === n),
                a = null != n ? r() : [];
            return () => {
                if (!e.isConnected) return;
                if (t.parentNode === e) return t;
                if (null == n) return;
                let o = r(),
                    l = o[a.indexOf(t)];
                if (o.length === a.length && l && !a.includes(l)) return l
            }
        }

        function c(e, t, n) {
            if (!t || !e.contains(t)) return;
            let r = function(e, t) {
                let n = u(e);
                if (!n) {
                    let n = s(e, e.childNodes[t]),
                        r = s(e, e.childNodes[t - 1]);
                    return (t, a) => {
                        if (!e.isConnected) return;
                        let o = n?.(),
                            l = o ?? r?.();
                        if (!l) return;
                        let i = Array.from(e.childNodes).indexOf(l) + +!o;
                        if (e !== t || i !== a) return {
                            node: e,
                            offset: i
                        }
                    }
                }
                let r = n;
                for (; r.parentElement && d(r.parentElement);) r = r.parentElement;
                if (!r.parentElement) return;
                let a = s(r.parentElement, r),
                    o = e !== n && t > 0 ? n.nodeValue?.length ?? 0 : t;
                return () => {
                    if (n.isConnected) return;
                    let e = u(a?.());
                    if (e && e.nodeValue === n.nodeValue) return {
                        node: e,
                        offset: o
                    }
                }
            }(t, n);
            if (t === e) return r;
            let a = t;
            for (; a.parentNode && a.parentNode !== e;) a = a.parentNode;
            let o = a.previousSibling;
            if (a.nodeType !== Node.ELEMENT_NODE || d(a) || !o || !u(o)) return r;
            let l = s(e, o);
            return (t, n) => {
                let i = r?.(t, n);
                if (i || t !== e || a.isConnected || o.isConnected) return i;
                let d = l?.();
                if (d) return {
                    node: e,
                    offset: Array.from(e.childNodes).indexOf(d) + 1
                }
            }
        }
        class f extends r.PureComponent {
            getSnapshotBeforeUpdate() {
                let e = this.props.host.current,
                    t = e?.ownerDocument.getSelection();
                if (!e || !t || 1 !== t.rangeCount || t.isCollapsed) return null;
                let n = c(e, t.anchorNode, t.anchorOffset),
                    r = c(e, t.focusNode, t.focusOffset);
                return n || r ? () => {
                    let e = n?.(t.anchorNode, t.anchorOffset),
                        a = r?.(t.focusNode, t.focusOffset);
                    (e || a) && t.anchorNode && t.focusNode && t.setBaseAndExtent(e?.node ?? t.anchorNode, e?.offset ?? t.anchorOffset, a?.node ?? t.focusNode, a?.offset ?? t.focusOffset)
                } : null
            }
            componentDidUpdate(e, t, n) {
                n?.()
            }
            render() {
                return null
            }
        }
        var p = n("o9Vw"),
            h = n("jl2x"),
            v = n("yl65"),
            g = n("SIlm");
        let m = (0, r.createContext)(null);

        function b(e) {
            let {
                children: t
            } = e, n = null !== (0, r.useContext)(m), a = (0, r.useContext)(l);
            return (0, r.createElement)(m.Provider, {
                value: n ? "forwarded" : null
            }, n || a.bold || a.italic || a.strikethrough || a.underline ? function(e, t, n) {
                let a = Array.isArray(e) ? [...e] : [e];
                for (let e = 0; e < a.length; e++) {
                    let o = a[e];
                    if ("string" != typeof o && "number" != typeof o) continue;
                    let l = String(o),
                        d = e + 1;
                    for (; t && d < a.length;) {
                        let e = a[d];
                        if ("string" == typeof e || "number" == typeof e) l += e;
                        else if (null != e && "boolean" != typeof e) break;
                        a[d++] = null
                    }
                    a[e] = l ? (0, r.createElement)(t ? "span" : r.Fragment, {
                        key: `dil-text-${e}`
                    }, i(l, n)) : null, e = d - 1
                }
                return Array.isArray(e) ? a : a[0]
            }(t, n, a) : t)
        }
        let x = Symbol("dilEventHandler"),
            y = Symbol("dilEventCompletion"),
            w = Symbol("no DIL interaction action failure"),
            C = (0, r.createContext)(null),
            k = (0, r.createContext)(void 0),
            E = (0, r.createContext)(void 0),
            I = (0, r.createContext)(void 0),
            A = (0, r.createContext)("light"),
            S = (0, r.createContext)(!1),
            N = (0, r.createContext)(!1),
            R = (0, r.createContext)(!1),
            M = (0, r.createContext)([]);

        function j(e) {
            if (!(0, r.isValidElement)(e)) return null;
            let t = e.props.__dilHostElement;
            return (0, r.isValidElement)(t) ? t : e
        }

        function D() {
            let e = new Map,
                t = new Map,
                n = new Map,
                r = e => {
                    for (let t of n.get(e) ?? []) t()
                };
            return {
                begin(e) {
                    let n = (t.get(e) ?? 0) + 1;
                    return t.set(e, n), r(e), {
                        revision: n,
                        sourceId: e
                    }
                },
                complete(t) {
                    let {
                        revision: a,
                        sourceId: o
                    } = t;
                    !n.has(o) || a <= (e.get(o) ?? 0) || (e.set(o, a), r(o))
                },
                hasPendingEvent: n => (e.get(n) ?? 0) < (t.get(n) ?? 0),
                subscribe(r, a) {
                    let o = n.get(r) ?? new Set;
                    return o.add(a), n.set(r, o), () => {
                        o.delete(a), 0 === o.size && (n.delete(r), e.delete(r), t.delete(r))
                    }
                }
            }
        }

        function T(e, t) {
            return Object.defineProperty(e, x, {
                value: t
            }), e
        }

        function z(e, t) {
            return Object.defineProperty(e, y, {
                value: t
            }), e
        }

        function B(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            if (e) return () => (function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                let a = e?.[y];
                return a ? a(...n) : e?.(...n)
            })(e, ...n)
        }

        function L() {
            let e = (0, r.useContext)(k),
                t = (0, r.useContext)(E);
            return (0, r.useCallback)((n, r) => {
                let a;
                if (!e) return r?.();
                let o = !1,
                    l = w,
                    i = r ? () => {
                        if (o) {
                            if (l !== w) throw l;
                            return a
                        }
                        o = !0;
                        try {
                            return a = r()
                        } catch (e) {
                            throw l = e, e
                        }
                    } : void 0;
                try {
                    e({
                        ...i ? {
                            action: i
                        } : {},
                        ...t ? {
                            scope: t
                        } : {},
                        source: n
                    })
                } catch {
                    if (l !== w) throw l
                }
                if (l !== w) throw l;
                return o ? a : i?.()
            }, [e, t])
        }

        function P() {
            let e = L(),
                t = (0, r.useRef)(null);
            return {
                captureInteraction: (0, r.useCallback)(n => {
                    t.current = n, setTimeout(() => {
                        t.current === n && (t.current = null, e(n))
                    }, 0)
                }, [e]),
                runInteraction: (0, r.useCallback)((n, r) => (t.current = null, e(n, r)), [e])
            }
        }

        function F(e) {
            return e.target instanceof Element && null !== e.target.closest('[data-disabled], [disabled], [aria-disabled="true"]')
        }

        function O(e, t) {
            if (!(e.target instanceof Element)) return;
            let n = e.target.closest("[value]") ?? e.target.closest("label")?.querySelector("[value]"),
                r = n?.getAttribute("value");
            if (r) return r;
            let a = e.target.closest("[aria-label]")?.getAttribute("aria-label");
            return t?.find(e => e.label === a)?.value
        }

        function $(e, t) {
            let n = (0, r.useContext)(C),
                a = (0, r.useCallback)(e => n?.subscribe(t, e) ?? (() => void 0), [t, n]),
                o = (0, r.useCallback)(() => n?.hasPendingEvent(t) ?? !1, [t, n]);
            return {
                dispatch: function() {
                    for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
                    let l = e?.[x];
                    l && n ? l(n.begin(t), ...a) : e?.(...a)
                },
                hasPendingEvent: (0, r.useSyncExternalStore)(a, o, o)
            }
        }
    }),
    yl65: (function(e, t, n) {
        var r = n("zd8w");
        let a = Object.entries({
                xs: 380,
                sm: 576,
                md: 768,
                lg: 1024,
                xl: 1280,
                "2xl": 1536
            }),
            o = e => {
                if (null == e) return [];
                let t = Math.round(e);
                return a.filter(e => {
                    let [, n] = e;
                    return t >= n
                }).map(e => {
                    let [t] = e;
                    return t
                })
            },
            l = function(e) {
                let {
                    fallbackToWindow: t = !0
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e ? e.getBoundingClientRect().width : !t || "u" < typeof window ? null : window.innerWidth
            };
        n.d(t, {}, {
            a: o,
            b: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        fallbackToWindow: n = !0,
                        syncInitialMeasurement: a = !1
                    } = t,
                    [i, d] = (0, r.useState)(() => o(l(e, {
                        fallbackToWindow: n
                    })));
                return (0, r.useLayoutEffect)(() => {
                    if (!a || !e) return;
                    let t = o(l(e, {
                        fallbackToWindow: n
                    }));
                    d(e => e.length === t.length && e.every((e, n) => e === t[n]) ? e : t)
                }, [e, n, a]), (0, r.useEffect)(() => {
                    if (!e || "u" < typeof ResizeObserver) return;
                    let t = function(e) {
                        let t = null;

                        function n() {
                            t && clearTimeout(t), t = window.setTimeout(() => {
                                e(), t = null
                            }, 100)
                        }
                        return n.cancel = () => {
                            t && (clearTimeout(t), t = null)
                        }, n
                    }(() => {
                        let t = o(l(e, {
                            fallbackToWindow: n
                        }));
                        d(e => e.length === t.length && e.every((e, n) => e === t[n]) ? e : t)
                    });
                    t();
                    let r = new ResizeObserver(t);
                    return r.observe(e), () => {
                        r.disconnect(), t.cancel()
                    }
                }, [e, n]), i
            }
        })
    })
};