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
            m = n("BolX"),
            p = n("zd8w"),
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
            k = n("wD9O"),
            j = n("rsCP"),
            E = n("AclY"),
            M = n("sArP");
        let P = {
            height: 640,
            width: 560
        };
        var R = n("hZax"),
            N = n("V8uZ"),
            L = n("HgLj"),
            T = n("h7RI");

        function D(e) {
            let t, n, o, r, s, c, u, h, m, p, f = (0, a.c)(62),
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
                    heightLabel: k,
                    isCompact: D,
                    isCompactChromeRevealed: q,
                    isMinimized: _,
                    keepSurfaceInset: F,
                    maximumSize: I,
                    minimizedContent: A,
                    minimizedSurfaceBounds: H,
                    minimumSize: W,
                    onResize: B,
                    onResizeEnd: O,
                    onResizingChange: $,
                    prefersCompactPresentation: K,
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
            f[0] !== _ || f[1] !== H || f[2] !== el ? (t = _ && null != H ? H : {
                top: 0,
                right: el,
                bottom: el,
                left: el
            }, f[0] = _, f[1] = H, f[2] = el, f[3] = t) : t = f[3];
            let eo = t,
                er = "panel" !== b && "rounded-[inherit]";
            f[4] !== er ? (n = (0, l.b)("pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto", er), f[4] = er, f[5] = n) : n = f[5];
            let es = n,
                ec = "panel" !== b || K;
            f[6] !== X.ref || f[7] !== Y ? (o = (0, L.a)(Y, X.ref, E.c), f[6] = X.ref, f[7] = Y, f[8] = o) : o = f[8];
            let eu = !ea && K && "frame-Xbg62r",
                ed = K && "group/chat-frame focus:outline-none",
                eh = null != H ? "pointer-events-none" : "pointer-events-auto",
                em = K && T.a.floatingSurface,
                ep = F && T.a.singleLineSurface,
                ef = "floating" === Q ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                eg = K ? "overflow-visible" : "overflow-hidden";
            f[9] !== eu || f[10] !== ed || f[11] !== eh || f[12] !== em || f[13] !== ep || f[14] !== ef || f[15] !== eg ? (r = (0, l.b)("flex flex-col text-default", eu, ed, eh, em, ep, ef, eg), f[9] = eu, f[10] = ed, f[11] = eh, f[12] = em, f[13] = ep, f[14] = ef, f[15] = eg, f[16] = r) : r = f[16];
            let ev = null != w ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== ev ? (s = (0, l.b)(ev), f[17] = ev, f[18] = s) : s = f[18], f[19] !== et || f[20] !== b || f[21] !== es || f[22] !== F || f[23] !== A || f[24] !== K || f[25] !== U || f[26] !== eo || f[27] !== Z ? (c = K ? (0, i.jsx)(j.c, {
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
            }) : null, f[19] = et, f[20] = b, f[21] = es, f[22] = F, f[23] = A, f[24] = K, f[25] = U, f[26] = eo, f[27] = Z, f[28] = c) : c = f[28], f[29] !== ee || f[30] !== y || f[31] !== z || f[32] !== k || f[33] !== D || f[34] !== _ || f[35] !== I || f[36] !== W || f[37] !== B || f[38] !== O || f[39] !== $ || f[40] !== ei || f[41] !== en || f[42] !== eo || f[43] !== G || f[44] !== J ? (u = ei && (!D || ee) && !_ ? (0, i.jsx)("div", {
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
                        heightLabel: k,
                        maximumSize: I,
                        minimumSize: W,
                        verticalEdge: D ? null : G,
                        widthLabel: J,
                        onResize: B,
                        onResizeEnd: O,
                        onResizingChange: $
                    })
                })
            }) : null, f[29] = ee, f[30] = y, f[31] = z, f[32] = k, f[33] = D, f[34] = _, f[35] = I, f[36] = W, f[37] = B, f[38] = O, f[39] = $, f[40] = ei, f[41] = en, f[42] = eo, f[43] = G, f[44] = J, f[45] = u) : u = f[45];
            let eb = null == Z ? null : A;
            return f[46] !== x || f[47] !== S || f[48] !== w || f[49] !== s || f[50] !== c || f[51] !== u || f[52] !== eb ? (h = (0, i.jsxs)(d.a.div, {
                ref: S,
                className: s,
                style: w,
                children: [c, u, eb, x]
            }), f[46] = x, f[47] = S, f[48] = w, f[49] = s, f[50] = c, f[51] = u, f[52] = eb, f[53] = h) : h = f[53], f[54] !== X || f[55] !== r || f[56] !== h || f[57] !== o ? (m = (0, i.jsx)(d.a.section, {
                ...X,
                ref: o,
                className: r,
                children: h
            }), f[54] = X, f[55] = r, f[56] = h, f[57] = o, f[58] = m) : m = f[58], f[59] !== m || f[60] !== ec ? (p = (0, i.jsx)(j.c, {
                asChild: !0,
                unstyled: ec,
                children: m
            }), f[59] = m, f[60] = ec, f[61] = p) : p = f[61], p
        }
        var q = n("Sm6l"),
            _ = n("bf6R");

        function F(e) {
            let t, n, l, o, r, s, c, u, d, h, m, f = (0, a.c)(56),
                {
                    title: b,
                    preview: x,
                    onOpen: y,
                    onDismiss: w,
                    isWorking: S,
                    workingContent: z
                } = e,
                C = void 0 !== S && S,
                k = (0, R.f)("2163293173"),
                E = (0, g.a)();
            f[0] !== E || f[1] !== b ? (t = b ?? E.formatMessage({
                id: "quickChat.mainConversation",
                defaultMessage: "Chat",
                description: "Fallback title for the task's main conversation in the floating chat"
            }), f[0] = E, f[1] = b, f[2] = t) : t = f[2];
            let M = t,
                P = (0, p.useEffectEvent)(w);
            if (f[3] !== k || f[4] !== P || f[5] !== C ? (n = () => {
                    if (!k || C) return;
                    let e = window.setTimeout(() => P(), 1e4);
                    return () => window.clearTimeout(e)
                }, f[3] = k, f[4] = P, f[5] = C, f[6] = n) : n = f[6], f[7] !== k || f[8] !== C ? (l = [k, C], f[7] = k, f[8] = C, f[9] = l) : l = f[9], (0, p.useEffect)(n, l), !k) {
                let e, t, n, a, l, o, r, s, c, u;
                return f[10] !== E || f[11] !== M ? (e = E.formatMessage({
                    id: "quickChat.openCompletedResponse",
                    defaultMessage: "Open completed response: {title}",
                    description: "Accessible label for opening a completed response from the floating chat preview"
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
                    defaultMessage: "Response ready",
                    description: "Fallback preview in the floating chat when a turn has completed without displayable text"
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
                    defaultMessage: "Dismiss and mark as read",
                    description: "Close the completed-response notification and mark its conversation as read, without closing the floating composer"
                }), f[25] = E, f[26] = r) : r = f[26], f[27] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(_.sj, {
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
                }), f[28] = w, f[29] = r, f[30] = c) : c = f[30], f[31] !== o || f[32] !== c ? (u = (0, i.jsxs)(j.c, {
                    className: "relative flex shrink-0 select-none",
                    role: "status",
                    variant: "notice",
                    children: [o, c]
                }), f[31] = o, f[32] = c, f[33] = u) : u = f[33], u
            }
            return f[34] !== E || f[35] !== M ? (o = E.formatMessage({
                id: "quickChat.openCompletedResponse",
                defaultMessage: "Open completed response: {title}",
                description: "Accessible label for opening a completed response from the floating chat preview"
            }, {
                title: M
            }), f[34] = E, f[35] = M, f[36] = o) : o = f[36], f[37] !== C || f[38] !== x || f[39] !== z ? (r = C ? z ?? (0, i.jsx)(v.a, {
                id: "quickChat.responseWorking",
                defaultMessage: "Working…",
                description: "Status shown in the floating response banner while the chat is working"
            }) : x || (0, i.jsx)(v.a, {
                id: "quickChat.responseReady",
                defaultMessage: "Response ready",
                description: "Fallback preview in the floating chat when a turn has completed without displayable text"
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
                defaultMessage: "Dismiss response preview",
                description: "Hide the completed-response preview without marking the chat as read or closing the composer"
            }), f[47] = E, f[48] = u) : u = f[48], f[49] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(_.sj, {
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
            }), f[50] = w, f[51] = u, f[52] = h) : h = f[52], f[53] !== h || f[54] !== c ? (m = (0, i.jsxs)("div", {
                className: "relative flex shrink-0 select-none",
                role: "status",
                children: [c, h]
            }), f[53] = h, f[54] = c, f[55] = m) : m = f[55], m
        }
        var I = n("v0Gf"),
            A = n("nsuH");

        function H(e) {
            let t, n, l, o, r, s, c = (0, a.c)(23),
                {
                    items: u,
                    availableHeight: h,
                    isDockedTop: m,
                    shouldReduceMotion: f
                } = e,
                g = (0, R.f)("2163293173"),
                [v, b] = (0, p.useState)(null);
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
                k = y + 16;
            c[3] !== k ? (l = {
                style: {
                    maxHeight: k
                }
            }, c[3] = k, c[4] = l) : l = c[4];
            let j = g ? "relative flex flex-col" : "relative flex flex-col gap-3";
            if (c[5] !== m || c[6] !== u || c[7] !== f || c[8] !== S) {
                let e;
                c[10] !== m || c[11] !== f || c[12] !== S ? (e = e => {
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
                                transform: `translateY(${f?0:8*(m?-1:1)}px)`
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
                }, c[10] = m, c[11] = f, c[12] = S, c[13] = e) : e = c[13], o = u.map(e), c[5] = m, c[6] = u, c[7] = f, c[8] = S, c[9] = o
            } else o = c[9];
            return c[14] !== x || c[15] !== j || c[16] !== o ? (r = (0, i.jsx)("div", {
                ref: x,
                className: j,
                children: o
            }), c[14] = x, c[15] = j, c[16] = o, c[17] = r) : r = c[17], c[18] !== r || c[19] !== z || c[20] !== C || c[21] !== l ? (s = (0, i.jsx)(I.a, {
                className: z,
                fade: "mask",
                scrollClassName: C,
                scrollProps: l,
                children: r
            }), c[18] = r, c[19] = z, c[20] = C, c[21] = l, c[22] = s) : s = c[22], s
        }
        var W = n("wrxv"),
            B = n("oNzN"),
            O = "active-PrspLR";
        let $ = null;
        var K = n("EFj1"),
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
            em = n("El6m"),
            ep = n("KkZX"),
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
            eS = (0, m.u)(eu.a, eR, {
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
            let t, n, M, I, ez, eC, eR, eN, eL, eT, eD, eq, e_, eF, eI, eA, eH, eW, eB, eO, e$, eK, eV, eX, eY, eZ, eU, eQ, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tm, tp, tf, tg, tv, tb, tx, ty, tw, tS, tz, tC, tk, tj, tE, tM, tP, tR, tN, tL, tT, tD, tq, t_, tF, tI, tA, tH, tW, tB, tO, t$, tK, tV, tX, tY, tZ, tU, tQ, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, nm, np, nf, ng, nv, nb, nx, ny, nw, nS, nz, nC, nk, nj, nE, nM, nP, nR, nN, nL, nT, nD, nq, n_, nF, nI, nA, nH, nW, nB, nO, n$, nK, nV, nX, nY, nZ, nU, nQ, nG, nJ, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, ie, it, ii, ia, il, io, ir, is, ic, iu = (0, a.c)(864),
                {
                    ref: id,
                    animateOnMount: ih,
                    background: im,
                    renderComposer: ip,
                    containerSize: ig,
                    previewSide: iv,
                    hasPagePicker: ib,
                    dockThreadKey: ix,
                    canDock: iy,
                    reservedDockPosition: iw,
                    footer: iS,
                    overlay: iz,
                    renderHeaderContent: iC,
                    headerInteractionDisabled: ik,
                    allowLegacyHeaderToggle: ij,
                    renderMenu: iE,
                    forceExpanded: iM,
                    hasConversation: iP,
                    isHidden: iR,
                    isContentChat: iN,
                    isMinimized: iL,
                    isCollisionObstacle: iT,
                    onDragOver: iD,
                    onDragEnd: iq,
                    onEscape: i_,
                    onMinimizedChange: iF,
                    onResize: iI,
                    presentation: iA,
                    onPresentationChange: iH,
                    title: iW,
                    titleContent: iB,
                    minimizedIcon: iO,
                    minimizedMenuItems: i$,
                    restoreLabel: iK,
                    statusState: iV,
                    titleStatusState: iX,
                    notifications: iY,
                    workingPreview: iZ,
                    responsePreview: iU,
                    previewBubble: iQ,
                    emptyState: iG,
                    renderTranscript: iJ,
                    hasTranscript: i0,
                    pendingFormId: i1,
                    showComposerDivider: i2,
                    showHeader: i3
                } = e,
                i4 = void 0 !== ih && ih,
                i5 = void 0 === iy || iy,
                i6 = void 0 !== ik && ik,
                i7 = void 0 === ij || ij,
                i8 = void 0 !== iM && iM,
                i9 = void 0 !== iR && iR,
                ae = void 0 !== iN && iN,
                at = void 0 === iX ? iV : iX,
                an = void 0 === i3 || i3,
                ai = (0, m.y)(eu.a),
                aa = (0, m.y)(ed.a),
                al = (0, m.z)(void 0 === i1 ? null : i1),
                ao = null != al,
                ar = (0, R.f)("2163293173"),
                as = (0, p.useContext)(y.a),
                ac = (0, p.useContext)(x.a)?.workspaceTargetWidth,
                au = (0, p.useContext)(b.c),
                ad = ar && !i9 && null != iv && null != au && null != as,
                ah = (0, m.z)(!!ar && void 0 !== iv && es.d),
                am = ad && !ah,
                ap = (0, m.z)(ad ? w.ab : null),
                af = (0, p.useRef)(null),
                ag = (0, m.z)(!!ad && w.db),
                av = ar ? iG : void 0,
                ab = i0 ?? null != iJ,
                ax = ab || null != av,
                ay = (0, m.z)(ix) ?? void 0,
                aw = void 0 === iT || iT ? "quick-chat" : void 0,
                aS = (0, p.useContext)(em.b),
                az = (0, m.z)(iY),
                aC = ao ? W.a : az ?? W.a,
                ak = (0, m.z)(iV);
            iu[0] !== ak || iu[1] !== aC.type ? (t = "ready" === aC.type ? {
                ...ak,
                type: ak?.type ?? "idle",
                unread: !0
            } : ak, iu[0] = ak, iu[1] = aC.type, iu[2] = t) : t = iu[2];
            let aj = t,
                aE = (0, m.z)(at),
                aM = at === iV ? aj : aE;
            iu[3] !== ar || iu[4] !== iU ? (n = (0, m.c)(eu.a, e => {
                let {
                    get: t
                } = e;
                return !!ar && null != iU && !!("string" == typeof iU ? iU : t(iU))
            }), iu[3] = ar, iu[4] = iU, iu[5] = n) : n = iu[5];
            let aP = (0, m.z)(n),
                aR = (0, g.a)(),
                aN = (0, p.useId)(),
                aL = (0, p.useId)(),
                aT = (0, k.c)(),
                aD = (0, eo.a)(),
                aq = (0, m.z)(eS);
            iu[6] !== aq.height || iu[7] !== aT ? (M = (0, k.b)(aq.height, aT), iu[6] = aq.height, iu[7] = aT, iu[8] = M) : M = iu[8];
            let a_ = M,
                aF = (0, k.b)(aq.width, aT),
                [aI, aA] = (0, p.useState)(0),
                [aH, aW] = (0, p.useState)(!1),
                [aB, aO] = (0, p.useState)(0),
                [a$, aK] = (0, p.useState)(null),
                [aV, aX] = (0, p.useState)(null),
                [aY, aZ] = (0, p.useState)(0),
                [aU, aQ] = (0, p.useState)(null);
            iu[9] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                e.contentRect.width > 0 && aQ(e.contentRect.width)
            }, iu[9] = I) : I = iu[9];
            let aG = (0, A.b)(I);
            iu[10] === Symbol.for("react.memo_cache_sentinel") ? (ez = e => {
                aZ((0, ec.a)(e).height)
            }, iu[10] = ez) : ez = iu[10];
            let aJ = (0, A.b)(ez);
            iu[11] === Symbol.for("react.memo_cache_sentinel") ? (eC = e => {
                aO((0, ec.a)(e).height)
            }, iu[11] = eC) : eC = iu[11];
            let a0 = (0, A.b)(eC);
            iu[12] !== a0 ? (eR = e => {
                aK(e), a0(e)
            }, iu[12] = a0, iu[13] = eR) : eR = iu[13];
            let a1 = (0, eb.a)(eR);
            iu[14] === Symbol.for("react.memo_cache_sentinel") ? (eN = e => {
                aA((0, ec.a)(e).height)
            }, iu[14] = eN) : eN = iu[14];
            let a2 = (0, A.b)(eN),
                [a3, a4] = (0, p.useState)(0);
            iu[15] === Symbol.for("react.memo_cache_sentinel") ? (eL = e => {
                a4((0, ec.a)(e).height)
            }, iu[15] = eL) : eL = iu[15];
            let a5 = (0, A.b)(eL),
                a6 = ig?.width ?? aF,
                a7 = aF < 640;
            iu[16] !== i5 || iu[17] !== ar ? (eT = () => i5 ? ar ? "bottom-right" : (0, J.a)() : "bottom-center", iu[16] = i5, iu[17] = ar, iu[18] = eT) : eT = iu[18];
            let [a8] = (0, p.useState)(eT), a9 = ay ?? null;
            iu[19] !== a9 ? (eD = {
                threadKey: a9,
                minimized: !1
            }, iu[19] = a9, iu[20] = eD) : eD = iu[20];
            let le = (0, m.x)(i5 ? en.a : void 0, eD),
                lt = ay ?? null;
            iu[21] !== lt ? (eq = {
                threadKey: lt,
                minimized: !0
            }, iu[21] = lt, iu[22] = eq) : eq = iu[22];
            let ln = (0, m.x)(i5 ? en.a : void 0, eq);
            iu[23] === Symbol.for("react.memo_cache_sentinel") ? (e_ = {}, iu[23] = e_) : e_ = iu[23];
            let [li, la] = (0, p.useState)(e_), ll = ar ? "bottom-right" : (null == ay ? li.minimized : null) ?? ln ?? "bottom-right", lo = (null != ay || ar ? null : li.expanded) ?? le ?? a8, lr = iL ? ll : lo, ls = i5 ? (0, et.f)(a7 && !iL ? "bottom-center" : lr, iw) : "bottom-center", lc = ls.startsWith("top"), lu = (0, m.z)(ea), ld = (0, o.a)(), lh = (0, p.useRef)(!1);
            iu[24] === Symbol.for("react.memo_cache_sentinel") ? (eF = {
                x: 0,
                y: 0
            }, iu[24] = eF) : eF = iu[24];
            let lm = (0, p.useRef)(eF),
                lp = (0, p.useRef)(null),
                lf = (0, p.useRef)(null),
                lg = (0, r.a)(0),
                lv = (0, r.a)(0),
                lb = (0, p.useRef)(null),
                lx = (0, p.useRef)(null),
                ly = (0, p.useRef)(null),
                lw = (0, p.useRef)(null),
                [lS, lz] = (0, p.useState)("compact"),
                [lC, lk] = (0, p.useState)(null),
                lj = iQ?.id ?? "",
                lE = lC === lj,
                lM = iA ?? lS;
            iu[25] !== ax || iu[26] !== iA || iu[27] !== ae || iu[28] !== iH ? (eI = e => {
                (ae || "expanded" !== e || ax) && (null == iA && lz(e), lk(null), iH?.(e))
            }, iu[25] = ax, iu[26] = iA, iu[27] = ae, iu[28] = iH, iu[29] = eI) : eI = iu[29];
            let lP = eI,
                [lR, lN] = (0, p.useState)(null),
                [lL, lT] = (0, p.useState)(!1),
                [lD, lq] = (0, p.useState)(!1),
                [l_, lF] = (0, p.useState)(!1),
                [lI, lA] = (0, p.useState)(!1),
                lH = (0, p.useRef)(null);
            iu[30] === Symbol.for("react.memo_cache_sentinel") ? (eA = e => {
                (null != lH.current && (cancelAnimationFrame(lH.current), lH.current = null), null != e) ? lA(!0): lH.current = requestAnimationFrame(() => {
                    lH.current = null, lA(!1)
                })
            }, iu[30] = eA) : eA = iu[30];
            let lW = eA;
            iu[31] === Symbol.for("react.memo_cache_sentinel") ? (eH = () => () => {
                null != lH.current && cancelAnimationFrame(lH.current)
            }, eW = [], iu[31] = eH, iu[32] = eW) : (eH = iu[31], eW = iu[32]), (0, p.useEffect)(eH, eW);
            let [lB, lO] = (0, p.useState)(!1), [l$, lK] = (0, p.useState)(!1), [lV, lX] = (0, p.useState)(!1), [lY, lZ] = (0, p.useState)(!0), [lU, lQ] = (0, p.useState)(null), lG = (0, p.useRef)(!1), [lJ, l0] = (0, p.useState)(!1), [l1, l2] = (0, p.useState)(0), [l3, l4] = (0, p.useState)(0), [l5, l6] = (0, p.useState)(!1);
            iu[33] !== ar || iu[34] !== aT ? (eB = (e, t) => {
                l2(ar ? (0, ec.a)(e).height : e.contentRect.height), l6(e.contentRect.width < 640);
                let n = t.querySelector(`[${V.a}]`)?.getBoundingClientRect().height ?? 0;
                l4(Math.max(0, e.contentRect.height - (0, k.b)(n, aT)))
            }, iu[33] = ar, iu[34] = aT, iu[35] = eB) : eB = iu[35];
            let l7 = (0, A.b)(eB),
                [l8, l9] = (0, p.useState)(null),
                [oe, ot] = (0, p.useState)(!1),
                [on, oi] = (0, p.useState)(ay);
            on !== ay && (oi(ay), la({}), lK(!1), lX(!1), lQ(null), lN(null), lF(!1), ot(!1), lk(null));
            let [oa, ol] = (0, p.useState)(al);
            oa !== al && (ol(al), lQ(null), lN(null));
            let oo = !ad && (iL || lU?.stage === "minimized"),
                or = (0, r.a)(+!!oo);
            iu[36] !== or ? (eO = () => 1 - or.get(), iu[36] = or, iu[37] = eO) : eO = iu[37];
            let os = (0, s.a)(eO);
            iu[38] !== or ? (e$ = e => or.on("change", e), iu[38] = or, iu[39] = e$) : e$ = iu[39];
            let oc = e$;
            iu[40] !== or ? (eK = () => 1 === or.get(), iu[40] = or, iu[41] = eK) : eK = iu[41];
            let ou = eK;
            iu[42] !== oo ? (eV = () => oo, iu[42] = oo, iu[43] = eV) : eV = iu[43];
            let od = (0, p.useSyncExternalStore)(oc, ou, eV);
            lR?.target !== "minimized" || oo || lN({
                target: lM
            }), iu[44] !== ax || iu[45] !== i8 || iu[46] !== al || iu[47] !== lM ? (eX = (0, ei.b)({
                pendingFormId: al,
                presentation: lM,
                forceExpanded: i8,
                hasTranscript: ax
            }), iu[44] = ax, iu[45] = i8, iu[46] = al, iu[47] = lM, iu[48] = eX) : eX = iu[48];
            let {
                isCompact: oh,
                isChatCompact: om,
                canTogglePresentation: op
            } = eX, of = oh && !ad, og = iL && !ad, ov = ar && !ae ? !oh : an;
            (!ae || i9 || iL || !ov) && l_ && lF(!1);
            let ob = ar && !ao && !lE && ab && (aP || aM?.type === "loading"),
                ox = oh && ob,
                oy = ar && of && !i9 && !og && !ao && void 0 !== iQ,
                ow = oy && !lE && null != iQ,
                oS = ox || ow && iQ.transient,
                oz = void 0 !== i2 && i2 || ar;
            iu[49] !== ae || iu[50] !== i9 || iu[51] !== iL || iu[52] !== ov ? (eY = () => {
                let e, t = lx.current;
                if (null == t || !ae || i9 || iL || !ov) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, lF(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), lF(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, iu[49] = ae, iu[50] = i9, iu[51] = iL, iu[52] = ov, iu[53] = eY) : eY = iu[53], iu[54] !== ay || iu[55] !== ae || iu[56] !== i9 || iu[57] !== iL || iu[58] !== ov ? (eZ = [ay, ae, i9, iL, ov], iu[54] = ay, iu[55] = ae, iu[56] = i9, iu[57] = iL, iu[58] = ov, iu[59] = eZ) : eZ = iu[59], (0, p.useEffect)(eY, eZ);
            let oC = !i9 && !oh && !iL && !i8 && !l$ && !lJ;
            iu[60] !== aL || iu[61] !== lP || iu[62] !== lN ? (eU = e => {
                null == lx.current || null != e && eM(lx.current, e.target, aL) || (lN(null), lP("compact"))
            }, iu[60] = aL, iu[61] = lP, iu[62] = lN, iu[63] = eU) : eU = iu[63];
            let ok = (0, p.useEffectEvent)(eU);
            iu[64] !== ok || iu[65] !== aL ? (eQ = () => {
                let e = lx.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !eM(e, t, aL) && ok()
            }, iu[64] = ok, iu[65] = aL, iu[66] = eQ) : eQ = iu[66];
            let oj = (0, p.useEffectEvent)(eQ);
            iu[67] !== ar || iu[68] !== oj || iu[69] !== ok || iu[70] !== oC ? (eG = () => {
                if (!oC) return;
                document.addEventListener("pointerdown", ok, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && oj()
                        })
                    };
                window.addEventListener("blur", t);
                let n = ar ? er.c.subscribe("browser-sidebar-web-contents-pointer-down", () => ok()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", ok, !0)
                }
            }, iu[67] = ar, iu[68] = oj, iu[69] = ok, iu[70] = oC, iu[71] = eG) : eG = iu[71], iu[72] !== ar || iu[73] !== oC ? (eJ = [ar, oC], iu[72] = ar, iu[73] = oC, iu[74] = eJ) : eJ = iu[74], (0, p.useEffect)(eG, eJ);
            let oE = aj?.type === "loading";
            iu[75] !== iF || iu[76] !== lT || iu[77] !== lP || iu[78] !== lN ? (e0 = () => {
                lx.current?.focus({
                    preventScroll: !0
                }), lT(!1), lN(null), iF(!1), lP("expanded")
            }, iu[75] = iF, iu[76] = lT, iu[77] = lP, iu[78] = lN, iu[79] = e0) : e0 = iu[79];
            let oM = (0, eb.a)(e0),
                [oP, oR] = (0, p.useState)(ek);
            iu[80] === Symbol.for("react.memo_cache_sentinel") ? (e1 = e => {
                oR(t => new Set([...t, e]))
            }, iu[80] = e1) : e1 = iu[80];
            let oN = (0, eb.a)(e1);
            iu[81] !== ar || iu[82] !== oN || iu[83] !== oM || iu[84] !== aC ? (e2 = "ready" !== aC.type ? aC : {
                type: "ready",
                value: aC.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(F, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), oM()
                        },
                        onDismiss: ar ? () => oN(e.id) : e.onDismiss
                    })
                }))
            }, iu[81] = ar, iu[82] = oN, iu[83] = oM, iu[84] = aC, iu[85] = e2) : e2 = iu[85];
            let oL = e2,
                [oT, oD] = (0, p.useState)(oE);
            if (oT !== oE && (oD(oE), ot(!1), lk(null)), iu[86] !== i9 || iu[87] !== iL || iu[88] !== oE || iu[89] !== lj || iu[90] !== oS ? (e3 = () => {
                    if (!oS || i9 || iL || oE) return;
                    let e = window.setTimeout(() => lk(lj), 1e4);
                    return () => window.clearTimeout(e)
                }, iu[86] = i9, iu[87] = iL, iu[88] = oE, iu[89] = lj, iu[90] = oS, iu[91] = e3) : e3 = iu[91], iu[92] !== ay || iu[93] !== i9 || iu[94] !== iL || iu[95] !== oE || iu[96] !== lj || iu[97] !== oS ? (e4 = [ay, oS, i9, iL, oE, lj], iu[92] = ay, iu[93] = i9, iu[94] = iL, iu[95] = oE, iu[96] = lj, iu[97] = oS, iu[98] = e4) : e4 = iu[98], (0, p.useEffect)(e3, e4), iu[99] !== oL || iu[100] !== ar || iu[101] !== oP || iu[102] !== oM || iu[103] !== oE || iu[104] !== iW || iu[105] !== iZ || iu[106] !== oe) {
                if (e5 = oL, ar && oE && !oe) {
                    let e, t;
                    iu[108] === Symbol.for("react.memo_cache_sentinel") ? (e = () => ot(!0), iu[108] = e) : e = iu[108], iu[109] !== oM || iu[110] !== iW || iu[111] !== iZ ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(F, {
                            title: iW,
                            preview: "",
                            isWorking: !0,
                            workingContent: iZ,
                            onOpen: oM,
                            onDismiss: e
                        })
                    }], iu[109] = oM, iu[110] = iW, iu[111] = iZ, iu[112] = t) : t = iu[112], e5 = {
                        type: "ready",
                        value: t
                    }
                } else if (ar && "ready" === oL.type) {
                    let e;
                    if (iu[113] !== oL.value || iu[114] !== oP) {
                        let t;
                        iu[116] !== oP ? (t = e => !oP.has(e.id), iu[116] = oP, iu[117] = t) : t = iu[117], e = oL.value.filter(t), iu[113] = oL.value, iu[114] = oP, iu[115] = e
                    } else e = iu[115];
                    e5 = {
                        ...oL,
                        value: e
                    }
                }
                iu[99] = oL, iu[100] = ar, iu[101] = oP, iu[102] = oM, iu[103] = oE, iu[104] = iW, iu[105] = iZ, iu[106] = oe, iu[107] = e5
            } else e5 = iu[107];
            "ready" !== e5.type && lL && lT(!1);
            let oq = "ready" === e5.type && e5.value.length > 0 && (oo ? iL && (ar ? od : lL) && !l$ : !ar && oh),
                o_ = !ar && (aM?.type === "loading" || aM?.unread === !0 && !oq),
                oF = oE || aj?.unread === !0 && (iL || !oq);
            iu[118] !== e5.type || iu[119] !== e5.value || iu[120] !== ar || iu[121] !== oN || iu[122] !== oE || iu[123] !== lT ? (e6 = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), lw.current?.contains(document.activeElement) && ly.current?.focus({
                            preventScroll: !0
                        }), ar) {
                        if (oE) ot(!0);
                        else if ("ready" === e5.type)
                            for (let e of e5.value) oN(e.id)
                    } else lT(!1)
            }, iu[118] = e5.type, iu[119] = e5.value, iu[120] = ar, iu[121] = oN, iu[122] = oE, iu[123] = lT, iu[124] = e6) : e6 = iu[124];
            let oI = (0, p.useEffectEvent)(e6);
            iu[125] !== oI || iu[126] !== oq || iu[127] !== i9 || iu[128] !== iL ? (e7 = () => {
                if (!i9 && iL && oq) return document.addEventListener("keydown", oI), () => document.removeEventListener("keydown", oI)
            }, iu[125] = oI, iu[126] = oq, iu[127] = i9, iu[128] = iL, iu[129] = e7) : e7 = iu[129], iu[130] !== oq || iu[131] !== i9 || iu[132] !== iL ? (e8 = [oq, i9, iL], iu[130] = oq, iu[131] = i9, iu[132] = iL, iu[133] = e8) : e8 = iu[133], (0, p.useEffect)(e7, e8);
            let oA = !iL && !oo && (ar && !ae || !oh || lD || lI || l_ || l$ || aH),
                oH = (ov || ad) && (ae ? !iL && !oo : ar || oA),
                oW = ov && oH && !og && null == iC;
            iu[134] !== aR ? (e9 = aR.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running",
                description: "Status of a running task in the floating composer"
            }), iu[134] = aR, iu[135] = e9) : e9 = iu[135];
            let oB = e9;
            iu[136] !== aR ? (te = aR.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response",
                description: "Status of a floating task with an unread response"
            }), iu[136] = aR, iu[137] = te) : te = iu[137];
            let oO = te,
                o$ = oE ? oB : oO,
                oK = ls.endsWith("left"),
                oV = "bottom-center" === ls,
                oX = oK ? "left" : "right",
                oY = lc && !oo ? aB : 0,
                oZ = 46 * (null == ig) + (lc || oo ? 0 : aB),
                oU = l8 ?? lu ?? P,
                oQ = oq && !iL ? a3 : 0,
                oG = (ig?.height ?? a_) - aI - (lc ? oQ + oY : 0),
                oJ = Math.max(0, oG - 32 - oZ - (lc ? 0 : oQ)),
                o0 = null == ig ? a6 / 2 : Math.max(0, a6 - 20),
                o1 = ar && null != aU ? Math.min(o0, aU + 12) : o0,
                o2 = (l1 || 46) + (ov && oH ? 46 : 0) + (ox ? aY : 0) + 6 * !ar,
                o3 = ae && ov && oH,
                o4 = (l1 || 46) + 46 * !!o3 + (ob ? aY : 0) + 6 * !ar,
                o5 = eP(oU.height, Math.min(Math.max(400, l1 + 46), oJ), oJ),
                o6 = Math.min(oh ? o2 : Math.max(400, o2), oJ),
                o7 = a7 ? o1 : Math.min(372, o1),
                o8 = eP(oh ? o2 : oU.height, o6, oJ),
                o9 = (0, r.a)(o8),
                re = (0, p.useRef)(!1),
                rt = l1 > 0,
                rn = i9 || aD || lJ || !ar && (iL || null != lR) ? 0 : .3,
                ri = eP(oU.width + 12, o7, o1),
                ra = (0, et.d)(ls, {
                    height: o8,
                    width: ri
                }, oG, a6, 12, oZ),
                rl = (0, r.a)(0);
            iu[138] === Symbol.for("react.memo_cache_sentinel") ? (tt = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, iu[138] = tt) : tt = iu[138];
            let ro = (0, r.a)(tt);
            iu[139] !== ag || iu[140] !== ad || iu[141] !== au || iu[142] !== as || iu[143] !== ro || iu[144] !== rl || iu[145] !== iv || iu[146] !== aD || iu[147] !== aT || iu[148] !== ac ? (tn = () => {
                let e, t = ad && au && as ? lx.current?.offsetParent : null;
                if (ad && au && as && t instanceof HTMLElement) {
                    let n = as.getBoundingClientRect(),
                        i = t.getBoundingClientRect(),
                        a = (0, k.b)(n.width, aT),
                        l = ac?.get() ?? a,
                        o = (0, C.f)(au.contentPaneWidthRatio.get(), l, "unified"),
                        r = ag ? o : l - o;
                    e = `--floating-chat-dock-${iv}`, as.style.setProperty(e, `${r}px`), ro.set({
                        x: (0, k.b)(n.left - i.left, aT) + (a - ("left" === iv ? l : r)) + 4 - 6,
                        y: (0, k.b)(n.top - i.top, aT) + 4,
                        width: r - 8 + 12,
                        height: (0, k.b)(i.bottom - n.top, aT) - 8 + 6
                    })
                }
                let n = +!!ad,
                    i = rl.get() === n ? null : (0, c.a)(rl, n, {
                        duration: .15 * !aD,
                        ease: N.e
                    });
                return () => {
                    i?.stop(), null != e && as?.style.removeProperty(e)
                }
            }, iu[139] = ag, iu[140] = ad, iu[141] = au, iu[142] = as, iu[143] = ro, iu[144] = rl, iu[145] = iv, iu[146] = aD, iu[147] = aT, iu[148] = ac, iu[149] = tn) : tn = iu[149], iu[150] !== ig || iu[151] !== ag || iu[152] !== ad || iu[153] !== au || iu[154] !== as || iu[155] !== ro || iu[156] !== rl || iu[157] !== iv || iu[158] !== aD || iu[159] !== aT || iu[160] !== ac ? (ti = [ig, 12, ag, ad, au, as, ro, rl, iv, aD, ac, aT], iu[150] = ig, iu[151] = ag, iu[152] = ad, iu[153] = au, iu[154] = as, iu[155] = ro, iu[156] = rl, iu[157] = iv, iu[158] = aD, iu[159] = aT, iu[160] = ac, iu[161] = ti) : ti = iu[161], (0, p.useLayoutEffect)(tn, ti);
            let rr = (0, s.a)(() => rl.get() * (ro.get().x - ra.x - lg.get())),
                rs = (0, s.a)(() => rl.get() * (ro.get().y - ra.y - lv.get())),
                rc = (0, s.a)(() => 0 === rl.get() ? "100%" : ri + rl.get() * (ro.get().width - ri));
            iu[162] !== o9 || iu[163] !== ro || iu[164] !== rl ? (ta = () => o9.get() + rl.get() * (ro.get().height - o9.get()), iu[162] = o9, iu[163] = ro, iu[164] = rl, iu[165] = ta) : ta = iu[165];
            let ru = (0, s.a)(ta);
            iu[166] !== o9 || iu[167] !== o4 || iu[168] !== o5 || iu[169] !== ae || iu[170] !== of || iu[171] !== rl ? (tl = () => Math.max(rl.get(), ae && of ? 0 : eP((o9.get() - o4) / Math.max(1, o5 - o4), 0, 1)), iu[166] = o9, iu[167] = o4, iu[168] = o5, iu[169] = ae, iu[170] = of, iu[171] = rl, iu[172] = tl) : tl = iu[172];
            let rd = (0, s.a)(tl);
            iu[173] !== l1 || iu[174] !== rd || iu[175] !== o3 || iu[176] !== ah || iu[177] !== ru || iu[178] !== rl ? (to = () => Math.max(0, ru.get() - l1 - 46 * ((o3 ? 1 : rd.get()) - (ah ? 0 : rl.get()))), iu[173] = l1, iu[174] = rd, iu[175] = o3, iu[176] = ah, iu[177] = ru, iu[178] = rl, iu[179] = to) : to = iu[179];
            let rh = (0, s.a)(to),
                rm = (0, r.a)(0),
                rp = (0, r.a)(0),
                rf = Math.max(0, o5 - 46 - l1);
            iu[180] !== rm || iu[181] !== aY || iu[182] !== rf || iu[183] !== rd || iu[184] !== aP || iu[185] !== ad ? (tr = () => ad || !aP ? 0 : (1 - rd.get()) * (rf - aY + 12 - rm.get()), iu[180] = rm, iu[181] = aY, iu[182] = rf, iu[183] = rd, iu[184] = aP, iu[185] = ad, iu[186] = tr) : tr = iu[186];
            let rg = (0, s.a)(tr);
            iu[187] !== rp || iu[188] !== rm || iu[189] !== rf || iu[190] !== rd || iu[191] !== aP ? (ts = () => {
                if (!aP || 1 === rd.get()) return "none";
                let e = 1 - rd.get(),
                    t = Math.max(0, rm.get()) * e,
                    n = Math.max(0, rf - rm.get() - rp.get()) * e;
                return `inset(${t}px 0 ${n}px 0)`
            }, iu[187] = rp, iu[188] = rm, iu[189] = rf, iu[190] = rd, iu[191] = aP, iu[192] = ts) : ts = iu[192];
            let rv = (0, s.a)(ts);
            iu[193] !== rd || iu[194] !== aP ? (tc = () => aP ? 1 : rd.get(), iu[193] = rd, iu[194] = aP, iu[195] = tc) : tc = iu[195];
            let rb = (0, s.a)(tc);
            iu[196] !== rd ? (tu = () => 1 - rd.get(), iu[196] = rd, iu[197] = tu) : tu = iu[197];
            let rx = (0, s.a)(tu);
            iu[198] !== rp || iu[199] !== rm || iu[200] !== aP || iu[201] !== aV || iu[202] !== aT ? (td = () => {
                if (null == aV || !aP) return null;
                let e = aV.querySelectorAll('[data-markdown-text-style="assistant-message"]'),
                    t = e.item(e.length - 1);
                if (null == t) return null;
                let n = t.getBoundingClientRect(),
                    i = aV.getBoundingClientRect(),
                    a = parseFloat(getComputedStyle(t.firstElementChild ?? t).lineHeight),
                    l = Math.min((0, k.b)(n.height, aT), Number.isFinite(a) ? 2 * a : 56, 56);
                return rm.set((0, k.b)(n.top - i.top, aT)), rp.set(l), aZ(l + 24), t
            }, iu[198] = rp, iu[199] = rm, iu[200] = aP, iu[201] = aV, iu[202] = aT, iu[203] = td) : td = iu[203];
            let ry = (0, p.useEffectEvent)(td);
            iu[204] !== ar || iu[205] !== aP || iu[206] !== of || iu[207] !== i9 || iu[208] !== ry || iu[209] !== aV ? (th = () => {
                if (!ar || i9 || null == aV || !aP) return;
                let e = null,
                    t = new ResizeObserver(() => u.b.read(n)),
                    n = () => {
                        let n = ry();
                        e !== n && (t.disconnect(), e = n, null != n && t.observe(n))
                    },
                    i = () => {
                        u.b.read(n)
                    };
                if (n(), !of) return void t.disconnect();
                let a = new MutationObserver(i);
                return a.observe(aV, {
                    childList: !0,
                    subtree: !0
                }), aV.addEventListener("scroll", i, !0), () => {
                    (0, u.a)(n), t.disconnect(), a.disconnect(), aV.removeEventListener("scroll", i, !0)
                }
            }, iu[204] = ar, iu[205] = aP, iu[206] = of, iu[207] = i9, iu[208] = ry, iu[209] = aV, iu[210] = th) : th = iu[210], iu[211] !== ar || iu[212] !== aP || iu[213] !== of || iu[214] !== i9 || iu[215] !== aV ? (tm = [ar, aP, of, i9, aV], iu[211] = ar, iu[212] = aP, iu[213] = of, iu[214] = i9, iu[215] = aV, iu[216] = tm) : tm = iu[216], (0, p.useLayoutEffect)(th, tm), iu[217] !== o9 || iu[218] !== l1 || iu[219] !== ar || iu[220] !== o8 || iu[221] !== rt || iu[222] !== oh || iu[223] !== lI || iu[224] !== ry || iu[225] !== rn ? (tp = () => {
                let e, t = !re.current && oh;
                if (rt && (re.current = !0), lI || t || 0 === rn) return void o9.jump(o8);
                let n = () => {
                    if (ar) {
                        let e = lb.current;
                        if (null != e && e.offsetHeight !== Math.round(l1)) return void l2(e.offsetHeight);
                        ry()
                    }
                    let t = (0, c.a)(o9, o8, {
                        duration: rn,
                        ease: N.e
                    });
                    e = () => t.stop()
                };
                return ar ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, iu[217] = o9, iu[218] = l1, iu[219] = ar, iu[220] = o8, iu[221] = rt, iu[222] = oh, iu[223] = lI, iu[224] = ry, iu[225] = rn, iu[226] = tp) : tp = iu[226];
            let rw = (0, p.useEffectEvent)(tp),
                rS = ar ? l1 : null,
                rz = ar ? null : rt,
                rC = ar ? null : oh;
            iu[227] !== rw ? (tf = () => rw(), iu[227] = rw, iu[228] = tf) : tf = iu[228], iu[229] !== o8 || iu[230] !== rz || iu[231] !== rC || iu[232] !== rS || iu[233] !== rn ? (tg = [o8, rn, rS, rz, rC], iu[229] = o8, iu[230] = rz, iu[231] = rC, iu[232] = rS, iu[233] = rn, iu[234] = tg) : tg = iu[234], (0, p.useLayoutEffect)(tf, tg);
            let rk = ar ? rd : void 0;
            iu[235] !== rk ? (tv = {
                "--quick-chat-expansion": rk
            }, iu[235] = rk, iu[236] = tv) : tv = iu[236];
            let rj = tv,
                rE = {
                    height: Math.min(36, oJ),
                    width: Math.min(36, o1)
                },
                rM = (0, et.f)(iL ? ls : lU?.dockPosition ?? ll, iw),
                rP = (0, et.d)(rM, rE, oG, a6, 0, oZ),
                rR = iL ? rE : {
                    height: o8,
                    width: ri
                },
                rN = iL ? rP : ra,
                rL = iL ? 16 : 10,
                rT = Math.max(rL, a6 - rR.width - rL),
                rD = oZ + rL,
                rq = Math.max(rL, oG - rR.height - rL);
            iu[237] !== rL || iu[238] !== rT || iu[239] !== rD || iu[240] !== rq ? (tb = {
                left: rL,
                right: rT,
                top: rD,
                bottom: rq
            }, iu[237] = rL, iu[238] = rT, iu[239] = rD, iu[240] = rq, iu[241] = tb) : tb = iu[241];
            let r_ = tb;
            iu[242] === Symbol.for("react.memo_cache_sentinel") ? (tx = () => {
                lf.current = null
            }, iu[242] = tx) : tx = iu[242], iu[243] !== ig || iu[244] !== aT ? (ty = [ig, aT], iu[243] = ig, iu[244] = aT, iu[245] = ty) : ty = iu[245], (0, p.useLayoutEffect)(tx, ty);
            let rF = e => {
                    if (!i5) return;
                    lf.current = null == ig ? null : lx.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, k.b)(e.clientX - (lf.current?.left ?? 0), aT),
                        y: (0, k.b)(e.clientY - (lf.current?.top ?? 0), aT)
                    };
                    lm.current = {
                        x: t.x - rN.x - lg.get(),
                        y: t.y - rN.y - lv.get()
                    }, lp.current = {
                        point: t,
                        target: null
                    }, ld.start(e)
                },
                rI = (0, et.d)(rM, {
                    height: o8,
                    width: ri
                }, oG, a6, 12, oZ),
                rA = rP.x - rI.x,
                rH = rP.y - rI.y,
                rW = ri - rA - rE.width,
                rB = o8 - rH - rE.height;
            iu[246] !== rA || iu[247] !== rH || iu[248] !== rW || iu[249] !== rB ? (tw = {
                top: rH,
                right: rW,
                bottom: rB,
                left: rA
            }, iu[246] = rA, iu[247] = rH, iu[248] = rW, iu[249] = rB, iu[250] = tw) : tw = iu[250];
            let rO = tw,
                r$ = `inset(${rO.top}px ${rO.right}px ${rO.bottom}px ${rO.left}px round var(--floating-panel-radius))`,
                rK = (0, s.a)(() => {
                    let e = or.get(),
                        t = o9.get() - o8,
                        n = e * (rO.top + (lc ? 0 : t)),
                        i = 6 + e * (rO.right - 6),
                        a = 6 + e * (rO.bottom + (lc ? t : 0) - 6),
                        l = 6 + e * (rO.left - 6),
                        o = rl.get(),
                        r = 0 === o ? "var(--radius-token-composer-single-line)" : `calc(var(--radius-token-composer-single-line) * ${1-o} + var(--app-shell-sidebar-popover-radius) * ${o})`,
                        s = oo || l$ || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round ${r})` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: r,
                        clip: s
                    }
                });
            iu[251] !== rK ? (tS = () => rK.get().top, iu[251] = rK, iu[252] = tS) : tS = iu[252];
            let rV = (0, s.a)(tS);
            iu[253] !== rK ? (tz = () => rK.get().right, iu[253] = rK, iu[254] = tz) : tz = iu[254];
            let rX = (0, s.a)(tz);
            iu[255] !== rK ? (tC = () => rK.get().bottom, iu[255] = rK, iu[256] = tC) : tC = iu[256];
            let rY = (0, s.a)(tC);
            iu[257] !== rK ? (tk = () => rK.get().left, iu[257] = rK, iu[258] = tk) : tk = iu[258];
            let rZ = (0, s.a)(tk);
            iu[259] !== rK ? (tj = () => rK.get().radius, iu[259] = rK, iu[260] = tj) : tj = iu[260];
            let rU = (0, s.a)(tj);
            iu[261] !== rK ? (tE = () => rK.get().clip, iu[261] = rK, iu[262] = tE) : tE = iu[262];
            let rQ = (0, s.a)(tE);
            iu[263] !== ar || iu[264] !== oo || iu[265] !== or || iu[266] !== aD ? (tM = () => {
                if (!ar) return;
                let e = (0, c.a)(or, +!!oo, {
                    duration: .3 * !aD,
                    ease: N.e
                });
                return () => e.stop()
            }, tP = [ar, oo, or, aD], iu[263] = ar, iu[264] = oo, iu[265] = or, iu[266] = aD, iu[267] = tM, iu[268] = tP) : (tM = iu[267], tP = iu[268]), (0, p.useLayoutEffect)(tM, tP);
            let rG = lc ? {
                    top: rH + rE.height
                } : {
                    bottom: o8 - rH
                },
                rJ = (0, p.useRef)({
                    dockPosition: ls,
                    dockThreadKey: ay,
                    isMinimized: iL
                });
            iu[269] !== iq ? (tR = () => {
                iq?.(null)
            }, iu[269] = iq, iu[270] = tR) : tR = iu[270];
            let r0 = (0, p.useEffectEvent)(tR),
                r1 = (0, p.useEffectEvent)(e => {
                    let t = (0, et.d)(e, {
                        height: o8,
                        width: ri
                    }, oG, a6, 12, oZ);
                    lg.stop(), lv.stop(), lg.jump(lg.get() + t.x - ra.x), lv.jump(lv.get() + t.y - ra.y);
                    let n = aD ? {
                        duration: 0
                    } : ew;
                    (0, c.a)(lg, 0, n), (0, c.a)(lv, 0, n)
                });
            (0, p.useLayoutEffect)(() => {
                let e = rJ.current;
                if (rJ.current = {
                        dockPosition: ls,
                        dockThreadKey: ay,
                        isMinimized: iL
                    }, e.dockThreadKey !== ay) {
                    lh.current = !0, lG.current = !0, ld.cancel(), r0(), lg.jump(0), lv.jump(0);
                    return
                }
                if (i9) {
                    lg.jump(0), lv.jump(0);
                    return
                }
                e.isMinimized !== iL && r1(e.dockPosition)
            }, [ls, ay, ld, lg, lv, i9, iL]), iu[271] !== lg || iu[272] !== lv ? (tN = () => () => {
                lg.stop(), lv.stop()
            }, tL = [lg, lv], iu[271] = lg, iu[272] = lv, iu[273] = tN, iu[274] = tL) : (tN = iu[273], tL = iu[274]), (0, p.useLayoutEffect)(tN, tL);
            let r2 = e => {
                let t, n = {
                    ...rR,
                    left: rN.x + lg.get(),
                    top: rN.y + lv.get()
                };
                null != ig && null == lf.current && (lf.current = lx.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == ig ? null : lf.current,
                    a = {
                        x: e.point.x - (0, k.b)(i?.left ?? 0, aT),
                        y: e.point.y - (0, k.b)(i?.top ?? 0, aT)
                    };
                t = ar ? (0, et.b)(n, oG, a6, ex.filter(e => !iL || "bottom-right" === e).map(e => (0, et.f)(e, iw)), 12 * !iL, oZ) : (0, et.e)({
                    ...n,
                    left: n.width >= a6 / 2 - 2 * rL ? a.x - n.width / 2 : n.left
                }, oG, a6, iL);
                let l = null == iw ? t : (0, et.f)(t, iw),
                    o = {
                        x: ar ? a6 - a.x : Math.min(a.x, a6 - a.x),
                        y: ar ? oG - a.y : Math.min(a.y - oZ, oG - a.y)
                    },
                    r = o.x <= 16 + rE.width && o.y <= 16 + rE.height;
                if (ar && !iL) {
                    let e = lp.current;
                    if (null != e) {
                        let t = a.x - e.point.x,
                            n = a.y - e.point.y;
                        Math.hypot(t, n) >= 8 && (t >= 0 && n > 0 && n >= t ? e.target = "minimize" : t > 0 && t > 2 * Math.abs(n) ? e.target = null : (t < 0 || n < 0) && (e.target = null), e.point = a)
                    }
                    let n = a.y - lm.current.y + rR.height - oG;
                    return {
                        dockPosition: l,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        suppressEdgeDrop: r,
                        shouldMinimize: "bottom-right" === l && e?.target === "minimize" && n >= .5 * rR.width
                    }
                }
                let s = (0, et.d)(l, rR, oG, a6, 12, oZ),
                    c = !iL && "bottom-center" !== l && 16 >= Math.abs(n.left - s.x) && 16 >= Math.abs(n.top - s.y);
                return {
                    dockPosition: l,
                    requestedDockPosition: t,
                    isNearDock: c,
                    suppressEdgeDrop: r,
                    shouldMinimize: c && r
                }
            };
            iu[275] !== i5 || iu[276] !== ar || iu[277] !== ay || iu[278] !== iP || iu[279] !== ai ? (tT = (e, t) => {
                i5 && (null != ay || ar && !t ? (0, en.c)(ai, {
                    threadKey: ay ?? null,
                    minimized: t
                }, e, iP) : la(n => ({
                    expanded: t ? n.expanded : e,
                    minimized: t ? (0, et.a)(e) : n.minimized
                })))
            }, iu[275] = i5, iu[276] = ar, iu[277] = ay, iu[278] = iP, iu[279] = ai, iu[280] = tT) : tT = iu[280];
            let r3 = tT,
                r4 = (e, t, n) => {
                    let i = void 0 === n ? rR : n,
                        a = (0, et.d)(ls, rR, oG, a6, 12 * !iL, oZ),
                        l = {
                            x: a.x + lg.get(),
                            y: a.y + lv.get()
                        },
                        o = (0, et.d)((0, et.f)(e, iw), i, oG, a6, 12 * !iL, oZ);
                    lg.stop(), lv.stop(), lg.jump(l.x - o.x), lv.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        r3(e, iL)
                    });
                    let r = ar ? {
                            duration: .3,
                            ease: N.e
                        } : ew,
                        s = aD ? {
                            duration: 0
                        } : r;
                    lX(!0), Promise.all([(0, c.a)(lg, 0, s), (0, c.a)(lv, 0, s)]).then(() => {
                        lX(0 !== lg.get() || 0 !== lv.get())
                    })
                },
                r5 = (0, p.useEffectEvent)(() => {
                    lh.current = !0, ld.cancel(), iq?.(null), r4(ls, !1), lQ(null), lN(null), lK(!1)
                });
            iu[281] !== r5 || iu[282] !== ld || iu[283] !== l$ ? (tD = () => {
                if (!l$) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r5())
                    },
                    t = () => r5();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    lh.current = !0, ld.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, iu[281] = r5, iu[282] = ld, iu[283] = l$, iu[284] = tD) : tD = iu[284], iu[285] !== ld || iu[286] !== l$ ? (tq = [ld, l$], iu[285] = ld, iu[286] = l$, iu[287] = tq) : tq = iu[287], (0, p.useLayoutEffect)(tD, tq);
            let r6 = (e, t) => {
                    let n = ar && oV ? 0 : (0, et.c)(ls, e, {
                            height: o8,
                            width: ri
                        }, lg.get(), t.width, oG, a6, 12),
                        i = ra.y + lv.get(),
                        a = (0, et.d)(ls, t, oG, a6, 12, oZ),
                        l = eP(i + (lc ? 0 : o8 - t.height), oZ + 10, oG - t.height - 10);
                    lg.stop(), lv.stop(), (0, f.flushSync)(() => {
                        l9({
                            height: oh ? oU.height : t.height,
                            width: t.width - 12
                        })
                    }), lg.jump(n), lv.jump(l - a.y)
                },
                r7 = e => {
                    el(ai, {
                        height: oh ? oU.height : e.height,
                        width: e.width - 12
                    }, () => iI?.(ls)), r4(ls, !1, e)
                };
            iu[288] !== ar || iu[289] !== l$ || iu[290] !== iF || iu[291] !== lT || iu[292] !== lQ || iu[293] !== lN ? (t_ = () => {
                lT(!1), lZ(!l$), lQ(null), lN(ar ? null : {
                    target: "minimized"
                }), iF(!0)
            }, iu[288] = ar, iu[289] = l$, iu[290] = iF, iu[291] = lT, iu[292] = lQ, iu[293] = lN, iu[294] = t_) : t_ = iu[294];
            let r8 = t_;
            if (iu[295] !== ar || iu[296] !== i8 || iu[297] !== ao || iu[298] !== oh || iu[299] !== i9 || iu[300] !== iL || iu[301] !== i_ || iu[302] !== iF || iu[303] !== lM || iu[304] !== lT || iu[305] !== lP || iu[306] !== lN) {
                let e, t, n, i;
                tB = () => {
                    (0, f.flushSync)(() => {
                        lT(!1), lN(ar ? null : {
                            target: lM
                        }), iF(!1)
                    }), tA()
                }, iu[314] !== oh || iu[315] !== lP || iu[316] !== lN ? (e = () => {
                    lN(null), lP(oh ? "expanded" : "compact")
                }, iu[314] = oh, iu[315] = lP, iu[316] = lN, iu[317] = e) : e = iu[317], tO = e, tF = !i9 && !iL && (null != i_ || !oh && !i8), iu[318] !== i_ || iu[319] !== lP || iu[320] !== lN ? (t = () => {
                    null != i_ ? i_() : (lN(null), lP("compact"))
                }, iu[318] = i_, iu[319] = lP, iu[320] = lN, iu[321] = t) : t = iu[321], tI = t, iu[322] !== tF || iu[323] !== tI ? (n = e => {
                    !tF || "Escape" !== e.key || e.defaultPrevented || e.repeat || e.nativeEvent.isComposing || (e.preventDefault(), e.stopPropagation(), tI())
                }, iu[322] = tF, iu[323] = tI, iu[324] = n) : n = iu[324], tW = n, iu[325] !== ao ? (i = () => {
                    let e = lb.current;
                    return ao ? (0, Z.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, iu[325] = ao, iu[326] = i) : i = iu[326], tH = i, tA = () => {
                    ar && (lN(null), lP("expanded")), tH()?.focus({
                        preventScroll: !0
                    })
                }, iu[295] = ar, iu[296] = i8, iu[297] = ao, iu[298] = oh, iu[299] = i9, iu[300] = iL, iu[301] = i_, iu[302] = iF, iu[303] = lM, iu[304] = lT, iu[305] = lP, iu[306] = lN, iu[307] = tF, iu[308] = tI, iu[309] = tA, iu[310] = tH, iu[311] = tW, iu[312] = tB, iu[313] = tO
            } else tF = iu[307], tI = iu[308], tA = iu[309], tH = iu[310], tW = iu[311], tB = iu[312], tO = iu[313];
            let r9 = !i9 && ao;
            iu[327] !== tH || iu[328] !== ao || iu[329] !== iL ? (t$ = () => {
                if (null == lx.current || null != lx.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (ao) return iL;
                let e = tH();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !lb.current?.contains(t) || t === lb.current
            }, iu[327] = tH, iu[328] = ao, iu[329] = iL, iu[330] = t$) : t$ = iu[330], iu[331] !== r9 || iu[332] !== t$ ? (tK = {
                enabled: r9,
                isActive: t$
            }, iu[331] = r9, iu[332] = t$, iu[333] = tK) : tK = iu[333], (0, K.a)("focusMainChat", iL ? tB : tA, tK), iu[334] !== aR || iu[335] !== oh ? (tV = aR.formatMessage(oh ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat",
                description: "Accessible label for expanding a compact floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat",
                description: "Accessible label for collapsing a floating chat"
            }), iu[334] = aR, iu[335] = oh, iu[336] = tV) : tV = iu[336];
            let se = tV;
            iu[337] !== op || iu[338] !== se || iu[339] !== tO ? (tX = op ? {
                label: se,
                onToggle: tO
            } : void 0, iu[337] = op, iu[338] = se, iu[339] = tO, iu[340] = tX) : tX = iu[340];
            let st = tX;
            iu[341] !== aR ? (tY = aR.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width",
                description: "Accessible label for resizing the chat width"
            }), iu[341] = aR, iu[342] = tY) : tY = iu[342];
            let sn = tY;
            iu[343] !== aR ? (tZ = aR.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height",
                description: "Accessible label for resizing the chat height"
            }), iu[343] = aR, iu[344] = tZ) : tZ = iu[344];
            let si = tZ;
            iu[345] !== ae || iu[346] !== lP || iu[347] !== lN ? (tU = () => {
                lN(null), ae && lP("expanded")
            }, iu[345] = ae, iu[346] = lP, iu[347] = lN, iu[348] = tU) : tU = iu[348];
            let sa = (0, eb.a)(tU);
            iu[349] !== ar || iu[350] !== sa || iu[351] !== ae || iu[352] !== lN ? (tQ = ar || ae ? sa : () => lN(null), iu[349] = ar, iu[350] = sa, iu[351] = ae, iu[352] = lN, iu[353] = tQ) : tQ = iu[353];
            let sl = {
                    isCompact: of,
                    canShowPreviewBubble: oy,
                    isNarrow: l5,
                    isChromeRevealed: oA,
                    isHeaderVisible: oH,
                    isComposerFocused: ar ? lB || lI : oA,
                    isDockedTop: lc,
                    isHidden: i9,
                    isMinimized: oo,
                    shouldReduceMotion: aD,
                    onSubmitStart: tQ
                },
                so = {
                    isMoving: l$ || lJ || lV,
                    composerContentHeight: l3,
                    dockedReservePx: l1 > l3 + 6 * !!ar ? o8 + 10 : 0
                };
            iu[354] !== i9 || iu[355] !== iE ? (tG = function(e) {
                !i9 && null != iE && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (lx.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, iu[354] = i9, iu[355] = iE, iu[356] = tG) : tG = iu[356];
            let sr = tG;
            iu[357] !== ae ? (tJ = function(e) {
                !ae && e.target instanceof Element && (!lx.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, iu[357] = ae, iu[358] = tJ) : tJ = iu[358];
            let ss = tJ,
                sc = ip(sl, so),
                su = tF ? tI : null;
            iu[359] !== l7 ? (t0 = e => {
                lb.current = e, l7(e)
            }, iu[359] = l7, iu[360] = t0) : t0 = iu[360], iu[361] !== oz || iu[362] !== of || iu[363] !== og || iu[364] !== ox ? (t1 = oz && !og && (!of || ox) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, iu[361] = oz, iu[362] = of, iu[363] = og, iu[364] = ox, iu[365] = t1) : t1 = iu[365], iu[366] !== a$ ? (t2 = {
                target: a$,
                homeBannerPlacement: "inline"
            }, iu[366] = a$, iu[367] = t2) : t2 = iu[367];
            let sd = (0, i.jsxs)("div", {
                ref: t0,
                className: (0, l.b)(T.a.floatingComposerInset, "mt-auto shrink-0", oh && lc && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: sr,
                onContextMenu: ss,
                children: [t1, (0, i.jsx)(em.b, {
                    value: {
                        ...aS,
                        hasComposerSurface: oz,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !i9 && !oh && !iL,
                        floatingChatSurfaceRef: lx,
                        onFloatingDictationRowChange: lW,
                        floatingComposerPresentation: sl,
                        transcriptTarget: aV,
                        followLatestTranscript: ar ? of : aS.followLatestTranscript
                    },
                    children: (0, i.jsx)(Y.a, {
                        value: su,
                        children: (0, i.jsx)(X.a, {
                            value: t2,
                            children: sc
                        })
                    })
                })]
            });
            iu[368] !== ar || iu[369] !== of || iu[370] !== r8 ? (t3 = ar ? null : (0, i.jsx)(ee.c, {
                isCompact: of,
                onMinimize: r8
            }), iu[368] = ar, iu[369] = of, iu[370] = r8, iu[371] = t3) : t3 = iu[371];
            let sh = t3;
            iu[372] !== ar || iu[373] !== o_ || iu[374] !== sh || iu[375] !== an || iu[376] !== iC || iu[377] !== oB || iu[378] !== iW || iu[379] !== iB || iu[380] !== aN || iu[381] !== aM || iu[382] !== oO ? (t4 = iC ? iC({
                leadingControl: sh
            }) : (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-1",
                children: [sh, o_ && null != aM ? (0, i.jsx)("div", {
                    className: "flex items-center justify-center",
                    role: "status",
                    "aria-label": "loading" === aM.type ? oB : oO,
                    children: (0, i.jsx)(eh.a, {
                        statusState: aM
                    })
                }) : null, (0, i.jsx)("h2", {
                    id: aN,
                    "data-dropdown-overlay-side": "auto",
                    className: (0, l.b)("min-w-0 text-base font-medium text-secondary", (!ar || null == iB) && "truncate"),
                    children: iB ?? (ar ? (0, i.jsx)(ee.b, {
                        children: (0, i.jsx)("span", {
                            className: "truncate",
                            children: an ? iW : (0, i.jsx)(v.a, {
                                id: "quickChat.newChatTitle",
                                defaultMessage: "New chat",
                                description: "Title of the expanded floating composer before a chat has started"
                            })
                        })
                    }) : iW)
                })]
            }), iu[372] = ar, iu[373] = o_, iu[374] = sh, iu[375] = an, iu[376] = iC, iu[377] = oB, iu[378] = iW, iu[379] = iB, iu[380] = aN, iu[381] = aM, iu[382] = oO, iu[383] = t4) : t4 = iu[383];
            let sm = t4;
            iu[384] !== aH || iu[385] !== of || iu[386] !== l$ || iu[387] !== r8 || iu[388] !== iE ? (t5 = iE?.({
                isCompact: of,
                isDragging: l$,
                open: aH,
                onMinimize: r8,
                onOpenChange: aW
            }), iu[384] = aH, iu[385] = of, iu[386] = l$, iu[387] = r8, iu[388] = iE, iu[389] = t5) : t5 = iu[389], iu[390] !== ar || iu[391] !== of || iu[392] !== r8 ? (t6 = ar && (0, i.jsx)(ee.c, {
                isCompact: of,
                onMinimize: r8
            }), iu[390] = ar, iu[391] = of, iu[392] = r8, iu[393] = t6) : t6 = iu[393], iu[394] !== sm || iu[395] !== t5 || iu[396] !== t6 ? (t7 = (0, i.jsxs)(i.Fragment, {
                children: [sm, t5, t6]
            }), iu[394] = sm, iu[395] = t5, iu[396] = t6, iu[397] = t7) : t7 = iu[397];
            let sp = t7,
                sf = am ? "hidden" : "contents";
            iu[398] !== i7 || iu[399] !== ar || iu[400] !== sp || iu[401] !== i6 || iu[402] !== ae || iu[403] !== of || iu[404] !== oH || iu[405] !== iL || iu[406] !== st || iu[407] !== lR || iu[408] !== aD || iu[409] !== ov ? (t8 = ar ? (0, i.jsx)(ee.a, {
                isCompact: ae && of,
                isVisible: oH,
                isDisabled: i6,
                children: sp
            }) : (0, i.jsx)(ee.d, {
                expandOnClick: ae,
                animateChrome: !aD && !iL && null == lR,
                isChromeRevealed: oH,
                isCompact: of,
                isDisabled: i6,
                reserveSpace: ae && ov && !of,
                presentationToggle: i7 ? st : void 0,
                children: sp
            }), iu[398] = i7, iu[399] = ar, iu[400] = sp, iu[401] = i6, iu[402] = ae, iu[403] = of, iu[404] = oH, iu[405] = iL, iu[406] = st, iu[407] = lR, iu[408] = aD, iu[409] = ov, iu[410] = t8) : t8 = iu[410], iu[411] !== ss || iu[412] !== sr || iu[413] !== sf || iu[414] !== t8 ? (t9 = (0, i.jsx)("div", {
                className: sf,
                onPointerDownCapture: sr,
                onContextMenu: ss,
                children: t8
            }), iu[411] = ss, iu[412] = sr, iu[413] = sf, iu[414] = t8, iu[415] = t9) : t9 = iu[415];
            let sg = t9,
                sv = ar ? {
                    top: rM.startsWith("top") ? rH : void 0,
                    bottom: rM.startsWith("top") ? void 0 : rO.bottom,
                    left: rA,
                    width: rE.width,
                    height: rE.height,
                    opacity: or
                } : {
                    inset: 0
                },
                sb = !iL,
                sx = iL ? aw : void 0;
            iu[416] !== ar || iu[417] !== oo ? (ne = ar ? void 0 : {
                opacity: +!!oo
            }, iu[416] = ar, iu[417] = oo, iu[418] = ne) : ne = iu[418];
            let sy = !iL || void 0;
            iu[419] !== aD ? (nt = aD ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, iu[419] = aD, iu[420] = nt) : nt = iu[420];
            let sw = iL ? "minimized" : "preview",
                sS = iL && "pointer-events-auto";
            iu[421] !== sS ? (nn = (0, l.b)("absolute inset-0 m-auto touch-none", sS), iu[421] = sS, iu[422] = nn) : nn = iu[422];
            let sz = oF ? o$ : void 0;
            iu[423] !== aR || iu[424] !== iK || iu[425] !== iW ? (ni = iK ?? aR.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}",
                description: "Accessible label for restoring a minimized floating chat"
            }, {
                title: iW
            }), iu[423] = aR, iu[424] = iK, iu[425] = iW, iu[426] = ni) : ni = iu[426];
            let sC = !i9 && iL && lY;
            iu[427] !== tB ? (na = e => {
                0 !== e.detail && lG.current || tB()
            }, iu[427] = tB, iu[428] = na) : na = iu[428], iu[429] !== ar || iu[430] !== lT ? (nl = e => {
                ar || "touch" === e.pointerType || lT(!0)
            }, iu[429] = ar, iu[430] = lT, iu[431] = nl) : nl = iu[431], iu[432] !== e5.type || iu[433] !== ar || iu[434] !== lT ? (no = e => {
                "ready" === e5.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), ar || (0, f.flushSync)(() => lT(!0)), lw.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, iu[432] = e5.type, iu[433] = ar, iu[434] = lT, iu[435] = no) : no = iu[435], iu[436] !== a7 || iu[437] !== rF ? (nr = e => {
                a7 || 0 !== e.button || (lG.current = !1, e.currentTarget.setPointerCapture(e.pointerId), rF(e))
            }, iu[436] = a7, iu[437] = rF, iu[438] = nr) : nr = iu[438], iu[439] !== ar || iu[440] !== oF || iu[441] !== oE || iu[442] !== iO || iu[443] !== aj ? (ns = oE && null != aj && null == iO ? (0, i.jsx)(eh.a, {
                statusState: aj,
                size: ar ? "default" : "compact"
            }) : (0, i.jsx)(U.a, {
                badgeEnabled: oF,
                children: iO ?? (0, i.jsx)(_.Ib, {})
            }), iu[439] = ar, iu[440] = oF, iu[441] = oE, iu[442] = iO, iu[443] = aj, iu[444] = ns) : ns = iu[444], iu[445] !== sw || iu[446] !== nn || iu[447] !== sz || iu[448] !== ni || iu[449] !== sC || iu[450] !== na || iu[451] !== nl || iu[452] !== no || iu[453] !== nr || iu[454] !== ns ? (nc = (0, i.jsx)(q.a, {
                ref: ly,
                className: nn,
                "aria-description": sz,
                "aria-label": ni,
                autoFocus: sC,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: na,
                onPointerEnter: nl,
                onKeyDown: no,
                onPointerDown: nr,
                children: ns
            }, sw), iu[445] = sw, iu[446] = nn, iu[447] = sz, iu[448] = ni, iu[449] = sC, iu[450] = na, iu[451] = nl, iu[452] = no, iu[453] = nr, iu[454] = ns, iu[455] = nc) : nc = iu[455], iu[456] !== sv || iu[457] !== sb || iu[458] !== sx || iu[459] !== ne || iu[460] !== sy || iu[461] !== nt || iu[462] !== nc ? (nu = (0, i.jsx)(d.a.div, {
                ref: E.c,
                className: "pointer-events-none absolute",
                style: sv,
                "aria-hidden": sb,
                "data-pip-obstacle": sx,
                animate: ne,
                initial: !1,
                inert: sy,
                transition: nt,
                children: nc
            }), iu[456] = sv, iu[457] = sb, iu[458] = sx, iu[459] = ne, iu[460] = sy, iu[461] = nt, iu[462] = nc, iu[463] = nu) : nu = iu[463];
            let sk = nu,
                sj = "ready" === e5.type ? (0, i.jsx)(H, {
                    items: e5.value,
                    availableHeight: Math.max(0, (ig?.height ?? a_) - oZ - aI - (iL ? rE.height : o2) - 32 - 12),
                    isDockedTop: lc,
                    shouldReduceMotion: aD
                }) : null;
            !ar && (nd = ey, oo ? nd = r$ : null != lR || l$ || (nd = "none"));
            let sE = null != lR || !iL;
            iu[464] !== ar || iu[465] !== ru || iu[466] !== rc || iu[467] !== rr || iu[468] !== rs || iu[469] !== rU ? (nh = ar ? {
                x: rr,
                y: rs,
                width: rc,
                height: ru,
                borderRadius: rU
            } : void 0, iu[464] = ar, iu[465] = ru, iu[466] = rc, iu[467] = rr, iu[468] = rs, iu[469] = rU, iu[470] = nh) : nh = iu[470], iu[471] !== ar || iu[472] !== rY || iu[473] !== rZ || iu[474] !== rU || iu[475] !== rX || iu[476] !== rV ? (nm = ar ? {
                top: rV,
                right: rX,
                bottom: rY,
                left: rZ,
                borderRadius: rU
            } : void 0, iu[471] = ar, iu[472] = rY, iu[473] = rZ, iu[474] = rU, iu[475] = rX, iu[476] = rV, iu[477] = nm) : nm = iu[477], iu[478] !== o8 || iu[479] !== ri ? (np = {
                height: o8,
                width: ri
            }, iu[478] = o8, iu[479] = ri, iu[480] = np) : np = iu[480];
            let sM = ar && oV,
                sP = ar && !oV ? oX : void 0,
                sR = ov && oH;
            iu[481] !== oJ || iu[482] !== o1 ? (nf = {
                height: oJ,
                width: o1
            }, iu[481] = oJ, iu[482] = o1, iu[483] = nf) : nf = iu[483], iu[484] !== sk || iu[485] !== i$ ? (ng = null == i$ ? sk : (0, i.jsx)(Q.a, {
                disableNative: !0,
                items: i$,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: sk
                })
            }), iu[484] = sk, iu[485] = i$, iu[486] = ng) : ng = iu[486], iu[487] !== o6 || iu[488] !== o7 ? (nv = {
                height: o6,
                width: o7
            }, iu[487] = o6, iu[488] = o7, iu[489] = nv) : nv = iu[489];
            let sN = !a7 && !ad,
                sL = oo || ar ? "panel" : im,
                sT = oW ? void 0 : iW,
                sD = oW ? aN : void 0,
                sq = null != ig && void 0;
            iu[490] !== i4 || iu[491] !== rt || iu[492] !== aD ? (nb = i4 ? {
                opacity: +!!rt,
                translateY: 8 * (!rt && !aD)
            } : {}, iu[490] = i4, iu[491] = rt, iu[492] = aD, iu[493] = nb) : nb = iu[493];
            let s_ = ar || lU?.stage !== "approaching" ? 1 : .95;
            iu[494] !== ri || iu[495] !== nb || iu[496] !== s_ ? (nx = {
                ...nb,
                width: ri,
                scale: s_
            }, iu[494] = ri, iu[495] = nb, iu[496] = s_, iu[497] = nx) : nx = iu[497];
            let sF = !!ar && void 0 !== iv && !!l$ || void 0,
                sI = !ar && oh || void 0,
                sA = iL ? void 0 : aw,
                sH = !a7,
                sW = null == ig ? void 0 : {
                    left: r_.left - rN.x,
                    right: r_.right - rN.x,
                    top: r_.top - rN.y,
                    bottom: r_.bottom - rN.y
                },
                sB = null == ig ? void 0 : 0;
            iu[498] !== i4 || iu[499] !== aD ? (ny = !!i4 && !aD && {
                opacity: 0,
                translateY: 8
            }, iu[498] = i4, iu[499] = aD, iu[500] = ny) : ny = iu[500];
            let sO = null == ig ? "dialog" : "region",
                s$ = lc ? oZ + 10 : "auto",
                sK = lc ? "auto" : 10 + aI,
                sV = oV ? "50%" : "auto";
            iu[501] !== oX || iu[502] !== oV ? (nw = !oV && {
                [oX]: 10
            }, iu[501] = oX, iu[502] = oV, iu[503] = nw) : nw = iu[503];
            let sX = oV ? "-50% 0" : void 0,
                sY = "bottom-center" === rM ? .5 : Number(rM.endsWith("right")),
                sZ = +!rM.startsWith("top");
            iu[504] !== o9 || iu[505] !== rj || iu[506] !== lg || iu[507] !== lv || iu[508] !== s$ || iu[509] !== sK || iu[510] !== sV || iu[511] !== nw || iu[512] !== sX || iu[513] !== sY || iu[514] !== sZ ? (nS = {
                ...rj,
                height: o9,
                top: s$,
                bottom: sK,
                left: sV,
                right: "auto",
                ...nw,
                translate: sX,
                x: lg,
                y: lv,
                originX: sY,
                originY: sZ
            }, iu[504] = o9, iu[505] = rj, iu[506] = lg, iu[507] = lv, iu[508] = s$, iu[509] = sK, iu[510] = sV, iu[511] = nw, iu[512] = sX, iu[513] = sY, iu[514] = sZ, iu[515] = nS) : nS = iu[515];
            let sU = .3 * !aD;
            iu[516] !== sU ? (nz = {
                duration: sU,
                ease: N.e
            }, iu[516] = sU, iu[517] = nz) : nz = iu[517], iu[518] !== rn || iu[519] !== nz ? (nC = {
                duration: rn,
                ease: N.e,
                scale: nz
            }, iu[518] = rn, iu[519] = nz, iu[520] = nC) : nC = iu[520], iu[521] !== ar || iu[522] !== ae || iu[523] !== i9 || iu[524] !== aL || iu[525] !== lO || iu[526] !== lq || iu[527] !== lT || iu[528] !== lP || iu[529] !== lN || iu[530] !== oC ? (nk = e => {
                if (!(i9 || eM(e.currentTarget, e.relatedTarget, aL))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && eM(t, t.ownerDocument.activeElement, aL) || (lq(!1), lO(!1), lT(!1))
                        });
                        return
                    }
                    lq(!1), lO(!1), lT(!1), (!ar || ae) && oC && null == e.target.closest("[inert]") && (lN(null), lP("compact"))
                }
            }, iu[521] = ar, iu[522] = ae, iu[523] = i9, iu[524] = aL, iu[525] = lO, iu[526] = lq, iu[527] = lT, iu[528] = lP, iu[529] = lN, iu[530] = oC, iu[531] = nk) : nk = iu[531], iu[532] !== op || iu[533] !== ar || iu[534] !== tA || iu[535] !== oh || iu[536] !== ae || iu[537] !== iL || iu[538] !== lP || iu[539] !== lN || iu[540] !== ov || iu[541] !== tO ? (nj = e => {
                if (!(ae && (0 !== e.button || e.ctrlKey) || iL || lG.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (oh && (e.target === e.currentTarget || lb.current?.contains(e.target))) return void tA();
                    if (ae) {
                        if (!ov || !op) return;
                        oh && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), lN(null), lP("expanded");
                        return
                    }
                    if (ar) {
                        oh && op && tA();
                        return
                    }
                    ov && op && e.target.closest("header[data-quick-chat-drag-handle]") && (oh && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), tO())
                }
            }, iu[532] = op, iu[533] = ar, iu[534] = tA, iu[535] = oh, iu[536] = ae, iu[537] = iL, iu[538] = lP, iu[539] = lN, iu[540] = ov, iu[541] = tO, iu[542] = nj) : nj = iu[542], iu[543] !== ar || iu[544] !== oJ || iu[545] !== o1 || iu[546] !== o6 || iu[547] !== o7 || iu[548] !== iL || iu[549] !== iI || iu[550] !== ai || iu[551] !== l9 || iu[552] !== lP || iu[553] !== lN || iu[554] !== r4 ? (nE = e => {
                ar && !iL && !lG.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (lN(null), lP("expanded"), l9(null), el(ai, P, () => iI?.("bottom-right")), r4("bottom-right", !0, {
                    height: eP(P.height, o6, oJ),
                    width: eP(P.width + 12, o7, o1)
                }))
            }, iu[543] = ar, iu[544] = oJ, iu[545] = o1, iu[546] = o6, iu[547] = o7, iu[548] = iL, iu[549] = iI, iu[550] = ai, iu[551] = l9, iu[552] = lP, iu[553] = lN, iu[554] = r4, iu[555] = nE) : nE = iu[555], iu[556] !== i9 ? (nM = e => {
                !i9 && lG.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, iu[556] = i9, iu[557] = nM) : nM = iu[557], iu[558] !== ar || iu[559] !== r2 || iu[560] !== lU || iu[561] !== iD || iu[562] !== lM || iu[563] !== lQ || iu[564] !== lN ? (nP = (e, t) => {
                let n = r2(t);
                if (!iD?.(n.suppressEdgeDrop ? null : e) && null != n.dockPosition && (ar ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching",
                        t = ar ? "bottom-right" : n.dockPosition;
                    (lU?.stage !== e || lU.dockPosition !== t) && (lQ({
                        dockPosition: t,
                        stage: e
                    }), (n.shouldMinimize || lU?.stage === "minimized") && lN(ar ? null : {
                        target: n.shouldMinimize ? "minimized" : lM
                    }))
                } else null != lU && "restored" !== lU.stage && (lQ({
                    ...lU,
                    stage: "restored"
                }), "minimized" === lU.stage && lN(ar ? null : {
                    target: lM
                }))
            }, iu[558] = ar, iu[559] = r2, iu[560] = lU, iu[561] = iD, iu[562] = lM, iu[563] = lQ, iu[564] = lN, iu[565] = nP) : nP = iu[565], iu[566] !== ar || iu[567] !== ap || iu[568] !== lg || iu[569] !== lv || iu[570] !== r2 || iu[571] !== ad || iu[572] !== r8 || iu[573] !== lU || iu[574] !== iq || iu[575] !== iD || iu[576] !== lM || iu[577] !== aa || iu[578] !== r3 || iu[579] !== lK || iu[580] !== lQ || iu[581] !== lN || iu[582] !== aD || iu[583] !== r4 ? (nR = (e, t) => {
                if (lh.current) return;
                let n = r2(t),
                    i = n.suppressEdgeDrop ? null : e,
                    a = e => !!iq?.(i, e) && (lg.jump(0), lv.jump(0), lQ(null), lN(null), lK(!1), !0),
                    l = af.current;
                if (ad && ap && l && i && iD?.(i)) return void
                function(e) {
                    let {
                        source: t,
                        getTab: n,
                        destination: i,
                        update: a,
                        reducedMotion: l
                    } = e;
                    $?.animation.skipTransition(), $?.cleanup();
                    let o = t?.ownerDocument ?? document;
                    if (l || null == t || "function" != typeof o.startViewTransition) return a();
                    let r = o.documentElement,
                        s = (0, B.a)({
                            ...b.b,
                            duration: 300,
                            keyframes: [0, 1]
                        }).toString();
                    r.style.setProperty("--chat-pin-easing", s.slice(s.indexOf(" ") + 1)), r.classList.add(O);
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
                        m = !!n()?.getClientRects().length;
                    d(t);
                    let p = null,
                        g = o.startViewTransition(() => {
                            if (h(), !t.isConnected) return void g.skipTransition();
                            if ((0, f.flushSync)(a), null == (p = i())) g.skipTransition();
                            else {
                                d(p), m || u(n()?.closest("[data-tab-id]") ?? null, "incomingTab-fuq1Db");
                                let e = p.querySelector("[data-composer-surface-variant]");
                                if (null != e) {
                                    let t = getComputedStyle(e);
                                    r.style.setProperty("--chat-pin-radius", t.borderRadius), r.style.setProperty("--chat-pin-background", t.backgroundColor), r.style.setProperty("--chat-pin-corner-shape", t.getPropertyValue("corner-shape"))
                                }
                            }
                        }),
                        v = () => {
                            $?.animation === g && (h(), $ = null, r.classList.remove(O), r.style.removeProperty("--chat-pin-easing"), r.style.removeProperty("--chat-pin-radius"), r.style.removeProperty("--chat-pin-background"), r.style.removeProperty("--chat-pin-corner-shape"))
                        };
                    $ = {
                        animation: g,
                        cleanup: v
                    }, g.ready.catch(() => {}), g.finished.then(v, v)
                }({
                    source: l,
                    getTab: () => {
                        let e = aa.get(S.l.tabById$, ef.a);
                        return null == e ? null : l.ownerDocument.getElementById((0, z.a)(e.dndId))
                    },
                    destination: () => aa.get(ev.a),
                    reducedMotion: aD,
                    update: () => {
                        !lh.current && (a("pin") || (r4(n.requestedDockPosition, !0), lK(!1)))
                    }
                });
                if (!a()) {
                    if (n.shouldMinimize && null != n.requestedDockPosition) {
                        let e = ar ? "bottom-right" : n.requestedDockPosition;
                        (0, f.flushSync)(() => {
                            r3(e, !0), r8()
                        })
                    } else r4(n.requestedDockPosition, !0), null != lU && "restored" !== lU.stage && (lQ({
                        ...lU,
                        stage: "restored"
                    }), "minimized" === lU.stage && lN(ar ? null : {
                        target: lM
                    }));
                    lK(!1)
                }
            }, iu[566] = ar, iu[567] = ap, iu[568] = lg, iu[569] = lv, iu[570] = r2, iu[571] = ad, iu[572] = r8, iu[573] = lU, iu[574] = iq, iu[575] = iD, iu[576] = lM, iu[577] = aa, iu[578] = r3, iu[579] = lK, iu[580] = lQ, iu[581] = lN, iu[582] = aD, iu[583] = r4, iu[584] = nR) : nR = iu[584], iu[585] !== lg || iu[586] !== lv || iu[587] !== lK || iu[588] !== lT ? (nN = () => {
                lT(!1), lh.current = !1, lG.current = !0, lK(!0), lg.stop(), lv.stop()
            }, iu[585] = lg, iu[586] = lv, iu[587] = lK, iu[588] = lT, iu[589] = nN) : nN = iu[589], iu[590] !== op || iu[591] !== ar || iu[592] !== ae || iu[593] !== lI || iu[594] !== lO || iu[595] !== lq || iu[596] !== lP || iu[597] !== lN || iu[598] !== ov ? (nL = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!ar || ae) && lq(!0), lO(!0), (ae ? ov && op : ar) && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !lI && null == lH.current && (lN(null), lP("expanded"))) : e.currentTarget.contains(e.target) && !lb.current?.contains(e.target) && (lO(!1), ae && e.target.closest("header[data-quick-chat-drag-handle]") && lq(!0))
            }, iu[590] = op, iu[591] = ar, iu[592] = ae, iu[593] = lI, iu[594] = lO, iu[595] = lq, iu[596] = lP, iu[597] = lN, iu[598] = ov, iu[599] = nL) : nL = iu[599], iu[600] !== ld || iu[601] !== i9 ? (nT = e => {
                i9 || "Escape" !== e.key || (lG.current = !0, ld.cancel())
            }, iu[600] = ld, iu[601] = i9, iu[602] = nT) : nT = iu[602], iu[603] !== i9 || iu[604] !== a7 || iu[605] !== rF ? (nD = e => {
                if (i9 || (lG.current = !1, a7 || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]");
                null != t && (null == n || n === t) && (e.preventDefault(), t.setPointerCapture(e.pointerId), rF(e))
            }, iu[603] = i9, iu[604] = a7, iu[605] = rF, iu[606] = nD) : nD = iu[606], iu[607] !== lT ? (nq = () => {
                lw.current?.contains(document.activeElement) || lT(!1)
            }, iu[607] = lT, iu[608] = nq) : nq = iu[608], iu[609] !== ld || iu[610] !== tW || iu[611] !== id || iu[612] !== sT || iu[613] !== sD || iu[614] !== sq || iu[615] !== nx || iu[616] !== sF || iu[617] !== sI || iu[618] !== sA || iu[619] !== sH || iu[620] !== sW || iu[621] !== sB || iu[622] !== ny || iu[623] !== sO || iu[624] !== nS || iu[625] !== nC || iu[626] !== nk || iu[627] !== nj || iu[628] !== nE || iu[629] !== nM || iu[630] !== nP || iu[631] !== nR || iu[632] !== nN || iu[633] !== nL || iu[634] !== nT || iu[635] !== nD || iu[636] !== nq ? (n_ = {
                ref: id,
                "aria-label": sT,
                "aria-labelledby": sD,
                "aria-modal": sq,
                animate: nx,
                "data-chat-pane-dragging": sF,
                "data-quick-chat-drag-handle": sI,
                "data-pip-obstacle": sA,
                "data-state": "open",
                drag: sH,
                dragConstraints: sW,
                dragElastic: sB,
                dragControls: ld,
                dragListener: !1,
                dragMomentum: !1,
                initial: ny,
                role: sO,
                tabIndex: -1,
                style: nS,
                transition: nC,
                onBlurCapture: nk,
                onClick: nj,
                onDoubleClick: nE,
                onClickCapture: nM,
                onDrag: nP,
                onDragEnd: nR,
                onDragStart: nN,
                onFocusCapture: nL,
                onKeyDown: tW,
                onKeyDownCapture: nT,
                onPointerDownCapture: nD,
                onPointerLeave: nq
            }, iu[609] = ld, iu[610] = tW, iu[611] = id, iu[612] = sT, iu[613] = sD, iu[614] = sq, iu[615] = nx, iu[616] = sF, iu[617] = sI, iu[618] = sA, iu[619] = sH, iu[620] = sW, iu[621] = sB, iu[622] = ny, iu[623] = sO, iu[624] = nS, iu[625] = nC, iu[626] = nk, iu[627] = nj, iu[628] = nE, iu[629] = nM, iu[630] = nP, iu[631] = nR, iu[632] = nN, iu[633] = nL, iu[634] = nT, iu[635] = nD, iu[636] = nq, iu[637] = n_) : n_ = iu[637];
            let sQ = null == ig ? "floating" : "content",
                sG = lc ? "bottom" : "top";
            iu[638] !== ar || iu[639] !== lg || iu[640] !== lv || iu[641] !== l0 || iu[642] !== lP || iu[643] !== lN ? (nF = e => {
                l0(e), e && (ar && lP("expanded"), lN(null), lg.stop(), lv.stop())
            }, iu[638] = ar, iu[639] = lg, iu[640] = lv, iu[641] = l0, iu[642] = lP, iu[643] = lN, iu[644] = nF) : nF = iu[644], iu[645] !== e5.type || iu[646] !== sj || iu[647] !== ar || iu[648] !== oq || iu[649] !== lc || iu[650] !== iL || iu[651] !== a5 || iu[652] !== rG || iu[653] !== aw || iu[654] !== lq ? (nI = !ar && oq && "ready" === e5.type ? (0, i.jsx)("div", {
                ref: (0, L.a)(lw, a5, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iL && (lc ? "top-full" : "bottom-full"), lc ? "pt-3" : "pb-3"),
                "data-pip-obstacle": aw,
                onClickCapture: () => {
                    (iL ? ly.current : lx.current)?.focus({
                        preventScroll: !0
                    }), lq(!1)
                },
                style: iL ? rG : void 0,
                children: sj
            }) : null, iu[645] = e5.type, iu[646] = sj, iu[647] = ar, iu[648] = oq, iu[649] = lc, iu[650] = iL, iu[651] = a5, iu[652] = rG, iu[653] = aw, iu[654] = lq, iu[655] = nI) : nI = iu[655], iu[656] !== sj || iu[657] !== ar || iu[658] !== oq || iu[659] !== lc || iu[660] !== iL || iu[661] !== a5 || iu[662] !== rG || iu[663] !== lO || iu[664] !== lq || iu[665] !== aD ? (nA = ar && oq ? (0, i.jsx)(d.a.div, {
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
                    ease: N.e
                },
                ref: (0, L.a)(lw, a5, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iL && (lc ? "top-full" : "bottom-full"), iL && (lc ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (iL ? ly.current : lx.current)?.focus({
                        preventScroll: !0
                    }), lq(!1), lO(!1)
                },
                style: iL ? rG : void 0,
                children: iL ? (0, i.jsx)(j.c, {
                    variant: "notice",
                    children: sj
                }) : sj
            }, "response-preview") : null, iu[656] = sj, iu[657] = ar, iu[658] = oq, iu[659] = lc, iu[660] = iL, iu[661] = a5, iu[662] = rG, iu[663] = lO, iu[664] = lq, iu[665] = aD, iu[666] = nA) : nA = iu[666], iu[667] !== nA ? (nH = (0, i.jsx)(h.a, {
                initial: !1,
                children: nA
            }), iu[667] = nA, iu[668] = nH) : nH = iu[668], iu[669] !== rx || iu[670] !== l1 || iu[671] !== ar || iu[672] !== ay || iu[673] !== tA || iu[674] !== of || iu[675] !== og || iu[676] !== i9 || iu[677] !== iQ || iu[678] !== aD || iu[679] !== ow ? (nW = ar && void 0 !== iQ && !i9 && !og && (0, i.jsx)(ej, {
                compact: of,
                preview: ow ? iQ : null,
                reduceMotion: aD,
                composerHeight: l1,
                opacity: rx,
                onExpand: tA
            }, ay), iu[669] = rx, iu[670] = l1, iu[671] = ar, iu[672] = ay, iu[673] = tA, iu[674] = of, iu[675] = og, iu[676] = i9, iu[677] = iQ, iu[678] = aD, iu[679] = ow, iu[680] = nW) : nW = iu[680];
            let sJ = lc ? "top-full pt-2" : "bottom-full";
            iu[681] !== sJ ? (nB = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", sJ), iu[681] = sJ, iu[682] = nB) : nB = iu[682], iu[683] !== a1 || iu[684] !== oo || iu[685] !== nB ? (nO = (0, i.jsx)("div", {
                ref: a1,
                className: nB,
                hidden: oo
            }), iu[683] = a1, iu[684] = oo, iu[685] = nB, iu[686] = nO) : nO = iu[686];
            let s0 = 0 === oY && "pt-2",
                s1 = lc ? "w-full" : "w-80",
                s2 = oV && "left-1/2 -translate-x-1/2",
                s3 = !oV && (oK ? "left-0" : "right-0"),
                s4 = oo && l$ && "invisible";
            iu[687] !== s0 || iu[688] !== s1 || iu[689] !== s2 || iu[690] !== s3 || iu[691] !== s4 ? (n$ = (0, l.b)(T.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", s0, s1, s2, s3, s4), iu[687] = s0, iu[688] = s1, iu[689] = s2, iu[690] = s3, iu[691] = s4, iu[692] = n$) : n$ = iu[692], iu[693] !== oY ? (nK = {
                marginTop: oY
            }, iu[693] = oY, iu[694] = nK) : nK = iu[694], iu[695] !== iS || iu[696] !== a2 || iu[697] !== aw || iu[698] !== n$ || iu[699] !== nK ? (nV = (0, i.jsx)("div", {
                ref: a2,
                className: n$,
                style: nK,
                "data-pip-obstacle": aw,
                children: iS
            }), iu[695] = iS, iu[696] = a2, iu[697] = aw, iu[698] = n$, iu[699] = nK, iu[700] = nV) : nV = iu[700], iu[701] !== nd || iu[702] !== ar || iu[703] !== oo ? (nX = ar ? void 0 : {
                clipPath: nd,
                opacity: +!oo
            }, iu[701] = nd, iu[702] = ar, iu[703] = oo, iu[704] = nX) : nX = iu[704];
            let s5 = !og && "pointer-events-auto";
            iu[705] !== s5 ? (nY = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", s5), iu[705] = s5, iu[706] = nY) : nY = iu[706], iu[707] !== os || iu[708] !== ar || iu[709] !== rQ ? (nZ = ar ? {
                clipPath: rQ,
                opacity: os
            } : void 0, iu[707] = os, iu[708] = ar, iu[709] = rQ, iu[710] = nZ) : nZ = iu[710];
            let s6 = !!og || void 0;
            iu[711] !== ar || iu[712] !== lR || iu[713] !== aD ? (nU = aD || !ar && null == lR ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, iu[711] = ar, iu[712] = lR, iu[713] = aD, iu[714] = nU) : nU = iu[714], iu[715] !== oo || iu[716] !== r$ || iu[717] !== lM || iu[718] !== lR || iu[719] !== lN ? (nQ = e => {
                lR?.target === (oo ? "minimized" : lM) && "object" == typeof e && "clipPath" in e && e.clipPath === (oo ? r$ : ey) && lN(e => e === lR ? null : e)
            }, iu[715] = oo, iu[716] = r$, iu[717] = lM, iu[718] = lR, iu[719] = lN, iu[720] = nQ) : nQ = iu[720], iu[721] !== ar || iu[722] !== oh || iu[723] !== lc || iu[724] !== r8 || iu[725] !== ov ? (nG = !ar && !ov && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", lc ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(ee.c, {
                    standalone: !0,
                    isCompact: oh,
                    onMinimize: r8
                })
            }), iu[721] = ar, iu[722] = oh, iu[723] = lc, iu[724] = r8, iu[725] = ov, iu[726] = nG) : nG = iu[726], iu[727] !== ar || iu[728] !== sg || iu[729] !== of || iu[730] !== l$ || iu[731] !== r8 || iu[732] !== iE || iu[733] !== ov ? (nJ = (ar || ov) && (iE?.({
                contextMenuTrigger: sg,
                isCompact: of,
                isDragging: l$,
                onMinimize: r8
            }) ?? sg), iu[727] = ar, iu[728] = sg, iu[729] = of, iu[730] = l$, iu[731] = r8, iu[732] = iE, iu[733] = ov, iu[734] = nJ) : nJ = iu[734], iu[735] !== ib || iu[736] !== am ? (n0 = am && (0, i.jsx)(eg.a, {
                hasPagePicker: ib
            }), iu[735] = ib, iu[736] = am, iu[737] = n0) : n0 = iu[737];
            let s7 = of && "justify-end";
            iu[738] !== s7 ? (n1 = (0, l.b)("relative flex min-h-0 flex-1 flex-col", s7), iu[738] = s7, iu[739] = n1) : n1 = iu[739];
            let s8 = ar ? of : aS.followLatestTranscript;
            iu[740] !== aS || iu[741] !== s8 ? (n2 = {
                ...aS,
                isFloatingChatSurface: !0,
                followLatestTranscript: s8
            }, iu[740] = aS, iu[741] = s8, iu[742] = n2) : n2 = iu[742];
            let s9 = ar ? "absolute inset-x-0 overflow-hidden" : "contents";
            iu[743] !== l1 || iu[744] !== ar || iu[745] !== rh ? (n3 = ar ? {
                bottom: l1,
                height: rh
            } : void 0, iu[743] = l1, iu[744] = ar, iu[745] = rh, iu[746] = n3) : n3 = iu[746], iu[747] !== rx || iu[748] !== ob || iu[749] !== aP || iu[750] !== of || iu[751] !== aJ || iu[752] !== iZ ? (n4 = ob && !aP && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) bottom-0 px-4 py-3 text-sm text-default",
                "aria-hidden": !of,
                style: {
                    opacity: rx
                },
                ref: aJ,
                children: iZ ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…",
                    description: "Status shown in the floating response banner while the chat is working"
                })
            }), iu[747] = rx, iu[748] = ob, iu[749] = aP, iu[750] = of, iu[751] = aJ, iu[752] = iZ, iu[753] = n4) : n4 = iu[753];
            let ce = !ar && (of ? "hidden" : "flex"),
                ct = ar && "absolute inset-x-0 bottom-0 flex",
                cn = ar && "overflow-hidden";
            iu[754] !== ce || iu[755] !== ct || iu[756] !== cn ? (n5 = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", ce, ct, cn), iu[754] = ce, iu[755] = ct, iu[756] = cn, iu[757] = n5) : n5 = iu[757], iu[758] !== l1 || iu[759] !== ar || iu[760] !== o5 || iu[761] !== ad || iu[762] !== rv || iu[763] !== rb || iu[764] !== rg ? (n6 = ar ? {
                height: ad ? void 0 : Math.max(0, o5 - 46 - l1),
                top: ad ? 0 : void 0,
                opacity: rb,
                clipPath: rv,
                y: rg
            } : void 0, iu[758] = l1, iu[759] = ar, iu[760] = o5, iu[761] = ad, iu[762] = rv, iu[763] = rb, iu[764] = rg, iu[765] = n6) : n6 = iu[765], iu[766] !== ar || iu[767] !== ab || iu[768] !== om || iu[769] !== of || iu[770] !== i9 || iu[771] !== oo || iu[772] !== iJ || iu[773] !== lP || iu[774] !== lN ? (n7 = ab && (!om || ar) ? iJ?.(() => {
                lN(null), lP("compact")
            }, !of && !i9 && !oo) : null, iu[766] = ar, iu[767] = ab, iu[768] = om, iu[769] = of, iu[770] = i9, iu[771] = oo, iu[772] = iJ, iu[773] = lP, iu[774] = lN, iu[775] = n7) : n7 = iu[775], iu[776] !== ar || iu[777] !== av || iu[778] !== ab || iu[779] !== of || iu[780] !== rn ? (n8 = !ab && (0, i.jsx)(h.a, {
                initial: !1,
                children: (ar || !of) && null != av && (0, i.jsx)(d.a.div, {
                    className: "flex min-h-0 flex-1 flex-col",
                    initial: !ar && {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: rn,
                        ease: N.e
                    },
                    children: av
                }, "empty-state")
            }), iu[776] = ar, iu[777] = av, iu[778] = ab, iu[779] = of, iu[780] = rn, iu[781] = n8) : n8 = iu[781], iu[782] !== of || iu[783] !== aX || iu[784] !== n5 || iu[785] !== n6 || iu[786] !== n7 || iu[787] !== n8 ? (n9 = (0, i.jsxs)(d.a.div, {
                ref: aX,
                "aria-hidden": of,
                className: n5,
                inert: of,
                style: n6,
                children: [n7, n8]
            }), iu[782] = of, iu[783] = aX, iu[784] = n5, iu[785] = n6, iu[786] = n7, iu[787] = n8, iu[788] = n9) : n9 = iu[788], iu[789] !== ar || iu[790] !== tA || iu[791] !== ob || iu[792] !== of || iu[793] !== se || iu[794] !== iU ? (ie = ar && of && ob && (0, i.jsx)(eE, {
                label: se,
                responsePreview: iU,
                onExpand: tA
            }), iu[789] = ar, iu[790] = tA, iu[791] = ob, iu[792] = of, iu[793] = se, iu[794] = iU, iu[795] = ie) : ie = iu[795], iu[796] !== s9 || iu[797] !== n3 || iu[798] !== n4 || iu[799] !== n9 || iu[800] !== ie ? (it = (0, i.jsxs)(d.a.div, {
                className: s9,
                style: n3,
                children: [n4, n9, ie]
            }), iu[796] = s9, iu[797] = n3, iu[798] = n4, iu[799] = n9, iu[800] = ie, iu[801] = it) : it = iu[801], iu[802] !== n2 || iu[803] !== it ? (ii = (0, i.jsx)(em.b, {
                value: n2,
                children: it
            }), iu[802] = n2, iu[803] = it, iu[804] = ii) : ii = iu[804];
            let ci = iE?.({
                contextMenuTrigger: sd,
                isCompact: of,
                isDragging: l$,
                onMinimize: r8
            }) ?? sd;
            iu[805] !== n1 || iu[806] !== ii || iu[807] !== ci ? (ia = (0, i.jsxs)("div", {
                className: n1,
                children: [ii, ci]
            }), iu[805] = n1, iu[806] = ii, iu[807] = ci, iu[808] = ia) : ia = iu[808], iu[809] !== ls || iu[810] !== og || iu[811] !== nX || iu[812] !== nY || iu[813] !== nZ || iu[814] !== s6 || iu[815] !== nU || iu[816] !== nQ || iu[817] !== nG || iu[818] !== nJ || iu[819] !== n0 || iu[820] !== ia ? (il = (0, i.jsxs)(d.a.div, {
                "aria-hidden": og,
                animate: nX,
                className: nY,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": ls,
                style: nZ,
                initial: !1,
                inert: s6,
                transition: nU,
                onAnimationComplete: nQ,
                children: [nG, nJ, n0, ia]
            }), iu[809] = ls, iu[810] = og, iu[811] = nX, iu[812] = nY, iu[813] = nZ, iu[814] = s6, iu[815] = nU, iu[816] = nQ, iu[817] = nG, iu[818] = nJ, iu[819] = n0, iu[820] = ia, iu[821] = il) : il = iu[821], iu[822] !== D || iu[823] !== r7 || iu[824] !== oh || iu[825] !== oo || iu[826] !== rO || iu[827] !== iz || iu[828] !== r6 || iu[829] !== si || iu[830] !== sn || iu[831] !== aD || iu[832] !== sE || iu[833] !== nh || iu[834] !== nm || iu[835] !== np || iu[836] !== sM || iu[837] !== sP || iu[838] !== sR || iu[839] !== nf || iu[840] !== ng || iu[841] !== nv || iu[842] !== sN || iu[843] !== sL || iu[844] !== n_ || iu[845] !== sQ || iu[846] !== sG || iu[847] !== nF || iu[848] !== nI || iu[849] !== nH || iu[850] !== nW || iu[851] !== nO || iu[852] !== nV || iu[853] !== il ? (io = (0, i.jsxs)(D, {
                contentRef: af,
                allowCompactResize: !0,
                animateSurface: sE,
                contentStyle: nh,
                surfaceStyle: nm,
                currentSize: np,
                heightLabel: si,
                resizeFromCenter: sM,
                fixedHorizontalEdge: sP,
                isCompact: oh,
                isCompactChromeRevealed: sR,
                isMinimized: oo,
                keepSurfaceInset: !0,
                maximumSize: nf,
                minimizedContent: ng,
                minimizedSurfaceBounds: rO,
                minimumSize: nv,
                prefersCompactPresentation: !0,
                resizable: sN,
                background: sL,
                sectionRef: lx,
                sectionProps: n_,
                shouldReduceMotion: aD,
                variant: sQ,
                verticalResizeEdge: sG,
                widthLabel: sn,
                onResize: r6,
                onResizeEnd: r7,
                onResizingChange: nF,
                children: [nI, nH, nW, nO, nV, il, iz]
            }), iu[822] = D, iu[823] = r7, iu[824] = oh, iu[825] = oo, iu[826] = rO, iu[827] = iz, iu[828] = r6, iu[829] = si, iu[830] = sn, iu[831] = aD, iu[832] = sE, iu[833] = nh, iu[834] = nm, iu[835] = np, iu[836] = sM, iu[837] = sP, iu[838] = sR, iu[839] = nf, iu[840] = ng, iu[841] = nv, iu[842] = sN, iu[843] = sL, iu[844] = n_, iu[845] = sQ, iu[846] = sG, iu[847] = nF, iu[848] = nI, iu[849] = nH, iu[850] = nW, iu[851] = nO, iu[852] = nV, iu[853] = il, iu[854] = io) : io = iu[854];
            let ca = io;
            return iu[855] !== aL ? (ir = {
                id: aL
            }, iu[855] = aL, iu[856] = ir) : ir = iu[856], iu[857] !== ar || iu[858] !== aG ? (is = ar && (0, i.jsx)("div", {
                ref: aG,
                "aria-hidden": !0,
                className: (0, l.b)(ep.a, "pointer-events-none invisible absolute")
            }), iu[857] = ar, iu[858] = aG, iu[859] = is) : is = iu[859], iu[860] !== ca || iu[861] !== ir || iu[862] !== is ? (ic = (0, i.jsxs)(G.a, {
                value: ir,
                children: [is, ca]
            }), iu[860] = ca, iu[861] = ir, iu[862] = is, iu[863] = ic) : ic = iu[863], ic
        }

        function ek() {
            return new Set
        }

        function ej(e) {
            let t, n, l, o, r = (0, a.c)(14),
                {
                    compact: s,
                    preview: c,
                    composerHeight: u,
                    opacity: m,
                    reduceMotion: p,
                    onExpand: f
                } = e;
            r[0] !== u || r[1] !== m ? (t = {
                bottom: u,
                opacity: m
            }, r[0] = u, r[1] = m, r[2] = t) : t = r[2];
            let g = !s || !c;
            return r[3] !== s || r[4] !== f || r[5] !== c || r[6] !== p ? (n = s && c && (0, i.jsx)(d.a.div, {
                className: "col-start-1 row-start-1 max-w-full origin-bottom-left",
                initial: !p && {
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
                transition: p ? {
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
                    onClick: f,
                    children: c.content
                })
            }, c.id), r[3] = s, r[4] = f, r[5] = c, r[6] = p, r[7] = n) : n = r[7], r[8] !== n ? (l = (0, i.jsx)(h.a, {
                children: n
            }), r[8] = n, r[9] = l) : l = r[9], r[10] !== t || r[11] !== g || r[12] !== l ? (o = (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) -z-1 mb-2 grid grid-cols-1 items-end justify-items-start px-4",
                style: t,
                inert: g,
                children: l
            }), r[10] = t, r[11] = g, r[12] = l, r[13] = o) : o = r[13], o
        }

        function eE(e) {
            let t, n = (0, a.c)(4),
                {
                    label: l,
                    responsePreview: o,
                    onExpand: r
                } = e,
                s = (0, m.z)(o) ?? void 0;
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
            d = n("NBTh");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, r, s = (0, a.c)(12),
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
                return s[2] !== v ? (n = (0, l.b)("flex h-toolbar cursor-interaction touch-none items-center justify-between px-2 select-none", v), s[2] = v, s[3] = n) : n = s[3], s[4] !== c || s[5] !== n ? (o = (0, i.jsx)("div", {
                    className: n,
                    children: c
                }), s[4] = c, s[5] = n, s[6] = o) : o = s[6], s[7] !== p || s[8] !== t || s[9] !== g || s[10] !== o ? (r = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden",
                    "aria-hidden": p,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: g,
                    children: o
                }), s[7] = p, s[8] = t, s[9] = g, s[10] = o, s[11] = r) : r = s[11], r
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
                        onMinimize: m,
                        standalone: p
                    } = e,
                    f = void 0 !== p && p,
                    g = (0, r.a)();
                u[0] !== g ? (t = g.formatMessage({
                    id: "quickChat.minimize",
                    defaultMessage: "Minimize chat",
                    description: "Accessible label for minimizing a floating chat"
                }), u[0] = g, u[1] = t) : t = u[1];
                let v = f ? "outlineSurface" : "ghostSecondary",
                    b = h ? "composer" : "toolbar";
                return u[2] !== f ? (n = e => {
                    f && e.preventDefault()
                }, u[2] = f, u[3] = n) : n = u[3], u[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.jsx)(c.a, {
                    "aria-hidden": !1,
                    asset: d.a
                }), u[4] = l) : l = u[4], u[5] !== m || u[6] !== t || u[7] !== v || u[8] !== b || u[9] !== n ? (o = (0, i.jsx)(s.a, {
                    "aria-label": t,
                    color: v,
                    size: b,
                    uniform: !0,
                    onClick: m,
                    onPointerDown: n,
                    children: l
                }), u[5] = m, u[6] = t, u[7] = v, u[8] = b, u[9] = n, u[10] = o) : o = u[10], o
            },
            d: function(e) {
                let t, n, r, s, c, d, h, m = (0, a.c)(28),
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
                    S = void 0 !== f && f,
                    z = !b && "shrink-0";
                m[0] !== z ? (t = (0, l.b)("relative min-h-0 overflow-hidden", z), m[0] = z, m[1] = t) : t = m[1];
                let C = !v || !!x || void 0,
                    k = v || w ? 46 : 0,
                    j = +!!v;
                m[2] !== k || m[3] !== j ? (n = {
                    height: k,
                    opacity: j
                }, m[2] = k, m[3] = j, m[4] = n) : n = m[4];
                let E = !v || !!x || void 0;
                m[5] !== p || m[6] !== S ? (r = p ? {
                    duration: .3,
                    ease: u.e,
                    ...S ? {
                        opacity: {
                            duration: 0
                        }
                    } : {}
                } : {
                    duration: 0
                }, m[5] = p, m[6] = S, m[7] = r) : r = m[7], m[8] !== b || m[9] !== y ? (s = null != y ? (0, i.jsx)("button", {
                    className: "pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    "aria-label": y.label,
                    "aria-expanded": !b,
                    type: "button",
                    onClick: y.onToggle
                }) : null, m[8] = b, m[9] = y, m[10] = s) : s = m[10];
                let M = !S && null != y && b && "cursor-n-resize",
                    P = !S && null != y && !b && "cursor-s-resize",
                    R = (S || null == y) && "cursor-interaction",
                    N = b && "mx-1.5 border-b border-default px-2",
                    L = !b && "px-3";
                return m[11] !== M || m[12] !== P || m[13] !== R || m[14] !== N || m[15] !== L ? (c = (0, l.b)("flex h-toolbar touch-none select-none items-center justify-between", M, P, R, N, L), m[11] = M, m[12] = P, m[13] = R, m[14] = N, m[15] = L, m[16] = c) : c = m[16], m[17] !== g || m[18] !== c ? (d = (0, i.jsx)("div", {
                    className: c,
                    children: g
                }), m[17] = g, m[18] = c, m[19] = d) : d = m[19], m[20] !== s || m[21] !== d || m[22] !== t || m[23] !== C || m[24] !== n || m[25] !== E || m[26] !== r ? (h = (0, i.jsxs)(o.a.header, {
                    className: t,
                    "aria-hidden": C,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: E,
                    transition: r,
                    children: [s, d]
                }), m[20] = s, m[21] = d, m[22] = t, m[23] = C, m[24] = n, m[25] = E, m[26] = r, m[27] = h) : h = m[27], h
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
                    onResizeEnd: S,
                    onResizingChange: z,
                    setSize: C,
                    verticalEdge: k
                } = e,
                j = void 0 === v ? "left" : v,
                E = void 0 !== y && y,
                M = void 0 === k ? "top" : k,
                P = (0, s.c)(),
                R = (0, r.useRef)(null);
            g[0] !== j || g[1] !== x || g[2] !== w || g[3] !== E || g[4] !== C || g[5] !== M || g[6] !== P ? (t = e => {
                let t = R.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                e.preventDefault();
                let n = {
                    height: u(t.startSize.height + ("top" === M ? -1 : 1) * ((0, s.b)(e.clientY, P) - t.startPointer.y), w.height, x.height),
                    width: u(t.startSize.width + (E ? 2 : 1) * ("left" === j ? -1 : 1) * ((0, s.b)(e.clientX, P) - t.startPointer.x), w.width, x.width)
                };
                t.didMove || (t.didMove = n.height !== t.startSize.height || n.width !== t.startSize.width), t.lastSize = n, C(n)
            }, g[0] = j, g[1] = x, g[2] = w, g[3] = E, g[4] = C, g[5] = M, g[6] = P, g[7] = t) : t = g[7];
            let N = t;
            g[8] !== S || g[9] !== z ? (n = (e, t) => {
                let n = R.current;
                n?.pointerId === e.pointerId && (R.current = null, z?.(!1), t && n.didMove && S?.(n.lastSize))
            }, g[8] = S, g[9] = z, g[10] = n) : n = g[10];
            let L = n,
                T = "top" === M ? "top-0" : "bottom-0",
                D = "left" === j ? "left-0" : "right-0",
                q = "left" === j == ("top" === M) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return g[11] !== T || g[12] !== D || g[13] !== q ? (l = (0, o.b)("group absolute z-50 flex size-4 touch-none select-none", T, D, q), g[11] = T, g[12] = D, g[13] = q, g[14] = l) : l = g[14], g[15] !== L ? (c = e => {
                L(e, !1)
            }, g[15] = L, g[16] = c) : c = g[16], g[17] !== N || g[18] !== L ? (d = e => {
                N(e), L(e, !0)
            }, g[17] = N, g[18] = L, g[19] = d) : d = g[19], g[20] !== b || g[21] !== z || g[22] !== P ? (h = e => {
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
            }, g[20] = b, g[21] = z, g[22] = P, g[23] = h) : h = g[23], g[24] !== N || g[25] !== L ? (m = e => {
                N(e), L(e, !0)
            }, g[24] = N, g[25] = L, g[26] = m) : m = g[26], g[27] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, i.jsx)("div", {
                className: "pointer-events-none m-auto h-px w-2 rotate-45 bg-text/25 opacity-0 group-hover:opacity-100 group-active:opacity-100"
            }), g[27] = p) : p = g[27], g[28] !== N || g[29] !== c || g[30] !== d || g[31] !== h || g[32] !== m || g[33] !== l ? (f = (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: l,
                onLostPointerCapture: c,
                onPointerCancel: d,
                onPointerDown: h,
                onPointerMove: N,
                onPointerUp: m,
                children: p
            }), g[28] = N, g[29] = c, g[30] = d, g[31] = h, g[32] = m, g[33] = l, g[34] = f) : f = g[34], f
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
                    verticalEdge: S,
                    widthLabel: z
                } = e,
                C = void 0 === m || m,
                k = void 0 !== f && f,
                j = void 0 === S ? "top" : S;
            if (s[0] !== u || s[1] !== h || s[2] !== C || s[3] !== p || s[4] !== g || s[5] !== v || s[6] !== b || s[7] !== x || s[8] !== y || s[9] !== w || s[10] !== k || s[11] !== j || s[12] !== z) {
                let e, a;
                s[16] !== p ? (e = e => e !== p, s[16] = p, s[17] = e) : e = s[17];
                let r = d.filter(e);
                s[18] !== u || s[19] !== h || s[20] !== C || s[21] !== v || s[22] !== b || s[23] !== x || s[24] !== y || s[25] !== w || s[26] !== k || s[27] !== z ? (a = e => (0, i.jsx)(l.a, {
                    ariaLabel: z,
                    defaultSize: h.width,
                    edge: e,
                    resizeFromCenter: k,
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
                }, e), s[18] = u, s[19] = h, s[20] = C, s[21] = v, s[22] = b, s[23] = x, s[24] = y, s[25] = w, s[26] = k, s[27] = z, s[28] = a) : a = s[28], t = r.map(a), s[29] !== u || s[30] !== h || s[31] !== g || s[32] !== v || s[33] !== b || s[34] !== x || s[35] !== y || s[36] !== w || s[37] !== j ? (n = null != j && (0, i.jsx)(l.a, {
                    ariaLabel: g,
                    defaultSize: h.height,
                    edge: j,
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
                }), s[29] = u, s[30] = h, s[31] = g, s[32] = v, s[33] = b, s[34] = x, s[35] = y, s[36] = w, s[37] = j, s[38] = n) : n = s[38], o = null != j && r.map(e => (0, i.jsx)(c, {
                    edge: e,
                    resizeFromCenter: k,
                    getCurrentSize: () => u,
                    maximumSize: v,
                    minimumSize: b,
                    verticalEdge: j,
                    onResizeEnd: y,
                    onResizingChange: w,
                    setSize: t => {
                        x(e, t)
                    }
                }, e)), s[0] = u, s[1] = h, s[2] = C, s[3] = p, s[4] = g, s[5] = v, s[6] = b, s[7] = x, s[8] = y, s[9] = w, s[10] = k, s[11] = j, s[12] = z, s[13] = t, s[14] = n, s[15] = o
            } else t = s[13], n = s[14], o = s[15];
            return s[39] !== t || s[40] !== n || s[41] !== o ? (r = (0, i.jsxs)(i.Fragment, {
                children: [t, n, o]
            }), s[39] = t, s[40] = n, s[41] = o, s[42] = r) : r = s[42], r
        }
    })
};