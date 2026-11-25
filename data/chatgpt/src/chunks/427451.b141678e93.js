export const __rspack_esm_ids = [427451];
export const __webpack_modules__ = {
    vVGb: (function(a, b, c) {
        var d = c("uAAd");

        function e(a) {
            let b = h(a);
            if (!b) return null;
            let c = b.split(":"),
                e = c[0];
            if (!e) return null;
            let g = c[1] ?? e,
                i = (0, d.j)(e),
                j = (0, d.c)(e),
                k = (0, d.j)(g),
                l = (0, d.c)(g),
                m = {
                    startRow: Math.min(i, k),
                    startCol: Math.min(j, l),
                    endRow: Math.max(i, k),
                    endCol: Math.max(j, l)
                };
            return {
                ref: f(m),
                bounds: m
            }
        }

        function f(a) {
            let b = g(a.startRow, a.startCol),
                c = g(a.endRow, a.endCol);
            return b === c ? b : `${b}:${c}`
        }

        function g(a, b) {
            return `${(0,d.d)(b)}${a+1}`
        }

        function h(a) {
            let b = a.trim();
            return b ? (b.includes("!") ? b.slice(b.indexOf("!") + 1) : b).replace(/\$/g, "").toUpperCase() : null
        }
        c.d(b, {}, {
            a: function(a) {
                return {
                    rows: a.endRow - a.startRow + 1,
                    cols: a.endCol - a.startCol + 1
                }
            },
            b: f,
            c: g,
            d: h,
            e: e,
            f: function(a, b) {
                return a.startRow <= b.endRow && a.endRow >= b.startRow && a.startCol <= b.endCol && a.endCol >= b.startCol
            },
            g: function(a) {
                var b;
                let c = a.startsWith("=") ? a.slice(1) : a,
                    d = c.indexOf("!");
                if (-1 === d) {
                    let a = e(c);
                    return {
                        ref: a?.ref ?? c
                    }
                }
                let f = c.slice(0, d),
                    g = c.slice(d + 1),
                    h = e(g);
                return {
                    sheetName: (b = f).startsWith("'") && b.endsWith("'") && b.length >= 2 ? b.slice(1, -1).replace(/''/g, "'") : b,
                    ref: h?.ref ?? g
                }
            }
        })
    }),
    P0hF: (function(a, b, c) {
        let d = Object.freeze(Object.fromEntries(["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#800000", "#008000", "#000080", "#808000", "#800080", "#008080", "#C0C0C0", "#808080", "#9999FF", "#993366", "#FFFFCC", "#CCFFFF", "#660066", "#FF8080", "#0066CC", "#CCCCFF", "#000080", "#FF00FF", "#FFFF00", "#00FFFF", "#800080", "#800000", "#008080", "#0000FF", "#00CCFF", "#CCFFFF", "#CCFFCC", "#FFFF99", "#99CCFF", "#FF99CC", "#CC99FF", "#FFCC99", "#3366FF", "#33CCCC", "#99CC00", "#FFCC00", "#FF9900", "#FF6600", "#666699", "#969696", "#003366", "#339966", "#003300", "#333300", "#993300", "#993366", "#333399", "#333333", "#000000", "#FFFFFF"].map((a, b) => [`indexed:${b}`, a])));
        c.d(b, {}, {
            a: d,
            b: function(a) {
                if (!a?.length) return d;
                let b = {
                    ...d
                };
                for (let [c, d] of a.entries()) {
                    if (64 === c || 65 === c) continue;
                    let a = d.value.replace(/^#/, "");
                    b[`indexed:${c}`] = `#${8===a.length?a.slice(2):a}`
                }
                return Object.freeze(b)
            }
        })
    }),
    RqRN: (function(a, b, c) {
        c.r(b);
        var d = c("vVGb");
        let e = "CSV import",
            f = /\\|\/|\?|\*|\[|\]|:/g;

        function g(a) {
            return ((a ?? e).trim().replace(f, "").trim() || e).slice(0, 31)
        }
        c.d(b, {}, {
            planCsvImport: function(a, b) {
                let c = function(a) {
                        let b = a ?? ",";
                        if (1 !== b.length) throw Error(`CSV import separator must be a single character; received "${b}".`);
                        return b
                    }(b?.separator),
                    e = (0, d.g)(b?.anchor ?? "A1"),
                    f = e.sheetName?.trim(),
                    h = b?.sheetName?.trim();
                if (f && h && f !== h) throw Error(`CSV import specifies conflicting sheet names: "${h}" (options.sheetName) vs "${f}" (anchor).`);
                let i = g(f ?? h),
                    j = (0, d.e)(e.ref);
                if (!j) throw Error(`CSV import anchor must be an A1 cell reference; received "${b?.anchor??"A1"}".`);
                let {
                    bounds: k
                } = j;
                if (k.startRow !== k.endRow || k.startCol !== k.endCol) throw Error(`CSV import anchor must be a single cell reference; received "${b?.anchor??"A1"}".`);
                let l = function(a, b) {
                        if (!a.trim()) return [];
                        let c = function(a, b) {
                            let c = [],
                                d = [],
                                e = "",
                                f = !1,
                                g = () => {
                                    d.push(e), e = ""
                                },
                                h = () => {
                                    c.push(d), d = []
                                };
                            for (let c = 0; c < a.length; c += 1) {
                                let d = a[c] ?? "";
                                if (f) {
                                    if ('"' === d) {
                                        if ('"' === a[c + 1]) {
                                            e += '"', c += 1;
                                            continue
                                        }
                                        f = !1;
                                        continue
                                    }
                                    e += d;
                                    continue
                                }
                                if ('"' === d) {
                                    f = !0;
                                    continue
                                }
                                if (d === b) {
                                    g();
                                    continue
                                }
                                if ("\n" === d) {
                                    g(), h();
                                    continue
                                }
                                if ("\r" === d) {
                                    "\n" === a[c + 1] && (c += 1), g(), h();
                                    continue
                                }
                                e += d
                            }
                            for (g(), h(); c.length > 0;) {
                                let a = c[c.length - 1] ?? [];
                                if (!(a.length > 0 && a.every(a => "" === a))) break;
                                c.pop()
                            }
                            return c
                        }(a, b);
                        if (0 === c.length) return [];
                        let d = c.reduce((a, b) => Math.max(a, b.length), 0);
                        return 0 === d ? [] : c.map(a => {
                            if (a.length === d) return a;
                            let b = a.slice();
                            for (; b.length < d;) b.push("");
                            return b
                        })
                    }(a, c),
                    m = l.length,
                    n = m > 0 ? l[0]?.length ?? 0 : 0;
                if (0 === m || 0 === n) return {
                    sheetName: i,
                    values: []
                };
                let o = {
                    startRow: k.startRow,
                    startCol: k.startCol,
                    endRow: k.startRow + m - 1,
                    endCol: k.startCol + n - 1
                };
                return {
                    sheetName: i,
                    values: l,
                    rangeRef: (0, d.b)(o),
                    rect: {
                        r1: o.startRow,
                        c1: o.startCol,
                        r2: o.endRow,
                        c2: o.endCol
                    }
                }
            },
            sanitizeSheetName: g
        })
    }),
    uAAd: (function(a, b, c) {
        var d = c("P0hF");
        let e = 4 / 3;

        function f(a) {
            return Math.ceil(a && a > 0 ? a : 7)
        }
        c.d(b, {}, {
            a: function(a) {
                let b = a.replace(/^0x/i, "");
                if (8 === b.length) {
                    let a = parseInt(b.slice(2, 4), 16),
                        c = parseInt(b.slice(4, 6), 16),
                        d = parseInt(b.slice(6, 8), 16);
                    return `rgba(${a}, ${c}, ${d}, 1.000)`
                }
                return 6 === b.length ? `#${b}` : "#ffffff"
            },
            b: function(a, b) {
                return null == a || a <= 0 ? 64 : a * f(b)
            },
            c: function(a) {
                let b = a.match(/[A-Z]+/);
                if (!b) return 0;
                let c = 0;
                for (let a of b[0]) c = 26 * c + (a.charCodeAt(0) - 64);
                return c - 1
            },
            d: function(a) {
                let b = "";
                for (a += 1; a;) {
                    let c = (a - 1) % 26;
                    b = String.fromCharCode(65 + c) + b, a = Math.floor((a - c) / 26)
                }
                return b
            },
            e: function(a) {
                if (null != a) return d.a[`indexed:${a}`]
            },
            f: function(a) {
                return 96 * (null == a || 0 === a ? 15 : a) / 72
            },
            g: function(a, b) {
                return !Number.isFinite(a) || a <= 0 ? 0 : Math.round(100 * (a / f(b))) / 100
            },
            h: function(a) {
                return Number.isFinite(a ?? 0) ? (a ?? 0) * 72 / 96 : 15
            },
            i: function(a) {
                let b = a > 0 ? a : 11;
                return {
                    padLr: Math.max(2, Math.floor(.1 * b)),
                    padTb: Math.max(e, Math.floor(0 * b))
                }
            },
            j: function(a) {
                let b = a.match(/\d+/);
                return b ? parseInt(b[0], 10) - 1 : 0
            }
        })
    }),
    jG1o: (function(a, b, c) {
        c.d(b, {
            a: () => h
        });
        var d = c("ABep"),
            e = c("on57"),
            f = c("NvZw"),
            g = c("HJba");
        let h = a => {
            let {
                children: b,
                className: c,
                variant: h = "soft",
                color: i = "secondary",
                size: j = "sm",
                pill: k = f.a.pill
            } = a;
            return (0, d.jsx)("div", {
                className: (0, e.b)("Badge-RVjjlQ", c),
                "data-color": i,
                "data-size": j,
                "data-pill": k ? "" : void 0,
                "data-variant": h,
                children: (0, g.a)(b)
            })
        }
    }),
    Ccjy: (function(a, b, c) {
        var d = c("ABep");
        c.d(b, {}, {
            a: a => (0, d.jsx)("svg", {
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...a,
                children: (0, d.jsx)("path", {
                    d: "M21.6295 16.8937C21.5458 16.6147 21.1413 16.4194 21.1413 16.4194C21.105 16.3971 21.0687 16.3803 21.0408 16.3663C20.3684 16.0427 19.7741 15.6521 19.2747 15.2085C18.873 14.8514 18.527 14.4608 18.2508 14.0423C17.9132 13.5345 17.7542 13.1076 17.6872 12.8788C17.6482 12.7282 17.6565 12.6696 17.6872 12.5915C17.7151 12.5273 17.7905 12.4631 17.8295 12.4353C18.0555 12.2762 18.421 12.039 18.6442 11.894C18.8367 11.7684 19.0041 11.6596 19.1018 11.5927C19.417 11.3722 19.6319 11.149 19.7602 10.9063C19.9248 10.5938 19.9443 10.2478 19.816 9.91028C19.643 9.45272 19.2161 9.1793 18.6749 9.1793C18.5549 9.1793 18.4294 9.19324 18.3066 9.21835C17.9969 9.28531 17.7012 9.39693 17.4557 9.49176C17.4389 9.50013 17.4194 9.4862 17.4194 9.46665C17.4445 8.85567 17.4752 8.03538 17.4082 7.25418C17.3468 6.54831 17.2017 5.95404 16.9646 5.43509C16.7247 4.91336 16.4178 4.52834 16.1722 4.25213C15.9407 3.98708 15.5362 3.59648 14.9223 3.24493C14.0602 2.7511 13.0781 2.5 12.004 2.5C10.9326 2.5 9.9533 2.7511 9.0884 3.24215C8.44113 3.61322 8.02542 4.03172 7.83571 4.24934C7.59296 4.52834 7.28327 4.91336 7.04332 5.43231C6.80617 5.95124 6.66109 6.54552 6.59971 7.25139C6.53275 8.03262 6.56065 8.78871 6.58855 9.46389C6.58855 9.48339 6.56902 9.49738 6.55228 9.48901C6.30676 9.39412 6.01102 9.2825 5.70133 9.21554C5.57856 9.18767 5.45581 9.1765 5.33304 9.1765C4.79178 9.1765 4.36491 9.44991 4.19193 9.90747C4.06359 10.2478 4.08312 10.591 4.24773 10.9035C4.37607 11.1462 4.5909 11.3695 4.90617 11.5899C5.00382 11.6568 5.17123 11.7656 5.36374 11.8912C5.58415 12.0335 5.93848 12.2622 6.16447 12.4241C6.19237 12.4436 6.28723 12.5162 6.31792 12.5915C6.3514 12.6724 6.35698 12.731 6.31513 12.89C6.24538 13.1216 6.08635 13.5429 5.75434 14.0423C5.47812 14.4608 5.13217 14.8514 4.7304 15.2085C4.2282 15.6521 3.63392 16.0427 2.96432 16.3663C2.93364 16.3803 2.89458 16.3998 2.85272 16.4249C2.81087 16.45 2.45096 16.6286 2.37563 16.8937C2.26403 17.2843 2.55977 17.6498 2.86667 17.8478C3.3633 18.1687 3.96873 18.3417 4.32027 18.4338C4.41792 18.4589 4.5072 18.484 4.58811 18.5091C4.63833 18.5258 4.76388 18.5732 4.81968 18.643C4.88664 18.7295 4.89502 18.8383 4.92012 18.9611C4.95919 19.1675 5.04568 19.4214 5.29957 19.5972C5.57856 19.7897 5.93569 19.8037 6.38488 19.8204C6.8564 19.8372 7.4423 19.8623 8.11188 20.0827C8.42158 20.1859 8.70337 20.3589 9.02981 20.5598C9.71056 20.9782 10.5587 21.5 12.0067 21.5C13.4548 21.5 14.3085 20.9755 14.9949 20.557C15.3185 20.3589 15.5975 20.1859 15.9016 20.0855C16.5712 19.865 17.1571 19.8427 17.6286 19.8232C18.0778 19.8064 18.4349 19.7925 18.714 19.6C18.9874 19.413 19.0655 19.1313 19.1018 18.9192C19.1213 18.816 19.1352 18.7212 19.1938 18.643C19.244 18.5761 19.3612 18.5314 19.417 18.5119C19.5007 18.4868 19.59 18.4617 19.6932 18.4338C20.0448 18.3389 20.4828 18.2301 21.0185 17.926C21.6518 17.5633 21.6965 17.1141 21.6295 16.8937Z",
                    fill: "currentColor"
                })
            })
        })
    }),
    Y8CA: (function(a, b, c) {
        var d = c("BDAQ"),
            e = c("lAQI"),
            f = c("RmZI");
        let g = e.K({
                arguments: e.J(e.L(), e.x()).optional(),
                name: f.a,
                type: e.z("mcp_app_tool")
            }),
            h = e.m("type", [g, d.e]);
        c.d(b, {}, {
            a: h
        })
    }),
    iYCA: (function(a, b, c) {
        c("QLGt"), a.exports = c("TQhG")
    }),
    UlFl: (function(a, b, c) {
        c("o1bS"), a.exports = c("ogbS")("Array", "findLast")
    }),
    wAJj: (function(a, b, c) {
        var d = c("OwA9"),
            e = c("EzAB"),
            f = c("fuV1"),
            g = c("f6Go"),
            h = function(a) {
                var b = 1 === a;
                return function(c, h, i) {
                    for (var j, k = f(c), l = e(k), m = g(l), n = d(h, i); m-- > 0;)
                        if (n(j = l[m], m, k)) switch (a) {
                            case 0:
                                return j;
                            case 1:
                                return m
                        }
                    return b ? -1 : void 0
                }
            };
        a.exports = {
            findLast: h(0),
            findLastIndex: h(1)
        }
    }),
    o1bS: (function(a, b, c) {
        var d = c("Ywrr"),
            e = c("wAJj").findLast,
            f = c("XnQF");
        d({
            target: "Array",
            proto: !0
        }, {
            findLast: function(a) {
                return e(this, a, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), f("findLast")
    }),
    QLGt: (function(a, b, c) {
        c("o1bS")
    }),
    TQhG: (function(a, b, c) {
        a.exports = c("UlFl")
    }),
    K45M: (function(a, b) {
        b.a = {
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
    TPF8: (function(a, b) {
        b.a = {
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
    QYxa: (function(a, b) {
        b.a = {
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
    wyYO: (function(a, b) {
        b.a = {
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
    J8HL: (function(a, b) {
        b.a = {
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
    vjIa: (function(a, b) {
        b.a = {
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
    Tx7a: (function(a, b) {
        b.a = {
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
    YOu1: (function(a, b) {
        b.a = {
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
    tEDM: (function(a, b) {
        b.a = {
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
    tb6v: (function(a, b) {
        b.a = {
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
    aCoy: (function(a, b) {
        b.a = {
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
    gdTp: (function(a, b) {
        b.a = {
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
    Iqst: (function(a, b) {
        b.a = {
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
    Lanm: (function(a, b) {
        b.a = {
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
    dc1z: (function(a, b) {
        b.a = {
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
    xliv: (function(a, b) {
        b.a = {
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
    XVPZ: (function(a, b) {
        b.a = {
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
    jFe7O: (function(a, b) {
        b.a = {
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
    wAwp: (function(a, b) {
        b.a = {
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
    gk7i: (function(a, b) {
        b.a = {
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
    FEQE: (function(a, b) {
        b.a = {
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
    aMLE: (function(a, b) {
        b.a = {
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
    Nigd: (function(a, b) {
        b.a = {
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
    makY: (function(a, b) {
        b.a = {
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
                    x: 29e-6,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 29e-6,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    yn8e: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M14.7 12.54375c0.28125-0.3 0.75-0.3 1.05-0.01875l3.73125 3.6375 0.075 0.09375c0.39375 0.46875 0.39375 1.14375 0 1.6125l-0.075 0.09375-3.73125 3.6375c-0.3 0.28125-0.76875 0.28125-1.05-0.01875-0.3-0.28125-0.3-0.76875 0-1.05l2.775-2.71875h-11.90625c-0.4125 0-0.75-0.3375-0.75-0.75 0-0.4125 0.3375-0.75 0.75-0.75h11.90625l-2.775-2.71875c-0.3-0.28125-0.3-0.76875 0-1.05z" fill="currentColor"/> <path d="M8.25 2.53125c0.3-0.3 0.76875-0.28125 1.05 0 0.3 0.3 0.3 0.76875 0 1.06875l-2.775 2.71875h12.0375c0.4125 0 0.75 0.3375 0.75 0.75 0 0.4125-0.3375 0.75-0.75 0.75h-12.0375l2.775 2.7c0.3 0.3 0.3 0.76875 0 1.06875-0.28125 0.3-0.75 0.3-1.05 0.01875l-3.73125-3.65625-0.075-0.09375c-0.39375-0.45-0.39375-1.125 0-1.59375l0.075-0.09375 3.73125-3.6375z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    v8ia: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M9 1.475c0.8375 0 1.525 0.6875 1.525 1.525v1.4625h2.475c0.8375 0 1.525 0.675 1.525 1.525v6.6625c0 1.025-0.8375 1.8625-1.8625 1.8625h-2.5375c-0.0375 0-0.0875 0.0125-0.125 0.0125-0.05 0-0.0875-0.0125-0.125-0.0125h-3.75c-0.0375 0-0.0875 0.0125-0.125 0.0125-0.05 0-0.0875-0.0125-0.125-0.0125h-2.5375c-1.025 0-1.8625-0.8375-1.8625-1.8625v-3.6625c0-0.85 0.6875-1.525 1.525-1.525h2.475v-4.4625c0-0.8375 0.675-1.525 1.525-1.525h2zM10.525 13.4625h2.1375c0.45 0 0.8125-0.3625 0.8125-0.8125v-6.6625c0-0.2625-0.2125-0.475-0.475-0.475h-2.475v7.95zM7 2.525c-0.2625 0-0.475 0.2125-0.475 0.475v10.4625h2.95v-10.4625c0-0.2625-0.2125-0.475-0.475-0.475h-2zM3 8.5125c-0.2625 0-0.475 0.2125-0.475 0.475v3.6625c0 0.45 0.3625 0.8125 0.8125 0.8125h2.1375v-4.95h-2.475z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    KFWl: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M11.25 1.84375c1.0625 0 1.90625 0.84375 1.90625 1.90625v1.8125h3.09375c1.0625 0 1.92188 0.85938 1.92188 1.92188v8.32812c0 1.28125-1.04688 2.32813-2.34375 2.32813h-3.17188c-0.04687 0.01562-0.10937 0.03125-0.15625 0.03125-0.0625 0-0.10937-0.01563-0.15625-0.03125h-4.6875c-0.04687 0.01562-0.10937 0.03125-0.15625 0.03125-0.0625 0-0.10937-0.01563-0.15625-0.03125h-3.17187c-1.29688 0-2.34375-1.04688-2.34375-2.32813v-4.57812c0-1.0625 0.85937-1.92188 1.92187-1.92188h3.07813v-5.5625c0-1.0625 0.85937-1.90625 1.92187-1.90625h2.5zM13.15625 16.8125h2.67188c0.5625 0 1-0.45312 1-1v-8.32812c0-0.32813-0.25-0.59375-0.57813-0.59375h-3.09375v9.92187zM8.75 3.17188c-0.32812 0-0.59375 0.25-0.59375 0.57812v13.0625h3.67188v-13.0625c0-0.32812-0.26563-0.57812-0.57813-0.57812h-2.5zM3.75 10.64063c-0.32812 0-0.57812 0.26562-0.57812 0.59375v4.57812c0 0.54688 0.4375 1 1 1h2.65625v-6.17187h-3.07813z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    DOPW: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M16 2.775c2.85 0 5.2 0.975 6.875 2.625 1.65 1.675 2.55 3.95 2.675 6.425l0.25 4.9c0.025 0.25 0.075 0.475 0.2 0.7l1.65 3.2c0.325 0.625 0.425 1.425 0.075 2.125-0.375 0.75-1.125 1.15-2.075 1.15h-3.475c-0.45 3.025-3.05 5.325-6.175 5.325-3.125 0-5.725-2.3-6.175-5.325h-3.475c-0.95 0-1.7-0.4-2.075-1.15-0.35-0.7-0.25-1.5 0.075-2.125l1.65-3.2c0.125-0.225 0.175-0.45 0.2-0.7l0.25-4.9c0.125-2.475 1.025-4.75 2.675-6.425 1.675-1.65 4.025-2.625 6.875-2.625zM11.65 23.9c0.425 2.025 2.2 3.525 4.35 3.525 2.15 0 3.925-1.5 4.35-3.525h-8.7zM16 4.575c-2.425 0-4.3 0.825-5.6 2.1-1.275 1.3-2.05 3.15-2.175 5.25l-0.225 4.875c-0.025 0.5-0.175 1-0.4 1.45l-1.65 3.2c-0.125 0.25-0.1 0.425-0.05 0.5 0 0.025 0.025 0.05 0.075 0.075 0.05 0.025 0.15 0.075 0.375 0.075h19.3c0.225 0 0.325-0.05 0.375-0.075 0.05-0.025 0.075-0.05 0.075-0.075 0.05-0.075 0.075-0.25-0.05-0.5l-1.65-3.2c-0.225-0.45-0.375-0.95-0.4-1.45l-0.225-4.875c-0.125-2.1-0.875-3.95-2.175-5.25-1.3-1.275-3.175-2.1-5.6-2.1z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    XoAA: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M9.6 4.996875c0-0.328125-0.271875-0.6-0.6-0.6h-1.603125v5.203125h2.203125v-4.603125zM6.6 3c0-0.328125-0.271875-0.6-0.6-0.6h-3c-0.328125 0-0.6 0.271875-0.6 0.6v6.6h1.696875v-1.096875c0-0.225 0.178125-0.403125 0.403125-0.403125 0.225 0 0.403125 0.178125 0.403125 0.403125v1.096875h1.696875v-6.6zM7.396875 3.6h1.603125c0.76875 0 1.396875 0.628125 1.396875 1.396875v4.603125h0.6c0.225 0 0.403125 0.178125 0.403125 0.403125 0 0.215625-0.178125 0.39375-0.403125 0.39375h-9.99375c-0.225 0-0.403125-0.178125-0.403125-0.39375 0-0.225 0.178125-0.403125 0.403125-0.403125h0.6v-6.6c0-0.76875 0.628125-1.396875 1.396875-1.396875h3c0.76875 0 1.396875 0.628125 1.396875 1.396875v0.6z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    SbbS: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M12.8125 6.6625c0-0.4375-0.3625-0.8-0.8125-0.8h-2.1375v6.95h2.95v-6.15zM8.8125 4c0-0.45-0.3625-0.8125-0.8125-0.8125h-4c-0.45 0-0.8125 0.3625-0.8125 0.8125v8.8125h2.2875v-1.475c0-0.2875 0.2375-0.525 0.525-0.525 0.2875 0 0.525 0.2375 0.525 0.525v1.475h2.2875v-8.8125zM9.8625 4.8125h2.1375c1.025 0 1.8625 0.825 1.8625 1.85v6.15h0.8c0.2875 0 0.525 0.2375 0.525 0.525 0 0.2875-0.2375 0.525-0.525 0.525h-13.325c-0.3 0-0.525-0.2375-0.525-0.525 0-0.2875 0.225-0.525 0.525-0.525h0.8v-8.8125c0-1.025 0.8375-1.8625 1.8625-1.8625h4c1.025 0 1.8625 0.8375 1.8625 1.8625v0.8125z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    muzq: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M16 8.32813c0-0.54688-0.45312-1-1-1h-2.67187v8.67187h3.67187v-7.67187zM11 5c0-0.54687-0.45312-1-1-1h-5c-0.54687 0-1 0.45313-1 1v11h2.82813v-1.82812c0-0.375 0.29687-0.67188 0.67187-0.67188 0.35938 0 0.67188 0.29688 0.67188 0.67188v1.82812h2.82812v-11zM12.32813 6h2.67187c1.28125 0 2.32813 1.04688 2.32813 2.32813v7.67187h1c0.375 0 0.67187 0.29688 0.67187 0.67188 0 0.35937-0.29687 0.65625-0.67187 0.65625h-16.65625c-0.375 0-0.67188-0.29688-0.67188-0.65625 0-0.375 0.29688-0.67188 0.67188-0.67188h1v-11c0-1.28125 1.04687-2.32812 2.32812-2.32812h5c1.28125 0 2.32813 1.04687 2.32813 2.32812v1z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    id4L: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M5.4 7.55625c0.24375-0.3375 0.7125-0.4125 1.05-0.16875 0.3375 0.2625 0.4125 0.73125 0.16875 1.05l-2.68125 3.6375 2.6625 3.5625c0.2625 0.3375 0.1875 0.80625-0.15 1.05-0.31875 0.2625-0.7875 0.1875-1.05-0.15l-2.90625-3.88125c-0.2625-0.3375-0.2625-0.80625 0-1.14375l2.90625-3.95625z" fill="currentColor"/> <path d="M17.55 7.3875c0.3375-0.24375 0.80625-0.16875 1.05 0.16875l2.925 3.95625c0.24375 0.3375 0.24375 0.80625 0 1.14375l-2.925 3.88125c-0.24375 0.3375-0.7125 0.4125-1.05 0.15-0.3375-0.24375-0.39375-0.7125-0.15-1.05l2.6625-3.5625-2.6625-3.6375c-0.24375-0.31875-0.1875-0.7875 0.15-1.05z" fill="currentColor"/> <path d="M13.3125 7.66875c0.1875-0.375 0.6375-0.525 1.0125-0.3375 0.35625 0.1875 0.525 0.6375 0.3375 0.99375l-3.975 8.08125c-0.1875 0.375-0.6375 0.525-1.0125 0.3375-0.35625-0.16875-0.525-0.61875-0.3375-0.99375l3.975-8.08125z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    ZhIs: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M8.15625 6.6c1.134375 0 2.0625 0.91875 2.0625 2.0625 0 0.421875-0.13125 0.825-0.35625 1.153125l0.91875 0.91875c0.159375 0.159375 0.159375 0.4125 0 0.5625-0.15 0.159375-0.403125 0.159375-0.5625 0l-0.928125-0.91875c-0.328125 0.215625-0.7125 0.346875-1.134375 0.346875-1.14375 0-2.0625-0.928125-2.0625-2.0625 0-1.14375 0.91875-2.0625 2.0625-2.0625zM8.15625 7.396875c-0.703125 0-1.265625 0.571875-1.265625 1.265625 0 0.69375 0.5625 1.25625 1.265625 1.25625 0.69375 0 1.25625-0.5625 1.25625-1.25625 0-0.69375-0.5625-1.265625-1.25625-1.265625z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M6.928125 1.35c0.496875 0 0.984375 0.196875 1.340625 0.553125l1.115625 1.125c0.35625 0.346875 0.553125 0.825 0.5625 1.321875h0.05625v0.796875h-0.05625v0.09375c0 0.225-0.178125 0.403125-0.403125 0.403125-0.215625 0-0.403125-0.178125-0.403125-0.403125v-0.09375h-0.890625c-0.76875 0-1.396875-0.628125-1.396875-1.396875v-1.603125h-3.309375c-0.609375 0-1.096875 0.496875-1.096875 1.10625v5.49375c0 0.609375 0.4875 1.10625 1.096875 1.10625h1.003125c0.215625 0 0.39375 0.178125 0.39375 0.39375 0 0.225-0.178125 0.403125-0.39375 0.403125h-1.003125c-1.05 0-1.903125-0.853125-1.903125-1.903125v-5.49375c0-1.05 0.853125-1.903125 1.903125-1.903125h3.384375zM7.65 3.75c0 0.328125 0.271875 0.6 0.6 0.6h0.890625c0-0.28125-0.121875-0.553125-0.31875-0.759375l-1.125-1.115625c-0.009375-0.01875-0.028125-0.0375-0.046875-0.046875v1.321875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Loli: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M10.875 8.8c1.5125 0 2.7375 1.2375 2.7375 2.75 0 0.5625-0.175 1.1-0.475 1.5375l1.2375 1.225c0.2 0.2125 0.2 0.5375 0 0.75-0.2 0.2-0.5375 0.2-0.75 0l-1.225-1.2375c-0.4375 0.2875-0.9625 0.4625-1.525 0.4625-1.5125 0-2.75-1.225-2.75-2.7375 0-1.5125 1.2375-2.75 2.75-2.75zM10.875 9.8625c-0.9375 0-1.7 0.75-1.7 1.6875 0 0.925 0.7625 1.6875 1.7 1.6875 0.925 0 1.6875-0.7625 1.6875-1.6875 0-0.9375-0.7625-1.6875-1.6875-1.6875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.3625 1.8125c0.675 0 1.3125 0.2625 1.7875 0.7375l1.5 1.4875c0.475 0.475 0.7375 1.125 0.7375 1.7875v1.3375c0 0.2875-0.2375 0.525-0.525 0.525-0.2875 0-0.525-0.2375-0.525-0.525v-0.3h-1.5c-1.025 0-1.8625-0.8375-1.8625-1.8625v-2.1375h-4.1125c-0.8125 0-1.475 0.6625-1.475 1.475v7.325c0 0.8125 0.6625 1.475 1.475 1.475h1.5c0.2875 0 0.525 0.2375 0.525 0.525 0 0.3-0.2375 0.525-0.525 0.525h-1.5c-1.3875 0-2.525-1.125-2.525-2.525v-7.325c0-1.4 1.1375-2.525 2.525-2.525h4.5zM10.025 5c0 0.45 0.3625 0.8125 0.8125 0.8125h1.5c0-0.3875-0.1625-0.75-0.4375-1.025l-1.4875-1.5c-0.1125-0.1125-0.25-0.2-0.3875-0.275v1.9875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    mtPy: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M14.25 2.75625c0.99375 0 1.95 0.39375 2.6625 1.0875l2.23125 2.25c0.7125 0.69375 1.10625 1.65 1.10625 2.64375v8.75625c0 2.08125-1.6875 3.75-3.75 3.75h-9c-2.0625 0-3.75-1.66875-3.75-3.75v-10.9875c0-2.08125 1.6875-3.75 3.75-3.75h6.75zM7.5 4.25625c-1.2375 0-2.25 0.99375-2.25 2.25v10.9875c0 1.25625 1.0125 2.25 2.25 2.25h9c1.2375 0 2.25-0.99375 2.25-2.25v-7.2375h-2.75625c-1.51875 0-2.7375-1.2375-2.7375-2.75625v-3.24375h-5.75625zM14.75625 7.5c0 0.69375 0.5625 1.25625 1.2375 1.25625h2.75625v-0.01875c0-0.6-0.24375-1.1625-0.65625-1.59375l-2.25-2.23125c-0.3-0.3-0.675-0.50625-1.0875-0.6v3.1875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    jqnR: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M11.7125 9.2875c0.2875 0 0.525 0.2375 0.525 0.525v3.1375l1.15-1.15c0.2125-0.2 0.55-0.2 0.75 0 0.2 0.2125 0.2 0.5375 0 0.75l-1.825 1.8c-0.325 0.3375-0.875 0.3375-1.2 0l-1.8125-1.8c-0.2125-0.2125-0.2125-0.5375-0.0125-0.75 0.2125-0.2 0.5375-0.2 0.75 0l1.15 1.15v-3.1375c0-0.2875 0.2375-0.525 0.525-0.525z" fill="currentColor"/> <path d="M5.55 2.15c0.5-0.0125 1 0.15 1.4125 0.45l0.85 0.625c0.2375 0.1625 0.5125 0.25 0.7875 0.25h3.375c1.3125 0 2.3875 1.075 2.3875 2.3875v0.7c0 0.475-0.3875 0.8625-0.8625 0.8625l-10.8 0.025v4.025c0 0.75 0.6 1.35 1.35 1.35l2.45-0.0125c0.2875 0 0.525 0.225 0.525 0.5125 0 0.3-0.2375 0.5375-0.525 0.5375l-2.45 0.0125c-1.325 0-2.4-1.075-2.4-2.4v-6.925c0-1.325 1.0625-2.3875 2.375-2.4l1.525 0zM4.0375 3.2c-0.75 0.0125-1.3375 0.6125-1.3375 1.35v1.85l10.6125-0.025v-0.5125c0-0.7375-0.6-1.3375-1.3375-1.3375h-3.375c-0.5 0-0.9875-0.1625-1.4-0.45l-0.85-0.625c-0.2375-0.1625-0.5125-0.2625-0.8-0.25l-1.5125 0z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    jEDk: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M14.60938 11.51563c0.35937 0 0.65625 0.29687 0.65625 0.67187v4.0625l1.4375-1.42187c0.26562-0.25 0.6875-0.25 0.9375 0.01562 0.26562 0.25 0.26562 0.67188 0 0.9375l-2.26563 2.25c-0.42187 0.42188-1.10937 0.42188-1.53125 0l-2.26562-2.25c-0.26563-0.26562-0.26563-0.6875 0-0.9375 0.25-0.26562 0.67187-0.26562 0.9375-0.01562l1.42187 1.42187v-4.0625c0-0.375 0.29688-0.67187 0.67188-0.67187z" fill="currentColor"/> <path d="M6.9375 2.67188c0.64063 0 1.26563 0.20312 1.76563 0.5625l1.07812 0.78125c0.28125 0.20312 0.625 0.3125 0.96875 0.3125h4.20313c1.65625 0 3 1.34375 3 3v0.82812c0 0.59375-0.48438 1.07813-1.07813 1.07813l-13.5 0.01562v5.09375c0 0.92188 0.75 1.67188 1.67188 1.67188l3.20312-0.01563c0.35938 0 0.67188 0.29688 0.67188 0.67188 0 0.35937-0.29688 0.65625-0.67188 0.65625l-3.20312 0.01562c-1.65625 0-3-1.34375-3-3v-8.67187c0-1.65625 1.34375-3 2.98437-3l1.90625 0zM5.04688 4c-0.92188 0-1.67188 0.75-1.67188 1.67188v2.25l13.25-0.01563v-0.57812c0-0.92188-0.75-1.65625-1.67187-1.65625h-4.20313c-0.625 0-1.23437-0.20313-1.75-0.57813l-1.07812-0.78125c-0.28125-0.20312-0.625-0.3125-0.98438-0.3125l-1.89062 0z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Ledo: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M13.9 9.7875c0.1625-0.25 0.4875-0.3125 0.725-0.1625 0.25 0.15 0.325 0.475 0.1625 0.725-0.75 1.1875-1.5 2.5875-2.375 3.7875-0.2875 0.3875-0.8625 0.4125-1.1875 0.0625l-1.3-1.375c-0.1875-0.2125-0.1875-0.55 0.025-0.75 0.2125-0.2 0.55-0.1875 0.75 0.025l1.0625 1.1375c0.7625-1.1 1.3875-2.2625 2.1375-3.45z" fill="currentColor"/> <path d="M5.55 2.15c0.5-0.0125 1 0.15 1.4125 0.45l0.85 0.625c0.2375 0.1625 0.5125 0.25 0.7875 0.25h3.375c1.3125 0 2.3875 1.075 2.3875 2.3875v0.7c0 0.475-0.3875 0.8625-0.8625 0.8625l-10.8 0.025v4.025c0 0.75 0.6 1.35 1.35 1.35l2.45-0.0125c0.2875 0 0.525 0.225 0.525 0.5125 0 0.3-0.2375 0.5375-0.525 0.5375l-2.45 0.0125c-1.325 0-2.4-1.075-2.4-2.4v-6.925c0-1.325 1.0625-2.3875 2.375-2.4l1.525 0zM4.0375 3.2c-0.75 0.0125-1.3375 0.6125-1.3375 1.35v1.85l10.6125-0.025v-0.5125c0-0.7375-0.6-1.3375-1.3375-1.3375h-3.375c-0.5 0-0.9875-0.1625-1.4-0.45l-0.85-0.625c-0.2375-0.1625-0.5125-0.2625-0.8-0.25l-1.5125 0z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    HdXs: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M17.34375 12.03125c0.1875-0.3125 0.59375-0.40625 0.90625-0.20312 0.3125 0.1875 0.40625 0.60937 0.20313 0.90625-0.9375 1.5-1.89063 3.28125-3 4.79687-0.34375 0.45313-1.01563 0.48438-1.40625 0.07813l-1.67188-1.78125c-0.25-0.26563-0.23437-0.6875 0.03125-0.9375 0.26563-0.25 0.6875-0.25 0.9375 0.03125l1.32813 1.40625c0.9375-1.35938 1.73437-2.82813 2.67187-4.29688z" fill="currentColor"/> <path d="M6.9375 2.67188c0.64063 0 1.26563 0.20312 1.76563 0.5625l1.07812 0.78125c0.28125 0.20312 0.625 0.3125 0.98438 0.3125h4.1875c1.65625 0 3 1.34375 3 3v0.82812c0 0.59375-0.48438 1.07813-1.07813 1.07813l-13.5 0.01562v5.09375c0 0.92188 0.75 1.67188 1.67188 1.67188l3.20312-0.01563c0.35938 0 0.67188 0.29688 0.67188 0.67188 0 0.35937-0.29688 0.65625-0.67188 0.65625l-3.20312 0.01562c-1.65625 0-3-1.34375-3-3v-8.67187c0-1.65625 1.34375-3 2.98437-3l1.90625 0zM5.04688 4c-0.92188 0-1.67188 0.75-1.67188 1.67188v2.25l13.25-0.01563v-0.57812c0-0.92188-0.75-1.65625-1.67187-1.65625h-4.1875c-0.64063 0-1.25-0.20313-1.76563-0.57813l-1.07812-0.78125c-0.28125-0.20312-0.625-0.3125-0.96875-0.3125l-1.90625 0z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    MGdA: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M2.578125 2.503125c0.15-0.159375 0.403125-0.15 0.5625 0 0.15 0.159375 0.15 0.4125-0.009375 0.571875-0.759375 0.740625-1.228125 1.78125-1.228125 2.925 0 1.14375 0.46875 2.184375 1.228125 2.925 0.159375 0.159375 0.159375 0.4125 0.009375 0.571875-0.159375 0.15-0.4125 0.159375-0.5625 0-0.909375-0.890625-1.471875-2.128125-1.471875-3.496875 0-1.36875 0.5625-2.60625 1.471875-3.496875z" fill="currentColor"/> <path d="M8.86875 2.503125c0.159375-0.15 0.4125-0.159375 0.571875 0 0.9 0.890625 1.4625 2.128125 1.4625 3.496875 0 1.36875-0.5625 2.60625-1.4625 3.496875-0.159375 0.159375-0.4125 0.15-0.571875 0-0.15-0.159375-0.15-0.4125 0.009375-0.571875 0.759375-0.740625 1.228125-1.78125 1.228125-2.925 0-1.14375-0.46875-2.184375-1.228125-2.925-0.159375-0.159375-0.159375-0.4125-0.009375-0.571875z" fill="currentColor"/> <path d="M3.946875 3.965625c0.15-0.159375 0.403125-0.159375 0.5625-0.009375 0.159375 0.159375 0.159375 0.4125 0 0.571875-0.375 0.375-0.6 0.9-0.6 1.471875 0 0.571875 0.225 1.096875 0.6 1.471875 0.159375 0.159375 0.159375 0.4125 0 0.571875-0.159375 0.15-0.4125 0.15-0.5625-0.009375-0.525-0.515625-0.84375-1.2375-0.84375-2.034375 0-0.796875 0.31875-1.51875 0.84375-2.034375z" fill="currentColor"/> <path d="M7.5 3.95625c0.159375-0.15 0.4125-0.15 0.571875 0.009375 0.515625 0.515625 0.834375 1.2375 0.834375 2.034375 0 0.796875-0.31875 1.51875-0.834375 2.034375-0.159375 0.159375-0.4125 0.159375-0.571875 0.009375-0.15-0.159375-0.159375-0.4125 0-0.571875 0.375-0.375 0.609375-0.9 0.609375-1.471875 0-0.571875-0.234375-1.096875-0.609375-1.471875-0.159375-0.159375-0.15-0.4125 0-0.571875z" fill="currentColor"/> <path d="M6.009375 5.04375c0.525 0 0.946875 0.421875 0.946875 0.946875 0 0.525-0.421875 0.95625-0.946875 0.95625-0.525 0-0.95625-0.43125-0.95625-0.95625 0-0.525 0.43125-0.946875 0.95625-0.946875z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    PYYX: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M3.4375 3.3375c0.2125-0.2 0.5375-0.2 0.7375 0.0125 0.2125 0.2 0.2 0.5375 0 0.7375-1.0125 1-1.6375 2.3875-1.6375 3.9125 0 1.525 0.625 2.9125 1.6375 3.9125 0.2 0.2 0.2125 0.5375 0 0.7375-0.2 0.2125-0.525 0.2125-0.7375 0.0125-1.2-1.1875-1.95-2.8375-1.95-4.6625 0-1.825 0.75-3.475 1.95-4.6625z" fill="currentColor"/> <path d="M11.8375 3.35c0.2-0.2125 0.525-0.2125 0.7375-0.0125 1.2125 1.1875 1.9625 2.8375 1.9625 4.6625 0 1.825-0.75 3.475-1.9625 4.6625-0.2125 0.2-0.5375 0.2-0.7375-0.0125-0.2125-0.2-0.2-0.5375 0-0.7375 1.0125-1 1.65-2.3875 1.65-3.9125 0-1.525-0.6375-2.9125-1.65-3.9125-0.2-0.2-0.2125-0.5375 0-0.7375z" fill="currentColor"/> <path d="M5.2625 5.2875c0.2-0.2 0.5375-0.2125 0.7375 0 0.2125 0.2 0.2125 0.5375 0.0125 0.7375-0.5 0.5125-0.8125 1.2-0.8125 1.975 0 0.775 0.3125 1.4625 0.8125 1.975 0.2 0.2 0.2 0.5375-0.0125 0.7375-0.2 0.2125-0.5375 0.2-0.7375 0-0.6875-0.7-1.1125-1.6625-1.1125-2.7125 0-1.0625 0.425-2.0125 1.1125-2.7125z" fill="currentColor"/> <path d="M10.0125 5.2875c0.2-0.2125 0.5375-0.2 0.7375 0 0.6875 0.7 1.1125 1.65 1.1125 2.7125 0 1.05-0.425 2.0125-1.1125 2.7125-0.2 0.2-0.5375 0.2125-0.7375 0-0.2125-0.2-0.2125-0.5375-0.0125-0.7375 0.5-0.5125 0.8125-1.2 0.8125-1.975 0-0.775-0.3125-1.4625-0.8125-1.975-0.2-0.2-0.2-0.5375 0.0125-0.7375z" fill="currentColor"/> <path d="M8.0125 6.7375c0.6875 0 1.25 0.5625 1.25 1.25 0 0.7-0.5625 1.2625-1.25 1.2625-0.7 0-1.2625-0.5625-1.2625-1.2625 0-0.6875 0.5625-1.25 1.2625-1.25z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    VvM7: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M4.29688 4.17188c0.25-0.26563 0.67187-0.25 0.9375 0 0.25 0.26562 0.25 0.6875-0.01563 0.95312-1.26562 1.23438-2.04687 2.96875-2.04687 4.875 0 1.90625 0.78125 3.64063 2.04687 4.875 0.26563 0.26563 0.26563 0.6875 0.01563 0.9375-0.26563 0.26563-0.6875 0.28125-0.9375 0.01563-1.51563-1.48438-2.45313-3.54688-2.45313-5.82813 0-2.28125 0.9375-4.34375 2.45313-5.82812z" fill="currentColor"/> <path d="M14.78125 4.17188c0.26563-0.25 0.6875-0.26563 0.9375 0 1.51563 1.48437 2.45313 3.54687 2.45313 5.82812 0 2.28125-0.9375 4.34375-2.45313 5.82813-0.25 0.26562-0.67187 0.25-0.9375-0.01563-0.25-0.25-0.25-0.67187 0.01563-0.9375 1.26562-1.23437 2.04687-2.96875 2.04687-4.875 0-1.90625-0.78125-3.64062-2.04687-4.875-0.26563-0.26562-0.26563-0.6875-0.01563-0.95312z" fill="currentColor"/> <path d="M6.57813 6.60938c0.25-0.26563 0.67187-0.26563 0.9375-0.01563 0.25 0.26563 0.26562 0.6875 0 0.9375-0.625 0.64063-1.01563 1.51563-1.01563 2.46875 0 0.95313 0.39063 1.82813 1.01563 2.45313 0.26562 0.26562 0.25 0.6875 0 0.95312-0.26563 0.25-0.6875 0.25-0.9375-0.01562-0.875-0.85938-1.40625-2.0625-1.40625-3.39063 0-1.32812 0.53125-2.53125 1.40625-3.39062z" fill="currentColor"/> <path d="M12.5 6.59375c0.26563-0.25 0.6875-0.25 0.95313 0.01563 0.85937 0.85937 1.39062 2.0625 1.39062 3.39062 0 1.32813-0.53125 2.53125-1.39062 3.39063-0.26563 0.26562-0.6875 0.26562-0.95313 0.01562-0.25-0.26562-0.26562-0.6875 0-0.95312 0.625-0.625 1.01563-1.5 1.01563-2.45313 0-0.95312-0.39063-1.82812-1.01563-2.46875-0.25-0.25-0.25-0.67187 0-0.9375z" fill="currentColor"/> <path d="M10.01563 8.40625c0.875 0 1.57812 0.70313 1.57812 1.57813 0 0.875-0.70312 1.59375-1.57812 1.59375-0.875 0-1.59375-0.71875-1.59375-1.59375 0-0.875 0.71875-1.57813 1.59375-1.57813z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    dHLf: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M8.503125 7.603125c0.215625 0 0.39375 0.178125 0.39375 0.39375 0 0.225-0.178125 0.403125-0.39375 0.403125h-5.00625c-0.215625 0-0.39375-0.178125-0.39375-0.403125 0-0.215625 0.178125-0.39375 0.39375-0.39375h5.00625z" fill="currentColor"/> <path d="M5.25 3.6c0.35625 0 0.646875 0.290625 0.646875 0.646875v1.5c0 0.365625-0.290625 0.65625-0.646875 0.65625h-1.5c-0.35625 0-0.646875-0.290625-0.646875-0.65625v-1.5c0-0.35625 0.290625-0.646875 0.646875-0.646875h1.5zM3.9 5.596875h1.2v-1.2h-1.2v1.2z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.503125 5.596875c0.215625 0 0.39375 0.178125 0.39375 0.403125 0 0.225-0.178125 0.403125-0.39375 0.403125h-1.25625c-0.215625 0-0.39375-0.178125-0.39375-0.403125 0-0.225 0.178125-0.403125 0.39375-0.403125h1.25625z" fill="currentColor"/> <path d="M8.503125 3.6c0.215625 0 0.39375 0.178125 0.39375 0.403125 0 0.215625-0.178125 0.39375-0.39375 0.39375h-1.25625c-0.215625 0-0.39375-0.178125-0.39375-0.39375 0-0.225 0.178125-0.403125 0.39375-0.403125h1.25625z" fill="currentColor"/> <path d="M8.7 1.603125c1.21875 0 2.203125 0.984375 2.203125 2.19375v4.40625c0 1.209375-0.984375 2.19375-2.203125 2.19375h-5.4c-1.21875 0-2.203125-0.984375-2.203125-2.19375v-4.40625c0-1.209375 0.984375-2.19375 2.203125-2.19375h5.4zM3.3 2.4c-0.76875 0-1.396875 0.628125-1.396875 1.396875v4.40625c0 0.76875 0.628125 1.396875 1.396875 1.396875h5.4c0.76875 0 1.396875-0.628125 1.396875-1.396875v-4.40625c0-0.76875-0.628125-1.396875-1.396875-1.396875h-5.4z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    xwlH: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M11.3375 10.1375c0.2875 0 0.525 0.2375 0.525 0.525 0 0.3-0.2375 0.525-0.525 0.525h-6.675c-0.2875 0-0.525-0.225-0.525-0.525 0-0.2875 0.2375-0.525 0.525-0.525h6.675z" fill="currentColor"/> <path d="M7 4.8125c0.475 0 0.8625 0.375 0.8625 0.85v2c0 0.475-0.3875 0.8625-0.8625 0.8625h-2c-0.475 0-0.8625-0.3875-0.8625-0.8625v-2c0-0.475 0.3875-0.85 0.8625-0.85h2zM5.1875 7.475h1.625v-1.6125h-1.625v1.6125z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.3375 7.475c0.2875 0 0.525 0.2375 0.525 0.525 0 0.2875-0.2375 0.525-0.525 0.525h-1.675c-0.2875 0-0.525-0.2375-0.525-0.525 0-0.2875 0.2375-0.525 0.525-0.525h1.675z" fill="currentColor"/> <path d="M11.3375 4.8125c0.2875 0 0.525 0.2375 0.525 0.525 0 0.2875-0.2375 0.525-0.525 0.525h-1.675c-0.2875 0-0.525-0.2375-0.525-0.525 0-0.2875 0.2375-0.525 0.525-0.525h1.675z" fill="currentColor"/> <path d="M12.1375 2.1375c1.3125 0 2.3875 1.075 2.3875 2.4v6.925c0 1.325-1.075 2.4-2.3875 2.4h-8.275c-1.3125 0-2.3875-1.075-2.3875-2.4v-6.925c0-1.325 1.075-2.4 2.3875-2.4h8.275zM3.8625 3.1875c-0.7375 0-1.3375 0.6-1.3375 1.35v6.925c0 0.75 0.6 1.35 1.3375 1.35h8.275c0.7375 0 1.3375-0.6 1.3375-1.35v-6.925c0-0.75-0.6-1.35-1.3375-1.35h-8.275z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    MyAU: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23125 15.675c0.4875 0 0.9 0.13125 1.18125 0.4125 0.3 0.28125 0.45 0.675 0.45 1.18125 0 0.4875-0.15 0.88125-0.45 1.1625-0.28125 0.28125-0.69375 0.43125-1.18125 0.43125h-1.0875v1.725h-1.125v-4.9125h2.2125zM7.14375 17.83125h0.99375c0.20625 0 0.35625-0.075 0.45-0.16875 0.09375-0.075 0.15-0.225 0.15-0.39375 0-0.1875-0.05625-0.31875-0.15-0.4125-0.09375-0.09375-0.24375-0.15-0.45-0.15h-0.99375v1.125z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.16875 15.675c0.7125 0 1.35 0.20625 1.78125 0.61875 0.45 0.43125 0.7125 1.05 0.7125 1.8375 0 0.80625-0.24375 1.425-0.69375 1.8375-0.43125 0.4125-1.05 0.61875-1.78125 0.61875h-1.74375v-4.9125h1.725zM11.56875 19.55625h0.525c0.43125 0 0.7875-0.075 1.03125-0.3 0.24375-0.20625 0.39375-0.5625 0.39375-1.125 0-0.5625-0.15-0.91875-0.39375-1.125-0.24375-0.20625-0.6-0.3-1.03125-0.3h-0.525v2.85z" fill="currentColor"/> <path d="M18.99375 16.70625h-2.53125v0.975h2.19375v1.03125h-2.19375v1.875h-1.125v-4.9125h3.65625v1.03125z" fill="currentColor"/> <path d="M3.75 11.00625v-4.5c0-2.08125 1.6875-3.75 3.75-3.75h6.75c0.99375 0 1.95 0.39375 2.6625 1.0875l2.23125 2.25c0.7125 0.69375 1.10625 1.65 1.10625 2.64375v2.26875c0 0.4125-0.3375 0.75-0.75 0.75-0.4125 0-0.75-0.3375-0.75-0.75v-2.26875c0-0.6-0.24375-1.1625-0.65625-1.59375l-2.25-2.23125c-0.4125-0.43125-0.99375-0.65625-1.59375-0.65625h-6.75c-1.2375 0-2.25 0.99375-2.25 2.25v4.5c0 0.4125-0.3375 0.75-0.75 0.75-0.4125 0-0.75-0.3375-0.75-0.75z" fill="currentColor"/> <path d="M13.25625 7.5v-3.99375h1.5v3.99375c0 0.69375 0.5625 1.25625 1.2375 1.25625h3.50625v1.5h-3.50625c-1.51875 0-2.7375-1.2375-2.7375-2.75625z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    wTNq: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
                    x: 1.329102,
                    y: .849609,
                    width: 9.571289,
                    height: 9.821289
                },
                visualBounds: {
                    x: 1.329102,
                    y: .849609,
                    width: 9.571289,
                    height: 9.821289
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.329102,
                    y: .849609,
                    width: 9.571289,
                    height: 9.821289
                },
                center: {
                    x: 6.114747,
                    y: 5.760254
                },
                insets: {
                    top: .849609,
                    right: 1.099609,
                    bottom: 1.329102,
                    left: 1.329102
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6.114747,
                        y: 5.760254
                    },
                    foreground: {
                        x: 6.114747,
                        y: 5.760254
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M3.234375 1.33125c0.084375 0 0.178125 0.009375 0.271875 0.0375 0.215625 0.05625 0.459375 0.225 0.590625 0.4125l1.0875 1.659375c0.1125 0.196875 0.1875 0.421875 0.1875 0.65625 0 0.24375-0.09375 0.4875-0.3 0.69375l-0.253125 0.253125c-0.065625 0.065625-0.13125 0.159375-0.13125 0.253125 0 0.05625 0.01875 0.13125 0.084375 0.225 0.459375 0.646875 1.059375 1.246875 1.70625 1.70625 0.09375 0.065625 0.16875 0.084375 0.225 0.084375 0.09375 0 0.1875-0.065625 0.253125-0.13125l0.253125-0.253125c0.20625-0.20625 0.45-0.3 0.69375-0.3 0.234375 0 0.459375 0.075 0.65625 0.1875l1.659375 1.0875 0.028125 0.028125 0.13125 0.121875c0.1875 0.196875 0.290625 0.440625 0.290625 0.7125 0 0.121875-0.01875 0.234375-0.046875 0.3375-0.103125 0.35625-0.346875 0.665625-0.5625 0.88125-0.45 0.459375-1.0125 0.684375-1.734375 0.684375-1.678125 0-3.3-1.05-4.6125-2.371875l-0.009375-0.009375c-1.321875-1.3125-2.371875-2.934375-2.371875-4.6125 0-0.721875 0.225-1.284375 0.684375-1.734375 0.31875-0.309375 0.75-0.609375 1.21875-0.609375zM2.128125 3.675c0 1.359375 0.8625 2.784375 2.146875 4.05l0 0 0 0 0 0 0.24375 0.234375c1.2 1.153125 2.53125 1.9125 3.80625 1.9125 0.534375 0 0.88125-0.159375 1.1625-0.45 0.15-0.15 0.384375-0.43125 0.384375-0.65625 0-0.09375-0.046875-0.15-0.1125-0.20625l-1.603125-1.05c-0.065625-0.0375-0.16875-0.084375-0.253125-0.084375-0.0375 0-0.075 0.009375-0.13125 0.065625l-0.253125 0.253125c-0.225 0.225-0.50625 0.365625-0.815625 0.365625-0.24375 0-0.46875-0.084375-0.684375-0.234375-0.721875-0.50625-1.3875-1.171875-1.89375-1.89375-0.15-0.215625-0.234375-0.440625-0.234375-0.684375 0-0.0375 0-0.084375 0.009375-0.13125 0.0375-0.271875 0.178125-0.50625 0.35625-0.684375l0.253125-0.253125c0.05625-0.05625 0.065625-0.103125 0.065625-0.13125 0-0.065625-0.028125-0.13125-0.046875-0.178125l-0.046875-0.084375-1.040625-1.59375c-0.05625-0.065625-0.1125-0.09375-0.15-0.103125-0.009375-0.009375-0.0375-0.009375-0.05625-0.009375-0.028125 0-0.065625 0.009375-0.1125 0.01875-0.16875 0.046875-0.375 0.1875-0.553125 0.365625-0.28125 0.28125-0.440625 0.628125-0.440625 1.1625z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.746875 0.853125c0.225 0 0.403125 0.178125 0.403125 0.39375v3.253125c0 0.225-0.178125 0.403125-0.403125 0.403125-0.215625 0-0.39375-0.178125-0.39375-0.403125v-3.253125c0-0.215625 0.178125-0.39375 0.39375-0.39375z" fill="currentColor"/> <path d="M7.003125 1.846875c0.215625 0 0.39375 0.178125 0.39375 0.403125v1.246875c0 0.225-0.178125 0.403125-0.39375 0.403125-0.225 0-0.403125-0.178125-0.403125-0.403125v-1.246875c0-0.225 0.178125-0.403125 0.403125-0.403125z" fill="currentColor"/> <path d="M10.5 1.846875c0.225 0 0.403125 0.178125 0.403125 0.403125v1.246875c0 0.225-0.178125 0.403125-0.403125 0.403125-0.225 0-0.403125-0.178125-0.403125-0.403125v-1.246875c0-0.225 0.178125-0.403125 0.403125-0.403125z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    wrbz: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
                    x: 1.837891,
                    y: 1.199951,
                    width: 12.628906,
                    height: 12.960938
                },
                visualBounds: {
                    x: 1.837891,
                    y: 1.199951,
                    width: 12.628906,
                    height: 12.960938
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.837891,
                    y: 1.199951,
                    width: 12.628906,
                    height: 12.960938
                },
                center: {
                    x: 8.152344,
                    y: 7.68042
                },
                insets: {
                    top: 1.199951,
                    right: 1.533203,
                    bottom: 1.839111,
                    left: 1.837891
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.152344,
                        y: 7.68042
                    },
                    foreground: {
                        x: 8.152344,
                        y: 7.68042
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M4.3125 1.8375c0.425 0 0.8 0.2 1.0625 0.5375l0.025 0.0375 1.45 2.2125c0.1375 0.25 0.25 0.5375 0.25 0.8375 0 0.3125-0.125 0.6125-0.375 0.875l-0.35 0.35c-0.1 0.1-0.1875 0.225-0.1875 0.375 0 0.0875 0.025 0.2 0.125 0.3375 0.6125 0.8625 1.425 1.675 2.2875 2.2875 0.1375 0.1 0.25 0.125 0.3375 0.125 0.0125 0 0.025 0 0.0375 0 0.1-0.0125 0.2125-0.0625 0.3375-0.1875l0.35-0.35c0.25-0.2625 0.5625-0.375 0.875-0.375 0.3 0 0.5875 0.1 0.8375 0.25l0.025 0.0125 2.1875 1.4375 0.0375 0.025 0.0875 0.075c0.2875 0.2625 0.45 0.6 0.45 0.9875 0 0.6-0.4 1.175-0.8 1.5875-0.5875 0.5875-1.3125 0.8875-2.2625 0.8875-2.2125 0-4.35-1.3875-6.1125-3.15l0 0c-1.7625-1.7625-3.15-3.9-3.15-6.1125 0-0.95 0.3-1.675 0.8875-2.2625 0.4125-0.4 0.9875-0.8 1.5875-0.8zM4.3125 2.775c-0.05 0-0.1125 0-0.175 0.025-0.2375 0.0625-0.5125 0.2625-0.75 0.5-0.4 0.3875-0.6125 0.875-0.6125 1.6 0 1.8375 1.1625 3.75 2.875 5.45l0 0 0.325 0.3125c1.6125 1.5375 3.4 2.5625 5.125 2.5625 0.725 0 1.2125-0.2125 1.6-0.6125 0.2125-0.2125 0.525-0.6 0.525-0.925 0-0.1375-0.075-0.2375-0.175-0.325l-2.1375-1.4c-0.1-0.0625-0.25-0.125-0.375-0.125-0.0625 0-0.1375 0.0125-0.225 0.1l-0.3375 0.3375c-0.275 0.2875-0.6375 0.475-1.0375 0.475-0.3 0-0.6-0.1-0.875-0.3-0.95-0.675-1.8375-1.5625-2.5125-2.5125-0.2-0.275-0.3-0.575-0.3-0.875 0-0.05 0-0.1 0.0125-0.1625 0.05-0.35 0.225-0.65 0.45-0.875l0.35-0.35c0.0875-0.0875 0.1-0.15 0.1-0.2125 0-0.125-0.0625-0.275-0.125-0.375l-1.4-2.1375c-0.0875-0.1-0.1875-0.175-0.325-0.175z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.6625 1.2c0.2625 0 0.475 0.2125 0.475 0.4625v4.3375c0 0.2625-0.2125 0.4625-0.475 0.4625-0.25 0-0.4625-0.2-0.4625-0.4625v-4.3375c0-0.25 0.2125-0.4625 0.4625-0.4625z" fill="currentColor"/> <path d="M9.3375 2.5375c0.25 0 0.4625 0.2 0.4625 0.4625v1.6625c0 0.2625-0.2125 0.475-0.4625 0.475-0.2625 0-0.475-0.2125-0.475-0.475v-1.6625c0-0.2625 0.2125-0.4625 0.475-0.4625z" fill="currentColor"/> <path d="M14 2.5375c0.2625 0 0.4625 0.2 0.4625 0.4625v1.6625c0 0.2625-0.2 0.475-0.4625 0.475-0.2625 0-0.4625-0.2125-0.4625-0.475v-1.6625c0-0.2625 0.2-0.4625 0.4625-0.4625z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    ixXJ: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
                    x: 2.249023,
                    y: 1.449463,
                    width: 15.884766,
                    height: 16.301758
                },
                visualBounds: {
                    x: 2.249023,
                    y: 1.449463,
                    width: 15.884766,
                    height: 16.301758
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.249023,
                    y: 1.449463,
                    width: 15.884766,
                    height: 16.301758
                },
                center: {
                    x: 10.191406,
                    y: 9.600342
                },
                insets: {
                    top: 1.449463,
                    right: 1.866211,
                    bottom: 2.248779,
                    left: 2.249023
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.191406,
                        y: 9.600342
                    },
                    foreground: {
                        x: 10.191406,
                        y: 9.600342
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M5.39063 2.25c0.5625 0 1.01562 0.26563 1.375 0.6875l0.03125 0.04688 1.78125 2.73437 0.03125 0.03125 0.10937 0.21875c0.125 0.26563 0.20313 0.5625 0.20313 0.85938 0 0.40625-0.15625 0.79687-0.48438 1.14062l-0.42187 0.42188c-0.125 0.10937-0.23438 0.26562-0.23438 0.4375 0 0.09375 0.03125 0.21875 0.15625 0.39062 0.76563 1.07813 1.76563 2.07813 2.84375 2.85938 0.15625 0.10937 0.29688 0.14062 0.39063 0.14062 0.01562 0 0.03125 0 0.04687 0 0.10938-0.01562 0.25-0.07812 0.39063-0.23437l0.4375-0.42188c0.32812-0.32812 0.71875-0.48437 1.125-0.48437 0.39062 0 0.75 0.125 1.07812 0.3125l0.03125 0.03125 2.73438 1.78125 0.04687 0.03125 0.10938 0.10937c0.375 0.32813 0.57812 0.76563 0.57812 1.26563 0 0.76562-0.5 1.48437-1.01562 2.01562-0.73438 0.75-1.65625 1.125-2.85938 1.125-2.78125 0-5.46875-1.73437-7.67187-3.95312l0 0c-2.21875-2.20313-3.95313-4.89063-3.95313-7.67188 0-1.20312 0.375-2.125 1.125-2.85937 0.53125-0.51563 1.25-1.01563 2.01563-1.01563zM5.39063 3.51563c-0.0625 0-0.125 0.01562-0.20313 0.03125-0.28125 0.07812-0.625 0.32812-0.92187 0.60937-0.48438 0.48438-0.75 1.07813-0.75 1.96875 0 2.28125 1.45312 4.65625 3.57812 6.76563l0 0.01562 0 0 0 0 0.40625 0.39063c2.01563 1.90625 4.23438 3.1875 6.375 3.1875 0.89063 0 1.48438-0.26563 1.96875-0.75 0.25-0.25 0.64063-0.73438 0.64063-1.125 0-0.15625-0.07813-0.26563-0.20313-0.375l-2.65625-1.73438c-0.125-0.07812-0.3125-0.15625-0.45312-0.15625-0.0625 0-0.14063 0.01563-0.23438 0.10938l-0.4375 0.4375c-0.35937 0.35937-0.8125 0.59375-1.32812 0.59375-0.39063 0-0.76563-0.14063-1.125-0.375-1.1875-0.85938-2.29688-1.96875-3.15625-3.15625-0.23438-0.35938-0.375-0.73438-0.375-1.125 0-0.0625 0-0.14063 0.01562-0.20313 0.0625-0.45312 0.28125-0.84375 0.57813-1.125l0.4375-0.4375c0.09375-0.09375 0.10937-0.17187 0.10937-0.23437 0-0.14063-0.07812-0.32813-0.15625-0.45313l-1.75-2.65625c-0.09375-0.125-0.20312-0.20312-0.35937-0.20312z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.57813 1.45313c0.35937 0 0.64062 0.28125 0.64062 0.625v5.42187c0 0.34375-0.28125 0.64063-0.64062 0.64063-0.34375-0.01563-0.625-0.29688-0.625-0.64063v-5.42187c0-0.34375 0.28125-0.625 0.625-0.625z" fill="currentColor"/> <path d="M11.67188 3.10938c0.34375 0 0.625 0.29687 0.625 0.64062v2.07813c0 0.35937-0.28125 0.64062-0.625 0.64062-0.35938 0-0.64063-0.28125-0.64063-0.64062v-2.07813c0-0.34375 0.28125-0.64062 0.64063-0.64062z" fill="currentColor"/> <path d="M17.5 3.10938c0.34375 0 0.64063 0.29687 0.64063 0.64062v2.07813c0 0.35937-0.29688 0.64062-0.64063 0.64062-0.34375 0-0.64062-0.28125-0.64062-0.64062v-2.07813c0-0.34375 0.29687-0.64062 0.64062-0.64062z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    PYmY: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M8.071875 6.7875c0.76875 0.15 1.44375 0.384375 1.940625 0.684375 0.478125 0.3 0.890625 0.721875 0.890625 1.275 0 0.39375-0.20625 0.721875-0.4875 0.975-0.271875 0.2625-0.65625 0.46875-1.0875 0.6375-0.871875 0.3375-2.053125 0.54375-3.328125 0.54375-1.275 0-2.45625-0.20625-3.328125-0.54375-0.43125-0.16875-0.815625-0.375-1.0875-0.6375-0.28125-0.253125-0.4875-0.58125-0.4875-0.975 0-0.553125 0.4125-0.975 0.890625-1.275 0.496875-0.3 1.171875-0.534375 1.940625-0.684375 0.215625-0.0375 0.421875 0.103125 0.46875 0.31875 0.0375 0.215625-0.103125 0.421875-0.31875 0.46875-0.7125 0.140625-1.284375 0.346875-1.678125 0.58125-0.39375 0.24375-0.496875 0.459375-0.496875 0.590625 0 0.09375 0.046875 0.225 0.225 0.39375 0.178125 0.159375 0.459375 0.328125 0.834375 0.478125 0.759375 0.290625 1.828125 0.478125 3.0375 0.478125 1.209375 0 2.278125-0.1875 3.0375-0.478125 0.375-0.15 0.65625-0.31875 0.834375-0.478125 0.178125-0.16875 0.225-0.3 0.225-0.39375 0-0.13125-0.103125-0.346875-0.496875-0.590625-0.39375-0.234375-0.965625-0.440625-1.678125-0.58125-0.215625-0.046875-0.35625-0.253125-0.31875-0.46875 0.046875-0.215625 0.253125-0.35625 0.46875-0.31875z" fill="currentColor"/> <path d="M6 1.096875c1.05 0 1.903125 0.853125 1.903125 1.903125 0 0.909375-0.646875 1.66875-1.5 1.85625v3.646875c0 0.215625-0.178125 0.39375-0.403125 0.39375-0.225 0-0.403125-0.178125-0.403125-0.39375v-3.646875c-0.853125-0.1875-1.5-0.946875-1.5-1.85625 0-1.05 0.853125-1.903125 1.903125-1.903125zM6 1.903125c-0.609375 0-1.096875 0.4875-1.096875 1.096875 0 0.609375 0.4875 1.096875 1.096875 1.096875 0.609375 0 1.096875-0.4875 1.096875-1.096875 0-0.609375-0.4875-1.096875-1.096875-1.096875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    vImm: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
                    x: 1.69043,
                    y: 1.510742,
                    width: 12.949097,
                    height: 12.976563
                },
                visualBounds: {
                    x: 1.69043,
                    y: 1.510742,
                    width: 12.949097,
                    height: 12.976563
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.69043,
                    y: 1.510742,
                    width: 12.949097,
                    height: 12.976563
                },
                center: {
                    x: 8.164979,
                    y: 7.999024
                },
                insets: {
                    top: 1.510742,
                    right: 1.360473,
                    bottom: 1.512695,
                    left: 1.69043
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.164979,
                        y: 7.999024
                    },
                    foreground: {
                        x: 8.164979,
                        y: 7.999024
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path fill-rule="evenodd" clip-rule="evenodd" d="M8.4125 1.5125c4.1625 0 6.225 3.0625 6.225 5.8375 0 1.175-0.4875 2.375-1.3625 3.075-0.4625 0.3625-1.0125 0.575-1.6125 0.575-0.525 0-1.075-0.1625-1.625-0.5-0.5375 0.4375-1.1875 0.725-1.8875 0.725-0.6625 0-1.3-0.2625-1.8125-0.8125l-0.0125 0c0 0 0 0 0-0.0125-0.0125 0-0.0125 0-0.025-0.0125-0.0125-0.025-0.0375-0.05-0.075-0.0875-0.0625-0.0625-0.15-0.1625-0.2625-0.2625-0.2-0.225-0.4625-0.5-0.675-0.7125-0.125-0.1375-0.1875-0.3125-0.1875-0.4875 0-0.3125 0.1625-0.45 0.3875-0.6625l-0.85-0.875c-0.1-0.1-0.15-0.225-0.15-0.3625 0-0.2875 0.2375-0.525 0.525-0.525 0.1375 0 0.275 0.05 0.375 0.1625l0.85 0.875 1.45-1.4-0.85-0.8625c-0.1-0.1-0.15-0.2375-0.15-0.3625 0-0.3 0.2375-0.525 0.525-0.525 0.1375 0 0.275 0.05 0.375 0.15l0.85 0.875 0.1875-0.175c0.1375-0.125 0.3-0.1875 0.475-0.1875 0.1875 0 0.3625 0.0625 0.5 0.2125l1.05 1.0875c0.5 0.525 0.75 1.1375 0.75 1.7625 0 0.625-0.2375 1.2-0.6125 1.7 0.325 0.1625 0.625 0.225 0.875 0.225 0.3625 0 0.6875-0.125 0.9625-0.35 0.575-0.4625 0.9625-1.325 0.9625-2.25 0-2.2625-1.6625-4.7875-5.175-4.7875-2.925 0-5.4625 2.2375-5.6625 5.0625 0 0.1375-0.0125 0.275-0.0125 0.425 0 2.9625 2.1875 5.3875 5.425 5.3875 1.2875 0 2.5625-0.325 3.45-1.0125 0.1-0.075 0.2125-0.1 0.325-0.1 0.2875 0 0.525 0.225 0.525 0.525 0 0.15-0.075 0.3125-0.2 0.4125-1.1375 0.875-2.6625 1.225-4.1 1.225-3.8625 0-6.475-2.9375-6.475-6.4375 0-0.175 0.0125-0.3375 0.025-0.5 0.2375-3.4125 3.2625-6.0375 6.7-6.0375zM6.2875 8.85l0.775 0.8125c0.3 0.3125 0.65 0.5125 1.0875 0.5125 1 0 2.2-1.15 2.2-2.15 0-0.3375-0.125-0.6875-0.4625-1.025l0-0.0125-0.8-0.825-2.8 2.6875z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Ltuq: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M5.971875 1.05c0.215625 0 0.403125 0.178125 0.403125 0.403125v0.46875h2.34375c1.05 0 1.903125 0.853125 1.903125 1.903125v3c0 1.05-0.853125 1.903125-1.903125 1.903125h-0.346875l1.340625 1.415625c0.15 0.159375 0.140625 0.4125-0.01875 0.5625-0.159375 0.15-0.4125 0.15-0.5625-0.009375l-1.85625-1.96875h-0.871875v1.6875c0 0.225-0.178125 0.403125-0.403125 0.403125-0.225 0-0.403125-0.178125-0.403125-0.403125v-1.6875h-0.871875l-1.85625 1.96875c-0.15 0.159375-0.403125 0.159375-0.5625 0.009375-0.159375-0.15-0.16875-0.403125-0.01875-0.5625l1.340625-1.415625h-0.403125c-1.05 0-1.903125-0.853125-1.903125-1.903125v-3c0-1.05 0.853125-1.903125 1.903125-1.903125h2.34375v-0.46875c0-0.225 0.178125-0.403125 0.403125-0.403125zM3.225 2.728125c-0.609375 0-1.10625 0.4875-1.10625 1.096875v3c0 0.609375 0.496875 1.096875 1.10625 1.096875h5.49375c0.609375 0 1.096875-0.4875 1.096875-1.096875v-3c0-0.609375-0.4875-1.096875-1.096875-1.096875h-5.49375z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    QzEQ: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M7.975 1.4125c0.3 0 0.525 0.2375 0.525 0.525v0.6375h3.15c1.3875 0 2.525 1.125 2.525 2.525v4c0 1.3875-1.1375 2.525-2.525 2.525h-0.4875l1.8 1.9c0.2 0.2125 0.1875 0.55-0.025 0.75-0.2 0.2-0.5375 0.1875-0.7375-0.025l-2.475-2.625h-1.175v2.2625c0 0.2875-0.2375 0.525-0.525 0.525-0.3 0-0.525-0.2375-0.525-0.525v-2.2625h-1.1875l-2.475 2.625c-0.2 0.2125-0.525 0.225-0.7375 0.025-0.2125-0.2-0.225-0.5375-0.025-0.75l1.8-1.9h-0.5625c-1.3875 0-2.525-1.1375-2.525-2.525v-4c0-1.4 1.1375-2.525 2.525-2.525h3.1375v-0.6375c0-0.2875 0.2375-0.525 0.525-0.525zM4.3125 3.625c-0.8125 0-1.475 0.6625-1.475 1.475v4c0 0.8125 0.6625 1.475 1.475 1.475h7.3375c0.8125 0 1.475-0.6625 1.475-1.475v-4c0-0.8125-0.6625-1.475-1.475-1.475h-7.3375z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    iXfs: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M9.98438 1.75c0.375 0 0.67187 0.3125 0.67187 0.67188v0.78125h3.92188c1.75 0 3.15625 1.42187 3.15625 3.17187v5c0 1.75-1.40625 3.15625-3.15625 3.15625h-0.59375l2.23437 2.375c0.26563 0.26563 0.25 0.6875-0.01562 0.9375-0.26563 0.25-0.6875 0.25-0.9375-0.03125l-3.10938-3.28125h-1.45312v2.82813c0 0.375-0.29688 0.67187-0.65625 0.67187-0.375 0-0.67188-0.29687-0.67188-0.67187v-2.82813h-1.45312l-3.10938 3.28125c-0.25 0.28125-0.67187 0.28125-0.9375 0.03125-0.26562-0.25-0.28125-0.67187-0.01562-0.9375l2.23437-2.375h-0.6875c-1.75 0-3.17187-1.40625-3.17187-3.15625v-5c0-1.75 1.42187-3.17187 3.17187-3.17187h3.92188v-0.78125c0-0.375 0.29687-0.67188 0.65625-0.67188zM5.40625 4.53125c-1.01562 0-1.82812 0.82813-1.82812 1.84375v5c0 1.01563 0.8125 1.82813 1.82812 1.82813h9.17188c1.01562 0 1.82812-0.8125 1.82812-1.82813v-5c0-1.01562-0.8125-1.84375-1.82812-1.84375h-9.17188z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    yQam: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M16.51875 6.24375c0.76875 0 1.3875 0 1.89375 0.05625 0.525 0.0375 0.975 0.1125 1.40625 0.3375 0.65625 0.3375 1.2 0.88125 1.5375 1.55625 0.225 0.4125 0.31875 0.88125 0.35625 1.3875 0.0375 0.50625 0.0375 1.125 0.0375 1.89375v3.0375c0 0.7875 0 1.40625-0.0375 1.9125-0.0375 0.50625-0.13125 0.95625-0.35625 1.3875-0.3375 0.675-0.88125 1.21875-1.5375 1.55625-0.43125 0.20625-0.88125 0.3-1.40625 0.3375-0.50625 0.0375-1.125 0.0375-1.89375 0.0375h-9.0375c-0.76875 0-1.3875 0-1.89375-0.0375-0.525-0.0375-0.975-0.13125-1.40625-0.3375-0.65625-0.3375-1.2-0.88125-1.5375-1.55625-0.225-0.43125-0.31875-0.88125-0.35625-1.3875-0.0375-0.50625-0.0375-1.125-0.0375-1.9125v-3.0375c0-0.76875 0-1.3875 0.0375-1.89375 0.0375-0.50625 0.13125-0.975 0.35625-1.3875 0.3375-0.675 0.88125-1.21875 1.5375-1.55625 0.43125-0.225 0.88125-0.3 1.40625-0.3375 0.50625-0.05625 1.125-0.05625 1.89375-0.05625h9.0375zM7.48125 7.74375c-0.80625 0-1.35 0-1.78125 0.0375-0.4125 0.0375-0.65625 0.09375-0.825 0.1875-0.39375 0.20625-0.7125 0.50625-0.9 0.9-0.09375 0.16875-0.15 0.4125-0.1875 0.825-0.0375 0.43125-0.0375 0.99375-0.0375 1.78125v3.0375c0 0.80625 0 1.35 0.0375 1.78125 0.0375 0.43125 0.09375 0.65625 0.1875 0.84375 0.1875 0.375 0.50625 0.69375 0.9 0.88125 0.16875 0.09375 0.4125 0.16875 0.825 0.1875 0.43125 0.0375 0.975 0.0375 1.78125 0.0375h9.0375c0.80625 0 1.35 0 1.78125-0.0375 0.4125-0.01875 0.65625-0.09375 0.825-0.1875 0.39375-0.1875 0.7125-0.50625 0.9-0.88125 0.09375-0.1875 0.15-0.4125 0.1875-0.84375 0.0375-0.43125 0.0375-0.975 0.0375-1.78125v-3.0375c0-0.7875 0-1.35-0.0375-1.78125-0.0375-0.4125-0.09375-0.65625-0.1875-0.825-0.1875-0.39375-0.50625-0.69375-0.9-0.9-0.16875-0.09375-0.4125-0.15-0.825-0.1875-0.43125-0.0375-0.975-0.0375-1.78125-0.0375h-9.0375z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M18 3.24375c0.4125 0 0.75 0.3375 0.75 0.75 0 0.4125-0.3375 0.75-0.75 0.75h-12c-0.4125 0-0.75-0.3375-0.75-0.75 0-0.4125 0.3375-0.75 0.75-0.75h12z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    igHh: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
                    x: .311523,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                visualBounds: {
                    x: .311523,
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
                    x: .311523,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                center: {
                    x: 5.999634,
                    y: 5.94159
                },
                insets: {
                    top: .492554,
                    right: .312256,
                    bottom: .609375,
                    left: .311523
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 5.999634,
                        y: 5.94159
                    },
                    foreground: {
                        x: 5.999634,
                        y: 5.94159
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M5.3625 0.80625c0.31875-0.421875 0.95625-0.421875 1.275 0l0.05625 0.09375 1.453125 2.578125 2.896875 0.58125c0.609375 0.121875 0.853125 0.8625 0.43125 1.321875l-1.996875 2.175 0.3375 2.94375c0.075 0.61875-0.5625 1.078125-1.125 0.815625l-2.690625-1.228125-2.690625 1.228125c-0.5625 0.2625-1.2-0.196875-1.125-0.815625l0.3375-2.94375-1.996875-2.175c-0.421875-0.459375-0.178125-1.2 0.43125-1.321875l2.896875-0.58125 1.453125-2.578125 0.05625-0.09375z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    ezJK: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M18.20625 3.75c1.95 0 3.54375 1.59375 3.54375 3.54375v9.4125c0 1.95-1.59375 3.54375-3.54375 3.54375h-12.4125c-1.95 0-3.54375-1.59375-3.54375-3.54375v-9.4125c0-1.95 1.59375-3.54375 3.54375-3.54375h12.4125zM12.75 18.75h5.45625c1.125 0 2.04375-0.91875 2.04375-2.04375v-5.9625h-7.5v8.00625zM3.75 16.70625c0 1.125 0.91875 2.04375 2.04375 2.04375h5.45625v-8.00625h-7.5v5.9625zM5.79375 5.25c-1.125 0-2.04375 0.91875-2.04375 2.04375v1.95h16.5v-1.95c0-1.125-0.91875-2.04375-2.04375-2.04375h-12.4125z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    cfjx: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M6.496875 6.853125c0.225 0 0.403125 0.178125 0.403125 0.39375 0 0.225-0.178125 0.403125-0.403125 0.403125h-1.996875c-0.225 0-0.403125-0.178125-0.403125-0.403125 0-0.215625 0.178125-0.39375 0.403125-0.39375h1.996875z" fill="currentColor"/> <path d="M7.5 4.603125c0.225 0 0.403125 0.178125 0.403125 0.39375 0 0.225-0.178125 0.403125-0.403125 0.403125h-3c-0.225 0-0.403125-0.178125-0.403125-0.403125 0-0.215625 0.178125-0.39375 0.403125-0.39375h3z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.95 1.35c1.21875 0 2.203125 0.984375 2.203125 2.203125v4.89375c0 1.21875-0.984375 2.203125-2.203125 2.203125h-3.9c-1.21875 0-2.203125-0.984375-2.203125-2.203125v-4.89375c0-1.21875 0.984375-2.203125 2.203125-2.203125h3.9zM4.05 2.146875c-0.76875 0-1.396875 0.628125-1.396875 1.40625v4.89375c0 0.778125 0.628125 1.40625 1.396875 1.40625h3.9c0.76875 0 1.396875-0.628125 1.396875-1.40625v-4.89375c0-0.778125-0.628125-1.40625-1.396875-1.40625h-3.9z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    mye2: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M12.0625 3c0-0.5875-0.1875-1.1-0.4875-1.525h0.4625c0.575 0 1.1 0.175 1.475 0.55 0.375 0.3875 0.55 0.9 0.55 1.475v4.3375c0 0.575-0.175 1.0875-0.55 1.475-0.375 0.3625-0.8875 0.5375-1.45 0.55v-6.8625z" fill="currentColor"/> <path d="M6.8625 14.4875c-0.1-0.025-0.1875-0.0625-0.2375-0.0875-0.0875-0.0375-0.1875-0.1-0.2625-0.1625-0.175-0.125-0.35-0.3-0.5125-0.525-0.3125-0.45-0.525-1.1125-0.2875-1.9l0 0 0.6-1.95h-1.5c-1.6625 0-2.8625-1.5875-2.425-3.1875l0.9-3.3375c0.3-1.1 1.3-1.8625 2.4375-1.8625h4.0625c0.7125 0.05 1.375 0.6625 1.375 1.525v6.8625h-0.4125c-0.2125 0-0.425 0.1125-0.5375 0.3125l-2.175 3.825c-0.075 0.125-0.1875 0.275-0.3875 0.375-0.175 0.1-0.3625 0.1125-0.525 0.1125l-0.1125 0z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Jfoa: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M15.09375 3.70313c0-0.71875-0.21875-1.35938-0.59375-1.85938h0.5625c0.71875 0 1.35938 0.21875 1.84375 0.6875 0.46875 0.46875 0.6875 1.125 0.6875 1.84375v5.42188c0 0.71875-0.21875 1.375-0.6875 1.84375-0.46875 0.46875-1.10937 0.6875-1.8125 0.6875v-8.625z" fill="currentColor"/> <path d="M8.57813 18.10938c-0.125-0.01563-0.23438-0.0625-0.29688-0.09375-0.125-0.0625-0.23437-0.125-0.34375-0.20313-0.20312-0.15625-0.4375-0.39062-0.625-0.67187-0.39062-0.5625-0.67187-1.39063-0.35937-2.375l0.75-2.4375h-1.875c-2.07813 0-3.59375-1.98438-3.04688-3.98438l1.14063-4.17187c0.375-1.375 1.625-2.32813 3.04687-2.32813h5.04688c0.90625 0.03125 1.75 0.79688 1.75 1.85938v8.625h-0.5c-0.28125 0-0.53125 0.15625-0.67188 0.39062l-2.73437 4.78125c-0.09375 0.17188-0.23438 0.35938-0.46875 0.48438-0.23438 0.10937-0.46875 0.14062-0.67188 0.14062l-0.14062-0.01562z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    vmwH: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M8.7625 1.475h2.625c1.3875 0 2.525 1.125 2.525 2.525v3.3375c0 1.3875-1.1375 2.525-2.525 2.525h-0.675c-0.225 0-0.425 0.1125-0.5375 0.3125l-2.1875 3.825-0.075 0.1125c-0.1875 0.2375-0.4625 0.375-0.75 0.375l-0.15 0-0.1375-0.025c-1.475-0.275-2.4125-1.775-1.9625-3.225l0.425-1.375h-0.675c-1.6625 0-2.875-1.5875-2.425-3.1875l0.9-3.3375c0.3-1.1 1.3-1.8625 2.4375-1.8625h3.1625c0 0 0.0125 0 0.0125 0 0 0 0.0125 0 0.0125 0zM5.575 2.525c-0.6625 0-1.25 0.45-1.425 1.0875l-0.9 3.3375c-0.2625 0.9375 0.45 1.8625 1.4125 1.8625h1.1625c0.4625 0 0.8 0.45 0.6625 0.8875l-0.575 1.85c-0.2625 0.8625 0.3 1.75 1.1875 1.8875l2.1625-3.7875c0.2125-0.375 0.5625-0.6375 0.9625-0.7625v-4.8875c0-0.85-0.7-1.4625-1.4625-1.475h-3.1875zM10.8 2.525c0.2875 0.4 0.475 0.9125 0.475 1.475v4.8125h0.1125c0.8125 0 1.475-0.6625 1.475-1.475v-3.3375c0-0.8125-0.6625-1.475-1.475-1.475h-0.5875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    t6zD: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M14.23438 1.84375c1.73437 0 3.15625 1.40625 3.15625 3.15625v4.17188c0 1.75-1.42188 3.15625-3.15625 3.15625h-0.84375c-0.26563 0-0.53125 0.15625-0.67188 0.39062l-2.71875 4.78125-0.10937 0.15625c-0.23438 0.28125-0.57813 0.45313-0.9375 0.46875l-0.1875-0.01562-0.17188-0.03125c-1.85937-0.32813-3.01562-2.21875-2.45312-4.03125l0.51562-1.71875h-0.82812c-2.07813 0-3.59375-1.98438-3.04688-4l1.14063-4.15625c0.375-1.375 1.625-2.32813 3.04687-2.32813h7.26563zM6.96875 3.17188c-0.82812 0-1.54687 0.54687-1.76562 1.34375l-1.14063 4.17187c-0.3125 1.17188 0.5625 2.3125 1.76563 2.3125h1.45312c0.57813 0 1 0.57813 0.82813 1.125l-0.70313 2.3125c-0.32812 1.0625 0.375 2.17188 1.46875 2.34375l2.70313-4.71875c0.26562-0.46875 0.6875-0.8125 1.1875-0.96875v-6.09375c0-1.0625-0.875-1.82812-1.82813-1.82812h-3.96875zM13.51563 3.17188c0.35937 0.5 0.57812 1.125 0.57812 1.82812v6h0.14063c1 0 1.82812-0.8125 1.82812-1.82812v-4.17188c0-1.01562-0.82812-1.82812-1.82812-1.82812h-0.71875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    FER9: (function(a, b) {
        let c = String.raw,
            d = c`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
        b.a = () => RegExp(c`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${d}(?:\u200D${d})*`, "gu")
    })
};