export const __rspack_esm_ids = [529755];
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
    ttIa: (function(e, t, n) {
        n.d(t, {
            a: () => ed
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
            m = n("Q840"),
            p = n("zd8w"),
            f = n("v7qY"),
            g = n("Wf1j"),
            v = n("oyxz"),
            b = n("wD9O"),
            x = n("rsCP"),
            y = n("AclY"),
            w = n("sArP");
        let z = {
            height: 640,
            width: 560
        };
        var j = n("hZax"),
            S = n("V8uZ"),
            k = n("HgLj"),
            C = n("DGC8");

        function M(e) {
            let t, n, o, r, s, c, u, h, m, p, f = (0, a.c)(62),
                {
                    allowCompactResize: g,
                    animateSurface: v,
                    background: b,
                    children: M,
                    currentSize: E,
                    contentStyle: N,
                    contentRef: R,
                    fixedHorizontalEdge: P,
                    resizeFromCenter: _,
                    heightLabel: D,
                    isCompact: T,
                    isCompactChromeRevealed: L,
                    isMinimized: q,
                    keepSurfaceInset: I,
                    maximumSize: F,
                    minimizedContent: H,
                    minimizedSurfaceBounds: A,
                    minimumSize: W,
                    onResize: O,
                    onResizeEnd: K,
                    onResizingChange: V,
                    prefersCompactPresentation: B,
                    resizable: Y,
                    sectionProps: $,
                    sectionRef: X,
                    surfaceStyle: Z,
                    shouldReduceMotion: Q,
                    variant: U,
                    verticalResizeEdge: G,
                    widthLabel: J
                } = e,
                ee = void 0 !== g && g,
                et = void 0 === v || v,
                en = void 0 !== _ && _,
                ei = void 0 === Y || Y,
                ea = (0, j.f)("2163293173"),
                el = !q && (I || T && !L) ? 6 : 0;
            f[0] !== q || f[1] !== A || f[2] !== el ? (t = q && null != A ? A : {
                top: 0,
                right: el,
                bottom: el,
                left: el
            }, f[0] = q, f[1] = A, f[2] = el, f[3] = t) : t = f[3];
            let eo = t,
                er = "panel" !== b && "rounded-[inherit]";
            f[4] !== er ? (n = (0, l.b)("pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto", er), f[4] = er, f[5] = n) : n = f[5];
            let es = n,
                ec = "panel" !== b || B;
            f[6] !== $.ref || f[7] !== X ? (o = (0, k.a)(X, $.ref, y.c), f[6] = $.ref, f[7] = X, f[8] = o) : o = f[8];
            let eu = !ea && B && "frame-Xbg62r",
                ed = B && "group/chat-frame focus:outline-none",
                eh = null != A ? "pointer-events-none" : "pointer-events-auto",
                em = B && C.a.floatingSurface,
                ep = I && C.a.singleLineSurface,
                ef = "floating" === U ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                eg = B ? "overflow-visible" : "overflow-hidden";
            f[9] !== eu || f[10] !== ed || f[11] !== eh || f[12] !== em || f[13] !== ep || f[14] !== ef || f[15] !== eg ? (r = (0, l.b)("flex flex-col text-default", eu, ed, eh, em, ep, ef, eg), f[9] = eu, f[10] = ed, f[11] = eh, f[12] = em, f[13] = ep, f[14] = ef, f[15] = eg, f[16] = r) : r = f[16];
            let ev = null != N ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== ev ? (s = (0, l.b)(ev), f[17] = ev, f[18] = s) : s = f[18], f[19] !== et || f[20] !== b || f[21] !== es || f[22] !== I || f[23] !== H || f[24] !== B || f[25] !== Q || f[26] !== eo || f[27] !== Z ? (c = B ? (0, i.jsx)(x.c, {
                asChild: !0,
                unstyled: "panel" !== b,
                variant: I ? "single-line" : "default",
                children: null != Z ? (0, i.jsx)(d.a.div, {
                    className: es,
                    "aria-hidden": null == H || void 0,
                    style: Z
                }, "panel-background") : (0, i.jsx)(d.a.div, {
                    className: es,
                    "aria-hidden": null == H || void 0,
                    animate: eo,
                    initial: !1,
                    transition: Q || !et ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: S.e
                    },
                    children: H
                }, "legacy-background")
            }) : null, f[19] = et, f[20] = b, f[21] = es, f[22] = I, f[23] = H, f[24] = B, f[25] = Q, f[26] = eo, f[27] = Z, f[28] = c) : c = f[28], f[29] !== ee || f[30] !== E || f[31] !== P || f[32] !== D || f[33] !== T || f[34] !== q || f[35] !== F || f[36] !== W || f[37] !== O || f[38] !== K || f[39] !== V || f[40] !== ei || f[41] !== en || f[42] !== eo || f[43] !== G || f[44] !== J ? (u = ei && (!T || ee) && !q ? (0, i.jsx)("div", {
                className: "pointer-events-none absolute",
                style: eo,
                children: (0, i.jsx)("div", {
                    className: "pointer-events-auto contents",
                    children: (0, i.jsx)(w.a, {
                        currentSize: E,
                        defaultSize: z,
                        extendIntoToolbar: !1,
                        fixedHorizontalEdge: P,
                        resizeFromCenter: en,
                        heightLabel: D,
                        maximumSize: F,
                        minimumSize: W,
                        verticalEdge: T ? null : G,
                        widthLabel: J,
                        onResize: O,
                        onResizeEnd: K,
                        onResizingChange: V
                    })
                })
            }) : null, f[29] = ee, f[30] = E, f[31] = P, f[32] = D, f[33] = T, f[34] = q, f[35] = F, f[36] = W, f[37] = O, f[38] = K, f[39] = V, f[40] = ei, f[41] = en, f[42] = eo, f[43] = G, f[44] = J, f[45] = u) : u = f[45];
            let eb = null == Z ? null : H;
            return f[46] !== M || f[47] !== R || f[48] !== N || f[49] !== s || f[50] !== c || f[51] !== u || f[52] !== eb ? (h = (0, i.jsxs)(d.a.div, {
                ref: R,
                className: s,
                style: N,
                children: [c, u, eb, M]
            }), f[46] = M, f[47] = R, f[48] = N, f[49] = s, f[50] = c, f[51] = u, f[52] = eb, f[53] = h) : h = f[53], f[54] !== $ || f[55] !== r || f[56] !== h || f[57] !== o ? (m = (0, i.jsx)(d.a.section, {
                ...$,
                ref: o,
                className: r,
                children: h
            }), f[54] = $, f[55] = r, f[56] = h, f[57] = o, f[58] = m) : m = f[58], f[59] !== m || f[60] !== ec ? (p = (0, i.jsx)(x.c, {
                asChild: !0,
                unstyled: ec,
                children: m
            }), f[59] = m, f[60] = ec, f[61] = p) : p = f[61], p
        }
        var E = n("Sm6l"),
            N = n("bf6R");

        function R(e) {
            let t, n, l, o, r, s, c, u, d, h, m, f = (0, a.c)(56),
                {
                    title: b,
                    preview: y,
                    onOpen: w,
                    onDismiss: z,
                    isWorking: S,
                    workingContent: k
                } = e,
                C = void 0 !== S && S,
                M = (0, j.f)("2163293173"),
                R = (0, g.a)();
            f[0] !== R || f[1] !== b ? (t = b ?? R.formatMessage({
                id: "quickChat.mainConversation",
                defaultMessage: "Chat"
            }), f[0] = R, f[1] = b, f[2] = t) : t = f[2];
            let P = t,
                _ = (0, p.useEffectEvent)(z);
            if (f[3] !== M || f[4] !== _ || f[5] !== C ? (n = () => {
                    if (!M || C) return;
                    let e = window.setTimeout(() => _(), 1e4);
                    return () => window.clearTimeout(e)
                }, f[3] = M, f[4] = _, f[5] = C, f[6] = n) : n = f[6], f[7] !== M || f[8] !== C ? (l = [M, C], f[7] = M, f[8] = C, f[9] = l) : l = f[9], (0, p.useEffect)(n, l), !M) {
                let e, t, n, a, l, o, r, s, c, u;
                return f[10] !== R || f[11] !== P ? (e = R.formatMessage({
                    id: "quickChat.openCompletedResponse",
                    defaultMessage: "Open completed response: {title}"
                }, {
                    title: P
                }), f[10] = R, f[11] = P, f[12] = e) : e = f[12], f[13] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(N.lc, {
                    className: "text-success"
                }), f[13] = t) : t = f[13], f[14] !== P ? (n = (0, i.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2 text-sm font-semibold text-default",
                    children: [t, (0, i.jsx)("span", {
                        className: "truncate",
                        children: P
                    })]
                }), f[14] = P, f[15] = n) : n = f[15], f[16] !== y ? (a = y || (0, i.jsx)(v.a, {
                    id: "quickChat.responseReady",
                    defaultMessage: "Response ready"
                }), f[16] = y, f[17] = a) : a = f[17], f[18] !== a ? (l = (0, i.jsx)("span", {
                    className: "block truncate text-sm text-secondary",
                    children: a
                }), f[18] = a, f[19] = l) : l = f[19], f[20] !== w || f[21] !== e || f[22] !== n || f[23] !== l ? (o = (0, i.jsxs)("button", {
                    className: "min-w-0 flex-1 cursor-interaction rounded-[inherit] px-4 py-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    "aria-label": e,
                    type: "button",
                    onClick: w,
                    children: [n, l]
                }), f[20] = w, f[21] = e, f[22] = n, f[23] = l, f[24] = o) : o = f[24], f[25] !== R ? (r = R.formatMessage({
                    id: "quickChat.dismissCompletedResponse",
                    defaultMessage: "Dismiss and mark as read"
                }), f[25] = R, f[26] = r) : r = f[26], f[27] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(N.wj, {
                    className: "pointer-events-none"
                }), f[27] = s) : s = f[27], f[28] !== z || f[29] !== r ? (c = (0, i.jsx)("div", {
                    className: "absolute -top-1 -left-1 flex rounded-full bg-surface",
                    children: (0, i.jsx)(E.a, {
                        "aria-label": r,
                        color: "outlineSurface",
                        radius: "full",
                        size: "iconCircleSm",
                        onClick: z,
                        children: s
                    })
                }), f[28] = z, f[29] = r, f[30] = c) : c = f[30], f[31] !== o || f[32] !== c ? (u = (0, i.jsxs)(x.c, {
                    className: "relative flex shrink-0 select-none",
                    role: "status",
                    variant: "notice",
                    children: [o, c]
                }), f[31] = o, f[32] = c, f[33] = u) : u = f[33], u
            }
            return f[34] !== R || f[35] !== P ? (o = R.formatMessage({
                id: "quickChat.openCompletedResponse",
                defaultMessage: "Open completed response: {title}"
            }, {
                title: P
            }), f[34] = R, f[35] = P, f[36] = o) : o = f[36], f[37] !== C || f[38] !== y || f[39] !== k ? (r = C ? k ?? (0, i.jsx)(v.a, {
                id: "quickChat.responseWorking",
                defaultMessage: "Working…"
            }) : y || (0, i.jsx)(v.a, {
                id: "quickChat.responseReady",
                defaultMessage: "Response ready"
            }), f[37] = C, f[38] = y, f[39] = k, f[40] = r) : r = f[40], f[41] !== r ? (s = (0, i.jsx)("span", {
                className: "line-clamp-2 min-w-0 flex-1 text-sm whitespace-normal text-default",
                children: r
            }), f[41] = r, f[42] = s) : s = f[42], f[43] !== w || f[44] !== o || f[45] !== s ? (c = (0, i.jsx)(E.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 rounded-[inherit] px-4 py-3 pe-10 text-start",
                "aria-label": o,
                type: "button",
                onClick: w,
                children: s
            }), f[43] = w, f[44] = o, f[45] = s, f[46] = c) : c = f[46], f[47] !== R ? (u = R.formatMessage({
                id: "quickChat.dismissResponsePreview",
                defaultMessage: "Dismiss response preview"
            }), f[47] = R, f[48] = u) : u = f[48], f[49] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(N.wj, {
                className: "pointer-events-none"
            }), f[49] = d) : d = f[49], f[50] !== z || f[51] !== u ? (h = (0, i.jsx)("div", {
                className: "absolute top-3 right-2 flex rounded-full",
                children: (0, i.jsx)(E.a, {
                    "aria-label": u,
                    color: "ghostSecondary",
                    radius: "full",
                    size: "iconCircleSm",
                    onClick: z,
                    children: d
                })
            }), f[50] = z, f[51] = u, f[52] = h) : h = f[52], f[53] !== h || f[54] !== c ? (m = (0, i.jsxs)("div", {
                className: "relative flex shrink-0 select-none",
                role: "status",
                children: [c, h]
            }), f[53] = h, f[54] = c, f[55] = m) : m = f[55], m
        }
        var P = n("v0Gf"),
            _ = n("nsuH");

        function D(e) {
            let t, n, l, o, r, s, c = (0, a.c)(23),
                {
                    items: u,
                    availableHeight: h,
                    isDockedTop: m,
                    shouldReduceMotion: f
                } = e,
                g = (0, j.f)("2163293173"),
                [v, b] = (0, p.useState)(null);
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t) => {
                let n = t.firstElementChild;
                n instanceof HTMLElement && b(n.offsetHeight)
            }, c[0] = t) : t = c[0];
            let x = (0, _.b)(t),
                y = Math.min(null == v ? h : 3 * v + 24, Math.max(0, h - 16)),
                w = .3 * !f;
            c[1] !== w ? (n = {
                duration: w,
                ease: S.e
            }, c[1] = w, c[2] = n) : n = c[2];
            let z = n,
                k = g ? "min-w-0" : "-mx-6 -my-2",
                C = g ? "overflow-y-auto overscroll-contain" : "overflow-y-auto overscroll-contain px-6 py-2",
                M = y + 16;
            c[3] !== M ? (l = {
                style: {
                    maxHeight: M
                }
            }, c[3] = M, c[4] = l) : l = c[4];
            let E = g ? "relative flex flex-col" : "relative flex flex-col gap-3";
            if (c[5] !== m || c[6] !== u || c[7] !== f || c[8] !== z) {
                let e;
                c[10] !== m || c[11] !== f || c[12] !== z ? (e = e => {
                    let {
                        id: t,
                        content: n
                    } = e;
                    return (0, i.jsx)(d.a.div, {
                        className: "shrink-0",
                        layout: !f && "position",
                        transition: z,
                        children: (0, i.jsx)(d.a.div, {
                            initial: {
                                opacity: 0,
                                transform: `translateY(${f?0:8*(m?-1:1)}px)`
                            },
                            animate: {
                                opacity: 1,
                                transform: "translateY(0px)"
                            },
                            transition: {
                                ...z,
                                opacity: {
                                    ease: "linear"
                                }
                            },
                            children: n
                        })
                    }, t)
                }, c[10] = m, c[11] = f, c[12] = z, c[13] = e) : e = c[13], o = u.map(e), c[5] = m, c[6] = u, c[7] = f, c[8] = z, c[9] = o
            } else o = c[9];
            return c[14] !== x || c[15] !== E || c[16] !== o ? (r = (0, i.jsx)("div", {
                ref: x,
                className: E,
                children: o
            }), c[14] = x, c[15] = E, c[16] = o, c[17] = r) : r = c[17], c[18] !== r || c[19] !== k || c[20] !== C || c[21] !== l ? (s = (0, i.jsx)(P.a, {
                className: k,
                fade: "mask",
                scrollClassName: C,
                scrollProps: l,
                children: r
            }), c[18] = r, c[19] = k, c[20] = C, c[21] = l, c[22] = s) : s = c[22], s
        }
        var T = n("wrxv"),
            L = n("EFj1"),
            q = n("BjWL"),
            I = n("vi3X"),
            F = n("fDIZ"),
            H = n("AKr5"),
            A = n("X7C7"),
            W = n("rmk3"),
            O = n("giDA"),
            K = n("YzWZ"),
            V = n("eeV6"),
            B = n("Xyz8"),
            Y = n("zj7j"),
            $ = n("Z2JT");
        let X = (0, n("Nwp9").b)("quick-chat-size-v1", z);

        function Z(e, t, n) {
            let i = e.get(X);
            e.set(X, t), (null == i || i.height !== t.height || i.width !== t.width) && n?.()
        }
        var Q = n("mphG"),
            U = n("T1PX"),
            G = n("TL6G"),
            J = n("rkZ2"),
            ee = n("f4Vb"),
            et = n("OWtl"),
            en = n("j89V"),
            ei = n("El6m"),
            ea = n("KkZX"),
            el = n("bIvi");
        let eo = ["bottom-center", "bottom-left", "bottom-right"],
            er = ["bottom-left", "bottom-right"],
            es = "inset(0px 0px 0px 0px round var(--floating-panel-radius))",
            ec = {
                type: "spring",
                bounce: .16,
                duration: .42
            },
            eu = (0, m.u)(et.a, ey, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (e, t) => e.width === t.width && e.height === t.height,
                onMount: e => {
                    let t = window.visualViewport,
                        n = () => e(ey());
                    return window.addEventListener("resize", n), t?.addEventListener("resize", n), n(), () => {
                        window.removeEventListener("resize", n), t?.removeEventListener("resize", n)
                    }
                }
            });

        function ed(e) {
            let t, n, l, o, r = (0, a.c)(10);
            return r[0] !== e ? ({
                contentChat: t,
                ...n
            } = e, r[0] = e, r[1] = t, r[2] = n) : (t = r[1], n = r[2]), r[3] !== t || r[4] !== n ? (l = null == t ? n.renderMenu : e => e.contextMenuTrigger ?? (null == t.onOpenRightPane && n.renderMenu?.(e)), r[3] = t, r[4] = n, r[5] = l) : l = r[5], r[6] !== t || r[7] !== n || r[8] !== l ? (o = (0, i.jsx)(eh, {
                ...n,
                contentChat: t,
                renderMenu: l
            }), r[6] = t, r[7] = n, r[8] = l, r[9] = o) : o = r[9], o
        }

        function eh(e) {
            let t, n, w, P, eo, er, ed, eh, ep, ey, ew, ez, ej, eS, ek, eC, eM, eE, eN, eR, eP, e_, eD, eT, eL, eq, eI, eF, eH, eA, eW, eO, eK, eV, eB, eY, e$, eX, eZ, eQ, eU, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tm, tp, tf, tg, tv, tb, tx, ty, tw, tz, tj, tS, tk, tC, tM, tE, tN, tR, tP, t_, tD, tT, tL, tq, tI, tF, tH, tA, tW, tO, tK, tV, tB, tY, t$, tX, tZ, tQ, tU, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, nm, np, nf, ng, nv, nb, nx, ny, nw, nz, nj, nS, nk, nC, nM, nE, nN, nR, nP, n_, nD, nT, nL, nq, nI, nF, nH, nA, nW, nO, nK, nV, nB, nY, n$, nX, nZ, nQ, nU, nG = (0, a.c)(833),
                {
                    ref: nJ,
                    animateOnMount: n0,
                    background: n1,
                    renderComposer: n2,
                    containerSize: n3,
                    dockThreadKey: n4,
                    canDock: n5,
                    preserveLayoutOnEscape: n6,
                    compactInputPosition: n7,
                    reservedDockPosition: n8,
                    footer: n9,
                    overlay: ie,
                    renderHeaderContent: it,
                    headerInteractionDisabled: ii,
                    allowLegacyHeaderToggle: ia,
                    renderMenu: il,
                    forceExpanded: io,
                    hasConversation: ir,
                    isHidden: is,
                    contentChat: ic,
                    isMinimized: iu,
                    isCollisionObstacle: id,
                    onEscape: ih,
                    onMinimizedChange: im,
                    onResize: ip,
                    presentation: ig,
                    onPresentationChange: iv,
                    title: ib,
                    titleContent: ix,
                    minimizedIcon: iy,
                    minimizedMenuItems: iw,
                    restoreLabel: iz,
                    statusState: ij,
                    titleStatusState: iS,
                    notifications: ik,
                    workingPreview: iC,
                    compactWorkingPreview: iM,
                    responsePreview: iE,
                    showResponsePreview: iN,
                    previewBubble: iR,
                    emptyState: iP,
                    renderTranscript: i_,
                    hasTranscript: iD,
                    pendingFormId: iT,
                    showComposerDivider: iL,
                    showHeader: iq
                } = e,
                iI = void 0 !== n0 && n0,
                iF = void 0 === n5 || n5,
                iH = void 0 !== n6 && n6,
                iA = void 0 !== ii && ii,
                iW = void 0 === ia || ia,
                iO = void 0 !== io && io,
                iK = void 0 !== is && is,
                iV = void 0 === iS ? ij : iS,
                iB = void 0 === iN || iN,
                iY = void 0 === iq || iq,
                i$ = (0, m.y)(et.a),
                iX = null != ic,
                iZ = ic?.onOpenRightPane,
                iQ = (0, m.z)(void 0 === iT ? null : iT),
                iU = null != iQ,
                iG = (0, j.f)("2163293173"),
                [iJ, i0] = (0, p.useState)(!1),
                [i1, i2] = (0, p.useState)(null),
                i3 = iG && iX && iF && !iK,
                i4 = (0, m.z)(!!iG && !!iX && J.c),
                i5 = iG ? iP : void 0,
                i6 = iD ?? null != i_,
                i7 = i6 || null != i5,
                i8 = (0, m.z)(n4) ?? void 0,
                i9 = void 0 === id || id ? "quick-chat" : void 0,
                ae = (0, p.useContext)(ei.b),
                at = (0, m.z)(ik),
                an = iU ? T.a : at ?? T.a,
                ai = (0, m.z)(ij);
            nG[0] !== ai || nG[1] !== an.type ? (t = "ready" === an.type ? {
                ...ai,
                type: ai?.type ?? "idle",
                unread: !0
            } : ai, nG[0] = ai, nG[1] = an.type, nG[2] = t) : t = nG[2];
            let aa = t,
                al = (0, m.z)(iV),
                ao = iV === ij ? aa : al,
                ar = (0, m.z)(iG && iB ? iE : null),
                as = !!ar,
                ac = (0, g.a)(),
                au = (0, p.useId)(),
                ad = (0, p.useId)(),
                ah = (0, b.c)(),
                am = (0, U.a)(),
                ap = (0, m.z)(eu);
            nG[3] !== ap.height || nG[4] !== ah ? (n = (0, b.b)(ap.height, ah), nG[3] = ap.height, nG[4] = ah, nG[5] = n) : n = nG[5];
            let af = n,
                ag = (0, b.b)(ap.width, ah),
                [av, ab] = (0, p.useState)(0),
                [ax, ay] = (0, p.useState)(!1),
                [aw, az] = (0, p.useState)(0),
                [aj, aS] = (0, p.useState)(null),
                [ak, aC] = (0, p.useState)(null),
                [aM, aE] = (0, p.useState)(0),
                [aN, aR] = (0, p.useState)(null);
            nG[6] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                e.contentRect.width > 0 && aR(e.contentRect.width)
            }, nG[6] = w) : w = nG[6];
            let aP = (0, _.b)(w);
            nG[7] === Symbol.for("react.memo_cache_sentinel") ? (P = e => {
                aE((0, ee.a)(e).height)
            }, nG[7] = P) : P = nG[7];
            let a_ = (0, _.b)(P);
            nG[8] === Symbol.for("react.memo_cache_sentinel") ? (eo = e => {
                az((0, ee.a)(e).height)
            }, nG[8] = eo) : eo = nG[8];
            let aD = (0, _.b)(eo);
            nG[9] !== aD ? (er = e => {
                aS(e), aD(e)
            }, nG[9] = aD, nG[10] = er) : er = nG[10];
            let aT = (0, el.a)(er);
            nG[11] === Symbol.for("react.memo_cache_sentinel") ? (ed = e => {
                ab((0, ee.a)(e).height)
            }, nG[11] = ed) : ed = nG[11];
            let aL = (0, _.b)(ed),
                [aq, aI] = (0, p.useState)(0);
            nG[12] === Symbol.for("react.memo_cache_sentinel") ? (eh = e => {
                aI((0, ee.a)(e).height)
            }, nG[12] = eh) : eh = nG[12];
            let aF = (0, _.b)(eh),
                aH = n3?.width ?? ag,
                aA = ag < 640;
            nG[13] !== iF || nG[14] !== iG ? (ep = () => iF ? iG ? "bottom-right" : (0, K.a)() : "bottom-center", nG[13] = iF, nG[14] = iG, nG[15] = ep) : ep = nG[15];
            let [aW] = (0, p.useState)(ep), aO = i8 ?? null;
            nG[16] !== aO ? (ey = {
                threadKey: aO,
                minimized: !1
            }, nG[16] = aO, nG[17] = ey) : ey = nG[17];
            let aK = (0, m.x)(iF ? Y.a : void 0, ey),
                aV = iX && iF,
                aB = i8 ?? null;
            nG[18] !== aB ? (ew = {
                threadKey: aB,
                minimized: !0
            }, nG[18] = aB, nG[19] = ew) : ew = nG[19];
            let aY = (0, m.x)(iF && !iX ? Y.a : void 0, ew);
            nG[20] === Symbol.for("react.memo_cache_sentinel") ? (ez = {}, nG[20] = ez) : ez = nG[20];
            let [a$, aX] = (0, p.useState)(ez), aZ = (null != i8 || iG ? null : a$.expanded) ?? aK ?? aW, aQ = null == n7 ? aZ : a$.expanded ?? n7, aU = aA ? "bottom-center" : aQ;
            nG[21] !== iG || nG[22] !== i8 || nG[23] !== aU || nG[24] !== aV || nG[25] !== a$ || nG[26] !== aY ? (ej = "bottom-right", aV ? ej = (0, B.a)(aU) : iG || (ej = (null == i8 ? a$.minimized : null) ?? aY ?? "bottom-right"), nG[21] = iG, nG[22] = i8, nG[23] = aU, nG[24] = aV, nG[25] = a$, nG[26] = aY, nG[27] = ej) : ej = nG[27];
            let aG = iF ? (0, B.f)(iu ? ej : aU, n8) : "bottom-center",
                aJ = aG.startsWith("top"),
                a0 = (0, m.z)(X),
                a1 = (0, o.a)(),
                a2 = (0, p.useRef)(!1);
            nG[28] === Symbol.for("react.memo_cache_sentinel") ? (eS = {
                x: 0,
                y: 0
            }, nG[28] = eS) : eS = nG[28];
            let a3 = (0, p.useRef)(eS),
                a4 = (0, p.useRef)(null),
                a5 = (0, p.useRef)(null),
                a6 = (0, r.a)(0),
                a7 = (0, r.a)(0),
                a8 = (0, p.useRef)(null),
                a9 = (0, p.useRef)(null),
                le = (0, p.useRef)(null),
                lt = (0, p.useRef)(null),
                [ln, li] = (0, p.useState)("compact"),
                [la, ll] = (0, p.useState)(null),
                lo = iR?.id ?? "",
                lr = la === lo,
                ls = ig ?? ln;
            nG[29] !== i7 || nG[30] !== ig || nG[31] !== iX || nG[32] !== iv ? (ek = e => {
                (iX || "expanded" !== e || i7) && (null == ig && li(e), ll(null), iv?.(e))
            }, nG[29] = i7, nG[30] = ig, nG[31] = iX, nG[32] = iv, nG[33] = ek) : ek = nG[33];
            let lc = ek,
                [lu, ld] = (0, p.useState)(null),
                [lh, lm] = (0, p.useState)(!1),
                [lp, lf] = (0, p.useState)(!1),
                [lg, lv] = (0, p.useState)(!1),
                [lb, lx] = (0, p.useState)(!1),
                ly = (0, p.useRef)(null);
            nG[34] === Symbol.for("react.memo_cache_sentinel") ? (eC = e => {
                (null != ly.current && (cancelAnimationFrame(ly.current), ly.current = null), null != e) ? lx(!0): ly.current = requestAnimationFrame(() => {
                    ly.current = null, lx(!1)
                })
            }, nG[34] = eC) : eC = nG[34];
            let lw = eC;
            nG[35] === Symbol.for("react.memo_cache_sentinel") ? (eM = () => () => {
                null != ly.current && cancelAnimationFrame(ly.current)
            }, eE = [], nG[35] = eM, nG[36] = eE) : (eM = nG[35], eE = nG[36]), (0, p.useEffect)(eM, eE);
            let [lz, lj] = (0, p.useState)(!1), [lS, lk] = (0, p.useState)(!1), [lC, lM] = (0, p.useState)(!0), [lE, lN] = (0, p.useState)(null), lR = (0, p.useRef)(!1), lP = (0, p.useRef)(0);
            nG[37] === Symbol.for("react.memo_cache_sentinel") ? (eN = () => (lP.current = lP.current + 1, () => {
                lP.current = lP.current - 1
            }), nG[37] = eN) : eN = nG[37];
            let l_ = (0, el.a)(eN),
                lD = (0, p.useRef)(!1),
                [lT, lL] = (0, p.useState)(!1),
                [lq, lI] = (0, p.useState)(0),
                [lF, lH] = (0, p.useState)(0),
                [lA, lW] = (0, p.useState)(!1);
            nG[38] !== iG || nG[39] !== ah ? (eR = (e, t) => {
                lI(iG ? (0, ee.a)(e).height : e.contentRect.height), lW(e.contentRect.width < 640);
                let n = t.querySelector(`[${q.a}]`)?.getBoundingClientRect().height ?? 0;
                lH(Math.max(0, e.contentRect.height - (0, b.b)(n, ah)))
            }, nG[38] = iG, nG[39] = ah, nG[40] = eR) : eR = nG[40];
            let lO = (0, _.b)(eR),
                [lK, lV] = (0, p.useState)(null),
                [lB, lY] = (0, p.useState)(!1),
                [l$, lX] = (0, p.useState)(i8);
            l$ !== i8 && (lX(i8), aX({}), i0(!1), i2(null), lk(!1), lN(null), ld(null), lv(!1), lY(!1), ll(null));
            let [lZ, lQ] = (0, p.useState)(iQ);
            lZ !== iQ && (lQ(iQ), lN(null), ld(null));
            let lU = iu || lE?.stage === "minimized",
                lG = (0, r.a)(+!!lU);
            nG[41] !== lG ? (eP = () => 1 - lG.get(), nG[41] = lG, nG[42] = eP) : eP = nG[42];
            let lJ = (0, s.a)(eP);
            nG[43] !== lG ? (e_ = e => lG.on("change", e), nG[43] = lG, nG[44] = e_) : e_ = nG[44];
            let l0 = e_;
            nG[45] !== lG ? (eD = () => 1 === lG.get(), nG[45] = lG, nG[46] = eD) : eD = nG[46];
            let l1 = eD;
            nG[47] !== lU ? (eT = () => lU, nG[47] = lU, nG[48] = eT) : eT = nG[48];
            let l2 = (0, p.useSyncExternalStore)(l0, l1, eT);
            lu?.target !== "minimized" || lU || ld({
                target: ls
            }), nG[49] !== i7 || nG[50] !== iO || nG[51] !== iQ || nG[52] !== ls ? (eL = (0, $.b)({
                pendingFormId: iQ,
                presentation: ls,
                forceExpanded: iO,
                hasTranscript: i7
            }), nG[49] = i7, nG[50] = iO, nG[51] = iQ, nG[52] = ls, nG[53] = eL) : eL = nG[53];
            let {
                isCompact: l3,
                isChatCompact: l4,
                canTogglePresentation: l5
            } = eL, l6 = iG && !iX ? !l3 : iY;
            (!iX || iK || iu || !l6) && lg && lv(!1);
            let l7 = !iu && !lU && (iG && !iX || !l3 || lp || lb || lg || iJ || ax),
                l8 = l6 && (iX ? !iu && !lU : iG || l7),
                l9 = iG && iX && l3 && l8 && !iK && !iU && !i4 && null != iM && ao?.type === "loading",
                oe = iB && iG && !iU && !lr && i6 && (as || !l9 && ao?.type === "loading"),
                ot = l3 && oe,
                on = iG && l3 && !iK && !iu && !iU && void 0 !== iR,
                oi = on && !lr && null != iR,
                oa = ot || oi && iR.transient,
                ol = void 0 !== iL && iL || iG;
            nG[54] !== iX || nG[55] !== iK || nG[56] !== iu || nG[57] !== l6 ? (eq = () => {
                let e, t = a9.current;
                if (null == t || !iX || iK || iu || !l6) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, lv(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), lv(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, nG[54] = iX, nG[55] = iK, nG[56] = iu, nG[57] = l6, nG[58] = eq) : eq = nG[58], nG[59] !== i8 || nG[60] !== iX || nG[61] !== iK || nG[62] !== iu || nG[63] !== l6 ? (eI = [i8, iX, iK, iu, l6], nG[59] = i8, nG[60] = iX, nG[61] = iK, nG[62] = iu, nG[63] = l6, nG[64] = eI) : eI = nG[64], (0, p.useEffect)(eq, eI);
            let oo = !iK && !l3 && !iu && !iO && !iJ && !lT;
            nG[65] !== ad || nG[66] !== lc || nG[67] !== ld ? (eF = e => {
                null == a9.current || null != e && eb(a9.current, e.target, ad) || (ld(null), lc("compact"))
            }, nG[65] = ad, nG[66] = lc, nG[67] = ld, nG[68] = eF) : eF = nG[68];
            let or = (0, p.useEffectEvent)(eF);
            nG[69] !== or || nG[70] !== ad ? (eH = () => {
                let e = a9.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !eb(e, t, ad) && or()
            }, nG[69] = or, nG[70] = ad, nG[71] = eH) : eH = nG[71];
            let os = (0, p.useEffectEvent)(eH);
            nG[72] !== iG || nG[73] !== os || nG[74] !== or || nG[75] !== oo ? (eA = () => {
                if (!oo) return;
                document.addEventListener("pointerdown", or, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && os()
                        })
                    };
                window.addEventListener("blur", t);
                let n = iG ? G.c.subscribe("browser-sidebar-web-contents-pointer-down", () => or()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", or, !0)
                }
            }, nG[72] = iG, nG[73] = os, nG[74] = or, nG[75] = oo, nG[76] = eA) : eA = nG[76], nG[77] !== iG || nG[78] !== oo ? (eW = [iG, oo], nG[77] = iG, nG[78] = oo, nG[79] = eW) : eW = nG[79], (0, p.useEffect)(eA, eW);
            let oc = aa?.type === "loading";
            nG[80] !== im || nG[81] !== lm || nG[82] !== lc || nG[83] !== ld ? (eO = () => {
                a9.current?.focus({
                    preventScroll: !0
                }), lm(!1), ld(null), im(!1), lc("expanded")
            }, nG[80] = im, nG[81] = lm, nG[82] = lc, nG[83] = ld, nG[84] = eO) : eO = nG[84];
            let ou = (0, el.a)(eO),
                [od, oh] = (0, p.useState)(em);
            nG[85] === Symbol.for("react.memo_cache_sentinel") ? (eK = e => {
                oh(t => new Set([...t, e]))
            }, nG[85] = eK) : eK = nG[85];
            let om = (0, el.a)(eK);
            nG[86] !== iG || nG[87] !== om || nG[88] !== ou || nG[89] !== an ? (eV = "ready" !== an.type ? an : {
                type: "ready",
                value: an.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(R, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), ou()
                        },
                        onDismiss: iG ? () => om(e.id) : e.onDismiss
                    })
                }))
            }, nG[86] = iG, nG[87] = om, nG[88] = ou, nG[89] = an, nG[90] = eV) : eV = nG[90];
            let op = eV,
                [of, og] = (0, p.useState)(oc);
            if (of !== oc && (og(oc), lY(!1), ll(null)), nG[91] !== iK || nG[92] !== iu || nG[93] !== oc || nG[94] !== lo || nG[95] !== oa ? (eB = () => {
                    if (!oa || iK || iu || oc) return;
                    let e = window.setTimeout(() => ll(lo), 1e4);
                    return () => window.clearTimeout(e)
                }, nG[91] = iK, nG[92] = iu, nG[93] = oc, nG[94] = lo, nG[95] = oa, nG[96] = eB) : eB = nG[96], nG[97] !== i8 || nG[98] !== iK || nG[99] !== iu || nG[100] !== oc || nG[101] !== lo || nG[102] !== oa ? (eY = [i8, oa, iK, iu, oc, lo], nG[97] = i8, nG[98] = iK, nG[99] = iu, nG[100] = oc, nG[101] = lo, nG[102] = oa, nG[103] = eY) : eY = nG[103], (0, p.useEffect)(eB, eY), nG[104] !== op || nG[105] !== iG || nG[106] !== od || nG[107] !== ou || nG[108] !== oc || nG[109] !== ib || nG[110] !== iC || nG[111] !== lB) {
                if (e$ = op, iG && oc && !lB) {
                    let e, t;
                    nG[113] === Symbol.for("react.memo_cache_sentinel") ? (e = () => lY(!0), nG[113] = e) : e = nG[113], nG[114] !== ou || nG[115] !== ib || nG[116] !== iC ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(R, {
                            title: ib,
                            preview: "",
                            isWorking: !0,
                            workingContent: iC,
                            onOpen: ou,
                            onDismiss: e
                        })
                    }], nG[114] = ou, nG[115] = ib, nG[116] = iC, nG[117] = t) : t = nG[117], e$ = {
                        type: "ready",
                        value: t
                    }
                } else if (iG && "ready" === op.type) {
                    let e;
                    if (nG[118] !== op.value || nG[119] !== od) {
                        let t;
                        nG[121] !== od ? (t = e => !od.has(e.id), nG[121] = od, nG[122] = t) : t = nG[122], e = op.value.filter(t), nG[118] = op.value, nG[119] = od, nG[120] = e
                    } else e = nG[120];
                    e$ = {
                        ...op,
                        value: e
                    }
                }
                nG[104] = op, nG[105] = iG, nG[106] = od, nG[107] = ou, nG[108] = oc, nG[109] = ib, nG[110] = iC, nG[111] = lB, nG[112] = e$
            } else e$ = nG[112];
            "ready" !== e$.type && lh && lm(!1);
            let ov = "ready" === e$.type && e$.value.length > 0 && (lU ? iu && (iG ? l2 : lh) && !iJ : !iG && l3),
                ob = ao?.type !== "loading" && (ao?.unread !== !0 || ov) ? null : ao,
                ox = oc || aa?.unread === !0 && (iu || !ov);
            nG[123] !== e$.type || nG[124] !== e$.value || nG[125] !== iG || nG[126] !== om || nG[127] !== oc || nG[128] !== lm ? (eX = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), lt.current?.contains(document.activeElement) && le.current?.focus({
                            preventScroll: !0
                        }), iG) {
                        if (oc) lY(!0);
                        else if ("ready" === e$.type)
                            for (let e of e$.value) om(e.id)
                    } else lm(!1)
            }, nG[123] = e$.type, nG[124] = e$.value, nG[125] = iG, nG[126] = om, nG[127] = oc, nG[128] = lm, nG[129] = eX) : eX = nG[129];
            let oy = (0, p.useEffectEvent)(eX);
            nG[130] !== oy || nG[131] !== ov || nG[132] !== iK || nG[133] !== iu ? (eZ = () => {
                if (!iK && iu && ov) return document.addEventListener("keydown", oy), () => document.removeEventListener("keydown", oy)
            }, nG[130] = oy, nG[131] = ov, nG[132] = iK, nG[133] = iu, nG[134] = eZ) : eZ = nG[134], nG[135] !== ov || nG[136] !== iK || nG[137] !== iu ? (eQ = [ov, iK, iu], nG[135] = ov, nG[136] = iK, nG[137] = iu, nG[138] = eQ) : eQ = nG[138], (0, p.useEffect)(eZ, eQ);
            let ow = l6 && l8 && !iu && !l9 && null == it,
                oz = iG && iX && ow && ao?.unread === !0;
            nG[139] !== ac ? (eU = ac.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running"
            }), nG[139] = ac, nG[140] = eU) : eU = nG[140];
            let oj = eU;
            nG[141] !== ac ? (eG = ac.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response"
            }), nG[141] = ac, nG[142] = eG) : eG = nG[142];
            let oS = eG,
                ok = oc ? oj : oS,
                oC = aG.endsWith("left"),
                oM = "bottom-center" === aG,
                oE = oC ? "left" : "right",
                oN = aJ && !lU ? aw : 0,
                oR = 46 * (null == n3) + (aJ || lU ? 0 : aw),
                oP = lK ?? a0 ?? z,
                o_ = ov && !iu ? aq : 0,
                oD = (n3?.height ?? af) - av - (aJ ? o_ + oN : 0),
                oT = Math.max(0, oD - 32 - oR - (aJ ? 0 : o_)),
                oL = null == n3 ? aH / 2 : Math.max(0, aH - 20),
                oq = iG && null != aN ? Math.min(oL, aN + 12) : oL,
                oI = (lq || 46) + (l6 && l8 ? 46 : 0) + (ot ? aM : 0) + 6 * !iG,
                oF = iX && l6 && l8,
                oH = (lq || 46) + 46 * !!oF + (oe ? aM : 0) + 6 * !iG,
                oA = ex(oP.height, Math.min(Math.max(400, lq + 46), oT), oT),
                oW = Math.min(l3 ? oI : Math.max(400, oI), oT),
                oO = aA ? oq : Math.min(372, oq),
                oK = ex(l3 ? oI : oP.height, oW, oT),
                oV = (0, r.a)(oK),
                oB = (0, p.useRef)(!1),
                oY = lq > 0,
                o$ = iK || am || lT || !iG && (iu || null != lu) ? 0 : .3,
                oX = ex(oP.width + 12, oO, oq),
                oZ = (0, B.d)(aG, {
                    height: oK,
                    width: oX
                }, oD, aH, 12, oR);
            nG[143] !== oV || nG[144] !== oH || nG[145] !== oA || nG[146] !== l3 || nG[147] !== iX ? (eJ = () => iX && l3 ? 0 : ex((oV.get() - oH) / Math.max(1, oA - oH), 0, 1), nG[143] = oV, nG[144] = oH, nG[145] = oA, nG[146] = l3, nG[147] = iX, nG[148] = eJ) : eJ = nG[148];
            let oQ = (0, s.a)(eJ);
            nG[149] !== oV || nG[150] !== lq || nG[151] !== oQ || nG[152] !== oF ? (e0 = () => Math.max(0, oV.get() - lq - 46 * (oF ? 1 : oQ.get())), nG[149] = oV, nG[150] = lq, nG[151] = oQ, nG[152] = oF, nG[153] = e0) : e0 = nG[153];
            let oU = (0, s.a)(e0);
            nG[154] !== oQ ? (e1 = () => 1 - oQ.get(), nG[154] = oQ, nG[155] = e1) : e1 = nG[155];
            let oG = (0, s.a)(e1);
            nG[156] !== oV || nG[157] !== lq || nG[158] !== iG || nG[159] !== oK || nG[160] !== oY || nG[161] !== l3 || nG[162] !== lb || nG[163] !== o$ ? (e2 = () => {
                let e, t = !oB.current && l3;
                if (oY && (oB.current = !0), lb || t || 0 === o$) return void oV.jump(oK);
                let n = () => {
                    if (iG) {
                        let e = a8.current;
                        if (null != e && e.offsetHeight !== Math.round(lq)) return void lI(e.offsetHeight)
                    }
                    let t = (0, c.a)(oV, oK, {
                        duration: o$,
                        ease: S.e
                    });
                    e = () => t.stop()
                };
                return iG ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, nG[156] = oV, nG[157] = lq, nG[158] = iG, nG[159] = oK, nG[160] = oY, nG[161] = l3, nG[162] = lb, nG[163] = o$, nG[164] = e2) : e2 = nG[164];
            let oJ = (0, p.useEffectEvent)(e2),
                o0 = iG ? lq : null,
                o1 = iG ? null : oY,
                o2 = iG ? null : l3;
            nG[165] !== oJ ? (e3 = () => oJ(), nG[165] = oJ, nG[166] = e3) : e3 = nG[166], nG[167] !== oK || nG[168] !== o1 || nG[169] !== o2 || nG[170] !== o0 || nG[171] !== o$ ? (e4 = [oK, o$, o0, o1, o2], nG[167] = oK, nG[168] = o1, nG[169] = o2, nG[170] = o0, nG[171] = o$, nG[172] = e4) : e4 = nG[172], (0, p.useLayoutEffect)(e3, e4);
            let o3 = iG ? oQ : void 0;
            nG[173] !== o3 ? (e5 = {
                "--quick-chat-expansion": o3
            }, nG[173] = o3, nG[174] = e5) : e5 = nG[174];
            let o4 = e5,
                o5 = {
                    height: Math.min(36, oT),
                    width: Math.min(36, oq)
                },
                o6 = {
                    bubbleSize: o5,
                    composerWidth: oX,
                    composerHorizontalInset: 12,
                    reservedDockPosition: n8,
                    viewportWidth: aH,
                    viewportHeight: oD
                },
                o7 = (0, B.f)(iu ? aG : lE?.dockPosition ?? ej, n8),
                o8 = (0, B.d)(o7, o5, oD, aH, 0, oR),
                o9 = iu ? o5 : {
                    height: oK,
                    width: oX
                },
                re = iu ? o8 : oZ,
                rt = iu ? 16 : 10,
                rn = Math.max(rt, aH - o9.width - rt),
                ri = oR + rt,
                ra = Math.max(rt, oD - o9.height - rt);
            nG[175] !== rt || nG[176] !== rn || nG[177] !== ri || nG[178] !== ra ? (e6 = {
                left: rt,
                right: rn,
                top: ri,
                bottom: ra
            }, nG[175] = rt, nG[176] = rn, nG[177] = ri, nG[178] = ra, nG[179] = e6) : e6 = nG[179];
            let rl = e6;
            nG[180] === Symbol.for("react.memo_cache_sentinel") ? (e7 = () => {
                a5.current = null
            }, nG[180] = e7) : e7 = nG[180], nG[181] !== n3 || nG[182] !== ah ? (e8 = [n3, ah], nG[181] = n3, nG[182] = ah, nG[183] = e8) : e8 = nG[183], (0, p.useLayoutEffect)(e7, e8);
            let ro = e => {
                    if (!iF) return;
                    a5.current = null == n3 ? null : a9.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, b.b)(e.clientX - (a5.current?.left ?? 0), ah),
                        y: (0, b.b)(e.clientY - (a5.current?.top ?? 0), ah)
                    };
                    a3.current = {
                        x: t.x - re.x - a6.get(),
                        y: t.y - re.y - a7.get()
                    }, a4.current = {
                        point: t,
                        target: null
                    }, a1.start(e)
                },
                rr = (0, B.d)(o7, {
                    height: oK,
                    width: oX
                }, oD, aH, 12, oR),
                rs = o8.x - rr.x,
                rc = o8.y - rr.y,
                ru = oX - rs - o5.width,
                rd = oK - rc - o5.height;
            nG[184] !== rs || nG[185] !== rc || nG[186] !== ru || nG[187] !== rd ? (e9 = {
                top: rc,
                right: ru,
                bottom: rd,
                left: rs
            }, nG[184] = rs, nG[185] = rc, nG[186] = ru, nG[187] = rd, nG[188] = e9) : e9 = nG[188];
            let rh = e9,
                rm = `inset(${rh.top}px ${rh.right}px ${rh.bottom}px ${rh.left}px round var(--floating-panel-radius))`,
                rp = (0, s.a)(() => {
                    let e = lG.get(),
                        t = oV.get() - oK,
                        n = e * (rh.top + (aJ ? 0 : t)),
                        i = 6 + e * (rh.right - 6),
                        a = 6 + e * (rh.bottom + (aJ ? t : 0) - 6),
                        l = 6 + e * (rh.left - 6),
                        o = lU || iJ || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round var(--radius-token-composer-single-line))` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: "var(--radius-token-composer-single-line)",
                        clip: o
                    }
                });
            nG[189] !== rp ? (te = () => rp.get().top, nG[189] = rp, nG[190] = te) : te = nG[190];
            let rf = (0, s.a)(te);
            nG[191] !== rp ? (tt = () => rp.get().right, nG[191] = rp, nG[192] = tt) : tt = nG[192];
            let rg = (0, s.a)(tt);
            nG[193] !== rp ? (tn = () => rp.get().bottom, nG[193] = rp, nG[194] = tn) : tn = nG[194];
            let rv = (0, s.a)(tn);
            nG[195] !== rp ? (ti = () => rp.get().left, nG[195] = rp, nG[196] = ti) : ti = nG[196];
            let rb = (0, s.a)(ti);
            nG[197] !== rp ? (ta = () => rp.get().radius, nG[197] = rp, nG[198] = ta) : ta = nG[198];
            let rx = (0, s.a)(ta);
            nG[199] !== rp ? (tl = () => rp.get().clip, nG[199] = rp, nG[200] = tl) : tl = nG[200];
            let ry = (0, s.a)(tl);
            nG[201] !== iG || nG[202] !== lU || nG[203] !== lG || nG[204] !== am ? (to = () => {
                if (!iG) return;
                let e = (0, c.a)(lG, +!!lU, {
                    duration: .3 * !am,
                    ease: S.e
                });
                return () => e.stop()
            }, tr = [iG, lU, lG, am], nG[201] = iG, nG[202] = lU, nG[203] = lG, nG[204] = am, nG[205] = to, nG[206] = tr) : (to = nG[205], tr = nG[206]), (0, p.useLayoutEffect)(to, tr);
            let rw = aJ ? {
                    top: rc + o5.height
                } : {
                    bottom: oK - rc
                },
                rz = (0, p.useRef)({
                    dockPosition: aG,
                    dockThreadKey: i8,
                    isMinimized: iu
                }),
                rj = (0, p.useEffectEvent)(e => {
                    let t = (0, B.d)(e, {
                        height: oK,
                        width: oX
                    }, oD, aH, 12, oR);
                    a6.stop(), a7.stop(), a6.jump(a6.get() + t.x - oZ.x), a7.jump(a7.get() + t.y - oZ.y);
                    let n = am ? {
                        duration: 0
                    } : ec;
                    (0, c.a)(a6, 0, n), (0, c.a)(a7, 0, n)
                });
            (0, p.useLayoutEffect)(() => {
                let e = rz.current;
                if (rz.current = {
                        dockPosition: aG,
                        dockThreadKey: i8,
                        isMinimized: iu
                    }, e.dockThreadKey !== i8) {
                    a2.current = !0, lR.current = !0, a1.cancel(), a6.jump(0), a7.jump(0);
                    return
                }
                if (iK) {
                    a6.jump(0), a7.jump(0);
                    return
                }
                e.isMinimized !== iu && rj(e.dockPosition)
            }, [aG, i8, a1, a6, a7, iK, iu]), nG[207] !== a6 || nG[208] !== a7 ? (ts = () => () => {
                a6.stop(), a7.stop()
            }, tc = [a6, a7], nG[207] = a6, nG[208] = a7, nG[209] = ts, nG[210] = tc) : (ts = nG[209], tc = nG[210]), (0, p.useLayoutEffect)(ts, tc);
            let rS = e => {
                let t, n = {
                    ...o9,
                    left: re.x + a6.get(),
                    top: re.y + a7.get()
                };
                null != n3 && null == a5.current && (a5.current = a9.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == n3 ? null : a5.current,
                    a = {
                        x: e.point.x - (0, b.b)(i?.left ?? 0, ah),
                        y: e.point.y - (0, b.b)(i?.top ?? 0, ah)
                    },
                    l = i3 && !iu ? (function(e) {
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
                        for (let e of eg(a, !1, !0)) {
                            let t = (0, B.d)(e, {
                                height: s.height,
                                width: n
                            }, o, l, i);
                            if (c.has(t.x)) continue;
                            let {
                                x: a,
                                y: u
                            } = (0, B.d)(e, s, o, l), d = a;
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
                    })(o6).find(e => {
                        let {
                            rect: t
                        } = e;
                        return a.x >= t.left && a.x <= t.left + t.width && a.y >= t.top && a.y <= t.top + t.height
                    })?.position : void 0;
                t = iG ? l ?? (0, B.b)(n, oD, aH, eg(n8, iu, aV), 12 * !iu, oR) : (0, B.e)({
                    ...n,
                    left: n.width >= aH / 2 - 2 * rt ? a.x - n.width / 2 : n.left
                }, oD, aH, iu);
                let o = null == n8 ? t : (0, B.f)(t, n8),
                    r = {
                        x: !iG || i3 ? Math.min(a.x, aH - a.x) : aH - a.x,
                        y: iG ? oD - a.y : Math.min(a.y - oR, oD - a.y)
                    },
                    s = (!i3 || r.x >= 0 && r.y >= 0) && r.x <= 16 + o5.width && r.y <= 16 + o5.height;
                if (iG && !iu) {
                    let e = a.x < aH / 2 ? "bottom-left" : "bottom-right",
                        n = i3 && s && e !== n8 ? e : void 0,
                        i = a4.current;
                    if (null != i) {
                        let e = a.x - i.point.x,
                            t = a.y - i.point.y;
                        Math.hypot(e, t) >= 8 && (e >= 0 && t > 0 && t >= e ? i.target = "minimize" : e > 0 && e > 2 * Math.abs(t) ? i.target = null : (e < 0 || t < 0) && (i.target = null), i.point = a)
                    }
                    let r = a.y - a3.current.y + o9.height - oD;
                    return {
                        dockPosition: o,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        shouldMinimize: null != n || null == l && "bottom-right" === o && i?.target === "minimize" && r >= .5 * o9.width,
                        bubbleDropPosition: n
                    }
                }
                let c = (0, B.d)(o, o9, oD, aH, 12, oR),
                    u = !iu && "bottom-center" !== o && 16 >= Math.abs(n.left - c.x) && 16 >= Math.abs(n.top - c.y);
                return {
                    dockPosition: o,
                    requestedDockPosition: t,
                    isNearDock: u,
                    shouldMinimize: u && s
                }
            };
            nG[211] !== iF || nG[212] !== n7 || nG[213] !== iG || nG[214] !== i8 || nG[215] !== ir || nG[216] !== aV || nG[217] !== i$ ? (tu = (e, t) => {
                if (!iF) return;
                let n = t && !aV;
                (null == n7 || n) && (null != i8 || iG && !n) ? (0, Y.c)(i$, {
                    threadKey: i8 ?? null,
                    minimized: n
                }, e, ir) : aX(t => ({
                    expanded: n ? t.expanded : e,
                    minimized: n ? (0, B.a)(e) : t.minimized
                }))
            }, nG[211] = iF, nG[212] = n7, nG[213] = iG, nG[214] = i8, nG[215] = ir, nG[216] = aV, nG[217] = i$, nG[218] = tu) : tu = nG[218];
            let rk = tu,
                rC = (e, t, n) => {
                    let i = void 0 === n ? o9 : n,
                        a = (0, B.d)(aG, o9, oD, aH, 12 * !iu, oR),
                        l = {
                            x: a.x + a6.get(),
                            y: a.y + a7.get()
                        },
                        o = (0, B.d)((0, B.f)(e, n8), i, oD, aH, 12 * !iu, oR);
                    a6.stop(), a7.stop(), a6.jump(l.x - o.x), a7.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        rk(e, iu)
                    });
                    let r = iG ? {
                            duration: .3,
                            ease: S.e
                        } : ec,
                        s = am ? {
                            duration: 0
                        } : r;
                    lk(!0), Promise.all([(0, c.a)(a6, 0, s), (0, c.a)(a7, 0, s)]).then(() => {
                        lk(0 !== a6.get() || 0 !== a7.get())
                    })
                },
                rM = (0, p.useEffectEvent)(() => {
                    a2.current = !0, a1.cancel(), rC(aG, !1), lN(null), ld(null), i0(!1), i2(null)
                });
            nG[219] !== rM || nG[220] !== a1 || nG[221] !== iJ ? (td = () => {
                if (!iJ) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), rM())
                    },
                    t = () => rM();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    a2.current = !0, a1.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, nG[219] = rM, nG[220] = a1, nG[221] = iJ, nG[222] = td) : td = nG[222], nG[223] !== a1 || nG[224] !== iJ ? (th = [a1, iJ], nG[223] = a1, nG[224] = iJ, nG[225] = th) : th = nG[225], (0, p.useLayoutEffect)(td, th);
            let rE = (e, t) => {
                    let n = iG && oM ? 0 : (0, B.c)(aG, e, {
                            height: oK,
                            width: oX
                        }, a6.get(), t.width, oD, aH, 12),
                        i = oZ.y + a7.get(),
                        a = (0, B.d)(aG, t, oD, aH, 12, oR),
                        l = ex(i + (aJ ? 0 : oK - t.height), oR + 10, oD - t.height - 10);
                    a6.stop(), a7.stop(), (0, f.flushSync)(() => {
                        lV({
                            height: l3 ? oP.height : t.height,
                            width: t.width - 12
                        })
                    }), a6.jump(n), a7.jump(l - a.y)
                },
                rN = e => {
                    Z(i$, {
                        height: l3 ? oP.height : e.height,
                        width: e.width - 12
                    }, () => ip?.(aG)), rC(aG, !1, e)
                };
            nG[226] !== iG || nG[227] !== iJ || nG[228] !== im || nG[229] !== lm || nG[230] !== lN || nG[231] !== ld ? (tm = () => {
                lm(!1), lM(!iJ), lN(null), ld(iG ? null : {
                    target: "minimized"
                }), im(!0)
            }, nG[226] = iG, nG[227] = iJ, nG[228] = im, nG[229] = lm, nG[230] = lN, nG[231] = ld, nG[232] = tm) : tm = nG[232];
            let rR = tm;
            if (nG[233] !== n7 || nG[234] !== iG || nG[235] !== iO || nG[236] !== iU || nG[237] !== l3 || nG[238] !== iK || nG[239] !== iu || nG[240] !== ih || nG[241] !== im || nG[242] !== ls || nG[243] !== iH || nG[244] !== lm || nG[245] !== lc || nG[246] !== ld) {
                let e, t, n, i;
                tx = () => {
                    (0, f.flushSync)(() => {
                        lm(!1), ld(iG ? null : {
                            target: ls
                        }), im(!1)
                    }), tg()
                }, nG[254] !== l3 || nG[255] !== lc || nG[256] !== ld ? (e = () => {
                    ld(null), lc(l3 ? "expanded" : "compact")
                }, nG[254] = l3, nG[255] = lc, nG[256] = ld, nG[257] = e) : e = nG[257], ty = e;
                let a = !iK && !iu;
                tp = a && (null != ih || !iH && !l3 && !iO), nG[258] !== ih || nG[259] !== lc || nG[260] !== ld ? (t = () => {
                    null != ih ? ih() : (ld(null), lc("compact"))
                }, nG[258] = ih, nG[259] = lc, nG[260] = ld, nG[261] = t) : t = nG[261], tf = t, nG[262] !== tp || nG[263] !== a || nG[264] !== tf || nG[265] !== iH ? (n = e => {
                    if (!a || "Escape" !== e.key || e.defaultPrevented || e.nativeEvent.isComposing) return;
                    let t = tp && !e.repeat;
                    !t && (!iH || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) || (e.preventDefault(), e.stopPropagation(), t && tf())
                }, nG[262] = tp, nG[263] = a, nG[264] = tf, nG[265] = iH, nG[266] = n) : n = nG[266], tb = n, nG[267] !== iU ? (i = () => {
                    let e = a8.current;
                    return iU ? (0, H.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, nG[267] = iU, nG[268] = i) : i = nG[268], tv = i, tg = () => {
                    iG && null == n7 && (ld(null), lc("expanded")), tv()?.focus({
                        preventScroll: !0
                    })
                }, nG[233] = n7, nG[234] = iG, nG[235] = iO, nG[236] = iU, nG[237] = l3, nG[238] = iK, nG[239] = iu, nG[240] = ih, nG[241] = im, nG[242] = ls, nG[243] = iH, nG[244] = lm, nG[245] = lc, nG[246] = ld, nG[247] = tp, nG[248] = tf, nG[249] = tg, nG[250] = tv, nG[251] = tb, nG[252] = tx, nG[253] = ty
            } else tp = nG[247], tf = nG[248], tg = nG[249], tv = nG[250], tb = nG[251], tx = nG[252], ty = nG[253];
            let rP = !iK && iU;
            nG[269] !== tv || nG[270] !== iU || nG[271] !== iu ? (tw = () => {
                if (null == a9.current || null != a9.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (iU) return iu;
                let e = tv();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !a8.current?.contains(t) || t === a8.current
            }, nG[269] = tv, nG[270] = iU, nG[271] = iu, nG[272] = tw) : tw = nG[272], nG[273] !== rP || nG[274] !== tw ? (tz = {
                enabled: rP,
                isActive: tw
            }, nG[273] = rP, nG[274] = tw, nG[275] = tz) : tz = nG[275], (0, L.a)("focusMainChat", iu ? tx : tg, tz), nG[276] !== ac || nG[277] !== l3 ? (tj = ac.formatMessage(l3 ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat"
            }), nG[276] = ac, nG[277] = l3, nG[278] = tj) : tj = nG[278];
            let r_ = tj;
            nG[279] !== l5 || nG[280] !== r_ || nG[281] !== ty ? (tS = l5 ? {
                label: r_,
                onToggle: ty
            } : void 0, nG[279] = l5, nG[280] = r_, nG[281] = ty, nG[282] = tS) : tS = nG[282];
            let rD = tS;
            nG[283] !== ac ? (tk = ac.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width"
            }), nG[283] = ac, nG[284] = tk) : tk = nG[284];
            let rT = tk;
            nG[285] !== ac ? (tC = ac.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height"
            }), nG[285] = ac, nG[286] = tC) : tC = nG[286];
            let rL = tC;
            nG[287] !== iX || nG[288] !== lc || nG[289] !== ld ? (tM = () => {
                ld(null), iX && lc("expanded")
            }, nG[287] = iX, nG[288] = lc, nG[289] = ld, nG[290] = tM) : tM = nG[290];
            let rq = (0, el.a)(tM);
            nG[291] !== iG || nG[292] !== rq || nG[293] !== iX || nG[294] !== ld ? (tE = iG || iX ? rq : () => ld(null), nG[291] = iG, nG[292] = rq, nG[293] = iX, nG[294] = ld, nG[295] = tE) : tE = nG[295];
            let rI = {
                    isCompact: l3,
                    canShowPreviewBubble: on,
                    isNarrow: lA,
                    isChromeRevealed: l7,
                    isHeaderVisible: l8,
                    isComposerFocused: iG ? lz || lb : l7,
                    isDockedTop: aJ,
                    isHidden: iK,
                    isMinimized: lU,
                    shouldReduceMotion: am,
                    onSubmitStart: tE
                },
                rF = {
                    isMoving: iJ || lT || lS,
                    composerContentHeight: lF,
                    dockedReservePx: lq > lF + 6 * !!iG ? oK + 10 : 0
                };
            nG[296] !== iK || nG[297] !== il ? (tN = function(e) {
                !iK && null != il && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (a9.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, nG[296] = iK, nG[297] = il, nG[298] = tN) : tN = nG[298];
            let rH = tN;
            nG[299] !== iX ? (tR = function(e) {
                !iX && e.target instanceof Element && (!a9.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, nG[299] = iX, nG[300] = tR) : tR = nG[300];
            let rA = tR,
                rW = n2(rI, rF),
                rO = iH ? "editor-only" : null;
            nG[301] !== lO ? (tP = e => {
                a8.current = e, lO(e)
            }, nG[301] = lO, nG[302] = tP) : tP = nG[302], nG[303] !== tg ? (t_ = e => {
                e.target === e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && !lR.current && tg()
            }, nG[303] = tg, nG[304] = t_) : t_ = nG[304], nG[305] !== ol || nG[306] !== l3 || nG[307] !== iu || nG[308] !== ot ? (tD = ol && !iu && (!l3 || ot) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, nG[305] = ol, nG[306] = l3, nG[307] = iu, nG[308] = ot, nG[309] = tD) : tD = nG[309], nG[310] !== aj ? (tT = {
                target: aj,
                homeBannerPlacement: "inline"
            }, nG[310] = aj, nG[311] = tT) : tT = nG[311];
            let rK = (0, i.jsxs)("div", {
                ref: tP,
                className: (0, l.b)(C.a.floatingComposerInset, "mt-auto shrink-0", iF && !aA && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", l3 && aJ && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: rH,
                onPointerUp: t_,
                onContextMenu: rA,
                children: [tD, (0, i.jsx)(ei.b, {
                    value: {
                        ...ae,
                        hasComposerSurface: ol,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !iK && !l3 && !iu,
                        floatingChatSurfaceRef: a9,
                        onFloatingDictationRowChange: lw,
                        floatingComposerPresentation: rI,
                        transcriptTarget: ak,
                        followLatestTranscript: iG ? l3 : ae.followLatestTranscript
                    },
                    children: (0, i.jsx)(F.a, {
                        value: tp ? tf : rO,
                        children: (0, i.jsx)(I.a, {
                            value: tT,
                            children: rW
                        })
                    })
                })]
            });
            nG[312] !== l3 || nG[313] !== rR ? (tL = (0, i.jsx)(V.c, {
                isCompact: l3,
                onMinimize: rR
            }), nG[312] = l3, nG[313] = rR, nG[314] = tL) : tL = nG[314];
            let rV = tL,
                rB = iG || null != iZ ? null : rV;
            if (l9) {
                let e, t, n;
                nG[315] !== tv || nG[316] !== ty ? (e = () => {
                    ty(), tv()?.focus({
                        preventScroll: !0
                    })
                }, nG[315] = tv, nG[316] = ty, nG[317] = e) : e = nG[317], nG[318] !== iM || nG[319] !== au ? (t = (0, i.jsx)("span", {
                    id: au,
                    className: "min-w-0 truncate",
                    children: iM
                }), nG[318] = iM, nG[319] = au, nG[320] = t) : t = nG[320], nG[321] !== r_ || nG[322] !== e || nG[323] !== t || nG[324] !== au ? (n = (0, i.jsx)(E.a, {
                    unstyled: !0,
                    focusRing: "inset",
                    className: "min-w-0 flex-1 px-2 text-start text-sm text-secondary",
                    "aria-label": r_,
                    "aria-describedby": au,
                    "data-quick-chat-drag-handle": !0,
                    onClick: e,
                    children: t
                }), nG[321] = r_, nG[322] = e, nG[323] = t, nG[324] = au, nG[325] = n) : n = nG[325], tq = n
            } else if (null != it) {
                let e;
                nG[326] !== rB || nG[327] !== it ? (e = it({
                    leadingControl: rB
                }), nG[326] = rB, nG[327] = it, nG[328] = e) : e = nG[328], tq = e
            } else {
                let e, t, n, a, o, r;
                nG[329] !== oz || nG[330] !== oS ? (e = oz && (0, i.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    "aria-label": oS
                }), nG[329] = oz, nG[330] = oS, nG[331] = e) : e = nG[331];
                let s = oz || void 0,
                    c = (!iG || null == ix) && "truncate";
                nG[332] !== c ? (t = (0, l.b)("group/floating-title min-w-0 text-base font-medium text-secondary", c), nG[332] = c, nG[333] = t) : t = nG[333], nG[334] !== iG || nG[335] !== iY || nG[336] !== ib || nG[337] !== ix ? (n = ix ?? (iG ? (0, i.jsx)(V.b, {
                    children: (0, i.jsx)(Q.a, {
                        children: iY ? ib : (0, i.jsx)(v.a, {
                            id: "quickChat.newChatTitle",
                            defaultMessage: "New chat"
                        })
                    })
                }) : ib), nG[334] = iG, nG[335] = iY, nG[336] = ib, nG[337] = ix, nG[338] = n) : n = nG[338], nG[339] !== s || nG[340] !== t || nG[341] !== n || nG[342] !== au ? (a = (0, i.jsx)("h2", {
                    id: au,
                    "data-unread": s,
                    "data-dropdown-overlay-side": "auto",
                    className: t,
                    children: n
                }), nG[339] = s, nG[340] = t, nG[341] = n, nG[342] = au, nG[343] = a) : a = nG[343], nG[344] !== iG || nG[345] !== ob || nG[346] !== oj || nG[347] !== oS ? (o = !iG && (0, i.jsx)("div", {
                    className: "flex min-w-5 flex-1 items-center justify-end",
                    children: null != ob && (0, i.jsx)("div", {
                        className: "flex min-w-0 justify-end",
                        role: "status",
                        "aria-label": "loading" === ob.type ? oj : oS,
                        children: (0, i.jsx)(en.a, {
                            statusState: ob
                        })
                    })
                }), nG[344] = iG, nG[345] = ob, nG[346] = oj, nG[347] = oS, nG[348] = o) : o = nG[348], nG[349] !== rB || nG[350] !== e || nG[351] !== a || nG[352] !== o ? (r = (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-1 items-center gap-1",
                    children: [rB, e, a, o]
                }), nG[349] = rB, nG[350] = e, nG[351] = a, nG[352] = o, nG[353] = r) : r = nG[353], tq = r
            }
            let rY = iX ? l_ : void 0;
            nG[354] !== ad || nG[355] !== rY ? (tI = {
                id: ad,
                registerOpen: rY
            }, nG[354] = ad, nG[355] = rY, nG[356] = tI) : tI = nG[356], nG[357] !== ax || nG[358] !== l3 || nG[359] !== iJ || nG[360] !== rR || nG[361] !== il ? (tF = il?.({
                isCompact: l3,
                isDragging: iJ,
                open: ax,
                onMinimize: rR,
                onOpenChange: ay
            }), nG[357] = ax, nG[358] = l3, nG[359] = iJ, nG[360] = rR, nG[361] = il, nG[362] = tF) : tF = nG[362];
            let r$ = iG && null == iZ && rV;
            nG[363] !== ic?.openRightPaneDisabled || nG[364] !== rV || nG[365] !== iZ ? (tH = null != iZ && (0, i.jsx)(V.d, {
                minimizeButton: rV,
                disabled: ic?.openRightPaneDisabled,
                onOpenRightPane: iZ
            }), nG[363] = ic?.openRightPaneDisabled, nG[364] = rV, nG[365] = iZ, nG[366] = tH) : tH = nG[366], nG[367] !== tq || nG[368] !== tI || nG[369] !== tF || nG[370] !== r$ || nG[371] !== tH ? (tA = (0, i.jsxs)(O.a, {
                value: tI,
                children: [tq, tF, r$, tH]
            }), nG[367] = tq, nG[368] = tI, nG[369] = tF, nG[370] = r$, nG[371] = tH, nG[372] = tA) : tA = nG[372];
            let rX = tA;
            nG[373] !== iW || nG[374] !== iG || nG[375] !== rX || nG[376] !== iA || nG[377] !== l3 || nG[378] !== iX || nG[379] !== l8 || nG[380] !== iu || nG[381] !== rD || nG[382] !== lu || nG[383] !== am || nG[384] !== l6 ? (tW = iG ? (0, i.jsx)(V.a, {
                isCompact: iX && l3,
                isVisible: l8,
                isDisabled: iA,
                children: rX
            }) : (0, i.jsx)(V.e, {
                expandOnClick: iX,
                animateChrome: !am && !iu && null == lu,
                isChromeRevealed: l8,
                isCompact: l3,
                isDisabled: iA,
                reserveSpace: iX && l6 && !l3,
                presentationToggle: iW ? rD : void 0,
                children: rX
            }), nG[373] = iW, nG[374] = iG, nG[375] = rX, nG[376] = iA, nG[377] = l3, nG[378] = iX, nG[379] = l8, nG[380] = iu, nG[381] = rD, nG[382] = lu, nG[383] = am, nG[384] = l6, nG[385] = tW) : tW = nG[385], nG[386] !== rA || nG[387] !== rH || nG[388] !== tW ? (tO = (0, i.jsx)("div", {
                className: "contents",
                onPointerDownCapture: rH,
                onContextMenu: rA,
                children: tW
            }), nG[386] = rA, nG[387] = rH, nG[388] = tW, nG[389] = tO) : tO = nG[389];
            let rZ = tO,
                rQ = iG ? {
                    top: o7.startsWith("top") ? rc : void 0,
                    bottom: o7.startsWith("top") ? void 0 : rh.bottom,
                    left: rs,
                    width: o5.width,
                    height: o5.height,
                    opacity: lG
                } : {
                    inset: 0
                },
                rU = !iu,
                rG = iu ? i9 : void 0;
            nG[390] !== iG || nG[391] !== lU ? (tK = iG ? void 0 : {
                opacity: +!!lU
            }, nG[390] = iG, nG[391] = lU, nG[392] = tK) : tK = nG[392];
            let rJ = !iu || void 0;
            nG[393] !== am ? (tV = am ? {
                duration: 0
            } : {
                duration: .3,
                ease: S.e
            }, nG[393] = am, nG[394] = tV) : tV = nG[394];
            let r0 = iu ? "minimized" : "preview",
                r1 = iu && "pointer-events-auto";
            nG[395] !== r1 ? (tB = (0, l.b)("absolute inset-0 m-auto touch-none", r1), nG[395] = r1, nG[396] = tB) : tB = nG[396];
            let r2 = ox ? ok : void 0;
            nG[397] !== ac || nG[398] !== iz || nG[399] !== ib ? (tY = iz ?? ac.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}"
            }, {
                title: ib
            }), nG[397] = ac, nG[398] = iz, nG[399] = ib, nG[400] = tY) : tY = nG[400];
            let r3 = !iK && iu && lC;
            nG[401] !== tx ? (t$ = e => {
                0 !== e.detail && lR.current || tx()
            }, nG[401] = tx, nG[402] = t$) : t$ = nG[402], nG[403] !== iG || nG[404] !== lm ? (tX = e => {
                iG || "touch" === e.pointerType || lm(!0)
            }, nG[403] = iG, nG[404] = lm, nG[405] = tX) : tX = nG[405], nG[406] !== e$.type || nG[407] !== iG || nG[408] !== lm ? (tZ = e => {
                "ready" === e$.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), iG || (0, f.flushSync)(() => lm(!0)), lt.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, nG[406] = e$.type, nG[407] = iG, nG[408] = lm, nG[409] = tZ) : tZ = nG[409], nG[410] !== aA || nG[411] !== ro ? (tQ = e => {
                aA || 0 !== e.button || (lR.current = !1, e.currentTarget.setPointerCapture(e.pointerId), ro(e))
            }, nG[410] = aA, nG[411] = ro, nG[412] = tQ) : tQ = nG[412], nG[413] !== iG || nG[414] !== ox || nG[415] !== oc || nG[416] !== iy || nG[417] !== aa ? (tU = oc && null != aa && null == iy ? (0, i.jsx)(en.a, {
                statusState: aa,
                size: iG ? "default" : "compact"
            }) : (0, i.jsx)(A.a, {
                badgeEnabled: ox,
                children: iy ?? (0, i.jsx)(N.Ib, {})
            }), nG[413] = iG, nG[414] = ox, nG[415] = oc, nG[416] = iy, nG[417] = aa, nG[418] = tU) : tU = nG[418], nG[419] !== r0 || nG[420] !== tB || nG[421] !== r2 || nG[422] !== tY || nG[423] !== r3 || nG[424] !== t$ || nG[425] !== tX || nG[426] !== tZ || nG[427] !== tQ || nG[428] !== tU ? (tG = (0, i.jsx)(E.a, {
                ref: le,
                className: tB,
                "aria-description": r2,
                "aria-label": tY,
                autoFocus: r3,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: t$,
                onPointerEnter: tX,
                onKeyDown: tZ,
                onPointerDown: tQ,
                children: tU
            }, r0), nG[419] = r0, nG[420] = tB, nG[421] = r2, nG[422] = tY, nG[423] = r3, nG[424] = t$, nG[425] = tX, nG[426] = tZ, nG[427] = tQ, nG[428] = tU, nG[429] = tG) : tG = nG[429], nG[430] !== rQ || nG[431] !== rU || nG[432] !== rG || nG[433] !== tK || nG[434] !== rJ || nG[435] !== tV || nG[436] !== tG ? (tJ = (0, i.jsx)(d.a.div, {
                ref: y.c,
                className: "pointer-events-none absolute",
                style: rQ,
                "aria-hidden": rU,
                "data-pip-obstacle": rG,
                animate: tK,
                initial: !1,
                inert: rJ,
                transition: tV,
                children: tG
            }), nG[430] = rQ, nG[431] = rU, nG[432] = rG, nG[433] = tK, nG[434] = rJ, nG[435] = tV, nG[436] = tG, nG[437] = tJ) : tJ = nG[437];
            let r4 = tJ,
                r5 = "ready" === e$.type ? (0, i.jsx)(D, {
                    items: e$.value,
                    availableHeight: Math.max(0, (n3?.height ?? af) - oR - av - (iu ? o5.height : oI) - 32 - 12),
                    isDockedTop: aJ,
                    shouldReduceMotion: am
                }) : null;
            !iG && (t0 = es, lU ? t0 = rm : null != lu || iJ || (t0 = "none"));
            let r6 = null != lu || !iu;
            nG[438] !== oV || nG[439] !== iG || nG[440] !== rx ? (t1 = iG ? {
                height: oV,
                borderRadius: rx
            } : void 0, nG[438] = oV, nG[439] = iG, nG[440] = rx, nG[441] = t1) : t1 = nG[441], nG[442] !== iG || nG[443] !== rv || nG[444] !== rb || nG[445] !== rx || nG[446] !== rg || nG[447] !== rf ? (t2 = iG ? {
                top: rf,
                right: rg,
                bottom: rv,
                left: rb,
                borderRadius: rx
            } : void 0, nG[442] = iG, nG[443] = rv, nG[444] = rb, nG[445] = rx, nG[446] = rg, nG[447] = rf, nG[448] = t2) : t2 = nG[448], nG[449] !== oK || nG[450] !== oX ? (t3 = {
                height: oK,
                width: oX
            }, nG[449] = oK, nG[450] = oX, nG[451] = t3) : t3 = nG[451];
            let r7 = iG && oM,
                r8 = iG && !oM ? oE : void 0,
                r9 = l6 && l8;
            nG[452] !== oT || nG[453] !== oq ? (t4 = {
                height: oT,
                width: oq
            }, nG[452] = oT, nG[453] = oq, nG[454] = t4) : t4 = nG[454], nG[455] !== r4 || nG[456] !== iw ? (t5 = null == iw ? r4 : (0, i.jsx)(W.a, {
                disableNative: !0,
                items: iw,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: r4
                })
            }), nG[455] = r4, nG[456] = iw, nG[457] = t5) : t5 = nG[457], nG[458] !== oW || nG[459] !== oO ? (t6 = {
                height: oW,
                width: oO
            }, nG[458] = oW, nG[459] = oO, nG[460] = t6) : t6 = nG[460];
            let se = !aA,
                st = lU || iG ? "panel" : n1,
                sn = ow ? void 0 : ib,
                si = ow ? au : void 0,
                sa = null != n3 && void 0;
            nG[461] !== iI || nG[462] !== oY || nG[463] !== am ? (t7 = iI ? {
                opacity: +!!oY,
                translateY: 8 * (!oY && !am)
            } : {}, nG[461] = iI, nG[462] = oY, nG[463] = am, nG[464] = t7) : t7 = nG[464];
            let sl = iG || lE?.stage !== "approaching" ? 1 : .95;
            nG[465] !== oX || nG[466] !== t7 || nG[467] !== sl ? (t8 = {
                ...t7,
                width: oX,
                scale: sl
            }, nG[465] = oX, nG[466] = t7, nG[467] = sl, nG[468] = t8) : t8 = nG[468];
            let so = !iG && l3 || void 0,
                sr = iu ? void 0 : i9,
                ss = !aA,
                sc = null == n3 ? void 0 : {
                    left: rl.left - re.x,
                    right: rl.right - re.x,
                    top: rl.top - re.y,
                    bottom: rl.bottom - re.y
                },
                su = null == n3 ? void 0 : 0;
            nG[469] !== iI || nG[470] !== am ? (t9 = !!iI && !am && {
                opacity: 0,
                translateY: 8
            }, nG[469] = iI, nG[470] = am, nG[471] = t9) : t9 = nG[471];
            let sd = null == n3 ? "dialog" : "region",
                sh = aJ ? oR + 10 : "auto",
                sm = aJ ? "auto" : 10 + av,
                sp = oM ? "50%" : "auto";
            nG[472] !== oE || nG[473] !== oM ? (ne = !oM && {
                [oE]: 10
            }, nG[472] = oE, nG[473] = oM, nG[474] = ne) : ne = nG[474];
            let sf = oM ? "-50% 0" : void 0,
                sg = "bottom-center" === o7 ? .5 : Number(o7.endsWith("right")),
                sv = +!o7.startsWith("top");
            nG[475] !== oV || nG[476] !== o4 || nG[477] !== a6 || nG[478] !== a7 || nG[479] !== sh || nG[480] !== sm || nG[481] !== sp || nG[482] !== ne || nG[483] !== sf || nG[484] !== sg || nG[485] !== sv ? (nt = {
                ...o4,
                height: oV,
                top: sh,
                bottom: sm,
                left: sp,
                right: "auto",
                ...ne,
                translate: sf,
                x: a6,
                y: a7,
                originX: sg,
                originY: sv
            }, nG[475] = oV, nG[476] = o4, nG[477] = a6, nG[478] = a7, nG[479] = sh, nG[480] = sm, nG[481] = sp, nG[482] = ne, nG[483] = sf, nG[484] = sg, nG[485] = sv, nG[486] = nt) : nt = nG[486];
            let sb = .3 * !am;
            nG[487] !== sb ? (nn = {
                duration: sb,
                ease: S.e
            }, nG[487] = sb, nG[488] = nn) : nn = nG[488], nG[489] !== o$ || nG[490] !== nn ? (ni = {
                duration: o$,
                ease: S.e,
                scale: nn
            }, nG[489] = o$, nG[490] = nn, nG[491] = ni) : ni = nG[491], nG[492] !== iG || nG[493] !== iX || nG[494] !== iK || nG[495] !== ad || nG[496] !== lj || nG[497] !== lf || nG[498] !== lm || nG[499] !== lc || nG[500] !== ld || nG[501] !== oo ? (na = e => {
                if (!(iK || eb(e.currentTarget, e.relatedTarget, ad))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && eb(t, t.ownerDocument.activeElement, ad) || (lf(!1), lj(!1), lm(!1))
                        });
                        return
                    }
                    lf(!1), lj(!1), lm(!1), (!iG || iX) && oo && null == e.target.closest("[inert]") && (ld(null), lc("compact"))
                }
            }, nG[492] = iG, nG[493] = iX, nG[494] = iK, nG[495] = ad, nG[496] = lj, nG[497] = lf, nG[498] = lm, nG[499] = lc, nG[500] = ld, nG[501] = oo, nG[502] = na) : na = nG[502], nG[503] !== l5 || nG[504] !== iG || nG[505] !== tg || nG[506] !== l3 || nG[507] !== iX || nG[508] !== iu || nG[509] !== lc || nG[510] !== ld || nG[511] !== l6 || nG[512] !== ty ? (nl = e => {
                if (!(iX && (0 !== e.button || e.ctrlKey) || iu || lR.current || e.detail > 0 && lD.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (l3 && (e.target === e.currentTarget || a8.current?.contains(e.target))) return void tg();
                    if (iX) {
                        if (!l6 || !l5) return;
                        l3 && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), ld(null), lc("expanded");
                        return
                    }
                    if (iG) {
                        l3 && l5 && tg();
                        return
                    }
                    l6 && l5 && e.target.closest("header[data-quick-chat-drag-handle]") && (l3 && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), ty())
                }
            }, nG[503] = l5, nG[504] = iG, nG[505] = tg, nG[506] = l3, nG[507] = iX, nG[508] = iu, nG[509] = lc, nG[510] = ld, nG[511] = l6, nG[512] = ty, nG[513] = nl) : nl = nG[513], nG[514] !== iG || nG[515] !== oT || nG[516] !== oq || nG[517] !== oW || nG[518] !== oO || nG[519] !== iu || nG[520] !== ip || nG[521] !== i$ || nG[522] !== lV || nG[523] !== lc || nG[524] !== ld || nG[525] !== rC ? (no = e => {
                iG && !iu && !lR.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (ld(null), lc("expanded"), lV(null), Z(i$, z, () => ip?.("bottom-right")), rC("bottom-right", !0, {
                    height: ex(z.height, oW, oT),
                    width: ex(z.width + 12, oO, oq)
                }))
            }, nG[514] = iG, nG[515] = oT, nG[516] = oq, nG[517] = oW, nG[518] = oO, nG[519] = iu, nG[520] = ip, nG[521] = i$, nG[522] = lV, nG[523] = lc, nG[524] = ld, nG[525] = rC, nG[526] = no) : no = nG[526], nG[527] !== iK ? (nr = e => {
                !iK && lR.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, nG[527] = iK, nG[528] = nr) : nr = nG[528], nG[529] !== iG || nG[530] !== rS || nG[531] !== iu || nG[532] !== lE || nG[533] !== ej || nG[534] !== ls || nG[535] !== lN || nG[536] !== ld || nG[537] !== i3 ? (ns = (e, t) => {
                let n = rS(t),
                    i = n.bubbleDropPosition ?? (iG ? ej : n.dockPosition);
                if (i3 && (n.shouldMinimize ? i2(`bubble-${i}`) : i2(iu ? `bubble-${n.dockPosition}` : `composer-${n.dockPosition}`)), null != n.dockPosition && (iG ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching";
                    (lE?.stage !== e || lE.dockPosition !== i) && (lN({
                        dockPosition: i,
                        stage: e
                    }), (n.shouldMinimize || lE?.stage === "minimized") && ld(iG ? null : {
                        target: n.shouldMinimize ? "minimized" : ls
                    }))
                } else null != lE && "restored" !== lE.stage && (lN({
                    ...lE,
                    stage: "restored"
                }), "minimized" === lE.stage && ld(iG ? null : {
                    target: ls
                }))
            }, nG[529] = iG, nG[530] = rS, nG[531] = iu, nG[532] = lE, nG[533] = ej, nG[534] = ls, nG[535] = lN, nG[536] = ld, nG[537] = i3, nG[538] = ns) : ns = nG[538], nG[539] !== iG || nG[540] !== rS || nG[541] !== aV || nG[542] !== rR || nG[543] !== lE || nG[544] !== ej || nG[545] !== ls || nG[546] !== rk || nG[547] !== lN || nG[548] !== ld || nG[549] !== rC ? (nc = (e, t) => {
                if (a2.current) return;
                i2(null);
                let n = rS(t);
                n.shouldMinimize ? (0, f.flushSync)(() => {
                    null != n.bubbleDropPosition ? rk(n.bubbleDropPosition, !0) : iG && aV || rk(iG ? ej : n.requestedDockPosition, !0), rR()
                }) : (rC(n.requestedDockPosition, !0), null != lE && "restored" !== lE.stage && (lN({
                    ...lE,
                    stage: "restored"
                }), "minimized" === lE.stage && ld(iG ? null : {
                    target: ls
                }))), i0(!1)
            }, nG[539] = iG, nG[540] = rS, nG[541] = aV, nG[542] = rR, nG[543] = lE, nG[544] = ej, nG[545] = ls, nG[546] = rk, nG[547] = lN, nG[548] = ld, nG[549] = rC, nG[550] = nc) : nc = nG[550], nG[551] !== a6 || nG[552] !== a7 || nG[553] !== lm ? (nu = () => {
                lm(!1), i2(null), a2.current = !1, lR.current = !0, i0(!0), a6.stop(), a7.stop()
            }, nG[551] = a6, nG[552] = a7, nG[553] = lm, nG[554] = nu) : nu = nG[554], nG[555] !== l5 || nG[556] !== n7 || nG[557] !== iG || nG[558] !== iX || nG[559] !== lb || nG[560] !== lj || nG[561] !== lf || nG[562] !== lc || nG[563] !== ld || nG[564] !== l6 ? (nd = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!iG || iX) && lf(!0), lj(!0), (iX ? l6 && l5 : iG) && null == n7 && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !lb && null == ly.current && (ld(null), lc("expanded"))) : e.currentTarget.contains(e.target) && !a8.current?.contains(e.target) && (lj(!1), iX && e.target.closest("header[data-quick-chat-drag-handle]") && lf(!0))
            }, nG[555] = l5, nG[556] = n7, nG[557] = iG, nG[558] = iX, nG[559] = lb, nG[560] = lj, nG[561] = lf, nG[562] = lc, nG[563] = ld, nG[564] = l6, nG[565] = nd) : nd = nG[565], nG[566] !== a1 || nG[567] !== iK ? (nh = e => {
                iK || "Escape" !== e.key || (lR.current = !0, a1.cancel())
            }, nG[566] = a1, nG[567] = iK, nG[568] = nh) : nh = nG[568], nG[569] !== iF || nG[570] !== iK || nG[571] !== aA || nG[572] !== ro ? (nm = e => {
                if (iK || (lR.current = !1, lD.current = lP.current > 0 && e.target instanceof Element && null != e.target.closest("header[data-quick-chat-drag-handle]"), aA || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                    i = a8.current,
                    a = e.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                if (iF && null != a && i?.contains(a) && (n === a || e.target.contains(a))) t = i;
                else if (null == t || null != n && n !== t) return;
                e.preventDefault(), t.setPointerCapture(e.pointerId), ro(e)
            }, nG[569] = iF, nG[570] = iK, nG[571] = aA, nG[572] = ro, nG[573] = nm) : nm = nG[573], nG[574] !== lm ? (np = () => {
                lt.current?.contains(document.activeElement) || lm(!1)
            }, nG[574] = lm, nG[575] = np) : np = nG[575], nG[576] !== a1 || nG[577] !== tb || nG[578] !== nJ || nG[579] !== sn || nG[580] !== si || nG[581] !== sa || nG[582] !== t8 || nG[583] !== so || nG[584] !== sr || nG[585] !== ss || nG[586] !== sc || nG[587] !== su || nG[588] !== t9 || nG[589] !== sd || nG[590] !== nt || nG[591] !== ni || nG[592] !== na || nG[593] !== nl || nG[594] !== no || nG[595] !== nr || nG[596] !== ns || nG[597] !== nc || nG[598] !== nu || nG[599] !== nd || nG[600] !== nh || nG[601] !== nm || nG[602] !== np ? (nf = {
                ref: nJ,
                "aria-label": sn,
                "aria-labelledby": si,
                "aria-modal": sa,
                animate: t8,
                "data-quick-chat-drag-handle": so,
                "data-pip-obstacle": sr,
                "data-state": "open",
                drag: ss,
                dragConstraints: sc,
                dragElastic: su,
                dragControls: a1,
                dragListener: !1,
                dragMomentum: !1,
                initial: t9,
                role: sd,
                tabIndex: -1,
                style: nt,
                transition: ni,
                onBlurCapture: na,
                onClick: nl,
                onDoubleClick: no,
                onClickCapture: nr,
                onDrag: ns,
                onDragEnd: nc,
                onDragStart: nu,
                onFocusCapture: nd,
                onKeyDown: tb,
                onKeyDownCapture: nh,
                onPointerDownCapture: nm,
                onPointerLeave: np
            }, nG[576] = a1, nG[577] = tb, nG[578] = nJ, nG[579] = sn, nG[580] = si, nG[581] = sa, nG[582] = t8, nG[583] = so, nG[584] = sr, nG[585] = ss, nG[586] = sc, nG[587] = su, nG[588] = t9, nG[589] = sd, nG[590] = nt, nG[591] = ni, nG[592] = na, nG[593] = nl, nG[594] = no, nG[595] = nr, nG[596] = ns, nG[597] = nc, nG[598] = nu, nG[599] = nd, nG[600] = nh, nG[601] = nm, nG[602] = np, nG[603] = nf) : nf = nG[603];
            let sx = null == n3 ? "floating" : "content",
                sy = aJ ? "bottom" : "top";
            nG[604] !== a6 || nG[605] !== a7 || nG[606] !== lL || nG[607] !== ld ? (ng = e => {
                lL(e), e && (ld(null), a6.stop(), a7.stop())
            }, nG[604] = a6, nG[605] = a7, nG[606] = lL, nG[607] = ld, nG[608] = ng) : ng = nG[608], nG[609] !== e$.type || nG[610] !== r5 || nG[611] !== iG || nG[612] !== ov || nG[613] !== aJ || nG[614] !== iu || nG[615] !== aF || nG[616] !== rw || nG[617] !== i9 || nG[618] !== lf ? (nv = !iG && ov && "ready" === e$.type ? (0, i.jsx)("div", {
                ref: (0, k.a)(lt, aF, y.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iu && (aJ ? "top-full" : "bottom-full"), aJ ? "pt-3" : "pb-3"),
                "data-pip-obstacle": i9,
                onClickCapture: () => {
                    (iu ? le.current : a9.current)?.focus({
                        preventScroll: !0
                    }), lf(!1)
                },
                style: iu ? rw : void 0,
                children: r5
            }) : null, nG[609] = e$.type, nG[610] = r5, nG[611] = iG, nG[612] = ov, nG[613] = aJ, nG[614] = iu, nG[615] = aF, nG[616] = rw, nG[617] = i9, nG[618] = lf, nG[619] = nv) : nv = nG[619], nG[620] !== r5 || nG[621] !== iG || nG[622] !== ov || nG[623] !== aJ || nG[624] !== iu || nG[625] !== aF || nG[626] !== rw || nG[627] !== lj || nG[628] !== lf || nG[629] !== am ? (nb = iG && ov ? (0, i.jsx)(d.a.div, {
                initial: {
                    opacity: 0,
                    y: 8 * !am
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 8 * !am
                },
                transition: {
                    duration: .3 * !am,
                    ease: S.e
                },
                ref: (0, k.a)(lt, aF, y.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iu && (aJ ? "top-full" : "bottom-full"), iu && (aJ ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (iu ? le.current : a9.current)?.focus({
                        preventScroll: !0
                    }), lf(!1), lj(!1)
                },
                style: iu ? rw : void 0,
                children: iu ? (0, i.jsx)(x.c, {
                    variant: "notice",
                    children: r5
                }) : r5
            }, "response-preview") : null, nG[620] = r5, nG[621] = iG, nG[622] = ov, nG[623] = aJ, nG[624] = iu, nG[625] = aF, nG[626] = rw, nG[627] = lj, nG[628] = lf, nG[629] = am, nG[630] = nb) : nb = nG[630], nG[631] !== nb ? (nx = (0, i.jsx)(h.a, {
                initial: !1,
                children: nb
            }), nG[631] = nb, nG[632] = nx) : nx = nG[632], nG[633] !== oG || nG[634] !== iG || nG[635] !== i8 || nG[636] !== tg || nG[637] !== l3 || nG[638] !== aJ || nG[639] !== iK || nG[640] !== iu || nG[641] !== iR || nG[642] !== am || nG[643] !== oi ? (ny = iG && void 0 !== iR && !iK && !iu && (0, i.jsx)(ev, {
                compact: l3,
                preview: oi ? iR : null,
                reduceMotion: am,
                isDockedTop: aJ,
                opacity: oG,
                onExpand: tg
            }, i8), nG[633] = oG, nG[634] = iG, nG[635] = i8, nG[636] = tg, nG[637] = l3, nG[638] = aJ, nG[639] = iK, nG[640] = iu, nG[641] = iR, nG[642] = am, nG[643] = oi, nG[644] = ny) : ny = nG[644];
            let sw = aJ ? "top-full pt-2" : "bottom-full";
            nG[645] !== sw ? (nw = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", sw), nG[645] = sw, nG[646] = nw) : nw = nG[646], nG[647] !== aT || nG[648] !== lU || nG[649] !== nw ? (nz = (0, i.jsx)("div", {
                ref: aT,
                className: nw,
                hidden: lU
            }), nG[647] = aT, nG[648] = lU, nG[649] = nw, nG[650] = nz) : nz = nG[650];
            let sz = 0 === oN && "pt-2",
                sj = aJ ? "w-full" : "w-80",
                sS = oM && "left-1/2 -translate-x-1/2",
                sk = !oM && (oC ? "left-0" : "right-0"),
                sC = lU && iJ && "invisible";
            nG[651] !== sz || nG[652] !== sj || nG[653] !== sS || nG[654] !== sk || nG[655] !== sC ? (nj = (0, l.b)(C.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", sz, sj, sS, sk, sC), nG[651] = sz, nG[652] = sj, nG[653] = sS, nG[654] = sk, nG[655] = sC, nG[656] = nj) : nj = nG[656], nG[657] !== oN ? (nS = {
                marginTop: oN
            }, nG[657] = oN, nG[658] = nS) : nS = nG[658], nG[659] !== n9 || nG[660] !== aL || nG[661] !== i9 || nG[662] !== nj || nG[663] !== nS ? (nk = (0, i.jsx)("div", {
                ref: aL,
                className: nj,
                style: nS,
                "data-pip-obstacle": i9,
                children: n9
            }), nG[659] = n9, nG[660] = aL, nG[661] = i9, nG[662] = nj, nG[663] = nS, nG[664] = nk) : nk = nG[664], nG[665] !== t0 || nG[666] !== iG || nG[667] !== lU ? (nC = iG ? void 0 : {
                clipPath: t0,
                opacity: +!lU
            }, nG[665] = t0, nG[666] = iG, nG[667] = lU, nG[668] = nC) : nC = nG[668];
            let sM = !iu && "pointer-events-auto";
            nG[669] !== sM ? (nM = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", sM), nG[669] = sM, nG[670] = nM) : nM = nG[670], nG[671] !== lJ || nG[672] !== iG || nG[673] !== ry ? (nE = iG ? {
                clipPath: ry,
                opacity: lJ
            } : void 0, nG[671] = lJ, nG[672] = iG, nG[673] = ry, nG[674] = nE) : nE = nG[674];
            let sE = !!iu || void 0;
            nG[675] !== iG || nG[676] !== lu || nG[677] !== am ? (nN = am || !iG && null == lu ? {
                duration: 0
            } : {
                duration: .3,
                ease: S.e
            }, nG[675] = iG, nG[676] = lu, nG[677] = am, nG[678] = nN) : nN = nG[678], nG[679] !== lU || nG[680] !== rm || nG[681] !== ls || nG[682] !== lu || nG[683] !== ld ? (nR = e => {
                lu?.target === (lU ? "minimized" : ls) && "object" == typeof e && "clipPath" in e && e.clipPath === (lU ? rm : es) && ld(e => e === lu ? null : e)
            }, nG[679] = lU, nG[680] = rm, nG[681] = ls, nG[682] = lu, nG[683] = ld, nG[684] = nR) : nR = nG[684], nG[685] !== iG || nG[686] !== l3 || nG[687] !== aJ || nG[688] !== rR || nG[689] !== l6 ? (nP = !iG && !l6 && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", aJ ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(V.c, {
                    standalone: !0,
                    isCompact: l3,
                    onMinimize: rR
                })
            }), nG[685] = iG, nG[686] = l3, nG[687] = aJ, nG[688] = rR, nG[689] = l6, nG[690] = nP) : nP = nG[690], nG[691] !== iG || nG[692] !== rZ || nG[693] !== l3 || nG[694] !== iJ || nG[695] !== rR || nG[696] !== il || nG[697] !== l6 ? (n_ = (iG || l6) && (il?.({
                contextMenuTrigger: rZ,
                isCompact: l3,
                isDragging: iJ,
                onMinimize: rR
            }) ?? rZ), nG[691] = iG, nG[692] = rZ, nG[693] = l3, nG[694] = iJ, nG[695] = rR, nG[696] = il, nG[697] = l6, nG[698] = n_) : n_ = nG[698];
            let sN = l3 && "justify-end";
            nG[699] !== sN ? (nD = (0, l.b)("relative flex min-h-0 flex-1 flex-col", sN), nG[699] = sN, nG[700] = nD) : nD = nG[700];
            let sR = iG ? l3 : ae.followLatestTranscript;
            nG[701] !== ae || nG[702] !== sR ? (nT = {
                ...ae,
                isFloatingChatSurface: !0,
                followLatestTranscript: sR
            }, nG[701] = ae, nG[702] = sR, nG[703] = nT) : nT = nG[703];
            let sP = iG ? "absolute inset-x-0 overflow-hidden" : "contents";
            nG[704] !== lq || nG[705] !== iG || nG[706] !== oU ? (nL = iG ? {
                bottom: lq,
                height: oU
            } : void 0, nG[704] = lq, nG[705] = iG, nG[706] = oU, nG[707] = nL) : nL = nG[707], nG[708] !== oG || nG[709] !== oe || nG[710] !== as || nG[711] !== l3 || nG[712] !== a_ || nG[713] !== ar || nG[714] !== iC ? (nq = oe && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) bottom-0 px-4 py-3 text-sm text-default",
                "aria-hidden": as || !l3,
                style: {
                    opacity: oG
                },
                ref: a_,
                children: as ? (0, i.jsx)("span", {
                    className: "line-clamp-2 wrap-anywhere select-none",
                    dir: "auto",
                    children: ar
                }) : iC ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…"
                })
            }), nG[708] = oG, nG[709] = oe, nG[710] = as, nG[711] = l3, nG[712] = a_, nG[713] = ar, nG[714] = iC, nG[715] = nq) : nq = nG[715];
            let s_ = !iG && (l3 ? "hidden" : "flex"),
                sD = iG && "absolute inset-x-0 bottom-0 flex",
                sT = iG && "overflow-hidden";
            nG[716] !== s_ || nG[717] !== sD || nG[718] !== sT ? (nI = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", s_, sD, sT), nG[716] = s_, nG[717] = sD, nG[718] = sT, nG[719] = nI) : nI = nG[719], nG[720] !== lq || nG[721] !== iG || nG[722] !== oA || nG[723] !== oQ || nG[724] !== l3 ? (nF = iG ? {
                height: Math.max(0, oA - 46 - lq),
                opacity: l3 ? 0 : oQ
            } : void 0, nG[720] = lq, nG[721] = iG, nG[722] = oA, nG[723] = oQ, nG[724] = l3, nG[725] = nF) : nF = nG[725], nG[726] !== iG || nG[727] !== i6 || nG[728] !== l4 || nG[729] !== l3 || nG[730] !== iK || nG[731] !== lU || nG[732] !== i_ || nG[733] !== lc || nG[734] !== ld ? (nH = i6 && (!l4 || iG) ? i_?.(() => {
                ld(null), lc("compact")
            }, !l3 && !iK && !lU) : null, nG[726] = iG, nG[727] = i6, nG[728] = l4, nG[729] = l3, nG[730] = iK, nG[731] = lU, nG[732] = i_, nG[733] = lc, nG[734] = ld, nG[735] = nH) : nH = nG[735], nG[736] !== iG || nG[737] !== i5 || nG[738] !== i6 || nG[739] !== l3 || nG[740] !== o$ ? (nA = !i6 && (0, i.jsx)(h.a, {
                initial: !1,
                children: (iG || !l3) && null != i5 && (0, i.jsx)(d.a.div, {
                    className: "flex min-h-0 flex-1 flex-col",
                    initial: !iG && {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: o$,
                        ease: S.e
                    },
                    children: i5
                }, "empty-state")
            }), nG[736] = iG, nG[737] = i5, nG[738] = i6, nG[739] = l3, nG[740] = o$, nG[741] = nA) : nA = nG[741], nG[742] !== l3 || nG[743] !== aC || nG[744] !== nI || nG[745] !== nF || nG[746] !== nH || nG[747] !== nA ? (nW = (0, i.jsxs)(d.a.div, {
                ref: aC,
                "aria-hidden": l3,
                className: nI,
                inert: l3,
                style: nF,
                children: [nH, nA]
            }), nG[742] = l3, nG[743] = aC, nG[744] = nI, nG[745] = nF, nG[746] = nH, nG[747] = nA, nG[748] = nW) : nW = nG[748], nG[749] !== iG || nG[750] !== tg || nG[751] !== oe || nG[752] !== l3 || nG[753] !== r_ || nG[754] !== ar ? (nO = iG && l3 && oe && (0, i.jsx)(E.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "absolute inset-0",
                "aria-label": r_,
                "aria-description": ar ?? void 0,
                "data-quick-chat-drag-handle": !0,
                onClick: tg
            }), nG[749] = iG, nG[750] = tg, nG[751] = oe, nG[752] = l3, nG[753] = r_, nG[754] = ar, nG[755] = nO) : nO = nG[755], nG[756] !== sP || nG[757] !== nL || nG[758] !== nq || nG[759] !== nW || nG[760] !== nO ? (nK = (0, i.jsxs)(d.a.div, {
                className: sP,
                style: nL,
                children: [nq, nW, nO]
            }), nG[756] = sP, nG[757] = nL, nG[758] = nq, nG[759] = nW, nG[760] = nO, nG[761] = nK) : nK = nG[761], nG[762] !== nT || nG[763] !== nK ? (nV = (0, i.jsx)(ei.b, {
                value: nT,
                children: nK
            }), nG[762] = nT, nG[763] = nK, nG[764] = nV) : nV = nG[764];
            let sL = il?.({
                contextMenuTrigger: rK,
                isCompact: l3,
                isDragging: iJ,
                onMinimize: rR
            }) ?? rK;
            nG[765] !== nD || nG[766] !== nV || nG[767] !== sL ? (nB = (0, i.jsxs)("div", {
                className: nD,
                children: [nV, sL]
            }), nG[765] = nD, nG[766] = nV, nG[767] = sL, nG[768] = nB) : nB = nG[768], nG[769] !== aG || nG[770] !== iu || nG[771] !== nC || nG[772] !== nM || nG[773] !== nE || nG[774] !== sE || nG[775] !== nN || nG[776] !== nR || nG[777] !== nP || nG[778] !== n_ || nG[779] !== nB ? (nY = (0, i.jsxs)(d.a.div, {
                "aria-hidden": iu,
                animate: nC,
                className: nM,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": aG,
                style: nE,
                initial: !1,
                inert: sE,
                transition: nN,
                onAnimationComplete: nR,
                children: [nP, n_, nB]
            }), nG[769] = aG, nG[770] = iu, nG[771] = nC, nG[772] = nM, nG[773] = nE, nG[774] = sE, nG[775] = nN, nG[776] = nR, nG[777] = nP, nG[778] = n_, nG[779] = nB, nG[780] = nY) : nY = nG[780], nG[781] !== M || nG[782] !== rN || nG[783] !== l3 || nG[784] !== lU || nG[785] !== rh || nG[786] !== ie || nG[787] !== rE || nG[788] !== rL || nG[789] !== rT || nG[790] !== am || nG[791] !== r6 || nG[792] !== t1 || nG[793] !== t2 || nG[794] !== t3 || nG[795] !== r7 || nG[796] !== r8 || nG[797] !== r9 || nG[798] !== t4 || nG[799] !== t5 || nG[800] !== t6 || nG[801] !== se || nG[802] !== st || nG[803] !== nf || nG[804] !== sx || nG[805] !== sy || nG[806] !== ng || nG[807] !== nv || nG[808] !== nx || nG[809] !== ny || nG[810] !== nz || nG[811] !== nk || nG[812] !== nY ? (n$ = (0, i.jsxs)(M, {
                allowCompactResize: !0,
                animateSurface: r6,
                contentStyle: t1,
                surfaceStyle: t2,
                currentSize: t3,
                heightLabel: rL,
                resizeFromCenter: r7,
                fixedHorizontalEdge: r8,
                isCompact: l3,
                isCompactChromeRevealed: r9,
                isMinimized: lU,
                keepSurfaceInset: !0,
                maximumSize: t4,
                minimizedContent: t5,
                minimizedSurfaceBounds: rh,
                minimumSize: t6,
                prefersCompactPresentation: !0,
                resizable: se,
                background: st,
                sectionRef: a9,
                sectionProps: nf,
                shouldReduceMotion: am,
                variant: sx,
                verticalResizeEdge: sy,
                widthLabel: rT,
                onResize: rE,
                onResizeEnd: rN,
                onResizingChange: ng,
                children: [nv, nx, ny, nz, nk, nY, ie]
            }), nG[781] = M, nG[782] = rN, nG[783] = l3, nG[784] = lU, nG[785] = rh, nG[786] = ie, nG[787] = rE, nG[788] = rL, nG[789] = rT, nG[790] = am, nG[791] = r6, nG[792] = t1, nG[793] = t2, nG[794] = t3, nG[795] = r7, nG[796] = r8, nG[797] = r9, nG[798] = t4, nG[799] = t5, nG[800] = t6, nG[801] = se, nG[802] = st, nG[803] = nf, nG[804] = sx, nG[805] = sy, nG[806] = ng, nG[807] = nv, nG[808] = nx, nG[809] = ny, nG[810] = nz, nG[811] = nk, nG[812] = nY, nG[813] = n$) : n$ = nG[813];
            let sq = n$;
            return nG[814] !== ad ? (nX = {
                id: ad
            }, nG[814] = ad, nG[815] = nX) : nX = nG[815], nG[816] !== iG || nG[817] !== aP ? (nZ = iG && (0, i.jsx)("div", {
                ref: aP,
                "aria-hidden": !0,
                className: (0, l.b)(ea.a, "pointer-events-none invisible absolute")
            }), nG[816] = iG, nG[817] = aP, nG[818] = nZ) : nZ = nG[818], nG[819] !== i1 || nG[820] !== n3 || nG[821] !== iJ || nG[822] !== iu || nG[823] !== n8 || nG[824] !== i3 || nG[825] !== oD || nG[826] !== aH ? (nQ = i3 && iJ && null != i1 && (0, i.jsx)(ef, {
                activeIndicator: i1,
                fixed: null == n3,
                isMinimized: iu,
                reservedDockPosition: n8,
                viewportWidth: aH,
                viewportHeight: oD
            }), nG[819] = i1, nG[820] = n3, nG[821] = iJ, nG[822] = iu, nG[823] = n8, nG[824] = i3, nG[825] = oD, nG[826] = aH, nG[827] = nQ) : nQ = nG[827], nG[828] !== sq || nG[829] !== nX || nG[830] !== nZ || nG[831] !== nQ ? (nU = (0, i.jsxs)(O.a, {
                value: nX,
                children: [nZ, nQ, sq]
            }), nG[828] = sq, nG[829] = nX, nG[830] = nZ, nG[831] = nQ, nG[832] = nU) : nU = nG[832], nU
        }

        function em() {
            return new Set
        }
        let ep = {
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

        function ef(e) {
            let t, n, o = (0, a.c)(14),
                {
                    activeIndicator: r,
                    fixed: s,
                    isMinimized: c,
                    reservedDockPosition: u,
                    viewportWidth: d,
                    viewportHeight: h
                } = e,
                m = void 0 !== s && s,
                p = void 0 !== c && c;
            if (o[0] !== r || o[1] !== m || o[2] !== p || o[3] !== u || o[4] !== h || o[5] !== d) {
                let e, n = eg(u, p, !0);
                o[7] !== r || o[8] !== m || o[9] !== h || o[10] !== d ? (e = e => {
                    let t = r?.endsWith(e) === !0,
                        n = (d - 40) / 2;
                    "bottom-left" === e ? n = 11 : "bottom-right" === e && (n = d - 11 - 40);
                    let a = ep[e];
                    return (0, i.jsx)("svg", {
                        "aria-hidden": !0,
                        className: (0, l.b)("pointer-events-none fill-none stroke-blue/40 [stroke-width:4px] data-active:stroke-blue data-active:[stroke-width:5px] motion-safe:transition-[stroke,stroke-width,scale] motion-safe:duration-basic motion-safe:ease-enter-snappy data-active:scale-[1.15]", "size-10 z-20 data-active:z-40", m ? "fixed" : "absolute", a.className),
                        "data-floating-chat-drop-indicator": e,
                        "data-active": t || void 0,
                        "data-active-drop-target": t ? r : void 0,
                        style: {
                            left: n,
                            top: h - 40 - 11
                        },
                        viewBox: "0 0 40 40",
                        strokeLinecap: "round",
                        children: (0, i.jsx)("path", {
                            d: a.path
                        })
                    }, e)
                }, o[7] = r, o[8] = m, o[9] = h, o[10] = d, o[11] = e) : e = o[11], t = eo.filter(e => n.includes(e)).map(e), o[0] = r, o[1] = m, o[2] = p, o[3] = u, o[4] = h, o[5] = d, o[6] = t
            } else t = o[6];
            return o[12] !== t ? (n = (0, i.jsx)(i.Fragment, {
                children: t
            }), o[12] = t, o[13] = n) : n = o[13], n
        }

        function eg(e, t, n) {
            let i = eo;
            return t && (i = n ? er : ["bottom-right"]), Array.from(new Set(i.map(t => (0, B.f)(t, e))))
        }

        function ev(e) {
            let t, n, o, r, s, c = (0, a.c)(17),
                {
                    compact: u,
                    preview: m,
                    isDockedTop: p,
                    opacity: f,
                    reduceMotion: g,
                    onExpand: v
                } = e,
                b = p ? "top-full mt-2" : "bottom-full mb-2";
            c[0] !== b ? (t = (0, l.b)("pointer-events-none absolute inset-x-(--floating-panel-inset) -z-1 grid grid-cols-1 items-end justify-items-start px-4", b), c[0] = b, c[1] = t) : t = c[1], c[2] !== f ? (n = {
                opacity: f
            }, c[2] = f, c[3] = n) : n = c[3];
            let x = !u || !m;
            return c[4] !== u || c[5] !== p || c[6] !== v || c[7] !== m || c[8] !== g ? (o = u && m && (0, i.jsx)(d.a.div, {
                className: (0, l.b)("col-start-1 row-start-1 max-w-full", p ? "origin-top-left" : "origin-bottom-left"),
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
                children: (0, i.jsx)(E.a, {
                    unstyled: !0,
                    className: "pointer-events-auto max-w-full text-start",
                    "data-quick-chat-drag-handle": !0,
                    onClick: v,
                    children: m.content
                })
            }, m.id), c[4] = u, c[5] = p, c[6] = v, c[7] = m, c[8] = g, c[9] = o) : o = c[9], c[10] !== o ? (r = (0, i.jsx)(h.a, {
                children: o
            }), c[10] = o, c[11] = r) : r = c[11], c[12] !== t || c[13] !== n || c[14] !== x || c[15] !== r ? (s = (0, i.jsx)(d.a.div, {
                className: t,
                style: n,
                inert: x,
                children: r
            }), c[12] = t, c[13] = n, c[14] = x, c[15] = r, c[16] = s) : s = c[16], s
        }

        function eb(e, t, n) {
            return t instanceof Node && (e.contains(t) || t instanceof Element && (null != t.closest("[data-composer-overlay-floating-ui], [data-content-search-bar], [data-composer-focus-target]") || null != t.closest("[data-floating-chat-annotation-layer]") || t.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === n))
        }

        function ex(e, t, n) {
            return Math.max(t, Math.min(e, n))
        }

        function ey() {
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
            h = n("hjXH"),
            m = n("FJqt");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, r, s = (0, a.c)(12),
                    {
                        children: c,
                        isCompact: u,
                        isVisible: d,
                        isDisabled: h
                    } = e,
                    m = void 0 !== u && u,
                    p = !d || !!h || void 0,
                    f = m ? Number(d) : "var(--quick-chat-expansion, 1)";
                s[0] !== f ? (t = {
                    opacity: f
                }, s[0] = f, s[1] = t) : t = s[1];
                let g = !d || !!h || void 0,
                    v = m && "border-b border-default";
                return s[2] !== v ? (n = (0, o.b)("flex h-toolbar cursor-interaction touch-none items-center justify-between px-2 select-none", v), s[2] = v, s[3] = n) : n = s[3], s[4] !== c || s[5] !== n ? (l = (0, i.jsx)("div", {
                    className: n,
                    children: c
                }), s[4] = c, s[5] = n, s[6] = l) : l = s[6], s[7] !== p || s[8] !== t || s[9] !== g || s[10] !== l ? (r = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden",
                    "aria-hidden": p,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: g,
                    children: l
                }), s[7] = p, s[8] = t, s[9] = g, s[10] = l, s[11] = r) : r = s[11], r
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
                        onMinimize: m,
                        standalone: p
                    } = e,
                    f = void 0 !== p && p,
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
                }), r[4] = l) : l = r[4], r[5] !== m || r[6] !== t || r[7] !== v || r[8] !== b || r[9] !== n ? (o = (0, i.jsx)(c.a, {
                    "aria-label": t,
                    color: v,
                    size: b,
                    uniform: !0,
                    onClick: m,
                    onPointerDown: n,
                    children: l
                }), r[5] = m, r[6] = t, r[7] = v, r[8] = b, r[9] = n, r[10] = o) : o = r[10], o
            },
            d: function(e) {
                let t, n, o, r, d, h = (0, a.c)(13),
                    {
                        minimizeButton: p,
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
                    asset: m.a
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
                }), h[7] = b, h[8] = o, h[9] = r) : r = h[9], h[10] !== p || h[11] !== r ? (d = (0, i.jsxs)("div", {
                    className: "-me-0.5 flex shrink-0 items-center [--spacing-token-button-composer:--spacing(8)]",
                    children: [p, r]
                }), h[10] = p, h[11] = r, h[12] = d) : d = h[12], d
            },
            e: function(e) {
                let t, n, l, s, c, u, h, m = (0, a.c)(28),
                    {
                        animateChrome: p,
                        expandOnClick: f,
                        children: g,
                        isChromeRevealed: v,
                        isCompact: b,
                        isDisabled: x,
                        presentationToggle: y,
                        reserveSpace: w
                    } = e,
                    z = void 0 !== f && f,
                    j = !b && "shrink-0";
                m[0] !== j ? (t = (0, o.b)("relative min-h-0 overflow-hidden", j), m[0] = j, m[1] = t) : t = m[1];
                let S = !v || !!x || void 0,
                    k = v || w ? 46 : 0,
                    C = +!!v;
                m[2] !== k || m[3] !== C ? (n = {
                    height: k,
                    opacity: C
                }, m[2] = k, m[3] = C, m[4] = n) : n = m[4];
                let M = !v || !!x || void 0;
                m[5] !== p || m[6] !== z ? (l = p ? {
                    duration: .3,
                    ease: d.e,
                    ...z ? {
                        opacity: {
                            duration: 0
                        }
                    } : {}
                } : {
                    duration: 0
                }, m[5] = p, m[6] = z, m[7] = l) : l = m[7], m[8] !== b || m[9] !== y ? (s = null != y ? (0, i.jsx)("button", {
                    className: "pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    "aria-label": y.label,
                    "aria-expanded": !b,
                    type: "button",
                    onClick: y.onToggle
                }) : null, m[8] = b, m[9] = y, m[10] = s) : s = m[10];
                let E = !z && null != y && b && "cursor-n-resize",
                    N = !z && null != y && !b && "cursor-s-resize",
                    R = (z || null == y) && "cursor-interaction",
                    P = b && "mx-1.5 border-b border-default px-2",
                    _ = !b && "px-3";
                return m[11] !== E || m[12] !== N || m[13] !== R || m[14] !== P || m[15] !== _ ? (c = (0, o.b)("flex h-toolbar touch-none select-none items-center justify-between", E, N, R, P, _), m[11] = E, m[12] = N, m[13] = R, m[14] = P, m[15] = _, m[16] = c) : c = m[16], m[17] !== g || m[18] !== c ? (u = (0, i.jsx)("div", {
                    className: c,
                    children: g
                }), m[17] = g, m[18] = c, m[19] = u) : u = m[19], m[20] !== s || m[21] !== u || m[22] !== t || m[23] !== S || m[24] !== n || m[25] !== M || m[26] !== l ? (h = (0, i.jsxs)(r.a.header, {
                    className: t,
                    "aria-hidden": S,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: M,
                    transition: l,
                    children: [s, u]
                }), m[20] = s, m[21] = u, m[22] = t, m[23] = S, m[24] = n, m[25] = M, m[26] = l, m[27] = h) : h = m[27], h
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
            let t, n, l, c, d, h, m, p, f, g = (0, a.c)(35),
                {
                    edge: v,
                    getCurrentSize: b,
                    maximumSize: x,
                    resizeFromCenter: y,
                    minimumSize: w,
                    onResizeEnd: z,
                    onResizingChange: j,
                    setSize: S,
                    verticalEdge: k
                } = e,
                C = void 0 === v ? "left" : v,
                M = void 0 !== y && y,
                E = void 0 === k ? "top" : k,
                N = (0, s.c)(),
                R = (0, r.useRef)(null);
            g[0] !== C || g[1] !== x || g[2] !== w || g[3] !== M || g[4] !== S || g[5] !== E || g[6] !== N ? (t = e => {
                let t = R.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                e.preventDefault();
                let n = {
                    height: u(t.startSize.height + ("top" === E ? -1 : 1) * ((0, s.b)(e.clientY, N) - t.startPointer.y), w.height, x.height),
                    width: u(t.startSize.width + (M ? 2 : 1) * ("left" === C ? -1 : 1) * ((0, s.b)(e.clientX, N) - t.startPointer.x), w.width, x.width)
                };
                t.didMove || (t.didMove = n.height !== t.startSize.height || n.width !== t.startSize.width), t.lastSize = n, S(n)
            }, g[0] = C, g[1] = x, g[2] = w, g[3] = M, g[4] = S, g[5] = E, g[6] = N, g[7] = t) : t = g[7];
            let P = t;
            g[8] !== z || g[9] !== j ? (n = (e, t) => {
                let n = R.current;
                n?.pointerId === e.pointerId && (R.current = null, j?.(!1), t && n.didMove && z?.(n.lastSize))
            }, g[8] = z, g[9] = j, g[10] = n) : n = g[10];
            let _ = n,
                D = "top" === E ? "top-0" : "bottom-0",
                T = "left" === C ? "left-0" : "right-0",
                L = "left" === C == ("top" === E) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return g[11] !== D || g[12] !== T || g[13] !== L ? (l = (0, o.b)("group absolute z-50 flex size-4 touch-none select-none", D, T, L), g[11] = D, g[12] = T, g[13] = L, g[14] = l) : l = g[14], g[15] !== _ ? (c = e => {
                _(e, !1)
            }, g[15] = _, g[16] = c) : c = g[16], g[17] !== P || g[18] !== _ ? (d = e => {
                P(e), _(e, !0)
            }, g[17] = P, g[18] = _, g[19] = d) : d = g[19], g[20] !== b || g[21] !== j || g[22] !== N ? (h = e => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId);
                let t = b();
                R.current = {
                    didMove: !1,
                    lastSize: t,
                    pointerId: e.pointerId,
                    startPointer: {
                        x: (0, s.b)(e.clientX, N),
                        y: (0, s.b)(e.clientY, N)
                    },
                    startSize: t
                }, j?.(!0)
            }, g[20] = b, g[21] = j, g[22] = N, g[23] = h) : h = g[23], g[24] !== P || g[25] !== _ ? (m = e => {
                P(e), _(e, !0)
            }, g[24] = P, g[25] = _, g[26] = m) : m = g[26], g[27] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, i.jsx)("div", {
                className: "pointer-events-none m-auto h-px w-2 rotate-45 bg-text/25 opacity-0 group-hover:opacity-100 group-active:opacity-100"
            }), g[27] = p) : p = g[27], g[28] !== P || g[29] !== c || g[30] !== d || g[31] !== h || g[32] !== m || g[33] !== l ? (f = (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: l,
                onLostPointerCapture: c,
                onPointerCancel: d,
                onPointerDown: h,
                onPointerMove: P,
                onPointerUp: m,
                children: p
            }), g[28] = P, g[29] = c, g[30] = d, g[31] = h, g[32] = m, g[33] = l, g[34] = f) : f = g[34], f
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
                    extendIntoToolbar: m,
                    fixedHorizontalEdge: p,
                    resizeFromCenter: f,
                    heightLabel: g,
                    maximumSize: v,
                    minimumSize: b,
                    onResize: x,
                    onResizeEnd: y,
                    onResizingChange: w,
                    verticalEdge: z,
                    widthLabel: j
                } = e,
                S = void 0 === m || m,
                k = void 0 !== f && f,
                C = void 0 === z ? "top" : z;
            if (s[0] !== u || s[1] !== h || s[2] !== S || s[3] !== p || s[4] !== g || s[5] !== v || s[6] !== b || s[7] !== x || s[8] !== y || s[9] !== w || s[10] !== k || s[11] !== C || s[12] !== j) {
                let e, a;
                s[16] !== p ? (e = e => e !== p, s[16] = p, s[17] = e) : e = s[17];
                let r = d.filter(e);
                s[18] !== u || s[19] !== h || s[20] !== S || s[21] !== v || s[22] !== b || s[23] !== x || s[24] !== y || s[25] !== w || s[26] !== k || s[27] !== j ? (a = e => (0, i.jsx)(l.a, {
                    ariaLabel: j,
                    defaultSize: h.width,
                    edge: e,
                    resizeFromCenter: k,
                    extendIntoToolbar: S,
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
                }, e), s[18] = u, s[19] = h, s[20] = S, s[21] = v, s[22] = b, s[23] = x, s[24] = y, s[25] = w, s[26] = k, s[27] = j, s[28] = a) : a = s[28], t = r.map(a), s[29] !== u || s[30] !== h || s[31] !== g || s[32] !== v || s[33] !== b || s[34] !== x || s[35] !== y || s[36] !== w || s[37] !== C ? (n = null != C && (0, i.jsx)(l.a, {
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
                }, e)), s[0] = u, s[1] = h, s[2] = S, s[3] = p, s[4] = g, s[5] = v, s[6] = b, s[7] = x, s[8] = y, s[9] = w, s[10] = k, s[11] = C, s[12] = j, s[13] = t, s[14] = n, s[15] = o
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