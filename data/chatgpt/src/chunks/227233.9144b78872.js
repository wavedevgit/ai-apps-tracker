export const __rspack_esm_ids = [227233];
export const __webpack_modules__ = {
    puTD: (function(e, t) {
        t.a = {
            PageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            pageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            PageContent: "PageContent-kBHDbu",
            pageContent: "PageContent-kBHDbu",
            PageDocument: "PageDocument-xcjcX8",
            pageDocument: "PageDocument-xcjcX8",
            PageSnapshotCover: "PageSnapshotCover-C_r466",
            pageSnapshotCover: "PageSnapshotCover-C_r466",
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
            PageCommentMentions: "PageCommentMentions-hNyDwq",
            pageCommentMentions: "PageCommentMentions-hNyDwq",
            PageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
            pageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
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
    SJ6u: (function(e, t) {
        t.a = {
            match: "match-z3yytq"
        }
    }),
    pATZ: (function(e, t, n) {
        let o = (0, (n("Qgfj")).f)({
            placeholderByDocumentType: {
                id: "codex.page.chat.placeholder.byDocumentType",
                defaultMessage: "{documentType, select, granola_presentation {Work with this slide…} granola_workbook {Work with this sheet…} other {Work with this page…}}"
            }
        });
        n.d(t, {}, {
            a: o
        })
    }),
    aWEZ: (function(e, t, n) {
        function o(e, t) {
            let n = e.querySelector(`[data-page-attribution-sizer="${t}"]`),
                o = n?.firstElementChild;
            if (!(o instanceof HTMLElement) || null == n) return null;
            let a = o.offsetWidth;
            return a > 0 && a <= n.clientWidth ? a : null
        }
        n.d(t, {}, {
            a: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e => e.getBoundingClientRect(),
                    t = new Map;
                return function(n) {
                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e(n),
                        a = n.ownerDocument.defaultView;
                    if (null == a) return null;
                    let i = Math.max(0, o.left),
                        r = Math.min(a.innerWidth, o.right),
                        l = Math.max(0, o.top),
                        c = Math.min(a.innerHeight, o.bottom);
                    if (r <= i || c <= l) return null;
                    for (let o = n.parentElement; null != o; o = o.parentElement) {
                        let n = t.get(o);
                        if (null == n) {
                            let i = a.getComputedStyle(o),
                                r = /auto|scroll|hidden|clip/u.test(i.overflowX),
                                l = /auto|scroll|hidden|clip/u.test(i.overflowY);
                            if (!r && !l) {
                                t.set(o, !1);
                                continue
                            }
                            let c = e(o),
                                s = o.offsetWidth,
                                d = s > 0 ? c.width / s : 1;
                            n = {
                                x: r,
                                y: l,
                                rect: DOMRect.fromRect({
                                    x: c.left + o.clientLeft * d,
                                    y: c.top + o.clientTop * d,
                                    width: o.clientWidth * d,
                                    height: o.clientHeight * d
                                })
                            }, t.set(o, n)
                        }!1 !== n && (n.x && (i = Math.max(i, n.rect.left), r = Math.min(r, n.rect.right)), n.y && (l = Math.max(l, n.rect.top), c = Math.min(c, n.rect.bottom)))
                    }
                    return r > i && c > l ? DOMRect.fromRect({
                        x: i,
                        y: l,
                        width: r - i,
                        height: c - l
                    }) : null
                }
            },
            b: function(e, t) {
                let n = e.defaultView;
                if (null == n) return;
                let o = "getBoundingClientRect" in t ? t.getBoundingClientRect() : {
                        x: t.clientX,
                        y: t.clientY,
                        width: 1,
                        height: 1
                    },
                    a = n.visualViewport,
                    i = a?.width ?? n.innerWidth,
                    r = a?.height ?? n.innerHeight,
                    {
                        x: l,
                        y: c
                    } = o;
                if (null != a && (0 !== a.offsetLeft || 0 !== a.offsetTop)) {
                    let t = e.documentElement.getBoundingClientRect();
                    l -= t.left + a.pageLeft, c -= t.top + a.pageTop
                }
                let {
                    width: s,
                    height: d
                } = o;
                if (!(s <= 0) && !(d <= 0) && !(l >= i) && !(c >= r) && !(l + s <= 0) && !(c + d <= 0)) return {
                    x: l,
                    y: c,
                    width: s,
                    height: d,
                    viewportWidth: i
                }
            },
            c: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e.getBoundingClientRect(),
                    o = e.matches("table") ? e.querySelector("tr") : e.querySelector(':scope > hr, :scope > [data-page-agent-instructions="toggle"], :scope > [data-composer-code-block-toolbar] > [data-page-code-block-controls]');
                if (null != o) return n(o);
                let a = "p, h1, h2, h3, h4, h5, h6, pre",
                    i = e.matches(a) ? e : e.querySelector(a) ?? e,
                    r = n(i),
                    l = i.ownerDocument.defaultView?.getComputedStyle(i),
                    c = Number.parseFloat(l?.lineHeight ?? "") * t;
                return DOMRect.fromRect({
                    x: r.left,
                    y: r.top + Number.parseFloat(l?.paddingTop ?? "0") * t,
                    width: r.width,
                    height: Number.isFinite(c) ? Math.min(r.height, c) : r.height
                })
            },
            d: function(e, t) {
                let n = e.defaultView;
                if (null == n) return;
                let o = n.visualViewport,
                    {
                        x: a,
                        y: i
                    } = t;
                if (null != o && (0 !== o.offsetLeft || 0 !== o.offsetTop)) {
                    let t = e.documentElement.getBoundingClientRect();
                    a -= t.left + o.pageLeft, i -= t.top + o.pageTop
                }
                return {
                    x: a,
                    y: i,
                    width: t.width,
                    height: t.height,
                    viewportWidth: o?.width ?? n.innerWidth
                }
            },
            e: function(e, t) {
                let n = e.closest("[data-page-attribution-position]");
                if (null == n) return !1;
                let o = e.getBoundingClientRect(),
                    a = n.getBoundingClientRect(),
                    i = t.getBoundingClientRect();
                if (!o.width || !o.height || o.left < Math.max(a.left, i.left) || o.right > Math.min(a.right, i.right) || o.top < i.top || o.bottom > i.bottom) return !1;
                for (let e of ["previousElementSibling", "nextElementSibling"])
                    for (let t = n[e]; null != t; t = t[e]) {
                        if (t.hasAttribute("hidden")) continue;
                        let n = t.querySelector("[data-page-attribution-name]")?.getBoundingClientRect();
                        if (n?.height) {
                            if ("nextElementSibling" === e ? n.top >= o.bottom + 2 : n.bottom + 2 <= o.top) break;
                            if (o.left < n.right && o.right > n.left && o.top < n.bottom + 2 && o.bottom + 2 > n.top) return !1
                        }
                    }
                return !0
            },
            f: function(e, t, n, a, i) {
                let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e => e.getBoundingClientRect(),
                    l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => [],
                    c = t.parentElement?.querySelector(":scope > [data-page-reading-column]"),
                    s = t.closest("[data-page-document-scroll]");
                if (null == c || null == s) {
                    e.removeAttribute("data-page-attribution-fits"), e.removeAttribute("data-page-attribution-compact");
                    return
                }
                let d = e => a ? -e.right : e.left,
                    p = d(r(c)),
                    u = r(s).left + s.clientLeft * i,
                    g = a ? -(u + s.clientWidth * i) : u;
                e.style.setProperty("--page-attribution-room", `${(p-g)/i}px`);
                let m = o(e, "full"),
                    h = o(e, "compact"),
                    f = e.clientWidth,
                    v = t.querySelectorAll(':is([data-page-block-layout="full-width"], [data-page-block-layout="flexible"][data-page-block-type="table"]) > [data-page-block-viewport] > :first-child'),
                    b = l(r),
                    y = [],
                    x = p;
                for (let e of v) {
                    let t = r(e);
                    if (t.width <= 0) continue;
                    let n = d(t),
                        o = e.parentElement;
                    if (e.matches("table") && null != o) {
                        let e = d(r(o));
                        n = o.parentElement?.dataset.pageBlockLayout === "full-width" ? e : Math.max(n, e)
                    }
                    n < p && (y.push({
                        start: n,
                        top: t.top,
                        bottom: t.bottom
                    }), x = Math.min(x, n))
                }
                e.style.setProperty("--page-attribution-hover-inset", `${(p-x)/i}px`), e.style.insetInlineEnd = `${((a?-n.left:n.right)-p)/i}px`;
                let w = 0;
                for (let [e, {
                        element: t,
                        label: o,
                        line: a,
                        bottom: r
                    }] of b.entries()) {
                    if (null == a || 0 === a.height || null == r) {
                        t.hidden = !0;
                        continue
                    }
                    for (; y[w]?.bottom <= a.top;) w++;
                    let l = y[w],
                        c = l?.top < a.bottom ? l.start : p,
                        s = (p - c) / i,
                        d = f - s,
                        u = null == m || m > d;
                    t.toggleAttribute("data-page-attribution-compact", u), t.hidden = s > 0 && u && (null == h || h > d);
                    let g = Math.max(r, b[e + 1]?.line?.top ?? r);
                    for (let e = w; y[e]?.top < g; e++) {
                        let t = y[e];
                        if (t.start < c && t.top >= a.bottom) {
                            g = t.top;
                            break
                        }
                    }
                    let v = Math.max(a.bottom, Math.min(r, g));
                    t.style.top = `${(a.top-n.top)/i}px`, t.style.marginInlineEnd = `${s}px`, t.style.height = `${(v-a.top)/i}px`, t.style.setProperty("--page-attribution-hover-tail", `${Math.max(0,g-v)/i}px`), null != o && (o.style.height = `${a.height/i}px`)
                }
                let k = String(null != m || null != h);
                e.toggleAttribute("data-page-attribution-compact", null == m && null != h), e.dataset.pageAttributionFits !== k && (e.dataset.pageAttributionFits = k)
            },
            g: function(e, t, n, o) {
                e.hidden = null == t, null != t && Object.assign(e.style, {
                    left: `${(t.left-n.left)/o}px`,
                    top: `${(t.top-n.top)/o}px`,
                    width: `${t.width/o}px`,
                    height: `${t.height/o}px`
                })
            }
        })
    }),
    b7SN: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                let {
                    clientX: t,
                    bounds: n,
                    edge: o,
                    rtl: a,
                    zoom: i,
                    viewport: r
                } = e, l = Math.max(n.left, r?.left ?? n.left), c = Math.min(n.right, r?.right ?? n.right);
                return Math.abs(t - ("start" === o !== a ? l : c)) <= 150 * i
            }
        })
    }),
    aK2P: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            r = n("zd8w"),
            l = n("wD9O"),
            c = n("aAWW"),
            s = n("b7SN");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, p, u, g, m, h = (0, a.c)(21),
                    {
                        children: f,
                        className: v,
                        anchorSelector: b,
                        edge: y,
                        active: x,
                        revealOnHover: w
                    } = e,
                    k = void 0 === y ? "start" : y,
                    j = void 0 !== w && w,
                    P = (0, r.useRef)(null),
                    [I, C] = (0, r.useState)(!1),
                    M = (0, l.c)();
                h[0] !== k || h[1] !== M ? (t = (e, t) => {
                    if (e.buttons > 0 || "touch" === e.pointerType) return;
                    let n = t.getBoundingClientRect();
                    C(e.clientY >= n.top && e.clientY <= n.bottom && (0, s.a)({
                        clientX: e.clientX,
                        bounds: n,
                        edge: k,
                        rtl: "rtl" === getComputedStyle(t).direction,
                        zoom: M,
                        viewport: t.closest("[data-page-block-viewport]")?.getBoundingClientRect()
                    }))
                }, h[0] = k, h[1] = M, h[2] = t) : t = h[2];
                let T = (0, r.useEffectEvent)(t);
                h[3] !== b || h[4] !== T || h[5] !== j ? (n = () => {
                    if (j) return;
                    let e = P.current?.closest(b),
                        t = e?.closest("[data-page-block-row], [data-page-edge-region]") ?? e?.closest("[data-page-reading-column]")?.parentElement ?? e;
                    if (null == e || null == t) return;
                    let n = t => T(t, e),
                        o = () => C(!1);
                    return t.addEventListener("pointermove", n), t.addEventListener("pointerleave", o), () => {
                        t.removeEventListener("pointermove", n), t.removeEventListener("pointerleave", o), o()
                    }
                }, h[3] = b, h[4] = T, h[5] = j, h[6] = n) : n = h[6], h[7] !== b || h[8] !== j ? (d = [b, j], h[7] = b, h[8] = j, h[9] = d) : d = h[9], (0, r.useEffect)(n, d), h[10] !== I || h[11] !== j ? (p = () => {
                    if (!I || j) return;
                    let e = P.current?.ownerDocument,
                        t = () => {
                            C(!1), (0, c.b)()
                        };
                    return e?.addEventListener("scroll", t, !0), e?.addEventListener("visibilitychange", t), e?.defaultView?.addEventListener("blur", t), () => {
                        e?.removeEventListener("scroll", t, !0), e?.removeEventListener("visibilitychange", t), e?.defaultView?.removeEventListener("blur", t)
                    }
                }, u = [I, j], h[10] = I, h[11] = j, h[12] = p, h[13] = u) : (p = h[12], u = h[13]), (0, r.useEffect)(p, u);
                let A = j && "[:hover>&]:pointer-events-auto [:hover>&]:opacity-100";
                h[14] !== v || h[15] !== A ? (g = (0, i.b)("pointer-events-auto [@media(hover:hover)_and_(pointer:fine)]:pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:opacity-0 data-visible:pointer-events-auto data-visible:opacity-100 data-menu-open:pointer-events-auto data-menu-open:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100 [[data-state=open]>&]:pointer-events-auto [[data-state=open]>&]:opacity-100 [:focus-visible>&]:pointer-events-auto [:focus-visible>&]:opacity-100", A, v), h[14] = v, h[15] = A, h[16] = g) : g = h[16];
                let E = !j && (I || void 0 !== x && x) || void 0;
                return h[17] !== f || h[18] !== g || h[19] !== E ? (m = (0, o.jsx)("span", {
                    ref: P,
                    className: g,
                    "data-page-edge-controls": !0,
                    "data-visible": E,
                    children: f
                }), h[17] = f, h[18] = g, h[19] = E, h[20] = m) : m = h[20], m
            }
        })
    }),
    fAHU: (function(e, t, n) {
        n.d(t, {
            a: () => i
        });
        var o = n("ABep"),
            a = n("QosV");

        function i(e) {
            let t, n, i = (0, a.c)(5),
                {
                    children: r,
                    rootSpaceId: l
                } = e;
            return i[0] !== l ? (t = null, i[0] = l, i[1] = t) : t = i[1], i[2] !== r || i[3] !== t ? (n = (0, o.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [r, t]
            }), i[2] = r, i[3] = t, i[4] = n) : n = i[4], n
        }
        n("Q840"), n("hlkZ"), n("oyQi"), n("Ko17"), n("nvO1"), n("iycc")
    }),
    i9us: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("LPKZ"),
            r = n.n(i),
            l = n("Q840"),
            c = n("oyxz"),
            s = n("O5pN"),
            d = n("osar"),
            p = n("Z4o7"),
            u = n("Sm6l"),
            g = n("HOLv"),
            m = n("bf6R"),
            h = n("ttIa"),
            f = n("Z2JT"),
            v = n("NRR1"),
            b = n("gcWI"),
            y = n("pATZ"),
            x = n("GAcX"),
            w = n("hlkZ"),
            k = n("JtEZ"),
            j = n("tSEg");
        n("qixt");
        var P = n("El6m"),
            I = n("eviP"),
            C = n("UEny");

        function M() {
            return null
        }(0, l.d)(j.a, (e, t) => {
            let {
                get: n,
                scope: o
            } = t;
            return n(I.b)?.getSession(o)?.conversationId != null || null != e && n(k.b, {
                accountId: n(v.e),
                pageId: e
            })
        }), n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, a.c)(5),
                    {
                        pageId: k
                    } = e,
                    j = (0, l.z)(v.e),
                    I = (0, l.x)(w.loadedSpacePageMetadata$, k ?? null);
                i[0] !== j || i[1] !== k ? (t = {
                    accountId: j,
                    pageId: k
                }, i[0] = j, i[1] = k, i[2] = t) : t = i[2];
                let T = (0, l.x)(b.e, t),
                    A = (0, l.z)(x.c);
                return (0, l.z)(f.a) || T || null != A ? null : (i[3] !== I?.document_type ? (n = (0, o.jsx)("div", {
                    inert: !0,
                    "aria-hidden": !0,
                    children: (0, o.jsx)(P.a, {
                        value: "expanded",
                        children: (0, o.jsx)(h.a, {
                            isMinimized: !1,
                            onMinimizedChange: r(),
                            presentation: "compact",
                            renderTranscript: M,
                            showHeader: !1,
                            title: "",
                            renderComposer: () => (0, o.jsx)(d.a, {
                                inert: !0,
                                layout: "single-line",
                                children: (0, o.jsx)(d.a.Body, {
                                    layout: "single-line",
                                    children: (0, o.jsx)(d.a.AdaptiveFooter, {
                                        layout: "single-line",
                                        leadingControls: (0, o.jsx)(u.a, {
                                            disabled: !0,
                                            color: "ghost",
                                            size: "composer",
                                            children: (0, o.jsx)(m.Mg, {})
                                        }),
                                        input: (0, o.jsx)(d.a.Input, {
                                            layout: "single-line",
                                            children: (0, o.jsx)(s.a, {
                                                singleLine: !0,
                                                children: (0, o.jsxs)("div", {
                                                    className: "truncate text-secondary select-none",
                                                    children: [null, (0, o.jsx)(o.Fragment, {
                                                        children: (0, o.jsx)(c.a, {
                                                            ...y.a.placeholderByDocumentType,
                                                            values: {
                                                                documentType: I?.document_type ?? "page"
                                                            }
                                                        })
                                                    })]
                                                })
                                            })
                                        }),
                                        trailingControls: (0, o.jsxs)(d.a.FooterActions, {
                                            children: [(0, o.jsx)(u.a, {
                                                disabled: !0,
                                                color: "ghost",
                                                size: "composer",
                                                children: (0, o.jsx)(m.gd, {})
                                            }), (0, o.jsx)(u.a, {
                                                disabled: !0,
                                                color: "ghost",
                                                size: "composer",
                                                children: (0, o.jsx)(g.a, {
                                                    asset: C.a
                                                })
                                            }), (0, o.jsx)(u.a, {
                                                disabled: !0,
                                                color: "ghost",
                                                size: "composer",
                                                children: (0, o.jsx)(p.a, {})
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), i[3] = I?.document_type, i[4] = n) : n = i[4], n)
            }
        })
    }),
    r1wd: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            r = n("Q840"),
            l = n("X3K1"),
            c = n("SCmN"),
            s = n("WP5H"),
            d = n("Ih0z"),
            p = n("hlkZ"),
            u = n("kTTh"),
            g = n("OMIV"),
            m = n("fAHU"),
            h = n("i9us"),
            f = n("nkrL"),
            v = n("GhgU"),
            b = n("Jif0"),
            y = n("fQMn");

        function x(e) {
            let t, n, g, h, v, x, k, j, P, I, C, M, T, A = (0, a.c)(40),
                {
                    appearance: E,
                    pageId: S,
                    space: L,
                    spaceId: _,
                    title: D,
                    symbol: N
                } = e;
            A[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                enabled: !1
            }, A[0] = t) : t = A[0];
            let {
                data: R
            } = (0, r.x)(p.spaceQuery$, _ ?? "", t), z = L ?? R, B = S ?? z?.root_page_id ?? "", W = (0, r.x)(p.loadedSpacePageMetadata$, B);
            A[1] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                enabled: !1
            }, A[1] = n) : n = A[1];
            let q = (0, r.x)(f.d, B, n),
                O = (0, r.x)(c.b, B),
                F = z?.id ?? _;
            A[2] !== F ? (g = {
                spaceId: F
            }, A[2] = F, A[3] = g) : g = A[3], A[4] === Symbol.for("react.memo_cache_sentinel") ? (h = {
                enabled: !1
            }, A[4] = h) : h = A[4];
            let K = (0, r.x)(d.f, g, h),
                Q = E ?? K,
                U = null != z || null != _ || null != E,
                V = null == W ? z?.symbol ?? N ?? null : W.symbol ?? null;
            if (U && null == V) {
                let e;
                A[5] !== Q ? (e = (0, d.b)(Q), A[5] = Q, A[6] = e) : e = A[6], V = e
            }
            let $ = void 0 === q ? W?.title : q ?? "",
                H = null == z ? $ ?? D : D ?? z.name;
            if (!U && null == V && null != H) {
                let e;
                A[7] !== H ? (e = (0, u.b)(H), A[7] = H, A[8] = e) : e = A[8];
                let t = e;
                if (H = t.title, null != t.emoji) {
                    let e;
                    A[9] !== t.emoji ? (e = {
                        kind: "emoji",
                        value: t.emoji
                    }, A[9] = t.emoji, A[10] = e) : e = A[10], V = e
                }
            }
            O && !U && null == V && (V = s.b);
            let J = null == H,
                Z = z?.id ?? _,
                G = W?.document_type,
                X = W?.namespace,
                Y = Q?.theme;
            A[11] !== U || A[12] !== V || A[13] !== G || A[14] !== X || A[15] !== Y ? (v = (0, o.jsx)(y.a, {
                disabled: !0,
                legacyEmoji: null,
                documentType: G,
                namespace: X,
                symbol: V,
                space: U,
                spaceTheme: Y,
                onChange: w
            }), A[11] = U, A[12] = V, A[13] = G, A[14] = X, A[15] = Y, A[16] = v) : v = A[16];
            let ee = J && "w-64 max-w-full";
            A[17] !== ee ? (x = (0, i.b)("relative min-w-0", ee), A[17] = ee, A[18] = x) : x = A[18];
            let et = J ? "invisible" : void 0,
                en = J || void 0;
            return A[19] !== H || A[20] !== J ? (k = J ? "" : (H ?? "").replace(/[\r\n]+/g, " "), A[19] = H, A[20] = J, A[21] = k) : k = A[21], A[22] !== k ? (j = (0, o.jsx)(b.a, {
                disabled: !0,
                readOnly: !0,
                value: k
            }), A[22] = k, A[23] = j) : j = A[23], A[24] !== et || A[25] !== en || A[26] !== j ? (P = (0, o.jsx)("div", {
                className: et,
                "aria-hidden": en,
                children: j
            }), A[24] = et, A[25] = en, A[26] = j, A[27] = P) : P = A[27], A[28] !== J ? (I = J ? (0, o.jsx)("div", {
                className: "absolute inset-0 flex items-center",
                children: (0, o.jsx)(l.a, {
                    className: "w-full",
                    size: "lg",
                    variant: "chatgpt-project"
                })
            }) : null, A[28] = J, A[29] = I) : I = A[29], A[30] !== x || A[31] !== P || A[32] !== I ? (C = (0, o.jsxs)("div", {
                className: x,
                children: [P, I]
            }), A[30] = x, A[31] = P, A[32] = I, A[33] = C) : C = A[33], A[34] !== v || A[35] !== C ? (M = (0, o.jsxs)("div", {
                className: "relative flex flex-col gap-2",
                "data-page-title": !0,
                children: [v, C]
            }), A[34] = v, A[35] = C, A[36] = M) : M = A[36], A[37] !== M || A[38] !== Z ? (T = (0, o.jsx)(m.a, {
                rootSpaceId: Z,
                children: M
            }), A[37] = M, A[38] = Z, A[39] = T) : T = A[39], T
        }

        function w() {}
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, s, d, u, m, f, b = (0, a.c)(29),
                    {
                        pageId: y,
                        spaceId: w,
                        title: k,
                        symbol: j,
                        headerOverlay: P,
                        showComposer: I
                    } = e,
                    C = void 0 !== I && I;
                b[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    enabled: !1
                }, b[0] = t) : t = b[0];
                let {
                    data: M
                } = (0, r.z)(p.spacesQuery$, t), T = (0, r.x)(g.e, "2163293173");
                b[1] !== y || b[2] !== w || b[3] !== M?.items || b[4] !== M?.items.find ? (n = M?.items.find(e => null == y ? e.id === w : e.root_page_id === y), b[1] = y, b[2] = w, b[3] = M?.items, b[4] = M?.items.find, b[5] = n) : n = b[5];
                let A = n,
                    E = T ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable",
                    S = void 0 !== P && P && "viewer-header-scroll-mask pt-[var(--viewer-header-height)]";
                b[6] !== E || b[7] !== S ? (l = (0, i.b)("min-h-0 flex-1 scrollbar-on-hover overflow-y-auto", E, S), b[6] = E, b[7] = S, b[8] = l) : l = b[8], b[9] !== y || b[10] !== A || b[11] !== j || b[12] !== k ? (c = (0, o.jsx)(x, {
                    pageId: y,
                    space: A,
                    title: k,
                    symbol: j
                }), b[9] = y, b[10] = A, b[11] = j, b[12] = k, b[13] = c) : c = b[13];
                let L = y ?? A?.root_page_id ?? w ?? "";
                return b[14] !== L ? (s = (0, o.jsx)(v.b, {
                    pageId: L
                }), b[14] = L, b[15] = s) : s = b[15], b[16] !== s || b[17] !== c ? (d = (0, o.jsx)(v.a, {
                    heading: c,
                    children: s
                }), b[16] = s, b[17] = c, b[18] = d) : d = b[18], b[19] !== d || b[20] !== l ? (u = (0, o.jsx)("div", {
                    className: l,
                    children: d
                }), b[19] = d, b[20] = l, b[21] = u) : u = b[21], b[22] !== y || b[23] !== C || b[24] !== A?.root_page_id ? (m = C && (0, o.jsx)(h.a, {
                    pageId: y ?? A?.root_page_id
                }), b[22] = y, b[23] = C, b[24] = A?.root_page_id, b[25] = m) : m = b[25], b[26] !== u || b[27] !== m ? (f = (0, o.jsxs)(o.Fragment, {
                    children: [u, m]
                }), b[26] = u, b[27] = m, b[28] = f) : f = b[28], f
            },
            b: x
        })
    }),
    GhgU: (function(e, t, n) {
        n.d(t, {
            a: () => h,
            b: () => v,
            c: () => b
        });
        var o = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            r = n("IPUh"),
            l = n("CJrD"),
            c = n("zd8w"),
            s = n("Wf1j"),
            d = n("X3K1"),
            p = n("ADAj"),
            u = n("puTD");

        function g() {
            let e, t, n = (0, a.c)(2);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)("span", {
                className: (0, i.b)(u.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] overflow-clip"),
                "data-page-comment-content-width": !0
            }), n[0] = e) : e = n[0], n[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsxs)("span", {
                "aria-hidden": !0,
                className: "invisible absolute size-0 overflow-clip",
                children: [e, (0, o.jsx)("span", {
                    className: "@container relative block [inline-size:max(100cqi,var(--page-default-reading-width))]",
                    children: (0, o.jsx)("span", {
                        className: (0, i.b)(u.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] max-w-0 overflow-clip"),
                        "data-page-comment-minimum-width": !0
                    })
                })]
            }), n[1] = t) : t = n[1], t
        }

        function m(e, t, n) {
            if (!(t instanceof Element) || t.closest("[data-page-document-viewport]") !== e.closest("[data-page-document-viewport]")) return !1;
            if (null != t.closest("[data-page-document-trailing-space]")) return !0;
            if (!t.contains(e)) return !1;
            let o = e.getBoundingClientRect();
            return o.height > 0 && n >= o.bottom
        }

        function h(e) {
            let t, n, r, c, s, d, u, m, h, v, b, y, x, w, k = (0, a.c)(29);
            k[0] !== e ? ({
                heading: n,
                externalEditingControls: d,
                messages: c,
                compact: u,
                headingOutside: m,
                headingRef: r,
                children: t,
                ...s
            } = e, k[0] = e, k[1] = t, k[2] = n, k[3] = r, k[4] = c, k[5] = s, k[6] = d, k[7] = u, k[8] = m) : (t = k[1], n = k[2], r = k[3], c = k[4], s = k[5], d = k[6], u = k[7], m = k[8]);
            let j = void 0 !== d && d,
                P = void 0 !== u && u,
                I = void 0 !== m && m;
            k[9] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, l.a)(), k[9] = h) : h = k[9];
            let C = (0, p.l)(h.fullWidth),
                M = I ? "pt-4 pb-panel" : "pt-10 pb-panel",
                T = P || j ? "py-4" : M,
                A = C || j || void 0;
            k[10] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, o.jsx)(g, {}), k[10] = v) : v = k[10];
            let E = P && "mb-4";
            return k[11] !== E ? (b = (0, i.b)("flex flex-col gap-2 empty:hidden", E), k[11] = E, k[12] = b) : b = k[12], k[13] !== c || k[14] !== b ? (y = (0, o.jsx)("div", {
                className: b,
                children: c
            }), k[13] = c, k[14] = b, k[15] = y) : y = k[15], k[16] !== n || k[17] !== r || k[18] !== y ? (x = (0, o.jsxs)("div", {
                ref: r,
                className: "col-[reading] flex w-full max-w-(--page-reading-width) min-w-0 flex-col gap-6",
                "data-page-reading-column": !0,
                children: [v, y, n]
            }), k[16] = n, k[17] = r, k[18] = y, k[19] = x) : x = k[19], k[20] !== t || k[21] !== P || k[22] !== j || k[23] !== I || k[24] !== s || k[25] !== x || k[26] !== T || k[27] !== A ? (w = (0, o.jsxs)(f, {
                ...s,
                compact: P,
                externalEditingControls: j,
                headingOutside: I,
                className: T,
                "data-page-full-width": A,
                children: [x, t]
            }), k[20] = t, k[21] = P, k[22] = j, k[23] = I, k[24] = s, k[25] = x, k[26] = T, k[27] = A, k[28] = w) : w = k[28], w
        }

        function f(e) {
            let t, n, l, c, s, d, p, g, m, h = (0, a.c)(22);
            h[0] !== e ? ({
                as: c,
                compact: s,
                contentAlignment: n,
                externalEditingControls: d,
                headingOutside: p,
                className: t,
                ...l
            } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = l, h[4] = c, h[5] = s, h[6] = d, h[7] = p) : (t = h[1], n = h[2], l = h[3], c = h[4], s = h[5], d = h[6], p = h[7]);
            let f = void 0 !== s && s,
                v = void 0 !== d && d,
                b = void 0 !== p && p,
                y = "section" === (void 0 === c ? "div" : c) ? r.a.section : r.a.div,
                x = !f && !v && !l["data-page-full-width"] && "start" !== n && "[container-name:page-dil-badge-gutter]",
                w = f || b ? "gap-y-0" : "gap-y-6",
                k = f ? "ps-[var(--page-attribution-padding,--spacing(4))] pe-4" : "ps-[var(--page-attribution-padding,var(--page-control-gutter))] pe-(--page-control-gutter) in-[[data-page-responsive-comments=markers]]:ps-[var(--page-attribution-padding,clamp(16px,calc(100%_-_572px_-_48px),48px))]",
                j = v ? "[--page-control-gutter:--spacing(10)] [--page-document-end-space:--spacing(16)] [--color-background-text-selection:--alpha(var(--color-text)/20%)]" : "[--page-control-gutter:--spacing(14)] [--page-document-end-space:50cqh] in-[[data-page-responsive-comments]]:[--page-control-gutter:--spacing(12)]",
                P = "start" === n && "w-full max-w-[var(--page-content-max-width,none)]";
            h[8] !== t || h[9] !== x || h[10] !== w || h[11] !== k || h[12] !== j || h[13] !== P ? (g = (0, i.b)(u.a.PageContent, "@container grid", x, w, k, j, P, t), h[8] = t, h[9] = x, h[10] = w, h[11] = k, h[12] = j, h[13] = P, h[14] = g) : g = h[14];
            let I = f || void 0,
                C = v || void 0;
            return h[15] !== y || h[16] !== n || h[17] !== l || h[18] !== g || h[19] !== I || h[20] !== C ? (m = (0, o.jsx)(y, {
                ...l,
                className: g,
                "data-compact": I,
                "data-page-content-alignment": n,
                "data-native-controls": C
            }), h[15] = y, h[16] = n, h[17] = l, h[18] = g, h[19] = I, h[20] = C, h[21] = m) : m = h[21], m
        }

        function v(e) {
            let t, n, i, r = (0, a.c)(7),
                {
                    pageId: l
                } = e,
                c = (0, s.a)();
            return r[0] !== c ? (t = c.formatMessage({
                id: "codex.space.page.contentLoading",
                defaultMessage: "Loading page content"
            }), r[0] = c, r[1] = t) : t = r[1], r[2] !== l ? (n = (0, o.jsx)(d.b, {
                seed: l,
                size: "md",
                variant: "chatgpt-project"
            }), r[2] = l, r[3] = n) : n = r[3], r[4] !== t || r[5] !== n ? (i = (0, o.jsx)("div", {
                className: "col-[reading] w-full max-w-(--page-reading-width) min-w-0",
                "aria-label": t,
                role: "status",
                children: n
            }), r[4] = t, r[5] = n, r[6] = i) : i = r[6], i
        }

        function b(e) {
            let t, n, r, l, s = (0, a.c)(10),
                {
                    editor: d,
                    externalEditingControls: p,
                    onTouch: g
                } = e,
                h = void 0 !== p && p,
                f = (0, c.useRef)(null),
                v = (0, c.useEffectEvent)(g);
            s[0] !== d || s[1] !== v ? (t = () => {
                let e = f.current?.closest("[data-page-document-viewport]");
                if (null != e && null != d) return function(e, t, n) {
                    let o = new AbortController,
                        {
                            signal: a
                        } = o,
                        i = null,
                        r = () => {
                            i = null
                        };
                    return e.addEventListener("pointerdown", e => {
                        i = e.isPrimary && "touch" === e.pointerType && m(t, e.target, e.clientY) ? e : null
                    }, {
                        signal: a
                    }), e.addEventListener("pointerup", e => {
                        null != i && (e.pointerId !== i.pointerId || e.timeStamp - i.timeStamp >= 350 || Math.hypot(e.clientX - i.clientX, e.clientY - i.clientY) > 8) && r()
                    }, {
                        signal: a
                    }), e.addEventListener("pointercancel", r, {
                        signal: a
                    }), e.addEventListener("contextmenu", r, {
                        signal: a
                    }), e.addEventListener("click", e => {
                        let o = i?.clientY;
                        r(), null != o && !e.defaultPrevented && m(t, e.target, o) && n()
                    }, {
                        signal: a
                    }), () => o.abort()
                }(e, d, v)
            }, s[0] = d, s[1] = v, s[2] = t) : t = s[2], s[3] !== d ? (n = [d], s[3] = d, s[4] = n) : n = s[4], (0, c.useEffect)(t, n);
            let b = h ? "h-16" : "h-[50cqh]";
            s[5] !== b ? (r = (0, i.b)(u.a.PageDocumentEnd, b), s[5] = b, s[6] = r) : r = s[6];
            let y = h || void 0;
            return s[7] !== r || s[8] !== y ? (l = (0, o.jsx)("div", {
                "aria-hidden": !0,
                className: r,
                "data-native-controls": y,
                "data-page-document-end": !0,
                "data-page-document-trailing-space": !0,
                ref: f
            }), s[7] = r, s[8] = y, s[9] = l) : l = s[9], l
        }
    }),
    O7mt: (function(e, t, n) {
        let o = [
            ["<->", "↔"],
            ["<=>", "⇔"],
            ["<-", "←"],
            ["->", "→"],
            ["=>", "⇒"],
            ["<=", "≤"],
            [">=", "≥"],
            ["!=", "≠"],
            ["+/-", "±"],
            ["--", "—"],
            ["...", "…"]
        ];

        function a(e, t) {
            let n = t;
            for (; n > 0 && "\\" === e[n - 1];) n -= 1;
            return (t - n) % 2 == 1
        }
        n.d(t, {}, {
            a: function(e, t, n) {
                if ('"' === t || "'" === t) return {
                    shortcut: t,
                    glyph: ('"' === t ? "“”" : "‘’")[+!(0 === e.length || /[\s{[(<'"‘“]/.test(e.slice(-1)))],
                    from: e.length,
                    continuation: !1
                };
                if (1 !== t.length || !".=>-".includes(t)) return;
                let a = ">" === t && ("<-" === n && e.endsWith("←") || "<=" === n && e.endsWith("≤")),
                    i = (a ? n : e.slice(-2)) + t,
                    r = o.find(e => {
                        let [t] = e;
                        return i.endsWith(t)
                    });
                return null == r ? void 0 : {
                    shortcut: r[0],
                    glyph: r[1],
                    from: e.length - (a ? 1 : r[0].length - 1),
                    continuation: a
                }
            },
            b: function(e, t, n, o) {
                let i;
                if (a(e, n) || e.includes("](") && e.lastIndexOf("](") > e.lastIndexOf(")")) return !0;
                if ('"' !== t) {
                    let n = e + t;
                    if (/https?:\/\/|www\./i.test(n)) {
                        let e = /(?:^|[\s"“”])([^\s"“”]*)$/.exec(n)?.[1];
                        if (null != e && /https?:\/\/|www\./i.test(e)) return !0
                    }
                }
                if (!e.includes("`")) return !1;
                let r = o?.parent.type.schema.marks.code,
                    l = e;
                if (null != o && null != r) {
                    let t = [],
                        n = 0;
                    o.parent.nodesBetween(0, e.length, (o, a) => {
                        if (null == r.isInSet(o.marks)) return;
                        let i = Math.min(e.length, a + o.nodeSize);
                        return t.push(e.slice(n, a), e.slice(a, i).replace(/`/g, " ")), n = i, !1
                    }), n > 0 && (l = t.join("") + e.slice(n))
                }
                for (let e of l.matchAll(/`+/g)) i === e[0] ? i = void 0 : null != i || a(l, e.index) || (i = e[0]);
                return null != i
            }
        })
    }),
    Jif0: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("CJrD"),
            r = n("zd8w"),
            l = n("Wf1j"),
            c = n("NnV7"),
            s = n("ADAj"),
            d = n("HgLj"),
            p = n("O7mt"),
            u = n("puTD");
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, m, h, f, v, b, y, x = (0, a.c)(26),
                    {
                        onHistory: w,
                        ...k
                    } = e,
                    j = (0, l.a)();
                x[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.a)(), x[0] = t) : t = x[0];
                let P = (0, s.l)(t.smartPunctuationEnabled),
                    I = (0, r.useRef)(void 0),
                    C = (0, r.useRef)(!1),
                    M = (0, r.useRef)(!1),
                    T = (0, d.a)(k.ref, e => {
                        if (null == e || null == w) return;
                        let t = e => {
                            !e.defaultPrevented && !e.isComposing && !M.current && ("historyUndo" === e.inputType || "historyRedo" === e.inputType) && w("historyUndo" === e.inputType ? "undo" : "redo") && e.preventDefault()
                        };
                        return e.addEventListener("beforeinput", t), () => e.removeEventListener("beforeinput", t)
                    });
                return x[1] !== j || x[2] !== k ? (n = k["aria-label"] ?? j.formatMessage({
                    id: "codex.space.page.titleLabel",
                    defaultMessage: "Page title"
                }), x[1] = j, x[2] = k, x[3] = n) : n = x[3], x[4] !== j ? (g = j.formatMessage(c.c.untitled), x[4] = j, x[5] = g) : g = x[5], x[6] !== k.onPaste ? (m = e => {
                    I.current = void 0,
                        function(e, t, n) {
                            n.current = !0;
                            try {
                                t?.(e)
                            } finally {
                                n.current = !1
                            }
                        }(e, k.onPaste, C)
                }, x[6] = k.onPaste, x[7] = m) : m = x[7], x[8] !== k ? (h = e => {
                    k.onKeyDown?.(e);
                    let t = e.currentTarget,
                        n = I.current;
                    "Backspace" === e.key && !e.defaultPrevented && !e.nativeEvent.isComposing && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && !t.disabled && !t.readOnly && null != n && t.value === n.value && t.selectionStart === n.caret && t.selectionEnd === n.caret && function(e, t) {
                        t.current = !0;
                        try {
                            return e.ownerDocument.execCommand("undo")
                        } finally {
                            t.current = !1
                        }
                    }(t, M) && e.preventDefault()
                }, f = e => {
                    let t = e.currentTarget,
                        n = I.current;
                    null != n && (t.value !== n.value || t.selectionStart !== n.caret || t.selectionEnd !== n.caret) && (I.current = void 0), k.onSelect?.(e)
                }, x[8] = k, x[9] = h, x[10] = f) : (h = x[9], f = x[10]), x[11] !== k || x[12] !== P ? (v = e => {
                    k.onInput?.(e);
                    let t = e.currentTarget,
                        n = e.nativeEvent,
                        o = I.current;
                    if (n instanceof InputEvent && null != o) {
                        if ("historyUndo" === n.inputType && t.value === o.value.slice(0, o.caret - 1) + o.shortcut + o.value.slice(o.caret)) return void t.setSelectionRange(t.selectionEnd, t.selectionEnd);
                        if ("historyRedo" === n.inputType && t.value === o.value) return
                    }
                    if (I.current = void 0, C.current || !P || t.disabled || t.readOnly || !(n instanceof InputEvent) || n.isComposing || "insertText" !== n.inputType || n.data?.length !== 1 || !"\"'.=>-".includes(n.data) || t.selectionStart !== t.selectionEnd) return;
                    let a = n.data,
                        i = t.value,
                        r = t.selectionStart,
                        l = i.slice(0, r - a.length),
                        c = (0, p.a)(l, a, o?.caret === r - 1 && o.value === l + i.slice(r) ? o.shortcut : void 0);
                    null == c || (0, p.b)(l, a, c.from) || queueMicrotask(() => {
                        if (t.ownerDocument.activeElement === t && !t.disabled && !t.readOnly && t.value === i && t.selectionStart === r && t.selectionEnd === r) {
                            if (t.setSelectionRange(c.from, r), c.continuation) {
                                if (!t.ownerDocument.execCommand("insertText", !1, c.shortcut) || t.value !== i.slice(0, c.from) + c.shortcut + i.slice(r)) return;
                                t.setSelectionRange(c.from, c.from + c.shortcut.length)
                            }
                            t.ownerDocument.execCommand("insertText", !1, c.glyph) && (I.current = {
                                value: t.value,
                                caret: t.selectionStart,
                                shortcut: c.shortcut
                            })
                        }
                    })
                }, x[11] = k, x[12] = P, x[13] = v) : v = x[13], x[14] !== k ? (b = e => {
                    I.current = void 0, k.onBlur?.(e)
                }, x[14] = k, x[15] = b) : b = x[15], x[16] !== k || x[17] !== T || x[18] !== n || x[19] !== g || x[20] !== m || x[21] !== h || x[22] !== f || x[23] !== v || x[24] !== b ? (y = (0, o.jsx)("textarea", {
                    ...k,
                    ref: T,
                    className: `${u.a.PageTitle} relative block field-sizing-content w-full min-w-0 resize-none overflow-hidden border-none bg-transparent font-semibold break-words text-default outline-none`,
                    "aria-label": n,
                    "aria-multiline": !1,
                    placeholder: g,
                    rows: 1,
                    onPaste: m,
                    onKeyDown: h,
                    onSelect: f,
                    onInput: v,
                    onBlur: b
                }), x[16] = k, x[17] = T, x[18] = n, x[19] = g, x[20] = m, x[21] = h, x[22] = f, x[23] = v, x[24] = b, x[25] = y) : y = x[25], y
            }
        })
    }),
    fQMn: (function(e, t, n) {
        n.d(t, {
            a: () => M
        });
        var o = n("ABep"),
            a = n("QosV"),
            i = n("slpy"),
            r = n("on57"),
            l = n("Q840"),
            c = n("zd8w"),
            s = n("Wf1j"),
            d = n("Sm6l"),
            p = n("JNtf"),
            u = n("bf6R"),
            g = n("nzx4"),
            m = n("ibLK"),
            h = n("SLxa"),
            f = n("SVco"),
            v = n("FR8U"),
            b = n("VAbi"),
            y = n("TnSu"),
            x = n("qlvd"),
            w = n("aWEZ"),
            k = n("aK2P"),
            j = n("TwSq"),
            P = n("SJ6u");

        function I(e) {
            let t, n, i = (0, a.c)(11),
                {
                    children: r,
                    emoji: c,
                    findContextId: s
                } = e,
                d = (0, l.z)(j.h),
                p = (0, l.z)(j.g);
            if (i[0] !== p?.id || i[1] !== c || i[2] !== s || i[3] !== d) {
                let e = d?.contextId === s ? d?.matches.filter(e => {
                    let {
                        location: t
                    } = e;
                    return "page" === t.domain && "title" === t.target && t.from < c.length && t.to > 0
                }) : void 0;
                t = e?.find(e => {
                    let {
                        id: t
                    } = e;
                    return t === p?.id
                }) ?? e?.[0], i[0] = p?.id, i[1] = c, i[2] = s, i[3] = d, i[4] = t
            } else t = i[4];
            let u = t;
            if (u?.location.domain !== "page") {
                let e;
                return i[5] !== r ? (e = (0, o.jsx)(o.Fragment, {
                    children: r
                }), i[5] = r, i[6] = e) : e = i[6], e
            }
            let g = p?.id === u.id ? "" : void 0;
            return i[7] !== r || i[8] !== u.location.from || i[9] !== g ? (n = (0, o.jsx)("mark", {
                className: `${P.a.match} inline-flex rounded-2xs text-inherit`,
                "data-active": g,
                "data-page-find-match": !0,
                "data-page-find-title-match": u.location.from,
                children: r
            }), i[7] = r, i[8] = u.location.from, i[9] = g, i[10] = n) : n = i[10], n
        }
        var C = n("puTD");

        function M(e) {
            let t, n, j, P, M, S, L, _, D, N, R, z, B, W, q, O, F, K, Q, U = (0, a.c)(90),
                V = (0, s.a)(),
                [$, H] = (0, c.useState)(!1),
                J = (0, c.useRef)(null),
                Z = (0, c.useRef)(null),
                G = (0, m.a)("(max-width: 767px)");
            U[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => H(!1), U[0] = t) : t = U[0];
            let X = t,
                {
                    symbol: Y,
                    disabled: ee,
                    space: et,
                    spaceTheme: en
                } = e,
                eo = G && !et,
                ea = (0, l.x)(h.a, {
                    documentType: et ? void 0 : e.documentType,
                    namespace: et ? null : e.namespace,
                    surface: "editor"
                })?.[32],
                ei = et && null == Y && null != en && "" !== en,
                er = null != Y && "none" !== Y.kind || ei || null != ea,
                el = !er && !et && (G || e.externalEditingControls || null != e.openNativePicker),
                ec = e.externalEditingControls && et && !er && !e.hasUnsupportedLegacyAppearance;
            if (U[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => () => {
                    Z.current?.abort(), Z.current = null
                }, U[1] = n) : n = U[1], U[2] !== ee || U[3] !== ec ? (j = [ec, ee], U[2] = ee, U[3] = ec, U[4] = j) : j = U[4], (0, c.useLayoutEffect)(n, j), (ee || ec) && $ && X(), ec) return null;
            U[5] !== el || U[6] !== V ? (P = el ? V.formatMessage({
                id: "codex.space.page.symbol.add",
                defaultMessage: "Add icon"
            }) : V.formatMessage({
                id: "codex.space.page.symbol.change",
                defaultMessage: "Change icon"
            }), U[5] = el, U[6] = V, U[7] = P) : P = U[7];
            let es = P;
            U[8] !== ea ? (M = null == ea ? (0, o.jsx)(u.id, {}) : (0, o.jsx)(ea, {}), U[8] = ea, U[9] = M) : M = U[9];
            let ed = M,
                ep = ed;
            if (Y?.kind === "emoji") {
                let e;
                U[10] !== Y.value ? (e = (0, o.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, o.jsx)(y.a, {
                        emoji: Y.value,
                        size: "large"
                    })
                }), U[10] = Y.value, U[11] = e) : e = U[11], ep = e
            } else if (Y?.kind === "icon" || ei) {
                let e, t, n = Y?.kind === "icon" ? Y.color : en;
                U[12] !== ed || U[13] !== et ? (e = et ? (0, o.jsx)(u.Kc, {
                    className: "size-12"
                }) : ed, U[12] = ed, U[13] = et, U[14] = e) : e = U[14];
                let a = Y?.kind === "icon" ? Y.value : null;
                U[15] !== n || U[16] !== e || U[17] !== a ? (t = (0, o.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, o.jsx)(v.a, {
                        className: "size-12",
                        color: n,
                        defaultIcon: e,
                        icon: a
                    })
                }), U[15] = n, U[16] = e, U[17] = a, U[18] = t) : t = U[18], ep = t
            }
            if (null != e.legacyEmoji) {
                let t;
                U[19] !== ep || U[20] !== e.findContextId || U[21] !== e.legacyEmoji ? (t = (0, o.jsx)(I, {
                    emoji: e.legacyEmoji,
                    findContextId: e.findContextId,
                    children: ep
                }), U[19] = ep, U[20] = e.findContextId, U[21] = e.legacyEmoji, U[22] = t) : t = U[22], ep = t
            }
            let eu = el ? "iconTouch" : "compact",
                eg = er ? "self-start" : "absolute end-0 top-1/2 -translate-y-1/2",
                em = el && "max-w-(--page-control-gutter)";
            U[23] !== eg || U[24] !== em ? (S = (0, r.b)(eg, em), U[23] = eg, U[24] = em, U[25] = S) : S = U[25];
            let eh = er ? "ghostMuted" : "ghost",
                ef = er ? void 0 : "small",
                ev = er ? "iconLarge" : eu,
                eb = !er;
            U[26] !== ee || U[27] !== ep || U[28] !== es || U[29] !== ev || U[30] !== eb || U[31] !== S || U[32] !== eh || U[33] !== ef ? (L = (0, o.jsx)(d.a, {
                ref: J,
                className: S,
                "aria-label": es,
                color: eh,
                disabled: ee,
                disabledAppearance: "unchanged",
                onClick: E,
                radius: ef,
                size: ev,
                uniform: eb,
                type: "button",
                children: ep
            }), U[26] = ee, U[27] = ep, U[28] = es, U[29] = ev, U[30] = eb, U[31] = S, U[32] = eh, U[33] = ef, U[34] = L) : L = U[34];
            let ey = L;
            if (ee) {
                let e;
                return er ? (U[35] !== ep ? (e = (0, o.jsx)("span", {
                    className: "flex size-16 items-center justify-center border border-transparent",
                    children: ep
                }), U[35] = ep, U[36] = e) : e = U[36], e) : null
            }
            U[37] !== ee || U[38] !== V || U[39] !== e || U[40] !== Y ? (_ = async function() {
                if (ee) return;
                Z.current?.abort(), Z.current = null;
                let t = J.current;
                if (null == e.openNativePicker || null == t) return void H(!0);
                let n = function(e, t, n) {
                    let o = (0, w.d)(e.ownerDocument, e.getBoundingClientRect());
                    if (null != o) return {
                        symbol: t,
                        canRemove: null != t && "none" !== t.kind,
                        icons: (0, x.a)("", n).map(e => {
                            let {
                                id: t,
                                label: o,
                                keywords: a
                            } = e;
                            return {
                                id: t,
                                label: n.formatMessage(o),
                                keywords: a
                            }
                        }),
                        colors: f.a,
                        anchor: o
                    }
                }(t, Y, V);
                if (null == n) return void H(!0);
                let o = new AbortController;
                Z.current = o;
                let a = await e.openNativePicker(n, o.signal);
                if (!o.signal.aborted) {
                    if (Z.current = null, "unsupported" === a.outcome || "error" === a.outcome) return void H(!0);
                    "handled" === a.outcome && e.onChange(a.symbol), e.onClose?.()
                }
            }, U[37] = ee, U[38] = V, U[39] = e, U[40] = Y, U[41] = _) : _ = U[41];
            let ex = _;
            U[42] !== e ? (D = null == e.onClose ? void 0 : t => {
                t.preventDefault(), e.onClose?.()
            }, U[42] = e, U[43] = D) : D = U[43];
            let ew = D,
                ek = et && Y?.kind !== "emoji" ? "icon" : "emoji",
                ej = !et && !eo,
                eP = eo ? "sheet" : "grid",
                eI = !eo,
                eC = eo ? "calc(70dvh - 4rem - env(safe-area-inset-bottom))" : void 0;
            U[44] !== ee || U[45] !== e.hasUnsupportedLegacyAppearance || U[46] !== e.onChange || U[47] !== eo || U[48] !== Y || U[49] !== ek || U[50] !== ej || U[51] !== eP || U[52] !== eI || U[53] !== eC || U[54] !== en ? (N = (0, o.jsx)(b.a, {
                disabled: ee,
                value: Y,
                defaultColor: en,
                commitColorOnSelect: eo,
                requireIconColor: e.hasUnsupportedLegacyAppearance,
                allowClearWithoutSymbol: e.hasUnsupportedLegacyAppearance,
                defaultKind: ek,
                deferEmojiCatalog: ej,
                layout: eP,
                embedded: eo,
                autoFocus: eI,
                availableHeight: eC,
                onChange: e.onChange,
                onSelect: X,
                onClear: X
            }), U[44] = ee, U[45] = e.hasUnsupportedLegacyAppearance, U[46] = e.onChange, U[47] = eo, U[48] = Y, U[49] = ek, U[50] = ej, U[51] = eP, U[52] = eI, U[53] = eC, U[54] = en, U[55] = N) : N = U[55];
            let eM = N,
                eT = $ && !eo;
            U[56] !== ex ? (R = e => {
                e ? ex() : X()
            }, U[56] = ex, U[57] = R) : R = U[57], U[58] !== el || U[59] !== er ? (z = er ? "self-start" : (0, r.b)(C.a.PageTitle, "absolute top-0 end-full font-semibold", !el && "pe-2"), U[58] = el, U[59] = er, U[60] = z) : z = U[60];
            let eA = er || e.hasUnsupportedLegacyAppearance || el || $,
                eE = er ? "flex" : "relative inline-block h-[1cap] align-baseline";
            return U[61] !== ey ? (B = (0, o.jsx)(g.e, {
                asChild: !0,
                children: ey
            }), U[61] = ey, U[62] = B) : B = U[62], U[63] !== es || U[64] !== $ || U[65] !== B ? (W = (0, o.jsx)(i.a, {
                content: es,
                disabled: $,
                children: B
            }), U[63] = es, U[64] = $, U[65] = B, U[66] = W) : W = U[66], U[67] !== eE || U[68] !== W ? (q = (0, o.jsx)("span", {
                className: eE,
                children: W
            }), U[67] = eE, U[68] = W, U[69] = q) : q = U[69], U[70] !== z || U[71] !== eA || U[72] !== q ? (O = (0, o.jsx)(k.a, {
                className: z,
                anchorSelector: "[data-page-title]",
                active: eA,
                children: q
            }), U[70] = z, U[71] = eA, U[72] = q, U[73] = O) : O = U[73], U[74] !== es || U[75] !== eM || U[76] !== ew ? (F = (0, o.jsx)(g.c, {
                className: "z-50 outline-hidden",
                "aria-label": es,
                align: "center",
                onCloseAutoFocus: ew,
                onClick: A,
                unstyled: !0,
                children: eM
            }), U[74] = es, U[75] = eM, U[76] = ew, U[77] = F) : F = U[77], U[78] !== es || U[79] !== $ || U[80] !== eM || U[81] !== ew || U[82] !== eo ? (K = $ && eo && (0, o.jsxs)(p.a, {
                open: !0,
                size: "sheet",
                variant: "opaque",
                onOpenChange: e => {
                    e || X()
                },
                contentProps: {
                    shouldStopPointerDownPropagation: !1,
                    onCloseAutoFocus: ew,
                    onOpenAutoFocus: T
                },
                children: [(0, o.jsx)(p.f, {
                    className: "px-4 pt-4 pb-3 text-center text-base font-semibold",
                    children: es
                }), eM]
            }), U[78] = es, U[79] = $, U[80] = eM, U[81] = ew, U[82] = eo, U[83] = K) : K = U[83], U[84] !== eT || U[85] !== R || U[86] !== O || U[87] !== F || U[88] !== K ? (Q = (0, o.jsxs)(g.a, {
                modal: !0,
                open: eT,
                onOpenChange: R,
                children: [O, F, K]
            }), U[84] = eT, U[85] = R, U[86] = O, U[87] = F, U[88] = K, U[89] = Q) : Q = U[89], Q
        }

        function T(e) {
            e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
        }

        function A(e) {
            return e.stopPropagation()
        }

        function E(e) {
            return e.stopPropagation()
        }
    }),
    WP5H: (function(e, t, n) {
        var o = n("oo6l");
        let a = {
            kind: "icon",
            value: "graduation-cap",
            color: "blue"
        };
        n.d(t, {}, {
            a: async function(e, t, i) {
                let {
                    withPageMenuSession: r
                } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(226913), n.e(753405), n.e(970791), n.e(156223)]).then(n.bind(n, "tKju"));
                i() && await r(e, t, "write", async e => {
                    i() && null == e.getSymbol() && null == (0, o.xc)(e.document.getText("title").toJSON()).emoji && e.mutateDocument(e => (0, o.tc)(e, a)) && await e.flush({
                        scope: "current",
                        timeoutMs: null
                    })
                })
            },
            b: a
        })
    }),
    JtEZ: (function(e, t, n) {
        var o = n("SZCv"),
            a = n.n(o),
            i = n("Q840"),
            r = n("lAQI"),
            l = n("dQRk"),
            c = n("C9uP"),
            s = n("sjCL"),
            d = n("YF6h"),
            p = n("tSEg"),
            u = n("kpIY"),
            g = n("Nwp9"),
            m = n("Iq2T");
        let h = "spaces-workspace-chat-selections-v1",
            f = r.J(r.L(), r.F({
                ownerClientThreadId: r.L(),
                selection: c.b.nullable()
            }).or(r.F({
                ownerClientThreadId: r.L(),
                ownerSelected: r.j(),
                recentChats: r.g(c.b.nullable())
            }).transform(e => {
                let {
                    ownerClientThreadId: t,
                    ownerSelected: n,
                    recentChats: o
                } = e;
                return {
                    ownerClientThreadId: t,
                    selection: n ? null : o[0] ?? null
                }
            })).nullable().catch(null)).catch({}),
            v = (0, g.b)(h, {}, {
                coerceStoredValue: e => f.parse(e)
            }),
            b = (0, i.c)(p.a, e => {
                let {
                    get: t
                } = e, n = t(m.c);
                if (null != n.conversationId) return {
                    kind: "local",
                    conversationId: n.conversationId,
                    hostId: n.hostId
                };
                let o = t(m.j);
                if (null != o && t(s.d, o)) {
                    let e = t(d.e, o);
                    return null == e.conversationId ? null : {
                        kind: "chatgpt",
                        conversationId: t(l.j, e.conversationId) ?? e.conversationId
                    }
                }
                return {
                    kind: "local-draft",
                    clientThreadId: n.clientThreadId,
                    hostId: n.hostId
                }
            }, {
                isEqual: a()
            }),
            y = (0, i.c)(p.a, e => {
                let {
                    get: t
                } = e, n = t(b);
                if (n?.kind === "local") return n;
                let o = t(m.j);
                if (n?.kind !== "chatgpt" || null == o) return null;
                let a = t(l.j, n.conversationId);
                return null == a ? null : {
                    kind: "chatgpt",
                    conversationId: a,
                    title: t(d.e, o).title ?? ""
                }
            }, {
                isEqual: a()
            }),
            x = (0, i.c)(p.a, e => {
                let {
                    get: t
                } = e, n = t(m.c), o = t(v)[n.accountKey], a = o?.selection ?? null;
                return o?.ownerClientThreadId !== n.clientThreadId || (0, c.a)(t(y), a) ? null : a
            }, {
                isEqual: a()
            }),
            w = (0, i.d)(p.a, (e, t) => {
                let {
                    get: n,
                    scope: o
                } = t;
                return (o.value.persistentWorkspace?.key !== "/space" || null == n(x)) && n(s.d, e)
            }),
            k = (0, i.c)(p.a, e => {
                let {
                    get: t
                } = e, n = t(x);
                return n?.kind === "chatgpt" ? {
                    kind: "chatgpt",
                    conversationId: n.conversationId
                } : n ?? t(b)
            }, {
                isEqual: a()
            });
        n.d(t, {}, {
            a: function(e) {
                let t = (0, m.a)(e);
                null != t && ((0, u.t)(h, {
                    entries: {
                        [t.accountKey]: {
                            value: {
                                ownerClientThreadId: t.clientThreadId,
                                selection: null
                            }
                        }
                    },
                    maxEntries: 500
                }), e.set(v, (0, u.k)(h, {})))
            },
            b: w,
            c: x,
            d: k,
            e: y,
            f: b
        })
    }),
    SVco: (function(e, t, n) {
        n.d(t, {}, {
            a: ["black", "red", "orange", "yellow", "green", "blue", "purple", "pink"],
            b: function(e, t) {
                switch (t) {
                    case "black":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.black",
                            defaultMessage: "Default"
                        });
                    case "blue":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.blue",
                            defaultMessage: "Blue"
                        });
                    case "green":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.green",
                            defaultMessage: "Green"
                        });
                    case "orange":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.orange",
                            defaultMessage: "Orange"
                        });
                    case "pink":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.pink",
                            defaultMessage: "Pink"
                        });
                    case "purple":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.purple",
                            defaultMessage: "Purple"
                        });
                    case "red":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.red",
                            defaultMessage: "Red"
                        });
                    case "yellow":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.yellow",
                            defaultMessage: "Yellow"
                        })
                }
            }
        })
    }),
    qlvd: (function(e, t, n) {
        n.d(t, {
            a: () => c
        });
        var o = n("UKCO"),
            a = n("Qgfj");
        let i = (0, a.f)({
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
        (0, a.e)({
            id: "symbolPicker.icons.category.work",
            defaultMessage: "Work"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.learning",
            defaultMessage: "Learning"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.creative",
            defaultMessage: "Creative"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.wellbeing",
            defaultMessage: "Health and wellbeing"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.travel",
            defaultMessage: "Travel and places"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.nature",
            defaultMessage: "Nature"
        });
        let r = {
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
            l = o.ld.map(function(e) {
                return {
                    id: e,
                    label: i[e],
                    ...r[e]
                }
            });

        function c(e, t) {
            let n = s(e, t.locale);
            if (0 === n.length) return l;
            let o = n.split(" ");
            return l.flatMap(e => {
                let a = s(t.formatMessage(e.label), t.locale),
                    i = s(e.id, t.locale);
                return o.every(t => a.includes(t) || i.includes(t) || e.keywords.some(e => e.includes(t))) ? [{
                    icon: e,
                    score: +(a !== n && i !== n)
                }] : []
            }).sort((e, t) => e.score - t.score).map(e => {
                let {
                    icon: t
                } = e;
                return t
            })
        }

        function s(e, t) {
            return e.trim().toLocaleLowerCase(t).replace(/[\s_-]+/g, " ")
        }
    }),
    iycc: (function(e, t, n) {
        var o = n("Q840"),
            a = n("heYt"),
            i = n("e1xH"),
            r = n("OWtl"),
            l = n("nvO1");
        let c = (0, o.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(l.u, e) && n(i.pagesEnabled$)
            }),
            s = (0, o.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (!n(c, e)) return {
                    drive: !1,
                    loading: !1,
                    error: !1
                };
                let o = n(a.f);
                return {
                    drive: "available" === o,
                    loading: "loading" === o,
                    error: "error" === o
                }
            });
        n.d(t, {}, {
            a: function(e, t) {
                return "drive" === e.backing_type && !e.deleted_at && !0 === e.can_edit && t.drive
            },
            b: s,
            c: c
        })
    }),
    Ko17: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("Q840"),
            r = n("rEML"),
            l = n("OWtl"),
            c = n("fnPc"),
            s = n("kfGJ");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d = (0, a.c)(6),
                    {
                        children: p,
                        teamId: u
                    } = e,
                    g = (0, i.y)(l.a),
                    m = `/settings/teams/${encodeURIComponent(u)}`;
                return d[0] !== g ? (t = e => {
                    e.defaultPrevented || 0 !== e.button || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (0, c.b)(g, s.a)
                }, d[0] = g, d[1] = t) : t = d[1], d[2] !== p || d[3] !== m || d[4] !== t ? (n = (0, o.jsx)(r.g, {
                    className: "-mx-1 -my-0.5 inline-flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm px-1 py-0.5 text-inherit! no-underline select-none hover:bg-secondary-ghost-hover hover:text-default! focus:outline-none! focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                    to: m,
                    onClick: t,
                    children: p
                }), d[2] = p, d[3] = m, d[4] = t, d[5] = n) : n = d[5], n
            }
        })
    })
};