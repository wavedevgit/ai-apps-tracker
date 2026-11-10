export const __rspack_esm_ids = [787702];
export const __webpack_modules__ = {
    lOPI: (function(e, a, t) {
        t.d(a, {
            a: () => O,
            b: () => V
        });
        var r = t("jqIZ"),
            o = t("ABep"),
            n = t("QosV"),
            i = t("BolX"),
            s = t("zd8w"),
            l = t("Cslg"),
            d = t("tmUE"),
            c = t("sSh9"),
            m = t("LpCf"),
            u = t("on57"),
            g = t("LPKZ"),
            p = t.n(g),
            b = t("G4E3"),
            f = t("oyxz"),
            v = t("e1xH"),
            h = t("cVcC"),
            x = t("QvdU"),
            C = t("NnV7"),
            P = t("dJBt"),
            I = t("OWtl"),
            w = t("bIvi"),
            j = t("eShZ"),
            y = t("WrMt"),
            k = t("YCKz"),
            D = t("msAz");
        let _ = () => p(),
            S = () => !1;

        function z(e) {
            let a, t, c, m, g, p, b, f, h, C, P, y, z, N, B, q, M = (0, n.c)(66),
                {
                    snapshot: F,
                    preparation: A,
                    enabled: R,
                    nonblocking: $,
                    openIdentity: E,
                    children: O
                } = e,
                V = void 0 !== $ && $,
                W = (0, i.y)(I.a),
                H = (0, s.useId)(),
                [Q, U] = (0, s.useState)(null),
                {
                    pageId: X
                } = (0, r.cb)(),
                G = (0, i.z)(l.f),
                J = (0, i.z)(l.j),
                K = (0, i.z)(l.k),
                Z = (0, i.z)(l.h),
                Y = E ?? X;
            M[0] !== G || M[1] !== Z || M[2] !== K || M[3] !== X || M[4] !== Y || M[5] !== J ? (a = {
                openIdentity: Y,
                generation: 0,
                invalidated: !1,
                pageId: X,
                accountId: G,
                userId: J,
                localUserId: K,
                accountUserId: Z
            }, M[0] = G, M[1] = Z, M[2] = K, M[3] = X, M[4] = Y, M[5] = J, M[6] = a) : a = M[6];
            let [ee, ea] = (0, s.useState)(a), et = 0 === ee.generation ? H : `${H}-${ee.generation}`, er = null == E && 0 === ee.generation, eo = (0, i.x)(k.d, et), en = ee.pageId ?? "", ei = ee.accountId ?? "", es = ee.userId ?? "";
            M[7] !== et || M[8] !== en || M[9] !== ei || M[10] !== es ? (t = {
                mountId: et,
                pageId: en,
                accountId: ei,
                userId: es
            }, M[7] = et, M[8] = en, M[9] = ei, M[10] = es, M[11] = t) : t = M[11];
            let el = t,
                ed = (0, i.x)(null != F && k.c, el),
                ec = null == F || ee.invalidated || ed ? void 0 : A,
                em = (0, s.useSyncExternalStore)(null == ec ? _ : ec.subscribeInvalidation, null == ec ? S : ec.isInvalidated, S),
                eu = (0, i.x)(null == F ? null : k.e, el),
                eg = (0, i.x)(null != F ? x.loadedSpacePageMetadata$ : void 0, X ?? null),
                ep = (0, i.x)(null != F && v.u, el.pageId),
                {
                    data: eb,
                    error: ef
                } = (0, i.x)(null == F ? void 0 : x.spacePageQuery$, el.pageId, {
                    enabled: !1
                }) ?? {},
                ev = null == F || em || !R || ee.pageId !== X || ee.accountId !== G || ee.userId !== J || ee.localUserId !== K || ee.accountUserId !== Z || ep || eg?.view_only === !0 || eb?.metadata.view_only === !0 || eg?.deleted_at != null || eb?.metadata.deleted_at != null || eg?.access.can_read === !1 || eb?.metadata.access.can_read === !1 || ef instanceof j.FetchError && [401, 403, 404, 410].includes(ef.status) || eu?.failed === !0;
            null != E && (ee.openIdentity !== E || ee.pageId !== X) ? ea({
                openIdentity: E,
                generation: ee.generation + 1,
                invalidated: !1,
                pageId: X,
                accountId: G,
                userId: J,
                localUserId: K,
                accountUserId: Z
            }) : ev && !ee.invalidated && ea({
                ...ee,
                invalidated: !0
            }), M[12] !== W ? (c = (e, a) => {
                W.set(k.d, e, !a)
            }, M[12] = W, M[13] = c) : c = M[13];
            let eh = (0, w.a)(c);
            M[14] !== et || M[15] !== eh ? (m = e => {
                null != e && eh(et, null != e.querySelector("[data-page-ssr-snapshot]"))
            }, M[14] = et, M[15] = eh, M[16] = m) : m = M[16];
            let ex = (0, w.a)(m);
            M[17] !== et || M[18] !== eh ? (g = (0, o.jsx)(T, {
                mountId: et,
                setClientCovered: eh,
                visible: !1
            }), M[17] = et, M[18] = eh, M[19] = g) : g = M[19];
            let eC = g,
                eP = eC;
            if (!ee.invalidated && !ev && !ed && null != F) {
                if (V) {
                    let e, a, t;
                    M[20] !== er || M[21] !== et || M[22] !== eh || M[23] !== eC ? (e = e => null == e || "status" in e ? eC : (0, o.jsx)(L, {
                        mountId: et,
                        initialNavigation: er,
                        snapshot: e,
                        setClientCovered: eh
                    }), M[20] = er, M[21] = et, M[22] = eh, M[23] = eC, M[24] = e) : e = M[24], M[25] !== F || M[26] !== e || M[27] !== eC ? (a = (0, o.jsx)(r.b, {
                        resolve: F,
                        errorElement: eC,
                        children: e
                    }), M[25] = F, M[26] = e, M[27] = eC, M[28] = a) : a = M[28], M[29] !== et || M[30] !== a || M[31] !== eC ? (t = (0, o.jsx)(s.Suspense, {
                        fallback: eC,
                        children: a
                    }, et), M[29] = et, M[30] = a, M[31] = eC, M[32] = t) : t = M[32], eP = t
                } else if ("html" in F) {
                    let e;
                    M[33] !== er || M[34] !== et || M[35] !== eh || M[36] !== F ? (e = (0, o.jsx)(L, {
                        mountId: et,
                        initialNavigation: er,
                        snapshot: F,
                        setClientCovered: eh
                    }, et), M[33] = er, M[34] = et, M[35] = eh, M[36] = F, M[37] = e) : e = M[37], eP = e
                }
            }
            let eI = V && null != F ? ex : void 0;
            !1 !== M[38] ? (p = (0, u.b)("relative flex min-h-0 flex-1 flex-col", !1), M[38] = !1, M[39] = p) : p = M[39];
            let ew = !eo,
                ej = eo ? void 0 : "true",
                ey = ee.invalidated || ev || ed ? null : Q;
            M[40] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, o.jsx)(d.a, {
                fillParent: !0,
                delay: !1,
                debugName: "PageEditor"
            }), M[40] = b) : b = M[40], M[41] !== O ? (f = (0, o.jsx)(s.Suspense, {
                fallback: b,
                children: O
            }), M[41] = O, M[42] = f) : f = M[42], M[43] !== ey || M[44] !== f ? (h = (0, o.jsx)(k.b, {
                value: ey,
                children: f
            }), M[43] = ey, M[44] = f, M[45] = h) : h = M[45], M[46] !== et || M[47] !== h ? (C = (0, o.jsx)(k.a, {
                value: et,
                children: h
            }), M[46] = et, M[47] = h, M[48] = C) : C = M[48], M[49] !== ew || M[50] !== ej || M[51] !== C ? (P = (0, o.jsx)("div", {
                className: "flex min-h-0 flex-1 flex-col",
                inert: ew,
                "aria-hidden": ej,
                children: C
            }), M[49] = ew, M[50] = ej, M[51] = C, M[52] = P) : P = M[52];
            let ek = V ? D.a.PageSnapshotCover : "inset-0";
            return M[53] !== ek ? (y = (0, u.b)("pointer-events-none absolute flex min-h-0 flex-col", ek), M[53] = ek, M[54] = y) : y = M[54], M[55] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, o.jsx)("div", {
                ref: U,
                className: "pointer-events-auto shrink-0"
            }), M[55] = z) : z = M[55], M[56] !== eP ? (N = (0, o.jsx)("div", {
                className: "relative min-h-0 flex-1",
                children: eP
            }), M[56] = eP, M[57] = N) : N = M[57], M[58] !== y || M[59] !== N ? (B = (0, o.jsxs)("div", {
                className: y,
                children: [z, N]
            }), M[58] = y, M[59] = N, M[60] = B) : B = M[60], M[61] !== eI || M[62] !== p || M[63] !== P || M[64] !== B ? (q = (0, o.jsxs)("div", {
                ref: eI,
                className: p,
                children: [P, B]
            }), M[61] = eI, M[62] = p, M[63] = P, M[64] = B, M[65] = q) : q = M[65], q
        }

        function T(e) {
            let a, t, r = (0, n.c)(12),
                {
                    mountId: i,
                    initialNavigation: s,
                    visible: l,
                    setClientCovered: d,
                    onRemove: c,
                    children: m
                } = e,
                u = void 0 !== s && s;
            r[0] !== u || r[1] !== i || r[2] !== c || r[3] !== d || r[4] !== l ? (a = e => {
                if (null != e) return d(i, l), () => {
                    l && u && (0, y.e)(), d(i, !1), l && c?.(e)
                }
            }, r[0] = u, r[1] = i, r[2] = c, r[3] = d, r[4] = l, r[5] = a) : a = r[5];
            let g = a,
                p = l ? "covered" : "uncovered",
                b = !l,
                f = l || void 0,
                v = l ? m : null;
            return r[6] !== g || r[7] !== p || r[8] !== b || r[9] !== f || r[10] !== v ? (t = (0, o.jsx)("div", {
                ref: g,
                className: "pointer-events-auto absolute inset-0 overflow-auto bg-surface",
                hidden: b,
                "data-page-ssr-snapshot": f,
                children: v
            }, p), r[6] = g, r[7] = p, r[8] = b, r[9] = f, r[10] = v, r[11] = t) : t = r[11], t
        }

        function L(e) {
            let a, t, d, u, g, p, v, h, x = (0, n.c)(33),
                {
                    mountId: P,
                    initialNavigation: j,
                    snapshot: y,
                    setClientCovered: _
                } = e,
                S = (0, i.y)(I.a),
                z = (0, s.useRef)(null),
                {
                    pageId: L
                } = (0, r.cb)(),
                B = (0, i.z)(l.f),
                q = (0, i.z)(l.j);
            x[0] !== P || x[1] !== y.accountId || x[2] !== y.pageId || x[3] !== y.userId ? (a = {
                mountId: P,
                pageId: y.pageId,
                accountId: y.accountId,
                userId: y.userId
            }, x[0] = P, x[1] = y.accountId, x[2] = y.pageId, x[3] = y.userId, x[4] = a) : a = x[4];
            let M = (0, i.x)(k.e, a),
                F = L !== y.pageId || B !== y.accountId || q !== y.userId || M?.failed === !0,
                [A, R] = (0, s.useState)(!1),
                $ = null != M && !M.failed && M.sequence >= y.throughSequence;
            !A && $ && R(!0);
            let E = !F && !A && !$;
            x[5] !== P || x[6] !== S || x[7] !== y.accountId || x[8] !== y.pageId || x[9] !== y.throughSequence || x[10] !== y.userId ? (t = e => {
                let a = (0, b.d)(`page://${y.pageId}${e.ownerDocument.defaultView?.location.hash??""}`);
                if (a?.kind === "page" && null != a.blockId) return;
                let t = S.get(k.e, {
                    mountId: P,
                    pageId: y.pageId,
                    accountId: y.accountId,
                    userId: y.userId
                });
                !t?.failed && null != t && t.sequence >= y.throughSequence && S.get(l.f) === y.accountId && S.get(l.j) === y.userId && t.restoreScroll?.(e.scrollTop)
            }, x[5] = P, x[6] = S, x[7] = y.accountId, x[8] = y.pageId, x[9] = y.throughSequence, x[10] = y.userId, x[11] = t) : t = x[11];
            let O = (0, w.a)(t);
            return x[12] !== j || x[13] !== y.pageId || x[14] !== E ? (d = E && (0, o.jsx)(N, {
                pageId: y.pageId,
                content: z,
                initialNavigation: j
            }), x[12] = j, x[13] = y.pageId, x[14] = E, x[15] = d) : d = x[15], x[16] !== y.title ? (u = y.title || (0, o.jsx)(f.a, {
                ...C.c.untitled
            }), x[16] = y.title, x[17] = u) : u = x[17], x[18] !== u ? (g = (0, o.jsx)("h1", {
                className: `${D.a.PageReadingColumn} ${D.a.PageTitle} font-semibold break-words text-default`,
                children: u
            }), x[18] = u, x[19] = g) : g = x[19], x[20] !== y.html ? (p = (0, o.jsx)("div", {
                "data-page-document-selection": !0,
                children: (0, o.jsx)("div", {
                    className: `${c.a.root} ${D.a.PageDocumentTheme} px-0`,
                    style: m.a,
                    children: (0, o.jsx)("div", {
                        ref: z,
                        className: `${c.a.content} ${D.a.PageDocument} ${D.a.PagePreview}`,
                        "data-page-static-preview": !0,
                        dangerouslySetInnerHTML: {
                            __html: y.html
                        }
                    })
                })
            }), x[20] = y.html, x[21] = p) : p = x[21], x[22] !== g || x[23] !== p ? (v = (0, o.jsxs)("div", {
                className: `${D.a.PageContent} pt-10 pb-panel`,
                children: [g, p]
            }), x[22] = g, x[23] = p, x[24] = v) : v = x[24], x[25] !== j || x[26] !== P || x[27] !== O || x[28] !== _ || x[29] !== d || x[30] !== v || x[31] !== E ? (h = (0, o.jsxs)(T, {
                mountId: P,
                initialNavigation: j,
                visible: E,
                setClientCovered: _,
                onRemove: O,
                children: [d, v]
            }), x[25] = j, x[26] = P, x[27] = O, x[28] = _, x[29] = d, x[30] = v, x[31] = E, x[32] = h) : h = x[32], h
        }

        function N(e) {
            let a, t, r, i = (0, n.c)(9),
                {
                    pageId: l,
                    content: d,
                    initialNavigation: c
                } = e,
                m = (0, s.useRef)(void 0);
            return i[0] !== l ? (a = () => {
                m.current = h.b.getDebugLoad(l)?.browserFirstContent, m.current?.observeDocumentType("page")
            }, i[0] = l, i[1] = a) : a = i[1], i[2] !== d.current || i[3] !== c || i[4] !== l ? (t = () => {
                if (d.current?.querySelector('[elementtiming="codex-page-ssr-content"]') == null) return;
                c && (0, y.d)();
                let e = m.current ?? h.b.getDebugLoad(l)?.browserFirstContent;
                e?.observeDocumentType("page"), e?.contentVisible()
            }, i[2] = d.current, i[3] = c, i[4] = l, i[5] = t) : t = i[5], i[6] !== a || i[7] !== t ? (r = (0, o.jsx)(P.a, {
                requireVisibleAtPaint: !0,
                onCommit: a,
                onPaint: t
            }), i[6] = a, i[7] = t, i[8] = r) : r = i[8], r
        }
        var B = t("M2H2"),
            q = t("C8z7"),
            M = t("aFW8"),
            F = t("vnV1"),
            A = t("IeFV"),
            R = t("OMIV"),
            $ = t("hC2y"),
            E = t("AXDI"),
            O = (0, r.hb)(function() {
                let e, a, t, c, m, u, g, p, b = (0, n.c)(40),
                    f = (0, i.y)(I.a),
                    h = (0, r.Y)(),
                    {
                        pathname: x
                    } = h,
                    {
                        pageId: C
                    } = (0, r.cb)(),
                    P = (0, r.X)(),
                    w = "inAppOpen" in P && P.inAppOpen,
                    j = (0, i.z)(B.a),
                    y = (0, i.z)(l.f),
                    k = (0, i.z)(l.j),
                    D = (0, i.z)(l.k),
                    _ = (0, i.z)(l.h);
                b[0] !== y || b[1] !== _ || b[2] !== D || b[3] !== k ? (e = JSON.stringify([y, k, D, _]), b[0] = y, b[1] = _, b[2] = D, b[3] = k, b[4] = e) : e = b[4];
                let S = e;
                b[5] !== w || b[6] !== j || b[7] !== h || b[8] !== f ? (a = () => {
                    let e = (0, A.a)(h),
                        a = w && j && null != e ? (0, q.a)(f, document, e) : void 0;
                    return {
                        preparation: a,
                        snapshot: a?.takeSnapshot() ?? null
                    }
                }, b[5] = w, b[6] = j, b[7] = h, b[8] = f, b[9] = a) : a = b[9];
                let T = a;
                b[10] !== T || b[11] !== S || b[12] !== C ? (t = () => ({
                    pageId: C,
                    actor: S,
                    ...T()
                }), b[10] = T, b[11] = S, b[12] = C, b[13] = t) : t = b[13];
                let [L, N] = (0, s.useState)(t), O = L;
                if (L.pageId !== C || L.actor !== S) {
                    let e, a;
                    b[14] !== T || b[15] !== L.pageId || b[16] !== C ? (e = L.pageId !== C ? T() : {
                        preparation: void 0,
                        snapshot: null
                    }, b[14] = T, b[15] = L.pageId, b[16] = C, b[17] = e) : e = b[17], b[18] !== S || b[19] !== C || b[20] !== e ? (a = {
                        pageId: C,
                        actor: S,
                        ...e
                    }, b[18] = S, b[19] = C, b[20] = e, b[21] = a) : a = b[21], N(O = a)
                }
                let V = w ? O.snapshot : P.spacePageSnapshot,
                    W = w || P.nonblockingSsr,
                    H = (0, i.x)(v.B, x),
                    Q = (0, i.z)(v.v),
                    U = (0, i.x)(R.d, "4063423961");
                b[22] === Symbol.for("react.memo_cache_sentinel") ? (c = {
                    enabled: !1
                }, b[22] = c) : c = b[22];
                let X = (0, i.z)(F.d, c);
                b[23] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, o.jsx)(d.a, {
                    fillParent: !0,
                    delay: !1
                }), b[23] = m) : m = b[23], b[24] !== H ? (u = (0, o.jsx)(E.a, {
                    fallback: m,
                    children: H ? (0, o.jsx)(M.b, {
                        children: (0, o.jsx)(r.m, {})
                    }) : (0, o.jsx)($.e, {
                        allowLocal: !0
                    })
                }), b[24] = H, b[25] = u) : u = b[25];
                let G = u,
                    J = w ? O.preparation : void 0,
                    K = w ? C : void 0;
                return b[26] !== U || b[27] !== w || b[28] !== j || b[29] !== h || b[30] !== Q || b[31] !== X ? (g = (!w || j && null != (0, A.a)(h)) && "disabled" !== Q && (!U || null == X.error && X.data?.status !== "age_restricted"), b[26] = U, b[27] = w, b[28] = j, b[29] = h, b[30] = Q, b[31] = X, b[32] = g) : g = b[32], b[33] !== G || b[34] !== W || b[35] !== V || b[36] !== J || b[37] !== K || b[38] !== g ? (p = (0, o.jsx)(z, {
                    snapshot: V,
                    preparation: J,
                    nonblocking: W,
                    openIdentity: K,
                    enabled: g,
                    children: G
                }), b[33] = G, b[34] = W, b[35] = V, b[36] = J, b[37] = K, b[38] = g, b[39] = p) : p = b[39], p
            });
        let V = e => {
            let {
                currentParams: a,
                nextParams: t,
                defaultShouldRevalidate: r
            } = e;
            return a.pageId !== t.pageId || r
        }
    }),
    msAz: (function(e, a) {
        a.a = {
            PageContent: "PageContent-kBHDbu",
            pageContent: "PageContent-kBHDbu",
            PageDocument: "PageDocument-xcjcX8",
            pageDocument: "PageDocument-xcjcX8",
            PageSnapshotCover: "PageSnapshotCover-C_r466",
            pageSnapshotCover: "PageSnapshotCover-C_r466",
            PageReadingWidthMeasure: "PageReadingWidthMeasure-ssFuf9",
            pageReadingWidthMeasure: "PageReadingWidthMeasure-ssFuf9",
            PageDocumentEnd: "PageDocumentEnd-x1pPbt",
            pageDocumentEnd: "PageDocumentEnd-x1pPbt",
            PageDocumentGrid: "PageDocumentGrid-dPPMDP",
            pageDocumentGrid: "PageDocumentGrid-dPPMDP",
            PageDocumentTheme: "PageDocumentTheme-LGlBUd",
            pageDocumentTheme: "PageDocumentTheme-LGlBUd",
            PageReadingColumn: "PageReadingColumn-izakcl",
            pageReadingColumn: "PageReadingColumn-izakcl",
            PageImageLift: "PageImageLift-FIiTnL",
            pageImageLift: "PageImageLift-FIiTnL",
            PageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            pageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            PageControlFrame: "PageControlFrame-QLBvFz",
            pageControlFrame: "PageControlFrame-QLBvFz",
            PageActiveBlockHandle: "PageActiveBlockHandle-icbfqW",
            pageActiveBlockHandle: "PageActiveBlockHandle-icbfqW",
            PageDisclosureControl: "PageDisclosureControl-eBxfK0",
            pageDisclosureControl: "PageDisclosureControl-eBxfK0",
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
            "page-image-caret-blink": "page-image-caret-blink-sCb03h",
            pageImageCaretBlink: "page-image-caret-blink-sCb03h",
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
            a: () => r
        });
        let r = {
            content: "content-xaiQhS",
            page: "page-g4Dmdq",
            root: "editor-jMsqTn",
            tableFloatingUi: "tableFloatingUi-Q6FLpM"
        }
    }),
    LpCf: (function(e, a, t) {
        t.d(a, {}, {
            a: {
                "--oai-wb-spacing": "var(--spacing,0.25rem)",
                "--oai-wb-text-primary": "var(--wb-text-primary,var(--color-token-text-primary,var(--text-primary,#0d0d0d)))",
                "--oai-wb-text-secondary": "var(--wb-text-secondary,var(--color-token-text-secondary,var(--text-secondary,#5d5d5d)))",
                "--oai-wb-text-tertiary": "var(--wb-text-tertiary,var(--color-token-text-tertiary,var(--text-tertiary,#8f8f8f)))",
                "--oai-wb-surface-primary": "var(--wb-surface-primary,var(--color-token-main-surface-primary,var(--main-surface-primary,#fff)))",
                "--oai-wb-surface-secondary": "var(--wb-surface-secondary,var(--color-token-bg-tertiary,var(--main-surface-secondary,#f5f5f5)))",
                "--oai-wb-interactive-secondary-hover": "var(--wb-interactive-secondary-hover,var(--color-token-interactive-bg-secondary-hover,var(--oai-wb-surface-secondary)))",
                "--oai-wb-border": "var(--wb-border,var(--color-token-border,var(--border-light,rgb(0 0 0/8%))))",
                "--oai-wb-border-hover": "var(--wb-border-hover,var(--color-token-border-default,var(--border-medium,rgb(0 0 0/12%))))",
                "--oai-wb-divider": "var(--wb-divider,var(--color-token-border-light,var(--border-light,rgb(0 0 0/5%))))",
                "--oai-wb-focus": "var(--wb-focus,var(--color-token-focus-border,var(--border-strong,#5b9dd9)))",
                "--oai-wb-control-border": "var(--wb-control-border,var(--interactive-border-focus,var(--oai-wb-focus)))",
                "--oai-wb-entity-accent": "var(--wb-entity-accent,var(--theme-entity-accent,var(--oai-wb-accent)))",
                "--oai-wb-accent": "var(--wb-accent,var(--interactive-label-accent-default,#0285ff))",
                "--oai-wb-on-accent": "var(--wb-on-accent,var(--bg-primary,#fff))",
                "--oai-wb-interactive-background": "var(--wb-interactive-background,var(--interactive-bg-accent-default,color-mix(in srgb,#0285ff 12%,transparent)))",
                "--oai-wb-selection": "var(--wb-selection,var(--theme-user-selection-bg,var(--selection,#93c5fd)))",
                "--oai-wb-radius": "var(--wb-radius,1.5rem)",
                "--oai-wb-radius-sm": "var(--wb-radius-sm,0.5rem)",
                "--oai-wb-shadow": "var(--wb-shadow,0 4px 80px rgb(0 0 0/2%))",
                "--oai-wb-shadow-lg": "var(--wb-shadow-lg,0 10px 30px rgb(0 0 0/12%))",
                "--oai-wb-font-sans": "var(--wb-font-sans,var(--font-sans,sans-serif))",
                "--oai-wb-font-mono": "var(--wb-font-mono,var(--font-mono,monospace))",
                "--oai-wb-font-size": "var(--wb-font-size,0.875rem)",
                "--oai-wb-shimmer-dark-contrast": "var(--wb-shimmer-dark-contrast,var(--oai-wb-text-tertiary))",
                "--oai-wb-shimmer-dark-secondary": "var(--wb-shimmer-dark-secondary,var(--oai-wb-text-tertiary))"
            }
        })
    }),
    YCKz: (function(e, a, t) {
        var r = t("BolX"),
            o = t("zd8w"),
            n = t("OWtl");
        let i = (0, o.createContext)(null),
            s = (0, o.createContext)(null),
            l = (0, r.v)(n.a, e => null, void 0, {
                autoDispose: !0
            }),
            d = (0, r.v)(n.a, e => !1, void 0, {
                autoDispose: !0
            }),
            c = (0, r.v)(n.a, e => null == e, void 0, {
                autoDispose: !0
            });
        t.d(a, {}, {
            a: i,
            b: s,
            c: d,
            d: c,
            e: l
        })
    }),
    EBQV: (function(a) {
        a.exports = e.ir("/cdn/assets/dotnet.js").then(function(e) {
            return e
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.516c6a4677.js";
import * as a from "./418851.8cdff597ce.js";
e.C(a);
import * as t from "./109308.fbb414d4aa.js";
e.C(t);
import * as r from "./399565.a7f9c29dec.js";
e.C(r);
import * as o from "./257798.0b3d6025cd.js";
e.C(o);
import * as n from "./153380.6675e448cd.js";
e.C(n);
import * as i from "./617936.510230e136.js";
e.C(i);
import * as s from "./807489.a027e374ea.js";
e.C(s);
import * as l from "./337882.c2f7cf8187.js";
e.C(l);
import * as d from "./955979.24c51c90c6.js";
e.C(d);
import * as c from "./646436.c733a3d665.js";
e.C(c);
import * as m from "./7078.c424185282.js";
e.C(m);
import * as u from "./200429.ef6ceeb78d.js";
e.C(u);
import * as g from "./698524.fd3e996752.js";
e.C(g);
import * as p from "./956483.abe9885def.js";
e.C(p);
import * as b from "./87162.29ee0bd2a9.js";
e.C(b);
import * as f from "./396705.c39944bbf2.js";
e.C(f);
import * as v from "./155568.7bbfb72b85.js";
e.C(v);
import * as h from "./731863.8b87e9728a.js";
e.C(h);
import * as x from "./767086.6da4be4bcc.js";
e.C(x);
import * as C from "./76629.1ccd088209.js";
e.C(C);
import * as P from "./514085.2b0855224a.js";
e.C(P);
import * as I from "./204542.555643bfb3.js";
e.C(I);
import * as w from "./982651.7bfd071e83.js";
e.C(w);
import * as j from "./673108.95021ed52b.js";
e.C(j);
import * as y from "./487481.dd23dcfc39.js";
e.C(y);
import * as k from "./229522.7430726c37.js";
e.C(k);
import * as D from "./390575.353218f3fd.js";
e.C(D);
import * as _ from "./353032.1ea521a002.js";
e.C(_);
import * as S from "./637885.5271cdd835.js";
e.C(S);
import * as z from "./226913.b323f04fd6.js";
e.C(z);
import * as T from "./902158.5a4b6c2c66.js";
e.C(T);
import * as L from "./787702.2653fa3b05.js";
e.C(L);
var N = e(e.s = "lOPI"),
    B = N.a,
    q = N.b;
export {
    B as
    default, q as shouldRevalidate
};