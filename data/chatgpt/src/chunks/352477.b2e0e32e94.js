export const __rspack_esm_ids = [352477];
export const __webpack_modules__ = {
    SJ6u: (function(e, t) {
        t.a = {
            match: "match-z3yytq"
        }
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
    aK2P: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("on57"),
            i = n("zd8w"),
            l = n("wD9O"),
            c = n("aAWW"),
            s = n("b7SN");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, p, u, m, g, f = (0, a.c)(21),
                    {
                        children: h,
                        className: v,
                        anchorSelector: b,
                        edge: y,
                        active: x,
                        revealOnHover: j
                    } = e,
                    w = void 0 === y ? "start" : y,
                    k = void 0 !== j && j,
                    I = (0, i.useRef)(null),
                    [M, C] = (0, i.useState)(!1),
                    A = (0, l.c)();
                f[0] !== w || f[1] !== A ? (t = (e, t) => {
                    if (e.buttons > 0 || "touch" === e.pointerType) return;
                    let n = t.getBoundingClientRect();
                    C(e.clientY >= n.top && e.clientY <= n.bottom && (0, s.a)({
                        clientX: e.clientX,
                        bounds: n,
                        edge: w,
                        rtl: "rtl" === getComputedStyle(t).direction,
                        zoom: A,
                        viewport: t.closest("[data-page-block-viewport]")?.getBoundingClientRect()
                    }))
                }, f[0] = w, f[1] = A, f[2] = t) : t = f[2];
                let P = (0, i.useEffectEvent)(t);
                f[3] !== b || f[4] !== P || f[5] !== k ? (n = () => {
                    if (k) return;
                    let e = I.current?.closest(b),
                        t = e?.closest("[data-page-block-row], [data-page-edge-region]") ?? e?.closest("[data-page-reading-column]")?.parentElement ?? e;
                    if (null == e || null == t) return;
                    let n = t => P(t, e),
                        o = () => C(!1);
                    return t.addEventListener("pointermove", n), t.addEventListener("pointerleave", o), () => {
                        t.removeEventListener("pointermove", n), t.removeEventListener("pointerleave", o), o()
                    }
                }, f[3] = b, f[4] = P, f[5] = k, f[6] = n) : n = f[6], f[7] !== b || f[8] !== k ? (d = [b, k], f[7] = b, f[8] = k, f[9] = d) : d = f[9], (0, i.useEffect)(n, d), f[10] !== M || f[11] !== k ? (p = () => {
                    if (!M || k) return;
                    let e = I.current?.ownerDocument,
                        t = () => {
                            C(!1), (0, c.b)()
                        };
                    return e?.addEventListener("scroll", t, !0), e?.addEventListener("visibilitychange", t), e?.defaultView?.addEventListener("blur", t), () => {
                        e?.removeEventListener("scroll", t, !0), e?.removeEventListener("visibilitychange", t), e?.defaultView?.removeEventListener("blur", t)
                    }
                }, u = [M, k], f[10] = M, f[11] = k, f[12] = p, f[13] = u) : (p = f[12], u = f[13]), (0, i.useEffect)(p, u);
                let S = k && "[:hover>&]:pointer-events-auto [:hover>&]:opacity-100";
                f[14] !== v || f[15] !== S ? (m = (0, r.b)("pointer-events-auto [@media(hover:hover)_and_(pointer:fine)]:pointer-events-none [@media(hover:hover)_and_(pointer:fine)]:opacity-0 data-visible:pointer-events-auto data-visible:opacity-100 data-menu-open:pointer-events-auto data-menu-open:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100 [[data-state=open]>&]:pointer-events-auto [[data-state=open]>&]:opacity-100 [:focus-visible>&]:pointer-events-auto [:focus-visible>&]:opacity-100", S, v), f[14] = v, f[15] = S, f[16] = m) : m = f[16];
                let _ = !k && (M || void 0 !== x && x) || void 0;
                return f[17] !== h || f[18] !== m || f[19] !== _ ? (g = (0, o.jsx)("span", {
                    ref: I,
                    className: m,
                    "data-page-edge-controls": !0,
                    "data-visible": _,
                    children: h
                }), f[17] = h, f[18] = m, f[19] = _, f[20] = g) : g = f[20], g
            }
        })
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
        n("Q840"), n("hlkZ"), n("oyQi"), n("Ko17"), n("nvO1"), n("iycc")
    }),
    i9us: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("LPKZ"),
            i = n.n(r),
            l = n("Q840"),
            c = n("oyxz"),
            s = n("O5pN"),
            d = n("osar"),
            p = n("Z4o7"),
            u = n("Sm6l"),
            m = n("HOLv"),
            g = n("bf6R"),
            f = n("ttIa"),
            h = n("Z2JT"),
            v = n("NRR1"),
            b = n("gcWI"),
            y = n("GAcX"),
            x = n("hlkZ"),
            j = n("JtEZ"),
            w = n("tSEg");
        n("qixt");
        var k = n("El6m"),
            I = n("eviP"),
            M = n("UEny");

        function C() {
            return null
        }(0, l.d)(w.a, (e, t) => {
            let {
                get: n,
                scope: o
            } = t;
            return n(I.b)?.getSession(o)?.conversationId != null || null != e && n(j.b, {
                accountId: n(v.e),
                pageId: e
            })
        }), n.d(t, {}, {
            a: function(e) {
                let t, n, r = (0, a.c)(5),
                    {
                        pageId: j
                    } = e,
                    w = (0, l.z)(v.e),
                    I = (0, l.x)(x.loadedSpacePageMetadata$, j ?? null);
                r[0] !== w || r[1] !== j ? (t = {
                    accountId: w,
                    pageId: j
                }, r[0] = w, r[1] = j, r[2] = t) : t = r[2];
                let A = (0, l.x)(b.e, t),
                    P = (0, l.z)(y.c);
                return (0, l.z)(h.a) || A || null != P ? null : (r[3] !== I?.document_type ? (n = (0, o.jsx)("div", {
                    inert: !0,
                    "aria-hidden": !0,
                    children: (0, o.jsx)(k.a, {
                        value: "expanded",
                        children: (0, o.jsx)(f.a, {
                            isMinimized: !1,
                            onMinimizedChange: i(),
                            presentation: "compact",
                            renderTranscript: C,
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
                                            children: (0, o.jsx)(g.Ig, {})
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
                                                                documentType: I?.document_type ?? "page"
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
                                                children: (0, o.jsx)(g.cd, {})
                                            }), (0, o.jsx)(u.a, {
                                                disabled: !0,
                                                color: "ghost",
                                                size: "composer",
                                                children: (0, o.jsx)(m.a, {
                                                    asset: M.a
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
                }), r[3] = I?.document_type, r[4] = n) : n = r[4], n)
            }
        })
    }),
    r1wd: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("on57"),
            i = n("Q840"),
            l = n("X3K1"),
            c = n("SCmN"),
            s = n("WP5H"),
            d = n("Ih0z"),
            p = n("hlkZ"),
            u = n("kTTh"),
            m = n("fAHU"),
            g = n("i9us"),
            f = n("nkrL"),
            h = n("GhgU"),
            v = n("Jif0"),
            b = n("fQMn");

        function y(e) {
            let t, n, g, h, y, j, w, k, I, M, C, A, P, S = (0, a.c)(40),
                {
                    appearance: _,
                    pageId: E,
                    space: T,
                    spaceId: z,
                    title: N,
                    symbol: L
                } = e;
            S[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                enabled: !1
            }, S[0] = t) : t = S[0];
            let {
                data: Q
            } = (0, i.x)(p.spaceQuery$, z ?? "", t), B = T ?? Q, D = E ?? B?.root_page_id ?? "", F = (0, i.x)(p.loadedSpacePageMetadata$, D);
            S[1] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                enabled: !1
            }, S[1] = n) : n = S[1];
            let O = (0, i.x)(f.d, D, n),
                W = (0, i.x)(c.b, D),
                K = B?.id ?? z;
            S[2] !== K ? (g = {
                spaceId: K
            }, S[2] = K, S[3] = g) : g = S[3], S[4] === Symbol.for("react.memo_cache_sentinel") ? (h = {
                enabled: !1
            }, S[4] = h) : h = S[4];
            let R = (0, i.x)(d.d, g, h),
                H = _ ?? R,
                V = null != B || null != z || null != _,
                q = null == F ? B?.symbol ?? L ?? null : F.symbol ?? null;
            if (V && null == q) {
                let e;
                S[5] !== H ? (e = (0, d.a)(H), S[5] = H, S[6] = e) : e = S[6], q = e
            }
            let J = void 0 === O ? F?.title : O ?? "",
                U = null == B ? J ?? N : N ?? B.name;
            if (!V && null == q && null != U) {
                let e;
                S[7] !== U ? (e = (0, u.b)(U), S[7] = U, S[8] = e) : e = S[8];
                let t = e;
                if (U = t.title, null != t.emoji) {
                    let e;
                    S[9] !== t.emoji ? (e = {
                        kind: "emoji",
                        value: t.emoji
                    }, S[9] = t.emoji, S[10] = e) : e = S[10], q = e
                }
            }
            W && !V && null == q && (q = s.b);
            let G = null == U,
                Z = B?.id ?? z,
                $ = F?.document_type,
                Y = F?.namespace,
                X = H?.theme;
            S[11] !== V || S[12] !== q || S[13] !== $ || S[14] !== Y || S[15] !== X ? (y = (0, o.jsx)(b.a, {
                disabled: !0,
                legacyEmoji: null,
                documentType: $,
                namespace: Y,
                symbol: q,
                space: V,
                spaceTheme: X,
                onChange: x
            }), S[11] = V, S[12] = q, S[13] = $, S[14] = Y, S[15] = X, S[16] = y) : y = S[16];
            let ee = G && "w-64 max-w-full";
            S[17] !== ee ? (j = (0, r.b)("relative min-w-0", ee), S[17] = ee, S[18] = j) : j = S[18];
            let et = G ? "invisible" : void 0,
                en = G || void 0;
            return S[19] !== U || S[20] !== G ? (w = G ? "" : (U ?? "").replace(/[\r\n]+/g, " "), S[19] = U, S[20] = G, S[21] = w) : w = S[21], S[22] !== w ? (k = (0, o.jsx)(v.a, {
                disabled: !0,
                readOnly: !0,
                value: w
            }), S[22] = w, S[23] = k) : k = S[23], S[24] !== et || S[25] !== en || S[26] !== k ? (I = (0, o.jsx)("div", {
                className: et,
                "aria-hidden": en,
                children: k
            }), S[24] = et, S[25] = en, S[26] = k, S[27] = I) : I = S[27], S[28] !== G ? (M = G ? (0, o.jsx)("div", {
                className: "absolute inset-0 flex items-center",
                children: (0, o.jsx)(l.a, {
                    className: "w-full",
                    size: "lg",
                    variant: "chatgpt-project"
                })
            }) : null, S[28] = G, S[29] = M) : M = S[29], S[30] !== j || S[31] !== I || S[32] !== M ? (C = (0, o.jsxs)("div", {
                className: j,
                children: [I, M]
            }), S[30] = j, S[31] = I, S[32] = M, S[33] = C) : C = S[33], S[34] !== y || S[35] !== C ? (A = (0, o.jsxs)("div", {
                className: "relative flex flex-col gap-2",
                "data-page-title": !0,
                children: [y, C]
            }), S[34] = y, S[35] = C, S[36] = A) : A = S[36], S[37] !== A || S[38] !== Z ? (P = (0, o.jsx)(m.a, {
                rootSpaceId: Z,
                children: A
            }), S[37] = A, S[38] = Z, S[39] = P) : P = S[39], P
        }

        function x() {}
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, s, d, u, m, f, v = (0, a.c)(28),
                    {
                        pageId: b,
                        spaceId: x,
                        title: j,
                        symbol: w,
                        headerOverlay: k,
                        showComposer: I
                    } = e,
                    M = void 0 !== I && I;
                v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    enabled: !1
                }, v[0] = t) : t = v[0];
                let {
                    data: C
                } = (0, i.z)(p.spacesQuery$, t);
                v[1] !== b || v[2] !== x || v[3] !== C?.items || v[4] !== C?.items.find ? (n = C?.items.find(e => null == b ? e.id === x : e.root_page_id === b), v[1] = b, v[2] = x, v[3] = C?.items, v[4] = C?.items.find, v[5] = n) : n = v[5];
                let A = n,
                    P = void 0 !== k && k && "viewer-header-scroll-mask pt-[var(--viewer-header-height)]";
                v[6] !== P ? (l = (0, r.b)("min-h-0 flex-1 scrollbar-stable overflow-y-auto", P), v[6] = P, v[7] = l) : l = v[7], v[8] !== b || v[9] !== A || v[10] !== w || v[11] !== j ? (c = (0, o.jsx)(y, {
                    pageId: b,
                    space: A,
                    title: j,
                    symbol: w
                }), v[8] = b, v[9] = A, v[10] = w, v[11] = j, v[12] = c) : c = v[12];
                let S = b ?? A?.root_page_id ?? x ?? "";
                return v[13] !== S ? (s = (0, o.jsx)(h.b, {
                    pageId: S
                }), v[13] = S, v[14] = s) : s = v[14], v[15] !== c || v[16] !== s ? (d = (0, o.jsx)(h.a, {
                    heading: c,
                    children: s
                }), v[15] = c, v[16] = s, v[17] = d) : d = v[17], v[18] !== d || v[19] !== l ? (u = (0, o.jsx)("div", {
                    className: l,
                    children: d
                }), v[18] = d, v[19] = l, v[20] = u) : u = v[20], v[21] !== b || v[22] !== M || v[23] !== A?.root_page_id ? (m = M && (0, o.jsx)(g.a, {
                    pageId: b ?? A?.root_page_id
                }), v[21] = b, v[22] = M, v[23] = A?.root_page_id, v[24] = m) : m = v[24], v[25] !== u || v[26] !== m ? (f = (0, o.jsxs)(o.Fragment, {
                    children: [u, m]
                }), v[25] = u, v[26] = m, v[27] = f) : f = v[27], f
            },
            b: y
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
            u = n("puTD");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, g, f, h, v, b, y, x = (0, a.c)(26),
                    {
                        onHistory: j,
                        ...w
                    } = e,
                    k = (0, l.a)();
                x[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.a)(), x[0] = t) : t = x[0];
                let I = (0, s.l)(t.smartPunctuationEnabled),
                    M = (0, i.useRef)(void 0),
                    C = (0, i.useRef)(!1),
                    A = (0, i.useRef)(!1),
                    P = (0, d.a)(w.ref, e => {
                        if (null == e || null == j) return;
                        let t = e => {
                            !e.defaultPrevented && !e.isComposing && !A.current && ("historyUndo" === e.inputType || "historyRedo" === e.inputType) && j("historyUndo" === e.inputType ? "undo" : "redo") && e.preventDefault()
                        };
                        return e.addEventListener("beforeinput", t), () => e.removeEventListener("beforeinput", t)
                    });
                return x[1] !== k || x[2] !== w ? (n = w["aria-label"] ?? k.formatMessage({
                    id: "codex.space.page.titleLabel",
                    defaultMessage: "Page title"
                }), x[1] = k, x[2] = w, x[3] = n) : n = x[3], x[4] !== k ? (m = k.formatMessage(c.c.untitled), x[4] = k, x[5] = m) : m = x[5], x[6] !== w.onPaste ? (g = e => {
                    M.current = void 0,
                        function(e, t, n) {
                            n.current = !0;
                            try {
                                t?.(e)
                            } finally {
                                n.current = !1
                            }
                        }(e, w.onPaste, C)
                }, x[6] = w.onPaste, x[7] = g) : g = x[7], x[8] !== w ? (f = e => {
                    w.onKeyDown?.(e);
                    let t = e.currentTarget,
                        n = M.current;
                    "Backspace" === e.key && !e.defaultPrevented && !e.nativeEvent.isComposing && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && !t.disabled && !t.readOnly && null != n && t.value === n.value && t.selectionStart === n.caret && t.selectionEnd === n.caret && function(e, t) {
                        t.current = !0;
                        try {
                            return e.ownerDocument.execCommand("undo")
                        } finally {
                            t.current = !1
                        }
                    }(t, A) && e.preventDefault()
                }, h = e => {
                    let t = e.currentTarget,
                        n = M.current;
                    null != n && (t.value !== n.value || t.selectionStart !== n.caret || t.selectionEnd !== n.caret) && (M.current = void 0), w.onSelect?.(e)
                }, x[8] = w, x[9] = f, x[10] = h) : (f = x[9], h = x[10]), x[11] !== w || x[12] !== I ? (v = e => {
                    w.onInput?.(e);
                    let t = e.currentTarget,
                        n = e.nativeEvent,
                        o = M.current;
                    if (n instanceof InputEvent && null != o) {
                        if ("historyUndo" === n.inputType && t.value === o.value.slice(0, o.caret - 1) + o.shortcut + o.value.slice(o.caret)) return void t.setSelectionRange(t.selectionEnd, t.selectionEnd);
                        if ("historyRedo" === n.inputType && t.value === o.value) return
                    }
                    if (M.current = void 0, C.current || !I || t.disabled || t.readOnly || !(n instanceof InputEvent) || n.isComposing || "insertText" !== n.inputType || n.data?.length !== 1 || !"\"'.=>-".includes(n.data) || t.selectionStart !== t.selectionEnd) return;
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
                            t.ownerDocument.execCommand("insertText", !1, c.glyph) && (M.current = {
                                value: t.value,
                                caret: t.selectionStart,
                                shortcut: c.shortcut
                            })
                        }
                    })
                }, x[11] = w, x[12] = I, x[13] = v) : v = x[13], x[14] !== w ? (b = e => {
                    M.current = void 0, w.onBlur?.(e)
                }, x[14] = w, x[15] = b) : b = x[15], x[16] !== w || x[17] !== P || x[18] !== n || x[19] !== m || x[20] !== g || x[21] !== f || x[22] !== h || x[23] !== v || x[24] !== b ? (y = (0, o.jsx)("textarea", {
                    ...w,
                    ref: P,
                    className: `${u.a.PageTitle} relative block field-sizing-content w-full min-w-0 resize-none overflow-hidden border-none bg-transparent font-semibold break-words text-default outline-none`,
                    "aria-label": n,
                    "aria-multiline": !1,
                    placeholder: m,
                    rows: 1,
                    onPaste: g,
                    onKeyDown: f,
                    onSelect: h,
                    onInput: v,
                    onBlur: b
                }), x[16] = w, x[17] = P, x[18] = n, x[19] = m, x[20] = g, x[21] = f, x[22] = h, x[23] = v, x[24] = b, x[25] = y) : y = x[25], y
            }
        })
    }),
    fQMn: (function(e, t, n) {
        n.d(t, {
            a: () => A
        });
        var o = n("ABep"),
            a = n("QosV"),
            r = n("slpy"),
            i = n("on57"),
            l = n("Q840"),
            c = n("zd8w"),
            s = n("Wf1j"),
            d = n("Sm6l"),
            p = n("JNtf"),
            u = n("bf6R"),
            m = n("nzx4"),
            g = n("ibLK"),
            f = n("SLxa"),
            h = n("SVco"),
            v = n("FR8U"),
            b = n("VAbi"),
            y = n("TnSu"),
            x = n("qlvd"),
            j = n("aWEZ"),
            w = n("aK2P"),
            k = n("TwSq"),
            I = n("SJ6u");

        function M(e) {
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
            let m = p?.id === u.id ? "" : void 0;
            return r[7] !== i || r[8] !== u.location.from || r[9] !== m ? (n = (0, o.jsx)("mark", {
                className: `${I.a.match} inline-flex rounded-2xs text-inherit`,
                "data-active": m,
                "data-page-find-match": !0,
                "data-page-find-title-match": u.location.from,
                children: i
            }), r[7] = i, r[8] = u.location.from, r[9] = m, r[10] = n) : n = r[10], n
        }
        var C = n("puTD");

        function A(e) {
            let t, n, k, I, A, E, T, z, N, L, Q, B, D, F, O, W, K, R, H, V = (0, a.c)(88),
                q = (0, s.a)(),
                [J, U] = (0, c.useState)(!1),
                G = (0, c.useRef)(null),
                Z = (0, c.useRef)(null),
                $ = (0, g.a)("(max-width: 767px)");
            V[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => U(!1), V[0] = t) : t = V[0];
            let Y = t,
                {
                    symbol: X,
                    disabled: ee,
                    space: et,
                    spaceTheme: en
                } = e,
                eo = $ && !et,
                ea = (0, l.x)(f.a, {
                    documentType: et ? void 0 : e.documentType,
                    namespace: et ? null : e.namespace,
                    surface: "editor"
                })?.[32],
                er = null != X && "none" !== X.kind || null != ea,
                ei = !er && !et && ($ || e.externalEditingControls || null != e.openNativePicker),
                el = e.externalEditingControls && et && !er;
            if (V[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => () => {
                    Z.current?.abort(), Z.current = null
                }, V[1] = n) : n = V[1], V[2] !== ee || V[3] !== el ? (k = [el, ee], V[2] = ee, V[3] = el, V[4] = k) : k = V[4], (0, c.useLayoutEffect)(n, k), (ee || el) && J && Y(), el) return null;
            V[5] !== ei || V[6] !== q ? (I = ei ? q.formatMessage({
                id: "codex.space.page.symbol.add",
                defaultMessage: "Add icon"
            }) : q.formatMessage({
                id: "codex.space.page.symbol.change",
                defaultMessage: "Change icon"
            }), V[5] = ei, V[6] = q, V[7] = I) : I = V[7];
            let ec = I;
            V[8] !== ea ? (A = null == ea ? (0, o.jsx)(u.ed, {}) : (0, o.jsx)(ea, {}), V[8] = ea, V[9] = A) : A = V[9];
            let es = A,
                ed = es;
            if (X?.kind === "emoji") {
                let e;
                V[10] !== X.value ? (e = (0, o.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, o.jsx)(y.a, {
                        emoji: X.value,
                        size: "large"
                    })
                }), V[10] = X.value, V[11] = e) : e = V[11], ed = e
            } else if (X?.kind === "icon") {
                let e, t;
                V[12] !== es || V[13] !== et ? (e = et ? (0, o.jsx)(u.Gc, {
                    className: "size-12"
                }) : es, V[12] = es, V[13] = et, V[14] = e) : e = V[14], V[15] !== X.color || V[16] !== X.value || V[17] !== e ? (t = (0, o.jsx)("span", {
                    className: "flex size-full items-center",
                    children: (0, o.jsx)(v.a, {
                        className: "size-12",
                        color: X.color,
                        defaultIcon: e,
                        icon: X.value
                    })
                }), V[15] = X.color, V[16] = X.value, V[17] = e, V[18] = t) : t = V[18], ed = t
            }
            if (null != e.legacyEmoji) {
                let t;
                V[19] !== ed || V[20] !== e.findContextId || V[21] !== e.legacyEmoji ? (t = (0, o.jsx)(M, {
                    emoji: e.legacyEmoji,
                    findContextId: e.findContextId,
                    children: ed
                }), V[19] = ed, V[20] = e.findContextId, V[21] = e.legacyEmoji, V[22] = t) : t = V[22], ed = t
            }
            let ep = ei ? "iconTouch" : "compact",
                eu = er ? "self-start" : "absolute end-0 top-1/2 -translate-y-1/2",
                em = ei && "max-w-(--page-control-gutter)";
            V[23] !== eu || V[24] !== em ? (E = (0, i.b)(eu, em), V[23] = eu, V[24] = em, V[25] = E) : E = V[25];
            let eg = er ? "ghostMuted" : "ghost",
                ef = er ? void 0 : "small",
                eh = er ? "iconLarge" : ep,
                ev = !er;
            V[26] !== ee || V[27] !== ed || V[28] !== ec || V[29] !== eh || V[30] !== ev || V[31] !== E || V[32] !== eg || V[33] !== ef ? (T = (0, o.jsx)(d.a, {
                ref: G,
                className: E,
                "aria-label": ec,
                color: eg,
                disabled: ee,
                disabledAppearance: "unchanged",
                onClick: _,
                radius: ef,
                size: eh,
                uniform: ev,
                type: "button",
                children: ed
            }), V[26] = ee, V[27] = ed, V[28] = ec, V[29] = eh, V[30] = ev, V[31] = E, V[32] = eg, V[33] = ef, V[34] = T) : T = V[34];
            let eb = T;
            if (ee) {
                let e;
                return er ? (V[35] !== ed ? (e = (0, o.jsx)("span", {
                    className: "flex size-16 items-center justify-center border border-transparent",
                    children: ed
                }), V[35] = ed, V[36] = e) : e = V[36], e) : null
            }
            V[37] !== ee || V[38] !== q || V[39] !== e || V[40] !== X ? (z = async function() {
                if (ee) return;
                Z.current?.abort(), Z.current = null;
                let t = G.current;
                if (null == e.openNativePicker || null == t) return void U(!0);
                let n = function(e, t, n) {
                    let o = (0, j.d)(e.ownerDocument, e.getBoundingClientRect());
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
                        colors: h.a,
                        anchor: o
                    }
                }(t, X, q);
                if (null == n) return void U(!0);
                let o = new AbortController;
                Z.current = o;
                let a = await e.openNativePicker(n, o.signal);
                if (!o.signal.aborted) {
                    if (Z.current = null, "unsupported" === a.outcome || "error" === a.outcome) return void U(!0);
                    "handled" === a.outcome && e.onChange(a.symbol), e.onClose?.()
                }
            }, V[37] = ee, V[38] = q, V[39] = e, V[40] = X, V[41] = z) : z = V[41];
            let ey = z;
            V[42] !== e ? (N = null == e.onClose ? void 0 : t => {
                t.preventDefault(), e.onClose?.()
            }, V[42] = e, V[43] = N) : N = V[43];
            let ex = N,
                ej = et && X?.kind !== "emoji" ? "icon" : "emoji",
                ew = eo ? "sheet" : "grid",
                ek = !eo,
                eI = eo ? "calc(70dvh - 4rem - env(safe-area-inset-bottom))" : void 0;
            V[44] !== ee || V[45] !== e.onChange || V[46] !== eo || V[47] !== X || V[48] !== ej || V[49] !== ew || V[50] !== ek || V[51] !== eI || V[52] !== en ? (L = (0, o.jsx)(b.a, {
                disabled: ee,
                value: X,
                defaultColor: en,
                commitColorOnSelect: eo,
                defaultKind: ej,
                layout: ew,
                embedded: eo,
                autoFocus: ek,
                availableHeight: eI,
                onChange: e.onChange,
                onSelect: Y,
                onClear: Y
            }), V[44] = ee, V[45] = e.onChange, V[46] = eo, V[47] = X, V[48] = ej, V[49] = ew, V[50] = ek, V[51] = eI, V[52] = en, V[53] = L) : L = V[53];
            let eM = L,
                eC = J && !eo;
            V[54] !== ey ? (Q = e => {
                e ? ey() : Y()
            }, V[54] = ey, V[55] = Q) : Q = V[55], V[56] !== ei || V[57] !== er ? (B = er ? "self-start" : (0, i.b)(C.a.PageTitle, "absolute top-0 end-full font-semibold", !ei && "pe-2"), V[56] = ei, V[57] = er, V[58] = B) : B = V[58];
            let eA = er || ei || J,
                eP = er ? "flex" : "relative inline-block h-[1cap] align-baseline";
            return V[59] !== eb ? (D = (0, o.jsx)(m.e, {
                asChild: !0,
                children: eb
            }), V[59] = eb, V[60] = D) : D = V[60], V[61] !== ec || V[62] !== J || V[63] !== D ? (F = (0, o.jsx)(r.a, {
                content: ec,
                disabled: J,
                children: D
            }), V[61] = ec, V[62] = J, V[63] = D, V[64] = F) : F = V[64], V[65] !== eP || V[66] !== F ? (O = (0, o.jsx)("span", {
                className: eP,
                children: F
            }), V[65] = eP, V[66] = F, V[67] = O) : O = V[67], V[68] !== B || V[69] !== eA || V[70] !== O ? (W = (0, o.jsx)(w.a, {
                className: B,
                anchorSelector: "[data-page-title]",
                active: eA,
                children: O
            }), V[68] = B, V[69] = eA, V[70] = O, V[71] = W) : W = V[71], V[72] !== ec || V[73] !== eM || V[74] !== ex ? (K = (0, o.jsx)(m.c, {
                className: "z-50 outline-hidden",
                "aria-label": ec,
                align: "center",
                onCloseAutoFocus: ex,
                onClick: S,
                unstyled: !0,
                children: eM
            }), V[72] = ec, V[73] = eM, V[74] = ex, V[75] = K) : K = V[75], V[76] !== ec || V[77] !== J || V[78] !== eM || V[79] !== ex || V[80] !== eo ? (R = J && eo && (0, o.jsxs)(p.a, {
                open: !0,
                size: "sheet",
                variant: "opaque",
                onOpenChange: e => {
                    e || Y()
                },
                contentProps: {
                    shouldStopPointerDownPropagation: !1,
                    onCloseAutoFocus: ex,
                    onOpenAutoFocus: P
                },
                children: [(0, o.jsx)(p.e, {
                    className: "px-4 pt-4 pb-3 text-center text-base font-semibold",
                    children: ec
                }), eM]
            }), V[76] = ec, V[77] = J, V[78] = eM, V[79] = ex, V[80] = eo, V[81] = R) : R = V[81], V[82] !== eC || V[83] !== Q || V[84] !== W || V[85] !== K || V[86] !== R ? (H = (0, o.jsxs)(m.a, {
                modal: !0,
                open: eC,
                onOpenChange: Q,
                children: [W, K, R]
            }), V[82] = eC, V[83] = Q, V[84] = W, V[85] = K, V[86] = R, V[87] = H) : H = V[87], H
        }

        function P(e) {
            e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
        }

        function S(e) {
            return e.stopPropagation()
        }

        function _(e) {
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
                let m = void 0 === i ? "toolbar" : i,
                    g = void 0 === s ? "ghostActive" : s,
                    f = !0 === n["aria-expanded"];
                return u[5] !== m || u[6] !== g || u[7] !== t || u[8] !== n ? (d = "viewer" === m ? (0, o.jsx)(c.g, {
                    ...n,
                    "aria-label": t,
                    uniform: !0
                }) : (0, o.jsx)(l.a, {
                    ...n,
                    "aria-label": t,
                    color: g,
                    size: "toolbar",
                    uniform: !0
                }), u[5] = m, u[6] = g, u[7] = t, u[8] = n, u[9] = d) : d = u[9], u[10] !== t || u[11] !== f || u[12] !== d ? (p = (0, o.jsx)(r.a, {
                    content: t,
                    disabled: f,
                    children: d
                }), u[10] = t, u[11] = f, u[12] = d, u[13] = p) : p = u[13], p
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
                    defaultMessage: "Page editing tools"
                }), s[3] = d, s[4] = r) : r = s[4], s[5] !== t || s[6] !== n || s[7] !== r ? (l = (0, o.jsx)(c.i, {
                    ...n,
                    label: r,
                    children: t
                }), s[5] = t, s[6] = n, s[7] = r, s[8] = l) : l = s[8], l
            }
        })
    }),
    JyrC: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("slpy"),
            i = n("on57"),
            l = n("zd8w"),
            c = n("v7qY"),
            s = n("Wf1j"),
            d = n("BzQ3"),
            p = n("MCtJ"),
            u = n("bUax"),
            m = n("hZSj"),
            g = n("AQ4m"),
            f = n("j9wQ");
        n("Wj4L");
        var h = n("zTDg");

        function v(e) {
            let t, n, l, d, p, m, v, y, x, j, w, k, I, M, C, A, P, S, _, E, T, z, N, L, Q, B, D = (0, a.c)(84),
                F = (0, s.a)(),
                {
                    inset: O,
                    contentFade: W,
                    navigation: K,
                    titlePlacement: R,
                    actions: H,
                    documentControlsContainers: V,
                    download: q,
                    saveStatus: J,
                    people: U,
                    automations: G,
                    requestEditAccess: Z,
                    comments: $,
                    meeting: Y,
                    supplementalActions: X,
                    connectionStatus: ee,
                    onClose: et,
                    tabId: en,
                    sharing: eo
                } = e,
                ea = void 0 !== O && O,
                er = void 0 !== W && W,
                ei = void 0 === R ? "toolbar" : R;
            D[0] !== H || D[1] !== e.actionsGrouped ? (t = e.actionsGrouped || null == H ? H : (0, o.jsx)(h.b, {
                children: H
            }), D[0] = H, D[1] = e.actionsGrouped, D[2] = t) : t = D[2];
            let el = t;
            D[3] !== G || D[4] !== $ ? (n = (0, o.jsxs)(o.Fragment, {
                children: [$, G]
            }), D[3] = G, D[4] = $, D[5] = n) : n = D[5];
            let ec = n,
                es = ec;
            if (null == V) {
                let e;
                D[6] !== G || D[7] !== $ || D[8] !== q || D[9] !== F || D[10] !== ec ? (e = $ || G || q ? (0, o.jsx)(f.i, {
                    hideWhenEmpty: !0,
                    label: F.formatMessage({
                        id: "codex.space.page.header.tools",
                        defaultMessage: "Page tools"
                    }),
                    children: (0, o.jsxs)(r.a.DefaultsProvider, {
                        side: "bottom",
                        children: [ec, q]
                    })
                }) : null, D[6] = G, D[7] = $, D[8] = q, D[9] = F, D[10] = ec, D[11] = e) : e = D[11], es = e
            }
            D[12] !== X ? (l = {
                id: "supplemental",
                content: X,
                hidePriority: 3
            }, D[12] = X, D[13] = l) : l = D[13], D[14] === Symbol.for("react.memo_cache_sentinel") ? (d = [{
                priority: 5,
                selector: "[data-page-automation-control]"
            }], D[14] = d) : d = D[14], D[15] !== es ? (p = {
                id: "page-tools",
                collapseSteps: d,
                content: es
            }, D[15] = es, D[16] = p) : p = D[16], D[17] !== Y ? (m = {
                id: "meeting",
                content: Y,
                collapsePriority: 3
            }, D[17] = Y, D[18] = m) : m = D[18], D[19] !== l || D[20] !== p || D[21] !== m ? (v = [l, p, m], D[19] = l, D[20] = p, D[21] = m, D[22] = v) : v = D[22];
            let ed = v;
            D[23] !== K || D[24] !== ei ? (y = "toolbar" !== ei && (0, o.jsx)(g.b, {
                placement: ei,
                children: K
            }), D[23] = K, D[24] = ei, D[25] = y) : y = D[25], D[26] !== V || D[27] !== ed ? (x = V?.trailing != null ? (0, c.createPortal)((0, o.jsx)("div", {
                className: "flex min-w-0 items-center gap-0.5",
                children: ed.map(b)
            }), V.trailing) : null, D[26] = V, D[27] = ed, D[28] = x) : x = D[28];
            let ep = !ea && "ps-[var(--window-titlebar-inset-left,0px)] pe-[var(--window-titlebar-inset-right,0px)] rtl:ps-[var(--window-titlebar-inset-right,0px)] rtl:pe-[var(--window-titlebar-inset-left,0px)]";
            D[29] !== ep ? (j = (0, i.b)(ep, "w-full"), D[29] = ep, D[30] = j) : j = D[30];
            let eu = er && "toolbar" === ei,
                em = er ? "overlay" : void 0;
            D[31] !== K || D[32] !== ei ? (w = "toolbar" !== ei || null == K ? null : (0, o.jsx)("div", {
                className: "flex min-w-0 items-center",
                children: K
            }), D[31] = K, D[32] = ei, D[33] = w) : w = D[33], D[34] !== w ? (k = {
                id: "title",
                content: w,
                collapsePriority: 1
            }, D[34] = w, D[35] = k) : k = D[35];
            let eg = null == V ? el : null;
            return D[36] !== eg ? (I = {
                id: "editing",
                content: eg,
                collapsePriority: 2
            }, D[36] = eg, D[37] = I) : I = D[37], D[38] !== J ? (M = {
                id: "save-status",
                content: J
            }, D[38] = J, D[39] = M) : M = D[39], D[40] !== k || D[41] !== I || D[42] !== M ? (C = [k, I, M], D[40] = k, D[41] = I, D[42] = M, D[43] = C) : C = D[43], D[44] !== Z ? (A = {
                id: "request-edit-access",
                content: Z
            }, D[44] = Z, D[45] = A) : A = D[45], D[46] !== ee ? (P = {
                id: "connection-status",
                content: ee,
                hidePriority: 3
            }, D[46] = ee, D[47] = P) : P = D[47], D[48] !== V || D[49] !== ed || D[50] !== q ? (S = null == V ? ed : [{
                id: "download",
                content: q
            }], D[48] = V, D[49] = ed, D[50] = q, D[51] = S) : S = D[51], D[52] !== e.overflow ? (_ = {
                id: "overflow",
                content: e.overflow
            }, D[52] = e.overflow, D[53] = _) : _ = D[53], D[54] !== e.persistentActions ? (E = {
                id: "artifact-actions",
                content: e.persistentActions
            }, D[54] = e.persistentActions, D[55] = E) : E = D[55], D[56] !== F || D[57] !== U || D[58] !== eo ? (T = null == eo && null == U ? null : (0, o.jsxs)(f.i, {
                hideWhenEmpty: !0,
                label: F.formatMessage({
                    id: "codex.space.page.header.sharing",
                    defaultMessage: "Sharing"
                }),
                children: [U, eo]
            }), D[56] = F, D[57] = U, D[58] = eo, D[59] = T) : T = D[59], D[60] !== T ? (z = {
                id: "sharing",
                content: T,
                collapsePriority: 4
            }, D[60] = T, D[61] = z) : z = D[61], D[62] !== et || D[63] !== en ? (N = {
                id: "window-controls",
                content: (0, o.jsx)(u.a, {
                    tabId: en,
                    onClose: et
                })
            }, D[62] = et, D[63] = en, D[64] = N) : N = D[64], D[65] !== A || D[66] !== P || D[67] !== S || D[68] !== _ || D[69] !== E || D[70] !== z || D[71] !== N ? (L = [A, P, ...S, _, E, z, N], D[65] = A, D[66] = P, D[67] = S, D[68] = _, D[69] = E, D[70] = z, D[71] = N, D[72] = L) : L = D[72], D[73] !== ea || D[74] !== j || D[75] !== eu || D[76] !== em || D[77] !== C || D[78] !== L ? (Q = (0, o.jsx)(f.l, {
                "data-page-toolbar": !0,
                className: j,
                contentFade: eu,
                density: "surface",
                inset: ea,
                placement: em,
                leading: C,
                trailing: L
            }), D[73] = ea, D[74] = j, D[75] = eu, D[76] = em, D[77] = C, D[78] = L, D[79] = Q) : Q = D[79], D[80] !== y || D[81] !== x || D[82] !== Q ? (B = (0, o.jsxs)("div", {
                className: "@container/page-toolbar w-full min-w-0",
                children: [y, x, Q]
            }), D[80] = y, D[81] = x, D[82] = Q, D[83] = B) : B = D[83], B
        }

        function b(e) {
            return (0, o.jsx)(l.Fragment, {
                children: e.content
            }, e.id)
        }

        function y(e) {
            let t, n, r, l = (0, a.c)(16),
                {
                    children: c,
                    contentFade: s,
                    separator: p,
                    surface: u,
                    overlay: g,
                    titlePlacement: f
                } = e,
                h = void 0 !== s && s,
                v = g ?? "side-panel" === u;
            if ("window" === u || "side-panel" !== u && (0, m.a)("/space/:pageId")) {
                let e;
                return l[0] !== c || l[1] !== h || l[2] !== p ? (e = (0, o.jsx)(d.a.Header, {
                    contentFade: h,
                    separator: p,
                    children: c
                }), l[0] = c, l[1] = h, l[2] = p, l[3] = e) : e = l[3], e
            }
            if ("side-panel" === u || "route-titlebar" === (void 0 === f ? "toolbar" : f)) {
                let e, t, n = v ? "absolute inset-x-0 top-0" : "relative";
                return l[4] !== n ? (e = (0, i.b)("pointer-events-none z-30 shrink-0", n), l[4] = n, l[5] = e) : e = l[5], l[6] !== c || l[7] !== e ? (t = (0, o.jsx)("div", {
                    className: e,
                    children: c
                }), l[6] = c, l[7] = e, l[8] = t) : t = l[8], t
            }
            l[9] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(d.a.MainContentLayout, {
                layout: "custom-titlebar"
            }), l[9] = t) : t = l[9];
            let b = v ? "absolute inset-x-0 top-0" : "relative";
            return l[10] !== b ? (n = (0, i.b)("pointer-events-none z-30 shrink-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]", b), l[10] = b, l[11] = n) : n = l[11], l[12] !== c || l[13] !== p || l[14] !== n ? (r = (0, o.jsxs)(o.Fragment, {
                children: [t, (0, o.jsx)(d.a.Header, {
                    className: n,
                    inline: !0,
                    separator: p,
                    children: c
                })]
            }), l[12] = c, l[13] = p, l[14] = n, l[15] = r) : r = l[15], r
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, i, l, c, s, d, p, u = (0, a.c)(20);
                u[0] !== e ? ({
                    surface: r,
                    contentFade: i,
                    separator: l,
                    overlay: n,
                    onClose: t,
                    ...c
                } = e, u[0] = e, u[1] = t, u[2] = n, u[3] = r, u[4] = i, u[5] = l, u[6] = c) : (t = u[1], n = u[2], r = u[3], i = u[4], l = u[5], c = u[6]);
                let g = void 0 !== i && i,
                    f = void 0 === l || l;
                u[7] !== r ? (s = "window" === r || "side-panel" !== r && (0, m.a)("/space/:pageId"), u[7] = r, u[8] = s) : s = u[8];
                let h = s,
                    b = g && !h,
                    x = !h,
                    j = h ? void 0 : t;
                return u[9] !== b || u[10] !== x || u[11] !== j || u[12] !== c ? (d = (0, o.jsx)(v, {
                    ...c,
                    contentFade: b,
                    inset: x,
                    onClose: j
                }), u[9] = b, u[10] = x, u[11] = j, u[12] = c, u[13] = d) : d = u[13], u[14] !== n || u[15] !== f || u[16] !== r || u[17] !== d || u[18] !== c.titlePlacement ? (p = (0, o.jsx)(y, {
                    surface: r,
                    separator: f,
                    overlay: n,
                    titlePlacement: c.titlePlacement,
                    children: d
                }), u[14] = n, u[15] = f, u[16] = r, u[17] = d, u[18] = c.titlePlacement, u[19] = p) : p = u[19], p
            },
            b: y,
            c: function(e) {
                let t, n, r = (0, a.c)(6),
                    {
                        children: i,
                        documentType: l,
                        editor: c
                    } = e;
                r[0] !== l || r[1] !== c ? (t = !1, r[0] = l, r[1] = c, r[2] = t) : t = r[2];
                let s = t;
                return r[3] !== i || r[4] !== s ? (n = (0, o.jsx)(p.b, {
                    enabled: s,
                    contentInset: "default",
                    children: i
                }), r[3] = i, r[4] = s, r[5] = n) : n = r[5], n
            },
            d: v
        })
    }),
    WP5H: (function(e, t, n) {
        var o = n("j4Oi");
        let a = {
            kind: "icon",
            value: "graduation-cap",
            color: "blue"
        };
        n.d(t, {}, {
            a: async function(e, t, r) {
                let {
                    withPageMenuSession: i
                } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(753405), n.e(193172), n.e(156223)]).then(n.bind(n, "tKju"));
                r() && await i(e, t, "write", async e => {
                    r() && null == e.getSymbol() && null == (0, o.rc)(e.document.getText("title").toJSON()).emoji && e.mutateDocument(e => (0, o.nc)(e, a)) && await e.flush({
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
            r = n("Q840"),
            i = n("lAQI"),
            l = n("dQRk"),
            c = n("C9uP"),
            s = n("sjCL"),
            d = n("YF6h"),
            p = n("tSEg"),
            u = n("kpIY"),
            m = n("Nwp9"),
            g = n("Iq2T");
        let f = "spaces-workspace-chat-selections-v1",
            h = i.J(i.L(), i.F({
                ownerClientThreadId: i.L(),
                selection: c.b.nullable()
            }).or(i.F({
                ownerClientThreadId: i.L(),
                ownerSelected: i.j(),
                recentChats: i.g(c.b.nullable())
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
            v = (0, m.b)(f, {}, {
                coerceStoredValue: e => h.parse(e)
            }),
            b = (0, r.c)(p.a, e => {
                let {
                    get: t
                } = e, n = t(g.c);
                if (null != n.conversationId) return {
                    kind: "local",
                    conversationId: n.conversationId,
                    hostId: n.hostId
                };
                let o = t(g.j);
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
                let o = t(g.j);
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
                } = e, n = t(g.c), o = t(v)[n.accountKey], a = o?.selection ?? null;
                return o?.ownerClientThreadId !== n.clientThreadId || (0, c.a)(t(y), a) ? null : a
            }, {
                isEqual: a()
            }),
            j = (0, r.d)(p.a, (e, t) => {
                let {
                    get: n,
                    scope: o
                } = t;
                return (o.value.persistentWorkspace?.key !== "/space" || null == n(x)) && n(s.d, e)
            }),
            w = (0, r.c)(p.a, e => {
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
                let t = (0, g.a)(e);
                null != t && ((0, u.t)(f, {
                    entries: {
                        [t.accountKey]: {
                            value: {
                                ownerClientThreadId: t.clientThreadId,
                                selection: null
                            }
                        }
                    },
                    maxEntries: 500
                }), e.set(v, (0, u.k)(f, {})))
            },
            b: j,
            c: x,
            d: w,
            e: y,
            f: b
        })
    }),
    AQ4m: (function(e, t, n) {
        var o = n("ABep"),
            a = n("QosV"),
            r = n("IPUh"),
            i = n("zd8w"),
            l = n("BzQ3"),
            c = n("I7bK"),
            s = n("hbel"),
            d = n("lixQ");
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, s = (0, a.c)(5),
                    {
                        placement: p
                    } = e,
                    u = (0, i.useContext)(c.c)?.titlebarSlots;
                return "route-titlebar" !== p ? null : (s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.jsx)(l.a.MainContentLayout, {
                    layout: "full-bleed"
                }), s[0] = t) : t = s[0], s[1] !== u ? (n = u && (0, o.jsx)(d.b, {
                    container: u.main
                }), s[1] = u, s[2] = n) : n = s[2], s[3] !== n ? (r = (0, o.jsxs)(o.Fragment, {
                    children: [t, (0, o.jsx)(l.a.Header, {
                        desktopPlacement: "titlebar",
                        contentFade: !1,
                        divider: !1,
                        children: n
                    })]
                }), s[3] = n, s[4] = r) : r = s[4], r)
            },
            b: function(e) {
                let t, n, p, u = (0, a.c)(9),
                    {
                        placement: m,
                        children: g
                    } = e,
                    f = (0, i.useContext)(c.c);
                if ("toolbar" === m || null == f || null == g || !1 === g) return null;
                let h = "workspace-titlebar" === m;
                u[0] !== h || u[1] !== f ? (t = h ? (0, o.jsx)(r.a.div, {
                    "aria-hidden": !0,
                    className: "shrink-0",
                    style: {
                        width: f.titleBarLeftInset
                    }
                }) : null, u[0] = h, u[1] = f, u[2] = t) : t = u[2];
                let v = !h || "tab-strip-flush-start";
                return u[3] !== g || u[4] !== v ? (n = (0, o.jsx)(l.a.HeaderToolbar, {
                    inset: v,
                    children: g
                }), u[3] = g, u[4] = v, u[5] = n) : n = u[5], u[6] !== t || u[7] !== n ? (p = (0, o.jsx)(d.a, {
                    target: "main",
                    children: (0, o.jsx)(s.a, {
                        children: (0, o.jsxs)("div", {
                            className: "flex min-w-0 flex-1 items-center",
                            children: [t, n]
                        })
                    })
                }), u[6] = t, u[7] = n, u[8] = p) : p = u[8], p
            }
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
        let r = (0, a.f)({
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
            l = o.id.map(function(e) {
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
        var o = n("Q840"),
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
            r = n("Q840"),
            i = n("rEML"),
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
                    m = (0, r.y)(l.a),
                    g = `/settings/teams/${encodeURIComponent(u)}`;
                return d[0] !== m ? (t = e => {
                    e.defaultPrevented || 0 !== e.button || e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || (0, c.b)(m, s.a)
                }, d[0] = m, d[1] = t) : t = d[1], d[2] !== p || d[3] !== g || d[4] !== t ? (n = (0, o.jsx)(i.g, {
                    className: "-mx-1 -my-0.5 inline-flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm px-1 py-0.5 text-inherit! no-underline select-none hover:bg-secondary-ghost-hover hover:text-default! focus:outline-none! focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                    to: g,
                    onClick: t,
                    children: p
                }), d[2] = p, d[3] = g, d[4] = t, d[5] = n) : n = d[5], n
            }
        })
    })
};