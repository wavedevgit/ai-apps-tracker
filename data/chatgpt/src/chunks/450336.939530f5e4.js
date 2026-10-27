export const __rspack_esm_id = 450336;
export const __rspack_esm_ids = [450336];
export const __webpack_modules__ = {
    kUij: (function(e, t, n) {
        n.d(t, {
            a: () => c,
            b: () => u,
            c: () => d,
            d: () => i,
            e: () => l,
            f: () => p,
            g: () => h,
            h: () => s
        });
        var a = n("ASxG");
        let i = "openai/first-party-plugin-logging",
            l = "openai/logging/message";
        new WeakMap;
        let r = a.enum(["trace", "debug", "info", "warning", "error"]),
            o = a.object({
                component: a.string().min(1).max(200),
                level: r,
                message: a.string().max(2e4),
                metadata: a.record(a.string(), a.unknown()).optional()
            }),
            s = a.object({
                method: a.literal(l),
                params: a.object({
                    entries: a.array(o).min(1).max(50)
                })
            }),
            c = "openai/first-party-plugin-bridge",
            d = "ui/openai/first-party-plugin-bridge",
            u = "ui/notifications/openai/first-party-plugin-bridge",
            p = a.object({
                message: a.string()
            }),
            h = a.object({
                method: a.literal(d),
                params: p
            })
    }),
    Vlqh: (function(e, t, n) {
        var a = n("ASxG");
        let i = {
            WORKSTREAM_HANDOFF_REQUESTED: "CODEX_PLUGINS_APP_SURFACE_ACTION_WORKSTREAM_HANDOFF_REQUESTED",
            GLOBAL_ENTRYPOINT_VIEWED: "CODEX_PLUGINS_APP_SURFACE_ACTION_GLOBAL_ENTRYPOINT_VIEWED"
        };
        a.object({
            action: a.enum(i),
            tileName: a.enum(["analyze-airway-rnaseq", "compare-pathology-visium", "design-pdl1-nanobodies", "improve-trastuzumab-cdrs", "dock-imatinib-abl1", "design-jak2-binders", "predict-ace-inhibitor-logd-pka", "assess-antibody-developability", "predict-kras-g12c", "map-petase-mutations", "embed-gb1-sequences", "price-pdl1-assays"]).optional()
        }).strict().refine(e => {
            let {
                action: t,
                tileName: n
            } = e;
            return null == n || t === i.WORKSTREAM_HANDOFF_REQUESTED
        }), n.d(t, {}, {
            a: "rosalind@openai-curated-remote"
        })
    }),
    fD5v: (function(e, t, n) {
        n("kSHG");
        var a = n("ASxG");
        let i = a.strictObject({
            path: a.string().min(1)
        });
        n.d(t, {}, {
            a: "openai/files/open",
            b: i
        })
    }),
    WWo4: (function(e, t, n) {
        var a = n("kSHG"),
            i = n("ASxG");
        let l = "openai/message",
            r = i.object({
                target: i.enum(["active", "new"]).optional(),
                send: i.boolean().optional()
            }).strict(),
            o = a.X.shape.params.unwrap().extend({
                role: i.literal("user"),
                content: i.array(a.g),
                _meta: a.X.shape.params.unwrap().shape._meta.unwrap().extend({
                    [l]: r.optional()
                }).optional()
            });
        n.d(t, {}, {
            a: l,
            b: r,
            c: o
        })
    }),
    OppN: (function(e, t, n) {
        var a = n("kSHG"),
            i = n("ASxG");
        let l = "openai/modelContext",
            r = i.string().min(1);
        i.object({
            [l]: i.object({
                updateId: r
            })
        }), i.union([i.object({
            content: i.array(a.g).optional(),
            structuredContent: i.record(i.string(), i.unknown()).optional(),
            updateId: r
        }), i.null()]), n.d(t, {}, {
            a: l
        })
    }),
    fBor: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => j
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("iTtm"),
            r = n("aFoA"),
            o = n("Bbed"),
            s = n("tSEg"),
            c = n("zd8w"),
            d = n("QcW8"),
            u = n("ZU27"),
            p = n("gbrq"),
            h = n("rxj0"),
            g = n("uk1V"),
            m = n("nr53"),
            b = n("PIpC"),
            v = n("UejO");

        function f() {
            let e, t, a, o, f = (0, i.c)(6),
                y = (0, l.y)(s.a);
            return f[0] !== y ? (e = () => {
                let e = null;
                return y.watch(t => {
                    let a = t.get(b.c),
                        i = t.get(d.f),
                        l = t.get(v.b),
                        o = t.get(r.a, l?.hostId == null ? l?.conversationId ?? null : null),
                        s = t.get(p.i),
                        c = t.get(u.j.tabs$),
                        f = "chatgpt-thread" === t.value.routeKind && t.get(h.d, t.value.conversationId);
                    if (null == a || !i || f || e === a || (e = a, (0, v.a)(l, t.value, o, t.value.clientThreadId) || s || c.length > 0)) return;
                    let y = (0, b.a)(a);
                    if (!y?.isOpen) return;
                    let j = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return j ? null : Promise.all([t.query.fetch(n, y.projectId), t.get(m.b) ? t.query.fetch(m.c, y.projectId) : null])
                    }).then(e => {
                        if (null == e) return;
                        let [n, i] = e, l = (0, b.a)(a);
                        j || null == n || i?.supports_chatgpt_preview === !1 || !l?.isOpen || l.projectId !== y.projectId || "active" !== n.status || null == n.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(h.d, t.value.conversationId) || (0, g.a)(t, {
                            type: "appgen-app",
                            projectId: n.id,
                            title: n.title,
                            url: n.current_live_url
                        })
                    }, x), () => {
                        j = !0
                    }
                })
            }, t = [y], f[0] = y, f[1] = e, f[2] = t) : (e = f[1], t = f[2]), (0, c.useEffect)(e, t), f[3] !== y ? (a = () => {
                let e = y.get(p.j),
                    t = null;
                return y.watch(n => {
                    let a = n.get(p.j),
                        i = n.get(u.j.activeTab$),
                        l = n.get(b.c);
                    (a !== e || null == t && null != l) && null != l && i?.tabId.startsWith("site-preview:") && (0, b.b)(l, i.tabId.slice(13), a), e = a, t = l
                })
            }, o = [y], f[3] = y, f[4] = a, f[5] = o) : (a = f[4], o = f[5]), (0, c.useEffect)(a, o), null
        }

        function x() {}
        let y = (0, o.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function j() {
            let e, t, n, o, c = (0, i.c)(12),
                d = (0, l.y)(s.a),
                u = (0, l.z)(v.b),
                p = (0, l.x)(r.a, u?.hostId == null ? u?.conversationId ?? null : null);
            if ("home" !== d.value.routeKind && "chatgpt-thread" !== d.value.routeKind && "local-thread" !== d.value.routeKind) return null;
            c[0] !== u || c[1] !== p || c[2] !== d ? (e = u?.url != null && (0, v.a)(u, d.value, p, d.value.clientThreadId), c[0] = u, c[1] = p, c[2] = d, c[3] = e) : e = c[3];
            let h = e;
            return c[4] !== d ? (t = "home" !== d.value.routeKind ? (0, a.jsx)(f, {}) : null, c[4] = d, c[5] = t) : t = c[5], c[6] !== h || c[7] !== u ? (n = h ? (0, a.jsx)(y, {
                pending: u
            }) : null, c[6] = h, c[7] = u, c[8] = n) : n = c[8], c[9] !== t || c[10] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), c[9] = t, c[10] = n, c[11] = o) : o = c[11], o
        }
    }),
    rjva: (function(e, t, n) {
        n.d(t, {
            a: () => X
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("l2oX"),
            r = n("iTtm"),
            o = n("zd8w"),
            s = n("v7qY"),
            c = n("Wf1j"),
            d = n("Q2Qp"),
            u = n("QcW8"),
            p = n("ZU27"),
            h = n("wD9O"),
            g = n("nKJ6"),
            m = n("SGIb"),
            b = n("vi3X"),
            v = n("O9Pc"),
            f = n("fDIZ"),
            x = n("jEN2"),
            y = n("wqvF"),
            j = n("giDA"),
            w = n("yC2B"),
            C = n("HnT3"),
            _ = n("tSEg"),
            E = n("El6m"),
            S = n("dN0a"),
            T = n("dt6g"),
            k = n("WwnD");
        n("G7Oa");
        var I = n("q1q2"),
            O = n("VwGH"),
            A = n("on57"),
            R = n("W5pg"),
            D = n("IPUh"),
            N = n("qjLK"),
            M = n("I7bK");
        n("eFp2");
        var P = n("oH56");
        n("EpL9");
        var L = n("DUYS"),
            F = n("gbrq"),
            z = n("bIvi");
        n("Vhua");
        var W = n("pZMh");

        function B(e) {
            let t, n, l, c, d, u, h, g, m, b, v, f = (0, i.c)(33),
                {
                    destination: x,
                    direction: y,
                    surface: j
                } = e,
                {
                    bottomPanelTargetHeight: w,
                    contentPaneWidthRatio: C,
                    mainContentWidth: _
                } = (0, M.g)(),
                E = (0, o.useContext)(P.a),
                S = (0, r.z)(W.c),
                T = (0, r.z)(W.g),
                k = j ?? (E?.chatTabDragState != null ? "chat" : "content"),
                B = S ? "content" === k && E?.dragState?.draggedTab.tabId === T : "chat" === k,
                U = (0, o.useContext)(N.a),
                V = (0, r.z)(F.d),
                q = (0, r.z)(p.a.tabIds$),
                K = E?.dragState?.sourceController === p.a && 1 === q.length;
            f[0] !== C || f[1] !== _ ? (t = [_, C], f[0] = C, f[1] = _, f[2] = t) : t = f[2], f[3] !== B ? (n = e => {
                let [t, n] = e, a = Math.min(t, (0, L.e)(n, t, "unified"));
                return B ? t - a : a
            }, f[3] = B, f[4] = n) : n = f[4];
            let G = (0, R.a)(t, n);
            f[5] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, I.e)(H), (0, I.g)({
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
            }, f[5] = l) : l = f[5];
            let {
                floatingStyles: Q,
                refs: X
            } = (0, I.h)(l);
            f[6] !== X ? (c = e => {
                X.setReference(e)
            }, f[6] = X, f[7] = c) : c = f[7];
            let Z = (0, z.a)(c);
            f[8] !== X ? (d = e => {
                X.setFloating(e)
            }, f[8] = X, f[9] = d) : d = f[9];
            let Y = (0, z.a)(d),
                J = "bottom" === x && "inset-x-0 bottom-0",
                ee = "left" === x && "inset-y-0 left-0",
                et = "right" === x && "inset-y-0 right-0";
            f[10] !== J || f[11] !== ee || f[12] !== et ? (u = (0, A.b)("pointer-events-none absolute", J, ee, et), f[10] = J, f[11] = ee, f[12] = et, f[13] = u) : u = f[13];
            let en = "bottom" === x ? void 0 : V && !K ? U ?? void 0 : void 0,
                ea = "bottom" === x ? w : void 0,
                ei = "bottom" === x ? void 0 : G;
            return f[14] !== en || f[15] !== ea || f[16] !== ei ? (h = {
                bottom: en,
                height: ea,
                width: ei
            }, f[14] = en, f[15] = ea, f[16] = ei, f[17] = h) : h = f[17], f[18] !== Z || f[19] !== h || f[20] !== u ? (g = (0, a.jsx)(D.a.div, {
                ref: Z,
                "aria-hidden": !0,
                className: u,
                dir: "ltr",
                style: h
            }), f[18] = Z, f[19] = h, f[20] = u, f[21] = g) : g = f[21], f[22] !== x ? (m = (0, a.jsx)($, {
                destination: x
            }), f[22] = x, f[23] = m) : m = f[23], f[24] !== x || f[25] !== y || f[26] !== Q || f[27] !== Y || f[28] !== m ? (b = (0, s.createPortal)((0, a.jsx)("div", {
                ref: Y,
                "aria-hidden": !0,
                className: "pointer-events-none z-50",
                "data-unified-workspace-drop-indicator": x,
                dir: y,
                style: Q,
                children: m
            }), document.body), f[24] = x, f[25] = y, f[26] = Q, f[27] = Y, f[28] = m, f[29] = b) : b = f[29], f[30] !== g || f[31] !== b ? (v = (0, a.jsxs)(a.Fragment, {
                children: [g, b]
            }), f[30] = g, f[31] = b, f[32] = v) : v = f[32], v
        }

        function H(e) {
            let {
                rects: t
            } = e;
            return -t.reference.height
        }

        function $(e) {
            let t, n, l, r = (0, i.c)(11),
                {
                    destination: o
                } = e,
                s = (0, h.c)(),
                c = "bottom" === o && "border-t",
                d = "left" === o && "border-r",
                u = "right" === o && "border-l";
            r[0] !== c || r[1] !== d || r[2] !== u ? (t = (0, A.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", c, d, u), r[0] = c, r[1] = d, r[2] = u, r[3] = t) : t = r[3];
            let p = `calc(100% / ${s})`,
                g = `scale(${s})`,
                m = `calc(100% / ${s})`;
            return r[4] !== p || r[5] !== g || r[6] !== m ? (n = {
                height: p,
                transform: g,
                transformOrigin: "top left",
                width: m
            }, r[4] = p, r[5] = g, r[6] = m, r[7] = n) : n = r[7], r[8] !== t || r[9] !== n ? (l = (0, a.jsx)("div", {
                className: t,
                style: n
            }), r[8] = t, r[9] = n, r[10] = l) : l = r[10], l
        }
        var U = n("erBs"),
            V = n("kHG0"),
            q = n("kmKV"),
            K = n("RN8F"),
            G = n("abd8"),
            Q = n("GMTh");

        function X(e) {
            let t, n, I, O, A, R, D = (0, i.c)(55),
                {
                    children: N,
                    composerOnly: M,
                    forceExpanded: P,
                    placement: L,
                    showHeader: F,
                    showComposerDivider: z,
                    isHidden: W,
                    persistPresentation: H,
                    reserveContent: $,
                    reserveFullComposerHeight: q,
                    onPresentationChange: X,
                    title: J,
                    titleContent: ee,
                    statusState: et,
                    titleStatusState: en,
                    hasElicitation: ea,
                    notifications: ei,
                    renderTranscript: el,
                    hasTranscript: er,
                    pendingFormId: eo
                } = e,
                es = void 0 !== M && M,
                ec = void 0 !== P && P,
                ed = void 0 === F ? !es : F,
                eu = void 0 === z ? !es : z,
                ep = void 0 === H || H,
                eh = void 0 === eo ? C.a : eo,
                eg = (0, r.y)(_.a),
                em = "pane" === (void 0 === L ? "floating" : L),
                eb = (0, c.a)(),
                {
                    isHidden: ev
                } = (0, Q.a)(em ? "embedded" : "content"),
                ef = (0, r.z)(p.j.activeTab$),
                ex = void 0 !== W && W || ev,
                ey = (0, o.useContext)(d.a),
                ej = (0, o.useContext)(E.b),
                ew = (0, o.useContext)(E.a),
                eC = (0, o.useContext)(v.a),
                e_ = (0, o.useContext)(f.a),
                eE = (0, o.useContext)(b.a),
                eS = (0, o.useContext)(j.a),
                eT = (0, h.c)(),
                [ek, eI] = (0, o.useState)(null),
                eO = !(0, r.z)(S.n),
                eA = (0, r.z)(eh),
                eR = (0, r.z)(ep ? K.a : void 0);
            es && !ed && (eR = "compact");
            let eD = (0, r.z)(null == eA && (ea ?? E.c));
            D[0] !== ef || D[1] !== em ? (t = em ? null : (0, g.getThreadBrowserTabIdFromPanelTab)(ef), D[0] = ef, D[1] = em, D[2] = t) : t = D[2];
            let eN = t,
                eM = void 0 !== q && q || ef?.tabType.kind === "latex-document" || ef?.tabType.kind === "image-preview",
                [eP, eL] = (0, o.useState)(null);
            D[3] !== ey || D[4] !== eg ? (n = e => {
                if (null == e || !(e instanceof MouseEvent) || "pointercancel" === e.type || null == ey || null == eg.get(u.Z) || null == eg.get(p.j.activeTab$) || e.clientY < 0 || e.clientY > window.innerHeight) return null;
                let t = ey.getBoundingClientRect();
                return e.clientX <= t.left + 24 ? "left" : e.clientX >= t.right - 24 ? "right" : null
            }, D[3] = ey, D[4] = eg, D[5] = n) : n = D[5];
            let eF = n;
            D[6] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, a.jsx)("div", {
                ref: e => {
                    null != e && eI(e)
                },
                className: "contents"
            }), D[6] = I) : I = D[6];
            let ez = em || ex;
            return D[7] !== ef || D[8] !== eb || D[9] !== em || D[10] !== ey || D[11] !== eP ? (O = em || null == ey || null == eP || null == ef ? null : (0, s.createPortal)((0, a.jsx)(B, {
                destination: eP,
                direction: (0, w.a)(eb.locale),
                surface: "chat"
            }), ey), D[7] = ef, D[8] = eb, D[9] = em, D[10] = ey, D[11] = eP, D[12] = O) : O = D[12], D[13] !== eN || D[14] !== ef?.tabId || D[15] !== ef?.tabType || D[16] !== N || D[17] !== es || D[18] !== ec || D[19] !== eF || D[20] !== eD || D[21] !== er || D[22] !== eE || D[23] !== e_ || D[24] !== eS || D[25] !== ew || D[26] !== ej || D[27] !== eb || D[28] !== ex || D[29] !== eO || D[30] !== em || D[31] !== ey || D[32] !== ei || D[33] !== X || D[34] !== ek || D[35] !== eA || D[36] !== ep || D[37] !== el || D[38] !== $ || D[39] !== eg || D[40] !== eM || D[41] !== eu || D[42] !== ed || D[43] !== et || D[44] !== eR || D[45] !== eC || D[46] !== J || D[47] !== ee || D[48] !== en || D[49] !== eT ? (A = e => (0, a.jsx)(l.a, {
                transformPagePoint: e => ({
                    x: e.x / eT,
                    y: e.y / eT
                }),
                children: (0, a.jsx)(E.b, {
                    value: em ? ej : {
                        activeBrowserTabId: eN,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            eg.get(p.j.activeTab$)?.tabId === ef?.tabId && (eg.get(S.j) || (0, S.h)(eg, {
                                prefersReducedMotion: !0
                            }), (0, x.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, a.jsx)(E.a, {
                        value: em ? ew : "expanded",
                        children: (0, a.jsx)(m.a, {
                            dockThreadKey: G.c,
                            titleContent: ee,
                            statusState: et,
                            titleStatusState: en,
                            hasTranscript: er,
                            pendingFormId: eA,
                            notifications: ei,
                            containerSize: e,
                            renderMenu: Z,
                            forceExpanded: ec || eD && !es,
                            isHidden: em || ex,
                            isMinimized: eO,
                            onDragOver: es ? void 0 : e => {
                                let t = eF(e);
                                return eL(t), null != t
                            },
                            onDragEnd: es ? void 0 : e => {
                                eL(null);
                                let t = eF(e);
                                return null != t && (0, T.a)(eg, "tab_drag", () => (0, k.b)(eg, eg.get(U.b).chat, t))
                            },
                            presentation: eR,
                            showHeader: ed,
                            showComposerDivider: eu,
                            background: es && !ed ? void 0 : "panel",
                            onPresentationChange: e => {
                                ep && eg.set(K.a, e), X?.(e)
                            },
                            onMinimizedChange: e => {
                                (e ? S.r : S.h)(eg, {
                                    prefersReducedMotion: !0
                                })
                            },
                            title: J ?? eb.formatMessage({
                                id: "quickChat.mainConversation",
                                defaultMessage: "Chat",
                                description: "Fallback title for the task's main conversation in the floating chat"
                            }),
                            renderTranscript: null == el ? void 0 : (e, t) => el({
                                isVisible: t
                            }),
                            children: e => (0, a.jsx)(v.a, {
                                value: em || null == eN ? eC : ey,
                                children: (0, a.jsx)(y.a, {
                                    target: em ? ek : null,
                                    children: (0, a.jsx)(Y, {
                                        mainContentElement: ey,
                                        presentation: e,
                                        paneContext: em ? {
                                            transition: ej,
                                            escapeHandler: e_,
                                            bannerTarget: eE,
                                            overlayOwner: eS
                                        } : void 0,
                                        reserveFullComposerHeight: eM,
                                        reserveContent: $ ?? (null == eN && ef?.tabType.kind !== "mcp-app" && ef?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof N ? N(em ? void 0 : e) : N
                                    })
                                })
                            })
                        })
                    })
                })
            }), D[13] = eN, D[14] = ef?.tabId, D[15] = ef?.tabType, D[16] = N, D[17] = es, D[18] = ec, D[19] = eF, D[20] = eD, D[21] = er, D[22] = eE, D[23] = e_, D[24] = eS, D[25] = ew, D[26] = ej, D[27] = eb, D[28] = ex, D[29] = eO, D[30] = em, D[31] = ey, D[32] = ei, D[33] = X, D[34] = ek, D[35] = eA, D[36] = ep, D[37] = el, D[38] = $, D[39] = eg, D[40] = eM, D[41] = eu, D[42] = ed, D[43] = et, D[44] = eR, D[45] = eC, D[46] = J, D[47] = ee, D[48] = en, D[49] = eT, D[50] = A) : A = D[50], D[51] !== ez || D[52] !== O || D[53] !== A ? (R = (0, a.jsxs)(a.Fragment, {
                children: [I, (0, a.jsx)(V.a, {
                    isHidden: ez,
                    overlay: O,
                    children: A
                })]
            }), D[51] = ez, D[52] = O, D[53] = A, D[54] = R) : R = D[54], R
        }

        function Z(e) {
            return (0, a.jsx)(q.a, {
                ...e
            })
        }

        function Y(e) {
            let t, n, l, s, c, d, u, p, h, g, m, v = (0, i.c)(38),
                {
                    children: x,
                    mainContentElement: y,
                    presentation: w,
                    paneContext: C,
                    reserveContent: T,
                    reserveFullComposerHeight: k
                } = e,
                I = (0, r.y)(_.a),
                O = (0, o.useRef)(null),
                A = (0, o.useContext)(E.b),
                R = (0, o.useContext)(f.a),
                D = (0, o.useContext)(b.a),
                N = (0, o.useContext)(j.a),
                {
                    activeBrowserTabId: M
                } = A,
                P = null != C,
                {
                    isCompact: L,
                    isDockedTop: F,
                    isHidden: z,
                    isMinimized: W,
                    isMoving: B,
                    composerContentHeight: H,
                    dockedReservePx: $
                } = w,
                U = !T || z || W ? 0 : Math.max(118, L ? $ : 0, k ? H + 118 - 102 : 0),
                V = F && L && $ > 0 ? U : 0,
                [q, K] = (0, o.useState)(!W);
            (L || W) && !W !== q && K(!W);
            let G = T && !z && q ? S.b : 0;
            v[0] !== M || v[1] !== P ? (t = () => {
                if (P || null == M) return;
                let e = O.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && O.current?.contains(e) && e.blur()
            }, n = [M, P], v[0] = M, v[1] = P, v[2] = t, v[3] = n) : (t = v[2], n = v[3]), (0, o.useLayoutEffect)(t, n), v[4] !== G || v[5] !== F || v[6] !== z || v[7] !== W || v[8] !== P || v[9] !== y || v[10] !== U || v[11] !== I || v[12] !== V ? (l = () => {
                if (!P && null != y) return y.style.setProperty(S.a, F ? `${G}px 0 0` : `0 0 ${G}px`), y.style.setProperty(S.c, `${z||W||F?0:102}px`), y.style.setProperty(S.d, `${F?0:U}px`), y.style.setProperty(S.g, `${F?U:0}px`), (0, S.o)(I, F ? 0 : U), I.set(S.l, V), () => {
                    y.style.removeProperty(S.a), y.style.removeProperty(S.c), y.style.removeProperty(S.d), y.style.removeProperty(S.g), (0, S.o)(I, 0), I.set(S.l, 0)
                }
            }, s = [G, P, F, z, W, y, U, I, V], v[4] = G, v[5] = F, v[6] = z, v[7] = W, v[8] = P, v[9] = y, v[10] = U, v[11] = I, v[12] = V, v[13] = l, v[14] = s) : (l = v[13], s = v[14]), (0, o.useLayoutEffect)(l, s), v[15] !== H || v[16] !== L || v[17] !== W || v[18] !== B || v[19] !== P || v[20] !== I ? (c = () => {
                let e = O.current;
                if (P || null == e) return;
                let t = () => {
                    let t = null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    I.set(S.i, !L || W || B || t || H > 102)
                };
                t();
                let n = new MutationObserver(t);
                return n.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    n.disconnect(), I.set(S.i, !1)
                }
            }, d = [H, P, L, W, B, I], v[15] = H, v[16] = L, v[17] = W, v[18] = B, v[19] = P, v[20] = I, v[21] = c, v[22] = d) : (c = v[21], d = v[22]), (0, o.useLayoutEffect)(c, d);
            let Q = null == C ? A : C.transition,
                X = null == C ? R : C.escapeHandler,
                Z = null == C ? D : C.bannerTarget,
                Y = null == C ? N : C.overlayOwner,
                J = P ? "contents" : void 0;
            return v[23] !== x || v[24] !== J ? (u = (0, a.jsx)("div", {
                ref: O,
                className: J,
                "data-right-panel-composer-overlay-content": "true",
                children: x
            }), v[23] = x, v[24] = J, v[25] = u) : u = v[25], v[26] !== Y || v[27] !== u ? (p = (0, a.jsx)(j.a, {
                value: Y,
                children: u
            }), v[26] = Y, v[27] = u, v[28] = p) : p = v[28], v[29] !== p || v[30] !== Z ? (h = (0, a.jsx)(b.a, {
                value: Z,
                children: p
            }), v[29] = p, v[30] = Z, v[31] = h) : h = v[31], v[32] !== h || v[33] !== X ? (g = (0, a.jsx)(f.a, {
                value: X,
                children: h
            }), v[32] = h, v[33] = X, v[34] = g) : g = v[34], v[35] !== g || v[36] !== Q ? (m = (0, a.jsx)(E.b, {
                value: Q,
                children: g
            }), v[35] = g, v[36] = Q, v[37] = m) : m = v[37], m
        }
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            i = n.n(a),
            l = n("iTtm"),
            r = n("tSEg"),
            o = n("wrxv");

        function s(e) {
            let t = (0, l.j)(r.a, (t, n) => {
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
            return (0, l.d)(r.a, (n, a) => {
                if (null == n) return o.a;
                let i = [],
                    l = !1;
                for (let r of e.conversationIds(a.scope, n)) {
                    let n = e.status(a.scope, r);
                    if (n.pending) {
                        l = !0;
                        continue
                    }
                    if (!n.unread || !n.completed) continue;
                    let o = e.preview(a.scope, r);
                    null != o && i.push({
                        id: r,
                        title: e.title(a.scope, r),
                        preview: o,
                        ...a.get(t, r)
                    })
                }
                return i.length > 0 ? {
                    type: "ready",
                    value: i
                } : l ? o.b : o.a
            }, {
                isEqual: i()
            })
        }
        n.d(t, {
            a: () => s
        })
    }),
    GKsW: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("iTtm"),
            r = n("zd8w"),
            o = n("GaA7"),
            s = n("OWtl"),
            c = n("tSEg"),
            d = n("n5oN");
        let u = (0, l.u)(s.a, () => []);

        function p(e) {
            let t, n = (0, i.c)(2),
                {
                    title: r
                } = e,
                o = (0, l.y)(c.a),
                s = (0, l.x)(d.a, `${o.value.pathname}${o.value.search??""}`),
                u = r ?? s;
            return n[0] !== u ? (t = (0, a.jsx)(h, {
                title: u
            }), n[0] = u, n[1] = t) : t = n[1], t
        }

        function h(e) {
            let t, n, a, c, d, p, h = (0, i.c)(13),
                {
                    title: v,
                    nativeTitle: f
                } = e,
                x = void 0 === f ? v : f,
                y = (0, l.y)(s.a),
                [j] = (0, r.useState)(g);
            return h[0] !== x || h[1] !== j || h[2] !== y || h[3] !== v ? (t = () => {
                if (o.appServices?.windowTitle == null) return;
                let e = {
                    owner: j,
                    title: null == v ? void 0 : x ?? null
                };
                y.set(u, t => t.some(e => e.owner === j) ? t.map(t => t.owner === j ? e : t) : [...t, e]), b(y)
            }, n = [y, j, v, x], h[0] = x, h[1] = j, h[2] = y, h[3] = v, h[4] = t, h[5] = n) : (t = h[4], n = h[5]), (0, r.useEffect)(t, n), h[6] !== j || h[7] !== y ? (a = () => () => {
                o.appServices?.windowTitle != null && (y.set(u, e => e.filter(e => e.owner !== j)), b(y))
            }, c = [y, j], h[6] = j, h[7] = y, h[8] = a, h[9] = c) : (a = h[8], c = h[9]), (0, r.useEffect)(a, c), h[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                m(v);
                let t = document.title;
                return () => {
                    document.title === t && m(e)
                }
            }, p = [v], h[10] = v, h[11] = d, h[12] = p) : (d = h[11], p = h[12]), (0, r.useEffect)(d, p), null
        }

        function g() {
            return Symbol()
        }

        function m(e) {
            let t = document.head.querySelector("title")?.firstChild;
            t instanceof Text && null == t.nextSibling ? t.data = e : document.title = e
        }

        function b(e) {
            o.appServices.windowTitle?.setTitle(e.get(u).findLast(e => void 0 !== e.title)?.title ?? null)
        }
        n.d(t, {
            a: () => h,
            b: () => p
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => j
        });
        var a = n("ABep"),
            i = n("QosV"),
            l = n("iTtm"),
            r = n("oyxz"),
            o = n("TjgH"),
            s = n("ygO2"),
            c = n("X6Vn"),
            d = n("gPv1"),
            u = n("OWtl"),
            p = n("nsrx"),
            h = n("on57"),
            g = n("JNtf"),
            m = n("mUDD"),
            b = n("ZhKl"),
            v = n("qVxm"),
            f = n("a6Zv"),
            x = n("eLmE");

        function y(e) {
            let t, n, o, c, d, y, j, w = (0, i.c)(19),
                {
                    hostId: C,
                    onClose: _,
                    rateLimitStatus: E
                } = e,
                S = (0, l.y)(u.a),
                T = (0, f.a)(),
                k = (0, l.x)(x.b, C),
                I = E.rate_limit_upsell;
            if (!k || null == I) return null;
            let O = !T && "-mb-6";
            w[0] !== O ? (t = (0, h.b)("block w-full scale-105 object-cover", O), w[0] = O, w[1] = t) : t = w[1];
            let A = T ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return w[2] !== t || w[3] !== A ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: A
                })
            }), w[2] = t, w[3] = A, w[4] = n) : n = w[4], w[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(g.e, {
                className: "contents",
                children: (0, a.jsx)(r.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models",
                    description: "Heading in the Codex Luna Reserve modal on desktop and web, opened by clicking the thread-header badge after included usage is exhausted. Invites the user to regain access to higher-capability OpenAI models through the available upgrade or credit actions. Reassuring, concise heading; no placeholders."
                })
            }), w[5] = o) : o = w[5], w[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(m.e, {
                className: "items-center pb-2",
                children: (0, a.jsx)(m.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: o,
                    subtitle: (0, a.jsx)(g.d, {
                        className: "contents",
                        children: (0, a.jsx)(r.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models.",
                            description: "Body in the Codex Luna Reserve modal on desktop and web, opened from the Codex or Work thread-header badge after included usage is exhausted. Reassures the user that they are chatting with Luna and invites them to use the available actions below to access higher-capability models. Luna is a model name. No placeholders."
                        })
                    })
                })
            }), w[6] = c) : c = w[6], w[7] !== I.ctas || w[8] !== _ || w[9] !== S ? (d = e => (0, a.jsx)("div", {
                className: "self-center",
                children: (0, a.jsx)(m.c, {
                    expandSingleButton: !1,
                    children: I.ctas.map((t, n) => {
                        if (!(0, b.b)(t.action)) return null;
                        let i = e.actions[t.action];
                        return (0, a.jsx)(s.a, {
                            color: 0 === n ? "primary" : "secondary",
                            disabled: i.disabled,
                            size: "large",
                            onClick: e => {
                                (0, p.a)(S, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), i.log(), _(), i.onClick(e)
                            },
                            children: i.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), w[7] = I.ctas, w[8] = _, w[9] = S, w[10] = d) : d = w[10], w[11] !== I || w[12] !== E || w[13] !== d ? (y = (0, a.jsxs)(m.b, {
                children: [c, (0, a.jsx)(m.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: I,
                        rateLimitStatus: E,
                        renderContent: d
                    })
                })]
            }), w[11] = I, w[12] = E, w[13] = d, w[14] = y) : y = w[14], w[15] !== _ || w[16] !== n || w[17] !== y ? (j = (0, a.jsxs)(g.b, {
                open: !0,
                size: "default",
                onOpenChange: _,
                children: [n, y]
            }), w[15] = _, w[16] = n, w[17] = y, w[18] = j) : j = w[18], j
        }

        function j(e) {
            let t, n, h, g, m = (0, i.c)(7),
                {
                    hostId: b
                } = e,
                v = (0, l.y)(u.a);
            return (0, l.x)(x.b, b) ? (m[0] !== b || m[1] !== v ? (t = () => {
                (0, p.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = v.query.getData(d.b);
                if (null != e) {
                    (0, c.f)(v, y, {
                        hostId: b,
                        rateLimitStatus: e
                    }), (0, p.a)(v, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, p.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, m[0] = b, m[1] = v, m[2] = t) : t = m[2], m[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("span", {
                "aria-hidden": "true",
                className: "text-chart-yellow",
                children: "🌙"
            }), m[3] = n) : n = m[3], m[4] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsxs)(o.a, {
                variant: "reserve",
                children: [n, (0, a.jsx)("span", {
                    className: "brightness-75 dark:brightness-100",
                    children: (0, a.jsx)(r.a, {
                        id: "codex.lunaReserve.header.label",
                        defaultMessage: "Luna reserve",
                        description: "Short label on the Codex or Work thread-header badge on desktop and web while the user is using their separate Luna Reserve allowance. Clicking the badge opens the backend-provided Luna Reserve explanation and available account actions."
                    })
                })]
            }), m[4] = h) : h = m[4], m[5] !== t ? (g = (0, a.jsx)(s.a, {
                color: "ghostMuted",
                size: "inline",
                onClick: t,
                children: h
            }), m[5] = t, m[6] = g) : g = m[6], g) : null
        }
    }),
    vNLk: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("lhj1"),
            r = n("oyxz"),
            o = n("bf6R"),
            s = n("MRlq");

        function c(e) {
            let t, n, c, d, u, p, h, g, m, b = (0, i.c)(31),
                {
                    restored: v,
                    restoring: f,
                    deleting: x,
                    onDelete: y,
                    onUnarchive: j,
                    onDone: w
                } = e,
                C = void 0 !== x && x;
            b[0] !== f ? (t = f ? (0, a.jsx)(r.a, {
                id: "localConversation.archived.restoringDescription",
                defaultMessage: "Restoring this chat and its workspace…",
                description: "Progress message while an archived task is being restored"
            }) : null, b[0] = f, b[1] = t) : t = b[1], b[2] !== v || b[3] !== f ? (n = !f && v ? (0, a.jsx)(r.a, {
                id: "localConversation.archived.restoredDescription",
                defaultMessage: "This chat has been restored",
                description: "Confirmation shown before leaving an archived task preview"
            }) : null, b[2] = v, b[3] = f, b[4] = n) : n = b[4], b[5] !== v || b[6] !== f ? (c = f || v ? null : (0, a.jsx)(r.a, {
                id: "localConversation.archived.previewDescription",
                defaultMessage: "This chat is archived. To continue, unarchive it first",
                description: "Explanation displayed beneath a read-only archived task preview"
            }), b[5] = v, b[6] = f, b[7] = c) : c = b[7], b[8] !== t || b[9] !== n || b[10] !== c ? (d = (0, a.jsxs)("span", {
                className: "text-sm text-secondary select-none",
                children: [t, n, c]
            }), b[8] = t, b[9] = n, b[10] = c, b[11] = d) : d = b[11], b[12] !== C || b[13] !== y || b[14] !== v || b[15] !== f ? (u = v || null == y ? null : (0, a.jsx)(l.a, {
                color: "danger",
                variant: "solid",
                disabled: f,
                loading: C,
                size: "lg",
                onClick: y,
                children: (0, a.jsx)(r.a, {
                    ...s.a.delete
                })
            }), b[12] = C, b[13] = y, b[14] = v, b[15] = f, b[16] = u) : u = b[16];
            let _ = v ? w : j;
            return b[17] !== v || b[18] !== f ? (p = v && !f ? (0, a.jsx)(r.a, {
                id: "localConversation.archived.previewDone",
                defaultMessage: "Done",
                description: "Leaves Archive with the restored task selected"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(o.f, {}), (0, a.jsx)(r.a, {
                    ...s.a.unarchive
                })]
            }), b[17] = v, b[18] = f, b[19] = p) : p = b[19], b[20] !== C || b[21] !== f || b[22] !== _ || b[23] !== p ? (h = (0, a.jsx)(l.a, {
                color: "primary",
                variant: "solid",
                disabled: C,
                loading: f,
                size: "lg",
                onClick: _,
                children: p
            }), b[20] = C, b[21] = f, b[22] = _, b[23] = p, b[24] = h) : h = b[24], b[25] !== u || b[26] !== h ? (g = (0, a.jsxs)("div", {
                className: "pointer-events-auto flex items-center gap-2",
                children: [u, h]
            }), b[25] = u, b[26] = h, b[27] = g) : g = b[27], b[28] !== g || b[29] !== d ? (m = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-4 py-4",
                children: [d, g]
            }), b[28] = g, b[29] = d, b[30] = m) : m = b[30], m
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

        function r(e, t) {
            return "open-app" === e.id ? (0, a.jsx)(i.a, {
                onSelect: t
            }) : void 0
        }
        n.d(t, {
            a: () => l,
            b: () => r
        })
    }),
    pDUk: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            l = n("suct"),
            r = n("iodE"),
            o = n("IPUh"),
            s = n("iTtm"),
            c = n("zd8w"),
            d = n("I7bK"),
            u = n("Q2Qp"),
            p = n("wD9O"),
            h = n("nzx4"),
            g = n("eGPX"),
            m = n("KWzM");

        function b(e) {
            let t, n, r, o, s, g, m = (0, i.c)(24),
                {
                    animate: b,
                    children: j,
                    isOpen: w,
                    onOpenChange: C,
                    returnFocusId: _,
                    shouldPreventAutoFocus: E,
                    trigger: S
                } = e,
                T = void 0 === b || b,
                k = void 0 !== E && E,
                I = (0, c.useContext)(u.a),
                O = (0, c.useContext)(d.c)?.chatPaneElement,
                [A, R] = (0, c.useState)(null),
                D = (0, c.useRef)(!1),
                N = 8 * (0, p.c)(),
                M = A ?? void 0;
            m[0] !== O || m[1] !== I || m[2] !== M || m[3] !== A ? (t = {
                contextElement: M,
                getBoundingClientRect() {
                    let e = A?.closest("[data-app-shell-main-titlebar]") ?? A?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                        t = (e ?? A)?.getBoundingClientRect() ?? new DOMRect,
                        n = y(I, O);
                    if (null == n) return t;
                    let a = n.getBoundingClientRect(),
                        i = Math.max(t.left, a.left),
                        l = Math.min(t.right, a.right);
                    return new DOMRect(i, t.top, Math.max(0, l - i), t.height)
                }
            }, m[0] = O, m[1] = I, m[2] = M, m[3] = A, m[4] = t) : t = m[4];
            let P = t;
            return m[5] !== P ? (n = (0, a.jsx)(h.b, {
                virtualRef: {
                    current: P
                }
            }), m[5] = P, m[6] = n) : n = m[6], m[7] !== S ? (r = (0, a.jsx)(h.e, {
                ref: R,
                asChild: !0,
                children: S
            }), m[7] = S, m[8] = r) : r = m[8], m[9] !== T || m[10] !== j || m[11] !== w || m[12] !== N || m[13] !== _ || m[14] !== k ? (o = w && (0, a.jsx)(x, {
                className: "z-50 flex flex-col text-default outline-hidden",
                animate: T,
                align: "end",
                alignOffset: N,
                collisionPadding: N,
                side: "bottom",
                sideOffset: N,
                unstyled: !0,
                onOpenAutoFocus: e => {
                    D.current = !1, k && e.preventDefault()
                },
                onCloseAutoFocus: e => {
                    if (k) e.preventDefault();
                    else if (!D.current && null != _) {
                        let t = document.getElementById(_);
                        t?.focus({
                            preventScroll: !0
                        }), null != t && document.activeElement === t && e.preventDefault()
                    }
                },
                onInteractOutside: e => {
                    e.defaultPrevented || (D.current = !0)
                },
                onFocusOutside: f,
                onPointerDownOutside: v,
                style: {
                    maxHeight: "none",
                    maxWidth: "none"
                },
                children: j
            }), m[9] = T, m[10] = j, m[11] = w, m[12] = N, m[13] = _, m[14] = k, m[15] = o) : o = m[15], m[16] !== o ? (s = (0, a.jsx)(l.a, {
                children: o
            }), m[16] = o, m[17] = s) : s = m[17], m[18] !== w || m[19] !== C || m[20] !== n || m[21] !== r || m[22] !== s ? (g = (0, a.jsxs)(h.a, {
                open: w,
                onOpenChange: C,
                children: [n, r, s]
            }), m[18] = w, m[19] = C, m[20] = n, m[21] = r, m[22] = s, m[23] = g) : g = m[23], g
        }

        function v(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function f(e) {
            e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
        }

        function x(e) {
            let t, n, l, b, v, f, x, j, w, C, _ = (0, i.c)(25);
            _[0] !== e ? ({
                animate: t,
                children: n,
                className: l,
                ...b
            } = e, _[0] = e, _[1] = t, _[2] = n, _[3] = l, _[4] = b) : (t = _[1], n = _[2], l = _[3], b = _[4]);
            let E = (0, r.a)(),
                S = (0, s.z)(g.c),
                T = t && !S,
                k = (0, c.useContext)(u.a),
                I = (0, c.useContext)(d.c)?.chatPaneElement,
                O = (0, p.c)(),
                A = (0, c.useRef)(null),
                R = (0, c.useRef)(T);
            _[5] !== I || _[6] !== k || _[7] !== O ? (v = () => {
                let e = A.current,
                    t = y(k, I);
                if (null == e || null == t || !R.current) return;
                let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-a.top)/O}px ${(a.right-n.right)/O}px ${(a.bottom-n.bottom)/O}px ${(n.left-a.left)/O}px)`
            }, _[5] = I, _[6] = k, _[7] = O, _[8] = v) : v = _[8];
            let D = v,
                N = !E,
                M = !E;
            _[9] !== D ? (f = () => {
                R.current = !0, requestAnimationFrame(D)
            }, _[9] = D, _[10] = f) : f = _[10], _[11] === Symbol.for("react.memo_cache_sentinel") ? (x = () => {
                R.current = !1, A.current?.style.removeProperty("clip-path")
            }, _[11] = x) : x = _[11];
            let P = !!T && m.b.hidden;
            return _[12] !== T ? (j = T ? m.a : {
                duration: 0
            }, _[12] = T, _[13] = j) : j = _[13], _[14] !== n || _[15] !== f || _[16] !== P || _[17] !== j ? (w = (0, a.jsx)(o.a.div, {
                onAnimationStart: f,
                onAnimationComplete: x,
                initial: P,
                animate: m.b.visible,
                exit: m.b.hidden,
                transition: j,
                children: n
            }), _[14] = n, _[15] = f, _[16] = P, _[17] = j, _[18] = w) : w = _[18], _[19] !== l || _[20] !== b || _[21] !== N || _[22] !== M || _[23] !== w ? (C = (0, a.jsx)(h.c, {
                ...b,
                ref: A,
                className: l,
                forceMount: !0,
                "aria-hidden": N,
                inert: M,
                children: w
            }), _[19] = l, _[20] = b, _[21] = N, _[22] = M, _[23] = w, _[24] = C) : C = _[24], C
        }

        function y(e, t) {
            return void 0 !== t ? t ?? e : e?.querySelector("[data-app-shell-main-content-layout]") ?? e
        }
        n.d(t, {
            a: () => b
        })
    }),
    enMl: (function(e, t, n) {
        var a = n("QosV"),
            i = n("iTtm"),
            l = n("zd8w"),
            r = n("tSEg"),
            o = n("giVD");

        function s(e) {
            let t, n, s, c, d = (0, a.c)(9),
                {
                    icon: u,
                    isVisible: p,
                    title: h
                } = e,
                g = void 0 === u ? null : u,
                m = void 0 === p || p,
                b = (0, i.y)(r.a);
            return d[0] !== g || d[1] !== m || d[2] !== b || d[3] !== h ? (t = () => {
                b.set(o.a, g), b.set(o.c, h), b.set(o.e, m)
            }, n = [g, m, b, h], d[0] = g, d[1] = m, d[2] = b, d[3] = h, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, l.useLayoutEffect)(t, n), d[6] !== b ? (s = () => () => {
                b.set(o.a, null), b.set(o.c, null), b.set(o.e, !0)
            }, c = [b], d[6] = b, d[7] = s, d[8] = c) : (s = d[7], c = d[8]), (0, l.useLayoutEffect)(s, c), null
        }
        n.d(t, {
            a: () => s
        })
    }),
    dDDU: (function(e, t, n) {
        var a = n("Qgfj"),
            i = n("Kyn2"),
            l = n("nnol"),
            r = n("QcW8"),
            o = n("ZU27"),
            s = n("gbrq"),
            c = n("bf6R"),
            d = n("GaA7"),
            u = n("dt6g"),
            p = n("Vhua"),
            h = n("WwnD"),
            g = n("NkWL"),
            m = n("pZMh"),
            b = n("erBs");

        function v(e) {
            let t = e.get(r.Z);
            return t?.isVisible === !0 && ("split" === t.mode || e.get(g.b)) ? function(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.j,
                    b = e.get(o.j.activeTab$),
                    v = e.get(m.e),
                    f = null;
                r === o.a ? f = "bottom" : "split" === v.mode && (e.get(m.c) ? (f = v.contentSide, "content" === t.kind && t.tab.tabId === e.get(m.g) && (f = "left" === v.contentSide ? "right" : "left")) : "chat" === t.kind ? f = "left" === v.contentSide ? "right" : "left" : t.tab.tabId === b?.tabId && (f = v.contentSide));
                let x = e.get(p.i),
                    y = !x && ("content" === t.kind || null != b),
                    j = [{
                        enabled: y && "left" !== f && (0, h.a)(t, "left"),
                        id: "unified-workspace-move-left",
                        icon: c.w,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToLeftPane",
                            defaultMessage: "Move to left pane",
                            description: "Context menu action that presents the selected task tab in the left workspace pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "left", r))
                    }, {
                        enabled: y && "right" !== f && (0, h.a)(t, "right"),
                        id: "unified-workspace-move-right",
                        icon: c.y,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToRightPane",
                            defaultMessage: "Move to right pane",
                            description: "Context menu action that presents the selected task tab in the right workspace pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "right", r))
                    }].filter(e => !1 !== e.enabled);
                return !x && r !== o.a && e.get(s.b) && (0, h.a)(t, "bottom") && j.push({
                    id: "unified-workspace-move-bottom",
                    icon: c.p,
                    message: (0, a.e)({
                        id: "threadWorkspace.contextMenu.moveToBottomPane",
                        defaultMessage: "Move to bottom pane",
                        description: "Context menu action that moves an existing Terminal task tab into the bottom utility pane"
                    }),
                    onSelect: () => (0, u.a)(e, "context_menu", () => (0, h.b)(e, t, "bottom", r))
                }), "content" !== t.kind || t.tab.isWorkspaceHome || null == t.tab.tabType.windowTransfer || null == d.appServices.detachedWindows || j.push({
                    id: "unified-workspace-move-new-window",
                    enabled: !x && !(0, l.c)(e, t.tab.tabId) && t.tab.tabType.windowTransfer.canTransfer(e, t.tab.props),
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
                            return a(e, r, t.tab, null)
                        }))
                    }
                }), "chat" === t.kind && e.get(g.b) && j.push({
                    id: "close-tab",
                    icon: c.ej,
                    message: (0, a.e)({
                        id: "codex.tabs.contextMenu.close",
                        defaultMessage: "Close",
                        description: "Context menu action for closing a tab"
                    }),
                    onSelect: () => (0, g.a)(e)
                }), j
            }(e, e.get(b.b).chat) : []
        }
        n.d(t, {
            a: () => v
        })
    })
};