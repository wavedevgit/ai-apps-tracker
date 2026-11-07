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
                    heightLabel: k,
                    isCompact: D,
                    isCompactChromeRevealed: q,
                    isMinimized: _,
                    keepSurfaceInset: F,
                    maximumSize: I,
                    minimizedContent: H,
                    minimizedSurfaceBounds: W,
                    minimumSize: A,
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
                ec = "panel" !== b || K;
            f[6] !== X.ref || f[7] !== Y ? (o = (0, L.a)(Y, X.ref, E.c), f[6] = X.ref, f[7] = Y, f[8] = o) : o = f[8];
            let eu = !ea && K && "frame-Xbg62r",
                ed = K && "group/chat-frame focus:outline-none",
                eh = null != W ? "pointer-events-none" : "pointer-events-auto",
                ep = K && T.a.floatingSurface,
                em = F && T.a.singleLineSurface,
                ef = "floating" === Q ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                eg = K ? "overflow-visible" : "overflow-hidden";
            f[9] !== eu || f[10] !== ed || f[11] !== eh || f[12] !== ep || f[13] !== em || f[14] !== ef || f[15] !== eg ? (r = (0, l.b)("flex flex-col text-default", eu, ed, eh, ep, em, ef, eg), f[9] = eu, f[10] = ed, f[11] = eh, f[12] = ep, f[13] = em, f[14] = ef, f[15] = eg, f[16] = r) : r = f[16];
            let ev = null != w ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== ev ? (s = (0, l.b)(ev), f[17] = ev, f[18] = s) : s = f[18], f[19] !== et || f[20] !== b || f[21] !== es || f[22] !== F || f[23] !== H || f[24] !== K || f[25] !== U || f[26] !== eo || f[27] !== Z ? (c = K ? (0, i.jsx)(j.c, {
                asChild: !0,
                unstyled: "panel" !== b,
                variant: F ? "single-line" : "default",
                children: null != Z ? (0, i.jsx)(d.a.div, {
                    className: es,
                    "aria-hidden": null == H || void 0,
                    style: Z
                }, "panel-background") : (0, i.jsx)(d.a.div, {
                    className: es,
                    "aria-hidden": null == H || void 0,
                    animate: eo,
                    initial: !1,
                    transition: U || !et ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: N.e
                    },
                    children: H
                }, "legacy-background")
            }) : null, f[19] = et, f[20] = b, f[21] = es, f[22] = F, f[23] = H, f[24] = K, f[25] = U, f[26] = eo, f[27] = Z, f[28] = c) : c = f[28], f[29] !== ee || f[30] !== y || f[31] !== z || f[32] !== k || f[33] !== D || f[34] !== _ || f[35] !== I || f[36] !== A || f[37] !== B || f[38] !== O || f[39] !== $ || f[40] !== ei || f[41] !== en || f[42] !== eo || f[43] !== G || f[44] !== J ? (u = ei && (!D || ee) && !_ ? (0, i.jsx)("div", {
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
                        minimumSize: A,
                        verticalEdge: D ? null : G,
                        widthLabel: J,
                        onResize: B,
                        onResizeEnd: O,
                        onResizingChange: $
                    })
                })
            }) : null, f[29] = ee, f[30] = y, f[31] = z, f[32] = k, f[33] = D, f[34] = _, f[35] = I, f[36] = A, f[37] = B, f[38] = O, f[39] = $, f[40] = ei, f[41] = en, f[42] = eo, f[43] = G, f[44] = J, f[45] = u) : u = f[45];
            let eb = null == Z ? null : H;
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
            }), f[54] = X, f[55] = r, f[56] = h, f[57] = o, f[58] = p) : p = f[58], f[59] !== p || f[60] !== ec ? (m = (0, i.jsx)(j.c, {
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
                k = (0, R.h)("2163293173"),
                E = (0, g.a)();
            f[0] !== E || f[1] !== b ? (t = b ?? E.formatMessage({
                id: "quickChat.mainConversation",
                defaultMessage: "Chat",
                description: "Fallback title for the task's main conversation in the floating chat"
            }), f[0] = E, f[1] = b, f[2] = t) : t = f[2];
            let M = t,
                P = (0, m.useEffectEvent)(w);
            if (f[3] !== k || f[4] !== P || f[5] !== C ? (n = () => {
                    if (!k || C) return;
                    let e = window.setTimeout(() => P(), 1e4);
                    return () => window.clearTimeout(e)
                }, f[3] = k, f[4] = P, f[5] = C, f[6] = n) : n = f[6], f[7] !== k || f[8] !== C ? (l = [k, C], f[7] = k, f[8] = C, f[9] = l) : l = f[9], (0, m.useEffect)(n, l), !k) {
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
            }), f[50] = w, f[51] = u, f[52] = h) : h = f[52], f[53] !== h || f[54] !== c ? (p = (0, i.jsxs)("div", {
                className: "relative flex shrink-0 select-none",
                role: "status",
                children: [c, h]
            }), f[53] = h, f[54] = c, f[55] = p) : p = f[55], p
        }
        var I = n("v0Gf"),
            H = n("nsuH");

        function W(e) {
            let t, n, l, o, r, s, c = (0, a.c)(23),
                {
                    items: u,
                    availableHeight: h,
                    isDockedTop: p,
                    shouldReduceMotion: f
                } = e,
                g = (0, R.h)("2163293173"),
                [v, b] = (0, m.useState)(null);
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t) => {
                let n = t.firstElementChild;
                n instanceof HTMLElement && b(n.offsetHeight)
            }, c[0] = t) : t = c[0];
            let x = (0, H.b)(t),
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
        var A = n("wrxv"),
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
            let t, n, M, I, ez, eC, eR, eN, eL, eT, eD, eq, e_, eF, eI, eH, eW, eA, eB, eO, e$, eK, eV, eX, eY, eZ, eU, eQ, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tp, tm, tf, tg, tv, tb, tx, ty, tw, tS, tz, tC, tk, tj, tE, tM, tP, tR, tN, tL, tT, tD, tq, t_, tF, tI, tH, tW, tA, tB, tO, t$, tK, tV, tX, tY, tZ, tU, tQ, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, np, nm, nf, ng, nv, nb, nx, ny, nw, nS, nz, nC, nk, nj, nE, nM, nP, nR, nN, nL, nT, nD, nq, n_, nF, nI, nH, nW, nA, nB, nO, n$, nK, nV, nX, nY, nZ, nU, nQ, nG, nJ, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, ie, it, ii, ia, il, io = (0, a.c)(846),
                {
                    ref: ir,
                    animateOnMount: is,
                    background: ic,
                    renderComposer: iu,
                    containerSize: id,
                    previewSide: ih,
                    hasPagePicker: ip,
                    dockThreadKey: im,
                    canDock: ig,
                    reservedDockPosition: iv,
                    footer: ib,
                    overlay: ix,
                    renderHeaderContent: iy,
                    headerInteractionDisabled: iw,
                    allowLegacyHeaderToggle: iS,
                    renderMenu: iz,
                    forceExpanded: iC,
                    hasConversation: ik,
                    isHidden: ij,
                    isContentChat: iE,
                    isMinimized: iM,
                    isCollisionObstacle: iP,
                    onDragOver: iR,
                    onDragEnd: iN,
                    onEscape: iL,
                    onMinimizedChange: iT,
                    onResize: iD,
                    presentation: iq,
                    onPresentationChange: i_,
                    title: iF,
                    titleContent: iI,
                    minimizedIcon: iH,
                    minimizedMenuItems: iW,
                    restoreLabel: iA,
                    statusState: iB,
                    titleStatusState: iO,
                    notifications: i$,
                    workingPreview: iK,
                    responsePreview: iV,
                    previewBubble: iX,
                    emptyState: iY,
                    renderTranscript: iZ,
                    hasTranscript: iU,
                    pendingFormId: iQ,
                    showComposerDivider: iG,
                    showHeader: iJ
                } = e,
                i0 = void 0 !== is && is,
                i1 = void 0 === ig || ig,
                i2 = void 0 !== iw && iw,
                i3 = void 0 === iS || iS,
                i4 = void 0 !== iC && iC,
                i5 = void 0 !== ij && ij,
                i6 = void 0 !== iE && iE,
                i7 = void 0 === iO ? iB : iO,
                i8 = void 0 === iJ || iJ,
                i9 = (0, p.y)(eu.a),
                ae = (0, p.y)(ed.a),
                at = (0, p.z)(void 0 === iQ ? null : iQ),
                an = null != at,
                ai = (0, R.h)("2163293173"),
                aa = (0, m.useContext)(y.a),
                al = (0, m.useContext)(x.a)?.workspaceTargetWidth,
                ao = (0, m.useContext)(b.c),
                ar = ai && !i5 && null != ih && null != ao && null != aa,
                as = (0, p.z)(!!ai && void 0 !== ih && es.d),
                ac = ar && !as,
                au = (0, p.z)(ar ? w.ab : null),
                ad = (0, m.useRef)(null),
                ah = (0, p.z)(!!ar && w.db),
                ap = ai ? iY : void 0,
                am = iU ?? null != iZ,
                af = am || null != ap,
                ag = (0, p.z)(im) ?? void 0,
                av = void 0 === iP || iP ? "quick-chat" : void 0,
                ab = (0, m.useContext)(ep.b),
                ax = (0, p.z)(i$),
                ay = an ? A.a : ax ?? A.a,
                aw = (0, p.z)(iB);
            io[0] !== aw || io[1] !== ay.type ? (t = "ready" === ay.type ? {
                ...aw,
                type: aw?.type ?? "idle",
                unread: !0
            } : aw, io[0] = aw, io[1] = ay.type, io[2] = t) : t = io[2];
            let aS = t,
                az = (0, p.z)(i7),
                aC = i7 === iB ? aS : az;
            io[3] !== ai || io[4] !== iV ? (n = (0, p.c)(eu.a, e => {
                let {
                    get: t
                } = e;
                return !!ai && null != iV && !!("string" == typeof iV ? iV : t(iV))
            }), io[3] = ai, io[4] = iV, io[5] = n) : n = io[5];
            let ak = (0, p.z)(n),
                aj = (0, g.a)(),
                aE = (0, m.useId)(),
                aM = (0, m.useId)(),
                aP = (0, k.c)(),
                aR = (0, eo.a)(),
                aN = (0, p.z)(eS);
            io[6] !== aN.height || io[7] !== aP ? (M = (0, k.b)(aN.height, aP), io[6] = aN.height, io[7] = aP, io[8] = M) : M = io[8];
            let aL = M,
                aT = (0, k.b)(aN.width, aP),
                [aD, aq] = (0, m.useState)(0),
                [a_, aF] = (0, m.useState)(!1),
                [aI, aH] = (0, m.useState)(0),
                [aW, aA] = (0, m.useState)(null),
                [aB, aO] = (0, m.useState)(null),
                [a$, aK] = (0, m.useState)(0),
                [aV, aX] = (0, m.useState)(null);
            io[9] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                e.contentRect.width > 0 && aX(e.contentRect.width)
            }, io[9] = I) : I = io[9];
            let aY = (0, H.b)(I);
            io[10] === Symbol.for("react.memo_cache_sentinel") ? (ez = e => {
                aK((0, ec.a)(e).height)
            }, io[10] = ez) : ez = io[10];
            let aZ = (0, H.b)(ez);
            io[11] === Symbol.for("react.memo_cache_sentinel") ? (eC = e => {
                aH((0, ec.a)(e).height)
            }, io[11] = eC) : eC = io[11];
            let aU = (0, H.b)(eC);
            io[12] !== aU ? (eR = e => {
                aA(e), aU(e)
            }, io[12] = aU, io[13] = eR) : eR = io[13];
            let aQ = (0, eb.a)(eR);
            io[14] === Symbol.for("react.memo_cache_sentinel") ? (eN = e => {
                aq((0, ec.a)(e).height)
            }, io[14] = eN) : eN = io[14];
            let aG = (0, H.b)(eN),
                [aJ, a0] = (0, m.useState)(0);
            io[15] === Symbol.for("react.memo_cache_sentinel") ? (eL = e => {
                a0((0, ec.a)(e).height)
            }, io[15] = eL) : eL = io[15];
            let a1 = (0, H.b)(eL),
                a2 = id?.width ?? aT,
                a3 = aT < 640;
            io[16] !== i1 || io[17] !== ai ? (eT = () => i1 ? ai ? "bottom-right" : (0, J.a)() : "bottom-center", io[16] = i1, io[17] = ai, io[18] = eT) : eT = io[18];
            let [a4] = (0, m.useState)(eT), a5 = ag ?? null;
            io[19] !== a5 ? (eD = {
                threadKey: a5,
                minimized: !1
            }, io[19] = a5, io[20] = eD) : eD = io[20];
            let a6 = (0, p.x)(i1 ? en.a : void 0, eD),
                a7 = ag ?? null;
            io[21] !== a7 ? (eq = {
                threadKey: a7,
                minimized: !0
            }, io[21] = a7, io[22] = eq) : eq = io[22];
            let a8 = (0, p.x)(i1 ? en.a : void 0, eq);
            io[23] === Symbol.for("react.memo_cache_sentinel") ? (e_ = {}, io[23] = e_) : e_ = io[23];
            let [a9, le] = (0, m.useState)(e_), lt = ai ? "bottom-right" : (null == ag ? a9.minimized : null) ?? a8 ?? "bottom-right", ln = (null != ag || ai ? null : a9.expanded) ?? a6 ?? a4, li = iM ? lt : ln, la = i1 ? (0, et.f)(a3 && !iM ? "bottom-center" : li, iv) : "bottom-center", ll = la.startsWith("top"), lo = (0, p.z)(ea), lr = (0, o.a)(), ls = (0, m.useRef)(!1);
            io[24] === Symbol.for("react.memo_cache_sentinel") ? (eF = {
                x: 0,
                y: 0
            }, io[24] = eF) : eF = io[24];
            let lc = (0, m.useRef)(eF),
                lu = (0, m.useRef)(null),
                ld = (0, m.useRef)(null),
                lh = (0, r.a)(0),
                lp = (0, r.a)(0),
                lm = (0, m.useRef)(null),
                lf = (0, m.useRef)(null),
                lg = (0, m.useRef)(null),
                lv = (0, m.useRef)(null),
                [lb, lx] = (0, m.useState)("compact"),
                [ly, lw] = (0, m.useState)(null),
                lS = iX?.id ?? "",
                lz = ly === lS,
                lC = iq ?? lb;
            io[25] !== af || io[26] !== iq || io[27] !== i6 || io[28] !== i_ ? (eI = e => {
                (i6 || "expanded" !== e || af) && (null == iq && lx(e), lw(null), i_?.(e))
            }, io[25] = af, io[26] = iq, io[27] = i6, io[28] = i_, io[29] = eI) : eI = io[29];
            let lk = eI,
                [lj, lE] = (0, m.useState)(null),
                [lM, lP] = (0, m.useState)(!1),
                [lR, lN] = (0, m.useState)(!1),
                [lL, lT] = (0, m.useState)(!1),
                [lD, lq] = (0, m.useState)(!1),
                [l_, lF] = (0, m.useState)(!1),
                [lI, lH] = (0, m.useState)(!1),
                [lW, lA] = (0, m.useState)(!0),
                [lB, lO] = (0, m.useState)(null),
                l$ = (0, m.useRef)(!1),
                [lK, lV] = (0, m.useState)(!1),
                [lX, lY] = (0, m.useState)(0),
                [lZ, lU] = (0, m.useState)(0),
                [lQ, lG] = (0, m.useState)(!1);
            io[30] !== ai || io[31] !== aP ? (eH = (e, t) => {
                lY(ai ? (0, ec.a)(e).height : e.contentRect.height), lG(e.contentRect.width < 640);
                let n = t.querySelector(`[${V.a}]`)?.getBoundingClientRect().height ?? 0;
                lU(Math.max(0, e.contentRect.height - (0, k.b)(n, aP)))
            }, io[30] = ai, io[31] = aP, io[32] = eH) : eH = io[32];
            let lJ = (0, H.b)(eH),
                [l0, l1] = (0, m.useState)(null),
                [l2, l3] = (0, m.useState)(!1),
                [l4, l5] = (0, m.useState)(ag);
            l4 !== ag && (l5(ag), le({}), lF(!1), lH(!1), lO(null), lE(null), lT(!1), l3(!1), lw(null));
            let [l6, l7] = (0, m.useState)(at);
            l6 !== at && (l7(at), lO(null), lE(null));
            let l8 = !ar && (iM || lB?.stage === "minimized"),
                l9 = (0, r.a)(+!!l8);
            io[33] !== l9 ? (eW = () => 1 - l9.get(), io[33] = l9, io[34] = eW) : eW = io[34];
            let oe = (0, s.a)(eW);
            io[35] !== l9 ? (eA = e => l9.on("change", e), io[35] = l9, io[36] = eA) : eA = io[36];
            let ot = eA;
            io[37] !== l9 ? (eB = () => 1 === l9.get(), io[37] = l9, io[38] = eB) : eB = io[38];
            let on = eB;
            io[39] !== l8 ? (eO = () => l8, io[39] = l8, io[40] = eO) : eO = io[40];
            let oi = (0, m.useSyncExternalStore)(ot, on, eO);
            lj?.target !== "minimized" || l8 || lE({
                target: lC
            }), io[41] !== af || io[42] !== i4 || io[43] !== at || io[44] !== lC ? (e$ = (0, ei.b)({
                pendingFormId: at,
                presentation: lC,
                forceExpanded: i4,
                hasTranscript: af
            }), io[41] = af, io[42] = i4, io[43] = at, io[44] = lC, io[45] = e$) : e$ = io[45];
            let {
                isCompact: oa,
                isChatCompact: ol,
                canTogglePresentation: oo
            } = e$, or = oa && !ar, os = iM && !ar, oc = ai && !i6 ? !oa : i8;
            (!i6 || i5 || iM || !oc) && lL && lT(!1);
            let ou = ai && !an && !lz && am && (ak || aC?.type === "loading"),
                od = oa && ou,
                oh = ai && or && !i5 && !os && !an && void 0 !== iX,
                op = oh && !lz && null != iX,
                om = od || op && iX.transient,
                of = void 0 !== iG && iG || ai;
            io[46] !== i6 || io[47] !== i5 || io[48] !== iM || io[49] !== oc ? (eK = () => {
                let e, t = lf.current;
                if (null == t || !i6 || i5 || iM || !oc) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, lT(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), lT(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, io[46] = i6, io[47] = i5, io[48] = iM, io[49] = oc, io[50] = eK) : eK = io[50], io[51] !== ag || io[52] !== i6 || io[53] !== i5 || io[54] !== iM || io[55] !== oc ? (eV = [ag, i6, i5, iM, oc], io[51] = ag, io[52] = i6, io[53] = i5, io[54] = iM, io[55] = oc, io[56] = eV) : eV = io[56], (0, m.useEffect)(eK, eV);
            let og = !i5 && !oa && !iM && !i4 && !l_ && !lK;
            io[57] !== aM || io[58] !== lk || io[59] !== lE ? (eX = e => {
                null == lf.current || null != e && eM(lf.current, e.target, aM) || (lE(null), lk("compact"))
            }, io[57] = aM, io[58] = lk, io[59] = lE, io[60] = eX) : eX = io[60];
            let ov = (0, m.useEffectEvent)(eX);
            io[61] !== ov || io[62] !== aM ? (eY = () => {
                let e = lf.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !eM(e, t, aM) && ov()
            }, io[61] = ov, io[62] = aM, io[63] = eY) : eY = io[63];
            let ob = (0, m.useEffectEvent)(eY);
            io[64] !== ai || io[65] !== ob || io[66] !== ov || io[67] !== og ? (eZ = () => {
                if (!og) return;
                document.addEventListener("pointerdown", ov, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && ob()
                        })
                    };
                window.addEventListener("blur", t);
                let n = ai ? er.c.subscribe("browser-sidebar-web-contents-pointer-down", () => ov()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", ov, !0)
                }
            }, io[64] = ai, io[65] = ob, io[66] = ov, io[67] = og, io[68] = eZ) : eZ = io[68], io[69] !== ai || io[70] !== og ? (eU = [ai, og], io[69] = ai, io[70] = og, io[71] = eU) : eU = io[71], (0, m.useEffect)(eZ, eU);
            let ox = aS?.type === "loading";
            io[72] !== iT || io[73] !== lP || io[74] !== lk || io[75] !== lE ? (eQ = () => {
                lf.current?.focus({
                    preventScroll: !0
                }), lP(!1), lE(null), iT(!1), lk("expanded")
            }, io[72] = iT, io[73] = lP, io[74] = lk, io[75] = lE, io[76] = eQ) : eQ = io[76];
            let oy = (0, eb.a)(eQ),
                [ow, oS] = (0, m.useState)(ek);
            io[77] === Symbol.for("react.memo_cache_sentinel") ? (eG = e => {
                oS(t => new Set([...t, e]))
            }, io[77] = eG) : eG = io[77];
            let oz = (0, eb.a)(eG);
            io[78] !== ai || io[79] !== oz || io[80] !== oy || io[81] !== ay ? (eJ = "ready" !== ay.type ? ay : {
                type: "ready",
                value: ay.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(F, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), oy()
                        },
                        onDismiss: ai ? () => oz(e.id) : e.onDismiss
                    })
                }))
            }, io[78] = ai, io[79] = oz, io[80] = oy, io[81] = ay, io[82] = eJ) : eJ = io[82];
            let oC = eJ,
                [ok, oj] = (0, m.useState)(ox);
            if (ok !== ox && (oj(ox), l3(!1), lw(null)), io[83] !== i5 || io[84] !== iM || io[85] !== ox || io[86] !== lS || io[87] !== om ? (e0 = () => {
                    if (!om || i5 || iM || ox) return;
                    let e = window.setTimeout(() => lw(lS), 1e4);
                    return () => window.clearTimeout(e)
                }, io[83] = i5, io[84] = iM, io[85] = ox, io[86] = lS, io[87] = om, io[88] = e0) : e0 = io[88], io[89] !== ag || io[90] !== i5 || io[91] !== iM || io[92] !== ox || io[93] !== lS || io[94] !== om ? (e1 = [ag, om, i5, iM, ox, lS], io[89] = ag, io[90] = i5, io[91] = iM, io[92] = ox, io[93] = lS, io[94] = om, io[95] = e1) : e1 = io[95], (0, m.useEffect)(e0, e1), io[96] !== oC || io[97] !== ai || io[98] !== ow || io[99] !== oy || io[100] !== ox || io[101] !== iF || io[102] !== iK || io[103] !== l2) {
                if (e2 = oC, ai && ox && !l2) {
                    let e, t;
                    io[105] === Symbol.for("react.memo_cache_sentinel") ? (e = () => l3(!0), io[105] = e) : e = io[105], io[106] !== oy || io[107] !== iF || io[108] !== iK ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(F, {
                            title: iF,
                            preview: "",
                            isWorking: !0,
                            workingContent: iK,
                            onOpen: oy,
                            onDismiss: e
                        })
                    }], io[106] = oy, io[107] = iF, io[108] = iK, io[109] = t) : t = io[109], e2 = {
                        type: "ready",
                        value: t
                    }
                } else if (ai && "ready" === oC.type) {
                    let e;
                    if (io[110] !== oC.value || io[111] !== ow) {
                        let t;
                        io[113] !== ow ? (t = e => !ow.has(e.id), io[113] = ow, io[114] = t) : t = io[114], e = oC.value.filter(t), io[110] = oC.value, io[111] = ow, io[112] = e
                    } else e = io[112];
                    e2 = {
                        ...oC,
                        value: e
                    }
                }
                io[96] = oC, io[97] = ai, io[98] = ow, io[99] = oy, io[100] = ox, io[101] = iF, io[102] = iK, io[103] = l2, io[104] = e2
            } else e2 = io[104];
            "ready" !== e2.type && lM && lP(!1);
            let oE = "ready" === e2.type && e2.value.length > 0 && (l8 ? iM && (ai ? oi : lM) && !l_ : !ai && oa),
                oM = !ai && (aC?.type === "loading" || aC?.unread === !0 && !oE),
                oP = ox || aS?.unread === !0 && (iM || !oE);
            io[115] !== e2.type || io[116] !== e2.value || io[117] !== ai || io[118] !== oz || io[119] !== ox || io[120] !== lP ? (e3 = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), lv.current?.contains(document.activeElement) && lg.current?.focus({
                            preventScroll: !0
                        }), ai) {
                        if (ox) l3(!0);
                        else if ("ready" === e2.type)
                            for (let e of e2.value) oz(e.id)
                    } else lP(!1)
            }, io[115] = e2.type, io[116] = e2.value, io[117] = ai, io[118] = oz, io[119] = ox, io[120] = lP, io[121] = e3) : e3 = io[121];
            let oR = (0, m.useEffectEvent)(e3);
            io[122] !== oR || io[123] !== oE || io[124] !== i5 || io[125] !== iM ? (e4 = () => {
                if (!i5 && iM && oE) return document.addEventListener("keydown", oR), () => document.removeEventListener("keydown", oR)
            }, io[122] = oR, io[123] = oE, io[124] = i5, io[125] = iM, io[126] = e4) : e4 = io[126], io[127] !== oE || io[128] !== i5 || io[129] !== iM ? (e5 = [oE, i5, iM], io[127] = oE, io[128] = i5, io[129] = iM, io[130] = e5) : e5 = io[130], (0, m.useEffect)(e4, e5);
            let oN = !iM && !l8 && (ai && !i6 || !oa || lR || lL || l_ || a_),
                oL = (oc || ar) && (i6 ? !iM && !l8 : ai || oN),
                oT = oc && oL && !os && null == iy;
            io[131] !== aj ? (e6 = aj.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running",
                description: "Status of a running task in the floating composer"
            }), io[131] = aj, io[132] = e6) : e6 = io[132];
            let oD = e6;
            io[133] !== aj ? (e7 = aj.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response",
                description: "Status of a floating task with an unread response"
            }), io[133] = aj, io[134] = e7) : e7 = io[134];
            let oq = e7,
                o_ = ox ? oD : oq,
                oF = la.endsWith("left"),
                oI = "bottom-center" === la,
                oH = oF ? "left" : "right",
                oW = ll && !l8 ? aI : 0,
                oA = 46 * (null == id) + (ll || l8 ? 0 : aI),
                oB = l0 ?? lo ?? P,
                oO = oE && !iM ? aJ : 0,
                o$ = (id?.height ?? aL) - aD - (ll ? oO + oW : 0),
                oK = Math.max(0, o$ - 32 - oA - (ll ? 0 : oO)),
                oV = null == id ? a2 / 2 : Math.max(0, a2 - 20),
                oX = ai && null != aV ? Math.min(oV, aV + 12) : oV,
                oY = (lX || 46) + (oc && oL ? 46 : 0) + (od ? a$ : 0) + 6 * !ai,
                oZ = (lX || 46) + (i6 && oc && oL ? 46 : 0) + (ou ? a$ : 0) + 6 * !ai,
                oU = eP(oB.height, Math.min(Math.max(400, lX + 46), oK), oK),
                oQ = Math.min(oa ? oY : Math.max(400, oY), oK),
                oG = a3 ? oX : Math.min(372, oX),
                oJ = eP(oa ? oY : oB.height, oQ, oK),
                o0 = (0, r.a)(oJ),
                o1 = (0, m.useRef)(!1),
                o2 = lX > 0,
                o3 = i5 || aR || lK || !ai && (iM || null != lj) ? 0 : .3,
                o4 = eP(oB.width + 12, oG, oX),
                o5 = (0, et.d)(la, {
                    height: oJ,
                    width: o4
                }, o$, a2, 12, oA),
                o6 = (0, r.a)(0);
            io[135] === Symbol.for("react.memo_cache_sentinel") ? (e8 = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, io[135] = e8) : e8 = io[135];
            let o7 = (0, r.a)(e8);
            io[136] !== ah || io[137] !== ar || io[138] !== ao || io[139] !== aa || io[140] !== o7 || io[141] !== o6 || io[142] !== ih || io[143] !== aR || io[144] !== aP || io[145] !== al ? (e9 = () => {
                let e, t = ar && ao && aa ? lf.current?.offsetParent : null;
                if (ar && ao && aa && t instanceof HTMLElement) {
                    let n = aa.getBoundingClientRect(),
                        i = t.getBoundingClientRect(),
                        a = (0, k.b)(n.width, aP),
                        l = al?.get() ?? a,
                        o = (0, C.f)(ao.contentPaneWidthRatio.get(), l, "unified"),
                        r = ah ? o : l - o;
                    e = `--floating-chat-dock-${ih}`, aa.style.setProperty(e, `${r}px`), o7.set({
                        x: (0, k.b)(n.left - i.left, aP) + (a - ("left" === ih ? l : r)) + 4 - 6,
                        y: (0, k.b)(n.top - i.top, aP) + 4,
                        width: r - 8 + 12,
                        height: (0, k.b)(i.bottom - n.top, aP) - 8 + 6
                    })
                }
                let n = +!!ar,
                    i = o6.get() === n ? null : (0, c.a)(o6, n, {
                        duration: .15 * !aR,
                        ease: N.e
                    });
                return () => {
                    i?.stop(), null != e && aa?.style.removeProperty(e)
                }
            }, io[136] = ah, io[137] = ar, io[138] = ao, io[139] = aa, io[140] = o7, io[141] = o6, io[142] = ih, io[143] = aR, io[144] = aP, io[145] = al, io[146] = e9) : e9 = io[146], io[147] !== id || io[148] !== ah || io[149] !== ar || io[150] !== ao || io[151] !== aa || io[152] !== o7 || io[153] !== o6 || io[154] !== ih || io[155] !== aR || io[156] !== aP || io[157] !== al ? (te = [id, 12, ah, ar, ao, aa, o7, o6, ih, aR, al, aP], io[147] = id, io[148] = ah, io[149] = ar, io[150] = ao, io[151] = aa, io[152] = o7, io[153] = o6, io[154] = ih, io[155] = aR, io[156] = aP, io[157] = al, io[158] = te) : te = io[158], (0, m.useLayoutEffect)(e9, te);
            let o8 = (0, s.a)(() => o6.get() * (o7.get().x - o5.x - lh.get())),
                o9 = (0, s.a)(() => o6.get() * (o7.get().y - o5.y - lp.get())),
                re = (0, s.a)(() => 0 === o6.get() ? "100%" : o4 + o6.get() * (o7.get().width - o4));
            io[159] !== o0 || io[160] !== o7 || io[161] !== o6 ? (tt = () => o0.get() + o6.get() * (o7.get().height - o0.get()), io[159] = o0, io[160] = o7, io[161] = o6, io[162] = tt) : tt = io[162];
            let rt = (0, s.a)(tt);
            io[163] !== o0 || io[164] !== oZ || io[165] !== oU || io[166] !== i6 || io[167] !== or || io[168] !== o6 ? (tn = () => Math.max(o6.get(), i6 && or ? 0 : eP((o0.get() - oZ) / Math.max(1, oU - oZ), 0, 1)), io[163] = o0, io[164] = oZ, io[165] = oU, io[166] = i6, io[167] = or, io[168] = o6, io[169] = tn) : tn = io[169];
            let rn = (0, s.a)(tn);
            io[170] !== lX || io[171] !== rn || io[172] !== as || io[173] !== rt || io[174] !== o6 ? (ti = () => Math.max(0, rt.get() - lX - 46 * (rn.get() - (as ? 0 : o6.get()))), io[170] = lX, io[171] = rn, io[172] = as, io[173] = rt, io[174] = o6, io[175] = ti) : ti = io[175];
            let ri = (0, s.a)(ti),
                ra = (0, r.a)(0),
                rl = (0, r.a)(0),
                ro = Math.max(0, oU - 46 - lX);
            io[176] !== ra || io[177] !== a$ || io[178] !== ro || io[179] !== rn || io[180] !== ak || io[181] !== ar ? (ta = () => ar || !ak ? 0 : (1 - rn.get()) * (ro - a$ + 12 - ra.get()), io[176] = ra, io[177] = a$, io[178] = ro, io[179] = rn, io[180] = ak, io[181] = ar, io[182] = ta) : ta = io[182];
            let rr = (0, s.a)(ta);
            io[183] !== rl || io[184] !== ra || io[185] !== ro || io[186] !== rn || io[187] !== ak ? (tl = () => {
                if (!ak || 1 === rn.get()) return "none";
                let e = 1 - rn.get(),
                    t = Math.max(0, ra.get()) * e,
                    n = Math.max(0, ro - ra.get() - rl.get()) * e;
                return `inset(${t}px 0 ${n}px 0)`
            }, io[183] = rl, io[184] = ra, io[185] = ro, io[186] = rn, io[187] = ak, io[188] = tl) : tl = io[188];
            let rs = (0, s.a)(tl);
            io[189] !== rn || io[190] !== ak ? (to = () => ak ? 1 : rn.get(), io[189] = rn, io[190] = ak, io[191] = to) : to = io[191];
            let rc = (0, s.a)(to);
            io[192] !== rn ? (tr = () => 1 - rn.get(), io[192] = rn, io[193] = tr) : tr = io[193];
            let ru = (0, s.a)(tr);
            io[194] !== rl || io[195] !== ra || io[196] !== ak || io[197] !== aB || io[198] !== aP ? (ts = () => {
                if (null == aB || !ak) return null;
                let e = aB.querySelectorAll('[data-markdown-text-style="assistant-message"]'),
                    t = e.item(e.length - 1);
                if (null == t) return null;
                let n = t.getBoundingClientRect(),
                    i = aB.getBoundingClientRect(),
                    a = parseFloat(getComputedStyle(t.firstElementChild ?? t).lineHeight),
                    l = Math.min((0, k.b)(n.height, aP), Number.isFinite(a) ? 2 * a : 56, 56);
                return ra.set((0, k.b)(n.top - i.top, aP)), rl.set(l), aK(l + 24), t
            }, io[194] = rl, io[195] = ra, io[196] = ak, io[197] = aB, io[198] = aP, io[199] = ts) : ts = io[199];
            let rd = (0, m.useEffectEvent)(ts);
            io[200] !== ai || io[201] !== ak || io[202] !== or || io[203] !== i5 || io[204] !== rd || io[205] !== aB ? (tc = () => {
                if (!ai || i5 || null == aB || !ak) return;
                let e = null,
                    t = new ResizeObserver(() => u.b.read(n)),
                    n = () => {
                        let n = rd();
                        e !== n && (t.disconnect(), e = n, null != n && t.observe(n))
                    },
                    i = () => {
                        u.b.read(n)
                    };
                if (n(), !or) return void t.disconnect();
                let a = new MutationObserver(i);
                return a.observe(aB, {
                    childList: !0,
                    subtree: !0
                }), aB.addEventListener("scroll", i, !0), () => {
                    (0, u.a)(n), t.disconnect(), a.disconnect(), aB.removeEventListener("scroll", i, !0)
                }
            }, io[200] = ai, io[201] = ak, io[202] = or, io[203] = i5, io[204] = rd, io[205] = aB, io[206] = tc) : tc = io[206], io[207] !== ai || io[208] !== ak || io[209] !== or || io[210] !== i5 || io[211] !== aB ? (tu = [ai, ak, or, i5, aB], io[207] = ai, io[208] = ak, io[209] = or, io[210] = i5, io[211] = aB, io[212] = tu) : tu = io[212], (0, m.useLayoutEffect)(tc, tu), io[213] !== o0 || io[214] !== lX || io[215] !== ai || io[216] !== oJ || io[217] !== o2 || io[218] !== oa || io[219] !== rd || io[220] !== o3 ? (td = () => {
                let e, t = !o1.current && oa;
                if (o2 && (o1.current = !0), t || 0 === o3) return void o0.jump(oJ);
                let n = () => {
                    if (ai) {
                        let e = lm.current;
                        if (null != e && e.offsetHeight !== Math.round(lX)) return void lY(e.offsetHeight);
                        rd()
                    }
                    let t = (0, c.a)(o0, oJ, {
                        duration: o3,
                        ease: N.e
                    });
                    e = () => t.stop()
                };
                return ai ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, io[213] = o0, io[214] = lX, io[215] = ai, io[216] = oJ, io[217] = o2, io[218] = oa, io[219] = rd, io[220] = o3, io[221] = td) : td = io[221];
            let rh = (0, m.useEffectEvent)(td),
                rp = ai ? lX : null,
                rm = ai ? null : o2,
                rf = ai ? null : oa;
            io[222] !== rh ? (th = () => rh(), io[222] = rh, io[223] = th) : th = io[223], io[224] !== oJ || io[225] !== rm || io[226] !== rf || io[227] !== rp || io[228] !== o3 ? (tp = [oJ, o3, rp, rm, rf], io[224] = oJ, io[225] = rm, io[226] = rf, io[227] = rp, io[228] = o3, io[229] = tp) : tp = io[229], (0, m.useLayoutEffect)(th, tp);
            let rg = ai ? rn : void 0;
            io[230] !== rg ? (tm = {
                "--quick-chat-expansion": rg
            }, io[230] = rg, io[231] = tm) : tm = io[231];
            let rv = tm,
                rb = {
                    height: Math.min(36, oK),
                    width: Math.min(36, oX)
                },
                rx = (0, et.f)(iM ? la : lB?.dockPosition ?? lt, iv),
                ry = (0, et.d)(rx, rb, o$, a2, 0, oA),
                rw = iM ? rb : {
                    height: oJ,
                    width: o4
                },
                rS = iM ? ry : o5,
                rz = iM ? 16 : 10,
                rC = Math.max(rz, a2 - rw.width - rz),
                rk = oA + rz,
                rj = Math.max(rz, o$ - rw.height - rz);
            io[232] !== rz || io[233] !== rC || io[234] !== rk || io[235] !== rj ? (tf = {
                left: rz,
                right: rC,
                top: rk,
                bottom: rj
            }, io[232] = rz, io[233] = rC, io[234] = rk, io[235] = rj, io[236] = tf) : tf = io[236];
            let rE = tf;
            io[237] === Symbol.for("react.memo_cache_sentinel") ? (tg = () => {
                ld.current = null
            }, io[237] = tg) : tg = io[237], io[238] !== id || io[239] !== aP ? (tv = [id, aP], io[238] = id, io[239] = aP, io[240] = tv) : tv = io[240], (0, m.useLayoutEffect)(tg, tv);
            let rM = e => {
                    if (!i1) return;
                    ld.current = null == id ? null : lf.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, k.b)(e.clientX - (ld.current?.left ?? 0), aP),
                        y: (0, k.b)(e.clientY - (ld.current?.top ?? 0), aP)
                    };
                    lc.current = {
                        x: t.x - rS.x - lh.get(),
                        y: t.y - rS.y - lp.get()
                    }, lu.current = {
                        point: t,
                        target: null
                    }, lr.start(e)
                },
                rP = (0, et.d)(rx, {
                    height: oJ,
                    width: o4
                }, o$, a2, 12, oA),
                rR = ry.x - rP.x,
                rN = ry.y - rP.y,
                rL = o4 - rR - rb.width,
                rT = oJ - rN - rb.height;
            io[241] !== rR || io[242] !== rN || io[243] !== rL || io[244] !== rT ? (tb = {
                top: rN,
                right: rL,
                bottom: rT,
                left: rR
            }, io[241] = rR, io[242] = rN, io[243] = rL, io[244] = rT, io[245] = tb) : tb = io[245];
            let rD = tb,
                rq = `inset(${rD.top}px ${rD.right}px ${rD.bottom}px ${rD.left}px round var(--floating-panel-radius))`,
                r_ = (0, s.a)(() => {
                    let e = l9.get(),
                        t = o0.get() - oJ,
                        n = e * (rD.top + (ll ? 0 : t)),
                        i = 6 + e * (rD.right - 6),
                        a = 6 + e * (rD.bottom + (ll ? t : 0) - 6),
                        l = 6 + e * (rD.left - 6),
                        o = o6.get(),
                        r = 0 === o ? "var(--radius-token-composer-single-line)" : `calc(var(--radius-token-composer-single-line) * ${1-o} + var(--app-shell-sidebar-popover-radius) * ${o})`,
                        s = l8 || l_ || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round ${r})` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: r,
                        clip: s
                    }
                });
            io[246] !== r_ ? (tx = () => r_.get().top, io[246] = r_, io[247] = tx) : tx = io[247];
            let rF = (0, s.a)(tx);
            io[248] !== r_ ? (ty = () => r_.get().right, io[248] = r_, io[249] = ty) : ty = io[249];
            let rI = (0, s.a)(ty);
            io[250] !== r_ ? (tw = () => r_.get().bottom, io[250] = r_, io[251] = tw) : tw = io[251];
            let rH = (0, s.a)(tw);
            io[252] !== r_ ? (tS = () => r_.get().left, io[252] = r_, io[253] = tS) : tS = io[253];
            let rW = (0, s.a)(tS);
            io[254] !== r_ ? (tz = () => r_.get().radius, io[254] = r_, io[255] = tz) : tz = io[255];
            let rA = (0, s.a)(tz);
            io[256] !== r_ ? (tC = () => r_.get().clip, io[256] = r_, io[257] = tC) : tC = io[257];
            let rB = (0, s.a)(tC);
            io[258] !== ai || io[259] !== l8 || io[260] !== l9 || io[261] !== aR ? (tk = () => {
                if (!ai) return;
                let e = (0, c.a)(l9, +!!l8, {
                    duration: .3 * !aR,
                    ease: N.e
                });
                return () => e.stop()
            }, tj = [ai, l8, l9, aR], io[258] = ai, io[259] = l8, io[260] = l9, io[261] = aR, io[262] = tk, io[263] = tj) : (tk = io[262], tj = io[263]), (0, m.useLayoutEffect)(tk, tj);
            let rO = ll ? {
                    top: rN + rb.height
                } : {
                    bottom: oJ - rN
                },
                r$ = (0, m.useRef)({
                    dockPosition: la,
                    dockThreadKey: ag,
                    isMinimized: iM
                });
            io[264] !== iN ? (tE = () => {
                iN?.(null)
            }, io[264] = iN, io[265] = tE) : tE = io[265];
            let rK = (0, m.useEffectEvent)(tE),
                rV = (0, m.useEffectEvent)(e => {
                    let t = (0, et.d)(e, {
                        height: oJ,
                        width: o4
                    }, o$, a2, 12, oA);
                    lh.stop(), lp.stop(), lh.jump(lh.get() + t.x - o5.x), lp.jump(lp.get() + t.y - o5.y);
                    let n = aR ? {
                        duration: 0
                    } : ew;
                    (0, c.a)(lh, 0, n), (0, c.a)(lp, 0, n)
                });
            (0, m.useLayoutEffect)(() => {
                let e = r$.current;
                if (r$.current = {
                        dockPosition: la,
                        dockThreadKey: ag,
                        isMinimized: iM
                    }, e.dockThreadKey !== ag) {
                    ls.current = !0, l$.current = !0, lr.cancel(), rK(), lh.jump(0), lp.jump(0);
                    return
                }
                if (i5) {
                    lh.jump(0), lp.jump(0);
                    return
                }
                e.isMinimized !== iM && rV(e.dockPosition)
            }, [la, ag, lr, lh, lp, i5, iM]), io[266] !== lh || io[267] !== lp ? (tM = () => () => {
                lh.stop(), lp.stop()
            }, tP = [lh, lp], io[266] = lh, io[267] = lp, io[268] = tM, io[269] = tP) : (tM = io[268], tP = io[269]), (0, m.useLayoutEffect)(tM, tP);
            let rX = e => {
                let t, n = {
                    ...rw,
                    left: rS.x + lh.get(),
                    top: rS.y + lp.get()
                };
                null != id && null == ld.current && (ld.current = lf.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == id ? null : ld.current,
                    a = {
                        x: e.point.x - (0, k.b)(i?.left ?? 0, aP),
                        y: e.point.y - (0, k.b)(i?.top ?? 0, aP)
                    };
                t = ai ? (0, et.b)(n, o$, a2, ex.filter(e => !iM || "bottom-right" === e).map(e => (0, et.f)(e, iv)), 12 * !iM, oA) : (0, et.e)({
                    ...n,
                    left: n.width >= a2 / 2 - 2 * rz ? a.x - n.width / 2 : n.left
                }, o$, a2, iM);
                let l = null == iv ? t : (0, et.f)(t, iv),
                    o = {
                        x: ai ? a2 - a.x : Math.min(a.x, a2 - a.x),
                        y: ai ? o$ - a.y : Math.min(a.y - oA, o$ - a.y)
                    },
                    r = o.x <= 16 + rb.width && o.y <= 16 + rb.height;
                if (ai && !iM) {
                    let e = lu.current;
                    if (null != e) {
                        let t = a.x - e.point.x,
                            n = a.y - e.point.y;
                        Math.hypot(t, n) >= 8 && (t >= 0 && n > 0 && n >= t ? e.target = "minimize" : t > 0 && t > 2 * Math.abs(n) ? e.target = null : (t < 0 || n < 0) && (e.target = null), e.point = a)
                    }
                    let n = a.y - lc.current.y + rw.height - o$;
                    return {
                        dockPosition: l,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        suppressEdgeDrop: r,
                        shouldMinimize: "bottom-right" === l && e?.target === "minimize" && n >= .5 * rw.width
                    }
                }
                let s = (0, et.d)(l, rw, o$, a2, 12, oA),
                    c = !iM && "bottom-center" !== l && 16 >= Math.abs(n.left - s.x) && 16 >= Math.abs(n.top - s.y);
                return {
                    dockPosition: l,
                    requestedDockPosition: t,
                    isNearDock: c,
                    suppressEdgeDrop: r,
                    shouldMinimize: c && r
                }
            };
            io[270] !== i1 || io[271] !== ai || io[272] !== ag || io[273] !== ik || io[274] !== i9 ? (tR = (e, t) => {
                i1 && (null != ag || ai && !t ? (0, en.c)(i9, {
                    threadKey: ag ?? null,
                    minimized: t
                }, e, ik) : le(n => ({
                    expanded: t ? n.expanded : e,
                    minimized: t ? (0, et.a)(e) : n.minimized
                })))
            }, io[270] = i1, io[271] = ai, io[272] = ag, io[273] = ik, io[274] = i9, io[275] = tR) : tR = io[275];
            let rY = tR,
                rZ = (e, t, n) => {
                    let i = void 0 === n ? rw : n,
                        a = (0, et.d)(la, rw, o$, a2, 12 * !iM, oA),
                        l = {
                            x: a.x + lh.get(),
                            y: a.y + lp.get()
                        },
                        o = (0, et.d)((0, et.f)(e, iv), i, o$, a2, 12 * !iM, oA);
                    lh.stop(), lp.stop(), lh.jump(l.x - o.x), lp.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        rY(e, iM)
                    });
                    let r = ai ? {
                            duration: .3,
                            ease: N.e
                        } : ew,
                        s = aR ? {
                            duration: 0
                        } : r;
                    lH(!0), Promise.all([(0, c.a)(lh, 0, s), (0, c.a)(lp, 0, s)]).then(() => {
                        lH(0 !== lh.get() || 0 !== lp.get())
                    })
                },
                rU = (0, m.useEffectEvent)(() => {
                    ls.current = !0, lr.cancel(), iN?.(null), rZ(la, !1), lO(null), lE(null), lF(!1)
                });
            io[276] !== rU || io[277] !== lr || io[278] !== l_ ? (tN = () => {
                if (!l_) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), rU())
                    },
                    t = () => rU();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    ls.current = !0, lr.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, io[276] = rU, io[277] = lr, io[278] = l_, io[279] = tN) : tN = io[279], io[280] !== lr || io[281] !== l_ ? (tL = [lr, l_], io[280] = lr, io[281] = l_, io[282] = tL) : tL = io[282], (0, m.useLayoutEffect)(tN, tL);
            let rQ = (e, t) => {
                    let n = ai && oI ? 0 : (0, et.c)(la, e, {
                            height: oJ,
                            width: o4
                        }, lh.get(), t.width, o$, a2, 12),
                        i = o5.y + lp.get(),
                        a = (0, et.d)(la, t, o$, a2, 12, oA),
                        l = eP(i + (ll ? 0 : oJ - t.height), oA + 10, o$ - t.height - 10);
                    lh.stop(), lp.stop(), (0, f.flushSync)(() => {
                        l1({
                            height: oa ? oB.height : t.height,
                            width: t.width - 12
                        })
                    }), lh.jump(n), lp.jump(l - a.y)
                },
                rG = e => {
                    el(i9, {
                        height: oa ? oB.height : e.height,
                        width: e.width - 12
                    }, () => iD?.(la)), rZ(la, !1, e)
                };
            io[283] !== ai || io[284] !== l_ || io[285] !== iT || io[286] !== lP || io[287] !== lO || io[288] !== lE ? (tT = () => {
                lP(!1), lA(!l_), lO(null), lE(ai ? null : {
                    target: "minimized"
                }), iT(!0)
            }, io[283] = ai, io[284] = l_, io[285] = iT, io[286] = lP, io[287] = lO, io[288] = lE, io[289] = tT) : tT = io[289];
            let rJ = tT;
            if (io[290] !== ai || io[291] !== i4 || io[292] !== an || io[293] !== oa || io[294] !== i5 || io[295] !== iM || io[296] !== iL || io[297] !== iT || io[298] !== lC || io[299] !== lP || io[300] !== lk || io[301] !== lE) {
                let e, t, n, i;
                tH = () => {
                    (0, f.flushSync)(() => {
                        lP(!1), lE(ai ? null : {
                            target: lC
                        }), iT(!1)
                    }), t_()
                }, io[309] !== oa || io[310] !== lk || io[311] !== lE ? (e = () => {
                    lE(null), lk(oa ? "expanded" : "compact")
                }, io[309] = oa, io[310] = lk, io[311] = lE, io[312] = e) : e = io[312], tW = e, tD = !i5 && !iM && (null != iL || !oa && !i4), io[313] !== iL || io[314] !== lk || io[315] !== lE ? (t = () => {
                    null != iL ? iL() : (lE(null), lk("compact"))
                }, io[313] = iL, io[314] = lk, io[315] = lE, io[316] = t) : t = io[316], tq = t, io[317] !== tD || io[318] !== tq ? (n = e => {
                    !tD || "Escape" !== e.key || e.defaultPrevented || e.repeat || e.nativeEvent.isComposing || (e.preventDefault(), e.stopPropagation(), tq())
                }, io[317] = tD, io[318] = tq, io[319] = n) : n = io[319], tI = n, io[320] !== an ? (i = () => {
                    let e = lm.current;
                    return an ? (0, Z.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, io[320] = an, io[321] = i) : i = io[321], tF = i, t_ = () => {
                    ai && (lE(null), lk("expanded")), tF()?.focus({
                        preventScroll: !0
                    })
                }, io[290] = ai, io[291] = i4, io[292] = an, io[293] = oa, io[294] = i5, io[295] = iM, io[296] = iL, io[297] = iT, io[298] = lC, io[299] = lP, io[300] = lk, io[301] = lE, io[302] = tD, io[303] = tq, io[304] = t_, io[305] = tF, io[306] = tI, io[307] = tH, io[308] = tW
            } else tD = io[302], tq = io[303], t_ = io[304], tF = io[305], tI = io[306], tH = io[307], tW = io[308];
            let r0 = !i5 && an;
            io[322] !== tF || io[323] !== an || io[324] !== iM ? (tA = () => {
                if (null == lf.current || null != lf.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (an) return iM;
                let e = tF();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !lm.current?.contains(t) || t === lm.current
            }, io[322] = tF, io[323] = an, io[324] = iM, io[325] = tA) : tA = io[325], io[326] !== r0 || io[327] !== tA ? (tB = {
                enabled: r0,
                isActive: tA
            }, io[326] = r0, io[327] = tA, io[328] = tB) : tB = io[328], (0, K.a)("focusMainChat", iM ? tH : t_, tB), io[329] !== aj || io[330] !== oa ? (tO = aj.formatMessage(oa ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat",
                description: "Accessible label for expanding a compact floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat",
                description: "Accessible label for collapsing a floating chat"
            }), io[329] = aj, io[330] = oa, io[331] = tO) : tO = io[331];
            let r1 = tO;
            io[332] !== oo || io[333] !== r1 || io[334] !== tW ? (t$ = oo ? {
                label: r1,
                onToggle: tW
            } : void 0, io[332] = oo, io[333] = r1, io[334] = tW, io[335] = t$) : t$ = io[335];
            let r2 = t$;
            io[336] !== aj ? (tK = aj.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width",
                description: "Accessible label for resizing the chat width"
            }), io[336] = aj, io[337] = tK) : tK = io[337];
            let r3 = tK;
            io[338] !== aj ? (tV = aj.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height",
                description: "Accessible label for resizing the chat height"
            }), io[338] = aj, io[339] = tV) : tV = io[339];
            let r4 = tV;
            io[340] !== i6 || io[341] !== lk || io[342] !== lE ? (tX = () => {
                lE(null), i6 && lk("expanded")
            }, io[340] = i6, io[341] = lk, io[342] = lE, io[343] = tX) : tX = io[343];
            let r5 = (0, eb.a)(tX);
            io[344] !== ai || io[345] !== r5 || io[346] !== i6 || io[347] !== lE ? (tY = ai || i6 ? r5 : () => lE(null), io[344] = ai, io[345] = r5, io[346] = i6, io[347] = lE, io[348] = tY) : tY = io[348];
            let r6 = {
                    isCompact: or,
                    canShowPreviewBubble: oh,
                    isNarrow: lQ,
                    isChromeRevealed: oN,
                    isHeaderVisible: oL,
                    isComposerFocused: ai ? lD : oN,
                    isDockedTop: ll,
                    isHidden: i5,
                    isMinimized: l8,
                    shouldReduceMotion: aR,
                    onSubmitStart: tY
                },
                r7 = {
                    isMoving: l_ || lK || lI,
                    composerContentHeight: lZ,
                    dockedReservePx: lX > lZ + 6 * !!ai ? oJ + 10 : 0
                };
            io[349] !== i5 || io[350] !== iz ? (tZ = function(e) {
                !i5 && null != iz && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (lf.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, io[349] = i5, io[350] = iz, io[351] = tZ) : tZ = io[351];
            let r8 = tZ;
            io[352] !== i6 ? (tU = function(e) {
                !i6 && e.target instanceof Element && (!lf.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, io[352] = i6, io[353] = tU) : tU = io[353];
            let r9 = tU,
                se = iu(r6, r7),
                st = tD ? tq : null;
            io[354] !== lJ ? (tQ = e => {
                lm.current = e, lJ(e)
            }, io[354] = lJ, io[355] = tQ) : tQ = io[355], io[356] !== of || io[357] !== or || io[358] !== os || io[359] !== od ? (tG = of && !os && (!or || od) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, io[356] = of, io[357] = or, io[358] = os, io[359] = od, io[360] = tG) : tG = io[360], io[361] !== aW ? (tJ = {
                target: aW,
                homeBannerPlacement: "inline"
            }, io[361] = aW, io[362] = tJ) : tJ = io[362];
            let sn = (0, i.jsxs)("div", {
                ref: tQ,
                className: (0, l.b)(T.a.floatingComposerInset, "mt-auto shrink-0", oa && ll && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: r8,
                onContextMenu: r9,
                children: [tG, (0, i.jsx)(ep.b, {
                    value: {
                        ...ab,
                        hasComposerSurface: of,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !i5 && !oa && !iM,
                        floatingChatSurfaceRef: lf,
                        floatingComposerPresentation: r6,
                        transcriptTarget: aB,
                        followLatestTranscript: ai ? or : ab.followLatestTranscript
                    },
                    children: (0, i.jsx)(Y.a, {
                        value: st,
                        children: (0, i.jsx)(X.a, {
                            value: tJ,
                            children: se
                        })
                    })
                })]
            });
            io[363] !== ai || io[364] !== or || io[365] !== rJ ? (t0 = ai ? null : (0, i.jsx)(ee.c, {
                isCompact: or,
                onMinimize: rJ
            }), io[363] = ai, io[364] = or, io[365] = rJ, io[366] = t0) : t0 = io[366];
            let si = t0,
                sa = iy ? iy({
                    leadingControl: si
                }) : (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-1 items-center gap-1",
                    children: [si, oM && null != aC ? (0, i.jsx)("div", {
                        className: "flex items-center justify-center",
                        role: "status",
                        "aria-label": "loading" === aC.type ? oD : oq,
                        children: (0, i.jsx)(eh.a, {
                            statusState: aC
                        })
                    }) : null, (0, i.jsx)("h2", {
                        id: aE,
                        "data-dropdown-overlay-side": ll ? "bottom" : "top",
                        className: (0, l.b)("max-w-80 min-w-0 text-base font-medium text-secondary", (!ai || null == iI) && "truncate"),
                        children: iI ?? (ai ? (0, i.jsx)(ee.b, {
                            children: (0, i.jsx)("span", {
                                className: "truncate",
                                children: i8 ? iF : (0, i.jsx)(v.a, {
                                    id: "quickChat.newChatTitle",
                                    defaultMessage: "New chat",
                                    description: "Title of the expanded floating composer before a chat has started"
                                })
                            })
                        }) : iF)
                    })]
                });
            io[367] !== a_ || io[368] !== or || io[369] !== l_ || io[370] !== rJ || io[371] !== iz ? (t1 = iz?.({
                isCompact: or,
                isDragging: l_,
                open: a_,
                onMinimize: rJ,
                onOpenChange: aF
            }), io[367] = a_, io[368] = or, io[369] = l_, io[370] = rJ, io[371] = iz, io[372] = t1) : t1 = io[372], io[373] !== ai || io[374] !== or || io[375] !== rJ ? (t2 = ai && (0, i.jsx)(ee.c, {
                isCompact: or,
                onMinimize: rJ
            }), io[373] = ai, io[374] = or, io[375] = rJ, io[376] = t2) : t2 = io[376], io[377] !== sa || io[378] !== t1 || io[379] !== t2 ? (t3 = (0, i.jsxs)(i.Fragment, {
                children: [sa, t1, t2]
            }), io[377] = sa, io[378] = t1, io[379] = t2, io[380] = t3) : t3 = io[380];
            let sl = t3,
                so = ac ? "hidden" : "contents";
            io[381] !== i3 || io[382] !== ai || io[383] !== sl || io[384] !== i2 || io[385] !== i6 || io[386] !== or || io[387] !== oL || io[388] !== iM || io[389] !== r2 || io[390] !== lj || io[391] !== aR ? (t4 = ai ? (0, i.jsx)(ee.a, {
                isCompact: i6 && or,
                isVisible: oL,
                isDisabled: i2,
                children: sl
            }) : (0, i.jsx)(ee.d, {
                expandOnClick: i6,
                animateChrome: !aR && !iM && null == lj,
                isChromeRevealed: oL,
                isCompact: or,
                isDisabled: i2,
                presentationToggle: i3 ? r2 : void 0,
                children: sl
            }), io[381] = i3, io[382] = ai, io[383] = sl, io[384] = i2, io[385] = i6, io[386] = or, io[387] = oL, io[388] = iM, io[389] = r2, io[390] = lj, io[391] = aR, io[392] = t4) : t4 = io[392], io[393] !== r9 || io[394] !== r8 || io[395] !== so || io[396] !== t4 ? (t5 = (0, i.jsx)("div", {
                className: so,
                onPointerDownCapture: r8,
                onContextMenu: r9,
                children: t4
            }), io[393] = r9, io[394] = r8, io[395] = so, io[396] = t4, io[397] = t5) : t5 = io[397];
            let sr = t5,
                ss = ai ? {
                    top: rx.startsWith("top") ? rN : void 0,
                    bottom: rx.startsWith("top") ? void 0 : rD.bottom,
                    left: rR,
                    width: rb.width,
                    height: rb.height,
                    opacity: l9
                } : {
                    inset: 0
                },
                sc = !iM,
                su = iM ? av : void 0;
            io[398] !== ai || io[399] !== l8 ? (t6 = ai ? void 0 : {
                opacity: +!!l8
            }, io[398] = ai, io[399] = l8, io[400] = t6) : t6 = io[400];
            let sd = !iM || void 0;
            io[401] !== aR ? (t7 = aR ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, io[401] = aR, io[402] = t7) : t7 = io[402];
            let sh = iM ? "minimized" : "preview",
                sp = iM && "pointer-events-auto";
            io[403] !== sp ? (t8 = (0, l.b)("absolute inset-0 m-auto touch-none", sp), io[403] = sp, io[404] = t8) : t8 = io[404];
            let sm = oP ? o_ : void 0;
            io[405] !== aj || io[406] !== iA || io[407] !== iF ? (t9 = iA ?? aj.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}",
                description: "Accessible label for restoring a minimized floating chat"
            }, {
                title: iF
            }), io[405] = aj, io[406] = iA, io[407] = iF, io[408] = t9) : t9 = io[408];
            let sf = !i5 && iM && lW;
            io[409] !== tH ? (ne = e => {
                0 !== e.detail && l$.current || tH()
            }, io[409] = tH, io[410] = ne) : ne = io[410], io[411] !== ai || io[412] !== lP ? (nt = e => {
                ai || "touch" === e.pointerType || lP(!0)
            }, io[411] = ai, io[412] = lP, io[413] = nt) : nt = io[413], io[414] !== e2.type || io[415] !== ai || io[416] !== lP ? (nn = e => {
                "ready" === e2.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), ai || (0, f.flushSync)(() => lP(!0)), lv.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, io[414] = e2.type, io[415] = ai, io[416] = lP, io[417] = nn) : nn = io[417], io[418] !== a3 || io[419] !== rM ? (ni = e => {
                a3 || 0 !== e.button || (l$.current = !1, e.currentTarget.setPointerCapture(e.pointerId), rM(e))
            }, io[418] = a3, io[419] = rM, io[420] = ni) : ni = io[420], io[421] !== ai || io[422] !== oP || io[423] !== ox || io[424] !== iH || io[425] !== aS ? (na = ox && null != aS && null == iH ? (0, i.jsx)(eh.a, {
                statusState: aS,
                size: ai ? "default" : "compact"
            }) : (0, i.jsx)(U.a, {
                badgeEnabled: oP,
                children: iH ?? (0, i.jsx)(_.Ib, {})
            }), io[421] = ai, io[422] = oP, io[423] = ox, io[424] = iH, io[425] = aS, io[426] = na) : na = io[426], io[427] !== sh || io[428] !== t8 || io[429] !== sm || io[430] !== t9 || io[431] !== sf || io[432] !== ne || io[433] !== nt || io[434] !== nn || io[435] !== ni || io[436] !== na ? (nl = (0, i.jsx)(q.a, {
                ref: lg,
                className: t8,
                "aria-description": sm,
                "aria-label": t9,
                autoFocus: sf,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: ne,
                onPointerEnter: nt,
                onKeyDown: nn,
                onPointerDown: ni,
                children: na
            }, sh), io[427] = sh, io[428] = t8, io[429] = sm, io[430] = t9, io[431] = sf, io[432] = ne, io[433] = nt, io[434] = nn, io[435] = ni, io[436] = na, io[437] = nl) : nl = io[437], io[438] !== ss || io[439] !== sc || io[440] !== su || io[441] !== t6 || io[442] !== sd || io[443] !== t7 || io[444] !== nl ? (no = (0, i.jsx)(d.a.div, {
                ref: E.c,
                className: "pointer-events-none absolute",
                style: ss,
                "aria-hidden": sc,
                "data-pip-obstacle": su,
                animate: t6,
                initial: !1,
                inert: sd,
                transition: t7,
                children: nl
            }), io[438] = ss, io[439] = sc, io[440] = su, io[441] = t6, io[442] = sd, io[443] = t7, io[444] = nl, io[445] = no) : no = io[445];
            let sg = no,
                sv = "ready" === e2.type ? (0, i.jsx)(W, {
                    items: e2.value,
                    availableHeight: Math.max(0, (id?.height ?? aL) - oA - aD - (iM ? rb.height : oY) - 32 - 12),
                    isDockedTop: ll,
                    shouldReduceMotion: aR
                }) : null;
            !ai && (nr = ey, l8 ? nr = rq : null != lj || l_ || (nr = "none"));
            let sb = null != lj || !iM;
            io[446] !== ai || io[447] !== rt || io[448] !== re || io[449] !== o8 || io[450] !== o9 || io[451] !== rA ? (ns = ai ? {
                x: o8,
                y: o9,
                width: re,
                height: rt,
                borderRadius: rA
            } : void 0, io[446] = ai, io[447] = rt, io[448] = re, io[449] = o8, io[450] = o9, io[451] = rA, io[452] = ns) : ns = io[452], io[453] !== ai || io[454] !== rH || io[455] !== rW || io[456] !== rA || io[457] !== rI || io[458] !== rF ? (nc = ai ? {
                top: rF,
                right: rI,
                bottom: rH,
                left: rW,
                borderRadius: rA
            } : void 0, io[453] = ai, io[454] = rH, io[455] = rW, io[456] = rA, io[457] = rI, io[458] = rF, io[459] = nc) : nc = io[459], io[460] !== oJ || io[461] !== o4 ? (nu = {
                height: oJ,
                width: o4
            }, io[460] = oJ, io[461] = o4, io[462] = nu) : nu = io[462];
            let sx = ai && oI,
                sy = ai && !oI ? oH : void 0,
                sw = oc && oL;
            io[463] !== oK || io[464] !== oX ? (nd = {
                height: oK,
                width: oX
            }, io[463] = oK, io[464] = oX, io[465] = nd) : nd = io[465], io[466] !== sg || io[467] !== iW ? (nh = null == iW ? sg : (0, i.jsx)(Q.a, {
                disableNative: !0,
                items: iW,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: sg
                })
            }), io[466] = sg, io[467] = iW, io[468] = nh) : nh = io[468], io[469] !== oQ || io[470] !== oG ? (np = {
                height: oQ,
                width: oG
            }, io[469] = oQ, io[470] = oG, io[471] = np) : np = io[471];
            let sS = !a3 && !ar,
                sz = l8 || ai ? "panel" : ic,
                sC = oT ? void 0 : iF,
                sk = oT ? aE : void 0,
                sj = null != id && void 0;
            io[472] !== i0 || io[473] !== o2 || io[474] !== aR ? (nm = i0 ? {
                opacity: +!!o2,
                translateY: 8 * (!o2 && !aR)
            } : {}, io[472] = i0, io[473] = o2, io[474] = aR, io[475] = nm) : nm = io[475];
            let sE = ai || lB?.stage !== "approaching" ? 1 : .95;
            io[476] !== o4 || io[477] !== nm || io[478] !== sE ? (nf = {
                ...nm,
                width: o4,
                scale: sE
            }, io[476] = o4, io[477] = nm, io[478] = sE, io[479] = nf) : nf = io[479];
            let sM = !!ai && void 0 !== ih && !!l_ || void 0,
                sP = !ai && oa || void 0,
                sR = iM ? void 0 : av,
                sN = !a3,
                sL = null == id ? void 0 : {
                    left: rE.left - rS.x,
                    right: rE.right - rS.x,
                    top: rE.top - rS.y,
                    bottom: rE.bottom - rS.y
                },
                sT = null == id ? void 0 : 0;
            io[480] !== i0 || io[481] !== aR ? (ng = !!i0 && !aR && {
                opacity: 0,
                translateY: 8
            }, io[480] = i0, io[481] = aR, io[482] = ng) : ng = io[482];
            let sD = null == id ? "dialog" : "region",
                sq = ll ? oA + 10 : "auto",
                s_ = ll ? "auto" : 10 + aD,
                sF = oI ? "50%" : "auto";
            io[483] !== oH || io[484] !== oI ? (nv = !oI && {
                [oH]: 10
            }, io[483] = oH, io[484] = oI, io[485] = nv) : nv = io[485];
            let sI = oI ? "-50% 0" : void 0,
                sH = "bottom-center" === rx ? .5 : Number(rx.endsWith("right")),
                sW = +!rx.startsWith("top");
            io[486] !== o0 || io[487] !== rv || io[488] !== lh || io[489] !== lp || io[490] !== sq || io[491] !== s_ || io[492] !== sF || io[493] !== nv || io[494] !== sI || io[495] !== sH || io[496] !== sW ? (nb = {
                ...rv,
                height: o0,
                top: sq,
                bottom: s_,
                left: sF,
                right: "auto",
                ...nv,
                translate: sI,
                x: lh,
                y: lp,
                originX: sH,
                originY: sW
            }, io[486] = o0, io[487] = rv, io[488] = lh, io[489] = lp, io[490] = sq, io[491] = s_, io[492] = sF, io[493] = nv, io[494] = sI, io[495] = sH, io[496] = sW, io[497] = nb) : nb = io[497];
            let sA = .3 * !aR;
            io[498] !== sA ? (nx = {
                duration: sA,
                ease: N.e
            }, io[498] = sA, io[499] = nx) : nx = io[499], io[500] !== o3 || io[501] !== nx ? (ny = {
                duration: o3,
                ease: N.e,
                scale: nx
            }, io[500] = o3, io[501] = nx, io[502] = ny) : ny = io[502], io[503] !== ai || io[504] !== i6 || io[505] !== i5 || io[506] !== aM || io[507] !== lq || io[508] !== lN || io[509] !== lP || io[510] !== lk || io[511] !== lE || io[512] !== og ? (nw = e => {
                if (!(i5 || eM(e.currentTarget, e.relatedTarget, aM))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && eM(t, t.ownerDocument.activeElement, aM) || (lN(!1), lq(!1), lP(!1))
                        });
                        return
                    }
                    lN(!1), lq(!1), lP(!1), (!ai || i6) && og && null == e.target.closest("[inert]") && (lE(null), lk("compact"))
                }
            }, io[503] = ai, io[504] = i6, io[505] = i5, io[506] = aM, io[507] = lq, io[508] = lN, io[509] = lP, io[510] = lk, io[511] = lE, io[512] = og, io[513] = nw) : nw = io[513], io[514] !== oo || io[515] !== ai || io[516] !== t_ || io[517] !== oa || io[518] !== i6 || io[519] !== iM || io[520] !== lk || io[521] !== lE || io[522] !== oc || io[523] !== tW ? (nS = e => {
                if (!(i6 && (0 !== e.button || e.ctrlKey) || iM || l$.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (oa && (e.target === e.currentTarget || lm.current?.contains(e.target))) return void t_();
                    if (i6) {
                        if (!oc || !oo) return;
                        oa && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), lE(null), lk("expanded");
                        return
                    }
                    if (ai) {
                        oa && oo && t_();
                        return
                    }
                    oc && oo && e.target.closest("header[data-quick-chat-drag-handle]") && (oa && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), tW())
                }
            }, io[514] = oo, io[515] = ai, io[516] = t_, io[517] = oa, io[518] = i6, io[519] = iM, io[520] = lk, io[521] = lE, io[522] = oc, io[523] = tW, io[524] = nS) : nS = io[524], io[525] !== ai || io[526] !== oK || io[527] !== oX || io[528] !== oQ || io[529] !== oG || io[530] !== iM || io[531] !== iD || io[532] !== i9 || io[533] !== l1 || io[534] !== lk || io[535] !== lE || io[536] !== rZ ? (nz = e => {
                ai && !iM && !l$.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (lE(null), lk("expanded"), l1(null), el(i9, P, () => iD?.("bottom-right")), rZ("bottom-right", !0, {
                    height: eP(P.height, oQ, oK),
                    width: eP(P.width + 12, oG, oX)
                }))
            }, io[525] = ai, io[526] = oK, io[527] = oX, io[528] = oQ, io[529] = oG, io[530] = iM, io[531] = iD, io[532] = i9, io[533] = l1, io[534] = lk, io[535] = lE, io[536] = rZ, io[537] = nz) : nz = io[537], io[538] !== i5 ? (nC = e => {
                !i5 && l$.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, io[538] = i5, io[539] = nC) : nC = io[539], io[540] !== ai || io[541] !== rX || io[542] !== lB || io[543] !== iR || io[544] !== lC || io[545] !== lO || io[546] !== lE ? (nk = (e, t) => {
                let n = rX(t);
                if (!iR?.(n.suppressEdgeDrop ? null : e) && null != n.dockPosition && (ai ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching",
                        t = ai ? "bottom-right" : n.dockPosition;
                    (lB?.stage !== e || lB.dockPosition !== t) && (lO({
                        dockPosition: t,
                        stage: e
                    }), (n.shouldMinimize || lB?.stage === "minimized") && lE(ai ? null : {
                        target: n.shouldMinimize ? "minimized" : lC
                    }))
                } else null != lB && "restored" !== lB.stage && (lO({
                    ...lB,
                    stage: "restored"
                }), "minimized" === lB.stage && lE(ai ? null : {
                    target: lC
                }))
            }, io[540] = ai, io[541] = rX, io[542] = lB, io[543] = iR, io[544] = lC, io[545] = lO, io[546] = lE, io[547] = nk) : nk = io[547], io[548] !== ai || io[549] !== au || io[550] !== lh || io[551] !== lp || io[552] !== rX || io[553] !== ar || io[554] !== rJ || io[555] !== lB || io[556] !== iN || io[557] !== iR || io[558] !== lC || io[559] !== ae || io[560] !== rY || io[561] !== lF || io[562] !== lO || io[563] !== lE || io[564] !== aR || io[565] !== rZ ? (nj = (e, t) => {
                if (ls.current) return;
                let n = rX(t),
                    i = n.suppressEdgeDrop ? null : e,
                    a = e => !!iN?.(i, e) && (lh.jump(0), lp.jump(0), lO(null), lE(null), lF(!1), !0),
                    l = ad.current;
                if (ar && au && l && i && iR?.(i)) return void
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
                            $?.animation === g && (h(), $ = null, r.classList.remove(O), r.style.removeProperty("--chat-pin-easing"), r.style.removeProperty("--chat-pin-radius"), r.style.removeProperty("--chat-pin-background"), r.style.removeProperty("--chat-pin-corner-shape"))
                        };
                    $ = {
                        animation: g,
                        cleanup: v
                    }, g.ready.catch(() => {}), g.finished.then(v, v)
                }({
                    source: l,
                    getTab: () => {
                        let e = ae.get(S.l.tabById$, ef.a);
                        return null == e ? null : l.ownerDocument.getElementById((0, z.a)(e.dndId))
                    },
                    destination: () => ae.get(ev.a),
                    reducedMotion: aR,
                    update: () => {
                        !ls.current && (a("pin") || (rZ(n.requestedDockPosition, !0), lF(!1)))
                    }
                });
                if (!a()) {
                    if (n.shouldMinimize && null != n.requestedDockPosition) {
                        let e = ai ? "bottom-right" : n.requestedDockPosition;
                        (0, f.flushSync)(() => {
                            rY(e, !0), rJ()
                        })
                    } else rZ(n.requestedDockPosition, !0), null != lB && "restored" !== lB.stage && (lO({
                        ...lB,
                        stage: "restored"
                    }), "minimized" === lB.stage && lE(ai ? null : {
                        target: lC
                    }));
                    lF(!1)
                }
            }, io[548] = ai, io[549] = au, io[550] = lh, io[551] = lp, io[552] = rX, io[553] = ar, io[554] = rJ, io[555] = lB, io[556] = iN, io[557] = iR, io[558] = lC, io[559] = ae, io[560] = rY, io[561] = lF, io[562] = lO, io[563] = lE, io[564] = aR, io[565] = rZ, io[566] = nj) : nj = io[566], io[567] !== lh || io[568] !== lp || io[569] !== lF || io[570] !== lP ? (nE = () => {
                lP(!1), ls.current = !1, l$.current = !0, lF(!0), lh.stop(), lp.stop()
            }, io[567] = lh, io[568] = lp, io[569] = lF, io[570] = lP, io[571] = nE) : nE = io[571], io[572] !== oo || io[573] !== ai || io[574] !== i6 || io[575] !== lq || io[576] !== lN || io[577] !== lk || io[578] !== lE || io[579] !== oc ? (nM = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!ai || i6) && lN(!0), lq(!0), (i6 ? oc && oo : ai) && (lE(null), lk("expanded"))) : e.currentTarget.contains(e.target) && !lm.current?.contains(e.target) && (lq(!1), i6 && e.target.closest("header[data-quick-chat-drag-handle]") && lN(!0))
            }, io[572] = oo, io[573] = ai, io[574] = i6, io[575] = lq, io[576] = lN, io[577] = lk, io[578] = lE, io[579] = oc, io[580] = nM) : nM = io[580], io[581] !== lr || io[582] !== i5 ? (nP = e => {
                i5 || "Escape" !== e.key || (l$.current = !0, lr.cancel())
            }, io[581] = lr, io[582] = i5, io[583] = nP) : nP = io[583], io[584] !== i5 || io[585] !== a3 || io[586] !== rM ? (nR = e => {
                if (i5 || (l$.current = !1, a3 || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]");
                null != t && (null == n || n === t) && (e.preventDefault(), t.setPointerCapture(e.pointerId), rM(e))
            }, io[584] = i5, io[585] = a3, io[586] = rM, io[587] = nR) : nR = io[587], io[588] !== lP ? (nN = () => {
                lv.current?.contains(document.activeElement) || lP(!1)
            }, io[588] = lP, io[589] = nN) : nN = io[589], io[590] !== lr || io[591] !== tI || io[592] !== ir || io[593] !== sC || io[594] !== sk || io[595] !== sj || io[596] !== nf || io[597] !== sM || io[598] !== sP || io[599] !== sR || io[600] !== sN || io[601] !== sL || io[602] !== sT || io[603] !== ng || io[604] !== sD || io[605] !== nb || io[606] !== ny || io[607] !== nw || io[608] !== nS || io[609] !== nz || io[610] !== nC || io[611] !== nk || io[612] !== nj || io[613] !== nE || io[614] !== nM || io[615] !== nP || io[616] !== nR || io[617] !== nN ? (nL = {
                ref: ir,
                "aria-label": sC,
                "aria-labelledby": sk,
                "aria-modal": sj,
                animate: nf,
                "data-chat-pane-dragging": sM,
                "data-quick-chat-drag-handle": sP,
                "data-pip-obstacle": sR,
                "data-state": "open",
                drag: sN,
                dragConstraints: sL,
                dragElastic: sT,
                dragControls: lr,
                dragListener: !1,
                dragMomentum: !1,
                initial: ng,
                role: sD,
                tabIndex: -1,
                style: nb,
                transition: ny,
                onBlurCapture: nw,
                onClick: nS,
                onDoubleClick: nz,
                onClickCapture: nC,
                onDrag: nk,
                onDragEnd: nj,
                onDragStart: nE,
                onFocusCapture: nM,
                onKeyDown: tI,
                onKeyDownCapture: nP,
                onPointerDownCapture: nR,
                onPointerLeave: nN
            }, io[590] = lr, io[591] = tI, io[592] = ir, io[593] = sC, io[594] = sk, io[595] = sj, io[596] = nf, io[597] = sM, io[598] = sP, io[599] = sR, io[600] = sN, io[601] = sL, io[602] = sT, io[603] = ng, io[604] = sD, io[605] = nb, io[606] = ny, io[607] = nw, io[608] = nS, io[609] = nz, io[610] = nC, io[611] = nk, io[612] = nj, io[613] = nE, io[614] = nM, io[615] = nP, io[616] = nR, io[617] = nN, io[618] = nL) : nL = io[618];
            let sB = null == id ? "floating" : "content",
                sO = ll ? "bottom" : "top";
            io[619] !== ai || io[620] !== lh || io[621] !== lp || io[622] !== lV || io[623] !== lk || io[624] !== lE ? (nT = e => {
                lV(e), e && (ai && lk("expanded"), lE(null), lh.stop(), lp.stop())
            }, io[619] = ai, io[620] = lh, io[621] = lp, io[622] = lV, io[623] = lk, io[624] = lE, io[625] = nT) : nT = io[625], io[626] !== e2.type || io[627] !== sv || io[628] !== ai || io[629] !== oE || io[630] !== ll || io[631] !== iM || io[632] !== a1 || io[633] !== rO || io[634] !== av || io[635] !== lN ? (nD = !ai && oE && "ready" === e2.type ? (0, i.jsx)("div", {
                ref: (0, L.a)(lv, a1, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iM && (ll ? "top-full" : "bottom-full"), ll ? "pt-3" : "pb-3"),
                "data-pip-obstacle": av,
                onClickCapture: () => {
                    (iM ? lg.current : lf.current)?.focus({
                        preventScroll: !0
                    }), lN(!1)
                },
                style: iM ? rO : void 0,
                children: sv
            }) : null, io[626] = e2.type, io[627] = sv, io[628] = ai, io[629] = oE, io[630] = ll, io[631] = iM, io[632] = a1, io[633] = rO, io[634] = av, io[635] = lN, io[636] = nD) : nD = io[636], io[637] !== sv || io[638] !== ai || io[639] !== oE || io[640] !== ll || io[641] !== iM || io[642] !== a1 || io[643] !== rO || io[644] !== lq || io[645] !== lN || io[646] !== aR ? (nq = ai && oE ? (0, i.jsx)(d.a.div, {
                initial: {
                    opacity: 0,
                    y: 8 * !aR
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 8 * !aR
                },
                transition: {
                    duration: .3 * !aR,
                    ease: N.e
                },
                ref: (0, L.a)(lv, a1, E.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iM && (ll ? "top-full" : "bottom-full"), iM && (ll ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (iM ? lg.current : lf.current)?.focus({
                        preventScroll: !0
                    }), lN(!1), lq(!1)
                },
                style: iM ? rO : void 0,
                children: iM ? (0, i.jsx)(j.c, {
                    variant: "notice",
                    children: sv
                }) : sv
            }, "response-preview") : null, io[637] = sv, io[638] = ai, io[639] = oE, io[640] = ll, io[641] = iM, io[642] = a1, io[643] = rO, io[644] = lq, io[645] = lN, io[646] = aR, io[647] = nq) : nq = io[647], io[648] !== nq ? (n_ = (0, i.jsx)(h.a, {
                initial: !1,
                children: nq
            }), io[648] = nq, io[649] = n_) : n_ = io[649], io[650] !== ru || io[651] !== lX || io[652] !== ai || io[653] !== ag || io[654] !== t_ || io[655] !== or || io[656] !== os || io[657] !== i5 || io[658] !== iX || io[659] !== aR || io[660] !== op ? (nF = ai && void 0 !== iX && !i5 && !os && (0, i.jsx)(ej, {
                compact: or,
                preview: op ? iX : null,
                reduceMotion: aR,
                composerHeight: lX,
                opacity: ru,
                onExpand: t_
            }, ag), io[650] = ru, io[651] = lX, io[652] = ai, io[653] = ag, io[654] = t_, io[655] = or, io[656] = os, io[657] = i5, io[658] = iX, io[659] = aR, io[660] = op, io[661] = nF) : nF = io[661];
            let s$ = ll ? "top-full pt-2" : "bottom-full";
            io[662] !== s$ ? (nI = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", s$), io[662] = s$, io[663] = nI) : nI = io[663], io[664] !== aQ || io[665] !== l8 || io[666] !== nI ? (nH = (0, i.jsx)("div", {
                ref: aQ,
                className: nI,
                hidden: l8
            }), io[664] = aQ, io[665] = l8, io[666] = nI, io[667] = nH) : nH = io[667];
            let sK = 0 === oW && "pt-2",
                sV = ll ? "w-full" : "w-80",
                sX = oI && "left-1/2 -translate-x-1/2",
                sY = !oI && (oF ? "left-0" : "right-0"),
                sZ = l8 && l_ && "invisible";
            io[668] !== sK || io[669] !== sV || io[670] !== sX || io[671] !== sY || io[672] !== sZ ? (nW = (0, l.b)(T.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", sK, sV, sX, sY, sZ), io[668] = sK, io[669] = sV, io[670] = sX, io[671] = sY, io[672] = sZ, io[673] = nW) : nW = io[673], io[674] !== oW ? (nA = {
                marginTop: oW
            }, io[674] = oW, io[675] = nA) : nA = io[675], io[676] !== ib || io[677] !== aG || io[678] !== av || io[679] !== nW || io[680] !== nA ? (nB = (0, i.jsx)("div", {
                ref: aG,
                className: nW,
                style: nA,
                "data-pip-obstacle": av,
                children: ib
            }), io[676] = ib, io[677] = aG, io[678] = av, io[679] = nW, io[680] = nA, io[681] = nB) : nB = io[681], io[682] !== nr || io[683] !== ai || io[684] !== l8 ? (nO = ai ? void 0 : {
                clipPath: nr,
                opacity: +!l8
            }, io[682] = nr, io[683] = ai, io[684] = l8, io[685] = nO) : nO = io[685];
            let sU = !os && "pointer-events-auto";
            io[686] !== sU ? (n$ = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", sU), io[686] = sU, io[687] = n$) : n$ = io[687], io[688] !== oe || io[689] !== ai || io[690] !== rB ? (nK = ai ? {
                clipPath: rB,
                opacity: oe
            } : void 0, io[688] = oe, io[689] = ai, io[690] = rB, io[691] = nK) : nK = io[691];
            let sQ = !!os || void 0;
            io[692] !== ai || io[693] !== lj || io[694] !== aR ? (nV = aR || !ai && null == lj ? {
                duration: 0
            } : {
                duration: .3,
                ease: N.e
            }, io[692] = ai, io[693] = lj, io[694] = aR, io[695] = nV) : nV = io[695], io[696] !== l8 || io[697] !== rq || io[698] !== lC || io[699] !== lj || io[700] !== lE ? (nX = e => {
                lj?.target === (l8 ? "minimized" : lC) && "object" == typeof e && "clipPath" in e && e.clipPath === (l8 ? rq : ey) && lE(e => e === lj ? null : e)
            }, io[696] = l8, io[697] = rq, io[698] = lC, io[699] = lj, io[700] = lE, io[701] = nX) : nX = io[701], io[702] !== ai || io[703] !== oa || io[704] !== ll || io[705] !== rJ || io[706] !== oc ? (nY = !ai && !oc && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", ll ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(ee.c, {
                    standalone: !0,
                    isCompact: oa,
                    onMinimize: rJ
                })
            }), io[702] = ai, io[703] = oa, io[704] = ll, io[705] = rJ, io[706] = oc, io[707] = nY) : nY = io[707], io[708] !== ai || io[709] !== sr || io[710] !== or || io[711] !== l_ || io[712] !== rJ || io[713] !== iz || io[714] !== oc ? (nZ = (ai || oc) && (iz?.({
                contextMenuTrigger: sr,
                isCompact: or,
                isDragging: l_,
                onMinimize: rJ
            }) ?? sr), io[708] = ai, io[709] = sr, io[710] = or, io[711] = l_, io[712] = rJ, io[713] = iz, io[714] = oc, io[715] = nZ) : nZ = io[715], io[716] !== ip || io[717] !== ac ? (nU = ac && (0, i.jsx)(eg.a, {
                hasPagePicker: ip
            }), io[716] = ip, io[717] = ac, io[718] = nU) : nU = io[718];
            let sG = or && "justify-end";
            io[719] !== sG ? (nQ = (0, l.b)("relative flex min-h-0 flex-1 flex-col", sG), io[719] = sG, io[720] = nQ) : nQ = io[720], io[721] !== ru || io[722] !== lX || io[723] !== ou || io[724] !== ak || io[725] !== or || io[726] !== aZ || io[727] !== iK ? (nG = ou && !ak && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) px-4 py-3 text-sm text-default",
                "aria-hidden": !or,
                style: {
                    bottom: lX,
                    opacity: ru
                },
                ref: aZ,
                children: iK ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…",
                    description: "Status shown in the floating response banner while the chat is working"
                })
            }), io[721] = ru, io[722] = lX, io[723] = ou, io[724] = ak, io[725] = or, io[726] = aZ, io[727] = iK, io[728] = nG) : nG = io[728];
            let sJ = ai ? or : ab.followLatestTranscript;
            io[729] !== ab || io[730] !== sJ ? (nJ = {
                ...ab,
                isFloatingChatSurface: !0,
                followLatestTranscript: sJ
            }, io[729] = ab, io[730] = sJ, io[731] = nJ) : nJ = io[731];
            let s0 = ai ? "absolute inset-x-0 overflow-hidden" : "contents";
            io[732] !== lX || io[733] !== ai || io[734] !== ri ? (n0 = ai ? {
                bottom: lX,
                height: ri
            } : void 0, io[732] = lX, io[733] = ai, io[734] = ri, io[735] = n0) : n0 = io[735];
            let s1 = !ai && (or ? "hidden" : "flex"),
                s2 = ai && "absolute inset-x-0 bottom-0 flex",
                s3 = ai && "overflow-hidden";
            io[736] !== s1 || io[737] !== s2 || io[738] !== s3 ? (n1 = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", s1, s2, s3), io[736] = s1, io[737] = s2, io[738] = s3, io[739] = n1) : n1 = io[739], io[740] !== lX || io[741] !== ai || io[742] !== oU || io[743] !== ar || io[744] !== rs || io[745] !== rc || io[746] !== rr ? (n2 = ai ? {
                height: ar ? void 0 : Math.max(0, oU - 46 - lX),
                top: ar ? 0 : void 0,
                opacity: rc,
                clipPath: rs,
                y: rr
            } : void 0, io[740] = lX, io[741] = ai, io[742] = oU, io[743] = ar, io[744] = rs, io[745] = rc, io[746] = rr, io[747] = n2) : n2 = io[747], io[748] !== ai || io[749] !== am || io[750] !== ol || io[751] !== or || io[752] !== i5 || io[753] !== l8 || io[754] !== iZ || io[755] !== lk || io[756] !== lE ? (n3 = am && (!ol || ai) ? iZ?.(() => {
                lE(null), lk("compact")
            }, !or && !i5 && !l8) : null, io[748] = ai, io[749] = am, io[750] = ol, io[751] = or, io[752] = i5, io[753] = l8, io[754] = iZ, io[755] = lk, io[756] = lE, io[757] = n3) : n3 = io[757], io[758] !== ai || io[759] !== ap || io[760] !== am || io[761] !== or || io[762] !== o3 ? (n4 = !am && (0, i.jsx)(h.a, {
                initial: !1,
                children: (ai || !or) && null != ap && (0, i.jsx)(d.a.div, {
                    className: "flex min-h-0 flex-1 flex-col",
                    initial: !ai && {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: o3,
                        ease: N.e
                    },
                    children: ap
                }, "empty-state")
            }), io[758] = ai, io[759] = ap, io[760] = am, io[761] = or, io[762] = o3, io[763] = n4) : n4 = io[763], io[764] !== or || io[765] !== aO || io[766] !== n1 || io[767] !== n2 || io[768] !== n3 || io[769] !== n4 ? (n5 = (0, i.jsxs)(d.a.div, {
                ref: aO,
                "aria-hidden": or,
                className: n1,
                inert: or,
                style: n2,
                children: [n3, n4]
            }), io[764] = or, io[765] = aO, io[766] = n1, io[767] = n2, io[768] = n3, io[769] = n4, io[770] = n5) : n5 = io[770], io[771] !== ai || io[772] !== t_ || io[773] !== ou || io[774] !== or || io[775] !== r1 || io[776] !== iV ? (n6 = ai && or && ou && (0, i.jsx)(eE, {
                label: r1,
                responsePreview: iV,
                onExpand: t_
            }), io[771] = ai, io[772] = t_, io[773] = ou, io[774] = or, io[775] = r1, io[776] = iV, io[777] = n6) : n6 = io[777], io[778] !== s0 || io[779] !== n0 || io[780] !== n5 || io[781] !== n6 ? (n7 = (0, i.jsxs)(d.a.div, {
                className: s0,
                style: n0,
                children: [n5, n6]
            }), io[778] = s0, io[779] = n0, io[780] = n5, io[781] = n6, io[782] = n7) : n7 = io[782], io[783] !== nJ || io[784] !== n7 ? (n8 = (0, i.jsx)(ep.b, {
                value: nJ,
                children: n7
            }), io[783] = nJ, io[784] = n7, io[785] = n8) : n8 = io[785];
            let s4 = iz?.({
                contextMenuTrigger: sn,
                isCompact: or,
                isDragging: l_,
                onMinimize: rJ
            }) ?? sn;
            io[786] !== nQ || io[787] !== nG || io[788] !== n8 || io[789] !== s4 ? (n9 = (0, i.jsxs)("div", {
                className: nQ,
                children: [nG, n8, s4]
            }), io[786] = nQ, io[787] = nG, io[788] = n8, io[789] = s4, io[790] = n9) : n9 = io[790], io[791] !== la || io[792] !== os || io[793] !== nO || io[794] !== n$ || io[795] !== nK || io[796] !== sQ || io[797] !== nV || io[798] !== nX || io[799] !== nY || io[800] !== nZ || io[801] !== nU || io[802] !== n9 ? (ie = (0, i.jsxs)(d.a.div, {
                "aria-hidden": os,
                animate: nO,
                className: n$,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": la,
                style: nK,
                initial: !1,
                inert: sQ,
                transition: nV,
                onAnimationComplete: nX,
                children: [nY, nZ, nU, n9]
            }), io[791] = la, io[792] = os, io[793] = nO, io[794] = n$, io[795] = nK, io[796] = sQ, io[797] = nV, io[798] = nX, io[799] = nY, io[800] = nZ, io[801] = nU, io[802] = n9, io[803] = ie) : ie = io[803], io[804] !== D || io[805] !== rG || io[806] !== oa || io[807] !== l8 || io[808] !== rD || io[809] !== ix || io[810] !== rQ || io[811] !== r4 || io[812] !== r3 || io[813] !== aR || io[814] !== sb || io[815] !== ns || io[816] !== nc || io[817] !== nu || io[818] !== sx || io[819] !== sy || io[820] !== sw || io[821] !== nd || io[822] !== nh || io[823] !== np || io[824] !== sS || io[825] !== sz || io[826] !== nL || io[827] !== sB || io[828] !== sO || io[829] !== nT || io[830] !== nD || io[831] !== n_ || io[832] !== nF || io[833] !== nH || io[834] !== nB || io[835] !== ie ? (it = (0, i.jsxs)(D, {
                contentRef: ad,
                allowCompactResize: !0,
                animateSurface: sb,
                contentStyle: ns,
                surfaceStyle: nc,
                currentSize: nu,
                heightLabel: r4,
                resizeFromCenter: sx,
                fixedHorizontalEdge: sy,
                isCompact: oa,
                isCompactChromeRevealed: sw,
                isMinimized: l8,
                keepSurfaceInset: !0,
                maximumSize: nd,
                minimizedContent: nh,
                minimizedSurfaceBounds: rD,
                minimumSize: np,
                prefersCompactPresentation: !0,
                resizable: sS,
                background: sz,
                sectionRef: lf,
                sectionProps: nL,
                shouldReduceMotion: aR,
                variant: sB,
                verticalResizeEdge: sO,
                widthLabel: r3,
                onResize: rQ,
                onResizeEnd: rG,
                onResizingChange: nT,
                children: [nD, n_, nF, nH, nB, ie, ix]
            }), io[804] = D, io[805] = rG, io[806] = oa, io[807] = l8, io[808] = rD, io[809] = ix, io[810] = rQ, io[811] = r4, io[812] = r3, io[813] = aR, io[814] = sb, io[815] = ns, io[816] = nc, io[817] = nu, io[818] = sx, io[819] = sy, io[820] = sw, io[821] = nd, io[822] = nh, io[823] = np, io[824] = sS, io[825] = sz, io[826] = nL, io[827] = sB, io[828] = sO, io[829] = nT, io[830] = nD, io[831] = n_, io[832] = nF, io[833] = nH, io[834] = nB, io[835] = ie, io[836] = it) : it = io[836];
            let s5 = it;
            return io[837] !== aM ? (ii = {
                id: aM
            }, io[837] = aM, io[838] = ii) : ii = io[838], io[839] !== ai || io[840] !== aY ? (ia = ai && (0, i.jsx)("div", {
                ref: aY,
                "aria-hidden": !0,
                className: (0, l.b)(em.a, "pointer-events-none invisible absolute")
            }), io[839] = ai, io[840] = aY, io[841] = ia) : ia = io[841], io[842] !== s5 || io[843] !== ii || io[844] !== ia ? (il = (0, i.jsxs)(G.a, {
                value: ii,
                children: [ia, s5]
            }), io[842] = s5, io[843] = ii, io[844] = ia, io[845] = il) : il = io[845], il
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
                    opacity: p,
                    reduceMotion: m,
                    onExpand: f
                } = e;
            r[0] !== u || r[1] !== p ? (t = {
                bottom: u,
                opacity: p
            }, r[0] = u, r[1] = p, r[2] = t) : t = r[2];
            let g = !s || !c;
            return r[3] !== s || r[4] !== f || r[5] !== c || r[6] !== m ? (n = s && c && (0, i.jsx)(d.a.div, {
                className: "col-start-1 row-start-1 max-w-full origin-bottom-left",
                initial: !m && {
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
                transition: m ? {
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
            }, c.id), r[3] = s, r[4] = f, r[5] = c, r[6] = m, r[7] = n) : n = r[7], r[8] !== n ? (l = (0, i.jsx)(h.a, {
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
                let p = !c || !!u || void 0;
                return o[2] !== r ? (n = (0, i.jsx)("div", {
                    className: "flex h-toolbar cursor-interaction touch-none items-center justify-between border-b border-default px-2 select-none",
                    children: r
                }), o[2] = r, o[3] = n) : n = o[3], o[4] !== d || o[5] !== t || o[6] !== p || o[7] !== n ? (l = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden",
                    "aria-hidden": d,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: p,
                    children: n
                }), o[4] = d, o[5] = t, o[6] = p, o[7] = n, o[8] = l) : l = o[8], l
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
                        presentationToggle: y
                    } = e,
                    w = void 0 !== f && f,
                    S = !b && "shrink-0";
                p[0] !== S ? (t = (0, l.b)("relative min-h-0 overflow-hidden", S), p[0] = S, p[1] = t) : t = p[1];
                let z = !v || !!x || void 0,
                    C = 46 * !!v,
                    k = +!!v;
                p[2] !== C || p[3] !== k ? (n = {
                    height: C,
                    opacity: k
                }, p[2] = C, p[3] = k, p[4] = n) : n = p[4];
                let j = !v || !!x || void 0;
                p[5] !== m || p[6] !== w ? (r = m ? {
                    duration: .3,
                    ease: u.e,
                    ...w ? {
                        opacity: {
                            duration: 0
                        }
                    } : {}
                } : {
                    duration: 0
                }, p[5] = m, p[6] = w, p[7] = r) : r = p[7], p[8] !== b || p[9] !== y ? (s = null != y ? (0, i.jsx)("button", {
                    className: "pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    "aria-label": y.label,
                    "aria-expanded": !b,
                    type: "button",
                    onClick: y.onToggle
                }) : null, p[8] = b, p[9] = y, p[10] = s) : s = p[10];
                let E = !w && null != y && b && "cursor-n-resize",
                    M = !w && null != y && !b && "cursor-s-resize",
                    P = (w || null == y) && "cursor-interaction",
                    R = b && "mx-1.5 border-b border-default px-2",
                    N = !b && "px-3";
                return p[11] !== E || p[12] !== M || p[13] !== P || p[14] !== R || p[15] !== N ? (c = (0, l.b)("flex h-toolbar touch-none select-none items-center justify-between", E, M, P, R, N), p[11] = E, p[12] = M, p[13] = P, p[14] = R, p[15] = N, p[16] = c) : c = p[16], p[17] !== g || p[18] !== c ? (d = (0, i.jsx)("div", {
                    className: c,
                    children: g
                }), p[17] = g, p[18] = c, p[19] = d) : d = p[19], p[20] !== s || p[21] !== d || p[22] !== t || p[23] !== z || p[24] !== n || p[25] !== j || p[26] !== r ? (h = (0, i.jsxs)(o.a.header, {
                    className: t,
                    "aria-hidden": z,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: j,
                    transition: r,
                    children: [s, d]
                }), p[20] = s, p[21] = d, p[22] = t, p[23] = z, p[24] = n, p[25] = j, p[26] = r, p[27] = h) : h = p[27], h
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
            }, g[20] = b, g[21] = z, g[22] = P, g[23] = h) : h = g[23], g[24] !== N || g[25] !== L ? (p = e => {
                N(e), L(e, !0)
            }, g[24] = N, g[25] = L, g[26] = p) : p = g[26], g[27] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, i.jsx)("div", {
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
                k = void 0 !== f && f,
                j = void 0 === S ? "top" : S;
            if (s[0] !== u || s[1] !== h || s[2] !== C || s[3] !== m || s[4] !== g || s[5] !== v || s[6] !== b || s[7] !== x || s[8] !== y || s[9] !== w || s[10] !== k || s[11] !== j || s[12] !== z) {
                let e, a;
                s[16] !== m ? (e = e => e !== m, s[16] = m, s[17] = e) : e = s[17];
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
                }, e)), s[0] = u, s[1] = h, s[2] = C, s[3] = m, s[4] = g, s[5] = v, s[6] = b, s[7] = x, s[8] = y, s[9] = w, s[10] = k, s[11] = j, s[12] = z, s[13] = t, s[14] = n, s[15] = o
            } else t = s[13], n = s[14], o = s[15];
            return s[39] !== t || s[40] !== n || s[41] !== o ? (r = (0, i.jsxs)(i.Fragment, {
                children: [t, n, o]
            }), s[39] = t, s[40] = n, s[41] = o, s[42] = r) : r = s[42], r
        }
    })
};