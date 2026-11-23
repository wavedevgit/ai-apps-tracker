export const __rspack_esm_ids = [787702];
export const __webpack_modules__ = {
    cnwD: (function(a, b, c) {
        c.d(b, {
            a: () => v,
            b: () => w
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("Cslg"),
            j = c("tmUE"),
            k = c("IhXv"),
            l = c("e1xH"),
            m = c("M2H2"),
            n = c("C8z7"),
            o = c("aFW8"),
            p = c("vnV1"),
            q = c("IeFV"),
            r = c("OWtl"),
            s = c("OMIV"),
            t = c("hC2y"),
            u = c("AXDI"),
            v = (0, d.kb)(function() {
                let a, b, c, v, w, x, y, z, A = (0, f.c)(40),
                    B = (0, g.y)(r.a),
                    C = (0, d.Z)(),
                    {
                        pathname: D
                    } = C,
                    {
                        pageId: E
                    } = (0, d.eb)(),
                    F = (0, d.Y)(),
                    G = "inAppOpen" in F && F.inAppOpen,
                    H = (0, g.z)(m.a),
                    I = (0, g.z)(i.f),
                    J = (0, g.z)(i.j),
                    K = (0, g.z)(i.k),
                    L = (0, g.z)(i.h);
                A[0] !== I || A[1] !== L || A[2] !== K || A[3] !== J ? (a = JSON.stringify([I, J, K, L]), A[0] = I, A[1] = L, A[2] = K, A[3] = J, A[4] = a) : a = A[4];
                let M = a;
                A[5] !== G || A[6] !== H || A[7] !== C || A[8] !== B ? (b = () => {
                    let a = (0, q.a)(C),
                        b = G && H && null != a ? (0, n.a)(B, document, a) : void 0;
                    return {
                        preparation: b,
                        snapshot: b?.takeSnapshot() ?? null
                    }
                }, A[5] = G, A[6] = H, A[7] = C, A[8] = B, A[9] = b) : b = A[9];
                let N = b;
                A[10] !== N || A[11] !== M || A[12] !== E ? (c = () => ({
                    pageId: E,
                    actor: M,
                    ...N()
                }), A[10] = N, A[11] = M, A[12] = E, A[13] = c) : c = A[13];
                let [O, P] = (0, h.useState)(c), Q = O;
                if (O.pageId !== E || O.actor !== M) {
                    let a, b;
                    A[14] !== N || A[15] !== O.pageId || A[16] !== E ? (a = O.pageId !== E ? N() : {
                        preparation: void 0,
                        snapshot: null
                    }, A[14] = N, A[15] = O.pageId, A[16] = E, A[17] = a) : a = A[17], A[18] !== M || A[19] !== E || A[20] !== a ? (b = {
                        pageId: E,
                        actor: M,
                        ...a
                    }, A[18] = M, A[19] = E, A[20] = a, A[21] = b) : b = A[21], P(Q = b)
                }
                let R = G ? Q.snapshot : F.spacePageSnapshot,
                    S = G || F.nonblockingSsr,
                    T = (0, g.x)(l.G, D),
                    U = (0, g.z)(l.z),
                    V = (0, g.x)(s.e, "4063423961");
                A[22] === Symbol.for("react.memo_cache_sentinel") ? (v = {
                    enabled: !1
                }, A[22] = v) : v = A[22];
                let W = (0, g.z)(p.d, v);
                A[23] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, e.jsx)(j.a, {
                    routeFallback: !0,
                    fillParent: !0
                }), A[23] = w) : w = A[23], A[24] !== T ? (x = (0, e.jsx)(u.a, {
                    fallback: w,
                    children: T ? (0, e.jsx)(o.b, {
                        pageRoute: !0,
                        children: (0, e.jsx)(d.n, {})
                    }) : (0, e.jsx)(t.e, {
                        allowLocal: !0
                    })
                }), A[24] = T, A[25] = x) : x = A[25];
                let X = x,
                    Y = G ? Q.preparation : void 0,
                    Z = G ? E : void 0;
                return A[26] !== V || A[27] !== G || A[28] !== H || A[29] !== C || A[30] !== U || A[31] !== W ? (y = (!G || H && null != (0, q.a)(C)) && "disabled" !== U && (!V || null == W.error && W.data?.status !== "age_restricted"), A[26] = V, A[27] = G, A[28] = H, A[29] = C, A[30] = U, A[31] = W, A[32] = y) : y = A[32], A[33] !== X || A[34] !== S || A[35] !== R || A[36] !== Y || A[37] !== Z || A[38] !== y ? (z = (0, e.jsx)(k.a, {
                    snapshot: R,
                    preparation: Y,
                    nonblocking: S,
                    openIdentity: Z,
                    enabled: y,
                    children: X
                }), A[33] = X, A[34] = S, A[35] = R, A[36] = Y, A[37] = Z, A[38] = y, A[39] = z) : z = A[39], z
            });
        let w = a => {
            let {
                currentParams: b,
                nextParams: c,
                defaultShouldRevalidate: d
            } = a;
            return b.pageId !== c.pageId || d
        }
    }),
    puTD: (function(a, b) {
        b.a = {
            PageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            pageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            PageContent: "PageContent-kBHDbu",
            pageContent: "PageContent-kBHDbu",
            PageDocument: "PageDocument-xcjcX8",
            pageDocument: "PageDocument-xcjcX8",
            PageSnapshotCover: "PageSnapshotCover-C_r466",
            pageSnapshotCover: "PageSnapshotCover-C_r466",
            PageReadingWidthMeasure: "PageReadingWidthMeasure-ssFuf9",
            pageReadingWidthMeasure: "PageReadingWidthMeasure-ssFuf9",
            PageDocumentGrid: "PageDocumentGrid-dPPMDP",
            pageDocumentGrid: "PageDocumentGrid-dPPMDP",
            PageDocumentEnd: "PageDocumentEnd-x1pPbt",
            pageDocumentEnd: "PageDocumentEnd-x1pPbt",
            PageDocumentTheme: "PageDocumentTheme-LGlBUd",
            pageDocumentTheme: "PageDocumentTheme-LGlBUd",
            PageImageLift: "PageImageLift-FIiTnL",
            pageImageLift: "PageImageLift-FIiTnL",
            PageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            pageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            PageCommentMentions: "PageCommentMentions-hNyDwq",
            pageCommentMentions: "PageCommentMentions-hNyDwq",
            PageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
            pageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
            PagePreview: "PagePreview-AZACCm",
            pagePreview: "PagePreview-AZACCm",
            PageThumbnail: "PageThumbnail-xJOX0t",
            pageThumbnail: "PageThumbnail-xJOX0t",
            PageTemplateThumbnail: "PageTemplateThumbnail-vNCuLD",
            pageTemplateThumbnail: "PageTemplateThumbnail-vNCuLD",
            PageTitle: "PageTitle-zNq5aq",
            pageTitle: "PageTitle-zNq5aq",
            "page-caret-blink": "page-caret-blink-q7Tadf",
            pageCaretBlink: "page-caret-blink-q7Tadf",
            PageTableFadeLeft: "PageTableFadeLeft-WeE9pg",
            pageTableFadeLeft: "PageTableFadeLeft-WeE9pg",
            PageTableFadeRight: "PageTableFadeRight-WbNNy_",
            pageTableFadeRight: "PageTableFadeRight-WbNNy_",
            PrintRoot: "PrintRoot-o2LDio",
            printRoot: "PrintRoot-o2LDio",
            PrintDocument: "PrintDocument-hzBPk2",
            printDocument: "PrintDocument-hzBPk2"
        }
    }),
    nDjx: (function(a, b, c) {
        a.exports = c.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(a, b, c) {
        a.exports = c.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(a, b, c) {
        a.exports = c.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(a, b, c) {
        a.exports = c.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    sSh9: (function(a, b, c) {
        c.d(b, {
            a: () => d
        });
        let d = {
            content: "content-xaiQhS",
            page: "page-g4Dmdq",
            root: "editor-jMsqTn",
            tableFloatingUi: "tableFloatingUi-Q6FLpM"
        }
    }),
    LpCf: (function(a, b, c) {
        let d = {
            "--oai-wb-spacing": "var(--spacing,0.25rem)",
            ...Object.fromEntries(Object.entries({
                "text-primary": "var(--color-token-text-primary,var(--text-primary,#0d0d0d))",
                "text-secondary": "var(--color-token-text-secondary,var(--text-secondary,#5d5d5d))",
                "text-tertiary": "var(--color-token-text-tertiary,var(--text-tertiary,#8f8f8f))",
                "surface-primary": "var(--color-token-main-surface-primary,var(--main-surface-primary,#fff))",
                "surface-secondary": "var(--color-token-bg-tertiary,var(--main-surface-secondary,#f5f5f5))",
                "interactive-secondary-hover": "var(--color-token-interactive-bg-secondary-hover,var(--oai-wb-surface-secondary))",
                border: "var(--color-token-border,var(--border-light,rgb(0 0 0/8%)))",
                "border-hover": "var(--color-token-border-default,var(--border-medium,rgb(0 0 0/12%)))",
                divider: "var(--color-token-border-light,var(--border-light,rgb(0 0 0/5%)))",
                focus: "var(--color-token-focus-border,var(--border-strong,#5b9dd9))",
                "control-border": "var(--interactive-border-focus,var(--oai-wb-focus))",
                "entity-accent": "var(--theme-entity-accent,var(--oai-wb-accent))",
                accent: "var(--interactive-label-accent-default,#0285ff)",
                "on-accent": "var(--bg-primary,#fff)",
                "interactive-background": "var(--interactive-bg-accent-default,color-mix(in srgb,#0285ff 12%,transparent))",
                selection: "var(--theme-user-selection-bg,var(--selection,#93c5fd))",
                radius: "1.5rem",
                "radius-sm": "0.5rem",
                shadow: "0 4px 80px rgb(0 0 0/2%)",
                "shadow-lg": "0 10px 30px rgb(0 0 0/12%)",
                "font-sans": "var(--font-sans,sans-serif)",
                "font-mono": "var(--font-mono,monospace)",
                "font-size": "0.875rem",
                "shimmer-dark-contrast": "var(--oai-wb-text-tertiary)",
                "shimmer-dark-secondary": "var(--oai-wb-text-tertiary)"
            }).map(a => {
                let [b, c] = a;
                return [`--oai-wb-${b}`, `var(--wb-${b},${c})`]
            }))
        };
        c.d(b, {}, {
            a: d
        })
    }),
    IhXv: (function(a, b, c) {
        c.d(b, {
            a: () => I
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("sSh9"),
            g = c("LpCf"),
            h = c("on57"),
            i = c("LPKZ"),
            j = c.n(i),
            k = c("Q840"),
            l = c("G4E3"),
            m = c("zd8w"),
            n = c("oyxz"),
            o = c("rEML"),
            p = c("Cslg"),
            q = c("MdAf"),
            r = c("tmUE"),
            s = c("GhgU"),
            t = c("e1xH"),
            u = c("cVcC"),
            v = c("hlkZ"),
            w = c("NnV7"),
            x = c("dJBt"),
            y = c("OWtl"),
            z = c("OMIV"),
            A = c("TnSu"),
            B = c("bIvi"),
            C = c("eShZ"),
            D = c("WrMt"),
            E = c("YCKz"),
            F = c("puTD");
        let G = () => j(),
            H = () => !1;

        function I(a) {
            let b, c, f, g, i, j, l, n, s, u, w, x, z, A, D, I, M, O, P = (0, e.c)(94),
                {
                    snapshot: Q,
                    preparation: R,
                    enabled: S,
                    nonblocking: T,
                    openIdentity: U,
                    pageId: V,
                    blockId: W,
                    firstContent: X,
                    children: Y
                } = a,
                Z = void 0 !== T && T,
                $ = (0, k.y)(y.a),
                _ = (0, m.useId)(),
                [aa, ab] = (0, m.useState)(null),
                {
                    pageId: ac
                } = (0, o.eb)(),
                ad = V ?? ac,
                ae = (0, k.z)(p.f),
                af = (0, k.z)(p.j),
                ag = (0, k.z)(p.k),
                ah = (0, k.z)(p.h);
            P[0] !== ae || P[1] !== ah || P[2] !== ag || P[3] !== U || P[4] !== ad || P[5] !== af ? (b = () => ({
                openIdentity: U ?? ad,
                generation: 0,
                invalidated: !1,
                pageId: ad,
                accountId: ae,
                userId: af,
                localUserId: ag,
                accountUserId: ah,
                browserFirstContent: N(ad)
            }), P[0] = ae, P[1] = ah, P[2] = ag, P[3] = U, P[4] = ad, P[5] = af, P[6] = b) : b = P[6];
            let [ai, aj] = (0, m.useState)(b), ak = 0 === ai.generation ? _ : `${_}-${ai.generation}`, al = null == U && 0 === ai.generation, am = ai.pageId ?? "", an = ai.accountId ?? "", ao = ai.userId ?? "";
            P[7] !== ak || P[8] !== am || P[9] !== an || P[10] !== ao ? (c = {
                mountId: ak,
                pageId: am,
                accountId: an,
                userId: ao
            }, P[7] = ak, P[8] = am, P[9] = an, P[10] = ao, P[11] = c) : c = P[11];
            let ap = c,
                aq = (0, k.x)(null != Q && E.d, ap),
                ar = null == Q || ai.invalidated || aq ? void 0 : R,
                as = (0, m.useSyncExternalStore)(null == ar ? G : ar.subscribeInvalidation, null == ar ? H : ar.isInvalidated, H),
                at = (0, k.x)(null == Q ? null : E.f, ap),
                au = (0, k.x)(null != Q ? v.loadedSpacePageMetadata$ : void 0, ad ?? null),
                av = (0, k.x)(null != Q && t.y, ap.pageId),
                {
                    data: aw,
                    error: ax
                } = (0, k.x)(null == Q ? void 0 : v.spacePageQuery$, ap.pageId, {
                    enabled: !1
                }) ?? {};
            P[12] !== ae || P[13] !== ah || P[14] !== ai.accountId || P[15] !== ai.accountUserId || P[16] !== ai.localUserId || P[17] !== ai.pageId || P[18] !== ai.userId || P[19] !== at?.failed || P[20] !== S || P[21] !== ax || P[22] !== as || P[23] !== ag || P[24] !== au || P[25] !== aw || P[26] !== ad || P[27] !== Q || P[28] !== af || P[29] !== av ? (f = null == Q || as || !S || ai.pageId !== ad || ai.accountId !== ae || ai.userId !== af || ai.localUserId !== ag || ai.accountUserId !== ah || av || au?.view_only === !0 || aw?.metadata.view_only === !0 || au?.deleted_at != null || aw?.metadata.deleted_at != null || au?.access.can_read === !1 || aw?.metadata.access.can_read === !1 || ax instanceof C.FetchError && [401, 403, 404, 410].includes(ax.status) || at?.failed === !0, P[12] = ae, P[13] = ah, P[14] = ai.accountId, P[15] = ai.accountUserId, P[16] = ai.localUserId, P[17] = ai.pageId, P[18] = ai.userId, P[19] = at?.failed, P[20] = S, P[21] = ax, P[22] = as, P[23] = ag, P[24] = au, P[25] = aw, P[26] = ad, P[27] = Q, P[28] = af, P[29] = av, P[30] = f) : f = P[30];
            let ay = f;
            null != U && (ai.openIdentity !== U || ai.pageId !== ad) ? aj({
                openIdentity: U,
                generation: ai.generation + 1,
                invalidated: !1,
                pageId: ad,
                accountId: ae,
                userId: af,
                localUserId: ag,
                accountUserId: ah,
                browserFirstContent: N(ad)
            }) : ay && !ai.invalidated && aj({
                ...ai,
                invalidated: !0
            }), P[31] !== $ ? (g = (a, b) => {
                $.set(E.e, a, !b)
            }, P[31] = $, P[32] = g) : g = P[32];
            let az = (0, B.a)(g);
            P[33] !== ak || P[34] !== az ? (i = a => {
                null != a && az(ak, null != a.querySelector("[data-page-ssr-snapshot]"))
            }, P[33] = ak, P[34] = az, P[35] = i) : i = P[35];
            let aA = (0, B.a)(i);
            P[36] !== ak || P[37] !== az ? (j = (0, d.jsx)(K, {
                mountId: ak,
                setClientCovered: az,
                visible: !1
            }), P[36] = ak, P[37] = az, P[38] = j) : j = P[38];
            let aB = j,
                aC = !ai.invalidated && !ay && !aq && null != Q,
                aD = aB;
            if (aC) {
                if (Z) {
                    let a, b, c;
                    P[39] !== ai.browserFirstContent.get || P[40] !== W || P[41] !== V || P[42] !== X || P[43] !== al || P[44] !== ak || P[45] !== ad || P[46] !== az || P[47] !== aB ? (a = a => null == a || "status" in a ? aB : (0, d.jsx)(L, {
                        mountId: ak,
                        getBrowserFirstContent: ai.browserFirstContent.get,
                        pageId: ad,
                        blockId: null == V ? void 0 : W ?? null,
                        firstContent: X,
                        initialNavigation: al,
                        snapshot: a,
                        setClientCovered: az
                    }), P[39] = ai.browserFirstContent.get, P[40] = W, P[41] = V, P[42] = X, P[43] = al, P[44] = ak, P[45] = ad, P[46] = az, P[47] = aB, P[48] = a) : a = P[48], P[49] !== Q || P[50] !== a || P[51] !== aB ? (b = (0, d.jsx)(o.b, {
                        resolve: Q,
                        errorElement: aB,
                        children: a
                    }), P[49] = Q, P[50] = a, P[51] = aB, P[52] = b) : b = P[52], P[53] !== ak || P[54] !== b || P[55] !== aB ? (c = (0, d.jsx)(m.Suspense, {
                        fallback: aB,
                        children: b
                    }, ak), P[53] = ak, P[54] = b, P[55] = aB, P[56] = c) : c = P[56], aD = c
                } else if ("html" in Q) {
                    let a, b = null == V ? void 0 : W ?? null;
                    P[57] !== ai.browserFirstContent.get || P[58] !== X || P[59] !== al || P[60] !== ak || P[61] !== ad || P[62] !== az || P[63] !== Q || P[64] !== b ? (a = (0, d.jsx)(L, {
                        mountId: ak,
                        getBrowserFirstContent: ai.browserFirstContent.get,
                        pageId: ad,
                        blockId: b,
                        firstContent: X,
                        initialNavigation: al,
                        snapshot: Q,
                        setClientCovered: az
                    }, ak), P[57] = ai.browserFirstContent.get, P[58] = X, P[59] = al, P[60] = ak, P[61] = ad, P[62] = az, P[63] = Q, P[64] = b, P[65] = a) : a = P[65], aD = a
                }
            }
            let aE = Z && null != Q ? aA : void 0;
            P[66] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, h.b)("surface-e8iyms", "relative flex h-full min-h-0 flex-1 flex-col"), P[66] = l) : l = P[66], P[67] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, d.jsx)(q.a, {
                "aria-hidden": "true",
                "data-page-loading-spinner": "",
                className: (0, h.b)("indicator-Wq6R_i", "pointer-events-none absolute inset-x-0 z-1 top-[var(--page-loading-top,0px)] bottom-0 m-auto icon-lg animate-spin text-secondary [animation-timing-function:linear] motion-reduce:[animation-play-state:paused]")
            }), P[67] = n) : n = P[67];
            let aF = ai.invalidated || ay || aq ? null : aa;
            P[68] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, d.jsx)(r.a, {
                routeFallback: !0,
                fillParent: !0,
                debugName: "PageEditor"
            }), P[68] = s) : s = P[68], P[69] !== ai.browserFirstContent.capture || P[70] !== Y ? (u = (0, d.jsx)(m.Suspense, {
                fallback: s,
                children: (0, d.jsx)(E.a, {
                    value: ai.browserFirstContent.capture,
                    children: Y
                })
            }), P[69] = ai.browserFirstContent.capture, P[70] = Y, P[71] = u) : u = P[71], P[72] !== aF || P[73] !== u ? (w = (0, d.jsx)(E.c, {
                value: aF,
                children: u
            }), P[72] = aF, P[73] = u, P[74] = w) : w = P[74], P[75] !== ak || P[76] !== w ? (x = (0, d.jsx)(E.b, {
                value: ak,
                children: w
            }), P[75] = ak, P[76] = w, P[77] = x) : x = P[77], P[78] !== aC || P[79] !== ak || P[80] !== x ? (z = (0, d.jsx)(J, {
                mountId: ak,
                coverEligible: aC,
                children: x
            }), P[78] = aC, P[79] = ak, P[80] = x, P[81] = z) : z = P[81];
            let aG = Z ? F.a.PageSnapshotCover : "inset-0";
            return P[82] !== aG ? (A = (0, h.b)("pointer-events-none absolute flex min-h-0 flex-col", aG), P[82] = aG, P[83] = A) : A = P[83], P[84] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, d.jsx)("div", {
                ref: ab,
                className: "pointer-events-auto shrink-0"
            }), P[84] = D) : D = P[84], P[85] !== aD ? (I = (0, d.jsx)("div", {
                className: "relative min-h-0 flex-1",
                children: aD
            }), P[85] = aD, P[86] = I) : I = P[86], P[87] !== A || P[88] !== I ? (M = (0, d.jsxs)("div", {
                className: A,
                children: [D, I]
            }), P[87] = A, P[88] = I, P[89] = M) : M = P[89], P[90] !== aE || P[91] !== z || P[92] !== M ? (O = (0, d.jsxs)("div", {
                ref: aE,
                className: l,
                children: [n, z, M]
            }), P[90] = aE, P[91] = z, P[92] = M, P[93] = O) : O = P[93], O
        }

        function J(a) {
            let b, c = (0, e.c)(4),
                {
                    mountId: f,
                    coverEligible: g,
                    children: h
                } = a,
                i = (0, k.x)(E.e, f),
                j = g && !i,
                l = j ? "true" : void 0;
            return c[0] !== h || c[1] !== j || c[2] !== l ? (b = (0, d.jsx)("div", {
                className: "flex min-h-0 flex-1 flex-col",
                inert: j,
                "aria-hidden": l,
                children: h
            }), c[0] = h, c[1] = j, c[2] = l, c[3] = b) : b = c[3], b
        }

        function K(a) {
            let b, c, f, g = (0, e.c)(15),
                {
                    mountId: i,
                    initialNavigation: j,
                    visible: l,
                    setClientCovered: m,
                    onRemove: n,
                    children: o
                } = a,
                p = void 0 !== j && j;
            g[0] !== p || g[1] !== i || g[2] !== n || g[3] !== m || g[4] !== l ? (b = a => {
                if (null != a) return m(i, l), () => {
                    l && p && (0, D.e)(), m(i, !1), l && n?.(a)
                }
            }, g[0] = p, g[1] = i, g[2] = n, g[3] = m, g[4] = l, g[5] = b) : b = g[5];
            let q = b,
                r = (0, k.x)(z.e, "2163293173"),
                s = l ? "covered" : "uncovered",
                t = r ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable";
            g[6] !== t ? (c = (0, h.b)("pointer-events-auto absolute inset-0 overflow-x-hidden overflow-y-auto bg-surface scrollbar-on-hover", t), g[6] = t, g[7] = c) : c = g[7];
            let u = !l,
                v = l || void 0,
                w = l ? o : null;
            return g[8] !== q || g[9] !== s || g[10] !== c || g[11] !== u || g[12] !== v || g[13] !== w ? (f = (0, d.jsx)("div", {
                ref: q,
                className: c,
                hidden: u,
                "data-page-ssr-snapshot": v,
                children: w
            }, s), g[8] = q, g[9] = s, g[10] = c, g[11] = u, g[12] = v, g[13] = w, g[14] = f) : f = g[14], f
        }

        function L(a) {
            let b, c, h, i, j, o, q, r, t, u, v, x = (0, e.c)(43),
                {
                    mountId: z,
                    getBrowserFirstContent: C,
                    pageId: D,
                    blockId: G,
                    firstContent: H,
                    initialNavigation: I,
                    snapshot: J,
                    setClientCovered: L
                } = a,
                N = (0, k.y)(y.a),
                O = (0, m.useRef)(null),
                P = (0, k.z)(p.f),
                Q = (0, k.z)(p.j);
            x[0] !== z || x[1] !== J.accountId || x[2] !== J.pageId || x[3] !== J.userId ? (b = {
                mountId: z,
                pageId: J.pageId,
                accountId: J.accountId,
                userId: J.userId
            }, x[0] = z, x[1] = J.accountId, x[2] = J.pageId, x[3] = J.userId, x[4] = b) : b = x[4];
            let R = (0, k.x)(E.f, b),
                S = D !== J.pageId || P !== J.accountId || Q !== J.userId || R?.failed === !0,
                [T, U] = (0, m.useState)(!1),
                V = null != R && !R.failed && R.sequence >= J.throughSequence;
            !T && V && U(!0);
            let W = !S && !T && !V;
            x[5] !== G || x[6] !== z || x[7] !== N || x[8] !== J.accountId || x[9] !== J.pageId || x[10] !== J.throughSequence || x[11] !== J.userId ? (c = a => {
                let b = (0, l.d)(`page://${J.pageId}${a.ownerDocument.defaultView?.location.hash??""}`);
                if (null != G || void 0 === G && b?.kind === "page" && null != b.blockId) return;
                let c = N.get(E.f, {
                    mountId: z,
                    pageId: J.pageId,
                    accountId: J.accountId,
                    userId: J.userId
                });
                !c?.failed && null != c && c.sequence >= J.throughSequence && N.get(p.f) === J.accountId && N.get(p.j) === J.userId && c.restoreScroll?.(a.scrollTop)
            }, x[5] = G, x[6] = z, x[7] = N, x[8] = J.accountId, x[9] = J.pageId, x[10] = J.throughSequence, x[11] = J.userId, x[12] = c) : c = x[12];
            let X = (0, B.a)(c);
            return x[13] !== H || x[14] !== C || x[15] !== I || x[16] !== W ? (h = W && (0, d.jsx)(M, {
                getBrowserFirstContent: C,
                content: O,
                firstContent: H,
                initialNavigation: I
            }), x[13] = H, x[14] = C, x[15] = I, x[16] = W, x[17] = h) : h = x[17], x[18] !== J.emoji ? (i = null != J.emoji && (0, d.jsx)("span", {
                className: "flex size-16 items-center border border-transparent",
                children: (0, d.jsx)(A.a, {
                    emoji: J.emoji,
                    size: "large"
                })
            }), x[18] = J.emoji, x[19] = i) : i = x[19], x[20] !== J.title ? (j = J.title || (0, d.jsx)(n.a, {
                ...w.c.untitled
            }), x[20] = J.title, x[21] = j) : j = x[21], x[22] !== j ? (o = (0, d.jsx)("h1", {
                className: `${F.a.PageTitle} font-semibold break-words text-default`,
                children: j
            }), x[22] = j, x[23] = o) : o = x[23], x[24] !== J.reserveSpaceBreadcrumb ? (q = J.reserveSpaceBreadcrumb && (0, d.jsx)("div", {
                "aria-hidden": "true",
                className: "h-lh text-sm"
            }), x[24] = J.reserveSpaceBreadcrumb, x[25] = q) : q = x[25], x[26] !== i || x[27] !== o || x[28] !== q ? (r = (0, d.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [i, o, q]
            }), x[26] = i, x[27] = o, x[28] = q, x[29] = r) : r = x[29], x[30] !== J.html ? (t = (0, d.jsx)("div", {
                "data-page-document-selection": !0,
                className: "isolate col-[wide] min-w-0",
                children: (0, d.jsx)("div", {
                    className: `${f.a.root} ${F.a.PageDocumentTheme} px-0`,
                    style: g.a,
                    children: (0, d.jsx)("div", {
                        ref: O,
                        className: `ProseMirror ${f.a.content} ${F.a.PageDocument} ${F.a.PagePreview}`,
                        contentEditable: !1,
                        "data-page-static-preview": !0,
                        dangerouslySetInnerHTML: {
                            __html: J.html
                        }
                    })
                })
            }), x[30] = J.html, x[31] = t) : t = x[31], x[32] !== r || x[33] !== t ? (u = (0, d.jsx)(s.a, {
                heading: r,
                children: t
            }), x[32] = r, x[33] = t, x[34] = u) : u = x[34], x[35] !== I || x[36] !== z || x[37] !== X || x[38] !== L || x[39] !== u || x[40] !== h || x[41] !== W ? (v = (0, d.jsxs)(K, {
                mountId: z,
                initialNavigation: I,
                visible: W,
                setClientCovered: L,
                onRemove: X,
                children: [h, u]
            }), x[35] = I, x[36] = z, x[37] = X, x[38] = L, x[39] = u, x[40] = h, x[41] = W, x[42] = v) : v = x[42], v
        }

        function M(a) {
            let b, c, f, g = (0, e.c)(11),
                {
                    getBrowserFirstContent: h,
                    content: i,
                    firstContent: j,
                    initialNavigation: k
                } = a;
            return g[0] !== j || g[1] !== h ? (b = () => {
                let a = void 0 === j ? h() : j;
                a?.observeDocumentType("page")
            }, g[0] = j, g[1] = h, g[2] = b) : b = g[2], g[3] !== i.current || g[4] !== j || g[5] !== h || g[6] !== k ? (c = () => {
                if (i.current?.querySelector('[elementtiming="codex-page-ssr-content"]') == null) return;
                k && (0, D.d)();
                let a = void 0 === j ? h() : j;
                a?.observeDocumentType("page"), a?.contentVisible()
            }, g[3] = i.current, g[4] = j, g[5] = h, g[6] = k, g[7] = c) : c = g[7], g[8] !== b || g[9] !== c ? (f = (0, d.jsx)(x.a, {
                requireVisibleAtPaint: !0,
                onCommit: b,
                onPaint: c
            }), g[8] = b, g[9] = c, g[10] = f) : f = g[10], f
        }

        function N(a) {
            let b = u.b.getDebugLoad(a ?? null)?.browserFirstContent;
            return {
                get: () => b,
                capture: c => {
                    c === a && null == b && (b = u.b.getDebugLoad(a ?? null)?.browserFirstContent)
                }
            }
        }
    }),
    GhgU: (function(a, b, c) {
        c.d(b, {
            a: () => p,
            b: () => r,
            c: () => s
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("IPUh"),
            h = c("CJrD"),
            i = c("zd8w"),
            j = c("Wf1j"),
            k = c("X3K1"),
            l = c("ADAj"),
            m = c("puTD");

        function n() {
            let a, b, c = (0, e.c)(2);
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("span", {
                className: (0, f.b)(m.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] overflow-clip"),
                "data-page-comment-content-width": !0
            }), c[0] = a) : a = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsxs)("span", {
                "aria-hidden": !0,
                className: "invisible absolute size-0 overflow-clip",
                children: [a, (0, d.jsx)("span", {
                    className: "@container relative block [inline-size:max(100cqi,var(--page-default-reading-width))]",
                    children: (0, d.jsx)("span", {
                        className: (0, f.b)(m.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] max-w-0 overflow-clip"),
                        "data-page-comment-minimum-width": !0
                    })
                })]
            }), c[1] = b) : b = c[1], b
        }

        function o(a, b, c) {
            if (!(b instanceof Element) || b.closest("[data-page-document-viewport]") !== a.closest("[data-page-document-viewport]")) return !1;
            if (null != b.closest("[data-page-document-trailing-space]")) return !0;
            if (!b.contains(a)) return !1;
            let d = a.getBoundingClientRect();
            return d.height > 0 && c >= d.bottom
        }

        function p(a) {
            let b, c, g, i, j, k, m, o, p, r, s, t, u, v, w = (0, e.c)(29);
            w[0] !== a ? ({
                heading: c,
                externalEditingControls: k,
                messages: i,
                compact: m,
                headingOutside: o,
                headingRef: g,
                children: b,
                ...j
            } = a, w[0] = a, w[1] = b, w[2] = c, w[3] = g, w[4] = i, w[5] = j, w[6] = k, w[7] = m, w[8] = o) : (b = w[1], c = w[2], g = w[3], i = w[4], j = w[5], k = w[6], m = w[7], o = w[8]);
            let x = void 0 !== k && k,
                y = void 0 !== m && m,
                z = void 0 !== o && o;
            w[9] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, h.a)(), w[9] = p) : p = w[9];
            let A = (0, l.l)(p.fullWidth),
                B = z ? "pt-4 pb-panel" : "pt-10 pb-panel",
                C = y || x ? "py-4" : B,
                D = A || x || void 0;
            w[10] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, d.jsx)(n, {}), w[10] = r) : r = w[10];
            let E = y && "mb-4";
            return w[11] !== E ? (s = (0, f.b)("flex flex-col gap-2 empty:hidden", E), w[11] = E, w[12] = s) : s = w[12], w[13] !== i || w[14] !== s ? (t = (0, d.jsx)("div", {
                className: s,
                children: i
            }), w[13] = i, w[14] = s, w[15] = t) : t = w[15], w[16] !== c || w[17] !== g || w[18] !== t ? (u = (0, d.jsxs)("div", {
                ref: g,
                className: "col-[reading] flex w-full max-w-(--page-reading-width) min-w-0 flex-col gap-6",
                "data-page-reading-column": !0,
                children: [r, t, c]
            }), w[16] = c, w[17] = g, w[18] = t, w[19] = u) : u = w[19], w[20] !== b || w[21] !== y || w[22] !== x || w[23] !== z || w[24] !== j || w[25] !== u || w[26] !== C || w[27] !== D ? (v = (0, d.jsxs)(q, {
                ...j,
                compact: y,
                externalEditingControls: x,
                headingOutside: z,
                className: C,
                "data-page-full-width": D,
                children: [u, b]
            }), w[20] = b, w[21] = y, w[22] = x, w[23] = z, w[24] = j, w[25] = u, w[26] = C, w[27] = D, w[28] = v) : v = w[28], v
        }

        function q(a) {
            let b, c, h, i, j, k, l, n, o, p = (0, e.c)(24);
            p[0] !== a ? ({
                as: i,
                compact: j,
                contentAlignment: c,
                externalEditingControls: k,
                headingOutside: l,
                className: b,
                ...h
            } = a, p[0] = a, p[1] = b, p[2] = c, p[3] = h, p[4] = i, p[5] = j, p[6] = k, p[7] = l) : (b = p[1], c = p[2], h = p[3], i = p[4], j = p[5], k = p[6], l = p[7]);
            let q = void 0 !== j && j,
                r = void 0 !== k && k,
                s = void 0 !== l && l,
                t = "section" === (void 0 === i ? "div" : i) ? g.a.section : g.a.div,
                u = !q && !r && !h["data-page-full-width"] && "start" !== c && "[container-name:page-dil-badge-gutter]",
                v = q || s ? "gap-y-0" : "gap-y-6",
                w = q ? "ps-[var(--page-attribution-padding,--spacing(4))] pe-4" : "ps-[var(--page-attribution-padding,var(--page-control-gutter))] pe-(--page-control-gutter) in-[[data-page-responsive-comments=markers]]:ps-[var(--page-attribution-padding,clamp(16px,calc(100%_-_572px_-_48px),48px))]",
                x = !q && "in-data-[page-comments-docked]:pe-[clamp(0px,calc(100%_-_--spacing(80)),var(--page-control-gutter))]",
                y = r ? "[--page-control-gutter:--spacing(10)] [--page-document-end-space:--spacing(16)] [--color-background-text-selection:--alpha(var(--color-text)/20%)]" : "[--page-control-gutter:--spacing(14)] [--page-document-end-space:50cqh] in-[[data-page-responsive-comments]]:[--page-control-gutter:--spacing(12)]",
                z = !q && "in-[[data-mobile-page-platform]]:[--page-control-gutter:--spacing(7)]! in-[[data-mobile-page-platform]]:ps-[var(--page-attribution-padding,var(--page-control-gutter))]!",
                A = "start" === c && "w-full max-w-[var(--page-content-max-width,none)]";
            p[8] !== b || p[9] !== z || p[10] !== A || p[11] !== u || p[12] !== v || p[13] !== w || p[14] !== x || p[15] !== y ? (n = (0, f.b)(m.a.PageContent, "@container grid", u, v, w, x, y, z, A, b), p[8] = b, p[9] = z, p[10] = A, p[11] = u, p[12] = v, p[13] = w, p[14] = x, p[15] = y, p[16] = n) : n = p[16];
            let B = q || void 0,
                C = r || void 0;
            return p[17] !== t || p[18] !== c || p[19] !== h || p[20] !== n || p[21] !== B || p[22] !== C ? (o = (0, d.jsx)(t, {
                ...h,
                className: n,
                "data-compact": B,
                "data-page-content-alignment": c,
                "data-native-controls": C
            }), p[17] = t, p[18] = c, p[19] = h, p[20] = n, p[21] = B, p[22] = C, p[23] = o) : o = p[23], o
        }

        function r(a) {
            let b, c, f, g = (0, e.c)(7),
                {
                    pageId: h
                } = a,
                i = (0, j.a)();
            return g[0] !== i ? (b = i.formatMessage({
                id: "codex.space.page.contentLoading",
                defaultMessage: "Loading page content"
            }), g[0] = i, g[1] = b) : b = g[1], g[2] !== h ? (c = (0, d.jsx)(k.b, {
                seed: h,
                size: "md",
                variant: "chatgpt-project"
            }), g[2] = h, g[3] = c) : c = g[3], g[4] !== b || g[5] !== c ? (f = (0, d.jsx)("div", {
                className: "col-[reading] w-full max-w-(--page-reading-width) min-w-0",
                "aria-label": b,
                role: "status",
                children: c
            }), g[4] = b, g[5] = c, g[6] = f) : f = g[6], f
        }

        function s(a) {
            let b, c, g, h, j = (0, e.c)(10),
                {
                    editor: k,
                    externalEditingControls: l,
                    onTouch: n
                } = a,
                p = void 0 !== l && l,
                q = (0, i.useRef)(null),
                r = (0, i.useEffectEvent)(n);
            j[0] !== k || j[1] !== r ? (b = () => {
                let a = q.current?.closest("[data-page-document-viewport]");
                if (null != a && null != k) return function(a, b, c) {
                    let d = new AbortController,
                        {
                            signal: e
                        } = d,
                        f = null,
                        g = () => {
                            f = null
                        };
                    return a.addEventListener("pointerdown", a => {
                        f = a.isPrimary && "touch" === a.pointerType && o(b, a.target, a.clientY) ? a : null
                    }, {
                        signal: e
                    }), a.addEventListener("pointerup", a => {
                        null != f && (a.pointerId !== f.pointerId || a.timeStamp - f.timeStamp >= 350 || Math.hypot(a.clientX - f.clientX, a.clientY - f.clientY) > 8) && g()
                    }, {
                        signal: e
                    }), a.addEventListener("pointercancel", g, {
                        signal: e
                    }), a.addEventListener("contextmenu", g, {
                        signal: e
                    }), a.addEventListener("click", a => {
                        let d = f?.clientY;
                        g(), null != d && !a.defaultPrevented && o(b, a.target, d) && c()
                    }, {
                        signal: e
                    }), () => d.abort()
                }(a, k, r)
            }, j[0] = k, j[1] = r, j[2] = b) : b = j[2], j[3] !== k ? (c = [k], j[3] = k, j[4] = c) : c = j[4], (0, i.useEffect)(b, c);
            let s = p ? "h-16" : "h-[50cqh]";
            j[5] !== s ? (g = (0, f.b)(m.a.PageDocumentEnd, s), j[5] = s, j[6] = g) : g = j[6];
            let t = p || void 0;
            return j[7] !== g || j[8] !== t ? (h = (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: g,
                "data-native-controls": t,
                "data-page-document-end": !0,
                "data-page-document-trailing-space": !0,
                ref: q
            }), j[7] = g, j[8] = t, j[9] = h) : h = j[9], h
        }
    }),
    EBQV: (function(b) {
        b.exports = a.ir("/cdn/assets/dotnet.js").then(function(a) {
            return a
        })
    })
};
import {
    __webpack_require__ as a
} from "./633146.039023962d.js";
import * as b from "./418851.968f31a6dd.js";
a.C(b);
import * as c from "./109308.6f7ef1dfb7.js";
a.C(c);
import * as d from "./399565.61ce507128.js";
a.C(d);
import * as e from "./257798.7db7372059.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.9c9f6156c4.js";
a.C(g);
import * as h from "./807489.00c728e5cb.js";
a.C(h);
import * as i from "./337882.857617de92.js";
a.C(i);
import * as j from "./955979.9686375fd8.js";
a.C(j);
import * as k from "./646436.c6301b36bf.js";
a.C(k);
import * as l from "./7078.a74380b806.js";
a.C(l);
import * as m from "./200429.bfad930cbf.js";
a.C(m);
import * as n from "./698524.0f58bf626e.js";
a.C(n);
import * as o from "./956483.ddba772717.js";
a.C(o);
import * as p from "./87162.4f9e5f990b.js";
a.C(p);
import * as q from "./396705.d09e28dd2f.js";
a.C(q);
import * as r from "./155568.6bb25b8fdb.js";
a.C(r);
import * as s from "./731863.e1f0874620.js";
a.C(s);
import * as t from "./767086.410c555e47.js";
a.C(t);
import * as u from "./76629.33e020b0da.js";
a.C(u);
import * as v from "./226913.748570e15f.js";
a.C(v);
import * as w from "./227786.952cdb546b.js";
a.C(w);
import * as x from "./787702.fc39ce8853.js";
a.C(x);
var y = a(a.s = "cnwD"),
    z = y.a,
    A = y.b;
export {
    z as
    default, A as shouldRevalidate
};