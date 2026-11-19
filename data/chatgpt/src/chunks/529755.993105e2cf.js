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
            a: () => ef
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
            f = n("zd8w"),
            g = n("v7qY"),
            v = n("Wf1j"),
            x = n("oyxz"),
            b = n("Q2Qp"),
            w = n("wD9O"),
            y = n("rsCP"),
            z = n("AclY"),
            j = n("sArP");
        let k = {
            height: 640,
            width: 560
        };
        var C = n("hZax"),
            S = n("V8uZ"),
            M = n("HgLj"),
            E = n("O8DZ");

        function R(e) {
            let t, n, l, o, s, c, u, d, p, m, f = (0, a.c)(63),
                {
                    allowCompactResize: g,
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
                    onResizeEnd: $,
                    onResizingChange: V,
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
                et = void 0 !== g && g,
                en = void 0 === v || v,
                ei = void 0 !== L && L,
                ea = void 0 === B || B,
                el = (0, C.f)("2163293173"),
                er = !H && (I || q && !_) ? 6 : 0;
            f[0] !== H || f[1] !== W || f[2] !== er ? (t = H && null != W ? W : {
                top: 0,
                right: er,
                bottom: er,
                left: er
            }, f[0] = H, f[1] = W, f[2] = er, f[3] = t) : t = f[3];
            let eo = t,
                es = "panel" !== x && "rounded-[inherit]";
            f[4] !== es ? (n = (0, r.b)("pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto", es), f[4] = es, f[5] = n) : n = f[5];
            let ec = n,
                eu = "panel" !== x || Y;
            f[6] !== X.ref || f[7] !== Q ? (l = (0, M.a)(Q, X.ref, z.d), f[6] = X.ref, f[7] = Q, f[8] = l) : l = f[8];
            let ed = !el && Y && "frame-Xbg62r",
                eh = Y && "group/chat-frame focus:outline-none",
                ep = null != W ? "pointer-events-none" : "pointer-events-auto",
                em = Y && E.a.floatingSurface,
                ef = I && E.a.singleLineSurface,
                eg = "floating" === G ? "fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]" : "absolute top-0 left-0 z-30 max-h-full max-w-full",
                ev = Y ? "overflow-visible" : "overflow-hidden";
            f[9] !== ed || f[10] !== eh || f[11] !== ep || f[12] !== em || f[13] !== ef || f[14] !== eg || f[15] !== ev ? (o = (0, r.b)("flex flex-col text-default", ed, eh, ep, em, ef, eg, ev), f[9] = ed, f[10] = eh, f[11] = ep, f[12] = em, f[13] = ef, f[14] = eg, f[15] = ev, f[16] = o) : o = f[16];
            let ex = null != R ? "relative flex h-full min-h-0 w-full shrink-0 flex-col rounded-[inherit]" : "contents";
            f[17] !== ex ? (s = (0, r.b)(ex), f[17] = ex, f[18] = s) : s = f[18], f[19] !== en || f[20] !== x || f[21] !== ec || f[22] !== P || f[23] !== I || f[24] !== F || f[25] !== Y || f[26] !== U || f[27] !== eo || f[28] !== Z ? (c = Y ? (0, i.jsx)(y.c, {
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
            }) : null, f[19] = en, f[20] = x, f[21] = ec, f[22] = P, f[23] = I, f[24] = F, f[25] = Y, f[26] = U, f[27] = eo, f[28] = Z, f[29] = c) : c = f[29], f[30] !== et || f[31] !== w || f[32] !== T || f[33] !== D || f[34] !== q || f[35] !== H || f[36] !== A || f[37] !== O || f[38] !== K || f[39] !== $ || f[40] !== V || f[41] !== ea || f[42] !== ei || f[43] !== eo || f[44] !== J || f[45] !== ee ? (u = ea && (!q || et) && !H ? (0, i.jsx)("div", {
                className: "pointer-events-none absolute",
                style: eo,
                children: (0, i.jsx)("div", {
                    className: "pointer-events-auto contents",
                    children: (0, i.jsx)(j.a, {
                        currentSize: w,
                        defaultSize: k,
                        extendIntoToolbar: !1,
                        fixedHorizontalEdge: T,
                        resizeFromCenter: ei,
                        heightLabel: D,
                        maximumSize: A,
                        minimumSize: O,
                        verticalEdge: q ? null : J,
                        widthLabel: ee,
                        onResize: K,
                        onResizeEnd: $,
                        onResizingChange: V
                    })
                })
            }) : null, f[30] = et, f[31] = w, f[32] = T, f[33] = D, f[34] = q, f[35] = H, f[36] = A, f[37] = O, f[38] = K, f[39] = $, f[40] = V, f[41] = ea, f[42] = ei, f[43] = eo, f[44] = J, f[45] = ee, f[46] = u) : u = f[46];
            let eb = null == Z ? null : F;
            return f[47] !== b || f[48] !== N || f[49] !== R || f[50] !== s || f[51] !== c || f[52] !== u || f[53] !== eb ? (d = (0, i.jsxs)(h.a.div, {
                ref: N,
                className: s,
                style: R,
                children: [c, u, eb, b]
            }), f[47] = b, f[48] = N, f[49] = R, f[50] = s, f[51] = c, f[52] = u, f[53] = eb, f[54] = d) : d = f[54], f[55] !== X || f[56] !== o || f[57] !== d || f[58] !== l ? (p = (0, i.jsx)(h.a.section, {
                ...X,
                ref: l,
                className: o,
                children: d
            }), f[55] = X, f[56] = o, f[57] = d, f[58] = l, f[59] = p) : p = f[59], f[60] !== p || f[61] !== eu ? (m = (0, i.jsx)(y.c, {
                asChild: !0,
                unstyled: eu,
                children: p
            }), f[60] = p, f[61] = eu, f[62] = m) : m = f[62], m
        }
        var N = n("Sm6l"),
            P = n("bf6R");

        function T(e) {
            let t, n, l, r, o, s, c, u, d, h, p, m = (0, a.c)(56),
                {
                    title: g,
                    preview: b,
                    onOpen: w,
                    onDismiss: z,
                    isWorking: j,
                    workingContent: k
                } = e,
                S = void 0 !== j && j,
                M = (0, C.f)("2163293173"),
                E = (0, v.a)();
            m[0] !== E || m[1] !== g ? (t = g ?? E.formatMessage({
                id: "quickChat.mainConversation",
                defaultMessage: "Chat"
            }), m[0] = E, m[1] = g, m[2] = t) : t = m[2];
            let R = t,
                T = (0, f.useEffectEvent)(z);
            if (m[3] !== M || m[4] !== T || m[5] !== S ? (n = () => {
                    if (!M || S) return;
                    let e = window.setTimeout(() => T(), 1e4);
                    return () => window.clearTimeout(e)
                }, m[3] = M, m[4] = T, m[5] = S, m[6] = n) : n = m[6], m[7] !== M || m[8] !== S ? (l = [M, S], m[7] = M, m[8] = S, m[9] = l) : l = m[9], (0, f.useEffect)(n, l), !M) {
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
            }), m[34] = E, m[35] = R, m[36] = r) : r = m[36], m[37] !== S || m[38] !== b || m[39] !== k ? (o = S ? k ?? (0, i.jsx)(x.a, {
                id: "quickChat.responseWorking",
                defaultMessage: "Working…"
            }) : b || (0, i.jsx)(x.a, {
                id: "quickChat.responseReady",
                defaultMessage: "Response ready"
            }), m[37] = S, m[38] = b, m[39] = k, m[40] = o) : o = m[40], m[41] !== o ? (s = (0, i.jsx)("span", {
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
                g = (0, C.f)("2163293173"),
                [v, x] = (0, f.useState)(null);
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
                j = g ? "min-w-0" : "-mx-6 -my-2",
                k = g ? "overflow-y-auto overscroll-contain" : "overflow-y-auto overscroll-contain px-6 py-2",
                M = w + 16;
            c[3] !== M ? (l = {
                style: {
                    maxHeight: M
                }
            }, c[3] = M, c[4] = l) : l = c[4];
            let E = g ? "relative flex flex-col" : "relative flex flex-col gap-3";
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
            }), c[14] = b, c[15] = E, c[16] = r, c[17] = o) : o = c[17], c[18] !== o || c[19] !== j || c[20] !== k || c[21] !== l ? (s = (0, i.jsx)(L.a, {
                className: j,
                fade: "mask",
                scrollClassName: k,
                scrollProps: l,
                children: o
            }), c[18] = o, c[19] = j, c[20] = k, c[21] = l, c[22] = s) : s = c[22], s
        }
        var _ = n("wrxv"),
            H = n("EFj1"),
            I = n("BjWL"),
            A = n("vi3X"),
            F = n("fDIZ"),
            W = n("AKr5"),
            O = n("i7gm"),
            K = n("X7C7"),
            $ = n("rmk3"),
            V = n("giDA"),
            Y = n("YzWZ"),
            B = n("eeV6"),
            X = n("Xyz8"),
            Q = n("zj7j"),
            Z = n("Z2JT"),
            U = n("T7v7");
        let G = (0, n("Nwp9").b)("quick-chat-size-v1", k);

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
            em = (0, m.u)(el.a, ek, {
                getServerSnapshot: () => ({
                    width: 0,
                    height: 0
                }),
                isEqual: (e, t) => e.width === t.width && e.height === t.height,
                onMount: e => {
                    let t = window.visualViewport,
                        n = () => e(ek());
                    return window.addEventListener("resize", n), t?.addEventListener("resize", n), n(), () => {
                        window.removeEventListener("resize", n), t?.removeEventListener("resize", n)
                    }
                }
            });

        function ef(e) {
            let t, n, l, r, o = (0, a.c)(10);
            return o[0] !== e ? ({
                contentChat: t,
                ...n
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]), o[3] !== t || o[4] !== n ? (l = null == t ? n.renderMenu : e => e.contextMenuTrigger ?? n.renderMenu?.(e), o[3] = t, o[4] = n, o[5] = l) : l = o[5], o[6] !== t || o[7] !== n || o[8] !== l ? (r = (0, i.jsx)(eg, {
                ...n,
                contentChat: t,
                renderMenu: l
            }), o[6] = t, o[7] = n, o[8] = l, o[9] = r) : r = o[9], r
        }

        function eg(e) {
            let t, n, {
                    ref: a,
                    animateOnMount: l = !1,
                    fitInitialCompactContent: j = !1,
                    background: L,
                    renderComposer: O,
                    containerSize: U,
                    minimumWidth: eu = 360,
                    dockThreadKey: ed,
                    canDock: ef = !0,
                    preserveLayoutOnEscape: eg = !1,
                    compactInputPosition: ev,
                    reservedDockPosition: ex,
                    footer: ek,
                    overlay: eC,
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
                    restoreLabel: e$,
                    statusState: eV,
                    titleStatusState: eY = eV,
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
                te = (0, C.f)("2163293173"),
                tt = (0, f.useContext)(b.a),
                [tn, ti] = (0, f.useState)(!1),
                [ta, tl] = (0, f.useState)(null),
                tr = te && e6 && ef && !eT,
                to = tr && null != e8 && !eL?.openRightPaneDisabled && null != tt,
                ts = (0, m.z)(!!te && !!e6 && ei.c),
                tc = te ? eJ : void 0,
                tu = e1 ?? null != e0,
                td = tu || null != tc,
                th = (0, m.z)(ed) ?? void 0,
                tp = eq ? "quick-chat" : void 0,
                tm = (0, f.useContext)(eo.b),
                tf = (0, m.z)(eB),
                tg = e9 ? _.a : tf ?? _.a,
                tv = (0, m.z)(eV),
                tx = "ready" === tg.type ? {
                    ...tv,
                    type: tv?.type ?? "idle",
                    unread: !0
                } : tv,
                tb = (0, m.z)(eY),
                tw = eY === eV ? tx : tb,
                ty = (0, m.z)(te && eG ? eZ : null),
                tz = !!ty,
                tj = (0, v.a)(),
                tk = (0, f.useId)(),
                tC = (0, f.useId)(),
                tS = (0, f.useId)(),
                tM = (0, w.c)(),
                tE = (0, et.a)(),
                tR = (0, m.z)(em),
                tN = (0, w.b)(tR.height, tM),
                tP = (0, w.b)(tR.width, tM),
                [tT, tL] = (0, f.useState)(0),
                [tD, tq] = (0, f.useState)(!1),
                [t_, tH] = (0, f.useState)(0),
                [tI, tA] = (0, f.useState)(null),
                [tF, tW] = (0, f.useState)(null),
                [tO, tK] = (0, f.useState)(0),
                t$ = (0, f.useRef)({
                    composer: 0,
                    response: 0,
                    complete: !1
                }),
                [tV, tY] = (0, f.useState)(null),
                tB = (0, D.b)(e => {
                    e.contentRect.width > 0 && tY(e.contentRect.width)
                }),
                tX = (0, D.b)(e => {
                    let t = (0, ea.a)(e).height;
                    tK(t), aa("response", t)
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
                [tG, tJ] = (0, f.useState)(0),
                t0 = (0, D.b)(e => {
                    tJ((0, ea.a)(e).height)
                }),
                t1 = U?.width ?? tP,
                t2 = tP < 640,
                [t3] = (0, f.useState)(() => ef ? te ? "bottom-right" : (0, Y.a)() : "bottom-center"),
                t4 = (0, m.x)(ef ? Q.a : void 0, {
                    threadKey: th ?? null,
                    minimized: !1
                }),
                t5 = e6 && ef,
                t6 = (0, m.x)(ef && !e6 ? Q.a : void 0, {
                    threadKey: th ?? null,
                    minimized: !0
                }),
                [t8, t7] = (0, f.useState)({}),
                t9 = (null != th || te ? null : t8.expanded) ?? t4 ?? t3,
                ne = null == ev ? t9 : t8.expanded ?? ev,
                nt = t2 ? "bottom-center" : ne,
                nn = "bottom-right";
            t5 ? nn = (0, X.a)(nt) : te || (nn = (null == th ? t8.minimized : null) ?? t6 ?? "bottom-right");
            let ni = ef ? (0, X.f)(eD ? nn : nt, ex) : "bottom-center",
                na = ni.startsWith("top"),
                nl = (0, m.z)(G),
                nr = (0, o.a)(),
                no = (0, f.useRef)(!1),
                ns = (0, f.useRef)({
                    x: 0,
                    y: 0
                }),
                nc = (0, f.useRef)(null),
                nu = (0, f.useRef)(null),
                nd = (0, f.useRef)(null),
                nh = (0, s.a)(0),
                np = (0, s.a)(0),
                nm = (0, f.useRef)(null),
                nf = (0, f.useRef)(null),
                ng = (0, f.useRef)(null),
                nv = (0, f.useRef)(null),
                [nx, nb] = (0, f.useState)("compact"),
                [nw, ny] = (0, f.useState)(!1),
                nz = eI ?? nx,
                nj = e => {
                    (e6 || "expanded" !== e || td) && (null == eI && nb(e), ny(!1), eA?.(e))
                },
                [nk, nC] = (0, f.useState)(null),
                [nS, nM] = (0, f.useState)(!1),
                [nE, nR] = (0, f.useState)(!1),
                [nN, nP] = (0, f.useState)(!1),
                [nT, nL] = (0, f.useState)(!1),
                nD = (0, f.useRef)(null),
                nq = (0, f.useCallback)(e => {
                    (null != nD.current && (cancelAnimationFrame(nD.current), nD.current = null), null != e) ? nL(!0): nD.current = requestAnimationFrame(() => {
                        nD.current = null, nL(!1)
                    })
                }, []);
            (0, f.useEffect)(() => () => {
                null != nD.current && cancelAnimationFrame(nD.current)
            }, []);
            let [n_, nH] = (0, f.useState)(!1), [nI, nA] = (0, f.useState)(!1), [nF, nW] = (0, f.useState)(!0), [nO, nK] = (0, f.useState)(null), n$ = (0, f.useRef)(!1), nV = (0, f.useRef)(0), nY = (0, ec.a)(() => (nV.current += 1, () => {
                nV.current -= 1
            })), nB = (0, f.useRef)(!1), [nX, nQ] = (0, f.useState)(!1), [nZ, nU] = (0, f.useState)(0), [nG, nJ] = (0, f.useState)(0), [n0, n1] = (0, f.useState)(!1), n2 = (0, D.b)((e, t) => {
                let n = te ? (0, ea.a)(e).height : e.contentRect.height;
                nU(n), aa("composer", n), n1(e.contentRect.width < 640);
                let i = t.querySelector(`[${I.a}]`)?.getBoundingClientRect().height ?? 0;
                nJ(Math.max(0, e.contentRect.height - (0, w.b)(i, tM)))
            }), [n3, n4] = (0, f.useState)(null), [n5, n6] = (0, f.useState)(!1), [n8, n7] = (0, f.useState)(th);
            n8 !== th && (n7(th), t7({}), ti(!1), tl(null), nA(!1), nK(null), nC(null), nP(!1), n6(!1), ny(!1));
            let [n9, ie] = (0, f.useState)(e7);
            n9 !== e7 && (ie(e7), nK(null), nC(null));
            let it = eD || nO?.stage === "minimized",
                ii = (0, s.a)(+!!it),
                ia = (0, c.a)(() => 1 - ii.get()),
                il = (0, f.useCallback)(e => ii.on("change", e), [ii]),
                ir = (0, f.useCallback)(() => 1 === ii.get(), [ii]),
                io = (0, f.useSyncExternalStore)(il, ir, () => it);
            nk?.target !== "minimized" || it || nC({
                target: nz
            });
            let {
                isCompact: is,
                isChatCompact: ic,
                canTogglePresentation: iu
            } = (0, Z.c)({
                pendingFormId: e7,
                presentation: nz,
                forceExpanded: eN,
                hasTranscript: td
            }), id = !is && !eT && !it, ih = te && !e6 ? !is : e4;
            (!e6 || eT || eD || !ih) && nN && nP(!1);
            let [ip, im] = (0, f.useState)(() => j && is && !eD);
            ip && (!is || eD) && im(!1);
            let ig = !eD && !it && (te && !e6 || !is || nE || nT || nN || tn || tD),
                iv = ih && (e6 ? !eD && !it : te || ig),
                ix = e6 && iv,
                ib = te && e6 && is && iv && !eT && !e9 && !ts && null != eQ && tw?.type === "loading",
                iw = eG && te && !e9 && !nw && tu && (tz || !ib && tw?.type === "loading"),
                iy = is && iw,
                iz = te && is && !eT && !eD && !e9,
                ij = e3 || te,
                ik = ij || ix && "panel" === L && is;
            (0, f.useEffect)(() => {
                let e, t = nf.current;
                if (null == t || !e6 || eT || eD || !ih) return;
                let n = () => {
                        clearTimeout(e), e = void 0
                    },
                    i = t => {
                        "touch" !== t.pointerType && (n(), e = setTimeout(() => {
                            e = void 0, nP(!0)
                        }, 300))
                    },
                    a = () => {
                        n(), nP(!1)
                    },
                    l = () => {
                        document.hidden && a()
                    };
                return t.addEventListener("pointerenter", i), t.addEventListener("pointerleave", a), window.addEventListener("blur", a), document.addEventListener("visibilitychange", l), () => {
                    n(), t.removeEventListener("pointerenter", i), t.removeEventListener("pointerleave", a), window.removeEventListener("blur", a), document.removeEventListener("visibilitychange", l)
                }
            }, [th, e6, eT, eD, ih]);
            let iC = !eT && !is && !eD && !eN && !tn && !nX,
                iS = (0, f.useEffectEvent)(e => {
                    null == nf.current || null != e && ez(nf.current, e.target, tS) || (nC(null), nj("compact"))
                }),
                iM = (0, f.useEffectEvent)(() => {
                    let e = nf.current,
                        t = document.activeElement;
                    null != e && t instanceof HTMLIFrameElement && !ez(e, t, tS) && iS()
                });
            (0, f.useEffect)(() => {
                if (!iC) return;
                document.addEventListener("pointerdown", iS, !0);
                let e = !0,
                    t = () => {
                        queueMicrotask(() => {
                            e && iM()
                        })
                    };
                window.addEventListener("blur", t);
                let n = te ? en.c.subscribe("browser-sidebar-web-contents-pointer-down", () => iS()) : void 0;
                return () => {
                    e = !1, window.removeEventListener("blur", t), n?.(), document.removeEventListener("pointerdown", iS, !0)
                }
            }, [te, iC]);
            let iE = tx?.type === "loading",
                iR = (0, ec.a)(() => {
                    nf.current?.focus({
                        preventScroll: !0
                    }), nM(!1), nC(null), eH(!1), nj("expanded")
                }),
                [iN, iP] = (0, f.useState)(() => new Set),
                iT = (0, ec.a)(e => {
                    iP(t => new Set([...t, e]))
                }),
                iL = "ready" !== tg.type ? tg : {
                    type: "ready",
                    value: tg.value.map(e => ({
                        id: e.id,
                        content: (0, i.jsx)(T, {
                            title: e.title,
                            preview: e.preview,
                            onOpen: () => {
                                e.onOpen(), iR()
                            },
                            onDismiss: te ? () => iT(e.id) : e.onDismiss
                        })
                    }))
                },
                [iD, iq] = (0, f.useState)(iE);
            iD !== iE && (iq(iE), n6(!1), ny(!1)), (0, f.useEffect)(() => {
                if (!iy || eU || eT || eD || iE) return;
                let e = window.setTimeout(() => ny(!0), 1e4);
                return () => window.clearTimeout(e)
            }, [th, iy, eU, eT, eD, iE]);
            let i_ = iL;
            te && iE && !n5 ? i_ = {
                type: "ready",
                value: [{
                    id: "working",
                    content: (0, i.jsx)(T, {
                        title: eF,
                        preview: "",
                        isWorking: !0,
                        workingContent: eX,
                        onOpen: iR,
                        onDismiss: () => n6(!0)
                    })
                }]
            } : te && "ready" === iL.type && (i_ = {
                ...iL,
                value: iL.value.filter(e => !iN.has(e.id))
            }), "ready" !== i_.type && nS && nM(!1);
            let iH = "ready" === i_.type && i_.value.length > 0 && (it ? eD && (te ? io : nS) && !tn : !te && is),
                iI = tw?.type !== "loading" && (tw?.unread !== !0 || iH) ? null : tw,
                iA = iE || tx?.unread === !0 && (eD || !iH),
                iF = (0, f.useEffectEvent)(e => {
                    if ("Escape" === e.key && !e.defaultPrevented)
                        if (e.preventDefault(), nv.current?.contains(document.activeElement) && ng.current?.focus({
                                preventScroll: !0
                            }), te) {
                            if (iE) n6(!0);
                            else if ("ready" === i_.type)
                                for (let e of i_.value) iT(e.id)
                        } else nM(!1)
                });
            (0, f.useEffect)(() => {
                if (!eT && eD && iH) return document.addEventListener("keydown", iF), () => document.removeEventListener("keydown", iF)
            }, [iH, eT, eD]);
            let iW = ih && iv && !eD && !ib && null == eS,
                iO = te && e6 && iW && tw?.unread === !0,
                iK = tj.formatMessage({
                    id: "quickChat.running",
                    defaultMessage: "Running"
                }),
                i$ = tj.formatMessage({
                    id: "quickChat.unreadResponse",
                    defaultMessage: "Unread response"
                }),
                iV = iE ? iK : i$,
                iY = ni.endsWith("left"),
                iB = "bottom-center" === ni,
                iX = iY ? "left" : "right",
                iQ = na && !it ? t_ : 0,
                iZ = 46 * (null == U) + (na || it ? 0 : t_),
                iU = n3 ?? nl ?? k,
                iG = iH && !eD ? tG : 0,
                iJ = (U?.height ?? tN) - tT - (na ? iG + iQ : 0),
                i0 = Math.max(0, iJ - 32 - iZ - (na ? 0 : iG)),
                i1 = null == U ? t1 / 2 : Math.max(0, t1 - 20),
                i2 = te && null != tV ? Math.min(i1, tV + 12) : i1,
                i3 = (nZ || 46) + (ih && iv ? 46 : 0) + (iy ? tO : 0) + 6 * !te,
                i4 = (nZ || 46) + 46 * !!ix + (iw ? tO : 0) + 6 * !te,
                i5 = ej(iU.height, Math.min(Math.max(400, nZ + 46), i0), i0),
                i6 = Math.min(is ? i3 : Math.max(400, i3), i0),
                i8 = t2 ? i2 : Math.min(eu + 12, i2),
                i7 = ej(is ? i3 : iU.height, i6, i0),
                i9 = (0, s.a)(i7),
                ae = (0, f.useRef)(!1),
                at = nZ > 0,
                an = ip && iw,
                ai = ip ? {
                    height: "auto",
                    maxHeight: i0
                } : {
                    height: i9
                };

            function aa(e, t) {
                if (!ip) return;
                let n = t$.current;
                n[e] = t, n.complete || n.composer <= 0 || iw && n.response <= 0 || (n.complete = !0, i9.jump(Math.min(i3 - (nZ || 46) + n.composer + (iy ? n.response - tO : 0), i0)), im(!1))
            }
            let al = eT || tE || nX || !te && (eD || null != nk) ? 0 : .3,
                ar = ej(iU.width + 12, i8, i2),
                ao = (0, X.d)(ni, {
                    height: i7,
                    width: ar
                }, iJ, t1, 12, iZ),
                as = (0, c.a)(() => e6 && is ? 0 : ej((i9.get() - i4) / Math.max(1, i5 - i4), 0, 1)),
                ac = (0, c.a)(() => Math.max(0, i9.get() - nZ - 46 * (ix ? 1 : as.get()))),
                au = (0, c.a)(() => 1 - as.get()),
                ad = (0, f.useEffectEvent)(() => {
                    let e;
                    if (ip) return;
                    let t = !ae.current && is;
                    if (at && (ae.current = !0), nT || t || 0 === al) return void i9.jump(i7);
                    let n = () => {
                        if (te) {
                            let e = nm.current;
                            if (null != e && e.offsetHeight !== Math.round(nZ)) return void nU(e.offsetHeight)
                        }
                        let t = (0, u.a)(i9, i7, {
                            duration: al,
                            ease: S.e
                        });
                        e = () => t.stop()
                    };
                    return te ? d.b.update(n) : n(), () => {
                        (0, d.a)(n), e?.()
                    }
                }),
                ah = te ? nZ : null,
                ap = te ? null : at,
                am = te ? null : is;
            (0, f.useLayoutEffect)(() => ad(), [i7, al, ah, ap, am, ip]);
            let af = {
                    height: Math.min(36, i0),
                    width: Math.min(36, i2)
                },
                ag = {
                    bubbleSize: af,
                    composerWidth: ar,
                    composerHorizontalInset: 12,
                    reservedDockPosition: ex,
                    viewportWidth: t1,
                    viewportHeight: iJ
                },
                av = (0, X.f)(eD ? ni : nO?.dockPosition ?? nn, ex),
                ax = (0, X.d)(av, af, iJ, t1, 0, iZ),
                ab = eD ? af : {
                    height: i7,
                    width: ar
                },
                aw = eD ? ax : ao,
                ay = eD ? 16 : 10,
                az = {
                    left: ay,
                    right: Math.max(ay, t1 - ab.width - ay),
                    top: iZ + ay,
                    bottom: Math.max(ay, iJ - ab.height - ay)
                };
            (0, f.useLayoutEffect)(() => {
                nu.current = null
            }, [U, tt, tM]);
            let aj = e => {
                    if (!ef) return;
                    nu.current = null == U ? null : nf.current?.parentElement?.getBoundingClientRect() ?? null, nd.current = to ? ew(tt, tM, tT, af.height) : null;
                    let t = {
                        x: (0, w.b)(e.clientX - (nu.current?.left ?? 0), tM),
                        y: (0, w.b)(e.clientY - (nu.current?.top ?? 0), tM)
                    };
                    ns.current = {
                        x: t.x - aw.x - nh.get(),
                        y: t.y - aw.y - np.get()
                    }, nc.current = {
                        point: t,
                        target: null
                    }, nr.start(e)
                },
                ak = (0, X.d)(av, {
                    height: i7,
                    width: ar
                }, iJ, t1, 12, iZ),
                aC = ax.x - ak.x,
                aS = ax.y - ak.y,
                aM = {
                    top: aS,
                    right: ar - aC - af.width,
                    bottom: i7 - aS - af.height,
                    left: aC
                },
                aE = `inset(${aM.top}px ${aM.right}px ${aM.bottom}px ${aM.left}px round var(--floating-panel-radius))`,
                aR = (0, c.a)(() => {
                    let e = ii.get(),
                        t = i9.get() - i7,
                        n = e * (aM.top + (na ? 0 : t)),
                        i = 6 + e * (aM.right - 6),
                        a = 6 + e * (aM.bottom + (na ? t : 0) - 6),
                        l = 6 + e * (aM.left - 6),
                        r = "var(--radius-token-composer-single-line)",
                        o = it || tn || 0 !== e || 0 !== t ? `inset(${n}px ${i}px ${a}px ${l}px round ${r})` : "none";
                    return {
                        top: n,
                        right: i,
                        bottom: a,
                        left: l,
                        radius: r,
                        clip: o
                    }
                }),
                aN = (0, c.a)(() => aR.get().top),
                aP = (0, c.a)(() => aR.get().right),
                aT = (0, c.a)(() => aR.get().bottom),
                aL = (0, c.a)(() => aR.get().left),
                aD = (0, c.a)(() => aR.get().radius),
                aq = (0, c.a)(() => aR.get().clip);
            (0, f.useLayoutEffect)(() => {
                if (!te) return;
                let e = (0, u.a)(ii, +!!it, {
                    duration: .3 * !tE,
                    ease: S.e
                });
                return () => e.stop()
            }, [te, it, ii, tE]);
            let a_ = na ? {
                    top: aS + af.height
                } : {
                    bottom: i7 - aS
                },
                aH = (0, f.useRef)({
                    dockPosition: ni,
                    dockThreadKey: th,
                    isMinimized: eD
                }),
                aI = (0, f.useEffectEvent)(e => {
                    let t = (0, X.d)(e, {
                        height: i7,
                        width: ar
                    }, iJ, t1, 12, iZ);
                    nh.stop(), np.stop(), nh.jump(nh.get() + t.x - ao.x), np.jump(np.get() + t.y - ao.y);
                    let n = tE ? {
                        duration: 0
                    } : ep;
                    (0, u.a)(nh, 0, n), (0, u.a)(np, 0, n)
                });
            (0, f.useLayoutEffect)(() => {
                let e = aH.current;
                if (aH.current = {
                        dockPosition: ni,
                        dockThreadKey: th,
                        isMinimized: eD
                    }, e.dockThreadKey !== th) {
                    no.current = !0, n$.current = !0, nr.cancel(), nh.jump(0), np.jump(0);
                    return
                }
                if (eT) {
                    nh.jump(0), np.jump(0);
                    return
                }
                e.isMinimized !== eD && aI(e.dockPosition)
            }, [ni, th, nr, nh, np, eT, eD]), (0, f.useLayoutEffect)(() => () => {
                nh.stop(), np.stop()
            }, [nh, np]);
            let aA = function(e, t) {
                    let n, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = {
                            ...ab,
                            left: aw.x + nh.get(),
                            top: aw.y + np.get()
                        };
                    null != U && null == nu.current && (nu.current = nf.current?.parentElement?.getBoundingClientRect() ?? null);
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
                        })(ag).find(e => {
                            let {
                                rect: t
                            } = e;
                            return r.x >= t.left && r.x <= t.left + t.width && r.y >= t.top && r.y <= t.top + t.height
                        })?.position : void 0;
                    n = te ? o ?? (0, X.b)(a, iJ, t1, ey(ex, eD, t5), 12 * !eD, iZ) : (0, X.e)({
                        ...a,
                        left: a.width >= t1 / 2 - 2 * ay ? r.x - a.width / 2 : a.left
                    }, iJ, t1, eD);
                    let s = null == ex ? n : (0, X.f)(n, ex),
                        c = {
                            x: !te || tr ? Math.min(r.x, t1 - r.x) : t1 - r.x,
                            y: te ? iJ - r.y : Math.min(r.y - iZ, iJ - r.y)
                        },
                        u = (!tr || c.x >= 0 && c.y >= 0) && c.x <= 16 + af.width && c.y <= 16 + af.height,
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
                            i && (h = r.x - ns.current.x, p = r.y - ns.current.y, null != U && (h = ej(h, az.left, az.right), p = ej(p, az.top, az.bottom)));
                            let m = (l?.left ?? 0) + (h + a.width - 6) * tM,
                                f = (l?.top ?? 0) + p * tM,
                                g = (l?.top ?? 0) + (p + a.height - 6) * tM;
                            return m >= u - d && Math.min(g, c) > Math.max(f, s)
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
                        let a = r.y - ns.current.y + ab.height - iJ;
                        return {
                            dockPosition: s,
                            requestedDockPosition: n,
                            isNearDock: !1,
                            shouldMinimize: null != t || null == o && "bottom-right" === s && i?.target === "minimize" && a >= .5 * ab.width,
                            isRightPaneTarget: null == o && null == t && d(),
                            bubbleDropPosition: t
                        }
                    }
                    let h = (0, X.d)(s, ab, iJ, t1, 12, iZ),
                        p = !eD && "bottom-center" !== s && 16 >= Math.abs(a.left - h.x) && 16 >= Math.abs(a.top - h.y);
                    return {
                        dockPosition: s,
                        requestedDockPosition: n,
                        isNearDock: p,
                        shouldMinimize: p && u,
                        isRightPaneTarget: !u && d()
                    }
                },
                aF = (e, t) => {
                    if (!ef) return;
                    let n = t && !t5;
                    (null == ev || n) && (null != th || te && !n) ? (0, Q.c)(e5, {
                        threadKey: th ?? null,
                        minimized: n
                    }, e, eP) : t7(t => ({
                        expanded: n ? t.expanded : e,
                        minimized: n ? (0, X.a)(e) : t.minimized
                    }))
                },
                aW = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ab,
                        i = (0, X.d)(ni, ab, iJ, t1, 12 * !eD, iZ),
                        a = {
                            x: i.x + nh.get(),
                            y: i.y + np.get()
                        },
                        l = (0, X.d)((0, X.f)(e, ex), n, iJ, t1, 12 * !eD, iZ);
                    nh.stop(), np.stop(), nh.jump(a.x - l.x), np.jump(a.y - l.y), t && (0, g.flushSync)(() => {
                        aF(e, eD)
                    });
                    let r = te ? {
                            duration: .3,
                            ease: S.e
                        } : ep,
                        o = tE ? {
                            duration: 0
                        } : r;
                    nA(!0), Promise.all([(0, u.a)(nh, 0, o), (0, u.a)(np, 0, o)]).then(() => {
                        nA(0 !== nh.get() || 0 !== np.get())
                    })
                },
                aO = (0, f.useEffectEvent)(() => {
                    no.current = !0, nr.cancel(), aW(ni, !1), nK(null), nC(null), ti(!1), tl(null)
                });
            (0, f.useLayoutEffect)(() => {
                if (!tn) return;
                let e = e => {
                        "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), aO())
                    },
                    t = () => aO();
                return window.addEventListener("keydown", e, !0), window.addEventListener("blur", t), window.addEventListener("pointercancel", t, !0), () => {
                    no.current = !0, nr.cancel(), window.removeEventListener("keydown", e, !0), window.removeEventListener("blur", t), window.removeEventListener("pointercancel", t, !0)
                }
            }, [nr, tn]);
            let aK = () => {
                    nM(!1), nW(!tn), nK(null), nC(te ? null : {
                        target: "minimized"
                    }), eH(!0)
                },
                a$ = () => {
                    (0, g.flushSync)(() => {
                        nM(!1), nC(te ? null : {
                            target: nz
                        }), eH(!1)
                    }), aZ()
                },
                aV = () => {
                    nC(null), nj(is ? "expanded" : "compact")
                },
                aY = !eT && !eD,
                aB = aY && (null != e_ || !eg && !is && !eN),
                aX = () => {
                    null != e_ ? e_() : (nC(null), nj("compact"))
                },
                aQ = () => {
                    let e = nm.current;
                    return e9 ? (0, W.a)(e) : e?.querySelector("[contenteditable='true']") ?? null
                },
                aZ = () => {
                    te && null == ev && (nC(null), nj("expanded")), aQ()?.focus({
                        preventScroll: !0
                    })
                };
            (0, H.a)("focusMainChat", eD ? a$ : aZ, {
                enabled: !eT && e9,
                isActive: () => {
                    if (null == nf.current || null != nf.current.closest("[hidden], [inert], [aria-hidden=true]")) return !1;
                    if (e9) return eD;
                    let e = aQ();
                    if (null == e) return !1;
                    let t = e.closest("[hidden], [inert], [aria-hidden=true]");
                    return null == t || !nm.current?.contains(t) || t === nm.current
                }
            });
            let aU = tj.formatMessage(is ? {
                    id: "quickChat.expandFloatingChat",
                    defaultMessage: "Expand floating chat"
                } : {
                    id: "quickChat.showCompactFloatingChat",
                    defaultMessage: "Show compact floating chat"
                }),
                aG = iu ? {
                    label: aU,
                    onToggle: aV
                } : void 0,
                aJ = tj.formatMessage({
                    id: "quickChat.resizeWidth",
                    defaultMessage: "Resize chat width"
                }),
                a0 = tj.formatMessage({
                    id: "quickChat.resizeHeight",
                    defaultMessage: "Resize chat height"
                }),
                a1 = (0, ec.a)(() => {
                    nC(null), e6 && nj("expanded")
                }),
                a2 = {
                    isCompact: is,
                    canShowCompactPreview: iz,
                    isNarrow: n0,
                    isChromeRevealed: ig,
                    isHeaderVisible: iv,
                    isComposerFocused: te ? n_ || nT : ig,
                    isDockedTop: na,
                    isHidden: eT,
                    isMinimized: it,
                    shouldReduceMotion: tE,
                    onSubmitStart: te || e6 ? a1 : () => nC(null)
                };

            function a3(e) {
                !eT && null != eR && (2 === e.button || 0 === e.button && e.ctrlKey) && e.target instanceof Element && (nf.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.preventDefault()
            }

            function a4(e) {
                !e6 && e.target instanceof Element && (!nf.current?.contains(e.target) || null != e.target.closest("[data-composer-overlay-floating-ui]")) && e.stopPropagation()
            }
            let a5 = O(a2, {
                    isMoving: tn || nX || nI,
                    composerContentHeight: nG,
                    dockedReservePx: nZ > nG + 6 * !!te ? i7 + 10 : 0
                }),
                a6 = (0, i.jsxs)("div", {
                    ref: e => {
                        nm.current = e, n2(e)
                    },
                    className: (0, r.b)(E.a.floatingComposerInset, "mt-auto shrink-0", ef && !t2 && "[&_[data-composer-input]:has([contenteditable=true]_[data-placeholder])]:touch-none", is && na && "[--composer-overlay-placement:bottom]"),
                    onPointerDownCapture: a3,
                    onPointerUp: e => {
                        e.target === e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId) && !n$.current && aZ()
                    },
                    onContextMenu: a4,
                    children: [ij && !eD && (!is || iy) ? (0, i.jsx)("div", {
                        "aria-hidden": !0,
                        className: "border-t border-default"
                    }) : null, (0, i.jsx)(eo.b, {
                        value: {
                            ...tm,
                            hasComposerSurface: ik,
                            isFloatingChatSurface: !0,
                            isFloatingTranscriptOpen: !eT && !is && !eD,
                            floatingChatSurfaceRef: nf,
                            onFloatingDictationRowChange: nq,
                            floatingComposerPresentation: a2,
                            transcriptTarget: tF,
                            followLatestTranscript: te ? is : tm.followLatestTranscript
                        },
                        children: (0, i.jsx)(F.a, {
                            value: aB ? aX : eg ? "editor-only" : null,
                            children: (0, i.jsx)(A.a, {
                                value: {
                                    target: tI,
                                    homeBannerPlacement: "inline"
                                },
                                children: a5
                            })
                        })
                    })]
                }),
                a8 = is ? "composer" : "toolbar",
                a7 = (0, i.jsx)(B.c, {
                    size: null != e8 && is ? "iconCircle" : a8,
                    onMinimize: aK
                }),
                a9 = te || null != e8 ? null : a7;
            t = ib ? (0, i.jsx)(N.a, {
                unstyled: !0,
                focusRing: "inset",
                className: "min-w-0 flex-1 px-2 text-start text-sm text-secondary",
                "aria-label": aU,
                "aria-describedby": tk,
                "data-quick-chat-drag-handle": !0,
                onClick: () => {
                    aV(), aQ()?.focus({
                        preventScroll: !0
                    })
                },
                children: (0, i.jsx)("span", {
                    id: tk,
                    className: "min-w-0 truncate",
                    children: eQ
                })
            }) : null != eS ? eS({
                leadingControl: a9
            }) : (0, i.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-1",
                children: [a9, iO && (0, i.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    "aria-label": i$
                }), (0, i.jsx)("h2", {
                    id: tk,
                    "data-unread": iO || void 0,
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
                    children: null != iI && (0, i.jsx)("div", {
                        className: "flex min-w-0 justify-end",
                        role: "status",
                        "aria-label": "loading" === iI.type ? iK : i$,
                        children: (0, i.jsx)(er.a, {
                            statusState: iI
                        })
                    })
                })]
            });
            let le = (0, i.jsxs)(V.a, {
                    value: {
                        id: tS,
                        registerOpen: e6 ? nY : void 0
                    },
                    children: [t, eR?.({
                        isCompact: is,
                        isDragging: tn,
                        open: tD,
                        onMinimize: aK,
                        onOpenChange: tq
                    }), null != e8 && (0, i.jsxs)("div", {
                        className: "-me-0.5 flex shrink-0 items-center",
                        children: [a7, (0, i.jsx)(B.d, {
                            disabled: eL?.openRightPaneDisabled,
                            size: is ? "iconCircle" : "toolbar",
                            onOpen: e8
                        })]
                    }), null == e8 && te && a7]
                }),
                lt = (0, i.jsx)("div", {
                    className: "contents",
                    onPointerDownCapture: a3,
                    onContextMenu: a4,
                    children: te ? (0, i.jsx)(B.a, {
                        isCompact: e6 && is,
                        isVisible: iv,
                        isDisabled: eM,
                        showDivider: !iy,
                        children: le
                    }) : (0, i.jsx)(B.e, {
                        expandOnClick: e6,
                        animateChrome: !tE && !eD && null == nk,
                        isChromeRevealed: iv,
                        isCompact: is,
                        isDisabled: eM,
                        reserveSpace: e6 && ih && !is,
                        presentationToggle: eE ? aG : void 0,
                        children: le
                    })
                }),
                ln = (0, i.jsx)(h.a.div, {
                    ref: z.d,
                    className: "pointer-events-none absolute",
                    style: te ? {
                        top: av.startsWith("top") ? aS : void 0,
                        bottom: av.startsWith("top") ? void 0 : aM.bottom,
                        left: aC,
                        width: af.width,
                        height: af.height,
                        opacity: ii
                    } : {
                        inset: 0
                    },
                    "aria-hidden": !eD,
                    "data-pip-obstacle": eD ? tp : void 0,
                    "data-floating-chat-minimized": "",
                    animate: te ? void 0 : {
                        opacity: +!!it
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
                        ref: ng,
                        className: (0, r.b)("absolute inset-0 m-auto touch-none", eD && "pointer-events-auto"),
                        "aria-description": iA ? iV : void 0,
                        "aria-label": e$ ?? tj.formatMessage({
                            id: "quickChat.restoreFloatingChat",
                            defaultMessage: "Restore floating chat: {title}"
                        }, {
                            title: eF
                        }),
                        autoFocus: !eT && eD && nF,
                        color: "ghostSecondary",
                        size: "composer",
                        uniform: !0,
                        onClick: e => {
                            0 !== e.detail && n$.current || a$()
                        },
                        onPointerEnter: e => {
                            te || "touch" === e.pointerType || nM(!0)
                        },
                        onKeyDown: e => {
                            "ready" === i_.type && ("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), te || (0, g.flushSync)(() => nM(!0)), nv.current?.querySelector("button")?.focus({
                                preventScroll: !0
                            }))
                        },
                        onPointerDown: e => {
                            t2 || 0 !== e.button || (n$.current = !1, e.currentTarget.setPointerCapture(e.pointerId), aj(e))
                        },
                        children: iE && null != tx && null == eO ? (0, i.jsx)(er.a, {
                            statusState: tx,
                            size: te ? "default" : "compact"
                        }) : (0, i.jsx)(K.a, {
                            badgeEnabled: iA,
                            children: eO ?? (0, i.jsx)(P.Kb, {})
                        })
                    }, eD ? "minimized" : "preview")
                }),
                li = "ready" === i_.type ? (0, i.jsx)(q, {
                    items: i_.value,
                    availableHeight: Math.max(0, (U?.height ?? tN) - iZ - tT - (eD ? af.height : i3) - 32 - 12),
                    isDockedTop: na,
                    shouldReduceMotion: tE
                }) : null;
            !te && (n = eh, it ? n = aE : null != nk || tn || (n = "none"));
            let la = (0, i.jsxs)(R, {
                allowCompactResize: !0,
                animateSurface: null != nk || !eD,
                elevateComposer: e6 && !it,
                contentStyle: te ? {
                    ...ai,
                    borderRadius: aD
                } : void 0,
                surfaceStyle: te ? {
                    top: aN,
                    right: aP,
                    bottom: aT,
                    left: aL,
                    borderRadius: aD
                } : void 0,
                currentSize: {
                    height: i7,
                    width: ar
                },
                heightLabel: a0,
                resizeFromCenter: te && iB,
                fixedHorizontalEdge: te && !iB ? iX : void 0,
                isCompact: is,
                isCompactChromeRevealed: ih && iv,
                isMinimized: it,
                keepSurfaceInset: !0,
                maximumSize: {
                    height: i0,
                    width: i2
                },
                minimizedContent: null == eK ? ln : (0, i.jsx)($.a, {
                    disableNative: !0,
                    items: eK,
                    children: (0, i.jsx)("div", {
                        className: "contents",
                        children: ln
                    })
                }),
                minimizedSurfaceBounds: aM,
                minimumSize: {
                    height: i6,
                    width: i8
                },
                prefersCompactPresentation: !0,
                resizable: !t2,
                background: it || te ? "panel" : L,
                sectionRef: nf,
                sectionProps: {
                    ref: a,
                    "aria-label": iW ? void 0 : eF,
                    "aria-labelledby": iW ? tk : void 0,
                    "aria-modal": null != U && void 0,
                    animate: {
                        ...l ? {
                            opacity: +!!at,
                            translateY: 8 * (!at && !tE)
                        } : {},
                        width: ar,
                        scale: te || nO?.stage !== "approaching" ? 1 : .95
                    },
                    "data-quick-chat-drag-handle": !te && is || void 0,
                    "data-pip-obstacle": eD ? void 0 : tp,
                    "data-state": "open",
                    drag: !t2,
                    dragConstraints: null == U ? void 0 : {
                        left: az.left - aw.x,
                        right: az.right - aw.x,
                        top: az.top - aw.y,
                        bottom: az.bottom - aw.y
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
                            "--quick-chat-expansion": te ? as : void 0
                        },
                        ...ai,
                        top: na ? iZ + 10 : "auto",
                        bottom: na ? "auto" : 10 + tT,
                        left: iB ? "50%" : "auto",
                        right: "auto",
                        ...!iB && {
                            [iX]: 10
                        },
                        translate: iB ? "-50% 0" : void 0,
                        x: nh,
                        y: np,
                        originX: "bottom-center" === av ? .5 : Number(av.endsWith("right")),
                        originY: +!av.startsWith("top")
                    },
                    transition: {
                        duration: al,
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
                                    t.ownerDocument.hasFocus() && ez(t, t.ownerDocument.activeElement, tS) || (nR(!1), nH(!1), nM(!1))
                                });
                                return
                            }
                            nR(!1), nH(!1), nM(!1), (!te || e6) && iC && null == e.target.closest("[inert]") && (nC(null), nj("compact"))
                        }
                    },
                    onClick: e => {
                        if (!(e6 && (0 !== e.button || e.ctrlKey) || eD || n$.current || e.detail > 0 && nB.current || e.defaultPrevented || !(e.target instanceof Element) || !e.currentTarget.contains(e.target) || e.target.closest("button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"))) {
                            if (is && (e.target === e.currentTarget || nm.current?.contains(e.target))) return void aZ();
                            if (e6) {
                                if (!ih || !iu) return;
                                is && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                                    preventScroll: !0
                                }), nC(null), nj("expanded");
                                return
                            }
                            if (te) {
                                is && iu && aZ();
                                return
                            }
                            ih && iu && e.target.closest("header[data-quick-chat-drag-handle]") && (is && !e.currentTarget.contains(document.activeElement) && e.currentTarget.focus({
                                preventScroll: !0
                            }), aV())
                        }
                    },
                    onDoubleClick: e => {
                        te && !eD && !n$.current && !e.defaultPrevented && e.target instanceof Element && e.target.closest("header[data-quick-chat-drag-handle]") && !e.target.closest("button, a, select, [role='button'], [role='menuitem'], [role='separator']") && (nC(null), nj("expanded"), n4(null), J(e5, k, {
                            dockPosition: "bottom-right",
                            hasConversation: eP
                        }), aW("bottom-right", !0, {
                            height: ej(k.height, i6, i0),
                            width: ej(k.width + 12, i8, i2)
                        }))
                    },
                    onClickCapture: e => {
                        !eT && n$.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
                    },
                    onDrag: (e, t) => {
                        let n = aA(e, t),
                            i = n.bubbleDropPosition ?? (te ? nn : n.dockPosition);
                        if (tr && (n.isRightPaneTarget ? tl("right-pane") : n.shouldMinimize ? tl(`bubble-${i}`) : tl(eD ? `bubble-${n.dockPosition}` : `composer-${n.dockPosition}`)), !n.isRightPaneTarget && null != n.dockPosition && (te ? n.shouldMinimize : n.isNearDock)) {
                            let e = n.shouldMinimize ? "minimized" : "approaching";
                            (nO?.stage !== e || nO.dockPosition !== i) && (nK({
                                dockPosition: i,
                                stage: e
                            }), (n.shouldMinimize || nO?.stage === "minimized") && nC(te ? null : {
                                target: n.shouldMinimize ? "minimized" : nz
                            }))
                        } else null != nO && "restored" !== nO.stage && (nK({
                            ...nO,
                            stage: "restored"
                        }), "minimized" === nO.stage && nC(te ? null : {
                            target: nz
                        }))
                    },
                    onDragEnd: (e, t) => {
                        if (no.current) return;
                        tl(null);
                        let n = aA(e, t, !0);
                        if (n.isRightPaneTarget) {
                            nh.jump(0), np.jump(0), nK(null), nC(null), ti(!1), e8?.();
                            return
                        }
                        n.shouldMinimize ? (0, g.flushSync)(() => {
                            null != n.bubbleDropPosition ? aF(n.bubbleDropPosition, !0) : te && t5 || aF(te ? nn : n.requestedDockPosition, !0), aK()
                        }) : (aW(n.requestedDockPosition, !0), null != nO && "restored" !== nO.stage && (nK({
                            ...nO,
                            stage: "restored"
                        }), "minimized" === nO.stage && nC(te ? null : {
                            target: nz
                        }))), ti(!1)
                    },
                    onDragStart: () => {
                        nM(!1), tl(null), no.current = !1, n$.current = !0, ti(!0), nh.stop(), np.stop()
                    },
                    onFocusCapture: e => {
                        if (e.currentTarget.contains(e.target) && null != e.target.closest("[data-composer-input], [data-codex-composer-request]")) {
                            (!te || e6) && nR(!0), nH(!0);
                            let t = "[data-dictation-button], [data-dictation-recording-controls]";
                            (e6 ? ih && iu : te) && null == ev && !e.target.closest(t) && !(e.relatedTarget instanceof Element && e.relatedTarget.closest(t)) && !nT && null == nD.current && (nC(null), nj("expanded"))
                        } else e.currentTarget.contains(e.target) && !nm.current?.contains(e.target) && (nH(!1), e6 && e.target.closest("header[data-quick-chat-drag-handle]") && nR(!0))
                    },
                    onKeyDown: e => {
                        if (!aY || "Escape" !== e.key || e.defaultPrevented || e.nativeEvent.isComposing) return;
                        let t = aB && !e.repeat;
                        !t && (!eg || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) || (e.preventDefault(), e.stopPropagation(), t && aX())
                    },
                    onKeyDownCapture: e => {
                        eT || "Escape" !== e.key || (n$.current = !0, nr.cancel())
                    },
                    onPointerDownCapture: e => {
                        if (eT || (n$.current = !1, nB.current = nV.current > 0 && e.target instanceof Element && null != e.target.closest("header[data-quick-chat-drag-handle]"), t2 || 0 !== e.button || e.ctrlKey || !(e.target instanceof Element))) return;
                        let t = e.target.closest("[data-quick-chat-drag-handle]"),
                            n = e.target.closest("button, a, input, textarea, select, label, [contenteditable], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]"),
                            i = nm.current,
                            a = e.target.closest("[data-composer-input]")?.querySelector("[contenteditable='true']:has([data-placeholder])");
                        if (ef && null != a && i?.contains(a) && (n === a || e.target.contains(a))) t = i;
                        else if (null == t || null != n && n !== t) return;
                        e.preventDefault(), t.setPointerCapture(e.pointerId), aj(e)
                    },
                    onPointerLeave: () => {
                        nv.current?.contains(document.activeElement) || nM(!1)
                    }
                },
                shouldReduceMotion: tE,
                variant: null == U ? "floating" : "content",
                verticalResizeEdge: na ? "bottom" : "top",
                widthLabel: aJ,
                onResize: (e, t) => {
                    let n = te && iB ? 0 : (0, X.c)(ni, e, {
                            height: i7,
                            width: ar
                        }, nh.get(), t.width, iJ, t1, 12),
                        i = ao.y + np.get(),
                        a = (0, X.d)(ni, t, iJ, t1, 12, iZ),
                        l = ej(i + (na ? 0 : i7 - t.height), iZ + 10, iJ - t.height - 10);
                    nh.stop(), np.stop(), (0, g.flushSync)(() => {
                        n4({
                            height: is ? iU.height : t.height,
                            width: t.width - 12
                        })
                    }), nh.jump(n), np.jump(l - a.y)
                },
                onResizeEnd: e => {
                    J(e5, {
                        height: is ? iU.height : e.height,
                        width: e.width - 12
                    }, {
                        dockPosition: ni,
                        hasConversation: eP
                    }), aW(ni, !1, e)
                },
                onResizingChange: e => {
                    nQ(e), e && (nC(null), nh.stop(), np.stop())
                },
                children: [!te && iH && "ready" === i_.type ? (0, i.jsx)("div", {
                    ref: (0, M.a)(nv, t0, z.d),
                    className: (0, r.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !eD && (na ? "top-full" : "bottom-full"), na ? "pt-3" : "pb-3"),
                    "data-pip-obstacle": tp,
                    onClickCapture: () => {
                        (eD ? ng.current : nf.current)?.focus({
                            preventScroll: !0
                        }), nR(!1)
                    },
                    style: eD ? a_ : void 0,
                    children: li
                }) : null, (0, i.jsx)(p.a, {
                    initial: !1,
                    children: te && iH ? (0, i.jsx)(h.a.div, {
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
                        ref: (0, M.a)(nv, t0, z.d),
                        className: (0, r.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset)", !eD && (na ? "top-full" : "bottom-full"), eD && (na ? "pt-1" : "pb-1")),
                        "data-pip-obstacle": "quick-chat",
                        onClickCapture: () => {
                            (eD ? ng.current : nf.current)?.focus({
                                preventScroll: !0
                            }), nR(!1), nH(!1)
                        },
                        style: eD ? a_ : void 0,
                        children: eD ? (0, i.jsx)(y.c, {
                            variant: "notice",
                            children: li
                        }) : li
                    }, "response-preview") : null
                }), (0, i.jsx)("div", {
                    ref: tZ,
                    className: (0, r.b)("pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden", na ? "top-full pt-2" : "bottom-full"),
                    hidden: it
                }), (0, i.jsx)("div", {
                    ref: tU,
                    className: (0, r.b)(E.a.floatingComposerInset, "pointer-events-auto absolute top-full max-w-full empty:hidden", 0 === iQ && "pt-2", na ? "w-full" : "w-80", iB && "left-1/2 -translate-x-1/2", !iB && (iY ? "left-0" : "right-0"), it && tn && "invisible"),
                    style: {
                        marginTop: iQ
                    },
                    "data-pip-obstacle": tp,
                    children: ek
                }), (0, i.jsxs)(h.a.div, {
                    "aria-hidden": eD,
                    animate: te ? void 0 : {
                        clipPath: n,
                        opacity: +!it
                    },
                    className: (0, r.b)("relative z-0 flex min-h-0 flex-1 flex-col", !eD && "pointer-events-auto"),
                    "data-floating-chat-surface": !0,
                    "data-floating-chat-dock-position": ni,
                    style: te ? {
                        clipPath: aq,
                        opacity: ia,
                        paddingTop: ip && iv ? 46 : void 0
                    } : void 0,
                    initial: !1,
                    inert: !!eD || void 0,
                    transition: tE || !te && null == nk ? {
                        duration: 0
                    } : {
                        duration: .3,
                        ease: S.e
                    },
                    onAnimationComplete: e => {
                        nk?.target === (it ? "minimized" : nz) && "object" == typeof e && "clipPath" in e && e.clipPath === (it ? aE : eh) && nC(e => e === nk ? null : e)
                    },
                    children: [!te && !ih && (0, i.jsx)("div", {
                        className: (0, r.b)("minimizeButton-HmBp0q", "absolute right-2 z-10", na ? "top-full pt-1" : "bottom-full pb-1"),
                        children: (0, i.jsx)(B.c, {
                            standalone: !0,
                            size: a8,
                            onMinimize: aK
                        })
                    }), (te || ih) && (eR?.({
                        contextMenuTrigger: lt,
                        isCompact: is,
                        isDragging: tn,
                        onMinimize: aK
                    }) ?? lt), (0, i.jsxs)("div", {
                        className: (0, r.b)("relative flex min-h-0 flex-1 flex-col", is && "justify-end"),
                        children: [(0, i.jsx)(eo.b, {
                            value: {
                                ...tm,
                                isFloatingChatSurface: !0,
                                isFloatingTranscriptOpen: id,
                                followLatestTranscript: te ? is : tm.followLatestTranscript
                            },
                            children: (0, i.jsxs)(h.a.div, {
                                className: te ? (0, r.b)("overflow-hidden", an ? "relative flex min-h-0 flex-col justify-end" : "absolute inset-x-0") : "contents",
                                style: te && !an ? {
                                    bottom: nZ,
                                    height: ac
                                } : void 0,
                                children: [iw && (0, i.jsx)(h.a.div, {
                                    className: (0, r.b)("pointer-events-none px-4 py-3 text-sm text-default", an ? "relative mx-(--floating-panel-inset) shrink-0" : "absolute inset-x-(--floating-panel-inset) bottom-0"),
                                    id: tC,
                                    "aria-hidden": tz || !is,
                                    style: {
                                        opacity: au
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
                                    "aria-hidden": is,
                                    className: (0, r.b)("mx-(--floating-panel-inset) min-h-0 flex-1 flex-col", !te && (is ? "hidden" : "flex"), te && "absolute inset-x-0 bottom-0 flex", te && "overflow-hidden"),
                                    inert: is,
                                    style: te ? {
                                        height: Math.max(0, i5 - 46 - nZ),
                                        opacity: is ? 0 : as
                                    } : void 0,
                                    children: [tu && (!ic || te) ? e0?.(() => {
                                        nC(null), nj("compact")
                                    }, id) : null, !tu && (0, i.jsx)(p.a, {
                                        initial: !1,
                                        children: (te || !is) && null != tc && (0, i.jsx)(h.a.div, {
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
                                                duration: al,
                                                ease: S.e
                                            },
                                            children: tc
                                        }, "empty-state")
                                    })]
                                }), te && is && iw && (0, i.jsx)(N.a, {
                                    unstyled: !0,
                                    focusRing: "inset",
                                    className: "absolute inset-0",
                                    "aria-label": aU,
                                    "aria-describedby": tC,
                                    "data-quick-chat-drag-handle": !0,
                                    onClick: aZ
                                })]
                            })
                        }), eR?.({
                            contextMenuTrigger: a6,
                            isCompact: is,
                            isDragging: tn,
                            onMinimize: aK
                        }) ?? a6]
                    })]
                }), eC]
            });
            return (0, i.jsxs)(V.a, {
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
                    bubbleHeight: af.height,
                    reservedDockPosition: ex,
                    viewportWidth: t1,
                    viewportHeight: iJ
                }), la]
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
                    rightPaneGeometryRef: g,
                    footerHeight: v,
                    bubbleHeight: x,
                    reservedDockPosition: b,
                    viewportWidth: y,
                    viewportHeight: z
                } = e,
                j = void 0 !== h && h,
                k = void 0 !== p && p,
                C = void 0 === m ? null : m,
                S = void 0 === v ? 0 : v,
                M = void 0 === x ? 36 : x,
                E = (0, w.c)(),
                R = (0, f.useRef)(null);
            if (u[0] !== M || u[1] !== S || u[2] !== g || u[3] !== C || u[4] !== E ? (t = () => {
                    let e = R.current;
                    if (null == C || null == e) return;
                    let t = g?.current,
                        n = (0, l.b)(C, null, () => {
                            let n = t ?? ew(C, E, S, M);
                            t = void 0, null != g && (g.current = n), e.style.left = `${(0,w.b)(n.svgRect.left,E)}px`, e.style.top = `${(0,w.b)(n.svgRect.top,E)}px`, e.style.width = `${(0,w.b)(n.svgRect.width,E)}px`, e.style.height = `${(0,w.b)(n.svgRect.height,E)}px`
                        }, {
                            ancestorScroll: !1,
                            ancestorResize: !1
                        });
                    return () => {
                        n(), null != g && (g.current = null)
                    }
                }, n = [M, S, g, C, E], u[0] = M, u[1] = S, u[2] = g, u[3] = C, u[4] = E, u[5] = t, u[6] = n) : (t = u[5], n = u[6]), (0, f.useLayoutEffect)(t, n), u[7] !== d || u[8] !== j || u[9] !== k || u[10] !== b || u[11] !== C || u[12] !== z || u[13] !== y || u[14] !== E) {
                let e, t = ey(b, k, !0);
                u[17] !== d || u[18] !== C || u[19] !== E ? (o = null != C && (0, i.jsx)(O.a, {
                    container: C.ownerDocument.body,
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
                }), u[17] = d, u[18] = C, u[19] = E, u[20] = o) : o = u[20], u[21] !== d || u[22] !== j || u[23] !== z || u[24] !== y ? (e = e => {
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
                }, u[21] = d, u[22] = j, u[23] = z, u[24] = y, u[25] = e) : e = u[25], s = eu.filter(e => t.includes(e)).map(e), u[7] = d, u[8] = j, u[9] = k, u[10] = b, u[11] = C, u[12] = z, u[13] = y, u[14] = E, u[15] = o, u[16] = s
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

        function ek() {
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
            f = n("FJqt");
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
                    f = !d || !!h || void 0,
                    g = m ? Number(d) : "var(--quick-chat-expansion, 1)";
                s[0] !== g ? (t = {
                    opacity: g
                }, s[0] = g, s[1] = t) : t = s[1];
                let v = !d || !!h || void 0,
                    x = m && "border-b",
                    b = m && (p ? "border-default" : "border-transparent");
                return s[2] !== x || s[3] !== b ? (n = (0, l.b)("flex h-toolbar cursor-interaction touch-none items-center justify-between px-2 select-none", x, b), s[2] = x, s[3] = b, s[4] = n) : n = s[4], s[5] !== c || s[6] !== n ? (r = (0, i.jsx)("div", {
                    className: n,
                    children: c
                }), s[5] = c, s[6] = n, s[7] = r) : r = s[7], s[8] !== f || s[9] !== t || s[10] !== v || s[11] !== r ? (o = (0, i.jsx)("header", {
                    className: "absolute inset-x-0 top-0 z-10 mx-(--floating-panel-inset) h-toolbar min-h-0 shrink-0 overflow-hidden floating-chat-header",
                    "aria-hidden": f,
                    style: t,
                    "data-quick-chat-drag-handle": !0,
                    inert: v,
                    children: r
                }), s[8] = f, s[9] = t, s[10] = v, s[11] = r, s[12] = o) : o = s[12], o
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
                    f = void 0 !== p && p,
                    g = (0, s.a)();
                o[0] !== g ? (t = g.formatMessage({
                    id: "quickChat.minimize",
                    defaultMessage: "Minimize chat"
                }), o[0] = g, o[1] = t) : t = o[1];
                let v = f ? "outlineSurface" : "ghostSecondary";
                return o[2] !== f ? (n = e => {
                    f && e.preventDefault()
                }, o[2] = f, o[3] = n) : n = o[3], o[4] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.jsx)(d.a, {
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
                        size: g
                    } = e,
                    v = (0, s.a)();
                if ((0, o.z)(c.A)) return null;
                r[0] !== v ? (t = v.formatMessage({
                    id: "quickChat.dock.openInRightPanel",
                    defaultMessage: "Open chat in right panel"
                }), r[0] = v, r[1] = t) : t = r[1];
                let x = t;
                return r[2] !== p || r[3] !== x || r[4] !== m || r[5] !== g ? (n = e => (0, i.jsx)(u.a, {
                    ...e,
                    "aria-label": x,
                    color: "ghostSecondary",
                    disabled: p,
                    radius: "full",
                    size: g,
                    uniform: !0,
                    onClick: m,
                    children: (0, i.jsx)(d.a, {
                        className: "rotate-180",
                        asset: f.a
                    })
                }), r[2] = p, r[3] = x, r[4] = m, r[5] = g, r[6] = n) : n = r[6], r[7] !== x || r[8] !== n ? (l = (0, i.jsx)(h.b, {
                    content: x,
                    describeTrigger: !1,
                    children: n
                }), r[7] = x, r[8] = n, r[9] = l) : l = r[9], l
            },
            e: function(e) {
                let t, n, o, s, c, u, d, h = (0, a.c)(28),
                    {
                        animateChrome: m,
                        expandOnClick: f,
                        children: g,
                        isChromeRevealed: v,
                        isCompact: x,
                        isDisabled: b,
                        presentationToggle: w,
                        reserveSpace: y
                    } = e,
                    z = void 0 !== f && f,
                    j = !x && "shrink-0";
                h[0] !== j ? (t = (0, l.b)("floating-chat-header relative min-h-0 overflow-hidden", j), h[0] = j, h[1] = t) : t = h[1];
                let k = !v || !!b || void 0,
                    C = v || y ? 46 : 0,
                    S = +!!v;
                h[2] !== C || h[3] !== S ? (n = {
                    height: C,
                    opacity: S
                }, h[2] = C, h[3] = S, h[4] = n) : n = h[4];
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
                return h[11] !== E || h[12] !== R || h[13] !== N || h[14] !== P || h[15] !== T ? (c = (0, l.b)("flex h-toolbar touch-none select-none items-center justify-between", E, R, N, P, T), h[11] = E, h[12] = R, h[13] = N, h[14] = P, h[15] = T, h[16] = c) : c = h[16], h[17] !== g || h[18] !== c ? (u = (0, i.jsx)("div", {
                    className: c,
                    children: g
                }), h[17] = g, h[18] = c, h[19] = u) : u = h[19], h[20] !== s || h[21] !== u || h[22] !== t || h[23] !== k || h[24] !== n || h[25] !== M || h[26] !== o ? (d = (0, i.jsxs)(r.a.header, {
                    className: t,
                    "aria-hidden": k,
                    animate: n,
                    "data-quick-chat-drag-handle": !0,
                    initial: !1,
                    inert: M,
                    transition: o,
                    children: [s, u]
                }), h[20] = s, h[21] = u, h[22] = t, h[23] = k, h[24] = n, h[25] = M, h[26] = o, h[27] = d) : d = h[27], d
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
            let t, n, l, c, d, h, p, m, f, g = (0, a.c)(35),
                {
                    edge: v,
                    getCurrentSize: x,
                    maximumSize: b,
                    resizeFromCenter: w,
                    minimumSize: y,
                    onResizeEnd: z,
                    onResizingChange: j,
                    setSize: k,
                    verticalEdge: C
                } = e,
                S = void 0 === v ? "left" : v,
                M = void 0 !== w && w,
                E = void 0 === C ? "top" : C,
                R = (0, s.c)(),
                N = (0, o.useRef)(null);
            g[0] !== S || g[1] !== b || g[2] !== y || g[3] !== M || g[4] !== k || g[5] !== E || g[6] !== R ? (t = e => {
                let t = N.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                e.preventDefault();
                let n = {
                    height: u(t.startSize.height + ("top" === E ? -1 : 1) * ((0, s.b)(e.clientY, R) - t.startPointer.y), y.height, b.height),
                    width: u(t.startSize.width + (M ? 2 : 1) * ("left" === S ? -1 : 1) * ((0, s.b)(e.clientX, R) - t.startPointer.x), y.width, b.width)
                };
                t.didMove || (t.didMove = n.height !== t.startSize.height || n.width !== t.startSize.width), t.lastSize = n, k(n)
            }, g[0] = S, g[1] = b, g[2] = y, g[3] = M, g[4] = k, g[5] = E, g[6] = R, g[7] = t) : t = g[7];
            let P = t;
            g[8] !== z || g[9] !== j ? (n = (e, t) => {
                let n = N.current;
                n?.pointerId === e.pointerId && (N.current = null, j?.(!1), t && n.didMove && z?.(n.lastSize))
            }, g[8] = z, g[9] = j, g[10] = n) : n = g[10];
            let T = n,
                L = "top" === E ? "top-0" : "bottom-0",
                D = "left" === S ? "left-0" : "right-0",
                q = "left" === S == ("top" === E) ? "cursor-nwse-resize" : "cursor-nesw-resize";
            return g[11] !== L || g[12] !== D || g[13] !== q ? (l = (0, r.b)("group absolute z-50 flex size-4 touch-none select-none", L, D, q), g[11] = L, g[12] = D, g[13] = q, g[14] = l) : l = g[14], g[15] !== T ? (c = e => {
                T(e, !1)
            }, g[15] = T, g[16] = c) : c = g[16], g[17] !== P || g[18] !== T ? (d = e => {
                P(e), T(e, !0)
            }, g[17] = P, g[18] = T, g[19] = d) : d = g[19], g[20] !== x || g[21] !== j || g[22] !== R ? (h = e => {
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
            }, g[20] = x, g[21] = j, g[22] = R, g[23] = h) : h = g[23], g[24] !== P || g[25] !== T ? (p = e => {
                P(e), T(e, !0)
            }, g[24] = P, g[25] = T, g[26] = p) : p = g[26], g[27] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, i.jsx)("div", {
                className: "pointer-events-none m-auto h-px w-2 rotate-45 bg-text/25 opacity-0 group-hover:opacity-100 group-active:opacity-100"
            }), g[27] = m) : m = g[27], g[28] !== P || g[29] !== c || g[30] !== d || g[31] !== h || g[32] !== p || g[33] !== l ? (f = (0, i.jsx)("div", {
                "aria-hidden": !0,
                className: l,
                onLostPointerCapture: c,
                onPointerCancel: d,
                onPointerDown: h,
                onPointerMove: P,
                onPointerUp: p,
                children: m
            }), g[28] = P, g[29] = c, g[30] = d, g[31] = h, g[32] = p, g[33] = l, g[34] = f) : f = g[34], f
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
                    resizeFromCenter: f,
                    heightLabel: g,
                    maximumSize: v,
                    minimumSize: x,
                    onResize: b,
                    onResizeEnd: w,
                    onResizingChange: y,
                    verticalEdge: z,
                    widthLabel: j
                } = e,
                k = void 0 === p || p,
                C = void 0 !== f && f,
                S = void 0 === z ? "top" : z;
            if (s[0] !== u || s[1] !== h || s[2] !== k || s[3] !== m || s[4] !== g || s[5] !== v || s[6] !== x || s[7] !== b || s[8] !== w || s[9] !== y || s[10] !== C || s[11] !== S || s[12] !== j) {
                let e, a;
                s[16] !== m ? (e = e => e !== m, s[16] = m, s[17] = e) : e = s[17];
                let o = d.filter(e);
                s[18] !== u || s[19] !== h || s[20] !== k || s[21] !== v || s[22] !== x || s[23] !== b || s[24] !== w || s[25] !== y || s[26] !== C || s[27] !== j ? (a = e => (0, i.jsx)(l.a, {
                    ariaLabel: j,
                    defaultSize: h.width,
                    edge: e,
                    resizeFromCenter: C,
                    extendIntoToolbar: k,
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
                }, e), s[18] = u, s[19] = h, s[20] = k, s[21] = v, s[22] = x, s[23] = b, s[24] = w, s[25] = y, s[26] = C, s[27] = j, s[28] = a) : a = s[28], t = o.map(a), s[29] !== u || s[30] !== h || s[31] !== g || s[32] !== v || s[33] !== x || s[34] !== b || s[35] !== w || s[36] !== y || s[37] !== S ? (n = null != S && (0, i.jsx)(l.a, {
                    ariaLabel: g,
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
                }), s[29] = u, s[30] = h, s[31] = g, s[32] = v, s[33] = x, s[34] = b, s[35] = w, s[36] = y, s[37] = S, s[38] = n) : n = s[38], r = null != S && o.map(e => (0, i.jsx)(c, {
                    edge: e,
                    resizeFromCenter: C,
                    getCurrentSize: () => u,
                    maximumSize: v,
                    minimumSize: x,
                    verticalEdge: S,
                    onResizeEnd: w,
                    onResizingChange: y,
                    setSize: t => {
                        b(e, t)
                    }
                }, e)), s[0] = u, s[1] = h, s[2] = k, s[3] = m, s[4] = g, s[5] = v, s[6] = x, s[7] = b, s[8] = w, s[9] = y, s[10] = C, s[11] = S, s[12] = j, s[13] = t, s[14] = n, s[15] = r
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