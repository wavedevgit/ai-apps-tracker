export const __rspack_esm_ids = [432631];
export const __webpack_modules__ = {
    fBor: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => C
        });
        var a = n("ABep"),
            i = n("QosV"),
            o = n("iTtm"),
            l = n("aFoA"),
            r = n("Bbed"),
            s = n("tSEg"),
            c = n("zd8w"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("gbrq"),
            p = n("rxj0"),
            g = n("uk1V"),
            m = n("nr53"),
            f = n("PIpC"),
            v = n("UejO");

        function b() {
            let e, t, a, r, b = (0, i.c)(6),
                y = (0, o.y)(s.a);
            return b[0] !== y ? (e = () => {
                let e = null;
                return y.watch(t => {
                    let a = t.get(f.c),
                        i = t.get(d.g),
                        o = t.get(v.b),
                        r = t.get(l.a, o?.hostId == null ? o?.conversationId ?? null : null),
                        s = t.get(h.i),
                        c = t.get(u.j.tabs$),
                        b = "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId);
                    if (null == a || !i || b || e === a || (e = a, (0, v.a)(o, t.value, r, t.value.clientThreadId) || s || c.length > 0)) return;
                    let y = (0, f.a)(a);
                    if (!y?.isOpen) return;
                    let C = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return C ? null : Promise.all([t.query.fetch(n, y.projectId), t.get(m.b) ? t.query.fetch(m.c, y.projectId) : null])
                    }).then(e => {
                        if (null == e) return;
                        let [n, i] = e, o = (0, f.a)(a);
                        C || null == n || i?.supports_chatgpt_preview === !1 || !o?.isOpen || o.projectId !== y.projectId || "active" !== n.status || null == n.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId) || (0, g.a)(t, {
                            type: "appgen-app",
                            projectId: n.id,
                            title: n.title,
                            url: n.current_live_url
                        })
                    }, x), () => {
                        C = !0
                    }
                })
            }, t = [y], b[0] = y, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), (0, c.useEffect)(e, t), b[3] !== y ? (a = () => {
                let e = y.get(h.j),
                    t = null;
                return y.watch(n => {
                    let a = n.get(h.j),
                        i = n.get(u.j.activeTab$),
                        o = n.get(f.c);
                    (a !== e || null == t && null != o) && null != o && i?.tabId.startsWith("site-preview:") && (0, f.b)(o, i.tabId.slice(13), a), e = a, t = o
                })
            }, r = [y], b[3] = y, b[4] = a, b[5] = r) : (a = b[4], r = b[5]), (0, c.useEffect)(a, r), null
        }

        function x() {}
        let y = (0, r.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function C() {
            let e, t, n, r, c = (0, i.c)(12),
                d = (0, o.y)(s.a),
                u = (0, o.z)(v.b),
                h = (0, o.x)(l.a, u?.hostId == null ? u?.conversationId ?? null : null);
            if ("home" !== d.value.routeKind && "chatgpt-thread" !== d.value.routeKind && "local-thread" !== d.value.routeKind) return null;
            c[0] !== u || c[1] !== h || c[2] !== d ? (e = u?.url != null && (0, v.a)(u, d.value, h, d.value.clientThreadId), c[0] = u, c[1] = h, c[2] = d, c[3] = e) : e = c[3];
            let p = e;
            return c[4] !== d ? (t = "home" !== d.value.routeKind ? (0, a.jsx)(b, {}) : null, c[4] = d, c[5] = t) : t = c[5], c[6] !== p || c[7] !== u ? (n = p ? (0, a.jsx)(y, {
                pending: u
            }) : null, c[6] = p, c[7] = u, c[8] = n) : n = c[8], c[9] !== t || c[10] !== n ? (r = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), c[9] = t, c[10] = n, c[11] = r) : r = c[11], r
        }
    }),
    fs8u: (function(e, t, n) {
        var a = n("iTtm"),
            i = n("QcW8"),
            o = n("ZU27"),
            l = n("gbrq"),
            r = n("tSEg"),
            s = n("OMIV"),
            c = n("SHid"),
            d = n("dt6g"),
            u = n("WwnD");
        let h = (0, a.c)(r.a, e => {
            let {
                get: t
            } = e;
            return null != t(i.$) && null != t(o.j.activeTab$) && !t(i.E)
        });
        n.d(t, {}, {
            a: function(e, t, n) {
                let a = (0, d.a)(e, "menu" === n ? "context_menu" : "tab_drag", () => (0, u.b)(e, "chat", t));
                return a && e.get(s.d, "2163293173") && e.set(c.a, e.get(i.jb)), a && "pin" === n && (0, l.I)(e, !0, {
                    animate: !1
                }), a
            },
            b: function(e, t, n) {
                if (null == n || !(n instanceof MouseEvent) || "pointercancel" === n.type || null == t || null == e.get(i.$) || null == e.get(o.j.activeTab$) || n.clientY < 0 || n.clientY > window.innerHeight) return null;
                let a = t.getBoundingClientRect();
                return n.clientX <= a.left + 24 ? "left" : n.clientX >= a.right - 24 ? "right" : null
            },
            c: h
        })
    }),
    rjva: (function(e, t, n) {
        n.d(t, {
            a: () => Z
        });
        var a = n("ABep"),
            i = n("QosV"),
            o = n("l2oX"),
            l = n("iTtm"),
            r = n("zd8w"),
            s = n("v7qY"),
            c = n("Wf1j"),
            d = n("Q2Qp"),
            u = n("ZU27"),
            h = n("wD9O"),
            p = n("nKJ6"),
            g = n("kois"),
            m = n("vi3X"),
            f = n("O9Pc"),
            v = n("fDIZ"),
            b = n("jEN2"),
            x = n("wqvF"),
            y = n("giDA"),
            C = n("fQ9c"),
            j = n("Fr8T"),
            w = n("xD3Z"),
            k = n("Z2JT"),
            _ = n("yC2B"),
            E = n("HnT3"),
            S = n("tSEg"),
            M = n("hZax"),
            T = n("El6m"),
            I = n("dN0a");
        n("G7Oa");
        var D = n("q1q2"),
            O = n("VwGH"),
            R = n("on57"),
            N = n("W5pg"),
            P = n("IPUh"),
            L = n("qjLK"),
            z = n("I7bK");
        n("QcW8"), n("eFp2");
        var A = n("oH56");
        n("EpL9");
        var $ = n("DUYS"),
            q = n("gbrq");
        n("dt6g");
        var F = n("bIvi");
        n("Vhua"), n("WwnD");
        var W = n("pZMh");

        function B(e) {
            let t, n, o, c, d, h, p, g, m, f, v, b = (0, i.c)(33),
                {
                    destination: x,
                    direction: y,
                    surface: C
                } = e,
                {
                    bottomPanelTargetHeight: j,
                    contentPaneWidthRatio: w,
                    mainContentWidth: k
                } = (0, z.g)(),
                _ = (0, r.useContext)(A.a),
                E = (0, l.z)(W.c),
                S = (0, l.z)(W.h),
                M = C ?? "content",
                T = E ? "content" === M && _?.dragState?.draggedTab.tabId === S : "chat" === M,
                I = (0, r.useContext)(L.a),
                B = (0, l.z)(q.d),
                H = (0, l.z)(u.a.tabIds$),
                K = _?.dragState?.sourceController === u.a && 1 === H.length;
            b[0] !== w || b[1] !== k ? (t = [k, w], b[0] = w, b[1] = k, b[2] = t) : t = b[2], b[3] !== T ? (n = e => {
                let [t, n] = e, a = Math.min(t, (0, $.f)(n, t, "unified"));
                return T ? t - a : a
            }, b[3] = T, b[4] = n) : n = b[4];
            let U = (0, N.a)(t, n);
            b[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, D.e)(V), (0, D.g)({
                    apply(e) {
                        let {
                            elements: t,
                            rects: n
                        } = e;
                        Object.assign(t.floating.style, {
                            height: `${n.reference.height}px`,
                            width: `${n.reference.width}px`
                        })
                    }
                })],
                whileElementsMounted: O.b
            }, b[5] = o) : o = b[5];
            let {
                floatingStyles: Z,
                refs: X
            } = (0, D.h)(o);
            b[6] !== X ? (c = e => {
                X.setReference(e)
            }, b[6] = X, b[7] = c) : c = b[7];
            let Y = (0, F.a)(c);
            b[8] !== X ? (d = e => {
                X.setFloating(e)
            }, b[8] = X, b[9] = d) : d = b[9];
            let G = (0, F.a)(d),
                J = "bottom" === x && "inset-x-0 bottom-0",
                ee = "left" === x && "inset-y-0 left-0",
                et = "right" === x && "inset-y-0 right-0";
            b[10] !== J || b[11] !== ee || b[12] !== et ? (h = (0, R.b)("pointer-events-none absolute", J, ee, et), b[10] = J, b[11] = ee, b[12] = et, b[13] = h) : h = b[13];
            let en = "bottom" === x ? void 0 : B && !K ? I ?? void 0 : void 0,
                ea = "bottom" === x ? j : void 0,
                ei = "bottom" === x ? void 0 : U;
            return b[14] !== en || b[15] !== ea || b[16] !== ei ? (p = {
                bottom: en,
                height: ea,
                width: ei
            }, b[14] = en, b[15] = ea, b[16] = ei, b[17] = p) : p = b[17], b[18] !== Y || b[19] !== p || b[20] !== h ? (g = (0, a.jsx)(P.a.div, {
                ref: Y,
                "aria-hidden": !0,
                className: h,
                dir: "ltr",
                style: p
            }), b[18] = Y, b[19] = p, b[20] = h, b[21] = g) : g = b[21], b[22] !== x ? (m = (0, a.jsx)(Q, {
                destination: x
            }), b[22] = x, b[23] = m) : m = b[23], b[24] !== x || b[25] !== y || b[26] !== Z || b[27] !== G || b[28] !== m ? (f = (0, s.createPortal)((0, a.jsx)("div", {
                ref: G,
                "aria-hidden": !0,
                className: "pointer-events-none z-50",
                "data-unified-workspace-drop-indicator": x,
                dir: y,
                style: Z,
                children: m
            }), document.body), b[24] = x, b[25] = y, b[26] = Z, b[27] = G, b[28] = m, b[29] = f) : f = b[29], b[30] !== g || b[31] !== f ? (v = (0, a.jsxs)(a.Fragment, {
                children: [g, f]
            }), b[30] = g, b[31] = f, b[32] = v) : v = b[32], v
        }

        function V(e) {
            let {
                rects: t
            } = e;
            return -t.reference.height
        }

        function Q(e) {
            let t, n, o, l = (0, i.c)(11),
                {
                    destination: r
                } = e,
                s = (0, h.c)(),
                c = "bottom" === r && "border-t",
                d = "left" === r && "border-r",
                u = "right" === r && "border-l";
            l[0] !== c || l[1] !== d || l[2] !== u ? (t = (0, R.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", c, d, u), l[0] = c, l[1] = d, l[2] = u, l[3] = t) : t = l[3];
            let p = `calc(100% / ${s})`,
                g = `scale(${s})`,
                m = `calc(100% / ${s})`;
            return l[4] !== p || l[5] !== g || l[6] !== m ? (n = {
                height: p,
                transform: g,
                transformOrigin: "top left",
                width: m
            }, l[4] = p, l[5] = g, l[6] = m, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (o = (0, a.jsx)("div", {
                className: t,
                style: n
            }), l[8] = t, l[9] = n, l[10] = o) : o = l[10], o
        }
        var H = n("fs8u"),
            K = n("abd8"),
            U = n("GMTh");

        function Z(e) {
            let t, n, D, O, R, N, P = (0, i.c)(64),
                {
                    children: L,
                    composerOnly: z,
                    forceExpanded: A,
                    placement: $,
                    showHeader: q,
                    showComposerDivider: F,
                    isHidden: W,
                    persistPresentation: V,
                    reserveContent: Q,
                    reserveFullComposerHeight: Z,
                    onPresentationChange: Y,
                    title: G,
                    minimizedIcon: J,
                    titleContent: ee,
                    statusState: et,
                    titleStatusState: en,
                    hasElicitation: ea,
                    notifications: ei,
                    workingPreview: eo,
                    responsePreview: el,
                    previewBubble: er,
                    renderTranscript: es,
                    hasTranscript: ec,
                    pendingFormId: ed,
                    emptyState: eu
                } = e,
                eh = void 0 !== z && z,
                ep = void 0 !== A && A,
                eg = void 0 === q ? !eh : q,
                em = void 0 === F ? !eh : F,
                ef = void 0 === V || V,
                ev = void 0 === ed ? E.a : ed,
                eb = (0, l.y)(S.a),
                ex = "pane" === (void 0 === $ ? "floating" : $),
                ey = (0, M.h)("2163293173"),
                eC = ey ? eu : void 0,
                ej = !eh || ey && (null != eC || (ec ?? null != es)),
                ew = (0, c.a)(),
                {
                    isHidden: ek
                } = (0, U.a)(ex ? "embedded" : "content"),
                e_ = void 0 !== W && W || ek,
                eE = (0, r.useContext)(d.a),
                eS = (0, r.useContext)(T.b),
                eM = (0, r.useContext)(T.a),
                eT = (0, r.useContext)(f.a),
                eI = (0, r.useContext)(v.a),
                eD = (0, r.useContext)(m.a),
                eO = (0, r.useContext)(y.a),
                eR = (0, h.c)(),
                [eN, eP] = (0, r.useState)(null),
                eL = !(0, l.z)(I.n),
                ez = (0, l.z)(ev),
                eA = (0, l.z)(ef ? k.a : void 0);
            ej || eg || (eA = "compact");
            let e$ = (0, l.z)(null == ez && (ea ?? T.c)),
                eq = (0, l.z)(u.j.activeTab$);
            P[0] !== eq || P[1] !== ex ? (t = ex ? null : (0, p.getThreadBrowserTabIdFromPanelTab)(eq), P[0] = eq, P[1] = ex, P[2] = t) : t = P[2];
            let eF = t,
                eW = void 0 !== Z && Z || eq?.tabType.kind === "latex-document" || eq?.tabType.kind === "image-preview",
                [eB, eV] = (0, r.useState)(null);
            P[3] !== eE || P[4] !== eb ? (n = e => (0, H.b)(eb, eE, e), P[3] = eE, P[4] = eb, P[5] = n) : n = P[5];
            let eQ = n;
            P[6] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)("div", {
                ref: e => {
                    null != e && eP(e)
                },
                className: "contents"
            }), P[6] = D) : D = P[6];
            let eH = ex || e_;
            return P[7] !== eq || P[8] !== ey || P[9] !== ew || P[10] !== ex || P[11] !== eE || P[12] !== eB ? (O = ey || ex || null == eE || null == eB || null == eq ? null : (0, s.createPortal)((0, a.jsx)(B, {
                destination: eB,
                direction: (0, _.a)(ew.locale),
                surface: "chat"
            }), eE), P[7] = eq, P[8] = ey, P[9] = ew, P[10] = ex, P[11] = eE, P[12] = eB, P[13] = O) : O = P[13], P[14] !== eF || P[15] !== eq?.tabId || P[16] !== eq?.tabType || P[17] !== ej || P[18] !== L || P[19] !== eh || P[20] !== ey || P[21] !== eC || P[22] !== ep || P[23] !== eQ || P[24] !== e$ || P[25] !== ec || P[26] !== eD || P[27] !== eI || P[28] !== eO || P[29] !== eM || P[30] !== eS || P[31] !== ew || P[32] !== e_ || P[33] !== eL || P[34] !== ex || P[35] !== eE || P[36] !== J || P[37] !== ei || P[38] !== Y || P[39] !== eN || P[40] !== ez || P[41] !== ef || P[42] !== er || P[43] !== es || P[44] !== Q || P[45] !== el || P[46] !== eb || P[47] !== eW || P[48] !== em || P[49] !== eg || P[50] !== eB || P[51] !== et || P[52] !== eA || P[53] !== eT || P[54] !== G || P[55] !== ee || P[56] !== en || P[57] !== eR || P[58] !== eo ? (R = e => (0, a.jsx)(o.a, {
                transformPagePoint: e => ({
                    x: e.x / eR,
                    y: e.y / eR
                }),
                children: (0, a.jsx)(T.b, {
                    value: ex ? eS : {
                        activeBrowserTabId: eF,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            eb.get(u.j.activeTab$)?.tabId === eq?.tabId && (eb.get(I.j) || (0, I.h)(eb, {
                                prefersReducedMotion: !0
                            }), (0, b.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, a.jsx)(T.a, {
                        value: ex ? eM : "expanded",
                        children: (0, a.jsx)(j.a, {
                            onResize: e => (0, g.n)(eb, {
                                dockPosition: e
                            }),
                            previewSide: ey ? eB : null,
                            dockThreadKey: K.c,
                            titleContent: ee,
                            minimizedIcon: J,
                            statusState: et,
                            titleStatusState: en,
                            hasTranscript: ec,
                            emptyState: eC,
                            pendingFormId: ez,
                            notifications: ei,
                            workingPreview: eo,
                            responsePreview: el,
                            previewBubble: er,
                            containerSize: e,
                            renderMenu: e => (0, a.jsx)(w.a, {
                                ...e,
                                showOptions: !ey || ej
                            }),
                            forceExpanded: ep || e$ && (ey || !eh),
                            isHidden: ex || e_,
                            isMinimized: eL,
                            onDragOver: ej ? e => {
                                let t = eQ(e);
                                return eV(t), null != t
                            } : void 0,
                            onDragEnd: ej ? (e, t) => {
                                eV(null);
                                let n = eQ(e);
                                return null != n && (0, H.a)(eb, n, t)
                            } : void 0,
                            presentation: eA,
                            showHeader: eg,
                            showComposerDivider: em,
                            background: eh && !eg ? void 0 : "panel",
                            onPresentationChange: e => {
                                ef && eb.set(k.a, e), Y?.(e)
                            },
                            onMinimizedChange: e => {
                                (e ? I.r : I.h)(eb, {
                                    prefersReducedMotion: !0
                                })
                            },
                            title: G ?? ew.formatMessage({
                                id: "quickChat.mainConversation",
                                defaultMessage: "Chat",
                                description: "Fallback title for the task's main conversation in the floating chat"
                            }),
                            renderTranscript: null == es ? void 0 : (e, t) => es({
                                isVisible: t && !ex && !e_
                            }),
                            renderComposer: (e, t) => (0, a.jsx)(f.a, {
                                value: ex || null == eF ? eT : eE,
                                children: (0, a.jsx)(x.a, {
                                    target: ex ? eN : null,
                                    children: (0, a.jsx)(X, {
                                        mainContentElement: eE,
                                        presentation: e,
                                        paneContext: ex ? {
                                            transition: eS,
                                            escapeHandler: eI,
                                            bannerTarget: eD,
                                            overlayOwner: eO
                                        } : void 0,
                                        layout: t,
                                        reserveFullComposerHeight: eW,
                                        reserveContent: Q ?? (null == eF && eq?.tabType.kind !== "mcp-app" && eq?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof L ? L(ex ? void 0 : e) : L
                                    })
                                })
                            })
                        })
                    })
                })
            }), P[14] = eF, P[15] = eq?.tabId, P[16] = eq?.tabType, P[17] = ej, P[18] = L, P[19] = eh, P[20] = ey, P[21] = eC, P[22] = ep, P[23] = eQ, P[24] = e$, P[25] = ec, P[26] = eD, P[27] = eI, P[28] = eO, P[29] = eM, P[30] = eS, P[31] = ew, P[32] = e_, P[33] = eL, P[34] = ex, P[35] = eE, P[36] = J, P[37] = ei, P[38] = Y, P[39] = eN, P[40] = ez, P[41] = ef, P[42] = er, P[43] = es, P[44] = Q, P[45] = el, P[46] = eb, P[47] = eW, P[48] = em, P[49] = eg, P[50] = eB, P[51] = et, P[52] = eA, P[53] = eT, P[54] = G, P[55] = ee, P[56] = en, P[57] = eR, P[58] = eo, P[59] = R) : R = P[59], P[60] !== eH || P[61] !== O || P[62] !== R ? (N = (0, a.jsxs)(a.Fragment, {
                children: [D, (0, a.jsx)(C.a, {
                    isHidden: eH,
                    overlay: O,
                    children: R
                })]
            }), P[60] = eH, P[61] = O, P[62] = R, P[63] = N) : N = P[63], N
        }

        function X(e) {
            let t, n, o, s, c, d, u, h, p, g, f, b, x, C, j, w = (0, i.c)(44),
                {
                    children: k,
                    mainContentElement: _,
                    presentation: E,
                    paneContext: M,
                    layout: D,
                    reserveContent: O,
                    reserveFullComposerHeight: R
                } = e,
                N = (0, l.y)(S.a),
                P = (0, r.useRef)(null),
                L = (0, r.useContext)(T.b),
                z = (0, r.useContext)(v.a),
                A = (0, r.useContext)(m.a),
                $ = (0, r.useContext)(y.a),
                {
                    activeBrowserTabId: q
                } = L,
                F = null != M,
                {
                    isCompact: W,
                    isDockedTop: B,
                    isHidden: V,
                    isMinimized: Q
                } = E,
                {
                    isMoving: H,
                    composerContentHeight: K,
                    dockedReservePx: U
                } = D,
                Z = !O || V || Q ? 0 : Math.max(118, W ? U : 0, R ? K + 118 - 102 : 0),
                X = B && W && U > 0 ? Z : 0,
                [Y, G] = (0, r.useState)(!Q);
            (W || Q) && !Q !== Y && G(!Q);
            let J = O && !V && Y ? I.b : 0;
            w[0] !== q || w[1] !== F ? (t = () => {
                if (F || null == q) return;
                let e = P.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && P.current?.contains(e) && e.blur()
            }, n = [q, F], w[0] = q, w[1] = F, w[2] = t, w[3] = n) : (t = w[2], n = w[3]), (0, r.useLayoutEffect)(t, n), w[4] !== J || w[5] !== B || w[6] !== V || w[7] !== Q || w[8] !== F || w[9] !== _ || w[10] !== Z || w[11] !== N || w[12] !== X ? (o = () => {
                F || null == _ || (_.style.setProperty(I.a, B ? `${J}px 0 0` : `0 0 ${J}px`), _.style.setProperty(I.c, `${V||Q||B?0:102}px`), _.style.setProperty(I.d, `${B?0:Z}px`), _.style.setProperty(I.g, `${B?Z:0}px`), (0, I.o)(N, B ? 0 : Z), N.set(I.l, X))
            }, s = [J, F, B, V, Q, _, Z, N, X], w[4] = J, w[5] = B, w[6] = V, w[7] = Q, w[8] = F, w[9] = _, w[10] = Z, w[11] = N, w[12] = X, w[13] = o, w[14] = s) : (o = w[13], s = w[14]), (0, r.useLayoutEffect)(o, s), w[15] !== F || w[16] !== _ || w[17] !== N ? (c = () => {
                if (!F && null != _) return () => {
                    _.style.removeProperty(I.a), _.style.removeProperty(I.c), _.style.removeProperty(I.d), _.style.removeProperty(I.g), (0, I.o)(N, 0), N.set(I.l, 0)
                }
            }, d = [F, _, N], w[15] = F, w[16] = _, w[17] = N, w[18] = c, w[19] = d) : (c = w[18], d = w[19]), (0, r.useLayoutEffect)(c, d);
            let ee = !W || Q || H || K > 102;
            w[20] !== ee || w[21] !== F || w[22] !== N ? (u = () => {
                let e = P.current;
                if (F || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    N.set(I.i, ee || t)
                };
                t();
                let n = ee ? null : new MutationObserver(t);
                return n?.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    n?.disconnect()
                }
            }, h = [ee, F, N], w[20] = ee, w[21] = F, w[22] = N, w[23] = u, w[24] = h) : (u = w[23], h = w[24]), (0, r.useLayoutEffect)(u, h), w[25] !== F || w[26] !== N ? (g = () => () => {
                F || N.set(I.i, !1)
            }, p = [F, N], w[25] = F, w[26] = N, w[27] = p, w[28] = g) : (p = w[27], g = w[28]), (0, r.useLayoutEffect)(g, p);
            let et = null == M ? L : M.transition,
                en = null == M ? z : M.escapeHandler,
                ea = null == M ? A : M.bannerTarget,
                ei = null == M ? $ : M.overlayOwner,
                eo = F ? "contents" : void 0;
            return w[29] !== k || w[30] !== eo ? (f = (0, a.jsx)("div", {
                ref: P,
                className: eo,
                "data-right-panel-composer-overlay-content": "true",
                children: k
            }), w[29] = k, w[30] = eo, w[31] = f) : f = w[31], w[32] !== ei || w[33] !== f ? (b = (0, a.jsx)(y.a, {
                value: ei,
                children: f
            }), w[32] = ei, w[33] = f, w[34] = b) : b = w[34], w[35] !== ea || w[36] !== b ? (x = (0, a.jsx)(m.a, {
                value: ea,
                children: b
            }), w[35] = ea, w[36] = b, w[37] = x) : x = w[37], w[38] !== en || w[39] !== x ? (C = (0, a.jsx)(v.a, {
                value: en,
                children: x
            }), w[38] = en, w[39] = x, w[40] = C) : C = w[40], w[41] !== et || w[42] !== C ? (j = (0, a.jsx)(T.b, {
                value: et,
                children: C
            }), w[41] = et, w[42] = C, w[43] = j) : j = w[43], j
        }
    }),
    ilLT: (function(e, t, n) {
        var a = n("Qgfj"),
            i = n("bf6R"),
            o = n("fs8u");
        n.d(t, {}, {
            a: function(e, t) {
                return [{
                    id: "left",
                    icon: i.w,
                    enabled: t,
                    message: (0, a.e)({
                        id: "quickChat.dock.left",
                        defaultMessage: "Move to left pane",
                        description: "Moves the floating Chat into the left split pane beside the current content"
                    }),
                    onSelect: () => {
                        (0, o.a)(e, "left", "menu")
                    }
                }, {
                    id: "right",
                    icon: i.y,
                    enabled: t,
                    message: (0, a.e)({
                        id: "quickChat.dock.right",
                        defaultMessage: "Move to right pane",
                        description: "Moves the floating Chat into the right split pane beside the current content"
                    }),
                    onSelect: () => {
                        (0, o.a)(e, "right", "menu")
                    }
                }]
            }
        })
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            i = n.n(a),
            o = n("iTtm"),
            l = n("tSEg"),
            r = n("wrxv");
        n.d(t, {}, {
            a: function(e) {
                let t = (0, o.j)(l.a, (t, n) => {
                    let {
                        scope: a
                    } = n;
                    return {
                        onOpen: () => e.open?.(a, t),
                        onDismiss: () => e.dismiss(a, t)
                    }
                }, {
                    autoDispose: 6e4
                });
                return (0, o.d)(l.a, (n, a) => {
                    if (null == n) return r.a;
                    let i = [],
                        o = !1;
                    for (let l of e.conversationIds(a.scope, n)) {
                        let n = e.status(a.scope, l);
                        if (n.pending) {
                            o = !0;
                            continue
                        }
                        if (!n.unread || !n.completed) continue;
                        let r = e.preview(a.scope, l);
                        null != r && i.push({
                            id: n.completionId ?? l,
                            title: e.title(a.scope, l),
                            preview: r,
                            ...a.get(t, l)
                        })
                    }
                    return i.length > 0 ? {
                        type: "ready",
                        value: i
                    } : o ? r.b : r.a
                }, {
                    isEqual: i()
                })
            }
        })
    }),
    zjpG: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            o = n("on57"),
            l = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, s = (0, i.c)(5),
                    {
                        className: c
                    } = e;
                return s[0] !== c ? (t = (0, o.b)("last:hidden", c), s[0] = c, s[1] = t) : t = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.a, {
                    id: "codex.ui.bulletSeparator",
                    defaultMessage: "·",
                    description: "Middle dot separator used between inline items"
                }), s[2] = n) : n = s[2], s[3] !== t ? (r = (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: t,
                    children: n
                }), s[3] = t, s[4] = r) : r = s[4], r
            }
        })
    }),
    xD3Z: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            o = n("slpy"),
            l = n("iTtm"),
            r = n("Qgfj"),
            s = n("Wf1j"),
            c = n("oyxz"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("ilLT"),
            p = n("ygO2"),
            g = n("rmk3"),
            m = n("bf6R"),
            f = n("f38C"),
            v = n("tSEg"),
            b = n("hZax"),
            x = n("dt6g"),
            y = n("WwnD");
        let C = (0, l.c)(v.a, e => {
            let {
                get: t
            } = e;
            return null == t(d.$) ? "hidden" : null != t(u.j.activeTab$) ? "split" : "tab"
        });

        function j(e) {
            let t, n, l, d, u, h = (0, i.c)(22),
                {
                    contextMenuTrigger: v,
                    isCompact: x,
                    isDragging: y,
                    items: C,
                    open: j,
                    onMinimize: k,
                    onOpenChange: _,
                    showOptions: E
                } = e,
                S = void 0 === E || E,
                M = (0, b.h)("2163293173"),
                T = (0, s.a)();
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer",
                description: "Minimizes the floating composer to its compact minimized button"
            }), h[0] = t) : t = h[0], h[1] !== k ? (n = {
                id: "minimize",
                icon: m.Se,
                message: t,
                onSelect: k,
                selectAfterClose: !0
            }, h[1] = k, h[2] = n) : n = h[2], h[3] !== C || h[4] !== n ? (l = [...C, n], h[3] = C, h[4] = n, h[5] = l) : l = h[5];
            let I = l;
            if (null != v) {
                let e, t;
                return S ? (h[6] !== v ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: v
                }), h[6] = v, h[7] = e) : e = h[7], h[8] !== I || h[9] !== e ? (t = (0, a.jsx)(g.a, {
                    disableNative: !0,
                    items: I,
                    children: e
                }), h[8] = I, h[9] = e, h[10] = t) : t = h[10], t) : v
            }
            return h[11] !== M || h[12] !== T || h[13] !== x || h[14] !== y || h[15] !== I || h[16] !== _ || h[17] !== j || h[18] !== S ? (d = S && (0, a.jsx)(g.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: j,
                onOpenChange: _,
                items: I,
                children: (0, a.jsx)(o.a, {
                    disabled: j || y,
                    content: M ? (0, a.jsx)(c.a, {
                        id: "quickChat.moreOptions",
                        defaultMessage: "Chat options",
                        description: "Tooltip for the floating chat overflow menu"
                    }) : (0, a.jsx)(c.a, {
                        id: "quickChat.dock.dragHint",
                        defaultMessage: "Drag to move · Click for options",
                        description: "Tooltip for the floating Chat grip that can be dragged to move the Chat or clicked to open docking options"
                    }),
                    children: M ? (0, a.jsx)(f.a, {
                        size: "toolbar",
                        label: T.formatMessage({
                            id: "quickChat.moreOptions",
                            defaultMessage: "Chat options",
                            description: "Tooltip for the floating chat overflow menu"
                        })
                    }) : (0, a.jsx)(p.a, {
                        className: "cursor-grab touch-none active:cursor-grabbing",
                        "aria-label": T.formatMessage({
                            id: "quickChat.dock.menu",
                            defaultMessage: "Dock Chat",
                            description: "Opens a menu to place Chat in a tab or a left or right split pane"
                        }),
                        color: "ghostSecondary",
                        "data-quick-chat-drag-handle": !0,
                        size: x ? "composer" : "toolbar",
                        uniform: !0,
                        onPointerDown: w,
                        onClick: e => {
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || _?.(!j)
                        },
                        children: (0, a.jsx)(m.Vc, {})
                    })
                })
            }), h[11] = M, h[12] = T, h[13] = x, h[14] = y, h[15] = I, h[16] = _, h[17] = j, h[18] = S, h[19] = d) : d = h[19], h[20] !== d ? (u = (0, a.jsx)(a.Fragment, {
                children: d
            }), h[20] = d, h[21] = u) : u = h[21], u
        }

        function w(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o = (0, i.c)(6),
                    s = (0, l.y)(v.a),
                    c = (0, l.z)(C);
                o[0] !== c || o[1] !== s ? (t = "hidden" === c ? [] : [{
                    id: "full-view",
                    icon: m.N,
                    message: (0, r.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view",
                        description: "Opens the existing Chat in a tab that fills the workspace"
                    }),
                    onSelect: () => {
                        (0, x.a)(s, "context_menu", () => (0, y.c)(s, "chat", {
                            mode: "full"
                        }))
                    }
                }, ...(0, h.a)(s, "split" === c)], o[0] = c, o[1] = s, o[2] = t) : t = o[2];
                let d = t;
                return o[3] !== d || o[4] !== e ? (n = (0, a.jsx)(j, {
                    ...e,
                    items: d
                }), o[3] = d, o[4] = e, o[5] = n) : n = o[5], n
            },
            b: j
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            i = n("QosV"),
            o = n("iTtm"),
            l = n("oyxz"),
            r = n("TjgH"),
            s = n("ygO2"),
            c = n("X6Vn"),
            d = n("gPv1"),
            u = n("OWtl"),
            h = n("nsrx"),
            p = n("on57"),
            g = n("JNtf"),
            m = n("mUDD"),
            f = n("ZhKl"),
            v = n("qVxm"),
            b = n("a6Zv"),
            x = n("eLmE");

        function y(e) {
            let t, n, r, c, d, y, C, j = (0, i.c)(19),
                {
                    hostId: w,
                    onClose: k,
                    rateLimitStatus: _
                } = e,
                E = (0, o.y)(u.a),
                S = (0, b.a)(),
                M = (0, o.x)(x.b, w),
                T = _.rate_limit_upsell;
            if (!M || null == T) return null;
            let I = !S && "-mb-6";
            j[0] !== I ? (t = (0, p.b)("block w-full scale-105 object-cover", I), j[0] = I, j[1] = t) : t = j[1];
            let D = S ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return j[2] !== t || j[3] !== D ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: D
                })
            }), j[2] = t, j[3] = D, j[4] = n) : n = j[4], j[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(g.d, {
                className: "contents",
                children: (0, a.jsx)(l.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models",
                    description: "Heading in the Codex Luna Reserve modal on desktop and web, opened by clicking the thread-header badge after included usage is exhausted. Invites the user to regain access to higher-capability OpenAI models through the available upgrade or credit actions. Reassuring, concise heading; no placeholders."
                })
            }), j[5] = r) : r = j[5], j[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(m.e, {
                className: "items-center pb-2",
                children: (0, a.jsx)(m.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: r,
                    subtitle: (0, a.jsx)(g.c, {
                        className: "contents",
                        children: (0, a.jsx)(l.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models.",
                            description: "Body in the Codex Luna Reserve modal on desktop and web, opened from the Codex or Work thread-header badge after included usage is exhausted. Reassures the user that they are chatting with Luna and invites them to use the available actions below to access higher-capability models. Luna is a model name. No placeholders."
                        })
                    })
                })
            }), j[6] = c) : c = j[6], j[7] !== T.ctas || j[8] !== k || j[9] !== E ? (d = e => (0, a.jsx)("div", {
                className: "self-center",
                children: (0, a.jsx)(m.c, {
                    expandSingleButton: !1,
                    children: T.ctas.map((t, n) => {
                        if (!(0, f.b)(t.action)) return null;
                        let i = e.actions[t.action];
                        return (0, a.jsx)(s.a, {
                            color: 0 === n ? "primary" : "secondary",
                            disabled: i.disabled,
                            size: "large",
                            onClick: e => {
                                (0, h.a)(E, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), i.log(), k(), i.onClick(e)
                            },
                            children: i.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), j[7] = T.ctas, j[8] = k, j[9] = E, j[10] = d) : d = j[10], j[11] !== T || j[12] !== _ || j[13] !== d ? (y = (0, a.jsxs)(m.b, {
                children: [c, (0, a.jsx)(m.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: T,
                        rateLimitStatus: _,
                        renderContent: d
                    })
                })]
            }), j[11] = T, j[12] = _, j[13] = d, j[14] = y) : y = j[14], j[15] !== k || j[16] !== n || j[17] !== y ? (C = (0, a.jsxs)(g.a, {
                open: !0,
                size: "default",
                onOpenChange: k,
                children: [n, y]
            }), j[15] = k, j[16] = n, j[17] = y, j[18] = C) : C = j[18], C
        }

        function C(e) {
            let t, n, p, g, m = (0, i.c)(7),
                {
                    hostId: f
                } = e,
                v = (0, o.y)(u.a);
            return (0, o.x)(x.b, f) ? (m[0] !== f || m[1] !== v ? (t = () => {
                (0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = v.query.getData(d.b);
                if (null != e) {
                    (0, c.f)(v, y, {
                        hostId: f,
                        rateLimitStatus: e
                    }), (0, h.a)(v, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, m[0] = f, m[1] = v, m[2] = t) : t = m[2], m[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("span", {
                "aria-hidden": "true",
                className: "text-chart-yellow",
                children: "🌙"
            }), m[3] = n) : n = m[3], m[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsxs)(r.a, {
                variant: "reserve",
                children: [n, (0, a.jsx)("span", {
                    className: "brightness-75 dark:brightness-100",
                    children: (0, a.jsx)(l.a, {
                        id: "codex.lunaReserve.header.label",
                        defaultMessage: "Luna reserve",
                        description: "Short label on the Codex or Work thread-header badge on desktop and web while the user is using their separate Luna Reserve allowance. Clicking the badge opens the backend-provided Luna Reserve explanation and available account actions."
                    })
                })]
            }), m[4] = p) : p = m[4], m[5] !== t ? (g = (0, a.jsx)(s.a, {
                color: "ghostMuted",
                size: "inline",
                onClick: t,
                children: p
            }), m[5] = t, m[6] = g) : g = m[6], g) : null
        }
    }),
    vNLk: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            o = n("hwkA"),
            l = n("oyxz"),
            r = n("bf6R"),
            s = n("MRlq");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u, h, p, g, m, f = (0, i.c)(31),
                    {
                        restored: v,
                        restoring: b,
                        deleting: x,
                        onDelete: y,
                        onUnarchive: C,
                        onDone: j
                    } = e,
                    w = void 0 !== x && x;
                f[0] !== b ? (t = b ? (0, a.jsx)(l.a, {
                    id: "localConversation.archived.restoringDescription",
                    defaultMessage: "Restoring this chat and its workspace…",
                    description: "Progress message while an archived task is being restored"
                }) : null, f[0] = b, f[1] = t) : t = f[1], f[2] !== v || f[3] !== b ? (n = !b && v ? (0, a.jsx)(l.a, {
                    id: "localConversation.archived.restoredDescription",
                    defaultMessage: "This chat has been restored",
                    description: "Confirmation shown before leaving an archived task preview"
                }) : null, f[2] = v, f[3] = b, f[4] = n) : n = f[4], f[5] !== v || f[6] !== b ? (c = b || v ? null : (0, a.jsx)(l.a, {
                    id: "localConversation.archived.previewDescription",
                    defaultMessage: "This chat is archived. To continue, unarchive it first",
                    description: "Explanation displayed beneath a read-only archived task preview"
                }), f[5] = v, f[6] = b, f[7] = c) : c = f[7], f[8] !== t || f[9] !== n || f[10] !== c ? (d = (0, a.jsxs)("span", {
                    className: "text-sm text-secondary select-none",
                    children: [t, n, c]
                }), f[8] = t, f[9] = n, f[10] = c, f[11] = d) : d = f[11], f[12] !== w || f[13] !== y || f[14] !== v || f[15] !== b ? (u = v || null == y ? null : (0, a.jsx)(o.a, {
                    color: "danger",
                    variant: "solid",
                    disabled: b,
                    loading: w,
                    size: "lg",
                    onClick: y,
                    children: (0, a.jsx)(l.a, {
                        ...s.a.delete
                    })
                }), f[12] = w, f[13] = y, f[14] = v, f[15] = b, f[16] = u) : u = f[16];
                let k = v ? j : C;
                return f[17] !== v || f[18] !== b ? (h = v && !b ? (0, a.jsx)(l.a, {
                    id: "localConversation.archived.previewDone",
                    defaultMessage: "Done",
                    description: "Leaves Archive with the restored task selected"
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.f, {}), (0, a.jsx)(l.a, {
                        ...s.a.unarchive
                    })]
                }), f[17] = v, f[18] = b, f[19] = h) : h = f[19], f[20] !== w || f[21] !== b || f[22] !== k || f[23] !== h ? (p = (0, a.jsx)(o.a, {
                    color: "primary",
                    variant: "solid",
                    disabled: w,
                    loading: b,
                    size: "lg",
                    onClick: k,
                    children: h
                }), f[20] = w, f[21] = b, f[22] = k, f[23] = h, f[24] = p) : p = f[24], f[25] !== u || f[26] !== p ? (g = (0, a.jsxs)("div", {
                    className: "pointer-events-auto flex items-center gap-2",
                    children: [u, p]
                }), f[25] = u, f[26] = p, f[27] = g) : g = f[27], f[28] !== g || f[29] !== d ? (m = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [d, g]
                }), f[28] = g, f[29] = d, f[30] = m) : m = f[30], m
            }
        })
    }),
    fQbA: (function(e, t, n) {
        var a = n("ABep"),
            i = n("lIZs");
        n.d(t, {}, {
            a: function(e) {
                let t = e.findIndex(e => "move-to-project" === e.id),
                    n = e.findIndex(e => "separator" === e.type),
                    a = -1 === t ? n : t + 1;
                return e.toSpliced(-1 === a ? e.length : a, 0, {
                    id: "open-app"
                })
            },
            b: function(e, t) {
                return "open-app" === e.id ? (0, a.jsx)(i.a, {
                    onSelect: t
                }) : void 0
            }
        })
    }),
    pDUk: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            o = n("suct"),
            l = n("iodE"),
            r = n("IPUh"),
            s = n("iTtm"),
            c = n("zd8w"),
            d = n("I7bK"),
            u = n("Q2Qp"),
            h = n("wD9O"),
            p = n("nzx4"),
            g = n("eGPX"),
            m = n("KWzM");

        function f(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function v(e) {
            e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
        }

        function b(e) {
            let t, n, o, f, v, b, y, C, j, w, k = (0, i.c)(25);
            k[0] !== e ? ({
                animate: t,
                children: n,
                className: o,
                ...f
            } = e, k[0] = e, k[1] = t, k[2] = n, k[3] = o, k[4] = f) : (t = k[1], n = k[2], o = k[3], f = k[4]);
            let _ = (0, l.a)(),
                E = (0, s.z)(g.c),
                S = t && !E,
                M = (0, c.useContext)(u.a),
                T = (0, c.useContext)(d.c)?.chatPaneElement,
                I = (0, h.c)(),
                D = (0, c.useRef)(null),
                O = (0, c.useRef)(S);
            k[5] !== T || k[6] !== M || k[7] !== I ? (v = () => {
                let e = D.current,
                    t = x(M, T);
                if (null == e || null == t || !O.current) return;
                let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-a.top)/I}px ${(a.right-n.right)/I}px ${(a.bottom-n.bottom)/I}px ${(n.left-a.left)/I}px)`
            }, k[5] = T, k[6] = M, k[7] = I, k[8] = v) : v = k[8];
            let R = v,
                N = !_,
                P = !_;
            k[9] !== R ? (b = () => {
                O.current = !0, requestAnimationFrame(R)
            }, k[9] = R, k[10] = b) : b = k[10], k[11] === Symbol.for("react.memo_cache_sentinel") ? (y = () => {
                O.current = !1, D.current?.style.removeProperty("clip-path")
            }, k[11] = y) : y = k[11];
            let L = !!S && m.b.hidden;
            return k[12] !== S ? (C = S ? m.a : {
                duration: 0
            }, k[12] = S, k[13] = C) : C = k[13], k[14] !== n || k[15] !== b || k[16] !== L || k[17] !== C ? (j = (0, a.jsx)(r.a.div, {
                onAnimationStart: b,
                onAnimationComplete: y,
                initial: L,
                animate: m.b.visible,
                exit: m.b.hidden,
                transition: C,
                children: n
            }), k[14] = n, k[15] = b, k[16] = L, k[17] = C, k[18] = j) : j = k[18], k[19] !== o || k[20] !== f || k[21] !== N || k[22] !== P || k[23] !== j ? (w = (0, a.jsx)(p.c, {
                ...f,
                ref: D,
                className: o,
                forceMount: !0,
                "aria-hidden": N,
                inert: P,
                children: j
            }), k[19] = o, k[20] = f, k[21] = N, k[22] = P, k[23] = j, k[24] = w) : w = k[24], w
        }

        function x(e, t) {
            return void 0 !== t ? t ?? e : e?.querySelector("[data-app-shell-main-content-layout]") ?? e
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, r, s, g, m = (0, i.c)(24),
                    {
                        animate: y,
                        children: C,
                        isOpen: j,
                        onOpenChange: w,
                        returnFocusId: k,
                        shouldPreventAutoFocus: _,
                        trigger: E
                    } = e,
                    S = void 0 === y || y,
                    M = void 0 !== _ && _,
                    T = (0, c.useContext)(u.a),
                    I = (0, c.useContext)(d.c)?.chatPaneElement,
                    [D, O] = (0, c.useState)(null),
                    R = (0, c.useRef)(!1),
                    N = 8 * (0, h.c)(),
                    P = D ?? void 0;
                m[0] !== I || m[1] !== T || m[2] !== P || m[3] !== D ? (t = {
                    contextElement: P,
                    getBoundingClientRect() {
                        let e = D?.closest("[data-app-shell-main-titlebar]") ?? D?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            t = (e ?? D)?.getBoundingClientRect() ?? new DOMRect,
                            n = x(T, I);
                        if (null == n) return t;
                        let a = n.getBoundingClientRect();
                        return new DOMRect(a.left, t.top, a.width, t.height)
                    }
                }, m[0] = I, m[1] = T, m[2] = P, m[3] = D, m[4] = t) : t = m[4];
                let L = t;
                return m[5] !== L ? (n = (0, a.jsx)(p.b, {
                    virtualRef: {
                        current: L
                    }
                }), m[5] = L, m[6] = n) : n = m[6], m[7] !== E ? (l = (0, a.jsx)(p.e, {
                    ref: O,
                    asChild: !0,
                    children: E
                }), m[7] = E, m[8] = l) : l = m[8], m[9] !== S || m[10] !== C || m[11] !== j || m[12] !== N || m[13] !== k || m[14] !== M ? (r = j && (0, a.jsx)(b, {
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: S,
                    align: "end",
                    alignOffset: N,
                    collisionPadding: N,
                    side: "bottom",
                    sideOffset: N,
                    unstyled: !0,
                    onOpenAutoFocus: e => {
                        R.current = !1, M && e.preventDefault()
                    },
                    onCloseAutoFocus: e => {
                        if (M) e.preventDefault();
                        else if (!R.current && null != k) {
                            let t = document.getElementById(k);
                            t?.focus({
                                preventScroll: !0
                            }), null != t && document.activeElement === t && e.preventDefault()
                        }
                    },
                    onInteractOutside: e => {
                        e.defaultPrevented || (R.current = !0)
                    },
                    onFocusOutside: v,
                    onPointerDownOutside: f,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: C
                }), m[9] = S, m[10] = C, m[11] = j, m[12] = N, m[13] = k, m[14] = M, m[15] = r) : r = m[15], m[16] !== r ? (s = (0, a.jsx)(o.a, {
                    children: r
                }), m[16] = r, m[17] = s) : s = m[17], m[18] !== j || m[19] !== w || m[20] !== n || m[21] !== l || m[22] !== s ? (g = (0, a.jsxs)(p.a, {
                    open: j,
                    onOpenChange: w,
                    children: [n, l, s]
                }), m[18] = j, m[19] = w, m[20] = n, m[21] = l, m[22] = s, m[23] = g) : g = m[23], g
            }
        })
    }),
    enMl: (function(e, t, n) {
        var a = n("QosV"),
            i = n("iTtm"),
            o = n("zd8w"),
            l = n("tSEg"),
            r = n("giVD");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, c, d = (0, a.c)(9),
                    {
                        icon: u,
                        isVisible: h,
                        title: p
                    } = e,
                    g = void 0 === u ? null : u,
                    m = void 0 === h || h,
                    f = (0, i.y)(l.a);
                return d[0] !== g || d[1] !== m || d[2] !== f || d[3] !== p ? (t = () => {
                    f.set(r.a, g), f.set(r.c, p), f.set(r.e, m)
                }, n = [g, m, f, p], d[0] = g, d[1] = m, d[2] = f, d[3] = p, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, o.useLayoutEffect)(t, n), d[6] !== f ? (s = () => () => {
                    f.set(r.a, null), f.set(r.c, null), f.set(r.e, !0)
                }, c = [f], d[6] = f, d[7] = s, d[8] = c) : (s = d[7], c = d[8]), (0, o.useLayoutEffect)(s, c), null
            }
        })
    }),
    dDDU: (function(e, t, n) {
        var a = n("Qgfj"),
            i = n("Kyn2"),
            o = n("nnol"),
            l = n("QcW8"),
            r = n("ZU27"),
            s = n("gbrq"),
            c = n("bf6R"),
            d = n("GaA7"),
            u = n("dt6g"),
            h = n("Vhua"),
            p = n("WwnD"),
            g = n("NkWL"),
            m = n("pZMh");
        n.d(t, {}, {
            a: function(e) {
                let t = e.get(l.$);
                return e.get(l._) || t?.isVisible !== !0 || "split" !== t.mode && !e.get(g.c) ? [] : function(e, t) {
                    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.j,
                        f = e.get(r.j.activeTab$),
                        v = e.get(m.e),
                        b = null;
                    l === r.a ? b = "bottom" : "split" === v.mode && (e.get(m.c) ? (b = v.contentSide, "chat" !== t && t.tabId === e.get(m.h) && (b = "left" === v.contentSide ? "right" : "left")) : "chat" === t ? b = "left" === v.contentSide ? "right" : "left" : t.tabId === f?.tabId && (b = v.contentSide));
                    let x = e.get(h.i),
                        y = !x && ("chat" !== t || null != f),
                        C = [{
                            enabled: y && "left" !== b && (0, p.a)(t, "left"),
                            id: "unified-workspace-move-left",
                            icon: c.w,
                            message: (0, a.e)({
                                id: "threadWorkspace.contextMenu.moveToLeftPane",
                                defaultMessage: "Move to left pane",
                                description: "Context menu action that presents the selected task tab in the left workspace pane"
                            }),
                            onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "left", l))
                        }, {
                            enabled: y && "right" !== b && (0, p.a)(t, "right"),
                            id: "unified-workspace-move-right",
                            icon: c.y,
                            message: (0, a.e)({
                                id: "threadWorkspace.contextMenu.moveToRightPane",
                                defaultMessage: "Move to right pane",
                                description: "Context menu action that presents the selected task tab in the right workspace pane"
                            }),
                            onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "right", l))
                        }].filter(e => !1 !== e.enabled);
                    return !x && l !== r.a && e.get(s.b) && (0, p.a)(t, "bottom") && C.push({
                        id: "unified-workspace-move-bottom",
                        icon: c.p,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToBottomPane",
                            defaultMessage: "Move to bottom pane",
                            description: "Context menu action that moves an existing Terminal task tab into the bottom utility pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "bottom", l))
                    }), "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == d.appServices.detachedWindows || C.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !x && !(0, o.c)(e, t.tabId) && t.tabType.windowTransfer.canTransfer(e, t.props),
                        icon: c.Dg,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window",
                            description: "Context menu action that moves the selected content tab into a separate desktop window"
                        }),
                        onSelect: () => {
                            (0, i.a)(e, Promise.resolve().then(n.bind(n, "K3jS")).then(n => {
                                let {
                                    moveTabToNewWindow: a
                                } = n;
                                return a(e, l, t, null)
                            }))
                        }
                    }), "chat" === t && e.get(g.c) && C.push({
                        id: "close-tab",
                        icon: c.jj,
                        message: (0, a.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close",
                            description: "Context menu action for closing a tab"
                        }),
                        onSelect: () => (0, g.a)(e)
                    }), C
                }(e, "chat")
            }
        })
    })
};