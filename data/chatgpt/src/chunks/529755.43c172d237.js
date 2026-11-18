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
        var S = n("hZax"),
            j = n("V8uZ"),
            k = n("HgLj"),
            C = n("O8DZ");

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
                    resizeFromCenter: D,
                    heightLabel: T,
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
                    sectionRef: Z,
                    surfaceStyle: Q,
                    shouldReduceMotion: U,
                    variant: G,
                    verticalResizeEdge: J,
                    widthLabel: ee
                } = e,
                et = void 0 !== g && g,
                en = void 0 === v || v,
                ei = void 0 !== D && D,
                ea = void 0 === X || X,
                el = (0, S.f)("2163293173"),
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
            f[6] !== $.ref || f[7] !== Z ? (o = (0, k.a)(Z, $.ref, y.c), f[6] = $.ref, f[7] = Z, f[8] = o) : o = f[8];
            let ed = !el && Y && "frame-Xbg62r",
                eh = Y && "group/chat-frame focus:outline-none",
                em = null != O ? "pointer-events-none" : "pointer-events-auto",
                ep = Y && C.a.floatingSurface,
                ef = A && C.a.singleLineSurface,
                eg = "floating" === G ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                ev = Y ? "overflow-visible" : "overflow-hidden";
            f[9] !== ed || f[10] !== eh || f[11] !== em || f[12] !== ep || f[13] !== ef || f[14] !== eg || f[15] !== ev ? (r = (0, l.b)("flex flex-col text-default", ed, eh, em, ep, ef, eg, ev), f[9] = ed, f[10] = eh, f[11] = em, f[12] = ep, f[13] = ef, f[14] = eg, f[15] = ev, f[16] = r) : r = f[16];
            let eb = null != N ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== eb ? (s = (0, l.b)(eb), f[17] = eb, f[18] = s) : s = f[18], f[19] !== en || f[20] !== b || f[21] !== ec || f[22] !== P || f[23] !== A || f[24] !== H || f[25] !== Y || f[26] !== U || f[27] !== er || f[28] !== Q ? (c = Y ? (0, i.jsx)(x.c, {
                asChild: !0,
                unstyled: "panel" !== b,
                variant: A ? "single-line" : "default",
                shadow: P ? "raised" : void 0,
                children: null != Q ? (0, i.jsx)(d.a.div, {
                    className: ec,
                    "aria-hidden": null == H || void 0,
                    style: Q
                }, "panel-background") : (0, i.jsx)(d.a.div, {
                    className: ec,
                    "aria-hidden": null == H || void 0,
                    animate: er,
                    initial: !1,
                    transition: U || !en ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: j.e
                    },
                    children: H
                }, "legacy-background")
            }) : null, f[19] = en, f[20] = b, f[21] = ec, f[22] = P, f[23] = A, f[24] = H, f[25] = Y, f[26] = U, f[27] = er, f[28] = Q, f[29] = c) : c = f[29], f[30] !== et || f[31] !== E || f[32] !== _ || f[33] !== T || f[34] !== L || f[35] !== I || f[36] !== F || f[37] !== W || f[38] !== K || f[39] !== V || f[40] !== B || f[41] !== ea || f[42] !== ei || f[43] !== er || f[44] !== J || f[45] !== ee ? (u = ea && (!L || et) && !I ? (0, i.jsx)("div", {
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
                        heightLabel: T,
                        maximumSize: F,
                        minimumSize: W,
                        verticalEdge: L ? null : J,
                        widthLabel: ee,
                        onResize: K,
                        onResizeEnd: V,
                        onResizingChange: B
                    })
                })
            }) : null, f[30] = et, f[31] = E, f[32] = _, f[33] = T, f[34] = L, f[35] = I, f[36] = F, f[37] = W, f[38] = K, f[39] = V, f[40] = B, f[41] = ea, f[42] = ei, f[43] = er, f[44] = J, f[45] = ee, f[46] = u) : u = f[46];
            let ex = null == Q ? null : H;
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
                    isWorking: j,
                    workingContent: k
                } = e,
                C = void 0 !== j && j,
                M = (0, S.f)("2163293173"),
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
                }), f[25] = R, f[26] = r) : r = f[26], f[27] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(N.zj, {
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
            }), f[47] = R, f[48] = u) : u = f[48], f[49] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(N.zj, {
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
                g = (0, S.f)("2163293173"),
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
                ease: j.e
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
        let Z = (0, n("Nwp9").b)("quick-chat-size-v1", z);

        function Q(e, t, n) {
            let {
                dockPosition: i,
                hasConversation: a
            } = n, l = e.get(Z);
            e.set(Z, t), (null == l || l.height !== t.height || l.width !== t.width) && (0, $.d)(e, {
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
            ed = (0, m.u)(en.a, ey, {
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
            let t, n, w, P, $, er, es, eh, em, ef, ey, ew, ez, eS, ej, ek, eC, eM, eE, eN, eR, eP, e_, eD, eT, eL, eq, eI, eA, eF, eH, eO, eW, eK, eV, eB, eY, eX, e$, eZ, eQ, eU, eG, eJ, e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, te, tt, tn, ti, ta, tl, to, tr, ts, tc, tu, td, th, tm, tp, tf, tg, tv, tb, tx, ty, tw, tz, tS, tj, tk, tC, tM, tE, tN, tR, tP, t_, tD, tT, tL, tq, tI, tA, tF, tH, tO, tW, tK, tV, tB, tY, tX, t$, tZ, tQ, tU, tG, tJ, t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, ne, nt, nn, ni, na, nl, no, nr, ns, nc, nu, nd, nh, nm, np, nf, ng, nv, nb, nx, ny, nw, nz, nS, nj, nk, nC, nM, nE, nN, nR, nP, n_, nD, nT, nL, nq, nI, nA, nF, nH, nO, nW, nK, nV, nB, nY, nX, n$, nZ, nQ = (0, a.c)(823),
                {
                    ref: nU,
                    animateOnMount: nG,
                    background: nJ,
                    renderComposer: n0,
                    containerSize: n1,
                    minimumWidth: n2,
                    dockThreadKey: n3,
                    canDock: n4,
                    preserveLayoutOnEscape: n5,
                    compactInputPosition: n6,
                    reservedDockPosition: n7,
                    footer: n8,
                    overlay: n9,
                    renderHeaderContent: ie,
                    headerInteractionDisabled: it,
                    allowLegacyHeaderToggle: ii,
                    renderMenu: ia,
                    forceExpanded: il,
                    hasConversation: io,
                    isHidden: ir,
                    contentChat: is,
                    isMinimized: ic,
                    isCollisionObstacle: iu,
                    onEscape: id,
                    onMinimizedChange: ih,
                    presentation: im,
                    onPresentationChange: ip,
                    title: ig,
                    titleContent: iv,
                    minimizedIcon: ib,
                    minimizedMenuItems: ix,
                    restoreLabel: iy,
                    statusState: iw,
                    titleStatusState: iz,
                    notifications: iS,
                    workingPreview: ij,
                    compactWorkingPreview: ik,
                    responsePreview: iC,
                    persistResponsePreview: iM,
                    showResponsePreview: iE,
                    emptyState: iN,
                    renderTranscript: iR,
                    hasTranscript: iP,
                    pendingFormId: i_,
                    showComposerDivider: iD,
                    showHeader: iT
                } = e,
                iL = void 0 !== nG && nG,
                iq = void 0 === n4 || n4,
                iI = void 0 !== n5 && n5,
                iA = void 0 !== it && it,
                iF = void 0 === ii || ii,
                iH = void 0 !== il && il,
                iO = void 0 !== ir && ir,
                iW = void 0 === iz ? iw : iz,
                iK = void 0 !== iM && iM,
                iV = void 0 === iE || iE,
                iB = void 0 === iT || iT,
                iY = (0, m.y)(en.a),
                iX = null != is,
                i$ = is?.onOpenRightPane,
                iZ = (0, m.z)(void 0 === i_ ? null : i_),
                iQ = null != iZ,
                iU = (0, S.f)("2163293173"),
                [iG, iJ] = (0, p.useState)(!1),
                [i0, i1] = (0, p.useState)(null),
                i2 = iU && iX && iq && !iO,
                i3 = (0, m.z)(!!iU && !!iX && ee.c),
                i4 = iU ? iN : void 0,
                i5 = iP ?? null != iR,
                i6 = i5 || null != i4,
                i7 = (0, m.z)(n3) ?? void 0,
                i8 = void 0 === iu || iu ? "quick-chat" : void 0,
                i9 = (0, p.useContext)(ea.b),
                ae = (0, m.z)(iS),
                at = iQ ? T.a : ae ?? T.a,
                an = (0, m.z)(iw);
            nQ[0] !== an || nQ[1] !== at.type ? (t = "ready" === at.type ? {
                ...an,
                type: an?.type ?? "idle",
                unread: !0
            } : an, nQ[0] = an, nQ[1] = at.type, nQ[2] = t) : t = nQ[2];
            let ai = t,
                aa = (0, m.z)(iW),
                al = iW === iw ? ai : aa,
                ao = (0, m.z)(iU && iV ? iC : null),
                ar = !!ao,
                as = (0, g.a)(),
                ac = (0, p.useId)(),
                au = (0, p.useId)(),
                ad = (0, p.useId)(),
                ah = (0, b.c)(),
                am = (0, G.a)(),
                ap = (0, m.z)(ed);
            nQ[3] !== ap.height || nQ[4] !== ah ? (n = (0, b.b)(ap.height, ah), nQ[3] = ap.height, nQ[4] = ah, nQ[5] = n) : n = nQ[5];
            let af = n,
                ag = (0, b.b)(ap.width, ah),
                [av, ab] = (0, p.useState)(0),
                [ax, ay] = (0, p.useState)(!1),
                [aw, az] = (0, p.useState)(0),
                [aS, aj] = (0, p.useState)(null),
                [ak, aC] = (0, p.useState)(null),
                [aM, aE] = (0, p.useState)(0),
                [aN, aR] = (0, p.useState)(null);
            nQ[6] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                e.contentRect.width > 0 && aR(e.contentRect.width)
            }, nQ[6] = w) : w = nQ[6];
            let aP = (0, _.b)(w);
            nQ[7] === Symbol.for("react.memo_cache_sentinel") ? (P = e => {
                aE((0, et.a)(e).height)
            }, nQ[7] = P) : P = nQ[7];
            let a_ = (0, _.b)(P);
            nQ[8] === Symbol.for("react.memo_cache_sentinel") ? ($ = e => {
                az((0, et.a)(e).height)
            }, nQ[8] = $) : $ = nQ[8];
            let aD = (0, _.b)($);
            nQ[9] !== aD ? (er = e => {
                aj(e), aD(e)
            }, nQ[9] = aD, nQ[10] = er) : er = nQ[10];
            let aT = (0, eo.a)(er);
            nQ[11] === Symbol.for("react.memo_cache_sentinel") ? (es = e => {
                ab((0, et.a)(e).height)
            }, nQ[11] = es) : es = nQ[11];
            let aL = (0, _.b)(es),
                [aq, aI] = (0, p.useState)(0);
            nQ[12] === Symbol.for("react.memo_cache_sentinel") ? (eh = e => {
                aI((0, et.a)(e).height)
            }, nQ[12] = eh) : eh = nQ[12];
            let aA = (0, _.b)(eh),
                aF = n1?.width ?? ag,
                aH = ag < 640;
            nQ[13] !== iq || nQ[14] !== iU ? (em = () => iq ? iU ? "bottom-right" : (0, K.a)() : "bottom-center", nQ[13] = iq, nQ[14] = iU, nQ[15] = em) : em = nQ[15];
            let [aO] = (0, p.useState)(em), aW = i7 ?? null;
            nQ[16] !== aW ? (ef = {
                threadKey: aW,
                minimized: !1
            }, nQ[16] = aW, nQ[17] = ef) : ef = nQ[17];
            let aK = (0, m.x)(iq ? Y.a : void 0, ef),
                aV = iX && iq,
                aB = i7 ?? null;
            nQ[18] !== aB ? (ey = {
                threadKey: aB,
                minimized: !0
            }, nQ[18] = aB, nQ[19] = ey) : ey = nQ[19];
            let aY = (0, m.x)(iq && !iX ? Y.a : void 0, ey);
            nQ[20] === Symbol.for("react.memo_cache_sentinel") ? (ew = {}, nQ[20] = ew) : ew = nQ[20];
            let [aX, a$] = (0, p.useState)(ew), aZ = (null != i7 || iU ? null : aX.expanded) ?? aK ?? aO, aQ = null == n6 ? aZ : aX.expanded ?? n6, aU = aH ? "bottom-center" : aQ;
            nQ[21] !== iU || nQ[22] !== i7 || nQ[23] !== aU || nQ[24] !== aV || nQ[25] !== aX || nQ[26] !== aY ? (ez = "bottom-right", aV ? ez = (0, B.a)(aU) : iU || (ez = (null == i7 ? aX.minimized : null) ?? aY ?? "bottom-right"), nQ[21] = iU, nQ[22] = i7, nQ[23] = aU, nQ[24] = aV, nQ[25] = aX, nQ[26] = aY, nQ[27] = ez) : ez = nQ[27];
            let aG = iq ? (0, B.f)(ic ? ez : aU, n7) : "bottom-center",
                aJ = aG.startsWith("top"),
                a0 = (0, m.z)(Z),
                a1 = (0, o.a)(),
                a2 = (0, p.useRef)(!1);
            nQ[28] === Symbol.for("react.memo_cache_sentinel") ? (eS = {
                x: 0,
                y: 0
            }, nQ[28] = eS) : eS = nQ[28];
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
                [la, ll] = (0, p.useState)(!1),
                lo = im ?? ln;
            nQ[29] !== i6 || nQ[30] !== im || nQ[31] !== iX || nQ[32] !== ip ? (ej = e => {
                (iX || "expanded" !== e || i6) && (null == im && li(e), ll(!1), ip?.(e))
            }, nQ[29] = i6, nQ[30] = im, nQ[31] = iX, nQ[32] = ip, nQ[33] = ej) : ej = nQ[33];
            let lr = ej,
                [ls, lc] = (0, p.useState)(null),
                [lu, ld] = (0, p.useState)(!1),
                [lh, lm] = (0, p.useState)(!1),
                [lp, lf] = (0, p.useState)(!1),
                [lg, lv] = (0, p.useState)(!1),
                lb = (0, p.useRef)(null);
            nQ[34] === Symbol.for("react.memo_cache_sentinel") ? (ek = e => {
                (null != lb.current && (cancelAnimationFrame(lb.current), lb.current = null), null != e) ? lv(!0): lb.current = requestAnimationFrame(() => {
                    lb.current = null, lv(!1)
                })
            }, nQ[34] = ek) : ek = nQ[34];
            let lx = ek;
            nQ[35] === Symbol.for("react.memo_cache_sentinel") ? (eC = () => () => {
                null != lb.current && cancelAnimationFrame(lb.current)
            }, eM = [], nQ[35] = eC, nQ[36] = eM) : (eC = nQ[35], eM = nQ[36]), (0, p.useEffect)(eC, eM);
            let [ly, lw] = (0, p.useState)(!1), [lz, lS] = (0, p.useState)(!1), [lj, lk] = (0, p.useState)(!0), [lC, lM] = (0, p.useState)(null), lE = (0, p.useRef)(!1), lN = (0, p.useRef)(0);
            nQ[37] === Symbol.for("react.memo_cache_sentinel") ? (eE = () => (lN.current = lN.current + 1, () => {
                lN.current = lN.current - 1
            }), nQ[37] = eE) : eE = nQ[37];
            let lR = (0, eo.a)(eE),
                lP = (0, p.useRef)(!1),
                [l_, lD] = (0, p.useState)(!1),
                [lT, lL] = (0, p.useState)(0),
                [lq, lI] = (0, p.useState)(0),
                [lA, lF] = (0, p.useState)(!1);
            nQ[38] !== iU || nQ[39] !== ah ? (eN = (e, t) => {
                lL(iU ? (0, et.a)(e).height : e.contentRect.height), lF(e.contentRect.width < 640);
                let n = t.querySelector(`[${q.a}]`)?.getBoundingClientRect().height ?? 0;
                lI(Math.max(0, e.contentRect.height - (0, b.b)(n, ah)))
            }, nQ[38] = iU, nQ[39] = ah, nQ[40] = eN) : eN = nQ[40];
            let lH = (0, _.b)(eN),
                [lO, lW] = (0, p.useState)(null),
                [lK, lV] = (0, p.useState)(!1),
                [lB, lY] = (0, p.useState)(i7);
            lB !== i7 && (lY(i7), a$({}), iJ(!1), i1(null), lS(!1), lM(null), lc(null), lf(!1), lV(!1), ll(!1));
            let [lX, l$] = (0, p.useState)(iZ);
            lX !== iZ && (l$(iZ), lM(null), lc(null));
            let lZ = ic || lC?.stage === "minimized",
                lQ = (0, r.a)(+!!lZ);
            nQ[41] !== lQ ? (eR = () => 1 - lQ.get(), nQ[41] = lQ, nQ[42] = eR) : eR = nQ[42];
            let lU = (0, s.a)(eR);
            nQ[43] !== lQ ? (eP = e => lQ.on("change", e), nQ[43] = lQ, nQ[44] = eP) : eP = nQ[44];
            let lG = eP;
            nQ[45] !== lQ ? (e_ = () => 1 === lQ.get(), nQ[45] = lQ, nQ[46] = e_) : e_ = nQ[46];
            let lJ = e_;
            nQ[47] !== lZ ? (eD = () => lZ, nQ[47] = lZ, nQ[48] = eD) : eD = nQ[48];
            let l0 = (0, p.useSyncExternalStore)(lG, lJ, eD);
            ls?.target !== "minimized" || lZ || lc({
                target: lo
            }), nQ[49] !== i6 || nQ[50] !== iH || nQ[51] !== iZ || nQ[52] !== lo ? (eT = (0, X.c)({
                pendingFormId: iZ,
                presentation: lo,
                forceExpanded: iH,
                hasTranscript: i6
            }), nQ[49] = i6, nQ[50] = iH, nQ[51] = iZ, nQ[52] = lo, nQ[53] = eT) : eT = nQ[53];
            let {
                isCompact: l1,
                isChatCompact: l2,
                canTogglePresentation: l3
            } = eT, l4 = iU && !iX ? !l1 : iB;
            (!iX || iO || ic || !l4) && lp && lf(!1);
            let l5 = !ic && !lZ && (iU && !iX || !l1 || lh || lg || lp || iG || ax),
                l6 = l4 && (iX ? !ic && !lZ : iU || l5),
                l7 = iU && iX && l1 && l6 && !iO && !iQ && !i3 && null != ik && al?.type === "loading",
                l8 = iV && iU && !iQ && !la && i5 && (ar || !l7 && al?.type === "loading"),
                l9 = l1 && l8,
                oe = iU && l1 && !iO && !ic && !iQ,
                ot = void 0 !== iD && iD || iU;
            nQ[54] !== iX || nQ[55] !== iO || nQ[56] !== ic || nQ[57] !== l4 ? (eL = () => {
                let e, t = a9.current;
                if (null == t || !iX || iO || ic || !l4) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, lf(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), lf(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, nQ[54] = iX, nQ[55] = iO, nQ[56] = ic, nQ[57] = l4, nQ[58] = eL) : eL = nQ[58], nQ[59] !== i7 || nQ[60] !== iX || nQ[61] !== iO || nQ[62] !== ic || nQ[63] !== l4 ? (eq = [i7, iX, iO, ic, l4], nQ[59] = i7, nQ[60] = iX, nQ[61] = iO, nQ[62] = ic, nQ[63] = l4, nQ[64] = eq) : eq = nQ[64], (0, p.useEffect)(eL, eq);
            let on = !iO && !l1 && !ic && !iH && !iG && !l_;
            nQ[65] !== ad || nQ[66] !== lr || nQ[67] !== lc ? (eI = e => {
                null == a9.current || null != e && eb(a9.current, e.target, ad) || (lc(null), lr("compact"))
            }, nQ[65] = ad, nQ[66] = lr, nQ[67] = lc, nQ[68] = eI) : eI = nQ[68];
            let oi = (0, p.useEffectEvent)(eI);
            nQ[69] !== oi || nQ[70] !== ad ? (eA = () => {
                let e = a9.current,
                    t = document.activeElement;
                null != e && t instanceof HTMLIFrameElement && !eb(e, t, ad) && oi()
            }, nQ[69] = oi, nQ[70] = ad, nQ[71] = eA) : eA = nQ[71];
            let oa = (0, p.useEffectEvent)(eA);
            nQ[72] !== iU || nQ[73] !== oa || nQ[74] !== oi || nQ[75] !== on ? (eF = () => {
                if (!on) return;
                document.addEventListener("pointerdown", oi, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && oa()
                        })
                    };
                window.addEventListener("blur", t);
                let n = iU ? J.c.subscribe("browser-sidebar-web-contents-pointer-down", () => oi()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", oi, !0)
                }
            }, nQ[72] = iU, nQ[73] = oa, nQ[74] = oi, nQ[75] = on, nQ[76] = eF) : eF = nQ[76], nQ[77] !== iU || nQ[78] !== on ? (eH = [iU, on], nQ[77] = iU, nQ[78] = on, nQ[79] = eH) : eH = nQ[79], (0, p.useEffect)(eF, eH);
            let ol = ai?.type === "loading";
            nQ[80] !== ih || nQ[81] !== ld || nQ[82] !== lr || nQ[83] !== lc ? (eO = () => {
                a9.current?.focus({
                    preventScroll: !0
                }), ld(!1), lc(null), ih(!1), lr("expanded")
            }, nQ[80] = ih, nQ[81] = ld, nQ[82] = lr, nQ[83] = lc, nQ[84] = eO) : eO = nQ[84];
            let oo = (0, eo.a)(eO),
                [or, os] = (0, p.useState)(ep);
            nQ[85] === Symbol.for("react.memo_cache_sentinel") ? (eW = e => {
                os(t => new Set([...t, e]))
            }, nQ[85] = eW) : eW = nQ[85];
            let oc = (0, eo.a)(eW);
            nQ[86] !== iU || nQ[87] !== oc || nQ[88] !== oo || nQ[89] !== at ? (eK = "ready" !== at.type ? at : {
                type: "ready",
                value: at.value.map(e => ({
                    id: e.id,
                    content: (0, i.jsx)(R, {
                        title: e.title,
                        preview: e.preview,
                        onOpen: () => {
                            e.onOpen(), oo()
                        },
                        onDismiss: iU ? () => oc(e.id) : e.onDismiss
                    })
                }))
            }, nQ[86] = iU, nQ[87] = oc, nQ[88] = oo, nQ[89] = at, nQ[90] = eK) : eK = nQ[90];
            let ou = eK,
                [od, oh] = (0, p.useState)(ol);
            if (od !== ol && (oh(ol), lV(!1), ll(!1)), nQ[91] !== iO || nQ[92] !== ic || nQ[93] !== ol || nQ[94] !== iK || nQ[95] !== l9 ? (eV = () => {
                    if (!l9 || iK || iO || ic || ol) return;
                    let e = window.setTimeout(() => ll(!0), 1e4);
                    return () => window.clearTimeout(e)
                }, nQ[91] = iO, nQ[92] = ic, nQ[93] = ol, nQ[94] = iK, nQ[95] = l9, nQ[96] = eV) : eV = nQ[96], nQ[97] !== i7 || nQ[98] !== iO || nQ[99] !== ic || nQ[100] !== ol || nQ[101] !== iK || nQ[102] !== l9 ? (eB = [i7, l9, iK, iO, ic, ol], nQ[97] = i7, nQ[98] = iO, nQ[99] = ic, nQ[100] = ol, nQ[101] = iK, nQ[102] = l9, nQ[103] = eB) : eB = nQ[103], (0, p.useEffect)(eV, eB), nQ[104] !== ou || nQ[105] !== iU || nQ[106] !== or || nQ[107] !== oo || nQ[108] !== ol || nQ[109] !== ig || nQ[110] !== ij || nQ[111] !== lK) {
                if (eY = ou, iU && ol && !lK) {
                    let e, t;
                    nQ[113] === Symbol.for("react.memo_cache_sentinel") ? (e = () => lV(!0), nQ[113] = e) : e = nQ[113], nQ[114] !== oo || nQ[115] !== ig || nQ[116] !== ij ? (t = [{
                        id: "working",
                        content: (0, i.jsx)(R, {
                            title: ig,
                            preview: "",
                            isWorking: !0,
                            workingContent: ij,
                            onOpen: oo,
                            onDismiss: e
                        })
                    }], nQ[114] = oo, nQ[115] = ig, nQ[116] = ij, nQ[117] = t) : t = nQ[117], eY = {
                        type: "ready",
                        value: t
                    }
                } else if (iU && "ready" === ou.type) {
                    let e;
                    if (nQ[118] !== ou.value || nQ[119] !== or) {
                        let t;
                        nQ[121] !== or ? (t = e => !or.has(e.id), nQ[121] = or, nQ[122] = t) : t = nQ[122], e = ou.value.filter(t), nQ[118] = ou.value, nQ[119] = or, nQ[120] = e
                    } else e = nQ[120];
                    eY = {
                        ...ou,
                        value: e
                    }
                }
                nQ[104] = ou, nQ[105] = iU, nQ[106] = or, nQ[107] = oo, nQ[108] = ol, nQ[109] = ig, nQ[110] = ij, nQ[111] = lK, nQ[112] = eY
            } else eY = nQ[112];
            "ready" !== eY.type && lu && ld(!1);
            let om = "ready" === eY.type && eY.value.length > 0 && (lZ ? ic && (iU ? l0 : lu) && !iG : !iU && l1),
                op = al?.type !== "loading" && (al?.unread !== !0 || om) ? null : al,
                of = ol || ai?.unread === !0 && (ic || !om);
            nQ[123] !== eY.type || nQ[124] !== eY.value || nQ[125] !== iU || nQ[126] !== oc || nQ[127] !== ol || nQ[128] !== ld ? (eX = e => {
                if ("Escape" === e.key && !e.defaultPrevented)
                    if (e.preventDefault(), lt.current?.contains(document.activeElement) && le.current?.focus({
                            preventScroll: !0
                        }), iU) {
                        if (ol) lV(!0);
                        else if ("ready" === eY.type)
                            for (let e of eY.value) oc(e.id)
                    } else ld(!1)
            }, nQ[123] = eY.type, nQ[124] = eY.value, nQ[125] = iU, nQ[126] = oc, nQ[127] = ol, nQ[128] = ld, nQ[129] = eX) : eX = nQ[129];
            let og = (0, p.useEffectEvent)(eX);
            nQ[130] !== og || nQ[131] !== om || nQ[132] !== iO || nQ[133] !== ic ? (e$ = () => {
                if (!iO && ic && om) return document.addEventListener("keydown", og), () => document.removeEventListener("keydown", og)
            }, nQ[130] = og, nQ[131] = om, nQ[132] = iO, nQ[133] = ic, nQ[134] = e$) : e$ = nQ[134], nQ[135] !== om || nQ[136] !== iO || nQ[137] !== ic ? (eZ = [om, iO, ic], nQ[135] = om, nQ[136] = iO, nQ[137] = ic, nQ[138] = eZ) : eZ = nQ[138], (0, p.useEffect)(e$, eZ);
            let ov = l4 && l6 && !ic && !l7 && null == ie,
                ob = iU && iX && ov && al?.unread === !0;
            nQ[139] !== as ? (eQ = as.formatMessage({
                id: "quickChat.running",
                defaultMessage: "Running"
            }), nQ[139] = as, nQ[140] = eQ) : eQ = nQ[140];
            let ox = eQ;
            nQ[141] !== as ? (eU = as.formatMessage({
                id: "quickChat.unreadResponse",
                defaultMessage: "Unread response"
            }), nQ[141] = as, nQ[142] = eU) : eU = nQ[142];
            let oy = eU,
                ow = ol ? ox : oy,
                oz = aG.endsWith("left"),
                oS = "bottom-center" === aG,
                oj = oz ? "left" : "right",
                ok = aJ && !lZ ? aw : 0,
                oC = 46 * (null == n1) + (aJ || lZ ? 0 : aw),
                oM = lO ?? a0 ?? z,
                oE = om && !ic ? aq : 0,
                oN = (n1?.height ?? af) - av - (aJ ? oE + ok : 0),
                oR = Math.max(0, oN - 32 - oC - (aJ ? 0 : oE)),
                oP = null == n1 ? aF / 2 : Math.max(0, aF - 20),
                o_ = iU && null != aN ? Math.min(oP, aN + 12) : oP,
                oD = (lT || 46) + (l4 && l6 ? 46 : 0) + (l9 ? aM : 0) + 6 * !iU,
                oT = iX && l4 && l6,
                oL = (lT || 46) + 46 * !!oT + (l8 ? aM : 0) + 6 * !iU,
                oq = ex(oM.height, Math.min(Math.max(400, lT + 46), oR), oR),
                oI = Math.min(l1 ? oD : Math.max(400, oD), oR),
                oA = aH ? o_ : Math.min((void 0 === n2 ? 360 : n2) + 12, o_),
                oF = ex(l1 ? oD : oM.height, oI, oR),
                oH = (0, r.a)(oF),
                oO = (0, p.useRef)(!1),
                oW = lT > 0,
                oK = iO || am || l_ || !iU && (ic || null != ls) ? 0 : .3,
                oV = ex(oM.width + 12, oA, o_),
                oB = (0, B.d)(aG, {
                    height: oF,
                    width: oV
                }, oN, aF, 12, oC);
            nQ[143] !== oH || nQ[144] !== oL || nQ[145] !== oq || nQ[146] !== l1 || nQ[147] !== iX ? (eG = () => iX && l1 ? 0 : ex((oH.get() - oL) / Math.max(1, oq - oL), 0, 1), nQ[143] = oH, nQ[144] = oL, nQ[145] = oq, nQ[146] = l1, nQ[147] = iX, nQ[148] = eG) : eG = nQ[148];
            let oY = (0, s.a)(eG);
            nQ[149] !== oH || nQ[150] !== lT || nQ[151] !== oY || nQ[152] !== oT ? (eJ = () => Math.max(0, oH.get() - lT - 46 * (oT ? 1 : oY.get())), nQ[149] = oH, nQ[150] = lT, nQ[151] = oY, nQ[152] = oT, nQ[153] = eJ) : eJ = nQ[153];
            let oX = (0, s.a)(eJ);
            nQ[154] !== oY ? (e0 = () => 1 - oY.get(), nQ[154] = oY, nQ[155] = e0) : e0 = nQ[155];
            let o$ = (0, s.a)(e0);
            nQ[156] !== oH || nQ[157] !== lT || nQ[158] !== iU || nQ[159] !== oF || nQ[160] !== oW || nQ[161] !== l1 || nQ[162] !== lg || nQ[163] !== oK ? (e1 = () => {
                let e, t = !oO.current && l1;
                if (oW && (oO.current = !0), lg || t || 0 === oK) return void oH.jump(oF);
                let n = () => {
                    if (iU) {
                        let e = a8.current;
                        if (null != e && e.offsetHeight !== Math.round(lT)) return void lL(e.offsetHeight)
                    }
                    let t = (0, c.a)(oH, oF, {
                        duration: oK,
                        ease: j.e
                    });
                    e = () => t.stop()
                };
                return iU ? u.b.update(n) : n(), () => {
                    (0, u.a)(n), e?.()
                }
            }, nQ[156] = oH, nQ[157] = lT, nQ[158] = iU, nQ[159] = oF, nQ[160] = oW, nQ[161] = l1, nQ[162] = lg, nQ[163] = oK, nQ[164] = e1) : e1 = nQ[164];
            let oZ = (0, p.useEffectEvent)(e1),
                oQ = iU ? lT : null,
                oU = iU ? null : oW,
                oG = iU ? null : l1;
            nQ[165] !== oZ ? (e2 = () => oZ(), nQ[165] = oZ, nQ[166] = e2) : e2 = nQ[166], nQ[167] !== oF || nQ[168] !== oU || nQ[169] !== oG || nQ[170] !== oQ || nQ[171] !== oK ? (e3 = [oF, oK, oQ, oU, oG], nQ[167] = oF, nQ[168] = oU, nQ[169] = oG, nQ[170] = oQ, nQ[171] = oK, nQ[172] = e3) : e3 = nQ[172], (0, p.useLayoutEffect)(e2, e3);
            let oJ = iU ? oY : void 0;
            nQ[173] !== oJ ? (e4 = {
                "--quick-chat-expansion": oJ
            }, nQ[173] = oJ, nQ[174] = e4) : e4 = nQ[174];
            let o0 = e4,
                o1 = {
                    height: Math.min(36, oR),
                    width: Math.min(36, o_)
                },
                o2 = {
                    bubbleSize: o1,
                    composerWidth: oV,
                    composerHorizontalInset: 12,
                    reservedDockPosition: n7,
                    viewportWidth: aF,
                    viewportHeight: oN
                },
                o3 = (0, B.f)(ic ? aG : lC?.dockPosition ?? ez, n7),
                o4 = (0, B.d)(o3, o1, oN, aF, 0, oC),
                o5 = ic ? o1 : {
                    height: oF,
                    width: oV
                },
                o6 = ic ? o4 : oB,
                o7 = ic ? 16 : 10,
                o8 = Math.max(o7, aF - o5.width - o7),
                o9 = oC + o7,
                re = Math.max(o7, oN - o5.height - o7);
            nQ[175] !== o7 || nQ[176] !== o8 || nQ[177] !== o9 || nQ[178] !== re ? (e5 = {
                left: o7,
                right: o8,
                top: o9,
                bottom: re
            }, nQ[175] = o7, nQ[176] = o8, nQ[177] = o9, nQ[178] = re, nQ[179] = e5) : e5 = nQ[179];
            let rt = e5;
            nQ[180] === Symbol.for("react.memo_cache_sentinel") ? (e6 = () => {
                a5.current = null
            }, nQ[180] = e6) : e6 = nQ[180], nQ[181] !== n1 || nQ[182] !== ah ? (e7 = [n1, ah], nQ[181] = n1, nQ[182] = ah, nQ[183] = e7) : e7 = nQ[183], (0, p.useLayoutEffect)(e6, e7);
            let rn = e => {
                    if (!iq) return;
                    a5.current = null == n1 ? null : a9.current?.parentElement?.getBoundingClientRect() ?? null;
                    let t = {
                        x: (0, b.b)(e.clientX - (a5.current?.left ?? 0), ah),
                        y: (0, b.b)(e.clientY - (a5.current?.top ?? 0), ah)
                    };
                    a3.current = {
                        x: t.x - o6.x - a6.get(),
                        y: t.y - o6.y - a7.get()
                    }, a4.current = {
                        point: t,
                        target: null
                    }, a1.start(e)
                },
                ri = (0, B.d)(o3, {
                    height: oF,
                    width: oV
                }, oN, aF, 12, oC),
                ra = o4.x - ri.x,
                rl = o4.y - ri.y,
                ro = oV - ra - o1.width,
                rr = oF - rl - o1.height;
            nQ[184] !== ra || nQ[185] !== rl || nQ[186] !== ro || nQ[187] !== rr ? (e8 = {
                top: rl,
                right: ro,
                bottom: rr,
                left: ra
            }, nQ[184] = ra, nQ[185] = rl, nQ[186] = ro, nQ[187] = rr, nQ[188] = e8) : e8 = nQ[188];
            let rs = e8,
                rc = `inset(${rs.top}px ${rs.right}px ${rs.bottom}px ${rs.left}px round var(--floating-panel-radius))`,
                ru = (0, s.a)(() => {
                    let e = lQ.get(),
                        t = oH.get() - oF,
                        n = e * (rs.top + (aJ ? 0 : t)),
                        i = 6 + e * (rs.right - 6),
                        a = 6 + e * (rs.bottom + (aJ ? t : 0) - 6),
                        l = 6 + e * (rs.left - 6),
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
            nQ[189] !== ru ? (e9 = () => ru.get().top, nQ[189] = ru, nQ[190] = e9) : e9 = nQ[190];
            let rd = (0, s.a)(e9);
            nQ[191] !== ru ? (te = () => ru.get().right, nQ[191] = ru, nQ[192] = te) : te = nQ[192];
            let rh = (0, s.a)(te);
            nQ[193] !== ru ? (tt = () => ru.get().bottom, nQ[193] = ru, nQ[194] = tt) : tt = nQ[194];
            let rm = (0, s.a)(tt);
            nQ[195] !== ru ? (tn = () => ru.get().left, nQ[195] = ru, nQ[196] = tn) : tn = nQ[196];
            let rp = (0, s.a)(tn);
            nQ[197] !== ru ? (ti = () => ru.get().radius, nQ[197] = ru, nQ[198] = ti) : ti = nQ[198];
            let rf = (0, s.a)(ti);
            nQ[199] !== ru ? (ta = () => ru.get().clip, nQ[199] = ru, nQ[200] = ta) : ta = nQ[200];
            let rg = (0, s.a)(ta);
            nQ[201] !== iU || nQ[202] !== lZ || nQ[203] !== lQ || nQ[204] !== am ? (tl = () => {
                if (!iU) return;
                let e = (0, c.a)(lQ, +!!lZ, {
                    duration: .3 * !am,
                    ease: j.e
                });
                return () => e.stop()
            }, to = [iU, lZ, lQ, am], nQ[201] = iU, nQ[202] = lZ, nQ[203] = lQ, nQ[204] = am, nQ[205] = tl, nQ[206] = to) : (tl = nQ[205], to = nQ[206]), (0, p.useLayoutEffect)(tl, to);
            let rv = aJ ? {
                    top: rl + o1.height
                } : {
                    bottom: oF - rl
                },
                rb = (0, p.useRef)({
                    dockPosition: aG,
                    dockThreadKey: i7,
                    isMinimized: ic
                }),
                rx = (0, p.useEffectEvent)(e => {
                    let t = (0, B.d)(e, {
                        height: oF,
                        width: oV
                    }, oN, aF, 12, oC);
                    a6.stop(), a7.stop(), a6.jump(a6.get() + t.x - oB.x), a7.jump(a7.get() + t.y - oB.y);
                    let n = am ? {
                        duration: 0
                    } : eu;
                    (0, c.a)(a6, 0, n), (0, c.a)(a7, 0, n)
                });
            (0, p.useLayoutEffect)(() => {
                let e = rb.current;
                if (rb.current = {
                        dockPosition: aG,
                        dockThreadKey: i7,
                        isMinimized: ic
                    }, e.dockThreadKey !== i7) {
                    a2.current = !0, lE.current = !0, a1.cancel(), a6.jump(0), a7.jump(0);
                    return
                }
                if (iO) {
                    a6.jump(0), a7.jump(0);
                    return
                }
                e.isMinimized !== ic && rx(e.dockPosition)
            }, [aG, i7, a1, a6, a7, iO, ic]), nQ[207] !== a6 || nQ[208] !== a7 ? (tr = () => () => {
                a6.stop(), a7.stop()
            }, ts = [a6, a7], nQ[207] = a6, nQ[208] = a7, nQ[209] = tr, nQ[210] = ts) : (tr = nQ[209], ts = nQ[210]), (0, p.useLayoutEffect)(tr, ts);
            let ry = e => {
                let t, n = {
                    ...o5,
                    left: o6.x + a6.get(),
                    top: o6.y + a7.get()
                };
                null != n1 && null == a5.current && (a5.current = a9.current?.parentElement?.getBoundingClientRect() ?? null);
                let i = null == n1 ? null : a5.current,
                    a = {
                        x: e.point.x - (0, b.b)(i?.left ?? 0, ah),
                        y: e.point.y - (0, b.b)(i?.top ?? 0, ah)
                    },
                    l = i2 && !ic ? (function(e) {
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
                    })(o2).find(e => {
                        let {
                            rect: t
                        } = e;
                        return a.x >= t.left && a.x <= t.left + t.width && a.y >= t.top && a.y <= t.top + t.height
                    })?.position : void 0;
                t = iU ? l ?? (0, B.b)(n, oN, aF, ev(n7, ic, aV), 12 * !ic, oC) : (0, B.e)({
                    ...n,
                    left: n.width >= aF / 2 - 2 * o7 ? a.x - n.width / 2 : n.left
                }, oN, aF, ic);
                let o = null == n7 ? t : (0, B.f)(t, n7),
                    r = {
                        x: !iU || i2 ? Math.min(a.x, aF - a.x) : aF - a.x,
                        y: iU ? oN - a.y : Math.min(a.y - oC, oN - a.y)
                    },
                    s = (!i2 || r.x >= 0 && r.y >= 0) && r.x <= 16 + o1.width && r.y <= 16 + o1.height;
                if (iU && !ic) {
                    let e = a.x < aF / 2 ? "bottom-left" : "bottom-right",
                        n = i2 && s && e !== n7 ? e : void 0,
                        i = a4.current;
                    if (null != i) {
                        let e = a.x - i.point.x,
                            t = a.y - i.point.y;
                        Math.hypot(e, t) >= 8 && (e >= 0 && t > 0 && t >= e ? i.target = "minimize" : e > 0 && e > 2 * Math.abs(t) ? i.target = null : (e < 0 || t < 0) && (i.target = null), i.point = a)
                    }
                    let r = a.y - a3.current.y + o5.height - oN;
                    return {
                        dockPosition: o,
                        requestedDockPosition: t,
                        isNearDock: !1,
                        shouldMinimize: null != n || null == l && "bottom-right" === o && i?.target === "minimize" && r >= .5 * o5.width,
                        bubbleDropPosition: n
                    }
                }
                let c = (0, B.d)(o, o5, oN, aF, 12, oC),
                    u = !ic && "bottom-center" !== o && 16 >= Math.abs(n.left - c.x) && 16 >= Math.abs(n.top - c.y);
                return {
                    dockPosition: o,
                    requestedDockPosition: t,
                    isNearDock: u,
                    shouldMinimize: u && s
                }
            };
            nQ[211] !== iq || nQ[212] !== n6 || nQ[213] !== iU || nQ[214] !== i7 || nQ[215] !== io || nQ[216] !== aV || nQ[217] !== iY ? (tc = (e, t) => {
                if (!iq) return;
                let n = t && !aV;
                (null == n6 || n) && (null != i7 || iU && !n) ? (0, Y.c)(iY, {
                    threadKey: i7 ?? null,
                    minimized: n
                }, e, io) : a$(t => ({
                    expanded: n ? t.expanded : e,
                    minimized: n ? (0, B.a)(e) : t.minimized
                }))
            }, nQ[211] = iq, nQ[212] = n6, nQ[213] = iU, nQ[214] = i7, nQ[215] = io, nQ[216] = aV, nQ[217] = iY, nQ[218] = tc) : tc = nQ[218];
            let rw = tc,
                rz = (e, t, n) => {
                    let i = void 0 === n ? o5 : n,
                        a = (0, B.d)(aG, o5, oN, aF, 12 * !ic, oC),
                        l = {
                            x: a.x + a6.get(),
                            y: a.y + a7.get()
                        },
                        o = (0, B.d)((0, B.f)(e, n7), i, oN, aF, 12 * !ic, oC);
                    a6.stop(), a7.stop(), a6.jump(l.x - o.x), a7.jump(l.y - o.y), t && (0, f.flushSync)(() => {
                        rw(e, ic)
                    });
                    let r = iU ? {
                            duration: .3,
                            ease: j.e
                        } : eu,
                        s = am ? {
                            duration: 0
                        } : r;
                    lS(!0), Promise.all([(0, c.a)(a6, 0, s), (0, c.a)(a7, 0, s)]).then(() => {
                        lS(0 !== a6.get() || 0 !== a7.get())
                    })
                },
                rS = (0, p.useEffectEvent)(() => {
                    a2.current = !0, a1.cancel(), rz(aG, !1), lM(null), lc(null), iJ(!1), i1(null)
                });
            nQ[219] !== rS || nQ[220] !== a1 || nQ[221] !== iG ? (tu = () => {
                if (!iG) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), rS())
                    },
                    t = () => rS();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    a2.current = !0, a1.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, nQ[219] = rS, nQ[220] = a1, nQ[221] = iG, nQ[222] = tu) : tu = nQ[222], nQ[223] !== a1 || nQ[224] !== iG ? (td = [a1, iG], nQ[223] = a1, nQ[224] = iG, nQ[225] = td) : td = nQ[225], (0, p.useLayoutEffect)(tu, td);
            let rj = (e, t) => {
                    let n = iU && oS ? 0 : (0, B.c)(aG, e, {
                            height: oF,
                            width: oV
                        }, a6.get(), t.width, oN, aF, 12),
                        i = oB.y + a7.get(),
                        a = (0, B.d)(aG, t, oN, aF, 12, oC),
                        l = ex(i + (aJ ? 0 : oF - t.height), oC + 10, oN - t.height - 10);
                    a6.stop(), a7.stop(), (0, f.flushSync)(() => {
                        lW({
                            height: l1 ? oM.height : t.height,
                            width: t.width - 12
                        })
                    }), a6.jump(n), a7.jump(l - a.y)
                },
                rk = e => {
                    Q(iY, {
                        height: l1 ? oM.height : e.height,
                        width: e.width - 12
                    }, {
                        dockPosition: aG,
                        hasConversation: io
                    }), rz(aG, !1, e)
                };
            nQ[226] !== iU || nQ[227] !== iG || nQ[228] !== ih || nQ[229] !== ld || nQ[230] !== lM || nQ[231] !== lc ? (th = () => {
                ld(!1), lk(!iG), lM(null), lc(iU ? null : {
                    target: "minimized"
                }), ih(!0)
            }, nQ[226] = iU, nQ[227] = iG, nQ[228] = ih, nQ[229] = ld, nQ[230] = lM, nQ[231] = lc, nQ[232] = th) : th = nQ[232];
            let rC = th;
            if (nQ[233] !== n6 || nQ[234] !== iU || nQ[235] !== iH || nQ[236] !== iQ || nQ[237] !== l1 || nQ[238] !== iO || nQ[239] !== ic || nQ[240] !== id || nQ[241] !== ih || nQ[242] !== lo || nQ[243] !== iI || nQ[244] !== ld || nQ[245] !== lr || nQ[246] !== lc) {
                let e, t, n, i;
                tb = () => {
                    (0, f.flushSync)(() => {
                        ld(!1), lc(iU ? null : {
                            target: lo
                        }), ih(!1)
                    }), tf()
                }, nQ[254] !== l1 || nQ[255] !== lr || nQ[256] !== lc ? (e = () => {
                    lc(null), lr(l1 ? "expanded" : "compact")
                }, nQ[254] = l1, nQ[255] = lr, nQ[256] = lc, nQ[257] = e) : e = nQ[257], tx = e;
                let a = !iO && !ic;
                tm = a && (null != id || !iI && !l1 && !iH), nQ[258] !== id || nQ[259] !== lr || nQ[260] !== lc ? (t = () => {
                    null != id ? id() : (lc(null), lr("compact"))
                }, nQ[258] = id, nQ[259] = lr, nQ[260] = lc, nQ[261] = t) : t = nQ[261], tp = t, nQ[262] !== tm || nQ[263] !== a || nQ[264] !== tp || nQ[265] !== iI ? (n = e => {
                    if (!a || "Escape" !== e.key || e.defaultPrevented || e.nativeEvent.isComposing) return;
                    let t = tm && !e.repeat;
                    !t && (!iI || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) || (e.preventDefault(), e.stopPropagation(), t && tp())
                }, nQ[262] = tm, nQ[263] = a, nQ[264] = tp, nQ[265] = iI, nQ[266] = n) : n = nQ[266], tv = n, nQ[267] !== iQ ? (i = () => {
                    let e = a8.current;
                    return iQ ? (0, F.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                }, nQ[267] = iQ, nQ[268] = i) : i = nQ[268], tg = i, tf = () => {
                    iU && null == n6 && (lc(null), lr("expanded")), tg()?.focus({
                        preventScroll: !0
                    })
                }, nQ[233] = n6, nQ[234] = iU, nQ[235] = iH, nQ[236] = iQ, nQ[237] = l1, nQ[238] = iO, nQ[239] = ic, nQ[240] = id, nQ[241] = ih, nQ[242] = lo, nQ[243] = iI, nQ[244] = ld, nQ[245] = lr, nQ[246] = lc, nQ[247] = tm, nQ[248] = tp, nQ[249] = tf, nQ[250] = tg, nQ[251] = tv, nQ[252] = tb, nQ[253] = tx
            } else tm = nQ[247], tp = nQ[248], tf = nQ[249], tg = nQ[250], tv = nQ[251], tb = nQ[252], tx = nQ[253];
            let rM = !iO && iQ;
            nQ[269] !== tg || nQ[270] !== iQ || nQ[271] !== ic ? (ty = () => {
                if (null == a9.current || null != a9.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                if (iQ) return ic;
                let e = tg();
                if (null == e) return !1;
                let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                return null == t || !a8.current?.contains(t) || t === a8.current
            }, nQ[269] = tg, nQ[270] = iQ, nQ[271] = ic, nQ[272] = ty) : ty = nQ[272], nQ[273] !== rM || nQ[274] !== ty ? (tw = {
                enabled: rM,
                isActive: ty
            }, nQ[273] = rM, nQ[274] = ty, nQ[275] = tw) : tw = nQ[275], (0, L.a)("focusMainChat", ic ? tb : tf, tw), nQ[276] !== as || nQ[277] !== l1 ? (tz = as.formatMessage(l1 ? {
                id: "quickChat.expandFloatingChat",
                defaultMessage: "Expand floating chat"
            } : {
                id: "quickChat.showCompactFloatingChat",
                defaultMessage: "Show compact floating chat"
            }), nQ[276] = as, nQ[277] = l1, nQ[278] = tz) : tz = nQ[278];
            let rE = tz;
            nQ[279] !== l3 || nQ[280] !== rE || nQ[281] !== tx ? (tS = l3 ? {
                label: rE,
                onToggle: tx
            } : void 0, nQ[279] = l3, nQ[280] = rE, nQ[281] = tx, nQ[282] = tS) : tS = nQ[282];
            let rN = tS;
            nQ[283] !== as ? (tj = as.formatMessage({
                id: "quickChat.resizeWidth",
                defaultMessage: "Resize chat width"
            }), nQ[283] = as, nQ[284] = tj) : tj = nQ[284];
            let rR = tj;
            nQ[285] !== as ? (tk = as.formatMessage({
                id: "quickChat.resizeHeight",
                defaultMessage: "Resize chat height"
            }), nQ[285] = as, nQ[286] = tk) : tk = nQ[286];
            let rP = tk;
            nQ[287] !== iX || nQ[288] !== lr || nQ[289] !== lc ? (tC = () => {
                lc(null), iX && lr("expanded")
            }, nQ[287] = iX, nQ[288] = lr, nQ[289] = lc, nQ[290] = tC) : tC = nQ[290];
            let r_ = (0, eo.a)(tC);
            nQ[291] !== iU || nQ[292] !== r_ || nQ[293] !== iX || nQ[294] !== lc ? (tM = iU || iX ? r_ : () => lc(null), nQ[291] = iU, nQ[292] = r_, nQ[293] = iX, nQ[294] = lc, nQ[295] = tM) : tM = nQ[295];
            let rD = {
                    isCompact: l1,
                    canShowCompactPreview: oe,
                    isNarrow: lA,
                    isChromeRevealed: l5,
                    isHeaderVisible: l6,
                    isComposerFocused: iU ? ly || lg : l5,
                    isDockedTop: aJ,
                    isHidden: iO,
                    isMinimized: lZ,
                    shouldReduceMotion: am,
                    onSubmitStart: tM
                },
                rT = {
                    isMoving: iG || l_ || lz,
                    composerContentHeight: lq,
                    dockedReservePx: lT > lq + 6 * !!iU ? oF + 10 : 0
                };
            nQ[296] !== iO || nQ[297] !== ia ? (tE = function(e) {
                !iO && null != ia && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (a9.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }, nQ[296] = iO, nQ[297] = ia, nQ[298] = tE) : tE = nQ[298];
            let rL = tE;
            nQ[299] !== iX ? (tN = function(e) {
                !iX && e.target instanceof Element && (!a9.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }, nQ[299] = iX, nQ[300] = tN) : tN = nQ[300];
            let rq = tN,
                rI = n0(rD, rT),
                rA = iI ? "editor-only" : null;
            nQ[301] !== lH ? (tR = e => {
                a8.current = e, lH(e)
            }, nQ[301] = lH, nQ[302] = tR) : tR = nQ[302], nQ[303] !== tf ? (tP = e => {
                e.target === e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && !lE.current && tf()
            }, nQ[303] = tf, nQ[304] = tP) : tP = nQ[304], nQ[305] !== ot || nQ[306] !== l1 || nQ[307] !== ic || nQ[308] !== l9 ? (t_ = ot && !ic && (!l1 || l9) ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: "border-t border-default"
            }) : null, nQ[305] = ot, nQ[306] = l1, nQ[307] = ic, nQ[308] = l9, nQ[309] = t_) : t_ = nQ[309], nQ[310] !== aS ? (tD = {
                target: aS,
                homeBannerPlacement: "inline"
            }, nQ[310] = aS, nQ[311] = tD) : tD = nQ[311];
            let rF = (0, i.jsxs)("div", {
                ref: tR,
                className: (0, l.b)(C.a.floatingComposerInset, "mt-auto shrink-0", iq && !aH && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", l1 && aJ && "[--composer-overlay-placement:bottom]"),
                onPointerDownCapture: rL,
                onPointerUp: tP,
                onContextMenu: rq,
                children: [t_, (0, i.jsx)(ea.b, {
                    value: {
                        ...i9,
                        hasComposerSurface: ot,
                        isFloatingChatSurface: !0,
                        isFloatingTranscriptOpen: !iO && !l1 && !ic,
                        floatingChatSurfaceRef: a9,
                        onFloatingDictationRowChange: lx,
                        floatingComposerPresentation: rD,
                        transcriptTarget: ak,
                        followLatestTranscript: iU ? l1 : i9.followLatestTranscript
                    },
                    children: (0, i.jsx)(A.a, {
                        value: tm ? tp : rA,
                        children: (0, i.jsx)(I.a, {
                            value: tD,
                            children: rI
                        })
                    })
                })]
            });
            nQ[312] !== l1 || nQ[313] !== rC ? (tT = (0, i.jsx)(V.c, {
                isCompact: l1,
                onMinimize: rC
            }), nQ[312] = l1, nQ[313] = rC, nQ[314] = tT) : tT = nQ[314];
            let rH = tT,
                rO = iU || null != i$ ? null : rH;
            if (l7) {
                let e, t, n;
                nQ[315] !== tg || nQ[316] !== tx ? (e = () => {
                    tx(), tg()?.focus({
                        preventScroll: !0
                    })
                }, nQ[315] = tg, nQ[316] = tx, nQ[317] = e) : e = nQ[317], nQ[318] !== ik || nQ[319] !== ac ? (t = (0, i.jsx)("span", {
                    id: ac,
                    className: "min-w-0 truncate",
                    children: ik
                }), nQ[318] = ik, nQ[319] = ac, nQ[320] = t) : t = nQ[320], nQ[321] !== rE || nQ[322] !== e || nQ[323] !== t || nQ[324] !== ac ? (n = (0, i.jsx)(E.a, {
                    unstyled: !0,
                    focusRing: "inset",
                    className: "min-w-0 flex-1 px-2 text-start text-sm text-secondary",
                    "aria-label": rE,
                    "aria-describedby": ac,
                    "data-quick-chat-drag-handle": !0,
                    onClick: e,
                    children: t
                }), nQ[321] = rE, nQ[322] = e, nQ[323] = t, nQ[324] = ac, nQ[325] = n) : n = nQ[325], tL = n
            } else if (null != ie) {
                let e;
                nQ[326] !== rO || nQ[327] !== ie ? (e = ie({
                    leadingControl: rO
                }), nQ[326] = rO, nQ[327] = ie, nQ[328] = e) : e = nQ[328], tL = e
            } else {
                let e, t, n, a, o, r;
                nQ[329] !== ob || nQ[330] !== oy ? (e = ob && (0, i.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    "aria-label": oy
                }), nQ[329] = ob, nQ[330] = oy, nQ[331] = e) : e = nQ[331];
                let s = ob || void 0,
                    c = (!iU || null == iv) && "truncate";
                nQ[332] !== c ? (t = (0, l.b)("group/floating-title min-w-0 text-base font-medium text-secondary", c), nQ[332] = c, nQ[333] = t) : t = nQ[333], nQ[334] !== iU || nQ[335] !== iB || nQ[336] !== ig || nQ[337] !== iv ? (n = iv ?? (iU ? (0, i.jsx)(V.b, {
                    children: (0, i.jsx)(U.a, {
                        children: iB ? ig : (0, i.jsx)(v.a, {
                            id: "quickChat.newChatTitle",
                            defaultMessage: "New chat"
                        })
                    })
                }) : ig), nQ[334] = iU, nQ[335] = iB, nQ[336] = ig, nQ[337] = iv, nQ[338] = n) : n = nQ[338], nQ[339] !== s || nQ[340] !== t || nQ[341] !== n || nQ[342] !== ac ? (a = (0, i.jsx)("h2", {
                    id: ac,
                    "data-unread": s,
                    "data-dropdown-overlay-side": "auto",
                    className: t,
                    children: n
                }), nQ[339] = s, nQ[340] = t, nQ[341] = n, nQ[342] = ac, nQ[343] = a) : a = nQ[343], nQ[344] !== iU || nQ[345] !== op || nQ[346] !== ox || nQ[347] !== oy ? (o = !iU && (0, i.jsx)("div", {
                    className: "flex min-w-5 flex-1 items-center justify-end",
                    children: null != op && (0, i.jsx)("div", {
                        className: "flex min-w-0 justify-end",
                        role: "status",
                        "aria-label": "loading" === op.type ? ox : oy,
                        children: (0, i.jsx)(ei.a, {
                            statusState: op
                        })
                    })
                }), nQ[344] = iU, nQ[345] = op, nQ[346] = ox, nQ[347] = oy, nQ[348] = o) : o = nQ[348], nQ[349] !== rO || nQ[350] !== e || nQ[351] !== a || nQ[352] !== o ? (r = (0, i.jsxs)("div", {
                    className: "flex min-w-0 flex-1 items-center gap-1",
                    children: [rO, e, a, o]
                }), nQ[349] = rO, nQ[350] = e, nQ[351] = a, nQ[352] = o, nQ[353] = r) : r = nQ[353], tL = r
            }
            let rW = iX ? lR : void 0;
            nQ[354] !== ad || nQ[355] !== rW ? (tq = {
                id: ad,
                registerOpen: rW
            }, nQ[354] = ad, nQ[355] = rW, nQ[356] = tq) : tq = nQ[356], nQ[357] !== ax || nQ[358] !== l1 || nQ[359] !== iG || nQ[360] !== rC || nQ[361] !== ia ? (tI = ia?.({
                isCompact: l1,
                isDragging: iG,
                open: ax,
                onMinimize: rC,
                onOpenChange: ay
            }), nQ[357] = ax, nQ[358] = l1, nQ[359] = iG, nQ[360] = rC, nQ[361] = ia, nQ[362] = tI) : tI = nQ[362];
            let rK = iU && null == i$ && rH;
            nQ[363] !== is?.openRightPaneDisabled || nQ[364] !== rH || nQ[365] !== i$ ? (tA = null != i$ && (0, i.jsx)(V.d, {
                minimizeButton: rH,
                disabled: is?.openRightPaneDisabled,
                onOpenRightPane: i$
            }), nQ[363] = is?.openRightPaneDisabled, nQ[364] = rH, nQ[365] = i$, nQ[366] = tA) : tA = nQ[366], nQ[367] !== tL || nQ[368] !== tq || nQ[369] !== tI || nQ[370] !== rK || nQ[371] !== tA ? (tF = (0, i.jsxs)(W.a, {
                value: tq,
                children: [tL, tI, rK, tA]
            }), nQ[367] = tL, nQ[368] = tq, nQ[369] = tI, nQ[370] = rK, nQ[371] = tA, nQ[372] = tF) : tF = nQ[372];
            let rV = tF;
            nQ[373] !== iF || nQ[374] !== iU || nQ[375] !== rV || nQ[376] !== iA || nQ[377] !== l1 || nQ[378] !== iX || nQ[379] !== l6 || nQ[380] !== ic || nQ[381] !== rN || nQ[382] !== ls || nQ[383] !== am || nQ[384] !== l9 || nQ[385] !== l4 ? (tH = iU ? (0, i.jsx)(V.a, {
                isCompact: iX && l1,
                isVisible: l6,
                isDisabled: iA,
                showDivider: !l9,
                children: rV
            }) : (0, i.jsx)(V.e, {
                expandOnClick: iX,
                animateChrome: !am && !ic && null == ls,
                isChromeRevealed: l6,
                isCompact: l1,
                isDisabled: iA,
                reserveSpace: iX && l4 && !l1,
                presentationToggle: iF ? rN : void 0,
                children: rV
            }), nQ[373] = iF, nQ[374] = iU, nQ[375] = rV, nQ[376] = iA, nQ[377] = l1, nQ[378] = iX, nQ[379] = l6, nQ[380] = ic, nQ[381] = rN, nQ[382] = ls, nQ[383] = am, nQ[384] = l9, nQ[385] = l4, nQ[386] = tH) : tH = nQ[386], nQ[387] !== rq || nQ[388] !== rL || nQ[389] !== tH ? (tO = (0, i.jsx)("div", {
                className: "contents",
                onPointerDownCapture: rL,
                onContextMenu: rq,
                children: tH
            }), nQ[387] = rq, nQ[388] = rL, nQ[389] = tH, nQ[390] = tO) : tO = nQ[390];
            let rB = tO,
                rY = iU ? {
                    top: o3.startsWith("top") ? rl : void 0,
                    bottom: o3.startsWith("top") ? void 0 : rs.bottom,
                    left: ra,
                    width: o1.width,
                    height: o1.height,
                    opacity: lQ
                } : {
                    inset: 0
                },
                rX = !ic,
                r$ = ic ? i8 : void 0;
            nQ[391] !== iU || nQ[392] !== lZ ? (tW = iU ? void 0 : {
                opacity: +!!lZ
            }, nQ[391] = iU, nQ[392] = lZ, nQ[393] = tW) : tW = nQ[393];
            let rZ = !ic || void 0;
            nQ[394] !== am ? (tK = am ? {
                duration: 0
            } : {
                duration: .3,
                ease: j.e
            }, nQ[394] = am, nQ[395] = tK) : tK = nQ[395];
            let rQ = ic ? "minimized" : "preview",
                rU = ic && "pointer-events-auto";
            nQ[396] !== rU ? (tV = (0, l.b)("absolute inset-0 m-auto touch-none", rU), nQ[396] = rU, nQ[397] = tV) : tV = nQ[397];
            let rG = of ? ow : void 0;
            nQ[398] !== as || nQ[399] !== iy || nQ[400] !== ig ? (tB = iy ?? as.formatMessage({
                id: "quickChat.restoreFloatingChat",
                defaultMessage: "Restore floating chat: {title}"
            }, {
                title: ig
            }), nQ[398] = as, nQ[399] = iy, nQ[400] = ig, nQ[401] = tB) : tB = nQ[401];
            let rJ = !iO && ic && lj;
            nQ[402] !== tb ? (tY = e => {
                0 !== e.detail && lE.current || tb()
            }, nQ[402] = tb, nQ[403] = tY) : tY = nQ[403], nQ[404] !== iU || nQ[405] !== ld ? (tX = e => {
                iU || "touch" === e.pointerType || ld(!0)
            }, nQ[404] = iU, nQ[405] = ld, nQ[406] = tX) : tX = nQ[406], nQ[407] !== eY.type || nQ[408] !== iU || nQ[409] !== ld ? (t$ = e => {
                "ready" === eY.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), iU || (0, f.flushSync)(() => ld(!0)), lt.current?.querySelector("button")?.focus({
                    preventScroll: !0
                }))
            }, nQ[407] = eY.type, nQ[408] = iU, nQ[409] = ld, nQ[410] = t$) : t$ = nQ[410], nQ[411] !== aH || nQ[412] !== rn ? (tZ = e => {
                aH || 0 !== e.button || (lE.current = !1, e.currentTarget.setPointerCapture(e.pointerId), rn(e))
            }, nQ[411] = aH, nQ[412] = rn, nQ[413] = tZ) : tZ = nQ[413], nQ[414] !== iU || nQ[415] !== of || nQ[416] !== ol || nQ[417] !== ib || nQ[418] !== ai ? (tQ = ol && null != ai && null == ib ? (0, i.jsx)(ei.a, {
                statusState: ai,
                size: iU ? "default" : "compact"
            }) : (0, i.jsx)(H.a, {
                badgeEnabled: of,
                children: ib ?? (0, i.jsx)(N.Ib, {})
            }), nQ[414] = iU, nQ[415] = of, nQ[416] = ol, nQ[417] = ib, nQ[418] = ai, nQ[419] = tQ) : tQ = nQ[419], nQ[420] !== rQ || nQ[421] !== tV || nQ[422] !== rG || nQ[423] !== tB || nQ[424] !== rJ || nQ[425] !== tY || nQ[426] !== tX || nQ[427] !== t$ || nQ[428] !== tZ || nQ[429] !== tQ ? (tU = (0, i.jsx)(E.a, {
                ref: le,
                className: tV,
                "aria-description": rG,
                "aria-label": tB,
                autoFocus: rJ,
                color: "ghostSecondary",
                size: "composer",
                uniform: !0,
                onClick: tY,
                onPointerEnter: tX,
                onKeyDown: t$,
                onPointerDown: tZ,
                children: tQ
            }, rQ), nQ[420] = rQ, nQ[421] = tV, nQ[422] = rG, nQ[423] = tB, nQ[424] = rJ, nQ[425] = tY, nQ[426] = tX, nQ[427] = t$, nQ[428] = tZ, nQ[429] = tQ, nQ[430] = tU) : tU = nQ[430], nQ[431] !== rY || nQ[432] !== rX || nQ[433] !== r$ || nQ[434] !== tW || nQ[435] !== rZ || nQ[436] !== tK || nQ[437] !== tU ? (tG = (0, i.jsx)(d.a.div, {
                ref: y.c,
                className: "pointer-events-none absolute",
                style: rY,
                "aria-hidden": rX,
                "data-pip-obstacle": r$,
                animate: tW,
                initial: !1,
                inert: rZ,
                transition: tK,
                children: tU
            }), nQ[431] = rY, nQ[432] = rX, nQ[433] = r$, nQ[434] = tW, nQ[435] = rZ, nQ[436] = tK, nQ[437] = tU, nQ[438] = tG) : tG = nQ[438];
            let r0 = tG,
                r1 = "ready" === eY.type ? (0, i.jsx)(D, {
                    items: eY.value,
                    availableHeight: Math.max(0, (n1?.height ?? af) - oC - av - (ic ? o1.height : oD) - 32 - 12),
                    isDockedTop: aJ,
                    shouldReduceMotion: am
                }) : null;
            !iU && (tJ = ec, lZ ? tJ = rc : null != ls || iG || (tJ = "none"));
            let r2 = null != ls || !ic,
                r3 = iX && !lZ;
            nQ[439] !== oH || nQ[440] !== iU || nQ[441] !== rf ? (t0 = iU ? {
                height: oH,
                borderRadius: rf
            } : void 0, nQ[439] = oH, nQ[440] = iU, nQ[441] = rf, nQ[442] = t0) : t0 = nQ[442], nQ[443] !== iU || nQ[444] !== rm || nQ[445] !== rp || nQ[446] !== rf || nQ[447] !== rh || nQ[448] !== rd ? (t1 = iU ? {
                top: rd,
                right: rh,
                bottom: rm,
                left: rp,
                borderRadius: rf
            } : void 0, nQ[443] = iU, nQ[444] = rm, nQ[445] = rp, nQ[446] = rf, nQ[447] = rh, nQ[448] = rd, nQ[449] = t1) : t1 = nQ[449], nQ[450] !== oF || nQ[451] !== oV ? (t2 = {
                height: oF,
                width: oV
            }, nQ[450] = oF, nQ[451] = oV, nQ[452] = t2) : t2 = nQ[452];
            let r4 = iU && oS,
                r5 = iU && !oS ? oj : void 0,
                r6 = l4 && l6;
            nQ[453] !== oR || nQ[454] !== o_ ? (t3 = {
                height: oR,
                width: o_
            }, nQ[453] = oR, nQ[454] = o_, nQ[455] = t3) : t3 = nQ[455], nQ[456] !== r0 || nQ[457] !== ix ? (t4 = null == ix ? r0 : (0, i.jsx)(O.a, {
                disableNative: !0,
                items: ix,
                children: (0, i.jsx)("div", {
                    className: "contents",
                    children: r0
                })
            }), nQ[456] = r0, nQ[457] = ix, nQ[458] = t4) : t4 = nQ[458], nQ[459] !== oI || nQ[460] !== oA ? (t5 = {
                height: oI,
                width: oA
            }, nQ[459] = oI, nQ[460] = oA, nQ[461] = t5) : t5 = nQ[461];
            let r7 = !aH,
                r8 = lZ || iU ? "panel" : nJ,
                r9 = ov ? void 0 : ig,
                se = ov ? ac : void 0,
                st = null != n1 && void 0;
            nQ[462] !== iL || nQ[463] !== oW || nQ[464] !== am ? (t6 = iL ? {
                opacity: +!!oW,
                translateY: 8 * (!oW && !am)
            } : {}, nQ[462] = iL, nQ[463] = oW, nQ[464] = am, nQ[465] = t6) : t6 = nQ[465];
            let sn = iU || lC?.stage !== "approaching" ? 1 : .95;
            nQ[466] !== oV || nQ[467] !== t6 || nQ[468] !== sn ? (t7 = {
                ...t6,
                width: oV,
                scale: sn
            }, nQ[466] = oV, nQ[467] = t6, nQ[468] = sn, nQ[469] = t7) : t7 = nQ[469];
            let si = !iU && l1 || void 0,
                sa = ic ? void 0 : i8,
                sl = !aH,
                so = null == n1 ? void 0 : {
                    left: rt.left - o6.x,
                    right: rt.right - o6.x,
                    top: rt.top - o6.y,
                    bottom: rt.bottom - o6.y
                },
                sr = null == n1 ? void 0 : 0;
            nQ[470] !== iL || nQ[471] !== am ? (t8 = !!iL && !am && {
                opacity: 0,
                translateY: 8
            }, nQ[470] = iL, nQ[471] = am, nQ[472] = t8) : t8 = nQ[472];
            let ss = null == n1 ? "dialog" : "region",
                sc = aJ ? oC + 10 : "auto",
                su = aJ ? "auto" : 10 + av,
                sd = oS ? "50%" : "auto";
            nQ[473] !== oj || nQ[474] !== oS ? (t9 = !oS && {
                [oj]: 10
            }, nQ[473] = oj, nQ[474] = oS, nQ[475] = t9) : t9 = nQ[475];
            let sh = oS ? "-50% 0" : void 0,
                sm = "bottom-center" === o3 ? .5 : Number(o3.endsWith("right")),
                sp = +!o3.startsWith("top");
            nQ[476] !== oH || nQ[477] !== o0 || nQ[478] !== a6 || nQ[479] !== a7 || nQ[480] !== sc || nQ[481] !== su || nQ[482] !== sd || nQ[483] !== t9 || nQ[484] !== sh || nQ[485] !== sm || nQ[486] !== sp ? (ne = {
                ...o0,
                height: oH,
                top: sc,
                bottom: su,
                left: sd,
                right: "auto",
                ...t9,
                translate: sh,
                x: a6,
                y: a7,
                originX: sm,
                originY: sp
            }, nQ[476] = oH, nQ[477] = o0, nQ[478] = a6, nQ[479] = a7, nQ[480] = sc, nQ[481] = su, nQ[482] = sd, nQ[483] = t9, nQ[484] = sh, nQ[485] = sm, nQ[486] = sp, nQ[487] = ne) : ne = nQ[487];
            let sf = .3 * !am;
            nQ[488] !== sf ? (nt = {
                duration: sf,
                ease: j.e
            }, nQ[488] = sf, nQ[489] = nt) : nt = nQ[489], nQ[490] !== oK || nQ[491] !== nt ? (nn = {
                duration: oK,
                ease: j.e,
                scale: nt
            }, nQ[490] = oK, nQ[491] = nt, nQ[492] = nn) : nn = nQ[492], nQ[493] !== iU || nQ[494] !== iX || nQ[495] !== iO || nQ[496] !== ad || nQ[497] !== lw || nQ[498] !== lm || nQ[499] !== ld || nQ[500] !== lr || nQ[501] !== lc || nQ[502] !== on ? (ni = e => {
                if (!(iO || eb(e.currentTarget, e.relatedTarget, ad))) {
                    if (null == e.relatedTarget) {
                        let t = e.currentTarget;
                        queueMicrotask(() => {
                            t.ownerDocument.hasFocus() && eb(t, t.ownerDocument.activeElement, ad) || (lm(!1), lw(!1), ld(!1))
                        });
                        return
                    }
                    lm(!1), lw(!1), ld(!1), (!iU || iX) && on && null == e.target.closest("[inert]") && (lc(null), lr("compact"))
                }
            }, nQ[493] = iU, nQ[494] = iX, nQ[495] = iO, nQ[496] = ad, nQ[497] = lw, nQ[498] = lm, nQ[499] = ld, nQ[500] = lr, nQ[501] = lc, nQ[502] = on, nQ[503] = ni) : ni = nQ[503], nQ[504] !== l3 || nQ[505] !== iU || nQ[506] !== tf || nQ[507] !== l1 || nQ[508] !== iX || nQ[509] !== ic || nQ[510] !== lr || nQ[511] !== lc || nQ[512] !== l4 || nQ[513] !== tx ? (na = e => {
                if (!(iX && (0 !== e.button || e.ctrlKey) || ic || lE.current || e.detail > 0 && lP.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                    if (l1 && (e.target === e.currentTarget || a8.current?.contains(e.target))) return void tf();
                    if (iX) {
                        if (!l4 || !l3) return;
                        l1 && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                            preventScroll: !0
                        }), lc(null), lr("expanded");
                        return
                    }
                    if (iU) {
                        l1 && l3 && tf();
                        return
                    }
                    l4 && l3 && e.target.closest("header[data-quick-chat-drag-handle]") && (l1 && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                        preventScroll: !0
                    }), tx())
                }
            }, nQ[504] = l3, nQ[505] = iU, nQ[506] = tf, nQ[507] = l1, nQ[508] = iX, nQ[509] = ic, nQ[510] = lr, nQ[511] = lc, nQ[512] = l4, nQ[513] = tx, nQ[514] = na) : na = nQ[514], nQ[515] !== iU || nQ[516] !== oR || nQ[517] !== o_ || nQ[518] !== oI || nQ[519] !== oA || nQ[520] !== io || nQ[521] !== ic || nQ[522] !== iY || nQ[523] !== lW || nQ[524] !== lr || nQ[525] !== lc || nQ[526] !== rz ? (nl = e => {
                iU && !ic && !lE.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (lc(null), lr("expanded"), lW(null), Q(iY, z, {
                    dockPosition: "bottom-right",
                    hasConversation: io
                }), rz("bottom-right", !0, {
                    height: ex(z.height, oI, oR),
                    width: ex(z.width + 12, oA, o_)
                }))
            }, nQ[515] = iU, nQ[516] = oR, nQ[517] = o_, nQ[518] = oI, nQ[519] = oA, nQ[520] = io, nQ[521] = ic, nQ[522] = iY, nQ[523] = lW, nQ[524] = lr, nQ[525] = lc, nQ[526] = rz, nQ[527] = nl) : nl = nQ[527], nQ[528] !== iO ? (no = e => {
                !iO && lE.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
            }, nQ[528] = iO, nQ[529] = no) : no = nQ[529], nQ[530] !== iU || nQ[531] !== ry || nQ[532] !== ic || nQ[533] !== lC || nQ[534] !== ez || nQ[535] !== lo || nQ[536] !== lM || nQ[537] !== lc || nQ[538] !== i2 ? (nr = (e, t) => {
                let n = ry(t),
                    i = n.bubbleDropPosition ?? (iU ? ez : n.dockPosition);
                if (i2 && (n.shouldMinimize ? i1(`bubble-${i}`) : i1(ic ? `bubble-${n.dockPosition}` : `composer-${n.dockPosition}`)), null != n.dockPosition && (iU ? n.shouldMinimize : n.isNearDock)) {
                    let e = n.shouldMinimize ? "minimized" : "approaching";
                    (lC?.stage !== e || lC.dockPosition !== i) && (lM({
                        dockPosition: i,
                        stage: e
                    }), (n.shouldMinimize || lC?.stage === "minimized") && lc(iU ? null : {
                        target: n.shouldMinimize ? "minimized" : lo
                    }))
                } else null != lC && "restored" !== lC.stage && (lM({
                    ...lC,
                    stage: "restored"
                }), "minimized" === lC.stage && lc(iU ? null : {
                    target: lo
                }))
            }, nQ[530] = iU, nQ[531] = ry, nQ[532] = ic, nQ[533] = lC, nQ[534] = ez, nQ[535] = lo, nQ[536] = lM, nQ[537] = lc, nQ[538] = i2, nQ[539] = nr) : nr = nQ[539], nQ[540] !== iU || nQ[541] !== ry || nQ[542] !== aV || nQ[543] !== rC || nQ[544] !== lC || nQ[545] !== ez || nQ[546] !== lo || nQ[547] !== rw || nQ[548] !== lM || nQ[549] !== lc || nQ[550] !== rz ? (ns = (e, t) => {
                if (a2.current) return;
                i1(null);
                let n = ry(t);
                n.shouldMinimize ? (0, f.flushSync)(() => {
                    null != n.bubbleDropPosition ? rw(n.bubbleDropPosition, !0) : iU && aV || rw(iU ? ez : n.requestedDockPosition, !0), rC()
                }) : (rz(n.requestedDockPosition, !0), null != lC && "restored" !== lC.stage && (lM({
                    ...lC,
                    stage: "restored"
                }), "minimized" === lC.stage && lc(iU ? null : {
                    target: lo
                }))), iJ(!1)
            }, nQ[540] = iU, nQ[541] = ry, nQ[542] = aV, nQ[543] = rC, nQ[544] = lC, nQ[545] = ez, nQ[546] = lo, nQ[547] = rw, nQ[548] = lM, nQ[549] = lc, nQ[550] = rz, nQ[551] = ns) : ns = nQ[551], nQ[552] !== a6 || nQ[553] !== a7 || nQ[554] !== ld ? (nc = () => {
                ld(!1), i1(null), a2.current = !1, lE.current = !0, iJ(!0), a6.stop(), a7.stop()
            }, nQ[552] = a6, nQ[553] = a7, nQ[554] = ld, nQ[555] = nc) : nc = nQ[555], nQ[556] !== l3 || nQ[557] !== n6 || nQ[558] !== iU || nQ[559] !== iX || nQ[560] !== lg || nQ[561] !== lw || nQ[562] !== lm || nQ[563] !== lr || nQ[564] !== lc || nQ[565] !== l4 ? (nu = e => {
                e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]") ? ((!iU || iX) && lm(!0), lw(!0), (iX ? l4 && l3 : iU) && null == n6 && !e.target.closest("[data-dictation-button], [data-dictation-recording-controls]") && !(e.relatedTarget instanceof Element && e.relatedTarget.closest("[data-dictation-button], [data-dictation-recording-controls]")) && !lg && null == lb.current && (lc(null), lr("expanded"))) : e.currentTarget.contains(e.target) && !a8.current?.contains(e.target) && (lw(!1), iX && e.target.closest("header[data-quick-chat-drag-handle]") && lm(!0))
            }, nQ[556] = l3, nQ[557] = n6, nQ[558] = iU, nQ[559] = iX, nQ[560] = lg, nQ[561] = lw, nQ[562] = lm, nQ[563] = lr, nQ[564] = lc, nQ[565] = l4, nQ[566] = nu) : nu = nQ[566], nQ[567] !== a1 || nQ[568] !== iO ? (nd = e => {
                iO || "Escape" !== e.key || (lE.current = !0, a1.cancel())
            }, nQ[567] = a1, nQ[568] = iO, nQ[569] = nd) : nd = nQ[569], nQ[570] !== iq || nQ[571] !== iO || nQ[572] !== aH || nQ[573] !== rn ? (nh = e => {
                if (iO || (lE.current = !1, lP.current = lN.current > 0 && e.target instanceof Element && null != e.target.closest("header[data-quick-chat-drag-handle]"), aH || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                let t = e.target.closest("[data-quick-chat-drag-handle]"),
                    n = e.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                    i = a8.current,
                    a = e.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                if (iq && null != a && i?.contains(a) && (n === a || e.target.contains(a))) t = i;
                else if (null == t || null != n && n !== t) return;
                e.preventDefault(), t.setPointerCapture(e.pointerId), rn(e)
            }, nQ[570] = iq, nQ[571] = iO, nQ[572] = aH, nQ[573] = rn, nQ[574] = nh) : nh = nQ[574], nQ[575] !== ld ? (nm = () => {
                lt.current?.contains(document.activeElement) || ld(!1)
            }, nQ[575] = ld, nQ[576] = nm) : nm = nQ[576], nQ[577] !== a1 || nQ[578] !== tv || nQ[579] !== nU || nQ[580] !== r9 || nQ[581] !== se || nQ[582] !== st || nQ[583] !== t7 || nQ[584] !== si || nQ[585] !== sa || nQ[586] !== sl || nQ[587] !== so || nQ[588] !== sr || nQ[589] !== t8 || nQ[590] !== ss || nQ[591] !== ne || nQ[592] !== nn || nQ[593] !== ni || nQ[594] !== na || nQ[595] !== nl || nQ[596] !== no || nQ[597] !== nr || nQ[598] !== ns || nQ[599] !== nc || nQ[600] !== nu || nQ[601] !== nd || nQ[602] !== nh || nQ[603] !== nm ? (np = {
                ref: nU,
                "aria-label": r9,
                "aria-labelledby": se,
                "aria-modal": st,
                animate: t7,
                "data-quick-chat-drag-handle": si,
                "data-pip-obstacle": sa,
                "data-state": "open",
                drag: sl,
                dragConstraints: so,
                dragElastic: sr,
                dragControls: a1,
                dragListener: !1,
                dragMomentum: !1,
                initial: t8,
                role: ss,
                tabIndex: -1,
                style: ne,
                transition: nn,
                onBlurCapture: ni,
                onClick: na,
                onDoubleClick: nl,
                onClickCapture: no,
                onDrag: nr,
                onDragEnd: ns,
                onDragStart: nc,
                onFocusCapture: nu,
                onKeyDown: tv,
                onKeyDownCapture: nd,
                onPointerDownCapture: nh,
                onPointerLeave: nm
            }, nQ[577] = a1, nQ[578] = tv, nQ[579] = nU, nQ[580] = r9, nQ[581] = se, nQ[582] = st, nQ[583] = t7, nQ[584] = si, nQ[585] = sa, nQ[586] = sl, nQ[587] = so, nQ[588] = sr, nQ[589] = t8, nQ[590] = ss, nQ[591] = ne, nQ[592] = nn, nQ[593] = ni, nQ[594] = na, nQ[595] = nl, nQ[596] = no, nQ[597] = nr, nQ[598] = ns, nQ[599] = nc, nQ[600] = nu, nQ[601] = nd, nQ[602] = nh, nQ[603] = nm, nQ[604] = np) : np = nQ[604];
            let sg = null == n1 ? "floating" : "content",
                sv = aJ ? "bottom" : "top";
            nQ[605] !== a6 || nQ[606] !== a7 || nQ[607] !== lD || nQ[608] !== lc ? (nf = e => {
                lD(e), e && (lc(null), a6.stop(), a7.stop())
            }, nQ[605] = a6, nQ[606] = a7, nQ[607] = lD, nQ[608] = lc, nQ[609] = nf) : nf = nQ[609], nQ[610] !== eY.type || nQ[611] !== r1 || nQ[612] !== iU || nQ[613] !== om || nQ[614] !== aJ || nQ[615] !== ic || nQ[616] !== aA || nQ[617] !== rv || nQ[618] !== i8 || nQ[619] !== lm ? (ng = !iU && om && "ready" === eY.type ? (0, i.jsx)("div", {
                ref: (0, k.a)(lt, aA, y.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !ic && (aJ ? "top-full" : "bottom-full"), aJ ? "pt-3" : "pb-3"),
                "data-pip-obstacle": i8,
                onClickCapture: () => {
                    (ic ? le.current : a9.current)?.focus({
                        preventScroll: !0
                    }), lm(!1)
                },
                style: ic ? rv : void 0,
                children: r1
            }) : null, nQ[610] = eY.type, nQ[611] = r1, nQ[612] = iU, nQ[613] = om, nQ[614] = aJ, nQ[615] = ic, nQ[616] = aA, nQ[617] = rv, nQ[618] = i8, nQ[619] = lm, nQ[620] = ng) : ng = nQ[620], nQ[621] !== r1 || nQ[622] !== iU || nQ[623] !== om || nQ[624] !== aJ || nQ[625] !== ic || nQ[626] !== aA || nQ[627] !== rv || nQ[628] !== lw || nQ[629] !== lm || nQ[630] !== am ? (nv = iU && om ? (0, i.jsx)(d.a.div, {
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
                    ease: j.e
                },
                ref: (0, k.a)(lt, aA, y.c),
                className: (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !ic && (aJ ? "top-full" : "bottom-full"), ic && (aJ ? "pt-1" : "pb-1")),
                "data-pip-obstacle": "quick-chat",
                onClickCapture: () => {
                    (ic ? le.current : a9.current)?.focus({
                        preventScroll: !0
                    }), lm(!1), lw(!1)
                },
                style: ic ? rv : void 0,
                children: ic ? (0, i.jsx)(x.c, {
                    variant: "notice",
                    children: r1
                }) : r1
            }, "response-preview") : null, nQ[621] = r1, nQ[622] = iU, nQ[623] = om, nQ[624] = aJ, nQ[625] = ic, nQ[626] = aA, nQ[627] = rv, nQ[628] = lw, nQ[629] = lm, nQ[630] = am, nQ[631] = nv) : nv = nQ[631], nQ[632] !== nv ? (nb = (0, i.jsx)(h.a, {
                initial: !1,
                children: nv
            }), nQ[632] = nv, nQ[633] = nb) : nb = nQ[633];
            let sb = aJ ? "top-full pt-2" : "bottom-full";
            nQ[634] !== sb ? (nx = (0, l.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", sb), nQ[634] = sb, nQ[635] = nx) : nx = nQ[635], nQ[636] !== aT || nQ[637] !== lZ || nQ[638] !== nx ? (ny = (0, i.jsx)("div", {
                ref: aT,
                className: nx,
                hidden: lZ
            }), nQ[636] = aT, nQ[637] = lZ, nQ[638] = nx, nQ[639] = ny) : ny = nQ[639];
            let sx = 0 === ok && "pt-2",
                sy = aJ ? "w-full" : "w-80",
                sw = oS && "left-1/2 -translate-x-1/2",
                sz = !oS && (oz ? "left-0" : "right-0"),
                sS = lZ && iG && "invisible";
            nQ[640] !== sx || nQ[641] !== sy || nQ[642] !== sw || nQ[643] !== sz || nQ[644] !== sS ? (nw = (0, l.b)(C.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", sx, sy, sw, sz, sS), nQ[640] = sx, nQ[641] = sy, nQ[642] = sw, nQ[643] = sz, nQ[644] = sS, nQ[645] = nw) : nw = nQ[645], nQ[646] !== ok ? (nz = {
                marginTop: ok
            }, nQ[646] = ok, nQ[647] = nz) : nz = nQ[647], nQ[648] !== n8 || nQ[649] !== aL || nQ[650] !== i8 || nQ[651] !== nw || nQ[652] !== nz ? (nS = (0, i.jsx)("div", {
                ref: aL,
                className: nw,
                style: nz,
                "data-pip-obstacle": i8,
                children: n8
            }), nQ[648] = n8, nQ[649] = aL, nQ[650] = i8, nQ[651] = nw, nQ[652] = nz, nQ[653] = nS) : nS = nQ[653], nQ[654] !== tJ || nQ[655] !== iU || nQ[656] !== lZ ? (nj = iU ? void 0 : {
                clipPath: tJ,
                opacity: +!lZ
            }, nQ[654] = tJ, nQ[655] = iU, nQ[656] = lZ, nQ[657] = nj) : nj = nQ[657];
            let sj = !ic && "pointer-events-auto";
            nQ[658] !== sj ? (nk = (0, l.b)("relative z-0 flex min-h-0 flex-1 flex-col", sj), nQ[658] = sj, nQ[659] = nk) : nk = nQ[659], nQ[660] !== lU || nQ[661] !== iU || nQ[662] !== rg ? (nC = iU ? {
                clipPath: rg,
                opacity: lU
            } : void 0, nQ[660] = lU, nQ[661] = iU, nQ[662] = rg, nQ[663] = nC) : nC = nQ[663];
            let sk = !!ic || void 0;
            nQ[664] !== iU || nQ[665] !== ls || nQ[666] !== am ? (nM = am || !iU && null == ls ? {
                duration: 0
            } : {
                duration: .3,
                ease: j.e
            }, nQ[664] = iU, nQ[665] = ls, nQ[666] = am, nQ[667] = nM) : nM = nQ[667], nQ[668] !== lZ || nQ[669] !== rc || nQ[670] !== lo || nQ[671] !== ls || nQ[672] !== lc ? (nE = e => {
                ls?.target === (lZ ? "minimized" : lo) && "object" == typeof e && "clipPath" in e && e.clipPath === (lZ ? rc : ec) && lc(e => e === ls ? null : e)
            }, nQ[668] = lZ, nQ[669] = rc, nQ[670] = lo, nQ[671] = ls, nQ[672] = lc, nQ[673] = nE) : nE = nQ[673], nQ[674] !== iU || nQ[675] !== l1 || nQ[676] !== aJ || nQ[677] !== rC || nQ[678] !== l4 ? (nN = !iU && !l4 && (0, i.jsx)("div", {
                className: (0, l.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", aJ ? "top-full pt-1" : "bottom-full pb-1"),
                children: (0, i.jsx)(V.c, {
                    standalone: !0,
                    isCompact: l1,
                    onMinimize: rC
                })
            }), nQ[674] = iU, nQ[675] = l1, nQ[676] = aJ, nQ[677] = rC, nQ[678] = l4, nQ[679] = nN) : nN = nQ[679], nQ[680] !== iU || nQ[681] !== rB || nQ[682] !== l1 || nQ[683] !== iG || nQ[684] !== rC || nQ[685] !== ia || nQ[686] !== l4 ? (nR = (iU || l4) && (ia?.({
                contextMenuTrigger: rB,
                isCompact: l1,
                isDragging: iG,
                onMinimize: rC
            }) ?? rB), nQ[680] = iU, nQ[681] = rB, nQ[682] = l1, nQ[683] = iG, nQ[684] = rC, nQ[685] = ia, nQ[686] = l4, nQ[687] = nR) : nR = nQ[687];
            let sC = l1 && "justify-end";
            nQ[688] !== sC ? (nP = (0, l.b)("relative flex min-h-0 flex-1 flex-col", sC), nQ[688] = sC, nQ[689] = nP) : nP = nQ[689];
            let sM = iU ? l1 : i9.followLatestTranscript;
            nQ[690] !== i9 || nQ[691] !== sM ? (n_ = {
                ...i9,
                isFloatingChatSurface: !0,
                followLatestTranscript: sM
            }, nQ[690] = i9, nQ[691] = sM, nQ[692] = n_) : n_ = nQ[692];
            let sE = iU ? "absolute inset-x-0 overflow-hidden" : "contents";
            nQ[693] !== lT || nQ[694] !== iU || nQ[695] !== oX ? (nD = iU ? {
                bottom: lT,
                height: oX
            } : void 0, nQ[693] = lT, nQ[694] = iU, nQ[695] = oX, nQ[696] = nD) : nD = nQ[696], nQ[697] !== au || nQ[698] !== o$ || nQ[699] !== l8 || nQ[700] !== ar || nQ[701] !== l1 || nQ[702] !== a_ || nQ[703] !== ao || nQ[704] !== ij ? (nT = l8 && (0, i.jsx)(d.a.div, {
                className: "pointer-events-none absolute inset-x-(--floating-panel-inset) bottom-0 px-4 py-3 text-sm text-default",
                id: au,
                "aria-hidden": ar || !l1,
                style: {
                    opacity: o$
                },
                ref: a_,
                children: ar ? (0, i.jsx)("span", {
                    className: "line-clamp-2 wrap-anywhere select-none",
                    dir: "auto",
                    children: ao
                }) : ij ?? (0, i.jsx)(v.a, {
                    id: "quickChat.responseWorking",
                    defaultMessage: "Working…"
                })
            }), nQ[697] = au, nQ[698] = o$, nQ[699] = l8, nQ[700] = ar, nQ[701] = l1, nQ[702] = a_, nQ[703] = ao, nQ[704] = ij, nQ[705] = nT) : nT = nQ[705];
            let sN = !iU && (l1 ? "hidden" : "flex"),
                sR = iU && "absolute inset-x-0 bottom-0 flex",
                sP = iU && "overflow-hidden";
            nQ[706] !== sN || nQ[707] !== sR || nQ[708] !== sP ? (nL = (0, l.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", sN, sR, sP), nQ[706] = sN, nQ[707] = sR, nQ[708] = sP, nQ[709] = nL) : nL = nQ[709], nQ[710] !== lT || nQ[711] !== iU || nQ[712] !== oq || nQ[713] !== oY || nQ[714] !== l1 ? (nq = iU ? {
                height: Math.max(0, oq - 46 - lT),
                opacity: l1 ? 0 : oY
            } : void 0, nQ[710] = lT, nQ[711] = iU, nQ[712] = oq, nQ[713] = oY, nQ[714] = l1, nQ[715] = nq) : nq = nQ[715], nQ[716] !== iU || nQ[717] !== i5 || nQ[718] !== l2 || nQ[719] !== l1 || nQ[720] !== iO || nQ[721] !== lZ || nQ[722] !== iR || nQ[723] !== lr || nQ[724] !== lc ? (nI = i5 && (!l2 || iU) ? iR?.(() => {
                lc(null), lr("compact")
            }, !l1 && !iO && !lZ) : null, nQ[716] = iU, nQ[717] = i5, nQ[718] = l2, nQ[719] = l1, nQ[720] = iO, nQ[721] = lZ, nQ[722] = iR, nQ[723] = lr, nQ[724] = lc, nQ[725] = nI) : nI = nQ[725], nQ[726] !== iU || nQ[727] !== i4 || nQ[728] !== i5 || nQ[729] !== l1 || nQ[730] !== oK ? (nA = !i5 && (0, i.jsx)(h.a, {
                initial: !1,
                children: (iU || !l1) && null != i4 && (0, i.jsx)(d.a.div, {
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
                        duration: oK,
                        ease: j.e
                    },
                    children: i4
                }, "empty-state")
            }), nQ[726] = iU, nQ[727] = i4, nQ[728] = i5, nQ[729] = l1, nQ[730] = oK, nQ[731] = nA) : nA = nQ[731], nQ[732] !== l1 || nQ[733] !== aC || nQ[734] !== nL || nQ[735] !== nq || nQ[736] !== nI || nQ[737] !== nA ? (nF = (0, i.jsxs)(d.a.div, {
                ref: aC,
                "aria-hidden": l1,
                className: nL,
                inert: l1,
                style: nq,
                children: [nI, nA]
            }), nQ[732] = l1, nQ[733] = aC, nQ[734] = nL, nQ[735] = nq, nQ[736] = nI, nQ[737] = nA, nQ[738] = nF) : nF = nQ[738], nQ[739] !== au || nQ[740] !== iU || nQ[741] !== tf || nQ[742] !== l8 || nQ[743] !== l1 || nQ[744] !== rE ? (nH = iU && l1 && l8 && (0, i.jsx)(E.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "absolute inset-0",
                "aria-label": rE,
                "aria-describedby": au,
                "data-quick-chat-drag-handle": !0,
                onClick: tf
            }), nQ[739] = au, nQ[740] = iU, nQ[741] = tf, nQ[742] = l8, nQ[743] = l1, nQ[744] = rE, nQ[745] = nH) : nH = nQ[745], nQ[746] !== sE || nQ[747] !== nD || nQ[748] !== nT || nQ[749] !== nF || nQ[750] !== nH ? (nO = (0, i.jsxs)(d.a.div, {
                className: sE,
                style: nD,
                children: [nT, nF, nH]
            }), nQ[746] = sE, nQ[747] = nD, nQ[748] = nT, nQ[749] = nF, nQ[750] = nH, nQ[751] = nO) : nO = nQ[751], nQ[752] !== n_ || nQ[753] !== nO ? (nW = (0, i.jsx)(ea.b, {
                value: n_,
                children: nO
            }), nQ[752] = n_, nQ[753] = nO, nQ[754] = nW) : nW = nQ[754];
            let s_ = ia?.({
                contextMenuTrigger: rF,
                isCompact: l1,
                isDragging: iG,
                onMinimize: rC
            }) ?? rF;
            nQ[755] !== nP || nQ[756] !== nW || nQ[757] !== s_ ? (nK = (0, i.jsxs)("div", {
                className: nP,
                children: [nW, s_]
            }), nQ[755] = nP, nQ[756] = nW, nQ[757] = s_, nQ[758] = nK) : nK = nQ[758], nQ[759] !== aG || nQ[760] !== ic || nQ[761] !== nj || nQ[762] !== nk || nQ[763] !== nC || nQ[764] !== sk || nQ[765] !== nM || nQ[766] !== nE || nQ[767] !== nN || nQ[768] !== nR || nQ[769] !== nK ? (nV = (0, i.jsxs)(d.a.div, {
                "aria-hidden": ic,
                animate: nj,
                className: nk,
                "data-floating-chat-surface": !0,
                "data-floating-chat-dock-position": aG,
                style: nC,
                initial: !1,
                inert: sk,
                transition: nM,
                onAnimationComplete: nE,
                children: [nN, nR, nK]
            }), nQ[759] = aG, nQ[760] = ic, nQ[761] = nj, nQ[762] = nk, nQ[763] = nC, nQ[764] = sk, nQ[765] = nM, nQ[766] = nE, nQ[767] = nN, nQ[768] = nR, nQ[769] = nK, nQ[770] = nV) : nV = nQ[770], nQ[771] !== M || nQ[772] !== rk || nQ[773] !== l1 || nQ[774] !== lZ || nQ[775] !== rs || nQ[776] !== n9 || nQ[777] !== rj || nQ[778] !== rP || nQ[779] !== rR || nQ[780] !== am || nQ[781] !== r2 || nQ[782] !== r3 || nQ[783] !== t0 || nQ[784] !== t1 || nQ[785] !== t2 || nQ[786] !== r4 || nQ[787] !== r5 || nQ[788] !== r6 || nQ[789] !== t3 || nQ[790] !== t4 || nQ[791] !== t5 || nQ[792] !== r7 || nQ[793] !== r8 || nQ[794] !== np || nQ[795] !== sg || nQ[796] !== sv || nQ[797] !== nf || nQ[798] !== ng || nQ[799] !== nb || nQ[800] !== ny || nQ[801] !== nS || nQ[802] !== nV ? (nB = (0, i.jsxs)(M, {
                allowCompactResize: !0,
                animateSurface: r2,
                elevateComposer: r3,
                contentStyle: t0,
                surfaceStyle: t1,
                currentSize: t2,
                heightLabel: rP,
                resizeFromCenter: r4,
                fixedHorizontalEdge: r5,
                isCompact: l1,
                isCompactChromeRevealed: r6,
                isMinimized: lZ,
                keepSurfaceInset: !0,
                maximumSize: t3,
                minimizedContent: t4,
                minimizedSurfaceBounds: rs,
                minimumSize: t5,
                prefersCompactPresentation: !0,
                resizable: r7,
                background: r8,
                sectionRef: a9,
                sectionProps: np,
                shouldReduceMotion: am,
                variant: sg,
                verticalResizeEdge: sv,
                widthLabel: rR,
                onResize: rj,
                onResizeEnd: rk,
                onResizingChange: nf,
                children: [ng, nb, ny, nS, nV, n9]
            }), nQ[771] = M, nQ[772] = rk, nQ[773] = l1, nQ[774] = lZ, nQ[775] = rs, nQ[776] = n9, nQ[777] = rj, nQ[778] = rP, nQ[779] = rR, nQ[780] = am, nQ[781] = r2, nQ[782] = r3, nQ[783] = t0, nQ[784] = t1, nQ[785] = t2, nQ[786] = r4, nQ[787] = r5, nQ[788] = r6, nQ[789] = t3, nQ[790] = t4, nQ[791] = t5, nQ[792] = r7, nQ[793] = r8, nQ[794] = np, nQ[795] = sg, nQ[796] = sv, nQ[797] = nf, nQ[798] = ng, nQ[799] = nb, nQ[800] = ny, nQ[801] = nS, nQ[802] = nV, nQ[803] = nB) : nB = nQ[803];
            let sD = nB;
            return nQ[804] !== ad ? (nY = {
                id: ad
            }, nQ[804] = ad, nQ[805] = nY) : nY = nQ[805], nQ[806] !== iU || nQ[807] !== aP ? (nX = iU && (0, i.jsx)("div", {
                ref: aP,
                "aria-hidden": !0,
                className: (0, l.b)(el.a, "pointer-events-none invisible absolute")
            }), nQ[806] = iU, nQ[807] = aP, nQ[808] = nX) : nX = nQ[808], nQ[809] !== i0 || nQ[810] !== n1 || nQ[811] !== iG || nQ[812] !== ic || nQ[813] !== n7 || nQ[814] !== i2 || nQ[815] !== oN || nQ[816] !== aF ? (n$ = i2 && iG && null != i0 && (0, i.jsx)(eg, {
                activeIndicator: i0,
                fixed: null == n1,
                isMinimized: ic,
                reservedDockPosition: n7,
                viewportWidth: aF,
                viewportHeight: oN
            }), nQ[809] = i0, nQ[810] = n1, nQ[811] = iG, nQ[812] = ic, nQ[813] = n7, nQ[814] = i2, nQ[815] = oN, nQ[816] = aF, nQ[817] = n$) : n$ = nQ[817], nQ[818] !== sD || nQ[819] !== nY || nQ[820] !== nX || nQ[821] !== n$ ? (nZ = (0, i.jsxs)(W.a, {
                value: nY,
                children: [nX, n$, sD]
            }), nQ[818] = sD, nQ[819] = nY, nQ[820] = nX, nQ[821] = n$, nQ[822] = nZ) : nZ = nQ[822], nZ
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
                    S = !b && "shrink-0";
                m[0] !== S ? (t = (0, o.b)("relative min-h-0 overflow-hidden", S), m[0] = S, m[1] = t) : t = m[1];
                let j = !v || !!x || void 0,
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
                }), m[17] = g, m[18] = c, m[19] = u) : u = m[19], m[20] !== s || m[21] !== u || m[22] !== t || m[23] !== j || m[24] !== n || m[25] !== M || m[26] !== l ? (h = (0, i.jsxs)(r.a.header, {
                    className: t,
                    "aria-hidden": j,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: M,
                    transition: l,
                    children: [s, u]
                }), m[20] = s, m[21] = u, m[22] = t, m[23] = j, m[24] = n, m[25] = M, m[26] = l, m[27] = h) : h = m[27], h
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
                    onResizingChange: S,
                    setSize: j,
                    verticalEdge: k
                } = e,
                C = void 0 === v ? "left" : v,
                M = void 0 !== y && y,
                E = void 0 === k ? "top" : k,
                N = (0, s.c)(),
                R = (0, r.useRef)(null);
            g[0] !== C || g[1] !== x || g[2] !== w || g[3] !== M || g[4] !== j || g[5] !== E || g[6] !== N ? (t = e => {
                let t = R.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                e.preventDefault();
                let n = {
                    height: u(t.startSize.height + ("top" === E ? -1 : 1) * ((0, s.b)(e.clientY, N) - t.startPointer.y), w.height, x.height),
                    width: u(t.startSize.width + (M ? 2 : 1) * ("left" === C ? -1 : 1) * ((0, s.b)(e.clientX, N) - t.startPointer.x), w.width, x.width)
                };
                t.didMove || (t.didMove = n.height !== t.startSize.height || n.width !== t.startSize.width), t.lastSize = n, j(n)
            }, g[0] = C, g[1] = x, g[2] = w, g[3] = M, g[4] = j, g[5] = E, g[6] = N, g[7] = t) : t = g[7];
            let P = t;
            g[8] !== z || g[9] !== S ? (n = (e, t) => {
                let n = R.current;
                n?.pointerId === e.pointerId && (R.current = null, S?.(!1), t && n.didMove && z?.(n.lastSize))
            }, g[8] = z, g[9] = S, g[10] = n) : n = g[10];
            let _ = n,
                D = "top" === E ? "top-0" : "bottom-0",
                T = "left" === C ? "left-0" : "right-0",
                L = "left" === C == ("top" === E) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return g[11] !== D || g[12] !== T || g[13] !== L ? (l = (0, o.b)("group absolute z-50 flex size-4 touch-none select-none", D, T, L), g[11] = D, g[12] = T, g[13] = L, g[14] = l) : l = g[14], g[15] !== _ ? (c = e => {
                _(e, !1)
            }, g[15] = _, g[16] = c) : c = g[16], g[17] !== P || g[18] !== _ ? (d = e => {
                P(e), _(e, !0)
            }, g[17] = P, g[18] = _, g[19] = d) : d = g[19], g[20] !== b || g[21] !== S || g[22] !== N ? (h = e => {
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
                }, S?.(!0)
            }, g[20] = b, g[21] = S, g[22] = N, g[23] = h) : h = g[23], g[24] !== P || g[25] !== _ ? (m = e => {
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
                    widthLabel: S
                } = e,
                j = void 0 === m || m,
                k = void 0 !== f && f,
                C = void 0 === z ? "top" : z;
            if (s[0] !== u || s[1] !== h || s[2] !== j || s[3] !== p || s[4] !== g || s[5] !== v || s[6] !== b || s[7] !== x || s[8] !== y || s[9] !== w || s[10] !== k || s[11] !== C || s[12] !== S) {
                let e, a;
                s[16] !== p ? (e = e => e !== p, s[16] = p, s[17] = e) : e = s[17];
                let r = d.filter(e);
                s[18] !== u || s[19] !== h || s[20] !== j || s[21] !== v || s[22] !== b || s[23] !== x || s[24] !== y || s[25] !== w || s[26] !== k || s[27] !== S ? (a = e => (0, i.jsx)(l.a, {
                    ariaLabel: S,
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
                }, e), s[18] = u, s[19] = h, s[20] = j, s[21] = v, s[22] = b, s[23] = x, s[24] = y, s[25] = w, s[26] = k, s[27] = S, s[28] = a) : a = s[28], t = r.map(a), s[29] !== u || s[30] !== h || s[31] !== g || s[32] !== v || s[33] !== b || s[34] !== x || s[35] !== y || s[36] !== w || s[37] !== C ? (n = null != C && (0, i.jsx)(l.a, {
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
                }, e)), s[0] = u, s[1] = h, s[2] = j, s[3] = p, s[4] = g, s[5] = v, s[6] = b, s[7] = x, s[8] = y, s[9] = w, s[10] = k, s[11] = C, s[12] = S, s[13] = t, s[14] = n, s[15] = o
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