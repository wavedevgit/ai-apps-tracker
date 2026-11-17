export const __rspack_esm_ids = [355084];
export const __webpack_modules__ = {
    fs8u: (function(e, t, n) {
        var i = n("Q840"),
            a = n("QcW8"),
            l = n("ZU27"),
            o = n("gbrq"),
            r = n("tSEg"),
            s = n("OMIV"),
            c = n("SHid"),
            u = n("dt6g"),
            d = n("WwnD"),
            h = n("Vhua");
        let p = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return null != t(a.fb) && null != t(l.l.activeTab$)
            }),
            m = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return t(p) && !t(h.i)
            }),
            f = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return t(p) && !t(a.F)
            });
        n.d(t, {}, {
            a: m,
            b: function(e, t, n) {
                let i = (0, u.a)(e, null == n || "pin" === n ? "tab_drag" : n, () => (0, d.b)(e, "chat", t));
                return i && e.get(s.e, "2163293173") && e.set(c.a, e.get(a.qb)), i && "pin" === n && (0, o.I)(e, !0), i
            },
            c: function(e, t, n, i) {
                if (null == n || !(n instanceof MouseEvent) || "pointercancel" === n.type || null == t || !e.get(m) || n.clientY < 0 || n.clientY > window.innerHeight) return null;
                let a = t.getBoundingClientRect();
                if (n.clientX <= a.left + 24) return "left";
                if (n.clientX >= a.right - 24) return "right";
                if (null == i) return null;
                let l = Math.max(0, a.height - i.bottomInset),
                    o = a.top + l / 2,
                    r = 144 * Math.min(184 * i.zoom, l) / 368,
                    s = 24 * Math.max(1, i.zoom),
                    c = Math.min(i.bottom, o + r) - Math.max(i.top, o - r);
                return i.right >= a.right - s && c > 0 ? "right" : null
            },
            d: f
        })
    }),
    wrxv: (function(e, t, n) {
        n.d(t, {}, {
            a: {
                type: "none"
            },
            b: {
                type: "pending"
            }
        })
    }),
    nb0y: (function(e, t, n) {
        n.d(t, {
            a: () => eE
        });
        var i = n("ABep"),
            a = n("QosV"),
            l = n("VwGH"),
            o = n("on57"),
            r = n("h24K"),
            s = n("K45w"),
            c = n("W5pg"),
            u = n("jCHb"),
            d = n("p5Yg"),
            h = n("IPUh"),
            p = n("suct"),
            m = n("Q840"),
            f = n("zd8w"),
            g = n("v7qY"),
            v = n("Wf1j"),
            b = n("oyxz"),
            x = n("qjLK"),
            y = n("I7bK"),
            w = n("XExW"),
            S = n("Q2Qp"),
            z = n("QcW8"),
            j = n("ZU27"),
            k = n("BzS0"),
            C = n("DUYS"),
            M = n("wD9O"),
            E = n("rsCP"),
            P = n("AclY"),
            N = n("sArP");
        let R = {
            height: 640,
            width: 560
        };
        var D = n("hZax"),
            T = n("V8uZ"),
            L = n("HgLj"),
            q = n("DGC8");

        function _(e) {
            let t, n, l, r, s, c, u, d, p, m, f = (0, a.c)(62),
                {
                    allowCompactResize: g,
                    animateSurface: v,
                    background: b,
                    children: x,
                    currentSize: y,
                    contentStyle: w,
                    contentRef: S,
                    fixedHorizontalEdge: z,
                    resizeFromCenter: j,
                    heightLabel: k,
                    isCompact: C,
                    isCompactChromeRevealed: M,
                    isMinimized: _,
                    keepSurfaceInset: I,
                    maximumSize: F,
                    minimizedContent: H,
                    minimizedSurfaceBounds: A,
                    minimumSize: W,
                    onResize: B,
                    onResizeEnd: O,
                    onResizingChange: $,
                    prefersCompactPresentation: V,
                    resizable: K,
                    sectionProps: X,
                    sectionRef: Y,
                    surfaceStyle: Q,
                    shouldReduceMotion: Z,
                    variant: U,
                    verticalResizeEdge: G,
                    widthLabel: J
                } = e,
                ee = void 0 !== g && g,
                et = void 0 === v || v,
                en = void 0 !== j && j,
                ei = void 0 === K || K,
                ea = (0, D.f)("2163293173"),
                el = !_ && (I || C && !M) ? 6 : 0;
            f[0] !== _ || f[1] !== A || f[2] !== el ? (t = _ && null != A ? A : {
                top: 0,
                right: el,
                bottom: el,
                left: el
            }, f[0] = _, f[1] = A, f[2] = el, f[3] = t) : t = f[3];
            let eo = t,
                er = "panel" !== b && "rounded-[inherit]";
            f[4] !== er ? (n = (0, o.b)("pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto", er), f[4] = er, f[5] = n) : n = f[5];
            let es = n,
                ec = "panel" !== b || V;
            f[6] !== X.ref || f[7] !== Y ? (l = (0, L.a)(Y, X.ref, P.c), f[6] = X.ref, f[7] = Y, f[8] = l) : l = f[8];
            let eu = !ea && V && "frame-Xbg62r",
                ed = V && "group/chat-frame focus:outline-none",
                eh = null != A ? "pointer-events-none" : "pointer-events-auto",
                ep = V && q.a.floatingSurface,
                em = I && q.a.singleLineSurface,
                ef = "floating" === U ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                eg = V ? "overflow-visible" : "overflow-hidden";
            f[9] !== eu || f[10] !== ed || f[11] !== eh || f[12] !== ep || f[13] !== em || f[14] !== ef || f[15] !== eg ? (r = (0, o.b)("flex flex-col text-default", eu, ed, eh, ep, em, ef, eg), f[9] = eu, f[10] = ed, f[11] = eh, f[12] = ep, f[13] = em, f[14] = ef, f[15] = eg, f[16] = r) : r = f[16];
            let ev = null != w ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== ev ? (s = (0, o.b)(ev), f[17] = ev, f[18] = s) : s = f[18], f[19] !== et || f[20] !== b || f[21] !== es || f[22] !== I || f[23] !== H || f[24] !== V || f[25] !== Z || f[26] !== eo || f[27] !== Q ? (c = V ? (0, i.jsx)(E.c, {
                asChild: !0,
                unstyled: "panel" !== b,
                variant: I ? "single-line" : "default",
                children: null != Q ? (0, i.jsx)(h.a.div, {
                    className: es,
                    "aria-hidden": null == H || void 0,
                    style: Q
                }, "panel-background") : (0, i.jsx)(h.a.div, {
                    className: es,
                    "aria-hidden": null == H || void 0,
                    animate: eo,
                    initial: !1,
                    transition: Z || !et ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: T.e
                    },
                    children: H
                }, "legacy-background")
            }) : null, f[19] = et, f[20] = b, f[21] = es, f[22] = I, f[23] = H, f[24] = V, f[25] = Z, f[26] = eo, f[27] = Q, f[28] = c) : c = f[28], f[29] !== ee || f[30] !== y || f[31] !== z || f[32] !== k || f[33] !== C || f[34] !== _ || f[35] !== F || f[36] !== W || f[37] !== B || f[38] !== O || f[39] !== $ || f[40] !== ei || f[41] !== en || f[42] !== eo || f[43] !== G || f[44] !== J ? (u = ei && (!C || ee) && !_ ? (0, i.jsx)("div", {
                className: "pointer-events-none absolute",
                style: eo,
                children: (0, i.jsx)("div", {
                    className: "pointer-events-auto contents",
                    children: (0, i.jsx)(N.a, {
                        currentSize: y,
                        defaultSize: R,
                        extendIntoToolbar: !1,
                        fixedHorizontalEdge: z,
                        resizeFromCenter: en,
                        heightLabel: k,
                        maximumSize: F,
                        minimumSize: W,
                        verticalEdge: C ? null : G,
                        widthLabel: J,
                        onResize: B,
                        onResizeEnd: O,
                        onResizingChange: $
                    })
                })
            }) : null, f[29] = ee, f[30] = y, f[31] = z, f[32] = k, f[33] = C, f[34] = _, f[35] = F, f[36] = W, f[37] = B, f[38] = O, f[39] = $, f[40] = ei, f[41] = en, f[42] = eo, f[43] = G, f[44] = J, f[45] = u) : u = f[45];
            let eb = null == Q ? null : H;
            return f[46] !== x || f[47] !== S || f[48] !== w || f[49] !== s || f[50] !== c || f[51] !== u || f[52] !== eb ? (d = (0, i.jsxs)(h.a.div, {
                ref: S,
                className: s,
                style: w,
                children: [c, u, eb, x]
            }), f[46] = x, f[47] = S, f[48] = w, f[49] = s, f[50] = c, f[51] = u, f[52] = eb, f[53] = d) : d = f[53], f[54] !== X || f[55] !== r || f[56] !== d || f[57] !== l ? (p = (0, i.jsx)(h.a.section, {
                ...X,
                ref: l,
                className: r,
                children: d
            }), f[54] = X, f[55] = r, f[56] = d, f[57] = l, f[58] = p) : p = f[58], f[59] !== p || f[60] !== ec ? (m = (0, i.jsx)(E.c, {
                asChild: !0,
                unstyled: ec,
                children: p
            }), f[59] = p, f[60] = ec, f[61] = m) : m = f[61], m
        }
        n("fs8u");
        var I = n("Sm6l"),
            F = n("bf6R");

        function H(e) {
            let t, n, l, o, r, s, c, u, d, h, p, m = (0, a.c)(56),
                {
                    title: g,
                    preview: x,
                    onOpen: y,
                    onDismiss: w,
                    isWorking: S,
                    workingContent: z
                } = e,
                j = void 0 !== S && S,
                k = (0, D.f)("2163293173"),
                C = (0, v.a)();
            m[0] !== C || m[1] !== g ? (t = g ?? C.formatMessage({
                id: "quickChat.mainConversation",
                defaultMessage: "Chat"
            }), m[0] = C, m[1] = g, m[2] = t) : t = m[2];
            let M = t,
                P = (0, f.useEffectEvent)(w);
            if (m[3] !== k || m[4] !== P || m[5] !== j ? (n = () => {
                    if (!k || j) return;
                    let e = window.setTimeout(() => P(), 1e4);
                    return () => window.clearTimeout(e)
                }, m[3] = k, m[4] = P, m[5] = j, m[6] = n) : n = m[6], m[7] !== k || m[8] !== j ? (l = [k, j], m[7] = k, m[8] = j, m[9] = l) : l = m[9], (0, f.useEffect)(n, l), !k) {
                let e, t, n, a, l, o, r, s, c, u;
                return m[10] !== C || m[11] !== M ? (e = C.formatMessage({
                    id: "quickChat.openCompletedResponse",
                    defaultMessage: "Open completed response: {title}"
                }, {
                    title: M
                }), m[10] = C, m[11] = M, m[12] = e) : e = m[12], m[13] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(F.lc, {
                    className: "text-success"
                }), m[13] = t) : t = m[13], m[14] !== M ? (n = (0, i.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2 text-sm font-semibold text-default",
                    children: [t, (0, i.jsx)("span", {
                        className: "truncate",
                        children: M
                    })]
                }), m[14] = M, m[15] = n) : n = m[15], m[16] !== x ? (a = x || (0, i.jsx)(b.a, {
                    id: "quickChat.responseReady",
                    defaultMessage: "Response ready"
                }), m[16] = x, m[17] = a) : a = m[17], m[18] !== a ? (l = (0, i.jsx)("span", {
                    className: "block truncate text-sm text-secondary",
                    children: a
                }), m[18] = a, m[19] = l) : l = m[19], m[20] !== y || m[21] !== e || m[22] !== n || m[23] !== l ? (o = (0, i.jsxs)("button", {
                    className: "min-w-0 flex-1 cursor-interaction rounded-[inherit] px-4 py-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    "aria-label": e,
                    type: "button",
                    onClick: y,
                    children: [n, l]
                }), m[20] = y, m[21] = e, m[22] = n, m[23] = l, m[24] = o) : o = m[24], m[25] !== C ? (r = C.formatMessage({
                    id: "quickChat.dismissCompletedResponse",
                    defaultMessage: "Dismiss and mark as read"
                }), m[25] = C, m[26] = r) : r = m[26], m[27] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(F.uj, {
                    className: "pointer-events-none"
                }), m[27] = s) : s = m[27], m[28] !== w || m[29] !== r ? (c = (0, i.jsx)("div", {
                    className: "absolute -top-1 -left-1 flex rounded-full bg-surface",
                    children: (0, i.jsx)(I.a, {
                        "aria-label": r,
                        color: "outlineSurface",
                        radius: "full",
                        size: "iconCircleSm",
                        onClick: w,
                        children: s
                    })
                }), m[28] = w, m[29] = r, m[30] = c) : c = m[30], m[31] !== o || m[32] !== c ? (u = (0, i.jsxs)(E.c, {
                    className: "relative flex shrink-0 select-none",
                    role: "status",
                    variant: "notice",
                    children: [o, c]
                }), m[31] = o, m[32] = c, m[33] = u) : u = m[33], u
            }
            return m[34] !== C || m[35] !== M ? (o = C.formatMessage({
                id: "quickChat.openCompletedResponse",
                defaultMessage: "Open completed response: {title}"
            }, {
                title: M
            }), m[34] = C, m[35] = M, m[36] = o) : o = m[36], m[37] !== j || m[38] !== x || m[39] !== z ? (r = j ? z ?? (0, i.jsx)(b.a, {
                id: "quickChat.responseWorking",
                defaultMessage: "Working…"
            }) : x || (0, i.jsx)(b.a, {
                id: "quickChat.responseReady",
                defaultMessage: "Response ready"
            }), m[37] = j, m[38] = x, m[39] = z, m[40] = r) : r = m[40], m[41] !== r ? (s = (0, i.jsx)("span", {
                className: "line-clamp-2 min-w-0 flex-1 text-sm whitespace-normal text-default",
                children: r
            }), m[41] = r, m[42] = s) : s = m[42], m[43] !== y || m[44] !== o || m[45] !== s ? (c = (0, i.jsx)(I.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 rounded-[inherit] px-4 py-3 pe-10 text-start",
                "aria-label": o,
                type: "button",
                onClick: y,
                children: s
            }), m[43] = y, m[44] = o, m[45] = s, m[46] = c) : c = m[46], m[47] !== C ? (u = C.formatMessage({
                id: "quickChat.dismissResponsePreview",
                defaultMessage: "Dismiss response preview"
            }), m[47] = C, m[48] = u) : u = m[48], m[49] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(F.uj, {
                className: "pointer-events-none"
            }), m[49] = d) : d = m[49], m[50] !== w || m[51] !== u ? (h = (0, i.jsx)("div", {
                className: "absolute top-3 right-2 flex rounded-full",
                children: (0, i.jsx)(I.a, {
                    "aria-label": u,
                    color: "ghostSecondary",
                    radius: "full",
                    size: "iconCircleSm",
                    onClick: w,
                    children: d
                })
            }), m[50] = w, m[51] = u, m[52] = h) : h = m[52], m[53] !== h || m[54] !== c ? (p = (0, i.jsxs)("div", {
                className: "relative flex shrink-0 select-none",
                role: "status",
                children: [c, h]
            }), m[53] = h, m[54] = c, m[55] = p) : p = m[55], p
        }
        var A = n("v0Gf"),
            W = n("nsuH");

        function B(e) {
            let t, n, l, o, r, s, c = (0, a.c)(23),
                {
                    items: u,
                    availableHeight: d,
                    isDockedTop: p,
                    shouldReduceMotion: m
                } = e,
                g = (0, D.f)("2163293173"),
                [v, b] = (0, f.useState)(null);
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t) => {
                let n = t.firstElementChild;
                n instanceof HTMLElement && b(n.offsetHeight)
            }, c[0] = t) : t = c[0];
            let x = (0, W.b)(t),
                y = Math.min(null == v ? d : 3 * v + 24, Math.max(0, d - 16)),
                w = .3 * !m;
            c[1] !== w ? (n = {
                duration: w,
                ease: T.e
            }, c[1] = w, c[2] = n) : n = c[2];
            let S = n,
                z = g ? "min-w-0" : "-mx-6 -my-2",
                j = g ? "overflow-y-auto overscroll-contain" : "overflow-y-auto overscroll-contain px-6 py-2",
                k = y + 16;
            c[3] !== k ? (l = {
                style: {
                    maxHeight: k
                }
            }, c[3] = k, c[4] = l) : l = c[4];
            let C = g ? "relative flex flex-col" : "relative flex flex-col gap-3";
            if (c[5] !== p || c[6] !== u || c[7] !== m || c[8] !== S) {
                let e;
                c[10] !== p || c[11] !== m || c[12] !== S ? (e = e => {
                    let {
                        id: t,
                        content: n
                    } = e;
                    return (0, i.jsx)(h.a.div, {
                        className: "shrink-0",
                        layout: !m && "position",
                        transition: S,
                        children: (0, i.jsx)(h.a.div, {
                            initial: {
                                opacity: 0,
                                transform: `translateY(${m?0:8*(p?-1:1)}px)`
                            },
                            animate: {
                                opacity: 1,
                                transform: "translateY(0px)"
                            },
                            transition: {
                                ...S,
                                opacity: {
                                    ease: "linear"
                                }
                            },
                            children: n
                        })
                    }, t)
                }, c[10] = p, c[11] = m, c[12] = S, c[13] = e) : e = c[13], o = u.map(e), c[5] = p, c[6] = u, c[7] = m, c[8] = S, c[9] = o
            } else o = c[9];
            return c[14] !== x || c[15] !== C || c[16] !== o ? (r = (0, i.jsx)("div", {
                ref: x,
                className: C,
                children: o
            }), c[14] = x, c[15] = C, c[16] = o, c[17] = r) : r = c[17], c[18] !== r || c[19] !== z || c[20] !== j || c[21] !== l ? (s = (0, i.jsx)(A.a, {
                className: z,
                fade: "mask",
                scrollClassName: j,
                scrollProps: l,
                children: r
            }), c[18] = r, c[19] = z, c[20] = j, c[21] = l, c[22] = s) : s = c[22], s
        }
        var O = n("wrxv"),
            $ = n("oNzN"),
            V = "active-PrspLR";
        let K = null;
        var X = n("EFj1"),
            Y = n("BjWL"),
            Q = n("vi3X"),
            Z = n("fDIZ"),
            U = n("AKr5"),
            G = n("i7gm"),
            J = n("X7C7"),
            ee = n("rmk3"),
            et = n("giDA"),
            en = n("YzWZ"),
            ei = n("eeV6"),
            ea = n("Xyz8"),
            el = n("zj7j"),
            eo = n("Z2JT");
        let er = (0, n("Nwp9").b)("quick-chat-size-v1", R);

        function es(e, t, n) {
            let i = e.get(er);
            e.set(er, t), (null == i || i.height !== t.height || i.width !== t.width) && n?.()
        }
        var ec = n("mphG"),
            eu = n("T1PX"),
            ed = n("TL6G"),
            eh = n("rkZ2"),
            ep = n("f4Vb"),
            em = n("OWtl"),
            ef = n("tSEg"),
            eg = n("j89V"),
            ev = n("El6m"),
            eb = n("KkZX"),
            ex = n("XMPL"),
            ey = n("ZDXf"),
            ew = n("fRoJ"),
            eS = n("bIvi");
        let ez = ["bottom-center", "bottom-left", "bottom-right"],
            ej = ["bottom-left", "bottom-right"],
            ek = "inset(0px 0px 0px 0px round var(--floating-panel-radius))",
            eC = {
                type: "spring",
                bounce: .16,
                duration: .42
            },
            eM = (0, m.u)(em.a, eF, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (e, t) => e.width === t.width && e.height === t.height,
                onMount: e => {
                    let t = window.visualViewport,
                        n = () => e(eF());
                    return window.addEventListener("resize", n), t?.addEventListener("resize", n), n(), () => {
                        window.removeEventListener("resize", n), t?.removeEventListener("resize", n)
                    }
                }
            });

        function eE(e) {
            let t, n, l, o, r = (0, a.c)(10);
            return r[0] !== e ? ({
                contentChat: t,
                ...n
            } = e, r[0] = e, r[1] = t, r[2] = n) : (t = r[1], n = r[2]), r[3] !== t || r[4] !== n ? (l = null == t ? n.renderMenu : e => e.contextMenuTrigger ?? (null == t.onOpenRightPane && n.renderMenu?.(e)), r[3] = t, r[4] = n, r[5] = l) : l = r[5], r[6] !== t || r[7] !== n || r[8] !== l ? (o = (0, i.jsx)(eP, {
                ...n,
                contentChat: t,
                renderMenu: l
            }), r[6] = t, r[7] = n, r[8] = l, r[9] = o) : o = r[9], o
        }

        function eP(e) {
            let t, n, l, N, A, G, ez, ej, eE, eP, eR, eD, eF, eH, eA, eW, eB, eO, e$, eV, eK, eX, eY, eQ, eZ, eU, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tp, tm, tf, tg, tv, tb, tx, ty, tw, tS, tz, tj, tk, tC, tM, tE, tP, tN, tR, tD, tT, tL, tq, t_, tI, tF, tH, tA, tW, tB, tO, t$, tV, tK, tX, tY, tQ, tZ, tU, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, np, nm, nf, ng, nv, nb, nx, ny, nw, nS, nz, nj, nk, nC, nM, nE, nP, nN, nR, nD, nT, nL, nq, n_, nI, nF, nH, nA, nW, nB, nO, n$, nV, nK, nX, nY, nQ, nZ, nU, nG, nJ, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, ie, it, ii, ia, il, io = (0, a.c)(867),
                {
                    ref: ir,
                    animateOnMount: is,
                    background: ic,
                    renderComposer: iu,
                    containerSize: id,
                    previewSide: ih,
                    canDockInRightPane: ip,
                    hasPagePicker: im,
                    dockThreadKey: ig,
                    canDock: iv,
                    preserveLayoutOnEscape: ib,
                    compactInputPosition: ix,
                    reservedDockPosition: iy,
                    footer: iw,
                    overlay: iS,
                    renderHeaderContent: iz,
                    headerInteractionDisabled: ij,
                    allowLegacyHeaderToggle: ik,
                    renderMenu: iC,
                    forceExpanded: iM,
                    hasConversation: iE,
                    isHidden: iP,
                    contentChat: iN,
                    isMinimized: iR,
                    isCollisionObstacle: iD,
                    onDragOver: iT,
                    onDragEnd: iL,
                    onEscape: iq,
                    onMinimizedChange: i_,
                    onResize: iI,
                    presentation: iF,
                    onPresentationChange: iH,
                    title: iA,
                    titleContent: iW,
                    minimizedIcon: iB,
                    minimizedMenuItems: iO,
                    restoreLabel: i$,
                    statusState: iV,
                    titleStatusState: iK,
                    notifications: iX,
                    workingPreview: iY,
                    compactWorkingPreview: iQ,
                    responsePreview: iZ,
                    showResponsePreview: iU,
                    previewBubble: iG,
                    emptyState: iJ,
                    renderTranscript: i0,
                    hasTranscript: i1,
                    pendingFormId: i2,
                    showComposerDivider: i3,
                    showHeader: i4
                } = e,
                i5 = void 0 !== is && is,
                i6 = void 0 !== ip && ip,
                i7 = void 0 === iv || iv,
                i8 = void 0 !== ib && ib,
                i9 = void 0 !== ij && ij,
                ae = void 0 === ik || ik,
                at = void 0 !== iM && iM,
                an = void 0 !== iP && iP,
                ai = void 0 === iK ? iV : iK,
                aa = void 0 === iU || iU,
                al = void 0 === i4 || i4,
                ao = (0, m.y)(em.a),
                ar = (0, m.y)(ef.a),
                as = null != iN,
                ac = iN?.onOpenRightPane,
                au = (0, m.z)(void 0 === i2 ? null : i2),
                ad = null != au,
                ah = (0, D.f)("2163293173"),
                ap = (0, f.useContext)(S.a),
                am = (0, f.useContext)(x.a),
                af = (0, f.useContext)(w.a)?.workspaceTargetWidth,
                ag = (0, f.useContext)(y.c),
                [av, ab] = (0, f.useState)(!1),
                [ax, ay] = (0, f.useState)(null),
                aw = ah && as && i7 && !an,
                aS = aw && "right" === ih,
                az = !aS && ah && !an && null != ih && null != ag && null != ap,
                aj = (0, m.z)(!!ah && void 0 !== ih && eh.c),
                ak = az && !aj,
                aC = (0, f.useRef)(null),
                aM = (0, m.z)(!!az && z.ib),
                aE = ah ? iJ : void 0,
                aP = i1 ?? null != i0,
                aN = aP || null != aE,
                aR = (0, m.z)(ig) ?? void 0,
                aD = void 0 === iD || iD ? "quick-chat" : void 0,
                aT = (0, f.useContext)(ev.b),
                aL = (0, m.z)(iX),
                aq = ad ? O.a : aL ?? O.a,
                a_ = (0, m.z)(iV);
            io[0] !== a_ || io[1] !== aq.type ? (t = "ready" === aq.type ? {
                ...a_,
                type: a_?.type ?? "idle",
                unread: !0
            } : a_, io[0] = a_, io[1] = aq.type, io[2] = t) : t = io[2];
            let aI = t,
                aF = (0, m.z)(ai),
                aH = ai === iV ? aI : aF,
                aA = (0, m.z)(ah && aa ? iZ : null),
                aW = !!aA,
                aB = (0, v.a)(),
                aO = (0, f.useId)(),
                a$ = (0, f.useId)(),
                aV = (0, M.c)(),
                aK = (0, eu.a)(),
                aX = (0, m.z)(eM);
            io[3] !== aX.height || io[4] !== aV ? (n = (0, M.b)(aX.height, aV), io[3] = aX.height, io[4] = aV, io[5] = n) : n = io[5];
            let aY = n,
                aQ = (0, M.b)(aX.width, aV),
                [aZ, aU] = (0, f.useState)(0),
                [aG, aJ] = (0, f.useState)(!1),
                [a0, a1] = (0, f.useState)(0),
                [a2, a3] = (0, f.useState)(null),
                [a4, a5] = (0, f.useState)(null),
                [a6, a7] = (0, f.useState)(0),
                [a8, a9] = (0, f.useState)(null);
            io[6] === Symbol.for("react.memo_cache_sentinel") ? (l = e => {
                e.contentRect.width > 0 && a9(e.contentRect.width)
            }, io[6] = l) : l = io[6];
            let le = (0, W.b)(l);
            io[7] === Symbol.for("react.memo_cache_sentinel") ? (N = e => {
                a7((0, ep.a)(e).height)
            }, io[7] = N) : N = io[7];
            let lt = (0, W.b)(N);
            io[8] === Symbol.for("react.memo_cache_sentinel") ? (A = e => {
                a1((0, ep.a)(e).height)
            }, io[8] = A) : A = io[8];
            let ln = (0, W.b)(A);
            io[9] !== ln ? (G = e => {
                a3(e), ln(e)
            }, io[9] = ln, io[10] = G) : G = io[10];
            let li = (0, eS.a)(G);
            io[11] === Symbol.for("react.memo_cache_sentinel") ? (ez = e => {
                aU((0, ep.a)(e).height)
            }, io[11] = ez) : ez = io[11];
            let la = (0, W.b)(ez),
                [ll, lo] = (0, f.useState)(0);
            io[12] === Symbol.for("react.memo_cache_sentinel") ? (ej = e => {
                lo((0, ep.a)(e).height)
            }, io[12] = ej) : ej = io[12];
            let lr = (0, W.b)(ej),
                ls = id?.width ?? aQ,
                lc = aQ < 640;
            io[13] !== i7 || io[14] !== ah ? (eE = () => i7 ? ah ? "bottom-right" : (0, en.a)() : "bottom-center", io[13] = i7, io[14] = ah, io[15] = eE) : eE = io[15];
            let [lu] = (0, f.useState)(eE), ld = aR ?? null;
            io[16] !== ld ? (eP = {
                threadKey: ld,
                minimized: !1
            }, io[16] = ld, io[17] = eP) : eP = io[17];
            let lh = (0, m.x)(i7 ? el.a : void 0, eP),
                lp = as && i7,
                lm = aR ?? null;
            io[18] !== lm ? (eR = {
                threadKey: lm,
                minimized: !0
            }, io[18] = lm, io[19] = eR) : eR = io[19];
            let lf = (0, m.x)(i7 && !as ? el.a : void 0, eR);
            io[20] === Symbol.for("react.memo_cache_sentinel") ? (eD = {}, io[20] = eD) : eD = io[20];
            let [lg, lv] = (0, f.useState)(eD), lb = (null != aR || ah ? null : lg.expanded) ?? lh ?? lu, lx = null == ix ? lb : lg.expanded ?? ix, ly = lc ? "bottom-center" : lx;
            io[21] !== ah || io[22] !== aR || io[23] !== ly || io[24] !== lp || io[25] !== lg || io[26] !== lf ? (eF = "bottom-right", lp ? eF = (0, ea.a)(ly) : ah || (eF = (null == aR ? lg.minimized : null) ?? lf ?? "bottom-right"), io[21] = ah, io[22] = aR, io[23] = ly, io[24] = lp, io[25] = lg, io[26] = lf, io[27] = eF) : eF = io[27];
            let lw = i7 ? (0, ea.f)(iR ? eF : ly, iy) : "bottom-center",
                lS = lw.startsWith("top"),
                lz = (0, m.z)(er),
                lj = (0, r.a)(),
                lk = (0, f.useRef)(!1);
            io[28] === Symbol.for("react.memo_cache_sentinel") ? (eH = {
                x: 0,
                y: 0
            }, io[28] = eH) : eH = io[28];
            let lC = (0, f.useRef)(eH),
                lM = (0, f.useRef)(null),
                lE = (0, f.useRef)(null),
                lP = (0, s.a)(0),
                lN = (0, s.a)(0),
                lR = (0, f.useRef)(null),
                lD = (0, f.useRef)(null),
                lT = (0, f.useRef)(null),
                lL = (0, f.useRef)(null),
                [lq, l_] = (0, f.useState)("compact"),
                [lI, lF] = (0, f.useState)(null),
                lH = iG?.id ?? "",
                lA = lI === lH,
                lW = iF ?? lq;
            io[29] !== aN || io[30] !== iF || io[31] !== as || io[32] !== iH ? (eA = e => {
                (as || "expanded" !== e || aN) && (null == iF && l_(e), lF(null), iH?.(e))
            }, io[29] = aN, io[30] = iF, io[31] = as, io[32] = iH, io[33] = eA) : eA = io[33];
            let lB = eA,
                [lO, l$] = (0, f.useState)(null),
                [lV, lK] = (0, f.useState)(!1),
                [lX, lY] = (0, f.useState)(!1),
                [lQ, lZ] = (0, f.useState)(!1),
                [lU, lG] = (0, f.useState)(!1),
                lJ = (0, f.useRef)(null);
            io[34] === Symbol.for("react.memo_cache_sentinel") ? (eW = e => {
                (null != lJ.current && (cancelAnimationFrame(lJ.current), lJ.current = null), null != e) ? lG(!0): lJ.current = requestAnimationFrame(() => {
                    lJ.current = null, lG(!1)
                })
            }, io[34] = eW) : eW = io[34];
            let l0 = eW;
            io[35] === Symbol.for("react.memo_cache_sentinel") ? (eB = () => () => {
                null != lJ.current && cancelAnimationFrame(lJ.current)
            }, eO = [], io[35] = eB, io[36] = eO) : (eB = io[35], eO = io[36]), (0, f.useEffect)(eB, eO);
            let [l1, l2] = (0, f.useState)(!1), [l3, l4] = (0, f.useState)(!1), [l5, l6] = (0, f.useState)(!0), [l7, l8] = (0, f.useState)(null), l9 = (0, f.useRef)(!1), [oe, ot] = (0, f.useState)(!1), [on, oi] = (0, f.useState)(0), [oa, ol] = (0, f.useState)(0), [oo, or] = (0, f.useState)(!1);
            io[37] !== ah || io[38] !== aV ? (e$ = (e, t) => {
                oi(ah ? (0, ep.a)(e).height : e.contentRect.height), or(e.contentRect.width < 640);
                let n = t.querySelector(`[${Y.a}]`)?.getBoundingClientRect().height ?? 0;
                ol(Math.max(0, e.contentRect.height - (0, M.b)(n, aV)))
            }, io[37] = ah, io[38] = aV, io[39] = e$) : e$ = io[39];
            let os = (0, W.b)(e$),
                [oc, ou] = (0, f.useState)(null),
                [od, oh] = (0, f.useState)(!1),
                [op, om] = (0, f.useState)(aR);
            op !== aR && (om(aR), lv({}), ab(!1), ay(null), l4(!1), l8(null), l$(null), lZ(!1), oh(!1), lF(null));
            let [of, og] = (0, f.useState)(au);
            of !== au && (og(au), l8(null), l$(null));
            let ov = !az && (iR || l7?.stage === "minimized"),
                ob = (0, s.a)(+!!ov);
            io[40] !== ob ? (eV = () => 1 - ob.get(), io[40] = ob, io[41] = eV) : eV = io[41];
            let ox = (0, c.a)(eV);
            io[42] !== ob ? (eK = e => ob.on("change", e), io[42] = ob, io[43] = eK) : eK = io[43];
            let oy = eK;
            io[44] !== ob ? (eX = () => 1 === ob.get(), io[44] = ob, io[45] = eX) : eX = io[45];
            let ow = eX;
            io[46] !== ov ? (eY = () => ov, io[46] = ov, io[47] = eY) : eY = io[47];
            let oS = (0, f.useSyncExternalStore)(oy, ow, eY);
            lO?.target !== "minimized" || ov || l$({
                target: lW
            }), io[48] !== aN || io[49] !== at || io[50] !== au || io[51] !== lW ? (eQ = (0, eo.b)({
                pendingFormId: au,
                presentation: lW,
                forceExpanded: at,
                hasTranscript: aN
            }), io[48] = aN, io[49] = at, io[50] = au, io[51] = lW, io[52] = eQ) : eQ = io[52];
            let {
                isCompact: oz,
                isChatCompact: oj,
                canTogglePresentation: ok
            } = eQ, oC = oz && !az, oM = iR && !az, oE = ah && !as ? !oz : al;
            (!as || an || iR || !oE) && lQ && lZ(!1);
            let oP = !iR && !ov && (ah && !as || !oz || lX || lU || lQ || av || aG),
                oN = (oE || az) && (as ? !iR && !ov : ah || oP),
                oR = ah && as && oC && oN && !an && !ad && !aj && null != iQ && aH?.type === "loading",
                oD = aa && ah && !ad && !lA && aP && (aW || !oR && aH?.type === "loading"),
                oT = oz && oD,
                oL = ah && oC && !an && !oM && !ad && void 0 !== iG,
                oq = oL && !lA && null != iG,
                o_ = oT || oq && iG.transient,
                oI = void 0 !== i3 && i3 || ah;
            io[53] !== as || io[54] !== an || io[55] !== iR || io[56] !== oE ? (eZ = () => {
                let e, t = lD.current;
                if (null == t || !as || an || iR || !oE) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, lZ(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), lZ(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, io[53] = as, io[54] = an, io[55] = iR, io[56] = oE, io[57] = eZ) : eZ = io[57], io[58] !== aR || io[59] !== as || io[60] !== an || io[61] !== iR || io[62] !== oE ? (eU = [aR, as, an, iR, oE], io[58] = aR, io[59] = as, io[60] = an, io[61] = iR, io[62] = oE, io[63] = eU) : eU = io[63], (0, f.useEffect)(eZ, eU);
            let oF = !an && !oz && !iR && !at && !av && !oe;
            io[64] !== a$ || io[65] !== lB || io[66] !== l$ ? (eG = e => {
                null == lD.current || null != e && e_(lD.current, e.target, a$) || (l$(null), lB("compact"))
            }, io[64] = a$, io[65] = lB, io[66] = l$, io[67] = eG) : eG = io[67];
            let oH = (0, f.useEffectEvent)(eG);
            io[68] !== oH || io[69] !== a$ ? (eJ = () => {
                let e = lD.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !e_(e, t, a$) && oH()
            }, io[68] = oH, io[69] = a$, io[70] = eJ) : eJ = io[70];
            let oA = (0, f.useEffectEvent)(eJ);
            io[71] !== ah || io[72] !== oA || io[73] !== oH || io[74] !== oF ? (e0 = () => {
                if (!oF) return;
                document.addEventListener("pointerdown", oH, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && oA()
                        })
                    };
                window.addEventListener("blur", t);
                let n = ah ? ed.c.subscribe("browser-sidebar-web-contents-pointer-down", () => oH()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", oH, !0)
                }
            }, io[71] = ah, io[72] = oA, io[73] = oH, io[74] = oF, io[75] = e0) : e0 = io[75], io[76] !== ah || io[77] !== oF ? (e1 = [ah, oF], io[76] = ah, io[77] = oF, io[78] = e1) : e1 = io[78], (0, f.useEffect)(e0, e1);
            let oW = aI?.type === "loading";
            io[79] !== i_ || io[80] !== lK || io[81] !== lB || io[82] !== l$ ? (e2 = () => {
                lD.current?.focus({
                    preventScroll: !0
                }), lK(!1), l$(null), i_(!1), lB("expanded")
            }, io[79] = i_, io[80] = lK, io[81] = lB, io[82] = l$, io[83] = e2) : e2 = io[83];
            let oB = (0, eS.a)(e2),
                [oO, o$] = (0, f.useState)(eN);
            io[84] === Symbol.for("react.memo_cache_sentinel") ? (e3 = e => {
                o$(t => new Set([...t, e]))
            }, io[84] = e3) : e3 = io[84];
            let oV = (0, eS.a)(e3);
            io[85] !== ah || io[86] !== oV || io[87] !== oB || io[88] !== aq ? (e4 = "ready" !== aq.type ? aq : {
                type: "ready",
                value: aq.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(H, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), oB()
                        },
                        onDismiss: ah ? () => oV(e.id) : e.onDismiss
                    })
                }))
            }, io[85] = ah, io[86] = oV, io[87] = oB, io[88] = aq, io[89] = e4) : e4 = io[89];
            let oK = e4,
                [oX, oY] = (0, f.useState)(oW);
            if (oX !== oW && (oY(oW), oh(!1), lF(null)), io[90] !== an || io[91] !== iR || io[92] !== oW || io[93] !== lH || io[94] !== o_ ? (e5 = () => {
                    if (!o_ || an || iR || oW) return;
                    let e = window.setTimeout(() => lF(lH), 1e4);
                    return () => window.clearTimeout(e)
                }, io[90] = an, io[91] = iR, io[92] = oW, io[93] = lH, io[94] = o_, io[95] = e5) : e5 = io[95], io[96] !== aR || io[97] !== an || io[98] !== iR || io[99] !== oW || io[100] !== lH || io[101] !== o_ ? (e6 = [aR, o_, an, iR, oW, lH], io[96] = aR, io[97] = an, io[98] = iR, io[99] = oW, io[100] = lH, io[101] = o_, io[102] = e6) : e6 = io[102], (0, f.useEffect)(e5, e6), io[103] !== oK || io[104] !== ah || io[105] !== oO || io[106] !== oB || io[107] !== oW || io[108] !== iA || io[109] !== iY || io[110] !== od) {
                if (e7 = oK, ah && oW && !od) {
                    let e, t;
                    io[112] === Symbol.for("react.memo_cache_sentinel") ? (e = () => oh(!0), io[112] = e) : e = io[112], io[113] !== oB || io[114] !== iA || io[115] !== iY ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(H, {
                            title: iA,
                            preview: "",
                            isWorking: !0,
                            workingContent: iY,
                            onOpen: oB,
                            onDismiss: e
                        })
                    }], io[113] = oB, io[114] = iA, io[115] = iY, io[116] = t) : t = io[116], e7 = {
                        type: "ready",
                        value: t
                    }
                } else if (ah && "ready" === oK.type) {
                    let e;
                    if (io[117] !== oK.value || io[118] !== oO) {
                        let t;
                        io[120] !== oO ? (t = e => !oO.has(e.id), io[120] = oO, io[121] = t) : t = io[121], e = oK.value.filter(t), io[117] = oK.value, io[118] = oO, io[119] = e
                    } else e = io[119];
                    e7 = {
                        ...oK,
                        value: e
                    }
                }
                io[103] = oK, io[104] = ah, io[105] = oO, io[106] = oB, io[107] = oW, io[108] = iA, io[109] = iY, io[110] = od, io[111] = e7
            } else e7 = io[111];
            "ready" !== e7.type && lV && lK(!1);
            let oQ = "ready" === e7.type && e7.value.length > 0 && (ov ? iR && (ah ? oS : lV) && !av : !ah && oz),
                oZ = aH?.type !== "loading" && (aH?.unread !== !0 || oQ) ? null : aH,
                oU = oW || aI?.unread === !0 && (iR || !oQ);
            io[122] !== e7.type || io[123] !== e7.value || io[124] !== ah || io[125] !== oV || io[126] !== oW || io[127] !== lK ? (e8 = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), lL.current?.contains(document.activeElement) && lT.current?.focus({
                            preventScroll: !0
                        }), ah) {
                        if (oW) oh(!0);
                        else if ("ready" === e7.type)
                            for (let e of e7.value) oV(e.id)
                    } else lK(!1)
            }, io[122] = e7.type, io[123] = e7.value, io[124] = ah, io[125] = oV, io[126] = oW, io[127] = lK, io[128] = e8) : e8 = io[128];
            let oG = (0, f.useEffectEvent)(e8);
            io[129] !== oG || io[130] !== oQ || io[131] !== an || io[132] !== iR ? (e9 = () => {
                if (!an && iR && oQ) return document.addEventListener("keydown", oG), () => document.removeEventListener("keydown", oG)
            }, io[129] = oG, io[130] = oQ, io[131] = an, io[132] = iR, io[133] = e9) : e9 = io[133], io[134] !== oQ || io[135] !== an || io[136] !== iR ? (te = [oQ, an, iR], io[134] = oQ, io[135] = an, io[136] = iR, io[137] = te) : te = io[137], (0, f.useEffect)(e9, te);
            let oJ = oE && oN && !oM && !oR && null == iz,
                o0 = ah && as && oJ && aH?.unread === !0;
            io[138] !== aB ? (tt = aB.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running"
            }), io[138] = aB, io[139] = tt) : tt = io[139];
            let o1 = tt;
            io[140] !== aB ? (tn = aB.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response"
            }), io[140] = aB, io[141] = tn) : tn = io[141];
            let o2 = tn,
                o3 = oW ? o1 : o2,
                o4 = lw.endsWith("left"),
                o5 = "bottom-center" === lw,
                o6 = o4 ? "left" : "right",
                o7 = lS && !ov ? a0 : 0,
                o8 = 46 * (null == id) + (lS || ov ? 0 : a0),
                o9 = oc ?? lz ?? R,
                re = oQ && !iR ? ll : 0,
                rt = (id?.height ?? aY) - aZ - (lS ? re + o7 : 0),
                rn = Math.max(0, rt - 32 - o8 - (lS ? 0 : re)),
                ri = null == id ? ls / 2 : Math.max(0, ls - 20),
                ra = ah && null != a8 ? Math.min(ri, a8 + 12) : ri,
                rl = (on || 46) + (oE && oN ? 46 : 0) + (oT ? a6 : 0) + 6 * !ah,
                ro = as && oE && oN,
                rr = (on || 46) + 46 * !!ro + (oD ? a6 : 0) + 6 * !ah,
                rs = eI(o9.height, Math.min(Math.max(400, on + 46), rn), rn),
                rc = Math.min(oz ? rl : Math.max(400, rl), rn),
                ru = lc ? ra : Math.min(372, ra),
                rd = eI(oz ? rl : o9.height, rc, rn),
                rh = (0, s.a)(rd),
                rp = (0, f.useRef)(!1),
                rm = on > 0,
                rf = an || aK || oe || !ah && (iR || null != lO) ? 0 : .3,
                rg = eI(o9.width + 12, ru, ra),
                rv = (0, ea.d)(lw, {
                    height: rd,
                    width: rg
                }, rt, ls, 12, o8),
                rb = (0, s.a)(0);
            io[142] === Symbol.for("react.memo_cache_sentinel") ? (ti = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, io[142] = ti) : ti = io[142];
            let rx = (0, s.a)(ti);
            io[143] !== aM || io[144] !== az || io[145] !== ag || io[146] !== ap || io[147] !== rx || io[148] !== rb || io[149] !== ih || io[150] !== aK || io[151] !== aV || io[152] !== af ? (ta = () => {
                let e, t = az && ag && ap ? lD.current?.offsetParent : null;
                if (az && ag && ap && t instanceof HTMLElement) {
                    let n = ap.getBoundingClientRect(),
                        i = t.getBoundingClientRect(),
                        a = (0, M.b)(n.width, aV),
                        l = af?.get() ?? a,
                        o = (0, C.f)(ag.contentPaneWidthRatio.get(), l, "unified"),
                        r = aM ? o : l - o;
                    e = `--floating-chat-dock-${ih}`, ap.style.setProperty(e, `${r}px`), rx.set({
                        x: (0, M.b)(n.left - i.left, aV) + (a - ("left" === ih ? l : r)) + 4 - 6,
                        y: (0, M.b)(n.top - i.top, aV) + 4,
                        width: r - 8 + 12,
                        height: (0, M.b)(i.bottom - n.top, aV) - 8 + 6
                    })
                }
                let n = +!!az,
                    i = rb.get() === n ? null : (0, u.a)(rb, n, {
                        duration: .15 * !aK,
                        ease: T.e
                    });
                return () => {
                    i?.stop(), null != e && ap?.style.removeProperty(e)
                }
            }, io[143] = aM, io[144] = az, io[145] = ag, io[146] = ap, io[147] = rx, io[148] = rb, io[149] = ih, io[150] = aK, io[151] = aV, io[152] = af, io[153] = ta) : ta = io[153], io[154] !== id || io[155] !== aM || io[156] !== az || io[157] !== ag || io[158] !== ap || io[159] !== rx || io[160] !== rb || io[161] !== ih || io[162] !== aK || io[163] !== aV || io[164] !== af ? (tl = [id, 12, aM, az, ag, ap, rx, rb, ih, aK, af, aV], io[154] = id, io[155] = aM, io[156] = az, io[157] = ag, io[158] = ap, io[159] = rx, io[160] = rb, io[161] = ih, io[162] = aK, io[163] = aV, io[164] = af, io[165] = tl) : tl = io[165], (0, f.useLayoutEffect)(ta, tl);
            let ry = (0, c.a)(() => rb.get() * (rx.get().x - rv.x - lP.get())),
                rw = (0, c.a)(() => rb.get() * (rx.get().y - rv.y - lN.get())),
                rS = (0, c.a)(() => 0 === rb.get() ? "100%" : rg + rb.get() * (rx.get().width - rg));
            io[166] !== rh || io[167] !== rx || io[168] !== rb ? (to = () => rh.get() + rb.get() * (rx.get().height - rh.get()), io[166] = rh, io[167] = rx, io[168] = rb, io[169] = to) : to = io[169];
            let rz = (0, c.a)(to);
            io[170] !== rh || io[171] !== rr || io[172] !== rs || io[173] !== as || io[174] !== oC || io[175] !== rb ? (tr = () => Math.max(rb.get(), as && oC ? 0 : eI((rh.get() - rr) / Math.max(1, rs - rr), 0, 1)), io[170] = rh, io[171] = rr, io[172] = rs, io[173] = as, io[174] = oC, io[175] = rb, io[176] = tr) : tr = io[176];
            let rj = (0, c.a)(tr);
            io[177] !== on || io[178] !== rj || io[179] !== ro || io[180] !== aj || io[181] !== rz || io[182] !== rb ? (ts = () => Math.max(0, rz.get() - on - 46 * ((ro ? 1 : rj.get()) - (aj ? 0 : rb.get()))), io[177] = on, io[178] = rj, io[179] = ro, io[180] = aj, io[181] = rz, io[182] = rb, io[183] = ts) : ts = io[183];
            let rk = (0, c.a)(ts);
            io[184] !== rj ? (tc = () => 1 - rj.get(), io[184] = rj, io[185] = tc) : tc = io[185];
            let rC = (0, c.a)(tc);
            io[186] !== rh || io[187] !== on || io[188] !== ah || io[189] !== rd || io[190] !== rm || io[191] !== oz || io[192] !== lU || io[193] !== rf ? (tu = () => {
                let e, t = !rp.current && oz;
                if (rm && (rp.current = !0), lU || t || 0 === rf) return void rh.jump(rd);
                let n = () => {
                    if (ah) {
                        let e = lR.current;
                        if (null != e && e.offsetHeight !== Math.round(on)) return void oi(e.offsetHeight)
                    }
                    let t = (0, u.a)(rh, rd, {
                        duration: rf,
                        ease: T.e
                    });
                    e = () => t.stop()
                };
                return ah ? d.b.update(n) : n(), () => {
                    (0, d.a)(n), e?.()
                }
            }, io[186] = rh, io[187] = on, io[188] = ah, io[189] = rd, io[190] = rm, io[191] = oz, io[192] = lU, io[193] = rf, io[194] = tu) : tu = io[194];
            let rM = (0, f.useEffectEvent)(tu),
                rE = ah ? on : null,
                rP = ah ? null : rm,
                rN = ah ? null : oz;
            io[195] !== rM ? (td = () => rM(), io[195] = rM, io[196] = td) : td = io[196], io[197] !== rd || io[198] !== rP || io[199] !== rN || io[200] !== rE || io[201] !== rf ? (th = [rd, rf, rE, rP, rN], io[197] = rd, io[198] = rP, io[199] = rN, io[200] = rE, io[201] = rf, io[202] = th) : th = io[202], (0, f.useLayoutEffect)(td, th);
            let rR = ah ? rj : void 0;
            io[203] !== rR ? (tp = {
                "--quick-chat-expansion": rR
            }, io[203] = rR, io[204] = tp) : tp = io[204];
            let rD = tp,
                rT = {
                    height: Math.min(36, rn),
                    width: Math.min(36, ra)
                },
                rL = {
                    bubbleSize: rT,
                    composerWidth: rg,
                    composerHorizontalInset: 12,
                    reservedDockPosition: iy,
                    viewportWidth: ls,
                    viewportHeight: rt
                },
                rq = (0, ea.f)(iR ? lw : l7?.dockPosition ?? eF, iy),
                r_ = (0, ea.d)(rq, rT, rt, ls, 0, o8),
                rI = iR ? rT : {
                    height: rd,
                    width: rg
                },
                rF = iR ? r_ : rv,
                rH = iR ? 16 : 10,
                rA = {
                    left: rH,
                    right: Math.max(rH, ls - rI.width - rH),
                    top: o8 + rH,
                    bottom: Math.max(rH, rt - rI.height - rH)
                };
            io[205] === Symbol.for("react.memo_cache_sentinel") ? (tm = () => {
                lE.current = null
            }, io[205] = tm) : tm = io[205], io[206] !== id || io[207] !== aV ? (tf = [id, aV], io[206] = id, io[207] = aV, io[208] = tf) : tf = io[208], (0, f.useLayoutEffect)(tm, tf);
            let rW = e => {
                    if (!i7) return;
                    lE.current = null == id ? null : lD.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, M.b)(e.clientX - (lE.current?.left ?? 0), aV),
                        y: (0, M.b)(e.clientY - (lE.current?.top ?? 0), aV)
                    };
                    lC.current = {
                        x: t.x - rF.x - lP.get(),
                        y: t.y - rF.y - lN.get()
                    }, lM.current = {
                        point: t,
                        target: null
                    }, lj.start(e)
                },
                rB = (0, ea.d)(rq, {
                    height: rd,
                    width: rg
                }, rt, ls, 12, o8),
                rO = r_.x - rB.x,
                r$ = r_.y - rB.y,
                rV = rg - rO - rT.width,
                rK = rd - r$ - rT.height;
            io[209] !== rO || io[210] !== r$ || io[211] !== rV || io[212] !== rK ? (tg = {
                top: r$,
                right: rV,
                bottom: rK,
                left: rO
            }, io[209] = rO, io[210] = r$, io[211] = rV, io[212] = rK, io[213] = tg) : tg = io[213];
            let rX = tg,
                rY = `inset(${rX.top}px ${rX.right}px ${rX.bottom}px ${rX.left}px round var(--floating-panel-radius))`,
                rQ = (0, c.a)(() => {
                    let e = ob.get(),
                        t = rh.get() - rd,
                        n = e * (rX.top + (lS ? 0 : t)),
                        i = 6 + e * (rX.right - 6),
                        a = 6 + e * (rX.bottom + (lS ? t : 0) - 6),
                        l = 6 + e * (rX.left - 6),
                        o = rb.get(),
                        r = 0 === o ? "var(--radius-token-composer-single-line)" : `calc(var(--radius-token-composer-single-line) * ${1-o} + var(--app-shell-sidebar-popover-radius) * ${o})`,
                        s = ov || av || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round ${r})` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: r,
                        clip: s
                    }
                });
            io[214] !== rQ ? (tv = () => rQ.get().top, io[214] = rQ, io[215] = tv) : tv = io[215];
            let rZ = (0, c.a)(tv);
            io[216] !== rQ ? (tb = () => rQ.get().right, io[216] = rQ, io[217] = tb) : tb = io[217];
            let rU = (0, c.a)(tb);
            io[218] !== rQ ? (tx = () => rQ.get().bottom, io[218] = rQ, io[219] = tx) : tx = io[219];
            let rG = (0, c.a)(tx);
            io[220] !== rQ ? (ty = () => rQ.get().left, io[220] = rQ, io[221] = ty) : ty = io[221];
            let rJ = (0, c.a)(ty);
            io[222] !== rQ ? (tw = () => rQ.get().radius, io[222] = rQ, io[223] = tw) : tw = io[223];
            let r0 = (0, c.a)(tw);
            io[224] !== rQ ? (tS = () => rQ.get().clip, io[224] = rQ, io[225] = tS) : tS = io[225];
            let r1 = (0, c.a)(tS);
            io[226] !== ah || io[227] !== ov || io[228] !== ob || io[229] !== aK ? (tz = () => {
                if (!ah) return;
                let e = (0, u.a)(ob, +!!ov, {
                    duration: .3 * !aK,
                    ease: T.e
                });
                return () => e.stop()
            }, tj = [ah, ov, ob, aK], io[226] = ah, io[227] = ov, io[228] = ob, io[229] = aK, io[230] = tz, io[231] = tj) : (tz = io[230], tj = io[231]), (0, f.useLayoutEffect)(tz, tj);
            let r2 = lS ? {
                    top: r$ + rT.height
                } : {
                    bottom: rd - r$
                },
                r3 = (0, f.useRef)({
                    dockPosition: lw,
                    dockThreadKey: aR,
                    isMinimized: iR
                });
            io[232] !== iL ? (tk = () => {
                iL?.(null)
            }, io[232] = iL, io[233] = tk) : tk = io[233];
            let r4 = (0, f.useEffectEvent)(tk),
                r5 = (0, f.useEffectEvent)(e => {
                    let t = (0, ea.d)(e, {
                        height: rd,
                        width: rg
                    }, rt, ls, 12, o8);
                    lP.stop(), lN.stop(), lP.jump(lP.get() + t.x - rv.x), lN.jump(lN.get() + t.y - rv.y);
                    let n = aK ? {
                        duration: 0
                    } : eC;
                    (0, u.a)(lP, 0, n), (0, u.a)(lN, 0, n)
                });
            (0, f.useLayoutEffect)(() => {
                let e = r3.current;
                if (r3.current = {
                        dockPosition: lw,
                        dockThreadKey: aR,
                        isMinimized: iR
                    }, e.dockThreadKey !== aR) {
                    lk.current = !0, l9.current = !0, lj.cancel(), r4(), lP.jump(0), lN.jump(0);
                    return
                }
                if (an) {
                    lP.jump(0), lN.jump(0);
                    return
                }
                e.isMinimized !== iR && r5(e.dockPosition)
            }, [lw, aR, lj, lP, lN, an, iR]), io[234] !== lP || io[235] !== lN ? (tC = () => () => {
                lP.stop(), lN.stop()
            }, tM = [lP, lN], io[234] = lP, io[235] = lN, io[236] = tC, io[237] = tM) : (tC = io[236], tM = io[237]), (0, f.useLayoutEffect)(tC, tM);
            let r6 = (e, t) => {
                let n, i = {
                    ...rI,
                    left: rF.x + lP.get(),
                    top: rF.y + lN.get()
                };
                null != id && null == lE.current && (lE.current = lD.current?.parentElement?.getBoundingClientRect() ?? null);
                let a = null == id ? null : lE.current,
                    l = {
                        x: e.point.x - (0, M.b)(a?.left ?? 0, aV),
                        y: e.point.y - (0, M.b)(a?.top ?? 0, aV)
                    },
                    o = aw && !iR ? (function(e) {
                        let {
                            bubbleSize: t,
                            composerWidth: n,
                            composerHorizontalInset: i,
                            reservedDockPosition: a,
                            viewportWidth: l,
                            viewportHeight: o
                        } = e, r = t.width + 4, s = {
                            height: t.height,
                            width: Math.max(0, Math.min(n - i, (l - 2 * (16 + r + 4)) / 3))
                        }, c = new Map;
                        for (let e of eL(a, !1, !0)) {
                            let t = (0, ea.d)(e, {
                                height: s.height,
                                width: n
                            }, o, l, i);
                            if (c.has(t.x)) continue;
                            let {
                                x: a,
                                y: u
                            } = (0, ea.d)(e, s, o, l), d = a;
                            "bottom-center" !== e && (d += "bottom-left" === e ? r : -r), c.set(t.x, {
                                position: e,
                                rect: {
                                    ...s,
                                    left: d,
                                    top: u
                                }
                            })
                        }
                        return Array.from(c.values())
                    })(rL).find(e => {
                        let {
                            rect: t
                        } = e;
                        return l.x >= t.left && l.x <= t.left + t.width && l.y >= t.top && l.y <= t.top + t.height
                    })?.position : void 0;
                n = ah ? o ?? (0, ea.b)(i, rt, ls, eL(iy, iR, lp), 12 * !iR, o8) : (0, ea.e)({
                    ...i,
                    left: i.width >= ls / 2 - 2 * rH ? l.x - i.width / 2 : i.left
                }, rt, ls, iR);
                let r = null == iy ? n : (0, ea.f)(n, iy),
                    s = {
                        x: !ah || aw ? Math.min(l.x, ls - l.x) : ls - l.x,
                        y: ah ? rt - l.y : Math.min(l.y - o8, rt - l.y)
                    },
                    c = (!aw || s.x >= 0 && s.y >= 0) && s.x <= 16 + rT.width && s.y <= 16 + rT.height;
                if (ah && !iR) {
                    let e, s = l.x < ls / 2 ? "bottom-left" : "bottom-right",
                        u = aw && c && s !== iy ? s : void 0,
                        d = lM.current;
                    if (null != d) {
                        let e = l.x - d.point.x,
                            t = l.y - d.point.y;
                        Math.hypot(e, t) >= 8 && (e >= 0 && t > 0 && t >= e ? d.target = "minimize" : e > 0 && e > 2 * Math.abs(t) ? d.target = null : (e < 0 || t < 0) && (d.target = null), d.point = l)
                    }
                    let h = l.y - lC.current.y + rI.height - rt;
                    if (aw && i6 && null == o && null == u) {
                        let {
                            left: n,
                            top: o
                        } = i;
                        void 0 !== t && t && (n = l.x - lC.current.x, o = l.y - lC.current.y, null != id && (n = eI(n, rA.left, rA.right), o = eI(o, rA.top, rA.bottom)));
                        let r = a?.top ?? 0;
                        e = {
                            right: (a?.left ?? 0) + (n + i.width - 6) * aV,
                            top: r + o * aV,
                            bottom: r + (o + i.height - 6) * aV,
                            bottomInset: (aZ + 16 + rT.height + (Number.parseFloat(am?.get() ?? "0") || 0)) * aV,
                            zoom: aV
                        }
                    }
                    return {
                        dockPosition: r,
                        requestedDockPosition: n,
                        isNearDock: !1,
                        suppressEdgeDrop: aw ? null != u : c,
                        shouldMinimize: null != u || null == o && "bottom-right" === r && d?.target === "minimize" && h >= .5 * rI.width,
                        bubbleDropPosition: u,
                        paneDragSurface: e
                    }
                }
                let u = (0, ea.d)(r, rI, rt, ls, 12, o8),
                    d = !iR && "bottom-center" !== r && 16 >= Math.abs(i.left - u.x) && 16 >= Math.abs(i.top - u.y);
                return {
                    dockPosition: r,
                    requestedDockPosition: n,
                    isNearDock: d,
                    suppressEdgeDrop: c,
                    shouldMinimize: d && c
                }
            };
            io[238] !== i7 || io[239] !== ix || io[240] !== ah || io[241] !== aR || io[242] !== iE || io[243] !== lp || io[244] !== ao ? (tE = (e, t) => {
                if (!i7) return;
                let n = t && !lp;
                (null == ix || n) && (null != aR || ah && !n) ? (0, el.c)(ao, {
                    threadKey: aR ?? null,
                    minimized: n
                }, e, iE) : lv(t => ({
                    expanded: n ? t.expanded : e,
                    minimized: n ? (0, ea.a)(e) : t.minimized
                }))
            }, io[238] = i7, io[239] = ix, io[240] = ah, io[241] = aR, io[242] = iE, io[243] = lp, io[244] = ao, io[245] = tE) : tE = io[245];
            let r7 = tE,
                r8 = (e, t, n) => {
                    let i = void 0 === n ? rI : n,
                        a = (0, ea.d)(lw, rI, rt, ls, 12 * !iR, o8),
                        l = {
                            x: a.x + lP.get(),
                            y: a.y + lN.get()
                        },
                        o = (0, ea.d)((0, ea.f)(e, iy), i, rt, ls, 12 * !iR, o8);
                    lP.stop(), lN.stop(), lP.jump(l.x - o.x), lN.jump(l.y - o.y), t && (0, g.flushSync)(() => {
                        r7(e, iR)
                    });
                    let r = ah ? {
                            duration: .3,
                            ease: T.e
                        } : eC,
                        s = aK ? {
                            duration: 0
                        } : r;
                    l4(!0), Promise.all([(0, u.a)(lP, 0, s), (0, u.a)(lN, 0, s)]).then(() => {
                        l4(0 !== lP.get() || 0 !== lN.get())
                    })
                },
                r9 = (0, f.useEffectEvent)(() => {
                    lk.current = !0, lj.cancel(), iL?.(null), r8(lw, !1), l8(null), l$(null), ab(!1), ay(null)
                });
            io[246] !== r9 || io[247] !== lj || io[248] !== av ? (tP = () => {
                if (!av) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r9())
                    },
                    t = () => r9();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    lk.current = !0, lj.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, io[246] = r9, io[247] = lj, io[248] = av, io[249] = tP) : tP = io[249], io[250] !== lj || io[251] !== av ? (tN = [lj, av], io[250] = lj, io[251] = av, io[252] = tN) : tN = io[252], (0, f.useLayoutEffect)(tP, tN);
            let se = (e, t) => {
                    let n = ah && o5 ? 0 : (0, ea.c)(lw, e, {
                            height: rd,
                            width: rg
                        }, lP.get(), t.width, rt, ls, 12),
                        i = rv.y + lN.get(),
                        a = (0, ea.d)(lw, t, rt, ls, 12, o8),
                        l = eI(i + (lS ? 0 : rd - t.height), o8 + 10, rt - t.height - 10);
                    lP.stop(), lN.stop(), (0, g.flushSync)(() => {
                        ou({
                            height: oz ? o9.height : t.height,
                            width: t.width - 12
                        })
                    }), lP.jump(n), lN.jump(l - a.y)
                },
                st = e => {
                    es(ao, {
                        height: oz ? o9.height : e.height,
                        width: e.width - 12
                    }, () => iI?.(lw)), r8(lw, !1, e)
                };
            io[253] !== ah || io[254] !== av || io[255] !== i_ || io[256] !== lK || io[257] !== l8 || io[258] !== l$ ? (tR = () => {
                lK(!1), l6(!av), l8(null), l$(ah ? null : {
                    target: "minimized"
                }), i_(!0)
            }, io[253] = ah, io[254] = av, io[255] = i_, io[256] = lK, io[257] = l8, io[258] = l$, io[259] = tR) : tR = io[259];
            let sn = tR;
            if (io[260] !== ix || io[261] !== ah || io[262] !== at || io[263] !== ad || io[264] !== oz || io[265] !== an || io[266] !== iR || io[267] !== iq || io[268] !== i_ || io[269] !== lW || io[270] !== i8 || io[271] !== lK || io[272] !== lB || io[273] !== l$) {
                let e, t, n, i;
                tI = () => {
                    (0, g.flushSync)(() => {
                        lK(!1), l$(ah ? null : {
                            target: lW
                        }), i_(!1)
                    }), tL()
                }, io[281] !== oz || io[282] !== lB || io[283] !== l$ ? (e = () => {
                    l$(null), lB(oz ? "expanded" : "compact")
                }, io[281] = oz, io[282] = lB, io[283] = l$, io[284] = e) : e = io[284], tF = e;
                let a = !an && !iR;
                tD = a && (null != iq || !i8 && !oz && !at), io[285] !== iq || io[286] !== lB || io[287] !== l$ ? (t = () => {
                    null != iq ? iq() : (l$(null), lB("compact"))
                }, io[285] = iq, io[286] = lB, io[287] = l$, io[288] = t) : t = io[288], tT = t, io[289] !== tD || io[290] !== a || io[291] !== tT || io[292] !== i8 ? (n = e => {
                    if (!a || "Escape" !== e.key || e.defaultPrevented || e.nativeEvent.isComposing) return;
                    let t = tD && !e.repeat;
                    !t && (!i8 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) || (e.preventDefault(), e.stopPropagation(), t && tT())
                }, io[289] = tD, io[290] = a, io[291] = tT, io[292] = i8, io[293] = n) : n = io[293], t_ = n, io[294] !== ad ? (i = () => {
                    let e = lR.current;
                    return ad ? (0, U.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, io[294] = ad, io[295] = i) : i = io[295], tq = i, tL = () => {
                    ah && null == ix && (l$(null), lB("expanded")), tq()?.focus({
                        preventScroll: !0
                    })
                }, io[260] = ix, io[261] = ah, io[262] = at, io[263] = ad, io[264] = oz, io[265] = an, io[266] = iR, io[267] = iq, io[268] = i_, io[269] = lW, io[270] = i8, io[271] = lK, io[272] = lB, io[273] = l$, io[274] = tD, io[275] = tT, io[276] = tL, io[277] = tq, io[278] = t_, io[279] = tI, io[280] = tF
            } else tD = io[274], tT = io[275], tL = io[276], tq = io[277], t_ = io[278], tI = io[279], tF = io[280];
            let si = !an && ad;
            io[296] !== tq || io[297] !== ad || io[298] !== iR ? (tH = () => {
                if (null == lD.current || null != lD.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (ad) return iR;
                let e = tq();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !lR.current?.contains(t) || t === lR.current
            }, io[296] = tq, io[297] = ad, io[298] = iR, io[299] = tH) : tH = io[299], io[300] !== si || io[301] !== tH ? (tA = {
                enabled: si,
                isActive: tH
            }, io[300] = si, io[301] = tH, io[302] = tA) : tA = io[302], (0, X.a)("focusMainChat", iR ? tI : tL, tA), io[303] !== aB || io[304] !== oz ? (tW = aB.formatMessage(oz ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat"
            }), io[303] = aB, io[304] = oz, io[305] = tW) : tW = io[305];
            let sa = tW;
            io[306] !== ok || io[307] !== sa || io[308] !== tF ? (tB = ok ? {
                label: sa,
                onToggle: tF
            } : void 0, io[306] = ok, io[307] = sa, io[308] = tF, io[309] = tB) : tB = io[309];
            let sl = tB;
            io[310] !== aB ? (tO = aB.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width"
            }), io[310] = aB, io[311] = tO) : tO = io[311];
            let so = tO;
            io[312] !== aB ? (t$ = aB.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height"
            }), io[312] = aB, io[313] = t$) : t$ = io[313];
            let sr = t$;
            io[314] !== as || io[315] !== lB || io[316] !== l$ ? (tV = () => {
                l$(null), as && lB("expanded")
            }, io[314] = as, io[315] = lB, io[316] = l$, io[317] = tV) : tV = io[317];
            let ss = (0, eS.a)(tV);
            io[318] !== ah || io[319] !== ss || io[320] !== as || io[321] !== l$ ? (tK = ah || as ? ss : () => l$(null), io[318] = ah, io[319] = ss, io[320] = as, io[321] = l$, io[322] = tK) : tK = io[322];
            let sc = {
                    isCompact: oC,
                    canShowPreviewBubble: oL,
                    isNarrow: oo,
                    isChromeRevealed: oP,
                    isHeaderVisible: oN,
                    isComposerFocused: ah ? l1 || lU : oP,
                    isDockedTop: lS,
                    isHidden: an,
                    isMinimized: ov,
                    shouldReduceMotion: aK,
                    onSubmitStart: tK
                },
                su = {
                    isMoving: av || oe || l3,
                    composerContentHeight: oa,
                    dockedReservePx: on > oa + 6 * !!ah ? rd + 10 : 0
                };
            io[323] !== an || io[324] !== iC ? (tX = function(e) {
                !an && null != iC && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (lD.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, io[323] = an, io[324] = iC, io[325] = tX) : tX = io[325];
            let sd = tX;
            io[326] !== as ? (tY = function(e) {
                !as && e.target instanceof Element && (!lD.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, io[326] = as, io[327] = tY) : tY = io[327];
            let sh = tY,
                sp = iu(sc, su),
                sm = i8 ? "editor-only" : null;
            io[328] !== os ? (tQ = e => {
                lR.current = e, os(e)
            }, io[328] = os, io[329] = tQ) : tQ = io[329], io[330] !== tL ? (tZ = e => {
                e.target === e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && !l9.current && tL()
            }, io[330] = tL, io[331] = tZ) : tZ = io[331], io[332] !== oI || io[333] !== oC || io[334] !== oM || io[335] !== oT ? (tU = oI && !oM && (!oC || oT) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, io[332] = oI, io[333] = oC, io[334] = oM, io[335] = oT, io[336] = tU) : tU = io[336], io[337] !== a2 ? (tG = {
                target: a2,
                homeBannerPlacement: "inline"
            }, io[337] = a2, io[338] = tG) : tG = io[338];
            let sf = (0, i.jsxs)("div", {
                ref: tQ,
                className: (0, o.b)(q.a.floatingComposerInset, "mt-auto shrink-0", i7 && !lc && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", oz && lS && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: sd,
                onPointerUp: tZ,
                onContextMenu: sh,
                children: [tU, (0, i.jsx)(ev.b, {
                    value: {
                        ...aT,
                        hasComposerSurface: oI,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !an && !oz && !iR,
                        floatingChatSurfaceRef: lD,
                        onFloatingDictationRowChange: l0,
                        floatingComposerPresentation: sc,
                        transcriptTarget: a4,
                        followLatestTranscript: ah ? oC : aT.followLatestTranscript
                    },
                    children: (0, i.jsx)(Z.a, {
                        value: tD ? tT : sm,
                        children: (0, i.jsx)(Q.a, {
                            value: tG,
                            children: sp
                        })
                    })
                })]
            });
            io[339] !== oC || io[340] !== sn ? (tJ = (0, i.jsx)(ei.c, {
                isCompact: oC,
                onMinimize: sn
            }), io[339] = oC, io[340] = sn, io[341] = tJ) : tJ = io[341];
            let sg = tJ,
                sv = ah || null != ac ? null : sg;
            if (oR) {
                let e, t, n;
                io[342] !== tq || io[343] !== tF ? (e = () => {
                    tF(), tq()?.focus({
                        preventScroll: !0
                    })
                }, io[342] = tq, io[343] = tF, io[344] = e) : e = io[344], io[345] !== iQ || io[346] !== aO ? (t = (0, i.jsx)("span", {
                    id: aO,
                    className: "min-w-0 truncate",
                    children: iQ
                }), io[345] = iQ, io[346] = aO, io[347] = t) : t = io[347], io[348] !== sa || io[349] !== e || io[350] !== t || io[351] !== aO ? (n = (0, i.jsx)(I.a, {
                    unstyled: !0,
                    focusRing: "inset",
                    className: "min-w-0 flex-1 px-2 text-start text-sm text-secondary",
                    "aria-label": sa,
                    "aria-describedby": aO,
                    "data-quick-chat-drag-handle": !0,
                    onClick: e,
                    children: t
                }), io[348] = sa, io[349] = e, io[350] = t, io[351] = aO, io[352] = n) : n = io[352], t0 = n
            } else if (null != iz) {
                let e;
                io[353] !== sv || io[354] !== iz ? (e = iz({
                    leadingControl: sv
                }), io[353] = sv, io[354] = iz, io[355] = e) : e = io[355], t0 = e
            } else {
                let e, t, n, a, l, r;
                io[356] !== o0 || io[357] !== o2 ? (e = o0 && (0, i.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    "aria-label": o2
                }), io[356] = o0, io[357] = o2, io[358] = e) : e = io[358];
                let s = o0 || void 0,
                    c = (!ah || null == iW) && "truncate";
                io[359] !== c ? (t = (0, o.b)("group/floating-title min-w-0 text-base font-medium text-secondary", c), io[359] = c, io[360] = t) : t = io[360], io[361] !== ah || io[362] !== al || io[363] !== iA || io[364] !== iW ? (n = iW ?? (ah ? (0, i.jsx)(ei.b, {
                    children: (0, i.jsx)(ec.a, {
                        children: al ? iA : (0, i.jsx)(b.a, {
                            id: "quickChat.newChatTitle",
                            defaultMessage: "New chat"
                        })
                    })
                }) : iA), io[361] = ah, io[362] = al, io[363] = iA, io[364] = iW, io[365] = n) : n = io[365], io[366] !== s || io[367] !== t || io[368] !== n || io[369] !== aO ? (a = (0, i.jsx)("h2", {
                    id: aO,
                    "data-unread": s,
                    "data-dropdown-overlay-side": "auto",
                    className: t,
                    children: n
                }), io[366] = s, io[367] = t, io[368] = n, io[369] = aO, io[370] = a) : a = io[370], io[371] !== ah || io[372] !== oZ || io[373] !== o1 || io[374] !== o2 ? (l = !ah && (0, i.jsx)("div", {
                    className: "flex min-w-5 flex-1 items-center justify-end",
                    children: null != oZ && (0, i.jsx)("div", {
                        className: "flex min-w-0 justify-end",
                        role: "status",
                        "aria-label": "loading" === oZ.type ? o1 : o2,
                        children: (0, i.jsx)(eg.a, {
                            statusState: oZ
                        })
                    })
                }), io[371] = ah, io[372] = oZ, io[373] = o1, io[374] = o2, io[375] = l) : l = io[375], io[376] !== sv || io[377] !== e || io[378] !== a || io[379] !== l ? (r = (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-1 items-center gap-1",
                    children: [sv, e, a, l]
                }), io[376] = sv, io[377] = e, io[378] = a, io[379] = l, io[380] = r) : r = io[380], t0 = r
            }
            io[381] !== aG || io[382] !== oC || io[383] !== av || io[384] !== sn || io[385] !== iC ? (t1 = iC?.({
                isCompact: oC,
                isDragging: av,
                open: aG,
                onMinimize: sn,
                onOpenChange: aJ
            }), io[381] = aG, io[382] = oC, io[383] = av, io[384] = sn, io[385] = iC, io[386] = t1) : t1 = io[386];
            let sb = ah && null == ac && sg;
            io[387] !== iN?.openRightPaneDisabled || io[388] !== sg || io[389] !== ac ? (t2 = null != ac && (0, i.jsx)(ei.d, {
                minimizeButton: sg,
                disabled: iN?.openRightPaneDisabled,
                onOpenRightPane: ac
            }), io[387] = iN?.openRightPaneDisabled, io[388] = sg, io[389] = ac, io[390] = t2) : t2 = io[390], io[391] !== t0 || io[392] !== t1 || io[393] !== sb || io[394] !== t2 ? (t3 = (0, i.jsxs)(i.Fragment, {
                children: [t0, t1, sb, t2]
            }), io[391] = t0, io[392] = t1, io[393] = sb, io[394] = t2, io[395] = t3) : t3 = io[395];
            let sx = t3,
                sy = ak ? "hidden" : "contents";
            io[396] !== ae || io[397] !== ah || io[398] !== sx || io[399] !== i9 || io[400] !== as || io[401] !== oC || io[402] !== oN || io[403] !== iR || io[404] !== sl || io[405] !== lO || io[406] !== aK || io[407] !== oE ? (t4 = ah ? (0, i.jsx)(ei.a, {
                isCompact: as && oC,
                isVisible: oN,
                isDisabled: i9,
                children: sx
            }) : (0, i.jsx)(ei.e, {
                expandOnClick: as,
                animateChrome: !aK && !iR && null == lO,
                isChromeRevealed: oN,
                isCompact: oC,
                isDisabled: i9,
                reserveSpace: as && oE && !oC,
                presentationToggle: ae ? sl : void 0,
                children: sx
            }), io[396] = ae, io[397] = ah, io[398] = sx, io[399] = i9, io[400] = as, io[401] = oC, io[402] = oN, io[403] = iR, io[404] = sl, io[405] = lO, io[406] = aK, io[407] = oE, io[408] = t4) : t4 = io[408], io[409] !== sh || io[410] !== sd || io[411] !== sy || io[412] !== t4 ? (t5 = (0, i.jsx)("div", {
                className: sy,
                onPointerDownCapture: sd,
                onContextMenu: sh,
                children: t4
            }), io[409] = sh, io[410] = sd, io[411] = sy, io[412] = t4, io[413] = t5) : t5 = io[413];
            let sw = t5,
                sS = ah ? {
                    top: rq.startsWith("top") ? r$ : void 0,
                    bottom: rq.startsWith("top") ? void 0 : rX.bottom,
                    left: rO,
                    width: rT.width,
                    height: rT.height,
                    opacity: ob
                } : {
                    inset: 0
                },
                sz = !iR,
                sj = iR ? aD : void 0;
            io[414] !== ah || io[415] !== ov ? (t6 = ah ? void 0 : {
                opacity: +!!ov
            }, io[414] = ah, io[415] = ov, io[416] = t6) : t6 = io[416];
            let sk = !iR || void 0;
            io[417] !== aK ? (t7 = aK ? {
                duration: 0
            } : {
                duration: .3,
                ease: T.e
            }, io[417] = aK, io[418] = t7) : t7 = io[418];
            let sC = iR ? "minimized" : "preview",
                sM = iR && "pointer-events-auto";
            io[419] !== sM ? (t8 = (0, o.b)("absolute inset-0 m-auto touch-none", sM), io[419] = sM, io[420] = t8) : t8 = io[420];
            let sE = oU ? o3 : void 0;
            io[421] !== aB || io[422] !== i$ || io[423] !== iA ? (t9 = i$ ?? aB.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}"
            }, {
                title: iA
            }), io[421] = aB, io[422] = i$, io[423] = iA, io[424] = t9) : t9 = io[424];
            let sP = !an && iR && l5;
            io[425] !== tI ? (ne = e => {
                0 !== e.detail && l9.current || tI()
            }, io[425] = tI, io[426] = ne) : ne = io[426], io[427] !== ah || io[428] !== lK ? (nt = e => {
                ah || "touch" === e.pointerType || lK(!0)
            }, io[427] = ah, io[428] = lK, io[429] = nt) : nt = io[429], io[430] !== e7.type || io[431] !== ah || io[432] !== lK ? (nn = e => {
                "ready" === e7.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), ah || (0, g.flushSync)(() => lK(!0)), lL.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, io[430] = e7.type, io[431] = ah, io[432] = lK, io[433] = nn) : nn = io[433], io[434] !== lc || io[435] !== rW ? (ni = e => {
                lc || 0 !== e.button || (l9.current = !1, e.currentTarget.setPointerCapture(e.pointerId), rW(e))
            }, io[434] = lc, io[435] = rW, io[436] = ni) : ni = io[436], io[437] !== ah || io[438] !== oU || io[439] !== oW || io[440] !== iB || io[441] !== aI ? (na = oW && null != aI && null == iB ? (0, i.jsx)(eg.a, {
                statusState: aI,
                size: ah ? "default" : "compact"
            }) : (0, i.jsx)(J.a, {
                badgeEnabled: oU,
                children: iB ?? (0, i.jsx)(F.Ib, {})
            }), io[437] = ah, io[438] = oU, io[439] = oW, io[440] = iB, io[441] = aI, io[442] = na) : na = io[442], io[443] !== sC || io[444] !== t8 || io[445] !== sE || io[446] !== t9 || io[447] !== sP || io[448] !== ne || io[449] !== nt || io[450] !== nn || io[451] !== ni || io[452] !== na ? (nl = (0, i.jsx)(I.a, {
                ref: lT,
                className: t8,
                "aria-description": sE,
                "aria-label": t9,
                autoFocus: sP,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: ne,
                onPointerEnter: nt,
                onKeyDown: nn,
                onPointerDown: ni,
                children: na
            }, sC), io[443] = sC, io[444] = t8, io[445] = sE, io[446] = t9, io[447] = sP, io[448] = ne, io[449] = nt, io[450] = nn, io[451] = ni, io[452] = na, io[453] = nl) : nl = io[453], io[454] !== sS || io[455] !== sz || io[456] !== sj || io[457] !== t6 || io[458] !== sk || io[459] !== t7 || io[460] !== nl ? (no = (0, i.jsx)(h.a.div, {
                ref: P.c,
                className: "pointer-events-none absolute",
                style: sS,
                "aria-hidden": sz,
                "data-pip-obstacle": sj,
                animate: t6,
                initial: !1,
                inert: sk,
                transition: t7,
                children: nl
            }), io[454] = sS, io[455] = sz, io[456] = sj, io[457] = t6, io[458] = sk, io[459] = t7, io[460] = nl, io[461] = no) : no = io[461];
            let sN = no,
                sR = "ready" === e7.type ? (0, i.jsx)(B, {
                    items: e7.value,
                    availableHeight: Math.max(0, (id?.height ?? aY) - o8 - aZ - (iR ? rT.height : rl) - 32 - 12),
                    isDockedTop: lS,
                    shouldReduceMotion: aK
                }) : null;
            !ah && (nr = ek, ov ? nr = rY : null != lO || av || (nr = "none"));
            let sD = null != lO || !iR;
            io[462] !== ah || io[463] !== rz || io[464] !== rS || io[465] !== ry || io[466] !== rw || io[467] !== r0 ? (ns = ah ? {
                x: ry,
                y: rw,
                width: rS,
                height: rz,
                borderRadius: r0
            } : void 0, io[462] = ah, io[463] = rz, io[464] = rS, io[465] = ry, io[466] = rw, io[467] = r0, io[468] = ns) : ns = io[468], io[469] !== ah || io[470] !== rG || io[471] !== rJ || io[472] !== r0 || io[473] !== rU || io[474] !== rZ ? (nc = ah ? {
                top: rZ,
                right: rU,
                bottom: rG,
                left: rJ,
                borderRadius: r0
            } : void 0, io[469] = ah, io[470] = rG, io[471] = rJ, io[472] = r0, io[473] = rU, io[474] = rZ, io[475] = nc) : nc = io[475], io[476] !== rd || io[477] !== rg ? (nu = {
                height: rd,
                width: rg
            }, io[476] = rd, io[477] = rg, io[478] = nu) : nu = io[478];
            let sT = ah && o5,
                sL = ah && !o5 ? o6 : void 0,
                sq = oE && oN;
            io[479] !== rn || io[480] !== ra ? (nd = {
                height: rn,
                width: ra
            }, io[479] = rn, io[480] = ra, io[481] = nd) : nd = io[481], io[482] !== sN || io[483] !== iO ? (nh = null == iO ? sN : (0, i.jsx)(ee.a, {
                disableNative: !0,
                items: iO,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: sN
                })
            }), io[482] = sN, io[483] = iO, io[484] = nh) : nh = io[484], io[485] !== rc || io[486] !== ru ? (np = {
                height: rc,
                width: ru
            }, io[485] = rc, io[486] = ru, io[487] = np) : np = io[487];
            let s_ = !lc && !az,
                sI = ov || ah ? "panel" : ic,
                sF = oJ ? void 0 : iA,
                sH = oJ ? aO : void 0,
                sA = null != id && void 0;
            io[488] !== i5 || io[489] !== rm || io[490] !== aK ? (nm = i5 ? {
                opacity: +!!rm,
                translateY: 8 * (!rm && !aK)
            } : {}, io[488] = i5, io[489] = rm, io[490] = aK, io[491] = nm) : nm = io[491];
            let sW = ah || l7?.stage !== "approaching" ? 1 : .95;
            io[492] !== rg || io[493] !== nm || io[494] !== sW ? (nf = {
                ...nm,
                width: rg,
                scale: sW
            }, io[492] = rg, io[493] = nm, io[494] = sW, io[495] = nf) : nf = io[495];
            let sB = !!ah && void 0 !== ih && !!av || void 0,
                sO = !ah && oz || void 0,
                s$ = iR ? void 0 : aD,
                sV = !lc,
                sK = null == id ? void 0 : {
                    left: rA.left - rF.x,
                    right: rA.right - rF.x,
                    top: rA.top - rF.y,
                    bottom: rA.bottom - rF.y
                },
                sX = null == id ? void 0 : 0;
            io[496] !== i5 || io[497] !== aK ? (ng = !!i5 && !aK && {
                opacity: 0,
                translateY: 8
            }, io[496] = i5, io[497] = aK, io[498] = ng) : ng = io[498];
            let sY = null == id ? "dialog" : "region",
                sQ = lS ? o8 + 10 : "auto",
                sZ = lS ? "auto" : 10 + aZ,
                sU = o5 ? "50%" : "auto";
            io[499] !== o6 || io[500] !== o5 ? (nv = !o5 && {
                [o6]: 10
            }, io[499] = o6, io[500] = o5, io[501] = nv) : nv = io[501];
            let sG = o5 ? "-50% 0" : void 0,
                sJ = "bottom-center" === rq ? .5 : Number(rq.endsWith("right")),
                s0 = +!rq.startsWith("top");
            io[502] !== rh || io[503] !== rD || io[504] !== lP || io[505] !== lN || io[506] !== sQ || io[507] !== sZ || io[508] !== sU || io[509] !== nv || io[510] !== sG || io[511] !== sJ || io[512] !== s0 ? (nb = {
                ...rD,
                height: rh,
                top: sQ,
                bottom: sZ,
                left: sU,
                right: "auto",
                ...nv,
                translate: sG,
                x: lP,
                y: lN,
                originX: sJ,
                originY: s0
            }, io[502] = rh, io[503] = rD, io[504] = lP, io[505] = lN, io[506] = sQ, io[507] = sZ, io[508] = sU, io[509] = nv, io[510] = sG, io[511] = sJ, io[512] = s0, io[513] = nb) : nb = io[513];
            let s1 = .3 * !aK;
            io[514] !== s1 ? (nx = {
                duration: s1,
                ease: T.e
            }, io[514] = s1, io[515] = nx) : nx = io[515], io[516] !== rf || io[517] !== nx ? (ny = {
                duration: rf,
                ease: T.e,
                scale: nx
            }, io[516] = rf, io[517] = nx, io[518] = ny) : ny = io[518], io[519] !== ah || io[520] !== as || io[521] !== an || io[522] !== a$ || io[523] !== l2 || io[524] !== lY || io[525] !== lK || io[526] !== lB || io[527] !== l$ || io[528] !== oF ? (nw = e => {
                if (!(an || e_(e.currentTarget, e.relatedTarget, a$))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && e_(t, t.ownerDocument.activeElement, a$) || (lY(!1), l2(!1), lK(!1))
                        });
                        return
                    }
                    lY(!1), l2(!1), lK(!1), (!ah || as) && oF && null == e.target.closest("[inert]") && (l$(null), lB("compact"))
                }
            }, io[519] = ah, io[520] = as, io[521] = an, io[522] = a$, io[523] = l2, io[524] = lY, io[525] = lK, io[526] = lB, io[527] = l$, io[528] = oF, io[529] = nw) : nw = io[529], io[530] !== ok || io[531] !== ah || io[532] !== tL || io[533] !== oz || io[534] !== as || io[535] !== iR || io[536] !== lB || io[537] !== l$ || io[538] !== oE || io[539] !== tF ? (nS = e => {
                if (!(as && (0 !== e.button || e.ctrlKey) || iR || l9.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (oz && (e.target === e.currentTarget || lR.current?.contains(e.target))) return void tL();
                    if (as) {
                        if (!oE || !ok) return;
                        oz && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), l$(null), lB("expanded");
                        return
                    }
                    if (ah) {
                        oz && ok && tL();
                        return
                    }
                    oE && ok && e.target.closest("header[data-quick-chat-drag-handle]") && (oz && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), tF())
                }
            }, io[530] = ok, io[531] = ah, io[532] = tL, io[533] = oz, io[534] = as, io[535] = iR, io[536] = lB, io[537] = l$, io[538] = oE, io[539] = tF, io[540] = nS) : nS = io[540], io[541] !== ah || io[542] !== rn || io[543] !== ra || io[544] !== rc || io[545] !== ru || io[546] !== iR || io[547] !== iI || io[548] !== ao || io[549] !== ou || io[550] !== lB || io[551] !== l$ || io[552] !== r8 ? (nz = e => {
                ah && !iR && !l9.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (l$(null), lB("expanded"), ou(null), es(ao, R, () => iI?.("bottom-right")), r8("bottom-right", !0, {
                    height: eI(R.height, rc, rn),
                    width: eI(R.width + 12, ru, ra)
                }))
            }, io[541] = ah, io[542] = rn, io[543] = ra, io[544] = rc, io[545] = ru, io[546] = iR, io[547] = iI, io[548] = ao, io[549] = ou, io[550] = lB, io[551] = l$, io[552] = r8, io[553] = nz) : nz = io[553], io[554] !== an ? (nj = e => {
                !an && l9.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, io[554] = an, io[555] = nj) : nj = io[555], io[556] !== ah || io[557] !== r6 || io[558] !== iR || io[559] !== l7 || io[560] !== eF || io[561] !== iT || io[562] !== lW || io[563] !== l8 || io[564] !== l$ || io[565] !== aw ? (nk = (e, t) => {
                let n = r6(t),
                    i = iT?.(n.suppressEdgeDrop ? null : e, n.paneDragSurface) != null,
                    a = n.bubbleDropPosition ?? (ah ? eF : n.dockPosition);
                if (aw && (n.shouldMinimize ? ay(`bubble-${a}`) : ay(iR ? `bubble-${n.dockPosition}` : `composer-${n.dockPosition}`)), !i && null != n.dockPosition && (ah ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching";
                    (l7?.stage !== e || l7.dockPosition !== a) && (l8({
                        dockPosition: a,
                        stage: e
                    }), (n.shouldMinimize || l7?.stage === "minimized") && l$(ah ? null : {
                        target: n.shouldMinimize ? "minimized" : lW
                    }))
                } else null != l7 && "restored" !== l7.stage && (l8({
                    ...l7,
                    stage: "restored"
                }), "minimized" === l7.stage && l$(ah ? null : {
                    target: lW
                }))
            }, io[556] = ah, io[557] = r6, io[558] = iR, io[559] = l7, io[560] = eF, io[561] = iT, io[562] = lW, io[563] = l8, io[564] = l$, io[565] = aw, io[566] = nk) : nk = io[566], io[567] !== i6 || io[568] !== ah || io[569] !== lP || io[570] !== lN || io[571] !== r6 || io[572] !== az || io[573] !== lp || io[574] !== sn || io[575] !== l7 || io[576] !== eF || io[577] !== iL || io[578] !== iT || io[579] !== lW || io[580] !== ar || io[581] !== r7 || io[582] !== l8 || io[583] !== l$ || io[584] !== aK || io[585] !== aw || io[586] !== r8 ? (nC = (e, t) => {
                if (lk.current) return;
                ay(null);
                let n = r6(t, !0),
                    i = n.suppressEdgeDrop ? null : e,
                    a = e => !!iL?.(i, e, n.paneDragSurface) && (lP.jump(0), lN.jump(0), l8(null), l$(null), ab(!1), !0),
                    l = aC.current,
                    o = (az || aw && i6) && null != ar.get(z.fb) && null != l && null != i ? iT?.(i, n.paneDragSurface) : null;
                null != l && null != o && (az || "right" === o) ? function(e) {
                    let {
                        source: t,
                        getTab: n,
                        destination: i,
                        update: a,
                        reducedMotion: l
                    } = e;
                    K?.animation.skipTransition(), K?.cleanup();
                    let o = t?.ownerDocument ?? document;
                    if (l || null == t || "function" != typeof o.startViewTransition) return a();
                    let r = o.documentElement,
                        s = (0, $.a)({
                            ...y.b,
                            duration: 300,
                            keyframes: [0, 1]
                        }).toString();
                    r.style.setProperty("--chat-pin-easing", s.slice(s.indexOf(" ") + 1)), r.classList.add(V);
                    let c = [],
                        u = (e, t) => {
                            null != e && (e.classList.add(t), c.push(() => e.classList.remove(t)))
                        },
                        d = e => {
                            for (let {
                                    element: t,
                                    className: n
                                }
                                of [{
                                    element: e,
                                    className: "surface-CrBPUX"
                                }, {
                                    element: e.querySelector("[data-docked-chat-toolbar] header"),
                                    className: "header-ccGAyF"
                                }, {
                                    element: e.querySelector("[data-composer-surface-variant]"),
                                    className: "composer-u_BJkO"
                                }, {
                                    element: e.querySelector("[data-composer-input]"),
                                    className: "input-RmFnoM"
                                }, {
                                    element: e.querySelector("[data-composer-leading-controls]"),
                                    className: "leading-Ty6zkf"
                                }, {
                                    element: e.querySelector("[data-composer-trailing-controls]"),
                                    className: "trailing-RPbF6R"
                                }]) u(t, n)
                        },
                        h = () => {
                            c.splice(0).forEach(e => e())
                        },
                        p = !!n()?.getClientRects().length;
                    d(t);
                    let m = null,
                        f = o.startViewTransition(() => {
                            if (h(), !t.isConnected) return void f.skipTransition();
                            if ((0, g.flushSync)(a), null == (m = i())) f.skipTransition();
                            else {
                                d(m), p || u(n()?.closest("[data-tab-id]") ?? null, "incomingTab-fuq1Db");
                                let e = m.querySelector("[data-composer-surface-variant]");
                                if (null != e) {
                                    let t = getComputedStyle(e);
                                    r.style.setProperty("--chat-pin-radius", t.borderRadius), r.style.setProperty("--chat-pin-background", t.backgroundColor), r.style.setProperty("--chat-pin-corner-shape", t.getPropertyValue("corner-shape"))
                                }
                            }
                        }),
                        v = () => {
                            K?.animation === f && (h(), K = null, r.classList.remove(V), r.style.removeProperty("--chat-pin-easing"), r.style.removeProperty("--chat-pin-radius"), r.style.removeProperty("--chat-pin-background"), r.style.removeProperty("--chat-pin-corner-shape"))
                        };
                    K = {
                        animation: f,
                        cleanup: v
                    }, f.ready.catch(() => {}), f.finished.then(v, v)
                }({
                    source: l,
                    getTab: () => {
                        let e = ar.get(j.l.tabById$, ex.a);
                        return null == e ? null : l.ownerDocument.getElementById((0, k.a)(e.dndId))
                    },
                    destination: () => ar.get(ew.b),
                    reducedMotion: aK,
                    update: () => {
                        !lk.current && (a("pin") || (r8(n.requestedDockPosition, !0), ab(!1)))
                    }
                }) : a() || (n.shouldMinimize ? (0, g.flushSync)(() => {
                    null != n.bubbleDropPosition ? r7(n.bubbleDropPosition, !0) : ah && lp || r7(ah ? eF : n.requestedDockPosition, !0), sn()
                }) : (r8(n.requestedDockPosition, !0), null != l7 && "restored" !== l7.stage && (l8({
                    ...l7,
                    stage: "restored"
                }), "minimized" === l7.stage && l$(ah ? null : {
                    target: lW
                }))), ab(!1))
            }, io[567] = i6, io[568] = ah, io[569] = lP, io[570] = lN, io[571] = r6, io[572] = az, io[573] = lp, io[574] = sn, io[575] = l7, io[576] = eF, io[577] = iL, io[578] = iT, io[579] = lW, io[580] = ar, io[581] = r7, io[582] = l8, io[583] = l$, io[584] = aK, io[585] = aw, io[586] = r8, io[587] = nC) : nC = io[587], io[588] !== lP || io[589] !== lN || io[590] !== lK ? (nM = () => {
                lK(!1), ay(null), lk.current = !1, l9.current = !0, ab(!0), lP.stop(), lN.stop()
            }, io[588] = lP, io[589] = lN, io[590] = lK, io[591] = nM) : nM = io[591], io[592] !== ok || io[593] !== ix || io[594] !== ah || io[595] !== as || io[596] !== lU || io[597] !== l2 || io[598] !== lY || io[599] !== lB || io[600] !== l$ || io[601] !== oE ? (nE = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!ah || as) && lY(!0), l2(!0), (as ? oE && ok : ah) && null == ix && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !lU && null == lJ.current && (l$(null), lB("expanded"))) : e.currentTarget.contains(e.target) && !lR.current?.contains(e.target) && (l2(!1), as && e.target.closest("header[data-quick-chat-drag-handle]") && lY(!0))
            }, io[592] = ok, io[593] = ix, io[594] = ah, io[595] = as, io[596] = lU, io[597] = l2, io[598] = lY, io[599] = lB, io[600] = l$, io[601] = oE, io[602] = nE) : nE = io[602], io[603] !== lj || io[604] !== an ? (nP = e => {
                an || "Escape" !== e.key || (l9.current = !0, lj.cancel())
            }, io[603] = lj, io[604] = an, io[605] = nP) : nP = io[605], io[606] !== i7 || io[607] !== an || io[608] !== lc || io[609] !== rW ? (nN = e => {
                if (an || (l9.current = !1, lc || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                    i = lR.current,
                    a = e.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                if (i7 && null != a && i?.contains(a) && (n === a || e.target.contains(a))) t = i;
                else if (null == t || null != n && n !== t) return;
                e.preventDefault(), t.setPointerCapture(e.pointerId), rW(e)
            }, io[606] = i7, io[607] = an, io[608] = lc, io[609] = rW, io[610] = nN) : nN = io[610], io[611] !== lK ? (nR = () => {
                lL.current?.contains(document.activeElement) || lK(!1)
            }, io[611] = lK, io[612] = nR) : nR = io[612], io[613] !== lj || io[614] !== t_ || io[615] !== ir || io[616] !== sF || io[617] !== sH || io[618] !== sA || io[619] !== nf || io[620] !== sB || io[621] !== sO || io[622] !== s$ || io[623] !== sV || io[624] !== sK || io[625] !== sX || io[626] !== ng || io[627] !== sY || io[628] !== nb || io[629] !== ny || io[630] !== nw || io[631] !== nS || io[632] !== nz || io[633] !== nj || io[634] !== nk || io[635] !== nC || io[636] !== nM || io[637] !== nE || io[638] !== nP || io[639] !== nN || io[640] !== nR ? (nD = {
                ref: ir,
                "aria-label": sF,
                "aria-labelledby": sH,
                "aria-modal": sA,
                animate: nf,
                "data-chat-pane-dragging": sB,
                "data-quick-chat-drag-handle": sO,
                "data-pip-obstacle": s$,
                "data-state": "open",
                drag: sV,
                dragConstraints: sK,
                dragElastic: sX,
                dragControls: lj,
                dragListener: !1,
                dragMomentum: !1,
                initial: ng,
                role: sY,
                tabIndex: -1,
                style: nb,
                transition: ny,
                onBlurCapture: nw,
                onClick: nS,
                onDoubleClick: nz,
                onClickCapture: nj,
                onDrag: nk,
                onDragEnd: nC,
                onDragStart: nM,
                onFocusCapture: nE,
                onKeyDown: t_,
                onKeyDownCapture: nP,
                onPointerDownCapture: nN,
                onPointerLeave: nR
            }, io[613] = lj, io[614] = t_, io[615] = ir, io[616] = sF, io[617] = sH, io[618] = sA, io[619] = nf, io[620] = sB, io[621] = sO, io[622] = s$, io[623] = sV, io[624] = sK, io[625] = sX, io[626] = ng, io[627] = sY, io[628] = nb, io[629] = ny, io[630] = nw, io[631] = nS, io[632] = nz, io[633] = nj, io[634] = nk, io[635] = nC, io[636] = nM, io[637] = nE, io[638] = nP, io[639] = nN, io[640] = nR, io[641] = nD) : nD = io[641];
            let s2 = null == id ? "floating" : "content",
                s3 = lS ? "bottom" : "top";
            io[642] !== lP || io[643] !== lN || io[644] !== ot || io[645] !== l$ ? (nT = e => {
                ot(e), e && (l$(null), lP.stop(), lN.stop())
            }, io[642] = lP, io[643] = lN, io[644] = ot, io[645] = l$, io[646] = nT) : nT = io[646], io[647] !== e7.type || io[648] !== sR || io[649] !== ah || io[650] !== oQ || io[651] !== lS || io[652] !== iR || io[653] !== lr || io[654] !== r2 || io[655] !== aD || io[656] !== lY ? (nL = !ah && oQ && "ready" === e7.type ? (0, i.jsx)("div", {
                ref: (0, L.a)(lL, lr, P.c),
                className: (0, o.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iR && (lS ? "top-full" : "bottom-full"), lS ? "pt-3" : "pb-3"),
                "data-pip-obstacle": aD,
                onClickCapture: () => {
                    (iR ? lT.current : lD.current)?.focus({
                        preventScroll: !0
                    }), lY(!1)
                },
                style: iR ? r2 : void 0,
                children: sR
            }) : null, io[647] = e7.type, io[648] = sR, io[649] = ah, io[650] = oQ, io[651] = lS, io[652] = iR, io[653] = lr, io[654] = r2, io[655] = aD, io[656] = lY, io[657] = nL) : nL = io[657], io[658] !== sR || io[659] !== ah || io[660] !== oQ || io[661] !== lS || io[662] !== iR || io[663] !== lr || io[664] !== r2 || io[665] !== l2 || io[666] !== lY || io[667] !== aK ? (nq = ah && oQ ? (0, i.jsx)(h.a.div, {
                initial: {
                    opacity: 0,
                    y: 8 * !aK
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 8 * !aK
                },
                transition: {
                    duration: .3 * !aK,
                    ease: T.e
                },
                ref: (0, L.a)(lL, lr, P.c),
                className: (0, o.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iR && (lS ? "top-full" : "bottom-full"), iR && (lS ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (iR ? lT.current : lD.current)?.focus({
                        preventScroll: !0
                    }), lY(!1), l2(!1)
                },
                style: iR ? r2 : void 0,
                children: iR ? (0, i.jsx)(E.c, {
                    variant: "notice",
                    children: sR
                }) : sR
            }, "response-preview") : null, io[658] = sR, io[659] = ah, io[660] = oQ, io[661] = lS, io[662] = iR, io[663] = lr, io[664] = r2, io[665] = l2, io[666] = lY, io[667] = aK, io[668] = nq) : nq = io[668], io[669] !== nq ? (n_ = (0, i.jsx)(p.a, {
                initial: !1,
                children: nq
            }), io[669] = nq, io[670] = n_) : n_ = io[670], io[671] !== rC || io[672] !== ah || io[673] !== aR || io[674] !== tL || io[675] !== oC || io[676] !== oM || io[677] !== lS || io[678] !== an || io[679] !== iG || io[680] !== aK || io[681] !== oq ? (nI = ah && void 0 !== iG && !an && !oM && (0, i.jsx)(eq, {
                compact: oC,
                preview: oq ? iG : null,
                reduceMotion: aK,
                isDockedTop: lS,
                opacity: rC,
                onExpand: tL
            }, aR), io[671] = rC, io[672] = ah, io[673] = aR, io[674] = tL, io[675] = oC, io[676] = oM, io[677] = lS, io[678] = an, io[679] = iG, io[680] = aK, io[681] = oq, io[682] = nI) : nI = io[682];
            let s4 = lS ? "top-full pt-2" : "bottom-full";
            io[683] !== s4 ? (nF = (0, o.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", s4), io[683] = s4, io[684] = nF) : nF = io[684], io[685] !== li || io[686] !== ov || io[687] !== nF ? (nH = (0, i.jsx)("div", {
                ref: li,
                className: nF,
                hidden: ov
            }), io[685] = li, io[686] = ov, io[687] = nF, io[688] = nH) : nH = io[688];
            let s5 = 0 === o7 && "pt-2",
                s6 = lS ? "w-full" : "w-80",
                s7 = o5 && "left-1/2 -translate-x-1/2",
                s8 = !o5 && (o4 ? "left-0" : "right-0"),
                s9 = ov && av && "invisible";
            io[689] !== s5 || io[690] !== s6 || io[691] !== s7 || io[692] !== s8 || io[693] !== s9 ? (nA = (0, o.b)(q.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", s5, s6, s7, s8, s9), io[689] = s5, io[690] = s6, io[691] = s7, io[692] = s8, io[693] = s9, io[694] = nA) : nA = io[694], io[695] !== o7 ? (nW = {
                marginTop: o7
            }, io[695] = o7, io[696] = nW) : nW = io[696], io[697] !== iw || io[698] !== la || io[699] !== aD || io[700] !== nA || io[701] !== nW ? (nB = (0, i.jsx)("div", {
                ref: la,
                className: nA,
                style: nW,
                "data-pip-obstacle": aD,
                children: iw
            }), io[697] = iw, io[698] = la, io[699] = aD, io[700] = nA, io[701] = nW, io[702] = nB) : nB = io[702], io[703] !== nr || io[704] !== ah || io[705] !== ov ? (nO = ah ? void 0 : {
                clipPath: nr,
                opacity: +!ov
            }, io[703] = nr, io[704] = ah, io[705] = ov, io[706] = nO) : nO = io[706];
            let ce = !oM && "pointer-events-auto";
            io[707] !== ce ? (n$ = (0, o.b)("relative z-0 flex min-h-0 flex-1 flex-col", ce), io[707] = ce, io[708] = n$) : n$ = io[708], io[709] !== ox || io[710] !== ah || io[711] !== r1 ? (nV = ah ? {
                clipPath: r1,
                opacity: ox
            } : void 0, io[709] = ox, io[710] = ah, io[711] = r1, io[712] = nV) : nV = io[712];
            let ct = !!oM || void 0;
            io[713] !== ah || io[714] !== lO || io[715] !== aK ? (nK = aK || !ah && null == lO ? {
                duration: 0
            } : {
                duration: .3,
                ease: T.e
            }, io[713] = ah, io[714] = lO, io[715] = aK, io[716] = nK) : nK = io[716], io[717] !== ov || io[718] !== rY || io[719] !== lW || io[720] !== lO || io[721] !== l$ ? (nX = e => {
                lO?.target === (ov ? "minimized" : lW) && "object" == typeof e && "clipPath" in e && e.clipPath === (ov ? rY : ek) && l$(e => e === lO ? null : e)
            }, io[717] = ov, io[718] = rY, io[719] = lW, io[720] = lO, io[721] = l$, io[722] = nX) : nX = io[722], io[723] !== ah || io[724] !== oz || io[725] !== lS || io[726] !== sn || io[727] !== oE ? (nY = !ah && !oE && (0, i.jsx)("div", {
                className: (0, o.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", lS ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(ei.c, {
                    standalone: !0,
                    isCompact: oz,
                    onMinimize: sn
                })
            }), io[723] = ah, io[724] = oz, io[725] = lS, io[726] = sn, io[727] = oE, io[728] = nY) : nY = io[728], io[729] !== ah || io[730] !== sw || io[731] !== oC || io[732] !== av || io[733] !== sn || io[734] !== iC || io[735] !== oE ? (nQ = (ah || oE) && (iC?.({
                contextMenuTrigger: sw,
                isCompact: oC,
                isDragging: av,
                onMinimize: sn
            }) ?? sw), io[729] = ah, io[730] = sw, io[731] = oC, io[732] = av, io[733] = sn, io[734] = iC, io[735] = oE, io[736] = nQ) : nQ = io[736], io[737] !== im || io[738] !== ak ? (nZ = ak && (0, i.jsx)(ey.a, {
                hasPagePicker: im
            }), io[737] = im, io[738] = ak, io[739] = nZ) : nZ = io[739];
            let cn = oC && "justify-end";
            io[740] !== cn ? (nU = (0, o.b)("relative flex min-h-0 flex-1 flex-col", cn), io[740] = cn, io[741] = nU) : nU = io[741];
            let ci = ah ? oC : aT.followLatestTranscript;
            io[742] !== aT || io[743] !== ci ? (nG = {
                ...aT,
                isFloatingChatSurface: !0,
                followLatestTranscript: ci
            }, io[742] = aT, io[743] = ci, io[744] = nG) : nG = io[744];
            let ca = ah ? "absolute inset-x-0 overflow-hidden" : "contents";
            io[745] !== on || io[746] !== ah || io[747] !== rk ? (nJ = ah ? {
                bottom: on,
                height: rk
            } : void 0, io[745] = on, io[746] = ah, io[747] = rk, io[748] = nJ) : nJ = io[748], io[749] !== rC || io[750] !== oD || io[751] !== aW || io[752] !== oC || io[753] !== lt || io[754] !== aA || io[755] !== iY ? (n0 = oD && (0, i.jsx)(h.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) bottom-0 px-4 py-3 text-sm text-default",
                "aria-hidden": aW || !oC,
                style: {
                    opacity: rC
                },
                ref: lt,
                children: aW ? (0, i.jsx)("span", {
                    className: "line-clamp-2 wrap-anywhere select-none",
                    dir: "auto",
                    children: aA
                }) : iY ?? (0, i.jsx)(b.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…"
                })
            }), io[749] = rC, io[750] = oD, io[751] = aW, io[752] = oC, io[753] = lt, io[754] = aA, io[755] = iY, io[756] = n0) : n0 = io[756];
            let cl = !ah && (oC ? "hidden" : "flex"),
                co = ah && "absolute inset-x-0 bottom-0 flex",
                cr = ah && "overflow-hidden";
            io[757] !== cl || io[758] !== co || io[759] !== cr ? (n1 = (0, o.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", cl, co, cr), io[757] = cl, io[758] = co, io[759] = cr, io[760] = n1) : n1 = io[760], io[761] !== on || io[762] !== ah || io[763] !== rs || io[764] !== rj || io[765] !== oC || io[766] !== az ? (n2 = ah ? {
                height: az ? void 0 : Math.max(0, rs - 46 - on),
                top: az ? 0 : void 0,
                opacity: oC ? 0 : rj
            } : void 0, io[761] = on, io[762] = ah, io[763] = rs, io[764] = rj, io[765] = oC, io[766] = az, io[767] = n2) : n2 = io[767], io[768] !== ah || io[769] !== aP || io[770] !== oj || io[771] !== oC || io[772] !== an || io[773] !== ov || io[774] !== i0 || io[775] !== lB || io[776] !== l$ ? (n3 = aP && (!oj || ah) ? i0?.(() => {
                l$(null), lB("compact")
            }, !oC && !an && !ov) : null, io[768] = ah, io[769] = aP, io[770] = oj, io[771] = oC, io[772] = an, io[773] = ov, io[774] = i0, io[775] = lB, io[776] = l$, io[777] = n3) : n3 = io[777], io[778] !== ah || io[779] !== aE || io[780] !== aP || io[781] !== oC || io[782] !== rf ? (n4 = !aP && (0, i.jsx)(p.a, {
                initial: !1,
                children: (ah || !oC) && null != aE && (0, i.jsx)(h.a.div, {
                    className: "flex min-h-0 flex-1 flex-col",
                    initial: !ah && {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: rf,
                        ease: T.e
                    },
                    children: aE
                }, "empty-state")
            }), io[778] = ah, io[779] = aE, io[780] = aP, io[781] = oC, io[782] = rf, io[783] = n4) : n4 = io[783], io[784] !== oC || io[785] !== a5 || io[786] !== n1 || io[787] !== n2 || io[788] !== n3 || io[789] !== n4 ? (n5 = (0, i.jsxs)(h.a.div, {
                ref: a5,
                "aria-hidden": oC,
                className: n1,
                inert: oC,
                style: n2,
                children: [n3, n4]
            }), io[784] = oC, io[785] = a5, io[786] = n1, io[787] = n2, io[788] = n3, io[789] = n4, io[790] = n5) : n5 = io[790], io[791] !== ah || io[792] !== tL || io[793] !== oD || io[794] !== oC || io[795] !== sa || io[796] !== aA ? (n6 = ah && oC && oD && (0, i.jsx)(I.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "absolute inset-0",
                "aria-label": sa,
                "aria-description": aA ?? void 0,
                "data-quick-chat-drag-handle": !0,
                onClick: tL
            }), io[791] = ah, io[792] = tL, io[793] = oD, io[794] = oC, io[795] = sa, io[796] = aA, io[797] = n6) : n6 = io[797], io[798] !== ca || io[799] !== nJ || io[800] !== n0 || io[801] !== n5 || io[802] !== n6 ? (n7 = (0, i.jsxs)(h.a.div, {
                className: ca,
                style: nJ,
                children: [n0, n5, n6]
            }), io[798] = ca, io[799] = nJ, io[800] = n0, io[801] = n5, io[802] = n6, io[803] = n7) : n7 = io[803], io[804] !== nG || io[805] !== n7 ? (n8 = (0, i.jsx)(ev.b, {
                value: nG,
                children: n7
            }), io[804] = nG, io[805] = n7, io[806] = n8) : n8 = io[806];
            let cs = iC?.({
                contextMenuTrigger: sf,
                isCompact: oC,
                isDragging: av,
                onMinimize: sn
            }) ?? sf;
            io[807] !== nU || io[808] !== n8 || io[809] !== cs ? (n9 = (0, i.jsxs)("div", {
                className: nU,
                children: [n8, cs]
            }), io[807] = nU, io[808] = n8, io[809] = cs, io[810] = n9) : n9 = io[810], io[811] !== lw || io[812] !== oM || io[813] !== nO || io[814] !== n$ || io[815] !== nV || io[816] !== ct || io[817] !== nK || io[818] !== nX || io[819] !== nY || io[820] !== nQ || io[821] !== nZ || io[822] !== n9 ? (ie = (0, i.jsxs)(h.a.div, {
                "aria-hidden": oM,
                animate: nO,
                className: n$,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": lw,
                style: nV,
                initial: !1,
                inert: ct,
                transition: nK,
                onAnimationComplete: nX,
                children: [nY, nQ, nZ, n9]
            }), io[811] = lw, io[812] = oM, io[813] = nO, io[814] = n$, io[815] = nV, io[816] = ct, io[817] = nK, io[818] = nX, io[819] = nY, io[820] = nQ, io[821] = nZ, io[822] = n9, io[823] = ie) : ie = io[823], io[824] !== _ || io[825] !== st || io[826] !== oz || io[827] !== ov || io[828] !== rX || io[829] !== iS || io[830] !== se || io[831] !== sr || io[832] !== so || io[833] !== aK || io[834] !== sD || io[835] !== ns || io[836] !== nc || io[837] !== nu || io[838] !== sT || io[839] !== sL || io[840] !== sq || io[841] !== nd || io[842] !== nh || io[843] !== np || io[844] !== s_ || io[845] !== sI || io[846] !== nD || io[847] !== s2 || io[848] !== s3 || io[849] !== nT || io[850] !== nL || io[851] !== n_ || io[852] !== nI || io[853] !== nH || io[854] !== nB || io[855] !== ie ? (it = (0, i.jsxs)(_, {
                contentRef: aC,
                allowCompactResize: !0,
                animateSurface: sD,
                contentStyle: ns,
                surfaceStyle: nc,
                currentSize: nu,
                heightLabel: sr,
                resizeFromCenter: sT,
                fixedHorizontalEdge: sL,
                isCompact: oz,
                isCompactChromeRevealed: sq,
                isMinimized: ov,
                keepSurfaceInset: !0,
                maximumSize: nd,
                minimizedContent: nh,
                minimizedSurfaceBounds: rX,
                minimumSize: np,
                prefersCompactPresentation: !0,
                resizable: s_,
                background: sI,
                sectionRef: lD,
                sectionProps: nD,
                shouldReduceMotion: aK,
                variant: s2,
                verticalResizeEdge: s3,
                widthLabel: so,
                onResize: se,
                onResizeEnd: st,
                onResizingChange: nT,
                children: [nL, n_, nI, nH, nB, ie, iS]
            }), io[824] = _, io[825] = st, io[826] = oz, io[827] = ov, io[828] = rX, io[829] = iS, io[830] = se, io[831] = sr, io[832] = so, io[833] = aK, io[834] = sD, io[835] = ns, io[836] = nc, io[837] = nu, io[838] = sT, io[839] = sL, io[840] = sq, io[841] = nd, io[842] = nh, io[843] = np, io[844] = s_, io[845] = sI, io[846] = nD, io[847] = s2, io[848] = s3, io[849] = nT, io[850] = nL, io[851] = n_, io[852] = nI, io[853] = nH, io[854] = nB, io[855] = ie, io[856] = it) : it = io[856];
            let cc = it;
            io[857] !== a$ ? (ii = {
                id: a$
            }, io[857] = a$, io[858] = ii) : ii = io[858], io[859] !== ah || io[860] !== le ? (ia = ah && (0, i.jsx)("div", {
                ref: le,
                "aria-hidden": !0,
                className: (0, o.b)(eb.a, "pointer-events-none invisible absolute")
            }), io[859] = ah, io[860] = le, io[861] = ia) : ia = io[861];
            let cu = aw && av && null != ax && (0, i.jsx)(eT, {
                activeIndicator: null == ih ? ax : null,
                fixed: null == id,
                isMinimized: iR,
                bubbleHeight: rT.height,
                reservedDockPosition: iy,
                viewportWidth: ls,
                viewportHeight: rt,
                rightPaneTarget: i6 ? ap : null,
                footerHeight: aZ,
                isRightPaneActive: aS
            });
            return io[862] !== cc || io[863] !== ii || io[864] !== ia || io[865] !== cu ? (il = (0, i.jsxs)(et.a, {
                value: ii,
                children: [ia, cu, cc]
            }), io[862] = cc, io[863] = ii, io[864] = ia, io[865] = cu, io[866] = il) : il = io[866], il
        }

        function eN() {
            return new Set
        }
        let eR = "pointer-events-none fill-none stroke-blue/40 [stroke-width:4px] data-active:stroke-blue data-active:[stroke-width:5px] motion-safe:transition-[stroke,stroke-width,scale] motion-safe:duration-basic motion-safe:ease-enter-snappy data-active:scale-[1.15]",
            eD = {
                "bottom-left": {
                    path: "M 5 7 V 26 Q 5 35 14 35 H 33",
                    className: "origin-[5px_35px]"
                },
                "bottom-center": {
                    path: "M 6 35 H 34",
                    className: "origin-[20px_35px]"
                },
                "bottom-right": {
                    path: "M 35 7 V 26 Q 35 35 26 35 H 7",
                    className: "origin-[35px_35px]"
                }
            };

        function eT(e) {
            let t, n, r, s, c, u = (0, a.c)(33),
                {
                    activeIndicator: d,
                    fixed: p,
                    isMinimized: m,
                    rightPaneTarget: g,
                    footerHeight: v,
                    isRightPaneActive: b,
                    bubbleHeight: y,
                    reservedDockPosition: w,
                    viewportWidth: S,
                    viewportHeight: z
                } = e,
                j = void 0 !== p && p,
                k = void 0 !== m && m,
                C = void 0 === v ? 0 : v,
                E = void 0 !== b && b,
                P = (0, M.c)(),
                N = (0, f.useContext)(x.a),
                R = (0, f.useRef)(null);
            if (u[0] !== g || u[1] !== P ? (t = () => {
                    let e = R.current;
                    if (null != g && null != e) return (0, l.b)(g, null, () => {
                        let t = g.getBoundingClientRect();
                        e.style.left = `${(0,M.b)(t.right,P)}px`, e.style.top = `${(0,M.b)(t.top,P)}px`, e.style.height = `${(0,M.b)(t.height,P)}px`
                    })
                }, n = [g, P], u[0] = g, u[1] = P, u[2] = t, u[3] = n) : (t = u[2], n = u[3]), (0, f.useLayoutEffect)(t, n), u[4] !== d || u[5] !== N || u[6] !== y || u[7] !== j || u[8] !== C || u[9] !== k || u[10] !== E || u[11] !== w || u[12] !== g || u[13] !== z || u[14] !== S || u[15] !== P) {
                let e, t = eL(w, k, !0);
                u[18] !== N || u[19] !== y || u[20] !== C || u[21] !== E || u[22] !== g || u[23] !== P ? (r = null != g && (0, i.jsx)(G.a, {
                    container: g.ownerDocument.body,
                    children: (0, i.jsx)("div", {
                        ref: R,
                        "aria-hidden": !0,
                        className: "pointer-events-none fixed z-50",
                        style: {
                            zoom: P
                        },
                        children: (0, i.jsx)(h.a.div, {
                            className: "absolute inset-y-0 flex w-0 items-center justify-center",
                            style: {
                                right: (0, M.b)(16, P),
                                bottom: N ?? void 0,
                                marginBottom: C + 16 + y
                            },
                            children: (0, i.jsx)("svg", {
                                className: (0, o.b)(eR, "h-46 max-h-full w-8 shrink-0"),
                                "data-floating-chat-drop-indicator": "right-pane",
                                "data-active": E || void 0,
                                "data-active-drop-target": E ? "right-pane" : void 0,
                                viewBox: "0 0 32 184",
                                strokeLinecap: "round",
                                children: (0, i.jsx)("path", {
                                    d: "M 16 20 v 144"
                                })
                            })
                        })
                    })
                }), u[18] = N, u[19] = y, u[20] = C, u[21] = E, u[22] = g, u[23] = P, u[24] = r) : r = u[24], u[25] !== d || u[26] !== j || u[27] !== z || u[28] !== S ? (e = e => {
                    let t = d?.endsWith(e) === !0,
                        n = (S - 40) / 2;
                    "bottom-left" === e ? n = 11 : "bottom-right" === e && (n = S - 11 - 40);
                    let a = eD[e];
                    return (0, i.jsx)("svg", {
                        "aria-hidden": !0,
                        className: (0, o.b)(eR, "size-10 z-20 data-active:z-40", j ? "fixed" : "absolute", a.className),
                        "data-floating-chat-drop-indicator": e,
                        "data-active": t || void 0,
                        "data-active-drop-target": t ? d : void 0,
                        style: {
                            left: n,
                            top: z - 40 - 11
                        },
                        viewBox: "0 0 40 40",
                        strokeLinecap: "round",
                        children: (0, i.jsx)("path", {
                            d: a.path
                        })
                    }, e)
                }, u[25] = d, u[26] = j, u[27] = z, u[28] = S, u[29] = e) : e = u[29], s = ez.filter(e => t.includes(e)).map(e), u[4] = d, u[5] = N, u[6] = y, u[7] = j, u[8] = C, u[9] = k, u[10] = E, u[11] = w, u[12] = g, u[13] = z, u[14] = S, u[15] = P, u[16] = r, u[17] = s
            } else r = u[16], s = u[17];
            return u[30] !== r || u[31] !== s ? (c = (0, i.jsxs)(i.Fragment, {
                children: [r, s]
            }), u[30] = r, u[31] = s, u[32] = c) : c = u[32], c
        }

        function eL(e, t, n) {
            let i = ez;
            return t && (i = n ? ej : ["bottom-right"]), Array.from(new Set(i.map(t => (0, ea.f)(t, e))))
        }

        function eq(e) {
            let t, n, l, r, s, c = (0, a.c)(17),
                {
                    compact: u,
                    preview: d,
                    isDockedTop: m,
                    opacity: f,
                    reduceMotion: g,
                    onExpand: v
                } = e,
                b = m ? "top-full mt-2" : "bottom-full mb-2";
            c[0] !== b ? (t = (0, o.b)("pointer-events-none absolute inset-x-(--floating-panel-inset) -z-1 grid grid-cols-1 items-end justify-items-start px-4", b), c[0] = b, c[1] = t) : t = c[1], c[2] !== f ? (n = {
                opacity: f
            }, c[2] = f, c[3] = n) : n = c[3];
            let x = !u || !d;
            return c[4] !== u || c[5] !== m || c[6] !== v || c[7] !== d || c[8] !== g ? (l = u && d && (0, i.jsx)(h.a.div, {
                className: (0, o.b)("col-start-1 row-start-1 max-w-full", m ? "origin-top-left" : "origin-bottom-left"),
                initial: !g && {
                    y: 16,
                    scale: .94,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: g ? {
                    duration: 0
                } : {
                    type: "spring",
                    duration: .3,
                    bounce: .16,
                    opacity: {
                        duration: .15
                    }
                },
                children: (0, i.jsx)(I.a, {
                    unstyled: !0,
                    className: "pointer-events-auto max-w-full text-start",
                    "data-quick-chat-drag-handle": !0,
                    onClick: v,
                    children: d.content
                })
            }, d.id), c[4] = u, c[5] = m, c[6] = v, c[7] = d, c[8] = g, c[9] = l) : l = c[9], c[10] !== l ? (r = (0, i.jsx)(p.a, {
                children: l
            }), c[10] = l, c[11] = r) : r = c[11], c[12] !== t || c[13] !== n || c[14] !== x || c[15] !== r ? (s = (0, i.jsx)(h.a.div, {
                className: t,
                style: n,
                inert: x,
                children: r
            }), c[12] = t, c[13] = n, c[14] = x, c[15] = r, c[16] = s) : s = c[16], s
        }

        function e_(e, t, n) {
            return t instanceof Node && (e.contains(t) || t instanceof Element && (null != t.closest("[data-composer-overlay-floating-ui], [data-content-search-bar], [data-composer-focus-target]") || null != t.closest("[data-floating-chat-annotation-layer]") || t.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === n))
        }

        function eI(e, t, n) {
            return Math.max(t, Math.min(e, n))
        }

        function eF() {
            return {
                width: window.visualViewport?.width ?? window.innerWidth,
                height: window.visualViewport?.height ?? window.innerHeight
            }
        }
    }),
    eeV6: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            l = n("slpy"),
            o = n("on57"),
            r = n("IPUh"),
            s = n("Wf1j"),
            c = n("Sm6l"),
            u = n("HOLv"),
            d = n("V8uZ"),
            h = n("vRRZ"),
            p = n("mG0J");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, r, s = (0, a.c)(12),
                    {
                        children: c,
                        isCompact: u,
                        isVisible: d,
                        isDisabled: h
                    } = e,
                    p = void 0 !== u && u,
                    m = !d || !!h || void 0,
                    f = p ? Number(d) : "var(--quick-chat-expansion, 1)";
                s[0] !== f ? (t = {
                    opacity: f
                }, s[0] = f, s[1] = t) : t = s[1];
                let g = !d || !!h || void 0,
                    v = p && "border-b border-default";
                return s[2] !== v ? (n = (0, o.b)("flex h-toolbar cursor-interaction touch-none items-center justify-between px-2 select-none", v), s[2] = v, s[3] = n) : n = s[3], s[4] !== c || s[5] !== n ? (l = (0, i.jsx)("div", {
                    className: n,
                    children: c
                }), s[4] = c, s[5] = n, s[6] = l) : l = s[6], s[7] !== m || s[8] !== t || s[9] !== g || s[10] !== l ? (r = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden",
                    "aria-hidden": m,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: g,
                    children: l
                }), s[7] = m, s[8] = t, s[9] = g, s[10] = l, s[11] = r) : r = s[11], r
            },
            b: function(e) {
                let t, n = (0, a.c)(2),
                    {
                        children: l
                    } = e;
                return n[0] !== l ? (t = (0, i.jsx)("span", {
                    className: "flex button-toolbar max-w-full min-w-0 items-center gap-2 border border-transparent py-0 text-sm leading-[18px] font-normal",
                    children: l
                }), n[0] = l, n[1] = t) : t = n[1], t
            },
            c: function(e) {
                let t, n, l, o, r = (0, a.c)(11),
                    {
                        isCompact: d,
                        onMinimize: p,
                        standalone: m
                    } = e,
                    f = void 0 !== m && m,
                    g = (0, s.a)();
                r[0] !== g ? (t = g.formatMessage({
                    id: "quickChat.minimize",
                    defaultMessage: "Minimize chat"
                }), r[0] = g, r[1] = t) : t = r[1];
                let v = f ? "outlineSurface" : "ghostSecondary",
                    b = d ? "composer" : "toolbar";
                return r[2] !== f ? (n = e => {
                    f && e.preventDefault()
                }, r[2] = f, r[3] = n) : n = r[3], r[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.jsx)(u.a, {
                    "aria-hidden": !1,
                    asset: h.a
                }), r[4] = l) : l = r[4], r[5] !== p || r[6] !== t || r[7] !== v || r[8] !== b || r[9] !== n ? (o = (0, i.jsx)(c.a, {
                    "aria-label": t,
                    color: v,
                    size: b,
                    uniform: !0,
                    onClick: p,
                    onPointerDown: n,
                    children: l
                }), r[5] = p, r[6] = t, r[7] = v, r[8] = b, r[9] = n, r[10] = o) : o = r[10], o
            },
            d: function(e) {
                let t, n, o, r, d, h = (0, a.c)(13),
                    {
                        minimizeButton: m,
                        onOpenRightPane: f,
                        disabled: g
                    } = e,
                    v = (0, s.a)();
                h[0] !== v ? (t = v.formatMessage({
                    id: "quickChat.dock.openInRightPanel",
                    defaultMessage: "Open chat in right panel"
                }), h[0] = v, h[1] = t) : t = h[1];
                let b = t;
                return h[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, i.jsx)(u.a, {
                    className: "rotate-180",
                    asset: p.a
                }), h[2] = n) : n = h[2], h[3] !== g || h[4] !== b || h[5] !== f ? (o = (0, i.jsx)(c.a, {
                    "aria-label": b,
                    color: "ghostSecondary",
                    disabled: g,
                    size: "toolbar",
                    uniform: !0,
                    onClick: f,
                    children: n
                }), h[3] = g, h[4] = b, h[5] = f, h[6] = o) : o = h[6], h[7] !== b || h[8] !== o ? (r = (0, i.jsx)(l.a, {
                    content: b,
                    children: o
                }), h[7] = b, h[8] = o, h[9] = r) : r = h[9], h[10] !== m || h[11] !== r ? (d = (0, i.jsxs)("div", {
                    className: "-me-0.5 flex shrink-0 items-center [--spacing-token-button-composer:--spacing(8)]",
                    children: [m, r]
                }), h[10] = m, h[11] = r, h[12] = d) : d = h[12], d
            },
            e: function(e) {
                let t, n, l, s, c, u, h, p = (0, a.c)(28),
                    {
                        animateChrome: m,
                        expandOnClick: f,
                        children: g,
                        isChromeRevealed: v,
                        isCompact: b,
                        isDisabled: x,
                        presentationToggle: y,
                        reserveSpace: w
                    } = e,
                    S = void 0 !== f && f,
                    z = !b && "shrink-0";
                p[0] !== z ? (t = (0, o.b)("relative min-h-0 overflow-hidden", z), p[0] = z, p[1] = t) : t = p[1];
                let j = !v || !!x || void 0,
                    k = v || w ? 46 : 0,
                    C = +!!v;
                p[2] !== k || p[3] !== C ? (n = {
                    height: k,
                    opacity: C
                }, p[2] = k, p[3] = C, p[4] = n) : n = p[4];
                let M = !v || !!x || void 0;
                p[5] !== m || p[6] !== S ? (l = m ? {
                    duration: .3,
                    ease: d.e,
                    ...S ? {
                        opacity: {
                            duration: 0
                        }
                    } : {}
                } : {
                    duration: 0
                }, p[5] = m, p[6] = S, p[7] = l) : l = p[7], p[8] !== b || p[9] !== y ? (s = null != y ? (0, i.jsx)("button", {
                    className: "pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    "aria-label": y.label,
                    "aria-expanded": !b,
                    type: "button",
                    onClick: y.onToggle
                }) : null, p[8] = b, p[9] = y, p[10] = s) : s = p[10];
                let E = !S && null != y && b && "cursor-n-resize",
                    P = !S && null != y && !b && "cursor-s-resize",
                    N = (S || null == y) && "cursor-interaction",
                    R = b && "mx-1.5 border-b border-default px-2",
                    D = !b && "px-3";
                return p[11] !== E || p[12] !== P || p[13] !== N || p[14] !== R || p[15] !== D ? (c = (0, o.b)("flex h-toolbar touch-none select-none items-center justify-between", E, P, N, R, D), p[11] = E, p[12] = P, p[13] = N, p[14] = R, p[15] = D, p[16] = c) : c = p[16], p[17] !== g || p[18] !== c ? (u = (0, i.jsx)("div", {
                    className: c,
                    children: g
                }), p[17] = g, p[18] = c, p[19] = u) : u = p[19], p[20] !== s || p[21] !== u || p[22] !== t || p[23] !== j || p[24] !== n || p[25] !== M || p[26] !== l ? (h = (0, i.jsxs)(r.a.header, {
                    className: t,
                    "aria-hidden": j,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: M,
                    transition: l,
                    children: [s, u]
                }), p[20] = s, p[21] = u, p[22] = t, p[23] = j, p[24] = n, p[25] = M, p[26] = l, p[27] = h) : h = p[27], h
            }
        })
    }),
    sArP: (function(e, t, n) {
        n.d(t, {
            a: () => h
        });
        var i = n("ABep"),
            a = n("QosV"),
            l = n("FHYD"),
            o = n("on57"),
            r = n("zd8w"),
            s = n("wD9O");

        function c(e) {
            let t, n, l, c, d, h, p, m, f, g = (0, a.c)(35),
                {
                    edge: v,
                    getCurrentSize: b,
                    maximumSize: x,
                    resizeFromCenter: y,
                    minimumSize: w,
                    onResizeEnd: S,
                    onResizingChange: z,
                    setSize: j,
                    verticalEdge: k
                } = e,
                C = void 0 === v ? "left" : v,
                M = void 0 !== y && y,
                E = void 0 === k ? "top" : k,
                P = (0, s.c)(),
                N = (0, r.useRef)(null);
            g[0] !== C || g[1] !== x || g[2] !== w || g[3] !== M || g[4] !== j || g[5] !== E || g[6] !== P ? (t = e => {
                let t = N.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                e.preventDefault();
                let n = {
                    height: u(t.startSize.height + ("top" === E ? -1 : 1) * ((0, s.b)(e.clientY, P) - t.startPointer.y), w.height, x.height),
                    width: u(t.startSize.width + (M ? 2 : 1) * ("left" === C ? -1 : 1) * ((0, s.b)(e.clientX, P) - t.startPointer.x), w.width, x.width)
                };
                t.didMove || (t.didMove = n.height !== t.startSize.height || n.width !== t.startSize.width), t.lastSize = n, j(n)
            }, g[0] = C, g[1] = x, g[2] = w, g[3] = M, g[4] = j, g[5] = E, g[6] = P, g[7] = t) : t = g[7];
            let R = t;
            g[8] !== S || g[9] !== z ? (n = (e, t) => {
                let n = N.current;
                n?.pointerId === e.pointerId && (N.current = null, z?.(!1), t && n.didMove && S?.(n.lastSize))
            }, g[8] = S, g[9] = z, g[10] = n) : n = g[10];
            let D = n,
                T = "top" === E ? "top-0" : "bottom-0",
                L = "left" === C ? "left-0" : "right-0",
                q = "left" === C == ("top" === E) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return g[11] !== T || g[12] !== L || g[13] !== q ? (l = (0, o.b)("group absolute z-50 flex size-4 touch-none select-none", T, L, q), g[11] = T, g[12] = L, g[13] = q, g[14] = l) : l = g[14], g[15] !== D ? (c = e => {
                D(e, !1)
            }, g[15] = D, g[16] = c) : c = g[16], g[17] !== R || g[18] !== D ? (d = e => {
                R(e), D(e, !0)
            }, g[17] = R, g[18] = D, g[19] = d) : d = g[19], g[20] !== b || g[21] !== z || g[22] !== P ? (h = e => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId);
                let t = b();
                N.current = {
                    didMove: !1,
                    lastSize: t,
                    pointerId: e.pointerId,
                    startPointer: {
                        x: (0, s.b)(e.clientX, P),
                        y: (0, s.b)(e.clientY, P)
                    },
                    startSize: t
                }, z?.(!0)
            }, g[20] = b, g[21] = z, g[22] = P, g[23] = h) : h = g[23], g[24] !== R || g[25] !== D ? (p = e => {
                R(e), D(e, !0)
            }, g[24] = R, g[25] = D, g[26] = p) : p = g[26], g[27] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, i.jsx)("div", {
                className: "pointer-events-none m-auto h-px w-2 rotate-45 bg-text/25 opacity-0 group-hover:opacity-100 group-active:opacity-100"
            }), g[27] = m) : m = g[27], g[28] !== R || g[29] !== c || g[30] !== d || g[31] !== h || g[32] !== p || g[33] !== l ? (f = (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: l,
                onLostPointerCapture: c,
                onPointerCancel: d,
                onPointerDown: h,
                onPointerMove: R,
                onPointerUp: p,
                children: m
            }), g[28] = R, g[29] = c, g[30] = d, g[31] = h, g[32] = p, g[33] = l, g[34] = f) : f = g[34], f
        }

        function u(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
        let d = ["left", "right"];

        function h(e) {
            let t, n, o, r, s = (0, a.c)(43),
                {
                    currentSize: u,
                    defaultSize: h,
                    extendIntoToolbar: p,
                    fixedHorizontalEdge: m,
                    resizeFromCenter: f,
                    heightLabel: g,
                    maximumSize: v,
                    minimumSize: b,
                    onResize: x,
                    onResizeEnd: y,
                    onResizingChange: w,
                    verticalEdge: S,
                    widthLabel: z
                } = e,
                j = void 0 === p || p,
                k = void 0 !== f && f,
                C = void 0 === S ? "top" : S;
            if (s[0] !== u || s[1] !== h || s[2] !== j || s[3] !== m || s[4] !== g || s[5] !== v || s[6] !== b || s[7] !== x || s[8] !== y || s[9] !== w || s[10] !== k || s[11] !== C || s[12] !== z) {
                let e, a;
                s[16] !== m ? (e = e => e !== m, s[16] = m, s[17] = e) : e = s[17];
                let r = d.filter(e);
                s[18] !== u || s[19] !== h || s[20] !== j || s[21] !== v || s[22] !== b || s[23] !== x || s[24] !== y || s[25] !== w || s[26] !== k || s[27] !== z ? (a = e => (0, i.jsx)(l.a, {
                    ariaLabel: z,
                    defaultSize: h.width,
                    edge: e,
                    resizeFromCenter: k,
                    extendIntoToolbar: j,
                    getCurrentSize: () => u.width,
                    maximumSize: v.width,
                    minimumSize: b.width,
                    onResizeEnd: e => {
                        y({
                            ...u,
                            width: e
                        })
                    },
                    onResizingChange: w,
                    setSize: t => {
                        x(e, {
                            ...u,
                            width: t
                        })
                    }
                }, e), s[18] = u, s[19] = h, s[20] = j, s[21] = v, s[22] = b, s[23] = x, s[24] = y, s[25] = w, s[26] = k, s[27] = z, s[28] = a) : a = s[28], t = r.map(a), s[29] !== u || s[30] !== h || s[31] !== g || s[32] !== v || s[33] !== b || s[34] !== x || s[35] !== y || s[36] !== w || s[37] !== C ? (n = null != C && (0, i.jsx)(l.a, {
                    ariaLabel: g,
                    defaultSize: h.height,
                    edge: C,
                    getCurrentSize: () => u.height,
                    maximumSize: v.height,
                    minimumSize: b.height,
                    onResizeEnd: e => {
                        y({
                            ...u,
                            height: e
                        })
                    },
                    onResizingChange: w,
                    setSize: e => {
                        x("right", {
                            ...u,
                            height: e
                        })
                    }
                }), s[29] = u, s[30] = h, s[31] = g, s[32] = v, s[33] = b, s[34] = x, s[35] = y, s[36] = w, s[37] = C, s[38] = n) : n = s[38], o = null != C && r.map(e => (0, i.jsx)(c, {
                    edge: e,
                    resizeFromCenter: k,
                    getCurrentSize: () => u,
                    maximumSize: v,
                    minimumSize: b,
                    verticalEdge: C,
                    onResizeEnd: y,
                    onResizingChange: w,
                    setSize: t => {
                        x(e, t)
                    }
                }, e)), s[0] = u, s[1] = h, s[2] = j, s[3] = m, s[4] = g, s[5] = v, s[6] = b, s[7] = x, s[8] = y, s[9] = w, s[10] = k, s[11] = C, s[12] = z, s[13] = t, s[14] = n, s[15] = o
            } else t = s[13], n = s[14], o = s[15];
            return s[39] !== t || s[40] !== n || s[41] !== o ? (r = (0, i.jsxs)(i.Fragment, {
                children: [t, n, o]
            }), s[39] = t, s[40] = n, s[41] = o, s[42] = r) : r = s[42], r
        }
    }),
    mphG: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            l = n("jsiH");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o = (0, a.c)(4),
                    {
                        children: r,
                        className: s
                    } = e,
                    c = void 0 === s ? "truncate" : s;
                return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)("span", {
                    className: "hidden group-data-[unread=true]/floating-title:contents",
                    children: (0, i.jsx)(l.a, {
                        className: "bg-accent"
                    })
                }), o[0] = t) : t = o[0], o[1] !== r || o[2] !== c ? (n = (0, i.jsxs)("span", {
                    className: "contents min-w-0 items-center gap-2 group-data-[unread=true]/floating-title:flex",
                    children: [t, (0, i.jsx)("span", {
                        className: c,
                        children: r
                    })]
                }), o[1] = r, o[2] = c, o[3] = n) : n = o[3], n
            }
        })
    })
};