export const __rspack_esm_ids = [237059];
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
            a: () => Y
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
            x = n("AKr5"),
            C = n("wqvF"),
            w = n("giDA"),
            j = n("fQ9c"),
            y = n("nb0y"),
            k = n("xD3Z"),
            E = n("Z2JT"),
            S = n("yC2B"),
            _ = n("Sgih"),
            M = n("tSEg"),
            T = n("hZax"),
            D = n("El6m"),
            I = n("dN0a"),
            N = n("giVD");
        n("G7Oa");
        var O = n("q1q2"),
            R = n("VwGH"),
            z = n("on57"),
            L = n("W5pg"),
            A = n("IPUh"),
            B = n("qjLK"),
            P = n("I7bK");
        n("QcW8"), n("eFp2");
        var q = n("oH56");
        n("EpL9");
        var W = n("DUYS"),
            F = n("gbrq");
        n("dt6g");
        var $ = n("bIvi");
        n("Vhua"), n("WwnD");
        var V = n("pZMh");

        function Q(e) {
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
                } = (0, P.g)(),
                E = (0, r.useContext)(q.a),
                S = (0, o.z)(V.g),
                _ = (0, o.z)(V.l),
                M = w ?? "content",
                T = S ? "content" === M && E?.dragState?.draggedTab.tabId === _ : "chat" === M,
                D = (0, r.useContext)(B.a),
                I = (0, o.z)(F.d),
                N = (0, o.z)(u.a.tabIds$),
                Q = E?.dragState?.sourceController === u.a && 1 === N.length;
            b[0] !== y || b[1] !== k ? (t = [k, y], b[0] = y, b[1] = k, b[2] = t) : t = b[2], b[3] !== T ? (n = e => {
                let [t, n] = e, a = Math.min(t, (0, W.f)(n, t, "unified"));
                return T ? t - a : a
            }, b[3] = T, b[4] = n) : n = b[4];
            let X = (0, L.a)(t, n);
            b[5] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, O.f)(H), (0, O.h)({
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
                whileElementsMounted: R.b
            }, b[5] = l) : l = b[5];
            let {
                floatingStyles: Z,
                refs: U
            } = (0, O.i)(l);
            b[6] !== U ? (c = e => {
                U.setReference(e)
            }, b[6] = U, b[7] = c) : c = b[7];
            let Y = (0, $.a)(c);
            b[8] !== U ? (d = e => {
                U.setFloating(e)
            }, b[8] = U, b[9] = d) : d = b[9];
            let G = (0, $.a)(d),
                J = "bottom" === x && "inset-x-0 bottom-0",
                ee = "left" === x && "inset-y-0 left-0",
                et = "right" === x && "inset-y-0 right-0";
            b[10] !== J || b[11] !== ee || b[12] !== et ? (h = (0, z.b)("pointer-events-none absolute", J, ee, et), b[10] = J, b[11] = ee, b[12] = et, b[13] = h) : h = b[13];
            let en = "bottom" === x ? void 0 : I && !Q ? D ?? void 0 : void 0,
                ea = "bottom" === x ? j : void 0,
                ei = "bottom" === x ? void 0 : X;
            return b[14] !== en || b[15] !== ea || b[16] !== ei ? (p = {
                bottom: en,
                height: ea,
                width: ei
            }, b[14] = en, b[15] = ea, b[16] = ei, b[17] = p) : p = b[17], b[18] !== Y || b[19] !== p || b[20] !== h ? (g = (0, a.jsx)(A.a.div, {
                ref: Y,
                "aria-hidden": !0,
                className: h,
                dir: "ltr",
                style: p
            }), b[18] = Y, b[19] = p, b[20] = h, b[21] = g) : g = b[21], b[22] !== x ? (m = (0, a.jsx)(K, {
                destination: x
            }), b[22] = x, b[23] = m) : m = b[23], b[24] !== x || b[25] !== C || b[26] !== Z || b[27] !== G || b[28] !== m ? (f = (0, s.createPortal)((0, a.jsx)("div", {
                ref: G,
                "aria-hidden": !0,
                className: "pointer-events-none z-50",
                "data-unified-workspace-drop-indicator": x,
                dir: C,
                style: Z,
                children: m
            }), document.body), b[24] = x, b[25] = C, b[26] = Z, b[27] = G, b[28] = m, b[29] = f) : f = b[29], b[30] !== g || b[31] !== f ? (v = (0, a.jsxs)(a.Fragment, {
                children: [g, f]
            }), b[30] = g, b[31] = f, b[32] = v) : v = b[32], v
        }

        function H(e) {
            let {
                rects: t
            } = e;
            return -t.reference.height
        }

        function K(e) {
            let t, n, l, o = (0, i.c)(11),
                {
                    destination: r
                } = e,
                s = (0, h.c)(),
                c = "bottom" === r && "border-t",
                d = "left" === r && "border-r",
                u = "right" === r && "border-l";
            o[0] !== c || o[1] !== d || o[2] !== u ? (t = (0, z.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", c, d, u), o[0] = c, o[1] = d, o[2] = u, o[3] = t) : t = o[3];
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
        var X = n("fs8u"),
            Z = n("abd8"),
            U = n("GMTh");

        function Y(e) {
            let t, n, O, R, z, L, A, B = (0, i.c)(67),
                {
                    children: P,
                    composerOnly: q,
                    forceExpanded: W,
                    placement: F,
                    showHeader: $,
                    showConversationTitleMenu: V,
                    showComposerDivider: H,
                    isHidden: K,
                    persistPresentation: Y,
                    reserveContent: J,
                    reserveFullComposerHeight: ee,
                    onPresentationChange: et,
                    title: en,
                    minimizedIcon: ea,
                    titleContent: ei,
                    statusState: el,
                    titleStatusState: eo,
                    hasElicitation: er,
                    notifications: es,
                    workingPreview: ec,
                    responsePreview: ed,
                    previewBubble: eu,
                    renderTranscript: eh,
                    hasTranscript: ep,
                    pendingFormId: eg,
                    emptyState: em
                } = e,
                ef = void 0 !== q && q,
                ev = void 0 !== W && W,
                eb = void 0 === $ || $,
                ex = void 0 === H ? !ef : H,
                eC = void 0 === Y || Y,
                ew = void 0 === eg ? _.a : eg,
                ej = (0, o.y)(M.a),
                ey = "pane" === (void 0 === F ? "floating" : F),
                ek = (0, T.h)("2163293173"),
                eE = ek ? em : void 0,
                eS = !ef || ek && (null != eE || (ep ?? null != eh)),
                e_ = (0, c.a)(),
                {
                    isHidden: eM
                } = (0, U.a)(ey ? "embedded" : "content"),
                eT = void 0 !== K && K || eM,
                eD = (0, o.z)(!(void 0 !== V && V) || ey || eT ? null : N.a),
                eI = (0, r.useContext)(d.a),
                eN = (0, r.useContext)(D.b),
                eO = (0, r.useContext)(D.a),
                eR = (0, r.useContext)(f.a),
                ez = (0, r.useContext)(v.a),
                eL = (0, r.useContext)(m.a),
                eA = (0, r.useContext)(w.a),
                eB = (0, h.c)(),
                [eP, eq] = (0, r.useState)(null),
                eW = !(0, o.z)(I.p),
                eF = (0, r.useRef)(null),
                e$ = (0, o.z)(ew),
                eV = (0, o.z)(eC ? E.a : void 0);
            eS || eb || (eV = "compact");
            let eQ = (0, o.z)(null == e$ && (er ?? D.c)),
                eH = (0, o.z)(u.l.activeTab$);
            B[0] !== eH || B[1] !== ey ? (t = ey ? null : (0, p.getThreadBrowserTabIdFromPanelTab)(eH), B[0] = eH, B[1] = ey, B[2] = t) : t = B[2];
            let eK = t,
                eX = void 0 !== ee && ee || eH?.tabType.kind === "latex-document" || eH?.tabType.kind === "image-preview",
                [eZ, eU] = (0, r.useState)(null);
            B[3] !== eI || B[4] !== ej ? (n = e => (0, X.b)(ej, eI, e), B[3] = eI, B[4] = ej, B[5] = n) : n = B[5];
            let eY = n;
            B[6] !== e$ ? (O = () => {
                let e = null != e$ ? (0, x.a)(eF.current) : eF.current?.querySelector("[contenteditable='true']");
                null == e || (0, b.g)(e) || e.focus({
                    preventScroll: !0
                })
            }, B[6] = e$, B[7] = O) : O = B[7];
            let eG = O;
            B[8] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)("div", {
                ref: e => {
                    null != e && eq(e)
                },
                className: "contents"
            }), B[8] = R) : R = B[8];
            let eJ = ey || eT;
            return B[9] !== eH || B[10] !== ek || B[11] !== e_ || B[12] !== ey || B[13] !== eI || B[14] !== eZ ? (z = ek || ey || null == eI || null == eZ || null == eH ? null : (0, s.createPortal)((0, a.jsx)(Q, {
                destination: eZ,
                direction: (0, S.a)(e_.locale),
                surface: "chat"
            }), eI), B[9] = eH, B[10] = ek, B[11] = e_, B[12] = ey, B[13] = eI, B[14] = eZ, B[15] = z) : z = B[15], B[16] !== eK || B[17] !== eH || B[18] !== eS || B[19] !== P || B[20] !== ef || B[21] !== ek || B[22] !== eE || B[23] !== eG || B[24] !== ev || B[25] !== eY || B[26] !== eQ || B[27] !== ep || B[28] !== eL || B[29] !== ez || B[30] !== eA || B[31] !== eO || B[32] !== eN || B[33] !== e_ || B[34] !== eT || B[35] !== eW || B[36] !== ey || B[37] !== eI || B[38] !== ea || B[39] !== es || B[40] !== et || B[41] !== eP || B[42] !== e$ || B[43] !== eC || B[44] !== eu || B[45] !== eh || B[46] !== J || B[47] !== ed || B[48] !== ej || B[49] !== eX || B[50] !== ex || B[51] !== eb || B[52] !== eZ || B[53] !== el || B[54] !== eV || B[55] !== eR || B[56] !== en || B[57] !== ei || B[58] !== eD || B[59] !== eo || B[60] !== eB || B[61] !== ec ? (L = e => (0, a.jsx)(l.a, {
                transformPagePoint: e => ({
                    x: e.x / eB,
                    y: e.y / eB
                }),
                children: (0, a.jsx)(D.b, {
                    value: ey ? eN : {
                        activeBrowserTabId: eK,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            ej.get(u.l.activeTab$)?.tabId === eH?.tabId && (ej.get(I.k) || (0, I.i)(ej, {
                                prefersReducedMotion: !0
                            }), (0, b.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, a.jsx)(D.a, {
                        value: ey ? eO : "expanded",
                        children: (0, a.jsx)(y.a, {
                            onResize: e => (0, g.n)(ej, {
                                dockPosition: e
                            }),
                            contentChat: {
                                focusComposer: eG
                            },
                            previewSide: ek ? eZ : null,
                            dockThreadKey: Z.c,
                            canDock: eS || eb,
                            titleContent: eD ?? ei,
                            minimizedIcon: ea,
                            statusState: el,
                            titleStatusState: eo,
                            hasTranscript: ep,
                            emptyState: eE,
                            pendingFormId: e$,
                            notifications: es,
                            workingPreview: ec,
                            responsePreview: ed,
                            previewBubble: eu,
                            containerSize: e,
                            renderMenu: e => (0, a.jsx)(k.a, {
                                ...e,
                                showOptions: !ek || eS
                            }),
                            forceExpanded: ev || eQ && (ek || !ef),
                            isHidden: ey || eT,
                            isMinimized: eW,
                            onDragOver: eS ? e => {
                                let t = eY(e);
                                return eU(t), null != t
                            } : void 0,
                            onDragEnd: eS ? (e, t) => {
                                eU(null);
                                let n = eY(e);
                                return null != n && (0, X.a)(ej, n, t)
                            } : void 0,
                            presentation: eV,
                            showHeader: eb,
                            showComposerDivider: ex,
                            background: ef && !eb ? void 0 : "panel",
                            onPresentationChange: e => {
                                eC && ej.set(E.a, e), et?.(e)
                            },
                            onMinimizedChange: e => {
                                (e ? I.t : I.i)(ej, {
                                    prefersReducedMotion: !0
                                })
                            },
                            title: en ?? e_.formatMessage({
                                id: "quickChat.mainConversation",
                                defaultMessage: "Chat",
                                description: "Fallback title for the task's main conversation in the floating chat"
                            }),
                            renderTranscript: null == eh ? void 0 : (e, t) => eh({
                                isVisible: t && !ey && !eT
                            }),
                            renderComposer: (e, t) => (0, a.jsx)(f.a, {
                                value: ey || null == eK ? eR : eI,
                                children: (0, a.jsx)(C.a, {
                                    target: ey ? eP : null,
                                    children: (0, a.jsx)(G, {
                                        composerRef: eF,
                                        mainContentElement: eI,
                                        presentation: e,
                                        paneContext: ey ? {
                                            transition: eN,
                                            escapeHandler: ez,
                                            bannerTarget: eL,
                                            overlayOwner: eA
                                        } : void 0,
                                        layout: t,
                                        reserveFullComposerHeight: eX,
                                        reserveContent: J ?? (null == eK && eH?.tabType.kind !== "mcp-app" && eH?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof P ? P(ey ? void 0 : e) : P
                                    })
                                })
                            })
                        })
                    })
                })
            }), B[16] = eK, B[17] = eH, B[18] = eS, B[19] = P, B[20] = ef, B[21] = ek, B[22] = eE, B[23] = eG, B[24] = ev, B[25] = eY, B[26] = eQ, B[27] = ep, B[28] = eL, B[29] = ez, B[30] = eA, B[31] = eO, B[32] = eN, B[33] = e_, B[34] = eT, B[35] = eW, B[36] = ey, B[37] = eI, B[38] = ea, B[39] = es, B[40] = et, B[41] = eP, B[42] = e$, B[43] = eC, B[44] = eu, B[45] = eh, B[46] = J, B[47] = ed, B[48] = ej, B[49] = eX, B[50] = ex, B[51] = eb, B[52] = eZ, B[53] = el, B[54] = eV, B[55] = eR, B[56] = en, B[57] = ei, B[58] = eD, B[59] = eo, B[60] = eB, B[61] = ec, B[62] = L) : L = B[62], B[63] !== eJ || B[64] !== z || B[65] !== L ? (A = (0, a.jsxs)(a.Fragment, {
                children: [R, (0, a.jsx)(j.a, {
                    isHidden: eJ,
                    overlay: z,
                    children: L
                })]
            }), B[63] = eJ, B[64] = z, B[65] = L, B[66] = A) : A = B[66], A
        }

        function G(e) {
            let t, n, l, s, c, d, u, h, p, g, f, b, x, C, j, y = (0, i.c)(49),
                {
                    children: k,
                    composerRef: E,
                    mainContentElement: S,
                    presentation: _,
                    paneContext: T,
                    layout: N,
                    reserveContent: O,
                    reserveFullComposerHeight: R
                } = e,
                z = (0, o.y)(M.a),
                L = (0, r.useContext)(D.b),
                A = (0, r.useContext)(v.a),
                B = (0, r.useContext)(m.a),
                P = (0, r.useContext)(w.a),
                {
                    activeBrowserTabId: q
                } = L,
                W = null != T,
                {
                    isCompact: F,
                    isDockedTop: $,
                    isHidden: V,
                    isMinimized: Q
                } = _,
                {
                    isMoving: H,
                    composerContentHeight: K,
                    dockedReservePx: X
                } = N,
                Z = !O || V || Q ? 0 : Math.max(118, F ? X : 0, R ? K + 118 - 102 : 0),
                U = $ && F && X > 0 ? Z : 0,
                [Y, G] = (0, r.useState)(!Q);
            (F || Q) && !Q !== Y && G(!Q);
            let J = O && !V && Y ? I.b : 0;
            y[0] !== q || y[1] !== E || y[2] !== W ? (t = () => {
                if (W || null == q) return;
                let e = E.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && E.current?.contains(e) && e.blur()
            }, n = [q, E, W], y[0] = q, y[1] = E, y[2] = W, y[3] = t, y[4] = n) : (t = y[3], n = y[4]), (0, r.useLayoutEffect)(t, n), y[5] !== E || y[6] !== J || y[7] !== $ || y[8] !== V || y[9] !== Q || y[10] !== W || y[11] !== S || y[12] !== Z || y[13] !== z || y[14] !== U ? (l = () => {
                W || null == S || (z.set(I.m, {
                    owner: E,
                    style: {
                        [I.a]: $ ? `${J}px 0 0` : `0 0 ${J}px`,
                        [I.c]: `${V||Q||$?0:102}px`,
                        [I.d]: `${$?0:Z}px`,
                        [I.g]: `${$?Z:0}px`
                    }
                }), (0, I.q)(z, $ ? 0 : Z), z.set(I.n, U))
            }, s = [E, J, W, $, V, Q, S, Z, z, U], y[5] = E, y[6] = J, y[7] = $, y[8] = V, y[9] = Q, y[10] = W, y[11] = S, y[12] = Z, y[13] = z, y[14] = U, y[15] = l, y[16] = s) : (l = y[15], s = y[16]), (0, r.useLayoutEffect)(l, s), y[17] !== E || y[18] !== W || y[19] !== S || y[20] !== z ? (c = () => {
                if (!W && null != S) return () => {
                    let e = z.get(I.m);
                    e?.owner === E && (z.set(I.m, {
                        ...e,
                        owner: null
                    }), (0, I.q)(z, 0), z.set(I.n, 0))
                }
            }, d = [E, W, S, z], y[17] = E, y[18] = W, y[19] = S, y[20] = z, y[21] = c, y[22] = d) : (c = y[21], d = y[22]), (0, r.useLayoutEffect)(c, d);
            let ee = !F || Q || H || K > 102;
            y[23] !== E || y[24] !== ee || y[25] !== W || y[26] !== z ? (u = () => {
                let e = E.current;
                if (W || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    z.set(I.j, ee || t)
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
            }, h = [E, ee, W, z], y[23] = E, y[24] = ee, y[25] = W, y[26] = z, y[27] = u, y[28] = h) : (u = y[27], h = y[28]), (0, r.useLayoutEffect)(u, h), y[29] !== W || y[30] !== z ? (g = () => () => {
                W || z.set(I.j, !1)
            }, p = [W, z], y[29] = W, y[30] = z, y[31] = p, y[32] = g) : (p = y[31], g = y[32]), (0, r.useLayoutEffect)(g, p);
            let et = null == T ? L : T.transition,
                en = null == T ? A : T.escapeHandler,
                ea = null == T ? B : T.bannerTarget,
                ei = null == T ? P : T.overlayOwner,
                el = W ? "contents" : void 0;
            return y[33] !== k || y[34] !== E || y[35] !== el ? (f = (0, a.jsx)("div", {
                ref: E,
                className: el,
                "data-right-panel-composer-overlay-content": "true",
                children: k
            }), y[33] = k, y[34] = E, y[35] = el, y[36] = f) : f = y[36], y[37] !== ei || y[38] !== f ? (b = (0, a.jsx)(w.a, {
                value: ei,
                children: f
            }), y[37] = ei, y[38] = f, y[39] = b) : b = y[39], y[40] !== ea || y[41] !== b ? (x = (0, a.jsx)(m.a, {
                value: ea,
                children: b
            }), y[40] = ea, y[41] = b, y[42] = x) : x = y[42], y[43] !== en || y[44] !== x ? (C = (0, a.jsx)(v.a, {
                value: en,
                children: x
            }), y[43] = en, y[44] = x, y[45] = C) : C = y[45], y[46] !== et || y[47] !== C ? (j = (0, a.jsx)(D.b, {
                value: et,
                children: C
            }), y[46] = et, y[47] = C, y[48] = j) : j = y[48], j
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
                    showOptions: S
                } = e,
                _ = void 0 === S || S,
                M = (0, b.h)("2163293173"),
                T = (0, s.a)();
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
                return _ ? (h[6] !== v ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: v
                }), h[6] = v, h[7] = e) : e = h[7], h[8] !== D || h[9] !== e ? (t = (0, a.jsx)(g.a, {
                    disableNative: !0,
                    items: D,
                    children: e
                }), h[8] = D, h[9] = e, h[10] = t) : t = h[10], t) : v
            }
            return h[11] !== M || h[12] !== T || h[13] !== x || h[14] !== C || h[15] !== D || h[16] !== E || h[17] !== j || h[18] !== _ ? (d = _ && (0, a.jsx)(g.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: j,
                onOpenChange: E,
                items: D,
                children: M ? (0, a.jsx)(f.a, {
                    size: "toolbar",
                    label: T.formatMessage({
                        id: "quickChat.moreOptions",
                        defaultMessage: "Chat options",
                        description: "Accessible label for the floating chat overflow menu"
                    })
                }) : (0, a.jsx)(l.a, {
                    disabled: j || C,
                    content: (0, a.jsx)(c.a, {
                        id: "quickChat.dock.dragHint",
                        defaultMessage: "Drag to move · Click for options",
                        description: "Tooltip for the floating Chat grip that can be dragged to move the Chat or clicked to open docking options"
                    }),
                    children: (0, a.jsx)(p.a, {
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
                        onPointerDown: y,
                        onClick: e => {
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || E?.(!j)
                        },
                        children: (0, a.jsx)(m.Xc, {})
                    })
                })
            }), h[11] = M, h[12] = T, h[13] = x, h[14] = C, h[15] = D, h[16] = E, h[17] = j, h[18] = _, h[19] = d) : d = h[19], h[20] !== d ? (u = (0, a.jsx)(a.Fragment, {
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
                S = (0, l.y)(u.a),
                _ = (0, b.a)(),
                M = (0, l.x)(x.b, y),
                T = E.rate_limit_upsell;
            if (!M || null == T) return null;
            let D = !_ && "-mb-6";
            j[0] !== D ? (t = (0, p.b)("block w-full scale-105 object-cover", D), j[0] = D, j[1] = t) : t = j[1];
            let I = _ ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return j[2] !== t || j[3] !== I ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: I
                })
            }), j[2] = t, j[3] = I, j[4] = n) : n = j[4], j[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(g.d, {
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
            }), j[6] = c) : c = j[6], j[7] !== T.ctas || j[8] !== k || j[9] !== S ? (d = e => (0, a.jsx)("div", {
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
            }), j[7] = T.ctas, j[8] = k, j[9] = S, j[10] = d) : d = j[10], j[11] !== T || j[12] !== E || j[13] !== d ? (C = (0, a.jsxs)(m.b, {
                children: [c, (0, a.jsx)(m.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: T,
                        rateLimitStatus: E,
                        renderContent: d
                    })
                })]
            }), j[11] = T, j[12] = E, j[13] = d, j[14] = C) : C = j[14], j[15] !== k || j[16] !== n || j[17] !== C ? (w = (0, a.jsxs)(g.a, {
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
    sqqv: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("slpy"),
            o = n("Wf1j"),
            r = n("oyxz"),
            s = n("Sm6l"),
            c = n("bf6R"),
            d = n("ABl9"),
            u = n("Zt82");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, p, g, m, f, v, b, x = (0, i.c)(19);
                x[0] !== e ? ({
                    title: h,
                    project: t,
                    ...n
                } = e, x[0] = e, x[1] = t, x[2] = n, x[3] = h) : (t = x[1], n = x[2], h = x[3]);
                let C = (0, o.a)(),
                    w = t?.name;
                return x[4] !== C || x[5] !== w ? (p = (0, u.a)(C, w), x[4] = C, x[5] = w, x[6] = p) : p = x[6], x[7] !== t ? (g = null == t ? null : (0, a.jsx)(l.a, {
                    content: t.name,
                    children: (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: "flex shrink-0 items-center",
                        children: t.icon
                    })
                }), x[7] = t, x[8] = g) : g = x[8], x[9] !== h ? (m = "string" == typeof h ? (0, d.d)(h) : h ?? (0, a.jsx)(r.a, {
                    id: "threadWorkspace.chatTitlebar.fallbackTitle",
                    defaultMessage: "Chat",
                    description: "Title for the Chat pane before the task has a name"
                }), x[9] = h, x[10] = m) : m = x[10], x[11] !== m ? (f = (0, a.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: m
                }), x[11] = m, x[12] = f) : f = x[12], x[13] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)("span", {
                    className: "grid size-3.5 shrink-0 place-items-center",
                    children: (0, a.jsx)(c.Zb, {})
                }), x[13] = v) : v = x[13], x[14] !== n || x[15] !== p || x[16] !== g || x[17] !== f ? (b = (0, a.jsxs)(s.a, {
                    "aria-description": p,
                    ...n,
                    className: "max-w-full min-w-0 select-none",
                    color: "ghostActive",
                    size: "conversationTitle",
                    children: [g, f, v]
                }), x[14] = n, x[15] = p, x[16] = g, x[17] = f, x[18] = b) : b = x[18], b
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
                S = (0, s.z)(m.c),
                _ = t && !S,
                M = (0, c.useContext)(u.a),
                T = (0, c.useContext)(d.c)?.chatPaneElement,
                D = (0, p.c)(),
                I = (0, c.useRef)(null),
                N = (0, c.useRef)(_);
            k[5] !== T || k[6] !== M || k[7] !== D ? (v = () => {
                let e = I.current,
                    t = C(M, T);
                if (null == e || null == t || !N.current) return;
                let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-a.top)/D}px ${(a.right-n.right)/D}px ${(a.bottom-n.bottom)/D}px ${(n.left-a.left)/D}px)`
            }, k[5] = T, k[6] = M, k[7] = D, k[8] = v) : v = k[8];
            let O = v,
                R = !E,
                z = !E;
            k[9] !== O ? (b = () => {
                N.current = !0, requestAnimationFrame(O)
            }, k[9] = O, k[10] = b) : b = k[10], k[11] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                N.current = !1, I.current?.style.removeProperty("clip-path")
            }, k[11] = x) : x = k[11];
            let L = !!_ && f.b.hidden;
            return k[12] !== _ ? (w = _ ? f.a : {
                duration: 0
            }, k[12] = _, k[13] = w) : w = k[13], k[14] !== n || k[15] !== b || k[16] !== L || k[17] !== w ? (j = (0, a.jsx)(r.a.div, {
                onAnimationStart: b,
                onAnimationComplete: x,
                initial: L,
                animate: f.b.visible,
                exit: f.b.hidden,
                transition: w,
                children: n
            }), k[14] = n, k[15] = b, k[16] = L, k[17] = w, k[18] = j) : j = k[18], k[19] !== l || k[20] !== h || k[21] !== R || k[22] !== z || k[23] !== j ? (y = (0, a.jsx)(g.c, {
                ...h,
                ref: I,
                className: l,
                forceMount: !0,
                "aria-hidden": R,
                inert: z,
                children: j
            }), k[19] = l, k[20] = h, k[21] = R, k[22] = z, k[23] = j, k[24] = y) : y = k[24], y
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
                        onOpenChange: S,
                        returnFocusId: _,
                        shouldPreventAutoFocus: M,
                        trigger: T
                    } = e,
                    D = void 0 === w || w,
                    I = void 0 !== E && E,
                    N = void 0 !== M && M,
                    O = (0, c.useContext)(u.a),
                    R = (0, c.useContext)(d.c)?.chatPaneElement,
                    [z, L] = (0, c.useState)(null),
                    A = (0, c.useRef)(!1),
                    B = (0, c.useRef)(k && I),
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
                }), f[6] = W, f[7] = n) : n = f[7], f[8] !== T ? (o = (0, a.jsx)(g.e, {
                    ref: L,
                    asChild: !0,
                    children: T
                }), f[8] = T, f[9] = o) : o = f[9], f[10] !== D || f[11] !== j || f[12] !== y || f[13] !== k || f[14] !== I || f[15] !== P || f[16] !== _ || f[17] !== N ? (r = k && (0, a.jsx)(b, {
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: D,
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
                        e.target instanceof Node && y?.contains(e.target) && e.preventDefault(), I && x(e.target) && e.preventDefault(), e.defaultPrevented || (A.current = !0)
                    },
                    onFocusOutside: e => {
                        let t = e.detail.originalEvent.relatedTarget;
                        I && (null == t || x(t)) && "composer" === (0, h.q)(e.target) && e.preventDefault(), e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
                    },
                    onPointerDownOutside: v,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: j
                }), f[10] = D, f[11] = j, f[12] = y, f[13] = k, f[14] = I, f[15] = P, f[16] = _, f[17] = N, f[18] = r) : r = f[18], f[19] !== r ? (s = (0, a.jsx)(l.a, {
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
                    f.set(r.b, g), f.set(r.d, p), f.set(r.f, m)
                }, n = [g, m, f, p], d[0] = g, d[1] = m, d[2] = f, d[3] = p, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, l.useLayoutEffect)(t, n), d[6] !== f ? (s = () => () => {
                    f.set(r.b, null), f.set(r.d, null), f.set(r.f, !0)
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
                        icon: c.qj,
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
    }),
    NBTh: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "minus-sm-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-minus-sm-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    h24K: (function(e, t, n) {
        var a = n("gPp5");
        class i {
            constructor() {
                this.componentControls = new Set
            }
            subscribe(e) {
                return this.componentControls.add(e), () => this.componentControls.delete(e)
            }
            start(e, t) {
                this.componentControls.forEach(n => {
                    n.start(e.nativeEvent || e, t)
                })
            }
            cancel() {
                this.componentControls.forEach(e => {
                    e.cancel()
                })
            }
            stop() {
                this.componentControls.forEach(e => {
                    e.stop()
                })
            }
        }
        let l = () => new i;
        n.d(t, {}, {
            a: function() {
                return (0, a.a)(l)
            }
        })
    })
};