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
            a: () => eg
        });
        var i = n("ABep"),
            a = n("QosV"),
            l = n("VwGH"),
            r = n("on57"),
            o = n("h24K"),
            s = n("K45w"),
            c = n("W5pg"),
            u = n("jCHb"),
            d = n("xs0G"),
            h = n("IPUh"),
            p = n("suct"),
            m = n("Q840"),
            g = n("zd8w"),
            f = n("v7qY"),
            v = n("Wf1j"),
            x = n("oyxz"),
            b = n("Q2Qp"),
            w = n("wD9O"),
            y = n("rsCP"),
            z = n("AclY"),
            j = n("sArP");
        let C = {
            height: 640,
            width: 560
        };
        var k = n("hZax"),
            S = n("V8uZ"),
            M = n("HgLj"),
            E = n("O8DZ");

        function R(e) {
            let t, n, l, o, s, c, u, d, p, m, g = (0, a.c)(63),
                {
                    allowCompactResize: f,
                    animateSurface: v,
                    background: x,
                    children: b,
                    currentSize: w,
                    contentStyle: R,
                    contentRef: N,
                    elevateComposer: P,
                    fixedHorizontalEdge: T,
                    resizeFromCenter: L,
                    heightLabel: D,
                    isCompact: q,
                    isCompactChromeRevealed: _,
                    isMinimized: H,
                    keepSurfaceInset: I,
                    maximumSize: A,
                    minimizedContent: F,
                    minimizedSurfaceBounds: W,
                    minimumSize: O,
                    onResize: K,
                    onResizeEnd: V,
                    onResizingChange: $,
                    prefersCompactPresentation: Y,
                    resizable: B,
                    sectionProps: X,
                    sectionRef: Q,
                    surfaceStyle: Z,
                    shouldReduceMotion: U,
                    variant: G,
                    verticalResizeEdge: J,
                    widthLabel: ee
                } = e,
                et = void 0 !== f && f,
                en = void 0 === v || v,
                ei = void 0 !== L && L,
                ea = void 0 === B || B,
                el = (0, k.f)("2163293173"),
                er = !H && (I || q && !_) ? 6 : 0;
            g[0] !== H || g[1] !== W || g[2] !== er ? (t = H && null != W ? W : {
                top: 0,
                right: er,
                bottom: er,
                left: er
            }, g[0] = H, g[1] = W, g[2] = er, g[3] = t) : t = g[3];
            let eo = t,
                es = "panel" !== x && "rounded-[inherit]";
            g[4] !== es ? (n = (0, r.b)("pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto", es), g[4] = es, g[5] = n) : n = g[5];
            let ec = n,
                eu = "panel" !== x || Y;
            g[6] !== X.ref || g[7] !== Q ? (l = (0, M.a)(Q, X.ref, z.d), g[6] = X.ref, g[7] = Q, g[8] = l) : l = g[8];
            let ed = !el && Y && "frame-Xbg62r",
                eh = Y && "group/chat-frame focus:outline-none",
                ep = null != W ? "pointer-events-none" : "pointer-events-auto",
                em = Y && E.a.floatingSurface,
                eg = I && E.a.singleLineSurface,
                ef = "floating" === G ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                ev = Y ? "overflow-visible" : "overflow-hidden";
            g[9] !== ed || g[10] !== eh || g[11] !== ep || g[12] !== em || g[13] !== eg || g[14] !== ef || g[15] !== ev ? (o = (0, r.b)("flex flex-col text-default", ed, eh, ep, em, eg, ef, ev), g[9] = ed, g[10] = eh, g[11] = ep, g[12] = em, g[13] = eg, g[14] = ef, g[15] = ev, g[16] = o) : o = g[16];
            let ex = null != R ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            g[17] !== ex ? (s = (0, r.b)(ex), g[17] = ex, g[18] = s) : s = g[18], g[19] !== en || g[20] !== x || g[21] !== ec || g[22] !== P || g[23] !== I || g[24] !== F || g[25] !== Y || g[26] !== U || g[27] !== eo || g[28] !== Z ? (c = Y ? (0, i.jsx)(y.c, {
                asChild: !0,
                unstyled: "panel" !== x,
                variant: I ? "single-line" : "default",
                shadow: P ? "raised" : void 0,
                children: null != Z ? (0, i.jsx)(h.a.div, {
                    className: ec,
                    "aria-hidden": null == F || void 0,
                    style: Z
                }, "panel-background") : (0, i.jsx)(h.a.div, {
                    className: ec,
                    "aria-hidden": null == F || void 0,
                    animate: eo,
                    initial: !1,
                    transition: U || !en ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: S.e
                    },
                    children: F
                }, "legacy-background")
            }) : null, g[19] = en, g[20] = x, g[21] = ec, g[22] = P, g[23] = I, g[24] = F, g[25] = Y, g[26] = U, g[27] = eo, g[28] = Z, g[29] = c) : c = g[29], g[30] !== et || g[31] !== w || g[32] !== T || g[33] !== D || g[34] !== q || g[35] !== H || g[36] !== A || g[37] !== O || g[38] !== K || g[39] !== V || g[40] !== $ || g[41] !== ea || g[42] !== ei || g[43] !== eo || g[44] !== J || g[45] !== ee ? (u = ea && (!q || et) && !H ? (0, i.jsx)("div", {
                className: "pointer-events-none absolute",
                style: eo,
                children: (0, i.jsx)("div", {
                    className: "pointer-events-auto contents",
                    children: (0, i.jsx)(j.a, {
                        currentSize: w,
                        defaultSize: C,
                        extendIntoToolbar: !1,
                        fixedHorizontalEdge: T,
                        resizeFromCenter: ei,
                        heightLabel: D,
                        maximumSize: A,
                        minimumSize: O,
                        verticalEdge: q ? null : J,
                        widthLabel: ee,
                        onResize: K,
                        onResizeEnd: V,
                        onResizingChange: $
                    })
                })
            }) : null, g[30] = et, g[31] = w, g[32] = T, g[33] = D, g[34] = q, g[35] = H, g[36] = A, g[37] = O, g[38] = K, g[39] = V, g[40] = $, g[41] = ea, g[42] = ei, g[43] = eo, g[44] = J, g[45] = ee, g[46] = u) : u = g[46];
            let eb = null == Z ? null : F;
            return g[47] !== b || g[48] !== N || g[49] !== R || g[50] !== s || g[51] !== c || g[52] !== u || g[53] !== eb ? (d = (0, i.jsxs)(h.a.div, {
                ref: N,
                className: s,
                style: R,
                children: [c, u, eb, b]
            }), g[47] = b, g[48] = N, g[49] = R, g[50] = s, g[51] = c, g[52] = u, g[53] = eb, g[54] = d) : d = g[54], g[55] !== X || g[56] !== o || g[57] !== d || g[58] !== l ? (p = (0, i.jsx)(h.a.section, {
                ...X,
                ref: l,
                className: o,
                children: d
            }), g[55] = X, g[56] = o, g[57] = d, g[58] = l, g[59] = p) : p = g[59], g[60] !== p || g[61] !== eu ? (m = (0, i.jsx)(y.c, {
                asChild: !0,
                unstyled: eu,
                children: p
            }), g[60] = p, g[61] = eu, g[62] = m) : m = g[62], m
        }
        var N = n("Sm6l"),
            P = n("bf6R");

        function T(e) {
            let t, n, l, r, o, s, c, u, d, h, p, m = (0, a.c)(56),
                {
                    title: f,
                    preview: b,
                    onOpen: w,
                    onDismiss: z,
                    isWorking: j,
                    workingContent: C
                } = e,
                S = void 0 !== j && j,
                M = (0, k.f)("2163293173"),
                E = (0, v.a)();
            m[0] !== E || m[1] !== f ? (t = f ?? E.formatMessage({
                id: "quickChat.mainConversation",
                defaultMessage: "Chat"
            }), m[0] = E, m[1] = f, m[2] = t) : t = m[2];
            let R = t,
                T = (0, g.useEffectEvent)(z);
            if (m[3] !== M || m[4] !== T || m[5] !== S ? (n = () => {
                    if (!M || S) return;
                    let e = window.setTimeout(() => T(), 1e4);
                    return () => window.clearTimeout(e)
                }, m[3] = M, m[4] = T, m[5] = S, m[6] = n) : n = m[6], m[7] !== M || m[8] !== S ? (l = [M, S], m[7] = M, m[8] = S, m[9] = l) : l = m[9], (0, g.useEffect)(n, l), !M) {
                let e, t, n, a, l, r, o, s, c, u;
                return m[10] !== E || m[11] !== R ? (e = E.formatMessage({
                    id: "quickChat.openCompletedResponse",
                    defaultMessage: "Open completed response: {title}"
                }, {
                    title: R
                }), m[10] = E, m[11] = R, m[12] = e) : e = m[12], m[13] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(P.nc, {
                    className: "text-success"
                }), m[13] = t) : t = m[13], m[14] !== R ? (n = (0, i.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2 text-sm font-semibold text-default",
                    children: [t, (0, i.jsx)("span", {
                        className: "truncate",
                        children: R
                    })]
                }), m[14] = R, m[15] = n) : n = m[15], m[16] !== b ? (a = b || (0, i.jsx)(x.a, {
                    id: "quickChat.responseReady",
                    defaultMessage: "Response ready"
                }), m[16] = b, m[17] = a) : a = m[17], m[18] !== a ? (l = (0, i.jsx)("span", {
                    className: "block truncate text-sm text-secondary",
                    children: a
                }), m[18] = a, m[19] = l) : l = m[19], m[20] !== w || m[21] !== e || m[22] !== n || m[23] !== l ? (r = (0, i.jsxs)("button", {
                    className: "min-w-0 flex-1 cursor-interaction rounded-[inherit] px-4 py-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    "aria-label": e,
                    type: "button",
                    onClick: w,
                    children: [n, l]
                }), m[20] = w, m[21] = e, m[22] = n, m[23] = l, m[24] = r) : r = m[24], m[25] !== E ? (o = E.formatMessage({
                    id: "quickChat.dismissCompletedResponse",
                    defaultMessage: "Dismiss and mark as read"
                }), m[25] = E, m[26] = o) : o = m[26], m[27] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(P.Aj, {
                    className: "pointer-events-none"
                }), m[27] = s) : s = m[27], m[28] !== z || m[29] !== o ? (c = (0, i.jsx)("div", {
                    className: "absolute -top-1 -left-1 flex rounded-full bg-surface",
                    children: (0, i.jsx)(N.a, {
                        "aria-label": o,
                        color: "outlineSurface",
                        radius: "full",
                        size: "iconCircleSm",
                        onClick: z,
                        children: s
                    })
                }), m[28] = z, m[29] = o, m[30] = c) : c = m[30], m[31] !== r || m[32] !== c ? (u = (0, i.jsxs)(y.c, {
                    className: "relative flex shrink-0 select-none",
                    role: "status",
                    variant: "notice",
                    children: [r, c]
                }), m[31] = r, m[32] = c, m[33] = u) : u = m[33], u
            }
            return m[34] !== E || m[35] !== R ? (r = E.formatMessage({
                id: "quickChat.openCompletedResponse",
                defaultMessage: "Open completed response: {title}"
            }, {
                title: R
            }), m[34] = E, m[35] = R, m[36] = r) : r = m[36], m[37] !== S || m[38] !== b || m[39] !== C ? (o = S ? C ?? (0, i.jsx)(x.a, {
                id: "quickChat.responseWorking",
                defaultMessage: "Working…"
            }) : b || (0, i.jsx)(x.a, {
                id: "quickChat.responseReady",
                defaultMessage: "Response ready"
            }), m[37] = S, m[38] = b, m[39] = C, m[40] = o) : o = m[40], m[41] !== o ? (s = (0, i.jsx)("span", {
                className: "line-clamp-2 min-w-0 flex-1 text-sm whitespace-normal text-default",
                children: o
            }), m[41] = o, m[42] = s) : s = m[42], m[43] !== w || m[44] !== r || m[45] !== s ? (c = (0, i.jsx)(N.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 rounded-[inherit] px-4 py-3 pe-10 text-start",
                "aria-label": r,
                type: "button",
                onClick: w,
                children: s
            }), m[43] = w, m[44] = r, m[45] = s, m[46] = c) : c = m[46], m[47] !== E ? (u = E.formatMessage({
                id: "quickChat.dismissResponsePreview",
                defaultMessage: "Dismiss response preview"
            }), m[47] = E, m[48] = u) : u = m[48], m[49] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(P.Aj, {
                className: "pointer-events-none"
            }), m[49] = d) : d = m[49], m[50] !== z || m[51] !== u ? (h = (0, i.jsx)("div", {
                className: "absolute top-3 right-2 flex rounded-full",
                children: (0, i.jsx)(N.a, {
                    "aria-label": u,
                    color: "ghostSecondary",
                    radius: "full",
                    size: "iconCircleSm",
                    onClick: z,
                    children: d
                })
            }), m[50] = z, m[51] = u, m[52] = h) : h = m[52], m[53] !== h || m[54] !== c ? (p = (0, i.jsxs)("div", {
                className: "relative flex shrink-0 select-none",
                role: "status",
                children: [c, h]
            }), m[53] = h, m[54] = c, m[55] = p) : p = m[55], p
        }
        var L = n("v0Gf"),
            D = n("nsuH");

        function q(e) {
            let t, n, l, r, o, s, c = (0, a.c)(23),
                {
                    items: u,
                    availableHeight: d,
                    isDockedTop: p,
                    shouldReduceMotion: m
                } = e,
                f = (0, k.f)("2163293173"),
                [v, x] = (0, g.useState)(null);
            c[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (e, t) => {
                let n = t.firstElementChild;
                n instanceof HTMLElement && x(n.offsetHeight)
            }, c[0] = t) : t = c[0];
            let b = (0, D.b)(t),
                w = Math.min(null == v ? d : 3 * v + 24, Math.max(0, d - 16)),
                y = .3 * !m;
            c[1] !== y ? (n = {
                duration: y,
                ease: S.e
            }, c[1] = y, c[2] = n) : n = c[2];
            let z = n,
                j = f ? "min-w-0" : "-mx-6 -my-2",
                C = f ? "overflow-y-auto overscroll-contain" : "overflow-y-auto overscroll-contain px-6 py-2",
                M = w + 16;
            c[3] !== M ? (l = {
                style: {
                    maxHeight: M
                }
            }, c[3] = M, c[4] = l) : l = c[4];
            let E = f ? "relative flex flex-col" : "relative flex flex-col gap-3";
            if (c[5] !== p || c[6] !== u || c[7] !== m || c[8] !== z) {
                let e;
                c[10] !== p || c[11] !== m || c[12] !== z ? (e = e => {
                    let {
                        id: t,
                        content: n
                    } = e;
                    return (0, i.jsx)(h.a.div, {
                        className: "shrink-0",
                        layout: !m && "position",
                        transition: z,
                        children: (0, i.jsx)(h.a.div, {
                            initial: {
                                opacity: 0,
                                transform: `translateY(${m?0:8*(p?-1:1)}px)`
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
                }, c[10] = p, c[11] = m, c[12] = z, c[13] = e) : e = c[13], r = u.map(e), c[5] = p, c[6] = u, c[7] = m, c[8] = z, c[9] = r
            } else r = c[9];
            return c[14] !== b || c[15] !== E || c[16] !== r ? (o = (0, i.jsx)("div", {
                ref: b,
                className: E,
                children: r
            }), c[14] = b, c[15] = E, c[16] = r, c[17] = o) : o = c[17], c[18] !== o || c[19] !== j || c[20] !== C || c[21] !== l ? (s = (0, i.jsx)(L.a, {
                className: j,
                fade: "mask",
                scrollClassName: C,
                scrollProps: l,
                children: o
            }), c[18] = o, c[19] = j, c[20] = C, c[21] = l, c[22] = s) : s = c[22], s
        }
        var _ = n("wrxv"),
            H = n("EFj1"),
            I = n("BjWL"),
            A = n("vi3X"),
            F = n("fDIZ"),
            W = n("AKr5"),
            O = n("i7gm"),
            K = n("X7C7"),
            V = n("rmk3"),
            $ = n("giDA"),
            Y = n("YzWZ"),
            B = n("eeV6"),
            X = n("Xyz8"),
            Q = n("zj7j"),
            Z = n("Z2JT"),
            U = n("T7v7");
        let G = (0, n("Nwp9").b)("quick-chat-size-v1", C);

        function J(e, t, n) {
            let {
                dockPosition: i,
                hasConversation: a
            } = n, l = e.get(G);
            e.set(G, t), (null == l || l.height !== t.height || l.width !== t.width) && (0, U.d)(e, {
                action: U.a.CODEX_QUICK_CHAT_LIFECYCLE_ACTION_RESIZED,
                dockPosition: i,
                hasConversation: a,
                source: U.b.CODEX_QUICK_CHAT_SOURCE_RESIZE_HANDLE
            })
        }
        var ee = n("mphG"),
            et = n("T1PX"),
            en = n("TL6G"),
            ei = n("rkZ2"),
            ea = n("f4Vb"),
            el = n("OWtl"),
            er = n("j89V"),
            eo = n("El6m"),
            es = n("KkZX"),
            ec = n("bIvi");
        let eu = ["bottom-center", "bottom-left", "bottom-right"],
            ed = ["bottom-left", "bottom-right"],
            eh = "inset(0px 0px 0px 0px round var(--floating-panel-radius))",
            ep = {
                type: "spring",
                bounce: .16,
                duration: .42
            },
            em = (0, m.u)(el.a, eC, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (e, t) => e.width === t.width && e.height === t.height,
                onMount: e => {
                    let t = window.visualViewport,
                        n = () => e(eC());
                    return window.addEventListener("resize", n), t?.addEventListener("resize", n), n(), () => {
                        window.removeEventListener("resize", n), t?.removeEventListener("resize", n)
                    }
                }
            });

        function eg(e) {
            let t, n, l, r, o = (0, a.c)(10);
            return o[0] !== e ? ({
                contentChat: t,
                ...n
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]), o[3] !== t || o[4] !== n ? (l = null == t ? n.renderMenu : e => e.contextMenuTrigger ?? n.renderMenu?.(e), o[3] = t, o[4] = n, o[5] = l) : l = o[5], o[6] !== t || o[7] !== n || o[8] !== l ? (r = (0, i.jsx)(ef, {
                ...n,
                contentChat: t,
                renderMenu: l
            }), o[6] = t, o[7] = n, o[8] = l, o[9] = r) : r = o[9], r
        }

        function ef(e) {
            let t, n, {
                    ref: a,
                    animateOnMount: l = !1,
                    fitInitialCompactContent: j = !1,
                    background: L,
                    renderComposer: O,
                    containerSize: U,
                    minimumWidth: eu = 360,
                    dockThreadKey: ed,
                    canDock: eg = !0,
                    preserveLayoutOnEscape: ef = !1,
                    compactInputPosition: ev,
                    reservedDockPosition: ex,
                    footer: eC,
                    overlay: ek,
                    renderHeaderContent: eS,
                    headerInteractionDisabled: eM = !1,
                    allowLegacyHeaderToggle: eE = !0,
                    renderMenu: eR,
                    forceExpanded: eN = !1,
                    hasConversation: eP,
                    isHidden: eT = !1,
                    contentChat: eL,
                    isMinimized: eD,
                    isCollisionObstacle: eq = !0,
                    onEscape: e_,
                    onMinimizedChange: eH,
                    presentation: eI,
                    onPresentationChange: eA,
                    title: eF,
                    titleContent: eW,
                    minimizedIcon: eO,
                    minimizedMenuItems: eK,
                    restoreLabel: eV,
                    statusState: e$,
                    titleStatusState: eY = e$,
                    notifications: eB,
                    workingPreview: eX,
                    compactWorkingPreview: eQ,
                    responsePreview: eZ,
                    persistResponsePreview: eU = !1,
                    showResponsePreview: eG = !0,
                    emptyState: eJ,
                    renderTranscript: e0,
                    hasTranscript: e1,
                    pendingFormId: e2 = null,
                    showComposerDivider: e3 = !1,
                    showHeader: e4 = !0
                } = e,
                e5 = (0, m.y)(el.a),
                e6 = null != eL,
                e8 = eL?.onOpenRightPane,
                e7 = (0, m.z)(e2),
                e9 = null != e7,
                te = (0, k.f)("2163293173"),
                tt = (0, g.useContext)(b.a),
                [tn, ti] = (0, g.useState)(!1),
                [ta, tl] = (0, g.useState)(null),
                tr = te && e6 && eg && !eT,
                to = tr && null != e8 && !eL?.openRightPaneDisabled && null != tt,
                ts = (0, m.z)(!!te && !!e6 && ei.c),
                tc = te ? eJ : void 0,
                tu = e1 ?? null != e0,
                td = tu || null != tc,
                th = (0, m.z)(ed) ?? void 0,
                tp = eq ? "quick-chat" : void 0,
                tm = (0, g.useContext)(eo.b),
                tg = (0, m.z)(eB),
                tf = e9 ? _.a : tg ?? _.a,
                tv = (0, m.z)(e$),
                tx = "ready" === tf.type ? {
                    ...tv,
                    type: tv?.type ?? "idle",
                    unread: !0
                } : tv,
                tb = (0, m.z)(eY),
                tw = eY === e$ ? tx : tb,
                ty = (0, m.z)(te && eG ? eZ : null),
                tz = !!ty,
                tj = (0, v.a)(),
                tC = (0, g.useId)(),
                tk = (0, g.useId)(),
                tS = (0, g.useId)(),
                tM = (0, w.c)(),
                tE = (0, et.a)(),
                tR = (0, m.z)(em),
                tN = (0, w.b)(tR.height, tM),
                tP = (0, w.b)(tR.width, tM),
                [tT, tL] = (0, g.useState)(0),
                [tD, tq] = (0, g.useState)(!1),
                [t_, tH] = (0, g.useState)(0),
                [tI, tA] = (0, g.useState)(null),
                [tF, tW] = (0, g.useState)(null),
                [tO, tK] = (0, g.useState)(0),
                tV = (0, g.useRef)({
                    composer: 0,
                    response: 0,
                    complete: !1
                }),
                [t$, tY] = (0, g.useState)(null),
                tB = (0, D.b)(e => {
                    e.contentRect.width > 0 && tY(e.contentRect.width)
                }),
                tX = (0, D.b)(e => {
                    let t = (0, ea.a)(e).height;
                    tK(t), ar("response", t)
                }),
                tQ = (0, D.b)(e => {
                    tH((0, ea.a)(e).height)
                }),
                tZ = (0, ec.a)(e => {
                    tA(e), tQ(e)
                }),
                tU = (0, D.b)(e => {
                    tL((0, ea.a)(e).height)
                }),
                [tG, tJ] = (0, g.useState)(0),
                t0 = (0, D.b)(e => {
                    tJ((0, ea.a)(e).height)
                }),
                t1 = U?.width ?? tP,
                t2 = tP < 640,
                [t3] = (0, g.useState)(() => eg ? te ? "bottom-right" : (0, Y.a)() : "bottom-center"),
                t4 = (0, m.x)(eg ? Q.a : void 0, {
                    threadKey: th ?? null,
                    minimized: !1
                }),
                t5 = e6 && eg,
                t6 = (0, m.x)(eg && !e6 ? Q.a : void 0, {
                    threadKey: th ?? null,
                    minimized: !0
                }),
                [t8, t7] = (0, g.useState)({}),
                t9 = (null != th || te ? null : t8.expanded) ?? t4 ?? t3,
                ne = null == ev ? t9 : t8.expanded ?? ev,
                nt = t2 ? "bottom-center" : ne,
                nn = "bottom-right";
            t5 ? nn = (0, X.a)(nt) : te || (nn = (null == th ? t8.minimized : null) ?? t6 ?? "bottom-right");
            let ni = eg ? (0, X.f)(eD ? nn : nt, ex) : "bottom-center",
                na = ni.startsWith("top"),
                nl = (0, m.z)(G),
                nr = (0, o.a)(),
                no = (0, g.useRef)(!1),
                ns = (0, g.useRef)({
                    x: 0,
                    y: 0
                }),
                nc = (0, g.useRef)(null),
                nu = (0, g.useRef)(null),
                nd = (0, g.useRef)(null),
                nh = (0, s.a)(0),
                np = (0, s.a)(0),
                nm = (0, g.useRef)(null),
                ng = (0, g.useRef)(null),
                nf = (0, g.useRef)(null),
                nv = (0, g.useRef)(null),
                nx = (0, g.useRef)(null),
                [nb, nw] = (0, g.useState)("compact"),
                [ny, nz] = (0, g.useState)(!1),
                nj = eI ?? nb,
                nC = e => {
                    (e6 || "expanded" !== e || td) && nk(e)
                },
                nk = e => {
                    null == eI && nw(e), nz(!1), eA?.(e)
                },
                [nS, nM] = (0, g.useState)(null),
                [nE, nR] = (0, g.useState)(!1),
                [nN, nP] = (0, g.useState)(!1),
                [nT, nL] = (0, g.useState)(!1),
                [nD, nq] = (0, g.useState)(!1),
                n_ = (0, g.useRef)(null),
                nH = (0, g.useCallback)(e => {
                    (null != n_.current && (cancelAnimationFrame(n_.current), n_.current = null), null != e) ? nq(!0): n_.current = requestAnimationFrame(() => {
                        n_.current = null, nq(!1)
                    })
                }, []);
            (0, g.useEffect)(() => () => {
                null != n_.current && cancelAnimationFrame(n_.current)
            }, []);
            let [nI, nA] = (0, g.useState)(!1), [nF, nW] = (0, g.useState)(!1), [nO, nK] = (0, g.useState)(!0), [nV, n$] = (0, g.useState)(null), nY = (0, g.useRef)(!1), nB = (0, g.useRef)(0), nX = (0, ec.a)(() => (nB.current += 1, () => {
                nB.current -= 1
            })), nQ = (0, g.useRef)(!1), [nZ, nU] = (0, g.useState)(!1), [nG, nJ] = (0, g.useState)(0), [n0, n1] = (0, g.useState)(0), [n2, n3] = (0, g.useState)(!1), n4 = (0, D.b)((e, t) => {
                let n = te ? (0, ea.a)(e).height : e.contentRect.height;
                nJ(n), ar("composer", n), n3(e.contentRect.width < 640);
                let i = t.querySelector(`[${I.a}]`)?.getBoundingClientRect().height ?? 0;
                n1(Math.max(0, e.contentRect.height - (0, w.b)(i, tM)))
            }), [n5, n6] = (0, g.useState)(null), [n8, n7] = (0, g.useState)(!1), [n9, ie] = (0, g.useState)(th);
            n9 !== th && (ie(th), t7({}), ti(!1), tl(null), nW(!1), n$(null), nM(null), nL(!1), n7(!1), nz(!1));
            let [it, ii] = (0, g.useState)(e7);
            it !== e7 && (ii(e7), n$(null), nM(null));
            let ia = eD || nV?.stage === "minimized",
                il = (0, s.a)(+!!ia),
                ir = (0, c.a)(() => 1 - il.get()),
                io = (0, g.useCallback)(e => il.on("change", e), [il]),
                is = (0, g.useCallback)(() => 1 === il.get(), [il]),
                ic = (0, g.useSyncExternalStore)(io, is, () => ia);
            nS?.target !== "minimized" || ia || nM({
                target: nj
            });
            let {
                isCompact: iu,
                isChatCompact: id,
                canTogglePresentation: ih
            } = (0, Z.c)({
                pendingFormId: e7,
                presentation: nj,
                forceExpanded: eN,
                hasTranscript: td
            }), ip = !iu && !eT && !ia, im = te && !e6 ? !iu : e4;
            (!e6 || eT || eD || !im) && nT && nL(!1);
            let [ig, iv] = (0, g.useState)(() => j && iu && !eD);
            ig && (!iu || eD) && iv(!1);
            let ix = !eD && !ia && (te && !e6 || !iu || nN || nD || nT || tn || tD),
                ib = im && (e6 ? !eD && !ia : te || ix),
                iw = e6 && ib,
                iy = te && e6 && iu && ib && !eT && !e9 && !ts && null != eQ && tw?.type === "loading",
                iz = eG && te && !e9 && !ny && tu && (tz || !iy && tw?.type === "loading"),
                ij = iu && iz,
                iC = te && iu && !eT && !eD && !e9,
                ik = e3 || te,
                iS = ik || iw && "panel" === L && iu;
            (0, g.useEffect)(() => {
                let e, t = ng.current;
                if (null == t || !e6 || eT || eD || !im) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, nL(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), nL(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, [th, e6, eT, eD, im]);
            let iM = !eT && !iu && !eD && !eN && !tn && !nZ,
                iE = (0, g.useEffectEvent)(e => {
                    null == ng.current || null != e && ez(ng.current, e.target, tS) || (nM(null), nC("compact"))
                }),
                iR = (0, g.useEffectEvent)(() => {
                    let e = ng.current,
                        t = document.activeElement;
                    null != e && t instanceof HTMLIFrameElement && !ez(e, t, tS) && iE()
                });
            (0, g.useEffect)(() => {
                if (!iM) return;
                document.addEventListener("pointerdown", iE, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && iR()
                        })
                    };
                window.addEventListener("blur", t);
                let n = te ? en.c.subscribe("browser-sidebar-web-contents-pointer-down", () => iE()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", iE, !0)
                }
            }, [te, iM]);
            let iN = tx?.type === "loading",
                iP = (0, ec.a)(() => {
                    ng.current?.focus({
                        preventScroll: !0
                    }), nR(!1), nM(null), eH(!1), nC("expanded")
                }),
                [iT, iL] = (0, g.useState)(() => new Set),
                iD = (0, ec.a)(e => {
                    iL(t => new Set([...t, e]))
                }),
                iq = "ready" !== tf.type ? tf : {
                    type: "ready",
                    value: tf.value.map(e => ({
                        id: e.id,
                        content: (0, i.jsx)(T, {
                            title: e.title,
                            preview: e.preview,
                            onOpen: () => {
                                e.onOpen(), iP()
                            },
                            onDismiss: te ? () => iD(e.id) : e.onDismiss
                        })
                    }))
                },
                [i_, iH] = (0, g.useState)(iN);
            i_ !== iN && (iH(iN), n7(!1), nz(!1)), (0, g.useEffect)(() => {
                if (!ij || eU || eT || eD || iN) return;
                let e = window.setTimeout(() => nz(!0), 1e4);
                return () => window.clearTimeout(e)
            }, [th, ij, eU, eT, eD, iN]);
            let iI = iq;
            te && iN && !n8 ? iI = {
                type: "ready",
                value: [{
                    id: "working",
                    content: (0, i.jsx)(T, {
                        title: eF,
                        preview: "",
                        isWorking: !0,
                        workingContent: eX,
                        onOpen: iP,
                        onDismiss: () => n7(!0)
                    })
                }]
            } : te && "ready" === iq.type && (iI = {
                ...iq,
                value: iq.value.filter(e => !iT.has(e.id))
            }), "ready" !== iI.type && nE && nR(!1);
            let iA = "ready" === iI.type && iI.value.length > 0 && (ia ? eD && (te ? ic : nE) && !tn : !te && iu),
                iF = tw?.type !== "loading" && (tw?.unread !== !0 || iA) ? null : tw,
                iW = iN || tx?.unread === !0 && (eD || !iA),
                iO = (0, g.useEffectEvent)(e => {
                    if ("Escape" === e.key && !e.defaultPrevented)
                        if (e.preventDefault(), nx.current?.contains(document.activeElement) && nv.current?.focus({
                                preventScroll: !0
                            }), te) {
                            if (iN) n7(!0);
                            else if ("ready" === iI.type)
                                for (let e of iI.value) iD(e.id)
                        } else nR(!1)
                });
            (0, g.useEffect)(() => {
                if (!eT && eD && iA) return document.addEventListener("keydown", iO), () => document.removeEventListener("keydown", iO)
            }, [iA, eT, eD]);
            let iK = im && ib && !eD && !iy && null == eS,
                iV = te && e6 && iK && tw?.unread === !0,
                i$ = tj.formatMessage({
                    id: "quickChat.running",
                    defaultMessage: "Running"
                }),
                iY = tj.formatMessage({
                    id: "quickChat.unreadResponse",
                    defaultMessage: "Unread response"
                }),
                iB = iN ? i$ : iY,
                iX = ni.endsWith("left"),
                iQ = "bottom-center" === ni,
                iZ = iX ? "left" : "right",
                iU = na && !ia ? t_ : 0,
                iG = 46 * (null == U) + (na || ia ? 0 : t_),
                iJ = n5 ?? nl ?? C,
                i0 = iA && !eD ? tG : 0,
                i1 = (U?.height ?? tN) - tT - (na ? i0 + iU : 0),
                i2 = Math.max(0, i1 - 32 - iG - (na ? 0 : i0)),
                i3 = null == U ? t1 / 2 : Math.max(0, t1 - 20),
                i4 = te && null != t$ ? Math.min(i3, t$ + 12) : i3,
                i5 = (nG || 46) + (im && ib ? 46 : 0) + (ij ? tO : 0) + 6 * !te,
                i6 = (nG || 46) + 46 * !!iw + (iz ? tO : 0) + 6 * !te,
                i8 = ej(iJ.height, Math.min(Math.max(400, nG + 46), i2), i2),
                i7 = Math.min(iu ? i5 : Math.max(400, i5), i2),
                i9 = t2 ? i4 : Math.min(eu + 12, i4),
                ae = ej(iu ? i5 : iJ.height, i7, i2),
                at = (0, s.a)(ae),
                an = (0, g.useRef)(!1),
                ai = nG > 0,
                aa = ig && iz,
                al = ig ? {
                    height: "auto",
                    maxHeight: i2
                } : {
                    height: at
                };

            function ar(e, t) {
                if (!ig) return;
                let n = tV.current;
                n[e] = t, n.complete || n.composer <= 0 || iz && n.response <= 0 || (n.complete = !0, at.jump(Math.min(i5 - (nG || 46) + n.composer + (ij ? n.response - tO : 0), i2)), iv(!1))
            }
            let ao = eT || tE || nZ || !te && (eD || null != nS) ? 0 : .3,
                as = ej(iJ.width + 12, i9, i4),
                ac = (0, X.d)(ni, {
                    height: ae,
                    width: as
                }, i1, t1, 12, iG),
                au = (0, c.a)(() => e6 && iu ? 0 : ej((at.get() - i6) / Math.max(1, i8 - i6), 0, 1)),
                ad = (0, c.a)(() => Math.max(0, at.get() - nG - 46 * (iw ? 1 : au.get()))),
                ah = (0, c.a)(() => 1 - au.get()),
                ap = (0, g.useEffectEvent)(() => {
                    let e;
                    if (ig) return;
                    let t = !an.current && iu;
                    if (ai && (an.current = !0), nD || t || 0 === ao) return void at.jump(ae);
                    let n = () => {
                        if (te) {
                            let e = nm.current;
                            if (null != e && e.offsetHeight !== Math.round(nG)) return void nJ(e.offsetHeight)
                        }
                        let t = (0, u.a)(at, ae, {
                            duration: ao,
                            ease: S.e
                        });
                        e = () => t.stop()
                    };
                    return te ? d.b.update(n) : n(), () => {
                        (0, d.a)(n), e?.()
                    }
                }),
                am = te ? nG : null,
                ag = te ? null : ai,
                af = te ? null : iu;
            (0, g.useLayoutEffect)(() => ap(), [ae, ao, am, ag, af, ig]);
            let av = {
                    height: Math.min(36, i2),
                    width: Math.min(36, i4)
                },
                ax = {
                    bubbleSize: av,
                    composerWidth: as,
                    composerHorizontalInset: 12,
                    reservedDockPosition: ex,
                    viewportWidth: t1,
                    viewportHeight: i1
                },
                ab = (0, X.f)(eD ? ni : nV?.dockPosition ?? nn, ex),
                aw = (0, X.d)(ab, av, i1, t1, 0, iG),
                ay = eD ? av : {
                    height: ae,
                    width: as
                },
                az = eD ? aw : ac,
                aj = eD ? 16 : 10,
                aC = {
                    left: aj,
                    right: Math.max(aj, t1 - ay.width - aj),
                    top: iG + aj,
                    bottom: Math.max(aj, i1 - ay.height - aj)
                };
            (0, g.useLayoutEffect)(() => {
                nu.current = null
            }, [U, tt, tM]);
            let ak = e => {
                    if (!eg) return;
                    nu.current = null == U ? null : ng.current?.parentElement?.getBoundingClientRect() ?? null, nd.current = to ? ew(tt, tM, tT, av.height) : null;
                    let t = {
                        x: (0, w.b)(e.clientX - (nu.current?.left ?? 0), tM),
                        y: (0, w.b)(e.clientY - (nu.current?.top ?? 0), tM)
                    };
                    ns.current = {
                        x: t.x - az.x - nh.get(),
                        y: t.y - az.y - np.get()
                    }, nc.current = {
                        point: t,
                        target: null
                    }, nr.start(e)
                },
                aS = (0, X.d)(ab, {
                    height: ae,
                    width: as
                }, i1, t1, 12, iG),
                aM = aw.x - aS.x,
                aE = aw.y - aS.y,
                aR = {
                    top: aE,
                    right: as - aM - av.width,
                    bottom: ae - aE - av.height,
                    left: aM
                },
                aN = `inset(${aR.top}px ${aR.right}px ${aR.bottom}px ${aR.left}px round var(--floating-panel-radius))`,
                aP = (0, c.a)(() => {
                    let e = il.get(),
                        t = at.get() - ae,
                        n = e * (aR.top + (na ? 0 : t)),
                        i = 6 + e * (aR.right - 6),
                        a = 6 + e * (aR.bottom + (na ? t : 0) - 6),
                        l = 6 + e * (aR.left - 6),
                        r = "var(--radius-token-composer-single-line)",
                        o = ia || tn || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round ${r})` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: r,
                        clip: o
                    }
                }),
                aT = (0, c.a)(() => aP.get().top),
                aL = (0, c.a)(() => aP.get().right),
                aD = (0, c.a)(() => aP.get().bottom),
                aq = (0, c.a)(() => aP.get().left),
                a_ = (0, c.a)(() => aP.get().radius),
                aH = (0, c.a)(() => aP.get().clip);
            (0, g.useLayoutEffect)(() => {
                if (!te) return;
                let e = (0, u.a)(il, +!!ia, {
                    duration: .3 * !tE,
                    ease: S.e
                });
                return () => e.stop()
            }, [te, ia, il, tE]);
            let aI = na ? {
                    top: aE + av.height
                } : {
                    bottom: ae - aE
                },
                aA = (0, g.useRef)({
                    dockPosition: ni,
                    dockThreadKey: th,
                    isMinimized: eD
                }),
                aF = (0, g.useEffectEvent)(e => {
                    let t = (0, X.d)(e, {
                        height: ae,
                        width: as
                    }, i1, t1, 12, iG);
                    nh.stop(), np.stop(), nh.jump(nh.get() + t.x - ac.x), np.jump(np.get() + t.y - ac.y);
                    let n = tE ? {
                        duration: 0
                    } : ep;
                    (0, u.a)(nh, 0, n), (0, u.a)(np, 0, n)
                });
            (0, g.useLayoutEffect)(() => {
                let e = aA.current;
                if (aA.current = {
                        dockPosition: ni,
                        dockThreadKey: th,
                        isMinimized: eD
                    }, e.dockThreadKey !== th) {
                    no.current = !0, nY.current = !0, nr.cancel(), nh.jump(0), np.jump(0);
                    return
                }
                if (eT) {
                    nh.jump(0), np.jump(0);
                    return
                }
                e.isMinimized !== eD && aF(e.dockPosition)
            }, [ni, th, nr, nh, np, eT, eD]), (0, g.useLayoutEffect)(() => () => {
                nh.stop(), np.stop()
            }, [nh, np]);
            let aW = function(e, t) {
                    let n, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = {
                            ...ay,
                            left: az.x + nh.get(),
                            top: az.y + np.get()
                        };
                    null != U && null == nu.current && (nu.current = ng.current?.parentElement?.getBoundingClientRect() ?? null);
                    let l = null == U ? null : nu.current,
                        r = {
                            x: t.point.x - (0, w.b)(l?.left ?? 0, tM),
                            y: t.point.y - (0, w.b)(l?.top ?? 0, tM)
                        },
                        o = tr && !eD ? (function(e) {
                            let {
                                bubbleSize: t,
                                composerWidth: n,
                                composerHorizontalInset: i,
                                reservedDockPosition: a,
                                viewportWidth: l,
                                viewportHeight: r
                            } = e, o = t.width + 4, s = {
                                height: t.height,
                                width: Math.max(0, Math.min(n - i, (l - 2 * (16 + o + 4)) / 3))
                            }, c = new Map;
                            for (let e of ey(a, !1, !0)) {
                                let t = (0, X.d)(e, {
                                    height: s.height,
                                    width: n
                                }, r, l, i);
                                if (c.has(t.x)) continue;
                                let {
                                    x: a,
                                    y: u
                                } = (0, X.d)(e, s, r, l), d = a;
                                "bottom-center" !== e && (d += "bottom-left" === e ? o : -o), c.set(t.x, {
                                    position: e,
                                    rect: {
                                        ...s,
                                        left: d,
                                        top: u
                                    }
                                })
                            }
                            return Array.from(c.values())
                        })(ax).find(e => {
                            let {
                                rect: t
                            } = e;
                            return r.x >= t.left && r.x <= t.left + t.width && r.y >= t.top && r.y <= t.top + t.height
                        })?.position : void 0;
                    n = te ? o ?? (0, X.b)(a, i1, t1, ey(ex, eD, t5), 12 * !eD, iG) : (0, X.e)({
                        ...a,
                        left: a.width >= t1 / 2 - 2 * aj ? r.x - a.width / 2 : a.left
                    }, i1, t1, eD);
                    let s = null == ex ? n : (0, X.f)(n, ex),
                        c = {
                            x: !te || tr ? Math.min(r.x, t1 - r.x) : t1 - r.x,
                            y: te ? i1 - r.y : Math.min(r.y - iG, i1 - r.y)
                        },
                        u = (!tr || c.x >= 0 && c.y >= 0) && c.x <= 16 + av.width && c.y <= 16 + av.height,
                        d = () => {
                            let n = nd.current;
                            if (!to || null == n || 0 === n.svgRect.height || !(e instanceof MouseEvent) || e.clientX < 0 || e.clientX > Math.min(n.right, window.innerWidth) || e.clientY < 0 || e.clientY > window.innerHeight) return !1;
                            let o = 20 * n.svgRect.height / 184,
                                s = n.svgRect.top + o,
                                c = n.svgRect.top + n.svgRect.height - o,
                                u = n.svgRect.left + n.svgRect.width / 2,
                                d = 8 * tM;
                            if (e.clientY < s - d || e.clientY > c + d) return !1;
                            if (e.clientX >= u - d) return !0;
                            if (eD || t.offset.x < 8) return !1;
                            let {
                                left: h,
                                top: p
                            } = a;
                            i && (h = r.x - ns.current.x, p = r.y - ns.current.y, null != U && (h = ej(h, aC.left, aC.right), p = ej(p, aC.top, aC.bottom)));
                            let m = (l?.left ?? 0) + (h + a.width - 6) * tM,
                                g = (l?.top ?? 0) + p * tM,
                                f = (l?.top ?? 0) + (p + a.height - 6) * tM;
                            return m >= u - d && Math.min(f, c) > Math.max(g, s)
                        };
                    if (te && !eD) {
                        let e = r.x < t1 / 2 ? "bottom-left" : "bottom-right",
                            t = tr && u && e !== ex ? e : void 0,
                            i = nc.current;
                        if (null != i) {
                            let e = r.x - i.point.x,
                                t = r.y - i.point.y;
                            Math.hypot(e, t) >= 8 && (e >= 0 && t > 0 && t >= e ? i.target = "minimize" : e > 0 && e > 2 * Math.abs(t) ? i.target = null : (e < 0 || t < 0) && (i.target = null), i.point = r)
                        }
                        let a = r.y - ns.current.y + ay.height - i1;
                        return {
                            dockPosition: s,
                            requestedDockPosition: n,
                            isNearDock: !1,
                            shouldMinimize: null != t || null == o && "bottom-right" === s && i?.target === "minimize" && a >= .5 * ay.width,
                            isRightPaneTarget: null == o && null == t && d(),
                            bubbleDropPosition: t
                        }
                    }
                    let h = (0, X.d)(s, ay, i1, t1, 12, iG),
                        p = !eD && "bottom-center" !== s && 16 >= Math.abs(a.left - h.x) && 16 >= Math.abs(a.top - h.y);
                    return {
                        dockPosition: s,
                        requestedDockPosition: n,
                        isNearDock: p,
                        shouldMinimize: p && u,
                        isRightPaneTarget: !u && d()
                    }
                },
                aO = (e, t) => {
                    if (!eg) return;
                    let n = t && !t5;
                    (null == ev || n) && (null != th || te && !n) ? (0, Q.c)(e5, {
                        threadKey: th ?? null,
                        minimized: n
                    }, e, eP) : t7(t => ({
                        expanded: n ? t.expanded : e,
                        minimized: n ? (0, X.a)(e) : t.minimized
                    }))
                },
                aK = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ay,
                        i = (0, X.d)(ni, ay, i1, t1, 12 * !eD, iG),
                        a = {
                            x: i.x + nh.get(),
                            y: i.y + np.get()
                        },
                        l = (0, X.d)((0, X.f)(e, ex), n, i1, t1, 12 * !eD, iG);
                    nh.stop(), np.stop(), nh.jump(a.x - l.x), np.jump(a.y - l.y), t && (0, f.flushSync)(() => {
                        aO(e, eD)
                    });
                    let r = te ? {
                            duration: .3,
                            ease: S.e
                        } : ep,
                        o = tE ? {
                            duration: 0
                        } : r;
                    nW(!0), Promise.all([(0, u.a)(nh, 0, o), (0, u.a)(np, 0, o)]).then(() => {
                        nW(0 !== nh.get() || 0 !== np.get())
                    })
                },
                aV = (0, g.useEffectEvent)(() => {
                    no.current = !0, nr.cancel(), aK(ni, !1), n$(null), nM(null), ti(!1), tl(null)
                });
            (0, g.useLayoutEffect)(() => {
                if (!tn) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), aV())
                    },
                    t = () => aV();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    no.current = !0, nr.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, [nr, tn]);
            let a$ = () => {
                    nR(!1), nK(!tn), n$(null), nM(te ? null : {
                        target: "minimized"
                    }), eH(!0)
                },
                aY = () => {
                    (0, f.flushSync)(() => {
                        nR(!1), nM(te ? null : {
                            target: nj
                        }), eH(!1)
                    }), aG()
                },
                aB = () => {
                    nM(null), nC(iu ? "expanded" : "compact")
                },
                aX = !eT && !eD,
                aQ = aX && (null != e_ || !ef && !iu && !eN),
                aZ = () => {
                    null != e_ ? e_() : (nM(null), nC("compact"))
                },
                aU = () => {
                    let e = nm.current;
                    return e9 ? (0, W.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                },
                aG = () => {
                    te && null == ev && (nM(null), nC("expanded")), aU()?.focus({
                        preventScroll: !0
                    })
                };
            (0, H.a)("focusMainChat", eD ? aY : aG, {
                enabled: !eT && e9,
                isActive: () => {
                    if (null == ng.current || null != ng.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                    if (e9) return eD;
                    let e = aU();
                    if (null == e) return !1;
                    let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                    return null == t || !nm.current?.contains(t) || t === nm.current
                }
            });
            let aJ = tj.formatMessage(iu ? {
                    id: "quickChat.expandFloatingChat",
                    defaultMessage: "Expand floating chat"
                } : {
                    id: "quickChat.showCompactFloatingChat",
                    defaultMessage: "Show compact floating chat"
                }),
                a0 = ih ? {
                    label: aJ,
                    onToggle: aB
                } : void 0,
                a1 = tj.formatMessage({
                    id: "quickChat.resizeWidth",
                    defaultMessage: "Resize chat width"
                }),
                a2 = tj.formatMessage({
                    id: "quickChat.resizeHeight",
                    defaultMessage: "Resize chat height"
                }),
                a3 = (0, ec.a)(() => {
                    nM(null), e6 && nC("expanded")
                }),
                a4 = (0, ec.a)(() => {
                    let e = nf.current;
                    eT || tm.isFloatingChatNavigationCurrent?.() === !1 || null == e || null != e.closest("[hidden], [inert], [aria-hidden=true]") || (nM(null), eD && (nR(!1), eH(!1)), nk("expanded"))
                }),
                a5 = {
                    isCompact: iu,
                    canShowCompactPreview: iC,
                    isNarrow: n2,
                    isChromeRevealed: ix,
                    isHeaderVisible: ib,
                    isWorkingPreviewVisible: iy,
                    isComposerFocused: te ? nI || nD : ix,
                    isDockedTop: na,
                    isHidden: eT,
                    isMinimized: ia,
                    shouldReduceMotion: tE,
                    onSubmitStart: te || e6 ? a3 : () => nM(null),
                    onMessageSubmitted: eT ? void 0 : a4
                };

            function a6(e) {
                !eT && null != eR && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (ng.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }

            function a8(e) {
                !e6 && e.target instanceof Element && (!ng.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }
            let a7 = O(a5, {
                    isMoving: tn || nZ || nF,
                    composerContentHeight: n0,
                    dockedReservePx: nG > n0 + 6 * !!te ? ae + 10 : 0
                }),
                a9 = (0, i.jsxs)("div", {
                    ref: e => {
                        nm.current = e, n4(e)
                    },
                    className: (0, r.b)(E.a.floatingComposerInset, "mt-auto shrink-0", eg && !t2 && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", iu && na && "[--composer-overlay-placement:bottom]"),
                    onPointerDownCapture: a6,
                    onPointerUp: e => {
                        e.target === e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && !nY.current && aG()
                    },
                    onContextMenu: a8,
                    children: [ik && !eD && (!iu || ij) ? (0, i.jsx)("div", {
                        "aria-hidden": !0,
                        className: "border-t border-default"
                    }) : null, (0, i.jsx)(eo.b, {
                        value: {
                            ...tm,
                            hasComposerSurface: iS,
                            isFloatingChatSurface: !0,
                            isFloatingTranscriptOpen: !eT && !iu && !eD,
                            floatingChatSurfaceRef: ng,
                            onFloatingDictationRowChange: nH,
                            floatingComposerPresentation: a5,
                            transcriptTarget: tF,
                            followLatestTranscript: te ? iu : tm.followLatestTranscript
                        },
                        children: (0, i.jsx)(F.a, {
                            value: aQ ? aZ : ef ? "editor-only" : null,
                            children: (0, i.jsx)(A.a, {
                                value: {
                                    target: tI,
                                    homeBannerPlacement: "inline"
                                },
                                children: a7
                            })
                        })
                    })]
                }),
                le = iu ? "composer" : "toolbar",
                lt = (0, i.jsx)(B.c, {
                    size: null != e8 && iu ? "iconCircle" : le,
                    onMinimize: a$
                }),
                ln = te || null != e8 ? null : lt;
            t = iy ? (0, i.jsx)(N.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 px-2 text-start text-sm text-secondary",
                "aria-label": aJ,
                "aria-describedby": tC,
                "data-quick-chat-drag-handle": !0,
                onClick: () => {
                    aB(), aU()?.focus({
                        preventScroll: !0
                    })
                },
                children: (0, i.jsx)("span", {
                    id: tC,
                    className: "min-w-0 truncate",
                    children: eQ
                })
            }) : null != eS ? eS({
                leadingControl: ln
            }) : (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-1",
                children: [ln, iV && (0, i.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    "aria-label": iY
                }), (0, i.jsx)("h2", {
                    id: tC,
                    "data-unread": iV || void 0,
                    "data-dropdown-overlay-side": "auto",
                    className: (0, r.b)("group/floating-title min-w-0 text-base font-medium text-secondary", (!te || null == eW) && "truncate"),
                    children: eW ?? (te ? (0, i.jsx)(B.b, {
                        children: (0, i.jsx)(ee.a, {
                            children: e4 ? eF : (0, i.jsx)(x.a, {
                                id: "quickChat.newChatTitle",
                                defaultMessage: "New chat"
                            })
                        })
                    }) : eF)
                }), !te && (0, i.jsx)("div", {
                    className: "flex min-w-5 flex-1 items-center justify-end",
                    children: null != iF && (0, i.jsx)("div", {
                        className: "flex min-w-0 justify-end",
                        role: "status",
                        "aria-label": "loading" === iF.type ? i$ : iY,
                        children: (0, i.jsx)(er.a, {
                            statusState: iF
                        })
                    })
                })]
            });
            let li = (0, i.jsxs)($.a, {
                    value: {
                        id: tS,
                        registerOpen: e6 ? nX : void 0
                    },
                    children: [t, eR?.({
                        isCompact: iu,
                        isDragging: tn,
                        open: tD,
                        onMinimize: a$,
                        onOpenChange: tq
                    }), null != e8 && (0, i.jsxs)("div", {
                        className: "-me-0.5 flex shrink-0 items-center",
                        children: [lt, (0, i.jsx)(B.d, {
                            disabled: eL?.openRightPaneDisabled,
                            size: iu ? "iconCircle" : "toolbar",
                            onOpen: e8
                        })]
                    }), null == e8 && te && lt]
                }),
                la = (0, i.jsx)("div", {
                    className: "contents",
                    onPointerDownCapture: a6,
                    onContextMenu: a8,
                    children: te ? (0, i.jsx)(B.a, {
                        isCompact: e6 && iu,
                        isVisible: ib,
                        isDisabled: eM,
                        showDivider: !ij,
                        children: li
                    }) : (0, i.jsx)(B.e, {
                        expandOnClick: e6,
                        animateChrome: !tE && !eD && null == nS,
                        isChromeRevealed: ib,
                        isCompact: iu,
                        isDisabled: eM,
                        reserveSpace: e6 && im && !iu,
                        presentationToggle: eE ? a0 : void 0,
                        children: li
                    })
                }),
                ll = (0, i.jsx)(h.a.div, {
                    ref: z.d,
                    className: "pointer-events-none absolute",
                    style: te ? {
                        top: ab.startsWith("top") ? aE : void 0,
                        bottom: ab.startsWith("top") ? void 0 : aR.bottom,
                        left: aM,
                        width: av.width,
                        height: av.height,
                        opacity: il
                    } : {
                        inset: 0
                    },
                    "aria-hidden": !eD,
                    "data-pip-obstacle": eD ? tp : void 0,
                    "data-floating-chat-minimized": "",
                    animate: te ? void 0 : {
                        opacity: +!!ia
                    },
                    initial: !1,
                    inert: !eD || void 0,
                    transition: tE ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: S.e
                    },
                    children: (0, i.jsx)(N.a, {
                        ref: nv,
                        className: (0, r.b)("absolute inset-0 m-auto touch-none", eD && "pointer-events-auto"),
                        "aria-description": iW ? iB : void 0,
                        "aria-label": eV ?? tj.formatMessage({
                            id: "quickChat.restoreFloatingChat",
                            defaultMessage: "Restore floating chat: {title}"
                        }, {
                            title: eF
                        }),
                        autoFocus: !eT && eD && nO,
                        color: "ghostSecondary",
                        size: "composer",
                        uniform: !0,
                        onClick: e => {
                            0 !== e.detail && nY.current || aY()
                        },
                        onPointerEnter: e => {
                            te || "touch" === e.pointerType || nR(!0)
                        },
                        onKeyDown: e => {
                            "ready" === iI.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), te || (0, f.flushSync)(() => nR(!0)), nx.current?.querySelector("button")?.focus({
                                preventScroll: !0
                            }))
                        },
                        onPointerDown: e => {
                            t2 || 0 !== e.button || (nY.current = !1, e.currentTarget.setPointerCapture(e.pointerId), ak(e))
                        },
                        children: iN && null != tx && null == eO ? (0, i.jsx)(er.a, {
                            statusState: tx,
                            size: te ? "default" : "compact"
                        }) : (0, i.jsx)(K.a, {
                            badgeEnabled: iW,
                            children: eO ?? (0, i.jsx)(P.Kb, {})
                        })
                    }, eD ? "minimized" : "preview")
                }),
                lr = "ready" === iI.type ? (0, i.jsx)(q, {
                    items: iI.value,
                    availableHeight: Math.max(0, (U?.height ?? tN) - iG - tT - (eD ? av.height : i5) - 32 - 12),
                    isDockedTop: na,
                    shouldReduceMotion: tE
                }) : null;
            !te && (n = eh, ia ? n = aN : null != nS || tn || (n = "none"));
            let lo = (0, i.jsxs)(R, {
                contentRef: nf,
                allowCompactResize: !0,
                animateSurface: null != nS || !eD,
                elevateComposer: e6 && !ia,
                contentStyle: te ? {
                    ...al,
                    borderRadius: a_
                } : void 0,
                surfaceStyle: te ? {
                    top: aT,
                    right: aL,
                    bottom: aD,
                    left: aq,
                    borderRadius: a_
                } : void 0,
                currentSize: {
                    height: ae,
                    width: as
                },
                heightLabel: a2,
                resizeFromCenter: te && iQ,
                fixedHorizontalEdge: te && !iQ ? iZ : void 0,
                isCompact: iu,
                isCompactChromeRevealed: im && ib,
                isMinimized: ia,
                keepSurfaceInset: !0,
                maximumSize: {
                    height: i2,
                    width: i4
                },
                minimizedContent: null == eK ? ll : (0, i.jsx)(V.a, {
                    disableNative: !0,
                    items: eK,
                    children: (0, i.jsx)("div", {
                        className: "contents",
                        children: ll
                    })
                }),
                minimizedSurfaceBounds: aR,
                minimumSize: {
                    height: i7,
                    width: i9
                },
                prefersCompactPresentation: !0,
                resizable: !t2,
                background: ia || te ? "panel" : L,
                sectionRef: ng,
                sectionProps: {
                    ref: a,
                    "aria-label": iK ? void 0 : eF,
                    "aria-labelledby": iK ? tC : void 0,
                    "aria-modal": null != U && void 0,
                    animate: {
                        ...l ? {
                            opacity: +!!ai,
                            translateY: 8 * (!ai && !tE)
                        } : {},
                        width: as,
                        scale: te || nV?.stage !== "approaching" ? 1 : .95
                    },
                    "data-quick-chat-drag-handle": !te && iu || void 0,
                    "data-pip-obstacle": eD ? void 0 : tp,
                    "data-state": "open",
                    drag: !t2,
                    dragConstraints: null == U ? void 0 : {
                        left: aC.left - az.x,
                        right: aC.right - az.x,
                        top: aC.top - az.y,
                        bottom: aC.bottom - az.y
                    },
                    dragElastic: null == U ? void 0 : 0,
                    dragControls: nr,
                    dragListener: !1,
                    dragMomentum: !1,
                    initial: !!l && !tE && {
                        opacity: 0,
                        translateY: 8
                    },
                    role: null == U ? "dialog" : "region",
                    tabIndex: -1,
                    style: {
                        ...{
                            "--quick-chat-expansion": te ? au : void 0
                        },
                        ...al,
                        top: na ? iG + 10 : "auto",
                        bottom: na ? "auto" : 10 + tT,
                        left: iQ ? "50%" : "auto",
                        right: "auto",
                        ...!iQ && {
                            [iZ]: 10
                        },
                        translate: iQ ? "-50% 0" : void 0,
                        x: nh,
                        y: np,
                        originX: "bottom-center" === ab ? .5 : Number(ab.endsWith("right")),
                        originY: +!ab.startsWith("top")
                    },
                    transition: {
                        duration: ao,
                        ease: S.e,
                        scale: {
                            duration: .3 * !tE,
                            ease: S.e
                        }
                    },
                    onBlurCapture: e => {
                        if (!(eT || ez(e.currentTarget, e.relatedTarget, tS))) {
                            if (null == e.relatedTarget) {
                                let t = e.currentTarget;
                                queueMicrotask(() => {
                                    t.ownerDocument.hasFocus() && ez(t, t.ownerDocument.activeElement, tS) || (nP(!1), nA(!1), nR(!1))
                                });
                                return
                            }
                            nP(!1), nA(!1), nR(!1), (!te || e6) && iM && null == e.target.closest("[inert]") && (nM(null), nC("compact"))
                        }
                    },
                    onClick: e => {
                        if (!(e6 && (0 !== e.button || e.ctrlKey) || eD || nY.current || e.detail > 0 && nQ.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                            if (iu && (e.target === e.currentTarget || nm.current?.contains(e.target))) return void aG();
                            if (e6) {
                                if (!im || !ih) return;
                                iu && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                                    preventScroll: !0
                                }), nM(null), nC("expanded");
                                return
                            }
                            if (te) {
                                iu && ih && aG();
                                return
                            }
                            im && ih && e.target.closest("header[data-quick-chat-drag-handle]") && (iu && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                                preventScroll: !0
                            }), aB())
                        }
                    },
                    onDoubleClick: e => {
                        te && !eD && !nY.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (nM(null), nC("expanded"), n6(null), J(e5, C, {
                            dockPosition: "bottom-right",
                            hasConversation: eP
                        }), aK("bottom-right", !0, {
                            height: ej(C.height, i7, i2),
                            width: ej(C.width + 12, i9, i4)
                        }))
                    },
                    onClickCapture: e => {
                        !eT && nY.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
                    },
                    onDrag: (e, t) => {
                        let n = aW(e, t),
                            i = n.bubbleDropPosition ?? (te ? nn : n.dockPosition);
                        if (tr && (n.isRightPaneTarget ? tl("right-pane") : n.shouldMinimize ? tl(`bubble-${i}`) : tl(eD ? `bubble-${n.dockPosition}` : `composer-${n.dockPosition}`)), !n.isRightPaneTarget && null != n.dockPosition && (te ? n.shouldMinimize : n.isNearDock)) {
                            let e = n.shouldMinimize ? "minimized" : "approaching";
                            (nV?.stage !== e || nV.dockPosition !== i) && (n$({
                                dockPosition: i,
                                stage: e
                            }), (n.shouldMinimize || nV?.stage === "minimized") && nM(te ? null : {
                                target: n.shouldMinimize ? "minimized" : nj
                            }))
                        } else null != nV && "restored" !== nV.stage && (n$({
                            ...nV,
                            stage: "restored"
                        }), "minimized" === nV.stage && nM(te ? null : {
                            target: nj
                        }))
                    },
                    onDragEnd: (e, t) => {
                        if (no.current) return;
                        tl(null);
                        let n = aW(e, t, !0);
                        if (n.isRightPaneTarget) {
                            nh.jump(0), np.jump(0), n$(null), nM(null), ti(!1), e8?.();
                            return
                        }
                        n.shouldMinimize ? (0, f.flushSync)(() => {
                            null != n.bubbleDropPosition ? aO(n.bubbleDropPosition, !0) : te && t5 || aO(te ? nn : n.requestedDockPosition, !0), a$()
                        }) : (aK(n.requestedDockPosition, !0), null != nV && "restored" !== nV.stage && (n$({
                            ...nV,
                            stage: "restored"
                        }), "minimized" === nV.stage && nM(te ? null : {
                            target: nj
                        }))), ti(!1)
                    },
                    onDragStart: () => {
                        nR(!1), tl(null), no.current = !1, nY.current = !0, ti(!0), nh.stop(), np.stop()
                    },
                    onFocusCapture: e => {
                        if (e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]")) {
                            (!te || e6) && nP(!0), nA(!0);
                            let t = "[data-dictation-button], [data-dictation-recording-controls]";
                            (e6 ? im && ih : te) && null == ev && !e.target.closest(t) && !(e.relatedTarget instanceof Element && e.relatedTarget.closest(t)) && !nD && null == n_.current && (nM(null), nC("expanded"))
                        } else e.currentTarget.contains(e.target) && !nm.current?.contains(e.target) && (nA(!1), e6 && e.target.closest("header[data-quick-chat-drag-handle]") && nP(!0))
                    },
                    onKeyDown: e => {
                        if (!aX || "Escape" !== e.key || e.defaultPrevented || e.nativeEvent.isComposing) return;
                        let t = aQ && !e.repeat;
                        !t && (!ef || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) || (e.preventDefault(), e.stopPropagation(), t && aZ())
                    },
                    onKeyDownCapture: e => {
                        eT || "Escape" !== e.key || (nY.current = !0, nr.cancel())
                    },
                    onPointerDownCapture: e => {
                        if (eT || (nY.current = !1, nQ.current = nB.current > 0 && e.target instanceof Element && null != e.target.closest("header[data-quick-chat-drag-handle]"), t2 || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                        let t = e.target.closest("[data-quick-chat-drag-handle]"),
                            n = e.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                            i = nm.current,
                            a = e.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                        if (eg && null != a && i?.contains(a) && (n === a || e.target.contains(a))) t = i;
                        else if (null == t || null != n && n !== t) return;
                        e.preventDefault(), t.setPointerCapture(e.pointerId), ak(e)
                    },
                    onPointerLeave: () => {
                        nx.current?.contains(document.activeElement) || nR(!1)
                    }
                },
                shouldReduceMotion: tE,
                variant: null == U ? "floating" : "content",
                verticalResizeEdge: na ? "bottom" : "top",
                widthLabel: a1,
                onResize: (e, t) => {
                    let n = te && iQ ? 0 : (0, X.c)(ni, e, {
                            height: ae,
                            width: as
                        }, nh.get(), t.width, i1, t1, 12),
                        i = ac.y + np.get(),
                        a = (0, X.d)(ni, t, i1, t1, 12, iG),
                        l = ej(i + (na ? 0 : ae - t.height), iG + 10, i1 - t.height - 10);
                    nh.stop(), np.stop(), (0, f.flushSync)(() => {
                        n6({
                            height: iu ? iJ.height : t.height,
                            width: t.width - 12
                        })
                    }), nh.jump(n), np.jump(l - a.y)
                },
                onResizeEnd: e => {
                    J(e5, {
                        height: iu ? iJ.height : e.height,
                        width: e.width - 12
                    }, {
                        dockPosition: ni,
                        hasConversation: eP
                    }), aK(ni, !1, e)
                },
                onResizingChange: e => {
                    nU(e), e && (nM(null), nh.stop(), np.stop())
                },
                children: [!te && iA && "ready" === iI.type ? (0, i.jsx)("div", {
                    ref: (0, M.a)(nx, t0, z.d),
                    className: (0, r.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !eD && (na ? "top-full" : "bottom-full"), na ? "pt-3" : "pb-3"),
                    "data-pip-obstacle": tp,
                    onClickCapture: () => {
                        (eD ? nv.current : ng.current)?.focus({
                            preventScroll: !0
                        }), nP(!1)
                    },
                    style: eD ? aI : void 0,
                    children: lr
                }) : null, (0, i.jsx)(p.a, {
                    initial: !1,
                    children: te && iA ? (0, i.jsx)(h.a.div, {
                        initial: {
                            opacity: 0,
                            y: 8 * !tE
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: 8 * !tE
                        },
                        transition: {
                            duration: .3 * !tE,
                            ease: S.e
                        },
                        ref: (0, M.a)(nx, t0, z.d),
                        className: (0, r.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !eD && (na ? "top-full" : "bottom-full"), eD && (na ? "pt-1" : "pb-1")),
                        "data-pip-obstacle": "quick-chat",
                        onClickCapture: () => {
                            (eD ? nv.current : ng.current)?.focus({
                                preventScroll: !0
                            }), nP(!1), nA(!1)
                        },
                        style: eD ? aI : void 0,
                        children: eD ? (0, i.jsx)(y.c, {
                            variant: "notice",
                            children: lr
                        }) : lr
                    }, "response-preview") : null
                }), (0, i.jsx)("div", {
                    ref: tZ,
                    className: (0, r.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", na ? "top-full pt-2" : "bottom-full"),
                    hidden: ia
                }), (0, i.jsx)("div", {
                    ref: tU,
                    className: (0, r.b)(E.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", 0 === iU && "pt-2", na ? "w-full" : "w-80", iQ && "left-1/2 -translate-x-1/2", !iQ && (iX ? "left-0" : "right-0"), ia && tn && "invisible"),
                    style: {
                        marginTop: iU
                    },
                    "data-pip-obstacle": tp,
                    children: eC
                }), (0, i.jsxs)(h.a.div, {
                    "aria-hidden": eD,
                    animate: te ? void 0 : {
                        clipPath: n,
                        opacity: +!ia
                    },
                    className: (0, r.b)("relative z-0 flex min-h-0 flex-1 flex-col", !eD && "pointer-events-auto"),
                    "data-floating-chat-surface": !0,
                    "data-floating-chat-dock-position": ni,
                    style: te ? {
                        clipPath: aH,
                        opacity: ir,
                        paddingTop: ig && ib ? 46 : void 0
                    } : void 0,
                    initial: !1,
                    inert: !!eD || void 0,
                    transition: tE || !te && null == nS ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: S.e
                    },
                    onAnimationComplete: e => {
                        nS?.target === (ia ? "minimized" : nj) && "object" == typeof e && "clipPath" in e && e.clipPath === (ia ? aN : eh) && nM(e => e === nS ? null : e)
                    },
                    children: [!te && !im && (0, i.jsx)("div", {
                        className: (0, r.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", na ? "top-full pt-1" : "bottom-full pb-1"),
                        children: (0, i.jsx)(B.c, {
                            standalone: !0,
                            size: le,
                            onMinimize: a$
                        })
                    }), (te || im) && (eR?.({
                        contextMenuTrigger: la,
                        isCompact: iu,
                        isDragging: tn,
                        onMinimize: a$
                    }) ?? la), (0, i.jsxs)("div", {
                        className: (0, r.b)("relative flex min-h-0 flex-1 flex-col", iu && "justify-end"),
                        children: [(0, i.jsx)(eo.b, {
                            value: {
                                ...tm,
                                isFloatingChatSurface: !0,
                                isFloatingTranscriptOpen: ip,
                                followLatestTranscript: te ? iu : tm.followLatestTranscript
                            },
                            children: (0, i.jsxs)(h.a.div, {
                                className: te ? (0, r.b)("overflow-hidden", aa ? "relative flex min-h-0 flex-col justify-end" : "absolute inset-x-0") : "contents",
                                style: te && !aa ? {
                                    bottom: nG,
                                    height: ad
                                } : void 0,
                                children: [iz && (0, i.jsx)(h.a.div, {
                                    className: (0, r.b)("pointer-events-none px-4 py-3 text-sm text-default", aa ? "relative mx-(--floating-panel-inset) shrink-0" : "absolute inset-x-(--floating-panel-inset) bottom-0"),
                                    id: tk,
                                    "aria-hidden": tz || !iu,
                                    style: {
                                        opacity: ah
                                    },
                                    ref: tX,
                                    children: tz ? (0, i.jsx)("span", {
                                        className: "line-clamp-2 wrap-anywhere select-none",
                                        dir: "auto",
                                        children: ty
                                    }) : eX ?? (0, i.jsx)(x.a, {
                                        id: "quickChat.responseWorking",
                                        defaultMessage: "Working…"
                                    })
                                }), (0, i.jsxs)(h.a.div, {
                                    ref: tW,
                                    "aria-hidden": iu,
                                    className: (0, r.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", !te && (iu ? "hidden" : "flex"), te && "absolute inset-x-0 bottom-0 flex", te && "overflow-hidden"),
                                    inert: iu,
                                    style: te ? {
                                        height: Math.max(0, i8 - 46 - nG),
                                        opacity: iu ? 0 : au
                                    } : void 0,
                                    children: [tu && (!id || te) ? e0?.(() => {
                                        nM(null), nC("compact")
                                    }, ip) : null, !tu && (0, i.jsx)(p.a, {
                                        initial: !1,
                                        children: (te || !iu) && null != tc && (0, i.jsx)(h.a.div, {
                                            className: "flex min-h-0 flex-1 flex-col",
                                            initial: !te && {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: ao,
                                                ease: S.e
                                            },
                                            children: tc
                                        }, "empty-state")
                                    })]
                                }), te && iu && iz && (0, i.jsx)(N.a, {
                                    unstyled: !0,
                                    focusRing: "inset",
                                    className: "absolute inset-0",
                                    "aria-label": aJ,
                                    "aria-describedby": tk,
                                    "data-quick-chat-drag-handle": !0,
                                    onClick: aG
                                })]
                            })
                        }), eR?.({
                            contextMenuTrigger: a9,
                            isCompact: iu,
                            isDragging: tn,
                            onMinimize: a$
                        }) ?? a9]
                    })]
                }), ek]
            });
            return (0, i.jsxs)($.a, {
                value: {
                    id: tS
                },
                children: [te && (0, i.jsx)("div", {
                    ref: tB,
                    "aria-hidden": !0,
                    className: (0, r.b)(es.a, "pointer-events-none invisible absolute")
                }), tr && tn && null != ta && (0, i.jsx)(eb, {
                    activeIndicator: ta,
                    fixed: null == U,
                    isMinimized: eD,
                    rightPaneTarget: to ? tt : null,
                    rightPaneGeometryRef: nd,
                    footerHeight: tT,
                    bubbleHeight: av.height,
                    reservedDockPosition: ex,
                    viewportWidth: t1,
                    viewportHeight: i1
                }), lo]
            })
        }
        let ev = "pointer-events-none fill-none stroke-blue/40 [stroke-width:4px] data-active:stroke-blue data-active:[stroke-width:5px] motion-safe:transition-[stroke,stroke-width,scale] motion-safe:duration-basic motion-safe:ease-enter-snappy data-active:scale-[1.15]",
            ex = {
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

        function eb(e) {
            let t, n, o, s, c, u = (0, a.c)(29),
                {
                    activeIndicator: d,
                    fixed: h,
                    isMinimized: p,
                    rightPaneTarget: m,
                    rightPaneGeometryRef: f,
                    footerHeight: v,
                    bubbleHeight: x,
                    reservedDockPosition: b,
                    viewportWidth: y,
                    viewportHeight: z
                } = e,
                j = void 0 !== h && h,
                C = void 0 !== p && p,
                k = void 0 === m ? null : m,
                S = void 0 === v ? 0 : v,
                M = void 0 === x ? 36 : x,
                E = (0, w.c)(),
                R = (0, g.useRef)(null);
            if (u[0] !== M || u[1] !== S || u[2] !== f || u[3] !== k || u[4] !== E ? (t = () => {
                    let e = R.current;
                    if (null == k || null == e) return;
                    let t = f?.current,
                        n = (0, l.b)(k, null, () => {
                            let n = t ?? ew(k, E, S, M);
                            t = void 0, null != f && (f.current = n), e.style.left = `${(0,w.b)(n.svgRect.left,E)}px`, e.style.top = `${(0,w.b)(n.svgRect.top,E)}px`, e.style.width = `${(0,w.b)(n.svgRect.width,E)}px`, e.style.height = `${(0,w.b)(n.svgRect.height,E)}px`
                        }, {
                            ancestorScroll: !1,
                            ancestorResize: !1
                        });
                    return () => {
                        n(), null != f && (f.current = null)
                    }
                }, n = [M, S, f, k, E], u[0] = M, u[1] = S, u[2] = f, u[3] = k, u[4] = E, u[5] = t, u[6] = n) : (t = u[5], n = u[6]), (0, g.useLayoutEffect)(t, n), u[7] !== d || u[8] !== j || u[9] !== C || u[10] !== b || u[11] !== k || u[12] !== z || u[13] !== y || u[14] !== E) {
                let e, t = ey(b, C, !0);
                u[17] !== d || u[18] !== k || u[19] !== E ? (o = null != k && (0, i.jsx)(O.a, {
                    container: k.ownerDocument.body,
                    children: (0, i.jsx)("div", {
                        ref: R,
                        "aria-hidden": !0,
                        className: "pointer-events-none fixed z-50",
                        style: {
                            zoom: E
                        },
                        children: (0, i.jsx)("svg", {
                            className: (0, r.b)(ev, "size-full"),
                            "data-floating-chat-drop-indicator": "right-pane",
                            "data-active": "right-pane" === d || void 0,
                            "data-active-drop-target": "right-pane" === d ? "right-pane" : void 0,
                            viewBox: "0 0 32 184",
                            strokeLinecap: "round",
                            children: (0, i.jsx)("path", {
                                d: "M 16 20 v 144"
                            })
                        })
                    })
                }), u[17] = d, u[18] = k, u[19] = E, u[20] = o) : o = u[20], u[21] !== d || u[22] !== j || u[23] !== z || u[24] !== y ? (e = e => {
                    let t = d?.endsWith(e) === !0,
                        n = (y - 40) / 2;
                    "bottom-left" === e ? n = 11 : "bottom-right" === e && (n = y - 11 - 40);
                    let a = ex[e];
                    return (0, i.jsx)("svg", {
                        "aria-hidden": !0,
                        className: (0, r.b)(ev, "size-10 z-20 data-active:z-40", j ? "fixed" : "absolute", a.className),
                        "data-floating-chat-drop-indicator": e,
                        "data-active": t || void 0,
                        "data-active-drop-target": t ? d : void 0,
                        style: {
                            left: n,
                            top: z - 40 - 11
                        },
                        viewBox: "0 0 40 40",
                        strokeLinecap: "round",
                        children: (0, i.jsx)("path", {
                            d: a.path
                        })
                    }, e)
                }, u[21] = d, u[22] = j, u[23] = z, u[24] = y, u[25] = e) : e = u[25], s = eu.filter(e => t.includes(e)).map(e), u[7] = d, u[8] = j, u[9] = C, u[10] = b, u[11] = k, u[12] = z, u[13] = y, u[14] = E, u[15] = o, u[16] = s
            } else o = u[15], s = u[16];
            return u[26] !== o || u[27] !== s ? (c = (0, i.jsxs)(i.Fragment, {
                children: [o, s]
            }), u[26] = o, u[27] = s, u[28] = c) : c = u[28], c
        }

        function ew(e, t, n, i) {
            let a = e.getBoundingClientRect(),
                l = Math.max(0, a.height - (n + 16 + i) * t),
                r = Math.min(184 * t, l),
                o = 32 * t;
            return {
                right: a.right,
                svgRect: {
                    left: a.right - 16 * t - o / 2,
                    top: a.top + (l - r) / 2,
                    width: o,
                    height: r
                }
            }
        }

        function ey(e, t, n) {
            let i = eu;
            return t && (i = n ? ed : ["bottom-right"]), Array.from(new Set(i.map(t => (0, X.f)(t, e))))
        }

        function ez(e, t, n) {
            return t instanceof Node && (e.contains(t) || t instanceof Element && (null != t.closest("[data-composer-overlay-floating-ui], [data-content-search-bar], [data-composer-focus-target]") || null != t.closest("[data-floating-chat-annotation-layer]") || t.closest("[data-overlay-owner]")?.getAttribute("data-overlay-owner") === n))
        }

        function ej(e, t, n) {
            return Math.max(t, Math.min(e, n))
        }

        function eC() {
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
            r = n("IPUh"),
            o = n("Q840"),
            s = n("Wf1j"),
            c = n("QcW8"),
            u = n("Sm6l"),
            d = n("HOLv"),
            h = n("syEl"),
            p = n("V8uZ"),
            m = n("hjXH"),
            g = n("FJqt");
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, o, s = (0, a.c)(13),
                    {
                        children: c,
                        isCompact: u,
                        isVisible: d,
                        isDisabled: h,
                        showDivider: p
                    } = e,
                    m = void 0 !== u && u,
                    g = !d || !!h || void 0,
                    f = m ? Number(d) : "var(--quick-chat-expansion, 1)";
                s[0] !== f ? (t = {
                    opacity: f
                }, s[0] = f, s[1] = t) : t = s[1];
                let v = !d || !!h || void 0,
                    x = m && "border-b",
                    b = m && (p ? "border-default" : "border-transparent");
                return s[2] !== x || s[3] !== b ? (n = (0, l.b)("flex h-toolbar cursor-interaction touch-none items-center justify-between px-2 select-none", x, b), s[2] = x, s[3] = b, s[4] = n) : n = s[4], s[5] !== c || s[6] !== n ? (r = (0, i.jsx)("div", {
                    className: n,
                    children: c
                }), s[5] = c, s[6] = n, s[7] = r) : r = s[7], s[8] !== g || s[9] !== t || s[10] !== v || s[11] !== r ? (o = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden floating-chat-header",
                    "aria-hidden": g,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: v,
                    children: r
                }), s[8] = g, s[9] = t, s[10] = v, s[11] = r, s[12] = o) : o = s[12], o
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
                let t, n, l, r, o = (0, a.c)(11),
                    {
                        size: c,
                        onMinimize: h,
                        standalone: p
                    } = e,
                    g = void 0 !== p && p,
                    f = (0, s.a)();
                o[0] !== f ? (t = f.formatMessage({
                    id: "quickChat.minimize",
                    defaultMessage: "Minimize chat"
                }), o[0] = f, o[1] = t) : t = o[1];
                let v = g ? "outlineSurface" : "ghostSecondary";
                return o[2] !== g ? (n = e => {
                    g && e.preventDefault()
                }, o[2] = g, o[3] = n) : n = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.jsx)(d.a, {
                    "aria-hidden": !1,
                    asset: m.a
                }), o[4] = l) : l = o[4], o[5] !== h || o[6] !== c || o[7] !== t || o[8] !== v || o[9] !== n ? (r = (0, i.jsx)(u.a, {
                    "aria-label": t,
                    color: v,
                    radius: "full",
                    size: c,
                    uniform: !0,
                    onClick: h,
                    onPointerDown: n,
                    children: l
                }), o[5] = h, o[6] = c, o[7] = t, o[8] = v, o[9] = n, o[10] = r) : r = o[10], r
            },
            d: function(e) {
                let t, n, l, r = (0, a.c)(10),
                    {
                        disabled: p,
                        onOpen: m,
                        size: f
                    } = e,
                    v = (0, s.a)();
                if ((0, o.z)(c.A)) return null;
                r[0] !== v ? (t = v.formatMessage({
                    id: "quickChat.dock.openInRightPanel",
                    defaultMessage: "Open chat in right panel"
                }), r[0] = v, r[1] = t) : t = r[1];
                let x = t;
                return r[2] !== p || r[3] !== x || r[4] !== m || r[5] !== f ? (n = e => (0, i.jsx)(u.a, {
                    ...e,
                    "aria-label": x,
                    color: "ghostSecondary",
                    disabled: p,
                    radius: "full",
                    size: f,
                    uniform: !0,
                    onClick: m,
                    children: (0, i.jsx)(d.a, {
                        className: "rotate-180",
                        asset: g.a
                    })
                }), r[2] = p, r[3] = x, r[4] = m, r[5] = f, r[6] = n) : n = r[6], r[7] !== x || r[8] !== n ? (l = (0, i.jsx)(h.b, {
                    content: x,
                    describeTrigger: !1,
                    children: n
                }), r[7] = x, r[8] = n, r[9] = l) : l = r[9], l
            },
            e: function(e) {
                let t, n, o, s, c, u, d, h = (0, a.c)(28),
                    {
                        animateChrome: m,
                        expandOnClick: g,
                        children: f,
                        isChromeRevealed: v,
                        isCompact: x,
                        isDisabled: b,
                        presentationToggle: w,
                        reserveSpace: y
                    } = e,
                    z = void 0 !== g && g,
                    j = !x && "shrink-0";
                h[0] !== j ? (t = (0, l.b)("floating-chat-header relative min-h-0 overflow-hidden", j), h[0] = j, h[1] = t) : t = h[1];
                let C = !v || !!b || void 0,
                    k = v || y ? 46 : 0,
                    S = +!!v;
                h[2] !== k || h[3] !== S ? (n = {
                    height: k,
                    opacity: S
                }, h[2] = k, h[3] = S, h[4] = n) : n = h[4];
                let M = !v || !!b || void 0;
                h[5] !== m || h[6] !== z ? (o = m ? {
                    duration: .3,
                    ease: p.e,
                    ...z ? {
                        opacity: {
                            duration: 0
                        }
                    } : {}
                } : {
                    duration: 0
                }, h[5] = m, h[6] = z, h[7] = o) : o = h[7], h[8] !== x || h[9] !== w ? (s = null != w ? (0, i.jsx)("button", {
                    className: "pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                    "aria-label": w.label,
                    "aria-expanded": !x,
                    type: "button",
                    onClick: w.onToggle
                }) : null, h[8] = x, h[9] = w, h[10] = s) : s = h[10];
                let E = !z && null != w && x && "cursor-n-resize",
                    R = !z && null != w && !x && "cursor-s-resize",
                    N = (z || null == w) && "cursor-interaction",
                    P = x && "mx-1.5 border-b border-default px-2",
                    T = !x && "px-3";
                return h[11] !== E || h[12] !== R || h[13] !== N || h[14] !== P || h[15] !== T ? (c = (0, l.b)("flex h-toolbar touch-none select-none items-center justify-between", E, R, N, P, T), h[11] = E, h[12] = R, h[13] = N, h[14] = P, h[15] = T, h[16] = c) : c = h[16], h[17] !== f || h[18] !== c ? (u = (0, i.jsx)("div", {
                    className: c,
                    children: f
                }), h[17] = f, h[18] = c, h[19] = u) : u = h[19], h[20] !== s || h[21] !== u || h[22] !== t || h[23] !== C || h[24] !== n || h[25] !== M || h[26] !== o ? (d = (0, i.jsxs)(r.a.header, {
                    className: t,
                    "aria-hidden": C,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: M,
                    transition: o,
                    children: [s, u]
                }), h[20] = s, h[21] = u, h[22] = t, h[23] = C, h[24] = n, h[25] = M, h[26] = o, h[27] = d) : d = h[27], d
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
            r = n("on57"),
            o = n("zd8w"),
            s = n("wD9O");

        function c(e) {
            let t, n, l, c, d, h, p, m, g, f = (0, a.c)(35),
                {
                    edge: v,
                    getCurrentSize: x,
                    maximumSize: b,
                    resizeFromCenter: w,
                    minimumSize: y,
                    onResizeEnd: z,
                    onResizingChange: j,
                    setSize: C,
                    verticalEdge: k
                } = e,
                S = void 0 === v ? "left" : v,
                M = void 0 !== w && w,
                E = void 0 === k ? "top" : k,
                R = (0, s.c)(),
                N = (0, o.useRef)(null);
            f[0] !== S || f[1] !== b || f[2] !== y || f[3] !== M || f[4] !== C || f[5] !== E || f[6] !== R ? (t = e => {
                let t = N.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                e.preventDefault();
                let n = {
                    height: u(t.startSize.height + ("top" === E ? -1 : 1) * ((0, s.b)(e.clientY, R) - t.startPointer.y), y.height, b.height),
                    width: u(t.startSize.width + (M ? 2 : 1) * ("left" === S ? -1 : 1) * ((0, s.b)(e.clientX, R) - t.startPointer.x), y.width, b.width)
                };
                t.didMove || (t.didMove = n.height !== t.startSize.height || n.width !== t.startSize.width), t.lastSize = n, C(n)
            }, f[0] = S, f[1] = b, f[2] = y, f[3] = M, f[4] = C, f[5] = E, f[6] = R, f[7] = t) : t = f[7];
            let P = t;
            f[8] !== z || f[9] !== j ? (n = (e, t) => {
                let n = N.current;
                n?.pointerId === e.pointerId && (N.current = null, j?.(!1), t && n.didMove && z?.(n.lastSize))
            }, f[8] = z, f[9] = j, f[10] = n) : n = f[10];
            let T = n,
                L = "top" === E ? "top-0" : "bottom-0",
                D = "left" === S ? "left-0" : "right-0",
                q = "left" === S == ("top" === E) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return f[11] !== L || f[12] !== D || f[13] !== q ? (l = (0, r.b)("group absolute z-50 flex size-4 touch-none select-none", L, D, q), f[11] = L, f[12] = D, f[13] = q, f[14] = l) : l = f[14], f[15] !== T ? (c = e => {
                T(e, !1)
            }, f[15] = T, f[16] = c) : c = f[16], f[17] !== P || f[18] !== T ? (d = e => {
                P(e), T(e, !0)
            }, f[17] = P, f[18] = T, f[19] = d) : d = f[19], f[20] !== x || f[21] !== j || f[22] !== R ? (h = e => {
                if (0 !== e.button) return;
                e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId);
                let t = x();
                N.current = {
                    didMove: !1,
                    lastSize: t,
                    pointerId: e.pointerId,
                    startPointer: {
                        x: (0, s.b)(e.clientX, R),
                        y: (0, s.b)(e.clientY, R)
                    },
                    startSize: t
                }, j?.(!0)
            }, f[20] = x, f[21] = j, f[22] = R, f[23] = h) : h = f[23], f[24] !== P || f[25] !== T ? (p = e => {
                P(e), T(e, !0)
            }, f[24] = P, f[25] = T, f[26] = p) : p = f[26], f[27] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, i.jsx)("div", {
                className: "pointer-events-none m-auto h-px w-2 rotate-45 bg-text/25 opacity-0 group-hover:opacity-100 group-active:opacity-100"
            }), f[27] = m) : m = f[27], f[28] !== P || f[29] !== c || f[30] !== d || f[31] !== h || f[32] !== p || f[33] !== l ? (g = (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: l,
                onLostPointerCapture: c,
                onPointerCancel: d,
                onPointerDown: h,
                onPointerMove: P,
                onPointerUp: p,
                children: m
            }), f[28] = P, f[29] = c, f[30] = d, f[31] = h, f[32] = p, f[33] = l, f[34] = g) : g = f[34], g
        }

        function u(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
        let d = ["left", "right"];

        function h(e) {
            let t, n, r, o, s = (0, a.c)(43),
                {
                    currentSize: u,
                    defaultSize: h,
                    extendIntoToolbar: p,
                    fixedHorizontalEdge: m,
                    resizeFromCenter: g,
                    heightLabel: f,
                    maximumSize: v,
                    minimumSize: x,
                    onResize: b,
                    onResizeEnd: w,
                    onResizingChange: y,
                    verticalEdge: z,
                    widthLabel: j
                } = e,
                C = void 0 === p || p,
                k = void 0 !== g && g,
                S = void 0 === z ? "top" : z;
            if (s[0] !== u || s[1] !== h || s[2] !== C || s[3] !== m || s[4] !== f || s[5] !== v || s[6] !== x || s[7] !== b || s[8] !== w || s[9] !== y || s[10] !== k || s[11] !== S || s[12] !== j) {
                let e, a;
                s[16] !== m ? (e = e => e !== m, s[16] = m, s[17] = e) : e = s[17];
                let o = d.filter(e);
                s[18] !== u || s[19] !== h || s[20] !== C || s[21] !== v || s[22] !== x || s[23] !== b || s[24] !== w || s[25] !== y || s[26] !== k || s[27] !== j ? (a = e => (0, i.jsx)(l.a, {
                    ariaLabel: j,
                    defaultSize: h.width,
                    edge: e,
                    resizeFromCenter: k,
                    extendIntoToolbar: C,
                    getCurrentSize: () => u.width,
                    maximumSize: v.width,
                    minimumSize: x.width,
                    onResizeEnd: e => {
                        w({
                            ...u,
                            width: e
                        })
                    },
                    onResizingChange: y,
                    setSize: t => {
                        b(e, {
                            ...u,
                            width: t
                        })
                    }
                }, e), s[18] = u, s[19] = h, s[20] = C, s[21] = v, s[22] = x, s[23] = b, s[24] = w, s[25] = y, s[26] = k, s[27] = j, s[28] = a) : a = s[28], t = o.map(a), s[29] !== u || s[30] !== h || s[31] !== f || s[32] !== v || s[33] !== x || s[34] !== b || s[35] !== w || s[36] !== y || s[37] !== S ? (n = null != S && (0, i.jsx)(l.a, {
                    ariaLabel: f,
                    defaultSize: h.height,
                    edge: S,
                    getCurrentSize: () => u.height,
                    maximumSize: v.height,
                    minimumSize: x.height,
                    onResizeEnd: e => {
                        w({
                            ...u,
                            height: e
                        })
                    },
                    onResizingChange: y,
                    setSize: e => {
                        b("right", {
                            ...u,
                            height: e
                        })
                    }
                }), s[29] = u, s[30] = h, s[31] = f, s[32] = v, s[33] = x, s[34] = b, s[35] = w, s[36] = y, s[37] = S, s[38] = n) : n = s[38], r = null != S && o.map(e => (0, i.jsx)(c, {
                    edge: e,
                    resizeFromCenter: k,
                    getCurrentSize: () => u,
                    maximumSize: v,
                    minimumSize: x,
                    verticalEdge: S,
                    onResizeEnd: w,
                    onResizingChange: y,
                    setSize: t => {
                        b(e, t)
                    }
                }, e)), s[0] = u, s[1] = h, s[2] = C, s[3] = m, s[4] = f, s[5] = v, s[6] = x, s[7] = b, s[8] = w, s[9] = y, s[10] = k, s[11] = S, s[12] = j, s[13] = t, s[14] = n, s[15] = r
            } else t = s[13], n = s[14], r = s[15];
            return s[39] !== t || s[40] !== n || s[41] !== r ? (o = (0, i.jsxs)(i.Fragment, {
                children: [t, n, r]
            }), s[39] = t, s[40] = n, s[41] = r, s[42] = o) : o = s[42], o
        }
    }),
    mphG: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            l = n("jsiH");
        n.d(t, {}, {
            a: function(e) {
                let t, n, r = (0, a.c)(4),
                    {
                        children: o,
                        className: s
                    } = e,
                    c = void 0 === s ? "truncate" : s;
                return r[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)("span", {
                    className: "hidden group-data-[unread=true]/floating-title:contents",
                    children: (0, i.jsx)(l.a, {
                        className: "bg-accent"
                    })
                }), r[0] = t) : t = r[0], r[1] !== o || r[2] !== c ? (n = (0, i.jsxs)("span", {
                    className: "contents min-w-0 items-center gap-2 group-data-[unread=true]/floating-title:flex",
                    children: [t, (0, i.jsx)("span", {
                        className: c,
                        children: o
                    })]
                }), r[1] = o, r[2] = c, r[3] = n) : n = r[3], n
            }
        })
    })
};