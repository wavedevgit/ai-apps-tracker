export const __rspack_esm_ids = [546206];
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
    ylLY: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    FRzY: (function(a, b, c) {
        c.d(b, {
            a: () => h
        });
        var d = c("ABep"),
            e = c("on57"),
            f = c("pZwg"),
            g = c("Ra0C");
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
                className: (0, e.b)("Badge-GbHWPL", c),
                "data-color": i,
                "data-size": j,
                "data-pill": k ? "" : void 0,
                "data-variant": h,
                children: (0, g.a)(b)
            })
        }
    }),
    k6sM: (function(a, b, c) {
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
    XHk2: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("vi3X"),
            h = c("fDIZ"),
            i = c("El6m");
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, l = (0, e.c)(14),
                    {
                        paneContext: m,
                        children: n
                    } = a,
                    o = (0, f.useContext)(i.b),
                    p = (0, f.useContext)(h.a),
                    q = (0, f.useContext)(g.a);
                l[0] !== q || l[1] !== p || l[2] !== m || l[3] !== o ? (b = m ?? {
                    transition: o,
                    escapeHandler: p,
                    bannerTarget: q
                }, l[0] = q, l[1] = p, l[2] = m, l[3] = o, l[4] = b) : b = l[4];
                let r = b;
                return l[5] !== n || l[6] !== r.bannerTarget ? (c = (0, d.jsx)(g.a, {
                    value: r.bannerTarget,
                    children: n
                }), l[5] = n, l[6] = r.bannerTarget, l[7] = c) : c = l[7], l[8] !== r.escapeHandler || l[9] !== c ? (j = (0, d.jsx)(h.a, {
                    value: r.escapeHandler,
                    children: c
                }), l[8] = r.escapeHandler, l[9] = c, l[10] = j) : j = l[10], l[11] !== r.transition || l[12] !== j ? (k = (0, d.jsx)(i.b, {
                    value: r.transition,
                    children: j
                }), l[11] = r.transition, l[12] = j, l[13] = k) : k = l[13], k
            }
        })
    }),
    mYNH: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("l2oX"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("Wf1j"),
            j = c("Q2Qp"),
            k = c("QcW8"),
            l = c("ZU27"),
            m = c("wD9O"),
            n = c("nKJ6"),
            o = c("kois"),
            p = c("vi3X"),
            q = c("O9Pc"),
            r = c("fDIZ"),
            s = c("jEN2"),
            t = c("AKr5"),
            u = c("wqvF"),
            v = c("giDA"),
            w = c("fQ9c"),
            x = c("ttIa"),
            y = c("xD3Z"),
            z = c("Z2JT"),
            A = c("Sgih"),
            B = c("zeCl"),
            C = c("tSEg"),
            D = c("hZax"),
            E = c("SHid"),
            F = c("El6m"),
            G = c("dN0a"),
            H = c("WwnD"),
            I = c("giVD"),
            J = c("Vhua"),
            K = c("Azn0"),
            L = c("XHk2"),
            M = c("abd8"),
            N = c("GMTh");
        let O = (0, g.c)(C.a, a => {
            let {
                get: b
            } = a, c = b(l.l.activeTab$);
            if (c?.tabType.kind !== B.a) return !1;
            let d = B.b.safeParse(c.props);
            if (!d.success) return !1;
            let e = b(o.i),
                f = e?.kind === "codex" ? e : e?.page;
            return f?.accountId === d.data.accountId && f?.pageId === d.data.pageId && (e?.kind === "codex" ? null == e.documentType : e?.turnAttribution?.origin_page_document_type === "page")
        });

        function P(a) {
            return (0, d.jsx)(y.a, {
                ...a
            })
        }

        function Q(a) {
            let b, c, f, i, j, k, l, m, n, o, p, q, r, s = (0, e.c)(43),
                {
                    children: t,
                    composerRef: u,
                    mainContentElement: w,
                    presentation: x,
                    paneContext: y,
                    layout: z,
                    reserveContent: A,
                    reserveFullComposerHeight: B
                } = a,
                D = (0, g.y)(C.a),
                E = (0, h.useContext)(F.b),
                H = (0, h.useContext)(v.a),
                {
                    activeBrowserTabId: I
                } = E,
                J = null != y,
                {
                    isCompact: K,
                    isDockedTop: M,
                    isHidden: N,
                    isMinimized: O
                } = x,
                {
                    isMoving: P,
                    composerContentHeight: Q,
                    dockedReservePx: R
                } = z,
                S = !A || N || O ? 0 : Math.max(118, K ? R : 0, B ? Q + 118 - 102 : 0),
                T = M && K && R > 0 ? S : 0,
                [U, V] = (0, h.useState)(!O);
            (K || O) && !O !== U && V(!O);
            let W = A && !N && U ? G.b : 0;
            s[0] !== I || s[1] !== u || s[2] !== J ? (b = () => {
                if (J || null == I) return;
                let a = u.current?.ownerDocument.activeElement;
                a instanceof HTMLElement && u.current?.contains(a) && a.blur()
            }, c = [I, u, J], s[0] = I, s[1] = u, s[2] = J, s[3] = b, s[4] = c) : (b = s[3], c = s[4]), (0, h.useLayoutEffect)(b, c), s[5] !== u || s[6] !== W || s[7] !== M || s[8] !== N || s[9] !== O || s[10] !== J || s[11] !== w || s[12] !== S || s[13] !== D || s[14] !== T ? (f = () => {
                if (J || null == w) return;
                D.set(G.n, {
                    owner: u,
                    style: {
                        [G.a]: M ? `${W}px 0 0` : `0 0 ${W}px`,
                        [G.c]: `${N||O||M?0:102}px`,
                        [G.d]: `${M?0:S}px`,
                        [G.g]: `${M?S:0}px`
                    }
                }), (0, G.u)(D, M ? 0 : S), D.set(G.o, T);
                let a = M ? "top" : "bottom";
                D.set(G.k, 0 === W ? null : a)
            }, i = [u, W, J, M, N, O, w, S, D, T], s[5] = u, s[6] = W, s[7] = M, s[8] = N, s[9] = O, s[10] = J, s[11] = w, s[12] = S, s[13] = D, s[14] = T, s[15] = f, s[16] = i) : (f = s[15], i = s[16]), (0, h.useLayoutEffect)(f, i), s[17] !== u || s[18] !== J || s[19] !== w || s[20] !== D ? (j = () => {
                if (!J && null != w) return () => {
                    let a = D.get(G.n);
                    a?.owner === u && (D.set(G.n, {
                        ...a,
                        owner: null
                    }), (0, G.u)(D, 0), D.set(G.o, 0), D.set(G.k, null))
                }
            }, k = [u, J, w, D], s[17] = u, s[18] = J, s[19] = w, s[20] = D, s[21] = j, s[22] = k) : (j = s[21], k = s[22]), (0, h.useLayoutEffect)(j, k);
            let X = !K || O || P || Q > 102;
            s[23] !== u || s[24] !== X || s[25] !== J || s[26] !== D ? (l = () => {
                let a = u.current;
                if (J || null == a) return;
                let b = () => {
                    let b = !X && null != a.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    D.set(G.j, X || b)
                };
                b();
                let c = X ? null : new MutationObserver(b);
                return c?.observe(a, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    c?.disconnect()
                }
            }, m = [u, X, J, D], s[23] = u, s[24] = X, s[25] = J, s[26] = D, s[27] = l, s[28] = m) : (l = s[27], m = s[28]), (0, h.useLayoutEffect)(l, m), s[29] !== J || s[30] !== D ? (o = () => () => {
                J || D.set(G.j, !1)
            }, n = [J, D], s[29] = J, s[30] = D, s[31] = n, s[32] = o) : (n = s[31], o = s[32]), (0, h.useLayoutEffect)(o, n);
            let Y = null == y ? H : y.overlayOwner,
                Z = J ? "contents" : void 0;
            return s[33] !== t || s[34] !== u || s[35] !== Z ? (p = (0, d.jsx)("div", {
                ref: u,
                className: Z,
                "data-right-panel-composer-overlay-content": "true",
                children: t
            }), s[33] = t, s[34] = u, s[35] = Z, s[36] = p) : p = s[36], s[37] !== Y || s[38] !== p ? (q = (0, d.jsx)(v.a, {
                value: Y,
                children: p
            }), s[37] = Y, s[38] = p, s[39] = q) : q = s[39], s[40] !== y || s[41] !== q ? (r = (0, d.jsx)(L.a, {
                paneContext: y,
                children: q
            }), s[40] = y, s[41] = q, s[42] = r) : r = s[42], r
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, y, B, L, R = (0, e.c)(62),
                    {
                        children: S,
                        composerOnly: T,
                        forceExpanded: U,
                        placement: V,
                        showHeader: W,
                        showConversationTitleMenu: X,
                        showComposerDivider: Y,
                        isHidden: Z,
                        persistPresentation: $,
                        reserveContent: _,
                        reserveFullComposerHeight: aa,
                        onPresentationChange: ab,
                        title: ac,
                        minimizedIcon: ad,
                        titleContent: ae,
                        statusState: af,
                        titleStatusState: ag,
                        hasElicitation: ah,
                        notifications: ai,
                        workingPreview: aj,
                        compactWorkingPreview: ak,
                        responsePreview: al,
                        persistResponsePreview: am,
                        renderTranscript: an,
                        hasConversation: ao,
                        hasTranscript: ap,
                        pendingFormId: aq,
                        emptyState: ar
                    } = a,
                    as = void 0 !== T && T,
                    at = void 0 !== U && U,
                    au = void 0 === W || W,
                    av = void 0 === Y ? !as : Y,
                    aw = void 0 === $ || $,
                    ax = void 0 === aq ? A.a : aq,
                    ay = (0, g.y)(C.a),
                    az = "pane" === (void 0 === V ? "floating" : V),
                    aA = (0, D.f)("2163293173"),
                    aB = aA ? ar : void 0,
                    aC = !as || aA && (null != aB || (ap ?? null != an)),
                    aD = (0, g.z)(!!aC && K.a),
                    aE = (0, i.a)(),
                    {
                        isHidden: aF
                    } = (0, N.a)(az ? "embedded" : "content"),
                    aG = void 0 !== Z && Z || aF,
                    aH = (0, g.z)(!(void 0 !== X && X) || az || aG ? null : I.a),
                    aI = (0, h.useContext)(j.a),
                    aJ = (0, h.useContext)(F.b),
                    aK = (0, h.useContext)(F.a),
                    aL = (0, h.useContext)(q.a),
                    aM = (0, h.useContext)(r.a),
                    aN = (0, h.useContext)(p.a),
                    aO = (0, h.useContext)(v.a),
                    aP = (0, m.c)();
                R[0] !== aP ? (b = a => {
                    let {
                        x: b,
                        y: c
                    } = a;
                    return {
                        x: b / aP,
                        y: c / aP
                    }
                }, R[0] = aP, R[1] = b) : b = R[1];
                let aQ = b,
                    [aR, aS] = (0, h.useState)(null),
                    aT = !(0, g.z)(G.s),
                    aU = (0, h.useRef)(null),
                    aV = (0, g.z)(ax),
                    aW = (0, g.z)(aw ? z.b : void 0);
                aC || au || (aW = "compact");
                let aX = (0, g.z)(null == aV && (ah ?? F.c)),
                    aY = (0, g.z)(l.l.activeTab$),
                    aZ = (0, g.z)(az || aG ? null : O),
                    a$ = (0, g.z)(k.n),
                    a_ = (0, g.z)(!!a$ && J.i);
                R[2] !== aY || R[3] !== az ? (c = az ? null : (0, n.getThreadBrowserTabIdFromPanelTab)(aY), R[2] = aY, R[3] = az, R[4] = c) : c = R[4];
                let a0 = c,
                    a1 = void 0 !== aa && aa || aY?.tabType.kind === "latex-document" || aY?.tabType.kind === "image-preview";
                R[5] !== aV ? (o = () => {
                    let a = null != aV ? (0, t.a)(aU.current) : aU.current?.querySelector("[contenteditable='true']");
                    null == a || (0, s.g)(a) || a.focus({
                        preventScroll: !0
                    })
                }, R[5] = aV, R[6] = o) : o = R[6];
                let a2 = o;
                R[7] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, d.jsx)("div", {
                    ref: a => {
                        null != a && aS(a)
                    },
                    className: "contents"
                }), R[7] = y) : y = R[7];
                let a3 = az || aG;
                return R[8] !== a0 || R[9] !== aY || R[10] !== aZ || R[11] !== aC || R[12] !== aD || R[13] !== S || R[14] !== ak || R[15] !== as || R[16] !== aA || R[17] !== aB || R[18] !== a2 || R[19] !== at || R[20] !== ao || R[21] !== aX || R[22] !== ap || R[23] !== a$ || R[24] !== aN || R[25] !== aM || R[26] !== aO || R[27] !== aK || R[28] !== aJ || R[29] !== aE || R[30] !== aG || R[31] !== aT || R[32] !== az || R[33] !== aI || R[34] !== ad || R[35] !== a_ || R[36] !== ai || R[37] !== ab || R[38] !== aR || R[39] !== aV || R[40] !== aw || R[41] !== am || R[42] !== an || R[43] !== _ || R[44] !== al || R[45] !== ay || R[46] !== a1 || R[47] !== av || R[48] !== au || R[49] !== af || R[50] !== aW || R[51] !== aL || R[52] !== ac || R[53] !== ae || R[54] !== aH || R[55] !== ag || R[56] !== aQ || R[57] !== aj ? (B = a => (0, d.jsx)(f.a, {
                    transformPagePoint: aQ,
                    children: (0, d.jsx)(F.b, {
                        value: az ? aJ : {
                            activeBrowserTabId: a0,
                            isInsideOverlay: !0,
                            isFloatingChatNavigationCurrent: aJ.isFloatingChatNavigationCurrent,
                            onAttachmentAdded: () => {
                                ay.get(l.l.activeTab$)?.tabId === aY?.tabId && (ay.get(G.l) || (0, G.i)(ay, {
                                    prefersReducedMotion: !0
                                }), (0, s.d)())
                            },
                            shouldAnimate: !1
                        },
                        children: (0, d.jsx)(F.a, {
                            value: az ? aK : "expanded",
                            children: (0, d.jsx)(x.a, {
                                preserveLayoutOnEscape: !0,
                                contentChat: {
                                    focusComposer: a2,
                                    onOpenRightPane: a$ && aD ? () => {
                                        (0, H.a)(ay, "chat") && aA && ay.set(E.a, ay.get(k.hb))
                                    } : void 0,
                                    openRightPaneDisabled: a_
                                },
                                dockThreadKey: M.c,
                                canDock: aC || au,
                                titleContent: aH ?? ae,
                                minimizedIcon: ad,
                                statusState: af,
                                titleStatusState: ag,
                                hasTranscript: ap,
                                hasConversation: ao,
                                emptyState: aB,
                                pendingFormId: aV,
                                notifications: ai,
                                workingPreview: aj,
                                compactWorkingPreview: ak,
                                responsePreview: al,
                                persistResponsePreview: am,
                                containerSize: a,
                                minimumWidth: aZ ? 240 : void 0,
                                renderMenu: a$ ? void 0 : P,
                                forceExpanded: at || aX && (aA || !as),
                                isHidden: az || aG,
                                isMinimized: aT,
                                presentation: aW,
                                showHeader: au,
                                showComposerDivider: av,
                                background: as && !au ? void 0 : "panel",
                                onPresentationChange: a => {
                                    aw && ay.set(z.b, a), ab?.(a)
                                },
                                onMinimizedChange: a => {
                                    (0, G.t)(ay, a)
                                },
                                title: ac ?? aE.formatMessage({
                                    id: "quickChat.mainConversation",
                                    defaultMessage: "Chat"
                                }),
                                renderTranscript: null == an ? void 0 : (a, b) => an({
                                    isVisible: b && !az && !aG
                                }),
                                renderComposer: (a, b) => (0, d.jsx)(q.a, {
                                    value: az || null == a0 ? aL : aI,
                                    children: (0, d.jsx)(u.a, {
                                        target: az ? aR : null,
                                        children: (0, d.jsx)(Q, {
                                            composerRef: aU,
                                            mainContentElement: aI,
                                            presentation: a,
                                            paneContext: az ? {
                                                transition: aJ,
                                                escapeHandler: aM,
                                                bannerTarget: aN,
                                                overlayOwner: aO
                                            } : void 0,
                                            layout: b,
                                            reserveFullComposerHeight: a1,
                                            reserveContent: _ ?? (null == a0 && aY?.tabType.kind !== "mcp-app" && aY?.tabType.kind !== "mcp-extension"),
                                            children: "function" == typeof S ? S(az ? void 0 : a) : S
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), R[8] = a0, R[9] = aY, R[10] = aZ, R[11] = aC, R[12] = aD, R[13] = S, R[14] = ak, R[15] = as, R[16] = aA, R[17] = aB, R[18] = a2, R[19] = at, R[20] = ao, R[21] = aX, R[22] = ap, R[23] = a$, R[24] = aN, R[25] = aM, R[26] = aO, R[27] = aK, R[28] = aJ, R[29] = aE, R[30] = aG, R[31] = aT, R[32] = az, R[33] = aI, R[34] = ad, R[35] = a_, R[36] = ai, R[37] = ab, R[38] = aR, R[39] = aV, R[40] = aw, R[41] = am, R[42] = an, R[43] = _, R[44] = al, R[45] = ay, R[46] = a1, R[47] = av, R[48] = au, R[49] = af, R[50] = aW, R[51] = aL, R[52] = ac, R[53] = ae, R[54] = aH, R[55] = ag, R[56] = aQ, R[57] = aj, R[58] = B) : B = R[58], R[59] !== a3 || R[60] !== B ? (L = (0, d.jsxs)(d.Fragment, {
                    children: [y, (0, d.jsx)(w.a, {
                        isHidden: a3,
                        children: B
                    })]
                }), R[59] = a3, R[60] = B, R[61] = L) : L = R[61], L
            }
        })
    }),
    ckwE: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("VnEZ");
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, e.c)(3),
                    {
                        children: h,
                        binding: i
                    } = a,
                    [j] = (0, f.useState)(g.b),
                    k = i ?? j;
                return c[0] !== h || c[1] !== k ? (b = (0, d.jsx)(g.a, {
                    value: k,
                    children: h
                }), c[0] = h, c[1] = k, c[2] = b) : b = c[2], b
            }
        })
    }),
    C6kc: (function(a, b, c) {
        var d = c("mBJV"),
            e = c("MVHH"),
            f = c("D99L"),
            g = c("fVOX"),
            h = c("yGJW"),
            i = c("g2p6");

        function j(a, b, c) {
            "memory_footnote_shown" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: c
            }), a.get(g.a).count("default", b, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: c,
                target: "search_sources_sidebar"
            })
        }
        c.d(b, {
            a: () => e.Y
        }, {
            b: function(a, b) {
                let {
                    actionType: c,
                    conversationId: d,
                    experiment: f,
                    messageId: g,
                    source: i,
                    feedback: k,
                    selectedFeedback: l,
                    surface: m = "sources"
                } = b, n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(k, null) && (n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let o = null == i ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === m && (o = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, h.a)(a, e.X, {
                    actionType: c,
                    conversationId: d ?? void 0,
                    messageId: g,
                    citationUuid: i?.citationUuid ?? void 0,
                    sourceType: function(a) {
                        switch (a?.conversationContextType) {
                            case "user_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY";
                            case "general_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY";
                            case "past_conversation":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION";
                            case "user_instructions":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS";
                            case null:
                            case void 0:
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED"
                        }
                    }(i),
                    feedback: n,
                    selectedFeedback: null == l ? void 0 : ({
                        positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                        negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE"
                    })[l],
                    entrypoint: o,
                    target: "explainer" === m || "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED" === c ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR",
                    memoryCitationExperiment: f
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === c && j(a, "chatgpt_memory_citations_sidebar_open_clicked", f)
            },
            c: function(a, b) {
                "dismissed" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: i.c
                }), "shown" === b && (0, h.a)(a, d.xd, {
                    eventId: `${i.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: j
        })
    }),
    pV06: (function(a, b, c) {
        var d = c("JjRy"),
            e = c.n(d),
            f = c("AuIy"),
            g = c("G4E3"),
            h = c("KaH3"),
            i = c("Yz3b"),
            j = c("pqpL"),
            k = c("ghNX"),
            l = c("KvVi"),
            m = c("m250"),
            n = c("H8lk"),
            o = c("Ng4B"),
            p = c("bTKb"),
            q = c("dGDB"),
            r = c("lIsV");

        function s(a) {
            return a.flatMap(a => "chatgpt-reasoning-group" === a.type ? a.items : [a])
        }
        c.d(b, {}, {
            a: function(a) {
                var b;
                let c, d, {
                        automationReferences: t,
                        includePages: u = !1,
                        includeSources: v,
                        messages: w,
                        pendingAttachments: x = [],
                        resources: y = (0, n.e)(w),
                        turns: z,
                        isTurnActive: A = z.at(-1)?.turn.status === "in_progress"
                    } = a,
                    B = [...y.inputs],
                    C = v ? (0, o.a)(w, z) : [],
                    D = new Map,
                    E = new Map,
                    F = (b = w, -1 !== (c = e()(b, a => a?.recipient === "turn_plan.update_turn_plan" && (0, r.b)(a)?.item?.type === "todo-list")) && b.slice(c + 1).some(a => "assistant" === a.author.role && "final" === a.channel && "all" === a.recipient && "finished_successfully" === a.status)),
                    G = [],
                    H = new Map(w.map(a => [(0, f.g)(a), a])),
                    I = e()(w, a => "user" === a.author.role),
                    J = [];
                for (let a of x) B.some(b => b.fileId === a.id || null != a.libraryFileId && b.libraryFileId === a.libraryFileId) || B.push({
                    downloadTarget: {
                        fileId: a.id,
                        type: "file-id"
                    },
                    fileId: a.id,
                    key: `input:pending:${a.id}`,
                    kind: "file",
                    libraryFileId: a.libraryFileId ?? null,
                    messageId: "pending-submission",
                    mimeType: a.mimeType,
                    mountedLibraryFileId: a.mountedLibraryFileId,
                    sourceMimeType: a.mountedLibraryMimeType,
                    sourceUrl: a.sourceUrl,
                    name: a.name,
                    sandboxPath: null,
                    sizeBytes: a.size ?? null
                });
                for (let {
                        id: a,
                        turn: b
                    }
                    of z) {
                    if (v && "complete" === b.status)
                        for (let c of b.messageIds) {
                            let b = H.get(c);
                            b?.author.role === "assistant" && ("finished_successfully" === b.status || "finished_partial_completion" === b.status) && (0, m.j)(b.metadata) && G.push({
                                messageId: c,
                                turnId: a,
                                deletedMemoryCitationUuids: (0, m.c)(b.metadata)
                            })
                        }
                    for (let c of s(b.items)) {
                        if (u && "mcp-tool-call" === c.type) {
                            let a = (0, k.b)(c);
                            if (null != a && (a.activities.includes("created") || a.activities.includes("updated"))) {
                                let b = (0, g.d)(a.url);
                                if (b?.kind === "page") {
                                    let c = E.get(b.id);
                                    E.set(b.id, {
                                        key: `page:${b.id}`,
                                        kind: "page",
                                        pageId: b.id,
                                        title: a.title ?? c?.title ?? null
                                    })
                                }
                            }
                        }
                        if (u && "assistant-message" === c.type && c.completed)
                            for (let a of (0, j.c)(c.content)) E.has(a.id) || E.set(a.id, {
                                key: `page:${a.id}`,
                                kind: "page",
                                pageId: a.id,
                                title: null
                            });
                        if ("todo-list" === c.type) {
                            J = c.plan.map((b, c) => ({
                                key: `progress:${a}:${String(c)}`,
                                label: b.step,
                                status: F ? "completed" : b.status
                            }));
                            continue
                        }
                        if ("generated-image" === c.type && "completed" === c.status && null != c.src) {
                            let a = `image:${c.id}`;
                            D.set(a, {
                                image: c,
                                key: a,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let K = (0, h.b)(z.flatMap(a => {
                    let {
                        turn: b
                    } = a;
                    return s(b.items).filter(a => "mcp-tool-call" === a.type)
                })).at(-1);
                return d = null == K ? [...y.outputs, ...E.values(), ...D.values()] : [{
                    ...K,
                    key: `site:${K.projectId}`,
                    kind: "site"
                }, ...y.outputs.filter(a => null == K.archivePath || ! function(a, b) {
                    if (null != a.sandboxPath) return a.sandboxPath === b;
                    let c = b.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != c && a.name.toLowerCase() === c
                }(a, K.archivePath)), ...E.values(), ...D.values()], {
                    automationIds: (0, l.b)(w, t ?? void 0),
                    browserScreenshots: (0, p.e)(w),
                    inputs: B,
                    sourceTurns: G,
                    outputs: d,
                    progressSteps: J,
                    isPlanSummaryUpdating: A && w.slice(I + 1).some(a => "assistant" === a.author.role && l.a.test(a.recipient ?? "") || "tool" === a.author.role && l.a.test(a.author.name ?? "")),
                    planSummaryRefreshKey: `${z.at(-1)?.id??""}:${A}`,
                    showSources: v,
                    sources: v ? [...Array.from(new Map(w.filter(a => "user" === a.author.role).flatMap(a => (0, i.a)((0, f.e)(a))).map(a => [a.projectId, a])).values(), a => ({
                        kind: "site",
                        key: `site:${a.projectId}`,
                        projectId: a.projectId,
                        label: a.title
                    })), ...C.filter(a => "memory" === a.kind), ...new Map(z.flatMap(a => {
                        let {
                            turn: b
                        } = a;
                        return (b.skillSources ?? []).map(a => [a.key, a])
                    })).values(), ...y.pluginSources, ...C.filter(a => "web" === a.kind && "apps" === a.category), ...C.filter(a => "file-source" === a.kind), ...C.filter(a => "web" === a.kind && "apps" !== a.category)] : [],
                    subagents: (0, q.a)(w)?.subagents ?? []
                }
            }
        })
    }),
    JlMc: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("RU3e");
        c("bjAA");
        var h = c("OWtl");
        c("CKur"), c("XtQP");
        var i = c("dQRk"),
            j = c("UWHW");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l, m = (0, d.c)(10),
                    {
                        conversationId: n,
                        isTranscriptVisible: o
                    } = a,
                    p = void 0 === o || o,
                    q = (0, e.y)(h.a),
                    r = (0, f.useId)();
                return m[0] !== n || m[1] !== r || m[2] !== q ? (b = () => (q.set(j.b, a => new Map(a).set(r, n)), q.get(j.a)?.dismissCurrent(), () => {
                    q.set(j.b, a => {
                        let b = new Map(a);
                        return b.delete(r), b
                    })
                }), c = [n, r, q], m[0] = n, m[1] = r, m[2] = q, m[3] = b, m[4] = c) : (b = m[3], c = m[4]), (0, f.useEffect)(b, c), m[5] !== n || m[6] !== p || m[7] !== q ? (k = () => {
                    if (!p) return;
                    let a = q.watch(a => {
                        let {
                            get: b
                        } = a, c = !0 === b(g.b);
                        (0, i.ec)(q, n, c)
                    });
                    return () => {
                        a(), (0, i.ec)(q, n, !1)
                    }
                }, l = [n, p, q], m[5] = n, m[6] = p, m[7] = q, m[8] = k, m[9] = l) : (k = m[8], l = m[9]), (0, f.useEffect)(k, l), null
            }
        })
    }),
    DvP0: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    b7aP: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("Bbed"),
            h = c("iS3k");
        let i = (0, g.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(362890)]).then(c.bind(c, "hhV7"))).ChatGptThreadSummaryPanelBody, {
            errorFallback: (0, d.jsx)("span", {
                className: "px-5 select-none",
                role: "status",
                children: (0, d.jsx)(f.a, {
                    id: "chatgptConversations.summaryPanel.loadError",
                    defaultMessage: "Summary could not load. Reload the app to try again"
                })
            })
        });
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, e.c)(2);
                return c[0] !== a ? (b = (0, d.jsx)(h.a.Content, {
                    children: (0, d.jsx)(i, {
                        ...a
                    })
                }), c[0] = a, c[1] = b) : b = c[1], b
            }
        })
    }),
    vpdG: (function(a, b, c) {
        var d = c("QosV"),
            e = c("HVBu"),
            f = c.n(e),
            g = c("Q840"),
            h = c("yZpl"),
            i = c("zd8w"),
            j = c("Gdjn"),
            k = c("xqnZ"),
            l = c("OWtl"),
            m = c("ADAj"),
            n = c("Ow2S"),
            o = c("fDfx"),
            p = c("dQRk");
        c.d(b, {}, {
            a: function(a) {
                let b, c, e, q, r, s, t = (0, d.c)(19);
                t[0] !== a ? (b = void 0 === a ? {} : a, t[0] = a, t[1] = b) : b = t[1];
                let {
                    composerController: u,
                    conversationId: v,
                    draftKey: w,
                    initialPrompt: x,
                    initialPromptKind: y
                } = b, z = void 0 === w ? v : w, A = (0, g.y)(l.a);
                t[2] !== v || t[3] !== z || t[4] !== x || t[5] !== y || t[6] !== A ? (c = () => f()(() => {
                    let a = null == v ? null : A.get(p.y, v),
                        b = (0, k.e)(x ?? (null == z ? "" : A.get(n.v, z)), {
                            addInitialContentToHistory: null == x && null != z,
                            defaultTextKind: y ?? (null == x && null != z || (0, j.b)(x ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, m.b)(A.get, h.yf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== a && "flora" !== a,
                                variant: "tpp" !== a && "flora" !== a ? "chatgpt" : void 0
                            }
                        });
                    return null == x && null != v && "string" == typeof z && null != (0, o.k)(A, z) && "tpp" !== a && "flora" !== a && (0, n.W)(A, v, b.getChatGptPrompt().systemHints), b
                }), t[2] = v, t[3] = z, t[4] = x, t[5] = y, t[6] = A, t[7] = c) : c = t[7];
                let [B] = (0, i.useState)(c);
                t[8] !== B || t[9] !== u ? (e = u ?? B(), t[8] = B, t[9] = u, t[10] = e) : e = t[10];
                let C = e,
                    D = (0, i.useRef)(null);
                t[11] !== C || t[12] !== z || t[13] !== A ? (q = () => {
                    if (null == z) return;
                    let a = A.get(n.v, z);
                    return null != D.current && D.current !== a && C.restoreDraft(a), () => {
                        D.current = A.get(n.v, z)
                    }
                }, r = [C, z, A], t[11] = C, t[12] = z, t[13] = A, t[14] = q, t[15] = r) : (q = t[14], r = t[15]), (0, i.useLayoutEffect)(q, r), t[16] !== C || t[17] !== u ? (s = () => {
                    null != u || C.view.isDestroyed || C.destroy()
                }, t[16] = C, t[17] = u, t[18] = s) : s = t[18];
                let E = s;
                return (0, k.f)(E, C), C
            }
        })
    }),
    JjB1: (function(a, b, c) {
        var d = c("on57");
        let e = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif',
            f = (0, d.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p_:not(code,code_*)]:!font-sans", "[&_.ProseMirror_span:not(code_*)]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-[var(--annotation-comment-min-height,calc(var(--spacing)*6))]!");
        c.d(b, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: f,
            c: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
            d: {
                "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
                "--font-sans": e,
                "--font-ui-family": e,
                fontFamily: e
            }
        })
    }),
    YwjY: (function(a, b, c) {
        c.d(b, {
            a: () => h
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("JjB1");

        function h(a) {
            let b, c, h, i, j, k, l, m, n, o, p, q, r, s, t = (0, e.c)(30);
            t[0] !== a ? ({
                className: c,
                children: b,
                style: i,
                isRevealingPageComment: j,
                surfaceVariant: k,
                discussion: l,
                hasRecipientControl: m,
                ...h
            } = a, t[0] = a, t[1] = b, t[2] = c, t[3] = h, t[4] = i, t[5] = j, t[6] = k, t[7] = l, t[8] = m) : (b = t[1], c = t[2], h = t[3], i = t[4], j = t[5], k = t[6], l = t[7], m = t[8]);
            let u = void 0 === k ? "default" : k,
                v = void 0 !== l && l,
                w = void 0 !== m && m,
                x = "default" === u && "bg-surface-elevated-secondary shadow-md",
                y = v && !w && "in-data-[comment-layout=floating]:shadow-none!",
                z = v && "default" === u && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                A = v && "default" === u && (w ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                B = void 0 !== j && j ? "transition-none" : "transition-[height,width,opacity]";
            return t[9] !== c || t[10] !== x || t[11] !== y || t[12] !== z || t[13] !== A || t[14] !== B ? (n = (0, f.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", x, y, z, A, B, c), t[9] = c, t[10] = x, t[11] = y, t[12] = z, t[13] = A, t[14] = B, t[15] = n) : n = t[15], t[16] !== i ? (o = {
                ...g.d,
                ...i
            }, t[16] = i, t[17] = o) : o = t[17], t[18] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, f.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), t[18] = p) : p = t[18], t[19] !== b ? (q = (0, d.jsx)("div", {
                className: p,
                children: b
            }), t[19] = b, t[20] = q) : q = t[20], t[21] !== v || t[22] !== u ? (r = "default" === u ? (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: (0, f.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", v && "in-data-[comment-layout=floating]:hidden")
            }) : null, t[21] = v, t[22] = u, t[23] = r) : r = t[23], t[24] !== h || t[25] !== n || t[26] !== o || t[27] !== q || t[28] !== r ? (s = (0, d.jsxs)("div", {
                ...h,
                className: n,
                style: o,
                children: [q, r]
            }), t[24] = h, t[25] = n, t[26] = o, t[27] = q, t[28] = r, t[29] = s) : s = t[29], s
        }
    }),
    iqo5: (function(a, b, c) {
        c.d(b, {
            a: () => q
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("oyxz"),
            h = c("YwjY"),
            i = c("Sm6l"),
            j = c("UIU6"),
            k = c("Bbed"),
            l = c("RNul"),
            m = c("yZpl"),
            n = c("T1PX");

        function o(a) {
            let b, c, g, h, i, j, k = (0, e.c)(13),
                {
                    children: l,
                    source: o
                } = a,
                p = (0, f.useRef)(null),
                q = !(0, n.a)() && o.width > 0 && o.height > 0;
            k[0] !== q || k[1] !== o ? (b = () => {
                let a = p.current,
                    b = a?.ownerDocument.defaultView;
                if (!a || !b || !q) return;
                let c = 0,
                    d = new ResizeObserver(() => {
                        d.disconnect(), c = b.requestAnimationFrame(() => {
                            let d = a.getBoundingClientRect();
                            if (!d.width || !d.height) {
                                a.dataset.phase = "open";
                                return
                            }
                            let e = a.offsetWidth / d.width,
                                f = a.offsetHeight / d.height,
                                g = (o.left - d.left) * e,
                                h = (o.top - d.top) * f,
                                i = (d.right - o.right) * e,
                                j = (d.bottom - o.bottom) * f;
                            a.style.setProperty("--entry-inset", `${h}px ${i}px ${j}px ${g}px`), a.style.setProperty("--entry-transform", `translate(${g}px, ${h}px) scale(${o.width/d.width}, ${o.height/d.height})`), a.dataset.phase = "source", c = b.requestAnimationFrame(() => {
                                a.dataset.phase = "open"
                            })
                        })
                    });
                return d.observe(a), () => {
                    d.disconnect(), b.cancelAnimationFrame(c), delete a.dataset.phase, a.style.removeProperty("--entry-inset"), a.style.removeProperty("--entry-transform")
                }
            }, c = [q, o], k[0] = q, k[1] = o, k[2] = b, k[3] = c) : (b = k[2], c = k[3]), (0, f.useLayoutEffect)(b, c);
            let r = q ? "entry-yS3y1e" : void 0;
            return k[4] === Symbol.for("react.memo_cache_sentinel") ? (g = {
                position: "relative",
                maxWidth: "100%",
                width: m.V
            }, k[4] = g) : g = k[4], k[5] !== q ? (h = q ? (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, k[5] = q, k[6] = h) : h = k[6], k[7] !== l ? (i = (0, d.jsx)("div", {
                className: "content-ARLCcU",
                children: l
            }), k[7] = l, k[8] = i) : i = k[8], k[9] !== r || k[10] !== h || k[11] !== i ? (j = (0, d.jsxs)("div", {
                ref: p,
                "data-selection-annotation-entry": "",
                className: r,
                style: g,
                children: [h, i]
            }), k[9] = r, k[10] = h, k[11] = i, k[12] = j) : j = k[12], j
        }
        let p = (0, k.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(923720), c.e(531161), c.e(596636), c.e(965017)]).then(c.bind(c, "FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: a => (0, d.jsx)(r, {
                failed: !0,
                onClose: a.onCancel
            })
        });

        function q(a) {
            let b, c, g, h, i, k, l, m, n = (0, e.c)(18);
            n[0] !== a ? ({
                entryRect: b,
                ...c
            } = a, n[0] = a, n[1] = b, n[2] = c) : (b = n[1], c = n[2]), n[3] !== c.onCancel ? (g = (0, d.jsx)(r, {
                failed: !0,
                onClose: c.onCancel
            }), n[3] = c.onCancel, n[4] = g) : g = n[4], n[5] !== c.onCancel ? (h = (0, d.jsx)(r, {
                onClose: c.onCancel
            }), n[5] = c.onCancel, n[6] = h) : h = n[6], n[7] !== c ? (i = (0, d.jsx)(p, {
                ...c
            }), n[7] = c, n[8] = i) : i = n[8], n[9] !== h || n[10] !== i ? (k = (0, d.jsx)(f.Suspense, {
                fallback: h,
                children: i
            }), n[9] = h, n[10] = i, n[11] = k) : k = n[11], n[12] !== g || n[13] !== k ? (l = (0, d.jsx)(j.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: g,
                children: k
            }), n[12] = g, n[13] = k, n[14] = l) : l = n[14];
            let q = l;
            return n[15] !== q || n[16] !== b ? (m = null == b ? q : (0, d.jsx)(o, {
                source: b,
                children: q
            }), n[15] = q, n[16] = b, n[17] = m) : m = n[17], m
        }

        function r(a) {
            let b, c, f, j, k = (0, e.c)(9),
                {
                    failed: m,
                    onClose: n
                } = a,
                o = void 0 !== m && m,
                p = o ? "alert" : "status";
            return k[0] !== o ? (b = o ? (0, d.jsx)(g.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(l.a, {}), (0, d.jsx)(g.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor\u2026"
                })]
            }), k[0] = o, k[1] = b) : b = k[1], k[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(g.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
            }), k[2] = c) : c = k[2], k[3] !== n ? (f = (0, d.jsx)(i.a, {
                color: "secondary",
                onClick: n,
                children: c
            }), k[3] = n, k[4] = f) : f = k[4], k[5] !== p || k[6] !== b || k[7] !== f ? (j = (0, d.jsxs)(h.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: p,
                children: [b, f]
            }), k[5] = p, k[6] = b, k[7] = f, k[8] = j) : j = k[8], j
        }
        q.prefetch = () => p.prefetch()
    }),
    xD3Z: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("slpy"),
            g = c("Q840"),
            h = c("Qgfj"),
            i = c("Wf1j"),
            j = c("oyxz"),
            k = c("QcW8"),
            l = c("Sm6l"),
            m = c("rmk3"),
            n = c("bf6R"),
            o = c("tSEg"),
            p = c("hZax"),
            q = c("dt6g"),
            r = c("WwnD");

        function s(a) {
            let b, c, g, k, o, q, r, s, u, v, w = (0, e.c)(31),
                {
                    contextMenuTrigger: x,
                    isCompact: y,
                    isDragging: z,
                    items: A,
                    open: B,
                    onMinimize: C,
                    onOpenChange: D
                } = a,
                E = (0, p.f)("2163293173"),
                F = (0, i.a)();
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, h.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), w[0] = b) : b = w[0], w[1] !== C ? (c = {
                id: "minimize",
                icon: n.hf,
                message: b,
                onSelect: C,
                selectAfterClose: !0
            }, w[1] = C, w[2] = c) : c = w[2], w[3] !== A || w[4] !== c ? (g = [...A, c], w[3] = A, w[4] = c, w[5] = g) : g = w[5];
            let G = g;
            if (null != x) {
                let a, b;
                return w[6] !== x ? (a = (0, d.jsx)("div", {
                    className: "contents",
                    children: x
                }), w[6] = x, w[7] = a) : a = w[7], w[8] !== G || w[9] !== a ? (b = (0, d.jsx)(m.a, {
                    disableNative: !0,
                    items: G,
                    children: a
                }), w[8] = G, w[9] = a, w[10] = b) : b = w[10], b
            }
            if (E) {
                let a;
                return w[11] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(d.Fragment, {}), w[11] = a) : a = w[11], a
            }
            let H = B || z;
            w[12] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, d.jsx)(j.a, {
                id: "quickChat.dock.dragHint",
                defaultMessage: "Drag to move \xb7 Click for options"
            }), w[12] = k) : k = w[12], w[13] !== F ? (o = F.formatMessage({
                id: "quickChat.moreOptions",
                defaultMessage: "Chat options"
            }), w[13] = F, w[14] = o) : o = w[14];
            let I = y ? "composer" : "toolbar";
            return w[15] !== D || w[16] !== B ? (q = a => {
                0 !== a.button || a.ctrlKey || !(a.detail > 0) || a.defaultPrevented || D?.(!B)
            }, w[15] = D, w[16] = B, w[17] = q) : q = w[17], w[18] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, d.jsx)(n.cd, {}), w[18] = r) : r = w[18], w[19] !== o || w[20] !== I || w[21] !== q ? (s = (0, d.jsx)(l.a, {
                className: "cursor-grab touch-none active:cursor-grabbing",
                "aria-label": o,
                color: "ghostSecondaryPillBackground",
                "data-quick-chat-drag-handle": !0,
                size: I,
                uniform: !0,
                onPointerDown: t,
                onClick: q,
                children: r
            }), w[19] = o, w[20] = I, w[21] = q, w[22] = s) : s = w[22], w[23] !== s || w[24] !== H ? (u = (0, d.jsx)(f.a, {
                disabled: H,
                content: k,
                children: s
            }), w[23] = s, w[24] = H, w[25] = u) : u = w[25], w[26] !== G || w[27] !== D || w[28] !== B || w[29] !== u ? (v = (0, d.jsx)(m.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: B,
                onOpenChange: D,
                items: G,
                children: u
            }), w[26] = G, w[27] = D, w[28] = B, w[29] = u, w[30] = v) : v = w[30], v
        }

        function t(a) {
            0 !== a.button || a.ctrlKey || a.preventDefault()
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f = (0, e.c)(6),
                    i = (0, g.y)(o.a),
                    j = (0, g.z)(k.n);
                f[0] !== j || f[1] !== i ? (b = j ? [{
                    id: "full-view",
                    icon: n.P,
                    message: (0, h.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, q.a)(i, "context_menu", () => (0, r.b)(i, "chat", {
                            mode: "full"
                        }))
                    }
                }] : [], f[0] = j, f[1] = i, f[2] = b) : b = f[2];
                let l = b;
                return f[3] !== l || f[4] !== a ? (c = (0, d.jsx)(s, {
                    ...a,
                    items: l
                }), f[3] = l, f[4] = a, f[5] = c) : c = f[5], c
            },
            b: s
        })
    }),
    FW69: (function(a, b, c) {
        var d = c("xprp");
        c.d(b, {
            a: () => d.a
        })
    }),
    w5yV: (function(a, b, c) {
        var d = c("FW69"),
            e = c("ajVv");
        let f = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);

        function g(a) {
            let {
                range: b,
                element: c,
                target: d,
                bottomBoundaryTop: e
            } = a, f = j(c, e);
            if (null == f) return null;
            let g = function(a, b, c, d) {
                let e = Array.from(a.getClientRects()),
                    f = b.getBoundingClientRect(),
                    g = k(e, d);
                if (null != g && (e.length > 1 || null != l(g, f))) return g;
                let h = a.getBoundingClientRect(),
                    i = l(h, d);
                return null != i && null != l(i, f) ? i : e.some(a => a.width > 0 && a.height > 0) || h.width > 0 && h.height > 0 ? null : k(Array.from(b.getClientRects()), d) ?? l(f, d) ?? k(Array.from(c.getClientRects()), d) ?? l(c.getBoundingClientRect(), d)
            }(b, c, d, f);
            return null == g ? null : {
                rect: g,
                bounds: f
            }
        }

        function h(a, b, c) {
            let d = i(a),
                e = d?.closest(c);
            if (d instanceof HTMLElement && e instanceof HTMLElement) return {
                element: d,
                target: e
            };
            if (!(a instanceof Element)) return null;
            for (let d of [a.childNodes[b], a.childNodes[b - 1]]) {
                let a = i(d),
                    b = a?.closest(c);
                if (a instanceof HTMLElement && b instanceof HTMLElement) return {
                    element: a,
                    target: b
                }
            }
            return null
        }

        function i(a) {
            return a instanceof Element ? a : a?.parentElement ?? null
        }

        function j(a, b) {
            let c = {
                    bottom: null == b ? window.innerHeight : Math.min(window.innerHeight, b),
                    left: 0,
                    right: window.innerWidth,
                    top: 0
                },
                d = a;
            for (; null != d && d !== document.body && d !== document.documentElement;) {
                let a = window.getComputedStyle(d),
                    b = (a.overflowX || a.overflow).split(/\s+/).some(a => f.has(a)),
                    e = (a.overflowY || a.overflow).split(/\s+/).some(a => f.has(a));
                if (b || e) {
                    let a = d.getBoundingClientRect();
                    if ((c = {
                            bottom: e ? Math.min(c.bottom, a.bottom) : c.bottom,
                            left: b ? Math.max(c.left, a.left) : c.left,
                            right: b ? Math.min(c.right, a.right) : c.right,
                            top: e ? Math.max(c.top, a.top) : c.top
                        }).right <= c.left || c.bottom <= c.top) return null
                }
                d = d.parentElement
            }
            return c.bottom <= c.top ? null : c
        }

        function k(a, b) {
            for (let c of a) {
                let a = l(c, b);
                if (null != a) return a
            }
            return null
        }

        function l(a, b) {
            let c = Math.max(a.left, b.left),
                d = Math.max(a.top, b.top),
                e = Math.min(a.right, b.right),
                f = Math.min(a.bottom, b.bottom);
            return c >= e || d >= f ? null : new DOMRect(c, d, e - c, f - d)
        }
        c.d(b, {}, {
            a: j,
            b: g,
            c: function(a) {
                let {
                    bottomBoundarySelector: b,
                    portalTarget: c,
                    targetContainer: f,
                    targetSelector: j,
                    windowZoom: k
                } = a, l = window.getSelection();
                if (null == l || 0 === l.rangeCount || l.isCollapsed) return null;
                let m = function(a, b, c) {
                    var d, e;
                    let f, g, i = h(a.anchorNode, a.anchorOffset, c),
                        j = h(a.focusNode, a.focusOffset, c);
                    if (null != i && null != j && i.target !== j.target) return null;
                    let k = i ?? j;
                    return null == k || null != k.element.closest('[contenteditable="true"]') ? null : {
                        ...k,
                        range: (d = b, e = k.target, (f = document.createRange()).selectNodeContents(e), g = d.cloneRange(), (!e.contains(g.startContainer) || 0 > g.compareBoundaryPoints(Range.START_TO_START, f)) && g.setStart(f.startContainer, f.startOffset), (!e.contains(g.endContainer) || g.compareBoundaryPoints(Range.END_TO_END, f) > 0) && g.setEnd(f.endContainer, f.endOffset), g)
                    }
                }(l, l.getRangeAt(0), j);
                if (null == m || null != f && !f.contains(m.target)) return null;
                let n = (0, d.a)(m.range)?.trim() ?? m.range.toString().trim();
                if (0 === n.length) return null;
                let o = null == b ? null : f?.querySelector(b),
                    p = o instanceof HTMLElement ? o.getBoundingClientRect().top : void 0,
                    q = g({
                        ...m,
                        bottomBoundaryTop: p
                    });
                if (null == q) return null;
                let {
                    rect: r
                } = q, s = c?.contains(m.target) === !0 ? c : void 0, t = s?.getBoundingClientRect(), u = null == t ? {
                    left: 0,
                    right: window.innerWidth
                } : {
                    left: -t.left / k,
                    right: (window.innerWidth - t.left) / k
                }, v = null == t ? r : new DOMRect((r.left - t.left) / k, (r.top - t.top) / k, r.width / k, r.height / k), w = i(m.range.startContainer) ?? m.element;
                return {
                    direction: "rtl" === window.getComputedStyle(w).direction ? "rtl" : "ltr",
                    portalTarget: s,
                    rect: v,
                    selectionRange: m.range.cloneRange(),
                    selectedText: n,
                    target: m.target,
                    targetId: m.target.getAttribute(e.a),
                    viewportHorizontalBounds: u
                }
            },
            d: function(a, b) {
                return null != a && null != b && a.direction === b.direction && a.portalTarget === b.portalTarget && a.selectedText === b.selectedText && a.selectionRange.startContainer === b.selectionRange.startContainer && a.selectionRange.startOffset === b.selectionRange.startOffset && a.selectionRange.endContainer === b.selectionRange.endContainer && a.selectionRange.endOffset === b.selectionRange.endOffset && a.target === b.target && a.targetId === b.targetId && a.viewportHorizontalBounds.left === b.viewportHorizontalBounds.left && a.viewportHorizontalBounds.right === b.viewportHorizontalBounds.right && a.rect.left === b.rect.left && a.rect.top === b.rect.top && a.rect.width === b.rect.width && a.rect.height === b.rect.height
            }
        })
    }),
    NqfB: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("wD9O"),
            i = c("i7gm"),
            j = c("jDEJ"),
            k = c("bIvi"),
            l = c("w5yV"),
            m = c("ajVv");

        function n(a) {
            return null != a
        }

        function o(a) {
            return a.current
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, p, q, r, s, t, u, v, w = (0, e.c)(40),
                    {
                        align: x,
                        bottomBoundarySelector: y,
                        children: z,
                        className: A,
                        onOpen: B,
                        portalTargetSelector: C,
                        targetContainer: D,
                        targetContainerRefs: E,
                        targetSelector: F
                    } = a,
                    G = void 0 === F ? m.b : F,
                    H = (0, h.c)(),
                    I = (0, g.useRef)(null),
                    J = (0, g.useRef)(!1),
                    K = (0, g.useRef)(null),
                    L = (0, g.useRef)(null),
                    [M, N] = (0, g.useState)(null);
                w[0] !== B ? (b = a => {
                    B?.(a)
                }, w[0] = B, w[1] = b) : b = w[1];
                let O = (0, g.useEffectEvent)(b);
                w[2] !== M || w[3] !== H ? (c = () => {
                    let a = K.current?.getBoundingClientRect();
                    if (null == M || null == a) return;
                    let b = M.portalTarget?.getBoundingClientRect(),
                        c = null == b ? 1 : H;
                    return {
                        point: {
                            x: a.left + a.width / 2,
                            y: a.bottom
                        },
                        width: a.width,
                        selectionRect: {
                            x: M.rect.left * c + (b?.left ?? 0),
                            y: M.rect.top * c + (b?.top ?? 0),
                            width: M.rect.width * c,
                            height: M.rect.height * c
                        },
                        windowZoom: H
                    }
                }, w[2] = M, w[3] = H, w[4] = c) : c = w[4];
                let P = (0, k.a)(c);
                if (w[5] !== y || w[6] !== O || w[7] !== C || w[8] !== D || w[9] !== E || w[10] !== G || w[11] !== H ? (p = () => {
                        let a = null,
                            b = () => {
                                null != I.current && (window.cancelAnimationFrame(I.current), I.current = null)
                            },
                            c = () => {
                                b();
                                let a = window.getSelection();
                                null == L.current && (null == a || 0 === a.rangeCount || a.isCollapsed) || (I.current = window.requestAnimationFrame(() => {
                                    I.current = null;
                                    let a = null != D || null == E ? [D] : E.map(o).filter(n),
                                        b = null;
                                    for (let c of a)
                                        if (null != (b = (0, l.c)({
                                                bottomBoundarySelector: y,
                                                portalTarget: null == C ? void 0 : c?.querySelector(C) ?? void 0,
                                                targetContainer: c,
                                                targetSelector: G,
                                                windowZoom: H
                                            }))) break;
                                    (0, l.d)(L.current, b) || (null == L.current && null != b && O(b), L.current = b, N(b))
                                }))
                            },
                            d = () => {
                                let a = window.getSelection();
                                J.current || null == a || 0 === a.rangeCount || a.isCollapsed || c()
                            },
                            e = b => {
                                let e = window.getSelection(),
                                    f = L.current?.portalTarget;
                                if (!J.current && null != e && 0 !== e.rangeCount && !e.isCollapsed) {
                                    if (null != f && f.contains(e.getRangeAt(0).commonAncestorContainer)) {
                                        let c = b.target;
                                        if (!(c instanceof Node && f.contains(c))) return void(null != a && window.clearTimeout(a), a = window.setTimeout(() => {
                                            a = null, d()
                                        }, 100));
                                        if (!e.getRangeAt(0).intersectsNode(c)) return
                                    }
                                    c()
                                }
                            },
                            f = a => {
                                if (2 === a.button || 0 === a.button && a.ctrlKey && (0, j.a)()) return;
                                let c = a.target;
                                c instanceof Node && K.current?.contains(c) || (J.current = !0, b(), L.current = null, N(null))
                            },
                            g = () => {
                                J.current = !1, c()
                            },
                            h = () => {
                                if (J.current) {
                                    b(), L.current = null, N(null);
                                    return
                                }
                                c()
                            };
                        return c(), document.addEventListener("selectionchange", h), window.addEventListener("dblclick", c), window.addEventListener("keyup", c), window.addEventListener("pointerdown", f), window.addEventListener("pointerup", g), window.addEventListener("pointercancel", g), window.addEventListener("resize", d), window.addEventListener("scroll", e, !0), () => {
                            null != a && window.clearTimeout(a), b(), document.removeEventListener("selectionchange", h), window.removeEventListener("dblclick", c), window.removeEventListener("keyup", c), window.removeEventListener("pointerdown", f), window.removeEventListener("pointerup", g), window.removeEventListener("pointercancel", g), window.removeEventListener("resize", d), window.removeEventListener("scroll", e, !0)
                        }
                    }, w[5] = y, w[6] = O, w[7] = C, w[8] = D, w[9] = E, w[10] = G, w[11] = H, w[12] = p) : p = w[12], w[13] !== y || w[14] !== C || w[15] !== D || w[16] !== E || w[17] !== G || w[18] !== H ? (q = [y, C, D, E, G, H], w[13] = y, w[14] = C, w[15] = D, w[16] = E, w[17] = G, w[18] = H, w[19] = q) : q = w[19], (0, g.useEffect)(p, q), null == M) return null;
                let Q = .5;
                "start" === (void 0 === x ? "center" : x) && (Q = +("rtl" === M.direction));
                let R = M.rect.left + M.rect.width * Q,
                    S = M.viewportHorizontalBounds.left + 8 - R,
                    T = M.viewportHorizontalBounds.right - 8 - R,
                    U = M.portalTarget ?? document.body,
                    V = null == M.portalTarget ? "fixed z-50" : "absolute z-[1]";
                w[20] !== A || w[21] !== V ? (r = (0, f.b)("pointer-events-none w-max", V, A), w[20] = A, w[21] = V, w[22] = r) : r = w[22];
                let W = M.viewportHorizontalBounds.right - M.viewportHorizontalBounds.left - 16,
                    X = M.rect.top - 8,
                    Y = `translateX(clamp(${S}px, ${-100*Q}%, calc(${T}px - 100%))) translateY(-100%)`;
                return w[23] !== R || w[24] !== W || w[25] !== X || w[26] !== Y ? (s = {
                    left: R,
                    maxWidth: W,
                    top: X,
                    transform: Y
                }, w[23] = R, w[24] = W, w[25] = X, w[26] = Y, w[27] = s) : s = w[27], w[28] !== z || w[29] !== P || w[30] !== M || w[31] !== H ? (t = null == M.portalTarget && 1 !== H ? (0, d.jsx)("div", {
                    style: {
                        zoom: H
                    },
                    children: z(M, P)
                }) : z(M, P), w[28] = z, w[29] = P, w[30] = M, w[31] = H, w[32] = t) : t = w[32], w[33] !== s || w[34] !== t || w[35] !== r ? (u = (0, d.jsx)("div", {
                    ref: K,
                    className: r,
                    style: s,
                    children: t
                }), w[33] = s, w[34] = t, w[35] = r, w[36] = u) : u = w[36], w[37] !== u || w[38] !== U ? (v = (0, d.jsx)(i.a, {
                    container: U,
                    children: u
                }), w[37] = u, w[38] = U, w[39] = v) : v = w[39], v
            }
        })
    }),
    JEFL: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("Wf1j"),
            h = c("oyxz"),
            i = c("iqo5"),
            j = c("Sm6l"),
            k = c("jqmc"),
            l = c("UxN3"),
            m = c("xtoi"),
            n = c("mN6P"),
            o = c("elIT");
        c.d(b, {}, {
            a: function(a) {
                let b, c, p, q, r, s, t = (0, e.c)(56),
                    {
                        conversationTerminology: u,
                        onAddSelectedText: v,
                        onStartFileAnnotation: w,
                        onDismissFileAnnotation: x,
                        onCommentSelectedText: y,
                        onEditModeChange: z,
                        onEditSelectedText: A,
                        onMoreDetails: B,
                        onOpenSideChat: C,
                        resume: D,
                        selectedText: E
                    } = a,
                    F = void 0 === u ? "task" : u,
                    G = (0, g.a)(),
                    [H, I] = (0, f.useState)(D?.mode === "edit" ? D.instruction : ""),
                    [J, K] = (0, f.useState)(D?.mode ?? "actions"),
                    [L, M] = (0, f.useState)(null);
                if (null != L) {
                    let a, b, c;
                    return t[0] !== x ? (a = () => x?.(!1), b = () => x?.(!0), t[0] = x, t[1] = a, t[2] = b) : (a = t[1], b = t[2]), t[3] !== L.rect || t[4] !== L.submit || t[5] !== a || t[6] !== b ? (c = (0, d.jsx)(i.a, {
                        entryRect: L.rect,
                        onCancel: a,
                        onEscape: b,
                        onSubmit: L.submit
                    }), t[3] = L.rect, t[4] = L.submit, t[5] = a, t[6] = b, t[7] = c) : c = t[7], c
                }
                if ("pending" === J) return null;
                if ("edit" === J && null != A) {
                    let a, b, c, e, f, g, h, i, k, n;
                    return t[8] !== z ? (a = a => {
                        a.stopPropagation(), "Escape" === a.key && (a.preventDefault(), z?.(!1), K("actions-focused"))
                    }, t[8] = z, t[9] = a) : a = t[9], t[10] !== H || t[11] !== z || t[12] !== A ? (b = a => {
                        a.preventDefault(), 0 !== H.trim().length && (K("pending"), A(H).then(a => {
                            "retry" === a && (z?.(!1), K("actions-focused"))
                        }))
                    }, t[10] = H, t[11] = z, t[12] = A, t[13] = b) : b = t[13], t[14] !== G ? (c = G.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), t[14] = G, t[15] = c) : c = t[15], t[16] !== G ? (e = G.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit\u2026"
                    }), t[16] = G, t[17] = e) : e = t[17], t[18] === Symbol.for("react.memo_cache_sentinel") ? (f = a => {
                        I(a.target.value)
                    }, t[18] = f) : f = t[18], t[19] !== H || t[20] !== c || t[21] !== e ? (g = (0, d.jsx)("input", {
                        "aria-label": c,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: e,
                        required: !0,
                        value: H,
                        onChange: f
                    }), t[19] = H, t[20] = c, t[21] = e, t[22] = g) : g = t[22], t[23] !== G ? (h = G.formatMessage({
                        id: "selectedTextOverlay.editSubmit",
                        defaultMessage: "Submit edit instruction"
                    }), t[23] = G, t[24] = h) : h = t[24], t[25] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, d.jsx)(l.a, {
                        "aria-hidden": !0,
                        asset16: o.a,
                        legacyIcon: m.a,
                        legacyClassName: "icon-2xs"
                    }), t[25] = i) : i = t[25], t[26] !== h ? (k = (0, d.jsx)(j.a, {
                        "aria-label": h,
                        color: "primary",
                        size: "composerSm",
                        type: "submit",
                        uniform: !0,
                        children: i
                    }), t[26] = h, t[27] = k) : k = t[27], t[28] !== k || t[29] !== a || t[30] !== b || t[31] !== g ? (n = (0, d.jsxs)("form", {
                        className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                        onKeyDown: a,
                        onSubmit: b,
                        children: [g, k]
                    }), t[28] = k, t[29] = a, t[30] = b, t[31] = g, t[32] = n) : n = t[32], n
                }
                return t[33] !== F || t[34] !== v || t[35] !== w || t[36] !== E ? (b = null != v || null != w ? (0, d.jsx)(k.b, {
                    onClick: a => {
                        null != w ? M({
                            rect: (a.currentTarget.parentElement ?? a.currentTarget).getBoundingClientRect(),
                            submit: w()
                        }) : (window.getSelection()?.removeAllRanges(), v?.(E))
                    },
                    children: "chat" === F ? (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, t[33] = F, t[34] = v, t[35] = w, t[36] = E, t[37] = b) : b = t[37], t[38] !== B || t[39] !== E ? (c = null != B ? (0, d.jsx)(k.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), B(E)
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, t[38] = B, t[39] = E, t[40] = c) : c = t[40], t[41] !== C || t[42] !== E ? (p = null != C ? (0, d.jsx)(k.b, {
                    onClick: a => {
                        window.getSelection()?.removeAllRanges(), C(E, (0, n.b)(a))
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, t[41] = C, t[42] = E, t[43] = p) : p = t[43], t[44] !== y ? (q = null != y ? (0, d.jsx)(k.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), y()
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, t[44] = y, t[45] = q) : q = t[45], t[46] !== J || t[47] !== z || t[48] !== A ? (r = null != A ? (0, d.jsx)(k.b, {
                    autoFocus: "actions-focused" === J,
                    onClick: () => {
                        z?.(!0), K("edit")
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, t[46] = J, t[47] = z, t[48] = A, t[49] = r) : r = t[49], t[50] !== b || t[51] !== c || t[52] !== p || t[53] !== q || t[54] !== r ? (s = (0, d.jsxs)(k.a, {
                    children: [b, c, p, q, r]
                }), t[50] = b, t[51] = c, t[52] = p, t[53] = q, t[54] = r, t[55] = s) : s = t[55], s
            }
        })
    }),
    AD0n: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("bqtn"),
            h = c("bf6R");

        function i() {}
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k = (0, e.c)(13),
                    {
                        startNewChat: l,
                        renderChatMenu: m,
                        presentation: n,
                        newChatDisabled: o,
                        onAction: p,
                        fixedActions: q
                    } = a,
                    r = void 0 === n ? "chat" : n,
                    s = void 0 !== o && o,
                    t = void 0 === p ? i : p;
                if (null != m) {
                    let a;
                    return k[0] !== q || k[1] !== s || k[2] !== t || k[3] !== r || k[4] !== m ? (a = m({
                        presentation: r,
                        newChatDisabled: s,
                        onAction: t,
                        fixedActions: q
                    }), k[0] = q, k[1] = s, k[2] = t, k[3] = r, k[4] = m, k[5] = a) : a = k[5], a
                }
                return k[6] !== t || k[7] !== l ? (b = () => {
                    t(), l()
                }, k[6] = t, k[7] = l, k[8] = b) : b = k[8], k[9] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(f.a, {
                    id: "floatingComposer.newChat",
                    defaultMessage: "New chat"
                }), k[9] = c) : c = k[9], k[10] !== s || k[11] !== b ? (j = (0, d.jsx)(g.c.Item, {
                    LeftIcon: h.di,
                    disabled: s,
                    onSelect: b,
                    children: c
                }), k[10] = s, k[11] = b, k[12] = j) : j = k[12], j
            }
        })
    }),
    dDDU: (function(a, b, c) {
        var d = c("Qgfj"),
            e = c("Kyn2"),
            f = c("nnol"),
            g = c("QcW8"),
            h = c("ZU27"),
            i = c("bf6R"),
            j = c("GaA7"),
            k = c("Vhua"),
            l = c("NkWL");
        c.d(b, {}, {
            a: function(a) {
                let b = a.get(g.Y);
                return a.get(g.V) || b?.isVisible !== !0 || "split" !== b.mode && !a.get(l.c) ? [] : function(a, b) {
                    let g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.l,
                        m = a.get(k.i),
                        n = [];
                    return "chat" === b || b.isWorkspaceHome || null == b.tabType.windowTransfer || null == j.a.detachedWindows || n.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !m && !(0, f.c)(a, b.tabId) && b.tabType.windowTransfer.canTransfer(a, b.props),
                        icon: i.Zg,
                        message: (0, d.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, e.a)(a, Promise.resolve().then(c.bind(c, "K3jS")).then(c => {
                                let {
                                    moveTabToNewWindow: d
                                } = c;
                                return d(a, g, b, null)
                            }))
                        }
                    }), "chat" === b && a.get(l.c) && n.push({
                        id: "close-tab",
                        menuShortcut: "W",
                        icon: i.Fj,
                        message: (0, d.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, l.a)(a)
                    }), n
                }(a, "chat")
            }
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
    jFtA: (function(a, b) {
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
    J8BG: (function(a, b) {
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
    QY8z: (function(a, b) {
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
    U572: (function(a, b) {
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
    qt75: (function(a, b) {
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
    DUBn: (function(a, b) {
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
    qLwp: (function(a, b) {
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
    oUwH: (function(a, b) {
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
    pVnK: (function(a, b) {
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
    Y8tz: (function(a, b) {
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
    fHxn: (function(a, b) {
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
    zZ6A: (function(a, b) {
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
    k5yx: (function(a, b) {
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
    Khto: (function(a, b) {
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
    IySy: (function(a, b) {
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
    axbG: (function(a, b) {
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
    hjXH: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "minus-sm-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-minus-sm-light-20",
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
    DX10: (function(a, b) {
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
    AET4: (function(a, b) {
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
    wPPd: (function(a, b) {
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
    KCC0: (function(a, b) {
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
    Ev4x: (function(a, b) {
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
    amgE: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    CNe4: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    A72r: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    dKBg: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    dMDd: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    O6Fc: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    RQFS: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    NwAy: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    GBCQ: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    fAic: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
        c.d(b, {}, {
            a: d
        })
    }),
    DCs1: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    PVkT: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    R2ep: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    kTBY: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    hC5q: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    tKZD: (function(a, b, c) {
        let d = (0, (c("ESTr")).a)({
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
    h24K: (function(a, b, c) {
        var d = c("gPp5");
        class e {
            constructor() {
                this.componentControls = new Set
            }
            subscribe(a) {
                return this.componentControls.add(a), () => this.componentControls.delete(a)
            }
            start(a, b) {
                this.componentControls.forEach(c => {
                    c.start(a.nativeEvent || a, b)
                })
            }
            cancel() {
                this.componentControls.forEach(a => {
                    a.cancel()
                })
            }
            stop() {
                this.componentControls.forEach(a => {
                    a.stop()
                })
            }
        }
        let f = () => new e;
        c.d(b, {}, {
            a: function() {
                return (0, d.a)(f)
            }
        })
    })
};