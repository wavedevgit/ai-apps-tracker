export const __rspack_esm_ids = [352477];
export const __webpack_modules__ = {
    msAz: (function(e, t) {
        t.a = {
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
            "page-image-caret-blink": "page-image-caret-blink-sCb03h",
            pageImageCaretBlink: "page-image-caret-blink-sCb03h",
            PrintRoot: "PrintRoot-o2LDio",
            printRoot: "PrintRoot-o2LDio",
            PrintDocument: "PrintDocument-hzBPk2",
            printDocument: "PrintDocument-hzBPk2"
        }
    }),
    hjgY: (function(e, t) {
        t.a = {
            match: "match-z3yytq"
        }
    }),
    C9uP: (function(e, t, n) {
        var o = n("HT1b"),
            a = n("ASxG"),
            i = n("OOaz");
        let r = a.discriminatedUnion("kind", [a.object({
            kind: a.literal("local"),
            conversationId: a.string().transform(o.Re),
            hostId: a.string()
        }), a.object({
            kind: a.literal("chatgpt"),
            conversationId: a.string().transform(i.c),
            title: a.string()
        })]);
        n.d(t, {}, {
            a: function(e, t) {
                return null == e || null == t ? e === t : e.kind === t.kind && e.conversationId === t.conversationId && ("local" !== e.kind || "local" === t.kind && e.hostId === t.hostId)
            },
            b: r
        })
    }),
    sjCL: (function(e, t, n) {
        var o = n("BolX"),
            a = n("OFP1");
        n("njX7");
        var i = n("u4MG"),
            r = n("kois"),
            l = n("chkj"),
            c = n("kphc"),
            s = n("gLQa"),
            d = n("WVuR"),
            p = n("OWtl"),
            u = n("o4oB"),
            g = n("tSEg"),
            m = n("ndjw");
        n("qixt");
        var h = n("eviP"),
            f = n("YF6h");
        let v = (0, o.c)(p.a, e => {
                let {
                    get: t
                } = e;
                return !0
            }),
            b = (0, o.c)(p.a, e => {
                let {
                    get: t
                } = e;
                return "chat" !== t(c.b)
            }),
            y = (0, o.d)(p.a, (e, t) => {
                let {
                    get: n
                } = t, o = null;
                null != e && (o = (0, i.a)(e.projectId) ? e.projectId : (0, s.a)(e.projectId, n(m.h), n(d.a)) ?? null);
                let a = n(l.c, {
                    enforceAccess: (0, c.g)({
                        windowType: "browser",
                        workModeEnabled: !0
                    }),
                    homeComposerMode: "work",
                    routeProjectId: o,
                    selectedChatGptProjectId: o,
                    selectedWorkProject: e
                });
                return {
                    projectId: o,
                    runLocation: a,
                    useAsbDirect: !1
                }
            }),
            x = (0, o.d)(p.a, (e, t) => {
                let {
                    get: n
                } = t;
                return "dot" === e ? {} : "chatgpt" === e ? {
                    backend: "chatgpt"
                } : n(v) ? n(y, null).useAsbDirect ? {
                    hostId: "local"
                } : {
                    backend: "chatgpt"
                } : {}
            }),
            w = (0, o.d)(g.a, (e, t) => {
                let {
                    accountId: n,
                    pageId: o
                } = e, {
                    get: i,
                    scope: l
                } = t, c = i(h.b), s = c?.getSession(l);
                if (null != c && l.value.persistentWorkspace?.key !== "/space" || s?.conversationId != null) return !1;
                if (l.value.persistentWorkspace?.key === "/space" && i(f.d, {
                        accountId: n,
                        pageId: o
                    }) || null != n && null != (0, f.b)(l, n, o, "tpp", i(f.f)) && i(r.m)?.hasConversation) return !0;
                if (!i(a.u)) return i(a.s);
                if (!i(v)) return !1;
                let d = i(y, null == s ? null : i(u.a, s.clientThreadId));
                return "cloud" === d.runLocation.effectiveLocation && !d.useAsbDirect
            });
        n.d(t, {}, {
            a: x,
            b: b,
            c: v,
            d: w,
            e: y
        })
    }),
    aWEZ: (function(e, t, n) {
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
                                r = e(o),
                                l = o.offsetWidth > 0 ? r.width / o.offsetWidth : 1;
                            n = {
                                x: /auto|scroll|hidden|clip/u.test(i.overflowX),
                                y: /auto|scroll|hidden|clip/u.test(i.overflowY),
                                rect: DOMRect.fromRect({
                                    x: r.left + o.clientLeft * l,
                                    y: r.top + o.clientTop * l,
                                    width: o.clientWidth * l,
                                    height: o.clientHeight * l
                                })
                            }, t.set(o, n)
                        }
                        n.x && (i = Math.max(i, n.rect.left), r = Math.min(r, n.rect.right)), n.y && (l = Math.max(l, n.rect.top), c = Math.min(c, n.rect.bottom))
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
            f: function(e, t, n, o, a) {
                let i = t.parentElement?.querySelector(":scope > [data-page-reading-column]"),
                    r = t.closest("[data-page-document-scroll]");
                if (null == i || null == r) return void e.removeAttribute("data-page-attribution-fits");
                let l = i.getBoundingClientRect(),
                    c = o ? l.right : l.left;
                for (let e of t.querySelectorAll('[data-page-block-layout="full-width"] > [data-page-block-viewport] > :first-child')) {
                    let t = e.getBoundingClientRect();
                    t.width > 0 && (c = o ? Math.max(c, t.right) : Math.min(c, t.left))
                }
                let s = r.getBoundingClientRect().left + r.clientLeft * a,
                    d = s + r.clientWidth * a,
                    p = (o ? d - c : c - s) / a;
                e.style.setProperty("--page-attribution-room", `${p}px`), e.style.insetInlineEnd = `${(o?c-n.left:n.right-c)/a}px`, e.toggleAttribute("data-page-attribution-fits", e.clientWidth > 0 && e.scrollWidth <= e.clientWidth)
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
                    I = (0, r.useRef)(null),
                    [P, C] = (0, r.useState)(!1),
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
                let A = (0, r.useEffectEvent)(t);
                h[3] !== b || h[4] !== A || h[5] !== j ? (n = () => {
                    if (j) return;
                    let e = I.current?.closest(b),
                        t = e?.closest("[data-page-block-row], [data-page-edge-region]") ?? e?.closest("[data-page-reading-column]")?.parentElement ?? e;
                    if (null == e || null == t) return;
                    let n = t => A(t, e),
                        o = () => C(!1);
                    return t.addEventListener("pointermove", n), t.addEventListener("pointerleave", o), () => {
                        t.removeEventListener("pointermove", n), t.removeEventListener("pointerleave", o), o()
                    }
                }, h[3] = b, h[4] = A, h[5] = j, h[6] = n) : n = h[6], h[7] !== b || h[8] !== j ? (d = [b, j], h[7] = b, h[8] = j, h[9] = d) : d = h[9], (0, r.useEffect)(n, d), h[10] !== P || h[11] !== j ? (p = () => {
                    if (!P || j) return;
                    let e = I.current?.ownerDocument,
                        t = () => {
                            C(!1), (0, c.b)()
                        };
                    return e?.addEventListener("scroll", t, !0), e?.addEventListener("visibilitychange", t), e?.defaultView?.addEventListener("blur", t), () => {
                        e?.removeEventListener("scroll", t, !0), e?.removeEventListener("visibilitychange", t), e?.defaultView?.removeEventListener("blur", t)
                    }
                }, u = [P, j], h[10] = P, h[11] = j, h[12] = p, h[13] = u) : (p = h[12], u = h[13]), (0, r.useEffect)(p, u);
                let S = j && "[:hover>&]:pointer-events-auto [:hover>&]:opacity-100";
                h[14] !== v || h[15] !== S ? (g = (0, i.b)("pointer-events-auto [@media(hover:hover)_and_(pointer:fine)]:pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:opacity-0 data-visible:pointer-events-auto data-visible:opacity-100 data-menu-open:pointer-events-auto data-menu-open:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100 [[data-state=open]>&]:pointer-events-auto [[data-state=open]>&]:opacity-100 [:focus-visible>&]:pointer-events-auto [:focus-visible>&]:opacity-100", S, v), h[14] = v, h[15] = S, h[16] = g) : g = h[16];
                let T = !j && (P || void 0 !== x && x) || void 0;
                return h[17] !== f || h[18] !== g || h[19] !== T ? (m = (0, o.jsx)("span", {
                    ref: I,
                    className: g,
                    "data-page-edge-controls": !0,
                    "data-visible": T,
                    children: f
                }), h[17] = f, h[18] = g, h[19] = T, h[20] = m) : m = h[20], m
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
        n("BolX"), n("mpAT"), n("oyQi"), n("Ko17"), n("nvO1"), n("iycc")
    }),
    i9us: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("LPKZ"),
            r = n.n(i),
            l = n("BolX"),
            c = n("oyxz"),
            s = n("O5pN"),
            d = n("osar"),
            p = n("Z4o7"),
            u = n("Sm6l"),
            g = n("HOLv"),
            m = n("bf6R"),
            h = n("nb0y"),
            f = n("NRR1"),
            v = n("gcWI"),
            b = n("GAcX"),
            y = n("mpAT"),
            x = n("JtEZ"),
            w = n("tSEg");
        n("qixt");
        var k = n("El6m"),
            j = n("eviP"),
            I = n("JwNp");

        function P() {
            return null
        }(0, l.d)(w.a, (e, t) => {
            let {
                get: n,
                scope: o
            } = t;
            return n(j.b)?.getSession(o)?.conversationId != null || null != e && n(x.b, {
                accountId: n(f.e),
                pageId: e
            })
        }), n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, a.c)(5),
                    {
                        pageId: x
                    } = e,
                    w = (0, l.z)(f.e),
                    j = (0, l.x)(y.loadedSpacePageMetadata$, x ?? null);
                i[0] !== w || i[1] !== x ? (t = {
                    accountId: w,
                    pageId: x
                }, i[0] = w, i[1] = x, i[2] = t) : t = i[2];
                let C = (0, l.x)(v.e, t),
                    M = (0, l.z)(b.c);
                return C || null != M ? null : (i[3] !== j?.document_type ? (n = (0, o.jsx)("div", {
                    inert: !0,
                    "aria-hidden": !0,
                    children: (0, o.jsx)(k.a, {
                        value: "expanded",
                        children: (0, o.jsx)(h.a, {
                            isMinimized: !1,
                            onMinimizedChange: r(),
                            presentation: "compact",
                            renderTranscript: P,
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
                                            children: (0, o.jsx)(m.Hg, {})
                                        }),
                                        input: (0, o.jsx)(d.a.Input, {
                                            layout: "single-line",
                                            children: (0, o.jsx)(s.a, {
                                                singleLine: !0,
                                                children: (0, o.jsxs)("div", {
                                                    className: "truncate text-secondary select-none",
                                                    children: [null, (0, o.jsx)(o.Fragment, {
                                                        children: (0, o.jsx)(c.a, {
                                                            id: "codex.page.chat.placeholder.byDocumentType",
                                                            values: {
                                                                documentType: j?.document_type ?? "page"
                                                            },
                                                            defaultMessage: "{documentType, select, granola_presentation {Work with this slide…} granola_workbook {Work with this sheet…} other {Work with this page…}}"
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
                                                children: (0, o.jsx)(m.dd, {})
                                            }), (0, o.jsx)(u.a, {
                                                disabled: !0,
                                                color: "ghost",
                                                size: "composer",
                                                children: (0, o.jsx)(g.a, {
                                                    asset: I.a
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
                }), i[3] = j?.document_type, i[4] = n) : n = i[4], n)
            }
        })
    }),
    r1wd: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            r = n("BolX"),
            l = n("X3K1"),
            c = n("SCmN"),
            s = n("WP5H"),
            d = n("Ih0z"),
            p = n("mpAT"),
            u = n("kTTh"),
            g = n("fAHU"),
            m = n("i9us"),
            h = n("ZwXN"),
            f = n("Jif0"),
            v = n("fQMn");

        function b(e) {
            let t, n, m, h, b, x, w, k, j, I, P, C, M = (0, a.c)(39),
                {
                    appearance: A,
                    pageId: S,
                    space: T,
                    spaceId: E,
                    title: _,
                    symbol: D
                } = e;
            M[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                enabled: !1
            }, M[0] = t) : t = M[0];
            let {
                data: N
            } = (0, r.x)(p.spaceQuery$, E ?? "", t), L = T ?? N, z = S ?? L?.root_page_id ?? "", R = (0, r.x)(p.loadedSpacePageMetadata$, z), B = (0, r.x)(c.b, z), W = L?.id ?? E;
            M[1] !== W ? (n = {
                spaceId: W
            }, M[1] = W, M[2] = n) : n = M[2], M[3] === Symbol.for("react.memo_cache_sentinel") ? (m = {
                enabled: !1
            }, M[3] = m) : m = M[3];
            let O = (0, r.x)(d.d, n, m),
                q = A ?? O,
                F = null != L || null != E || null != A,
                H = null == R ? L?.symbol ?? D ?? null : R.symbol ?? null;
            if (F && null == H) {
                let e;
                M[4] !== q ? (e = (0, d.a)(q), M[4] = q, M[5] = e) : e = M[5], H = e
            }
            let K = null == L ? R?.title ?? _ : _ ?? L.name;
            if (!F && null == H && null != K) {
                let e;
                M[6] !== K ? (e = (0, u.b)(K), M[6] = K, M[7] = e) : e = M[7];
                let t = e;
                if (K = t.title, null != t.emoji) {
                    let e;
                    M[8] !== t.emoji ? (e = {
                        kind: "emoji",
                        value: t.emoji
                    }, M[8] = t.emoji, M[9] = e) : e = M[9], H = e
                }
            }
            B && !F && null == H && (H = s.b);
            let V = null == K,
                X = L?.id ?? E,
                Q = R?.document_type,
                G = R?.namespace,
                J = q?.theme;
            M[10] !== F || M[11] !== H || M[12] !== Q || M[13] !== G || M[14] !== J ? (h = (0, o.jsx)(v.a, {
                disabled: !0,
                legacyEmoji: null,
                documentType: Q,
                namespace: G,
                symbol: H,
                space: F,
                spaceTheme: J,
                onChange: y
            }), M[10] = F, M[11] = H, M[12] = Q, M[13] = G, M[14] = J, M[15] = h) : h = M[15];
            let $ = V && "w-64 max-w-full";
            M[16] !== $ ? (b = (0, i.b)("relative min-w-0", $), M[16] = $, M[17] = b) : b = M[17];
            let Z = V ? "invisible" : void 0,
                U = V || void 0;
            return M[18] !== K || M[19] !== V ? (x = V ? "" : (K ?? "").replace(/[\r\n]+/g, " "), M[18] = K, M[19] = V, M[20] = x) : x = M[20], M[21] !== x ? (w = (0, o.jsx)(f.a, {
                disabled: !0,
                readOnly: !0,
                value: x
            }), M[21] = x, M[22] = w) : w = M[22], M[23] !== Z || M[24] !== U || M[25] !== w ? (k = (0, o.jsx)("div", {
                className: Z,
                "aria-hidden": U,
                children: w
            }), M[23] = Z, M[24] = U, M[25] = w, M[26] = k) : k = M[26], M[27] !== V ? (j = V ? (0, o.jsx)("div", {
                className: "absolute inset-0 flex items-center",
                children: (0, o.jsx)(l.a, {
                    className: "w-full",
                    size: "lg",
                    variant: "chatgpt-project"
                })
            }) : null, M[27] = V, M[28] = j) : j = M[28], M[29] !== b || M[30] !== k || M[31] !== j ? (I = (0, o.jsxs)("div", {
                className: b,
                children: [k, j]
            }), M[29] = b, M[30] = k, M[31] = j, M[32] = I) : I = M[32], M[33] !== I || M[34] !== h ? (P = (0, o.jsxs)("div", {
                className: "relative flex flex-col gap-2",
                "data-page-title": !0,
                children: [h, I]
            }), M[33] = I, M[34] = h, M[35] = P) : P = M[35], M[36] !== P || M[37] !== X ? (C = (0, o.jsx)(g.a, {
                rootSpaceId: X,
                children: P
            }), M[36] = P, M[37] = X, M[38] = C) : C = M[38], C
        }

        function y() {}
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, s, d, u, g, f, v = (0, a.c)(28),
                    {
                        pageId: y,
                        spaceId: x,
                        title: w,
                        symbol: k,
                        headerOverlay: j,
                        showComposer: I
                    } = e,
                    P = void 0 !== I && I;
                v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    enabled: !1
                }, v[0] = t) : t = v[0];
                let {
                    data: C
                } = (0, r.z)(p.spacesQuery$, t);
                v[1] !== y || v[2] !== x || v[3] !== C?.items || v[4] !== C?.items.find ? (n = C?.items.find(e => null == y ? e.id === x : e.root_page_id === y), v[1] = y, v[2] = x, v[3] = C?.items, v[4] = C?.items.find, v[5] = n) : n = v[5];
                let M = n,
                    A = void 0 !== j && j && "viewer-header-scroll-mask pt-[var(--viewer-header-height)]";
                v[6] !== A ? (l = (0, i.b)("min-h-0 flex-1 scrollbar-stable overflow-y-auto", A), v[6] = A, v[7] = l) : l = v[7], v[8] !== y || v[9] !== M || v[10] !== k || v[11] !== w ? (c = (0, o.jsx)(b, {
                    pageId: y,
                    space: M,
                    title: w,
                    symbol: k
                }), v[8] = y, v[9] = M, v[10] = k, v[11] = w, v[12] = c) : c = v[12];
                let S = y ?? M?.root_page_id ?? x ?? "";
                return v[13] !== S ? (s = (0, o.jsx)(h.b, {
                    pageId: S
                }), v[13] = S, v[14] = s) : s = v[14], v[15] !== c || v[16] !== s ? (d = (0, o.jsx)(h.a, {
                    heading: c,
                    children: s
                }), v[15] = c, v[16] = s, v[17] = d) : d = v[17], v[18] !== d || v[19] !== l ? (u = (0, o.jsx)("div", {
                    className: l,
                    children: d
                }), v[18] = d, v[19] = l, v[20] = u) : u = v[20], v[21] !== y || v[22] !== P || v[23] !== M?.root_page_id ? (g = P && (0, o.jsx)(m.a, {
                    pageId: y ?? M?.root_page_id
                }), v[21] = y, v[22] = P, v[23] = M?.root_page_id, v[24] = g) : g = v[24], v[25] !== u || v[26] !== g ? (f = (0, o.jsxs)(o.Fragment, {
                    children: [u, g]
                }), v[25] = u, v[26] = g, v[27] = f) : f = v[27], f
            },
            b: b
        })
    }),
    ZwXN: (function(e, t, n) {
        n.d(t, {
            a: () => h,
            b: () => v,
            c: () => b
        });
        var o = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            r = n("IPUh"),
            l = n("BolX"),
            c = n("CJrD"),
            s = n("Wf1j"),
            d = n("X3K1"),
            p = n("ADAj"),
            u = n("msAz");

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
        var m = n("wHSK");

        function h(e) {
            let t, n, r, s, d, u, h, v, b, y, x, w, k, j, I, P = (0, a.c)(33);
            P[0] !== e ? ({
                heading: n,
                externalEditingControls: u,
                messages: s,
                compact: h,
                headingOutside: v,
                headingRef: r,
                children: t,
                ...d
            } = e, P[0] = e, P[1] = t, P[2] = n, P[3] = r, P[4] = s, P[5] = d, P[6] = u, P[7] = h, P[8] = v) : (t = P[1], n = P[2], r = P[3], s = P[4], d = P[5], u = P[6], h = P[7], v = P[8]);
            let C = void 0 !== u && u,
                M = void 0 !== h && h,
                A = void 0 !== v && v;
            P[9] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, c.a)(), P[9] = b) : b = P[9];
            let S = (0, p.k)(b.fullWidth),
                T = (0, l.z)(m.b),
                E = A ? "pt-4 pb-panel" : "pt-10 pb-panel",
                _ = T && "[--page-bookmark-height:auto] [--page-bookmark-min-height:calc(var(--spacing)*32)] [--page-bookmark-title-height:auto] [--page-bookmark-title-min-height:1lh] [--page-bookmark-image-width:33.333333%] [--page-bookmark-image-height:auto] [--page-bookmark-image-aspect:auto] [--page-bookmark-image-align:stretch]",
                D = M || C ? "py-4" : E;
            P[10] !== _ || P[11] !== D ? (y = (0, i.b)(_, D), P[10] = _, P[11] = D, P[12] = y) : y = P[12];
            let N = S || C || void 0,
                L = T || void 0;
            P[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)(g, {}), P[13] = x) : x = P[13];
            let z = M && "mb-4";
            return P[14] !== z ? (w = (0, i.b)("flex flex-col gap-2 empty:hidden", z), P[14] = z, P[15] = w) : w = P[15], P[16] !== s || P[17] !== w ? (k = (0, o.jsx)("div", {
                className: w,
                children: s
            }), P[16] = s, P[17] = w, P[18] = k) : k = P[18], P[19] !== n || P[20] !== r || P[21] !== k ? (j = (0, o.jsxs)("div", {
                ref: r,
                className: "col-[reading] flex w-full max-w-(--page-reading-width) min-w-0 flex-col gap-6",
                "data-page-reading-column": !0,
                children: [x, k, n]
            }), P[19] = n, P[20] = r, P[21] = k, P[22] = j) : j = P[22], P[23] !== t || P[24] !== M || P[25] !== C || P[26] !== A || P[27] !== d || P[28] !== j || P[29] !== y || P[30] !== N || P[31] !== L ? (I = (0, o.jsxs)(f, {
                ...d,
                compact: M,
                externalEditingControls: C,
                headingOutside: A,
                className: y,
                "data-page-full-width": N,
                "data-page-typography": L,
                children: [j, t]
            }), P[23] = t, P[24] = M, P[25] = C, P[26] = A, P[27] = d, P[28] = j, P[29] = y, P[30] = N, P[31] = L, P[32] = I) : I = P[32], I
        }

        function f(e) {
            let t, n, l, c, s, d, p, g, m, h = (0, a.c)(21);
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
                x = f || b ? "gap-y-0" : "gap-y-6",
                w = f ? "ps-[var(--page-attribution-padding,--spacing(4))] pe-4" : "ps-[var(--page-attribution-padding,var(--page-control-gutter))] pe-(--page-control-gutter) in-[[data-page-responsive-comments=markers]]:ps-[var(--page-attribution-padding,clamp(16px,calc(100%_-_572px_-_48px),48px))]",
                k = v ? "[--page-control-gutter:--spacing(10)] [--page-document-end-space:--spacing(16)] [--color-background-text-selection:--alpha(var(--color-text)/20%)]" : "[--page-control-gutter:--spacing(14)] [--page-document-end-space:50cqh] in-[[data-page-responsive-comments]]:[--page-control-gutter:--spacing(12)]",
                j = "start" === n && "w-full max-w-[var(--page-content-max-width,none)]";
            h[8] !== t || h[9] !== x || h[10] !== w || h[11] !== k || h[12] !== j ? (g = (0, i.b)(u.a.PageContent, "@container grid", x, w, k, j, t), h[8] = t, h[9] = x, h[10] = w, h[11] = k, h[12] = j, h[13] = g) : g = h[13];
            let I = f || void 0,
                P = v || void 0;
            return h[14] !== y || h[15] !== n || h[16] !== l || h[17] !== I || h[18] !== P || h[19] !== g ? (m = (0, o.jsx)(y, {
                ...l,
                className: g,
                "data-compact": I,
                "data-page-content-alignment": n,
                "data-native-controls": P
            }), h[14] = y, h[15] = n, h[16] = l, h[17] = I, h[18] = P, h[19] = g, h[20] = m) : m = h[20], m
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
            let t, n, r, l = (0, a.c)(8),
                {
                    externalEditingControls: c,
                    onTouch: s
                } = e,
                d = void 0 !== c && c,
                p = d ? "h-16" : "h-[50cqh]";
            l[0] !== p ? (t = (0, i.b)(u.a.PageDocumentEnd, p), l[0] = p, l[1] = t) : t = l[1];
            let g = d || void 0;
            return l[2] !== s ? (n = e => {
                "pointerType" in e.nativeEvent && "touch" === e.nativeEvent.pointerType && s()
            }, l[2] = s, l[3] = n) : n = l[3], l[4] !== t || l[5] !== g || l[6] !== n ? (r = (0, o.jsx)("div", {
                "aria-hidden": !0,
                className: t,
                "data-native-controls": g,
                "data-page-document-end": !0,
                "data-page-document-trailing-space": !0,
                onClick: n
            }), l[4] = t, l[5] = g, l[6] = n, l[7] = r) : r = l[7], r
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
            u = n("msAz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, m, h, f, v, b, y, x = (0, a.c)(26),
                    {
                        onHistory: w,
                        ...k
                    } = e,
                    j = (0, l.a)();
                x[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.a)(), x[0] = t) : t = x[0];
                let I = (0, s.k)(t.smartPunctuationEnabled),
                    P = (0, r.useRef)(void 0),
                    C = (0, r.useRef)(!1),
                    M = (0, r.useRef)(!1),
                    A = (0, d.a)(k.ref, e => {
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
                    P.current = void 0,
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
                        n = P.current;
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
                        n = P.current;
                    null != n && (t.value !== n.value || t.selectionStart !== n.caret || t.selectionEnd !== n.caret) && (P.current = void 0), k.onSelect?.(e)
                }, x[8] = k, x[9] = h, x[10] = f) : (h = x[9], f = x[10]), x[11] !== k || x[12] !== I ? (v = e => {
                    k.onInput?.(e);
                    let t = e.currentTarget,
                        n = e.nativeEvent,
                        o = P.current;
                    if (n instanceof InputEvent && null != o) {
                        if ("historyUndo" === n.inputType && t.value === o.value.slice(0, o.caret - 1) + o.shortcut + o.value.slice(o.caret)) return void t.setSelectionRange(t.selectionEnd, t.selectionEnd);
                        if ("historyRedo" === n.inputType && t.value === o.value) return
                    }
                    if (P.current = void 0, C.current || !I || t.disabled || t.readOnly || !(n instanceof InputEvent) || n.isComposing || "insertText" !== n.inputType || n.data?.length !== 1 || !"\"'.=>-".includes(n.data) || t.selectionStart !== t.selectionEnd) return;
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
                            t.ownerDocument.execCommand("insertText", !1, c.glyph) && (P.current = {
                                value: t.value,
                                caret: t.selectionStart,
                                shortcut: c.shortcut
                            })
                        }
                    })
                }, x[11] = k, x[12] = I, x[13] = v) : v = x[13], x[14] !== k ? (b = e => {
                    P.current = void 0, k.onBlur?.(e)
                }, x[14] = k, x[15] = b) : b = x[15], x[16] !== k || x[17] !== A || x[18] !== n || x[19] !== g || x[20] !== m || x[21] !== h || x[22] !== f || x[23] !== v || x[24] !== b ? (y = (0, o.jsx)("textarea", {
                    ...k,
                    ref: A,
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
                }), x[16] = k, x[17] = A, x[18] = n, x[19] = g, x[20] = m, x[21] = h, x[22] = f, x[23] = v, x[24] = b, x[25] = y) : y = x[25], y
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
            l = n("BolX"),
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
            I = n("hjgY");

        function P(e) {
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
                className: `${I.a.match} inline-flex rounded-2xs text-inherit`,
                "data-active": g,
                "data-page-find-match": !0,
                "data-page-find-title-match": u.location.from,
                children: r
            }), i[7] = r, i[8] = u.location.from, i[9] = g, i[10] = n) : n = i[10], n
        }
        var C = n("msAz");

        function M(e) {
            let t, n, j, I, M, E, _, D, N, L, z, R, B, W, O, q, F, H, K, V = (0, a.c)(88),
                X = (0, s.a)(),
                [Q, G] = (0, c.useState)(!1),
                J = (0, c.useRef)(null),
                $ = (0, c.useRef)(null),
                Z = (0, m.a)("(max-width: 767px)");
            V[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => G(!1), V[0] = t) : t = V[0];
            let U = t,
                {
                    symbol: Y,
                    disabled: ee,
                    space: et,
                    spaceTheme: en
                } = e,
                eo = Z && !et,
                ea = (0, l.x)(h.a, {
                    documentType: et ? void 0 : e.documentType,
                    namespace: et ? null : e.namespace,
                    surface: "editor"
                })?.[32],
                ei = null != Y && "none" !== Y.kind || null != ea,
                er = !ei && !et && (Z || e.externalEditingControls || null != e.openNativePicker),
                el = e.externalEditingControls && et && !ei;
            if (V[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => () => {
                    $.current?.abort(), $.current = null
                }, V[1] = n) : n = V[1], V[2] !== ee || V[3] !== el ? (j = [el, ee], V[2] = ee, V[3] = el, V[4] = j) : j = V[4], (0, c.useLayoutEffect)(n, j), (ee || el) && Q && U(), el) return null;
            V[5] !== er || V[6] !== X ? (I = er ? X.formatMessage({
                id: "codex.space.page.symbol.add",
                defaultMessage: "Add icon"
            }) : X.formatMessage({
                id: "codex.space.page.symbol.change",
                defaultMessage: "Change icon"
            }), V[5] = er, V[6] = X, V[7] = I) : I = V[7];
            let ec = I;
            V[8] !== ea ? (M = null == ea ? (0, o.jsx)(u.fd, {}) : (0, o.jsx)(ea, {}), V[8] = ea, V[9] = M) : M = V[9];
            let es = M,
                ed = es;
            if (Y?.kind === "emoji") {
                let e;
                V[10] !== Y.value ? (e = (0, o.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, o.jsx)(y.a, {
                        emoji: Y.value,
                        size: "large"
                    })
                }), V[10] = Y.value, V[11] = e) : e = V[11], ed = e
            } else if (Y?.kind === "icon") {
                let e, t;
                V[12] !== es || V[13] !== et ? (e = et ? (0, o.jsx)(u.Gc, {
                    className: "size-12"
                }) : es, V[12] = es, V[13] = et, V[14] = e) : e = V[14], V[15] !== Y.color || V[16] !== Y.value || V[17] !== e ? (t = (0, o.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, o.jsx)(v.a, {
                        className: "size-12",
                        color: Y.color,
                        defaultIcon: e,
                        icon: Y.value
                    })
                }), V[15] = Y.color, V[16] = Y.value, V[17] = e, V[18] = t) : t = V[18], ed = t
            }
            if (null != e.legacyEmoji) {
                let t;
                V[19] !== ed || V[20] !== e.findContextId || V[21] !== e.legacyEmoji ? (t = (0, o.jsx)(P, {
                    emoji: e.legacyEmoji,
                    findContextId: e.findContextId,
                    children: ed
                }), V[19] = ed, V[20] = e.findContextId, V[21] = e.legacyEmoji, V[22] = t) : t = V[22], ed = t
            }
            let ep = er ? "iconTouch" : "compact",
                eu = ei ? "self-start" : "absolute end-0 top-1/2 -translate-y-1/2",
                eg = er && "max-w-(--page-control-gutter)";
            V[23] !== eu || V[24] !== eg ? (E = (0, r.b)(eu, eg), V[23] = eu, V[24] = eg, V[25] = E) : E = V[25];
            let em = ei ? "ghostMuted" : "ghost",
                eh = ei ? void 0 : "small",
                ef = ei ? "iconLarge" : ep,
                ev = !ei;
            V[26] !== ee || V[27] !== ed || V[28] !== ec || V[29] !== ef || V[30] !== ev || V[31] !== E || V[32] !== em || V[33] !== eh ? (_ = (0, o.jsx)(d.a, {
                ref: J,
                className: E,
                "aria-label": ec,
                color: em,
                disabled: ee,
                disabledAppearance: "unchanged",
                onClick: T,
                radius: eh,
                size: ef,
                uniform: ev,
                type: "button",
                children: ed
            }), V[26] = ee, V[27] = ed, V[28] = ec, V[29] = ef, V[30] = ev, V[31] = E, V[32] = em, V[33] = eh, V[34] = _) : _ = V[34];
            let eb = _;
            if (ee) {
                let e;
                return ei ? (V[35] !== ed ? (e = (0, o.jsx)("span", {
                    className: "flex size-16 items-center justify-center border border-transparent",
                    children: ed
                }), V[35] = ed, V[36] = e) : e = V[36], e) : null
            }
            V[37] !== ee || V[38] !== X || V[39] !== e || V[40] !== Y ? (D = async function() {
                if (ee) return;
                $.current?.abort(), $.current = null;
                let t = J.current;
                if (null == e.openNativePicker || null == t) return void G(!0);
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
                }(t, Y, X);
                if (null == n) return void G(!0);
                let o = new AbortController;
                $.current = o;
                let a = await e.openNativePicker(n, o.signal);
                if (!o.signal.aborted) {
                    if ($.current = null, "unsupported" === a.outcome || "error" === a.outcome) return void G(!0);
                    "handled" === a.outcome && e.onChange(a.symbol), e.onClose?.()
                }
            }, V[37] = ee, V[38] = X, V[39] = e, V[40] = Y, V[41] = D) : D = V[41];
            let ey = D;
            V[42] !== e ? (N = null == e.onClose ? void 0 : t => {
                t.preventDefault(), e.onClose?.()
            }, V[42] = e, V[43] = N) : N = V[43];
            let ex = N,
                ew = et && Y?.kind !== "emoji" ? "icon" : "emoji",
                ek = eo ? "sheet" : "grid",
                ej = !eo,
                eI = eo ? "calc(70dvh - 4rem - env(safe-area-inset-bottom))" : void 0;
            V[44] !== ee || V[45] !== e.onChange || V[46] !== eo || V[47] !== Y || V[48] !== ew || V[49] !== ek || V[50] !== ej || V[51] !== eI || V[52] !== en ? (L = (0, o.jsx)(b.a, {
                disabled: ee,
                value: Y,
                defaultColor: en,
                commitColorOnSelect: eo,
                defaultKind: ew,
                layout: ek,
                embedded: eo,
                autoFocus: ej,
                availableHeight: eI,
                onChange: e.onChange,
                onSelect: U,
                onClear: U
            }), V[44] = ee, V[45] = e.onChange, V[46] = eo, V[47] = Y, V[48] = ew, V[49] = ek, V[50] = ej, V[51] = eI, V[52] = en, V[53] = L) : L = V[53];
            let eP = L,
                eC = Q && !eo;
            V[54] !== ey ? (z = e => {
                e ? ey() : U()
            }, V[54] = ey, V[55] = z) : z = V[55], V[56] !== er || V[57] !== ei ? (R = ei ? "self-start" : (0, r.b)(C.a.PageTitle, "absolute top-0 end-full font-semibold", !er && "pe-2"), V[56] = er, V[57] = ei, V[58] = R) : R = V[58];
            let eM = ei || er || Q,
                eA = ei ? "flex" : "relative inline-block h-[1cap] align-baseline";
            return V[59] !== eb ? (B = (0, o.jsx)(g.e, {
                asChild: !0,
                children: eb
            }), V[59] = eb, V[60] = B) : B = V[60], V[61] !== ec || V[62] !== Q || V[63] !== B ? (W = (0, o.jsx)(i.a, {
                content: ec,
                disabled: Q,
                children: B
            }), V[61] = ec, V[62] = Q, V[63] = B, V[64] = W) : W = V[64], V[65] !== eA || V[66] !== W ? (O = (0, o.jsx)("span", {
                className: eA,
                children: W
            }), V[65] = eA, V[66] = W, V[67] = O) : O = V[67], V[68] !== R || V[69] !== eM || V[70] !== O ? (q = (0, o.jsx)(k.a, {
                className: R,
                anchorSelector: "[data-page-title]",
                active: eM,
                children: O
            }), V[68] = R, V[69] = eM, V[70] = O, V[71] = q) : q = V[71], V[72] !== ec || V[73] !== eP || V[74] !== ex ? (F = (0, o.jsx)(g.c, {
                className: "z-50 outline-hidden",
                "aria-label": ec,
                align: "center",
                onCloseAutoFocus: ex,
                onClick: S,
                unstyled: !0,
                children: eP
            }), V[72] = ec, V[73] = eP, V[74] = ex, V[75] = F) : F = V[75], V[76] !== ec || V[77] !== Q || V[78] !== eP || V[79] !== ex || V[80] !== eo ? (H = Q && eo && (0, o.jsxs)(p.a, {
                open: !0,
                size: "sheet",
                variant: "opaque",
                onOpenChange: e => {
                    e || U()
                },
                contentProps: {
                    shouldStopPointerDownPropagation: !1,
                    onCloseAutoFocus: ex,
                    onOpenAutoFocus: A
                },
                children: [(0, o.jsx)(p.e, {
                    className: "px-4 pt-4 pb-3 text-center text-base font-semibold",
                    children: ec
                }), eP]
            }), V[76] = ec, V[77] = Q, V[78] = eP, V[79] = ex, V[80] = eo, V[81] = H) : H = V[81], V[82] !== eC || V[83] !== z || V[84] !== q || V[85] !== F || V[86] !== H ? (K = (0, o.jsxs)(g.a, {
                modal: !0,
                open: eC,
                onOpenChange: z,
                children: [q, F, H]
            }), V[82] = eC, V[83] = z, V[84] = q, V[85] = F, V[86] = H, V[87] = K) : K = V[87], K
        }

        function A(e) {
            e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
        }

        function S(e) {
            return e.stopPropagation()
        }

        function T(e) {
            return e.stopPropagation()
        }
    }),
    zTDg: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("slpy"),
            r = n("Wf1j"),
            l = n("Sm6l"),
            c = n("j9wQ");
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, s, d, p, u = (0, a.c)(14);
                u[0] !== e ? ({
                    label: t,
                    appearance: r,
                    color: s,
                    ...n
                } = e, u[0] = e, u[1] = t, u[2] = n, u[3] = r, u[4] = s) : (t = u[1], n = u[2], r = u[3], s = u[4]);
                let g = void 0 === r ? "toolbar" : r,
                    m = void 0 === s ? "ghostActive" : s,
                    h = !0 === n["aria-expanded"];
                return u[5] !== g || u[6] !== m || u[7] !== t || u[8] !== n ? (d = "viewer" === g ? (0, o.jsx)(c.g, {
                    ...n,
                    "aria-label": t,
                    uniform: !0
                }) : (0, o.jsx)(l.a, {
                    ...n,
                    "aria-label": t,
                    color: m,
                    size: "toolbar",
                    uniform: !0
                }), u[5] = g, u[6] = m, u[7] = t, u[8] = n, u[9] = d) : d = u[9], u[10] !== t || u[11] !== h || u[12] !== d ? (p = (0, o.jsx)(i.a, {
                    content: t,
                    disabled: h,
                    children: d
                }), u[10] = t, u[11] = h, u[12] = d, u[13] = p) : p = u[13], p
            },
            b: function(e) {
                let t, n, i, l, s = (0, a.c)(9);
                s[0] !== e ? ({
                    children: t,
                    ...n
                } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
                let d = (0, r.a)();
                return s[3] !== d ? (i = d.formatMessage({
                    id: "codex.space.page.header.editingTools",
                    defaultMessage: "Page editing tools"
                }), s[3] = d, s[4] = i) : i = s[4], s[5] !== t || s[6] !== n || s[7] !== i ? (l = (0, o.jsx)(c.i, {
                    ...n,
                    label: i,
                    children: t
                }), s[5] = t, s[6] = n, s[7] = i, s[8] = l) : l = s[8], l
            }
        })
    }),
    JyrC: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            r = n("zd8w"),
            l = n("v7qY"),
            c = n("Wf1j"),
            s = n("Ouov"),
            d = n("bUax"),
            p = n("hZSj"),
            u = n("j9wQ"),
            g = n("zTDg");

        function m(e) {
            let t, n, r, s, p, m, f, v, b, y, x, w, k, j, I, P, C, M, A, S, T, E, _, D, N, L = (0, a.c)(78),
                z = (0, c.a)(),
                {
                    inset: R,
                    contentFade: B,
                    navigation: W,
                    actions: O,
                    documentControlsContainers: q,
                    saveStatus: F,
                    people: H,
                    automations: K,
                    requestEditAccess: V,
                    comments: X,
                    meeting: Q,
                    supplementalActions: G,
                    connectionStatus: J,
                    onClose: $,
                    tabId: Z,
                    sharing: U
                } = e,
                Y = void 0 !== R && R,
                ee = void 0 !== B && B;
            L[0] !== O || L[1] !== e.actionsGrouped ? (t = e.actionsGrouped || null == O ? O : (0, o.jsx)(g.b, {
                children: O
            }), L[0] = O, L[1] = e.actionsGrouped, L[2] = t) : t = L[2];
            let et = t;
            L[3] !== K || L[4] !== X ? (n = (0, o.jsxs)(o.Fragment, {
                children: [K, X]
            }), L[3] = K, L[4] = X, L[5] = n) : n = L[5];
            let en = n,
                eo = en;
            if (null == q) {
                let e;
                L[6] !== K || L[7] !== X || L[8] !== z || L[9] !== en ? (e = K || X ? (0, o.jsx)(u.i, {
                    hideWhenEmpty: !0,
                    label: z.formatMessage({
                        id: "codex.space.page.header.panels",
                        defaultMessage: "Page panels"
                    }),
                    children: en
                }) : null, L[6] = K, L[7] = X, L[8] = z, L[9] = en, L[10] = e) : e = L[10], eo = e
            }
            L[11] !== G ? (r = {
                id: "supplemental",
                content: G,
                hidePriority: 3
            }, L[11] = G, L[12] = r) : r = L[12], L[13] === Symbol.for("react.memo_cache_sentinel") ? (s = [{
                priority: 5,
                selector: "[data-page-automation-control]"
            }], L[13] = s) : s = L[13], L[14] !== eo ? (p = {
                id: "panels",
                collapseSteps: s,
                content: eo
            }, L[14] = eo, L[15] = p) : p = L[15], L[16] !== Q ? (m = {
                id: "meeting",
                content: Q,
                collapsePriority: 3
            }, L[16] = Q, L[17] = m) : m = L[17], L[18] !== r || L[19] !== p || L[20] !== m ? (f = [r, p, m], L[18] = r, L[19] = p, L[20] = m, L[21] = f) : f = L[21];
            let ea = f;
            L[22] !== q || L[23] !== ea ? (v = q?.trailing != null ? (0, l.createPortal)((0, o.jsx)("div", {
                className: "flex min-w-0 items-center gap-0.5",
                children: ea.map(h)
            }), q.trailing) : null, L[22] = q, L[23] = ea, L[24] = v) : v = L[24];
            let ei = !Y && "ps-[var(--window-titlebar-inset-left,0px)] pe-[var(--window-titlebar-inset-right,0px)] rtl:ps-[var(--window-titlebar-inset-right,0px)] rtl:pe-[var(--window-titlebar-inset-left,0px)]";
            L[25] !== ei ? (b = (0, i.b)(ei, "w-full"), L[25] = ei, L[26] = b) : b = L[26];
            let er = ee ? "overlay" : void 0;
            L[27] !== W ? (y = {
                id: "title",
                content: (0, o.jsx)("div", {
                    className: "flex min-w-0 items-center",
                    children: W
                }),
                collapsePriority: 1
            }, L[27] = W, L[28] = y) : y = L[28];
            let el = null == q ? et : null;
            return L[29] !== el ? (x = {
                id: "editing",
                content: el,
                collapsePriority: 2
            }, L[29] = el, L[30] = x) : x = L[30], L[31] !== F ? (w = {
                id: "save-status",
                content: F
            }, L[31] = F, L[32] = w) : w = L[32], L[33] !== y || L[34] !== x || L[35] !== w ? (k = [y, x, w], L[33] = y, L[34] = x, L[35] = w, L[36] = k) : k = L[36], L[37] !== V ? (j = {
                id: "request-edit-access",
                content: V
            }, L[37] = V, L[38] = j) : j = L[38], L[39] !== J ? (I = {
                id: "connection-status",
                content: J,
                hidePriority: 3
            }, L[39] = J, L[40] = I) : I = L[40], L[41] !== q || L[42] !== ea ? (P = null == q ? ea : [], L[41] = q, L[42] = ea, L[43] = P) : P = L[43], L[44] !== e.download ? (C = {
                id: "download",
                content: e.download
            }, L[44] = e.download, L[45] = C) : C = L[45], L[46] !== e.overflow ? (M = {
                id: "overflow",
                content: e.overflow
            }, L[46] = e.overflow, L[47] = M) : M = L[47], L[48] !== e.persistentActions ? (A = {
                id: "artifact-actions",
                content: e.persistentActions
            }, L[48] = e.persistentActions, L[49] = A) : A = L[49], L[50] !== z || L[51] !== H || L[52] !== U ? (S = null == U && null == H ? null : (0, o.jsxs)(u.i, {
                hideWhenEmpty: !0,
                label: z.formatMessage({
                    id: "codex.space.page.header.sharing",
                    defaultMessage: "Sharing"
                }),
                children: [H, U]
            }), L[50] = z, L[51] = H, L[52] = U, L[53] = S) : S = L[53], L[54] !== S ? (T = {
                id: "sharing",
                content: S,
                collapsePriority: 4
            }, L[54] = S, L[55] = T) : T = L[55], L[56] !== $ || L[57] !== Z ? (E = {
                id: "window-controls",
                content: (0, o.jsx)(d.a, {
                    tabId: Z,
                    onClose: $
                })
            }, L[56] = $, L[57] = Z, L[58] = E) : E = L[58], L[59] !== j || L[60] !== I || L[61] !== P || L[62] !== C || L[63] !== M || L[64] !== A || L[65] !== T || L[66] !== E ? (_ = [j, I, ...P, C, M, A, T, E], L[59] = j, L[60] = I, L[61] = P, L[62] = C, L[63] = M, L[64] = A, L[65] = T, L[66] = E, L[67] = _) : _ = L[67], L[68] !== ee || L[69] !== Y || L[70] !== b || L[71] !== er || L[72] !== k || L[73] !== _ ? (D = (0, o.jsx)(u.l, {
                className: b,
                contentFade: ee,
                density: "compact",
                inset: Y,
                placement: er,
                leading: k,
                trailing: _
            }), L[68] = ee, L[69] = Y, L[70] = b, L[71] = er, L[72] = k, L[73] = _, L[74] = D) : D = L[74], L[75] !== D || L[76] !== v ? (N = (0, o.jsxs)("div", {
                className: "@container/page-toolbar w-full min-w-0",
                children: [v, D]
            }), L[75] = D, L[76] = v, L[77] = N) : N = L[77], N
        }

        function h(e) {
            return (0, o.jsx)(r.Fragment, {
                children: e.content
            }, e.id)
        }

        function f(e) {
            let t, n, r, l = (0, a.c)(16),
                {
                    children: c,
                    contentFade: d,
                    separator: u,
                    surface: g,
                    overlay: m
                } = e,
                h = void 0 !== d && d,
                f = m ?? "side-panel" === g;
            if ("window" === g || "side-panel" !== g && (0, p.a)("/space/:pageId")) {
                let e;
                return l[0] !== c || l[1] !== h || l[2] !== u ? (e = (0, o.jsx)(s.a.Header, {
                    className: "shrink-0",
                    contentFade: h,
                    separator: u,
                    children: c
                }), l[0] = c, l[1] = h, l[2] = u, l[3] = e) : e = l[3], e
            }
            if ("side-panel" === g) {
                let e, t, n = f ? "absolute inset-x-0 top-0" : "relative";
                return l[4] !== n ? (e = (0, i.b)("pointer-events-none z-30 shrink-0", n), l[4] = n, l[5] = e) : e = l[5], l[6] !== c || l[7] !== e ? (t = (0, o.jsx)("div", {
                    className: e,
                    children: c
                }), l[6] = c, l[7] = e, l[8] = t) : t = l[8], t
            }
            l[9] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(s.a.MainContentLayout, {
                layout: "custom-titlebar"
            }), l[9] = t) : t = l[9];
            let v = f ? "absolute inset-x-0 top-0" : "relative";
            return l[10] !== v ? (n = (0, i.b)("pointer-events-none z-30 shrink-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]", v), l[10] = v, l[11] = n) : n = l[11], l[12] !== c || l[13] !== u || l[14] !== n ? (r = (0, o.jsxs)(o.Fragment, {
                children: [t, (0, o.jsx)(s.a.Header, {
                    className: n,
                    inline: !0,
                    separator: u,
                    children: c
                })]
            }), l[12] = c, l[13] = u, l[14] = n, l[15] = r) : r = l[15], r
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, r, l, c, s, d, u, g = (0, a.c)(19);
                g[0] !== e ? ({
                    surface: i,
                    contentFade: r,
                    separator: l,
                    overlay: n,
                    onClose: t,
                    ...c
                } = e, g[0] = e, g[1] = t, g[2] = n, g[3] = i, g[4] = r, g[5] = l, g[6] = c) : (t = g[1], n = g[2], i = g[3], r = g[4], l = g[5], c = g[6]);
                let h = void 0 !== r && r,
                    v = void 0 === l || l;
                g[7] !== i ? (s = "window" === i || "side-panel" !== i && (0, p.a)("/space/:pageId"), g[7] = i, g[8] = s) : s = g[8];
                let b = s,
                    y = h && !b,
                    x = !b,
                    w = b ? void 0 : t;
                return g[9] !== y || g[10] !== x || g[11] !== w || g[12] !== c ? (d = (0, o.jsx)(m, {
                    ...c,
                    contentFade: y,
                    inset: x,
                    onClose: w
                }), g[9] = y, g[10] = x, g[11] = w, g[12] = c, g[13] = d) : d = g[13], g[14] !== n || g[15] !== v || g[16] !== i || g[17] !== d ? (u = (0, o.jsx)(f, {
                    surface: i,
                    separator: v,
                    overlay: n,
                    children: d
                }), g[14] = n, g[15] = v, g[16] = i, g[17] = d, g[18] = u) : u = g[18], u
            },
            b: f,
            c: m
        })
    }),
    WP5H: (function(e, t, n) {
        var o = n("QR42");
        let a = {
            kind: "icon",
            value: "graduation-cap",
            color: "blue"
        };
        n.d(t, {}, {
            a: async function(e, t, i) {
                let {
                    withPageMenuSession: r
                } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(226913), n.e(753405), n.e(193172), n.e(942473)]).then(n.bind(n, "tKju"));
                i() && await r(e, t, "write", async e => {
                    i() && null == e.getSymbol() && null == (0, o.fc)(e.document.getText("title").toJSON()).emoji && e.mutateDocument(e => (0, o.bc)(e, a)) && await e.flush({
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
            i = n("BolX"),
            r = n("ASxG"),
            l = n("dQRk"),
            c = n("C9uP"),
            s = n("sjCL"),
            d = n("YF6h"),
            p = n("tSEg"),
            u = n("kpIY"),
            g = n("Nwp9"),
            m = n("Iq2T");
        let h = "spaces-workspace-chat-selections-v1",
            f = r.record(r.string(), r.object({
                ownerClientThreadId: r.string(),
                selection: c.b.nullable()
            }).or(r.object({
                ownerClientThreadId: r.string(),
                ownerSelected: r.boolean(),
                recentChats: r.array(c.b.nullable())
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
        var o = n("HT1b"),
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
            l = o.hd.map(function(e) {
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
        var o = n("BolX"),
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
            i = n("BolX"),
            r = n("jqIZ"),
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
                    e.defaultPrevented || 0 !== e.button || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (0, c.a)(g, s.a)
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