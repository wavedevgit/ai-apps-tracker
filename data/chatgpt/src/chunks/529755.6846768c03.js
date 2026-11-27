export const __rspack_esm_ids = [529755];
export const __webpack_modules__ = {
    wrxv: (function(a, b, c) {
        c.d(b, {}, {
            a: {
                type: "none"
            },
            b: {
                type: "pending"
            }
        })
    }),
    ttIa: (function(a, b, c) {
        c.d(b, {
            a: () => aq
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("VwGH"),
            g = c("on57"),
            h = c("h24K"),
            i = c("K45w"),
            j = c("W5pg"),
            k = c("jCHb"),
            l = c("xs0G"),
            m = c("IPUh"),
            n = c("suct"),
            o = c("Q840"),
            p = c("zd8w"),
            q = c("v7qY"),
            r = c("Wf1j"),
            s = c("oyxz"),
            t = c("Q2Qp"),
            u = c("wD9O"),
            v = c("rsCP"),
            w = c("AclY"),
            x = c("sArP");
        let y = {
            height: 640,
            width: 560
        };
        var z = c("hZax"),
            A = c("V8uZ"),
            B = c("HgLj"),
            C = c("cf51");

        function D(a) {
            let b, c, f, h, i, j, k, l, n, o, p = (0, e.c)(63),
                {
                    allowCompactResize: q,
                    animateSurface: r,
                    background: s,
                    children: t,
                    currentSize: u,
                    contentStyle: D,
                    contentRef: E,
                    elevateComposer: F,
                    fixedHorizontalEdge: G,
                    resizeFromCenter: H,
                    heightLabel: I,
                    isCompact: J,
                    isCompactChromeRevealed: K,
                    isMinimized: L,
                    keepSurfaceInset: M,
                    maximumSize: N,
                    minimizedContent: O,
                    minimizedSurfaceBounds: P,
                    minimumSize: Q,
                    onResize: R,
                    onResizeEnd: S,
                    onResizingChange: T,
                    prefersCompactPresentation: U,
                    resizable: V,
                    sectionProps: W,
                    sectionRef: X,
                    surfaceStyle: Y,
                    shouldReduceMotion: Z,
                    variant: $,
                    verticalResizeEdge: _,
                    widthLabel: aa
                } = a,
                ab = void 0 !== q && q,
                ac = void 0 === r || r,
                ad = void 0 !== H && H,
                ae = void 0 === V || V,
                af = (0, z.f)("2163293173"),
                ag = !L && (M || J && !K) ? 6 : 0;
            p[0] !== L || p[1] !== P || p[2] !== ag ? (b = L && null != P ? P : {
                top: 0,
                right: ag,
                bottom: ag,
                left: ag
            }, p[0] = L, p[1] = P, p[2] = ag, p[3] = b) : b = p[3];
            let ah = b,
                ai = "panel" !== s && "rounded-[inherit]";
            p[4] !== ai ? (c = (0, g.b)("pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto", ai), p[4] = ai, p[5] = c) : c = p[5];
            let aj = c,
                ak = "panel" !== s || U;
            p[6] !== W.ref || p[7] !== X ? (f = (0, B.a)(X, W.ref, w.d), p[6] = W.ref, p[7] = X, p[8] = f) : f = p[8];
            let al = !af && U && "frame-Xbg62r",
                am = U && "group/chat-frame focus:outline-none",
                an = null != P ? "pointer-events-none" : "pointer-events-auto",
                ao = U && C.a.floatingSurface,
                ap = M && C.a.singleLineSurface,
                aq = "floating" === $ ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                ar = U ? "overflow-visible" : "overflow-hidden";
            p[9] !== al || p[10] !== am || p[11] !== an || p[12] !== ao || p[13] !== ap || p[14] !== aq || p[15] !== ar ? (h = (0, g.b)("flex flex-col text-default", al, am, an, ao, ap, aq, ar), p[9] = al, p[10] = am, p[11] = an, p[12] = ao, p[13] = ap, p[14] = aq, p[15] = ar, p[16] = h) : h = p[16];
            let as = null != D ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            p[17] !== as ? (i = (0, g.b)(as), p[17] = as, p[18] = i) : i = p[18], p[19] !== ac || p[20] !== s || p[21] !== aj || p[22] !== F || p[23] !== M || p[24] !== O || p[25] !== U || p[26] !== Z || p[27] !== ah || p[28] !== Y ? (j = U ? (0, d.jsx)(v.c, {
                asChild: !0,
                unstyled: "panel" !== s,
                variant: M ? "single-line" : "default",
                shadow: F ? "raised" : void 0,
                children: null != Y ? (0, d.jsx)(m.a.div, {
                    className: aj,
                    "aria-hidden": null == O || void 0,
                    style: Y
                }, "panel-background") : (0, d.jsx)(m.a.div, {
                    className: aj,
                    "aria-hidden": null == O || void 0,
                    animate: ah,
                    initial: !1,
                    transition: Z || !ac ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: A.e
                    },
                    children: O
                }, "legacy-background")
            }) : null, p[19] = ac, p[20] = s, p[21] = aj, p[22] = F, p[23] = M, p[24] = O, p[25] = U, p[26] = Z, p[27] = ah, p[28] = Y, p[29] = j) : j = p[29], p[30] !== ab || p[31] !== u || p[32] !== G || p[33] !== I || p[34] !== J || p[35] !== L || p[36] !== N || p[37] !== Q || p[38] !== R || p[39] !== S || p[40] !== T || p[41] !== ae || p[42] !== ad || p[43] !== ah || p[44] !== _ || p[45] !== aa ? (k = ae && (!J || ab) && !L ? (0, d.jsx)("div", {
                className: "pointer-events-none absolute",
                style: ah,
                children: (0, d.jsx)("div", {
                    className: "pointer-events-auto contents",
                    children: (0, d.jsx)(x.a, {
                        currentSize: u,
                        defaultSize: y,
                        extendIntoToolbar: !1,
                        fixedHorizontalEdge: G,
                        resizeFromCenter: ad,
                        heightLabel: I,
                        maximumSize: N,
                        minimumSize: Q,
                        verticalEdge: J ? null : _,
                        widthLabel: aa,
                        onResize: R,
                        onResizeEnd: S,
                        onResizingChange: T
                    })
                })
            }) : null, p[30] = ab, p[31] = u, p[32] = G, p[33] = I, p[34] = J, p[35] = L, p[36] = N, p[37] = Q, p[38] = R, p[39] = S, p[40] = T, p[41] = ae, p[42] = ad, p[43] = ah, p[44] = _, p[45] = aa, p[46] = k) : k = p[46];
            let at = null == Y ? null : O;
            return p[47] !== t || p[48] !== E || p[49] !== D || p[50] !== i || p[51] !== j || p[52] !== k || p[53] !== at ? (l = (0, d.jsxs)(m.a.div, {
                ref: E,
                className: i,
                style: D,
                children: [j, k, at, t]
            }), p[47] = t, p[48] = E, p[49] = D, p[50] = i, p[51] = j, p[52] = k, p[53] = at, p[54] = l) : l = p[54], p[55] !== W || p[56] !== h || p[57] !== l || p[58] !== f ? (n = (0, d.jsx)(m.a.section, {
                ...W,
                ref: f,
                className: h,
                children: l
            }), p[55] = W, p[56] = h, p[57] = l, p[58] = f, p[59] = n) : n = p[59], p[60] !== n || p[61] !== ak ? (o = (0, d.jsx)(v.c, {
                asChild: !0,
                unstyled: ak,
                children: n
            }), p[60] = n, p[61] = ak, p[62] = o) : o = p[62], o
        }
        var E = c("Sm6l"),
            F = c("bf6R");

        function G(a) {
            let b, c, f, g, h, i, j, k, l, m, n, o = (0, e.c)(56),
                {
                    title: q,
                    preview: t,
                    onOpen: u,
                    onDismiss: w,
                    isWorking: x,
                    workingContent: y
                } = a,
                A = void 0 !== x && x,
                B = (0, z.f)("2163293173"),
                C = (0, r.a)();
            o[0] !== C || o[1] !== q ? (b = q ?? C.formatMessage({
                id: "quickChat.mainConversation",
                defaultMessage: "Chat"
            }), o[0] = C, o[1] = q, o[2] = b) : b = o[2];
            let D = b,
                G = (0, p.useEffectEvent)(w);
            if (o[3] !== B || o[4] !== G || o[5] !== A ? (c = () => {
                    if (!B || A) return;
                    let a = window.setTimeout(() => G(), 1e4);
                    return () => window.clearTimeout(a)
                }, o[3] = B, o[4] = G, o[5] = A, o[6] = c) : c = o[6], o[7] !== B || o[8] !== A ? (f = [B, A], o[7] = B, o[8] = A, o[9] = f) : f = o[9], (0, p.useEffect)(c, f), !B) {
                let a, b, c, e, f, g, h, i, j, k;
                return o[10] !== C || o[11] !== D ? (a = C.formatMessage({
                    id: "quickChat.openCompletedResponse",
                    defaultMessage: "Open completed response: {title}"
                }, {
                    title: D
                }), o[10] = C, o[11] = D, o[12] = a) : a = o[12], o[13] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(F.tc, {
                    className: "text-success"
                }), o[13] = b) : b = o[13], o[14] !== D ? (c = (0, d.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2 text-sm font-semibold text-default",
                    children: [b, (0, d.jsx)("span", {
                        className: "truncate",
                        children: D
                    })]
                }), o[14] = D, o[15] = c) : c = o[15], o[16] !== t ? (e = t || (0, d.jsx)(s.a, {
                    id: "quickChat.responseReady",
                    defaultMessage: "Response ready"
                }), o[16] = t, o[17] = e) : e = o[17], o[18] !== e ? (f = (0, d.jsx)("span", {
                    className: "block truncate text-sm text-secondary",
                    children: e
                }), o[18] = e, o[19] = f) : f = o[19], o[20] !== u || o[21] !== a || o[22] !== c || o[23] !== f ? (g = (0, d.jsxs)("button", {
                    className: "min-w-0 flex-1 cursor-interaction rounded-[inherit] px-4 py-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    "aria-label": a,
                    type: "button",
                    onClick: u,
                    children: [c, f]
                }), o[20] = u, o[21] = a, o[22] = c, o[23] = f, o[24] = g) : g = o[24], o[25] !== C ? (h = C.formatMessage({
                    id: "quickChat.dismissCompletedResponse",
                    defaultMessage: "Dismiss and mark as read"
                }), o[25] = C, o[26] = h) : h = o[26], o[27] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, d.jsx)(F.Nj, {
                    className: "pointer-events-none"
                }), o[27] = i) : i = o[27], o[28] !== w || o[29] !== h ? (j = (0, d.jsx)("div", {
                    className: "absolute -top-1 -left-1 flex rounded-full bg-surface",
                    children: (0, d.jsx)(E.a, {
                        "aria-label": h,
                        color: "outlineSurface",
                        radius: "full",
                        size: "iconCircleSm",
                        onClick: w,
                        children: i
                    })
                }), o[28] = w, o[29] = h, o[30] = j) : j = o[30], o[31] !== g || o[32] !== j ? (k = (0, d.jsxs)(v.c, {
                    className: "relative flex shrink-0 select-none",
                    role: "status",
                    variant: "notice",
                    children: [g, j]
                }), o[31] = g, o[32] = j, o[33] = k) : k = o[33], k
            }
            return o[34] !== C || o[35] !== D ? (g = C.formatMessage({
                id: "quickChat.openCompletedResponse",
                defaultMessage: "Open completed response: {title}"
            }, {
                title: D
            }), o[34] = C, o[35] = D, o[36] = g) : g = o[36], o[37] !== A || o[38] !== t || o[39] !== y ? (h = A ? y ?? (0, d.jsx)(s.a, {
                id: "quickChat.responseWorking",
                defaultMessage: "Working\u2026"
            }) : t || (0, d.jsx)(s.a, {
                id: "quickChat.responseReady",
                defaultMessage: "Response ready"
            }), o[37] = A, o[38] = t, o[39] = y, o[40] = h) : h = o[40], o[41] !== h ? (i = (0, d.jsx)("span", {
                className: "line-clamp-2 min-w-0 flex-1 text-sm whitespace-normal text-default",
                children: h
            }), o[41] = h, o[42] = i) : i = o[42], o[43] !== u || o[44] !== g || o[45] !== i ? (j = (0, d.jsx)(E.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 rounded-[inherit] px-4 py-3 pe-10 text-start",
                "aria-label": g,
                type: "button",
                onClick: u,
                children: i
            }), o[43] = u, o[44] = g, o[45] = i, o[46] = j) : j = o[46], o[47] !== C ? (k = C.formatMessage({
                id: "quickChat.dismissResponsePreview",
                defaultMessage: "Dismiss response preview"
            }), o[47] = C, o[48] = k) : k = o[48], o[49] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, d.jsx)(F.Nj, {
                className: "pointer-events-none"
            }), o[49] = l) : l = o[49], o[50] !== w || o[51] !== k ? (m = (0, d.jsx)("div", {
                className: "absolute top-3 right-2 flex rounded-full",
                children: (0, d.jsx)(E.a, {
                    "aria-label": k,
                    color: "ghostSecondary",
                    radius: "full",
                    size: "iconCircleSm",
                    onClick: w,
                    children: l
                })
            }), o[50] = w, o[51] = k, o[52] = m) : m = o[52], o[53] !== m || o[54] !== j ? (n = (0, d.jsxs)("div", {
                className: "relative flex shrink-0 select-none",
                role: "status",
                children: [j, m]
            }), o[53] = m, o[54] = j, o[55] = n) : n = o[55], n
        }
        var H = c("v0Gf"),
            I = c("nsuH");

        function J(a) {
            let b, c, f, g, h, i, j = (0, e.c)(23),
                {
                    items: k,
                    availableHeight: l,
                    isDockedTop: n,
                    shouldReduceMotion: o
                } = a,
                q = (0, z.f)("2163293173"),
                [r, s] = (0, p.useState)(null);
            j[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (a, b) => {
                let c = b.firstElementChild;
                c instanceof HTMLElement && s(c.offsetHeight)
            }, j[0] = b) : b = j[0];
            let t = (0, I.b)(b),
                u = Math.min(null == r ? l : 3 * r + 24, Math.max(0, l - 16)),
                v = .3 * !o;
            j[1] !== v ? (c = {
                duration: v,
                ease: A.e
            }, j[1] = v, j[2] = c) : c = j[2];
            let w = c,
                x = q ? "min-w-0" : "-mx-6 -my-2",
                y = q ? "overflow-y-auto overscroll-contain" : "overflow-y-auto overscroll-contain px-6 py-2",
                B = u + 16;
            j[3] !== B ? (f = {
                style: {
                    maxHeight: B
                }
            }, j[3] = B, j[4] = f) : f = j[4];
            let C = q ? "relative flex flex-col" : "relative flex flex-col gap-3";
            if (j[5] !== n || j[6] !== k || j[7] !== o || j[8] !== w) {
                let a;
                j[10] !== n || j[11] !== o || j[12] !== w ? (a = a => {
                    let {
                        id: b,
                        content: c
                    } = a;
                    return (0, d.jsx)(m.a.div, {
                        className: "shrink-0",
                        layout: !o && "position",
                        transition: w,
                        children: (0, d.jsx)(m.a.div, {
                            initial: {
                                opacity: 0,
                                transform: `translateY(${o?0:8*(n?-1:1)}px)`
                            },
                            animate: {
                                opacity: 1,
                                transform: "translateY(0px)"
                            },
                            transition: {
                                ...w,
                                opacity: {
                                    ease: "linear"
                                }
                            },
                            children: c
                        })
                    }, b)
                }, j[10] = n, j[11] = o, j[12] = w, j[13] = a) : a = j[13], g = k.map(a), j[5] = n, j[6] = k, j[7] = o, j[8] = w, j[9] = g
            } else g = j[9];
            return j[14] !== t || j[15] !== C || j[16] !== g ? (h = (0, d.jsx)("div", {
                ref: t,
                className: C,
                children: g
            }), j[14] = t, j[15] = C, j[16] = g, j[17] = h) : h = j[17], j[18] !== h || j[19] !== x || j[20] !== y || j[21] !== f ? (i = (0, d.jsx)(H.a, {
                className: x,
                fade: "mask",
                scrollClassName: y,
                scrollProps: f,
                children: h
            }), j[18] = h, j[19] = x, j[20] = y, j[21] = f, j[22] = i) : i = j[22], i
        }
        var K = c("wrxv"),
            L = c("EFj1"),
            M = c("BjWL"),
            N = c("vi3X"),
            O = c("fDIZ"),
            P = c("AKr5"),
            Q = c("i7gm"),
            R = c("fd5U"),
            S = c("rmk3"),
            T = c("giDA"),
            U = c("YzWZ"),
            V = c("eeV6"),
            W = c("Xyz8"),
            X = c("zj7j"),
            Y = c("Z2JT"),
            Z = c("T7v7");
        let $ = (0, c("Nwp9").b)("quick-chat-size-v1", y);

        function _(a, b, c) {
            let {
                dockPosition: d,
                hasConversation: e
            } = c, f = a.get($);
            a.set($, b), (null == f || f.height !== b.height || f.width !== b.width) && (0, Z.d)(a, {
                action: Z.a.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_RESIZED,
                dockPosition: d,
                hasConversation: e,
                source: Z.b.CODEX_QUICK_CHAT_SOURCE_RESIZE_HANDLE
            })
        }
        var aa = c("mphG"),
            ab = c("T1PX"),
            ac = c("DU0b"),
            ad = c("TL6G"),
            ae = c("rkZ2"),
            af = c("f4Vb"),
            ag = c("OWtl"),
            ah = c("j89V"),
            ai = c("El6m"),
            aj = c("KkZX"),
            ak = c("bIvi");
        let al = ["bottom-center", "bottom-left", "bottom-right"],
            am = ["bottom-left", "bottom-right"],
            an = "inset(0px 0px 0px 0px round var(--floating-panel-radius))",
            ao = {
                type: "spring",
                bounce: .16,
                duration: .42
            },
            ap = (0, o.u)(ag.a, az, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (a, b) => a.width === b.width && a.height === b.height,
                onMount: a => {
                    let b = window.visualViewport ?? window,
                        c = () => a(az());
                    return b.addEventListener("resize", c), c(), () => b.removeEventListener("resize", c)
                }
            });

        function aq(a) {
            let b, c, f, g, h = (0, e.c)(10);
            return h[0] !== a ? ({
                contentChat: b,
                ...c
            } = a, h[0] = a, h[1] = b, h[2] = c) : (b = h[1], c = h[2]), h[3] !== b || h[4] !== c ? (f = null == b ? c.renderMenu : a => a.contextMenuTrigger ?? c.renderMenu?.(a), h[3] = b, h[4] = c, h[5] = f) : f = h[5], h[6] !== b || h[7] !== c || h[8] !== f ? (g = (0, d.jsx)(ar, {
                ...c,
                contentChat: b,
                renderMenu: f
            }), h[6] = b, h[7] = c, h[8] = f, h[9] = g) : g = h[9], g
        }

        function ar(a) {
            let b, c, {
                    ref: e,
                    animateOnMount: f = !1,
                    fitInitialCompactContent: x = !1,
                    background: H,
                    renderComposer: Q,
                    containerSize: Z,
                    minimumWidth: al = 360,
                    dockThreadKey: am,
                    canDock: aq = !0,
                    preserveLayoutOnEscape: ar = !1,
                    compactInputPosition: as,
                    reservedDockPosition: at,
                    footer: az,
                    overlay: aA,
                    renderHeaderContent: aB,
                    headerInteractionDisabled: aC = !1,
                    allowLegacyHeaderToggle: aD = !0,
                    renderMenu: aE,
                    forceExpanded: aF = !1,
                    hasConversation: aG,
                    isHidden: aH = !1,
                    contentChat: aI,
                    isMinimized: aJ,
                    isCollisionObstacle: aK = !0,
                    onEscape: aL,
                    onMinimizedChange: aM,
                    presentation: aN,
                    onPresentationChange: aO,
                    title: aP,
                    titleContent: aQ,
                    minimizedIcon: aR,
                    minimizedMenuItems: aS,
                    restoreLabel: aT,
                    statusState: aU,
                    titleStatusState: aV = aU,
                    notifications: aW,
                    workingPreview: aX,
                    compactWorkingPreview: aY,
                    responsePreview: aZ,
                    persistResponsePreview: a$ = !1,
                    showResponsePreview: a_ = !0,
                    emptyState: a0,
                    renderTranscript: a1,
                    hasTranscript: a2,
                    pendingFormId: a3 = null,
                    showComposerDivider: a4 = !1,
                    showHeader: a5 = !0
                } = a,
                a6 = (0, o.y)(ag.a),
                a7 = null != aI,
                a8 = aI?.onOpenRightPane,
                a9 = (0, o.z)(a3),
                ba = null != a9,
                bb = (0, z.f)("2163293173"),
                bc = (0, p.useContext)(t.a),
                [bd, be] = (0, p.useState)(!1),
                [bf, bg] = (0, p.useState)(null),
                bh = bb && a7 && aq && !aH,
                bi = bh && null != a8 && !aI?.openRightPaneDisabled && null != bc,
                bj = (0, o.z)(!!bb && !!a7 && ae.c),
                bk = bb ? a0 : void 0,
                bl = a2 ?? null != a1,
                bm = bl || null != bk,
                bn = (0, o.z)(am) ?? void 0,
                bo = aK ? "quick-chat" : void 0,
                bp = (0, p.useContext)(ai.b),
                bq = (0, o.z)(aW),
                br = ba ? K.a : bq ?? K.a,
                bs = (0, o.z)(aU),
                bt = "ready" === br.type ? {
                    ...bs,
                    type: bs?.type ?? "idle",
                    unread: !0
                } : bs,
                bu = (0, o.z)(aV),
                bv = aV === aU ? bt : bu,
                bw = (0, o.z)(bb && a_ ? aZ : null),
                bx = !!bw,
                by = (0, r.a)(),
                bz = (0, p.useId)(),
                bA = (0, p.useId)(),
                bB = (0, p.useId)(),
                bC = (0, u.c)(),
                bD = (0, ab.a)(),
                bE = (0, o.z)(aH ? y : ap),
                bF = (0, u.b)(bE.height, bC),
                bG = (0, u.b)(bE.width, bC),
                [bH, bI] = (0, p.useState)(0),
                [bJ, bK] = (0, p.useState)(!1),
                [bL, bM] = (0, p.useState)(0),
                [bN, bO] = (0, p.useState)(null),
                [bP, bQ] = (0, p.useState)(null),
                [bR, bS] = (0, p.useState)(0),
                bT = (0, p.useRef)({
                    composer: 0,
                    response: 0,
                    complete: !1
                }),
                [bU, bV] = (0, p.useState)(null),
                bW = (0, I.b)(a => {
                    a.contentRect.width > 0 && bV(a.contentRect.width)
                }),
                bX = (0, I.b)(a => {
                    let b = (0, af.a)(a).height;
                    bS(b), ej("response", b)
                }),
                bY = (0, I.b)(a => {
                    bM((0, af.a)(a).height)
                }),
                bZ = (0, ak.a)(a => {
                    bO(a), bY(a)
                }),
                b$ = (0, I.b)(a => {
                    bI((0, af.a)(a).height)
                }),
                [b_, b0] = (0, p.useState)(0),
                b1 = (0, I.b)(a => {
                    b0((0, af.a)(a).height)
                }),
                b2 = Z?.width ?? bG,
                b3 = bG < 640,
                b4 = !aH && !b3,
                [b5] = (0, p.useState)(() => aq ? bb ? "bottom-right" : (0, U.a)() : "bottom-center"),
                b6 = (0, o.x)(aq ? X.a : void 0, {
                    threadKey: bn ?? null,
                    minimized: !1
                }),
                b7 = a7 && aq,
                b8 = (0, o.x)(aq && !a7 ? X.a : void 0, {
                    threadKey: bn ?? null,
                    minimized: !0
                }),
                [b9, ca] = (0, p.useState)({}),
                cb = (null != bn || bb ? null : b9.expanded) ?? b6 ?? b5,
                cc = null == as ? cb : b9.expanded ?? as,
                cd = b3 ? "bottom-center" : cc,
                ce = "bottom-right";
            b7 ? ce = (0, W.a)(cd) : bb || (ce = (null == bn ? b9.minimized : null) ?? b8 ?? "bottom-right");
            let cf = aq ? (0, W.f)(aJ ? ce : cd, at) : "bottom-center",
                cg = cf.startsWith("top"),
                ch = (0, o.z)($),
                ci = (0, h.a)(),
                cj = (0, p.useRef)(!1),
                ck = (0, p.useRef)({
                    x: 0,
                    y: 0
                }),
                cl = (0, p.useRef)(null),
                cm = (0, p.useRef)(null),
                cn = (0, p.useRef)(null),
                co = (0, i.a)(0),
                cp = (0, i.a)(0),
                cq = (0, p.useRef)(null),
                cr = (0, p.useRef)(null),
                cs = (0, p.useRef)(null),
                ct = (0, p.useRef)(null),
                cu = (0, p.useRef)(null),
                [cv, cw] = (0, p.useState)("compact"),
                [cx, cy] = (0, p.useState)(!1),
                cz = aN ?? cv,
                cA = a => {
                    (a7 || "expanded" !== a || bm) && cB(a)
                },
                cB = a => {
                    null == aN && cw(a), cy(!1), aO?.(a)
                },
                [cC, cD] = (0, p.useState)(null),
                [cE, cF] = (0, p.useState)(!1),
                [cG, cH] = (0, p.useState)(!1),
                [cI, cJ] = (0, p.useState)(!1),
                [cK, cL] = (0, p.useState)(!1),
                cM = (0, p.useRef)(null),
                cN = (0, p.useCallback)(a => {
                    (null != cM.current && (cancelAnimationFrame(cM.current), cM.current = null), null != a) ? cL(!0): cM.current = requestAnimationFrame(() => {
                        cM.current = null, cL(!1)
                    })
                }, []);
            (0, p.useEffect)(() => () => {
                null != cM.current && cancelAnimationFrame(cM.current)
            }, []);
            let [cO, cP] = (0, p.useState)(!1), [cQ, cR] = (0, p.useState)(!1), [cS, cT] = (0, p.useState)(!0), [cU, cV] = (0, p.useState)(null), cW = (0, p.useRef)(!1), cX = (0, p.useRef)(0), cY = (0, ak.a)(() => (cX.current += 1, () => {
                cX.current -= 1
            })), cZ = (0, p.useRef)(!1), [c$, c_] = (0, p.useState)(!1), [c0, c1] = (0, p.useState)(0), [c2, c3] = (0, p.useState)(0), [c4, c5] = (0, p.useState)(!1), c6 = (0, I.b)((a, b) => {
                let c = bb ? (0, af.a)(a).height : a.contentRect.height;
                c1(c), ej("composer", c), c5(a.contentRect.width < 640);
                let d = b.querySelector(`[${M.a}]`)?.getBoundingClientRect().height ?? 0;
                c3(Math.max(0, a.contentRect.height - (0, u.b)(d, bC)))
            }), [c7, c8] = (0, p.useState)(null), [c9, da] = (0, p.useState)(!1), [db, dc] = (0, p.useState)(bn);
            db !== bn && (dc(bn), ca({}), be(!1), bg(null), cR(!1), cV(null), cD(null), cJ(!1), da(!1), cy(!1));
            let [dd, de] = (0, p.useState)(a9);
            dd !== a9 && (de(a9), cV(null), cD(null));
            let df = aJ || cU?.stage === "minimized",
                dg = (0, i.a)(+!!df),
                dh = (0, j.a)(() => 1 - dg.get()),
                di = (0, p.useCallback)(a => dg.on("change", a), [dg]),
                dj = (0, p.useCallback)(() => 1 === dg.get(), [dg]),
                dk = (0, p.useSyncExternalStore)(di, dj, () => df);
            cC?.target !== "minimized" || df || cD({
                target: cz
            });
            let {
                isCompact: dl,
                isChatCompact: dm,
                canTogglePresentation: dn
            } = (0, Y.c)({
                pendingFormId: a9,
                presentation: cz,
                forceExpanded: aF,
                hasTranscript: bm
            }), dp = !dl && !df && !aH, [dq, dr] = (0, p.useState)(!aJ);
            (aJ || dl) && !aJ !== dq && dr(!aJ);
            let ds = bb && !a7 ? !dl : a5;
            (!a7 || aH || aJ || !ds) && cI && cJ(!1);
            let [dt, du] = (0, p.useState)(() => x && dl && !aJ);
            dt && (!dl || aJ) && du(!1);
            let dv = !aJ && !df && (bb && !a7 || !dl || cG || cK || cI || bd || bJ),
                dw = ds && (a7 ? !aJ && !df : bb || dv),
                dx = a7 && dw,
                dy = bb && a7 && dl && dw && !aH && !ba && !bj && null != aY && bv?.type === "loading",
                dz = a_ && bb && !ba && !cx && bl && (bx || !dy && bv?.type === "loading"),
                dA = dl && dz,
                dB = bb && dl && !aH && !aJ && !ba,
                dC = a4 || bb,
                dD = dC || dx && "panel" === H && dl;
            (0, p.useEffect)(() => {
                let a, b = cr.current;
                if (null == b || !a7 || aH || aJ || !ds) return;
                let c = () => {
                        clearTimeout(a), a = void 0
                    },
                    d = b => {
                        "touch" !== b.pointerType && (c(), a = setTimeout(() => {
                            a = void 0, cJ(!0)
                        }, 300))
                    },
                    e = () => {
                        c(), cJ(!1)
                    },
                    f = () => {
                        document.hidden && e()
                    };
                return b.addEventListener("pointerenter", d), b.addEventListener("pointerleave", e), window.addEventListener("blur", e), document.addEventListener("visibilitychange", f), () => {
                    c(), b.removeEventListener("pointerenter", d), b.removeEventListener("pointerleave", e), window.removeEventListener("blur", e), document.removeEventListener("visibilitychange", f)
                }
            }, [bn, a7, aH, aJ, ds]);
            let dE = !aH && !dl && !aJ && !aF && !bd && !c$,
                dF = (0, p.useEffectEvent)(a => {
                    null == cr.current || null != a && ax(cr.current, a.target, bB) || (cD(null), cA("compact"))
                }),
                dG = (0, p.useEffectEvent)(() => {
                    let a = cr.current,
                        b = document.activeElement;
                    null != a && b instanceof HTMLIFrameElement && !ax(a, b, bB) && dF()
                });
            (0, p.useEffect)(() => {
                if (!dE) return;
                document.addEventListener("pointerdown", dF, !0);
                let a = !0,
                    b = () => {
                        queueMicrotask(() => {
                            a && dG()
                        })
                    };
                window.addEventListener("blur", b);
                let c = bb ? ad.c.subscribe("browser-sidebar-web-contents-pointer-down", () => dF()) : void 0;
                return () => {
                    a = !1, window.removeEventListener("blur", b), c?.(), document.removeEventListener("pointerdown", dF, !0)
                }
            }, [bb, dE]);
            let dH = bt?.type === "loading",
                dI = (0, ak.a)(() => {
                    cr.current?.focus({
                        preventScroll: !0
                    }), cF(!1), cD(null), aM(!1), cA("expanded")
                }),
                [dJ, dK] = (0, p.useState)(() => new Set),
                dL = (0, ak.a)(a => {
                    dK(b => new Set([...b, a]))
                }),
                dM = "ready" !== br.type ? br : {
                    type: "ready",
                    value: br.value.map(a => ({
                        id: a.id,
                        content: (0, d.jsx)(G, {
                            title: a.title,
                            preview: a.preview,
                            onOpen: () => {
                                a.onOpen(), dI()
                            },
                            onDismiss: bb ? () => dL(a.id) : a.onDismiss
                        })
                    }))
                },
                [dN, dO] = (0, p.useState)(dH);
            dN !== dH && (dO(dH), da(!1), cy(!1)), (0, p.useEffect)(() => {
                if (!dA || a$ || aH || aJ || dH) return;
                let a = window.setTimeout(() => cy(!0), 1e4);
                return () => window.clearTimeout(a)
            }, [bn, dA, a$, aH, aJ, dH]);
            let dP = dM;
            bb && dH && !c9 ? dP = {
                type: "ready",
                value: [{
                    id: "working",
                    content: (0, d.jsx)(G, {
                        title: aP,
                        preview: "",
                        isWorking: !0,
                        workingContent: aX,
                        onOpen: dI,
                        onDismiss: () => da(!0)
                    })
                }]
            } : bb && "ready" === dM.type && (dP = {
                ...dM,
                value: dM.value.filter(a => !dJ.has(a.id))
            }), "ready" !== dP.type && cE && cF(!1);
            let dQ = "ready" === dP.type && dP.value.length > 0 && (df ? aJ && (bb ? dk : cE) && !bd : !bb && dl),
                dR = bv?.type !== "loading" && (bv?.unread !== !0 || dQ) ? null : bv,
                dS = dH || bt?.unread === !0 && (aJ || !dQ),
                dT = (0, p.useEffectEvent)(a => {
                    if ("Escape" === a.key && !a.defaultPrevented)
                        if (a.preventDefault(), cu.current?.contains(document.activeElement) && ct.current?.focus({
                                preventScroll: !0
                            }), bb) {
                            if (dH) da(!0);
                            else if ("ready" === dP.type)
                                for (let a of dP.value) dL(a.id)
                        } else cF(!1)
                });
            (0, p.useEffect)(() => {
                if (!aH && aJ && dQ) return document.addEventListener("keydown", dT), () => document.removeEventListener("keydown", dT)
            }, [dQ, aH, aJ]);
            let dU = ds && dw && !aJ && !dy && null == aB,
                dV = bb && a7 && dU && bv?.unread === !0,
                dW = by.formatMessage({
                    id: "quickChat.running",
                    defaultMessage: "Running"
                }),
                dX = by.formatMessage({
                    id: "quickChat.unreadResponse",
                    defaultMessage: "Unread response"
                }),
                dY = dH ? dW : dX,
                dZ = cf.endsWith("left"),
                d$ = "bottom-center" === cf,
                d_ = dZ ? "left" : "right",
                d0 = cg && !df ? bL : 0,
                d1 = 46 * (null == Z) + (cg || df ? 0 : bL),
                d2 = c7 ?? ch ?? y,
                d3 = dQ && !aJ ? b_ : 0,
                d4 = (Z?.height ?? bF) - bH - (cg ? d3 + d0 : 0),
                d5 = Math.max(0, d4 - 32 - d1 - (cg ? 0 : d3)),
                d6 = null == Z ? b2 / 2 : Math.max(0, b2 - 20),
                d7 = bb && null != bU ? Math.min(d6, bU + 12) : d6,
                d8 = (c0 || 46) + (ds && dw ? 46 : 0) + (dA ? bR : 0) + 6 * !bb,
                d9 = (c0 || 46) + 46 * !!dx + (dz ? bR : 0) + 6 * !bb,
                ea = ay(d2.height, Math.min(Math.max(400, c0 + 46), d5), d5),
                eb = Math.min(dl ? d8 : Math.max(400, d8), d5),
                ec = b3 ? d7 : Math.min(al + 12, d7),
                ed = ay(dl ? d8 : d2.height, eb, d5),
                ee = (0, i.a)(ed),
                ef = (0, p.useRef)(!1),
                eg = c0 > 0,
                eh = dt && dz,
                ei = dt ? {
                    height: "auto",
                    maxHeight: d5
                } : {
                    height: ee
                };

            function ej(a, b) {
                if (!dt) return;
                let c = bT.current;
                c[a] = b, c.complete || c.composer <= 0 || dz && c.response <= 0 || (c.complete = !0, ee.jump(Math.min(d8 - (c0 || 46) + c.composer + (dA ? c.response - bR : 0), d5)), du(!1))
            }
            let ek = aH || bD || c$ || !bb && (aJ || null != cC) ? 0 : .3,
                el = ay(d2.width + 12, ec, d7),
                em = (0, W.d)(cf, {
                    height: ed,
                    width: el
                }, d4, b2, 12, d1),
                en = (0, j.a)(() => a7 && dl ? 0 : ay((ee.get() - d9) / Math.max(1, ea - d9), 0, 1)),
                eo = (0, j.a)(() => Math.max(0, ee.get() - c0 - 46 * (dx ? 1 : en.get()))),
                ep = (0, j.a)(() => 1 - en.get()),
                eq = (0, p.useEffectEvent)(() => {
                    let a;
                    if (dt) return;
                    let b = !ef.current && dl;
                    if (eg && (ef.current = !0), cK || b || 0 === ek) return void ee.jump(ed);
                    let c = () => {
                        if (bb) {
                            let a = cq.current;
                            if (null != a && a.offsetHeight !== Math.round(c0)) return void c1(a.offsetHeight)
                        }
                        let b = (0, k.a)(ee, ed, {
                            duration: ek,
                            ease: A.e
                        });
                        a = () => b.stop()
                    };
                    return bb ? l.b.update(c) : c(), () => {
                        (0, l.a)(c), a?.()
                    }
                }),
                er = bb ? c0 : null,
                es = bb ? null : eg,
                et = bb ? null : dl;
            (0, p.useLayoutEffect)(() => eq(), [ed, ek, er, es, et, dt]);
            let eu = {
                    height: Math.min(36, d5),
                    width: Math.min(36, d7)
                },
                ev = {
                    bubbleSize: eu,
                    composerWidth: el,
                    composerHorizontalInset: 12,
                    reservedDockPosition: at,
                    viewportWidth: b2,
                    viewportHeight: d4
                },
                ew = (0, W.f)(aJ ? cf : cU?.dockPosition ?? ce, at),
                ex = (0, W.d)(ew, eu, d4, b2, 0, d1),
                ey = aJ ? eu : {
                    height: ed,
                    width: el
                },
                ez = aJ ? ex : em,
                eA = aJ ? 16 : 10,
                eB = {
                    left: eA,
                    right: Math.max(eA, b2 - ey.width - eA),
                    top: d1 + eA,
                    bottom: Math.max(eA, d4 - ey.height - eA)
                };
            (0, p.useLayoutEffect)(() => {
                cm.current = null
            }, [Z, bc, bC]);
            let eC = a => {
                    if (!aq) return;
                    cm.current = null == Z ? null : cr.current?.parentElement?.getBoundingClientRect() ?? null, cn.current = bi ? av(bc, bC, bH, eu.height) : null;
                    let b = {
                        x: (0, u.b)(a.clientX - (cm.current?.left ?? 0), bC),
                        y: (0, u.b)(a.clientY - (cm.current?.top ?? 0), bC)
                    };
                    ck.current = {
                        x: b.x - ez.x - co.get(),
                        y: b.y - ez.y - cp.get()
                    }, cl.current = {
                        point: b,
                        target: null
                    }, ci.start(a)
                },
                eD = (0, W.d)(ew, {
                    height: ed,
                    width: el
                }, d4, b2, 12, d1),
                eE = ex.x - eD.x,
                eF = ex.y - eD.y,
                eG = {
                    top: eF,
                    right: el - eE - eu.width,
                    bottom: ed - eF - eu.height,
                    left: eE
                },
                eH = `inset(${eG.top}px ${eG.right}px ${eG.bottom}px ${eG.left}px round var(--floating-panel-radius))`,
                eI = (0, j.a)(() => {
                    let a = dg.get(),
                        b = ee.get() - ed,
                        c = a * (eG.top + (cg ? 0 : b)),
                        d = 6 + a * (eG.right - 6),
                        e = 6 + a * (eG.bottom + (cg ? b : 0) - 6),
                        f = 6 + a * (eG.left - 6),
                        g = "var(--radius-token-composer-single-line)",
                        h = df || bd || 0 !== a || 0 !== b ? `inset(${c}px ${d}px ${e}px ${f}px round ${g})` : "none";
                    return {
                        top: c,
                        right: d,
                        bottom: e,
                        left: f,
                        radius: g,
                        clip: h
                    }
                }),
                eJ = (0, j.a)(() => eI.get().top),
                eK = (0, j.a)(() => eI.get().right),
                eL = (0, j.a)(() => eI.get().bottom),
                eM = (0, j.a)(() => eI.get().left),
                eN = (0, j.a)(() => eI.get().radius),
                eO = (0, j.a)(() => eI.get().clip);
            (0, p.useLayoutEffect)(() => {
                if (!bb) return;
                let a = (0, k.a)(dg, +!!df, {
                    duration: .3 * !bD,
                    ease: A.e
                });
                return () => a.stop()
            }, [bb, df, dg, bD]);
            let eP = cg ? {
                    top: eF + eu.height
                } : {
                    bottom: ed - eF
                },
                eQ = (0, p.useRef)({
                    dockPosition: cf,
                    dockThreadKey: bn,
                    isMinimized: aJ
                }),
                eR = (0, p.useEffectEvent)(a => {
                    let b = (0, W.d)(a, {
                        height: ed,
                        width: el
                    }, d4, b2, 12, d1);
                    co.stop(), cp.stop(), co.jump(co.get() + b.x - em.x), cp.jump(cp.get() + b.y - em.y);
                    let c = bD ? {
                        duration: 0
                    } : ao;
                    (0, k.a)(co, 0, c), (0, k.a)(cp, 0, c)
                });
            (0, p.useLayoutEffect)(() => {
                let a = eQ.current;
                if (eQ.current = {
                        dockPosition: cf,
                        dockThreadKey: bn,
                        isMinimized: aJ
                    }, a.dockThreadKey !== bn) {
                    cj.current = !0, cW.current = !0, ci.cancel(), co.jump(0), cp.jump(0);
                    return
                }
                if (aH) {
                    co.jump(0), cp.jump(0);
                    return
                }
                a.isMinimized !== aJ && eR(a.dockPosition)
            }, [cf, bn, ci, co, cp, aH, aJ]), (0, p.useLayoutEffect)(() => () => {
                co.stop(), cp.stop()
            }, [co, cp]);
            let eS = function(a, b) {
                    let c, d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        e = {
                            ...ey,
                            left: ez.x + co.get(),
                            top: ez.y + cp.get()
                        };
                    null != Z && null == cm.current && (cm.current = cr.current?.parentElement?.getBoundingClientRect() ?? null);
                    let f = null == Z ? null : cm.current,
                        g = {
                            x: b.point.x - (0, u.b)(f?.left ?? 0, bC),
                            y: b.point.y - (0, u.b)(f?.top ?? 0, bC)
                        },
                        h = bh && !aJ ? (function(a) {
                            let {
                                bubbleSize: b,
                                composerWidth: c,
                                composerHorizontalInset: d,
                                reservedDockPosition: e,
                                viewportWidth: f,
                                viewportHeight: g
                            } = a, h = b.width + 4, i = {
                                height: b.height,
                                width: Math.max(0, Math.min(c - d, (f - 2 * (16 + h + 4)) / 3))
                            }, j = new Map;
                            for (let a of aw(e, !1, !0)) {
                                let b = (0, W.d)(a, {
                                    height: i.height,
                                    width: c
                                }, g, f, d);
                                if (j.has(b.x)) continue;
                                let {
                                    x: e,
                                    y: k
                                } = (0, W.d)(a, i, g, f), l = e;
                                "bottom-center" !== a && (l += "bottom-left" === a ? h : -h), j.set(b.x, {
                                    position: a,
                                    rect: {
                                        ...i,
                                        left: l,
                                        top: k
                                    }
                                })
                            }
                            return Array.from(j.values())
                        })(ev).find(a => {
                            let {
                                rect: b
                            } = a;
                            return g.x >= b.left && g.x <= b.left + b.width && g.y >= b.top && g.y <= b.top + b.height
                        })?.position : void 0;
                    c = bb ? h ?? (0, W.b)(e, d4, b2, aw(at, aJ, b7), 12 * !aJ, d1) : (0, W.e)({
                        ...e,
                        left: e.width >= b2 / 2 - 2 * eA ? g.x - e.width / 2 : e.left
                    }, d4, b2, aJ);
                    let i = null == at ? c : (0, W.f)(c, at),
                        j = {
                            x: !bb || bh ? Math.min(g.x, b2 - g.x) : b2 - g.x,
                            y: bb ? d4 - g.y : Math.min(g.y - d1, d4 - g.y)
                        },
                        k = (!bh || j.x >= 0 && j.y >= 0) && j.x <= 16 + eu.width && j.y <= 16 + eu.height,
                        l = () => {
                            let c = cn.current;
                            if (!bi || null == c || 0 === c.svgRect.height || !(a instanceof MouseEvent) || a.clientX < 0 || a.clientX > Math.min(c.right, window.innerWidth) || a.clientY < 0 || a.clientY > window.innerHeight) return !1;
                            let h = 20 * c.svgRect.height / 184,
                                i = c.svgRect.top + h,
                                j = c.svgRect.top + c.svgRect.height - h,
                                k = c.svgRect.left + c.svgRect.width / 2,
                                l = 8 * bC;
                            if (a.clientY < i - l || a.clientY > j + l) return !1;
                            if (a.clientX >= k - l) return !0;
                            if (aJ || b.offset.x < 8) return !1;
                            let {
                                left: m,
                                top: n
                            } = e;
                            d && (m = g.x - ck.current.x, n = g.y - ck.current.y, null != Z && (m = ay(m, eB.left, eB.right), n = ay(n, eB.top, eB.bottom)));
                            let o = (f?.left ?? 0) + (m + e.width - 6) * bC,
                                p = (f?.top ?? 0) + n * bC,
                                q = (f?.top ?? 0) + (n + e.height - 6) * bC;
                            return o >= k - l && Math.min(q, j) > Math.max(p, i)
                        };
                    if (bb && !aJ) {
                        let a = g.x < b2 / 2 ? "bottom-left" : "bottom-right",
                            b = bh && k && a !== at ? a : void 0,
                            d = cl.current;
                        if (null != d) {
                            let a = g.x - d.point.x,
                                b = g.y - d.point.y;
                            Math.hypot(a, b) >= 8 && (a >= 0 && b > 0 && b >= a ? d.target = "minimize" : a > 0 && a > 2 * Math.abs(b) ? d.target = null : (a < 0 || b < 0) && (d.target = null), d.point = g)
                        }
                        let e = g.y - ck.current.y + ey.height - d4;
                        return {
                            dockPosition: i,
                            requestedDockPosition: c,
                            isNearDock: !1,
                            shouldMinimize: null != b || null == h && "bottom-right" === i && d?.target === "minimize" && e >= .5 * ey.width,
                            isRightPaneTarget: null == h && null == b && l(),
                            bubbleDropPosition: b
                        }
                    }
                    let m = (0, W.d)(i, ey, d4, b2, 12, d1),
                        n = !aJ && "bottom-center" !== i && 16 >= Math.abs(e.left - m.x) && 16 >= Math.abs(e.top - m.y);
                    return {
                        dockPosition: i,
                        requestedDockPosition: c,
                        isNearDock: n,
                        shouldMinimize: n && k,
                        isRightPaneTarget: !k && l()
                    }
                },
                eT = (a, b) => {
                    if (!aq) return;
                    let c = b && !b7;
                    (null == as || c) && (null != bn || bb && !c) ? (0, X.c)(a6, {
                        threadKey: bn ?? null,
                        minimized: c
                    }, a, aG) : ca(b => ({
                        expanded: c ? b.expanded : a,
                        minimized: c ? (0, W.a)(a) : b.minimized
                    }))
                },
                eU = function(a, b) {
                    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ey,
                        d = (0, W.d)(cf, ey, d4, b2, 12 * !aJ, d1),
                        e = {
                            x: d.x + co.get(),
                            y: d.y + cp.get()
                        },
                        f = (0, W.d)((0, W.f)(a, at), c, d4, b2, 12 * !aJ, d1);
                    co.stop(), cp.stop(), co.jump(e.x - f.x), cp.jump(e.y - f.y), b && (0, q.flushSync)(() => {
                        eT(a, aJ)
                    });
                    let g = bb ? {
                            duration: .3,
                            ease: A.e
                        } : ao,
                        h = bD ? {
                            duration: 0
                        } : g;
                    cR(!0), Promise.all([(0, k.a)(co, 0, h), (0, k.a)(cp, 0, h)]).then(() => {
                        cR(0 !== co.get() || 0 !== cp.get())
                    })
                },
                eV = (0, p.useEffectEvent)(() => {
                    cj.current = !0, ci.cancel(), eU(cf, !1), cV(null), cD(null), be(!1), bg(null)
                });
            (0, p.useLayoutEffect)(() => {
                if (!bd) return;
                let a = a => {
                        "Escape" === a.key && (a.preventDefault(), a.stopPropagation(), eV())
                    },
                    b = () => eV();
                return window.addEventListener("keydown", a, !0), window.addEventListener("blur", b), window.addEventListener("pointercancel", b, !0), () => {
                    cj.current = !0, ci.cancel(), window.removeEventListener("keydown", a, !0), window.removeEventListener("blur", b), window.removeEventListener("pointercancel", b, !0)
                }
            }, [ci, bd]);
            let eW = () => {
                    cF(!1), cT(!bd), cV(null), cD(bb ? null : {
                        target: "minimized"
                    }), aM(!0)
                },
                eX = () => {
                    cD(null), cA(dl ? "expanded" : "compact")
                },
                eY = !aH && !aJ,
                eZ = eY && (null != aL || !ar && !dl && !aF),
                e$ = () => {
                    null != aL ? aL() : (cD(null), cA("compact"))
                },
                e_ = () => {
                    let a = cq.current;
                    return ba ? (0, P.a)(a) : a?.querySelector("[contenteditable='true']") ?? null
                },
                e0 = () => {
                    let a = bb && null == as;
                    aJ ? (0, q.flushSync)(() => {
                        cF(!1), cD(bb ? null : {
                            target: cz
                        }), aM(!1), a && cA("expanded")
                    }) : a && (cD(null), cA("expanded")), e_()?.focus({
                        preventScroll: !0
                    })
                };
            (0, L.a)("focusMainChat", e0, {
                enabled: !aH && ba,
                isActive: () => {
                    if (null == cr.current || null != cr.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                    if (ba) return aJ;
                    let a = e_();
                    if (null == a) return !1;
                    let b = a.closest("[hidden], [inert], [aria-hidden=true]");
                    return null == b || !cq.current?.contains(b) || b === cq.current
                }
            });
            let e1 = by.formatMessage(dl ? {
                    id: "quickChat.expandFloatingChat",
                    defaultMessage: "Expand floating chat"
                } : {
                    id: "quickChat.showCompactFloatingChat",
                    defaultMessage: "Show compact floating chat"
                }),
                e2 = dn ? {
                    label: e1,
                    onToggle: eX
                } : void 0,
                e3 = by.formatMessage({
                    id: "quickChat.resizeWidth",
                    defaultMessage: "Resize chat width"
                }),
                e4 = by.formatMessage({
                    id: "quickChat.resizeHeight",
                    defaultMessage: "Resize chat height"
                }),
                e5 = (0, ak.a)(() => {
                    cD(null), a7 && cA("expanded")
                }),
                e6 = (0, ak.a)(() => {
                    let a = cs.current;
                    aH || bp.isFloatingChatNavigationCurrent?.() === !1 || null == a || null != a.closest("[hidden], [inert], [aria-hidden=true]") || (cD(null), aJ && (cF(!1), aM(!1)), cB("expanded"))
                }),
                e7 = {
                    isCompact: dl,
                    canShowCompactPreview: dB,
                    isNarrow: c4,
                    isChromeRevealed: dv,
                    isHeaderVisible: dw,
                    isWorkingPreviewVisible: dy,
                    isComposerFocused: bb ? cO || cK : dv,
                    isDockedTop: cg,
                    isHidden: aH,
                    isMinimized: df,
                    shouldReduceMotion: bD,
                    onSubmitStart: bb || a7 ? e5 : () => cD(null),
                    onMessageSubmitted: aH ? void 0 : e6
                };

            function e8(a) {
                !aH && null != aE && (2 === a.button || 0 === a.button && a.ctrlKey) && a.target instanceof Element && (cr.current?.contains(a.target) || null != a.target.closest("[data-composer-overlay-floating-ui]")) && a.preventDefault()
            }

            function e9(a) {
                !a7 && a.target instanceof Element && (!cr.current?.contains(a.target) || null != a.target.closest("[data-composer-overlay-floating-ui]")) && a.stopPropagation()
            }
            let fa = Q(e7, {
                    reserveCompactSpace: dq,
                    isMoving: bd || c$ || cQ,
                    composerContentHeight: c2,
                    dockedReservePx: c0 > c2 + 6 * !!bb ? ed + 10 : 0
                }),
                fb = (0, d.jsxs)("div", {
                    ref: a => {
                        cq.current = a, c6(a)
                    },
                    className: (0, g.b)(C.a.floatingComposerInset, "mt-auto shrink-0", aq && !b3 && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", dl && cg && "[--composer-overlay-placement:bottom]"),
                    onPointerDownCapture: e8,
                    onPointerUp: a => {
                        a.target === a.currentTarget && a.currentTarget.hasPointerCapture(a.pointerId) && !cW.current && e0()
                    },
                    onContextMenu: e9,
                    children: [dC && !aJ && (!dl || dA) ? (0, d.jsx)("div", {
                        "aria-hidden": !0,
                        className: "border-t border-default"
                    }) : null, (0, d.jsx)(ai.b, {
                        value: {
                            ...bp,
                            hasComposerSurface: dD,
                            isFloatingChatSurface: !0,
                            isFloatingTranscriptOpen: !aH && !dl && !aJ,
                            floatingChatSurfaceRef: cr,
                            onFloatingDictationRowChange: cN,
                            floatingComposerPresentation: e7,
                            transcriptTarget: bP,
                            followLatestTranscript: bb ? dl : bp.followLatestTranscript
                        },
                        children: (0, d.jsx)(O.a, {
                            value: eZ ? e$ : ar ? "editor-only" : null,
                            children: (0, d.jsx)(N.a, {
                                value: {
                                    target: bN,
                                    homeBannerPlacement: "inline"
                                },
                                children: fa
                            })
                        })
                    })]
                }),
                fc = dl ? "composer" : "toolbar",
                fd = (0, d.jsx)(V.c, {
                    size: null != a8 && dl ? "iconCircle" : fc,
                    onMinimize: eW
                }),
                fe = bb || null != a8 ? null : fd;
            b = dy ? (0, d.jsx)(E.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 px-2 text-start text-sm text-secondary",
                "aria-label": e1,
                "aria-describedby": bz,
                "data-quick-chat-drag-handle": !0,
                onClick: () => {
                    eX(), e_()?.focus({
                        preventScroll: !0
                    })
                },
                children: (0, d.jsx)("span", {
                    id: bz,
                    className: "min-w-0 truncate",
                    children: aY
                })
            }) : null != aB ? aB({
                leadingControl: fe
            }) : (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-1",
                children: [fe, dV && (0, d.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    "aria-label": dX
                }), (0, d.jsx)("h2", {
                    id: bz,
                    "data-unread": dV || void 0,
                    "data-dropdown-overlay-side": "auto",
                    className: (0, g.b)("group/floating-title min-w-0 text-base font-medium text-secondary", (!bb || null == aQ) && "truncate"),
                    children: aQ ?? (bb ? (0, d.jsx)(V.b, {
                        children: (0, d.jsx)(aa.a, {
                            children: a5 ? aP : (0, d.jsx)(s.a, {
                                id: "quickChat.newChatTitle",
                                defaultMessage: "New chat"
                            })
                        })
                    }) : aP)
                }), !bb && (0, d.jsx)("div", {
                    className: "flex min-w-5 flex-1 items-center justify-end",
                    children: null != dR && (0, d.jsx)("div", {
                        className: "flex min-w-0 justify-end",
                        role: "status",
                        "aria-label": "loading" === dR.type ? dW : dX,
                        children: (0, d.jsx)(ah.a, {
                            statusState: dR
                        })
                    })
                })]
            });
            let ff = (0, d.jsxs)(T.a, {
                    value: {
                        id: bB,
                        registerOpen: a7 ? cY : void 0
                    },
                    children: [b, aE?.({
                        isCompact: dl,
                        isDragging: bd,
                        open: bJ,
                        onMinimize: eW,
                        onOpenChange: bK
                    }), null != a8 && (0, d.jsxs)("div", {
                        className: "-me-0.5 flex shrink-0 items-center",
                        children: [fd, (0, d.jsx)(V.d, {
                            disabled: aI?.openRightPaneDisabled,
                            size: dl ? "iconCircle" : "toolbar",
                            onOpen: a8
                        })]
                    }), null == a8 && bb && fd]
                }),
                fg = (0, d.jsx)("div", {
                    className: "contents",
                    onPointerDownCapture: e8,
                    onContextMenu: e9,
                    children: bb ? (0, d.jsx)(V.a, {
                        isCompact: a7 && dl,
                        isVisible: dw,
                        isDisabled: aC,
                        showDivider: !dA,
                        children: ff
                    }) : (0, d.jsx)(V.e, {
                        expandOnClick: a7,
                        animateChrome: !bD && !aJ && null == cC,
                        isChromeRevealed: dw,
                        isCompact: dl,
                        isDisabled: aC,
                        reserveSpace: a7 && ds && !dl,
                        presentationToggle: aD ? e2 : void 0,
                        children: ff
                    })
                }),
                fh = (0, d.jsx)(m.a.div, {
                    ref: w.d,
                    className: "pointer-events-none absolute",
                    style: bb ? {
                        top: ew.startsWith("top") ? eF : void 0,
                        bottom: ew.startsWith("top") ? void 0 : eG.bottom,
                        left: eE,
                        width: eu.width,
                        height: eu.height,
                        opacity: dg
                    } : {
                        inset: 0
                    },
                    "aria-hidden": !aJ,
                    "data-pip-obstacle": aJ ? bo : void 0,
                    "data-floating-chat-minimized": "",
                    animate: bb ? void 0 : {
                        opacity: +!!df
                    },
                    initial: !1,
                    inert: !aJ || void 0,
                    transition: bD ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: A.e
                    },
                    children: (0, d.jsx)(E.a, {
                        ref: ct,
                        className: (0, g.b)("absolute inset-0 m-auto touch-none", aJ && "pointer-events-auto"),
                        "aria-description": dS ? dY : void 0,
                        "aria-label": aT ?? by.formatMessage({
                            id: "quickChat.restoreFloatingChat",
                            defaultMessage: "Restore floating chat: {title}"
                        }, {
                            title: aP
                        }),
                        autoFocus: !aH && aJ && cS,
                        color: "ghostSecondary",
                        size: "composer",
                        uniform: !0,
                        onClick: a => {
                            0 !== a.detail && cW.current || e0()
                        },
                        onPointerEnter: a => {
                            bb || "touch" === a.pointerType || cF(!0)
                        },
                        onKeyDown: a => {
                            "ready" === dP.type && ("ArrowUp" === a.key || "ArrowDown" === a.key) && (a.preventDefault(), bb || (0, q.flushSync)(() => cF(!0)), cu.current?.querySelector("button")?.focus({
                                preventScroll: !0
                            }))
                        },
                        onPointerDown: a => {
                            b3 || 0 !== a.button || (cW.current = !1, a.currentTarget.setPointerCapture(a.pointerId), eC(a))
                        },
                        children: dH && null != bt && null == aR ? (0, d.jsx)(ah.a, {
                            statusState: bt,
                            size: bb ? "default" : "compact"
                        }) : (0, d.jsx)(R.a, {
                            badgeEnabled: dS,
                            children: aR ?? (0, d.jsx)(F.Pb, {})
                        })
                    }, aJ ? "minimized" : "preview")
                }),
                fi = "ready" === dP.type ? (0, d.jsx)(J, {
                    items: dP.value,
                    availableHeight: Math.max(0, (Z?.height ?? bF) - d1 - bH - (aJ ? eu.height : d8) - 32 - 12),
                    isDockedTop: cg,
                    shouldReduceMotion: bD
                }) : null;
            !bb && (c = an, df ? c = eH : null != cC || bd || (c = "none"));
            let fj = (0, d.jsxs)(D, {
                contentRef: cs,
                allowCompactResize: !0,
                animateSurface: null != cC || !aJ,
                elevateComposer: a7 && !df,
                contentStyle: bb ? {
                    ...ei,
                    borderRadius: eN
                } : void 0,
                surfaceStyle: bb ? {
                    top: eJ,
                    right: eK,
                    bottom: eL,
                    left: eM,
                    borderRadius: eN
                } : void 0,
                currentSize: {
                    height: ed,
                    width: el
                },
                heightLabel: e4,
                resizeFromCenter: bb && d$,
                fixedHorizontalEdge: bb && !d$ ? d_ : void 0,
                isCompact: dl,
                isCompactChromeRevealed: ds && dw,
                isMinimized: df,
                keepSurfaceInset: !0,
                maximumSize: {
                    height: d5,
                    width: d7
                },
                minimizedContent: null == aS ? fh : (0, d.jsx)(S.a, {
                    disableNative: !0,
                    items: aS,
                    children: (0, d.jsx)("div", {
                        className: "contents",
                        children: fh
                    })
                }),
                minimizedSurfaceBounds: eG,
                minimumSize: {
                    height: eb,
                    width: ec
                },
                prefersCompactPresentation: !0,
                resizable: b4,
                background: df || bb ? "panel" : H,
                sectionRef: cr,
                sectionProps: {
                    ref: e,
                    "aria-label": dU ? void 0 : aP,
                    "aria-labelledby": dU ? bz : void 0,
                    "aria-modal": null != Z && void 0,
                    animate: {
                        ...f ? {
                            opacity: +!!eg,
                            translateY: 8 * (!eg && !bD)
                        } : {},
                        scale: bb || cU?.stage !== "approaching" ? 1 : .95
                    },
                    "data-quick-chat-drag-handle": !bb && dl || void 0,
                    "data-pip-obstacle": aJ ? void 0 : bo,
                    "data-state": "open",
                    drag: b4,
                    dragConstraints: null == Z ? void 0 : {
                        left: eB.left - ez.x,
                        right: eB.right - ez.x,
                        top: eB.top - ez.y,
                        bottom: eB.bottom - ez.y
                    },
                    dragElastic: null == Z ? void 0 : 0,
                    dragControls: b4 ? ci : void 0,
                    dragListener: !1,
                    dragMomentum: !1,
                    initial: !!f && !bD && {
                        opacity: 0,
                        translateY: 8
                    },
                    role: null == Z ? "dialog" : "region",
                    tabIndex: -1,
                    style: {
                        ...{
                            "--quick-chat-expansion": bb ? en : void 0
                        },
                        ...ei,
                        width: el,
                        top: cg ? d1 + 10 : "auto",
                        bottom: cg ? "auto" : 10 + bH,
                        left: d$ ? "50%" : "auto",
                        right: "auto",
                        ...!d$ && {
                            [d_]: 10
                        },
                        translate: d$ ? "-50% 0" : void 0,
                        x: co,
                        y: cp,
                        originX: "bottom-center" === ew ? .5 : Number(ew.endsWith("right")),
                        originY: +!ew.startsWith("top")
                    },
                    transition: {
                        duration: ek,
                        ease: A.e,
                        scale: {
                            duration: .3 * !bD,
                            ease: A.e
                        }
                    },
                    onBlurCapture: a => {
                        if (!(aH || ax(a.currentTarget, a.relatedTarget, bB))) {
                            if (null == a.relatedTarget) {
                                let b = a.currentTarget;
                                queueMicrotask(() => {
                                    b.ownerDocument.hasFocus() && ax(b, b.ownerDocument.activeElement, bB) || (cH(!1), cP(!1), cF(!1))
                                });
                                return
                            }
                            cH(!1), cP(!1), cF(!1), (!bb || a7) && dE && null == a.target.closest("[inert]") && (cD(null), cA("compact"))
                        }
                    },
                    onClick: a => {
                        if (!(a7 && (0 !== a.button || a.ctrlKey) || aJ || cW.current || a.detail > 0 && cZ.current || a.defaultPrevented || !(a.target instanceof Element) || !a.currentTarget.contains(a.target) || a.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                            if (dl && (a.target === a.currentTarget || cq.current?.contains(a.target))) return void e0();
                            if (a7) {
                                if (!ds || !dn) return;
                                dl && !a.currentTarget.contains(document.activeElement) && a.currentTarget.focus({
                                    preventScroll: !0
                                }), cD(null), cA("expanded");
                                return
                            }
                            if (bb) {
                                dl && dn && e0();
                                return
                            }
                            ds && dn && a.target.closest("header[data-quick-chat-drag-handle]") && (dl && !a.currentTarget.contains(document.activeElement) && a.currentTarget.focus({
                                preventScroll: !0
                            }), eX())
                        }
                    },
                    onDoubleClick: a => {
                        bb && !aJ && !cW.current && !a.defaultPrevented && a.target instanceof Element && a.target.closest("header[data-quick-chat-drag-handle]") && !a.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (cD(null), cA("expanded"), c8(null), _(a6, y, {
                            dockPosition: "bottom-right",
                            hasConversation: aG
                        }), eU("bottom-right", !0, {
                            height: ay(y.height, eb, d5),
                            width: ay(y.width + 12, ec, d7)
                        }))
                    },
                    onClickCapture: a => {
                        !aH && cW.current && a.detail > 0 && (a.preventDefault(), a.stopPropagation())
                    },
                    onDrag: (a, b) => {
                        let c = eS(a, b),
                            d = c.bubbleDropPosition ?? (bb ? ce : c.dockPosition);
                        if (bh && (c.isRightPaneTarget ? bg("right-pane") : c.shouldMinimize ? bg(`bubble-${d}`) : bg(aJ ? `bubble-${c.dockPosition}` : `composer-${c.dockPosition}`)), !c.isRightPaneTarget && null != c.dockPosition && (bb ? c.shouldMinimize : c.isNearDock)) {
                            let a = c.shouldMinimize ? "minimized" : "approaching";
                            (cU?.stage !== a || cU.dockPosition !== d) && (cV({
                                dockPosition: d,
                                stage: a
                            }), (c.shouldMinimize || cU?.stage === "minimized") && cD(bb ? null : {
                                target: c.shouldMinimize ? "minimized" : cz
                            }))
                        } else null != cU && "restored" !== cU.stage && (cV({
                            ...cU,
                            stage: "restored"
                        }), "minimized" === cU.stage && cD(bb ? null : {
                            target: cz
                        }))
                    },
                    onDragEnd: (a, b) => {
                        if (cj.current) return;
                        bg(null);
                        let c = eS(a, b, !0);
                        if (c.isRightPaneTarget) {
                            co.jump(0), cp.jump(0), cV(null), cD(null), be(!1), a8?.();
                            return
                        }
                        c.shouldMinimize ? (0, q.flushSync)(() => {
                            null != c.bubbleDropPosition ? eT(c.bubbleDropPosition, !0) : bb && b7 || eT(bb ? ce : c.requestedDockPosition, !0), eW()
                        }) : (eU(c.requestedDockPosition, !0), null != cU && "restored" !== cU.stage && (cV({
                            ...cU,
                            stage: "restored"
                        }), "minimized" === cU.stage && cD(bb ? null : {
                            target: cz
                        }))), be(!1)
                    },
                    onDragStart: () => {
                        cF(!1), bg(null), cj.current = !1, cW.current = !0, be(!0), co.stop(), cp.stop()
                    },
                    onFocusCapture: a => {
                        if (a.currentTarget.contains(a.target) && null != a.target.closest("[data-composer-input], [data-codex-composer-request]")) {
                            (!bb || a7) && cH(!0), cP(!0);
                            let b = "[data-dictation-button], [data-dictation-recording-controls]";
                            (a7 ? ds && dn : bb) && null == as && !a.target.closest(b) && !(a.relatedTarget instanceof Element && a.relatedTarget.closest(b)) && !cK && null == cM.current && (cD(null), cA("expanded"))
                        } else a.currentTarget.contains(a.target) && !cq.current?.contains(a.target) && (cP(!1), a7 && a.target.closest("header[data-quick-chat-drag-handle]") && cH(!0))
                    },
                    onKeyDown: a => {
                        if (!eY || "Escape" !== a.key || a.defaultPrevented || (0, ac.a)(a)) return;
                        let b = eZ && !a.repeat;
                        !b && (!ar || a.altKey || a.ctrlKey || a.metaKey || a.shiftKey) || (a.preventDefault(), a.stopPropagation(), b && e$())
                    },
                    onKeyDownCapture: a => {
                        aH || "Escape" !== a.key || (cW.current = !0, ci.cancel())
                    },
                    onPointerDownCapture: a => {
                        if (aH || (cW.current = !1, cZ.current = cX.current > 0 && a.target instanceof Element && null != a.target.closest("header[data-quick-chat-drag-handle]"), b3 || 0 !== a.button || a.ctrlKey || !(a.target instanceof Element))) return;
                        let b = a.target.closest("[data-quick-chat-drag-handle]"),
                            c = a.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                            d = cq.current,
                            e = a.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                        if (aq && null != e && d?.contains(e) && (c === e || a.target.contains(e))) b = d;
                        else if (null == b || null != c && c !== b) return;
                        a.preventDefault(), b.setPointerCapture(a.pointerId), eC(a)
                    },
                    onPointerLeave: () => {
                        cu.current?.contains(document.activeElement) || cF(!1)
                    }
                },
                shouldReduceMotion: bD,
                variant: null == Z ? "floating" : "content",
                verticalResizeEdge: cg ? "bottom" : "top",
                widthLabel: e3,
                onResize: (a, b) => {
                    let c = bb && d$ ? 0 : (0, W.c)(cf, a, {
                            height: ed,
                            width: el
                        }, co.get(), b.width, d4, b2, 12),
                        d = em.y + cp.get(),
                        e = (0, W.d)(cf, b, d4, b2, 12, d1),
                        f = ay(d + (cg ? 0 : ed - b.height), d1 + 10, d4 - b.height - 10);
                    co.stop(), cp.stop(), (0, q.flushSync)(() => {
                        c8({
                            height: dl ? d2.height : b.height,
                            width: b.width - 12
                        })
                    }), co.jump(c), cp.jump(f - e.y)
                },
                onResizeEnd: a => {
                    _(a6, {
                        height: dl ? d2.height : a.height,
                        width: a.width - 12
                    }, {
                        dockPosition: cf,
                        hasConversation: aG
                    }), eU(cf, !1, a)
                },
                onResizingChange: a => {
                    c_(a), a && (cD(null), co.stop(), cp.stop())
                },
                children: [!bb && dQ && "ready" === dP.type ? (0, d.jsx)("div", {
                    ref: (0, B.a)(cu, b1, w.d),
                    className: (0, g.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !aJ && (cg ? "top-full" : "bottom-full"), cg ? "pt-3" : "pb-3"),
                    "data-pip-obstacle": bo,
                    onClickCapture: () => {
                        (aJ ? ct.current : cr.current)?.focus({
                            preventScroll: !0
                        }), cH(!1)
                    },
                    style: aJ ? eP : void 0,
                    children: fi
                }) : null, (0, d.jsx)(n.a, {
                    initial: !1,
                    children: bb && dQ ? (0, d.jsx)(m.a.div, {
                        initial: {
                            opacity: 0,
                            y: 8 * !bD
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 8 * !bD
                        },
                        transition: {
                            duration: .3 * !bD,
                            ease: A.e
                        },
                        ref: (0, B.a)(cu, b1, w.d),
                        className: (0, g.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !aJ && (cg ? "top-full" : "bottom-full"), aJ && (cg ? "pt-1" : "pb-1")),
                        "data-pip-obstacle": "quick-chat",
                        onClickCapture: () => {
                            (aJ ? ct.current : cr.current)?.focus({
                                preventScroll: !0
                            }), cH(!1), cP(!1)
                        },
                        style: aJ ? eP : void 0,
                        children: aJ ? (0, d.jsx)(v.c, {
                            variant: "notice",
                            children: fi
                        }) : fi
                    }, "response-preview") : null
                }), (0, d.jsx)("div", {
                    ref: bZ,
                    className: (0, g.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", cg ? "top-full pt-2" : "bottom-full"),
                    hidden: df
                }), (0, d.jsx)("div", {
                    ref: b$,
                    className: (0, g.b)(C.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", 0 === d0 && "pt-2", cg ? "w-full" : "w-80", d$ && "left-1/2 -translate-x-1/2", !d$ && (dZ ? "left-0" : "right-0"), df && bd && "invisible"),
                    style: {
                        marginTop: d0
                    },
                    "data-pip-obstacle": bo,
                    children: az
                }), (0, d.jsxs)(m.a.div, {
                    "aria-hidden": aJ,
                    animate: bb ? void 0 : {
                        clipPath: c,
                        opacity: +!df
                    },
                    className: (0, g.b)("relative z-0 flex min-h-0 flex-1 flex-col", !aJ && "pointer-events-auto"),
                    "data-floating-chat-surface": !0,
                    "data-floating-chat-fit-compact": dq || void 0,
                    "data-floating-chat-dock-position": cf,
                    style: bb ? {
                        clipPath: eO,
                        opacity: dh,
                        paddingTop: dt && dw ? 46 : void 0
                    } : void 0,
                    initial: !1,
                    inert: !!aJ || void 0,
                    transition: bD || !bb && null == cC ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: A.e
                    },
                    onAnimationComplete: a => {
                        cC?.target === (df ? "minimized" : cz) && "object" == typeof a && "clipPath" in a && a.clipPath === (df ? eH : an) && cD(a => a === cC ? null : a)
                    },
                    children: [!bb && !ds && (0, d.jsx)("div", {
                        className: (0, g.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", cg ? "top-full pt-1" : "bottom-full pb-1"),
                        children: (0, d.jsx)(V.c, {
                            standalone: !0,
                            size: fc,
                            onMinimize: eW
                        })
                    }), (bb || ds) && (aE?.({
                        contextMenuTrigger: fg,
                        isCompact: dl,
                        isDragging: bd,
                        onMinimize: eW
                    }) ?? fg), (0, d.jsxs)("div", {
                        className: (0, g.b)("relative flex min-h-0 flex-1 flex-col", dl && "justify-end"),
                        children: [(0, d.jsx)(ai.b, {
                            value: {
                                ...bp,
                                isFloatingChatSurface: !0,
                                isFloatingTranscriptOpen: dp,
                                followLatestTranscript: bb ? dl : bp.followLatestTranscript
                            },
                            children: (0, d.jsxs)(m.a.div, {
                                className: bb ? (0, g.b)("overflow-hidden", eh ? "relative flex min-h-0 flex-col justify-end" : "absolute inset-x-0") : "contents",
                                style: bb && !eh ? {
                                    bottom: c0,
                                    height: eo
                                } : void 0,
                                children: [dz && (0, d.jsx)(m.a.div, {
                                    className: (0, g.b)("pointer-events-none px-4 py-3 text-sm text-default", eh ? "relative mx-(--floating-panel-inset) shrink-0" : "absolute inset-x-(--floating-panel-inset) bottom-0"),
                                    id: bA,
                                    "aria-hidden": bx || !dl,
                                    style: {
                                        opacity: ep
                                    },
                                    ref: bX,
                                    children: bx ? (0, d.jsx)("span", {
                                        className: "line-clamp-2 wrap-anywhere select-none",
                                        dir: "auto",
                                        children: bw
                                    }) : aX ?? (0, d.jsx)(s.a, {
                                        id: "quickChat.responseWorking",
                                        defaultMessage: "Working\u2026"
                                    })
                                }), (0, d.jsxs)(m.a.div, {
                                    ref: bQ,
                                    "aria-hidden": dl,
                                    className: (0, g.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", !bb && (dl ? "hidden" : "flex"), bb && "absolute inset-x-0 bottom-0 flex", bb && "overflow-hidden"),
                                    inert: dl,
                                    style: bb ? {
                                        height: Math.max(0, ea - 46 - c0),
                                        opacity: dl ? 0 : en
                                    } : void 0,
                                    children: [bl && (!dm || bb) ? a1?.(() => {
                                        cD(null), cA("compact")
                                    }, dp) : null, !bl && (0, d.jsx)(n.a, {
                                        initial: !1,
                                        children: (bb || !dl) && null != bk && (0, d.jsx)(m.a.div, {
                                            className: "flex min-h-0 flex-1 flex-col",
                                            initial: !bb && {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: ek,
                                                ease: A.e
                                            },
                                            children: bk
                                        }, "empty-state")
                                    })]
                                }), bb && dl && dz && (0, d.jsx)(E.a, {
                                    unstyled: !0,
                                    focusRing: "inset",
                                    className: "absolute inset-0",
                                    "aria-label": e1,
                                    "aria-describedby": bA,
                                    "data-quick-chat-drag-handle": !0,
                                    onClick: e0
                                })]
                            })
                        }), aE?.({
                            contextMenuTrigger: fb,
                            isCompact: dl,
                            isDragging: bd,
                            onMinimize: eW
                        }) ?? fb]
                    })]
                }), aA]
            });
            return (0, d.jsxs)(T.a, {
                value: {
                    id: bB
                },
                children: [bb && (0, d.jsx)("div", {
                    ref: bW,
                    "aria-hidden": !0,
                    className: (0, g.b)(aj.a, "pointer-events-none invisible absolute")
                }), bh && bd && null != bf && (0, d.jsx)(au, {
                    activeIndicator: bf,
                    fixed: null == Z,
                    isMinimized: aJ,
                    rightPaneTarget: bi ? bc : null,
                    rightPaneGeometryRef: cn,
                    footerHeight: bH,
                    bubbleHeight: eu.height,
                    reservedDockPosition: at,
                    viewportWidth: b2,
                    viewportHeight: d4
                }), fj]
            })
        }
        let as = "pointer-events-none fill-none stroke-blue/40 [stroke-width:4px] data-active:stroke-blue data-active:[stroke-width:5px] motion-safe:transition-[stroke,stroke-width,scale] motion-safe:duration-basic motion-safe:ease-enter-snappy data-active:scale-[1.15]",
            at = {
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

        function au(a) {
            let b, c, h, i, j, k = (0, e.c)(29),
                {
                    activeIndicator: l,
                    fixed: m,
                    isMinimized: n,
                    rightPaneTarget: o,
                    rightPaneGeometryRef: q,
                    footerHeight: r,
                    bubbleHeight: s,
                    reservedDockPosition: t,
                    viewportWidth: v,
                    viewportHeight: w
                } = a,
                x = void 0 !== m && m,
                y = void 0 !== n && n,
                z = void 0 === o ? null : o,
                A = void 0 === r ? 0 : r,
                B = void 0 === s ? 36 : s,
                C = (0, u.c)(),
                D = (0, p.useRef)(null);
            if (k[0] !== B || k[1] !== A || k[2] !== q || k[3] !== z || k[4] !== C ? (b = () => {
                    let a = D.current;
                    if (null == z || null == a) return;
                    let b = q?.current,
                        c = (0, f.b)(z, null, () => {
                            let c = b ?? av(z, C, A, B);
                            b = void 0, null != q && (q.current = c), a.style.left = `${(0,u.b)(c.svgRect.left,C)}px`, a.style.top = `${(0,u.b)(c.svgRect.top,C)}px`, a.style.width = `${(0,u.b)(c.svgRect.width,C)}px`, a.style.height = `${(0,u.b)(c.svgRect.height,C)}px`
                        }, {
                            ancestorScroll: !1,
                            ancestorResize: !1
                        });
                    return () => {
                        c(), null != q && (q.current = null)
                    }
                }, c = [B, A, q, z, C], k[0] = B, k[1] = A, k[2] = q, k[3] = z, k[4] = C, k[5] = b, k[6] = c) : (b = k[5], c = k[6]), (0, p.useLayoutEffect)(b, c), k[7] !== l || k[8] !== x || k[9] !== y || k[10] !== t || k[11] !== z || k[12] !== w || k[13] !== v || k[14] !== C) {
                let a, b = aw(t, y, !0);
                k[17] !== l || k[18] !== z || k[19] !== C ? (h = null != z && (0, d.jsx)(Q.a, {
                    container: z.ownerDocument.body,
                    children: (0, d.jsx)("div", {
                        ref: D,
                        "aria-hidden": !0,
                        className: "pointer-events-none fixed z-50",
                        style: {
                            zoom: C
                        },
                        children: (0, d.jsx)("svg", {
                            className: (0, g.b)(as, "size-full"),
                            "data-floating-chat-drop-indicator": "right-pane",
                            "data-active": "right-pane" === l || void 0,
                            "data-active-drop-target": "right-pane" === l ? "right-pane" : void 0,
                            viewBox: "0 0 32 184",
                            strokeLinecap: "round",
                            children: (0, d.jsx)("path", {
                                d: "M 16 20 v 144"
                            })
                        })
                    })
                }), k[17] = l, k[18] = z, k[19] = C, k[20] = h) : h = k[20], k[21] !== l || k[22] !== x || k[23] !== w || k[24] !== v ? (a = a => {
                    let b = l?.endsWith(a) === !0,
                        c = (v - 40) / 2;
                    "bottom-left" === a ? c = 11 : "bottom-right" === a && (c = v - 11 - 40);
                    let e = at[a];
                    return (0, d.jsx)("svg", {
                        "aria-hidden": !0,
                        className: (0, g.b)(as, "size-10 z-20 data-active:z-40", x ? "fixed" : "absolute", e.className),
                        "data-floating-chat-drop-indicator": a,
                        "data-active": b || void 0,
                        "data-active-drop-target": b ? l : void 0,
                        style: {
                            left: c,
                            top: w - 40 - 11
                        },
                        viewBox: "0 0 40 40",
                        strokeLinecap: "round",
                        children: (0, d.jsx)("path", {
                            d: e.path
                        })
                    }, a)
                }, k[21] = l, k[22] = x, k[23] = w, k[24] = v, k[25] = a) : a = k[25], i = al.filter(a => b.includes(a)).map(a), k[7] = l, k[8] = x, k[9] = y, k[10] = t, k[11] = z, k[12] = w, k[13] = v, k[14] = C, k[15] = h, k[16] = i
            } else h = k[15], i = k[16];
            return k[26] !== h || k[27] !== i ? (j = (0, d.jsxs)(d.Fragment, {
                children: [h, i]
            }), k[26] = h, k[27] = i, k[28] = j) : j = k[28], j
        }

        function av(a, b, c, d) {
            let e = a.getBoundingClientRect(),
                f = Math.max(0, e.height - (c + 16 + d) * b),
                g = Math.min(184 * b, f),
                h = 32 * b;
            return {
                right: e.right,
                svgRect: {
                    left: e.right - 16 * b - h / 2,
                    top: e.top + (f - g) / 2,
                    width: h,
                    height: g
                }
            }
        }

        function aw(a, b, c) {
            let d = al;
            return b && (d = c ? am : ["bottom-right"]), Array.from(new Set(d.map(b => (0, W.f)(b, a))))
        }

        function ax(a, b, c) {
            return b instanceof Node && (a.contains(b) || b instanceof Element && (null != b.closest("[data-composer-overlay-floating-ui], [data-content-search-bar], [data-composer-focus-target]") || null != b.closest("[data-floating-chat-annotation-layer]") || b.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === c))
        }

        function ay(a, b, c) {
            return Math.max(b, Math.min(a, c))
        }

        function az() {
            return {
                width: window.visualViewport?.width ?? window.innerWidth,
                height: window.visualViewport?.height ?? window.innerHeight
            }
        }
    }),
    eeV6: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("IPUh"),
            h = c("Q840"),
            i = c("Wf1j"),
            j = c("QcW8"),
            k = c("Sm6l"),
            l = c("HOLv"),
            m = c("syEl"),
            n = c("V8uZ"),
            o = c("IBKv"),
            p = c("F83R");
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, h, i = (0, e.c)(13),
                    {
                        children: j,
                        isCompact: k,
                        isVisible: l,
                        isDisabled: m,
                        showDivider: n
                    } = a,
                    o = void 0 !== k && k,
                    p = !l || !!m || void 0,
                    q = o ? Number(l) : "var(--quick-chat-expansion, 1)";
                i[0] !== q ? (b = {
                    opacity: q
                }, i[0] = q, i[1] = b) : b = i[1];
                let r = !l || !!m || void 0,
                    s = o && "border-b",
                    t = o && (n ? "border-default" : "border-transparent");
                return i[2] !== s || i[3] !== t ? (c = (0, f.b)("flex h-toolbar cursor-interaction touch-none items-center justify-between px-2 select-none", s, t), i[2] = s, i[3] = t, i[4] = c) : c = i[4], i[5] !== j || i[6] !== c ? (g = (0, d.jsx)("div", {
                    className: c,
                    children: j
                }), i[5] = j, i[6] = c, i[7] = g) : g = i[7], i[8] !== p || i[9] !== b || i[10] !== r || i[11] !== g ? (h = (0, d.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden floating-chat-header",
                    "aria-hidden": p,
                    style: b,
                    "data-quick-chat-drag-handle": !0,
                    inert: r,
                    children: g
                }), i[8] = p, i[9] = b, i[10] = r, i[11] = g, i[12] = h) : h = i[12], h
            },
            b: function(a) {
                let b, c = (0, e.c)(2),
                    {
                        children: f
                    } = a;
                return c[0] !== f ? (b = (0, d.jsx)("span", {
                    className: "flex button-toolbar max-w-full min-w-0 items-center gap-2 border border-transparent py-0 text-sm leading-[18px] font-normal",
                    children: f
                }), c[0] = f, c[1] = b) : b = c[1], b
            },
            c: function(a) {
                let b, c, f, g, h = (0, e.c)(11),
                    {
                        size: j,
                        onMinimize: m,
                        standalone: n
                    } = a,
                    p = void 0 !== n && n,
                    q = (0, i.a)();
                h[0] !== q ? (b = q.formatMessage({
                    id: "quickChat.minimize",
                    defaultMessage: "Minimize chat"
                }), h[0] = q, h[1] = b) : b = h[1];
                let r = p ? "outlineSurface" : "ghostSecondary";
                return h[2] !== p ? (c = a => {
                    p && a.preventDefault()
                }, h[2] = p, h[3] = c) : c = h[3], h[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, d.jsx)(l.a, {
                    "aria-hidden": !1,
                    asset: o.a
                }), h[4] = f) : f = h[4], h[5] !== m || h[6] !== j || h[7] !== b || h[8] !== r || h[9] !== c ? (g = (0, d.jsx)(k.a, {
                    "aria-label": b,
                    color: r,
                    radius: "full",
                    size: j,
                    uniform: !0,
                    onClick: m,
                    onPointerDown: c,
                    children: f
                }), h[5] = m, h[6] = j, h[7] = b, h[8] = r, h[9] = c, h[10] = g) : g = h[10], g
            },
            d: function(a) {
                let b, c, f, g = (0, e.c)(10),
                    {
                        disabled: n,
                        onOpen: o,
                        size: q
                    } = a,
                    r = (0, i.a)();
                if ((0, h.z)(j.A)) return null;
                g[0] !== r ? (b = r.formatMessage({
                    id: "quickChat.dock.openInRightPanel",
                    defaultMessage: "Open chat in right panel"
                }), g[0] = r, g[1] = b) : b = g[1];
                let s = b;
                return g[2] !== n || g[3] !== s || g[4] !== o || g[5] !== q ? (c = a => (0, d.jsx)(k.a, {
                    ...a,
                    "aria-label": s,
                    color: "ghostSecondary",
                    disabled: n,
                    radius: "full",
                    size: q,
                    uniform: !0,
                    onClick: o,
                    children: (0, d.jsx)(l.a, {
                        className: "rotate-180",
                        asset: p.a
                    })
                }), g[2] = n, g[3] = s, g[4] = o, g[5] = q, g[6] = c) : c = g[6], g[7] !== s || g[8] !== c ? (f = (0, d.jsx)(m.b, {
                    content: s,
                    describeTrigger: !1,
                    children: c
                }), g[7] = s, g[8] = c, g[9] = f) : f = g[9], f
            },
            e: function(a) {
                let b, c, h, i, j, k, l, m = (0, e.c)(28),
                    {
                        animateChrome: o,
                        expandOnClick: p,
                        children: q,
                        isChromeRevealed: r,
                        isCompact: s,
                        isDisabled: t,
                        presentationToggle: u,
                        reserveSpace: v
                    } = a,
                    w = void 0 !== p && p,
                    x = !s && "shrink-0";
                m[0] !== x ? (b = (0, f.b)("floating-chat-header relative min-h-0 overflow-hidden", x), m[0] = x, m[1] = b) : b = m[1];
                let y = !r || !!t || void 0,
                    z = r || v ? 46 : 0,
                    A = +!!r;
                m[2] !== z || m[3] !== A ? (c = {
                    height: z,
                    opacity: A
                }, m[2] = z, m[3] = A, m[4] = c) : c = m[4];
                let B = !r || !!t || void 0;
                m[5] !== o || m[6] !== w ? (h = o ? {
                    duration: .3,
                    ease: n.e,
                    ...w ? {
                        opacity: {
                            duration: 0
                        }
                    } : {}
                } : {
                    duration: 0
                }, m[5] = o, m[6] = w, m[7] = h) : h = m[7], m[8] !== s || m[9] !== u ? (i = null != u ? (0, d.jsx)("button", {
                    className: "pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    "aria-label": u.label,
                    "aria-expanded": !s,
                    type: "button",
                    onClick: u.onToggle
                }) : null, m[8] = s, m[9] = u, m[10] = i) : i = m[10];
                let C = !w && null != u && s && "cursor-n-resize",
                    D = !w && null != u && !s && "cursor-s-resize",
                    E = (w || null == u) && "cursor-interaction",
                    F = s && "mx-1.5 border-b border-default px-2",
                    G = !s && "px-3";
                return m[11] !== C || m[12] !== D || m[13] !== E || m[14] !== F || m[15] !== G ? (j = (0, f.b)("flex h-toolbar touch-none select-none items-center justify-between", C, D, E, F, G), m[11] = C, m[12] = D, m[13] = E, m[14] = F, m[15] = G, m[16] = j) : j = m[16], m[17] !== q || m[18] !== j ? (k = (0, d.jsx)("div", {
                    className: j,
                    children: q
                }), m[17] = q, m[18] = j, m[19] = k) : k = m[19], m[20] !== i || m[21] !== k || m[22] !== b || m[23] !== y || m[24] !== c || m[25] !== B || m[26] !== h ? (l = (0, d.jsxs)(g.a.header, {
                    className: b,
                    "aria-hidden": y,
                    animate: c,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: B,
                    transition: h,
                    children: [i, k]
                }), m[20] = i, m[21] = k, m[22] = b, m[23] = y, m[24] = c, m[25] = B, m[26] = h, m[27] = l) : l = m[27], l
            }
        })
    }),
    sArP: (function(a, b, c) {
        c.d(b, {
            a: () => m
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("FHYD"),
            g = c("on57"),
            h = c("zd8w"),
            i = c("wD9O");

        function j(a) {
            let b, c, f, j, l, m, n, o, p, q = (0, e.c)(35),
                {
                    edge: r,
                    getCurrentSize: s,
                    maximumSize: t,
                    resizeFromCenter: u,
                    minimumSize: v,
                    onResizeEnd: w,
                    onResizingChange: x,
                    setSize: y,
                    verticalEdge: z
                } = a,
                A = void 0 === r ? "left" : r,
                B = void 0 !== u && u,
                C = void 0 === z ? "top" : z,
                D = (0, i.c)(),
                E = (0, h.useRef)(null);
            q[0] !== A || q[1] !== t || q[2] !== v || q[3] !== B || q[4] !== y || q[5] !== C || q[6] !== D ? (b = a => {
                let b = E.current;
                if (null == b || b.pointerId !== a.pointerId) return;
                a.preventDefault();
                let c = {
                    height: k(b.startSize.height + ("top" === C ? -1 : 1) * ((0, i.b)(a.clientY, D) - b.startPointer.y), v.height, t.height),
                    width: k(b.startSize.width + (B ? 2 : 1) * ("left" === A ? -1 : 1) * ((0, i.b)(a.clientX, D) - b.startPointer.x), v.width, t.width)
                };
                b.didMove || (b.didMove = c.height !== b.startSize.height || c.width !== b.startSize.width), b.lastSize = c, y(c)
            }, q[0] = A, q[1] = t, q[2] = v, q[3] = B, q[4] = y, q[5] = C, q[6] = D, q[7] = b) : b = q[7];
            let F = b;
            q[8] !== w || q[9] !== x ? (c = (a, b) => {
                let c = E.current;
                c?.pointerId === a.pointerId && (E.current = null, x?.(!1), b && c.didMove && w?.(c.lastSize))
            }, q[8] = w, q[9] = x, q[10] = c) : c = q[10];
            let G = c,
                H = "top" === C ? "top-0" : "bottom-0",
                I = "left" === A ? "left-0" : "right-0",
                J = "left" === A == ("top" === C) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return q[11] !== H || q[12] !== I || q[13] !== J ? (f = (0, g.b)("group absolute z-50 flex size-4 touch-none select-none", H, I, J), q[11] = H, q[12] = I, q[13] = J, q[14] = f) : f = q[14], q[15] !== G ? (j = a => {
                G(a, !1)
            }, q[15] = G, q[16] = j) : j = q[16], q[17] !== F || q[18] !== G ? (l = a => {
                F(a), G(a, !0)
            }, q[17] = F, q[18] = G, q[19] = l) : l = q[19], q[20] !== s || q[21] !== x || q[22] !== D ? (m = a => {
                if (0 !== a.button) return;
                a.preventDefault(), a.currentTarget.setPointerCapture?.(a.pointerId);
                let b = s();
                E.current = {
                    didMove: !1,
                    lastSize: b,
                    pointerId: a.pointerId,
                    startPointer: {
                        x: (0, i.b)(a.clientX, D),
                        y: (0, i.b)(a.clientY, D)
                    },
                    startSize: b
                }, x?.(!0)
            }, q[20] = s, q[21] = x, q[22] = D, q[23] = m) : m = q[23], q[24] !== F || q[25] !== G ? (n = a => {
                F(a), G(a, !0)
            }, q[24] = F, q[25] = G, q[26] = n) : n = q[26], q[27] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, d.jsx)("div", {
                className: "pointer-events-none m-auto h-px w-2 rotate-45 bg-text/25 opacity-0 group-hover:opacity-100 group-active:opacity-100"
            }), q[27] = o) : o = q[27], q[28] !== F || q[29] !== j || q[30] !== l || q[31] !== m || q[32] !== n || q[33] !== f ? (p = (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: f,
                onLostPointerCapture: j,
                onPointerCancel: l,
                onPointerDown: m,
                onPointerMove: F,
                onPointerUp: n,
                children: o
            }), q[28] = F, q[29] = j, q[30] = l, q[31] = m, q[32] = n, q[33] = f, q[34] = p) : p = q[34], p
        }

        function k(a, b, c) {
            return Math.min(Math.max(a, b), c)
        }
        let l = ["left", "right"];

        function m(a) {
            let b, c, g, h, i = (0, e.c)(43),
                {
                    currentSize: k,
                    defaultSize: m,
                    extendIntoToolbar: n,
                    fixedHorizontalEdge: o,
                    resizeFromCenter: p,
                    heightLabel: q,
                    maximumSize: r,
                    minimumSize: s,
                    onResize: t,
                    onResizeEnd: u,
                    onResizingChange: v,
                    verticalEdge: w,
                    widthLabel: x
                } = a,
                y = void 0 === n || n,
                z = void 0 !== p && p,
                A = void 0 === w ? "top" : w;
            if (i[0] !== k || i[1] !== m || i[2] !== y || i[3] !== o || i[4] !== q || i[5] !== r || i[6] !== s || i[7] !== t || i[8] !== u || i[9] !== v || i[10] !== z || i[11] !== A || i[12] !== x) {
                let a, e;
                i[16] !== o ? (a = a => a !== o, i[16] = o, i[17] = a) : a = i[17];
                let h = l.filter(a);
                i[18] !== k || i[19] !== m || i[20] !== y || i[21] !== r || i[22] !== s || i[23] !== t || i[24] !== u || i[25] !== v || i[26] !== z || i[27] !== x ? (e = a => (0, d.jsx)(f.a, {
                    ariaLabel: x,
                    defaultSize: m.width,
                    edge: a,
                    resizeFromCenter: z,
                    extendIntoToolbar: y,
                    getCurrentSize: () => k.width,
                    maximumSize: r.width,
                    minimumSize: s.width,
                    onResizeEnd: a => {
                        u({
                            ...k,
                            width: a
                        })
                    },
                    onResizingChange: v,
                    setSize: b => {
                        t(a, {
                            ...k,
                            width: b
                        })
                    }
                }, a), i[18] = k, i[19] = m, i[20] = y, i[21] = r, i[22] = s, i[23] = t, i[24] = u, i[25] = v, i[26] = z, i[27] = x, i[28] = e) : e = i[28], b = h.map(e), i[29] !== k || i[30] !== m || i[31] !== q || i[32] !== r || i[33] !== s || i[34] !== t || i[35] !== u || i[36] !== v || i[37] !== A ? (c = null != A && (0, d.jsx)(f.a, {
                    ariaLabel: q,
                    defaultSize: m.height,
                    edge: A,
                    getCurrentSize: () => k.height,
                    maximumSize: r.height,
                    minimumSize: s.height,
                    onResizeEnd: a => {
                        u({
                            ...k,
                            height: a
                        })
                    },
                    onResizingChange: v,
                    setSize: a => {
                        t("right", {
                            ...k,
                            height: a
                        })
                    }
                }), i[29] = k, i[30] = m, i[31] = q, i[32] = r, i[33] = s, i[34] = t, i[35] = u, i[36] = v, i[37] = A, i[38] = c) : c = i[38], g = null != A && h.map(a => (0, d.jsx)(j, {
                    edge: a,
                    resizeFromCenter: z,
                    getCurrentSize: () => k,
                    maximumSize: r,
                    minimumSize: s,
                    verticalEdge: A,
                    onResizeEnd: u,
                    onResizingChange: v,
                    setSize: b => {
                        t(a, b)
                    }
                }, a)), i[0] = k, i[1] = m, i[2] = y, i[3] = o, i[4] = q, i[5] = r, i[6] = s, i[7] = t, i[8] = u, i[9] = v, i[10] = z, i[11] = A, i[12] = x, i[13] = b, i[14] = c, i[15] = g
            } else b = i[13], c = i[14], g = i[15];
            return i[39] !== b || i[40] !== c || i[41] !== g ? (h = (0, d.jsxs)(d.Fragment, {
                children: [b, c, g]
            }), i[39] = b, i[40] = c, i[41] = g, i[42] = h) : h = i[42], h
        }
    })
};