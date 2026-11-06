export const __rspack_esm_ids = [432631];
export const __webpack_modules__ = {
    fBor: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => w
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
            m = n("nr53"),
            f = n("PIpC"),
            v = n("UejO");

        function b() {
            let e, t, a, r, b = (0, i.c)(6),
                C = (0, l.y)(s.a);
            return b[0] !== C ? (e = () => {
                let e = null;
                return C.watch(t => {
                    let a = t.get(f.c),
                        i = t.get(d.g),
                        l = t.get(v.b),
                        r = t.get(o.a, l?.hostId == null ? l?.conversationId ?? null : null),
                        s = t.get(h.i),
                        c = t.get(u.l.tabs$),
                        b = "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId);
                    if (null == a || !i || b || e === a || (e = a, (0, v.a)(l, t.value, r, t.value.clientThreadId) || s || c.length > 0)) return;
                    let C = (0, f.a)(a);
                    if (!C?.isOpen) return;
                    let w = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return w ? null : Promise.all([t.query.fetch(n, C.projectId), t.get(m.b) ? t.query.fetch(m.c, C.projectId) : null])
                    }).then(e => {
                        if (null == e) return;
                        let [n, i] = e, l = (0, f.a)(a);
                        w || null == n || i?.supports_chatgpt_preview === !1 || !l?.isOpen || l.projectId !== C.projectId || "active" !== n.status || null == n.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId) || (0, g.a)(t, {
                            type: "appgen-app",
                            projectId: n.id,
                            title: n.title,
                            url: n.current_live_url
                        })
                    }, x), () => {
                        w = !0
                    }
                })
            }, t = [C], b[0] = C, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), (0, c.useEffect)(e, t), b[3] !== C ? (a = () => {
                let e = C.get(h.j),
                    t = null;
                return C.watch(n => {
                    let a = n.get(h.j),
                        i = n.get(u.l.activeTab$),
                        l = n.get(f.c);
                    (a !== e || null == t && null != l) && null != l && i?.tabId.startsWith("site-preview:") && (0, f.b)(l, i.tabId.slice(13), a), e = a, t = l
                })
            }, r = [C], b[3] = C, b[4] = a, b[5] = r) : (a = b[4], r = b[5]), (0, c.useEffect)(a, r), null
        }

        function x() {}
        let C = (0, r.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function w() {
            let e, t, n, r, c = (0, i.c)(12),
                d = (0, l.y)(s.a),
                u = (0, l.z)(v.b),
                h = (0, l.x)(o.a, u?.hostId == null ? u?.conversationId ?? null : null);
            if ("home" !== d.value.routeKind && "chatgpt-thread" !== d.value.routeKind && "local-thread" !== d.value.routeKind) return null;
            c[0] !== u || c[1] !== h || c[2] !== d ? (e = u?.url != null && (0, v.a)(u, d.value, h, d.value.clientThreadId), c[0] = u, c[1] = h, c[2] = d, c[3] = e) : e = c[3];
            let p = e;
            return c[4] !== d ? (t = "home" !== d.value.routeKind ? (0, a.jsx)(b, {}) : null, c[4] = d, c[5] = t) : t = c[5], c[6] !== p || c[7] !== u ? (n = p ? (0, a.jsx)(C, {
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
                return a && e.get(s.d, "2163293173") && e.set(c.a, e.get(i.kb)), a && "pin" === n && (0, o.I)(e, !0, {
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
            w = n("fQ9c"),
            j = n("Fr8T"),
            y = n("xD3Z"),
            k = n("Z2JT"),
            E = n("yC2B"),
            _ = n("Sgih"),
            S = n("tSEg"),
            M = n("hZax"),
            I = n("El6m"),
            D = n("dN0a");
        n("G7Oa");
        var T = n("q1q2"),
            O = n("VwGH"),
            R = n("on57"),
            N = n("W5pg"),
            L = n("IPUh"),
            z = n("qjLK"),
            A = n("I7bK");
        n("QcW8"), n("eFp2");
        var P = n("oH56");
        n("EpL9");
        var B = n("DUYS"),
            q = n("gbrq");
        n("dt6g");
        var F = n("bIvi");
        n("Vhua"), n("WwnD");
        var W = n("pZMh");

        function $(e) {
            let t, n, l, c, d, h, p, g, m, f, v, b = (0, i.c)(33),
                {
                    destination: x,
                    direction: C,
                    surface: w
                } = e,
                {
                    bottomPanelTargetHeight: j,
                    contentPaneWidthRatio: y,
                    mainContentWidth: k
                } = (0, A.g)(),
                E = (0, r.useContext)(P.a),
                _ = (0, o.z)(W.d),
                S = (0, o.z)(W.i),
                M = w ?? "content",
                I = _ ? "content" === M && E?.dragState?.draggedTab.tabId === S : "chat" === M,
                D = (0, r.useContext)(z.a),
                $ = (0, o.z)(q.d),
                H = (0, o.z)(u.a.tabIds$),
                K = E?.dragState?.sourceController === u.a && 1 === H.length;
            b[0] !== y || b[1] !== k ? (t = [k, y], b[0] = y, b[1] = k, b[2] = t) : t = b[2], b[3] !== I ? (n = e => {
                let [t, n] = e, a = Math.min(t, (0, B.f)(n, t, "unified"));
                return I ? t - a : a
            }, b[3] = I, b[4] = n) : n = b[4];
            let X = (0, N.a)(t, n);
            b[5] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, T.f)(Q), (0, T.h)({
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
            }, b[5] = l) : l = b[5];
            let {
                floatingStyles: U,
                refs: Z
            } = (0, T.i)(l);
            b[6] !== Z ? (c = e => {
                Z.setReference(e)
            }, b[6] = Z, b[7] = c) : c = b[7];
            let Y = (0, F.a)(c);
            b[8] !== Z ? (d = e => {
                Z.setFloating(e)
            }, b[8] = Z, b[9] = d) : d = b[9];
            let G = (0, F.a)(d),
                J = "bottom" === x && "inset-x-0 bottom-0",
                ee = "left" === x && "inset-y-0 left-0",
                et = "right" === x && "inset-y-0 right-0";
            b[10] !== J || b[11] !== ee || b[12] !== et ? (h = (0, R.b)("pointer-events-none absolute", J, ee, et), b[10] = J, b[11] = ee, b[12] = et, b[13] = h) : h = b[13];
            let en = "bottom" === x ? void 0 : $ && !K ? D ?? void 0 : void 0,
                ea = "bottom" === x ? j : void 0,
                ei = "bottom" === x ? void 0 : X;
            return b[14] !== en || b[15] !== ea || b[16] !== ei ? (p = {
                bottom: en,
                height: ea,
                width: ei
            }, b[14] = en, b[15] = ea, b[16] = ei, b[17] = p) : p = b[17], b[18] !== Y || b[19] !== p || b[20] !== h ? (g = (0, a.jsx)(L.a.div, {
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
            o[0] !== c || o[1] !== d || o[2] !== u ? (t = (0, R.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", c, d, u), o[0] = c, o[1] = d, o[2] = u, o[3] = t) : t = o[3];
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
            let t, n, T, O, R, N, L = (0, i.c)(63),
                {
                    children: z,
                    composerOnly: A,
                    forceExpanded: P,
                    placement: B,
                    showHeader: q,
                    showComposerDivider: F,
                    isHidden: W,
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
                ep = void 0 !== P && P,
                eg = void 0 === q ? !eh : q,
                em = void 0 === F ? !eh : F,
                ef = void 0 === Q || Q,
                ev = void 0 === ed ? _.a : ed,
                eb = (0, o.y)(S.a),
                ex = "pane" === (void 0 === B ? "floating" : B),
                eC = (0, M.h)("2163293173"),
                ew = eC ? eu : void 0,
                ej = !eh || eC && (null != ew || (ec ?? null != es)),
                ey = (0, c.a)(),
                {
                    isHidden: ek
                } = (0, X.a)(ex ? "embedded" : "content"),
                eE = void 0 !== W && W || ek,
                e_ = (0, r.useContext)(d.a),
                eS = (0, r.useContext)(I.b),
                eM = (0, r.useContext)(I.a),
                eI = (0, r.useContext)(f.a),
                eD = (0, r.useContext)(v.a),
                eT = (0, r.useContext)(m.a),
                eO = (0, r.useContext)(C.a),
                eR = (0, h.c)(),
                [eN, eL] = (0, r.useState)(null),
                ez = !(0, o.z)(D.p),
                eA = (0, o.z)(ev),
                eP = (0, o.z)(ef ? k.a : void 0);
            ej || eg || (eP = "compact");
            let eB = (0, o.z)(null == eA && (ea ?? I.c)),
                eq = (0, o.z)(u.l.activeTab$);
            L[0] !== eq || L[1] !== ex ? (t = ex ? null : (0, p.getThreadBrowserTabIdFromPanelTab)(eq), L[0] = eq, L[1] = ex, L[2] = t) : t = L[2];
            let eF = t,
                eW = void 0 !== U && U || eq?.tabType.kind === "latex-document" || eq?.tabType.kind === "image-preview",
                [e$, eQ] = (0, r.useState)(null);
            L[3] !== e_ || L[4] !== eb ? (n = e => (0, H.b)(eb, e_, e), L[3] = e_, L[4] = eb, L[5] = n) : n = L[5];
            let eV = n;
            L[6] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, a.jsx)("div", {
                ref: e => {
                    null != e && eL(e)
                },
                className: "contents"
            }), L[6] = T) : T = L[6];
            let eH = ex || eE;
            return L[7] !== eq || L[8] !== eC || L[9] !== ey || L[10] !== ex || L[11] !== e_ || L[12] !== e$ ? (O = eC || ex || null == e_ || null == e$ || null == eq ? null : (0, s.createPortal)((0, a.jsx)($, {
                destination: e$,
                direction: (0, E.a)(ey.locale),
                surface: "chat"
            }), e_), L[7] = eq, L[8] = eC, L[9] = ey, L[10] = ex, L[11] = e_, L[12] = e$, L[13] = O) : O = L[13], L[14] !== eF || L[15] !== eq || L[16] !== ej || L[17] !== z || L[18] !== eh || L[19] !== eC || L[20] !== ew || L[21] !== ep || L[22] !== eV || L[23] !== eB || L[24] !== ec || L[25] !== eT || L[26] !== eD || L[27] !== eO || L[28] !== eM || L[29] !== eS || L[30] !== ey || L[31] !== eE || L[32] !== ez || L[33] !== ex || L[34] !== e_ || L[35] !== J || L[36] !== ei || L[37] !== Y || L[38] !== eN || L[39] !== eA || L[40] !== ef || L[41] !== er || L[42] !== es || L[43] !== V || L[44] !== eo || L[45] !== eb || L[46] !== eW || L[47] !== em || L[48] !== eg || L[49] !== e$ || L[50] !== et || L[51] !== eP || L[52] !== eI || L[53] !== G || L[54] !== ee || L[55] !== en || L[56] !== eR || L[57] !== el ? (R = e => (0, a.jsx)(l.a, {
                transformPagePoint: e => ({
                    x: e.x / eR,
                    y: e.y / eR
                }),
                children: (0, a.jsx)(I.b, {
                    value: ex ? eS : {
                        activeBrowserTabId: eF,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            eb.get(u.l.activeTab$)?.tabId === eq?.tabId && (eb.get(D.k) || (0, D.i)(eb, {
                                prefersReducedMotion: !0
                            }), (0, b.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, a.jsx)(I.a, {
                        value: ex ? eM : "expanded",
                        children: (0, a.jsx)(j.a, {
                            onResize: e => (0, g.n)(eb, {
                                dockPosition: e
                            }),
                            previewSide: eC ? e$ : null,
                            dockThreadKey: K.c,
                            canDock: ej || eg,
                            titleContent: ee,
                            minimizedIcon: J,
                            statusState: et,
                            titleStatusState: en,
                            hasTranscript: ec,
                            emptyState: ew,
                            pendingFormId: eA,
                            notifications: ei,
                            workingPreview: el,
                            responsePreview: eo,
                            previewBubble: er,
                            containerSize: e,
                            renderMenu: e => (0, a.jsx)(y.a, {
                                ...e,
                                showOptions: !eC || ej
                            }),
                            forceExpanded: ep || eB && (eC || !eh),
                            isHidden: ex || eE,
                            isMinimized: ez,
                            onDragOver: ej ? e => {
                                let t = eV(e);
                                return eQ(t), null != t
                            } : void 0,
                            onDragEnd: ej ? (e, t) => {
                                eQ(null);
                                let n = eV(e);
                                return null != n && (0, H.a)(eb, n, t)
                            } : void 0,
                            presentation: eP,
                            showHeader: eg,
                            showComposerDivider: em,
                            background: eh && !eg ? void 0 : "panel",
                            onPresentationChange: e => {
                                ef && eb.set(k.a, e), Y?.(e)
                            },
                            onMinimizedChange: e => {
                                (e ? D.t : D.i)(eb, {
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
                                value: ex || null == eF ? eI : e_,
                                children: (0, a.jsx)(x.a, {
                                    target: ex ? eN : null,
                                    children: (0, a.jsx)(Z, {
                                        mainContentElement: e_,
                                        presentation: e,
                                        paneContext: ex ? {
                                            transition: eS,
                                            escapeHandler: eD,
                                            bannerTarget: eT,
                                            overlayOwner: eO
                                        } : void 0,
                                        layout: t,
                                        reserveFullComposerHeight: eW,
                                        reserveContent: V ?? (null == eF && eq?.tabType.kind !== "mcp-app" && eq?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof z ? z(ex ? void 0 : e) : z
                                    })
                                })
                            })
                        })
                    })
                })
            }), L[14] = eF, L[15] = eq, L[16] = ej, L[17] = z, L[18] = eh, L[19] = eC, L[20] = ew, L[21] = ep, L[22] = eV, L[23] = eB, L[24] = ec, L[25] = eT, L[26] = eD, L[27] = eO, L[28] = eM, L[29] = eS, L[30] = ey, L[31] = eE, L[32] = ez, L[33] = ex, L[34] = e_, L[35] = J, L[36] = ei, L[37] = Y, L[38] = eN, L[39] = eA, L[40] = ef, L[41] = er, L[42] = es, L[43] = V, L[44] = eo, L[45] = eb, L[46] = eW, L[47] = em, L[48] = eg, L[49] = e$, L[50] = et, L[51] = eP, L[52] = eI, L[53] = G, L[54] = ee, L[55] = en, L[56] = eR, L[57] = el, L[58] = R) : R = L[58], L[59] !== eH || L[60] !== O || L[61] !== R ? (N = (0, a.jsxs)(a.Fragment, {
                children: [T, (0, a.jsx)(w.a, {
                    isHidden: eH,
                    overlay: O,
                    children: R
                })]
            }), L[59] = eH, L[60] = O, L[61] = R, L[62] = N) : N = L[62], N
        }

        function Z(e) {
            let t, n, l, s, c, d, u, h, p, g, f, b, x, w, j, y = (0, i.c)(44),
                {
                    children: k,
                    mainContentElement: E,
                    presentation: _,
                    paneContext: M,
                    layout: T,
                    reserveContent: O,
                    reserveFullComposerHeight: R
                } = e,
                N = (0, o.y)(S.a),
                L = (0, r.useRef)(null),
                z = (0, r.useContext)(I.b),
                A = (0, r.useContext)(v.a),
                P = (0, r.useContext)(m.a),
                B = (0, r.useContext)(C.a),
                {
                    activeBrowserTabId: q
                } = z,
                F = null != M,
                {
                    isCompact: W,
                    isDockedTop: $,
                    isHidden: Q,
                    isMinimized: V
                } = _,
                {
                    isMoving: H,
                    composerContentHeight: K,
                    dockedReservePx: X
                } = T,
                U = !O || Q || V ? 0 : Math.max(118, W ? X : 0, R ? K + 118 - 102 : 0),
                Z = $ && W && X > 0 ? U : 0,
                [Y, G] = (0, r.useState)(!V);
            (W || V) && !V !== Y && G(!V);
            let J = O && !Q && Y ? D.b : 0;
            y[0] !== q || y[1] !== F ? (t = () => {
                if (F || null == q) return;
                let e = L.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && L.current?.contains(e) && e.blur()
            }, n = [q, F], y[0] = q, y[1] = F, y[2] = t, y[3] = n) : (t = y[2], n = y[3]), (0, r.useLayoutEffect)(t, n), y[4] !== J || y[5] !== $ || y[6] !== Q || y[7] !== V || y[8] !== F || y[9] !== E || y[10] !== U || y[11] !== N || y[12] !== Z ? (l = () => {
                F || null == E || (N.set(D.m, {
                    owner: L,
                    style: {
                        [D.a]: $ ? `${J}px 0 0` : `0 0 ${J}px`,
                        [D.c]: `${Q||V||$?0:102}px`,
                        [D.d]: `${$?0:U}px`,
                        [D.g]: `${$?U:0}px`
                    }
                }), (0, D.q)(N, $ ? 0 : U), N.set(D.n, Z))
            }, s = [J, F, $, Q, V, E, U, N, Z], y[4] = J, y[5] = $, y[6] = Q, y[7] = V, y[8] = F, y[9] = E, y[10] = U, y[11] = N, y[12] = Z, y[13] = l, y[14] = s) : (l = y[13], s = y[14]), (0, r.useLayoutEffect)(l, s), y[15] !== F || y[16] !== E || y[17] !== N ? (c = () => {
                if (!F && null != E) return () => {
                    let e = N.get(D.m);
                    e?.owner === L && (N.set(D.m, {
                        ...e,
                        owner: null
                    }), (0, D.q)(N, 0), N.set(D.n, 0))
                }
            }, d = [F, E, N], y[15] = F, y[16] = E, y[17] = N, y[18] = c, y[19] = d) : (c = y[18], d = y[19]), (0, r.useLayoutEffect)(c, d);
            let ee = !W || V || H || K > 102;
            y[20] !== ee || y[21] !== F || y[22] !== N ? (u = () => {
                let e = L.current;
                if (F || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    N.set(D.j, ee || t)
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
            }, h = [ee, F, N], y[20] = ee, y[21] = F, y[22] = N, y[23] = u, y[24] = h) : (u = y[23], h = y[24]), (0, r.useLayoutEffect)(u, h), y[25] !== F || y[26] !== N ? (g = () => () => {
                F || N.set(D.j, !1)
            }, p = [F, N], y[25] = F, y[26] = N, y[27] = p, y[28] = g) : (p = y[27], g = y[28]), (0, r.useLayoutEffect)(g, p);
            let et = null == M ? z : M.transition,
                en = null == M ? A : M.escapeHandler,
                ea = null == M ? P : M.bannerTarget,
                ei = null == M ? B : M.overlayOwner,
                el = F ? "contents" : void 0;
            return y[29] !== k || y[30] !== el ? (f = (0, a.jsx)("div", {
                ref: L,
                className: el,
                "data-right-panel-composer-overlay-content": "true",
                children: k
            }), y[29] = k, y[30] = el, y[31] = f) : f = y[31], y[32] !== ei || y[33] !== f ? (b = (0, a.jsx)(C.a, {
                value: ei,
                children: f
            }), y[32] = ei, y[33] = f, y[34] = b) : b = y[34], y[35] !== ea || y[36] !== b ? (x = (0, a.jsx)(m.a, {
                value: ea,
                children: b
            }), y[35] = ea, y[36] = b, y[37] = x) : x = y[37], y[38] !== en || y[39] !== x ? (w = (0, a.jsx)(v.a, {
                value: en,
                children: x
            }), y[38] = en, y[39] = x, y[40] = w) : w = y[40], y[41] !== et || y[42] !== w ? (j = (0, a.jsx)(I.b, {
                value: et,
                children: w
            }), y[41] = et, y[42] = w, y[43] = j) : j = y[43], j
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
        let w = (0, o.c)(v.a, e => {
            let {
                get: t
            } = e;
            return null == t(d.ab) ? "hidden" : null != t(u.l.activeTab$) ? "split" : "tab"
        });

        function j(e) {
            let t, n, o, d, u, h = (0, i.c)(22),
                {
                    contextMenuTrigger: v,
                    isCompact: x,
                    isDragging: C,
                    items: w,
                    open: j,
                    onMinimize: k,
                    onOpenChange: E,
                    showOptions: _
                } = e,
                S = void 0 === _ || _,
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
            }, h[1] = k, h[2] = n) : n = h[2], h[3] !== w || h[4] !== n ? (o = [...w, n], h[3] = w, h[4] = n, h[5] = o) : o = h[5];
            let D = o;
            if (null != v) {
                let e, t;
                return S ? (h[6] !== v ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: v
                }), h[6] = v, h[7] = e) : e = h[7], h[8] !== D || h[9] !== e ? (t = (0, a.jsx)(g.a, {
                    disableNative: !0,
                    items: D,
                    children: e
                }), h[8] = D, h[9] = e, h[10] = t) : t = h[10], t) : v
            }
            return h[11] !== M || h[12] !== I || h[13] !== x || h[14] !== C || h[15] !== D || h[16] !== E || h[17] !== j || h[18] !== S ? (d = S && (0, a.jsx)(g.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: j,
                onOpenChange: E,
                items: D,
                children: (0, a.jsx)(l.a, {
                    disabled: j || C,
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
                        label: I.formatMessage({
                            id: "quickChat.moreOptions",
                            defaultMessage: "Chat options",
                            description: "Tooltip for the floating chat overflow menu"
                        })
                    }) : (0, a.jsx)(p.a, {
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
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || E?.(!j)
                        },
                        children: (0, a.jsx)(m.Xc, {})
                    })
                })
            }), h[11] = M, h[12] = I, h[13] = x, h[14] = C, h[15] = D, h[16] = E, h[17] = j, h[18] = S, h[19] = d) : d = h[19], h[20] !== d ? (u = (0, a.jsx)(a.Fragment, {
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
                    c = (0, o.z)(w);
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
                return l[3] !== d || l[4] !== e ? (n = (0, a.jsx)(j, {
                    ...e,
                    items: d
                }), l[3] = d, l[4] = e, l[5] = n) : n = l[5], n
            },
            b: j
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => w
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
            let t, n, r, c, d, C, w, j = (0, i.c)(19),
                {
                    hostId: y,
                    onClose: k,
                    rateLimitStatus: E
                } = e,
                _ = (0, l.y)(u.a),
                S = (0, b.a)(),
                M = (0, l.x)(x.b, y),
                I = E.rate_limit_upsell;
            if (!M || null == I) return null;
            let D = !S && "-mb-6";
            j[0] !== D ? (t = (0, p.b)("block w-full scale-105 object-cover", D), j[0] = D, j[1] = t) : t = j[1];
            let T = S ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return j[2] !== t || j[3] !== T ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: T
                })
            }), j[2] = t, j[3] = T, j[4] = n) : n = j[4], j[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(g.d, {
                className: "contents",
                children: (0, a.jsx)(o.a, {
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
                        children: (0, a.jsx)(o.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models.",
                            description: "Body in the Codex Luna Reserve modal on desktop and web, opened from the Codex or Work thread-header badge after included usage is exhausted. Reassures the user that they are chatting with Luna and invites them to use the available actions below to access higher-capability models. Luna is a model name. No placeholders."
                        })
                    })
                })
            }), j[6] = c) : c = j[6], j[7] !== I.ctas || j[8] !== k || j[9] !== _ ? (d = e => (0, a.jsx)("div", {
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
                                (0, h.a)(_, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), i.log(), k(), i.onClick(e)
                            },
                            children: i.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), j[7] = I.ctas, j[8] = k, j[9] = _, j[10] = d) : d = j[10], j[11] !== I || j[12] !== E || j[13] !== d ? (C = (0, a.jsxs)(m.b, {
                children: [c, (0, a.jsx)(m.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: I,
                        rateLimitStatus: E,
                        renderContent: d
                    })
                })]
            }), j[11] = I, j[12] = E, j[13] = d, j[14] = C) : C = j[14], j[15] !== k || j[16] !== n || j[17] !== C ? (w = (0, a.jsxs)(g.a, {
                open: !0,
                size: "default",
                onOpenChange: k,
                children: [n, C]
            }), j[15] = k, j[16] = n, j[17] = C, j[18] = w) : w = j[18], w
        }

        function w(e) {
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
                        onUnarchive: w,
                        onDone: j
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
                let k = v ? j : w;
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
            let t, n, l, h, v, b, x, w, j, y, k = (0, i.c)(25);
            k[0] !== e ? ({
                animate: t,
                children: n,
                className: l,
                ...h
            } = e, k[0] = e, k[1] = t, k[2] = n, k[3] = l, k[4] = h) : (t = k[1], n = k[2], l = k[3], h = k[4]);
            let E = (0, o.a)(),
                _ = (0, s.z)(m.c),
                S = t && !_,
                M = (0, c.useContext)(u.a),
                I = (0, c.useContext)(d.c)?.chatPaneElement,
                D = (0, p.c)(),
                T = (0, c.useRef)(null),
                O = (0, c.useRef)(S);
            k[5] !== I || k[6] !== M || k[7] !== D ? (v = () => {
                let e = T.current,
                    t = C(M, I);
                if (null == e || null == t || !O.current) return;
                let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-a.top)/D}px ${(a.right-n.right)/D}px ${(a.bottom-n.bottom)/D}px ${(n.left-a.left)/D}px)`
            }, k[5] = I, k[6] = M, k[7] = D, k[8] = v) : v = k[8];
            let R = v,
                N = !E,
                L = !E;
            k[9] !== R ? (b = () => {
                O.current = !0, requestAnimationFrame(R)
            }, k[9] = R, k[10] = b) : b = k[10], k[11] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                O.current = !1, T.current?.style.removeProperty("clip-path")
            }, k[11] = x) : x = k[11];
            let z = !!S && f.b.hidden;
            return k[12] !== S ? (w = S ? f.a : {
                duration: 0
            }, k[12] = S, k[13] = w) : w = k[13], k[14] !== n || k[15] !== b || k[16] !== z || k[17] !== w ? (j = (0, a.jsx)(r.a.div, {
                onAnimationStart: b,
                onAnimationComplete: x,
                initial: z,
                animate: f.b.visible,
                exit: f.b.hidden,
                transition: w,
                children: n
            }), k[14] = n, k[15] = b, k[16] = z, k[17] = w, k[18] = j) : j = k[18], k[19] !== l || k[20] !== h || k[21] !== N || k[22] !== L || k[23] !== j ? (y = (0, a.jsx)(g.c, {
                ...h,
                ref: T,
                className: l,
                forceMount: !0,
                "aria-hidden": N,
                inert: L,
                children: j
            }), k[19] = l, k[20] = h, k[21] = N, k[22] = L, k[23] = j, k[24] = y) : y = k[24], y
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
                        animate: w,
                        children: j,
                        floatingCardAnchor: y,
                        isOpen: k,
                        isSideChatSplit: E,
                        onOpenChange: _,
                        returnFocusId: S,
                        shouldPreventAutoFocus: M,
                        trigger: I
                    } = e,
                    D = void 0 === w || w,
                    T = void 0 !== E && E,
                    O = void 0 !== M && M,
                    R = (0, c.useContext)(u.a),
                    N = (0, c.useContext)(d.c)?.chatPaneElement,
                    [L, z] = (0, c.useState)(null),
                    A = (0, c.useRef)(!1),
                    P = (0, c.useRef)(k && T),
                    B = 8 * (0, p.c)(),
                    q = y ?? L ?? void 0;
                f[0] !== N || f[1] !== y || f[2] !== R || f[3] !== q || f[4] !== L ? (t = {
                    contextElement: q,
                    getBoundingClientRect() {
                        if (y?.isConnected) return y.getBoundingClientRect();
                        let e = L?.closest("[data-app-shell-main-titlebar]") ?? L?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            t = (e ?? L)?.getBoundingClientRect() ?? new DOMRect,
                            n = C(R, N);
                        if (null == n) return t;
                        let a = n.getBoundingClientRect();
                        return new DOMRect(a.left, t.top, a.width, t.height)
                    }
                }, f[0] = N, f[1] = y, f[2] = R, f[3] = q, f[4] = L, f[5] = t) : t = f[5];
                let F = t;
                return f[6] !== F ? (n = (0, a.jsx)(g.b, {
                    virtualRef: {
                        current: F
                    }
                }), f[6] = F, f[7] = n) : n = f[7], f[8] !== I ? (o = (0, a.jsx)(g.e, {
                    ref: z,
                    asChild: !0,
                    children: I
                }), f[8] = I, f[9] = o) : o = f[9], f[10] !== D || f[11] !== j || f[12] !== y || f[13] !== k || f[14] !== T || f[15] !== B || f[16] !== S || f[17] !== O ? (r = k && (0, a.jsx)(b, {
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: D,
                    align: "end",
                    alignOffset: null == y ? B : 0,
                    collisionPadding: B,
                    side: "bottom",
                    sideOffset: null == y ? B : 0,
                    unstyled: !0,
                    onOpenAutoFocus: e => {
                        A.current = !1, (O || P.current) && e.preventDefault(), P.current = !1
                    },
                    onCloseAutoFocus: e => {
                        if (O) e.preventDefault();
                        else if (!A.current && null != S) {
                            let t = document.getElementById(S);
                            t?.focus({
                                preventScroll: !0
                            }), null != t && document.activeElement === t && e.preventDefault()
                        }
                    },
                    onInteractOutside: e => {
                        e.target instanceof Node && y?.contains(e.target) && e.preventDefault(), T && x(e.target) && e.preventDefault(), e.defaultPrevented || (A.current = !0)
                    },
                    onFocusOutside: e => {
                        let t = e.detail.originalEvent.relatedTarget;
                        T && (null == t || x(t)) && "composer" === (0, h.q)(e.target) && e.preventDefault(), e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
                    },
                    onPointerDownOutside: v,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: j
                }), f[10] = D, f[11] = j, f[12] = y, f[13] = k, f[14] = T, f[15] = B, f[16] = S, f[17] = O, f[18] = r) : r = f[18], f[19] !== r ? (s = (0, a.jsx)(l.a, {
                    children: r
                }), f[19] = r, f[20] = s) : s = f[20], f[21] !== k || f[22] !== _ || f[23] !== n || f[24] !== o || f[25] !== s ? (m = (0, a.jsxs)(g.a, {
                    open: k,
                    onOpenChange: _,
                    children: [n, o, s]
                }), f[21] = k, f[22] = _, f[23] = n, f[24] = o, f[25] = s, f[26] = m) : m = f[26], m
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
                        v = e.get(m.f),
                        b = null;
                    o === r.a ? b = "bottom" : "split" === v.mode && (e.get(m.d) ? (b = v.contentSide, "chat" !== t && t.tabId === e.get(m.i) && (b = "left" === v.contentSide ? "right" : "left")) : "chat" === t ? b = "left" === v.contentSide ? "right" : "left" : t.tabId === f?.tabId && (b = v.contentSide));
                    let x = e.get(h.i),
                        C = !x && ("chat" !== t || null != f),
                        w = [{
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
                    return !x && o !== r.a && e.get(s.b) && (0, p.a)(t, "bottom") && w.push({
                        id: "unified-workspace-move-bottom",
                        icon: c.p,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToBottomPane",
                            defaultMessage: "Move to bottom pane",
                            description: "Context menu action that moves an existing Terminal task tab into the bottom utility pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "bottom", o))
                    }), "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == d.appServices.detachedWindows || w.push({
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
                    }), "chat" === t && e.get(g.c) && w.push({
                        id: "close-tab",
                        icon: c.rj,
                        message: (0, a.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close",
                            description: "Context menu action for closing a tab"
                        }),
                        onSelect: () => (0, g.a)(e)
                    }), w
                }(e, "chat")
            }
        })
    })
};