export const __rspack_esm_ids = [782801];
export const __webpack_modules__ = {
    piij: (function(a, b, c) {
        a.exports = c.p + "assets/space-recovery.105d9c61fe.png"
    }),
    ylLY: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
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
                                titleContent: aH ?? ae,
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
    b7aP: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("Bbed"),
            h = c("iS3k");
        let i = (0, g.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(274752)]).then(c.bind(c, "Zlla"))).ChatGptThreadSummaryPanelBody, {
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
            h = c("KvQL"),
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
                        b = (0, k.e)(x ?? (null == z ? "" : A.get(n.v, z)), {
                            addInitialContentToHistory: null == x && null != z,
                            defaultTextKind: y ?? (null == x && null != z || (0, j.b)(x ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, m.b)(A.get, h.xf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== a && "flora" !== a,
                                variant: "tpp" !== a && "flora" !== a ? "chatgpt" : void 0
                            }
                        });
                    return null == x && null != v && "string" == typeof z && null != (0, o.k)(A, z) && "tpp" !== a && "flora" !== a && (0, n.X)(A, v, b.getChatGptPrompt().systemHints), b
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
            m = c("KvQL"),
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
        let p = (0, k.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(923720), c.e(531161), c.e(331061), c.e(525680)]).then(c.bind(c, "FQ1K"))).SelectedTextAnnotationEditor, {
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
            m = c("xtoi"),
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
    }),
    AD0n: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("bqtn"),
            h = c("bf6R");

        function i() {}
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k = (0, e.c)(13),
                    {
                        startNewChat: l,
                        renderChatMenu: m,
                        presentation: n,
                        newChatDisabled: o,
                        onAction: p,
                        fixedActions: q
                    } = a,
                    r = void 0 === n ? "chat" : n,
                    s = void 0 !== o && o,
                    t = void 0 === p ? i : p;
                if (null != m) {
                    let a;
                    return k[0] !== q || k[1] !== s || k[2] !== t || k[3] !== r || k[4] !== m ? (a = m({
                        presentation: r,
                        newChatDisabled: s,
                        onAction: t,
                        fixedActions: q
                    }), k[0] = q, k[1] = s, k[2] = t, k[3] = r, k[4] = m, k[5] = a) : a = k[5], a
                }
                return k[6] !== t || k[7] !== l ? (b = () => {
                    t(), l()
                }, k[6] = t, k[7] = l, k[8] = b) : b = k[8], k[9] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(f.a, {
                    id: "floatingComposer.newChat",
                    defaultMessage: "New chat"
                }), k[9] = c) : c = k[9], k[10] !== s || k[11] !== b ? (j = (0, d.jsx)(g.c.Item, {
                    LeftIcon: h.ji,
                    disabled: s,
                    onSelect: b,
                    children: c
                }), k[10] = s, k[11] = b, k[12] = j) : j = k[12], j
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
                        m = a.get(k.i),
                        n = [];
                    return "chat" === b || b.isWorkspaceHome || null == b.tabType.windowTransfer || null == j.a.detachedWindows || n.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !m && !(0, f.c)(a, b.tabId) && b.tabType.windowTransfer.canTransfer(a, b.props),
                        icon: i.dh,
                        message: (0, d.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, e.a)(a, Promise.resolve().then(c.bind(c, "K3jS")).then(c => {
                                let {
                                    moveTabToNewWindow: d
                                } = c;
                                return d(a, g, b, null)
                            }))
                        }
                    }), "chat" === b && a.get(l.c) && n.push({
                        id: "close-tab",
                        menuShortcut: "W",
                        icon: i.Lj,
                        message: (0, d.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, l.a)(a)
                    }), n
                }(a, "chat")
            }
        })
    })
};