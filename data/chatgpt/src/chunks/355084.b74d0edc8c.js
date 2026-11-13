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
        var R = n("hZax"),
            N = n("V8uZ"),
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
                    prefersCompactPresentation: $,
                    resizable: V,
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
                ei = void 0 === V || V,
                ea = (0, R.f)("2163293173"),
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
                ec = "panel" !== b || $;
            f[6] !== X.ref || f[7] !== Y ? (o = (0, T.a)(Y, X.ref, E.c), f[6] = X.ref, f[7] = Y, f[8] = o) : o = f[8];
            let eu = !ea && $ && "frame-Xbg62r",
                ed = $ && "group/chat-frame focus:outline-none",
                eh = null != W ? "pointer-events-none" : "pointer-events-auto",
                ep = $ && L.a.floatingSurface,
                em = F && L.a.singleLineSurface,
                ef = "floating" === Q ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                eg = $ ? "overflow-visible" : "overflow-hidden";
            f[9] !== eu || f[10] !== ed || f[11] !== eh || f[12] !== ep || f[13] !== em || f[14] !== ef || f[15] !== eg ? (r = (0, l.b)("flex flex-col text-default", eu, ed, eh, ep, em, ef, eg), f[9] = eu, f[10] = ed, f[11] = eh, f[12] = ep, f[13] = em, f[14] = ef, f[15] = eg, f[16] = r) : r = f[16];
            let ev = null != w ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== ev ? (s = (0, l.b)(ev), f[17] = ev, f[18] = s) : s = f[18], f[19] !== et || f[20] !== b || f[21] !== es || f[22] !== F || f[23] !== A || f[24] !== $ || f[25] !== U || f[26] !== eo || f[27] !== Z ? (c = $ ? (0, i.jsx)(k.c, {
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
                        ease: N.e
                    },
                    children: A
                }, "legacy-background")
            }) : null, f[19] = et, f[20] = b, f[21] = es, f[22] = F, f[23] = A, f[24] = $, f[25] = U, f[26] = eo, f[27] = Z, f[28] = c) : c = f[28], f[29] !== ee || f[30] !== y || f[31] !== z || f[32] !== j || f[33] !== D || f[34] !== _ || f[35] !== I || f[36] !== H || f[37] !== B || f[38] !== K || f[39] !== O || f[40] !== ei || f[41] !== en || f[42] !== eo || f[43] !== G || f[44] !== J ? (u = ei && (!D || ee) && !_ ? (0, i.jsx)("div", {
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
                j = (0, R.f)("2163293173"),
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
                }), f[10] = E, f[11] = M, f[12] = e) : e = f[12], f[13] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(_.lc, {
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
                }), f[25] = E, f[26] = r) : r = f[26], f[27] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(_.wj, {
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
            }), f[47] = E, f[48] = u) : u = f[48], f[49] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(_.wj, {
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
                g = (0, R.f)("2163293173"),
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
                ease: N.e
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
        var $ = n("EFj1"),
            V = n("BjWL"),
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
            eS = (0, p.u)(eu.a, eR, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (e, t) => e.width === t.width && e.height === t.height,
                onMount: e => {
                    let t = window.visualViewport,
                        n = () => e(eR());
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
            let t, n, M, I, ez, eC, eR, eN, eT, eL, eD, eq, e_, eF, eI, eA, eW, eH, eB, eK, eO, e$, eV, eX, eY, eZ, eU, eQ, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tp, tm, tf, tg, tv, tb, tx, ty, tw, tS, tz, tC, tj, tk, tE, tM, tP, tR, tN, tT, tL, tD, tq, t_, tF, tI, tA, tW, tH, tB, tK, tO, t$, tV, tX, tY, tZ, tU, tQ, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, np, nm, nf, ng, nv, nb, nx, ny, nw, nS, nz, nC, nj, nk, nE, nM, nP, nR, nN, nT, nL, nD, nq, n_, nF, nI, nA, nW, nH, nB, nK, nO, n$, nV, nX, nY, nZ, nU, nQ, nG, nJ, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, ie, it, ii, ia, il, io, ir, is, ic, iu, id, ih = (0, a.c)(882),
                {
                    ref: ip,
                    animateOnMount: im,
                    background: ig,
                    renderComposer: iv,
                    containerSize: ib,
                    previewSide: ix,
                    hasPagePicker: iy,
                    dockThreadKey: iw,
                    canDock: iS,
                    preserveLayoutOnEscape: iz,
                    compactInputPosition: iC,
                    reservedDockPosition: ij,
                    footer: ik,
                    overlay: iE,
                    renderHeaderContent: iM,
                    headerInteractionDisabled: iP,
                    allowLegacyHeaderToggle: iR,
                    renderMenu: iN,
                    forceExpanded: iT,
                    hasConversation: iL,
                    isHidden: iD,
                    isContentChat: iq,
                    isMinimized: i_,
                    isCollisionObstacle: iF,
                    onDragOver: iI,
                    onDragEnd: iA,
                    onEscape: iW,
                    onMinimizedChange: iH,
                    onResize: iB,
                    presentation: iK,
                    onPresentationChange: iO,
                    title: i$,
                    titleContent: iV,
                    minimizedIcon: iX,
                    minimizedMenuItems: iY,
                    restoreLabel: iZ,
                    statusState: iU,
                    titleStatusState: iQ,
                    notifications: iG,
                    workingPreview: iJ,
                    responsePreview: i0,
                    showResponsePreview: i1,
                    previewBubble: i2,
                    emptyState: i3,
                    renderTranscript: i4,
                    hasTranscript: i5,
                    pendingFormId: i6,
                    showComposerDivider: i7,
                    showHeader: i8
                } = e,
                i9 = void 0 !== im && im,
                ae = void 0 === iS || iS,
                at = void 0 !== iz && iz,
                an = void 0 !== iP && iP,
                ai = void 0 === iR || iR,
                aa = void 0 !== iT && iT,
                al = void 0 !== iD && iD,
                ao = void 0 !== iq && iq,
                ar = void 0 === iQ ? iU : iQ,
                as = void 0 === i8 || i8,
                ac = (0, p.y)(eu.a),
                au = (0, p.y)(ed.a),
                ad = (0, p.z)(void 0 === i6 ? null : i6),
                ah = null != ad,
                ap = (0, R.f)("2163293173"),
                am = (0, m.useContext)(y.a),
                af = (0, m.useContext)(x.a)?.workspaceTargetWidth,
                ag = (0, m.useContext)(b.c),
                av = ap && !al && null != ix && null != ag && null != am,
                ab = (0, p.z)(!!ap && void 0 !== ix && es.c),
                ax = av && !ab,
                ay = (0, p.z)(av ? w.gb : null),
                aw = (0, m.useRef)(null),
                aS = (0, p.z)(!!av && w.jb),
                az = ap ? i3 : void 0,
                aC = i5 ?? null != i4,
                aj = aC || null != az,
                ak = (0, p.z)(iw) ?? void 0,
                aE = void 0 === iF || iF ? "quick-chat" : void 0,
                aM = (0, m.useContext)(ep.b),
                aP = (0, p.z)(iG),
                aR = ah ? H.a : aP ?? H.a,
                aN = (0, p.z)(iU);
            ih[0] !== aN || ih[1] !== aR.type ? (t = "ready" === aR.type ? {
                ...aN,
                type: aN?.type ?? "idle",
                unread: !0
            } : aN, ih[0] = aN, ih[1] = aR.type, ih[2] = t) : t = ih[2];
            let aT = t,
                aL = (0, p.z)(ar),
                aD = ar === iU ? aT : aL;
            ih[3] !== ap || ih[4] !== i0 ? (n = (0, p.c)(eu.a, e => {
                let {
                    get: t
                } = e;
                return !!ap && null != i0 && !!("string" == typeof i0 ? i0 : t(i0))
            }), ih[3] = ap, ih[4] = i0, ih[5] = n) : n = ih[5];
            let aq = (0, p.z)(n),
                a_ = (0, g.a)(),
                aF = (0, m.useId)(),
                aI = (0, m.useId)(),
                aA = (0, j.c)(),
                aW = (0, eo.a)(),
                aH = (0, p.z)(eS);
            ih[6] !== aH.height || ih[7] !== aA ? (M = (0, j.b)(aH.height, aA), ih[6] = aH.height, ih[7] = aA, ih[8] = M) : M = ih[8];
            let aB = M,
                aK = (0, j.b)(aH.width, aA),
                [aO, a$] = (0, m.useState)(0),
                [aV, aX] = (0, m.useState)(!1),
                [aY, aZ] = (0, m.useState)(0),
                [aU, aQ] = (0, m.useState)(null),
                [aG, aJ] = (0, m.useState)(null),
                [a0, a1] = (0, m.useState)(0),
                [a2, a3] = (0, m.useState)(null);
            ih[9] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                e.contentRect.width > 0 && a3(e.contentRect.width)
            }, ih[9] = I) : I = ih[9];
            let a4 = (0, A.b)(I);
            ih[10] === Symbol.for("react.memo_cache_sentinel") ? (ez = e => {
                a1((0, ec.a)(e).height)
            }, ih[10] = ez) : ez = ih[10];
            let a5 = (0, A.b)(ez);
            ih[11] === Symbol.for("react.memo_cache_sentinel") ? (eC = e => {
                aZ((0, ec.a)(e).height)
            }, ih[11] = eC) : eC = ih[11];
            let a6 = (0, A.b)(eC);
            ih[12] !== a6 ? (eR = e => {
                aQ(e), a6(e)
            }, ih[12] = a6, ih[13] = eR) : eR = ih[13];
            let a7 = (0, eb.a)(eR);
            ih[14] === Symbol.for("react.memo_cache_sentinel") ? (eN = e => {
                a$((0, ec.a)(e).height)
            }, ih[14] = eN) : eN = ih[14];
            let a8 = (0, A.b)(eN),
                [a9, le] = (0, m.useState)(0);
            ih[15] === Symbol.for("react.memo_cache_sentinel") ? (eT = e => {
                le((0, ec.a)(e).height)
            }, ih[15] = eT) : eT = ih[15];
            let lt = (0, A.b)(eT),
                ln = ib?.width ?? aK,
                li = aK < 640;
            ih[16] !== ae || ih[17] !== ap ? (eL = () => ae ? ap ? "bottom-right" : (0, J.a)() : "bottom-center", ih[16] = ae, ih[17] = ap, ih[18] = eL) : eL = ih[18];
            let [la] = (0, m.useState)(eL), ll = ak ?? null;
            ih[19] !== ll ? (eD = {
                threadKey: ll,
                minimized: !1
            }, ih[19] = ll, ih[20] = eD) : eD = ih[20];
            let lo = (0, p.x)(ae ? en.a : void 0, eD),
                lr = ao && ae,
                ls = ak ?? null;
            ih[21] !== ls ? (eq = {
                threadKey: ls,
                minimized: !0
            }, ih[21] = ls, ih[22] = eq) : eq = ih[22];
            let lc = (0, p.x)(ae && !ao ? en.a : void 0, eq);
            ih[23] === Symbol.for("react.memo_cache_sentinel") ? (e_ = {}, ih[23] = e_) : e_ = ih[23];
            let [lu, ld] = (0, m.useState)(e_), lh = (null != ak || ap ? null : lu.expanded) ?? lo ?? la, lp = null == iC ? lh : lu.expanded ?? iC, lm = li ? "bottom-center" : lp;
            ih[24] !== ap || ih[25] !== ak || ih[26] !== lm || ih[27] !== lr || ih[28] !== lu || ih[29] !== lc ? (eF = "bottom-right", lr ? eF = (0, et.a)(lm) : ap || (eF = (null == ak ? lu.minimized : null) ?? lc ?? "bottom-right"), ih[24] = ap, ih[25] = ak, ih[26] = lm, ih[27] = lr, ih[28] = lu, ih[29] = lc, ih[30] = eF) : eF = ih[30];
            let lf = ae ? (0, et.f)(i_ ? eF : lm, ij) : "bottom-center",
                lg = lf.startsWith("top"),
                lv = (0, p.z)(ea),
                lb = (0, o.a)(),
                lx = (0, m.useRef)(!1);
            ih[31] === Symbol.for("react.memo_cache_sentinel") ? (eI = {
                x: 0,
                y: 0
            }, ih[31] = eI) : eI = ih[31];
            let ly = (0, m.useRef)(eI),
                lw = (0, m.useRef)(null),
                lS = (0, m.useRef)(null),
                lz = (0, r.a)(0),
                lC = (0, r.a)(0),
                lj = (0, m.useRef)(null),
                lk = (0, m.useRef)(null),
                lE = (0, m.useRef)(null),
                lM = (0, m.useRef)(null),
                [lP, lR] = (0, m.useState)("compact"),
                [lN, lT] = (0, m.useState)(null),
                lL = i2?.id ?? "",
                lD = lN === lL,
                lq = iK ?? lP;
            ih[32] !== aj || ih[33] !== iK || ih[34] !== ao || ih[35] !== iO ? (eA = e => {
                (ao || "expanded" !== e || aj) && (null == iK && lR(e), lT(null), iO?.(e))
            }, ih[32] = aj, ih[33] = iK, ih[34] = ao, ih[35] = iO, ih[36] = eA) : eA = ih[36];
            let l_ = eA,
                [lF, lI] = (0, m.useState)(null),
                [lA, lW] = (0, m.useState)(!1),
                [lH, lB] = (0, m.useState)(!1),
                [lK, lO] = (0, m.useState)(!1),
                [l$, lV] = (0, m.useState)(!1),
                lX = (0, m.useRef)(null);
            ih[37] === Symbol.for("react.memo_cache_sentinel") ? (eW = e => {
                (null != lX.current && (cancelAnimationFrame(lX.current), lX.current = null), null != e) ? lV(!0): lX.current = requestAnimationFrame(() => {
                    lX.current = null, lV(!1)
                })
            }, ih[37] = eW) : eW = ih[37];
            let lY = eW;
            ih[38] === Symbol.for("react.memo_cache_sentinel") ? (eH = () => () => {
                null != lX.current && cancelAnimationFrame(lX.current)
            }, eB = [], ih[38] = eH, ih[39] = eB) : (eH = ih[38], eB = ih[39]), (0, m.useEffect)(eH, eB);
            let [lZ, lU] = (0, m.useState)(!1), [lQ, lG] = (0, m.useState)(!1), [lJ, l0] = (0, m.useState)(!1), [l1, l2] = (0, m.useState)(!0), [l3, l4] = (0, m.useState)(null), l5 = (0, m.useRef)(!1), [l6, l7] = (0, m.useState)(!1), [l8, l9] = (0, m.useState)(0), [oe, ot] = (0, m.useState)(0), [on, oi] = (0, m.useState)(!1);
            ih[40] !== ap || ih[41] !== aA ? (eK = (e, t) => {
                l9(ap ? (0, ec.a)(e).height : e.contentRect.height), oi(e.contentRect.width < 640);
                let n = t.querySelector(`[${V.a}]`)?.getBoundingClientRect().height ?? 0;
                ot(Math.max(0, e.contentRect.height - (0, j.b)(n, aA)))
            }, ih[40] = ap, ih[41] = aA, ih[42] = eK) : eK = ih[42];
            let oa = (0, A.b)(eK),
                [ol, oo] = (0, m.useState)(null),
                [or, os] = (0, m.useState)(!1),
                [oc, ou] = (0, m.useState)(ak);
            oc !== ak && (ou(ak), ld({}), lG(!1), l0(!1), l4(null), lI(null), lO(!1), os(!1), lT(null));
            let [od, oh] = (0, m.useState)(ad);
            od !== ad && (oh(ad), l4(null), lI(null));
            let op = !av && (i_ || l3?.stage === "minimized"),
                om = (0, r.a)(+!!op);
            ih[43] !== om ? (eO = () => 1 - om.get(), ih[43] = om, ih[44] = eO) : eO = ih[44];
            let of = (0, s.a)(eO);
            ih[45] !== om ? (e$ = e => om.on("change", e), ih[45] = om, ih[46] = e$) : e$ = ih[46];
            let og = e$;
            ih[47] !== om ? (eV = () => 1 === om.get(), ih[47] = om, ih[48] = eV) : eV = ih[48];
            let ov = eV;
            ih[49] !== op ? (eX = () => op, ih[49] = op, ih[50] = eX) : eX = ih[50];
            let ob = (0, m.useSyncExternalStore)(og, ov, eX);
            lF?.target !== "minimized" || op || lI({
                target: lq
            }), ih[51] !== aj || ih[52] !== aa || ih[53] !== ad || ih[54] !== lq ? (eY = (0, ei.b)({
                pendingFormId: ad,
                presentation: lq,
                forceExpanded: aa,
                hasTranscript: aj
            }), ih[51] = aj, ih[52] = aa, ih[53] = ad, ih[54] = lq, ih[55] = eY) : eY = ih[55];
            let {
                isCompact: ox,
                isChatCompact: oy,
                canTogglePresentation: ow
            } = eY, oS = ox && !av, oz = i_ && !av, oC = ap && !ao ? !ox : as;
            (!ao || al || i_ || !oC) && lK && lO(!1);
            let oj = (void 0 === i1 || i1) && ap && !ah && !lD && aC && (aq || aD?.type === "loading"),
                ok = ox && oj,
                oE = ap && oS && !al && !oz && !ah && void 0 !== i2,
                oM = oE && !lD && null != i2,
                oP = ok || oM && i2.transient,
                oR = void 0 !== i7 && i7 || ap;
            ih[56] !== ao || ih[57] !== al || ih[58] !== i_ || ih[59] !== oC ? (eZ = () => {
                let e, t = lk.current;
                if (null == t || !ao || al || i_ || !oC) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, lO(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), lO(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, ih[56] = ao, ih[57] = al, ih[58] = i_, ih[59] = oC, ih[60] = eZ) : eZ = ih[60], ih[61] !== ak || ih[62] !== ao || ih[63] !== al || ih[64] !== i_ || ih[65] !== oC ? (eU = [ak, ao, al, i_, oC], ih[61] = ak, ih[62] = ao, ih[63] = al, ih[64] = i_, ih[65] = oC, ih[66] = eU) : eU = ih[66], (0, m.useEffect)(eZ, eU);
            let oN = !al && !ox && !i_ && !aa && !lQ && !l6;
            ih[67] !== aI || ih[68] !== l_ || ih[69] !== lI ? (eQ = e => {
                null == lk.current || null != e && eM(lk.current, e.target, aI) || (lI(null), l_("compact"))
            }, ih[67] = aI, ih[68] = l_, ih[69] = lI, ih[70] = eQ) : eQ = ih[70];
            let oT = (0, m.useEffectEvent)(eQ);
            ih[71] !== oT || ih[72] !== aI ? (eG = () => {
                let e = lk.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !eM(e, t, aI) && oT()
            }, ih[71] = oT, ih[72] = aI, ih[73] = eG) : eG = ih[73];
            let oL = (0, m.useEffectEvent)(eG);
            ih[74] !== ap || ih[75] !== oL || ih[76] !== oT || ih[77] !== oN ? (eJ = () => {
                if (!oN) return;
                document.addEventListener("pointerdown", oT, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && oL()
                        })
                    };
                window.addEventListener("blur", t);
                let n = ap ? er.c.subscribe("browser-sidebar-web-contents-pointer-down", () => oT()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", oT, !0)
                }
            }, ih[74] = ap, ih[75] = oL, ih[76] = oT, ih[77] = oN, ih[78] = eJ) : eJ = ih[78], ih[79] !== ap || ih[80] !== oN ? (e0 = [ap, oN], ih[79] = ap, ih[80] = oN, ih[81] = e0) : e0 = ih[81], (0, m.useEffect)(eJ, e0);
            let oD = aT?.type === "loading";
            ih[82] !== iH || ih[83] !== lW || ih[84] !== l_ || ih[85] !== lI ? (e1 = () => {
                lk.current?.focus({
                    preventScroll: !0
                }), lW(!1), lI(null), iH(!1), l_("expanded")
            }, ih[82] = iH, ih[83] = lW, ih[84] = l_, ih[85] = lI, ih[86] = e1) : e1 = ih[86];
            let oq = (0, eb.a)(e1),
                [o_, oF] = (0, m.useState)(ej);
            ih[87] === Symbol.for("react.memo_cache_sentinel") ? (e2 = e => {
                oF(t => new Set([...t, e]))
            }, ih[87] = e2) : e2 = ih[87];
            let oI = (0, eb.a)(e2);
            ih[88] !== ap || ih[89] !== oI || ih[90] !== oq || ih[91] !== aR ? (e3 = "ready" !== aR.type ? aR : {
                type: "ready",
                value: aR.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(F, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), oq()
                        },
                        onDismiss: ap ? () => oI(e.id) : e.onDismiss
                    })
                }))
            }, ih[88] = ap, ih[89] = oI, ih[90] = oq, ih[91] = aR, ih[92] = e3) : e3 = ih[92];
            let oA = e3,
                [oW, oH] = (0, m.useState)(oD);
            if (oW !== oD && (oH(oD), os(!1), lT(null)), ih[93] !== al || ih[94] !== i_ || ih[95] !== oD || ih[96] !== lL || ih[97] !== oP ? (e4 = () => {
                    if (!oP || al || i_ || oD) return;
                    let e = window.setTimeout(() => lT(lL), 1e4);
                    return () => window.clearTimeout(e)
                }, ih[93] = al, ih[94] = i_, ih[95] = oD, ih[96] = lL, ih[97] = oP, ih[98] = e4) : e4 = ih[98], ih[99] !== ak || ih[100] !== al || ih[101] !== i_ || ih[102] !== oD || ih[103] !== lL || ih[104] !== oP ? (e5 = [ak, oP, al, i_, oD, lL], ih[99] = ak, ih[100] = al, ih[101] = i_, ih[102] = oD, ih[103] = lL, ih[104] = oP, ih[105] = e5) : e5 = ih[105], (0, m.useEffect)(e4, e5), ih[106] !== oA || ih[107] !== ap || ih[108] !== o_ || ih[109] !== oq || ih[110] !== oD || ih[111] !== i$ || ih[112] !== iJ || ih[113] !== or) {
                if (e6 = oA, ap && oD && !or) {
                    let e, t;
                    ih[115] === Symbol.for("react.memo_cache_sentinel") ? (e = () => os(!0), ih[115] = e) : e = ih[115], ih[116] !== oq || ih[117] !== i$ || ih[118] !== iJ ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(F, {
                            title: i$,
                            preview: "",
                            isWorking: !0,
                            workingContent: iJ,
                            onOpen: oq,
                            onDismiss: e
                        })
                    }], ih[116] = oq, ih[117] = i$, ih[118] = iJ, ih[119] = t) : t = ih[119], e6 = {
                        type: "ready",
                        value: t
                    }
                } else if (ap && "ready" === oA.type) {
                    let e;
                    if (ih[120] !== oA.value || ih[121] !== o_) {
                        let t;
                        ih[123] !== o_ ? (t = e => !o_.has(e.id), ih[123] = o_, ih[124] = t) : t = ih[124], e = oA.value.filter(t), ih[120] = oA.value, ih[121] = o_, ih[122] = e
                    } else e = ih[122];
                    e6 = {
                        ...oA,
                        value: e
                    }
                }
                ih[106] = oA, ih[107] = ap, ih[108] = o_, ih[109] = oq, ih[110] = oD, ih[111] = i$, ih[112] = iJ, ih[113] = or, ih[114] = e6
            } else e6 = ih[114];
            "ready" !== e6.type && lA && lW(!1);
            let oB = "ready" === e6.type && e6.value.length > 0 && (op ? i_ && (ap ? ob : lA) && !lQ : !ap && ox),
                oK = !ap && (aD?.type === "loading" || aD?.unread === !0 && !oB),
                oO = oD || aT?.unread === !0 && (i_ || !oB);
            ih[125] !== e6.type || ih[126] !== e6.value || ih[127] !== ap || ih[128] !== oI || ih[129] !== oD || ih[130] !== lW ? (e7 = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), lM.current?.contains(document.activeElement) && lE.current?.focus({
                            preventScroll: !0
                        }), ap) {
                        if (oD) os(!0);
                        else if ("ready" === e6.type)
                            for (let e of e6.value) oI(e.id)
                    } else lW(!1)
            }, ih[125] = e6.type, ih[126] = e6.value, ih[127] = ap, ih[128] = oI, ih[129] = oD, ih[130] = lW, ih[131] = e7) : e7 = ih[131];
            let o$ = (0, m.useEffectEvent)(e7);
            ih[132] !== o$ || ih[133] !== oB || ih[134] !== al || ih[135] !== i_ ? (e8 = () => {
                if (!al && i_ && oB) return document.addEventListener("keydown", o$), () => document.removeEventListener("keydown", o$)
            }, ih[132] = o$, ih[133] = oB, ih[134] = al, ih[135] = i_, ih[136] = e8) : e8 = ih[136], ih[137] !== oB || ih[138] !== al || ih[139] !== i_ ? (e9 = [oB, al, i_], ih[137] = oB, ih[138] = al, ih[139] = i_, ih[140] = e9) : e9 = ih[140], (0, m.useEffect)(e8, e9);
            let oV = !i_ && !op && (ap && !ao || !ox || lH || l$ || lK || lQ || aV),
                oX = (oC || av) && (ao ? !i_ && !op : ap || oV),
                oY = oC && oX && !oz && null == iM;
            ih[141] !== a_ ? (te = a_.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running"
            }), ih[141] = a_, ih[142] = te) : te = ih[142];
            let oZ = te;
            ih[143] !== a_ ? (tt = a_.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response"
            }), ih[143] = a_, ih[144] = tt) : tt = ih[144];
            let oU = tt,
                oQ = oD ? oZ : oU,
                oG = lf.endsWith("left"),
                oJ = "bottom-center" === lf,
                o0 = oG ? "left" : "right",
                o1 = lg && !op ? aY : 0,
                o2 = 46 * (null == ib) + (lg || op ? 0 : aY),
                o3 = ol ?? lv ?? P,
                o4 = oB && !i_ ? a9 : 0,
                o5 = (ib?.height ?? aB) - aO - (lg ? o4 + o1 : 0),
                o6 = Math.max(0, o5 - 32 - o2 - (lg ? 0 : o4)),
                o7 = null == ib ? ln / 2 : Math.max(0, ln - 20),
                o8 = ap && null != a2 ? Math.min(o7, a2 + 12) : o7,
                o9 = (l8 || 46) + (oC && oX ? 46 : 0) + (ok ? a0 : 0) + 6 * !ap,
                re = ao && oC && oX,
                rt = (l8 || 46) + 46 * !!re + (oj ? a0 : 0) + 6 * !ap,
                rn = eP(o3.height, Math.min(Math.max(400, l8 + 46), o6), o6),
                ri = Math.min(ox ? o9 : Math.max(400, o9), o6),
                ra = li ? o8 : Math.min(372, o8),
                rl = eP(ox ? o9 : o3.height, ri, o6),
                ro = (0, r.a)(rl),
                rr = (0, m.useRef)(!1),
                rs = l8 > 0,
                rc = al || aW || l6 || !ap && (i_ || null != lF) ? 0 : .3,
                ru = eP(o3.width + 12, ra, o8),
                rd = (0, et.d)(lf, {
                    height: rl,
                    width: ru
                }, o5, ln, 12, o2),
                rh = (0, r.a)(0);
            ih[145] === Symbol.for("react.memo_cache_sentinel") ? (tn = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, ih[145] = tn) : tn = ih[145];
            let rp = (0, r.a)(tn);
            ih[146] !== aS || ih[147] !== av || ih[148] !== ag || ih[149] !== am || ih[150] !== rp || ih[151] !== rh || ih[152] !== ix || ih[153] !== aW || ih[154] !== aA || ih[155] !== af ? (ti = () => {
                let e, t = av && ag && am ? lk.current?.offsetParent : null;
                if (av && ag && am && t instanceof HTMLElement) {
                    let n = am.getBoundingClientRect(),
                        i = t.getBoundingClientRect(),
                        a = (0, j.b)(n.width, aA),
                        l = af?.get() ?? a,
                        o = (0, C.f)(ag.contentPaneWidthRatio.get(), l, "unified"),
                        r = aS ? o : l - o;
                    e = `--floating-chat-dock-${ix}`, am.style.setProperty(e, `${r}px`), rp.set({
                        x: (0, j.b)(n.left - i.left, aA) + (a - ("left" === ix ? l : r)) + 4 - 6,
                        y: (0, j.b)(n.top - i.top, aA) + 4,
                        width: r - 8 + 12,
                        height: (0, j.b)(i.bottom - n.top, aA) - 8 + 6
                    })
                }
                let n = +!!av,
                    i = rh.get() === n ? null : (0, c.a)(rh, n, {
                        duration: .15 * !aW,
                        ease: N.e
                    });
                return () => {
                    i?.stop(), null != e && am?.style.removeProperty(e)
                }
            }, ih[146] = aS, ih[147] = av, ih[148] = ag, ih[149] = am, ih[150] = rp, ih[151] = rh, ih[152] = ix, ih[153] = aW, ih[154] = aA, ih[155] = af, ih[156] = ti) : ti = ih[156], ih[157] !== ib || ih[158] !== aS || ih[159] !== av || ih[160] !== ag || ih[161] !== am || ih[162] !== rp || ih[163] !== rh || ih[164] !== ix || ih[165] !== aW || ih[166] !== aA || ih[167] !== af ? (ta = [ib, 12, aS, av, ag, am, rp, rh, ix, aW, af, aA], ih[157] = ib, ih[158] = aS, ih[159] = av, ih[160] = ag, ih[161] = am, ih[162] = rp, ih[163] = rh, ih[164] = ix, ih[165] = aW, ih[166] = aA, ih[167] = af, ih[168] = ta) : ta = ih[168], (0, m.useLayoutEffect)(ti, ta);
            let rm = (0, s.a)(() => rh.get() * (rp.get().x - rd.x - lz.get())),
                rf = (0, s.a)(() => rh.get() * (rp.get().y - rd.y - lC.get())),
                rg = (0, s.a)(() => 0 === rh.get() ? "100%" : ru + rh.get() * (rp.get().width - ru));
            ih[169] !== ro || ih[170] !== rp || ih[171] !== rh ? (tl = () => ro.get() + rh.get() * (rp.get().height - ro.get()), ih[169] = ro, ih[170] = rp, ih[171] = rh, ih[172] = tl) : tl = ih[172];
            let rv = (0, s.a)(tl);
            ih[173] !== ro || ih[174] !== rt || ih[175] !== rn || ih[176] !== ao || ih[177] !== oS || ih[178] !== rh ? (to = () => Math.max(rh.get(), ao && oS ? 0 : eP((ro.get() - rt) / Math.max(1, rn - rt), 0, 1)), ih[173] = ro, ih[174] = rt, ih[175] = rn, ih[176] = ao, ih[177] = oS, ih[178] = rh, ih[179] = to) : to = ih[179];
            let rb = (0, s.a)(to);
            ih[180] !== l8 || ih[181] !== rb || ih[182] !== re || ih[183] !== ab || ih[184] !== rv || ih[185] !== rh ? (tr = () => Math.max(0, rv.get() - l8 - 46 * ((re ? 1 : rb.get()) - (ab ? 0 : rh.get()))), ih[180] = l8, ih[181] = rb, ih[182] = re, ih[183] = ab, ih[184] = rv, ih[185] = rh, ih[186] = tr) : tr = ih[186];
            let rx = (0, s.a)(tr),
                ry = (0, r.a)(0),
                rw = (0, r.a)(0),
                rS = Math.max(0, rn - 46 - l8);
            ih[187] !== ry || ih[188] !== a0 || ih[189] !== rS || ih[190] !== rb || ih[191] !== aq || ih[192] !== av ? (ts = () => av || !aq ? 0 : (1 - rb.get()) * (rS - a0 + 12 - ry.get()), ih[187] = ry, ih[188] = a0, ih[189] = rS, ih[190] = rb, ih[191] = aq, ih[192] = av, ih[193] = ts) : ts = ih[193];
            let rz = (0, s.a)(ts);
            ih[194] !== rw || ih[195] !== ry || ih[196] !== rS || ih[197] !== rb || ih[198] !== aq ? (tc = () => {
                if (!aq || 1 === rb.get()) return "none";
                let e = 1 - rb.get(),
                    t = Math.max(0, ry.get()) * e,
                    n = Math.max(0, rS - ry.get() - rw.get()) * e;
                return `inset(${t}px 0 ${n}px 0)`
            }, ih[194] = rw, ih[195] = ry, ih[196] = rS, ih[197] = rb, ih[198] = aq, ih[199] = tc) : tc = ih[199];
            let rC = (0, s.a)(tc);
            ih[200] !== rb || ih[201] !== aq ? (tu = () => aq ? 1 : rb.get(), ih[200] = rb, ih[201] = aq, ih[202] = tu) : tu = ih[202];
            let rj = (0, s.a)(tu);
            ih[203] !== rb ? (td = () => 1 - rb.get(), ih[203] = rb, ih[204] = td) : td = ih[204];
            let rk = (0, s.a)(td);
            ih[205] !== rw || ih[206] !== ry || ih[207] !== aq || ih[208] !== aG || ih[209] !== aA ? (th = () => {
                if (null == aG || !aq) return null;
                let e = aG.querySelectorAll('[data-markdown-text-style="assistant-message"]'),
                    t = e.item(e.length - 1);
                if (null == t) return null;
                let n = t.getBoundingClientRect(),
                    i = aG.getBoundingClientRect(),
                    a = parseFloat(getComputedStyle(t.firstElementChild ?? t).lineHeight),
                    l = Math.min((0, j.b)(n.height, aA), Number.isFinite(a) ? 2 * a : 56, 56);
                return ry.set((0, j.b)(n.top - i.top, aA)), rw.set(l), a1(l + 24), t
            }, ih[205] = rw, ih[206] = ry, ih[207] = aq, ih[208] = aG, ih[209] = aA, ih[210] = th) : th = ih[210];
            let rE = (0, m.useEffectEvent)(th);
            ih[211] !== ap || ih[212] !== aq || ih[213] !== oS || ih[214] !== al || ih[215] !== rE || ih[216] !== aG ? (tp = () => {
                if (!ap || al || null == aG || !aq) return;
                let e = null,
                    t = new ResizeObserver(() => u.b.read(n)),
                    n = () => {
                        let n = rE();
                        e !== n && (t.disconnect(), e = n, null != n && t.observe(n))
                    },
                    i = () => {
                        u.b.read(n)
                    };
                if (n(), !oS) return void t.disconnect();
                let a = new MutationObserver(i);
                return a.observe(aG, {
                    childList: !0,
                    subtree: !0
                }), aG.addEventListener("scroll", i, !0), () => {
                    (0, u.a)(n), t.disconnect(), a.disconnect(), aG.removeEventListener("scroll", i, !0)
                }
            }, ih[211] = ap, ih[212] = aq, ih[213] = oS, ih[214] = al, ih[215] = rE, ih[216] = aG, ih[217] = tp) : tp = ih[217], ih[218] !== ap || ih[219] !== aq || ih[220] !== oS || ih[221] !== al || ih[222] !== aG ? (tm = [ap, aq, oS, al, aG], ih[218] = ap, ih[219] = aq, ih[220] = oS, ih[221] = al, ih[222] = aG, ih[223] = tm) : tm = ih[223], (0, m.useLayoutEffect)(tp, tm), ih[224] !== ro || ih[225] !== l8 || ih[226] !== ap || ih[227] !== rl || ih[228] !== rs || ih[229] !== ox || ih[230] !== l$ || ih[231] !== rE || ih[232] !== rc ? (tf = () => {
                let e, t = !rr.current && ox;
                if (rs && (rr.current = !0), l$ || t || 0 === rc) return void ro.jump(rl);
                let n = () => {
                    if (ap) {
                        let e = lj.current;
                        if (null != e && e.offsetHeight !== Math.round(l8)) return void l9(e.offsetHeight);
                        rE()
                    }
                    let t = (0, c.a)(ro, rl, {
                        duration: rc,
                        ease: N.e
                    });
                    e = () => t.stop()
                };
                return ap ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, ih[224] = ro, ih[225] = l8, ih[226] = ap, ih[227] = rl, ih[228] = rs, ih[229] = ox, ih[230] = l$, ih[231] = rE, ih[232] = rc, ih[233] = tf) : tf = ih[233];
            let rM = (0, m.useEffectEvent)(tf),
                rP = ap ? l8 : null,
                rR = ap ? null : rs,
                rN = ap ? null : ox;
            ih[234] !== rM ? (tg = () => rM(), ih[234] = rM, ih[235] = tg) : tg = ih[235], ih[236] !== rl || ih[237] !== rR || ih[238] !== rN || ih[239] !== rP || ih[240] !== rc ? (tv = [rl, rc, rP, rR, rN], ih[236] = rl, ih[237] = rR, ih[238] = rN, ih[239] = rP, ih[240] = rc, ih[241] = tv) : tv = ih[241], (0, m.useLayoutEffect)(tg, tv);
            let rT = ap ? rb : void 0;
            ih[242] !== rT ? (tb = {
                "--quick-chat-expansion": rT
            }, ih[242] = rT, ih[243] = tb) : tb = ih[243];
            let rL = tb,
                rD = {
                    height: Math.min(36, o6),
                    width: Math.min(36, o8)
                },
                rq = (0, et.f)(i_ ? lf : l3?.dockPosition ?? eF, ij),
                r_ = (0, et.d)(rq, rD, o5, ln, 0, o2),
                rF = i_ ? rD : {
                    height: rl,
                    width: ru
                },
                rI = i_ ? r_ : rd,
                rA = i_ ? 16 : 10,
                rW = Math.max(rA, ln - rF.width - rA),
                rH = o2 + rA,
                rB = Math.max(rA, o5 - rF.height - rA);
            ih[244] !== rA || ih[245] !== rW || ih[246] !== rH || ih[247] !== rB ? (tx = {
                left: rA,
                right: rW,
                top: rH,
                bottom: rB
            }, ih[244] = rA, ih[245] = rW, ih[246] = rH, ih[247] = rB, ih[248] = tx) : tx = ih[248];
            let rK = tx;
            ih[249] === Symbol.for("react.memo_cache_sentinel") ? (ty = () => {
                lS.current = null
            }, ih[249] = ty) : ty = ih[249], ih[250] !== ib || ih[251] !== aA ? (tw = [ib, aA], ih[250] = ib, ih[251] = aA, ih[252] = tw) : tw = ih[252], (0, m.useLayoutEffect)(ty, tw);
            let rO = e => {
                    if (!ae) return;
                    lS.current = null == ib ? null : lk.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, j.b)(e.clientX - (lS.current?.left ?? 0), aA),
                        y: (0, j.b)(e.clientY - (lS.current?.top ?? 0), aA)
                    };
                    ly.current = {
                        x: t.x - rI.x - lz.get(),
                        y: t.y - rI.y - lC.get()
                    }, lw.current = {
                        point: t,
                        target: null
                    }, lb.start(e)
                },
                r$ = (0, et.d)(rq, {
                    height: rl,
                    width: ru
                }, o5, ln, 12, o2),
                rV = r_.x - r$.x,
                rX = r_.y - r$.y,
                rY = ru - rV - rD.width,
                rZ = rl - rX - rD.height;
            ih[253] !== rV || ih[254] !== rX || ih[255] !== rY || ih[256] !== rZ ? (tS = {
                top: rX,
                right: rY,
                bottom: rZ,
                left: rV
            }, ih[253] = rV, ih[254] = rX, ih[255] = rY, ih[256] = rZ, ih[257] = tS) : tS = ih[257];
            let rU = tS,
                rQ = `inset(${rU.top}px ${rU.right}px ${rU.bottom}px ${rU.left}px round var(--floating-panel-radius))`,
                rG = (0, s.a)(() => {
                    let e = om.get(),
                        t = ro.get() - rl,
                        n = e * (rU.top + (lg ? 0 : t)),
                        i = 6 + e * (rU.right - 6),
                        a = 6 + e * (rU.bottom + (lg ? t : 0) - 6),
                        l = 6 + e * (rU.left - 6),
                        o = rh.get(),
                        r = 0 === o ? "var(--radius-token-composer-single-line)" : `calc(var(--radius-token-composer-single-line) * ${1-o} + var(--app-shell-sidebar-popover-radius) * ${o})`,
                        s = op || lQ || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round ${r})` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: r,
                        clip: s
                    }
                });
            ih[258] !== rG ? (tz = () => rG.get().top, ih[258] = rG, ih[259] = tz) : tz = ih[259];
            let rJ = (0, s.a)(tz);
            ih[260] !== rG ? (tC = () => rG.get().right, ih[260] = rG, ih[261] = tC) : tC = ih[261];
            let r0 = (0, s.a)(tC);
            ih[262] !== rG ? (tj = () => rG.get().bottom, ih[262] = rG, ih[263] = tj) : tj = ih[263];
            let r1 = (0, s.a)(tj);
            ih[264] !== rG ? (tk = () => rG.get().left, ih[264] = rG, ih[265] = tk) : tk = ih[265];
            let r2 = (0, s.a)(tk);
            ih[266] !== rG ? (tE = () => rG.get().radius, ih[266] = rG, ih[267] = tE) : tE = ih[267];
            let r3 = (0, s.a)(tE);
            ih[268] !== rG ? (tM = () => rG.get().clip, ih[268] = rG, ih[269] = tM) : tM = ih[269];
            let r4 = (0, s.a)(tM);
            ih[270] !== ap || ih[271] !== op || ih[272] !== om || ih[273] !== aW ? (tP = () => {
                if (!ap) return;
                let e = (0, c.a)(om, +!!op, {
                    duration: .3 * !aW,
                    ease: N.e
                });
                return () => e.stop()
            }, tR = [ap, op, om, aW], ih[270] = ap, ih[271] = op, ih[272] = om, ih[273] = aW, ih[274] = tP, ih[275] = tR) : (tP = ih[274], tR = ih[275]), (0, m.useLayoutEffect)(tP, tR);
            let r5 = lg ? {
                    top: rX + rD.height
                } : {
                    bottom: rl - rX
                },
                r6 = (0, m.useRef)({
                    dockPosition: lf,
                    dockThreadKey: ak,
                    isMinimized: i_
                });
            ih[276] !== iA ? (tN = () => {
                iA?.(null)
            }, ih[276] = iA, ih[277] = tN) : tN = ih[277];
            let r7 = (0, m.useEffectEvent)(tN),
                r8 = (0, m.useEffectEvent)(e => {
                    let t = (0, et.d)(e, {
                        height: rl,
                        width: ru
                    }, o5, ln, 12, o2);
                    lz.stop(), lC.stop(), lz.jump(lz.get() + t.x - rd.x), lC.jump(lC.get() + t.y - rd.y);
                    let n = aW ? {
                        duration: 0
                    } : ew;
                    (0, c.a)(lz, 0, n), (0, c.a)(lC, 0, n)
                });
            (0, m.useLayoutEffect)(() => {
                let e = r6.current;
                if (r6.current = {
                        dockPosition: lf,
                        dockThreadKey: ak,
                        isMinimized: i_
                    }, e.dockThreadKey !== ak) {
                    lx.current = !0, l5.current = !0, lb.cancel(), r7(), lz.jump(0), lC.jump(0);
                    return
                }
                if (al) {
                    lz.jump(0), lC.jump(0);
                    return
                }
                e.isMinimized !== i_ && r8(e.dockPosition)
            }, [lf, ak, lb, lz, lC, al, i_]), ih[278] !== lz || ih[279] !== lC ? (tT = () => () => {
                lz.stop(), lC.stop()
            }, tL = [lz, lC], ih[278] = lz, ih[279] = lC, ih[280] = tT, ih[281] = tL) : (tT = ih[280], tL = ih[281]), (0, m.useLayoutEffect)(tT, tL);
            let r9 = e => {
                let t, n = {
                    ...rF,
                    left: rI.x + lz.get(),
                    top: rI.y + lC.get()
                };
                null != ib && null == lS.current && (lS.current = lk.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == ib ? null : lS.current,
                    a = {
                        x: e.point.x - (0, j.b)(i?.left ?? 0, aA),
                        y: e.point.y - (0, j.b)(i?.top ?? 0, aA)
                    };
                t = ap ? (0, et.b)(n, o5, ln, ex.filter(e => !i_ || "bottom-right" === e || lr && "bottom-left" === e).map(e => (0, et.f)(e, ij)), 12 * !i_, o2) : (0, et.e)({
                    ...n,
                    left: n.width >= ln / 2 - 2 * rA ? a.x - n.width / 2 : n.left
                }, o5, ln, i_);
                let l = null == ij ? t : (0, et.f)(t, ij),
                    o = {
                        x: !ap || i_ && lr ? Math.min(a.x, ln - a.x) : ln - a.x,
                        y: ap ? o5 - a.y : Math.min(a.y - o2, o5 - a.y)
                    },
                    r = o.x <= 16 + rD.width && o.y <= 16 + rD.height;
                if (ap && !i_) {
                    let e = lw.current;
                    if (null != e) {
                        let t = a.x - e.point.x,
                            n = a.y - e.point.y;
                        Math.hypot(t, n) >= 8 && (t >= 0 && n > 0 && n >= t ? e.target = "minimize" : t > 0 && t > 2 * Math.abs(n) ? e.target = null : (t < 0 || n < 0) && (e.target = null), e.point = a)
                    }
                    let n = a.y - ly.current.y + rF.height - o5;
                    return {
                        dockPosition: l,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        suppressEdgeDrop: r,
                        shouldMinimize: "bottom-right" === l && e?.target === "minimize" && n >= .5 * rF.width
                    }
                }
                let s = (0, et.d)(l, rF, o5, ln, 12, o2),
                    c = !i_ && "bottom-center" !== l && 16 >= Math.abs(n.left - s.x) && 16 >= Math.abs(n.top - s.y);
                return {
                    dockPosition: l,
                    requestedDockPosition: t,
                    isNearDock: c,
                    suppressEdgeDrop: r,
                    shouldMinimize: c && r
                }
            };
            ih[282] !== ae || ih[283] !== iC || ih[284] !== ap || ih[285] !== ak || ih[286] !== iL || ih[287] !== lr || ih[288] !== ac ? (tD = (e, t) => {
                if (!ae) return;
                let n = t && !lr;
                (null == iC || n) && (null != ak || ap && !n) ? (0, en.c)(ac, {
                    threadKey: ak ?? null,
                    minimized: n
                }, e, iL) : ld(t => ({
                    expanded: n ? t.expanded : e,
                    minimized: n ? (0, et.a)(e) : t.minimized
                }))
            }, ih[282] = ae, ih[283] = iC, ih[284] = ap, ih[285] = ak, ih[286] = iL, ih[287] = lr, ih[288] = ac, ih[289] = tD) : tD = ih[289];
            let se = tD,
                st = (e, t, n) => {
                    let i = void 0 === n ? rF : n,
                        a = (0, et.d)(lf, rF, o5, ln, 12 * !i_, o2),
                        l = {
                            x: a.x + lz.get(),
                            y: a.y + lC.get()
                        },
                        o = (0, et.d)((0, et.f)(e, ij), i, o5, ln, 12 * !i_, o2);
                    lz.stop(), lC.stop(), lz.jump(l.x - o.x), lC.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        se(e, i_)
                    });
                    let r = ap ? {
                            duration: .3,
                            ease: N.e
                        } : ew,
                        s = aW ? {
                            duration: 0
                        } : r;
                    l0(!0), Promise.all([(0, c.a)(lz, 0, s), (0, c.a)(lC, 0, s)]).then(() => {
                        l0(0 !== lz.get() || 0 !== lC.get())
                    })
                },
                sn = (0, m.useEffectEvent)(() => {
                    lx.current = !0, lb.cancel(), iA?.(null), st(lf, !1), l4(null), lI(null), lG(!1)
                });
            ih[290] !== sn || ih[291] !== lb || ih[292] !== lQ ? (tq = () => {
                if (!lQ) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), sn())
                    },
                    t = () => sn();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    lx.current = !0, lb.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, ih[290] = sn, ih[291] = lb, ih[292] = lQ, ih[293] = tq) : tq = ih[293], ih[294] !== lb || ih[295] !== lQ ? (t_ = [lb, lQ], ih[294] = lb, ih[295] = lQ, ih[296] = t_) : t_ = ih[296], (0, m.useLayoutEffect)(tq, t_);
            let si = (e, t) => {
                    let n = ap && oJ ? 0 : (0, et.c)(lf, e, {
                            height: rl,
                            width: ru
                        }, lz.get(), t.width, o5, ln, 12),
                        i = rd.y + lC.get(),
                        a = (0, et.d)(lf, t, o5, ln, 12, o2),
                        l = eP(i + (lg ? 0 : rl - t.height), o2 + 10, o5 - t.height - 10);
                    lz.stop(), lC.stop(), (0, f.flushSync)(() => {
                        oo({
                            height: ox ? o3.height : t.height,
                            width: t.width - 12
                        })
                    }), lz.jump(n), lC.jump(l - a.y)
                },
                sa = e => {
                    el(ac, {
                        height: ox ? o3.height : e.height,
                        width: e.width - 12
                    }, () => iB?.(lf)), st(lf, !1, e)
                };
            ih[297] !== ap || ih[298] !== lQ || ih[299] !== iH || ih[300] !== lW || ih[301] !== l4 || ih[302] !== lI ? (tF = () => {
                lW(!1), l2(!lQ), l4(null), lI(ap ? null : {
                    target: "minimized"
                }), iH(!0)
            }, ih[297] = ap, ih[298] = lQ, ih[299] = iH, ih[300] = lW, ih[301] = l4, ih[302] = lI, ih[303] = tF) : tF = ih[303];
            let sl = tF;
            if (ih[304] !== iC || ih[305] !== ap || ih[306] !== aa || ih[307] !== ah || ih[308] !== ox || ih[309] !== al || ih[310] !== i_ || ih[311] !== iW || ih[312] !== iH || ih[313] !== lq || ih[314] !== at || ih[315] !== lW || ih[316] !== l_ || ih[317] !== lI) {
                let e, t, n, i;
                tK = () => {
                    (0, f.flushSync)(() => {
                        lW(!1), lI(ap ? null : {
                            target: lq
                        }), iH(!1)
                    }), tW()
                }, ih[325] !== ox || ih[326] !== l_ || ih[327] !== lI ? (e = () => {
                    lI(null), l_(ox ? "expanded" : "compact")
                }, ih[325] = ox, ih[326] = l_, ih[327] = lI, ih[328] = e) : e = ih[328], tO = e;
                let a = !al && !i_;
                tI = a && (null != iW || !at && !ox && !aa), ih[329] !== iW || ih[330] !== l_ || ih[331] !== lI ? (t = () => {
                    null != iW ? iW() : (lI(null), l_("compact"))
                }, ih[329] = iW, ih[330] = l_, ih[331] = lI, ih[332] = t) : t = ih[332], tA = t, ih[333] !== tI || ih[334] !== a || ih[335] !== tA || ih[336] !== at ? (n = e => {
                    if (!a || "Escape" !== e.key || e.defaultPrevented || e.nativeEvent.isComposing) return;
                    let t = tI && !e.repeat;
                    !t && (!at || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) || (e.preventDefault(), e.stopPropagation(), t && tA())
                }, ih[333] = tI, ih[334] = a, ih[335] = tA, ih[336] = at, ih[337] = n) : n = ih[337], tB = n, ih[338] !== ah ? (i = () => {
                    let e = lj.current;
                    return ah ? (0, Z.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, ih[338] = ah, ih[339] = i) : i = ih[339], tH = i, tW = () => {
                    ap && null == iC && (lI(null), l_("expanded")), tH()?.focus({
                        preventScroll: !0
                    })
                }, ih[304] = iC, ih[305] = ap, ih[306] = aa, ih[307] = ah, ih[308] = ox, ih[309] = al, ih[310] = i_, ih[311] = iW, ih[312] = iH, ih[313] = lq, ih[314] = at, ih[315] = lW, ih[316] = l_, ih[317] = lI, ih[318] = tI, ih[319] = tA, ih[320] = tW, ih[321] = tH, ih[322] = tB, ih[323] = tK, ih[324] = tO
            } else tI = ih[318], tA = ih[319], tW = ih[320], tH = ih[321], tB = ih[322], tK = ih[323], tO = ih[324];
            let so = !al && ah;
            ih[340] !== tH || ih[341] !== ah || ih[342] !== i_ ? (t$ = () => {
                if (null == lk.current || null != lk.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (ah) return i_;
                let e = tH();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !lj.current?.contains(t) || t === lj.current
            }, ih[340] = tH, ih[341] = ah, ih[342] = i_, ih[343] = t$) : t$ = ih[343], ih[344] !== so || ih[345] !== t$ ? (tV = {
                enabled: so,
                isActive: t$
            }, ih[344] = so, ih[345] = t$, ih[346] = tV) : tV = ih[346], (0, $.a)("focusMainChat", i_ ? tK : tW, tV), ih[347] !== a_ || ih[348] !== ox ? (tX = a_.formatMessage(ox ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat"
            }), ih[347] = a_, ih[348] = ox, ih[349] = tX) : tX = ih[349];
            let sr = tX;
            ih[350] !== ow || ih[351] !== sr || ih[352] !== tO ? (tY = ow ? {
                label: sr,
                onToggle: tO
            } : void 0, ih[350] = ow, ih[351] = sr, ih[352] = tO, ih[353] = tY) : tY = ih[353];
            let ss = tY;
            ih[354] !== a_ ? (tZ = a_.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width"
            }), ih[354] = a_, ih[355] = tZ) : tZ = ih[355];
            let sc = tZ;
            ih[356] !== a_ ? (tU = a_.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height"
            }), ih[356] = a_, ih[357] = tU) : tU = ih[357];
            let su = tU;
            ih[358] !== ao || ih[359] !== l_ || ih[360] !== lI ? (tQ = () => {
                lI(null), ao && l_("expanded")
            }, ih[358] = ao, ih[359] = l_, ih[360] = lI, ih[361] = tQ) : tQ = ih[361];
            let sd = (0, eb.a)(tQ);
            ih[362] !== ap || ih[363] !== sd || ih[364] !== ao || ih[365] !== lI ? (tG = ap || ao ? sd : () => lI(null), ih[362] = ap, ih[363] = sd, ih[364] = ao, ih[365] = lI, ih[366] = tG) : tG = ih[366];
            let sh = {
                    isCompact: oS,
                    canShowPreviewBubble: oE,
                    isNarrow: on,
                    isChromeRevealed: oV,
                    isHeaderVisible: oX,
                    isComposerFocused: ap ? lZ || l$ : oV,
                    isDockedTop: lg,
                    isHidden: al,
                    isMinimized: op,
                    shouldReduceMotion: aW,
                    onSubmitStart: tG
                },
                sp = {
                    isMoving: lQ || l6 || lJ,
                    composerContentHeight: oe,
                    dockedReservePx: l8 > oe + 6 * !!ap ? rl + 10 : 0
                };
            ih[367] !== al || ih[368] !== iN ? (tJ = function(e) {
                !al && null != iN && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (lk.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, ih[367] = al, ih[368] = iN, ih[369] = tJ) : tJ = ih[369];
            let sm = tJ;
            ih[370] !== ao ? (t0 = function(e) {
                !ao && e.target instanceof Element && (!lk.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, ih[370] = ao, ih[371] = t0) : t0 = ih[371];
            let sf = t0,
                sg = iv(sh, sp),
                sv = at ? "editor-only" : null;
            ih[372] !== oa ? (t1 = e => {
                lj.current = e, oa(e)
            }, ih[372] = oa, ih[373] = t1) : t1 = ih[373], ih[374] !== tW ? (t2 = e => {
                e.target === e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && !l5.current && tW()
            }, ih[374] = tW, ih[375] = t2) : t2 = ih[375], ih[376] !== oR || ih[377] !== oS || ih[378] !== oz || ih[379] !== ok ? (t3 = oR && !oz && (!oS || ok) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, ih[376] = oR, ih[377] = oS, ih[378] = oz, ih[379] = ok, ih[380] = t3) : t3 = ih[380], ih[381] !== aU ? (t4 = {
                target: aU,
                homeBannerPlacement: "inline"
            }, ih[381] = aU, ih[382] = t4) : t4 = ih[382];
            let sb = (0, i.jsxs)("div", {
                ref: t1,
                className: (0, l.b)(L.a.floatingComposerInset, "mt-auto shrink-0", ae && !li && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", ox && lg && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: sm,
                onPointerUp: t2,
                onContextMenu: sf,
                children: [t3, (0, i.jsx)(ep.b, {
                    value: {
                        ...aM,
                        hasComposerSurface: oR,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !al && !ox && !i_,
                        floatingChatSurfaceRef: lk,
                        onFloatingDictationRowChange: lY,
                        floatingComposerPresentation: sh,
                        transcriptTarget: aG,
                        followLatestTranscript: ap ? oS : aM.followLatestTranscript
                    },
                    children: (0, i.jsx)(Y.a, {
                        value: tI ? tA : sv,
                        children: (0, i.jsx)(X.a, {
                            value: t4,
                            children: sg
                        })
                    })
                })]
            });
            ih[383] !== ap || ih[384] !== oS || ih[385] !== sl ? (t5 = ap ? null : (0, i.jsx)(ee.c, {
                isCompact: oS,
                onMinimize: sl
            }), ih[383] = ap, ih[384] = oS, ih[385] = sl, ih[386] = t5) : t5 = ih[386];
            let sx = t5;
            ih[387] !== ap || ih[388] !== oK || ih[389] !== sx || ih[390] !== as || ih[391] !== iM || ih[392] !== oZ || ih[393] !== i$ || ih[394] !== iV || ih[395] !== aF || ih[396] !== aD || ih[397] !== oU ? (t6 = iM ? iM({
                leadingControl: sx
            }) : (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-1",
                children: [sx, oK && null != aD ? (0, i.jsx)("div", {
                    className: "flex items-center justify-center",
                    role: "status",
                    "aria-label": "loading" === aD.type ? oZ : oU,
                    children: (0, i.jsx)(eh.a, {
                        statusState: aD
                    })
                }) : null, (0, i.jsx)("h2", {
                    id: aF,
                    "data-dropdown-overlay-side": "auto",
                    className: (0, l.b)("min-w-0 text-base font-medium text-secondary", (!ap || null == iV) && "truncate"),
                    children: iV ?? (ap ? (0, i.jsx)(ee.b, {
                        children: (0, i.jsx)("span", {
                            className: "truncate",
                            children: as ? i$ : (0, i.jsx)(v.a, {
                                id: "quickChat.newChatTitle",
                                defaultMessage: "New chat"
                            })
                        })
                    }) : i$)
                })]
            }), ih[387] = ap, ih[388] = oK, ih[389] = sx, ih[390] = as, ih[391] = iM, ih[392] = oZ, ih[393] = i$, ih[394] = iV, ih[395] = aF, ih[396] = aD, ih[397] = oU, ih[398] = t6) : t6 = ih[398];
            let sy = t6;
            ih[399] !== aV || ih[400] !== oS || ih[401] !== lQ || ih[402] !== sl || ih[403] !== iN ? (t7 = iN?.({
                isCompact: oS,
                isDragging: lQ,
                open: aV,
                onMinimize: sl,
                onOpenChange: aX
            }), ih[399] = aV, ih[400] = oS, ih[401] = lQ, ih[402] = sl, ih[403] = iN, ih[404] = t7) : t7 = ih[404], ih[405] !== ap || ih[406] !== oS || ih[407] !== sl ? (t8 = ap && (0, i.jsx)(ee.c, {
                isCompact: oS,
                onMinimize: sl
            }), ih[405] = ap, ih[406] = oS, ih[407] = sl, ih[408] = t8) : t8 = ih[408], ih[409] !== sy || ih[410] !== t7 || ih[411] !== t8 ? (t9 = (0, i.jsxs)(i.Fragment, {
                children: [sy, t7, t8]
            }), ih[409] = sy, ih[410] = t7, ih[411] = t8, ih[412] = t9) : t9 = ih[412];
            let sw = t9,
                sS = ax ? "hidden" : "contents";
            ih[413] !== ai || ih[414] !== ap || ih[415] !== sw || ih[416] !== an || ih[417] !== ao || ih[418] !== oS || ih[419] !== oX || ih[420] !== i_ || ih[421] !== ss || ih[422] !== lF || ih[423] !== aW || ih[424] !== oC ? (ne = ap ? (0, i.jsx)(ee.a, {
                isCompact: ao && oS,
                isVisible: oX,
                isDisabled: an,
                children: sw
            }) : (0, i.jsx)(ee.d, {
                expandOnClick: ao,
                animateChrome: !aW && !i_ && null == lF,
                isChromeRevealed: oX,
                isCompact: oS,
                isDisabled: an,
                reserveSpace: ao && oC && !oS,
                presentationToggle: ai ? ss : void 0,
                children: sw
            }), ih[413] = ai, ih[414] = ap, ih[415] = sw, ih[416] = an, ih[417] = ao, ih[418] = oS, ih[419] = oX, ih[420] = i_, ih[421] = ss, ih[422] = lF, ih[423] = aW, ih[424] = oC, ih[425] = ne) : ne = ih[425], ih[426] !== sf || ih[427] !== sm || ih[428] !== sS || ih[429] !== ne ? (nt = (0, i.jsx)("div", {
                className: sS,
                onPointerDownCapture: sm,
                onContextMenu: sf,
                children: ne
            }), ih[426] = sf, ih[427] = sm, ih[428] = sS, ih[429] = ne, ih[430] = nt) : nt = ih[430];
            let sz = nt,
                sC = ap ? {
                    top: rq.startsWith("top") ? rX : void 0,
                    bottom: rq.startsWith("top") ? void 0 : rU.bottom,
                    left: rV,
                    width: rD.width,
                    height: rD.height,
                    opacity: om
                } : {
                    inset: 0
                },
                sj = !i_,
                sk = i_ ? aE : void 0;
            ih[431] !== ap || ih[432] !== op ? (nn = ap ? void 0 : {
                opacity: +!!op
            }, ih[431] = ap, ih[432] = op, ih[433] = nn) : nn = ih[433];
            let sE = !i_ || void 0;
            ih[434] !== aW ? (ni = aW ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, ih[434] = aW, ih[435] = ni) : ni = ih[435];
            let sM = i_ ? "minimized" : "preview",
                sP = i_ && "pointer-events-auto";
            ih[436] !== sP ? (na = (0, l.b)("absolute inset-0 m-auto touch-none", sP), ih[436] = sP, ih[437] = na) : na = ih[437];
            let sR = oO ? oQ : void 0;
            ih[438] !== a_ || ih[439] !== iZ || ih[440] !== i$ ? (nl = iZ ?? a_.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}"
            }, {
                title: i$
            }), ih[438] = a_, ih[439] = iZ, ih[440] = i$, ih[441] = nl) : nl = ih[441];
            let sN = !al && i_ && l1;
            ih[442] !== tK ? (no = e => {
                0 !== e.detail && l5.current || tK()
            }, ih[442] = tK, ih[443] = no) : no = ih[443], ih[444] !== ap || ih[445] !== lW ? (nr = e => {
                ap || "touch" === e.pointerType || lW(!0)
            }, ih[444] = ap, ih[445] = lW, ih[446] = nr) : nr = ih[446], ih[447] !== e6.type || ih[448] !== ap || ih[449] !== lW ? (ns = e => {
                "ready" === e6.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), ap || (0, f.flushSync)(() => lW(!0)), lM.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, ih[447] = e6.type, ih[448] = ap, ih[449] = lW, ih[450] = ns) : ns = ih[450], ih[451] !== li || ih[452] !== rO ? (nc = e => {
                li || 0 !== e.button || (l5.current = !1, e.currentTarget.setPointerCapture(e.pointerId), rO(e))
            }, ih[451] = li, ih[452] = rO, ih[453] = nc) : nc = ih[453], ih[454] !== ap || ih[455] !== oO || ih[456] !== oD || ih[457] !== iX || ih[458] !== aT ? (nu = oD && null != aT && null == iX ? (0, i.jsx)(eh.a, {
                statusState: aT,
                size: ap ? "default" : "compact"
            }) : (0, i.jsx)(U.a, {
                badgeEnabled: oO,
                children: iX ?? (0, i.jsx)(_.Ib, {})
            }), ih[454] = ap, ih[455] = oO, ih[456] = oD, ih[457] = iX, ih[458] = aT, ih[459] = nu) : nu = ih[459], ih[460] !== sM || ih[461] !== na || ih[462] !== sR || ih[463] !== nl || ih[464] !== sN || ih[465] !== no || ih[466] !== nr || ih[467] !== ns || ih[468] !== nc || ih[469] !== nu ? (nd = (0, i.jsx)(q.a, {
                ref: lE,
                className: na,
                "aria-description": sR,
                "aria-label": nl,
                autoFocus: sN,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: no,
                onPointerEnter: nr,
                onKeyDown: ns,
                onPointerDown: nc,
                children: nu
            }, sM), ih[460] = sM, ih[461] = na, ih[462] = sR, ih[463] = nl, ih[464] = sN, ih[465] = no, ih[466] = nr, ih[467] = ns, ih[468] = nc, ih[469] = nu, ih[470] = nd) : nd = ih[470], ih[471] !== sC || ih[472] !== sj || ih[473] !== sk || ih[474] !== nn || ih[475] !== sE || ih[476] !== ni || ih[477] !== nd ? (nh = (0, i.jsx)(d.a.div, {
                ref: E.c,
                className: "pointer-events-none absolute",
                style: sC,
                "aria-hidden": sj,
                "data-pip-obstacle": sk,
                animate: nn,
                initial: !1,
                inert: sE,
                transition: ni,
                children: nd
            }), ih[471] = sC, ih[472] = sj, ih[473] = sk, ih[474] = nn, ih[475] = sE, ih[476] = ni, ih[477] = nd, ih[478] = nh) : nh = ih[478];
            let sT = nh,
                sL = "ready" === e6.type ? (0, i.jsx)(W, {
                    items: e6.value,
                    availableHeight: Math.max(0, (ib?.height ?? aB) - o2 - aO - (i_ ? rD.height : o9) - 32 - 12),
                    isDockedTop: lg,
                    shouldReduceMotion: aW
                }) : null;
            !ap && (np = ey, op ? np = rQ : null != lF || lQ || (np = "none"));
            let sD = null != lF || !i_;
            ih[479] !== ap || ih[480] !== rv || ih[481] !== rg || ih[482] !== rm || ih[483] !== rf || ih[484] !== r3 ? (nm = ap ? {
                x: rm,
                y: rf,
                width: rg,
                height: rv,
                borderRadius: r3
            } : void 0, ih[479] = ap, ih[480] = rv, ih[481] = rg, ih[482] = rm, ih[483] = rf, ih[484] = r3, ih[485] = nm) : nm = ih[485], ih[486] !== ap || ih[487] !== r1 || ih[488] !== r2 || ih[489] !== r3 || ih[490] !== r0 || ih[491] !== rJ ? (nf = ap ? {
                top: rJ,
                right: r0,
                bottom: r1,
                left: r2,
                borderRadius: r3
            } : void 0, ih[486] = ap, ih[487] = r1, ih[488] = r2, ih[489] = r3, ih[490] = r0, ih[491] = rJ, ih[492] = nf) : nf = ih[492], ih[493] !== rl || ih[494] !== ru ? (ng = {
                height: rl,
                width: ru
            }, ih[493] = rl, ih[494] = ru, ih[495] = ng) : ng = ih[495];
            let sq = ap && oJ,
                s_ = ap && !oJ ? o0 : void 0,
                sF = oC && oX;
            ih[496] !== o6 || ih[497] !== o8 ? (nv = {
                height: o6,
                width: o8
            }, ih[496] = o6, ih[497] = o8, ih[498] = nv) : nv = ih[498], ih[499] !== sT || ih[500] !== iY ? (nb = null == iY ? sT : (0, i.jsx)(Q.a, {
                disableNative: !0,
                items: iY,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: sT
                })
            }), ih[499] = sT, ih[500] = iY, ih[501] = nb) : nb = ih[501], ih[502] !== ri || ih[503] !== ra ? (nx = {
                height: ri,
                width: ra
            }, ih[502] = ri, ih[503] = ra, ih[504] = nx) : nx = ih[504];
            let sI = !li && !av,
                sA = op || ap ? "panel" : ig,
                sW = oY ? void 0 : i$,
                sH = oY ? aF : void 0,
                sB = null != ib && void 0;
            ih[505] !== i9 || ih[506] !== rs || ih[507] !== aW ? (ny = i9 ? {
                opacity: +!!rs,
                translateY: 8 * (!rs && !aW)
            } : {}, ih[505] = i9, ih[506] = rs, ih[507] = aW, ih[508] = ny) : ny = ih[508];
            let sK = ap || l3?.stage !== "approaching" ? 1 : .95;
            ih[509] !== ru || ih[510] !== ny || ih[511] !== sK ? (nw = {
                ...ny,
                width: ru,
                scale: sK
            }, ih[509] = ru, ih[510] = ny, ih[511] = sK, ih[512] = nw) : nw = ih[512];
            let sO = !!ap && void 0 !== ix && !!lQ || void 0,
                s$ = !ap && ox || void 0,
                sV = i_ ? void 0 : aE,
                sX = !li,
                sY = null == ib ? void 0 : {
                    left: rK.left - rI.x,
                    right: rK.right - rI.x,
                    top: rK.top - rI.y,
                    bottom: rK.bottom - rI.y
                },
                sZ = null == ib ? void 0 : 0;
            ih[513] !== i9 || ih[514] !== aW ? (nS = !!i9 && !aW && {
                opacity: 0,
                translateY: 8
            }, ih[513] = i9, ih[514] = aW, ih[515] = nS) : nS = ih[515];
            let sU = null == ib ? "dialog" : "region",
                sQ = lg ? o2 + 10 : "auto",
                sG = lg ? "auto" : 10 + aO,
                sJ = oJ ? "50%" : "auto";
            ih[516] !== o0 || ih[517] !== oJ ? (nz = !oJ && {
                [o0]: 10
            }, ih[516] = o0, ih[517] = oJ, ih[518] = nz) : nz = ih[518];
            let s0 = oJ ? "-50% 0" : void 0,
                s1 = "bottom-center" === rq ? .5 : Number(rq.endsWith("right")),
                s2 = +!rq.startsWith("top");
            ih[519] !== ro || ih[520] !== rL || ih[521] !== lz || ih[522] !== lC || ih[523] !== sQ || ih[524] !== sG || ih[525] !== sJ || ih[526] !== nz || ih[527] !== s0 || ih[528] !== s1 || ih[529] !== s2 ? (nC = {
                ...rL,
                height: ro,
                top: sQ,
                bottom: sG,
                left: sJ,
                right: "auto",
                ...nz,
                translate: s0,
                x: lz,
                y: lC,
                originX: s1,
                originY: s2
            }, ih[519] = ro, ih[520] = rL, ih[521] = lz, ih[522] = lC, ih[523] = sQ, ih[524] = sG, ih[525] = sJ, ih[526] = nz, ih[527] = s0, ih[528] = s1, ih[529] = s2, ih[530] = nC) : nC = ih[530];
            let s3 = .3 * !aW;
            ih[531] !== s3 ? (nj = {
                duration: s3,
                ease: N.e
            }, ih[531] = s3, ih[532] = nj) : nj = ih[532], ih[533] !== rc || ih[534] !== nj ? (nk = {
                duration: rc,
                ease: N.e,
                scale: nj
            }, ih[533] = rc, ih[534] = nj, ih[535] = nk) : nk = ih[535], ih[536] !== ap || ih[537] !== ao || ih[538] !== al || ih[539] !== aI || ih[540] !== lU || ih[541] !== lB || ih[542] !== lW || ih[543] !== l_ || ih[544] !== lI || ih[545] !== oN ? (nE = e => {
                if (!(al || eM(e.currentTarget, e.relatedTarget, aI))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && eM(t, t.ownerDocument.activeElement, aI) || (lB(!1), lU(!1), lW(!1))
                        });
                        return
                    }
                    lB(!1), lU(!1), lW(!1), (!ap || ao) && oN && null == e.target.closest("[inert]") && (lI(null), l_("compact"))
                }
            }, ih[536] = ap, ih[537] = ao, ih[538] = al, ih[539] = aI, ih[540] = lU, ih[541] = lB, ih[542] = lW, ih[543] = l_, ih[544] = lI, ih[545] = oN, ih[546] = nE) : nE = ih[546], ih[547] !== ow || ih[548] !== ap || ih[549] !== tW || ih[550] !== ox || ih[551] !== ao || ih[552] !== i_ || ih[553] !== l_ || ih[554] !== lI || ih[555] !== oC || ih[556] !== tO ? (nM = e => {
                if (!(ao && (0 !== e.button || e.ctrlKey) || i_ || l5.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (ox && (e.target === e.currentTarget || lj.current?.contains(e.target))) return void tW();
                    if (ao) {
                        if (!oC || !ow) return;
                        ox && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), lI(null), l_("expanded");
                        return
                    }
                    if (ap) {
                        ox && ow && tW();
                        return
                    }
                    oC && ow && e.target.closest("header[data-quick-chat-drag-handle]") && (ox && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), tO())
                }
            }, ih[547] = ow, ih[548] = ap, ih[549] = tW, ih[550] = ox, ih[551] = ao, ih[552] = i_, ih[553] = l_, ih[554] = lI, ih[555] = oC, ih[556] = tO, ih[557] = nM) : nM = ih[557], ih[558] !== ap || ih[559] !== o6 || ih[560] !== o8 || ih[561] !== ri || ih[562] !== ra || ih[563] !== i_ || ih[564] !== iB || ih[565] !== ac || ih[566] !== oo || ih[567] !== l_ || ih[568] !== lI || ih[569] !== st ? (nP = e => {
                ap && !i_ && !l5.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (lI(null), l_("expanded"), oo(null), el(ac, P, () => iB?.("bottom-right")), st("bottom-right", !0, {
                    height: eP(P.height, ri, o6),
                    width: eP(P.width + 12, ra, o8)
                }))
            }, ih[558] = ap, ih[559] = o6, ih[560] = o8, ih[561] = ri, ih[562] = ra, ih[563] = i_, ih[564] = iB, ih[565] = ac, ih[566] = oo, ih[567] = l_, ih[568] = lI, ih[569] = st, ih[570] = nP) : nP = ih[570], ih[571] !== al ? (nR = e => {
                !al && l5.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, ih[571] = al, ih[572] = nR) : nR = ih[572], ih[573] !== ap || ih[574] !== r9 || ih[575] !== l3 || ih[576] !== eF || ih[577] !== iI || ih[578] !== lq || ih[579] !== l4 || ih[580] !== lI ? (nN = (e, t) => {
                let n = r9(t);
                if (!iI?.(n.suppressEdgeDrop ? null : e) && null != n.dockPosition && (ap ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching",
                        t = ap ? eF : n.dockPosition;
                    (l3?.stage !== e || l3.dockPosition !== t) && (l4({
                        dockPosition: t,
                        stage: e
                    }), (n.shouldMinimize || l3?.stage === "minimized") && lI(ap ? null : {
                        target: n.shouldMinimize ? "minimized" : lq
                    }))
                } else null != l3 && "restored" !== l3.stage && (l4({
                    ...l3,
                    stage: "restored"
                }), "minimized" === l3.stage && lI(ap ? null : {
                    target: lq
                }))
            }, ih[573] = ap, ih[574] = r9, ih[575] = l3, ih[576] = eF, ih[577] = iI, ih[578] = lq, ih[579] = l4, ih[580] = lI, ih[581] = nN) : nN = ih[581], ih[582] !== ap || ih[583] !== ay || ih[584] !== lz || ih[585] !== lC || ih[586] !== r9 || ih[587] !== av || ih[588] !== lr || ih[589] !== sl || ih[590] !== l3 || ih[591] !== eF || ih[592] !== iA || ih[593] !== iI || ih[594] !== lq || ih[595] !== au || ih[596] !== se || ih[597] !== lG || ih[598] !== l4 || ih[599] !== lI || ih[600] !== aW || ih[601] !== st ? (nT = (e, t) => {
                if (lx.current) return;
                let n = r9(t),
                    i = n.suppressEdgeDrop ? null : e,
                    a = e => !!iA?.(i, e) && (lz.jump(0), lC.jump(0), l4(null), lI(null), lG(!1), !0),
                    l = aw.current;
                av && ay && l && i && iI?.(i) ? function(e) {
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
                        let e = au.get(S.l.tabById$, ef.a);
                        return null == e ? null : l.ownerDocument.getElementById((0, z.a)(e.dndId))
                    },
                    destination: () => au.get(ev.a),
                    reducedMotion: aW,
                    update: () => {
                        !lx.current && (a("pin") || (st(n.requestedDockPosition, !0), lG(!1)))
                    }
                }) : a() || (n.shouldMinimize ? (0, f.flushSync)(() => {
                    ap && lr || se(ap ? eF : n.requestedDockPosition, !0), sl()
                }) : (st(n.requestedDockPosition, !0), null != l3 && "restored" !== l3.stage && (l4({
                    ...l3,
                    stage: "restored"
                }), "minimized" === l3.stage && lI(ap ? null : {
                    target: lq
                }))), lG(!1))
            }, ih[582] = ap, ih[583] = ay, ih[584] = lz, ih[585] = lC, ih[586] = r9, ih[587] = av, ih[588] = lr, ih[589] = sl, ih[590] = l3, ih[591] = eF, ih[592] = iA, ih[593] = iI, ih[594] = lq, ih[595] = au, ih[596] = se, ih[597] = lG, ih[598] = l4, ih[599] = lI, ih[600] = aW, ih[601] = st, ih[602] = nT) : nT = ih[602], ih[603] !== lz || ih[604] !== lC || ih[605] !== lG || ih[606] !== lW ? (nL = () => {
                lW(!1), lx.current = !1, l5.current = !0, lG(!0), lz.stop(), lC.stop()
            }, ih[603] = lz, ih[604] = lC, ih[605] = lG, ih[606] = lW, ih[607] = nL) : nL = ih[607], ih[608] !== ow || ih[609] !== iC || ih[610] !== ap || ih[611] !== ao || ih[612] !== l$ || ih[613] !== lU || ih[614] !== lB || ih[615] !== l_ || ih[616] !== lI || ih[617] !== oC ? (nD = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!ap || ao) && lB(!0), lU(!0), (ao ? oC && ow : ap) && null == iC && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !l$ && null == lX.current && (lI(null), l_("expanded"))) : e.currentTarget.contains(e.target) && !lj.current?.contains(e.target) && (lU(!1), ao && e.target.closest("header[data-quick-chat-drag-handle]") && lB(!0))
            }, ih[608] = ow, ih[609] = iC, ih[610] = ap, ih[611] = ao, ih[612] = l$, ih[613] = lU, ih[614] = lB, ih[615] = l_, ih[616] = lI, ih[617] = oC, ih[618] = nD) : nD = ih[618], ih[619] !== lb || ih[620] !== al ? (nq = e => {
                al || "Escape" !== e.key || (l5.current = !0, lb.cancel())
            }, ih[619] = lb, ih[620] = al, ih[621] = nq) : nq = ih[621], ih[622] !== ae || ih[623] !== al || ih[624] !== li || ih[625] !== rO ? (n_ = e => {
                if (al || (l5.current = !1, li || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                    i = lj.current,
                    a = e.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                if (ae && null != a && i?.contains(a) && (n === a || e.target.contains(a))) t = i;
                else if (null == t || null != n && n !== t) return;
                e.preventDefault(), t.setPointerCapture(e.pointerId), rO(e)
            }, ih[622] = ae, ih[623] = al, ih[624] = li, ih[625] = rO, ih[626] = n_) : n_ = ih[626], ih[627] !== lW ? (nF = () => {
                lM.current?.contains(document.activeElement) || lW(!1)
            }, ih[627] = lW, ih[628] = nF) : nF = ih[628], ih[629] !== lb || ih[630] !== tB || ih[631] !== ip || ih[632] !== sW || ih[633] !== sH || ih[634] !== sB || ih[635] !== nw || ih[636] !== sO || ih[637] !== s$ || ih[638] !== sV || ih[639] !== sX || ih[640] !== sY || ih[641] !== sZ || ih[642] !== nS || ih[643] !== sU || ih[644] !== nC || ih[645] !== nk || ih[646] !== nE || ih[647] !== nM || ih[648] !== nP || ih[649] !== nR || ih[650] !== nN || ih[651] !== nT || ih[652] !== nL || ih[653] !== nD || ih[654] !== nq || ih[655] !== n_ || ih[656] !== nF ? (nI = {
                ref: ip,
                "aria-label": sW,
                "aria-labelledby": sH,
                "aria-modal": sB,
                animate: nw,
                "data-chat-pane-dragging": sO,
                "data-quick-chat-drag-handle": s$,
                "data-pip-obstacle": sV,
                "data-state": "open",
                drag: sX,
                dragConstraints: sY,
                dragElastic: sZ,
                dragControls: lb,
                dragListener: !1,
                dragMomentum: !1,
                initial: nS,
                role: sU,
                tabIndex: -1,
                style: nC,
                transition: nk,
                onBlurCapture: nE,
                onClick: nM,
                onDoubleClick: nP,
                onClickCapture: nR,
                onDrag: nN,
                onDragEnd: nT,
                onDragStart: nL,
                onFocusCapture: nD,
                onKeyDown: tB,
                onKeyDownCapture: nq,
                onPointerDownCapture: n_,
                onPointerLeave: nF
            }, ih[629] = lb, ih[630] = tB, ih[631] = ip, ih[632] = sW, ih[633] = sH, ih[634] = sB, ih[635] = nw, ih[636] = sO, ih[637] = s$, ih[638] = sV, ih[639] = sX, ih[640] = sY, ih[641] = sZ, ih[642] = nS, ih[643] = sU, ih[644] = nC, ih[645] = nk, ih[646] = nE, ih[647] = nM, ih[648] = nP, ih[649] = nR, ih[650] = nN, ih[651] = nT, ih[652] = nL, ih[653] = nD, ih[654] = nq, ih[655] = n_, ih[656] = nF, ih[657] = nI) : nI = ih[657];
            let s4 = null == ib ? "floating" : "content",
                s5 = lg ? "bottom" : "top";
            ih[658] !== lz || ih[659] !== lC || ih[660] !== l7 || ih[661] !== lI ? (nA = e => {
                l7(e), e && (lI(null), lz.stop(), lC.stop())
            }, ih[658] = lz, ih[659] = lC, ih[660] = l7, ih[661] = lI, ih[662] = nA) : nA = ih[662], ih[663] !== e6.type || ih[664] !== sL || ih[665] !== ap || ih[666] !== oB || ih[667] !== lg || ih[668] !== i_ || ih[669] !== lt || ih[670] !== r5 || ih[671] !== aE || ih[672] !== lB ? (nW = !ap && oB && "ready" === e6.type ? (0, i.jsx)("div", {
                ref: (0, T.a)(lM, lt, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !i_ && (lg ? "top-full" : "bottom-full"), lg ? "pt-3" : "pb-3"),
                "data-pip-obstacle": aE,
                onClickCapture: () => {
                    (i_ ? lE.current : lk.current)?.focus({
                        preventScroll: !0
                    }), lB(!1)
                },
                style: i_ ? r5 : void 0,
                children: sL
            }) : null, ih[663] = e6.type, ih[664] = sL, ih[665] = ap, ih[666] = oB, ih[667] = lg, ih[668] = i_, ih[669] = lt, ih[670] = r5, ih[671] = aE, ih[672] = lB, ih[673] = nW) : nW = ih[673], ih[674] !== sL || ih[675] !== ap || ih[676] !== oB || ih[677] !== lg || ih[678] !== i_ || ih[679] !== lt || ih[680] !== r5 || ih[681] !== lU || ih[682] !== lB || ih[683] !== aW ? (nH = ap && oB ? (0, i.jsx)(d.a.div, {
                initial: {
                    opacity: 0,
                    y: 8 * !aW
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 8 * !aW
                },
                transition: {
                    duration: .3 * !aW,
                    ease: N.e
                },
                ref: (0, T.a)(lM, lt, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !i_ && (lg ? "top-full" : "bottom-full"), i_ && (lg ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (i_ ? lE.current : lk.current)?.focus({
                        preventScroll: !0
                    }), lB(!1), lU(!1)
                },
                style: i_ ? r5 : void 0,
                children: i_ ? (0, i.jsx)(k.c, {
                    variant: "notice",
                    children: sL
                }) : sL
            }, "response-preview") : null, ih[674] = sL, ih[675] = ap, ih[676] = oB, ih[677] = lg, ih[678] = i_, ih[679] = lt, ih[680] = r5, ih[681] = lU, ih[682] = lB, ih[683] = aW, ih[684] = nH) : nH = ih[684], ih[685] !== nH ? (nB = (0, i.jsx)(h.a, {
                initial: !1,
                children: nH
            }), ih[685] = nH, ih[686] = nB) : nB = ih[686], ih[687] !== rk || ih[688] !== ap || ih[689] !== ak || ih[690] !== tW || ih[691] !== oS || ih[692] !== oz || ih[693] !== lg || ih[694] !== al || ih[695] !== i2 || ih[696] !== aW || ih[697] !== oM ? (nK = ap && void 0 !== i2 && !al && !oz && (0, i.jsx)(ek, {
                compact: oS,
                preview: oM ? i2 : null,
                reduceMotion: aW,
                isDockedTop: lg,
                opacity: rk,
                onExpand: tW
            }, ak), ih[687] = rk, ih[688] = ap, ih[689] = ak, ih[690] = tW, ih[691] = oS, ih[692] = oz, ih[693] = lg, ih[694] = al, ih[695] = i2, ih[696] = aW, ih[697] = oM, ih[698] = nK) : nK = ih[698];
            let s6 = lg ? "top-full pt-2" : "bottom-full";
            ih[699] !== s6 ? (nO = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", s6), ih[699] = s6, ih[700] = nO) : nO = ih[700], ih[701] !== a7 || ih[702] !== op || ih[703] !== nO ? (n$ = (0, i.jsx)("div", {
                ref: a7,
                className: nO,
                hidden: op
            }), ih[701] = a7, ih[702] = op, ih[703] = nO, ih[704] = n$) : n$ = ih[704];
            let s7 = 0 === o1 && "pt-2",
                s8 = lg ? "w-full" : "w-80",
                s9 = oJ && "left-1/2 -translate-x-1/2",
                ce = !oJ && (oG ? "left-0" : "right-0"),
                ct = op && lQ && "invisible";
            ih[705] !== s7 || ih[706] !== s8 || ih[707] !== s9 || ih[708] !== ce || ih[709] !== ct ? (nV = (0, l.b)(L.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", s7, s8, s9, ce, ct), ih[705] = s7, ih[706] = s8, ih[707] = s9, ih[708] = ce, ih[709] = ct, ih[710] = nV) : nV = ih[710], ih[711] !== o1 ? (nX = {
                marginTop: o1
            }, ih[711] = o1, ih[712] = nX) : nX = ih[712], ih[713] !== ik || ih[714] !== a8 || ih[715] !== aE || ih[716] !== nV || ih[717] !== nX ? (nY = (0, i.jsx)("div", {
                ref: a8,
                className: nV,
                style: nX,
                "data-pip-obstacle": aE,
                children: ik
            }), ih[713] = ik, ih[714] = a8, ih[715] = aE, ih[716] = nV, ih[717] = nX, ih[718] = nY) : nY = ih[718], ih[719] !== np || ih[720] !== ap || ih[721] !== op ? (nZ = ap ? void 0 : {
                clipPath: np,
                opacity: +!op
            }, ih[719] = np, ih[720] = ap, ih[721] = op, ih[722] = nZ) : nZ = ih[722];
            let cn = !oz && "pointer-events-auto";
            ih[723] !== cn ? (nU = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", cn), ih[723] = cn, ih[724] = nU) : nU = ih[724], ih[725] !== of || ih[726] !== ap || ih[727] !== r4 ? (nQ = ap ? {
                clipPath: r4,
                opacity: of
            } : void 0, ih[725] = of, ih[726] = ap, ih[727] = r4, ih[728] = nQ) : nQ = ih[728];
            let ci = !!oz || void 0;
            ih[729] !== ap || ih[730] !== lF || ih[731] !== aW ? (nG = aW || !ap && null == lF ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, ih[729] = ap, ih[730] = lF, ih[731] = aW, ih[732] = nG) : nG = ih[732], ih[733] !== op || ih[734] !== rQ || ih[735] !== lq || ih[736] !== lF || ih[737] !== lI ? (nJ = e => {
                lF?.target === (op ? "minimized" : lq) && "object" == typeof e && "clipPath" in e && e.clipPath === (op ? rQ : ey) && lI(e => e === lF ? null : e)
            }, ih[733] = op, ih[734] = rQ, ih[735] = lq, ih[736] = lF, ih[737] = lI, ih[738] = nJ) : nJ = ih[738], ih[739] !== ap || ih[740] !== ox || ih[741] !== lg || ih[742] !== sl || ih[743] !== oC ? (n0 = !ap && !oC && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", lg ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(ee.c, {
                    standalone: !0,
                    isCompact: ox,
                    onMinimize: sl
                })
            }), ih[739] = ap, ih[740] = ox, ih[741] = lg, ih[742] = sl, ih[743] = oC, ih[744] = n0) : n0 = ih[744], ih[745] !== ap || ih[746] !== sz || ih[747] !== oS || ih[748] !== lQ || ih[749] !== sl || ih[750] !== iN || ih[751] !== oC ? (n1 = (ap || oC) && (iN?.({
                contextMenuTrigger: sz,
                isCompact: oS,
                isDragging: lQ,
                onMinimize: sl
            }) ?? sz), ih[745] = ap, ih[746] = sz, ih[747] = oS, ih[748] = lQ, ih[749] = sl, ih[750] = iN, ih[751] = oC, ih[752] = n1) : n1 = ih[752], ih[753] !== iy || ih[754] !== ax ? (n2 = ax && (0, i.jsx)(eg.a, {
                hasPagePicker: iy
            }), ih[753] = iy, ih[754] = ax, ih[755] = n2) : n2 = ih[755];
            let ca = oS && "justify-end";
            ih[756] !== ca ? (n3 = (0, l.b)("relative flex min-h-0 flex-1 flex-col", ca), ih[756] = ca, ih[757] = n3) : n3 = ih[757];
            let cl = ap ? oS : aM.followLatestTranscript;
            ih[758] !== aM || ih[759] !== cl ? (n4 = {
                ...aM,
                isFloatingChatSurface: !0,
                followLatestTranscript: cl
            }, ih[758] = aM, ih[759] = cl, ih[760] = n4) : n4 = ih[760];
            let co = ap ? "absolute inset-x-0 overflow-hidden" : "contents";
            ih[761] !== l8 || ih[762] !== ap || ih[763] !== rx ? (n5 = ap ? {
                bottom: l8,
                height: rx
            } : void 0, ih[761] = l8, ih[762] = ap, ih[763] = rx, ih[764] = n5) : n5 = ih[764], ih[765] !== rk || ih[766] !== oj || ih[767] !== aq || ih[768] !== oS || ih[769] !== a5 || ih[770] !== iJ ? (n6 = oj && !aq && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) bottom-0 px-4 py-3 text-sm text-default",
                "aria-hidden": !oS,
                style: {
                    opacity: rk
                },
                ref: a5,
                children: iJ ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…"
                })
            }), ih[765] = rk, ih[766] = oj, ih[767] = aq, ih[768] = oS, ih[769] = a5, ih[770] = iJ, ih[771] = n6) : n6 = ih[771];
            let cr = !ap && (oS ? "hidden" : "flex"),
                cs = ap && "absolute inset-x-0 bottom-0 flex",
                cc = ap && "overflow-hidden";
            ih[772] !== cr || ih[773] !== cs || ih[774] !== cc ? (n7 = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", cr, cs, cc), ih[772] = cr, ih[773] = cs, ih[774] = cc, ih[775] = n7) : n7 = ih[775], ih[776] !== l8 || ih[777] !== ap || ih[778] !== rn || ih[779] !== av || ih[780] !== rC || ih[781] !== rj || ih[782] !== rz ? (n8 = ap ? {
                height: av ? void 0 : Math.max(0, rn - 46 - l8),
                top: av ? 0 : void 0,
                opacity: rj,
                clipPath: rC,
                y: rz
            } : void 0, ih[776] = l8, ih[777] = ap, ih[778] = rn, ih[779] = av, ih[780] = rC, ih[781] = rj, ih[782] = rz, ih[783] = n8) : n8 = ih[783], ih[784] !== ap || ih[785] !== aC || ih[786] !== oy || ih[787] !== oS || ih[788] !== al || ih[789] !== op || ih[790] !== i4 || ih[791] !== l_ || ih[792] !== lI ? (n9 = aC && (!oy || ap) ? i4?.(() => {
                lI(null), l_("compact")
            }, !oS && !al && !op) : null, ih[784] = ap, ih[785] = aC, ih[786] = oy, ih[787] = oS, ih[788] = al, ih[789] = op, ih[790] = i4, ih[791] = l_, ih[792] = lI, ih[793] = n9) : n9 = ih[793], ih[794] !== ap || ih[795] !== az || ih[796] !== aC || ih[797] !== oS || ih[798] !== rc ? (ie = !aC && (0, i.jsx)(h.a, {
                initial: !1,
                children: (ap || !oS) && null != az && (0, i.jsx)(d.a.div, {
                    className: "flex min-h-0 flex-1 flex-col",
                    initial: !ap && {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: rc,
                        ease: N.e
                    },
                    children: az
                }, "empty-state")
            }), ih[794] = ap, ih[795] = az, ih[796] = aC, ih[797] = oS, ih[798] = rc, ih[799] = ie) : ie = ih[799], ih[800] !== oS || ih[801] !== aJ || ih[802] !== n7 || ih[803] !== n8 || ih[804] !== n9 || ih[805] !== ie ? (it = (0, i.jsxs)(d.a.div, {
                ref: aJ,
                "aria-hidden": oS,
                className: n7,
                inert: oS,
                style: n8,
                children: [n9, ie]
            }), ih[800] = oS, ih[801] = aJ, ih[802] = n7, ih[803] = n8, ih[804] = n9, ih[805] = ie, ih[806] = it) : it = ih[806], ih[807] !== ap || ih[808] !== tW || ih[809] !== oj || ih[810] !== oS || ih[811] !== sr || ih[812] !== i0 ? (ii = ap && oS && oj && (0, i.jsx)(eE, {
                label: sr,
                responsePreview: i0,
                onExpand: tW
            }), ih[807] = ap, ih[808] = tW, ih[809] = oj, ih[810] = oS, ih[811] = sr, ih[812] = i0, ih[813] = ii) : ii = ih[813], ih[814] !== co || ih[815] !== n5 || ih[816] !== n6 || ih[817] !== it || ih[818] !== ii ? (ia = (0, i.jsxs)(d.a.div, {
                className: co,
                style: n5,
                children: [n6, it, ii]
            }), ih[814] = co, ih[815] = n5, ih[816] = n6, ih[817] = it, ih[818] = ii, ih[819] = ia) : ia = ih[819], ih[820] !== n4 || ih[821] !== ia ? (il = (0, i.jsx)(ep.b, {
                value: n4,
                children: ia
            }), ih[820] = n4, ih[821] = ia, ih[822] = il) : il = ih[822];
            let cu = iN?.({
                contextMenuTrigger: sb,
                isCompact: oS,
                isDragging: lQ,
                onMinimize: sl
            }) ?? sb;
            ih[823] !== n3 || ih[824] !== il || ih[825] !== cu ? (io = (0, i.jsxs)("div", {
                className: n3,
                children: [il, cu]
            }), ih[823] = n3, ih[824] = il, ih[825] = cu, ih[826] = io) : io = ih[826], ih[827] !== lf || ih[828] !== oz || ih[829] !== nZ || ih[830] !== nU || ih[831] !== nQ || ih[832] !== ci || ih[833] !== nG || ih[834] !== nJ || ih[835] !== n0 || ih[836] !== n1 || ih[837] !== n2 || ih[838] !== io ? (ir = (0, i.jsxs)(d.a.div, {
                "aria-hidden": oz,
                animate: nZ,
                className: nU,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": lf,
                style: nQ,
                initial: !1,
                inert: ci,
                transition: nG,
                onAnimationComplete: nJ,
                children: [n0, n1, n2, io]
            }), ih[827] = lf, ih[828] = oz, ih[829] = nZ, ih[830] = nU, ih[831] = nQ, ih[832] = ci, ih[833] = nG, ih[834] = nJ, ih[835] = n0, ih[836] = n1, ih[837] = n2, ih[838] = io, ih[839] = ir) : ir = ih[839], ih[840] !== D || ih[841] !== sa || ih[842] !== ox || ih[843] !== op || ih[844] !== rU || ih[845] !== iE || ih[846] !== si || ih[847] !== su || ih[848] !== sc || ih[849] !== aW || ih[850] !== sD || ih[851] !== nm || ih[852] !== nf || ih[853] !== ng || ih[854] !== sq || ih[855] !== s_ || ih[856] !== sF || ih[857] !== nv || ih[858] !== nb || ih[859] !== nx || ih[860] !== sI || ih[861] !== sA || ih[862] !== nI || ih[863] !== s4 || ih[864] !== s5 || ih[865] !== nA || ih[866] !== nW || ih[867] !== nB || ih[868] !== nK || ih[869] !== n$ || ih[870] !== nY || ih[871] !== ir ? (is = (0, i.jsxs)(D, {
                contentRef: aw,
                allowCompactResize: !0,
                animateSurface: sD,
                contentStyle: nm,
                surfaceStyle: nf,
                currentSize: ng,
                heightLabel: su,
                resizeFromCenter: sq,
                fixedHorizontalEdge: s_,
                isCompact: ox,
                isCompactChromeRevealed: sF,
                isMinimized: op,
                keepSurfaceInset: !0,
                maximumSize: nv,
                minimizedContent: nb,
                minimizedSurfaceBounds: rU,
                minimumSize: nx,
                prefersCompactPresentation: !0,
                resizable: sI,
                background: sA,
                sectionRef: lk,
                sectionProps: nI,
                shouldReduceMotion: aW,
                variant: s4,
                verticalResizeEdge: s5,
                widthLabel: sc,
                onResize: si,
                onResizeEnd: sa,
                onResizingChange: nA,
                children: [nW, nB, nK, n$, nY, ir, iE]
            }), ih[840] = D, ih[841] = sa, ih[842] = ox, ih[843] = op, ih[844] = rU, ih[845] = iE, ih[846] = si, ih[847] = su, ih[848] = sc, ih[849] = aW, ih[850] = sD, ih[851] = nm, ih[852] = nf, ih[853] = ng, ih[854] = sq, ih[855] = s_, ih[856] = sF, ih[857] = nv, ih[858] = nb, ih[859] = nx, ih[860] = sI, ih[861] = sA, ih[862] = nI, ih[863] = s4, ih[864] = s5, ih[865] = nA, ih[866] = nW, ih[867] = nB, ih[868] = nK, ih[869] = n$, ih[870] = nY, ih[871] = ir, ih[872] = is) : is = ih[872];
            let cd = is;
            return ih[873] !== aI ? (ic = {
                id: aI
            }, ih[873] = aI, ih[874] = ic) : ic = ih[874], ih[875] !== ap || ih[876] !== a4 ? (iu = ap && (0, i.jsx)("div", {
                ref: a4,
                "aria-hidden": !0,
                className: (0, l.b)(em.a, "pointer-events-none invisible absolute")
            }), ih[875] = ap, ih[876] = a4, ih[877] = iu) : iu = ih[877], ih[878] !== cd || ih[879] !== ic || ih[880] !== iu ? (id = (0, i.jsxs)(G.a, {
                value: ic,
                children: [iu, cd]
            }), ih[878] = cd, ih[879] = ic, ih[880] = iu, ih[881] = id) : id = ih[881], id
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

        function eE(e) {
            let t, n = (0, a.c)(4),
                {
                    label: l,
                    responsePreview: o,
                    onExpand: r
                } = e,
                s = (0, p.z)(o) ?? void 0;
            return n[0] !== l || n[1] !== r || n[2] !== s ? (t = (0, i.jsx)(q.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "absolute inset-0",
                "aria-label": l,
                "aria-description": s,
                "data-quick-chat-drag-handle": !0,
                onClick: r
            }), n[0] = l, n[1] = r, n[2] = s, n[3] = t) : t = n[3], t
        }

        function eM(e, t, n) {
            return t instanceof Node && (e.contains(t) || t instanceof Element && (null != t.closest("[data-composer-overlay-floating-ui], [data-content-search-bar], [data-composer-focus-target]") || null != t.closest("[data-floating-chat-annotation-layer]") || t.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === n))
        }

        function eP(e, t, n) {
            return Math.max(t, Math.min(e, n))
        }

        function eR() {
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
                    R = (S || null == y) && "cursor-interaction",
                    N = b && "mx-1.5 border-b border-default px-2",
                    T = !b && "px-3";
                return p[11] !== M || p[12] !== P || p[13] !== R || p[14] !== N || p[15] !== T ? (c = (0, l.b)("flex h-toolbar touch-none select-none items-center justify-between", M, P, R, N, T), p[11] = M, p[12] = P, p[13] = R, p[14] = N, p[15] = T, p[16] = c) : c = p[16], p[17] !== g || p[18] !== c ? (d = (0, i.jsx)("div", {
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
                R = (0, r.useRef)(null);
            g[0] !== k || g[1] !== x || g[2] !== w || g[3] !== E || g[4] !== C || g[5] !== M || g[6] !== P ? (t = e => {
                let t = R.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                e.preventDefault();
                let n = {
                    height: u(t.startSize.height + ("top" === M ? -1 : 1) * ((0, s.b)(e.clientY, P) - t.startPointer.y), w.height, x.height),
                    width: u(t.startSize.width + (E ? 2 : 1) * ("left" === k ? -1 : 1) * ((0, s.b)(e.clientX, P) - t.startPointer.x), w.width, x.width)
                };
                t.didMove || (t.didMove = n.height !== t.startSize.height || n.width !== t.startSize.width), t.lastSize = n, C(n)
            }, g[0] = k, g[1] = x, g[2] = w, g[3] = E, g[4] = C, g[5] = M, g[6] = P, g[7] = t) : t = g[7];
            let N = t;
            g[8] !== S || g[9] !== z ? (n = (e, t) => {
                let n = R.current;
                n?.pointerId === e.pointerId && (R.current = null, z?.(!1), t && n.didMove && S?.(n.lastSize))
            }, g[8] = S, g[9] = z, g[10] = n) : n = g[10];
            let T = n,
                L = "top" === M ? "top-0" : "bottom-0",
                D = "left" === k ? "left-0" : "right-0",
                q = "left" === k == ("top" === M) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return g[11] !== L || g[12] !== D || g[13] !== q ? (l = (0, o.b)("group absolute z-50 flex size-4 touch-none select-none", L, D, q), g[11] = L, g[12] = D, g[13] = q, g[14] = l) : l = g[14], g[15] !== T ? (c = e => {
                T(e, !1)
            }, g[15] = T, g[16] = c) : c = g[16], g[17] !== N || g[18] !== T ? (d = e => {
                N(e), T(e, !0)
            }, g[17] = N, g[18] = T, g[19] = d) : d = g[19], g[20] !== b || g[21] !== z || g[22] !== P ? (h = e => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId);
                let t = b();
                R.current = {
                    didMove: !1,
                    lastSize: t,
                    pointerId: e.pointerId,
                    startPointer: {
                        x: (0, s.b)(e.clientX, P),
                        y: (0, s.b)(e.clientY, P)
                    },
                    startSize: t
                }, z?.(!0)
            }, g[20] = b, g[21] = z, g[22] = P, g[23] = h) : h = g[23], g[24] !== N || g[25] !== T ? (p = e => {
                N(e), T(e, !0)
            }, g[24] = N, g[25] = T, g[26] = p) : p = g[26], g[27] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, i.jsx)("div", {
                className: "pointer-events-none m-auto h-px w-2 rotate-45 bg-text/25 opacity-0 group-hover:opacity-100 group-active:opacity-100"
            }), g[27] = m) : m = g[27], g[28] !== N || g[29] !== c || g[30] !== d || g[31] !== h || g[32] !== p || g[33] !== l ? (f = (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: l,
                onLostPointerCapture: c,
                onPointerCancel: d,
                onPointerDown: h,
                onPointerMove: N,
                onPointerUp: p,
                children: m
            }), g[28] = N, g[29] = c, g[30] = d, g[31] = h, g[32] = p, g[33] = l, g[34] = f) : f = g[34], f
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