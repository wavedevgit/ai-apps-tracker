export const __rspack_esm_ids = [787702];
export const __webpack_modules__ = {
    YC2Q: (function(a, b, c) {
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
            m = c("XqlA"),
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
                    T = (0, g.x)(l.H, D),
                    U = (0, g.z)(l.A),
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
    iXf8: (function(a, b) {
        b.a = {
            PageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            pageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            PageContent: "PageContent-kBHDbu",
            pageContent: "PageContent-kBHDbu",
            PageDocument: "PageDocument-xcjcX8",
            pageDocument: "PageDocument-xcjcX8",
            PageSnapshotCover: "PageSnapshotCover-C_r466",
            pageSnapshotCover: "PageSnapshotCover-C_r466",
            PageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
            pageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
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
            PageCommentBody: "PageCommentBody-vWezwu",
            pageCommentBody: "PageCommentBody-vWezwu",
            PageCommentMentions: "PageCommentMentions-hNyDwq",
            pageCommentMentions: "PageCommentMentions-hNyDwq",
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
    sfQF: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("sSh9"),
            g = c("LpCf"),
            h = c("TnSu"),
            i = c("xg5g"),
            j = c("JZmT"),
            k = c("iXf8");
        c.d(b, {}, {
            a: function(a) {
                let b, c, l, m, n, o, p, q, r, s = (0, e.c)(24),
                    {
                        snapshot: t,
                        contentRef: u,
                        fullWidth: v,
                        externalEditingControls: w,
                        untitled: x
                    } = a,
                    y = void 0 !== w && w;
                s[0] !== y || s[1] !== v ? (b = (0, j.a)({
                    externalEditingControls: y,
                    fullWidth: v,
                    padded: !0
                }), s[0] = y, s[1] = v, s[2] = b) : b = s[2], s[3] !== t.emoji ? (c = null != t.emoji && (0, d.jsx)("span", {
                    className: "flex size-16 items-center border border-transparent",
                    children: (0, d.jsx)(h.a, {
                        emoji: t.emoji,
                        size: "large"
                    })
                }), s[3] = t.emoji, s[4] = c) : c = s[4];
                let z = t.title || x;
                return s[5] !== z ? (l = (0, d.jsx)("h1", {
                    className: `${k.a.PageTitle} min-h-lh font-semibold break-words text-default`,
                    children: z
                }), s[5] = z, s[6] = l) : l = s[6], s[7] !== t.reserveSpaceBreadcrumb ? (m = t.reserveSpaceBreadcrumb && (0, d.jsx)("div", {
                    "aria-hidden": "true",
                    className: "h-lh text-sm"
                }), s[7] = t.reserveSpaceBreadcrumb, s[8] = m) : m = s[8], s[9] !== c || s[10] !== l || s[11] !== m ? (n = (0, d.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-2",
                    children: [c, l, m]
                }), s[9] = c, s[10] = l, s[11] = m, s[12] = n) : n = s[12], s[13] !== t.html ? (o = {
                    __html: t.html
                }, s[13] = t.html, s[14] = o) : o = s[14], s[15] !== u || s[16] !== o ? (p = (0, d.jsx)("div", {
                    "data-page-document-selection": !0,
                    className: "isolate col-[wide] min-w-0",
                    children: (0, d.jsx)("div", {
                        className: `${f.a.root} ${k.a.PageDocumentTheme} px-0`,
                        style: g.a,
                        children: (0, d.jsx)("div", {
                            ref: u,
                            className: `ProseMirror ${f.a.content} ${k.a.PageDocument} ${k.a.PagePreview}`,
                            contentEditable: !1,
                            "data-page-static-preview": !0,
                            dangerouslySetInnerHTML: o
                        })
                    })
                }), s[15] = u, s[16] = o, s[17] = p) : p = s[17], s[18] !== n || s[19] !== p ? (q = (0, d.jsx)(i.a, {
                    heading: n,
                    children: p
                }), s[18] = n, s[19] = p, s[20] = q) : q = s[20], s[21] !== q || s[22] !== b ? (r = (0, d.jsx)("div", {
                    ...b,
                    children: q
                }), s[21] = q, s[22] = b, s[23] = r) : r = s[23], r
            }
        })
    }),
    IhXv: (function(a, b, c) {
        c.d(b, {
            a: () => I
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("LPKZ"),
            h = c.n(g),
            i = c("Q840"),
            j = c("G4E3"),
            k = c("CJrD"),
            l = c("zd8w"),
            m = c("oyxz"),
            n = c("rEML"),
            o = c("Cslg"),
            p = c("faEY"),
            q = c("tmUE"),
            r = c("e1xH"),
            s = c("cVcC"),
            t = c("hlkZ"),
            u = c("NnV7"),
            v = c("dJBt"),
            w = c("OWtl"),
            x = c("ADAj"),
            y = c("OMIV"),
            z = c("bIvi"),
            A = c("eShZ"),
            B = c("WrMt"),
            C = c("YCKz"),
            D = c("sfQF"),
            E = c("V2r5"),
            F = c("iXf8");
        let G = () => h(),
            H = () => !1;

        function I(a) {
            let b, c, g, h, j, k, m, s, u, v, x, y, B, D, E, I, M, O, P = (0, e.c)(94),
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
                $ = (0, i.y)(w.a),
                _ = (0, l.useId)(),
                [aa, ab] = (0, l.useState)(null),
                {
                    pageId: ac
                } = (0, n.eb)(),
                ad = V ?? ac,
                ae = (0, i.z)(o.f),
                af = (0, i.z)(o.j),
                ag = (0, i.z)(o.k),
                ah = (0, i.z)(o.h);
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
            let [ai, aj] = (0, l.useState)(b), ak = 0 === ai.generation ? _ : `${_}-${ai.generation}`, al = null == U && 0 === ai.generation, am = ai.pageId ?? "", an = ai.accountId ?? "", ao = ai.userId ?? "";
            P[7] !== ak || P[8] !== am || P[9] !== an || P[10] !== ao ? (c = {
                mountId: ak,
                pageId: am,
                accountId: an,
                userId: ao
            }, P[7] = ak, P[8] = am, P[9] = an, P[10] = ao, P[11] = c) : c = P[11];
            let ap = c,
                aq = (0, i.x)(null != Q && C.d, ap),
                ar = null == Q || ai.invalidated || aq ? void 0 : R,
                as = (0, l.useSyncExternalStore)(null == ar ? G : ar.subscribeInvalidation, null == ar ? H : ar.isInvalidated, H),
                at = (0, i.x)(null == Q ? null : C.f, ap),
                au = (0, i.x)(null != Q ? t.loadedSpacePageMetadata$ : void 0, ad ?? null),
                av = (0, i.x)(null != Q && r.z, ap.pageId),
                {
                    data: aw,
                    error: ax
                } = (0, i.x)(null == Q ? void 0 : t.spacePageQuery$, ap.pageId, {
                    enabled: !1
                }) ?? {};
            P[12] !== ae || P[13] !== ah || P[14] !== ai.accountId || P[15] !== ai.accountUserId || P[16] !== ai.localUserId || P[17] !== ai.pageId || P[18] !== ai.userId || P[19] !== at?.failed || P[20] !== S || P[21] !== ax || P[22] !== as || P[23] !== ag || P[24] !== au || P[25] !== aw || P[26] !== ad || P[27] !== Q || P[28] !== af || P[29] !== av ? (g = null == Q || as || !S || ai.pageId !== ad || ai.accountId !== ae || ai.userId !== af || ai.localUserId !== ag || ai.accountUserId !== ah || av || au?.view_only === !0 || aw?.metadata.view_only === !0 || au?.deleted_at != null || aw?.metadata.deleted_at != null || au?.access.can_read === !1 || aw?.metadata.access.can_read === !1 || ax instanceof A.FetchError && [401, 403, 404, 410].includes(ax.status) || at?.failed === !0, P[12] = ae, P[13] = ah, P[14] = ai.accountId, P[15] = ai.accountUserId, P[16] = ai.localUserId, P[17] = ai.pageId, P[18] = ai.userId, P[19] = at?.failed, P[20] = S, P[21] = ax, P[22] = as, P[23] = ag, P[24] = au, P[25] = aw, P[26] = ad, P[27] = Q, P[28] = af, P[29] = av, P[30] = g) : g = P[30];
            let ay = g;
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
            }), P[31] !== $ ? (h = (a, b) => {
                $.set(C.e, a, !b)
            }, P[31] = $, P[32] = h) : h = P[32];
            let az = (0, z.a)(h);
            P[33] !== ak || P[34] !== az ? (j = a => {
                null != a && az(ak, null != a.querySelector("[data-page-ssr-snapshot]"))
            }, P[33] = ak, P[34] = az, P[35] = j) : j = P[35];
            let aA = (0, z.a)(j);
            P[36] !== ak || P[37] !== az ? (k = (0, d.jsx)(K, {
                mountId: ak,
                setClientCovered: az,
                visible: !1
            }), P[36] = ak, P[37] = az, P[38] = k) : k = P[38];
            let aB = k,
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
                    }), P[39] = ai.browserFirstContent.get, P[40] = W, P[41] = V, P[42] = X, P[43] = al, P[44] = ak, P[45] = ad, P[46] = az, P[47] = aB, P[48] = a) : a = P[48], P[49] !== Q || P[50] !== a || P[51] !== aB ? (b = (0, d.jsx)(n.b, {
                        resolve: Q,
                        errorElement: aB,
                        children: a
                    }), P[49] = Q, P[50] = a, P[51] = aB, P[52] = b) : b = P[52], P[53] !== ak || P[54] !== b || P[55] !== aB ? (c = (0, d.jsx)(l.Suspense, {
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
            P[66] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, f.b)("surface-e8iyms", "relative flex h-full min-h-0 flex-1 flex-col"), P[66] = m) : m = P[66], P[67] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, d.jsx)(p.a, {
                "aria-hidden": "true",
                "data-page-loading-spinner": "",
                className: (0, f.b)("indicator-Wq6R_i", "pointer-events-none absolute inset-x-0 z-1 top-[var(--page-loading-top,0px)] bottom-0 m-auto icon-lg animate-spin text-secondary [animation-timing-function:linear] motion-reduce:[animation-play-state:paused]")
            }), P[67] = s) : s = P[67];
            let aF = ai.invalidated || ay || aq ? null : aa;
            P[68] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, d.jsx)(q.a, {
                routeFallback: !0,
                fillParent: !0,
                debugName: "PageEditor"
            }), P[68] = u) : u = P[68], P[69] !== ai.browserFirstContent.capture || P[70] !== Y ? (v = (0, d.jsx)(l.Suspense, {
                fallback: u,
                children: (0, d.jsx)(C.a, {
                    value: ai.browserFirstContent.capture,
                    children: Y
                })
            }), P[69] = ai.browserFirstContent.capture, P[70] = Y, P[71] = v) : v = P[71], P[72] !== aF || P[73] !== v ? (x = (0, d.jsx)(C.c, {
                value: aF,
                children: v
            }), P[72] = aF, P[73] = v, P[74] = x) : x = P[74], P[75] !== ak || P[76] !== x ? (y = (0, d.jsx)(C.b, {
                value: ak,
                children: x
            }), P[75] = ak, P[76] = x, P[77] = y) : y = P[77], P[78] !== aC || P[79] !== ak || P[80] !== y ? (B = (0, d.jsx)(J, {
                mountId: ak,
                coverEligible: aC,
                children: y
            }), P[78] = aC, P[79] = ak, P[80] = y, P[81] = B) : B = P[81];
            let aG = Z ? F.a.PageSnapshotCover : "inset-0";
            return P[82] !== aG ? (D = (0, f.b)("pointer-events-none absolute flex min-h-0 flex-col", aG), P[82] = aG, P[83] = D) : D = P[83], P[84] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, d.jsx)("div", {
                ref: ab,
                className: "pointer-events-auto shrink-0"
            }), P[84] = E) : E = P[84], P[85] !== aD ? (I = (0, d.jsx)("div", {
                className: "relative min-h-0 flex-1",
                children: aD
            }), P[85] = aD, P[86] = I) : I = P[86], P[87] !== D || P[88] !== I ? (M = (0, d.jsxs)("div", {
                className: D,
                children: [E, I]
            }), P[87] = D, P[88] = I, P[89] = M) : M = P[89], P[90] !== aE || P[91] !== B || P[92] !== M ? (O = (0, d.jsxs)("div", {
                ref: aE,
                className: m,
                children: [s, B, M]
            }), P[90] = aE, P[91] = B, P[92] = M, P[93] = O) : O = P[93], O
        }

        function J(a) {
            let b, c = (0, e.c)(4),
                {
                    mountId: f,
                    coverEligible: g,
                    children: h
                } = a,
                j = (0, i.x)(C.e, f),
                k = g && !j,
                l = k ? "true" : void 0;
            return c[0] !== h || c[1] !== k || c[2] !== l ? (b = (0, d.jsx)("div", {
                className: "flex min-h-0 flex-1 flex-col",
                inert: k,
                "aria-hidden": l,
                children: h
            }), c[0] = h, c[1] = k, c[2] = l, c[3] = b) : b = c[3], b
        }

        function K(a) {
            let b, c, g, h = (0, e.c)(15),
                {
                    mountId: j,
                    initialNavigation: k,
                    visible: l,
                    setClientCovered: m,
                    onRemove: n,
                    children: o
                } = a,
                p = void 0 !== k && k;
            h[0] !== p || h[1] !== j || h[2] !== n || h[3] !== m || h[4] !== l ? (b = a => {
                if (null != a) return m(j, l), () => {
                    l && p && (0, B.e)(), m(j, !1), l && n?.(a)
                }
            }, h[0] = p, h[1] = j, h[2] = n, h[3] = m, h[4] = l, h[5] = b) : b = h[5];
            let q = b,
                r = (0, i.x)(y.e, "2163293173"),
                s = l ? "covered" : "uncovered",
                t = r ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable";
            h[6] !== t ? (c = (0, f.b)("pointer-events-auto absolute inset-0 overflow-x-hidden overflow-y-auto bg-surface scrollbar-on-hover", t), h[6] = t, h[7] = c) : c = h[7];
            let u = !l,
                v = l || void 0,
                w = l ? o : null;
            return h[8] !== q || h[9] !== s || h[10] !== c || h[11] !== u || h[12] !== v || h[13] !== w ? (g = (0, d.jsx)("div", {
                ref: q,
                className: c,
                hidden: u,
                "data-page-ssr-snapshot": v,
                children: w
            }, s), h[8] = q, h[9] = s, h[10] = c, h[11] = u, h[12] = v, h[13] = w, h[14] = g) : g = h[14], g
        }

        function L(a) {
            let b, c, f, g, h, n, p, q, r = (0, e.c)(31),
                {
                    mountId: s,
                    getBrowserFirstContent: t,
                    pageId: v,
                    blockId: y,
                    firstContent: A,
                    initialNavigation: B,
                    snapshot: F,
                    setClientCovered: G
                } = a,
                H = (0, i.y)(w.a);
            r[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, k.a)(), r[0] = b) : b = r[0];
            let I = (0, x.l)(b.fullWidth),
                J = (0, l.useRef)(null),
                L = (0, i.z)(o.f),
                N = (0, i.z)(o.j);
            r[1] !== s || r[2] !== F.accountId || r[3] !== F.pageId || r[4] !== F.userId ? (c = {
                mountId: s,
                pageId: F.pageId,
                accountId: F.accountId,
                userId: F.userId
            }, r[1] = s, r[2] = F.accountId, r[3] = F.pageId, r[4] = F.userId, r[5] = c) : c = r[5];
            let O = (0, i.x)(C.f, c),
                P = v !== F.pageId || L !== F.accountId || N !== F.userId || O?.failed === !0,
                [Q, R] = (0, l.useState)(!1);
            r[6] !== O || r[7] !== F ? (f = (0, E.b)(F, O), r[6] = O, r[7] = F, r[8] = f) : f = r[8];
            let S = f;
            !Q && S && R(!0);
            let T = !P && !Q && !S;
            r[9] !== y || r[10] !== s || r[11] !== H || r[12] !== F ? (g = a => {
                let b = (0, j.d)(`page://${F.pageId}${a.ownerDocument.defaultView?.location.hash??""}`);
                if (null != y || void 0 === y && b?.kind === "page" && null != b.blockId) return;
                let c = H.get(C.f, {
                    mountId: s,
                    pageId: F.pageId,
                    accountId: F.accountId,
                    userId: F.userId
                });
                (0, E.b)(F, c) && H.get(o.f) === F.accountId && H.get(o.j) === F.userId && c.restoreScroll?.(a.scrollTop)
            }, r[9] = y, r[10] = s, r[11] = H, r[12] = F, r[13] = g) : g = r[13];
            let U = (0, z.a)(g);
            return r[14] !== A || r[15] !== t || r[16] !== B || r[17] !== T ? (h = T && (0, d.jsx)(M, {
                getBrowserFirstContent: t,
                content: J,
                firstContent: A,
                initialNavigation: B
            }), r[14] = A, r[15] = t, r[16] = B, r[17] = T, r[18] = h) : h = r[18], r[19] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, d.jsx)(m.a, {
                ...u.c.untitled
            }), r[19] = n) : n = r[19], r[20] !== I || r[21] !== F ? (p = (0, d.jsx)(D.a, {
                snapshot: F,
                fullWidth: I,
                contentRef: J,
                untitled: n
            }), r[20] = I, r[21] = F, r[22] = p) : p = r[22], r[23] !== B || r[24] !== s || r[25] !== U || r[26] !== G || r[27] !== h || r[28] !== p || r[29] !== T ? (q = (0, d.jsxs)(K, {
                mountId: s,
                initialNavigation: B,
                visible: T,
                setClientCovered: G,
                onRemove: U,
                children: [h, p]
            }), r[23] = B, r[24] = s, r[25] = U, r[26] = G, r[27] = h, r[28] = p, r[29] = T, r[30] = q) : q = r[30], q
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
                k && (0, B.d)();
                let a = void 0 === j ? h() : j;
                a?.observeDocumentType("page"), a?.contentVisible()
            }, g[3] = i.current, g[4] = j, g[5] = h, g[6] = k, g[7] = c) : c = g[7], g[8] !== b || g[9] !== c ? (f = (0, d.jsx)(v.a, {
                requireVisibleAtPaint: !0,
                onCommit: b,
                onPaint: c
            }), g[8] = b, g[9] = c, g[10] = f) : f = g[10], f
        }

        function N(a) {
            let b = s.b.getDebugLoad(a ?? null)?.browserFirstContent;
            return {
                get: () => b,
                capture: c => {
                    c === a && null == b && (b = s.b.getDebugLoad(a ?? null)?.browserFirstContent)
                }
            }
        }
    }),
    JZmT: (function(a, b, c) {
        var d = c("on57"),
            e = c("iXf8");
        c.d(b, {}, {
            a: function(a) {
                let {
                    compact: b = !1,
                    externalEditingControls: c = !1,
                    headingOutside: f = !1,
                    contentAlignment: g,
                    fullWidth: h,
                    padded: i,
                    className: j
                } = a, k = i ? h || c || void 0 : h;
                return {
                    "data-compact": b || void 0,
                    "data-page-content-alignment": g,
                    "data-native-controls": c || void 0,
                    "data-page-full-width": k,
                    className: (0, d.b)(e.a.PageContent, "@container grid", !b && !c && !k && "start" !== g && "[container-name:page-dil-badge-gutter]", b || f ? "gap-y-0" : "gap-y-6", b ? "ps-[var(--page-attribution-padding,--spacing(4))] pe-4" : "ps-[var(--page-attribution-padding,var(--page-control-gutter))] pe-(--page-control-gutter) in-[[data-page-responsive-comments=markers]]:ps-[var(--page-attribution-padding,clamp(16px,calc(100%_-_572px_-_48px),48px))]", !b && "in-data-[page-comments-docked]:pe-[clamp(0px,calc(100%_-_--spacing(80)),var(--page-control-gutter))]", c ? "[--page-control-gutter:--spacing(10)] [--page-document-end-space:--spacing(16)] [--color-background-text-selection:--alpha(var(--color-text)/20%)]" : "[--page-control-gutter:--spacing(14)] [--page-document-end-space:50cqh] in-[[data-page-responsive-comments]]:[--page-control-gutter:--spacing(12)]", !b && "in-[[data-mobile-page-platform]]:[--page-control-gutter:--spacing(7)]! in-[[data-mobile-page-platform]]:ps-[var(--page-attribution-padding,var(--page-control-gutter))]!", "start" === g && "w-full max-w-[var(--page-content-max-width,none)]", i ? b || c ? "py-4" : f ? "pt-4 pb-panel" : "pt-10 pb-panel" : j)
                }
            }
        })
    }),
    xg5g: (function(a, b, c) {
        c.d(b, {
            a: () => i,
            b: () => j
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("iXf8");

        function h() {
            let a, b, c = (0, e.c)(2);
            return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("span", {
                className: (0, f.b)(g.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] overflow-clip"),
                "data-page-comment-content-width": !0
            }), c[0] = a) : a = c[0], c[1] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsxs)("span", {
                "aria-hidden": !0,
                className: "invisible absolute size-0 overflow-clip",
                children: [a, (0, d.jsx)("span", {
                    className: "@container relative block [inline-size:max(100cqi,var(--page-default-reading-width))]",
                    children: (0, d.jsx)("span", {
                        className: (0, f.b)(g.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] max-w-0 overflow-clip"),
                        "data-page-comment-minimum-width": !0
                    })
                })]
            }), c[1] = b) : b = c[1], b
        }

        function i(a) {
            let b, c, g, i, j, k = (0, e.c)(13),
                {
                    heading: l,
                    headingRef: m,
                    messages: n,
                    compact: o,
                    children: p
                } = a;
            k[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(h, {}), k[0] = b) : b = k[0];
            let q = o && "mb-4";
            return k[1] !== q ? (c = (0, f.b)("flex flex-col gap-2 empty:hidden", q), k[1] = q, k[2] = c) : c = k[2], k[3] !== n || k[4] !== c ? (g = (0, d.jsx)("div", {
                className: c,
                children: n
            }), k[3] = n, k[4] = c, k[5] = g) : g = k[5], k[6] !== l || k[7] !== m || k[8] !== g ? (i = (0, d.jsxs)("div", {
                ref: m,
                className: "col-[reading] flex w-full max-w-(--page-reading-width) min-w-0 flex-col gap-6",
                "data-page-reading-column": !0,
                children: [b, g, l]
            }), k[6] = l, k[7] = m, k[8] = g, k[9] = i) : i = k[9], k[10] !== p || k[11] !== i ? (j = (0, d.jsxs)(d.Fragment, {
                children: [i, p]
            }), k[10] = p, k[11] = i, k[12] = j) : j = k[12], j
        }

        function j(a) {
            let b, c, h = (0, e.c)(6),
                {
                    externalEditingControls: i,
                    ref: j
                } = a,
                k = i ? "h-16" : "h-[50cqh]";
            h[0] !== k ? (b = (0, f.b)(g.a.PageDocumentEnd, k), h[0] = k, h[1] = b) : b = h[1];
            let l = i || void 0;
            return h[2] !== j || h[3] !== b || h[4] !== l ? (c = (0, d.jsx)("div", {
                "aria-hidden": !0,
                className: b,
                "data-native-controls": l,
                "data-page-document-end": !0,
                "data-page-document-trailing-space": !0,
                ref: j
            }), h[2] = j, h[3] = b, h[4] = l, h[5] = c) : c = h[5], c
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
} from "./633146.de3f981156.js";
import * as b from "./680612.940c878201.js";
a.C(b);
import * as c from "./418851.f063eecd68.js";
a.C(c);
import * as d from "./109308.6f7ef1dfb7.js";
a.C(d);
import * as e from "./399565.9b329429cf.js";
a.C(e);
import * as f from "./257798.2c9808dc2d.js";
a.C(f);
import * as g from "./447351.879fb0271f.js";
a.C(g);
import * as h from "./617936.100e7e3b87.js";
a.C(h);
import * as i from "./807489.4f5de65ce6.js";
a.C(i);
import * as j from "./337882.dd53aef429.js";
a.C(j);
import * as k from "./955979.da67fc9346.js";
a.C(k);
import * as l from "./646436.7523816f46.js";
a.C(l);
import * as m from "./7078.06fdb4b63f.js";
a.C(m);
import * as n from "./200429.03e2aa5e85.js";
a.C(n);
import * as o from "./698524.d1df5e85da.js";
a.C(o);
import * as p from "./956483.541b00b099.js";
a.C(p);
import * as q from "./87162.0f58b44e50.js";
a.C(q);
import * as r from "./396705.92d2a93025.js";
a.C(r);
import * as s from "./155568.ec2f311926.js";
a.C(s);
import * as t from "./731863.7089f3ce71.js";
a.C(t);
import * as u from "./767086.736386b2d3.js";
a.C(u);
import * as v from "./76629.060183bbe7.js";
a.C(v);
import * as w from "./226913.a95fa918ab.js";
a.C(w);
import * as x from "./227786.94f6703b35.js";
a.C(x);
import * as y from "./787702.94f8de71ea.js";
a.C(y);
var z = a(a.s = "YC2Q"),
    A = z.a,
    B = z.b;
export {
    A as
    default, B as shouldRevalidate
};