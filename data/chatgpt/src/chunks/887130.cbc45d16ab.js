export const __rspack_esm_ids = [887130];
export const __webpack_modules__ = {
    hvYL: (function(e, t, r) {
        var o = r("uDr2");

        function i(e) {
            let t = a(e);
            if (!t) return null;
            let r = t.split(":"),
                i = r[0];
            if (!i) return null;
            let l = r[1] ?? i,
                h = (0, o.j)(i),
                d = (0, o.c)(i),
                c = (0, o.j)(l),
                s = (0, o.c)(l),
                C = {
                    startRow: Math.min(h, c),
                    startCol: Math.min(d, s),
                    endRow: Math.max(h, c),
                    endCol: Math.max(d, s)
                };
            return {
                ref: n(C),
                bounds: C
            }
        }

        function n(e) {
            let t = l(e.startRow, e.startCol),
                r = l(e.endRow, e.endCol);
            return t === r ? t : `${t}:${r}`
        }

        function l(e, t) {
            return `${(0,o.d)(t)}${e+1}`
        }

        function a(e) {
            let t = e.trim();
            return t ? (t.includes("!") ? t.slice(t.indexOf("!") + 1) : t).replace(/\$/g, "").toUpperCase() : null
        }
        r.d(t, {}, {
            a: function(e) {
                return {
                    rows: e.endRow - e.startRow + 1,
                    cols: e.endCol - e.startCol + 1
                }
            },
            b: n,
            c: l,
            d: a,
            e: i,
            f: function(e, t) {
                return e.startRow <= t.endRow && e.endRow >= t.startRow && e.startCol <= t.endCol && e.endCol >= t.startCol
            },
            g: function(e) {
                var t;
                let r = e.startsWith("=") ? e.slice(1) : e,
                    o = r.indexOf("!");
                if (-1 === o) {
                    let e = i(r);
                    return {
                        ref: e?.ref ?? r
                    }
                }
                let n = r.slice(0, o),
                    l = r.slice(o + 1),
                    a = i(l);
                return {
                    sheetName: (t = n).startsWith("'") && t.endsWith("'") && t.length >= 2 ? t.slice(1, -1).replace(/''/g, "'") : t,
                    ref: a?.ref ?? l
                }
            }
        })
    }),
    HZPe: (function(e, t, r) {
        let o = Object.freeze(Object.fromEntries(["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#800000", "#008000", "#000080", "#808000", "#800080", "#008080", "#C0C0C0", "#808080", "#9999FF", "#993366", "#FFFFCC", "#CCFFFF", "#660066", "#FF8080", "#0066CC", "#CCCCFF", "#000080", "#FF00FF", "#FFFF00", "#00FFFF", "#800080", "#800000", "#008080", "#0000FF", "#00CCFF", "#CCFFFF", "#CCFFCC", "#FFFF99", "#99CCFF", "#FF99CC", "#CC99FF", "#FFCC99", "#3366FF", "#33CCCC", "#99CC00", "#FFCC00", "#FF9900", "#FF6600", "#666699", "#969696", "#003366", "#339966", "#003300", "#333300", "#993300", "#993366", "#333399", "#333333", "#000000", "#FFFFFF"].map((e, t) => [`indexed:${t}`, e])));
        r.d(t, {}, {
            a: o,
            b: function(e) {
                if (!e?.length) return o;
                let t = {
                    ...o
                };
                for (let [r, o] of e.entries()) {
                    if (64 === r || 65 === r) continue;
                    let e = o.value.replace(/^#/, "");
                    t[`indexed:${r}`] = `#${8===e.length?e.slice(2):e}`
                }
                return Object.freeze(t)
            }
        })
    }),
    RnNU: (function(e, t, r) {
        r.r(t);
        var o = r("hvYL");
        let i = "CSV import",
            n = /\\|\/|\?|\*|\[|\]|:/g;

        function l(e) {
            return ((e ?? i).trim().replace(n, "").trim() || i).slice(0, 31)
        }
        r.d(t, {}, {
            planCsvImport: function(e, t) {
                let r = function(e) {
                        let t = e ?? ",";
                        if (1 !== t.length) throw Error(`CSV import separator must be a single character; received "${t}".`);
                        return t
                    }(t?.separator),
                    i = (0, o.g)(t?.anchor ?? "A1"),
                    n = i.sheetName?.trim(),
                    a = t?.sheetName?.trim();
                if (n && a && n !== a) throw Error(`CSV import specifies conflicting sheet names: "${a}" (options.sheetName) vs "${n}" (anchor).`);
                let h = l(n ?? a),
                    d = (0, o.e)(i.ref);
                if (!d) throw Error(`CSV import anchor must be an A1 cell reference; received "${t?.anchor??"A1"}".`);
                let {
                    bounds: c
                } = d;
                if (c.startRow !== c.endRow || c.startCol !== c.endCol) throw Error(`CSV import anchor must be a single cell reference; received "${t?.anchor??"A1"}".`);
                let s = function(e, t) {
                        if (!e.trim()) return [];
                        let r = function(e, t) {
                            let r = [],
                                o = [],
                                i = "",
                                n = !1,
                                l = () => {
                                    o.push(i), i = ""
                                },
                                a = () => {
                                    r.push(o), o = []
                                };
                            for (let r = 0; r < e.length; r += 1) {
                                let o = e[r] ?? "";
                                if (n) {
                                    if ('"' === o) {
                                        if ('"' === e[r + 1]) {
                                            i += '"', r += 1;
                                            continue
                                        }
                                        n = !1;
                                        continue
                                    }
                                    i += o;
                                    continue
                                }
                                if ('"' === o) {
                                    n = !0;
                                    continue
                                }
                                if (o === t) {
                                    l();
                                    continue
                                }
                                if ("\n" === o) {
                                    l(), a();
                                    continue
                                }
                                if ("\r" === o) {
                                    "\n" === e[r + 1] && (r += 1), l(), a();
                                    continue
                                }
                                i += o
                            }
                            for (l(), a(); r.length > 0;) {
                                let e = r[r.length - 1] ?? [];
                                if (!(e.length > 0 && e.every(e => "" === e))) break;
                                r.pop()
                            }
                            return r
                        }(e, t);
                        if (0 === r.length) return [];
                        let o = r.reduce((e, t) => Math.max(e, t.length), 0);
                        return 0 === o ? [] : r.map(e => {
                            if (e.length === o) return e;
                            let t = e.slice();
                            for (; t.length < o;) t.push("");
                            return t
                        })
                    }(e, r),
                    C = s.length,
                    u = C > 0 ? s[0]?.length ?? 0 : 0;
                if (0 === C || 0 === u) return {
                    sheetName: h,
                    values: []
                };
                let f = {
                    startRow: c.startRow,
                    startCol: c.startCol,
                    endRow: c.startRow + C - 1,
                    endCol: c.startCol + u - 1
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
    uDr2: (function(e, t, r) {
        var o = r("HZPe");
        let i = 4 / 3;

        function n(e) {
            return Math.ceil(e && e > 0 ? e : 7)
        }
        r.d(t, {}, {
            a: function(e) {
                let t = e.replace(/^0x/i, "");
                if (8 === t.length) {
                    let e = parseInt(t.slice(2, 4), 16),
                        r = parseInt(t.slice(4, 6), 16),
                        o = parseInt(t.slice(6, 8), 16);
                    return `rgba(${e}, ${r}, ${o}, 1.000)`
                }
                return 6 === t.length ? `#${t}` : "#ffffff"
            },
            b: function(e, t) {
                return null == e || e <= 0 ? 64 : e * n(t)
            },
            c: function(e) {
                let t = e.match(/[A-Z]+/);
                if (!t) return 0;
                let r = 0;
                for (let e of t[0]) r = 26 * r + (e.charCodeAt(0) - 64);
                return r - 1
            },
            d: function(e) {
                let t = "";
                for (e += 1; e;) {
                    let r = (e - 1) % 26;
                    t = String.fromCharCode(65 + r) + t, e = Math.floor((e - r) / 26)
                }
                return t
            },
            e: function(e) {
                if (null != e) return o.a[`indexed:${e}`]
            },
            f: function(e) {
                return 96 * (null == e || 0 === e ? 15 : e) / 72
            },
            g: function(e, t) {
                return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(100 * (e / n(t))) / 100
            },
            h: function(e) {
                return Number.isFinite(e ?? 0) ? (e ?? 0) * 72 / 96 : 15
            },
            i: function(e) {
                let t = e > 0 ? e : 11;
                return {
                    padLr: Math.max(2, Math.floor(.1 * t)),
                    padTb: Math.max(i, Math.floor(0 * t))
                }
            },
            j: function(e) {
                let t = e.match(/\d+/);
                return t ? parseInt(t[0], 10) - 1 : 0
            }
        })
    }),
    FRzY: (function(e, t, r) {
        r.d(t, {
            a: () => a
        });
        var o = r("ABep"),
            i = r("on57"),
            n = r("pZwg"),
            l = r("Ra0C");
        let a = e => {
            let {
                children: t,
                className: r,
                variant: a = "soft",
                color: h = "secondary",
                size: d = "sm",
                pill: c = n.a.pill
            } = e;
            return (0, o.jsx)("div", {
                className: (0, i.b)("Badge-GbHWPL", r),
                "data-color": h,
                "data-size": d,
                "data-pill": c ? "" : void 0,
                "data-variant": a,
                children: (0, l.a)(t)
            })
        }
    }),
    k6sM: (function(e, t, r) {
        var o = r("ABep");
        r.d(t, {}, {
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
    Y8CA: (function(e, t, r) {
        var o = r("BDAQ"),
            i = r("ASxG"),
            n = r("RmZI");
        let l = i.strictObject({
                arguments: i.record(i.string(), i.json()).optional(),
                name: n.a,
                type: i.literal("mcp_app_tool")
            }),
            a = i.discriminatedUnion("type", [l, o.e]);
        r.d(t, {}, {
            a: a
        })
    }),
    zmIi: (function(e, t, r) {
        r.d(t, {}, {
            a: "openai/sharedTexture/createReceiver",
            b: "openai/sharedTexture"
        })
    }),
    iYCA: (function(e, t, r) {
        r("QLGt"), e.exports = r("TQhG")
    }),
    UlFl: (function(e, t, r) {
        r("o1bS"), e.exports = r("ogbS")("Array", "findLast")
    }),
    wAJj: (function(e, t, r) {
        var o = r("OwA9"),
            i = r("EzAB"),
            n = r("fuV1"),
            l = r("f6Go"),
            a = function(e) {
                var t = 1 === e;
                return function(r, a, h) {
                    for (var d, c = n(r), s = i(c), C = l(s), u = o(a, h); C-- > 0;)
                        if (u(d = s[C], C, c)) switch (e) {
                            case 0:
                                return d;
                            case 1:
                                return C
                        }
                    return t ? -1 : void 0
                }
            };
        e.exports = {
            findLast: a(0),
            findLastIndex: a(1)
        }
    }),
    o1bS: (function(e, t, r) {
        var o = r("Ywrr"),
            i = r("wAJj").findLast,
            n = r("XnQF");
        o({
            target: "Array",
            proto: !0
        }, {
            findLast: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n("findLast")
    }),
    QLGt: (function(e, t, r) {
        r("o1bS")
    }),
    TQhG: (function(e, t, r) {
        e.exports = r("UlFl")
    }),
    AVhl: (function(e, t) {
        t.a = {
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
    D0Xf: (function(e, t) {
        t.a = {
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
    QgYZ: (function(e, t) {
        t.a = {
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
    D93Y: (function(e, t) {
        t.a = {
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
    NQ5z: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-exclamationmark-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-exclamationmark-light-16",
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
    eqtk: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-grid-2x2-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-grid-2x2-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                },
                composite: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                }
            }
        }
    }),
    XBQE: (function(e, t) {
        t.a = {
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
    M8bP: (function(e, t) {
        t.a = {
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
    zeD4: (function(e, t) {
        t.a = {
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
    qtVJ: (function(e, t) {
        t.a = {
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
    uSyn: (function(e, t) {
        t.a = {
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
    jgzY: (function(e, t) {
        t.a = {
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
    ZAR8: (function(e, t) {
        t.a = {
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
    WDau: (function(e, t) {
        t.a = {
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
                    x: -.953186,
                    y: -.972412,
                    overflows: !1
                },
                composite: {
                    x: -.953186,
                    y: -.972412,
                    overflows: !1
                }
            }
        }
    }),
    KX3M: (function(e, t) {
        t.a = {
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
    HE0d: (function(e, t) {
        t.a = {
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
    YXhi: (function(e, t) {
        t.a = {
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
                    x: 3e-5,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 3e-5,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    rIvc: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12"
            },
            href: "#codex-icon-list-circle-light-12",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                },
                composite: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                }
            }
        }
    }),
    fZ5t: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-list-circle-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                },
                composite: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                }
            }
        }
    }),
    Bif6: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-list-circle-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                },
                composite: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                }
            }
        }
    }),
    Ipg3: (function(e, t) {
        t.a = {
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
    xMIr: (function(e, t) {
        t.a = {
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
    XXap: (function(e, t) {
        t.a = {
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
    Amnz: (function(e, t) {
        t.a = {
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
    hRiC: (function(e, t) {
        t.a = {
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
    beqm: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
        r.d(t, {}, {
            a: o
        })
    }),
    Jf6u: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
        r.d(t, {}, {
            a: o
        })
    }),
    eTnA: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
        r.d(t, {}, {
            a: o
        })
    }),
    YGit: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
            name: "document-badge-magnifyingglass-light-20",
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
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                },
                visualBounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                },
                center: {
                    x: 10.59192,
                    y: 10.639283
                },
                insets: {
                    top: 2.251465,
                    right: 1.832763,
                    bottom: .9729,
                    left: 3.016602
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.59192,
                        y: 10.639283
                    },
                    foreground: {
                        x: 10.59192,
                        y: 10.639283
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5889 10.9995C15.4857 10.9996 17.0233 12.5373 17.0234 14.4341C17.0234 15.1455 16.806 15.8058 16.4355 16.354L17.9727 17.8921C18.2322 18.1518 18.2323 18.5729 17.9727 18.8325C17.713 19.0919 17.2919 19.092 17.0322 18.8325L15.4912 17.2925C14.9465 17.6557 14.2927 17.8686 13.5889 17.8687C11.6921 17.8685 10.1544 16.3309 10.1543 14.4341C10.1544 12.5373 11.6921 10.9996 13.5889 10.9995ZM13.5889 12.3296C12.4266 12.3297 11.4845 13.2718 11.4844 14.4341C11.4845 15.5963 12.4266 16.5394 13.5889 16.5396C14.7512 16.5395 15.6942 15.5964 15.6943 14.4341C15.6942 13.2718 14.7512 12.3297 13.5889 12.3296Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8125 2.25146C12.6518 2.25146 13.4572 2.58476 14.0508 3.17822L15.9199 5.04736C16.5134 5.6409 16.8467 6.4463 16.8467 7.28564V9.08154C16.8466 9.44878 16.5489 9.74658 16.1816 9.74658C15.8144 9.74658 15.5166 9.44878 15.5166 9.08154V8.58154H13.417C12.1292 8.58154 11.085 7.53726 11.085 6.24951V3.58154H6.18164C5.1682 3.58154 4.34668 4.40306 4.34668 5.4165V14.5835C4.34686 15.5968 5.16831 16.4185 6.18164 16.4185H8.18164C8.54891 16.4185 8.84668 16.7162 8.84668 17.0835C8.8465 17.4506 8.5488 17.7485 8.18164 17.7485H6.18164C4.43377 17.7485 3.01678 16.3313 3.0166 14.5835V5.4165C3.0166 3.66852 4.43366 2.25146 6.18164 2.25146H11.8125ZM12.415 6.24951C12.415 6.80272 12.8638 7.25146 13.417 7.25146H15.5146C15.5058 6.77722 15.3155 6.32384 14.9795 5.98779L13.1104 4.11865C12.9128 3.92113 12.6741 3.77509 12.415 3.68506V6.24951Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    e82N: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
        r.d(t, {}, {
            a: o
        })
    }),
    AH56: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
            name: "folder-badge-arrow-down-light-16",
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
                    x: 1.646484,
                    y: 2.14502,
                    width: 12.714844,
                    height: 12.453857
                },
                visualBounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 12.714844,
                    height: 12.453857
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 12.714844,
                    height: 12.453857
                },
                center: {
                    x: 8.003906,
                    y: 8.371949
                },
                insets: {
                    top: 2.14502,
                    right: 1.638672,
                    bottom: 1.401123,
                    left: 1.646484
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.003906,
                        y: 8.371949
                    },
                    foreground: {
                        x: 8.003906,
                        y: 8.371949
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M11.7139 9.28372C12.0038 9.28372 12.2393 9.51916 12.2393 9.80911V12.9478L13.3936 11.8003C13.5991 11.596 13.9313 11.5968 14.1357 11.8023C14.3398 12.0079 14.3391 12.3401 14.1338 12.5445L12.3184 14.3492C11.9835 14.682 11.4422 14.682 11.1074 14.3492L9.29492 12.5445C9.08953 12.34 9.08869 12.0078 9.29297 11.8023C9.49753 11.5968 9.83065 11.5958 10.0361 11.8003L11.1885 12.9468V9.80911C11.1885 9.5192 11.424 9.28379 11.7139 9.28372Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5459 2.14505C6.05385 2.14245 6.54952 2.30124 6.96094 2.59915L7.81738 3.22025C8.04621 3.38596 8.32196 3.47507 8.60449 3.47513H11.9697C13.2906 3.47513 14.3613 4.54586 14.3613 5.86673V6.56693C14.3611 7.04015 13.9782 7.42441 13.5049 7.42532L2.69727 7.44388V11.4781C2.69727 12.2215 3.30146 12.8234 4.04492 12.8199L6.49707 12.8081C6.78698 12.8067 7.02296 13.0407 7.02441 13.3306C7.02581 13.6205 6.7919 13.8565 6.50195 13.8579L4.0498 13.8697C2.72456 13.8759 1.64648 12.8034 1.64648 11.4781V4.54447C1.6465 3.22849 2.7104 2.15976 4.02637 2.15286L5.5459 2.14505ZM4.03125 3.20267C3.29315 3.20668 2.69728 3.80633 2.69727 4.54447V6.39407L13.3115 6.37454V5.86673C13.3115 5.12576 12.7107 4.52493 11.9697 4.52493H8.60449C8.10078 4.52488 7.61012 4.3653 7.20215 4.06986L6.34473 3.44974C6.11393 3.28268 5.8357 3.19336 5.55078 3.19486L4.03125 3.20267Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    mvHq: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
            name: "folder-badge-arrow-down-light-20",
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
                    x: 2.045898,
                    y: 2.67041,
                    width: 15.912109,
                    height: 15.678467
                },
                visualBounds: {
                    x: 2.045898,
                    y: 2.67041,
                    width: 15.912109,
                    height: 15.678467
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.045898,
                    y: 2.67041,
                    width: 15.912109,
                    height: 15.678467
                },
                center: {
                    x: 10.001953,
                    y: 10.509644
                },
                insets: {
                    top: 2.67041,
                    right: 2.041993,
                    bottom: 1.651123,
                    left: 2.045898
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.001953,
                        y: 10.509644
                    },
                    foreground: {
                        x: 10.001953,
                        y: 10.509644
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.6084 11.5161C14.9757 11.5161 15.2734 11.8149 15.2734 12.1821V16.2544L16.7021 14.8345C16.9625 14.5757 17.3836 14.5773 17.6426 14.8374C17.9014 15.0979 17.9001 15.5189 17.6396 15.7778L15.3691 18.0347C14.947 18.4539 14.2655 18.4535 13.8438 18.0337L11.5771 15.7778C11.3173 15.5189 11.3157 15.0976 11.5742 14.8374C11.8331 14.5773 12.2543 14.576 12.5146 14.8345L13.9434 16.2554V12.1812C13.9436 11.8142 14.2415 11.5163 14.6084 11.5161Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.94238 2.67042C7.57717 2.66909 8.19622 2.86887 8.70996 3.24171L9.77734 4.0171C10.0623 4.22397 10.4057 4.33546 10.7578 4.33546H14.96C16.6159 4.33547 17.958 5.67758 17.958 7.3335V8.1587C17.9579 8.75569 17.474 9.23931 16.877 9.23975L3.37598 9.24952V14.3394C3.37598 15.262 4.12523 16.01 5.04785 16.0083L8.24902 16.0015C8.61611 16.001 8.91432 16.2984 8.91504 16.6655C8.91573 17.0328 8.61825 17.3309 8.25098 17.3315L5.0498 17.3374C3.39172 17.3405 2.0459 15.9975 2.0459 14.3394V5.67237C2.04592 4.0189 3.38462 2.67778 5.03809 2.67432L6.94238 2.67042ZM5.04102 4.0044C4.121 4.00633 3.376 4.75236 3.37598 5.67237V7.91944L16.6279 7.91065V7.3335C16.6279 6.41212 15.8813 5.66555 14.96 5.66553H10.7578C10.125 5.66553 9.50818 5.46504 8.99609 5.09327L7.92871 4.31885C7.6428 4.11127 7.29863 3.99976 6.94531 4.00049L5.04102 4.0044Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    dDzd: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
            name: "folder-badge-checkmark-light-16",
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
                    x: 1.646484,
                    y: 2.14502,
                    width: 13.227051,
                    height: 12.302002
                },
                visualBounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 13.227051,
                    height: 12.302002
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.646484,
                    y: 2.14502,
                    width: 13.227051,
                    height: 12.302002
                },
                center: {
                    x: 8.260009,
                    y: 8.296021
                },
                insets: {
                    top: 2.14502,
                    right: 1.126465,
                    bottom: 1.552978,
                    left: 1.646484
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.260009,
                        y: 8.296021
                    },
                    foreground: {
                        x: 8.260009,
                        y: 8.296021
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M13.9053 9.78763C14.0605 9.54296 14.3851 9.47044 14.6299 9.62552C14.8742 9.78086 14.947 10.1054 14.792 10.3501C14.0412 11.5355 13.2872 12.9329 12.4131 14.1314C12.1236 14.5279 11.5534 14.5497 11.2275 14.2027L9.93066 12.8189C9.73252 12.6074 9.7429 12.275 9.9541 12.0767C10.1657 11.8784 10.498 11.8895 10.6963 12.1011L11.7598 13.2359C12.5222 12.1434 13.1562 10.9702 13.9053 9.78763Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5459 2.14505C6.05385 2.14245 6.54952 2.30124 6.96094 2.59915L7.81738 3.22025C8.04621 3.38596 8.32196 3.47507 8.60449 3.47513H11.9697C13.2906 3.47513 14.3613 4.54586 14.3613 5.86673V6.56693C14.3611 7.04015 13.9782 7.42441 13.5049 7.42532L2.69727 7.44388V11.4781C2.69727 12.2215 3.30146 12.8234 4.04492 12.8199L6.49707 12.8081C6.78698 12.8067 7.02296 13.0407 7.02441 13.3306C7.02581 13.6205 6.7919 13.8565 6.50195 13.8579L4.0498 13.8697C2.72456 13.8759 1.64648 12.8034 1.64648 11.4781V4.54447C1.6465 3.22849 2.7104 2.15976 4.02637 2.15286L5.5459 2.14505ZM4.03125 3.20267C3.29315 3.20668 2.69728 3.80633 2.69727 4.54447V6.39407L13.3115 6.37454V5.86673C13.3115 5.12576 12.7107 4.52493 11.9697 4.52493H8.60449C8.10078 4.52488 7.61012 4.3653 7.20215 4.06986L6.34473 3.44974C6.11393 3.28268 5.8357 3.19336 5.55078 3.19486L4.03125 3.20267Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    nWAt: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
            name: "folder-badge-checkmark-light-20",
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
                    x: 2.046143,
                    y: 2.67041,
                    width: 16.516846,
                    height: 15.224609
                },
                visualBounds: {
                    x: 2.046143,
                    y: 2.67041,
                    width: 16.516846,
                    height: 15.224609
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.046143,
                    y: 2.67041,
                    width: 16.516846,
                    height: 15.224609
                },
                center: {
                    x: 10.304566,
                    y: 10.282715
                },
                insets: {
                    top: 2.67041,
                    right: 1.437011,
                    bottom: 2.104981,
                    left: 2.046143
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.304566,
                        y: 10.282715
                    },
                    foreground: {
                        x: 10.304566,
                        y: 10.282715
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M17.3362 12.0308C17.5328 11.7209 17.944 11.6284 18.2542 11.8247C18.564 12.0211 18.656 12.4316 18.4602 12.7417C17.5107 14.2407 16.5578 16.0112 15.4456 17.5239C15.1029 17.9899 14.4301 18.0167 14.0452 17.606L12.3762 15.8247C12.1256 15.5568 12.1389 15.1363 12.4065 14.8853C12.6744 14.6345 13.0958 14.6479 13.3469 14.9155L14.6663 16.3237C15.6131 14.9654 16.4032 13.5037 17.3362 12.0308Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.94263 2.67042C7.57741 2.66909 8.19646 2.86887 8.71021 3.24171L9.77759 4.0171C10.0625 4.22397 10.4059 4.33546 10.7581 4.33546H14.9602C16.6161 4.33547 17.9582 5.67758 17.9583 7.3335V8.1587C17.9582 8.75569 17.4742 9.23931 16.8772 9.23975L3.37622 9.24952V14.3394C3.37622 15.262 4.12547 16.01 5.0481 16.0083L8.24927 16.0015C8.61636 16.001 8.91456 16.2984 8.91528 16.6655C8.91598 17.0328 8.61849 17.3309 8.25122 17.3315L5.05005 17.3374C3.39196 17.3405 2.04614 15.9975 2.04614 14.3394V5.67237C2.04616 4.0189 3.38486 2.67778 5.03833 2.67432L6.94263 2.67042ZM5.04126 4.0044C4.12124 4.00633 3.37624 4.75236 3.37622 5.67237V7.91944L16.6282 7.91065V7.3335C16.6282 6.41212 15.8816 5.66555 14.9602 5.66553H10.7581C10.1252 5.66553 9.50843 5.46504 8.99634 5.09327L7.92896 4.31885C7.64304 4.11127 7.29887 3.99976 6.94556 4.00049L5.04126 4.0044Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    XT2o: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
            name: "newspaper-light-20",
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
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                },
                visualBounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                },
                center: {
                    x: 10,
                    y: 9.999756
                },
                insets: {
                    top: 2.668213,
                    right: 1.834961,
                    bottom: 2.668701,
                    left: 1.834961
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10,
                        y: 9.999756
                    },
                    foreground: {
                        x: 10,
                        y: 9.999756
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.166 12.6682C14.5332 12.6682 14.8309 12.9661 14.8311 13.3333C14.8311 13.7005 14.5333 13.9983 14.166 13.9983H5.83301C5.46591 13.9981 5.16797 13.7004 5.16797 13.3333C5.1681 12.9662 5.46599 12.6684 5.83301 12.6682H14.166Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 6.0022C9.34724 6.00237 9.83105 6.48695 9.83105 7.08423V9.58423C9.83062 10.1811 9.34697 10.6651 8.75 10.6653H6.25C5.65302 10.6651 5.16841 10.1811 5.16797 9.58423V7.08423C5.16797 6.48694 5.65275 6.00236 6.25 6.0022H8.75ZM6.49805 9.33521H8.50098V7.33228H6.49805V9.33521Z" fill="currentColor"/> <path d="M14.166 9.33521C14.5333 9.33521 14.8311 9.63297 14.8311 10.0002C14.8309 10.3674 14.5332 10.6653 14.166 10.6653H12.083C11.716 10.6651 11.4181 10.3673 11.418 10.0002C11.418 9.6331 11.7159 9.3354 12.083 9.33521H14.166Z" fill="currentColor"/> <path d="M14.166 6.00122C14.5332 6.00122 14.8309 6.2991 14.8311 6.66626C14.8311 7.03353 14.5333 7.3313 14.166 7.3313H12.083C11.7159 7.3311 11.418 7.03341 11.418 6.66626C11.4181 6.29922 11.716 6.00142 12.083 6.00122H14.166Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.167 2.66821C16.8227 2.66839 18.1649 4.01058 18.165 5.66626V14.3333C18.165 15.9891 16.8228 17.3311 15.167 17.3313H4.83301C3.17722 17.3311 1.83496 15.9891 1.83496 14.3333V5.66626C1.83514 4.01058 3.17733 2.66839 4.83301 2.66821H15.167ZM4.83301 3.99829C3.91187 3.99847 3.16521 4.74512 3.16504 5.66626V14.3333C3.16504 15.2545 3.91176 16.001 4.83301 16.0012H15.167C16.0882 16.001 16.835 15.2545 16.835 14.3333V5.66626C16.8348 4.74512 16.0881 3.99847 15.167 3.99829H4.83301Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    CPgL: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
        r.d(t, {}, {
            a: o
        })
    }),
    fXSj: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
            name: "plugin-light-16",
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
                    x: 1.690399,
                    y: 1.510742,
                    width: 12.949051,
                    height: 12.976563
                },
                visualBounds: {
                    x: 1.690399,
                    y: 1.510742,
                    width: 12.949051,
                    height: 12.976563
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.690399,
                    y: 1.510742,
                    width: 12.949051,
                    height: 12.976563
                },
                center: {
                    x: 8.164925,
                    y: 7.999024
                },
                insets: {
                    top: 1.510742,
                    right: 1.36055,
                    bottom: 1.512695,
                    left: 1.690399
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.164925,
                        y: 7.999024
                    },
                    foreground: {
                        x: 8.164925,
                        y: 7.999024
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.41679 1.51074C12.5733 1.51096 14.6394 4.57801 14.6394 7.34961C14.6394 8.52839 14.1476 9.72713 13.2771 10.4199C12.813 10.7892 12.26 10.9971 11.6646 10.9971C11.1354 10.9971 10.5873 10.8339 10.0389 10.501C9.50074 10.9313 8.85071 11.2265 8.15242 11.2265C7.49323 11.2265 6.8561 10.9625 6.33183 10.418L6.32694 10.4131C6.32694 10.4131 6.32425 10.4086 6.32206 10.4062C6.31748 10.4014 6.31004 10.3947 6.30155 10.3857C6.28393 10.3671 6.25835 10.3394 6.22636 10.3057C6.1621 10.2379 6.07186 10.143 5.96854 10.0342C5.76137 9.81597 5.50175 9.54145 5.28886 9.31934C5.16019 9.18497 5.09614 9.01227 5.09614 8.8399C5.09614 8.51928 5.266 8.3828 5.48222 8.17383L4.63749 7.30371C4.53878 7.2019 4.48971 7.07008 4.48971 6.93835C4.48971 6.64772 4.72399 6.41267 5.01463 6.41267C5.15202 6.41267 5.28931 6.46608 5.39237 6.57227L6.23905 7.44531L7.68241 6.05566L6.83769 5.18555C6.73906 5.08366 6.68999 4.95175 6.68999 4.81997C6.68999 4.52929 6.92426 4.2946 7.21486 4.2946C7.35225 4.2946 7.48953 4.34797 7.59257 4.4541L8.43925 5.32715L8.62284 5.15137C8.75695 5.02229 8.92987 4.95821 9.10257 4.95821C9.28554 4.95821 9.46825 5.03013 9.60429 5.17285L10.6463 6.26855C11.1544 6.79165 11.3993 7.39924 11.3993 8.02241C11.3993 8.64501 11.1569 9.22184 10.7918 9.71875C11.1186 9.88248 11.4108 9.94729 11.6646 9.94729C12.022 9.94729 12.3448 9.81972 12.6228 9.59863C13.1973 9.1416 13.5887 8.2722 13.5887 7.34961C13.5886 5.0875 11.9254 2.56173 8.41679 2.56152C5.48587 2.56152 2.95281 4.8005 2.75565 7.62012C2.74564 7.76355 2.74069 7.90597 2.74069 8.04717C2.74069 11.0115 4.92146 13.4374 8.16483 13.4375C9.45511 13.4375 10.7311 13.1154 11.617 12.4297C11.7126 12.3557 11.8257 12.3198 11.9379 12.3198C12.2286 12.3198 12.463 12.5552 12.463 12.8443C12.463 13.0012 12.3931 13.1563 12.2596 13.2598C11.1304 14.1338 9.59973 14.4873 8.16483 14.4873C4.30366 14.4872 1.6904 11.5548 1.6904 8.04545C1.6904 7.88077 1.69615 7.71483 1.7078 7.54785C1.94623 4.13367 4.97962 1.51074 8.41679 1.51074ZM6.29276 8.85254L7.06425 9.66309C7.36743 9.97672 7.707 10.176 8.15304 10.176C9.14872 10.176 10.3494 9.02447 10.3494 8.02209C10.3494 7.68178 10.2189 7.33315 9.8914 6.99707L9.88651 6.99316L9.09159 6.1582L6.29276 8.85254Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    Dlm7: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
        r.d(t, {}, {
            a: o
        })
    }),
    psEc: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
        r.d(t, {}, {
            a: o
        })
    }),
    MBxi: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
                    width: 11.921143,
                    height: 13.015625
                },
                visualBounds: {
                    x: 2.141602,
                    y: 1.474609,
                    width: 11.921143,
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
                    width: 11.921143,
                    height: 13.015625
                },
                center: {
                    x: 8.102173,
                    y: 7.982422
                },
                insets: {
                    top: 1.474609,
                    right: 1.937255,
                    bottom: 1.509766,
                    left: 2.141602
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.102173,
                        y: 7.982422
                    },
                    foreground: {
                        x: 8.102173,
                        y: 7.982422
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M12.0628 3.00488C12.0628 2.41732 11.8766 1.89506 11.5726 1.47558H12.0394C12.6129 1.47564 13.1335 1.65034 13.511 2.02832C13.8885 2.40635 14.0628 2.9271 14.0628 3.50098V7.83496C14.0628 8.40884 13.8885 8.92958 13.511 9.30762C13.1386 9.68044 12.6271 9.85559 12.0628 9.86035V3.00488Z" fill="currentColor"/> <path d="M6.86652 14.4814C6.76537 14.4655 6.6791 14.4305 6.6214 14.4033C6.53162 14.361 6.44169 14.3046 6.35675 14.2412C6.18654 14.1141 6.00659 13.9349 5.85284 13.7119C5.54074 13.2592 5.32176 12.5965 5.56085 11.8184L5.56183 11.8174L6.16632 9.86035H4.66534C3.00156 9.85992 1.79475 8.2761 2.23175 6.6709L3.13995 3.33691C3.43908 2.23874 4.43568 1.47584 5.57355 1.47558H9.63898C10.3557 1.52887 11.012 2.14056 11.012 3.00488V9.86035H10.6048C10.3818 9.86044 10.1747 9.98048 10.0638 10.1748L7.88214 13.998C7.80814 14.1277 7.69518 14.2761 7.50519 14.376C7.32672 14.4698 7.13771 14.4904 6.97198 14.4902L6.86652 14.4814Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    DvIN: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
                    x: 2.667969,
                    y: 1.835938,
                    width: 14.927612,
                    height: 16.285156
                },
                visualBounds: {
                    x: 2.667969,
                    y: 1.835938,
                    width: 14.927612,
                    height: 16.285156
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.667969,
                    y: 1.835938,
                    width: 14.927612,
                    height: 16.285156
                },
                center: {
                    x: 10.131775,
                    y: 9.978516
                },
                insets: {
                    top: 1.835938,
                    right: 2.404419,
                    bottom: 1.878906,
                    left: 2.667969
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.131775,
                        y: 9.978516
                    },
                    foreground: {
                        x: 10.131775,
                        y: 9.978516
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M15.0946 3.69726C15.0946 2.98324 14.8709 2.34903 14.5038 1.83691H15.0565C15.7755 1.83699 16.429 2.05581 16.9032 2.53027C17.3772 3.00467 17.5955 3.65796 17.5956 4.37695V9.79394C17.5956 10.5131 17.3774 11.1671 16.9032 11.6416C16.4374 12.1077 15.7986 12.3254 15.0946 12.333V3.69726Z" fill="currentColor"/> <path d="M8.58484 18.1104C8.45719 18.0902 8.34871 18.0458 8.27625 18.0117C8.16334 17.9586 8.05083 17.8881 7.94421 17.8086C7.73054 17.6492 7.50435 17.4251 7.3114 17.1455C6.9197 16.5779 6.64601 15.7465 6.94617 14.7705L7.70007 12.334H5.83386C3.74737 12.334 2.23263 10.3498 2.78113 8.33691L3.91687 4.16992C4.29221 2.79307 5.54264 1.83691 6.9696 1.83691H12.0087C12.9281 1.87825 13.7645 2.63752 13.7645 3.69726V12.335H13.2616C12.9855 12.335 12.7298 12.4826 12.5927 12.7227L9.86316 17.502C9.77011 17.6649 9.6281 17.8526 9.38855 17.9785C9.16393 18.0964 8.92626 18.1213 8.71863 18.1211L8.58484 18.1104Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    yBOE: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
                    x: 2.141113,
                    y: 1.474609,
                    width: 11.766235,
                    height: 13.015625
                },
                visualBounds: {
                    x: 2.141113,
                    y: 1.474609,
                    width: 11.766235,
                    height: 13.015625
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.141113,
                    y: 1.474609,
                    width: 11.766235,
                    height: 13.015625
                },
                center: {
                    x: 8.024231,
                    y: 7.982422
                },
                insets: {
                    top: 1.474609,
                    right: 2.092652,
                    bottom: 1.509766,
                    left: 2.141113
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.024231,
                        y: 7.982422
                    },
                    foreground: {
                        x: 8.024231,
                        y: 7.982422
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.76862 1.47559H11.3819C12.7762 1.4758 13.9072 2.60566 13.9073 4V7.33301C13.9073 8.7274 12.7762 9.85818 11.3819 9.8584H10.7149C10.4913 9.85851 10.2849 9.97875 10.1739 10.1729L7.98932 13.9961L7.90631 14.1182C7.72576 14.3464 7.45211 14.4828 7.1612 14.4902L7.01471 14.4834L6.87018 14.4609C5.39574 14.1915 4.46709 12.6886 4.91413 11.2354L5.33795 9.8584H4.66706C3.00214 9.85839 1.79344 8.27519 2.23151 6.66895L3.13971 3.33594C3.43934 2.23746 4.43762 1.47559 5.57623 1.47559H8.73834C8.74155 1.47553 8.74489 1.47461 8.74811 1.47461C8.75495 1.47461 8.76178 1.47553 8.76862 1.47559ZM5.57623 2.52539C4.91112 2.52539 4.32843 2.97064 4.15338 3.6123L3.2442 6.94531C2.9883 7.88361 3.69448 8.80859 4.66706 8.80859H5.82331C6.28803 8.80911 6.62073 9.25879 6.48444 9.70312L5.91803 11.5439C5.65269 12.4063 6.21658 13.297 7.10163 13.4336L9.26178 9.65137C9.47571 9.2772 9.82229 9.00801 10.2227 8.88477V4C10.2227 3.15098 9.52992 2.53635 8.76862 2.52539H5.57623ZM10.7989 2.52539C11.0932 2.93032 11.2735 3.43274 11.2735 4V8.80859H11.3819C12.1963 8.80838 12.8565 8.1475 12.8565 7.33301V4C12.8564 3.18556 12.1963 2.5256 11.3819 2.52539H10.7989Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    QaMo: (function(e, t, r) {
        let o = (0, r("Cfzo").a)({
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
                    width: 14.725586,
                    height: 16.287109
                },
                visualBounds: {
                    x: 2.667725,
                    y: 1.835938,
                    width: 14.725586,
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
                    width: 14.725586,
                    height: 16.287109
                },
                center: {
                    x: 10.030518,
                    y: 9.979493
                },
                insets: {
                    top: 1.835938,
                    right: 2.606689,
                    bottom: 1.876953,
                    left: 2.667725
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.030518,
                        y: 9.979493
                    },
                    foreground: {
                        x: 10.030518,
                        y: 9.979493
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2282 1.83594C15.9762 1.83596 17.3933 3.25301 17.3933 5.00098V9.16797C17.393 10.9157 15.976 12.333 14.2282 12.333H13.3952C13.1186 12.333 12.8625 12.4806 12.7253 12.7207L9.99483 17.5L9.89131 17.6533C9.66397 17.9411 9.31944 18.1137 8.95284 18.123L8.76729 18.1133L8.58663 18.0859C6.73856 17.7481 5.57497 15.8636 6.13546 14.042L6.66182 12.333H5.83467C3.74785 12.333 2.23204 10.3483 2.78096 8.33496L3.91768 4.16797C4.29327 2.79109 5.54419 1.83594 6.97139 1.83594H14.2282ZM6.97139 3.16602C6.14407 3.16602 5.41878 3.71951 5.20089 4.51758L4.06417 8.68457C3.74581 9.85188 4.62473 11.0029 5.83467 11.0029H7.27901C7.86657 11.003 8.28676 11.5712 8.11397 12.1328L7.40596 14.4336C7.07683 15.5042 7.77557 16.61 8.87276 16.7832L11.571 12.0615C11.8385 11.5934 12.2708 11.2533 12.7712 11.0977V5.00098C12.771 3.93548 11.8934 3.16602 10.9362 3.16602H6.97139ZM13.5173 3.16602C13.8803 3.67114 14.1012 4.29635 14.1013 5.00098V11.0029H14.2282C15.2415 11.0029 16.063 10.1812 16.0632 9.16797V5.00098C16.0632 3.98755 15.2417 3.16604 14.2282 3.16602H13.5173Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: o
        })
    }),
    ty1V: (function(e, t, r) {
        var o = r("zd8w"),
            i = r("Fc3g"),
            n = r("yAzs"),
            l = r("zWxU"),
            a = r("lVCP"),
            h = r("Zu17"),
            d = r("k5JT"),
            c = r("WQq2"),
            s = r("duD4"),
            C = r("kUVq"),
            u = r("ABep"),
            f = Object.defineProperty,
            p = (e, t) => f(e, "name", {
                value: t,
                configurable: !0
            });

        function w(e, t) {
            return o.useReducer((e, r) => t[e][r] ?? e, e)
        }
        p(w, "useStateMachine");
        var g = "ScrollArea",
            [m, x] = (0, l.a)(g),
            [v, y] = m(g),
            b = o.forwardRef(p(function(e, t) {
                let {
                    __scopeScrollArea: r,
                    type: n = "hover",
                    dir: l,
                    scrollHideDelay: h = 600,
                    ...c
                } = e, [s, C] = o.useState(null), [f, p] = o.useState(null), [w, g] = o.useState(null), [m, x] = o.useState(null), [y, b] = o.useState(null), [L, F] = o.useState(0), [H, S] = o.useState(0), [k, V] = o.useState(!1), [B, M] = o.useState(!1), R = (0, a.b)(t, C), Z = (0, d.useDirection)(l);
                return (0, u.jsx)(v, {
                    scope: r,
                    type: n,
                    dir: Z,
                    scrollHideDelay: h,
                    scrollArea: s,
                    viewport: f,
                    onViewportChange: p,
                    content: w,
                    onContentChange: g,
                    scrollbarX: m,
                    onScrollbarXChange: x,
                    scrollbarXEnabled: k,
                    onScrollbarXEnabledChange: V,
                    scrollbarY: y,
                    onScrollbarYChange: b,
                    scrollbarYEnabled: B,
                    onScrollbarYEnabledChange: M,
                    onCornerWidthChange: F,
                    onCornerHeightChange: S,
                    children: (0, u.jsx)(i.a.div, {
                        dir: Z,
                        ...c,
                        ref: R,
                        style: {
                            position: "relative",
                            "--radix-scroll-area-corner-width": L + "px",
                            "--radix-scroll-area-corner-height": H + "px",
                            ...e.style
                        }
                    })
                })
            }, "ScrollArea")),
            L = o.forwardRef(p(function(e, t) {
                let {
                    __scopeScrollArea: r,
                    children: n,
                    nonce: l,
                    ...h
                } = e, d = y("ScrollAreaViewport", r), c = o.useRef(null), s = (0, a.b)(t, c, d.onViewportChange);
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)(F, {
                        nonce: l
                    }), (0, u.jsx)(i.a.div, {
                        "data-radix-scroll-area-viewport": "",
                        ...h,
                        ref: s,
                        style: {
                            overflowX: d.scrollbarXEnabled ? "scroll" : "hidden",
                            overflowY: d.scrollbarYEnabled ? "scroll" : "hidden",
                            ...e.style
                        },
                        children: (0, u.jsx)("div", {
                            ref: d.onContentChange,
                            style: {
                                minWidth: "100%",
                                display: "table"
                            },
                            children: n
                        })
                    })]
                })
            }, "ScrollAreaViewport")),
            F = o.memo(p(function({
                nonce: e
            }) {
                return (0, u.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: e
                })
            }, "ScrollAreaViewportStyle"), (e, t) => e.nonce === t.nonce),
            H = "ScrollAreaScrollbar",
            S = o.forwardRef(p(function(e, t) {
                let {
                    forceMount: r,
                    ...i
                } = e, n = y(H, e.__scopeScrollArea), {
                    onScrollbarXEnabledChange: l,
                    onScrollbarYEnabledChange: a
                } = n, h = "horizontal" === e.orientation;
                return o.useEffect(() => (h ? l(!0) : a(!0), () => {
                    h ? l(!1) : a(!1)
                }), [h, l, a]), "hover" === n.type ? (0, u.jsx)(k, {
                    ...i,
                    ref: t,
                    forceMount: r
                }) : "scroll" === n.type ? (0, u.jsx)(V, {
                    ...i,
                    ref: t,
                    forceMount: r
                }) : "auto" === n.type ? (0, u.jsx)(B, {
                    ...i,
                    ref: t,
                    forceMount: r
                }) : "always" === n.type ? (0, u.jsx)(M, {
                    ...i,
                    ref: t,
                    "data-state": "visible"
                }) : null
            }, "ScrollAreaScrollbar")),
            k = o.forwardRef(p(function(e, t) {
                let {
                    forceMount: r,
                    ...i
                } = e, l = y(H, e.__scopeScrollArea), [a, h] = o.useState(!1);
                return o.useEffect(() => {
                    let e = l.scrollArea,
                        t = 0;
                    if (e) {
                        let r = p(() => {
                                window.clearTimeout(t), h(!0)
                            }, "handlePointerEnter"),
                            o = p(() => {
                                t = window.setTimeout(() => h(!1), l.scrollHideDelay)
                            }, "handlePointerLeave");
                        return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", o), () => {
                            window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", o)
                        }
                    }
                }, [l.scrollArea, l.scrollHideDelay]), (0, u.jsx)(n.a, {
                    present: r || a,
                    children: (0, u.jsx)(B, {
                        "data-state": a ? "visible" : "hidden",
                        ...i,
                        ref: t
                    })
                })
            }, "ScrollAreaScrollbarHover")),
            V = o.forwardRef(p(function(e, t) {
                let {
                    forceMount: r,
                    ...i
                } = e, l = y(H, e.__scopeScrollArea), a = "horizontal" === e.orientation, h = U(() => c("SCROLL_END"), 100), [d, c] = w("hidden", {
                    hidden: {
                        SCROLL: "scrolling"
                    },
                    scrolling: {
                        SCROLL_END: "idle",
                        POINTER_ENTER: "interacting"
                    },
                    interacting: {
                        SCROLL: "interacting",
                        POINTER_LEAVE: "idle"
                    },
                    idle: {
                        HIDE: "hidden",
                        SCROLL: "scrolling",
                        POINTER_ENTER: "interacting"
                    }
                });
                return o.useEffect(() => {
                    if ("idle" === d) {
                        let e = window.setTimeout(() => c("HIDE"), l.scrollHideDelay);
                        return () => window.clearTimeout(e)
                    }
                }, [d, l.scrollHideDelay, c]), o.useEffect(() => {
                    let e = l.viewport,
                        t = a ? "scrollLeft" : "scrollTop";
                    if (e) {
                        let r = e[t],
                            o = p(() => {
                                let o = e[t];
                                r !== o && (c("SCROLL"), h()), r = o
                            }, "handleScroll");
                        return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
                    }
                }, [l.viewport, a, c, h]), (0, u.jsx)(n.a, {
                    present: r || "hidden" !== d,
                    children: (0, u.jsx)(M, {
                        "data-state": "hidden" === d ? "hidden" : "visible",
                        ...i,
                        ref: t,
                        onPointerEnter: (0, C.a)(e.onPointerEnter, () => c("POINTER_ENTER")),
                        onPointerLeave: (0, C.a)(e.onPointerLeave, () => c("POINTER_LEAVE"))
                    })
                })
            }, "ScrollAreaScrollbarScroll")),
            B = o.forwardRef(p(function(e, t) {
                let r = y(H, e.__scopeScrollArea),
                    {
                        forceMount: i,
                        ...l
                    } = e,
                    [a, h] = o.useState(!1),
                    d = "horizontal" === e.orientation,
                    c = U(() => {
                        if (r.viewport) {
                            let e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                                t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                            h(d ? e : t)
                        }
                    }, 10);
                return X(r.viewport, c), X(r.content, c), (0, u.jsx)(n.a, {
                    present: i || a,
                    children: (0, u.jsx)(M, {
                        "data-state": a ? "visible" : "hidden",
                        ...l,
                        ref: t
                    })
                })
            }, "ScrollAreaScrollbarAuto")),
            M = o.forwardRef(p(function(e, t) {
                let {
                    orientation: r = "vertical",
                    ...i
                } = e, n = y(H, e.__scopeScrollArea), l = o.useRef(null), a = o.useRef(0), [h, d] = o.useState({
                    content: 0,
                    viewport: 0,
                    scrollbar: {
                        size: 0,
                        paddingStart: 0,
                        paddingEnd: 0
                    }
                }), c = _(h.viewport, h.content), s = {
                    ...i,
                    sizes: h,
                    onSizesChange: d,
                    hasThumb: !!(c > 0 && c < 1),
                    onThumbChange: p(e => l.current = e, "onThumbChange"),
                    onThumbPointerUp: p(() => a.current = 0, "onThumbPointerUp"),
                    onThumbPointerDown: p(e => a.current = e, "onThumbPointerDown")
                };

                function C(e, t) {
                    return W(e, a.current, h, t)
                }
                return (p(C, "getScrollPosition"), "horizontal" === r) ? (0, u.jsx)(R, {
                    ...s,
                    ref: t,
                    onThumbPositionChange: () => {
                        if (n.viewport && l.current) {
                            let e = N(n.viewport.scrollLeft, h, n.dir);
                            l.current.style.transform = `translate3d(${e}px, 0, 0)`
                        }
                    },
                    onWheelScroll: e => {
                        n.viewport && (n.viewport.scrollLeft = e)
                    },
                    onDragScroll: e => {
                        n.viewport && (n.viewport.scrollLeft = C(e, n.dir))
                    }
                }) : "vertical" === r ? (0, u.jsx)(Z, {
                    ...s,
                    ref: t,
                    onThumbPositionChange: () => {
                        if (n.viewport && l.current) {
                            let e = N(n.viewport.scrollTop, h);
                            l.current.style.transform = `translate3d(0, ${e}px, 0)`
                        }
                    },
                    onWheelScroll: e => {
                        n.viewport && (n.viewport.scrollTop = e)
                    },
                    onDragScroll: e => {
                        n.viewport && (n.viewport.scrollTop = C(e))
                    }
                }) : null
            }, "ScrollAreaScrollbarVisible")),
            R = o.forwardRef(p(function(e, t) {
                let {
                    sizes: r,
                    onSizesChange: i,
                    ...n
                } = e, l = y(H, e.__scopeScrollArea), [h, d] = o.useState(), c = o.useRef(null), s = (0, a.b)(t, c, l.onScrollbarXChange);
                return o.useEffect(() => {
                    c.current && d(getComputedStyle(c.current))
                }, [c]), (0, u.jsx)(T, {
                    "data-orientation": "horizontal",
                    ...n,
                    ref: s,
                    sizes: r,
                    style: {
                        bottom: 0,
                        left: "rtl" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                        right: "ltr" === l.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                        "--radix-scroll-area-thumb-width": I(r) + "px",
                        ...e.style
                    },
                    onThumbPointerDown: t => e.onThumbPointerDown(t.x),
                    onDragScroll: t => e.onDragScroll(t.x),
                    onWheelScroll: (t, r) => {
                        if (l.viewport) {
                            let o = l.viewport.scrollLeft + t.deltaX;
                            e.onWheelScroll(o), Y(o, r) && t.preventDefault()
                        }
                    },
                    onResize: () => {
                        c.current && l.viewport && h && i({
                            content: l.viewport.scrollWidth,
                            viewport: l.viewport.offsetWidth,
                            scrollbar: {
                                size: c.current.clientWidth,
                                paddingStart: D(h.paddingLeft),
                                paddingEnd: D(h.paddingRight)
                            }
                        })
                    }
                })
            }, "ScrollAreaScrollbarX")),
            Z = o.forwardRef(p(function(e, t) {
                let {
                    sizes: r,
                    onSizesChange: i,
                    ...n
                } = e, l = y(H, e.__scopeScrollArea), [h, d] = o.useState(), c = o.useRef(null), s = (0, a.b)(t, c, l.onScrollbarYChange);
                return o.useEffect(() => {
                    c.current && d(getComputedStyle(c.current))
                }, [c]), (0, u.jsx)(T, {
                    "data-orientation": "vertical",
                    ...n,
                    ref: s,
                    sizes: r,
                    style: {
                        top: 0,
                        right: "ltr" === l.dir ? 0 : void 0,
                        left: "rtl" === l.dir ? 0 : void 0,
                        bottom: "var(--radix-scroll-area-corner-height)",
                        "--radix-scroll-area-thumb-height": I(r) + "px",
                        ...e.style
                    },
                    onThumbPointerDown: t => e.onThumbPointerDown(t.y),
                    onDragScroll: t => e.onDragScroll(t.y),
                    onWheelScroll: (t, r) => {
                        if (l.viewport) {
                            let o = l.viewport.scrollTop + t.deltaY;
                            e.onWheelScroll(o), Y(o, r) && t.preventDefault()
                        }
                    },
                    onResize: () => {
                        c.current && l.viewport && h && i({
                            content: l.viewport.scrollHeight,
                            viewport: l.viewport.offsetHeight,
                            scrollbar: {
                                size: c.current.clientHeight,
                                paddingStart: D(h.paddingTop),
                                paddingEnd: D(h.paddingBottom)
                            }
                        })
                    }
                })
            }, "ScrollAreaScrollbarY")),
            [E, A] = m(H),
            T = o.forwardRef(p(function(e, t) {
                let {
                    __scopeScrollArea: r,
                    sizes: n,
                    hasThumb: l,
                    onThumbChange: d,
                    onThumbPointerUp: c,
                    onThumbPointerDown: s,
                    onThumbPositionChange: f,
                    onDragScroll: w,
                    onWheelScroll: g,
                    onResize: m,
                    ...x
                } = e, v = y(H, r), [b, L] = o.useState(null), F = (0, a.b)(t, L), S = o.useRef(null), k = o.useRef(""), V = v.viewport, B = n.content - n.viewport, M = (0, h.a)(g), R = (0, h.a)(f), Z = U(m, 10);

                function A(e) {
                    S.current && w({
                        x: (e.clientX - S.current.left) * b.offsetWidth / S.current.width,
                        y: (e.clientY - S.current.top) * b.offsetHeight / S.current.height
                    })
                }
                return p(A, "handleDragScroll"), o.useEffect(() => {
                    let e = p(e => {
                        let t = e.target;
                        b?.contains(t) && M(e, B)
                    }, "handleWheel");
                    return document.addEventListener("wheel", e, {
                        passive: !1
                    }), () => document.removeEventListener("wheel", e, {
                        passive: !1
                    })
                }, [V, b, B, M]), o.useEffect(R, [n, R]), X(b, Z), X(v.content, Z), (0, u.jsx)(E, {
                    scope: r,
                    scrollbar: b,
                    hasThumb: l,
                    onThumbChange: (0, h.a)(d),
                    onThumbPointerUp: (0, h.a)(c),
                    onThumbPositionChange: R,
                    onThumbPointerDown: (0, h.a)(s),
                    children: (0, u.jsx)(i.a.div, {
                        ...x,
                        ref: F,
                        style: {
                            position: "absolute",
                            ...x.style
                        },
                        onPointerDown: (0, C.a)(e.onPointerDown, e => {
                            0 === e.button && (e.target.setPointerCapture(e.pointerId), S.current = b.getBoundingClientRect(), k.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), A(e))
                        }),
                        onPointerMove: (0, C.a)(e.onPointerMove, A),
                        onPointerUp: (0, C.a)(e.onPointerUp, e => {
                            let t = e.target;
                            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = k.current, v.viewport && (v.viewport.style.scrollBehavior = ""), S.current = null
                        })
                    })
                })
            }, "ScrollAreaScrollbarImpl")),
            z = "ScrollAreaThumb",
            P = o.forwardRef(p(function(e, t) {
                let {
                    forceMount: r,
                    ...o
                } = e, i = A(z, e.__scopeScrollArea);
                return (0, u.jsx)(n.a, {
                    present: r || i.hasThumb,
                    children: (0, u.jsx)(j, {
                        ref: t,
                        ...o
                    })
                })
            }, "ScrollAreaThumb")),
            j = o.forwardRef(p(function(e, t) {
                let {
                    __scopeScrollArea: r,
                    style: n,
                    ...l
                } = e, h = y(z, r), d = A(z, r), {
                    onThumbPositionChange: c
                } = d, s = (0, a.b)(t, d.onThumbChange), f = o.useRef(void 0), w = U(() => {
                    f.current && (f.current(), f.current = void 0)
                }, 100);
                return o.useEffect(() => {
                    let e = h.viewport;
                    if (e) {
                        let t = p(() => {
                            w(), f.current || (f.current = $(e, c), c())
                        }, "handleScroll");
                        return c(), e.addEventListener("scroll", t), () => {
                            e.removeEventListener("scroll", t), f.current?.(), f.current = void 0
                        }
                    }
                }, [h.viewport, w, c]), (0, u.jsx)(i.a.div, {
                    "data-state": d.hasThumb ? "visible" : "hidden",
                    ...l,
                    ref: s,
                    style: {
                        width: "var(--radix-scroll-area-thumb-width)",
                        height: "var(--radix-scroll-area-thumb-height)",
                        ...n
                    },
                    onPointerDownCapture: (0, C.a)(e.onPointerDownCapture, e => {
                        let t = e.target.getBoundingClientRect(),
                            r = d.scrollbar,
                            o = r.getBoundingClientRect(),
                            i = (e.clientX - t.left) * r.offsetWidth / o.width,
                            n = (e.clientY - t.top) * r.offsetHeight / o.height;
                        d.onThumbPointerDown({
                            x: i,
                            y: n
                        })
                    }),
                    onPointerUp: (0, C.a)(e.onPointerUp, d.onThumbPointerUp)
                })
            }, "ScrollAreaThumbImpl"));

        function D(e) {
            return e ? parseInt(e, 10) : 0
        }

        function _(e, t) {
            let r = e / t;
            return isNaN(r) ? 0 : r
        }

        function I(e) {
            let t = _(e.viewport, e.content),
                r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd;
            return Math.max((e.scrollbar.size - r) * t, 18)
        }

        function W(e, t, r, o = "ltr") {
            let i = I(r),
                n = t || i / 2,
                l = r.scrollbar.paddingStart + n,
                a = r.scrollbar.size - r.scrollbar.paddingEnd - (i - n),
                h = r.content - r.viewport;
            return O([l, a], "ltr" === o ? [0, h] : [-1 * h, 0])(e)
        }

        function N(e, t, r = "ltr") {
            let o = I(t),
                i = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
                n = t.scrollbar.size - i,
                l = t.content - t.viewport,
                a = (0, s.a)(e, "ltr" === r ? [0, l] : [-1 * l, 0]);
            return O([0, l], [0, n - o])(a)
        }

        function O(e, t) {
            return r => {
                if (e[0] === e[1] || t[0] === t[1]) return t[0];
                let o = (t[1] - t[0]) / (e[1] - e[0]);
                return t[0] + o * (r - e[0])
            }
        }

        function Y(e, t) {
            return e > 0 && e < t
        }
        p(D, "toInt"), p(_, "getThumbRatio"), p(I, "getThumbSize"), p(W, "getScrollPositionFromPointer"), p(N, "getThumbOffsetFromScroll"), p(O, "linearScale"), p(Y, "isScrollingWithinScrollbarBounds");
        var $ = p((e, t = () => {}) => {
            let r = {
                    left: e.scrollLeft,
                    top: e.scrollTop
                },
                o = 0;
            return (p(function i() {
                let n = {
                        left: e.scrollLeft,
                        top: e.scrollTop
                    },
                    l = r.left !== n.left,
                    a = r.top !== n.top;
                (l || a) && t(), r = n, o = window.requestAnimationFrame(i)
            }, "loop"))(), () => window.cancelAnimationFrame(o)
        }, "addUnlinkedScrollListener");

        function U(e, t) {
            let r = (0, h.a)(e),
                i = o.useRef(0);
            return o.useEffect(() => () => window.clearTimeout(i.current), []), o.useCallback(() => {
                window.clearTimeout(i.current), i.current = window.setTimeout(r, t)
            }, [r, t])
        }

        function X(e, t) {
            let r = (0, h.a)(t);
            (0, c.a)(() => {
                let t = 0;
                if (e) {
                    let o = new ResizeObserver(() => {
                        cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
                    });
                    return o.observe(e), () => {
                        window.cancelAnimationFrame(t), o.unobserve(e)
                    }
                }
            }, [e, r])
        }
        p(U, "useDebounceCallback"), p(X, "useResizeObserver"), r.d(t, {}, {
            a: b,
            b: S,
            c: P,
            d: L
        })
    })
};