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
            a: () => eh
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
            C = n("QTyu");

        function M(e) {
            let t, n, o, r, s, c, u, h, m, p, f = (0, a.c)(63),
                {
                    allowCompactResize: g,
                    animateSurface: v,
                    background: b,
                    children: M,
                    currentSize: E,
                    contentStyle: N,
                    contentRef: R,
                    elevateComposer: P,
                    fixedHorizontalEdge: _,
                    resizeFromCenter: T,
                    heightLabel: D,
                    isCompact: L,
                    isCompactChromeRevealed: q,
                    isMinimized: I,
                    keepSurfaceInset: A,
                    maximumSize: F,
                    minimizedContent: H,
                    minimizedSurfaceBounds: O,
                    minimumSize: W,
                    onResize: K,
                    onResizeEnd: V,
                    onResizingChange: B,
                    prefersCompactPresentation: Y,
                    resizable: X,
                    sectionProps: $,
                    sectionRef: Q,
                    surfaceStyle: Z,
                    shouldReduceMotion: U,
                    variant: G,
                    verticalResizeEdge: J,
                    widthLabel: ee
                } = e,
                et = void 0 !== g && g,
                en = void 0 === v || v,
                ei = void 0 !== T && T,
                ea = void 0 === X || X,
                el = (0, j.f)("2163293173"),
                eo = !I && (A || L && !q) ? 6 : 0;
            f[0] !== I || f[1] !== O || f[2] !== eo ? (t = I && null != O ? O : {
                top: 0,
                right: eo,
                bottom: eo,
                left: eo
            }, f[0] = I, f[1] = O, f[2] = eo, f[3] = t) : t = f[3];
            let er = t,
                es = "panel" !== b && "rounded-[inherit]";
            f[4] !== es ? (n = (0, l.b)("pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto", es), f[4] = es, f[5] = n) : n = f[5];
            let ec = n,
                eu = "panel" !== b || Y;
            f[6] !== $.ref || f[7] !== Q ? (o = (0, k.a)(Q, $.ref, y.c), f[6] = $.ref, f[7] = Q, f[8] = o) : o = f[8];
            let ed = !el && Y && "frame-Xbg62r",
                eh = Y && "group/chat-frame focus:outline-none",
                em = null != O ? "pointer-events-none" : "pointer-events-auto",
                ep = Y && C.a.floatingSurface,
                ef = A && C.a.singleLineSurface,
                eg = "floating" === G ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                ev = Y ? "overflow-visible" : "overflow-hidden";
            f[9] !== ed || f[10] !== eh || f[11] !== em || f[12] !== ep || f[13] !== ef || f[14] !== eg || f[15] !== ev ? (r = (0, l.b)("flex flex-col text-default", ed, eh, em, ep, ef, eg, ev), f[9] = ed, f[10] = eh, f[11] = em, f[12] = ep, f[13] = ef, f[14] = eg, f[15] = ev, f[16] = r) : r = f[16];
            let eb = null != N ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== eb ? (s = (0, l.b)(eb), f[17] = eb, f[18] = s) : s = f[18], f[19] !== en || f[20] !== b || f[21] !== ec || f[22] !== P || f[23] !== A || f[24] !== H || f[25] !== Y || f[26] !== U || f[27] !== er || f[28] !== Z ? (c = Y ? (0, i.jsx)(x.c, {
                asChild: !0,
                unstyled: "panel" !== b,
                variant: A ? "single-line" : "default",
                shadow: P ? "raised" : void 0,
                children: null != Z ? (0, i.jsx)(d.a.div, {
                    className: ec,
                    "aria-hidden": null == H || void 0,
                    style: Z
                }, "panel-background") : (0, i.jsx)(d.a.div, {
                    className: ec,
                    "aria-hidden": null == H || void 0,
                    animate: er,
                    initial: !1,
                    transition: U || !en ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: S.e
                    },
                    children: H
                }, "legacy-background")
            }) : null, f[19] = en, f[20] = b, f[21] = ec, f[22] = P, f[23] = A, f[24] = H, f[25] = Y, f[26] = U, f[27] = er, f[28] = Z, f[29] = c) : c = f[29], f[30] !== et || f[31] !== E || f[32] !== _ || f[33] !== D || f[34] !== L || f[35] !== I || f[36] !== F || f[37] !== W || f[38] !== K || f[39] !== V || f[40] !== B || f[41] !== ea || f[42] !== ei || f[43] !== er || f[44] !== J || f[45] !== ee ? (u = ea && (!L || et) && !I ? (0, i.jsx)("div", {
                className: "pointer-events-none absolute",
                style: er,
                children: (0, i.jsx)("div", {
                    className: "pointer-events-auto contents",
                    children: (0, i.jsx)(w.a, {
                        currentSize: E,
                        defaultSize: z,
                        extendIntoToolbar: !1,
                        fixedHorizontalEdge: _,
                        resizeFromCenter: ei,
                        heightLabel: D,
                        maximumSize: F,
                        minimumSize: W,
                        verticalEdge: L ? null : J,
                        widthLabel: ee,
                        onResize: K,
                        onResizeEnd: V,
                        onResizingChange: B
                    })
                })
            }) : null, f[30] = et, f[31] = E, f[32] = _, f[33] = D, f[34] = L, f[35] = I, f[36] = F, f[37] = W, f[38] = K, f[39] = V, f[40] = B, f[41] = ea, f[42] = ei, f[43] = er, f[44] = J, f[45] = ee, f[46] = u) : u = f[46];
            let ex = null == Z ? null : H;
            return f[47] !== M || f[48] !== R || f[49] !== N || f[50] !== s || f[51] !== c || f[52] !== u || f[53] !== ex ? (h = (0, i.jsxs)(d.a.div, {
                ref: R,
                className: s,
                style: N,
                children: [c, u, ex, M]
            }), f[47] = M, f[48] = R, f[49] = N, f[50] = s, f[51] = c, f[52] = u, f[53] = ex, f[54] = h) : h = f[54], f[55] !== $ || f[56] !== r || f[57] !== h || f[58] !== o ? (m = (0, i.jsx)(d.a.section, {
                ...$,
                ref: o,
                className: r,
                children: h
            }), f[55] = $, f[56] = r, f[57] = h, f[58] = o, f[59] = m) : m = f[59], f[60] !== m || f[61] !== eu ? (p = (0, i.jsx)(x.c, {
                asChild: !0,
                unstyled: eu,
                children: m
            }), f[60] = m, f[61] = eu, f[62] = p) : p = f[62], p
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

        function T(e) {
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
        var D = n("wrxv"),
            L = n("EFj1"),
            q = n("BjWL"),
            I = n("vi3X"),
            A = n("fDIZ"),
            F = n("AKr5"),
            H = n("X7C7"),
            O = n("rmk3"),
            W = n("giDA"),
            K = n("YzWZ"),
            V = n("eeV6"),
            B = n("Xyz8"),
            Y = n("zj7j"),
            X = n("Z2JT"),
            $ = n("T7v7");
        let Q = (0, n("Nwp9").b)("quick-chat-size-v1", z);

        function Z(e, t, n) {
            let {
                dockPosition: i,
                hasConversation: a
            } = n, l = e.get(Q);
            e.set(Q, t), (null == l || l.height !== t.height || l.width !== t.width) && (0, $.d)(e, {
                action: $.a.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_RESIZED,
                dockPosition: i,
                hasConversation: a,
                source: $.b.CODEX_QUICK_CHAT_SOURCE_RESIZE_HANDLE
            })
        }
        var U = n("mphG"),
            G = n("T1PX"),
            J = n("TL6G"),
            ee = n("rkZ2"),
            et = n("f4Vb"),
            en = n("OWtl"),
            ei = n("j89V"),
            ea = n("El6m"),
            el = n("KkZX"),
            eo = n("bIvi");
        let er = ["bottom-center", "bottom-left", "bottom-right"],
            es = ["bottom-left", "bottom-right"],
            ec = "inset(0px 0px 0px 0px round var(--floating-panel-radius))",
            eu = {
                type: "spring",
                bounce: .16,
                duration: .42
            },
            ed = (0, m.u)(en.a, ew, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (e, t) => e.width === t.width && e.height === t.height,
                onMount: e => {
                    let t = window.visualViewport,
                        n = () => e(ew());
                    return window.addEventListener("resize", n), t?.addEventListener("resize", n), n(), () => {
                        window.removeEventListener("resize", n), t?.removeEventListener("resize", n)
                    }
                }
            });

        function eh(e) {
            let t, n, l, o, r = (0, a.c)(10);
            return r[0] !== e ? ({
                contentChat: t,
                ...n
            } = e, r[0] = e, r[1] = t, r[2] = n) : (t = r[1], n = r[2]), r[3] !== t || r[4] !== n ? (l = null == t ? n.renderMenu : e => e.contextMenuTrigger ?? (null == t.onOpenRightPane && n.renderMenu?.(e)), r[3] = t, r[4] = n, r[5] = l) : l = r[5], r[6] !== t || r[7] !== n || r[8] !== l ? (o = (0, i.jsx)(em, {
                ...n,
                contentChat: t,
                renderMenu: l
            }), r[6] = t, r[7] = n, r[8] = l, r[9] = o) : o = r[9], o
        }

        function em(e) {
            let t, n, w, P, $, er, es, eh, em, ef, ew, ez, ej, eS, ek, eC, eM, eE, eN, eR, eP, e_, eT, eD, eL, eq, eI, eA, eF, eH, eO, eW, eK, eV, eB, eY, eX, e$, eQ, eZ, eU, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tm, tp, tf, tg, tv, tb, tx, ty, tw, tz, tj, tS, tk, tC, tM, tE, tN, tR, tP, t_, tT, tD, tL, tq, tI, tA, tF, tH, tO, tW, tK, tV, tB, tY, tX, t$, tQ, tZ, tU, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, nm, np, nf, ng, nv, nb, nx, ny, nw, nz, nj, nS, nk, nC, nM, nE, nN, nR, nP, n_, nT, nD, nL, nq, nI, nA, nF, nH, nO, nW, nK, nV, nB, nY, nX, n$, nQ, nZ, nU, nG = (0, a.c)(835),
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
                    presentation: ip,
                    onPresentationChange: ig,
                    title: iv,
                    titleContent: ib,
                    minimizedIcon: ix,
                    minimizedMenuItems: iy,
                    restoreLabel: iw,
                    statusState: iz,
                    titleStatusState: ij,
                    notifications: iS,
                    workingPreview: ik,
                    compactWorkingPreview: iC,
                    responsePreview: iM,
                    showResponsePreview: iE,
                    previewBubble: iN,
                    emptyState: iR,
                    renderTranscript: iP,
                    hasTranscript: i_,
                    pendingFormId: iT,
                    showComposerDivider: iD,
                    showHeader: iL
                } = e,
                iq = void 0 !== n0 && n0,
                iI = void 0 === n5 || n5,
                iA = void 0 !== n6 && n6,
                iF = void 0 !== ii && ii,
                iH = void 0 === ia || ia,
                iO = void 0 !== io && io,
                iW = void 0 !== is && is,
                iK = void 0 === ij ? iz : ij,
                iV = void 0 === iE || iE,
                iB = void 0 === iL || iL,
                iY = (0, m.y)(en.a),
                iX = null != ic,
                i$ = ic?.onOpenRightPane,
                iQ = (0, m.z)(void 0 === iT ? null : iT),
                iZ = null != iQ,
                iU = (0, j.f)("2163293173"),
                [iG, iJ] = (0, p.useState)(!1),
                [i0, i1] = (0, p.useState)(null),
                i2 = iU && iX && iI && !iW,
                i3 = (0, m.z)(!!iU && !!iX && ee.c),
                i4 = iU ? iR : void 0,
                i5 = i_ ?? null != iP,
                i6 = i5 || null != i4,
                i7 = (0, m.z)(n4) ?? void 0,
                i8 = void 0 === id || id ? "quick-chat" : void 0,
                i9 = (0, p.useContext)(ea.b),
                ae = (0, m.z)(iS),
                at = iZ ? D.a : ae ?? D.a,
                an = (0, m.z)(iz);
            nG[0] !== an || nG[1] !== at.type ? (t = "ready" === at.type ? {
                ...an,
                type: an?.type ?? "idle",
                unread: !0
            } : an, nG[0] = an, nG[1] = at.type, nG[2] = t) : t = nG[2];
            let ai = t,
                aa = (0, m.z)(iK),
                al = iK === iz ? ai : aa,
                ao = (0, m.z)(iU && iV ? iM : null),
                ar = !!ao,
                as = (0, g.a)(),
                ac = (0, p.useId)(),
                au = (0, p.useId)(),
                ad = (0, b.c)(),
                ah = (0, G.a)(),
                am = (0, m.z)(ed);
            nG[3] !== am.height || nG[4] !== ad ? (n = (0, b.b)(am.height, ad), nG[3] = am.height, nG[4] = ad, nG[5] = n) : n = nG[5];
            let ap = n,
                af = (0, b.b)(am.width, ad),
                [ag, av] = (0, p.useState)(0),
                [ab, ax] = (0, p.useState)(!1),
                [ay, aw] = (0, p.useState)(0),
                [az, aj] = (0, p.useState)(null),
                [aS, ak] = (0, p.useState)(null),
                [aC, aM] = (0, p.useState)(0),
                [aE, aN] = (0, p.useState)(null);
            nG[6] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                e.contentRect.width > 0 && aN(e.contentRect.width)
            }, nG[6] = w) : w = nG[6];
            let aR = (0, _.b)(w);
            nG[7] === Symbol.for("react.memo_cache_sentinel") ? (P = e => {
                aM((0, et.a)(e).height)
            }, nG[7] = P) : P = nG[7];
            let aP = (0, _.b)(P);
            nG[8] === Symbol.for("react.memo_cache_sentinel") ? ($ = e => {
                aw((0, et.a)(e).height)
            }, nG[8] = $) : $ = nG[8];
            let a_ = (0, _.b)($);
            nG[9] !== a_ ? (er = e => {
                aj(e), a_(e)
            }, nG[9] = a_, nG[10] = er) : er = nG[10];
            let aT = (0, eo.a)(er);
            nG[11] === Symbol.for("react.memo_cache_sentinel") ? (es = e => {
                av((0, et.a)(e).height)
            }, nG[11] = es) : es = nG[11];
            let aD = (0, _.b)(es),
                [aL, aq] = (0, p.useState)(0);
            nG[12] === Symbol.for("react.memo_cache_sentinel") ? (eh = e => {
                aq((0, et.a)(e).height)
            }, nG[12] = eh) : eh = nG[12];
            let aI = (0, _.b)(eh),
                aA = n3?.width ?? af,
                aF = af < 640;
            nG[13] !== iI || nG[14] !== iU ? (em = () => iI ? iU ? "bottom-right" : (0, K.a)() : "bottom-center", nG[13] = iI, nG[14] = iU, nG[15] = em) : em = nG[15];
            let [aH] = (0, p.useState)(em), aO = i7 ?? null;
            nG[16] !== aO ? (ef = {
                threadKey: aO,
                minimized: !1
            }, nG[16] = aO, nG[17] = ef) : ef = nG[17];
            let aW = (0, m.x)(iI ? Y.a : void 0, ef),
                aK = iX && iI,
                aV = i7 ?? null;
            nG[18] !== aV ? (ew = {
                threadKey: aV,
                minimized: !0
            }, nG[18] = aV, nG[19] = ew) : ew = nG[19];
            let aB = (0, m.x)(iI && !iX ? Y.a : void 0, ew);
            nG[20] === Symbol.for("react.memo_cache_sentinel") ? (ez = {}, nG[20] = ez) : ez = nG[20];
            let [aY, aX] = (0, p.useState)(ez), a$ = (null != i7 || iU ? null : aY.expanded) ?? aW ?? aH, aQ = null == n7 ? a$ : aY.expanded ?? n7, aZ = aF ? "bottom-center" : aQ;
            nG[21] !== iU || nG[22] !== i7 || nG[23] !== aZ || nG[24] !== aK || nG[25] !== aY || nG[26] !== aB ? (ej = "bottom-right", aK ? ej = (0, B.a)(aZ) : iU || (ej = (null == i7 ? aY.minimized : null) ?? aB ?? "bottom-right"), nG[21] = iU, nG[22] = i7, nG[23] = aZ, nG[24] = aK, nG[25] = aY, nG[26] = aB, nG[27] = ej) : ej = nG[27];
            let aU = iI ? (0, B.f)(iu ? ej : aZ, n8) : "bottom-center",
                aG = aU.startsWith("top"),
                aJ = (0, m.z)(Q),
                a0 = (0, o.a)(),
                a1 = (0, p.useRef)(!1);
            nG[28] === Symbol.for("react.memo_cache_sentinel") ? (eS = {
                x: 0,
                y: 0
            }, nG[28] = eS) : eS = nG[28];
            let a2 = (0, p.useRef)(eS),
                a3 = (0, p.useRef)(null),
                a4 = (0, p.useRef)(null),
                a5 = (0, r.a)(0),
                a6 = (0, r.a)(0),
                a7 = (0, p.useRef)(null),
                a8 = (0, p.useRef)(null),
                a9 = (0, p.useRef)(null),
                le = (0, p.useRef)(null),
                [lt, ln] = (0, p.useState)("compact"),
                [li, la] = (0, p.useState)(null),
                ll = iN?.id ?? "",
                lo = li === ll,
                lr = ip ?? lt;
            nG[29] !== i6 || nG[30] !== ip || nG[31] !== iX || nG[32] !== ig ? (ek = e => {
                (iX || "expanded" !== e || i6) && (null == ip && ln(e), la(null), ig?.(e))
            }, nG[29] = i6, nG[30] = ip, nG[31] = iX, nG[32] = ig, nG[33] = ek) : ek = nG[33];
            let ls = ek,
                [lc, lu] = (0, p.useState)(null),
                [ld, lh] = (0, p.useState)(!1),
                [lm, lp] = (0, p.useState)(!1),
                [lf, lg] = (0, p.useState)(!1),
                [lv, lb] = (0, p.useState)(!1),
                lx = (0, p.useRef)(null);
            nG[34] === Symbol.for("react.memo_cache_sentinel") ? (eC = e => {
                (null != lx.current && (cancelAnimationFrame(lx.current), lx.current = null), null != e) ? lb(!0): lx.current = requestAnimationFrame(() => {
                    lx.current = null, lb(!1)
                })
            }, nG[34] = eC) : eC = nG[34];
            let ly = eC;
            nG[35] === Symbol.for("react.memo_cache_sentinel") ? (eM = () => () => {
                null != lx.current && cancelAnimationFrame(lx.current)
            }, eE = [], nG[35] = eM, nG[36] = eE) : (eM = nG[35], eE = nG[36]), (0, p.useEffect)(eM, eE);
            let [lw, lz] = (0, p.useState)(!1), [lj, lS] = (0, p.useState)(!1), [lk, lC] = (0, p.useState)(!0), [lM, lE] = (0, p.useState)(null), lN = (0, p.useRef)(!1), lR = (0, p.useRef)(0);
            nG[37] === Symbol.for("react.memo_cache_sentinel") ? (eN = () => (lR.current = lR.current + 1, () => {
                lR.current = lR.current - 1
            }), nG[37] = eN) : eN = nG[37];
            let lP = (0, eo.a)(eN),
                l_ = (0, p.useRef)(!1),
                [lT, lD] = (0, p.useState)(!1),
                [lL, lq] = (0, p.useState)(0),
                [lI, lA] = (0, p.useState)(0),
                [lF, lH] = (0, p.useState)(!1);
            nG[38] !== iU || nG[39] !== ad ? (eR = (e, t) => {
                lq(iU ? (0, et.a)(e).height : e.contentRect.height), lH(e.contentRect.width < 640);
                let n = t.querySelector(`[${q.a}]`)?.getBoundingClientRect().height ?? 0;
                lA(Math.max(0, e.contentRect.height - (0, b.b)(n, ad)))
            }, nG[38] = iU, nG[39] = ad, nG[40] = eR) : eR = nG[40];
            let lO = (0, _.b)(eR),
                [lW, lK] = (0, p.useState)(null),
                [lV, lB] = (0, p.useState)(!1),
                [lY, lX] = (0, p.useState)(i7);
            lY !== i7 && (lX(i7), aX({}), iJ(!1), i1(null), lS(!1), lE(null), lu(null), lg(!1), lB(!1), la(null));
            let [l$, lQ] = (0, p.useState)(iQ);
            l$ !== iQ && (lQ(iQ), lE(null), lu(null));
            let lZ = iu || lM?.stage === "minimized",
                lU = (0, r.a)(+!!lZ);
            nG[41] !== lU ? (eP = () => 1 - lU.get(), nG[41] = lU, nG[42] = eP) : eP = nG[42];
            let lG = (0, s.a)(eP);
            nG[43] !== lU ? (e_ = e => lU.on("change", e), nG[43] = lU, nG[44] = e_) : e_ = nG[44];
            let lJ = e_;
            nG[45] !== lU ? (eT = () => 1 === lU.get(), nG[45] = lU, nG[46] = eT) : eT = nG[46];
            let l0 = eT;
            nG[47] !== lZ ? (eD = () => lZ, nG[47] = lZ, nG[48] = eD) : eD = nG[48];
            let l1 = (0, p.useSyncExternalStore)(lJ, l0, eD);
            lc?.target !== "minimized" || lZ || lu({
                target: lr
            }), nG[49] !== i6 || nG[50] !== iO || nG[51] !== iQ || nG[52] !== lr ? (eL = (0, X.c)({
                pendingFormId: iQ,
                presentation: lr,
                forceExpanded: iO,
                hasTranscript: i6
            }), nG[49] = i6, nG[50] = iO, nG[51] = iQ, nG[52] = lr, nG[53] = eL) : eL = nG[53];
            let {
                isCompact: l2,
                isChatCompact: l3,
                canTogglePresentation: l4
            } = eL, l5 = iU && !iX ? !l2 : iB;
            (!iX || iW || iu || !l5) && lf && lg(!1);
            let l6 = !iu && !lZ && (iU && !iX || !l2 || lm || lv || lf || iG || ab),
                l7 = l5 && (iX ? !iu && !lZ : iU || l6),
                l8 = iU && iX && l2 && l7 && !iW && !iZ && !i3 && null != iC && al?.type === "loading",
                l9 = iV && iU && !iZ && !lo && i5 && (ar || !l8 && al?.type === "loading"),
                oe = l2 && l9,
                ot = iU && l2 && !iW && !iu && !iZ && void 0 !== iN,
                on = ot && !lo && null != iN,
                oi = oe || on && iN.transient,
                oa = void 0 !== iD && iD || iU;
            nG[54] !== iX || nG[55] !== iW || nG[56] !== iu || nG[57] !== l5 ? (eq = () => {
                let e, t = a8.current;
                if (null == t || !iX || iW || iu || !l5) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, lg(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), lg(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, nG[54] = iX, nG[55] = iW, nG[56] = iu, nG[57] = l5, nG[58] = eq) : eq = nG[58], nG[59] !== i7 || nG[60] !== iX || nG[61] !== iW || nG[62] !== iu || nG[63] !== l5 ? (eI = [i7, iX, iW, iu, l5], nG[59] = i7, nG[60] = iX, nG[61] = iW, nG[62] = iu, nG[63] = l5, nG[64] = eI) : eI = nG[64], (0, p.useEffect)(eq, eI);
            let ol = !iW && !l2 && !iu && !iO && !iG && !lT;
            nG[65] !== au || nG[66] !== ls || nG[67] !== lu ? (eA = e => {
                null == a8.current || null != e && ex(a8.current, e.target, au) || (lu(null), ls("compact"))
            }, nG[65] = au, nG[66] = ls, nG[67] = lu, nG[68] = eA) : eA = nG[68];
            let oo = (0, p.useEffectEvent)(eA);
            nG[69] !== oo || nG[70] !== au ? (eF = () => {
                let e = a8.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !ex(e, t, au) && oo()
            }, nG[69] = oo, nG[70] = au, nG[71] = eF) : eF = nG[71];
            let or = (0, p.useEffectEvent)(eF);
            nG[72] !== iU || nG[73] !== or || nG[74] !== oo || nG[75] !== ol ? (eH = () => {
                if (!ol) return;
                document.addEventListener("pointerdown", oo, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && or()
                        })
                    };
                window.addEventListener("blur", t);
                let n = iU ? J.c.subscribe("browser-sidebar-web-contents-pointer-down", () => oo()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", oo, !0)
                }
            }, nG[72] = iU, nG[73] = or, nG[74] = oo, nG[75] = ol, nG[76] = eH) : eH = nG[76], nG[77] !== iU || nG[78] !== ol ? (eO = [iU, ol], nG[77] = iU, nG[78] = ol, nG[79] = eO) : eO = nG[79], (0, p.useEffect)(eH, eO);
            let os = ai?.type === "loading";
            nG[80] !== im || nG[81] !== lh || nG[82] !== ls || nG[83] !== lu ? (eW = () => {
                a8.current?.focus({
                    preventScroll: !0
                }), lh(!1), lu(null), im(!1), ls("expanded")
            }, nG[80] = im, nG[81] = lh, nG[82] = ls, nG[83] = lu, nG[84] = eW) : eW = nG[84];
            let oc = (0, eo.a)(eW),
                [ou, od] = (0, p.useState)(ep);
            nG[85] === Symbol.for("react.memo_cache_sentinel") ? (eK = e => {
                od(t => new Set([...t, e]))
            }, nG[85] = eK) : eK = nG[85];
            let oh = (0, eo.a)(eK);
            nG[86] !== iU || nG[87] !== oh || nG[88] !== oc || nG[89] !== at ? (eV = "ready" !== at.type ? at : {
                type: "ready",
                value: at.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(R, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), oc()
                        },
                        onDismiss: iU ? () => oh(e.id) : e.onDismiss
                    })
                }))
            }, nG[86] = iU, nG[87] = oh, nG[88] = oc, nG[89] = at, nG[90] = eV) : eV = nG[90];
            let om = eV,
                [op, of] = (0, p.useState)(os);
            if (op !== os && (of(os), lB(!1), la(null)), nG[91] !== iW || nG[92] !== iu || nG[93] !== os || nG[94] !== ll || nG[95] !== oi ? (eB = () => {
                    if (!oi || iW || iu || os) return;
                    let e = window.setTimeout(() => la(ll), 1e4);
                    return () => window.clearTimeout(e)
                }, nG[91] = iW, nG[92] = iu, nG[93] = os, nG[94] = ll, nG[95] = oi, nG[96] = eB) : eB = nG[96], nG[97] !== i7 || nG[98] !== iW || nG[99] !== iu || nG[100] !== os || nG[101] !== ll || nG[102] !== oi ? (eY = [i7, oi, iW, iu, os, ll], nG[97] = i7, nG[98] = iW, nG[99] = iu, nG[100] = os, nG[101] = ll, nG[102] = oi, nG[103] = eY) : eY = nG[103], (0, p.useEffect)(eB, eY), nG[104] !== om || nG[105] !== iU || nG[106] !== ou || nG[107] !== oc || nG[108] !== os || nG[109] !== iv || nG[110] !== ik || nG[111] !== lV) {
                if (eX = om, iU && os && !lV) {
                    let e, t;
                    nG[113] === Symbol.for("react.memo_cache_sentinel") ? (e = () => lB(!0), nG[113] = e) : e = nG[113], nG[114] !== oc || nG[115] !== iv || nG[116] !== ik ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(R, {
                            title: iv,
                            preview: "",
                            isWorking: !0,
                            workingContent: ik,
                            onOpen: oc,
                            onDismiss: e
                        })
                    }], nG[114] = oc, nG[115] = iv, nG[116] = ik, nG[117] = t) : t = nG[117], eX = {
                        type: "ready",
                        value: t
                    }
                } else if (iU && "ready" === om.type) {
                    let e;
                    if (nG[118] !== om.value || nG[119] !== ou) {
                        let t;
                        nG[121] !== ou ? (t = e => !ou.has(e.id), nG[121] = ou, nG[122] = t) : t = nG[122], e = om.value.filter(t), nG[118] = om.value, nG[119] = ou, nG[120] = e
                    } else e = nG[120];
                    eX = {
                        ...om,
                        value: e
                    }
                }
                nG[104] = om, nG[105] = iU, nG[106] = ou, nG[107] = oc, nG[108] = os, nG[109] = iv, nG[110] = ik, nG[111] = lV, nG[112] = eX
            } else eX = nG[112];
            "ready" !== eX.type && ld && lh(!1);
            let og = "ready" === eX.type && eX.value.length > 0 && (lZ ? iu && (iU ? l1 : ld) && !iG : !iU && l2),
                ov = al?.type !== "loading" && (al?.unread !== !0 || og) ? null : al,
                ob = os || ai?.unread === !0 && (iu || !og);
            nG[123] !== eX.type || nG[124] !== eX.value || nG[125] !== iU || nG[126] !== oh || nG[127] !== os || nG[128] !== lh ? (e$ = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), le.current?.contains(document.activeElement) && a9.current?.focus({
                            preventScroll: !0
                        }), iU) {
                        if (os) lB(!0);
                        else if ("ready" === eX.type)
                            for (let e of eX.value) oh(e.id)
                    } else lh(!1)
            }, nG[123] = eX.type, nG[124] = eX.value, nG[125] = iU, nG[126] = oh, nG[127] = os, nG[128] = lh, nG[129] = e$) : e$ = nG[129];
            let ox = (0, p.useEffectEvent)(e$);
            nG[130] !== ox || nG[131] !== og || nG[132] !== iW || nG[133] !== iu ? (eQ = () => {
                if (!iW && iu && og) return document.addEventListener("keydown", ox), () => document.removeEventListener("keydown", ox)
            }, nG[130] = ox, nG[131] = og, nG[132] = iW, nG[133] = iu, nG[134] = eQ) : eQ = nG[134], nG[135] !== og || nG[136] !== iW || nG[137] !== iu ? (eZ = [og, iW, iu], nG[135] = og, nG[136] = iW, nG[137] = iu, nG[138] = eZ) : eZ = nG[138], (0, p.useEffect)(eQ, eZ);
            let oy = l5 && l7 && !iu && !l8 && null == it,
                ow = iU && iX && oy && al?.unread === !0;
            nG[139] !== as ? (eU = as.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running"
            }), nG[139] = as, nG[140] = eU) : eU = nG[140];
            let oz = eU;
            nG[141] !== as ? (eG = as.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response"
            }), nG[141] = as, nG[142] = eG) : eG = nG[142];
            let oj = eG,
                oS = os ? oz : oj,
                ok = aU.endsWith("left"),
                oC = "bottom-center" === aU,
                oM = ok ? "left" : "right",
                oE = aG && !lZ ? ay : 0,
                oN = 46 * (null == n3) + (aG || lZ ? 0 : ay),
                oR = lW ?? aJ ?? z,
                oP = og && !iu ? aL : 0,
                o_ = (n3?.height ?? ap) - ag - (aG ? oP + oE : 0),
                oT = Math.max(0, o_ - 32 - oN - (aG ? 0 : oP)),
                oD = null == n3 ? aA / 2 : Math.max(0, aA - 20),
                oL = iU && null != aE ? Math.min(oD, aE + 12) : oD,
                oq = (lL || 46) + (l5 && l7 ? 46 : 0) + (oe ? aC : 0) + 6 * !iU,
                oI = iX && l5 && l7,
                oA = (lL || 46) + 46 * !!oI + (l9 ? aC : 0) + 6 * !iU,
                oF = ey(oR.height, Math.min(Math.max(400, lL + 46), oT), oT),
                oH = Math.min(l2 ? oq : Math.max(400, oq), oT),
                oO = aF ? oL : Math.min(372, oL),
                oW = ey(l2 ? oq : oR.height, oH, oT),
                oK = (0, r.a)(oW),
                oV = (0, p.useRef)(!1),
                oB = lL > 0,
                oY = iW || ah || lT || !iU && (iu || null != lc) ? 0 : .3,
                oX = ey(oR.width + 12, oO, oL),
                o$ = (0, B.d)(aU, {
                    height: oW,
                    width: oX
                }, o_, aA, 12, oN);
            nG[143] !== oK || nG[144] !== oA || nG[145] !== oF || nG[146] !== l2 || nG[147] !== iX ? (eJ = () => iX && l2 ? 0 : ey((oK.get() - oA) / Math.max(1, oF - oA), 0, 1), nG[143] = oK, nG[144] = oA, nG[145] = oF, nG[146] = l2, nG[147] = iX, nG[148] = eJ) : eJ = nG[148];
            let oQ = (0, s.a)(eJ);
            nG[149] !== oK || nG[150] !== lL || nG[151] !== oQ || nG[152] !== oI ? (e0 = () => Math.max(0, oK.get() - lL - 46 * (oI ? 1 : oQ.get())), nG[149] = oK, nG[150] = lL, nG[151] = oQ, nG[152] = oI, nG[153] = e0) : e0 = nG[153];
            let oZ = (0, s.a)(e0);
            nG[154] !== oQ ? (e1 = () => 1 - oQ.get(), nG[154] = oQ, nG[155] = e1) : e1 = nG[155];
            let oU = (0, s.a)(e1);
            nG[156] !== oK || nG[157] !== lL || nG[158] !== iU || nG[159] !== oW || nG[160] !== oB || nG[161] !== l2 || nG[162] !== lv || nG[163] !== oY ? (e2 = () => {
                let e, t = !oV.current && l2;
                if (oB && (oV.current = !0), lv || t || 0 === oY) return void oK.jump(oW);
                let n = () => {
                    if (iU) {
                        let e = a7.current;
                        if (null != e && e.offsetHeight !== Math.round(lL)) return void lq(e.offsetHeight)
                    }
                    let t = (0, c.a)(oK, oW, {
                        duration: oY,
                        ease: S.e
                    });
                    e = () => t.stop()
                };
                return iU ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, nG[156] = oK, nG[157] = lL, nG[158] = iU, nG[159] = oW, nG[160] = oB, nG[161] = l2, nG[162] = lv, nG[163] = oY, nG[164] = e2) : e2 = nG[164];
            let oG = (0, p.useEffectEvent)(e2),
                oJ = iU ? lL : null,
                o0 = iU ? null : oB,
                o1 = iU ? null : l2;
            nG[165] !== oG ? (e3 = () => oG(), nG[165] = oG, nG[166] = e3) : e3 = nG[166], nG[167] !== oW || nG[168] !== o0 || nG[169] !== o1 || nG[170] !== oJ || nG[171] !== oY ? (e4 = [oW, oY, oJ, o0, o1], nG[167] = oW, nG[168] = o0, nG[169] = o1, nG[170] = oJ, nG[171] = oY, nG[172] = e4) : e4 = nG[172], (0, p.useLayoutEffect)(e3, e4);
            let o2 = iU ? oQ : void 0;
            nG[173] !== o2 ? (e5 = {
                "--quick-chat-expansion": o2
            }, nG[173] = o2, nG[174] = e5) : e5 = nG[174];
            let o3 = e5,
                o4 = {
                    height: Math.min(36, oT),
                    width: Math.min(36, oL)
                },
                o5 = {
                    bubbleSize: o4,
                    composerWidth: oX,
                    composerHorizontalInset: 12,
                    reservedDockPosition: n8,
                    viewportWidth: aA,
                    viewportHeight: o_
                },
                o6 = (0, B.f)(iu ? aU : lM?.dockPosition ?? ej, n8),
                o7 = (0, B.d)(o6, o4, o_, aA, 0, oN),
                o8 = iu ? o4 : {
                    height: oW,
                    width: oX
                },
                o9 = iu ? o7 : o$,
                re = iu ? 16 : 10,
                rt = Math.max(re, aA - o8.width - re),
                rn = oN + re,
                ri = Math.max(re, o_ - o8.height - re);
            nG[175] !== re || nG[176] !== rt || nG[177] !== rn || nG[178] !== ri ? (e6 = {
                left: re,
                right: rt,
                top: rn,
                bottom: ri
            }, nG[175] = re, nG[176] = rt, nG[177] = rn, nG[178] = ri, nG[179] = e6) : e6 = nG[179];
            let ra = e6;
            nG[180] === Symbol.for("react.memo_cache_sentinel") ? (e7 = () => {
                a4.current = null
            }, nG[180] = e7) : e7 = nG[180], nG[181] !== n3 || nG[182] !== ad ? (e8 = [n3, ad], nG[181] = n3, nG[182] = ad, nG[183] = e8) : e8 = nG[183], (0, p.useLayoutEffect)(e7, e8);
            let rl = e => {
                    if (!iI) return;
                    a4.current = null == n3 ? null : a8.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, b.b)(e.clientX - (a4.current?.left ?? 0), ad),
                        y: (0, b.b)(e.clientY - (a4.current?.top ?? 0), ad)
                    };
                    a2.current = {
                        x: t.x - o9.x - a5.get(),
                        y: t.y - o9.y - a6.get()
                    }, a3.current = {
                        point: t,
                        target: null
                    }, a0.start(e)
                },
                ro = (0, B.d)(o6, {
                    height: oW,
                    width: oX
                }, o_, aA, 12, oN),
                rr = o7.x - ro.x,
                rs = o7.y - ro.y,
                rc = oX - rr - o4.width,
                ru = oW - rs - o4.height;
            nG[184] !== rr || nG[185] !== rs || nG[186] !== rc || nG[187] !== ru ? (e9 = {
                top: rs,
                right: rc,
                bottom: ru,
                left: rr
            }, nG[184] = rr, nG[185] = rs, nG[186] = rc, nG[187] = ru, nG[188] = e9) : e9 = nG[188];
            let rd = e9,
                rh = `inset(${rd.top}px ${rd.right}px ${rd.bottom}px ${rd.left}px round var(--floating-panel-radius))`,
                rm = (0, s.a)(() => {
                    let e = lU.get(),
                        t = oK.get() - oW,
                        n = e * (rd.top + (aG ? 0 : t)),
                        i = 6 + e * (rd.right - 6),
                        a = 6 + e * (rd.bottom + (aG ? t : 0) - 6),
                        l = 6 + e * (rd.left - 6),
                        o = lZ || iG || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round var(--radius-token-composer-single-line))` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: "var(--radius-token-composer-single-line)",
                        clip: o
                    }
                });
            nG[189] !== rm ? (te = () => rm.get().top, nG[189] = rm, nG[190] = te) : te = nG[190];
            let rp = (0, s.a)(te);
            nG[191] !== rm ? (tt = () => rm.get().right, nG[191] = rm, nG[192] = tt) : tt = nG[192];
            let rf = (0, s.a)(tt);
            nG[193] !== rm ? (tn = () => rm.get().bottom, nG[193] = rm, nG[194] = tn) : tn = nG[194];
            let rg = (0, s.a)(tn);
            nG[195] !== rm ? (ti = () => rm.get().left, nG[195] = rm, nG[196] = ti) : ti = nG[196];
            let rv = (0, s.a)(ti);
            nG[197] !== rm ? (ta = () => rm.get().radius, nG[197] = rm, nG[198] = ta) : ta = nG[198];
            let rb = (0, s.a)(ta);
            nG[199] !== rm ? (tl = () => rm.get().clip, nG[199] = rm, nG[200] = tl) : tl = nG[200];
            let rx = (0, s.a)(tl);
            nG[201] !== iU || nG[202] !== lZ || nG[203] !== lU || nG[204] !== ah ? (to = () => {
                if (!iU) return;
                let e = (0, c.a)(lU, +!!lZ, {
                    duration: .3 * !ah,
                    ease: S.e
                });
                return () => e.stop()
            }, tr = [iU, lZ, lU, ah], nG[201] = iU, nG[202] = lZ, nG[203] = lU, nG[204] = ah, nG[205] = to, nG[206] = tr) : (to = nG[205], tr = nG[206]), (0, p.useLayoutEffect)(to, tr);
            let ry = aG ? {
                    top: rs + o4.height
                } : {
                    bottom: oW - rs
                },
                rw = (0, p.useRef)({
                    dockPosition: aU,
                    dockThreadKey: i7,
                    isMinimized: iu
                }),
                rz = (0, p.useEffectEvent)(e => {
                    let t = (0, B.d)(e, {
                        height: oW,
                        width: oX
                    }, o_, aA, 12, oN);
                    a5.stop(), a6.stop(), a5.jump(a5.get() + t.x - o$.x), a6.jump(a6.get() + t.y - o$.y);
                    let n = ah ? {
                        duration: 0
                    } : eu;
                    (0, c.a)(a5, 0, n), (0, c.a)(a6, 0, n)
                });
            (0, p.useLayoutEffect)(() => {
                let e = rw.current;
                if (rw.current = {
                        dockPosition: aU,
                        dockThreadKey: i7,
                        isMinimized: iu
                    }, e.dockThreadKey !== i7) {
                    a1.current = !0, lN.current = !0, a0.cancel(), a5.jump(0), a6.jump(0);
                    return
                }
                if (iW) {
                    a5.jump(0), a6.jump(0);
                    return
                }
                e.isMinimized !== iu && rz(e.dockPosition)
            }, [aU, i7, a0, a5, a6, iW, iu]), nG[207] !== a5 || nG[208] !== a6 ? (ts = () => () => {
                a5.stop(), a6.stop()
            }, tc = [a5, a6], nG[207] = a5, nG[208] = a6, nG[209] = ts, nG[210] = tc) : (ts = nG[209], tc = nG[210]), (0, p.useLayoutEffect)(ts, tc);
            let rj = e => {
                let t, n = {
                    ...o8,
                    left: o9.x + a5.get(),
                    top: o9.y + a6.get()
                };
                null != n3 && null == a4.current && (a4.current = a8.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == n3 ? null : a4.current,
                    a = {
                        x: e.point.x - (0, b.b)(i?.left ?? 0, ad),
                        y: e.point.y - (0, b.b)(i?.top ?? 0, ad)
                    },
                    l = i2 && !iu ? (function(e) {
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
                        for (let e of ev(a, !1, !0)) {
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
                    })(o5).find(e => {
                        let {
                            rect: t
                        } = e;
                        return a.x >= t.left && a.x <= t.left + t.width && a.y >= t.top && a.y <= t.top + t.height
                    })?.position : void 0;
                t = iU ? l ?? (0, B.b)(n, o_, aA, ev(n8, iu, aK), 12 * !iu, oN) : (0, B.e)({
                    ...n,
                    left: n.width >= aA / 2 - 2 * re ? a.x - n.width / 2 : n.left
                }, o_, aA, iu);
                let o = null == n8 ? t : (0, B.f)(t, n8),
                    r = {
                        x: !iU || i2 ? Math.min(a.x, aA - a.x) : aA - a.x,
                        y: iU ? o_ - a.y : Math.min(a.y - oN, o_ - a.y)
                    },
                    s = (!i2 || r.x >= 0 && r.y >= 0) && r.x <= 16 + o4.width && r.y <= 16 + o4.height;
                if (iU && !iu) {
                    let e = a.x < aA / 2 ? "bottom-left" : "bottom-right",
                        n = i2 && s && e !== n8 ? e : void 0,
                        i = a3.current;
                    if (null != i) {
                        let e = a.x - i.point.x,
                            t = a.y - i.point.y;
                        Math.hypot(e, t) >= 8 && (e >= 0 && t > 0 && t >= e ? i.target = "minimize" : e > 0 && e > 2 * Math.abs(t) ? i.target = null : (e < 0 || t < 0) && (i.target = null), i.point = a)
                    }
                    let r = a.y - a2.current.y + o8.height - o_;
                    return {
                        dockPosition: o,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        shouldMinimize: null != n || null == l && "bottom-right" === o && i?.target === "minimize" && r >= .5 * o8.width,
                        bubbleDropPosition: n
                    }
                }
                let c = (0, B.d)(o, o8, o_, aA, 12, oN),
                    u = !iu && "bottom-center" !== o && 16 >= Math.abs(n.left - c.x) && 16 >= Math.abs(n.top - c.y);
                return {
                    dockPosition: o,
                    requestedDockPosition: t,
                    isNearDock: u,
                    shouldMinimize: u && s
                }
            };
            nG[211] !== iI || nG[212] !== n7 || nG[213] !== iU || nG[214] !== i7 || nG[215] !== ir || nG[216] !== aK || nG[217] !== iY ? (tu = (e, t) => {
                if (!iI) return;
                let n = t && !aK;
                (null == n7 || n) && (null != i7 || iU && !n) ? (0, Y.c)(iY, {
                    threadKey: i7 ?? null,
                    minimized: n
                }, e, ir) : aX(t => ({
                    expanded: n ? t.expanded : e,
                    minimized: n ? (0, B.a)(e) : t.minimized
                }))
            }, nG[211] = iI, nG[212] = n7, nG[213] = iU, nG[214] = i7, nG[215] = ir, nG[216] = aK, nG[217] = iY, nG[218] = tu) : tu = nG[218];
            let rS = tu,
                rk = (e, t, n) => {
                    let i = void 0 === n ? o8 : n,
                        a = (0, B.d)(aU, o8, o_, aA, 12 * !iu, oN),
                        l = {
                            x: a.x + a5.get(),
                            y: a.y + a6.get()
                        },
                        o = (0, B.d)((0, B.f)(e, n8), i, o_, aA, 12 * !iu, oN);
                    a5.stop(), a6.stop(), a5.jump(l.x - o.x), a6.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        rS(e, iu)
                    });
                    let r = iU ? {
                            duration: .3,
                            ease: S.e
                        } : eu,
                        s = ah ? {
                            duration: 0
                        } : r;
                    lS(!0), Promise.all([(0, c.a)(a5, 0, s), (0, c.a)(a6, 0, s)]).then(() => {
                        lS(0 !== a5.get() || 0 !== a6.get())
                    })
                },
                rC = (0, p.useEffectEvent)(() => {
                    a1.current = !0, a0.cancel(), rk(aU, !1), lE(null), lu(null), iJ(!1), i1(null)
                });
            nG[219] !== rC || nG[220] !== a0 || nG[221] !== iG ? (td = () => {
                if (!iG) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), rC())
                    },
                    t = () => rC();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    a1.current = !0, a0.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, nG[219] = rC, nG[220] = a0, nG[221] = iG, nG[222] = td) : td = nG[222], nG[223] !== a0 || nG[224] !== iG ? (th = [a0, iG], nG[223] = a0, nG[224] = iG, nG[225] = th) : th = nG[225], (0, p.useLayoutEffect)(td, th);
            let rM = (e, t) => {
                    let n = iU && oC ? 0 : (0, B.c)(aU, e, {
                            height: oW,
                            width: oX
                        }, a5.get(), t.width, o_, aA, 12),
                        i = o$.y + a6.get(),
                        a = (0, B.d)(aU, t, o_, aA, 12, oN),
                        l = ey(i + (aG ? 0 : oW - t.height), oN + 10, o_ - t.height - 10);
                    a5.stop(), a6.stop(), (0, f.flushSync)(() => {
                        lK({
                            height: l2 ? oR.height : t.height,
                            width: t.width - 12
                        })
                    }), a5.jump(n), a6.jump(l - a.y)
                },
                rE = e => {
                    Z(iY, {
                        height: l2 ? oR.height : e.height,
                        width: e.width - 12
                    }, {
                        dockPosition: aU,
                        hasConversation: ir
                    }), rk(aU, !1, e)
                };
            nG[226] !== iU || nG[227] !== iG || nG[228] !== im || nG[229] !== lh || nG[230] !== lE || nG[231] !== lu ? (tm = () => {
                lh(!1), lC(!iG), lE(null), lu(iU ? null : {
                    target: "minimized"
                }), im(!0)
            }, nG[226] = iU, nG[227] = iG, nG[228] = im, nG[229] = lh, nG[230] = lE, nG[231] = lu, nG[232] = tm) : tm = nG[232];
            let rN = tm;
            if (nG[233] !== n7 || nG[234] !== iU || nG[235] !== iO || nG[236] !== iZ || nG[237] !== l2 || nG[238] !== iW || nG[239] !== iu || nG[240] !== ih || nG[241] !== im || nG[242] !== lr || nG[243] !== iA || nG[244] !== lh || nG[245] !== ls || nG[246] !== lu) {
                let e, t, n, i;
                tx = () => {
                    (0, f.flushSync)(() => {
                        lh(!1), lu(iU ? null : {
                            target: lr
                        }), im(!1)
                    }), tg()
                }, nG[254] !== l2 || nG[255] !== ls || nG[256] !== lu ? (e = () => {
                    lu(null), ls(l2 ? "expanded" : "compact")
                }, nG[254] = l2, nG[255] = ls, nG[256] = lu, nG[257] = e) : e = nG[257], ty = e;
                let a = !iW && !iu;
                tp = a && (null != ih || !iA && !l2 && !iO), nG[258] !== ih || nG[259] !== ls || nG[260] !== lu ? (t = () => {
                    null != ih ? ih() : (lu(null), ls("compact"))
                }, nG[258] = ih, nG[259] = ls, nG[260] = lu, nG[261] = t) : t = nG[261], tf = t, nG[262] !== tp || nG[263] !== a || nG[264] !== tf || nG[265] !== iA ? (n = e => {
                    if (!a || "Escape" !== e.key || e.defaultPrevented || e.nativeEvent.isComposing) return;
                    let t = tp && !e.repeat;
                    !t && (!iA || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) || (e.preventDefault(), e.stopPropagation(), t && tf())
                }, nG[262] = tp, nG[263] = a, nG[264] = tf, nG[265] = iA, nG[266] = n) : n = nG[266], tb = n, nG[267] !== iZ ? (i = () => {
                    let e = a7.current;
                    return iZ ? (0, F.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, nG[267] = iZ, nG[268] = i) : i = nG[268], tv = i, tg = () => {
                    iU && null == n7 && (lu(null), ls("expanded")), tv()?.focus({
                        preventScroll: !0
                    })
                }, nG[233] = n7, nG[234] = iU, nG[235] = iO, nG[236] = iZ, nG[237] = l2, nG[238] = iW, nG[239] = iu, nG[240] = ih, nG[241] = im, nG[242] = lr, nG[243] = iA, nG[244] = lh, nG[245] = ls, nG[246] = lu, nG[247] = tp, nG[248] = tf, nG[249] = tg, nG[250] = tv, nG[251] = tb, nG[252] = tx, nG[253] = ty
            } else tp = nG[247], tf = nG[248], tg = nG[249], tv = nG[250], tb = nG[251], tx = nG[252], ty = nG[253];
            let rR = !iW && iZ;
            nG[269] !== tv || nG[270] !== iZ || nG[271] !== iu ? (tw = () => {
                if (null == a8.current || null != a8.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (iZ) return iu;
                let e = tv();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !a7.current?.contains(t) || t === a7.current
            }, nG[269] = tv, nG[270] = iZ, nG[271] = iu, nG[272] = tw) : tw = nG[272], nG[273] !== rR || nG[274] !== tw ? (tz = {
                enabled: rR,
                isActive: tw
            }, nG[273] = rR, nG[274] = tw, nG[275] = tz) : tz = nG[275], (0, L.a)("focusMainChat", iu ? tx : tg, tz), nG[276] !== as || nG[277] !== l2 ? (tj = as.formatMessage(l2 ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat"
            }), nG[276] = as, nG[277] = l2, nG[278] = tj) : tj = nG[278];
            let rP = tj;
            nG[279] !== l4 || nG[280] !== rP || nG[281] !== ty ? (tS = l4 ? {
                label: rP,
                onToggle: ty
            } : void 0, nG[279] = l4, nG[280] = rP, nG[281] = ty, nG[282] = tS) : tS = nG[282];
            let r_ = tS;
            nG[283] !== as ? (tk = as.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width"
            }), nG[283] = as, nG[284] = tk) : tk = nG[284];
            let rT = tk;
            nG[285] !== as ? (tC = as.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height"
            }), nG[285] = as, nG[286] = tC) : tC = nG[286];
            let rD = tC;
            nG[287] !== iX || nG[288] !== ls || nG[289] !== lu ? (tM = () => {
                lu(null), iX && ls("expanded")
            }, nG[287] = iX, nG[288] = ls, nG[289] = lu, nG[290] = tM) : tM = nG[290];
            let rL = (0, eo.a)(tM);
            nG[291] !== iU || nG[292] !== rL || nG[293] !== iX || nG[294] !== lu ? (tE = iU || iX ? rL : () => lu(null), nG[291] = iU, nG[292] = rL, nG[293] = iX, nG[294] = lu, nG[295] = tE) : tE = nG[295];
            let rq = {
                    isCompact: l2,
                    canShowPreviewBubble: ot,
                    isNarrow: lF,
                    isChromeRevealed: l6,
                    isHeaderVisible: l7,
                    isComposerFocused: iU ? lw || lv : l6,
                    isDockedTop: aG,
                    isHidden: iW,
                    isMinimized: lZ,
                    shouldReduceMotion: ah,
                    onSubmitStart: tE
                },
                rI = {
                    isMoving: iG || lT || lj,
                    composerContentHeight: lI,
                    dockedReservePx: lL > lI + 6 * !!iU ? oW + 10 : 0
                };
            nG[296] !== iW || nG[297] !== il ? (tN = function(e) {
                !iW && null != il && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (a8.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, nG[296] = iW, nG[297] = il, nG[298] = tN) : tN = nG[298];
            let rA = tN;
            nG[299] !== iX ? (tR = function(e) {
                !iX && e.target instanceof Element && (!a8.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, nG[299] = iX, nG[300] = tR) : tR = nG[300];
            let rF = tR,
                rH = n2(rq, rI),
                rO = iA ? "editor-only" : null;
            nG[301] !== lO ? (tP = e => {
                a7.current = e, lO(e)
            }, nG[301] = lO, nG[302] = tP) : tP = nG[302], nG[303] !== tg ? (t_ = e => {
                e.target === e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && !lN.current && tg()
            }, nG[303] = tg, nG[304] = t_) : t_ = nG[304], nG[305] !== oa || nG[306] !== l2 || nG[307] !== iu || nG[308] !== oe ? (tT = oa && !iu && (!l2 || oe) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, nG[305] = oa, nG[306] = l2, nG[307] = iu, nG[308] = oe, nG[309] = tT) : tT = nG[309], nG[310] !== az ? (tD = {
                target: az,
                homeBannerPlacement: "inline"
            }, nG[310] = az, nG[311] = tD) : tD = nG[311];
            let rW = (0, i.jsxs)("div", {
                ref: tP,
                className: (0, l.b)(C.a.floatingComposerInset, "mt-auto shrink-0", iI && !aF && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", l2 && aG && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: rA,
                onPointerUp: t_,
                onContextMenu: rF,
                children: [tT, (0, i.jsx)(ea.b, {
                    value: {
                        ...i9,
                        hasComposerSurface: oa,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !iW && !l2 && !iu,
                        floatingChatSurfaceRef: a8,
                        onFloatingDictationRowChange: ly,
                        floatingComposerPresentation: rq,
                        transcriptTarget: aS,
                        followLatestTranscript: iU ? l2 : i9.followLatestTranscript
                    },
                    children: (0, i.jsx)(A.a, {
                        value: tp ? tf : rO,
                        children: (0, i.jsx)(I.a, {
                            value: tD,
                            children: rH
                        })
                    })
                })]
            });
            nG[312] !== l2 || nG[313] !== rN ? (tL = (0, i.jsx)(V.c, {
                isCompact: l2,
                onMinimize: rN
            }), nG[312] = l2, nG[313] = rN, nG[314] = tL) : tL = nG[314];
            let rK = tL,
                rV = iU || null != i$ ? null : rK;
            if (l8) {
                let e, t, n;
                nG[315] !== tv || nG[316] !== ty ? (e = () => {
                    ty(), tv()?.focus({
                        preventScroll: !0
                    })
                }, nG[315] = tv, nG[316] = ty, nG[317] = e) : e = nG[317], nG[318] !== iC || nG[319] !== ac ? (t = (0, i.jsx)("span", {
                    id: ac,
                    className: "min-w-0 truncate",
                    children: iC
                }), nG[318] = iC, nG[319] = ac, nG[320] = t) : t = nG[320], nG[321] !== rP || nG[322] !== e || nG[323] !== t || nG[324] !== ac ? (n = (0, i.jsx)(E.a, {
                    unstyled: !0,
                    focusRing: "inset",
                    className: "min-w-0 flex-1 px-2 text-start text-sm text-secondary",
                    "aria-label": rP,
                    "aria-describedby": ac,
                    "data-quick-chat-drag-handle": !0,
                    onClick: e,
                    children: t
                }), nG[321] = rP, nG[322] = e, nG[323] = t, nG[324] = ac, nG[325] = n) : n = nG[325], tq = n
            } else if (null != it) {
                let e;
                nG[326] !== rV || nG[327] !== it ? (e = it({
                    leadingControl: rV
                }), nG[326] = rV, nG[327] = it, nG[328] = e) : e = nG[328], tq = e
            } else {
                let e, t, n, a, o, r;
                nG[329] !== ow || nG[330] !== oj ? (e = ow && (0, i.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    "aria-label": oj
                }), nG[329] = ow, nG[330] = oj, nG[331] = e) : e = nG[331];
                let s = ow || void 0,
                    c = (!iU || null == ib) && "truncate";
                nG[332] !== c ? (t = (0, l.b)("group/floating-title min-w-0 text-base font-medium text-secondary", c), nG[332] = c, nG[333] = t) : t = nG[333], nG[334] !== iU || nG[335] !== iB || nG[336] !== iv || nG[337] !== ib ? (n = ib ?? (iU ? (0, i.jsx)(V.b, {
                    children: (0, i.jsx)(U.a, {
                        children: iB ? iv : (0, i.jsx)(v.a, {
                            id: "quickChat.newChatTitle",
                            defaultMessage: "New chat"
                        })
                    })
                }) : iv), nG[334] = iU, nG[335] = iB, nG[336] = iv, nG[337] = ib, nG[338] = n) : n = nG[338], nG[339] !== s || nG[340] !== t || nG[341] !== n || nG[342] !== ac ? (a = (0, i.jsx)("h2", {
                    id: ac,
                    "data-unread": s,
                    "data-dropdown-overlay-side": "auto",
                    className: t,
                    children: n
                }), nG[339] = s, nG[340] = t, nG[341] = n, nG[342] = ac, nG[343] = a) : a = nG[343], nG[344] !== iU || nG[345] !== ov || nG[346] !== oz || nG[347] !== oj ? (o = !iU && (0, i.jsx)("div", {
                    className: "flex min-w-5 flex-1 items-center justify-end",
                    children: null != ov && (0, i.jsx)("div", {
                        className: "flex min-w-0 justify-end",
                        role: "status",
                        "aria-label": "loading" === ov.type ? oz : oj,
                        children: (0, i.jsx)(ei.a, {
                            statusState: ov
                        })
                    })
                }), nG[344] = iU, nG[345] = ov, nG[346] = oz, nG[347] = oj, nG[348] = o) : o = nG[348], nG[349] !== rV || nG[350] !== e || nG[351] !== a || nG[352] !== o ? (r = (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-1 items-center gap-1",
                    children: [rV, e, a, o]
                }), nG[349] = rV, nG[350] = e, nG[351] = a, nG[352] = o, nG[353] = r) : r = nG[353], tq = r
            }
            let rB = iX ? lP : void 0;
            nG[354] !== au || nG[355] !== rB ? (tI = {
                id: au,
                registerOpen: rB
            }, nG[354] = au, nG[355] = rB, nG[356] = tI) : tI = nG[356], nG[357] !== ab || nG[358] !== l2 || nG[359] !== iG || nG[360] !== rN || nG[361] !== il ? (tA = il?.({
                isCompact: l2,
                isDragging: iG,
                open: ab,
                onMinimize: rN,
                onOpenChange: ax
            }), nG[357] = ab, nG[358] = l2, nG[359] = iG, nG[360] = rN, nG[361] = il, nG[362] = tA) : tA = nG[362];
            let rY = iU && null == i$ && rK;
            nG[363] !== ic?.openRightPaneDisabled || nG[364] !== rK || nG[365] !== i$ ? (tF = null != i$ && (0, i.jsx)(V.d, {
                minimizeButton: rK,
                disabled: ic?.openRightPaneDisabled,
                onOpenRightPane: i$
            }), nG[363] = ic?.openRightPaneDisabled, nG[364] = rK, nG[365] = i$, nG[366] = tF) : tF = nG[366], nG[367] !== tq || nG[368] !== tI || nG[369] !== tA || nG[370] !== rY || nG[371] !== tF ? (tH = (0, i.jsxs)(W.a, {
                value: tI,
                children: [tq, tA, rY, tF]
            }), nG[367] = tq, nG[368] = tI, nG[369] = tA, nG[370] = rY, nG[371] = tF, nG[372] = tH) : tH = nG[372];
            let rX = tH;
            nG[373] !== iH || nG[374] !== iU || nG[375] !== rX || nG[376] !== iF || nG[377] !== l2 || nG[378] !== iX || nG[379] !== l7 || nG[380] !== iu || nG[381] !== r_ || nG[382] !== lc || nG[383] !== ah || nG[384] !== oe || nG[385] !== l5 ? (tO = iU ? (0, i.jsx)(V.a, {
                isCompact: iX && l2,
                isVisible: l7,
                isDisabled: iF,
                showDivider: !oe,
                children: rX
            }) : (0, i.jsx)(V.e, {
                expandOnClick: iX,
                animateChrome: !ah && !iu && null == lc,
                isChromeRevealed: l7,
                isCompact: l2,
                isDisabled: iF,
                reserveSpace: iX && l5 && !l2,
                presentationToggle: iH ? r_ : void 0,
                children: rX
            }), nG[373] = iH, nG[374] = iU, nG[375] = rX, nG[376] = iF, nG[377] = l2, nG[378] = iX, nG[379] = l7, nG[380] = iu, nG[381] = r_, nG[382] = lc, nG[383] = ah, nG[384] = oe, nG[385] = l5, nG[386] = tO) : tO = nG[386], nG[387] !== rF || nG[388] !== rA || nG[389] !== tO ? (tW = (0, i.jsx)("div", {
                className: "contents",
                onPointerDownCapture: rA,
                onContextMenu: rF,
                children: tO
            }), nG[387] = rF, nG[388] = rA, nG[389] = tO, nG[390] = tW) : tW = nG[390];
            let r$ = tW,
                rQ = iU ? {
                    top: o6.startsWith("top") ? rs : void 0,
                    bottom: o6.startsWith("top") ? void 0 : rd.bottom,
                    left: rr,
                    width: o4.width,
                    height: o4.height,
                    opacity: lU
                } : {
                    inset: 0
                },
                rZ = !iu,
                rU = iu ? i8 : void 0;
            nG[391] !== iU || nG[392] !== lZ ? (tK = iU ? void 0 : {
                opacity: +!!lZ
            }, nG[391] = iU, nG[392] = lZ, nG[393] = tK) : tK = nG[393];
            let rG = !iu || void 0;
            nG[394] !== ah ? (tV = ah ? {
                duration: 0
            } : {
                duration: .3,
                ease: S.e
            }, nG[394] = ah, nG[395] = tV) : tV = nG[395];
            let rJ = iu ? "minimized" : "preview",
                r0 = iu && "pointer-events-auto";
            nG[396] !== r0 ? (tB = (0, l.b)("absolute inset-0 m-auto touch-none", r0), nG[396] = r0, nG[397] = tB) : tB = nG[397];
            let r1 = ob ? oS : void 0;
            nG[398] !== as || nG[399] !== iw || nG[400] !== iv ? (tY = iw ?? as.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}"
            }, {
                title: iv
            }), nG[398] = as, nG[399] = iw, nG[400] = iv, nG[401] = tY) : tY = nG[401];
            let r2 = !iW && iu && lk;
            nG[402] !== tx ? (tX = e => {
                0 !== e.detail && lN.current || tx()
            }, nG[402] = tx, nG[403] = tX) : tX = nG[403], nG[404] !== iU || nG[405] !== lh ? (t$ = e => {
                iU || "touch" === e.pointerType || lh(!0)
            }, nG[404] = iU, nG[405] = lh, nG[406] = t$) : t$ = nG[406], nG[407] !== eX.type || nG[408] !== iU || nG[409] !== lh ? (tQ = e => {
                "ready" === eX.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), iU || (0, f.flushSync)(() => lh(!0)), le.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, nG[407] = eX.type, nG[408] = iU, nG[409] = lh, nG[410] = tQ) : tQ = nG[410], nG[411] !== aF || nG[412] !== rl ? (tZ = e => {
                aF || 0 !== e.button || (lN.current = !1, e.currentTarget.setPointerCapture(e.pointerId), rl(e))
            }, nG[411] = aF, nG[412] = rl, nG[413] = tZ) : tZ = nG[413], nG[414] !== iU || nG[415] !== ob || nG[416] !== os || nG[417] !== ix || nG[418] !== ai ? (tU = os && null != ai && null == ix ? (0, i.jsx)(ei.a, {
                statusState: ai,
                size: iU ? "default" : "compact"
            }) : (0, i.jsx)(H.a, {
                badgeEnabled: ob,
                children: ix ?? (0, i.jsx)(N.Ib, {})
            }), nG[414] = iU, nG[415] = ob, nG[416] = os, nG[417] = ix, nG[418] = ai, nG[419] = tU) : tU = nG[419], nG[420] !== rJ || nG[421] !== tB || nG[422] !== r1 || nG[423] !== tY || nG[424] !== r2 || nG[425] !== tX || nG[426] !== t$ || nG[427] !== tQ || nG[428] !== tZ || nG[429] !== tU ? (tG = (0, i.jsx)(E.a, {
                ref: a9,
                className: tB,
                "aria-description": r1,
                "aria-label": tY,
                autoFocus: r2,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: tX,
                onPointerEnter: t$,
                onKeyDown: tQ,
                onPointerDown: tZ,
                children: tU
            }, rJ), nG[420] = rJ, nG[421] = tB, nG[422] = r1, nG[423] = tY, nG[424] = r2, nG[425] = tX, nG[426] = t$, nG[427] = tQ, nG[428] = tZ, nG[429] = tU, nG[430] = tG) : tG = nG[430], nG[431] !== rQ || nG[432] !== rZ || nG[433] !== rU || nG[434] !== tK || nG[435] !== rG || nG[436] !== tV || nG[437] !== tG ? (tJ = (0, i.jsx)(d.a.div, {
                ref: y.c,
                className: "pointer-events-none absolute",
                style: rQ,
                "aria-hidden": rZ,
                "data-pip-obstacle": rU,
                animate: tK,
                initial: !1,
                inert: rG,
                transition: tV,
                children: tG
            }), nG[431] = rQ, nG[432] = rZ, nG[433] = rU, nG[434] = tK, nG[435] = rG, nG[436] = tV, nG[437] = tG, nG[438] = tJ) : tJ = nG[438];
            let r3 = tJ,
                r4 = "ready" === eX.type ? (0, i.jsx)(T, {
                    items: eX.value,
                    availableHeight: Math.max(0, (n3?.height ?? ap) - oN - ag - (iu ? o4.height : oq) - 32 - 12),
                    isDockedTop: aG,
                    shouldReduceMotion: ah
                }) : null;
            !iU && (t0 = ec, lZ ? t0 = rh : null != lc || iG || (t0 = "none"));
            let r5 = null != lc || !iu,
                r6 = iX && !lZ;
            nG[439] !== oK || nG[440] !== iU || nG[441] !== rb ? (t1 = iU ? {
                height: oK,
                borderRadius: rb
            } : void 0, nG[439] = oK, nG[440] = iU, nG[441] = rb, nG[442] = t1) : t1 = nG[442], nG[443] !== iU || nG[444] !== rg || nG[445] !== rv || nG[446] !== rb || nG[447] !== rf || nG[448] !== rp ? (t2 = iU ? {
                top: rp,
                right: rf,
                bottom: rg,
                left: rv,
                borderRadius: rb
            } : void 0, nG[443] = iU, nG[444] = rg, nG[445] = rv, nG[446] = rb, nG[447] = rf, nG[448] = rp, nG[449] = t2) : t2 = nG[449], nG[450] !== oW || nG[451] !== oX ? (t3 = {
                height: oW,
                width: oX
            }, nG[450] = oW, nG[451] = oX, nG[452] = t3) : t3 = nG[452];
            let r7 = iU && oC,
                r8 = iU && !oC ? oM : void 0,
                r9 = l5 && l7;
            nG[453] !== oT || nG[454] !== oL ? (t4 = {
                height: oT,
                width: oL
            }, nG[453] = oT, nG[454] = oL, nG[455] = t4) : t4 = nG[455], nG[456] !== r3 || nG[457] !== iy ? (t5 = null == iy ? r3 : (0, i.jsx)(O.a, {
                disableNative: !0,
                items: iy,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: r3
                })
            }), nG[456] = r3, nG[457] = iy, nG[458] = t5) : t5 = nG[458], nG[459] !== oH || nG[460] !== oO ? (t6 = {
                height: oH,
                width: oO
            }, nG[459] = oH, nG[460] = oO, nG[461] = t6) : t6 = nG[461];
            let se = !aF,
                st = lZ || iU ? "panel" : n1,
                sn = oy ? void 0 : iv,
                si = oy ? ac : void 0,
                sa = null != n3 && void 0;
            nG[462] !== iq || nG[463] !== oB || nG[464] !== ah ? (t7 = iq ? {
                opacity: +!!oB,
                translateY: 8 * (!oB && !ah)
            } : {}, nG[462] = iq, nG[463] = oB, nG[464] = ah, nG[465] = t7) : t7 = nG[465];
            let sl = iU || lM?.stage !== "approaching" ? 1 : .95;
            nG[466] !== oX || nG[467] !== t7 || nG[468] !== sl ? (t8 = {
                ...t7,
                width: oX,
                scale: sl
            }, nG[466] = oX, nG[467] = t7, nG[468] = sl, nG[469] = t8) : t8 = nG[469];
            let so = !iU && l2 || void 0,
                sr = iu ? void 0 : i8,
                ss = !aF,
                sc = null == n3 ? void 0 : {
                    left: ra.left - o9.x,
                    right: ra.right - o9.x,
                    top: ra.top - o9.y,
                    bottom: ra.bottom - o9.y
                },
                su = null == n3 ? void 0 : 0;
            nG[470] !== iq || nG[471] !== ah ? (t9 = !!iq && !ah && {
                opacity: 0,
                translateY: 8
            }, nG[470] = iq, nG[471] = ah, nG[472] = t9) : t9 = nG[472];
            let sd = null == n3 ? "dialog" : "region",
                sh = aG ? oN + 10 : "auto",
                sm = aG ? "auto" : 10 + ag,
                sp = oC ? "50%" : "auto";
            nG[473] !== oM || nG[474] !== oC ? (ne = !oC && {
                [oM]: 10
            }, nG[473] = oM, nG[474] = oC, nG[475] = ne) : ne = nG[475];
            let sf = oC ? "-50% 0" : void 0,
                sg = "bottom-center" === o6 ? .5 : Number(o6.endsWith("right")),
                sv = +!o6.startsWith("top");
            nG[476] !== oK || nG[477] !== o3 || nG[478] !== a5 || nG[479] !== a6 || nG[480] !== sh || nG[481] !== sm || nG[482] !== sp || nG[483] !== ne || nG[484] !== sf || nG[485] !== sg || nG[486] !== sv ? (nt = {
                ...o3,
                height: oK,
                top: sh,
                bottom: sm,
                left: sp,
                right: "auto",
                ...ne,
                translate: sf,
                x: a5,
                y: a6,
                originX: sg,
                originY: sv
            }, nG[476] = oK, nG[477] = o3, nG[478] = a5, nG[479] = a6, nG[480] = sh, nG[481] = sm, nG[482] = sp, nG[483] = ne, nG[484] = sf, nG[485] = sg, nG[486] = sv, nG[487] = nt) : nt = nG[487];
            let sb = .3 * !ah;
            nG[488] !== sb ? (nn = {
                duration: sb,
                ease: S.e
            }, nG[488] = sb, nG[489] = nn) : nn = nG[489], nG[490] !== oY || nG[491] !== nn ? (ni = {
                duration: oY,
                ease: S.e,
                scale: nn
            }, nG[490] = oY, nG[491] = nn, nG[492] = ni) : ni = nG[492], nG[493] !== iU || nG[494] !== iX || nG[495] !== iW || nG[496] !== au || nG[497] !== lz || nG[498] !== lp || nG[499] !== lh || nG[500] !== ls || nG[501] !== lu || nG[502] !== ol ? (na = e => {
                if (!(iW || ex(e.currentTarget, e.relatedTarget, au))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && ex(t, t.ownerDocument.activeElement, au) || (lp(!1), lz(!1), lh(!1))
                        });
                        return
                    }
                    lp(!1), lz(!1), lh(!1), (!iU || iX) && ol && null == e.target.closest("[inert]") && (lu(null), ls("compact"))
                }
            }, nG[493] = iU, nG[494] = iX, nG[495] = iW, nG[496] = au, nG[497] = lz, nG[498] = lp, nG[499] = lh, nG[500] = ls, nG[501] = lu, nG[502] = ol, nG[503] = na) : na = nG[503], nG[504] !== l4 || nG[505] !== iU || nG[506] !== tg || nG[507] !== l2 || nG[508] !== iX || nG[509] !== iu || nG[510] !== ls || nG[511] !== lu || nG[512] !== l5 || nG[513] !== ty ? (nl = e => {
                if (!(iX && (0 !== e.button || e.ctrlKey) || iu || lN.current || e.detail > 0 && l_.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (l2 && (e.target === e.currentTarget || a7.current?.contains(e.target))) return void tg();
                    if (iX) {
                        if (!l5 || !l4) return;
                        l2 && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), lu(null), ls("expanded");
                        return
                    }
                    if (iU) {
                        l2 && l4 && tg();
                        return
                    }
                    l5 && l4 && e.target.closest("header[data-quick-chat-drag-handle]") && (l2 && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), ty())
                }
            }, nG[504] = l4, nG[505] = iU, nG[506] = tg, nG[507] = l2, nG[508] = iX, nG[509] = iu, nG[510] = ls, nG[511] = lu, nG[512] = l5, nG[513] = ty, nG[514] = nl) : nl = nG[514], nG[515] !== iU || nG[516] !== oT || nG[517] !== oL || nG[518] !== oH || nG[519] !== oO || nG[520] !== ir || nG[521] !== iu || nG[522] !== iY || nG[523] !== lK || nG[524] !== ls || nG[525] !== lu || nG[526] !== rk ? (no = e => {
                iU && !iu && !lN.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (lu(null), ls("expanded"), lK(null), Z(iY, z, {
                    dockPosition: "bottom-right",
                    hasConversation: ir
                }), rk("bottom-right", !0, {
                    height: ey(z.height, oH, oT),
                    width: ey(z.width + 12, oO, oL)
                }))
            }, nG[515] = iU, nG[516] = oT, nG[517] = oL, nG[518] = oH, nG[519] = oO, nG[520] = ir, nG[521] = iu, nG[522] = iY, nG[523] = lK, nG[524] = ls, nG[525] = lu, nG[526] = rk, nG[527] = no) : no = nG[527], nG[528] !== iW ? (nr = e => {
                !iW && lN.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, nG[528] = iW, nG[529] = nr) : nr = nG[529], nG[530] !== iU || nG[531] !== rj || nG[532] !== iu || nG[533] !== lM || nG[534] !== ej || nG[535] !== lr || nG[536] !== lE || nG[537] !== lu || nG[538] !== i2 ? (ns = (e, t) => {
                let n = rj(t),
                    i = n.bubbleDropPosition ?? (iU ? ej : n.dockPosition);
                if (i2 && (n.shouldMinimize ? i1(`bubble-${i}`) : i1(iu ? `bubble-${n.dockPosition}` : `composer-${n.dockPosition}`)), null != n.dockPosition && (iU ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching";
                    (lM?.stage !== e || lM.dockPosition !== i) && (lE({
                        dockPosition: i,
                        stage: e
                    }), (n.shouldMinimize || lM?.stage === "minimized") && lu(iU ? null : {
                        target: n.shouldMinimize ? "minimized" : lr
                    }))
                } else null != lM && "restored" !== lM.stage && (lE({
                    ...lM,
                    stage: "restored"
                }), "minimized" === lM.stage && lu(iU ? null : {
                    target: lr
                }))
            }, nG[530] = iU, nG[531] = rj, nG[532] = iu, nG[533] = lM, nG[534] = ej, nG[535] = lr, nG[536] = lE, nG[537] = lu, nG[538] = i2, nG[539] = ns) : ns = nG[539], nG[540] !== iU || nG[541] !== rj || nG[542] !== aK || nG[543] !== rN || nG[544] !== lM || nG[545] !== ej || nG[546] !== lr || nG[547] !== rS || nG[548] !== lE || nG[549] !== lu || nG[550] !== rk ? (nc = (e, t) => {
                if (a1.current) return;
                i1(null);
                let n = rj(t);
                n.shouldMinimize ? (0, f.flushSync)(() => {
                    null != n.bubbleDropPosition ? rS(n.bubbleDropPosition, !0) : iU && aK || rS(iU ? ej : n.requestedDockPosition, !0), rN()
                }) : (rk(n.requestedDockPosition, !0), null != lM && "restored" !== lM.stage && (lE({
                    ...lM,
                    stage: "restored"
                }), "minimized" === lM.stage && lu(iU ? null : {
                    target: lr
                }))), iJ(!1)
            }, nG[540] = iU, nG[541] = rj, nG[542] = aK, nG[543] = rN, nG[544] = lM, nG[545] = ej, nG[546] = lr, nG[547] = rS, nG[548] = lE, nG[549] = lu, nG[550] = rk, nG[551] = nc) : nc = nG[551], nG[552] !== a5 || nG[553] !== a6 || nG[554] !== lh ? (nu = () => {
                lh(!1), i1(null), a1.current = !1, lN.current = !0, iJ(!0), a5.stop(), a6.stop()
            }, nG[552] = a5, nG[553] = a6, nG[554] = lh, nG[555] = nu) : nu = nG[555], nG[556] !== l4 || nG[557] !== n7 || nG[558] !== iU || nG[559] !== iX || nG[560] !== lv || nG[561] !== lz || nG[562] !== lp || nG[563] !== ls || nG[564] !== lu || nG[565] !== l5 ? (nd = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!iU || iX) && lp(!0), lz(!0), (iX ? l5 && l4 : iU) && null == n7 && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !lv && null == lx.current && (lu(null), ls("expanded"))) : e.currentTarget.contains(e.target) && !a7.current?.contains(e.target) && (lz(!1), iX && e.target.closest("header[data-quick-chat-drag-handle]") && lp(!0))
            }, nG[556] = l4, nG[557] = n7, nG[558] = iU, nG[559] = iX, nG[560] = lv, nG[561] = lz, nG[562] = lp, nG[563] = ls, nG[564] = lu, nG[565] = l5, nG[566] = nd) : nd = nG[566], nG[567] !== a0 || nG[568] !== iW ? (nh = e => {
                iW || "Escape" !== e.key || (lN.current = !0, a0.cancel())
            }, nG[567] = a0, nG[568] = iW, nG[569] = nh) : nh = nG[569], nG[570] !== iI || nG[571] !== iW || nG[572] !== aF || nG[573] !== rl ? (nm = e => {
                if (iW || (lN.current = !1, l_.current = lR.current > 0 && e.target instanceof Element && null != e.target.closest("header[data-quick-chat-drag-handle]"), aF || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                    i = a7.current,
                    a = e.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                if (iI && null != a && i?.contains(a) && (n === a || e.target.contains(a))) t = i;
                else if (null == t || null != n && n !== t) return;
                e.preventDefault(), t.setPointerCapture(e.pointerId), rl(e)
            }, nG[570] = iI, nG[571] = iW, nG[572] = aF, nG[573] = rl, nG[574] = nm) : nm = nG[574], nG[575] !== lh ? (np = () => {
                le.current?.contains(document.activeElement) || lh(!1)
            }, nG[575] = lh, nG[576] = np) : np = nG[576], nG[577] !== a0 || nG[578] !== tb || nG[579] !== nJ || nG[580] !== sn || nG[581] !== si || nG[582] !== sa || nG[583] !== t8 || nG[584] !== so || nG[585] !== sr || nG[586] !== ss || nG[587] !== sc || nG[588] !== su || nG[589] !== t9 || nG[590] !== sd || nG[591] !== nt || nG[592] !== ni || nG[593] !== na || nG[594] !== nl || nG[595] !== no || nG[596] !== nr || nG[597] !== ns || nG[598] !== nc || nG[599] !== nu || nG[600] !== nd || nG[601] !== nh || nG[602] !== nm || nG[603] !== np ? (nf = {
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
                dragControls: a0,
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
            }, nG[577] = a0, nG[578] = tb, nG[579] = nJ, nG[580] = sn, nG[581] = si, nG[582] = sa, nG[583] = t8, nG[584] = so, nG[585] = sr, nG[586] = ss, nG[587] = sc, nG[588] = su, nG[589] = t9, nG[590] = sd, nG[591] = nt, nG[592] = ni, nG[593] = na, nG[594] = nl, nG[595] = no, nG[596] = nr, nG[597] = ns, nG[598] = nc, nG[599] = nu, nG[600] = nd, nG[601] = nh, nG[602] = nm, nG[603] = np, nG[604] = nf) : nf = nG[604];
            let sx = null == n3 ? "floating" : "content",
                sy = aG ? "bottom" : "top";
            nG[605] !== a5 || nG[606] !== a6 || nG[607] !== lD || nG[608] !== lu ? (ng = e => {
                lD(e), e && (lu(null), a5.stop(), a6.stop())
            }, nG[605] = a5, nG[606] = a6, nG[607] = lD, nG[608] = lu, nG[609] = ng) : ng = nG[609], nG[610] !== eX.type || nG[611] !== r4 || nG[612] !== iU || nG[613] !== og || nG[614] !== aG || nG[615] !== iu || nG[616] !== aI || nG[617] !== ry || nG[618] !== i8 || nG[619] !== lp ? (nv = !iU && og && "ready" === eX.type ? (0, i.jsx)("div", {
                ref: (0, k.a)(le, aI, y.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iu && (aG ? "top-full" : "bottom-full"), aG ? "pt-3" : "pb-3"),
                "data-pip-obstacle": i8,
                onClickCapture: () => {
                    (iu ? a9.current : a8.current)?.focus({
                        preventScroll: !0
                    }), lp(!1)
                },
                style: iu ? ry : void 0,
                children: r4
            }) : null, nG[610] = eX.type, nG[611] = r4, nG[612] = iU, nG[613] = og, nG[614] = aG, nG[615] = iu, nG[616] = aI, nG[617] = ry, nG[618] = i8, nG[619] = lp, nG[620] = nv) : nv = nG[620], nG[621] !== r4 || nG[622] !== iU || nG[623] !== og || nG[624] !== aG || nG[625] !== iu || nG[626] !== aI || nG[627] !== ry || nG[628] !== lz || nG[629] !== lp || nG[630] !== ah ? (nb = iU && og ? (0, i.jsx)(d.a.div, {
                initial: {
                    opacity: 0,
                    y: 8 * !ah
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 8 * !ah
                },
                transition: {
                    duration: .3 * !ah,
                    ease: S.e
                },
                ref: (0, k.a)(le, aI, y.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !iu && (aG ? "top-full" : "bottom-full"), iu && (aG ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (iu ? a9.current : a8.current)?.focus({
                        preventScroll: !0
                    }), lp(!1), lz(!1)
                },
                style: iu ? ry : void 0,
                children: iu ? (0, i.jsx)(x.c, {
                    variant: "notice",
                    children: r4
                }) : r4
            }, "response-preview") : null, nG[621] = r4, nG[622] = iU, nG[623] = og, nG[624] = aG, nG[625] = iu, nG[626] = aI, nG[627] = ry, nG[628] = lz, nG[629] = lp, nG[630] = ah, nG[631] = nb) : nb = nG[631], nG[632] !== nb ? (nx = (0, i.jsx)(h.a, {
                initial: !1,
                children: nb
            }), nG[632] = nb, nG[633] = nx) : nx = nG[633], nG[634] !== oU || nG[635] !== iU || nG[636] !== i7 || nG[637] !== tg || nG[638] !== l2 || nG[639] !== aG || nG[640] !== iW || nG[641] !== iu || nG[642] !== iN || nG[643] !== ah || nG[644] !== on ? (ny = iU && void 0 !== iN && !iW && !iu && (0, i.jsx)(eb, {
                compact: l2,
                preview: on ? iN : null,
                reduceMotion: ah,
                isDockedTop: aG,
                opacity: oU,
                onExpand: tg
            }, i7), nG[634] = oU, nG[635] = iU, nG[636] = i7, nG[637] = tg, nG[638] = l2, nG[639] = aG, nG[640] = iW, nG[641] = iu, nG[642] = iN, nG[643] = ah, nG[644] = on, nG[645] = ny) : ny = nG[645];
            let sw = aG ? "top-full pt-2" : "bottom-full";
            nG[646] !== sw ? (nw = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", sw), nG[646] = sw, nG[647] = nw) : nw = nG[647], nG[648] !== aT || nG[649] !== lZ || nG[650] !== nw ? (nz = (0, i.jsx)("div", {
                ref: aT,
                className: nw,
                hidden: lZ
            }), nG[648] = aT, nG[649] = lZ, nG[650] = nw, nG[651] = nz) : nz = nG[651];
            let sz = 0 === oE && "pt-2",
                sj = aG ? "w-full" : "w-80",
                sS = oC && "left-1/2 -translate-x-1/2",
                sk = !oC && (ok ? "left-0" : "right-0"),
                sC = lZ && iG && "invisible";
            nG[652] !== sz || nG[653] !== sj || nG[654] !== sS || nG[655] !== sk || nG[656] !== sC ? (nj = (0, l.b)(C.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", sz, sj, sS, sk, sC), nG[652] = sz, nG[653] = sj, nG[654] = sS, nG[655] = sk, nG[656] = sC, nG[657] = nj) : nj = nG[657], nG[658] !== oE ? (nS = {
                marginTop: oE
            }, nG[658] = oE, nG[659] = nS) : nS = nG[659], nG[660] !== n9 || nG[661] !== aD || nG[662] !== i8 || nG[663] !== nj || nG[664] !== nS ? (nk = (0, i.jsx)("div", {
                ref: aD,
                className: nj,
                style: nS,
                "data-pip-obstacle": i8,
                children: n9
            }), nG[660] = n9, nG[661] = aD, nG[662] = i8, nG[663] = nj, nG[664] = nS, nG[665] = nk) : nk = nG[665], nG[666] !== t0 || nG[667] !== iU || nG[668] !== lZ ? (nC = iU ? void 0 : {
                clipPath: t0,
                opacity: +!lZ
            }, nG[666] = t0, nG[667] = iU, nG[668] = lZ, nG[669] = nC) : nC = nG[669];
            let sM = !iu && "pointer-events-auto";
            nG[670] !== sM ? (nM = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", sM), nG[670] = sM, nG[671] = nM) : nM = nG[671], nG[672] !== lG || nG[673] !== iU || nG[674] !== rx ? (nE = iU ? {
                clipPath: rx,
                opacity: lG
            } : void 0, nG[672] = lG, nG[673] = iU, nG[674] = rx, nG[675] = nE) : nE = nG[675];
            let sE = !!iu || void 0;
            nG[676] !== iU || nG[677] !== lc || nG[678] !== ah ? (nN = ah || !iU && null == lc ? {
                duration: 0
            } : {
                duration: .3,
                ease: S.e
            }, nG[676] = iU, nG[677] = lc, nG[678] = ah, nG[679] = nN) : nN = nG[679], nG[680] !== lZ || nG[681] !== rh || nG[682] !== lr || nG[683] !== lc || nG[684] !== lu ? (nR = e => {
                lc?.target === (lZ ? "minimized" : lr) && "object" == typeof e && "clipPath" in e && e.clipPath === (lZ ? rh : ec) && lu(e => e === lc ? null : e)
            }, nG[680] = lZ, nG[681] = rh, nG[682] = lr, nG[683] = lc, nG[684] = lu, nG[685] = nR) : nR = nG[685], nG[686] !== iU || nG[687] !== l2 || nG[688] !== aG || nG[689] !== rN || nG[690] !== l5 ? (nP = !iU && !l5 && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", aG ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(V.c, {
                    standalone: !0,
                    isCompact: l2,
                    onMinimize: rN
                })
            }), nG[686] = iU, nG[687] = l2, nG[688] = aG, nG[689] = rN, nG[690] = l5, nG[691] = nP) : nP = nG[691], nG[692] !== iU || nG[693] !== r$ || nG[694] !== l2 || nG[695] !== iG || nG[696] !== rN || nG[697] !== il || nG[698] !== l5 ? (n_ = (iU || l5) && (il?.({
                contextMenuTrigger: r$,
                isCompact: l2,
                isDragging: iG,
                onMinimize: rN
            }) ?? r$), nG[692] = iU, nG[693] = r$, nG[694] = l2, nG[695] = iG, nG[696] = rN, nG[697] = il, nG[698] = l5, nG[699] = n_) : n_ = nG[699];
            let sN = l2 && "justify-end";
            nG[700] !== sN ? (nT = (0, l.b)("relative flex min-h-0 flex-1 flex-col", sN), nG[700] = sN, nG[701] = nT) : nT = nG[701];
            let sR = iU ? l2 : i9.followLatestTranscript;
            nG[702] !== i9 || nG[703] !== sR ? (nD = {
                ...i9,
                isFloatingChatSurface: !0,
                followLatestTranscript: sR
            }, nG[702] = i9, nG[703] = sR, nG[704] = nD) : nD = nG[704];
            let sP = iU ? "absolute inset-x-0 overflow-hidden" : "contents";
            nG[705] !== lL || nG[706] !== iU || nG[707] !== oZ ? (nL = iU ? {
                bottom: lL,
                height: oZ
            } : void 0, nG[705] = lL, nG[706] = iU, nG[707] = oZ, nG[708] = nL) : nL = nG[708], nG[709] !== oU || nG[710] !== l9 || nG[711] !== ar || nG[712] !== l2 || nG[713] !== aP || nG[714] !== ao || nG[715] !== ik ? (nq = l9 && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) bottom-0 px-4 py-3 text-sm text-default",
                "aria-hidden": ar || !l2,
                style: {
                    opacity: oU
                },
                ref: aP,
                children: ar ? (0, i.jsx)("span", {
                    className: "line-clamp-2 wrap-anywhere select-none",
                    dir: "auto",
                    children: ao
                }) : ik ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…"
                })
            }), nG[709] = oU, nG[710] = l9, nG[711] = ar, nG[712] = l2, nG[713] = aP, nG[714] = ao, nG[715] = ik, nG[716] = nq) : nq = nG[716];
            let s_ = !iU && (l2 ? "hidden" : "flex"),
                sT = iU && "absolute inset-x-0 bottom-0 flex",
                sD = iU && "overflow-hidden";
            nG[717] !== s_ || nG[718] !== sT || nG[719] !== sD ? (nI = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", s_, sT, sD), nG[717] = s_, nG[718] = sT, nG[719] = sD, nG[720] = nI) : nI = nG[720], nG[721] !== lL || nG[722] !== iU || nG[723] !== oF || nG[724] !== oQ || nG[725] !== l2 ? (nA = iU ? {
                height: Math.max(0, oF - 46 - lL),
                opacity: l2 ? 0 : oQ
            } : void 0, nG[721] = lL, nG[722] = iU, nG[723] = oF, nG[724] = oQ, nG[725] = l2, nG[726] = nA) : nA = nG[726], nG[727] !== iU || nG[728] !== i5 || nG[729] !== l3 || nG[730] !== l2 || nG[731] !== iW || nG[732] !== lZ || nG[733] !== iP || nG[734] !== ls || nG[735] !== lu ? (nF = i5 && (!l3 || iU) ? iP?.(() => {
                lu(null), ls("compact")
            }, !l2 && !iW && !lZ) : null, nG[727] = iU, nG[728] = i5, nG[729] = l3, nG[730] = l2, nG[731] = iW, nG[732] = lZ, nG[733] = iP, nG[734] = ls, nG[735] = lu, nG[736] = nF) : nF = nG[736], nG[737] !== iU || nG[738] !== i4 || nG[739] !== i5 || nG[740] !== l2 || nG[741] !== oY ? (nH = !i5 && (0, i.jsx)(h.a, {
                initial: !1,
                children: (iU || !l2) && null != i4 && (0, i.jsx)(d.a.div, {
                    className: "flex min-h-0 flex-1 flex-col",
                    initial: !iU && {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: oY,
                        ease: S.e
                    },
                    children: i4
                }, "empty-state")
            }), nG[737] = iU, nG[738] = i4, nG[739] = i5, nG[740] = l2, nG[741] = oY, nG[742] = nH) : nH = nG[742], nG[743] !== l2 || nG[744] !== ak || nG[745] !== nI || nG[746] !== nA || nG[747] !== nF || nG[748] !== nH ? (nO = (0, i.jsxs)(d.a.div, {
                ref: ak,
                "aria-hidden": l2,
                className: nI,
                inert: l2,
                style: nA,
                children: [nF, nH]
            }), nG[743] = l2, nG[744] = ak, nG[745] = nI, nG[746] = nA, nG[747] = nF, nG[748] = nH, nG[749] = nO) : nO = nG[749], nG[750] !== iU || nG[751] !== tg || nG[752] !== l9 || nG[753] !== l2 || nG[754] !== rP || nG[755] !== ao ? (nW = iU && l2 && l9 && (0, i.jsx)(E.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "absolute inset-0",
                "aria-label": rP,
                "aria-description": ao ?? void 0,
                "data-quick-chat-drag-handle": !0,
                onClick: tg
            }), nG[750] = iU, nG[751] = tg, nG[752] = l9, nG[753] = l2, nG[754] = rP, nG[755] = ao, nG[756] = nW) : nW = nG[756], nG[757] !== sP || nG[758] !== nL || nG[759] !== nq || nG[760] !== nO || nG[761] !== nW ? (nK = (0, i.jsxs)(d.a.div, {
                className: sP,
                style: nL,
                children: [nq, nO, nW]
            }), nG[757] = sP, nG[758] = nL, nG[759] = nq, nG[760] = nO, nG[761] = nW, nG[762] = nK) : nK = nG[762], nG[763] !== nD || nG[764] !== nK ? (nV = (0, i.jsx)(ea.b, {
                value: nD,
                children: nK
            }), nG[763] = nD, nG[764] = nK, nG[765] = nV) : nV = nG[765];
            let sL = il?.({
                contextMenuTrigger: rW,
                isCompact: l2,
                isDragging: iG,
                onMinimize: rN
            }) ?? rW;
            nG[766] !== nT || nG[767] !== nV || nG[768] !== sL ? (nB = (0, i.jsxs)("div", {
                className: nT,
                children: [nV, sL]
            }), nG[766] = nT, nG[767] = nV, nG[768] = sL, nG[769] = nB) : nB = nG[769], nG[770] !== aU || nG[771] !== iu || nG[772] !== nC || nG[773] !== nM || nG[774] !== nE || nG[775] !== sE || nG[776] !== nN || nG[777] !== nR || nG[778] !== nP || nG[779] !== n_ || nG[780] !== nB ? (nY = (0, i.jsxs)(d.a.div, {
                "aria-hidden": iu,
                animate: nC,
                className: nM,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": aU,
                style: nE,
                initial: !1,
                inert: sE,
                transition: nN,
                onAnimationComplete: nR,
                children: [nP, n_, nB]
            }), nG[770] = aU, nG[771] = iu, nG[772] = nC, nG[773] = nM, nG[774] = nE, nG[775] = sE, nG[776] = nN, nG[777] = nR, nG[778] = nP, nG[779] = n_, nG[780] = nB, nG[781] = nY) : nY = nG[781], nG[782] !== M || nG[783] !== rE || nG[784] !== l2 || nG[785] !== lZ || nG[786] !== rd || nG[787] !== ie || nG[788] !== rM || nG[789] !== rD || nG[790] !== rT || nG[791] !== ah || nG[792] !== r5 || nG[793] !== r6 || nG[794] !== t1 || nG[795] !== t2 || nG[796] !== t3 || nG[797] !== r7 || nG[798] !== r8 || nG[799] !== r9 || nG[800] !== t4 || nG[801] !== t5 || nG[802] !== t6 || nG[803] !== se || nG[804] !== st || nG[805] !== nf || nG[806] !== sx || nG[807] !== sy || nG[808] !== ng || nG[809] !== nv || nG[810] !== nx || nG[811] !== ny || nG[812] !== nz || nG[813] !== nk || nG[814] !== nY ? (nX = (0, i.jsxs)(M, {
                allowCompactResize: !0,
                animateSurface: r5,
                elevateComposer: r6,
                contentStyle: t1,
                surfaceStyle: t2,
                currentSize: t3,
                heightLabel: rD,
                resizeFromCenter: r7,
                fixedHorizontalEdge: r8,
                isCompact: l2,
                isCompactChromeRevealed: r9,
                isMinimized: lZ,
                keepSurfaceInset: !0,
                maximumSize: t4,
                minimizedContent: t5,
                minimizedSurfaceBounds: rd,
                minimumSize: t6,
                prefersCompactPresentation: !0,
                resizable: se,
                background: st,
                sectionRef: a8,
                sectionProps: nf,
                shouldReduceMotion: ah,
                variant: sx,
                verticalResizeEdge: sy,
                widthLabel: rT,
                onResize: rM,
                onResizeEnd: rE,
                onResizingChange: ng,
                children: [nv, nx, ny, nz, nk, nY, ie]
            }), nG[782] = M, nG[783] = rE, nG[784] = l2, nG[785] = lZ, nG[786] = rd, nG[787] = ie, nG[788] = rM, nG[789] = rD, nG[790] = rT, nG[791] = ah, nG[792] = r5, nG[793] = r6, nG[794] = t1, nG[795] = t2, nG[796] = t3, nG[797] = r7, nG[798] = r8, nG[799] = r9, nG[800] = t4, nG[801] = t5, nG[802] = t6, nG[803] = se, nG[804] = st, nG[805] = nf, nG[806] = sx, nG[807] = sy, nG[808] = ng, nG[809] = nv, nG[810] = nx, nG[811] = ny, nG[812] = nz, nG[813] = nk, nG[814] = nY, nG[815] = nX) : nX = nG[815];
            let sq = nX;
            return nG[816] !== au ? (n$ = {
                id: au
            }, nG[816] = au, nG[817] = n$) : n$ = nG[817], nG[818] !== iU || nG[819] !== aR ? (nQ = iU && (0, i.jsx)("div", {
                ref: aR,
                "aria-hidden": !0,
                className: (0, l.b)(el.a, "pointer-events-none invisible absolute")
            }), nG[818] = iU, nG[819] = aR, nG[820] = nQ) : nQ = nG[820], nG[821] !== i0 || nG[822] !== n3 || nG[823] !== iG || nG[824] !== iu || nG[825] !== n8 || nG[826] !== i2 || nG[827] !== o_ || nG[828] !== aA ? (nZ = i2 && iG && null != i0 && (0, i.jsx)(eg, {
                activeIndicator: i0,
                fixed: null == n3,
                isMinimized: iu,
                reservedDockPosition: n8,
                viewportWidth: aA,
                viewportHeight: o_
            }), nG[821] = i0, nG[822] = n3, nG[823] = iG, nG[824] = iu, nG[825] = n8, nG[826] = i2, nG[827] = o_, nG[828] = aA, nG[829] = nZ) : nZ = nG[829], nG[830] !== sq || nG[831] !== n$ || nG[832] !== nQ || nG[833] !== nZ ? (nU = (0, i.jsxs)(W.a, {
                value: n$,
                children: [nQ, nZ, sq]
            }), nG[830] = sq, nG[831] = n$, nG[832] = nQ, nG[833] = nZ, nG[834] = nU) : nU = nG[834], nU
        }

        function ep() {
            return new Set
        }
        let ef = {
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

        function eg(e) {
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
                let e, n = ev(u, p, !0);
                o[7] !== r || o[8] !== m || o[9] !== h || o[10] !== d ? (e = e => {
                    let t = r?.endsWith(e) === !0,
                        n = (d - 40) / 2;
                    "bottom-left" === e ? n = 11 : "bottom-right" === e && (n = d - 11 - 40);
                    let a = ef[e];
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
                }, o[7] = r, o[8] = m, o[9] = h, o[10] = d, o[11] = e) : e = o[11], t = er.filter(e => n.includes(e)).map(e), o[0] = r, o[1] = m, o[2] = p, o[3] = u, o[4] = h, o[5] = d, o[6] = t
            } else t = o[6];
            return o[12] !== t ? (n = (0, i.jsx)(i.Fragment, {
                children: t
            }), o[12] = t, o[13] = n) : n = o[13], n
        }

        function ev(e, t, n) {
            let i = er;
            return t && (i = n ? es : ["bottom-right"]), Array.from(new Set(i.map(t => (0, B.f)(t, e))))
        }

        function eb(e) {
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

        function ex(e, t, n) {
            return t instanceof Node && (e.contains(t) || t instanceof Element && (null != t.closest("[data-composer-overlay-floating-ui], [data-content-search-bar], [data-composer-focus-target]") || null != t.closest("[data-floating-chat-annotation-layer]") || t.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === n))
        }

        function ey(e, t, n) {
            return Math.max(t, Math.min(e, n))
        }

        function ew() {
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
                let t, n, l, r, s = (0, a.c)(13),
                    {
                        children: c,
                        isCompact: u,
                        isVisible: d,
                        isDisabled: h,
                        showDivider: m
                    } = e,
                    p = void 0 !== u && u,
                    f = !d || !!h || void 0,
                    g = p ? Number(d) : "var(--quick-chat-expansion, 1)";
                s[0] !== g ? (t = {
                    opacity: g
                }, s[0] = g, s[1] = t) : t = s[1];
                let v = !d || !!h || void 0,
                    b = p && "border-b",
                    x = p && (m ? "border-default" : "border-transparent");
                return s[2] !== b || s[3] !== x ? (n = (0, o.b)("flex h-toolbar cursor-interaction touch-none items-center justify-between px-2 select-none", b, x), s[2] = b, s[3] = x, s[4] = n) : n = s[4], s[5] !== c || s[6] !== n ? (l = (0, i.jsx)("div", {
                    className: n,
                    children: c
                }), s[5] = c, s[6] = n, s[7] = l) : l = s[7], s[8] !== f || s[9] !== t || s[10] !== v || s[11] !== l ? (r = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden",
                    "aria-hidden": f,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: v,
                    children: l
                }), s[8] = f, s[9] = t, s[10] = v, s[11] = l, s[12] = r) : r = s[12], r
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
                T = "top" === E ? "top-0" : "bottom-0",
                D = "left" === C ? "left-0" : "right-0",
                L = "left" === C == ("top" === E) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return g[11] !== T || g[12] !== D || g[13] !== L ? (l = (0, o.b)("group absolute z-50 flex size-4 touch-none select-none", T, D, L), g[11] = T, g[12] = D, g[13] = L, g[14] = l) : l = g[14], g[15] !== _ ? (c = e => {
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