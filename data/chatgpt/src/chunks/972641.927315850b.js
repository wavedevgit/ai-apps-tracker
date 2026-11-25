export const __rspack_esm_ids = [972641];
export const __webpack_modules__ = {
    kUij: (function(a, b, c) {
        c.d(b, {
            a: () => j,
            b: () => l,
            c: () => k,
            d: () => e,
            e: () => f,
            f: () => m,
            g: () => n,
            h: () => i
        });
        var d = c("lAQI");
        let e = "openai/first-party-plugin-logging",
            f = "openai/logging/message";
        new WeakMap;
        let g = d.p(["trace", "debug", "info", "warning", "error"]),
            h = d.F({
                component: d.L().min(1).max(200),
                level: g,
                message: d.L().max(2e4),
                metadata: d.J(d.L(), d.R()).optional()
            }),
            i = d.F({
                method: d.z(f),
                params: d.F({
                    entries: d.g(h).min(1).max(50)
                })
            }),
            j = "openai/first-party-plugin-bridge",
            k = "ui/openai/first-party-plugin-bridge",
            l = "ui/notifications/openai/first-party-plugin-bridge",
            m = d.F({
                message: d.L()
            }),
            n = d.F({
                method: d.z(k),
                params: m
            })
    }),
    Vlqh: (function(a, b, c) {
        var d = c("lAQI");
        let e = {
            WORKSTREAM_HANDOFF_REQUESTED: "CODEX_PLUGINS_APP_SURFACE_ACTION_WORKSTREAM_HANDOFF_REQUESTED",
            GLOBAL_ENTRYPOINT_VIEWED: "CODEX_PLUGINS_APP_SURFACE_ACTION_GLOBAL_ENTRYPOINT_VIEWED"
        };
        d.F({
            action: d.p(e),
            tileName: d.p(["analyze-airway-rnaseq", "compare-pathology-visium", "design-pdl1-nanobodies", "improve-trastuzumab-cdrs", "dock-imatinib-abl1", "design-jak2-binders", "predict-ace-inhibitor-logd-pka", "assess-antibody-developability", "predict-kras-g12c", "map-petase-mutations", "embed-gb1-sequences", "price-pdl1-assays"]).optional()
        }).strict().refine(a => {
            let {
                action: b,
                tileName: c
            } = a;
            return null == c || b === e.WORKSTREAM_HANDOFF_REQUESTED
        }), c.d(b, {}, {
            a: "rosalind@openai-curated-remote"
        })
    }),
    fD5v: (function(a, b, c) {
        c("kSHG");
        var d = c("lAQI");
        let e = d.K({
            path: d.L().min(1)
        });
        c.d(b, {}, {
            a: "openai/files/open",
            b: e
        })
    }),
    WWo4: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("lAQI");
        let f = "openai/message",
            g = e.F({
                target: e.p(["active", "new"]).optional(),
                send: e.j().optional()
            }).strict(),
            h = d.W.shape.params.unwrap().extend({
                role: e.z("user"),
                content: e.g(d.h),
                _meta: d.W.shape.params.unwrap().shape._meta.unwrap().extend({
                    [f]: g.optional()
                }).optional()
            });
        c.d(b, {}, {
            a: f,
            b: g,
            c: h
        })
    }),
    OppN: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("lAQI");
        let f = "openai/modelContext",
            g = e.L().min(1);
        e.F({
            [f]: e.F({
                updateId: g
            })
        }), e.Q([e.F({
            content: e.g(d.h).optional(),
            structuredContent: e.J(e.L(), e.R()).optional(),
            updateId: g
        }), e.D()]), c.d(b, {}, {
            a: f
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
                    a_ = (0, g.z)(!!a$ && J.j);
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
                                        (0, H.a)(ay, "chat") && aA && ay.set(E.a, ay.get(k.ib))
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
    DvP0: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    b7aP: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("Bbed"),
            h = c("iS3k");
        let i = (0, g.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(913834)]).then(() => c("atL7"))).ChatGptThreadSummaryPanelBody, {
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
    FW69: (function(a, b, c) {
        var d = c("xprp");
        c.d(b, {
            a: () => d.a
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
    dDDU: (function(a, b, c) {
        var d = c("Qgfj"),
            e = c("Kyn2"),
            f = c("nnol"),
            g = c("QcW8"),
            h = c("ZU27"),
            i = c("bf6R"),
            j = c("GaA7"),
            k = c("Vhua"),
            l = c("NkWL");
        c.d(b, {}, {
            a: function(a) {
                let b = a.get(g.Y);
                return a.get(g.V) || b?.isVisible !== !0 || "split" !== b.mode && !a.get(l.c) ? [] : function(a, b) {
                    let g = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.l,
                        m = a.get(k.j),
                        n = [];
                    return "chat" === b || b.isWorkspaceHome || null == b.tabType.windowTransfer || null == j.a.detachedWindows || n.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !m && !(0, f.c)(a, b.tabId) && b.tabType.windowTransfer.canTransfer(a, b.props),
                        icon: i.fh,
                        message: (0, d.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, e.a)(a, Promise.resolve().then(() => c("K3jS")).then(c => {
                                let {
                                    moveTabToNewWindow: d
                                } = c;
                                return d(a, g, b, null)
                            }))
                        }
                    }), "chat" === b && a.get(l.c) && n.push({
                        id: "close-tab",
                        menuShortcut: "W",
                        icon: i.Nj,
                        message: (0, d.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, l.a)(a)
                    }), n
                }(a, "chat")
            }
        })
    }),
    apt2: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "chevron-right-md-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-chevron-right-md-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.580201,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: -.580201,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    rw3m: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "circle-grid-2x2-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-grid-2x2-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                },
                composite: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                }
            }
        }
    }),
    nr9t: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "clock-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-clock-light-24",
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
    RIYA: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "exclamation-mark-triangle-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-exclamation-mark-triangle-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                },
                composite: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                }
            }
        }
    }),
    QSa7: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "folder-person-2-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-folder-person-2-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    Jh6g: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "lightbulb-rays-regular-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-lightbulb-rays-regular-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .375,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .375,
                    overflows: !1
                }
            }
        }
    }),
    QVwL: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12"
            },
            href: "#codex-icon-list-circle-light-12",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                },
                composite: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                }
            }
        }
    }),
    MFgz: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-list-circle-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                },
                composite: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                }
            }
        }
    }),
    vBvI: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-list-circle-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                },
                composite: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                }
            }
        }
    }),
    J0Fe: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "lock-regular-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-lock-regular-24",
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
    Cl8d: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "map-point-of-interest-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-map-point-of-interest-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                }
            }
        }
    }),
    IBKv: (function(a, b) {
        b.a = {
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
    Uoxd: (function(a, b, c) {
        c.d(b, {
            a: () => d
        });
        var d = {
            kind: "inline",
            preset: (0, (c("tF54")).a)({
                name: "multicolor-verified-checkmark-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    frame: {
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20
                    },
                    inkBounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    visualBounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.236328,
                            y: 1.665039,
                            width: 15.526855,
                            height: 16.669434
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 6.599609,
                            y: 6.730957,
                            width: 6.698242,
                            height: 6.538574
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    center: {
                        x: 9.999756,
                        y: 9.999756
                    },
                    insets: {
                        top: 1.665039,
                        right: 2.236817,
                        bottom: 1.665527,
                        left: 2.236328
                    },
                    anchors: {
                        frame: {
                            x: 10,
                            y: 10
                        },
                        ink: {
                            x: 9.999756,
                            y: 9.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: ['<path d="M10 1.66667c1.54167 0 2.89583 0.86458 3.57292 2.13541 1.44791-0.04166 2.875 0.6875 3.64583 2.03125 0.77083 1.34375 0.69792 2.9375-0.0625 4.16667 0.76042 1.22917 0.83333 2.82292 0.0625 4.16667-0.77083 1.34375-2.19792 2.07291-3.64583 2.03125-0.67709 1.27083-2.03125 2.13541-3.57292 2.13541-1.55208 0-2.89583-0.86458-3.58333-2.13541-1.4375 0.04166-2.86459-0.6875-3.63542-2.03125-0.77083-1.34375-0.69792-2.9375 0.0625-4.16667-0.76042-1.22917-0.83333-2.82292-0.0625-4.16667 0.77083-1.34375 2.19792-2.07291 3.63542-2.03125 0.6875-1.27083 2.04166-2.13541 3.58333-2.13541z" fill="#00B1FF"/> <path d="M11.76042 7.11458c0.25-0.38541 0.76041-0.5 1.14583-0.25 0.39583 0.23959 0.51042 0.76042 0.26042 1.14584l-2.9375 4.63541c-0.03125 0.05209-0.08334 0.13542-0.13542 0.20834-0.0625 0.07291-0.17708 0.20833-0.375 0.3125-0.22917 0.11458-0.48958 0.13541-0.73958 0.0625-0.20834-0.0625-0.35417-0.17709-0.41667-0.23959-0.07292-0.0625-0.13542-0.13541-0.17708-0.17708l-1.5625-1.69792c-0.3125-0.34375-0.29167-0.875 0.04166-1.17708 0.34375-0.3125 0.875-0.29167 1.17709 0.04167l1.13541 1.22916 2.58334-4.09375z" fill="white"/>']
            })
        }
    }),
    ovnd: (function(a, b, c) {
        c.d(b, {
            a: () => d
        });
        var d = {
            kind: "inline",
            preset: (0, (c("tF54")).a)({
                name: "multicolor-verified-checkmark-light-24",
                canvas: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    frame: {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                    },
                    inkBounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    },
                    visualBounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.684082,
                            y: 1.998047,
                            width: 18.632324,
                            height: 20.003418
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 7.919434,
                            y: 8.077148,
                            width: 8.038086,
                            height: 7.84668
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    },
                    center: {
                        x: 12.000244,
                        y: 11.999756
                    },
                    insets: {
                        top: 1.998047,
                        right: 2.683594,
                        bottom: 1.998535,
                        left: 2.684082
                    },
                    anchors: {
                        frame: {
                            x: 12,
                            y: 12
                        },
                        ink: {
                            x: 12.000244,
                            y: 11.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: ['<path d="M12 2c1.8625 0 3.475 1.0375 4.3 2.5625 1.725-0.05 3.4375 0.825 4.3625 2.4375 0.925 1.6125 0.8375 3.525-0.075 5 0.9125 1.475 1 3.3875 0.075 5-0.925 1.6125-2.6375 2.4875-4.3625 2.4375-0.825 1.525-2.4375 2.5625-4.3 2.5625-1.85 0-3.475-1.0375-4.3-2.5625-1.725 0.05-3.4375-0.825-4.3625-2.4375-0.925-1.6125-0.8375-3.525 0.075-5-0.9125-1.475-1-3.3875-0.075-5 0.925-1.6125 2.6375-2.4875 4.3625-2.4375 0.825-1.525 2.45-2.5625 4.3-2.5625z" fill="#00B1FF"/> <path d="M14.1125 8.5375c0.3-0.4625 0.9125-0.6 1.375-0.3 0.475 0.2875 0.6125 0.9125 0.3125 1.375l-3.525 5.5625c-0.0375 0.0625-0.1 0.1625-0.1625 0.25-0.075 0.0875-0.2125 0.25-0.45 0.375-0.275 0.1375-0.5875 0.1625-0.8875 0.075-0.25-0.075-0.425-0.2125-0.5-0.2875-0.0875-0.075-0.1625-0.1625-0.2125-0.2125l-1.875-2.0375c-0.375-0.4125-0.35-1.05 0.05-1.4125 0.4125-0.375 1.05-0.35 1.4125 0.05l1.3625 1.475 3.1-4.9125z" fill="white"/>']
            })
        }
    }),
    gZIO: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "package-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-package-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 488e-6,
                    y: -977e-6,
                    overflows: !1
                },
                composite: {
                    x: 488e-6,
                    y: -977e-6,
                    overflows: !1
                }
            }
        }
    }),
    StfP: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "phone-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-phone-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 549e-6,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 549e-6,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    Dv8K: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "star-fill-regular-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-star-fill-regular-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                },
                composite: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                }
            }
        }
    }),
    OsUm: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "truck-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-truck-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    Eqtr: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "verified-badge-checkmark-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-verified-badge-checkmark-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                },
                composite: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                }
            }
        }
    }),
    zOJI: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "verified-checkmark-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-verified-checkmark-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                },
                composite: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                }
            }
        }
    }),
    WKY1: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
            name: "document-badge-magnifyingglass-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                },
                visualBounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                },
                center: {
                    x: 10.59192,
                    y: 10.639283
                },
                insets: {
                    top: 2.251465,
                    right: 1.832763,
                    bottom: .9729,
                    left: 3.016602
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.59192,
                        y: 10.639283
                    },
                    foreground: {
                        x: 10.59192,
                        y: 10.639283
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M13.59375 11c1.89063 0 3.42188 1.53125 3.42188 3.4375 0 0.70313-0.20313 1.375-0.57813 1.92188l1.53125 1.53125c0.26563 0.26562 0.26563 0.6875 0 0.9375-0.25 0.26562-0.67187 0.26562-0.9375 0l-1.54687-1.53125c-0.53125 0.35937-1.1875 0.57812-1.89063 0.57812-1.90625 0-3.4375-1.54687-3.4375-3.4375 0-1.90625 1.53125-3.4375 3.4375-3.4375zM13.59375 12.32813c-1.17187 0-2.10937 0.9375-2.10937 2.10937 0 1.15625 0.9375 2.10938 2.10937 2.10938 1.15625 0 2.09375-0.95313 2.09375-2.10938 0-1.17187-0.9375-2.10937-2.09375-2.10937z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.8125 2.25c0.84375 0 1.64063 0.32813 2.23438 0.92188l1.875 1.875c0.59375 0.59375 0.92187 1.40625 0.92187 2.23437v1.79688c0 0.375-0.29687 0.67187-0.65625 0.67187-0.375 0-0.67187-0.29687-0.67187-0.67187v-0.5h-2.09375c-1.29688 0-2.34375-1.04688-2.34375-2.32813v-2.67187h-4.89063c-1.01562 0-1.84375 0.82812-1.84375 1.84375v9.15625c0 1.01562 0.82813 1.84375 1.84375 1.84375h2c0.35938 0 0.65625 0.29687 0.65625 0.65625 0 0.375-0.29687 0.67187-0.65625 0.67187h-2c-1.75 0-3.17187-1.42187-3.17187-3.17187v-9.15625c0-1.75 1.42187-3.17188 3.17187-3.17188h5.625zM12.42188 6.25c0 0.54688 0.4375 1 1 1h2.09375c-0.01563-0.46875-0.20313-0.92187-0.53125-1.26562l-1.875-1.85938c-0.20313-0.20312-0.4375-0.34375-0.6875-0.4375v2.5625z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    zRfo: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
            name: "newspaper-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                },
                visualBounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                },
                center: {
                    x: 10,
                    y: 9.999756
                },
                insets: {
                    top: 2.668213,
                    right: 1.834961,
                    bottom: 2.668701,
                    left: 1.834961
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10,
                        y: 9.999756
                    },
                    foreground: {
                        x: 10,
                        y: 9.999756
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M14.17188 12.67188c0.35937 0 0.65625 0.29687 0.65625 0.65625 0 0.375-0.29688 0.67187-0.65625 0.67187h-8.34375c-0.35938 0-0.65625-0.29687-0.65625-0.67187 0-0.35938 0.29687-0.65625 0.65625-0.65625h8.34375z" fill="currentColor"/> <path d="M8.75 6c0.59375 0 1.07813 0.48438 1.07813 1.07813v2.5c0 0.60937-0.48438 1.09375-1.07813 1.09375h-2.5c-0.59375 0-1.07812-0.48438-1.07812-1.09375v-2.5c0-0.59375 0.48437-1.07813 1.07812-1.07813h2.5zM6.5 9.32813h2v-2h-2v2z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.17188 9.32813c0.35937 0 0.65625 0.3125 0.65625 0.67187 0 0.375-0.29688 0.67188-0.65625 0.67188h-2.09375c-0.35938 0-0.65625-0.29688-0.65625-0.67188 0-0.35937 0.29687-0.67187 0.65625-0.67187h2.09375z" fill="currentColor"/> <path d="M14.17188 6c0.35937 0 0.65625 0.29688 0.65625 0.67188 0 0.35937-0.29688 0.65625-0.65625 0.65625h-2.09375c-0.35938 0-0.65625-0.29688-0.65625-0.65625 0-0.375 0.29687-0.67188 0.65625-0.67188h2.09375z" fill="currentColor"/> <path d="M15.17188 2.67188c1.65625 0 3 1.34375 3 3v8.65625c0 1.65625-1.34375 3-3 3h-10.34375c-1.65625 0-3-1.34375-3-3v-8.65625c0-1.65625 1.34375-3 3-3h10.34375zM4.82813 4c-0.92188 0-1.65625 0.75-1.65625 1.67188v8.65625c0 0.92187 0.73437 1.67187 1.65625 1.67187h10.34375c0.92187 0 1.65625-0.75 1.65625-1.67187v-8.65625c0-0.92188-0.73438-1.67188-1.65625-1.67188h-10.34375z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    ty1V: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("Fc3g"),
            f = c("yAzs"),
            g = c("zWxU"),
            h = c("lVCP"),
            i = c("Zu17"),
            j = c("k5JT"),
            k = c("WQq2"),
            l = c("duD4"),
            m = c("kUVq"),
            n = c("ABep"),
            o = Object.defineProperty,
            p = (a, b) => o(a, "name", {
                value: b,
                configurable: !0
            });

        function q(a, b) {
            return d.useReducer((a, c) => b[a][c] ?? a, a)
        }
        p(q, "useStateMachine");
        var r = "ScrollArea",
            [s, t] = (0, g.a)(r),
            [u, v] = s(r),
            w = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    type: f = "hover",
                    dir: g,
                    scrollHideDelay: i = 600,
                    ...k
                } = a, [l, m] = d.useState(null), [o, p] = d.useState(null), [q, r] = d.useState(null), [s, t] = d.useState(null), [v, w] = d.useState(null), [x, y] = d.useState(0), [z, A] = d.useState(0), [B, C] = d.useState(!1), [D, E] = d.useState(!1), F = (0, h.b)(b, m), G = (0, j.useDirection)(g);
                return (0, n.jsx)(u, {
                    scope: c,
                    type: f,
                    dir: G,
                    scrollHideDelay: i,
                    scrollArea: l,
                    viewport: o,
                    onViewportChange: p,
                    content: q,
                    onContentChange: r,
                    scrollbarX: s,
                    onScrollbarXChange: t,
                    scrollbarXEnabled: B,
                    onScrollbarXEnabledChange: C,
                    scrollbarY: v,
                    onScrollbarYChange: w,
                    scrollbarYEnabled: D,
                    onScrollbarYEnabledChange: E,
                    onCornerWidthChange: y,
                    onCornerHeightChange: A,
                    children: (0, n.jsx)(e.a.div, {
                        dir: G,
                        ...k,
                        ref: F,
                        style: {
                            position: "relative",
                            "--radix-scroll-area-corner-width": x + "px",
                            "--radix-scroll-area-corner-height": z + "px",
                            ...a.style
                        }
                    })
                })
            }, "ScrollArea")),
            x = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    children: f,
                    nonce: g,
                    ...i
                } = a, j = v("ScrollAreaViewport", c), k = d.useRef(null), l = (0, h.b)(b, k, j.onViewportChange);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(y, {
                        nonce: g
                    }), (0, n.jsx)(e.a.div, {
                        "data-radix-scroll-area-viewport": "",
                        ...i,
                        ref: l,
                        style: {
                            overflowX: j.scrollbarXEnabled ? "scroll" : "hidden",
                            overflowY: j.scrollbarYEnabled ? "scroll" : "hidden",
                            ...a.style
                        },
                        children: (0, n.jsx)("div", {
                            ref: j.onContentChange,
                            style: {
                                minWidth: "100%",
                                display: "table"
                            },
                            children: f
                        })
                    })]
                })
            }, "ScrollAreaViewport")),
            y = d.memo(p(function({
                nonce: a
            }) {
                return (0, n.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: a
                })
            }, "ScrollAreaViewportStyle"), (a, b) => a.nonce === b.nonce),
            z = "ScrollAreaScrollbar",
            A = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, f = v(z, a.__scopeScrollArea), {
                    onScrollbarXEnabledChange: g,
                    onScrollbarYEnabledChange: h
                } = f, i = "horizontal" === a.orientation;
                return d.useEffect(() => (i ? g(!0) : h(!0), () => {
                    i ? g(!1) : h(!1)
                }), [i, g, h]), "hover" === f.type ? (0, n.jsx)(B, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "scroll" === f.type ? (0, n.jsx)(C, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "auto" === f.type ? (0, n.jsx)(D, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "always" === f.type ? (0, n.jsx)(E, {
                    ...e,
                    ref: b,
                    "data-state": "visible"
                }) : null
            }, "ScrollAreaScrollbar")),
            B = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, g = v(z, a.__scopeScrollArea), [h, i] = d.useState(!1);
                return d.useEffect(() => {
                    let a = g.scrollArea,
                        b = 0;
                    if (a) {
                        let c = p(() => {
                                window.clearTimeout(b), i(!0)
                            }, "handlePointerEnter"),
                            d = p(() => {
                                b = window.setTimeout(() => i(!1), g.scrollHideDelay)
                            }, "handlePointerLeave");
                        return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", d), () => {
                            window.clearTimeout(b), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", d)
                        }
                    }
                }, [g.scrollArea, g.scrollHideDelay]), (0, n.jsx)(f.a, {
                    present: c || h,
                    children: (0, n.jsx)(D, {
                        "data-state": h ? "visible" : "hidden",
                        ...e,
                        ref: b
                    })
                })
            }, "ScrollAreaScrollbarHover")),
            C = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, g = v(z, a.__scopeScrollArea), h = "horizontal" === a.orientation, i = V(() => k("SCROLL_END"), 100), [j, k] = q("hidden", {
                    hidden: {
                        SCROLL: "scrolling"
                    },
                    scrolling: {
                        SCROLL_END: "idle",
                        POINTER_ENTER: "interacting"
                    },
                    interacting: {
                        SCROLL: "interacting",
                        POINTER_LEAVE: "idle"
                    },
                    idle: {
                        HIDE: "hidden",
                        SCROLL: "scrolling",
                        POINTER_ENTER: "interacting"
                    }
                });
                return d.useEffect(() => {
                    if ("idle" === j) {
                        let a = window.setTimeout(() => k("HIDE"), g.scrollHideDelay);
                        return () => window.clearTimeout(a)
                    }
                }, [j, g.scrollHideDelay, k]), d.useEffect(() => {
                    let a = g.viewport,
                        b = h ? "scrollLeft" : "scrollTop";
                    if (a) {
                        let c = a[b],
                            d = p(() => {
                                let d = a[b];
                                c !== d && (k("SCROLL"), i()), c = d
                            }, "handleScroll");
                        return a.addEventListener("scroll", d), () => a.removeEventListener("scroll", d)
                    }
                }, [g.viewport, h, k, i]), (0, n.jsx)(f.a, {
                    present: c || "hidden" !== j,
                    children: (0, n.jsx)(E, {
                        "data-state": "hidden" === j ? "hidden" : "visible",
                        ...e,
                        ref: b,
                        onPointerEnter: (0, m.a)(a.onPointerEnter, () => k("POINTER_ENTER")),
                        onPointerLeave: (0, m.a)(a.onPointerLeave, () => k("POINTER_LEAVE"))
                    })
                })
            }, "ScrollAreaScrollbarScroll")),
            D = d.forwardRef(p(function(a, b) {
                let c = v(z, a.__scopeScrollArea),
                    {
                        forceMount: e,
                        ...g
                    } = a,
                    [h, i] = d.useState(!1),
                    j = "horizontal" === a.orientation,
                    k = V(() => {
                        if (c.viewport) {
                            let a = c.viewport.offsetWidth < c.viewport.scrollWidth,
                                b = c.viewport.offsetHeight < c.viewport.scrollHeight;
                            i(j ? a : b)
                        }
                    }, 10);
                return W(c.viewport, k), W(c.content, k), (0, n.jsx)(f.a, {
                    present: e || h,
                    children: (0, n.jsx)(E, {
                        "data-state": h ? "visible" : "hidden",
                        ...g,
                        ref: b
                    })
                })
            }, "ScrollAreaScrollbarAuto")),
            E = d.forwardRef(p(function(a, b) {
                let {
                    orientation: c = "vertical",
                    ...e
                } = a, f = v(z, a.__scopeScrollArea), g = d.useRef(null), h = d.useRef(0), [i, j] = d.useState({
                    content: 0,
                    viewport: 0,
                    scrollbar: {
                        size: 0,
                        paddingStart: 0,
                        paddingEnd: 0
                    }
                }), k = O(i.viewport, i.content), l = {
                    ...e,
                    sizes: i,
                    onSizesChange: j,
                    hasThumb: !!(k > 0 && k < 1),
                    onThumbChange: p(a => g.current = a, "onThumbChange"),
                    onThumbPointerUp: p(() => h.current = 0, "onThumbPointerUp"),
                    onThumbPointerDown: p(a => h.current = a, "onThumbPointerDown")
                };

                function m(a, b) {
                    return Q(a, h.current, i, b)
                }
                return (p(m, "getScrollPosition"), "horizontal" === c) ? (0, n.jsx)(F, {
                    ...l,
                    ref: b,
                    onThumbPositionChange: () => {
                        if (f.viewport && g.current) {
                            let a = R(f.viewport.scrollLeft, i, f.dir);
                            g.current.style.transform = `translate3d(${a}px, 0, 0)`
                        }
                    },
                    onWheelScroll: a => {
                        f.viewport && (f.viewport.scrollLeft = a)
                    },
                    onDragScroll: a => {
                        f.viewport && (f.viewport.scrollLeft = m(a, f.dir))
                    }
                }) : "vertical" === c ? (0, n.jsx)(G, {
                    ...l,
                    ref: b,
                    onThumbPositionChange: () => {
                        if (f.viewport && g.current) {
                            let a = R(f.viewport.scrollTop, i);
                            g.current.style.transform = `translate3d(0, ${a}px, 0)`
                        }
                    },
                    onWheelScroll: a => {
                        f.viewport && (f.viewport.scrollTop = a)
                    },
                    onDragScroll: a => {
                        f.viewport && (f.viewport.scrollTop = m(a))
                    }
                }) : null
            }, "ScrollAreaScrollbarVisible")),
            F = d.forwardRef(p(function(a, b) {
                let {
                    sizes: c,
                    onSizesChange: e,
                    ...f
                } = a, g = v(z, a.__scopeScrollArea), [i, j] = d.useState(), k = d.useRef(null), l = (0, h.b)(b, k, g.onScrollbarXChange);
                return d.useEffect(() => {
                    k.current && j(getComputedStyle(k.current))
                }, [k]), (0, n.jsx)(J, {
                    "data-orientation": "horizontal",
                    ...f,
                    ref: l,
                    sizes: c,
                    style: {
                        bottom: 0,
                        left: "rtl" === g.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                        right: "ltr" === g.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                        "--radix-scroll-area-thumb-width": P(c) + "px",
                        ...a.style
                    },
                    onThumbPointerDown: b => a.onThumbPointerDown(b.x),
                    onDragScroll: b => a.onDragScroll(b.x),
                    onWheelScroll: (b, c) => {
                        if (g.viewport) {
                            let d = g.viewport.scrollLeft + b.deltaX;
                            a.onWheelScroll(d), T(d, c) && b.preventDefault()
                        }
                    },
                    onResize: () => {
                        k.current && g.viewport && i && e({
                            content: g.viewport.scrollWidth,
                            viewport: g.viewport.offsetWidth,
                            scrollbar: {
                                size: k.current.clientWidth,
                                paddingStart: N(i.paddingLeft),
                                paddingEnd: N(i.paddingRight)
                            }
                        })
                    }
                })
            }, "ScrollAreaScrollbarX")),
            G = d.forwardRef(p(function(a, b) {
                let {
                    sizes: c,
                    onSizesChange: e,
                    ...f
                } = a, g = v(z, a.__scopeScrollArea), [i, j] = d.useState(), k = d.useRef(null), l = (0, h.b)(b, k, g.onScrollbarYChange);
                return d.useEffect(() => {
                    k.current && j(getComputedStyle(k.current))
                }, [k]), (0, n.jsx)(J, {
                    "data-orientation": "vertical",
                    ...f,
                    ref: l,
                    sizes: c,
                    style: {
                        top: 0,
                        right: "ltr" === g.dir ? 0 : void 0,
                        left: "rtl" === g.dir ? 0 : void 0,
                        bottom: "var(--radix-scroll-area-corner-height)",
                        "--radix-scroll-area-thumb-height": P(c) + "px",
                        ...a.style
                    },
                    onThumbPointerDown: b => a.onThumbPointerDown(b.y),
                    onDragScroll: b => a.onDragScroll(b.y),
                    onWheelScroll: (b, c) => {
                        if (g.viewport) {
                            let d = g.viewport.scrollTop + b.deltaY;
                            a.onWheelScroll(d), T(d, c) && b.preventDefault()
                        }
                    },
                    onResize: () => {
                        k.current && g.viewport && i && e({
                            content: g.viewport.scrollHeight,
                            viewport: g.viewport.offsetHeight,
                            scrollbar: {
                                size: k.current.clientHeight,
                                paddingStart: N(i.paddingTop),
                                paddingEnd: N(i.paddingBottom)
                            }
                        })
                    }
                })
            }, "ScrollAreaScrollbarY")),
            [H, I] = s(z),
            J = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    sizes: f,
                    hasThumb: g,
                    onThumbChange: j,
                    onThumbPointerUp: k,
                    onThumbPointerDown: l,
                    onThumbPositionChange: o,
                    onDragScroll: q,
                    onWheelScroll: r,
                    onResize: s,
                    ...t
                } = a, u = v(z, c), [w, x] = d.useState(null), y = (0, h.b)(b, x), A = d.useRef(null), B = d.useRef(""), C = u.viewport, D = f.content - f.viewport, E = (0, i.a)(r), F = (0, i.a)(o), G = V(s, 10);

                function I(a) {
                    A.current && q({
                        x: (a.clientX - A.current.left) * w.offsetWidth / A.current.width,
                        y: (a.clientY - A.current.top) * w.offsetHeight / A.current.height
                    })
                }
                return p(I, "handleDragScroll"), d.useEffect(() => {
                    let a = p(a => {
                        let b = a.target;
                        w?.contains(b) && E(a, D)
                    }, "handleWheel");
                    return document.addEventListener("wheel", a, {
                        passive: !1
                    }), () => document.removeEventListener("wheel", a, {
                        passive: !1
                    })
                }, [C, w, D, E]), d.useEffect(F, [f, F]), W(w, G), W(u.content, G), (0, n.jsx)(H, {
                    scope: c,
                    scrollbar: w,
                    hasThumb: g,
                    onThumbChange: (0, i.a)(j),
                    onThumbPointerUp: (0, i.a)(k),
                    onThumbPositionChange: F,
                    onThumbPointerDown: (0, i.a)(l),
                    children: (0, n.jsx)(e.a.div, {
                        ...t,
                        ref: y,
                        style: {
                            position: "absolute",
                            ...t.style
                        },
                        onPointerDown: (0, m.a)(a.onPointerDown, a => {
                            0 === a.button && (a.target.setPointerCapture(a.pointerId), A.current = w.getBoundingClientRect(), B.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", u.viewport && (u.viewport.style.scrollBehavior = "auto"), I(a))
                        }),
                        onPointerMove: (0, m.a)(a.onPointerMove, I),
                        onPointerUp: (0, m.a)(a.onPointerUp, a => {
                            let b = a.target;
                            b.hasPointerCapture(a.pointerId) && b.releasePointerCapture(a.pointerId), document.body.style.webkitUserSelect = B.current, u.viewport && (u.viewport.style.scrollBehavior = ""), A.current = null
                        })
                    })
                })
            }, "ScrollAreaScrollbarImpl")),
            K = "ScrollAreaThumb",
            L = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...d
                } = a, e = I(K, a.__scopeScrollArea);
                return (0, n.jsx)(f.a, {
                    present: c || e.hasThumb,
                    children: (0, n.jsx)(M, {
                        ref: b,
                        ...d
                    })
                })
            }, "ScrollAreaThumb")),
            M = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    style: f,
                    ...g
                } = a, i = v(K, c), j = I(K, c), {
                    onThumbPositionChange: k
                } = j, l = (0, h.b)(b, j.onThumbChange), o = d.useRef(void 0), q = V(() => {
                    o.current && (o.current(), o.current = void 0)
                }, 100);
                return d.useEffect(() => {
                    let a = i.viewport;
                    if (a) {
                        let b = p(() => {
                            q(), o.current || (o.current = U(a, k), k())
                        }, "handleScroll");
                        return k(), a.addEventListener("scroll", b), () => {
                            a.removeEventListener("scroll", b), o.current?.(), o.current = void 0
                        }
                    }
                }, [i.viewport, q, k]), (0, n.jsx)(e.a.div, {
                    "data-state": j.hasThumb ? "visible" : "hidden",
                    ...g,
                    ref: l,
                    style: {
                        width: "var(--radix-scroll-area-thumb-width)",
                        height: "var(--radix-scroll-area-thumb-height)",
                        ...f
                    },
                    onPointerDownCapture: (0, m.a)(a.onPointerDownCapture, a => {
                        let b = a.target.getBoundingClientRect(),
                            c = j.scrollbar,
                            d = c.getBoundingClientRect(),
                            e = (a.clientX - b.left) * c.offsetWidth / d.width,
                            f = (a.clientY - b.top) * c.offsetHeight / d.height;
                        j.onThumbPointerDown({
                            x: e,
                            y: f
                        })
                    }),
                    onPointerUp: (0, m.a)(a.onPointerUp, j.onThumbPointerUp)
                })
            }, "ScrollAreaThumbImpl"));

        function N(a) {
            return a ? parseInt(a, 10) : 0
        }

        function O(a, b) {
            let c = a / b;
            return isNaN(c) ? 0 : c
        }

        function P(a) {
            let b = O(a.viewport, a.content),
                c = a.scrollbar.paddingStart + a.scrollbar.paddingEnd;
            return Math.max((a.scrollbar.size - c) * b, 18)
        }

        function Q(a, b, c, d = "ltr") {
            let e = P(c),
                f = b || e / 2,
                g = c.scrollbar.paddingStart + f,
                h = c.scrollbar.size - c.scrollbar.paddingEnd - (e - f),
                i = c.content - c.viewport;
            return S([g, h], "ltr" === d ? [0, i] : [-1 * i, 0])(a)
        }

        function R(a, b, c = "ltr") {
            let d = P(b),
                e = b.scrollbar.paddingStart + b.scrollbar.paddingEnd,
                f = b.scrollbar.size - e,
                g = b.content - b.viewport,
                h = (0, l.a)(a, "ltr" === c ? [0, g] : [-1 * g, 0]);
            return S([0, g], [0, f - d])(h)
        }

        function S(a, b) {
            return c => {
                if (a[0] === a[1] || b[0] === b[1]) return b[0];
                let d = (b[1] - b[0]) / (a[1] - a[0]);
                return b[0] + d * (c - a[0])
            }
        }

        function T(a, b) {
            return a > 0 && a < b
        }
        p(N, "toInt"), p(O, "getThumbRatio"), p(P, "getThumbSize"), p(Q, "getScrollPositionFromPointer"), p(R, "getThumbOffsetFromScroll"), p(S, "linearScale"), p(T, "isScrollingWithinScrollbarBounds");
        var U = p((a, b = () => {}) => {
            let c = {
                    left: a.scrollLeft,
                    top: a.scrollTop
                },
                d = 0;
            return (p(function e() {
                let f = {
                        left: a.scrollLeft,
                        top: a.scrollTop
                    },
                    g = c.left !== f.left,
                    h = c.top !== f.top;
                (g || h) && b(), c = f, d = window.requestAnimationFrame(e)
            }, "loop"))(), () => window.cancelAnimationFrame(d)
        }, "addUnlinkedScrollListener");

        function V(a, b) {
            let c = (0, i.a)(a),
                e = d.useRef(0);
            return d.useEffect(() => () => window.clearTimeout(e.current), []), d.useCallback(() => {
                window.clearTimeout(e.current), e.current = window.setTimeout(c, b)
            }, [c, b])
        }

        function W(a, b) {
            let c = (0, i.a)(b);
            (0, k.a)(() => {
                let b = 0;
                if (a) {
                    let d = new ResizeObserver(() => {
                        cancelAnimationFrame(b), b = window.requestAnimationFrame(c)
                    });
                    return d.observe(a), () => {
                        window.cancelAnimationFrame(b), d.unobserve(a)
                    }
                }
            }, [a, c])
        }
        p(V, "useDebounceCallback"), p(W, "useResizeObserver"), c.d(b, {}, {
            a: w,
            b: A,
            c: L,
            d: x
        })
    }),
    h24K: (function(a, b, c) {
        var d = c("gPp5");
        class e {
            constructor() {
                this.componentControls = new Set
            }
            subscribe(a) {
                return this.componentControls.add(a), () => this.componentControls.delete(a)
            }
            start(a, b) {
                this.componentControls.forEach(c => {
                    c.start(a.nativeEvent || a, b)
                })
            }
            cancel() {
                this.componentControls.forEach(a => {
                    a.cancel()
                })
            }
            stop() {
                this.componentControls.forEach(a => {
                    a.stop()
                })
            }
        }
        let f = () => new e;
        c.d(b, {}, {
            a: function() {
                return (0, d.a)(f)
            }
        })
    })
};