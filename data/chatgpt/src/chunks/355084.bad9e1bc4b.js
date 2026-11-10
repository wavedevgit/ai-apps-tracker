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
            let t, n, M, I, ez, eC, eR, eN, eL, eT, eD, eq, e_, eF, eI, eA, eH, eW, eB, eO, e$, eK, eV, eX, eY, eZ, eU, eQ, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tm, tp, tf, tg, tv, tb, tx, ty, tw, tS, tz, tC, tk, tj, tE, tM, tP, tR, tN, tL, tT, tD, tq, t_, tF, tI, tA, tH, tW, tB, tO, t$, tK, tV, tX, tY, tZ, tU, tQ, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, nm, np, nf, ng, nv, nb, nx, ny, nw, nS, nz, nC, nk, nj, nE, nM, nP, nR, nN, nL, nT, nD, nq, n_, nF, nI, nA, nH, nW, nB, nO, n$, nK, nV, nX, nY, nZ, nU, nQ, nG, nJ, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, ie, it, ii, ia, il, io, ir, is, ic, iu = (0, a.c)(867),
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
                o3 = (l1 || 46) + (ae && ov && oH ? 46 : 0) + (ob ? aY : 0) + 6 * !ar,
                o4 = eP(oU.height, Math.min(Math.max(400, l1 + 46), oJ), oJ),
                o5 = Math.min(oh ? o2 : Math.max(400, o2), oJ),
                o6 = a7 ? o1 : Math.min(372, o1),
                o7 = eP(oh ? o2 : oU.height, o5, oJ),
                o8 = (0, r.a)(o7),
                o9 = (0, p.useRef)(!1),
                re = l1 > 0,
                rt = i9 || aD || lJ || !ar && (iL || null != lR) ? 0 : .3,
                rn = eP(oU.width + 12, o6, o1),
                ri = (0, et.d)(ls, {
                    height: o7,
                    width: rn
                }, oG, a6, 12, oZ),
                ra = (0, r.a)(0);
            iu[138] === Symbol.for("react.memo_cache_sentinel") ? (tt = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, iu[138] = tt) : tt = iu[138];
            let rl = (0, r.a)(tt);
            iu[139] !== ag || iu[140] !== ad || iu[141] !== au || iu[142] !== as || iu[143] !== rl || iu[144] !== ra || iu[145] !== iv || iu[146] !== aD || iu[147] !== aT || iu[148] !== ac ? (tn = () => {
                let e, t = ad && au && as ? lx.current?.offsetParent : null;
                if (ad && au && as && t instanceof HTMLElement) {
                    let n = as.getBoundingClientRect(),
                        i = t.getBoundingClientRect(),
                        a = (0, k.b)(n.width, aT),
                        l = ac?.get() ?? a,
                        o = (0, C.f)(au.contentPaneWidthRatio.get(), l, "unified"),
                        r = ag ? o : l - o;
                    e = `--floating-chat-dock-${iv}`, as.style.setProperty(e, `${r}px`), rl.set({
                        x: (0, k.b)(n.left - i.left, aT) + (a - ("left" === iv ? l : r)) + 4 - 6,
                        y: (0, k.b)(n.top - i.top, aT) + 4,
                        width: r - 8 + 12,
                        height: (0, k.b)(i.bottom - n.top, aT) - 8 + 6
                    })
                }
                let n = +!!ad,
                    i = ra.get() === n ? null : (0, c.a)(ra, n, {
                        duration: .15 * !aD,
                        ease: N.e
                    });
                return () => {
                    i?.stop(), null != e && as?.style.removeProperty(e)
                }
            }, iu[139] = ag, iu[140] = ad, iu[141] = au, iu[142] = as, iu[143] = rl, iu[144] = ra, iu[145] = iv, iu[146] = aD, iu[147] = aT, iu[148] = ac, iu[149] = tn) : tn = iu[149], iu[150] !== ig || iu[151] !== ag || iu[152] !== ad || iu[153] !== au || iu[154] !== as || iu[155] !== rl || iu[156] !== ra || iu[157] !== iv || iu[158] !== aD || iu[159] !== aT || iu[160] !== ac ? (ti = [ig, 12, ag, ad, au, as, rl, ra, iv, aD, ac, aT], iu[150] = ig, iu[151] = ag, iu[152] = ad, iu[153] = au, iu[154] = as, iu[155] = rl, iu[156] = ra, iu[157] = iv, iu[158] = aD, iu[159] = aT, iu[160] = ac, iu[161] = ti) : ti = iu[161], (0, p.useLayoutEffect)(tn, ti);
            let ro = (0, s.a)(() => ra.get() * (rl.get().x - ri.x - lg.get())),
                rr = (0, s.a)(() => ra.get() * (rl.get().y - ri.y - lv.get())),
                rs = (0, s.a)(() => 0 === ra.get() ? "100%" : rn + ra.get() * (rl.get().width - rn));
            iu[162] !== o8 || iu[163] !== rl || iu[164] !== ra ? (ta = () => o8.get() + ra.get() * (rl.get().height - o8.get()), iu[162] = o8, iu[163] = rl, iu[164] = ra, iu[165] = ta) : ta = iu[165];
            let rc = (0, s.a)(ta);
            iu[166] !== o8 || iu[167] !== o3 || iu[168] !== o4 || iu[169] !== ae || iu[170] !== of || iu[171] !== ra ? (tl = () => Math.max(ra.get(), ae && of ? 0 : eP((o8.get() - o3) / Math.max(1, o4 - o3), 0, 1)), iu[166] = o8, iu[167] = o3, iu[168] = o4, iu[169] = ae, iu[170] = of, iu[171] = ra, iu[172] = tl) : tl = iu[172];
            let ru = (0, s.a)(tl);
            iu[173] !== l1 || iu[174] !== ru || iu[175] !== ae || iu[176] !== ah || iu[177] !== oH || iu[178] !== rc || iu[179] !== ra || iu[180] !== ov ? (to = () => {
                let e = ae && ov && oH ? 1 : ru.get();
                return Math.max(0, rc.get() - l1 - 46 * (e - (ah ? 0 : ra.get())))
            }, iu[173] = l1, iu[174] = ru, iu[175] = ae, iu[176] = ah, iu[177] = oH, iu[178] = rc, iu[179] = ra, iu[180] = ov, iu[181] = to) : to = iu[181];
            let rd = (0, s.a)(to),
                rh = (0, r.a)(0),
                rm = (0, r.a)(0),
                rp = Math.max(0, o4 - 46 - l1);
            iu[182] !== rh || iu[183] !== aY || iu[184] !== rp || iu[185] !== ru || iu[186] !== aP || iu[187] !== ad ? (tr = () => ad || !aP ? 0 : (1 - ru.get()) * (rp - aY + 12 - rh.get()), iu[182] = rh, iu[183] = aY, iu[184] = rp, iu[185] = ru, iu[186] = aP, iu[187] = ad, iu[188] = tr) : tr = iu[188];
            let rf = (0, s.a)(tr);
            iu[189] !== rm || iu[190] !== rh || iu[191] !== rp || iu[192] !== ru || iu[193] !== aP ? (ts = () => {
                if (!aP || 1 === ru.get()) return "none";
                let e = 1 - ru.get(),
                    t = Math.max(0, rh.get()) * e,
                    n = Math.max(0, rp - rh.get() - rm.get()) * e;
                return `inset(${t}px 0 ${n}px 0)`
            }, iu[189] = rm, iu[190] = rh, iu[191] = rp, iu[192] = ru, iu[193] = aP, iu[194] = ts) : ts = iu[194];
            let rg = (0, s.a)(ts);
            iu[195] !== ru || iu[196] !== aP ? (tc = () => aP ? 1 : ru.get(), iu[195] = ru, iu[196] = aP, iu[197] = tc) : tc = iu[197];
            let rv = (0, s.a)(tc);
            iu[198] !== ru ? (tu = () => 1 - ru.get(), iu[198] = ru, iu[199] = tu) : tu = iu[199];
            let rb = (0, s.a)(tu);
            iu[200] !== rm || iu[201] !== rh || iu[202] !== aP || iu[203] !== aV || iu[204] !== aT ? (td = () => {
                if (null == aV || !aP) return null;
                let e = aV.querySelectorAll('[data-markdown-text-style="assistant-message"]'),
                    t = e.item(e.length - 1);
                if (null == t) return null;
                let n = t.getBoundingClientRect(),
                    i = aV.getBoundingClientRect(),
                    a = parseFloat(getComputedStyle(t.firstElementChild ?? t).lineHeight),
                    l = Math.min((0, k.b)(n.height, aT), Number.isFinite(a) ? 2 * a : 56, 56);
                return rh.set((0, k.b)(n.top - i.top, aT)), rm.set(l), aZ(l + 24), t
            }, iu[200] = rm, iu[201] = rh, iu[202] = aP, iu[203] = aV, iu[204] = aT, iu[205] = td) : td = iu[205];
            let rx = (0, p.useEffectEvent)(td);
            iu[206] !== ar || iu[207] !== aP || iu[208] !== of || iu[209] !== i9 || iu[210] !== rx || iu[211] !== aV ? (th = () => {
                if (!ar || i9 || null == aV || !aP) return;
                let e = null,
                    t = new ResizeObserver(() => u.b.read(n)),
                    n = () => {
                        let n = rx();
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
            }, iu[206] = ar, iu[207] = aP, iu[208] = of, iu[209] = i9, iu[210] = rx, iu[211] = aV, iu[212] = th) : th = iu[212], iu[213] !== ar || iu[214] !== aP || iu[215] !== of || iu[216] !== i9 || iu[217] !== aV ? (tm = [ar, aP, of, i9, aV], iu[213] = ar, iu[214] = aP, iu[215] = of, iu[216] = i9, iu[217] = aV, iu[218] = tm) : tm = iu[218], (0, p.useLayoutEffect)(th, tm), iu[219] !== o8 || iu[220] !== l1 || iu[221] !== ar || iu[222] !== o7 || iu[223] !== re || iu[224] !== oh || iu[225] !== lI || iu[226] !== rx || iu[227] !== rt ? (tp = () => {
                let e, t = !o9.current && oh;
                if (re && (o9.current = !0), lI || t || 0 === rt) return void o8.jump(o7);
                let n = () => {
                    if (ar) {
                        let e = lb.current;
                        if (null != e && e.offsetHeight !== Math.round(l1)) return void l2(e.offsetHeight);
                        rx()
                    }
                    let t = (0, c.a)(o8, o7, {
                        duration: rt,
                        ease: N.e
                    });
                    e = () => t.stop()
                };
                return ar ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, iu[219] = o8, iu[220] = l1, iu[221] = ar, iu[222] = o7, iu[223] = re, iu[224] = oh, iu[225] = lI, iu[226] = rx, iu[227] = rt, iu[228] = tp) : tp = iu[228];
            let ry = (0, p.useEffectEvent)(tp),
                rw = ar ? l1 : null,
                rS = ar ? null : re,
                rz = ar ? null : oh;
            iu[229] !== ry ? (tf = () => ry(), iu[229] = ry, iu[230] = tf) : tf = iu[230], iu[231] !== o7 || iu[232] !== rS || iu[233] !== rz || iu[234] !== rw || iu[235] !== rt ? (tg = [o7, rt, rw, rS, rz], iu[231] = o7, iu[232] = rS, iu[233] = rz, iu[234] = rw, iu[235] = rt, iu[236] = tg) : tg = iu[236], (0, p.useLayoutEffect)(tf, tg);
            let rC = ar ? ru : void 0;
            iu[237] !== rC ? (tv = {
                "--quick-chat-expansion": rC
            }, iu[237] = rC, iu[238] = tv) : tv = iu[238];
            let rk = tv,
                rj = {
                    height: Math.min(36, oJ),
                    width: Math.min(36, o1)
                },
                rE = (0, et.f)(iL ? ls : lU?.dockPosition ?? ll, iw),
                rM = (0, et.d)(rE, rj, oG, a6, 0, oZ),
                rP = iL ? rj : {
                    height: o7,
                    width: rn
                },
                rR = iL ? rM : ri,
                rN = iL ? 16 : 10,
                rL = Math.max(rN, a6 - rP.width - rN),
                rT = oZ + rN,
                rD = Math.max(rN, oG - rP.height - rN);
            iu[239] !== rN || iu[240] !== rL || iu[241] !== rT || iu[242] !== rD ? (tb = {
                left: rN,
                right: rL,
                top: rT,
                bottom: rD
            }, iu[239] = rN, iu[240] = rL, iu[241] = rT, iu[242] = rD, iu[243] = tb) : tb = iu[243];
            let rq = tb;
            iu[244] === Symbol.for("react.memo_cache_sentinel") ? (tx = () => {
                lf.current = null
            }, iu[244] = tx) : tx = iu[244], iu[245] !== ig || iu[246] !== aT ? (ty = [ig, aT], iu[245] = ig, iu[246] = aT, iu[247] = ty) : ty = iu[247], (0, p.useLayoutEffect)(tx, ty);
            let r_ = e => {
                    if (!i5) return;
                    lf.current = null == ig ? null : lx.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, k.b)(e.clientX - (lf.current?.left ?? 0), aT),
                        y: (0, k.b)(e.clientY - (lf.current?.top ?? 0), aT)
                    };
                    lm.current = {
                        x: t.x - rR.x - lg.get(),
                        y: t.y - rR.y - lv.get()
                    }, lp.current = {
                        point: t,
                        target: null
                    }, ld.start(e)
                },
                rF = (0, et.d)(rE, {
                    height: o7,
                    width: rn
                }, oG, a6, 12, oZ),
                rI = rM.x - rF.x,
                rA = rM.y - rF.y,
                rH = rn - rI - rj.width,
                rW = o7 - rA - rj.height;
            iu[248] !== rI || iu[249] !== rA || iu[250] !== rH || iu[251] !== rW ? (tw = {
                top: rA,
                right: rH,
                bottom: rW,
                left: rI
            }, iu[248] = rI, iu[249] = rA, iu[250] = rH, iu[251] = rW, iu[252] = tw) : tw = iu[252];
            let rB = tw,
                rO = `inset(${rB.top}px ${rB.right}px ${rB.bottom}px ${rB.left}px round var(--floating-panel-radius))`,
                r$ = (0, s.a)(() => {
                    let e = or.get(),
                        t = o8.get() - o7,
                        n = e * (rB.top + (lc ? 0 : t)),
                        i = 6 + e * (rB.right - 6),
                        a = 6 + e * (rB.bottom + (lc ? t : 0) - 6),
                        l = 6 + e * (rB.left - 6),
                        o = ra.get(),
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
            iu[253] !== r$ ? (tS = () => r$.get().top, iu[253] = r$, iu[254] = tS) : tS = iu[254];
            let rK = (0, s.a)(tS);
            iu[255] !== r$ ? (tz = () => r$.get().right, iu[255] = r$, iu[256] = tz) : tz = iu[256];
            let rV = (0, s.a)(tz);
            iu[257] !== r$ ? (tC = () => r$.get().bottom, iu[257] = r$, iu[258] = tC) : tC = iu[258];
            let rX = (0, s.a)(tC);
            iu[259] !== r$ ? (tk = () => r$.get().left, iu[259] = r$, iu[260] = tk) : tk = iu[260];
            let rY = (0, s.a)(tk);
            iu[261] !== r$ ? (tj = () => r$.get().radius, iu[261] = r$, iu[262] = tj) : tj = iu[262];
            let rZ = (0, s.a)(tj);
            iu[263] !== r$ ? (tE = () => r$.get().clip, iu[263] = r$, iu[264] = tE) : tE = iu[264];
            let rU = (0, s.a)(tE);
            iu[265] !== ar || iu[266] !== oo || iu[267] !== or || iu[268] !== aD ? (tM = () => {
                if (!ar) return;
                let e = (0, c.a)(or, +!!oo, {
                    duration: .3 * !aD,
                    ease: N.e
                });
                return () => e.stop()
            }, tP = [ar, oo, or, aD], iu[265] = ar, iu[266] = oo, iu[267] = or, iu[268] = aD, iu[269] = tM, iu[270] = tP) : (tM = iu[269], tP = iu[270]), (0, p.useLayoutEffect)(tM, tP);
            let rQ = lc ? {
                    top: rA + rj.height
                } : {
                    bottom: o7 - rA
                },
                rG = (0, p.useRef)({
                    dockPosition: ls,
                    dockThreadKey: ay,
                    isMinimized: iL
                });
            iu[271] !== iq ? (tR = () => {
                iq?.(null)
            }, iu[271] = iq, iu[272] = tR) : tR = iu[272];
            let rJ = (0, p.useEffectEvent)(tR),
                r0 = (0, p.useEffectEvent)(e => {
                    let t = (0, et.d)(e, {
                        height: o7,
                        width: rn
                    }, oG, a6, 12, oZ);
                    lg.stop(), lv.stop(), lg.jump(lg.get() + t.x - ri.x), lv.jump(lv.get() + t.y - ri.y);
                    let n = aD ? {
                        duration: 0
                    } : ew;
                    (0, c.a)(lg, 0, n), (0, c.a)(lv, 0, n)
                });
            (0, p.useLayoutEffect)(() => {
                let e = rG.current;
                if (rG.current = {
                        dockPosition: ls,
                        dockThreadKey: ay,
                        isMinimized: iL
                    }, e.dockThreadKey !== ay) {
                    lh.current = !0, lG.current = !0, ld.cancel(), rJ(), lg.jump(0), lv.jump(0);
                    return
                }
                if (i9) {
                    lg.jump(0), lv.jump(0);
                    return
                }
                e.isMinimized !== iL && r0(e.dockPosition)
            }, [ls, ay, ld, lg, lv, i9, iL]), iu[273] !== lg || iu[274] !== lv ? (tN = () => () => {
                lg.stop(), lv.stop()
            }, tL = [lg, lv], iu[273] = lg, iu[274] = lv, iu[275] = tN, iu[276] = tL) : (tN = iu[275], tL = iu[276]), (0, p.useLayoutEffect)(tN, tL);
            let r1 = e => {
                let t, n = {
                    ...rP,
                    left: rR.x + lg.get(),
                    top: rR.y + lv.get()
                };
                null != ig && null == lf.current && (lf.current = lx.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == ig ? null : lf.current,
                    a = {
                        x: e.point.x - (0, k.b)(i?.left ?? 0, aT),
                        y: e.point.y - (0, k.b)(i?.top ?? 0, aT)
                    };
                t = ar ? (0, et.b)(n, oG, a6, ex.filter(e => !iL || "bottom-right" === e).map(e => (0, et.f)(e, iw)), 12 * !iL, oZ) : (0, et.e)({
                    ...n,
                    left: n.width >= a6 / 2 - 2 * rN ? a.x - n.width / 2 : n.left
                }, oG, a6, iL);
                let l = null == iw ? t : (0, et.f)(t, iw),
                    o = {
                        x: ar ? a6 - a.x : Math.min(a.x, a6 - a.x),
                        y: ar ? oG - a.y : Math.min(a.y - oZ, oG - a.y)
                    },
                    r = o.x <= 16 + rj.width && o.y <= 16 + rj.height;
                if (ar && !iL) {
                    let e = lp.current;
                    if (null != e) {
                        let t = a.x - e.point.x,
                            n = a.y - e.point.y;
                        Math.hypot(t, n) >= 8 && (t >= 0 && n > 0 && n >= t ? e.target = "minimize" : t > 0 && t > 2 * Math.abs(n) ? e.target = null : (t < 0 || n < 0) && (e.target = null), e.point = a)
                    }
                    let n = a.y - lm.current.y + rP.height - oG;
                    return {
                        dockPosition: l,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        suppressEdgeDrop: r,
                        shouldMinimize: "bottom-right" === l && e?.target === "minimize" && n >= .5 * rP.width
                    }
                }
                let s = (0, et.d)(l, rP, oG, a6, 12, oZ),
                    c = !iL && "bottom-center" !== l && 16 >= Math.abs(n.left - s.x) && 16 >= Math.abs(n.top - s.y);
                return {
                    dockPosition: l,
                    requestedDockPosition: t,
                    isNearDock: c,
                    suppressEdgeDrop: r,
                    shouldMinimize: c && r
                }
            };
            iu[277] !== i5 || iu[278] !== ar || iu[279] !== ay || iu[280] !== iP || iu[281] !== ai ? (tT = (e, t) => {
                i5 && (null != ay || ar && !t ? (0, en.c)(ai, {
                    threadKey: ay ?? null,
                    minimized: t
                }, e, iP) : la(n => ({
                    expanded: t ? n.expanded : e,
                    minimized: t ? (0, et.a)(e) : n.minimized
                })))
            }, iu[277] = i5, iu[278] = ar, iu[279] = ay, iu[280] = iP, iu[281] = ai, iu[282] = tT) : tT = iu[282];
            let r2 = tT,
                r3 = (e, t, n) => {
                    let i = void 0 === n ? rP : n,
                        a = (0, et.d)(ls, rP, oG, a6, 12 * !iL, oZ),
                        l = {
                            x: a.x + lg.get(),
                            y: a.y + lv.get()
                        },
                        o = (0, et.d)((0, et.f)(e, iw), i, oG, a6, 12 * !iL, oZ);
                    lg.stop(), lv.stop(), lg.jump(l.x - o.x), lv.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        r2(e, iL)
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
                r4 = (0, p.useEffectEvent)(() => {
                    lh.current = !0, ld.cancel(), iq?.(null), r3(ls, !1), lQ(null), lN(null), lK(!1)
                });
            iu[283] !== r4 || iu[284] !== ld || iu[285] !== l$ ? (tD = () => {
                if (!l$) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), r4())
                    },
                    t = () => r4();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    lh.current = !0, ld.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, iu[283] = r4, iu[284] = ld, iu[285] = l$, iu[286] = tD) : tD = iu[286], iu[287] !== ld || iu[288] !== l$ ? (tq = [ld, l$], iu[287] = ld, iu[288] = l$, iu[289] = tq) : tq = iu[289], (0, p.useLayoutEffect)(tD, tq);
            let r5 = (e, t) => {
                    let n = ar && oV ? 0 : (0, et.c)(ls, e, {
                            height: o7,
                            width: rn
                        }, lg.get(), t.width, oG, a6, 12),
                        i = ri.y + lv.get(),
                        a = (0, et.d)(ls, t, oG, a6, 12, oZ),
                        l = eP(i + (lc ? 0 : o7 - t.height), oZ + 10, oG - t.height - 10);
                    lg.stop(), lv.stop(), (0, f.flushSync)(() => {
                        l9({
                            height: oh ? oU.height : t.height,
                            width: t.width - 12
                        })
                    }), lg.jump(n), lv.jump(l - a.y)
                },
                r6 = e => {
                    el(ai, {
                        height: oh ? oU.height : e.height,
                        width: e.width - 12
                    }, () => iI?.(ls)), r3(ls, !1, e)
                };
            iu[290] !== ar || iu[291] !== l$ || iu[292] !== iF || iu[293] !== lT || iu[294] !== lQ || iu[295] !== lN ? (t_ = () => {
                lT(!1), lZ(!l$), lQ(null), lN(ar ? null : {
                    target: "minimized"
                }), iF(!0)
            }, iu[290] = ar, iu[291] = l$, iu[292] = iF, iu[293] = lT, iu[294] = lQ, iu[295] = lN, iu[296] = t_) : t_ = iu[296];
            let r7 = t_;
            if (iu[297] !== ar || iu[298] !== i8 || iu[299] !== ao || iu[300] !== oh || iu[301] !== i9 || iu[302] !== iL || iu[303] !== i_ || iu[304] !== iF || iu[305] !== lM || iu[306] !== lT || iu[307] !== lP || iu[308] !== lN) {
                let e, t, n, i;
                tB = () => {
                    (0, f.flushSync)(() => {
                        lT(!1), lN(ar ? null : {
                            target: lM
                        }), iF(!1)
                    }), tA()
                }, iu[316] !== oh || iu[317] !== lP || iu[318] !== lN ? (e = () => {
                    lN(null), lP(oh ? "expanded" : "compact")
                }, iu[316] = oh, iu[317] = lP, iu[318] = lN, iu[319] = e) : e = iu[319], tO = e, tF = !i9 && !iL && (null != i_ || !oh && !i8), iu[320] !== i_ || iu[321] !== lP || iu[322] !== lN ? (t = () => {
                    null != i_ ? i_() : (lN(null), lP("compact"))
                }, iu[320] = i_, iu[321] = lP, iu[322] = lN, iu[323] = t) : t = iu[323], tI = t, iu[324] !== tF || iu[325] !== tI ? (n = e => {
                    !tF || "Escape" !== e.key || e.defaultPrevented || e.repeat || e.nativeEvent.isComposing || (e.preventDefault(), e.stopPropagation(), tI())
                }, iu[324] = tF, iu[325] = tI, iu[326] = n) : n = iu[326], tW = n, iu[327] !== ao ? (i = () => {
                    let e = lb.current;
                    return ao ? (0, Z.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, iu[327] = ao, iu[328] = i) : i = iu[328], tH = i, tA = () => {
                    ar && (lN(null), lP("expanded")), tH()?.focus({
                        preventScroll: !0
                    })
                }, iu[297] = ar, iu[298] = i8, iu[299] = ao, iu[300] = oh, iu[301] = i9, iu[302] = iL, iu[303] = i_, iu[304] = iF, iu[305] = lM, iu[306] = lT, iu[307] = lP, iu[308] = lN, iu[309] = tF, iu[310] = tI, iu[311] = tA, iu[312] = tH, iu[313] = tW, iu[314] = tB, iu[315] = tO
            } else tF = iu[309], tI = iu[310], tA = iu[311], tH = iu[312], tW = iu[313], tB = iu[314], tO = iu[315];
            let r8 = !i9 && ao;
            iu[329] !== tH || iu[330] !== ao || iu[331] !== iL ? (t$ = () => {
                if (null == lx.current || null != lx.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (ao) return iL;
                let e = tH();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !lb.current?.contains(t) || t === lb.current
            }, iu[329] = tH, iu[330] = ao, iu[331] = iL, iu[332] = t$) : t$ = iu[332], iu[333] !== r8 || iu[334] !== t$ ? (tK = {
                enabled: r8,
                isActive: t$
            }, iu[333] = r8, iu[334] = t$, iu[335] = tK) : tK = iu[335], (0, K.a)("focusMainChat", iL ? tB : tA, tK), iu[336] !== aR || iu[337] !== oh ? (tV = aR.formatMessage(oh ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat",
                description: "Accessible label for expanding a compact floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat",
                description: "Accessible label for collapsing a floating chat"
            }), iu[336] = aR, iu[337] = oh, iu[338] = tV) : tV = iu[338];
            let r9 = tV;
            iu[339] !== op || iu[340] !== r9 || iu[341] !== tO ? (tX = op ? {
                label: r9,
                onToggle: tO
            } : void 0, iu[339] = op, iu[340] = r9, iu[341] = tO, iu[342] = tX) : tX = iu[342];
            let se = tX;
            iu[343] !== aR ? (tY = aR.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width",
                description: "Accessible label for resizing the chat width"
            }), iu[343] = aR, iu[344] = tY) : tY = iu[344];
            let st = tY;
            iu[345] !== aR ? (tZ = aR.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height",
                description: "Accessible label for resizing the chat height"
            }), iu[345] = aR, iu[346] = tZ) : tZ = iu[346];
            let sn = tZ;
            iu[347] !== ae || iu[348] !== lP || iu[349] !== lN ? (tU = () => {
                lN(null), ae && lP("expanded")
            }, iu[347] = ae, iu[348] = lP, iu[349] = lN, iu[350] = tU) : tU = iu[350];
            let si = (0, eb.a)(tU);
            iu[351] !== ar || iu[352] !== si || iu[353] !== ae || iu[354] !== lN ? (tQ = ar || ae ? si : () => lN(null), iu[351] = ar, iu[352] = si, iu[353] = ae, iu[354] = lN, iu[355] = tQ) : tQ = iu[355];
            let sa = {
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
                sl = {
                    isMoving: l$ || lJ || lV,
                    composerContentHeight: l3,
                    dockedReservePx: l1 > l3 + 6 * !!ar ? o7 + 10 : 0
                };
            iu[356] !== i9 || iu[357] !== iE ? (tG = function(e) {
                !i9 && null != iE && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (lx.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, iu[356] = i9, iu[357] = iE, iu[358] = tG) : tG = iu[358];
            let so = tG;
            iu[359] !== ae ? (tJ = function(e) {
                !ae && e.target instanceof Element && (!lx.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, iu[359] = ae, iu[360] = tJ) : tJ = iu[360];
            let sr = tJ,
                ss = ip(sa, sl),
                sc = tF ? tI : null;
            iu[361] !== l7 ? (t0 = e => {
                lb.current = e, l7(e)
            }, iu[361] = l7, iu[362] = t0) : t0 = iu[362], iu[363] !== oz || iu[364] !== of || iu[365] !== og || iu[366] !== ox ? (t1 = oz && !og && (!of || ox) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, iu[363] = oz, iu[364] = of, iu[365] = og, iu[366] = ox, iu[367] = t1) : t1 = iu[367], iu[368] !== a$ ? (t2 = {
                target: a$,
                homeBannerPlacement: "inline"
            }, iu[368] = a$, iu[369] = t2) : t2 = iu[369];
            let su = (0, i.jsxs)("div", {
                ref: t0,
                className: (0, l.b)(T.a.floatingComposerInset, "mt-auto shrink-0", oh && lc && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: so,
                onContextMenu: sr,
                children: [t1, (0, i.jsx)(em.b, {
                    value: {
                        ...aS,
                        hasComposerSurface: oz,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !i9 && !oh && !iL,
                        floatingChatSurfaceRef: lx,
                        onFloatingDictationRowChange: lW,
                        floatingComposerPresentation: sa,
                        transcriptTarget: aV,
                        followLatestTranscript: ar ? of : aS.followLatestTranscript
                    },
                    children: (0, i.jsx)(Y.a, {
                        value: sc,
                        children: (0, i.jsx)(X.a, {
                            value: t2,
                            children: ss
                        })
                    })
                })]
            });
            iu[370] !== ar || iu[371] !== of || iu[372] !== r7 ? (t3 = ar ? null : (0, i.jsx)(ee.c, {
                isCompact: of,
                onMinimize: r7
            }), iu[370] = ar, iu[371] = of, iu[372] = r7, iu[373] = t3) : t3 = iu[373];
            let sd = t3;
            iu[374] !== ar || iu[375] !== o_ || iu[376] !== sd || iu[377] !== an || iu[378] !== iC || iu[379] !== oB || iu[380] !== iW || iu[381] !== iB || iu[382] !== aN || iu[383] !== aM || iu[384] !== oO ? (t4 = iC ? iC({
                leadingControl: sd
            }) : (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-1",
                children: [sd, o_ && null != aM ? (0, i.jsx)("div", {
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
            }), iu[374] = ar, iu[375] = o_, iu[376] = sd, iu[377] = an, iu[378] = iC, iu[379] = oB, iu[380] = iW, iu[381] = iB, iu[382] = aN, iu[383] = aM, iu[384] = oO, iu[385] = t4) : t4 = iu[385];
            let sh = t4;
            iu[386] !== aH || iu[387] !== of || iu[388] !== l$ || iu[389] !== r7 || iu[390] !== iE ? (t5 = iE?.({
                isCompact: of,
                isDragging: l$,
                open: aH,
                onMinimize: r7,
                onOpenChange: aW
            }), iu[386] = aH, iu[387] = of, iu[388] = l$, iu[389] = r7, iu[390] = iE, iu[391] = t5) : t5 = iu[391], iu[392] !== ar || iu[393] !== of || iu[394] !== r7 ? (t6 = ar && (0, i.jsx)(ee.c, {
                isCompact: of,
                onMinimize: r7
            }), iu[392] = ar, iu[393] = of, iu[394] = r7, iu[395] = t6) : t6 = iu[395], iu[396] !== sh || iu[397] !== t5 || iu[398] !== t6 ? (t7 = (0, i.jsxs)(i.Fragment, {
                children: [sh, t5, t6]
            }), iu[396] = sh, iu[397] = t5, iu[398] = t6, iu[399] = t7) : t7 = iu[399];
            let sm = t7,
                sp = am ? "hidden" : "contents";
            iu[400] !== i7 || iu[401] !== ar || iu[402] !== sm || iu[403] !== i6 || iu[404] !== ae || iu[405] !== of || iu[406] !== oH || iu[407] !== iL || iu[408] !== se || iu[409] !== lR || iu[410] !== aD || iu[411] !== ov ? (t8 = ar ? (0, i.jsx)(ee.a, {
                isCompact: ae && of,
                isVisible: oH,
                isDisabled: i6,
                children: sm
            }) : (0, i.jsx)(ee.d, {
                expandOnClick: ae,
                animateChrome: !aD && !iL && null == lR,
                isChromeRevealed: oH,
                isCompact: of,
                isDisabled: i6,
                reserveSpace: ae && ov && !of,
                presentationToggle: i7 ? se : void 0,
                children: sm
            }), iu[400] = i7, iu[401] = ar, iu[402] = sm, iu[403] = i6, iu[404] = ae, iu[405] = of, iu[406] = oH, iu[407] = iL, iu[408] = se, iu[409] = lR, iu[410] = aD, iu[411] = ov, iu[412] = t8) : t8 = iu[412], iu[413] !== sr || iu[414] !== so || iu[415] !== sp || iu[416] !== t8 ? (t9 = (0, i.jsx)("div", {
                className: sp,
                onPointerDownCapture: so,
                onContextMenu: sr,
                children: t8
            }), iu[413] = sr, iu[414] = so, iu[415] = sp, iu[416] = t8, iu[417] = t9) : t9 = iu[417];
            let sf = t9,
                sg = ar ? {
                    top: rE.startsWith("top") ? rA : void 0,
                    bottom: rE.startsWith("top") ? void 0 : rB.bottom,
                    left: rI,
                    width: rj.width,
                    height: rj.height,
                    opacity: or
                } : {
                    inset: 0
                },
                sv = !iL,
                sb = iL ? aw : void 0;
            iu[418] !== ar || iu[419] !== oo ? (ne = ar ? void 0 : {
                opacity: +!!oo
            }, iu[418] = ar, iu[419] = oo, iu[420] = ne) : ne = iu[420];
            let sx = !iL || void 0;
            iu[421] !== aD ? (nt = aD ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, iu[421] = aD, iu[422] = nt) : nt = iu[422];
            let sy = iL ? "minimized" : "preview",
                sw = iL && "pointer-events-auto";
            iu[423] !== sw ? (nn = (0, l.b)("absolute inset-0 m-auto touch-none", sw), iu[423] = sw, iu[424] = nn) : nn = iu[424];
            let sS = oF ? o$ : void 0;
            iu[425] !== aR || iu[426] !== iK || iu[427] !== iW ? (ni = iK ?? aR.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}",
                description: "Accessible label for restoring a minimized floating chat"
            }, {
                title: iW
            }), iu[425] = aR, iu[426] = iK, iu[427] = iW, iu[428] = ni) : ni = iu[428];
            let sz = !i9 && iL && lY;
            iu[429] !== tB ? (na = e => {
                0 !== e.detail && lG.current || tB()
            }, iu[429] = tB, iu[430] = na) : na = iu[430], iu[431] !== ar || iu[432] !== lT ? (nl = e => {
                ar || "touch" === e.pointerType || lT(!0)
            }, iu[431] = ar, iu[432] = lT, iu[433] = nl) : nl = iu[433], iu[434] !== e5.type || iu[435] !== ar || iu[436] !== lT ? (no = e => {
                "ready" === e5.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), ar || (0, f.flushSync)(() => lT(!0)), lw.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, iu[434] = e5.type, iu[435] = ar, iu[436] = lT, iu[437] = no) : no = iu[437], iu[438] !== a7 || iu[439] !== r_ ? (nr = e => {
                a7 || 0 !== e.button || (lG.current = !1, e.currentTarget.setPointerCapture(e.pointerId), r_(e))
            }, iu[438] = a7, iu[439] = r_, iu[440] = nr) : nr = iu[440], iu[441] !== ar || iu[442] !== oF || iu[443] !== oE || iu[444] !== iO || iu[445] !== aj ? (ns = oE && null != aj && null == iO ? (0, i.jsx)(eh.a, {
                statusState: aj,
                size: ar ? "default" : "compact"
            }) : (0, i.jsx)(U.a, {
                badgeEnabled: oF,
                children: iO ?? (0, i.jsx)(_.Ib, {})
            }), iu[441] = ar, iu[442] = oF, iu[443] = oE, iu[444] = iO, iu[445] = aj, iu[446] = ns) : ns = iu[446], iu[447] !== sy || iu[448] !== nn || iu[449] !== sS || iu[450] !== ni || iu[451] !== sz || iu[452] !== na || iu[453] !== nl || iu[454] !== no || iu[455] !== nr || iu[456] !== ns ? (nc = (0, i.jsx)(q.a, {
                ref: ly,
                className: nn,
                "aria-description": sS,
                "aria-label": ni,
                autoFocus: sz,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: na,
                onPointerEnter: nl,
                onKeyDown: no,
                onPointerDown: nr,
                children: ns
            }, sy), iu[447] = sy, iu[448] = nn, iu[449] = sS, iu[450] = ni, iu[451] = sz, iu[452] = na, iu[453] = nl, iu[454] = no, iu[455] = nr, iu[456] = ns, iu[457] = nc) : nc = iu[457], iu[458] !== sg || iu[459] !== sv || iu[460] !== sb || iu[461] !== ne || iu[462] !== sx || iu[463] !== nt || iu[464] !== nc ? (nu = (0, i.jsx)(d.a.div, {
                ref: E.c,
                className: "pointer-events-none absolute",
                style: sg,
                "aria-hidden": sv,
                "data-pip-obstacle": sb,
                animate: ne,
                initial: !1,
                inert: sx,
                transition: nt,
                children: nc
            }), iu[458] = sg, iu[459] = sv, iu[460] = sb, iu[461] = ne, iu[462] = sx, iu[463] = nt, iu[464] = nc, iu[465] = nu) : nu = iu[465];
            let sC = nu,
                sk = "ready" === e5.type ? (0, i.jsx)(H, {
                    items: e5.value,
                    availableHeight: Math.max(0, (ig?.height ?? a_) - oZ - aI - (iL ? rj.height : o2) - 32 - 12),
                    isDockedTop: lc,
                    shouldReduceMotion: aD
                }) : null;
            !ar && (nd = ey, oo ? nd = rO : null != lR || l$ || (nd = "none"));
            let sj = null != lR || !iL;
            iu[466] !== ar || iu[467] !== rc || iu[468] !== rs || iu[469] !== ro || iu[470] !== rr || iu[471] !== rZ ? (nh = ar ? {
                x: ro,
                y: rr,
                width: rs,
                height: rc,
                borderRadius: rZ
            } : void 0, iu[466] = ar, iu[467] = rc, iu[468] = rs, iu[469] = ro, iu[470] = rr, iu[471] = rZ, iu[472] = nh) : nh = iu[472], iu[473] !== ar || iu[474] !== rX || iu[475] !== rY || iu[476] !== rZ || iu[477] !== rV || iu[478] !== rK ? (nm = ar ? {
                top: rK,
                right: rV,
                bottom: rX,
                left: rY,
                borderRadius: rZ
            } : void 0, iu[473] = ar, iu[474] = rX, iu[475] = rY, iu[476] = rZ, iu[477] = rV, iu[478] = rK, iu[479] = nm) : nm = iu[479], iu[480] !== o7 || iu[481] !== rn ? (np = {
                height: o7,
                width: rn
            }, iu[480] = o7, iu[481] = rn, iu[482] = np) : np = iu[482];
            let sE = ar && oV,
                sM = ar && !oV ? oX : void 0,
                sP = ov && oH;
            iu[483] !== oJ || iu[484] !== o1 ? (nf = {
                height: oJ,
                width: o1
            }, iu[483] = oJ, iu[484] = o1, iu[485] = nf) : nf = iu[485], iu[486] !== sC || iu[487] !== i$ ? (ng = null == i$ ? sC : (0, i.jsx)(Q.a, {
                disableNative: !0,
                items: i$,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: sC
                })
            }), iu[486] = sC, iu[487] = i$, iu[488] = ng) : ng = iu[488], iu[489] !== o5 || iu[490] !== o6 ? (nv = {
                height: o5,
                width: o6
            }, iu[489] = o5, iu[490] = o6, iu[491] = nv) : nv = iu[491];
            let sR = !a7 && !ad,
                sN = oo || ar ? "panel" : im,
                sL = oW ? void 0 : iW,
                sT = oW ? aN : void 0,
                sD = null != ig && void 0;
            iu[492] !== i4 || iu[493] !== re || iu[494] !== aD ? (nb = i4 ? {
                opacity: +!!re,
                translateY: 8 * (!re && !aD)
            } : {}, iu[492] = i4, iu[493] = re, iu[494] = aD, iu[495] = nb) : nb = iu[495];
            let sq = ar || lU?.stage !== "approaching" ? 1 : .95;
            iu[496] !== rn || iu[497] !== nb || iu[498] !== sq ? (nx = {
                ...nb,
                width: rn,
                scale: sq
            }, iu[496] = rn, iu[497] = nb, iu[498] = sq, iu[499] = nx) : nx = iu[499];
            let s_ = !!ar && void 0 !== iv && !!l$ || void 0,
                sF = !ar && oh || void 0,
                sI = iL ? void 0 : aw,
                sA = !a7,
                sH = null == ig ? void 0 : {
                    left: rq.left - rR.x,
                    right: rq.right - rR.x,
                    top: rq.top - rR.y,
                    bottom: rq.bottom - rR.y
                },
                sW = null == ig ? void 0 : 0;
            iu[500] !== i4 || iu[501] !== aD ? (ny = !!i4 && !aD && {
                opacity: 0,
                translateY: 8
            }, iu[500] = i4, iu[501] = aD, iu[502] = ny) : ny = iu[502];
            let sB = null == ig ? "dialog" : "region",
                sO = lc ? oZ + 10 : "auto",
                s$ = lc ? "auto" : 10 + aI,
                sK = oV ? "50%" : "auto";
            iu[503] !== oX || iu[504] !== oV ? (nw = !oV && {
                [oX]: 10
            }, iu[503] = oX, iu[504] = oV, iu[505] = nw) : nw = iu[505];
            let sV = oV ? "-50% 0" : void 0,
                sX = "bottom-center" === rE ? .5 : Number(rE.endsWith("right")),
                sY = +!rE.startsWith("top");
            iu[506] !== o8 || iu[507] !== rk || iu[508] !== lg || iu[509] !== lv || iu[510] !== sO || iu[511] !== s$ || iu[512] !== sK || iu[513] !== nw || iu[514] !== sV || iu[515] !== sX || iu[516] !== sY ? (nS = {
                ...rk,
                height: o8,
                top: sO,
                bottom: s$,
                left: sK,
                right: "auto",
                ...nw,
                translate: sV,
                x: lg,
                y: lv,
                originX: sX,
                originY: sY
            }, iu[506] = o8, iu[507] = rk, iu[508] = lg, iu[509] = lv, iu[510] = sO, iu[511] = s$, iu[512] = sK, iu[513] = nw, iu[514] = sV, iu[515] = sX, iu[516] = sY, iu[517] = nS) : nS = iu[517];
            let sZ = .3 * !aD;
            iu[518] !== sZ ? (nz = {
                duration: sZ,
                ease: N.e
            }, iu[518] = sZ, iu[519] = nz) : nz = iu[519], iu[520] !== rt || iu[521] !== nz ? (nC = {
                duration: rt,
                ease: N.e,
                scale: nz
            }, iu[520] = rt, iu[521] = nz, iu[522] = nC) : nC = iu[522], iu[523] !== ar || iu[524] !== ae || iu[525] !== i9 || iu[526] !== aL || iu[527] !== lO || iu[528] !== lq || iu[529] !== lT || iu[530] !== lP || iu[531] !== lN || iu[532] !== oC ? (nk = e => {
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
            }, iu[523] = ar, iu[524] = ae, iu[525] = i9, iu[526] = aL, iu[527] = lO, iu[528] = lq, iu[529] = lT, iu[530] = lP, iu[531] = lN, iu[532] = oC, iu[533] = nk) : nk = iu[533], iu[534] !== op || iu[535] !== ar || iu[536] !== tA || iu[537] !== oh || iu[538] !== ae || iu[539] !== iL || iu[540] !== lP || iu[541] !== lN || iu[542] !== ov || iu[543] !== tO ? (nj = e => {
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
            }, iu[534] = op, iu[535] = ar, iu[536] = tA, iu[537] = oh, iu[538] = ae, iu[539] = iL, iu[540] = lP, iu[541] = lN, iu[542] = ov, iu[543] = tO, iu[544] = nj) : nj = iu[544], iu[545] !== ar || iu[546] !== oJ || iu[547] !== o1 || iu[548] !== o5 || iu[549] !== o6 || iu[550] !== iL || iu[551] !== iI || iu[552] !== ai || iu[553] !== l9 || iu[554] !== lP || iu[555] !== lN || iu[556] !== r3 ? (nE = e => {
                ar && !iL && !lG.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (lN(null), lP("expanded"), l9(null), el(ai, P, () => iI?.("bottom-right")), r3("bottom-right", !0, {
                    height: eP(P.height, o5, oJ),
                    width: eP(P.width + 12, o6, o1)
                }))
            }, iu[545] = ar, iu[546] = oJ, iu[547] = o1, iu[548] = o5, iu[549] = o6, iu[550] = iL, iu[551] = iI, iu[552] = ai, iu[553] = l9, iu[554] = lP, iu[555] = lN, iu[556] = r3, iu[557] = nE) : nE = iu[557], iu[558] !== i9 ? (nM = e => {
                !i9 && lG.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, iu[558] = i9, iu[559] = nM) : nM = iu[559], iu[560] !== ar || iu[561] !== r1 || iu[562] !== lU || iu[563] !== iD || iu[564] !== lM || iu[565] !== lQ || iu[566] !== lN ? (nP = (e, t) => {
                let n = r1(t);
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
            }, iu[560] = ar, iu[561] = r1, iu[562] = lU, iu[563] = iD, iu[564] = lM, iu[565] = lQ, iu[566] = lN, iu[567] = nP) : nP = iu[567], iu[568] !== ar || iu[569] !== ap || iu[570] !== lg || iu[571] !== lv || iu[572] !== r1 || iu[573] !== ad || iu[574] !== r7 || iu[575] !== lU || iu[576] !== iq || iu[577] !== iD || iu[578] !== lM || iu[579] !== aa || iu[580] !== r2 || iu[581] !== lK || iu[582] !== lQ || iu[583] !== lN || iu[584] !== aD || iu[585] !== r3 ? (nR = (e, t) => {
                if (lh.current) return;
                let n = r1(t),
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
                        !lh.current && (a("pin") || (r3(n.requestedDockPosition, !0), lK(!1)))
                    }
                });
                if (!a()) {
                    if (n.shouldMinimize && null != n.requestedDockPosition) {
                        let e = ar ? "bottom-right" : n.requestedDockPosition;
                        (0, f.flushSync)(() => {
                            r2(e, !0), r7()
                        })
                    } else r3(n.requestedDockPosition, !0), null != lU && "restored" !== lU.stage && (lQ({
                        ...lU,
                        stage: "restored"
                    }), "minimized" === lU.stage && lN(ar ? null : {
                        target: lM
                    }));
                    lK(!1)
                }
            }, iu[568] = ar, iu[569] = ap, iu[570] = lg, iu[571] = lv, iu[572] = r1, iu[573] = ad, iu[574] = r7, iu[575] = lU, iu[576] = iq, iu[577] = iD, iu[578] = lM, iu[579] = aa, iu[580] = r2, iu[581] = lK, iu[582] = lQ, iu[583] = lN, iu[584] = aD, iu[585] = r3, iu[586] = nR) : nR = iu[586], iu[587] !== lg || iu[588] !== lv || iu[589] !== lK || iu[590] !== lT ? (nN = () => {
                lT(!1), lh.current = !1, lG.current = !0, lK(!0), lg.stop(), lv.stop()
            }, iu[587] = lg, iu[588] = lv, iu[589] = lK, iu[590] = lT, iu[591] = nN) : nN = iu[591], iu[592] !== op || iu[593] !== ar || iu[594] !== ae || iu[595] !== lI || iu[596] !== lO || iu[597] !== lq || iu[598] !== lP || iu[599] !== lN || iu[600] !== ov ? (nL = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!ar || ae) && lq(!0), lO(!0), (ae ? ov && op : ar) && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !lI && null == lH.current && (lN(null), lP("expanded"))) : e.currentTarget.contains(e.target) && !lb.current?.contains(e.target) && (lO(!1), ae && e.target.closest("header[data-quick-chat-drag-handle]") && lq(!0))
            }, iu[592] = op, iu[593] = ar, iu[594] = ae, iu[595] = lI, iu[596] = lO, iu[597] = lq, iu[598] = lP, iu[599] = lN, iu[600] = ov, iu[601] = nL) : nL = iu[601], iu[602] !== ld || iu[603] !== i9 ? (nT = e => {
                i9 || "Escape" !== e.key || (lG.current = !0, ld.cancel())
            }, iu[602] = ld, iu[603] = i9, iu[604] = nT) : nT = iu[604], iu[605] !== i9 || iu[606] !== a7 || iu[607] !== r_ ? (nD = e => {
                if (i9 || (lG.current = !1, a7 || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]");
                null != t && (null == n || n === t) && (e.preventDefault(), t.setPointerCapture(e.pointerId), r_(e))
            }, iu[605] = i9, iu[606] = a7, iu[607] = r_, iu[608] = nD) : nD = iu[608], iu[609] !== lT ? (nq = () => {
                lw.current?.contains(document.activeElement) || lT(!1)
            }, iu[609] = lT, iu[610] = nq) : nq = iu[610], iu[611] !== ld || iu[612] !== tW || iu[613] !== id || iu[614] !== sL || iu[615] !== sT || iu[616] !== sD || iu[617] !== nx || iu[618] !== s_ || iu[619] !== sF || iu[620] !== sI || iu[621] !== sA || iu[622] !== sH || iu[623] !== sW || iu[624] !== ny || iu[625] !== sB || iu[626] !== nS || iu[627] !== nC || iu[628] !== nk || iu[629] !== nj || iu[630] !== nE || iu[631] !== nM || iu[632] !== nP || iu[633] !== nR || iu[634] !== nN || iu[635] !== nL || iu[636] !== nT || iu[637] !== nD || iu[638] !== nq ? (n_ = {
                ref: id,
                "aria-label": sL,
                "aria-labelledby": sT,
                "aria-modal": sD,
                animate: nx,
                "data-chat-pane-dragging": s_,
                "data-quick-chat-drag-handle": sF,
                "data-pip-obstacle": sI,
                "data-state": "open",
                drag: sA,
                dragConstraints: sH,
                dragElastic: sW,
                dragControls: ld,
                dragListener: !1,
                dragMomentum: !1,
                initial: ny,
                role: sB,
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
            }, iu[611] = ld, iu[612] = tW, iu[613] = id, iu[614] = sL, iu[615] = sT, iu[616] = sD, iu[617] = nx, iu[618] = s_, iu[619] = sF, iu[620] = sI, iu[621] = sA, iu[622] = sH, iu[623] = sW, iu[624] = ny, iu[625] = sB, iu[626] = nS, iu[627] = nC, iu[628] = nk, iu[629] = nj, iu[630] = nE, iu[631] = nM, iu[632] = nP, iu[633] = nR, iu[634] = nN, iu[635] = nL, iu[636] = nT, iu[637] = nD, iu[638] = nq, iu[639] = n_) : n_ = iu[639];
            let sU = null == ig ? "floating" : "content",
                sQ = lc ? "bottom" : "top";
            iu[640] !== ar || iu[641] !== lg || iu[642] !== lv || iu[643] !== l0 || iu[644] !== lP || iu[645] !== lN ? (nF = e => {
                l0(e), e && (ar && lP("expanded"), lN(null), lg.stop(), lv.stop())
            }, iu[640] = ar, iu[641] = lg, iu[642] = lv, iu[643] = l0, iu[644] = lP, iu[645] = lN, iu[646] = nF) : nF = iu[646], iu[647] !== e5.type || iu[648] !== sk || iu[649] !== ar || iu[650] !== oq || iu[651] !== lc || iu[652] !== iL || iu[653] !== a5 || iu[654] !== rQ || iu[655] !== aw || iu[656] !== lq ? (nI = !ar && oq && "ready" === e5.type ? (0, i.jsx)("div", {
                ref: (0, L.a)(lw, a5, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iL && (lc ? "top-full" : "bottom-full"), lc ? "pt-3" : "pb-3"),
                "data-pip-obstacle": aw,
                onClickCapture: () => {
                    (iL ? ly.current : lx.current)?.focus({
                        preventScroll: !0
                    }), lq(!1)
                },
                style: iL ? rQ : void 0,
                children: sk
            }) : null, iu[647] = e5.type, iu[648] = sk, iu[649] = ar, iu[650] = oq, iu[651] = lc, iu[652] = iL, iu[653] = a5, iu[654] = rQ, iu[655] = aw, iu[656] = lq, iu[657] = nI) : nI = iu[657], iu[658] !== sk || iu[659] !== ar || iu[660] !== oq || iu[661] !== lc || iu[662] !== iL || iu[663] !== a5 || iu[664] !== rQ || iu[665] !== lO || iu[666] !== lq || iu[667] !== aD ? (nA = ar && oq ? (0, i.jsx)(d.a.div, {
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
                style: iL ? rQ : void 0,
                children: iL ? (0, i.jsx)(j.c, {
                    variant: "notice",
                    children: sk
                }) : sk
            }, "response-preview") : null, iu[658] = sk, iu[659] = ar, iu[660] = oq, iu[661] = lc, iu[662] = iL, iu[663] = a5, iu[664] = rQ, iu[665] = lO, iu[666] = lq, iu[667] = aD, iu[668] = nA) : nA = iu[668], iu[669] !== nA ? (nH = (0, i.jsx)(h.a, {
                initial: !1,
                children: nA
            }), iu[669] = nA, iu[670] = nH) : nH = iu[670], iu[671] !== rb || iu[672] !== l1 || iu[673] !== ar || iu[674] !== ay || iu[675] !== tA || iu[676] !== of || iu[677] !== og || iu[678] !== i9 || iu[679] !== iQ || iu[680] !== aD || iu[681] !== ow ? (nW = ar && void 0 !== iQ && !i9 && !og && (0, i.jsx)(ej, {
                compact: of,
                preview: ow ? iQ : null,
                reduceMotion: aD,
                composerHeight: l1,
                opacity: rb,
                onExpand: tA
            }, ay), iu[671] = rb, iu[672] = l1, iu[673] = ar, iu[674] = ay, iu[675] = tA, iu[676] = of, iu[677] = og, iu[678] = i9, iu[679] = iQ, iu[680] = aD, iu[681] = ow, iu[682] = nW) : nW = iu[682];
            let sG = lc ? "top-full pt-2" : "bottom-full";
            iu[683] !== sG ? (nB = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", sG), iu[683] = sG, iu[684] = nB) : nB = iu[684], iu[685] !== a1 || iu[686] !== oo || iu[687] !== nB ? (nO = (0, i.jsx)("div", {
                ref: a1,
                className: nB,
                hidden: oo
            }), iu[685] = a1, iu[686] = oo, iu[687] = nB, iu[688] = nO) : nO = iu[688];
            let sJ = 0 === oY && "pt-2",
                s0 = lc ? "w-full" : "w-80",
                s1 = oV && "left-1/2 -translate-x-1/2",
                s2 = !oV && (oK ? "left-0" : "right-0"),
                s3 = oo && l$ && "invisible";
            iu[689] !== sJ || iu[690] !== s0 || iu[691] !== s1 || iu[692] !== s2 || iu[693] !== s3 ? (n$ = (0, l.b)(T.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", sJ, s0, s1, s2, s3), iu[689] = sJ, iu[690] = s0, iu[691] = s1, iu[692] = s2, iu[693] = s3, iu[694] = n$) : n$ = iu[694], iu[695] !== oY ? (nK = {
                marginTop: oY
            }, iu[695] = oY, iu[696] = nK) : nK = iu[696], iu[697] !== iS || iu[698] !== a2 || iu[699] !== aw || iu[700] !== n$ || iu[701] !== nK ? (nV = (0, i.jsx)("div", {
                ref: a2,
                className: n$,
                style: nK,
                "data-pip-obstacle": aw,
                children: iS
            }), iu[697] = iS, iu[698] = a2, iu[699] = aw, iu[700] = n$, iu[701] = nK, iu[702] = nV) : nV = iu[702], iu[703] !== nd || iu[704] !== ar || iu[705] !== oo ? (nX = ar ? void 0 : {
                clipPath: nd,
                opacity: +!oo
            }, iu[703] = nd, iu[704] = ar, iu[705] = oo, iu[706] = nX) : nX = iu[706];
            let s4 = !og && "pointer-events-auto";
            iu[707] !== s4 ? (nY = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", s4), iu[707] = s4, iu[708] = nY) : nY = iu[708], iu[709] !== os || iu[710] !== ar || iu[711] !== rU ? (nZ = ar ? {
                clipPath: rU,
                opacity: os
            } : void 0, iu[709] = os, iu[710] = ar, iu[711] = rU, iu[712] = nZ) : nZ = iu[712];
            let s5 = !!og || void 0;
            iu[713] !== ar || iu[714] !== lR || iu[715] !== aD ? (nU = aD || !ar && null == lR ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, iu[713] = ar, iu[714] = lR, iu[715] = aD, iu[716] = nU) : nU = iu[716], iu[717] !== oo || iu[718] !== rO || iu[719] !== lM || iu[720] !== lR || iu[721] !== lN ? (nQ = e => {
                lR?.target === (oo ? "minimized" : lM) && "object" == typeof e && "clipPath" in e && e.clipPath === (oo ? rO : ey) && lN(e => e === lR ? null : e)
            }, iu[717] = oo, iu[718] = rO, iu[719] = lM, iu[720] = lR, iu[721] = lN, iu[722] = nQ) : nQ = iu[722], iu[723] !== ar || iu[724] !== oh || iu[725] !== lc || iu[726] !== r7 || iu[727] !== ov ? (nG = !ar && !ov && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", lc ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(ee.c, {
                    standalone: !0,
                    isCompact: oh,
                    onMinimize: r7
                })
            }), iu[723] = ar, iu[724] = oh, iu[725] = lc, iu[726] = r7, iu[727] = ov, iu[728] = nG) : nG = iu[728], iu[729] !== ar || iu[730] !== sf || iu[731] !== of || iu[732] !== l$ || iu[733] !== r7 || iu[734] !== iE || iu[735] !== ov ? (nJ = (ar || ov) && (iE?.({
                contextMenuTrigger: sf,
                isCompact: of,
                isDragging: l$,
                onMinimize: r7
            }) ?? sf), iu[729] = ar, iu[730] = sf, iu[731] = of, iu[732] = l$, iu[733] = r7, iu[734] = iE, iu[735] = ov, iu[736] = nJ) : nJ = iu[736], iu[737] !== ib || iu[738] !== am ? (n0 = am && (0, i.jsx)(eg.a, {
                hasPagePicker: ib
            }), iu[737] = ib, iu[738] = am, iu[739] = n0) : n0 = iu[739];
            let s6 = of && "justify-end";
            iu[740] !== s6 ? (n1 = (0, l.b)("relative flex min-h-0 flex-1 flex-col", s6), iu[740] = s6, iu[741] = n1) : n1 = iu[741], iu[742] !== rb || iu[743] !== l1 || iu[744] !== ob || iu[745] !== aP || iu[746] !== of || iu[747] !== aJ || iu[748] !== iZ ? (n2 = ob && !aP && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) px-4 py-3 text-sm text-default",
                "aria-hidden": !of,
                style: {
                    bottom: l1,
                    opacity: rb
                },
                ref: aJ,
                children: iZ ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…",
                    description: "Status shown in the floating response banner while the chat is working"
                })
            }), iu[742] = rb, iu[743] = l1, iu[744] = ob, iu[745] = aP, iu[746] = of, iu[747] = aJ, iu[748] = iZ, iu[749] = n2) : n2 = iu[749];
            let s7 = ar ? of : aS.followLatestTranscript;
            iu[750] !== aS || iu[751] !== s7 ? (n3 = {
                ...aS,
                isFloatingChatSurface: !0,
                followLatestTranscript: s7
            }, iu[750] = aS, iu[751] = s7, iu[752] = n3) : n3 = iu[752];
            let s8 = ar ? "absolute inset-x-0 overflow-hidden" : "contents";
            iu[753] !== l1 || iu[754] !== ar || iu[755] !== rd ? (n4 = ar ? {
                bottom: l1,
                height: rd
            } : void 0, iu[753] = l1, iu[754] = ar, iu[755] = rd, iu[756] = n4) : n4 = iu[756];
            let s9 = !ar && (of ? "hidden" : "flex"),
                ce = ar && "absolute inset-x-0 bottom-0 flex",
                ct = ar && "overflow-hidden";
            iu[757] !== s9 || iu[758] !== ce || iu[759] !== ct ? (n5 = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", s9, ce, ct), iu[757] = s9, iu[758] = ce, iu[759] = ct, iu[760] = n5) : n5 = iu[760], iu[761] !== l1 || iu[762] !== ar || iu[763] !== o4 || iu[764] !== ad || iu[765] !== rg || iu[766] !== rv || iu[767] !== rf ? (n6 = ar ? {
                height: ad ? void 0 : Math.max(0, o4 - 46 - l1),
                top: ad ? 0 : void 0,
                opacity: rv,
                clipPath: rg,
                y: rf
            } : void 0, iu[761] = l1, iu[762] = ar, iu[763] = o4, iu[764] = ad, iu[765] = rg, iu[766] = rv, iu[767] = rf, iu[768] = n6) : n6 = iu[768], iu[769] !== ar || iu[770] !== ab || iu[771] !== om || iu[772] !== of || iu[773] !== i9 || iu[774] !== oo || iu[775] !== iJ || iu[776] !== lP || iu[777] !== lN ? (n7 = ab && (!om || ar) ? iJ?.(() => {
                lN(null), lP("compact")
            }, !of && !i9 && !oo) : null, iu[769] = ar, iu[770] = ab, iu[771] = om, iu[772] = of, iu[773] = i9, iu[774] = oo, iu[775] = iJ, iu[776] = lP, iu[777] = lN, iu[778] = n7) : n7 = iu[778], iu[779] !== ar || iu[780] !== av || iu[781] !== ab || iu[782] !== of || iu[783] !== rt ? (n8 = !ab && (0, i.jsx)(h.a, {
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
                        duration: rt,
                        ease: N.e
                    },
                    children: av
                }, "empty-state")
            }), iu[779] = ar, iu[780] = av, iu[781] = ab, iu[782] = of, iu[783] = rt, iu[784] = n8) : n8 = iu[784], iu[785] !== of || iu[786] !== aX || iu[787] !== n5 || iu[788] !== n6 || iu[789] !== n7 || iu[790] !== n8 ? (n9 = (0, i.jsxs)(d.a.div, {
                ref: aX,
                "aria-hidden": of,
                className: n5,
                inert: of,
                style: n6,
                children: [n7, n8]
            }), iu[785] = of, iu[786] = aX, iu[787] = n5, iu[788] = n6, iu[789] = n7, iu[790] = n8, iu[791] = n9) : n9 = iu[791], iu[792] !== ar || iu[793] !== tA || iu[794] !== ob || iu[795] !== of || iu[796] !== r9 || iu[797] !== iU ? (ie = ar && of && ob && (0, i.jsx)(eE, {
                label: r9,
                responsePreview: iU,
                onExpand: tA
            }), iu[792] = ar, iu[793] = tA, iu[794] = ob, iu[795] = of, iu[796] = r9, iu[797] = iU, iu[798] = ie) : ie = iu[798], iu[799] !== s8 || iu[800] !== n4 || iu[801] !== n9 || iu[802] !== ie ? (it = (0, i.jsxs)(d.a.div, {
                className: s8,
                style: n4,
                children: [n9, ie]
            }), iu[799] = s8, iu[800] = n4, iu[801] = n9, iu[802] = ie, iu[803] = it) : it = iu[803], iu[804] !== n3 || iu[805] !== it ? (ii = (0, i.jsx)(em.b, {
                value: n3,
                children: it
            }), iu[804] = n3, iu[805] = it, iu[806] = ii) : ii = iu[806];
            let cn = iE?.({
                contextMenuTrigger: su,
                isCompact: of,
                isDragging: l$,
                onMinimize: r7
            }) ?? su;
            iu[807] !== n1 || iu[808] !== n2 || iu[809] !== ii || iu[810] !== cn ? (ia = (0, i.jsxs)("div", {
                className: n1,
                children: [n2, ii, cn]
            }), iu[807] = n1, iu[808] = n2, iu[809] = ii, iu[810] = cn, iu[811] = ia) : ia = iu[811], iu[812] !== ls || iu[813] !== og || iu[814] !== nX || iu[815] !== nY || iu[816] !== nZ || iu[817] !== s5 || iu[818] !== nU || iu[819] !== nQ || iu[820] !== nG || iu[821] !== nJ || iu[822] !== n0 || iu[823] !== ia ? (il = (0, i.jsxs)(d.a.div, {
                "aria-hidden": og,
                animate: nX,
                className: nY,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": ls,
                style: nZ,
                initial: !1,
                inert: s5,
                transition: nU,
                onAnimationComplete: nQ,
                children: [nG, nJ, n0, ia]
            }), iu[812] = ls, iu[813] = og, iu[814] = nX, iu[815] = nY, iu[816] = nZ, iu[817] = s5, iu[818] = nU, iu[819] = nQ, iu[820] = nG, iu[821] = nJ, iu[822] = n0, iu[823] = ia, iu[824] = il) : il = iu[824], iu[825] !== D || iu[826] !== r6 || iu[827] !== oh || iu[828] !== oo || iu[829] !== rB || iu[830] !== iz || iu[831] !== r5 || iu[832] !== sn || iu[833] !== st || iu[834] !== aD || iu[835] !== sj || iu[836] !== nh || iu[837] !== nm || iu[838] !== np || iu[839] !== sE || iu[840] !== sM || iu[841] !== sP || iu[842] !== nf || iu[843] !== ng || iu[844] !== nv || iu[845] !== sR || iu[846] !== sN || iu[847] !== n_ || iu[848] !== sU || iu[849] !== sQ || iu[850] !== nF || iu[851] !== nI || iu[852] !== nH || iu[853] !== nW || iu[854] !== nO || iu[855] !== nV || iu[856] !== il ? (io = (0, i.jsxs)(D, {
                contentRef: af,
                allowCompactResize: !0,
                animateSurface: sj,
                contentStyle: nh,
                surfaceStyle: nm,
                currentSize: np,
                heightLabel: sn,
                resizeFromCenter: sE,
                fixedHorizontalEdge: sM,
                isCompact: oh,
                isCompactChromeRevealed: sP,
                isMinimized: oo,
                keepSurfaceInset: !0,
                maximumSize: nf,
                minimizedContent: ng,
                minimizedSurfaceBounds: rB,
                minimumSize: nv,
                prefersCompactPresentation: !0,
                resizable: sR,
                background: sN,
                sectionRef: lx,
                sectionProps: n_,
                shouldReduceMotion: aD,
                variant: sU,
                verticalResizeEdge: sQ,
                widthLabel: st,
                onResize: r5,
                onResizeEnd: r6,
                onResizingChange: nF,
                children: [nI, nH, nW, nO, nV, il, iz]
            }), iu[825] = D, iu[826] = r6, iu[827] = oh, iu[828] = oo, iu[829] = rB, iu[830] = iz, iu[831] = r5, iu[832] = sn, iu[833] = st, iu[834] = aD, iu[835] = sj, iu[836] = nh, iu[837] = nm, iu[838] = np, iu[839] = sE, iu[840] = sM, iu[841] = sP, iu[842] = nf, iu[843] = ng, iu[844] = nv, iu[845] = sR, iu[846] = sN, iu[847] = n_, iu[848] = sU, iu[849] = sQ, iu[850] = nF, iu[851] = nI, iu[852] = nH, iu[853] = nW, iu[854] = nO, iu[855] = nV, iu[856] = il, iu[857] = io) : io = iu[857];
            let ci = io;
            return iu[858] !== aL ? (ir = {
                id: aL
            }, iu[858] = aL, iu[859] = ir) : ir = iu[859], iu[860] !== ar || iu[861] !== aG ? (is = ar && (0, i.jsx)("div", {
                ref: aG,
                "aria-hidden": !0,
                className: (0, l.b)(ep.a, "pointer-events-none invisible absolute")
            }), iu[860] = ar, iu[861] = aG, iu[862] = is) : is = iu[862], iu[863] !== ci || iu[864] !== ir || iu[865] !== is ? (ic = (0, i.jsxs)(G.a, {
                value: ir,
                children: [is, ci]
            }), iu[863] = ci, iu[864] = ir, iu[865] = is, iu[866] = ic) : ic = iu[866], ic
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