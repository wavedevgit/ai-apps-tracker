export const __rspack_esm_id = 655566;
export const __rspack_esm_ids = [655566];
export const __webpack_modules__ = {
    fBor: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => y
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("iTtm"),
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
                j = (0, l.y)(s.a);
            return b[0] !== j ? (e = () => {
                let e = null;
                return j.watch(t => {
                    let a = t.get(f.c),
                        i = t.get(d.f),
                        l = t.get(v.b),
                        r = t.get(o.a, l?.hostId == null ? l?.conversationId ?? null : null),
                        s = t.get(h.i),
                        c = t.get(u.j.tabs$),
                        b = "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId);
                    if (null == a || !i || b || e === a || (e = a, (0, v.a)(l, t.value, r, t.value.clientThreadId) || s || c.length > 0)) return;
                    let j = (0, f.a)(a);
                    if (!j?.isOpen) return;
                    let y = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return y ? null : Promise.all([t.query.fetch(n, j.projectId), t.get(m.b) ? t.query.fetch(m.c, j.projectId) : null])
                    }).then(e => {
                        if (null == e) return;
                        let [n, i] = e, l = (0, f.a)(a);
                        y || null == n || i?.supports_chatgpt_preview === !1 || !l?.isOpen || l.projectId !== j.projectId || "active" !== n.status || null == n.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(p.d, t.value.conversationId) || (0, g.a)(t, {
                            type: "appgen-app",
                            projectId: n.id,
                            title: n.title,
                            url: n.current_live_url
                        })
                    }, x), () => {
                        y = !0
                    }
                })
            }, t = [j], b[0] = j, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), (0, c.useEffect)(e, t), b[3] !== j ? (a = () => {
                let e = j.get(h.j),
                    t = null;
                return j.watch(n => {
                    let a = n.get(h.j),
                        i = n.get(u.j.activeTab$),
                        l = n.get(f.c);
                    (a !== e || null == t && null != l) && null != l && i?.tabId.startsWith("site-preview:") && (0, f.b)(l, i.tabId.slice(13), a), e = a, t = l
                })
            }, r = [j], b[3] = j, b[4] = a, b[5] = r) : (a = b[4], r = b[5]), (0, c.useEffect)(a, r), null
        }

        function x() {}
        let j = (0, r.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function y() {
            let e, t, n, r, c = (0, i.c)(12),
                d = (0, l.y)(s.a),
                u = (0, l.z)(v.b),
                h = (0, l.x)(o.a, u?.hostId == null ? u?.conversationId ?? null : null);
            if ("home" !== d.value.routeKind && "chatgpt-thread" !== d.value.routeKind && "local-thread" !== d.value.routeKind) return null;
            c[0] !== u || c[1] !== h || c[2] !== d ? (e = u?.url != null && (0, v.a)(u, d.value, h, d.value.clientThreadId), c[0] = u, c[1] = h, c[2] = d, c[3] = e) : e = c[3];
            let p = e;
            return c[4] !== d ? (t = "home" !== d.value.routeKind ? (0, a.jsx)(b, {}) : null, c[4] = d, c[5] = t) : t = c[5], c[6] !== p || c[7] !== u ? (n = p ? (0, a.jsx)(j, {
                pending: u
            }) : null, c[6] = p, c[7] = u, c[8] = n) : n = c[8], c[9] !== t || c[10] !== n ? (r = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), c[9] = t, c[10] = n, c[11] = r) : r = c[11], r
        }
    }),
    rjva: (function(e, t, n) {
        n.d(t, {
            a: () => G
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("l2oX"),
            o = n("iTtm"),
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
            v = n("O9Pc"),
            b = n("fDIZ"),
            x = n("jEN2"),
            j = n("wqvF"),
            y = n("giDA"),
            C = n("yC2B"),
            w = n("HnT3"),
            k = n("tSEg"),
            _ = n("El6m"),
            E = n("dN0a"),
            S = n("dt6g"),
            T = n("WwnD");
        n("G7Oa");
        var M = n("q1q2"),
            I = n("VwGH"),
            O = n("on57"),
            R = n("W5pg"),
            D = n("IPUh"),
            N = n("qjLK"),
            P = n("I7bK");
        n("eFp2");
        var L = n("oH56");
        n("EpL9");
        var A = n("DUYS"),
            z = n("gbrq"),
            F = n("bIvi"),
            B = n("pZMh");

        function q(e) {
            let t, n, l, c, d, u, p, g, m, f, v, b = (0, i.c)(33),
                {
                    destination: x,
                    direction: j,
                    surface: y
                } = e,
                {
                    bottomPanelTargetHeight: C,
                    contentPaneWidthRatio: w,
                    mainContentWidth: k
                } = (0, P.g)(),
                _ = (0, r.useContext)(L.a),
                E = (0, o.z)(B.c),
                S = (0, o.z)(B.g),
                T = y ?? (_?.chatTabDragState != null ? "chat" : "content"),
                q = E ? "content" === T && _?.dragState?.draggedTab.tabId === S : "chat" === T,
                K = (0, r.useContext)(N.a),
                $ = (0, o.z)(z.d),
                Q = (0, o.z)(h.a.tabIds$),
                V = _?.dragState?.sourceController === h.a && 1 === Q.length;
            b[0] !== w || b[1] !== k ? (t = [k, w], b[0] = w, b[1] = k, b[2] = t) : t = b[2], b[3] !== q ? (n = e => {
                let [t, n] = e, a = Math.min(t, (0, A.e)(n, t, "unified"));
                return q ? t - a : a
            }, b[3] = q, b[4] = n) : n = b[4];
            let U = (0, R.a)(t, n);
            b[5] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, M.e)(H), (0, M.g)({
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
            }, b[5] = l) : l = b[5];
            let {
                floatingStyles: Z,
                refs: G
            } = (0, M.h)(l);
            b[6] !== G ? (c = e => {
                G.setReference(e)
            }, b[6] = G, b[7] = c) : c = b[7];
            let X = (0, F.a)(c);
            b[8] !== G ? (d = e => {
                G.setFloating(e)
            }, b[8] = G, b[9] = d) : d = b[9];
            let Y = (0, F.a)(d),
                J = "bottom" === x && "inset-x-0 bottom-0",
                ee = "left" === x && "inset-y-0 left-0",
                et = "right" === x && "inset-y-0 right-0";
            b[10] !== J || b[11] !== ee || b[12] !== et ? (u = (0, O.b)("pointer-events-none absolute", J, ee, et), b[10] = J, b[11] = ee, b[12] = et, b[13] = u) : u = b[13];
            let en = "bottom" === x ? void 0 : $ && !V ? K ?? void 0 : void 0,
                ea = "bottom" === x ? C : void 0,
                ei = "bottom" === x ? void 0 : U;
            return b[14] !== en || b[15] !== ea || b[16] !== ei ? (p = {
                bottom: en,
                height: ea,
                width: ei
            }, b[14] = en, b[15] = ea, b[16] = ei, b[17] = p) : p = b[17], b[18] !== X || b[19] !== p || b[20] !== u ? (g = (0, a.jsx)(D.a.div, {
                ref: X,
                "aria-hidden": !0,
                className: u,
                dir: "ltr",
                style: p
            }), b[18] = X, b[19] = p, b[20] = u, b[21] = g) : g = b[21], b[22] !== x ? (m = (0, a.jsx)(W, {
                destination: x
            }), b[22] = x, b[23] = m) : m = b[23], b[24] !== x || b[25] !== j || b[26] !== Z || b[27] !== Y || b[28] !== m ? (f = (0, s.createPortal)((0, a.jsx)("div", {
                ref: Y,
                "aria-hidden": !0,
                className: "pointer-events-none z-50",
                "data-unified-workspace-drop-indicator": x,
                dir: j,
                style: Z,
                children: m
            }), document.body), b[24] = x, b[25] = j, b[26] = Z, b[27] = Y, b[28] = m, b[29] = f) : f = b[29], b[30] !== g || b[31] !== f ? (v = (0, a.jsxs)(a.Fragment, {
                children: [g, f]
            }), b[30] = g, b[31] = f, b[32] = v) : v = b[32], v
        }

        function H(e) {
            let {
                rects: t
            } = e;
            return -t.reference.height
        }

        function W(e) {
            let t, n, l, o = (0, i.c)(11),
                {
                    destination: r
                } = e,
                s = (0, p.c)(),
                c = "bottom" === r && "border-t",
                d = "left" === r && "border-r",
                u = "right" === r && "border-l";
            o[0] !== c || o[1] !== d || o[2] !== u ? (t = (0, O.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", c, d, u), o[0] = c, o[1] = d, o[2] = u, o[3] = t) : t = o[3];
            let h = `calc(100% / ${s})`,
                g = `scale(${s})`,
                m = `calc(100% / ${s})`;
            return o[4] !== h || o[5] !== g || o[6] !== m ? (n = {
                height: h,
                transform: g,
                transformOrigin: "top left",
                width: m
            }, o[4] = h, o[5] = g, o[6] = m, o[7] = n) : n = o[7], o[8] !== t || o[9] !== n ? (l = (0, a.jsx)("div", {
                className: t,
                style: n
            }), o[8] = t, o[9] = n, o[10] = l) : l = o[10], l
        }
        var K = n("erBs"),
            $ = n("kHG0"),
            Q = n("kmKV"),
            V = n("RN8F"),
            U = n("abd8"),
            Z = n("GMTh");

        function G(e) {
            let t, n, M, I, O, R, D = (0, i.c)(55),
                {
                    children: N,
                    composerOnly: P,
                    forceExpanded: L,
                    placement: A,
                    showHeader: z,
                    showComposerDivider: F,
                    isHidden: B,
                    persistPresentation: H,
                    reserveContent: W,
                    reserveFullComposerHeight: Q,
                    onPresentationChange: G,
                    title: J,
                    titleContent: ee,
                    statusState: et,
                    titleStatusState: en,
                    hasElicitation: ea,
                    notifications: ei,
                    renderTranscript: el,
                    hasTranscript: eo,
                    pendingFormId: er
                } = e,
                es = void 0 !== P && P,
                ec = void 0 !== L && L,
                ed = void 0 === z ? !es : z,
                eu = void 0 === F ? !es : F,
                eh = void 0 === H || H,
                ep = void 0 === er ? w.a : er,
                eg = (0, o.y)(k.a),
                em = "pane" === (void 0 === A ? "floating" : A),
                ef = (0, c.a)(),
                {
                    isHidden: ev
                } = (0, Z.a)(em ? "embedded" : "content"),
                eb = (0, o.z)(h.j.activeTab$),
                ex = void 0 !== B && B || ev,
                ej = (0, r.useContext)(d.a),
                ey = (0, r.useContext)(_.b),
                eC = (0, r.useContext)(_.a),
                ew = (0, r.useContext)(v.a),
                ek = (0, r.useContext)(b.a),
                e_ = (0, r.useContext)(f.a),
                eE = (0, r.useContext)(y.a),
                eS = (0, p.c)(),
                [eT, eM] = (0, r.useState)(null),
                eI = !(0, o.z)(E.n),
                eO = (0, o.z)(ep),
                eR = (0, o.z)(eh ? V.a : void 0);
            es && !ed && (eR = "compact");
            let eD = (0, o.z)(null == eO && (ea ?? _.c));
            D[0] !== eb || D[1] !== em ? (t = em ? null : (0, g.getThreadBrowserTabIdFromPanelTab)(eb), D[0] = eb, D[1] = em, D[2] = t) : t = D[2];
            let eN = t,
                eP = void 0 !== Q && Q || eb?.tabType.kind === "latex-document" || eb?.tabType.kind === "image-preview",
                [eL, eA] = (0, r.useState)(null);
            D[3] !== ej || D[4] !== eg ? (n = e => {
                if (null == e || !(e instanceof MouseEvent) || "pointercancel" === e.type || null == ej || null == eg.get(u.Z) || null == eg.get(h.j.activeTab$) || e.clientY < 0 || e.clientY > window.innerHeight) return null;
                let t = ej.getBoundingClientRect();
                return e.clientX <= t.left + 24 ? "left" : e.clientX >= t.right - 24 ? "right" : null
            }, D[3] = ej, D[4] = eg, D[5] = n) : n = D[5];
            let ez = n;
            D[6] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, a.jsx)("div", {
                ref: e => {
                    null != e && eM(e)
                },
                className: "contents"
            }), D[6] = M) : M = D[6];
            let eF = em || ex;
            return D[7] !== eb || D[8] !== ef || D[9] !== em || D[10] !== ej || D[11] !== eL ? (I = em || null == ej || null == eL || null == eb ? null : (0, s.createPortal)((0, a.jsx)(q, {
                destination: eL,
                direction: (0, C.a)(ef.locale),
                surface: "chat"
            }), ej), D[7] = eb, D[8] = ef, D[9] = em, D[10] = ej, D[11] = eL, D[12] = I) : I = D[12], D[13] !== eN || D[14] !== eb?.tabId || D[15] !== eb?.tabType || D[16] !== N || D[17] !== es || D[18] !== ec || D[19] !== ez || D[20] !== eD || D[21] !== eo || D[22] !== e_ || D[23] !== ek || D[24] !== eE || D[25] !== eC || D[26] !== ey || D[27] !== ef || D[28] !== ex || D[29] !== eI || D[30] !== em || D[31] !== ej || D[32] !== ei || D[33] !== G || D[34] !== eT || D[35] !== eO || D[36] !== eh || D[37] !== el || D[38] !== W || D[39] !== eg || D[40] !== eP || D[41] !== eu || D[42] !== ed || D[43] !== et || D[44] !== eR || D[45] !== ew || D[46] !== J || D[47] !== ee || D[48] !== en || D[49] !== eS ? (O = e => (0, a.jsx)(l.a, {
                transformPagePoint: e => ({
                    x: e.x / eS,
                    y: e.y / eS
                }),
                children: (0, a.jsx)(_.b, {
                    value: em ? ey : {
                        activeBrowserTabId: eN,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            eg.get(h.j.activeTab$)?.tabId === eb?.tabId && (eg.get(E.j) || (0, E.h)(eg, {
                                prefersReducedMotion: !0
                            }), (0, x.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, a.jsx)(_.a, {
                        value: em ? eC : "expanded",
                        children: (0, a.jsx)(m.a, {
                            dockThreadKey: U.c,
                            titleContent: ee,
                            statusState: et,
                            titleStatusState: en,
                            hasTranscript: eo,
                            pendingFormId: eO,
                            notifications: ei,
                            containerSize: e,
                            renderMenu: X,
                            forceExpanded: ec || eD && !es,
                            isHidden: em || ex,
                            isMinimized: eI,
                            onDragOver: es ? void 0 : e => {
                                let t = ez(e);
                                return eA(t), null != t
                            },
                            onDragEnd: es ? void 0 : e => {
                                eA(null);
                                let t = ez(e);
                                return null != t && (0, S.a)(eg, "tab_drag", () => (0, T.b)(eg, eg.get(K.b).chat, t))
                            },
                            presentation: eR,
                            showHeader: ed,
                            showComposerDivider: eu,
                            background: es && !ed ? void 0 : "panel",
                            onPresentationChange: e => {
                                eh && eg.set(V.a, e), G?.(e)
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
                            renderTranscript: null == el ? void 0 : (e, t) => el({
                                isVisible: t
                            }),
                            children: e => (0, a.jsx)(v.a, {
                                value: em || null == eN ? ew : ej,
                                children: (0, a.jsx)(j.a, {
                                    target: em ? eT : null,
                                    children: (0, a.jsx)(Y, {
                                        mainContentElement: ej,
                                        presentation: e,
                                        paneContext: em ? {
                                            transition: ey,
                                            escapeHandler: ek,
                                            bannerTarget: e_,
                                            overlayOwner: eE
                                        } : void 0,
                                        reserveFullComposerHeight: eP,
                                        reserveContent: W ?? (null == eN && eb?.tabType.kind !== "mcp-app" && eb?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof N ? N(em ? void 0 : e) : N
                                    })
                                })
                            })
                        })
                    })
                })
            }), D[13] = eN, D[14] = eb?.tabId, D[15] = eb?.tabType, D[16] = N, D[17] = es, D[18] = ec, D[19] = ez, D[20] = eD, D[21] = eo, D[22] = e_, D[23] = ek, D[24] = eE, D[25] = eC, D[26] = ey, D[27] = ef, D[28] = ex, D[29] = eI, D[30] = em, D[31] = ej, D[32] = ei, D[33] = G, D[34] = eT, D[35] = eO, D[36] = eh, D[37] = el, D[38] = W, D[39] = eg, D[40] = eP, D[41] = eu, D[42] = ed, D[43] = et, D[44] = eR, D[45] = ew, D[46] = J, D[47] = ee, D[48] = en, D[49] = eS, D[50] = O) : O = D[50], D[51] !== eF || D[52] !== I || D[53] !== O ? (R = (0, a.jsxs)(a.Fragment, {
                children: [M, (0, a.jsx)($.a, {
                    isHidden: eF,
                    overlay: I,
                    children: O
                })]
            }), D[51] = eF, D[52] = I, D[53] = O, D[54] = R) : R = D[54], R
        }

        function X(e) {
            return (0, a.jsx)(Q.a, {
                ...e
            })
        }

        function Y(e) {
            let t, n, l, s, c, d, u, h, p, g, m, v = (0, i.c)(38),
                {
                    children: x,
                    mainContentElement: j,
                    presentation: C,
                    paneContext: w,
                    reserveContent: S,
                    reserveFullComposerHeight: T
                } = e,
                M = (0, o.y)(k.a),
                I = (0, r.useRef)(null),
                O = (0, r.useContext)(_.b),
                R = (0, r.useContext)(b.a),
                D = (0, r.useContext)(f.a),
                N = (0, r.useContext)(y.a),
                {
                    activeBrowserTabId: P
                } = O,
                L = null != w,
                {
                    isCompact: A,
                    isDockedTop: z,
                    isHidden: F,
                    isMinimized: B,
                    isMoving: q,
                    composerContentHeight: H,
                    dockedReservePx: W
                } = C,
                K = !S || F || B ? 0 : Math.max(118, A ? W : 0, T ? H + 118 - 102 : 0),
                $ = z && A && W > 0 ? K : 0,
                [Q, V] = (0, r.useState)(!B);
            (A || B) && !B !== Q && V(!B);
            let U = S && !F && Q ? E.b : 0;
            v[0] !== P || v[1] !== L ? (t = () => {
                if (L || null == P) return;
                let e = I.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && I.current?.contains(e) && e.blur()
            }, n = [P, L], v[0] = P, v[1] = L, v[2] = t, v[3] = n) : (t = v[2], n = v[3]), (0, r.useLayoutEffect)(t, n), v[4] !== U || v[5] !== z || v[6] !== F || v[7] !== B || v[8] !== L || v[9] !== j || v[10] !== K || v[11] !== M || v[12] !== $ ? (l = () => {
                if (!L && null != j) return j.style.setProperty(E.a, z ? `${U}px 0 0` : `0 0 ${U}px`), j.style.setProperty(E.c, `${F||B||z?0:102}px`), j.style.setProperty(E.d, `${z?0:K}px`), j.style.setProperty(E.g, `${z?K:0}px`), (0, E.o)(M, z ? 0 : K), M.set(E.l, $), () => {
                    j.style.removeProperty(E.a), j.style.removeProperty(E.c), j.style.removeProperty(E.d), j.style.removeProperty(E.g), (0, E.o)(M, 0), M.set(E.l, 0)
                }
            }, s = [U, L, z, F, B, j, K, M, $], v[4] = U, v[5] = z, v[6] = F, v[7] = B, v[8] = L, v[9] = j, v[10] = K, v[11] = M, v[12] = $, v[13] = l, v[14] = s) : (l = v[13], s = v[14]), (0, r.useLayoutEffect)(l, s), v[15] !== H || v[16] !== A || v[17] !== B || v[18] !== q || v[19] !== L || v[20] !== M ? (c = () => {
                let e = I.current;
                if (L || null == e) return;
                let t = () => {
                    let t = null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    M.set(E.i, !A || B || q || t || H > 102)
                };
                t();
                let n = new MutationObserver(t);
                return n.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    n.disconnect(), M.set(E.i, !1)
                }
            }, d = [H, L, A, B, q, M], v[15] = H, v[16] = A, v[17] = B, v[18] = q, v[19] = L, v[20] = M, v[21] = c, v[22] = d) : (c = v[21], d = v[22]), (0, r.useLayoutEffect)(c, d);
            let Z = null == w ? O : w.transition,
                G = null == w ? R : w.escapeHandler,
                X = null == w ? D : w.bannerTarget,
                Y = null == w ? N : w.overlayOwner,
                J = L ? "contents" : void 0;
            return v[23] !== x || v[24] !== J ? (u = (0, a.jsx)("div", {
                ref: I,
                className: J,
                "data-right-panel-composer-overlay-content": "true",
                children: x
            }), v[23] = x, v[24] = J, v[25] = u) : u = v[25], v[26] !== Y || v[27] !== u ? (h = (0, a.jsx)(y.a, {
                value: Y,
                children: u
            }), v[26] = Y, v[27] = u, v[28] = h) : h = v[28], v[29] !== h || v[30] !== X ? (p = (0, a.jsx)(f.a, {
                value: X,
                children: h
            }), v[29] = h, v[30] = X, v[31] = p) : p = v[31], v[32] !== p || v[33] !== G ? (g = (0, a.jsx)(b.a, {
                value: G,
                children: p
            }), v[32] = p, v[33] = G, v[34] = g) : g = v[34], v[35] !== g || v[36] !== Z ? (m = (0, a.jsx)(_.b, {
                value: Z,
                children: g
            }), v[35] = g, v[36] = Z, v[37] = m) : m = v[37], m
        }
    }),
    kmKV: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("iTtm"),
            o = n("Qgfj"),
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
            v = n("WwnD"),
            b = n("erBs");
        let x = (0, l.c)(m.a, e => {
            let {
                get: t
            } = e;
            return null == t(c.Z) ? "hidden" : null != t(d.j.activeTab$) ? "split" : "tab"
        });

        function j(e) {
            let t, n, r = (0, i.c)(6),
                s = (0, l.y)(m.a),
                c = (0, l.z)(x);
            r[0] !== c || r[1] !== s ? (t = "hidden" === c ? [] : [{
                id: "full-view",
                icon: p.N,
                message: (0, o.e)({
                    id: "quickChat.dock.openTab",
                    defaultMessage: "Open in full view",
                    description: "Opens the existing Chat in a tab that fills the workspace"
                }),
                onSelect: () => {
                    (0, f.a)(s, "context_menu", () => (0, v.c)(s, s.get(b.b).chat, {
                        mode: "full"
                    }))
                }
            }, {
                id: "left",
                icon: p.w,
                enabled: "split" === c,
                message: (0, o.e)({
                    id: "quickChat.dock.left",
                    defaultMessage: "Move to left pane",
                    description: "Moves the floating Chat into the left split pane beside the current content"
                }),
                onSelect: () => {
                    (0, f.a)(s, "context_menu", () => (0, v.b)(s, s.get(b.b).chat, "left"))
                }
            }, {
                id: "right",
                icon: p.y,
                enabled: "split" === c,
                message: (0, o.e)({
                    id: "quickChat.dock.right",
                    defaultMessage: "Move to right pane",
                    description: "Moves the floating Chat into the right split pane beside the current content"
                }),
                onSelect: () => {
                    (0, f.a)(s, "context_menu", () => (0, v.b)(s, s.get(b.b).chat, "right"))
                }
            }], r[0] = c, r[1] = s, r[2] = t) : t = r[2];
            let d = t;
            return r[3] !== d || r[4] !== e ? (n = (0, a.jsx)(y, {
                ...e,
                items: d
            }), r[3] = d, r[4] = e, r[5] = n) : n = r[5], n
        }

        function y(e) {
            let t, n, l, c, d, m, f, v, b, x, j = (0, i.c)(32),
                {
                    contextMenuTrigger: y,
                    isCompact: w,
                    isDragging: k,
                    items: _,
                    open: E,
                    onMinimize: S,
                    onOpenChange: T
                } = e,
                M = (0, r.a)();
            j[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, o.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer",
                description: "Minimizes the floating composer to its compact minimized button"
            }), j[0] = t) : t = j[0], j[1] !== S ? (n = {
                id: "minimize",
                icon: p.Qe,
                message: t,
                onSelect: S,
                selectAfterClose: !0
            }, j[1] = S, j[2] = n) : n = j[2], j[3] !== _ || j[4] !== n ? (l = [..._, n], j[3] = _, j[4] = n, j[5] = l) : l = j[5];
            let I = l;
            if (null != y) {
                let e, t;
                return j[6] !== y ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: y
                }), j[6] = y, j[7] = e) : e = j[7], j[8] !== I || j[9] !== e ? (t = (0, a.jsx)(h.a, {
                    disableNative: !0,
                    items: I,
                    children: e
                }), j[8] = I, j[9] = e, j[10] = t) : t = j[10], t
            }
            let O = !k && void 0,
                R = E || k;
            j[11] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(s.a, {
                id: "quickChat.dock.dragHint",
                defaultMessage: "Drag to move · Click for options",
                description: "Tooltip for the floating Chat grip that can be dragged to move the Chat or clicked to open docking options"
            }), j[11] = c) : c = j[11], j[12] !== M ? (d = M.formatMessage({
                id: "quickChat.dock.menu",
                defaultMessage: "Dock Chat",
                description: "Opens a menu to place Chat in a tab or a left or right split pane"
            }), j[12] = M, j[13] = d) : d = j[13];
            let D = w ? "composer" : "toolbar";
            return j[14] !== T || j[15] !== E ? (m = e => {
                0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || T?.(!E)
            }, j[14] = T, j[15] = E, j[16] = m) : m = j[16], j[17] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)(p.Tc, {}), j[17] = f) : f = j[17], j[18] !== d || j[19] !== D || j[20] !== m ? (v = (0, a.jsx)(u.a, {
                className: "cursor-grab touch-none active:cursor-grabbing",
                "aria-label": d,
                color: "ghostSecondary",
                "data-quick-chat-drag-handle": !0,
                size: D,
                uniform: !0,
                onPointerDown: C,
                onClick: m,
                children: f
            }), j[18] = d, j[19] = D, j[20] = m, j[21] = v) : v = j[21], j[22] !== I || j[23] !== T || j[24] !== E || j[25] !== v ? (b = (0, a.jsx)(h.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: E,
                onOpenChange: T,
                items: I,
                children: v
            }), j[22] = I, j[23] = T, j[24] = E, j[25] = v, j[26] = b) : b = j[26], j[27] !== E || j[28] !== b || j[29] !== O || j[30] !== R ? (x = (0, a.jsx)(g.a, {
                open: O,
                triggerPopupOpen: E,
                disableHoverOpen: R,
                closeOnTriggerClick: !0,
                tooltipContent: c,
                children: b
            }), j[27] = E, j[28] = b, j[29] = O, j[30] = R, j[31] = x) : x = j[31], x
        }

        function C(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {
            a: () => j,
            b: () => y
        })
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            i = n.n(a),
            l = n("iTtm"),
            o = n("tSEg"),
            r = n("wrxv");

        function s(e) {
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
                        id: o,
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
        n.d(t, {
            a: () => s
        })
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            i = n("QosV");
        n("h6NE");
        var l = n("iTtm"),
            o = n("Wf1j"),
            r = n("bjsR"),
            s = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("M7HN"),
            g = n("zd8w"),
            m = n("tSEg"),
            f = n("YnF4"),
            v = n("MrGp");

        function b() {
            let e, t, n = (0, i.c)(3),
                a = (0, l.y)(m.a);
            return n[0] !== a ? (e = () => {
                if ("chatgpt-thread" !== a.value.routeKind) return;
                let e = a.value.conversationId;
                return a.watch(t => {
                    let {
                        get: n
                    } = t, i = n(v.j, e);
                    if (null != i) return (0, f.a)(a, (0, p.Le)(`chatgpt:${i}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, g.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var x = n("rBfn"),
            j = n("enMl"),
            y = n("PCEr");

        function C(e) {
            let t, n, l, o, s, c, d = (0, i.c)(16),
                {
                    chatIcon: p,
                    header: g,
                    title: m,
                    isArchivedPreview: f,
                    children: v
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(r.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== g ? (l = null == g ? null : (0, a.jsx)(r.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: g
            }), d[3] = g, d[4] = l) : l = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(r.a.RightPanelOutlet, {
                children: (0, a.jsx)(r.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== g || d[8] !== f || d[9] !== m ? (s = f ? null : (0, a.jsx)(w, {
                chatIcon: p,
                mainToolbar: g,
                title: m
            }), d[6] = p, d[7] = g, d[8] = f, d[9] = m, d[10] = s) : s = d[10], d[11] !== v || d[12] !== n || d[13] !== l || d[14] !== s ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, l, v, o, s]
            }), d[11] = v, d[12] = n, d[13] = l, d[14] = s, d[15] = c) : c = d[15], c
        }

        function w(e) {
            let t, n, r, u, p, g, f = (0, i.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: C,
                    title: w
                } = e,
                k = (0, l.y)(m.a);
            (0, o.a)(), (0, l.z)(d.i), (0, l.z)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(s.a, {}), n = (0, a.jsx)(b, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== w ? (r = (0, a.jsx)(j.a, {
                title: w,
                icon: v
            }), f[2] = v, f[3] = w, f[4] = r) : r = f[4];
            let _ = C ?? void 0;
            return f[5] !== _ ? (u = (0, a.jsx)(y.a, {
                mainToolbar: _
            }), f[5] = _, f[6] = u) : u = f[6], f[7] !== k.value.routeKind ? (p = "other" === k.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(x.b, {
                showLauncherButton: !1
            }), f[7] = k.value.routeKind, f[8] = p) : p = f[8], f[9] !== r || f[10] !== u || f[11] !== p ? (g = (0, a.jsxs)(a.Fragment, {
                children: [t, n, r, u, p, null, null]
            }), f[9] = r, f[10] = u, f[11] = p, f[12] = g) : g = f[12], g
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("on57"),
            o = n("bjsR"),
            r = n("NVRI");

        function s(e) {
            let t, n, l, o, s, c, d, u, h = (0, i.c)(16);
            if (h[0] !== e ? ({
                    isTemporaryChat: s,
                    isCloudTask: n,
                    breadcrumbHeader: t,
                    startActions: o,
                    ...l
                } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = l, h[4] = o, h[5] = s) : (t = h[1], n = h[2], l = h[3], o = h[4], s = h[5]), void 0 !== s && s) return null;
            h[6] !== n || h[7] !== o ? (c = null != o || n ? (0, a.jsxs)(a.Fragment, {
                children: [o, null]
            }) : null, h[6] = n, h[7] = o, h[8] = c) : c = h[8], h[9] !== l || h[10] !== c ? (d = (0, a.jsx)(r.a, {
                ...l,
                inset: "tab-strip-flush-start",
                startActions: c
            }), h[9] = l, h[10] = c, h[11] = d) : d = h[11];
            let p = d;
            if (null != t) {
                let e;
                return h[12] !== t ? (e = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: t
                    }), null]
                }), h[12] = t, h[13] = e) : e = h[13], e
            }
            return h[14] !== p ? (u = (0, a.jsx)(a.Fragment, {
                children: p
            }), h[14] = p, h[15] = u) : u = h[15], u
        }

        function c(e) {
            let t, n, r, s, c = (0, i.c)(10),
                {
                    allowsThreadContentOverlap: d,
                    children: u,
                    menu: h
                } = e,
                p = void 0 !== d && d;
            return c[0] !== u ? (t = {
                actionId: "chatgpt-conversation-actions",
                order: 100,
                content: u
            }, c[0] = u, c[1] = t) : t = c[1], c[2] !== h ? (n = {
                actionId: "chatgpt-conversation-overflow",
                order: 0,
                content: h
            }, c[2] = h, c[3] = n) : n = c[3], c[4] !== t || c[5] !== n ? (r = [t, n], c[4] = t, c[5] = n, c[6] = r) : r = c[6], c[7] !== p || c[8] !== r ? (s = (0, a.jsx)(a.Fragment, {
                children: r.map(e => {
                    let {
                        actionId: t,
                        order: n,
                        content: i
                    } = e;
                    return null == i ? null : (0, a.jsx)(o.a.HeaderAction, {
                        actionId: t,
                        align: "end",
                        allowsThreadContentOverlap: p,
                        order: n,
                        children: (0, a.jsx)("div", {
                            className: (0, l.b)("flex items-center gap-toolbar-action", p && "browser:rounded-lg browser:bg-surface"),
                            children: i
                        })
                    }, t)
                })
            }), c[7] = p, c[8] = r, c[9] = s) : s = c[9], s
        }
        n.d(t, {
            a: () => s,
            b: () => c
        })
    }),
    GKsW: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("iTtm"),
            o = n("zd8w"),
            r = n("GaA7"),
            s = n("OWtl"),
            c = n("tSEg"),
            d = n("n5oN");
        let u = (0, l.u)(s.a, () => []);

        function h(e) {
            let t, n = (0, i.c)(2),
                {
                    title: o
                } = e,
                r = (0, l.y)(c.a),
                s = (0, l.x)(d.a, `${r.value.pathname}${r.value.search??""}`),
                u = o ?? s;
            return n[0] !== u ? (t = (0, a.jsx)(p, {
                title: u
            }), n[0] = u, n[1] = t) : t = n[1], t
        }

        function p(e) {
            let t, n, a, c, d, h, p = (0, i.c)(13),
                {
                    title: v,
                    nativeTitle: b
                } = e,
                x = void 0 === b ? v : b,
                j = (0, l.y)(s.a),
                [y] = (0, o.useState)(g);
            return p[0] !== x || p[1] !== y || p[2] !== j || p[3] !== v ? (t = () => {
                if (r.appServices?.windowTitle == null) return;
                let e = {
                    owner: y,
                    title: null == v ? void 0 : x ?? null
                };
                j.set(u, t => t.some(e => e.owner === y) ? t.map(t => t.owner === y ? e : t) : [...t, e]), f(j)
            }, n = [j, y, v, x], p[0] = x, p[1] = y, p[2] = j, p[3] = v, p[4] = t, p[5] = n) : (t = p[4], n = p[5]), (0, o.useEffect)(t, n), p[6] !== y || p[7] !== j ? (a = () => () => {
                r.appServices?.windowTitle != null && (j.set(u, e => e.filter(e => e.owner !== y)), f(j))
            }, c = [j, y], p[6] = y, p[7] = j, p[8] = a, p[9] = c) : (a = p[8], c = p[9]), (0, o.useEffect)(a, c), p[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                m(v);
                let t = document.title;
                return () => {
                    document.title === t && m(e)
                }
            }, h = [v], p[10] = v, p[11] = d, p[12] = h) : (d = p[11], h = p[12]), (0, o.useEffect)(d, h), null
        }

        function g() {
            return Symbol()
        }

        function m(e) {
            let t = document.head.querySelector("title")?.firstChild;
            t instanceof Text && null == t.nextSibling ? t.data = e : document.title = e
        }

        function f(e) {
            r.appServices.windowTitle?.setTitle(e.get(u).findLast(e => void 0 !== e.title)?.title ?? null)
        }
        n.d(t, {
            a: () => p,
            b: () => h
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => y
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("iTtm"),
            o = n("oyxz"),
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

        function j(e) {
            let t, n, r, c, d, j, y, C = (0, i.c)(19),
                {
                    hostId: w,
                    onClose: k,
                    rateLimitStatus: _
                } = e,
                E = (0, l.y)(u.a),
                S = (0, b.a)(),
                T = (0, l.x)(x.b, w),
                M = _.rate_limit_upsell;
            if (!T || null == M) return null;
            let I = !S && "-mb-6";
            C[0] !== I ? (t = (0, p.b)("block w-full scale-105 object-cover", I), C[0] = I, C[1] = t) : t = C[1];
            let O = S ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return C[2] !== t || C[3] !== O ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: O
                })
            }), C[2] = t, C[3] = O, C[4] = n) : n = C[4], C[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, a.jsx)(g.e, {
                className: "contents",
                children: (0, a.jsx)(o.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models",
                    description: "Heading in the Codex Luna Reserve modal on desktop and web, opened by clicking the thread-header badge after included usage is exhausted. Invites the user to regain access to higher-capability OpenAI models through the available upgrade or credit actions. Reassuring, concise heading; no placeholders."
                })
            }), C[5] = r) : r = C[5], C[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(m.e, {
                className: "items-center pb-2",
                children: (0, a.jsx)(m.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: r,
                    subtitle: (0, a.jsx)(g.d, {
                        className: "contents",
                        children: (0, a.jsx)(o.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models.",
                            description: "Body in the Codex Luna Reserve modal on desktop and web, opened from the Codex or Work thread-header badge after included usage is exhausted. Reassures the user that they are chatting with Luna and invites them to use the available actions below to access higher-capability models. Luna is a model name. No placeholders."
                        })
                    })
                })
            }), C[6] = c) : c = C[6], C[7] !== M.ctas || C[8] !== k || C[9] !== E ? (d = e => (0, a.jsx)("div", {
                className: "self-center",
                children: (0, a.jsx)(m.c, {
                    expandSingleButton: !1,
                    children: M.ctas.map((t, n) => {
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
            }), C[7] = M.ctas, C[8] = k, C[9] = E, C[10] = d) : d = C[10], C[11] !== M || C[12] !== _ || C[13] !== d ? (j = (0, a.jsxs)(m.b, {
                children: [c, (0, a.jsx)(m.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: M,
                        rateLimitStatus: _,
                        renderContent: d
                    })
                })]
            }), C[11] = M, C[12] = _, C[13] = d, C[14] = j) : j = C[14], C[15] !== k || C[16] !== n || C[17] !== j ? (y = (0, a.jsxs)(g.b, {
                open: !0,
                size: "default",
                onOpenChange: k,
                children: [n, j]
            }), C[15] = k, C[16] = n, C[17] = j, C[18] = y) : y = C[18], y
        }

        function y(e) {
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
                let e = v.query.getData(d.c);
                if (null != e) {
                    (0, c.f)(v, j, {
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
            l = n("o1Si"),
            o = n("oyxz"),
            r = n("bf6R"),
            s = n("MRlq");

        function c(e) {
            let t, n, c, d, u, h, p, g, m, f = (0, i.c)(31),
                {
                    restored: v,
                    restoring: b,
                    deleting: x,
                    onDelete: j,
                    onUnarchive: y,
                    onDone: C
                } = e,
                w = void 0 !== x && x;
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
            }), f[8] = t, f[9] = n, f[10] = c, f[11] = d) : d = f[11], f[12] !== w || f[13] !== j || f[14] !== v || f[15] !== b ? (u = v || null == j ? null : (0, a.jsx)(l.a, {
                color: "danger",
                variant: "solid",
                disabled: b,
                loading: w,
                size: "lg",
                onClick: j,
                children: (0, a.jsx)(o.a, {
                    ...s.a.delete
                })
            }), f[12] = w, f[13] = j, f[14] = v, f[15] = b, f[16] = u) : u = f[16];
            let k = v ? C : y;
            return f[17] !== v || f[18] !== b ? (h = v && !b ? (0, a.jsx)(o.a, {
                id: "localConversation.archived.previewDone",
                defaultMessage: "Done",
                description: "Leaves Archive with the restored task selected"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(r.f, {}), (0, a.jsx)(o.a, {
                    ...s.a.unarchive
                })]
            }), f[17] = v, f[18] = b, f[19] = h) : h = f[19], f[20] !== w || f[21] !== b || f[22] !== k || f[23] !== h ? (p = (0, a.jsx)(l.a, {
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
        n.d(t, {
            a: () => c
        })
    }),
    fQbA: (function(e, t, n) {
        var a = n("ABep"),
            i = n("lIZs");

        function l(e) {
            let t = e.findIndex(e => "move-to-project" === e.id),
                n = e.findIndex(e => "separator" === e.type),
                a = -1 === t ? n : t + 1;
            return e.toSpliced(-1 === a ? e.length : a, 0, {
                id: "open-app"
            })
        }

        function o(e, t) {
            return "open-app" === e.id ? (0, a.jsx)(i.a, {
                onSelect: t
            }) : void 0
        }
        n.d(t, {
            a: () => l,
            b: () => o
        })
    }),
    pDUk: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("suct"),
            o = n("iodE"),
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
            let t, n, o, r, s, g, m = (0, i.c)(24),
                {
                    animate: f,
                    children: y,
                    isOpen: C,
                    onOpenChange: w,
                    returnFocusId: k,
                    shouldPreventAutoFocus: _,
                    trigger: E
                } = e,
                S = void 0 === f || f,
                T = void 0 !== _ && _,
                M = (0, c.useContext)(u.a),
                I = (0, c.useContext)(d.c)?.chatPaneElement,
                [O, R] = (0, c.useState)(null),
                D = (0, c.useRef)(!1),
                N = 8 * (0, h.c)(),
                P = O ?? void 0;
            m[0] !== I || m[1] !== M || m[2] !== P || m[3] !== O ? (t = {
                contextElement: P,
                getBoundingClientRect() {
                    let e = O?.closest("[data-app-shell-main-titlebar]") ?? O?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                        t = (e ?? O)?.getBoundingClientRect() ?? new DOMRect,
                        n = j(M, I);
                    if (null == n) return t;
                    let a = n.getBoundingClientRect(),
                        i = Math.max(t.left, a.left),
                        l = Math.min(t.right, a.right);
                    return new DOMRect(i, t.top, Math.max(0, l - i), t.height)
                }
            }, m[0] = I, m[1] = M, m[2] = P, m[3] = O, m[4] = t) : t = m[4];
            let L = t;
            return m[5] !== L ? (n = (0, a.jsx)(p.b, {
                virtualRef: {
                    current: L
                }
            }), m[5] = L, m[6] = n) : n = m[6], m[7] !== E ? (o = (0, a.jsx)(p.e, {
                ref: R,
                asChild: !0,
                children: E
            }), m[7] = E, m[8] = o) : o = m[8], m[9] !== S || m[10] !== y || m[11] !== C || m[12] !== N || m[13] !== k || m[14] !== T ? (r = C && (0, a.jsx)(x, {
                className: "z-50 flex flex-col text-default outline-hidden",
                animate: S,
                align: "end",
                alignOffset: N,
                collisionPadding: N,
                side: "bottom",
                sideOffset: N,
                unstyled: !0,
                onOpenAutoFocus: e => {
                    D.current = !1, T && e.preventDefault()
                },
                onCloseAutoFocus: e => {
                    if (T) e.preventDefault();
                    else if (!D.current && null != k) {
                        let t = document.getElementById(k);
                        t?.focus({
                            preventScroll: !0
                        }), null != t && document.activeElement === t && e.preventDefault()
                    }
                },
                onInteractOutside: e => {
                    e.defaultPrevented || (D.current = !0)
                },
                onFocusOutside: b,
                onPointerDownOutside: v,
                style: {
                    maxHeight: "none",
                    maxWidth: "none"
                },
                children: y
            }), m[9] = S, m[10] = y, m[11] = C, m[12] = N, m[13] = k, m[14] = T, m[15] = r) : r = m[15], m[16] !== r ? (s = (0, a.jsx)(l.a, {
                children: r
            }), m[16] = r, m[17] = s) : s = m[17], m[18] !== C || m[19] !== w || m[20] !== n || m[21] !== o || m[22] !== s ? (g = (0, a.jsxs)(p.a, {
                open: C,
                onOpenChange: w,
                children: [n, o, s]
            }), m[18] = C, m[19] = w, m[20] = n, m[21] = o, m[22] = s, m[23] = g) : g = m[23], g
        }

        function v(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function b(e) {
            e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
        }

        function x(e) {
            let t, n, l, f, v, b, x, y, C, w, k = (0, i.c)(25);
            k[0] !== e ? ({
                animate: t,
                children: n,
                className: l,
                ...f
            } = e, k[0] = e, k[1] = t, k[2] = n, k[3] = l, k[4] = f) : (t = k[1], n = k[2], l = k[3], f = k[4]);
            let _ = (0, o.a)(),
                E = (0, s.z)(g.c),
                S = t && !E,
                T = (0, c.useContext)(u.a),
                M = (0, c.useContext)(d.c)?.chatPaneElement,
                I = (0, h.c)(),
                O = (0, c.useRef)(null),
                R = (0, c.useRef)(S);
            k[5] !== M || k[6] !== T || k[7] !== I ? (v = () => {
                let e = O.current,
                    t = j(T, M);
                if (null == e || null == t || !R.current) return;
                let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-a.top)/I}px ${(a.right-n.right)/I}px ${(a.bottom-n.bottom)/I}px ${(n.left-a.left)/I}px)`
            }, k[5] = M, k[6] = T, k[7] = I, k[8] = v) : v = k[8];
            let D = v,
                N = !_,
                P = !_;
            k[9] !== D ? (b = () => {
                R.current = !0, requestAnimationFrame(D)
            }, k[9] = D, k[10] = b) : b = k[10], k[11] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                R.current = !1, O.current?.style.removeProperty("clip-path")
            }, k[11] = x) : x = k[11];
            let L = !!S && m.b.hidden;
            return k[12] !== S ? (y = S ? m.a : {
                duration: 0
            }, k[12] = S, k[13] = y) : y = k[13], k[14] !== n || k[15] !== b || k[16] !== L || k[17] !== y ? (C = (0, a.jsx)(r.a.div, {
                onAnimationStart: b,
                onAnimationComplete: x,
                initial: L,
                animate: m.b.visible,
                exit: m.b.hidden,
                transition: y,
                children: n
            }), k[14] = n, k[15] = b, k[16] = L, k[17] = y, k[18] = C) : C = k[18], k[19] !== l || k[20] !== f || k[21] !== N || k[22] !== P || k[23] !== C ? (w = (0, a.jsx)(p.c, {
                ...f,
                ref: O,
                className: l,
                forceMount: !0,
                "aria-hidden": N,
                inert: P,
                children: C
            }), k[19] = l, k[20] = f, k[21] = N, k[22] = P, k[23] = C, k[24] = w) : w = k[24], w
        }

        function j(e, t) {
            return void 0 !== t ? t ?? e : e?.querySelector("[data-app-shell-main-content-layout]") ?? e
        }
        n.d(t, {
            a: () => f
        })
    }),
    enMl: (function(e, t, n) {
        var a = n("QosV"),
            i = n("iTtm"),
            l = n("zd8w"),
            o = n("tSEg"),
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
                f = (0, i.y)(o.a);
            return d[0] !== g || d[1] !== m || d[2] !== f || d[3] !== p ? (t = () => {
                f.set(r.a, g), f.set(r.c, p), f.set(r.e, m)
            }, n = [g, m, f, p], d[0] = g, d[1] = m, d[2] = f, d[3] = p, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, l.useLayoutEffect)(t, n), d[6] !== f ? (s = () => () => {
                f.set(r.a, null), f.set(r.c, null), f.set(r.e, !0)
            }, c = [f], d[6] = f, d[7] = s, d[8] = c) : (s = d[7], c = d[8]), (0, l.useLayoutEffect)(s, c), null
        }
        n.d(t, {
            a: () => s
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
            h = n("WwnD"),
            p = n("NkWL"),
            g = n("pZMh"),
            m = n("erBs");

        function f(e) {
            let t = e.get(o.Z);
            return t?.isVisible === !0 && ("split" === t.mode || e.get(p.b)) ? function(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.j,
                    m = e.get(r.j.activeTab$),
                    f = e.get(g.e),
                    v = null;
                o === r.a ? v = "bottom" : "split" === f.mode && (e.get(g.c) ? (v = f.contentSide, "content" === t.kind && t.tab.tabId === e.get(g.g) && (v = "left" === f.contentSide ? "right" : "left")) : "chat" === t.kind ? v = "left" === f.contentSide ? "right" : "left" : t.tab.tabId === m?.tabId && (v = f.contentSide));
                let b = "content" === t.kind || null != m,
                    x = [{
                        enabled: b && "left" !== v && (0, h.a)(t, "left"),
                        id: "unified-workspace-move-left",
                        icon: c.w,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToLeftPane",
                            defaultMessage: "Move to left pane",
                            description: "Context menu action that presents the selected task tab in the left workspace pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "left", o))
                    }, {
                        enabled: b && "right" !== v && (0, h.a)(t, "right"),
                        id: "unified-workspace-move-right",
                        icon: c.y,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToRightPane",
                            defaultMessage: "Move to right pane",
                            description: "Context menu action that presents the selected task tab in the right workspace pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "right", o))
                    }].filter(e => !1 !== e.enabled);
                return o !== r.a && e.get(s.b) && (0, h.a)(t, "bottom") && x.push({
                    id: "unified-workspace-move-bottom",
                    icon: c.p,
                    message: (0, a.e)({
                        id: "threadWorkspace.contextMenu.moveToBottomPane",
                        defaultMessage: "Move to bottom pane",
                        description: "Context menu action that moves an existing Terminal task tab into the bottom utility pane"
                    }),
                    onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "bottom", o))
                }), "content" !== t.kind || t.tab.isWorkspaceHome || null == t.tab.tabType.windowTransfer || null == d.appServices.detachedWindows || x.push({
                    id: "unified-workspace-move-new-window",
                    enabled: !(0, l.c)(e, t.tab.tabId) && t.tab.tabType.windowTransfer.canTransfer(e, t.tab.props),
                    icon: c.Ag,
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
                            return a(e, o, t.tab, null)
                        }))
                    }
                }), "chat" === t.kind && e.get(p.b) && x.push({
                    id: "close-tab",
                    icon: c.dj,
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