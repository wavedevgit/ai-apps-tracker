export const __rspack_esm_ids = [13232];
export const __webpack_modules__ = {
    l3dN: (function(a, b) {
        b.a = {
            PageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            pageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            PageContent: "PageContent-kBHDbu",
            pageContent: "PageContent-kBHDbu",
            PageDocument: "PageDocument-xcjcX8",
            pageDocument: "PageDocument-xcjcX8",
            PageSnapshotCover: "PageSnapshotCover-C_r466",
            pageSnapshotCover: "PageSnapshotCover-C_r466",
            PageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
            pageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
            PageReadingWidthMeasure: "PageReadingWidthMeasure-ssFuf9",
            pageReadingWidthMeasure: "PageReadingWidthMeasure-ssFuf9",
            PageDocumentGrid: "PageDocumentGrid-dPPMDP",
            pageDocumentGrid: "PageDocumentGrid-dPPMDP",
            PageDocumentEnd: "PageDocumentEnd-x1pPbt",
            pageDocumentEnd: "PageDocumentEnd-x1pPbt",
            PageDocumentTheme: "PageDocumentTheme-LGlBUd",
            pageDocumentTheme: "PageDocumentTheme-LGlBUd",
            PageImageLift: "PageImageLift-FIiTnL",
            pageImageLift: "PageImageLift-FIiTnL",
            PageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            pageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            PageCommentBody: "PageCommentBody-vWezwu",
            pageCommentBody: "PageCommentBody-vWezwu",
            PageCommentMentions: "PageCommentMentions-hNyDwq",
            pageCommentMentions: "PageCommentMentions-hNyDwq",
            PagePreview: "PagePreview-AZACCm",
            pagePreview: "PagePreview-AZACCm",
            PageThumbnail: "PageThumbnail-xJOX0t",
            pageThumbnail: "PageThumbnail-xJOX0t",
            PageTemplateThumbnail: "PageTemplateThumbnail-vNCuLD",
            pageTemplateThumbnail: "PageTemplateThumbnail-vNCuLD",
            PageTitle: "PageTitle-zNq5aq",
            pageTitle: "PageTitle-zNq5aq",
            "page-caret-blink": "page-caret-blink-q7Tadf",
            pageCaretBlink: "page-caret-blink-q7Tadf",
            PageTableFadeLeft: "PageTableFadeLeft-WeE9pg",
            pageTableFadeLeft: "PageTableFadeLeft-WeE9pg",
            PageTableFadeRight: "PageTableFadeRight-WbNNy_",
            pageTableFadeRight: "PageTableFadeRight-WbNNy_",
            PrintRoot: "PrintRoot-o2LDio",
            printRoot: "PrintRoot-o2LDio",
            PrintDocument: "PrintDocument-hzBPk2",
            printDocument: "PrintDocument-hzBPk2"
        }
    }),
    wqOV: (function(a, b) {
        b.a = {
            match: "match-z3yytq"
        }
    }),
    pATZ: (function(a, b, c) {
        let d = (0, (c("Qgfj")).f)({
            placeholderByDocumentType: {
                id: "codex.page.chat.placeholder.byDocumentType",
                defaultMessage: "{documentType, select, granola_presentation {Work with this slide\u2026} granola_workbook {Work with this sheet\u2026} other {Work with this page\u2026}}"
            }
        });
        c.d(b, {}, {
            a: d
        })
    }),
    JZmT: (function(a, b, c) {
        var d = c("on57"),
            e = c("l3dN");
        c.d(b, {}, {
            a: function(a) {
                let {
                    compact: b = !1,
                    externalEditingControls: c = !1,
                    headingOutside: f = !1,
                    contentAlignment: g,
                    fullWidth: h,
                    padded: i,
                    className: j
                } = a, k = i ? h || c || void 0 : h;
                return {
                    "data-compact": b || void 0,
                    "data-page-content-alignment": g,
                    "data-native-controls": c || void 0,
                    "data-page-full-width": k,
                    className: (0, d.b)(e.a.PageContent, "@container grid", !b && !c && !k && "start" !== g && "[container-name:page-dil-badge-gutter]", b || f ? "gap-y-0" : "gap-y-6", b ? "ps-[var(--page-attribution-padding,--spacing(4))] pe-4" : "ps-[var(--page-attribution-padding,var(--page-control-gutter))] pe-(--page-control-gutter) in-[[data-page-responsive-comments=markers]]:ps-[var(--page-attribution-padding,clamp(16px,calc(100%_-_572px_-_48px),48px))]", !b && "in-data-[page-comments-docked]:pe-[clamp(0px,calc(100%_-_--spacing(80)),var(--page-control-gutter))]", c ? "[--page-control-gutter:--spacing(10)] [--page-document-end-space:--spacing(16)] [--color-background-text-selection:--alpha(var(--color-text)/20%)]" : "[--page-control-gutter:--spacing(14)] [--page-document-end-space:50cqh] in-[[data-page-responsive-comments]]:[--page-control-gutter:--spacing(12)]", !b && "in-[[data-mobile-page-platform]]:[--page-control-gutter:--spacing(7)]! in-[[data-mobile-page-platform]]:ps-[var(--page-attribution-padding,var(--page-control-gutter))]!", "start" === g && "w-full max-w-[var(--page-content-max-width,none)]", i ? b || c ? "py-4" : f ? "pt-4 pb-panel" : "pt-10 pb-panel" : j)
                }
            }
        })
    }),
    xg5g: (function(a, b, c) {
        c.d(b, {
            a: () => i,
            b: () => j
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("l3dN");

        function h() {
            let a, b, c = (0, e.c)(2);
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("span", {
                className: (0, f.b)(g.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] overflow-clip"),
                "data-page-comment-content-width": !0
            }), c[0] = a) : a = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsxs)("span", {
                "aria-hidden": !0,
                className: "invisible absolute size-0 overflow-clip",
                children: [a, (0, d.jsx)("span", {
                    className: "@container relative block [inline-size:max(100cqi,var(--page-default-reading-width))]",
                    children: (0, d.jsx)("span", {
                        className: (0, f.b)(g.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] max-w-0 overflow-clip"),
                        "data-page-comment-minimum-width": !0
                    })
                })]
            }), c[1] = b) : b = c[1], b
        }

        function i(a) {
            let b, c, g, i, j, k = (0, e.c)(13),
                {
                    heading: l,
                    headingRef: m,
                    messages: n,
                    compact: o,
                    children: p
                } = a;
            k[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(h, {}), k[0] = b) : b = k[0];
            let q = o && "mb-4";
            return k[1] !== q ? (c = (0, f.b)("flex flex-col gap-2 empty:hidden", q), k[1] = q, k[2] = c) : c = k[2], k[3] !== n || k[4] !== c ? (g = (0, d.jsx)("div", {
                className: c,
                children: n
            }), k[3] = n, k[4] = c, k[5] = g) : g = k[5], k[6] !== l || k[7] !== m || k[8] !== g ? (i = (0, d.jsxs)("div", {
                ref: m,
                className: "col-[reading] flex w-full max-w-(--page-reading-width) min-w-0 flex-col gap-6",
                "data-page-reading-column": !0,
                children: [b, g, l]
            }), k[6] = l, k[7] = m, k[8] = g, k[9] = i) : i = k[9], k[10] !== p || k[11] !== i ? (j = (0, d.jsxs)(d.Fragment, {
                children: [i, p]
            }), k[10] = p, k[11] = i, k[12] = j) : j = k[12], j
        }

        function j(a) {
            let b, c, h = (0, e.c)(6),
                {
                    externalEditingControls: i,
                    ref: j
                } = a,
                k = i ? "h-16" : "h-[50cqh]";
            h[0] !== k ? (b = (0, f.b)(g.a.PageDocumentEnd, k), h[0] = k, h[1] = b) : b = h[1];
            let l = i || void 0;
            return h[2] !== j || h[3] !== b || h[4] !== l ? (c = (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: b,
                "data-native-controls": l,
                "data-page-document-end": !0,
                "data-page-document-trailing-space": !0,
                ref: j
            }), h[2] = j, h[3] = b, h[4] = l, h[5] = c) : c = h[5], c
        }
    }),
    aWEZ: (function(a, b, c) {
        function d(a, b) {
            let c = a.querySelector(`[data-page-attribution-sizer="${b}"]`),
                d = c?.firstElementChild;
            if (!(d instanceof HTMLElement) || null == c) return null;
            let e = d.offsetWidth;
            return e > 0 && e <= c.clientWidth ? e : null
        }
        c.d(b, {}, {
            a: function() {
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a => a.getBoundingClientRect(),
                    b = new Map;
                return function(c) {
                    let d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a(c),
                        e = c.ownerDocument.defaultView;
                    if (null == e) return null;
                    let f = Math.max(0, d.left),
                        g = Math.min(e.innerWidth, d.right),
                        h = Math.max(0, d.top),
                        i = Math.min(e.innerHeight, d.bottom);
                    if (g <= f || i <= h) return null;
                    for (let d = c.parentElement; null != d; d = d.parentElement) {
                        let c = b.get(d);
                        if (null == c) {
                            let f = e.getComputedStyle(d),
                                g = /auto|scroll|hidden|clip/u.test(f.overflowX),
                                h = /auto|scroll|hidden|clip/u.test(f.overflowY);
                            if (!g && !h) {
                                b.set(d, !1);
                                continue
                            }
                            let i = a(d),
                                j = d.offsetWidth,
                                k = j > 0 ? i.width / j : 1;
                            c = {
                                x: g,
                                y: h,
                                rect: DOMRect.fromRect({
                                    x: i.left + d.clientLeft * k,
                                    y: i.top + d.clientTop * k,
                                    width: d.clientWidth * k,
                                    height: d.clientHeight * k
                                })
                            }, b.set(d, c)
                        }!1 !== c && (c.x && (f = Math.max(f, c.rect.left), g = Math.min(g, c.rect.right)), c.y && (h = Math.max(h, c.rect.top), i = Math.min(i, c.rect.bottom)))
                    }
                    return g > f && i > h ? DOMRect.fromRect({
                        x: f,
                        y: h,
                        width: g - f,
                        height: i - h
                    }) : null
                }
            },
            b: function(a, b) {
                let c = a.defaultView;
                if (null == c) return;
                let d = "getBoundingClientRect" in b ? b.getBoundingClientRect() : {
                        x: b.clientX,
                        y: b.clientY,
                        width: 1,
                        height: 1
                    },
                    e = c.visualViewport,
                    f = e?.width ?? c.innerWidth,
                    g = e?.height ?? c.innerHeight,
                    {
                        x: h,
                        y: i
                    } = d;
                if (null != e && (0 !== e.offsetLeft || 0 !== e.offsetTop)) {
                    let b = a.documentElement.getBoundingClientRect();
                    h -= b.left + e.pageLeft, i -= b.top + e.pageTop
                }
                let {
                    width: j,
                    height: k
                } = d;
                if (!(j <= 0) && !(k <= 0) && !(h >= f) && !(i >= g) && !(h + j <= 0) && !(i + k <= 0)) return {
                    x: h,
                    y: i,
                    width: j,
                    height: k,
                    viewportWidth: f
                }
            },
            c: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a => a.getBoundingClientRect(),
                    d = a.matches("table") ? a.querySelector("tr") : a.querySelector(':scope > hr, :scope > [data-page-agent-instructions="toggle"], :scope > [data-composer-code-block-toolbar] > [data-page-code-block-controls]');
                if (null != d) return c(d);
                let e = "p, h1, h2, h3, h4, h5, h6, pre",
                    f = a.matches(e) ? a : a.querySelector(e) ?? a,
                    g = c(f),
                    h = f.ownerDocument.defaultView?.getComputedStyle(f),
                    i = Number.parseFloat(h?.lineHeight ?? "") * b;
                return DOMRect.fromRect({
                    x: g.left,
                    y: g.top + Number.parseFloat(h?.paddingTop ?? "0") * b,
                    width: g.width,
                    height: Number.isFinite(i) ? Math.min(g.height, i) : g.height
                })
            },
            d: function(a, b) {
                let c = a.defaultView;
                if (null == c) return;
                let d = c.visualViewport,
                    {
                        x: e,
                        y: f
                    } = b;
                if (null != d && (0 !== d.offsetLeft || 0 !== d.offsetTop)) {
                    let b = a.documentElement.getBoundingClientRect();
                    e -= b.left + d.pageLeft, f -= b.top + d.pageTop
                }
                return {
                    x: e,
                    y: f,
                    width: b.width,
                    height: b.height,
                    viewportWidth: d?.width ?? c.innerWidth
                }
            },
            e: function(a, b) {
                let c = a.closest("[data-page-attribution-position]");
                if (null == c) return !1;
                let d = a.getBoundingClientRect(),
                    e = c.getBoundingClientRect(),
                    f = b.getBoundingClientRect();
                if (!d.width || !d.height || d.left < Math.max(e.left, f.left) || d.right > Math.min(e.right, f.right) || d.top < f.top || d.bottom > f.bottom) return !1;
                for (let a of ["previousElementSibling", "nextElementSibling"])
                    for (let b = c[a]; null != b; b = b[a]) {
                        if (b.hasAttribute("hidden")) continue;
                        let c = b.querySelector("[data-page-attribution-name]")?.getBoundingClientRect();
                        if (c?.height) {
                            if ("nextElementSibling" === a ? c.top >= d.bottom + 2 : c.bottom + 2 <= d.top) break;
                            if (d.left < c.right && d.right > c.left && d.top < c.bottom + 2 && d.bottom + 2 > c.top) return !1
                        }
                    }
                return !0
            },
            f: function(a, b, c, e, f) {
                let g = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : a => a.getBoundingClientRect(),
                    h = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => [],
                    i = b.parentElement?.querySelector(":scope > [data-page-reading-column]"),
                    j = b.closest("[data-page-document-scroll]");
                if (null == i || null == j) {
                    a.removeAttribute("data-page-attribution-fits"), a.removeAttribute("data-page-attribution-compact");
                    return
                }
                let k = a => e ? -a.right : a.left,
                    l = k(g(i)),
                    m = g(j).left + j.clientLeft * f,
                    n = e ? -(m + j.clientWidth * f) : m;
                a.style.setProperty("--page-attribution-room", `${(l-n)/f}px`);
                let o = d(a, "full"),
                    p = d(a, "compact"),
                    q = a.clientWidth,
                    r = b.querySelectorAll(':is([data-page-block-layout="full-width"], [data-page-block-layout="flexible"][data-page-block-type="table"]) > [data-page-block-viewport] > :first-child'),
                    s = h(g),
                    t = [],
                    u = l;
                for (let a of r) {
                    let b = g(a);
                    if (b.width <= 0) continue;
                    let c = k(b),
                        d = a.parentElement;
                    if (a.matches("table") && null != d) {
                        let a = k(g(d));
                        c = d.parentElement?.dataset.pageBlockLayout === "full-width" ? a : Math.max(c, a)
                    }
                    c < l && (t.push({
                        start: c,
                        top: b.top,
                        bottom: b.bottom
                    }), u = Math.min(u, c))
                }
                a.style.setProperty("--page-attribution-hover-inset", `${(l-u)/f}px`), a.style.insetInlineEnd = `${((e?-c.left:c.right)-l)/f}px`;
                let v = 0;
                for (let [a, {
                        element: b,
                        label: d,
                        line: e,
                        bottom: g
                    }] of s.entries()) {
                    if (null == e || 0 === e.height || null == g) {
                        b.hidden = !0;
                        continue
                    }
                    for (; t[v]?.bottom <= e.top;) v++;
                    let h = t[v],
                        i = h?.top < e.bottom ? h.start : l,
                        j = (l - i) / f,
                        k = q - j,
                        m = null == o || o > k;
                    b.toggleAttribute("data-page-attribution-compact", m), b.hidden = j > 0 && m && (null == p || p > k);
                    let n = Math.max(g, s[a + 1]?.line?.top ?? g);
                    for (let a = v; t[a]?.top < n; a++) {
                        let b = t[a];
                        if (b.start < i && b.top >= e.bottom) {
                            n = b.top;
                            break
                        }
                    }
                    let r = Math.max(e.bottom, Math.min(g, n));
                    b.style.top = `${(e.top-c.top)/f}px`, b.style.marginInlineEnd = `${j}px`, b.style.height = `${(r-e.top)/f}px`, b.style.setProperty("--page-attribution-hover-tail", `${Math.max(0,n-r)/f}px`), null != d && (d.style.height = `${e.height/f}px`)
                }
                let w = String(null != o || null != p);
                a.toggleAttribute("data-page-attribution-compact", null == o && null != p), a.dataset.pageAttributionFits !== w && (a.dataset.pageAttributionFits = w)
            },
            g: function(a, b, c, d) {
                a.hidden = null == b, null != b && Object.assign(a.style, {
                    left: `${(b.left-c.left)/d}px`,
                    top: `${(b.top-c.top)/d}px`,
                    width: `${b.width/d}px`,
                    height: `${b.height/d}px`
                })
            }
        })
    }),
    b7SN: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                let {
                    clientX: b,
                    bounds: c,
                    edge: d,
                    rtl: e,
                    zoom: f,
                    viewport: g
                } = a, h = Math.max(c.left, g?.left ?? c.left), i = Math.min(c.right, g?.right ?? c.right);
                return Math.abs(b - ("start" === d !== e ? h : i)) <= 150 * f
            }
        })
    }),
    aK2P: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("wD9O"),
            i = c("aAWW"),
            j = c("b7SN");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l, m, n, o, p = (0, e.c)(21),
                    {
                        children: q,
                        className: r,
                        anchorSelector: s,
                        edge: t,
                        active: u,
                        revealOnHover: v
                    } = a,
                    w = void 0 === t ? "start" : t,
                    x = void 0 !== v && v,
                    y = (0, g.useRef)(null),
                    [z, A] = (0, g.useState)(!1),
                    B = (0, h.c)();
                p[0] !== w || p[1] !== B ? (b = (a, b) => {
                    if (a.buttons > 0 || "touch" === a.pointerType) return;
                    let c = b.getBoundingClientRect();
                    A(a.clientY >= c.top && a.clientY <= c.bottom && (0, j.a)({
                        clientX: a.clientX,
                        bounds: c,
                        edge: w,
                        rtl: "rtl" === getComputedStyle(b).direction,
                        zoom: B,
                        viewport: b.closest("[data-page-block-viewport]")?.getBoundingClientRect()
                    }))
                }, p[0] = w, p[1] = B, p[2] = b) : b = p[2];
                let C = (0, g.useEffectEvent)(b);
                p[3] !== s || p[4] !== C || p[5] !== x ? (c = () => {
                    if (x) return;
                    let a = y.current?.closest(s),
                        b = a?.closest("[data-page-block-row], [data-page-edge-region]") ?? a?.closest("[data-page-reading-column]")?.parentElement ?? a;
                    if (null == a || null == b) return;
                    let c = b => C(b, a),
                        d = () => A(!1);
                    return b.addEventListener("pointermove", c), b.addEventListener("pointerleave", d), () => {
                        b.removeEventListener("pointermove", c), b.removeEventListener("pointerleave", d), d()
                    }
                }, p[3] = s, p[4] = C, p[5] = x, p[6] = c) : c = p[6], p[7] !== s || p[8] !== x ? (k = [s, x], p[7] = s, p[8] = x, p[9] = k) : k = p[9], (0, g.useEffect)(c, k), p[10] !== z || p[11] !== x ? (l = () => {
                    if (!z || x) return;
                    let a = y.current?.ownerDocument,
                        b = () => {
                            A(!1), (0, i.b)()
                        };
                    return a?.addEventListener("scroll", b, !0), a?.addEventListener("visibilitychange", b), a?.defaultView?.addEventListener("blur", b), () => {
                        a?.removeEventListener("scroll", b, !0), a?.removeEventListener("visibilitychange", b), a?.defaultView?.removeEventListener("blur", b)
                    }
                }, m = [z, x], p[10] = z, p[11] = x, p[12] = l, p[13] = m) : (l = p[12], m = p[13]), (0, g.useEffect)(l, m);
                let D = x && "[:hover>&]:pointer-events-auto [:hover>&]:opacity-100";
                p[14] !== r || p[15] !== D ? (n = (0, f.b)("pointer-events-auto [@media(hover:hover)_and_(pointer:fine)]:pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:opacity-0 data-visible:pointer-events-auto data-visible:opacity-100 data-menu-open:pointer-events-auto data-menu-open:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100 [[data-state=open]>&]:pointer-events-auto [[data-state=open]>&]:opacity-100 [:focus-visible>&]:pointer-events-auto [:focus-visible>&]:opacity-100", D, r), p[14] = r, p[15] = D, p[16] = n) : n = p[16];
                let E = !x && (z || void 0 !== u && u) || void 0;
                return p[17] !== q || p[18] !== n || p[19] !== E ? (o = (0, d.jsx)("span", {
                    ref: y,
                    className: n,
                    "data-page-edge-controls": !0,
                    "data-visible": E,
                    children: q
                }), p[17] = q, p[18] = n, p[19] = E, p[20] = o) : o = p[20], o
            }
        })
    }),
    fAHU: (function(a, b, c) {
        c.d(b, {
            a: () => f
        });
        var d = c("ABep"),
            e = c("QosV");

        function f(a) {
            let b, c, f = (0, e.c)(5),
                {
                    children: g,
                    rootSpaceId: h
                } = a;
            return f[0] !== h ? (b = null, f[0] = h, f[1] = b) : b = f[1], f[2] !== g || f[3] !== b ? (c = (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [g, b]
            }), f[2] = g, f[3] = b, f[4] = c) : c = f[4], c
        }
        c("Q840"), c("hlkZ"), c("oyQi"), c("Ko17"), c("nvO1"), c("iycc")
    }),
    i9us: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("LPKZ"),
            g = c.n(f),
            h = c("Q840"),
            i = c("oyxz"),
            j = c("Nw2O"),
            k = c("osar"),
            l = c("Z4o7"),
            m = c("Sm6l"),
            n = c("HOLv"),
            o = c("bf6R"),
            p = c("ttIa"),
            q = c("Z2JT"),
            r = c("NRR1"),
            s = c("gcWI"),
            t = c("pATZ"),
            u = c("GAcX"),
            v = c("hlkZ"),
            w = c("JtEZ"),
            x = c("tSEg");
        c("qixt");
        var y = c("El6m"),
            z = c("eviP"),
            A = c("oIU5");

        function B() {
            return null
        }(0, h.d)(x.a, (a, b) => {
            let {
                get: c,
                scope: d
            } = b;
            return c(z.b)?.getSession(d)?.conversationId != null || null != a && c(w.b, {
                accountId: c(r.e),
                pageId: a
            })
        }), c.d(b, {}, {
            a: function(a) {
                let b, c, f = (0, e.c)(5),
                    {
                        pageId: w
                    } = a,
                    x = (0, h.z)(r.e),
                    z = (0, h.x)(v.loadedSpacePageMetadata$, w ?? null);
                f[0] !== x || f[1] !== w ? (b = {
                    accountId: x,
                    pageId: w
                }, f[0] = x, f[1] = w, f[2] = b) : b = f[2];
                let C = (0, h.x)(s.e, b),
                    D = (0, h.z)(u.c);
                return (0, h.z)(q.a) || C || null != D ? null : (f[3] !== z?.document_type ? (c = (0, d.jsx)("div", {
                    inert: !0,
                    "aria-hidden": !0,
                    children: (0, d.jsx)(y.a, {
                        value: "expanded",
                        children: (0, d.jsx)(p.a, {
                            isMinimized: !1,
                            onMinimizedChange: g(),
                            presentation: "compact",
                            renderTranscript: B,
                            showHeader: !1,
                            title: "",
                            renderComposer: () => (0, d.jsx)(k.a, {
                                inert: !0,
                                layout: "single-line",
                                children: (0, d.jsx)(k.a.Body, {
                                    layout: "single-line",
                                    children: (0, d.jsx)(k.a.AdaptiveFooter, {
                                        layout: "single-line",
                                        leadingControls: (0, d.jsx)(m.a, {
                                            disabled: !0,
                                            color: "ghost",
                                            size: "composer",
                                            children: (0, d.jsx)(o.Zg, {})
                                        }),
                                        input: (0, d.jsx)(k.a.Input, {
                                            layout: "single-line",
                                            children: (0, d.jsx)(j.a, {
                                                singleLine: !0,
                                                children: (0, d.jsxs)("div", {
                                                    className: "truncate text-secondary select-none",
                                                    children: [null, (0, d.jsx)(d.Fragment, {
                                                        children: (0, d.jsx)(i.a, {
                                                            ...t.a.placeholderByDocumentType,
                                                            values: {
                                                                documentType: z?.document_type ?? "page"
                                                            }
                                                        })
                                                    })]
                                                })
                                            })
                                        }),
                                        trailingControls: (0, d.jsxs)(k.a.FooterActions, {
                                            children: [(0, d.jsx)(m.a, {
                                                disabled: !0,
                                                color: "ghost",
                                                size: "composer",
                                                children: (0, d.jsx)(o.md, {})
                                            }), (0, d.jsx)(m.a, {
                                                disabled: !0,
                                                color: "ghost",
                                                size: "composer",
                                                children: (0, d.jsx)(n.a, {
                                                    asset: A.a
                                                })
                                            }), (0, d.jsx)(m.a, {
                                                disabled: !0,
                                                color: "ghost",
                                                size: "composer",
                                                children: (0, d.jsx)(l.a, {})
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), f[3] = z?.document_type, f[4] = c) : c = f[4], c)
            }
        })
    }),
    Tima: (function(a, b, c) {
        c.d(b, {
            a: () => o,
            b: () => q,
            c: () => r
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("IPUh"),
            g = c("CJrD"),
            h = c("zd8w"),
            i = c("Wf1j"),
            j = c("X3K1"),
            k = c("ADAj"),
            l = c("xg5g"),
            m = c("JZmT");

        function n(a, b, c) {
            if (!(b instanceof Element) || b.closest("[data-page-document-viewport]") !== a.closest("[data-page-document-viewport]")) return !1;
            if (null != b.closest("[data-page-document-trailing-space]")) return !0;
            if (!b.contains(a)) return !1;
            let d = a.getBoundingClientRect();
            return d.height > 0 && c >= d.bottom
        }

        function o(a) {
            let b, c, f, h, i, j, m, n, o = (0, e.c)(17);
            o[0] !== a ? ({
                heading: c,
                messages: h,
                headingRef: f,
                children: b,
                ...i
            } = a, o[0] = a, o[1] = b, o[2] = c, o[3] = f, o[4] = h, o[5] = i) : (b = o[1], c = o[2], f = o[3], h = o[4], i = o[5]), o[6] === Symbol.for("react.memo_cache_sentinel") ? (j = (0, g.a)(), o[6] = j) : j = o[6];
            let q = (0, k.l)(j.fullWidth);
            return o[7] !== b || o[8] !== c || o[9] !== f || o[10] !== h || o[11] !== i.compact ? (m = (0, d.jsx)(l.a, {
                compact: i.compact,
                messages: h,
                heading: c,
                headingRef: f,
                children: b
            }), o[7] = b, o[8] = c, o[9] = f, o[10] = h, o[11] = i.compact, o[12] = m) : m = o[12], o[13] !== q || o[14] !== i || o[15] !== m ? (n = (0, d.jsx)(p, {
                ...i,
                padded: !0,
                "data-page-full-width": q,
                children: m
            }), o[13] = q, o[14] = i, o[15] = m, o[16] = n) : n = o[16], n
        }

        function p(a) {
            let b, c, g, h, i = (0, e.c)(8);
            if (i[0] !== a) {
                let {
                    as: d,
                    padded: e,
                    compact: h,
                    contentAlignment: j,
                    externalEditingControls: k,
                    headingOutside: l,
                    className: n,
                    ...o
                } = a;
                b = "section" === (void 0 === d ? "div" : d) ? f.a.section : f.a.div, c = o, g = (0, m.a)({
                    padded: e,
                    compact: h,
                    externalEditingControls: k,
                    headingOutside: l,
                    contentAlignment: j,
                    fullWidth: o["data-page-full-width"],
                    className: n
                }), i[0] = a, i[1] = b, i[2] = c, i[3] = g
            } else b = i[1], c = i[2], g = i[3];
            return i[4] !== b || i[5] !== c || i[6] !== g ? (h = (0, d.jsx)(b, {
                ...c,
                ...g
            }), i[4] = b, i[5] = c, i[6] = g, i[7] = h) : h = i[7], h
        }

        function q(a) {
            let b, c, f, g = (0, e.c)(7),
                {
                    pageId: h
                } = a,
                k = (0, i.a)();
            return g[0] !== k ? (b = k.formatMessage({
                id: "codex.space.page.contentLoading",
                defaultMessage: "Loading page content"
            }), g[0] = k, g[1] = b) : b = g[1], g[2] !== h ? (c = (0, d.jsx)(j.b, {
                seed: h,
                size: "md",
                variant: "chatgpt-project"
            }), g[2] = h, g[3] = c) : c = g[3], g[4] !== b || g[5] !== c ? (f = (0, d.jsx)("div", {
                className: "col-[reading] w-full max-w-(--page-reading-width) min-w-0",
                "aria-label": b,
                role: "status",
                children: c
            }), g[4] = b, g[5] = c, g[6] = f) : f = g[6], f
        }

        function r(a) {
            let b, c, f, g = (0, e.c)(7),
                {
                    editor: i,
                    externalEditingControls: j,
                    onTouch: k
                } = a,
                m = void 0 !== j && j,
                o = (0, h.useRef)(null),
                p = (0, h.useEffectEvent)(k);
            return g[0] !== i || g[1] !== p ? (b = () => {
                let a = o.current?.closest("[data-page-document-viewport]");
                if (null != a && null != i) return function(a, b, c) {
                    let d = new AbortController,
                        {
                            signal: e
                        } = d,
                        f = null,
                        g = () => {
                            f = null
                        };
                    return a.addEventListener("pointerdown", a => {
                        f = a.isPrimary && "touch" === a.pointerType && n(b, a.target, a.clientY) ? a : null
                    }, {
                        signal: e
                    }), a.addEventListener("pointerup", a => {
                        null != f && (a.pointerId !== f.pointerId || a.timeStamp - f.timeStamp >= 350 || Math.hypot(a.clientX - f.clientX, a.clientY - f.clientY) > 8) && g()
                    }, {
                        signal: e
                    }), a.addEventListener("pointercancel", g, {
                        signal: e
                    }), a.addEventListener("contextmenu", g, {
                        signal: e
                    }), a.addEventListener("click", a => {
                        let d = f?.clientY;
                        g(), null != d && !a.defaultPrevented && n(b, a.target, d) && c()
                    }, {
                        signal: e
                    }), () => d.abort()
                }(a, i, p)
            }, g[0] = i, g[1] = p, g[2] = b) : b = g[2], g[3] !== i ? (c = [i], g[3] = i, g[4] = c) : c = g[4], (0, h.useEffect)(b, c), g[5] !== m ? (f = (0, d.jsx)(l.b, {
                ref: o,
                externalEditingControls: m
            }), g[5] = m, g[6] = f) : f = g[6], f
        }
    }),
    O7mt: (function(a, b, c) {
        let d = [
            ["<->", "\u2194"],
            ["<=>", "\u21D4"],
            ["<-", "\u2190"],
            ["->", "\u2192"],
            ["=>", "\u21D2"],
            ["<=", "\u2264"],
            [">=", "\u2265"],
            ["!=", "\u2260"],
            ["+/-", "\xb1"],
            ["--", "\u2014"],
            ["...", "\u2026"]
        ];

        function e(a, b) {
            let c = b;
            for (; c > 0 && "\\" === a[c - 1];) c -= 1;
            return (b - c) % 2 == 1
        }
        c.d(b, {}, {
            a: function(a, b, c) {
                if ('"' === b || "'" === b) return {
                    shortcut: b,
                    glyph: ('"' === b ? "\u201C\u201D" : "\u2018\u2019")[+!(0 === a.length || /[\s{[(<'"\u2018\u201c]/.test(a.slice(-1)))],
                    from: a.length,
                    continuation: !1
                };
                if (1 !== b.length || !".=>-".includes(b)) return;
                let e = ">" === b && ("<-" === c && a.endsWith("\u2190") || "<=" === c && a.endsWith("\u2264")),
                    f = (e ? c : a.slice(-2)) + b,
                    g = d.find(a => {
                        let [b] = a;
                        return f.endsWith(b)
                    });
                return null == g ? void 0 : {
                    shortcut: g[0],
                    glyph: g[1],
                    from: a.length - (e ? 1 : g[0].length - 1),
                    continuation: e
                }
            },
            b: function(a, b, c, d) {
                let f;
                if (e(a, c) || a.includes("](") && a.lastIndexOf("](") > a.lastIndexOf(")")) return !0;
                if ('"' !== b) {
                    let c = a + b;
                    if (/https?:\/\/|www\./i.test(c)) {
                        let a = /(?:^|[\s"\u201c\u201d])([^\s"\u201c\u201d]*)$/.exec(c)?.[1];
                        if (null != a && /https?:\/\/|www\./i.test(a)) return !0
                    }
                }
                if (!a.includes("`")) return !1;
                let g = d?.parent.type.schema.marks.code,
                    h = a;
                if (null != d && null != g) {
                    let b = [],
                        c = 0;
                    d.parent.nodesBetween(0, a.length, (d, e) => {
                        if (null == g.isInSet(d.marks)) return;
                        let f = Math.min(a.length, e + d.nodeSize);
                        return b.push(a.slice(c, e), a.slice(e, f).replace(/`/g, " ")), c = f, !1
                    }), c > 0 && (h = b.join("") + a.slice(c))
                }
                for (let a of h.matchAll(/`+/g)) f === a[0] ? f = void 0 : null != f || e(h, a.index) || (f = a[0]);
                return null != f
            }
        })
    }),
    Jif0: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("CJrD"),
            h = c("zd8w"),
            i = c("Wf1j"),
            j = c("NnV7"),
            k = c("ADAj"),
            l = c("HgLj"),
            m = c("O7mt"),
            n = c("l3dN");
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, p, q, r, s, t, u, v, w = (0, e.c)(30),
                    {
                        placeholder: x,
                        onHistory: y,
                        ...z
                    } = a,
                    A = (0, i.a)();
                w[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, g.a)(), w[0] = b) : b = w[0];
                let B = (0, k.l)(b.smartPunctuationEnabled),
                    C = (0, h.useRef)(void 0),
                    D = (0, h.useRef)(!1),
                    E = (0, h.useRef)(!1),
                    F = (0, l.a)(z.ref, a => {
                        if (null == a || null == y) return;
                        let b = a => {
                            !a.defaultPrevented && !a.isComposing && !E.current && ("historyUndo" === a.inputType || "historyRedo" === a.inputType) && y("historyUndo" === a.inputType ? "undo" : "redo") && a.preventDefault()
                        };
                        return a.addEventListener("beforeinput", b), () => a.removeEventListener("beforeinput", b)
                    }),
                    G = null != x && "placeholder:text-current";
                return w[1] !== G ? (c = (0, f.b)(n.a.PageTitle, "relative block field-sizing-content w-full min-w-0 resize-none overflow-hidden border-none bg-transparent font-semibold break-words text-default outline-none", G), w[1] = G, w[2] = c) : c = w[2], w[3] !== A || w[4] !== z ? (o = z["aria-label"] ?? A.formatMessage({
                    id: "codex.space.page.titleLabel",
                    defaultMessage: "Page title"
                }), w[3] = A, w[4] = z, w[5] = o) : o = w[5], w[6] !== A || w[7] !== x ? (p = x ?? A.formatMessage(j.c.untitled), w[6] = A, w[7] = x, w[8] = p) : p = w[8], w[9] !== z.onPaste ? (q = a => {
                    C.current = void 0,
                        function(a, b, c) {
                            c.current = !0;
                            try {
                                b?.(a)
                            } finally {
                                c.current = !1
                            }
                        }(a, z.onPaste, D)
                }, w[9] = z.onPaste, w[10] = q) : q = w[10], w[11] !== z ? (r = a => {
                    z.onKeyDown?.(a);
                    let b = a.currentTarget,
                        c = C.current;
                    "Backspace" === a.key && !a.defaultPrevented && !a.nativeEvent.isComposing && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && !b.disabled && !b.readOnly && null != c && b.value === c.value && b.selectionStart === c.caret && b.selectionEnd === c.caret && function(a, b) {
                        b.current = !0;
                        try {
                            return a.ownerDocument.execCommand("undo")
                        } finally {
                            b.current = !1
                        }
                    }(b, E) && a.preventDefault()
                }, s = a => {
                    let b = a.currentTarget,
                        c = C.current;
                    null != c && (b.value !== c.value || b.selectionStart !== c.caret || b.selectionEnd !== c.caret) && (C.current = void 0), z.onSelect?.(a)
                }, w[11] = z, w[12] = r, w[13] = s) : (r = w[12], s = w[13]), w[14] !== z || w[15] !== B ? (t = a => {
                    z.onInput?.(a);
                    let b = a.currentTarget,
                        c = a.nativeEvent,
                        d = C.current;
                    if (c instanceof InputEvent && null != d) {
                        if ("historyUndo" === c.inputType && b.value === d.value.slice(0, d.caret - 1) + d.shortcut + d.value.slice(d.caret)) return void b.setSelectionRange(b.selectionEnd, b.selectionEnd);
                        if ("historyRedo" === c.inputType && b.value === d.value) return
                    }
                    if (C.current = void 0, D.current || !B || b.disabled || b.readOnly || !(c instanceof InputEvent) || c.isComposing || "insertText" !== c.inputType || c.data?.length !== 1 || !"\"'.=>-".includes(c.data) || b.selectionStart !== b.selectionEnd) return;
                    let e = c.data,
                        f = b.value,
                        g = b.selectionStart,
                        h = f.slice(0, g - e.length),
                        i = (0, m.a)(h, e, d?.caret === g - 1 && d.value === h + f.slice(g) ? d.shortcut : void 0);
                    null == i || (0, m.b)(h, e, i.from) || queueMicrotask(() => {
                        if (b.ownerDocument.activeElement === b && !b.disabled && !b.readOnly && b.value === f && b.selectionStart === g && b.selectionEnd === g) {
                            if (b.setSelectionRange(i.from, g), i.continuation) {
                                if (!b.ownerDocument.execCommand("insertText", !1, i.shortcut) || b.value !== f.slice(0, i.from) + i.shortcut + f.slice(g)) return;
                                b.setSelectionRange(i.from, i.from + i.shortcut.length)
                            }
                            b.ownerDocument.execCommand("insertText", !1, i.glyph) && (C.current = {
                                value: b.value,
                                caret: b.selectionStart,
                                shortcut: i.shortcut
                            })
                        }
                    })
                }, w[14] = z, w[15] = B, w[16] = t) : t = w[16], w[17] !== z ? (u = a => {
                    C.current = void 0, z.onBlur?.(a)
                }, w[17] = z, w[18] = u) : u = w[18], w[19] !== z || w[20] !== t || w[21] !== u || w[22] !== F || w[23] !== c || w[24] !== o || w[25] !== p || w[26] !== q || w[27] !== r || w[28] !== s ? (v = (0, d.jsx)("textarea", {
                    ...z,
                    ref: F,
                    className: c,
                    "aria-label": o,
                    "aria-multiline": !1,
                    placeholder: p,
                    rows: 1,
                    onPaste: q,
                    onKeyDown: r,
                    onSelect: s,
                    onInput: t,
                    onBlur: u
                }), w[19] = z, w[20] = t, w[21] = u, w[22] = F, w[23] = c, w[24] = o, w[25] = p, w[26] = q, w[27] = r, w[28] = s, w[29] = v) : v = w[29], v
            }
        })
    }),
    fQMn: (function(a, b, c) {
        c.d(b, {
            a: () => B
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("Q840"),
            i = c("zd8w"),
            j = c("Wf1j"),
            k = c("Sm6l"),
            l = c("JNtf"),
            m = c("bf6R"),
            n = c("nzx4"),
            o = c("ibLK"),
            p = c("SLxa"),
            q = c("SVco"),
            r = c("FR8U"),
            s = c("VAbi"),
            t = c("TnSu"),
            u = c("qlvd"),
            v = c("aWEZ"),
            w = c("aK2P"),
            x = c("TwSq"),
            y = c("wqOV");

        function z(a) {
            let b, c, f = (0, e.c)(11),
                {
                    children: g,
                    emoji: i,
                    findContextId: j
                } = a,
                k = (0, h.z)(x.h),
                l = (0, h.z)(x.g);
            if (f[0] !== l?.id || f[1] !== i || f[2] !== j || f[3] !== k) {
                let a = k?.contextId === j ? k?.matches.filter(a => {
                    let {
                        location: b
                    } = a;
                    return "page" === b.domain && "title" === b.target && b.from < i.length && b.to > 0
                }) : void 0;
                b = a?.find(a => {
                    let {
                        id: b
                    } = a;
                    return b === l?.id
                }) ?? a?.[0], f[0] = l?.id, f[1] = i, f[2] = j, f[3] = k, f[4] = b
            } else b = f[4];
            let m = b;
            if (m?.location.domain !== "page") {
                let a;
                return f[5] !== g ? (a = (0, d.jsx)(d.Fragment, {
                    children: g
                }), f[5] = g, f[6] = a) : a = f[6], a
            }
            let n = l?.id === m.id ? "" : void 0;
            return f[7] !== g || f[8] !== m.location.from || f[9] !== n ? (c = (0, d.jsx)("mark", {
                className: `${y.a.match} inline-flex rounded-2xs text-inherit`,
                "data-active": n,
                "data-page-find-match": !0,
                "data-page-find-title-match": m.location.from,
                children: g
            }), f[7] = g, f[8] = m.location.from, f[9] = n, f[10] = c) : c = f[10], c
        }
        var A = c("l3dN");

        function B(a) {
            let b, c, x, y, B, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T = (0, e.c)(90),
                U = (0, j.a)(),
                [V, W] = (0, i.useState)(!1),
                X = (0, i.useRef)(null),
                Y = (0, i.useRef)(null),
                Z = (0, o.a)("(max-width: 767px)");
            T[0] === Symbol.for("react.memo_cache_sentinel") ? (b = () => W(!1), T[0] = b) : b = T[0];
            let $ = b,
                {
                    symbol: _,
                    disabled: aa,
                    space: ab,
                    spaceTheme: ac
                } = a,
                ad = Z && !ab,
                ae = (0, h.x)(p.a, {
                    documentType: ab ? void 0 : a.documentType,
                    namespace: ab ? null : a.namespace,
                    surface: "editor"
                })?.[32],
                af = ab && null == _ && null != ac && "" !== ac,
                ag = null != _ && "none" !== _.kind || af || null != ae,
                ah = !ag && !ab && (Z || a.externalEditingControls || null != a.openNativePicker),
                ai = a.externalEditingControls && ab && !ag && !a.hasUnsupportedLegacyAppearance;
            if (T[1] === Symbol.for("react.memo_cache_sentinel") ? (c = () => () => {
                    Y.current?.abort(), Y.current = null
                }, T[1] = c) : c = T[1], T[2] !== aa || T[3] !== ai ? (x = [ai, aa], T[2] = aa, T[3] = ai, T[4] = x) : x = T[4], (0, i.useLayoutEffect)(c, x), (aa || ai) && V && $(), ai) return null;
            T[5] !== ah || T[6] !== U ? (y = ah ? U.formatMessage({
                id: "codex.space.page.symbol.add",
                defaultMessage: "Add icon"
            }) : U.formatMessage({
                id: "codex.space.page.symbol.change",
                defaultMessage: "Change icon"
            }), T[5] = ah, T[6] = U, T[7] = y) : y = T[7];
            let aj = y;
            T[8] !== ae ? (B = null == ae ? (0, d.jsx)(m.od, {}) : (0, d.jsx)(ae, {}), T[8] = ae, T[9] = B) : B = T[9];
            let ak = B,
                al = ak;
            if (_?.kind === "emoji") {
                let a;
                T[10] !== _.value ? (a = (0, d.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, d.jsx)(t.a, {
                        emoji: _.value,
                        size: "large"
                    })
                }), T[10] = _.value, T[11] = a) : a = T[11], al = a
            } else if (_?.kind === "icon" || af) {
                let a, b, c = _?.kind === "icon" ? _.color : ac;
                T[12] !== ak || T[13] !== ab ? (a = ab ? (0, d.jsx)(m.Qc, {
                    className: "size-12"
                }) : ak, T[12] = ak, T[13] = ab, T[14] = a) : a = T[14];
                let e = _?.kind === "icon" ? _.value : null;
                T[15] !== c || T[16] !== a || T[17] !== e ? (b = (0, d.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, d.jsx)(r.a, {
                        className: "size-12",
                        color: c,
                        defaultIcon: a,
                        icon: e
                    })
                }), T[15] = c, T[16] = a, T[17] = e, T[18] = b) : b = T[18], al = b
            }
            if (null != a.legacyEmoji) {
                let b;
                T[19] !== al || T[20] !== a.findContextId || T[21] !== a.legacyEmoji ? (b = (0, d.jsx)(z, {
                    emoji: a.legacyEmoji,
                    findContextId: a.findContextId,
                    children: al
                }), T[19] = al, T[20] = a.findContextId, T[21] = a.legacyEmoji, T[22] = b) : b = T[22], al = b
            }
            let am = ah ? "iconTouch" : "compact",
                an = ag ? "self-start" : "absolute end-0 top-1/2 -translate-y-1/2",
                ao = ah && "max-w-(--page-control-gutter)";
            T[23] !== an || T[24] !== ao ? (F = (0, g.b)(an, ao), T[23] = an, T[24] = ao, T[25] = F) : F = T[25];
            let ap = ag ? "ghostMuted" : "ghost",
                aq = ag ? void 0 : "small",
                ar = ag ? "iconLarge" : am,
                as = !ag;
            T[26] !== aa || T[27] !== al || T[28] !== aj || T[29] !== ar || T[30] !== as || T[31] !== F || T[32] !== ap || T[33] !== aq ? (G = (0, d.jsx)(k.a, {
                ref: X,
                className: F,
                "aria-label": aj,
                color: ap,
                disabled: aa,
                disabledAppearance: "unchanged",
                onClick: E,
                radius: aq,
                size: ar,
                uniform: as,
                type: "button",
                children: al
            }), T[26] = aa, T[27] = al, T[28] = aj, T[29] = ar, T[30] = as, T[31] = F, T[32] = ap, T[33] = aq, T[34] = G) : G = T[34];
            let at = G;
            if (aa) {
                let a;
                return ag ? (T[35] !== al ? (a = (0, d.jsx)("span", {
                    className: "flex size-16 items-center justify-center border border-transparent",
                    children: al
                }), T[35] = al, T[36] = a) : a = T[36], a) : null
            }
            T[37] !== aa || T[38] !== U || T[39] !== a || T[40] !== _ ? (H = async function() {
                if (aa) return;
                Y.current?.abort(), Y.current = null;
                let b = X.current;
                if (null == a.openNativePicker || null == b) return void W(!0);
                let c = function(a, b, c) {
                    let d = (0, v.d)(a.ownerDocument, a.getBoundingClientRect());
                    if (null != d) return {
                        symbol: b,
                        canRemove: null != b && "none" !== b.kind,
                        icons: (0, u.a)("", c).map(a => {
                            let {
                                id: b,
                                label: d,
                                keywords: e
                            } = a;
                            return {
                                id: b,
                                label: c.formatMessage(d),
                                keywords: e
                            }
                        }),
                        colors: q.a,
                        anchor: d
                    }
                }(b, _, U);
                if (null == c) return void W(!0);
                let d = new AbortController;
                Y.current = d;
                let e = await a.openNativePicker(c, d.signal);
                if (!d.signal.aborted) {
                    if (Y.current = null, "unsupported" === e.outcome || "error" === e.outcome) return void W(!0);
                    "handled" === e.outcome && a.onChange(e.symbol), a.onClose?.()
                }
            }, T[37] = aa, T[38] = U, T[39] = a, T[40] = _, T[41] = H) : H = T[41];
            let au = H;
            T[42] !== a ? (I = null == a.onClose ? void 0 : b => {
                b.preventDefault(), a.onClose?.()
            }, T[42] = a, T[43] = I) : I = T[43];
            let av = I,
                aw = ab && _?.kind !== "emoji" ? "icon" : "emoji",
                ax = !ab && !ad,
                ay = ad ? "sheet" : "grid",
                az = !ad,
                aA = ad ? "calc(70dvh - 4rem - env(safe-area-inset-bottom))" : void 0;
            T[44] !== aa || T[45] !== a.hasUnsupportedLegacyAppearance || T[46] !== a.onChange || T[47] !== ad || T[48] !== _ || T[49] !== aw || T[50] !== ax || T[51] !== ay || T[52] !== az || T[53] !== aA || T[54] !== ac ? (J = (0, d.jsx)(s.a, {
                disabled: aa,
                value: _,
                defaultColor: ac,
                commitColorOnSelect: ad,
                requireIconColor: a.hasUnsupportedLegacyAppearance,
                allowClearWithoutSymbol: a.hasUnsupportedLegacyAppearance,
                defaultKind: aw,
                deferEmojiCatalog: ax,
                layout: ay,
                embedded: ad,
                autoFocus: az,
                availableHeight: aA,
                onChange: a.onChange,
                onSelect: $,
                onClear: $
            }), T[44] = aa, T[45] = a.hasUnsupportedLegacyAppearance, T[46] = a.onChange, T[47] = ad, T[48] = _, T[49] = aw, T[50] = ax, T[51] = ay, T[52] = az, T[53] = aA, T[54] = ac, T[55] = J) : J = T[55];
            let aB = J,
                aC = V && !ad;
            T[56] !== au ? (K = a => {
                a ? au() : $()
            }, T[56] = au, T[57] = K) : K = T[57], T[58] !== ah || T[59] !== ag ? (L = ag ? "self-start" : (0, g.b)(A.a.PageTitle, "absolute top-0 end-full font-semibold", !ah && "pe-2"), T[58] = ah, T[59] = ag, T[60] = L) : L = T[60];
            let aD = ag || a.hasUnsupportedLegacyAppearance || ah || V,
                aE = ag ? "flex" : "relative inline-block h-[1cap] align-baseline";
            return T[61] !== at ? (M = (0, d.jsx)(n.e, {
                asChild: !0,
                children: at
            }), T[61] = at, T[62] = M) : M = T[62], T[63] !== aj || T[64] !== V || T[65] !== M ? (N = (0, d.jsx)(f.a, {
                content: aj,
                disabled: V,
                children: M
            }), T[63] = aj, T[64] = V, T[65] = M, T[66] = N) : N = T[66], T[67] !== aE || T[68] !== N ? (O = (0, d.jsx)("span", {
                className: aE,
                children: N
            }), T[67] = aE, T[68] = N, T[69] = O) : O = T[69], T[70] !== L || T[71] !== aD || T[72] !== O ? (P = (0, d.jsx)(w.a, {
                className: L,
                anchorSelector: "[data-page-title]",
                active: aD,
                children: O
            }), T[70] = L, T[71] = aD, T[72] = O, T[73] = P) : P = T[73], T[74] !== aj || T[75] !== aB || T[76] !== av ? (Q = (0, d.jsx)(n.c, {
                className: "z-50 outline-hidden",
                "aria-label": aj,
                align: "center",
                onCloseAutoFocus: av,
                onClick: D,
                unstyled: !0,
                children: aB
            }), T[74] = aj, T[75] = aB, T[76] = av, T[77] = Q) : Q = T[77], T[78] !== aj || T[79] !== V || T[80] !== aB || T[81] !== av || T[82] !== ad ? (R = V && ad && (0, d.jsxs)(l.a, {
                open: !0,
                size: "sheet",
                variant: "opaque",
                onOpenChange: a => {
                    a || $()
                },
                contentProps: {
                    shouldStopPointerDownPropagation: !1,
                    onCloseAutoFocus: av,
                    onOpenAutoFocus: C
                },
                children: [(0, d.jsx)(l.f, {
                    className: "px-4 pt-4 pb-3 text-center text-base font-semibold",
                    children: aj
                }), aB]
            }), T[78] = aj, T[79] = V, T[80] = aB, T[81] = av, T[82] = ad, T[83] = R) : R = T[83], T[84] !== aC || T[85] !== K || T[86] !== P || T[87] !== Q || T[88] !== R ? (S = (0, d.jsxs)(n.a, {
                modal: !0,
                open: aC,
                onOpenChange: K,
                children: [P, Q, R]
            }), T[84] = aC, T[85] = K, T[86] = P, T[87] = Q, T[88] = R, T[89] = S) : S = T[89], S
        }

        function C(a) {
            a.preventDefault(), a.currentTarget instanceof HTMLElement && a.currentTarget.focus()
        }

        function D(a) {
            return a.stopPropagation()
        }

        function E(a) {
            return a.stopPropagation()
        }
    }),
    SCmN: (function(a, b, c) {
        var d = c("QBk8"),
            e = c("Q840"),
            f = c("Cslg"),
            g = c("CKur"),
            h = c("g2p6"),
            i = c("e1xH"),
            j = c("yGJW"),
            k = c("OWtl"),
            l = c("WFY2"),
            m = c("kpIY"),
            n = c("Nwp9"),
            o = c("OHD8"),
            p = c("hlkZ"),
            q = c("v5SL"),
            r = c("nndI");
        let s = "oai/apps/hasOpenedSpaceWelcome",
            t = "space-welcome-dismissal-v1",
            u = (0, n.b)(t, {}),
            v = (0, e.v)(k.a, a => !1),
            w = (0, e.u)(k.a, () => null),
            x = (0, e.c)(k.a, a => {
                let {
                    get: b
                } = a, c = b(p.spaceAccountId$), d = b(f.k);
                return null != c && null != d && c === b(h.n) ? {
                    accountId: c,
                    userId: d,
                    key: JSON.stringify([c, d])
                } : null
            }),
            y = (0, e.d)(k.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(x);
                return null != d && c(r.g)[d.key] === a
            }),
            z = (0, e.v)(k.a, a => !1),
            A = (0, e.v)(k.a, a => "unknown"),
            B = (0, e.d)(k.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(w);
                return c(i.pagesEnabled$) && d?.awaitingPaint === !0 && !c(q.h, d.identityKey) && d.pageId === a && d.identityKey === c(x)?.key
            }),
            C = (0, e.c)(k.a, a => {
                let {
                    get: b
                } = a, c = b(x);
                if (null == c) return;
                let d = b(u)[c.key];
                if (null != d) return !1 !== d;
                let e = b(h.p);
                if (e.isSuccess && !e.isPlaceholderData) return Object.hasOwn(e.data.seenAnnouncements ?? {}, s)
            });
        async function D(a) {
            if (!a.get(i.pagesEnabled$)) return;
            let b = a.get(x);
            if (null == b || a.get(q.h, b.key) || "pending" !== a.get(u)[b.key] || a.get(v, b.key)) return;
            let c = (0, p.watchSpaceAccount)(a, b.accountId, b.userId);
            a.set(v, b.key, !0);
            try {
                if (await (0, g.a)(a, s, !1, c.signal), c.signal.throwIfAborted(), "pending" !== a.get(u)[b.key]) return;
                (0, m.t)(t, {
                    entries: {
                        [b.key]: {
                            value: "saved"
                        }
                    }
                }), await a.query.snapshot(h.p).invalidate()
            } catch {
                c.signal.aborted || l.a.warning("Failed to save Space welcome dismissal")
            } finally {
                c.stop(), a.set(v, b.key, !1)
            }
        }
        c.d(b, {}, {
            a: function(a, b) {
                a.set(A, b, "unknown"), a.set(r.g, a => {
                    let {
                        [b]: c, ...d
                    } = a;
                    return d
                }), a.set(r.c, a => {
                    let {
                        [b]: c, ...d
                    } = a;
                    return d
                }), a.get(w)?.identityKey === b && a.set(w, null)
            },
            b: y,
            c: function(a, b) {
                let c = a.get(w);
                if (c?.pageId !== b || !a.get(i.pagesEnabled$)) return;
                let e = a.get(x);
                null == e || c.identityKey !== e.key || a.get(q.h, e.key) || ((0, j.a)(a, d.CodexSpacesOnboarding, {
                    action: d.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_OPENED,
                    item: d.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                    pageId: b
                }), (0, m.t)(t, {
                    entries: {
                        [e.key]: {
                            value: "pending"
                        }
                    }
                }), a.set(w, null), D(a))
            },
            d: w,
            e: D,
            f: A,
            g: x,
            h: C,
            i: z,
            j: B,
            k: function(a) {
                return a instanceof Error && (0, o.a)(a) ? "retryable" : "failed"
            }
        })
    }),
    WP5H: (function(a, b, c) {
        var d = c("xWaH");
        let e = {
            kind: "icon",
            value: "graduation-cap",
            color: "blue"
        };
        c.d(b, {}, {
            a: async function(a, b, f) {
                let {
                    withPageMenuSession: g
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(193172), c.e(770232)]).then(() => c("tKju"));
                f() && await g(a, b, "write", async a => {
                    f() && null == a.getSymbol() && null == (0, d.vc)(a.document.getText("title").toJSON()).emoji && a.mutateDocument(a => (0, d.rc)(a, e)) && await a.flush({
                        scope: "current",
                        timeoutMs: null
                    })
                })
            },
            b: e
        })
    }),
    JtEZ: (function(a, b, c) {
        var d = c("SZCv"),
            e = c.n(d),
            f = c("Q840"),
            g = c("lAQI"),
            h = c("dQRk"),
            i = c("C9uP"),
            j = c("sjCL"),
            k = c("YF6h"),
            l = c("tSEg"),
            m = c("kpIY"),
            n = c("Nwp9"),
            o = c("Iq2T");
        let p = "spaces-workspace-chat-selections-v1",
            q = g.J(g.L(), g.F({
                ownerClientThreadId: g.L(),
                selection: i.b.nullable()
            }).or(g.F({
                ownerClientThreadId: g.L(),
                ownerSelected: g.j(),
                recentChats: g.g(i.b.nullable())
            }).transform(a => {
                let {
                    ownerClientThreadId: b,
                    ownerSelected: c,
                    recentChats: d
                } = a;
                return {
                    ownerClientThreadId: b,
                    selection: c ? null : d[0] ?? null
                }
            })).nullable().catch(null)).catch({}),
            r = (0, n.b)(p, {}, {
                coerceStoredValue: a => q.parse(a)
            }),
            s = (0, f.c)(l.a, a => {
                let {
                    get: b
                } = a, c = b(o.c);
                if (null != c.conversationId) return {
                    kind: "local",
                    conversationId: c.conversationId,
                    hostId: c.hostId
                };
                let d = b(o.j);
                if (null != d && b(j.d, d)) {
                    let a = b(k.e, d);
                    return null == a.conversationId ? null : {
                        kind: "chatgpt",
                        conversationId: b(h.j, a.conversationId) ?? a.conversationId
                    }
                }
                return {
                    kind: "local-draft",
                    clientThreadId: c.clientThreadId,
                    hostId: c.hostId
                }
            }, {
                isEqual: e()
            }),
            t = (0, f.c)(l.a, a => {
                let {
                    get: b
                } = a, c = b(s);
                if (c?.kind === "local") return c;
                let d = b(o.j);
                if (c?.kind !== "chatgpt" || null == d) return null;
                let e = b(h.j, c.conversationId);
                return null == e ? null : {
                    kind: "chatgpt",
                    conversationId: e,
                    title: b(k.e, d).title ?? ""
                }
            }, {
                isEqual: e()
            }),
            u = (0, f.c)(l.a, a => {
                let {
                    get: b
                } = a, c = b(o.c), d = b(r)[c.accountKey], e = d?.selection ?? null;
                return d?.ownerClientThreadId !== c.clientThreadId || (0, i.a)(b(t), e) ? null : e
            }, {
                isEqual: e()
            }),
            v = (0, f.d)(l.a, (a, b) => {
                let {
                    get: c,
                    scope: d
                } = b;
                return (d.value.persistentWorkspace?.key !== "/space" || null == c(u)) && c(j.d, a)
            }),
            w = (0, f.c)(l.a, a => {
                let {
                    get: b
                } = a, c = b(u);
                return c?.kind === "chatgpt" ? {
                    kind: "chatgpt",
                    conversationId: c.conversationId
                } : c ?? b(s)
            }, {
                isEqual: e()
            });
        c.d(b, {}, {
            a: function(a) {
                let b = (0, o.a)(a);
                null != b && ((0, m.t)(p, {
                    entries: {
                        [b.accountKey]: {
                            value: {
                                ownerClientThreadId: b.clientThreadId,
                                selection: null
                            }
                        }
                    },
                    maxEntries: 500
                }), a.set(r, (0, m.k)(p, {})))
            },
            b: v,
            c: u,
            d: w,
            e: t,
            f: s
        })
    }),
    SVco: (function(a, b, c) {
        c.d(b, {}, {
            a: ["black", "red", "orange", "yellow", "green", "blue", "purple", "pink"],
            b: function(a, b) {
                switch (b) {
                    case "black":
                        return a.formatMessage({
                            id: "codex.projectAppearance.color.option.black",
                            defaultMessage: "Default"
                        });
                    case "blue":
                        return a.formatMessage({
                            id: "codex.projectAppearance.color.option.blue",
                            defaultMessage: "Blue"
                        });
                    case "green":
                        return a.formatMessage({
                            id: "codex.projectAppearance.color.option.green",
                            defaultMessage: "Green"
                        });
                    case "orange":
                        return a.formatMessage({
                            id: "codex.projectAppearance.color.option.orange",
                            defaultMessage: "Orange"
                        });
                    case "pink":
                        return a.formatMessage({
                            id: "codex.projectAppearance.color.option.pink",
                            defaultMessage: "Pink"
                        });
                    case "purple":
                        return a.formatMessage({
                            id: "codex.projectAppearance.color.option.purple",
                            defaultMessage: "Purple"
                        });
                    case "red":
                        return a.formatMessage({
                            id: "codex.projectAppearance.color.option.red",
                            defaultMessage: "Red"
                        });
                    case "yellow":
                        return a.formatMessage({
                            id: "codex.projectAppearance.color.option.yellow",
                            defaultMessage: "Yellow"
                        })
                }
            }
        })
    }),
    qlvd: (function(a, b, c) {
        c.d(b, {
            a: () => i
        });
        var d = c("DBCl"),
            e = c("Qgfj");
        let f = (0, e.f)({
            "bar-chart": {
                id: "codex.projectAppearance.icon.option.bar_chart",
                defaultMessage: "Bar Chart"
            },
            book: {
                id: "codex.projectAppearance.icon.option.book",
                defaultMessage: "Book"
            },
            brain: {
                id: "codex.projectAppearance.icon.option.brain",
                defaultMessage: "Brain"
            },
            "currency-dollar": {
                id: "codex.projectAppearance.icon.option.currency_dollar",
                defaultMessage: "Currency Dollar"
            },
            customize: {
                id: "codex.projectAppearance.icon.option.customize",
                defaultMessage: "Customize"
            },
            "desk-globe": {
                id: "codex.projectAppearance.icon.option.desk_globe",
                defaultMessage: "Globe Spin"
            },
            dumbbell: {
                id: "codex.projectAppearance.icon.option.dumbbell",
                defaultMessage: "Dumbbell"
            },
            edit: {
                id: "codex.projectAppearance.icon.option.edit",
                defaultMessage: "Pencil"
            },
            flask: {
                id: "codex.projectAppearance.icon.option.flask",
                defaultMessage: "Flask"
            },
            folder: {
                id: "codex.projectAppearance.icon.option.folder",
                defaultMessage: "Folder"
            },
            function: {
                id: "codex.projectAppearance.icon.option.function",
                defaultMessage: "Code Brackets"
            },
            globe: {
                id: "codex.projectAppearance.icon.option.globe",
                defaultMessage: "Globe"
            },
            "graduation-cap": {
                id: "codex.projectAppearance.icon.option.graduation_cap",
                defaultMessage: "Graduation Cap"
            },
            health: {
                id: "codex.projectAppearance.icon.option.health",
                defaultMessage: "Health"
            },
            heart: {
                id: "codex.projectAppearance.icon.option.heart",
                defaultMessage: "Heart"
            },
            kettlebell: {
                id: "codex.projectAppearance.icon.option.kettlebell",
                defaultMessage: "Kettlebell"
            },
            logs: {
                id: "codex.projectAppearance.icon.option.logs",
                defaultMessage: "Logs"
            },
            lotus: {
                id: "codex.projectAppearance.icon.option.lotus",
                defaultMessage: "Lotus"
            },
            music: {
                id: "codex.projectAppearance.icon.option.music",
                defaultMessage: "Music"
            },
            palette: {
                id: "codex.projectAppearance.icon.option.palette",
                defaultMessage: "Palette"
            },
            paw: {
                id: "codex.projectAppearance.icon.option.paw",
                defaultMessage: "Paw"
            },
            plane: {
                id: "codex.projectAppearance.icon.option.plane",
                defaultMessage: "Plane"
            },
            plant: {
                id: "codex.projectAppearance.icon.option.plant",
                defaultMessage: "Plant"
            },
            popcorn: {
                id: "codex.projectAppearance.icon.option.popcorn",
                defaultMessage: "Popcorn"
            },
            scale: {
                id: "codex.projectAppearance.icon.option.scale",
                defaultMessage: "Balancing Scale"
            },
            stethoscope: {
                id: "codex.projectAppearance.icon.option.stethoscope",
                defaultMessage: "Stethoscope"
            },
            suitcase: {
                id: "codex.projectAppearance.icon.option.suitcase",
                defaultMessage: "Suitcase"
            },
            terminal: {
                id: "codex.projectAppearance.icon.option.terminal",
                defaultMessage: "Terminal"
            },
            wrench: {
                id: "codex.projectAppearance.icon.option.wrench",
                defaultMessage: "Wrench"
            },
            writing: {
                id: "codex.projectAppearance.icon.option.writing",
                defaultMessage: "Writing"
            }
        });
        (0, e.e)({
            id: "symbolPicker.icons.category.work",
            defaultMessage: "Work"
        }), (0, e.e)({
            id: "symbolPicker.icons.category.learning",
            defaultMessage: "Learning"
        }), (0, e.e)({
            id: "symbolPicker.icons.category.creative",
            defaultMessage: "Creative"
        }), (0, e.e)({
            id: "symbolPicker.icons.category.wellbeing",
            defaultMessage: "Health and wellbeing"
        }), (0, e.e)({
            id: "symbolPicker.icons.category.travel",
            defaultMessage: "Travel and places"
        }), (0, e.e)({
            id: "symbolPicker.icons.category.nature",
            defaultMessage: "Nature"
        });
        let g = {
                folder: {
                    categoryId: "work",
                    keywords: ["files", "documents", "organize", "project", "workspace"]
                },
                "currency-dollar": {
                    categoryId: "work",
                    keywords: ["money", "finance", "budget", "bank", "payment", "business"]
                },
                book: {
                    categoryId: "learning",
                    keywords: ["reading", "study", "education", "library", "literature"]
                },
                "graduation-cap": {
                    categoryId: "learning",
                    keywords: ["school", "university", "college", "education", "degree", "study"]
                },
                edit: {
                    categoryId: "creative",
                    keywords: ["pencil", "writing", "drawing", "draft", "notes"]
                },
                writing: {
                    categoryId: "creative",
                    keywords: ["pen", "author", "journal", "essay", "story", "draft"]
                },
                function: {
                    categoryId: "work",
                    keywords: ["developer", "code", "programming", "software", "math", "formula"]
                },
                terminal: {
                    categoryId: "work",
                    keywords: ["developer", "code", "command", "console", "shell", "computer"]
                },
                music: {
                    categoryId: "creative",
                    keywords: ["audio", "sound", "song", "playlist", "instrument"]
                },
                popcorn: {
                    categoryId: "creative",
                    keywords: ["movie", "film", "cinema", "entertainment", "snack"]
                },
                customize: {
                    categoryId: "creative",
                    keywords: ["design", "drawing", "art", "tools", "pens", "personalize"]
                },
                palette: {
                    categoryId: "creative",
                    keywords: ["paint", "color", "art", "design", "drawing"]
                },
                stethoscope: {
                    categoryId: "wellbeing",
                    keywords: ["doctor", "medical", "medicine", "hospital", "care", "health"]
                },
                health: {
                    categoryId: "wellbeing",
                    keywords: ["medical", "medicine", "emergency", "ambulance", "care"]
                },
                lotus: {
                    categoryId: "wellbeing",
                    keywords: ["meditation", "mindfulness", "yoga", "calm", "relax", "wellness"]
                },
                suitcase: {
                    categoryId: "travel",
                    keywords: ["vacation", "trip", "luggage", "packing", "holiday", "business"]
                },
                "bar-chart": {
                    categoryId: "work",
                    keywords: ["analytics", "data", "statistics", "report", "growth", "business"]
                },
                kettlebell: {
                    categoryId: "wellbeing",
                    keywords: ["fitness", "exercise", "gym", "workout", "strength", "weight"]
                },
                dumbbell: {
                    categoryId: "wellbeing",
                    keywords: ["fitness", "exercise", "gym", "workout", "strength", "weight"]
                },
                logs: {
                    categoryId: "work",
                    keywords: ["notebook", "journal", "records", "notes", "list", "tracking"]
                },
                scale: {
                    categoryId: "work",
                    keywords: ["law", "legal", "justice", "balance", "decision", "weight"]
                },
                "desk-globe": {
                    categoryId: "travel",
                    keywords: ["world", "earth", "geography", "map", "countries", "explore"]
                },
                plane: {
                    categoryId: "travel",
                    keywords: ["vacation", "flight", "airport", "trip", "holiday", "airplane"]
                },
                globe: {
                    categoryId: "travel",
                    keywords: ["world", "earth", "internet", "website", "global", "language"]
                },
                wrench: {
                    categoryId: "work",
                    keywords: ["tools", "repair", "build", "maintenance", "settings", "engineering"]
                },
                paw: {
                    categoryId: "nature",
                    keywords: ["pet", "animal", "dog", "cat", "wildlife"]
                },
                flask: {
                    categoryId: "learning",
                    keywords: ["science", "chemistry", "experiment", "laboratory", "research"]
                },
                brain: {
                    categoryId: "learning",
                    keywords: ["thinking", "idea", "knowledge", "intelligence", "psychology", "mind"]
                },
                heart: {
                    categoryId: "wellbeing",
                    keywords: ["love", "care", "favorite", "relationship", "emotion"]
                },
                plant: {
                    categoryId: "nature",
                    keywords: ["garden", "growth", "leaves", "environment", "ecology", "green"]
                }
            },
            h = d.md.map(function(a) {
                return {
                    id: a,
                    label: f[a],
                    ...g[a]
                }
            });

        function i(a, b) {
            let c = j(a, b.locale);
            if (0 === c.length) return h;
            let d = c.split(" ");
            return h.flatMap(a => {
                let e = j(b.formatMessage(a.label), b.locale),
                    f = j(a.id, b.locale);
                return d.every(b => e.includes(b) || f.includes(b) || a.keywords.some(a => a.includes(b))) ? [{
                    icon: a,
                    score: +(e !== c && f !== c)
                }] : []
            }).sort((a, b) => a.score - b.score).map(a => {
                let {
                    icon: b
                } = a;
                return b
            })
        }

        function j(a, b) {
            return a.trim().toLocaleLowerCase(b).replace(/[\s_-]+/g, " ")
        }
    }),
    iycc: (function(a, b, c) {
        var d = c("Q840"),
            e = c("heYt"),
            f = c("e1xH"),
            g = c("OWtl"),
            h = c("nvO1");
        let i = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(h.u, a) && c(f.pagesEnabled$)
            }),
            j = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b;
                if (!c(i, a)) return {
                    drive: !1,
                    loading: !1,
                    error: !1
                };
                let d = c(e.f);
                return {
                    drive: "available" === d,
                    loading: "loading" === d,
                    error: "error" === d
                }
            });
        c.d(b, {}, {
            a: function(a, b) {
                return "drive" === a.backing_type && !a.deleted_at && !0 === a.can_edit && b.drive
            },
            b: j,
            c: i
        })
    }),
    Ko17: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("rEML"),
            h = c("OWtl"),
            i = c("fnPc"),
            j = c("kfGJ");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k = (0, e.c)(6),
                    {
                        children: l,
                        teamId: m
                    } = a,
                    n = (0, f.y)(h.a),
                    o = `/settings/teams/${encodeURIComponent(m)}`;
                return k[0] !== n ? (b = a => {
                    a.defaultPrevented || 0 !== a.button || a.metaKey || a.altKey || a.ctrlKey || a.shiftKey || (0, i.b)(n, j.a)
                }, k[0] = n, k[1] = b) : b = k[1], k[2] !== l || k[3] !== o || k[4] !== b ? (c = (0, d.jsx)(g.g, {
                    className: "-mx-1 -my-0.5 inline-flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm px-1 py-0.5 text-inherit! no-underline select-none hover:bg-secondary-ghost-hover hover:text-default! focus:outline-none! focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                    to: o,
                    onClick: b,
                    children: l
                }), k[2] = l, k[3] = o, k[4] = b, k[5] = c) : c = k[5], c
            }
        })
    })
};