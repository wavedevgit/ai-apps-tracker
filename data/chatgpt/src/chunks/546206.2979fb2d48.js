export const __rspack_esm_ids = [546206];
export const __webpack_modules__ = {
    vVGb: (function(e, t, n) {
        var o = n("uAAd");

        function i(e) {
            let t = l(e);
            if (!t) return null;
            let n = t.split(":"),
                i = n[0];
            if (!i) return null;
            let a = n[1] ?? i,
                s = (0, o.j)(i),
                d = (0, o.c)(i),
                c = (0, o.j)(a),
                u = (0, o.c)(a),
                h = {
                    startRow: Math.min(s, c),
                    startCol: Math.min(d, u),
                    endRow: Math.max(s, c),
                    endCol: Math.max(d, u)
                };
            return {
                ref: r(h),
                bounds: h
            }
        }

        function r(e) {
            let t = a(e.startRow, e.startCol),
                n = a(e.endRow, e.endCol);
            return t === n ? t : `${t}:${n}`
        }

        function a(e, t) {
            return `${(0,o.d)(t)}${e+1}`
        }

        function l(e) {
            let t = e.trim();
            return t ? (t.includes("!") ? t.slice(t.indexOf("!") + 1) : t).replace(/\$/g, "").toUpperCase() : null
        }
        n.d(t, {}, {
            a: function(e) {
                return {
                    rows: e.endRow - e.startRow + 1,
                    cols: e.endCol - e.startCol + 1
                }
            },
            b: r,
            c: a,
            d: l,
            e: i,
            f: function(e, t) {
                return e.startRow <= t.endRow && e.endRow >= t.startRow && e.startCol <= t.endCol && e.endCol >= t.startCol
            },
            g: function(e) {
                var t;
                let n = e.startsWith("=") ? e.slice(1) : e,
                    o = n.indexOf("!");
                if (-1 === o) {
                    let e = i(n);
                    return {
                        ref: e?.ref ?? n
                    }
                }
                let r = n.slice(0, o),
                    a = n.slice(o + 1),
                    l = i(a);
                return {
                    sheetName: (t = r).startsWith("'") && t.endsWith("'") && t.length >= 2 ? t.slice(1, -1).replace(/''/g, "'") : t,
                    ref: l?.ref ?? a
                }
            }
        })
    }),
    P0hF: (function(e, t, n) {
        let o = Object.freeze(Object.fromEntries(["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#800000", "#008000", "#000080", "#808000", "#800080", "#008080", "#C0C0C0", "#808080", "#9999FF", "#993366", "#FFFFCC", "#CCFFFF", "#660066", "#FF8080", "#0066CC", "#CCCCFF", "#000080", "#FF00FF", "#FFFF00", "#00FFFF", "#800080", "#800000", "#008080", "#0000FF", "#00CCFF", "#CCFFFF", "#CCFFCC", "#FFFF99", "#99CCFF", "#FF99CC", "#CC99FF", "#FFCC99", "#3366FF", "#33CCCC", "#99CC00", "#FFCC00", "#FF9900", "#FF6600", "#666699", "#969696", "#003366", "#339966", "#003300", "#333300", "#993300", "#993366", "#333399", "#333333", "#000000", "#FFFFFF"].map((e, t) => [`indexed:${t}`, e])));
        n.d(t, {}, {
            a: o,
            b: function(e) {
                if (!e?.length) return o;
                let t = {
                    ...o
                };
                for (let [n, o] of e.entries()) {
                    if (64 === n || 65 === n) continue;
                    let e = o.value.replace(/^#/, "");
                    t[`indexed:${n}`] = `#${8===e.length?e.slice(2):e}`
                }
                return Object.freeze(t)
            }
        })
    }),
    RqRN: (function(e, t, n) {
        n.r(t);
        var o = n("vVGb");
        let i = "CSV import",
            r = /\\|\/|\?|\*|\[|\]|:/g;

        function a(e) {
            return ((e ?? i).trim().replace(r, "").trim() || i).slice(0, 31)
        }
        n.d(t, {}, {
            planCsvImport: function(e, t) {
                let n = function(e) {
                        let t = e ?? ",";
                        if (1 !== t.length) throw Error(`CSV import separator must be a single character; received "${t}".`);
                        return t
                    }(t?.separator),
                    i = (0, o.g)(t?.anchor ?? "A1"),
                    r = i.sheetName?.trim(),
                    l = t?.sheetName?.trim();
                if (r && l && r !== l) throw Error(`CSV import specifies conflicting sheet names: "${l}" (options.sheetName) vs "${r}" (anchor).`);
                let s = a(r ?? l),
                    d = (0, o.e)(i.ref);
                if (!d) throw Error(`CSV import anchor must be an A1 cell reference; received "${t?.anchor??"A1"}".`);
                let {
                    bounds: c
                } = d;
                if (c.startRow !== c.endRow || c.startCol !== c.endCol) throw Error(`CSV import anchor must be a single cell reference; received "${t?.anchor??"A1"}".`);
                let u = function(e, t) {
                        if (!e.trim()) return [];
                        let n = function(e, t) {
                            let n = [],
                                o = [],
                                i = "",
                                r = !1,
                                a = () => {
                                    o.push(i), i = ""
                                },
                                l = () => {
                                    n.push(o), o = []
                                };
                            for (let n = 0; n < e.length; n += 1) {
                                let o = e[n] ?? "";
                                if (r) {
                                    if ('"' === o) {
                                        if ('"' === e[n + 1]) {
                                            i += '"', n += 1;
                                            continue
                                        }
                                        r = !1;
                                        continue
                                    }
                                    i += o;
                                    continue
                                }
                                if ('"' === o) {
                                    r = !0;
                                    continue
                                }
                                if (o === t) {
                                    a();
                                    continue
                                }
                                if ("\n" === o) {
                                    a(), l();
                                    continue
                                }
                                if ("\r" === o) {
                                    "\n" === e[n + 1] && (n += 1), a(), l();
                                    continue
                                }
                                i += o
                            }
                            for (a(), l(); n.length > 0;) {
                                let e = n[n.length - 1] ?? [];
                                if (!(e.length > 0 && e.every(e => "" === e))) break;
                                n.pop()
                            }
                            return n
                        }(e, t);
                        if (0 === n.length) return [];
                        let o = n.reduce((e, t) => Math.max(e, t.length), 0);
                        return 0 === o ? [] : n.map(e => {
                            if (e.length === o) return e;
                            let t = e.slice();
                            for (; t.length < o;) t.push("");
                            return t
                        })
                    }(e, n),
                    h = u.length,
                    f = h > 0 ? u[0]?.length ?? 0 : 0;
                if (0 === h || 0 === f) return {
                    sheetName: s,
                    values: []
                };
                let C = {
                    startRow: c.startRow,
                    startCol: c.startCol,
                    endRow: c.startRow + h - 1,
                    endCol: c.startCol + f - 1
                };
                return {
                    sheetName: s,
                    values: u,
                    rangeRef: (0, o.b)(C),
                    rect: {
                        r1: C.startRow,
                        c1: C.startCol,
                        r2: C.endRow,
                        c2: C.endCol
                    }
                }
            },
            sanitizeSheetName: a
        })
    }),
    uAAd: (function(e, t, n) {
        var o = n("P0hF");
        let i = 4 / 3;

        function r(e) {
            return Math.ceil(e && e > 0 ? e : 7)
        }
        n.d(t, {}, {
            a: function(e) {
                let t = e.replace(/^0x/i, "");
                if (8 === t.length) {
                    let e = parseInt(t.slice(2, 4), 16),
                        n = parseInt(t.slice(4, 6), 16),
                        o = parseInt(t.slice(6, 8), 16);
                    return `rgba(${e}, ${n}, ${o}, 1.000)`
                }
                return 6 === t.length ? `#${t}` : "#ffffff"
            },
            b: function(e, t) {
                return null == e || e <= 0 ? 64 : e * r(t)
            },
            c: function(e) {
                let t = e.match(/[A-Z]+/);
                if (!t) return 0;
                let n = 0;
                for (let e of t[0]) n = 26 * n + (e.charCodeAt(0) - 64);
                return n - 1
            },
            d: function(e) {
                let t = "";
                for (e += 1; e;) {
                    let n = (e - 1) % 26;
                    t = String.fromCharCode(65 + n) + t, e = Math.floor((e - n) / 26)
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
                return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(100 * (e / r(t))) / 100
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
    ylLY: (function(e, t, n) {
        let o = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: o
        })
    }),
    FRzY: (function(e, t, n) {
        n.d(t, {
            a: () => l
        });
        var o = n("ABep"),
            i = n("on57"),
            r = n("pZwg"),
            a = n("Ra0C");
        let l = e => {
            let {
                children: t,
                className: n,
                variant: l = "soft",
                color: s = "secondary",
                size: d = "sm",
                pill: c = r.a.pill
            } = e;
            return (0, o.jsx)("div", {
                className: (0, i.b)("Badge-GbHWPL", n),
                "data-color": s,
                "data-size": d,
                "data-pill": c ? "" : void 0,
                "data-variant": l,
                children: (0, a.a)(t)
            })
        }
    }),
    k6sM: (function(e, t, n) {
        var o = n("ABep");
        n.d(t, {}, {
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
    Y8CA: (function(e, t, n) {
        var o = n("BDAQ"),
            i = n("lAQI"),
            r = n("RmZI");
        let a = i.K({
                arguments: i.J(i.L(), i.x()).optional(),
                name: r.a,
                type: i.z("mcp_app_tool")
            }),
            l = i.m("type", [a, o.e]);
        n.d(t, {}, {
            a: l
        })
    }),
    XHk2: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            r = n("zd8w"),
            a = n("vi3X"),
            l = n("fDIZ"),
            s = n("El6m");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, c, u = (0, i.c)(14),
                    {
                        paneContext: h,
                        children: f
                    } = e,
                    C = (0, r.useContext)(s.b),
                    p = (0, r.useContext)(l.a),
                    m = (0, r.useContext)(a.a);
                u[0] !== m || u[1] !== p || u[2] !== h || u[3] !== C ? (t = h ?? {
                    transition: C,
                    escapeHandler: p,
                    bannerTarget: m
                }, u[0] = m, u[1] = p, u[2] = h, u[3] = C, u[4] = t) : t = u[4];
                let g = t;
                return u[5] !== f || u[6] !== g.bannerTarget ? (n = (0, o.jsx)(a.a, {
                    value: g.bannerTarget,
                    children: f
                }), u[5] = f, u[6] = g.bannerTarget, u[7] = n) : n = u[7], u[8] !== g.escapeHandler || u[9] !== n ? (d = (0, o.jsx)(l.a, {
                    value: g.escapeHandler,
                    children: n
                }), u[8] = g.escapeHandler, u[9] = n, u[10] = d) : d = u[10], u[11] !== g.transition || u[12] !== d ? (c = (0, o.jsx)(s.b, {
                    value: g.transition,
                    children: d
                }), u[11] = g.transition, u[12] = d, u[13] = c) : c = u[13], c
            }
        })
    }),
    mYNH: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            r = n("l2oX"),
            a = n("Q840"),
            l = n("zd8w"),
            s = n("Wf1j"),
            d = n("Q2Qp"),
            c = n("QcW8"),
            u = n("ZU27"),
            h = n("wD9O"),
            f = n("nKJ6"),
            C = n("kois"),
            p = n("vi3X"),
            m = n("O9Pc"),
            g = n("fDIZ"),
            x = n("jEN2"),
            w = n("AKr5"),
            y = n("wqvF"),
            v = n("giDA"),
            b = n("fQ9c"),
            T = n("ttIa"),
            _ = n("xD3Z"),
            E = n("Z2JT"),
            M = n("Sgih"),
            k = n("zeCl"),
            L = n("tSEg"),
            F = n("hZax"),
            B = n("SHid"),
            A = n("El6m"),
            R = n("dN0a"),
            S = n("WwnD"),
            I = n("giVD"),
            H = n("Vhua"),
            V = n("Azn0"),
            O = n("XHk2"),
            j = n("abd8"),
            N = n("GMTh");
        let P = (0, a.c)(L.a, e => {
            let {
                get: t
            } = e, n = t(u.l.activeTab$);
            if (n?.tabType.kind !== k.a) return !1;
            let o = k.b.safeParse(n.props);
            if (!o.success) return !1;
            let i = t(C.i),
                r = i?.kind === "codex" ? i : i?.page;
            return r?.accountId === o.data.accountId && r?.pageId === o.data.pageId && (i?.kind === "codex" ? null == i.documentType : i?.turnAttribution?.origin_page_document_type === "page")
        });

        function z(e) {
            return (0, o.jsx)(_.a, {
                ...e
            })
        }

        function D(e) {
            let t, n, r, s, d, c, u, h, f, C, p, m, g, x = (0, i.c)(43),
                {
                    children: w,
                    composerRef: y,
                    mainContentElement: b,
                    presentation: T,
                    paneContext: _,
                    layout: E,
                    reserveContent: M,
                    reserveFullComposerHeight: k
                } = e,
                F = (0, a.y)(L.a),
                B = (0, l.useContext)(A.b),
                S = (0, l.useContext)(v.a),
                {
                    activeBrowserTabId: I
                } = B,
                H = null != _,
                {
                    isCompact: V,
                    isDockedTop: j,
                    isHidden: N,
                    isMinimized: P
                } = T,
                {
                    isMoving: z,
                    composerContentHeight: D,
                    dockedReservePx: Z
                } = E,
                W = !M || N || P ? 0 : Math.max(118, V ? Z : 0, k ? D + 118 - 102 : 0),
                Y = j && V && Z > 0 ? W : 0,
                [$, G] = (0, l.useState)(!P);
            (V || P) && !P !== $ && G(!P);
            let U = M && !N && $ ? R.b : 0;
            x[0] !== I || x[1] !== y || x[2] !== H ? (t = () => {
                if (H || null == I) return;
                let e = y.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && y.current?.contains(e) && e.blur()
            }, n = [I, y, H], x[0] = I, x[1] = y, x[2] = H, x[3] = t, x[4] = n) : (t = x[3], n = x[4]), (0, l.useLayoutEffect)(t, n), x[5] !== y || x[6] !== U || x[7] !== j || x[8] !== N || x[9] !== P || x[10] !== H || x[11] !== b || x[12] !== W || x[13] !== F || x[14] !== Y ? (r = () => {
                if (H || null == b) return;
                F.set(R.n, {
                    owner: y,
                    style: {
                        [R.a]: j ? `${U}px 0 0` : `0 0 ${U}px`,
                        [R.c]: `${N||P||j?0:102}px`,
                        [R.d]: `${j?0:W}px`,
                        [R.g]: `${j?W:0}px`
                    }
                }), (0, R.u)(F, j ? 0 : W), F.set(R.o, Y);
                let e = j ? "top" : "bottom";
                F.set(R.k, 0 === U ? null : e)
            }, s = [y, U, H, j, N, P, b, W, F, Y], x[5] = y, x[6] = U, x[7] = j, x[8] = N, x[9] = P, x[10] = H, x[11] = b, x[12] = W, x[13] = F, x[14] = Y, x[15] = r, x[16] = s) : (r = x[15], s = x[16]), (0, l.useLayoutEffect)(r, s), x[17] !== y || x[18] !== H || x[19] !== b || x[20] !== F ? (d = () => {
                if (!H && null != b) return () => {
                    let e = F.get(R.n);
                    e?.owner === y && (F.set(R.n, {
                        ...e,
                        owner: null
                    }), (0, R.u)(F, 0), F.set(R.o, 0), F.set(R.k, null))
                }
            }, c = [y, H, b, F], x[17] = y, x[18] = H, x[19] = b, x[20] = F, x[21] = d, x[22] = c) : (d = x[21], c = x[22]), (0, l.useLayoutEffect)(d, c);
            let Q = !V || P || z || D > 102;
            x[23] !== y || x[24] !== Q || x[25] !== H || x[26] !== F ? (u = () => {
                let e = y.current;
                if (H || null == e) return;
                let t = () => {
                    let t = !Q && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    F.set(R.j, Q || t)
                };
                t();
                let n = Q ? null : new MutationObserver(t);
                return n?.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    n?.disconnect()
                }
            }, h = [y, Q, H, F], x[23] = y, x[24] = Q, x[25] = H, x[26] = F, x[27] = u, x[28] = h) : (u = x[27], h = x[28]), (0, l.useLayoutEffect)(u, h), x[29] !== H || x[30] !== F ? (C = () => () => {
                H || F.set(R.j, !1)
            }, f = [H, F], x[29] = H, x[30] = F, x[31] = f, x[32] = C) : (f = x[31], C = x[32]), (0, l.useLayoutEffect)(C, f);
            let K = null == _ ? S : _.overlayOwner,
                q = H ? "contents" : void 0;
            return x[33] !== w || x[34] !== y || x[35] !== q ? (p = (0, o.jsx)("div", {
                ref: y,
                className: q,
                "data-right-panel-composer-overlay-content": "true",
                children: w
            }), x[33] = w, x[34] = y, x[35] = q, x[36] = p) : p = x[36], x[37] !== K || x[38] !== p ? (m = (0, o.jsx)(v.a, {
                value: K,
                children: p
            }), x[37] = K, x[38] = p, x[39] = m) : m = x[39], x[40] !== _ || x[41] !== m ? (g = (0, o.jsx)(O.a, {
                paneContext: _,
                children: m
            }), x[40] = _, x[41] = m, x[42] = g) : g = x[42], g
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, C, _, k, O, Z = (0, i.c)(62),
                    {
                        children: W,
                        composerOnly: Y,
                        forceExpanded: $,
                        placement: G,
                        showHeader: U,
                        showConversationTitleMenu: Q,
                        showComposerDivider: K,
                        isHidden: q,
                        persistPresentation: X,
                        reserveContent: J,
                        reserveFullComposerHeight: ee,
                        onPresentationChange: et,
                        title: en,
                        minimizedIcon: eo,
                        titleContent: ei,
                        statusState: er,
                        titleStatusState: ea,
                        hasElicitation: el,
                        notifications: es,
                        workingPreview: ed,
                        compactWorkingPreview: ec,
                        responsePreview: eu,
                        persistResponsePreview: eh,
                        renderTranscript: ef,
                        hasConversation: eC,
                        hasTranscript: ep,
                        pendingFormId: em,
                        emptyState: eg
                    } = e,
                    ex = void 0 !== Y && Y,
                    ew = void 0 !== $ && $,
                    ey = void 0 === U || U,
                    ev = void 0 === K ? !ex : K,
                    eb = void 0 === X || X,
                    eT = void 0 === em ? M.a : em,
                    e_ = (0, a.y)(L.a),
                    eE = "pane" === (void 0 === G ? "floating" : G),
                    eM = (0, F.f)("2163293173"),
                    ek = eM ? eg : void 0,
                    eL = !ex || eM && (null != ek || (ep ?? null != ef)),
                    eF = (0, a.z)(!!eL && V.a),
                    eB = (0, s.a)(),
                    {
                        isHidden: eA
                    } = (0, N.a)(eE ? "embedded" : "content"),
                    eR = void 0 !== q && q || eA,
                    eS = (0, a.z)(!(void 0 !== Q && Q) || eE || eR ? null : I.a),
                    eI = (0, l.useContext)(d.a),
                    eH = (0, l.useContext)(A.b),
                    eV = (0, l.useContext)(A.a),
                    eO = (0, l.useContext)(m.a),
                    ej = (0, l.useContext)(g.a),
                    eN = (0, l.useContext)(p.a),
                    eP = (0, l.useContext)(v.a),
                    ez = (0, h.c)();
                Z[0] !== ez ? (t = e => {
                    let {
                        x: t,
                        y: n
                    } = e;
                    return {
                        x: t / ez,
                        y: n / ez
                    }
                }, Z[0] = ez, Z[1] = t) : t = Z[1];
                let eD = t,
                    [eZ, eW] = (0, l.useState)(null),
                    eY = !(0, a.z)(R.s),
                    e$ = (0, l.useRef)(null),
                    eG = (0, a.z)(eT),
                    eU = (0, a.z)(eb ? E.b : void 0);
                eL || ey || (eU = "compact");
                let eQ = (0, a.z)(null == eG && (el ?? A.c)),
                    eK = (0, a.z)(u.l.activeTab$),
                    eq = (0, a.z)(eE || eR ? null : P),
                    eX = (0, a.z)(c.n),
                    eJ = (0, a.z)(!!eX && H.i);
                Z[2] !== eK || Z[3] !== eE ? (n = eE ? null : (0, f.getThreadBrowserTabIdFromPanelTab)(eK), Z[2] = eK, Z[3] = eE, Z[4] = n) : n = Z[4];
                let e1 = n,
                    e2 = void 0 !== ee && ee || eK?.tabType.kind === "latex-document" || eK?.tabType.kind === "image-preview";
                Z[5] !== eG ? (C = () => {
                    let e = null != eG ? (0, w.a)(e$.current) : e$.current?.querySelector("[contenteditable='true']");
                    null == e || (0, x.g)(e) || e.focus({
                        preventScroll: !0
                    })
                }, Z[5] = eG, Z[6] = C) : C = Z[6];
                let e0 = C;
                Z[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, o.jsx)("div", {
                    ref: e => {
                        null != e && eW(e)
                    },
                    className: "contents"
                }), Z[7] = _) : _ = Z[7];
                let e5 = eE || eR;
                return Z[8] !== e1 || Z[9] !== eK || Z[10] !== eq || Z[11] !== eL || Z[12] !== eF || Z[13] !== W || Z[14] !== ec || Z[15] !== ex || Z[16] !== eM || Z[17] !== ek || Z[18] !== e0 || Z[19] !== ew || Z[20] !== eC || Z[21] !== eQ || Z[22] !== ep || Z[23] !== eX || Z[24] !== eN || Z[25] !== ej || Z[26] !== eP || Z[27] !== eV || Z[28] !== eH || Z[29] !== eB || Z[30] !== eR || Z[31] !== eY || Z[32] !== eE || Z[33] !== eI || Z[34] !== eo || Z[35] !== eJ || Z[36] !== es || Z[37] !== et || Z[38] !== eZ || Z[39] !== eG || Z[40] !== eb || Z[41] !== eh || Z[42] !== ef || Z[43] !== J || Z[44] !== eu || Z[45] !== e_ || Z[46] !== e2 || Z[47] !== ev || Z[48] !== ey || Z[49] !== er || Z[50] !== eU || Z[51] !== eO || Z[52] !== en || Z[53] !== ei || Z[54] !== eS || Z[55] !== ea || Z[56] !== eD || Z[57] !== ed ? (k = e => (0, o.jsx)(r.a, {
                    transformPagePoint: eD,
                    children: (0, o.jsx)(A.b, {
                        value: eE ? eH : {
                            activeBrowserTabId: e1,
                            isInsideOverlay: !0,
                            isFloatingChatNavigationCurrent: eH.isFloatingChatNavigationCurrent,
                            onAttachmentAdded: () => {
                                e_.get(u.l.activeTab$)?.tabId === eK?.tabId && (e_.get(R.l) || (0, R.i)(e_, {
                                    prefersReducedMotion: !0
                                }), (0, x.d)())
                            },
                            shouldAnimate: !1
                        },
                        children: (0, o.jsx)(A.a, {
                            value: eE ? eV : "expanded",
                            children: (0, o.jsx)(T.a, {
                                preserveLayoutOnEscape: !0,
                                contentChat: {
                                    focusComposer: e0,
                                    onOpenRightPane: eX && eF ? () => {
                                        (0, S.a)(e_, "chat") && eM && e_.set(B.a, e_.get(c.hb))
                                    } : void 0,
                                    openRightPaneDisabled: eJ
                                },
                                dockThreadKey: j.c,
                                canDock: eL || ey,
                                titleContent: eS ?? ei,
                                minimizedIcon: eo,
                                statusState: er,
                                titleStatusState: ea,
                                hasTranscript: ep,
                                hasConversation: eC,
                                emptyState: ek,
                                pendingFormId: eG,
                                notifications: es,
                                workingPreview: ed,
                                compactWorkingPreview: ec,
                                responsePreview: eu,
                                persistResponsePreview: eh,
                                containerSize: e,
                                minimumWidth: eq ? 240 : void 0,
                                renderMenu: eX ? void 0 : z,
                                forceExpanded: ew || eQ && (eM || !ex),
                                isHidden: eE || eR,
                                isMinimized: eY,
                                presentation: eU,
                                showHeader: ey,
                                showComposerDivider: ev,
                                background: ex && !ey ? void 0 : "panel",
                                onPresentationChange: e => {
                                    eb && e_.set(E.b, e), et?.(e)
                                },
                                onMinimizedChange: e => {
                                    (0, R.t)(e_, e)
                                },
                                title: en ?? eB.formatMessage({
                                    id: "quickChat.mainConversation",
                                    defaultMessage: "Chat"
                                }),
                                renderTranscript: null == ef ? void 0 : (e, t) => ef({
                                    isVisible: t && !eE && !eR
                                }),
                                renderComposer: (e, t) => (0, o.jsx)(m.a, {
                                    value: eE || null == e1 ? eO : eI,
                                    children: (0, o.jsx)(y.a, {
                                        target: eE ? eZ : null,
                                        children: (0, o.jsx)(D, {
                                            composerRef: e$,
                                            mainContentElement: eI,
                                            presentation: e,
                                            paneContext: eE ? {
                                                transition: eH,
                                                escapeHandler: ej,
                                                bannerTarget: eN,
                                                overlayOwner: eP
                                            } : void 0,
                                            layout: t,
                                            reserveFullComposerHeight: e2,
                                            reserveContent: J ?? (null == e1 && eK?.tabType.kind !== "mcp-app" && eK?.tabType.kind !== "mcp-extension"),
                                            children: "function" == typeof W ? W(eE ? void 0 : e) : W
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), Z[8] = e1, Z[9] = eK, Z[10] = eq, Z[11] = eL, Z[12] = eF, Z[13] = W, Z[14] = ec, Z[15] = ex, Z[16] = eM, Z[17] = ek, Z[18] = e0, Z[19] = ew, Z[20] = eC, Z[21] = eQ, Z[22] = ep, Z[23] = eX, Z[24] = eN, Z[25] = ej, Z[26] = eP, Z[27] = eV, Z[28] = eH, Z[29] = eB, Z[30] = eR, Z[31] = eY, Z[32] = eE, Z[33] = eI, Z[34] = eo, Z[35] = eJ, Z[36] = es, Z[37] = et, Z[38] = eZ, Z[39] = eG, Z[40] = eb, Z[41] = eh, Z[42] = ef, Z[43] = J, Z[44] = eu, Z[45] = e_, Z[46] = e2, Z[47] = ev, Z[48] = ey, Z[49] = er, Z[50] = eU, Z[51] = eO, Z[52] = en, Z[53] = ei, Z[54] = eS, Z[55] = ea, Z[56] = eD, Z[57] = ed, Z[58] = k) : k = Z[58], Z[59] !== e5 || Z[60] !== k ? (O = (0, o.jsxs)(o.Fragment, {
                    children: [_, (0, o.jsx)(b.a, {
                        isHidden: e5,
                        children: k
                    })]
                }), Z[59] = e5, Z[60] = k, Z[61] = O) : O = Z[61], O
            }
        })
    }),
    ckwE: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            r = n("zd8w"),
            a = n("VnEZ");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, i.c)(3),
                    {
                        children: l,
                        binding: s
                    } = e,
                    [d] = (0, r.useState)(a.b),
                    c = s ?? d;
                return n[0] !== l || n[1] !== c ? (t = (0, o.jsx)(a.a, {
                    value: c,
                    children: l
                }), n[0] = l, n[1] = c, n[2] = t) : t = n[2], t
            }
        })
    }),
    C6kc: (function(e, t, n) {
        var o = n("mBJV"),
            i = n("MVHH"),
            r = n("D99L"),
            a = n("fVOX"),
            l = n("yGJW"),
            s = n("g2p6");

        function d(e, t, n) {
            "memory_footnote_shown" === t && (0, l.a)(e, r.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: n
            }), e.get(a.a).count("default", t, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: n,
                target: "search_sources_sidebar"
            })
        }
        n.d(t, {
            a: () => i.Y
        }, {
            b: function(e, t) {
                let {
                    actionType: n,
                    conversationId: o,
                    experiment: r,
                    messageId: a,
                    source: s,
                    feedback: c,
                    selectedFeedback: u,
                    surface: h = "sources"
                } = t, f = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === c ? f = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === c ? f = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(c, null) && (f = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let C = null == s ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === h && (C = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, l.a)(e, i.X, {
                    actionType: n,
                    conversationId: o ?? void 0,
                    messageId: a,
                    citationUuid: s?.citationUuid ?? void 0,
                    sourceType: function(e) {
                        switch (e?.conversationContextType) {
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
                    }(s),
                    feedback: f,
                    selectedFeedback: null == u ? void 0 : ({
                        positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                        negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE"
                    })[u],
                    entrypoint: C,
                    target: "explainer" === h || "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED" === n ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR",
                    memoryCitationExperiment: r
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === n && d(e, "chatgpt_memory_citations_sidebar_open_clicked", r)
            },
            c: function(e, t) {
                "dismissed" === t && (0, l.a)(e, r.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: s.c
                }), "shown" === t && (0, l.a)(e, o.xd, {
                    eventId: `${s.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: d
        })
    }),
    pV06: (function(e, t, n) {
        var o = n("JjRy"),
            i = n.n(o),
            r = n("AuIy"),
            a = n("G4E3"),
            l = n("KaH3"),
            s = n("Yz3b"),
            d = n("pqpL"),
            c = n("ghNX"),
            u = n("KvVi"),
            h = n("m250"),
            f = n("H8lk"),
            C = n("Ng4B"),
            p = n("bTKb"),
            m = n("dGDB"),
            g = n("lIsV");

        function x(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        n.d(t, {}, {
            a: function(e) {
                var t;
                let n, o, {
                        automationReferences: w,
                        includePages: y = !1,
                        includeSources: v,
                        messages: b,
                        pendingAttachments: T = [],
                        resources: _ = (0, f.e)(b),
                        turns: E,
                        isTurnActive: M = E.at(-1)?.turn.status === "in_progress"
                    } = e,
                    k = [..._.inputs],
                    L = v ? (0, C.a)(b, E) : [],
                    F = new Map,
                    B = new Map,
                    A = (t = b, -1 !== (n = i()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, g.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    R = [],
                    S = new Map(b.map(e => [(0, r.g)(e), e])),
                    I = i()(b, e => "user" === e.author.role),
                    H = [];
                for (let e of T) k.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || k.push({
                    downloadTarget: {
                        fileId: e.id,
                        type: "file-id"
                    },
                    fileId: e.id,
                    key: `input:pending:${e.id}`,
                    kind: "file",
                    libraryFileId: e.libraryFileId ?? null,
                    messageId: "pending-submission",
                    mimeType: e.mimeType,
                    mountedLibraryFileId: e.mountedLibraryFileId,
                    sourceMimeType: e.mountedLibraryMimeType,
                    sourceUrl: e.sourceUrl,
                    name: e.name,
                    sandboxPath: null,
                    sizeBytes: e.size ?? null
                });
                for (let {
                        id: e,
                        turn: t
                    }
                    of E) {
                    if (v && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = S.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, h.j)(t.metadata) && R.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, h.c)(t.metadata)
                            })
                        }
                    for (let n of x(t.items)) {
                        if (y && "mcp-tool-call" === n.type) {
                            let e = (0, c.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, a.d)(e.url);
                                if (t?.kind === "page") {
                                    let n = B.get(t.id);
                                    B.set(t.id, {
                                        key: `page:${t.id}`,
                                        kind: "page",
                                        pageId: t.id,
                                        title: e.title ?? n?.title ?? null
                                    })
                                }
                            }
                        }
                        if (y && "assistant-message" === n.type && n.completed)
                            for (let e of (0, d.c)(n.content)) B.has(e.id) || B.set(e.id, {
                                key: `page:${e.id}`,
                                kind: "page",
                                pageId: e.id,
                                title: null
                            });
                        if ("todo-list" === n.type) {
                            H = n.plan.map((t, n) => ({
                                key: `progress:${e}:${String(n)}`,
                                label: t.step,
                                status: A ? "completed" : t.status
                            }));
                            continue
                        }
                        if ("generated-image" === n.type && "completed" === n.status && null != n.src) {
                            let e = `image:${n.id}`;
                            F.set(e, {
                                image: n,
                                key: e,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let V = (0, l.b)(E.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return x(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return o = null == V ? [..._.outputs, ...B.values(), ...F.values()] : [{
                    ...V,
                    key: `site:${V.projectId}`,
                    kind: "site"
                }, ..._.outputs.filter(e => null == V.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, V.archivePath)), ...B.values(), ...F.values()], {
                    automationIds: (0, u.b)(b, w ?? void 0),
                    browserScreenshots: (0, p.e)(b),
                    inputs: k,
                    sourceTurns: R,
                    outputs: o,
                    progressSteps: H,
                    isPlanSummaryUpdating: M && b.slice(I + 1).some(e => "assistant" === e.author.role && u.a.test(e.recipient ?? "") || "tool" === e.author.role && u.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${E.at(-1)?.id??""}:${M}`,
                    showSources: v,
                    sources: v ? [...Array.from(new Map(b.filter(e => "user" === e.author.role).flatMap(e => (0, s.a)((0, r.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...L.filter(e => "memory" === e.kind), ...new Map(E.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ..._.pluginSources, ...L.filter(e => "web" === e.kind && "apps" === e.category), ...L.filter(e => "file-source" === e.kind), ...L.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, m.a)(b)?.subagents ?? []
                }
            }
        })
    }),
    JlMc: (function(e, t, n) {
        var o = n("QosV"),
            i = n("Q840"),
            r = n("zd8w"),
            a = n("RU3e");
        n("bjAA");
        var l = n("OWtl");
        n("CKur"), n("XtQP");
        var s = n("dQRk"),
            d = n("UWHW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, u, h = (0, o.c)(10),
                    {
                        conversationId: f,
                        isTranscriptVisible: C
                    } = e,
                    p = void 0 === C || C,
                    m = (0, i.y)(l.a),
                    g = (0, r.useId)();
                return h[0] !== f || h[1] !== g || h[2] !== m ? (t = () => (m.set(d.b, e => new Map(e).set(g, f)), m.get(d.a)?.dismissCurrent(), () => {
                    m.set(d.b, e => {
                        let t = new Map(e);
                        return t.delete(g), t
                    })
                }), n = [f, g, m], h[0] = f, h[1] = g, h[2] = m, h[3] = t, h[4] = n) : (t = h[3], n = h[4]), (0, r.useEffect)(t, n), h[5] !== f || h[6] !== p || h[7] !== m ? (c = () => {
                    if (!p) return;
                    let e = m.watch(e => {
                        let {
                            get: t
                        } = e, n = !0 === t(a.b);
                        (0, s.ec)(m, f, n)
                    });
                    return () => {
                        e(), (0, s.ec)(m, f, !1)
                    }
                }, u = [f, p, m], h[5] = f, h[6] = p, h[7] = m, h[8] = c, h[9] = u) : (c = h[8], u = h[9]), (0, r.useEffect)(c, u), null
            }
        })
    }),
    DvP0: (function(e, t, n) {
        let o = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: o
        })
    }),
    b7aP: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            r = n("oyxz"),
            a = n("Bbed"),
            l = n("iS3k");
        let s = (0, a.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(362890)]).then(n.bind(n, "hhV7"))).ChatGptThreadSummaryPanelBody, {
            errorFallback: (0, o.jsx)("span", {
                className: "px-5 select-none",
                role: "status",
                children: (0, o.jsx)(r.a, {
                    id: "chatgptConversations.summaryPanel.loadError",
                    defaultMessage: "Summary could not load. Reload the app to try again"
                })
            })
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, i.c)(2);
                return n[0] !== e ? (t = (0, o.jsx)(l.a.Content, {
                    children: (0, o.jsx)(s, {
                        ...e
                    })
                }), n[0] = e, n[1] = t) : t = n[1], t
            }
        })
    }),
    vpdG: (function(e, t, n) {
        var o = n("QosV"),
            i = n("HVBu"),
            r = n.n(i),
            a = n("Q840"),
            l = n("UKCO"),
            s = n("zd8w"),
            d = n("Gdjn"),
            c = n("xqnZ"),
            u = n("OWtl"),
            h = n("ADAj"),
            f = n("Ow2S"),
            C = n("fDfx"),
            p = n("dQRk");
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, m, g, x, w = (0, o.c)(19);
                w[0] !== e ? (t = void 0 === e ? {} : e, w[0] = e, w[1] = t) : t = w[1];
                let {
                    composerController: y,
                    conversationId: v,
                    draftKey: b,
                    initialPrompt: T,
                    initialPromptKind: _
                } = t, E = void 0 === b ? v : b, M = (0, a.y)(u.a);
                w[2] !== v || w[3] !== E || w[4] !== T || w[5] !== _ || w[6] !== M ? (n = () => r()(() => {
                    let e = null == v ? null : M.get(p.y, v),
                        t = (0, c.e)(T ?? (null == E ? "" : M.get(f.v, E)), {
                            addInitialContentToHistory: null == T && null != E,
                            defaultTextKind: _ ?? (null == T && null != E || (0, d.b)(T ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(M.get, l.yf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == T && null != v && "string" == typeof E && null != (0, C.k)(M, E) && "tpp" !== e && "flora" !== e && (0, f.W)(M, v, t.getChatGptPrompt().systemHints), t
                }), w[2] = v, w[3] = E, w[4] = T, w[5] = _, w[6] = M, w[7] = n) : n = w[7];
                let [k] = (0, s.useState)(n);
                w[8] !== k || w[9] !== y ? (i = y ?? k(), w[8] = k, w[9] = y, w[10] = i) : i = w[10];
                let L = i,
                    F = (0, s.useRef)(null);
                w[11] !== L || w[12] !== E || w[13] !== M ? (m = () => {
                    if (null == E) return;
                    let e = M.get(f.v, E);
                    return null != F.current && F.current !== e && L.restoreDraft(e), () => {
                        F.current = M.get(f.v, E)
                    }
                }, g = [L, E, M], w[11] = L, w[12] = E, w[13] = M, w[14] = m, w[15] = g) : (m = w[14], g = w[15]), (0, s.useLayoutEffect)(m, g), w[16] !== L || w[17] !== y ? (x = () => {
                    null != y || L.view.isDestroyed || L.destroy()
                }, w[16] = L, w[17] = y, w[18] = x) : x = w[18];
                let B = x;
                return (0, c.f)(B, L), L
            }
        })
    }),
    JjB1: (function(e, t, n) {
        var o = n("on57");
        let i = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif',
            r = (0, o.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p_:not(code,code_*)]:!font-sans", "[&_.ProseMirror_span:not(code_*)]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-[var(--annotation-comment-min-height,calc(var(--spacing)*6))]!");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: r,
            c: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
            d: {
                "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
                "--font-sans": i,
                "--font-ui-family": i,
                fontFamily: i
            }
        })
    }),
    YwjY: (function(e, t, n) {
        n.d(t, {
            a: () => l
        });
        var o = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            a = n("JjB1");

        function l(e) {
            let t, n, l, s, d, c, u, h, f, C, p, m, g, x, w = (0, i.c)(30);
            w[0] !== e ? ({
                className: n,
                children: t,
                style: s,
                isRevealingPageComment: d,
                surfaceVariant: c,
                discussion: u,
                hasRecipientControl: h,
                ...l
            } = e, w[0] = e, w[1] = t, w[2] = n, w[3] = l, w[4] = s, w[5] = d, w[6] = c, w[7] = u, w[8] = h) : (t = w[1], n = w[2], l = w[3], s = w[4], d = w[5], c = w[6], u = w[7], h = w[8]);
            let y = void 0 === c ? "default" : c,
                v = void 0 !== u && u,
                b = void 0 !== h && h,
                T = "default" === y && "bg-surface-elevated-secondary shadow-md",
                _ = v && !b && "in-data-[comment-layout=floating]:shadow-none!",
                E = v && "default" === y && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                M = v && "default" === y && (b ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                k = void 0 !== d && d ? "transition-none" : "transition-[height,width,opacity]";
            return w[9] !== n || w[10] !== T || w[11] !== _ || w[12] !== E || w[13] !== M || w[14] !== k ? (f = (0, r.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", T, _, E, M, k, n), w[9] = n, w[10] = T, w[11] = _, w[12] = E, w[13] = M, w[14] = k, w[15] = f) : f = w[15], w[16] !== s ? (C = {
                ...a.d,
                ...s
            }, w[16] = s, w[17] = C) : C = w[17], w[18] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), w[18] = p) : p = w[18], w[19] !== t ? (m = (0, o.jsx)("div", {
                className: p,
                children: t
            }), w[19] = t, w[20] = m) : m = w[20], w[21] !== v || w[22] !== y ? (g = "default" === y ? (0, o.jsx)("div", {
                "aria-hidden": !0,
                className: (0, r.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", v && "in-data-[comment-layout=floating]:hidden")
            }) : null, w[21] = v, w[22] = y, w[23] = g) : g = w[23], w[24] !== l || w[25] !== f || w[26] !== C || w[27] !== m || w[28] !== g ? (x = (0, o.jsxs)("div", {
                ...l,
                className: f,
                style: C,
                children: [m, g]
            }), w[24] = l, w[25] = f, w[26] = C, w[27] = m, w[28] = g, w[29] = x) : x = w[29], x
        }
    }),
    iqo5: (function(e, t, n) {
        n.d(t, {
            a: () => m
        });
        var o = n("ABep"),
            i = n("QosV"),
            r = n("zd8w"),
            a = n("oyxz"),
            l = n("YwjY"),
            s = n("Sm6l"),
            d = n("UIU6"),
            c = n("Bbed"),
            u = n("RNul"),
            h = n("UKCO"),
            f = n("T1PX");

        function C(e) {
            let t, n, a, l, s, d, c = (0, i.c)(13),
                {
                    children: u,
                    source: C
                } = e,
                p = (0, r.useRef)(null),
                m = !(0, f.a)() && C.width > 0 && C.height > 0;
            c[0] !== m || c[1] !== C ? (t = () => {
                let e = p.current,
                    t = e?.ownerDocument.defaultView;
                if (!e || !t || !m) return;
                let n = 0,
                    o = new ResizeObserver(() => {
                        o.disconnect(), n = t.requestAnimationFrame(() => {
                            let o = e.getBoundingClientRect();
                            if (!o.width || !o.height) {
                                e.dataset.phase = "open";
                                return
                            }
                            let i = e.offsetWidth / o.width,
                                r = e.offsetHeight / o.height,
                                a = (C.left - o.left) * i,
                                l = (C.top - o.top) * r,
                                s = (o.right - C.right) * i,
                                d = (o.bottom - C.bottom) * r;
                            e.style.setProperty("--entry-inset", `${l}px ${s}px ${d}px ${a}px`), e.style.setProperty("--entry-transform", `translate(${a}px, ${l}px) scale(${C.width/o.width}, ${C.height/o.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return o.observe(e), () => {
                    o.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [m, C], c[0] = m, c[1] = C, c[2] = t, c[3] = n) : (t = c[2], n = c[3]), (0, r.useLayoutEffect)(t, n);
            let g = m ? "entry-yS3y1e" : void 0;
            return c[4] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                position: "relative",
                maxWidth: "100%",
                width: h.V
            }, c[4] = a) : a = c[4], c[5] !== m ? (l = m ? (0, o.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, c[5] = m, c[6] = l) : l = c[6], c[7] !== u ? (s = (0, o.jsx)("div", {
                className: "content-ARLCcU",
                children: u
            }), c[7] = u, c[8] = s) : s = c[8], c[9] !== g || c[10] !== l || c[11] !== s ? (d = (0, o.jsxs)("div", {
                ref: p,
                "data-selection-annotation-entry": "",
                className: g,
                style: a,
                children: [l, s]
            }), c[9] = g, c[10] = l, c[11] = s, c[12] = d) : d = c[12], d
        }
        let p = (0, c.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(923720), n.e(531161), n.e(596636), n.e(352322)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: e => (0, o.jsx)(g, {
                failed: !0,
                onClose: e.onCancel
            })
        });

        function m(e) {
            let t, n, a, l, s, c, u, h, f = (0, i.c)(18);
            f[0] !== e ? ({
                entryRect: t,
                ...n
            } = e, f[0] = e, f[1] = t, f[2] = n) : (t = f[1], n = f[2]), f[3] !== n.onCancel ? (a = (0, o.jsx)(g, {
                failed: !0,
                onClose: n.onCancel
            }), f[3] = n.onCancel, f[4] = a) : a = f[4], f[5] !== n.onCancel ? (l = (0, o.jsx)(g, {
                onClose: n.onCancel
            }), f[5] = n.onCancel, f[6] = l) : l = f[6], f[7] !== n ? (s = (0, o.jsx)(p, {
                ...n
            }), f[7] = n, f[8] = s) : s = f[8], f[9] !== l || f[10] !== s ? (c = (0, o.jsx)(r.Suspense, {
                fallback: l,
                children: s
            }), f[9] = l, f[10] = s, f[11] = c) : c = f[11], f[12] !== a || f[13] !== c ? (u = (0, o.jsx)(d.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: a,
                children: c
            }), f[12] = a, f[13] = c, f[14] = u) : u = f[14];
            let m = u;
            return f[15] !== m || f[16] !== t ? (h = null == t ? m : (0, o.jsx)(C, {
                source: t,
                children: m
            }), f[15] = m, f[16] = t, f[17] = h) : h = f[17], h
        }

        function g(e) {
            let t, n, r, d, c = (0, i.c)(9),
                {
                    failed: h,
                    onClose: f
                } = e,
                C = void 0 !== h && h,
                p = C ? "alert" : "status";
            return c[0] !== C ? (t = C ? (0, o.jsx)(a.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(u.a, {}), (0, o.jsx)(a.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…"
                })]
            }), c[0] = C, c[1] = t) : t = c[1], c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(a.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
            }), c[2] = n) : n = c[2], c[3] !== f ? (r = (0, o.jsx)(s.a, {
                color: "secondary",
                onClick: f,
                children: n
            }), c[3] = f, c[4] = r) : r = c[4], c[5] !== p || c[6] !== t || c[7] !== r ? (d = (0, o.jsxs)(l.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: p,
                children: [t, r]
            }), c[5] = p, c[6] = t, c[7] = r, c[8] = d) : d = c[8], d
        }
        m.prefetch = () => p.prefetch()
    }),
    xD3Z: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            r = n("slpy"),
            a = n("Q840"),
            l = n("Qgfj"),
            s = n("Wf1j"),
            d = n("oyxz"),
            c = n("QcW8"),
            u = n("Sm6l"),
            h = n("rmk3"),
            f = n("bf6R"),
            C = n("tSEg"),
            p = n("hZax"),
            m = n("dt6g"),
            g = n("WwnD");

        function x(e) {
            let t, n, a, c, C, m, g, x, y, v, b = (0, i.c)(31),
                {
                    contextMenuTrigger: T,
                    isCompact: _,
                    isDragging: E,
                    items: M,
                    open: k,
                    onMinimize: L,
                    onOpenChange: F
                } = e,
                B = (0, p.f)("2163293173"),
                A = (0, s.a)();
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, l.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), b[0] = t) : t = b[0], b[1] !== L ? (n = {
                id: "minimize",
                icon: f.cf,
                message: t,
                onSelect: L,
                selectAfterClose: !0
            }, b[1] = L, b[2] = n) : n = b[2], b[3] !== M || b[4] !== n ? (a = [...M, n], b[3] = M, b[4] = n, b[5] = a) : a = b[5];
            let R = a;
            if (null != T) {
                let e, t;
                return b[6] !== T ? (e = (0, o.jsx)("div", {
                    className: "contents",
                    children: T
                }), b[6] = T, b[7] = e) : e = b[7], b[8] !== R || b[9] !== e ? (t = (0, o.jsx)(h.a, {
                    disableNative: !0,
                    items: R,
                    children: e
                }), b[8] = R, b[9] = e, b[10] = t) : t = b[10], t
            }
            if (B) {
                let e;
                return b[11] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)(o.Fragment, {}), b[11] = e) : e = b[11], e
            }
            let S = k || E;
            b[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, o.jsx)(d.a, {
                id: "quickChat.dock.dragHint",
                defaultMessage: "Drag to move · Click for options"
            }), b[12] = c) : c = b[12], b[13] !== A ? (C = A.formatMessage({
                id: "quickChat.moreOptions",
                defaultMessage: "Chat options"
            }), b[13] = A, b[14] = C) : C = b[14];
            let I = _ ? "composer" : "toolbar";
            return b[15] !== F || b[16] !== k ? (m = e => {
                0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || F?.(!k)
            }, b[15] = F, b[16] = k, b[17] = m) : m = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, o.jsx)(f.cd, {}), b[18] = g) : g = b[18], b[19] !== C || b[20] !== I || b[21] !== m ? (x = (0, o.jsx)(u.a, {
                className: "cursor-grab touch-none active:cursor-grabbing",
                "aria-label": C,
                color: "ghostSecondaryPillBackground",
                "data-quick-chat-drag-handle": !0,
                size: I,
                uniform: !0,
                onPointerDown: w,
                onClick: m,
                children: g
            }), b[19] = C, b[20] = I, b[21] = m, b[22] = x) : x = b[22], b[23] !== x || b[24] !== S ? (y = (0, o.jsx)(r.a, {
                disabled: S,
                content: c,
                children: x
            }), b[23] = x, b[24] = S, b[25] = y) : y = b[25], b[26] !== R || b[27] !== F || b[28] !== k || b[29] !== y ? (v = (0, o.jsx)(h.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: k,
                onOpenChange: F,
                items: R,
                children: y
            }), b[26] = R, b[27] = F, b[28] = k, b[29] = y, b[30] = v) : v = b[30], v
        }

        function w(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, r = (0, i.c)(6),
                    s = (0, a.y)(C.a),
                    d = (0, a.z)(c.n);
                r[0] !== d || r[1] !== s ? (t = d ? [{
                    id: "full-view",
                    icon: f.P,
                    message: (0, l.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, m.a)(s, "context_menu", () => (0, g.b)(s, "chat", {
                            mode: "full"
                        }))
                    }
                }] : [], r[0] = d, r[1] = s, r[2] = t) : t = r[2];
                let u = t;
                return r[3] !== u || r[4] !== e ? (n = (0, o.jsx)(x, {
                    ...e,
                    items: u
                }), r[3] = u, r[4] = e, r[5] = n) : n = r[5], n
            },
            b: x
        })
    }),
    FW69: (function(e, t, n) {
        var o = n("xprp");
        n.d(t, {
            a: () => o.a
        })
    }),
    w5yV: (function(e, t, n) {
        var o = n("FW69"),
            i = n("ajVv");
        let r = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);

        function a(e) {
            let {
                range: t,
                element: n,
                target: o,
                bottomBoundaryTop: i
            } = e, r = d(n, i);
            if (null == r) return null;
            let a = function(e, t, n, o) {
                let i = Array.from(e.getClientRects()),
                    r = t.getBoundingClientRect(),
                    a = c(i, o);
                if (null != a && (i.length > 1 || null != u(a, r))) return a;
                let l = e.getBoundingClientRect(),
                    s = u(l, o);
                return null != s && null != u(s, r) ? s : i.some(e => e.width > 0 && e.height > 0) || l.width > 0 && l.height > 0 ? null : c(Array.from(t.getClientRects()), o) ?? u(r, o) ?? c(Array.from(n.getClientRects()), o) ?? u(n.getBoundingClientRect(), o)
            }(t, n, o, r);
            return null == a ? null : {
                rect: a,
                bounds: r
            }
        }

        function l(e, t, n) {
            let o = s(e),
                i = o?.closest(n);
            if (o instanceof HTMLElement && i instanceof HTMLElement) return {
                element: o,
                target: i
            };
            if (!(e instanceof Element)) return null;
            for (let o of [e.childNodes[t], e.childNodes[t - 1]]) {
                let e = s(o),
                    t = e?.closest(n);
                if (e instanceof HTMLElement && t instanceof HTMLElement) return {
                    element: e,
                    target: t
                }
            }
            return null
        }

        function s(e) {
            return e instanceof Element ? e : e?.parentElement ?? null
        }

        function d(e, t) {
            let n = {
                    bottom: null == t ? window.innerHeight : Math.min(window.innerHeight, t),
                    left: 0,
                    right: window.innerWidth,
                    top: 0
                },
                o = e;
            for (; null != o && o !== document.body && o !== document.documentElement;) {
                let e = window.getComputedStyle(o),
                    t = (e.overflowX || e.overflow).split(/\s+/).some(e => r.has(e)),
                    i = (e.overflowY || e.overflow).split(/\s+/).some(e => r.has(e));
                if (t || i) {
                    let e = o.getBoundingClientRect();
                    if ((n = {
                            bottom: i ? Math.min(n.bottom, e.bottom) : n.bottom,
                            left: t ? Math.max(n.left, e.left) : n.left,
                            right: t ? Math.min(n.right, e.right) : n.right,
                            top: i ? Math.max(n.top, e.top) : n.top
                        }).right <= n.left || n.bottom <= n.top) return null
                }
                o = o.parentElement
            }
            return n.bottom <= n.top ? null : n
        }

        function c(e, t) {
            for (let n of e) {
                let e = u(n, t);
                if (null != e) return e
            }
            return null
        }

        function u(e, t) {
            let n = Math.max(e.left, t.left),
                o = Math.max(e.top, t.top),
                i = Math.min(e.right, t.right),
                r = Math.min(e.bottom, t.bottom);
            return n >= i || o >= r ? null : new DOMRect(n, o, i - n, r - o)
        }
        n.d(t, {}, {
            a: d,
            b: a,
            c: function(e) {
                let {
                    bottomBoundarySelector: t,
                    portalTarget: n,
                    targetContainer: r,
                    targetSelector: d,
                    windowZoom: c
                } = e, u = window.getSelection();
                if (null == u || 0 === u.rangeCount || u.isCollapsed) return null;
                let h = function(e, t, n) {
                    var o, i;
                    let r, a, s = l(e.anchorNode, e.anchorOffset, n),
                        d = l(e.focusNode, e.focusOffset, n);
                    if (null != s && null != d && s.target !== d.target) return null;
                    let c = s ?? d;
                    return null == c || null != c.element.closest('[contenteditable="true"]') ? null : {
                        ...c,
                        range: (o = t, i = c.target, (r = document.createRange()).selectNodeContents(i), a = o.cloneRange(), (!i.contains(a.startContainer) || 0 > a.compareBoundaryPoints(Range.START_TO_START, r)) && a.setStart(r.startContainer, r.startOffset), (!i.contains(a.endContainer) || a.compareBoundaryPoints(Range.END_TO_END, r) > 0) && a.setEnd(r.endContainer, r.endOffset), a)
                    }
                }(u, u.getRangeAt(0), d);
                if (null == h || null != r && !r.contains(h.target)) return null;
                let f = (0, o.a)(h.range)?.trim() ?? h.range.toString().trim();
                if (0 === f.length) return null;
                let C = null == t ? null : r?.querySelector(t),
                    p = C instanceof HTMLElement ? C.getBoundingClientRect().top : void 0,
                    m = a({
                        ...h,
                        bottomBoundaryTop: p
                    });
                if (null == m) return null;
                let {
                    rect: g
                } = m, x = n?.contains(h.target) === !0 ? n : void 0, w = x?.getBoundingClientRect(), y = null == w ? {
                    left: 0,
                    right: window.innerWidth
                } : {
                    left: -w.left / c,
                    right: (window.innerWidth - w.left) / c
                }, v = null == w ? g : new DOMRect((g.left - w.left) / c, (g.top - w.top) / c, g.width / c, g.height / c), b = s(h.range.startContainer) ?? h.element;
                return {
                    direction: "rtl" === window.getComputedStyle(b).direction ? "rtl" : "ltr",
                    portalTarget: x,
                    rect: v,
                    selectionRange: h.range.cloneRange(),
                    selectedText: f,
                    target: h.target,
                    targetId: h.target.getAttribute(i.a),
                    viewportHorizontalBounds: y
                }
            },
            d: function(e, t) {
                return null != e && null != t && e.direction === t.direction && e.portalTarget === t.portalTarget && e.selectedText === t.selectedText && e.selectionRange.startContainer === t.selectionRange.startContainer && e.selectionRange.startOffset === t.selectionRange.startOffset && e.selectionRange.endContainer === t.selectionRange.endContainer && e.selectionRange.endOffset === t.selectionRange.endOffset && e.target === t.target && e.targetId === t.targetId && e.viewportHorizontalBounds.left === t.viewportHorizontalBounds.left && e.viewportHorizontalBounds.right === t.viewportHorizontalBounds.right && e.rect.left === t.rect.left && e.rect.top === t.rect.top && e.rect.width === t.rect.width && e.rect.height === t.rect.height
            }
        })
    }),
    NqfB: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            a = n("zd8w"),
            l = n("wD9O"),
            s = n("i7gm"),
            d = n("jDEJ"),
            c = n("bIvi"),
            u = n("w5yV"),
            h = n("ajVv");

        function f(e) {
            return null != e
        }

        function C(e) {
            return e.current
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, x, w, y, v, b = (0, i.c)(40),
                    {
                        align: T,
                        bottomBoundarySelector: _,
                        children: E,
                        className: M,
                        onOpen: k,
                        portalTargetSelector: L,
                        targetContainer: F,
                        targetContainerRefs: B,
                        targetSelector: A
                    } = e,
                    R = void 0 === A ? h.b : A,
                    S = (0, l.c)(),
                    I = (0, a.useRef)(null),
                    H = (0, a.useRef)(!1),
                    V = (0, a.useRef)(null),
                    O = (0, a.useRef)(null),
                    [j, N] = (0, a.useState)(null);
                b[0] !== k ? (t = e => {
                    k?.(e)
                }, b[0] = k, b[1] = t) : t = b[1];
                let P = (0, a.useEffectEvent)(t);
                b[2] !== j || b[3] !== S ? (n = () => {
                    let e = V.current?.getBoundingClientRect();
                    if (null == j || null == e) return;
                    let t = j.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : S;
                    return {
                        point: {
                            x: e.left + e.width / 2,
                            y: e.bottom
                        },
                        width: e.width,
                        selectionRect: {
                            x: j.rect.left * n + (t?.left ?? 0),
                            y: j.rect.top * n + (t?.top ?? 0),
                            width: j.rect.width * n,
                            height: j.rect.height * n
                        },
                        windowZoom: S
                    }
                }, b[2] = j, b[3] = S, b[4] = n) : n = b[4];
                let z = (0, c.a)(n);
                if (b[5] !== _ || b[6] !== P || b[7] !== L || b[8] !== F || b[9] !== B || b[10] !== R || b[11] !== S ? (p = () => {
                        let e = null,
                            t = () => {
                                null != I.current && (window.cancelAnimationFrame(I.current), I.current = null)
                            },
                            n = () => {
                                t();
                                let e = window.getSelection();
                                null == O.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (I.current = window.requestAnimationFrame(() => {
                                    I.current = null;
                                    let e = null != F || null == B ? [F] : B.map(C).filter(f),
                                        t = null;
                                    for (let n of e)
                                        if (null != (t = (0, u.c)({
                                                bottomBoundarySelector: _,
                                                portalTarget: null == L ? void 0 : n?.querySelector(L) ?? void 0,
                                                targetContainer: n,
                                                targetSelector: R,
                                                windowZoom: S
                                            }))) break;
                                    (0, u.d)(O.current, t) || (null == O.current && null != t && P(t), O.current = t, N(t))
                                }))
                            },
                            o = () => {
                                let e = window.getSelection();
                                H.current || null == e || 0 === e.rangeCount || e.isCollapsed || n()
                            },
                            i = t => {
                                let i = window.getSelection(),
                                    r = O.current?.portalTarget;
                                if (!H.current && null != i && 0 !== i.rangeCount && !i.isCollapsed) {
                                    if (null != r && r.contains(i.getRangeAt(0).commonAncestorContainer)) {
                                        let n = t.target;
                                        if (!(n instanceof Node && r.contains(n))) return void(null != e && window.clearTimeout(e), e = window.setTimeout(() => {
                                            e = null, o()
                                        }, 100));
                                        if (!i.getRangeAt(0).intersectsNode(n)) return
                                    }
                                    n()
                                }
                            },
                            r = e => {
                                if (2 === e.button || 0 === e.button && e.ctrlKey && (0, d.a)()) return;
                                let n = e.target;
                                n instanceof Node && V.current?.contains(n) || (H.current = !0, t(), O.current = null, N(null))
                            },
                            a = () => {
                                H.current = !1, n()
                            },
                            l = () => {
                                if (H.current) {
                                    t(), O.current = null, N(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", l), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", r), window.addEventListener("pointerup", a), window.addEventListener("pointercancel", a), window.addEventListener("resize", o), window.addEventListener("scroll", i, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", l), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", r), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), window.removeEventListener("resize", o), window.removeEventListener("scroll", i, !0)
                        }
                    }, b[5] = _, b[6] = P, b[7] = L, b[8] = F, b[9] = B, b[10] = R, b[11] = S, b[12] = p) : p = b[12], b[13] !== _ || b[14] !== L || b[15] !== F || b[16] !== B || b[17] !== R || b[18] !== S ? (m = [_, L, F, B, R, S], b[13] = _, b[14] = L, b[15] = F, b[16] = B, b[17] = R, b[18] = S, b[19] = m) : m = b[19], (0, a.useEffect)(p, m), null == j) return null;
                let D = .5;
                "start" === (void 0 === T ? "center" : T) && (D = +("rtl" === j.direction));
                let Z = j.rect.left + j.rect.width * D,
                    W = j.viewportHorizontalBounds.left + 8 - Z,
                    Y = j.viewportHorizontalBounds.right - 8 - Z,
                    $ = j.portalTarget ?? document.body,
                    G = null == j.portalTarget ? "fixed z-50" : "absolute z-[1]";
                b[20] !== M || b[21] !== G ? (g = (0, r.b)("pointer-events-none w-max", G, M), b[20] = M, b[21] = G, b[22] = g) : g = b[22];
                let U = j.viewportHorizontalBounds.right - j.viewportHorizontalBounds.left - 16,
                    Q = j.rect.top - 8,
                    K = `translateX(clamp(${W}px, ${-100*D}%, calc(${Y}px - 100%))) translateY(-100%)`;
                return b[23] !== Z || b[24] !== U || b[25] !== Q || b[26] !== K ? (x = {
                    left: Z,
                    maxWidth: U,
                    top: Q,
                    transform: K
                }, b[23] = Z, b[24] = U, b[25] = Q, b[26] = K, b[27] = x) : x = b[27], b[28] !== E || b[29] !== z || b[30] !== j || b[31] !== S ? (w = null == j.portalTarget && 1 !== S ? (0, o.jsx)("div", {
                    style: {
                        zoom: S
                    },
                    children: E(j, z)
                }) : E(j, z), b[28] = E, b[29] = z, b[30] = j, b[31] = S, b[32] = w) : w = b[32], b[33] !== x || b[34] !== w || b[35] !== g ? (y = (0, o.jsx)("div", {
                    ref: V,
                    className: g,
                    style: x,
                    children: w
                }), b[33] = x, b[34] = w, b[35] = g, b[36] = y) : y = b[36], b[37] !== y || b[38] !== $ ? (v = (0, o.jsx)(s.a, {
                    container: $,
                    children: y
                }), b[37] = y, b[38] = $, b[39] = v) : v = b[39], v
            }
        })
    }),
    JEFL: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            r = n("zd8w"),
            a = n("Wf1j"),
            l = n("oyxz"),
            s = n("iqo5"),
            d = n("Sm6l"),
            c = n("jqmc"),
            u = n("UxN3"),
            h = n("xtoi"),
            f = n("mN6P"),
            C = n("elIT");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, x, w = (0, i.c)(56),
                    {
                        conversationTerminology: y,
                        onAddSelectedText: v,
                        onStartFileAnnotation: b,
                        onDismissFileAnnotation: T,
                        onCommentSelectedText: _,
                        onEditModeChange: E,
                        onEditSelectedText: M,
                        onMoreDetails: k,
                        onOpenSideChat: L,
                        resume: F,
                        selectedText: B
                    } = e,
                    A = void 0 === y ? "task" : y,
                    R = (0, a.a)(),
                    [S, I] = (0, r.useState)(F?.mode === "edit" ? F.instruction : ""),
                    [H, V] = (0, r.useState)(F?.mode ?? "actions"),
                    [O, j] = (0, r.useState)(null);
                if (null != O) {
                    let e, t, n;
                    return w[0] !== T ? (e = () => T?.(!1), t = () => T?.(!0), w[0] = T, w[1] = e, w[2] = t) : (e = w[1], t = w[2]), w[3] !== O.rect || w[4] !== O.submit || w[5] !== e || w[6] !== t ? (n = (0, o.jsx)(s.a, {
                        entryRect: O.rect,
                        onCancel: e,
                        onEscape: t,
                        onSubmit: O.submit
                    }), w[3] = O.rect, w[4] = O.submit, w[5] = e, w[6] = t, w[7] = n) : n = w[7], n
                }
                if ("pending" === H) return null;
                if ("edit" === H && null != M) {
                    let e, t, n, i, r, a, l, s, c, f;
                    return w[8] !== E ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), E?.(!1), V("actions-focused"))
                    }, w[8] = E, w[9] = e) : e = w[9], w[10] !== S || w[11] !== E || w[12] !== M ? (t = e => {
                        e.preventDefault(), 0 !== S.trim().length && (V("pending"), M(S).then(e => {
                            "retry" === e && (E?.(!1), V("actions-focused"))
                        }))
                    }, w[10] = S, w[11] = E, w[12] = M, w[13] = t) : t = w[13], w[14] !== R ? (n = R.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), w[14] = R, w[15] = n) : n = w[15], w[16] !== R ? (i = R.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…"
                    }), w[16] = R, w[17] = i) : i = w[17], w[18] === Symbol.for("react.memo_cache_sentinel") ? (r = e => {
                        I(e.target.value)
                    }, w[18] = r) : r = w[18], w[19] !== S || w[20] !== n || w[21] !== i ? (a = (0, o.jsx)("input", {
                        "aria-label": n,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: i,
                        required: !0,
                        value: S,
                        onChange: r
                    }), w[19] = S, w[20] = n, w[21] = i, w[22] = a) : a = w[22], w[23] !== R ? (l = R.formatMessage({
                        id: "selectedTextOverlay.editSubmit",
                        defaultMessage: "Submit edit instruction"
                    }), w[23] = R, w[24] = l) : l = w[24], w[25] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, o.jsx)(u.a, {
                        "aria-hidden": !0,
                        asset16: C.a,
                        legacyIcon: h.a,
                        legacyClassName: "icon-2xs"
                    }), w[25] = s) : s = w[25], w[26] !== l ? (c = (0, o.jsx)(d.a, {
                        "aria-label": l,
                        color: "primary",
                        size: "composerSm",
                        type: "submit",
                        uniform: !0,
                        children: s
                    }), w[26] = l, w[27] = c) : c = w[27], w[28] !== c || w[29] !== e || w[30] !== t || w[31] !== a ? (f = (0, o.jsxs)("form", {
                        className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                        onKeyDown: e,
                        onSubmit: t,
                        children: [a, c]
                    }), w[28] = c, w[29] = e, w[30] = t, w[31] = a, w[32] = f) : f = w[32], f
                }
                return w[33] !== A || w[34] !== v || w[35] !== b || w[36] !== B ? (t = null != v || null != b ? (0, o.jsx)(c.b, {
                    onClick: e => {
                        null != b ? j({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: b()
                        }) : (window.getSelection()?.removeAllRanges(), v?.(B))
                    },
                    children: "chat" === A ? (0, o.jsx)(l.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, o.jsx)(l.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, w[33] = A, w[34] = v, w[35] = b, w[36] = B, w[37] = t) : t = w[37], w[38] !== k || w[39] !== B ? (n = null != k ? (0, o.jsx)(c.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), k(B)
                    },
                    children: (0, o.jsx)(l.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, w[38] = k, w[39] = B, w[40] = n) : n = w[40], w[41] !== L || w[42] !== B ? (p = null != L ? (0, o.jsx)(c.b, {
                    onClick: e => {
                        window.getSelection()?.removeAllRanges(), L(B, (0, f.b)(e))
                    },
                    children: (0, o.jsx)(l.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, w[41] = L, w[42] = B, w[43] = p) : p = w[43], w[44] !== _ ? (m = null != _ ? (0, o.jsx)(c.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), _()
                    },
                    children: (0, o.jsx)(l.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, w[44] = _, w[45] = m) : m = w[45], w[46] !== H || w[47] !== E || w[48] !== M ? (g = null != M ? (0, o.jsx)(c.b, {
                    autoFocus: "actions-focused" === H,
                    onClick: () => {
                        E?.(!0), V("edit")
                    },
                    children: (0, o.jsx)(l.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, w[46] = H, w[47] = E, w[48] = M, w[49] = g) : g = w[49], w[50] !== t || w[51] !== n || w[52] !== p || w[53] !== m || w[54] !== g ? (x = (0, o.jsxs)(c.a, {
                    children: [t, n, p, m, g]
                }), w[50] = t, w[51] = n, w[52] = p, w[53] = m, w[54] = g, w[55] = x) : x = w[55], x
            }
        })
    }),
    AD0n: (function(e, t, n) {
        var o = n("ABep"),
            i = n("QosV"),
            r = n("oyxz"),
            a = n("bqtn"),
            l = n("bf6R");

        function s() {}
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, c = (0, i.c)(13),
                    {
                        startNewChat: u,
                        renderChatMenu: h,
                        presentation: f,
                        newChatDisabled: C,
                        onAction: p,
                        fixedActions: m
                    } = e,
                    g = void 0 === f ? "chat" : f,
                    x = void 0 !== C && C,
                    w = void 0 === p ? s : p;
                if (null != h) {
                    let e;
                    return c[0] !== m || c[1] !== x || c[2] !== w || c[3] !== g || c[4] !== h ? (e = h({
                        presentation: g,
                        newChatDisabled: x,
                        onAction: w,
                        fixedActions: m
                    }), c[0] = m, c[1] = x, c[2] = w, c[3] = g, c[4] = h, c[5] = e) : e = c[5], e
                }
                return c[6] !== w || c[7] !== u ? (t = () => {
                    w(), u()
                }, c[6] = w, c[7] = u, c[8] = t) : t = c[8], c[9] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, o.jsx)(r.a, {
                    id: "floatingComposer.newChat",
                    defaultMessage: "New chat"
                }), c[9] = n) : n = c[9], c[10] !== x || c[11] !== t ? (d = (0, o.jsx)(a.c.Item, {
                    LeftIcon: l._h,
                    disabled: x,
                    onSelect: t,
                    children: n
                }), c[10] = x, c[11] = t, c[12] = d) : d = c[12], d
            }
        })
    }),
    dDDU: (function(e, t, n) {
        var o = n("Qgfj"),
            i = n("Kyn2"),
            r = n("nnol"),
            a = n("QcW8"),
            l = n("ZU27"),
            s = n("bf6R"),
            d = n("GaA7"),
            c = n("Vhua"),
            u = n("NkWL");
        n.d(t, {}, {
            a: function(e) {
                let t = e.get(a.Y);
                return e.get(a.V) || t?.isVisible !== !0 || "split" !== t.mode && !e.get(u.c) ? [] : function(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.l,
                        h = e.get(c.i),
                        f = [];
                    return "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == d.a.detachedWindows || f.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !h && !(0, r.c)(e, t.tabId) && t.tabType.windowTransfer.canTransfer(e, t.props),
                        icon: s.Ug,
                        message: (0, o.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, i.a)(e, Promise.resolve().then(n.bind(n, "K3jS")).then(n => {
                                let {
                                    moveTabToNewWindow: o
                                } = n;
                                return o(e, a, t, null)
                            }))
                        }
                    }), "chat" === t && e.get(u.c) && f.push({
                        id: "close-tab",
                        menuShortcut: "W",
                        icon: s.Aj,
                        message: (0, o.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, u.a)(e)
                    }), f
                }(e, "chat")
            }
        })
    }),
    iYCA: (function(e, t, n) {
        n("QLGt"), e.exports = n("TQhG")
    }),
    UlFl: (function(e, t, n) {
        n("o1bS"), e.exports = n("ogbS")("Array", "findLast")
    }),
    wAJj: (function(e, t, n) {
        var o = n("OwA9"),
            i = n("EzAB"),
            r = n("fuV1"),
            a = n("f6Go"),
            l = function(e) {
                var t = 1 === e;
                return function(n, l, s) {
                    for (var d, c = r(n), u = i(c), h = a(u), f = o(l, s); h-- > 0;)
                        if (f(d = u[h], h, c)) switch (e) {
                            case 0:
                                return d;
                            case 1:
                                return h
                        }
                    return t ? -1 : void 0
                }
            };
        e.exports = {
            findLast: l(0),
            findLastIndex: l(1)
        }
    }),
    o1bS: (function(e, t, n) {
        var o = n("Ywrr"),
            i = n("wAJj").findLast,
            r = n("XnQF");
        o({
            target: "Array",
            proto: !0
        }, {
            findLast: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), r("findLast")
    }),
    QLGt: (function(e, t, n) {
        n("o1bS")
    }),
    TQhG: (function(e, t, n) {
        e.exports = n("UlFl")
    }),
    jFtA: (function(e, t) {
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
    J8BG: (function(e, t) {
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
    QY8z: (function(e, t) {
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
    U572: (function(e, t) {
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
    qt75: (function(e, t) {
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
    DUBn: (function(e, t) {
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
    qLwp: (function(e, t) {
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
    oUwH: (function(e, t) {
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
    pVnK: (function(e, t) {
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
    Y8tz: (function(e, t) {
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
    fHxn: (function(e, t) {
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
    zZ6A: (function(e, t) {
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
    k5yx: (function(e, t) {
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
    Khto: (function(e, t) {
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
    IySy: (function(e, t) {
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
    axbG: (function(e, t) {
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
    hjXH: (function(e, t) {
        t.a = {
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
    DX10: (function(e, t) {
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
    AET4: (function(e, t) {
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
    wPPd: (function(e, t) {
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
    KCC0: (function(e, t) {
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
    Ev4x: (function(e, t) {
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
    amgE: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    CNe4: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    A72r: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    dKBg: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    dMDd: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    O6Fc: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    RQFS: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    NwAy: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    GBCQ: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    fAic: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    DCs1: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    PVkT: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    R2ep: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    kTBY: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    hC5q: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    tKZD: (function(e, t, n) {
        let o = (0, (n("ESTr")).a)({
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
        n.d(t, {}, {
            a: o
        })
    }),
    h24K: (function(e, t, n) {
        var o = n("gPp5");
        class i {
            constructor() {
                this.componentControls = new Set
            }
            subscribe(e) {
                return this.componentControls.add(e), () => this.componentControls.delete(e)
            }
            start(e, t) {
                this.componentControls.forEach(n => {
                    n.start(e.nativeEvent || e, t)
                })
            }
            cancel() {
                this.componentControls.forEach(e => {
                    e.cancel()
                })
            }
            stop() {
                this.componentControls.forEach(e => {
                    e.stop()
                })
            }
        }
        let r = () => new i;
        n.d(t, {}, {
            a: function() {
                return (0, o.a)(r)
            }
        })
    })
};