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
            a: () => ap
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
            C = c("Tttq");

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
                }), o[25] = C, o[26] = h) : h = o[26], o[27] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, d.jsx)(F.Lj, {
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
            }), o[47] = C, o[48] = k) : k = o[48], o[49] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, d.jsx)(F.Lj, {
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
            R = c("X7C7"),
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
            ac = c("TL6G"),
            ad = c("rkZ2"),
            ae = c("f4Vb"),
            af = c("OWtl"),
            ag = c("j89V"),
            ah = c("El6m"),
            ai = c("KkZX"),
            aj = c("bIvi");
        let ak = ["bottom-center", "bottom-left", "bottom-right"],
            al = ["bottom-left", "bottom-right"],
            am = "inset(0px 0px 0px 0px round var(--floating-panel-radius))",
            an = {
                type: "spring",
                bounce: .16,
                duration: .42
            },
            ao = (0, o.u)(af.a, ay, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (a, b) => a.width === b.width && a.height === b.height,
                onMount: a => {
                    let b = window.visualViewport,
                        c = () => a(ay());
                    return window.addEventListener("resize", c), b?.addEventListener("resize", c), c(), () => {
                        window.removeEventListener("resize", c), b?.removeEventListener("resize", c)
                    }
                }
            });

        function ap(a) {
            let b, c, f, g, h = (0, e.c)(10);
            return h[0] !== a ? ({
                contentChat: b,
                ...c
            } = a, h[0] = a, h[1] = b, h[2] = c) : (b = h[1], c = h[2]), h[3] !== b || h[4] !== c ? (f = null == b ? c.renderMenu : a => a.contextMenuTrigger ?? c.renderMenu?.(a), h[3] = b, h[4] = c, h[5] = f) : f = h[5], h[6] !== b || h[7] !== c || h[8] !== f ? (g = (0, d.jsx)(aq, {
                ...c,
                contentChat: b,
                renderMenu: f
            }), h[6] = b, h[7] = c, h[8] = f, h[9] = g) : g = h[9], g
        }

        function aq(a) {
            let b, c, {
                    ref: e,
                    animateOnMount: f = !1,
                    fitInitialCompactContent: x = !1,
                    background: H,
                    renderComposer: Q,
                    containerSize: Z,
                    minimumWidth: ak = 360,
                    dockThreadKey: al,
                    canDock: ap = !0,
                    preserveLayoutOnEscape: aq = !1,
                    compactInputPosition: ar,
                    reservedDockPosition: as,
                    footer: ay,
                    overlay: az,
                    renderHeaderContent: aA,
                    headerInteractionDisabled: aB = !1,
                    allowLegacyHeaderToggle: aC = !0,
                    renderMenu: aD,
                    forceExpanded: aE = !1,
                    hasConversation: aF,
                    isHidden: aG = !1,
                    contentChat: aH,
                    isMinimized: aI,
                    isCollisionObstacle: aJ = !0,
                    onEscape: aK,
                    onMinimizedChange: aL,
                    presentation: aM,
                    onPresentationChange: aN,
                    title: aO,
                    titleContent: aP,
                    minimizedIcon: aQ,
                    minimizedMenuItems: aR,
                    restoreLabel: aS,
                    statusState: aT,
                    titleStatusState: aU = aT,
                    notifications: aV,
                    workingPreview: aW,
                    compactWorkingPreview: aX,
                    responsePreview: aY,
                    persistResponsePreview: aZ = !1,
                    showResponsePreview: a$ = !0,
                    emptyState: a_,
                    renderTranscript: a0,
                    hasTranscript: a1,
                    pendingFormId: a2 = null,
                    showComposerDivider: a3 = !1,
                    showHeader: a4 = !0
                } = a,
                a5 = (0, o.y)(af.a),
                a6 = null != aH,
                a7 = aH?.onOpenRightPane,
                a8 = (0, o.z)(a2),
                a9 = null != a8,
                ba = (0, z.f)("2163293173"),
                bb = (0, p.useContext)(t.a),
                [bc, bd] = (0, p.useState)(!1),
                [be, bf] = (0, p.useState)(null),
                bg = ba && a6 && ap && !aG,
                bh = bg && null != a7 && !aH?.openRightPaneDisabled && null != bb,
                bi = (0, o.z)(!!ba && !!a6 && ad.c),
                bj = ba ? a_ : void 0,
                bk = a1 ?? null != a0,
                bl = bk || null != bj,
                bm = (0, o.z)(al) ?? void 0,
                bn = aJ ? "quick-chat" : void 0,
                bo = (0, p.useContext)(ah.b),
                bp = (0, o.z)(aV),
                bq = a9 ? K.a : bp ?? K.a,
                br = (0, o.z)(aT),
                bs = "ready" === bq.type ? {
                    ...br,
                    type: br?.type ?? "idle",
                    unread: !0
                } : br,
                bt = (0, o.z)(aU),
                bu = aU === aT ? bs : bt,
                bv = (0, o.z)(ba && a$ ? aY : null),
                bw = !!bv,
                bx = (0, r.a)(),
                by = (0, p.useId)(),
                bz = (0, p.useId)(),
                bA = (0, p.useId)(),
                bB = (0, u.c)(),
                bC = (0, ab.a)(),
                bD = (0, o.z)(ao),
                bE = (0, u.b)(bD.height, bB),
                bF = (0, u.b)(bD.width, bB),
                [bG, bH] = (0, p.useState)(0),
                [bI, bJ] = (0, p.useState)(!1),
                [bK, bL] = (0, p.useState)(0),
                [bM, bN] = (0, p.useState)(null),
                [bO, bP] = (0, p.useState)(null),
                [bQ, bR] = (0, p.useState)(0),
                bS = (0, p.useRef)({
                    composer: 0,
                    response: 0,
                    complete: !1
                }),
                [bT, bU] = (0, p.useState)(null),
                bV = (0, I.b)(a => {
                    a.contentRect.width > 0 && bU(a.contentRect.width)
                }),
                bW = (0, I.b)(a => {
                    let b = (0, ae.a)(a).height;
                    bR(b), ef("response", b)
                }),
                bX = (0, I.b)(a => {
                    bL((0, ae.a)(a).height)
                }),
                bY = (0, aj.a)(a => {
                    bN(a), bX(a)
                }),
                bZ = (0, I.b)(a => {
                    bH((0, ae.a)(a).height)
                }),
                [b$, b_] = (0, p.useState)(0),
                b0 = (0, I.b)(a => {
                    b_((0, ae.a)(a).height)
                }),
                b1 = Z?.width ?? bF,
                b2 = bF < 640,
                [b3] = (0, p.useState)(() => ap ? ba ? "bottom-right" : (0, U.a)() : "bottom-center"),
                b4 = (0, o.x)(ap ? X.a : void 0, {
                    threadKey: bm ?? null,
                    minimized: !1
                }),
                b5 = a6 && ap,
                b6 = (0, o.x)(ap && !a6 ? X.a : void 0, {
                    threadKey: bm ?? null,
                    minimized: !0
                }),
                [b7, b8] = (0, p.useState)({}),
                b9 = (null != bm || ba ? null : b7.expanded) ?? b4 ?? b3,
                ca = null == ar ? b9 : b7.expanded ?? ar,
                cb = b2 ? "bottom-center" : ca,
                cc = "bottom-right";
            b5 ? cc = (0, W.a)(cb) : ba || (cc = (null == bm ? b7.minimized : null) ?? b6 ?? "bottom-right");
            let cd = ap ? (0, W.f)(aI ? cc : cb, as) : "bottom-center",
                ce = cd.startsWith("top"),
                cf = (0, o.z)($),
                cg = (0, h.a)(),
                ch = (0, p.useRef)(!1),
                ci = (0, p.useRef)({
                    x: 0,
                    y: 0
                }),
                cj = (0, p.useRef)(null),
                ck = (0, p.useRef)(null),
                cl = (0, p.useRef)(null),
                cm = (0, i.a)(0),
                cn = (0, i.a)(0),
                co = (0, p.useRef)(null),
                cp = (0, p.useRef)(null),
                cq = (0, p.useRef)(null),
                cr = (0, p.useRef)(null),
                cs = (0, p.useRef)(null),
                [ct, cu] = (0, p.useState)("compact"),
                [cv, cw] = (0, p.useState)(!1),
                cx = aM ?? ct,
                cy = a => {
                    (a6 || "expanded" !== a || bl) && cz(a)
                },
                cz = a => {
                    null == aM && cu(a), cw(!1), aN?.(a)
                },
                [cA, cB] = (0, p.useState)(null),
                [cC, cD] = (0, p.useState)(!1),
                [cE, cF] = (0, p.useState)(!1),
                [cG, cH] = (0, p.useState)(!1),
                [cI, cJ] = (0, p.useState)(!1),
                cK = (0, p.useRef)(null),
                cL = (0, p.useCallback)(a => {
                    (null != cK.current && (cancelAnimationFrame(cK.current), cK.current = null), null != a) ? cJ(!0): cK.current = requestAnimationFrame(() => {
                        cK.current = null, cJ(!1)
                    })
                }, []);
            (0, p.useEffect)(() => () => {
                null != cK.current && cancelAnimationFrame(cK.current)
            }, []);
            let [cM, cN] = (0, p.useState)(!1), [cO, cP] = (0, p.useState)(!1), [cQ, cR] = (0, p.useState)(!0), [cS, cT] = (0, p.useState)(null), cU = (0, p.useRef)(!1), cV = (0, p.useRef)(0), cW = (0, aj.a)(() => (cV.current += 1, () => {
                cV.current -= 1
            })), cX = (0, p.useRef)(!1), [cY, cZ] = (0, p.useState)(!1), [c$, c_] = (0, p.useState)(0), [c0, c1] = (0, p.useState)(0), [c2, c3] = (0, p.useState)(!1), c4 = (0, I.b)((a, b) => {
                let c = ba ? (0, ae.a)(a).height : a.contentRect.height;
                c_(c), ef("composer", c), c3(a.contentRect.width < 640);
                let d = b.querySelector(`[${M.a}]`)?.getBoundingClientRect().height ?? 0;
                c1(Math.max(0, a.contentRect.height - (0, u.b)(d, bB)))
            }), [c5, c6] = (0, p.useState)(null), [c7, c8] = (0, p.useState)(!1), [c9, da] = (0, p.useState)(bm);
            c9 !== bm && (da(bm), b8({}), bd(!1), bf(null), cP(!1), cT(null), cB(null), cH(!1), c8(!1), cw(!1));
            let [db, dc] = (0, p.useState)(a8);
            db !== a8 && (dc(a8), cT(null), cB(null));
            let dd = aI || cS?.stage === "minimized",
                de = (0, i.a)(+!!dd),
                df = (0, j.a)(() => 1 - de.get()),
                dg = (0, p.useCallback)(a => de.on("change", a), [de]),
                dh = (0, p.useCallback)(() => 1 === de.get(), [de]),
                di = (0, p.useSyncExternalStore)(dg, dh, () => dd);
            cA?.target !== "minimized" || dd || cB({
                target: cx
            });
            let {
                isCompact: dj,
                isChatCompact: dk,
                canTogglePresentation: dl
            } = (0, Y.c)({
                pendingFormId: a8,
                presentation: cx,
                forceExpanded: aE,
                hasTranscript: bl
            }), dm = !dj && !aG && !dd, dn = ba && !a6 ? !dj : a4;
            (!a6 || aG || aI || !dn) && cG && cH(!1);
            let [dp, dq] = (0, p.useState)(() => x && dj && !aI);
            dp && (!dj || aI) && dq(!1);
            let dr = !aI && !dd && (ba && !a6 || !dj || cE || cI || cG || bc || bI),
                ds = dn && (a6 ? !aI && !dd : ba || dr),
                dt = a6 && ds,
                du = ba && a6 && dj && ds && !aG && !a9 && !bi && null != aX && bu?.type === "loading",
                dv = a$ && ba && !a9 && !cv && bk && (bw || !du && bu?.type === "loading"),
                dw = dj && dv,
                dx = ba && dj && !aG && !aI && !a9,
                dy = a3 || ba,
                dz = dy || dt && "panel" === H && dj;
            (0, p.useEffect)(() => {
                let a, b = cp.current;
                if (null == b || !a6 || aG || aI || !dn) return;
                let c = () => {
                        clearTimeout(a), a = void 0
                    },
                    d = b => {
                        "touch" !== b.pointerType && (c(), a = setTimeout(() => {
                            a = void 0, cH(!0)
                        }, 300))
                    },
                    e = () => {
                        c(), cH(!1)
                    },
                    f = () => {
                        document.hidden && e()
                    };
                return b.addEventListener("pointerenter", d), b.addEventListener("pointerleave", e), window.addEventListener("blur", e), document.addEventListener("visibilitychange", f), () => {
                    c(), b.removeEventListener("pointerenter", d), b.removeEventListener("pointerleave", e), window.removeEventListener("blur", e), document.removeEventListener("visibilitychange", f)
                }
            }, [bm, a6, aG, aI, dn]);
            let dA = !aG && !dj && !aI && !aE && !bc && !cY,
                dB = (0, p.useEffectEvent)(a => {
                    null == cp.current || null != a && aw(cp.current, a.target, bA) || (cB(null), cy("compact"))
                }),
                dC = (0, p.useEffectEvent)(() => {
                    let a = cp.current,
                        b = document.activeElement;
                    null != a && b instanceof HTMLIFrameElement && !aw(a, b, bA) && dB()
                });
            (0, p.useEffect)(() => {
                if (!dA) return;
                document.addEventListener("pointerdown", dB, !0);
                let a = !0,
                    b = () => {
                        queueMicrotask(() => {
                            a && dC()
                        })
                    };
                window.addEventListener("blur", b);
                let c = ba ? ac.c.subscribe("browser-sidebar-web-contents-pointer-down", () => dB()) : void 0;
                return () => {
                    a = !1, window.removeEventListener("blur", b), c?.(), document.removeEventListener("pointerdown", dB, !0)
                }
            }, [ba, dA]);
            let dD = bs?.type === "loading",
                dE = (0, aj.a)(() => {
                    cp.current?.focus({
                        preventScroll: !0
                    }), cD(!1), cB(null), aL(!1), cy("expanded")
                }),
                [dF, dG] = (0, p.useState)(() => new Set),
                dH = (0, aj.a)(a => {
                    dG(b => new Set([...b, a]))
                }),
                dI = "ready" !== bq.type ? bq : {
                    type: "ready",
                    value: bq.value.map(a => ({
                        id: a.id,
                        content: (0, d.jsx)(G, {
                            title: a.title,
                            preview: a.preview,
                            onOpen: () => {
                                a.onOpen(), dE()
                            },
                            onDismiss: ba ? () => dH(a.id) : a.onDismiss
                        })
                    }))
                },
                [dJ, dK] = (0, p.useState)(dD);
            dJ !== dD && (dK(dD), c8(!1), cw(!1)), (0, p.useEffect)(() => {
                if (!dw || aZ || aG || aI || dD) return;
                let a = window.setTimeout(() => cw(!0), 1e4);
                return () => window.clearTimeout(a)
            }, [bm, dw, aZ, aG, aI, dD]);
            let dL = dI;
            ba && dD && !c7 ? dL = {
                type: "ready",
                value: [{
                    id: "working",
                    content: (0, d.jsx)(G, {
                        title: aO,
                        preview: "",
                        isWorking: !0,
                        workingContent: aW,
                        onOpen: dE,
                        onDismiss: () => c8(!0)
                    })
                }]
            } : ba && "ready" === dI.type && (dL = {
                ...dI,
                value: dI.value.filter(a => !dF.has(a.id))
            }), "ready" !== dL.type && cC && cD(!1);
            let dM = "ready" === dL.type && dL.value.length > 0 && (dd ? aI && (ba ? di : cC) && !bc : !ba && dj),
                dN = bu?.type !== "loading" && (bu?.unread !== !0 || dM) ? null : bu,
                dO = dD || bs?.unread === !0 && (aI || !dM),
                dP = (0, p.useEffectEvent)(a => {
                    if ("Escape" === a.key && !a.defaultPrevented)
                        if (a.preventDefault(), cs.current?.contains(document.activeElement) && cr.current?.focus({
                                preventScroll: !0
                            }), ba) {
                            if (dD) c8(!0);
                            else if ("ready" === dL.type)
                                for (let a of dL.value) dH(a.id)
                        } else cD(!1)
                });
            (0, p.useEffect)(() => {
                if (!aG && aI && dM) return document.addEventListener("keydown", dP), () => document.removeEventListener("keydown", dP)
            }, [dM, aG, aI]);
            let dQ = dn && ds && !aI && !du && null == aA,
                dR = ba && a6 && dQ && bu?.unread === !0,
                dS = bx.formatMessage({
                    id: "quickChat.running",
                    defaultMessage: "Running"
                }),
                dT = bx.formatMessage({
                    id: "quickChat.unreadResponse",
                    defaultMessage: "Unread response"
                }),
                dU = dD ? dS : dT,
                dV = cd.endsWith("left"),
                dW = "bottom-center" === cd,
                dX = dV ? "left" : "right",
                dY = ce && !dd ? bK : 0,
                dZ = 46 * (null == Z) + (ce || dd ? 0 : bK),
                d$ = c5 ?? cf ?? y,
                d_ = dM && !aI ? b$ : 0,
                d0 = (Z?.height ?? bE) - bG - (ce ? d_ + dY : 0),
                d1 = Math.max(0, d0 - 32 - dZ - (ce ? 0 : d_)),
                d2 = null == Z ? b1 / 2 : Math.max(0, b1 - 20),
                d3 = ba && null != bT ? Math.min(d2, bT + 12) : d2,
                d4 = (c$ || 46) + (dn && ds ? 46 : 0) + (dw ? bQ : 0) + 6 * !ba,
                d5 = (c$ || 46) + 46 * !!dt + (dv ? bQ : 0) + 6 * !ba,
                d6 = ax(d$.height, Math.min(Math.max(400, c$ + 46), d1), d1),
                d7 = Math.min(dj ? d4 : Math.max(400, d4), d1),
                d8 = b2 ? d3 : Math.min(ak + 12, d3),
                d9 = ax(dj ? d4 : d$.height, d7, d1),
                ea = (0, i.a)(d9),
                eb = (0, p.useRef)(!1),
                ec = c$ > 0,
                ed = dp && dv,
                ee = dp ? {
                    height: "auto",
                    maxHeight: d1
                } : {
                    height: ea
                };

            function ef(a, b) {
                if (!dp) return;
                let c = bS.current;
                c[a] = b, c.complete || c.composer <= 0 || dv && c.response <= 0 || (c.complete = !0, ea.jump(Math.min(d4 - (c$ || 46) + c.composer + (dw ? c.response - bQ : 0), d1)), dq(!1))
            }
            let eg = aG || bC || cY || !ba && (aI || null != cA) ? 0 : .3,
                eh = ax(d$.width + 12, d8, d3),
                ei = (0, W.d)(cd, {
                    height: d9,
                    width: eh
                }, d0, b1, 12, dZ),
                ej = (0, j.a)(() => a6 && dj ? 0 : ax((ea.get() - d5) / Math.max(1, d6 - d5), 0, 1)),
                ek = (0, j.a)(() => Math.max(0, ea.get() - c$ - 46 * (dt ? 1 : ej.get()))),
                el = (0, j.a)(() => 1 - ej.get()),
                em = (0, p.useEffectEvent)(() => {
                    let a;
                    if (dp) return;
                    let b = !eb.current && dj;
                    if (ec && (eb.current = !0), cI || b || 0 === eg) return void ea.jump(d9);
                    let c = () => {
                        if (ba) {
                            let a = co.current;
                            if (null != a && a.offsetHeight !== Math.round(c$)) return void c_(a.offsetHeight)
                        }
                        let b = (0, k.a)(ea, d9, {
                            duration: eg,
                            ease: A.e
                        });
                        a = () => b.stop()
                    };
                    return ba ? l.b.update(c) : c(), () => {
                        (0, l.a)(c), a?.()
                    }
                }),
                en = ba ? c$ : null,
                eo = ba ? null : ec,
                ep = ba ? null : dj;
            (0, p.useLayoutEffect)(() => em(), [d9, eg, en, eo, ep, dp]);
            let eq = {
                    height: Math.min(36, d1),
                    width: Math.min(36, d3)
                },
                er = {
                    bubbleSize: eq,
                    composerWidth: eh,
                    composerHorizontalInset: 12,
                    reservedDockPosition: as,
                    viewportWidth: b1,
                    viewportHeight: d0
                },
                es = (0, W.f)(aI ? cd : cS?.dockPosition ?? cc, as),
                et = (0, W.d)(es, eq, d0, b1, 0, dZ),
                eu = aI ? eq : {
                    height: d9,
                    width: eh
                },
                ev = aI ? et : ei,
                ew = aI ? 16 : 10,
                ex = {
                    left: ew,
                    right: Math.max(ew, b1 - eu.width - ew),
                    top: dZ + ew,
                    bottom: Math.max(ew, d0 - eu.height - ew)
                };
            (0, p.useLayoutEffect)(() => {
                ck.current = null
            }, [Z, bb, bB]);
            let ey = a => {
                    if (!ap) return;
                    ck.current = null == Z ? null : cp.current?.parentElement?.getBoundingClientRect() ?? null, cl.current = bh ? au(bb, bB, bG, eq.height) : null;
                    let b = {
                        x: (0, u.b)(a.clientX - (ck.current?.left ?? 0), bB),
                        y: (0, u.b)(a.clientY - (ck.current?.top ?? 0), bB)
                    };
                    ci.current = {
                        x: b.x - ev.x - cm.get(),
                        y: b.y - ev.y - cn.get()
                    }, cj.current = {
                        point: b,
                        target: null
                    }, cg.start(a)
                },
                ez = (0, W.d)(es, {
                    height: d9,
                    width: eh
                }, d0, b1, 12, dZ),
                eA = et.x - ez.x,
                eB = et.y - ez.y,
                eC = {
                    top: eB,
                    right: eh - eA - eq.width,
                    bottom: d9 - eB - eq.height,
                    left: eA
                },
                eD = `inset(${eC.top}px ${eC.right}px ${eC.bottom}px ${eC.left}px round var(--floating-panel-radius))`,
                eE = (0, j.a)(() => {
                    let a = de.get(),
                        b = ea.get() - d9,
                        c = a * (eC.top + (ce ? 0 : b)),
                        d = 6 + a * (eC.right - 6),
                        e = 6 + a * (eC.bottom + (ce ? b : 0) - 6),
                        f = 6 + a * (eC.left - 6),
                        g = "var(--radius-token-composer-single-line)",
                        h = dd || bc || 0 !== a || 0 !== b ? `inset(${c}px ${d}px ${e}px ${f}px round ${g})` : "none";
                    return {
                        top: c,
                        right: d,
                        bottom: e,
                        left: f,
                        radius: g,
                        clip: h
                    }
                }),
                eF = (0, j.a)(() => eE.get().top),
                eG = (0, j.a)(() => eE.get().right),
                eH = (0, j.a)(() => eE.get().bottom),
                eI = (0, j.a)(() => eE.get().left),
                eJ = (0, j.a)(() => eE.get().radius),
                eK = (0, j.a)(() => eE.get().clip);
            (0, p.useLayoutEffect)(() => {
                if (!ba) return;
                let a = (0, k.a)(de, +!!dd, {
                    duration: .3 * !bC,
                    ease: A.e
                });
                return () => a.stop()
            }, [ba, dd, de, bC]);
            let eL = ce ? {
                    top: eB + eq.height
                } : {
                    bottom: d9 - eB
                },
                eM = (0, p.useRef)({
                    dockPosition: cd,
                    dockThreadKey: bm,
                    isMinimized: aI
                }),
                eN = (0, p.useEffectEvent)(a => {
                    let b = (0, W.d)(a, {
                        height: d9,
                        width: eh
                    }, d0, b1, 12, dZ);
                    cm.stop(), cn.stop(), cm.jump(cm.get() + b.x - ei.x), cn.jump(cn.get() + b.y - ei.y);
                    let c = bC ? {
                        duration: 0
                    } : an;
                    (0, k.a)(cm, 0, c), (0, k.a)(cn, 0, c)
                });
            (0, p.useLayoutEffect)(() => {
                let a = eM.current;
                if (eM.current = {
                        dockPosition: cd,
                        dockThreadKey: bm,
                        isMinimized: aI
                    }, a.dockThreadKey !== bm) {
                    ch.current = !0, cU.current = !0, cg.cancel(), cm.jump(0), cn.jump(0);
                    return
                }
                if (aG) {
                    cm.jump(0), cn.jump(0);
                    return
                }
                a.isMinimized !== aI && eN(a.dockPosition)
            }, [cd, bm, cg, cm, cn, aG, aI]), (0, p.useLayoutEffect)(() => () => {
                cm.stop(), cn.stop()
            }, [cm, cn]);
            let eO = function(a, b) {
                    let c, d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        e = {
                            ...eu,
                            left: ev.x + cm.get(),
                            top: ev.y + cn.get()
                        };
                    null != Z && null == ck.current && (ck.current = cp.current?.parentElement?.getBoundingClientRect() ?? null);
                    let f = null == Z ? null : ck.current,
                        g = {
                            x: b.point.x - (0, u.b)(f?.left ?? 0, bB),
                            y: b.point.y - (0, u.b)(f?.top ?? 0, bB)
                        },
                        h = bg && !aI ? (function(a) {
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
                            for (let a of av(e, !1, !0)) {
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
                        })(er).find(a => {
                            let {
                                rect: b
                            } = a;
                            return g.x >= b.left && g.x <= b.left + b.width && g.y >= b.top && g.y <= b.top + b.height
                        })?.position : void 0;
                    c = ba ? h ?? (0, W.b)(e, d0, b1, av(as, aI, b5), 12 * !aI, dZ) : (0, W.e)({
                        ...e,
                        left: e.width >= b1 / 2 - 2 * ew ? g.x - e.width / 2 : e.left
                    }, d0, b1, aI);
                    let i = null == as ? c : (0, W.f)(c, as),
                        j = {
                            x: !ba || bg ? Math.min(g.x, b1 - g.x) : b1 - g.x,
                            y: ba ? d0 - g.y : Math.min(g.y - dZ, d0 - g.y)
                        },
                        k = (!bg || j.x >= 0 && j.y >= 0) && j.x <= 16 + eq.width && j.y <= 16 + eq.height,
                        l = () => {
                            let c = cl.current;
                            if (!bh || null == c || 0 === c.svgRect.height || !(a instanceof MouseEvent) || a.clientX < 0 || a.clientX > Math.min(c.right, window.innerWidth) || a.clientY < 0 || a.clientY > window.innerHeight) return !1;
                            let h = 20 * c.svgRect.height / 184,
                                i = c.svgRect.top + h,
                                j = c.svgRect.top + c.svgRect.height - h,
                                k = c.svgRect.left + c.svgRect.width / 2,
                                l = 8 * bB;
                            if (a.clientY < i - l || a.clientY > j + l) return !1;
                            if (a.clientX >= k - l) return !0;
                            if (aI || b.offset.x < 8) return !1;
                            let {
                                left: m,
                                top: n
                            } = e;
                            d && (m = g.x - ci.current.x, n = g.y - ci.current.y, null != Z && (m = ax(m, ex.left, ex.right), n = ax(n, ex.top, ex.bottom)));
                            let o = (f?.left ?? 0) + (m + e.width - 6) * bB,
                                p = (f?.top ?? 0) + n * bB,
                                q = (f?.top ?? 0) + (n + e.height - 6) * bB;
                            return o >= k - l && Math.min(q, j) > Math.max(p, i)
                        };
                    if (ba && !aI) {
                        let a = g.x < b1 / 2 ? "bottom-left" : "bottom-right",
                            b = bg && k && a !== as ? a : void 0,
                            d = cj.current;
                        if (null != d) {
                            let a = g.x - d.point.x,
                                b = g.y - d.point.y;
                            Math.hypot(a, b) >= 8 && (a >= 0 && b > 0 && b >= a ? d.target = "minimize" : a > 0 && a > 2 * Math.abs(b) ? d.target = null : (a < 0 || b < 0) && (d.target = null), d.point = g)
                        }
                        let e = g.y - ci.current.y + eu.height - d0;
                        return {
                            dockPosition: i,
                            requestedDockPosition: c,
                            isNearDock: !1,
                            shouldMinimize: null != b || null == h && "bottom-right" === i && d?.target === "minimize" && e >= .5 * eu.width,
                            isRightPaneTarget: null == h && null == b && l(),
                            bubbleDropPosition: b
                        }
                    }
                    let m = (0, W.d)(i, eu, d0, b1, 12, dZ),
                        n = !aI && "bottom-center" !== i && 16 >= Math.abs(e.left - m.x) && 16 >= Math.abs(e.top - m.y);
                    return {
                        dockPosition: i,
                        requestedDockPosition: c,
                        isNearDock: n,
                        shouldMinimize: n && k,
                        isRightPaneTarget: !k && l()
                    }
                },
                eP = (a, b) => {
                    if (!ap) return;
                    let c = b && !b5;
                    (null == ar || c) && (null != bm || ba && !c) ? (0, X.c)(a5, {
                        threadKey: bm ?? null,
                        minimized: c
                    }, a, aF) : b8(b => ({
                        expanded: c ? b.expanded : a,
                        minimized: c ? (0, W.a)(a) : b.minimized
                    }))
                },
                eQ = function(a, b) {
                    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eu,
                        d = (0, W.d)(cd, eu, d0, b1, 12 * !aI, dZ),
                        e = {
                            x: d.x + cm.get(),
                            y: d.y + cn.get()
                        },
                        f = (0, W.d)((0, W.f)(a, as), c, d0, b1, 12 * !aI, dZ);
                    cm.stop(), cn.stop(), cm.jump(e.x - f.x), cn.jump(e.y - f.y), b && (0, q.flushSync)(() => {
                        eP(a, aI)
                    });
                    let g = ba ? {
                            duration: .3,
                            ease: A.e
                        } : an,
                        h = bC ? {
                            duration: 0
                        } : g;
                    cP(!0), Promise.all([(0, k.a)(cm, 0, h), (0, k.a)(cn, 0, h)]).then(() => {
                        cP(0 !== cm.get() || 0 !== cn.get())
                    })
                },
                eR = (0, p.useEffectEvent)(() => {
                    ch.current = !0, cg.cancel(), eQ(cd, !1), cT(null), cB(null), bd(!1), bf(null)
                });
            (0, p.useLayoutEffect)(() => {
                if (!bc) return;
                let a = a => {
                        "Escape" === a.key && (a.preventDefault(), a.stopPropagation(), eR())
                    },
                    b = () => eR();
                return window.addEventListener("keydown", a, !0), window.addEventListener("blur", b), window.addEventListener("pointercancel", b, !0), () => {
                    ch.current = !0, cg.cancel(), window.removeEventListener("keydown", a, !0), window.removeEventListener("blur", b), window.removeEventListener("pointercancel", b, !0)
                }
            }, [cg, bc]);
            let eS = () => {
                    cD(!1), cR(!bc), cT(null), cB(ba ? null : {
                        target: "minimized"
                    }), aL(!0)
                },
                eT = () => {
                    (0, q.flushSync)(() => {
                        cD(!1), cB(ba ? null : {
                            target: cx
                        }), aL(!1)
                    }), eZ()
                },
                eU = () => {
                    cB(null), cy(dj ? "expanded" : "compact")
                },
                eV = !aG && !aI,
                eW = eV && (null != aK || !aq && !dj && !aE),
                eX = () => {
                    null != aK ? aK() : (cB(null), cy("compact"))
                },
                eY = () => {
                    let a = co.current;
                    return a9 ? (0, P.a)(a) : a?.querySelector("[contenteditable='true']") ?? null
                },
                eZ = () => {
                    ba && null == ar && (cB(null), cy("expanded")), eY()?.focus({
                        preventScroll: !0
                    })
                };
            (0, L.a)("focusMainChat", aI ? eT : eZ, {
                enabled: !aG && a9,
                isActive: () => {
                    if (null == cp.current || null != cp.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                    if (a9) return aI;
                    let a = eY();
                    if (null == a) return !1;
                    let b = a.closest("[hidden], [inert], [aria-hidden=true]");
                    return null == b || !co.current?.contains(b) || b === co.current
                }
            });
            let e$ = bx.formatMessage(dj ? {
                    id: "quickChat.expandFloatingChat",
                    defaultMessage: "Expand floating chat"
                } : {
                    id: "quickChat.showCompactFloatingChat",
                    defaultMessage: "Show compact floating chat"
                }),
                e_ = dl ? {
                    label: e$,
                    onToggle: eU
                } : void 0,
                e0 = bx.formatMessage({
                    id: "quickChat.resizeWidth",
                    defaultMessage: "Resize chat width"
                }),
                e1 = bx.formatMessage({
                    id: "quickChat.resizeHeight",
                    defaultMessage: "Resize chat height"
                }),
                e2 = (0, aj.a)(() => {
                    cB(null), a6 && cy("expanded")
                }),
                e3 = (0, aj.a)(() => {
                    let a = cq.current;
                    aG || bo.isFloatingChatNavigationCurrent?.() === !1 || null == a || null != a.closest("[hidden], [inert], [aria-hidden=true]") || (cB(null), aI && (cD(!1), aL(!1)), cz("expanded"))
                }),
                e4 = {
                    isCompact: dj,
                    canShowCompactPreview: dx,
                    isNarrow: c2,
                    isChromeRevealed: dr,
                    isHeaderVisible: ds,
                    isWorkingPreviewVisible: du,
                    isComposerFocused: ba ? cM || cI : dr,
                    isDockedTop: ce,
                    isHidden: aG,
                    isMinimized: dd,
                    shouldReduceMotion: bC,
                    onSubmitStart: ba || a6 ? e2 : () => cB(null),
                    onMessageSubmitted: aG ? void 0 : e3
                };

            function e5(a) {
                !aG && null != aD && (2 === a.button || 0 === a.button && a.ctrlKey) && a.target instanceof Element && (cp.current?.contains(a.target) || null != a.target.closest("[data-composer-overlay-floating-ui]")) && a.preventDefault()
            }

            function e6(a) {
                !a6 && a.target instanceof Element && (!cp.current?.contains(a.target) || null != a.target.closest("[data-composer-overlay-floating-ui]")) && a.stopPropagation()
            }
            let e7 = Q(e4, {
                    isMoving: bc || cY || cO,
                    composerContentHeight: c0,
                    dockedReservePx: c$ > c0 + 6 * !!ba ? d9 + 10 : 0
                }),
                e8 = (0, d.jsxs)("div", {
                    ref: a => {
                        co.current = a, c4(a)
                    },
                    className: (0, g.b)(C.a.floatingComposerInset, "mt-auto shrink-0", ap && !b2 && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", dj && ce && "[--composer-overlay-placement:bottom]"),
                    onPointerDownCapture: e5,
                    onPointerUp: a => {
                        a.target === a.currentTarget && a.currentTarget.hasPointerCapture(a.pointerId) && !cU.current && eZ()
                    },
                    onContextMenu: e6,
                    children: [dy && !aI && (!dj || dw) ? (0, d.jsx)("div", {
                        "aria-hidden": !0,
                        className: "border-t border-default"
                    }) : null, (0, d.jsx)(ah.b, {
                        value: {
                            ...bo,
                            hasComposerSurface: dz,
                            isFloatingChatSurface: !0,
                            isFloatingTranscriptOpen: !aG && !dj && !aI,
                            floatingChatSurfaceRef: cp,
                            onFloatingDictationRowChange: cL,
                            floatingComposerPresentation: e4,
                            transcriptTarget: bO,
                            followLatestTranscript: ba ? dj : bo.followLatestTranscript
                        },
                        children: (0, d.jsx)(O.a, {
                            value: eW ? eX : aq ? "editor-only" : null,
                            children: (0, d.jsx)(N.a, {
                                value: {
                                    target: bM,
                                    homeBannerPlacement: "inline"
                                },
                                children: e7
                            })
                        })
                    })]
                }),
                e9 = dj ? "composer" : "toolbar",
                fa = (0, d.jsx)(V.c, {
                    size: null != a7 && dj ? "iconCircle" : e9,
                    onMinimize: eS
                }),
                fb = ba || null != a7 ? null : fa;
            b = du ? (0, d.jsx)(E.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 px-2 text-start text-sm text-secondary",
                "aria-label": e$,
                "aria-describedby": by,
                "data-quick-chat-drag-handle": !0,
                onClick: () => {
                    eU(), eY()?.focus({
                        preventScroll: !0
                    })
                },
                children: (0, d.jsx)("span", {
                    id: by,
                    className: "min-w-0 truncate",
                    children: aX
                })
            }) : null != aA ? aA({
                leadingControl: fb
            }) : (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-1",
                children: [fb, dR && (0, d.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    "aria-label": dT
                }), (0, d.jsx)("h2", {
                    id: by,
                    "data-unread": dR || void 0,
                    "data-dropdown-overlay-side": "auto",
                    className: (0, g.b)("group/floating-title min-w-0 text-base font-medium text-secondary", (!ba || null == aP) && "truncate"),
                    children: aP ?? (ba ? (0, d.jsx)(V.b, {
                        children: (0, d.jsx)(aa.a, {
                            children: a4 ? aO : (0, d.jsx)(s.a, {
                                id: "quickChat.newChatTitle",
                                defaultMessage: "New chat"
                            })
                        })
                    }) : aO)
                }), !ba && (0, d.jsx)("div", {
                    className: "flex min-w-5 flex-1 items-center justify-end",
                    children: null != dN && (0, d.jsx)("div", {
                        className: "flex min-w-0 justify-end",
                        role: "status",
                        "aria-label": "loading" === dN.type ? dS : dT,
                        children: (0, d.jsx)(ag.a, {
                            statusState: dN
                        })
                    })
                })]
            });
            let fc = (0, d.jsxs)(T.a, {
                    value: {
                        id: bA,
                        registerOpen: a6 ? cW : void 0
                    },
                    children: [b, aD?.({
                        isCompact: dj,
                        isDragging: bc,
                        open: bI,
                        onMinimize: eS,
                        onOpenChange: bJ
                    }), null != a7 && (0, d.jsxs)("div", {
                        className: "-me-0.5 flex shrink-0 items-center",
                        children: [fa, (0, d.jsx)(V.d, {
                            disabled: aH?.openRightPaneDisabled,
                            size: dj ? "iconCircle" : "toolbar",
                            onOpen: a7
                        })]
                    }), null == a7 && ba && fa]
                }),
                fd = (0, d.jsx)("div", {
                    className: "contents",
                    onPointerDownCapture: e5,
                    onContextMenu: e6,
                    children: ba ? (0, d.jsx)(V.a, {
                        isCompact: a6 && dj,
                        isVisible: ds,
                        isDisabled: aB,
                        showDivider: !dw,
                        children: fc
                    }) : (0, d.jsx)(V.e, {
                        expandOnClick: a6,
                        animateChrome: !bC && !aI && null == cA,
                        isChromeRevealed: ds,
                        isCompact: dj,
                        isDisabled: aB,
                        reserveSpace: a6 && dn && !dj,
                        presentationToggle: aC ? e_ : void 0,
                        children: fc
                    })
                }),
                fe = (0, d.jsx)(m.a.div, {
                    ref: w.d,
                    className: "pointer-events-none absolute",
                    style: ba ? {
                        top: es.startsWith("top") ? eB : void 0,
                        bottom: es.startsWith("top") ? void 0 : eC.bottom,
                        left: eA,
                        width: eq.width,
                        height: eq.height,
                        opacity: de
                    } : {
                        inset: 0
                    },
                    "aria-hidden": !aI,
                    "data-pip-obstacle": aI ? bn : void 0,
                    "data-floating-chat-minimized": "",
                    animate: ba ? void 0 : {
                        opacity: +!!dd
                    },
                    initial: !1,
                    inert: !aI || void 0,
                    transition: bC ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: A.e
                    },
                    children: (0, d.jsx)(E.a, {
                        ref: cr,
                        className: (0, g.b)("absolute inset-0 m-auto touch-none", aI && "pointer-events-auto"),
                        "aria-description": dO ? dU : void 0,
                        "aria-label": aS ?? bx.formatMessage({
                            id: "quickChat.restoreFloatingChat",
                            defaultMessage: "Restore floating chat: {title}"
                        }, {
                            title: aO
                        }),
                        autoFocus: !aG && aI && cQ,
                        color: "ghostSecondary",
                        size: "composer",
                        uniform: !0,
                        onClick: a => {
                            0 !== a.detail && cU.current || eT()
                        },
                        onPointerEnter: a => {
                            ba || "touch" === a.pointerType || cD(!0)
                        },
                        onKeyDown: a => {
                            "ready" === dL.type && ("ArrowUp" === a.key || "ArrowDown" === a.key) && (a.preventDefault(), ba || (0, q.flushSync)(() => cD(!0)), cs.current?.querySelector("button")?.focus({
                                preventScroll: !0
                            }))
                        },
                        onPointerDown: a => {
                            b2 || 0 !== a.button || (cU.current = !1, a.currentTarget.setPointerCapture(a.pointerId), ey(a))
                        },
                        children: dD && null != bs && null == aQ ? (0, d.jsx)(ag.a, {
                            statusState: bs,
                            size: ba ? "default" : "compact"
                        }) : (0, d.jsx)(R.a, {
                            badgeEnabled: dO,
                            children: aQ ?? (0, d.jsx)(F.Pb, {})
                        })
                    }, aI ? "minimized" : "preview")
                }),
                ff = "ready" === dL.type ? (0, d.jsx)(J, {
                    items: dL.value,
                    availableHeight: Math.max(0, (Z?.height ?? bE) - dZ - bG - (aI ? eq.height : d4) - 32 - 12),
                    isDockedTop: ce,
                    shouldReduceMotion: bC
                }) : null;
            !ba && (c = am, dd ? c = eD : null != cA || bc || (c = "none"));
            let fg = (0, d.jsxs)(D, {
                contentRef: cq,
                allowCompactResize: !0,
                animateSurface: null != cA || !aI,
                elevateComposer: a6 && !dd,
                contentStyle: ba ? {
                    ...ee,
                    borderRadius: eJ
                } : void 0,
                surfaceStyle: ba ? {
                    top: eF,
                    right: eG,
                    bottom: eH,
                    left: eI,
                    borderRadius: eJ
                } : void 0,
                currentSize: {
                    height: d9,
                    width: eh
                },
                heightLabel: e1,
                resizeFromCenter: ba && dW,
                fixedHorizontalEdge: ba && !dW ? dX : void 0,
                isCompact: dj,
                isCompactChromeRevealed: dn && ds,
                isMinimized: dd,
                keepSurfaceInset: !0,
                maximumSize: {
                    height: d1,
                    width: d3
                },
                minimizedContent: null == aR ? fe : (0, d.jsx)(S.a, {
                    disableNative: !0,
                    items: aR,
                    children: (0, d.jsx)("div", {
                        className: "contents",
                        children: fe
                    })
                }),
                minimizedSurfaceBounds: eC,
                minimumSize: {
                    height: d7,
                    width: d8
                },
                prefersCompactPresentation: !0,
                resizable: !b2,
                background: dd || ba ? "panel" : H,
                sectionRef: cp,
                sectionProps: {
                    ref: e,
                    "aria-label": dQ ? void 0 : aO,
                    "aria-labelledby": dQ ? by : void 0,
                    "aria-modal": null != Z && void 0,
                    animate: {
                        ...f ? {
                            opacity: +!!ec,
                            translateY: 8 * (!ec && !bC)
                        } : {},
                        width: eh,
                        scale: ba || cS?.stage !== "approaching" ? 1 : .95
                    },
                    "data-quick-chat-drag-handle": !ba && dj || void 0,
                    "data-pip-obstacle": aI ? void 0 : bn,
                    "data-state": "open",
                    drag: !b2,
                    dragConstraints: null == Z ? void 0 : {
                        left: ex.left - ev.x,
                        right: ex.right - ev.x,
                        top: ex.top - ev.y,
                        bottom: ex.bottom - ev.y
                    },
                    dragElastic: null == Z ? void 0 : 0,
                    dragControls: cg,
                    dragListener: !1,
                    dragMomentum: !1,
                    initial: !!f && !bC && {
                        opacity: 0,
                        translateY: 8
                    },
                    role: null == Z ? "dialog" : "region",
                    tabIndex: -1,
                    style: {
                        ...{
                            "--quick-chat-expansion": ba ? ej : void 0
                        },
                        ...ee,
                        top: ce ? dZ + 10 : "auto",
                        bottom: ce ? "auto" : 10 + bG,
                        left: dW ? "50%" : "auto",
                        right: "auto",
                        ...!dW && {
                            [dX]: 10
                        },
                        translate: dW ? "-50% 0" : void 0,
                        x: cm,
                        y: cn,
                        originX: "bottom-center" === es ? .5 : Number(es.endsWith("right")),
                        originY: +!es.startsWith("top")
                    },
                    transition: {
                        duration: eg,
                        ease: A.e,
                        scale: {
                            duration: .3 * !bC,
                            ease: A.e
                        }
                    },
                    onBlurCapture: a => {
                        if (!(aG || aw(a.currentTarget, a.relatedTarget, bA))) {
                            if (null == a.relatedTarget) {
                                let b = a.currentTarget;
                                queueMicrotask(() => {
                                    b.ownerDocument.hasFocus() && aw(b, b.ownerDocument.activeElement, bA) || (cF(!1), cN(!1), cD(!1))
                                });
                                return
                            }
                            cF(!1), cN(!1), cD(!1), (!ba || a6) && dA && null == a.target.closest("[inert]") && (cB(null), cy("compact"))
                        }
                    },
                    onClick: a => {
                        if (!(a6 && (0 !== a.button || a.ctrlKey) || aI || cU.current || a.detail > 0 && cX.current || a.defaultPrevented || !(a.target instanceof Element) || !a.currentTarget.contains(a.target) || a.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                            if (dj && (a.target === a.currentTarget || co.current?.contains(a.target))) return void eZ();
                            if (a6) {
                                if (!dn || !dl) return;
                                dj && !a.currentTarget.contains(document.activeElement) && a.currentTarget.focus({
                                    preventScroll: !0
                                }), cB(null), cy("expanded");
                                return
                            }
                            if (ba) {
                                dj && dl && eZ();
                                return
                            }
                            dn && dl && a.target.closest("header[data-quick-chat-drag-handle]") && (dj && !a.currentTarget.contains(document.activeElement) && a.currentTarget.focus({
                                preventScroll: !0
                            }), eU())
                        }
                    },
                    onDoubleClick: a => {
                        ba && !aI && !cU.current && !a.defaultPrevented && a.target instanceof Element && a.target.closest("header[data-quick-chat-drag-handle]") && !a.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (cB(null), cy("expanded"), c6(null), _(a5, y, {
                            dockPosition: "bottom-right",
                            hasConversation: aF
                        }), eQ("bottom-right", !0, {
                            height: ax(y.height, d7, d1),
                            width: ax(y.width + 12, d8, d3)
                        }))
                    },
                    onClickCapture: a => {
                        !aG && cU.current && a.detail > 0 && (a.preventDefault(), a.stopPropagation())
                    },
                    onDrag: (a, b) => {
                        let c = eO(a, b),
                            d = c.bubbleDropPosition ?? (ba ? cc : c.dockPosition);
                        if (bg && (c.isRightPaneTarget ? bf("right-pane") : c.shouldMinimize ? bf(`bubble-${d}`) : bf(aI ? `bubble-${c.dockPosition}` : `composer-${c.dockPosition}`)), !c.isRightPaneTarget && null != c.dockPosition && (ba ? c.shouldMinimize : c.isNearDock)) {
                            let a = c.shouldMinimize ? "minimized" : "approaching";
                            (cS?.stage !== a || cS.dockPosition !== d) && (cT({
                                dockPosition: d,
                                stage: a
                            }), (c.shouldMinimize || cS?.stage === "minimized") && cB(ba ? null : {
                                target: c.shouldMinimize ? "minimized" : cx
                            }))
                        } else null != cS && "restored" !== cS.stage && (cT({
                            ...cS,
                            stage: "restored"
                        }), "minimized" === cS.stage && cB(ba ? null : {
                            target: cx
                        }))
                    },
                    onDragEnd: (a, b) => {
                        if (ch.current) return;
                        bf(null);
                        let c = eO(a, b, !0);
                        if (c.isRightPaneTarget) {
                            cm.jump(0), cn.jump(0), cT(null), cB(null), bd(!1), a7?.();
                            return
                        }
                        c.shouldMinimize ? (0, q.flushSync)(() => {
                            null != c.bubbleDropPosition ? eP(c.bubbleDropPosition, !0) : ba && b5 || eP(ba ? cc : c.requestedDockPosition, !0), eS()
                        }) : (eQ(c.requestedDockPosition, !0), null != cS && "restored" !== cS.stage && (cT({
                            ...cS,
                            stage: "restored"
                        }), "minimized" === cS.stage && cB(ba ? null : {
                            target: cx
                        }))), bd(!1)
                    },
                    onDragStart: () => {
                        cD(!1), bf(null), ch.current = !1, cU.current = !0, bd(!0), cm.stop(), cn.stop()
                    },
                    onFocusCapture: a => {
                        if (a.currentTarget.contains(a.target) && null != a.target.closest("[data-composer-input], [data-codex-composer-request]")) {
                            (!ba || a6) && cF(!0), cN(!0);
                            let b = "[data-dictation-button], [data-dictation-recording-controls]";
                            (a6 ? dn && dl : ba) && null == ar && !a.target.closest(b) && !(a.relatedTarget instanceof Element && a.relatedTarget.closest(b)) && !cI && null == cK.current && (cB(null), cy("expanded"))
                        } else a.currentTarget.contains(a.target) && !co.current?.contains(a.target) && (cN(!1), a6 && a.target.closest("header[data-quick-chat-drag-handle]") && cF(!0))
                    },
                    onKeyDown: a => {
                        if (!eV || "Escape" !== a.key || a.defaultPrevented || a.nativeEvent.isComposing) return;
                        let b = eW && !a.repeat;
                        !b && (!aq || a.altKey || a.ctrlKey || a.metaKey || a.shiftKey) || (a.preventDefault(), a.stopPropagation(), b && eX())
                    },
                    onKeyDownCapture: a => {
                        aG || "Escape" !== a.key || (cU.current = !0, cg.cancel())
                    },
                    onPointerDownCapture: a => {
                        if (aG || (cU.current = !1, cX.current = cV.current > 0 && a.target instanceof Element && null != a.target.closest("header[data-quick-chat-drag-handle]"), b2 || 0 !== a.button || a.ctrlKey || !(a.target instanceof Element))) return;
                        let b = a.target.closest("[data-quick-chat-drag-handle]"),
                            c = a.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                            d = co.current,
                            e = a.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                        if (ap && null != e && d?.contains(e) && (c === e || a.target.contains(e))) b = d;
                        else if (null == b || null != c && c !== b) return;
                        a.preventDefault(), b.setPointerCapture(a.pointerId), ey(a)
                    },
                    onPointerLeave: () => {
                        cs.current?.contains(document.activeElement) || cD(!1)
                    }
                },
                shouldReduceMotion: bC,
                variant: null == Z ? "floating" : "content",
                verticalResizeEdge: ce ? "bottom" : "top",
                widthLabel: e0,
                onResize: (a, b) => {
                    let c = ba && dW ? 0 : (0, W.c)(cd, a, {
                            height: d9,
                            width: eh
                        }, cm.get(), b.width, d0, b1, 12),
                        d = ei.y + cn.get(),
                        e = (0, W.d)(cd, b, d0, b1, 12, dZ),
                        f = ax(d + (ce ? 0 : d9 - b.height), dZ + 10, d0 - b.height - 10);
                    cm.stop(), cn.stop(), (0, q.flushSync)(() => {
                        c6({
                            height: dj ? d$.height : b.height,
                            width: b.width - 12
                        })
                    }), cm.jump(c), cn.jump(f - e.y)
                },
                onResizeEnd: a => {
                    _(a5, {
                        height: dj ? d$.height : a.height,
                        width: a.width - 12
                    }, {
                        dockPosition: cd,
                        hasConversation: aF
                    }), eQ(cd, !1, a)
                },
                onResizingChange: a => {
                    cZ(a), a && (cB(null), cm.stop(), cn.stop())
                },
                children: [!ba && dM && "ready" === dL.type ? (0, d.jsx)("div", {
                    ref: (0, B.a)(cs, b0, w.d),
                    className: (0, g.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !aI && (ce ? "top-full" : "bottom-full"), ce ? "pt-3" : "pb-3"),
                    "data-pip-obstacle": bn,
                    onClickCapture: () => {
                        (aI ? cr.current : cp.current)?.focus({
                            preventScroll: !0
                        }), cF(!1)
                    },
                    style: aI ? eL : void 0,
                    children: ff
                }) : null, (0, d.jsx)(n.a, {
                    initial: !1,
                    children: ba && dM ? (0, d.jsx)(m.a.div, {
                        initial: {
                            opacity: 0,
                            y: 8 * !bC
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 8 * !bC
                        },
                        transition: {
                            duration: .3 * !bC,
                            ease: A.e
                        },
                        ref: (0, B.a)(cs, b0, w.d),
                        className: (0, g.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !aI && (ce ? "top-full" : "bottom-full"), aI && (ce ? "pt-1" : "pb-1")),
                        "data-pip-obstacle": "quick-chat",
                        onClickCapture: () => {
                            (aI ? cr.current : cp.current)?.focus({
                                preventScroll: !0
                            }), cF(!1), cN(!1)
                        },
                        style: aI ? eL : void 0,
                        children: aI ? (0, d.jsx)(v.c, {
                            variant: "notice",
                            children: ff
                        }) : ff
                    }, "response-preview") : null
                }), (0, d.jsx)("div", {
                    ref: bY,
                    className: (0, g.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", ce ? "top-full pt-2" : "bottom-full"),
                    hidden: dd
                }), (0, d.jsx)("div", {
                    ref: bZ,
                    className: (0, g.b)(C.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", 0 === dY && "pt-2", ce ? "w-full" : "w-80", dW && "left-1/2 -translate-x-1/2", !dW && (dV ? "left-0" : "right-0"), dd && bc && "invisible"),
                    style: {
                        marginTop: dY
                    },
                    "data-pip-obstacle": bn,
                    children: ay
                }), (0, d.jsxs)(m.a.div, {
                    "aria-hidden": aI,
                    animate: ba ? void 0 : {
                        clipPath: c,
                        opacity: +!dd
                    },
                    className: (0, g.b)("relative z-0 flex min-h-0 flex-1 flex-col", !aI && "pointer-events-auto"),
                    "data-floating-chat-surface": !0,
                    "data-floating-chat-dock-position": cd,
                    style: ba ? {
                        clipPath: eK,
                        opacity: df,
                        paddingTop: dp && ds ? 46 : void 0
                    } : void 0,
                    initial: !1,
                    inert: !!aI || void 0,
                    transition: bC || !ba && null == cA ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: A.e
                    },
                    onAnimationComplete: a => {
                        cA?.target === (dd ? "minimized" : cx) && "object" == typeof a && "clipPath" in a && a.clipPath === (dd ? eD : am) && cB(a => a === cA ? null : a)
                    },
                    children: [!ba && !dn && (0, d.jsx)("div", {
                        className: (0, g.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", ce ? "top-full pt-1" : "bottom-full pb-1"),
                        children: (0, d.jsx)(V.c, {
                            standalone: !0,
                            size: e9,
                            onMinimize: eS
                        })
                    }), (ba || dn) && (aD?.({
                        contextMenuTrigger: fd,
                        isCompact: dj,
                        isDragging: bc,
                        onMinimize: eS
                    }) ?? fd), (0, d.jsxs)("div", {
                        className: (0, g.b)("relative flex min-h-0 flex-1 flex-col", dj && "justify-end"),
                        children: [(0, d.jsx)(ah.b, {
                            value: {
                                ...bo,
                                isFloatingChatSurface: !0,
                                isFloatingTranscriptOpen: dm,
                                followLatestTranscript: ba ? dj : bo.followLatestTranscript
                            },
                            children: (0, d.jsxs)(m.a.div, {
                                className: ba ? (0, g.b)("overflow-hidden", ed ? "relative flex min-h-0 flex-col justify-end" : "absolute inset-x-0") : "contents",
                                style: ba && !ed ? {
                                    bottom: c$,
                                    height: ek
                                } : void 0,
                                children: [dv && (0, d.jsx)(m.a.div, {
                                    className: (0, g.b)("pointer-events-none px-4 py-3 text-sm text-default", ed ? "relative mx-(--floating-panel-inset) shrink-0" : "absolute inset-x-(--floating-panel-inset) bottom-0"),
                                    id: bz,
                                    "aria-hidden": bw || !dj,
                                    style: {
                                        opacity: el
                                    },
                                    ref: bW,
                                    children: bw ? (0, d.jsx)("span", {
                                        className: "line-clamp-2 wrap-anywhere select-none",
                                        dir: "auto",
                                        children: bv
                                    }) : aW ?? (0, d.jsx)(s.a, {
                                        id: "quickChat.responseWorking",
                                        defaultMessage: "Working\u2026"
                                    })
                                }), (0, d.jsxs)(m.a.div, {
                                    ref: bP,
                                    "aria-hidden": dj,
                                    className: (0, g.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", !ba && (dj ? "hidden" : "flex"), ba && "absolute inset-x-0 bottom-0 flex", ba && "overflow-hidden"),
                                    inert: dj,
                                    style: ba ? {
                                        height: Math.max(0, d6 - 46 - c$),
                                        opacity: dj ? 0 : ej
                                    } : void 0,
                                    children: [bk && (!dk || ba) ? a0?.(() => {
                                        cB(null), cy("compact")
                                    }, dm) : null, !bk && (0, d.jsx)(n.a, {
                                        initial: !1,
                                        children: (ba || !dj) && null != bj && (0, d.jsx)(m.a.div, {
                                            className: "flex min-h-0 flex-1 flex-col",
                                            initial: !ba && {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: eg,
                                                ease: A.e
                                            },
                                            children: bj
                                        }, "empty-state")
                                    })]
                                }), ba && dj && dv && (0, d.jsx)(E.a, {
                                    unstyled: !0,
                                    focusRing: "inset",
                                    className: "absolute inset-0",
                                    "aria-label": e$,
                                    "aria-describedby": bz,
                                    "data-quick-chat-drag-handle": !0,
                                    onClick: eZ
                                })]
                            })
                        }), aD?.({
                            contextMenuTrigger: e8,
                            isCompact: dj,
                            isDragging: bc,
                            onMinimize: eS
                        }) ?? e8]
                    })]
                }), az]
            });
            return (0, d.jsxs)(T.a, {
                value: {
                    id: bA
                },
                children: [ba && (0, d.jsx)("div", {
                    ref: bV,
                    "aria-hidden": !0,
                    className: (0, g.b)(ai.a, "pointer-events-none invisible absolute")
                }), bg && bc && null != be && (0, d.jsx)(at, {
                    activeIndicator: be,
                    fixed: null == Z,
                    isMinimized: aI,
                    rightPaneTarget: bh ? bb : null,
                    rightPaneGeometryRef: cl,
                    footerHeight: bG,
                    bubbleHeight: eq.height,
                    reservedDockPosition: as,
                    viewportWidth: b1,
                    viewportHeight: d0
                }), fg]
            })
        }
        let ar = "pointer-events-none fill-none stroke-blue/40 [stroke-width:4px] data-active:stroke-blue data-active:[stroke-width:5px] motion-safe:transition-[stroke,stroke-width,scale] motion-safe:duration-basic motion-safe:ease-enter-snappy data-active:scale-[1.15]",
            as = {
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

        function at(a) {
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
                            let c = b ?? au(z, C, A, B);
                            b = void 0, null != q && (q.current = c), a.style.left = `${(0,u.b)(c.svgRect.left,C)}px`, a.style.top = `${(0,u.b)(c.svgRect.top,C)}px`, a.style.width = `${(0,u.b)(c.svgRect.width,C)}px`, a.style.height = `${(0,u.b)(c.svgRect.height,C)}px`
                        }, {
                            ancestorScroll: !1,
                            ancestorResize: !1
                        });
                    return () => {
                        c(), null != q && (q.current = null)
                    }
                }, c = [B, A, q, z, C], k[0] = B, k[1] = A, k[2] = q, k[3] = z, k[4] = C, k[5] = b, k[6] = c) : (b = k[5], c = k[6]), (0, p.useLayoutEffect)(b, c), k[7] !== l || k[8] !== x || k[9] !== y || k[10] !== t || k[11] !== z || k[12] !== w || k[13] !== v || k[14] !== C) {
                let a, b = av(t, y, !0);
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
                            className: (0, g.b)(ar, "size-full"),
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
                    let e = as[a];
                    return (0, d.jsx)("svg", {
                        "aria-hidden": !0,
                        className: (0, g.b)(ar, "size-10 z-20 data-active:z-40", x ? "fixed" : "absolute", e.className),
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
                }, k[21] = l, k[22] = x, k[23] = w, k[24] = v, k[25] = a) : a = k[25], i = ak.filter(a => b.includes(a)).map(a), k[7] = l, k[8] = x, k[9] = y, k[10] = t, k[11] = z, k[12] = w, k[13] = v, k[14] = C, k[15] = h, k[16] = i
            } else h = k[15], i = k[16];
            return k[26] !== h || k[27] !== i ? (j = (0, d.jsxs)(d.Fragment, {
                children: [h, i]
            }), k[26] = h, k[27] = i, k[28] = j) : j = k[28], j
        }

        function au(a, b, c, d) {
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

        function av(a, b, c) {
            let d = ak;
            return b && (d = c ? al : ["bottom-right"]), Array.from(new Set(d.map(b => (0, W.f)(b, a))))
        }

        function aw(a, b, c) {
            return b instanceof Node && (a.contains(b) || b instanceof Element && (null != b.closest("[data-composer-overlay-floating-ui], [data-content-search-bar], [data-composer-focus-target]") || null != b.closest("[data-floating-chat-annotation-layer]") || b.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === c))
        }

        function ax(a, b, c) {
            return Math.max(b, Math.min(a, c))
        }

        function ay() {
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
            o = c("SECa"),
            p = c("Lss9");
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