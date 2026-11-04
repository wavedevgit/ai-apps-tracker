export const __rspack_esm_ids = [777224];
export const __webpack_modules__ = {
    v7bo: (function(e, i, t) {
        var o = t("Eho4");

        function r(e) {
            let i = a(e);
            if (!i) return null;
            let t = i.split(":"),
                r = t[0];
            if (!r) return null;
            let l = t[1] ?? r,
                h = (0, o.j)(r),
                C = (0, o.c)(r),
                d = (0, o.j)(l),
                s = (0, o.c)(l),
                c = {
                    startRow: Math.min(h, d),
                    startCol: Math.min(C, s),
                    endRow: Math.max(h, d),
                    endCol: Math.max(C, s)
                };
            return {
                ref: n(c),
                bounds: c
            }
        }

        function n(e) {
            let i = l(e.startRow, e.startCol),
                t = l(e.endRow, e.endCol);
            return i === t ? i : `${i}:${t}`
        }

        function l(e, i) {
            return `${(0,o.d)(i)}${e+1}`
        }

        function a(e) {
            let i = e.trim();
            return i ? (i.includes("!") ? i.slice(i.indexOf("!") + 1) : i).replace(/\$/g, "").toUpperCase() : null
        }
        t.d(i, {}, {
            a: function(e) {
                return {
                    rows: e.endRow - e.startRow + 1,
                    cols: e.endCol - e.startCol + 1
                }
            },
            b: n,
            c: l,
            d: a,
            e: r,
            f: function(e, i) {
                return e.startRow <= i.endRow && e.endRow >= i.startRow && e.startCol <= i.endCol && e.endCol >= i.startCol
            },
            g: function(e) {
                var i;
                let t = e.startsWith("=") ? e.slice(1) : e,
                    o = t.indexOf("!");
                if (-1 === o) {
                    let e = r(t);
                    return {
                        ref: e?.ref ?? t
                    }
                }
                let n = t.slice(0, o),
                    l = t.slice(o + 1),
                    a = r(l);
                return {
                    sheetName: (i = n).startsWith("'") && i.endsWith("'") && i.length >= 2 ? i.slice(1, -1).replace(/''/g, "'") : i,
                    ref: a?.ref ?? l
                }
            }
        })
    }),
    dkXD: (function(e, i, t) {
        let o = Object.freeze(Object.fromEntries(["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#800000", "#008000", "#000080", "#808000", "#800080", "#008080", "#C0C0C0", "#808080", "#9999FF", "#993366", "#FFFFCC", "#CCFFFF", "#660066", "#FF8080", "#0066CC", "#CCCCFF", "#000080", "#FF00FF", "#FFFF00", "#00FFFF", "#800080", "#800000", "#008080", "#0000FF", "#00CCFF", "#CCFFFF", "#CCFFCC", "#FFFF99", "#99CCFF", "#FF99CC", "#CC99FF", "#FFCC99", "#3366FF", "#33CCCC", "#99CC00", "#FFCC00", "#FF9900", "#FF6600", "#666699", "#969696", "#003366", "#339966", "#003300", "#333300", "#993300", "#993366", "#333399", "#333333", "#000000", "#FFFFFF"].map((e, i) => [`indexed:${i}`, e])));
        t.d(i, {}, {
            a: o,
            b: function(e) {
                if (!e?.length) return o;
                let i = {
                    ...o
                };
                for (let [t, o] of e.entries()) {
                    if (64 === t || 65 === t) continue;
                    let e = o.value.replace(/^#/, "");
                    i[`indexed:${t}`] = `#${8===e.length?e.slice(2):e}`
                }
                return Object.freeze(i)
            }
        })
    }),
    RUAz: (function(e, i, t) {
        t.r(i);
        var o = t("v7bo");
        let r = "CSV import",
            n = /\\|\/|\?|\*|\[|\]|:/g;

        function l(e) {
            return ((e ?? r).trim().replace(n, "").trim() || r).slice(0, 31)
        }
        t.d(i, {}, {
            planCsvImport: function(e, i) {
                let t = function(e) {
                        let i = e ?? ",";
                        if (1 !== i.length) throw Error(`CSV import separator must be a single character; received "${i}".`);
                        return i
                    }(i?.separator),
                    r = (0, o.g)(i?.anchor ?? "A1"),
                    n = r.sheetName?.trim(),
                    a = i?.sheetName?.trim();
                if (n && a && n !== a) throw Error(`CSV import specifies conflicting sheet names: "${a}" (options.sheetName) vs "${n}" (anchor).`);
                let h = l(n ?? a),
                    C = (0, o.e)(r.ref);
                if (!C) throw Error(`CSV import anchor must be an A1 cell reference; received "${i?.anchor??"A1"}".`);
                let {
                    bounds: d
                } = C;
                if (d.startRow !== d.endRow || d.startCol !== d.endCol) throw Error(`CSV import anchor must be a single cell reference; received "${i?.anchor??"A1"}".`);
                let s = function(e, i) {
                        if (!e.trim()) return [];
                        let t = function(e, i) {
                            let t = [],
                                o = [],
                                r = "",
                                n = !1,
                                l = () => {
                                    o.push(r), r = ""
                                },
                                a = () => {
                                    t.push(o), o = []
                                };
                            for (let t = 0; t < e.length; t += 1) {
                                let o = e[t] ?? "";
                                if (n) {
                                    if ('"' === o) {
                                        if ('"' === e[t + 1]) {
                                            r += '"', t += 1;
                                            continue
                                        }
                                        n = !1;
                                        continue
                                    }
                                    r += o;
                                    continue
                                }
                                if ('"' === o) {
                                    n = !0;
                                    continue
                                }
                                if (o === i) {
                                    l();
                                    continue
                                }
                                if ("\n" === o) {
                                    l(), a();
                                    continue
                                }
                                if ("\r" === o) {
                                    "\n" === e[t + 1] && (t += 1), l(), a();
                                    continue
                                }
                                r += o
                            }
                            for (l(), a(); t.length > 0;) {
                                let e = t[t.length - 1] ?? [];
                                if (!(e.length > 0 && e.every(e => "" === e))) break;
                                t.pop()
                            }
                            return t
                        }(e, i);
                        if (0 === t.length) return [];
                        let o = t.reduce((e, i) => Math.max(e, i.length), 0);
                        return 0 === o ? [] : t.map(e => {
                            if (e.length === o) return e;
                            let i = e.slice();
                            for (; i.length < o;) i.push("");
                            return i
                        })
                    }(e, t),
                    c = s.length,
                    u = c > 0 ? s[0]?.length ?? 0 : 0;
                if (0 === c || 0 === u) return {
                    sheetName: h,
                    values: []
                };
                let f = {
                    startRow: d.startRow,
                    startCol: d.startCol,
                    endRow: d.startRow + c - 1,
                    endCol: d.startCol + u - 1
                };
                return {
                    sheetName: h,
                    values: s,
                    rangeRef: (0, o.b)(f),
                    rect: {
                        r1: f.startRow,
                        c1: f.startCol,
                        r2: f.endRow,
                        c2: f.endCol
                    }
                }
            },
            sanitizeSheetName: l
        })
    }),
    Eho4: (function(e, i, t) {
        var o = t("dkXD");
        let r = 4 / 3;

        function n(e) {
            return Math.ceil(e && e > 0 ? e : 7)
        }
        t.d(i, {}, {
            a: function(e) {
                let i = e.replace(/^0x/i, "");
                if (8 === i.length) {
                    let e = parseInt(i.slice(2, 4), 16),
                        t = parseInt(i.slice(4, 6), 16),
                        o = parseInt(i.slice(6, 8), 16);
                    return `rgba(${e}, ${t}, ${o}, 1.000)`
                }
                return 6 === i.length ? `#${i}` : "#ffffff"
            },
            b: function(e, i) {
                return null == e || e <= 0 ? 64 : e * n(i)
            },
            c: function(e) {
                let i = e.match(/[A-Z]+/);
                if (!i) return 0;
                let t = 0;
                for (let e of i[0]) t = 26 * t + (e.charCodeAt(0) - 64);
                return t - 1
            },
            d: function(e) {
                let i = "";
                for (e += 1; e;) {
                    let t = (e - 1) % 26;
                    i = String.fromCharCode(65 + t) + i, e = Math.floor((e - t) / 26)
                }
                return i
            },
            e: function(e) {
                if (null != e) return o.a[`indexed:${e}`]
            },
            f: function(e) {
                return 96 * (null == e || 0 === e ? 15 : e) / 72
            },
            g: function(e, i) {
                return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(100 * (e / n(i))) / 100
            },
            h: function(e) {
                return Number.isFinite(e ?? 0) ? (e ?? 0) * 72 / 96 : 15
            },
            i: function(e) {
                let i = e > 0 ? e : 11;
                return {
                    padLr: Math.max(2, Math.floor(.1 * i)),
                    padTb: Math.max(r, Math.floor(0 * i))
                }
            },
            j: function(e) {
                let i = e.match(/\d+/);
                return i ? parseInt(i[0], 10) - 1 : 0
            }
        })
    }),
    FRzY: (function(e, i, t) {
        t.d(i, {
            a: () => a
        });
        var o = t("ABep"),
            r = t("on57"),
            n = t("pZwg"),
            l = t("Ra0C");
        let a = e => {
            let {
                children: i,
                className: t,
                variant: a = "soft",
                color: h = "secondary",
                size: C = "sm",
                pill: d = n.a.pill
            } = e;
            return (0, o.jsx)("div", {
                className: (0, r.b)("Badge-GbHWPL", t),
                "data-color": h,
                "data-size": C,
                "data-pill": d ? "" : void 0,
                "data-variant": a,
                children: (0, l.a)(i)
            })
        }
    }),
    k6sM: (function(e, i, t) {
        var o = t("ABep");
        t.d(i, {}, {
            a: e => (0, o.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...e,
                children: (0, o.jsx)("path", {
                    d: "M21.6295 16.8937C21.5458 16.6147 21.1413 16.4194 21.1413 16.4194C21.105 16.3971 21.0687 16.3803 21.0408 16.3663C20.3684 16.0427 19.7741 15.6521 19.2747 15.2085C18.873 14.8514 18.527 14.4608 18.2508 14.0423C17.9132 13.5345 17.7542 13.1076 17.6872 12.8788C17.6482 12.7282 17.6565 12.6696 17.6872 12.5915C17.7151 12.5273 17.7905 12.4631 17.8295 12.4353C18.0555 12.2762 18.421 12.039 18.6442 11.894C18.8367 11.7684 19.0041 11.6596 19.1018 11.5927C19.417 11.3722 19.6319 11.149 19.7602 10.9063C19.9248 10.5938 19.9443 10.2478 19.816 9.91028C19.643 9.45272 19.2161 9.1793 18.6749 9.1793C18.5549 9.1793 18.4294 9.19324 18.3066 9.21835C17.9969 9.28531 17.7012 9.39693 17.4557 9.49176C17.4389 9.50013 17.4194 9.4862 17.4194 9.46665C17.4445 8.85567 17.4752 8.03538 17.4082 7.25418C17.3468 6.54831 17.2017 5.95404 16.9646 5.43509C16.7247 4.91336 16.4178 4.52834 16.1722 4.25213C15.9407 3.98708 15.5362 3.59648 14.9223 3.24493C14.0602 2.7511 13.0781 2.5 12.004 2.5C10.9326 2.5 9.9533 2.7511 9.0884 3.24215C8.44113 3.61322 8.02542 4.03172 7.83571 4.24934C7.59296 4.52834 7.28327 4.91336 7.04332 5.43231C6.80617 5.95124 6.66109 6.54552 6.59971 7.25139C6.53275 8.03262 6.56065 8.78871 6.58855 9.46389C6.58855 9.48339 6.56902 9.49738 6.55228 9.48901C6.30676 9.39412 6.01102 9.2825 5.70133 9.21554C5.57856 9.18767 5.45581 9.1765 5.33304 9.1765C4.79178 9.1765 4.36491 9.44991 4.19193 9.90747C4.06359 10.2478 4.08312 10.591 4.24773 10.9035C4.37607 11.1462 4.5909 11.3695 4.90617 11.5899C5.00382 11.6568 5.17123 11.7656 5.36374 11.8912C5.58415 12.0335 5.93848 12.2622 6.16447 12.4241C6.19237 12.4436 6.28723 12.5162 6.31792 12.5915C6.3514 12.6724 6.35698 12.731 6.31513 12.89C6.24538 13.1216 6.08635 13.5429 5.75434 14.0423C5.47812 14.4608 5.13217 14.8514 4.7304 15.2085C4.2282 15.6521 3.63392 16.0427 2.96432 16.3663C2.93364 16.3803 2.89458 16.3998 2.85272 16.4249C2.81087 16.45 2.45096 16.6286 2.37563 16.8937C2.26403 17.2843 2.55977 17.6498 2.86667 17.8478C3.3633 18.1687 3.96873 18.3417 4.32027 18.4338C4.41792 18.4589 4.5072 18.484 4.58811 18.5091C4.63833 18.5258 4.76388 18.5732 4.81968 18.643C4.88664 18.7295 4.89502 18.8383 4.92012 18.9611C4.95919 19.1675 5.04568 19.4214 5.29957 19.5972C5.57856 19.7897 5.93569 19.8037 6.38488 19.8204C6.8564 19.8372 7.4423 19.8623 8.11188 20.0827C8.42158 20.1859 8.70337 20.3589 9.02981 20.5598C9.71056 20.9782 10.5587 21.5 12.0067 21.5C13.4548 21.5 14.3085 20.9755 14.9949 20.557C15.3185 20.3589 15.5975 20.1859 15.9016 20.0855C16.5712 19.865 17.1571 19.8427 17.6286 19.8232C18.0778 19.8064 18.4349 19.7925 18.714 19.6C18.9874 19.413 19.0655 19.1313 19.1018 18.9192C19.1213 18.816 19.1352 18.7212 19.1938 18.643C19.244 18.5761 19.3612 18.5314 19.417 18.5119C19.5007 18.4868 19.59 18.4617 19.6932 18.4338C20.0448 18.3389 20.4828 18.2301 21.0185 17.926C21.6518 17.5633 21.6965 17.1141 21.6295 16.8937Z",
                    fill: "currentColor"
                })
            })
        })
    }),
    Y8CA: (function(e, i, t) {
        var o = t("BDAQ"),
            r = t("ASxG"),
            n = t("RmZI");
        let l = r.strictObject({
                arguments: r.record(r.string(), r.json()).optional(),
                name: n.a,
                type: r.literal("mcp_app_tool")
            }),
            a = r.discriminatedUnion("type", [l, o.e]);
        t.d(i, {}, {
            a: a
        })
    }),
    iYCA: (function(e, i, t) {
        t("QLGt"), e.exports = t("TQhG")
    }),
    UlFl: (function(e, i, t) {
        t("o1bS"), e.exports = t("ogbS")("Array", "findLast")
    }),
    wAJj: (function(e, i, t) {
        var o = t("OwA9"),
            r = t("EzAB"),
            n = t("fuV1"),
            l = t("f6Go"),
            a = function(e) {
                var i = 1 === e;
                return function(t, a, h) {
                    for (var C, d = n(t), s = r(d), c = l(s), u = o(a, h); c-- > 0;)
                        if (u(C = s[c], c, d)) switch (e) {
                            case 0:
                                return C;
                            case 1:
                                return c
                        }
                    return i ? -1 : void 0
                }
            };
        e.exports = {
            findLast: a(0),
            findLastIndex: a(1)
        }
    }),
    o1bS: (function(e, i, t) {
        var o = t("Ywrr"),
            r = t("wAJj").findLast,
            n = t("XnQF");
        o({
            target: "Array",
            proto: !0
        }, {
            findLast: function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n("findLast")
    }),
    QLGt: (function(e, i, t) {
        t("o1bS")
    }),
    TQhG: (function(e, i, t) {
        e.exports = t("UlFl")
    }),
    fi73: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "arrow-down-line-horizontal-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-arrow-down-line-horizontal-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 244e-6,
                    y: 1e-6,
                    overflows: !1
                },
                composite: {
                    x: 244e-6,
                    y: 1e-6,
                    overflows: !1
                }
            }
        }
    }),
    H6Am: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "arrow-down-open-base-regular-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32"
            },
            href: "#codex-icon-arrow-down-open-base-regular-32",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: -.166992,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: -.166992,
                    overflows: !1
                }
            }
        }
    }),
    G3Yw: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "arrow-up-open-base-regular-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32"
            },
            href: "#codex-icon-arrow-up-open-base-regular-32",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: -.270508,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: -.270508,
                    overflows: !1
                }
            }
        }
    }),
    bNNe: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "book-badge-heart-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-book-badge-heart-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.807617,
                    y: -.309082,
                    overflows: !1
                },
                composite: {
                    x: -.807617,
                    y: -.309082,
                    overflows: !1
                }
            }
        }
    }),
    sqfS: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "circle-info-light-28",
            canvas: {
                width: 28,
                height: 28,
                viewBox: "0 0 28 28"
            },
            href: "#codex-icon-circle-info-light-28",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    ANQy: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "clock-arrow-rotate-counterclockwise-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-clock-arrow-rotate-counterclockwise-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    OdzS: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "code-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-code-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.003173,
                    y: -.046875,
                    overflows: !1
                },
                composite: {
                    x: -.003173,
                    y: -.046875,
                    overflows: !1
                }
            }
        }
    }),
    K2OL: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "document-badge-magnifyingglass-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-document-badge-magnifyingglass-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.43274,
                    y: -.511474,
                    overflows: !1
                },
                composite: {
                    x: -.43274,
                    y: -.511474,
                    overflows: !1
                }
            }
        }
    }),
    BALR: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "document-light-28",
            canvas: {
                width: 28,
                height: 28,
                viewBox: "0 0 28 28"
            },
            href: "#codex-icon-document-light-28",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 244e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 244e-6,
                    overflows: !1
                }
            }
        }
    }),
    SvYF: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "document-pdf-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-document-pdf-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.249512,
                    y: -.331543,
                    overflows: !1
                },
                composite: {
                    x: -.249512,
                    y: -.331543,
                    overflows: !1
                }
            }
        }
    }),
    t90L: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "document-pdf-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-document-pdf-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.312989,
                    y: -.414063,
                    overflows: !1
                },
                composite: {
                    x: -.312989,
                    y: -.414063,
                    overflows: !1
                }
            }
        }
    }),
    vOLZ: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "emoji-face-badge-plus-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-emoji-face-badge-plus-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.416504,
                    y: .416991,
                    overflows: !1
                },
                composite: {
                    x: -.416504,
                    y: .416991,
                    overflows: !1
                }
            }
        }
    }),
    jljV: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "folder-badge-arrow-down-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-folder-badge-arrow-down-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.001953,
                    y: -.509644,
                    overflows: !1
                },
                composite: {
                    x: -.001953,
                    y: -.509644,
                    overflows: !1
                }
            }
        }
    }),
    upkz: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "frame-cursor-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-frame-cursor-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.953156,
                    y: -.972412,
                    overflows: !1
                },
                composite: {
                    x: -.953156,
                    y: -.972412,
                    overflows: !1
                }
            }
        }
    }),
    Zh3q: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "gift-regular-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-gift-regular-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    vyPp: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "heart-badge-shield-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-heart-badge-shield-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.1781,
                    y: -.04541,
                    overflows: !1
                },
                composite: {
                    x: -.1781,
                    y: -.04541,
                    overflows: !1
                }
            }
        }
    }),
    ARht: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "link-regular-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32"
            },
            href: "#codex-icon-link-regular-32",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 6e-5,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 6e-5,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    MCdf: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "paintbrush-stroke-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-paintbrush-stroke-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.236572,
                    y: .352417,
                    overflows: !1
                },
                composite: {
                    x: -.236572,
                    y: .352417,
                    overflows: !1
                }
            }
        }
    }),
    GuUB: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "person-badge-heart-light-28",
            canvas: {
                width: 28,
                height: 28,
                viewBox: "0 0 28 28"
            },
            href: "#codex-icon-person-badge-heart-light-28",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.82483,
                    y: -.622437,
                    overflows: !1
                },
                composite: {
                    x: -.82483,
                    y: -.622437,
                    overflows: !1
                }
            }
        }
    }),
    YVOp: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "person-frame-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-person-frame-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -1e-6,
                    y: -1e-6,
                    overflows: !1
                },
                composite: {
                    x: -1e-6,
                    y: -1e-6,
                    overflows: !1
                }
            }
        }
    }),
    pw0J: (function(e, i) {
        i.a = {
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
    rlkT: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "plus-md-light-28",
            canvas: {
                width: 28,
                height: 28,
                viewBox: "0 0 28 28"
            },
            href: "#codex-icon-plus-md-light-28",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    AtSM: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "resize-window-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-resize-window-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.019043,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: -.019043,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    JK4b: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "sparkle-fill-regular-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-sparkle-fill-regular-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .065674,
                    y: .06543,
                    overflows: !1
                },
                composite: {
                    x: .065674,
                    y: .06543,
                    overflows: !1
                }
            }
        }
    }),
    gTbk: (function(e, i) {
        i.a = {
            kind: "sprite",
            name: "xmark-lg-bold-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-xmark-lg-bold-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    X1wr: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "arrow-left-arrow-right-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 4.151855,
                    y: 2.312988,
                    width: 15.696777,
                    height: 19.499512
                },
                visualBounds: {
                    x: 4.151855,
                    y: 2.312988,
                    width: 15.696777,
                    height: 19.499512
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 4.151855,
                    y: 2.312988,
                    width: 15.696777,
                    height: 19.499512
                },
                center: {
                    x: 12.000244,
                    y: 12.062744
                },
                insets: {
                    top: 2.312988,
                    right: 4.151368,
                    bottom: 2.1875,
                    left: 4.151855
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12.000244,
                        y: 12.062744
                    },
                    foreground: {
                        x: 12.000244,
                        y: 12.062744
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.6921 12.5384C14.9818 12.2425 15.4567 12.2371 15.7527 12.5266L19.4734 16.1692L19.5613 16.2649C19.9444 16.7262 19.9446 17.3994 19.5613 17.8606L19.4734 17.9554L15.7527 21.5989C15.4567 21.8884 14.9818 21.8829 14.6921 21.5872C14.4026 21.2912 14.408 20.8163 14.7038 20.5266L17.4763 17.8128H5.56321C5.149 17.8128 4.81321 17.477 4.81321 17.0628C4.81329 16.6486 5.14905 16.3128 5.56321 16.3128H17.4763L14.7038 13.5989C14.408 13.3092 14.4026 12.8343 14.6921 12.5384Z" fill="currentColor"/> <path d="M8.24778 2.52664C8.54372 2.23716 9.01861 2.2426 9.30833 2.53836C9.59782 2.83434 9.59246 3.30921 9.29661 3.59891L6.52415 6.31278H18.5632C18.9773 6.31284 19.3131 6.64868 19.3132 7.06278C19.3132 7.47695 18.9774 7.81271 18.5632 7.81278H6.52415L9.29661 10.5266C9.59246 10.8163 9.59783 11.2912 9.30833 11.5872C9.0186 11.8828 8.54366 11.8883 8.24778 11.5989L4.52708 7.95535L4.43919 7.86063C4.056 7.39944 4.05616 6.7262 4.43919 6.26493L4.52708 6.16922L8.24778 2.52664Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    nPAz: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    kMBy: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    I3br: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "bell-light-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                frame: {
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32
                },
                inkBounds: {
                    x: 4.060059,
                    y: 2.766357,
                    width: 23.880791,
                    height: 26.466797
                },
                visualBounds: {
                    x: 4.060059,
                    y: 2.766357,
                    width: 23.880791,
                    height: 26.466797
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 4.060059,
                    y: 2.766357,
                    width: 23.880791,
                    height: 26.466797
                },
                center: {
                    x: 16.000455,
                    y: 15.999756
                },
                insets: {
                    top: 2.766357,
                    right: 4.05915,
                    bottom: 2.766846,
                    left: 4.060059
                },
                anchors: {
                    frame: {
                        x: 16,
                        y: 16
                    },
                    ink: {
                        x: 16.000455,
                        y: 15.999756
                    },
                    foreground: {
                        x: 16.000455,
                        y: 15.999756
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.001 2.76636C18.86 2.76655 21.205 3.74896 22.8652 5.41187C24.5186 7.0681 25.4365 9.34215 25.5615 11.8337L25.8076 16.7126C25.8203 16.9639 25.8867 17.2099 26.002 17.4333L27.6514 20.6316C27.9752 21.2594 28.0656 22.0551 27.7236 22.7458C27.3541 23.4915 26.5905 23.9 25.6592 23.9001H22.167C21.7307 26.916 19.1366 29.2329 16 29.2332C12.8633 29.233 10.2684 26.916 9.83203 23.9001H6.3418C5.41038 23.9001 4.64692 23.4915 4.27734 22.7458C3.93524 22.0551 4.02576 21.2595 4.34961 20.6316L5.99902 17.4333C6.11422 17.2099 6.18067 16.9639 6.19336 16.7126L6.43945 11.8337C6.56446 9.34211 7.48231 7.0681 9.13574 5.41187C10.7961 3.74894 13.1417 2.76636 16.001 2.76636ZM11.6592 23.9001C12.0751 25.9169 13.8601 27.4332 16 27.4333C18.1398 27.4331 19.9248 25.9169 20.3408 23.9001H11.6592ZM16.001 4.56714C13.5725 4.56714 11.7009 5.39072 10.4102 6.68335C9.11262 7.98297 8.34312 9.81527 8.2373 11.9236L7.99121 16.8035C7.96559 17.3106 7.83127 17.8063 7.59863 18.2576L5.9502 21.4568C5.82866 21.6925 5.85539 21.8759 5.89062 21.947C5.90498 21.9758 5.92696 22.0031 5.97363 22.0291C6.025 22.0575 6.13612 22.1003 6.3418 22.1003H25.6592C25.8653 22.1003 25.9772 22.0575 26.0283 22.0291C26.0747 22.0031 26.097 21.9758 26.1113 21.947C26.1465 21.8757 26.1731 21.6922 26.0518 21.4568L24.4023 18.2576C24.1697 17.8063 24.0354 17.3106 24.0098 16.8035L23.7637 11.9246C23.6579 9.81638 22.8882 7.98296 21.5908 6.68335C20.3002 5.39081 18.4291 4.56733 16.001 4.56714Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    vKUH: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    ngmq: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    hDTP: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "code-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 2.299316,
                    y: 7.25,
                    width: 19.407715,
                    height: 9.59375
                },
                visualBounds: {
                    x: 2.299316,
                    y: 7.25,
                    width: 19.407715,
                    height: 9.59375
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.299316,
                    y: 7.25,
                    width: 19.407715,
                    height: 9.59375
                },
                center: {
                    x: 12.003173,
                    y: 12.046875
                },
                insets: {
                    top: 7.25,
                    right: 2.292969,
                    bottom: 7.15625,
                    left: 2.299316
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12.003173,
                        y: 12.046875
                    },
                    foreground: {
                        x: 12.003173,
                        y: 12.046875
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M5.40256 7.55561C5.64829 7.2222 6.11795 7.15074 6.45139 7.39644C6.78438 7.64226 6.85517 8.11198 6.60959 8.44526L3.93479 12.0771L6.60666 15.6445C6.85433 15.976 6.78663 16.4462 6.4553 16.6943C6.12387 16.9422 5.65376 16.8741 5.40549 16.5429L2.4885 12.6484C2.23749 12.3131 2.23634 11.8528 2.48459 11.5156L5.40256 7.55561Z" fill="currentColor"/> <path d="M17.5549 7.39644C17.8884 7.15074 18.358 7.2222 18.6037 7.55561L21.5217 11.5156C21.7698 11.8528 21.7688 12.3132 21.5178 12.6484L18.6008 16.5429C18.3527 16.8742 17.8825 16.942 17.551 16.6943C17.2196 16.4461 17.1518 15.976 17.3996 15.6445L20.0715 12.0771L17.3967 8.44526C17.1511 8.11188 17.2216 7.64219 17.5549 7.39644Z" fill="currentColor"/> <path d="M13.3137 7.6689C13.4965 7.29734 13.946 7.14447 14.3176 7.3271C14.6891 7.50989 14.843 7.95939 14.6604 8.33101L10.6867 16.4111C10.5039 16.7826 10.0544 16.9355 9.68284 16.7529C9.31123 16.5701 9.15829 16.1206 9.34104 15.749L13.3137 7.6689Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    ZM65: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    G9K2: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    cKi0: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "document-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 18.5
                },
                visualBounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 18.5
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 18.5
                },
                center: {
                    x: 12,
                    y: 12
                },
                insets: {
                    top: 2.75,
                    right: 3.75,
                    bottom: 2.75,
                    left: 3.75
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 12
                    },
                    foreground: {
                        x: 12,
                        y: 12
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2578 2.75C15.2522 2.75012 16.206 3.14548 16.9092 3.84863L19.1514 6.09082C19.8545 6.79397 20.2499 7.74779 20.25 8.74219V17.5C20.25 19.5711 18.5711 21.25 16.5 21.25H7.5C5.42893 21.25 3.75 19.5711 3.75 17.5V6.5C3.75 4.42893 5.42893 2.75 7.5 2.75H14.2578ZM7.5 4.25C6.25736 4.25 5.25 5.25736 5.25 6.5V17.5C5.25 18.7426 6.25736 19.75 7.5 19.75H16.5C17.7426 19.75 18.75 18.7426 18.75 17.5V10.25H16C14.4812 10.25 13.25 9.01878 13.25 7.5V4.25H7.5ZM14.75 7.5C14.75 8.19036 15.3096 8.75 16 8.75H18.75V8.74219C18.7499 8.14561 18.5127 7.57322 18.0908 7.15137L15.8486 4.90918C15.5449 4.60544 15.1627 4.39936 14.75 4.30664V7.5Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    EZXn: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    lq2s: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    RZ27: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    Bv22: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    mJVb: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    Nkxu: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "pdf-document-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 17.845947
                },
                visualBounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 17.845947
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.75,
                    y: 2.75,
                    width: 16.5,
                    height: 17.845947
                },
                center: {
                    x: 12,
                    y: 11.672974
                },
                insets: {
                    top: 2.75,
                    right: 3.75,
                    bottom: 3.404053,
                    left: 3.75
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 11.672974
                    },
                    foreground: {
                        x: 12,
                        y: 11.672974
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.24023 15.6704C8.71534 15.6704 9.12299 15.8119 9.41284 16.0879C9.70349 16.3647 9.86328 16.7656 9.86328 17.2605C9.86328 17.7553 9.70388 18.1576 9.41357 18.436C9.12384 18.7138 8.71581 18.8572 8.24023 18.8572H7.1438V20.5959H6.01221V15.6704H8.24023ZM7.1438 17.8259H8.13916C8.35212 17.8259 8.49682 17.764 8.58813 17.6714C8.67978 17.5784 8.73242 17.4403 8.73242 17.2605C8.73242 17.0807 8.68004 16.9445 8.58887 16.8533C8.49781 16.7622 8.35289 16.7017 8.13916 16.7017H7.1438V17.8259Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1602 15.6704C12.8859 15.6705 13.5127 15.8786 13.9583 16.2974C14.4048 16.7173 14.657 17.3371 14.657 18.1335C14.657 18.9289 14.4139 19.5487 13.9758 19.969C13.5385 20.3885 12.9197 20.5959 12.1938 20.5959H10.436V15.6704H12.1602ZM11.5676 19.5654H12.0935C12.5342 19.5653 12.8882 19.4747 13.1313 19.2615C13.3715 19.0507 13.5254 18.7009 13.5254 18.1335C13.5254 17.5659 13.3716 17.2157 13.1313 17.0049C12.8882 16.7917 12.5341 16.7017 12.0935 16.7017H11.5676V19.5654Z" fill="currentColor"/> <path d="M18.9871 16.7017H16.469V17.6853H18.6516V18.7158H16.469V20.5959H15.3374V15.6704H18.9871V16.7017Z" fill="currentColor"/> <path d="M3.75 11V6.5C3.75 4.42893 5.42893 2.75 7.5 2.75H14.2578C15.2522 2.75012 16.206 3.14548 16.9092 3.84863L19.1514 6.09082C19.8545 6.79397 20.2499 7.74779 20.25 8.74219V11C20.25 11.4142 19.9142 11.75 19.5 11.75C19.0858 11.75 18.75 11.4142 18.75 11V8.74219C18.7499 8.14561 18.5127 7.57322 18.0908 7.15137L15.8486 4.90918C15.4268 4.48733 14.8544 4.25012 14.2578 4.25H7.5C6.25736 4.25 5.25 5.25736 5.25 6.5V11C5.25 11.4142 4.91421 11.75 4.5 11.75C4.08579 11.75 3.75 11.4142 3.75 11Z" fill="currentColor"/> <path d="M13.25 7.5V3.5H14.75V7.5C14.75 8.19036 15.3096 8.75 16 8.75H19.5V10.25H16C14.4812 10.25 13.25 9.01878 13.25 7.5Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    xtW8: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    c6PF: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    VOqi: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    D8FC: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    MVL1: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    mdjO: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    mTsS: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "slides-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 2.25,
                    y: 3.25,
                    width: 19.5,
                    height: 16.5
                },
                visualBounds: {
                    x: 2.25,
                    y: 3.25,
                    width: 19.5,
                    height: 16.5
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.25,
                    y: 3.25,
                    width: 19.5,
                    height: 16.5
                },
                center: {
                    x: 12,
                    y: 11.5
                },
                insets: {
                    top: 3.25,
                    right: 2.25,
                    bottom: 4.25,
                    left: 2.25
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 11.5
                    },
                    foreground: {
                        x: 12,
                        y: 11.5
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5195 6.25C17.2912 6.25 17.9154 6.24981 18.4199 6.29102C18.9331 6.33295 19.3888 6.42135 19.8115 6.63672C20.4795 6.97707 21.0229 7.5205 21.3633 8.18848C21.5786 8.61125 21.6671 9.06687 21.709 9.58008C21.7502 10.0846 21.75 10.7088 21.75 11.4805V14.5195C21.75 15.2912 21.7502 15.9154 21.709 16.4199C21.6671 16.9331 21.5786 17.3888 21.3633 17.8115C21.0229 18.4795 20.4795 19.0229 19.8115 19.3633C19.3888 19.5786 18.9331 19.6671 18.4199 19.709C17.9154 19.7502 17.2912 19.75 16.5195 19.75H7.48047C6.70885 19.75 6.08458 19.7502 5.58008 19.709C5.06687 19.6671 4.61125 19.5786 4.18848 19.3633C3.5205 19.0229 2.97707 18.4795 2.63672 17.8115C2.42135 17.3888 2.33295 16.9331 2.29102 16.4199C2.24981 15.9154 2.25 15.2912 2.25 14.5195V11.4805C2.25 10.7088 2.24981 10.0846 2.29102 9.58008C2.33295 9.06687 2.42135 8.61125 2.63672 8.18848C2.97707 7.5205 3.5205 6.97707 4.18848 6.63672C4.61125 6.42135 5.06687 6.33295 5.58008 6.29102C6.08458 6.24981 6.70885 6.25 7.48047 6.25H16.5195ZM7.48047 7.75C6.68406 7.75 6.13142 7.75106 5.70215 7.78613C5.28162 7.82049 5.04527 7.88389 4.86914 7.97363C4.48358 8.17014 4.17014 8.48358 3.97363 8.86914C3.88389 9.04527 3.82049 9.28162 3.78613 9.70215C3.75106 10.1314 3.75 10.6841 3.75 11.4805V14.5195C3.75 15.3159 3.75106 15.8686 3.78613 16.2979C3.82049 16.7184 3.88389 16.9547 3.97363 17.1309C4.17014 17.5164 4.48358 17.8299 4.86914 18.0264C5.04527 18.1161 5.28162 18.1795 5.70215 18.2139C6.13142 18.2489 6.68406 18.25 7.48047 18.25H16.5195C17.3159 18.25 17.8686 18.2489 18.2979 18.2139C18.7184 18.1795 18.9547 18.1161 19.1309 18.0264C19.5164 17.8299 19.8299 17.5164 20.0264 17.1309C20.1161 16.9547 20.1795 16.7184 20.2139 16.2979C20.2489 15.8686 20.25 15.3159 20.25 14.5195V11.4805C20.25 10.6841 20.2489 10.1314 20.2139 9.70215C20.1795 9.28162 20.1161 9.04527 20.0264 8.86914C19.8299 8.48358 19.5164 8.17014 19.1309 7.97363C18.9547 7.88389 18.7184 7.82049 18.2979 7.78613C17.8686 7.75106 17.3159 7.75 16.5195 7.75H7.48047Z" fill="currentColor"/> <path d="M18 3.25C18.4142 3.25 18.75 3.58579 18.75 4C18.75 4.41421 18.4142 4.75 18 4.75H6C5.58579 4.75 5.25 4.41421 5.25 4C5.25 3.58579 5.58579 3.25 6 3.25H18Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    llCH: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "table-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                frame: {
                    x: 0,
                    y: 0,
                    width: 24,
                    height: 24
                },
                inkBounds: {
                    x: 2.25,
                    y: 3.75,
                    width: 19.5,
                    height: 16.5
                },
                visualBounds: {
                    x: 2.25,
                    y: 3.75,
                    width: 19.5,
                    height: 16.5
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.25,
                    y: 3.75,
                    width: 19.5,
                    height: 16.5
                },
                center: {
                    x: 12,
                    y: 12
                },
                insets: {
                    top: 3.75,
                    right: 2.25,
                    bottom: 3.75,
                    left: 2.25
                },
                anchors: {
                    frame: {
                        x: 12,
                        y: 12
                    },
                    ink: {
                        x: 12,
                        y: 12
                    },
                    foreground: {
                        x: 12,
                        y: 12
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2002 3.75C20.1607 3.75011 21.7499 5.33935 21.75 7.2998V16.7002C21.7499 18.6607 20.1607 20.2499 18.2002 20.25H5.7998C3.83935 20.2499 2.25011 18.6607 2.25 16.7002V7.2998C2.25011 5.33935 3.83935 3.75011 5.7998 3.75H18.2002ZM12.75 18.75H18.2002C19.3322 18.7499 20.2499 17.8322 20.25 16.7002V10.75H12.75V18.75ZM3.75 16.7002C3.75011 17.8322 4.66778 18.7499 5.7998 18.75H11.25V10.75H3.75V16.7002ZM5.7998 5.25C4.66778 5.25011 3.75011 6.16778 3.75 7.2998V9.25H20.25V7.2998C20.2499 6.16778 19.3322 5.25011 18.2002 5.25H5.7998Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    NExk: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
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
        t.d(i, {}, {
            a: o
        })
    }),
    s3ib: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "thumb-down-fill-light-16",
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
                    x: 2.141602,
                    y: 1.474609,
                    width: 11.921204,
                    height: 13.015625
                },
                visualBounds: {
                    x: 2.141602,
                    y: 1.474609,
                    width: 11.921204,
                    height: 13.015625
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.141602,
                    y: 1.474609,
                    width: 11.921204,
                    height: 13.015625
                },
                center: {
                    x: 8.102204,
                    y: 7.982422
                },
                insets: {
                    top: 1.474609,
                    right: 1.937194,
                    bottom: 1.509766,
                    left: 2.141602
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.102204,
                        y: 7.982422
                    },
                    foreground: {
                        x: 8.102204,
                        y: 7.982422
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M12.0628 3.00488C12.0628 2.41732 11.8766 1.89506 11.5726 1.47558H12.0394C12.6129 1.47564 13.1335 1.65034 13.511 2.02832C13.8885 2.40635 14.0628 2.9271 14.0628 3.50098V7.83496C14.0628 8.40884 13.8885 8.92958 13.511 9.30762C13.1386 9.68044 12.6271 9.85559 12.0628 9.86035V3.00488Z" fill="currentColor"/> <path d="M6.86652 14.4814C6.76537 14.4655 6.6791 14.4305 6.6214 14.4033C6.53162 14.361 6.44169 14.3046 6.35675 14.2412C6.18654 14.1141 6.00659 13.9349 5.85284 13.7119C5.54074 13.2592 5.32176 12.5965 5.56085 11.8184L5.56183 11.8174L6.16632 9.86035H4.66534C3.00156 9.85992 1.79475 8.2761 2.23175 6.6709L3.13995 3.33691C3.43908 2.23874 4.43568 1.47584 5.57355 1.47558H9.63898C10.3557 1.52887 11.012 2.14056 11.012 3.00488V9.86035H10.6048C10.3818 9.86044 10.1747 9.98048 10.0638 10.1748L7.88214 13.998C7.80814 14.1277 7.69518 14.2761 7.50519 14.376C7.32672 14.4698 7.13771 14.4904 6.97198 14.4902L6.86652 14.4814Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    ozkq: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "thumb-down-fill-light-20",
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
                    x: 2.667999,
                    y: 1.835938,
                    width: 14.927582,
                    height: 16.285156
                },
                visualBounds: {
                    x: 2.667999,
                    y: 1.835938,
                    width: 14.927582,
                    height: 16.285156
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.667999,
                    y: 1.835938,
                    width: 14.927582,
                    height: 16.285156
                },
                center: {
                    x: 10.13179,
                    y: 9.978516
                },
                insets: {
                    top: 1.835938,
                    right: 2.404419,
                    bottom: 1.878906,
                    left: 2.667999
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.13179,
                        y: 9.978516
                    },
                    foreground: {
                        x: 10.13179,
                        y: 9.978516
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M15.0946 3.69726C15.0946 2.98324 14.8709 2.34903 14.5038 1.83691H15.0565C15.7755 1.83699 16.429 2.05581 16.9032 2.53027C17.3772 3.00467 17.5955 3.65796 17.5956 4.37695V9.79394C17.5956 10.5131 17.3774 11.1671 16.9032 11.6416C16.4374 12.1077 15.7986 12.3254 15.0946 12.333V3.69726Z" fill="currentColor"/> <path d="M8.58484 18.1104C8.45719 18.0902 8.34871 18.0458 8.27625 18.0117C8.16334 17.9586 8.05083 17.8881 7.94421 17.8086C7.73054 17.6492 7.50435 17.4251 7.3114 17.1455C6.9197 16.5779 6.64601 15.7465 6.94617 14.7705L7.70007 12.334H5.83386C3.74737 12.334 2.23263 10.3498 2.78113 8.33691L3.91687 4.16992C4.29221 2.79307 5.54264 1.83691 6.9696 1.83691H12.0087C12.9281 1.87825 13.7645 2.63752 13.7645 3.69726V12.335H13.2616C12.9855 12.335 12.7298 12.4826 12.5927 12.7227L9.86316 17.502C9.77011 17.6649 9.6281 17.8526 9.38855 17.9785C9.16393 18.0964 8.92626 18.1213 8.71863 18.1211L8.58484 18.1104Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    a5t5: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "thumb-down-light-16",
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
                    x: 2.141083,
                    y: 1.474609,
                    width: 11.766205,
                    height: 13.015625
                },
                visualBounds: {
                    x: 2.141083,
                    y: 1.474609,
                    width: 11.766205,
                    height: 13.015625
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.141083,
                    y: 1.474609,
                    width: 11.766205,
                    height: 13.015625
                },
                center: {
                    x: 8.024186,
                    y: 7.982422
                },
                insets: {
                    top: 1.474609,
                    right: 2.092712,
                    bottom: 1.509766,
                    left: 2.141083
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.024186,
                        y: 7.982422
                    },
                    foreground: {
                        x: 8.024186,
                        y: 7.982422
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.76862 1.47559H11.3819C12.7762 1.4758 13.9072 2.60566 13.9073 4V7.33301C13.9073 8.7274 12.7762 9.85818 11.3819 9.8584H10.7149C10.4913 9.85851 10.2849 9.97875 10.1739 10.1729L7.98932 13.9961L7.90631 14.1182C7.72576 14.3464 7.45211 14.4828 7.1612 14.4902L7.01471 14.4834L6.87018 14.4609C5.39574 14.1915 4.46709 12.6886 4.91413 11.2354L5.33795 9.8584H4.66706C3.00214 9.85839 1.79344 8.27519 2.23151 6.66895L3.13971 3.33594C3.43934 2.23746 4.43762 1.47559 5.57623 1.47559H8.73834C8.74155 1.47553 8.74489 1.47461 8.74811 1.47461C8.75495 1.47461 8.76178 1.47553 8.76862 1.47559ZM5.57623 2.52539C4.91112 2.52539 4.32843 2.97064 4.15338 3.6123L3.2442 6.94531C2.9883 7.88361 3.69448 8.80859 4.66706 8.80859H5.82331C6.28803 8.80911 6.62073 9.25879 6.48444 9.70312L5.91803 11.5439C5.65269 12.4063 6.21658 13.297 7.10163 13.4336L9.26178 9.65137C9.47571 9.2772 9.82229 9.00801 10.2227 8.88477V4C10.2227 3.15098 9.52992 2.53635 8.76862 2.52539H5.57623ZM10.7989 2.52539C11.0932 2.93032 11.2735 3.43274 11.2735 4V8.80859H11.3819C12.1963 8.80838 12.8565 8.1475 12.8565 7.33301V4C12.8564 3.18556 12.1963 2.5256 11.3819 2.52539H10.7989Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    }),
    z6xM: (function(e, i, t) {
        let o = (0, t("iJY0").a)({
            name: "thumb-down-light-20",
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
                    x: 2.667725,
                    y: 1.835938,
                    width: 14.72554,
                    height: 16.287109
                },
                visualBounds: {
                    x: 2.667725,
                    y: 1.835938,
                    width: 14.72554,
                    height: 16.287109
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.667725,
                    y: 1.835938,
                    width: 14.72554,
                    height: 16.287109
                },
                center: {
                    x: 10.030495,
                    y: 9.979493
                },
                insets: {
                    top: 1.835938,
                    right: 2.606735,
                    bottom: 1.876953,
                    left: 2.667725
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.030495,
                        y: 9.979493
                    },
                    foreground: {
                        x: 10.030495,
                        y: 9.979493
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2282 1.83594C15.9762 1.83596 17.3933 3.25301 17.3933 5.00098V9.16797C17.393 10.9157 15.976 12.333 14.2282 12.333H13.3952C13.1186 12.333 12.8625 12.4806 12.7253 12.7207L9.99483 17.5L9.89131 17.6533C9.66397 17.9411 9.31944 18.1137 8.95284 18.123L8.76729 18.1133L8.58663 18.0859C6.73856 17.7481 5.57497 15.8636 6.13546 14.042L6.66182 12.333H5.83467C3.74785 12.333 2.23204 10.3483 2.78096 8.33496L3.91768 4.16797C4.29327 2.79109 5.54419 1.83594 6.97139 1.83594H14.2282ZM6.97139 3.16602C6.14407 3.16602 5.41878 3.71951 5.20089 4.51758L4.06417 8.68457C3.74581 9.85188 4.62473 11.0029 5.83467 11.0029H7.27901C7.86657 11.003 8.28676 11.5712 8.11397 12.1328L7.40596 14.4336C7.07683 15.5042 7.77557 16.61 8.87276 16.7832L11.571 12.0615C11.8385 11.5934 12.2708 11.2533 12.7712 11.0977V5.00098C12.771 3.93548 11.8934 3.16602 10.9362 3.16602H6.97139ZM13.5173 3.16602C13.8803 3.67114 14.1012 4.29635 14.1013 5.00098V11.0029H14.2282C15.2415 11.0029 16.063 10.1812 16.0632 9.16797V5.00098C16.0632 3.98755 15.2417 3.16604 14.2282 3.16602H13.5173Z" fill="currentColor"/>'
        });
        t.d(i, {}, {
            a: o
        })
    })
};