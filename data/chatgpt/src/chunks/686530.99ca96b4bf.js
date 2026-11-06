export const __rspack_esm_ids = [686530];
export const __webpack_modules__ = {
    fBor: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => C
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("BolX"),
            o = n("aFoA"),
            r = n("Bbed"),
            s = n("tSEg"),
            c = n("zd8w"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("gbrq"),
            p = n("rxj0"),
            g = n("uk1V"),
            m = n("PIpC"),
            f = n("UejO");

        function v() {
            let e, t, a, r, v = (0, i.c)(6),
                x = (0, l.y)(s.a);
            return v[0] !== x ? (e = () => {
                let e = null;
                return x.watch(t => {
                    let a = t.get(m.c),
                        i = t.get(d.g),
                        l = t.get(f.b),
                        r = t.get(o.a, l?.hostId == null ? l?.conversationId ?? null : null),
                        s = t.get(h.i),
                        c = t.get(u.l.tabs$),
                        v = "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId);
                    if (null == a || !i || v || e === a || (e = a, (0, f.a)(l, t.value, r, t.value.clientThreadId) || s || c.length > 0)) return;
                    let x = (0, m.a)(a);
                    if (!x?.isOpen) return;
                    let C = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return C ? null : t.query.fetch(n, x.projectId)
                    }).then(e => {
                        let n = (0, m.a)(a);
                        C || null == e || !n?.isOpen || n.projectId !== x.projectId || "active" !== e.status || null == e.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId) || (0, g.a)(t, {
                            type: "appgen-app",
                            projectId: e.id,
                            title: e.title,
                            url: e.current_live_url
                        })
                    }, b), () => {
                        C = !0
                    }
                })
            }, t = [x], v[0] = x, v[1] = e, v[2] = t) : (e = v[1], t = v[2]), (0, c.useEffect)(e, t), v[3] !== x ? (a = () => {
                let e = x.get(h.j),
                    t = null;
                return x.watch(n => {
                    let a = n.get(h.j),
                        i = n.get(u.l.activeTab$),
                        l = n.get(m.c);
                    (a !== e || null == t && null != l) && null != l && i?.tabId.startsWith("site-preview:") && (0, m.b)(l, i.tabId.slice(13), a), e = a, t = l
                })
            }, r = [x], v[3] = x, v[4] = a, v[5] = r) : (a = v[4], r = v[5]), (0, c.useEffect)(a, r), null
        }

        function b() {}
        let x = (0, r.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function C() {
            let e, t, n, r, c = (0, i.c)(12),
                d = (0, l.y)(s.a),
                u = (0, l.z)(f.b),
                h = (0, l.x)(o.a, u?.hostId == null ? u?.conversationId ?? null : null);
            if ("home" !== d.value.routeKind && "chatgpt-thread" !== d.value.routeKind && "local-thread" !== d.value.routeKind) return null;
            c[0] !== u || c[1] !== h || c[2] !== d ? (e = u?.url != null && (0, f.a)(u, d.value, h, d.value.clientThreadId), c[0] = u, c[1] = h, c[2] = d, c[3] = e) : e = c[3];
            let p = e;
            return c[4] !== d ? (t = "home" !== d.value.routeKind ? (0, a.jsx)(v, {}) : null, c[4] = d, c[5] = t) : t = c[5], c[6] !== p || c[7] !== u ? (n = p ? (0, a.jsx)(x, {
                pending: u
            }) : null, c[6] = p, c[7] = u, c[8] = n) : n = c[8], c[9] !== t || c[10] !== n ? (r = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), c[9] = t, c[10] = n, c[11] = r) : r = c[11], r
        }
    }),
    fs8u: (function(e, t, n) {
        var a = n("BolX"),
            i = n("QcW8"),
            l = n("ZU27"),
            o = n("gbrq"),
            r = n("tSEg"),
            s = n("OMIV"),
            c = n("SHid"),
            d = n("dt6g"),
            u = n("WwnD");
        let h = (0, a.c)(r.a, e => {
            let {
                get: t
            } = e;
            return null != t(i.ab) && null != t(l.l.activeTab$) && !t(i.E)
        });
        n.d(t, {}, {
            a: function(e, t, n) {
                let a = (0, d.a)(e, "menu" === n ? "context_menu" : "tab_drag", () => (0, u.b)(e, "chat", t));
                return a && e.get(s.d, "2163293173") && e.set(c.a, e.get(i.jb)), a && "pin" === n && (0, o.I)(e, !0, {
                    animate: !1
                }), a
            },
            b: function(e, t, n) {
                if (null == n || !(n instanceof MouseEvent) || "pointercancel" === n.type || null == t || null == e.get(i.ab) || null == e.get(l.l.activeTab$) || n.clientY < 0 || n.clientY > window.innerHeight) return null;
                let a = t.getBoundingClientRect();
                return n.clientX <= a.left + 24 ? "left" : n.clientX >= a.right - 24 ? "right" : null
            },
            c: h
        })
    }),
    rjva: (function(e, t, n) {
        n.d(t, {
            a: () => U
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("l2oX"),
            o = n("BolX"),
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
            C = n("giDA"),
            j = n("fQ9c"),
            w = n("Fr8T"),
            y = n("xD3Z"),
            k = n("Z2JT"),
            E = n("yC2B"),
            S = n("Sgih"),
            _ = n("tSEg"),
            M = n("hZax"),
            I = n("El6m"),
            T = n("dN0a");
        n("G7Oa");
        var D = n("q1q2"),
            N = n("VwGH"),
            O = n("on57"),
            R = n("W5pg"),
            z = n("IPUh"),
            L = n("qjLK"),
            A = n("I7bK");
        n("QcW8"), n("eFp2");
        var B = n("oH56");
        n("EpL9");
        var P = n("DUYS"),
            q = n("gbrq");
        n("dt6g");
        var W = n("bIvi");
        n("Vhua"), n("WwnD");
        var F = n("pZMh");

        function $(e) {
            let t, n, l, c, d, h, p, g, m, f, v, b = (0, i.c)(33),
                {
                    destination: x,
                    direction: C,
                    surface: j
                } = e,
                {
                    bottomPanelTargetHeight: w,
                    contentPaneWidthRatio: y,
                    mainContentWidth: k
                } = (0, A.g)(),
                E = (0, r.useContext)(B.a),
                S = (0, o.z)(F.g),
                _ = (0, o.z)(F.l),
                M = j ?? "content",
                I = S ? "content" === M && E?.dragState?.draggedTab.tabId === _ : "chat" === M,
                T = (0, r.useContext)(L.a),
                $ = (0, o.z)(q.d),
                H = (0, o.z)(u.a.tabIds$),
                K = E?.dragState?.sourceController === u.a && 1 === H.length;
            b[0] !== y || b[1] !== k ? (t = [k, y], b[0] = y, b[1] = k, b[2] = t) : t = b[2], b[3] !== I ? (n = e => {
                let [t, n] = e, a = Math.min(t, (0, P.f)(n, t, "unified"));
                return I ? t - a : a
            }, b[3] = I, b[4] = n) : n = b[4];
            let X = (0, R.a)(t, n);
            b[5] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, D.f)(Q), (0, D.h)({
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
                whileElementsMounted: N.b
            }, b[5] = l) : l = b[5];
            let {
                floatingStyles: U,
                refs: Z
            } = (0, D.i)(l);
            b[6] !== Z ? (c = e => {
                Z.setReference(e)
            }, b[6] = Z, b[7] = c) : c = b[7];
            let Y = (0, W.a)(c);
            b[8] !== Z ? (d = e => {
                Z.setFloating(e)
            }, b[8] = Z, b[9] = d) : d = b[9];
            let G = (0, W.a)(d),
                J = "bottom" === x && "inset-x-0 bottom-0",
                ee = "left" === x && "inset-y-0 left-0",
                et = "right" === x && "inset-y-0 right-0";
            b[10] !== J || b[11] !== ee || b[12] !== et ? (h = (0, O.b)("pointer-events-none absolute", J, ee, et), b[10] = J, b[11] = ee, b[12] = et, b[13] = h) : h = b[13];
            let en = "bottom" === x ? void 0 : $ && !K ? T ?? void 0 : void 0,
                ea = "bottom" === x ? w : void 0,
                ei = "bottom" === x ? void 0 : X;
            return b[14] !== en || b[15] !== ea || b[16] !== ei ? (p = {
                bottom: en,
                height: ea,
                width: ei
            }, b[14] = en, b[15] = ea, b[16] = ei, b[17] = p) : p = b[17], b[18] !== Y || b[19] !== p || b[20] !== h ? (g = (0, a.jsx)(z.a.div, {
                ref: Y,
                "aria-hidden": !0,
                className: h,
                dir: "ltr",
                style: p
            }), b[18] = Y, b[19] = p, b[20] = h, b[21] = g) : g = b[21], b[22] !== x ? (m = (0, a.jsx)(V, {
                destination: x
            }), b[22] = x, b[23] = m) : m = b[23], b[24] !== x || b[25] !== C || b[26] !== U || b[27] !== G || b[28] !== m ? (f = (0, s.createPortal)((0, a.jsx)("div", {
                ref: G,
                "aria-hidden": !0,
                className: "pointer-events-none z-50",
                "data-unified-workspace-drop-indicator": x,
                dir: C,
                style: U,
                children: m
            }), document.body), b[24] = x, b[25] = C, b[26] = U, b[27] = G, b[28] = m, b[29] = f) : f = b[29], b[30] !== g || b[31] !== f ? (v = (0, a.jsxs)(a.Fragment, {
                children: [g, f]
            }), b[30] = g, b[31] = f, b[32] = v) : v = b[32], v
        }

        function Q(e) {
            let {
                rects: t
            } = e;
            return -t.reference.height
        }

        function V(e) {
            let t, n, l, o = (0, i.c)(11),
                {
                    destination: r
                } = e,
                s = (0, h.c)(),
                c = "bottom" === r && "border-t",
                d = "left" === r && "border-r",
                u = "right" === r && "border-l";
            o[0] !== c || o[1] !== d || o[2] !== u ? (t = (0, O.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", c, d, u), o[0] = c, o[1] = d, o[2] = u, o[3] = t) : t = o[3];
            let p = `calc(100% / ${s})`,
                g = `scale(${s})`,
                m = `calc(100% / ${s})`;
            return o[4] !== p || o[5] !== g || o[6] !== m ? (n = {
                height: p,
                transform: g,
                transformOrigin: "top left",
                width: m
            }, o[4] = p, o[5] = g, o[6] = m, o[7] = n) : n = o[7], o[8] !== t || o[9] !== n ? (l = (0, a.jsx)("div", {
                className: t,
                style: n
            }), o[8] = t, o[9] = n, o[10] = l) : l = o[10], l
        }
        var H = n("fs8u"),
            K = n("abd8"),
            X = n("GMTh");

        function U(e) {
            let t, n, D, N, O, R, z = (0, i.c)(63),
                {
                    children: L,
                    composerOnly: A,
                    forceExpanded: B,
                    placement: P,
                    showHeader: q,
                    showComposerDivider: W,
                    isHidden: F,
                    persistPresentation: Q,
                    reserveContent: V,
                    reserveFullComposerHeight: U,
                    onPresentationChange: Y,
                    title: G,
                    minimizedIcon: J,
                    titleContent: ee,
                    statusState: et,
                    titleStatusState: en,
                    hasElicitation: ea,
                    notifications: ei,
                    workingPreview: el,
                    responsePreview: eo,
                    previewBubble: er,
                    renderTranscript: es,
                    hasTranscript: ec,
                    pendingFormId: ed,
                    emptyState: eu
                } = e,
                eh = void 0 !== A && A,
                ep = void 0 !== B && B,
                eg = void 0 === q ? !eh : q,
                em = void 0 === W ? !eh : W,
                ef = void 0 === Q || Q,
                ev = void 0 === ed ? S.a : ed,
                eb = (0, o.y)(_.a),
                ex = "pane" === (void 0 === P ? "floating" : P),
                eC = (0, M.h)("2163293173"),
                ej = eC ? eu : void 0,
                ew = !eh || eC && (null != ej || (ec ?? null != es)),
                ey = (0, c.a)(),
                {
                    isHidden: ek
                } = (0, X.a)(ex ? "embedded" : "content"),
                eE = void 0 !== F && F || ek,
                eS = (0, r.useContext)(d.a),
                e_ = (0, r.useContext)(I.b),
                eM = (0, r.useContext)(I.a),
                eI = (0, r.useContext)(f.a),
                eT = (0, r.useContext)(v.a),
                eD = (0, r.useContext)(m.a),
                eN = (0, r.useContext)(C.a),
                eO = (0, h.c)(),
                [eR, ez] = (0, r.useState)(null),
                eL = !(0, o.z)(T.p),
                eA = (0, o.z)(ev),
                eB = (0, o.z)(ef ? k.a : void 0);
            ew || eg || (eB = "compact");
            let eP = (0, o.z)(null == eA && (ea ?? I.c)),
                eq = (0, o.z)(u.l.activeTab$);
            z[0] !== eq || z[1] !== ex ? (t = ex ? null : (0, p.getThreadBrowserTabIdFromPanelTab)(eq), z[0] = eq, z[1] = ex, z[2] = t) : t = z[2];
            let eW = t,
                eF = void 0 !== U && U || eq?.tabType.kind === "latex-document" || eq?.tabType.kind === "image-preview",
                [e$, eQ] = (0, r.useState)(null);
            z[3] !== eS || z[4] !== eb ? (n = e => (0, H.b)(eb, eS, e), z[3] = eS, z[4] = eb, z[5] = n) : n = z[5];
            let eV = n;
            z[6] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)("div", {
                ref: e => {
                    null != e && ez(e)
                },
                className: "contents"
            }), z[6] = D) : D = z[6];
            let eH = ex || eE;
            return z[7] !== eq || z[8] !== eC || z[9] !== ey || z[10] !== ex || z[11] !== eS || z[12] !== e$ ? (N = eC || ex || null == eS || null == e$ || null == eq ? null : (0, s.createPortal)((0, a.jsx)($, {
                destination: e$,
                direction: (0, E.a)(ey.locale),
                surface: "chat"
            }), eS), z[7] = eq, z[8] = eC, z[9] = ey, z[10] = ex, z[11] = eS, z[12] = e$, z[13] = N) : N = z[13], z[14] !== eW || z[15] !== eq || z[16] !== ew || z[17] !== L || z[18] !== eh || z[19] !== eC || z[20] !== ej || z[21] !== ep || z[22] !== eV || z[23] !== eP || z[24] !== ec || z[25] !== eD || z[26] !== eT || z[27] !== eN || z[28] !== eM || z[29] !== e_ || z[30] !== ey || z[31] !== eE || z[32] !== eL || z[33] !== ex || z[34] !== eS || z[35] !== J || z[36] !== ei || z[37] !== Y || z[38] !== eR || z[39] !== eA || z[40] !== ef || z[41] !== er || z[42] !== es || z[43] !== V || z[44] !== eo || z[45] !== eb || z[46] !== eF || z[47] !== em || z[48] !== eg || z[49] !== e$ || z[50] !== et || z[51] !== eB || z[52] !== eI || z[53] !== G || z[54] !== ee || z[55] !== en || z[56] !== eO || z[57] !== el ? (O = e => (0, a.jsx)(l.a, {
                transformPagePoint: e => ({
                    x: e.x / eO,
                    y: e.y / eO
                }),
                children: (0, a.jsx)(I.b, {
                    value: ex ? e_ : {
                        activeBrowserTabId: eW,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            eb.get(u.l.activeTab$)?.tabId === eq?.tabId && (eb.get(T.k) || (0, T.i)(eb, {
                                prefersReducedMotion: !0
                            }), (0, b.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, a.jsx)(I.a, {
                        value: ex ? eM : "expanded",
                        children: (0, a.jsx)(w.a, {
                            onResize: e => (0, g.n)(eb, {
                                dockPosition: e
                            }),
                            previewSide: eC ? e$ : null,
                            dockThreadKey: K.c,
                            canDock: ew || eg,
                            titleContent: ee,
                            minimizedIcon: J,
                            statusState: et,
                            titleStatusState: en,
                            hasTranscript: ec,
                            emptyState: ej,
                            pendingFormId: eA,
                            notifications: ei,
                            workingPreview: el,
                            responsePreview: eo,
                            previewBubble: er,
                            containerSize: e,
                            renderMenu: e => (0, a.jsx)(y.a, {
                                ...e,
                                showOptions: !eC || ew
                            }),
                            forceExpanded: ep || eP && (eC || !eh),
                            isHidden: ex || eE,
                            isMinimized: eL,
                            onDragOver: ew ? e => {
                                let t = eV(e);
                                return eQ(t), null != t
                            } : void 0,
                            onDragEnd: ew ? (e, t) => {
                                eQ(null);
                                let n = eV(e);
                                return null != n && (0, H.a)(eb, n, t)
                            } : void 0,
                            presentation: eB,
                            showHeader: eg,
                            showComposerDivider: em,
                            background: eh && !eg ? void 0 : "panel",
                            onPresentationChange: e => {
                                ef && eb.set(k.a, e), Y?.(e)
                            },
                            onMinimizedChange: e => {
                                (e ? T.t : T.i)(eb, {
                                    prefersReducedMotion: !0
                                })
                            },
                            title: G ?? ey.formatMessage({
                                id: "quickChat.mainConversation",
                                defaultMessage: "Chat",
                                description: "Fallback title for the task's main conversation in the floating chat"
                            }),
                            renderTranscript: null == es ? void 0 : (e, t) => es({
                                isVisible: t && !ex && !eE
                            }),
                            renderComposer: (e, t) => (0, a.jsx)(f.a, {
                                value: ex || null == eW ? eI : eS,
                                children: (0, a.jsx)(x.a, {
                                    target: ex ? eR : null,
                                    children: (0, a.jsx)(Z, {
                                        mainContentElement: eS,
                                        presentation: e,
                                        paneContext: ex ? {
                                            transition: e_,
                                            escapeHandler: eT,
                                            bannerTarget: eD,
                                            overlayOwner: eN
                                        } : void 0,
                                        layout: t,
                                        reserveFullComposerHeight: eF,
                                        reserveContent: V ?? (null == eW && eq?.tabType.kind !== "mcp-app" && eq?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof L ? L(ex ? void 0 : e) : L
                                    })
                                })
                            })
                        })
                    })
                })
            }), z[14] = eW, z[15] = eq, z[16] = ew, z[17] = L, z[18] = eh, z[19] = eC, z[20] = ej, z[21] = ep, z[22] = eV, z[23] = eP, z[24] = ec, z[25] = eD, z[26] = eT, z[27] = eN, z[28] = eM, z[29] = e_, z[30] = ey, z[31] = eE, z[32] = eL, z[33] = ex, z[34] = eS, z[35] = J, z[36] = ei, z[37] = Y, z[38] = eR, z[39] = eA, z[40] = ef, z[41] = er, z[42] = es, z[43] = V, z[44] = eo, z[45] = eb, z[46] = eF, z[47] = em, z[48] = eg, z[49] = e$, z[50] = et, z[51] = eB, z[52] = eI, z[53] = G, z[54] = ee, z[55] = en, z[56] = eO, z[57] = el, z[58] = O) : O = z[58], z[59] !== eH || z[60] !== N || z[61] !== O ? (R = (0, a.jsxs)(a.Fragment, {
                children: [D, (0, a.jsx)(j.a, {
                    isHidden: eH,
                    overlay: N,
                    children: O
                })]
            }), z[59] = eH, z[60] = N, z[61] = O, z[62] = R) : R = z[62], R
        }

        function Z(e) {
            let t, n, l, s, c, d, u, h, p, g, f, b, x, j, w, y = (0, i.c)(44),
                {
                    children: k,
                    mainContentElement: E,
                    presentation: S,
                    paneContext: M,
                    layout: D,
                    reserveContent: N,
                    reserveFullComposerHeight: O
                } = e,
                R = (0, o.y)(_.a),
                z = (0, r.useRef)(null),
                L = (0, r.useContext)(I.b),
                A = (0, r.useContext)(v.a),
                B = (0, r.useContext)(m.a),
                P = (0, r.useContext)(C.a),
                {
                    activeBrowserTabId: q
                } = L,
                W = null != M,
                {
                    isCompact: F,
                    isDockedTop: $,
                    isHidden: Q,
                    isMinimized: V
                } = S,
                {
                    isMoving: H,
                    composerContentHeight: K,
                    dockedReservePx: X
                } = D,
                U = !N || Q || V ? 0 : Math.max(118, F ? X : 0, O ? K + 118 - 102 : 0),
                Z = $ && F && X > 0 ? U : 0,
                [Y, G] = (0, r.useState)(!V);
            (F || V) && !V !== Y && G(!V);
            let J = N && !Q && Y ? T.b : 0;
            y[0] !== q || y[1] !== W ? (t = () => {
                if (W || null == q) return;
                let e = z.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && z.current?.contains(e) && e.blur()
            }, n = [q, W], y[0] = q, y[1] = W, y[2] = t, y[3] = n) : (t = y[2], n = y[3]), (0, r.useLayoutEffect)(t, n), y[4] !== J || y[5] !== $ || y[6] !== Q || y[7] !== V || y[8] !== W || y[9] !== E || y[10] !== U || y[11] !== R || y[12] !== Z ? (l = () => {
                W || null == E || (R.set(T.m, {
                    owner: z,
                    style: {
                        [T.a]: $ ? `${J}px 0 0` : `0 0 ${J}px`,
                        [T.c]: `${Q||V||$?0:102}px`,
                        [T.d]: `${$?0:U}px`,
                        [T.g]: `${$?U:0}px`
                    }
                }), (0, T.q)(R, $ ? 0 : U), R.set(T.n, Z))
            }, s = [J, W, $, Q, V, E, U, R, Z], y[4] = J, y[5] = $, y[6] = Q, y[7] = V, y[8] = W, y[9] = E, y[10] = U, y[11] = R, y[12] = Z, y[13] = l, y[14] = s) : (l = y[13], s = y[14]), (0, r.useLayoutEffect)(l, s), y[15] !== W || y[16] !== E || y[17] !== R ? (c = () => {
                if (!W && null != E) return () => {
                    let e = R.get(T.m);
                    e?.owner === z && (R.set(T.m, {
                        ...e,
                        owner: null
                    }), (0, T.q)(R, 0), R.set(T.n, 0))
                }
            }, d = [W, E, R], y[15] = W, y[16] = E, y[17] = R, y[18] = c, y[19] = d) : (c = y[18], d = y[19]), (0, r.useLayoutEffect)(c, d);
            let ee = !F || V || H || K > 102;
            y[20] !== ee || y[21] !== W || y[22] !== R ? (u = () => {
                let e = z.current;
                if (W || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    R.set(T.j, ee || t)
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
            }, h = [ee, W, R], y[20] = ee, y[21] = W, y[22] = R, y[23] = u, y[24] = h) : (u = y[23], h = y[24]), (0, r.useLayoutEffect)(u, h), y[25] !== W || y[26] !== R ? (g = () => () => {
                W || R.set(T.j, !1)
            }, p = [W, R], y[25] = W, y[26] = R, y[27] = p, y[28] = g) : (p = y[27], g = y[28]), (0, r.useLayoutEffect)(g, p);
            let et = null == M ? L : M.transition,
                en = null == M ? A : M.escapeHandler,
                ea = null == M ? B : M.bannerTarget,
                ei = null == M ? P : M.overlayOwner,
                el = W ? "contents" : void 0;
            return y[29] !== k || y[30] !== el ? (f = (0, a.jsx)("div", {
                ref: z,
                className: el,
                "data-right-panel-composer-overlay-content": "true",
                children: k
            }), y[29] = k, y[30] = el, y[31] = f) : f = y[31], y[32] !== ei || y[33] !== f ? (b = (0, a.jsx)(C.a, {
                value: ei,
                children: f
            }), y[32] = ei, y[33] = f, y[34] = b) : b = y[34], y[35] !== ea || y[36] !== b ? (x = (0, a.jsx)(m.a, {
                value: ea,
                children: b
            }), y[35] = ea, y[36] = b, y[37] = x) : x = y[37], y[38] !== en || y[39] !== x ? (j = (0, a.jsx)(v.a, {
                value: en,
                children: x
            }), y[38] = en, y[39] = x, y[40] = j) : j = y[40], y[41] !== et || y[42] !== j ? (w = (0, a.jsx)(I.b, {
                value: et,
                children: j
            }), y[41] = et, y[42] = j, y[43] = w) : w = y[43], w
        }
    }),
    ilLT: (function(e, t, n) {
        var a = n("Qgfj"),
            i = n("bf6R"),
            l = n("fs8u");
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
                        (0, l.a)(e, "left", "menu")
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
                        (0, l.a)(e, "right", "menu")
                    }
                }]
            }
        })
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            i = n.n(a),
            l = n("BolX"),
            o = n("tSEg"),
            r = n("wrxv");
        n.d(t, {}, {
            a: function(e) {
                let t = (0, l.j)(o.a, (t, n) => {
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
                return (0, l.d)(o.a, (n, a) => {
                    if (null == n) return r.a;
                    let i = [],
                        l = !1;
                    for (let o of e.conversationIds(a.scope, n)) {
                        let n = e.status(a.scope, o);
                        if (n.pending) {
                            l = !0;
                            continue
                        }
                        if (!n.unread || !n.completed) continue;
                        let r = e.preview(a.scope, o);
                        null != r && i.push({
                            id: n.completionId ?? o,
                            title: e.title(a.scope, o),
                            preview: r,
                            ...a.get(t, o)
                        })
                    }
                    return i.length > 0 ? {
                        type: "ready",
                        value: i
                    } : l ? r.b : r.a
                }, {
                    isEqual: i()
                })
            }
        })
    }),
    zjpG: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("on57"),
            o = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, s = (0, i.c)(5),
                    {
                        className: c
                    } = e;
                return s[0] !== c ? (t = (0, l.b)("last:hidden", c), s[0] = c, s[1] = t) : t = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(o.a, {
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
            l = n("slpy"),
            o = n("BolX"),
            r = n("Qgfj"),
            s = n("Wf1j"),
            c = n("oyxz"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("ilLT"),
            p = n("Sm6l"),
            g = n("rmk3"),
            m = n("bf6R"),
            f = n("f38C"),
            v = n("tSEg"),
            b = n("hZax"),
            x = n("dt6g"),
            C = n("WwnD");
        let j = (0, o.c)(v.a, e => {
            let {
                get: t
            } = e;
            return null == t(d.ab) ? "hidden" : null != t(u.l.activeTab$) ? "split" : "tab"
        });

        function w(e) {
            let t, n, o, d, u, h = (0, i.c)(22),
                {
                    contextMenuTrigger: v,
                    isCompact: x,
                    isDragging: C,
                    items: j,
                    open: w,
                    onMinimize: k,
                    onOpenChange: E,
                    showOptions: S
                } = e,
                _ = void 0 === S || S,
                M = (0, b.h)("2163293173"),
                I = (0, s.a)();
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer",
                description: "Minimizes the floating composer to its compact minimized button"
            }), h[0] = t) : t = h[0], h[1] !== k ? (n = {
                id: "minimize",
                icon: m.Ve,
                message: t,
                onSelect: k,
                selectAfterClose: !0
            }, h[1] = k, h[2] = n) : n = h[2], h[3] !== j || h[4] !== n ? (o = [...j, n], h[3] = j, h[4] = n, h[5] = o) : o = h[5];
            let T = o;
            if (null != v) {
                let e, t;
                return _ ? (h[6] !== v ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: v
                }), h[6] = v, h[7] = e) : e = h[7], h[8] !== T || h[9] !== e ? (t = (0, a.jsx)(g.a, {
                    disableNative: !0,
                    items: T,
                    children: e
                }), h[8] = T, h[9] = e, h[10] = t) : t = h[10], t) : v
            }
            return h[11] !== M || h[12] !== I || h[13] !== x || h[14] !== C || h[15] !== T || h[16] !== E || h[17] !== w || h[18] !== _ ? (d = _ && (0, a.jsx)(g.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: w,
                onOpenChange: E,
                items: T,
                children: M ? (0, a.jsx)(f.a, {
                    size: "toolbar",
                    label: I.formatMessage({
                        id: "quickChat.moreOptions",
                        defaultMessage: "Chat options",
                        description: "Accessible label for the floating chat overflow menu"
                    })
                }) : (0, a.jsx)(l.a, {
                    disabled: w || C,
                    content: (0, a.jsx)(c.a, {
                        id: "quickChat.dock.dragHint",
                        defaultMessage: "Drag to move · Click for options",
                        description: "Tooltip for the floating Chat grip that can be dragged to move the Chat or clicked to open docking options"
                    }),
                    children: (0, a.jsx)(p.a, {
                        className: "cursor-grab touch-none active:cursor-grabbing",
                        "aria-label": I.formatMessage({
                            id: "quickChat.dock.menu",
                            defaultMessage: "Dock Chat",
                            description: "Opens a menu to place Chat in a tab or a left or right split pane"
                        }),
                        color: "ghostSecondary",
                        "data-quick-chat-drag-handle": !0,
                        size: x ? "composer" : "toolbar",
                        uniform: !0,
                        onPointerDown: y,
                        onClick: e => {
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || E?.(!w)
                        },
                        children: (0, a.jsx)(m.Xc, {})
                    })
                })
            }), h[11] = M, h[12] = I, h[13] = x, h[14] = C, h[15] = T, h[16] = E, h[17] = w, h[18] = _, h[19] = d) : d = h[19], h[20] !== d ? (u = (0, a.jsx)(a.Fragment, {
                children: d
            }), h[20] = d, h[21] = u) : u = h[21], u
        }

        function y(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, l = (0, i.c)(6),
                    s = (0, o.y)(v.a),
                    c = (0, o.z)(j);
                l[0] !== c || l[1] !== s ? (t = "hidden" === c ? [] : [{
                    id: "full-view",
                    icon: m.N,
                    message: (0, r.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view",
                        description: "Opens the existing Chat in a tab that fills the workspace"
                    }),
                    onSelect: () => {
                        (0, x.a)(s, "context_menu", () => (0, C.c)(s, "chat", {
                            mode: "full"
                        }))
                    }
                }, ...(0, h.a)(s, "split" === c)], l[0] = c, l[1] = s, l[2] = t) : t = l[2];
                let d = t;
                return l[3] !== d || l[4] !== e ? (n = (0, a.jsx)(w, {
                    ...e,
                    items: d
                }), l[3] = d, l[4] = e, l[5] = n) : n = l[5], n
            },
            b: w
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => j
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("BolX"),
            o = n("oyxz"),
            r = n("TjgH"),
            s = n("Sm6l"),
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

        function C(e) {
            let t, n, r, c, d, C, j, w = (0, i.c)(19),
                {
                    hostId: y,
                    onClose: k,
                    rateLimitStatus: E
                } = e,
                S = (0, l.y)(u.a),
                _ = (0, b.a)(),
                M = (0, l.x)(x.b, y),
                I = E.rate_limit_upsell;
            if (!M || null == I) return null;
            let T = !_ && "-mb-6";
            w[0] !== T ? (t = (0, p.b)("block w-full scale-105 object-cover", T), w[0] = T, w[1] = t) : t = w[1];
            let D = _ ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return w[2] !== t || w[3] !== D ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: D
                })
            }), w[2] = t, w[3] = D, w[4] = n) : n = w[4], w[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(g.d, {
                className: "contents",
                children: (0, a.jsx)(o.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models",
                    description: "Heading in the Codex Luna Reserve modal on desktop and web, opened by clicking the thread-header badge after included usage is exhausted. Invites the user to regain access to higher-capability OpenAI models through the available upgrade or credit actions. Reassuring, concise heading; no placeholders."
                })
            }), w[5] = r) : r = w[5], w[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(m.e, {
                className: "items-center pb-2",
                children: (0, a.jsx)(m.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: r,
                    subtitle: (0, a.jsx)(g.c, {
                        className: "contents",
                        children: (0, a.jsx)(o.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models.",
                            description: "Body in the Codex Luna Reserve modal on desktop and web, opened from the Codex or Work thread-header badge after included usage is exhausted. Reassures the user that they are chatting with Luna and invites them to use the available actions below to access higher-capability models. Luna is a model name. No placeholders."
                        })
                    })
                })
            }), w[6] = c) : c = w[6], w[7] !== I.ctas || w[8] !== k || w[9] !== S ? (d = e => (0, a.jsx)("div", {
                className: "self-center",
                children: (0, a.jsx)(m.c, {
                    expandSingleButton: !1,
                    children: I.ctas.map((t, n) => {
                        if (!(0, f.b)(t.action)) return null;
                        let i = e.actions[t.action];
                        return (0, a.jsx)(s.a, {
                            color: 0 === n ? "primary" : "secondary",
                            disabled: i.disabled,
                            size: "large",
                            onClick: e => {
                                (0, h.a)(S, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), i.log(), k(), i.onClick(e)
                            },
                            children: i.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), w[7] = I.ctas, w[8] = k, w[9] = S, w[10] = d) : d = w[10], w[11] !== I || w[12] !== E || w[13] !== d ? (C = (0, a.jsxs)(m.b, {
                children: [c, (0, a.jsx)(m.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: I,
                        rateLimitStatus: E,
                        renderContent: d
                    })
                })]
            }), w[11] = I, w[12] = E, w[13] = d, w[14] = C) : C = w[14], w[15] !== k || w[16] !== n || w[17] !== C ? (j = (0, a.jsxs)(g.a, {
                open: !0,
                size: "default",
                onOpenChange: k,
                children: [n, C]
            }), w[15] = k, w[16] = n, w[17] = C, w[18] = j) : j = w[18], j
        }

        function j(e) {
            let t, n, p, g, m = (0, i.c)(7),
                {
                    hostId: f
                } = e,
                v = (0, l.y)(u.a);
            return (0, l.x)(x.b, f) ? (m[0] !== f || m[1] !== v ? (t = () => {
                (0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = v.query.getData(d.b);
                if (null != e) {
                    (0, c.f)(v, C, {
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
                    children: (0, a.jsx)(o.a, {
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
            l = n("hwkA"),
            o = n("oyxz"),
            r = n("bf6R"),
            s = n("MRlq");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u, h, p, g, m, f = (0, i.c)(31),
                    {
                        restored: v,
                        restoring: b,
                        deleting: x,
                        onDelete: C,
                        onUnarchive: j,
                        onDone: w
                    } = e,
                    y = void 0 !== x && x;
                f[0] !== b ? (t = b ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.restoringDescription",
                    defaultMessage: "Restoring this chat and its workspace…",
                    description: "Progress message while an archived task is being restored"
                }) : null, f[0] = b, f[1] = t) : t = f[1], f[2] !== v || f[3] !== b ? (n = !b && v ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.restoredDescription",
                    defaultMessage: "This chat has been restored",
                    description: "Confirmation shown before leaving an archived task preview"
                }) : null, f[2] = v, f[3] = b, f[4] = n) : n = f[4], f[5] !== v || f[6] !== b ? (c = b || v ? null : (0, a.jsx)(o.a, {
                    id: "localConversation.archived.previewDescription",
                    defaultMessage: "This chat is archived. To continue, unarchive it first",
                    description: "Explanation displayed beneath a read-only archived task preview"
                }), f[5] = v, f[6] = b, f[7] = c) : c = f[7], f[8] !== t || f[9] !== n || f[10] !== c ? (d = (0, a.jsxs)("span", {
                    className: "text-sm text-secondary select-none",
                    children: [t, n, c]
                }), f[8] = t, f[9] = n, f[10] = c, f[11] = d) : d = f[11], f[12] !== y || f[13] !== C || f[14] !== v || f[15] !== b ? (u = v || null == C ? null : (0, a.jsx)(l.a, {
                    color: "danger",
                    variant: "solid",
                    disabled: b,
                    loading: y,
                    size: "lg",
                    onClick: C,
                    children: (0, a.jsx)(o.a, {
                        ...s.a.delete
                    })
                }), f[12] = y, f[13] = C, f[14] = v, f[15] = b, f[16] = u) : u = f[16];
                let k = v ? w : j;
                return f[17] !== v || f[18] !== b ? (h = v && !b ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.previewDone",
                    defaultMessage: "Done",
                    description: "Leaves Archive with the restored task selected"
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.f, {}), (0, a.jsx)(o.a, {
                        ...s.a.unarchive
                    })]
                }), f[17] = v, f[18] = b, f[19] = h) : h = f[19], f[20] !== y || f[21] !== b || f[22] !== k || f[23] !== h ? (p = (0, a.jsx)(l.a, {
                    color: "primary",
                    variant: "solid",
                    disabled: y,
                    loading: b,
                    size: "lg",
                    onClick: k,
                    children: h
                }), f[20] = y, f[21] = b, f[22] = k, f[23] = h, f[24] = p) : p = f[24], f[25] !== u || f[26] !== p ? (g = (0, a.jsxs)("div", {
                    className: "pointer-events-auto flex items-center gap-2",
                    children: [u, p]
                }), f[25] = u, f[26] = p, f[27] = g) : g = f[27], f[28] !== g || f[29] !== d ? (m = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [d, g]
                }), f[28] = g, f[29] = d, f[30] = m) : m = f[30], m
            }
        })
    }),
    sqqv: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("oyxz"),
            o = n("Sm6l"),
            r = n("bf6R"),
            s = n("ABl9");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u, h, p, g, m = (0, i.c)(15);
                return m[0] !== e ? ({
                    title: c,
                    icon: t,
                    ...n
                } = e, m[0] = e, m[1] = t, m[2] = n, m[3] = c) : (t = m[1], n = m[2], c = m[3]), m[4] !== t ? (d = null == t ? null : (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: "flex shrink-0 items-center",
                    children: t
                }), m[4] = t, m[5] = d) : d = m[5], m[6] !== c ? (u = "string" == typeof c ? (0, s.d)(c) : c ?? (0, a.jsx)(l.a, {
                    id: "threadWorkspace.chatTitlebar.fallbackTitle",
                    defaultMessage: "Chat",
                    description: "Title for the Chat pane before the task has a name"
                }), m[6] = c, m[7] = u) : u = m[7], m[8] !== u ? (h = (0, a.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: u
                }), m[8] = u, m[9] = h) : h = m[9], m[10] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)("span", {
                    className: "grid size-3.5 shrink-0 place-items-center",
                    children: (0, a.jsx)(r.Zb, {})
                }), m[10] = p) : p = m[10], m[11] !== n || m[12] !== d || m[13] !== h ? (g = (0, a.jsxs)(o.a, {
                    ...n,
                    className: "max-w-full min-w-0 select-none",
                    color: "ghostActive",
                    size: "conversationTitle",
                    children: [d, h, p]
                }), m[11] = n, m[12] = d, m[13] = h, m[14] = g) : g = m[14], g
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
            l = n("suct"),
            o = n("iodE"),
            r = n("IPUh"),
            s = n("BolX"),
            c = n("zd8w"),
            d = n("I7bK"),
            u = n("Q2Qp"),
            h = n("QcW8"),
            p = n("wD9O"),
            g = n("nzx4"),
            m = n("eGPX"),
            f = n("KWzM");

        function v(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function b(e) {
            let t, n, l, h, v, b, x, j, w, y, k = (0, i.c)(25);
            k[0] !== e ? ({
                animate: t,
                children: n,
                className: l,
                ...h
            } = e, k[0] = e, k[1] = t, k[2] = n, k[3] = l, k[4] = h) : (t = k[1], n = k[2], l = k[3], h = k[4]);
            let E = (0, o.a)(),
                S = (0, s.z)(m.c),
                _ = t && !S,
                M = (0, c.useContext)(u.a),
                I = (0, c.useContext)(d.c)?.chatPaneElement,
                T = (0, p.c)(),
                D = (0, c.useRef)(null),
                N = (0, c.useRef)(_);
            k[5] !== I || k[6] !== M || k[7] !== T ? (v = () => {
                let e = D.current,
                    t = C(M, I);
                if (null == e || null == t || !N.current) return;
                let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-a.top)/T}px ${(a.right-n.right)/T}px ${(a.bottom-n.bottom)/T}px ${(n.left-a.left)/T}px)`
            }, k[5] = I, k[6] = M, k[7] = T, k[8] = v) : v = k[8];
            let O = v,
                R = !E,
                z = !E;
            k[9] !== O ? (b = () => {
                N.current = !0, requestAnimationFrame(O)
            }, k[9] = O, k[10] = b) : b = k[10], k[11] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                N.current = !1, D.current?.style.removeProperty("clip-path")
            }, k[11] = x) : x = k[11];
            let L = !!_ && f.b.hidden;
            return k[12] !== _ ? (j = _ ? f.a : {
                duration: 0
            }, k[12] = _, k[13] = j) : j = k[13], k[14] !== n || k[15] !== b || k[16] !== L || k[17] !== j ? (w = (0, a.jsx)(r.a.div, {
                onAnimationStart: b,
                onAnimationComplete: x,
                initial: L,
                animate: f.b.visible,
                exit: f.b.hidden,
                transition: j,
                children: n
            }), k[14] = n, k[15] = b, k[16] = L, k[17] = j, k[18] = w) : w = k[18], k[19] !== l || k[20] !== h || k[21] !== R || k[22] !== z || k[23] !== w ? (y = (0, a.jsx)(g.c, {
                ...h,
                ref: D,
                className: l,
                forceMount: !0,
                "aria-hidden": R,
                inert: z,
                children: w
            }), k[19] = l, k[20] = h, k[21] = R, k[22] = z, k[23] = w, k[24] = y) : y = k[24], y
        }

        function x(e) {
            return e instanceof Element && null != e.closest('[data-app-shell-workspace-layout-toggle="right-panel"]')
        }

        function C(e, t) {
            return void 0 !== t ? t ?? e : e?.querySelector("[data-app-shell-main-content-layout]") ?? e
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, r, s, m, f = (0, i.c)(27),
                    {
                        animate: j,
                        children: w,
                        floatingCardAnchor: y,
                        isOpen: k,
                        isSideChatSplit: E,
                        onOpenChange: S,
                        returnFocusId: _,
                        shouldPreventAutoFocus: M,
                        trigger: I
                    } = e,
                    T = void 0 === j || j,
                    D = void 0 !== E && E,
                    N = void 0 !== M && M,
                    O = (0, c.useContext)(u.a),
                    R = (0, c.useContext)(d.c)?.chatPaneElement,
                    [z, L] = (0, c.useState)(null),
                    A = (0, c.useRef)(!1),
                    B = (0, c.useRef)(k && D),
                    P = 8 * (0, p.c)(),
                    q = y ?? z ?? void 0;
                f[0] !== R || f[1] !== y || f[2] !== O || f[3] !== q || f[4] !== z ? (t = {
                    contextElement: q,
                    getBoundingClientRect() {
                        if (y?.isConnected) return y.getBoundingClientRect();
                        let e = z?.closest("[data-app-shell-main-titlebar]") ?? z?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            t = (e ?? z)?.getBoundingClientRect() ?? new DOMRect,
                            n = C(O, R);
                        if (null == n) return t;
                        let a = n.getBoundingClientRect();
                        return new DOMRect(a.left, t.top, a.width, t.height)
                    }
                }, f[0] = R, f[1] = y, f[2] = O, f[3] = q, f[4] = z, f[5] = t) : t = f[5];
                let W = t;
                return f[6] !== W ? (n = (0, a.jsx)(g.b, {
                    virtualRef: {
                        current: W
                    }
                }), f[6] = W, f[7] = n) : n = f[7], f[8] !== I ? (o = (0, a.jsx)(g.e, {
                    ref: L,
                    asChild: !0,
                    children: I
                }), f[8] = I, f[9] = o) : o = f[9], f[10] !== T || f[11] !== w || f[12] !== y || f[13] !== k || f[14] !== D || f[15] !== P || f[16] !== _ || f[17] !== N ? (r = k && (0, a.jsx)(b, {
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: T,
                    align: "end",
                    alignOffset: null == y ? P : 0,
                    collisionPadding: P,
                    side: "bottom",
                    sideOffset: null == y ? P : 0,
                    unstyled: !0,
                    onOpenAutoFocus: e => {
                        A.current = !1, (N || B.current) && e.preventDefault(), B.current = !1
                    },
                    onCloseAutoFocus: e => {
                        if (N) e.preventDefault();
                        else if (!A.current && null != _) {
                            let t = document.getElementById(_);
                            t?.focus({
                                preventScroll: !0
                            }), null != t && document.activeElement === t && e.preventDefault()
                        }
                    },
                    onInteractOutside: e => {
                        e.target instanceof Node && y?.contains(e.target) && e.preventDefault(), D && x(e.target) && e.preventDefault(), e.defaultPrevented || (A.current = !0)
                    },
                    onFocusOutside: e => {
                        let t = e.detail.originalEvent.relatedTarget;
                        D && (null == t || x(t)) && "composer" === (0, h.q)(e.target) && e.preventDefault(), e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
                    },
                    onPointerDownOutside: v,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: w
                }), f[10] = T, f[11] = w, f[12] = y, f[13] = k, f[14] = D, f[15] = P, f[16] = _, f[17] = N, f[18] = r) : r = f[18], f[19] !== r ? (s = (0, a.jsx)(l.a, {
                    children: r
                }), f[19] = r, f[20] = s) : s = f[20], f[21] !== k || f[22] !== S || f[23] !== n || f[24] !== o || f[25] !== s ? (m = (0, a.jsxs)(g.a, {
                    open: k,
                    onOpenChange: S,
                    children: [n, o, s]
                }), f[21] = k, f[22] = S, f[23] = n, f[24] = o, f[25] = s, f[26] = m) : m = f[26], m
            }
        })
    }),
    enMl: (function(e, t, n) {
        var a = n("QosV"),
            i = n("BolX"),
            l = n("zd8w"),
            o = n("tSEg"),
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
                    f = (0, i.y)(o.a);
                return d[0] !== g || d[1] !== m || d[2] !== f || d[3] !== p ? (t = () => {
                    f.set(r.a, g), f.set(r.c, p), f.set(r.e, m)
                }, n = [g, m, f, p], d[0] = g, d[1] = m, d[2] = f, d[3] = p, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, l.useLayoutEffect)(t, n), d[6] !== f ? (s = () => () => {
                    f.set(r.a, null), f.set(r.c, null), f.set(r.e, !0)
                }, c = [f], d[6] = f, d[7] = s, d[8] = c) : (s = d[7], c = d[8]), (0, l.useLayoutEffect)(s, c), null
            }
        })
    }),
    dDDU: (function(e, t, n) {
        var a = n("Qgfj"),
            i = n("Kyn2"),
            l = n("nnol"),
            o = n("QcW8"),
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
                let t = e.get(o.ab);
                return e.get(o.$) || t?.isVisible !== !0 || "split" !== t.mode && !e.get(g.c) ? [] : function(e, t) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.l,
                        f = e.get(r.l.activeTab$),
                        v = e.get(m.i),
                        b = null;
                    o === r.a ? b = "bottom" : "split" === v.mode && (e.get(m.g) ? (b = v.contentSide, "chat" !== t && t.tabId === e.get(m.l) && (b = "left" === v.contentSide ? "right" : "left")) : "chat" === t ? b = "left" === v.contentSide ? "right" : "left" : t.tabId === f?.tabId && (b = v.contentSide));
                    let x = e.get(h.i),
                        C = !x && ("chat" !== t || null != f),
                        j = [{
                            enabled: C && "left" !== b && (0, p.a)(t, "left"),
                            id: "unified-workspace-move-left",
                            icon: c.w,
                            message: (0, a.e)({
                                id: "threadWorkspace.contextMenu.moveToLeftPane",
                                defaultMessage: "Move to left pane",
                                description: "Context menu action that presents the selected task tab in the left workspace pane"
                            }),
                            onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "left", o))
                        }, {
                            enabled: C && "right" !== b && (0, p.a)(t, "right"),
                            id: "unified-workspace-move-right",
                            icon: c.y,
                            message: (0, a.e)({
                                id: "threadWorkspace.contextMenu.moveToRightPane",
                                defaultMessage: "Move to right pane",
                                description: "Context menu action that presents the selected task tab in the right workspace pane"
                            }),
                            onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "right", o))
                        }].filter(e => !1 !== e.enabled);
                    return !x && o !== r.a && e.get(s.b) && (0, p.a)(t, "bottom") && j.push({
                        id: "unified-workspace-move-bottom",
                        icon: c.p,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToBottomPane",
                            defaultMessage: "Move to bottom pane",
                            description: "Context menu action that moves an existing Terminal task tab into the bottom utility pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "bottom", o))
                    }), "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == d.appServices.detachedWindows || j.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !x && !(0, l.c)(e, t.tabId) && t.tabType.windowTransfer.canTransfer(e, t.props),
                        icon: c.Ig,
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
                                return a(e, o, t, null)
                            }))
                        }
                    }), "chat" === t && e.get(g.c) && j.push({
                        id: "close-tab",
                        icon: c.qj,
                        message: (0, a.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close",
                            description: "Context menu action for closing a tab"
                        }),
                        onSelect: () => (0, g.a)(e)
                    }), j
                }(e, "chat")
            }
        })
    })
};