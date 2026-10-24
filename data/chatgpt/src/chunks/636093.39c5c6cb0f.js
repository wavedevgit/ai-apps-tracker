export const __rspack_esm_id = 636093;
export const __rspack_esm_ids = [636093];
export const __webpack_modules__ = {
    fBor: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => y
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
            b = n("UejO");

        function v() {
            let e, t, a, r, v = (0, i.c)(6),
                C = (0, o.y)(s.a);
            return v[0] !== C ? (e = () => {
                let e = null;
                return C.watch(t => {
                    let a = t.get(f.c),
                        i = t.get(d.f),
                        o = t.get(b.b),
                        r = t.get(l.a, o?.hostId == null ? o?.conversationId ?? null : null),
                        s = t.get(h.i),
                        c = t.get(u.j.tabs$),
                        v = "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId);
                    if (null == a || !i || v || e === a || (e = a, (0, b.a)(o, t.value, r, t.value.clientThreadId) || s || c.length > 0)) return;
                    let C = (0, f.a)(a);
                    if (!C?.isOpen) return;
                    let y = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return y ? null : Promise.all([t.query.fetch(n, C.projectId), t.get(m.b) ? t.query.fetch(m.c, C.projectId) : null])
                    }).then(e => {
                        if (null == e) return;
                        let [n, i] = e, o = (0, f.a)(a);
                        y || null == n || i?.supports_chatgpt_preview === !1 || !o?.isOpen || o.projectId !== C.projectId || "active" !== n.status || null == n.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId) || (0, g.a)(t, {
                            type: "appgen-app",
                            projectId: n.id,
                            title: n.title,
                            url: n.current_live_url
                        })
                    }, x), () => {
                        y = !0
                    }
                })
            }, t = [C], v[0] = C, v[1] = e, v[2] = t) : (e = v[1], t = v[2]), (0, c.useEffect)(e, t), v[3] !== C ? (a = () => {
                let e = C.get(h.j),
                    t = null;
                return C.watch(n => {
                    let a = n.get(h.j),
                        i = n.get(u.j.activeTab$),
                        o = n.get(f.c);
                    (a !== e || null == t && null != o) && null != o && i?.tabId.startsWith("site-preview:") && (0, f.b)(o, i.tabId.slice(13), a), e = a, t = o
                })
            }, r = [C], v[3] = C, v[4] = a, v[5] = r) : (a = v[4], r = v[5]), (0, c.useEffect)(a, r), null
        }

        function x() {}
        let C = (0, r.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function y() {
            let e, t, n, r, c = (0, i.c)(12),
                d = (0, o.y)(s.a),
                u = (0, o.z)(b.b),
                h = (0, o.x)(l.a, u?.hostId == null ? u?.conversationId ?? null : null);
            if ("home" !== d.value.routeKind && "chatgpt-thread" !== d.value.routeKind && "local-thread" !== d.value.routeKind) return null;
            c[0] !== u || c[1] !== h || c[2] !== d ? (e = u?.url != null && (0, b.a)(u, d.value, h, d.value.clientThreadId), c[0] = u, c[1] = h, c[2] = d, c[3] = e) : e = c[3];
            let p = e;
            return c[4] !== d ? (t = "home" !== d.value.routeKind ? (0, a.jsx)(v, {}) : null, c[4] = d, c[5] = t) : t = c[5], c[6] !== p || c[7] !== u ? (n = p ? (0, a.jsx)(C, {
                pending: u
            }) : null, c[6] = p, c[7] = u, c[8] = n) : n = c[8], c[9] !== t || c[10] !== n ? (r = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), c[9] = t, c[10] = n, c[11] = r) : r = c[11], r
        }
    }),
    rjva: (function(e, t, n) {
        n.d(t, {
            a: () => X
        });
        var a = n("ABep"),
            i = n("QosV"),
            o = n("l2oX"),
            l = n("iTtm"),
            r = n("zd8w"),
            s = n("v7qY"),
            c = n("Wf1j"),
            d = n("Q2Qp"),
            u = n("QcW8"),
            h = n("ZU27"),
            p = n("wD9O"),
            g = n("nKJ6"),
            m = n("SGIb"),
            f = n("vi3X"),
            b = n("O9Pc"),
            v = n("fDIZ"),
            x = n("jEN2"),
            C = n("wqvF"),
            y = n("giDA"),
            j = n("yC2B"),
            w = n("HnT3"),
            k = n("tSEg"),
            _ = n("El6m"),
            E = n("dN0a"),
            M = n("dt6g"),
            S = n("WwnD");
        n("G7Oa");
        var T = n("q1q2"),
            I = n("VwGH"),
            O = n("on57"),
            D = n("W5pg"),
            N = n("IPUh"),
            P = n("qjLK"),
            R = n("I7bK");
        n("eFp2");
        var L = n("oH56");
        n("EpL9");
        var z = n("DUYS"),
            A = n("gbrq"),
            q = n("bIvi"),
            B = n("pZMh");

        function F(e) {
            let t, n, o, c, d, u, p, g, m, f, b, v = (0, i.c)(33),
                {
                    destination: x,
                    direction: C,
                    surface: y
                } = e,
                {
                    bottomPanelTargetHeight: j,
                    contentPaneWidthRatio: w,
                    mainContentWidth: k
                } = (0, R.g)(),
                _ = (0, r.useContext)(L.a),
                E = (0, l.z)(B.c),
                M = (0, l.z)(B.g),
                S = y ?? (_?.chatTabDragState != null ? "chat" : "content"),
                F = E ? "content" === S && _?.dragState?.draggedTab.tabId === M : "chat" === S,
                H = (0, r.useContext)(P.a),
                Q = (0, l.z)(A.d),
                K = (0, l.z)(h.a.tabIds$),
                V = _?.dragState?.sourceController === h.a && 1 === K.length;
            v[0] !== w || v[1] !== k ? (t = [k, w], v[0] = w, v[1] = k, v[2] = t) : t = v[2], v[3] !== F ? (n = e => {
                let [t, n] = e, a = Math.min(t, (0, z.e)(n, t, "unified"));
                return F ? t - a : a
            }, v[3] = F, v[4] = n) : n = v[4];
            let U = (0, D.a)(t, n);
            v[5] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, T.e)(W), (0, T.g)({
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
                whileElementsMounted: I.b
            }, v[5] = o) : o = v[5];
            let {
                floatingStyles: Z,
                refs: X
            } = (0, T.h)(o);
            v[6] !== X ? (c = e => {
                X.setReference(e)
            }, v[6] = X, v[7] = c) : c = v[7];
            let Y = (0, q.a)(c);
            v[8] !== X ? (d = e => {
                X.setFloating(e)
            }, v[8] = X, v[9] = d) : d = v[9];
            let G = (0, q.a)(d),
                J = "bottom" === x && "inset-x-0 bottom-0",
                ee = "left" === x && "inset-y-0 left-0",
                et = "right" === x && "inset-y-0 right-0";
            v[10] !== J || v[11] !== ee || v[12] !== et ? (u = (0, O.b)("pointer-events-none absolute", J, ee, et), v[10] = J, v[11] = ee, v[12] = et, v[13] = u) : u = v[13];
            let en = "bottom" === x ? void 0 : Q && !V ? H ?? void 0 : void 0,
                ea = "bottom" === x ? j : void 0,
                ei = "bottom" === x ? void 0 : U;
            return v[14] !== en || v[15] !== ea || v[16] !== ei ? (p = {
                bottom: en,
                height: ea,
                width: ei
            }, v[14] = en, v[15] = ea, v[16] = ei, v[17] = p) : p = v[17], v[18] !== Y || v[19] !== p || v[20] !== u ? (g = (0, a.jsx)(N.a.div, {
                ref: Y,
                "aria-hidden": !0,
                className: u,
                dir: "ltr",
                style: p
            }), v[18] = Y, v[19] = p, v[20] = u, v[21] = g) : g = v[21], v[22] !== x ? (m = (0, a.jsx)($, {
                destination: x
            }), v[22] = x, v[23] = m) : m = v[23], v[24] !== x || v[25] !== C || v[26] !== Z || v[27] !== G || v[28] !== m ? (f = (0, s.createPortal)((0, a.jsx)("div", {
                ref: G,
                "aria-hidden": !0,
                className: "pointer-events-none z-50",
                "data-unified-workspace-drop-indicator": x,
                dir: C,
                style: Z,
                children: m
            }), document.body), v[24] = x, v[25] = C, v[26] = Z, v[27] = G, v[28] = m, v[29] = f) : f = v[29], v[30] !== g || v[31] !== f ? (b = (0, a.jsxs)(a.Fragment, {
                children: [g, f]
            }), v[30] = g, v[31] = f, v[32] = b) : b = v[32], b
        }

        function W(e) {
            let {
                rects: t
            } = e;
            return -t.reference.height
        }

        function $(e) {
            let t, n, o, l = (0, i.c)(11),
                {
                    destination: r
                } = e,
                s = (0, p.c)(),
                c = "bottom" === r && "border-t",
                d = "left" === r && "border-r",
                u = "right" === r && "border-l";
            l[0] !== c || l[1] !== d || l[2] !== u ? (t = (0, O.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", c, d, u), l[0] = c, l[1] = d, l[2] = u, l[3] = t) : t = l[3];
            let h = `calc(100% / ${s})`,
                g = `scale(${s})`,
                m = `calc(100% / ${s})`;
            return l[4] !== h || l[5] !== g || l[6] !== m ? (n = {
                height: h,
                transform: g,
                transformOrigin: "top left",
                width: m
            }, l[4] = h, l[5] = g, l[6] = m, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (o = (0, a.jsx)("div", {
                className: t,
                style: n
            }), l[8] = t, l[9] = n, l[10] = o) : o = l[10], o
        }
        var H = n("erBs"),
            Q = n("kHG0"),
            K = n("kmKV"),
            V = n("RN8F"),
            U = n("abd8"),
            Z = n("GMTh");

        function X(e) {
            let t, n, T, I, O, D, N = (0, i.c)(55),
                {
                    children: P,
                    composerOnly: R,
                    forceExpanded: L,
                    placement: z,
                    showHeader: A,
                    showComposerDivider: q,
                    isHidden: B,
                    persistPresentation: W,
                    reserveContent: $,
                    reserveFullComposerHeight: K,
                    onPresentationChange: X,
                    title: J,
                    titleContent: ee,
                    statusState: et,
                    titleStatusState: en,
                    hasElicitation: ea,
                    notifications: ei,
                    renderTranscript: eo,
                    hasTranscript: el,
                    pendingFormId: er
                } = e,
                es = void 0 !== R && R,
                ec = void 0 !== L && L,
                ed = void 0 === A ? !es : A,
                eu = void 0 === q ? !es : q,
                eh = void 0 === W || W,
                ep = void 0 === er ? w.a : er,
                eg = (0, l.y)(k.a),
                em = "pane" === (void 0 === z ? "floating" : z),
                ef = (0, c.a)(),
                {
                    isHidden: eb
                } = (0, Z.a)(em ? "embedded" : "content"),
                ev = (0, l.z)(h.j.activeTab$),
                ex = void 0 !== B && B || eb,
                eC = (0, r.useContext)(d.a),
                ey = (0, r.useContext)(_.b),
                ej = (0, r.useContext)(_.a),
                ew = (0, r.useContext)(b.a),
                ek = (0, r.useContext)(v.a),
                e_ = (0, r.useContext)(f.a),
                eE = (0, r.useContext)(y.a),
                eM = (0, p.c)(),
                [eS, eT] = (0, r.useState)(null),
                eI = !(0, l.z)(E.n),
                eO = (0, l.z)(ep),
                eD = (0, l.z)(eh ? V.a : void 0);
            es && !ed && (eD = "compact");
            let eN = (0, l.z)(null == eO && (ea ?? _.c));
            N[0] !== ev || N[1] !== em ? (t = em ? null : (0, g.getThreadBrowserTabIdFromPanelTab)(ev), N[0] = ev, N[1] = em, N[2] = t) : t = N[2];
            let eP = t,
                eR = void 0 !== K && K || ev?.tabType.kind === "latex-document" || ev?.tabType.kind === "image-preview",
                [eL, ez] = (0, r.useState)(null);
            N[3] !== eC || N[4] !== eg ? (n = e => {
                if (null == e || !(e instanceof MouseEvent) || "pointercancel" === e.type || null == eC || null == eg.get(u.Z) || null == eg.get(h.j.activeTab$) || e.clientY < 0 || e.clientY > window.innerHeight) return null;
                let t = eC.getBoundingClientRect();
                return e.clientX <= t.left + 24 ? "left" : e.clientX >= t.right - 24 ? "right" : null
            }, N[3] = eC, N[4] = eg, N[5] = n) : n = N[5];
            let eA = n;
            N[6] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, a.jsx)("div", {
                ref: e => {
                    null != e && eT(e)
                },
                className: "contents"
            }), N[6] = T) : T = N[6];
            let eq = em || ex;
            return N[7] !== ev || N[8] !== ef || N[9] !== em || N[10] !== eC || N[11] !== eL ? (I = em || null == eC || null == eL || null == ev ? null : (0, s.createPortal)((0, a.jsx)(F, {
                destination: eL,
                direction: (0, j.a)(ef.locale),
                surface: "chat"
            }), eC), N[7] = ev, N[8] = ef, N[9] = em, N[10] = eC, N[11] = eL, N[12] = I) : I = N[12], N[13] !== eP || N[14] !== ev?.tabId || N[15] !== ev?.tabType || N[16] !== P || N[17] !== es || N[18] !== ec || N[19] !== eA || N[20] !== eN || N[21] !== el || N[22] !== e_ || N[23] !== ek || N[24] !== eE || N[25] !== ej || N[26] !== ey || N[27] !== ef || N[28] !== ex || N[29] !== eI || N[30] !== em || N[31] !== eC || N[32] !== ei || N[33] !== X || N[34] !== eS || N[35] !== eO || N[36] !== eh || N[37] !== eo || N[38] !== $ || N[39] !== eg || N[40] !== eR || N[41] !== eu || N[42] !== ed || N[43] !== et || N[44] !== eD || N[45] !== ew || N[46] !== J || N[47] !== ee || N[48] !== en || N[49] !== eM ? (O = e => (0, a.jsx)(o.a, {
                transformPagePoint: e => ({
                    x: e.x / eM,
                    y: e.y / eM
                }),
                children: (0, a.jsx)(_.b, {
                    value: em ? ey : {
                        activeBrowserTabId: eP,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            eg.get(h.j.activeTab$)?.tabId === ev?.tabId && (eg.get(E.j) || (0, E.h)(eg, {
                                prefersReducedMotion: !0
                            }), (0, x.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, a.jsx)(_.a, {
                        value: em ? ej : "expanded",
                        children: (0, a.jsx)(m.a, {
                            dockThreadKey: U.c,
                            titleContent: ee,
                            statusState: et,
                            titleStatusState: en,
                            hasTranscript: el,
                            pendingFormId: eO,
                            notifications: ei,
                            containerSize: e,
                            renderMenu: Y,
                            forceExpanded: ec || eN && !es,
                            isHidden: em || ex,
                            isMinimized: eI,
                            onDragOver: es ? void 0 : e => {
                                let t = eA(e);
                                return ez(t), null != t
                            },
                            onDragEnd: es ? void 0 : e => {
                                ez(null);
                                let t = eA(e);
                                return null != t && (0, M.a)(eg, "tab_drag", () => (0, S.b)(eg, eg.get(H.b).chat, t))
                            },
                            presentation: eD,
                            showHeader: ed,
                            showComposerDivider: eu,
                            background: es && !ed ? void 0 : "panel",
                            onPresentationChange: e => {
                                eh && eg.set(V.a, e), X?.(e)
                            },
                            onMinimizedChange: e => {
                                (e ? E.r : E.h)(eg, {
                                    prefersReducedMotion: !0
                                })
                            },
                            title: J ?? ef.formatMessage({
                                id: "quickChat.mainConversation",
                                defaultMessage: "Chat",
                                description: "Fallback title for the task's main conversation in the floating chat"
                            }),
                            renderTranscript: null == eo ? void 0 : (e, t) => eo({
                                isVisible: t
                            }),
                            children: e => (0, a.jsx)(b.a, {
                                value: em || null == eP ? ew : eC,
                                children: (0, a.jsx)(C.a, {
                                    target: em ? eS : null,
                                    children: (0, a.jsx)(G, {
                                        mainContentElement: eC,
                                        presentation: e,
                                        paneContext: em ? {
                                            transition: ey,
                                            escapeHandler: ek,
                                            bannerTarget: e_,
                                            overlayOwner: eE
                                        } : void 0,
                                        reserveFullComposerHeight: eR,
                                        reserveContent: $ ?? (null == eP && ev?.tabType.kind !== "mcp-app" && ev?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof P ? P(em ? void 0 : e) : P
                                    })
                                })
                            })
                        })
                    })
                })
            }), N[13] = eP, N[14] = ev?.tabId, N[15] = ev?.tabType, N[16] = P, N[17] = es, N[18] = ec, N[19] = eA, N[20] = eN, N[21] = el, N[22] = e_, N[23] = ek, N[24] = eE, N[25] = ej, N[26] = ey, N[27] = ef, N[28] = ex, N[29] = eI, N[30] = em, N[31] = eC, N[32] = ei, N[33] = X, N[34] = eS, N[35] = eO, N[36] = eh, N[37] = eo, N[38] = $, N[39] = eg, N[40] = eR, N[41] = eu, N[42] = ed, N[43] = et, N[44] = eD, N[45] = ew, N[46] = J, N[47] = ee, N[48] = en, N[49] = eM, N[50] = O) : O = N[50], N[51] !== eq || N[52] !== I || N[53] !== O ? (D = (0, a.jsxs)(a.Fragment, {
                children: [T, (0, a.jsx)(Q.a, {
                    isHidden: eq,
                    overlay: I,
                    children: O
                })]
            }), N[51] = eq, N[52] = I, N[53] = O, N[54] = D) : D = N[54], D
        }

        function Y(e) {
            return (0, a.jsx)(K.a, {
                ...e
            })
        }

        function G(e) {
            let t, n, o, s, c, d, u, h, p, g, m, b = (0, i.c)(38),
                {
                    children: x,
                    mainContentElement: C,
                    presentation: j,
                    paneContext: w,
                    reserveContent: M,
                    reserveFullComposerHeight: S
                } = e,
                T = (0, l.y)(k.a),
                I = (0, r.useRef)(null),
                O = (0, r.useContext)(_.b),
                D = (0, r.useContext)(v.a),
                N = (0, r.useContext)(f.a),
                P = (0, r.useContext)(y.a),
                {
                    activeBrowserTabId: R
                } = O,
                L = null != w,
                {
                    isCompact: z,
                    isDockedTop: A,
                    isHidden: q,
                    isMinimized: B,
                    isMoving: F,
                    composerContentHeight: W,
                    dockedReservePx: $
                } = j,
                H = !M || q || B ? 0 : Math.max(118, z ? $ : 0, S ? W + 118 - 102 : 0),
                Q = A && z && $ > 0 ? H : 0,
                [K, V] = (0, r.useState)(!B);
            (z || B) && !B !== K && V(!B);
            let U = M && !q && K ? E.b : 0;
            b[0] !== R || b[1] !== L ? (t = () => {
                if (L || null == R) return;
                let e = I.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && I.current?.contains(e) && e.blur()
            }, n = [R, L], b[0] = R, b[1] = L, b[2] = t, b[3] = n) : (t = b[2], n = b[3]), (0, r.useLayoutEffect)(t, n), b[4] !== U || b[5] !== A || b[6] !== q || b[7] !== B || b[8] !== L || b[9] !== C || b[10] !== H || b[11] !== T || b[12] !== Q ? (o = () => {
                if (!L && null != C) return C.style.setProperty(E.a, A ? `${U}px 0 0` : `0 0 ${U}px`), C.style.setProperty(E.c, `${q||B||A?0:102}px`), C.style.setProperty(E.d, `${A?0:H}px`), C.style.setProperty(E.g, `${A?H:0}px`), (0, E.o)(T, A ? 0 : H), T.set(E.l, Q), () => {
                    C.style.removeProperty(E.a), C.style.removeProperty(E.c), C.style.removeProperty(E.d), C.style.removeProperty(E.g), (0, E.o)(T, 0), T.set(E.l, 0)
                }
            }, s = [U, L, A, q, B, C, H, T, Q], b[4] = U, b[5] = A, b[6] = q, b[7] = B, b[8] = L, b[9] = C, b[10] = H, b[11] = T, b[12] = Q, b[13] = o, b[14] = s) : (o = b[13], s = b[14]), (0, r.useLayoutEffect)(o, s), b[15] !== W || b[16] !== z || b[17] !== B || b[18] !== F || b[19] !== L || b[20] !== T ? (c = () => {
                let e = I.current;
                if (L || null == e) return;
                let t = () => {
                    let t = null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    T.set(E.i, !z || B || F || t || W > 102)
                };
                t();
                let n = new MutationObserver(t);
                return n.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    n.disconnect(), T.set(E.i, !1)
                }
            }, d = [W, L, z, B, F, T], b[15] = W, b[16] = z, b[17] = B, b[18] = F, b[19] = L, b[20] = T, b[21] = c, b[22] = d) : (c = b[21], d = b[22]), (0, r.useLayoutEffect)(c, d);
            let Z = null == w ? O : w.transition,
                X = null == w ? D : w.escapeHandler,
                Y = null == w ? N : w.bannerTarget,
                G = null == w ? P : w.overlayOwner,
                J = L ? "contents" : void 0;
            return b[23] !== x || b[24] !== J ? (u = (0, a.jsx)("div", {
                ref: I,
                className: J,
                "data-right-panel-composer-overlay-content": "true",
                children: x
            }), b[23] = x, b[24] = J, b[25] = u) : u = b[25], b[26] !== G || b[27] !== u ? (h = (0, a.jsx)(y.a, {
                value: G,
                children: u
            }), b[26] = G, b[27] = u, b[28] = h) : h = b[28], b[29] !== h || b[30] !== Y ? (p = (0, a.jsx)(f.a, {
                value: Y,
                children: h
            }), b[29] = h, b[30] = Y, b[31] = p) : p = b[31], b[32] !== p || b[33] !== X ? (g = (0, a.jsx)(v.a, {
                value: X,
                children: p
            }), b[32] = p, b[33] = X, b[34] = g) : g = b[34], b[35] !== g || b[36] !== Z ? (m = (0, a.jsx)(_.b, {
                value: Z,
                children: g
            }), b[35] = g, b[36] = Z, b[37] = m) : m = b[37], m
        }
    }),
    kmKV: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            o = n("iTtm"),
            l = n("Qgfj"),
            r = n("Wf1j"),
            s = n("oyxz"),
            c = n("QcW8"),
            d = n("ZU27"),
            u = n("ygO2"),
            h = n("rmk3"),
            p = n("bf6R"),
            g = n("CqQF"),
            m = n("tSEg"),
            f = n("dt6g"),
            b = n("WwnD"),
            v = n("erBs");
        let x = (0, o.c)(m.a, e => {
            let {
                get: t
            } = e;
            return null == t(c.Z) ? "hidden" : null != t(d.j.activeTab$) ? "split" : "tab"
        });

        function C(e) {
            let t, n, r = (0, i.c)(6),
                s = (0, o.y)(m.a),
                c = (0, o.z)(x);
            r[0] !== c || r[1] !== s ? (t = "hidden" === c ? [] : [{
                id: "full-view",
                icon: p.N,
                message: (0, l.e)({
                    id: "quickChat.dock.openTab",
                    defaultMessage: "Open in full view",
                    description: "Opens the existing Chat in a tab that fills the workspace"
                }),
                onSelect: () => {
                    (0, f.a)(s, "context_menu", () => (0, b.c)(s, s.get(v.b).chat, {
                        mode: "full"
                    }))
                }
            }, {
                id: "left",
                icon: p.w,
                enabled: "split" === c,
                message: (0, l.e)({
                    id: "quickChat.dock.left",
                    defaultMessage: "Move to left pane",
                    description: "Moves the floating Chat into the left split pane beside the current content"
                }),
                onSelect: () => {
                    (0, f.a)(s, "context_menu", () => (0, b.b)(s, s.get(v.b).chat, "left"))
                }
            }, {
                id: "right",
                icon: p.y,
                enabled: "split" === c,
                message: (0, l.e)({
                    id: "quickChat.dock.right",
                    defaultMessage: "Move to right pane",
                    description: "Moves the floating Chat into the right split pane beside the current content"
                }),
                onSelect: () => {
                    (0, f.a)(s, "context_menu", () => (0, b.b)(s, s.get(v.b).chat, "right"))
                }
            }], r[0] = c, r[1] = s, r[2] = t) : t = r[2];
            let d = t;
            return r[3] !== d || r[4] !== e ? (n = (0, a.jsx)(y, {
                ...e,
                items: d
            }), r[3] = d, r[4] = e, r[5] = n) : n = r[5], n
        }

        function y(e) {
            let t, n, o, c, d, m, f, b, v, x, C = (0, i.c)(32),
                {
                    contextMenuTrigger: y,
                    isCompact: w,
                    isDragging: k,
                    items: _,
                    open: E,
                    onMinimize: M,
                    onOpenChange: S
                } = e,
                T = (0, r.a)();
            C[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, l.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer",
                description: "Minimizes the floating composer to its compact minimized button"
            }), C[0] = t) : t = C[0], C[1] !== M ? (n = {
                id: "minimize",
                icon: p.Qe,
                message: t,
                onSelect: M,
                selectAfterClose: !0
            }, C[1] = M, C[2] = n) : n = C[2], C[3] !== _ || C[4] !== n ? (o = [..._, n], C[3] = _, C[4] = n, C[5] = o) : o = C[5];
            let I = o;
            if (null != y) {
                let e, t;
                return C[6] !== y ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: y
                }), C[6] = y, C[7] = e) : e = C[7], C[8] !== I || C[9] !== e ? (t = (0, a.jsx)(h.a, {
                    disableNative: !0,
                    items: I,
                    children: e
                }), C[8] = I, C[9] = e, C[10] = t) : t = C[10], t
            }
            let O = !k && void 0,
                D = E || k;
            C[11] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(s.a, {
                id: "quickChat.dock.dragHint",
                defaultMessage: "Drag to move · Click for options",
                description: "Tooltip for the floating Chat grip that can be dragged to move the Chat or clicked to open docking options"
            }), C[11] = c) : c = C[11], C[12] !== T ? (d = T.formatMessage({
                id: "quickChat.dock.menu",
                defaultMessage: "Dock Chat",
                description: "Opens a menu to place Chat in a tab or a left or right split pane"
            }), C[12] = T, C[13] = d) : d = C[13];
            let N = w ? "composer" : "toolbar";
            return C[14] !== S || C[15] !== E ? (m = e => {
                0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || S?.(!E)
            }, C[14] = S, C[15] = E, C[16] = m) : m = C[16], C[17] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)(p.Tc, {}), C[17] = f) : f = C[17], C[18] !== d || C[19] !== N || C[20] !== m ? (b = (0, a.jsx)(u.a, {
                className: "cursor-grab touch-none active:cursor-grabbing",
                "aria-label": d,
                color: "ghostSecondary",
                "data-quick-chat-drag-handle": !0,
                size: N,
                uniform: !0,
                onPointerDown: j,
                onClick: m,
                children: f
            }), C[18] = d, C[19] = N, C[20] = m, C[21] = b) : b = C[21], C[22] !== I || C[23] !== S || C[24] !== E || C[25] !== b ? (v = (0, a.jsx)(h.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: E,
                onOpenChange: S,
                items: I,
                children: b
            }), C[22] = I, C[23] = S, C[24] = E, C[25] = b, C[26] = v) : v = C[26], C[27] !== E || C[28] !== v || C[29] !== O || C[30] !== D ? (x = (0, a.jsx)(g.a, {
                open: O,
                triggerPopupOpen: E,
                disableHoverOpen: D,
                closeOnTriggerClick: !0,
                tooltipContent: c,
                children: v
            }), C[27] = E, C[28] = v, C[29] = O, C[30] = D, C[31] = x) : x = C[31], x
        }

        function j(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {
            a: () => C,
            b: () => y
        })
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            i = n.n(a),
            o = n("iTtm"),
            l = n("tSEg"),
            r = n("wrxv");

        function s(e) {
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
                        id: l,
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
        n.d(t, {
            a: () => s
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => y
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
            b = n("qVxm"),
            v = n("a6Zv"),
            x = n("eLmE");

        function C(e) {
            let t, n, r, c, d, C, y, j = (0, i.c)(19),
                {
                    hostId: w,
                    onClose: k,
                    rateLimitStatus: _
                } = e,
                E = (0, o.y)(u.a),
                M = (0, v.a)(),
                S = (0, o.x)(x.b, w),
                T = _.rate_limit_upsell;
            if (!S || null == T) return null;
            let I = !M && "-mb-6";
            j[0] !== I ? (t = (0, p.b)("block w-full scale-105 object-cover", I), j[0] = I, j[1] = t) : t = j[1];
            let O = M ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return j[2] !== t || j[3] !== O ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: O
                })
            }), j[2] = t, j[3] = O, j[4] = n) : n = j[4], j[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(g.e, {
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
                    subtitle: (0, a.jsx)(g.d, {
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
            }), j[7] = T.ctas, j[8] = k, j[9] = E, j[10] = d) : d = j[10], j[11] !== T || j[12] !== _ || j[13] !== d ? (C = (0, a.jsxs)(m.b, {
                children: [c, (0, a.jsx)(m.e, {
                    className: "items-center",
                    children: (0, a.jsx)(b.a, {
                        banner: T,
                        rateLimitStatus: _,
                        renderContent: d
                    })
                })]
            }), j[11] = T, j[12] = _, j[13] = d, j[14] = C) : C = j[14], j[15] !== k || j[16] !== n || j[17] !== C ? (y = (0, a.jsxs)(g.b, {
                open: !0,
                size: "default",
                onOpenChange: k,
                children: [n, C]
            }), j[15] = k, j[16] = n, j[17] = C, j[18] = y) : y = j[18], y
        }

        function y(e) {
            let t, n, p, g, m = (0, i.c)(7),
                {
                    hostId: f
                } = e,
                b = (0, o.y)(u.a);
            return (0, o.x)(x.b, f) ? (m[0] !== f || m[1] !== b ? (t = () => {
                (0, h.a)(b, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = b.query.getData(d.c);
                if (null != e) {
                    (0, c.f)(b, C, {
                        hostId: f,
                        rateLimitStatus: e
                    }), (0, h.a)(b, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, h.a)(b, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, m[0] = f, m[1] = b, m[2] = t) : t = m[2], m[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("span", {
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
            o = n("lCwt"),
            l = n("oyxz"),
            r = n("bf6R"),
            s = n("MRlq");

        function c(e) {
            let t, n, c, d, u, h, p, g, m, f = (0, i.c)(31),
                {
                    restored: b,
                    restoring: v,
                    deleting: x,
                    onDelete: C,
                    onUnarchive: y,
                    onDone: j
                } = e,
                w = void 0 !== x && x;
            f[0] !== v ? (t = v ? (0, a.jsx)(l.a, {
                id: "localConversation.archived.restoringDescription",
                defaultMessage: "Restoring this chat and its workspace…",
                description: "Progress message while an archived task is being restored"
            }) : null, f[0] = v, f[1] = t) : t = f[1], f[2] !== b || f[3] !== v ? (n = !v && b ? (0, a.jsx)(l.a, {
                id: "localConversation.archived.restoredDescription",
                defaultMessage: "This chat has been restored",
                description: "Confirmation shown before leaving an archived task preview"
            }) : null, f[2] = b, f[3] = v, f[4] = n) : n = f[4], f[5] !== b || f[6] !== v ? (c = v || b ? null : (0, a.jsx)(l.a, {
                id: "localConversation.archived.previewDescription",
                defaultMessage: "This chat is archived. To continue, unarchive it first",
                description: "Explanation displayed beneath a read-only archived task preview"
            }), f[5] = b, f[6] = v, f[7] = c) : c = f[7], f[8] !== t || f[9] !== n || f[10] !== c ? (d = (0, a.jsxs)("span", {
                className: "text-sm text-secondary select-none",
                children: [t, n, c]
            }), f[8] = t, f[9] = n, f[10] = c, f[11] = d) : d = f[11], f[12] !== w || f[13] !== C || f[14] !== b || f[15] !== v ? (u = b || null == C ? null : (0, a.jsx)(o.a, {
                color: "danger",
                variant: "solid",
                disabled: v,
                loading: w,
                size: "lg",
                onClick: C,
                children: (0, a.jsx)(l.a, {
                    ...s.a.delete
                })
            }), f[12] = w, f[13] = C, f[14] = b, f[15] = v, f[16] = u) : u = f[16];
            let k = b ? j : y;
            return f[17] !== b || f[18] !== v ? (h = b && !v ? (0, a.jsx)(l.a, {
                id: "localConversation.archived.previewDone",
                defaultMessage: "Done",
                description: "Leaves Archive with the restored task selected"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(r.f, {}), (0, a.jsx)(l.a, {
                    ...s.a.unarchive
                })]
            }), f[17] = b, f[18] = v, f[19] = h) : h = f[19], f[20] !== w || f[21] !== v || f[22] !== k || f[23] !== h ? (p = (0, a.jsx)(o.a, {
                color: "primary",
                variant: "solid",
                disabled: w,
                loading: v,
                size: "lg",
                onClick: k,
                children: h
            }), f[20] = w, f[21] = v, f[22] = k, f[23] = h, f[24] = p) : p = f[24], f[25] !== u || f[26] !== p ? (g = (0, a.jsxs)("div", {
                className: "pointer-events-auto flex items-center gap-2",
                children: [u, p]
            }), f[25] = u, f[26] = p, f[27] = g) : g = f[27], f[28] !== g || f[29] !== d ? (m = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-4 py-4",
                children: [d, g]
            }), f[28] = g, f[29] = d, f[30] = m) : m = f[30], m
        }
        n.d(t, {
            a: () => c
        })
    }),
    tdP6: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            o = n("iTtm"),
            l = n("cJqt");

        function r(e) {
            let t, n = (0, i.c)(2),
                {
                    threadId: r
                } = e,
                s = (0, o.x)(l.c, r);
            return n[0] !== s ? (t = null == s ? null : (0, a.jsxs)("span", {
                className: "shrink-0 select-none",
                children: [s, " "]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        n.d(t, {
            a: () => r
        })
    }),
    fQbA: (function(e, t, n) {
        var a = n("ABep"),
            i = n("lIZs");

        function o(e) {
            let t = e.findIndex(e => "move-to-project" === e.id),
                n = e.findIndex(e => "separator" === e.type),
                a = -1 === t ? n : t + 1;
            return e.toSpliced(-1 === a ? e.length : a, 0, {
                id: "open-app"
            })
        }

        function l(e, t) {
            return "open-app" === e.id ? (0, a.jsx)(i.a, {
                onSelect: t
            }) : void 0
        }
        n.d(t, {
            a: () => o,
            b: () => l
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
            let t, n, l, r, s, g, m = (0, i.c)(24),
                {
                    animate: f,
                    children: y,
                    isOpen: j,
                    onOpenChange: w,
                    returnFocusId: k,
                    shouldPreventAutoFocus: _,
                    trigger: E
                } = e,
                M = void 0 === f || f,
                S = void 0 !== _ && _,
                T = (0, c.useContext)(u.a),
                I = (0, c.useContext)(d.c)?.chatPaneElement,
                [O, D] = (0, c.useState)(null),
                N = (0, c.useRef)(!1),
                P = 8 * (0, h.c)(),
                R = O ?? void 0;
            m[0] !== I || m[1] !== T || m[2] !== R || m[3] !== O ? (t = {
                contextElement: R,
                getBoundingClientRect() {
                    let e = O?.closest("[data-app-shell-main-titlebar]") ?? O?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                        t = (e ?? O)?.getBoundingClientRect() ?? new DOMRect,
                        n = C(T, I);
                    if (null == n) return t;
                    let a = n.getBoundingClientRect(),
                        i = Math.max(t.left, a.left),
                        o = Math.min(t.right, a.right);
                    return new DOMRect(i, t.top, Math.max(0, o - i), t.height)
                }
            }, m[0] = I, m[1] = T, m[2] = R, m[3] = O, m[4] = t) : t = m[4];
            let L = t;
            return m[5] !== L ? (n = (0, a.jsx)(p.b, {
                virtualRef: {
                    current: L
                }
            }), m[5] = L, m[6] = n) : n = m[6], m[7] !== E ? (l = (0, a.jsx)(p.e, {
                ref: D,
                asChild: !0,
                children: E
            }), m[7] = E, m[8] = l) : l = m[8], m[9] !== M || m[10] !== y || m[11] !== j || m[12] !== P || m[13] !== k || m[14] !== S ? (r = j && (0, a.jsx)(x, {
                className: "z-50 flex flex-col text-default outline-hidden",
                animate: M,
                align: "end",
                alignOffset: P,
                collisionPadding: P,
                side: "bottom",
                sideOffset: P,
                unstyled: !0,
                onOpenAutoFocus: e => {
                    N.current = !1, S && e.preventDefault()
                },
                onCloseAutoFocus: e => {
                    if (S) e.preventDefault();
                    else if (!N.current && null != k) {
                        let t = document.getElementById(k);
                        t?.focus({
                            preventScroll: !0
                        }), null != t && document.activeElement === t && e.preventDefault()
                    }
                },
                onInteractOutside: e => {
                    e.defaultPrevented || (N.current = !0)
                },
                onFocusOutside: v,
                onPointerDownOutside: b,
                style: {
                    maxHeight: "none",
                    maxWidth: "none"
                },
                children: y
            }), m[9] = M, m[10] = y, m[11] = j, m[12] = P, m[13] = k, m[14] = S, m[15] = r) : r = m[15], m[16] !== r ? (s = (0, a.jsx)(o.a, {
                children: r
            }), m[16] = r, m[17] = s) : s = m[17], m[18] !== j || m[19] !== w || m[20] !== n || m[21] !== l || m[22] !== s ? (g = (0, a.jsxs)(p.a, {
                open: j,
                onOpenChange: w,
                children: [n, l, s]
            }), m[18] = j, m[19] = w, m[20] = n, m[21] = l, m[22] = s, m[23] = g) : g = m[23], g
        }

        function b(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function v(e) {
            e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
        }

        function x(e) {
            let t, n, o, f, b, v, x, y, j, w, k = (0, i.c)(25);
            k[0] !== e ? ({
                animate: t,
                children: n,
                className: o,
                ...f
            } = e, k[0] = e, k[1] = t, k[2] = n, k[3] = o, k[4] = f) : (t = k[1], n = k[2], o = k[3], f = k[4]);
            let _ = (0, l.a)(),
                E = (0, s.z)(g.c),
                M = t && !E,
                S = (0, c.useContext)(u.a),
                T = (0, c.useContext)(d.c)?.chatPaneElement,
                I = (0, h.c)(),
                O = (0, c.useRef)(null),
                D = (0, c.useRef)(M);
            k[5] !== T || k[6] !== S || k[7] !== I ? (b = () => {
                let e = O.current,
                    t = C(S, T);
                if (null == e || null == t || !D.current) return;
                let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-a.top)/I}px ${(a.right-n.right)/I}px ${(a.bottom-n.bottom)/I}px ${(n.left-a.left)/I}px)`
            }, k[5] = T, k[6] = S, k[7] = I, k[8] = b) : b = k[8];
            let N = b,
                P = !_,
                R = !_;
            k[9] !== N ? (v = () => {
                D.current = !0, requestAnimationFrame(N)
            }, k[9] = N, k[10] = v) : v = k[10], k[11] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                D.current = !1, O.current?.style.removeProperty("clip-path")
            }, k[11] = x) : x = k[11];
            let L = !!M && m.b.hidden;
            return k[12] !== M ? (y = M ? m.a : {
                duration: 0
            }, k[12] = M, k[13] = y) : y = k[13], k[14] !== n || k[15] !== v || k[16] !== L || k[17] !== y ? (j = (0, a.jsx)(r.a.div, {
                onAnimationStart: v,
                onAnimationComplete: x,
                initial: L,
                animate: m.b.visible,
                exit: m.b.hidden,
                transition: y,
                children: n
            }), k[14] = n, k[15] = v, k[16] = L, k[17] = y, k[18] = j) : j = k[18], k[19] !== o || k[20] !== f || k[21] !== P || k[22] !== R || k[23] !== j ? (w = (0, a.jsx)(p.c, {
                ...f,
                ref: O,
                className: o,
                forceMount: !0,
                "aria-hidden": P,
                inert: R,
                children: j
            }), k[19] = o, k[20] = f, k[21] = P, k[22] = R, k[23] = j, k[24] = w) : w = k[24], w
        }

        function C(e, t) {
            return void 0 !== t ? t ?? e : e?.querySelector("[data-app-shell-main-content-layout]") ?? e
        }
        n.d(t, {
            a: () => f
        })
    }),
    enMl: (function(e, t, n) {
        var a = n("QosV"),
            i = n("iTtm"),
            o = n("zd8w"),
            l = n("tSEg"),
            r = n("giVD");

        function s(e) {
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
        n.d(t, {
            a: () => s
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
            h = n("WwnD"),
            p = n("NkWL"),
            g = n("pZMh"),
            m = n("erBs");

        function f(e) {
            let t = e.get(l.Z);
            return t?.isVisible === !0 && ("split" === t.mode || e.get(p.b)) ? function(e, t) {
                let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.j,
                    m = e.get(r.j.activeTab$),
                    f = e.get(g.e),
                    b = null;
                l === r.a ? b = "bottom" : "split" === f.mode && (e.get(g.c) ? (b = f.contentSide, "content" === t.kind && t.tab.tabId === e.get(g.g) && (b = "left" === f.contentSide ? "right" : "left")) : "chat" === t.kind ? b = "left" === f.contentSide ? "right" : "left" : t.tab.tabId === m?.tabId && (b = f.contentSide));
                let v = "content" === t.kind || null != m,
                    x = [{
                        enabled: v && "left" !== b && (0, h.a)(t, "left"),
                        id: "unified-workspace-move-left",
                        icon: c.w,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToLeftPane",
                            defaultMessage: "Move to left pane",
                            description: "Context menu action that presents the selected task tab in the left workspace pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "left", l))
                    }, {
                        enabled: v && "right" !== b && (0, h.a)(t, "right"),
                        id: "unified-workspace-move-right",
                        icon: c.y,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToRightPane",
                            defaultMessage: "Move to right pane",
                            description: "Context menu action that presents the selected task tab in the right workspace pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "right", l))
                    }].filter(e => !1 !== e.enabled);
                return l !== r.a && e.get(s.b) && (0, h.a)(t, "bottom") && x.push({
                    id: "unified-workspace-move-bottom",
                    icon: c.p,
                    message: (0, a.e)({
                        id: "threadWorkspace.contextMenu.moveToBottomPane",
                        defaultMessage: "Move to bottom pane",
                        description: "Context menu action that moves an existing Terminal task tab into the bottom utility pane"
                    }),
                    onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "bottom", l))
                }), "content" !== t.kind || t.tab.isWorkspaceHome || null == t.tab.tabType.windowTransfer || null == d.appServices.detachedWindows || x.push({
                    id: "unified-workspace-move-new-window",
                    enabled: !(0, o.c)(e, t.tab.tabId) && t.tab.tabType.windowTransfer.canTransfer(e, t.tab.props),
                    icon: c.zg,
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
                            return a(e, l, t.tab, null)
                        }))
                    }
                }), "chat" === t.kind && e.get(p.b) && x.push({
                    id: "close-tab",
                    icon: c.aj,
                    message: (0, a.e)({
                        id: "codex.tabs.contextMenu.close",
                        defaultMessage: "Close",
                        description: "Context menu action for closing a tab"
                    }),
                    onSelect: () => (0, p.a)(e)
                }), x
            }(e, e.get(m.b).chat) : []
        }
        n.d(t, {
            a: () => f
        })
    })
};