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
                ea = (0, R.h)("2163293173"),
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
                k = (0, R.h)("2163293173"),
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
                }), f[25] = E, f[26] = r) : r = f[26], f[27] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(_.qj, {
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
            }), f[47] = E, f[48] = u) : u = f[48], f[49] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(_.qj, {
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
                g = (0, R.h)("2163293173"),
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
            let t, n, M, I, ez, eC, eR, eN, eL, eT, eD, eq, e_, eF, eI, eA, eH, eW, eB, eO, e$, eK, eV, eX, eY, eZ, eU, eQ, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tm, tp, tf, tg, tv, tb, tx, ty, tw, tS, tz, tC, tk, tj, tE, tM, tP, tR, tN, tL, tT, tD, tq, t_, tF, tI, tA, tH, tW, tB, tO, t$, tK, tV, tX, tY, tZ, tU, tQ, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, nm, np, nf, ng, nv, nb, nx, ny, nw, nS, nz, nC, nk, nj, nE, nM, nP, nR, nN, nL, nT, nD, nq, n_, nF, nI, nA, nH, nW, nB, nO, n$, nK, nV, nX, nY, nZ, nU, nQ, nG, nJ, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, ie, it, ii, ia, il, io, ir, is, ic = (0, a.c)(851),
                {
                    ref: iu,
                    animateOnMount: id,
                    background: ih,
                    renderComposer: im,
                    containerSize: ip,
                    previewSide: ig,
                    hasPagePicker: iv,
                    dockThreadKey: ib,
                    canDock: ix,
                    reservedDockPosition: iy,
                    footer: iw,
                    overlay: iS,
                    renderHeaderContent: iz,
                    headerInteractionDisabled: iC,
                    allowLegacyHeaderToggle: ik,
                    renderMenu: ij,
                    forceExpanded: iE,
                    hasConversation: iM,
                    isHidden: iP,
                    isContentChat: iR,
                    isMinimized: iN,
                    isCollisionObstacle: iL,
                    onDragOver: iT,
                    onDragEnd: iD,
                    onEscape: iq,
                    onMinimizedChange: i_,
                    onResize: iF,
                    presentation: iI,
                    onPresentationChange: iA,
                    title: iH,
                    titleContent: iW,
                    minimizedIcon: iB,
                    minimizedMenuItems: iO,
                    restoreLabel: i$,
                    statusState: iK,
                    titleStatusState: iV,
                    notifications: iX,
                    workingPreview: iY,
                    responsePreview: iZ,
                    previewBubble: iU,
                    emptyState: iQ,
                    renderTranscript: iG,
                    hasTranscript: iJ,
                    pendingFormId: i0,
                    showComposerDivider: i1,
                    showHeader: i2
                } = e,
                i3 = void 0 !== id && id,
                i4 = void 0 === ix || ix,
                i5 = void 0 !== iC && iC,
                i6 = void 0 === ik || ik,
                i7 = void 0 !== iE && iE,
                i8 = void 0 !== iP && iP,
                i9 = void 0 !== iR && iR,
                ae = void 0 === iV ? iK : iV,
                at = void 0 === i2 || i2,
                an = (0, m.y)(eu.a),
                ai = (0, m.y)(ed.a),
                aa = (0, m.z)(void 0 === i0 ? null : i0),
                al = null != aa,
                ao = (0, R.h)("2163293173"),
                ar = (0, p.useContext)(y.a),
                as = (0, p.useContext)(x.a)?.workspaceTargetWidth,
                ac = (0, p.useContext)(b.c),
                au = ao && !i8 && null != ig && null != ac && null != ar,
                ad = (0, m.z)(!!ao && void 0 !== ig && es.d),
                ah = au && !ad,
                am = (0, m.z)(au ? w.ab : null),
                ap = (0, p.useRef)(null),
                af = (0, m.z)(!!au && w.db),
                ag = ao ? iQ : void 0,
                av = iJ ?? null != iG,
                ab = av || null != ag,
                ax = (0, m.z)(ib) ?? void 0,
                ay = void 0 === iL || iL ? "quick-chat" : void 0,
                aw = (0, p.useContext)(em.b),
                aS = (0, m.z)(iX),
                az = al ? W.a : aS ?? W.a,
                aC = (0, m.z)(iK);
            ic[0] !== aC || ic[1] !== az.type ? (t = "ready" === az.type ? {
                ...aC,
                type: aC?.type ?? "idle",
                unread: !0
            } : aC, ic[0] = aC, ic[1] = az.type, ic[2] = t) : t = ic[2];
            let ak = t,
                aj = (0, m.z)(ae),
                aE = ae === iK ? ak : aj;
            ic[3] !== ao || ic[4] !== iZ ? (n = (0, m.c)(eu.a, e => {
                let {
                    get: t
                } = e;
                return !!ao && null != iZ && !!("string" == typeof iZ ? iZ : t(iZ))
            }), ic[3] = ao, ic[4] = iZ, ic[5] = n) : n = ic[5];
            let aM = (0, m.z)(n),
                aP = (0, g.a)(),
                aR = (0, p.useId)(),
                aN = (0, p.useId)(),
                aL = (0, k.c)(),
                aT = (0, eo.a)(),
                aD = (0, m.z)(eS);
            ic[6] !== aD.height || ic[7] !== aL ? (M = (0, k.b)(aD.height, aL), ic[6] = aD.height, ic[7] = aL, ic[8] = M) : M = ic[8];
            let aq = M,
                a_ = (0, k.b)(aD.width, aL),
                [aF, aI] = (0, p.useState)(0),
                [aA, aH] = (0, p.useState)(!1),
                [aW, aB] = (0, p.useState)(0),
                [aO, a$] = (0, p.useState)(null),
                [aK, aV] = (0, p.useState)(null),
                [aX, aY] = (0, p.useState)(0),
                [aZ, aU] = (0, p.useState)(null);
            ic[9] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                e.contentRect.width > 0 && aU(e.contentRect.width)
            }, ic[9] = I) : I = ic[9];
            let aQ = (0, A.b)(I);
            ic[10] === Symbol.for("react.memo_cache_sentinel") ? (ez = e => {
                aY((0, ec.a)(e).height)
            }, ic[10] = ez) : ez = ic[10];
            let aG = (0, A.b)(ez);
            ic[11] === Symbol.for("react.memo_cache_sentinel") ? (eC = e => {
                aB((0, ec.a)(e).height)
            }, ic[11] = eC) : eC = ic[11];
            let aJ = (0, A.b)(eC);
            ic[12] !== aJ ? (eR = e => {
                a$(e), aJ(e)
            }, ic[12] = aJ, ic[13] = eR) : eR = ic[13];
            let a0 = (0, eb.a)(eR);
            ic[14] === Symbol.for("react.memo_cache_sentinel") ? (eN = e => {
                aI((0, ec.a)(e).height)
            }, ic[14] = eN) : eN = ic[14];
            let a1 = (0, A.b)(eN),
                [a2, a3] = (0, p.useState)(0);
            ic[15] === Symbol.for("react.memo_cache_sentinel") ? (eL = e => {
                a3((0, ec.a)(e).height)
            }, ic[15] = eL) : eL = ic[15];
            let a4 = (0, A.b)(eL),
                a5 = ip?.width ?? a_,
                a6 = a_ < 640;
            ic[16] !== i4 || ic[17] !== ao ? (eT = () => i4 ? ao ? "bottom-right" : (0, J.a)() : "bottom-center", ic[16] = i4, ic[17] = ao, ic[18] = eT) : eT = ic[18];
            let [a7] = (0, p.useState)(eT), a8 = ax ?? null;
            ic[19] !== a8 ? (eD = {
                threadKey: a8,
                minimized: !1
            }, ic[19] = a8, ic[20] = eD) : eD = ic[20];
            let a9 = (0, m.x)(i4 ? en.a : void 0, eD),
                le = ax ?? null;
            ic[21] !== le ? (eq = {
                threadKey: le,
                minimized: !0
            }, ic[21] = le, ic[22] = eq) : eq = ic[22];
            let lt = (0, m.x)(i4 ? en.a : void 0, eq);
            ic[23] === Symbol.for("react.memo_cache_sentinel") ? (e_ = {}, ic[23] = e_) : e_ = ic[23];
            let [ln, li] = (0, p.useState)(e_), la = ao ? "bottom-right" : (null == ax ? ln.minimized : null) ?? lt ?? "bottom-right", ll = (null != ax || ao ? null : ln.expanded) ?? a9 ?? a7, lo = iN ? la : ll, lr = i4 ? (0, et.f)(a6 && !iN ? "bottom-center" : lo, iy) : "bottom-center", ls = lr.startsWith("top"), lc = (0, m.z)(ea), lu = (0, o.a)(), ld = (0, p.useRef)(!1);
            ic[24] === Symbol.for("react.memo_cache_sentinel") ? (eF = {
                x: 0,
                y: 0
            }, ic[24] = eF) : eF = ic[24];
            let lh = (0, p.useRef)(eF),
                lm = (0, p.useRef)(null),
                lp = (0, p.useRef)(null),
                lf = (0, r.a)(0),
                lg = (0, r.a)(0),
                lv = (0, p.useRef)(null),
                lb = (0, p.useRef)(null),
                lx = (0, p.useRef)(null),
                ly = (0, p.useRef)(null),
                [lw, lS] = (0, p.useState)("compact"),
                [lz, lC] = (0, p.useState)(null),
                lk = iU?.id ?? "",
                lj = lz === lk,
                lE = iI ?? lw;
            ic[25] !== ab || ic[26] !== iI || ic[27] !== i9 || ic[28] !== iA ? (eI = e => {
                (i9 || "expanded" !== e || ab) && (null == iI && lS(e), lC(null), iA?.(e))
            }, ic[25] = ab, ic[26] = iI, ic[27] = i9, ic[28] = iA, ic[29] = eI) : eI = ic[29];
            let lM = eI,
                [lP, lR] = (0, p.useState)(null),
                [lN, lL] = (0, p.useState)(!1),
                [lT, lD] = (0, p.useState)(!1),
                [lq, l_] = (0, p.useState)(!1),
                [lF, lI] = (0, p.useState)(!1),
                lA = (0, p.useRef)(null);
            ic[30] === Symbol.for("react.memo_cache_sentinel") ? (eA = e => {
                (null != lA.current && (cancelAnimationFrame(lA.current), lA.current = null), null != e) ? lI(!0): lA.current = requestAnimationFrame(() => {
                    lA.current = null, lI(!1)
                })
            }, ic[30] = eA) : eA = ic[30];
            let lH = eA;
            ic[31] === Symbol.for("react.memo_cache_sentinel") ? (eH = () => () => {
                null != lA.current && cancelAnimationFrame(lA.current)
            }, eW = [], ic[31] = eH, ic[32] = eW) : (eH = ic[31], eW = ic[32]), (0, p.useEffect)(eH, eW);
            let [lW, lB] = (0, p.useState)(!1), [lO, l$] = (0, p.useState)(!1), [lK, lV] = (0, p.useState)(!1), [lX, lY] = (0, p.useState)(!0), [lZ, lU] = (0, p.useState)(null), lQ = (0, p.useRef)(!1), [lG, lJ] = (0, p.useState)(!1), [l0, l1] = (0, p.useState)(0), [l2, l3] = (0, p.useState)(0), [l4, l5] = (0, p.useState)(!1);
            ic[33] !== ao || ic[34] !== aL ? (eB = (e, t) => {
                l1(ao ? (0, ec.a)(e).height : e.contentRect.height), l5(e.contentRect.width < 640);
                let n = t.querySelector(`[${V.a}]`)?.getBoundingClientRect().height ?? 0;
                l3(Math.max(0, e.contentRect.height - (0, k.b)(n, aL)))
            }, ic[33] = ao, ic[34] = aL, ic[35] = eB) : eB = ic[35];
            let l6 = (0, A.b)(eB),
                [l7, l8] = (0, p.useState)(null),
                [l9, oe] = (0, p.useState)(!1),
                [ot, on] = (0, p.useState)(ax);
            ot !== ax && (on(ax), li({}), l$(!1), lV(!1), lU(null), lR(null), l_(!1), oe(!1), lC(null));
            let [oi, oa] = (0, p.useState)(aa);
            oi !== aa && (oa(aa), lU(null), lR(null));
            let ol = !au && (iN || lZ?.stage === "minimized"),
                oo = (0, r.a)(+!!ol);
            ic[36] !== oo ? (eO = () => 1 - oo.get(), ic[36] = oo, ic[37] = eO) : eO = ic[37];
            let or = (0, s.a)(eO);
            ic[38] !== oo ? (e$ = e => oo.on("change", e), ic[38] = oo, ic[39] = e$) : e$ = ic[39];
            let os = e$;
            ic[40] !== oo ? (eK = () => 1 === oo.get(), ic[40] = oo, ic[41] = eK) : eK = ic[41];
            let oc = eK;
            ic[42] !== ol ? (eV = () => ol, ic[42] = ol, ic[43] = eV) : eV = ic[43];
            let ou = (0, p.useSyncExternalStore)(os, oc, eV);
            lP?.target !== "minimized" || ol || lR({
                target: lE
            }), ic[44] !== ab || ic[45] !== i7 || ic[46] !== aa || ic[47] !== lE ? (eX = (0, ei.b)({
                pendingFormId: aa,
                presentation: lE,
                forceExpanded: i7,
                hasTranscript: ab
            }), ic[44] = ab, ic[45] = i7, ic[46] = aa, ic[47] = lE, ic[48] = eX) : eX = ic[48];
            let {
                isCompact: od,
                isChatCompact: oh,
                canTogglePresentation: om
            } = eX, op = od && !au, of = iN && !au, og = ao && !i9 ? !od : at;
            (!i9 || i8 || iN || !og) && lq && l_(!1);
            let ov = ao && !al && !lj && av && (aM || aE?.type === "loading"),
                ob = od && ov,
                ox = ao && op && !i8 && !of && !al && void 0 !== iU,
                oy = ox && !lj && null != iU,
                ow = ob || oy && iU.transient,
                oS = void 0 !== i1 && i1 || ao;
            ic[49] !== i9 || ic[50] !== i8 || ic[51] !== iN || ic[52] !== og ? (eY = () => {
                let e, t = lb.current;
                if (null == t || !i9 || i8 || iN || !og) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, l_(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), l_(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, ic[49] = i9, ic[50] = i8, ic[51] = iN, ic[52] = og, ic[53] = eY) : eY = ic[53], ic[54] !== ax || ic[55] !== i9 || ic[56] !== i8 || ic[57] !== iN || ic[58] !== og ? (eZ = [ax, i9, i8, iN, og], ic[54] = ax, ic[55] = i9, ic[56] = i8, ic[57] = iN, ic[58] = og, ic[59] = eZ) : eZ = ic[59], (0, p.useEffect)(eY, eZ);
            let oz = !i8 && !od && !iN && !i7 && !lO && !lG;
            ic[60] !== aN || ic[61] !== lM || ic[62] !== lR ? (eU = e => {
                null == lb.current || null != e && eM(lb.current, e.target, aN) || (lR(null), lM("compact"))
            }, ic[60] = aN, ic[61] = lM, ic[62] = lR, ic[63] = eU) : eU = ic[63];
            let oC = (0, p.useEffectEvent)(eU);
            ic[64] !== oC || ic[65] !== aN ? (eQ = () => {
                let e = lb.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !eM(e, t, aN) && oC()
            }, ic[64] = oC, ic[65] = aN, ic[66] = eQ) : eQ = ic[66];
            let ok = (0, p.useEffectEvent)(eQ);
            ic[67] !== ao || ic[68] !== ok || ic[69] !== oC || ic[70] !== oz ? (eG = () => {
                if (!oz) return;
                document.addEventListener("pointerdown", oC, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && ok()
                        })
                    };
                window.addEventListener("blur", t);
                let n = ao ? er.c.subscribe("browser-sidebar-web-contents-pointer-down", () => oC()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", oC, !0)
                }
            }, ic[67] = ao, ic[68] = ok, ic[69] = oC, ic[70] = oz, ic[71] = eG) : eG = ic[71], ic[72] !== ao || ic[73] !== oz ? (eJ = [ao, oz], ic[72] = ao, ic[73] = oz, ic[74] = eJ) : eJ = ic[74], (0, p.useEffect)(eG, eJ);
            let oj = ak?.type === "loading";
            ic[75] !== i_ || ic[76] !== lL || ic[77] !== lM || ic[78] !== lR ? (e0 = () => {
                lb.current?.focus({
                    preventScroll: !0
                }), lL(!1), lR(null), i_(!1), lM("expanded")
            }, ic[75] = i_, ic[76] = lL, ic[77] = lM, ic[78] = lR, ic[79] = e0) : e0 = ic[79];
            let oE = (0, eb.a)(e0),
                [oM, oP] = (0, p.useState)(ek);
            ic[80] === Symbol.for("react.memo_cache_sentinel") ? (e1 = e => {
                oP(t => new Set([...t, e]))
            }, ic[80] = e1) : e1 = ic[80];
            let oR = (0, eb.a)(e1);
            ic[81] !== ao || ic[82] !== oR || ic[83] !== oE || ic[84] !== az ? (e2 = "ready" !== az.type ? az : {
                type: "ready",
                value: az.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(F, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), oE()
                        },
                        onDismiss: ao ? () => oR(e.id) : e.onDismiss
                    })
                }))
            }, ic[81] = ao, ic[82] = oR, ic[83] = oE, ic[84] = az, ic[85] = e2) : e2 = ic[85];
            let oN = e2,
                [oL, oT] = (0, p.useState)(oj);
            if (oL !== oj && (oT(oj), oe(!1), lC(null)), ic[86] !== i8 || ic[87] !== iN || ic[88] !== oj || ic[89] !== lk || ic[90] !== ow ? (e3 = () => {
                    if (!ow || i8 || iN || oj) return;
                    let e = window.setTimeout(() => lC(lk), 1e4);
                    return () => window.clearTimeout(e)
                }, ic[86] = i8, ic[87] = iN, ic[88] = oj, ic[89] = lk, ic[90] = ow, ic[91] = e3) : e3 = ic[91], ic[92] !== ax || ic[93] !== i8 || ic[94] !== iN || ic[95] !== oj || ic[96] !== lk || ic[97] !== ow ? (e4 = [ax, ow, i8, iN, oj, lk], ic[92] = ax, ic[93] = i8, ic[94] = iN, ic[95] = oj, ic[96] = lk, ic[97] = ow, ic[98] = e4) : e4 = ic[98], (0, p.useEffect)(e3, e4), ic[99] !== oN || ic[100] !== ao || ic[101] !== oM || ic[102] !== oE || ic[103] !== oj || ic[104] !== iH || ic[105] !== iY || ic[106] !== l9) {
                if (e5 = oN, ao && oj && !l9) {
                    let e, t;
                    ic[108] === Symbol.for("react.memo_cache_sentinel") ? (e = () => oe(!0), ic[108] = e) : e = ic[108], ic[109] !== oE || ic[110] !== iH || ic[111] !== iY ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(F, {
                            title: iH,
                            preview: "",
                            isWorking: !0,
                            workingContent: iY,
                            onOpen: oE,
                            onDismiss: e
                        })
                    }], ic[109] = oE, ic[110] = iH, ic[111] = iY, ic[112] = t) : t = ic[112], e5 = {
                        type: "ready",
                        value: t
                    }
                } else if (ao && "ready" === oN.type) {
                    let e;
                    if (ic[113] !== oN.value || ic[114] !== oM) {
                        let t;
                        ic[116] !== oM ? (t = e => !oM.has(e.id), ic[116] = oM, ic[117] = t) : t = ic[117], e = oN.value.filter(t), ic[113] = oN.value, ic[114] = oM, ic[115] = e
                    } else e = ic[115];
                    e5 = {
                        ...oN,
                        value: e
                    }
                }
                ic[99] = oN, ic[100] = ao, ic[101] = oM, ic[102] = oE, ic[103] = oj, ic[104] = iH, ic[105] = iY, ic[106] = l9, ic[107] = e5
            } else e5 = ic[107];
            "ready" !== e5.type && lN && lL(!1);
            let oD = "ready" === e5.type && e5.value.length > 0 && (ol ? iN && (ao ? ou : lN) && !lO : !ao && od),
                oq = !ao && (aE?.type === "loading" || aE?.unread === !0 && !oD),
                o_ = oj || ak?.unread === !0 && (iN || !oD);
            ic[118] !== e5.type || ic[119] !== e5.value || ic[120] !== ao || ic[121] !== oR || ic[122] !== oj || ic[123] !== lL ? (e6 = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), ly.current?.contains(document.activeElement) && lx.current?.focus({
                            preventScroll: !0
                        }), ao) {
                        if (oj) oe(!0);
                        else if ("ready" === e5.type)
                            for (let e of e5.value) oR(e.id)
                    } else lL(!1)
            }, ic[118] = e5.type, ic[119] = e5.value, ic[120] = ao, ic[121] = oR, ic[122] = oj, ic[123] = lL, ic[124] = e6) : e6 = ic[124];
            let oF = (0, p.useEffectEvent)(e6);
            ic[125] !== oF || ic[126] !== oD || ic[127] !== i8 || ic[128] !== iN ? (e7 = () => {
                if (!i8 && iN && oD) return document.addEventListener("keydown", oF), () => document.removeEventListener("keydown", oF)
            }, ic[125] = oF, ic[126] = oD, ic[127] = i8, ic[128] = iN, ic[129] = e7) : e7 = ic[129], ic[130] !== oD || ic[131] !== i8 || ic[132] !== iN ? (e8 = [oD, i8, iN], ic[130] = oD, ic[131] = i8, ic[132] = iN, ic[133] = e8) : e8 = ic[133], (0, p.useEffect)(e7, e8);
            let oI = !iN && !ol && (ao && !i9 || !od || lT || lF || lq || lO || aA),
                oA = (og || au) && (i9 ? !iN && !ol : ao || oI),
                oH = og && oA && !of && null == iz;
            ic[134] !== aP ? (e9 = aP.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running",
                description: "Status of a running task in the floating composer"
            }), ic[134] = aP, ic[135] = e9) : e9 = ic[135];
            let oW = e9;
            ic[136] !== aP ? (te = aP.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response",
                description: "Status of a floating task with an unread response"
            }), ic[136] = aP, ic[137] = te) : te = ic[137];
            let oB = te,
                oO = oj ? oW : oB,
                o$ = lr.endsWith("left"),
                oK = "bottom-center" === lr,
                oV = o$ ? "left" : "right",
                oX = ls && !ol ? aW : 0,
                oY = 46 * (null == ip) + (ls || ol ? 0 : aW),
                oZ = l7 ?? lc ?? P,
                oU = oD && !iN ? a2 : 0,
                oQ = (ip?.height ?? aq) - aF - (ls ? oU + oX : 0),
                oG = Math.max(0, oQ - 32 - oY - (ls ? 0 : oU)),
                oJ = null == ip ? a5 / 2 : Math.max(0, a5 - 20),
                o0 = ao && null != aZ ? Math.min(oJ, aZ + 12) : oJ,
                o1 = (l0 || 46) + (og && oA ? 46 : 0) + (ob ? aX : 0) + 6 * !ao,
                o2 = (l0 || 46) + (i9 && og && oA ? 46 : 0) + (ov ? aX : 0) + 6 * !ao,
                o3 = eP(oZ.height, Math.min(Math.max(400, l0 + 46), oG), oG),
                o4 = Math.min(od ? o1 : Math.max(400, o1), oG),
                o5 = a6 ? o0 : Math.min(372, o0),
                o6 = eP(od ? o1 : oZ.height, o4, oG),
                o7 = (0, r.a)(o6),
                o8 = (0, p.useRef)(!1),
                o9 = l0 > 0,
                re = i8 || aT || lG || !ao && (iN || null != lP) ? 0 : .3,
                rt = eP(oZ.width + 12, o5, o0),
                rn = (0, et.d)(lr, {
                    height: o6,
                    width: rt
                }, oQ, a5, 12, oY),
                ri = (0, r.a)(0);
            ic[138] === Symbol.for("react.memo_cache_sentinel") ? (tt = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, ic[138] = tt) : tt = ic[138];
            let ra = (0, r.a)(tt);
            ic[139] !== af || ic[140] !== au || ic[141] !== ac || ic[142] !== ar || ic[143] !== ra || ic[144] !== ri || ic[145] !== ig || ic[146] !== aT || ic[147] !== aL || ic[148] !== as ? (tn = () => {
                let e, t = au && ac && ar ? lb.current?.offsetParent : null;
                if (au && ac && ar && t instanceof HTMLElement) {
                    let n = ar.getBoundingClientRect(),
                        i = t.getBoundingClientRect(),
                        a = (0, k.b)(n.width, aL),
                        l = as?.get() ?? a,
                        o = (0, C.f)(ac.contentPaneWidthRatio.get(), l, "unified"),
                        r = af ? o : l - o;
                    e = `--floating-chat-dock-${ig}`, ar.style.setProperty(e, `${r}px`), ra.set({
                        x: (0, k.b)(n.left - i.left, aL) + (a - ("left" === ig ? l : r)) + 4 - 6,
                        y: (0, k.b)(n.top - i.top, aL) + 4,
                        width: r - 8 + 12,
                        height: (0, k.b)(i.bottom - n.top, aL) - 8 + 6
                    })
                }
                let n = +!!au,
                    i = ri.get() === n ? null : (0, c.a)(ri, n, {
                        duration: .15 * !aT,
                        ease: N.e
                    });
                return () => {
                    i?.stop(), null != e && ar?.style.removeProperty(e)
                }
            }, ic[139] = af, ic[140] = au, ic[141] = ac, ic[142] = ar, ic[143] = ra, ic[144] = ri, ic[145] = ig, ic[146] = aT, ic[147] = aL, ic[148] = as, ic[149] = tn) : tn = ic[149], ic[150] !== ip || ic[151] !== af || ic[152] !== au || ic[153] !== ac || ic[154] !== ar || ic[155] !== ra || ic[156] !== ri || ic[157] !== ig || ic[158] !== aT || ic[159] !== aL || ic[160] !== as ? (ti = [ip, 12, af, au, ac, ar, ra, ri, ig, aT, as, aL], ic[150] = ip, ic[151] = af, ic[152] = au, ic[153] = ac, ic[154] = ar, ic[155] = ra, ic[156] = ri, ic[157] = ig, ic[158] = aT, ic[159] = aL, ic[160] = as, ic[161] = ti) : ti = ic[161], (0, p.useLayoutEffect)(tn, ti);
            let rl = (0, s.a)(() => ri.get() * (ra.get().x - rn.x - lf.get())),
                ro = (0, s.a)(() => ri.get() * (ra.get().y - rn.y - lg.get())),
                rr = (0, s.a)(() => 0 === ri.get() ? "100%" : rt + ri.get() * (ra.get().width - rt));
            ic[162] !== o7 || ic[163] !== ra || ic[164] !== ri ? (ta = () => o7.get() + ri.get() * (ra.get().height - o7.get()), ic[162] = o7, ic[163] = ra, ic[164] = ri, ic[165] = ta) : ta = ic[165];
            let rs = (0, s.a)(ta);
            ic[166] !== o7 || ic[167] !== o2 || ic[168] !== o3 || ic[169] !== i9 || ic[170] !== op || ic[171] !== ri ? (tl = () => Math.max(ri.get(), i9 && op ? 0 : eP((o7.get() - o2) / Math.max(1, o3 - o2), 0, 1)), ic[166] = o7, ic[167] = o2, ic[168] = o3, ic[169] = i9, ic[170] = op, ic[171] = ri, ic[172] = tl) : tl = ic[172];
            let rc = (0, s.a)(tl);
            ic[173] !== l0 || ic[174] !== rc || ic[175] !== ad || ic[176] !== rs || ic[177] !== ri ? (to = () => Math.max(0, rs.get() - l0 - 46 * (rc.get() - (ad ? 0 : ri.get()))), ic[173] = l0, ic[174] = rc, ic[175] = ad, ic[176] = rs, ic[177] = ri, ic[178] = to) : to = ic[178];
            let ru = (0, s.a)(to),
                rd = (0, r.a)(0),
                rh = (0, r.a)(0),
                rm = Math.max(0, o3 - 46 - l0);
            ic[179] !== rd || ic[180] !== aX || ic[181] !== rm || ic[182] !== rc || ic[183] !== aM || ic[184] !== au ? (tr = () => au || !aM ? 0 : (1 - rc.get()) * (rm - aX + 12 - rd.get()), ic[179] = rd, ic[180] = aX, ic[181] = rm, ic[182] = rc, ic[183] = aM, ic[184] = au, ic[185] = tr) : tr = ic[185];
            let rp = (0, s.a)(tr);
            ic[186] !== rh || ic[187] !== rd || ic[188] !== rm || ic[189] !== rc || ic[190] !== aM ? (ts = () => {
                if (!aM || 1 === rc.get()) return "none";
                let e = 1 - rc.get(),
                    t = Math.max(0, rd.get()) * e,
                    n = Math.max(0, rm - rd.get() - rh.get()) * e;
                return `inset(${t}px 0 ${n}px 0)`
            }, ic[186] = rh, ic[187] = rd, ic[188] = rm, ic[189] = rc, ic[190] = aM, ic[191] = ts) : ts = ic[191];
            let rf = (0, s.a)(ts);
            ic[192] !== rc || ic[193] !== aM ? (tc = () => aM ? 1 : rc.get(), ic[192] = rc, ic[193] = aM, ic[194] = tc) : tc = ic[194];
            let rg = (0, s.a)(tc);
            ic[195] !== rc ? (tu = () => 1 - rc.get(), ic[195] = rc, ic[196] = tu) : tu = ic[196];
            let rv = (0, s.a)(tu);
            ic[197] !== rh || ic[198] !== rd || ic[199] !== aM || ic[200] !== aK || ic[201] !== aL ? (td = () => {
                if (null == aK || !aM) return null;
                let e = aK.querySelectorAll('[data-markdown-text-style="assistant-message"]'),
                    t = e.item(e.length - 1);
                if (null == t) return null;
                let n = t.getBoundingClientRect(),
                    i = aK.getBoundingClientRect(),
                    a = parseFloat(getComputedStyle(t.firstElementChild ?? t).lineHeight),
                    l = Math.min((0, k.b)(n.height, aL), Number.isFinite(a) ? 2 * a : 56, 56);
                return rd.set((0, k.b)(n.top - i.top, aL)), rh.set(l), aY(l + 24), t
            }, ic[197] = rh, ic[198] = rd, ic[199] = aM, ic[200] = aK, ic[201] = aL, ic[202] = td) : td = ic[202];
            let rb = (0, p.useEffectEvent)(td);
            ic[203] !== ao || ic[204] !== aM || ic[205] !== op || ic[206] !== i8 || ic[207] !== rb || ic[208] !== aK ? (th = () => {
                if (!ao || i8 || null == aK || !aM) return;
                let e = null,
                    t = new ResizeObserver(() => u.b.read(n)),
                    n = () => {
                        let n = rb();
                        e !== n && (t.disconnect(), e = n, null != n && t.observe(n))
                    },
                    i = () => {
                        u.b.read(n)
                    };
                if (n(), !op) return void t.disconnect();
                let a = new MutationObserver(i);
                return a.observe(aK, {
                    childList: !0,
                    subtree: !0
                }), aK.addEventListener("scroll", i, !0), () => {
                    (0, u.a)(n), t.disconnect(), a.disconnect(), aK.removeEventListener("scroll", i, !0)
                }
            }, ic[203] = ao, ic[204] = aM, ic[205] = op, ic[206] = i8, ic[207] = rb, ic[208] = aK, ic[209] = th) : th = ic[209], ic[210] !== ao || ic[211] !== aM || ic[212] !== op || ic[213] !== i8 || ic[214] !== aK ? (tm = [ao, aM, op, i8, aK], ic[210] = ao, ic[211] = aM, ic[212] = op, ic[213] = i8, ic[214] = aK, ic[215] = tm) : tm = ic[215], (0, p.useLayoutEffect)(th, tm), ic[216] !== o7 || ic[217] !== l0 || ic[218] !== ao || ic[219] !== o6 || ic[220] !== o9 || ic[221] !== od || ic[222] !== lF || ic[223] !== rb || ic[224] !== re ? (tp = () => {
                let e, t = !o8.current && od;
                if (o9 && (o8.current = !0), lF || t || 0 === re) return void o7.jump(o6);
                let n = () => {
                    if (ao) {
                        let e = lv.current;
                        if (null != e && e.offsetHeight !== Math.round(l0)) return void l1(e.offsetHeight);
                        rb()
                    }
                    let t = (0, c.a)(o7, o6, {
                        duration: re,
                        ease: N.e
                    });
                    e = () => t.stop()
                };
                return ao ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, ic[216] = o7, ic[217] = l0, ic[218] = ao, ic[219] = o6, ic[220] = o9, ic[221] = od, ic[222] = lF, ic[223] = rb, ic[224] = re, ic[225] = tp) : tp = ic[225];
            let rx = (0, p.useEffectEvent)(tp),
                ry = ao ? l0 : null,
                rw = ao ? null : o9,
                rS = ao ? null : od;
            ic[226] !== rx ? (tf = () => rx(), ic[226] = rx, ic[227] = tf) : tf = ic[227], ic[228] !== o6 || ic[229] !== rw || ic[230] !== rS || ic[231] !== ry || ic[232] !== re ? (tg = [o6, re, ry, rw, rS], ic[228] = o6, ic[229] = rw, ic[230] = rS, ic[231] = ry, ic[232] = re, ic[233] = tg) : tg = ic[233], (0, p.useLayoutEffect)(tf, tg);
            let rz = ao ? rc : void 0;
            ic[234] !== rz ? (tv = {
                "--quick-chat-expansion": rz
            }, ic[234] = rz, ic[235] = tv) : tv = ic[235];
            let rC = tv,
                rk = {
                    height: Math.min(36, oG),
                    width: Math.min(36, o0)
                },
                rj = (0, et.f)(iN ? lr : lZ?.dockPosition ?? la, iy),
                rE = (0, et.d)(rj, rk, oQ, a5, 0, oY),
                rM = iN ? rk : {
                    height: o6,
                    width: rt
                },
                rP = iN ? rE : rn,
                rR = iN ? 16 : 10,
                rN = Math.max(rR, a5 - rM.width - rR),
                rL = oY + rR,
                rT = Math.max(rR, oQ - rM.height - rR);
            ic[236] !== rR || ic[237] !== rN || ic[238] !== rL || ic[239] !== rT ? (tb = {
                left: rR,
                right: rN,
                top: rL,
                bottom: rT
            }, ic[236] = rR, ic[237] = rN, ic[238] = rL, ic[239] = rT, ic[240] = tb) : tb = ic[240];
            let rD = tb;
            ic[241] === Symbol.for("react.memo_cache_sentinel") ? (tx = () => {
                lp.current = null
            }, ic[241] = tx) : tx = ic[241], ic[242] !== ip || ic[243] !== aL ? (ty = [ip, aL], ic[242] = ip, ic[243] = aL, ic[244] = ty) : ty = ic[244], (0, p.useLayoutEffect)(tx, ty);
            let rq = e => {
                    if (!i4) return;
                    lp.current = null == ip ? null : lb.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, k.b)(e.clientX - (lp.current?.left ?? 0), aL),
                        y: (0, k.b)(e.clientY - (lp.current?.top ?? 0), aL)
                    };
                    lh.current = {
                        x: t.x - rP.x - lf.get(),
                        y: t.y - rP.y - lg.get()
                    }, lm.current = {
                        point: t,
                        target: null
                    }, lu.start(e)
                },
                r_ = (0, et.d)(rj, {
                    height: o6,
                    width: rt
                }, oQ, a5, 12, oY),
                rF = rE.x - r_.x,
                rI = rE.y - r_.y,
                rA = rt - rF - rk.width,
                rH = o6 - rI - rk.height;
            ic[245] !== rF || ic[246] !== rI || ic[247] !== rA || ic[248] !== rH ? (tw = {
                top: rI,
                right: rA,
                bottom: rH,
                left: rF
            }, ic[245] = rF, ic[246] = rI, ic[247] = rA, ic[248] = rH, ic[249] = tw) : tw = ic[249];
            let rW = tw,
                rB = `inset(${rW.top}px ${rW.right}px ${rW.bottom}px ${rW.left}px round var(--floating-panel-radius))`,
                rO = (0, s.a)(() => {
                    let e = oo.get(),
                        t = o7.get() - o6,
                        n = e * (rW.top + (ls ? 0 : t)),
                        i = 6 + e * (rW.right - 6),
                        a = 6 + e * (rW.bottom + (ls ? t : 0) - 6),
                        l = 6 + e * (rW.left - 6),
                        o = ri.get(),
                        r = 0 === o ? "var(--radius-token-composer-single-line)" : `calc(var(--radius-token-composer-single-line) * ${1-o} + var(--app-shell-sidebar-popover-radius) * ${o})`,
                        s = ol || lO || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round ${r})` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: r,
                        clip: s
                    }
                });
            ic[250] !== rO ? (tS = () => rO.get().top, ic[250] = rO, ic[251] = tS) : tS = ic[251];
            let r$ = (0, s.a)(tS);
            ic[252] !== rO ? (tz = () => rO.get().right, ic[252] = rO, ic[253] = tz) : tz = ic[253];
            let rK = (0, s.a)(tz);
            ic[254] !== rO ? (tC = () => rO.get().bottom, ic[254] = rO, ic[255] = tC) : tC = ic[255];
            let rV = (0, s.a)(tC);
            ic[256] !== rO ? (tk = () => rO.get().left, ic[256] = rO, ic[257] = tk) : tk = ic[257];
            let rX = (0, s.a)(tk);
            ic[258] !== rO ? (tj = () => rO.get().radius, ic[258] = rO, ic[259] = tj) : tj = ic[259];
            let rY = (0, s.a)(tj);
            ic[260] !== rO ? (tE = () => rO.get().clip, ic[260] = rO, ic[261] = tE) : tE = ic[261];
            let rZ = (0, s.a)(tE);
            ic[262] !== ao || ic[263] !== ol || ic[264] !== oo || ic[265] !== aT ? (tM = () => {
                if (!ao) return;
                let e = (0, c.a)(oo, +!!ol, {
                    duration: .3 * !aT,
                    ease: N.e
                });
                return () => e.stop()
            }, tP = [ao, ol, oo, aT], ic[262] = ao, ic[263] = ol, ic[264] = oo, ic[265] = aT, ic[266] = tM, ic[267] = tP) : (tM = ic[266], tP = ic[267]), (0, p.useLayoutEffect)(tM, tP);
            let rU = ls ? {
                    top: rI + rk.height
                } : {
                    bottom: o6 - rI
                },
                rQ = (0, p.useRef)({
                    dockPosition: lr,
                    dockThreadKey: ax,
                    isMinimized: iN
                });
            ic[268] !== iD ? (tR = () => {
                iD?.(null)
            }, ic[268] = iD, ic[269] = tR) : tR = ic[269];
            let rG = (0, p.useEffectEvent)(tR),
                rJ = (0, p.useEffectEvent)(e => {
                    let t = (0, et.d)(e, {
                        height: o6,
                        width: rt
                    }, oQ, a5, 12, oY);
                    lf.stop(), lg.stop(), lf.jump(lf.get() + t.x - rn.x), lg.jump(lg.get() + t.y - rn.y);
                    let n = aT ? {
                        duration: 0
                    } : ew;
                    (0, c.a)(lf, 0, n), (0, c.a)(lg, 0, n)
                });
            (0, p.useLayoutEffect)(() => {
                let e = rQ.current;
                if (rQ.current = {
                        dockPosition: lr,
                        dockThreadKey: ax,
                        isMinimized: iN
                    }, e.dockThreadKey !== ax) {
                    ld.current = !0, lQ.current = !0, lu.cancel(), rG(), lf.jump(0), lg.jump(0);
                    return
                }
                if (i8) {
                    lf.jump(0), lg.jump(0);
                    return
                }
                e.isMinimized !== iN && rJ(e.dockPosition)
            }, [lr, ax, lu, lf, lg, i8, iN]), ic[270] !== lf || ic[271] !== lg ? (tN = () => () => {
                lf.stop(), lg.stop()
            }, tL = [lf, lg], ic[270] = lf, ic[271] = lg, ic[272] = tN, ic[273] = tL) : (tN = ic[272], tL = ic[273]), (0, p.useLayoutEffect)(tN, tL);
            let r0 = e => {
                let t, n = {
                    ...rM,
                    left: rP.x + lf.get(),
                    top: rP.y + lg.get()
                };
                null != ip && null == lp.current && (lp.current = lb.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == ip ? null : lp.current,
                    a = {
                        x: e.point.x - (0, k.b)(i?.left ?? 0, aL),
                        y: e.point.y - (0, k.b)(i?.top ?? 0, aL)
                    };
                t = ao ? (0, et.b)(n, oQ, a5, ex.filter(e => !iN || "bottom-right" === e).map(e => (0, et.f)(e, iy)), 12 * !iN, oY) : (0, et.e)({
                    ...n,
                    left: n.width >= a5 / 2 - 2 * rR ? a.x - n.width / 2 : n.left
                }, oQ, a5, iN);
                let l = null == iy ? t : (0, et.f)(t, iy),
                    o = {
                        x: ao ? a5 - a.x : Math.min(a.x, a5 - a.x),
                        y: ao ? oQ - a.y : Math.min(a.y - oY, oQ - a.y)
                    },
                    r = o.x <= 16 + rk.width && o.y <= 16 + rk.height;
                if (ao && !iN) {
                    let e = lm.current;
                    if (null != e) {
                        let t = a.x - e.point.x,
                            n = a.y - e.point.y;
                        Math.hypot(t, n) >= 8 && (t >= 0 && n > 0 && n >= t ? e.target = "minimize" : t > 0 && t > 2 * Math.abs(n) ? e.target = null : (t < 0 || n < 0) && (e.target = null), e.point = a)
                    }
                    let n = a.y - lh.current.y + rM.height - oQ;
                    return {
                        dockPosition: l,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        suppressEdgeDrop: r,
                        shouldMinimize: "bottom-right" === l && e?.target === "minimize" && n >= .5 * rM.width
                    }
                }
                let s = (0, et.d)(l, rM, oQ, a5, 12, oY),
                    c = !iN && "bottom-center" !== l && 16 >= Math.abs(n.left - s.x) && 16 >= Math.abs(n.top - s.y);
                return {
                    dockPosition: l,
                    requestedDockPosition: t,
                    isNearDock: c,
                    suppressEdgeDrop: r,
                    shouldMinimize: c && r
                }
            };
            ic[274] !== i4 || ic[275] !== ao || ic[276] !== ax || ic[277] !== iM || ic[278] !== an ? (tT = (e, t) => {
                i4 && (null != ax || ao && !t ? (0, en.c)(an, {
                    threadKey: ax ?? null,
                    minimized: t
                }, e, iM) : li(n => ({
                    expanded: t ? n.expanded : e,
                    minimized: t ? (0, et.a)(e) : n.minimized
                })))
            }, ic[274] = i4, ic[275] = ao, ic[276] = ax, ic[277] = iM, ic[278] = an, ic[279] = tT) : tT = ic[279];
            let r1 = tT,
                r2 = (e, t, n) => {
                    let i = void 0 === n ? rM : n,
                        a = (0, et.d)(lr, rM, oQ, a5, 12 * !iN, oY),
                        l = {
                            x: a.x + lf.get(),
                            y: a.y + lg.get()
                        },
                        o = (0, et.d)((0, et.f)(e, iy), i, oQ, a5, 12 * !iN, oY);
                    lf.stop(), lg.stop(), lf.jump(l.x - o.x), lg.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        r1(e, iN)
                    });
                    let r = ao ? {
                            duration: .3,
                            ease: N.e
                        } : ew,
                        s = aT ? {
                            duration: 0
                        } : r;
                    lV(!0), Promise.all([(0, c.a)(lf, 0, s), (0, c.a)(lg, 0, s)]).then(() => {
                        lV(0 !== lf.get() || 0 !== lg.get())
                    })
                },
                r3 = (0, p.useEffectEvent)(() => {
                    ld.current = !0, lu.cancel(), iD?.(null), r2(lr, !1), lU(null), lR(null), l$(!1)
                });
            ic[280] !== r3 || ic[281] !== lu || ic[282] !== lO ? (tD = () => {
                if (!lO) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r3())
                    },
                    t = () => r3();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    ld.current = !0, lu.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, ic[280] = r3, ic[281] = lu, ic[282] = lO, ic[283] = tD) : tD = ic[283], ic[284] !== lu || ic[285] !== lO ? (tq = [lu, lO], ic[284] = lu, ic[285] = lO, ic[286] = tq) : tq = ic[286], (0, p.useLayoutEffect)(tD, tq);
            let r4 = (e, t) => {
                    let n = ao && oK ? 0 : (0, et.c)(lr, e, {
                            height: o6,
                            width: rt
                        }, lf.get(), t.width, oQ, a5, 12),
                        i = rn.y + lg.get(),
                        a = (0, et.d)(lr, t, oQ, a5, 12, oY),
                        l = eP(i + (ls ? 0 : o6 - t.height), oY + 10, oQ - t.height - 10);
                    lf.stop(), lg.stop(), (0, f.flushSync)(() => {
                        l8({
                            height: od ? oZ.height : t.height,
                            width: t.width - 12
                        })
                    }), lf.jump(n), lg.jump(l - a.y)
                },
                r5 = e => {
                    el(an, {
                        height: od ? oZ.height : e.height,
                        width: e.width - 12
                    }, () => iF?.(lr)), r2(lr, !1, e)
                };
            ic[287] !== ao || ic[288] !== lO || ic[289] !== i_ || ic[290] !== lL || ic[291] !== lU || ic[292] !== lR ? (t_ = () => {
                lL(!1), lY(!lO), lU(null), lR(ao ? null : {
                    target: "minimized"
                }), i_(!0)
            }, ic[287] = ao, ic[288] = lO, ic[289] = i_, ic[290] = lL, ic[291] = lU, ic[292] = lR, ic[293] = t_) : t_ = ic[293];
            let r6 = t_;
            if (ic[294] !== ao || ic[295] !== i7 || ic[296] !== al || ic[297] !== od || ic[298] !== i8 || ic[299] !== iN || ic[300] !== iq || ic[301] !== i_ || ic[302] !== lE || ic[303] !== lL || ic[304] !== lM || ic[305] !== lR) {
                let e, t, n, i;
                tB = () => {
                    (0, f.flushSync)(() => {
                        lL(!1), lR(ao ? null : {
                            target: lE
                        }), i_(!1)
                    }), tA()
                }, ic[313] !== od || ic[314] !== lM || ic[315] !== lR ? (e = () => {
                    lR(null), lM(od ? "expanded" : "compact")
                }, ic[313] = od, ic[314] = lM, ic[315] = lR, ic[316] = e) : e = ic[316], tO = e, tF = !i8 && !iN && (null != iq || !od && !i7), ic[317] !== iq || ic[318] !== lM || ic[319] !== lR ? (t = () => {
                    null != iq ? iq() : (lR(null), lM("compact"))
                }, ic[317] = iq, ic[318] = lM, ic[319] = lR, ic[320] = t) : t = ic[320], tI = t, ic[321] !== tF || ic[322] !== tI ? (n = e => {
                    !tF || "Escape" !== e.key || e.defaultPrevented || e.repeat || e.nativeEvent.isComposing || (e.preventDefault(), e.stopPropagation(), tI())
                }, ic[321] = tF, ic[322] = tI, ic[323] = n) : n = ic[323], tW = n, ic[324] !== al ? (i = () => {
                    let e = lv.current;
                    return al ? (0, Z.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, ic[324] = al, ic[325] = i) : i = ic[325], tH = i, tA = () => {
                    ao && (lR(null), lM("expanded")), tH()?.focus({
                        preventScroll: !0
                    })
                }, ic[294] = ao, ic[295] = i7, ic[296] = al, ic[297] = od, ic[298] = i8, ic[299] = iN, ic[300] = iq, ic[301] = i_, ic[302] = lE, ic[303] = lL, ic[304] = lM, ic[305] = lR, ic[306] = tF, ic[307] = tI, ic[308] = tA, ic[309] = tH, ic[310] = tW, ic[311] = tB, ic[312] = tO
            } else tF = ic[306], tI = ic[307], tA = ic[308], tH = ic[309], tW = ic[310], tB = ic[311], tO = ic[312];
            let r7 = !i8 && al;
            ic[326] !== tH || ic[327] !== al || ic[328] !== iN ? (t$ = () => {
                if (null == lb.current || null != lb.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (al) return iN;
                let e = tH();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !lv.current?.contains(t) || t === lv.current
            }, ic[326] = tH, ic[327] = al, ic[328] = iN, ic[329] = t$) : t$ = ic[329], ic[330] !== r7 || ic[331] !== t$ ? (tK = {
                enabled: r7,
                isActive: t$
            }, ic[330] = r7, ic[331] = t$, ic[332] = tK) : tK = ic[332], (0, K.a)("focusMainChat", iN ? tB : tA, tK), ic[333] !== aP || ic[334] !== od ? (tV = aP.formatMessage(od ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat",
                description: "Accessible label for expanding a compact floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat",
                description: "Accessible label for collapsing a floating chat"
            }), ic[333] = aP, ic[334] = od, ic[335] = tV) : tV = ic[335];
            let r8 = tV;
            ic[336] !== om || ic[337] !== r8 || ic[338] !== tO ? (tX = om ? {
                label: r8,
                onToggle: tO
            } : void 0, ic[336] = om, ic[337] = r8, ic[338] = tO, ic[339] = tX) : tX = ic[339];
            let r9 = tX;
            ic[340] !== aP ? (tY = aP.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width",
                description: "Accessible label for resizing the chat width"
            }), ic[340] = aP, ic[341] = tY) : tY = ic[341];
            let se = tY;
            ic[342] !== aP ? (tZ = aP.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height",
                description: "Accessible label for resizing the chat height"
            }), ic[342] = aP, ic[343] = tZ) : tZ = ic[343];
            let st = tZ;
            ic[344] !== i9 || ic[345] !== lM || ic[346] !== lR ? (tU = () => {
                lR(null), i9 && lM("expanded")
            }, ic[344] = i9, ic[345] = lM, ic[346] = lR, ic[347] = tU) : tU = ic[347];
            let sn = (0, eb.a)(tU);
            ic[348] !== ao || ic[349] !== sn || ic[350] !== i9 || ic[351] !== lR ? (tQ = ao || i9 ? sn : () => lR(null), ic[348] = ao, ic[349] = sn, ic[350] = i9, ic[351] = lR, ic[352] = tQ) : tQ = ic[352];
            let si = {
                    isCompact: op,
                    canShowPreviewBubble: ox,
                    isNarrow: l4,
                    isChromeRevealed: oI,
                    isHeaderVisible: oA,
                    isComposerFocused: ao ? lW || lF : oI,
                    isDockedTop: ls,
                    isHidden: i8,
                    isMinimized: ol,
                    shouldReduceMotion: aT,
                    onSubmitStart: tQ
                },
                sa = {
                    isMoving: lO || lG || lK,
                    composerContentHeight: l2,
                    dockedReservePx: l0 > l2 + 6 * !!ao ? o6 + 10 : 0
                };
            ic[353] !== i8 || ic[354] !== ij ? (tG = function(e) {
                !i8 && null != ij && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (lb.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, ic[353] = i8, ic[354] = ij, ic[355] = tG) : tG = ic[355];
            let sl = tG;
            ic[356] !== i9 ? (tJ = function(e) {
                !i9 && e.target instanceof Element && (!lb.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, ic[356] = i9, ic[357] = tJ) : tJ = ic[357];
            let so = tJ,
                sr = im(si, sa),
                ss = tF ? tI : null;
            ic[358] !== l6 ? (t0 = e => {
                lv.current = e, l6(e)
            }, ic[358] = l6, ic[359] = t0) : t0 = ic[359], ic[360] !== oS || ic[361] !== op || ic[362] !== of || ic[363] !== ob ? (t1 = oS && !of && (!op || ob) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, ic[360] = oS, ic[361] = op, ic[362] = of, ic[363] = ob, ic[364] = t1) : t1 = ic[364], ic[365] !== aO ? (t2 = {
                target: aO,
                homeBannerPlacement: "inline"
            }, ic[365] = aO, ic[366] = t2) : t2 = ic[366];
            let sc = (0, i.jsxs)("div", {
                ref: t0,
                className: (0, l.b)(T.a.floatingComposerInset, "mt-auto shrink-0", od && ls && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: sl,
                onContextMenu: so,
                children: [t1, (0, i.jsx)(em.b, {
                    value: {
                        ...aw,
                        hasComposerSurface: oS,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !i8 && !od && !iN,
                        floatingChatSurfaceRef: lb,
                        onFloatingDictationRowChange: lH,
                        floatingComposerPresentation: si,
                        transcriptTarget: aK,
                        followLatestTranscript: ao ? op : aw.followLatestTranscript
                    },
                    children: (0, i.jsx)(Y.a, {
                        value: ss,
                        children: (0, i.jsx)(X.a, {
                            value: t2,
                            children: sr
                        })
                    })
                })]
            });
            ic[367] !== ao || ic[368] !== op || ic[369] !== r6 ? (t3 = ao ? null : (0, i.jsx)(ee.c, {
                isCompact: op,
                onMinimize: r6
            }), ic[367] = ao, ic[368] = op, ic[369] = r6, ic[370] = t3) : t3 = ic[370];
            let su = t3,
                sd = iz ? iz({
                    leadingControl: su
                }) : (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-1 items-center gap-1",
                    children: [su, oq && null != aE ? (0, i.jsx)("div", {
                        className: "flex items-center justify-center",
                        role: "status",
                        "aria-label": "loading" === aE.type ? oW : oB,
                        children: (0, i.jsx)(eh.a, {
                            statusState: aE
                        })
                    }) : null, (0, i.jsx)("h2", {
                        id: aR,
                        "data-dropdown-overlay-side": ls ? "bottom" : "top",
                        className: (0, l.b)("max-w-80 min-w-0 text-base font-medium text-secondary", (!ao || null == iW) && "truncate"),
                        children: iW ?? (ao ? (0, i.jsx)(ee.b, {
                            children: (0, i.jsx)("span", {
                                className: "truncate",
                                children: at ? iH : (0, i.jsx)(v.a, {
                                    id: "quickChat.newChatTitle",
                                    defaultMessage: "New chat",
                                    description: "Title of the expanded floating composer before a chat has started"
                                })
                            })
                        }) : iH)
                    })]
                });
            ic[371] !== aA || ic[372] !== op || ic[373] !== lO || ic[374] !== r6 || ic[375] !== ij ? (t4 = ij?.({
                isCompact: op,
                isDragging: lO,
                open: aA,
                onMinimize: r6,
                onOpenChange: aH
            }), ic[371] = aA, ic[372] = op, ic[373] = lO, ic[374] = r6, ic[375] = ij, ic[376] = t4) : t4 = ic[376], ic[377] !== ao || ic[378] !== op || ic[379] !== r6 ? (t5 = ao && (0, i.jsx)(ee.c, {
                isCompact: op,
                onMinimize: r6
            }), ic[377] = ao, ic[378] = op, ic[379] = r6, ic[380] = t5) : t5 = ic[380], ic[381] !== sd || ic[382] !== t4 || ic[383] !== t5 ? (t6 = (0, i.jsxs)(i.Fragment, {
                children: [sd, t4, t5]
            }), ic[381] = sd, ic[382] = t4, ic[383] = t5, ic[384] = t6) : t6 = ic[384];
            let sh = t6,
                sm = ah ? "hidden" : "contents";
            ic[385] !== i6 || ic[386] !== ao || ic[387] !== sh || ic[388] !== i5 || ic[389] !== i9 || ic[390] !== op || ic[391] !== oA || ic[392] !== iN || ic[393] !== r9 || ic[394] !== lP || ic[395] !== aT ? (t7 = ao ? (0, i.jsx)(ee.a, {
                isCompact: i9 && op,
                isVisible: oA,
                isDisabled: i5,
                children: sh
            }) : (0, i.jsx)(ee.d, {
                expandOnClick: i9,
                animateChrome: !aT && !iN && null == lP,
                isChromeRevealed: oA,
                isCompact: op,
                isDisabled: i5,
                presentationToggle: i6 ? r9 : void 0,
                children: sh
            }), ic[385] = i6, ic[386] = ao, ic[387] = sh, ic[388] = i5, ic[389] = i9, ic[390] = op, ic[391] = oA, ic[392] = iN, ic[393] = r9, ic[394] = lP, ic[395] = aT, ic[396] = t7) : t7 = ic[396], ic[397] !== so || ic[398] !== sl || ic[399] !== sm || ic[400] !== t7 ? (t8 = (0, i.jsx)("div", {
                className: sm,
                onPointerDownCapture: sl,
                onContextMenu: so,
                children: t7
            }), ic[397] = so, ic[398] = sl, ic[399] = sm, ic[400] = t7, ic[401] = t8) : t8 = ic[401];
            let sp = t8,
                sf = ao ? {
                    top: rj.startsWith("top") ? rI : void 0,
                    bottom: rj.startsWith("top") ? void 0 : rW.bottom,
                    left: rF,
                    width: rk.width,
                    height: rk.height,
                    opacity: oo
                } : {
                    inset: 0
                },
                sg = !iN,
                sv = iN ? ay : void 0;
            ic[402] !== ao || ic[403] !== ol ? (t9 = ao ? void 0 : {
                opacity: +!!ol
            }, ic[402] = ao, ic[403] = ol, ic[404] = t9) : t9 = ic[404];
            let sb = !iN || void 0;
            ic[405] !== aT ? (ne = aT ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, ic[405] = aT, ic[406] = ne) : ne = ic[406];
            let sx = iN ? "minimized" : "preview",
                sy = iN && "pointer-events-auto";
            ic[407] !== sy ? (nt = (0, l.b)("absolute inset-0 m-auto touch-none", sy), ic[407] = sy, ic[408] = nt) : nt = ic[408];
            let sw = o_ ? oO : void 0;
            ic[409] !== aP || ic[410] !== i$ || ic[411] !== iH ? (nn = i$ ?? aP.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}",
                description: "Accessible label for restoring a minimized floating chat"
            }, {
                title: iH
            }), ic[409] = aP, ic[410] = i$, ic[411] = iH, ic[412] = nn) : nn = ic[412];
            let sS = !i8 && iN && lX;
            ic[413] !== tB ? (ni = e => {
                0 !== e.detail && lQ.current || tB()
            }, ic[413] = tB, ic[414] = ni) : ni = ic[414], ic[415] !== ao || ic[416] !== lL ? (na = e => {
                ao || "touch" === e.pointerType || lL(!0)
            }, ic[415] = ao, ic[416] = lL, ic[417] = na) : na = ic[417], ic[418] !== e5.type || ic[419] !== ao || ic[420] !== lL ? (nl = e => {
                "ready" === e5.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), ao || (0, f.flushSync)(() => lL(!0)), ly.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, ic[418] = e5.type, ic[419] = ao, ic[420] = lL, ic[421] = nl) : nl = ic[421], ic[422] !== a6 || ic[423] !== rq ? (no = e => {
                a6 || 0 !== e.button || (lQ.current = !1, e.currentTarget.setPointerCapture(e.pointerId), rq(e))
            }, ic[422] = a6, ic[423] = rq, ic[424] = no) : no = ic[424], ic[425] !== ao || ic[426] !== o_ || ic[427] !== oj || ic[428] !== iB || ic[429] !== ak ? (nr = oj && null != ak && null == iB ? (0, i.jsx)(eh.a, {
                statusState: ak,
                size: ao ? "default" : "compact"
            }) : (0, i.jsx)(U.a, {
                badgeEnabled: o_,
                children: iB ?? (0, i.jsx)(_.Ib, {})
            }), ic[425] = ao, ic[426] = o_, ic[427] = oj, ic[428] = iB, ic[429] = ak, ic[430] = nr) : nr = ic[430], ic[431] !== sx || ic[432] !== nt || ic[433] !== sw || ic[434] !== nn || ic[435] !== sS || ic[436] !== ni || ic[437] !== na || ic[438] !== nl || ic[439] !== no || ic[440] !== nr ? (ns = (0, i.jsx)(q.a, {
                ref: lx,
                className: nt,
                "aria-description": sw,
                "aria-label": nn,
                autoFocus: sS,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: ni,
                onPointerEnter: na,
                onKeyDown: nl,
                onPointerDown: no,
                children: nr
            }, sx), ic[431] = sx, ic[432] = nt, ic[433] = sw, ic[434] = nn, ic[435] = sS, ic[436] = ni, ic[437] = na, ic[438] = nl, ic[439] = no, ic[440] = nr, ic[441] = ns) : ns = ic[441], ic[442] !== sf || ic[443] !== sg || ic[444] !== sv || ic[445] !== t9 || ic[446] !== sb || ic[447] !== ne || ic[448] !== ns ? (nc = (0, i.jsx)(d.a.div, {
                ref: E.c,
                className: "pointer-events-none absolute",
                style: sf,
                "aria-hidden": sg,
                "data-pip-obstacle": sv,
                animate: t9,
                initial: !1,
                inert: sb,
                transition: ne,
                children: ns
            }), ic[442] = sf, ic[443] = sg, ic[444] = sv, ic[445] = t9, ic[446] = sb, ic[447] = ne, ic[448] = ns, ic[449] = nc) : nc = ic[449];
            let sz = nc,
                sC = "ready" === e5.type ? (0, i.jsx)(H, {
                    items: e5.value,
                    availableHeight: Math.max(0, (ip?.height ?? aq) - oY - aF - (iN ? rk.height : o1) - 32 - 12),
                    isDockedTop: ls,
                    shouldReduceMotion: aT
                }) : null;
            !ao && (nu = ey, ol ? nu = rB : null != lP || lO || (nu = "none"));
            let sk = null != lP || !iN;
            ic[450] !== ao || ic[451] !== rs || ic[452] !== rr || ic[453] !== rl || ic[454] !== ro || ic[455] !== rY ? (nd = ao ? {
                x: rl,
                y: ro,
                width: rr,
                height: rs,
                borderRadius: rY
            } : void 0, ic[450] = ao, ic[451] = rs, ic[452] = rr, ic[453] = rl, ic[454] = ro, ic[455] = rY, ic[456] = nd) : nd = ic[456], ic[457] !== ao || ic[458] !== rV || ic[459] !== rX || ic[460] !== rY || ic[461] !== rK || ic[462] !== r$ ? (nh = ao ? {
                top: r$,
                right: rK,
                bottom: rV,
                left: rX,
                borderRadius: rY
            } : void 0, ic[457] = ao, ic[458] = rV, ic[459] = rX, ic[460] = rY, ic[461] = rK, ic[462] = r$, ic[463] = nh) : nh = ic[463], ic[464] !== o6 || ic[465] !== rt ? (nm = {
                height: o6,
                width: rt
            }, ic[464] = o6, ic[465] = rt, ic[466] = nm) : nm = ic[466];
            let sj = ao && oK,
                sE = ao && !oK ? oV : void 0,
                sM = og && oA;
            ic[467] !== oG || ic[468] !== o0 ? (np = {
                height: oG,
                width: o0
            }, ic[467] = oG, ic[468] = o0, ic[469] = np) : np = ic[469], ic[470] !== sz || ic[471] !== iO ? (nf = null == iO ? sz : (0, i.jsx)(Q.a, {
                disableNative: !0,
                items: iO,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: sz
                })
            }), ic[470] = sz, ic[471] = iO, ic[472] = nf) : nf = ic[472], ic[473] !== o4 || ic[474] !== o5 ? (ng = {
                height: o4,
                width: o5
            }, ic[473] = o4, ic[474] = o5, ic[475] = ng) : ng = ic[475];
            let sP = !a6 && !au,
                sR = ol || ao ? "panel" : ih,
                sN = oH ? void 0 : iH,
                sL = oH ? aR : void 0,
                sT = null != ip && void 0;
            ic[476] !== i3 || ic[477] !== o9 || ic[478] !== aT ? (nv = i3 ? {
                opacity: +!!o9,
                translateY: 8 * (!o9 && !aT)
            } : {}, ic[476] = i3, ic[477] = o9, ic[478] = aT, ic[479] = nv) : nv = ic[479];
            let sD = ao || lZ?.stage !== "approaching" ? 1 : .95;
            ic[480] !== rt || ic[481] !== nv || ic[482] !== sD ? (nb = {
                ...nv,
                width: rt,
                scale: sD
            }, ic[480] = rt, ic[481] = nv, ic[482] = sD, ic[483] = nb) : nb = ic[483];
            let sq = !!ao && void 0 !== ig && !!lO || void 0,
                s_ = !ao && od || void 0,
                sF = iN ? void 0 : ay,
                sI = !a6,
                sA = null == ip ? void 0 : {
                    left: rD.left - rP.x,
                    right: rD.right - rP.x,
                    top: rD.top - rP.y,
                    bottom: rD.bottom - rP.y
                },
                sH = null == ip ? void 0 : 0;
            ic[484] !== i3 || ic[485] !== aT ? (nx = !!i3 && !aT && {
                opacity: 0,
                translateY: 8
            }, ic[484] = i3, ic[485] = aT, ic[486] = nx) : nx = ic[486];
            let sW = null == ip ? "dialog" : "region",
                sB = ls ? oY + 10 : "auto",
                sO = ls ? "auto" : 10 + aF,
                s$ = oK ? "50%" : "auto";
            ic[487] !== oV || ic[488] !== oK ? (ny = !oK && {
                [oV]: 10
            }, ic[487] = oV, ic[488] = oK, ic[489] = ny) : ny = ic[489];
            let sK = oK ? "-50% 0" : void 0,
                sV = "bottom-center" === rj ? .5 : Number(rj.endsWith("right")),
                sX = +!rj.startsWith("top");
            ic[490] !== o7 || ic[491] !== rC || ic[492] !== lf || ic[493] !== lg || ic[494] !== sB || ic[495] !== sO || ic[496] !== s$ || ic[497] !== ny || ic[498] !== sK || ic[499] !== sV || ic[500] !== sX ? (nw = {
                ...rC,
                height: o7,
                top: sB,
                bottom: sO,
                left: s$,
                right: "auto",
                ...ny,
                translate: sK,
                x: lf,
                y: lg,
                originX: sV,
                originY: sX
            }, ic[490] = o7, ic[491] = rC, ic[492] = lf, ic[493] = lg, ic[494] = sB, ic[495] = sO, ic[496] = s$, ic[497] = ny, ic[498] = sK, ic[499] = sV, ic[500] = sX, ic[501] = nw) : nw = ic[501];
            let sY = .3 * !aT;
            ic[502] !== sY ? (nS = {
                duration: sY,
                ease: N.e
            }, ic[502] = sY, ic[503] = nS) : nS = ic[503], ic[504] !== re || ic[505] !== nS ? (nz = {
                duration: re,
                ease: N.e,
                scale: nS
            }, ic[504] = re, ic[505] = nS, ic[506] = nz) : nz = ic[506], ic[507] !== ao || ic[508] !== i9 || ic[509] !== i8 || ic[510] !== aN || ic[511] !== lB || ic[512] !== lD || ic[513] !== lL || ic[514] !== lM || ic[515] !== lR || ic[516] !== oz ? (nC = e => {
                if (!(i8 || eM(e.currentTarget, e.relatedTarget, aN))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && eM(t, t.ownerDocument.activeElement, aN) || (lD(!1), lB(!1), lL(!1))
                        });
                        return
                    }
                    lD(!1), lB(!1), lL(!1), (!ao || i9) && oz && null == e.target.closest("[inert]") && (lR(null), lM("compact"))
                }
            }, ic[507] = ao, ic[508] = i9, ic[509] = i8, ic[510] = aN, ic[511] = lB, ic[512] = lD, ic[513] = lL, ic[514] = lM, ic[515] = lR, ic[516] = oz, ic[517] = nC) : nC = ic[517], ic[518] !== om || ic[519] !== ao || ic[520] !== tA || ic[521] !== od || ic[522] !== i9 || ic[523] !== iN || ic[524] !== lM || ic[525] !== lR || ic[526] !== og || ic[527] !== tO ? (nk = e => {
                if (!(i9 && (0 !== e.button || e.ctrlKey) || iN || lQ.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (od && (e.target === e.currentTarget || lv.current?.contains(e.target))) return void tA();
                    if (i9) {
                        if (!og || !om) return;
                        od && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), lR(null), lM("expanded");
                        return
                    }
                    if (ao) {
                        od && om && tA();
                        return
                    }
                    og && om && e.target.closest("header[data-quick-chat-drag-handle]") && (od && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), tO())
                }
            }, ic[518] = om, ic[519] = ao, ic[520] = tA, ic[521] = od, ic[522] = i9, ic[523] = iN, ic[524] = lM, ic[525] = lR, ic[526] = og, ic[527] = tO, ic[528] = nk) : nk = ic[528], ic[529] !== ao || ic[530] !== oG || ic[531] !== o0 || ic[532] !== o4 || ic[533] !== o5 || ic[534] !== iN || ic[535] !== iF || ic[536] !== an || ic[537] !== l8 || ic[538] !== lM || ic[539] !== lR || ic[540] !== r2 ? (nj = e => {
                ao && !iN && !lQ.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (lR(null), lM("expanded"), l8(null), el(an, P, () => iF?.("bottom-right")), r2("bottom-right", !0, {
                    height: eP(P.height, o4, oG),
                    width: eP(P.width + 12, o5, o0)
                }))
            }, ic[529] = ao, ic[530] = oG, ic[531] = o0, ic[532] = o4, ic[533] = o5, ic[534] = iN, ic[535] = iF, ic[536] = an, ic[537] = l8, ic[538] = lM, ic[539] = lR, ic[540] = r2, ic[541] = nj) : nj = ic[541], ic[542] !== i8 ? (nE = e => {
                !i8 && lQ.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, ic[542] = i8, ic[543] = nE) : nE = ic[543], ic[544] !== ao || ic[545] !== r0 || ic[546] !== lZ || ic[547] !== iT || ic[548] !== lE || ic[549] !== lU || ic[550] !== lR ? (nM = (e, t) => {
                let n = r0(t);
                if (!iT?.(n.suppressEdgeDrop ? null : e) && null != n.dockPosition && (ao ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching",
                        t = ao ? "bottom-right" : n.dockPosition;
                    (lZ?.stage !== e || lZ.dockPosition !== t) && (lU({
                        dockPosition: t,
                        stage: e
                    }), (n.shouldMinimize || lZ?.stage === "minimized") && lR(ao ? null : {
                        target: n.shouldMinimize ? "minimized" : lE
                    }))
                } else null != lZ && "restored" !== lZ.stage && (lU({
                    ...lZ,
                    stage: "restored"
                }), "minimized" === lZ.stage && lR(ao ? null : {
                    target: lE
                }))
            }, ic[544] = ao, ic[545] = r0, ic[546] = lZ, ic[547] = iT, ic[548] = lE, ic[549] = lU, ic[550] = lR, ic[551] = nM) : nM = ic[551], ic[552] !== ao || ic[553] !== am || ic[554] !== lf || ic[555] !== lg || ic[556] !== r0 || ic[557] !== au || ic[558] !== r6 || ic[559] !== lZ || ic[560] !== iD || ic[561] !== iT || ic[562] !== lE || ic[563] !== ai || ic[564] !== r1 || ic[565] !== l$ || ic[566] !== lU || ic[567] !== lR || ic[568] !== aT || ic[569] !== r2 ? (nP = (e, t) => {
                if (ld.current) return;
                let n = r0(t),
                    i = n.suppressEdgeDrop ? null : e,
                    a = e => !!iD?.(i, e) && (lf.jump(0), lg.jump(0), lU(null), lR(null), l$(!1), !0),
                    l = ap.current;
                if (au && am && l && i && iT?.(i)) return void
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
                        let e = ai.get(S.l.tabById$, ef.a);
                        return null == e ? null : l.ownerDocument.getElementById((0, z.a)(e.dndId))
                    },
                    destination: () => ai.get(ev.a),
                    reducedMotion: aT,
                    update: () => {
                        !ld.current && (a("pin") || (r2(n.requestedDockPosition, !0), l$(!1)))
                    }
                });
                if (!a()) {
                    if (n.shouldMinimize && null != n.requestedDockPosition) {
                        let e = ao ? "bottom-right" : n.requestedDockPosition;
                        (0, f.flushSync)(() => {
                            r1(e, !0), r6()
                        })
                    } else r2(n.requestedDockPosition, !0), null != lZ && "restored" !== lZ.stage && (lU({
                        ...lZ,
                        stage: "restored"
                    }), "minimized" === lZ.stage && lR(ao ? null : {
                        target: lE
                    }));
                    l$(!1)
                }
            }, ic[552] = ao, ic[553] = am, ic[554] = lf, ic[555] = lg, ic[556] = r0, ic[557] = au, ic[558] = r6, ic[559] = lZ, ic[560] = iD, ic[561] = iT, ic[562] = lE, ic[563] = ai, ic[564] = r1, ic[565] = l$, ic[566] = lU, ic[567] = lR, ic[568] = aT, ic[569] = r2, ic[570] = nP) : nP = ic[570], ic[571] !== lf || ic[572] !== lg || ic[573] !== l$ || ic[574] !== lL ? (nR = () => {
                lL(!1), ld.current = !1, lQ.current = !0, l$(!0), lf.stop(), lg.stop()
            }, ic[571] = lf, ic[572] = lg, ic[573] = l$, ic[574] = lL, ic[575] = nR) : nR = ic[575], ic[576] !== om || ic[577] !== ao || ic[578] !== i9 || ic[579] !== lF || ic[580] !== lB || ic[581] !== lD || ic[582] !== lM || ic[583] !== lR || ic[584] !== og ? (nN = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!ao || i9) && lD(!0), lB(!0), (i9 ? og && om : ao) && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !lF && null == lA.current && (lR(null), lM("expanded"))) : e.currentTarget.contains(e.target) && !lv.current?.contains(e.target) && (lB(!1), i9 && e.target.closest("header[data-quick-chat-drag-handle]") && lD(!0))
            }, ic[576] = om, ic[577] = ao, ic[578] = i9, ic[579] = lF, ic[580] = lB, ic[581] = lD, ic[582] = lM, ic[583] = lR, ic[584] = og, ic[585] = nN) : nN = ic[585], ic[586] !== lu || ic[587] !== i8 ? (nL = e => {
                i8 || "Escape" !== e.key || (lQ.current = !0, lu.cancel())
            }, ic[586] = lu, ic[587] = i8, ic[588] = nL) : nL = ic[588], ic[589] !== i8 || ic[590] !== a6 || ic[591] !== rq ? (nT = e => {
                if (i8 || (lQ.current = !1, a6 || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]");
                null != t && (null == n || n === t) && (e.preventDefault(), t.setPointerCapture(e.pointerId), rq(e))
            }, ic[589] = i8, ic[590] = a6, ic[591] = rq, ic[592] = nT) : nT = ic[592], ic[593] !== lL ? (nD = () => {
                ly.current?.contains(document.activeElement) || lL(!1)
            }, ic[593] = lL, ic[594] = nD) : nD = ic[594], ic[595] !== lu || ic[596] !== tW || ic[597] !== iu || ic[598] !== sN || ic[599] !== sL || ic[600] !== sT || ic[601] !== nb || ic[602] !== sq || ic[603] !== s_ || ic[604] !== sF || ic[605] !== sI || ic[606] !== sA || ic[607] !== sH || ic[608] !== nx || ic[609] !== sW || ic[610] !== nw || ic[611] !== nz || ic[612] !== nC || ic[613] !== nk || ic[614] !== nj || ic[615] !== nE || ic[616] !== nM || ic[617] !== nP || ic[618] !== nR || ic[619] !== nN || ic[620] !== nL || ic[621] !== nT || ic[622] !== nD ? (nq = {
                ref: iu,
                "aria-label": sN,
                "aria-labelledby": sL,
                "aria-modal": sT,
                animate: nb,
                "data-chat-pane-dragging": sq,
                "data-quick-chat-drag-handle": s_,
                "data-pip-obstacle": sF,
                "data-state": "open",
                drag: sI,
                dragConstraints: sA,
                dragElastic: sH,
                dragControls: lu,
                dragListener: !1,
                dragMomentum: !1,
                initial: nx,
                role: sW,
                tabIndex: -1,
                style: nw,
                transition: nz,
                onBlurCapture: nC,
                onClick: nk,
                onDoubleClick: nj,
                onClickCapture: nE,
                onDrag: nM,
                onDragEnd: nP,
                onDragStart: nR,
                onFocusCapture: nN,
                onKeyDown: tW,
                onKeyDownCapture: nL,
                onPointerDownCapture: nT,
                onPointerLeave: nD
            }, ic[595] = lu, ic[596] = tW, ic[597] = iu, ic[598] = sN, ic[599] = sL, ic[600] = sT, ic[601] = nb, ic[602] = sq, ic[603] = s_, ic[604] = sF, ic[605] = sI, ic[606] = sA, ic[607] = sH, ic[608] = nx, ic[609] = sW, ic[610] = nw, ic[611] = nz, ic[612] = nC, ic[613] = nk, ic[614] = nj, ic[615] = nE, ic[616] = nM, ic[617] = nP, ic[618] = nR, ic[619] = nN, ic[620] = nL, ic[621] = nT, ic[622] = nD, ic[623] = nq) : nq = ic[623];
            let sZ = null == ip ? "floating" : "content",
                sU = ls ? "bottom" : "top";
            ic[624] !== ao || ic[625] !== lf || ic[626] !== lg || ic[627] !== lJ || ic[628] !== lM || ic[629] !== lR ? (n_ = e => {
                lJ(e), e && (ao && lM("expanded"), lR(null), lf.stop(), lg.stop())
            }, ic[624] = ao, ic[625] = lf, ic[626] = lg, ic[627] = lJ, ic[628] = lM, ic[629] = lR, ic[630] = n_) : n_ = ic[630], ic[631] !== e5.type || ic[632] !== sC || ic[633] !== ao || ic[634] !== oD || ic[635] !== ls || ic[636] !== iN || ic[637] !== a4 || ic[638] !== rU || ic[639] !== ay || ic[640] !== lD ? (nF = !ao && oD && "ready" === e5.type ? (0, i.jsx)("div", {
                ref: (0, L.a)(ly, a4, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iN && (ls ? "top-full" : "bottom-full"), ls ? "pt-3" : "pb-3"),
                "data-pip-obstacle": ay,
                onClickCapture: () => {
                    (iN ? lx.current : lb.current)?.focus({
                        preventScroll: !0
                    }), lD(!1)
                },
                style: iN ? rU : void 0,
                children: sC
            }) : null, ic[631] = e5.type, ic[632] = sC, ic[633] = ao, ic[634] = oD, ic[635] = ls, ic[636] = iN, ic[637] = a4, ic[638] = rU, ic[639] = ay, ic[640] = lD, ic[641] = nF) : nF = ic[641], ic[642] !== sC || ic[643] !== ao || ic[644] !== oD || ic[645] !== ls || ic[646] !== iN || ic[647] !== a4 || ic[648] !== rU || ic[649] !== lB || ic[650] !== lD || ic[651] !== aT ? (nI = ao && oD ? (0, i.jsx)(d.a.div, {
                initial: {
                    opacity: 0,
                    y: 8 * !aT
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 8 * !aT
                },
                transition: {
                    duration: .3 * !aT,
                    ease: N.e
                },
                ref: (0, L.a)(ly, a4, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iN && (ls ? "top-full" : "bottom-full"), iN && (ls ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (iN ? lx.current : lb.current)?.focus({
                        preventScroll: !0
                    }), lD(!1), lB(!1)
                },
                style: iN ? rU : void 0,
                children: iN ? (0, i.jsx)(j.c, {
                    variant: "notice",
                    children: sC
                }) : sC
            }, "response-preview") : null, ic[642] = sC, ic[643] = ao, ic[644] = oD, ic[645] = ls, ic[646] = iN, ic[647] = a4, ic[648] = rU, ic[649] = lB, ic[650] = lD, ic[651] = aT, ic[652] = nI) : nI = ic[652], ic[653] !== nI ? (nA = (0, i.jsx)(h.a, {
                initial: !1,
                children: nI
            }), ic[653] = nI, ic[654] = nA) : nA = ic[654], ic[655] !== rv || ic[656] !== l0 || ic[657] !== ao || ic[658] !== ax || ic[659] !== tA || ic[660] !== op || ic[661] !== of || ic[662] !== i8 || ic[663] !== iU || ic[664] !== aT || ic[665] !== oy ? (nH = ao && void 0 !== iU && !i8 && !of && (0, i.jsx)(ej, {
                compact: op,
                preview: oy ? iU : null,
                reduceMotion: aT,
                composerHeight: l0,
                opacity: rv,
                onExpand: tA
            }, ax), ic[655] = rv, ic[656] = l0, ic[657] = ao, ic[658] = ax, ic[659] = tA, ic[660] = op, ic[661] = of, ic[662] = i8, ic[663] = iU, ic[664] = aT, ic[665] = oy, ic[666] = nH) : nH = ic[666];
            let sQ = ls ? "top-full pt-2" : "bottom-full";
            ic[667] !== sQ ? (nW = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", sQ), ic[667] = sQ, ic[668] = nW) : nW = ic[668], ic[669] !== a0 || ic[670] !== ol || ic[671] !== nW ? (nB = (0, i.jsx)("div", {
                ref: a0,
                className: nW,
                hidden: ol
            }), ic[669] = a0, ic[670] = ol, ic[671] = nW, ic[672] = nB) : nB = ic[672];
            let sG = 0 === oX && "pt-2",
                sJ = ls ? "w-full" : "w-80",
                s0 = oK && "left-1/2 -translate-x-1/2",
                s1 = !oK && (o$ ? "left-0" : "right-0"),
                s2 = ol && lO && "invisible";
            ic[673] !== sG || ic[674] !== sJ || ic[675] !== s0 || ic[676] !== s1 || ic[677] !== s2 ? (nO = (0, l.b)(T.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", sG, sJ, s0, s1, s2), ic[673] = sG, ic[674] = sJ, ic[675] = s0, ic[676] = s1, ic[677] = s2, ic[678] = nO) : nO = ic[678], ic[679] !== oX ? (n$ = {
                marginTop: oX
            }, ic[679] = oX, ic[680] = n$) : n$ = ic[680], ic[681] !== iw || ic[682] !== a1 || ic[683] !== ay || ic[684] !== nO || ic[685] !== n$ ? (nK = (0, i.jsx)("div", {
                ref: a1,
                className: nO,
                style: n$,
                "data-pip-obstacle": ay,
                children: iw
            }), ic[681] = iw, ic[682] = a1, ic[683] = ay, ic[684] = nO, ic[685] = n$, ic[686] = nK) : nK = ic[686], ic[687] !== nu || ic[688] !== ao || ic[689] !== ol ? (nV = ao ? void 0 : {
                clipPath: nu,
                opacity: +!ol
            }, ic[687] = nu, ic[688] = ao, ic[689] = ol, ic[690] = nV) : nV = ic[690];
            let s3 = !of && "pointer-events-auto";
            ic[691] !== s3 ? (nX = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", s3), ic[691] = s3, ic[692] = nX) : nX = ic[692], ic[693] !== or || ic[694] !== ao || ic[695] !== rZ ? (nY = ao ? {
                clipPath: rZ,
                opacity: or
            } : void 0, ic[693] = or, ic[694] = ao, ic[695] = rZ, ic[696] = nY) : nY = ic[696];
            let s4 = !!of || void 0;
            ic[697] !== ao || ic[698] !== lP || ic[699] !== aT ? (nZ = aT || !ao && null == lP ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, ic[697] = ao, ic[698] = lP, ic[699] = aT, ic[700] = nZ) : nZ = ic[700], ic[701] !== ol || ic[702] !== rB || ic[703] !== lE || ic[704] !== lP || ic[705] !== lR ? (nU = e => {
                lP?.target === (ol ? "minimized" : lE) && "object" == typeof e && "clipPath" in e && e.clipPath === (ol ? rB : ey) && lR(e => e === lP ? null : e)
            }, ic[701] = ol, ic[702] = rB, ic[703] = lE, ic[704] = lP, ic[705] = lR, ic[706] = nU) : nU = ic[706], ic[707] !== ao || ic[708] !== od || ic[709] !== ls || ic[710] !== r6 || ic[711] !== og ? (nQ = !ao && !og && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", ls ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(ee.c, {
                    standalone: !0,
                    isCompact: od,
                    onMinimize: r6
                })
            }), ic[707] = ao, ic[708] = od, ic[709] = ls, ic[710] = r6, ic[711] = og, ic[712] = nQ) : nQ = ic[712], ic[713] !== ao || ic[714] !== sp || ic[715] !== op || ic[716] !== lO || ic[717] !== r6 || ic[718] !== ij || ic[719] !== og ? (nG = (ao || og) && (ij?.({
                contextMenuTrigger: sp,
                isCompact: op,
                isDragging: lO,
                onMinimize: r6
            }) ?? sp), ic[713] = ao, ic[714] = sp, ic[715] = op, ic[716] = lO, ic[717] = r6, ic[718] = ij, ic[719] = og, ic[720] = nG) : nG = ic[720], ic[721] !== iv || ic[722] !== ah ? (nJ = ah && (0, i.jsx)(eg.a, {
                hasPagePicker: iv
            }), ic[721] = iv, ic[722] = ah, ic[723] = nJ) : nJ = ic[723];
            let s5 = op && "justify-end";
            ic[724] !== s5 ? (n0 = (0, l.b)("relative flex min-h-0 flex-1 flex-col", s5), ic[724] = s5, ic[725] = n0) : n0 = ic[725], ic[726] !== rv || ic[727] !== l0 || ic[728] !== ov || ic[729] !== aM || ic[730] !== op || ic[731] !== aG || ic[732] !== iY ? (n1 = ov && !aM && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) px-4 py-3 text-sm text-default",
                "aria-hidden": !op,
                style: {
                    bottom: l0,
                    opacity: rv
                },
                ref: aG,
                children: iY ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…",
                    description: "Status shown in the floating response banner while the chat is working"
                })
            }), ic[726] = rv, ic[727] = l0, ic[728] = ov, ic[729] = aM, ic[730] = op, ic[731] = aG, ic[732] = iY, ic[733] = n1) : n1 = ic[733];
            let s6 = ao ? op : aw.followLatestTranscript;
            ic[734] !== aw || ic[735] !== s6 ? (n2 = {
                ...aw,
                isFloatingChatSurface: !0,
                followLatestTranscript: s6
            }, ic[734] = aw, ic[735] = s6, ic[736] = n2) : n2 = ic[736];
            let s7 = ao ? "absolute inset-x-0 overflow-hidden" : "contents";
            ic[737] !== l0 || ic[738] !== ao || ic[739] !== ru ? (n3 = ao ? {
                bottom: l0,
                height: ru
            } : void 0, ic[737] = l0, ic[738] = ao, ic[739] = ru, ic[740] = n3) : n3 = ic[740];
            let s8 = !ao && (op ? "hidden" : "flex"),
                s9 = ao && "absolute inset-x-0 bottom-0 flex",
                ce = ao && "overflow-hidden";
            ic[741] !== s8 || ic[742] !== s9 || ic[743] !== ce ? (n4 = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", s8, s9, ce), ic[741] = s8, ic[742] = s9, ic[743] = ce, ic[744] = n4) : n4 = ic[744], ic[745] !== l0 || ic[746] !== ao || ic[747] !== o3 || ic[748] !== au || ic[749] !== rf || ic[750] !== rg || ic[751] !== rp ? (n5 = ao ? {
                height: au ? void 0 : Math.max(0, o3 - 46 - l0),
                top: au ? 0 : void 0,
                opacity: rg,
                clipPath: rf,
                y: rp
            } : void 0, ic[745] = l0, ic[746] = ao, ic[747] = o3, ic[748] = au, ic[749] = rf, ic[750] = rg, ic[751] = rp, ic[752] = n5) : n5 = ic[752], ic[753] !== ao || ic[754] !== av || ic[755] !== oh || ic[756] !== op || ic[757] !== i8 || ic[758] !== ol || ic[759] !== iG || ic[760] !== lM || ic[761] !== lR ? (n6 = av && (!oh || ao) ? iG?.(() => {
                lR(null), lM("compact")
            }, !op && !i8 && !ol) : null, ic[753] = ao, ic[754] = av, ic[755] = oh, ic[756] = op, ic[757] = i8, ic[758] = ol, ic[759] = iG, ic[760] = lM, ic[761] = lR, ic[762] = n6) : n6 = ic[762], ic[763] !== ao || ic[764] !== ag || ic[765] !== av || ic[766] !== op || ic[767] !== re ? (n7 = !av && (0, i.jsx)(h.a, {
                initial: !1,
                children: (ao || !op) && null != ag && (0, i.jsx)(d.a.div, {
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
                        duration: re,
                        ease: N.e
                    },
                    children: ag
                }, "empty-state")
            }), ic[763] = ao, ic[764] = ag, ic[765] = av, ic[766] = op, ic[767] = re, ic[768] = n7) : n7 = ic[768], ic[769] !== op || ic[770] !== aV || ic[771] !== n4 || ic[772] !== n5 || ic[773] !== n6 || ic[774] !== n7 ? (n8 = (0, i.jsxs)(d.a.div, {
                ref: aV,
                "aria-hidden": op,
                className: n4,
                inert: op,
                style: n5,
                children: [n6, n7]
            }), ic[769] = op, ic[770] = aV, ic[771] = n4, ic[772] = n5, ic[773] = n6, ic[774] = n7, ic[775] = n8) : n8 = ic[775], ic[776] !== ao || ic[777] !== tA || ic[778] !== ov || ic[779] !== op || ic[780] !== r8 || ic[781] !== iZ ? (n9 = ao && op && ov && (0, i.jsx)(eE, {
                label: r8,
                responsePreview: iZ,
                onExpand: tA
            }), ic[776] = ao, ic[777] = tA, ic[778] = ov, ic[779] = op, ic[780] = r8, ic[781] = iZ, ic[782] = n9) : n9 = ic[782], ic[783] !== s7 || ic[784] !== n3 || ic[785] !== n8 || ic[786] !== n9 ? (ie = (0, i.jsxs)(d.a.div, {
                className: s7,
                style: n3,
                children: [n8, n9]
            }), ic[783] = s7, ic[784] = n3, ic[785] = n8, ic[786] = n9, ic[787] = ie) : ie = ic[787], ic[788] !== n2 || ic[789] !== ie ? (it = (0, i.jsx)(em.b, {
                value: n2,
                children: ie
            }), ic[788] = n2, ic[789] = ie, ic[790] = it) : it = ic[790];
            let ct = ij?.({
                contextMenuTrigger: sc,
                isCompact: op,
                isDragging: lO,
                onMinimize: r6
            }) ?? sc;
            ic[791] !== n0 || ic[792] !== n1 || ic[793] !== it || ic[794] !== ct ? (ii = (0, i.jsxs)("div", {
                className: n0,
                children: [n1, it, ct]
            }), ic[791] = n0, ic[792] = n1, ic[793] = it, ic[794] = ct, ic[795] = ii) : ii = ic[795], ic[796] !== lr || ic[797] !== of || ic[798] !== nV || ic[799] !== nX || ic[800] !== nY || ic[801] !== s4 || ic[802] !== nZ || ic[803] !== nU || ic[804] !== nQ || ic[805] !== nG || ic[806] !== nJ || ic[807] !== ii ? (ia = (0, i.jsxs)(d.a.div, {
                "aria-hidden": of,
                animate: nV,
                className: nX,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": lr,
                style: nY,
                initial: !1,
                inert: s4,
                transition: nZ,
                onAnimationComplete: nU,
                children: [nQ, nG, nJ, ii]
            }), ic[796] = lr, ic[797] = of, ic[798] = nV, ic[799] = nX, ic[800] = nY, ic[801] = s4, ic[802] = nZ, ic[803] = nU, ic[804] = nQ, ic[805] = nG, ic[806] = nJ, ic[807] = ii, ic[808] = ia) : ia = ic[808], ic[809] !== D || ic[810] !== r5 || ic[811] !== od || ic[812] !== ol || ic[813] !== rW || ic[814] !== iS || ic[815] !== r4 || ic[816] !== st || ic[817] !== se || ic[818] !== aT || ic[819] !== sk || ic[820] !== nd || ic[821] !== nh || ic[822] !== nm || ic[823] !== sj || ic[824] !== sE || ic[825] !== sM || ic[826] !== np || ic[827] !== nf || ic[828] !== ng || ic[829] !== sP || ic[830] !== sR || ic[831] !== nq || ic[832] !== sZ || ic[833] !== sU || ic[834] !== n_ || ic[835] !== nF || ic[836] !== nA || ic[837] !== nH || ic[838] !== nB || ic[839] !== nK || ic[840] !== ia ? (il = (0, i.jsxs)(D, {
                contentRef: ap,
                allowCompactResize: !0,
                animateSurface: sk,
                contentStyle: nd,
                surfaceStyle: nh,
                currentSize: nm,
                heightLabel: st,
                resizeFromCenter: sj,
                fixedHorizontalEdge: sE,
                isCompact: od,
                isCompactChromeRevealed: sM,
                isMinimized: ol,
                keepSurfaceInset: !0,
                maximumSize: np,
                minimizedContent: nf,
                minimizedSurfaceBounds: rW,
                minimumSize: ng,
                prefersCompactPresentation: !0,
                resizable: sP,
                background: sR,
                sectionRef: lb,
                sectionProps: nq,
                shouldReduceMotion: aT,
                variant: sZ,
                verticalResizeEdge: sU,
                widthLabel: se,
                onResize: r4,
                onResizeEnd: r5,
                onResizingChange: n_,
                children: [nF, nA, nH, nB, nK, ia, iS]
            }), ic[809] = D, ic[810] = r5, ic[811] = od, ic[812] = ol, ic[813] = rW, ic[814] = iS, ic[815] = r4, ic[816] = st, ic[817] = se, ic[818] = aT, ic[819] = sk, ic[820] = nd, ic[821] = nh, ic[822] = nm, ic[823] = sj, ic[824] = sE, ic[825] = sM, ic[826] = np, ic[827] = nf, ic[828] = ng, ic[829] = sP, ic[830] = sR, ic[831] = nq, ic[832] = sZ, ic[833] = sU, ic[834] = n_, ic[835] = nF, ic[836] = nA, ic[837] = nH, ic[838] = nB, ic[839] = nK, ic[840] = ia, ic[841] = il) : il = ic[841];
            let cn = il;
            return ic[842] !== aN ? (io = {
                id: aN
            }, ic[842] = aN, ic[843] = io) : io = ic[843], ic[844] !== ao || ic[845] !== aQ ? (ir = ao && (0, i.jsx)("div", {
                ref: aQ,
                "aria-hidden": !0,
                className: (0, l.b)(ep.a, "pointer-events-none invisible absolute")
            }), ic[844] = ao, ic[845] = aQ, ic[846] = ir) : ir = ic[846], ic[847] !== cn || ic[848] !== io || ic[849] !== ir ? (is = (0, i.jsxs)(G.a, {
                value: io,
                children: [ir, cn]
            }), ic[847] = cn, ic[848] = io, ic[849] = ir, ic[850] = is) : is = ic[850], is
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
            return t instanceof Node && (e.contains(t) || t instanceof Element && (null != t.closest("[data-composer-overlay-floating-ui], [data-content-search-bar]") || null != t.closest("[data-floating-chat-annotation-layer]") || t.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === n))
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
                let t, n, l, o = (0, a.c)(9),
                    {
                        children: r,
                        isCompact: s,
                        isVisible: c,
                        isDisabled: u
                    } = e,
                    d = !c || !!u || void 0,
                    h = void 0 !== s && s ? Number(c) : "var(--quick-chat-expansion, 1)";
                o[0] !== h ? (t = {
                    opacity: h
                }, o[0] = h, o[1] = t) : t = o[1];
                let m = !c || !!u || void 0;
                return o[2] !== r ? (n = (0, i.jsx)("div", {
                    className: "flex h-toolbar cursor-interaction touch-none items-center justify-between border-b border-default px-2 select-none",
                    children: r
                }), o[2] = r, o[3] = n) : n = o[3], o[4] !== d || o[5] !== t || o[6] !== m || o[7] !== n ? (l = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden",
                    "aria-hidden": d,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: m,
                    children: n
                }), o[4] = d, o[5] = t, o[6] = m, o[7] = n, o[8] = l) : l = o[8], l
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
                        presentationToggle: y
                    } = e,
                    w = void 0 !== f && f,
                    S = !b && "shrink-0";
                m[0] !== S ? (t = (0, l.b)("relative min-h-0 overflow-hidden", S), m[0] = S, m[1] = t) : t = m[1];
                let z = !v || !!x || void 0,
                    C = 46 * !!v,
                    k = +!!v;
                m[2] !== C || m[3] !== k ? (n = {
                    height: C,
                    opacity: k
                }, m[2] = C, m[3] = k, m[4] = n) : n = m[4];
                let j = !v || !!x || void 0;
                m[5] !== p || m[6] !== w ? (r = p ? {
                    duration: .3,
                    ease: u.e,
                    ...w ? {
                        opacity: {
                            duration: 0
                        }
                    } : {}
                } : {
                    duration: 0
                }, m[5] = p, m[6] = w, m[7] = r) : r = m[7], m[8] !== b || m[9] !== y ? (s = null != y ? (0, i.jsx)("button", {
                    className: "pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    "aria-label": y.label,
                    "aria-expanded": !b,
                    type: "button",
                    onClick: y.onToggle
                }) : null, m[8] = b, m[9] = y, m[10] = s) : s = m[10];
                let E = !w && null != y && b && "cursor-n-resize",
                    M = !w && null != y && !b && "cursor-s-resize",
                    P = (w || null == y) && "cursor-interaction",
                    R = b && "mx-1.5 border-b border-default px-2",
                    N = !b && "px-3";
                return m[11] !== E || m[12] !== M || m[13] !== P || m[14] !== R || m[15] !== N ? (c = (0, l.b)("flex h-toolbar touch-none select-none items-center justify-between", E, M, P, R, N), m[11] = E, m[12] = M, m[13] = P, m[14] = R, m[15] = N, m[16] = c) : c = m[16], m[17] !== g || m[18] !== c ? (d = (0, i.jsx)("div", {
                    className: c,
                    children: g
                }), m[17] = g, m[18] = c, m[19] = d) : d = m[19], m[20] !== s || m[21] !== d || m[22] !== t || m[23] !== z || m[24] !== n || m[25] !== j || m[26] !== r ? (h = (0, i.jsxs)(o.a.header, {
                    className: t,
                    "aria-hidden": z,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: j,
                    transition: r,
                    children: [s, d]
                }), m[20] = s, m[21] = d, m[22] = t, m[23] = z, m[24] = n, m[25] = j, m[26] = r, m[27] = h) : h = m[27], h
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