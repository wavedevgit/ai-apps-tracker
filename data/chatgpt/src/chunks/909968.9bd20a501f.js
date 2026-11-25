export const __rspack_esm_ids = [909968];
export const __webpack_modules__ = {
    ylLY: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    PuSj: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("lAQI"),
            f = c("KhaL"),
            g = c("YqAS"),
            h = c("xSzB");

        function i(a) {
            let {
                scope: b,
                conversationId: c,
                access: e,
                resourceUri: h,
                attribution: i,
                toolDescriptors: j
            } = a;
            e.assertActive();
            let k = e.context.connectorTarget,
                {
                    accountId: l
                } = e;
            if (null == k || null == l) throw Error("MCP app connection is unavailable");
            let m = (0, f.b)({
                scope: b,
                accountId: l,
                appUri: `connectors://${k.connectorId}`,
                chatGptConversationId: null,
                threadId: c ?? void 0,
                productSku: "CODEX",
                messageId: null,
                originMetadata: {
                    link_id: k.targetId
                },
                attribution: i,
                toolDescriptors: j
            });
            return {
                connectorTarget: k,
                assertActive: e.assertActive,
                forwardedRequestMethods: ["tools/call", "tools/list", "resources/read"],
                async handleRequest(a, b, c, f) {
                    if (b?.throwIfAborted(), e.assertActive(), "resources/read" === a.method) {
                        let b = d.T.parse(a);
                        (0, g.a)({
                            server: "codex_apps",
                            mcpAppScope: {
                                originResourceUri: h
                            },
                            uri: b.params.uri
                        })
                    }
                    let i = await m.handleRequest(a, b, c, f);
                    return e.assertActive(), i
                }
            }
        }
        c.d(b, {}, {
            a: async function(a) {
                let {
                    scope: b,
                    access: c,
                    resourceUri: d,
                    tool: f,
                    arguments: g,
                    recipientThreadId: j,
                    attribution: k,
                    signal: l
                } = a, m = f.codexAppsToolIdentity, n = c.context.connectorTarget;
                if (null == m || n?.targetId == null || n.connectorId !== m.connectorId || n.targetId !== m.targetId) throw Error("MCP app connection is unavailable");
                let o = e.F({
                    _codex_apps: e.J(e.L(), e.R()).optional()
                }).nullish().parse(f.tool?._meta)?._codex_apps;
                return h.g.parse(await i({
                    scope: b,
                    conversationId: null,
                    access: c,
                    resourceUri: d,
                    attribution: k,
                    toolDescriptors: null == o ? void 0 : new Map([
                        [m.actionName, {
                            name: f.name,
                            metadata: o
                        }]
                    ])
                }).handleRequest({
                    method: "tools/call",
                    params: {
                        name: m.actionName,
                        arguments: g
                    }
                }, l, void 0, j))
            },
            b: i
        })
    }),
    XHk2: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("vi3X"),
            h = c("fDIZ"),
            i = c("El6m");
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, l = (0, e.c)(14),
                    {
                        paneContext: m,
                        children: n
                    } = a,
                    o = (0, f.useContext)(i.b),
                    p = (0, f.useContext)(h.a),
                    q = (0, f.useContext)(g.a);
                l[0] !== q || l[1] !== p || l[2] !== m || l[3] !== o ? (b = m ?? {
                    transition: o,
                    escapeHandler: p,
                    bannerTarget: q
                }, l[0] = q, l[1] = p, l[2] = m, l[3] = o, l[4] = b) : b = l[4];
                let r = b;
                return l[5] !== n || l[6] !== r.bannerTarget ? (c = (0, d.jsx)(g.a, {
                    value: r.bannerTarget,
                    children: n
                }), l[5] = n, l[6] = r.bannerTarget, l[7] = c) : c = l[7], l[8] !== r.escapeHandler || l[9] !== c ? (j = (0, d.jsx)(h.a, {
                    value: r.escapeHandler,
                    children: c
                }), l[8] = r.escapeHandler, l[9] = c, l[10] = j) : j = l[10], l[11] !== r.transition || l[12] !== j ? (k = (0, d.jsx)(i.b, {
                    value: r.transition,
                    children: j
                }), l[11] = r.transition, l[12] = j, l[13] = k) : k = l[13], k
            }
        })
    }),
    mYNH: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("l2oX"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("Wf1j"),
            j = c("Q2Qp"),
            k = c("QcW8"),
            l = c("ZU27"),
            m = c("wD9O"),
            n = c("nKJ6"),
            o = c("kois"),
            p = c("vi3X"),
            q = c("O9Pc"),
            r = c("fDIZ"),
            s = c("jEN2"),
            t = c("AKr5"),
            u = c("wqvF"),
            v = c("giDA"),
            w = c("fQ9c"),
            x = c("ttIa"),
            y = c("xD3Z"),
            z = c("Z2JT"),
            A = c("Sgih"),
            B = c("zeCl"),
            C = c("tSEg"),
            D = c("hZax"),
            E = c("SHid"),
            F = c("El6m"),
            G = c("dN0a"),
            H = c("WwnD"),
            I = c("giVD"),
            J = c("Vhua"),
            K = c("Azn0"),
            L = c("XHk2"),
            M = c("abd8"),
            N = c("GMTh");
        let O = (0, g.c)(C.a, a => {
            let {
                get: b
            } = a, c = b(l.l.activeTab$);
            if (c?.tabType.kind !== B.a) return !1;
            let d = B.b.safeParse(c.props);
            if (!d.success) return !1;
            let e = b(o.i),
                f = e?.kind === "codex" ? e : e?.page;
            return f?.accountId === d.data.accountId && f?.pageId === d.data.pageId && (e?.kind === "codex" ? null == e.documentType : e?.turnAttribution?.origin_page_document_type === "page")
        });

        function P(a) {
            return (0, d.jsx)(y.a, {
                ...a
            })
        }

        function Q(a) {
            let b, c, f, i, j, k, l, m, n, o, p, q, r, s = (0, e.c)(43),
                {
                    children: t,
                    composerRef: u,
                    mainContentElement: w,
                    presentation: x,
                    paneContext: y,
                    layout: z,
                    reserveContent: A,
                    reserveFullComposerHeight: B
                } = a,
                D = (0, g.y)(C.a),
                E = (0, h.useContext)(F.b),
                H = (0, h.useContext)(v.a),
                {
                    activeBrowserTabId: I
                } = E,
                J = null != y,
                {
                    isCompact: K,
                    isDockedTop: M,
                    isHidden: N,
                    isMinimized: O
                } = x,
                {
                    isMoving: P,
                    composerContentHeight: Q,
                    dockedReservePx: R
                } = z,
                S = !A || N || O ? 0 : Math.max(118, K ? R : 0, B ? Q + 118 - 102 : 0),
                T = M && K && R > 0 ? S : 0,
                [U, V] = (0, h.useState)(!O);
            (K || O) && !O !== U && V(!O);
            let W = A && !N && U ? G.b : 0;
            s[0] !== I || s[1] !== u || s[2] !== J ? (b = () => {
                if (J || null == I) return;
                let a = u.current?.ownerDocument.activeElement;
                a instanceof HTMLElement && u.current?.contains(a) && a.blur()
            }, c = [I, u, J], s[0] = I, s[1] = u, s[2] = J, s[3] = b, s[4] = c) : (b = s[3], c = s[4]), (0, h.useLayoutEffect)(b, c), s[5] !== u || s[6] !== W || s[7] !== M || s[8] !== N || s[9] !== O || s[10] !== J || s[11] !== w || s[12] !== S || s[13] !== D || s[14] !== T ? (f = () => {
                if (J || null == w) return;
                D.set(G.n, {
                    owner: u,
                    style: {
                        [G.a]: M ? `${W}px 0 0` : `0 0 ${W}px`,
                        [G.c]: `${N||O||M?0:102}px`,
                        [G.d]: `${M?0:S}px`,
                        [G.g]: `${M?S:0}px`
                    }
                }), (0, G.u)(D, M ? 0 : S), D.set(G.o, T);
                let a = M ? "top" : "bottom";
                D.set(G.k, 0 === W ? null : a)
            }, i = [u, W, J, M, N, O, w, S, D, T], s[5] = u, s[6] = W, s[7] = M, s[8] = N, s[9] = O, s[10] = J, s[11] = w, s[12] = S, s[13] = D, s[14] = T, s[15] = f, s[16] = i) : (f = s[15], i = s[16]), (0, h.useLayoutEffect)(f, i), s[17] !== u || s[18] !== J || s[19] !== w || s[20] !== D ? (j = () => {
                if (!J && null != w) return () => {
                    let a = D.get(G.n);
                    a?.owner === u && (D.set(G.n, {
                        ...a,
                        owner: null
                    }), (0, G.u)(D, 0), D.set(G.o, 0), D.set(G.k, null))
                }
            }, k = [u, J, w, D], s[17] = u, s[18] = J, s[19] = w, s[20] = D, s[21] = j, s[22] = k) : (j = s[21], k = s[22]), (0, h.useLayoutEffect)(j, k);
            let X = !K || O || P || Q > 102;
            s[23] !== u || s[24] !== X || s[25] !== J || s[26] !== D ? (l = () => {
                let a = u.current;
                if (J || null == a) return;
                let b = () => {
                    let b = !X && null != a.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    D.set(G.j, X || b)
                };
                b();
                let c = X ? null : new MutationObserver(b);
                return c?.observe(a, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    c?.disconnect()
                }
            }, m = [u, X, J, D], s[23] = u, s[24] = X, s[25] = J, s[26] = D, s[27] = l, s[28] = m) : (l = s[27], m = s[28]), (0, h.useLayoutEffect)(l, m), s[29] !== J || s[30] !== D ? (o = () => () => {
                J || D.set(G.j, !1)
            }, n = [J, D], s[29] = J, s[30] = D, s[31] = n, s[32] = o) : (n = s[31], o = s[32]), (0, h.useLayoutEffect)(o, n);
            let Y = null == y ? H : y.overlayOwner,
                Z = J ? "contents" : void 0;
            return s[33] !== t || s[34] !== u || s[35] !== Z ? (p = (0, d.jsx)("div", {
                ref: u,
                className: Z,
                "data-right-panel-composer-overlay-content": "true",
                children: t
            }), s[33] = t, s[34] = u, s[35] = Z, s[36] = p) : p = s[36], s[37] !== Y || s[38] !== p ? (q = (0, d.jsx)(v.a, {
                value: Y,
                children: p
            }), s[37] = Y, s[38] = p, s[39] = q) : q = s[39], s[40] !== y || s[41] !== q ? (r = (0, d.jsx)(L.a, {
                paneContext: y,
                children: q
            }), s[40] = y, s[41] = q, s[42] = r) : r = s[42], r
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, y, B, L, R = (0, e.c)(62),
                    {
                        children: S,
                        composerOnly: T,
                        forceExpanded: U,
                        placement: V,
                        showHeader: W,
                        showConversationTitleMenu: X,
                        showComposerDivider: Y,
                        isHidden: Z,
                        persistPresentation: $,
                        reserveContent: _,
                        reserveFullComposerHeight: aa,
                        onPresentationChange: ab,
                        title: ac,
                        minimizedIcon: ad,
                        titleContent: ae,
                        statusState: af,
                        titleStatusState: ag,
                        hasElicitation: ah,
                        notifications: ai,
                        workingPreview: aj,
                        compactWorkingPreview: ak,
                        responsePreview: al,
                        persistResponsePreview: am,
                        renderTranscript: an,
                        hasConversation: ao,
                        hasTranscript: ap,
                        pendingFormId: aq,
                        emptyState: ar
                    } = a,
                    as = void 0 !== T && T,
                    at = void 0 !== U && U,
                    au = void 0 === W || W,
                    av = void 0 === Y ? !as : Y,
                    aw = void 0 === $ || $,
                    ax = void 0 === aq ? A.a : aq,
                    ay = (0, g.y)(C.a),
                    az = "pane" === (void 0 === V ? "floating" : V),
                    aA = (0, D.f)("2163293173"),
                    aB = aA ? ar : void 0,
                    aC = !as || aA && (null != aB || (ap ?? null != an)),
                    aD = (0, g.z)(!!aC && K.a),
                    aE = (0, i.a)(),
                    {
                        isHidden: aF
                    } = (0, N.a)(az ? "embedded" : "content"),
                    aG = void 0 !== Z && Z || aF,
                    aH = (0, g.z)(!(void 0 !== X && X) || az || aG ? null : I.a),
                    aI = (0, h.useContext)(j.a),
                    aJ = (0, h.useContext)(F.b),
                    aK = (0, h.useContext)(F.a),
                    aL = (0, h.useContext)(q.a),
                    aM = (0, h.useContext)(r.a),
                    aN = (0, h.useContext)(p.a),
                    aO = (0, h.useContext)(v.a),
                    aP = (0, m.c)();
                R[0] !== aP ? (b = a => {
                    let {
                        x: b,
                        y: c
                    } = a;
                    return {
                        x: b / aP,
                        y: c / aP
                    }
                }, R[0] = aP, R[1] = b) : b = R[1];
                let aQ = b,
                    [aR, aS] = (0, h.useState)(null),
                    aT = !(0, g.z)(G.s),
                    aU = (0, h.useRef)(null),
                    aV = (0, g.z)(ax),
                    aW = (0, g.z)(aw ? z.b : void 0);
                aC || au || (aW = "compact");
                let aX = (0, g.z)(null == aV && (ah ?? F.c)),
                    aY = (0, g.z)(l.l.activeTab$),
                    aZ = (0, g.z)(az || aG ? null : O),
                    a$ = (0, g.z)(k.n),
                    a_ = (0, g.z)(!!a$ && J.i);
                R[2] !== aY || R[3] !== az ? (c = az ? null : (0, n.getThreadBrowserTabIdFromPanelTab)(aY), R[2] = aY, R[3] = az, R[4] = c) : c = R[4];
                let a0 = c,
                    a1 = void 0 !== aa && aa || aY?.tabType.kind === "latex-document" || aY?.tabType.kind === "image-preview";
                R[5] !== aV ? (o = () => {
                    let a = null != aV ? (0, t.a)(aU.current) : aU.current?.querySelector("[contenteditable='true']");
                    null == a || (0, s.g)(a) || a.focus({
                        preventScroll: !0
                    })
                }, R[5] = aV, R[6] = o) : o = R[6];
                let a2 = o;
                R[7] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, d.jsx)("div", {
                    ref: a => {
                        null != a && aS(a)
                    },
                    className: "contents"
                }), R[7] = y) : y = R[7];
                let a3 = az || aG;
                return R[8] !== a0 || R[9] !== aY || R[10] !== aZ || R[11] !== aC || R[12] !== aD || R[13] !== S || R[14] !== ak || R[15] !== as || R[16] !== aA || R[17] !== aB || R[18] !== a2 || R[19] !== at || R[20] !== ao || R[21] !== aX || R[22] !== ap || R[23] !== a$ || R[24] !== aN || R[25] !== aM || R[26] !== aO || R[27] !== aK || R[28] !== aJ || R[29] !== aE || R[30] !== aG || R[31] !== aT || R[32] !== az || R[33] !== aI || R[34] !== ad || R[35] !== a_ || R[36] !== ai || R[37] !== ab || R[38] !== aR || R[39] !== aV || R[40] !== aw || R[41] !== am || R[42] !== an || R[43] !== _ || R[44] !== al || R[45] !== ay || R[46] !== a1 || R[47] !== av || R[48] !== au || R[49] !== af || R[50] !== aW || R[51] !== aL || R[52] !== ac || R[53] !== ae || R[54] !== aH || R[55] !== ag || R[56] !== aQ || R[57] !== aj ? (B = a => (0, d.jsx)(f.a, {
                    transformPagePoint: aQ,
                    children: (0, d.jsx)(F.b, {
                        value: az ? aJ : {
                            activeBrowserTabId: a0,
                            isInsideOverlay: !0,
                            isFloatingChatNavigationCurrent: aJ.isFloatingChatNavigationCurrent,
                            onAttachmentAdded: () => {
                                ay.get(l.l.activeTab$)?.tabId === aY?.tabId && (ay.get(G.l) || (0, G.i)(ay, {
                                    prefersReducedMotion: !0
                                }), (0, s.d)())
                            },
                            shouldAnimate: !1
                        },
                        children: (0, d.jsx)(F.a, {
                            value: az ? aK : "expanded",
                            children: (0, d.jsx)(x.a, {
                                preserveLayoutOnEscape: !0,
                                contentChat: {
                                    focusComposer: a2,
                                    onOpenRightPane: a$ && aD ? () => {
                                        (0, H.a)(ay, "chat") && aA && ay.set(E.a, ay.get(k.hb))
                                    } : void 0,
                                    openRightPaneDisabled: a_
                                },
                                dockThreadKey: M.c,
                                canDock: aC || au,
                                titleContent: aH?.renderMenu({}) ?? ae,
                                minimizedIcon: ad,
                                statusState: af,
                                titleStatusState: ag,
                                hasTranscript: ap,
                                hasConversation: ao,
                                emptyState: aB,
                                pendingFormId: aV,
                                notifications: ai,
                                workingPreview: aj,
                                compactWorkingPreview: ak,
                                responsePreview: al,
                                persistResponsePreview: am,
                                containerSize: a,
                                minimumWidth: aZ ? 240 : void 0,
                                renderMenu: a$ ? void 0 : P,
                                forceExpanded: at || aX && (aA || !as),
                                isHidden: az || aG,
                                isMinimized: aT,
                                presentation: aW,
                                showHeader: au,
                                showComposerDivider: av,
                                background: as && !au ? void 0 : "panel",
                                onPresentationChange: a => {
                                    aw && ay.set(z.b, a), ab?.(a)
                                },
                                onMinimizedChange: a => {
                                    (0, G.t)(ay, a)
                                },
                                title: ac ?? aE.formatMessage({
                                    id: "quickChat.mainConversation",
                                    defaultMessage: "Chat"
                                }),
                                renderTranscript: null == an ? void 0 : (a, b) => an({
                                    isVisible: b && !az && !aG
                                }),
                                renderComposer: (a, b) => (0, d.jsx)(q.a, {
                                    value: az || null == a0 ? aL : aI,
                                    children: (0, d.jsx)(u.a, {
                                        target: az ? aR : null,
                                        children: (0, d.jsx)(Q, {
                                            composerRef: aU,
                                            mainContentElement: aI,
                                            presentation: a,
                                            paneContext: az ? {
                                                transition: aJ,
                                                escapeHandler: aM,
                                                bannerTarget: aN,
                                                overlayOwner: aO
                                            } : void 0,
                                            layout: b,
                                            reserveFullComposerHeight: a1,
                                            reserveContent: _ ?? (null == a0 && aY?.tabType.kind !== "mcp-app" && aY?.tabType.kind !== "mcp-extension"),
                                            children: "function" == typeof S ? S(az ? void 0 : a) : S
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), R[8] = a0, R[9] = aY, R[10] = aZ, R[11] = aC, R[12] = aD, R[13] = S, R[14] = ak, R[15] = as, R[16] = aA, R[17] = aB, R[18] = a2, R[19] = at, R[20] = ao, R[21] = aX, R[22] = ap, R[23] = a$, R[24] = aN, R[25] = aM, R[26] = aO, R[27] = aK, R[28] = aJ, R[29] = aE, R[30] = aG, R[31] = aT, R[32] = az, R[33] = aI, R[34] = ad, R[35] = a_, R[36] = ai, R[37] = ab, R[38] = aR, R[39] = aV, R[40] = aw, R[41] = am, R[42] = an, R[43] = _, R[44] = al, R[45] = ay, R[46] = a1, R[47] = av, R[48] = au, R[49] = af, R[50] = aW, R[51] = aL, R[52] = ac, R[53] = ae, R[54] = aH, R[55] = ag, R[56] = aQ, R[57] = aj, R[58] = B) : B = R[58], R[59] !== a3 || R[60] !== B ? (L = (0, d.jsxs)(d.Fragment, {
                    children: [y, (0, d.jsx)(w.a, {
                        isHidden: a3,
                        children: B
                    })]
                }), R[59] = a3, R[60] = B, R[61] = L) : L = R[61], L
            }
        })
    }),
    ckwE: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("VnEZ");
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, e.c)(3),
                    {
                        children: h,
                        binding: i
                    } = a,
                    [j] = (0, f.useState)(g.b),
                    k = i ?? j;
                return c[0] !== h || c[1] !== k ? (b = (0, d.jsx)(g.a, {
                    value: k,
                    children: h
                }), c[0] = h, c[1] = k, c[2] = b) : b = c[2], b
            }
        })
    }),
    C6kc: (function(a, b, c) {
        var d = c("mBJV"),
            e = c("MVHH"),
            f = c("D99L"),
            g = c("fVOX"),
            h = c("yGJW"),
            i = c("g2p6");

        function j(a, b, c) {
            "memory_footnote_shown" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: c
            }), a.get(g.a).count("default", b, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: c,
                target: "search_sources_sidebar"
            })
        }
        c.d(b, {
            a: () => e.Y
        }, {
            b: function(a, b) {
                let {
                    actionType: c,
                    conversationId: d,
                    experiment: f,
                    messageId: g,
                    source: i,
                    feedback: k,
                    selectedFeedback: l,
                    surface: m = "sources"
                } = b, n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === k ? n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(k, null) && (n = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let o = null == i ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === m && (o = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, h.a)(a, e.X, {
                    actionType: c,
                    conversationId: d ?? void 0,
                    messageId: g,
                    citationUuid: i?.citationUuid ?? void 0,
                    sourceType: function(a) {
                        switch (a?.conversationContextType) {
                            case "user_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY";
                            case "general_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY";
                            case "past_conversation":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION";
                            case "user_instructions":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS";
                            case null:
                            case void 0:
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED"
                        }
                    }(i),
                    feedback: n,
                    selectedFeedback: null == l ? void 0 : ({
                        positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                        negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE"
                    })[l],
                    entrypoint: o,
                    target: "explainer" === m || "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED" === c ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR",
                    memoryCitationExperiment: f
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === c && j(a, "chatgpt_memory_citations_sidebar_open_clicked", f)
            },
            c: function(a, b) {
                "dismissed" === b && (0, h.a)(a, f.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: i.c
                }), "shown" === b && (0, h.a)(a, d.xd, {
                    eventId: `${i.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: j
        })
    }),
    pV06: (function(a, b, c) {
        var d = c("JjRy"),
            e = c.n(d),
            f = c("AuIy"),
            g = c("G4E3"),
            h = c("KaH3"),
            i = c("Yz3b"),
            j = c("pqpL"),
            k = c("ghNX"),
            l = c("KvVi"),
            m = c("m250"),
            n = c("H8lk"),
            o = c("Ng4B"),
            p = c("bTKb"),
            q = c("dGDB"),
            r = c("lIsV");

        function s(a) {
            return a.flatMap(a => "chatgpt-reasoning-group" === a.type ? a.items : [a])
        }
        c.d(b, {}, {
            a: function(a) {
                var b;
                let c, d, {
                        automationReferences: t,
                        includePages: u = !1,
                        includeSources: v,
                        messages: w,
                        pendingAttachments: x = [],
                        resources: y = (0, n.e)(w),
                        turns: z,
                        isTurnActive: A = z.at(-1)?.turn.status === "in_progress"
                    } = a,
                    B = [...y.inputs],
                    C = v ? (0, o.a)(w, z) : [],
                    D = new Map,
                    E = new Map,
                    F = (b = w, -1 !== (c = e()(b, a => a?.recipient === "turn_plan.update_turn_plan" && (0, r.b)(a)?.item?.type === "todo-list")) && b.slice(c + 1).some(a => "assistant" === a.author.role && "final" === a.channel && "all" === a.recipient && "finished_successfully" === a.status)),
                    G = [],
                    H = new Map(w.map(a => [(0, f.g)(a), a])),
                    I = e()(w, a => "user" === a.author.role),
                    J = [];
                for (let a of x) B.some(b => b.fileId === a.id || null != a.libraryFileId && b.libraryFileId === a.libraryFileId) || B.push({
                    downloadTarget: {
                        fileId: a.id,
                        type: "file-id"
                    },
                    fileId: a.id,
                    key: `input:pending:${a.id}`,
                    kind: "file",
                    libraryFileId: a.libraryFileId ?? null,
                    messageId: "pending-submission",
                    mimeType: a.mimeType,
                    mountedLibraryFileId: a.mountedLibraryFileId,
                    sourceMimeType: a.mountedLibraryMimeType,
                    sourceUrl: a.sourceUrl,
                    name: a.name,
                    sandboxPath: null,
                    sizeBytes: a.size ?? null
                });
                for (let {
                        id: a,
                        turn: b
                    }
                    of z) {
                    if (v && "complete" === b.status)
                        for (let c of b.messageIds) {
                            let b = H.get(c);
                            b?.author.role === "assistant" && ("finished_successfully" === b.status || "finished_partial_completion" === b.status) && (0, m.j)(b.metadata) && G.push({
                                messageId: c,
                                turnId: a,
                                deletedMemoryCitationUuids: (0, m.c)(b.metadata)
                            })
                        }
                    for (let c of s(b.items)) {
                        if (u && "mcp-tool-call" === c.type) {
                            let a = (0, k.b)(c);
                            if (null != a && (a.activities.includes("created") || a.activities.includes("updated"))) {
                                let b = (0, g.d)(a.url);
                                if (b?.kind === "page") {
                                    let c = E.get(b.id);
                                    E.set(b.id, {
                                        key: `page:${b.id}`,
                                        kind: "page",
                                        pageId: b.id,
                                        title: a.title ?? c?.title ?? null
                                    })
                                }
                            }
                        }
                        if (u && "assistant-message" === c.type && c.completed)
                            for (let a of (0, j.c)(c.content)) E.has(a.id) || E.set(a.id, {
                                key: `page:${a.id}`,
                                kind: "page",
                                pageId: a.id,
                                title: null
                            });
                        if ("todo-list" === c.type) {
                            J = c.plan.map((b, c) => ({
                                key: `progress:${a}:${String(c)}`,
                                label: b.step,
                                status: F ? "completed" : b.status
                            }));
                            continue
                        }
                        if ("generated-image" === c.type && "completed" === c.status && null != c.src) {
                            let a = `image:${c.id}`;
                            D.set(a, {
                                image: c,
                                key: a,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let K = (0, h.b)(z.flatMap(a => {
                    let {
                        turn: b
                    } = a;
                    return s(b.items).filter(a => "mcp-tool-call" === a.type)
                })).at(-1);
                return d = null == K ? [...y.outputs, ...E.values(), ...D.values()] : [{
                    ...K,
                    key: `site:${K.projectId}`,
                    kind: "site"
                }, ...y.outputs.filter(a => null == K.archivePath || ! function(a, b) {
                    if (null != a.sandboxPath) return a.sandboxPath === b;
                    let c = b.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != c && a.name.toLowerCase() === c
                }(a, K.archivePath)), ...E.values(), ...D.values()], {
                    automationIds: (0, l.b)(w, t ?? void 0),
                    browserScreenshots: (0, p.e)(w),
                    inputs: B,
                    sourceTurns: G,
                    outputs: d,
                    progressSteps: J,
                    isPlanSummaryUpdating: A && w.slice(I + 1).some(a => "assistant" === a.author.role && l.a.test(a.recipient ?? "") || "tool" === a.author.role && l.a.test(a.author.name ?? "")),
                    planSummaryRefreshKey: `${z.at(-1)?.id??""}:${A}`,
                    showSources: v,
                    sources: v ? [...Array.from(new Map(w.filter(a => "user" === a.author.role).flatMap(a => (0, i.a)((0, f.e)(a))).map(a => [a.projectId, a])).values(), a => ({
                        kind: "site",
                        key: `site:${a.projectId}`,
                        projectId: a.projectId,
                        label: a.title
                    })), ...C.filter(a => "memory" === a.kind), ...new Map(z.flatMap(a => {
                        let {
                            turn: b
                        } = a;
                        return (b.skillSources ?? []).map(a => [a.key, a])
                    })).values(), ...y.pluginSources, ...C.filter(a => "web" === a.kind && "apps" === a.category), ...C.filter(a => "file-source" === a.kind), ...C.filter(a => "web" === a.kind && "apps" !== a.category)] : [],
                    subagents: (0, q.a)(w)?.subagents ?? []
                }
            }
        })
    }),
    JlMc: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("zd8w"),
            g = c("RU3e");
        c("bjAA");
        var h = c("OWtl");
        c("CKur"), c("XtQP");
        var i = c("dQRk"),
            j = c("UWHW");
        c.d(b, {}, {
            a: function(a) {
                let b, c, k, l, m = (0, d.c)(10),
                    {
                        conversationId: n,
                        isTranscriptVisible: o
                    } = a,
                    p = void 0 === o || o,
                    q = (0, e.y)(h.a),
                    r = (0, f.useId)();
                return m[0] !== n || m[1] !== r || m[2] !== q ? (b = () => (q.set(j.b, a => new Map(a).set(r, n)), q.get(j.a)?.dismissCurrent(), () => {
                    q.set(j.b, a => {
                        let b = new Map(a);
                        return b.delete(r), b
                    })
                }), c = [n, r, q], m[0] = n, m[1] = r, m[2] = q, m[3] = b, m[4] = c) : (b = m[3], c = m[4]), (0, f.useEffect)(b, c), m[5] !== n || m[6] !== p || m[7] !== q ? (k = () => {
                    if (!p) return;
                    let a = q.watch(a => {
                        let {
                            get: b
                        } = a, c = !0 === b(g.b);
                        (0, i.ec)(q, n, c)
                    });
                    return () => {
                        a(), (0, i.ec)(q, n, !1)
                    }
                }, l = [n, p, q], m[5] = n, m[6] = p, m[7] = q, m[8] = k, m[9] = l) : (k = m[8], l = m[9]), (0, f.useEffect)(k, l), null
            }
        })
    }),
    DvP0: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    Hh7n: (function(a, b, c) {
        var d = c("X6Vn"),
            e = c("pdPj"),
            f = c("iHfE");
        c.d(b, {}, {
            a: async function(a) {
                let {
                    onSaved: b
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, g = a.get(f.b);
                if (null == g || !a.get(e.a)) return;
                let {
                    ReferenceImageFormDialog: h
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(584510), c.e(281609)]).then(() => c("xZAj"));
                a.get(e.a) && a.get(f.b) === g && (0, d.f)(a, h, {
                    referenceImagesAccountId: g,
                    onSaved: b
                })
            },
            b: async function(a, b) {
                let {
                    onClose: g
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, h = a.get(f.b);
                if (null == h || !a.get(e.a)) return;
                let {
                    ReferenceImageManageDialog: i
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(584510), c.e(259972)]).then(() => c("LUIA"));
                a.get(e.a) && a.get(f.b) === h && (0, d.f)(a, i, {
                    onClose: g,
                    referenceImage: b,
                    referenceImagesAccountId: h
                })
            },
            c: async function(a, b) {
                let g = a.get(f.b);
                if (null == g || !a.get(e.a)) return;
                let {
                    ReferenceImageSuggestionDialog: h
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(584510), c.e(279810)]).then(() => c("RrZF"));
                a.get(e.a) && a.get(f.b) === g && (0, d.f)(a, h, {
                    ...b,
                    referenceImagesAccountId: g
                })
            }
        })
    }),
    b7aP: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("Bbed"),
            h = c("iS3k");
        let i = (0, g.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(32895), c.e(274752)]).then(() => c("Zlla"))).ChatGptThreadSummaryPanelBody, {
            errorFallback: (0, d.jsx)("span", {
                className: "px-5 select-none",
                role: "status",
                children: (0, d.jsx)(f.a, {
                    id: "chatgptConversations.summaryPanel.loadError",
                    defaultMessage: "Summary could not load. Reload the app to try again"
                })
            })
        });
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, e.c)(2);
                return c[0] !== a ? (b = (0, d.jsx)(h.a.Content, {
                    children: (0, d.jsx)(i, {
                        ...a
                    })
                }), c[0] = a, c[1] = b) : b = c[1], b
            }
        })
    }),
    vpdG: (function(a, b, c) {
        var d = c("QosV"),
            e = c("HVBu"),
            f = c.n(e),
            g = c("Q840"),
            h = c("vUFP"),
            i = c("zd8w"),
            j = c("Gdjn"),
            k = c("xqnZ"),
            l = c("OWtl"),
            m = c("ADAj"),
            n = c("Ow2S"),
            o = c("fDfx"),
            p = c("dQRk");
        c.d(b, {}, {
            a: function(a) {
                let b, c, e, q, r, s, t = (0, d.c)(19);
                t[0] !== a ? (b = void 0 === a ? {} : a, t[0] = a, t[1] = b) : b = t[1];
                let {
                    composerController: u,
                    conversationId: v,
                    draftKey: w,
                    initialPrompt: x,
                    initialPromptKind: y
                } = b, z = void 0 === w ? v : w, A = (0, g.y)(l.a);
                t[2] !== v || t[3] !== z || t[4] !== x || t[5] !== y || t[6] !== A ? (c = () => f()(() => {
                    let a = null == v ? null : A.get(p.y, v),
                        b = y;
                    null == b && (b = null == x && null != z ? (0, o.l)(A, z).modelFirstLandingPromptIsLiteral ? "literal" : "prompt" : (0, j.b)(x ?? "").length > 0 ? "prompt" : "plain");
                    let c = (0, k.e)(x ?? (null == z ? "" : A.get(n.v, z)), {
                        addInitialContentToHistory: null == x && null != z,
                        defaultTextKind: b,
                        enableFileMentions: !0,
                        enableRichText: !0,
                        enableSkillMentions: !1,
                        enableSlashCommands: {
                            triggers: ["/"]
                        },
                        plainTextMode: (0, m.b)(A.get, h.yf.composerPlainTextMode),
                        suggestionOptions: {
                            enableInlineSystemHints: "tpp" !== a && "flora" !== a,
                            variant: "tpp" !== a && "flora" !== a ? "chatgpt" : void 0
                        }
                    });
                    return null == x && null != v && "string" == typeof z && null != (0, o.m)(A, z) && "tpp" !== a && "flora" !== a && (0, n.X)(A, v, c.getChatGptPrompt().systemHints), c
                }), t[2] = v, t[3] = z, t[4] = x, t[5] = y, t[6] = A, t[7] = c) : c = t[7];
                let [B] = (0, i.useState)(c);
                t[8] !== B || t[9] !== u ? (e = u ?? B(), t[8] = B, t[9] = u, t[10] = e) : e = t[10];
                let C = e,
                    D = (0, i.useRef)(null);
                t[11] !== C || t[12] !== z || t[13] !== A ? (q = () => {
                    if (null == z) return;
                    let a = A.get(n.v, z);
                    return null != D.current && D.current !== a && C.restoreDraft(a), () => {
                        D.current = A.get(n.v, z)
                    }
                }, r = [C, z, A], t[11] = C, t[12] = z, t[13] = A, t[14] = q, t[15] = r) : (q = t[14], r = t[15]), (0, i.useLayoutEffect)(q, r), t[16] !== C || t[17] !== u ? (s = () => {
                    null != u || C.view.isDestroyed || C.destroy()
                }, t[16] = C, t[17] = u, t[18] = s) : s = t[18];
                let E = s;
                return (0, k.f)(E, C), C
            }
        })
    }),
    JjB1: (function(a, b, c) {
        var d = c("on57");
        let e = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif',
            f = (0, d.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p_:not(code,code_*)]:!font-sans", "[&_.ProseMirror_span:not(code_*)]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-[var(--annotation-comment-min-height,calc(var(--spacing)*6))]!");
        c.d(b, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: f,
            c: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
            d: {
                "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
                "--font-sans": e,
                "--font-ui-family": e,
                fontFamily: e
            }
        })
    }),
    YwjY: (function(a, b, c) {
        c.d(b, {
            a: () => h
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("JjB1");

        function h(a) {
            let b, c, h, i, j, k, l, m, n, o, p, q, r, s, t = (0, e.c)(30);
            t[0] !== a ? ({
                className: c,
                children: b,
                style: i,
                isRevealingPageComment: j,
                surfaceVariant: k,
                discussion: l,
                hasRecipientControl: m,
                ...h
            } = a, t[0] = a, t[1] = b, t[2] = c, t[3] = h, t[4] = i, t[5] = j, t[6] = k, t[7] = l, t[8] = m) : (b = t[1], c = t[2], h = t[3], i = t[4], j = t[5], k = t[6], l = t[7], m = t[8]);
            let u = void 0 === k ? "default" : k,
                v = void 0 !== l && l,
                w = void 0 !== m && m,
                x = "default" === u && "bg-surface-elevated-secondary shadow-md",
                y = v && !w && "in-data-[comment-layout=floating]:shadow-none!",
                z = v && "default" === u && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                A = v && "default" === u && (w ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                B = void 0 !== j && j ? "transition-none" : "transition-[height,width,opacity]";
            return t[9] !== c || t[10] !== x || t[11] !== y || t[12] !== z || t[13] !== A || t[14] !== B ? (n = (0, f.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", x, y, z, A, B, c), t[9] = c, t[10] = x, t[11] = y, t[12] = z, t[13] = A, t[14] = B, t[15] = n) : n = t[15], t[16] !== i ? (o = {
                ...g.d,
                ...i
            }, t[16] = i, t[17] = o) : o = t[17], t[18] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, f.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), t[18] = p) : p = t[18], t[19] !== b ? (q = (0, d.jsx)("div", {
                className: p,
                children: b
            }), t[19] = b, t[20] = q) : q = t[20], t[21] !== v || t[22] !== u ? (r = "default" === u ? (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: (0, f.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", v && "in-data-[comment-layout=floating]:hidden")
            }) : null, t[21] = v, t[22] = u, t[23] = r) : r = t[23], t[24] !== h || t[25] !== n || t[26] !== o || t[27] !== q || t[28] !== r ? (s = (0, d.jsxs)("div", {
                ...h,
                className: n,
                style: o,
                children: [q, r]
            }), t[24] = h, t[25] = n, t[26] = o, t[27] = q, t[28] = r, t[29] = s) : s = t[29], s
        }
    }),
    iqo5: (function(a, b, c) {
        c.d(b, {
            a: () => q
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("oyxz"),
            h = c("YwjY"),
            i = c("Sm6l"),
            j = c("UIU6"),
            k = c("Bbed"),
            l = c("RNul"),
            m = c("vUFP"),
            n = c("T1PX");

        function o(a) {
            let b, c, g, h, i, j, k = (0, e.c)(13),
                {
                    children: l,
                    source: o
                } = a,
                p = (0, f.useRef)(null),
                q = !(0, n.a)() && o.width > 0 && o.height > 0;
            k[0] !== q || k[1] !== o ? (b = () => {
                let a = p.current,
                    b = a?.ownerDocument.defaultView;
                if (!a || !b || !q) return;
                let c = 0,
                    d = new ResizeObserver(() => {
                        d.disconnect(), c = b.requestAnimationFrame(() => {
                            let d = a.getBoundingClientRect();
                            if (!d.width || !d.height) {
                                a.dataset.phase = "open";
                                return
                            }
                            let e = a.offsetWidth / d.width,
                                f = a.offsetHeight / d.height,
                                g = (o.left - d.left) * e,
                                h = (o.top - d.top) * f,
                                i = (d.right - o.right) * e,
                                j = (d.bottom - o.bottom) * f;
                            a.style.setProperty("--entry-inset", `${h}px ${i}px ${j}px ${g}px`), a.style.setProperty("--entry-transform", `translate(${g}px, ${h}px) scale(${o.width/d.width}, ${o.height/d.height})`), a.dataset.phase = "source", c = b.requestAnimationFrame(() => {
                                a.dataset.phase = "open"
                            })
                        })
                    });
                return d.observe(a), () => {
                    d.disconnect(), b.cancelAnimationFrame(c), delete a.dataset.phase, a.style.removeProperty("--entry-inset"), a.style.removeProperty("--entry-transform")
                }
            }, c = [q, o], k[0] = q, k[1] = o, k[2] = b, k[3] = c) : (b = k[2], c = k[3]), (0, f.useLayoutEffect)(b, c);
            let r = q ? "entry-yS3y1e" : void 0;
            return k[4] === Symbol.for("react.memo_cache_sentinel") ? (g = {
                position: "relative",
                maxWidth: "100%",
                width: m.V
            }, k[4] = g) : g = k[4], k[5] !== q ? (h = q ? (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, k[5] = q, k[6] = h) : h = k[6], k[7] !== l ? (i = (0, d.jsx)("div", {
                className: "content-ARLCcU",
                children: l
            }), k[7] = l, k[8] = i) : i = k[8], k[9] !== r || k[10] !== h || k[11] !== i ? (j = (0, d.jsxs)("div", {
                ref: p,
                "data-selection-annotation-entry": "",
                className: r,
                style: g,
                children: [h, i]
            }), k[9] = r, k[10] = h, k[11] = i, k[12] = j) : j = k[12], j
        }
        let p = (0, k.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(923720), c.e(531161), c.e(331061), c.e(511444)]).then(() => c("FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: a => (0, d.jsx)(r, {
                failed: !0,
                onClose: a.onCancel
            })
        });

        function q(a) {
            let b, c, g, h, i, k, l, m, n = (0, e.c)(18);
            n[0] !== a ? ({
                entryRect: b,
                ...c
            } = a, n[0] = a, n[1] = b, n[2] = c) : (b = n[1], c = n[2]), n[3] !== c.onCancel ? (g = (0, d.jsx)(r, {
                failed: !0,
                onClose: c.onCancel
            }), n[3] = c.onCancel, n[4] = g) : g = n[4], n[5] !== c.onCancel ? (h = (0, d.jsx)(r, {
                onClose: c.onCancel
            }), n[5] = c.onCancel, n[6] = h) : h = n[6], n[7] !== c ? (i = (0, d.jsx)(p, {
                ...c
            }), n[7] = c, n[8] = i) : i = n[8], n[9] !== h || n[10] !== i ? (k = (0, d.jsx)(f.Suspense, {
                fallback: h,
                children: i
            }), n[9] = h, n[10] = i, n[11] = k) : k = n[11], n[12] !== g || n[13] !== k ? (l = (0, d.jsx)(j.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: g,
                children: k
            }), n[12] = g, n[13] = k, n[14] = l) : l = n[14];
            let q = l;
            return n[15] !== q || n[16] !== b ? (m = null == b ? q : (0, d.jsx)(o, {
                source: b,
                children: q
            }), n[15] = q, n[16] = b, n[17] = m) : m = n[17], m
        }

        function r(a) {
            let b, c, f, j, k = (0, e.c)(9),
                {
                    failed: m,
                    onClose: n
                } = a,
                o = void 0 !== m && m,
                p = o ? "alert" : "status";
            return k[0] !== o ? (b = o ? (0, d.jsx)(g.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)(l.a, {}), (0, d.jsx)(g.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor\u2026"
                })]
            }), k[0] = o, k[1] = b) : b = k[1], k[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(g.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
            }), k[2] = c) : c = k[2], k[3] !== n ? (f = (0, d.jsx)(i.a, {
                color: "secondary",
                onClick: n,
                children: c
            }), k[3] = n, k[4] = f) : f = k[4], k[5] !== p || k[6] !== b || k[7] !== f ? (j = (0, d.jsxs)(h.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: p,
                children: [b, f]
            }), k[5] = p, k[6] = b, k[7] = f, k[8] = j) : j = k[8], j
        }
        q.prefetch = () => p.prefetch()
    }),
    dMTK: (function(a, b, c) {
        function d(a, b) {
            return (Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()) - Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())) / 864e5
        }

        function e(a, b) {
            let c = a.formatRelativeTime(b, "day", {
                numeric: "auto"
            });
            return a.locale.startsWith("en") ? c.charAt(0).toUpperCase() + c.slice(1) : c
        }
        c.d(b, {}, {
            a: d,
            b: e,
            c: function(a, b, c) {
                let f = Math.max(d(c, b), 0);
                return {
                    date: f <= 1 ? e(a, -f) : f <= 7 ? a.formatDate(b, {
                        weekday: "long"
                    }) : f <= 365 ? a.formatDate(b, {
                        weekday: "short",
                        month: "short",
                        day: "numeric"
                    }) : a.formatDate(b, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }),
                    time: a.formatTime(b, {
                        hour: "numeric",
                        minute: "2-digit"
                    }),
                    includeAt: f > 7
                }
            },
            d: function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                    c = null,
                    d = !1;
                return a.map(a => {
                    if (null == a) return c = null, d = !0, null;
                    let e = null;
                    for (let f of a) f.breaksPreviousAdjacency && (c = null), null == e && function(a) {
                        let {
                            current: b,
                            previous: c,
                            isFirstUserTurn: d,
                            nowMs: e
                        } = a;
                        return !1 !== b.opensExchange && null != b.sentAtMs && !!Number.isFinite(b.sentAtMs) && (!!d && e - b.sentAtMs > 36e5 || c?.role === "assistant" && null != c.sentAtMs && Number.isFinite(c.sentAtMs) && b.sentAtMs - c.sentAtMs > ("user" === b.role ? 36e5 : 6e5))
                    }({
                        current: f,
                        previous: c,
                        isFirstUserTurn: "user" === f.role && !d,
                        nowMs: b
                    }) && (e = f.sentAtMs), d = d || "user" === f.role, c = f;
                    return e
                })
            },
            e: function(a) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime()
            }
        })
    }),
    xD3Z: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("Q840"),
            h = c("Qgfj"),
            i = c("Wf1j"),
            j = c("oyxz"),
            k = c("QcW8"),
            l = c("Sm6l"),
            m = c("rmk3"),
            n = c("bf6R"),
            o = c("tSEg"),
            p = c("hZax"),
            q = c("dt6g"),
            r = c("WwnD");

        function s(a) {
            let b, c, g, k, o, q, r, s, u, v, w = (0, e.c)(31),
                {
                    contextMenuTrigger: x,
                    isCompact: y,
                    isDragging: z,
                    items: A,
                    open: B,
                    onMinimize: C,
                    onOpenChange: D
                } = a,
                E = (0, p.f)("2163293173"),
                F = (0, i.a)();
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, h.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), w[0] = b) : b = w[0], w[1] !== C ? (c = {
                id: "minimize",
                icon: n.nf,
                message: b,
                onSelect: C,
                selectAfterClose: !0
            }, w[1] = C, w[2] = c) : c = w[2], w[3] !== A || w[4] !== c ? (g = [...A, c], w[3] = A, w[4] = c, w[5] = g) : g = w[5];
            let G = g;
            if (null != x) {
                let a, b;
                return w[6] !== x ? (a = (0, d.jsx)("div", {
                    className: "contents",
                    children: x
                }), w[6] = x, w[7] = a) : a = w[7], w[8] !== G || w[9] !== a ? (b = (0, d.jsx)(m.a, {
                    disableNative: !0,
                    items: G,
                    children: a
                }), w[8] = G, w[9] = a, w[10] = b) : b = w[10], b
            }
            if (E) {
                let a;
                return w[11] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(d.Fragment, {}), w[11] = a) : a = w[11], a
            }
            let H = B || z;
            w[12] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, d.jsx)(j.a, {
                id: "quickChat.dock.dragHint",
                defaultMessage: "Drag to move \xb7 Click for options"
            }), w[12] = k) : k = w[12], w[13] !== F ? (o = F.formatMessage({
                id: "quickChat.moreOptions",
                defaultMessage: "Chat options"
            }), w[13] = F, w[14] = o) : o = w[14];
            let I = y ? "composer" : "toolbar";
            return w[15] !== D || w[16] !== B ? (q = a => {
                0 !== a.button || a.ctrlKey || !(a.detail > 0) || a.defaultPrevented || D?.(!B)
            }, w[15] = D, w[16] = B, w[17] = q) : q = w[17], w[18] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, d.jsx)(n.id, {}), w[18] = r) : r = w[18], w[19] !== o || w[20] !== I || w[21] !== q ? (s = (0, d.jsx)(l.a, {
                className: "cursor-grab touch-none active:cursor-grabbing",
                "aria-label": o,
                color: "ghostSecondaryPillBackground",
                "data-quick-chat-drag-handle": !0,
                size: I,
                uniform: !0,
                onPointerDown: t,
                onClick: q,
                children: r
            }), w[19] = o, w[20] = I, w[21] = q, w[22] = s) : s = w[22], w[23] !== s || w[24] !== H ? (u = (0, d.jsx)(f.a, {
                disabled: H,
                content: k,
                children: s
            }), w[23] = s, w[24] = H, w[25] = u) : u = w[25], w[26] !== G || w[27] !== D || w[28] !== B || w[29] !== u ? (v = (0, d.jsx)(m.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: B,
                onOpenChange: D,
                items: G,
                children: u
            }), w[26] = G, w[27] = D, w[28] = B, w[29] = u, w[30] = v) : v = w[30], v
        }

        function t(a) {
            0 !== a.button || a.ctrlKey || a.preventDefault()
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f = (0, e.c)(6),
                    i = (0, g.y)(o.a),
                    j = (0, g.z)(k.n);
                f[0] !== j || f[1] !== i ? (b = j ? [{
                    id: "full-view",
                    icon: n.P,
                    message: (0, h.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, q.a)(i, "context_menu", () => (0, r.b)(i, "chat", {
                            mode: "full"
                        }))
                    }
                }] : [], f[0] = j, f[1] = i, f[2] = b) : b = f[2];
                let l = b;
                return f[3] !== l || f[4] !== a ? (c = (0, d.jsx)(s, {
                    ...a,
                    items: l
                }), f[3] = l, f[4] = a, f[5] = c) : c = f[5], c
            },
            b: s
        })
    }),
    eYeG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Qgfj"),
            i = c("aqd9"),
            j = c("POjP");

        function k() {
            return (0, j.a)(0)
        }

        function l(a) {
            let b, c, g, i = (0, e.c)(8),
                {
                    placement: j,
                    progress: k,
                    ref: l
                } = a,
                m = "top" === (void 0 === j ? "bottom" : j) ? "top-3.5" : "bottom-3.5";
            i[0] !== m ? (b = (0, f.b)("pointer-events-none absolute end-3.5 z-10 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-card/80 px-2 body-sm font-medium text-[color:var(--color-image-generation-text,var(--color-text-info))] tabular-nums shadow-lg ring-[0.5px] ring-border backdrop-blur-md select-none", m), i[0] = m, i[1] = b) : b = i[1];
            let n = k / 100;
            return i[2] !== n ? (c = (0, d.jsx)(h.c, {
                value: n,
                style: "percent"
            }), i[2] = n, i[3] = c) : c = i[3], i[4] !== l || i[5] !== b || i[6] !== c ? (g = (0, d.jsx)("span", {
                ref: l,
                className: b,
                children: c
            }), i[4] = l, i[5] = b, i[6] = c, i[7] = g) : g = i[7], g
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, h = (0, e.c)(7),
                    {
                        generationStartedAtMs: m,
                        isActive: n,
                        placement: o
                    } = a,
                    p = void 0 === n || n,
                    [q, r] = (0, g.useState)(k),
                    s = (0, g.useRef)(null);
                return h[0] !== m || h[1] !== p ? (b = () => {
                    let a, b = s.current;
                    if (null == b) return;
                    let c = b.ownerDocument,
                        d = !1,
                        e = () => {
                            let b = (0, j.a)(Date.now() - m);
                            return r(b), 99 === b && (clearInterval(a), a = void 0), b
                        },
                        f = () => {
                            clearInterval(a), a = void 0, d && !c.hidden && 99 > e() && (a = setInterval(e, 500))
                        };
                    if (e(), !p) return;
                    c.addEventListener("visibilitychange", f);
                    let g = (0, i.a)(b, a => {
                        d = a, f()
                    });
                    return () => {
                        g?.(), c.removeEventListener("visibilitychange", f), clearInterval(a)
                    }
                }, c = [m, p], h[0] = m, h[1] = p, h[2] = b, h[3] = c) : (b = h[2], c = h[3]), (0, g.useLayoutEffect)(b, c), h[4] !== o || h[5] !== q ? (f = (0, d.jsx)(l, {
                    ref: s,
                    placement: o,
                    progress: q
                }), h[4] = o, h[5] = q, h[6] = f) : f = h[6], f
            },
            b: l
        })
    }),
    POjP: (function(a, b, c) {
        let d = [
            [0, 3],
            [.1, 25],
            [.55, 58],
            [.85, 88],
            [1, 90]
        ];
        c.d(b, {}, {
            a: function(a) {
                let b = Math.max(0, a / 45e3);
                for (let a = 1; a < d.length; a += 1) {
                    let c = d[a - 1],
                        e = d[a];
                    if (b <= e[0]) {
                        let a = (b - c[0]) / (e[0] - c[0]);
                        return Math.floor(c[1] + a * (e[1] - c[1]))
                    }
                }
                return Math.min(99, Math.floor(90 + 10 * (1 - Math.exp(-1.5 * (b - 1)))))
            }
        })
    }),
    ghCJ: (function(a, b, c) {
        c.d(b, {
            a: () => n
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Wf1j"),
            i = c("aqd9"),
            j = c("T1PX"),
            k = c("a6Zv"),
            l = c("eYeG");
        let m = {
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

        function n(a) {
            let b, c, g, i, j, k, m = (0, e.c)(27),
                {
                    ariaLabel: n,
                    background: p,
                    generationStartedAtMs: q,
                    isAnimating: r,
                    presentation: s,
                    previewSrc: t,
                    progressPlacement: u,
                    ref: v
                } = a,
                w = void 0 === r || r,
                x = void 0 === s ? "default" : s,
                y = (0, h.a)(),
                z = "fill" === x || "image-preview" === x,
                A = x;
            "single" === A ? A = "playground" : "fill" === A && (A = "default"), m[0] !== n || m[1] !== y ? (b = n ?? y.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image..."
            }), m[0] = n, m[1] = y, m[2] = b) : b = m[2];
            let B = null != t ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
                C = null == t && "surface" === (void 0 === p ? "surface" : p) && ("single" === x ? "bg-surface-secondary" : "dark:bg-secondary-ghost-hover bg-primary-soft-active");
            m[3] !== z || m[4] !== x || m[5] !== B || m[6] !== C ? (c = (0, f.b)("overflow-clip", B, C, z ? "absolute inset-0 size-full" : ["relative aspect-square", "thumbnail" === x ? "rounded-lg" : "rounded-2xl", "single" === x ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]"]), m[3] = z, m[4] = x, m[5] = B, m[6] = C, m[7] = c) : c = m[7], m[8] !== x || m[9] !== t ? (g = null != t ? (0, d.jsx)("img", {
                alt: "",
                className: (0, f.b)("pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70", "image-preview" === x ? "blur-md" : "scale-125 blur-3xl"),
                src: t,
                referrerPolicy: "no-referrer"
            }) : null, m[8] = x, m[9] = t, m[10] = g) : g = m[10];
            let D = null != t;
            return m[11] !== A || m[12] !== w || m[13] !== D ? (i = (0, d.jsx)(o, {
                isAnimating: w,
                overImage: D,
                presentation: A
            }), m[11] = A, m[12] = w, m[13] = D, m[14] = i) : i = m[14], m[15] !== z || m[16] !== q || m[17] !== w || m[18] !== u ? (j = null != q ? (0, d.jsx)(l.a, {
                generationStartedAtMs: q,
                isActive: w,
                placement: u ?? (z ? "top" : "bottom")
            }, q) : null, m[15] = z, m[16] = q, m[17] = w, m[18] = u, m[19] = j) : j = m[19], m[20] !== v || m[21] !== i || m[22] !== j || m[23] !== b || m[24] !== c || m[25] !== g ? (k = (0, d.jsxs)("div", {
                ref: v,
                "aria-busy": !0,
                "aria-label": b,
                className: c,
                children: [g, i, j]
            }), m[20] = v, m[21] = i, m[22] = j, m[23] = b, m[24] = c, m[25] = g, m[26] = k) : k = m[26], k
        }

        function o(a) {
            let b, c, h, l, n, o = (0, e.c)(17),
                {
                    isAnimating: t,
                    overImage: u,
                    presentation: v
                } = a,
                w = (0, j.a)(),
                x = (0, k.a)(),
                y = (0, g.useRef)(null),
                z = (0, g.useRef)(null);
            o[0] !== t || o[1] !== x || o[2] !== v || o[3] !== w ? (b = () => {
                if (!t) return;
                let a = y.current,
                    b = z.current,
                    c = b?.getContext("2d");
                if (null == a || null == b || null == c) return;
                let d = 2 * Math.PI,
                    e = getComputedStyle(a).color || (x ? "white" : "black"),
                    f = (a, b) => a + (w ? .5 : Math.random()) * (b - a),
                    g = a => 1.2 * a * f(1, 1.35),
                    h = {
                        durations: {
                            offsetX1: g(4500),
                            offsetY1: g(6330),
                            offsetX2: g(5600),
                            offsetY2: g(5750),
                            fieldSize1: g(3600),
                            fieldSize2: g(2400)
                        },
                        phases: {
                            offsetX1: f(0, 1),
                            offsetY1: f(0, 1),
                            offsetX2: f(0, 1),
                            offsetY2: f(0, 1),
                            fieldSize1: f(0, 1),
                            fieldSize2: f(0, 1)
                        },
                        bounds: {
                            x1Start: f(.1, .32),
                            x1End: f(.68, .9),
                            y1Start: f(.1, .32),
                            y1End: f(.68, .9),
                            x2Start: f(.68, .9),
                            x2End: f(.1, .32),
                            y2Start: f(.68, .9),
                            y2End: f(.1, .32)
                        },
                        fieldSizeRange: {
                            firstStart: f(.42, .52),
                            firstEnd: f(.62, .75),
                            secondStart: f(.5, .62),
                            secondEnd: f(.74, .9)
                        }
                    },
                    j = null,
                    k = 0,
                    l = null,
                    n = !0,
                    o = null,
                    u = !1,
                    A = !1,
                    B = b.ownerDocument,
                    C = f => {
                        var g, i, t, u, x, y, z, A, B, D, E, F;
                        if (!w && 0 !== k && f - k < 33.333333333333336) {
                            j = requestAnimationFrame(C);
                            return
                        }
                        if (k = f, null == o && (o = f), (n || null == l) && (() => {
                                let c = "image-preview" === v ? {
                                        width: a.clientWidth,
                                        height: a.clientHeight
                                    } : a.getBoundingClientRect(),
                                    d = Math.max(0, Math.floor(c.width)),
                                    e = Math.max(0, Math.floor(c.height));
                                if (0 === d || 0 === e) {
                                    l = null, n = !1;
                                    return
                                }
                                let f = Math.max(1, window.devicePixelRatio || 1),
                                    g = Math.floor(d * f),
                                    h = Math.floor(e * f);
                                (b.width !== g || b.height !== h) && (b.width = g, b.height = h);
                                let i = "default" === v ? Math.max(1, 12 / f) : m[v].spacing,
                                    j = Math.max(1, Math.floor(d / i)),
                                    k = Math.max(1, Math.floor(e / i)),
                                    o = (d - (j - 1) * i) * .5,
                                    p = (e - (k - 1) * i) * .5,
                                    q = new Float32Array(j),
                                    r = new Float32Array(k),
                                    s = new Float32Array(j),
                                    t = new Float32Array(k);
                                for (let a = 0; a < j; a += 1) q[a] = o + a * i, s[a] = 1 === j ? .5 : a / (j - 1);
                                for (let a = 0; a < k; a += 1) r[a] = p + a * i, t[a] = 1 === k ? .5 : a / (k - 1);
                                l = {
                                    width: d,
                                    height: e,
                                    dpr: f,
                                    spacing: i,
                                    xPositions: q,
                                    yPositions: r,
                                    xNormals: s,
                                    yNormals: t
                                }, n = !1
                            })(), null == l) {
                            j = null;
                            return
                        }
                        let G = w ? 0 : f - o,
                            H = (a, b) => {
                                let c;
                                return (c = (G / a + b) % 1) <= .5 ? 2 * c : 2 - 2 * c
                            },
                            I = (g = h.bounds.x1Start, i = h.bounds.x1End, g + (i - g) * s(H(h.durations.offsetX1, h.phases.offsetX1))),
                            J = (t = h.bounds.y1Start, u = h.bounds.y1End, t + (u - t) * r(H(h.durations.offsetY1, h.phases.offsetY1))),
                            K = (x = h.bounds.x2Start, y = h.bounds.x2End, x + (y - x) * s(H(h.durations.offsetX2, h.phases.offsetX2))),
                            L = (z = h.bounds.y2Start, A = h.bounds.y2End, z + (A - z) * r(H(h.durations.offsetY2, h.phases.offsetY2))),
                            M = .78 * (B = h.fieldSizeRange.firstStart, D = h.fieldSizeRange.firstEnd, B + (D - B) * r(H(h.durations.fieldSize1, h.phases.fieldSize1))),
                            N = .78 * (E = h.fieldSizeRange.secondStart, F = h.fieldSizeRange.secondEnd, E + (F - E) * r(H(h.durations.fieldSize2, h.phases.fieldSize2)));
                        c.save(), c.setTransform(l.dpr, 0, 0, l.dpr, 0, 0), c.clearRect(0, 0, l.width, l.height), c.fillStyle = e;
                        let O = "default" === v ? Math.max(.55, .5 * l.spacing * .16) : m[v].radius;
                        for (let a = 0; a < l.yPositions.length; a += 1) {
                            let b = l.yPositions[a],
                                e = l.yNormals[a];
                            for (let a = 0; a < l.xPositions.length; a += 1) {
                                let f = l.xPositions[a],
                                    g = l.xNormals[a],
                                    h = Math.pow(p((1 - q(0, M, Math.hypot(g - I, e - J))) * 1.2 + (1 - q(0, N, Math.hypot(g - K, e - L))) * .82), 1.18);
                                h <= .03 || (c.globalAlpha = h, c.beginPath(), c.moveTo(f + O, b), c.arc(f, b, O, 0, d), c.fill())
                            }
                        }
                        c.restore(), j = w ? null : requestAnimationFrame(C)
                    },
                    D = new ResizeObserver(() => {
                        n = !0, u && null == j && (j = requestAnimationFrame(C))
                    });
                D.observe(a);
                let E = () => {
                        (u = A && "hidden" !== B.visibilityState) ? null == j && (j = requestAnimationFrame(C)): null != j && (cancelAnimationFrame(j), j = null)
                    },
                    F = (0, i.a)(a, a => {
                        A = a, E()
                    });
                return B.addEventListener("visibilitychange", E), () => {
                    F?.(), B.removeEventListener("visibilitychange", E), null != j && cancelAnimationFrame(j), D.disconnect()
                }
            }, o[0] = t, o[1] = x, o[2] = v, o[3] = w, o[4] = b) : b = o[4], o[5] !== t || o[6] !== x || o[7] !== u || o[8] !== v || o[9] !== w ? (c = [t, x, u, v, w], o[5] = t, o[6] = x, o[7] = u, o[8] = v, o[9] = w, o[10] = c) : c = o[10], (0, g.useEffect)(b, c);
            let A = (u || "image-preview" === v) && "overImage-KmHrEc",
                B = (!t || w) && "reducedMotion-ttnr0y";
            return o[11] !== A || o[12] !== B ? (h = (0, f.b)("dots-avXrIV", A, B), o[11] = A, o[12] = B, o[13] = h) : h = o[13], o[14] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, d.jsx)("canvas", {
                ref: z,
                "aria-hidden": !0,
                className: "block h-full w-full"
            }), o[14] = l) : l = o[14], o[15] !== h ? (n = (0, d.jsx)("div", {
                ref: y,
                className: h,
                children: l
            }), o[15] = h, o[16] = n) : n = o[16], n
        }

        function p(a) {
            return Math.min(1, Math.max(0, a))
        }

        function q(a, b, c) {
            let d = p((c - a) / (b - a));
            return d * d * (3 - 2 * d)
        }

        function r(a) {
            return a * a * (3 - 2 * a)
        }

        function s(a) {
            return a < .5 ? 4 * a * a * a : 1 - Math.pow(-2 * a + 2, 3) / 2
        }
    }),
    QCUA: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)("chat");
        c.d(b, {}, {
            a: d
        })
    }),
    FW69: (function(a, b, c) {
        var d = c("xprp");
        c.d(b, {
            a: () => d.a
        })
    }),
    JEWd: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Sm6l"),
            i = c("IxWh"),
            j = c("HOLv"),
            k = c("bIvi"),
            l = c("mxRC"),
            m = c("GPpz");
        let n = {
            form: {
                color: "secondarySurface",
                size: "actionSm"
            },
            gallery: {
                color: "outlineSurface",
                size: "dialog"
            },
            compact: {
                color: "ghost",
                size: "compact"
            }
        };
        c.d(b, {}, {
            a: function(a) {
                let b, c, o, p, q, r, s, t, u, v, w, x = (0, e.c)(38),
                    {
                        ariaInvalid: y,
                        ariaLabel: z,
                        backLabel: A,
                        children: B,
                        forwardLabel: C,
                        header: D,
                        layout: E,
                        role: F,
                        shouldUseReducedMotion: G
                    } = a,
                    H = void 0 === E ? "form" : E,
                    I = void 0 === F ? "group" : F;
                x[0] !== B ? (b = g.Children.count(B), x[0] = B, x[1] = b) : b = x[1];
                let J = b,
                    K = (0, g.useRef)(null),
                    [L, M] = (0, g.useState)("ltr"),
                    [N, O] = (0, g.useState)(!1),
                    [P, Q] = (0, g.useState)(!1);
                x[2] === Symbol.for("react.memo_cache_sentinel") ? (c = a => {
                    let b = "rtl" === getComputedStyle(a).direction ? "rtl" : "ltr";
                    M(b);
                    let {
                        maximum: c,
                        minimum: d
                    } = (0, i.a)(a, b);
                    "rtl" === b ? (O(a.scrollLeft < c - 1), Q(a.scrollLeft > d + 1)) : (O(a.scrollLeft > d + 1), Q(a.scrollLeft < c - 1))
                }, x[2] = c) : c = x[2];
                let R = (0, k.a)(c),
                    S = a => {
                        if (K.current = a, null == a || 0 === J || (R(a), "u" < typeof ResizeObserver)) return;
                        let b = () => R(a),
                            c = new ResizeObserver(b),
                            d = new MutationObserver(b);
                        return d.observe(a, {
                            childList: !0
                        }), c.observe(a), null != a.firstElementChild && c.observe(a.firstElementChild), null != a.lastElementChild && c.observe(a.lastElementChild), () => {
                            c.disconnect(), d.disconnect(), K.current = null
                        }
                    },
                    T = "form" === H && "pointer-events-none absolute inset-x-0 top-1 z-10 h-34 justify-between px-3",
                    U = "gallery" === H && "gap-2";
                x[3] !== T || x[4] !== U ? (o = (0, f.b)("flex items-center", T, U), x[3] = T, x[4] = U, x[5] = o) : o = x[5];
                let V = [-1, 1].map(a => {
                    let b = -1 === a ? N : P,
                        c = -1 === a ? A : C;
                    return (0, d.jsx)(h.a, {
                        className: (0, f.b)("pointer-events-auto", "form" === H && !b && "invisible"),
                        "aria-label": c,
                        ...n[H],
                        disabled: !b,
                        onClick: () => {
                            let b;
                            null != (b = K.current) && b.scrollTo({
                                left: (0, i.b)(b, a, "rtl" === getComputedStyle(b).direction ? "rtl" : "ltr"),
                                behavior: G ? "instant" : "smooth"
                            })
                        },
                        radius: "compact" === H ? void 0 : "full",
                        title: c,
                        uniform: !0,
                        children: (0, d.jsx)(j.a, {
                            className: a === ("rtl" === L ? 1 : -1) ? "rotate-180" : void 0,
                            asset: "gallery" === H ? l.a : m.a
                        })
                    }, a)
                });
                x[6] !== o || x[7] !== V ? (p = (0, d.jsx)("div", {
                    className: o,
                    children: V
                }), x[6] = o, x[7] = V, x[8] = p) : p = x[8];
                let W = p,
                    X = "gallery" === H && "gap-4",
                    Y = "compact" === H && "gap-2",
                    Z = "form" === H && "gap-1.5";
                x[9] !== X || x[10] !== Y || x[11] !== Z ? (q = (0, f.b)("flex min-w-0 flex-col", X, Y, Z), x[9] = X, x[10] = Y, x[11] = Z, x[12] = q) : q = x[12], x[13] !== D || x[14] !== H || x[15] !== W ? (r = null != D || "form" !== H ? (0, d.jsxs)("div", {
                    className: (0, f.b)("flex min-w-0 items-center", "form" === H && "gap-1 px-4 py-1.5", "compact" === H && "gap-3", "gallery" === H && "min-h-9 gap-3"),
                    children: [(0, d.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: D
                    }), "form" !== H ? W : null]
                }) : null, x[13] = D, x[14] = H, x[15] = W, x[16] = r) : r = x[16];
                let $ = "form" === H ? "snap-x snap-mandatory scroll-px-4 gap-4 px-4 py-1" : "-my-1.5 py-1.5",
                    _ = "gallery" === H && "gap-3",
                    aa = "compact" === H && "gap-2";
                x[17] !== $ || x[18] !== _ || x[19] !== aa ? (s = (0, f.b)("hide-scrollbar flex overflow-x-auto overscroll-x-contain", $, _, aa), x[17] = $, x[18] = _, x[19] = aa, x[20] = s) : s = x[20];
                let ab = y || void 0;
                x[21] !== R ? (t = a => R(a.currentTarget), x[21] = R, x[22] = t) : t = x[22], x[23] !== z || x[24] !== B || x[25] !== I || x[26] !== S || x[27] !== s || x[28] !== ab || x[29] !== t ? (u = (0, d.jsx)("div", {
                    ref: S,
                    className: s,
                    "data-horizontal-scroll": !0,
                    role: I,
                    "aria-invalid": ab,
                    "aria-label": z,
                    onScroll: t,
                    children: B
                }), x[23] = z, x[24] = B, x[25] = I, x[26] = S, x[27] = s, x[28] = ab, x[29] = t, x[30] = u) : u = x[30];
                let ac = "form" === H ? W : null;
                return x[31] !== u || x[32] !== ac ? (v = (0, d.jsxs)("div", {
                    className: "relative min-w-0",
                    children: [u, ac]
                }), x[31] = u, x[32] = ac, x[33] = v) : v = x[33], x[34] !== q || x[35] !== r || x[36] !== v ? (w = (0, d.jsxs)("div", {
                    className: q,
                    children: [r, v]
                }), x[34] = q, x[35] = r, x[36] = v, x[37] = w) : w = x[37], w
            }
        })
    }),
    w5yV: (function(a, b, c) {
        var d = c("FW69"),
            e = c("ajVv");
        let f = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);

        function g(a) {
            let {
                range: b,
                element: c,
                target: d,
                bottomBoundaryTop: e
            } = a, f = j(c, e);
            if (null == f) return null;
            let g = function(a, b, c, d) {
                let e = Array.from(a.getClientRects()),
                    f = b.getBoundingClientRect(),
                    g = k(e, d);
                if (null != g && (e.length > 1 || null != l(g, f))) return g;
                let h = a.getBoundingClientRect(),
                    i = l(h, d);
                return null != i && null != l(i, f) ? i : e.some(a => a.width > 0 && a.height > 0) || h.width > 0 && h.height > 0 ? null : k(Array.from(b.getClientRects()), d) ?? l(f, d) ?? k(Array.from(c.getClientRects()), d) ?? l(c.getBoundingClientRect(), d)
            }(b, c, d, f);
            return null == g ? null : {
                rect: g,
                bounds: f
            }
        }

        function h(a, b, c) {
            let d = i(a),
                e = d?.closest(c);
            if (d instanceof HTMLElement && e instanceof HTMLElement) return {
                element: d,
                target: e
            };
            if (!(a instanceof Element)) return null;
            for (let d of [a.childNodes[b], a.childNodes[b - 1]]) {
                let a = i(d),
                    b = a?.closest(c);
                if (a instanceof HTMLElement && b instanceof HTMLElement) return {
                    element: a,
                    target: b
                }
            }
            return null
        }

        function i(a) {
            return a instanceof Element ? a : a?.parentElement ?? null
        }

        function j(a, b) {
            let c = {
                    bottom: null == b ? window.innerHeight : Math.min(window.innerHeight, b),
                    left: 0,
                    right: window.innerWidth,
                    top: 0
                },
                d = a;
            for (; null != d && d !== document.body && d !== document.documentElement;) {
                let a = window.getComputedStyle(d),
                    b = (a.overflowX || a.overflow).split(/\s+/).some(a => f.has(a)),
                    e = (a.overflowY || a.overflow).split(/\s+/).some(a => f.has(a));
                if (b || e) {
                    let a = d.getBoundingClientRect();
                    if ((c = {
                            bottom: e ? Math.min(c.bottom, a.bottom) : c.bottom,
                            left: b ? Math.max(c.left, a.left) : c.left,
                            right: b ? Math.min(c.right, a.right) : c.right,
                            top: e ? Math.max(c.top, a.top) : c.top
                        }).right <= c.left || c.bottom <= c.top) return null
                }
                d = d.parentElement
            }
            return c.bottom <= c.top ? null : c
        }

        function k(a, b) {
            for (let c of a) {
                let a = l(c, b);
                if (null != a) return a
            }
            return null
        }

        function l(a, b) {
            let c = Math.max(a.left, b.left),
                d = Math.max(a.top, b.top),
                e = Math.min(a.right, b.right),
                f = Math.min(a.bottom, b.bottom);
            return c >= e || d >= f ? null : new DOMRect(c, d, e - c, f - d)
        }
        c.d(b, {}, {
            a: j,
            b: g,
            c: function(a) {
                let {
                    bottomBoundarySelector: b,
                    portalTarget: c,
                    targetContainer: f,
                    targetSelector: j,
                    windowZoom: k
                } = a, l = window.getSelection();
                if (null == l || 0 === l.rangeCount || l.isCollapsed) return null;
                let m = function(a, b, c) {
                    var d, e;
                    let f, g, i = h(a.anchorNode, a.anchorOffset, c),
                        j = h(a.focusNode, a.focusOffset, c);
                    if (null != i && null != j && i.target !== j.target) return null;
                    let k = i ?? j;
                    return null == k || null != k.element.closest('[contenteditable="true"]') ? null : {
                        ...k,
                        range: (d = b, e = k.target, (f = document.createRange()).selectNodeContents(e), g = d.cloneRange(), (!e.contains(g.startContainer) || 0 > g.compareBoundaryPoints(Range.START_TO_START, f)) && g.setStart(f.startContainer, f.startOffset), (!e.contains(g.endContainer) || g.compareBoundaryPoints(Range.END_TO_END, f) > 0) && g.setEnd(f.endContainer, f.endOffset), g)
                    }
                }(l, l.getRangeAt(0), j);
                if (null == m || null != f && !f.contains(m.target)) return null;
                let n = (0, d.a)(m.range)?.trim() ?? m.range.toString().trim();
                if (0 === n.length) return null;
                let o = null == b ? null : f?.querySelector(b),
                    p = o instanceof HTMLElement ? o.getBoundingClientRect().top : void 0,
                    q = g({
                        ...m,
                        bottomBoundaryTop: p
                    });
                if (null == q) return null;
                let {
                    rect: r
                } = q, s = c?.contains(m.target) === !0 ? c : void 0, t = s?.getBoundingClientRect(), u = null == t ? {
                    left: 0,
                    right: window.innerWidth
                } : {
                    left: -t.left / k,
                    right: (window.innerWidth - t.left) / k
                }, v = null == t ? r : new DOMRect((r.left - t.left) / k, (r.top - t.top) / k, r.width / k, r.height / k), w = i(m.range.startContainer) ?? m.element;
                return {
                    direction: "rtl" === window.getComputedStyle(w).direction ? "rtl" : "ltr",
                    portalTarget: s,
                    rect: v,
                    selectionRange: m.range.cloneRange(),
                    selectedText: n,
                    target: m.target,
                    targetId: m.target.getAttribute(e.a),
                    viewportHorizontalBounds: u
                }
            },
            d: function(a, b) {
                return null != a && null != b && a.direction === b.direction && a.portalTarget === b.portalTarget && a.selectedText === b.selectedText && a.selectionRange.startContainer === b.selectionRange.startContainer && a.selectionRange.startOffset === b.selectionRange.startOffset && a.selectionRange.endContainer === b.selectionRange.endContainer && a.selectionRange.endOffset === b.selectionRange.endOffset && a.target === b.target && a.targetId === b.targetId && a.viewportHorizontalBounds.left === b.viewportHorizontalBounds.left && a.viewportHorizontalBounds.right === b.viewportHorizontalBounds.right && a.rect.left === b.rect.left && a.rect.top === b.rect.top && a.rect.width === b.rect.width && a.rect.height === b.rect.height
            }
        })
    }),
    NqfB: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("wD9O"),
            i = c("i7gm"),
            j = c("jDEJ"),
            k = c("bIvi"),
            l = c("w5yV"),
            m = c("ajVv");

        function n(a) {
            return null != a
        }

        function o(a) {
            return a.current
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, p, q, r, s, t, u, v, w = (0, e.c)(40),
                    {
                        align: x,
                        bottomBoundarySelector: y,
                        children: z,
                        className: A,
                        onOpen: B,
                        portalTargetSelector: C,
                        targetContainer: D,
                        targetContainerRefs: E,
                        targetSelector: F
                    } = a,
                    G = void 0 === F ? m.b : F,
                    H = (0, h.c)(),
                    I = (0, g.useRef)(null),
                    J = (0, g.useRef)(!1),
                    K = (0, g.useRef)(null),
                    L = (0, g.useRef)(null),
                    [M, N] = (0, g.useState)(null);
                w[0] !== B ? (b = a => {
                    B?.(a)
                }, w[0] = B, w[1] = b) : b = w[1];
                let O = (0, g.useEffectEvent)(b);
                w[2] !== M || w[3] !== H ? (c = () => {
                    let a = K.current?.getBoundingClientRect();
                    if (null == M || null == a) return;
                    let b = M.portalTarget?.getBoundingClientRect(),
                        c = null == b ? 1 : H;
                    return {
                        point: {
                            x: a.left + a.width / 2,
                            y: a.bottom
                        },
                        width: a.width,
                        selectionRect: {
                            x: M.rect.left * c + (b?.left ?? 0),
                            y: M.rect.top * c + (b?.top ?? 0),
                            width: M.rect.width * c,
                            height: M.rect.height * c
                        },
                        windowZoom: H
                    }
                }, w[2] = M, w[3] = H, w[4] = c) : c = w[4];
                let P = (0, k.a)(c);
                if (w[5] !== y || w[6] !== O || w[7] !== C || w[8] !== D || w[9] !== E || w[10] !== G || w[11] !== H ? (p = () => {
                        let a = null,
                            b = () => {
                                null != I.current && (window.cancelAnimationFrame(I.current), I.current = null)
                            },
                            c = () => {
                                b();
                                let a = window.getSelection();
                                null == L.current && (null == a || 0 === a.rangeCount || a.isCollapsed) || (I.current = window.requestAnimationFrame(() => {
                                    I.current = null;
                                    let a = null != D || null == E ? [D] : E.map(o).filter(n),
                                        b = null;
                                    for (let c of a)
                                        if (null != (b = (0, l.c)({
                                                bottomBoundarySelector: y,
                                                portalTarget: null == C ? void 0 : c?.querySelector(C) ?? void 0,
                                                targetContainer: c,
                                                targetSelector: G,
                                                windowZoom: H
                                            }))) break;
                                    (0, l.d)(L.current, b) || (null == L.current && null != b && O(b), L.current = b, N(b))
                                }))
                            },
                            d = () => {
                                let a = window.getSelection();
                                J.current || null == a || 0 === a.rangeCount || a.isCollapsed || c()
                            },
                            e = b => {
                                let e = window.getSelection(),
                                    f = L.current?.portalTarget;
                                if (!J.current && null != e && 0 !== e.rangeCount && !e.isCollapsed) {
                                    if (null != f && f.contains(e.getRangeAt(0).commonAncestorContainer)) {
                                        let c = b.target;
                                        if (!(c instanceof Node && f.contains(c))) return void(null != a && window.clearTimeout(a), a = window.setTimeout(() => {
                                            a = null, d()
                                        }, 100));
                                        if (!e.getRangeAt(0).intersectsNode(c)) return
                                    }
                                    c()
                                }
                            },
                            f = a => {
                                if (2 === a.button || 0 === a.button && a.ctrlKey && (0, j.a)()) return;
                                let c = a.target;
                                c instanceof Node && K.current?.contains(c) || (J.current = !0, b(), L.current = null, N(null))
                            },
                            g = () => {
                                J.current = !1, c()
                            },
                            h = () => {
                                if (J.current) {
                                    b(), L.current = null, N(null);
                                    return
                                }
                                c()
                            };
                        return c(), document.addEventListener("selectionchange", h), window.addEventListener("dblclick", c), window.addEventListener("keyup", c), window.addEventListener("pointerdown", f), window.addEventListener("pointerup", g), window.addEventListener("pointercancel", g), window.addEventListener("resize", d), window.addEventListener("scroll", e, !0), () => {
                            null != a && window.clearTimeout(a), b(), document.removeEventListener("selectionchange", h), window.removeEventListener("dblclick", c), window.removeEventListener("keyup", c), window.removeEventListener("pointerdown", f), window.removeEventListener("pointerup", g), window.removeEventListener("pointercancel", g), window.removeEventListener("resize", d), window.removeEventListener("scroll", e, !0)
                        }
                    }, w[5] = y, w[6] = O, w[7] = C, w[8] = D, w[9] = E, w[10] = G, w[11] = H, w[12] = p) : p = w[12], w[13] !== y || w[14] !== C || w[15] !== D || w[16] !== E || w[17] !== G || w[18] !== H ? (q = [y, C, D, E, G, H], w[13] = y, w[14] = C, w[15] = D, w[16] = E, w[17] = G, w[18] = H, w[19] = q) : q = w[19], (0, g.useEffect)(p, q), null == M) return null;
                let Q = .5;
                "start" === (void 0 === x ? "center" : x) && (Q = +("rtl" === M.direction));
                let R = M.rect.left + M.rect.width * Q,
                    S = M.viewportHorizontalBounds.left + 8 - R,
                    T = M.viewportHorizontalBounds.right - 8 - R,
                    U = M.portalTarget ?? document.body,
                    V = null == M.portalTarget ? "fixed z-50" : "absolute z-[1]";
                w[20] !== A || w[21] !== V ? (r = (0, f.b)("pointer-events-none w-max", V, A), w[20] = A, w[21] = V, w[22] = r) : r = w[22];
                let W = M.viewportHorizontalBounds.right - M.viewportHorizontalBounds.left - 16,
                    X = M.rect.top - 8,
                    Y = `translateX(clamp(${S}px, ${-100*Q}%, calc(${T}px - 100%))) translateY(-100%)`;
                return w[23] !== R || w[24] !== W || w[25] !== X || w[26] !== Y ? (s = {
                    left: R,
                    maxWidth: W,
                    top: X,
                    transform: Y
                }, w[23] = R, w[24] = W, w[25] = X, w[26] = Y, w[27] = s) : s = w[27], w[28] !== z || w[29] !== P || w[30] !== M || w[31] !== H ? (t = null == M.portalTarget && 1 !== H ? (0, d.jsx)("div", {
                    style: {
                        zoom: H
                    },
                    children: z(M, P)
                }) : z(M, P), w[28] = z, w[29] = P, w[30] = M, w[31] = H, w[32] = t) : t = w[32], w[33] !== s || w[34] !== t || w[35] !== r ? (u = (0, d.jsx)("div", {
                    ref: K,
                    className: r,
                    style: s,
                    children: t
                }), w[33] = s, w[34] = t, w[35] = r, w[36] = u) : u = w[36], w[37] !== u || w[38] !== U ? (v = (0, d.jsx)(i.a, {
                    container: U,
                    children: u
                }), w[37] = u, w[38] = U, w[39] = v) : v = w[39], v
            }
        })
    }),
    JEFL: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("Wf1j"),
            h = c("oyxz"),
            i = c("iqo5"),
            j = c("Sm6l"),
            k = c("jqmc"),
            l = c("UxN3"),
            m = c("VQAS"),
            n = c("mN6P"),
            o = c("w7ZL");
        c.d(b, {}, {
            a: function(a) {
                let b, c, p, q, r, s, t = (0, e.c)(56),
                    {
                        conversationTerminology: u,
                        onAddSelectedText: v,
                        onStartFileAnnotation: w,
                        onDismissFileAnnotation: x,
                        onCommentSelectedText: y,
                        onEditModeChange: z,
                        onEditSelectedText: A,
                        onMoreDetails: B,
                        onOpenSideChat: C,
                        resume: D,
                        selectedText: E
                    } = a,
                    F = void 0 === u ? "task" : u,
                    G = (0, g.a)(),
                    [H, I] = (0, f.useState)(D?.mode === "edit" ? D.instruction : ""),
                    [J, K] = (0, f.useState)(D?.mode ?? "actions"),
                    [L, M] = (0, f.useState)(null);
                if (null != L) {
                    let a, b, c;
                    return t[0] !== x ? (a = () => x?.(!1), b = () => x?.(!0), t[0] = x, t[1] = a, t[2] = b) : (a = t[1], b = t[2]), t[3] !== L.rect || t[4] !== L.submit || t[5] !== a || t[6] !== b ? (c = (0, d.jsx)(i.a, {
                        entryRect: L.rect,
                        onCancel: a,
                        onEscape: b,
                        onSubmit: L.submit
                    }), t[3] = L.rect, t[4] = L.submit, t[5] = a, t[6] = b, t[7] = c) : c = t[7], c
                }
                if ("pending" === J) return null;
                if ("edit" === J && null != A) {
                    let a, b, c, e, f, g, h, i, k, n;
                    return t[8] !== z ? (a = a => {
                        a.stopPropagation(), "Escape" === a.key && (a.preventDefault(), z?.(!1), K("actions-focused"))
                    }, t[8] = z, t[9] = a) : a = t[9], t[10] !== H || t[11] !== z || t[12] !== A ? (b = a => {
                        a.preventDefault(), 0 !== H.trim().length && (K("pending"), A(H).then(a => {
                            "retry" === a && (z?.(!1), K("actions-focused"))
                        }))
                    }, t[10] = H, t[11] = z, t[12] = A, t[13] = b) : b = t[13], t[14] !== G ? (c = G.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), t[14] = G, t[15] = c) : c = t[15], t[16] !== G ? (e = G.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit\u2026"
                    }), t[16] = G, t[17] = e) : e = t[17], t[18] === Symbol.for("react.memo_cache_sentinel") ? (f = a => {
                        I(a.target.value)
                    }, t[18] = f) : f = t[18], t[19] !== H || t[20] !== c || t[21] !== e ? (g = (0, d.jsx)("input", {
                        "aria-label": c,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: e,
                        required: !0,
                        value: H,
                        onChange: f
                    }), t[19] = H, t[20] = c, t[21] = e, t[22] = g) : g = t[22], t[23] !== G ? (h = G.formatMessage({
                        id: "selectedTextOverlay.editSubmit",
                        defaultMessage: "Submit edit instruction"
                    }), t[23] = G, t[24] = h) : h = t[24], t[25] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, d.jsx)(l.a, {
                        "aria-hidden": !0,
                        asset16: o.a,
                        legacyIcon: m.a,
                        legacyClassName: "icon-2xs"
                    }), t[25] = i) : i = t[25], t[26] !== h ? (k = (0, d.jsx)(j.a, {
                        "aria-label": h,
                        color: "primary",
                        size: "composerSm",
                        type: "submit",
                        uniform: !0,
                        children: i
                    }), t[26] = h, t[27] = k) : k = t[27], t[28] !== k || t[29] !== a || t[30] !== b || t[31] !== g ? (n = (0, d.jsxs)("form", {
                        className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                        onKeyDown: a,
                        onSubmit: b,
                        children: [g, k]
                    }), t[28] = k, t[29] = a, t[30] = b, t[31] = g, t[32] = n) : n = t[32], n
                }
                return t[33] !== F || t[34] !== v || t[35] !== w || t[36] !== E ? (b = null != v || null != w ? (0, d.jsx)(k.b, {
                    onClick: a => {
                        null != w ? M({
                            rect: (a.currentTarget.parentElement ?? a.currentTarget).getBoundingClientRect(),
                            submit: w()
                        }) : (window.getSelection()?.removeAllRanges(), v?.(E))
                    },
                    children: "chat" === F ? (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, t[33] = F, t[34] = v, t[35] = w, t[36] = E, t[37] = b) : b = t[37], t[38] !== B || t[39] !== E ? (c = null != B ? (0, d.jsx)(k.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), B(E)
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, t[38] = B, t[39] = E, t[40] = c) : c = t[40], t[41] !== C || t[42] !== E ? (p = null != C ? (0, d.jsx)(k.b, {
                    onClick: a => {
                        window.getSelection()?.removeAllRanges(), C(E, (0, n.b)(a))
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, t[41] = C, t[42] = E, t[43] = p) : p = t[43], t[44] !== y ? (q = null != y ? (0, d.jsx)(k.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), y()
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, t[44] = y, t[45] = q) : q = t[45], t[46] !== J || t[47] !== z || t[48] !== A ? (r = null != A ? (0, d.jsx)(k.b, {
                    autoFocus: "actions-focused" === J,
                    onClick: () => {
                        z?.(!0), K("edit")
                    },
                    children: (0, d.jsx)(h.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, t[46] = J, t[47] = z, t[48] = A, t[49] = r) : r = t[49], t[50] !== b || t[51] !== c || t[52] !== p || t[53] !== q || t[54] !== r ? (s = (0, d.jsxs)(k.a, {
                    children: [b, c, p, q, r]
                }), t[50] = b, t[51] = c, t[52] = p, t[53] = q, t[54] = r, t[55] = s) : s = t[55], s
            }
        })
    })
};