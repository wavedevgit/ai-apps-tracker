export const __rspack_esm_ids = [726406];
export const __webpack_modules__ = {
    fs8u: (function(e, t, a) {
        var n = a("BolX"),
            i = a("QcW8"),
            r = a("ZU27"),
            l = a("gbrq"),
            o = a("tSEg"),
            s = a("OMIV"),
            d = a("SHid"),
            c = a("dt6g"),
            u = a("WwnD");
        let f = (0, n.c)(o.a, e => {
            let {
                get: t
            } = e;
            return null != t(i.eb) && null != t(r.l.activeTab$) && !t(i.H)
        });
        a.d(t, {}, {
            a: function(e, t, a) {
                let n = (0, c.a)(e, "menu" === a ? "context_menu" : "tab_drag", () => (0, u.b)(e, "chat", t));
                return n && e.get(s.d, "2163293173") && e.set(d.a, e.get(i.ob)), n && "pin" === a && (0, l.H)(e, !0), n
            },
            b: function(e, t, a) {
                if (null == a || !(a instanceof MouseEvent) || "pointercancel" === a.type || null == t || null == e.get(i.eb) || null == e.get(r.l.activeTab$) || a.clientY < 0 || a.clientY > window.innerHeight) return null;
                let n = t.getBoundingClientRect();
                return a.clientX <= n.left + 24 ? "left" : a.clientX >= n.right - 24 ? "right" : null
            },
            c: f
        })
    }),
    rjva: (function(e, t, a) {
        a.d(t, {
            a: () => Z
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("l2oX"),
            l = a("BolX"),
            o = a("zd8w"),
            s = a("v7qY"),
            d = a("Wf1j"),
            c = a("Q2Qp"),
            u = a("ZU27"),
            f = a("wD9O"),
            g = a("nKJ6"),
            m = a("kois"),
            h = a("vi3X"),
            p = a("O9Pc"),
            v = a("fDIZ"),
            b = a("jEN2"),
            y = a("AKr5"),
            x = a("wqvF"),
            w = a("giDA"),
            _ = a("fQ9c"),
            S = a("nb0y"),
            k = a("xD3Z"),
            C = a("Z2JT"),
            M = a("yC2B"),
            j = a("Sgih"),
            I = a("tSEg"),
            T = a("hZax"),
            P = a("El6m"),
            E = a("dN0a"),
            A = a("giVD");
        a("G7Oa");
        var z = a("q1q2"),
            q = a("VwGH"),
            F = a("on57"),
            N = a("W5pg"),
            R = a("IPUh"),
            O = a("qjLK"),
            H = a("I7bK");
        a("QcW8"), a("eFp2");
        var D = a("oH56");
        a("EpL9");
        var G = a("DUYS"),
            B = a("gbrq");
        a("dt6g");
        var X = a("bIvi");
        a("Vhua"), a("WwnD");
        var L = a("pZMh");

        function $(e) {
            let t, a, r, d, c, f, g, m, h, p, v, b = (0, i.c)(33),
                {
                    destination: y,
                    direction: x,
                    surface: w
                } = e,
                {
                    bottomPanelTargetHeight: _,
                    contentPaneWidthRatio: S,
                    mainContentWidth: k
                } = (0, H.g)(),
                C = (0, o.useContext)(D.a),
                M = (0, l.z)(L.h),
                j = (0, l.z)(L.m),
                I = w ?? "content",
                T = M ? "content" === I && C?.dragState?.draggedTab.tabId === j : "chat" === I,
                P = (0, o.useContext)(O.a),
                E = (0, l.z)(B.d),
                A = (0, l.z)(u.a.tabIds$),
                $ = C?.dragState?.sourceController === u.a && 1 === A.length;
            b[0] !== S || b[1] !== k ? (t = [k, S], b[0] = S, b[1] = k, b[2] = t) : t = b[2], b[3] !== T ? (a = e => {
                let [t, a] = e, n = Math.min(t, (0, G.f)(a, t, "unified"));
                return T ? t - n : n
            }, b[3] = T, b[4] = a) : a = b[4];
            let Y = (0, N.a)(t, a);
            b[5] === Symbol.for("react.memo_cache_sentinel") ? (r = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, z.f)(Q), (0, z.h)({
                    apply(e) {
                        let {
                            elements: t,
                            rects: a
                        } = e;
                        Object.assign(t.floating.style, {
                            height: `${a.reference.height}px`,
                            width: `${a.reference.width}px`
                        })
                    }
                })],
                whileElementsMounted: q.b
            }, b[5] = r) : r = b[5];
            let {
                floatingStyles: K,
                refs: W
            } = (0, z.i)(r);
            b[6] !== W ? (d = e => {
                W.setReference(e)
            }, b[6] = W, b[7] = d) : d = b[7];
            let Z = (0, X.a)(d);
            b[8] !== W ? (c = e => {
                W.setFloating(e)
            }, b[8] = W, b[9] = c) : c = b[9];
            let U = (0, X.a)(c),
                J = "bottom" === y && "inset-x-0 bottom-0",
                ee = "left" === y && "inset-y-0 left-0",
                et = "right" === y && "inset-y-0 right-0";
            b[10] !== J || b[11] !== ee || b[12] !== et ? (f = (0, F.b)("pointer-events-none absolute", J, ee, et), b[10] = J, b[11] = ee, b[12] = et, b[13] = f) : f = b[13];
            let ea = "bottom" === y ? void 0 : E && !$ ? P ?? void 0 : void 0,
                en = "bottom" === y ? _ : void 0,
                ei = "bottom" === y ? void 0 : Y;
            return b[14] !== ea || b[15] !== en || b[16] !== ei ? (g = {
                bottom: ea,
                height: en,
                width: ei
            }, b[14] = ea, b[15] = en, b[16] = ei, b[17] = g) : g = b[17], b[18] !== Z || b[19] !== g || b[20] !== f ? (m = (0, n.jsx)(R.a.div, {
                ref: Z,
                "aria-hidden": !0,
                className: f,
                dir: "ltr",
                style: g
            }), b[18] = Z, b[19] = g, b[20] = f, b[21] = m) : m = b[21], b[22] !== y ? (h = (0, n.jsx)(V, {
                destination: y
            }), b[22] = y, b[23] = h) : h = b[23], b[24] !== y || b[25] !== x || b[26] !== K || b[27] !== U || b[28] !== h ? (p = (0, s.createPortal)((0, n.jsx)("div", {
                ref: U,
                "aria-hidden": !0,
                className: "pointer-events-none z-50",
                "data-unified-workspace-drop-indicator": y,
                dir: x,
                style: K,
                children: h
            }), document.body), b[24] = y, b[25] = x, b[26] = K, b[27] = U, b[28] = h, b[29] = p) : p = b[29], b[30] !== m || b[31] !== p ? (v = (0, n.jsxs)(n.Fragment, {
                children: [m, p]
            }), b[30] = m, b[31] = p, b[32] = v) : v = b[32], v
        }

        function Q(e) {
            let {
                rects: t
            } = e;
            return -t.reference.height
        }

        function V(e) {
            let t, a, r, l = (0, i.c)(11),
                {
                    destination: o
                } = e,
                s = (0, f.c)(),
                d = "bottom" === o && "border-t",
                c = "left" === o && "border-r",
                u = "right" === o && "border-l";
            l[0] !== d || l[1] !== c || l[2] !== u ? (t = (0, F.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", d, c, u), l[0] = d, l[1] = c, l[2] = u, l[3] = t) : t = l[3];
            let g = `calc(100% / ${s})`,
                m = `scale(${s})`,
                h = `calc(100% / ${s})`;
            return l[4] !== g || l[5] !== m || l[6] !== h ? (a = {
                height: g,
                transform: m,
                transformOrigin: "top left",
                width: h
            }, l[4] = g, l[5] = m, l[6] = h, l[7] = a) : a = l[7], l[8] !== t || l[9] !== a ? (r = (0, n.jsx)("div", {
                className: t,
                style: a
            }), l[8] = t, l[9] = a, l[10] = r) : r = l[10], r
        }
        var Y = a("fs8u"),
            K = a("abd8"),
            W = a("GMTh");

        function Z(e) {
            let t, a, z, q, F, N, R, O = (0, i.c)(67),
                {
                    children: H,
                    composerOnly: D,
                    forceExpanded: G,
                    placement: B,
                    showHeader: X,
                    showConversationTitleMenu: L,
                    showComposerDivider: Q,
                    isHidden: V,
                    persistPresentation: Z,
                    reserveContent: J,
                    reserveFullComposerHeight: ee,
                    onPresentationChange: et,
                    title: ea,
                    minimizedIcon: en,
                    titleContent: ei,
                    statusState: er,
                    titleStatusState: el,
                    hasElicitation: eo,
                    notifications: es,
                    workingPreview: ed,
                    responsePreview: ec,
                    previewBubble: eu,
                    renderTranscript: ef,
                    hasTranscript: eg,
                    pendingFormId: em,
                    emptyState: eh
                } = e,
                ep = void 0 !== D && D,
                ev = void 0 !== G && G,
                eb = void 0 === X || X,
                ey = void 0 === Q ? !ep : Q,
                ex = void 0 === Z || Z,
                ew = void 0 === em ? j.a : em,
                e_ = (0, l.y)(I.a),
                eS = "pane" === (void 0 === B ? "floating" : B),
                ek = (0, T.f)("2163293173"),
                eC = ek ? eh : void 0,
                eM = !ep || ek && (null != eC || (eg ?? null != ef)),
                ej = (0, d.a)(),
                {
                    isHidden: eI
                } = (0, W.a)(eS ? "embedded" : "content"),
                eT = void 0 !== V && V || eI,
                eP = (0, l.z)(!(void 0 !== L && L) || eS || eT ? null : A.a),
                eE = (0, o.useContext)(c.a),
                eA = (0, o.useContext)(P.b),
                ez = (0, o.useContext)(P.a),
                eq = (0, o.useContext)(p.a),
                eF = (0, o.useContext)(v.a),
                eN = (0, o.useContext)(h.a),
                eR = (0, o.useContext)(w.a),
                eO = (0, f.c)(),
                [eH, eD] = (0, o.useState)(null),
                eG = !(0, l.z)(E.p),
                eB = (0, o.useRef)(null),
                eX = (0, l.z)(ew),
                eL = (0, l.z)(ex ? C.a : void 0);
            eM || eb || (eL = "compact");
            let e$ = (0, l.z)(null == eX && (eo ?? P.c)),
                eQ = (0, l.z)(u.l.activeTab$);
            O[0] !== eQ || O[1] !== eS ? (t = eS ? null : (0, g.getThreadBrowserTabIdFromPanelTab)(eQ), O[0] = eQ, O[1] = eS, O[2] = t) : t = O[2];
            let eV = t,
                eY = void 0 !== ee && ee || eQ?.tabType.kind === "latex-document" || eQ?.tabType.kind === "image-preview",
                [eK, eW] = (0, o.useState)(null);
            O[3] !== eE || O[4] !== e_ ? (a = e => (0, Y.b)(e_, eE, e), O[3] = eE, O[4] = e_, O[5] = a) : a = O[5];
            let eZ = a;
            O[6] !== eX ? (z = () => {
                let e = null != eX ? (0, y.a)(eB.current) : eB.current?.querySelector("[contenteditable='true']");
                null == e || (0, b.g)(e) || e.focus({
                    preventScroll: !0
                })
            }, O[6] = eX, O[7] = z) : z = O[7];
            let eU = z;
            O[8] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, n.jsx)("div", {
                ref: e => {
                    null != e && eD(e)
                },
                className: "contents"
            }), O[8] = q) : q = O[8];
            let eJ = eS || eT;
            return O[9] !== eQ || O[10] !== ek || O[11] !== ej || O[12] !== eS || O[13] !== eE || O[14] !== eK ? (F = ek || eS || null == eE || null == eK || null == eQ ? null : (0, s.createPortal)((0, n.jsx)($, {
                destination: eK,
                direction: (0, M.a)(ej.locale),
                surface: "chat"
            }), eE), O[9] = eQ, O[10] = ek, O[11] = ej, O[12] = eS, O[13] = eE, O[14] = eK, O[15] = F) : F = O[15], O[16] !== eV || O[17] !== eQ || O[18] !== eM || O[19] !== H || O[20] !== ep || O[21] !== ek || O[22] !== eC || O[23] !== eU || O[24] !== ev || O[25] !== eZ || O[26] !== e$ || O[27] !== eg || O[28] !== eN || O[29] !== eF || O[30] !== eR || O[31] !== ez || O[32] !== eA || O[33] !== ej || O[34] !== eT || O[35] !== eG || O[36] !== eS || O[37] !== eE || O[38] !== en || O[39] !== es || O[40] !== et || O[41] !== eH || O[42] !== eX || O[43] !== ex || O[44] !== eu || O[45] !== ef || O[46] !== J || O[47] !== ec || O[48] !== e_ || O[49] !== eY || O[50] !== ey || O[51] !== eb || O[52] !== eK || O[53] !== er || O[54] !== eL || O[55] !== eq || O[56] !== ea || O[57] !== ei || O[58] !== eP || O[59] !== el || O[60] !== eO || O[61] !== ed ? (N = e => (0, n.jsx)(r.a, {
                transformPagePoint: e => ({
                    x: e.x / eO,
                    y: e.y / eO
                }),
                children: (0, n.jsx)(P.b, {
                    value: eS ? eA : {
                        activeBrowserTabId: eV,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            e_.get(u.l.activeTab$)?.tabId === eQ?.tabId && (e_.get(E.k) || (0, E.i)(e_, {
                                prefersReducedMotion: !0
                            }), (0, b.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, n.jsx)(P.a, {
                        value: eS ? ez : "expanded",
                        children: (0, n.jsx)(S.a, {
                            onResize: e => (0, m.n)(e_, {
                                dockPosition: e
                            }),
                            contentChat: {
                                focusComposer: eU
                            },
                            previewSide: ek ? eK : null,
                            dockThreadKey: K.c,
                            canDock: eM || eb,
                            titleContent: eP ?? ei,
                            minimizedIcon: en,
                            statusState: er,
                            titleStatusState: el,
                            hasTranscript: eg,
                            emptyState: eC,
                            pendingFormId: eX,
                            notifications: es,
                            workingPreview: ed,
                            responsePreview: ec,
                            previewBubble: eu,
                            containerSize: e,
                            renderMenu: e => (0, n.jsx)(k.a, {
                                ...e,
                                showOptions: !ek || eM
                            }),
                            forceExpanded: ev || e$ && (ek || !ep),
                            isHidden: eS || eT,
                            isMinimized: eG,
                            onDragOver: eM ? e => {
                                let t = eZ(e);
                                return eW(t), null != t
                            } : void 0,
                            onDragEnd: eM ? (e, t) => {
                                eW(null);
                                let a = eZ(e);
                                return null != a && (0, Y.a)(e_, a, t)
                            } : void 0,
                            presentation: eL,
                            showHeader: eb,
                            showComposerDivider: ey,
                            background: ep && !eb ? void 0 : "panel",
                            onPresentationChange: e => {
                                ex && e_.set(C.a, e), et?.(e)
                            },
                            onMinimizedChange: e => {
                                (e ? E.t : E.i)(e_, {
                                    prefersReducedMotion: !0
                                })
                            },
                            title: ea ?? ej.formatMessage({
                                id: "quickChat.mainConversation",
                                defaultMessage: "Chat"
                            }),
                            renderTranscript: null == ef ? void 0 : (e, t) => ef({
                                isVisible: t && !eS && !eT
                            }),
                            renderComposer: (e, t) => (0, n.jsx)(p.a, {
                                value: eS || null == eV ? eq : eE,
                                children: (0, n.jsx)(x.a, {
                                    target: eS ? eH : null,
                                    children: (0, n.jsx)(U, {
                                        composerRef: eB,
                                        mainContentElement: eE,
                                        presentation: e,
                                        paneContext: eS ? {
                                            transition: eA,
                                            escapeHandler: eF,
                                            bannerTarget: eN,
                                            overlayOwner: eR
                                        } : void 0,
                                        layout: t,
                                        reserveFullComposerHeight: eY,
                                        reserveContent: J ?? (null == eV && eQ?.tabType.kind !== "mcp-app" && eQ?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof H ? H(eS ? void 0 : e) : H
                                    })
                                })
                            })
                        })
                    })
                })
            }), O[16] = eV, O[17] = eQ, O[18] = eM, O[19] = H, O[20] = ep, O[21] = ek, O[22] = eC, O[23] = eU, O[24] = ev, O[25] = eZ, O[26] = e$, O[27] = eg, O[28] = eN, O[29] = eF, O[30] = eR, O[31] = ez, O[32] = eA, O[33] = ej, O[34] = eT, O[35] = eG, O[36] = eS, O[37] = eE, O[38] = en, O[39] = es, O[40] = et, O[41] = eH, O[42] = eX, O[43] = ex, O[44] = eu, O[45] = ef, O[46] = J, O[47] = ec, O[48] = e_, O[49] = eY, O[50] = ey, O[51] = eb, O[52] = eK, O[53] = er, O[54] = eL, O[55] = eq, O[56] = ea, O[57] = ei, O[58] = eP, O[59] = el, O[60] = eO, O[61] = ed, O[62] = N) : N = O[62], O[63] !== eJ || O[64] !== F || O[65] !== N ? (R = (0, n.jsxs)(n.Fragment, {
                children: [q, (0, n.jsx)(_.a, {
                    isHidden: eJ,
                    overlay: F,
                    children: N
                })]
            }), O[63] = eJ, O[64] = F, O[65] = N, O[66] = R) : R = O[66], R
        }

        function U(e) {
            let t, a, r, s, d, c, u, f, g, m, p, b, y, x, _, S = (0, i.c)(49),
                {
                    children: k,
                    composerRef: C,
                    mainContentElement: M,
                    presentation: j,
                    paneContext: T,
                    layout: A,
                    reserveContent: z,
                    reserveFullComposerHeight: q
                } = e,
                F = (0, l.y)(I.a),
                N = (0, o.useContext)(P.b),
                R = (0, o.useContext)(v.a),
                O = (0, o.useContext)(h.a),
                H = (0, o.useContext)(w.a),
                {
                    activeBrowserTabId: D
                } = N,
                G = null != T,
                {
                    isCompact: B,
                    isDockedTop: X,
                    isHidden: L,
                    isMinimized: $
                } = j,
                {
                    isMoving: Q,
                    composerContentHeight: V,
                    dockedReservePx: Y
                } = A,
                K = !z || L || $ ? 0 : Math.max(118, B ? Y : 0, q ? V + 118 - 102 : 0),
                W = X && B && Y > 0 ? K : 0,
                [Z, U] = (0, o.useState)(!$);
            (B || $) && !$ !== Z && U(!$);
            let J = z && !L && Z ? E.b : 0;
            S[0] !== D || S[1] !== C || S[2] !== G ? (t = () => {
                if (G || null == D) return;
                let e = C.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && C.current?.contains(e) && e.blur()
            }, a = [D, C, G], S[0] = D, S[1] = C, S[2] = G, S[3] = t, S[4] = a) : (t = S[3], a = S[4]), (0, o.useLayoutEffect)(t, a), S[5] !== C || S[6] !== J || S[7] !== X || S[8] !== L || S[9] !== $ || S[10] !== G || S[11] !== M || S[12] !== K || S[13] !== F || S[14] !== W ? (r = () => {
                G || null == M || (F.set(E.m, {
                    owner: C,
                    style: {
                        [E.a]: X ? `${J}px 0 0` : `0 0 ${J}px`,
                        [E.c]: `${L||$||X?0:102}px`,
                        [E.d]: `${X?0:K}px`,
                        [E.g]: `${X?K:0}px`
                    }
                }), (0, E.q)(F, X ? 0 : K), F.set(E.n, W))
            }, s = [C, J, G, X, L, $, M, K, F, W], S[5] = C, S[6] = J, S[7] = X, S[8] = L, S[9] = $, S[10] = G, S[11] = M, S[12] = K, S[13] = F, S[14] = W, S[15] = r, S[16] = s) : (r = S[15], s = S[16]), (0, o.useLayoutEffect)(r, s), S[17] !== C || S[18] !== G || S[19] !== M || S[20] !== F ? (d = () => {
                if (!G && null != M) return () => {
                    let e = F.get(E.m);
                    e?.owner === C && (F.set(E.m, {
                        ...e,
                        owner: null
                    }), (0, E.q)(F, 0), F.set(E.n, 0))
                }
            }, c = [C, G, M, F], S[17] = C, S[18] = G, S[19] = M, S[20] = F, S[21] = d, S[22] = c) : (d = S[21], c = S[22]), (0, o.useLayoutEffect)(d, c);
            let ee = !B || $ || Q || V > 102;
            S[23] !== C || S[24] !== ee || S[25] !== G || S[26] !== F ? (u = () => {
                let e = C.current;
                if (G || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    F.set(E.j, ee || t)
                };
                t();
                let a = ee ? null : new MutationObserver(t);
                return a?.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    a?.disconnect()
                }
            }, f = [C, ee, G, F], S[23] = C, S[24] = ee, S[25] = G, S[26] = F, S[27] = u, S[28] = f) : (u = S[27], f = S[28]), (0, o.useLayoutEffect)(u, f), S[29] !== G || S[30] !== F ? (m = () => () => {
                G || F.set(E.j, !1)
            }, g = [G, F], S[29] = G, S[30] = F, S[31] = g, S[32] = m) : (g = S[31], m = S[32]), (0, o.useLayoutEffect)(m, g);
            let et = null == T ? N : T.transition,
                ea = null == T ? R : T.escapeHandler,
                en = null == T ? O : T.bannerTarget,
                ei = null == T ? H : T.overlayOwner,
                er = G ? "contents" : void 0;
            return S[33] !== k || S[34] !== C || S[35] !== er ? (p = (0, n.jsx)("div", {
                ref: C,
                className: er,
                "data-right-panel-composer-overlay-content": "true",
                children: k
            }), S[33] = k, S[34] = C, S[35] = er, S[36] = p) : p = S[36], S[37] !== ei || S[38] !== p ? (b = (0, n.jsx)(w.a, {
                value: ei,
                children: p
            }), S[37] = ei, S[38] = p, S[39] = b) : b = S[39], S[40] !== en || S[41] !== b ? (y = (0, n.jsx)(h.a, {
                value: en,
                children: b
            }), S[40] = en, S[41] = b, S[42] = y) : y = S[42], S[43] !== ea || S[44] !== y ? (x = (0, n.jsx)(v.a, {
                value: ea,
                children: y
            }), S[43] = ea, S[44] = y, S[45] = x) : x = S[45], S[46] !== et || S[47] !== x ? (_ = (0, n.jsx)(P.b, {
                value: et,
                children: x
            }), S[46] = et, S[47] = x, S[48] = _) : _ = S[48], _
        }
    }),
    ilLT: (function(e, t, a) {
        var n = a("Qgfj"),
            i = a("bf6R"),
            r = a("fs8u");
        a.d(t, {}, {
            a: function(e, t) {
                return [{
                    id: "left",
                    icon: i.w,
                    enabled: t,
                    message: (0, n.e)({
                        id: "quickChat.dock.left",
                        defaultMessage: "Move to left pane"
                    }),
                    onSelect: () => {
                        (0, r.a)(e, "left", "menu")
                    }
                }, {
                    id: "right",
                    icon: i.y,
                    enabled: t,
                    message: (0, n.e)({
                        id: "quickChat.dock.right",
                        defaultMessage: "Move to right pane"
                    }),
                    onSelect: () => {
                        (0, r.a)(e, "right", "menu")
                    }
                }]
            }
        })
    }),
    xof2: (function(e, t, a) {
        var n = a("EA6X"),
            i = a("D015"),
            r = a("yGJW"),
            l = a("OMIV"),
            o = a("CTBG"),
            s = a("Kwur"),
            d = a("dQRk"),
            c = a("hx97");

        function u(e, t, a) {
            if (null == t || null == a) return;
            let n = 0,
                r = !1;
            for (let l of e.get(o.c, t) ?? [])
                if ((0, c.m)(l) && (r = !1), "assistant" !== l.author.role || r || (n += 1, r = !0), l.id === a) return n > 0 ? (0, i.a)(n) : void 0
        }

        function f(e, t) {
            let a = e.parentContext;
            return {
                action_type: t,
                surface_location: e.surfaceLocation,
                assistant_message_id: e.assistantMessageId,
                turn_ordinal: e.turnOrdinal,
                content_reference_type: e.contentReferenceType,
                content_reference_start_index: e.contentReferenceStartIndex,
                parent_context: null == a ? void 0 : {
                    entity_id: a.entityId,
                    entity_category: a.entityCategory,
                    widget_type: a.widgetType,
                    widget_name: a.widgetName,
                    content_reference_start_index: a.contentReferenceStartIndex,
                    message_id: a.messageId
                }
            }
        }

        function g(e, t) {
            return Math.random() < (e.get(l.f)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(t, 1) ?? 1)
        }

        function m(e, t, a) {
            null != t.actionType && g(e, "widget_action") && s.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "widget_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        widget_action: {
                            ...f(t, t.actionType),
                            widget_type: t.widgetType,
                            widget_name: t.widgetName,
                            widget_affordance: t.widgetAffordance,
                            widget_action_target: t.widgetActionTarget,
                            widget_action_value: t.widgetActionValue,
                            feedback_reasons: t.feedbackReasons,
                            effect: a
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function h(e, t) {
            null != t.actionType && "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" !== t.actionType && g(e, "entity_action") && s.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "entity_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        entity_action: {
                            ...f(t, t.actionType),
                            entity_id: t.entityId,
                            entity_category: t.entityCategory,
                            entity_affordance: t.entityAffordance
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function p(e, t) {
            null != t.actionType && g(e, "link_action") && s.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "link_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        link_action: {
                            ...f(t, t.actionType),
                            link_type: t.linkType,
                            link_affordance: t.linkAffordance,
                            url: t.url,
                            link_index: t.linkIndex,
                            citation_numbers: t.citationNumbers
                        }
                    }
                }
            }).catch(() => void 0)
        }
        a.d(t, {}, {
            a: u,
            b: function(e, t) {
                try {
                    let a = {
                        ...t,
                        conversationId: null == t.conversationId ? void 0 : e.get(d.j, t.conversationId) ?? void 0,
                        turnOrdinal: u(e, t.conversationId, t.assistantMessageId ?? t.messageId)
                    };
                    h(e, a), (0, r.a)(e, n.c, a)
                } catch {}
            },
            c: function(e, t) {
                null != t.actionType && g(e, "image_action") && s.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "image_action",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: t.conversationId,
                                message_id: t.messageId
                            },
                            image_action: {
                                ...f(t, t.actionType),
                                image_affordance: t.imageAffordance,
                                image_index: t.imageIndex,
                                url: t.url,
                                content_url: t.contentUrl,
                                original_content_url: t.originalContentUrl,
                                tags: t.tags
                            }
                        }
                    }
                }).catch(() => void 0), (0, r.a)(e, n.e, t)
            },
            d: function(e, t) {
                p(e, t), (0, r.a)(e, n.g, t)
            },
            e: function(e, t) {
                h(e, t), (0, r.a)(e, n.c, t)
            },
            f: function(e, t) {
                m(e, t), (0, r.a)(e, n.j, t)
            },
            g: p,
            h: m
        })
    }),
    ONnF: (function(e, t, a) {
        var n = a("BolX"),
            i = a("OWtl"),
            r = a("zHp1"),
            l = a("Kwur");
        let o = (0, n.q)(i.a, e => {
            let {
                accountId: t,
                conversationId: a,
                fileId: n,
                userId: i
            } = e;
            return {
                queryKey: ["library-api", t, i, "generated-image-info", n, a],
                staleTime: 3e4,
                queryFn: e => {
                    let {
                        signal: i
                    } = e;
                    return l.Request.safeGet("/files/{file_id}/simple", {
                        additionalHeaders: {
                            "ChatGPT-Account-ID": t
                        },
                        parameters: {
                            path: {
                                file_id: n
                            },
                            query: {
                                conversation_id: a
                            }
                        },
                        signal: i
                    })
                },
                refetchInterval: e => "success" === e.state.status && e.state.data?.library_file_id == null && e.state.dataUpdateCount < 6 && Math.min(2e3 * 2 ** (e.state.dataUpdateCount - 1), 8e3)
            }
        });

        function s(e) {
            return "completed" !== e.status || e.isPreview || null == e.src || !(0, r.h)(e.src) ? null : e.src.slice(e.src.indexOf("://") + 3)
        }
        a.d(t, {}, {
            a: o,
            b: s,
            c: function(e, t, a) {
                if (null == e) return;
                let n = s(e);
                if (null != n) return {
                    conversationId: t,
                    identity: {
                        type: "file",
                        fileId: n
                    },
                    mimeType: e.chatGptImageMetadata?.mimeType,
                    name: a
                }
            }
        })
    }),
    xD3Z: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("slpy"),
            l = a("BolX"),
            o = a("Qgfj"),
            s = a("Wf1j"),
            d = a("oyxz"),
            c = a("QcW8"),
            u = a("ZU27"),
            f = a("ilLT"),
            g = a("Sm6l"),
            m = a("rmk3"),
            h = a("bf6R"),
            p = a("f38C"),
            v = a("tSEg"),
            b = a("hZax"),
            y = a("dt6g"),
            x = a("WwnD");
        let w = (0, l.c)(v.a, e => {
            let {
                get: t
            } = e;
            return null == t(c.eb) ? "hidden" : null != t(u.l.activeTab$) ? "split" : "tab"
        });

        function _(e) {
            let t, a, l, c, u, f = (0, i.c)(22),
                {
                    contextMenuTrigger: v,
                    isCompact: y,
                    isDragging: x,
                    items: w,
                    open: _,
                    onMinimize: k,
                    onOpenChange: C,
                    showOptions: M
                } = e,
                j = void 0 === M || M,
                I = (0, b.f)("2163293173"),
                T = (0, s.a)();
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), f[0] = t) : t = f[0], f[1] !== k ? (a = {
                id: "minimize",
                icon: h.af,
                message: t,
                onSelect: k,
                selectAfterClose: !0
            }, f[1] = k, f[2] = a) : a = f[2], f[3] !== w || f[4] !== a ? (l = [...w, a], f[3] = w, f[4] = a, f[5] = l) : l = f[5];
            let P = l;
            if (null != v) {
                let e, t;
                return j ? (f[6] !== v ? (e = (0, n.jsx)("div", {
                    className: "contents",
                    children: v
                }), f[6] = v, f[7] = e) : e = f[7], f[8] !== P || f[9] !== e ? (t = (0, n.jsx)(m.a, {
                    disableNative: !0,
                    items: P,
                    children: e
                }), f[8] = P, f[9] = e, f[10] = t) : t = f[10], t) : v
            }
            return f[11] !== I || f[12] !== T || f[13] !== y || f[14] !== x || f[15] !== P || f[16] !== C || f[17] !== _ || f[18] !== j ? (c = j && (0, n.jsx)(m.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: _,
                onOpenChange: C,
                items: P,
                children: I ? (0, n.jsx)(p.a, {
                    size: "toolbar",
                    label: T.formatMessage({
                        id: "quickChat.moreOptions",
                        defaultMessage: "Chat options"
                    })
                }) : (0, n.jsx)(r.a, {
                    disabled: _ || x,
                    content: (0, n.jsx)(d.a, {
                        id: "quickChat.dock.dragHint",
                        defaultMessage: "Drag to move · Click for options"
                    }),
                    children: (0, n.jsx)(g.a, {
                        className: "cursor-grab touch-none active:cursor-grabbing",
                        "aria-label": T.formatMessage({
                            id: "quickChat.dock.menu",
                            defaultMessage: "Dock Chat"
                        }),
                        color: "ghostSecondary",
                        "data-quick-chat-drag-handle": !0,
                        size: y ? "composer" : "toolbar",
                        uniform: !0,
                        onPointerDown: S,
                        onClick: e => {
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || C?.(!_)
                        },
                        children: (0, n.jsx)(h.$c, {})
                    })
                })
            }), f[11] = I, f[12] = T, f[13] = y, f[14] = x, f[15] = P, f[16] = C, f[17] = _, f[18] = j, f[19] = c) : c = f[19], f[20] !== c ? (u = (0, n.jsx)(n.Fragment, {
                children: c
            }), f[20] = c, f[21] = u) : u = f[21], u
        }

        function S(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r = (0, i.c)(6),
                    s = (0, l.y)(v.a),
                    d = (0, l.z)(w);
                r[0] !== d || r[1] !== s ? (t = "hidden" === d ? [] : [{
                    id: "full-view",
                    icon: h.N,
                    message: (0, o.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, y.a)(s, "context_menu", () => (0, x.c)(s, "chat", {
                            mode: "full"
                        }))
                    }
                }, ...(0, f.a)(s, "split" === d)], r[0] = d, r[1] = s, r[2] = t) : t = r[2];
                let c = t;
                return r[3] !== c || r[4] !== e ? (a = (0, n.jsx)(_, {
                    ...e,
                    items: c
                }), r[3] = c, r[4] = e, r[5] = a) : a = r[5], a
            },
            b: _
        })
    }),
    umQU: (function(e, t, a) {
        var n = a("BolX"),
            i = a("ccwJ"),
            r = a("Kwur"),
            l = a("dQRk"),
            o = a("bmqg"),
            s = a("SGsN"),
            d = a("urzV"),
            c = a("svjy"),
            u = a("tSEg"),
            f = a("zHp1"),
            g = a("Yscs"),
            m = a("GDNt");
        let h = (0, n.v)(u.a, e => null),
            p = (0, n.j)(u.a, (e, t) => {
                let a, {
                        image: n,
                        imageAssetResolver: o
                    } = e,
                    {
                        signal: u,
                        scope: p
                    } = t,
                    v = n?.gifPlayback?.originalSrc ?? n?.src,
                    x = JSON.stringify([n?.id, v]),
                    w = 0,
                    _ = Promise.resolve(),
                    S = u({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (n?.isAnimated) return p.watch(t => {
                                if (0 !== w) return;
                                let a = t.get(h, x),
                                    r = (0, i.d)(b(t, n)?.gifPlayback, a ?? void 0);
                                (null != a || 1 !== r) && (e({
                                    preview: null,
                                    busy: !0
                                }), j(r, !1))
                            })
                        }
                    }),
                    k = async e => {
                        let t = null != e && (0, f.h)(e) && null != o ? await (0, f.a)(p.queryClient, e, o) : e,
                            a = null == t ? null : await (0, d.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, C = () => (null == a && (a = k(v).catch(e => {
                        throw a = void 0, e
                    })), a), M = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                            a = b(p, n),
                            r = t === a?.watermarkedSrc ? a?.gifPlayback?.watermarkedVariants : a?.gifPlayback?.variants;
                        if (!(0, i.a)(r).includes(e)) throw Error("GIF speed variant unavailable");
                        let l = 1 === e ? void 0 : r?.[String(e)],
                            o = S.get().preview;
                        if (o?.speed === e && o.originalSrc === t && o.assetSrc === l) return o;
                        let s = null == l && t === v ? await C() : await k(l ?? t);
                        return {
                            assetSrc: l,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, g.a)(s),
                            sizeBytes: s.size
                        }
                    }, j = async (e, t) => {
                        let a = ++w;
                        S.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let i = await M(e);
                            if (a !== w) return !1;
                            return S.set({
                                preview: i,
                                busy: !1
                            }), t && (p.set(h, x, e), _ = _.then(async () => {
                                if (a !== w || "chatgpt-thread" !== p.value.routeKind || n?.chatGptMessageId == null || null == v) return;
                                let t = p.get(l.j, p.value.conversationId);
                                null != t && await r.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: n.chatGptMessageId,
                                        asset_pointer: v,
                                        selected_speed: e
                                    },
                                    expectedErrorStatuses: [404, 405]
                                })
                            }).catch(e => {
                                e instanceof m.a && (404 === e.status || 405 === e.status) || p.get(s.f).danger(p.get(c.a).formatMessage({
                                    id: "gifEditor.saveSpeedFailed",
                                    defaultMessage: "Couldn’t save GIF speed. Try again"
                                }), {
                                    errorAnalytics: {
                                        toastId: "gifEditor.saveSpeedFailed"
                                    }
                                })
                            })), !0
                        } catch {
                            return t && a === w && p.get(s.f).danger(p.get(c.a).formatMessage({
                                id: "gifEditor.speedChangeFailed",
                                defaultMessage: "Couldn’t change GIF speed. Try again"
                            }), {
                                errorAnalytics: {
                                    toastId: "gifEditor.speedChangeFailed"
                                }
                            }), !1
                        } finally {
                            a === w && S.set(e => ({
                                ...e,
                                busy: !1
                            }))
                        }
                    };
                return {
                    state$: S,
                    loadOriginal: C,
                    loadExport: async e => 1 === e ? C() : k((await M(e)).src),
                    changeSpeed: e => j(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let n = (0, i.d)(b(p, e)?.gifPlayback, S.get().preview?.speed ?? p.get(h, x) ?? void 0),
                            r = {
                                ...e,
                                src: t,
                                gifPlayback: {
                                    ...e.gifPlayback,
                                    originalSrc: t,
                                    speed: n
                                }
                            };
                        if (1 === n) return r;
                        let l = await M(n, t);
                        return y(r, a && null != l.assetSrc ? {
                            ...l,
                            src: l.assetSrc
                        } : l)
                    }
                }
            }, {
                autoDispose: 6e4,
                key: e => {
                    let {
                        image: t
                    } = e;
                    return JSON.stringify([t?.id, t?.gifPlayback?.originalSrc ?? t?.src, t?.gifPlayback?.variants, t?.gifPlayback?.watermarkedVariants])
                }
            }),
            v = (0, n.d)(u.a, (e, t) => {
                let {
                    image: a,
                    conversationId: n,
                    imageAssetResolver: r
                } = e, {
                    scope: l
                } = t, o = b(l, a, n), s = l.get(p, {
                    image: o?.isAnimated === !0 ? o : void 0,
                    imageAssetResolver: r
                }), {
                    preview: d
                } = l.get(s.state$);
                return {
                    playback: s,
                    previewSrc: null != d && (0, i.a)(o?.gifPlayback?.variants).includes(d.speed) ? d.src : void 0,
                    image: null == o ? void 0 : y(o, d),
                    originalSrc: o?.isAnimated === !0 ? o.gifPlayback?.originalSrc ?? o.src : o?.src,
                    canControl: o?.isAnimated === !0 && (0, i.a)(o.gifPlayback?.variants).length > 1
                }
            });

        function b(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(o.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function y(e, t) {
            let a = (0, i.d)(e.gifPlayback),
                n = null != e.gifPlayback && e.gifPlayback.speed !== a ? {
                    ...e,
                    gifPlayback: {
                        ...e.gifPlayback,
                        speed: a
                    }
                } : e;
            return !0 === e.isAnimated && null != t && (0, i.a)(e.gifPlayback?.variants).includes(t.speed) && t.originalSrc === (e.gifPlayback?.originalSrc ?? e.src) ? {
                ...e,
                src: t.src,
                sizeBytes: t.sizeBytes,
                gifPlayback: {
                    ...e.gifPlayback,
                    originalSrc: t.originalSrc,
                    speed: t.speed
                }
            } : n
        }
        a.d(t, {}, {
            a: y,
            b: b,
            c: p,
            d: v
        })
    }),
    I0AH: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57");
        a.d(t, {}, {
            a: function(e) {
                let t, a, l = (0, i.c)(14),
                    {
                        ariaLabel: o,
                        children: s,
                        className: d,
                        variant: c
                    } = e,
                    u = void 0 === c ? "compact" : c;
                if ("embedded" === u) {
                    let e, t = null == o ? void 0 : "group";
                    return l[0] !== o || l[1] !== s || l[2] !== t ? (e = (0, n.jsx)("div", {
                        role: t,
                        "aria-label": o,
                        className: "flex min-w-0 items-center",
                        children: s
                    }), l[0] = o, l[1] = s, l[2] = t, l[3] = e) : e = l[3], e
                }
                let f = null == o ? void 0 : "toolbar",
                    g = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                    m = "imageTools" === u && "gap-0 shadow-md",
                    h = "playback" === u && "gap-2 shadow-sm";
                return l[4] !== d || l[5] !== g || l[6] !== m || l[7] !== h ? (t = (0, r.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", g, m, h, d), l[4] = d, l[5] = g, l[6] = m, l[7] = h, l[8] = t) : t = l[8], l[9] !== o || l[10] !== s || l[11] !== f || l[12] !== t ? (a = (0, n.jsx)("div", {
                    role: f,
                    "aria-label": o,
                    className: t,
                    children: s
                }), l[9] = o, l[10] = s, l[11] = f, l[12] = t, l[13] = a) : a = l[13], a
            }
        })
    }),
    eYeG: (function(e, t, a) {
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("zd8w"),
            o = a("Qgfj"),
            s = a("aqd9"),
            d = a("POjP");

        function c() {
            return (0, d.a)(0)
        }

        function u(e) {
            let t, a, l, s = (0, i.c)(8),
                {
                    placement: d,
                    progress: c,
                    ref: u
                } = e,
                f = "top" === (void 0 === d ? "bottom" : d) ? "top-3.5" : "bottom-3.5";
            s[0] !== f ? (t = (0, r.b)("pointer-events-none absolute end-3.5 z-10 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-card/80 px-2 body-sm font-medium text-[color:var(--color-image-generation-text,var(--color-text-info))] tabular-nums shadow-lg ring-[0.5px] ring-border backdrop-blur-md select-none", f), s[0] = f, s[1] = t) : t = s[1];
            let g = c / 100;
            return s[2] !== g ? (a = (0, n.jsx)(o.c, {
                value: g,
                style: "percent"
            }), s[2] = g, s[3] = a) : a = s[3], s[4] !== u || s[5] !== t || s[6] !== a ? (l = (0, n.jsx)("span", {
                ref: u,
                className: t,
                children: a
            }), s[4] = u, s[5] = t, s[6] = a, s[7] = l) : l = s[7], l
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r, o = (0, i.c)(7),
                    {
                        generationStartedAtMs: f,
                        isActive: g,
                        placement: m
                    } = e,
                    h = void 0 === g || g,
                    [p, v] = (0, l.useState)(c),
                    b = (0, l.useRef)(null);
                return o[0] !== f || o[1] !== h ? (t = () => {
                    let e, t = b.current;
                    if (null == t) return;
                    let a = t.ownerDocument,
                        n = !1,
                        i = () => {
                            let t = (0, d.a)(Date.now() - f);
                            return v(t), 99 === t && (clearInterval(e), e = void 0), t
                        },
                        r = () => {
                            clearInterval(e), e = void 0, n && !a.hidden && 99 > i() && (e = setInterval(i, 500))
                        };
                    if (i(), !h) return;
                    a.addEventListener("visibilitychange", r);
                    let l = (0, s.a)(t, e => {
                        n = e, r()
                    });
                    return () => {
                        l?.(), a.removeEventListener("visibilitychange", r), clearInterval(e)
                    }
                }, a = [f, h], o[0] = f, o[1] = h, o[2] = t, o[3] = a) : (t = o[2], a = o[3]), (0, l.useLayoutEffect)(t, a), o[4] !== m || o[5] !== p ? (r = (0, n.jsx)(u, {
                    ref: b,
                    placement: m,
                    progress: p
                }), o[4] = m, o[5] = p, o[6] = r) : r = o[6], r
            },
            b: u
        })
    }),
    POjP: (function(e, t, a) {
        let n = [
            [0, 3],
            [.1, 25],
            [.55, 58],
            [.85, 88],
            [1, 90]
        ];
        a.d(t, {}, {
            a: function(e) {
                let t = Math.max(0, e / 45e3);
                for (let e = 1; e < n.length; e += 1) {
                    let a = n[e - 1],
                        i = n[e];
                    if (t <= i[0]) {
                        let e = (t - a[0]) / (i[0] - a[0]);
                        return Math.floor(a[1] + e * (i[1] - a[1]))
                    }
                }
                return Math.min(99, Math.floor(90 + 10 * (1 - Math.exp(-1.5 * (t - 1)))))
            }
        })
    }),
    ghCJ: (function(e, t, a) {
        a.d(t, {
            a: () => g
        });
        var n = a("ABep"),
            i = a("QosV"),
            r = a("on57"),
            l = a("zd8w"),
            o = a("Wf1j"),
            s = a("aqd9"),
            d = a("T1PX"),
            c = a("a6Zv"),
            u = a("eYeG");
        let f = {
            "image-preview": {
                spacing: 22,
                radius: 2
            },
            playground: {
                spacing: 14,
                radius: 1.5
            },
            thumbnail: {
                spacing: 6,
                radius: .75
            }
        };

        function g(e) {
            let t, a, l, s, d, c, f = (0, i.c)(25),
                {
                    ariaLabel: g,
                    background: h,
                    generationStartedAtMs: p,
                    isAnimating: v,
                    presentation: b,
                    previewSrc: y
                } = e,
                x = void 0 === v || v,
                w = void 0 === b ? "default" : b,
                _ = (0, o.a)(),
                S = "fill" === w || "image-preview" === w,
                k = w;
            "single" === k ? k = "playground" : "fill" === k && (k = "default"), f[0] !== g || f[1] !== _ ? (t = g ?? _.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image..."
            }), f[0] = g, f[1] = _, f[2] = t) : t = f[2];
            let C = null != y ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
                M = null == y && "surface" === (void 0 === h ? "surface" : h) && ("single" === w ? "bg-surface-secondary" : "dark:bg-secondary-ghost-hover bg-primary-soft-active");
            f[3] !== S || f[4] !== w || f[5] !== C || f[6] !== M ? (a = (0, r.b)("overflow-clip", C, M, S ? "absolute inset-0 size-full" : ["relative aspect-square", "thumbnail" === w ? "rounded-lg" : "rounded-2xl", "single" === w ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]"]), f[3] = S, f[4] = w, f[5] = C, f[6] = M, f[7] = a) : a = f[7], f[8] !== w || f[9] !== y ? (l = null != y ? (0, n.jsx)("img", {
                alt: "",
                className: (0, r.b)("pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70", "image-preview" === w ? "blur-md" : "scale-125 blur-3xl"),
                src: y,
                referrerPolicy: "no-referrer"
            }) : null, f[8] = w, f[9] = y, f[10] = l) : l = f[10];
            let j = null != y;
            return f[11] !== k || f[12] !== x || f[13] !== j ? (s = (0, n.jsx)(m, {
                isAnimating: x,
                overImage: j,
                presentation: k
            }), f[11] = k, f[12] = x, f[13] = j, f[14] = s) : s = f[14], f[15] !== S || f[16] !== p || f[17] !== x ? (d = null != p ? (0, n.jsx)(u.a, {
                generationStartedAtMs: p,
                isActive: x,
                placement: S ? "top" : "bottom"
            }, p) : null, f[15] = S, f[16] = p, f[17] = x, f[18] = d) : d = f[18], f[19] !== s || f[20] !== d || f[21] !== t || f[22] !== a || f[23] !== l ? (c = (0, n.jsxs)("div", {
                "aria-busy": !0,
                "aria-label": t,
                className: a,
                children: [l, s, d]
            }), f[19] = s, f[20] = d, f[21] = t, f[22] = a, f[23] = l, f[24] = c) : c = f[24], c
        }

        function m(e) {
            let t, a, o, u, g, m = (0, i.c)(17),
                {
                    isAnimating: y,
                    overImage: x,
                    presentation: w
                } = e,
                _ = (0, d.a)(),
                S = (0, c.a)(),
                k = (0, l.useRef)(null),
                C = (0, l.useRef)(null);
            m[0] !== y || m[1] !== S || m[2] !== w || m[3] !== _ ? (t = () => {
                if (!y) return;
                let e = k.current,
                    t = C.current,
                    a = t?.getContext("2d");
                if (null == e || null == t || null == a) return;
                let n = 2 * Math.PI,
                    i = getComputedStyle(e).color || (S ? "white" : "black"),
                    r = (e, t) => e + (_ ? .5 : Math.random()) * (t - e),
                    l = e => 1.2 * e * r(1, 1.35),
                    o = {
                        durations: {
                            offsetX1: l(4500),
                            offsetY1: l(6330),
                            offsetX2: l(5600),
                            offsetY2: l(5750),
                            fieldSize1: l(3600),
                            fieldSize2: l(2400)
                        },
                        phases: {
                            offsetX1: r(0, 1),
                            offsetY1: r(0, 1),
                            offsetX2: r(0, 1),
                            offsetY2: r(0, 1),
                            fieldSize1: r(0, 1),
                            fieldSize2: r(0, 1)
                        },
                        bounds: {
                            x1Start: r(.1, .32),
                            x1End: r(.68, .9),
                            y1Start: r(.1, .32),
                            y1End: r(.68, .9),
                            x2Start: r(.68, .9),
                            x2End: r(.1, .32),
                            y2Start: r(.68, .9),
                            y2End: r(.1, .32)
                        },
                        fieldSizeRange: {
                            firstStart: r(.42, .52),
                            firstEnd: r(.62, .75),
                            secondStart: r(.5, .62),
                            secondEnd: r(.74, .9)
                        }
                    },
                    d = null,
                    c = 0,
                    u = null,
                    g = !0,
                    m = null,
                    x = !1,
                    M = !1,
                    j = t.ownerDocument,
                    I = r => {
                        var l, s, y, x, S, k, C, M, j, T, P, E;
                        if (!_ && 0 !== c && r - c < 33.333333333333336) {
                            d = requestAnimationFrame(I);
                            return
                        }
                        if (c = r, null == m && (m = r), (g || null == u) && (() => {
                                let a = "image-preview" === w ? {
                                        width: e.clientWidth,
                                        height: e.clientHeight
                                    } : e.getBoundingClientRect(),
                                    n = Math.max(0, Math.floor(a.width)),
                                    i = Math.max(0, Math.floor(a.height));
                                if (0 === n || 0 === i) {
                                    u = null, g = !1;
                                    return
                                }
                                let r = Math.max(1, window.devicePixelRatio || 1),
                                    l = Math.floor(n * r),
                                    o = Math.floor(i * r);
                                (t.width !== l || t.height !== o) && (t.width = l, t.height = o);
                                let s = "default" === w ? Math.max(1, 12 / r) : f[w].spacing,
                                    d = Math.max(1, Math.floor(n / s)),
                                    c = Math.max(1, Math.floor(i / s)),
                                    m = (n - (d - 1) * s) * .5,
                                    h = (i - (c - 1) * s) * .5,
                                    p = new Float32Array(d),
                                    v = new Float32Array(c),
                                    b = new Float32Array(d),
                                    y = new Float32Array(c);
                                for (let e = 0; e < d; e += 1) p[e] = m + e * s, b[e] = 1 === d ? .5 : e / (d - 1);
                                for (let e = 0; e < c; e += 1) v[e] = h + e * s, y[e] = 1 === c ? .5 : e / (c - 1);
                                u = {
                                    width: n,
                                    height: i,
                                    dpr: r,
                                    spacing: s,
                                    xPositions: p,
                                    yPositions: v,
                                    xNormals: b,
                                    yNormals: y
                                }, g = !1
                            })(), null == u) {
                            d = null;
                            return
                        }
                        let A = _ ? 0 : r - m,
                            z = (e, t) => {
                                let a;
                                return (a = (A / e + t) % 1) <= .5 ? 2 * a : 2 - 2 * a
                            },
                            q = (l = o.bounds.x1Start, s = o.bounds.x1End, l + (s - l) * b(z(o.durations.offsetX1, o.phases.offsetX1))),
                            F = (y = o.bounds.y1Start, x = o.bounds.y1End, y + (x - y) * v(z(o.durations.offsetY1, o.phases.offsetY1))),
                            N = (S = o.bounds.x2Start, k = o.bounds.x2End, S + (k - S) * b(z(o.durations.offsetX2, o.phases.offsetX2))),
                            R = (C = o.bounds.y2Start, M = o.bounds.y2End, C + (M - C) * v(z(o.durations.offsetY2, o.phases.offsetY2))),
                            O = .78 * (j = o.fieldSizeRange.firstStart, T = o.fieldSizeRange.firstEnd, j + (T - j) * v(z(o.durations.fieldSize1, o.phases.fieldSize1))),
                            H = .78 * (P = o.fieldSizeRange.secondStart, E = o.fieldSizeRange.secondEnd, P + (E - P) * v(z(o.durations.fieldSize2, o.phases.fieldSize2)));
                        a.save(), a.setTransform(u.dpr, 0, 0, u.dpr, 0, 0), a.clearRect(0, 0, u.width, u.height), a.fillStyle = i;
                        let D = "default" === w ? Math.max(.55, .5 * u.spacing * .16) : f[w].radius;
                        for (let e = 0; e < u.yPositions.length; e += 1) {
                            let t = u.yPositions[e],
                                i = u.yNormals[e];
                            for (let e = 0; e < u.xPositions.length; e += 1) {
                                let r = u.xPositions[e],
                                    l = u.xNormals[e],
                                    o = Math.pow(h((1 - p(0, O, Math.hypot(l - q, i - F))) * 1.2 + (1 - p(0, H, Math.hypot(l - N, i - R))) * .82), 1.18);
                                o <= .03 || (a.globalAlpha = o, a.beginPath(), a.moveTo(r + D, t), a.arc(r, t, D, 0, n), a.fill())
                            }
                        }
                        a.restore(), d = _ ? null : requestAnimationFrame(I)
                    },
                    T = new ResizeObserver(() => {
                        g = !0, x && null == d && (d = requestAnimationFrame(I))
                    });
                T.observe(e);
                let P = () => {
                        (x = M && "hidden" !== j.visibilityState) ? null == d && (d = requestAnimationFrame(I)): null != d && (cancelAnimationFrame(d), d = null)
                    },
                    E = (0, s.a)(e, e => {
                        M = e, P()
                    });
                return j.addEventListener("visibilitychange", P), () => {
                    E?.(), j.removeEventListener("visibilitychange", P), null != d && cancelAnimationFrame(d), T.disconnect()
                }
            }, m[0] = y, m[1] = S, m[2] = w, m[3] = _, m[4] = t) : t = m[4], m[5] !== y || m[6] !== S || m[7] !== x || m[8] !== w || m[9] !== _ ? (a = [y, S, x, w, _], m[5] = y, m[6] = S, m[7] = x, m[8] = w, m[9] = _, m[10] = a) : a = m[10], (0, l.useEffect)(t, a);
            let M = (x || "image-preview" === w) && "overImage-KmHrEc",
                j = (!y || _) && "reducedMotion-ttnr0y";
            return m[11] !== M || m[12] !== j ? (o = (0, r.b)("dots-avXrIV", M, j), m[11] = M, m[12] = j, m[13] = o) : o = m[13], m[14] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, n.jsx)("canvas", {
                ref: C,
                "aria-hidden": !0,
                className: "block h-full w-full"
            }), m[14] = u) : u = m[14], m[15] !== o ? (g = (0, n.jsx)("div", {
                ref: k,
                className: o,
                children: u
            }), m[15] = o, m[16] = g) : g = m[16], g
        }

        function h(e) {
            return Math.min(1, Math.max(0, e))
        }

        function p(e, t, a) {
            let n = h((a - e) / (t - e));
            return n * n * (3 - 2 * n)
        }

        function v(e) {
            return e * e * (3 - 2 * e)
        }

        function b(e) {
            return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
        }
    })
};