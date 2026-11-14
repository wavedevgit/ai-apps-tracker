export const __rspack_esm_ids = [355084];
export const __webpack_modules__ = {
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
            a: () => ez
        });
        var i = n("ABep"),
            a = n("QosV"),
            l = n("on57"),
            o = n("h24K"),
            r = n("K45w"),
            s = n("W5pg"),
            c = n("jCHb"),
            u = n("p5Yg"),
            d = n("IPUh"),
            h = n("suct"),
            p = n("BolX"),
            m = n("zd8w"),
            f = n("v7qY"),
            g = n("Wf1j"),
            v = n("oyxz"),
            b = n("I7bK"),
            x = n("XExW"),
            y = n("Q2Qp"),
            w = n("QcW8"),
            S = n("ZU27"),
            z = n("BzS0"),
            C = n("DUYS"),
            j = n("wD9O"),
            k = n("rsCP"),
            E = n("AclY"),
            M = n("sArP");
        let P = {
            height: 640,
            width: 560
        };
        var N = n("hZax"),
            R = n("V8uZ"),
            T = n("HgLj"),
            L = n("DGC8");

        function D(e) {
            let t, n, o, r, s, c, u, h, p, m, f = (0, a.c)(62),
                {
                    allowCompactResize: g,
                    animateSurface: v,
                    background: b,
                    children: x,
                    currentSize: y,
                    contentStyle: w,
                    contentRef: S,
                    fixedHorizontalEdge: z,
                    resizeFromCenter: C,
                    heightLabel: j,
                    isCompact: D,
                    isCompactChromeRevealed: q,
                    isMinimized: _,
                    keepSurfaceInset: F,
                    maximumSize: I,
                    minimizedContent: A,
                    minimizedSurfaceBounds: W,
                    minimumSize: H,
                    onResize: B,
                    onResizeEnd: K,
                    onResizingChange: O,
                    prefersCompactPresentation: V,
                    resizable: $,
                    sectionProps: X,
                    sectionRef: Y,
                    surfaceStyle: Z,
                    shouldReduceMotion: U,
                    variant: Q,
                    verticalResizeEdge: G,
                    widthLabel: J
                } = e,
                ee = void 0 !== g && g,
                et = void 0 === v || v,
                en = void 0 !== C && C,
                ei = void 0 === $ || $,
                ea = (0, N.f)("2163293173"),
                el = !_ && (F || D && !q) ? 6 : 0;
            f[0] !== _ || f[1] !== W || f[2] !== el ? (t = _ && null != W ? W : {
                top: 0,
                right: el,
                bottom: el,
                left: el
            }, f[0] = _, f[1] = W, f[2] = el, f[3] = t) : t = f[3];
            let eo = t,
                er = "panel" !== b && "rounded-[inherit]";
            f[4] !== er ? (n = (0, l.b)("pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto", er), f[4] = er, f[5] = n) : n = f[5];
            let es = n,
                ec = "panel" !== b || V;
            f[6] !== X.ref || f[7] !== Y ? (o = (0, T.a)(Y, X.ref, E.c), f[6] = X.ref, f[7] = Y, f[8] = o) : o = f[8];
            let eu = !ea && V && "frame-Xbg62r",
                ed = V && "group/chat-frame focus:outline-none",
                eh = null != W ? "pointer-events-none" : "pointer-events-auto",
                ep = V && L.a.floatingSurface,
                em = F && L.a.singleLineSurface,
                ef = "floating" === Q ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                eg = V ? "overflow-visible" : "overflow-hidden";
            f[9] !== eu || f[10] !== ed || f[11] !== eh || f[12] !== ep || f[13] !== em || f[14] !== ef || f[15] !== eg ? (r = (0, l.b)("flex flex-col text-default", eu, ed, eh, ep, em, ef, eg), f[9] = eu, f[10] = ed, f[11] = eh, f[12] = ep, f[13] = em, f[14] = ef, f[15] = eg, f[16] = r) : r = f[16];
            let ev = null != w ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== ev ? (s = (0, l.b)(ev), f[17] = ev, f[18] = s) : s = f[18], f[19] !== et || f[20] !== b || f[21] !== es || f[22] !== F || f[23] !== A || f[24] !== V || f[25] !== U || f[26] !== eo || f[27] !== Z ? (c = V ? (0, i.jsx)(k.c, {
                asChild: !0,
                unstyled: "panel" !== b,
                variant: F ? "single-line" : "default",
                children: null != Z ? (0, i.jsx)(d.a.div, {
                    className: es,
                    "aria-hidden": null == A || void 0,
                    style: Z
                }, "panel-background") : (0, i.jsx)(d.a.div, {
                    className: es,
                    "aria-hidden": null == A || void 0,
                    animate: eo,
                    initial: !1,
                    transition: U || !et ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: R.e
                    },
                    children: A
                }, "legacy-background")
            }) : null, f[19] = et, f[20] = b, f[21] = es, f[22] = F, f[23] = A, f[24] = V, f[25] = U, f[26] = eo, f[27] = Z, f[28] = c) : c = f[28], f[29] !== ee || f[30] !== y || f[31] !== z || f[32] !== j || f[33] !== D || f[34] !== _ || f[35] !== I || f[36] !== H || f[37] !== B || f[38] !== K || f[39] !== O || f[40] !== ei || f[41] !== en || f[42] !== eo || f[43] !== G || f[44] !== J ? (u = ei && (!D || ee) && !_ ? (0, i.jsx)("div", {
                className: "pointer-events-none absolute",
                style: eo,
                children: (0, i.jsx)("div", {
                    className: "pointer-events-auto contents",
                    children: (0, i.jsx)(M.a, {
                        currentSize: y,
                        defaultSize: P,
                        extendIntoToolbar: !1,
                        fixedHorizontalEdge: z,
                        resizeFromCenter: en,
                        heightLabel: j,
                        maximumSize: I,
                        minimumSize: H,
                        verticalEdge: D ? null : G,
                        widthLabel: J,
                        onResize: B,
                        onResizeEnd: K,
                        onResizingChange: O
                    })
                })
            }) : null, f[29] = ee, f[30] = y, f[31] = z, f[32] = j, f[33] = D, f[34] = _, f[35] = I, f[36] = H, f[37] = B, f[38] = K, f[39] = O, f[40] = ei, f[41] = en, f[42] = eo, f[43] = G, f[44] = J, f[45] = u) : u = f[45];
            let eb = null == Z ? null : A;
            return f[46] !== x || f[47] !== S || f[48] !== w || f[49] !== s || f[50] !== c || f[51] !== u || f[52] !== eb ? (h = (0, i.jsxs)(d.a.div, {
                ref: S,
                className: s,
                style: w,
                children: [c, u, eb, x]
            }), f[46] = x, f[47] = S, f[48] = w, f[49] = s, f[50] = c, f[51] = u, f[52] = eb, f[53] = h) : h = f[53], f[54] !== X || f[55] !== r || f[56] !== h || f[57] !== o ? (p = (0, i.jsx)(d.a.section, {
                ...X,
                ref: o,
                className: r,
                children: h
            }), f[54] = X, f[55] = r, f[56] = h, f[57] = o, f[58] = p) : p = f[58], f[59] !== p || f[60] !== ec ? (m = (0, i.jsx)(k.c, {
                asChild: !0,
                unstyled: ec,
                children: p
            }), f[59] = p, f[60] = ec, f[61] = m) : m = f[61], m
        }
        var q = n("Sm6l"),
            _ = n("bf6R");

        function F(e) {
            let t, n, l, o, r, s, c, u, d, h, p, f = (0, a.c)(56),
                {
                    title: b,
                    preview: x,
                    onOpen: y,
                    onDismiss: w,
                    isWorking: S,
                    workingContent: z
                } = e,
                C = void 0 !== S && S,
                j = (0, N.f)("2163293173"),
                E = (0, g.a)();
            f[0] !== E || f[1] !== b ? (t = b ?? E.formatMessage({
                id: "quickChat.mainConversation",
                defaultMessage: "Chat"
            }), f[0] = E, f[1] = b, f[2] = t) : t = f[2];
            let M = t,
                P = (0, m.useEffectEvent)(w);
            if (f[3] !== j || f[4] !== P || f[5] !== C ? (n = () => {
                    if (!j || C) return;
                    let e = window.setTimeout(() => P(), 1e4);
                    return () => window.clearTimeout(e)
                }, f[3] = j, f[4] = P, f[5] = C, f[6] = n) : n = f[6], f[7] !== j || f[8] !== C ? (l = [j, C], f[7] = j, f[8] = C, f[9] = l) : l = f[9], (0, m.useEffect)(n, l), !j) {
                let e, t, n, a, l, o, r, s, c, u;
                return f[10] !== E || f[11] !== M ? (e = E.formatMessage({
                    id: "quickChat.openCompletedResponse",
                    defaultMessage: "Open completed response: {title}"
                }, {
                    title: M
                }), f[10] = E, f[11] = M, f[12] = e) : e = f[12], f[13] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(_.mc, {
                    className: "text-success"
                }), f[13] = t) : t = f[13], f[14] !== M ? (n = (0, i.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2 text-sm font-semibold text-default",
                    children: [t, (0, i.jsx)("span", {
                        className: "truncate",
                        children: M
                    })]
                }), f[14] = M, f[15] = n) : n = f[15], f[16] !== x ? (a = x || (0, i.jsx)(v.a, {
                    id: "quickChat.responseReady",
                    defaultMessage: "Response ready"
                }), f[16] = x, f[17] = a) : a = f[17], f[18] !== a ? (l = (0, i.jsx)("span", {
                    className: "block truncate text-sm text-secondary",
                    children: a
                }), f[18] = a, f[19] = l) : l = f[19], f[20] !== y || f[21] !== e || f[22] !== n || f[23] !== l ? (o = (0, i.jsxs)("button", {
                    className: "min-w-0 flex-1 cursor-interaction rounded-[inherit] px-4 py-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    "aria-label": e,
                    type: "button",
                    onClick: y,
                    children: [n, l]
                }), f[20] = y, f[21] = e, f[22] = n, f[23] = l, f[24] = o) : o = f[24], f[25] !== E ? (r = E.formatMessage({
                    id: "quickChat.dismissCompletedResponse",
                    defaultMessage: "Dismiss and mark as read"
                }), f[25] = E, f[26] = r) : r = f[26], f[27] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(_.uj, {
                    className: "pointer-events-none"
                }), f[27] = s) : s = f[27], f[28] !== w || f[29] !== r ? (c = (0, i.jsx)("div", {
                    className: "absolute -top-1 -left-1 flex rounded-full bg-surface",
                    children: (0, i.jsx)(q.a, {
                        "aria-label": r,
                        color: "outlineSurface",
                        radius: "full",
                        size: "iconCircleSm",
                        onClick: w,
                        children: s
                    })
                }), f[28] = w, f[29] = r, f[30] = c) : c = f[30], f[31] !== o || f[32] !== c ? (u = (0, i.jsxs)(k.c, {
                    className: "relative flex shrink-0 select-none",
                    role: "status",
                    variant: "notice",
                    children: [o, c]
                }), f[31] = o, f[32] = c, f[33] = u) : u = f[33], u
            }
            return f[34] !== E || f[35] !== M ? (o = E.formatMessage({
                id: "quickChat.openCompletedResponse",
                defaultMessage: "Open completed response: {title}"
            }, {
                title: M
            }), f[34] = E, f[35] = M, f[36] = o) : o = f[36], f[37] !== C || f[38] !== x || f[39] !== z ? (r = C ? z ?? (0, i.jsx)(v.a, {
                id: "quickChat.responseWorking",
                defaultMessage: "Working…"
            }) : x || (0, i.jsx)(v.a, {
                id: "quickChat.responseReady",
                defaultMessage: "Response ready"
            }), f[37] = C, f[38] = x, f[39] = z, f[40] = r) : r = f[40], f[41] !== r ? (s = (0, i.jsx)("span", {
                className: "line-clamp-2 min-w-0 flex-1 text-sm whitespace-normal text-default",
                children: r
            }), f[41] = r, f[42] = s) : s = f[42], f[43] !== y || f[44] !== o || f[45] !== s ? (c = (0, i.jsx)(q.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 rounded-[inherit] px-4 py-3 pe-10 text-start",
                "aria-label": o,
                type: "button",
                onClick: y,
                children: s
            }), f[43] = y, f[44] = o, f[45] = s, f[46] = c) : c = f[46], f[47] !== E ? (u = E.formatMessage({
                id: "quickChat.dismissResponsePreview",
                defaultMessage: "Dismiss response preview"
            }), f[47] = E, f[48] = u) : u = f[48], f[49] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(_.uj, {
                className: "pointer-events-none"
            }), f[49] = d) : d = f[49], f[50] !== w || f[51] !== u ? (h = (0, i.jsx)("div", {
                className: "absolute top-3 right-2 flex rounded-full",
                children: (0, i.jsx)(q.a, {
                    "aria-label": u,
                    color: "ghostSecondary",
                    radius: "full",
                    size: "iconCircleSm",
                    onClick: w,
                    children: d
                })
            }), f[50] = w, f[51] = u, f[52] = h) : h = f[52], f[53] !== h || f[54] !== c ? (p = (0, i.jsxs)("div", {
                className: "relative flex shrink-0 select-none",
                role: "status",
                children: [c, h]
            }), f[53] = h, f[54] = c, f[55] = p) : p = f[55], p
        }
        var I = n("v0Gf"),
            A = n("nsuH");

        function W(e) {
            let t, n, l, o, r, s, c = (0, a.c)(23),
                {
                    items: u,
                    availableHeight: h,
                    isDockedTop: p,
                    shouldReduceMotion: f
                } = e,
                g = (0, N.f)("2163293173"),
                [v, b] = (0, m.useState)(null);
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t) => {
                let n = t.firstElementChild;
                n instanceof HTMLElement && b(n.offsetHeight)
            }, c[0] = t) : t = c[0];
            let x = (0, A.b)(t),
                y = Math.min(null == v ? h : 3 * v + 24, Math.max(0, h - 16)),
                w = .3 * !f;
            c[1] !== w ? (n = {
                duration: w,
                ease: R.e
            }, c[1] = w, c[2] = n) : n = c[2];
            let S = n,
                z = g ? "min-w-0" : "-mx-6 -my-2",
                C = g ? "overflow-y-auto overscroll-contain" : "overflow-y-auto overscroll-contain px-6 py-2",
                j = y + 16;
            c[3] !== j ? (l = {
                style: {
                    maxHeight: j
                }
            }, c[3] = j, c[4] = l) : l = c[4];
            let k = g ? "relative flex flex-col" : "relative flex flex-col gap-3";
            if (c[5] !== p || c[6] !== u || c[7] !== f || c[8] !== S) {
                let e;
                c[10] !== p || c[11] !== f || c[12] !== S ? (e = e => {
                    let {
                        id: t,
                        content: n
                    } = e;
                    return (0, i.jsx)(d.a.div, {
                        className: "shrink-0",
                        layout: !f && "position",
                        transition: S,
                        children: (0, i.jsx)(d.a.div, {
                            initial: {
                                opacity: 0,
                                transform: `translateY(${f?0:8*(p?-1:1)}px)`
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
                }, c[10] = p, c[11] = f, c[12] = S, c[13] = e) : e = c[13], o = u.map(e), c[5] = p, c[6] = u, c[7] = f, c[8] = S, c[9] = o
            } else o = c[9];
            return c[14] !== x || c[15] !== k || c[16] !== o ? (r = (0, i.jsx)("div", {
                ref: x,
                className: k,
                children: o
            }), c[14] = x, c[15] = k, c[16] = o, c[17] = r) : r = c[17], c[18] !== r || c[19] !== z || c[20] !== C || c[21] !== l ? (s = (0, i.jsx)(I.a, {
                className: z,
                fade: "mask",
                scrollClassName: C,
                scrollProps: l,
                children: r
            }), c[18] = r, c[19] = z, c[20] = C, c[21] = l, c[22] = s) : s = c[22], s
        }
        var H = n("wrxv"),
            B = n("oNzN"),
            K = "active-PrspLR";
        let O = null;
        var V = n("EFj1"),
            $ = n("BjWL"),
            X = n("vi3X"),
            Y = n("fDIZ"),
            Z = n("AKr5"),
            U = n("X7C7"),
            Q = n("rmk3"),
            G = n("giDA"),
            J = n("YzWZ"),
            ee = n("eeV6"),
            et = n("Xyz8"),
            en = n("zj7j"),
            ei = n("Z2JT");
        let ea = (0, n("Nwp9").b)("quick-chat-size-v1", P);

        function el(e, t, n) {
            let i = e.get(ea);
            e.set(ea, t), (null == i || i.height !== t.height || i.width !== t.width) && n?.()
        }
        var eo = n("T1PX"),
            er = n("TL6G"),
            es = n("rkZ2"),
            ec = n("f4Vb"),
            eu = n("OWtl"),
            ed = n("tSEg"),
            eh = n("j89V"),
            ep = n("El6m"),
            em = n("KkZX"),
            ef = n("XMPL"),
            eg = n("ZDXf"),
            ev = n("fRoJ"),
            eb = n("bIvi");
        let ex = ["bottom-center", "bottom-left", "bottom-right"],
            ey = "inset(0px 0px 0px 0px round var(--floating-panel-radius))",
            ew = {
                type: "spring",
                bounce: .16,
                duration: .42
            },
            eS = (0, p.u)(eu.a, eP, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (e, t) => e.width === t.width && e.height === t.height,
                onMount: e => {
                    let t = window.visualViewport,
                        n = () => e(eP());
                    return window.addEventListener("resize", n), t?.addEventListener("resize", n), n(), () => {
                        window.removeEventListener("resize", n), t?.removeEventListener("resize", n)
                    }
                }
            });

        function ez(e) {
            let t, n, l, o, r = (0, a.c)(10);
            r[0] !== e ? ({
                contentChat: t,
                ...n
            } = e, r[0] = e, r[1] = t, r[2] = n) : (t = r[1], n = r[2]);
            let s = null != t;
            return r[3] !== t || r[4] !== n ? (l = null == t ? n.renderMenu : e => e.contextMenuTrigger ?? n.renderMenu?.(e), r[3] = t, r[4] = n, r[5] = l) : l = r[5], r[6] !== n || r[7] !== s || r[8] !== l ? (o = (0, i.jsx)(eC, {
                ...n,
                isContentChat: s,
                renderMenu: l
            }), r[6] = n, r[7] = s, r[8] = l, r[9] = o) : o = r[9], o
        }

        function eC(e) {
            let t, n, M, I, ez, eC, eP, eN, eR, eT, eL, eD, eq, e_, eF, eI, eA, eW, eH, eB, eK, eO, eV, e$, eX, eY, eZ, eU, eQ, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tp, tm, tf, tg, tv, tb, tx, ty, tw, tS, tz, tC, tj, tk, tE, tM, tP, tN, tR, tT, tL, tD, tq, t_, tF, tI, tA, tW, tH, tB, tK, tO, tV, t$, tX, tY, tZ, tU, tQ, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, np, nm, nf, ng, nv, nb, nx, ny, nw, nS, nz, nC, nj, nk, nE, nM, nP, nN, nR, nT, nL, nD, nq, n_, nF, nI, nA, nW, nH, nB, nK, nO, nV, n$, nX, nY, nZ, nU, nQ, nG, nJ, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, ie, it, ii, ia = (0, a.c)(843),
                {
                    ref: il,
                    animateOnMount: io,
                    background: ir,
                    renderComposer: is,
                    containerSize: ic,
                    previewSide: iu,
                    hasPagePicker: id,
                    dockThreadKey: ih,
                    canDock: ip,
                    preserveLayoutOnEscape: im,
                    compactInputPosition: ig,
                    reservedDockPosition: iv,
                    footer: ib,
                    overlay: ix,
                    renderHeaderContent: iy,
                    headerInteractionDisabled: iw,
                    allowLegacyHeaderToggle: iS,
                    renderMenu: iz,
                    forceExpanded: iC,
                    hasConversation: ij,
                    isHidden: ik,
                    isContentChat: iE,
                    isMinimized: iM,
                    isCollisionObstacle: iP,
                    onDragOver: iN,
                    onDragEnd: iR,
                    onEscape: iT,
                    onMinimizedChange: iL,
                    onResize: iD,
                    presentation: iq,
                    onPresentationChange: i_,
                    title: iF,
                    titleContent: iI,
                    minimizedIcon: iA,
                    minimizedMenuItems: iW,
                    restoreLabel: iH,
                    statusState: iB,
                    titleStatusState: iK,
                    notifications: iO,
                    workingPreview: iV,
                    responsePreview: i$,
                    showResponsePreview: iX,
                    previewBubble: iY,
                    emptyState: iZ,
                    renderTranscript: iU,
                    hasTranscript: iQ,
                    pendingFormId: iG,
                    showComposerDivider: iJ,
                    showHeader: i0
                } = e,
                i1 = void 0 !== io && io,
                i2 = void 0 === ip || ip,
                i3 = void 0 !== im && im,
                i4 = void 0 !== iw && iw,
                i5 = void 0 === iS || iS,
                i6 = void 0 !== iC && iC,
                i7 = void 0 !== ik && ik,
                i8 = void 0 !== iE && iE,
                i9 = void 0 === iK ? iB : iK,
                ae = void 0 === iX || iX,
                at = void 0 === i0 || i0,
                an = (0, p.y)(eu.a),
                ai = (0, p.y)(ed.a),
                aa = (0, p.z)(void 0 === iG ? null : iG),
                al = null != aa,
                ao = (0, N.f)("2163293173"),
                ar = (0, m.useContext)(y.a),
                as = (0, m.useContext)(x.a)?.workspaceTargetWidth,
                ac = (0, m.useContext)(b.c),
                au = ao && !i7 && null != iu && null != ac && null != ar,
                ad = (0, p.z)(!!ao && void 0 !== iu && es.c),
                ah = au && !ad,
                ap = (0, p.z)(au ? w.gb : null),
                am = (0, m.useRef)(null),
                af = (0, p.z)(!!au && w.jb),
                ag = ao ? iZ : void 0,
                av = iQ ?? null != iU,
                ab = av || null != ag,
                ax = (0, p.z)(ih) ?? void 0,
                ay = void 0 === iP || iP ? "quick-chat" : void 0,
                aw = (0, m.useContext)(ep.b),
                aS = (0, p.z)(iO),
                az = al ? H.a : aS ?? H.a,
                aC = (0, p.z)(iB);
            ia[0] !== aC || ia[1] !== az.type ? (t = "ready" === az.type ? {
                ...aC,
                type: aC?.type ?? "idle",
                unread: !0
            } : aC, ia[0] = aC, ia[1] = az.type, ia[2] = t) : t = ia[2];
            let aj = t,
                ak = (0, p.z)(i9),
                aE = i9 === iB ? aj : ak,
                aM = (0, p.z)(ao && ae ? i$ : null),
                aP = !!aM,
                aN = (0, g.a)(),
                aR = (0, m.useId)(),
                aT = (0, m.useId)(),
                aL = (0, j.c)(),
                aD = (0, eo.a)(),
                aq = (0, p.z)(eS);
            ia[3] !== aq.height || ia[4] !== aL ? (n = (0, j.b)(aq.height, aL), ia[3] = aq.height, ia[4] = aL, ia[5] = n) : n = ia[5];
            let a_ = n,
                aF = (0, j.b)(aq.width, aL),
                [aI, aA] = (0, m.useState)(0),
                [aW, aH] = (0, m.useState)(!1),
                [aB, aK] = (0, m.useState)(0),
                [aO, aV] = (0, m.useState)(null),
                [a$, aX] = (0, m.useState)(null),
                [aY, aZ] = (0, m.useState)(0),
                [aU, aQ] = (0, m.useState)(null);
            ia[6] === Symbol.for("react.memo_cache_sentinel") ? (M = e => {
                e.contentRect.width > 0 && aQ(e.contentRect.width)
            }, ia[6] = M) : M = ia[6];
            let aG = (0, A.b)(M);
            ia[7] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                aZ((0, ec.a)(e).height)
            }, ia[7] = I) : I = ia[7];
            let aJ = (0, A.b)(I);
            ia[8] === Symbol.for("react.memo_cache_sentinel") ? (ez = e => {
                aK((0, ec.a)(e).height)
            }, ia[8] = ez) : ez = ia[8];
            let a0 = (0, A.b)(ez);
            ia[9] !== a0 ? (eC = e => {
                aV(e), a0(e)
            }, ia[9] = a0, ia[10] = eC) : eC = ia[10];
            let a1 = (0, eb.a)(eC);
            ia[11] === Symbol.for("react.memo_cache_sentinel") ? (eP = e => {
                aA((0, ec.a)(e).height)
            }, ia[11] = eP) : eP = ia[11];
            let a2 = (0, A.b)(eP),
                [a3, a4] = (0, m.useState)(0);
            ia[12] === Symbol.for("react.memo_cache_sentinel") ? (eN = e => {
                a4((0, ec.a)(e).height)
            }, ia[12] = eN) : eN = ia[12];
            let a5 = (0, A.b)(eN),
                a6 = ic?.width ?? aF,
                a7 = aF < 640;
            ia[13] !== i2 || ia[14] !== ao ? (eR = () => i2 ? ao ? "bottom-right" : (0, J.a)() : "bottom-center", ia[13] = i2, ia[14] = ao, ia[15] = eR) : eR = ia[15];
            let [a8] = (0, m.useState)(eR), a9 = ax ?? null;
            ia[16] !== a9 ? (eT = {
                threadKey: a9,
                minimized: !1
            }, ia[16] = a9, ia[17] = eT) : eT = ia[17];
            let le = (0, p.x)(i2 ? en.a : void 0, eT),
                lt = i8 && i2,
                ln = ax ?? null;
            ia[18] !== ln ? (eL = {
                threadKey: ln,
                minimized: !0
            }, ia[18] = ln, ia[19] = eL) : eL = ia[19];
            let li = (0, p.x)(i2 && !i8 ? en.a : void 0, eL);
            ia[20] === Symbol.for("react.memo_cache_sentinel") ? (eD = {}, ia[20] = eD) : eD = ia[20];
            let [la, ll] = (0, m.useState)(eD), lo = (null != ax || ao ? null : la.expanded) ?? le ?? a8, lr = null == ig ? lo : la.expanded ?? ig, ls = a7 ? "bottom-center" : lr;
            ia[21] !== ao || ia[22] !== ax || ia[23] !== ls || ia[24] !== lt || ia[25] !== la || ia[26] !== li ? (eq = "bottom-right", lt ? eq = (0, et.a)(ls) : ao || (eq = (null == ax ? la.minimized : null) ?? li ?? "bottom-right"), ia[21] = ao, ia[22] = ax, ia[23] = ls, ia[24] = lt, ia[25] = la, ia[26] = li, ia[27] = eq) : eq = ia[27];
            let lc = i2 ? (0, et.f)(iM ? eq : ls, iv) : "bottom-center",
                lu = lc.startsWith("top"),
                ld = (0, p.z)(ea),
                lh = (0, o.a)(),
                lp = (0, m.useRef)(!1);
            ia[28] === Symbol.for("react.memo_cache_sentinel") ? (e_ = {
                x: 0,
                y: 0
            }, ia[28] = e_) : e_ = ia[28];
            let lm = (0, m.useRef)(e_),
                lf = (0, m.useRef)(null),
                lg = (0, m.useRef)(null),
                lv = (0, r.a)(0),
                lb = (0, r.a)(0),
                lx = (0, m.useRef)(null),
                ly = (0, m.useRef)(null),
                lw = (0, m.useRef)(null),
                lS = (0, m.useRef)(null),
                [lz, lC] = (0, m.useState)("compact"),
                [lj, lk] = (0, m.useState)(null),
                lE = iY?.id ?? "",
                lM = lj === lE,
                lP = iq ?? lz;
            ia[29] !== ab || ia[30] !== iq || ia[31] !== i8 || ia[32] !== i_ ? (eF = e => {
                (i8 || "expanded" !== e || ab) && (null == iq && lC(e), lk(null), i_?.(e))
            }, ia[29] = ab, ia[30] = iq, ia[31] = i8, ia[32] = i_, ia[33] = eF) : eF = ia[33];
            let lN = eF,
                [lR, lT] = (0, m.useState)(null),
                [lL, lD] = (0, m.useState)(!1),
                [lq, l_] = (0, m.useState)(!1),
                [lF, lI] = (0, m.useState)(!1),
                [lA, lW] = (0, m.useState)(!1),
                lH = (0, m.useRef)(null);
            ia[34] === Symbol.for("react.memo_cache_sentinel") ? (eI = e => {
                (null != lH.current && (cancelAnimationFrame(lH.current), lH.current = null), null != e) ? lW(!0): lH.current = requestAnimationFrame(() => {
                    lH.current = null, lW(!1)
                })
            }, ia[34] = eI) : eI = ia[34];
            let lB = eI;
            ia[35] === Symbol.for("react.memo_cache_sentinel") ? (eA = () => () => {
                null != lH.current && cancelAnimationFrame(lH.current)
            }, eW = [], ia[35] = eA, ia[36] = eW) : (eA = ia[35], eW = ia[36]), (0, m.useEffect)(eA, eW);
            let [lK, lO] = (0, m.useState)(!1), [lV, l$] = (0, m.useState)(!1), [lX, lY] = (0, m.useState)(!1), [lZ, lU] = (0, m.useState)(!0), [lQ, lG] = (0, m.useState)(null), lJ = (0, m.useRef)(!1), [l0, l1] = (0, m.useState)(!1), [l2, l3] = (0, m.useState)(0), [l4, l5] = (0, m.useState)(0), [l6, l7] = (0, m.useState)(!1);
            ia[37] !== ao || ia[38] !== aL ? (eH = (e, t) => {
                l3(ao ? (0, ec.a)(e).height : e.contentRect.height), l7(e.contentRect.width < 640);
                let n = t.querySelector(`[${$.a}]`)?.getBoundingClientRect().height ?? 0;
                l5(Math.max(0, e.contentRect.height - (0, j.b)(n, aL)))
            }, ia[37] = ao, ia[38] = aL, ia[39] = eH) : eH = ia[39];
            let l8 = (0, A.b)(eH),
                [l9, oe] = (0, m.useState)(null),
                [ot, on] = (0, m.useState)(!1),
                [oi, oa] = (0, m.useState)(ax);
            oi !== ax && (oa(ax), ll({}), l$(!1), lY(!1), lG(null), lT(null), lI(!1), on(!1), lk(null));
            let [ol, oo] = (0, m.useState)(aa);
            ol !== aa && (oo(aa), lG(null), lT(null));
            let or = !au && (iM || lQ?.stage === "minimized"),
                os = (0, r.a)(+!!or);
            ia[40] !== os ? (eB = () => 1 - os.get(), ia[40] = os, ia[41] = eB) : eB = ia[41];
            let oc = (0, s.a)(eB);
            ia[42] !== os ? (eK = e => os.on("change", e), ia[42] = os, ia[43] = eK) : eK = ia[43];
            let ou = eK;
            ia[44] !== os ? (eO = () => 1 === os.get(), ia[44] = os, ia[45] = eO) : eO = ia[45];
            let od = eO;
            ia[46] !== or ? (eV = () => or, ia[46] = or, ia[47] = eV) : eV = ia[47];
            let oh = (0, m.useSyncExternalStore)(ou, od, eV);
            lR?.target !== "minimized" || or || lT({
                target: lP
            }), ia[48] !== ab || ia[49] !== i6 || ia[50] !== aa || ia[51] !== lP ? (e$ = (0, ei.b)({
                pendingFormId: aa,
                presentation: lP,
                forceExpanded: i6,
                hasTranscript: ab
            }), ia[48] = ab, ia[49] = i6, ia[50] = aa, ia[51] = lP, ia[52] = e$) : e$ = ia[52];
            let {
                isCompact: op,
                isChatCompact: om,
                canTogglePresentation: of
            } = e$, og = op && !au, ov = iM && !au, ob = ao && !i8 ? !op : at;
            (!i8 || i7 || iM || !ob) && lF && lI(!1);
            let ox = ae && ao && !al && !lM && av && (aP || aE?.type === "loading"),
                oy = op && ox,
                ow = ao && og && !i7 && !ov && !al && void 0 !== iY,
                oS = ow && !lM && null != iY,
                oz = oy || oS && iY.transient,
                oC = void 0 !== iJ && iJ || ao;
            ia[53] !== i8 || ia[54] !== i7 || ia[55] !== iM || ia[56] !== ob ? (eX = () => {
                let e, t = ly.current;
                if (null == t || !i8 || i7 || iM || !ob) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, lI(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), lI(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, ia[53] = i8, ia[54] = i7, ia[55] = iM, ia[56] = ob, ia[57] = eX) : eX = ia[57], ia[58] !== ax || ia[59] !== i8 || ia[60] !== i7 || ia[61] !== iM || ia[62] !== ob ? (eY = [ax, i8, i7, iM, ob], ia[58] = ax, ia[59] = i8, ia[60] = i7, ia[61] = iM, ia[62] = ob, ia[63] = eY) : eY = ia[63], (0, m.useEffect)(eX, eY);
            let oj = !i7 && !op && !iM && !i6 && !lV && !l0;
            ia[64] !== aT || ia[65] !== lN || ia[66] !== lT ? (eZ = e => {
                null == ly.current || null != e && eE(ly.current, e.target, aT) || (lT(null), lN("compact"))
            }, ia[64] = aT, ia[65] = lN, ia[66] = lT, ia[67] = eZ) : eZ = ia[67];
            let ok = (0, m.useEffectEvent)(eZ);
            ia[68] !== ok || ia[69] !== aT ? (eU = () => {
                let e = ly.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !eE(e, t, aT) && ok()
            }, ia[68] = ok, ia[69] = aT, ia[70] = eU) : eU = ia[70];
            let oE = (0, m.useEffectEvent)(eU);
            ia[71] !== ao || ia[72] !== oE || ia[73] !== ok || ia[74] !== oj ? (eQ = () => {
                if (!oj) return;
                document.addEventListener("pointerdown", ok, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && oE()
                        })
                    };
                window.addEventListener("blur", t);
                let n = ao ? er.c.subscribe("browser-sidebar-web-contents-pointer-down", () => ok()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", ok, !0)
                }
            }, ia[71] = ao, ia[72] = oE, ia[73] = ok, ia[74] = oj, ia[75] = eQ) : eQ = ia[75], ia[76] !== ao || ia[77] !== oj ? (eG = [ao, oj], ia[76] = ao, ia[77] = oj, ia[78] = eG) : eG = ia[78], (0, m.useEffect)(eQ, eG);
            let oM = aj?.type === "loading";
            ia[79] !== iL || ia[80] !== lD || ia[81] !== lN || ia[82] !== lT ? (eJ = () => {
                ly.current?.focus({
                    preventScroll: !0
                }), lD(!1), lT(null), iL(!1), lN("expanded")
            }, ia[79] = iL, ia[80] = lD, ia[81] = lN, ia[82] = lT, ia[83] = eJ) : eJ = ia[83];
            let oP = (0, eb.a)(eJ),
                [oN, oR] = (0, m.useState)(ej);
            ia[84] === Symbol.for("react.memo_cache_sentinel") ? (e0 = e => {
                oR(t => new Set([...t, e]))
            }, ia[84] = e0) : e0 = ia[84];
            let oT = (0, eb.a)(e0);
            ia[85] !== ao || ia[86] !== oT || ia[87] !== oP || ia[88] !== az ? (e1 = "ready" !== az.type ? az : {
                type: "ready",
                value: az.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(F, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), oP()
                        },
                        onDismiss: ao ? () => oT(e.id) : e.onDismiss
                    })
                }))
            }, ia[85] = ao, ia[86] = oT, ia[87] = oP, ia[88] = az, ia[89] = e1) : e1 = ia[89];
            let oL = e1,
                [oD, oq] = (0, m.useState)(oM);
            if (oD !== oM && (oq(oM), on(!1), lk(null)), ia[90] !== i7 || ia[91] !== iM || ia[92] !== oM || ia[93] !== lE || ia[94] !== oz ? (e2 = () => {
                    if (!oz || i7 || iM || oM) return;
                    let e = window.setTimeout(() => lk(lE), 1e4);
                    return () => window.clearTimeout(e)
                }, ia[90] = i7, ia[91] = iM, ia[92] = oM, ia[93] = lE, ia[94] = oz, ia[95] = e2) : e2 = ia[95], ia[96] !== ax || ia[97] !== i7 || ia[98] !== iM || ia[99] !== oM || ia[100] !== lE || ia[101] !== oz ? (e3 = [ax, oz, i7, iM, oM, lE], ia[96] = ax, ia[97] = i7, ia[98] = iM, ia[99] = oM, ia[100] = lE, ia[101] = oz, ia[102] = e3) : e3 = ia[102], (0, m.useEffect)(e2, e3), ia[103] !== oL || ia[104] !== ao || ia[105] !== oN || ia[106] !== oP || ia[107] !== oM || ia[108] !== iF || ia[109] !== iV || ia[110] !== ot) {
                if (e4 = oL, ao && oM && !ot) {
                    let e, t;
                    ia[112] === Symbol.for("react.memo_cache_sentinel") ? (e = () => on(!0), ia[112] = e) : e = ia[112], ia[113] !== oP || ia[114] !== iF || ia[115] !== iV ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(F, {
                            title: iF,
                            preview: "",
                            isWorking: !0,
                            workingContent: iV,
                            onOpen: oP,
                            onDismiss: e
                        })
                    }], ia[113] = oP, ia[114] = iF, ia[115] = iV, ia[116] = t) : t = ia[116], e4 = {
                        type: "ready",
                        value: t
                    }
                } else if (ao && "ready" === oL.type) {
                    let e;
                    if (ia[117] !== oL.value || ia[118] !== oN) {
                        let t;
                        ia[120] !== oN ? (t = e => !oN.has(e.id), ia[120] = oN, ia[121] = t) : t = ia[121], e = oL.value.filter(t), ia[117] = oL.value, ia[118] = oN, ia[119] = e
                    } else e = ia[119];
                    e4 = {
                        ...oL,
                        value: e
                    }
                }
                ia[103] = oL, ia[104] = ao, ia[105] = oN, ia[106] = oP, ia[107] = oM, ia[108] = iF, ia[109] = iV, ia[110] = ot, ia[111] = e4
            } else e4 = ia[111];
            "ready" !== e4.type && lL && lD(!1);
            let o_ = "ready" === e4.type && e4.value.length > 0 && (or ? iM && (ao ? oh : lL) && !lV : !ao && op),
                oF = !ao && (aE?.type === "loading" || aE?.unread === !0 && !o_),
                oI = oM || aj?.unread === !0 && (iM || !o_);
            ia[122] !== e4.type || ia[123] !== e4.value || ia[124] !== ao || ia[125] !== oT || ia[126] !== oM || ia[127] !== lD ? (e5 = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), lS.current?.contains(document.activeElement) && lw.current?.focus({
                            preventScroll: !0
                        }), ao) {
                        if (oM) on(!0);
                        else if ("ready" === e4.type)
                            for (let e of e4.value) oT(e.id)
                    } else lD(!1)
            }, ia[122] = e4.type, ia[123] = e4.value, ia[124] = ao, ia[125] = oT, ia[126] = oM, ia[127] = lD, ia[128] = e5) : e5 = ia[128];
            let oA = (0, m.useEffectEvent)(e5);
            ia[129] !== oA || ia[130] !== o_ || ia[131] !== i7 || ia[132] !== iM ? (e6 = () => {
                if (!i7 && iM && o_) return document.addEventListener("keydown", oA), () => document.removeEventListener("keydown", oA)
            }, ia[129] = oA, ia[130] = o_, ia[131] = i7, ia[132] = iM, ia[133] = e6) : e6 = ia[133], ia[134] !== o_ || ia[135] !== i7 || ia[136] !== iM ? (e7 = [o_, i7, iM], ia[134] = o_, ia[135] = i7, ia[136] = iM, ia[137] = e7) : e7 = ia[137], (0, m.useEffect)(e6, e7);
            let oW = !iM && !or && (ao && !i8 || !op || lq || lA || lF || lV || aW),
                oH = (ob || au) && (i8 ? !iM && !or : ao || oW),
                oB = ob && oH && !ov && null == iy;
            ia[138] !== aN ? (e8 = aN.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running"
            }), ia[138] = aN, ia[139] = e8) : e8 = ia[139];
            let oK = e8;
            ia[140] !== aN ? (e9 = aN.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response"
            }), ia[140] = aN, ia[141] = e9) : e9 = ia[141];
            let oO = e9,
                oV = oM ? oK : oO,
                o$ = lc.endsWith("left"),
                oX = "bottom-center" === lc,
                oY = o$ ? "left" : "right",
                oZ = lu && !or ? aB : 0,
                oU = 46 * (null == ic) + (lu || or ? 0 : aB),
                oQ = l9 ?? ld ?? P,
                oG = o_ && !iM ? a3 : 0,
                oJ = (ic?.height ?? a_) - aI - (lu ? oG + oZ : 0),
                o0 = Math.max(0, oJ - 32 - oU - (lu ? 0 : oG)),
                o1 = null == ic ? a6 / 2 : Math.max(0, a6 - 20),
                o2 = ao && null != aU ? Math.min(o1, aU + 12) : o1,
                o3 = (l2 || 46) + (ob && oH ? 46 : 0) + (oy ? aY : 0) + 6 * !ao,
                o4 = i8 && ob && oH,
                o5 = (l2 || 46) + 46 * !!o4 + (ox ? aY : 0) + 6 * !ao,
                o6 = eM(oQ.height, Math.min(Math.max(400, l2 + 46), o0), o0),
                o7 = Math.min(op ? o3 : Math.max(400, o3), o0),
                o8 = a7 ? o2 : Math.min(372, o2),
                o9 = eM(op ? o3 : oQ.height, o7, o0),
                re = (0, r.a)(o9),
                rt = (0, m.useRef)(!1),
                rn = l2 > 0,
                ri = i7 || aD || l0 || !ao && (iM || null != lR) ? 0 : .3,
                ra = eM(oQ.width + 12, o8, o2),
                rl = (0, et.d)(lc, {
                    height: o9,
                    width: ra
                }, oJ, a6, 12, oU),
                ro = (0, r.a)(0);
            ia[142] === Symbol.for("react.memo_cache_sentinel") ? (te = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, ia[142] = te) : te = ia[142];
            let rr = (0, r.a)(te);
            ia[143] !== af || ia[144] !== au || ia[145] !== ac || ia[146] !== ar || ia[147] !== rr || ia[148] !== ro || ia[149] !== iu || ia[150] !== aD || ia[151] !== aL || ia[152] !== as ? (tt = () => {
                let e, t = au && ac && ar ? ly.current?.offsetParent : null;
                if (au && ac && ar && t instanceof HTMLElement) {
                    let n = ar.getBoundingClientRect(),
                        i = t.getBoundingClientRect(),
                        a = (0, j.b)(n.width, aL),
                        l = as?.get() ?? a,
                        o = (0, C.f)(ac.contentPaneWidthRatio.get(), l, "unified"),
                        r = af ? o : l - o;
                    e = `--floating-chat-dock-${iu}`, ar.style.setProperty(e, `${r}px`), rr.set({
                        x: (0, j.b)(n.left - i.left, aL) + (a - ("left" === iu ? l : r)) + 4 - 6,
                        y: (0, j.b)(n.top - i.top, aL) + 4,
                        width: r - 8 + 12,
                        height: (0, j.b)(i.bottom - n.top, aL) - 8 + 6
                    })
                }
                let n = +!!au,
                    i = ro.get() === n ? null : (0, c.a)(ro, n, {
                        duration: .15 * !aD,
                        ease: R.e
                    });
                return () => {
                    i?.stop(), null != e && ar?.style.removeProperty(e)
                }
            }, ia[143] = af, ia[144] = au, ia[145] = ac, ia[146] = ar, ia[147] = rr, ia[148] = ro, ia[149] = iu, ia[150] = aD, ia[151] = aL, ia[152] = as, ia[153] = tt) : tt = ia[153], ia[154] !== ic || ia[155] !== af || ia[156] !== au || ia[157] !== ac || ia[158] !== ar || ia[159] !== rr || ia[160] !== ro || ia[161] !== iu || ia[162] !== aD || ia[163] !== aL || ia[164] !== as ? (tn = [ic, 12, af, au, ac, ar, rr, ro, iu, aD, as, aL], ia[154] = ic, ia[155] = af, ia[156] = au, ia[157] = ac, ia[158] = ar, ia[159] = rr, ia[160] = ro, ia[161] = iu, ia[162] = aD, ia[163] = aL, ia[164] = as, ia[165] = tn) : tn = ia[165], (0, m.useLayoutEffect)(tt, tn);
            let rs = (0, s.a)(() => ro.get() * (rr.get().x - rl.x - lv.get())),
                rc = (0, s.a)(() => ro.get() * (rr.get().y - rl.y - lb.get())),
                ru = (0, s.a)(() => 0 === ro.get() ? "100%" : ra + ro.get() * (rr.get().width - ra));
            ia[166] !== re || ia[167] !== rr || ia[168] !== ro ? (ti = () => re.get() + ro.get() * (rr.get().height - re.get()), ia[166] = re, ia[167] = rr, ia[168] = ro, ia[169] = ti) : ti = ia[169];
            let rd = (0, s.a)(ti);
            ia[170] !== re || ia[171] !== o5 || ia[172] !== o6 || ia[173] !== i8 || ia[174] !== og || ia[175] !== ro ? (ta = () => Math.max(ro.get(), i8 && og ? 0 : eM((re.get() - o5) / Math.max(1, o6 - o5), 0, 1)), ia[170] = re, ia[171] = o5, ia[172] = o6, ia[173] = i8, ia[174] = og, ia[175] = ro, ia[176] = ta) : ta = ia[176];
            let rh = (0, s.a)(ta);
            ia[177] !== l2 || ia[178] !== rh || ia[179] !== o4 || ia[180] !== ad || ia[181] !== rd || ia[182] !== ro ? (tl = () => Math.max(0, rd.get() - l2 - 46 * ((o4 ? 1 : rh.get()) - (ad ? 0 : ro.get()))), ia[177] = l2, ia[178] = rh, ia[179] = o4, ia[180] = ad, ia[181] = rd, ia[182] = ro, ia[183] = tl) : tl = ia[183];
            let rp = (0, s.a)(tl);
            ia[184] !== rh ? (to = () => 1 - rh.get(), ia[184] = rh, ia[185] = to) : to = ia[185];
            let rm = (0, s.a)(to);
            ia[186] !== re || ia[187] !== l2 || ia[188] !== ao || ia[189] !== o9 || ia[190] !== rn || ia[191] !== op || ia[192] !== lA || ia[193] !== ri ? (tr = () => {
                let e, t = !rt.current && op;
                if (rn && (rt.current = !0), lA || t || 0 === ri) return void re.jump(o9);
                let n = () => {
                    if (ao) {
                        let e = lx.current;
                        if (null != e && e.offsetHeight !== Math.round(l2)) return void l3(e.offsetHeight)
                    }
                    let t = (0, c.a)(re, o9, {
                        duration: ri,
                        ease: R.e
                    });
                    e = () => t.stop()
                };
                return ao ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, ia[186] = re, ia[187] = l2, ia[188] = ao, ia[189] = o9, ia[190] = rn, ia[191] = op, ia[192] = lA, ia[193] = ri, ia[194] = tr) : tr = ia[194];
            let rf = (0, m.useEffectEvent)(tr),
                rg = ao ? l2 : null,
                rv = ao ? null : rn,
                rb = ao ? null : op;
            ia[195] !== rf ? (ts = () => rf(), ia[195] = rf, ia[196] = ts) : ts = ia[196], ia[197] !== o9 || ia[198] !== rv || ia[199] !== rb || ia[200] !== rg || ia[201] !== ri ? (tc = [o9, ri, rg, rv, rb], ia[197] = o9, ia[198] = rv, ia[199] = rb, ia[200] = rg, ia[201] = ri, ia[202] = tc) : tc = ia[202], (0, m.useLayoutEffect)(ts, tc);
            let rx = ao ? rh : void 0;
            ia[203] !== rx ? (tu = {
                "--quick-chat-expansion": rx
            }, ia[203] = rx, ia[204] = tu) : tu = ia[204];
            let ry = tu,
                rw = {
                    height: Math.min(36, o0),
                    width: Math.min(36, o2)
                },
                rS = (0, et.f)(iM ? lc : lQ?.dockPosition ?? eq, iv),
                rz = (0, et.d)(rS, rw, oJ, a6, 0, oU),
                rC = iM ? rw : {
                    height: o9,
                    width: ra
                },
                rj = iM ? rz : rl,
                rk = iM ? 16 : 10,
                rE = Math.max(rk, a6 - rC.width - rk),
                rM = oU + rk,
                rP = Math.max(rk, oJ - rC.height - rk);
            ia[205] !== rk || ia[206] !== rE || ia[207] !== rM || ia[208] !== rP ? (td = {
                left: rk,
                right: rE,
                top: rM,
                bottom: rP
            }, ia[205] = rk, ia[206] = rE, ia[207] = rM, ia[208] = rP, ia[209] = td) : td = ia[209];
            let rN = td;
            ia[210] === Symbol.for("react.memo_cache_sentinel") ? (th = () => {
                lg.current = null
            }, ia[210] = th) : th = ia[210], ia[211] !== ic || ia[212] !== aL ? (tp = [ic, aL], ia[211] = ic, ia[212] = aL, ia[213] = tp) : tp = ia[213], (0, m.useLayoutEffect)(th, tp);
            let rR = e => {
                    if (!i2) return;
                    lg.current = null == ic ? null : ly.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, j.b)(e.clientX - (lg.current?.left ?? 0), aL),
                        y: (0, j.b)(e.clientY - (lg.current?.top ?? 0), aL)
                    };
                    lm.current = {
                        x: t.x - rj.x - lv.get(),
                        y: t.y - rj.y - lb.get()
                    }, lf.current = {
                        point: t,
                        target: null
                    }, lh.start(e)
                },
                rT = (0, et.d)(rS, {
                    height: o9,
                    width: ra
                }, oJ, a6, 12, oU),
                rL = rz.x - rT.x,
                rD = rz.y - rT.y,
                rq = ra - rL - rw.width,
                r_ = o9 - rD - rw.height;
            ia[214] !== rL || ia[215] !== rD || ia[216] !== rq || ia[217] !== r_ ? (tm = {
                top: rD,
                right: rq,
                bottom: r_,
                left: rL
            }, ia[214] = rL, ia[215] = rD, ia[216] = rq, ia[217] = r_, ia[218] = tm) : tm = ia[218];
            let rF = tm,
                rI = `inset(${rF.top}px ${rF.right}px ${rF.bottom}px ${rF.left}px round var(--floating-panel-radius))`,
                rA = (0, s.a)(() => {
                    let e = os.get(),
                        t = re.get() - o9,
                        n = e * (rF.top + (lu ? 0 : t)),
                        i = 6 + e * (rF.right - 6),
                        a = 6 + e * (rF.bottom + (lu ? t : 0) - 6),
                        l = 6 + e * (rF.left - 6),
                        o = ro.get(),
                        r = 0 === o ? "var(--radius-token-composer-single-line)" : `calc(var(--radius-token-composer-single-line) * ${1-o} + var(--app-shell-sidebar-popover-radius) * ${o})`,
                        s = or || lV || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round ${r})` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: r,
                        clip: s
                    }
                });
            ia[219] !== rA ? (tf = () => rA.get().top, ia[219] = rA, ia[220] = tf) : tf = ia[220];
            let rW = (0, s.a)(tf);
            ia[221] !== rA ? (tg = () => rA.get().right, ia[221] = rA, ia[222] = tg) : tg = ia[222];
            let rH = (0, s.a)(tg);
            ia[223] !== rA ? (tv = () => rA.get().bottom, ia[223] = rA, ia[224] = tv) : tv = ia[224];
            let rB = (0, s.a)(tv);
            ia[225] !== rA ? (tb = () => rA.get().left, ia[225] = rA, ia[226] = tb) : tb = ia[226];
            let rK = (0, s.a)(tb);
            ia[227] !== rA ? (tx = () => rA.get().radius, ia[227] = rA, ia[228] = tx) : tx = ia[228];
            let rO = (0, s.a)(tx);
            ia[229] !== rA ? (ty = () => rA.get().clip, ia[229] = rA, ia[230] = ty) : ty = ia[230];
            let rV = (0, s.a)(ty);
            ia[231] !== ao || ia[232] !== or || ia[233] !== os || ia[234] !== aD ? (tw = () => {
                if (!ao) return;
                let e = (0, c.a)(os, +!!or, {
                    duration: .3 * !aD,
                    ease: R.e
                });
                return () => e.stop()
            }, tS = [ao, or, os, aD], ia[231] = ao, ia[232] = or, ia[233] = os, ia[234] = aD, ia[235] = tw, ia[236] = tS) : (tw = ia[235], tS = ia[236]), (0, m.useLayoutEffect)(tw, tS);
            let r$ = lu ? {
                    top: rD + rw.height
                } : {
                    bottom: o9 - rD
                },
                rX = (0, m.useRef)({
                    dockPosition: lc,
                    dockThreadKey: ax,
                    isMinimized: iM
                });
            ia[237] !== iR ? (tz = () => {
                iR?.(null)
            }, ia[237] = iR, ia[238] = tz) : tz = ia[238];
            let rY = (0, m.useEffectEvent)(tz),
                rZ = (0, m.useEffectEvent)(e => {
                    let t = (0, et.d)(e, {
                        height: o9,
                        width: ra
                    }, oJ, a6, 12, oU);
                    lv.stop(), lb.stop(), lv.jump(lv.get() + t.x - rl.x), lb.jump(lb.get() + t.y - rl.y);
                    let n = aD ? {
                        duration: 0
                    } : ew;
                    (0, c.a)(lv, 0, n), (0, c.a)(lb, 0, n)
                });
            (0, m.useLayoutEffect)(() => {
                let e = rX.current;
                if (rX.current = {
                        dockPosition: lc,
                        dockThreadKey: ax,
                        isMinimized: iM
                    }, e.dockThreadKey !== ax) {
                    lp.current = !0, lJ.current = !0, lh.cancel(), rY(), lv.jump(0), lb.jump(0);
                    return
                }
                if (i7) {
                    lv.jump(0), lb.jump(0);
                    return
                }
                e.isMinimized !== iM && rZ(e.dockPosition)
            }, [lc, ax, lh, lv, lb, i7, iM]), ia[239] !== lv || ia[240] !== lb ? (tC = () => () => {
                lv.stop(), lb.stop()
            }, tj = [lv, lb], ia[239] = lv, ia[240] = lb, ia[241] = tC, ia[242] = tj) : (tC = ia[241], tj = ia[242]), (0, m.useLayoutEffect)(tC, tj);
            let rU = e => {
                let t, n = {
                    ...rC,
                    left: rj.x + lv.get(),
                    top: rj.y + lb.get()
                };
                null != ic && null == lg.current && (lg.current = ly.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == ic ? null : lg.current,
                    a = {
                        x: e.point.x - (0, j.b)(i?.left ?? 0, aL),
                        y: e.point.y - (0, j.b)(i?.top ?? 0, aL)
                    };
                t = ao ? (0, et.b)(n, oJ, a6, ex.filter(e => !iM || "bottom-right" === e || lt && "bottom-left" === e).map(e => (0, et.f)(e, iv)), 12 * !iM, oU) : (0, et.e)({
                    ...n,
                    left: n.width >= a6 / 2 - 2 * rk ? a.x - n.width / 2 : n.left
                }, oJ, a6, iM);
                let l = null == iv ? t : (0, et.f)(t, iv),
                    o = {
                        x: !ao || iM && lt ? Math.min(a.x, a6 - a.x) : a6 - a.x,
                        y: ao ? oJ - a.y : Math.min(a.y - oU, oJ - a.y)
                    },
                    r = o.x <= 16 + rw.width && o.y <= 16 + rw.height;
                if (ao && !iM) {
                    let e = lf.current;
                    if (null != e) {
                        let t = a.x - e.point.x,
                            n = a.y - e.point.y;
                        Math.hypot(t, n) >= 8 && (t >= 0 && n > 0 && n >= t ? e.target = "minimize" : t > 0 && t > 2 * Math.abs(n) ? e.target = null : (t < 0 || n < 0) && (e.target = null), e.point = a)
                    }
                    let n = a.y - lm.current.y + rC.height - oJ;
                    return {
                        dockPosition: l,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        suppressEdgeDrop: r,
                        shouldMinimize: "bottom-right" === l && e?.target === "minimize" && n >= .5 * rC.width
                    }
                }
                let s = (0, et.d)(l, rC, oJ, a6, 12, oU),
                    c = !iM && "bottom-center" !== l && 16 >= Math.abs(n.left - s.x) && 16 >= Math.abs(n.top - s.y);
                return {
                    dockPosition: l,
                    requestedDockPosition: t,
                    isNearDock: c,
                    suppressEdgeDrop: r,
                    shouldMinimize: c && r
                }
            };
            ia[243] !== i2 || ia[244] !== ig || ia[245] !== ao || ia[246] !== ax || ia[247] !== ij || ia[248] !== lt || ia[249] !== an ? (tk = (e, t) => {
                if (!i2) return;
                let n = t && !lt;
                (null == ig || n) && (null != ax || ao && !n) ? (0, en.c)(an, {
                    threadKey: ax ?? null,
                    minimized: n
                }, e, ij) : ll(t => ({
                    expanded: n ? t.expanded : e,
                    minimized: n ? (0, et.a)(e) : t.minimized
                }))
            }, ia[243] = i2, ia[244] = ig, ia[245] = ao, ia[246] = ax, ia[247] = ij, ia[248] = lt, ia[249] = an, ia[250] = tk) : tk = ia[250];
            let rQ = tk,
                rG = (e, t, n) => {
                    let i = void 0 === n ? rC : n,
                        a = (0, et.d)(lc, rC, oJ, a6, 12 * !iM, oU),
                        l = {
                            x: a.x + lv.get(),
                            y: a.y + lb.get()
                        },
                        o = (0, et.d)((0, et.f)(e, iv), i, oJ, a6, 12 * !iM, oU);
                    lv.stop(), lb.stop(), lv.jump(l.x - o.x), lb.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        rQ(e, iM)
                    });
                    let r = ao ? {
                            duration: .3,
                            ease: R.e
                        } : ew,
                        s = aD ? {
                            duration: 0
                        } : r;
                    lY(!0), Promise.all([(0, c.a)(lv, 0, s), (0, c.a)(lb, 0, s)]).then(() => {
                        lY(0 !== lv.get() || 0 !== lb.get())
                    })
                },
                rJ = (0, m.useEffectEvent)(() => {
                    lp.current = !0, lh.cancel(), iR?.(null), rG(lc, !1), lG(null), lT(null), l$(!1)
                });
            ia[251] !== rJ || ia[252] !== lh || ia[253] !== lV ? (tE = () => {
                if (!lV) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), rJ())
                    },
                    t = () => rJ();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    lp.current = !0, lh.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, ia[251] = rJ, ia[252] = lh, ia[253] = lV, ia[254] = tE) : tE = ia[254], ia[255] !== lh || ia[256] !== lV ? (tM = [lh, lV], ia[255] = lh, ia[256] = lV, ia[257] = tM) : tM = ia[257], (0, m.useLayoutEffect)(tE, tM);
            let r0 = (e, t) => {
                    let n = ao && oX ? 0 : (0, et.c)(lc, e, {
                            height: o9,
                            width: ra
                        }, lv.get(), t.width, oJ, a6, 12),
                        i = rl.y + lb.get(),
                        a = (0, et.d)(lc, t, oJ, a6, 12, oU),
                        l = eM(i + (lu ? 0 : o9 - t.height), oU + 10, oJ - t.height - 10);
                    lv.stop(), lb.stop(), (0, f.flushSync)(() => {
                        oe({
                            height: op ? oQ.height : t.height,
                            width: t.width - 12
                        })
                    }), lv.jump(n), lb.jump(l - a.y)
                },
                r1 = e => {
                    el(an, {
                        height: op ? oQ.height : e.height,
                        width: e.width - 12
                    }, () => iD?.(lc)), rG(lc, !1, e)
                };
            ia[258] !== ao || ia[259] !== lV || ia[260] !== iL || ia[261] !== lD || ia[262] !== lG || ia[263] !== lT ? (tP = () => {
                lD(!1), lU(!lV), lG(null), lT(ao ? null : {
                    target: "minimized"
                }), iL(!0)
            }, ia[258] = ao, ia[259] = lV, ia[260] = iL, ia[261] = lD, ia[262] = lG, ia[263] = lT, ia[264] = tP) : tP = ia[264];
            let r2 = tP;
            if (ia[265] !== ig || ia[266] !== ao || ia[267] !== i6 || ia[268] !== al || ia[269] !== op || ia[270] !== i7 || ia[271] !== iM || ia[272] !== iT || ia[273] !== iL || ia[274] !== lP || ia[275] !== i3 || ia[276] !== lD || ia[277] !== lN || ia[278] !== lT) {
                let e, t, n, i;
                tq = () => {
                    (0, f.flushSync)(() => {
                        lD(!1), lT(ao ? null : {
                            target: lP
                        }), iL(!1)
                    }), tT()
                }, ia[286] !== op || ia[287] !== lN || ia[288] !== lT ? (e = () => {
                    lT(null), lN(op ? "expanded" : "compact")
                }, ia[286] = op, ia[287] = lN, ia[288] = lT, ia[289] = e) : e = ia[289], t_ = e;
                let a = !i7 && !iM;
                tN = a && (null != iT || !i3 && !op && !i6), ia[290] !== iT || ia[291] !== lN || ia[292] !== lT ? (t = () => {
                    null != iT ? iT() : (lT(null), lN("compact"))
                }, ia[290] = iT, ia[291] = lN, ia[292] = lT, ia[293] = t) : t = ia[293], tR = t, ia[294] !== tN || ia[295] !== a || ia[296] !== tR || ia[297] !== i3 ? (n = e => {
                    if (!a || "Escape" !== e.key || e.defaultPrevented || e.nativeEvent.isComposing) return;
                    let t = tN && !e.repeat;
                    !t && (!i3 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) || (e.preventDefault(), e.stopPropagation(), t && tR())
                }, ia[294] = tN, ia[295] = a, ia[296] = tR, ia[297] = i3, ia[298] = n) : n = ia[298], tD = n, ia[299] !== al ? (i = () => {
                    let e = lx.current;
                    return al ? (0, Z.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, ia[299] = al, ia[300] = i) : i = ia[300], tL = i, tT = () => {
                    ao && null == ig && (lT(null), lN("expanded")), tL()?.focus({
                        preventScroll: !0
                    })
                }, ia[265] = ig, ia[266] = ao, ia[267] = i6, ia[268] = al, ia[269] = op, ia[270] = i7, ia[271] = iM, ia[272] = iT, ia[273] = iL, ia[274] = lP, ia[275] = i3, ia[276] = lD, ia[277] = lN, ia[278] = lT, ia[279] = tN, ia[280] = tR, ia[281] = tT, ia[282] = tL, ia[283] = tD, ia[284] = tq, ia[285] = t_
            } else tN = ia[279], tR = ia[280], tT = ia[281], tL = ia[282], tD = ia[283], tq = ia[284], t_ = ia[285];
            let r3 = !i7 && al;
            ia[301] !== tL || ia[302] !== al || ia[303] !== iM ? (tF = () => {
                if (null == ly.current || null != ly.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (al) return iM;
                let e = tL();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !lx.current?.contains(t) || t === lx.current
            }, ia[301] = tL, ia[302] = al, ia[303] = iM, ia[304] = tF) : tF = ia[304], ia[305] !== r3 || ia[306] !== tF ? (tI = {
                enabled: r3,
                isActive: tF
            }, ia[305] = r3, ia[306] = tF, ia[307] = tI) : tI = ia[307], (0, V.a)("focusMainChat", iM ? tq : tT, tI), ia[308] !== aN || ia[309] !== op ? (tA = aN.formatMessage(op ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat"
            }), ia[308] = aN, ia[309] = op, ia[310] = tA) : tA = ia[310];
            let r4 = tA;
            ia[311] !== of || ia[312] !== r4 || ia[313] !== t_ ? (tW = of ? {
                label: r4,
                onToggle: t_
            } : void 0, ia[311] = of, ia[312] = r4, ia[313] = t_, ia[314] = tW) : tW = ia[314];
            let r5 = tW;
            ia[315] !== aN ? (tH = aN.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width"
            }), ia[315] = aN, ia[316] = tH) : tH = ia[316];
            let r6 = tH;
            ia[317] !== aN ? (tB = aN.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height"
            }), ia[317] = aN, ia[318] = tB) : tB = ia[318];
            let r7 = tB;
            ia[319] !== i8 || ia[320] !== lN || ia[321] !== lT ? (tK = () => {
                lT(null), i8 && lN("expanded")
            }, ia[319] = i8, ia[320] = lN, ia[321] = lT, ia[322] = tK) : tK = ia[322];
            let r8 = (0, eb.a)(tK);
            ia[323] !== ao || ia[324] !== r8 || ia[325] !== i8 || ia[326] !== lT ? (tO = ao || i8 ? r8 : () => lT(null), ia[323] = ao, ia[324] = r8, ia[325] = i8, ia[326] = lT, ia[327] = tO) : tO = ia[327];
            let r9 = {
                    isCompact: og,
                    canShowPreviewBubble: ow,
                    isNarrow: l6,
                    isChromeRevealed: oW,
                    isHeaderVisible: oH,
                    isComposerFocused: ao ? lK || lA : oW,
                    isDockedTop: lu,
                    isHidden: i7,
                    isMinimized: or,
                    shouldReduceMotion: aD,
                    onSubmitStart: tO
                },
                se = {
                    isMoving: lV || l0 || lX,
                    composerContentHeight: l4,
                    dockedReservePx: l2 > l4 + 6 * !!ao ? o9 + 10 : 0
                };
            ia[328] !== i7 || ia[329] !== iz ? (tV = function(e) {
                !i7 && null != iz && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (ly.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, ia[328] = i7, ia[329] = iz, ia[330] = tV) : tV = ia[330];
            let st = tV;
            ia[331] !== i8 ? (t$ = function(e) {
                !i8 && e.target instanceof Element && (!ly.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, ia[331] = i8, ia[332] = t$) : t$ = ia[332];
            let sn = t$,
                si = is(r9, se),
                sa = i3 ? "editor-only" : null;
            ia[333] !== l8 ? (tX = e => {
                lx.current = e, l8(e)
            }, ia[333] = l8, ia[334] = tX) : tX = ia[334], ia[335] !== tT ? (tY = e => {
                e.target === e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && !lJ.current && tT()
            }, ia[335] = tT, ia[336] = tY) : tY = ia[336], ia[337] !== oC || ia[338] !== og || ia[339] !== ov || ia[340] !== oy ? (tZ = oC && !ov && (!og || oy) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, ia[337] = oC, ia[338] = og, ia[339] = ov, ia[340] = oy, ia[341] = tZ) : tZ = ia[341], ia[342] !== aO ? (tU = {
                target: aO,
                homeBannerPlacement: "inline"
            }, ia[342] = aO, ia[343] = tU) : tU = ia[343];
            let sl = (0, i.jsxs)("div", {
                ref: tX,
                className: (0, l.b)(L.a.floatingComposerInset, "mt-auto shrink-0", i2 && !a7 && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", op && lu && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: st,
                onPointerUp: tY,
                onContextMenu: sn,
                children: [tZ, (0, i.jsx)(ep.b, {
                    value: {
                        ...aw,
                        hasComposerSurface: oC,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !i7 && !op && !iM,
                        floatingChatSurfaceRef: ly,
                        onFloatingDictationRowChange: lB,
                        floatingComposerPresentation: r9,
                        transcriptTarget: a$,
                        followLatestTranscript: ao ? og : aw.followLatestTranscript
                    },
                    children: (0, i.jsx)(Y.a, {
                        value: tN ? tR : sa,
                        children: (0, i.jsx)(X.a, {
                            value: tU,
                            children: si
                        })
                    })
                })]
            });
            ia[344] !== ao || ia[345] !== og || ia[346] !== r2 ? (tQ = ao ? null : (0, i.jsx)(ee.c, {
                isCompact: og,
                onMinimize: r2
            }), ia[344] = ao, ia[345] = og, ia[346] = r2, ia[347] = tQ) : tQ = ia[347];
            let so = tQ;
            ia[348] !== ao || ia[349] !== oF || ia[350] !== so || ia[351] !== at || ia[352] !== iy || ia[353] !== oK || ia[354] !== iF || ia[355] !== iI || ia[356] !== aR || ia[357] !== aE || ia[358] !== oO ? (tG = iy ? iy({
                leadingControl: so
            }) : (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-1",
                children: [so, oF && null != aE ? (0, i.jsx)("div", {
                    className: "flex items-center justify-center",
                    role: "status",
                    "aria-label": "loading" === aE.type ? oK : oO,
                    children: (0, i.jsx)(eh.a, {
                        statusState: aE
                    })
                }) : null, (0, i.jsx)("h2", {
                    id: aR,
                    "data-dropdown-overlay-side": "auto",
                    className: (0, l.b)("min-w-0 text-base font-medium text-secondary", (!ao || null == iI) && "truncate"),
                    children: iI ?? (ao ? (0, i.jsx)(ee.b, {
                        children: (0, i.jsx)("span", {
                            className: "truncate",
                            children: at ? iF : (0, i.jsx)(v.a, {
                                id: "quickChat.newChatTitle",
                                defaultMessage: "New chat"
                            })
                        })
                    }) : iF)
                })]
            }), ia[348] = ao, ia[349] = oF, ia[350] = so, ia[351] = at, ia[352] = iy, ia[353] = oK, ia[354] = iF, ia[355] = iI, ia[356] = aR, ia[357] = aE, ia[358] = oO, ia[359] = tG) : tG = ia[359];
            let sr = tG;
            ia[360] !== aW || ia[361] !== og || ia[362] !== lV || ia[363] !== r2 || ia[364] !== iz ? (tJ = iz?.({
                isCompact: og,
                isDragging: lV,
                open: aW,
                onMinimize: r2,
                onOpenChange: aH
            }), ia[360] = aW, ia[361] = og, ia[362] = lV, ia[363] = r2, ia[364] = iz, ia[365] = tJ) : tJ = ia[365], ia[366] !== ao || ia[367] !== og || ia[368] !== r2 ? (t0 = ao && (0, i.jsx)(ee.c, {
                isCompact: og,
                onMinimize: r2
            }), ia[366] = ao, ia[367] = og, ia[368] = r2, ia[369] = t0) : t0 = ia[369], ia[370] !== sr || ia[371] !== tJ || ia[372] !== t0 ? (t1 = (0, i.jsxs)(i.Fragment, {
                children: [sr, tJ, t0]
            }), ia[370] = sr, ia[371] = tJ, ia[372] = t0, ia[373] = t1) : t1 = ia[373];
            let ss = t1,
                sc = ah ? "hidden" : "contents";
            ia[374] !== i5 || ia[375] !== ao || ia[376] !== ss || ia[377] !== i4 || ia[378] !== i8 || ia[379] !== og || ia[380] !== oH || ia[381] !== iM || ia[382] !== r5 || ia[383] !== lR || ia[384] !== aD || ia[385] !== ob ? (t2 = ao ? (0, i.jsx)(ee.a, {
                isCompact: i8 && og,
                isVisible: oH,
                isDisabled: i4,
                children: ss
            }) : (0, i.jsx)(ee.d, {
                expandOnClick: i8,
                animateChrome: !aD && !iM && null == lR,
                isChromeRevealed: oH,
                isCompact: og,
                isDisabled: i4,
                reserveSpace: i8 && ob && !og,
                presentationToggle: i5 ? r5 : void 0,
                children: ss
            }), ia[374] = i5, ia[375] = ao, ia[376] = ss, ia[377] = i4, ia[378] = i8, ia[379] = og, ia[380] = oH, ia[381] = iM, ia[382] = r5, ia[383] = lR, ia[384] = aD, ia[385] = ob, ia[386] = t2) : t2 = ia[386], ia[387] !== sn || ia[388] !== st || ia[389] !== sc || ia[390] !== t2 ? (t3 = (0, i.jsx)("div", {
                className: sc,
                onPointerDownCapture: st,
                onContextMenu: sn,
                children: t2
            }), ia[387] = sn, ia[388] = st, ia[389] = sc, ia[390] = t2, ia[391] = t3) : t3 = ia[391];
            let su = t3,
                sd = ao ? {
                    top: rS.startsWith("top") ? rD : void 0,
                    bottom: rS.startsWith("top") ? void 0 : rF.bottom,
                    left: rL,
                    width: rw.width,
                    height: rw.height,
                    opacity: os
                } : {
                    inset: 0
                },
                sh = !iM,
                sp = iM ? ay : void 0;
            ia[392] !== ao || ia[393] !== or ? (t4 = ao ? void 0 : {
                opacity: +!!or
            }, ia[392] = ao, ia[393] = or, ia[394] = t4) : t4 = ia[394];
            let sm = !iM || void 0;
            ia[395] !== aD ? (t5 = aD ? {
                duration: 0
            } : {
                duration: .3,
                ease: R.e
            }, ia[395] = aD, ia[396] = t5) : t5 = ia[396];
            let sf = iM ? "minimized" : "preview",
                sg = iM && "pointer-events-auto";
            ia[397] !== sg ? (t6 = (0, l.b)("absolute inset-0 m-auto touch-none", sg), ia[397] = sg, ia[398] = t6) : t6 = ia[398];
            let sv = oI ? oV : void 0;
            ia[399] !== aN || ia[400] !== iH || ia[401] !== iF ? (t7 = iH ?? aN.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}"
            }, {
                title: iF
            }), ia[399] = aN, ia[400] = iH, ia[401] = iF, ia[402] = t7) : t7 = ia[402];
            let sb = !i7 && iM && lZ;
            ia[403] !== tq ? (t8 = e => {
                0 !== e.detail && lJ.current || tq()
            }, ia[403] = tq, ia[404] = t8) : t8 = ia[404], ia[405] !== ao || ia[406] !== lD ? (t9 = e => {
                ao || "touch" === e.pointerType || lD(!0)
            }, ia[405] = ao, ia[406] = lD, ia[407] = t9) : t9 = ia[407], ia[408] !== e4.type || ia[409] !== ao || ia[410] !== lD ? (ne = e => {
                "ready" === e4.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), ao || (0, f.flushSync)(() => lD(!0)), lS.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, ia[408] = e4.type, ia[409] = ao, ia[410] = lD, ia[411] = ne) : ne = ia[411], ia[412] !== a7 || ia[413] !== rR ? (nt = e => {
                a7 || 0 !== e.button || (lJ.current = !1, e.currentTarget.setPointerCapture(e.pointerId), rR(e))
            }, ia[412] = a7, ia[413] = rR, ia[414] = nt) : nt = ia[414], ia[415] !== ao || ia[416] !== oI || ia[417] !== oM || ia[418] !== iA || ia[419] !== aj ? (nn = oM && null != aj && null == iA ? (0, i.jsx)(eh.a, {
                statusState: aj,
                size: ao ? "default" : "compact"
            }) : (0, i.jsx)(U.a, {
                badgeEnabled: oI,
                children: iA ?? (0, i.jsx)(_.Jb, {})
            }), ia[415] = ao, ia[416] = oI, ia[417] = oM, ia[418] = iA, ia[419] = aj, ia[420] = nn) : nn = ia[420], ia[421] !== sf || ia[422] !== t6 || ia[423] !== sv || ia[424] !== t7 || ia[425] !== sb || ia[426] !== t8 || ia[427] !== t9 || ia[428] !== ne || ia[429] !== nt || ia[430] !== nn ? (ni = (0, i.jsx)(q.a, {
                ref: lw,
                className: t6,
                "aria-description": sv,
                "aria-label": t7,
                autoFocus: sb,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: t8,
                onPointerEnter: t9,
                onKeyDown: ne,
                onPointerDown: nt,
                children: nn
            }, sf), ia[421] = sf, ia[422] = t6, ia[423] = sv, ia[424] = t7, ia[425] = sb, ia[426] = t8, ia[427] = t9, ia[428] = ne, ia[429] = nt, ia[430] = nn, ia[431] = ni) : ni = ia[431], ia[432] !== sd || ia[433] !== sh || ia[434] !== sp || ia[435] !== t4 || ia[436] !== sm || ia[437] !== t5 || ia[438] !== ni ? (na = (0, i.jsx)(d.a.div, {
                ref: E.c,
                className: "pointer-events-none absolute",
                style: sd,
                "aria-hidden": sh,
                "data-pip-obstacle": sp,
                animate: t4,
                initial: !1,
                inert: sm,
                transition: t5,
                children: ni
            }), ia[432] = sd, ia[433] = sh, ia[434] = sp, ia[435] = t4, ia[436] = sm, ia[437] = t5, ia[438] = ni, ia[439] = na) : na = ia[439];
            let sx = na,
                sy = "ready" === e4.type ? (0, i.jsx)(W, {
                    items: e4.value,
                    availableHeight: Math.max(0, (ic?.height ?? a_) - oU - aI - (iM ? rw.height : o3) - 32 - 12),
                    isDockedTop: lu,
                    shouldReduceMotion: aD
                }) : null;
            !ao && (nl = ey, or ? nl = rI : null != lR || lV || (nl = "none"));
            let sw = null != lR || !iM;
            ia[440] !== ao || ia[441] !== rd || ia[442] !== ru || ia[443] !== rs || ia[444] !== rc || ia[445] !== rO ? (no = ao ? {
                x: rs,
                y: rc,
                width: ru,
                height: rd,
                borderRadius: rO
            } : void 0, ia[440] = ao, ia[441] = rd, ia[442] = ru, ia[443] = rs, ia[444] = rc, ia[445] = rO, ia[446] = no) : no = ia[446], ia[447] !== ao || ia[448] !== rB || ia[449] !== rK || ia[450] !== rO || ia[451] !== rH || ia[452] !== rW ? (nr = ao ? {
                top: rW,
                right: rH,
                bottom: rB,
                left: rK,
                borderRadius: rO
            } : void 0, ia[447] = ao, ia[448] = rB, ia[449] = rK, ia[450] = rO, ia[451] = rH, ia[452] = rW, ia[453] = nr) : nr = ia[453], ia[454] !== o9 || ia[455] !== ra ? (ns = {
                height: o9,
                width: ra
            }, ia[454] = o9, ia[455] = ra, ia[456] = ns) : ns = ia[456];
            let sS = ao && oX,
                sz = ao && !oX ? oY : void 0,
                sC = ob && oH;
            ia[457] !== o0 || ia[458] !== o2 ? (nc = {
                height: o0,
                width: o2
            }, ia[457] = o0, ia[458] = o2, ia[459] = nc) : nc = ia[459], ia[460] !== sx || ia[461] !== iW ? (nu = null == iW ? sx : (0, i.jsx)(Q.a, {
                disableNative: !0,
                items: iW,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: sx
                })
            }), ia[460] = sx, ia[461] = iW, ia[462] = nu) : nu = ia[462], ia[463] !== o7 || ia[464] !== o8 ? (nd = {
                height: o7,
                width: o8
            }, ia[463] = o7, ia[464] = o8, ia[465] = nd) : nd = ia[465];
            let sj = !a7 && !au,
                sk = or || ao ? "panel" : ir,
                sE = oB ? void 0 : iF,
                sM = oB ? aR : void 0,
                sP = null != ic && void 0;
            ia[466] !== i1 || ia[467] !== rn || ia[468] !== aD ? (nh = i1 ? {
                opacity: +!!rn,
                translateY: 8 * (!rn && !aD)
            } : {}, ia[466] = i1, ia[467] = rn, ia[468] = aD, ia[469] = nh) : nh = ia[469];
            let sN = ao || lQ?.stage !== "approaching" ? 1 : .95;
            ia[470] !== ra || ia[471] !== nh || ia[472] !== sN ? (np = {
                ...nh,
                width: ra,
                scale: sN
            }, ia[470] = ra, ia[471] = nh, ia[472] = sN, ia[473] = np) : np = ia[473];
            let sR = !!ao && void 0 !== iu && !!lV || void 0,
                sT = !ao && op || void 0,
                sL = iM ? void 0 : ay,
                sD = !a7,
                sq = null == ic ? void 0 : {
                    left: rN.left - rj.x,
                    right: rN.right - rj.x,
                    top: rN.top - rj.y,
                    bottom: rN.bottom - rj.y
                },
                s_ = null == ic ? void 0 : 0;
            ia[474] !== i1 || ia[475] !== aD ? (nm = !!i1 && !aD && {
                opacity: 0,
                translateY: 8
            }, ia[474] = i1, ia[475] = aD, ia[476] = nm) : nm = ia[476];
            let sF = null == ic ? "dialog" : "region",
                sI = lu ? oU + 10 : "auto",
                sA = lu ? "auto" : 10 + aI,
                sW = oX ? "50%" : "auto";
            ia[477] !== oY || ia[478] !== oX ? (nf = !oX && {
                [oY]: 10
            }, ia[477] = oY, ia[478] = oX, ia[479] = nf) : nf = ia[479];
            let sH = oX ? "-50% 0" : void 0,
                sB = "bottom-center" === rS ? .5 : Number(rS.endsWith("right")),
                sK = +!rS.startsWith("top");
            ia[480] !== re || ia[481] !== ry || ia[482] !== lv || ia[483] !== lb || ia[484] !== sI || ia[485] !== sA || ia[486] !== sW || ia[487] !== nf || ia[488] !== sH || ia[489] !== sB || ia[490] !== sK ? (ng = {
                ...ry,
                height: re,
                top: sI,
                bottom: sA,
                left: sW,
                right: "auto",
                ...nf,
                translate: sH,
                x: lv,
                y: lb,
                originX: sB,
                originY: sK
            }, ia[480] = re, ia[481] = ry, ia[482] = lv, ia[483] = lb, ia[484] = sI, ia[485] = sA, ia[486] = sW, ia[487] = nf, ia[488] = sH, ia[489] = sB, ia[490] = sK, ia[491] = ng) : ng = ia[491];
            let sO = .3 * !aD;
            ia[492] !== sO ? (nv = {
                duration: sO,
                ease: R.e
            }, ia[492] = sO, ia[493] = nv) : nv = ia[493], ia[494] !== ri || ia[495] !== nv ? (nb = {
                duration: ri,
                ease: R.e,
                scale: nv
            }, ia[494] = ri, ia[495] = nv, ia[496] = nb) : nb = ia[496], ia[497] !== ao || ia[498] !== i8 || ia[499] !== i7 || ia[500] !== aT || ia[501] !== lO || ia[502] !== l_ || ia[503] !== lD || ia[504] !== lN || ia[505] !== lT || ia[506] !== oj ? (nx = e => {
                if (!(i7 || eE(e.currentTarget, e.relatedTarget, aT))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && eE(t, t.ownerDocument.activeElement, aT) || (l_(!1), lO(!1), lD(!1))
                        });
                        return
                    }
                    l_(!1), lO(!1), lD(!1), (!ao || i8) && oj && null == e.target.closest("[inert]") && (lT(null), lN("compact"))
                }
            }, ia[497] = ao, ia[498] = i8, ia[499] = i7, ia[500] = aT, ia[501] = lO, ia[502] = l_, ia[503] = lD, ia[504] = lN, ia[505] = lT, ia[506] = oj, ia[507] = nx) : nx = ia[507], ia[508] !== of || ia[509] !== ao || ia[510] !== tT || ia[511] !== op || ia[512] !== i8 || ia[513] !== iM || ia[514] !== lN || ia[515] !== lT || ia[516] !== ob || ia[517] !== t_ ? (ny = e => {
                if (!(i8 && (0 !== e.button || e.ctrlKey) || iM || lJ.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (op && (e.target === e.currentTarget || lx.current?.contains(e.target))) return void tT();
                    if (i8) {
                        if (!ob || !of) return;
                        op && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), lT(null), lN("expanded");
                        return
                    }
                    if (ao) {
                        op && of && tT();
                        return
                    }
                    ob && of && e.target.closest("header[data-quick-chat-drag-handle]") && (op && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), t_())
                }
            }, ia[508] = of, ia[509] = ao, ia[510] = tT, ia[511] = op, ia[512] = i8, ia[513] = iM, ia[514] = lN, ia[515] = lT, ia[516] = ob, ia[517] = t_, ia[518] = ny) : ny = ia[518], ia[519] !== ao || ia[520] !== o0 || ia[521] !== o2 || ia[522] !== o7 || ia[523] !== o8 || ia[524] !== iM || ia[525] !== iD || ia[526] !== an || ia[527] !== oe || ia[528] !== lN || ia[529] !== lT || ia[530] !== rG ? (nw = e => {
                ao && !iM && !lJ.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (lT(null), lN("expanded"), oe(null), el(an, P, () => iD?.("bottom-right")), rG("bottom-right", !0, {
                    height: eM(P.height, o7, o0),
                    width: eM(P.width + 12, o8, o2)
                }))
            }, ia[519] = ao, ia[520] = o0, ia[521] = o2, ia[522] = o7, ia[523] = o8, ia[524] = iM, ia[525] = iD, ia[526] = an, ia[527] = oe, ia[528] = lN, ia[529] = lT, ia[530] = rG, ia[531] = nw) : nw = ia[531], ia[532] !== i7 ? (nS = e => {
                !i7 && lJ.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, ia[532] = i7, ia[533] = nS) : nS = ia[533], ia[534] !== ao || ia[535] !== rU || ia[536] !== lQ || ia[537] !== eq || ia[538] !== iN || ia[539] !== lP || ia[540] !== lG || ia[541] !== lT ? (nz = (e, t) => {
                let n = rU(t);
                if (!iN?.(n.suppressEdgeDrop ? null : e) && null != n.dockPosition && (ao ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching",
                        t = ao ? eq : n.dockPosition;
                    (lQ?.stage !== e || lQ.dockPosition !== t) && (lG({
                        dockPosition: t,
                        stage: e
                    }), (n.shouldMinimize || lQ?.stage === "minimized") && lT(ao ? null : {
                        target: n.shouldMinimize ? "minimized" : lP
                    }))
                } else null != lQ && "restored" !== lQ.stage && (lG({
                    ...lQ,
                    stage: "restored"
                }), "minimized" === lQ.stage && lT(ao ? null : {
                    target: lP
                }))
            }, ia[534] = ao, ia[535] = rU, ia[536] = lQ, ia[537] = eq, ia[538] = iN, ia[539] = lP, ia[540] = lG, ia[541] = lT, ia[542] = nz) : nz = ia[542], ia[543] !== ao || ia[544] !== ap || ia[545] !== lv || ia[546] !== lb || ia[547] !== rU || ia[548] !== au || ia[549] !== lt || ia[550] !== r2 || ia[551] !== lQ || ia[552] !== eq || ia[553] !== iR || ia[554] !== iN || ia[555] !== lP || ia[556] !== ai || ia[557] !== rQ || ia[558] !== l$ || ia[559] !== lG || ia[560] !== lT || ia[561] !== aD || ia[562] !== rG ? (nC = (e, t) => {
                if (lp.current) return;
                let n = rU(t),
                    i = n.suppressEdgeDrop ? null : e,
                    a = e => !!iR?.(i, e) && (lv.jump(0), lb.jump(0), lG(null), lT(null), l$(!1), !0),
                    l = am.current;
                au && ap && l && i && iN?.(i) ? function(e) {
                    let {
                        source: t,
                        getTab: n,
                        destination: i,
                        update: a,
                        reducedMotion: l
                    } = e;
                    O?.animation.skipTransition(), O?.cleanup();
                    let o = t?.ownerDocument ?? document;
                    if (l || null == t || "function" != typeof o.startViewTransition) return a();
                    let r = o.documentElement,
                        s = (0, B.a)({
                            ...b.b,
                            duration: 300,
                            keyframes: [0, 1]
                        }).toString();
                    r.style.setProperty("--chat-pin-easing", s.slice(s.indexOf(" ") + 1)), r.classList.add(K);
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
                        g = o.startViewTransition(() => {
                            if (h(), !t.isConnected) return void g.skipTransition();
                            if ((0, f.flushSync)(a), null == (m = i())) g.skipTransition();
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
                            O?.animation === g && (h(), O = null, r.classList.remove(K), r.style.removeProperty("--chat-pin-easing"), r.style.removeProperty("--chat-pin-radius"), r.style.removeProperty("--chat-pin-background"), r.style.removeProperty("--chat-pin-corner-shape"))
                        };
                    O = {
                        animation: g,
                        cleanup: v
                    }, g.ready.catch(() => {}), g.finished.then(v, v)
                }({
                    source: l,
                    getTab: () => {
                        let e = ai.get(S.l.tabById$, ef.a);
                        return null == e ? null : l.ownerDocument.getElementById((0, z.a)(e.dndId))
                    },
                    destination: () => ai.get(ev.a),
                    reducedMotion: aD,
                    update: () => {
                        !lp.current && (a("pin") || (rG(n.requestedDockPosition, !0), l$(!1)))
                    }
                }) : a() || (n.shouldMinimize ? (0, f.flushSync)(() => {
                    ao && lt || rQ(ao ? eq : n.requestedDockPosition, !0), r2()
                }) : (rG(n.requestedDockPosition, !0), null != lQ && "restored" !== lQ.stage && (lG({
                    ...lQ,
                    stage: "restored"
                }), "minimized" === lQ.stage && lT(ao ? null : {
                    target: lP
                }))), l$(!1))
            }, ia[543] = ao, ia[544] = ap, ia[545] = lv, ia[546] = lb, ia[547] = rU, ia[548] = au, ia[549] = lt, ia[550] = r2, ia[551] = lQ, ia[552] = eq, ia[553] = iR, ia[554] = iN, ia[555] = lP, ia[556] = ai, ia[557] = rQ, ia[558] = l$, ia[559] = lG, ia[560] = lT, ia[561] = aD, ia[562] = rG, ia[563] = nC) : nC = ia[563], ia[564] !== lv || ia[565] !== lb || ia[566] !== l$ || ia[567] !== lD ? (nj = () => {
                lD(!1), lp.current = !1, lJ.current = !0, l$(!0), lv.stop(), lb.stop()
            }, ia[564] = lv, ia[565] = lb, ia[566] = l$, ia[567] = lD, ia[568] = nj) : nj = ia[568], ia[569] !== of || ia[570] !== ig || ia[571] !== ao || ia[572] !== i8 || ia[573] !== lA || ia[574] !== lO || ia[575] !== l_ || ia[576] !== lN || ia[577] !== lT || ia[578] !== ob ? (nk = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!ao || i8) && l_(!0), lO(!0), (i8 ? ob && of : ao) && null == ig && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !lA && null == lH.current && (lT(null), lN("expanded"))) : e.currentTarget.contains(e.target) && !lx.current?.contains(e.target) && (lO(!1), i8 && e.target.closest("header[data-quick-chat-drag-handle]") && l_(!0))
            }, ia[569] = of, ia[570] = ig, ia[571] = ao, ia[572] = i8, ia[573] = lA, ia[574] = lO, ia[575] = l_, ia[576] = lN, ia[577] = lT, ia[578] = ob, ia[579] = nk) : nk = ia[579], ia[580] !== lh || ia[581] !== i7 ? (nE = e => {
                i7 || "Escape" !== e.key || (lJ.current = !0, lh.cancel())
            }, ia[580] = lh, ia[581] = i7, ia[582] = nE) : nE = ia[582], ia[583] !== i2 || ia[584] !== i7 || ia[585] !== a7 || ia[586] !== rR ? (nM = e => {
                if (i7 || (lJ.current = !1, a7 || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                    i = lx.current,
                    a = e.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                if (i2 && null != a && i?.contains(a) && (n === a || e.target.contains(a))) t = i;
                else if (null == t || null != n && n !== t) return;
                e.preventDefault(), t.setPointerCapture(e.pointerId), rR(e)
            }, ia[583] = i2, ia[584] = i7, ia[585] = a7, ia[586] = rR, ia[587] = nM) : nM = ia[587], ia[588] !== lD ? (nP = () => {
                lS.current?.contains(document.activeElement) || lD(!1)
            }, ia[588] = lD, ia[589] = nP) : nP = ia[589], ia[590] !== lh || ia[591] !== tD || ia[592] !== il || ia[593] !== sE || ia[594] !== sM || ia[595] !== sP || ia[596] !== np || ia[597] !== sR || ia[598] !== sT || ia[599] !== sL || ia[600] !== sD || ia[601] !== sq || ia[602] !== s_ || ia[603] !== nm || ia[604] !== sF || ia[605] !== ng || ia[606] !== nb || ia[607] !== nx || ia[608] !== ny || ia[609] !== nw || ia[610] !== nS || ia[611] !== nz || ia[612] !== nC || ia[613] !== nj || ia[614] !== nk || ia[615] !== nE || ia[616] !== nM || ia[617] !== nP ? (nN = {
                ref: il,
                "aria-label": sE,
                "aria-labelledby": sM,
                "aria-modal": sP,
                animate: np,
                "data-chat-pane-dragging": sR,
                "data-quick-chat-drag-handle": sT,
                "data-pip-obstacle": sL,
                "data-state": "open",
                drag: sD,
                dragConstraints: sq,
                dragElastic: s_,
                dragControls: lh,
                dragListener: !1,
                dragMomentum: !1,
                initial: nm,
                role: sF,
                tabIndex: -1,
                style: ng,
                transition: nb,
                onBlurCapture: nx,
                onClick: ny,
                onDoubleClick: nw,
                onClickCapture: nS,
                onDrag: nz,
                onDragEnd: nC,
                onDragStart: nj,
                onFocusCapture: nk,
                onKeyDown: tD,
                onKeyDownCapture: nE,
                onPointerDownCapture: nM,
                onPointerLeave: nP
            }, ia[590] = lh, ia[591] = tD, ia[592] = il, ia[593] = sE, ia[594] = sM, ia[595] = sP, ia[596] = np, ia[597] = sR, ia[598] = sT, ia[599] = sL, ia[600] = sD, ia[601] = sq, ia[602] = s_, ia[603] = nm, ia[604] = sF, ia[605] = ng, ia[606] = nb, ia[607] = nx, ia[608] = ny, ia[609] = nw, ia[610] = nS, ia[611] = nz, ia[612] = nC, ia[613] = nj, ia[614] = nk, ia[615] = nE, ia[616] = nM, ia[617] = nP, ia[618] = nN) : nN = ia[618];
            let sV = null == ic ? "floating" : "content",
                s$ = lu ? "bottom" : "top";
            ia[619] !== lv || ia[620] !== lb || ia[621] !== l1 || ia[622] !== lT ? (nR = e => {
                l1(e), e && (lT(null), lv.stop(), lb.stop())
            }, ia[619] = lv, ia[620] = lb, ia[621] = l1, ia[622] = lT, ia[623] = nR) : nR = ia[623], ia[624] !== e4.type || ia[625] !== sy || ia[626] !== ao || ia[627] !== o_ || ia[628] !== lu || ia[629] !== iM || ia[630] !== a5 || ia[631] !== r$ || ia[632] !== ay || ia[633] !== l_ ? (nT = !ao && o_ && "ready" === e4.type ? (0, i.jsx)("div", {
                ref: (0, T.a)(lS, a5, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iM && (lu ? "top-full" : "bottom-full"), lu ? "pt-3" : "pb-3"),
                "data-pip-obstacle": ay,
                onClickCapture: () => {
                    (iM ? lw.current : ly.current)?.focus({
                        preventScroll: !0
                    }), l_(!1)
                },
                style: iM ? r$ : void 0,
                children: sy
            }) : null, ia[624] = e4.type, ia[625] = sy, ia[626] = ao, ia[627] = o_, ia[628] = lu, ia[629] = iM, ia[630] = a5, ia[631] = r$, ia[632] = ay, ia[633] = l_, ia[634] = nT) : nT = ia[634], ia[635] !== sy || ia[636] !== ao || ia[637] !== o_ || ia[638] !== lu || ia[639] !== iM || ia[640] !== a5 || ia[641] !== r$ || ia[642] !== lO || ia[643] !== l_ || ia[644] !== aD ? (nL = ao && o_ ? (0, i.jsx)(d.a.div, {
                initial: {
                    opacity: 0,
                    y: 8 * !aD
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 8 * !aD
                },
                transition: {
                    duration: .3 * !aD,
                    ease: R.e
                },
                ref: (0, T.a)(lS, a5, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iM && (lu ? "top-full" : "bottom-full"), iM && (lu ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (iM ? lw.current : ly.current)?.focus({
                        preventScroll: !0
                    }), l_(!1), lO(!1)
                },
                style: iM ? r$ : void 0,
                children: iM ? (0, i.jsx)(k.c, {
                    variant: "notice",
                    children: sy
                }) : sy
            }, "response-preview") : null, ia[635] = sy, ia[636] = ao, ia[637] = o_, ia[638] = lu, ia[639] = iM, ia[640] = a5, ia[641] = r$, ia[642] = lO, ia[643] = l_, ia[644] = aD, ia[645] = nL) : nL = ia[645], ia[646] !== nL ? (nD = (0, i.jsx)(h.a, {
                initial: !1,
                children: nL
            }), ia[646] = nL, ia[647] = nD) : nD = ia[647], ia[648] !== rm || ia[649] !== ao || ia[650] !== ax || ia[651] !== tT || ia[652] !== og || ia[653] !== ov || ia[654] !== lu || ia[655] !== i7 || ia[656] !== iY || ia[657] !== aD || ia[658] !== oS ? (nq = ao && void 0 !== iY && !i7 && !ov && (0, i.jsx)(ek, {
                compact: og,
                preview: oS ? iY : null,
                reduceMotion: aD,
                isDockedTop: lu,
                opacity: rm,
                onExpand: tT
            }, ax), ia[648] = rm, ia[649] = ao, ia[650] = ax, ia[651] = tT, ia[652] = og, ia[653] = ov, ia[654] = lu, ia[655] = i7, ia[656] = iY, ia[657] = aD, ia[658] = oS, ia[659] = nq) : nq = ia[659];
            let sX = lu ? "top-full pt-2" : "bottom-full";
            ia[660] !== sX ? (n_ = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", sX), ia[660] = sX, ia[661] = n_) : n_ = ia[661], ia[662] !== a1 || ia[663] !== or || ia[664] !== n_ ? (nF = (0, i.jsx)("div", {
                ref: a1,
                className: n_,
                hidden: or
            }), ia[662] = a1, ia[663] = or, ia[664] = n_, ia[665] = nF) : nF = ia[665];
            let sY = 0 === oZ && "pt-2",
                sZ = lu ? "w-full" : "w-80",
                sU = oX && "left-1/2 -translate-x-1/2",
                sQ = !oX && (o$ ? "left-0" : "right-0"),
                sG = or && lV && "invisible";
            ia[666] !== sY || ia[667] !== sZ || ia[668] !== sU || ia[669] !== sQ || ia[670] !== sG ? (nI = (0, l.b)(L.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", sY, sZ, sU, sQ, sG), ia[666] = sY, ia[667] = sZ, ia[668] = sU, ia[669] = sQ, ia[670] = sG, ia[671] = nI) : nI = ia[671], ia[672] !== oZ ? (nA = {
                marginTop: oZ
            }, ia[672] = oZ, ia[673] = nA) : nA = ia[673], ia[674] !== ib || ia[675] !== a2 || ia[676] !== ay || ia[677] !== nI || ia[678] !== nA ? (nW = (0, i.jsx)("div", {
                ref: a2,
                className: nI,
                style: nA,
                "data-pip-obstacle": ay,
                children: ib
            }), ia[674] = ib, ia[675] = a2, ia[676] = ay, ia[677] = nI, ia[678] = nA, ia[679] = nW) : nW = ia[679], ia[680] !== nl || ia[681] !== ao || ia[682] !== or ? (nH = ao ? void 0 : {
                clipPath: nl,
                opacity: +!or
            }, ia[680] = nl, ia[681] = ao, ia[682] = or, ia[683] = nH) : nH = ia[683];
            let sJ = !ov && "pointer-events-auto";
            ia[684] !== sJ ? (nB = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", sJ), ia[684] = sJ, ia[685] = nB) : nB = ia[685], ia[686] !== oc || ia[687] !== ao || ia[688] !== rV ? (nK = ao ? {
                clipPath: rV,
                opacity: oc
            } : void 0, ia[686] = oc, ia[687] = ao, ia[688] = rV, ia[689] = nK) : nK = ia[689];
            let s0 = !!ov || void 0;
            ia[690] !== ao || ia[691] !== lR || ia[692] !== aD ? (nO = aD || !ao && null == lR ? {
                duration: 0
            } : {
                duration: .3,
                ease: R.e
            }, ia[690] = ao, ia[691] = lR, ia[692] = aD, ia[693] = nO) : nO = ia[693], ia[694] !== or || ia[695] !== rI || ia[696] !== lP || ia[697] !== lR || ia[698] !== lT ? (nV = e => {
                lR?.target === (or ? "minimized" : lP) && "object" == typeof e && "clipPath" in e && e.clipPath === (or ? rI : ey) && lT(e => e === lR ? null : e)
            }, ia[694] = or, ia[695] = rI, ia[696] = lP, ia[697] = lR, ia[698] = lT, ia[699] = nV) : nV = ia[699], ia[700] !== ao || ia[701] !== op || ia[702] !== lu || ia[703] !== r2 || ia[704] !== ob ? (n$ = !ao && !ob && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", lu ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(ee.c, {
                    standalone: !0,
                    isCompact: op,
                    onMinimize: r2
                })
            }), ia[700] = ao, ia[701] = op, ia[702] = lu, ia[703] = r2, ia[704] = ob, ia[705] = n$) : n$ = ia[705], ia[706] !== ao || ia[707] !== su || ia[708] !== og || ia[709] !== lV || ia[710] !== r2 || ia[711] !== iz || ia[712] !== ob ? (nX = (ao || ob) && (iz?.({
                contextMenuTrigger: su,
                isCompact: og,
                isDragging: lV,
                onMinimize: r2
            }) ?? su), ia[706] = ao, ia[707] = su, ia[708] = og, ia[709] = lV, ia[710] = r2, ia[711] = iz, ia[712] = ob, ia[713] = nX) : nX = ia[713], ia[714] !== id || ia[715] !== ah ? (nY = ah && (0, i.jsx)(eg.a, {
                hasPagePicker: id
            }), ia[714] = id, ia[715] = ah, ia[716] = nY) : nY = ia[716];
            let s1 = og && "justify-end";
            ia[717] !== s1 ? (nZ = (0, l.b)("relative flex min-h-0 flex-1 flex-col", s1), ia[717] = s1, ia[718] = nZ) : nZ = ia[718];
            let s2 = ao ? og : aw.followLatestTranscript;
            ia[719] !== aw || ia[720] !== s2 ? (nU = {
                ...aw,
                isFloatingChatSurface: !0,
                followLatestTranscript: s2
            }, ia[719] = aw, ia[720] = s2, ia[721] = nU) : nU = ia[721];
            let s3 = ao ? "absolute inset-x-0 overflow-hidden" : "contents";
            ia[722] !== l2 || ia[723] !== ao || ia[724] !== rp ? (nQ = ao ? {
                bottom: l2,
                height: rp
            } : void 0, ia[722] = l2, ia[723] = ao, ia[724] = rp, ia[725] = nQ) : nQ = ia[725], ia[726] !== rm || ia[727] !== ox || ia[728] !== aP || ia[729] !== og || ia[730] !== aJ || ia[731] !== aM || ia[732] !== iV ? (nG = ox && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) bottom-0 px-4 py-3 text-sm text-default",
                "aria-hidden": aP || !og,
                style: {
                    opacity: rm
                },
                ref: aJ,
                children: aP ? (0, i.jsx)("span", {
                    className: "line-clamp-2 wrap-anywhere select-none",
                    dir: "auto",
                    children: aM
                }) : iV ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…"
                })
            }), ia[726] = rm, ia[727] = ox, ia[728] = aP, ia[729] = og, ia[730] = aJ, ia[731] = aM, ia[732] = iV, ia[733] = nG) : nG = ia[733];
            let s4 = !ao && (og ? "hidden" : "flex"),
                s5 = ao && "absolute inset-x-0 bottom-0 flex",
                s6 = ao && "overflow-hidden";
            ia[734] !== s4 || ia[735] !== s5 || ia[736] !== s6 ? (nJ = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", s4, s5, s6), ia[734] = s4, ia[735] = s5, ia[736] = s6, ia[737] = nJ) : nJ = ia[737], ia[738] !== l2 || ia[739] !== ao || ia[740] !== o6 || ia[741] !== rh || ia[742] !== og || ia[743] !== au ? (n0 = ao ? {
                height: au ? void 0 : Math.max(0, o6 - 46 - l2),
                top: au ? 0 : void 0,
                opacity: og ? 0 : rh
            } : void 0, ia[738] = l2, ia[739] = ao, ia[740] = o6, ia[741] = rh, ia[742] = og, ia[743] = au, ia[744] = n0) : n0 = ia[744], ia[745] !== ao || ia[746] !== av || ia[747] !== om || ia[748] !== og || ia[749] !== i7 || ia[750] !== or || ia[751] !== iU || ia[752] !== lN || ia[753] !== lT ? (n1 = av && (!om || ao) ? iU?.(() => {
                lT(null), lN("compact")
            }, !og && !i7 && !or) : null, ia[745] = ao, ia[746] = av, ia[747] = om, ia[748] = og, ia[749] = i7, ia[750] = or, ia[751] = iU, ia[752] = lN, ia[753] = lT, ia[754] = n1) : n1 = ia[754], ia[755] !== ao || ia[756] !== ag || ia[757] !== av || ia[758] !== og || ia[759] !== ri ? (n2 = !av && (0, i.jsx)(h.a, {
                initial: !1,
                children: (ao || !og) && null != ag && (0, i.jsx)(d.a.div, {
                    className: "flex min-h-0 flex-1 flex-col",
                    initial: !ao && {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: ri,
                        ease: R.e
                    },
                    children: ag
                }, "empty-state")
            }), ia[755] = ao, ia[756] = ag, ia[757] = av, ia[758] = og, ia[759] = ri, ia[760] = n2) : n2 = ia[760], ia[761] !== og || ia[762] !== aX || ia[763] !== nJ || ia[764] !== n0 || ia[765] !== n1 || ia[766] !== n2 ? (n3 = (0, i.jsxs)(d.a.div, {
                ref: aX,
                "aria-hidden": og,
                className: nJ,
                inert: og,
                style: n0,
                children: [n1, n2]
            }), ia[761] = og, ia[762] = aX, ia[763] = nJ, ia[764] = n0, ia[765] = n1, ia[766] = n2, ia[767] = n3) : n3 = ia[767], ia[768] !== ao || ia[769] !== tT || ia[770] !== ox || ia[771] !== og || ia[772] !== r4 || ia[773] !== aM ? (n4 = ao && og && ox && (0, i.jsx)(q.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "absolute inset-0",
                "aria-label": r4,
                "aria-description": aM ?? void 0,
                "data-quick-chat-drag-handle": !0,
                onClick: tT
            }), ia[768] = ao, ia[769] = tT, ia[770] = ox, ia[771] = og, ia[772] = r4, ia[773] = aM, ia[774] = n4) : n4 = ia[774], ia[775] !== s3 || ia[776] !== nQ || ia[777] !== nG || ia[778] !== n3 || ia[779] !== n4 ? (n5 = (0, i.jsxs)(d.a.div, {
                className: s3,
                style: nQ,
                children: [nG, n3, n4]
            }), ia[775] = s3, ia[776] = nQ, ia[777] = nG, ia[778] = n3, ia[779] = n4, ia[780] = n5) : n5 = ia[780], ia[781] !== nU || ia[782] !== n5 ? (n6 = (0, i.jsx)(ep.b, {
                value: nU,
                children: n5
            }), ia[781] = nU, ia[782] = n5, ia[783] = n6) : n6 = ia[783];
            let s7 = iz?.({
                contextMenuTrigger: sl,
                isCompact: og,
                isDragging: lV,
                onMinimize: r2
            }) ?? sl;
            ia[784] !== nZ || ia[785] !== n6 || ia[786] !== s7 ? (n7 = (0, i.jsxs)("div", {
                className: nZ,
                children: [n6, s7]
            }), ia[784] = nZ, ia[785] = n6, ia[786] = s7, ia[787] = n7) : n7 = ia[787], ia[788] !== lc || ia[789] !== ov || ia[790] !== nH || ia[791] !== nB || ia[792] !== nK || ia[793] !== s0 || ia[794] !== nO || ia[795] !== nV || ia[796] !== n$ || ia[797] !== nX || ia[798] !== nY || ia[799] !== n7 ? (n8 = (0, i.jsxs)(d.a.div, {
                "aria-hidden": ov,
                animate: nH,
                className: nB,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": lc,
                style: nK,
                initial: !1,
                inert: s0,
                transition: nO,
                onAnimationComplete: nV,
                children: [n$, nX, nY, n7]
            }), ia[788] = lc, ia[789] = ov, ia[790] = nH, ia[791] = nB, ia[792] = nK, ia[793] = s0, ia[794] = nO, ia[795] = nV, ia[796] = n$, ia[797] = nX, ia[798] = nY, ia[799] = n7, ia[800] = n8) : n8 = ia[800], ia[801] !== D || ia[802] !== r1 || ia[803] !== op || ia[804] !== or || ia[805] !== rF || ia[806] !== ix || ia[807] !== r0 || ia[808] !== r7 || ia[809] !== r6 || ia[810] !== aD || ia[811] !== sw || ia[812] !== no || ia[813] !== nr || ia[814] !== ns || ia[815] !== sS || ia[816] !== sz || ia[817] !== sC || ia[818] !== nc || ia[819] !== nu || ia[820] !== nd || ia[821] !== sj || ia[822] !== sk || ia[823] !== nN || ia[824] !== sV || ia[825] !== s$ || ia[826] !== nR || ia[827] !== nT || ia[828] !== nD || ia[829] !== nq || ia[830] !== nF || ia[831] !== nW || ia[832] !== n8 ? (n9 = (0, i.jsxs)(D, {
                contentRef: am,
                allowCompactResize: !0,
                animateSurface: sw,
                contentStyle: no,
                surfaceStyle: nr,
                currentSize: ns,
                heightLabel: r7,
                resizeFromCenter: sS,
                fixedHorizontalEdge: sz,
                isCompact: op,
                isCompactChromeRevealed: sC,
                isMinimized: or,
                keepSurfaceInset: !0,
                maximumSize: nc,
                minimizedContent: nu,
                minimizedSurfaceBounds: rF,
                minimumSize: nd,
                prefersCompactPresentation: !0,
                resizable: sj,
                background: sk,
                sectionRef: ly,
                sectionProps: nN,
                shouldReduceMotion: aD,
                variant: sV,
                verticalResizeEdge: s$,
                widthLabel: r6,
                onResize: r0,
                onResizeEnd: r1,
                onResizingChange: nR,
                children: [nT, nD, nq, nF, nW, n8, ix]
            }), ia[801] = D, ia[802] = r1, ia[803] = op, ia[804] = or, ia[805] = rF, ia[806] = ix, ia[807] = r0, ia[808] = r7, ia[809] = r6, ia[810] = aD, ia[811] = sw, ia[812] = no, ia[813] = nr, ia[814] = ns, ia[815] = sS, ia[816] = sz, ia[817] = sC, ia[818] = nc, ia[819] = nu, ia[820] = nd, ia[821] = sj, ia[822] = sk, ia[823] = nN, ia[824] = sV, ia[825] = s$, ia[826] = nR, ia[827] = nT, ia[828] = nD, ia[829] = nq, ia[830] = nF, ia[831] = nW, ia[832] = n8, ia[833] = n9) : n9 = ia[833];
            let s8 = n9;
            return ia[834] !== aT ? (ie = {
                id: aT
            }, ia[834] = aT, ia[835] = ie) : ie = ia[835], ia[836] !== ao || ia[837] !== aG ? (it = ao && (0, i.jsx)("div", {
                ref: aG,
                "aria-hidden": !0,
                className: (0, l.b)(em.a, "pointer-events-none invisible absolute")
            }), ia[836] = ao, ia[837] = aG, ia[838] = it) : it = ia[838], ia[839] !== s8 || ia[840] !== ie || ia[841] !== it ? (ii = (0, i.jsxs)(G.a, {
                value: ie,
                children: [it, s8]
            }), ia[839] = s8, ia[840] = ie, ia[841] = it, ia[842] = ii) : ii = ia[842], ii
        }

        function ej() {
            return new Set
        }

        function ek(e) {
            let t, n, o, r, s, c = (0, a.c)(17),
                {
                    compact: u,
                    preview: p,
                    isDockedTop: m,
                    opacity: f,
                    reduceMotion: g,
                    onExpand: v
                } = e,
                b = m ? "top-full mt-2" : "bottom-full mb-2";
            c[0] !== b ? (t = (0, l.b)("pointer-events-none absolute inset-x-(--floating-panel-inset) -z-1 grid grid-cols-1 items-end justify-items-start px-4", b), c[0] = b, c[1] = t) : t = c[1], c[2] !== f ? (n = {
                opacity: f
            }, c[2] = f, c[3] = n) : n = c[3];
            let x = !u || !p;
            return c[4] !== u || c[5] !== m || c[6] !== v || c[7] !== p || c[8] !== g ? (o = u && p && (0, i.jsx)(d.a.div, {
                className: (0, l.b)("col-start-1 row-start-1 max-w-full", m ? "origin-top-left" : "origin-bottom-left"),
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
                children: (0, i.jsx)(q.a, {
                    unstyled: !0,
                    className: "pointer-events-auto max-w-full text-start",
                    "data-quick-chat-drag-handle": !0,
                    onClick: v,
                    children: p.content
                })
            }, p.id), c[4] = u, c[5] = m, c[6] = v, c[7] = p, c[8] = g, c[9] = o) : o = c[9], c[10] !== o ? (r = (0, i.jsx)(h.a, {
                children: o
            }), c[10] = o, c[11] = r) : r = c[11], c[12] !== t || c[13] !== n || c[14] !== x || c[15] !== r ? (s = (0, i.jsx)(d.a.div, {
                className: t,
                style: n,
                inert: x,
                children: r
            }), c[12] = t, c[13] = n, c[14] = x, c[15] = r, c[16] = s) : s = c[16], s
        }

        function eE(e, t, n) {
            return t instanceof Node && (e.contains(t) || t instanceof Element && (null != t.closest("[data-composer-overlay-floating-ui], [data-content-search-bar], [data-composer-focus-target]") || null != t.closest("[data-floating-chat-annotation-layer]") || t.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === n))
        }

        function eM(e, t, n) {
            return Math.max(t, Math.min(e, n))
        }

        function eP() {
            return {
                width: window.visualViewport?.width ?? window.innerWidth,
                height: window.visualViewport?.height ?? window.innerHeight
            }
        }
    }),
    eeV6: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            l = n("on57"),
            o = n("IPUh"),
            r = n("Wf1j"),
            s = n("Sm6l"),
            c = n("HOLv"),
            u = n("V8uZ"),
            d = n("NM5E");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, r, s = (0, a.c)(12),
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
                return s[2] !== v ? (n = (0, l.b)("flex h-toolbar cursor-interaction touch-none items-center justify-between px-2 select-none", v), s[2] = v, s[3] = n) : n = s[3], s[4] !== c || s[5] !== n ? (o = (0, i.jsx)("div", {
                    className: n,
                    children: c
                }), s[4] = c, s[5] = n, s[6] = o) : o = s[6], s[7] !== m || s[8] !== t || s[9] !== g || s[10] !== o ? (r = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden",
                    "aria-hidden": m,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: g,
                    children: o
                }), s[7] = m, s[8] = t, s[9] = g, s[10] = o, s[11] = r) : r = s[11], r
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
                let t, n, l, o, u = (0, a.c)(11),
                    {
                        isCompact: h,
                        onMinimize: p,
                        standalone: m
                    } = e,
                    f = void 0 !== m && m,
                    g = (0, r.a)();
                u[0] !== g ? (t = g.formatMessage({
                    id: "quickChat.minimize",
                    defaultMessage: "Minimize chat"
                }), u[0] = g, u[1] = t) : t = u[1];
                let v = f ? "outlineSurface" : "ghostSecondary",
                    b = h ? "composer" : "toolbar";
                return u[2] !== f ? (n = e => {
                    f && e.preventDefault()
                }, u[2] = f, u[3] = n) : n = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.jsx)(c.a, {
                    "aria-hidden": !1,
                    asset: d.a
                }), u[4] = l) : l = u[4], u[5] !== p || u[6] !== t || u[7] !== v || u[8] !== b || u[9] !== n ? (o = (0, i.jsx)(s.a, {
                    "aria-label": t,
                    color: v,
                    size: b,
                    uniform: !0,
                    onClick: p,
                    onPointerDown: n,
                    children: l
                }), u[5] = p, u[6] = t, u[7] = v, u[8] = b, u[9] = n, u[10] = o) : o = u[10], o
            },
            d: function(e) {
                let t, n, r, s, c, d, h, p = (0, a.c)(28),
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
                p[0] !== z ? (t = (0, l.b)("relative min-h-0 overflow-hidden", z), p[0] = z, p[1] = t) : t = p[1];
                let C = !v || !!x || void 0,
                    j = v || w ? 46 : 0,
                    k = +!!v;
                p[2] !== j || p[3] !== k ? (n = {
                    height: j,
                    opacity: k
                }, p[2] = j, p[3] = k, p[4] = n) : n = p[4];
                let E = !v || !!x || void 0;
                p[5] !== m || p[6] !== S ? (r = m ? {
                    duration: .3,
                    ease: u.e,
                    ...S ? {
                        opacity: {
                            duration: 0
                        }
                    } : {}
                } : {
                    duration: 0
                }, p[5] = m, p[6] = S, p[7] = r) : r = p[7], p[8] !== b || p[9] !== y ? (s = null != y ? (0, i.jsx)("button", {
                    className: "pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    "aria-label": y.label,
                    "aria-expanded": !b,
                    type: "button",
                    onClick: y.onToggle
                }) : null, p[8] = b, p[9] = y, p[10] = s) : s = p[10];
                let M = !S && null != y && b && "cursor-n-resize",
                    P = !S && null != y && !b && "cursor-s-resize",
                    N = (S || null == y) && "cursor-interaction",
                    R = b && "mx-1.5 border-b border-default px-2",
                    T = !b && "px-3";
                return p[11] !== M || p[12] !== P || p[13] !== N || p[14] !== R || p[15] !== T ? (c = (0, l.b)("flex h-toolbar touch-none select-none items-center justify-between", M, P, N, R, T), p[11] = M, p[12] = P, p[13] = N, p[14] = R, p[15] = T, p[16] = c) : c = p[16], p[17] !== g || p[18] !== c ? (d = (0, i.jsx)("div", {
                    className: c,
                    children: g
                }), p[17] = g, p[18] = c, p[19] = d) : d = p[19], p[20] !== s || p[21] !== d || p[22] !== t || p[23] !== C || p[24] !== n || p[25] !== E || p[26] !== r ? (h = (0, i.jsxs)(o.a.header, {
                    className: t,
                    "aria-hidden": C,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: E,
                    transition: r,
                    children: [s, d]
                }), p[20] = s, p[21] = d, p[22] = t, p[23] = C, p[24] = n, p[25] = E, p[26] = r, p[27] = h) : h = p[27], h
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
                    setSize: C,
                    verticalEdge: j
                } = e,
                k = void 0 === v ? "left" : v,
                E = void 0 !== y && y,
                M = void 0 === j ? "top" : j,
                P = (0, s.c)(),
                N = (0, r.useRef)(null);
            g[0] !== k || g[1] !== x || g[2] !== w || g[3] !== E || g[4] !== C || g[5] !== M || g[6] !== P ? (t = e => {
                let t = N.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                e.preventDefault();
                let n = {
                    height: u(t.startSize.height + ("top" === M ? -1 : 1) * ((0, s.b)(e.clientY, P) - t.startPointer.y), w.height, x.height),
                    width: u(t.startSize.width + (E ? 2 : 1) * ("left" === k ? -1 : 1) * ((0, s.b)(e.clientX, P) - t.startPointer.x), w.width, x.width)
                };
                t.didMove || (t.didMove = n.height !== t.startSize.height || n.width !== t.startSize.width), t.lastSize = n, C(n)
            }, g[0] = k, g[1] = x, g[2] = w, g[3] = E, g[4] = C, g[5] = M, g[6] = P, g[7] = t) : t = g[7];
            let R = t;
            g[8] !== S || g[9] !== z ? (n = (e, t) => {
                let n = N.current;
                n?.pointerId === e.pointerId && (N.current = null, z?.(!1), t && n.didMove && S?.(n.lastSize))
            }, g[8] = S, g[9] = z, g[10] = n) : n = g[10];
            let T = n,
                L = "top" === M ? "top-0" : "bottom-0",
                D = "left" === k ? "left-0" : "right-0",
                q = "left" === k == ("top" === M) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return g[11] !== L || g[12] !== D || g[13] !== q ? (l = (0, o.b)("group absolute z-50 flex size-4 touch-none select-none", L, D, q), g[11] = L, g[12] = D, g[13] = q, g[14] = l) : l = g[14], g[15] !== T ? (c = e => {
                T(e, !1)
            }, g[15] = T, g[16] = c) : c = g[16], g[17] !== R || g[18] !== T ? (d = e => {
                R(e), T(e, !0)
            }, g[17] = R, g[18] = T, g[19] = d) : d = g[19], g[20] !== b || g[21] !== z || g[22] !== P ? (h = e => {
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
            }, g[20] = b, g[21] = z, g[22] = P, g[23] = h) : h = g[23], g[24] !== R || g[25] !== T ? (p = e => {
                R(e), T(e, !0)
            }, g[24] = R, g[25] = T, g[26] = p) : p = g[26], g[27] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, i.jsx)("div", {
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
                C = void 0 === p || p,
                j = void 0 !== f && f,
                k = void 0 === S ? "top" : S;
            if (s[0] !== u || s[1] !== h || s[2] !== C || s[3] !== m || s[4] !== g || s[5] !== v || s[6] !== b || s[7] !== x || s[8] !== y || s[9] !== w || s[10] !== j || s[11] !== k || s[12] !== z) {
                let e, a;
                s[16] !== m ? (e = e => e !== m, s[16] = m, s[17] = e) : e = s[17];
                let r = d.filter(e);
                s[18] !== u || s[19] !== h || s[20] !== C || s[21] !== v || s[22] !== b || s[23] !== x || s[24] !== y || s[25] !== w || s[26] !== j || s[27] !== z ? (a = e => (0, i.jsx)(l.a, {
                    ariaLabel: z,
                    defaultSize: h.width,
                    edge: e,
                    resizeFromCenter: j,
                    extendIntoToolbar: C,
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
                }, e), s[18] = u, s[19] = h, s[20] = C, s[21] = v, s[22] = b, s[23] = x, s[24] = y, s[25] = w, s[26] = j, s[27] = z, s[28] = a) : a = s[28], t = r.map(a), s[29] !== u || s[30] !== h || s[31] !== g || s[32] !== v || s[33] !== b || s[34] !== x || s[35] !== y || s[36] !== w || s[37] !== k ? (n = null != k && (0, i.jsx)(l.a, {
                    ariaLabel: g,
                    defaultSize: h.height,
                    edge: k,
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
                }), s[29] = u, s[30] = h, s[31] = g, s[32] = v, s[33] = b, s[34] = x, s[35] = y, s[36] = w, s[37] = k, s[38] = n) : n = s[38], o = null != k && r.map(e => (0, i.jsx)(c, {
                    edge: e,
                    resizeFromCenter: j,
                    getCurrentSize: () => u,
                    maximumSize: v,
                    minimumSize: b,
                    verticalEdge: k,
                    onResizeEnd: y,
                    onResizingChange: w,
                    setSize: t => {
                        x(e, t)
                    }
                }, e)), s[0] = u, s[1] = h, s[2] = C, s[3] = m, s[4] = g, s[5] = v, s[6] = b, s[7] = x, s[8] = y, s[9] = w, s[10] = j, s[11] = k, s[12] = z, s[13] = t, s[14] = n, s[15] = o
            } else t = s[13], n = s[14], o = s[15];
            return s[39] !== t || s[40] !== n || s[41] !== o ? (r = (0, i.jsxs)(i.Fragment, {
                children: [t, n, o]
            }), s[39] = t, s[40] = n, s[41] = o, s[42] = r) : r = s[42], r
        }
    })
};