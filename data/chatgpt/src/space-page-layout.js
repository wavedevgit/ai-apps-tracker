export const __rspack_esm_ids = [787702];
export const __webpack_modules__ = {
    cnwD: (function(e, a, t) {
        t.d(a, {
            a: () => C,
            b: () => P
        });
        var n = t("rEML"),
            r = t("ABep"),
            o = t("QosV"),
            i = t("Q840"),
            l = t("zd8w"),
            s = t("Cslg"),
            d = t("tmUE"),
            c = t("IhXv"),
            u = t("e1xH"),
            g = t("M2H2"),
            p = t("C8z7"),
            m = t("aFW8"),
            f = t("vnV1"),
            b = t("IeFV"),
            v = t("OWtl"),
            h = t("OMIV"),
            x = t("hC2y"),
            I = t("AXDI"),
            C = (0, n.kb)(function() {
                let e, a, t, C, P, j, w, y, _ = (0, o.c)(40),
                    D = (0, i.y)(v.a),
                    k = (0, n.Z)(),
                    {
                        pathname: S
                    } = k,
                    {
                        pageId: T
                    } = (0, n.eb)(),
                    N = (0, n.Y)(),
                    L = "inAppOpen" in N && N.inAppOpen,
                    F = (0, i.z)(g.a),
                    E = (0, i.z)(s.f),
                    z = (0, i.z)(s.j),
                    M = (0, i.z)(s.k),
                    q = (0, i.z)(s.h);
                _[0] !== E || _[1] !== q || _[2] !== M || _[3] !== z ? (e = JSON.stringify([E, z, M, q]), _[0] = E, _[1] = q, _[2] = M, _[3] = z, _[4] = e) : e = _[4];
                let R = e;
                _[5] !== L || _[6] !== F || _[7] !== k || _[8] !== D ? (a = () => {
                    let e = (0, b.a)(k),
                        a = L && F && null != e ? (0, p.a)(D, document, e) : void 0;
                    return {
                        preparation: a,
                        snapshot: a?.takeSnapshot() ?? null
                    }
                }, _[5] = L, _[6] = F, _[7] = k, _[8] = D, _[9] = a) : a = _[9];
                let A = a;
                _[10] !== A || _[11] !== R || _[12] !== T ? (t = () => ({
                    pageId: T,
                    actor: R,
                    ...A()
                }), _[10] = A, _[11] = R, _[12] = T, _[13] = t) : t = _[13];
                let [U, W] = (0, l.useState)(t), B = U;
                if (U.pageId !== T || U.actor !== R) {
                    let e, a;
                    _[14] !== A || _[15] !== U.pageId || _[16] !== T ? (e = U.pageId !== T ? A() : {
                        preparation: void 0,
                        snapshot: null
                    }, _[14] = A, _[15] = U.pageId, _[16] = T, _[17] = e) : e = _[17], _[18] !== R || _[19] !== T || _[20] !== e ? (a = {
                        pageId: T,
                        actor: R,
                        ...e
                    }, _[18] = R, _[19] = T, _[20] = e, _[21] = a) : a = _[21], W(B = a)
                }
                let O = L ? B.snapshot : N.spacePageSnapshot,
                    $ = L || N.nonblockingSsr,
                    V = (0, i.x)(u.H, S),
                    X = (0, i.z)(u.A),
                    G = (0, i.x)(h.e, "4063423961");
                _[22] === Symbol.for("react.memo_cache_sentinel") ? (C = {
                    enabled: !1
                }, _[22] = C) : C = _[22];
                let Q = (0, i.z)(f.d, C);
                _[23] === Symbol.for("react.memo_cache_sentinel") ? (P = (0, r.jsx)(d.a, {
                    routeFallback: !0,
                    fillParent: !0
                }), _[23] = P) : P = _[23], _[24] !== V ? (j = (0, r.jsx)(I.a, {
                    fallback: P,
                    children: V ? (0, r.jsx)(m.b, {
                        pageRoute: !0,
                        children: (0, r.jsx)(n.n, {})
                    }) : (0, r.jsx)(x.e, {
                        allowLocal: !0
                    })
                }), _[24] = V, _[25] = j) : j = _[25];
                let J = j,
                    H = L ? B.preparation : void 0,
                    Y = L ? T : void 0;
                return _[26] !== G || _[27] !== L || _[28] !== F || _[29] !== k || _[30] !== X || _[31] !== Q ? (w = (!L || F && null != (0, b.a)(k)) && "disabled" !== X && (!G || null == Q.error && Q.data?.status !== "age_restricted"), _[26] = G, _[27] = L, _[28] = F, _[29] = k, _[30] = X, _[31] = Q, _[32] = w) : w = _[32], _[33] !== J || _[34] !== $ || _[35] !== O || _[36] !== H || _[37] !== Y || _[38] !== w ? (y = (0, r.jsx)(c.a, {
                    snapshot: O,
                    preparation: H,
                    nonblocking: $,
                    openIdentity: Y,
                    enabled: w,
                    children: J
                }), _[33] = J, _[34] = $, _[35] = O, _[36] = H, _[37] = Y, _[38] = w, _[39] = y) : y = _[39], y
            });
        let P = e => {
            let {
                currentParams: a,
                nextParams: t,
                defaultShouldRevalidate: n
            } = e;
            return a.pageId !== t.pageId || n
        }
    }),
    puTD: (function(e, a) {
        a.a = {
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
    nDjx: (function(e, a, t) {
        e.exports = t.p + "assets/appshot-logo.f0152cb4dd.png"
    }),
    hIAo: (function(e, a, t) {
        e.exports = t.p + "assets/codex-app-ga-logo.dfddfb85d7.png"
    }),
    OCvz: (function(e, a, t) {
        e.exports = t.p + "assets/dictation-start.f6efcb404f.wav"
    }),
    DJ2e: (function(e, a, t) {
        e.exports = t.p + "assets/dictation-stop.e3bc7ebc5e.wav"
    }),
    sSh9: (function(e, a, t) {
        t.d(a, {
            a: () => n
        });
        let n = {
            content: "content-xaiQhS",
            page: "page-g4Dmdq",
            root: "editor-jMsqTn",
            tableFloatingUi: "tableFloatingUi-Q6FLpM"
        }
    }),
    LpCf: (function(e, a, t) {
        let n = {
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
            }).map(e => {
                let [a, t] = e;
                return [`--oai-wb-${a}`, `var(--wb-${a},${t})`]
            }))
        };
        t.d(a, {}, {
            a: n
        })
    }),
    IhXv: (function(e, a, t) {
        t.d(a, {
            a: () => E
        });
        var n = t("ABep"),
            r = t("QosV"),
            o = t("sSh9"),
            i = t("LpCf"),
            l = t("on57"),
            s = t("LPKZ"),
            d = t.n(s),
            c = t("Q840"),
            u = t("G4E3"),
            g = t("zd8w"),
            p = t("oyxz"),
            m = t("rEML"),
            f = t("Cslg"),
            b = t("MdAf"),
            v = t("tmUE"),
            h = t("GhgU"),
            x = t("e1xH"),
            I = t("cVcC"),
            C = t("hlkZ"),
            P = t("NnV7"),
            j = t("dJBt"),
            w = t("OWtl"),
            y = t("OMIV"),
            _ = t("TnSu"),
            D = t("bIvi"),
            k = t("eShZ"),
            S = t("WrMt"),
            T = t("YCKz"),
            N = t("puTD");
        let L = () => d(),
            F = () => !1;

        function E(e) {
            let a, t, o, i, s, d, u, p, h, I, P, j, y, _, S, E, R, U, W = (0, r.c)(94),
                {
                    snapshot: B,
                    preparation: O,
                    enabled: $,
                    nonblocking: V,
                    openIdentity: X,
                    pageId: G,
                    blockId: Q,
                    firstContent: J,
                    children: H
                } = e,
                Y = void 0 !== V && V,
                Z = (0, c.y)(w.a),
                K = (0, g.useId)(),
                [ee, ea] = (0, g.useState)(null),
                {
                    pageId: et
                } = (0, m.eb)(),
                en = G ?? et,
                er = (0, c.z)(f.f),
                eo = (0, c.z)(f.j),
                ei = (0, c.z)(f.k),
                el = (0, c.z)(f.h);
            W[0] !== er || W[1] !== el || W[2] !== ei || W[3] !== X || W[4] !== en || W[5] !== eo ? (a = () => ({
                openIdentity: X ?? en,
                generation: 0,
                invalidated: !1,
                pageId: en,
                accountId: er,
                userId: eo,
                localUserId: ei,
                accountUserId: el,
                browserFirstContent: A(en)
            }), W[0] = er, W[1] = el, W[2] = ei, W[3] = X, W[4] = en, W[5] = eo, W[6] = a) : a = W[6];
            let [es, ed] = (0, g.useState)(a), ec = 0 === es.generation ? K : `${K}-${es.generation}`, eu = null == X && 0 === es.generation, eg = es.pageId ?? "", ep = es.accountId ?? "", em = es.userId ?? "";
            W[7] !== ec || W[8] !== eg || W[9] !== ep || W[10] !== em ? (t = {
                mountId: ec,
                pageId: eg,
                accountId: ep,
                userId: em
            }, W[7] = ec, W[8] = eg, W[9] = ep, W[10] = em, W[11] = t) : t = W[11];
            let ef = t,
                eb = (0, c.x)(null != B && T.d, ef),
                ev = null == B || es.invalidated || eb ? void 0 : O,
                eh = (0, g.useSyncExternalStore)(null == ev ? L : ev.subscribeInvalidation, null == ev ? F : ev.isInvalidated, F),
                ex = (0, c.x)(null == B ? null : T.f, ef),
                eI = (0, c.x)(null != B ? C.loadedSpacePageMetadata$ : void 0, en ?? null),
                eC = (0, c.x)(null != B && x.z, ef.pageId),
                {
                    data: eP,
                    error: ej
                } = (0, c.x)(null == B ? void 0 : C.spacePageQuery$, ef.pageId, {
                    enabled: !1
                }) ?? {};
            W[12] !== er || W[13] !== el || W[14] !== es.accountId || W[15] !== es.accountUserId || W[16] !== es.localUserId || W[17] !== es.pageId || W[18] !== es.userId || W[19] !== ex?.failed || W[20] !== $ || W[21] !== ej || W[22] !== eh || W[23] !== ei || W[24] !== eI || W[25] !== eP || W[26] !== en || W[27] !== B || W[28] !== eo || W[29] !== eC ? (o = null == B || eh || !$ || es.pageId !== en || es.accountId !== er || es.userId !== eo || es.localUserId !== ei || es.accountUserId !== el || eC || eI?.view_only === !0 || eP?.metadata.view_only === !0 || eI?.deleted_at != null || eP?.metadata.deleted_at != null || eI?.access.can_read === !1 || eP?.metadata.access.can_read === !1 || ej instanceof k.FetchError && [401, 403, 404, 410].includes(ej.status) || ex?.failed === !0, W[12] = er, W[13] = el, W[14] = es.accountId, W[15] = es.accountUserId, W[16] = es.localUserId, W[17] = es.pageId, W[18] = es.userId, W[19] = ex?.failed, W[20] = $, W[21] = ej, W[22] = eh, W[23] = ei, W[24] = eI, W[25] = eP, W[26] = en, W[27] = B, W[28] = eo, W[29] = eC, W[30] = o) : o = W[30];
            let ew = o;
            null != X && (es.openIdentity !== X || es.pageId !== en) ? ed({
                openIdentity: X,
                generation: es.generation + 1,
                invalidated: !1,
                pageId: en,
                accountId: er,
                userId: eo,
                localUserId: ei,
                accountUserId: el,
                browserFirstContent: A(en)
            }) : ew && !es.invalidated && ed({
                ...es,
                invalidated: !0
            }), W[31] !== Z ? (i = (e, a) => {
                Z.set(T.e, e, !a)
            }, W[31] = Z, W[32] = i) : i = W[32];
            let ey = (0, D.a)(i);
            W[33] !== ec || W[34] !== ey ? (s = e => {
                null != e && ey(ec, null != e.querySelector("[data-page-ssr-snapshot]"))
            }, W[33] = ec, W[34] = ey, W[35] = s) : s = W[35];
            let e_ = (0, D.a)(s);
            W[36] !== ec || W[37] !== ey ? (d = (0, n.jsx)(M, {
                mountId: ec,
                setClientCovered: ey,
                visible: !1
            }), W[36] = ec, W[37] = ey, W[38] = d) : d = W[38];
            let eD = d,
                ek = !es.invalidated && !ew && !eb && null != B,
                eS = eD;
            if (ek) {
                if (Y) {
                    let e, a, t;
                    W[39] !== es.browserFirstContent.get || W[40] !== Q || W[41] !== G || W[42] !== J || W[43] !== eu || W[44] !== ec || W[45] !== en || W[46] !== ey || W[47] !== eD ? (e = e => null == e || "status" in e ? eD : (0, n.jsx)(q, {
                        mountId: ec,
                        getBrowserFirstContent: es.browserFirstContent.get,
                        pageId: en,
                        blockId: null == G ? void 0 : Q ?? null,
                        firstContent: J,
                        initialNavigation: eu,
                        snapshot: e,
                        setClientCovered: ey
                    }), W[39] = es.browserFirstContent.get, W[40] = Q, W[41] = G, W[42] = J, W[43] = eu, W[44] = ec, W[45] = en, W[46] = ey, W[47] = eD, W[48] = e) : e = W[48], W[49] !== B || W[50] !== e || W[51] !== eD ? (a = (0, n.jsx)(m.b, {
                        resolve: B,
                        errorElement: eD,
                        children: e
                    }), W[49] = B, W[50] = e, W[51] = eD, W[52] = a) : a = W[52], W[53] !== ec || W[54] !== a || W[55] !== eD ? (t = (0, n.jsx)(g.Suspense, {
                        fallback: eD,
                        children: a
                    }, ec), W[53] = ec, W[54] = a, W[55] = eD, W[56] = t) : t = W[56], eS = t
                } else if ("html" in B) {
                    let e, a = null == G ? void 0 : Q ?? null;
                    W[57] !== es.browserFirstContent.get || W[58] !== J || W[59] !== eu || W[60] !== ec || W[61] !== en || W[62] !== ey || W[63] !== B || W[64] !== a ? (e = (0, n.jsx)(q, {
                        mountId: ec,
                        getBrowserFirstContent: es.browserFirstContent.get,
                        pageId: en,
                        blockId: a,
                        firstContent: J,
                        initialNavigation: eu,
                        snapshot: B,
                        setClientCovered: ey
                    }, ec), W[57] = es.browserFirstContent.get, W[58] = J, W[59] = eu, W[60] = ec, W[61] = en, W[62] = ey, W[63] = B, W[64] = a, W[65] = e) : e = W[65], eS = e
                }
            }
            let eT = Y && null != B ? e_ : void 0;
            W[66] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, l.b)("surface-e8iyms", "relative flex h-full min-h-0 flex-1 flex-col"), W[66] = u) : u = W[66], W[67] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, n.jsx)(b.a, {
                "aria-hidden": "true",
                "data-page-loading-spinner": "",
                className: (0, l.b)("indicator-Wq6R_i", "pointer-events-none absolute inset-x-0 z-1 top-[var(--page-loading-top,0px)] bottom-0 m-auto icon-lg animate-spin text-secondary [animation-timing-function:linear] motion-reduce:[animation-play-state:paused]")
            }), W[67] = p) : p = W[67];
            let eN = es.invalidated || ew || eb ? null : ee;
            W[68] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, n.jsx)(v.a, {
                routeFallback: !0,
                fillParent: !0,
                debugName: "PageEditor"
            }), W[68] = h) : h = W[68], W[69] !== es.browserFirstContent.capture || W[70] !== H ? (I = (0, n.jsx)(g.Suspense, {
                fallback: h,
                children: (0, n.jsx)(T.a, {
                    value: es.browserFirstContent.capture,
                    children: H
                })
            }), W[69] = es.browserFirstContent.capture, W[70] = H, W[71] = I) : I = W[71], W[72] !== eN || W[73] !== I ? (P = (0, n.jsx)(T.c, {
                value: eN,
                children: I
            }), W[72] = eN, W[73] = I, W[74] = P) : P = W[74], W[75] !== ec || W[76] !== P ? (j = (0, n.jsx)(T.b, {
                value: ec,
                children: P
            }), W[75] = ec, W[76] = P, W[77] = j) : j = W[77], W[78] !== ek || W[79] !== ec || W[80] !== j ? (y = (0, n.jsx)(z, {
                mountId: ec,
                coverEligible: ek,
                children: j
            }), W[78] = ek, W[79] = ec, W[80] = j, W[81] = y) : y = W[81];
            let eL = Y ? N.a.PageSnapshotCover : "inset-0";
            return W[82] !== eL ? (_ = (0, l.b)("pointer-events-none absolute flex min-h-0 flex-col", eL), W[82] = eL, W[83] = _) : _ = W[83], W[84] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, n.jsx)("div", {
                ref: ea,
                className: "pointer-events-auto shrink-0"
            }), W[84] = S) : S = W[84], W[85] !== eS ? (E = (0, n.jsx)("div", {
                className: "relative min-h-0 flex-1",
                children: eS
            }), W[85] = eS, W[86] = E) : E = W[86], W[87] !== _ || W[88] !== E ? (R = (0, n.jsxs)("div", {
                className: _,
                children: [S, E]
            }), W[87] = _, W[88] = E, W[89] = R) : R = W[89], W[90] !== eT || W[91] !== y || W[92] !== R ? (U = (0, n.jsxs)("div", {
                ref: eT,
                className: u,
                children: [p, y, R]
            }), W[90] = eT, W[91] = y, W[92] = R, W[93] = U) : U = W[93], U
        }

        function z(e) {
            let a, t = (0, r.c)(4),
                {
                    mountId: o,
                    coverEligible: i,
                    children: l
                } = e,
                s = (0, c.x)(T.e, o),
                d = i && !s,
                u = d ? "true" : void 0;
            return t[0] !== l || t[1] !== d || t[2] !== u ? (a = (0, n.jsx)("div", {
                className: "flex min-h-0 flex-1 flex-col",
                inert: d,
                "aria-hidden": u,
                children: l
            }), t[0] = l, t[1] = d, t[2] = u, t[3] = a) : a = t[3], a
        }

        function M(e) {
            let a, t, o, i = (0, r.c)(15),
                {
                    mountId: s,
                    initialNavigation: d,
                    visible: u,
                    setClientCovered: g,
                    onRemove: p,
                    children: m
                } = e,
                f = void 0 !== d && d;
            i[0] !== f || i[1] !== s || i[2] !== p || i[3] !== g || i[4] !== u ? (a = e => {
                if (null != e) return g(s, u), () => {
                    u && f && (0, S.e)(), g(s, !1), u && p?.(e)
                }
            }, i[0] = f, i[1] = s, i[2] = p, i[3] = g, i[4] = u, i[5] = a) : a = i[5];
            let b = a,
                v = (0, c.x)(y.e, "2163293173"),
                h = u ? "covered" : "uncovered",
                x = v ? "[scrollbar-gutter:stable_both-edges]" : "scrollbar-stable";
            i[6] !== x ? (t = (0, l.b)("pointer-events-auto absolute inset-0 overflow-x-hidden overflow-y-auto bg-surface scrollbar-on-hover", x), i[6] = x, i[7] = t) : t = i[7];
            let I = !u,
                C = u || void 0,
                P = u ? m : null;
            return i[8] !== b || i[9] !== h || i[10] !== t || i[11] !== I || i[12] !== C || i[13] !== P ? (o = (0, n.jsx)("div", {
                ref: b,
                className: t,
                hidden: I,
                "data-page-ssr-snapshot": C,
                children: P
            }, h), i[8] = b, i[9] = h, i[10] = t, i[11] = I, i[12] = C, i[13] = P, i[14] = o) : o = i[14], o
        }

        function q(e) {
            let a, t, l, s, d, m, b, v, x, I, C = (0, r.c)(40),
                {
                    mountId: j,
                    getBrowserFirstContent: y,
                    pageId: k,
                    blockId: S,
                    firstContent: L,
                    initialNavigation: F,
                    snapshot: E,
                    setClientCovered: z
                } = e,
                q = (0, c.y)(w.a),
                A = (0, g.useRef)(null),
                U = (0, c.z)(f.f),
                W = (0, c.z)(f.j);
            C[0] !== j || C[1] !== E.accountId || C[2] !== E.pageId || C[3] !== E.userId ? (a = {
                mountId: j,
                pageId: E.pageId,
                accountId: E.accountId,
                userId: E.userId
            }, C[0] = j, C[1] = E.accountId, C[2] = E.pageId, C[3] = E.userId, C[4] = a) : a = C[4];
            let B = (0, c.x)(T.f, a),
                O = k !== E.pageId || U !== E.accountId || W !== E.userId || B?.failed === !0,
                [$, V] = (0, g.useState)(!1),
                X = null != B && !B.failed && B.sequence >= E.throughSequence;
            !$ && X && V(!0);
            let G = !O && !$ && !X;
            C[5] !== S || C[6] !== j || C[7] !== q || C[8] !== E.accountId || C[9] !== E.pageId || C[10] !== E.throughSequence || C[11] !== E.userId ? (t = e => {
                let a = (0, u.d)(`page://${E.pageId}${e.ownerDocument.defaultView?.location.hash??""}`);
                if (null != S || void 0 === S && a?.kind === "page" && null != a.blockId) return;
                let t = q.get(T.f, {
                    mountId: j,
                    pageId: E.pageId,
                    accountId: E.accountId,
                    userId: E.userId
                });
                !t?.failed && null != t && t.sequence >= E.throughSequence && q.get(f.f) === E.accountId && q.get(f.j) === E.userId && t.restoreScroll?.(e.scrollTop)
            }, C[5] = S, C[6] = j, C[7] = q, C[8] = E.accountId, C[9] = E.pageId, C[10] = E.throughSequence, C[11] = E.userId, C[12] = t) : t = C[12];
            let Q = (0, D.a)(t);
            return C[13] !== L || C[14] !== y || C[15] !== F || C[16] !== G ? (l = G && (0, n.jsx)(R, {
                getBrowserFirstContent: y,
                content: A,
                firstContent: L,
                initialNavigation: F
            }), C[13] = L, C[14] = y, C[15] = F, C[16] = G, C[17] = l) : l = C[17], C[18] !== E.emoji ? (s = null != E.emoji && (0, n.jsx)("span", {
                className: "flex size-16 items-center border border-transparent",
                children: (0, n.jsx)(_.a, {
                    emoji: E.emoji,
                    size: "large"
                })
            }), C[18] = E.emoji, C[19] = s) : s = C[19], C[20] !== E.title ? (d = E.title || (0, n.jsx)(p.a, {
                ...P.c.untitled
            }), C[20] = E.title, C[21] = d) : d = C[21], C[22] !== d ? (m = (0, n.jsx)("h1", {
                className: `${N.a.PageTitle} font-semibold break-words text-default`,
                children: d
            }), C[22] = d, C[23] = m) : m = C[23], C[24] !== s || C[25] !== m ? (b = (0, n.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2",
                children: [s, m]
            }), C[24] = s, C[25] = m, C[26] = b) : b = C[26], C[27] !== E.html ? (v = (0, n.jsx)("div", {
                "data-page-document-selection": !0,
                className: "isolate col-[wide] min-w-0",
                children: (0, n.jsx)("div", {
                    className: `${o.a.root} ${N.a.PageDocumentTheme} px-0`,
                    style: i.a,
                    children: (0, n.jsx)("div", {
                        ref: A,
                        className: `ProseMirror ${o.a.content} ${N.a.PageDocument} ${N.a.PagePreview}`,
                        contentEditable: !1,
                        "data-page-static-preview": !0,
                        dangerouslySetInnerHTML: {
                            __html: E.html
                        }
                    })
                })
            }), C[27] = E.html, C[28] = v) : v = C[28], C[29] !== b || C[30] !== v ? (x = (0, n.jsx)(h.a, {
                heading: b,
                children: v
            }), C[29] = b, C[30] = v, C[31] = x) : x = C[31], C[32] !== F || C[33] !== j || C[34] !== Q || C[35] !== z || C[36] !== l || C[37] !== x || C[38] !== G ? (I = (0, n.jsxs)(M, {
                mountId: j,
                initialNavigation: F,
                visible: G,
                setClientCovered: z,
                onRemove: Q,
                children: [l, x]
            }), C[32] = F, C[33] = j, C[34] = Q, C[35] = z, C[36] = l, C[37] = x, C[38] = G, C[39] = I) : I = C[39], I
        }

        function R(e) {
            let a, t, o, i = (0, r.c)(11),
                {
                    getBrowserFirstContent: l,
                    content: s,
                    firstContent: d,
                    initialNavigation: c
                } = e;
            return i[0] !== d || i[1] !== l ? (a = () => {
                let e = void 0 === d ? l() : d;
                e?.observeDocumentType("page")
            }, i[0] = d, i[1] = l, i[2] = a) : a = i[2], i[3] !== s.current || i[4] !== d || i[5] !== l || i[6] !== c ? (t = () => {
                if (s.current?.querySelector('[elementtiming="codex-page-ssr-content"]') == null) return;
                c && (0, S.d)();
                let e = void 0 === d ? l() : d;
                e?.observeDocumentType("page"), e?.contentVisible()
            }, i[3] = s.current, i[4] = d, i[5] = l, i[6] = c, i[7] = t) : t = i[7], i[8] !== a || i[9] !== t ? (o = (0, n.jsx)(j.a, {
                requireVisibleAtPaint: !0,
                onCommit: a,
                onPaint: t
            }), i[8] = a, i[9] = t, i[10] = o) : o = i[10], o
        }

        function A(e) {
            let a = I.b.getDebugLoad(e ?? null)?.browserFirstContent;
            return {
                get: () => a,
                capture: t => {
                    t === e && null == a && (a = I.b.getDebugLoad(e ?? null)?.browserFirstContent)
                }
            }
        }
    }),
    GhgU: (function(e, a, t) {
        t.d(a, {
            a: () => f,
            b: () => v,
            c: () => h
        });
        var n = t("ABep"),
            r = t("QosV"),
            o = t("on57"),
            i = t("IPUh"),
            l = t("CJrD"),
            s = t("zd8w"),
            d = t("Wf1j"),
            c = t("X3K1"),
            u = t("ADAj"),
            g = t("puTD");

        function p() {
            let e, a, t = (0, r.c)(2);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
                className: (0, o.b)(g.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] overflow-clip"),
                "data-page-comment-content-width": !0
            }), t[0] = e) : e = t[0], t[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsxs)("span", {
                "aria-hidden": !0,
                className: "invisible absolute size-0 overflow-clip",
                children: [e, (0, n.jsx)("span", {
                    className: "@container relative block [inline-size:max(100cqi,var(--page-default-reading-width))]",
                    children: (0, n.jsx)("span", {
                        className: (0, o.b)(g.a.PageReadingWidthMeasure, "invisible absolute h-0 w-[min(100cqi,var(--page-default-reading-width))] max-w-0 overflow-clip"),
                        "data-page-comment-minimum-width": !0
                    })
                })]
            }), t[1] = a) : a = t[1], a
        }

        function m(e, a, t) {
            if (!(a instanceof Element) || a.closest("[data-page-document-viewport]") !== e.closest("[data-page-document-viewport]")) return !1;
            if (null != a.closest("[data-page-document-trailing-space]")) return !0;
            if (!a.contains(e)) return !1;
            let n = e.getBoundingClientRect();
            return n.height > 0 && t >= n.bottom
        }

        function f(e) {
            let a, t, i, s, d, c, g, m, f, v, h, x, I, C, P = (0, r.c)(29);
            P[0] !== e ? ({
                heading: t,
                externalEditingControls: c,
                messages: s,
                compact: g,
                headingOutside: m,
                headingRef: i,
                children: a,
                ...d
            } = e, P[0] = e, P[1] = a, P[2] = t, P[3] = i, P[4] = s, P[5] = d, P[6] = c, P[7] = g, P[8] = m) : (a = P[1], t = P[2], i = P[3], s = P[4], d = P[5], c = P[6], g = P[7], m = P[8]);
            let j = void 0 !== c && c,
                w = void 0 !== g && g,
                y = void 0 !== m && m;
            P[9] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, l.a)(), P[9] = f) : f = P[9];
            let _ = (0, u.l)(f.fullWidth),
                D = y ? "pt-4 pb-panel" : "pt-10 pb-panel",
                k = w || j ? "py-4" : D,
                S = _ || j || void 0;
            P[10] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, n.jsx)(p, {}), P[10] = v) : v = P[10];
            let T = w && "mb-4";
            return P[11] !== T ? (h = (0, o.b)("flex flex-col gap-2 empty:hidden", T), P[11] = T, P[12] = h) : h = P[12], P[13] !== s || P[14] !== h ? (x = (0, n.jsx)("div", {
                className: h,
                children: s
            }), P[13] = s, P[14] = h, P[15] = x) : x = P[15], P[16] !== t || P[17] !== i || P[18] !== x ? (I = (0, n.jsxs)("div", {
                ref: i,
                className: "col-[reading] flex w-full max-w-(--page-reading-width) min-w-0 flex-col gap-6",
                "data-page-reading-column": !0,
                children: [v, x, t]
            }), P[16] = t, P[17] = i, P[18] = x, P[19] = I) : I = P[19], P[20] !== a || P[21] !== w || P[22] !== j || P[23] !== y || P[24] !== d || P[25] !== I || P[26] !== k || P[27] !== S ? (C = (0, n.jsxs)(b, {
                ...d,
                compact: w,
                externalEditingControls: j,
                headingOutside: y,
                className: k,
                "data-page-full-width": S,
                children: [I, a]
            }), P[20] = a, P[21] = w, P[22] = j, P[23] = y, P[24] = d, P[25] = I, P[26] = k, P[27] = S, P[28] = C) : C = P[28], C
        }

        function b(e) {
            let a, t, l, s, d, c, u, p, m, f = (0, r.c)(22);
            f[0] !== e ? ({
                as: s,
                compact: d,
                contentAlignment: t,
                externalEditingControls: c,
                headingOutside: u,
                className: a,
                ...l
            } = e, f[0] = e, f[1] = a, f[2] = t, f[3] = l, f[4] = s, f[5] = d, f[6] = c, f[7] = u) : (a = f[1], t = f[2], l = f[3], s = f[4], d = f[5], c = f[6], u = f[7]);
            let b = void 0 !== d && d,
                v = void 0 !== c && c,
                h = void 0 !== u && u,
                x = "section" === (void 0 === s ? "div" : s) ? i.a.section : i.a.div,
                I = !b && !v && !l["data-page-full-width"] && "start" !== t && "[container-name:page-dil-badge-gutter]",
                C = b || h ? "gap-y-0" : "gap-y-6",
                P = b ? "ps-[var(--page-attribution-padding,--spacing(4))] pe-4" : "ps-[var(--page-attribution-padding,var(--page-control-gutter))] pe-(--page-control-gutter) in-[[data-page-responsive-comments=markers]]:ps-[var(--page-attribution-padding,clamp(16px,calc(100%_-_572px_-_48px),48px))]",
                j = v ? "[--page-control-gutter:--spacing(10)] [--page-document-end-space:--spacing(16)] [--color-background-text-selection:--alpha(var(--color-text)/20%)]" : "[--page-control-gutter:--spacing(14)] [--page-document-end-space:50cqh] in-[[data-page-responsive-comments]]:[--page-control-gutter:--spacing(12)]",
                w = "start" === t && "w-full max-w-[var(--page-content-max-width,none)]";
            f[8] !== a || f[9] !== I || f[10] !== C || f[11] !== P || f[12] !== j || f[13] !== w ? (p = (0, o.b)(g.a.PageContent, "@container grid", I, C, P, j, w, a), f[8] = a, f[9] = I, f[10] = C, f[11] = P, f[12] = j, f[13] = w, f[14] = p) : p = f[14];
            let y = b || void 0,
                _ = v || void 0;
            return f[15] !== x || f[16] !== t || f[17] !== l || f[18] !== p || f[19] !== y || f[20] !== _ ? (m = (0, n.jsx)(x, {
                ...l,
                className: p,
                "data-compact": y,
                "data-page-content-alignment": t,
                "data-native-controls": _
            }), f[15] = x, f[16] = t, f[17] = l, f[18] = p, f[19] = y, f[20] = _, f[21] = m) : m = f[21], m
        }

        function v(e) {
            let a, t, o, i = (0, r.c)(7),
                {
                    pageId: l
                } = e,
                s = (0, d.a)();
            return i[0] !== s ? (a = s.formatMessage({
                id: "codex.space.page.contentLoading",
                defaultMessage: "Loading page content"
            }), i[0] = s, i[1] = a) : a = i[1], i[2] !== l ? (t = (0, n.jsx)(c.b, {
                seed: l,
                size: "md",
                variant: "chatgpt-project"
            }), i[2] = l, i[3] = t) : t = i[3], i[4] !== a || i[5] !== t ? (o = (0, n.jsx)("div", {
                className: "col-[reading] w-full max-w-(--page-reading-width) min-w-0",
                "aria-label": a,
                role: "status",
                children: t
            }), i[4] = a, i[5] = t, i[6] = o) : o = i[6], o
        }

        function h(e) {
            let a, t, i, l, d = (0, r.c)(10),
                {
                    editor: c,
                    externalEditingControls: u,
                    onTouch: p
                } = e,
                f = void 0 !== u && u,
                b = (0, s.useRef)(null),
                v = (0, s.useEffectEvent)(p);
            d[0] !== c || d[1] !== v ? (a = () => {
                let e = b.current?.closest("[data-page-document-viewport]");
                if (null != e && null != c) return function(e, a, t) {
                    let n = new AbortController,
                        {
                            signal: r
                        } = n,
                        o = null,
                        i = () => {
                            o = null
                        };
                    return e.addEventListener("pointerdown", e => {
                        o = e.isPrimary && "touch" === e.pointerType && m(a, e.target, e.clientY) ? e : null
                    }, {
                        signal: r
                    }), e.addEventListener("pointerup", e => {
                        null != o && (e.pointerId !== o.pointerId || e.timeStamp - o.timeStamp >= 350 || Math.hypot(e.clientX - o.clientX, e.clientY - o.clientY) > 8) && i()
                    }, {
                        signal: r
                    }), e.addEventListener("pointercancel", i, {
                        signal: r
                    }), e.addEventListener("contextmenu", i, {
                        signal: r
                    }), e.addEventListener("click", e => {
                        let n = o?.clientY;
                        i(), null != n && !e.defaultPrevented && m(a, e.target, n) && t()
                    }, {
                        signal: r
                    }), () => n.abort()
                }(e, c, v)
            }, d[0] = c, d[1] = v, d[2] = a) : a = d[2], d[3] !== c ? (t = [c], d[3] = c, d[4] = t) : t = d[4], (0, s.useEffect)(a, t);
            let h = f ? "h-16" : "h-[50cqh]";
            d[5] !== h ? (i = (0, o.b)(g.a.PageDocumentEnd, h), d[5] = h, d[6] = i) : i = d[6];
            let x = f || void 0;
            return d[7] !== i || d[8] !== x ? (l = (0, n.jsx)("div", {
                "aria-hidden": !0,
                className: i,
                "data-native-controls": x,
                "data-page-document-end": !0,
                "data-page-document-trailing-space": !0,
                ref: b
            }), d[7] = i, d[8] = x, d[9] = l) : l = d[9], l
        }
    }),
    EBQV: (function(a) {
        a.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.286e08e471.js";
import * as a from "./418851.b2405a4ff9.js";
e.C(a);
import * as t from "./109308.c704a27752.js";
e.C(t);
import * as n from "./399565.76c7da28d9.js";
e.C(n);
import * as r from "./257798.da1bc54c05.js";
e.C(r);
import * as o from "./447351.34d04099ca.js";
e.C(o);
import * as i from "./617936.da77c6b618.js";
e.C(i);
import * as l from "./807489.823dbdfb5a.js";
e.C(l);
import * as s from "./337882.060a468551.js";
e.C(s);
import * as d from "./955979.5504cdc0ad.js";
e.C(d);
import * as c from "./646436.feae78aa0d.js";
e.C(c);
import * as u from "./7078.6f2aee03ba.js";
e.C(u);
import * as g from "./200429.80eabab50b.js";
e.C(g);
import * as p from "./698524.9faf81ab1c.js";
e.C(p);
import * as m from "./956483.db483d044c.js";
e.C(m);
import * as f from "./87162.313d693207.js";
e.C(f);
import * as b from "./396705.047d6db773.js";
e.C(b);
import * as v from "./155568.1d9e3b614b.js";
e.C(v);
import * as h from "./731863.5760f3f335.js";
e.C(h);
import * as x from "./767086.ab8a876382.js";
e.C(x);
import * as I from "./76629.6fe0bcbf7b.js";
e.C(I);
import * as C from "./226913.cf105b979e.js";
e.C(C);
import * as P from "./227786.748857de8d.js";
e.C(P);
import * as j from "./787702.cba5c82da7.js";
e.C(j);
var w = e(e.s = "cnwD"),
    y = w.a,
    _ = w.b;
export {
    y as
    default, _ as shouldRevalidate
};