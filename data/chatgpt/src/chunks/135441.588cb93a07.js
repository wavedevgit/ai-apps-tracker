export const __rspack_esm_ids = [135441];
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
            PageDocumentEnd: "PageDocumentEnd-x1pPbt",
            pageDocumentEnd: "PageDocumentEnd-x1pPbt",
            PageDocumentGrid: "PageDocumentGrid-dPPMDP",
            pageDocumentGrid: "PageDocumentGrid-dPPMDP",
            PageDocumentTheme: "PageDocumentTheme-LGlBUd",
            pageDocumentTheme: "PageDocumentTheme-LGlBUd",
            PageReadingColumn: "PageReadingColumn-izakcl",
            pageReadingColumn: "PageReadingColumn-izakcl",
            PageImageLift: "PageImageLift-FIiTnL",
            pageImageLift: "PageImageLift-FIiTnL",
            PageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            pageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            PageControlFrame: "PageControlFrame-QLBvFz",
            pageControlFrame: "PageControlFrame-QLBvFz",
            PageActiveBlockHandle: "PageActiveBlockHandle-icbfqW",
            pageActiveBlockHandle: "PageActiveBlockHandle-icbfqW",
            PageDisclosureControl: "PageDisclosureControl-eBxfK0",
            pageDisclosureControl: "PageDisclosureControl-eBxfK0",
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
            "page-image-caret-blink": "page-image-caret-blink-sCb03h",
            pageImageCaretBlink: "page-image-caret-blink-sCb03h",
            PrintDocument: "PrintDocument-hzBPk2",
            printDocument: "PrintDocument-hzBPk2"
        }
    }),
    NWQi: (function() {}),
    C9uP: (function(e, t, n) {
        var o = n("hV9T"),
            a = n("ASxG"),
            r = n("OOaz");
        let i = a.discriminatedUnion("kind", [a.object({
            kind: a.literal("local"),
            conversationId: a.string().transform(o.Ve),
            hostId: a.string()
        }), a.object({
            kind: a.literal("chatgpt"),
            conversationId: a.string().transform(r.c),
            title: a.string()
        })]);
        n.d(t, {}, {
            a: function(e, t) {
                return null == e || null == t ? e === t : e.kind === t.kind && e.conversationId === t.conversationId && ("local" !== e.kind || "local" === t.kind && e.hostId === t.hostId)
            },
            b: i
        })
    }),
    sjCL: (function(e, t, n) {
        var o = n("BolX"),
            a = n("OFP1");
        n("njX7");
        var r = n("u4MG"),
            i = n("kois"),
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
                null != e && (o = (0, r.a)(e.projectId) ? e.projectId : (0, s.a)(e.projectId, n(m.h), n(d.a)) ?? null);
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
                    get: r,
                    scope: l
                } = t, c = r(h.b), s = c?.getSession(l);
                if (null != c && l.value.persistentWorkspace?.key !== "/space" || s?.conversationId != null) return !1;
                if (l.value.persistentWorkspace?.key === "/space" && r(f.d, {
                        accountId: n,
                        pageId: o
                    }) || null != n && null != (0, f.b)(l, n, o, "tpp", r(f.f)) && r(i.m)?.hasConversation) return !0;
                if (!r(a.t)) return r(a.r);
                if (!r(v)) return !1;
                let d = r(y, null == s ? null : r(u.a, s.clientThreadId));
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
                    let r = Math.max(0, o.left),
                        i = Math.min(a.innerWidth, o.right),
                        l = Math.max(0, o.top),
                        c = Math.min(a.innerHeight, o.bottom);
                    if (i <= r || c <= l) return null;
                    for (let o = n.parentElement; null != o; o = o.parentElement) {
                        let n = t.get(o);
                        if (null == n) {
                            let r = a.getComputedStyle(o),
                                i = e(o),
                                l = o.offsetWidth > 0 ? i.width / o.offsetWidth : 1;
                            n = {
                                x: /auto|scroll|hidden|clip/u.test(r.overflowX),
                                y: /auto|scroll|hidden|clip/u.test(r.overflowY),
                                rect: DOMRect.fromRect({
                                    x: i.left + o.clientLeft * l,
                                    y: i.top + o.clientTop * l,
                                    width: o.clientWidth * l,
                                    height: o.clientHeight * l
                                })
                            }, t.set(o, n)
                        }
                        n.x && (r = Math.max(r, n.rect.left), i = Math.min(i, n.rect.right)), n.y && (l = Math.max(l, n.rect.top), c = Math.min(c, n.rect.bottom))
                    }
                    return i > r && c > l ? DOMRect.fromRect({
                        x: r,
                        y: l,
                        width: i - r,
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
                    r = a?.width ?? n.innerWidth,
                    i = a?.height ?? n.innerHeight,
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
                if (!(s <= 0) && !(d <= 0) && !(l >= r) && !(c >= i) && !(l + s <= 0) && !(c + d <= 0)) return {
                    x: l,
                    y: c,
                    width: s,
                    height: d,
                    viewportWidth: r
                }
            },
            c: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e.getBoundingClientRect(),
                    o = e.matches("table") ? e.querySelector("tr") : e.querySelector(':scope > hr, :scope > [data-page-agent-instructions="toggle"], :scope > [data-composer-code-block-toolbar] > [data-page-code-block-controls]');
                if (null != o) return n(o);
                let a = "p, h1, h2, h3, h4, h5, h6, pre",
                    r = e.matches(a) ? e : e.querySelector(a) ?? e,
                    i = n(r),
                    l = r.ownerDocument.defaultView?.getComputedStyle(r),
                    c = Number.parseFloat(l?.lineHeight ?? "") * t;
                return DOMRect.fromRect({
                    x: i.left,
                    y: i.top + Number.parseFloat(l?.paddingTop ?? "0") * t,
                    width: i.width,
                    height: Number.isFinite(c) ? Math.min(i.height, c) : i.height
                })
            },
            d: function(e, t) {
                let n = e.defaultView;
                if (null == n) return;
                let o = n.visualViewport,
                    {
                        x: a,
                        y: r
                    } = t;
                if (null != o && (0 !== o.offsetLeft || 0 !== o.offsetTop)) {
                    let t = e.documentElement.getBoundingClientRect();
                    a -= t.left + o.pageLeft, r -= t.top + o.pageTop
                }
                return {
                    x: a,
                    y: r,
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
                    r = t.getBoundingClientRect();
                if (!o.width || !o.height || o.left < Math.max(a.left, r.left) || o.right > Math.min(a.right, r.right) || o.top < r.top || o.bottom > r.bottom) return !1;
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
                let r = t.parentElement?.querySelector(":scope > [data-page-reading-column]"),
                    i = t.closest("[data-page-document-scroll]");
                if (null == r || null == i) return void e.removeAttribute("data-page-attribution-fits");
                let l = r.getBoundingClientRect(),
                    c = o ? l.right : l.left;
                for (let e of t.querySelectorAll('[data-page-block-layout="full-width"] > [data-page-block-viewport] > :first-child')) {
                    let t = e.getBoundingClientRect();
                    t.width > 0 && (c = o ? Math.max(c, t.right) : Math.min(c, t.left))
                }
                let s = i.getBoundingClientRect().left + i.clientLeft * a,
                    d = s + i.clientWidth * a,
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
                    zoom: r,
                    viewport: i
                } = e, l = Math.max(n.left, i?.left ?? n.left), c = Math.min(n.right, i?.right ?? n.right);
                return Math.abs(t - ("start" === o !== a ? l : c)) <= 150 * r
            }
        })
    }),
    VhyV: (function(e, t, n) {
        n.d(t, {
            a: () => d
        });
        var o = n("ABep"),
            a = n("QosV"),
            r = n("on57"),
            i = n("zd8w"),
            l = n("wD9O"),
            c = n("aAWW"),
            s = n("b7SN");

        function d(e) {
            let t, n, d, p, u, g, m, h = (0, a.c)(21),
                {
                    children: f,
                    className: v,
                    anchorSelector: b,
                    edge: y,
                    active: x,
                    revealOnHover: w
                } = e,
                j = void 0 === y ? "start" : y,
                k = void 0 !== w && w,
                C = (0, i.useRef)(null),
                [I, P] = (0, i.useState)(!1),
                M = (0, l.c)();
            h[0] !== j || h[1] !== M ? (t = (e, t) => {
                if (e.buttons > 0 || "touch" === e.pointerType) return;
                let n = t.getBoundingClientRect();
                P(e.clientY >= n.top && e.clientY <= n.bottom && (0, s.a)({
                    clientX: e.clientX,
                    bounds: n,
                    edge: j,
                    rtl: "rtl" === getComputedStyle(t).direction,
                    zoom: M,
                    viewport: t.closest("[data-page-block-viewport]")?.getBoundingClientRect()
                }))
            }, h[0] = j, h[1] = M, h[2] = t) : t = h[2];
            let A = (0, i.useEffectEvent)(t);
            h[3] !== b || h[4] !== A || h[5] !== k ? (n = () => {
                if (k) return;
                let e = C.current?.closest(b),
                    t = e?.closest("[data-page-block-row], [data-page-edge-region]") ?? e?.closest("[data-page-reading-column]")?.parentElement ?? e;
                if (null == e || null == t) return;
                let n = t => A(t, e),
                    o = () => P(!1);
                return t.addEventListener("pointermove", n), t.addEventListener("pointerleave", o), () => {
                    t.removeEventListener("pointermove", n), t.removeEventListener("pointerleave", o), o()
                }
            }, h[3] = b, h[4] = A, h[5] = k, h[6] = n) : n = h[6], h[7] !== b || h[8] !== k ? (d = [b, k], h[7] = b, h[8] = k, h[9] = d) : d = h[9], (0, i.useEffect)(n, d), h[10] !== I || h[11] !== k ? (p = () => {
                if (!I || k) return;
                let e = C.current?.ownerDocument,
                    t = () => {
                        P(!1), (0, c.b)()
                    };
                return e?.addEventListener("scroll", t, !0), e?.addEventListener("visibilitychange", t), e?.defaultView?.addEventListener("blur", t), () => {
                    e?.removeEventListener("scroll", t, !0), e?.removeEventListener("visibilitychange", t), e?.defaultView?.removeEventListener("blur", t)
                }
            }, u = [I, k], h[10] = I, h[11] = k, h[12] = p, h[13] = u) : (p = h[12], u = h[13]), (0, i.useEffect)(p, u);
            let T = k && "surfaceHover-pLB5VJ";
            h[14] !== v || h[15] !== T ? (g = (0, r.b)("controls-eQKgLq", T, v), h[14] = v, h[15] = T, h[16] = g) : g = h[16];
            let S = !k && (I || void 0 !== x && x) || void 0;
            return h[17] !== f || h[18] !== g || h[19] !== S ? (m = (0, o.jsx)("span", {
                ref: C,
                className: g,
                "data-page-edge-controls": !0,
                "data-visible": S,
                children: f
            }), h[17] = f, h[18] = g, h[19] = S, h[20] = m) : m = h[20], m
        }
    }),
    fAHU: (function(e, t, n) {
        n.d(t, {
            a: () => r
        });
        var o = n("ABep"),
            a = n("QosV");

        function r(e) {
            let t, n, r = (0, a.c)(5),
                {
                    children: i,
                    rootSpaceId: l
                } = e;
            return r[0] !== l ? (t = null, r[0] = l, r[1] = t) : t = r[1], r[2] !== i || r[3] !== t ? (n = (0, o.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [i, t]
            }), r[2] = i, r[3] = t, r[4] = n) : n = r[4], n
        }
        n("BolX"), n("mpAT"), n("oyQi"), n("Ko17"), n("nvO1"), n("iycc")
    }),
    i9us: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("LPKZ"),
            i = n.n(r),
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
        var j = n("El6m"),
            k = n("eviP"),
            C = n("JwNp");

        function I() {
            return null
        }(0, l.d)(w.a, (e, t) => {
            let {
                get: n,
                scope: o
            } = t;
            return n(k.b)?.getSession(o)?.conversationId != null || null != e && n(x.b, {
                accountId: n(f.e),
                pageId: e
            })
        }), n.d(t, {}, {
            a: function(e) {
                let t, n, r = (0, a.c)(5),
                    {
                        pageId: x
                    } = e,
                    w = (0, l.z)(f.e),
                    k = (0, l.x)(y.loadedSpacePageMetadata$, x ?? null);
                r[0] !== w || r[1] !== x ? (t = {
                    accountId: w,
                    pageId: x
                }, r[0] = w, r[1] = x, r[2] = t) : t = r[2];
                let P = (0, l.x)(v.e, t),
                    M = (0, l.z)(b.c);
                return P || null != M ? null : (r[3] !== k?.document_type ? (n = (0, o.jsx)("div", {
                    inert: !0,
                    "aria-hidden": !0,
                    children: (0, o.jsx)(j.a, {
                        value: "expanded",
                        children: (0, o.jsx)(h.a, {
                            isMinimized: !1,
                            onMinimizedChange: i(),
                            presentation: "compact",
                            renderTranscript: I,
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
                                            children: (0, o.jsx)(m.Cg, {})
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
                                                                documentType: k?.document_type ?? "page"
                                                            },
                                                            defaultMessage: "{documentType, select, granola_presentation {Work with this slide…} granola_workbook {Work with this sheet…} other {Work with this page…}}",
                                                            description: "Placeholder in the floating Page chat composer. documentType selects slide, sheet, or page for the current document."
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
                                                children: (0, o.jsx)(m.$c, {})
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
                }), r[3] = k?.document_type, r[4] = n) : n = r[4], n)
            }
        })
    }),
    r1wd: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("on57"),
            i = n("BolX"),
            l = n("X3K1"),
            c = n("SCmN"),
            s = n("WP5H"),
            d = n("Ih0z"),
            p = n("mpAT"),
            u = n("kTTh"),
            g = n("fAHU"),
            m = n("i9us"),
            h = n("loXp"),
            f = n("Jif0"),
            v = n("fQMn");

        function b(e) {
            let t, n, m, h, b, x, w, j, k, C, I, P, M = (0, a.c)(39),
                {
                    appearance: A,
                    pageId: T,
                    space: S,
                    spaceId: E,
                    title: D,
                    symbol: B
                } = e;
            M[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                enabled: !1
            }, M[0] = t) : t = M[0];
            let {
                data: _
            } = (0, i.x)(p.spaceQuery$, E ?? "", t), N = S ?? _, z = T ?? N?.root_page_id ?? "", L = (0, i.x)(p.loadedSpacePageMetadata$, z), R = (0, i.x)(c.b, z), W = N?.id ?? E;
            M[1] !== W ? (n = {
                spaceId: W
            }, M[1] = W, M[2] = n) : n = M[2], M[3] === Symbol.for("react.memo_cache_sentinel") ? (m = {
                enabled: !1
            }, M[3] = m) : m = M[3];
            let F = (0, i.x)(d.d, n, m),
                O = A ?? F,
                V = null != N || null != E || null != A,
                q = null == L ? N?.symbol ?? B ?? null : L.symbol ?? null;
            if (V && null == q) {
                let e;
                M[4] !== O ? (e = (0, d.a)(O), M[4] = O, M[5] = e) : e = M[5], q = e
            }
            let H = null == N ? L?.title ?? D : D ?? N.name;
            if (!V && null == q && null != H) {
                let e;
                M[6] !== H ? (e = (0, u.b)(H), M[6] = H, M[7] = e) : e = M[7];
                let t = e;
                if (H = t.title, null != t.emoji) {
                    let e;
                    M[8] !== t.emoji ? (e = {
                        kind: "emoji",
                        value: t.emoji
                    }, M[8] = t.emoji, M[9] = e) : e = M[9], q = e
                }
            }
            R && !V && null == q && (q = s.b);
            let K = null == H,
                Q = N?.id ?? E,
                X = L?.document_type,
                G = L?.namespace,
                $ = O?.theme;
            M[10] !== V || M[11] !== q || M[12] !== X || M[13] !== G || M[14] !== $ ? (h = (0, o.jsx)(v.a, {
                disabled: !0,
                legacyEmoji: null,
                documentType: X,
                namespace: G,
                symbol: q,
                space: V,
                spaceTheme: $,
                onChange: y
            }), M[10] = V, M[11] = q, M[12] = X, M[13] = G, M[14] = $, M[15] = h) : h = M[15];
            let J = K && "w-64 max-w-full";
            M[16] !== J ? (b = (0, r.b)("relative min-w-0", J), M[16] = J, M[17] = b) : b = M[17];
            let U = K ? "invisible" : void 0,
                Z = K || void 0;
            return M[18] !== H || M[19] !== K ? (x = K ? "" : (H ?? "").replace(/[\r\n]+/g, " "), M[18] = H, M[19] = K, M[20] = x) : x = M[20], M[21] !== x ? (w = (0, o.jsx)(f.a, {
                disabled: !0,
                readOnly: !0,
                value: x
            }), M[21] = x, M[22] = w) : w = M[22], M[23] !== U || M[24] !== Z || M[25] !== w ? (j = (0, o.jsx)("div", {
                className: U,
                "aria-hidden": Z,
                children: w
            }), M[23] = U, M[24] = Z, M[25] = w, M[26] = j) : j = M[26], M[27] !== K ? (k = K ? (0, o.jsx)("div", {
                className: "absolute inset-0 flex items-center",
                children: (0, o.jsx)(l.a, {
                    className: "w-full",
                    size: "lg",
                    variant: "chatgpt-project"
                })
            }) : null, M[27] = K, M[28] = k) : k = M[28], M[29] !== b || M[30] !== j || M[31] !== k ? (C = (0, o.jsxs)("div", {
                className: b,
                children: [j, k]
            }), M[29] = b, M[30] = j, M[31] = k, M[32] = C) : C = M[32], M[33] !== C || M[34] !== h ? (I = (0, o.jsxs)("div", {
                className: "relative flex flex-col gap-2",
                "data-page-title": !0,
                children: [h, C]
            }), M[33] = C, M[34] = h, M[35] = I) : I = M[35], M[36] !== I || M[37] !== Q ? (P = (0, o.jsx)(g.a, {
                rootSpaceId: Q,
                children: I
            }), M[36] = I, M[37] = Q, M[38] = P) : P = M[38], P
        }

        function y() {}
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, s, d, u, g, f, v = (0, a.c)(28),
                    {
                        pageId: y,
                        spaceId: x,
                        title: w,
                        symbol: j,
                        headerOverlay: k,
                        showComposer: C
                    } = e,
                    I = void 0 !== C && C;
                v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    enabled: !1
                }, v[0] = t) : t = v[0];
                let {
                    data: P
                } = (0, i.z)(p.spacesQuery$, t);
                v[1] !== y || v[2] !== x || v[3] !== P?.items || v[4] !== P?.items.find ? (n = P?.items.find(e => null == y ? e.id === x : e.root_page_id === y), v[1] = y, v[2] = x, v[3] = P?.items, v[4] = P?.items.find, v[5] = n) : n = v[5];
                let M = n,
                    A = void 0 !== k && k && "viewer-header-scroll-mask pt-[var(--viewer-header-height)]";
                v[6] !== A ? (l = (0, r.b)("min-h-0 flex-1 scrollbar-stable overflow-y-auto", A), v[6] = A, v[7] = l) : l = v[7], v[8] !== y || v[9] !== M || v[10] !== j || v[11] !== w ? (c = (0, o.jsx)(b, {
                    pageId: y,
                    space: M,
                    title: w,
                    symbol: j
                }), v[8] = y, v[9] = M, v[10] = j, v[11] = w, v[12] = c) : c = v[12];
                let T = y ?? M?.root_page_id ?? x ?? "";
                return v[13] !== T ? (s = (0, o.jsx)(h.b, {
                    pageId: T
                }), v[13] = T, v[14] = s) : s = v[14], v[15] !== c || v[16] !== s ? (d = (0, o.jsx)(h.a, {
                    heading: c,
                    children: s
                }), v[15] = c, v[16] = s, v[17] = d) : d = v[17], v[18] !== d || v[19] !== l ? (u = (0, o.jsx)("div", {
                    className: l,
                    children: d
                }), v[18] = d, v[19] = l, v[20] = u) : u = v[20], v[21] !== y || v[22] !== I || v[23] !== M?.root_page_id ? (g = I && (0, o.jsx)(m.a, {
                    pageId: y ?? M?.root_page_id
                }), v[21] = y, v[22] = I, v[23] = M?.root_page_id, v[24] = g) : g = v[24], v[25] !== u || v[26] !== g ? (f = (0, o.jsxs)(o.Fragment, {
                    children: [u, g]
                }), v[25] = u, v[26] = g, v[27] = f) : f = v[27], f
            },
            b: b
        })
    }),
    loXp: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("on57"),
            i = n("IPUh"),
            l = n("BolX"),
            c = n("CJrD"),
            s = n("Wf1j"),
            d = n("X3K1"),
            p = n("ADAj"),
            u = n("wHSK"),
            g = n("msAz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, d, m, h, f, v, b, y, x, w, j, k, C, I = (0, a.c)(32);
                I[0] !== e ? ({
                    heading: n,
                    externalEditingControls: h,
                    messages: d,
                    compact: f,
                    headingOutside: v,
                    headingRef: s,
                    children: t,
                    ...m
                } = e, I[0] = e, I[1] = t, I[2] = n, I[3] = s, I[4] = d, I[5] = m, I[6] = h, I[7] = f, I[8] = v) : (t = I[1], n = I[2], s = I[3], d = I[4], m = I[5], h = I[6], f = I[7], v = I[8]);
                let P = void 0 !== h && h,
                    M = void 0 !== f && f,
                    A = void 0 !== v && v;
                I[9] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, c.a)(), I[9] = b) : b = I[9];
                let T = (0, p.k)(b.fullWidth),
                    S = (0, l.z)(u.b),
                    E = M || P ? "py-4" : A ? "pt-4 pb-panel" : "pt-10 pb-panel";
                I[10] !== E ? (y = (0, r.b)(g.a.PageContent, E), I[10] = E, I[11] = y) : y = I[11];
                let D = M || void 0,
                    B = A || void 0,
                    _ = T || P || void 0,
                    N = S || void 0,
                    z = P || void 0;
                I[12] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, o.jsx)("span", {
                    className: g.a.PageReadingWidthMeasure,
                    "aria-hidden": !0,
                    "data-page-comment-content-width": !0
                }), I[12] = x) : x = I[12];
                let L = M && "mb-4";
                return I[13] !== L ? (w = (0, r.b)("flex flex-col gap-2 empty:hidden", L), I[13] = L, I[14] = w) : w = I[14], I[15] !== d || I[16] !== w ? (j = (0, o.jsx)("div", {
                    className: w,
                    children: d
                }), I[15] = d, I[16] = w, I[17] = j) : j = I[17], I[18] !== n || I[19] !== s || I[20] !== j ? (k = (0, o.jsxs)("div", {
                    ref: s,
                    className: `${g.a.PageReadingColumn} flex flex-col gap-6`,
                    "data-page-reading-column": !0,
                    children: [x, j, n]
                }), I[18] = n, I[19] = s, I[20] = j, I[21] = k) : k = I[21], I[22] !== t || I[23] !== m || I[24] !== N || I[25] !== z || I[26] !== k || I[27] !== y || I[28] !== D || I[29] !== B || I[30] !== _ ? (C = (0, o.jsxs)(i.a.div, {
                    ...m,
                    className: y,
                    "data-compact": D,
                    "data-page-heading-outside": B,
                    "data-page-full-width": _,
                    "data-page-typography": N,
                    "data-native-controls": z,
                    children: [k, t]
                }), I[22] = t, I[23] = m, I[24] = N, I[25] = z, I[26] = k, I[27] = y, I[28] = D, I[29] = B, I[30] = _, I[31] = C) : C = I[31], C
            },
            b: function(e) {
                let t, n, r, i = (0, a.c)(7),
                    {
                        pageId: l
                    } = e,
                    c = (0, s.a)();
                return i[0] !== c ? (t = c.formatMessage({
                    id: "codex.space.page.contentLoading",
                    defaultMessage: "Loading page content",
                    description: "Accessible status announced while a Page's collaborative document loads beneath its already visible title in the Space"
                }), i[0] = c, i[1] = t) : t = i[1], i[2] !== l ? (n = (0, o.jsx)(d.b, {
                    seed: l,
                    size: "md",
                    variant: "chatgpt-project"
                }), i[2] = l, i[3] = n) : n = i[3], i[4] !== t || i[5] !== n ? (r = (0, o.jsx)("div", {
                    className: g.a.PageReadingColumn,
                    "aria-label": t,
                    role: "status",
                    children: n
                }), i[4] = t, i[5] = n, i[6] = r) : r = i[6], r
            },
            c: function(e) {
                let t, n, r = (0, a.c)(5),
                    {
                        externalEditingControls: i,
                        onTouch: l
                    } = e,
                    c = void 0 !== i && i || void 0;
                return r[0] !== l ? (t = e => {
                    "pointerType" in e.nativeEvent && "touch" === e.nativeEvent.pointerType && l()
                }, r[0] = l, r[1] = t) : t = r[1], r[2] !== c || r[3] !== t ? (n = (0, o.jsx)("div", {
                    "aria-hidden": !0,
                    className: g.a.PageDocumentEnd,
                    "data-native-controls": c,
                    "data-page-document-end": !0,
                    "data-page-document-trailing-space": !0,
                    onClick: t
                }), r[2] = c, r[3] = t, r[4] = n) : n = r[4], n
            }
        })
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
                    r = (a ? n : e.slice(-2)) + t,
                    i = o.find(e => {
                        let [t] = e;
                        return r.endsWith(t)
                    });
                return null == i ? void 0 : {
                    shortcut: i[0],
                    glyph: i[1],
                    from: e.length - (a ? 1 : i[0].length - 1),
                    continuation: a
                }
            },
            b: function(e, t, n, o) {
                let r;
                if (a(e, n) || e.includes("](") && e.lastIndexOf("](") > e.lastIndexOf(")")) return !0;
                if ('"' !== t) {
                    let n = e + t;
                    if (/https?:\/\/|www\./i.test(n)) {
                        let e = /(?:^|[\s"“”])([^\s"“”]*)$/.exec(n)?.[1];
                        if (null != e && /https?:\/\/|www\./i.test(e)) return !0
                    }
                }
                if (!e.includes("`")) return !1;
                let i = o?.parent.type.schema.marks.code,
                    l = e;
                if (null != o && null != i) {
                    let t = [],
                        n = 0;
                    o.parent.nodesBetween(0, e.length, (o, a) => {
                        if (null == i.isInSet(o.marks)) return;
                        let r = Math.min(e.length, a + o.nodeSize);
                        return t.push(e.slice(n, a), e.slice(a, r).replace(/`/g, " ")), n = r, !1
                    }), n > 0 && (l = t.join("") + e.slice(n))
                }
                for (let e of l.matchAll(/`+/g)) r === e[0] ? r = void 0 : null != r || a(l, e.index) || (r = e[0]);
                return null != r
            }
        })
    }),
    Jif0: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("CJrD"),
            i = n("zd8w"),
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
                        ...j
                    } = e,
                    k = (0, l.a)();
                x[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.a)(), x[0] = t) : t = x[0];
                let C = (0, s.k)(t.smartPunctuationEnabled),
                    I = (0, i.useRef)(void 0),
                    P = (0, i.useRef)(!1),
                    M = (0, i.useRef)(!1),
                    A = (0, d.a)(j.ref, e => {
                        if (null == e || null == w) return;
                        let t = e => {
                            !e.defaultPrevented && !e.isComposing && !M.current && ("historyUndo" === e.inputType || "historyRedo" === e.inputType) && w("historyUndo" === e.inputType ? "undo" : "redo") && e.preventDefault()
                        };
                        return e.addEventListener("beforeinput", t), () => e.removeEventListener("beforeinput", t)
                    });
                return x[1] !== k || x[2] !== j ? (n = j["aria-label"] ?? k.formatMessage({
                    id: "codex.space.page.titleLabel",
                    defaultMessage: "Page title",
                    description: "Accessible label for the editable title input above a Page document in the Space"
                }), x[1] = k, x[2] = j, x[3] = n) : n = x[3], x[4] !== k ? (g = k.formatMessage(c.c.untitled), x[4] = k, x[5] = g) : g = x[5], x[6] !== j.onPaste ? (m = e => {
                    I.current = void 0,
                        function(e, t, n) {
                            n.current = !0;
                            try {
                                t?.(e)
                            } finally {
                                n.current = !1
                            }
                        }(e, j.onPaste, P)
                }, x[6] = j.onPaste, x[7] = m) : m = x[7], x[8] !== j ? (h = e => {
                    j.onKeyDown?.(e);
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
                    null != n && (t.value !== n.value || t.selectionStart !== n.caret || t.selectionEnd !== n.caret) && (I.current = void 0), j.onSelect?.(e)
                }, x[8] = j, x[9] = h, x[10] = f) : (h = x[9], f = x[10]), x[11] !== j || x[12] !== C ? (v = e => {
                    j.onInput?.(e);
                    let t = e.currentTarget,
                        n = e.nativeEvent,
                        o = I.current;
                    if (n instanceof InputEvent && null != o) {
                        if ("historyUndo" === n.inputType && t.value === o.value.slice(0, o.caret - 1) + o.shortcut + o.value.slice(o.caret)) return void t.setSelectionRange(t.selectionEnd, t.selectionEnd);
                        if ("historyRedo" === n.inputType && t.value === o.value) return
                    }
                    if (I.current = void 0, P.current || !C || t.disabled || t.readOnly || !(n instanceof InputEvent) || n.isComposing || "insertText" !== n.inputType || n.data?.length !== 1 || !"\"'.=>-".includes(n.data) || t.selectionStart !== t.selectionEnd) return;
                    let a = n.data,
                        r = t.value,
                        i = t.selectionStart,
                        l = r.slice(0, i - a.length),
                        c = (0, p.a)(l, a, o?.caret === i - 1 && o.value === l + r.slice(i) ? o.shortcut : void 0);
                    null == c || (0, p.b)(l, a, c.from) || queueMicrotask(() => {
                        if (t.ownerDocument.activeElement === t && !t.disabled && !t.readOnly && t.value === r && t.selectionStart === i && t.selectionEnd === i) {
                            if (t.setSelectionRange(c.from, i), c.continuation) {
                                if (!t.ownerDocument.execCommand("insertText", !1, c.shortcut) || t.value !== r.slice(0, c.from) + c.shortcut + r.slice(i)) return;
                                t.setSelectionRange(c.from, c.from + c.shortcut.length)
                            }
                            t.ownerDocument.execCommand("insertText", !1, c.glyph) && (I.current = {
                                value: t.value,
                                caret: t.selectionStart,
                                shortcut: c.shortcut
                            })
                        }
                    })
                }, x[11] = j, x[12] = C, x[13] = v) : v = x[13], x[14] !== j ? (b = e => {
                    I.current = void 0, j.onBlur?.(e)
                }, x[14] = j, x[15] = b) : b = x[15], x[16] !== j || x[17] !== A || x[18] !== n || x[19] !== g || x[20] !== m || x[21] !== h || x[22] !== f || x[23] !== v || x[24] !== b ? (y = (0, o.jsx)("textarea", {
                    ...j,
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
                }), x[16] = j, x[17] = A, x[18] = n, x[19] = g, x[20] = m, x[21] = h, x[22] = f, x[23] = v, x[24] = b, x[25] = y) : y = x[25], y
            }
        })
    }),
    fQMn: (function(e, t, n) {
        n.d(t, {
            a: () => P
        });
        var o = n("ABep"),
            a = n("QosV"),
            r = n("slpy"),
            i = n("on57"),
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
            j = n("VhyV"),
            k = n("TwSq");

        function C(e) {
            let t, n, r = (0, a.c)(11),
                {
                    children: i,
                    emoji: c,
                    findContextId: s
                } = e,
                d = (0, l.z)(k.h),
                p = (0, l.z)(k.g);
            if (r[0] !== p?.id || r[1] !== c || r[2] !== s || r[3] !== d) {
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
                }) ?? e?.[0], r[0] = p?.id, r[1] = c, r[2] = s, r[3] = d, r[4] = t
            } else t = r[4];
            let u = t;
            if (u?.location.domain !== "page") {
                let e;
                return r[5] !== i ? (e = (0, o.jsx)(o.Fragment, {
                    children: i
                }), r[5] = i, r[6] = e) : e = r[6], e
            }
            let g = p?.id === u.id ? "" : void 0;
            return r[7] !== i || r[8] !== u.location.from || r[9] !== g ? (n = (0, o.jsx)("mark", {
                className: "inline-flex rounded-2xs text-inherit",
                "data-active": g,
                "data-page-find-match": !0,
                "data-page-find-title-match": u.location.from,
                children: i
            }), r[7] = i, r[8] = u.location.from, r[9] = g, r[10] = n) : n = r[10], n
        }
        n("NWQi");
        var I = n("msAz");

        function P(e) {
            let t, n, k, P, S, E, D, B, _, N, z, L, R, W, F, O, V, q, H, K = (0, a.c)(88),
                Q = (0, s.a)(),
                [X, G] = (0, c.useState)(!1),
                $ = (0, c.useRef)(null),
                J = (0, c.useRef)(null),
                U = (0, m.a)("(max-width: 767px)");
            K[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => G(!1), K[0] = t) : t = K[0];
            let Z = t,
                {
                    symbol: Y,
                    disabled: ee,
                    space: et,
                    spaceTheme: en
                } = e,
                eo = U && !et,
                ea = (0, l.x)(h.a, {
                    documentType: et ? void 0 : e.documentType,
                    namespace: et ? null : e.namespace,
                    surface: "editor"
                })?.[32],
                er = null != Y && "none" !== Y.kind || null != ea,
                ei = !er && !et && (U || e.externalEditingControls || null != e.openNativePicker),
                el = e.externalEditingControls && et && !er;
            if (K[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => () => {
                    J.current?.abort(), J.current = null
                }, K[1] = n) : n = K[1], K[2] !== ee || K[3] !== el ? (k = [el, ee], K[2] = ee, K[3] = el, K[4] = k) : k = K[4], (0, c.useLayoutEffect)(n, k), (ee || el) && X && Z(), el) return null;
            K[5] !== ei || K[6] !== Q ? (P = ei ? Q.formatMessage({
                id: "codex.space.page.symbol.add",
                defaultMessage: "Add icon",
                description: "Opens the symbol picker for a mobile Page without an icon"
            }) : Q.formatMessage({
                id: "codex.space.page.symbol.change",
                defaultMessage: "Change icon",
                description: "Accessible label and tooltip for the shared Page and Space symbol picker beside the title"
            }), K[5] = ei, K[6] = Q, K[7] = P) : P = K[7];
            let ec = P;
            K[8] !== ea ? (S = null == ea ? (0, o.jsx)(u.bd, {}) : (0, o.jsx)(ea, {}), K[8] = ea, K[9] = S) : S = K[9];
            let es = S,
                ed = es;
            if (Y?.kind === "emoji") {
                let e;
                K[10] !== Y.value ? (e = (0, o.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, o.jsx)(y.a, {
                        emoji: Y.value,
                        size: "large"
                    })
                }), K[10] = Y.value, K[11] = e) : e = K[11], ed = e
            } else if (Y?.kind === "icon") {
                let e, t;
                K[12] !== es || K[13] !== et ? (e = et ? (0, o.jsx)(u.Cc, {
                    className: "size-12"
                }) : es, K[12] = es, K[13] = et, K[14] = e) : e = K[14], K[15] !== Y.color || K[16] !== Y.value || K[17] !== e ? (t = (0, o.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, o.jsx)(v.a, {
                        className: "size-12",
                        color: Y.color,
                        defaultIcon: e,
                        icon: Y.value
                    })
                }), K[15] = Y.color, K[16] = Y.value, K[17] = e, K[18] = t) : t = K[18], ed = t
            }
            if (null != e.legacyEmoji) {
                let t;
                K[19] !== ed || K[20] !== e.findContextId || K[21] !== e.legacyEmoji ? (t = (0, o.jsx)(C, {
                    emoji: e.legacyEmoji,
                    findContextId: e.findContextId,
                    children: ed
                }), K[19] = ed, K[20] = e.findContextId, K[21] = e.legacyEmoji, K[22] = t) : t = K[22], ed = t
            }
            let ep = ei ? "iconTouch" : "compact",
                eu = er ? "self-start" : "absolute end-0 top-1/2 -translate-y-1/2",
                eg = ei && "max-w-(--page-control-gutter)";
            K[23] !== eu || K[24] !== eg ? (E = (0, i.b)(eu, eg), K[23] = eu, K[24] = eg, K[25] = E) : E = K[25];
            let em = er ? "ghostMuted" : "ghost",
                eh = er ? void 0 : "small",
                ef = er ? "iconLarge" : ep,
                ev = !er;
            K[26] !== ee || K[27] !== ed || K[28] !== ec || K[29] !== ef || K[30] !== ev || K[31] !== E || K[32] !== em || K[33] !== eh ? (D = (0, o.jsx)(d.a, {
                ref: $,
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
            }), K[26] = ee, K[27] = ed, K[28] = ec, K[29] = ef, K[30] = ev, K[31] = E, K[32] = em, K[33] = eh, K[34] = D) : D = K[34];
            let eb = D;
            if (ee) {
                let e;
                return er ? (K[35] !== ed ? (e = (0, o.jsx)("span", {
                    className: "flex size-16 items-center justify-center border border-transparent",
                    children: ed
                }), K[35] = ed, K[36] = e) : e = K[36], e) : null
            }
            K[37] !== ee || K[38] !== Q || K[39] !== e || K[40] !== Y ? (B = async function() {
                if (ee) return;
                J.current?.abort(), J.current = null;
                let t = $.current;
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
                }(t, Y, Q);
                if (null == n) return void G(!0);
                let o = new AbortController;
                J.current = o;
                let a = await e.openNativePicker(n, o.signal);
                if (!o.signal.aborted) {
                    if (J.current = null, "unsupported" === a.outcome || "error" === a.outcome) return void G(!0);
                    "handled" === a.outcome && e.onChange(a.symbol), e.onClose?.()
                }
            }, K[37] = ee, K[38] = Q, K[39] = e, K[40] = Y, K[41] = B) : B = K[41];
            let ey = B;
            K[42] !== e ? (_ = null == e.onClose ? void 0 : t => {
                t.preventDefault(), e.onClose?.()
            }, K[42] = e, K[43] = _) : _ = K[43];
            let ex = _,
                ew = et && Y?.kind !== "emoji" ? "icon" : "emoji",
                ej = eo ? "sheet" : "grid",
                ek = !eo,
                eC = eo ? "calc(70dvh - 4rem - env(safe-area-inset-bottom))" : void 0;
            K[44] !== ee || K[45] !== e.onChange || K[46] !== eo || K[47] !== Y || K[48] !== ew || K[49] !== ej || K[50] !== ek || K[51] !== eC || K[52] !== en ? (N = (0, o.jsx)(b.a, {
                disabled: ee,
                value: Y,
                defaultColor: en,
                commitColorOnSelect: eo,
                defaultKind: ew,
                layout: ej,
                embedded: eo,
                autoFocus: ek,
                availableHeight: eC,
                onChange: e.onChange,
                onSelect: Z,
                onClear: Z
            }), K[44] = ee, K[45] = e.onChange, K[46] = eo, K[47] = Y, K[48] = ew, K[49] = ej, K[50] = ek, K[51] = eC, K[52] = en, K[53] = N) : N = K[53];
            let eI = N,
                eP = X && !eo;
            K[54] !== ey ? (z = e => {
                e ? ey() : Z()
            }, K[54] = ey, K[55] = z) : z = K[55], K[56] !== ei || K[57] !== er ? (L = er ? "self-start" : (0, i.b)(I.a.PageTitle, "absolute top-0 end-full font-semibold", !ei && "pe-2"), K[56] = ei, K[57] = er, K[58] = L) : L = K[58];
            let eM = er || ei || X,
                eA = er ? "flex" : "relative inline-block h-[1cap] align-baseline";
            return K[59] !== eb ? (R = (0, o.jsx)(g.e, {
                asChild: !0,
                children: eb
            }), K[59] = eb, K[60] = R) : R = K[60], K[61] !== ec || K[62] !== X || K[63] !== R ? (W = (0, o.jsx)(r.a, {
                content: ec,
                disabled: X,
                children: R
            }), K[61] = ec, K[62] = X, K[63] = R, K[64] = W) : W = K[64], K[65] !== eA || K[66] !== W ? (F = (0, o.jsx)("span", {
                className: eA,
                children: W
            }), K[65] = eA, K[66] = W, K[67] = F) : F = K[67], K[68] !== L || K[69] !== eM || K[70] !== F ? (O = (0, o.jsx)(j.a, {
                className: L,
                anchorSelector: "[data-page-title]",
                active: eM,
                children: F
            }), K[68] = L, K[69] = eM, K[70] = F, K[71] = O) : O = K[71], K[72] !== ec || K[73] !== eI || K[74] !== ex ? (V = (0, o.jsx)(g.c, {
                className: "z-50 outline-hidden",
                "aria-label": ec,
                align: "center",
                onCloseAutoFocus: ex,
                onClick: A,
                unstyled: !0,
                children: eI
            }), K[72] = ec, K[73] = eI, K[74] = ex, K[75] = V) : V = K[75], K[76] !== ec || K[77] !== X || K[78] !== eI || K[79] !== ex || K[80] !== eo ? (q = X && eo && (0, o.jsxs)(p.a, {
                open: !0,
                size: "sheet",
                variant: "opaque",
                onOpenChange: e => {
                    e || Z()
                },
                contentProps: {
                    shouldStopPointerDownPropagation: !1,
                    onCloseAutoFocus: ex,
                    onOpenAutoFocus: M
                },
                children: [(0, o.jsx)(p.e, {
                    className: "px-4 pt-4 pb-3 text-center text-base font-semibold",
                    children: ec
                }), eI]
            }), K[76] = ec, K[77] = X, K[78] = eI, K[79] = ex, K[80] = eo, K[81] = q) : q = K[81], K[82] !== eP || K[83] !== z || K[84] !== O || K[85] !== V || K[86] !== q ? (H = (0, o.jsxs)(g.a, {
                modal: !0,
                open: eP,
                onOpenChange: z,
                children: [O, V, q]
            }), K[82] = eP, K[83] = z, K[84] = O, K[85] = V, K[86] = q, K[87] = H) : H = K[87], H
        }

        function M(e) {
            e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
        }

        function A(e) {
            return e.stopPropagation()
        }

        function T(e) {
            return e.stopPropagation()
        }
    }),
    zTDg: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("slpy"),
            i = n("Wf1j"),
            l = n("Sm6l"),
            c = n("j9wQ");
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, s, d, p, u = (0, a.c)(14);
                u[0] !== e ? ({
                    label: t,
                    appearance: i,
                    color: s,
                    ...n
                } = e, u[0] = e, u[1] = t, u[2] = n, u[3] = i, u[4] = s) : (t = u[1], n = u[2], i = u[3], s = u[4]);
                let g = void 0 === i ? "toolbar" : i,
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
                }), u[5] = g, u[6] = m, u[7] = t, u[8] = n, u[9] = d) : d = u[9], u[10] !== t || u[11] !== h || u[12] !== d ? (p = (0, o.jsx)(r.a, {
                    content: t,
                    disabled: h,
                    children: d
                }), u[10] = t, u[11] = h, u[12] = d, u[13] = p) : p = u[13], p
            },
            b: function(e) {
                let t, n, r, l, s = (0, a.c)(9);
                s[0] !== e ? ({
                    children: t,
                    ...n
                } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
                let d = (0, i.a)();
                return s[3] !== d ? (r = d.formatMessage({
                    id: "codex.space.page.header.editingTools",
                    defaultMessage: "Page editing tools",
                    description: "Accessible label for the Page header editing actions"
                }), s[3] = d, s[4] = r) : r = s[4], s[5] !== t || s[6] !== n || s[7] !== r ? (l = (0, o.jsx)(c.i, {
                    ...n,
                    label: r,
                    children: t
                }), s[5] = t, s[6] = n, s[7] = r, s[8] = l) : l = s[8], l
            }
        })
    }),
    zV9s: (function(e, t, n) {
        n.d(t, {
            a: () => v,
            b: () => b,
            c: () => h
        });
        var o = n("ABep"),
            a = n("QosV"),
            r = n("on57"),
            i = n("BolX"),
            l = n("zd8w"),
            c = n("v7qY"),
            s = n("Wf1j"),
            d = n("OpyH"),
            p = n("bUax"),
            u = n("hZSj");
        n("O666");
        var g = n("j9wQ"),
            m = n("zTDg");

        function h(e) {
            let t, n, l, d, u, h, v, b, y, x, w, j, k, C, I, P, M, A, T, S, E, D, B, _, N, z, L = (0, a.c)(80),
                R = (0, s.a)();
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                layer: "4293940401",
                parameter: "viewer_header_container_width"
            }, L[0] = t) : t = L[0];
            let W = (0, i.x)(!1, t),
                {
                    inset: F,
                    contentFade: O,
                    navigation: V,
                    actions: q,
                    documentControlsContainers: H,
                    saveStatus: K,
                    people: Q,
                    automations: X,
                    requestEditAccess: G,
                    comments: $,
                    meeting: J,
                    supplementalActions: U,
                    connectionStatus: Z,
                    onClose: Y,
                    onPrewarmSharing: ee,
                    tabId: et,
                    sharing: en
                } = e,
                eo = void 0 !== F && F,
                ea = void 0 !== O && O;
            L[1] !== q || L[2] !== e.actionsGrouped ? (n = e.actionsGrouped || null == q ? q : (0, o.jsx)(m.b, {
                children: q
            }), L[1] = q, L[2] = e.actionsGrouped, L[3] = n) : n = L[3];
            let er = n;
            L[4] !== X || L[5] !== $ ? (l = (0, o.jsxs)(o.Fragment, {
                children: [X, $]
            }), L[4] = X, L[5] = $, L[6] = l) : l = L[6];
            let ei = l,
                el = ei;
            if (null == H) {
                let e;
                L[7] !== X || L[8] !== $ || L[9] !== R || L[10] !== ei ? (e = X || $ ? (0, o.jsx)(g.i, {
                    hideWhenEmpty: !0,
                    label: R.formatMessage({
                        id: "codex.space.page.header.panels",
                        defaultMessage: "Page panels",
                        description: "Accessible label for the Page automation and comment panel controls"
                    }),
                    children: ei
                }) : null, L[7] = X, L[8] = $, L[9] = R, L[10] = ei, L[11] = e) : e = L[11], el = e
            }
            L[12] !== U ? (d = {
                id: "supplemental",
                content: U,
                hidePriority: 3
            }, L[12] = U, L[13] = d) : d = L[13], L[14] === Symbol.for("react.memo_cache_sentinel") ? (u = [{
                priority: 5,
                selector: "[data-page-automation-control]"
            }], L[14] = u) : u = L[14], L[15] !== el ? (h = {
                id: "panels",
                collapseSteps: u,
                content: el
            }, L[15] = el, L[16] = h) : h = L[16], L[17] !== J ? (v = {
                id: "meeting",
                content: J,
                collapsePriority: 3
            }, L[17] = J, L[18] = v) : v = L[18], L[19] !== d || L[20] !== h || L[21] !== v ? (b = [d, h, v], L[19] = d, L[20] = h, L[21] = v, L[22] = b) : b = L[22];
            let ec = b;
            L[23] !== ee ? (y = e => {
                "touch" !== e.pointerType && ee?.()
            }, L[23] = ee, L[24] = y) : y = L[24], L[25] !== H || L[26] !== ec ? (x = H?.trailing != null ? (0, c.createPortal)((0, o.jsx)("div", {
                className: "flex min-w-0 items-center gap-0.5",
                children: ec.map(f)
            }), H.trailing) : null, L[25] = H, L[26] = ec, L[27] = x) : x = L[27];
            let es = !eo && "Header-oDqOfi";
            L[28] !== es ? (w = (0, r.b)(es, "w-full"), L[28] = es, L[29] = w) : w = L[29];
            let ed = ea ? "overlay" : void 0;
            L[30] !== V ? (j = {
                id: "title",
                content: (0, o.jsx)("div", {
                    className: "flex min-w-0 items-center",
                    children: V
                }),
                collapsePriority: 1
            }, L[30] = V, L[31] = j) : j = L[31];
            let ep = null == H ? er : null;
            return L[32] !== ep ? (k = {
                id: "editing",
                content: ep,
                collapsePriority: 2
            }, L[32] = ep, L[33] = k) : k = L[33], L[34] !== K ? (C = {
                id: "save-status",
                content: K
            }, L[34] = K, L[35] = C) : C = L[35], L[36] !== j || L[37] !== k || L[38] !== C ? (I = [j, k, C], L[36] = j, L[37] = k, L[38] = C, L[39] = I) : I = L[39], L[40] !== G ? (P = {
                id: "request-edit-access",
                content: G
            }, L[40] = G, L[41] = P) : P = L[41], L[42] !== Z ? (M = {
                id: "connection-status",
                content: Z,
                hidePriority: 3
            }, L[42] = Z, L[43] = M) : M = L[43], L[44] !== H || L[45] !== ec ? (A = null == H ? ec : [], L[44] = H, L[45] = ec, L[46] = A) : A = L[46], L[47] !== e.overflow ? (T = {
                id: "overflow",
                content: e.overflow
            }, L[47] = e.overflow, L[48] = T) : T = L[48], L[49] !== e.persistentActions ? (S = {
                id: "artifact-actions",
                content: e.persistentActions
            }, L[49] = e.persistentActions, L[50] = S) : S = L[50], L[51] !== R || L[52] !== Q || L[53] !== en ? (E = null == en && null == Q ? null : (0, o.jsxs)(g.i, {
                hideWhenEmpty: !0,
                label: R.formatMessage({
                    id: "codex.space.page.header.sharing",
                    defaultMessage: "Sharing",
                    description: "Accessible label for Page sharing controls"
                }),
                children: [Q, en]
            }), L[51] = R, L[52] = Q, L[53] = en, L[54] = E) : E = L[54], L[55] !== E ? (D = {
                id: "sharing",
                content: E,
                collapsePriority: 4
            }, L[55] = E, L[56] = D) : D = L[56], L[57] !== Y || L[58] !== et ? (B = {
                id: "window-controls",
                content: (0, o.jsx)(p.a, {
                    tabId: et,
                    onClose: Y
                })
            }, L[57] = Y, L[58] = et, L[59] = B) : B = L[59], L[60] !== P || L[61] !== M || L[62] !== A || L[63] !== T || L[64] !== S || L[65] !== D || L[66] !== B ? (_ = [P, M, ...A, T, S, D, B], L[60] = P, L[61] = M, L[62] = A, L[63] = T, L[64] = S, L[65] = D, L[66] = B, L[67] = _) : _ = L[67], L[68] !== W || L[69] !== ea || L[70] !== eo || L[71] !== w || L[72] !== ed || L[73] !== I || L[74] !== _ ? (N = (0, o.jsx)(g.l, {
                className: w,
                containerWidthFit: W,
                contentFade: ea,
                density: "compact",
                inset: eo,
                placement: ed,
                leading: I,
                trailing: _
            }), L[68] = W, L[69] = ea, L[70] = eo, L[71] = w, L[72] = ed, L[73] = I, L[74] = _, L[75] = N) : N = L[75], L[76] !== y || L[77] !== x || L[78] !== N ? (z = (0, o.jsxs)("div", {
                className: "@container/page-toolbar w-full min-w-0",
                onPointerEnter: y,
                children: [x, N]
            }), L[76] = y, L[77] = x, L[78] = N, L[79] = z) : z = L[79], z
        }

        function f(e) {
            return (0, o.jsx)(l.Fragment, {
                children: e.content
            }, e.id)
        }

        function v(e) {
            let t, n, r, i, l, c, s, d, p, g = (0, a.c)(19);
            g[0] !== e ? ({
                surface: r,
                contentFade: i,
                separator: l,
                overlay: n,
                onClose: t,
                ...c
            } = e, g[0] = e, g[1] = t, g[2] = n, g[3] = r, g[4] = i, g[5] = l, g[6] = c) : (t = g[1], n = g[2], r = g[3], i = g[4], l = g[5], c = g[6]);
            let m = void 0 !== i && i,
                f = void 0 === l || l;
            g[7] !== r ? (s = "window" === r || "side-panel" !== r && (0, u.a)("/space/:pageId"), g[7] = r, g[8] = s) : s = g[8];
            let v = s,
                y = m && !v,
                x = !v,
                w = v ? void 0 : t;
            return g[9] !== y || g[10] !== x || g[11] !== w || g[12] !== c ? (d = (0, o.jsx)(h, {
                ...c,
                contentFade: y,
                inset: x,
                onClose: w
            }), g[9] = y, g[10] = x, g[11] = w, g[12] = c, g[13] = d) : d = g[13], g[14] !== n || g[15] !== f || g[16] !== r || g[17] !== d ? (p = (0, o.jsx)(b, {
                surface: r,
                separator: f,
                overlay: n,
                children: d
            }), g[14] = n, g[15] = f, g[16] = r, g[17] = d, g[18] = p) : p = g[18], p
        }

        function b(e) {
            let t, n, i, l = (0, a.c)(16),
                {
                    children: c,
                    contentFade: s,
                    separator: p,
                    surface: g,
                    overlay: m
                } = e,
                h = void 0 !== s && s,
                f = m ?? "side-panel" === g;
            if ("window" === g || "side-panel" !== g && (0, u.a)("/space/:pageId")) {
                let e;
                return l[0] !== c || l[1] !== h || l[2] !== p ? (e = (0, o.jsx)(d.a.Header, {
                    className: "shrink-0",
                    contentFade: h,
                    separator: p,
                    children: c
                }), l[0] = c, l[1] = h, l[2] = p, l[3] = e) : e = l[3], e
            }
            if ("side-panel" === g) {
                let e, t, n = f ? "absolute inset-x-0 top-0" : "relative";
                return l[4] !== n ? (e = (0, r.b)("pointer-events-none z-30 shrink-0", n), l[4] = n, l[5] = e) : e = l[5], l[6] !== c || l[7] !== e ? (t = (0, o.jsx)("div", {
                    className: e,
                    children: c
                }), l[6] = c, l[7] = e, l[8] = t) : t = l[8], t
            }
            l[9] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(d.a.MainContentLayout, {
                layout: "custom-titlebar"
            }), l[9] = t) : t = l[9];
            let v = f ? "absolute inset-x-0 top-0" : "relative";
            return l[10] !== v ? (n = (0, r.b)("pointer-events-none z-30 shrink-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]", v), l[10] = v, l[11] = n) : n = l[11], l[12] !== c || l[13] !== p || l[14] !== n ? (i = (0, o.jsxs)(o.Fragment, {
                children: [t, (0, o.jsx)(d.a.Header, {
                    className: n,
                    inline: !0,
                    separator: p,
                    children: c
                })]
            }), l[12] = c, l[13] = p, l[14] = n, l[15] = i) : i = l[15], i
        }
    }),
    WP5H: (function(e, t, n) {
        var o = n("QR42");
        let a = {
            kind: "icon",
            value: "graduation-cap",
            color: "blue"
        };
        n.d(t, {}, {
            a: async function(e, t, r) {
                let {
                    withPageMenuSession: i
                } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(226913), n.e(753405), n.e(212823)]).then(n.bind(n, "tKju"));
                r() && await i(e, t, "write", async e => {
                    r() && null == e.getSymbol() && null == (0, o.dc)(e.document.getText("title").toJSON()).emoji && e.mutateDocument(e => (0, o.$b)(e, a)) && await e.flush({
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
            r = n("BolX"),
            i = n("ASxG"),
            l = n("dQRk"),
            c = n("C9uP"),
            s = n("sjCL"),
            d = n("YF6h"),
            p = n("tSEg"),
            u = n("kpIY"),
            g = n("Nwp9"),
            m = n("Iq2T");
        let h = "spaces-workspace-chat-selections-v1",
            f = i.record(i.string(), i.object({
                ownerClientThreadId: i.string(),
                selection: c.b.nullable()
            }).or(i.object({
                ownerClientThreadId: i.string(),
                ownerSelected: i.boolean(),
                recentChats: i.array(c.b.nullable())
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
            b = (0, r.c)(p.a, e => {
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
            y = (0, r.c)(p.a, e => {
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
            x = (0, r.c)(p.a, e => {
                let {
                    get: t
                } = e, n = t(m.c), o = t(v)[n.accountKey], a = o?.selection ?? null;
                return o?.ownerClientThreadId !== n.clientThreadId || (0, c.a)(t(y), a) ? null : a
            }, {
                isEqual: a()
            }),
            w = (0, r.d)(p.a, (e, t) => {
                let {
                    get: n,
                    scope: o
                } = t;
                return (o.value.persistentWorkspace?.key !== "/space" || null == n(x)) && n(s.d, e)
            }),
            j = (0, r.c)(p.a, e => {
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
            d: j,
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
                            defaultMessage: "Default",
                            description: "Color option name in the project marker popover."
                        });
                    case "blue":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.blue",
                            defaultMessage: "Blue",
                            description: "Color option name in the project marker popover."
                        });
                    case "green":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.green",
                            defaultMessage: "Green",
                            description: "Color option name in the project marker popover."
                        });
                    case "orange":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.orange",
                            defaultMessage: "Orange",
                            description: "Color option name in the project marker popover."
                        });
                    case "pink":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.pink",
                            defaultMessage: "Pink",
                            description: "Color option name in the project marker popover."
                        });
                    case "purple":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.purple",
                            defaultMessage: "Purple",
                            description: "Color option name in the project marker popover."
                        });
                    case "red":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.red",
                            defaultMessage: "Red",
                            description: "Color option name in the project marker popover."
                        });
                    case "yellow":
                        return e.formatMessage({
                            id: "codex.projectAppearance.color.option.yellow",
                            defaultMessage: "Yellow",
                            description: "Color option name in the project marker popover."
                        })
                }
            }
        })
    }),
    qlvd: (function(e, t, n) {
        n.d(t, {
            a: () => c
        });
        var o = n("hV9T"),
            a = n("Qgfj");
        let r = (0, a.f)({
            "bar-chart": {
                id: "codex.projectAppearance.icon.option.bar_chart",
                defaultMessage: "Bar Chart",
                description: "Icon option name in the project marker popover."
            },
            book: {
                id: "codex.projectAppearance.icon.option.book",
                defaultMessage: "Book",
                description: "Icon option name in the project marker popover."
            },
            brain: {
                id: "codex.projectAppearance.icon.option.brain",
                defaultMessage: "Brain",
                description: "Icon option name in the project marker popover."
            },
            "currency-dollar": {
                id: "codex.projectAppearance.icon.option.currency_dollar",
                defaultMessage: "Currency Dollar",
                description: "Icon option name in the project marker popover."
            },
            customize: {
                id: "codex.projectAppearance.icon.option.customize",
                defaultMessage: "Customize",
                description: "Icon option name in the project marker popover."
            },
            "desk-globe": {
                id: "codex.projectAppearance.icon.option.desk_globe",
                defaultMessage: "Globe Spin",
                description: "Icon option name in the project marker popover."
            },
            dumbbell: {
                id: "codex.projectAppearance.icon.option.dumbbell",
                defaultMessage: "Dumbbell",
                description: "Icon option name in the project marker popover."
            },
            edit: {
                id: "codex.projectAppearance.icon.option.edit",
                defaultMessage: "Pencil",
                description: "Icon option name in the project marker popover."
            },
            flask: {
                id: "codex.projectAppearance.icon.option.flask",
                defaultMessage: "Flask",
                description: "Icon option name in the project marker popover."
            },
            folder: {
                id: "codex.projectAppearance.icon.option.folder",
                defaultMessage: "Folder",
                description: "Icon option name in the project marker popover."
            },
            function: {
                id: "codex.projectAppearance.icon.option.function",
                defaultMessage: "Code Brackets",
                description: "Icon option name in the project marker popover."
            },
            globe: {
                id: "codex.projectAppearance.icon.option.globe",
                defaultMessage: "Globe",
                description: "Icon option name in the project marker popover."
            },
            "graduation-cap": {
                id: "codex.projectAppearance.icon.option.graduation_cap",
                defaultMessage: "Graduation Cap",
                description: "Icon option name in the project marker popover."
            },
            health: {
                id: "codex.projectAppearance.icon.option.health",
                defaultMessage: "Health",
                description: "Icon option name in the project marker popover."
            },
            heart: {
                id: "codex.projectAppearance.icon.option.heart",
                defaultMessage: "Heart",
                description: "Icon option name in the project marker popover."
            },
            kettlebell: {
                id: "codex.projectAppearance.icon.option.kettlebell",
                defaultMessage: "Kettlebell",
                description: "Icon option name in the project marker popover."
            },
            logs: {
                id: "codex.projectAppearance.icon.option.logs",
                defaultMessage: "Logs",
                description: "Icon option name in the project marker popover."
            },
            lotus: {
                id: "codex.projectAppearance.icon.option.lotus",
                defaultMessage: "Lotus",
                description: "Icon option name in the project marker popover."
            },
            music: {
                id: "codex.projectAppearance.icon.option.music",
                defaultMessage: "Music",
                description: "Icon option name in the project marker popover."
            },
            palette: {
                id: "codex.projectAppearance.icon.option.palette",
                defaultMessage: "Palette",
                description: "Icon option name in the project marker popover."
            },
            paw: {
                id: "codex.projectAppearance.icon.option.paw",
                defaultMessage: "Paw",
                description: "Icon option name in the project marker popover."
            },
            plane: {
                id: "codex.projectAppearance.icon.option.plane",
                defaultMessage: "Plane",
                description: "Icon option name in the project marker popover."
            },
            plant: {
                id: "codex.projectAppearance.icon.option.plant",
                defaultMessage: "Plant",
                description: "Icon option name in the project marker popover."
            },
            popcorn: {
                id: "codex.projectAppearance.icon.option.popcorn",
                defaultMessage: "Popcorn",
                description: "Icon option name in the project marker popover."
            },
            scale: {
                id: "codex.projectAppearance.icon.option.scale",
                defaultMessage: "Balancing Scale",
                description: "Icon option name in the project marker popover."
            },
            stethoscope: {
                id: "codex.projectAppearance.icon.option.stethoscope",
                defaultMessage: "Stethoscope",
                description: "Icon option name in the project marker popover."
            },
            suitcase: {
                id: "codex.projectAppearance.icon.option.suitcase",
                defaultMessage: "Suitcase",
                description: "Icon option name in the project marker popover."
            },
            terminal: {
                id: "codex.projectAppearance.icon.option.terminal",
                defaultMessage: "Terminal",
                description: "Icon option name in the project marker popover."
            },
            wrench: {
                id: "codex.projectAppearance.icon.option.wrench",
                defaultMessage: "Wrench",
                description: "Icon option name in the project marker popover."
            },
            writing: {
                id: "codex.projectAppearance.icon.option.writing",
                defaultMessage: "Writing",
                description: "Icon option name in the project marker popover."
            }
        });
        (0, a.e)({
            id: "symbolPicker.icons.category.work",
            defaultMessage: "Work",
            description: "Icon picker category for work, organization, finance, and technology"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.learning",
            defaultMessage: "Learning",
            description: "Icon picker category for education, science, and knowledge"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.creative",
            defaultMessage: "Creative",
            description: "Icon picker category for writing, art, music, and entertainment"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.wellbeing",
            defaultMessage: "Health and wellbeing",
            description: "Icon picker category for medicine, fitness, and personal wellbeing"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.travel",
            defaultMessage: "Travel and places",
            description: "Icon picker category for trips, transportation, and places around the world"
        }), (0, a.e)({
            id: "symbolPicker.icons.category.nature",
            defaultMessage: "Nature",
            description: "Icon picker category for animals, plants, and the environment"
        });
        let i = {
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
                    label: r[e],
                    ...i[e]
                }
            });

        function c(e, t) {
            let n = s(e, t.locale);
            if (0 === n.length) return l;
            let o = n.split(" ");
            return l.flatMap(e => {
                let a = s(t.formatMessage(e.label), t.locale),
                    r = s(e.id, t.locale);
                return o.every(t => a.includes(t) || r.includes(t) || e.keywords.some(e => e.includes(t))) ? [{
                    icon: e,
                    score: +(a !== n && r !== n)
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
            r = n("e1xH"),
            i = n("OWtl"),
            l = n("nvO1");
        let c = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(l.u, e) && n(r.pagesEnabled$)
            }),
            s = (0, o.d)(i.a, (e, t) => {
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
            r = n("BolX"),
            i = n("jqIZ"),
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
                    g = (0, r.y)(l.a),
                    m = `/settings/teams/${encodeURIComponent(u)}`;
                return d[0] !== g ? (t = e => {
                    e.defaultPrevented || 0 !== e.button || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (0, c.a)(g, s.a)
                }, d[0] = g, d[1] = t) : t = d[1], d[2] !== p || d[3] !== m || d[4] !== t ? (n = (0, o.jsx)(i.g, {
                    className: "-mx-1 -my-0.5 inline-flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm px-1 py-0.5 text-inherit! no-underline select-none hover:bg-secondary-ghost-hover hover:text-default! focus:outline-none! focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                    to: m,
                    onClick: t,
                    children: p
                }), d[2] = p, d[3] = m, d[4] = t, d[5] = n) : n = d[5], n
            }
        })
    }),
    NBTh: (function(e, t) {
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
    h24K: (function(e, t, n) {
        var o = n("gPp5");
        class a {
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
        let r = () => new a;
        n.d(t, {}, {
            a: function() {
                return (0, o.a)(r)
            }
        })
    })
};