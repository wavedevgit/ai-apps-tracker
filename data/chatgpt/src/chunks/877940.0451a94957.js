export const __rspack_esm_ids = [877940];
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
    JWvJ: (function(a, b) {
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
    OUTj: (function(a, b) {
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
    K327: (function(a, b) {
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
    Erwa: (function(a, b) {
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
    G2Me: (function(a, b) {
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
    sAcu: (function(a, b) {
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
    fTq7: (function(a, b) {
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
    BrJ6: (function(a, b) {
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
    fXZ5: (function(a, b) {
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
    Tuak: (function(a, b) {
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
    BTe7: (function(a, b) {
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
    IvFl: (function(a, b) {
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
    sHdJ: (function(a, b) {
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
    M6Yu: (function(a, b) {
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
    eKGK: (function(a, b) {
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
    h6Dd: (function(a, b) {
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
    lbvo: (function(a, b) {
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
    idzN: (function(a, b) {
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
    zpIf: (function(a, b) {
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
    ins4: (function(a, b) {
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
    sBoT: (function(a, b) {
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
    aakY: (function(a, b) {
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
    Y6Kb: (function(a, b) {
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
    tNvR: (function(a, b) {
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
    MjK8: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    ecCm: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M8.99707 1.47461C9.8393 1.47461 10.5225 2.15777 10.5225 3V4.45703H13C13.8422 4.45703 14.5254 5.14019 14.5254 5.98242V12.6494C14.5252 13.6755 13.6931 14.5076 12.667 14.5078H10.125C10.0839 14.5181 10.0413 14.5254 9.99707 14.5254C9.95279 14.5254 9.91023 14.5181 9.86914 14.5078H6.125C6.08391 14.5181 6.04135 14.5254 5.99707 14.5254C5.95279 14.5254 5.91023 14.5181 5.86914 14.5078H3.33301C2.30694 14.5076 1.47479 13.6755 1.47461 12.6494V8.98242C1.47461 8.14019 2.15777 7.45703 3 7.45703H5.47168V3C5.47168 2.15777 6.15484 1.47461 6.99707 1.47461H8.99707ZM10.5225 13.457H12.667C13.1132 13.4569 13.4744 13.0956 13.4746 12.6494V5.98242C13.4746 5.72009 13.2623 5.50781 13 5.50781H10.5225V13.457ZM6.99707 2.52539C6.73474 2.52539 6.52246 2.73766 6.52246 3V13.457H9.47168V3C9.47168 2.73766 9.25941 2.52539 8.99707 2.52539H6.99707ZM3 8.50781C2.73766 8.50781 2.52539 8.72009 2.52539 8.98242V12.6494C2.52557 13.0956 2.88684 13.4569 3.33301 13.457H5.47168V8.50781H3Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    lr7S: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M11.2471 1.83594C12.3047 1.83594 13.1621 2.69335 13.1621 3.75098V5.56445H16.25C17.3076 5.56445 18.165 6.42187 18.165 7.47949V15.8125C18.165 17.1002 17.1208 18.1445 15.833 18.1445H12.6562C12.6051 18.1571 12.5521 18.166 12.4971 18.166C12.442 18.166 12.3891 18.1571 12.3379 18.1445H7.65625C7.60509 18.1571 7.55213 18.166 7.49707 18.166C7.44201 18.166 7.38905 18.1571 7.33789 18.1445H4.16699C2.87925 18.1445 1.83496 17.1002 1.83496 15.8125V11.2295C1.83496 10.1719 2.69238 9.31445 3.75 9.31445H6.83203V3.75098C6.83203 2.69335 7.68945 1.83594 8.74707 1.83594H11.2471ZM13.1621 16.8145H15.833C16.3862 16.8145 16.835 16.3657 16.835 15.8125V7.47949C16.835 7.15641 16.5731 6.89453 16.25 6.89453H13.1621V16.8145ZM8.74707 3.16602C8.42398 3.16602 8.16211 3.42789 8.16211 3.75098V16.8145H11.832V3.75098C11.832 3.42789 11.5702 3.16602 11.2471 3.16602H8.74707ZM3.75 10.6445C3.42691 10.6445 3.16504 10.9064 3.16504 11.2295V15.8125C3.16504 16.3657 3.61379 16.8145 4.16699 16.8145H6.83203V10.6445H3.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    o1AX: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M16.001 2.76636C18.86 2.76655 21.205 3.74896 22.8652 5.41187C24.5186 7.0681 25.4365 9.34215 25.5615 11.8337L25.8076 16.7126C25.8203 16.9639 25.8867 17.2099 26.002 17.4333L27.6514 20.6316C27.9752 21.2594 28.0656 22.0551 27.7236 22.7458C27.3541 23.4915 26.5905 23.9 25.6592 23.9001H22.167C21.7307 26.916 19.1366 29.2329 16 29.2332C12.8633 29.233 10.2684 26.916 9.83203 23.9001H6.3418C5.41038 23.9001 4.64692 23.4915 4.27734 22.7458C3.93524 22.0551 4.02576 21.2595 4.34961 20.6316L5.99902 17.4333C6.11422 17.2099 6.18067 16.9639 6.19336 16.7126L6.43945 11.8337C6.56446 9.34211 7.48231 7.0681 9.13574 5.41187C10.7961 3.74894 13.1417 2.76636 16.001 2.76636ZM11.6592 23.9001C12.0751 25.9169 13.8601 27.4332 16 27.4333C18.1398 27.4331 19.9248 25.9169 20.3408 23.9001H11.6592ZM16.001 4.56714C13.5725 4.56714 11.7009 5.39072 10.4102 6.68335C9.11262 7.98297 8.34312 9.81527 8.2373 11.9236L7.99121 16.8035C7.96559 17.3106 7.83127 17.8063 7.59863 18.2576L5.9502 21.4568C5.82866 21.6925 5.85539 21.8759 5.89062 21.947C5.90498 21.9758 5.92696 22.0031 5.97363 22.0291C6.025 22.0575 6.13612 22.1003 6.3418 22.1003H25.6592C25.8653 22.1003 25.9772 22.0575 26.0283 22.0291C26.0747 22.0031 26.097 21.9758 26.1113 21.947C26.1465 21.8757 26.1731 21.6922 26.0518 21.4568L24.4023 18.2576C24.1697 17.8063 24.0354 17.3106 24.0098 16.8035L23.7637 11.9246C23.6579 9.81638 22.8882 7.98296 21.5908 6.68335C20.3002 5.39081 18.4291 4.56733 16.001 4.56714Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    nHEk: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    LByK: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    zWvJ: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    vjan: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    JrG2: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M8.15332 6.59863C9.29195 6.59876 10.2148 7.52247 10.2148 8.66113C10.2147 9.08762 10.0852 9.48375 9.86328 9.8125L10.7842 10.7344C10.9404 10.8906 10.9404 11.1436 10.7842 11.2998C10.628 11.456 10.3749 11.456 10.2188 11.2998L9.29395 10.376C8.96715 10.5937 8.57546 10.7226 8.15332 10.7227C7.01494 10.7225 6.09121 9.79946 6.09082 8.66113C6.09082 7.52248 7.01469 6.59876 8.15332 6.59863ZM8.15332 7.39941C7.45652 7.39955 6.8916 7.9643 6.8916 8.66113C6.89199 9.35763 7.45676 9.92272 8.15332 9.92285C8.84988 9.92272 9.41465 9.35763 9.41504 8.66113C9.41504 7.9643 8.85012 7.39954 8.15332 7.39941Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M6.92383 1.34961C7.42766 1.34967 7.91131 1.54998 8.26758 1.90625L9.38867 3.02734C9.73987 3.37854 9.93867 3.85354 9.94434 4.34961H10V5.15039H9.94531V5.24512C9.94519 5.46593 9.76576 5.64453 9.54492 5.64453C9.32408 5.64453 9.14465 5.46593 9.14453 5.24512V5.15039H8.25C7.4768 5.15039 6.84961 4.5232 6.84961 3.75V2.15039H3.54492C2.93741 2.15039 2.44531 2.64249 2.44531 3.25V8.75C2.44531 9.35751 2.93741 9.84961 3.54492 9.84961H4.54492C4.76584 9.84961 4.94531 10.0291 4.94531 10.25C4.94531 10.4709 4.76584 10.6504 4.54492 10.6504H3.54492C2.49558 10.6504 1.64453 9.79934 1.64453 8.75V3.25C1.64453 2.20066 2.49558 1.34961 3.54492 1.34961H6.92383ZM7.65039 3.75C7.65039 4.08137 7.91863 4.34961 8.25 4.34961H9.14355C9.13795 4.06575 9.02343 3.79491 8.82227 3.59375L7.70117 2.47266C7.68498 2.45646 7.66746 2.44182 7.65039 2.42676V3.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    XafL: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M10.8711 8.80615C12.3848 8.80615 13.6123 10.0336 13.6123 11.5474C13.6123 12.1172 13.4374 12.646 13.1396 13.0845L14.374 14.3179C14.579 14.5228 14.5789 14.856 14.374 15.061C14.169 15.266 13.8359 15.266 13.6309 15.061L12.3945 13.8237C11.9586 14.1161 11.4353 14.2886 10.8711 14.2886C9.35746 14.2886 8.13001 13.061 8.12988 11.5474C8.12989 10.0337 9.35738 8.80616 10.8711 8.80615ZM10.8711 9.85693C9.93728 9.85694 9.18067 10.6136 9.18066 11.5474C9.1808 12.4811 9.93736 13.2378 10.8711 13.2378C11.8048 13.2378 12.5614 12.4811 12.5615 11.5474C12.5615 10.6135 11.8049 9.85693 10.8711 9.85693Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.36816 1.80811C10.0378 1.80811 10.6798 2.07482 11.1533 2.54834L12.6484 4.04346C13.122 4.51699 13.3887 5.15895 13.3887 5.82861V7.16357C13.3886 7.45346 13.1532 7.68799 12.8633 7.68799C12.5734 7.68799 12.338 7.45346 12.3379 7.16357V6.85889H10.833C9.80694 6.85871 8.97479 6.02656 8.97461 5.00049V2.85889H4.86328C4.04866 2.85889 3.38867 3.51888 3.38867 4.3335V11.6665C3.38867 12.4811 4.04866 13.1421 4.86328 13.1421H6.36328C6.65312 13.1421 6.8885 13.3767 6.88867 13.6665C6.88867 13.9565 6.65323 14.1919 6.36328 14.1919H4.86328C3.46876 14.1919 2.33789 13.061 2.33789 11.6665V4.3335C2.33789 2.93898 3.46876 1.80811 4.86328 1.80811H9.36816ZM10.0254 5.00049C10.0256 5.44666 10.3868 5.80793 10.833 5.80811H12.3369C12.3316 5.42434 12.178 5.05742 11.9062 4.78564L10.4111 3.29053C10.2975 3.17693 10.1665 3.08541 10.0254 3.01514V5.00049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Y5Lu: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M14.2578 2.75C15.2522 2.75012 16.206 3.14548 16.9092 3.84863L19.1514 6.09082C19.8545 6.79397 20.2499 7.74779 20.25 8.74219V17.5C20.25 19.5711 18.5711 21.25 16.5 21.25H7.5C5.42893 21.25 3.75 19.5711 3.75 17.5V6.5C3.75 4.42893 5.42893 2.75 7.5 2.75H14.2578ZM7.5 4.25C6.25736 4.25 5.25 5.25736 5.25 6.5V17.5C5.25 18.7426 6.25736 19.75 7.5 19.75H16.5C17.7426 19.75 18.75 18.7426 18.75 17.5V10.25H16C14.4812 10.25 13.25 9.01878 13.25 7.5V4.25H7.5ZM14.75 7.5C14.75 8.19036 15.3096 8.75 16 8.75H18.75V8.74219C18.7499 8.14561 18.5127 7.57322 18.0908 7.15137L15.8486 4.90918C15.5449 4.60544 15.1627 4.39936 14.75 4.30664V7.5Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    uiVC: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M11.7139 9.28372C12.0038 9.28372 12.2393 9.51916 12.2393 9.80911V12.9478L13.3936 11.8003C13.5991 11.596 13.9313 11.5968 14.1357 11.8023C14.3398 12.0079 14.3391 12.3401 14.1338 12.5445L12.3184 14.3492C11.9835 14.682 11.4422 14.682 11.1074 14.3492L9.29492 12.5445C9.08953 12.34 9.08869 12.0078 9.29297 11.8023C9.49753 11.5968 9.83065 11.5958 10.0361 11.8003L11.1885 12.9468V9.80911C11.1885 9.5192 11.424 9.28379 11.7139 9.28372Z" fill="currentColor"/> <path d="M5.5459 2.14505C6.05385 2.14245 6.54952 2.30124 6.96094 2.59915L7.81738 3.22025C8.04621 3.38596 8.32196 3.47507 8.60449 3.47513H11.9697C13.2906 3.47513 14.3613 4.54586 14.3613 5.86673V6.56693C14.3611 7.04015 13.9782 7.42441 13.5049 7.42532L2.69727 7.44388V11.4781C2.69727 12.2215 3.30146 12.8234 4.04492 12.8199L6.49707 12.8081C6.78698 12.8067 7.02296 13.0407 7.02441 13.3306C7.02581 13.6205 6.7919 13.8565 6.50195 13.8579L4.0498 13.8697C2.72456 13.8759 1.64648 12.8034 1.64648 11.4781V4.54447C1.6465 3.22849 2.7104 2.15976 4.02637 2.15286L5.5459 2.14505ZM4.03125 3.20267C3.29315 3.20668 2.69728 3.80633 2.69727 4.54447V6.39407L13.3115 6.37454V5.86673C13.3115 5.12576 12.7107 4.52493 11.9697 4.52493H8.60449C8.10078 4.52488 7.61012 4.3653 7.20215 4.06986L6.34473 3.44974C6.11393 3.28268 5.8357 3.19336 5.55078 3.19486L4.03125 3.20267Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    NkJQ: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M14.6084 11.5161C14.9757 11.5161 15.2734 11.8149 15.2734 12.1821V16.2544L16.7021 14.8345C16.9625 14.5757 17.3836 14.5773 17.6426 14.8374C17.9014 15.0979 17.9001 15.5189 17.6396 15.7778L15.3691 18.0347C14.947 18.4539 14.2655 18.4535 13.8438 18.0337L11.5771 15.7778C11.3173 15.5189 11.3157 15.0976 11.5742 14.8374C11.8331 14.5773 12.2543 14.576 12.5146 14.8345L13.9434 16.2554V12.1812C13.9436 11.8142 14.2415 11.5163 14.6084 11.5161Z" fill="currentColor"/> <path d="M6.94238 2.67042C7.57717 2.66909 8.19622 2.86887 8.70996 3.24171L9.77734 4.0171C10.0623 4.22397 10.4057 4.33546 10.7578 4.33546H14.96C16.6159 4.33547 17.958 5.67758 17.958 7.3335V8.1587C17.9579 8.75569 17.474 9.23931 16.877 9.23975L3.37598 9.24952V14.3394C3.37598 15.262 4.12523 16.01 5.04785 16.0083L8.24902 16.0015C8.61611 16.001 8.91432 16.2984 8.91504 16.6655C8.91573 17.0328 8.61825 17.3309 8.25098 17.3315L5.0498 17.3374C3.39172 17.3405 2.0459 15.9975 2.0459 14.3394V5.67237C2.04592 4.0189 3.38462 2.67778 5.03809 2.67432L6.94238 2.67042ZM5.04102 4.0044C4.121 4.00633 3.376 4.75236 3.37598 5.67237V7.91944L16.6279 7.91065V7.3335C16.6279 6.41212 15.8813 5.66555 14.96 5.66553H10.7578C10.125 5.66553 9.50818 5.46504 8.99609 5.09327L7.92871 4.31885C7.6428 4.11127 7.29863 3.99976 6.94531 4.00049L5.04102 4.0044Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    XA7n: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M13.9053 9.78763C14.0605 9.54296 14.3851 9.47044 14.6299 9.62552C14.8742 9.78086 14.947 10.1054 14.792 10.3501C14.0412 11.5355 13.2872 12.9329 12.4131 14.1314C12.1236 14.5279 11.5534 14.5497 11.2275 14.2027L9.93066 12.8189C9.73252 12.6074 9.7429 12.275 9.9541 12.0767C10.1657 11.8784 10.498 11.8895 10.6963 12.1011L11.7598 13.2359C12.5222 12.1434 13.1562 10.9702 13.9053 9.78763Z" fill="currentColor"/> <path d="M5.5459 2.14505C6.05385 2.14245 6.54952 2.30124 6.96094 2.59915L7.81738 3.22025C8.04621 3.38596 8.32196 3.47507 8.60449 3.47513H11.9697C13.2906 3.47513 14.3613 4.54586 14.3613 5.86673V6.56693C14.3611 7.04015 13.9782 7.42441 13.5049 7.42532L2.69727 7.44388V11.4781C2.69727 12.2215 3.30146 12.8234 4.04492 12.8199L6.49707 12.8081C6.78698 12.8067 7.02296 13.0407 7.02441 13.3306C7.02581 13.6205 6.7919 13.8565 6.50195 13.8579L4.0498 13.8697C2.72456 13.8759 1.64648 12.8034 1.64648 11.4781V4.54447C1.6465 3.22849 2.7104 2.15976 4.02637 2.15286L5.5459 2.14505ZM4.03125 3.20267C3.29315 3.20668 2.69728 3.80633 2.69727 4.54447V6.39407L13.3115 6.37454V5.86673C13.3115 5.12576 12.7107 4.52493 11.9697 4.52493H8.60449C8.10078 4.52488 7.61012 4.3653 7.20215 4.06986L6.34473 3.44974C6.11393 3.28268 5.8357 3.19336 5.55078 3.19486L4.03125 3.20267Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    XqHq: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M17.3362 12.0308C17.5328 11.7209 17.944 11.6284 18.2542 11.8247C18.564 12.0211 18.656 12.4316 18.4602 12.7417C17.5107 14.2407 16.5578 16.0112 15.4456 17.5239C15.1029 17.9899 14.4301 18.0167 14.0452 17.606L12.3762 15.8247C12.1256 15.5568 12.1389 15.1363 12.4065 14.8853C12.6744 14.6345 13.0958 14.6479 13.3469 14.9155L14.6663 16.3237C15.6131 14.9654 16.4032 13.5037 17.3362 12.0308Z" fill="currentColor"/> <path d="M6.94263 2.67042C7.57741 2.66909 8.19646 2.86887 8.71021 3.24171L9.77759 4.0171C10.0625 4.22397 10.4059 4.33546 10.7581 4.33546H14.9602C16.6161 4.33547 17.9582 5.67758 17.9583 7.3335V8.1587C17.9582 8.75569 17.4742 9.23931 16.8772 9.23975L3.37622 9.24952V14.3394C3.37622 15.262 4.12547 16.01 5.0481 16.0083L8.24927 16.0015C8.61636 16.001 8.91456 16.2984 8.91528 16.6655C8.91598 17.0328 8.61849 17.3309 8.25122 17.3315L5.05005 17.3374C3.39196 17.3405 2.04614 15.9975 2.04614 14.3394V5.67237C2.04616 4.0189 3.38486 2.67778 5.03833 2.67432L6.94263 2.67042ZM5.04126 4.0044C4.12124 4.00633 3.37624 4.75236 3.37622 5.67237V7.91944L16.6282 7.91065V7.3335C16.6282 6.41212 15.8816 5.66555 14.9602 5.66553H10.7581C10.1252 5.66553 9.50843 5.46504 8.99634 5.09327L7.92896 4.31885C7.64304 4.11127 7.29887 3.99976 6.94556 4.00049L5.04126 4.0044Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    m2Vw: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    tXBb: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    WjU4: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    TZCx: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M8.5 7.59961C8.72091 7.59961 8.90039 7.77909 8.90039 8C8.90039 8.22091 8.72091 8.40039 8.5 8.40039H3.5C3.27909 8.40039 3.09961 8.22091 3.09961 8C3.09961 7.77909 3.27909 7.59961 3.5 7.59961H8.5Z" fill="currentColor"/> <path d="M5.25 3.59961C5.60898 3.59961 5.90039 3.89101 5.90039 4.25V5.75C5.90039 6.10898 5.60898 6.40039 5.25 6.40039H3.75C3.39101 6.40039 3.09961 6.10898 3.09961 5.75V4.25C3.09961 3.89101 3.39101 3.59961 3.75 3.59961H5.25ZM3.90039 5.59961H5.09961V4.40039H3.90039V5.59961Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.5 5.59961C8.72091 5.59961 8.90039 5.77909 8.90039 6C8.90039 6.22091 8.72091 6.40039 8.5 6.40039H7.25C7.02909 6.40039 6.84961 6.22091 6.84961 6C6.84961 5.77909 7.02909 5.59961 7.25 5.59961H8.5Z" fill="currentColor"/> <path d="M8.5 3.59961C8.72091 3.59961 8.90039 3.77909 8.90039 4C8.90039 4.22091 8.72091 4.40039 8.5 4.40039H7.25C7.02909 4.40039 6.84961 4.22091 6.84961 4C6.84961 3.77909 7.02909 3.59961 7.25 3.59961H8.5Z" fill="currentColor"/> <path d="M8.7002 1.59961C9.91507 1.59972 10.9003 2.58493 10.9004 3.7998V8.2002C10.9003 9.41507 9.91507 10.4003 8.7002 10.4004H3.2998C2.08493 10.4003 1.09971 9.41507 1.09961 8.2002V3.7998C1.09972 2.58493 2.08493 1.59971 3.2998 1.59961H8.7002ZM3.2998 2.40039C2.52676 2.4005 1.9005 3.02676 1.90039 3.7998V8.2002C1.9005 8.97324 2.52676 9.5995 3.2998 9.59961H8.7002C9.47324 9.5995 10.0995 8.97324 10.0996 8.2002V3.7998C10.0995 3.02676 9.47324 2.4005 8.7002 2.40039H3.2998Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    OB5w: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M11.334 10.1414C11.6236 10.1417 11.8584 10.377 11.8584 10.6667C11.8583 10.9564 11.6235 11.1918 11.334 11.1921H4.66699C4.37712 11.1921 4.14173 10.9566 4.1416 10.6667C4.1416 10.3768 4.37704 10.1414 4.66699 10.1414H11.334Z" fill="currentColor"/> <path d="M7 4.80835C7.47379 4.80851 7.85822 5.19295 7.8584 5.66675V7.66675C7.85813 8.14047 7.47374 8.52498 7 8.52515H5C4.52627 8.52497 4.14187 8.14046 4.1416 7.66675V5.66675C4.14178 5.19296 4.52621 4.80853 5 4.80835H7ZM5.19238 7.47534H6.80859V5.85913H5.19238V7.47534Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.334 7.47437C11.6235 7.47474 11.8583 7.71015 11.8584 7.99976C11.8584 8.28947 11.6236 8.52477 11.334 8.52515H9.66699C9.37704 8.52515 9.1416 8.28971 9.1416 7.99976C9.14173 7.70992 9.37712 7.47437 9.66699 7.47437H11.334Z" fill="currentColor"/> <path d="M11.334 4.80835C11.6236 4.80872 11.8584 5.04402 11.8584 5.33374C11.8583 5.62335 11.6235 5.85876 11.334 5.85913H9.66699C9.37712 5.85913 9.14173 5.62358 9.1416 5.33374C9.1416 5.04379 9.37704 4.80835 9.66699 4.80835H11.334Z" fill="currentColor"/> <path d="M12.1338 2.14136C13.4543 2.1416 14.5251 3.21244 14.5254 4.53296V11.4666C14.5254 12.7873 13.4545 13.8579 12.1338 13.8582H3.86621C2.54554 13.8579 1.47461 12.7873 1.47461 11.4666V4.53296C1.47486 3.21244 2.54569 2.1416 3.86621 2.14136H12.1338ZM3.86621 3.19214C3.12559 3.19238 2.52564 3.79234 2.52539 4.53296V11.4666C2.52539 12.2074 3.12544 12.8081 3.86621 12.8083H12.1338C12.8746 12.8081 13.4746 12.2074 13.4746 11.4666V4.53296C13.4744 3.79234 12.8744 3.19238 12.1338 3.19214H3.86621Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    cBPD: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    bmJT: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M3.2327 1.3291C3.32141 1.3291 3.41269 1.34001 3.50488 1.36523C3.72424 1.42532 3.96837 1.59106 4.09375 1.78223L5.17969 3.43945C5.29314 3.64037 5.3754 3.86132 5.3754 4.09476C5.3754 4.34504 5.28052 4.58666 5.07617 4.79102L4.81934 5.04688C4.75347 5.11274 4.68956 5.20263 4.68956 5.29981C4.68956 5.35206 4.70683 5.42368 4.77344 5.51758C5.23314 6.16534 5.83465 6.76588 6.48242 7.22559C6.57633 7.29219 6.6479 7.30947 6.70014 7.30947C6.79706 7.30947 6.8865 7.24534 6.95215 7.17969L7.20898 6.92383C7.41334 6.71948 7.65481 6.62459 7.90509 6.62459C8.13843 6.62459 8.3597 6.70688 8.56055 6.82031L10.2178 7.90625L10.249 7.92969L10.3828 8.05273C10.5676 8.2501 10.6705 8.49325 10.6705 8.76488C10.6705 8.8837 10.6509 8.99793 10.6201 9.10352C10.5166 9.45856 10.2704 9.77136 10.0576 9.9873C9.6103 10.4413 9.04822 10.6709 8.3252 10.6709C6.64434 10.6708 5.02696 9.62106 3.70898 8.29395L3.70605 8.29102C2.37868 6.9729 1.3291 5.35494 1.3291 3.67383C1.32917 2.95119 1.55811 2.38956 2.01172 1.94238C2.33045 1.62832 2.7674 1.3291 3.2327 1.3291ZM2.12891 3.67383C2.12891 5.03394 2.99417 6.45747 4.27051 7.72461L4.27148 7.72559L4.27344 7.72852L4.27441 7.72949L4.51465 7.96387C5.71991 9.1103 7.05029 9.87003 8.3252 9.87012C8.85498 9.87012 9.20543 9.71284 9.48828 9.42578C9.63597 9.27584 9.87079 8.98808 9.87079 8.76622C9.87079 8.67614 9.82293 8.61681 9.75586 8.56055L8.16016 7.51367C8.08948 7.47425 7.98674 7.42471 7.90367 7.42471C7.86967 7.42471 7.83054 7.43314 7.77441 7.48926L7.51758 7.74609C7.29714 7.96639 7.01532 8.10986 6.69935 8.10986C6.46321 8.10986 6.23125 8.02887 6.01855 7.87793C5.29762 7.36622 4.63274 6.70142 4.12109 5.98047C3.9704 5.76806 3.89004 5.53655 3.89004 5.30079C3.89004 5.25696 3.89282 5.21298 3.89844 5.16895C3.9336 4.894 4.07397 4.66138 4.25391 4.48145L4.51074 4.22461C4.56668 4.16855 4.57529 4.12941 4.57529 4.09542C4.57529 4.03584 4.54996 3.96833 4.52539 3.91504L4.48242 3.83301L3.44141 2.24512C3.37983 2.17105 3.32905 2.14641 3.29395 2.13672C3.27696 2.13207 3.25708 2.1292 3.2338 2.1292C3.20248 2.1292 3.165 2.13439 3.12012 2.14746C2.95115 2.19666 2.75124 2.33633 2.57324 2.51172C2.28635 2.79448 2.12897 3.14433 2.12891 3.67383Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.75 0.849609C8.97073 0.849829 9.15039 1.02922 9.15039 1.25V4.5C9.15039 4.72078 8.97073 4.90017 8.75 4.90039C8.52909 4.90039 8.34961 4.72091 8.34961 4.5V1.25C8.34961 1.02909 8.52909 0.849609 8.75 0.849609Z" fill="currentColor"/> <path d="M7 1.84961C7.22073 1.84983 7.40039 2.02922 7.40039 2.25V3.5C7.40039 3.72078 7.22073 3.90017 7 3.90039C6.77909 3.90039 6.59961 3.72091 6.59961 3.5V2.25C6.59961 2.02909 6.77909 1.84961 7 1.84961Z" fill="currentColor"/> <path d="M10.5 1.84961C10.7207 1.84983 10.9004 2.02922 10.9004 2.25V3.5C10.9004 3.72078 10.7207 3.90017 10.5 3.90039C10.2791 3.90039 10.0996 3.72091 10.0996 3.5V2.25C10.0996 2.02909 10.2791 1.84961 10.5 1.84961Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    nZ2x: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M4.31065 1.83898C4.74333 1.83898 5.10645 2.04246 5.375 2.37573L5.40137 2.41284L6.84766 4.6189C6.99312 4.87654 7.10013 5.1602 7.10013 5.45966C7.10013 5.7753 6.98083 6.08039 6.7207 6.34058L6.37793 6.68237C6.27667 6.78363 6.18551 6.91796 6.18551 7.06654C6.18551 7.1513 6.21367 7.26002 6.30957 7.39526C6.92684 8.26505 7.73371 9.07193 8.60352 9.68921C8.73876 9.78514 8.84747 9.81327 8.93223 9.81327C8.94891 9.81327 8.96465 9.81218 8.97949 9.8103C9.07673 9.79789 9.19339 9.74386 9.31641 9.62085L9.6582 9.27808C9.91839 9.01795 10.2235 8.89865 10.5391 8.89865C10.8386 8.89865 11.1222 9.00567 11.3799 9.15112L11.4062 9.16772L13.5869 10.5974L13.623 10.6248L13.7129 10.7019C13.9957 10.9636 14.1598 11.3 14.1598 11.6881C14.1598 12.2891 13.7663 12.8602 13.3623 13.2703C12.7796 13.8616 12.0475 14.1609 11.0996 14.1609C8.88504 14.1608 6.74433 12.7769 4.99121 11.0115L4.9873 11.0085C3.22167 9.25533 1.83798 7.11394 1.83789 4.89917C1.83789 3.95128 2.13719 3.21918 2.72852 2.63647C3.13856 2.23244 3.70965 1.83898 4.31065 1.83898ZM4.3082 2.77214C4.25986 2.77214 4.20444 2.78001 4.14062 2.79858C3.89982 2.8687 3.62428 3.06454 3.38379 3.30151C2.98719 3.69234 2.77148 4.17674 2.77148 4.89917C2.77158 6.73939 3.94045 8.65369 5.64648 10.3474L5.65137 10.3523L5.97168 10.6658C7.5843 12.2 9.37434 13.2272 11.0996 13.2273C11.822 13.2273 12.3064 13.0116 12.6973 12.615C12.9074 12.4017 13.2266 12.0078 13.2266 11.6906C13.2266 11.5479 13.1542 11.449 13.0488 11.3611L10.916 9.96265C10.8101 9.90322 10.6638 9.83261 10.5386 9.83261C10.4752 9.83261 10.4061 9.85057 10.3184 9.93823L9.97656 10.281C9.69486 10.5627 9.33439 10.7466 8.93173 10.7466C8.6325 10.7466 8.33715 10.6441 8.06348 10.45C7.10812 9.77196 6.22681 8.89065 5.54883 7.9353C5.35467 7.66163 5.25216 7.36627 5.25216 7.06704C5.25216 7.01183 5.25565 6.95649 5.2627 6.90112C5.30721 6.55235 5.48559 6.2544 5.71777 6.02222L6.06055 5.68042C6.14821 5.59271 6.16617 5.52357 6.16617 5.46021C6.16617 5.33519 6.09639 5.18955 6.03711 5.08374L4.63867 2.95093C4.55058 2.84506 4.45132 2.77214 4.3082 2.77214Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.666 1.19995C11.9236 1.20014 12.1328 1.40913 12.1328 1.66675V5.99976C12.1328 6.25737 11.9236 6.46636 11.666 6.46655C11.4083 6.46655 11.1992 6.25749 11.1992 5.99976V1.66675C11.1992 1.40902 11.4083 1.19995 11.666 1.19995Z" fill="currentColor"/> <path d="M9.33398 2.53296C9.59148 2.53315 9.80065 2.74225 9.80078 2.99976V4.66675C9.80061 4.92422 9.59145 5.13336 9.33398 5.13354C9.07636 5.13354 8.86736 4.92433 8.86719 4.66675V2.99976C8.86732 2.74214 9.07633 2.53296 9.33398 2.53296Z" fill="currentColor"/> <path d="M14 2.53296C14.2575 2.53315 14.4667 2.74225 14.4668 2.99976V4.66675C14.4666 4.92422 14.2575 5.13336 14 5.13354C13.7424 5.13354 13.5334 4.92433 13.5332 4.66675V2.99976C13.5333 2.74214 13.7423 2.53296 14 2.53296Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Lpsz: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M5.39001 2.24813C5.94648 2.24813 6.41335 2.50906 6.75879 2.93774L6.79492 2.98755L8.58203 5.71313L8.60449 5.74829L8.71973 5.97192C8.84427 6.23968 8.92645 6.52706 8.92645 6.82415C8.92645 7.23229 8.77196 7.62673 8.4375 7.96118L8.00977 8.38892C7.89322 8.50548 7.78373 8.6613 7.78373 8.8329C7.78373 8.92754 7.81504 9.05351 7.92969 9.21509C8.698 10.2977 9.70155 11.3022 10.7842 12.0706C10.9452 12.1848 11.0709 12.2156 11.1655 12.2156C11.1849 12.2156 11.2029 12.2143 11.2197 12.2122C11.3278 12.1984 11.4634 12.1383 11.6113 11.9905L12.0391 11.5627C12.3735 11.2283 12.7672 11.0738 13.1753 11.0738C13.5583 11.0738 13.9212 11.2095 14.251 11.3958L14.2871 11.4172L17.0117 13.2053L17.0615 13.2415L17.1768 13.3401C17.541 13.6772 17.7514 14.1128 17.7514 14.6122C17.7514 15.3776 17.2551 16.0988 16.7393 16.6223C16.0006 17.3718 15.0728 17.7512 13.876 17.7512C11.0876 17.7511 8.3997 16.0091 6.20508 13.7991L6.2002 13.7952C3.99009 11.6005 2.24902 8.91173 2.24902 6.12329C2.24907 4.9264 2.62831 3.99864 3.37793 3.26001C3.90217 2.74352 4.6238 2.24813 5.39001 2.24813ZM5.38892 3.51467C5.33339 3.51467 5.26817 3.52381 5.19141 3.54614C4.90205 3.6304 4.56484 3.8685 4.2666 4.16235C3.78125 4.64059 3.51567 5.23238 3.51562 6.12329C3.51563 8.40351 4.96539 10.7837 7.09473 12.8977L7.0957 12.8997L7.10059 12.9036L7.10156 12.9055L7.50098 13.2961C9.51268 15.21 11.7383 16.4835 13.876 16.4836C14.767 16.4836 15.3596 16.219 15.8379 15.7336C16.0888 15.479 16.4846 14.9927 16.4846 14.6114C16.4846 14.4498 16.3998 14.3397 16.2812 14.2405L13.6172 12.4934C13.4945 12.425 13.3184 12.3399 13.1744 12.3399C13.1086 12.3399 13.0349 12.3579 12.9346 12.4583L12.5068 12.886C12.1452 13.2476 11.6842 13.4827 11.1661 13.4827C10.7806 13.4827 10.4012 13.3508 10.0518 13.1028C8.853 12.252 7.74721 11.1472 6.89648 9.94849C6.64872 9.59936 6.51751 9.22032 6.51751 8.83507C6.51751 8.76334 6.52206 8.69139 6.53125 8.61938C6.58864 8.16999 6.8182 7.78849 7.11426 7.49243L7.54199 7.0647C7.64184 6.9647 7.65935 6.89101 7.65935 6.82535C7.65935 6.68048 7.5748 6.50451 7.50586 6.3811L5.75684 3.71606C5.65789 3.59863 5.54952 3.51467 5.38892 3.51467Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.584 1.44946C14.9338 1.44946 15.2178 1.73347 15.2178 2.08325V7.50024C15.2176 7.84987 14.9337 8.13306 14.584 8.13306C14.2345 8.13281 13.9504 7.84972 13.9502 7.50024V2.08325C13.9502 1.73363 14.2344 1.44971 14.584 1.44946Z" fill="currentColor"/> <path d="M11.666 3.11646C12.0158 3.11646 12.2998 3.40046 12.2998 3.75024V5.83325C12.2997 6.18292 12.0157 6.46704 11.666 6.46704C11.3165 6.46679 11.0324 6.18277 11.0322 5.83325V3.75024C11.0322 3.40062 11.3164 3.11671 11.666 3.11646Z" fill="currentColor"/> <path d="M17.5 3.11646C17.8498 3.11646 18.1338 3.40046 18.1338 3.75024V5.83325C18.1337 6.18292 17.8497 6.46704 17.5 6.46704C17.1505 6.46679 16.8663 6.18277 16.8662 5.83325V3.75024C16.8662 3.40062 17.1504 3.11671 17.5 3.11646Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    xRFI: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M8.07617 6.78906C8.8447 6.93761 9.52002 7.17067 10.0146 7.47461C10.4925 7.76835 10.9003 8.19408 10.9004 8.75C10.9003 9.1412 10.6942 9.47064 10.417 9.72559C10.14 9.9802 9.76135 10.1915 9.32715 10.3604C8.45593 10.6992 7.27935 10.8994 6 10.8994C4.72066 10.8994 3.54407 10.6992 2.67285 10.3604C2.23865 10.1915 1.85999 9.9802 1.58301 9.72559C1.30577 9.47064 1.0997 9.1412 1.09961 8.75C1.09974 8.19409 1.5075 7.76835 1.98535 7.47461C2.47998 7.17067 3.1553 6.93761 3.92383 6.78906C4.14053 6.74721 4.35042 6.8889 4.39258 7.10547C4.43447 7.32226 4.29288 7.53215 4.07617 7.57422C3.36362 7.71192 2.78913 7.91979 2.4043 8.15625C2.00292 8.40298 1.90053 8.61892 1.90039 8.75C1.90048 8.84183 1.94629 8.97324 2.12402 9.13672C2.30239 9.30072 2.583 9.4665 2.96289 9.61426C3.72035 9.90882 4.79406 10.0996 6 10.0996C7.20595 10.0996 8.27965 9.90882 9.03711 9.61426C9.417 9.4665 9.69761 9.30072 9.87598 9.13672C10.0537 8.97324 10.0995 8.84183 10.0996 8.75C10.0995 8.61892 9.99708 8.40298 9.5957 8.15625C9.21087 7.91979 8.63638 7.71192 7.92383 7.57422C7.70712 7.53215 7.56553 7.32226 7.60742 7.10547C7.64958 6.88889 7.85947 6.74721 8.07617 6.78906Z" fill="currentColor"/> <path d="M6 1.09961C7.04934 1.09961 7.90039 1.95066 7.90039 3C7.90039 3.91187 7.25738 4.67241 6.40039 4.85645V8.5C6.40039 8.72091 6.22091 8.90039 6 8.90039C5.77909 8.90039 5.59961 8.72091 5.59961 8.5V4.85645C4.74262 4.67241 4.09961 3.91187 4.09961 3C4.09961 1.95066 4.95066 1.09961 6 1.09961ZM6 1.90039C5.39249 1.90039 4.90039 2.39249 4.90039 3C4.90039 3.60751 5.39249 4.09961 6 4.09961C6.60751 4.09961 7.09961 3.60751 7.09961 3C7.09961 2.39249 6.60751 1.90039 6 1.90039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    jaMf: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
                    width: 12.949036,
                    height: 12.976563
                },
                visualBounds: {
                    x: 1.69043,
                    y: 1.510742,
                    width: 12.949036,
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
                    width: 12.949036,
                    height: 12.976563
                },
                center: {
                    x: 8.164948,
                    y: 7.999024
                },
                insets: {
                    top: 1.510742,
                    right: 1.360534,
                    bottom: 1.512695,
                    left: 1.69043
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.164948,
                        y: 7.999024
                    },
                    foreground: {
                        x: 8.164948,
                        y: 7.999024
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.41679 1.51074C12.5733 1.51096 14.6394 4.57801 14.6394 7.34961C14.6394 8.52839 14.1476 9.72713 13.2771 10.4199C12.813 10.7892 12.26 10.9971 11.6646 10.9971C11.1354 10.9971 10.5873 10.8339 10.0389 10.501C9.50074 10.9313 8.85071 11.2265 8.15242 11.2265C7.49323 11.2265 6.8561 10.9625 6.33183 10.418L6.32694 10.4131C6.32694 10.4131 6.32425 10.4086 6.32206 10.4062C6.31748 10.4014 6.31004 10.3947 6.30155 10.3857C6.28393 10.3671 6.25835 10.3394 6.22636 10.3057C6.1621 10.2379 6.07186 10.143 5.96854 10.0342C5.76137 9.81597 5.50175 9.54145 5.28886 9.31934C5.16019 9.18497 5.09614 9.01227 5.09614 8.8399C5.09614 8.51928 5.266 8.3828 5.48222 8.17383L4.63749 7.30371C4.53878 7.2019 4.48971 7.07008 4.48971 6.93835C4.48971 6.64772 4.72399 6.41267 5.01463 6.41267C5.15202 6.41267 5.28931 6.46608 5.39237 6.57227L6.23905 7.44531L7.68241 6.05566L6.83769 5.18555C6.73906 5.08366 6.68999 4.95175 6.68999 4.81997C6.68999 4.52929 6.92426 4.2946 7.21486 4.2946C7.35225 4.2946 7.48953 4.34797 7.59257 4.4541L8.43925 5.32715L8.62284 5.15137C8.75695 5.02229 8.92987 4.95821 9.10257 4.95821C9.28554 4.95821 9.46825 5.03013 9.60429 5.17285L10.6463 6.26855C11.1544 6.79165 11.3993 7.39924 11.3993 8.02241C11.3993 8.64501 11.1569 9.22184 10.7918 9.71875C11.1186 9.88248 11.4108 9.94729 11.6646 9.94729C12.022 9.94729 12.3448 9.81972 12.6228 9.59863C13.1973 9.1416 13.5887 8.2722 13.5887 7.34961C13.5886 5.0875 11.9254 2.56173 8.41679 2.56152C5.48587 2.56152 2.95281 4.8005 2.75565 7.62012C2.74564 7.76355 2.74069 7.90597 2.74069 8.04717C2.74069 11.0115 4.92146 13.4374 8.16483 13.4375C9.45511 13.4375 10.7311 13.1154 11.617 12.4297C11.7126 12.3557 11.8257 12.3198 11.9379 12.3198C12.2286 12.3198 12.463 12.5552 12.463 12.8443C12.463 13.0012 12.3931 13.1563 12.2596 13.2598C11.1304 14.1338 9.59973 14.4873 8.16483 14.4873C4.30366 14.4872 1.6904 11.5548 1.6904 8.04545C1.6904 7.88077 1.69615 7.71483 1.7078 7.54785C1.94623 4.13367 4.97962 1.51074 8.41679 1.51074ZM6.29276 8.85254L7.06425 9.66309C7.36743 9.97672 7.707 10.176 8.15304 10.176C9.14872 10.176 10.3494 9.02447 10.3494 8.02209C10.3494 7.68178 10.2189 7.33315 9.8914 6.99707L9.88651 6.99316L9.09159 6.1582L6.29276 8.85254Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    xYnm: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M5.9707 1.05273C6.19162 1.05273 6.37109 1.23221 6.37109 1.45312V1.92285H8.7207C9.77001 1.92285 10.621 2.77395 10.6211 3.82324V6.82324C10.6211 7.87258 9.77004 8.72363 8.7207 8.72363H8.37305L9.71289 10.1436C9.864 10.3042 9.85654 10.5575 9.69629 10.709C9.53568 10.8603 9.28242 10.8528 9.13086 10.6924L7.27344 8.72363H6.40039V10.418C6.40024 10.6388 6.22082 10.8174 6 10.8174C5.77918 10.8174 5.59976 10.6388 5.59961 10.418V8.72363H4.72656L2.86914 10.6924C2.7176 10.8529 2.46438 10.8603 2.30371 10.709C2.14315 10.5574 2.13575 10.3042 2.28711 10.1436L3.62695 8.72363H3.2207C2.17136 8.72363 1.32031 7.87258 1.32031 6.82324V3.82324C1.32037 2.77395 2.1714 1.92285 3.2207 1.92285H5.57031V1.45312C5.57031 1.23221 5.74979 1.05273 5.9707 1.05273ZM3.2207 2.72363C2.61323 2.72363 2.12115 3.21578 2.12109 3.82324V6.82324C2.12109 7.43076 2.61319 7.92285 3.2207 7.92285H8.7207C9.32822 7.92285 9.82031 7.43076 9.82031 6.82324V3.82324C9.82026 3.21578 9.32818 2.72363 8.7207 2.72363H3.2207Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    wkRR: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M7.98047 1.41211C8.27042 1.41211 8.50586 1.64755 8.50586 1.9375V2.57227H11.6465C13.041 2.57227 14.1718 3.7032 14.1719 5.09766V9.09766C14.1719 10.4922 13.041 11.623 11.6465 11.623H11.165L12.9639 13.5303C13.1627 13.7411 13.1531 14.0735 12.9424 14.2725C12.7316 14.4712 12.3992 14.4616 12.2002 14.251L9.7207 11.623H8.54492V13.8906C8.54472 14.1804 8.30935 14.415 8.01953 14.415C7.72971 14.415 7.49435 14.1804 7.49414 13.8906V11.623H6.31836L3.83887 14.251C3.6399 14.4616 3.3075 14.4712 3.09668 14.2725C2.88594 14.0735 2.8764 13.7411 3.0752 13.5303L4.87402 11.623H4.31348C2.91896 11.623 1.78809 10.4922 1.78809 9.09766V5.09766C1.78816 3.7032 2.91901 2.57227 4.31348 2.57227H7.45508V1.9375C7.45508 1.64755 7.69052 1.41211 7.98047 1.41211ZM4.31348 3.62305C3.4989 3.62305 2.83894 4.2831 2.83887 5.09766V9.09766C2.83887 9.91228 3.49886 10.5723 4.31348 10.5723H11.6465C12.4611 10.5723 13.1221 9.91228 13.1221 9.09766V5.09766C13.122 4.2831 12.4611 3.62305 11.6465 3.62305H4.31348Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Upt1: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M9.99072 1.75684C10.3578 1.7571 10.6558 2.05477 10.6558 2.42188V3.20703H14.5737C16.3215 3.20721 17.7387 4.62428 17.7388 6.37207V11.3721C17.7388 13.1199 16.3216 14.5369 14.5737 14.5371H13.9888L16.2251 16.9062C16.4772 17.1734 16.4649 17.5946 16.1978 17.8467C15.9307 18.0983 15.5103 18.0861 15.2583 17.8193L12.1616 14.5371H10.7046V17.3633C10.7043 17.7303 10.4067 18.0273 10.0396 18.0273C9.67244 18.0273 9.37477 17.7303 9.37451 17.3633V14.5371H7.9165L4.81982 17.8193C4.56786 18.0861 4.14744 18.0983 3.88037 17.8467C3.61325 17.5946 3.60097 17.1734 3.85303 16.9062L6.08936 14.5371H5.40674C3.65876 14.5371 2.2417 13.1201 2.2417 11.3721V6.37207C2.2418 4.62417 3.65882 3.20703 5.40674 3.20703H9.32568V2.42188C9.32568 2.05461 9.62345 1.75684 9.99072 1.75684ZM5.40674 4.53711C4.39335 4.53711 3.57187 5.35871 3.57178 6.37207V11.3721C3.57178 12.3855 4.3933 13.207 5.40674 13.207H14.5737C15.587 13.2069 16.4087 12.3854 16.4087 11.3721V6.37207C16.4086 5.35882 15.587 4.53729 14.5737 4.53711H5.40674Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    EZu4: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M16.5195 6.25C17.2912 6.25 17.9154 6.24981 18.4199 6.29102C18.9331 6.33295 19.3888 6.42135 19.8115 6.63672C20.4795 6.97707 21.0229 7.5205 21.3633 8.18848C21.5786 8.61125 21.6671 9.06687 21.709 9.58008C21.7502 10.0846 21.75 10.7088 21.75 11.4805V14.5195C21.75 15.2912 21.7502 15.9154 21.709 16.4199C21.6671 16.9331 21.5786 17.3888 21.3633 17.8115C21.0229 18.4795 20.4795 19.0229 19.8115 19.3633C19.3888 19.5786 18.9331 19.6671 18.4199 19.709C17.9154 19.7502 17.2912 19.75 16.5195 19.75H7.48047C6.70885 19.75 6.08458 19.7502 5.58008 19.709C5.06687 19.6671 4.61125 19.5786 4.18848 19.3633C3.5205 19.0229 2.97707 18.4795 2.63672 17.8115C2.42135 17.3888 2.33295 16.9331 2.29102 16.4199C2.24981 15.9154 2.25 15.2912 2.25 14.5195V11.4805C2.25 10.7088 2.24981 10.0846 2.29102 9.58008C2.33295 9.06687 2.42135 8.61125 2.63672 8.18848C2.97707 7.5205 3.5205 6.97707 4.18848 6.63672C4.61125 6.42135 5.06687 6.33295 5.58008 6.29102C6.08458 6.24981 6.70885 6.25 7.48047 6.25H16.5195ZM7.48047 7.75C6.68406 7.75 6.13142 7.75106 5.70215 7.78613C5.28162 7.82049 5.04527 7.88389 4.86914 7.97363C4.48358 8.17014 4.17014 8.48358 3.97363 8.86914C3.88389 9.04527 3.82049 9.28162 3.78613 9.70215C3.75106 10.1314 3.75 10.6841 3.75 11.4805V14.5195C3.75 15.3159 3.75106 15.8686 3.78613 16.2979C3.82049 16.7184 3.88389 16.9547 3.97363 17.1309C4.17014 17.5164 4.48358 17.8299 4.86914 18.0264C5.04527 18.1161 5.28162 18.1795 5.70215 18.2139C6.13142 18.2489 6.68406 18.25 7.48047 18.25H16.5195C17.3159 18.25 17.8686 18.2489 18.2979 18.2139C18.7184 18.1795 18.9547 18.1161 19.1309 18.0264C19.5164 17.8299 19.8299 17.5164 20.0264 17.1309C20.1161 16.9547 20.1795 16.7184 20.2139 16.2979C20.2489 15.8686 20.25 15.3159 20.25 14.5195V11.4805C20.25 10.6841 20.2489 10.1314 20.2139 9.70215C20.1795 9.28162 20.1161 9.04527 20.0264 8.86914C19.8299 8.48358 19.5164 8.17014 19.1309 7.97363C18.9547 7.88389 18.7184 7.82049 18.2979 7.78613C17.8686 7.75106 17.3159 7.75 16.5195 7.75H7.48047Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M18 3.25C18.4142 3.25 18.75 3.58579 18.75 4C18.75 4.41421 18.4142 4.75 18 4.75H6C5.58579 4.75 5.25 4.41421 5.25 4C5.25 3.58579 5.58579 3.25 6 3.25H18Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Q4Pk: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M5.36565 0.80407C5.68219 0.388703 6.31765 0.388727 6.6342 0.80407L6.6967 0.899774L8.14787 3.47399L11.0453 4.05895C11.6562 4.18222 11.8978 4.92632 11.476 5.38513L9.47502 7.55993L9.81487 10.4974C9.88632 11.1165 9.25359 11.5761 8.68694 11.3168L5.99944 10.0853L3.31194 11.3168C2.7454 11.5757 2.11262 11.1163 2.18401 10.4974L2.52385 7.56091L0.522875 5.38513C0.101679 4.92646 0.343272 4.18259 0.953539 4.05895L3.85002 3.47399L5.30315 0.899774L5.36565 0.80407Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    nmbL: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M18.2002 3.75C20.1607 3.75011 21.7499 5.33935 21.75 7.2998V16.7002C21.7499 18.6607 20.1607 20.2499 18.2002 20.25H5.7998C3.83935 20.2499 2.25011 18.6607 2.25 16.7002V7.2998C2.25011 5.33935 3.83935 3.75011 5.7998 3.75H18.2002ZM12.75 18.75H18.2002C19.3322 18.7499 20.2499 17.8322 20.25 16.7002V10.75H12.75V18.75ZM3.75 16.7002C3.75011 17.8322 4.66778 18.7499 5.7998 18.75H11.25V10.75H3.75V16.7002ZM5.7998 5.25C4.66778 5.25011 3.75011 6.16778 3.75 7.2998V9.25H20.25V7.2998C20.2499 6.16778 19.3322 5.25011 18.2002 5.25H5.7998Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    mvaN: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    hwhx: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M12.0627 3.00488C12.0627 2.41732 11.8766 1.89506 11.5725 1.47558H12.0393C12.6129 1.47564 13.1334 1.65034 13.511 2.02832C13.8885 2.40635 14.0627 2.9271 14.0627 3.50098V7.83496C14.0627 8.40884 13.8885 8.92958 13.511 9.30762C13.1386 9.68044 12.627 9.85559 12.0627 9.86035V3.00488Z" fill="currentColor"/> <path d="M6.86646 14.4814C6.76531 14.4655 6.67903 14.4305 6.62134 14.4033C6.53156 14.361 6.44162 14.3046 6.35669 14.2412C6.18648 14.1141 6.00653 13.9349 5.85278 13.7119C5.54068 13.2592 5.3217 12.5965 5.56079 11.8184L5.56177 11.8174L6.16626 9.86035H4.66528C3.0015 9.85992 1.79469 8.2761 2.23169 6.6709L3.13989 3.33691C3.43902 2.23874 4.43562 1.47584 5.57349 1.47558H9.63892C10.3556 1.52887 11.012 2.14056 11.012 3.00488V9.86035H10.6047C10.3818 9.86044 10.1746 9.98048 10.0637 10.1748L7.88208 13.998C7.80808 14.1277 7.69512 14.2761 7.50513 14.376C7.32666 14.4698 7.13765 14.4904 6.97192 14.4902L6.86646 14.4814Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    mcXc: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    FD9S: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M8.76865 1.47559H11.3819C12.7762 1.4758 13.9073 2.60566 13.9073 4V7.33301C13.9073 8.7274 12.7763 9.85818 11.3819 9.8584H10.7149C10.4913 9.85851 10.2849 9.97875 10.1739 10.1729L7.98935 13.9961L7.90634 14.1182C7.72579 14.3464 7.45214 14.4828 7.16123 14.4902L7.01474 14.4834L6.87021 14.4609C5.39577 14.1915 4.46712 12.6886 4.91416 11.2354L5.33798 9.8584H4.66709C3.00217 9.85839 1.79347 8.27519 2.23154 6.66895L3.13974 3.33594C3.43937 2.23746 4.43765 1.47559 5.57627 1.47559H8.73837C8.74158 1.47553 8.74492 1.47461 8.74814 1.47461C8.75498 1.47461 8.76181 1.47553 8.76865 1.47559ZM5.57627 2.52539C4.91115 2.52539 4.32846 2.97064 4.15341 3.6123L3.24423 6.94531C2.98833 7.88361 3.69452 8.80859 4.66709 8.80859H5.82334C6.28807 8.80911 6.62076 9.25879 6.48447 9.70312L5.91806 11.5439C5.65272 12.4063 6.21661 13.297 7.10166 13.4336L9.26181 9.65137C9.47574 9.2772 9.82232 9.00801 10.2227 8.88477V4C10.2227 3.15098 9.52995 2.53635 8.76865 2.52539H5.57627ZM10.7989 2.52539C11.0932 2.93032 11.2735 3.43274 11.2735 4V8.80859H11.3819C12.1964 8.80838 12.8565 8.1475 12.8565 7.33301V4C12.8565 3.18556 12.1963 2.5256 11.3819 2.52539H10.7989Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    ebbM: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
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
            body: '<path d="M14.2282 1.83594C15.9762 1.83596 17.3933 3.25301 17.3933 5.00098V9.16797C17.393 10.9157 15.976 12.333 14.2282 12.333H13.3952C13.1186 12.333 12.8625 12.4806 12.7253 12.7207L9.99483 17.5L9.89131 17.6533C9.66397 17.9411 9.31944 18.1137 8.95284 18.123L8.76729 18.1133L8.58663 18.0859C6.73856 17.7481 5.57497 15.8636 6.13546 14.042L6.66182 12.333H5.83467C3.74785 12.333 2.23204 10.3483 2.78096 8.33496L3.91768 4.16797C4.29327 2.79109 5.54419 1.83594 6.97139 1.83594H14.2282ZM6.97139 3.16602C6.14407 3.16602 5.41878 3.71951 5.20089 4.51758L4.06417 8.68457C3.74581 9.85188 4.62473 11.0029 5.83467 11.0029H7.27901C7.86657 11.003 8.28676 11.5712 8.11397 12.1328L7.40596 14.4336C7.07683 15.5042 7.77557 16.61 8.87276 16.7832L11.571 12.0615C11.8385 11.5934 12.2708 11.2533 12.7712 11.0977V5.00098C12.771 3.93548 11.8934 3.16602 10.9362 3.16602H6.97139ZM13.5173 3.16602C13.8803 3.67114 14.1012 4.29635 14.1013 5.00098V11.0029H14.2282C15.2415 11.0029 16.063 10.1812 16.0632 9.16797V5.00098C16.0632 3.98755 15.2417 3.16604 14.2282 3.16602H13.5173Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
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