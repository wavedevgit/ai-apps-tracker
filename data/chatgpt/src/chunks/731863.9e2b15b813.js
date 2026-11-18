export const __rspack_esm_ids = [731863];
export const __webpack_modules__ = {
    JwRk: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            r = n("Q840"),
            l = n("Bbed"),
            o = n("e1xH"),
            s = n("IH4l"),
            u = n("GbEU"),
            d = n("pjjl"),
            c = n("vlYr"),
            p = n("HbPh");
        let g = (0, l.a)(async () => (await n.e(373784).then(n.bind(n, "Qswu"))).PageMovePollingObserver),
            m = (0, l.a)(async () => (await n.e(353533).then(n.bind(n, "XVyS"))).PageArchiveRecovery),
            f = (0, l.a)(async () => (await n.e(803158).then(n.bind(n, "IJc3"))).PagesUpdatesBridge, {
                propagateLoadError: !0
            });

        function h(e) {
            return (0, i.jsx)(g, {
                tracked: e
            }, e.preview.operationId)
        }

        function _(e) {
            return (0, i.jsx)(p.a, {
                ...e
            }, JSON.stringify([e.accountId, e.userId, e.operationId]))
        }

        function v(e) {
            return (0, i.jsx)(d.a, {
                ...e
            }, e.id)
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, d, p = (0, a.c)(11),
                    g = (0, r.z)(o.pagesEnabled$),
                    b = (0, r.z)(s.a),
                    y = (0, r.z)(c.a),
                    I = (0, r.z)(u.a);
                return p[0] !== I ? (t = I.map(v), p[0] = I, p[1] = t) : t = p[1], p[2] !== y ? (n = y.map(_), p[2] = y, p[3] = n) : n = p[3], p[4] !== g || p[5] !== b ? (l = g ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {}), (0, i.jsx)(f, {})]
                }) : b.map(h), p[4] = g, p[5] = b, p[6] = l) : l = p[6], p[7] !== t || p[8] !== n || p[9] !== l ? (d = (0, i.jsxs)(i.Fragment, {
                    children: [t, n, l]
                }), p[7] = t, p[8] = n, p[9] = l, p[10] = d) : d = p[10], d
            }
        })
    }),
    ra6V: (function(e, t, n) {
        var i = n("Q840"),
            a = n("OWtl");
        let r = (0, i.v)(a.a, e => !1);
        n.d(t, {}, {
            a: r
        })
    }),
    Rw2H: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            r = n("i5ac"),
            l = n.n(r),
            o = n("Q840"),
            s = n("G4E3"),
            u = n("Wf1j"),
            d = n("Qgfj"),
            c = n("Cslg"),
            p = n("iiZm"),
            g = n("bf6R"),
            m = n("OWtl"),
            f = n("rpnz"),
            h = n("e1xH"),
            _ = n("vnV1"),
            v = n("ELpK"),
            b = n("hZNe"),
            y = n("tv8P"),
            I = n("VUkV"),
            C = n("kTTh");

        function E(e) {
            return {
                pageId: e.root_page_id,
                space: e,
                title: e.name.trim() || e.id,
                detail: null
            }
        }

        function P(e) {
            return null == e.deleted_at
        }

        function A() {}

        function w(e) {
            return e.root_page_id
        }

        function T(e) {
            let {
                defaultIconName: t,
                detail: n,
                documentType: a,
                namespace: r,
                symbol: l,
                pageId: o,
                space: u,
                title: d
            } = e, c = (0, s.a)({
                kind: "page",
                id: o
            }), p = null == u ? void 0 : (0, i.jsx)(b.a, {
                spaceId: u.id,
                size: "leading"
            });
            return {
                key: c,
                ariaLabel: [d, n].filter(e => null != e).join(" "),
                label: null == u ? (0, C.a)(d, void 0, void 0, l).title : d,
                labelElement: null != u ? void 0 : (0, i.jsx)(I.a, {
                    pageId: o,
                    defaultIconName: t,
                    documentType: a,
                    namespace: r,
                    symbol: l,
                    title: d,
                    children: e => {
                        let {
                            title: t
                        } = e;
                        return t
                    }
                }),
                detail: n,
                searchTerms: null == n ? [d] : [d, n],
                iconElement: p ?? (0, i.jsx)(I.a, {
                    pageId: o,
                    defaultIconName: t,
                    documentType: a,
                    namespace: r,
                    symbol: l,
                    title: d,
                    children: e => {
                        let {
                            icon: t
                        } = e;
                        return t
                    }
                }),
                type: "mention",
                insertMention: e => {
                    let {
                        composerController: t,
                        mentionState: n
                    } = e;
                    t.insertPageReferenceMention({
                        path: c,
                        spaceId: u?.id,
                        title: d
                    }, n)
                }
            }
        }

        function k(e, t, n) {
            let i = t.trim();
            if (0 === i.length) return e.slice(0, n).map(T);
            let a = (0, p.a)(i);
            return e.map((e, t) => ({
                item: e,
                index: t,
                score: Math.max(a((0, C.b)(e.title).title), a(e.title), null == e.detail ? 0 : a(e.detail))
            })).filter(e => e.score > 0).sort((e, t) => t.score - e.score || e.index - t.index).slice(0, 20).map(e => {
                let {
                    item: t
                } = e;
                return T(t)
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, r, s, p, b, I, C, S, N = (0, a.c)(88),
                    {
                        enabled: R,
                        query: M,
                        expanded: O,
                        category: L,
                        searchQuery: D
                    } = e,
                    x = void 0 !== O && O,
                    U = void 0 === D ? M : D,
                    G = (0, o.y)(m.a),
                    q = (0, u.a)(),
                    F = (0, o.z)(h.pagesEnabled$),
                    K = (0, o.z)(c.f),
                    H = !0 === (0, o.z)(!!(void 0 === R || R) && !!F && null != K && _.c),
                    B = H && "spaces" !== L;
                N[0] !== B ? (t = {
                    enabled: B
                }, N[0] = B, N[1] = t) : t = N[1];
                let {
                    data: j,
                    isFetching: z,
                    isError: W,
                    refetch: V
                } = (0, o.z)(y.spacePagesQuery$, t), Y = (0, o.z)(B ? y.spacePagesHasMore$ : null);
                N[2] !== H ? (n = {
                    enabled: H
                }, N[2] = H, N[3] = n) : n = N[3];
                let {
                    data: Q,
                    isLoading: X,
                    isError: $
                } = (0, o.z)(y.spacesQuery$, n), Z = (0, o.z)(B ? y.visibleSpacePages$ : null) ?? j;
                N[4] !== U ? (i = U.trim(), N[4] = U, N[5] = i) : i = N[5];
                let J = i;
                N[6] !== B || N[7] !== M ? (r = B && M.trim().length >= 2, N[6] = B, N[7] = M, N[8] = r) : r = N[8];
                let ee = r,
                    et = ee && J.length >= 2;
                N[9] !== et ? (s = {
                    enabled: et
                }, N[9] = et, N[10] = s) : s = N[10];
                let {
                    data: en,
                    isFetching: ei,
                    isError: ea
                } = (0, o.x)(v.b, J, s);
                if (!H) return null;
                N[11] !== M ? (p = M.trim(), N[11] = M, N[12] = p) : p = N[12];
                let er = J === p,
                    el = X || (ee ? !er || ei : z);
                N[13] !== Q?.items || N[14] !== Q?.items.map ? (b = new Set(Q?.items.map(w)), N[13] = Q?.items, N[14] = Q?.items.map, N[15] = b) : b = N[15];
                let eo = b;
                N[16] !== M ? (I = M.trim(), N[16] = M, N[17] = I) : I = N[17];
                let es = I.length > 0,
                    eu = x ? 20 : 5;
                if (N[18] !== z || N[19] !== ee || N[20] !== W || N[21] !== Y || N[22] !== x || N[23] !== es || N[24] !== B || N[25] !== eu || N[26] !== q || N[27] !== er || N[28] !== Z?.items || N[29] !== M || N[30] !== V || N[31] !== G || N[32] !== en || N[33] !== eo || N[34] !== Q) {
                    let e, t, n = new Map;
                    for (let t of (N[36] !== B || N[37] !== Z?.items || N[38] !== Q ? (e = B && null != Q ? Z?.items ?? [] : [], N[36] = B, N[37] = Z?.items, N[38] = Q, N[39] = e) : e = N[39], e))
                        if (!(eo.has(t.page_id) || (0, f.b)(t.page_id)) && !1 !== t.access.can_read && null == t.deleted_at && (n.set(t.page_id, t), !es && n.size === eu)) break;
                    N[40] !== Q?.items ? (t = e => {
                        var t, n;
                        let i;
                        return t = e, n = Q?.items, i = n?.find(e => e.id === t.drive_space_id), {
                            documentType: t.document_type,
                            namespace: t.namespace,
                            symbol: t.symbol,
                            pageId: t.page_id,
                            title: t.title?.trim() || t.page_id,
                            detail: i?.name ?? (null != t.parent && "title" in t.parent ? t.parent.title : null)
                        }
                    }, N[40] = Q?.items, N[41] = t) : t = N[41];
                    let i = k(Array.from(n.values(), t), M, eu),
                        a = ee && er && null != Q ? en?.items.flatMap(e => {
                            let {
                                source_type: t,
                                payload: i,
                                title: a
                            } = e;
                            if ("space" !== t || "space_page" !== i.kind || eo.has(i.page_id)) return [];
                            let {
                                page_id: r,
                                space_id: l
                            } = i, o = Q?.items.find(e => e.id === l), s = n.get(r);
                            return [T({
                                defaultIconName: i.default_symbol?.value,
                                documentType: i.document_type ?? s?.document_type,
                                namespace: s?.namespace,
                                symbol: i.symbol ?? s?.symbol,
                                pageId: r,
                                title: a.trim() || r,
                                detail: o?.name ?? null
                            })]
                        }) : void 0;
                    if (C = l()([...a ?? [], ...i], "key").slice(0, 20), B && !es && C.length < 20 && (x || C.length < eu) && (Y || W)) {
                        let e;
                        N[42] !== Y || N[43] !== V || N[44] !== G ? (e = () => {
                            (Y ? (0, y.loadMoreSpacePages)(G) : V()).catch(A)
                        }, N[42] = Y, N[43] = V, N[44] = G, N[45] = e) : e = N[45], C.push({
                            key: "pages-load-more",
                            label: W ? q.formatMessage({
                                id: "space.list.retryPersonalPages",
                                defaultMessage: "Retry pages"
                            }) : q.formatMessage({
                                id: "space.list.loadMore",
                                defaultMessage: "Load more"
                            }),
                            detail: null,
                            disabled: z,
                            type: "submenu",
                            submenu: {
                                kind: "at-mention-category",
                                category: "pages"
                            },
                            onOpen: e
                        })
                    }
                    N[18] = z, N[19] = ee, N[20] = W, N[21] = Y, N[22] = x, N[23] = es, N[24] = B, N[25] = eu, N[26] = q, N[27] = er, N[28] = Z?.items, N[29] = M, N[30] = V, N[31] = G, N[32] = en, N[33] = eo, N[34] = Q, N[35] = C
                } else C = N[35];
                let ed = $ || ee && er && ea;
                if (N[46] !== X || N[47] !== ee || N[48] !== L || N[49] !== x || N[50] !== ed || N[51] !== es || N[52] !== B || N[53] !== eu || N[54] !== q || N[55] !== el || N[56] !== C || N[57] !== M || N[58] !== Q || N[59] !== $) {
                    let e = [];
                    if (B && (C.length > 0 || el || ed)) {
                        let t, n, i = null;
                        if (0 === C.length && !el && ed) {
                            let e;
                            N[61] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.e)({
                                id: "composer.atMentionList.pagesSearchFailed",
                                defaultMessage: "Couldn’t search Pages"
                            }), N[61] = e) : e = N[61], i = e
                        }
                        N[62] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, d.e)({
                            id: "composer.atMentionList.pages",
                            defaultMessage: "Pages"
                        }), N[62] = t) : t = N[62];
                        let a = ee ? "source-ranked" : void 0;
                        N[63] !== i || N[64] !== ed || N[65] !== el || N[66] !== C || N[67] !== t || N[68] !== a ? (n = {
                            id: "pages",
                            showTitle: !0,
                            title: t,
                            items: C,
                            queryMatchMode: a,
                            emptyState: i,
                            isError: ed,
                            isLoading: el
                        }, N[63] = i, N[64] = ed, N[65] = el, N[66] = C, N[67] = t, N[68] = a, N[69] = n) : n = N[69], e.push(n)
                    }
                    if ("pages" !== L) {
                        let t, n;
                        if (N[70] !== x || N[71] !== es || N[72] !== eu || N[73] !== q || N[74] !== M || N[75] !== Q) {
                            let e;
                            n = q.formatMessage({
                                id: "composer.atMentionList.spaces",
                                defaultMessage: "Spaces"
                            }), N[78] !== Q?.items ? (e = Q?.items ?? [], N[78] = Q?.items, N[79] = e) : e = N[79], t = k(e.filter(P).map(E), M, eu);
                            let i = es && n.toLocaleLowerCase().startsWith(M.trim().toLocaleLowerCase());
                            !x && (i || !es && (Q?.items.length ?? 0) > eu) && t.push({
                                key: "spaces-browse",
                                label: n,
                                detail: null,
                                icon: {
                                    16: g.ci,
                                    20: g.di
                                },
                                type: "submenu",
                                submenu: {
                                    kind: "at-mention-category",
                                    category: "spaces"
                                }
                            }), N[70] = x, N[71] = es, N[72] = eu, N[73] = q, N[74] = M, N[75] = Q, N[76] = t, N[77] = n
                        } else t = N[76], n = N[77];
                        if (t.length > 0 || X || $) {
                            let i, a;
                            N[80] !== $ ? (i = $ ? (0, d.e)({
                                id: "composer.atMentionList.spacesLoadFailed",
                                defaultMessage: "Couldn’t load Spaces"
                            }) : null, N[80] = $, N[81] = i) : i = N[81], N[82] !== X || N[83] !== t || N[84] !== $ || N[85] !== n || N[86] !== i ? (a = {
                                id: "spaces",
                                title: n,
                                showTitle: !0,
                                items: t,
                                isLoading: X,
                                isError: $,
                                emptyState: i
                            }, N[82] = X, N[83] = t, N[84] = $, N[85] = n, N[86] = i, N[87] = a) : a = N[87], e.push(a)
                        }
                    }
                    S = {
                        sections: e
                    }, N[46] = X, N[47] = ee, N[48] = L, N[49] = x, N[50] = ed, N[51] = es, N[52] = B, N[53] = eu, N[54] = q, N[55] = el, N[56] = C, N[57] = M, N[58] = Q, N[59] = $, N[60] = S
                } else S = N[60];
                return S
            }
        })
    }),
    O3ZQ: (function(e, t, n) {
        function i(e, t, n, i) {
            try {
                e.count("codex_pages", `view_${t}`, n), null != i && e.hist("codex_pages", `view_${t}_latency_ms`, n, Math.max(0, i))
            } catch {}
        }
        n.d(t, {}, {
            a: function(e) {
                let t = new Map,
                    n = () => {
                        for (let [n, a] of t) performance.now() - a.receivedAt >= 3e5 && (t.delete(n), i(e, "list_observation", {
                            renderer: a.renderer,
                            outcome: "expired"
                        }))
                    };
                return {
                    record: e => {
                        n();
                        let i = t.get(e.pageId);
                        if ((null == i || !(i.scheduledAt >= e.scheduledAt)) && (t.delete(e.pageId), t.set(e.pageId, {
                                ...e,
                                receivedAt: performance.now()
                            }), t.size > 50)) {
                            let e = t.keys().next().value;
                            null != e && t.delete(e)
                        }
                    },
                    observe: (a, r) => {
                        for (let [l, o] of(n(), t)) {
                            if (o.receivedAt > r) continue;
                            let n = a.items.find(e => e.id === l && "page" === e.library_artifact_type),
                                s = n?.updated_at == null ? 0 / 0 : Date.parse(n.updated_at),
                                u = "unobserved";
                            Number.isFinite(s) && (u = s >= o.scheduledAt ? "converged" : "stale"), i(e, "list_observation", {
                                renderer: o.renderer,
                                outcome: u
                            }, "converged" === u ? performance.now() - o.startedAt : void 0), "converged" === u && t.delete(l)
                        }
                    }
                }
            },
            b: i
        })
    }),
    WF9u: (function(e, t, n) {
        var i, a = n("cC4N"),
            r = n("tAfg"),
            l = n("ASxG"),
            o = n("VS5n"),
            s = n("EBvg");
        let u = (i = r.c, l.string().min(1).max(i).refine(e => new TextEncoder().encode(e).byteLength <= i, "Visualization HTML exceeds the maximum supported size")),
            d = l.string().trim().min(1).max(256);

        function c(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Visualization",
                n = t.replace(/\s+/gu, " ").replace(/[\\`*_[\]<>]/gu, "\\$&");
            return `![${n}](visualize:${s.a.parse(e)})`
        }

        function p(e) {
            if (!e.startsWith("visualize:")) return null;
            let t = o.c.safeParse(e.slice(10));
            return t.success ? t.data : null
        }

        function g(e) {
            if (!e.startsWith("visualize:")) return null;
            let t = s.a.safeParse(e.slice(10));
            return t.success ? t.data : null
        }

        function m(e) {
            let t = (0, a.a)(e),
                n = t.children[0];
            if (1 !== t.children.length || n?.type !== "paragraph" || 1 !== n.children.length) return null;
            let i = n.children[0];
            return i?.type === "image" ? g(i.url) : null
        }
        async function f(e, t) {
            let i = ["savings", "solar", "piano"].find(t => s.b[t] === e);
            if (null == i) return null;
            let {
                getWelcomeVisualizations: a
            } = await n.e(337184).then(n.bind(n, "mM51"));
            return u.parse(a(t)[i])
        }
        n.d(t, {
            a: () => r.c,
            b: () => c,
            c: () => m,
            d: () => u,
            e: () => g,
            f: () => s.a,
            g: () => p,
            h: () => d,
            i: () => f,
            j: () => s.b
        })
    }),
    dQ4w: (function(e, t, n) {
        var i = n("mDXq"),
            a = n("ASxG"),
            r = n("HGZz"),
            l = n("WF9u");
        let o = a.object({
                fileId: l.f,
                title: a.string()
            }),
            s = "data-page-visualization-file-id",
            u = "data-page-visualization-title";
        class d extends i.c {
            static proseMirrorNodeName() {
                return r.c
            }
            unistNodeName() {
                return r.c
            }
            unifiedInitializationHook(e) {
                return e.use(r.d)
            }
            proseMirrorNodeSpec() {
                return {
                    attrs: {
                        fileId: {
                            validate: e => {
                                l.f.parse(e)
                            }
                        },
                        title: {
                            default: "",
                            validate: "string"
                        },
                        geometry: {
                            default: null
                        }
                    },
                    atom: !0,
                    selectAsBlock: !0,
                    group: "block",
                    marks: "",
                    leafText: e => {
                        let {
                            fileId: t,
                            title: n
                        } = o.parse(e.attrs);
                        return (0, l.b)(t, n)
                    },
                    parseDOM: [{
                        tag: `div[${s}]`,
                        getAttrs: e => {
                            let t = o.safeParse({
                                fileId: e.getAttribute(s),
                                title: e.getAttribute(u) ?? ""
                            });
                            return !!t.success && t.data
                        }
                    }],
                    toDOM: e => {
                        let {
                            fileId: t,
                            title: n
                        } = o.parse(e.attrs);
                        return ["div", {
                            [s]: t,
                            [u]: n
                        }, (0, l.b)(t, n)]
                    }
                }
            }
            unistNodeToProseMirrorNodes(e) {
                let {
                    node: t,
                    schema: n,
                    attrs: i
                } = e;
                return t.type === r.c ? n.nodes[r.c].createChecked({
                    ...i,
                    fileId: t.fileId,
                    title: t.title
                }) : null
            }
            proseMirrorNodeToUnistNodes(e) {
                let {
                    fileId: t,
                    title: n
                } = o.parse(e.attrs);
                return [{
                    type: "paragraph",
                    children: [{
                        type: "image",
                        url: `visualize:${t}`,
                        alt: n
                    }]
                }]
            }
        }
        n.d(t, {
            a: () => r.c
        }, {
            b: function() {
                return new d
            },
            c: o
        })
    }),
    EBvg: (function(e, t, n) {
        var i = n("ASxG"),
            a = n("VS5n");
        let r = {
                savings: "page-asset:welcome-savings-v1",
                solar: "page-asset:welcome-solar-v1",
                piano: "page-asset:welcome-piano-v1"
            },
            l = i.union([a.c, i.enum(r)]);
        n.d(t, {}, {
            a: l,
            b: r
        })
    }),
    YF6h: (function(e, t, n) {
        var i = n("HFi9"),
            a = n.n(i),
            r = n("Q840"),
            l = n("DD2M"),
            o = n("ASxG"),
            s = n("OOaz"),
            u = n("dQRk"),
            d = n("kois"),
            c = n("vYWt"),
            p = n("rpnz"),
            g = n("tv8P"),
            m = n("OWtl"),
            f = n("tSEg"),
            h = n("eviP"),
            _ = n("kpIY"),
            v = n("Nwp9");
        let b = "page-work-companion-tasks-v1",
            y = o.record(o.string(), o.object({
                accountId: o.string(),
                pageId: o.string(),
                workspaceClientThreadId: o.string().optional(),
                conversationOrigin: o.literal("tpp").nullable().default("tpp"),
                conversationId: o.string().transform(s.c).nullable(),
                defaultConversationId: o.string().transform(s.c).nullable().optional(),
                relatedConversationIds: o.array(o.string().transform(s.c)).optional(),
                projectId: o.string().nullable().optional()
            })).catch({}),
            I = o.record(o.string(), o.unknown()).catch({}),
            C = (0, v.b)(b, y.parse(void 0), {
                coerceStoredValue: e => y.parse(e)
            }),
            E = "page-related-chats-v1",
            P = o.record(o.string(), o.object({
                accountId: o.string(),
                pageId: o.string(),
                conversationId: o.string().transform(s.c),
                conversationOrigin: o.literal("tpp").nullable(),
                activity: o.enum(["created", "opened"])
            })).catch({}),
            A = (0, v.b)(E, P.parse(void 0), {
                coerceStoredValue: e => P.parse(e)
            }),
            w = (0, r.c)(m.a, e => {
                let {
                    get: t
                } = e;
                return q(t(C), t(A))
            }),
            T = (0, r.u)(m.a, null),
            k = (0, r.c)(f.a, e => {
                let {
                    get: t,
                    scope: n
                } = e;
                return n.value.persistentWorkspace?.key === "/space" ? t(h.b)?.getSession(n)?.clientThreadId : void 0
            }),
            S = (0, r.d)(f.a, (e, t) => {
                let {
                    accountId: n,
                    pageId: i
                } = e, {
                    scope: a
                } = t;
                return null != n && null != x(a, n, i)
            }),
            N = (0, r.d)(f.a, (e, t) => {
                let {
                    accountId: n,
                    pageId: i,
                    conversationOrigin: a
                } = e, {
                    get: r,
                    scope: l
                } = t, o = "tpp" === a ? x(l, n, i) : O(l, n, i, null, r(k)), s = r(g.spacePageEditorId$, i), u = r(d.o), c = "tpp" === a ? u.get(JSON.stringify([n, s])) : void 0, p = (null == o ? void 0 : u.get(o[0])) ?? c, m = r(d.m), f = null != m && (null != o && o[0] === r(T) && m.pageOwnerKey === o[0] || null != c && c.conversationId === m.conversationId) ? m : p;
                return {
                    conversationId: f?.conversationId ?? o?.[1].conversationId ?? null,
                    projectId: f?.projectId ?? o?.[1].projectId ?? null,
                    title: f?.title ?? null
                }
            }),
            R = (0, r.d)(f.a, (e, t) => {
                let {
                    accountId: n,
                    pageId: i
                } = e, {
                    get: a
                } = t;
                if (null == n) return {
                    conversationId: null,
                    title: null
                };
                let {
                    conversationId: r,
                    title: l
                } = a(N, {
                    accountId: n,
                    pageId: i,
                    conversationOrigin: "tpp"
                });
                return {
                    conversationId: r,
                    title: a(u.eb, r) ?? l
                }
            }, {
                isEqual: (e, t) => e.conversationId === t.conversationId && e.title === t.title
            }),
            M = (0, r.d)(m.a, (e, t) => {
                let {
                    accountId: n,
                    pageId: i,
                    workspaceClientThreadId: a
                } = e, {
                    get: r
                } = t;
                return null != n && (r(d.o).has(JSON.stringify([n, i])) || null != a && Object.entries(r(w)).some(e => {
                    let [t, i] = e;
                    return i.accountId === n && i.workspaceClientThreadId === a && "tpp" === i.conversationOrigin && r(d.o).has(t)
                }))
            });

        function O(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "tpp",
                a = arguments.length > 4 ? arguments[4] : void 0,
                r = e.get(T),
                l = null == r ? void 0 : e.get(w)[r];
            return null != r && l?.accountId === t && (null == a ? null == l.workspaceClientThreadId && l.pageId === n : l.workspaceClientThreadId === a) && l.conversationOrigin === i ? [r, l] : void 0
        }

        function L(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "tpp",
                a = arguments.length > 4 ? arguments[4] : void 0,
                {
                    activate: r = !0,
                    projectId: o
                } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                s = G(),
                u = new Map(e.get(d.o)),
                c = e.get(d.m),
                p = {},
                g = new Set,
                m = null;
            for (let [r, l] of Object.entries(s))
                if (l.accountId === t && (null == a ? null == l.workspaceClientThreadId && l.pageId === n : l.workspaceClientThreadId === a) && l.conversationOrigin === i) {
                    for (let e of (m = m ?? U(l), l.relatedConversationIds ?? [])) g.add(e);
                    null != l.conversationId && g.add(l.conversationId), p[r] = null;
                    let t = u.get(r);
                    null != t && t.conversationId !== c?.conversationId && (0, d.n)(e, t), u.delete(r)
                } let f = (0, l.a)();
            return p[f] = {
                value: {
                    accountId: t,
                    pageId: n,
                    workspaceClientThreadId: a,
                    conversationId: null,
                    relatedConversationIds: [...g],
                    defaultConversationId: m,
                    conversationOrigin: i,
                    projectId: o
                }
            }, (0, _.t)(b, {
                entries: p,
                maxEntries: 500
            }), e.set(d.o, u), r && e.set(T, f), f
        }

        function D(e, t, n) {
            let i = new Map(e.get(d.o)),
                a = I.parse((0, _.k)(b)),
                r = {},
                l = G(),
                o = P.parse((0, _.k)(E));
            for (let [e, s] of((0, _.t)(E, {
                    entries: Object.fromEntries(Object.entries(o).filter(e => {
                        let [, i] = e;
                        return i.conversationId === t && (void 0 === n || i.conversationOrigin === n)
                    }).map(e => {
                        let [t, n] = e;
                        return [t, {
                            delete: !0,
                            expectedValue: n
                        }]
                    }))
                }), Object.entries(l))) {
                if (void 0 !== n && s.conversationOrigin !== n || s.conversationId !== t && !s.relatedConversationIds?.includes(t)) continue;
                let l = s.relatedConversationIds?.filter(e => e !== t) ?? [],
                    o = s.conversationId === t ? l[0] : s.conversationId,
                    u = i.get(e);
                r[e] = null == o && 0 === l.length && null == u ? {
                    delete: !0,
                    expectedValue: a[e]
                } : {
                    value: {
                        ...s,
                        conversationId: o ?? null,
                        defaultConversationId: U(s) === t ? null : U(s),
                        relatedConversationIds: l
                    },
                    expectedValue: a[e]
                }, u?.conversationId === t && i.delete(e)
            }(0, _.t)(b, {
                entries: r
            }), e.set(d.o, i)
        }

        function x(e, t, n) {
            let i = e.get(k),
                a = O(e, t, n, "tpp", i);
            if (null != a) return a;
            let r = Object.entries(e.get(w)).reverse();
            return (null == i ? void 0 : r.find(e => {
                let [, n] = e;
                return n.accountId === t && n.workspaceClientThreadId === i && "tpp" === n.conversationOrigin
            })) ?? r.find(e => {
                let [, i] = e;
                return i.accountId === t && i.pageId === n && null == i.workspaceClientThreadId && "tpp" === i.conversationOrigin
            })
        }

        function U(e) {
            return void 0 === e.defaultConversationId ? e.relatedConversationIds?.[0] ?? e.conversationId : e.defaultConversationId
        }

        function G() {
            return q(y.parse((0, _.k)(b)), P.parse((0, _.k)(E)))
        }

        function q(e, t) {
            let n = a()(Object.values(t), e => JSON.stringify([e.accountId, e.pageId, e.conversationOrigin]));
            return Object.fromEntries(Object.entries(e).map(e => {
                let [t, i] = e, a = n[JSON.stringify([i.accountId, i.pageId, i.conversationOrigin])] ?? [];
                return 0 === a.length ? [t, i] : [t, {
                    ...i,
                    relatedConversationIds: [...new Set([...a.filter(e => "created" === e.activity).reverse().map(e => e.conversationId), ...i.relatedConversationIds ?? [], ...a.map(e => e.conversationId)])]
                }]
            }))
        }
        n.d(t, {}, {
            a: function(e, t, n) {
                if (e.get(p.e, t).some(e => e.localPageId === n && null != e.serverPageId)) return;
                let i = JSON.stringify([t, n]),
                    a = e.get(d.o).get(i);
                if (null == a) return;
                let r = new Map(e.get(d.o));
                r.delete(i), e.set(d.o, r), e.get(d.m)?.conversationId === a.conversationId ? (0, d.a)(e) : (0, d.n)(e, a)
            },
            b: O,
            c: M,
            d: S,
            e: R,
            f: N,
            forgetPageWorkCompanionConversation: D,
            g: k,
            h: function(e, t, n, i, a) {
                let r = I.parse((0, _.k)(b)),
                    l = Object.entries(G()).find(n => {
                        let [, a] = n;
                        return a.accountId === e && a.pageId === t && a.conversationOrigin === i
                    }),
                    o = JSON.stringify([e, t, i, n]);
                (null == P.parse((0, _.k)(E))[o] || "created" === a) && (0, _.t)(E, {
                    entries: {
                        [o]: {
                            value: {
                                accountId: e,
                                pageId: t,
                                conversationOrigin: i,
                                conversationId: n,
                                activity: a
                            }
                        }
                    },
                    maxEntries: 500
                });
                let s = l?.[1].relatedConversationIds ?? [];
                if ("created" === a ? s[0] === n : s.includes(n)) return;
                let u = l?.[0] ?? JSON.stringify([e, t, i]),
                    d = l?.[1],
                    c = [...new Set([..."created" === a ? [n] : [], ...s, ...d?.conversationId ? [d.conversationId] : [], n])];
                (0, _.t)(b, {
                    entries: {
                        [u]: {
                            value: {
                                ...d,
                                accountId: e,
                                pageId: t,
                                conversationOrigin: i,
                                conversationId: d?.conversationId ?? n,
                                defaultConversationId: (null == d ? null : U(d)) ?? n,
                                relatedConversationIds: c
                            },
                            ...l ? {
                                expectedValue: r[u],
                                updateOnly: !0
                            } : {
                                createOnly: !0
                            }
                        }
                    },
                    maxEntries: 500
                })
            },
            i: L,
            j: function(e, t) {
                let {
                    makeDefault: n = !1
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, [i] = e, a = I.parse((0, _.k)(b)), r = G()[i];
                null != r && (0, _.t)(b, {
                    entries: {
                        [i]: {
                            value: {
                                ...r,
                                conversationId: t,
                                defaultConversationId: n ? t : U(r) ?? t,
                                relatedConversationIds: Array.from(new Set([...r.relatedConversationIds ?? [], ...null == r.conversationId ? [] : [r.conversationId], t]))
                            },
                            expectedValue: a[i],
                            updateOnly: !0
                        }
                    },
                    maxEntries: 500
                })
            },
            k: function(e, t) {
                let {
                    accountId: n,
                    pageId: i,
                    title: a,
                    conversationOrigin: r = "tpp",
                    workspaceClientThreadId: l,
                    restoreDefault: o = !1,
                    preserveSavedChat: s = !1,
                    serverConversationId: m
                } = t, f = (0, p.b)(i), h = f && null == l, v = JSON.stringify([n, e.get(g.spacePageEditorId$, i)]), y = e.get(d.m), C = e.get(c.c, i), E = C?.mode === "create" && "complete" !== C.phase ? C : null, P = null != E && y?.conversationId === E.conversationId ? y : void 0;
                null == P && (0, d.a)(e);
                let A = I.parse((0, _.k)(b)),
                    w = Object.entries(G()).reverse(),
                    k = h ? void 0 : w.find(e => {
                        let [, t] = e;
                        return t.accountId === n && (null == l ? null == t.workspaceClientThreadId && t.pageId === i : t.workspaceClientThreadId === l) && t.conversationOrigin === r
                    });
                if (!h && null == k && null != l) {
                    let e = w.find(e => {
                        let [, t] = e;
                        return t.accountId === n && t.pageId === i && null == t.workspaceClientThreadId && t.conversationOrigin === r
                    });
                    if (null != e) {
                        let [t, n] = e;
                        (0, _.t)(b, {
                            entries: {
                                [t]: {
                                    value: {
                                        ...n,
                                        workspaceClientThreadId: l
                                    },
                                    expectedValue: A[t],
                                    updateOnly: !0
                                }
                            },
                            maxEntries: 500
                        });
                        let i = G()[t];
                        i?.workspaceClientThreadId === l && (k = [t, i])
                    }
                }
                e.set(T, k?.[0] ?? null);
                let S = O(e, n, i, r, l);
                h || null != S || (L(e, n, i, r, l), S = O(e, n, i, r, l));
                let N = S?.[0] ?? v,
                    R = null == r ? void 0 : e.get(d.o).get(v),
                    M = P ?? (null != E && R?.conversationId === E.conversationId ? R : E?.draftSession),
                    x = M ?? (null == S ? void 0 : e.get(d.o).get(S[0])) ?? R,
                    q = m;
                void 0 === q && (q = o && null != S ? U(S[1]) : S?.[1].conversationId);
                let F = null == x ? null : e.get(u.j, x.conversationId);
                null == x || o && (x.hasConversation || x.preserveSavedChat && null != q) && null == M && x.conversationId !== q && (null == q || F !== q) ? null != q ? (0, d.h)(e, q, a, {
                    pageOwnerKey: N
                }) : (0, d.s)(e, {
                    pageOwnerKey: N,
                    projectId: S?.[1].projectId ?? null
                }) : ((0, d.p)(e, x.pageOwnerKey === N ? x : {
                    ...x,
                    pageOwnerKey: N
                }), (0, d.g)(e));
                let K = e.get(d.m);
                if (s && null != K && !K.preserveSavedChat && (0, d.p)(e, {
                        ...K,
                        preserveSavedChat: !0
                    }), f && N !== v) {
                    let t = e.get(d.m);
                    if (t?.pageOwnerKey === N) {
                        let n = new Map(e.get(d.o));
                        n.set(v, t), e.set(d.o, n)
                    }
                }
                if (!f && N !== v && null != r && e.get(d.o).has(v)) {
                    let t = new Map(e.get(d.o));
                    t.delete(v), e.set(d.o, t)
                }
                let H = e.get(d.m)?.conversationId,
                    B = null == r && null != H ? e.watch(t => {
                        let {
                            get: a
                        } = t, r = a(u.y, H);
                        if (("tpp" === r || "flora" === r) && e.get(d.m)?.conversationId === H) {
                            let t = a(u.j, H);
                            null != t && D(e, t, null);
                            let r = L(e, n, i, null, l);
                            (0, d.s)(e, {
                                pageOwnerKey: r,
                                projectId: null
                            })
                        }
                    }) : void 0;
                return () => {
                    if (B?.(), f && !e.get(d.o).has(v)) return;
                    let t = O(e, n, i, r, l),
                        a = e.get(d.m),
                        o = h ? v : t?.[0],
                        s = null == o ? null : e.get(d.o).get(o);
                    null != t && null != s && (0, _.t)(b, {
                        entries: {
                            [t[0]]: {
                                value: {
                                    ...t[1],
                                    projectId: e.get(u.T, s.conversationId) ?? s.projectId
                                },
                                updateOnly: !0
                            }
                        }
                    }), (!f || null == a || e.get(c.c, i)?.conversationId !== a.conversationId || (0, p.b)(e.get(g.spacePageId$, i))) && (null != o && a?.pageOwnerKey === o && ((0, d.b)(e), e.set(d.m, null)), null != t && e.get(T) === t[0] && e.set(T, null))
                }
            }
        })
    }),
    Qfv5: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            r = n("T0Rc"),
            l = n("Q840"),
            o = n("rEML"),
            s = n("Kwur"),
            u = n("Xn7X"),
            d = n("OWtl"),
            c = n("tv8P");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, m, f = (0, a.c)(22),
                    {
                        target: h,
                        accountId: _,
                        userId: v,
                        children: b
                    } = e,
                    y = (0, l.y)(d.a),
                    I = (0, o.X)();
                f[0] !== I.pathname || f[1] !== I.search || f[2] !== I.state?.accountSwitchReturnPath ? (t = "true" === new URLSearchParams(I.search).get("account_switch") || I.state?.accountSwitchReturnPath === I.pathname, f[0] = I.pathname, f[1] = I.search, f[2] = I.state?.accountSwitchReturnPath, f[3] = t) : t = f[3];
                let C = t,
                    E = !C;
                f[4] !== _ || f[5] !== h.id || f[6] !== h.kind || f[7] !== v ? (n = ["page-link-workspace", v, _, h.kind, h.id], f[4] = _, f[5] = h.id, f[6] = h.kind, f[7] = v, f[8] = n) : n = f[8], f[9] !== _ || f[10] !== y || f[11] !== h || f[12] !== v ? (p = e => {
                    let {
                        signal: t
                    } = e, n = (0, c.watchSpaceAccount)(y, _, v), i = AbortSignal.any([t, n.signal]);
                    return s.Request.safePost("/pages/link-workspace", {
                        requestBody: h,
                        signal: i,
                        expectedErrorStatuses: [401, 403, 404, 405]
                    }).then(e => (i.throwIfAborted(), e)).finally(n.stop)
                }, f[9] = _, f[10] = y, f[11] = h, f[12] = v, f[13] = p) : p = f[13], f[14] !== E || f[15] !== n || f[16] !== p ? (g = {
                    enabled: E,
                    queryKey: n,
                    queryFn: p,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnWindowFocus: !1,
                    refetchOnReconnect: !1
                }, f[14] = E, f[15] = n, f[16] = p, f[17] = g) : g = f[17];
                let {
                    data: P
                } = (0, r.a)(g);
                return C ? b : (f[18] !== _ || f[19] !== b || f[20] !== P ? (m = P?.account_id != null && P.account_id !== _ ? (0, i.jsx)(u.a, {
                    accountId: P.account_id
                }) : b, f[18] = _, f[19] = b, f[20] = P, f[21] = m) : m = f[21], m)
            }
        })
    }),
    atZq: (function(e, t, n) {
        var i = n("Q840"),
            a = n("OFP1"),
            r = n("OWtl"),
            l = n("tSEg"),
            o = n("OMIV");
        n("hZSj");
        var s = n("ioFt");
        let u = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return t(s.c) && t(a.u)
            }),
            d = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e;
                return t(u) && t(o.e, "1160739204")
            }),
            c = (0, i.c)(l.a, e => {
                let {
                    get: t,
                    scope: n
                } = e;
                return n.value.persistentWorkspace?.key === "/space" && t(u)
            });
        n.d(t, {}, {
            a: d,
            b: c,
            c: u
        })
    }),
    jwfI: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("rEML"),
            r = n("Nh13");

        function l(e, t) {
            let n = s(e);
            return null == n ? null : `/space/browser/${encodeURIComponent(n)}${null==t?"":`/${encodeURIComponent(t)}`}`
        }

        function o(e) {
            let t = (0, a.J)("/space/browser/:url/:instanceId?", e)?.params.url;
            if (null == t) return null;
            try {
                return s(decodeURIComponent(t))
            } catch {
                return null
            }
        }

        function s(e) {
            try {
                let t = new URL(e);
                return "http:" === t.protocol || "https:" === t.protocol ? t.href : null
            } catch {
                return null
            }
        }
        n.d(t, {}, {
            a: l,
            b: function(e) {
                let t = o(e),
                    n = (0, a.J)("/space/browser/:url/:instanceId?", e)?.params.instanceId;
                return null == t ? null : l(t, n)
            },
            c: function(e) {
                return (0, i.Pe)(`spaces-browser-${(0,r.a)(e)}`)
            },
            d: o
        })
    }),
    scnM: (function(e, t, n) {
        var i = n("E8Sp"),
            a = n("TL6G"),
            r = n("nlNF"),
            l = n("d7OO"),
            o = n("jwfI"),
            s = n("DUyD"),
            u = n("Iq2T");
        n.d(t, {}, {
            a: function(e) {
                let t = (0, u.a)(e);
                if (t?.workspaceId == null || t.clientThreadId !== e.value.clientThreadId || !(0, r.h)(e)) return;
                let n = e.get(r.c)?.state,
                    d = (null != (0, s.d)(e.value.pathname) ? n?.spaceFileOpen?.returnLocation : void 0) ?? (null != (0, o.d)(e.value.pathname) ? n?.spaceBrowserOpen?.returnLocation : void 0);
                null != d ? e.get(r.m) === d.key ? a.c.dispatchHostMessage({
                    type: "navigate-back"
                }) : (0, i.d)(e, d, {
                    replace: !0,
                    state: d.state
                }) : (0, l.a)(e)
            }
        })
    }),
    PW2D: (function(e, t, n) {
        let i = {
            canMinimizePendingInput: !0,
            getSession: n("Iq2T").a,
            prepareFreshChat: async (e, t) => {
                let {
                    prepareFreshSpacesChat: i
                } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(579642)]).then(n.bind(n, "zDym"));
                return i(e, t)
            }
        };
        n.d(t, {}, {
            a: i
        })
    }),
    VV9L: (function(e, t, n) {
        var i = n("EpL9"),
            a = n("ioFt");
        (0, i.j)({
            ...a.f,
            load: () => n.e(777359).then(n.bind(n, "AEDM"))
        })
    }),
    ioFt: (function(e, t, n) {
        var i = n("Q840"),
            a = n("ASxG");
        n("e1xH");
        var r = n("OWtl");
        n("khOd"), n("OMIV");
        let l = "spaces-workspace-content",
            o = "/space/d/external-gdrive%3Aroot?tab=recent",
            s = a.discriminatedUnion("kind", [a.strictObject({
                accountId: a.string().min(1),
                kind: a.literal("collection"),
                collection: a.enum(["all", "personal", "images", "files", "sites", "pages", "trash", "google-drive", "templates", "favorites", "documents", "spreadsheets", "presentations"])
            }), a.strictObject({
                accountId: a.string().min(1),
                kind: a.literal("space"),
                spaceId: a.string().min(1),
                title: a.string().optional()
            })]),
            u = {
                durableRoute: {
                    version: 1
                },
                isAvailable: (e, t) => !1,
                kind: l
            },
            d = (0, i.c)(r.a, e => {
                let {
                    scope: t
                } = e;
                return !0 === u.isAvailable(t)
            });
        n.d(t, {}, {
            a: l,
            b: o,
            c: d,
            d: {
                all: "/space",
                images: "/space/files?tab=images",
                pages: "/space?view=pages",
                trash: "/space?tab=all&deleted=true",
                "google-drive": o,
                templates: "/space?view=templates",
                favorites: "/space/files?tab=favorites",
                files: "/space/files?tab=all",
                sites: "/space/sites",
                documents: "/space/files?tab=all&category=documents",
                spreadsheets: "/space/files?tab=all&category=spreadsheets",
                presentations: "/space/files?tab=all&category=presentations"
            },
            e: s,
            f: u
        })
    }),
    DUyD: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("rEML"),
            r = n("ASxG"),
            l = n("Nh13");
        let o = r.discriminatedUnion("kind", [r.object({
            kind: r.literal("library"),
            libraryFileId: r.string().refine(i.ji)
        }), r.object({
            kind: r.literal("local"),
            path: r.string().min(1)
        })]);

        function s(e, t) {
            let n = "library" === e.kind ? `/space/file/${encodeURIComponent(e.libraryFileId)}` : `/space/local-file/${encodeURIComponent(e.path)}`;
            return null == t ? n : `${n}/${encodeURIComponent(t)}`
        }

        function u(e) {
            let t = (0, a.J)("/space/file/:id/:instanceId?", e),
                n = (0, a.J)("/space/local-file/:id/:instanceId?", e),
                i = (t ?? n)?.params.id;
            if (null == i) return null;
            try {
                let e = decodeURIComponent(i),
                    n = o.safeParse(null != t ? {
                        kind: "library",
                        libraryFileId: e
                    } : {
                        kind: "local",
                        path: e
                    });
                return n.success ? n.data : null
            } catch {
                return null
            }
        }
        n.d(t, {}, {
            a: s,
            b: function(e) {
                let t = u(e),
                    n = (0, a.J)("/space/file/:id/:instanceId?", e)?.params.instanceId ?? (0, a.J)("/space/local-file/:id/:instanceId?", e)?.params.instanceId;
                return null == t ? null : s(t, n)
            },
            c: function(e) {
                return `spaces-file-${(0,l.a)(e)}`
            },
            d: u,
            e: o
        })
    }),
    WeZd: (function(e, t, n) {
        var i = n("EpL9"),
            a = n("Cslg"),
            r = n("gLLv"),
            l = n("ioFt");
        (0, i.j)({
            kind: "library-file",
            workspaceResource: r.d,
            durableRoute: {
                version: 1
            },
            isAvailable: e => e.get(a.i) ? e.get(a.o) : void 0,
            load: () => Promise.resolve().then(n.bind(n, "QxN6"))
        }), (0, i.j)({
            ...l.f,
            kind: "spaces-local-file",
            workspaceResource: r.f,
            load: () => n.e(359759).then(n.bind(n, "teWY"))
        })
    }),
    aaih: (function(e, t, n) {
        var i = n("Q840"),
            a = n("ASxG"),
            r = n("ZU27"),
            l = n("JU4n"),
            o = n("RU3e"),
            s = n("OWod"),
            u = n("sdGG"),
            d = n("gLLv"),
            c = n("nlNF"),
            p = n("OWtl"),
            g = n("kl6F"),
            m = n("Exwq"),
            f = n("S7oG"),
            h = n("kpIY"),
            _ = n("Nwp9"),
            v = n("zeCl"),
            b = n("tv8P"),
            y = n("jwfI"),
            I = n("DUyD"),
            C = n("hEJC"),
            E = n("Iq2T");
        let P = a.record(a.string(), a.number()).transform(e => Object.fromEntries(Object.entries(e).sort((e, t) => {
                let [, n] = e, [, i] = t;
                return i - n
            }).slice(0, 1e3))).catch({}),
            A = (0, _.b)("spaces-browser-workspace-visits-v1", {}, {
                coerceStoredValue: e => P.parse(e)
            }),
            w = (0, i.u)(p.a, null);

        function T(e, t) {
            return "string" == typeof e ? (0, y.a)(e, t) : "page" === e.kind ? (0, C.a)(e.pageId, t) : (0, I.a)(e, t)
        }

        function k(e, t) {
            if (null != t.conversationId) return (0, m.d)(e.get(m.f, t.conversationId));
            let n = f.a.safeParse(e.get(E.i.savedDraftTabs$)[t.accountKey]);
            return n.success && n.data.clientThreadId === t.clientThreadId ? n.data.checkpoint : null
        }
        n.d(t, {}, {
            a: function(e, t) {
                e.get(w)?.accountKey === t && e.set(w, null)
            },
            b: k,
            c: function(e, t) {
                var n;
                let i = "string" != typeof t && "page" === t.kind ? {
                        ...t,
                        pageId: e.get(b.spacePageId$, t.pageId)
                    } : t,
                    a = T(i);
                if (null == a) return null;
                let o = "string" == typeof(n = i) ? (0, u.b)(n) : "page" === n.kind ? `page:${n.pageId}` : "library" === n.kind ? (0, d.a)(n.libraryFileId) : (0, d.b)(n.path),
                    c = E.i.getSessions(e, e => null != (0, y.d)(e ?? "") || null != (0, I.d)(e ?? "") || null != (0, C.d)(e)),
                    p = e.get(A),
                    m = c.filter(t => {
                        let n = function(e, t) {
                            let n, i = k(e, t),
                                a = (0, I.d)(t.workspaceId ?? ""),
                                o = null != (0, C.d)(t.workspaceId),
                                u = o ? (0, g.m)(e, t.clientThreadId) : null,
                                d = null == u ? void 0 : u.get(r.l.tabIds$).map(e => u.get(r.l.tabById$, e)).find(e => e?.isWorkspaceHome && e.kind === v.a),
                                c = o ? i?.routes.find(e => {
                                    let t = e.kind === v.a ? v.b.safeParse(e.params) : null;
                                    return t?.success && !0 === t.data.isWorkspaceHome
                                }) : void 0;
                            if (null == (n = o ? d?.tabId ?? c?.tabId : null == a ? (0, y.c)(t.accountKey) : (0, I.c)(t.accountKey)) || i?.excludedBrowserTabIds?.includes(n)) return {
                                status: "unavailable"
                            };
                            let p = null != d ? d.durableRoute : c ?? i?.routes.find(e => e.tabId === n);
                            return null == p && null != a ? {
                                status: "unavailable"
                            } : (0, l.a)(o ? v.a : p?.kind ?? s.a, {
                                scope: e,
                                tabId: n,
                                route: p,
                                conversationId: t.conversationId,
                                clientThreadId: t.clientThreadId
                            })
                        }(e, t);
                        return "ready" === n.status && n.key === o
                    }).sort((e, t) => (p[t.accountKey] ?? 0) - (p[e.accountKey] ?? 0));
                if (m[0]?.workspaceId != null) return m[0].workspaceId.startsWith("/") ? m[0].workspaceId : (0, C.a)(m[0].workspaceId);
                let f = e.get(w);
                if (null != f && c.some(e => e.accountKey === f.accountKey) && f.resourceKey === o) return f.path;
                let _ = c.some(e => e.workspaceId === (0, C.c)(a)) || "host" !== (0, h.g)() ? T(i, crypto.randomUUID()) : a;
                if (null == _) return null;
                let P = e.get(E.i.sessionForWorkspace$, (0, C.c)(_));
                return e.set(w, {
                    accountKey: P.accountKey,
                    path: _,
                    resourceKey: o
                }), _
            },
            d: function(e) {
                let t, n = n => {
                        let i = n.get(c.e);
                        if (!(0, c.h)(n) || !0 !== n.get(o.b) || "host" !== (0, h.g)()) {
                            t = void 0;
                            return
                        }
                        let a = n.get(E.c);
                        a.clientThreadId === e.value.clientThreadId && (t?.accountKey !== a.accountKey || t.visit !== i) && (t = {
                            accountKey: a.accountKey,
                            visit: i
                        }, e.set(A, e => P.parse({
                            ...e,
                            [a.accountKey]: Object.values(e).reduce((e, t) => Math.max(e, t), Date.now()) + 1
                        })))
                    },
                    i = e.watch(n),
                    a = (0, h.w)(() => n(e));
                return () => {
                    i(), a()
                }
            }
        })
    }),
    hEJC: (function(e, t, n) {
        var i = n("rEML"),
            a = n("jwfI"),
            r = n("DUyD");

        function l(e) {
            let t = (0, a.b)(e);
            if (null != t) return t;
            let n = (0, r.b)(e);
            if (null != n) return n;
            let l = s(e),
                u = (0, i.J)("/space/:pageId/:instanceId", e)?.params.instanceId;
            return null == l || null == u ? l : o(l, u)
        }

        function o(e, t) {
            return `/space/${encodeURIComponent(e)}${null==t?"":`/${encodeURIComponent(t)}`}`
        }

        function s(e) {
            let t = (0, i.J)("/space/:pageId/:instanceId?", e)?.params.pageId;
            return null != t && ["personal", "files", "file", "local-file", "browser", "sites", "d"].includes(t.toLowerCase()) ? void 0 : t
        }
        n.d(t, {}, {
            a: o,
            b: s,
            c: l,
            d: function(e) {
                return e?.startsWith("/") ? s(e) : e ?? void 0
            },
            e: function(e) {
                return /^\/spaces?(?:\/|$)/.test(e) && !0
            },
            f: function(e) {
                return "/spaces/new" !== e && "/spaces/new/" !== e && ("/space" === e || e.startsWith("/space/") || e.startsWith("/spaces/"))
            },
            g: function(e) {
                return null != l(e) || null != (0, i.J)("/space/personal", e)
            }
        })
    }),
    EWUC: (function(e, t, n) {
        var i = n("Q840"),
            a = n("ZU27"),
            r = n("tSEg"),
            l = n("moBM"),
            o = n("pZMh");
        let s = (0, i.v)(r.a, e => null),
            u = (0, i.c)(r.a, e => {
                let {
                    get: t
                } = e;
                if ("content" === t(o.l)) {
                    let e = t(a.l.activeTab$)?.tabId;
                    return null != e && null != t(s, e)
                }
                return !t(l.e) && null != t(s, null)
            });
        n.d(t, {}, {
            a: function(e, t) {
                let n = Symbol();
                return e.set(s, t, n), () => {
                    e.get(s, t) === n && e.set(s, t, null)
                }
            },
            b: u
        })
    }),
    Iq2T: (function(e, t, n) {
        var i = n("Q840"),
            a = n("Zqzr"),
            r = n("E8Sp"),
            l = n("Cslg"),
            o = n("OWtl"),
            s = n("tSEg"),
            u = n("kl6F"),
            d = n("vfwt"),
            c = n("Vhua"),
            p = n("atZq"),
            g = n("hEJC");
        let m = (0, d.a)({
            key: "/space",
            threadStorageKey: "spaces-workspace-chats-v1",
            draftStorageKey: "spaces-workspace-draft-tabs-v1",
            identity: e => ({
                accountId: e.get(l.f),
                userId: e.get(l.k),
                hostId: "local",
                workspaceId: (0, g.c)(e.get(r.b).pathname ?? "")
            }),
            isActive: e => e.get(p.c) && null != e.get(l.f) && (0, g.g)(e.get(r.b).pathname ?? "")
        });
        m.session$;
        let f = (0, i.c)(s.a, e => {
                let {
                    get: t,
                    scope: n
                } = e;
                return t(m.sessionForWorkspace$, n.value.persistentWorkspace?.session.workspaceId)
            }),
            h = (0, i.u)(u.a, !1),
            _ = (0, i.c)(s.a, e => {
                let {
                    get: t
                } = e, n = t(f), i = (0, g.d)(n.workspaceId);
                return null != n.accountId && null != i ? {
                    accountId: n.accountId,
                    pageId: i
                } : null
            }),
            v = m.getSession,
            b = m.draftRestoring$,
            y = (0, i.u)(o.a, null),
            I = (0, i.c)(s.a, e => {
                let {
                    get: t,
                    scope: n
                } = e;
                if (t(b)) return !0;
                let {
                    clientThreadId: i
                } = n.value;
                if (t(y)?.clientThreadId === i || t(y)?.sourceSession.clientThreadId === i) return !0;
                if (null != t(f).conversationId || !(0, a.Yh)(i)) return !1;
                let r = t(u.u, i),
                    l = t(c.a, i);
                return void 0 === l || null != r && "failed" !== r.status || null != l && "failed" !== l.phase
            }),
            C = (0, i.u)(u.a, null),
            E = m.promote;
        n.d(t, {}, {
            a: v,
            b: E,
            c: f,
            d: I,
            e: C,
            f: b,
            g: h,
            h: y,
            i: m,
            j: _
        })
    }),
    bAhY: (function(e, t, n) {
        function i(e, t) {
            let n = e.requestAnimationFrame(() => {
                n = e.requestAnimationFrame(t)
            });
            return () => e.cancelAnimationFrame(n)
        }
        n.d(t, {}, {
            a: i,
            b: function(e, t) {
                if ("visible" !== e.document.visibilityState) return t(), () => {};
                let n = new AbortController,
                    a = i(e, o),
                    r = e.setTimeout(o, 100);

                function l() {
                    n.abort(), a(), e.clearTimeout(r)
                }

                function o() {
                    l(), t()
                }
                return e.document.addEventListener("visibilitychange", o, {
                    signal: n.signal
                }), e.addEventListener("pagehide", o, {
                    signal: n.signal
                }), l
            }
        })
    }),
    BFFf: (function(e, t, n) {
        var i = n("Q840"),
            a = n("OWtl");
        (0, i.j)(a.a, e => {
            let t, n = (e, n, i) => {
                if (t !== e) return;
                let a = Math.floor(i.finishedAt / 1e3),
                    r = e.windows.at(-1);
                if (r?.completedSecond !== a) {
                    for (; null != e.windows[0] && e.windows[0].completedSecond < a - 45;) e.windows.shift();
                    r = {
                        completedSecond: a,
                        operations: {}
                    }, e.windows.push(r)
                }
                let l = i.finishedAt - i.startedAt,
                    o = r.operations[n];
                null == o ? (o = {
                    count: 1,
                    totalDuration: l,
                    longest: i
                }, r.operations[n] = o) : (o.count++, o.totalDuration += l, l > o.longest.finishedAt - o.longest.startedAt && (o.longest = i)), i.appHostFrame?.shape === "bytes" && null != i.payloadLength && (o.binaryBytes = (o.binaryBytes ?? 0) + i.payloadLength)
            };
            return {
                recordInteraction(e) {
                    null == t || e.startedAt <= t.startedAt || e.finishedAt < (t.lastObservedInteraction?.finishedAt ?? 0) || (t.lastObservedInteraction = e)
                },
                setEnabled(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t = e ? t ?? {
                        startedAt: performance.now(),
                        childIdsOnly: n,
                        windows: []
                    } : void 0
                },
                recordCompletedInterval(e, i) {
                    null != t && !t.childIdsOnly && i.startedAt > t.startedAt && n(t, e, i)
                },
                measure(e, i, a, r, l) {
                    let o = t;
                    if (null == o || o.childIdsOnly && "thread.childThreadIds.first" !== e && "thread.childThreadIds.subsequent" !== e) return a(i);
                    let s = r ?? (Array.isArray(i) || "string" == typeof i ? i.length : void 0),
                        u = {
                            startedAt: performance.now(),
                            finishedAt: 0,
                            payloadLength: s
                        },
                        d = e;
                    try {
                        let t = "thread.subagentActivity" === e ? a(i, u) : a(i);
                        return d = l?.(t) ?? e, t
                    } finally {
                        u.finishedAt = performance.now(), ("thread.childThreadIds.first" === d || "thread.childThreadIds.subsequent" === d) && n(o, "thread.childThreadIds", u), n(o, d, u)
                    }
                },
                getSnapshot() {
                    if (null == t) return;
                    let e = performance.now(),
                        n = (Math.floor(e / 1e3) - 45) * 1e3,
                        i = t.lastObservedInteraction;
                    return structuredClone({
                        timeOrigin: Date.now() - e,
                        collectionStartedAt: t.startedAt,
                        collectedAt: e,
                        retentionCutoff: n,
                        ...null != i && i.finishedAt >= n ? {
                            lastObservedInteraction: i
                        } : {},
                        windows: t.windows.filter(e => 1e3 * e.completedSecond >= n)
                    })
                }
            }
        })
    }),
    xvJK: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("NNQk"),
            r = n("pwwq"),
            l = n("iv8n"),
            o = n("kjQz"),
            s = n("S8dY");

        function u(e, t) {
            return n => {
                let a, {
                        conversationId: u,
                        durable: d,
                        parentTrace: c,
                        startupResume: p,
                        tailHydration: g,
                        threadIsAeon: m
                    } = n,
                    f = s.a.isPending(u),
                    h = f ? s.a.getTrace(u) : c,
                    _ = !f && !0 === p;
                s.a.hydrationStarted(u, m), _ && l.a.resumeStarted(u), null != m && (a = m ? "aeon" : "regular");
                let v = o.a.start("thread_hydration", {
                        threadKind: a,
                        startupResume: _
                    }, {
                        key: `${e}:${u}`,
                        trace: h ?? void 0,
                        traceAttributes: {
                            "thread.durable": d,
                            ...null == t ? {} : {
                                "thread.hydration_request": t
                            },
                            "thread.tail_hydration": g,
                            ...null != m ? {
                                "thread.is_aeon": m
                            } : {},
                            "thread.startup_resume": _
                        }
                    }),
                    b = !1;
                return {
                    trace: v.trace,
                    markPreparation: null != v.trace && (f || _) ? function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        if (b || !v.isRecording() || null == v.trace) return;
                        let n = `thread.prepare.${e}`,
                            i = Math.max(0, Date.now() - t);
                        performance.mark(n, {
                            startTime: Math.max(0, performance.now() - i)
                        }), performance.clearMarks(n), (0, r.c)({
                            attributes: {},
                            endTimeMs: t,
                            name: n,
                            startTimeMs: t,
                            trace: v.trace
                        })
                    } : void 0,
                    mark: e => {
                        b || (v.mark(e), "history_ready" === e && s.a.historyReady(u))
                    },
                    recordWritableRoots(e, t) {
                        v.mark("writable_roots_ready"), null != v.trace && (0, r.c)({
                            attributes: {
                                "thread.durable": d
                            },
                            endTimeMs: t,
                            name: "thread.writable_roots",
                            startTimeMs: e,
                            trace: v.trace
                        })
                    },
                    finish() {
                        !b && (b = !0, v.end(), s.a.hydrationFinished(u), _ && l.a.resumeFinished(u))
                    },
                    fail(e) {
                        b || (b = !0, "canceled" === (0, i.uh)(e)["codex.outcome"] ? v.abort("hydration_canceled") : v.fail("hydration_failed"), s.a.hydrationFailed(u, e))
                    },
                    cancel() {
                        if (b) return;
                        b = !0;
                        let e = new DOMException("Conversation resume canceled", "AbortError");
                        v.abort("hydration_canceled"), s.a.getTrace(u) === h && s.a.hydrationFailed(u, e)
                    }
                }
            }
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n;
                return i => {
                    switch (i.type) {
                        case "started":
                            n = u(e, t)(i.params);
                            break;
                        case "preparation":
                            n?.markPreparation?.(i.mark, i.atMs);
                            break;
                        case "writable-roots":
                            n?.recordWritableRoots(i.startedAtMs, i.endedAtMs);
                            break;
                        case "history-page":
                            (0, a.a)(i.timing);
                            break;
                        case "phase":
                            n?.mark(i.phase);
                            break;
                        case "finished":
                            n?.finish();
                            break;
                        case "failed":
                            n?.fail(i.error);
                            break;
                        case "canceled":
                            n?.cancel()
                    }
                }
            },
            b: u
        })
    }),
    WGUd: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("OSkm"),
            r = n("Zqzr"),
            l = n("gbzJ"),
            o = n("ReGc"),
            s = n("bNMl");

        function u(e, t) {
            let n, u;
            if (!e.get(s.c)) return;
            let c = "failed" === t.type && t.error instanceof Error && "AbortError" === t.error.name;
            "completed" === t.type ? n = "success" : c ? (n = "aborted", u = "canceled") : (n = "failure", u = "timed-out" === t.type ? "timeout" : "failed" === t.type ? (0, r.Df)(t.error) ?? "failed" : t.type);
            let {
                hostMetrics: p
            } = t;
            (0, s.a)(e, a.CodexPerformanceSpanCompleted, {
                spanName: "app_server_request",
                durationMs: t.durationMs,
                completedTs: (0, i.c)(t.endedAtMs),
                outcome: n,
                reason: u,
                clientPlatform: (0, l.a)(),
                appShell: void 0,
                buildNumber: e.get(o.a).data?.buildNumber ?? void 0,
                spanId: t.trace?.traceparent.slice(36, 52),
                traceId: t.trace?.traceparent.slice(3, 35),
                appServerRequestAttributes: {
                    method: t.method,
                    source: t.source,
                    hostKind: p?.hostKind ?? d(t.hostId),
                    transportKind: p?.transportKind,
                    priority: t.priority,
                    queueDurationMs: t.queueWaitMs,
                    hostReadyWaitDurationMs: p?.hostReadyWaitDurationMs,
                    hostRoundTripDurationMs: p?.hostRoundTripDurationMs,
                    requestBytes: p?.requestBytes == null ? void 0 : (0, i.c)(p.requestBytes),
                    responseBytes: p?.responseBytes == null ? void 0 : (0, i.c)(p.responseBytes),
                    timeoutMs: t.timeoutMs,
                    queuedRequestCountAtEnqueue: t.queuedRequestCountAtEnqueue,
                    peakInFlightRequestCount: t.peakInFlightRequestCount,
                    peakBackgroundInFlightRequestCount: t.peakBackgroundInFlightRequestCount,
                    clientBusyPeriodPeakHostPendingRequestCount: p?.clientBusyPeriodPeakHostPendingRequestCount,
                    incomingQueueDepth: p?.incomingQueueDepth,
                    coalescedRequestCount: t.coalescedRequestCount,
                    reconnectAttemptAtEnqueue: p?.reconnectAttemptAtEnqueue,
                    errorCode: "failed" === t.type ? function(e) {
                        if ("object" == typeof e && null != e && !(e instanceof Error) && "code" in e && "number" == typeof e.code && Number.isInteger(e.code) && !(e.code < -0x80000000) && !(e.code > 0x7fffffff)) return e.code
                    }(t.error) : void 0,
                    requestDurationMs: t.requestDurationMs,
                    responseReceiveDurationMs: p?.responseReceiveDurationMs,
                    largeInboundMessageOverlapMs: p?.largeInboundMessageOverlapMs,
                    largeInboundBytesReceivedWhilePending: (0, i.c)(p?.largeInboundBytesReceivedWhilePending),
                    largeInboundCompletedMessageBytesWhilePending: (0, i.c)(p?.largeInboundCompletedMessageBytesWhilePending),
                    largeInboundMessageThresholdBytesWhilePending: (0, i.c)(p?.largeInboundMessageThresholdBytesWhilePending),
                    serverNotificationDeliveryLagMs: p?.serverNotificationDeliveryLagMs,
                    serverNotificationClockSkewBaselineMs: p?.serverNotificationClockSkewBaselineMs
                }
            })
        }

        function d(e) {
            return "local" === e ? "local" : "durable" === e ? "durable" : e.startsWith("remote-control:") ? "remote-control" : e.startsWith("remote-wsl:") ? "wsl" : e.startsWith("remote-ssh") ? "ssh" : "remote"
        }
        n.d(t, {}, {
            a: function(e) {
                let t = new Map;
                return n => {
                    if ("started" === n.type) {
                        e.get(s.c) && (0, s.a)(e, a.CodexAppServerRequestStarted, {
                            method: n.method,
                            source: n.source,
                            priority: n.priority,
                            hostKind: d(n.hostId),
                            appShell: "owl"
                        });
                        return
                    }
                    if ("late-response" === n.type) {
                        let i = t.get(n.id);
                        if (null == i) return;
                        window.clearTimeout(i.timeoutId), t.delete(n.id), u(e, {
                            ...i.event,
                            hostMetrics: n.hostMetrics
                        });
                        return
                    }
                    if (!("durationMs" in n)) return;
                    if ("timed-out" !== n.type) return void u(e, n);
                    if (!e.get(s.c)) return;
                    if (t.size >= 100) {
                        let n = t.entries().next().value;
                        if (null != n) {
                            let [i, {
                                event: a,
                                timeoutId: r
                            }] = n;
                            window.clearTimeout(r), t.delete(i), u(e, a)
                        }
                    }
                    let i = window.setTimeout(() => {
                        t.delete(n.id), u(e, n)
                    }, 3e4);
                    t.set(n.id, {
                        event: n,
                        timeoutId: i
                    })
                }
            }
        })
    }),
    iv8n: (function(e, t, n) {
        var i = n("rEML"),
            a = n("c9lJ"),
            r = n("jAnS"),
            l = n("ad0f"),
            o = n("zt8h"),
            s = n("kjQz"),
            u = n("L6b2");
        let d = new class {
            startSpan;
            span = null;
            surface = null;
            shellVisible = !1;
            sidebarReady = !1;
            contentVisible = !1;
            requiresSidebar = !0;
            initialPathname = null;
            attributes = null;
            constructor(e) {
                this.startSpan = e
            }
            start(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                if (null != this.span) return;
                let a = {
                        initialSurface: e
                    },
                    r = this.startSpan("app_start", a, {
                        key: "initial-load",
                        startLocalTrace: null != i && "home" !== e ? e => (0, u.f)("app_start", i, e) : void 0,
                        startedAtMs: t
                    });
                r.isRecording() && (this.surface = e, this.span = r, this.requiresSidebar = n, this.initialPathname = i, this.attributes = a)
            }
            setHostStartupTiming(e, t) {
                if (null == this.attributes || !this.isRecording()) return;
                let n = t - e.processStartedAtMs;
                Number.isFinite(n) && n >= 0 && (this.attributes.processToPreloadDurationMs = n), this.attributes.hostStartupPhaseDurationsMs = e.phaseDurationsMs, this.attributes.nativeStartupProgress = e.nativeStartupProgress
            }
            getTrace(e) {
                return this.isInitialThread(e) ? this.span?.trace ?? null : null
            }
            resumeStarted(e) {
                this.isInitialThread(e) && this.span?.mark("resume_started")
            }
            resumeFinished(e) {
                this.isInitialThread(e) && this.span?.mark("resume_finished")
            }
            isInitialThread(e) {
                return this.isRecording() && !this.contentVisible && this.initialPathname === `/local/${e}`
            }
            markInitializationPhase(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c();
                null != this.span && this.span.isRecording() && this.span.mark(e, t)
            }
            markShellVisible() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c();
                !this.shellVisible && null != this.span && this.span.isRecording() && (this.shellVisible = !0, this.span.mark("shell_visible", e), this.maybeEnd())
            }
            isRecording() {
                return this.span?.isRecording() === !0
            }
            markSidebarReady() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c();
                !this.sidebarReady && null != this.span && this.span.isRecording() && (this.sidebarReady = !0, this.span.mark("sidebar_ready", e), this.maybeEnd())
            }
            markHomeVisible() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c();
                this.markContentVisible("home_visible", "home", e)
            }
            markSignInVisible() {
                "home" === this.surface && this.span?.abort("sign_in_visible")
            }
            markThreadVisible() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c();
                this.markContentVisible("thread_visible", "thread", e)
            }
            markRemoteThreadVisible() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c();
                this.markContentVisible("remote_thread_visible", "remote_thread", e)
            }
            failConversationLoad() {
                "thread" === this.surface && this.span?.isRecording() && this.span.fail("conversation_load_failed")
            }
            leaveRestoredThread(e) {
                "home" !== this.surface && this.initialPathname !== e && this.isRecording() && this.span?.abort("superseded")
            }
            dispose() {
                null != this.span && this.span.isRecording() && this.span.abort("app_disposed")
            }
            markContentVisible(e, t, n) {
                !this.contentVisible && null != this.span && this.span.isRecording() && this.surface === t && (this.contentVisible = !0, this.span.mark(e, n), this.maybeEnd())
            }
            maybeEnd() {
                this.shellVisible && (!this.requiresSidebar || this.sidebarReady) && this.contentVisible && null != this.span && this.span.isRecording() && this.span.end()
            }
        }((e, t, n) => s.a.start(e, t, {
            ...n,
            traceAttributes: {
                "app_start.initial_surface": t.initialSurface
            }
        }));

        function c() {
            return performance.timeOrigin + performance.now()
        }
        n.d(t, {}, {
            a: d,
            b: function(e) {
                return null != e ? (0, i.L)(e).pathname ?? null : (0, o.a)(window.location.pathname, document.documentElement.dataset.routerBasename ?? "/")
            },
            c: function(e) {
                return null == e ? null : (0, l.b)(e) || "/index.html" === e || "/extension/panel/new" === e ? "home" : e.startsWith("/local/") ? "thread" : e.startsWith("/remote/") ? "remote_thread" : null != (0, r.j)(e) || null != (0, a.a)(e) ? "thread" : null
            }
        })
    }),
    drri: (function(e, t, n) {
        var i = n("ox67"),
            a = n.n(i),
            r = n("c94E"),
            l = n("cOHk"),
            o = n("fsCW"),
            s = n("XvMu"),
            u = n("kjQz");

        function d(e) {
            return "number" == typeof e && Number.isFinite(e) ? e : null
        }

        function c(e) {
            return "number" == typeof e && Number.isFinite(e) && e >= 0 ? e : null
        }
        new class {
            startSpan;
            completedTurnKeys = new Set;
            constructor(e) {
                this.startSpan = e
            }
            record(e) {
                let {
                    completedAtMs: t,
                    conversationId: n,
                    lastAgentMessage: i,
                    turn: u,
                    turnId: p
                } = e;
                if ("inProgress" === u.status) return;
                let g = (0, l.e)(u, [], {
                        includeTurnDiff: !1
                    }),
                    m = (0, o.b)({
                        assistantContent: i,
                        turn: g
                    }),
                    f = (0, r.b)(u),
                    h = a()(m, "fileCount"),
                    _ = a()(f, "fileCount");
                if (0 === h && 0 === _) return;
                let v = `${n}:${p}`;
                if (this.completedTurnKeys.has(v)) return;
                if (this.completedTurnKeys.add(v), this.completedTurnKeys.size > 1e3) {
                    let e = this.completedTurnKeys.values().next().value;
                    null != e && this.completedTurnKeys.delete(e)
                }
                let b = c(u.durationMs),
                    y = d(u.turnStartedAtMs),
                    I = this.startSpan("artifact_generation", {
                        telemetryOwner: "desktop_client",
                        definitionVersion: 1,
                        lifecycleKind: h > 0 && _ > 0 ? "produced_and_edited" : h > 0 ? "produced" : "edited",
                        producedFileCount: h,
                        editedFileCount: _,
                        uploadedFileCount: a()((0, r.d)(u), "fileCount"),
                        producedExtensionGroupCount: m.length,
                        editedExtensionGroupCount: f.length,
                        ... function(e) {
                            let t = new Map;
                            for (let i of e.items) {
                                var n;
                                ("collabAgentToolCall" === (n = i).type || "commandExecution" === n.type || "dynamicToolCall" === n.type || "fileChange" === n.type || "imageGeneration" === n.type || "imageView" === n.type || "mcpToolCall" === n.type || "sleep" === n.type || "webSearch" === n.type) && t.set(i.id, i)
                            }
                            let i = {
                                collabAgentToolCallCount: 0,
                                commandExecutionCount: 0,
                                dynamicToolCallCount: 0,
                                failedToolCount: 0,
                                fileChangeCount: 0,
                                imageGenerationCount: 0,
                                imageViewCount: 0,
                                knownToolDurationCount: 0,
                                knownToolDurationMsMax: 0,
                                knownToolDurationMsSum: 0,
                                mcpToolCallCount: 0,
                                operationalToolCount: t.size,
                                sleepCount: 0,
                                webSearchCount: 0
                            };
                            for (let e of t.values()) {
                                switch (e.type) {
                                    case "collabAgentToolCall":
                                        i.collabAgentToolCallCount += 1;
                                        break;
                                    case "commandExecution":
                                        i.commandExecutionCount += 1;
                                        break;
                                    case "dynamicToolCall":
                                        i.dynamicToolCallCount += 1;
                                        break;
                                    case "fileChange":
                                        i.fileChangeCount += 1;
                                        break;
                                    case "imageGeneration":
                                        i.imageGenerationCount += 1;
                                        break;
                                    case "imageView":
                                        i.imageViewCount += 1;
                                        break;
                                    case "mcpToolCall":
                                        i.mcpToolCallCount += 1;
                                        break;
                                    case "sleep":
                                        i.sleepCount += 1;
                                        break;
                                    case "webSearch":
                                        i.webSearchCount += 1
                                }(function(e) {
                                    switch (e.type) {
                                        case "collabAgentToolCall":
                                        case "dynamicToolCall":
                                        case "imageGeneration":
                                        case "mcpToolCall":
                                            return "failed" === e.status;
                                        case "commandExecution":
                                        case "fileChange":
                                            return "failed" === e.status || "declined" === e.status;
                                        case "imageView":
                                        case "sleep":
                                        case "webSearch":
                                            return !1
                                    }
                                })(e) && (i.failedToolCount += 1);
                                let t = function(e) {
                                    switch (e.type) {
                                        case "commandExecution":
                                        case "dynamicToolCall":
                                        case "mcpToolCall":
                                        case "sleep":
                                            return c(e.durationMs);
                                        case "collabAgentToolCall":
                                        case "fileChange":
                                        case "imageGeneration":
                                        case "imageView":
                                        case "webSearch":
                                            return null
                                    }
                                }(e);
                                null != t && (i.knownToolDurationCount += 1, i.knownToolDurationMsSum += t, i.knownToolDurationMsMax = Math.max(i.knownToolDurationMsMax, t))
                            }
                            return i
                        }(u),
                        appServerTurnDurationMs: b ?? void 0,
                        usedSkills: (0, s.a)(u).length > 0,
                        timingSource: null != y ? "client_turn_started" : null != b ? "app_server_duration_fallback" : "completion_only"
                    }, {
                        backfilled: !0,
                        key: v,
                        startedAtMs: y ?? (null == b ? t : t - b)
                    }),
                    C = d(u.firstTurnWorkItemStartedAtMs);
                switch (null != C && I.mark("first_work_item_started", C), u.status) {
                    case "completed":
                        I.end();
                        return;
                    case "failed":
                        I.fail("turn_failed");
                        return;
                    case "interrupted":
                        I.abort("turn_interrupted");
                        return
                }
            }
        }((e, t, n) => u.a.start(e, t, {
            ...n,
            traceAttributes: {
                "artifact.lifecycle_kind": t.lifecycleKind,
                "artifact.produced_file_count": t.producedFileCount,
                "artifact.edited_file_count": t.editedFileCount,
                "artifact.timing_source": t.timingSource
            }
        })), n.d(t, {}, {
            a: function(e) {}
        })
    }),
    N24b: (function(e, t, n) {
        var i = n("kjQz");
        let a = new class {
            startSpan;
            active = new Map;
            constructor(e) {
                this.startSpan = e
            }
            start(e) {
                let t, {
                        artifactType: n,
                        importKind: i,
                        openSource: a,
                        requestKey: r
                    } = e,
                    l = this.active.get(r)?.mountCount ?? 0,
                    o = "pdf" === n ? "renderer_ready" : "data_ready",
                    s = this.startSpan("artifact_preview", {
                        telemetryOwner: "desktop_client",
                        definitionVersion: 1,
                        artifactKind: "slides" === n ? "presentation" : n,
                        importKind: i,
                        openSource: a,
                        readyBoundary: o
                    }, {
                        key: r,
                        onTerminal: () => {
                            this.active.get(r) === t && this.active.delete(r)
                        }
                    });
                s.isRecording() && (t = {
                    mountCount: l,
                    readyBoundary: o,
                    span: s
                }, this.active.set(r, t))
            }
            mount(e) {
                let t = this.active.get(e);
                return null == t ? () => {} : (t.mountCount += 1, () => {
                    let t = this.active.get(e);
                    null != t && (t.mountCount = Math.max(0, t.mountCount - 1), queueMicrotask(() => {
                        this.active.get(e) === t && 0 === t.mountCount && t.span.abort("navigation_away")
                    }))
                })
            }
            markMetadataLoaded(e) {
                this.active.get(e)?.span.mark("metadata_loaded")
            }
            markBinaryLoaded(e) {
                this.active.get(e)?.span.mark("binary_loaded")
            }
            markArtifactParsed(e) {
                this.active.get(e)?.span.mark("artifact_parsed")
            }
            completeDataReady(e) {
                let t = this.active.get(e);
                t?.readyBoundary === "data_ready" && t.span.end()
            }
            completeRendererReady(e, t) {
                let n = this.active.get(e);
                n?.readyBoundary === "renderer_ready" && Number.isSafeInteger(t) && !(t <= 0) && (n.span.mark("renderer_ready"), n.span.end())
            }
            fail(e, t) {
                this.active.get(e)?.span.fail(t)
            }
            abort(e, t) {
                this.active.get(e)?.span.abort(t)
            }
            dispose() {
                for (let e of this.active.values()) e.span.abort("app_disposed")
            }
        }((e, t, n) => i.a.start(e, t, {
            ...n,
            traceAttributes: {
                "artifact.kind": t.artifactKind,
                "artifact.import_kind": t.importKind,
                "artifact.open_source": t.openSource,
                "artifact.ready_boundary": t.readyBoundary
            }
        }));
        n.d(t, {}, {
            a: function(e, t) {
                a.abort(e, t)
            },
            b: function() {
                a.dispose()
            }
        })
    }),
    Ggpj: (function(e, t, n) {
        var i = n("IwWE"),
            a = n("ySmL"),
            r = n("nZhi");
        let l = new i.a(() => performance.now(), () => "visible" === document.visibilityState, e => {
            (0, r.d)({
                name: "conversation_load",
                source: "RUM",
                startedAtMs: e.startTime,
                durationMs: e.duration,
                metadata: e.context
            }), a.b.addDurationVital("conversation_load", e)
        });
        n.d(t, {}, {
            a: l
        })
    }),
    p713: (function(e, t, n) {
        var i = n("IwWE"),
            a = n("KUIh"),
            r = n("Y94G");
        let l = new i.b(r.c, a.a);
        n.d(t, {}, {
            a: l
        })
    }),
    yKyW: (function(e, t, n) {
        let i;
        n.d(t, {}, {
            a: function() {
                return i
            },
            b: function() {
                if ("u" < typeof PerformanceObserver || !PerformanceObserver.supportedEntryTypes.includes("resource")) return;
                let e = new URL("assets/", new URL("/cdn/", window.location.origin)),
                    t = {
                        transfer_size_bytes: 0,
                        encoded_body_size_bytes: 0,
                        decoded_body_size_bytes: 0,
                        resource_count: 0,
                        zero_body_size_resource_count: 0,
                        resource_timing_dropped_entries_count: void 0
                    },
                    n = new PerformanceObserver((e, n, i) => {
                        a(e.getEntries(), performance.now()), i?.droppedEntriesCount != null && (t.resource_timing_dropped_entries_count = i.droppedEntriesCount)
                    });
                return n.observe({
                    type: "resource",
                    buffered: !0
                }), {
                    finish(e) {
                        a(n.takeRecords(), e), n.disconnect(), i = {
                            ...t
                        }
                    },
                    disconnect: () => n.disconnect()
                };

                function a(n, i) {
                    for (let a of n) a instanceof PerformanceResourceTiming && !(a.responseEnd <= 0) && !(a.responseEnd > i) && /^https?:\/\//.test(a.name) && function(e, t) {
                        let n = new URL(e.name);
                        return n.origin === t.origin && !!n.pathname.startsWith(t.pathname) && ("script" === e.initiatorType || /\.m?js$/i.test(n.pathname) || "contentType" in e && "string" == typeof e.contentType && /^(text|application)\/(x-)?(javascript|ecmascript)(;|$)/i.test(e.contentType) || "link" === e.initiatorType && Array.from(document.querySelectorAll('link[rel="modulepreload"], link[rel="preload"][as="script"]')).some(t => t.href === e.name))
                    }(a, e) && (t.transfer_size_bytes += a.transferSize, t.encoded_body_size_bytes += a.encodedBodySize, t.decoded_body_size_bytes += a.decodedBodySize, t.resource_count++, 0 === a.encodedBodySize && 0 === a.decodedBodySize && t.zero_body_size_resource_count++)
                }
            }
        })
    }),
    yaHE: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t) {
                let n, i = Date.now(),
                    a = i + 18e5,
                    r = i,
                    l = "startup",
                    o = !1,
                    s = !1,
                    u = setTimeout(d, 18e5);

                function d() {
                    s = !0, clearTimeout(n), clearTimeout(u), document.removeEventListener("visibilitychange", p)
                }

                function c() {
                    return Date.now() >= a && d(), !s && "visible" === document.visibilityState
                }

                function p() {
                    if (clearTimeout(n), n = void 0, !c()) return;
                    let i = Date.now(),
                        a = i >= r;
                    a && (r = i + 18e4), n = setTimeout(p, r - i), a && (async function(n) {
                        if (!o && c() && t()) {
                            o = !0;
                            try {
                                let i = performance,
                                    a = navigator,
                                    r = i.memory,
                                    l = {
                                        sampleKind: n,
                                        documentAgeMs: performance.now(),
                                        visibilityState: document.visibilityState,
                                        deviceMemoryGiB: a.deviceMemory,
                                        hardwareConcurrency: navigator.hardwareConcurrency,
                                        jsHeapSizeLimitBytes: r?.jsHeapSizeLimit,
                                        totalJSHeapSizeBytes: r?.totalJSHeapSize,
                                        usedJSHeapSizeBytes: r?.usedJSHeapSize
                                    };
                                if (null != i.measureUserAgentSpecificMemory) try {
                                    let e = await i.measureUserAgentSpecificMemory();
                                    l.uaSpecificMemoryBytes = e.bytes, l.uaSpecificMemoryBreakdownCount = e.breakdown?.length
                                } catch {}
                                c() && t() && e(l)
                            } finally {
                                o = !1
                            }
                        }
                    }(l), l = "periodic")
                }
                document.addEventListener("visibilitychange", p), p()
            }
        })
    }),
    Y94G: (function(e, t, n) {
        var i = n("nZhi");
        let a = new Map,
            r = new Set(["hydrate.start", "hydrate.commit", "app.initialize.end", "persistence.end", "statsig.ready", "composer.rendered", "navigation.handlers_attached", "composer.editable", "composer.native_input_ready"]),
            l = null;
        n.d(t, {}, {
            a: r,
            b: function() {
                return Object.fromEntries(Array.from(a, e => {
                    let [t, n] = e;
                    return [t, n - performance.timeOrigin]
                }))
            },
            c: function(e, t) {
                if ("u" < typeof window || a.has(e)) return;
                let n = t ?? performance.mark(`page_load.${e}`),
                    o = performance.timeOrigin + n.startTime;
                if (a.set(e, o), r.has(e) && (0, i.d)({
                        name: `page_load.${e}`,
                        source: "RUM",
                        startedAtMs: performance.timeOrigin,
                        durationMs: n.startTime
                    }), "hydrate.commit" === e) {
                    let e = a.get("hydrate.start");
                    null != e && (0, i.d)({
                        name: "hydrate_to_outer_commit_ms",
                        source: "RUM",
                        startedAtMs: e,
                        durationMs: o - e
                    })
                }
                l?.(e, o)
            },
            d: function(e) {
                l = e, a.forEach((t, n) => e(n, t))
            }
        })
    }),
    B0Wj: (function(e, t, n) {
        let i;
        var a = n("zPtR"),
            r = n("KUIh"),
            l = n("unIO"),
            o = n("mFDr"),
            s = n("WFY2"),
            u = n("p713"),
            d = n("yKyW"),
            c = n("Y94G");
        let p = null,
            g = null;

        function m() {
            u.a.checkRoute(), null != p && ((0, r.c)() || (p.composerMetricsStopped = !0, p.javascriptResources?.disconnect(), p.nativeComposerObserver?.disconnect()))
        }

        function f(e, t) {
            if (null == p || (m(), p.composerMetricsStopped || p.composerMetrics.has(e))) return;
            p.composerMetrics.add(e), (0, c.c)(e, t);
            let n = t?.startTime ?? performance.now();
            if ("composer.ttfi" === e) {
                h(p.nativeComposerObserver?.takeRecords() ?? []), p.nativeComposerObserver?.disconnect();
                let t = Date.now();
                p.javascriptResources?.finish(n), o.a?.then(n => {
                    let {
                        addBrowserDatadogRumTiming: i
                    } = n;
                    i(e, t)
                })
            }
            _(e, n, `${p.id}:${e}`)
        }

        function h(e) {
            let t = e.find(e => "page_load.composer.native_input_ready" === e.name);
            null != t && (p?.nativeComposerObserver?.disconnect(), f("composer.native_input_ready", t))
        }

        function _(e, t, n, r) {
            let o;
            if (null != p && !1 !== i) {
                if ("composer.ttfi" === e) {
                    let e = Math.max(0, Math.round(t)),
                        n = (0, d.a)();
                    o = {
                        kind: "time-to-fully-interactive",
                        payload: {
                            durationMs: (0, a.b)(e),
                            durationTrimmedMs: (0, a.b)(Math.min(e, 3e5)),
                            pageLoadId: p.id,
                            navigationType: function() {
                                if ("function" != typeof performance.getEntriesByType) return;
                                let e = performance.getEntriesByType("navigation")[0];
                                return null != e && "type" in e && "string" == typeof e.type ? e.type : void 0
                            }(),
                            surface: "codex_browser",
                            routeId: p.initialRouteTemplate,
                            webDeployment: document.documentElement.dataset.deployment,
                            clientVersion: (0, l.a)(),
                            entryClientDurationMs: y(performance.getEntriesByName("entry.client", "mark")[0]?.startTime),
                            composerMountedDurationMs: y(performance.getEntriesByName("page_load.composer.rendered", "mark")[0]?.startTime),
                            timeToFirstByteDurationMs: y(p.initialVitals.get("TTFB")),
                            firstContentfulPaintDurationMs: y(p.initialVitals.get("FCP")),
                            largestContentfulPaintDurationMs: y(p.initialVitals.get("LCP")),
                            javascriptTransferSizeBytes: (0, a.c)(n?.transfer_size_bytes),
                            javascriptEncodedBodySizeBytes: (0, a.c)(n?.encoded_body_size_bytes),
                            javascriptDecodedBodySizeBytes: (0, a.c)(n?.decoded_body_size_bytes),
                            javascriptResourceCount: (0, a.b)(n?.resource_count),
                            javascriptZeroBodySizeResourceCount: (0, a.b)(n?.zero_body_size_resource_count),
                            resourceTimingDroppedEntriesCount: (0, a.b)(n?.resource_timing_dropped_entries_count)
                        }
                    }
                } else o = {
                    kind: "metric",
                    payload: {
                        metricName: e,
                        metricValue: t,
                        metricId: n,
                        pageLoadId: p.id,
                        initialPath: p.initialRouteTemplate,
                        navigationType: r,
                        clientVersion: (0, l.a)()
                    }
                };
                v(e, o)
            }
        }

        function v(e, t) {
            null != p && !1 !== i && (null != g ? b(g, t) : p.pending.set(e, t))
        }

        function b(e, t) {
            "metric" === t.kind ? e.logMetric(t.payload) : "first-contentful-paint" === t.kind ? e.logFirstContentfulPaint(t.value) : "long-interaction-to-next-paint" === t.kind ? e.logLongInteractionToNextPaint(t.value) : e.logTimeToFullyInteractive(t.payload)
        }

        function y(e) {
            return null != e && Number.isFinite(e) && e >= 0 ? (0, a.b)(Math.round(e)) : void 0
        }
        n.d(t, {}, {
            a: m,
            b: function(e, t) {
                i = e, g = t, e && null != t && p?.pending.forEach(e => b(t, e)), p?.pending.clear()
            },
            c: async function() {
                if (null == p) {
                    (0, r.a)(), p = {
                        id: document.documentElement.dataset.pageLoadId ?? crypto.randomUUID(),
                        initialPathname: window.location.pathname,
                        initialRouteTemplate: "/unknown",
                        composerMetricsStopped: !1,
                        composerMetrics: new Set,
                        initialVitals: new Map,
                        pending: new Map,
                        javascriptResources: (0, d.b)()
                    }, "u" > typeof PerformanceObserver && PerformanceObserver.supportedEntryTypes.includes("mark") && (p.nativeComposerObserver = new PerformanceObserver(e => {
                        h(e.getEntries())
                    }), p.nativeComposerObserver.observe({
                        type: "mark",
                        buffered: !0
                    })), window.addEventListener("pagehide", () => {
                        null != p && (p.composerMetricsStopped = !0, p.javascriptResources?.disconnect(), p.nativeComposerObserver?.disconnect())
                    }, {
                        once: !0
                    });
                    try {
                        let {
                            onCLS: e,
                            onFCP: t,
                            onINP: i,
                            onLCP: a,
                            onTTFB: r
                        } = await n.e(672620).then(n.bind(n, "VbkW")), l = e => {
                            "back-forward-cache" !== e.navigationType && ("FCP" !== e.name || p?.initialVitals.has("FCP") || v("first-contentful-paint", {
                                kind: "first-contentful-paint",
                                value: e.value
                            }), p?.initialVitals.set(e.name, e.value)), _(e.name, e.value, e.id, e.navigationType)
                        };
                        r(l), t(l), a(l), e(l), i(l), i(e => {
                            e.value < 500 || v("long-interaction-to-next-paint", {
                                kind: "long-interaction-to-next-paint",
                                value: e.value
                            })
                        }, {
                            durationThreshold: 500
                        })
                    } catch (e) {
                        s.a.warning("Failed to initialize browser Web Vitals", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    }
                }
            },
            d: f,
            e: function(e) {
                if (null == p) return;
                let t = e(p.initialPathname);
                p.initialRouteTemplate = t, o.a?.then(e => {
                    let {
                        setBrowserDatadogRumView: n
                    } = e;
                    null != p && (0, r.c)() && n(t)
                }), p.pending.forEach(e => {
                    "metric" === e.kind ? e.payload.initialPath = t : "time-to-fully-interactive" === e.kind && (e.payload.routeId = t)
                })
            }
        })
    }),
    DZXF: (function(e, t, n) {
        var i = n("p713"),
            a = n("yKyW"),
            r = n("Y94G");

        function l(e, t) {
            return null != e && null != t && Number.isFinite(e) && Number.isFinite(t) && e >= 0 && t >= e ? (t - e) / 1e6 : void 0
        }
        n.d(t, {}, {
            a: function(e) {
                if ("initial_load" !== e.view.loading_type) return;
                let t = e.view.custom_timings;
                e.context = {
                    ...e.context,
                    page_load_milestones_ms: (0, r.b)(),
                    composer_ttfi_javascript: (0, a.a)(),
                    hydration: i.a.snapshot(),
                    page_load_durations: {
                        hydrate_to_outer_commit_ms: l(t?.["page_load.hydrate.start"], t?.["page_load.hydrate.commit"]),
                        entry_client_to_composer_ttfi_ms: l(t?.["entry.client"], t?.["composer.ttfi"]),
                        fcp_to_lcp_ms: l(e.view.performance?.fcp?.timestamp, e.view.performance?.lcp?.timestamp)
                    }
                }
            }
        })
    }),
    uZn3: (function(e, t, n) {
        var i = n("ekLq"),
            a = n("J9rA"),
            r = n("d6Ff"),
            l = n("bAhY"),
            o = n("mz2o"),
            s = n("BJjx");
        let u = "[data-sidebar-navigation-root]",
            d = `[role="list"], ${i.c.sidebarSection}, ${i.c.sidebarProjectListContainer}`,
            c = new WeakSet,
            p = () => void 0;

        function g(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
            try {
                let n = (0, o.b)(e, "chat_archive_to_visible_list_change");
                if (n && "visible" === document.visibilityState) return o => (function(e, t, n, o) {
                    try {
                        let p;
                        if ("visible" !== document.visibilityState || void 0 !== t.row && !t.row?.isConnected) return;
                        if ("native" === t.kind) {
                            let n = t.rowKey ?? (0, r.a)((0, a.a)(e.get, t.conversationId));
                            p = `[${i.b.sidebarThreadId}="${CSS.escape(n)}"][${i.b.sidebarThreadHostId}="${CSS.escape(t.hostId)}"]`
                        } else p = `[data-sidebar-archive-chatgpt-id="${CSS.escape(t.conversationId)}"]`;
                        let g = void 0 === t.row ? document.querySelectorAll(`${u} ${p}`) : [t.row],
                            m = Array.from(g).flatMap(e => {
                                let t = e.matches(p) && null != e.closest(u) ? (0, s.c)(e) : void 0;
                                return null == t ? [] : [{
                                    row: e,
                                    rect: t
                                }]
                            });
                        if (1 !== m.length) return;
                        let [f] = m, {
                            row: h
                        } = f, _ = h.closest(d), v = h.closest(u);
                        if (null == _ || null == v || !v.contains(_) || c.has(h)) return;
                        let b = "native" === t.kind ? h.closest("[data-sidebar-archive-motion]") : null;
                        if (b?.dataset.sidebarArchiveMotion === "exiting") return;
                        return function(e, t, n, a, r, o, u, d) {
                            var p;
                            let g, {
                                    row: m,
                                    rect: f
                                } = e,
                                h = a?.getBoundingClientRect().height ?? 0,
                                _ = m.closest(i.c.sidebarScroll) ?? n,
                                v = new Set(n.querySelectorAll(r));
                            v.delete(m);
                            let b = null == a ? 1 : Number(getComputedStyle(a).opacity),
                                y = new AbortController,
                                I = {},
                                C = () => {
                                    y.abort(), A.disconnect(), w?.disconnect(), g?.(), window.clearTimeout(T), c.delete(m), delete I.stop
                                },
                                E = () => {
                                    if (g = void 0, !n.contains(t) || !n.isConnected || "visible" !== document.visibilityState || t.closest(s.a) || !t.checkVisibility?.({
                                            visibilityProperty: !0,
                                            opacityProperty: !0
                                        })) return void C();
                                    if (m.isConnected) {
                                        if (!t.contains(m) || a?.dataset.sidebarArchiveMotion !== "exiting") return void C();
                                        let e = m.getBoundingClientRect(),
                                            n = new DOMRect(e.x, e.y, e.width || f.width, e.height || f.height);
                                        if (!(0, s.b)(m, n)) return void C();
                                        let i = a.getBoundingClientRect().height < h,
                                            r = Number(getComputedStyle(a).opacity) < b;
                                        if (!i && !r) return
                                    } else if (Array.from(n.querySelectorAll(r)).some(e => !v.has(e)) || !(0, s.b)(t, f) || d?.() === !1) return void C();
                                    C(), u(performance.now() - o)
                                },
                                P = () => {
                                    y.signal.aborted || null != g || m.isConnected && a?.dataset.sidebarArchiveMotion !== "exiting" || (g = (0, l.a)(window, E))
                                },
                                A = new MutationObserver(e => {
                                    m.isConnected && (!t.contains(m) || e.some(e => Array.from(e.removedNodes).some(e => e.contains(m)))) ? C() : P()
                                }),
                                w = null != a && "u" > typeof ResizeObserver ? new ResizeObserver(P) : void 0,
                                T = window.setTimeout(C, 1e4);
                            I.stop = C, c.add(m);
                            try {
                                A.observe(t, {
                                    childList: !0,
                                    subtree: !0
                                }), null != a && (A.observe(a, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0,
                                    attributeFilter: ["data-sidebar-archive-motion", "style"]
                                }), w?.observe(a));
                                let e = {
                                    capture: !0,
                                    passive: !0,
                                    signal: y.signal
                                };
                                for (let t of (_.addEventListener("scroll", () => {
                                        m.isConnected && a?.dataset.sidebarArchiveMotion !== "exiting" && C()
                                    }, {
                                        signal: y.signal
                                    }), ["wheel", "touchmove"])) _.addEventListener(t, C, e);
                                for (let t of ["keydown", "pointerdown", "input"]) document.addEventListener(t, C, e);
                                for (let e of ["pagehide", "popstate", "hashchange", "resize"]) window.addEventListener(e, C, {
                                    signal: y.signal
                                });
                                document.addEventListener("visibilitychange", C, {
                                    signal: y.signal
                                })
                            } catch {
                                C()
                            }
                            return p = I, () => p.stop?.()
                        }(f, _, v, b, p, n, o, "native" === t.kind ? t.confirmsRemoval : void 0)
                    } catch {
                        return
                    }
                })(e, o, t, n)
            } catch {}
            return p
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
                return g(e, n)(t)
            },
            b: g
        })
    }),
    pxay: (function(e, t, n) {
        n.d(t, {
            a: () => m,
            b: () => f
        });
        var i = n("ekLq"),
            a = n("TNWb"),
            r = n("bAhY"),
            l = n("mz2o");

        function o(e) {
            let t = (0, l.c)(e, .1);
            return t && {
                duration: e => {
                    t({
                        spanName: "chat_move_to_visible_list_change",
                        durationMs: e,
                        outcome: "success"
                    })
                },
                visibilityUnknown: () => {
                    t({
                        spanName: "chat_move_visibility_at_accept_unknown",
                        outcome: "success"
                    })
                }
            }
        }
        var s = n("BJjx");
        let u = "[data-sidebar-navigation-root]",
            d = "data-sidebar-project-container-id",
            c = `[${d}], ${i.c.sidebarProjectListContainer}`,
            p = {
                threshold: 0,
                trackVisibility: !0,
                delay: 100
            },
            g = new Map;

        function m(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
            return h(t, n, () => o(e))
        }

        function f(e, t, n) {
            let a, r, {
                threadKey: l,
                source: d
            } = t;
            try {
                if (a = o(e), null != a && "visible" === document.visibilityState) {
                    let e = n instanceof Element ? n.closest(`[${i.b.sidebarThreadId}="${CSS.escape(l)}"]`) : null,
                        t = e?.closest(u),
                        a = null != t && null != (0, s.c)(t) ? t : _(),
                        o = null == a ? void 0 : b(a, null != e && a.contains(e) ? [e] : v(a, l), d);
                    null != o && y(o) && (r = {
                        id: o.id,
                        rect: o.rect,
                        scroller: o.scroller,
                        scrollLeft: o.scroller.scrollLeft,
                        scrollTop: o.scroller.scrollTop
                    })
                }
            } catch {}
            return {
                start: function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
                    return h(e, t, () => a, e.threadKey === l ? r : void 0)
                }
            }
        }

        function h(e, t, n, a) {
            if (g.get(e.threadKey)?.abort(), e.source !== e.destination && "visible" === document.visibilityState) try {
                let l = n();
                if (null == l) return;
                let o = _();
                if (null == o) return;
                let u = new AbortController;
                g.set(e.threadKey, u);
                try {
                    return function(e, t, n, a, l, o) {
                        var u, c, m;
                        let f, h, _, w, T, k, S, {
                            threadKey: N,
                            source: R,
                            destination: M
                        } = t;
                        n.signal.addEventListener("abort", () => g.delete(N), {
                            once: !0
                        });
                        let O = v(e, N),
                            L = b(e, O, R, M),
                            D = null != M && !P(e, M) && !O.some(e => E(e) === M);
                        if (!L && !D) return void n.abort();
                        let x = new AbortController,
                            U = a,
                            G = "released",
                            q = !1,
                            F = !0,
                            K = null != L && (y(L) || (u = e, c = L, m = o, null != m && c.id === m.id && c.scroller === m.scroller && c.scroller.scrollTop === m.scrollTop && c.scroller.scrollLeft === m.scrollLeft && c.rect.left === m.rect.left && c.rect.top === m.rect.top && c.rect.width === m.rect.width && c.rect.height === m.rect.height && I(c, (e, t) => C(u, e, t)))),
                            H = !1,
                            B = () => n.abort(),
                            j = () => {
                                k = window.setTimeout(B, 1e4), S = window.setTimeout(B, 6e4)
                            },
                            z = () => {
                                x.abort(), J.disconnect(), _?.disconnect(), T?.disconnect(), h?.(), window.clearTimeout(k)
                            },
                            W = () => {
                                q && null != f && !n.signal.aborted && (B(), "unknown-at-accept" === f ? l.visibilityUnknown() : l.duration(f.durationMs))
                            },
                            V = e => {
                                x.signal.aborted || "prompt" === G || (f = e, z(), W())
                            },
                            Y = () => {
                                if (h = void 0, "visible" !== document.visibilityState || !(0, s.c)(e)) return void n.abort();
                                let t = v(e, N);
                                F && null != L && K && !t.some(e => E(e) === L.id) && !P(e, L.id) && L.scroller.isConnected && (0, s.c)(L.scroller) && I(L, (e, t) => C(L.scroller, e, t), L.scroller.getBoundingClientRect()) && (null != T && X(T.takeRecords()), V({
                                    durationMs: performance.now() - U
                                }))
                            },
                            Q = t => null != M && e.contains(t) && E(t) === M && "visible" === document.visibilityState && !P(e, M) && null != (0, s.c)(t),
                            X = e => {
                                let t = w;
                                if (!x.signal.aborted && t)
                                    for (let n of e) n.target === t && "prompt" !== G && ("confirmed" !== G || !(n.time <= U)) && (A(n) ? Q(t) && V(H ? "unknown-at-accept" : {
                                        durationMs: n.time - U
                                    }) : H = !1)
                            },
                            $ = e => {
                                let t = new IntersectionObserver(e => {
                                    T === t && X(e)
                                }, p);
                                T = t, t.observe(e)
                            },
                            Z = () => {
                                if (!D || null == M) return;
                                let t = v(e, N).find(e => E(e) === M);
                                t !== w && (T?.disconnect(), H = !1, w = t, null != t && $(t))
                            },
                            J = new MutationObserver(() => {
                                Z(), "prompt" !== G && !x.signal.aborted && F && null != L && null == h && (h = (0, r.a)(window, Y))
                            });
                        j(), n.signal.addEventListener("abort", () => {
                            z(), window.clearTimeout(S)
                        }, {
                            once: !0
                        }), null != L && (_ = new IntersectionObserver(e => {
                            for (let t of e) "prompt" !== G && ("confirmed" !== G || t.time > U) && L.row.isConnected && E(L.row) === L.id && (K = A(t))
                        }, p)).observe(L.row), J.observe(e, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: [i.b.sidebarThreadId, d, "hidden", i.b.sidebarSectionCollapsed, i.b.sidebarProjectCollapsed]
                        });
                        let ee = {
                                capture: !0,
                                passive: !0,
                                signal: x.signal
                            },
                            et = e => {
                                "prompt" === G && e.target instanceof Element && e.target.closest('[role="dialog"]') || B()
                            };
                        for (let e of ["wheel", "touchmove", "pointerdown", "keydown", "visibilitychange"]) document.addEventListener(e, et, ee);
                        for (let e of ["pagehide", "popstate", "hashchange", "resize"]) window.addEventListener(e, et, ee);
                        return {
                            waitForConfirmation() {
                                G = "prompt", window.clearTimeout(k), window.clearTimeout(S)
                            },
                            acceptConfirmation(t) {
                                if ("prompt" === G && !n.signal.aborted) try {
                                    if (U = t, !(0, s.c)(e) || "visible" !== document.visibilityState) return void B();
                                    Z();
                                    let n = null != L && e.contains(L.row) && E(L.row) === L.id;
                                    F = n, K = n && y(L, L.scroller.getBoundingClientRect()), G = "confirmed", j(), w && (H = !0, T?.disconnect(), $(w))
                                } catch {
                                    B()
                                }
                            },
                            finish(e) {
                                e ? "prompt" !== G && (q = !0, W()) : B()
                            }
                        }
                    }(o, e, u, t, l, a)
                } catch {
                    u.abort();
                    return
                }
            } catch {
                return
            }
        }

        function _() {
            let e = Array.from(document.querySelectorAll(u)).filter(e => null != (0, s.c)(e));
            return 1 === e.length ? e[0] : void 0
        }

        function v(e, t) {
            let n = `[${i.b.sidebarThreadId}="${CSS.escape(t)}"]`;
            return Array.from(e.querySelectorAll(n))
        }

        function b(e, t, n, a) {
            let r = t.flatMap(t => {
                let r = E(t);
                if (null == r || r === a || null != n && n !== r) return [];
                let l = t.closest(i.c.sidebarScroll) ?? e,
                    o = l.getBoundingClientRect(),
                    u = (0, s.c)(t, o);
                return null == u ? [] : [{
                    id: r,
                    row: t,
                    rect: u,
                    clip: o,
                    scroller: l
                }]
            });
            return 1 === r.length ? r[0] : void 0
        }

        function y(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.clip;
            return I(e, (t, n) => e.row.contains(document.elementFromPoint(t, n)), t)
        }

        function I(e, t) {
            let {
                rect: n,
                clip: i
            } = e, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i;
            if ((0, a.b)()) return !1;
            let l = Math.max(0, n.left, r.left),
                o = Math.min(window.innerWidth, n.right, r.right),
                u = Math.max(0, n.top, r.top),
                d = Math.min(window.innerHeight, n.bottom, r.bottom);
            if (o <= l || d <= u) return !1;
            let c = Array.from(document.querySelectorAll('[role="tooltip"], [data-sidebar-thread-drag-overlay], [data-sidebar-sticky-heading]')).map(e => (0, s.c)(e)).filter(e => null != e),
                p = (u + d) / 2;
            return [.25, .5, .75].some(e => {
                let n = l + (o - l) * e;
                return !c.some(e => n >= e.left && n < e.right && p >= e.top && p < e.bottom) && t(n, p)
            })
        }

        function C(e, t, n) {
            let i = document.elementFromPoint(t, n);
            return null != i && e.contains(i)
        }

        function E(e) {
            let t = e.closest(c),
                n = t?.getAttribute(i.b.sidebarProjectListId);
            return null == n ? t?.getAttribute(d) ?? null : `project:${n}`
        }

        function P(e, t) {
            let n = e.querySelector(`[${d}="${CSS.escape(t)}"]`);
            if (null == n) return !1;
            let a = t.startsWith("project:") ? i.b.sidebarProjectCollapsed : i.b.sidebarSectionCollapsed;
            return !!n.closest(s.a) || (n.hasAttribute(a) ? n : n.querySelector(`[${a}]`))?.getAttribute(a) === "true"
        }

        function A(e) {
            return e.isIntersecting && e.intersectionRect.width > 0 && e.intersectionRect.height > 0 && "isVisible" in e && !0 === e.isVisible
        }
    }),
    uNh5: (function(e, t, n) {
        var i = n("SRbQ"),
            a = n("ZG9f"),
            r = n("Zqzr"),
            l = n("CSxw"),
            o = n("GaA7"),
            s = n("e6DU");
        let u = new Set(Object.values(r.oc).flat());
        n.d(t, {}, {
            a: function() {
                let e = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let n = o.a?.lsp;
                    if (null == n || (0, l.b)()) return;
                    let r = new Map,
                        d = !1,
                        c = (0, i.a)(e, new a.b(async e => {
                            if (d) return;
                            let t = r.get(e.id);
                            if (r.has(e.id) || (t = s.a.start("languageServerStartup", {
                                    server: e.server,
                                    language: u.has(e.language) ? e.language : void 0,
                                    remote: e.remote
                                }, {
                                    atMs: e.startedAtMs
                                }), r.set(e.id, t)), "start" === e.phase) return;
                            let n = {
                                atMs: e.atMs,
                                attributes: {
                                    runtime: e.runtime,
                                    runtimeVersion: e.runtimeVersion,
                                    optionSource: e.optionSource,
                                    configuredServer: e.configuredServer
                                }
                            };
                            "option-chosen" === e.phase ? s.a.event(t, "lspOptionChosen", n) : "download-completed" === e.phase || "option-failed" === e.phase ? s.a.event(t, "download-completed" === e.phase ? "runtimeDownloadCompleted" : "runtimeOptionFailed", n) : ("ready" === e.phase ? s.a.successIfActive(t, n) : "failure" === e.phase ? s.a.failureIfActive(t, n) : s.a.cancelIfActive(t, n), r.delete(e.id))
                        }), !1),
                        p = n.subscribeStartup(c);
                    return p.onRpcBroken(t), t;

                    function t() {
                        if (!d) {
                            for (let e of (d = !0, p[Symbol.dispose](), r.values())) s.a.cancelIfActive(e);
                            r.clear()
                        }
                    }
                } catch (t) {
                    e.error = t, e.hasError = !0
                } finally {
                    (0, i.e)(e)
                }
            }
        })
    }),
    e6DU: (function(e, t, n) {
        n.d(t, {
            a: () => A
        });
        var i = n("zPtR"),
            a = n("xWvF"),
            r = n("nZhi");
        class l {
            options;
            intervalId = crypto.randomUUID();
            active = !0;
            startedAtMs;
            lastAtMs;
            order = 0;
            attributes;
            markers = new Set;
            pendingEvents = [];
            isEmitting = !1;
            now;
            constructor(e) {
                this.options = e, this.now = e.now ?? o, this.startedAtMs = this.lastAtMs = e.atMs ?? this.now(), this.attributes = {
                    ...e.attributes
                }, this.record("start", {
                    atMs: this.startedAtMs
                })
            }
            get isActive() {
                return this.active
            }
            static event = (e, t, n) => {
                e?.record(t, n)
            };
            static eventOnceIfActive = (e, t, n) => {
                e?.active && !e.markers.has(t) && e.record(t, n)
            };
            static successIfActive = (e, t) => {
                e?.record("success", t)
            };
            static failureIfActive = (e, t) => {
                e?.record("failure", t)
            };
            static cancelIfActive = (e, t) => {
                e?.record("cancel", t)
            };
            record(e, t) {
                if (!this.active) return;
                let n = t?.atMs ?? this.now();
                if (!Number.isFinite(n)) return;
                let i = Math.max(n, this.lastAtMs),
                    a = "success" === e || "failure" === e || "cancel" === e ? e : void 0;
                if (t?.attributes != null && (this.attributes = {
                        ...this.attributes,
                        ...t.attributes
                    }), this.lastAtMs = i, null != a ? this.active = !1 : "start" !== e && this.markers.add(e), this.pendingEvents.push({
                        intervalId: this.intervalId,
                        intervalType: this.options.intervalType,
                        order: this.order++,
                        marker: e,
                        startedAtMs: this.startedAtMs,
                        atMs: i,
                        durationMs: i - this.startedAtMs,
                        attributes: this.attributes,
                        outcome: a
                    }), !this.isEmitting) {
                    for (let e of (this.isEmitting = !0, this.pendingEvents)) try {
                        this.options.emit(e)?.catch(() => {})
                    } catch {}
                    this.pendingEvents.length = 0, this.isEmitting = !1
                }
            }
        }

        function o() {
            return performance.timeOrigin + performance.now()
        }
        var s = n("ASxG");
        let u = s.number().min(0).max(1).catch(0),
            d = s.union([s.object({
                device: u.optional(),
                interval: u.optional()
            }), s.tuple([u, s.unknown()]).transform(e => {
                let [t] = e;
                return {
                    device: 1,
                    interval: t
                }
            })]).catch({
                device: 0,
                interval: 0
            }),
            c = s.record(s.string(), d).catch({});

        function p(e) {
            return 1 === e || e > 0 && Math.random() < e
        }
        let g = {
                languageServerStartup: "CHATGPT_CLIENT_INTERVAL_TYPE_LANGUAGE_SERVER_STARTUP",
                codeNavigation: "CHATGPT_CLIENT_INTERVAL_TYPE_CODE_NAVIGATION",
                applicationStartup: "CHATGPT_CLIENT_INTERVAL_TYPE_APPLICATION_STARTUP",
                screenLoad: "CHATGPT_CLIENT_INTERVAL_TYPE_SCREEN_LOAD",
                conversationTurn: "CHATGPT_CLIENT_INTERVAL_TYPE_CONVERSATION_TURN"
            },
            m = {
                languageServerComplete: "CHATGPT_CLIENT_MARKER_TYPE_LANGUAGE_SERVER_COMPLETE",
                runtimeDownloadCompleted: "CHATGPT_CLIENT_MARKER_TYPE_RUNTIME_DOWNLOAD_COMPLETED",
                lspOptionChosen: "CHATGPT_CLIENT_MARKER_TYPE_LANGUAGE_SERVER_OPTION_CHOSEN",
                runtimeOptionFailed: "CHATGPT_CLIENT_MARKER_TYPE_RUNTIME_OPTION_FAILED",
                firstResultShown: "CHATGPT_CLIENT_MARKER_TYPE_FIRST_RESULT_SHOWN",
                resultChosen: "CHATGPT_CLIENT_MARKER_TYPE_RESULT_CHOSEN",
                start: "CHATGPT_CLIENT_MARKER_TYPE_START",
                success: "CHATGPT_CLIENT_MARKER_TYPE_SUCCESS",
                failure: "CHATGPT_CLIENT_MARKER_TYPE_FAILURE",
                cancel: "CHATGPT_CLIENT_MARKER_TYPE_CANCEL",
                firstFrame: "CHATGPT_CLIENT_MARKER_TYPE_FIRST_FRAME",
                contentRendered: "CHATGPT_CLIENT_MARKER_TYPE_CONTENT_RENDERED",
                loadedFinally: "CHATGPT_CLIENT_MARKER_TYPE_LOADED_FINALLY",
                loadedFromCache: "CHATGPT_CLIENT_MARKER_TYPE_LOADED_FROM_CACHE",
                loadingShimmerRendered: "CHATGPT_CLIENT_MARKER_TYPE_LOADING_SHIMMER_RENDERED",
                firstVisibleToken: "CHATGPT_CLIENT_MARKER_TYPE_FIRST_VISIBLE_TOKEN",
                submit: "CHATGPT_CLIENT_MARKER_TYPE_SUBMIT",
                statsigReady: "CHATGPT_CLIENT_MARKER_TYPE_STATSIG_READY"
            },
            f = new class {
                production;
                configuration = {};
                cachedRates = new Map;
                devices = new Map;
                constructor(e) {
                    this.production = e
                }
                updateSamplingConfiguration(e) {
                    for (let [t, n] of(this.configuration = c.parse(e), this.cachedRates.clear(), this.devices)) this.rates(t).device !== n.rate && this.devices.delete(t);
                    return this.configuration
                }
                sample(e) {
                    let t = this.rates(e),
                        n = t.device * t.interval;
                    if (n <= 0 || !Number.isFinite(1 / n)) return null;
                    let i = this.devices.get(e);
                    return (null == i && (i = {
                        rate: t.device,
                        sampled: p(t.device)
                    }, this.devices.set(e, i)), i.sampled && p(t.interval)) ? 1 / n : null
                }
                rates(e) {
                    let t = this.cachedRates.get(e);
                    if (null != t) return t;
                    let n = {
                        ...{
                            device: this.production ? .01 : 1,
                            interval: 1
                        },
                        ...this.configuration.__base
                    };
                    "CHATGPT_CLIENT_INTERVAL_TYPE_CONVERSATION_TURN" === e && (n.device = 1, n.interval = 1);
                    let i = {
                        ...n,
                        ...this.configuration[e]
                    };
                    return this.cachedRates.set(e, i), i
                }
            }(!0),
            h = "codex.3895505958",
            _ = !1,
            v = new Map,
            b = null,
            y = null,
            I = "pending",
            C = [],
            E = performance.timeOrigin + performance.now(),
            P = !1,
            A = {
                setApplicationStartInstant: e => !P && !!Number.isFinite(e) && (E = e, !0),
                start(e, t, n) {
                    if (P = !0, !_) {
                        _ = !0;
                        try {
                            f.updateSamplingConfiguration(JSON.parse(localStorage.getItem(h) ?? "{}"))
                        } catch {}
                    }
                    let a = "disabled" === I ? null : f.sample(g[e]);
                    return null != a || (0, r.e)() ? new l({
                        intervalType: e,
                        attributes: t,
                        atMs: n?.atMs,
                        emit: e => S(() => (function(e, t) {
                            if ((0, r.e)()) {
                                let t = Math.max(performance.timeOrigin, e.startedAtMs);
                                (0, r.d)({
                                    name: `interval.${e.intervalType}.${e.marker}`,
                                    source: "Client spans",
                                    startedAtMs: t,
                                    durationMs: Math.max(0, e.atMs - t),
                                    metadata: {
                                        intervalId: e.intervalId,
                                        intervalDurationMs: e.durationMs,
                                        order: e.order,
                                        outcome: e.outcome
                                    }
                                })
                            }
                            if ("start" === e.marker) {
                                if (null == t) return;
                                let n = T(y);
                                if ("disabled" === n || v.size >= 32) return;
                                let i = {
                                    sampleWeight: t,
                                    decision: n,
                                    events: [],
                                    ended: !1,
                                    timeout: "pending" === n ? setTimeout(() => {
                                        "enabled" !== i.decision && w(e.intervalId)
                                    }, 18e5) : void 0
                                };
                                v.set(e.intervalId, i)
                            }
                            let n = v.get(e.intervalId);
                            if (null == n) return;
                            n.ended = null != e.outcome, "submit" === e.marker && "startSource" in e.attributes && "CHATGPT_CLIENT_MARKER_CONVERSATION_TURN_START_SOURCE_CLICK" === e.attributes.startSource && null == n.clickToSubmitMs && (n.clickToSubmitMs = e.durationMs);
                            let a = Object.hasOwn(m, e.marker) ? m[e.marker] : void 0;
                            if (null != a) {
                                let t = {
                                    intervalType: g[e.intervalType],
                                    markerType: a,
                                    intervalId: e.intervalId,
                                    intervalOrder: (0, i.c)(e.order),
                                    intervalDurationMs: e.durationMs,
                                    applicationDurationMs: Math.max(0, e.atMs - E),
                                    hits: n.sampleWeight,
                                    sampleWeight: n.sampleWeight,
                                    ... function(e, t) {
                                        let n = e.attributes;
                                        switch (e.intervalType) {
                                            case "codeNavigation":
                                                return {
                                                    codeNavigationAttributes: {
                                                        source: n.source,
                                                        language: n.language,
                                                        kind: n.kind
                                                    }
                                                };
                                            case "languageServerStartup":
                                                return {
                                                    languageServerStartupAttributes: {
                                                        server: n.server,
                                                        language: n.language,
                                                        remote: n.remote,
                                                        runtime: n.runtime,
                                                        runtimeVersion: n.runtimeVersion,
                                                        optionSource: n.optionSource,
                                                        configuredServer: n.configuredServer
                                                    }
                                                };
                                            case "applicationStartup":
                                                return {
                                                    applicationStartupAttributes: {
                                                        settledRootStateKind: n.settledRootStateKind
                                                    }
                                                };
                                            case "screenLoad":
                                                return {
                                                    screenLoadAttributes: {
                                                        screen: n.screen,
                                                        fromScreen: n.fromScreen,
                                                        cause: n.cause,
                                                        readinessSource: n.readinessSource
                                                    }
                                                };
                                            case "conversationTurn":
                                                return {
                                                    conversationTurnAttributes: {
                                                        model: n.model,
                                                        productExperience: n.productExperience,
                                                        startSource: n.startSource,
                                                        clickToSubmitMs: n.clickToSubmitMs ?? (0, i.c)(t)
                                                    }
                                                }
                                        }
                                    }(e, n.clickToSubmitMs)
                                };
                                if ("enabled" === n.decision && y?.enabled && y.isAllowed()) k(y, t);
                                else if ("pending" === n.decision) {
                                    if (n.events.length >= 64) return void w(e.intervalId);
                                    n.events.push(t)
                                }
                            }
                            n.ended && "pending" !== n.decision && w(e.intervalId)
                        })(e, a))
                    }) : null
                },
                event: l.event,
                eventOnceIfActive: l.eventOnceIfActive,
                successIfActive: l.successIfActive,
                failureIfActive: l.failureIfActive,
                cancelIfActive: l.cancelIfActive,
                setUpAnalyticsSink: function(e) {
                    P = !0, b = e;
                    let t = T(e);
                    I = t, S(() => (function(e, t) {
                        if (y = e, null == e) {
                            if (null == b)
                                for (let e of v.keys()) w(e);
                            return
                        }
                        for (let [n, i] of v) {
                            if (("pending" === i.decision || "disabled" === t) && (i.decision = t), "enabled" === i.decision && e.enabled && e.isAllowed()) {
                                for (let t of (clearTimeout(i.timeout), i.timeout = void 0, i.events)) k(e, t);
                                i.events.length = 0
                            } else if ("pending" !== i.decision) {
                                w(n);
                                continue
                            }
                            i.ended && "pending" !== i.decision && w(n)
                        }
                    })(e, t))
                },
                updateSamplingConfiguration: function(e) {
                    P = !0, _ = !0;
                    let t = f.updateSamplingConfiguration(e);
                    try {
                        localStorage.setItem(h, JSON.stringify(t))
                    } catch {}
                }
            };

        function w(e) {
            let t = v.get(e);
            null != t && clearTimeout(t.timeout), v.delete(e)
        }

        function T(e) {
            return null == e || "pending" === e.analyticsState ? "pending" : e.enabled && e.isAllowed() ? "enabled" : "disabled"
        }

        function k(e, t) {
            try {
                b?.enabled && b.isAllowed() && e.logProductEvent(a.b, t)
            } catch {}
        }

        function S(e) {
            C.push(e), 1 === C.length && queueMicrotask(() => {
                for (let e of C) try {
                    e()
                } catch {}
                C.length = 0
            })
        }
    }),
    kjQz: (function(e, t, n) {
        n.d(t, {
            a: () => h,
            b: () => _
        });
        var i = n("gbzJ"),
            a = n("pwwq"),
            r = n("GaA7"),
            l = n("IwWE"),
            o = n("jgoj");
        class s extends l.f {
            windows = new Map;
            start(e) {
                var t;
                let n, i, a, r = super.start(e);
                return "u" < typeof document || this.windows.set(r, (t = r.startedAtPerformanceMs, n = {}, i = 1 / 0, (a = (0, o.a)({
                    frame(e, a) {
                        if (e < t || a > i) return;
                        let r = a - e;
                        n.frameGapCount = (n.frameGapCount ?? 0) + 1, n.frameGapOver50MsCount = (n.frameGapOver50MsCount ?? 0) + Number(r > 50), n.frameGapMsSum = (n.frameGapMsSum ?? 0) + r, n.frameGapMsMax = Math.max(n.frameGapMsMax ?? 0, r)
                    },
                    event(e) {
                        if (e.processingEnd < t || e.processingStart > i) return;
                        n.interactionEventCount = (n.interactionEventCount ?? 0) + 1;
                        let a = e.processingEnd - e.processingStart;
                        null != n.worstEventDurationMs && (e.duration < n.worstEventDurationMs || e.duration === n.worstEventDurationMs && a <= (n.worstEventProcessingMs ?? 0)) || (n.worstEventDurationMs = e.duration, n.worstEventInputDelayMs = e.processingStart - e.startTime, n.worstEventProcessingMs = a, n.worstEventPresentationDelayMs = Math.max(0, e.startTime + e.duration - e.processingEnd))
                    }
                })).eventsSupported && (n.interactionEventCount = 0), {
                    metrics: n,
                    end: () => {
                        i = performance.now()
                    },
                    stop: a.stop
                })), r
            }
            finish(e, t, n) {
                let i = this.windows.get(e);
                i?.end(), super.finish(e, (n, a) => {
                    this.stopWindow(e), t({
                        ...n,
                        ...i?.metrics
                    }, a)
                }, n)
            }
            discard(e) {
                this.stopWindow(e), super.discard(e)
            }
            stopWindow(e) {
                this.windows.get(e)?.stop(), this.windows.delete(e)
            }
        }
        let u = {
            app_start: 12e4,
            artifact_generation: 12e4,
            artifact_preview: 12e4,
            artifact_thumbnail: 12e4,
            dictation: 66e4,
            pages_realtime_scroll: 12e4,
            pages_realtime_drag: 12e4,
            pages_realtime_zoom_pan: 12e4,
            page_navigation: 6e4,
            page_document_bootstrap: 6e4,
            plugins_page_load: 3e4,
            review_open: 6e4,
            spaces_ephemeral_text_draft: 36e5,
            spaces_ephemeral_image_candidate: 36e5,
            spaces_ephemeral_visualization_draft_create: 36e5,
            spaces_ephemeral_visualization_draft_revise: 36e5,
            spaces_ephemeral_visualization_update: 36e5,
            spaces_ephemeral_visualization_create: 36e5,
            spaces_ephemeral_artifact_create: 36e5,
            spaces_ephemeral_canvas_command: 36e5,
            thread_history_page: 12e4,
            thread_hydration: 12e4,
            home_navigation: 3e4,
            thread_navigation: 3e4,
            turn_first_response_visible: 12e4,
            webview_load: 12e4
        };
        class d {
            performance;
            span;
            constructor(e, t) {
                this.performance = e, this.span = t
            }
            mark(e, t) {
                this.performance.mark(this.span, e, t)
            }
            measure(e, t) {
                return this.performance.measure(this.span, e, t)
            }
            end(e) {
                this.performance.end(this.span, e)
            }
            fail(e) {
                this.performance.fail(this.span, e)
            }
            isRecording() {
                return null != this.span && !this.span.terminal
            }
            recordAnalyticsSuccess() {
                return this.performance.recordAnalyticsSuccess(this.span)
            }
            abort(e) {
                this.performance.abort(this.span, e)
            }
            get trace() {
                return this.span?.trace ?? null
            }
        }

        function c(e) {
            try {
                e?.()
            } catch {}
        }

        function p() {
            return performance.timeOrigin + performance.now()
        }

        function g(e, t) {
            return Math.round(10 * Math.max(0, t - e)) / 10
        }
        let m = new Set,
            f = {
                app_start: "desktop.app_start",
                home_navigation: "desktop.home_navigation",
                artifact_generation: "desktop.artifact_generation",
                artifact_preview: "desktop.artifact_preview",
                artifact_thumbnail: "desktop.artifact_thumbnail",
                dictation: "desktop.dictation",
                pages_realtime_scroll: "desktop.pages_realtime_scroll",
                pages_realtime_drag: "desktop.pages_realtime_drag",
                pages_realtime_zoom_pan: "desktop.pages_realtime_zoom_pan",
                page_navigation: "desktop.page_navigation",
                page_document_bootstrap: "desktop.page_document_bootstrap",
                plugins_page_load: "desktop.plugins_page_load",
                review_open: "desktop.review_open",
                spaces_ephemeral_text_draft: "desktop.spaces_ephemeral_text_draft",
                spaces_ephemeral_image_candidate: "desktop.spaces_ephemeral_image_candidate",
                spaces_ephemeral_visualization_draft_create: "desktop.spaces_ephemeral_visualization_draft_create",
                spaces_ephemeral_visualization_draft_revise: "desktop.spaces_ephemeral_visualization_draft_revise",
                spaces_ephemeral_visualization_update: "desktop.spaces_ephemeral_visualization_update",
                spaces_ephemeral_visualization_create: "desktop.spaces_ephemeral_visualization_create",
                spaces_ephemeral_artifact_create: "desktop.spaces_ephemeral_artifact_create",
                spaces_ephemeral_canvas_command: "desktop.spaces_ephemeral_canvas_command",
                thread_history_page: "desktop.thread_history_page",
                thread_hydration: "thread.hydration",
                thread_navigation: "desktop.thread_navigation",
                turn_first_response_visible: "desktop.turn_submit",
                webview_load: "desktop.webview_load"
            },
            h = new class {
                activeInteractions = new Map;
                beginCpuSampling;
                clientPlatform;
                captureAppState;
                hostType;
                now;
                isDocumentHidden;
                responsivenessTracker;
                startTrace;
                wallNow;
                heartbeatTimer = null;
                pendingEvents = [];
                terminalInteractions = new Set;
                analytics;
                analyticsEmitters;
                loggingConfigured = !1;
                samplingEnabled = null;
                constructor({
                    beginCpuSampling: e = () => null,
                    captureAppState: t = async () => null,
                    clientPlatform: n,
                    hostType: i,
                    now: a = p,
                    isDocumentHidden: r = () => "u" > typeof document && "visible" !== document.visibilityState,
                    responsivenessTracker: l = new s,
                    startTrace: o = () => null,
                    subscribeToDocumentVisibility: u = e => {
                        "u" > typeof document && document.addEventListener("visibilitychange", e)
                    },
                    wallNow: d = a
                }) {
                    this.beginCpuSampling = e, this.clientPlatform = n, this.captureAppState = t, this.hostType = i, this.now = a, this.isDocumentHidden = r, this.responsivenessTracker = l, this.startTrace = o, this.wallNow = d, u(() => {
                        this.handleDocumentVisibilityChange()
                    })
                }
                setAppStateCapture(e) {
                    this.captureAppState = e ?? (async () => null)
                }
                configurePerformanceLogging(e, t) {
                    for (let n of (this.analytics = t, this.analyticsEmitters = null == t ? void 0 : {
                            app_start: t.emit,
                            artifact_generation: t.emit,
                            artifact_preview: t.emit,
                            artifact_thumbnail: t.emit,
                            dictation: t.emit,
                            pages_realtime_scroll: t.emit,
                            pages_realtime_drag: t.emit,
                            pages_realtime_zoom_pan: t.emit,
                            page_navigation: t.emit,
                            page_document_bootstrap: t.emit,
                            plugins_page_load: t.emit,
                            review_open: t.emit,
                            spaces_ephemeral_text_draft: t.emit,
                            spaces_ephemeral_image_candidate: t.emit,
                            spaces_ephemeral_visualization_draft_create: t.emit,
                            spaces_ephemeral_visualization_draft_revise: t.emit,
                            spaces_ephemeral_visualization_update: t.emit,
                            spaces_ephemeral_visualization_create: t.emit,
                            spaces_ephemeral_artifact_create: t.emit,
                            spaces_ephemeral_canvas_command: t.emit,
                            ...{},
                            thread_history_page: t.emit,
                            thread_hydration: t.emit,
                            home_navigation: t.emit,
                            thread_navigation: t.emit,
                            turn_first_response_visible: t.emit,
                            webview_load: t.emit
                        }, this.loggingConfigured = !0, this.samplingEnabled = e, this.activeInteractions.values())) "pending" === n.decision && (e ? (n.decision = "sampled", n.sampling = t?.sampling) : this.drop(n));
                    for (let n of this.terminalInteractions.values()) "pending" === n.decision && (n.decision = e ? "sampled" : "dropped", n.sampling = e ? t?.sampling : void 0, e || this.settleAnalytics(n));
                    for (let {
                            emit: n,
                            span: i
                        }
                        of this.pendingEvents.splice(0)) "pending" === i.decision && (i.decision = e ? "sampled" : "dropped", i.sampling = e ? t?.sampling : void 0), "sampled" === i.decision ? n() : this.settleAnalytics(i)
                }
                resetPerformanceLoggingConfiguration() {
                    this.analytics = void 0, this.analyticsEmitters = void 0, this.loggingConfigured = !1, this.samplingEnabled = null
                }
                start(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = u[e];
                    if (null == i) return c(n.onAnalyticsSettled), new d(this, null);
                    let a = `${e}:${n.key??""}`,
                        r = this.activeInteractions.get(a);
                    null != r && this.finish(r, {
                        outcome: "aborted",
                        reason: "superseded"
                    });
                    let l = this.startTrace({
                        attributes: n.traceAttributes ?? {},
                        name: e,
                        startedAtMs: n.startedAtMs,
                        trace: n.trace
                    });
                    if (!1 === this.samplingEnabled && !n.recordUnsampled && null == l) return c(n.onAnalyticsSettled), new d(this, null);
                    let o = this.now(),
                        s = this.wallNow(),
                        p = n.startedAtMs ?? o,
                        g = n.wallStartedAtMs ?? s,
                        m = !1 === this.samplingEnabled ? "dropped" : !0 === this.samplingEnabled ? "sampled" : "pending",
                        f = {
                            activeKey: a,
                            observedPhase: null,
                            analyticsRecorded: !1,
                            analyticsAttributesReady: "dropped" === m && null == l ? void 0 : n.captureAttributes?.(l).catch(() => {}),
                            attributes: t,
                            backgroundDurationMs: 0,
                            backgroundStartedAtMs: this.isDocumentHidden() ? s : null,
                            cpuSampling: "dropped" === m || !0 === n.backfilled ? null : this.beginCpuSampling(),
                            decision: m,
                            heartbeatGapDurationMsSum: 0,
                            lastHeartbeatAtMs: o,
                            lastHeartbeatWallAtMs: s,
                            responsivenessToken: "dropped" === m ? null : this.responsivenessTracker.start(p),
                            marks: {},
                            name: e,
                            observationTimeout: null != n.observationTimeoutMs,
                            onAnalyticsSettled: n.onAnalyticsSettled,
                            onTerminal: n.onTerminal,
                            sampling: !0 === this.samplingEnabled ? this.analytics?.sampling : void 0,
                            shouldEmitAnalytics: n.shouldEmitAnalytics,
                            startedAtMs: p,
                            terminal: !1,
                            timeout: null,
                            timeoutRemainingMs: n.observationTimeoutMs ?? n.timeoutMs ?? i,
                            timeoutStartedAtMs: null,
                            trace: l?.trace ?? n.trace,
                            keepLocalTraceWhenUnsampled: !0 === n.recordUnsampled,
                            localTrace: n.startLocalTrace?.(p, this.now),
                            traceHandle: l,
                            wallStartedAtMs: g
                        };
                    return "dropped" === m && this.settleAnalytics(f), this.activeInteractions.set(a, f), this.ensureHeartbeat(), (f.observationTimeout || null == f.backgroundStartedAtMs) && this.scheduleTimeout(f, s), new d(this, f)
                }
                mark(e, t, n) {
                    if (null == e || e.terminal || null != e.marks[t]) return;
                    let i = "number" == typeof n ? n : n?.atMs;
                    e.marks[t] = g(e.startedAtMs, i ?? this.now()), e.traceHandle?.mark(t, {
                        atMs: i,
                        attributes: "number" == typeof n ? {} : n?.traceAttributes ?? {}
                    })
                }
                measure(e, t, n) {
                    return e?.traceHandle?.measure(t, {
                        attributes: n?.attributes ?? {},
                        startedAtMs: n?.startedAtMs
                    }) ?? {
                        end: () => {}
                    }
                }
                end(e, t) {
                    null != e && this.finish(e, {
                        outcome: "success",
                        reason: null
                    }, t)
                }
                recordAnalyticsSuccess(e) {
                    if (null == e || e.terminal) return !1;
                    if (!e.analyticsRecorded) {
                        let t = this.now(),
                            n = this.wallNow();
                        this.recordHeartbeat(e, t, n), e.analyticsRecorded = !0, this.recordAnalytics(e, {
                            outcome: "success",
                            reason: null
                        }, t, n)
                    }
                    return null != e.traceHandle || null != e.localTrace || (e.terminal = !0, this.clear(e), e.onTerminal?.(), !1)
                }
                fail(e, t) {
                    null != e && this.finish(e, {
                        outcome: "failure",
                        reason: t
                    })
                }
                abort(e, t) {
                    null != e && this.finish(e, {
                        outcome: "aborted",
                        reason: t
                    })
                }
                finish(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.now();
                    if (e.terminal) return;
                    e.terminal = !0;
                    let i = this.wallNow();
                    this.recordHeartbeat(e, n, i), this.clear(e), e.localTrace?.(t), e.traceHandle?.finish(t), e.analyticsRecorded || (e.analyticsRecorded = !0, this.recordAnalytics(e, t, n, i)), e.onTerminal?.()
                }
                recordAnalytics(e, t, n, i) {
                    if ("dropped" === e.decision) return void this.settleAnalytics(e);
                    let a = g(e.startedAtMs, n),
                        r = g(e.wallStartedAtMs, i),
                        l = g(0, e.backgroundDurationMs + (null == e.backgroundStartedAtMs ? 0 : Math.max(0, i - e.backgroundStartedAtMs))),
                        o = e.heartbeatGapDurationMsSum,
                        s = "foreground";
                    l > 0 ? s = "backgrounded" : o > 0 && (s = "heartbeat_gap");
                    let u = e.cpuSampling?.finish();
                    e.cpuSampling = null;
                    let d = {
                            ...e.marks
                        },
                        c = this.captureAppState(),
                        p = null == e.analyticsAttributesReady ? c : Promise.all([c.catch(() => null), e.analyticsAttributesReady]).then(e => {
                            let [t] = e;
                            return t
                        });
                    this.terminalInteractions.add(e);
                    let m = (i, u, c) => {
                            if (this.terminalInteractions.delete(e), "dropped" === e.decision) return void this.settleAnalytics(e);
                            let p = {
                                    attributes: e.attributes,
                                    clientPlatform: this.clientPlatform,
                                    durationMs: a,
                                    endedAtMs: n,
                                    hostType: this.hostType,
                                    marks: d,
                                    name: e.name,
                                    rendererResponsiveness: c,
                                    spanId: e.trace?.traceparent.slice(36, 52),
                                    timing: {
                                        backgroundDurationMs: l,
                                        heartbeatGapDurationMsSum: o,
                                        quality: s,
                                        wallDurationMs: r
                                    },
                                    traceId: e.trace?.traceparent.slice(3, 35),
                                    ...t
                                },
                                g = () => {
                                    try {
                                        if (null == this.analytics || null == this.analyticsEmitters || e.shouldEmitAnalytics?.() === !1) return;
                                        this.analyticsEmitters[e.name]?.(null == u ? p : {
                                            ...p,
                                            electronCpu: u
                                        }, i, e.sampling ?? this.analytics.sampling)
                                    } finally {
                                        this.settleAnalytics(e)
                                    }
                                };
                            if ("sampled" === e.decision && this.loggingConfigured) g();
                            else {
                                if (this.pendingEvents.length >= 20) {
                                    let t = this.pendingEvents.findIndex(e => {
                                        let {
                                            span: t
                                        } = e;
                                        return "pending" === t.decision
                                    });
                                    if (t >= 0) {
                                        let [e] = this.pendingEvents.splice(t, 1);
                                        null != e && (e.span.decision = "dropped", this.settleAnalytics(e.span))
                                    } else if ("pending" === e.decision) {
                                        e.decision = "dropped", this.settleAnalytics(e);
                                        return
                                    }
                                }
                                this.pendingEvents.push({
                                    emit: g,
                                    span: e
                                })
                            }
                        },
                        f = e.responsivenessToken;
                    (e.responsivenessToken = null, null == f) ? this.settleAnalytics(e): this.responsivenessTracker.finish(f, (e, t) => {
                        null == u ? p.then(t => m(t, null, e), () => m(null, null, e)) : Promise.all([p.catch(() => null), u.catch(() => null)]).then(t => {
                            let [n, i] = t;
                            m(n, i, e)
                        })
                    }, {
                        immediate: "aborted" === t.outcome && "app_disposed" === t.reason
                    })
                }
                settleAnalytics(e) {
                    this.terminalInteractions.delete(e);
                    let t = e.onAnalyticsSettled;
                    e.onAnalyticsSettled = void 0, c(t)
                }
                drop(e) {
                    e.decision = "dropped", null != e.responsivenessToken && (this.responsivenessTracker.discard(e.responsivenessToken), e.responsivenessToken = null), e.cpuSampling?.cancel(), e.cpuSampling = null, this.settleAnalytics(e), null != e.traceHandle || null != e.localTrace && (e.keepLocalTraceWhenUnsampled || e.localTrace.keepWhenUnsampled?.()) || (e.terminal = !0, this.clear(e), e.localTrace?.({
                        outcome: "aborted",
                        reason: "not_sampled"
                    }), e.onTerminal?.())
                }
                clear(e) {
                    null != e.timeout && (clearTimeout(e.timeout), e.timeout = null), e.timeoutStartedAtMs = null, this.activeInteractions.get(e.activeKey) === e && this.activeInteractions.delete(e.activeKey), 0 === this.activeInteractions.size && null != this.heartbeatTimer && (clearInterval(this.heartbeatTimer), this.heartbeatTimer = null)
                }
                ensureHeartbeat() {
                    null == this.heartbeatTimer && (this.heartbeatTimer = setInterval(() => {
                        let e = this.now(),
                            t = this.wallNow();
                        for (let n of this.activeInteractions.values()) this.recordHeartbeat(n, e, t)
                    }, 1e3))
                }
                recordHeartbeat(e, t, n) {
                    let i = Math.max(g(e.lastHeartbeatAtMs, t), g(e.lastHeartbeatWallAtMs, n));
                    i >= 6e3 && (e.heartbeatGapDurationMsSum += i - 1e3), e.lastHeartbeatAtMs = t, e.lastHeartbeatWallAtMs = n
                }
                scheduleTimeout(e, t) {
                    e.timeoutStartedAtMs = t;
                    let n = setTimeout(() => {
                        if (!e.terminal && e.timeout === n) {
                            if (!e.observationTimeout && this.isDocumentHidden()) return void this.handleDocumentVisibilityChange();
                            this.finish(e, e.observationTimeout ? {
                                outcome: "aborted",
                                reason: "observation_expired"
                            } : {
                                outcome: "failure",
                                reason: "timeout"
                            })
                        }
                    }, e.timeoutRemainingMs);
                    e.timeout = n
                }
                handleDocumentVisibilityChange() {
                    let e = this.wallNow(),
                        t = this.isDocumentHidden();
                    for (let n of this.activeInteractions.values()) t ? (null == n.backgroundStartedAtMs && (n.backgroundStartedAtMs = e), n.observationTimeout || null == n.timeout || (clearTimeout(n.timeout), n.timeout = null, null != n.timeoutStartedAtMs && (n.timeoutRemainingMs = Math.max(0, n.timeoutRemainingMs - (e - n.timeoutStartedAtMs)), n.timeoutStartedAtMs = null))) : null != n.backgroundStartedAtMs && (n.backgroundDurationMs += Math.max(0, e - n.backgroundStartedAtMs), n.backgroundStartedAtMs = null, n.observationTimeout || this.scheduleTimeout(n, e))
                }
            }({
                beginCpuSampling: void 0,
                clientPlatform: (0, i.a)(),
                hostType: "browser",
                isDocumentHidden: void 0,
                startTrace: function(e) {
                    let {
                        attributes: t,
                        name: n,
                        startedAtMs: i,
                        trace: r
                    } = e, l = f[n];
                    if (null == l) return null;
                    let o = "thread_hydration" === n && null == r ? (0, a.e)({
                        attributes: t,
                        rootName: "desktop.thread_open",
                        childName: "thread.hydration"
                    }) : (0, a.f)({
                        attributes: t,
                        name: l,
                        startTimeMs: i,
                        trace: r
                    });
                    if (null == o) return null;
                    let s = new Set;
                    return {
                        finish: e => {
                            for (let t of s) t.finish(void 0, e);
                            s.clear(), o.finish(void 0, e)
                        },
                        mark: (e, t) => {
                            "turn_started" === e && null != t.attributes["turn.id"] && o.setAttributes?.(t.attributes), (0, a.c)({
                                attributes: t.attributes,
                                endTimeMs: t.atMs,
                                name: e,
                                startTimeMs: t.atMs,
                                trace: o.trace
                            })
                        },
                        measure: (e, t) => {
                            let n = (0, a.f)({
                                attributes: t.attributes,
                                name: e,
                                startTimeMs: t.startedAtMs,
                                trace: o.trace
                            });
                            return null == n ? {
                                end: () => {}
                            } : (s.add(n), {
                                end: () => {
                                    s.delete(n) && n.finish()
                                }
                            })
                        },
                        setAttributes: o.setAttributes,
                        trace: o.trace
                    }
                },
                subscribeToDocumentVisibility: void 0,
                wallNow: Date.now
            });

        function _() {
            for (let e of m) ! function(e) {
                let t = r.a?.performanceTelemetry;
                null == t ? m.add(e) : (m.delete(e), function(e) {
                    try {
                        Promise.resolve(e()).catch(() => {})
                    } catch {}
                }(() => t.startSpanCpuSampling(e)))
            }(e)
        }
    }),
    JyvC: (function(e, t, n) {
        var i = n("Dgwo"),
            a = n("l00C"),
            r = n("CfsC");
        let l = null;

        function o(e) {
            let t = e[0];
            if (null == t) return null;
            let n = {
                ...t
            };
            for (let t of e.slice(1))
                for (let [e, i] of Object.entries(t)) {
                    if ("schema_version" === e || "number" != typeof i) continue;
                    let t = Reflect.get(n, e);
                    "number" == typeof t && Reflect.set(n, e, "session_age_ms" === e || e.startsWith("max_") ? Math.max(t, i) : t + i)
                }
            return n
        }
        n.d(t, {}, {
            a: function(e) {
                if (null != l) return l;
                let t = Promise.all(e.get(r.b).filter(t => null != e.get(a.b, t)).map(t => Promise.resolve().then(() => {
                    let n = e.get(i.a);
                    if (null == n) throw Error("AppServerManager RPC is not connected");
                    return n.collectAppStateSnapshot(t, "performance_span_completed")
                }))).then(o).catch(() => null).finally(() => {
                    l === t && (l = null)
                });
                return l = t, t
            }
        })
    }),
    Dl20: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("rEML"),
            r = n("Bl6U"),
            l = n("dQRk"),
            o = n("c9lJ"),
            s = n("jAnS"),
            u = n("tSEg"),
            d = n("kl6F"),
            c = n("iv8n"),
            p = n("Ggpj"),
            g = n("L6b2"),
            m = n("DipL"),
            f = n("S8dY"),
            h = n("xHBh");
        let _ = new class {
            pathname = null;
            start(e, t, n) {
                let i = y(e, t, null);
                i.isHistoryNavigation && null != (0, a.J)(s.a, (0, a.L)(n).pathname ?? "") && p.a.start(i.key, null != e.get(l.N, i.conversationId), !1, !0)
            }
            routerDispatched(e, t, n, i, a) {
                if (t.pathname === n.pathname && t.search === n.search) return void(0, g.d)(t.pathname, n.pathname, n.key);
                c.a.leaveRestoredThread(n.pathname);
                let l = {
                        reason: a,
                        startedAtMs: i,
                        pathname: n.pathname,
                        locationKey: n.key
                    },
                    o = I(e, n.pathname);
                if (null != o) return (h.a.dispatch(null), o.key === I(e, t.pathname)?.key) ? ((0, g.d)(t.pathname, n.pathname, n.key), "same_screen") : void v(e, o, "navigation_dispatched", l);
                let s = (0, u.b)({
                        ...n,
                        routeTemplate: n.pathname
                    }),
                    p = (0, u.b)({
                        ...t,
                        routeTemplate: t.pathname
                    });
                if (h.a.dispatch("local-thread" === s.routeKind ? {
                        threadId: s.conversationId,
                        hostId: s.hostId ?? e.get(r.c, s.conversationId)
                    } : null), "local-thread" === s.routeKind) {
                    let {
                        conversationId: i,
                        hostId: a
                    } = s, o = "local-thread" === p.routeKind && p.conversationId === i, u = "client-local-thread" === p.routeKind && e.get(d.B, p.clientThreadId) === i;
                    if ((o || u) && (p.hostId ?? e.get(r.c, i)) === (a ?? e.get(r.c, i))) return u && f.a.promoteRoute(p.clientThreadId, i), (0, g.d)(t.pathname, n.pathname, n.key, u ? i : void 0), "same_screen";
                    (0, m.b)(e, i, a ?? void 0, l)
                } else if ("client-local-thread" === s.routeKind) {
                    if ("client-local-thread" === p.routeKind && p.clientThreadId === s.clientThreadId && p.hostId === s.hostId) return void(0, g.d)(t.pathname, n.pathname, n.key);
                    let i = e.get(d.B, s.clientThreadId);
                    i ? (0, m.b)(e, i, s.hostId, {
                        ...l,
                        routeThreadId: s.clientThreadId
                    }) : f.a.start(s.clientThreadId, "cold", "local", "navigation_dispatched", l)
                } else "remote-thread" === s.routeKind && ("remote-thread" !== p.routeKind || p.taskId !== s.taskId) ? f.a.start(s.taskId, "cold", "remote", "navigation_dispatched", l) : "remote-thread" !== s.routeKind && f.a.routeChanged(null)
            }
            routeChanged(e, t, n) {
                let i = this.pathname,
                    r = I(e, t);
                this.pathname = t, c.a.leaveRestoredThread(t), f.a.routeChanged(r?.key ?? n);
                let o = I(e, i),
                    u = null == i,
                    d = null != i && null != (0, a.J)(s.a, i);
                r?.isHistoryNavigation && null != (0, a.J)(s.a, t) ? d && r.key === o?.key || p.a.start(r.key, !u && null != e.get(l.N, r.conversationId), u, !1) : p.a.leave(), u || null != r && r.key !== o?.key && v(e, r, "route_entered")
            }
            contentCommitted(e, t, n, i) {
                this.pathname !== i && this.routeChanged(e, i, null);
                let a = this.getCurrentTarget(e, t, n);
                if (null != a) {
                    let t = e.get(l.N, a.conversationId);
                    p.a.visible(a.key, "visible" === document.visibilityState, null == t ? void 0 : Object.keys(t).length)
                }
            }
            pagePainted(e, t, n) {
                null != this.getCurrentTarget(e, t, n) && c.a.markThreadVisible()
            }
            loadFailed(e, t, n, a) {
                let r = this.getCurrentTarget(e, t, n);
                null != r && (f.a.hydrationFailed(r.key, a, "conversation_load_failed"), p.a.failed(r.key, "canceled" === (0, i.uh)(a)["codex.outcome"]), "canceled" !== (0, i.uh)(a)["codex.outcome"] && c.a.failConversationLoad())
            }
            getCurrentTarget(e, t, n) {
                let i = y(e, t, n);
                return I(e, this.pathname)?.key === i.key ? i : null
            }
        };

        function v(e, t, n, i) {
            t.isHistoryNavigation && f.a.start(t.key, null == e.get(l.N, t.conversationId) ? "cold" : "hot", "chatgpt", n, i)
        }

        function b(e, t) {
            return null == t ? `chatgpt:${e}` : `chatgpt-share:${t}`
        }

        function y(e, t, n) {
            if (null != n) return {
                conversationId: n,
                isHistoryNavigation: !0,
                key: b(t, n)
            };
            let i = e.get(l.j, t);
            return {
                conversationId: i ?? t,
                isHistoryNavigation: null != i,
                key: b(i ?? t, null)
            }
        }

        function I(e, t) {
            if (null == t) return null;
            let n = (0, s.j)(t)?.params.conversationId;
            if (null != n) {
                let t = C(n);
                return null == t ? null : y(e, t, null)
            }
            let i = (0, o.a)(t)?.params.sharedConversationId,
                a = null == i ? null : C(i);
            return null == a ? null : y(e, a, a)
        }

        function C(e) {
            try {
                return decodeURIComponent(e)
            } catch {
                return null
            }
        }
        n.d(t, {}, {
            a: b,
            b: _
        })
    }),
    nZhi: (function(e, t, n) {
        let i = [],
            a = null,
            r = !1;

        function l(e) {
            if ("u" < typeof window || !1 === a) return;
            if (null == a) {
                32 === i.length && (i.shift(), r = !0), i.push(e);
                return
            }
            let t = e.startedAtMs - performance.timeOrigin;
            if (!Number.isFinite(t) || t < 0 || !Number.isFinite(e.durationMs) || e.durationMs < 0) return;
            let n = `codex.debug.${e.source}.${e.name}`;
            try {
                performance.measure(n, {
                    start: t,
                    duration: e.durationMs,
                    detail: {
                        metric: e.metadata,
                        devtools: {
                            dataType: "track-entry",
                            track: e.track ?? e.source,
                            trackGroup: "Interaction tracing" === e.source ? "Interaction tracing" : "Codex performance",
                            properties: e.properties,
                            color: e.failed ? "error" : void 0,
                            tooltipText: e.name
                        }
                    }
                }), performance.clearMeasures(n)
            } catch {}
        }
        n.d(t, {}, {
            a: "debug-performance-user-timings",
            b: function() {
                return !0 === a
            },
            c: function(e) {
                for (let t of (a = e, e && r && i.length > 0 && l({
                        name: "startup_buffer_truncated",
                        source: "Debug",
                        startedAtMs: performance.timeOrigin,
                        durationMs: Math.min(...i.map(e => e.startedAtMs)) - performance.timeOrigin
                    }), r = !1, i)) l(t);
                i.length = 0
            },
            d: l,
            e: function() {
                return !1 !== a
            }
        })
    }),
    mz2o: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("OSkm"),
            r = n("CWeU"),
            l = n("unIO"),
            o = n("gbzJ"),
            s = n("ReGc"),
            u = n("bNMl"),
            d = n("RHhA");
        let c = {
                under_30s: "streaming_reply_typing_to_edit_paint_opportunity_under_30s",
                at_least_30s: "streaming_reply_typing_to_edit_paint_opportunity_30s_plus"
            },
            p = {
                chat_archive_to_visible_list_change: .1,
                space_panel_resize_to_first_layout_change: .1,
                model_picker_open_to_first_selectable_model: .1,
                model_selection_to_visible_label: .1,
                search_keypress_to_character_visible: .01,
                search_query_to_first_local_chat_visible: .01,
                home_activity_bell_click_to_selected: .1,
                space_to_home_click_to_selected: .1
            };

        function g(e) {
            return !1
        }

        function m(e, t) {
            if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], !g(e) || Math.random() >= t) return;
            let n = e.get(r.d),
                l = e.get(r.a),
                d = e.get(r.b),
                c = () => g(e) && e.get(r.d) === n && e.get(r.a) === l && e.get(r.b) === d,
                p = new Set;
            return n => {
                let {
                    spanName: r,
                    durationMs: g
                } = n;
                return !p.has(r) && (p.add(r), (null == g || !!Number.isFinite(g) && !(g < 0)) && !!c() && ((0, u.a)(e, a.CodexPerformanceSpanCompleted, {
                    ...n,
                    completedTs: n.completedTs ?? (0, i.c)(Date.now()),
                    appShell: "owl",
                    clientPlatform: (0, o.a)(),
                    buildNumber: e.get(s.a).data?.buildNumber ?? void 0,
                    samplingRatio: t,
                    samplingReason: "random"
                }, void 0, void 0, {
                    expectedAccountId: l ?? void 0,
                    expectedUserId: d ?? void 0,
                    shouldSend: c
                }), !0))
            }
        }
        n.d(t, {}, {
            a: g,
            b: function(e, t) {
                let n = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = m(e, t, n);
                    return i && ((e, t, n) => i({
                        ...n,
                        spanName: e,
                        ...null == t ? {} : {
                            durationMs: t
                        },
                        outcome: "success",
                        ...n
                    }))
                }(e, p[t], "search_query_to_first_local_chat_visible" === t);
                return n && (e => n(t, e))
            },
            c: m,
            d: function(e, t) {
                if ("nightly" !== (0, d.a)()) return;
                let n = m(e, .01);
                return n && (e => {
                    let {
                        outcome: i,
                        durationMs: a
                    } = e;
                    n({
                        spanName: c[t],
                        ...null == a ? {} : {
                            durationMs: a
                        },
                        outcome: i,
                        buildCommitSha: (0, l.a)()
                    })
                })
            }
        })
    }),
    HpDZ: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("tvQN");
        n.d(t, {}, {
            a: function(e, t) {
                let n = (0, i.b)(t, "round"),
                    r = (0, i.b)(Math.min(Math.max(t, 0), 3e5), "round");
                null != n && null != r && e.logProductEvent(a.b, {
                    eventName: "CHATGPT_PERFORMANCE_EVENT_NAME_FIRST_CONTENTFUL_PAINT",
                    durationMs: n,
                    durationTrimmedMs: r
                }, () => {
                    "hidden" === document.visibilityState && e.flush()
                })
            }
        })
    }),
    bg0G: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("OSkm"),
            r = n("gbzJ"),
            l = n("ReGc"),
            o = n("bNMl");
        n.d(t, {}, {
            a: function(e, t) {
                (0, o.a)(e, a.CodexPerformanceSpanCompleted, {
                    spanName: "git_operation",
                    durationMs: t.durationMs,
                    completedTs: (0, i.c)(Date.now()),
                    outcome: "canceled" === t.outcome || "stale" === t.outcome ? "aborted" : t.outcome,
                    reason: t.reason ?? void 0,
                    clientPlatform: (0, r.a)(),
                    appShell: void 0,
                    buildNumber: e.get(l.a).data?.buildNumber ?? void 0,
                    samplingRatio: t.samplingRatio,
                    samplingReason: t.samplingReason,
                    spanId: t.spanId,
                    traceId: t.traceId,
                    gitOperationAttributes: {
                        operation: t.operation,
                        source: t.source,
                        trigger: t.trigger,
                        hostKind: t.hostKind,
                        cacheStatus: t.cacheStatus,
                        reviewSource: t.reviewSource ?? void 0,
                        queueDurationMs: t.queueDurationMs ?? void 0,
                        firstResultMs: t.firstResultMs ?? void 0,
                        concurrentOperationCount: t.concurrentOperationCount,
                        peakCommandConcurrency: t.peakCommandConcurrency,
                        commandCount: t.commandCount,
                        statusCommandCount: t.statusCommandCount,
                        untrackedStatusCommandCount: t.untrackedStatusCommandCount,
                        untrackedListCommandCount: t.untrackedListCommandCount,
                        diffCommandCount: t.diffCommandCount,
                        failedCommandCount: t.failedCommandCount,
                        failedCommandSubcommand: t.failedCommandSubcommand ?? void 0,
                        failedCommandFailureKind: t.failedCommandFailureKind ?? void 0,
                        failedCommandExitCodeBucket: t.failedCommandExitCodeBucket ?? void 0,
                        failedCommandDurationMs: t.failedCommandDurationMs ?? void 0,
                        failedCommandErrorKind: t.failedCommandErrorKind ?? void 0,
                        canceledCommandCount: t.canceledCommandCount,
                        timedOutCommandCount: t.timedOutCommandCount,
                        outputLimitExceededCount: t.outputLimitExceededCount,
                        commandDurationMsSum: t.commandDurationMsSum,
                        commandDurationMsMax: t.commandDurationMsMax,
                        stdoutBytes: (0, i.c)(t.stdoutBytes),
                        stderrBytes: (0, i.c)(t.stderrBytes),
                        untrackedCacheHitCount: t.untrackedCacheHitCount,
                        untrackedCacheMissCount: t.untrackedCacheMissCount,
                        untrackedCacheCoalescedCount: t.untrackedCacheCoalescedCount,
                        fileCount: t.fileCount ?? void 0,
                        untrackedFileCount: t.untrackedFileCount ?? void 0,
                        additionsCount: t.additions ?? void 0,
                        deletionsCount: t.deletions ?? void 0,
                        diffBytes: null == t.diffBytes ? void 0 : (0, i.c)(t.diffBytes),
                        matchCount: t.matchCount ?? void 0,
                        truncated: t.truncated,
                        repoIndexSizeBucket: t.repoIndexSizeBucket,
                        retryAttempt: t.retryAttempt ?? void 0,
                        resultDisposition: t.resultDisposition ?? void 0,
                        resultFailureReason: t.resultFailureReason ?? void 0
                    }
                })
            },
            b: function(e, t) {
                (0, o.a)(e, a.CodexPerformanceSpanCompleted, {
                    spanName: "git_watcher_snapshot",
                    durationMs: t.snapshotDurationMs,
                    completedTs: (0, i.c)(Date.now()),
                    outcome: "success",
                    clientPlatform: (0, r.a)(),
                    appShell: void 0,
                    buildNumber: e.get(l.a).data?.buildNumber ?? void 0,
                    samplingRatio: 1,
                    samplingReason: "watcher_snapshot",
                    gitWatcherAttributes: {
                        hostKind: t.hostKind,
                        changeType: t.changeType,
                        coalescedBatchCount: t.coalescedBatchCount,
                        rawEventCount: t.rawEventCount,
                        changedPathCount: t.changedPathCount,
                        filteredPathCount: t.filteredPathCount,
                        invalidationCount: t.invalidationCount,
                        fullInvalidationCount: t.fullInvalidationCount,
                        refreshFanoutCount: t.refreshFanoutCount,
                        requiresRecoveryCount: t.requiresRecoveryCount,
                        repoIndexSizeBucket: t.repoIndexSizeBucket
                    }
                })
            }
        })
    }),
    kErH: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            r = n("v8gE"),
            l = n("zd8w"),
            o = n("rEML"),
            s = n("H4jP"),
            u = (n("uRcn"), n("YUHX")),
            d = n("L6b2");
        let c = () => null,
            p = (0, l.createContext)(null),
            g = l.Suspense,
            m = r.c;
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, u = (0, a.c)(9),
                    {
                        children: d,
                        primary: c
                    } = e,
                    g = (0, l.useContext)(p),
                    m = c ? g?.composerId : null,
                    f = m ? s.a?.tracer : void 0,
                    h = c ? g : null;
                return u[0] !== d ? (t = (0, i.jsx)(r.a, {
                    name: "composer",
                    children: d
                }), u[0] = d, u[1] = t) : t = u[1], u[2] !== h || u[3] !== t ? (n = (0, i.jsx)(p.Provider, {
                    value: h,
                    children: t
                }), u[2] = h, u[3] = t, u[4] = n) : n = u[4], u[5] !== m || u[6] !== f || u[7] !== n ? (o = (0, i.jsx)(r.d, {
                    tracer: f,
                    interactionId: m,
                    children: n
                }), u[5] = m, u[6] = f, u[7] = n, u[8] = o) : o = u[8], o
            },
            b: function(e) {
                let t, n, i = (0, a.c)(8),
                    {
                        element: o,
                        editable: u
                    } = e,
                    d = (0, r.f)();
                return i[0] !== u || i[1] !== o || i[2] !== d?.interactionId ? (t = () => {
                    let e = d?.interactionId;
                    if (!e || !u || !s.a?.tracer.isActive(e)) return;
                    let t = !0,
                        n = null,
                        i = s.a.tracer.subscribe(t => {
                            let {
                                kind: i,
                                interaction: a
                            } = t;
                            "interaction-ended" === i && a.id === e && n?.disconnect()
                        }),
                        a = () => !!t && !!s.a?.tracer.isActive(e) && !!o.isConnected && "true" === o.getAttribute("contenteditable") && null == o.closest("[inert], [hidden]") && (n?.disconnect(), s.a.composerReady(e), !0);
                    return queueMicrotask(() => {
                        if (!(!t || !s.a?.tracer.isActive(e) || a())) {
                            n = new MutationObserver(a);
                            for (let e = o; null != e; e = e.parentElement) n.observe(e, {
                                attributes: !0,
                                attributeFilter: ["inert", "hidden", "contenteditable"]
                            })
                        }
                    }), () => {
                        t = !1, n?.disconnect(), i()
                    }
                }, i[0] = u, i[1] = o, i[2] = d?.interactionId, i[3] = t) : t = i[3], i[4] !== u || i[5] !== o || i[6] !== d ? (n = [d, o, u], i[4] = u, i[5] = o, i[6] = d, i[7] = n) : n = i[7], (0, l.useLayoutEffect)(t, n), null
            },
            c: function(e) {
                let t, n, i = (0, a.c)(5),
                    {
                        ready: r,
                        failed: o
                    } = e,
                    u = (0, l.useContext)(p)?.id;
                return i[0] !== o || i[1] !== u || i[2] !== r ? (t = () => {
                    u && (o ? s.a?.end(u, "failed", "route_error") : r && s.a?.contentReady(u))
                }, n = [u, r, o], i[0] = o, i[1] = u, i[2] = r, i[3] = t, i[4] = n) : (t = i[3], n = i[4]), (0, l.useLayoutEffect)(t, n), null
            },
            d: m,
            e: function(e) {
                let t, n, i = (0, a.c)(6),
                    {
                        region: r,
                        ready: o,
                        failed: u
                    } = e,
                    d = void 0 !== u && u,
                    c = (0, l.useContext)(p)?.id;
                return i[0] !== d || i[1] !== c || i[2] !== o || i[3] !== r ? (t = () => {
                    c && o && s.a?.regionReady(c, r, d)
                }, n = [c, r, o, d], i[0] = d, i[1] = c, i[2] = o, i[3] = r, i[4] = t, i[5] = n) : (t = i[4], n = i[5]), (0, l.useLayoutEffect)(t, n), null
            },
            f: g,
            g: function(e) {
                let t, n, l = (0, a.c)(3);
                return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(r.b, {
                    name: "route redirect"
                }), l[0] = t) : t = l[0], l[1] !== e ? (n = (0, i.jsxs)(i.Fragment, {
                    children: [t, (0, i.jsx)(o.l, {
                        ...e
                    })]
                }), l[1] = e, l[2] = n) : n = l[2], n
            },
            h: function(e) {
                let t, n, o, s, p = (0, a.c)(9),
                    {
                        destinationKey: g,
                        children: m
                    } = e;
                p[0] !== g ? (t = () => (0, d.b)(g), p[0] = g, p[1] = t) : t = p[1];
                let f = t,
                    h = (0, l.useContext)(u.a),
                    _ = (0, l.useSyncExternalStore)(d.g, f, c),
                    v = _?.locationKey == null || h?.id === _.id ? _ : null;
                p[2] !== v ? (n = () => v?.commit(), o = [v], p[2] = v, p[3] = n, p[4] = o) : (n = p[3], o = p[4]), (0, l.useLayoutEffect)(n, o);
                let b = v?.tracer,
                    y = null == g ? null : v?.id;
                return p[5] !== m || p[6] !== b || p[7] !== y ? (s = (0, i.jsx)(r.d, {
                    tracer: b,
                    interactionId: y,
                    children: m
                }), p[5] = m, p[6] = b, p[7] = y, p[8] = s) : s = p[8], s
            },
            i: function(e) {
                let t, n, s, p, g, m = (0, a.c)(12),
                    {
                        children: f
                    } = e,
                    {
                        pathname: h,
                        key: _
                    } = (0, o.X)();
                m[0] !== h ? (t = () => (0, d.c)(h), m[0] = h, m[1] = t) : t = m[1];
                let v = (0, l.useSyncExternalStore)(d.g, t, c),
                    b = v?.locationKey == null || v.locationKey === _ ? v : null,
                    y = (0, l.useContext)(u.a)?.id,
                    I = b?.commitAtRoute && b.id !== y ? b : null;
                m[2] !== I ? (n = () => I?.commit(), s = [I], m[2] = I, m[3] = n, m[4] = s) : (n = m[3], s = m[4]), (0, l.useLayoutEffect)(n, s);
                let C = I?.tracer,
                    E = I?.id;
                return m[5] !== f || m[6] !== C || m[7] !== E ? (p = (0, i.jsx)(r.d, {
                    tracer: C,
                    interactionId: E,
                    children: f
                }), m[5] = f, m[6] = C, m[7] = E, m[8] = p) : p = m[8], m[9] !== b || m[10] !== p ? (g = (0, i.jsx)(u.a.Provider, {
                    value: b,
                    children: p
                }), m[9] = b, m[10] = p, m[11] = g) : g = m[11], g
            }
        })
    }),
    kTw8: (function(e, t, n) {
        var i = n("kpIY"),
            a = n("nZhi");
        n("uRcn"), n("xjTy"), n.d(t, {}, {
            a: function(e) {
                let t = e => {
                        (0, a.c)(e)
                    },
                    n = (0, i.y)(a.a, !1, t);
                return t((0, i.k)(a.a, !1)), () => {
                    n(), e?.setEnabled(!1)
                }
            }
        })
    }),
    H4jP: (function(e, t, n) {
        n("L6b2");
        n.d(t, {}, {
            a: null
        })
    }),
    esXD: (function(e, t, n) {
        let i, a, r;
        var l, o = n("HnGz"),
            s = n("kjQz"),
            u = n("zt8h"),
            d = n("e6DU"),
            c = n("nZhi"),
            p = n("H4jP"),
            g = n("uRcn"),
            m = n("L6b2");

        function f(e, t) {
            let n = (0, m.c)(e);
            n?.locationKey === t && n.failRoute()
        }
        let h = new WeakMap,
            _ = new WeakMap;

        function v(e, t) {
            let n = a;
            a = e;
            try {
                return t()
            } finally {
                a = n
            }
        }
        let b = [(l = () => i, {
            router(e) {
                e.instrument({
                    async navigate(e) {
                        let t = l();
                        if (!t) return void await e();
                        let n = {
                            startedAt: performance.timeOrigin + performance.now(),
                            reason: a
                        };
                        h.set(t, n);
                        try {
                            await e()
                        } finally {
                            h.get(t) !== n || [...t.state.blockers.values()].some(e => "blocked" === e.state) || h.delete(t)
                        }
                    }
                })
            }
        })];
        n.d(t, {}, {
            a: function(e, t, n) {
                let i = {
                    listener: t,
                    onBlocked: n
                };
                return _.set(e, i), () => {
                    _.get(e) === i && _.delete(e)
                }
            },
            b: f,
            c: b,
            d: function(e, t) {
                let n, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t => (0, o.e)(e.routes, t),
                    v = arguments.length > 4 ? arguments[4] : void 0;
                a && (i = e);
                let b = e => {
                        let t = l(e);
                        return a && "/unknown" === t ? r?.(e) ?? t : t
                    },
                    y = t => ({
                        ...t,
                        pathname: (0, u.a)(t.pathname, e.basename ?? "/")
                    }),
                    I = y(e.state.location),
                    C = I.pathname,
                    E = null,
                    P = e.subscribe(i => {
                        let {
                            location: r,
                            navigation: l,
                            blockers: o,
                            errors: u
                        } = i, P = h.get(e);
                        [...o.values()].some(e => "blocked" === e.state) && ((v ?? _.get(e)?.onBlocked)?.(), P && (P.startedAt = void 0));
                        let A = y(l.location ?? r);
                        if (A.key !== I.key) {
                            let i = I;
                            I = A;
                            let r = P?.startedAt ?? performance.timeOrigin + performance.now();
                            h.delete(e), n?.abort("navigation_away");
                            let l = (t ?? _.get(e)?.listener)?.(i, A, r, P?.reason === "sidebar_restore" ? P.reason : void 0);
                            if (P?.reason === "conversation_unavailable" && "home" === (0, g.a)(A.pathname)) {
                                let e = s.a.start("home_navigation", {
                                    navigationReason: P.reason
                                }, {
                                    startedAtMs: r,
                                    startLocalTrace: (t, n) => (0, m.e)({
                                        name: "home_navigation",
                                        destinationKey: "home",
                                        pathname: A.pathname,
                                        locationKey: A.key,
                                        startedAtMs: t,
                                        now: n,
                                        debug: !1,
                                        onRouteError: () => e.fail("route_error"),
                                        onReady: t => {
                                            e.mark("react_ready", t), e.end(t)
                                        }
                                    }),
                                    onTerminal: () => {
                                        n = void 0
                                    }
                                });
                                e.mark("navigation_dispatched", r), n = e.isRecording() ? e : void 0
                            }
                            let o = (0, m.c)(A.pathname),
                                u = E?.id,
                                f = i.pathname !== A.pathname;
                            E?.id !== o?.id && (E?.end({
                                outcome: "aborted",
                                reason: "navigation_away"
                            }), E = null);
                            let v = o?.locationKey === A.key ? o : null,
                                y = "same_screen" !== l && (v ? v.id !== u : f),
                                w = y && 1 ? d.a.start("screenLoad", {
                                    screen: b(A.pathname),
                                    fromScreen: b(C),
                                    cause: "CHATGPT_PERFORMANCE_SCREEN_LOAD_CAUSE_NAVIGATION"
                                }, {
                                    atMs: r
                                }) : null,
                                T = (0, c.b)();
                            if (v) E = v;
                            else if (E && !f)(0, m.d)(i.pathname, A.pathname, A.key), E = (0, m.c)(A.pathname);
                            else if (y && (w || T)) {
                                let e = (0, m.e)({
                                    name: "router_navigation",
                                    pathname: A.pathname,
                                    locationKey: A.key,
                                    startedAtMs: r,
                                    now: () => performance.timeOrigin + performance.now(),
                                    commitAtRoute: !0,
                                    debug: T,
                                    onReady: () => e({
                                        outcome: "success",
                                        reason: null
                                    })
                                });
                                E = (0, m.c)(A.pathname);
                                let t = setTimeout(() => e({
                                    outcome: "failure",
                                    reason: "timeout"
                                }), 3e4);
                                E?.onEnd(() => clearTimeout(t))
                            }
                            if (w && E && E.onEnd((e, t) => {
                                    "completed" === e ? d.a.successIfActive(w, {
                                        atMs: t,
                                        attributes: {
                                            readinessSource: "CHATGPT_PERFORMANCE_SCREEN_LOAD_READINESS_SOURCE_EXPLICIT_READY"
                                        }
                                    }) : "failed" === e ? d.a.failureIfActive(w, {
                                        atMs: t
                                    }) : d.a.cancelIfActive(w, {
                                        atMs: t
                                    })
                                }), a && p.a?.enabled) {
                                let e = (0, g.a)(A.pathname);
                                e ? p.a.begin(A.pathname, e, r - performance.timeOrigin) : p.a.leave("route_left")
                            }
                        }
                        "idle" === l.state && (C = y(r).pathname, null != u && f(C, r.key)), P && null == P.startedAt && "idle" === l.state && ![...o.values()].some(e => "unblocked" !== e.state) && h.delete(e)
                    });
                return () => {
                    P(), n?.abort("app_disposed"), E?.end({
                        outcome: "aborted",
                        reason: "app_disposed"
                    }), h.delete(e), i === e && (i = void 0)
                }
            },
            e: function(e) {
                let t = (0, u.a)(e.pathname, i?.basename ?? document.documentElement.dataset.routerBasename ?? "/");
                f(t, e.key);
                let n = p.a;
                if (!n?.enabled) return;
                let a = n.getSnapshot();
                if (null != a && null == a.locationKey && n.committedRoute?.locationKey === e.key) return;
                n.commit(t, e.key, (0, g.a)(t));
                let r = n.interactionFor(t, e.key);
                r && n.end(r, "failed", "route_error")
            },
            f: function(e) {
                r = e
            },
            g: v,
            h: function(e) {
                return v("sidebar_restore", e)
            }
        })
    }),
    uRcn: (function(e, t, n) {
        var i = n("jAnS"),
            a = n("ad0f"),
            r = n("U1w0");
        n.d(t, {}, {
            a: function(e) {
                return (0, r.a)(e) ? null : (0, a.b)(e) ? "home" : (0, i.j)(e) ? "conversation" : null
            }
        })
    }),
    YUHX: (function(e, t, n) {
        n("v8gE");
        var i = n("zd8w");
        let a = (0, i.createContext)(null),
            r = (0, i.createContext)(!1);
        n.d(t, {}, {
            a: a,
            b: r,
            c: () => null
        })
    }),
    L6b2: (function(e, t, n) {
        var i = n("UDVZ"),
            a = n("N7M1"),
            r = n("nZhi"),
            l = n("xjTy");
        let o = null,
            s = new Set;

        function u(e) {
            for (let t of (o = e, s)) t()
        }

        function d(e) {
            let t, {
                    name: n,
                    destinationKey: s,
                    pathname: d,
                    locationKey: c,
                    startedAtMs: p,
                    now: g,
                    onReady: m,
                    onRouteError: f,
                    commitAtRoute: h = !1,
                    debug: _,
                    reason: v
                } = e,
                b = Math.min(performance.timeOrigin, p),
                y = (0, i.a)({
                    clock: () => g() - b,
                    paint: m && !h ? "none" : void 0
                });
            _ && (0, a.a)(y, {
                ...l.a,
                recordTiming(e) {
                    v && e.properties.push(["Navigation reason", v]), (0, r.d)(e)
                }
            });
            let I = y.startInteraction({
                name: n,
                startTime: p - b
            });
            y.subscribe(e => {
                let {
                    kind: t,
                    interaction: n
                } = e;
                "interaction-ended" === t && "completed" === n.status && null != n.endTime && m?.(b + n.endTime)
            });
            let C = !1,
                E = e => {
                    o?.tracer === y && u(null), y.isActive(I) && (e.reason && y.addMetadata({
                        interactionId: I
                    }, {
                        end_reason: e.reason
                    }), "success" === e.outcome ? y.requestCompletion(I) : y.cancel(I, "failure" === e.outcome ? "failed" : "cancelled"))
                };
            return u({
                destinationKey: s,
                pathname: d,
                locationKey: c,
                tracer: y,
                id: I,
                commitAtRoute: h,
                end: E,
                failRoute: f ?? (() => E({
                    outcome: "failure",
                    reason: "route_error"
                })),
                onEnd(e) {
                    C = !0, y.subscribe(t => {
                        let {
                            kind: n,
                            interaction: i
                        } = t;
                        if ("interaction-ended" !== n || i.id !== I || null == i.endTime) return;
                        let {
                            status: a
                        } = i;
                        "running" !== a && "completing" !== a && e(a, b + i.endTime)
                    })
                },
                commit() {
                    if (y.isActive(I)) return t && (y.releaseHold(I, t), t = void 0), y.requestCompletion(I), () => {
                        y.isActive(I) && !t && (t = y.addHold(I, {
                            name: "destination commit"
                        }))
                    }
                }
            }), Object.assign(E, {
                keepWhenUnsampled: () => C
            })
        }
        n.d(t, {}, {
            a: class {
                tracer;
                completed = [];
                visualCompletions = [];
                visit = null;
                navigationAttached = !1;
                listeners = new Set;
                unsubscribe;
                enabled;
                committedRoute = null;
                constructor(e = (0, i.a)(), t = !0) {
                    this.tracer = e, this.enabled = t, this.unsubscribe = e.subscribe(e => {
                        let {
                            kind: t,
                            interaction: n
                        } = e;
                        "interaction-ended" === t && (this.completed.push(n), this.completed.length > 20 && this.completed.shift(), this.visit?.id === n.id && clearTimeout(this.visit.deadline))
                    })
                }
                setEnabled(e) {
                    e || this.leave("debug_disabled"), this.enabled = e
                }
                begin(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.tracer.now(),
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "navigation_dispatched";
                    if (!this.enabled) return null;
                    this.leave("superseded");
                    let a = this.tracer.startInteraction({
                            name: "document" === i ? "startup" : "navigation",
                            startTime: n,
                            metadata: {
                                route: t,
                                start_boundary: i
                            }
                        }),
                        r = this.tracer.startInteraction({
                            name: "composer readiness",
                            parentInteractionId: a,
                            startTime: n,
                            sectionPath: ["composer"]
                        }),
                        l = this.tracer.addHold(r, {
                            name: "editable input and committed handlers",
                            sectionPath: ["composer"]
                        });
                    return this.visit = {
                        id: a,
                        pathname: e,
                        locationKey: null,
                        composerId: r,
                        composerHold: l,
                        regionHolds: {
                            "model controls": this.tracer.addHold(r, {
                                name: "model controls",
                                sectionPath: ["composer"]
                            }),
                            "account footer": this.tracer.addHold(a, {
                                name: "account footer",
                                sectionPath: ["navigation"]
                            }),
                            "sidebar content": this.tracer.addHold(a, {
                                name: "sidebar content",
                                sectionPath: ["navigation"]
                            })
                        },
                        contentHold: "conversation" === t ? this.tracer.addHold(a, {
                            name: "conversation content",
                            sectionPath: ["transcript"]
                        }) : null,
                        commitHold: this.tracer.addHold(a, {
                            name: "route commit"
                        }),
                        navigationHold: this.navigationAttached ? null : this.tracer.addHold(a, {
                            name: "navigation handlers",
                            sectionPath: ["navigation"]
                        }),
                        deadline: setTimeout(() => this.end(a, "cancelled", "deadline"), 3e4)
                    }, this.tracer.requestCompletion(r), this.tracer.requestCompletion(a), this.notify(), a
                }
                commit(e, t, n) {
                    if (this.committedRoute = {
                            pathname: e,
                            locationKey: t
                        }, !this.enabled) return;
                    if (null == n) return void this.leave("route_left");
                    (this.visit?.pathname !== e || null != this.visit.locationKey && this.visit.locationKey !== t) && this.begin(e, n, this.tracer.now(), "route_committed");
                    let i = this.visit;
                    i && i.locationKey !== t && (this.visit = {
                        ...i,
                        locationKey: t
                    }, this.tracer.releaseHold(i.id, i.commitHold), this.notify())
                }
                interactionFor(e, t) {
                    return this.visit?.pathname === e && this.visit.locationKey === t ? this.visit.id : null
                }
                getSnapshot = () => this.visit;
                contentReady(e) {
                    let t = this.visit;
                    t?.id === e && this.tracer.isActive(e) && t.contentHold && this.tracer.releaseHold(e, t.contentHold)
                }
                composerReady(e) {
                    let t = this.visit;
                    t?.composerId === e && this.tracer.isActive(e) && this.tracer.releaseHold(e, t.composerHold)
                }
                regionReady(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = this.visit;
                    if (!i || e !== i.id && ("model controls" !== t || e !== i.composerId)) return;
                    let a = "model controls" === t ? i.composerId : i.id;
                    if (!this.tracer.isActive(a)) return;
                    let r = i.regionHolds[t];
                    n && this.tracer.getInteraction(a)?.holds.find(e => e.id === r)?.endTime == null && this.tracer.addMetadata({
                        interactionId: a,
                        holdId: r
                    }, {
                        readiness: "error"
                    }), this.tracer.releaseHold(a, r)
                }
                navigationReady() {
                    this.navigationAttached = !0, this.visit?.navigationHold && this.tracer.releaseHold(this.visit.id, this.visit.navigationHold)
                }
                end(e, t, n) {
                    this.visit?.id === e && this.tracer.isActive(e) && (this.tracer.addMetadata({
                        interactionId: e
                    }, {
                        end_reason: n
                    }), this.tracer.cancel(e, t))
                }
                leave(e) {
                    let t = this.visit;
                    t && (clearTimeout(t.deadline), this.tracer.isActive(t.id) && (this.tracer.addMetadata({
                        interactionId: t.id
                    }, {
                        end_reason: e
                    }), this.tracer.cancel(t.id)), this.visit = null, this.notify())
                }
                subscribe = e => (this.listeners.add(e), () => this.listeners.delete(e));
                dispose() {
                    this.leave("page_hidden"), this.unsubscribe(), this.listeners.clear(), this.tracer.dispose()
                }
                notify() {
                    for (let e of this.listeners) e()
                }
            },
            b: function(e) {
                return o?.destinationKey === e ? o : null
            },
            c: function(e) {
                return o?.pathname === e ? o : null
            },
            d: function(e, t, n, i) {
                o?.pathname === e && null != o.locationKey && u({
                    ...o,
                    pathname: t,
                    locationKey: n,
                    destinationKey: i ?? o.destinationKey
                })
            },
            e: d,
            f: function(e, t, n, i) {
                return d({
                    name: e,
                    pathname: t,
                    locationKey: i,
                    startedAtMs: n,
                    now: () => performance.timeOrigin + performance.now(),
                    debug: !1
                })
            },
            g: function(e) {
                return s.add(e), () => {
                    s.delete(e)
                }
            }
        })
    }),
    xjTy: (function(e, t, n) {
        var i = n("nZhi");
        let a = new Set(["router_navigation", "thread_navigation", "conversation data", "conversation rows", "destination commit", "route redirect", "route content", "home composer", "conversation hidden", "startup", "navigation", "composer readiness", "editable input and committed handlers", "conversation content", "route commit", "navigation handlers", "model controls", "account footer", "account payment recovery code", "account payment recovery", "sidebar content", "application", "React scope cleanup"]),
            r = {
                labels: a,
                sections: new Set(["page", "composer", "transcript", "navigation"]),
                reasons: new Set(["timeout", "app_disposed", "navigation_away", "conversation_load_failed", "hydration_failed", "hydration_canceled", "deadline", "route_error", "navigation_error", "superseded", "route_left", "page_hidden", "debug_disabled"]),
                recordTiming: i.d
            };
        n.d(t, {}, {
            a: r
        })
    }),
    bx9M: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("tvQN");
        n.d(t, {}, {
            a: function(e, t) {
                e.logProductEvent(a.b, {
                    eventName: "CHATGPT_PERFORMANCE_EVENT_NAME_LONG_INTERACTION_TO_NEXT_PAINT",
                    durationMs: (0, i.b)(t, "round"),
                    durationTrimmedMs: (0, i.b)(Math.min(Math.max(t, 0), 3e5), "round")
                }, () => {
                    "hidden" === document.visibilityState && e.flush()
                })
            }
        })
    }),
    zm5q: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t, n) {
                return t()
            }
        })
    }),
    S1FS: (function(e, t, n) {
        var i = n("Q840"),
            a = n("OWtl"),
            r = n("bAhY"),
            l = n("mz2o");
        let o = "[data-model-selection-label]",
            s = '[data-reasoning-slider], [role="slider"]',
            u = '[aria-hidden="true"], [hidden], [inert], .sr-only';

        function d(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT),
                i = "";
            for (let a = n.nextNode(); null != a; a = n.nextNode()) {
                let n = a.parentElement;
                if (null == n) continue;
                let r = n.closest(u);
                !(null != r && e.contains(r)) && (!t || n.checkVisibility?.({
                    opacityProperty: !0,
                    visibilityProperty: !0
                })) && (i += a.textContent ?? "")
            }
            return i.trim()
        }(0, i.j)(a.a, (e, t) => {
            let {
                scope: n,
                externalSignal: i
            } = t, a = {
                current: null
            }, c = {
                current: null
            }, p = {
                capture: e => (function(e, t, n) {
                    try {
                        if (!(0, l.a)(e)) return
                    } catch {
                        return
                    }
                    if (!(n.target instanceof Element)) return;
                    let i = n.target.closest(`[role="menuitemradio"], ${s}`);
                    if (null == i || "pointerup" === n.type && !i.matches(s) || n instanceof KeyboardEvent && !["Enter", " ", "ArrowLeft", "ArrowRight", "Home", "End"].includes(n.key) || "click" === n.type && 0 === n.detail && t.current?.element === i) return;
                    t.current?.clear();
                    let a = window.setTimeout(o, 0),
                        r = {
                            element: i,
                            startedAt: n.timeStamp,
                            clear: o
                        };

                    function o() {
                        window.clearTimeout(a), t.current === r && (t.current = null)
                    }
                    t.current = r
                })(n, a, e),
                prepare: (e, t, i, p) => {
                    let g = a.current;
                    return (g?.clear(), null == g || null == i) ? void c.current?.() : function(e, t, n, i, a, c, p) {
                        if (p.current?.(), null == t || null == i || ("slider" === n ? !t.element.matches(s) : t.element !== n)) return;
                        let g = i.ownerDocument,
                            m = g.defaultView;
                        if (null == m || "visible" !== g.visibilityState) return;
                        let f = (0, l.b)(e, "model_selection_to_visible_label");
                        if (null == f) return;
                        let h = null == a ? [i] : [i, a],
                            _ = () => h.flatMap(e => Array.from(e.querySelectorAll(o))),
                            v = new Set(_().filter(e => e.dataset.modelSelectionLabel === c || "" === e.dataset.modelSelectionLabel).map(e => d(e, !1)).filter(Boolean));
                        return e => {
                            let n;
                            if (e === c) return;
                            let a = !1,
                                l = new AbortController,
                                s = () => {
                                    l.abort(), y.disconnect(), n?.(), m.clearTimeout(I), p.current === s && (p.current = null)
                                },
                                b = () => {
                                    l.signal.aborted || null != n || (n = (0, r.a)(m, () => {
                                        n = void 0;
                                        let r = i.isConnected && null == i.closest('[role="menu"][data-state="closed"]');
                                        if (a && !r || "visible" !== g.visibilityState || !h.some(e => e.isConnected)) return void s();
                                        for (let n of (a = r, _())) {
                                            if (n.dataset.modelSelectionLabel !== e || !n.isConnected || null != n.closest(u)) continue;
                                            let i = d(n, !0);
                                            if (i && !v.has(i)) {
                                                f(m.performance.now() - t.startedAt), s();
                                                return
                                            }
                                        }
                                    }))
                                },
                                y = new m.MutationObserver(e => {
                                    null == n && e.some(e => {
                                        let {
                                            attributeName: t,
                                            target: n
                                        } = e;
                                        return "style" !== t || n instanceof m.Element && (null != n.closest(o) || null != n.querySelector(o))
                                    }) && b()
                                }),
                                I = m.setTimeout(s, 1e4);
                            for (let e of (p.current = s, g.addEventListener("visibilitychange", () => {
                                    "visible" !== g.visibilityState && s()
                                }, {
                                    signal: l.signal
                                }), m.addEventListener("pagehide", s, {
                                    signal: l.signal
                                }), h)) e.addEventListener("transitionstart", b, {
                                signal: l.signal
                            }), e.addEventListener("transitionend", b, {
                                signal: l.signal
                            }), e.addEventListener("animationend", b, {
                                signal: l.signal
                            }), y.observe(e, {
                                subtree: !0,
                                childList: !0,
                                characterData: !0,
                                attributes: !0,
                                attributeFilter: ["data-model-selection-label", "aria-hidden", "inert", "data-state", "style"]
                            });
                            b()
                        }
                    }(n, g, t, i.closest("[data-model-picker-view]"), p, e, c)
                }
            };
            return i(p, e => {
                let {
                    set: t
                } = e;
                return t(p), () => {
                    a.current?.clear(), c.current?.()
                }
            })
        }, {
            autoDispose: !0
        })
    }),
    oVAx: (function(e, t, n) {
        var i = n("FVr2"),
            a = n("kcZo");
        let r = new class {
            submissions = new Map;
            turns = new Map;
            start(e, t, n, i, r) {
                this.finishSubmission(e, "superseded"), this.remove(e);
                let l = {
                    startedAtMs: t - performance.timeOrigin,
                    routeThreadId: n,
                    conversationId: null,
                    finished: !1,
                    metrics: new a.a(i, t => {
                        r?.({
                            message: "Turn latency observation",
                            status: "info",
                            context: {
                                ...t,
                                client_submission_id: e,
                                thread_id: l.conversationId,
                                turn_id: l.turnId
                            }
                        })
                    }),
                    paintSkipped: !1,
                    paintObserved: !1,
                    listeners: new Set
                };
                this.submissions.set(e, l)
            }
            bind(e, t, n, i) {
                let a = this.submissions.get(e);
                null == a || a.finished || (a.conversationId = n, a.hostId = t, a.turnId = i, a.turnKey = JSON.stringify([t, i]), this.turns.set(a.turnKey, e))
            }
            activity(e, t) {
                let n = this.turns.get(JSON.stringify([e, t])),
                    i = null == n ? void 0 : this.submissions.get(n);
                null == i || i.finished || i.metrics.activity(performance.now() - i.startedAtMs)
            }
            answer(e, t, n) {
                let i = this.turns.get(JSON.stringify([e, t])),
                    a = null == i ? void 0 : this.submissions.get(i);
                if (null != a && !a.finished && null == a.answerItemId)
                    for (let e of (a.answerItemId = n, a.metrics.answer(performance.now() - a.startedAtMs), a.listeners)) e()
            }
            paint(e, t) {
                let n = this.submissions.get(e);
                n?.answerItemId === t && !n.paintSkipped && (n.paintObserved = !0, n.metrics.paint(performance.now() - n.startedAtMs), n.finished && this.remove(e))
            }
            observePaint(e, t, n, a) {
                let r = Array.from(this.submissions).find(e => {
                    let [, i] = e;
                    return !i.paintObserved && !i.paintSkipped && i.hostId === t && i.conversationId === n && (i.answerItemId === a || !i.finished && null == i.answerItemId)
                });
                if (null == r) return;
                let [l, o] = r;
                return (0, i.a)(e, {
                    paintReadiness: () => o.paintSkipped || this.submissions.get(l) !== o || null != o.answerItemId && o.answerItemId !== a ? "closed" : o.answerItemId === a ? "ready" : o.finished ? "closed" : "waiting",
                    recordFirstPaint: () => this.paint(l, a),
                    skipFirstPaint: () => {
                        o.paintSkipped = !0
                    },
                    observePaintReadiness: e => (o.listeners.add(e), () => {
                        o.listeners.delete(e)
                    })
                })
            }
            finish(e, t, n) {
                let i = this.turns.get(JSON.stringify([e, t]));
                null != i && this.finishSubmission(i, n)
            }
            finishSubmission(e, t) {
                let n = this.submissions.get(e);
                if (null != n && !n.finished) {
                    if (n.finished = !0, n.metrics.finish({
                            product_experience: "codex",
                            runtime_source: "unknown",
                            client_surface: "codex_apps_native",
                            status: t,
                            is_resume: "false"
                        }), n.paintObserved || n.paintSkipped || null == n.answerItemId) return void this.remove(e);
                    for (let t of (n.cleanup = setTimeout(() => this.remove(e), 5e3), n.listeners)) t()
                }
            }
            routeChanged(e) {
                for (let [t, n] of this.submissions)(null == e || n.routeThreadId !== e && n.conversationId !== e) && (this.finishSubmission(t, "navigation_away"), this.remove(t))
            }
            abortConversation(e) {
                for (let [t, n] of this.submissions) n.conversationId === e && (this.finishSubmission(t, "navigation_away"), this.remove(t))
            }
            dispose() {
                for (let e of this.submissions.keys()) this.finishSubmission(e, "app_disposed"), this.remove(e)
            }
            remove(e) {
                let t = this.submissions.get(e);
                if (clearTimeout(t?.cleanup), t?.turnKey != null && this.turns.delete(t.turnKey), this.submissions.delete(e), null != t) {
                    for (let e of t.listeners) e();
                    t.listeners.clear()
                }
            }
        };
        n.d(t, {}, {
            a: r
        })
    }),
    ithN: (function(e, t, n) {
        var i = n("NnGo");
        let a = new WeakMap;
        n.d(t, {}, {
            a: function(e, t) {},
            b: function(e, t, n, r) {
                let l = a.get(e.node)?.get(t)?.get(n)?.firstAnswerAt;
                if (null != l && !(r < l) && (0, i.b)()) return r - l >= 3e4 ? "at_least_30s" : "under_30s"
            }
        })
    }),
    Lfan: (function(e, t, n) {
        var i = n("tl5a"),
            a = n("dbK8");
        n("aFoA"), n("nlNF"), n("tSEg");
        var r = n("kl6F");
        n("mz2o");
        let l = new Map;
        n.d(t, {}, {
            a: function(e, t) {
                let n = l.get(e);
                null != n && "cloud_tpp" !== n.threadKind && ((0, a.b)(t) ? n.threadKind = "cloud_asb" : n.threadKind = "local" === t ? "local" : "remote")
            },
            b: function(e, t) {
                let n = l.get(e);
                null != n && null == n.threadId && (n.threadId = t)
            },
            c: function(e) {
                let t = !1;
                return {
                    retain() {
                        t = !0
                    },
                    [Symbol.dispose]() {
                        t || e.cancel()
                    }
                }
            },
            d: function(e, t, n) {
                let i = null == t ? void 0 : l.get(t);
                if (i?.threadId != null && "cloud_tpp" !== i.threadKind && (n === i.threadId || e.get(r.g, n) === i.threadId)) return i.observe
            },
            e: function(e, t, n) {}
        })
    }),
    H7qy: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("OSkm"),
            r = n("Cslg"),
            l = n("unIO"),
            o = n("ReGc"),
            s = n("bNMl"),
            u = n("WFY2"),
            d = n("nZhi");
        n.d(t, {}, {
            a: function(e, t, n, c) {
                let p = {
                    rendererFrameGapMsSum: t.rendererResponsiveness.frameGapMsSum,
                    rendererFrameGapCount: t.rendererResponsiveness.frameGapCount,
                    rendererFrameGapMsMax: t.rendererResponsiveness.frameGapMsMax,
                    rendererFrameGapOver50MsCount: t.rendererResponsiveness.frameGapOver50MsCount,
                    rendererForcedStyleAndLayoutMsSum: t.rendererResponsiveness.forcedStyleAndLayoutMsSum,
                    rendererInteractionEventCount: t.rendererResponsiveness.interactionEventCount,
                    rendererWorstEventDurationMs: t.rendererResponsiveness.worstEventDurationMs,
                    rendererWorstEventInputDelayMs: t.rendererResponsiveness.worstEventInputDelayMs,
                    rendererWorstEventProcessingMs: t.rendererResponsiveness.worstEventProcessingMs,
                    rendererWorstEventPresentationDelayMs: t.rendererResponsiveness.worstEventPresentationDelayMs
                };
                ("app_start" === t.name || "thread_navigation" === t.name) && (0, d.d)({
                    name: t.name,
                    source: "Client spans",
                    startedAtMs: t.endedAtMs - t.durationMs,
                    durationMs: t.durationMs,
                    metadata: {
                        ...p,
                        outcome: t.outcome,
                        reason: t.reason,
                        attributes: t.attributes,
                        marksMs: t.marks,
                        timingQuality: t.timing.quality
                    }
                });
                let g = e.get(o.a).data?.buildNumber ?? void 0,
                    m = "pages_realtime_scroll" === t.name || "pages_realtime_drag" === t.name || "pages_realtime_zoom_pan" === t.name ? t.attributes : void 0,
                    f = null != m ? {
                        expectedUserId: e.get(r.k) ?? void 0,
                        expectedAccountId: e.get(r.f) ?? void 0
                    } : void 0,
                    h = {
                        spanName: t.name,
                        durationMs: t.durationMs,
                        completedTs: (0, i.c)(t.endedAtMs),
                        outcome: t.outcome,
                        reason: t.reason ?? void 0,
                        marksMs: t.marks,
                        backgroundDurationMs: t.timing.backgroundDurationMs,
                        heartbeatGapDurationMsSum: t.timing.heartbeatGapDurationMsSum,
                        timingQuality: t.timing.quality,
                        wallDurationMs: t.timing.wallDurationMs,
                        appServerCpuPercentAvg: t.electronCpu?.appServer?.cpuPercentAvg,
                        appServerCpuSamplingWindowDurationMs: t.electronCpu?.appServer?.cpuSamplingWindowDurationMs,
                        appServerRssBytes: (0, i.c)(t.electronCpu?.appServer?.rssBytes),
                        appServerTreeRssBytes: (0, i.c)(t.electronCpu?.appServer?.treeRssBytes),
                        cpuSamplingWindowDurationMs: t.electronCpu?.samplingWindowDurationMs,
                        electronProcessWorkingSetKbTotal: (0, i.c)(t.electronCpu?.electronProcessWorkingSetKbTotal),
                        mainProcessCpuPercentAvg: t.electronCpu?.mainProcessCpuPercentAvg,
                        mainProcessHandleCount: (0, i.c)(t.electronCpu?.mainProcessHandleCount),
                        mainProcessRssBytes: (0, i.c)(t.electronCpu?.mainProcessRssBytes),
                        rendererProcessCount: t.electronCpu?.rendererProcessCount,
                        rendererProcessCpuPercentAvg: t.electronCpu?.rendererProcessCpuPercentAvg,
                        rendererProcessWorkingSetKb: (0, i.c)(t.electronCpu?.rendererProcessWorkingSetKb),
                        rendererProcessWorkingSetKbTotal: (0, i.c)(t.electronCpu?.rendererProcessWorkingSetKbTotal),
                        systemTotalMemoryBytes: (0, i.c)(t.electronCpu?.systemTotalMemoryBytes),
                        systemFreeMemoryBytes: (0, i.c)(t.electronCpu?.systemFreeMemoryBytes),
                        systemCommitTotalBytes: (0, i.c)(t.electronCpu?.systemCommitTotalBytes),
                        systemCommitLimitBytes: (0, i.c)(t.electronCpu?.systemCommitLimitBytes),
                        systemKernelPagedPoolBytes: (0, i.c)(t.electronCpu?.systemKernelPagedPoolBytes),
                        systemKernelNonpagedPoolBytes: (0, i.c)(t.electronCpu?.systemKernelNonpagedPoolBytes),
                        systemHandleCount: (0, i.c)(t.electronCpu?.systemHandleCount),
                        systemProcessCount: t.electronCpu?.systemProcessCount,
                        systemThreadCount: t.electronCpu?.systemThreadCount,
                        systemUptimeMs: (0, i.c)(t.electronCpu?.systemUptimeMs),
                        ...p,
                        rendererLongTaskCount: t.rendererResponsiveness.longTaskObserverSupported ? t.rendererResponsiveness.longTaskCount : void 0,
                        rendererLongTaskDurationMsMax: t.rendererResponsiveness.longTaskObserverSupported ? t.rendererResponsiveness.longTaskDurationMsMax : void 0,
                        rendererLongTaskDurationMsSum: t.rendererResponsiveness.longTaskObserverSupported ? t.rendererResponsiveness.longTaskDurationMsSum : void 0,
                        rendererLongTaskObserverSupported: t.rendererResponsiveness.longTaskObserverSupported,
                        rendererLongAnimationFrameCount: t.rendererResponsiveness.longAnimationFrameObserverSupported ? t.rendererResponsiveness.longAnimationFrameCount : void 0,
                        rendererLongAnimationFrameDurationMsMax: t.rendererResponsiveness.longAnimationFrameObserverSupported ? t.rendererResponsiveness.longAnimationFrameDurationMsMax : void 0,
                        rendererLongAnimationFrameDurationMsSum: t.rendererResponsiveness.longAnimationFrameObserverSupported ? t.rendererResponsiveness.longAnimationFrameDurationMsSum : void 0,
                        rendererLongAnimationFrameBlockingDurationEstimateMsMax: t.rendererResponsiveness.longAnimationFrameObserverSupported ? t.rendererResponsiveness.longAnimationFrameBlockingDurationEstimateMsMax : void 0,
                        rendererLongAnimationFrameBlockingDurationEstimateMsSum: t.rendererResponsiveness.longAnimationFrameObserverSupported ? t.rendererResponsiveness.longAnimationFrameBlockingDurationEstimateMsSum : void 0,
                        rendererLongAnimationFrameObserverSupported: t.rendererResponsiveness.longAnimationFrameObserverSupported,
                        pagesRealtimeAttributes: m,
                        initialSurface: "app_start" === t.name ? t.attributes.initialSurface : void 0,
                        processToPreloadDurationMs: "app_start" === t.name ? t.attributes.processToPreloadDurationMs : void 0,
                        nativeStartupProgress: "app_start" === t.name ? t.attributes.nativeStartupProgress : void 0,
                        threadKind: "thread_navigation" === t.name || "thread_hydration" === t.name || "turn_first_response_visible" === t.name ? t.attributes.threadKind : void 0,
                        navigationType: "thread_navigation" === t.name || "home_navigation" === t.name ? t.attributes.navigationReason : void 0,
                        threadState: "thread_navigation" === t.name ? t.attributes.threadState : void 0,
                        threadViewAttributes: "thread_navigation" === t.name && null != t.attributes.view ? {
                            ...t.attributes.view,
                            maxPages: (0, i.c)(t.attributes.view.maxPages),
                            cachedPageCount: (0, i.c)(t.attributes.view.cachedPageCount),
                            capacityEvictionCount: (0, i.c)(t.attributes.view.capacityEvictionCount)
                        } : void 0,
                        submissionKind: "turn_first_response_visible" === t.name ? t.attributes.submissionKind : void 0,
                        responseRuntime: "turn_first_response_visible" === t.name ? t.attributes.responseRuntime : void 0,
                        pluginPageEntrypoint: "plugins_page_load" === t.name ? t.attributes.entrypoint : void 0,
                        pluginPageKind: "plugins_page_load" === t.name ? t.attributes.pageKind : void 0,
                        artifactGenerationAttributes: "artifact_generation" === t.name ? t.attributes : void 0,
                        artifactPreviewAttributes: "artifact_preview" === t.name || "artifact_thumbnail" === t.name ? t.attributes : void 0,
                        reviewRenderAttributes: "review_open" === t.name ? t.attributes : void 0,
                        pageNavigationAttributes: "page_navigation" === t.name || "page_document_bootstrap" === t.name ? t.attributes : void 0,
                        clientPlatform: t.clientPlatform,
                        appShell: "electron" === t.hostType ? "owl" : void 0,
                        buildNumber: g,
                        buildCommitSha: (0, l.a)(),
                        spanId: t.spanId,
                        traceId: t.traceId,
                        samplingRuleId: c.ruleId,
                        samplingReason: c.reason,
                        appStateSnapshot: null == n ? void 0 : {
                            schemaVersion: n.schema_version,
                            snapshotReason: n.snapshot_reason,
                            sessionAgeMs: n.session_age_ms,
                            threadCountTotal: n.thread_count_total,
                            threadCountLoadedRecent: n.thread_count_loaded_recent,
                            threadCountActive: n.thread_count_active,
                            threadCountStreamingOwner: n.thread_count_streaming_owner,
                            threadCountStreamingFollower: n.thread_count_streaming_follower,
                            threadCountStreamingWithoutRole: n.thread_count_streaming_without_role,
                            threadCountStreamingWithActiveRuntime: n.thread_count_streaming_with_active_runtime,
                            threadCountStreamingWithoutActiveRuntime: n.thread_count_streaming_without_active_runtime,
                            threadCountWithInflightTurn: n.thread_count_with_inflight_turn,
                            turnCountTotalLoaded: n.turn_count_total_loaded,
                            itemCountTotalLoaded: n.item_count_total_loaded,
                            maxTurnsInSingleThread: n.max_turns_in_single_thread,
                            maxItemsInSingleTurn: n.max_items_in_single_turn,
                            pendingRequestCount: n.pending_request_count,
                            inflightTurnCount: n.inflight_turn_count,
                            deltaEventsTotal: n.delta_events_total,
                            deltaBytesTotalEstimate: n.delta_bytes_total_estimate,
                            deltaEventsLast30s: n.delta_events_last_30s,
                            deltaBytesLast30sEstimate: n.delta_bytes_last_30s_estimate,
                            reviewDiffFilesTotal: n.review_diff_files_total,
                            reviewDiffLinesTotal: n.review_diff_lines_total,
                            reviewDiffBytesEstimate: n.review_diff_bytes_estimate
                        }
                    };
                (0, s.a)(e, a.CodexPerformanceSpanCompleted, h, void 0, void 0, f), ("app_start" === t.name || "thread_navigation" === t.name || "thread_hydration" === t.name || "thread_history_page" === t.name || "turn_first_response_visible" === t.name && "new_thread" === t.attributes.submissionKind) && u.a.info("client.performance.span", {
                    safe: {
                        ...p,
                        name: t.name,
                        durationMs: t.durationMs,
                        wallDurationMs: t.timing.wallDurationMs,
                        backgroundDurationMs: t.timing.backgroundDurationMs,
                        timingQuality: t.timing.quality,
                        marksMs: t.marks,
                        outcome: t.outcome,
                        reason: t.reason,
                        traceId: t.traceId,
                        spanId: t.spanId,
                        buildNumber: g,
                        buildCommitSha: (0, l.a)(),
                        clientPlatform: t.clientPlatform,
                        hostType: t.hostType,
                        samplingRuleId: c.ruleId,
                        samplingReason: c.reason,
                        ...t.attributes
                    }
                })
            }
        })
    }),
    w5pR: (function(e, t, n) {
        var i = n("Nwp9"),
            a = n("nZhi");
        let r = (0, i.b)(a.a, !1);
        n.d(t, {}, {
            a: r
        })
    }),
    dJBt: (function(e, t, n) {
        var i = n("QosV"),
            a = n("zd8w"),
            r = n("bAhY");

        function l() {}
        n.d(t, {}, {
            a: function(e) {
                let t, n, o = (0, i.c)(7),
                    {
                        onPaint: s,
                        onCommit: u,
                        requireVisibleAtPaint: d,
                        paintIdentity: c
                    } = e,
                    p = void 0 !== d && d,
                    g = (0, a.useEffectEvent)(u ?? l),
                    m = (0, a.useEffectEvent)(s);
                return o[0] !== g || o[1] !== m || o[2] !== p ? (t = () => {
                    let e;
                    g();
                    let t = () => {
                        "visible" === document.visibilityState && null == e && (e = (0, r.a)(window, () => {
                            if (p && "visible" !== document.visibilityState) {
                                e = void 0;
                                return
                            }
                            document.removeEventListener("visibilitychange", t), m()
                        }))
                    };
                    return document.addEventListener("visibilitychange", t), t(), () => {
                        document.removeEventListener("visibilitychange", t), e?.()
                    }
                }, o[0] = g, o[1] = m, o[2] = p, o[3] = t) : t = o[3], o[4] !== c || o[5] !== p ? (n = [p, c], o[4] = c, o[5] = p, o[6] = n) : n = o[6], (0, a.useLayoutEffect)(t, n), null
            }
        })
    }),
    S5c9: (function(e, t, n) {
        var i = n("mz2o");
        n.d(t, {}, {
            a: function(e, t) {
                let n = (0, i.c)(e, .1);
                return n && {
                    selected: e => n({
                        spanName: `${t}_to_selected`,
                        durationMs: e,
                        outcome: "success"
                    }),
                    ready: e => n({
                        spanName: `${t}_to_ready`,
                        durationMs: e,
                        outcome: "success"
                    })
                }
            }
        })
    }),
    N7wd: (function(e, t, n) {
        var i = n("RU3e");
        let a = '[data-user-message-bubble], [data-markdown-text-style="assistant-message"], [data-chatgpt-conversation-turn="true"]',
            r = "[data-rail-chat-transcript]",
            l = `${r} :is(${a}), ${r} [data-turn-key]:has([data-content-search-turn-key]), ${r} [data-rail-chat-empty]`,
            o = '[data-app-shell-focus-area="right-panel"], [data-app-shell-focus-area="bottom-panel"]',
            s = {
                opacityProperty: !0,
                visibilityProperty: !0
            },
            u = ["aria-disabled", "aria-hidden", "class", "contenteditable", "disabled", "hidden", "inert", "readonly", "style", "data-app-shell-active-page", "data-rail-activity-ready", "data-rail-chat-empty", "data-rail-chat-transcript", "data-rail-activity-visit", "data-rail-home-visit", "data-rail-home-surface"];

        function d(e, t) {
            if ("activity" === e) return "[data-rail-activity-ready]";
            let n = t.getAttribute("data-rail-home-surface");
            if ("home" === n) return 'textarea#pending-home-input:not(:disabled):not([readonly]), [data-composer-placement="home"] .ProseMirror[contenteditable="true"]';
            if ("remote-thread" === n) return a;
            if (!n?.endsWith("-thread")) return null;
            let i = t.querySelector(`${r}[data-rail-chat-empty]`);
            return i && !i.closest(o) ? `${l}, [data-composer-placement="thread"] .ProseMirror[contenteditable="true"]` : l
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, {
                        document: i,
                        lifetime: a,
                        surface: r,
                        key: l,
                        startedAt: c,
                        isCurrent: p,
                        report: g
                    } = e,
                    {
                        signal: m
                    } = a,
                    f = () => a.abort(),
                    h = () => !m.aborted && !i.hidden && i.hasFocus() && p(),
                    _ = i.defaultView;
                if (null == _ || !h()) return f(), f;
                let v = `[data-rail-${r}-visit="${CSS.escape(l)}"]`,
                    b = new MutationObserver(P),
                    y = new IntersectionObserver(function(e) {
                        if (!h()) return void f();
                        if (!I) return void P();
                        I = !1;
                        let t = i.querySelector(v),
                            a = t && d(r, t),
                            l = e.find(e => {
                                var n, l, u;
                                let {
                                    target: d,
                                    intersectionRect: c
                                } = e;
                                return t?.contains(d) && a && d.matches(a) && ("home" !== r || !d.closest(o)) && (n = d, l = c, u = i, !(l.width <= 0 || l.height <= 0 || n.closest('[inert], [aria-disabled="true"], [aria-hidden="true"], [data-app-shell-active-page="false"]')) && !!n.checkVisibility(s) && n.contains(u.elementFromPoint(l.left + l.width / 2, l.top + l.height / 2)))
                            })?.target;
                        if (l && l === n) {
                            f(), g(performance.now() - c);
                            return
                        }
                        n = l, l ? P() : e.some(e => e.isIntersecting) && E(i.body)
                    }, {
                        threshold: Number.EPSILON
                    }),
                    I = !1,
                    C = 0;

                function E(e) {
                    if (t !== e) {
                        t = e, b.disconnect(), b.observe(e, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: u
                        });
                        for (let t = e.parentElement; t; t = t.parentElement) b.observe(t, {
                            childList: !0,
                            attributes: !0,
                            attributeFilter: ["class", "hidden", "style", "inert", "aria-hidden"]
                        })
                    }
                }

                function P() {
                    C || m.aborted || (C = requestAnimationFrame(A))
                }

                function A() {
                    if (C = 0, y.disconnect(), y.takeRecords(), !h()) return void f();
                    let e = i.querySelector(v);
                    if (null == e) {
                        n = void 0, E(i.body);
                        return
                    }
                    let t = d(r, e);
                    if (null == t) return void f();
                    let a = e.querySelectorAll(t);
                    for (let t of (E(e), I = !0, a)) "home" === r && t.closest(o) || y.observe(t);
                    !n || e.contains(n) && n.matches(t) || (n = void 0)
                }
                let w = e.watchNavigation?.(() => {
                    p() || f()
                });
                return m.addEventListener("abort", () => {
                    b.disconnect(), cancelAnimationFrame(C), y.disconnect(), w?.()
                }, {
                    once: !0
                }), _.addEventListener("resize", P, {
                    signal: m
                }), i.addEventListener("scroll", P, {
                    capture: !0,
                    signal: m
                }), i.addEventListener("transitionend", P, {
                    signal: m
                }), i.addEventListener("animationend", P, {
                    signal: m
                }), P(), f
            },
            b: function(e, t) {
                let n = new AbortController,
                    {
                        signal: a
                    } = n,
                    r = t.defaultView,
                    l = () => n.abort();
                if (null == r || t.hidden || !t.hasFocus() || !1 === e.get(i.b)) return l(), n;
                r.addEventListener("blur", () => {
                    t.hasFocus() || l()
                }, {
                    signal: a
                }), r.addEventListener("pagehide", l, {
                    signal: a
                }), t.addEventListener("visibilitychange", l, {
                    signal: a
                });
                let o = e.watch(e => {
                        let {
                            get: t
                        } = e;
                        !1 === t(i.b) && l()
                    }),
                    s = r.setTimeout(l, 6e4);
                return a.addEventListener("abort", () => {
                    o(), r.clearTimeout(s)
                }, {
                    once: !0
                }), n
            }
        })
    }),
    jgoj: (function(e, t, n) {
        let i, a, r, l = new Set;

        function o(e) {
            for (let t of e)
                if ("u" > typeof PerformanceEventTiming && t instanceof PerformanceEventTiming && t.interactionId > 0)
                    for (let e of l) e.event(t)
        }

        function s() {
            null != a && cancelAnimationFrame(a), a = void 0, r = void 0
        }

        function u() {
            s(), document.hidden || "function" != typeof requestAnimationFrame || (a = requestAnimationFrame(d))
        }

        function d(e) {
            if (document.hidden) return void s();
            if (null != r && e > r)
                for (let t of l) t.frame(r, e);
            l.size > 0 && (r = e, a = requestAnimationFrame(d))
        }
        n.d(t, {}, {
            a: function(e) {
                return 0 === l.size && (i = function(e, t) {
                    if ("u" < typeof PerformanceObserver || !PerformanceObserver.supportedEntryTypes?.includes(e)) return;
                    let n = new PerformanceObserver(e => t(e.getEntries()));
                    try {
                        return n.observe("event" === e ? {
                            type: e,
                            durationThreshold: 16
                        } : {
                            type: e
                        }), n
                    } catch {
                        n.disconnect();
                        return
                    }
                }("event", o), document.addEventListener("visibilitychange", u), u()), l.add(e), {
                    eventsSupported: null != i,
                    stop: () => {
                        l.has(e) && (null != i && o(i.takeRecords()), l.delete(e), 0 === l.size && (i?.disconnect(), i = void 0, document.removeEventListener("visibilitychange", u), s()))
                    }
                }
            }
        })
    }),
    BJjx: (function(e, t, n) {
        var i = n("ekLq");
        let a = '[hidden], [data-sidebar-collapsed], [data-app-action-sidebar-section-collapsed="true"]';

        function r(e, t, n) {
            let a = n ?? e.closest(i.c.sidebarScroll)?.getBoundingClientRect();
            return Math.min(t.right, window.innerWidth, a?.right ?? 1 / 0) > Math.max(t.left, 0, a?.left ?? 0) && Math.min(t.bottom, window.innerHeight, a?.bottom ?? 1 / 0) > Math.max(t.top, 0, a?.top ?? 0)
        }
        n.d(t, {}, {
            a: a,
            b: r,
            c: function(e, t) {
                if (!e.isConnected || e.closest(a) || !e.checkVisibility?.({
                        visibilityProperty: !0,
                        opacityProperty: !0
                    })) return;
                let n = e.getBoundingClientRect();
                return r(e, n, t) ? n : void 0
            }
        })
    }),
    mkvQ: (function(e, t, n) {
        var i = n("mz2o");

        function a() {}
        n.d(t, {}, {
            a: function(e, t, n) {
                let r, l, o = t.ownerDocument,
                    s = o.defaultView;
                if (null == s || "visible" !== o.visibilityState || "function" != typeof s.ResizeObserver) return;
                let u = (0, i.b)(e, "space_panel_resize_to_first_layout_change");
                if (null == u) return;
                let d = t.closest("aside");
                if (null == d || !d.style.width.endsWith("px")) return;
                let c = d.style.width,
                    p = Number.parseFloat(c),
                    g = () => d.isConnected && "visible" === o.visibilityState && null == d.closest("[inert], [hidden], [aria-hidden=true]") && n?.() !== !1;
                if (!(p > 0) || !g()) return;
                let m = !1,
                    f = () => {
                        m || (m = !0, r?.disconnect(), null != l && s.cancelAnimationFrame(l), s.clearTimeout(_), o.removeEventListener("visibilitychange", h), s.removeEventListener("pagehide", f), v.cancel = a, v.firstMove = a, v.end = a)
                    };

                function h() {
                    "visible" !== o.visibilityState && f()
                }
                let _ = s.setTimeout(f, 6e4);
                o.addEventListener("visibilitychange", h), s.addEventListener("pagehide", f);
                let v = {
                    firstMove(e) {
                        if (!m && null == r) try {
                            (r = new s.ResizeObserver(t => {
                                let [n] = t, i = s.performance.now();
                                if (m) return;
                                if (!g()) return void f();
                                let a = n?.borderBoxSize?.[0]?.inlineSize;
                                !(d.style.width === c || null == a || a <= 0 || Math.abs(a - p) <= 1 / 64) && (f(), d.checkVisibility?.({
                                    visibilityProperty: !0
                                }) && u(i - e))
                            })).observe(d, {
                                box: "border-box"
                            })
                        } catch {
                            f()
                        }
                    },
                    end() {
                        l = s.requestAnimationFrame(() => {
                            l = s.requestAnimationFrame(f)
                        })
                    },
                    cancel: f
                };
                return v
            }
        })
    }),
    DipL: (function(e, t, n) {
        var i = n("SRbQ"),
            a = n("l00C"),
            r = n("tl5a"),
            l = n("Bl6U"),
            o = n("dbK8"),
            s = n("JQtI"),
            u = n("S8dY");
        async function d(e, t, n) {
            let r = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let o, s = n ?? e.get(l.c, t),
                    u = e.get(a.b, s);
                if (null == u) return "unknown";
                let d = (0, i.a)(r, u.rpc.getNavigationRuntimeState(t), !1);
                try {
                    let t = new Promise(e => {
                            o = setTimeout(() => e("unknown"), 1e3)
                        }),
                        n = await Promise.race([d, t]);
                    return e.get(a.b, s) === u ? n : "unknown"
                } finally {
                    clearTimeout(o)
                }
            } catch (e) {
                r.error = e, r.hasError = !0
            } finally {
                (0, i.e)(r)
            }
        }
        n.d(t, {}, {
            a: d,
            b: function(e, t, n, i) {
                let a = e.get(r.pc, t),
                    c = e.get(r.oc, t);
                u.a.start(t, "unknown", "local", "navigation_dispatched", {
                    ...i,
                    threadIsAeon: (0, o.b)(n ?? e.get(l.c, t)) && (null == a && null == c ? void 0 : (0, s.a)(a, c)),
                    hostId: n,
                    readRuntimeState: () => d(e, t, n)
                })
            }
        })
    }),
    S8dY: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("kjQz");
        n("nZhi");
        var r = n("L6b2");

        function l() {
            return !0
        }
        let o = new class {
            visibleView = null;
            pending = null;
            start(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "local",
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "navigation_dispatched",
                    {
                        threadIsAeon: o,
                        routeThreadId: s = e,
                        hostId: u,
                        readRuntimeState: d,
                        startedAtMs: c,
                        pathname: p,
                        locationKey: g,
                        reason: m
                    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                if (this.pending?.threadId === e && this.pending.hostId === u && (null == g || this.pending.locationKey === g)) return;
                if (null != this.pending) {
                    let {
                        span: e
                    } = this.pending;
                    this.pending = null, e.abort("superseded")
                }
                let f = {
                        threadKind: n,
                        threadState: t,
                        ...m && {
                            navigationReason: m
                        },
                        view: "route_entered" === i && this.visibleView?.threadId === e ? this.visibleView.attributes : void 0,
                        threadIsAeon: o
                    },
                    h = l(),
                    _ = a.a.start("thread_navigation", f, {
                        startedAtMs: c,
                        recordUnsampled: !1,
                        startLocalTrace: h || null != p ? (t, n) => (0, r.e)({
                            name: "thread_navigation",
                            destinationKey: h ? s : void 0,
                            pathname: p,
                            locationKey: g,
                            startedAtMs: t,
                            now: n,
                            onRouteError: () => _.fail("route_error"),
                            onReady: h ? t => this.complete(e, t, "react_ready") : void 0,
                            debug: !1,
                            reason: m
                        }) : void 0,
                        captureAttributes: null == d ? void 0 : async e => {
                            f.threadState = await d(), _.isRecording() && e?.setAttributes?.({
                                "thread.state": f.threadState
                            })
                        },
                        onTerminal: () => {
                            this.pending?.span === _ && (this.pending = null)
                        },
                        traceAttributes: {
                            "thread.kind": n,
                            ...m && {
                                "navigation.reason": m
                            },
                            "thread.state": t,
                            ...null != o ? {
                                "thread.is_aeon": o
                            } : {}
                        }
                    });
                _.isRecording() && (_.mark(i, c), this.pending = {
                    navigationWait: _.measure("thread.navigation_wait"),
                    renderWait: null,
                    locationKey: g,
                    span: _,
                    threadId: e,
                    routeThreadId: s,
                    hostId: u,
                    attributes: f
                })
            }
            complete(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "content_visible";
                if (null == this.pending || this.pending.threadId !== e && this.pending.routeThreadId !== e) return;
                let {
                    navigationWait: i,
                    renderWait: a,
                    span: r
                } = this.pending;
                this.pending = null, r.mark(n, t), i?.end(), a?.end(), r.end(t)
            }
            viewEntered(e, t) {
                let n = {
                    threadId: e,
                    attributes: t
                };
                return this.visibleView = n, this.pending?.threadId === e && (this.pending.attributes.view = t, this.pending.span.mark("destination_view_entered")), () => {
                    this.visibleView === n && (this.visibleView = null)
                }
            }
            hydrationStarted(e, t) {
                this.pending?.threadId === e && (this.pending.navigationWait?.end(), this.pending.navigationWait = null, null != t && (this.pending.attributes.threadIsAeon = t), this.pending.span.mark("hydration_started"))
            }
            hydrationFinished(e) {
                this.pending?.threadId === e && (this.pending.renderWait = this.pending.span.measure("thread.render_wait"), this.pending.span.mark("hydration_finished"))
            }
            historyReady(e) {
                this.pending?.threadId === e && this.pending.span.mark("history_ready")
            }
            hydrationFailed(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "hydration_failed";
                if (this.pending?.threadId !== e) return;
                let {
                    span: a
                } = this.pending;
                (this.pending = null, "canceled" === (0, i.uh)(t)["codex.outcome"]) ? a.abort("hydration_canceled"): a.fail(n)
            }
            isPending(e) {
                return this.pending?.threadId === e
            }
            getTrace(e) {
                return this.pending?.threadId === e ? this.pending.span.trace : null
            }
            abort(e) {
                if (this.pending?.threadId !== e) return;
                let {
                    span: t
                } = this.pending;
                this.pending = null, t.abort("navigation_away")
            }
            promoteRoute(e, t) {
                this.pending?.routeThreadId === e && (this.pending.routeThreadId = t)
            }
            routeChanged(e) {
                null != this.pending && this.pending.threadId !== e && this.pending.routeThreadId !== e && this.abort(this.pending.threadId)
            }
            dispose() {
                if (this.visibleView = null, null == this.pending) return;
                let {
                    span: e
                } = this.pending;
                this.pending = null, e.abort("app_disposed")
            }
        };
        n.d(t, {}, {
            a: o,
            b: l
        })
    }),
    ZxJC: (function(e, t, n) {
        var i = n("QosV"),
            a = n("zd8w"),
            r = n("c9lJ"),
            l = n("S8dY");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s = (0, i.c)(23),
                    {
                        route: u,
                        state: d,
                        retentionEnabled: c,
                        maxPages: p,
                        cachedPageCount: g,
                        capacityEvictionCount: m,
                        ttlSeconds: f,
                        contentReused: h
                    } = e;
                if (s[0] !== u.conversationId || s[1] !== u.pathname || s[2] !== u.routeKind || s[3] !== u.taskId) {
                    switch (t = null, u.routeKind) {
                        case "local-thread":
                            t = u.conversationId;
                            break;
                        case "remote-thread":
                            t = u.taskId;
                            break;
                        case "chatgpt-thread":
                            t = `chatgpt:${u.conversationId}`;
                            break;
                        case "other": {
                            let e = (0, r.a)(u.pathname)?.params.sharedConversationId;
                            if (null != e) try {
                                t = `chatgpt-share:${decodeURIComponent(e)}`
                            } catch {}
                        }
                    }
                    s[0] = u.conversationId, s[1] = u.pathname, s[2] = u.routeKind, s[3] = u.taskId, s[4] = t
                } else t = s[4];
                return s[5] !== g || s[6] !== m || s[7] !== h || s[8] !== p || s[9] !== c || s[10] !== d || s[11] !== t || s[12] !== f ? (n = () => {
                    if (null != t) return l.a.viewEntered(t, {
                        state: d,
                        retentionEnabled: c,
                        maxPages: p,
                        cachedPageCount: g,
                        capacityEvictionCount: m,
                        ttlSeconds: f,
                        contentReused: h
                    })
                }, s[5] = g, s[6] = m, s[7] = h, s[8] = p, s[9] = c, s[10] = d, s[11] = t, s[12] = f, s[13] = n) : n = s[13], s[14] !== g || s[15] !== m || s[16] !== h || s[17] !== p || s[18] !== c || s[19] !== d || s[20] !== t || s[21] !== f ? (o = [t, d, c, p, g, m, f, h], s[14] = g, s[15] = m, s[16] = h, s[17] = p, s[18] = c, s[19] = d, s[20] = t, s[21] = f, s[22] = o) : o = s[22], (0, a.useLayoutEffect)(n, o), null
            }
        })
    }),
    xHBh: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("Zqzr"),
            r = n("Bl6U"),
            l = n("unIO"),
            o = n("nlNF"),
            s = n("tSEg"),
            u = n("mz2o"),
            d = n("DipL");
        let c = new class {
            pending;
            start(e, t) {
                if (null != this.getVisit(t) && p(e, t) || (this.cancel("superseded"), "visible" !== document.visibilityState || !Number.isFinite(t.startedAt) || t.startedAt < 0 || t.startedAt > performance.now())) return;
                let n = (0, u.c)(e, .01);
                if (null == n || p(e, t)) return;
                let i = new AbortController;
                return this.pending = {
                    target: t,
                    startedAt: t.startedAt,
                    report: n,
                    state: (0, d.a)(e, t.threadId, t.hostId).catch(() => "unknown"),
                    timeout: window.setTimeout(() => this.finish("timeout", "timeout"), 3e4),
                    lifetime: i
                }, document.addEventListener("visibilitychange", () => {
                    "visible" !== document.visibilityState && this.cancel("backgrounded")
                }, {
                    signal: i.signal
                }), window.addEventListener("pagehide", () => this.cancel("page_hidden"), {
                    signal: i.signal
                }), i.signal
            }
            dispatch(e) {
                let t = this.pending;
                null != t && (null != e && g(t.target, e) ? null == t.dispatchedAt && (t.dispatchedAt = performance.now()) : this.cancel("route_changed"))
            }
            getVisit(e) {
                let t = this.pending;
                return t?.dispatchedAt != null && g(t.target, e) ? t.lifetime.signal : void 0
            }
            contentVisible(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now(),
                    n = this.pending;
                n?.dispatchedAt != null && this.getVisit(e) === e.signal && ("visible" !== document.visibilityState ? this.cancel("backgrounded") : Number.isFinite(t) && t >= n.dispatchedAt && t <= performance.now() && this.finish("success", void 0, t))
            }
            finishTarget(e) {
                this.getVisit(e) === e.signal && this.finish(e.outcome, e.reason)
            }
            cancel(e) {
                this.finish("cancelled", e)
            }
            finish(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now(),
                    r = this.pending;
                if (null == r) return;
                let o = Math.max(0, n - r.startedAt),
                    s = (0, i.c)(Math.round(Date.now() - (performance.now() - n)));
                this.pending = void 0, window.clearTimeout(r.timeout), r.lifetime.abort(), r.state.then(n => {
                    var i;
                    return r.report({
                        spanName: null == (i = r.target.hostId) || "local" === i ? "desktop_chat_navigation_visible_v1" : (0, a.bi)(i) ? "desktop_chat_navigation_visible_cloud_v1" : "desktop_chat_navigation_visible_remote_v1",
                        navigationType: "sidebar_click",
                        threadState: n,
                        outcome: e,
                        ..."success" === e ? {
                            durationMs: o
                        } : {
                            reason: t
                        },
                        wallDurationMs: o,
                        completedTs: s,
                        timingQuality: "backgrounded" === t || "page_hidden" === t ? "backgrounded" : "foreground",
                        marksMs: null == r.dispatchedAt ? {} : {
                            navigation_dispatched: Math.max(0, r.dispatchedAt - r.startedAt)
                        },
                        buildCommitSha: (0, l.a)()
                    })
                })
            }
        };

        function p(e, t) {
            let n = e.get(o.c);
            if (null == n) return !1;
            if (null == t.routeHostId && n.pathname === (0, a.ce)(t.threadId) && "" === n.search && "" === n.hash) return !0;
            let i = (0, s.b)({
                ...n,
                routeTemplate: n.pathname
            });
            return "local-thread" === i.routeKind && i.conversationId === t.threadId && (i.hostId ?? e.get(r.c, i.conversationId)) === t.hostId
        }

        function g(e, t) {
            return e.threadId === t.threadId && e.hostId === t.hostId
        }
        n.d(t, {}, {
            a: c
        })
    }),
    hs0N: (function(e, t, n) {
        var i = n("MTwj"),
            a = n("pwwq"),
            r = n("kjQz"),
            l = n("oVAx");
        let o = new class {
            startSpan;
            scheduleAfterPaint;
            pendingByClientUserMessageId = new Map;
            pendingByTurnId = new Map;
            constructor(e, t = s) {
                this.startSpan = e, this.scheduleAfterPaint = t
            }
            start(e, t, n, i, a) {
                let r = this.pendingByClientUserMessageId.get(e);
                null != r && (this.clear(r), r.span.abort("superseded"));
                let l = {
                        submissionKind: t,
                        responseRuntime: "unknown"
                    },
                    o = this.startSpan("turn_first_response_visible", l, {
                        key: e,
                        onTerminal: () => {
                            let t = this.pendingByClientUserMessageId.get(e);
                            t?.span === o && this.clear(t)
                        },
                        ...a,
                        traceAttributes: {
                            "turn.submission_kind": t,
                            ...null == a ? {} : {
                                "turn.submit_wall_time_ms": a.wallStartedAtMs
                            }
                        }
                    });
                if (!o.isRecording()) return;
                let s = {
                    attributes: l,
                    clientUserMessageId: e,
                    conversationId: n,
                    firstDataReceived: !1,
                    firstResponseVisible: !1,
                    newThreadNavigationDispatched: !1,
                    routeThreadId: i,
                    span: o,
                    tracedRequestStarts: null == o.trace ? null : new Map,
                    submitPreparation: o.measure("turn.submit_preparation", {
                        startedAtMs: a?.startedAtMs
                    }),
                    threadStartPreparation: null,
                    turnCompleted: !1,
                    turnId: null
                };
                this.pendingByClientUserMessageId.set(e, s)
            }
            markRequestDispatched(e, t) {
                let n = this.pendingByClientUserMessageId.get(e);
                if (null == n) return;
                n.submitPreparation?.end(), n.submitPreparation = null, "thread/start" === t && (n.threadStartPreparation?.end(), n.threadStartPreparation = null);
                let i = {};
                null != t && (i["app_server.method"] = t), n.span.mark("request_dispatched", {
                    traceAttributes: i
                })
            }
            handleRequestLifecycleEvent(e) {
                if ("started" !== e.type && "completed" !== e.type || null == e.clientUserMessageId || "thread/start" !== e.method && "thread/startAeon" !== e.method && "turn/start" !== e.method && "turn/addUserMessage" !== e.method) return;
                let t = this.pendingByClientUserMessageId.get(e.clientUserMessageId);
                if (null == t) return;
                let n = "started" === e.type ? e.startedAtMs : e.endedAtMs,
                    r = performance.timeOrigin + performance.now() + (n - Date.now()),
                    l = "turn/start" === e.method || "turn/addUserMessage" === e.method;
                if ("started" === e.type) {
                    t.tracedRequestStarts?.set(e.id, r), t.span.mark(l ? "turn_request_dispatched" : "thread_request_dispatched", {
                        atMs: r,
                        traceAttributes: {
                            "app_server.method": e.method
                        }
                    });
                    return
                }
                if (l) t.span.mark("turn_response_received", {
                    atMs: r
                });
                else {
                    let n = (0, i.a)(e.result) ? "cloud_agent" : "unknown";
                    t.attributes.responseRuntime = n, t.span.mark("thread_response_received", {
                        atMs: r,
                        traceAttributes: {
                            "codex.response_runtime": n
                        }
                    })
                }
                let o = t.tracedRequestStarts?.get(e.id);
                t.tracedRequestStarts?.delete(e.id), null != o && "requestDurationMs" in e && null != t.span.trace && (0, a.c)({
                    attributes: {
                        "app_server.method": e.method
                    },
                    endTimeMs: r,
                    name: l ? "turn.start_request_round_trip" : "thread.start_request_round_trip",
                    startTimeMs: o,
                    trace: t.span.trace
                })
            }
            getTrace(e) {
                let t = this.pendingByClientUserMessageId.get(e);
                return null == t ? void 0 : t.span.trace
            }
            measurePreparation(e, t) {
                return this.pendingByClientUserMessageId.get(e)?.span.measure(t) ?? {
                    end: () => {}
                }
            }
            recordEarlyPreparation(e, t, n, i) {
                let r = this.pendingByClientUserMessageId.get(e)?.span.trace;
                null == r || i < n || (0, a.c)({
                    attributes: {},
                    endTimeMs: i,
                    name: t,
                    startTimeMs: n,
                    trace: r
                })
            }
            markThreadCreationStarted(e, t) {
                let n = this.pendingByClientUserMessageId.get(e);
                null != n && (n.attributes.threadKind = t, n.span.mark("thread_creation_started", {
                    traceAttributes: {
                        "codex.thread_kind": t
                    }
                }))
            }
            markThreadCreated(e) {
                this.pendingByClientUserMessageId.get(e)?.span.mark("thread_created")
            }
            markThreadInputsReady(e) {
                let t = this.pendingByClientUserMessageId.get(e);
                t?.span.mark("thread_inputs_ready"), null != t && null == t.threadStartPreparation && (t.threadStartPreparation = t.span.measure("turn.submit.thread_start_preparation"))
            }
            bindConversation(e, t) {
                let n = this.pendingByClientUserMessageId.get(e);
                null != n && (n.conversationId = t)
            }
            markNewThreadNavigationDispatched(e) {
                let t = this.pendingByClientUserMessageId.get(e);
                null != t && (t.newThreadNavigationDispatched = !0, t.span.mark("new_thread_navigation_dispatched"))
            }
            markNewThreadPageVisible(e) {
                for (let t of this.pendingByClientUserMessageId.values()) t.newThreadNavigationDispatched && t.routeThreadId === e && t.span.mark("new_thread_page_visible")
            }
            markTurnStarted(e, t, n) {
                let i = this.pendingByClientUserMessageId.get(e);
                null != i && (i.conversationId = t, i.turnId = n, this.pendingByTurnId.set(n, i), i.span.mark("turn_started", void 0))
            }
            markFirstDataReceived(e) {
                let t = this.pendingByTurnId.get(e);
                null != t && !t.firstDataReceived && (t.firstDataReceived = !0, t.span.mark("first_data_received"), t.firstResponseVisible && (this.clear(t), t.span.end()))
            }
            markFirstResponseVisible(e) {
                let t = this.pendingByClientUserMessageId.get(e);
                if (null != t) {
                    if (!t.firstResponseVisible) {
                        if (t.turnCompleted && !t.firstDataReceived) return;
                        if (t.firstResponseVisible = !0, t.span.mark("first_response_visible"), t.submitPreparation?.end(), t.submitPreparation = null, t.threadStartPreparation?.end(), t.threadStartPreparation = null, !t.span.recordAnalyticsSuccess()) return void this.clear(t)
                    }
                    t.firstDataReceived && (this.clear(t), t.span.end())
                }
            }
            fail(e, t) {
                l.a.finishSubmission(e, "error");
                let n = this.pendingByClientUserMessageId.get(e);
                null != n && (this.clear(n), n.span.fail(t))
            }
            abort(e, t) {
                l.a.finishSubmission(e, "canceled");
                let n = this.pendingByClientUserMessageId.get(e);
                null != n && (this.clear(n), n.span.abort(t))
            }
            finishTurn(e, t) {
                let n = this.pendingByTurnId.get(e);
                if (null != n) switch (t) {
                    case "failed":
                        this.fail(n.clientUserMessageId, "turn_failed");
                        return;
                    case "interrupted":
                        this.abort(n.clientUserMessageId, "user_interrupted");
                        return;
                    case "completed":
                        if (n.turnCompleted = !0, n.firstDataReceived) return;
                        this.scheduleAfterPaint(() => {
                            let t = this.pendingByTurnId.get(e);
                            null != t && this.fail(t.clientUserMessageId, "no_visible_response")
                        });
                        return
                }
            }
            abortConversation(e) {
                for (let t of (l.a.abortConversation(e), this.pendingByClientUserMessageId.values())) t.conversationId === e && this.abort(t.clientUserMessageId, "navigation_away")
            }
            routeChanged(e) {
                for (let t of (l.a.routeChanged(e), this.pendingByClientUserMessageId.values()))(null == e || t.routeThreadId !== e && t.conversationId !== e) && this.abort(t.clientUserMessageId, "navigation_away")
            }
            dispose() {
                for (let e of (l.a.dispose(), this.pendingByClientUserMessageId.values())) this.abort(e.clientUserMessageId, "app_disposed")
            }
            clear(e) {
                this.pendingByClientUserMessageId.delete(e.clientUserMessageId), null != e.turnId && this.pendingByTurnId.get(e.turnId) === e && this.pendingByTurnId.delete(e.turnId)
            }
        }((e, t, n) => r.a.start(e, t, n));

        function s(e) {
            let t = 4,
                n = () => {
                    window.requestAnimationFrame(() => {
                        0 == (t -= 1) ? e() : n()
                    })
                };
            n()
        }
        n.d(t, {}, {
            a: o
        })
    }),
    kcZo: (function(e, t, n) {
        function i(e) {
            return null != e && Number.isFinite(e) && e >= 0 ? e : void 0
        }
        n.d(t, {}, {
            a: class {
                metrics;
                recordObservation;
                activityMs;
                answerMs;
                paintMs;
                tags;
                paintEmitted = !1;
                constructor(e, t) {
                    this.metrics = e, this.recordObservation = t
                }
                activity(e) {
                    null == this.tags && (this.activityMs = this.activityMs ?? i(e))
                }
                answer(e) {
                    null == this.tags && (this.answerMs = this.answerMs ?? i(e))
                }
                paint(e) {
                    let t = this.paintEmitted;
                    this.paintMs = this.paintMs ?? i(e), this.emitPaint(), !t && this.paintEmitted && this.observe()
                }
                finish(e) {
                    null == this.tags && (this.tags = e, this.metrics.count("default", "conversation.milestone.finished", e), this.emit("first_activity", this.activityMs), this.emit("first_answer", this.answerMs), this.emitPaint(), this.observe())
                }
                observe() {
                    try {
                        this.recordObservation?.({
                            ...this.tags,
                            turn_status: this.tags?.status,
                            first_activity_ms: this.activityMs,
                            first_answer_ms: this.answerMs,
                            first_paint_ms: this.paintMs
                        })
                    } catch {}
                }
                emit(e, t) {
                    null != this.tags && null != t && this.metrics.hist("default", "conversation.milestone.duration_ms", {
                        ...this.tags,
                        phase: e
                    }, t)
                }
                emitPaint() {
                    if (null != this.tags && null != this.paintMs && !this.paintEmitted && (this.paintEmitted = !0, this.emit("first_paint", this.paintMs), null != this.answerMs && this.answerMs <= this.paintMs) && (this.emit("client_render", this.paintMs - this.answerMs), null != this.activityMs && this.activityMs <= this.answerMs))
                        for (let [e, t] of Object.entries({
                                request_to_activity: this.activityMs,
                                activity_to_answer: this.answerMs - this.activityMs,
                                answer_to_paint: this.paintMs - this.answerMs,
                                total: this.paintMs
                            })) this.metrics.hist("default", "conversation.milestone.complete_ms", {
                            ...this.tags,
                            phase: e
                        }, t)
                }
            },
            b: function(e, t, n, i) {
                let a = e?.product_experience ?? t,
                    r = e?.runtime_source;
                return {
                    product_experience: "chat" === a || "work" === a ? a : "unknown",
                    runtime_source: "cca" === r || "flora" === r ? r : "unknown",
                    client_surface: "codex_apps_chatgpt",
                    status: n,
                    is_resume: String(i)
                }
            }
        })
    }),
    GMpf: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("unIO"),
            r = n("gbzJ");
        let l = new Set(["CLS", "FCP", "INP", "LCP", "TTFB"]);
        n.d(t, {}, {
            a: function(e, t) {
                let {
                    metricName: n,
                    metricValue: o
                } = e;
                return null != n && l.has(n) && null != o && Number.isFinite(o) && ("INP" !== n || !(o < 500)) ? {
                    spanName: `web_vital_${n.toLowerCase()}`,
                    durationMs: "CLS" === n ? void 0 : Math.min(Math.max(o, 0), 3e5),
                    cumulativeLayoutShiftScore: "CLS" === n ? o : void 0,
                    metricId: e.metricId,
                    pageLoadId: e.pageLoadId,
                    initialPath: e.initialPath,
                    navigationType: e.navigationType,
                    buildCommitSha: (0, a.a)(),
                    completedTs: (0, i.c)(Date.now()),
                    outcome: "success",
                    clientPlatform: (0, r.a)(),
                    samplingRuleId: t.ruleId,
                    samplingReason: t.reason
                } : null
            }
        })
    }),
    zEV5: (function(e, t, n) {
        var i = n("Q840"),
            a = n("ASxG");
        n("rP0s");
        var r = n("OWtl"),
            l = n("qixt");
        n("jBHQ");
        var o = n("kpIY"),
            s = n("pyOZ"),
            u = n("xzPv");
        let d = a.enum(["hidden", "visible", "visible-with-saved-custom"]),
            c = (0, i.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return !1
            }),
            p = (0, i.i)(r.a, e => null, (e, t) => {
                let {
                    get: n,
                    set: i
                } = t;
                if (!n(c, e)) return void i(null);
                let a = n(s.c);
                if ("host" !== a) return void i("timeout" === a ? "hidden" : null);
                let r = m(e),
                    l = (0, o.k)(r);
                return void 0 === l && (l = n(u.b, e)?.kind === "custom" ? "visible-with-saved-custom" : "hidden", (0, o.u)(r, l)), i(f(l)), (0, o.y)(r, "hidden", e => {
                    i(f(e))
                })
            }),
            g = (0, i.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(c, e) && !n(l.d) ? n(p, e) : "not-applicable"
            });

        function m(e) {
            return `codex-custom-permissions-preference:${e}`
        }

        function f(e) {
            return d.safeParse(e).data ?? "hidden"
        }
        n.d(t, {}, {
            a: p,
            b: g,
            c: c,
            d: function(e, t) {
                (0, o.u)(m(e), t)
            }
        })
    }),
    oV9s: (function(e, t, n) {
        n.d(t, {
            a: () => y,
            b: () => v
        });
        var i = n("SZCv"),
            a = n.n(i),
            r = n("Q840"),
            l = n("Zqzr"),
            o = n("tl5a"),
            s = n("QJVP"),
            u = n("p4am"),
            d = n("a4MG"),
            c = n("Hhl4"),
            p = n("OWtl"),
            g = n("zEV5");

        function m(e, t) {
            return e === t || (0, l.Sh)(e) && (0, l.Sh)(t)
        }

        function f(e, t) {
            return "workspaceWrite" !== e.type ? e : {
                ...e,
                writableRoots: [...new Set(e.writableRoots.filter(e => e !== t))].sort()
            }
        }

        function h(e, t) {
            return e.some(e => a()(e, t))
        }
        var _ = n("xzPv");
        let v = (0, r.d)(p.a, (e, t) => {
                let n, {
                        get: i
                    } = t,
                    r = {
                        cwd: e.cwd,
                        hostId: e.hostId
                    },
                    o = i(d.i, r),
                    s = i(d.h, {
                        hostId: e.requirementsHostId ?? e.hostId
                    }),
                    p = i(c.c, r),
                    m = i(u.a, e.hostId),
                    f = [o, s, p],
                    h = i(g.b, e.hostId);
                if (m.hasError || o.isError || p.isError || s.isError && null == s.data) return {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !0,
                    isLoading: !1
                };
                if (m.isPending || f.some(e => e.isPending) || null == p.data || null == h) return {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !1,
                    isLoading: !0
                };
                let v = o.data?.config ?? null,
                    b = s.data?.requirements ?? null,
                    y = (0, l.Th)(b, e.model) ? {
                        kind: "agent-mode",
                        agentMode: "guardian-approvals"
                    } : null,
                    E = "string" == typeof v?.default_permissions ? v.default_permissions : null,
                    {
                        defaultProfileId: P
                    } = (0, c.b)(p.data, b, E),
                    A = (0, l.Lf)({
                        config: v,
                        permissionProfiles: p.data,
                        requiredPermissionSelection: y,
                        requirements: b,
                        workspaceKind: e.workspaceKind
                    }),
                    w = null == y ? null : (0, l.ne)({
                        availablePermissionSelections: A,
                        permissionSelection: y,
                        workspaceKind: e.workspaceKind
                    }),
                    T = C(A, "read-only"),
                    k = I(A);
                n = m.isRequired ? null == T || null == w || a()(w, T) ? null != T ? [T] : null != w ? [w] : [{
                    kind: "server-default"
                }] : [T, w] : null != k ? [k, ...A.filter(e => "agent-mode" !== e.kind || "read-only" !== e.agentMode && e.agentMode !== k.agentMode)] : A;
                let S = i(_.b, e.hostId),
                    N = (0, l.ne)({
                        availablePermissionSelections: n,
                        permissionSelection: S?.kind === "custom" && ("hidden" === h || "visible" === h) ? null : S,
                        workspaceKind: e.workspaceKind
                    }),
                    R = (0, l.ne)({
                        availablePermissionSelections: n,
                        permissionSelection: function(e) {
                            switch (e) {
                                case ":read-only":
                                    return {
                                        kind: "agent-mode", agentMode: "read-only"
                                    };
                                case ":workspace":
                                    return {
                                        kind: "agent-mode", agentMode: "auto"
                                    };
                                case ":danger-full-access":
                                    return {
                                        kind: "agent-mode", agentMode: "full-access"
                                    };
                                case null:
                                    return null;
                                default:
                                    return {
                                        kind: "profile", profileId: e
                                    }
                            }
                        }(P),
                        workspaceKind: e.workspaceKind
                    }),
                    M = w ?? N ?? R ?? C(n, "guardian-approvals") ?? I(n) ?? n.find(e => "profile" === e.kind) ?? C(n, "read-only") ?? C(n, "full-access") ?? {
                        kind: "server-default"
                    };
                return {
                    availablePermissionSelections: n,
                    permissionSelection: M,
                    requiredPermissionSelection: w,
                    isError: !1,
                    isLoading: !1
                }
            }, {
                isEqual: a()
            }),
            b = (0, r.d)(p.a, (e, t) => {
                let {
                    get: n
                } = t, {
                    conversationId: i
                } = e, r = n(o.F, i), u = n(o.Ac, i);
                if (null == r || null == u) return {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !1,
                    isLoading: !0
                };
                let c = (0, s.a)(n(o.o, i), n(o._, i));
                if (null == c) return {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !1,
                    isLoading: !0
                };
                let p = n(o.p, i),
                    g = n(v, {
                        cwd: p,
                        hostId: r,
                        model: e.model,
                        workspaceKind: u
                    });
                if (g.isLoading || g.isError) return g;
                let _ = function(e) {
                    var t, n, i;
                    let {
                        availablePermissionSelections: r,
                        configuredCustomPermissions: o,
                        cwd: s,
                        permissions: u
                    } = e, d = u.activePermissionProfile?.id ?? null;
                    if (null != d && !d.startsWith(":")) {
                        let e = {
                            kind: "profile",
                            profileId: d
                        };
                        return {
                            isAvailable: h(r, e),
                            isLegacy: !1,
                            permissionSelection: e
                        }
                    }
                    let c = null == d ? (0, l.zf)(u)?.agentMode : l.b.find(e => e.permissionProfileId === d && a()(e.approvalPolicy, u.approvalPolicy) && m(e.approvalsReviewer, u.approvalsReviewer))?.agentMode;
                    if (null != c) {
                        let e = {
                            kind: "agent-mode",
                            agentMode: c
                        };
                        return {
                            isAvailable: h(r, e),
                            isLegacy: null == d,
                            permissionSelection: e
                        }
                    }
                    if (t = u, n = o, i = s, null == t.activePermissionProfile && null == n.activePermissionProfile && a()(t.approvalPolicy, n.approvalPolicy) && m(t.approvalsReviewer, n.approvalsReviewer) && a()(f(t.sandboxPolicy, i), f(n.sandboxPolicy, i))) {
                        let e = {
                            kind: "custom"
                        };
                        return {
                            isAvailable: h(r, e),
                            isLegacy: !1,
                            permissionSelection: e
                        }
                    }
                    if (null == d) return {
                        isAvailable: !1,
                        isLegacy: !0,
                        permissionSelection: {
                            kind: "custom"
                        }
                    };
                    let p = {
                        kind: "server-default"
                    };
                    return {
                        isAvailable: h(r, p),
                        isLegacy: !1,
                        permissionSelection: p
                    }
                }({
                    availablePermissionSelections: g.availablePermissionSelections,
                    configuredCustomPermissions: (0, l.ge)("custom", c.runtimeWorkspaceRoots ?? [], n(d.i, {
                        cwd: p,
                        hostId: r
                    }).data?.config),
                    cwd: p,
                    permissions: c
                });
                return {
                    availablePermissionSelections: g.availablePermissionSelections,
                    ..._,
                    requiredPermissionSelection: g.requiredPermissionSelection,
                    isError: !1,
                    isLoading: !1
                }
            }, {
                isEqual: a()
            }),
            y = (0, r.d)(p.a, (e, t) => {
                let {
                    get: n
                } = t;
                return !1 === e.enabled ? {
                    availablePermissionSelections: null,
                    permissionSelection: null,
                    requiredPermissionSelection: null,
                    isError: !1,
                    isLoading: !0
                } : null != e.conversationId ? n(b, {
                    conversationId: e.conversationId,
                    model: e.model
                }) : n(v, {
                    cwd: e.cwd,
                    hostId: e.hostId,
                    requirementsHostId: e.requirementsHostId,
                    model: e.model,
                    workspaceKind: e.workspaceKind
                })
            }, {
                isEqual: a()
            });

        function I(e) {
            return e.find(e => "agent-mode" === e.kind && ("auto" === e.agentMode || "granular" === e.agentMode)) ?? null
        }

        function C(e, t) {
            return e.find(e => "agent-mode" === e.kind && e.agentMode === t) ?? null
        }
    }),
    z2Go: (function(e, t, n) {
        var i = n("YULJ"),
            a = n("oV9s");
        n.d(t, {}, {
            a: async function(e) {
                let {
                    scope: t,
                    config: n,
                    cwd: r,
                    hostId: l,
                    isDelegated: o,
                    model: s,
                    workspaceKind: u
                } = e;
                if (!t.get(i.a, l)) return null;
                let d = {
                    cwd: r,
                    hostId: l,
                    model: s ?? n.model ?? null,
                    workspaceKind: u
                };
                await t.when(e => !e.get(a.b, d).isLoading);
                let c = t.get(a.b, d);
                if (c.isLoading || c.isError) throw Error("Could not load permissions for the destination project");
                let {
                    permissionSelection: p
                } = c;
                return o && ("agent-mode" === p.kind && "full-access" === p.agentMode || "custom" === p.kind && "danger-full-access" === n.sandbox_mode) ? null : p
            }
        })
    }),
    xzPv: (function(e, t, n) {
        var i = n("kpIY");
        let a = (0, n("Nwp9").c)(r, null);

        function r(e) {
            return `permission-selection-by-host-id:${e}`
        }
        n.d(t, {}, {
            a: function(e, t) {
                (0, i.u)(r(e), t)
            },
            b: a
        })
    }),
    szIs: (function(e, t, n) {
        n.d(t, {}, {
            a: ["vscode", "list-pinned-threads"]
        })
    }),
    ay73: (function(e, t, n) {
        var i = n("Q840"),
            a = n("GaA7"),
            r = n("q77y"),
            l = n("OWtl"),
            o = n("rvFo"),
            s = n("szIs");
        let u = (0, i.c)(l.a, () => !0),
            d = (0, i.r)(l.a, e => {
                let {
                    get: t
                } = e, n = t(u) ? {
                    useAppServerPins: !0
                } : void 0;
                return {
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e, i = a.a?.pinnedThreads;
                        return null != i ? (0, r.a)(i.list(n), t) : {
                            threadIds: []
                        }
                    },
                    queryKey: s.a,
                    refetchOnWindowFocus: !0,
                    staleTime: o.b.FIVE_SECONDS
                }
            }),
            c = (0, i.j)(l.a, e => ({
                pending: 0,
                interruptedRead: !1
            }));
        n.d(t, {}, {
            a: u,
            b: function(e) {
                let t = e.get(c, void 0),
                    n = e.queryClient.getQueryState(s.a);
                return t.pending++, n?.data != null && "idle" !== n.fetchStatus && (t.interruptedRead = !0, e.query.cancel(d)), () => {
                    t.pending--, 0 === t.pending && t.interruptedRead && (t.interruptedRead = !1, e.query.invalidate(d, {
                        refetchType: "all"
                    }))
                }
            },
            c: d
        })
    }),
    cae3: (function(e, t, n) {
        let i = !1;
        n.d(t, {
            a: () => i
        }, {
            b: function(e) {
                i = e
            }
        })
    }),
    hczB: (function(e, t, n) {
        n("Ot7V");
        var i = n("CV1W"),
            a = n("k7G6");

        function r(e) {
            return "plugin" === e.type ? (0, a.b)(e.pluginId) : (0, i.e)("apps", e.appId)
        }
        n.d(t, {}, {
            a: r,
            b: function(e, t) {
                return null == t ? {
                    type: "app",
                    appId: e
                } : {
                    type: "plugin",
                    pluginId: t
                }
            },
            c: function(e, t) {
                "plugin" === e.type ? (0, a.c)(e.pluginId, t) : t(r(e))
            }
        })
    }),
    WXrt: (function(e, t, n) {
        var i = n("QosV"),
            a = n("S2r0"),
            r = n("T0Rc"),
            l = n("fxCc"),
            o = n("dSKa"),
            s = n("Q840"),
            u = n("Zqzr"),
            d = n("GaA7"),
            c = n("OWtl"),
            p = n("ADAj"),
            g = n("rvFo");
        let m = (0, s.c)(c.a, e => {
            let {
                get: t
            } = e;
            return new Map(Object.keys(o.e).filter(o.D).map(e => [e, (0, p.b)(t, u.Ie[e])]))
        });

        function f(e) {
            let {
                browserFamily: t,
                enabled: n,
                refetchOnWindowFocus: i
            } = e, r = d.a?.chromiumBrowser;
            return (0, a.a)({
                enabled: !1 !== n && !1,
                queryKey: ["chromium-browser-extension-status", t],
                queryFn: async () => null == r ? {
                    installUrl: null,
                    installedExtensionId: null
                } : r.getExtensionStatus({
                    browserFamily: t
                }),
                refetchOnWindowFocus: i,
                staleTime: g.b.FIVE_SECONDS
            })
        }
        n.d(t, {}, {
            a: m,
            b: f,
            c: function(e) {
                let t, n, a, l = (0, i.c)(11),
                    {
                        browserFamily: o
                    } = e;
                l[0] !== o ? (t = f({
                    browserFamily: o,
                    refetchOnWindowFocus: !0
                }), l[0] = o, l[1] = t) : t = l[1];
                let {
                    data: s,
                    isLoading: u,
                    isError: d,
                    refetch: c
                } = (0, r.a)(t), p = s?.installedExtensionId ?? null, g = s?.installUrl ?? null, m = null != p, h = s?.detectionError ?? (d ? "unknown" : void 0);
                return l[2] !== c ? (n = () => {
                    c()
                }, l[2] = c, l[3] = n) : n = l[3], l[4] !== p || l[5] !== u || l[6] !== g || l[7] !== m || l[8] !== h || l[9] !== n ? (a = {
                    installUrl: g,
                    installedExtensionId: p,
                    isInstalled: m,
                    isLoading: u,
                    detectionError: h,
                    retry: n
                }, l[4] = p, l[5] = u, l[6] = g, l[7] = m, l[8] = h, l[9] = n, l[10] = a) : a = l[10], a
            },
            d: function(e, t) {
                let n, a, r, o, s = (0, i.c)(14);
                s[0] !== t ? (n = void 0 === t ? {} : t, s[0] = t, s[1] = n) : n = s[1];
                let {
                    refetchOnWindowFocus: u
                } = n, d = void 0 === u || u;
                if (s[2] !== e || s[3] !== d) {
                    let t;
                    s[5] !== d ? (t = e => {
                        let {
                            browserFamily: t
                        } = e;
                        return f({
                            browserFamily: t,
                            refetchOnWindowFocus: d
                        })
                    }, s[5] = d, s[6] = t) : t = s[6], a = e.map(t), s[2] = e, s[3] = d, s[4] = a
                } else a = s[4];
                s[7] !== a ? (r = {
                    queries: a
                }, s[7] = a, s[8] = r) : r = s[8];
                let c = (0, l.a)(r);
                if (s[9] !== e || s[10] !== c) {
                    let t;
                    s[12] !== c ? (t = (e, t) => {
                        let {
                            browserFamily: n
                        } = e, i = c[t], a = i?.data?.installedExtensionId ?? null;
                        return [n, {
                            installUrl: i?.data?.installUrl ?? null,
                            installedExtensionId: a,
                            isInstalled: null != a,
                            isLoading: i?.isLoading === !0,
                            detectionError: i?.data?.detectionError ?? (i?.isError ? "unknown" : void 0)
                        }]
                    }, s[12] = c, s[13] = t) : t = s[13], o = new Map(e.map(t)), s[9] = e, s[10] = c, s[11] = o
                } else o = s[11];
                return o
            }
        })
    }),
    joT6: (function(e, t, n) {
        var i = n("QosV"),
            a = n("T0Rc"),
            r = n("dSKa"),
            l = n("Vw6J"),
            o = n("Zqzr"),
            s = n("ASxG"),
            u = n("EJTT"),
            d = n("MI1z"),
            c = n("ywWc"),
            p = n("uNQ5"),
            g = n("C0re"),
            m = n("EEop"),
            f = n("YeiR"),
            h = n("RHhA"),
            _ = n("WFY2"),
            v = n("bnxy"),
            b = n("rvFo"),
            y = n("WXrt"),
            I = n("ueue");
        let C = s.enum([o.db, "chrome", "chrome-dev", "chrome-internal"]),
            E = s.object({
                browserFamily: s.custom(e => "string" == typeof e && (0, r.D)(e)),
                extensionIds: s.array(s.string().trim().min(1)).min(1),
                browserIconAssetPath: s.string().trim().min(1),
                storeExtensionId: s.string().trim().min(1).nullable().optional(),
                storeUrl: s.url().nullable()
            }),
            P = s.object({
                browserExtensions: s.array(E)
            });
        async function A(e) {
            let {
                codexHome: t,
                params: n,
                plugin: i
            } = e, a = await (0, p.a)(n);
            return function(e) {
                let {
                    config: t,
                    codexHome: n,
                    plugin: i
                } = e, a = (0, h.a)(), s = "prod";
                a === o.pb.Dev ? s = "dev" : (o.pb.isInternal(a) || a === o.pb.Agent) && (s = "internal");
                let d = T(i) === o.db,
                    c = null == n || "local" !== i.plugin.source.type ? null : (0, o.Cg)({
                        codexHome: n,
                        localVersion: i.plugin.localVersion,
                        marketplaceName: i.marketplaceName,
                        pluginName: i.plugin.name
                    });
                return t.browserExtensions.filter(e => {
                    let {
                        browserFamily: t
                    } = e;
                    return d || "chrome" === t
                }).map(e => {
                    let t = d && "dev" !== s ? (0, l.d)(e.browserFamily, s) : null,
                        n = d ? (0, u.b)(e.browserFamily) : k(null == c ? null : (0, v.p)(c, e.browserIconAssetPath)) ?? k(i.logoPath),
                        a = t?.storeUrl ?? e.storeUrl;
                    if ("dev" === s) {
                        let t = e.extensionIds[0];
                        a = null == t ? null : (0, r.z)(t)
                    }
                    return {
                        browserFamily: e.browserFamily,
                        extensionIds: null == t ? e.extensionIds : [...new Set([...t.extensionIds, ...e.extensionIds])],
                        iconUrl: n,
                        storeExtensionId: "dev" === s ? null : t?.extensionIds[0] ?? e.storeExtensionId ?? null,
                        storeUrl: a
                    }
                })
            }({
                config: P.parse(JSON.parse(a.contents)),
                codexHome: t,
                plugin: i
            })
        }

        function w(e, t) {
            return null == e || t?.plugin.source.type !== "local" || null == T(t) ? null : (0, v.p)((0, o.Cg)({
                codexHome: e,
                localVersion: t.plugin.localVersion,
                marketplaceName: t.marketplaceName,
                pluginName: t.plugin.name
            }), "scripts/extension-ids.json")
        }

        function T(e) {
            let t = C.safeParse(e.plugin.name);
            return t.success && e.plugin.id.startsWith(`${t.data}@`) ? t.data : null
        }

        function k(e) {
            let t = e?.trim();
            if (null == t || 0 === t.length) return null;
            let n = t.toLowerCase();
            return n.startsWith("app:") || n.startsWith("data:") || n.startsWith("http:") || n.startsWith("https:") || n.startsWith("/@fs") ? t : (0, o.Ih)(t) ? "http:" === window.location.protocol || "https:" === window.location.protocol ? (0, f.b)(t) : (0, f.a)(t) : null
        }

        function S(e) {
            let {
                hostId: t,
                path: n
            } = e;
            return [...(0, g.b)(t, "browser-extension-setup"), n]
        }
        n.d(t, {}, {
            a: async function(e) {
                let {
                    scope: t,
                    authPolicy: n,
                    browserFamily: i,
                    codexHome: a,
                    hostId: r,
                    plugin: l,
                    queryClient: o,
                    windowType: s
                } = e;
                if ("ON_INSTALL" !== n || "electron" !== s || null == T(l)) return [];
                let u = a ?? (await (0, c.d)(r)).codexHome,
                    d = await async function(e) {
                        let {
                            scope: t,
                            hostId: n,
                            plugin: i
                        } = e;
                        try {
                            let e = await t.query.getOrFetch(m.l, {
                                hostId: n,
                                marketplacePath: i.marketplacePath,
                                pluginName: (0, I.l)(i).pluginName,
                                remoteMarketplaceName: i.remoteMarketplaceName ?? null
                            });
                            return (0, I.c)(e)
                        } catch (e) {
                            return _.a.warning("Failed to read installed plugin browser extension setup", {
                                safe: {},
                                sensitive: {
                                    error: e,
                                    pluginId: i.plugin.id
                                }
                            }), i
                        }
                    }({
                        scope: t,
                        hostId: r,
                        plugin: l
                    }), p = (await async function(e) {
                        let {
                            codexHome: t,
                            hostId: n,
                            plugin: i,
                            queryClient: a
                        } = e;
                        try {
                            let e = w(t, i);
                            if (null == e) return [];
                            let r = {
                                hostId: n,
                                path: e
                            };
                            return await a.fetchQuery({
                                queryFn: () => A({
                                    codexHome: t,
                                    params: r,
                                    plugin: i
                                }),
                                queryKey: S(r),
                                retry: !1,
                                staleTime: b.b.INFINITE
                            })
                        } catch (e) {
                            return _.a.warning("Failed to read plugin browser extension setup", {
                                safe: {},
                                sensitive: {
                                    error: e,
                                    pluginId: i.plugin.id
                                }
                            }), []
                        }
                    }({
                        codexHome: u,
                        hostId: r,
                        plugin: d,
                        queryClient: o
                    })).filter(e => {
                        let {
                            browserFamily: t
                        } = e;
                        return null == i || t === i
                    }), g = await Promise.all(p.map(async e => o.fetchQuery({
                        ...(0, y.b)({
                            browserFamily: e.browserFamily
                        }),
                        staleTime: 0
                    })));
                return g.some(e => {
                    let {
                        installedExtensionId: t,
                        detectionError: n
                    } = e;
                    return null != t || "permission-denied" === n
                }) ? [] : p.map((e, t) => ({
                    ...e,
                    storeUrl: g[t]?.installUrl ?? e.storeUrl
                })).filter(e => {
                    let {
                        storeUrl: t
                    } = e;
                    return null != t
                }).slice(0, 1)
            },
            b: function(e) {
                let t, n, r, l, o, s, u = (0, i.c)(19),
                    {
                        enabled: c,
                        hostId: p,
                        plugin: g
                    } = e,
                    {
                        data: m,
                        isError: f,
                        isPending: h
                    } = (0, d.b)(p),
                    _ = m?.codexHome;
                u[0] !== _ || u[1] !== c || u[2] !== p || u[3] !== g ? (t = w(_, g), l = a.a, n = c && null != t, r = null == t ? ["plugins", "browser-extension-setup", "missing"] : S({
                    hostId: p,
                    path: t
                }), u[0] = _, u[1] = c, u[2] = p, u[3] = g, u[4] = t, u[5] = n, u[6] = r, u[7] = l) : (t = u[4], n = u[5], r = u[6], l = u[7]), u[8] !== _ || u[9] !== t || u[10] !== p || u[11] !== g ? (o = async () => null == t || null == g ? [] : A({
                    codexHome: _,
                    params: {
                        hostId: p,
                        path: t
                    },
                    plugin: g
                }), u[8] = _, u[9] = t, u[10] = p, u[11] = g, u[12] = o) : o = u[12], u[13] !== n || u[14] !== r || u[15] !== o ? (s = {
                    enabled: n,
                    queryKey: r,
                    queryFn: o,
                    retry: !1,
                    staleTime: b.b.INFINITE
                }, u[13] = n, u[14] = r, u[15] = o, u[16] = s) : s = u[16];
                let {
                    data: v,
                    isError: y
                } = l(s);
                if (!c || null == g) {
                    let e;
                    return u[17] === Symbol.for("react.memo_cache_sentinel") ? (e = [], u[17] = e) : e = u[17], e
                }
                if ("local" !== g.plugin.source.type || null == T(g) || !h) {
                    if (null == t || f || y) {
                        let e;
                        return u[18] === Symbol.for("react.memo_cache_sentinel") ? (e = [], u[18] = e) : e = u[18], e
                    }
                    return v
                }
            }
        })
    }),
    NFKX: (function(e, t, n) {
        let i = (0, n("Qgfj").f)({
            label: {
                id: "composer.pluginMention.browserUse.label",
                defaultMessage: "Browser"
            },
            restrictedAvailabilityDescription: {
                id: "settings.browserPlugin.restrictedAvailabilityDescription",
                defaultMessage: "Disabled by your organization or unavailable in your region"
            }
        });
        n.d(t, {}, {
            a: i
        })
    }),
    OF5O: (function(e, t, n) {
        var i = n("Q840"),
            a = n("GaA7"),
            r = n("OWtl");
        let l = (0, i.q)(r.a, e => ({
            queryKey: ["bundled-plugin-auto-install", e],
            staleTime: 5e3,
            enabled: null != a.a.bundledPluginPreferences,
            queryFn: async () => {
                let t = a.a.bundledPluginPreferences;
                if (null == t) throw Error("Bundled plugin preferences are unavailable");
                return t.readAutoInstallDisabled(e)
            }
        }));
        n.d(t, {}, {
            a: async function(e, t, n) {
                let i = a.a.bundledPluginPreferences;
                null != i && (await i.setAutoInstallDisabled(t, n), await e.query.invalidate(l, t))
            }
        })
    }),
    xWQV: (function(e, t, n) {
        var i = n("bTvG"),
            a = n("lSdY"),
            r = n("mfKi"),
            l = n("ASxG"),
            o = n("yGJW");
        let s = l.object({
                conversationId: l.string().optional(),
                installAction: l.enum(i.x).optional(),
                productExperience: l.enum(a.a),
                surface: l.enum(i.z)
            }),
            u = {
                [r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL_CONSENT]: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL_CONSENT",
                [r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL]: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                [r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE]: "CHATGPT_PLUGIN_ACTION_TYPE_ENABLE",
                [r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE]: "CHATGPT_PLUGIN_ACTION_TYPE_REMOVE",
                [r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP]: "CHATGPT_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP",
                [r.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR]: "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR"
            },
            d = {
                [r.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_CANCELLED]: "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED",
                [r.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_UNSPECIFIED]: "CHATGPT_PLUGIN_ACTION_RESULT_UNSPECIFIED",
                [r.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED]: "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED",
                [r.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS]: "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS",
                [r.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE]: "CHATGPT_PLUGIN_ACTION_RESULT_FAILURE",
                [r.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_BLOCKED]: "CHATGPT_PLUGIN_ACTION_RESULT_BLOCKED",
                [r.CodexPluginActionResult.UNRECOGNIZED]: "UNRECOGNIZED"
            };

        function c(e, t, n) {
            let a, {
                    action: r,
                    connectorId: l,
                    errorType: s,
                    installAttemptId: u,
                    pluginId: d,
                    pluginIds: c,
                    referrerInstallAttemptId: p,
                    referrerPluginId: g,
                    result: m,
                    sourceAttributionId: f,
                    suggestionId: h,
                    voiceSessionId: _
                } = n,
                v = "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL" === r && "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED" === m;
            "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR" === r ? a = i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE : "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL" === r && (a = t.installAction), (0, o.a)(e, i.q, {
                action: r,
                result: m,
                pluginId: d,
                pluginIds: c,
                connectorId: l,
                errorType: s,
                installAttemptId: u,
                installAction: a,
                conversationId: v ? t.conversationId : void 0,
                voiceSessionId: v ? _ : void 0,
                sourceAttributionId: v ? f : void 0,
                referrerInstallAttemptId: v ? p : void 0,
                referrerPluginId: v ? g : void 0,
                suggestionId: h,
                productExperience: t.productExperience,
                surface: t.surface
            })
        }
        n.d(t, {}, {
            a: s,
            b: function(e) {
                let t = l.object({
                    status: l.number()
                }).safeParse(e);
                return t.success ? `http_${t.data.status}` : e instanceof Error ? "error" : "unknown"
            },
            c: c,
            d: function(e, t, n) {
                let {
                    action: i,
                    connectorId: a,
                    errorType: r,
                    installAttemptId: l,
                    pluginId: o,
                    result: s,
                    sourceAttributionId: p,
                    suggestionId: g,
                    voiceSessionId: m
                } = n, f = u[i];
                return null != t && null != f && (c(e, t, {
                    action: f,
                    result: d[s],
                    pluginId: o,
                    connectorId: a,
                    errorType: r,
                    installAttemptId: l,
                    sourceAttributionId: p,
                    suggestionId: g,
                    voiceSessionId: m
                }), !0)
            },
            e: function(e, t, n) {
                let {
                    connectorId: a,
                    installAttemptId: r,
                    pluginId: l,
                    interstitialAction: s,
                    suggestionId: u
                } = n, d = "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED";
                null == s ? d = "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" : "dismissed" === s && (d = "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED"), (0, o.a)(e, i.q, {
                    action: null == s ? "CHATGPT_PLUGIN_ACTION_TYPE_AUTH_INTERSTITIAL_SHOWN" : "CHATGPT_PLUGIN_ACTION_TYPE_AUTH_INTERSTITIAL_ACTION",
                    result: d,
                    pluginId: l,
                    connectorId: a,
                    installAttemptId: r,
                    interstitialAction: s,
                    suggestionId: u,
                    productExperience: t.productExperience,
                    surface: t.surface
                })
            }
        })
    }),
    SaEY: (function(e, t, n) {
        var i = n("QosV"),
            a = n("T0Rc"),
            r = n("fxCc"),
            l = n("Q840"),
            o = n("oo2L"),
            s = n("S7fj"),
            u = n("hOO0"),
            d = n("BQbE"),
            c = n("pDRe"),
            p = n("OiCI"),
            g = n("Cslg"),
            m = n("EEop"),
            f = n("sFqu");
        let h = "DISABLED_BY_ADMIN";

        function _(e) {
            return e?.availability === "DISABLED_BY_ADMIN"
        }

        function v(e) {
            return _(e) ? "disabled-by-admin" : e?.installPolicy !== "NOT_AVAILABLE" || e.installed ? null : "installation-unavailable"
        }

        function b(e) {
            return null != e.error
        }

        function y(e) {
            return e.isPending
        }

        function I(e) {
            return e.length > 0
        }

        function C(e) {
            return e.id
        }
        n.d(t, {}, {
            a: v,
            b: _,
            c: function(e) {
                var t, n, _, E;
                let P, A, w, T, k, S = (0, i.c)(17),
                    {
                        enabled: N,
                        hostId: R,
                        pluginApps: M,
                        pluginSummary: O,
                        marketplacePath: L,
                        pluginName: D,
                        remoteMarketplaceName: x,
                        productContext: U,
                        appConnectOptions: G
                    } = e,
                    q = void 0 === N || N;
                S[0] !== R ? (P = (0, s.b)(R), S[0] = R, S[1] = P) : P = S[1];
                let F = P,
                    K = (0, l.z)(p.a),
                    H = (0, l.z)(g.k),
                    B = q && null == M && (null != L || null != x) && null != D,
                    j = L ?? null,
                    z = D ?? null,
                    W = x ?? null;
                S[2] !== R || S[3] !== U || S[4] !== B || S[5] !== j || S[6] !== z || S[7] !== W ? (A = {
                    hostId: R,
                    productContext: U,
                    marketplacePath: j,
                    pluginName: z,
                    remoteMarketplaceName: W,
                    enabled: B
                }, S[2] = R, S[3] = U, S[4] = B, S[5] = j, S[6] = z, S[7] = W, S[8] = A) : A = S[8];
                let {
                    isLoading: V,
                    plugin: Y
                } = (0, m.m)(A);
                S[9] !== q || S[10] !== Y?.apps || S[11] !== M ? (w = q ? M ?? Y?.apps ?? [] : [], S[9] = q, S[10] = Y?.apps, S[11] = M, S[12] = w) : w = S[12];
                let Q = w,
                    X = O ?? Y?.summary,
                    $ = X?.source.type === "remote",
                    Z = Array.from(new Set(Q.map(C).filter(I))),
                    {
                        data: J,
                        isLoading: ee,
                        error: et
                    } = (0, d.c)({
                        appIds: Z,
                        enabled: !F && null == U && Z.length > 0,
                        hostId: R
                    });
                null != U && (T = "chatgpt" === U ? "PROMPT_TEXT_AREA" : "CODEX");
                let {
                    data: en,
                    isPending: ei,
                    error: ea
                } = (0, a.a)((0, c.b)({
                    userId: H,
                    accountId: K,
                    appIds: Z,
                    productSku: T,
                    enabled: F && q
                })), er = (0, r.a)({
                    queries: (F ? [] : Z).map(e => (0, o.f)(e, {
                        productSku: (0, f.a)(e, {
                            productContext: U,
                            appConnectOptions: G
                        })?.productSku
                    }))
                }), el = B && V || (F ? Z.length > 0 && ei : null == U && ee) || er.some(y), eo = {}, es = [];
                for (let [e, i] of Z.entries()) {
                    let a;
                    if (F) a = function(e, t) {
                        if (null == t) return null;
                        let n = t.find(t => (0, u.a)(t.id) === (0, u.a)(e));
                        return n?.status === h || n?.disabled_reason === "disabled_by_admin" ? "disabled-by-admin" : null != n && n.available && (n.installed || n.can_install) ? null : "connector-unavailable"
                    }(i, en);
                    else {
                        let r = null == U && !ee && null == et && !J?.some(e => e.id === i);
                        t = er[e], n = r, a = t?.data?.status === h ? "disabled-by-admin" : n || null != t && !t.isPending && null == t.error && null == t.data ? "connector-unavailable" : null
                    }
                    eo[i] = a, es.push(a)
                }
                return S[13] !== et || S[14] !== er || S[15] !== ea ? (k = null != et || null != ea || er.some(b), S[13] = et, S[14] = er, S[15] = ea, S[16] = k) : k = S[16], {
                    blockedReasonsByConnectorId: eo,
                    hasConnectorAvailabilityError: k,
                    isConnectorAvailabilityLoading: el,
                    isLoading: !$ && el,
                    blockedReason: (_ = X, E = es, _?.source.type === "remote" ? v(_) : 0 === E.length || E.includes(null) ? null : E.every(e => "disabled-by-admin" === e) ? "disabled-by-admin" : "connector-unavailable")
                }
            }
        })
    }),
    p84t: (function(e, t, n) {
        n("GaA7"), n.d(t, {}, {
            a: async function(e) {
                let {
                    hostId: t,
                    marketplacePath: n,
                    pluginName: i
                } = e
            },
            b: async function(e) {
                let {
                    hostId: t,
                    marketplaceName: n,
                    pluginName: i
                } = e
            }
        })
    }),
    uUv4: (function(e, t, n) {
        n.d(t, {}, {
            a: {
                box: "plugin_asdk_app_695bfc98071c8191bac7bc479aa27de7",
                gmail: "plugin_connector_1p_95d39881713c8191931482a62d6edff9",
                "google-calendar": "plugin_connector_1p_f8509de903288191b14a160c6c5d20b0",
                "google-drive": "plugin_connector_1p_ab21a553bfbc81919ea8fd1858e3ffa7",
                notion: "plugin_asdk_app_69c18c28f1188191bf5b8445c4ab0a2e",
                "outlook-calendar": "plugin_connector_1p_fd0f4f41caa88191a9456514bbffa06d",
                "outlook-email": "plugin_connector_1p_6bcb5879c73c819196abc70016166099",
                salesforce: "plugin_asdk_app_697d413990c88191a2bf4799604f8f6c",
                sharepoint: "plugin_connector_1p_dca009ae2c848191ae14df3a47c5e7fd",
                slack: "plugin_asdk_app_69a1d78e929881919bba0dbda1f6436d",
                teams: "plugin_connector_1p_eba8b52fe53881918408d4b46b957644"
            }
        })
    }),
    IwvW: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            r = n("v4LA"),
            l = n("hZax"),
            o = n("ZqLP");
        let s = (0, r.a)(async () => (await Promise.all([n.e(893387), n.e(18204), n.e(703253), n.e(568416), n.e(584510), n.e(961001)]).then(n.bind(n, "zLjj"))).PluginEditorPage),
            u = (0, r.a)(async () => (await n.e(239046).then(n.bind(n, "oVqR"))).PluginDetailEmptyState);
        n.d(t, {}, {
            a: function() {
                let e, t = (0, a.c)(2),
                    n = (0, l.f)(o.c);
                return (0, l.g)(o.c) ? null : (t[0] !== n ? (e = n ? (0, i.jsx)(s, {}) : (0, i.jsx)("div", {
                    className: "flex h-full flex-col px-toolbar",
                    children: (0, i.jsx)(u, {
                        state: "missing"
                    })
                }), t[0] = n, t[1] = e) : e = t[1], e)
            }
        })
    }),
    Brn9: (function(e, t, n) {
        var i = n("dSKa"),
            a = n("ASxG"),
            r = n("EZRW");
        let l = "plugin_connector_1p_51c1ba70f47481919149861084681943",
            o = a.object({
                type: a.literal("mcpToolCall"),
                result: a.object({
                    _meta: a.object({
                        "codex/toolSurface": a.object({
                            kind: a.literal("browserUse"),
                            backend: a.literal("chrome"),
                            browserFamily: a.custom(e => "string" == typeof e && (0, i.D)(e))
                        })
                    })
                })
            });

        function s(e) {
            return e === l
        }
        n.d(t, {}, {
            a: l,
            b: function(e) {
                return s(e) ? (0, r.a)() : null
            },
            c: function(e) {
                let t = o.safeParse(e);
                return t.success ? t.data.result._meta["codex/toolSurface"].browserFamily : null
            },
            d: s
        })
    }),
    e2wX: (function(e, t, n) {
        var i = n("ABep"),
            a = n("QosV"),
            r = n("Q840"),
            l = n("rEML"),
            o = n("hczB"),
            s = n("tlx5"),
            u = n("ygu7");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, c, p, g, m, f, h = (0, a.c)(19),
                    {
                        appId: _,
                        pluginId: v,
                        children: b
                    } = e,
                    y = (0, l._)();
                h[0] !== _ ? (t = {
                    appId: _
                }, h[0] = _, h[1] = t) : t = h[1];
                let I = null == v;
                h[2] !== I ? (n = {
                    enabled: I
                }, h[2] = I, h[3] = n) : n = h[3];
                let {
                    data: C,
                    isError: E
                } = (0, r.x)(u.a, t, n), P = v ?? C;
                return void 0 === P || null == v && E ? b : (h[4] !== _ || h[5] !== P ? (c = (0, o.b)(_, P), d = l.g, p = "inline cursor-interaction bg-transparent p-0 text-start align-baseline", g = (0, o.a)(c), h[4] = _, h[5] = P, h[6] = d, h[7] = c, h[8] = p, h[9] = g) : (d = h[6], c = h[7], p = h[8], g = h[9]), h[10] !== c || h[11] !== y ? (m = e => (0, s.a)(e, () => (0, o.c)(c, y)), h[10] = c, h[11] = y, h[12] = m) : m = h[12], h[13] !== d || h[14] !== b || h[15] !== p || h[16] !== g || h[17] !== m ? (f = (0, i.jsx)(d, {
                    className: p,
                    to: g,
                    onClick: m,
                    children: b
                }), h[13] = d, h[14] = b, h[15] = p, h[16] = g, h[17] = m, h[18] = f) : f = h[18], f)
            }
        })
    }),
    Y2Gi: (function(e, t, n) {
        var i = n("EAlS");
        let a = [{
                campaign_id: "hubspot-2026-11",
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "docusign-2026-11",
                plugin_id: "plugin_asdk_app_69fcc3b7582c81918df4ffae40cb7204"
            }, {
                campaign_id: "klaviyo-2026-11",
                plugin_id: "plugin_asdk_app_694421e60cc88191a1e5bb4aa79950e4"
            }],
            r = [...i.d, ...i.f, ...a];
        n.d(t, {}, {
            a: r,
            b: function(e) {
                return r.find(t => t.campaign_id === e)
            },
            c: function(e) {
                return a.some(t => t.campaign_id === e)
            },
            d: a
        })
    }),
    q9zg: (function(e, t, n) {
        var i = n("zPtR"),
            a = n("mfKi"),
            r = n("Q840"),
            l = n("EAlS"),
            o = n("OiCI"),
            s = n("Cslg"),
            u = n("OFP1"),
            d = n("yGJW"),
            c = n("GaA7"),
            p = n("OWtl"),
            g = n("kfGJ"),
            m = n("UR81"),
            f = n("Y2Gi");
        let h = "hubspot-2026-09",
            _ = [...l.f, {
                campaign_id: "codex-stripe",
                plugin_id: "plugin_connector_690ab09fa43c8191bca40280e4563238"
            }, {
                campaign_id: "codex-quickbooks",
                plugin_id: "plugin_asdk_app_697aea3231288191b28a0061066e51bd"
            }, {
                campaign_id: h,
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "codex-hubspot",
                plugin_id: "plugin_asdk_app_697acb8e53d88191bf7a79e62012ae14"
            }, {
                campaign_id: "codex-gusto",
                plugin_id: "plugin_asdk_app_69375d9f172c8191b23d73be4107128a"
            }, ...l.d, {
                campaign_id: "codex-dropbox",
                plugin_id: "plugin_asdk_app_69b31dc2110c8191b8b47dc98fe5a052"
            }, {
                campaign_id: "codex-canva",
                plugin_id: "plugin_connector_68df33b1a2d081918778431a9cfca8ba"
            }],
            v = {
                impression: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_IMPRESSION,
                cancelled: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_CANCELLED,
                declined: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_DECLINED,
                accept_clicked: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPT_CLICKED,
                accept_failed: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPT_FAILED,
                accepted: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_ACCEPTED,
                install_started: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALL_STARTED,
                install_failed: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALL_FAILED,
                installed: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_INSTALLED,
                receipt_shown: a.CodexPluginsIncentiveActionType.CODEX_PLUGINS_INCENTIVE_ACTION_TYPE_RECEIPT_SHOWN
            },
            b = {
                "identity-changed": a.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_IDENTITY_CHANGED,
                unavailable: a.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_UNAVAILABLE,
                "capacity-exhausted": a.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_CAPACITY_EXHAUSTED,
                retryable: a.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_OUTCOME_UNKNOWN,
                "invalid-offer": a.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_INVALID_OFFER,
                "install-failed": a.CodexPluginsIncentiveFailureReason.CODEX_PLUGINS_INCENTIVE_FAILURE_REASON_INSTALL_FAILED
            },
            y = (0, r.h)(p.a, () => Date.now(), e => {
                let {
                    set: t
                } = e, n = setInterval(() => t(Date.now()), 3e4);
                return () => clearInterval(n)
            }),
            I = (0, r.c)(p.a, e => {
                let {
                    get: t
                } = e, n = t(s.f), i = t(s.k), a = t(s.m);
                if (c.a?.pluginIncentives == null || null == n || null == i || a.accountLoading || !(0, m.g)(a.plan) || a.accountId !== n || t(o.d) !== n) return null;
                let {
                    data: r,
                    isLoading: l,
                    isError: d
                } = t(u.m, n);
                return l || d || r?.plugin_incentives_ui_enabled !== !0 ? null : {
                    accountId: n,
                    userId: i
                }
            }),
            C = (0, r.c)(p.a, e => {
                let {
                    get: t
                } = e;
                return c.a?.pluginIncentives == null || null == t(I) ? [] : [...f.d, ..._]
            });

        function E(e, t) {
            return e.get(C).find(e => t.includes(e.plugin_id))
        }
        let P = (0, r.r)(p.a, e => {
                let {
                    get: t,
                    scope: n
                } = e, i = t(I);
                return {
                    queryKey: ["plugin-incentive-claims", i?.userId, i?.accountId],
                    enabled: null != i && c.a?.pluginIncentives != null,
                    staleTime: 3e5,
                    retry: !1,
                    refetchOnWindowFocus: !0,
                    refetchOnReconnect: !0,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == i || c.a?.pluginIncentives == null) return {
                            kind: "identity-changed"
                        };
                        let a = await c.a.pluginIncentives.listClaims({
                            identity: i,
                            hostId: g.a
                        });
                        if (t.throwIfAborted(), !R(n, i)) return {
                            kind: "identity-changed"
                        };
                        if ("retryable" === a.kind) throw Error("Plugin credit claims temporarily unavailable");
                        return a
                    }
                }
            }),
            A = (0, r.q)(p.a, (e, t) => {
                let n, {
                        campaignId: i,
                        hostId: a
                    } = e,
                    {
                        get: r,
                        scope: l
                    } = t,
                    o = r(I),
                    s = r(C).find(e => e.campaign_id === i);
                return {
                    queryKey: ["plugin-incentive", o?.userId, o?.accountId, a, i, s?.plugin_id],
                    enabled: null != o && null != s && c.a?.pluginIncentives != null,
                    staleTime: 3e4,
                    retry: !1,
                    refetchOnMount: e => e.state.isInvalidated,
                    refetchOnWindowFocus: !0,
                    refetchOnReconnect: !0,
                    refetchIntervalInBackground: !1,
                    refetchInterval: e => {
                        let t = e.state.data;
                        if (t?.kind !== "offer") return !1;
                        let i = O(t.offer);
                        return "pending" !== i && "processing" !== i ? (n = void 0, !1) : (null == n && (n = Date.now() + 18e5), !(Date.now() >= n || null != e.state.error && Date.now() - e.state.dataUpdatedAt > 3e5 || null != t.offer.reward_expires_at && Date.parse(t.offer.reward_expires_at) <= Date.now()) && 3e4)
                    },
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == o || c.a?.pluginIncentives == null) return {
                            kind: "identity-changed"
                        };
                        let n = await c.a.pluginIncentives.read({
                            campaignId: i,
                            hostId: a,
                            identity: o
                        });
                        if (t.throwIfAborted(), !R(l, o)) return {
                            kind: "identity-changed"
                        };
                        if ("retryable" === n.kind) throw Error("Plugin credit status temporarily unavailable");
                        if ("offer" === n.kind && n.offer.plugin_id !== s?.plugin_id) throw Error("Plugin credit offer configuration mismatch");
                        if (null != (0, f.b)(i) && "offer" === n.kind && null != n.offer.claim_status && null == n.offer.reward_granted_at) {
                            let e = l.get(P).data;
                            e?.kind === "claims" && e.campaignIds.includes(i) || N(l, i)
                        }
                        return n
                    }
                }
            }),
            w = (0, r.d)(p.a, (e, t) => {
                let {
                    get: n
                } = t, i = n(A, e);
                return e.campaignId !== h ? i : k(i, n(A, {
                    ...e,
                    campaignId: "codex-hubspot"
                }), n(y)).query
            });
        async function T(e, t) {
            let n = e.get(A, t).refetch({
                cancelRefetch: !1
            });
            if (t.campaignId !== h) return {
                campaignId: t.campaignId,
                query: await n
            };
            let i = e.get(A, {
                    ...t,
                    campaignId: "codex-hubspot"
                }).refetch({
                    cancelRefetch: !1,
                    throwOnError: !1
                }),
                a = await n;
            return S(a, Date.now()) ? {
                campaignId: t.campaignId,
                query: a
            } : k(a, await i, Date.now())
        }

        function k(e, t, n) {
            if (S(e, n)) return {
                campaignId: h,
                query: e
            };
            let i = t.data?.kind === "offer" ? t.data.offer : null,
                a = null == i ? null : O(i, n);
            return "pending" === a || "processing" === a || "capacity-exhausted" === a ? {
                campaignId: "codex-hubspot",
                query: t
            } : e.isError || e.data?.kind !== "unavailable" && e.data?.kind !== "capacity-exhausted" ? {
                campaignId: h,
                query: e
            } : {
                campaignId: "codex-hubspot",
                query: t
            }
        }

        function S(e, t) {
            return !e.isError && e.data?.kind === "offer" && "expired" !== O(e.data.offer, t)
        }

        function N(e, t) {
            e.query.setData(P, e => ({
                kind: "claims",
                campaignIds: [...new Set([...e?.kind === "claims" ? e.campaignIds : [], t])]
            })), e.query.invalidate(P)
        }

        function R(e, t) {
            let n = e.get(I);
            return n?.accountId === t.accountId && n?.userId === t.userId
        }

        function M(e) {
            return null != (0, l.b)(e) || null != (0, l.a)(e) || (0, f.c)(e)
        }

        function O(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            return null != e.reward_granted_at ? "paid" : "success_verified" === e.claim_status ? "processing" : "pending" !== e.claim_status ? "available" : null != e.claim_expires_at && Date.parse(e.claim_expires_at) <= t ? "expired" : 0 === e.remaining_redemptions ? "capacity-exhausted" : "pending"
        }
        n.d(t, {}, {
            a: h,
            b: N,
            c: M,
            d: O,
            e: E,
            f: C,
            g: P,
            h: I,
            i: A,
            j: y,
            k: R,
            l: function(e, t, n, r, l) {
                let o = e.get(C).find(e => e.campaign_id === t);
                null != o && R(e, n) && (0, d.a)(e, a.CodexPluginsIncentiveEvent, {
                    legacyStatsigEventName: "codex_plugin_incentive_action",
                    action: v[r],
                    campaignId: t,
                    remotePluginId: o.plugin_id,
                    surface: l?.surface,
                    remainingEffectiveRedemptions: l?.remainingEffectiveRedemptions == null ? void 0 : (0, i.b)(l.remainingEffectiveRedemptions),
                    failureReason: l?.reason == null ? void 0 : b[l.reason]
                })
            },
            m: T,
            n: w,
            o: async function(e, t, n) {
                let i = E(e, n),
                    a = e.get(I);
                if (null == i || null == a) return !1;
                let {
                    query: {
                        data: r,
                        isError: l
                    }
                } = await T(e, {
                    campaignId: i.campaign_id,
                    hostId: t
                });
                if (!R(e, a)) return !0;
                if (l) return !M(i.campaign_id);
                if (r?.kind === "unavailable" || r?.kind === "capacity-exhausted") return !1;
                if (r?.kind !== "offer") return !0;
                let o = O(r.offer);
                return "available" === o || "pending" === o
            }
        })
    }),
    K4kL: (function(e, t, n) {
        var i = n("qKkM"),
            a = n("Q840"),
            r = n("CWeU"),
            l = n("HwRo"),
            o = n("OWtl"),
            s = n("OMIV"),
            u = n("Nwp9"),
            d = n("K0RC");
        let c = (0, u.b)("pending-plugin-installations-v1", {}),
            p = (0, a.d)(o.a, (e, t) => {
                let {
                    accountId: n,
                    hostId: i
                } = e, {
                    get: a
                } = t;
                return new Set(a(c)[(0, d.b)(n, i)] ?? [])
            });
        n.d(t, {}, {
            a: function(e, t, n) {
                e.set(c, (0, i.i)(e => {
                    delete e[(0, d.b)(t, n)]
                }))
            },
            b: p,
            c: function(e, t, n, a) {
                let o = (0, d.b)(e.get(r.a), t);
                (0, d.d)(e, o, n, a);
                let u = (0, l.b)();
                ("boolean" == typeof u ? u : e.get(s.e, u)) && e.set(c, (0, i.i)(e => {
                    let t = e[o] ?? [];
                    for (let i of (e[o] = t, [n, a])) null == i || t.includes(i) || t.push(i)
                }))
            }
        })
    }),
    a0aG: (function(e, t, n) {
        var i = n("bTvG"),
            a = n("lSdY"),
            r = n("iRMi");
        let l = {
            pluginRedirect: {
                source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT,
                chatgpt: {
                    productExperience: a.a.CHATGPT_PRODUCT_EXPERIENCE_WORK,
                    surface: i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT
                }
            },
            ambientSuggestion: {
                source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION
            },
            composer: {
                source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER
            },
            workComposer: {
                source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER,
                chatgpt: {
                    productExperience: a.a.CHATGPT_PRODUCT_EXPERIENCE_WORK,
                    surface: i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_FOOTER
                }
            },
            globalAnnouncement: {
                source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_GLOBAL_ANNOUNCEMENT
            },
            onboarding: {
                source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_ONBOARDING
            },
            onboardingRolePreinstall: {
                source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_ONBOARDING_ROLE_PREINSTALL
            },
            settings: {
                source: r.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
                surface: r.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_SETTINGS
            }
        };
        n.d(t, {}, {
            a: function(e) {
                let {
                    apps: t,
                    pluginInstalled: n
                } = e;
                return 0 === t.length ? i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : 1 === t.length ? t[0].isAccessible ? i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE : n && t.every(e => e.isAccessible) ? i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_INSTALL : i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_OPEN_SETUP
            },
            b: l
        })
    }),
    sFqu: (function(e, t, n) {
        var i = n("bTvG"),
            a = n("iRMi"),
            r = n("o6hs");
        n.d(t, {}, {
            a: function(e, t) {
                let n = (0, r.e)(e, t?.appConnectOptions),
                    l = "plugin_install",
                    o = t?.marketplaceAnalytics?.chatgpt?.surface,
                    s = t?.marketplaceAnalytics?.surface;
                return (t?.origin === "in_conversation_elicitation" || o === i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS || s === a.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_IN_CHAT_SUGGESTIONS ? l = "plugin_suggestion" : o === i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT || s === a.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_PLUGIN_REDIRECT ? l = "plugin_redirect" : o === i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_FOOTER || o === i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_HINTS || s === a.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_COMPOSER ? l = "composer" : o === i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS || s === a.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS ? l = "plugin_details" : o === i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION || s === a.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_AMBIENT_SUGGESTION ? l = "home_suggestion" : o === i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_LIBRARY && (l = "library"), n = {
                    ...n = {
                        connectorId: e,
                        ...n,
                        oauthReferrer: n?.oauthReferrer ?? l
                    },
                    oauthPresentation: "popup"
                }, n?.productSku != null || t?.productContext == null) ? n : {
                    ...n,
                    productSku: "chatgpt" === t.productContext ? "PROMPT_TEXT_AREA" : "CODEX"
                }
            }
        })
    }),
    aVTW: (function(e, t, n) {
        var i = n("S2r0"),
            a = n("oo2L"),
            r = n("o6hs"),
            l = n("hOO0"),
            o = n("OiCI"),
            s = n("rvFo"),
            u = n("HFSu");
        n("OHD8");
        var d = n("sFqu"),
            c = n("loz7");

        function p(e) {
            return "ON_INSTALL" === e.authPolicy && ["plugin_connector_1p_1a69035c238881919c4190932b2df699", "plugin_connector_1p_5925693c1aa88191a4959257e60d0734"].includes(e.remotePluginId ?? e.id)
        }
        n.d(t, {}, {
            a: function(e, t, n) {
                return null != t ? e.apps.find(e => (0, l.a)(e.id) === (0, l.a)(t)) ?? null : p(e.summary) && 2 === e.apps.length && null != n && e.apps.some(e => "disabled-by-admin" === n[e.id]) ? e.apps.find(e => null === n[e.id]) ?? null : 1 === e.apps.length ? e.apps[0] : null
            },
            b: function(e, t, n) {
                let l = n.hostedAccountId ?? e.get(o.d) ?? null,
                    p = (0, d.a)(t, n)?.productSku ?? (0, a.j)();
                return (0, i.a)({
                    queryKey: ["plugin-install-app-link", l, n.installAttemptId, t, p],
                    queryFn: async i => {
                        let {
                            signal: a
                        } = i, s = new AbortController, d = e.watch(e => {
                            let t = e.get(c.o);
                            ((e.get(o.d) ?? null) !== l || "closed" === t.kind || t.installAttemptId !== n.installAttemptId) && s.abort()
                        });
                        try {
                            let e = AbortSignal.any([a, s.signal]);
                            e.throwIfAborted();
                            let n = await u.CodexRequest.safeGet("/aip/connectors/{connector_id}/link", {
                                surface: "connector_setup",
                                parameters: {
                                    path: {
                                        connector_id: t
                                    }
                                },
                                additionalHeaders: {
                                    [r.a]: p
                                },
                                signal: e
                            });
                            return e.throwIfAborted(), n.link
                        } finally {
                            d()
                        }
                    },
                    retry: (e, t) => !1,
                    retryDelay: e => 250 * 2 ** e,
                    staleTime: null == n.installAttemptId ? 0 : s.b.ONE_MINUTE,
                    gcTime: s.b.ONE_MINUTE
                })
            },
            c: p
        })
    }),
    WUyT: (function(e, t, n) {
        var i = n("iRMi"),
            a = n("dSKa"),
            r = n("Zqzr"),
            l = n("ASxG"),
            o = n("o6hs"),
            s = n("JngQ"),
            u = n("xWQV");
        let d = l.object({
                conversationId: l.string().transform(r.Se),
                requestId: l.union([l.string(), l.number()]).transform(r.af),
                response: l.object({
                    action: l.enum(["accept", "decline", "cancel"]),
                    content: l.json().nullable(),
                    _meta: l.json().nullable()
                })
            }),
            c = l.array(l.object({
                category: l.string().nullable(),
                description: l.string().nullable(),
                id: l.string().min(1),
                installUrl: l.string().nullable(),
                name: l.string()
            })),
            p = l.discriminatedUnion("projectKind", [l.object({
                projectId: l.string(),
                projectKind: l.literal("local"),
                rootPaths: l.array(l.string()).optional()
            }), l.object({
                projectId: l.string(),
                projectKind: l.literal("remote")
            })]).nullable(),
            g = l.object({
                kind: l.literal("chatgpt").optional()
            }),
            m = l.object({
                installAttemptId: l.string().optional(),
                pluginId: l.string().optional(),
                childInstall: l.boolean(),
                terminalResult: l.enum(["success", "failure", "cancelled"]).optional()
            }),
            f = l.object({
                requiredAppAnalytics: l.record(l.string(), m),
                suppressSuccessToast: l.boolean(),
                successToast: l.literal("connected"),
                appConnectOptions: o.d,
                skipGoogleOAuthBundle: l.boolean(),
                activeProject: p,
                conversation: l.discriminatedUnion("type", [l.object({
                    type: l.literal("app-server"),
                    conversationId: l.string().transform(r.Se)
                }), l.object({
                    type: l.literal("chatgpt"),
                    conversationId: l.string().min(1)
                })]),
                browserFamily: l.custom(e => "string" == typeof e && (0, a.D)(e)),
                elicitationOwnsConnectorRefresh: l.boolean(),
                hostedAccountId: l.string().min(1),
                pluginRedirect: l.object({
                    search: l.string(),
                    consentAfterOAuth: l.boolean().optional(),
                    hasAcceptedInstallConsent: l.boolean().optional()
                }),
                productContext: l.enum(["chatgpt", "codex"]),
                onboardingMode: l.enum(["work", "codex"]),
                installAttemptId: l.string(),
                requestedCompanionConnectorIds: l.array(l.string()),
                marketplaceAnalytics: l.object({
                    chatgpt: u.a.optional(),
                    source: l.enum(i.CodexPluginSource),
                    suggestionId: l.string().optional(),
                    surface: l.enum(i.CodexPluginMarketplaceSurface),
                    voiceSessionId: l.string().optional()
                }),
                origin: l.enum(["in_conversation_elicitation", "setup_codex", "plugin_creator"]),
                pendingElicitationReply: d,
                postInstallComposerPrefill: l.string(),
                postInstallPluginSuggestion: l.object({
                    accountId: l.string().min(1),
                    userId: l.string().min(1),
                    conversationId: l.string().min(1),
                    messageId: l.string().min(1),
                    pluginId: l.string().min(1)
                }).and(l.discriminatedUnion("kind", [g, s.a])),
                postInstallConnectorSetup: l.object({
                    accountId: l.string().min(1),
                    userId: l.string().min(1),
                    connectorId: l.string().min(1),
                    installationKey: l.string().min(1),
                    options: o.d.optional()
                }),
                postInstallNewConversation: l.object({
                    activeProject: p,
                    codexAppMode: r.Ae,
                    replace: l.boolean(),
                    startInSidebar: l.boolean()
                }).partial(),
                requestId: l.number(),
                requiresAppSetup: l.boolean(),
                postConnectSource: l.enum(["plugin_install", "elicitation", "zero_state"]),
                requestedConnectorId: l.string().min(1),
                source: l.enum(i.CodexPluginSource),
                sourceAttributionId: l.string(),
                sourceSectionId: l.string(),
                telemetry: l.object({
                    categoryId: l.string(),
                    source: l.literal("new_chat_page_suggestions"),
                    suggestionId: l.string(),
                    suggestionLevel: l.enum(i.CodexNewChatSuggestionLevel),
                    surface: l.enum(i.CodexAmbientSuggestionSurface)
                })
            }).partial();
        n.d(t, {}, {
            a: f,
            b: d,
            c: c,
            d: m
        })
    }),
    loz7: (function(e, t, n) {
        var i = n("QosV"),
            a = n("nuXe"),
            r = n.n(a),
            l = n("Q840"),
            o = n("OiCI"),
            s = n("GaA7"),
            u = n("OWtl"),
            d = n("SaEY"),
            c = n("q9zg"),
            p = n("cLdu");
        let g = (0, l.v)(u.a, e => !1),
            m = (0, l.u)(u.a, {
                kind: "closed"
            }, {
                onMount: (e, t) => t.watch(t => {
                    let n = t.get(o.d) ?? void 0;
                    e(e => "closed" !== e.kind && null != e.hostedAccountId && e.hostedAccountId !== n ? R(e) : e)
                })
            }),
            f = (0, l.c)(u.a, e => {
                let {
                    get: t
                } = e;
                return N(t(m))
            }),
            h = 0,
            _ = new Map;

        function v(e, t, n) {
            if (!(0, p.i)(t)) return n;
            let i = e.get(o.d) ?? void 0;
            return {
                ...n,
                hostedAccountId: n.hostedAccountId ?? i
            }
        }

        function b(e, t) {
            e.set(m, k(t, "ON_INSTALL" === t.plugin.plugin.authPolicy || "plugin_creator" === t.origin)), y(e)
        }

        function y(e) {
            let t = e.get(m);
            if ("details" !== t.kind && "installing" !== t.kind || null != t.incentiveDecision && (0, c.k)(e, t.incentiveDecision.identity)) return !1;
            let n = (0, c.e)(e, [t.plugin.plugin.id, t.plugin.plugin.remotePluginId, t.plugin.plugin.shareContext?.remotePluginId]),
                i = e.get(c.h);
            if (null == n || null == i) return !1;
            let a = {
                ...t,
                kind: "reviewIncentive",
                pluginRedirect: "details" === t.kind && null != t.pluginRedirect ? {
                    ...t.pluginRedirect,
                    hasAcceptedInstallConsent: !0
                } : t.pluginRedirect,
                incentiveCampaignId: n.campaign_id,
                incentiveChecking: !0,
                incentiveIdentity: i
            };
            return e.set(m, a), I(e, a), !0
        }
        async function I(e, t) {
            let {
                campaignId: n,
                query: {
                    data: i,
                    isError: a
                }
            } = await (0, c.m)(e, {
                campaignId: t.incentiveCampaignId,
                hostId: t.hostId
            });
            if (e.get(m) !== t) return;
            let r = n === t.incentiveCampaignId ? t : {
                ...t,
                incentiveCampaignId: n
            };
            if (r !== t && e.set(m, r), a && t.incentiveChecking && (0, c.c)(n) && (0, c.k)(e, t.incentiveIdentity)) return void C(e, r, !1);
            if (!a && (0, c.k)(e, t.incentiveIdentity)) {
                if (i?.kind === "unavailable" || i?.kind === "capacity-exhausted") return void C(e, r, !1);
                if (i?.kind === "offer" && (null != i.offer.claim_status || null != i.offer.reward_granted_at)) {
                    if (await e.query.cancel(c.g), e.get(m) !== r || !(0, c.k)(e, t.incentiveIdentity)) return;
                    (0, c.b)(e, r.incentiveCampaignId);
                    let n = (0, c.d)(i.offer);
                    C(e, r, "expired" !== n && "capacity-exhausted" !== n);
                    return
                }
            }
            e.set(m, {
                ...r,
                incentiveChecking: !1
            })
        }

        function C(e, t, n) {
            e.get(m) !== t || (0, c.k)(e, t.incentiveIdentity) && e.set(m, k({
                ...t,
                incentiveDecision: {
                    campaignId: t.incentiveCampaignId,
                    identity: t.incentiveIdentity,
                    accepted: n
                }
            }, "ON_INSTALL" === t.plugin.plugin.authPolicy || "plugin_creator" === t.origin))
        }

        function E(e, t) {
            return "closed" !== e.kind && null != t && e.requestId === t
        }

        function P(e, t) {
            let {
                apps: n,
                browserExtensions: i,
                connectingAppId: a,
                hostId: r,
                options: l,
                plugin: o,
                installedInThisFlow: s
            } = t, u = !1;
            return e.set(m, e => {
                if ("closed" === e.kind || "loadingPlugin" === e.kind || e.hostId !== r || e.plugin.plugin.id !== o.plugin.id || !E(e, l?.requestId ?? e.requestId)) return e;
                let t = n.map(t => {
                        let n = "pending";
                        return "connectAppBeforeInstall" === e.kind && e.app.id === t.id ? n = e.status : "installing" === e.kind && e.connectedAppId === t.id && (n = "connected"), {
                            app: t,
                            status: n
                        }
                    }),
                    d = t.find(e => e.app.id === a),
                    c = l?.pendingElicitationReply != null && e.pendingElicitationReply === l.pendingElicitationReply ? e.pendingElicitationReplyFailureCount : void 0;
                return u = !0, null == d ? {
                    ...e,
                    ...l,
                    kind: "needsApps",
                    installedInThisFlow: s,
                    hostId: r,
                    pendingElicitationReplyFailureCount: c,
                    plugin: o,
                    requiredApps: t,
                    requiredBrowserExtensions: i
                } : {
                    ...e,
                    ...l,
                    kind: "connectApp",
                    installedInThisFlow: s,
                    hostId: r,
                    pendingElicitationReplyFailureCount: c,
                    plugin: o,
                    app: d.app,
                    requiredApps: t,
                    requiredBrowserExtensions: i
                }
            }), u
        }

        function A(e) {
            return "connectAppBeforeInstall" === e.kind ? R(e) : e
        }

        function w(e) {
            return "connectApp" !== e.kind ? e : 1 === e.requiredApps.length && 0 === e.requiredBrowserExtensions.length && e.requiredApps[0]?.status !== "connected" && e.requiredApps[0]?.status !== "waitingForCallback" ? R(e) : {
                ...e,
                kind: "needsApps"
            }
        }

        function T(e, t) {
            let {
                appId: n,
                requestedCompanionConnectorIds: i,
                status: a
            } = t;
            e.set(m, e => {
                if ("closed" === e.kind) return e;
                let t = "waitingForCallback" === a && null != i ? r()([...e.requestedCompanionConnectorIds ?? [], ...i]) : void 0;
                return "connectAppBeforeInstall" === e.kind ? e.app.id !== n ? e : {
                    ...e,
                    ...null == t ? {} : {
                        requestedCompanionConnectorIds: t
                    },
                    status: a
                } : "needsApps" !== e.kind && "connectApp" !== e.kind ? e : {
                    ...e,
                    ...null == t ? {} : {
                        requestedCompanionConnectorIds: t
                    },
                    requiredApps: e.requiredApps.map(e => e.app.id === n ? {
                        ...e,
                        status: a
                    } : e)
                }
            })
        }

        function k(e, t) {
            return {
                ...e,
                kind: "installing",
                installStarted: !1,
                phase: t ? "loading" : "installing",
                progressPercent: 0,
                requiresAppPreparation: t
            }
        }

        function S(e) {
            return ("needsApps" === e.kind || "connectApp" === e.kind) && e.requiredApps.length > 0 && e.requiredApps.every(e => "connected" === e.status) && 0 === e.requiredBrowserExtensions.length
        }

        function N(e) {
            return !(S(e) || "closed" !== e.kind && null != e.pendingElicitationReply || "loadingPlugin" === e.kind || "confirmConnect" === e.kind || "reviewIncentive" === e.kind || "installing" === e.kind || "preparingApp" === e.kind || "connectAppBeforeInstall" === e.kind && ("automatic" !== e.connectMode || "waitingForCallback" !== e.status))
        }

        function R(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cancelled";
            if ("closed" !== e.kind && null != e.requestId) {
                let n = _.get(e.requestId);
                _.delete(e.requestId), "failed" === t ? n?.onError?.() : n?.onCancel?.()
            }
            return {
                kind: "closed"
            }
        }

        function M(e) {
            "closed" !== e.kind && null != e.requestId && _.delete(e.requestId)
        }
        n.d(t, {}, {
            a: f,
            b: async function(e, t, n) {
                let i, a = n.incentiveDecision;
                if (null == a) return !0;
                if ((0, c.k)(e, a.identity)) {
                    if (a.accepted) {
                        let e = await s.a.pluginIncentives?.checkIdentity({
                            campaignId: a.campaignId,
                            hostId: t,
                            identity: a.identity
                        }).catch(() => "retryable");
                        "matched" !== e && (i = e ?? "retryable")
                    }
                } else i = "identity-changed";
                if ((0, c.k)(e, a.identity) || (i = "identity-changed"), null == i) return !0;
                let r = e.get(m);
                return "closed" !== r.kind && "loadingPlugin" !== r.kind && r.incentiveDecision === a && r.requestId === n.requestId && r.hostId === t && (e.set(m, {
                    ...r,
                    kind: "reviewIncentive",
                    incentiveCampaignId: a.campaignId,
                    incentiveChecking: !1,
                    incentiveIdentity: a.identity,
                    incentiveFailure: i
                }), !1)
            },
            c: function(e, t) {
                if (null == t) throw Error("Cannot complete an unregistered plugin installation");
                return !e.get(g, t) && (e.set(g, t, !0), !0)
            },
            d: function(e, t) {
                let {
                    hostId: n,
                    requestId: i
                } = t, a = !1;
                return e.set(m, e => "loadingPlugin" !== e.kind || e.hostId !== n || e.requestId !== i ? e : (a = !0, R(e, "failed"))), a
            },
            e: R,
            f: function(e, t) {
                let n = e.get(m);
                if ("confirmConnect" === n.kind && n.requestId === t) {
                    if ((0, p.i)(n.hostId) && e.get(o.d) !== n.hostedAccountId) return void e.set(m, R(n));
                    b(e, n)
                }
            },
            g: C,
            h: function(e) {
                return "loadingPlugin" === e.kind ? e : "installing" === e.kind ? {
                    hostId: e.hostId,
                    installAttemptId: e.installAttemptId,
                    kind: "installing",
                    phase: e.phase,
                    plugin: e.plugin,
                    progressPercent: e.progressPercent,
                    sourceSectionId: e.sourceSectionId
                } : ("needsApps" === e.kind || "connectApp" === e.kind) && (S(e) || !0 === e.pendingElicitationReplyClaimed) ? {
                    hostId: e.hostId,
                    installAttemptId: e.installAttemptId,
                    kind: "installing",
                    phase: "loading",
                    plugin: e.plugin,
                    progressPercent: 100,
                    sourceSectionId: e.sourceSectionId
                } : "reviewIncentive" === e.kind && e.incentiveChecking || "preparingApp" === e.kind || "connectAppBeforeInstall" === e.kind && "automatic" === e.connectMode && "waitingForCallback" !== e.status ? {
                    hostId: e.hostId,
                    installAttemptId: e.installAttemptId,
                    kind: "installing",
                    phase: "loading",
                    plugin: e.plugin,
                    progressPercent: 0,
                    sourceSectionId: e.sourceSectionId
                } : null
            },
            i: function(e) {
                return "closed" === e.kind ? null : e.hostId
            },
            j: T,
            k: E,
            l: function(e, t) {
                let n = null == e ? void 0 : _.get(e);
                n?.onAppConnected == null || n.connectedAppIds?.has(t) || (n.connectedAppIds = n.connectedAppIds ?? new Set, n.connectedAppIds.add(t), n.onAppConnected(t))
            },
            m: function(e, t) {
                let {
                    hostId: n,
                    onAppConnected: i,
                    onCancel: a,
                    onError: r,
                    onSuccess: l,
                    options: o = {},
                    plugin: s
                } = t, u = e.get(m);
                if (!N(u)) return null;
                M(u);
                let d = v(e, n, o),
                    c = h += 1;
                return (null != i || null != a || null != r || null != l) && _.set(c, {
                    onAppConnected: i,
                    onCancel: a,
                    onError: r,
                    onSuccess: l
                }), e.set(m, {
                    ...d,
                    hostId: n,
                    kind: "loadingPlugin",
                    phase: "loading",
                    plugin: {
                        displayName: s.displayName,
                        plugin: {
                            id: s.remotePluginId,
                            remotePluginId: s.remotePluginId
                        }
                    },
                    progressPercent: 0,
                    requestId: c,
                    source: d.source ?? d.marketplaceAnalytics?.source
                }), c
            },
            n: function(e, t) {
                let {
                    hostId: n,
                    loadingRequestId: i,
                    mode: a,
                    onAppConnected: r,
                    onCancel: l,
                    onError: o,
                    onSuccess: s,
                    options: u = {},
                    plugin: c
                } = t, p = e.get(m);
                if ("loadingPlugin" === p.kind) {
                    if ("install" !== a || p.hostId !== n || p.requestId !== i) return !1
                } else if (!N(p)) return !1;
                M(p);
                let g = v(e, n, u);
                h += 1, (null != r || null != l || null != o || null != s) && _.set(h, {
                    onAppConnected: r,
                    onCancel: l,
                    onError: o,
                    onSuccess: s
                });
                let f = {
                    ...g,
                    hostId: n,
                    installAttemptId: "install" === a ? g.installAttemptId ?? g.appConnectOptions?.installAttemptId ?? crypto.randomUUID() : g.installAttemptId,
                    plugin: c,
                    requestId: h,
                    source: g.source ?? g.marketplaceAnalytics?.source
                };
                return "details" === a ? e.set(m, {
                    ...f,
                    kind: "details"
                }) : u.offersPluginDetailsBeforeConnect && !1 === c.plugin.mustShowInstallationInterstitial && null == (0, d.a)(c.plugin) ? e.set(m, {
                    ...f,
                    kind: "confirmConnect"
                }) : b(e, f), !0
            },
            o: m,
            p: I,
            q: y,
            r: async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (null == e) return;
                let n = _.get(e)?.onSuccess;
                _.delete(e), await n?.(t)
            },
            s: P,
            t: function() {
                let e, t, n, a, r, o, s, d, c, p, g, f, h, _, v, b, y, I, C, S = (0, i.c)(59),
                    N = (0, l.y)(u.a),
                    M = (0, l.z)(m);
                S[0] !== N ? (e = e => {
                    N.set(m, e)
                }, S[0] = N, S[1] = e) : e = S[1];
                let O = e;
                S[2] !== N ? (t = e => (function(e, t) {
                    let {
                        hostId: n,
                        pluginId: i
                    } = t, a = e.get(m);
                    return ("installing" === a.kind || "connectAppBeforeInstall" === a.kind) && a.hostId === n && a.plugin.plugin.id === i && !a.installStarted && (e.set(m, {
                        ...a,
                        installStarted: !0
                    }), !0)
                })(N, e), S[2] = N, S[3] = t) : t = S[3];
                let L = t;
                S[4] !== N || S[5] !== M ? (n = () => "closed" !== M.kind && E(N.get(m), M.requestId), S[4] = N, S[5] = M, S[6] = n) : n = S[6];
                let D = n;
                S[7] !== D || S[8] !== N ? (a = e => {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e, i = N.get(m);
                    return D() && "closed" !== i.kind && "loadingPlugin" !== i.kind && i.hostId === t && i.plugin.plugin.id === n && null != i.pendingElicitationReply ? !0 === i.pendingElicitationReplyClaimed || (i.pendingElicitationReplyFailureCount ?? 0) >= 2 ? {
                        kind: "already-claimed"
                    } : (N.set(m, {
                        ...i,
                        pendingElicitationReplyClaimed: !0
                    }), {
                        kind: "claimed",
                        reply: i.pendingElicitationReply
                    }) : {
                        kind: "not-pending"
                    }
                }, S[7] = D, S[8] = N, S[9] = a) : a = S[9];
                let x = a;
                S[10] !== N ? (r = e => {
                    let {
                        completed: t,
                        hostId: n,
                        pluginId: i,
                        reply: a
                    } = e, r = N.get(m);
                    return "closed" !== r.kind && "loadingPlugin" !== r.kind && r.hostId === n && r.plugin.plugin.id === i && r.pendingElicitationReply === a && !0 === r.pendingElicitationReplyClaimed && (N.set(m, {
                        ...r,
                        pendingElicitationReply: t ? void 0 : r.pendingElicitationReply,
                        pendingElicitationReplyClaimed: !!t && void 0,
                        pendingElicitationReplyFailureCount: t ? void 0 : (r.pendingElicitationReplyFailureCount ?? 0) + 1
                    }), !0)
                }, S[10] = N, S[11] = r) : r = S[11];
                let U = r;
                S[12] !== O ? (o = (e, t, n) => {
                    let i = void 0 === n ? {} : n,
                        a = !1;
                    return O(n => "installing" !== n.kind && ("details" !== n.kind || null == n.pluginRedirect) || "installing" === n.kind && n.installStarted || n.hostId !== e || n.plugin.plugin.id !== t.plugin.id ? n : (a = !0, {
                        ...n,
                        ...i,
                        kind: "preparingApp",
                        hostId: e,
                        plugin: t
                    })), a
                }, S[12] = O, S[13] = o) : o = S[13];
                let G = o;
                S[14] !== O ? (s = e => {
                    let {
                        app: t,
                        authTypeOverride: n,
                        connectMode: i,
                        hostId: a,
                        options: r,
                        plugin: l,
                        status: o
                    } = e, s = void 0 === i ? "interactive" : i, u = void 0 === o ? "pending" : o;
                    O(e => "preparingApp" !== e.kind && "connectAppBeforeInstall" !== e.kind || e.hostId !== a || e.plugin.plugin.id !== l.plugin.id || "connectAppBeforeInstall" === e.kind && e.app.id !== t.id ? e : {
                        ...e,
                        ...r,
                        authTypeOverride: n,
                        kind: "connectAppBeforeInstall",
                        app: t,
                        connectMode: s,
                        hostId: a,
                        installStarted: "connectAppBeforeInstall" === e.kind && e.installStarted,
                        plugin: l,
                        status: u
                    })
                }, S[14] = O, S[15] = s) : s = S[15];
                let q = s;
                S[16] !== O ? (d = e => {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e;
                    O(e => "preparingApp" === e.kind && e.hostId === t && e.plugin.plugin.id === n ? R(e, "failed") : e)
                }, S[16] = O, S[17] = d) : d = S[17];
                let F = d;
                S[18] !== O ? (c = e => {
                    let {
                        hostId: t,
                        pluginId: n
                    } = e;
                    O(e => "preparingApp" === e.kind && e.hostId === t && e.plugin.plugin.id === n ? k(e, !1) : e)
                }, S[18] = O, S[19] = c) : c = S[19];
                let K = c;
                S[20] !== N ? (p = e => {
                    let {
                        appId: t,
                        hostId: n,
                        pluginId: i
                    } = e, a = N.get(m);
                    return "connectAppBeforeInstall" === a.kind && a.app.id === t && a.hostId === n && a.plugin.plugin.id === i && (N.set(m, {
                        ...k(a, !1),
                        connectedAppId: t,
                        installStarted: a.installStarted
                    }), !0)
                }, S[20] = N, S[21] = p) : p = S[21];
                let H = p;
                S[22] !== O ? (g = (e, t, n) => {
                    O({
                        ...void 0 === n ? {} : n,
                        kind: "details",
                        hostId: e,
                        plugin: t
                    })
                }, S[22] = O, S[23] = g) : g = S[23];
                let B = g;
                S[24] !== D || S[25] !== O ? (f = e => {
                    let t = void 0 === e ? "cancelled" : e;
                    return !!D() && (O(e => R(e, t)), !0)
                }, S[24] = D, S[25] = O, S[26] = f) : f = S[26];
                let j = f;
                S[27] !== D || S[28] !== O ? (h = e => {
                    D() && O(t => "installing" === t.kind ? {
                        ...t,
                        progressPercent: e
                    } : t)
                }, S[27] = D, S[28] = O, S[29] = h) : h = S[29];
                let z = h;
                S[30] !== O ? (_ = e => {
                    O(t => {
                        if ("needsApps" !== t.kind) return t;
                        let n = t.requiredApps.find(t => t.app.id === e);
                        return null == n ? t : {
                            ...t,
                            kind: "connectApp",
                            app: n.app
                        }
                    })
                }, S[30] = O, S[31] = _) : _ = S[31];
                let W = _;
                S[32] !== O ? (v = () => {
                    O(w)
                }, S[32] = O, S[33] = v) : v = S[33];
                let V = v;
                S[34] !== O ? (b = () => {
                    O(A)
                }, S[34] = O, S[35] = b) : b = S[35];
                let Y = b;
                return S[36] !== N ? (y = e => T(N, e), S[36] = N, S[37] = y) : y = S[37], S[38] !== D || S[39] !== N ? (I = e => !!D() && P(N, e), S[38] = D, S[39] = N, S[40] = I) : I = S[40], S[41] !== F || S[42] !== x || S[43] !== L || S[44] !== j || S[45] !== V || S[46] !== Y || S[47] !== q || S[48] !== B || S[49] !== W || S[50] !== G || S[51] !== H || S[52] !== M || S[53] !== z || S[54] !== U || S[55] !== K || S[56] !== y || S[57] !== I ? (C = {
                    cancelPluginInstallAppPreparation: F,
                    claimPluginInstall: L,
                    claimPendingElicitationReply: x,
                    closePluginInstallAppConnectBeforeInstall: Y,
                    closePluginInstallAppConnect: V,
                    closePluginInstall: j,
                    markRequiredAppStatus: y,
                    openPluginInstallDetails: B,
                    openPluginInstallAppConnectBeforeInstall: q,
                    openRequiredAppConnect: W,
                    preparePluginInstallAppConnect: G,
                    session: M,
                    setPluginInstallProgress: z,
                    setPluginInstallNeedsApps: I,
                    settlePendingElicitationReply: U,
                    startPluginInstallAfterAppPreparation: K,
                    resumePluginInstallAfterAppConnect: H
                }, S[41] = F, S[42] = x, S[43] = L, S[44] = j, S[45] = V, S[46] = Y, S[47] = q, S[48] = B, S[49] = W, S[50] = G, S[51] = H, S[52] = M, S[53] = z, S[54] = U, S[55] = K, S[56] = y, S[57] = I, S[58] = C) : C = S[58], C
            }
        })
    }),
    TupU: (function(e, t, n) {
        n.d(t, {
            a: () => S,
            b: () => k
        });
        var i = n("ABep"),
            a = n("QosV"),
            r = n("irkb"),
            l = n("Q840"),
            o = n("zd8w"),
            s = n("yGJ5"),
            u = n("r4w4"),
            d = n("Bbed"),
            c = n("OWtl"),
            p = n("SGsN"),
            g = n("gPv1"),
            m = n("svjy"),
            f = n("vLsY"),
            h = n("GaA7"),
            _ = n("kfGJ"),
            v = n("soaw"),
            b = n("q9zg");
        let y = (0, l.u)(c.a, () => new Set),
            I = (0, l.u)(c.a, () => new Set);

        function C() {
            let e, t, n = (0, a.c)(10),
                r = (0, l.z)(b.h),
                o = (0, l.z)(b.f),
                {
                    data: s
                } = (0, l.z)(b.g);
            if (null == r || s?.kind !== "claims") return null;
            if (n[0] !== o || n[1] !== s || n[2] !== r) {
                let t, a;
                n[4] !== s ? (t = e => s.campaignIds.includes(e.campaign_id), n[4] = s, n[5] = t) : t = n[5], n[6] !== r ? (a = e => (0, i.jsx)(E, {
                    campaignId: e.campaign_id,
                    identity: r
                }, JSON.stringify([r.userId, r.accountId, e.campaign_id])), n[6] = r, n[7] = a) : a = n[7], e = o.filter(t).map(a), n[0] = o, n[1] = s, n[2] = r, n[3] = e
            } else e = n[3];
            return n[8] !== e ? (t = (0, i.jsx)(i.Fragment, {
                children: e
            }), n[8] = e, n[9] = t) : t = n[9], t
        }

        function E(e) {
            let t, n, i, r, s, u, d = (0, a.c)(21),
                {
                    campaignId: C,
                    identity: E
                } = e,
                A = (0, l.y)(c.a),
                w = (0, v.a)();
            d[0] !== C ? (t = {
                campaignId: C,
                hostId: _.a
            }, d[0] = C, d[1] = t) : t = d[1];
            let {
                data: T,
                dataUpdatedAt: k,
                isError: S,
                isFetching: N,
                isStale: R
            } = (0, l.x)(b.i, t), M = (0, o.useRef)(null), O = (0, o.useRef)(void 0);
            d[2] !== C || d[3] !== T || d[4] !== E || d[5] !== S || d[6] !== N || d[7] !== w || d[8] !== R || d[9] !== A ? (n = async () => {
                if (T?.kind !== "offer" || S || N || R || !(0, b.k)(A, E)) return;
                let e = T.offer,
                    t = M.current;
                if (M.current = (0, b.d)(e), "success_verified" === e.claim_status || null != e.reward_granted_at) {
                    let t = JSON.stringify([E.userId, E.accountId, C, e.claim_expires_at]),
                        n = A.get(I);
                    n.has(t) || (A.set(I, new Set(n).add(t)), A.queryClient.invalidateQueries({
                        queryKey: ["plugin-incentive", E.userId],
                        predicate: e => {
                            let {
                                queryKey: t
                            } = e;
                            return t[2] !== E.accountId || t[3] !== _.a || t[4] !== C
                        }
                    }), (0, f.a)(["plugin-incentive", E.userId]))
                }
                if (null == e.reward_granted_at) return;
                let n = JSON.stringify([E.userId, E.accountId, C, e.reward_granted_at]),
                    i = A.get(y);
                i.has(n) || (A.set(y, new Set(i).add(n)), "pending" !== t && "processing" !== t || null != e.reward_expires_at && Date.parse(e.reward_expires_at) <= Date.now() || (A.query.invalidate(g.b), await Promise.resolve(h.a?.pluginIncentives?.acknowledgeReceipt(n)).catch(P) && w() && (0, b.k)(A, E) && ((0, b.l)(A, C, E, "receipt_shown"), O.current = A.get(p.f).success(A.get(m.a).formatMessage({
                    id: "plugins.incentive.workspaceCreditsAdded",
                    defaultMessage: "{credits, plural, one {# credit} other {# credits}} added to your workspace"
                }, {
                    credits: e.reward_credits
                }), {
                    id: n,
                    position: "top-center"
                }))))
            }, d[2] = C, d[3] = T, d[4] = E, d[5] = S, d[6] = N, d[7] = w, d[8] = R, d[9] = A, d[10] = n) : n = d[10];
            let L = (0, o.useEffectEvent)(n);
            return d[11] !== L ? (i = () => {
                let e = !0;
                return queueMicrotask(() => {
                    e && L()
                }), () => {
                    e = !1
                }
            }, d[11] = L, d[12] = i) : i = d[12], d[13] !== T || d[14] !== k || d[15] !== S || d[16] !== N || d[17] !== R ? (r = [T, k, S, N, R], d[13] = T, d[14] = k, d[15] = S, d[16] = N, d[17] = R, d[18] = r) : r = d[18], (0, o.useEffect)(i, r), d[19] === Symbol.for("react.memo_cache_sentinel") ? (s = () => () => O.current?.close(), u = [], d[19] = s, d[20] = u) : (s = d[19], u = d[20]), (0, o.useEffect)(s, u), null
        }

        function P() {
            return !1
        }
        var A = n("loz7"),
            w = n("Rbbe");
        let T = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(249533), n.e(804025)]).then(n.bind(n, "sz13"))).PluginInstallationContent);

        function k() {
            return T.prefetch()
        }

        function S() {
            let e, t, n, d, p, g, m, f = (0, a.c)(15),
                h = (0, l.y)(c.a),
                _ = (0, r.c)(),
                {
                    clearPendingAppConnect: v
                } = (0, s.g)(),
                b = (0, o.useEffectEvent)(v),
                y = (0, l.z)(A.o),
                [I, E] = (0, o.useState)(!1);
            return I || "closed" === y.kind || E(!0), f[0] !== b || f[1] !== _ || f[2] !== h ? (e = () => (0, w.f)(h, _, b), f[0] = b, f[1] = _, f[2] = h, f[3] = e) : e = f[3], f[4] !== _ || f[5] !== h ? (t = [_, h], f[4] = _, f[5] = h, f[6] = t) : t = f[6], (0, o.useEffect)(e, t), f[7] !== h ? (n = () => (0, u.a)(h), d = [h], f[7] = h, f[8] = n, f[9] = d) : (n = f[8], d = f[9]), (0, o.useEffect)(n, d), f[10] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, i.jsx)(C, {}), f[10] = p) : p = f[10], f[11] !== I ? (g = I ? (0, i.jsx)(T, {}) : null, f[11] = I, f[12] = g) : g = f[12], f[13] !== g ? (m = (0, i.jsxs)(i.Fragment, {
                children: [p, g]
            }), f[13] = g, f[14] = m) : m = f[14], m
        }
    }),
    Rbbe: (function(e, t, n) {
        var i = n("HJEB"),
            a = n("I3F6"),
            r = n("Haiv"),
            l = n("SqAt"),
            o = n("Dgwo"),
            s = n("HUHI"),
            u = n("OiCI"),
            d = n("SGsN"),
            c = n("svjy"),
            p = n("WFY2"),
            g = n("kpIY"),
            m = n("Nwp9"),
            f = n("ugfi"),
            h = n("cLdu"),
            _ = n("ueue"),
            v = n("loz7"),
            b = n("TZ9K");
        let y = "plugin-oauth-install-reconciliation-by-state-v1",
            I = {},
            C = (0, m.b)(y, I),
            E = new Map,
            P = new Set;
        async function A(e, t, n) {
            let i = e.get(C)[t];
            if (null == i || i.rolledBack) return;
            if (!N(e, i)) return void w(e, t);
            k(t);
            let a = {
                ...i,
                oauthFailed: !0
            };
            e.set(C, e => ({
                ...e,
                [t]: a
            })), a.installed && await S(e, a, n)
        }

        function w(e, t) {
            k(t), e.set(C, e => {
                if (!(t in e)) return e;
                let {
                    [t]: n, ...i
                } = e;
                return i
            })
        }

        function T(e, t, n) {
            k(t.oauthState), E.set(t.oauthState, setTimeout(() => {
                E.delete(t.oauthState), (async function(e, t, n) {
                    let r = e.get(C)[t];
                    if (null == r || r.oauthFailed || r.rolledBack) return;
                    if (!N(e, r)) return void w(e, t);
                    let l = !1;
                    try {
                        if (null != r.productSku) {
                            let e = await (0, b.a)({
                                requiresAppSetup: !0,
                                requestedConnectorId: r.appId,
                                appConnectOptions: {
                                    connectorId: r.appId,
                                    productSku: r.productSku
                                }
                            });
                            l = "ready" === e.kind
                        } else {
                            let {
                                apps: t
                            } = await (0, o.b)(e, (0, s.h)(r.hostId)).sendRequest("app/installed", {
                                forceRefresh: !0
                            });
                            l = t.some(e => e.id === r.appId && e.callable)
                        }
                    } catch (e) {
                        p.a.error("Failed to verify an expired plugin OAuth installation", {
                            safe: {
                                pluginId: r.pluginId
                            },
                            sensitive: {
                                error: e
                            }
                        })
                    }
                    if (!N(e, r) || l) return void w(e, t);
                    let u = e.get(C)[t];
                    if (null == u || u.oauthFailed || u.rolledBack) return;
                    let g = e.get(v.o);
                    "closed" !== g.kind && "loadingPlugin" !== g.kind && g.hostId === u.hostId && g.plugin.plugin.id === u.pluginId && g.requestId === u.requestId && e.set(v.o, (0, v.e)(g, "failed")), e.get(d.f).danger(e.get(c.a).formatMessage({
                        id: "plugins.install.oauthTimedOutWithPluginName",
                        defaultMessage: "Installation of {pluginName} timed out. Please try again"
                    }, {
                        pluginName: u.pluginDisplayName ?? (0, i.a)(u.pluginName)
                    }), {
                        errorAnalytics: {
                            toastId: "plugins.install.oauthTimedOut"
                        }
                    });
                    try {
                        await A(e, t, n)
                    } finally {
                        if (null != u.pendingElicitationReply && N(e, u)) try {
                            await (0, o.b)(e, u.hostId).replyWithMcpServerElicitationResponse(u.pendingElicitationReply.conversationId, u.pendingElicitationReply.requestId, (0, a.b)("decline"))
                        } catch (e) {
                            p.a.error("Failed to decline an expired plugin install elicitation", {
                                safe: {
                                    pluginId: u.pluginId
                                },
                                sensitive: {
                                    error: e
                                }
                            })
                        }
                    }
                })(e, t.oauthState, n).catch(e => {
                    p.a.error("Failed to reconcile an expired plugin OAuth install", {
                        safe: {
                            pluginId: t.pluginId
                        },
                        sensitive: {
                            error: e
                        }
                    })
                })
            }, Math.max(0, t.expiresAtMs - Date.now())))
        }

        function k(e) {
            let t = E.get(e);
            null != t && (clearTimeout(t), E.delete(e))
        }
        async function S(e, t, n) {
            if (P.has(t.oauthState)) return;
            let i = e.get(C)[t.oauthState];
            if (null == i || i.requestId !== t.requestId) return;
            if (!N(e, t)) return void w(e, t.oauthState);
            let a = e.get(v.o);
            if ("closed" !== a.kind && "loadingPlugin" !== a.kind && a.hostId === t.hostId && a.plugin.plugin.id === t.pluginId && a.requestId !== t.requestId) return void w(e, t.oauthState);
            P.add(t.oauthState);
            try {
                if (await (0, f.b)({
                        scope: e,
                        disableBundledAutoInstall: !1,
                        hostId: t.hostId,
                        marketplaceName: t.marketplaceName,
                        pluginId: t.pluginId,
                        pluginName: t.pluginName,
                        queryClient: n,
                        requestPluginId: t.requestPluginId
                    }), !N(e, t)) return void w(e, t.oauthState);
                (0, h.i)(t.hostId) || (0, _.u)({
                    enabled: !1,
                    hostId: t.hostId,
                    installed: !1,
                    pluginId: t.pluginId,
                    queryClient: n
                }), e.set(C, e => ({
                    ...e,
                    [t.oauthState]: {
                        ...t,
                        oauthFailed: !0,
                        rolledBack: !0
                    }
                }))
            } finally {
                P.delete(t.oauthState);
                let n = e.get(v.o);
                "closed" !== n.kind && "loadingPlugin" !== n.kind && n.hostId === t.hostId && n.plugin.plugin.id === t.pluginId && n.requestId === t.requestId && e.set(v.o, (0, v.e)(n, "failed"))
            }
        }

        function N(e, t) {
            let n = e.get(u.d) ?? void 0;
            return !(0, h.i)(t.hostId) || null != t.accountId && t.accountId === n
        }
        n.d(t, {}, {
            a: function(e, t) {
                let {
                    appId: n,
                    hostId: i,
                    hostedAccountId: a,
                    installAttemptId: o,
                    oauthState: s,
                    pendingElicitationReply: u,
                    plugin: d,
                    productSku: c,
                    queryClient: p,
                    requestId: g
                } = t;
                if (null == g || "ON_INSTALL" !== d.plugin.authPolicy || d.plugin.installed) return;
                let m = {
                    accountId: (0, h.i)(i) ? a : void 0,
                    appId: n,
                    expiresAtMs: Date.now() + 6e5,
                    hostId: i,
                    installAttemptId: o,
                    installed: !1,
                    marketplaceName: d.marketplaceName,
                    oauthFailed: !1,
                    oauthState: s,
                    pendingElicitationReply: u,
                    pluginDisplayName: (0, r.a)(d),
                    pluginId: d.plugin.id,
                    pluginName: d.plugin.name,
                    productSku: c,
                    requestId: g,
                    requestPluginId: (0, l.b)(d),
                    rolledBack: !1
                };
                e.set(C, e => ({
                    ...Object.fromEntries(Object.entries(e).filter(e => {
                        let [t, n] = e;
                        return n.hostId !== i || n.pluginId !== d.plugin.id || (k(t), !1)
                    })),
                    [s]: m
                })), T(e, m, p)
            },
            b: A,
            c: w,
            d: function(e, t) {
                let n = e.get(C)[t];
                return n?.oauthFailed === !0 || n?.rolledBack === !0
            },
            e: async function(e, t, n) {
                let i = e.get(C)[t];
                if (null == i) return !0;
                if (!N(e, i)) return w(e, t), !1;
                if (i.rolledBack) return !1;
                let a = {
                    ...i,
                    installed: !0
                };
                return e.set(C, e => ({
                    ...e,
                    [t]: a
                })), !a.oauthFailed || (await S(e, a, n), !1)
            },
            f: function(e, t, n) {
                let i = () => {
                    let i = Date.now(),
                        a = (0, g.k)(y, I),
                        r = {};
                    for (let [t, l] of Object.entries({
                            ...a,
                            ...e.get(C)
                        })) l.rolledBack && l.expiresAtMs + 864e5 <= i ? n({
                        appId: l.appId,
                        hostId: l.hostId,
                        pluginInstallOAuthState: t
                    }) : r[t] = l;
                    for (let n of (e.set(C, r), Object.values(e.get(C)))) n.oauthFailed || n.rolledBack || T(e, n, t)
                };
                return i(), window.addEventListener("focus", i), document.addEventListener("visibilitychange", i), () => {
                    for (let e of (window.removeEventListener("focus", i), document.removeEventListener("visibilitychange", i), E.keys())) k(e)
                }
            }
        })
    }),
    JfPH: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("hOO0"),
            r = n("ygu7"),
            l = n("EEop"),
            o = n("cLdu"),
            s = n("kfGJ");
        n.d(t, {}, {
            getPluginTargetForReference: async function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.a,
                    u = await (0, o.d)(e, {
                        productContext: "chatgpt",
                        surface: "plugin_reference"
                    }).catch(() => []),
                    d = (0, a.a)(t),
                    c = u.find(e => (0, a.a)(e.plugin.remotePluginId ?? e.plugin.id) === d || null != e.canonicalAppId && (0, a.a)(e.canonicalAppId) === d);
                if (null != c) return {
                    displayName: c.displayName ?? c.plugin.name,
                    pluginId: c.plugin.remotePluginId ?? c.plugin.id
                };
                let p = t;
                if (!(0, i.ai)(t)) {
                    let n = await (0, r.b)(e, t).catch(() => null);
                    if (null == n) return null;
                    p = n
                }
                let g = await e.query.getOrFetch(l.l, {
                    hostId: n,
                    marketplacePath: null,
                    pluginName: p,
                    remoteMarketplaceName: i.Wb
                }).catch(() => null);
                return null == g ? null : {
                    displayName: g.summary.interface?.displayName ?? g.summary.name,
                    pluginId: g.summary.remotePluginId ?? p
                }
            }
        })
    }),
    H0Gm: (function(e, t, n) {
        var i = n("Q840"),
            a = n("OWtl");
        let r = (0, i.u)(a.a, []),
            l = (0, i.c)(a.a, e => {
                let {
                    get: t
                } = e, n = [];
                for (let {
                        hostId: e,
                        pluginId: i
                    }
                    of t(r)) n.some(t => t.hostId === e && t.pluginId === i) || n.push({
                    hostId: e,
                    pluginId: i
                });
                return n
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.hostId === t[n]?.hostId && e.pluginId === t[n]?.pluginId)
            }),
            o = 0;
        n.d(t, {}, {
            a: function(e, t) {
                e.set(r, e => e.filter(e => e.operationId !== t))
            },
            b: l,
            c: function(e, t) {
                let n = o += 1;
                return e.set(r, e => [...e, {
                    ...t,
                    operationId: n
                }]), n
            }
        })
    }),
    K0RC: (function(e, t, n) {
        var i = n("pBUY"),
            a = n.n(i),
            r = n("N2rm");
        let l = (0, n("Nwp9").b)("recent-plugin-install-times", {});
        n.d(t, {}, {
            a: 12096e5,
            b: function(e, t) {
                return JSON.stringify([e, t === r.a ? "local" : t])
            },
            c: l,
            d: function(e, t, n, i) {
                let r = Date.now();
                e.set(l, e => ({
                    ...e,
                    [t]: {
                        ...a()(e[t], e => e + 12096e5 > r),
                        [n]: r,
                        ...null != i ? {
                            [i]: r
                        } : {}
                    }
                }))
            }
        })
    }),
    TZ9K: (function(e, t, n) {
        var i = n("oo2L"),
            a = n("o6hs"),
            r = n("Rvvc"),
            l = n("LH8k"),
            o = n("WFY2"),
            s = n("HFSu"),
            u = n("OHD8"),
            d = n("eShZ"),
            c = n("sFqu");
        n.d(t, {}, {
            a: async function(e, t) {
                let n = e.requestedConnectorId;
                if (!e.requiresAppSetup || null == n) return {
                    kind: "ready"
                };
                let p = (0, c.a)(n, e)?.productSku ?? (0, i.j)(),
                    g = {
                        [a.a]: p
                    };
                try {
                    let [e, i] = await Promise.all([s.CodexRequest.safeGet("/aip/connectors/{connector_id}", {
                        surface: "connector_setup",
                        parameters: {
                            path: {
                                connector_id: n
                            }
                        },
                        additionalHeaders: g
                    }), async function(e, t, n) {
                        let i = async () => {
                            let {
                                link: i
                            } = await s.CodexRequest.safeGet("/aip/connectors/{connector_id}/link", {
                                surface: "connector_setup",
                                parameters: {
                                    path: {
                                        connector_id: e
                                    }
                                },
                                additionalHeaders: t,
                                ...null == n ? {} : {
                                    expectedIdentity: n.expectedIdentity
                                }
                            });
                            return i
                        };
                        try {
                            return await i()
                        } catch (e) {
                            if (null == n || !n.isCurrent() || !(e instanceof d.FetchError) || !(0, u.a)(e) || (await new Promise(e => setTimeout(e, 250)), !n.isCurrent())) throw e;
                            return i()
                        }
                    }(n, g, t)]);
                    if ("DISABLED_BY_ADMIN" === e.status) return {
                        kind: "unavailable"
                    };
                    let a = {
                        category: null,
                        description: e.description ?? null,
                        id: n,
                        installUrl: null,
                        name: e.name
                    };
                    if (null == i || null != i.auth_status && "ACTIVE" !== i.auth_status) return {
                        kind: "needsAuth",
                        app: a
                    };
                    if ("CODEX" === p && (n === r.c || e.template_id === r.a || "github" === e.service)) try {
                        await s.CodexRequest.safeGet("/wham/github/list-repositories", {
                            parameters: {
                                query: {
                                    connector_id: n,
                                    page: 1,
                                    per_page: 1
                                }
                            }
                        })
                    } catch (e) {
                        if (e instanceof Error && (0, l.a)(e)?.type === "missing_github_connector_link") return {
                            kind: "needsAuth",
                            app: a
                        };
                        throw e
                    }
                    return {
                        kind: "ready"
                    }
                } catch (e) {
                    return o.a.info("Requested plugin connection could not be verified", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), {
                        kind: "unavailable"
                    }
                }
            }
        })
    }),
    ndO4: (function(e, t, n) {
        var i = n("bTvG"),
            a = n("hOO0"),
            r = n("pDRe"),
            l = n("OiCI"),
            o = n("Cslg"),
            s = n("xWQV"),
            u = n("v70x"),
            d = n("ygu7"),
            c = n("loz7");

        function p(e) {
            let t = e.marketplaceAnalytics?.chatgpt;
            return null == t ? void 0 : {
                ...t,
                installAction: i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE,
                surface: null != e.installAttemptId ? t.surface : i.z.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP
            }
        }

        function g(e, t, n) {
            let {
                appId: u,
                appIds: c,
                apps: p,
                parentPluginId: g,
                parentCanonicalAppId: m,
                parentInstallAttemptId: f,
                sourceAttributionId: h,
                allowChildInstall: _,
                blocked: v,
                previous: b
            } = n;
            if (null != b && "failure" !== b.terminalResult) return b;
            let y = e.queryClient.getQueryData((0, r.b)({
                    accountId: e.get(l.a),
                    userId: e.get(o.k),
                    appIds: c,
                    enabled: !1
                }).queryKey)?.find(e => (0, a.a)(e.id) === (0, a.a)(u)),
                I = e.queryClient.getQueryData((0, d.d)(u, e.get(l.d)).queryKey),
                C = b?.childInstall ?? (_ && I?.plugin_id !== g && (0, a.a)(m ?? "") !== (0, a.a)(u) && !p.some(e => e.id === u && e.isAccessible) && !y?.installed && y?.can_install !== !1 && !v),
                E = null != b ? b.pluginId : I?.plugin_id ?? void 0,
                P = {
                    childInstall: C,
                    installAttemptId: C ? crypto.randomUUID() : b?.installAttemptId ?? f,
                    pluginId: C ? E : g
                };
            return C && (0, s.c)(e, {
                ...t,
                installAction: i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE
            }, {
                action: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                connectorId: u,
                installAttemptId: P.installAttemptId,
                pluginId: P.pluginId,
                referrerInstallAttemptId: f,
                referrerPluginId: g,
                result: "CHATGPT_PLUGIN_ACTION_RESULT_INITIATED",
                sourceAttributionId: h
            }), P
        }
        n.d(t, {}, {
            a: function(e, t, n, i) {
                let a = e.get(c.o);
                if ("needsApps" !== a.kind && "connectApp" !== a.kind && "connectAppBeforeInstall" !== a.kind || a.marketplaceAnalytics?.chatgpt == null) return;
                let r = p(a);
                if (null == r) return;
                let l = "connectAppBeforeInstall" === a.kind ? [a.app.id] : a.requiredApps.map(e => {
                        let {
                            app: t
                        } = e;
                        return t.id
                    }),
                    o = a.requiredAppAnalytics?.[t],
                    s = g(e, r, {
                        appId: t,
                        appIds: l,
                        apps: n,
                        parentPluginId: (0, u.c)(a.plugin.plugin) ?? a.plugin.plugin.id,
                        parentCanonicalAppId: a.plugin.canonicalAppId,
                        parentInstallAttemptId: a.installAttemptId,
                        sourceAttributionId: a.sourceAttributionId,
                        allowChildInstall: "connectAppBeforeInstall" !== a.kind,
                        blocked: i,
                        previous: o?.terminalResult === "failure" ? o : void 0
                    });
                e.set(c.o, {
                    ...a,
                    requiredAppAnalytics: {
                        ...a.requiredAppAnalytics,
                        [t]: s
                    }
                })
            },
            b: p,
            c: function(e, t, n, a) {
                let {
                    appId: r,
                    result: l,
                    errorType: o,
                    linkId: u,
                    suggestionId: d
                } = a, p = e.get(c.o), g = "closed" === p.kind ? void 0 : p.requiredAppAnalytics?.[r], m = null != g && g.pluginId === n.pluginId && g.installAttemptId === n.installAttemptId;
                if (null == n.terminalResult && (!m || null == g.terminalResult)) {
                    if ("CHATGPT_PLUGIN_ACTION_RESULT_INITIATED" !== l && (!n.childInstall || "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" !== l || u)) {
                        let t = "failure";
                        "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" === l ? t = "success" : "CHATGPT_PLUGIN_ACTION_RESULT_CANCELLED" === l && (t = "cancelled"), "closed" !== p.kind && (m || null == g && null != n.installAttemptId && p.installAttemptId === n.installAttemptId) && e.set(c.o, {
                            ...p,
                            requiredAppAnalytics: {
                                ...p.requiredAppAnalytics,
                                [r]: {
                                    ...n,
                                    terminalResult: t
                                }
                            }
                        })
                    }(0, s.c)(e, t, {
                        action: "CHATGPT_PLUGIN_ACTION_TYPE_CONNECT_CONNECTOR",
                        connectorId: r,
                        installAttemptId: n.installAttemptId,
                        pluginId: n.pluginId,
                        result: l,
                        errorType: o,
                        suggestionId: d
                    }), n.childInstall && ("CHATGPT_PLUGIN_ACTION_RESULT_FAILURE" === l || "CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS" === l && u) && (0, s.c)(e, {
                        ...t,
                        installAction: i.x.CHATGPT_PLUGIN_CONNECTOR_INSTALL_ACTION_CONNECT_SINGLE
                    }, {
                        action: "CHATGPT_PLUGIN_ACTION_TYPE_INSTALL",
                        connectorId: r,
                        installAttemptId: n.installAttemptId,
                        pluginId: n.pluginId,
                        result: l,
                        errorType: o
                    })
                }
            },
            d: g
        })
    }),
    ntKy: (function(e, t, n) {
        n.d(t, {
            installPlugin: () => k,
            a: () => M,
            b: () => R,
            c: () => N,
            d: () => S,
            e: () => w
        });
        var i = n("QosV"),
            a = n("D7Ms"),
            r = n("Q840"),
            l = n("Zqzr"),
            o = n("Haiv"),
            s = n("SqAt"),
            u = n("oo2L"),
            d = n("OiCI"),
            c = n("Cslg"),
            p = n("SGsN"),
            g = n("svjy"),
            m = n("EEop"),
            f = n("OWtl"),
            h = n("WFY2"),
            _ = n("cLdu"),
            v = n("ueue"),
            b = n("sFqu"),
            y = n("aVTW"),
            I = n("loz7"),
            C = n("Elta"),
            E = n("hOYb"),
            P = n("H0Gm");
        let A = (0, r.c)(f.a, e => {
            let {
                get: t
            } = e, n = (0, I.h)(t(I.o));
            return null == n ? null : {
                hostId: n.hostId,
                phase: n.phase,
                pluginDisplayName: (0, o.a)(n.plugin),
                pluginId: n.plugin.plugin.id,
                progress: n.progressPercent,
                sourceSectionId: n.sourceSectionId
            }
        }, {
            isEqual: (e, t) => e === t || null != e && null != t && e.hostId === t.hostId && e.phase === t.phase && e.pluginDisplayName === t.pluginDisplayName && e.pluginId === t.pluginId && e.progress === t.progress && e.sourceSectionId === t.sourceSectionId
        });

        function w() {
            let e, t, n, a = (0, i.c)(9),
                l = (0, r.y)(f.a),
                o = (0, r.z)(A),
                s = (0, r.z)(P.b);
            return a[0] !== l ? (e = (e, t) => k(l, e, t), a[0] = l, a[1] = e) : e = a[1], a[2] !== l ? (t = (e, t) => {
                let {
                    hostId: n,
                    onAppConnected: i,
                    onCancel: a,
                    onError: r,
                    onSuccess: o,
                    ...s
                } = t;
                return (0, I.n)(l, {
                    hostId: n,
                    mode: "details",
                    onAppConnected: i,
                    onCancel: a,
                    onError: r,
                    onSuccess: o,
                    options: T(l, s),
                    plugin: e
                })
            }, a[2] = l, a[3] = t) : t = a[3], a[4] !== o || a[5] !== e || a[6] !== t || a[7] !== s ? (n = {
                installPlugin: e,
                status: o,
                uninstalling: s,
                showPluginInstallDetails: t
            }, a[4] = o, a[5] = e, a[6] = t, a[7] = s, a[8] = n) : n = a[8], n
        }

        function T(e, t) {
            var n;
            let i = t.marketplaceAnalytics;
            if (null == i || null != i.voiceSessionId) return t;
            let a = i.chatgpt?.conversationId ?? t.conversation?.conversationId ?? t.postInstallPluginSuggestion?.conversationId;
            return {
                ...t,
                marketplaceAnalytics: {
                    ...i,
                    voiceSessionId: (n = a ?? null, e.get(C.a, n) && e.get(E.h) || void 0)
                }
            }
        }

        function k(e, t, n) {
            let {
                hostId: i,
                onAppConnected: r,
                onCancel: l,
                onError: o,
                onSuccess: u,
                ...c
            } = n, f = T(e, c);
            if ("plugin" in t) return (0, I.n)(e, {
                hostId: i,
                mode: "install",
                onAppConnected: r,
                onCancel: l,
                onError: o,
                onSuccess: u,
                options: f,
                plugin: t
            });
            let b = {
                    ...f,
                    installAttemptId: f.installAttemptId ?? f.appConnectOptions?.installAttemptId ?? crypto.randomUUID()
                },
                C = (0, I.m)(e, {
                    hostId: i,
                    onAppConnected: r,
                    onCancel: l,
                    onError: o,
                    onSuccess: u,
                    options: b,
                    plugin: t
                });
            if (null == C) return !1;
            L(e, t.connectionAppId, b);
            let E = e.get(I.o),
                P = null != t.connectionAppId && "loadingPlugin" === E.kind ? (0, y.b)(e, t.connectionAppId, E) : null;
            return null != P && e.queryClient.prefetchQuery(P), O(e, t, i, f.productContext).then(t => {
                let n = e.get(I.o);
                if ("loadingPlugin" !== n.kind || n.hostId !== i || n.requestId !== C) return;
                let c = n.hostedAccountId,
                    p = e.get(d.d) ?? void 0;
                if ((0, _.i)(i) && (null == c || p !== c)) return void(0, I.d)(e, {
                    hostId: i,
                    requestId: C
                });
                let g = "ON_INSTALL" === t.summary.authPolicy ? (0, y.a)(t, n.requestedConnectorId, null) : null;
                null != P && (null == g || (0, a.f)(P.queryKey) !== (0, a.f)((0, y.b)(e, g.id, n).queryKey)) && e.queryClient.removeQueries({
                    queryKey: P.queryKey,
                    exact: !0
                });
                let h = (0, v.c)(t);
                e.queryClient.setQueryData((0, m.h)({
                    productContext: f.productContext,
                    accountId: c ?? null,
                    hostId: i,
                    marketplacePath: h.marketplacePath,
                    pluginName: (0, s.a)(h),
                    remoteMarketplaceName: h.remoteMarketplaceName ?? null
                }), t), (0, I.n)(e, {
                    hostId: i,
                    loadingRequestId: C,
                    mode: "install",
                    onAppConnected: r,
                    onCancel: l,
                    onError: o,
                    onSuccess: u,
                    options: {
                        ...b,
                        hostedAccountId: c
                    },
                    plugin: h
                })
            }).catch(t => {
                (0, I.d)(e, {
                    hostId: i,
                    requestId: C
                }) && (h.a.error("Failed to load plugin for installation", {
                    safe: {},
                    sensitive: {
                        error: t
                    }
                }), e.get(p.f).danger(e.get(g.a).formatMessage({
                    id: "plugins.install.error",
                    defaultMessage: "Failed to install plugin"
                }), {
                    errorAnalytics: {
                        toastId: "plugins.install.error"
                    }
                }))
            }), !0
        }
        async function S(e, t) {
            let {
                accountId: i,
                hostId: a,
                target: r,
                onSuccess: o,
                onCancel: s,
                onError: u
            } = t;
            if (null == i || null == r.pluginId) return void s?.();
            let f = (0, l.Tg)(r.pluginId),
                _ = r.remotePluginId ?? (null == f ? r.pluginId : r.pluginId.slice(0, -f.length - 1)),
                b = r.installOptions?.postInstallPluginSuggestion;
            if (null != b && (b.accountId !== i || b.pluginId !== _)) return void s?.();
            let y = () => e.get(d.a) === i && (r.installOptions?.hostedAccountId == null || r.installOptions.hostedAccountId === i && e.get(d.d) === i) && (null == b || b.userId === e.get(c.k));
            if (!y()) return void s?.();
            try {
                let t = await e.queryClient.fetchQuery({
                    ...e.query.getOptions(m.l, {
                        hostId: a,
                        marketplacePath: null,
                        pluginName: _,
                        remoteMarketplaceName: null,
                        productContext: r.installOptions?.productContext
                    }),
                    retry: !1
                });
                if (!y()) return void s?.();
                let l = (0, v.c)(t),
                    {
                        requestId: d,
                        ...c
                    } = r.installOptions ?? {},
                    p = {
                        ...c,
                        hostedAccountId: i,
                        origin: r.origin ?? c.origin,
                        pendingElicitationReply: r.pendingElicitationReply
                    };
                if (!k(e, l, {
                        ...p,
                        hostId: a,
                        onCancel: s,
                        onError: u,
                        onSuccess: async () => {
                            if (b?.kind === "orbit") {
                                let {
                                    completeOrbitPluginInstallation: t
                                } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(313404)]).then(n.bind(n, "r2fg"));
                                await t(e, b)
                            }
                            await o?.(_, l)
                        }
                    })) return void u?.();
                null != r.postInstallRequiredApps && (0, I.s)(e, {
                    apps: r.postInstallRequiredApps,
                    installedInThisFlow: r.installedInThisFlow,
                    browserExtensions: [],
                    hostId: a,
                    options: p,
                    plugin: l
                })
            } catch (t) {
                if (!y()) return void s?.();
                h.a.error("Failed to resume plugin installation after OAuth", {
                    safe: {},
                    sensitive: {
                        error: t
                    }
                }), e.get(p.f).danger(e.get(g.a).formatMessage({
                    id: "plugins.install.error",
                    defaultMessage: "Failed to install plugin"
                }), {
                    errorAnalytics: {
                        toastId: "plugins.install.error"
                    }
                }), u?.()
            }
        }
        async function N(e, t, n) {
            "plugin" in t || (L(e, t.connectionAppId), await O(e, t, n))
        }

        function R(e, t) {
            return e.some(e => {
                let {
                    hostId: n,
                    pluginId: i
                } = e;
                return n === t.hostId && i === t.pluginId
            })
        }

        function M(e) {
            let {
                hostId: t,
                pluginId: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return null != e && (null == t || e.hostId === t) && (null == n || e.pluginId === n)
        }

        function O(e, t, n, i) {
            return e.queryClient.fetchQuery({
                ...e.query.getOptions(m.l, {
                    hostId: n,
                    marketplacePath: null,
                    pluginName: t.remotePluginId,
                    productContext: i,
                    remoteMarketplaceName: t.remoteMarketplaceName ?? null
                }),
                retry: !1
            })
        }

        function L(e, t, n) {
            null != t && e.queryClient.prefetchQuery((0, u.f)(t, {
                productSku: (0, b.a)(t, n)?.productSku
            }))
        }
    }),
    JRAe: (function(e, t, n) {
        var i = n("ZOvk"),
            a = n("fOcH"),
            r = n("i0mf"),
            l = n("IFeg"),
            o = n("jLtZ"),
            s = n("fD0V");
        let u = {
            gmail: d(l),
            "google-calendar": d(o),
            "google-docs": d(i),
            "google-drive": d(s),
            "google-sheets": d(a),
            "google-slides": d(r)
        };

        function d(e) {
            let t = e.trim().replace(/^<svg\b[^>]*>/u, '<svg x="24" y="24" width="144" height="144" viewBox="0 0 192 192">');
            return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><rect width="192" height="192" rx="40" fill="#fff"/>${t}</svg>`)}`
        }

        function c(e) {
            return (e.split("@")[0] ?? "").trim().toLowerCase().split(/[^a-z0-9]+/g).filter(e => e.length > 0).join("-")
        }
        n.d(t, {}, {
            a: function(e) {
                for (let t of [e.name, e.id, e.interface?.displayName ?? ""].map(c)) {
                    let e = function(e) {
                        let t = e.replace(/^connector-/u, "");
                        return u[e] ?? u[t] ?? u[t.replace(/-mcp-server$/u, "")] ?? null
                    }(t);
                    if (null != e) return e
                }
                return null
            }
        })
    }),
    ZqLP: (function(e, t, n) {
        function i(e, t, n) {
            let i = e.creator_account_user_id,
                a = "personal" === t.structure ? n : t.account_user_id;
            return null != i && i === a
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    plugin: t,
                    account: n,
                    userId: a,
                    hasWritePermission: r = !1,
                    isSourceManaged: l = !1
                } = e, o = i(t, n, a), s = "workspace" === n.structure && "WORKSPACE" === t.scope && t.workspace_id === n.id && ("account-admin" === n.account_user_role || "account-owner" === n.account_user_role);
                return !l && (o || s || r)
            },
            b: function(e) {
                let {
                    plugin: t,
                    account: n,
                    userId: a,
                    rbacEnabled: r,
                    canEditWithShares: l,
                    isSourceManaged: o = !1
                } = e, s = "workspace" === n.structure, u = s && t.workspace_id === n.id && "WORKSPACE" === t.scope, d = "USER" === t.scope && null == t.workspace_id, c = s && "USER" === t.scope && "PRIVATE" === t.discoverability && t.workspace_id === n.id, p = i(t, n, a), g = s && ("account-admin" === n.account_user_role || "account-owner" === n.account_user_role), m = t.share_principals?.some(e => {
                    let {
                        principal_type: t,
                        principal_id: i,
                        role: r
                    } = e;
                    return ("editor" === r || "owner" === r) && ("user" === t && i === a || "workspace" === t && i === n.id)
                });
                return {
                    canOpenVisualEditor: !o && ("USER" === t.scope || "WORKSPACE" === t.scope) && (p && (!s || n.account_user_id === `${a}__${n.id}`) && (null == t.workspace_id || s && t.workspace_id === n.id) || g && (u || function(e, t) {
                        if ("USER" !== e.scope || null != e.source_gizmo_id) return !1;
                        if (null != e.workspace_id) return e.workspace_id === t;
                        let [n, i, a] = e.creator_account_user_id?.split("__") ?? [];
                        return !!n && i === t && null == a
                    }(t, n.id)) || u && (l ?? !0 === m)),
                    canManageForWorkspace: g && ("USER" !== t.scope || p) && ("WORKSPACE" !== t.scope || u),
                    canDownload: "ENABLED" === t.status && null == t.template_plugin_id && ("USER" === t.scope || "WORKSPACE" === t.scope),
                    canUploadPersonal: p && d && !s,
                    canUploadWorkspaceWithShares: u && r && !o && !0 === l,
                    shouldCheckWorkspaceUpload: p && u,
                    canDelete: p && (null != t.canonical_app_id ? u || d || c : u || d && "PRIVATE" === t.discoverability)
                }
            },
            c: "3091128584"
        })
    }),
    w8IV: (function(e, t, n) {
        var i = n("Zqzr");
        let a = `${i.lb}@${i.Yc}`;
        n.d(t, {}, {
            a: a,
            b: "com.apple.MobileSMS"
        })
    }),
    BA9i: (function(e, t, n) {
        let i = "spreadsheets",
            a = "presentations",
            r = "documents",
            l = "openai-primary-runtime";

        function o(e, t) {
            return e.plugin.name === t && e.marketplaceName === l && e.plugin.id === `${t}@${l}`
        }
        n.d(t, {}, {
            a: i,
            b: "1288674243",
            c: "1623794951",
            d: a,
            e: r,
            f: function(e) {
                return o(e, i)
            },
            g: function(e) {
                return o(e, a)
            },
            h: function(e) {
                return o(e, r)
            }
        })
    }),
    yK38: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t, n, i) {
                let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : t,
                    r = arguments.length > 5 ? arguments[5] : void 0,
                    l = [...new Set(t)],
                    o = new Set(a),
                    s = new Set,
                    u = !1,
                    d = new IntersectionObserver(e => {
                        if (u) return;
                        for (let t of e) {
                            let e = t.target instanceof HTMLElement ? t.target.dataset.pluginImpressionId : void 0;
                            null != e && (t.isIntersecting && t.intersectionRatio >= .5 ? s.add(e) : s.delete(e))
                        }
                        let t = l.filter(e => s.has(e));
                        r?.(t);
                        let a = t.filter(e => o.has(e) && !n.has(e));
                        if (a.length > 0) {
                            for (let e of a) n.add(e);
                            i(t, a)
                        }
                    }, {
                        threshold: .5
                    });
                for (let t of e.querySelectorAll("[data-plugin-impression-id]")) d.observe(t);
                return () => {
                    u = !0, d.disconnect()
                }
            }
        })
    }),
    Zpwo: (function(e, t, n) {
        function i(e, t, n) {
            let i = e.name.trim();
            if (!i || "connected" === i.toLocaleLowerCase()) return;
            let r = a(e),
                l = n ?? e.connector_name ?? t;
            return i.toLocaleLowerCase() === l.trim().toLocaleLowerCase() || i.toLocaleLowerCase() === r?.toLocaleLowerCase() ? void 0 : i
        }

        function a(e) {
            return e.owner_profile?.email?.trim() || e.owner_profile?.name?.trim() || e.owner_profile?.nickname?.trim() || void 0
        }
        n.d(t, {}, {
            a: i,
            b: function(e, t, n) {
                return e.owners.some(e => "USER" === e.type && e.id === n) ? t : void 0
            },
            c: function(e, t, n, r) {
                let l = a(e);
                return l || ("NONE" === e.auth_type && t.trim() ? t.trim() : i(e, t, r) ?? n)
            },
            d: a
        })
    }),
    C3Kr: (function(e, t, n) {
        let i = new WeakMap,
            a = new WeakMap,
            r = new WeakMap;

        function l(e) {
            let t = r.get(e);
            if (null != t) return t;
            let n = new Set([e.name, e.interface?.displayName ?? ""].map(u));
            return r.set(e, n), n
        }

        function o(e, t, n) {
            let i = e.get(t);
            null == i ? e.set(t, [n]) : i.push(n)
        }

        function s(e, t) {
            let n = new Set;
            for (let i of t)
                for (let t of e.get(i) ?? []) n.add(t);
            return Array.from(n)
        }

        function u(e) {
            return e.trim().toLowerCase().replaceAll(/[^a-z0-9]+/g, "")
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = l(t),
                    {
                        aliasAppsByKey: a,
                        exactAppsByKey: r
                    } = function(e) {
                        let t = i.get(e);
                        if (null != t) return t;
                        let n = new Map,
                            a = new Map;
                        for (let t of e)
                            for (let e of (o(n, u(t.name), t), new Set(t.pluginDisplayNames.map(u)))) o(a, e, t);
                        let r = {
                            aliasAppsByKey: a,
                            exactAppsByKey: n
                        };
                        return i.set(e, r), r
                    }(e),
                    d = s(r, n);
                if (d.length > 0) return 1 === d.length ? d[0] ?? null : null;
                let c = s(a, n);
                return 1 === c.length ? c[0] ?? null : null
            },
            b: function(e, t) {
                let n = l(t);
                for (let t of function(e) {
                        let t = a.get(e);
                        if (null != t) return t;
                        let n = new Set([e.name, ...e.pluginDisplayNames].map(u));
                        return a.set(e, n), n
                    }(e))
                    if (n.has(t)) return !0;
                return !1
            }
        })
    }),
    AjOy: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                return "chatgpt" === e
            }
        })
    }),
    md5w: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                let {
                    pluginId: t,
                    enabled: n
                } = e;
                return [{
                    keyPath: `plugins.${t}.enabled`,
                    value: n,
                    mergeStrategy: "upsert"
                }]
            }
        })
    }),
    MX3C: (function(e, t, n) {
        var i = n("Q840"),
            a = n("ASxG"),
            r = n("hOO0"),
            l = n("OWtl"),
            o = n("kpIY"),
            s = n("Nwp9");
        let u = "selected-plugin-links-v1",
            d = a.record(a.string(), a.string().nullable().catch(null)).catch({}),
            c = (0, s.b)(u, {}, {
                coerceStoredValue: e => d.parse(e)
            }),
            p = (0, i.d)(l.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(c)[g(e)] ?? null
            });

        function g(e) {
            let {
                accountId: t,
                userId: n,
                appId: i
            } = e;
            return JSON.stringify([t, n, i])
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = (0, r.a)(t);
                return e.filter(e => (0, r.a)(e.connector_id) === n && "HIDDEN" !== e.visibility && !e.id.startsWith("implicit_link::"))
            },
            b: function(e, t, n) {
                return e.some(e => (0, r.c)(e, t) && "OAUTH" === e.auth_type && "DISABLED_BY_ADMIN" !== e.connector_status && null == e.unavailable_reason && e.owners.some(e => "USER" === e.type && e.id === n))
            },
            c: p,
            d: function(e, t, n) {
                (0, o.t)(u, {
                    entries: {
                        [g(t)]: null == n ? null : {
                            value: n
                        }
                    },
                    maxEntries: 100
                }), e.set(c, (0, o.k)(u, {}))
            }
        })
    }),
    oszP: (function(e, t, n) {
        var i = n("oo2L"),
            a = n("hOO0"),
            r = n("bnxy");

        function l(e) {
            return (e ?? "").trim().toLowerCase().replace(/^connector[_-]/, "").replace(/^mcp[_-]/, "").replace(/[\s_-]+/g, "")
        }

        function o(e) {
            return e.branding?.category?.trim() || e.appMetadata?.categories?.find(e => e.trim())?.trim() || null
        }

        function s(e, t) {
            return null != e && null != t && (0, r.q)(t) === (0, r.q)((0, r.p)((0, r.r)(e), ".agents/plugins/marketplace.json"))
        }

        function u(e) {
            return (e ?? "").trim().toLowerCase().split(":").map(e => e.replace(/[\s_-]+/g, "")).join(":")
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    appsContent: t,
                    connections: n,
                    directoryApps: i,
                    includeUnavailableApps: r = !1,
                    pluginApps: l
                } = e, o = new Map(t.map(e => [(0, a.a)(e.id), e])), s = new Map(i.map(e => [(0, a.a)(e.id), e]));
                return l.flatMap(e => {
                    let t = (0, a.a)(e.id),
                        i = o.get(t);
                    if (null == i) {
                        let i = n?.get(t);
                        return r && (i?.isUnavailable || i?.isDisabledByAdmin) ? [{
                            appMetadata: null,
                            branding: null == e.category ? null : {
                                category: e.category,
                                developer: null,
                                isDiscoverableApp: !1,
                                privacyPolicy: null,
                                termsOfService: null,
                                website: null
                            },
                            description: e.description,
                            distributionChannel: null,
                            iconAssets: null,
                            iconDarkAssets: null,
                            id: e.id,
                            installUrl: null,
                            isAccessible: !1,
                            isEnabled: !1,
                            labels: null,
                            logoUrl: null,
                            logoUrlDark: null,
                            name: e.name,
                            pluginDisplayNames: []
                        }] : []
                    }
                    let l = s.get(t);
                    return [{
                        appMetadata: l?.appMetadata ?? null,
                        branding: {
                            category: l?.branding?.category ?? null,
                            developer: i.developer ?? l?.branding?.developer ?? null,
                            isDiscoverableApp: l?.branding?.isDiscoverableApp ?? !1,
                            privacyPolicy: l?.branding?.privacyPolicy ?? null,
                            termsOfService: l?.branding?.termsOfService ?? null,
                            website: l?.branding?.website ?? null
                        },
                        description: i.description || null,
                        distributionChannel: i.distribution_channel ?? l?.distributionChannel ?? null,
                        iconAssets: l?.iconAssets ?? null,
                        iconDarkAssets: l?.iconDarkAssets ?? null,
                        id: e.id,
                        installUrl: l?.installUrl ?? e.installUrl,
                        isAccessible: n?.get(t)?.isConnected ?? l?.isAccessible ?? !1,
                        isEnabled: l?.isEnabled ?? !0,
                        labels: l?.labels ?? null,
                        logoUrl: i.icon_url ?? l?.logoUrl ?? null,
                        logoUrlDark: i.icon_dark_url ?? l?.logoUrlDark ?? null,
                        name: i.name,
                        pluginDisplayNames: l?.pluginDisplayNames ?? []
                    }]
                })
            },
            b: function(e) {
                let {
                    connectorMetadata: t,
                    directoryApps: n,
                    appTemplates: i
                } = e;
                if (!Array.isArray(i)) return [];
                let a = new Map(n.map(e => [e.id, e])),
                    r = new Map(t.map(e => [e.id, e]));
                return i.map(e => {
                    let t = (null == e.canonicalConnectorId ? void 0 : a.get(e.canonicalConnectorId)) ?? a.get(e.templateId),
                        n = (null == e.canonicalConnectorId ? void 0 : r.get(e.canonicalConnectorId)) ?? r.get(e.templateId);
                    return {
                        ...e,
                        category: e.category?.trim() || (null == t ? null : o(t)),
                        description: e.description || n?.description || null,
                        logoUrl: e.logoUrl || n?.iconUrl || n?.iconUrlDark || null,
                        logoUrlDark: e.logoUrlDark || n?.iconUrlDark || n?.iconUrl || null
                    }
                })
            },
            c: function(e) {
                let {
                    connectorMetadata: t,
                    directoryApps: n,
                    pluginApps: i,
                    appTemplates: r
                } = e, l = new Map(t.map(e => [e.id, e])), s = new Map(n.map(e => [e.id, e]));
                return i.map(e => {
                    let t = l.get(e.id),
                        n = s.get(e.id),
                        i = r.find(t => t.materializedAppIds.some(t => (0, a.a)(t) === (0, a.a)(e.id))),
                        u = null != t && t.name !== t.id;
                    if (!u && null == i) return null;
                    let d = e.category?.trim() || (null == n ? null : o(n));
                    return {
                        appMetadata: n?.appMetadata ?? null,
                        description: t?.description ?? (null == i ? null : e.description),
                        distributionChannel: t?.distributionChannel ?? null,
                        iconAssets: n?.iconAssets ?? null,
                        iconDarkAssets: n?.iconDarkAssets ?? null,
                        id: e.id,
                        installUrl: t?.installUrl ?? n?.installUrl ?? e.installUrl,
                        isAccessible: n?.isAccessible ?? !1,
                        isEnabled: n?.isEnabled ?? !0,
                        labels: n?.labels ?? null,
                        logoUrl: t?.iconUrl ?? t?.iconUrlDark ?? i?.logoUrl ?? null,
                        logoUrlDark: t?.iconUrlDark ?? t?.iconUrl ?? i?.logoUrlDark ?? null,
                        name: u ? t.name : e.name,
                        pluginDisplayNames: t?.pluginDisplayNames ?? [],
                        branding: d ? {
                            ...n?.branding ?? {
                                category: null,
                                developer: null,
                                website: null,
                                privacyPolicy: null,
                                termsOfService: null,
                                isDiscoverableApp: !1
                            },
                            category: d
                        } : n?.branding ?? null
                    }
                }).filter(e => null != e)
            },
            d: function(e) {
                let {
                    apps: t,
                    configuredServers: n,
                    pluginServerNames: i,
                    mcpAppIdsByServerKey: r
                } = e;
                return i.map(e => {
                    var i, o;
                    let s, u, d = r?.get(e),
                        c = null == r ? (i = t, s = l(e), i.find(e => [e.id, e.name, ...e.pluginDisplayNames, ...Object.keys(e.labels ?? {}), ...Object.values(e.labels ?? {})].some(e => l(e) === s)) ?? null) : t.find(e => null != d && (0, a.a)(e.id) === (0, a.a)(d));
                    if (null != c) return {
                        kind: "app",
                        app: c,
                        manifestAppId: d
                    };
                    let p = (o = n, u = l(e), Object.entries(o).find(e => {
                            let [t, n] = e;
                            return [t, n.name].some(e => l(e) === u)
                        })?.[0] ?? null),
                        g = null == p ? null : n[p];
                    return {
                        configKey: p,
                        kind: "config",
                        enabled: g?.enabled !== !1,
                        installed: null != g,
                        name: e,
                        manifestAppId: d
                    }
                })
            },
            e: function(e) {
                let {
                    installedSkills: t,
                    pluginName: n,
                    pluginSkills: i
                } = e, a = function(e) {
                    let t = new Map,
                        n = new Map,
                        i = new Map;
                    for (let {
                            skill: a
                        }
                        of e) {
                        i.set(a.path, a), n.set(a.name, a);
                        let e = u(a.name),
                            r = t.get(e);
                        if (null == r) {
                            t.set(e, [a]);
                            continue
                        }
                        r.push(a)
                    }
                    return {
                        byComparableKey: t,
                        byName: n,
                        byPath: i
                    }
                }(t), r = [], l = [];
                for (let e of i) {
                    let t = function(e, t, n) {
                        let i = t.path ? n.byPath.get(t.path) : void 0;
                        if (null != i) return i;
                        let a = e.trim(),
                            r = t.name;
                        if (!t.path && !r.includes(":")) {
                            if (!a) return null;
                            r = `${a}:${r}`
                        }
                        let l = n.byName.get(r);
                        if (null != l) return l;
                        let o = n.byComparableKey.get(u(r));
                        return o?.length === 1 ? o[0] : null
                    }(n, e, a);
                    if (null != t) {
                        r.push({
                            installedSkill: t,
                            pluginSkill: e
                        });
                        continue
                    }
                    l.push(e)
                }
                return {
                    installedSkills: r,
                    unavailableSkills: l
                }
            },
            f: l,
            g: function(e) {
                let {
                    appIds: t,
                    noAuthCanonicalAppId: n,
                    appsContent: r,
                    availabilities: l,
                    links: o
                } = e, s = new Map(r?.map(e => [(0, a.a)(e.id), e]) ?? []), u = new Map(l.map(e => [(0, a.a)(e.id), e])), d = null == n ? null : (0, a.a)(n);
                return new Map(t.map(e => {
                    let t = (0, a.a)(e),
                        n = s.get(t)?.supported_auth_types,
                        r = u.get(t),
                        l = o.filter(e => (0, a.a)(e.connector_id) === t && "HIDDEN" !== e.visibility),
                        c = l.some(e => e.id.startsWith("implicit_link::")),
                        p = l.find(e => "REAUTH_REQUIRED" !== e.auth_status) ?? l[0],
                        g = null != p || r?.installed === !0,
                        m = null == r || !r.available || !r.installed && !r.can_install,
                        f = n?.length === 1 && "NONE" === n[0],
                        h = t === d && !g && !m && f && r?.isOpenAICatalogApp === !0;
                    return [t, {
                        canConnect: !h && !c && (null == n || n.length > 0),
                        canReconnect: null != p && null != (0, i.o)(p),
                        isConnected: g,
                        requiresReauth: p?.auth_status === "REAUTH_REQUIRED",
                        linkId: p?.id.startsWith("implicit_link::") ? void 0 : p?.id,
                        isUnavailable: m,
                        isDisabledByAdmin: r?.status === "DISABLED_BY_ADMIN" || r?.disabled_reason === "disabled_by_admin"
                    }]
                }))
            },
            h: function(e) {
                let {
                    hasLoadedSharePrincipals: t,
                    canSharePlugin: n,
                    isInstalled: i,
                    isShareDisabled: a,
                    pluginShareUrl: r
                } = e;
                return i && n || (n || a) && (null == r || t) ? "share" : null == r ? null : "copy-link"
            },
            i: function(e, t, n) {
                return s(e, t) && "local" === n.type ? n.path : null
            },
            j: s,
            k: function(e) {
                let {
                    connectorMetadata: t,
                    plugin: n
                } = e;
                return "IMPLICIT_CANONICAL_APP" !== n.summary.installPolicySource || 1 !== n.apps.length || t?.find(e => e.id === n.apps[0]?.id)?.toolSummaries?.length !== 0
            }
        })
    }),
    jEyg: (function(e, t, n) {
        var i = n("iRMi"),
            a = n("Zqzr"),
            r = n("ASxG"),
            l = n("hOO0"),
            o = n("YWcr"),
            s = n("xWQV"),
            u = n("k7G6"),
            d = n("CV1W"),
            c = n("ueue");
        let p = r.object({
                navigationStartedAtMs: r.number().nonnegative().optional(),
                referrer: r.union([r.literal(i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED), r.literal(i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY), r.literal(i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY), r.literal(i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE), r.literal(i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL), r.literal(i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH), r.literal(i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK)]),
                source: r.union([r.literal(i.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED), r.literal(i.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE), r.literal(i.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL), r.literal(i.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER)])
            }),
            g = r.object({
                openInstallModal: r.literal(!0).optional(),
                pluginDisplayName: r.string().trim().min(1).optional(),
                pluginProductEventContext: p.optional(),
                suggestedPluginConnect: r.object({
                    accountId: r.string().min(1),
                    userId: r.string().min(1),
                    chatgpt: s.a.optional()
                }).optional()
            }).loose();

        function m(e, t) {
            return (0, u.a)({
                breadcrumb: t?.breadcrumb,
                browseSearch: t?.browseSearch,
                hostId: t?.hostId,
                pluginId: e.plugin.id,
                ...(0, c.l)(e)
            })
        }

        function f(e, t) {
            return "remote" === e.source.type && ("local" === t || t === a.Xb) ? e.remotePluginId : null
        }

        function h(e) {
            if (null == e || "object" != typeof e) return null;
            let t = Reflect.get(e, "pluginDetailDeepLinkMode");
            return "share" === t || "view" === t ? t : null
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = {
                    pluginProductEventContext: e
                };
                return null != t && (n.pluginDisplayName = t), n
            },
            b: function(e) {
                let {
                    hostId: t,
                    requestedPluginId: n,
                    explicitMarketplacePath: i,
                    explicitPluginName: r,
                    explicitRemoteMarketplaceName: l,
                    routeParams: o
                } = e;
                if ("local" === t) return {
                    directMarketplacePath: null,
                    directPluginName: r ?? n,
                    directRemoteMarketplaceName: a.Wb
                };
                let s = null != i || null != l;
                return {
                    directMarketplacePath: s ? i ?? null : o?.marketplacePath ?? null,
                    directPluginName: r ?? o?.pluginName ?? null,
                    directRemoteMarketplaceName: s ? l ?? null : o?.remoteMarketplaceName ?? null
                }
            },
            c: f,
            d: function(e) {
                return `/codex/open-app?target=plugin&plugin_id=${encodeURIComponent(e)}`
            },
            e: h,
            f: function(e) {
                let t = new URLSearchParams(e);
                return t.has("install") ? {
                    prompt: t.get("prompt")?.replace(/\r\n/g, "\n").trim() || null
                } : null
            },
            g: m,
            h: function(e, t) {
                let n = (0, o.s)(e);
                if (null == n) return null;
                let i = t?.remotePluginId != null && (0, a.ai)(t.remotePluginId) ? t.remotePluginId : null;
                return (null == i && (0, a.ai)(n) && (i = n), t?.requireRemotePluginId && null == i) ? null : (0, u.a)({
                    hostId: t?.hostId,
                    pluginId: i ?? n
                })
            },
            i: function e(t) {
                let {
                    allowUniqueNameFallback: n = !1,
                    fallbackRequestedPluginId: i,
                    plugins: r,
                    requestedPluginId: l
                } = t;
                if ((0, a.ai)(l)) {
                    let e = r.find(e => {
                        var t, n;
                        return t = e, n = l, "local" === t.plugin.source.type && t.plugin.shareContext?.remotePluginId != null && (0, a.Hi)(t.plugin.shareContext.remotePluginId, n)
                    });
                    if (null != e) return e
                }
                let o = r.find(e => {
                    var t, n;
                    return t = e, n = l, (0, a.ai)(n) ? "remote" === t.plugin.source.type && null != t.plugin.remotePluginId && (0, a.Hi)(t.plugin.remotePluginId, n) : t.plugin.id === n
                }) ?? null;
                if (null != o) return o;
                if (null != i && i !== l) {
                    let t = e({
                        allowUniqueNameFallback: n,
                        plugins: r,
                        requestedPluginId: i
                    });
                    if (null != t) return t
                }
                if (!n || (0, a.ai)(l)) return null;
                let s = l.lastIndexOf("@"),
                    u = s > 0 ? l.slice(0, s) : l,
                    d = r.filter(e => e.plugin.name === u);
                return 1 === d.length ? d[0] : null
            },
            j: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = g.safeParse(e);
                return (n.success ? n.data.pluginProductEventContext : void 0) ?? {
                    referrer: null != h(e) || t ? i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK : i.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED,
                    source: i.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER
                }
            },
            k: function(e) {
                let t = g.safeParse(e);
                return t.success ? t.data.pluginDisplayName ?? null : null
            },
            l: function(e) {
                let t = new URLSearchParams(e),
                    n = t.get("marketplacePath")?.trim(),
                    i = t.get("remoteMarketplaceName")?.trim(),
                    a = t.get("pluginName")?.trim(),
                    r = t.get("hostId")?.trim() || null,
                    l = !!n || !!i;
                return n && i || l && !a || !l && a ? null : {
                    marketplacePath: n || null,
                    pluginName: a || null,
                    remoteMarketplaceName: i || null,
                    hostId: r
                }
            },
            m: function(e, t) {
                let n = f(e.plugin, t);
                if (null != n) return (0, d.e)(n);
                let i = m(e, {
                    hostId: t
                });
                return (0, d.e)("hosts", t, "plugins", e.plugin.id) + new URL(i, "https://chatgpt.com").search
            },
            n: function(e) {
                let t = g.safeParse(e);
                return t.success && !0 === t.data.openInstallModal
            },
            o: function(e) {
                let t = g.safeParse(e);
                return t.success ? t.data.suggestedPluginConnect ?? null : null
            },
            p: function(e) {
                let {
                    appIds: t,
                    canonicalAppId: n
                } = e;
                return (null == n ? null : t.find(e => (0, l.a)(e) === (0, l.a)(n))) ?? (1 === t.length ? t[0] ?? null : null)
            },
            q: function(e) {
                let {
                    hasHandledNavigation: t,
                    isInstallBlocked: n,
                    isPluginInstalled: i,
                    shouldOpenInstall: a
                } = e;
                return a && !t && (i || !n)
            }
        })
    }),
    k7G6: (function(e, t, n) {
        var i = n("Zqzr");

        function a(e) {
            return r({
                pluginId: e,
                pluginName: e,
                remoteMarketplaceName: i.Wb,
                hostId: "local"
            })
        }

        function r(e) {
            return (e.hostId ?? "local") === "local" && null == e.marketplacePath ? (0, i.ie)({
                pluginId: e.pluginName ?? e.pluginId,
                deepLinkMode: e.deepLinkMode,
                breadcrumb: e.breadcrumb,
                browseSearch: e.browseSearch
            }) : (0, i.ie)(e)
        }
        n("Ot7V"), n.d(t, {}, {
            a: r,
            b: a,
            c: function(e, t, n) {
                t(a(e), n)
            }
        })
    }),
    R4kT: (function(e, t, n) {
        var i = n("kfGJ");
        n.d(t, {}, {
            a: function(e, t) {
                return e === i.a && !0 === t
            }
        })
    }),
    lhA2: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("oliF"),
            r = n("kCRh"),
            l = n("sFpz"),
            o = n("hsuC"),
            s = n("MM6n"),
            u = n("MWSW"),
            d = n("UuTC"),
            c = n("aV4z"),
            p = n("sL0h"),
            g = n("cAdi"),
            m = n("u6oA"),
            f = n("VK1X"),
            h = n("ZdDq");
        let _ = [a, r, l, o, s, u, d, c, p, g, m, f, n("mOOp"), h, n("Wmm1"), n("iXo5"), n("clRy"), n("C1cw"), n("dRs8"), n("orzE"), n("vTvp"), n("nu7J"), n("TF6s"), n("YezP"), n("jGMn")].map(e => `data:image/svg+xml,${encodeURIComponent(e)}`);
        n.d(t, {}, {
            a: function(e) {
                let t = (0, i.Di)(e) ? e.replace(/^plugins~/, "") : e,
                    n = 0;
                for (let e = 0; e < t.length; e += 1) n = (31 * n + t.charCodeAt(e)) % _.length;
                return _[n] ?? ""
            }
        })
    }),
    tlx5: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t) {
                null == t || null != e && (e.defaultPrevented || 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) || (e?.preventDefault(), t())
            }
        })
    }),
    v70x: (function(e, t, n) {
        var i = n("QosV"),
            a = n("zPtR"),
            r = n("bTvG"),
            l = n("iRMi"),
            o = n("mfKi"),
            s = n("CjTC"),
            u = n("zd8w"),
            d = n("rEML"),
            c = n("ASxG"),
            p = n("yGJW"),
            g = n("oom3"),
            m = n("OMIV"),
            f = n("WFY2"),
            h = n("xWQV");
        let _ = new WeakSet,
            v = new WeakMap,
            b = ["account_selector", "callback_path", "prompt", "q", "query", "search", "snapshot"];

        function y(e) {
            switch (e) {
                case l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE:
                    return "CHATGPT_APP_PAGE_NAME_APP_WORKSPACE";
                case l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY:
                case l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY:
                case l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL:
                case l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH:
                    return "CHATGPT_APP_PAGE_NAME_APP_DIRECTORY";
                case l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED:
                case l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DEEP_LINK:
                case l.CodexPluginPageReferrer.UNRECOGNIZED:
                    return "CHATGPT_APP_PAGE_NAME_UNSPECIFIED"
            }
        }

        function I(e) {
            let t = window.location.hash.indexOf("?"),
                n = t < 0 ? "" : window.location.hash.slice(t + 1),
                i = [new URLSearchParams(window.location.search).get("referrer"), new URLSearchParams(n).get("referrer"), v.get(e), document.referrer].map(C).find(e => null != e),
                a = C(window.location.href);
            return null != a && v.set(e, a), i
        }

        function C(e) {
            if (!e) return;
            if (/^[a-zA-Z0-9_-]{1,128}$/.test(e)) return e;
            let t = (0, a.f)(e, b);
            if (null != t) try {
                let e = new URL(t);
                return "https:" === e.protocol || "http:" === e.protocol || "app:" === e.protocol && "-" === e.hostname ? t : void 0
            } catch {
                return
            }
        }
        let E = c.object({
            pluginDirectoryEntrypoint: c.union([c.literal(l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT), c.literal(l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS), c.literal(l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR), c.literal(l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER)]).optional()
        }).loose();

        function P(e) {
            let {
                categoryKey: t,
                directoryTab: n,
                isGlobalSearch: i,
                searchQuery: a
            } = e;
            if ("" !== a) return {
                pageName: l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH,
                source: i ? l.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER : w(n)
            };
            if (null != t) return {
                pageName: l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY,
                source: w(n)
            };
            switch (n) {
                case "openai":
                    return {
                        pageName: l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY, source: l.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED
                    };
                case "workspace":
                    return {
                        pageName: l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE, source: l.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE
                    };
                case "personal":
                    return {
                        pageName: l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL, source: l.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL
                    }
            }
        }

        function A(e) {
            let {
                canonicalCategoryIds: t,
                directoryTab: n,
                selectedCategoryTitle: i
            } = e;
            if ("openai" !== n || null == i) return;
            let a = i.trim().toLowerCase().replaceAll("-", " ");
            if ("" !== a) return t.find(e => e.trim().toLowerCase().replaceAll("-", " ") === a)
        }

        function w(e) {
            switch (e) {
                case "openai":
                    return l.CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED;
                case "workspace":
                    return l.CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE;
                case "personal":
                    return l.CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL
            }
        }

        function T(e) {
            switch (e) {
                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY:
                    return l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY;
                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY:
                    return l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY;
                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE:
                    return l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE;
                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL:
                    return l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL;
                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH:
                    return l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH;
                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED:
                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS:
                case l.CodexPluginPageName.UNRECOGNIZED:
                    return l.CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED
            }
        }
        n.d(t, {
            a: () => A,
            b: () => P,
            c: () => s.a
        }, {
            d: function(e, t) {
                let {
                    action: n,
                    chatgpt: i,
                    connectorId: a,
                    errorType: r,
                    installAttemptId: l,
                    plugin: u,
                    result: d,
                    source: c,
                    sourceAttributionId: g,
                    suggestionId: m,
                    surface: f,
                    voiceSessionId: _
                } = t;
                if ((0, h.d)(e, i, {
                        action: n,
                        connectorId: a,
                        errorType: r,
                        installAttemptId: l,
                        pluginId: (0, s.a)(u) ?? u.id,
                        result: d,
                        sourceAttributionId: g,
                        suggestionId: m,
                        voiceSessionId: _
                    })) return;
                let v = n === o.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_INSTALL && d === o.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED;
                (0, p.a)(e, o.CodexPluginAction, {
                    action: n,
                    connectorId: a,
                    errorType: r,
                    installAttemptId: l,
                    pluginId: u.id,
                    voiceSessionId: v ? _ : void 0,
                    remotePluginId: (0, s.a)(u),
                    result: d,
                    source: c,
                    ...v && void 0 !== g ? {
                        sourceAttributionId: g
                    } : {},
                    suggestionId: m,
                    surface: f
                })
            },
            e: function(e, t) {
                let {
                    categoryId: n,
                    plugin: i,
                    position: a,
                    sectionId: r,
                    source: o,
                    surface: u,
                    target: d
                } = t;
                (0, p.a)(e, l.CodexPluginClick, {
                    categoryId: n,
                    pluginId: i.id,
                    position: a,
                    remotePluginId: (0, s.a)(i),
                    sectionId: r,
                    source: o,
                    surface: u,
                    target: d
                })
            },
            f: function(e, t) {
                let {
                    placement: n,
                    pluginId: i,
                    remotePluginId: a,
                    source: r
                } = t;
                (0, p.a)(e, l.CodexPluginClick, {
                    categoryId: n?.kind === "category" ? n.categoryId : void 0,
                    pluginId: i,
                    position: n?.position,
                    remotePluginId: a,
                    sectionId: n?.kind === "home" ? n.sectionId : void 0,
                    source: r,
                    surface: l.CodexPluginMarketplaceSurface.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
                    target: l.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_PLUGIN_ROW
                })
            },
            g: function(e) {
                let t, n, a, o, d = (0, i.c)(26),
                    {
                        scope: c,
                        enabled: g,
                        navigationKey: f,
                        navigationStartedAtMs: h,
                        plugin: v,
                        referrer: b,
                        source: C
                    } = e,
                    E = void 0 === g || g,
                    P = (0, u.useRef)(null),
                    A = (0, u.useRef)(null),
                    w = v?.summary.id,
                    T = v?.summary ?? null;
                d[0] !== T ? (t = (0, s.a)(T), d[0] = T, d[1] = t) : t = d[1];
                let k = t;
                d[2] !== v || d[3] !== w || d[4] !== b || d[5] !== k || d[6] !== c || d[7] !== C ? (n = (e, t, n) => {
                    (0, p.a)(c, l.CodexPluginPageView, {
                        enabled: v?.summary.enabled,
                        installed: v?.summary.installed,
                        marketplaceName: v?.marketplaceName,
                        pageName: l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS,
                        pluginId: w,
                        pluginSourceType: v?.summary.source.type,
                        referrer: b,
                        remotePluginId: k,
                        source: C
                    });
                    let i = I(c);
                    k && (0, p.a)(c, r.i, {
                        connectorId: k,
                        name: "CHATGPT_APP_PAGE_NAME_APP_DETAILS",
                        referrer: y(b),
                        referrerUrl: i
                    }), (0, p.a)(c, l.CodexPluginDetailPageLoaded, {
                        isFirstVisit: t,
                        newAppLifecycleEnabled: n,
                        loadDurationMs: Math.max(0, Math.round(performance.now() - e))
                    })
                }, d[2] = v, d[3] = w, d[4] = b, d[5] = k, d[6] = c, d[7] = C, d[8] = n) : n = d[8];
                let S = (0, u.useEffectEvent)(n);
                d[9] !== E || d[10] !== S || d[11] !== f || d[12] !== h || d[13] !== w || d[14] !== k || d[15] !== c ? (a = () => {
                    if (!E) return;
                    if (A.current?.navigationKey !== f) {
                        let e = !_.has(c);
                        _.add(c), A.current = {
                            isFirstVisit: e,
                            navigationKey: f,
                            newAppLifecycleEnabled: (0, m.b)(c, "403472035"),
                            startedAtMs: h ?? performance.now()
                        }
                    }
                    if (null == w) return;
                    let e = `${f}\0${w}\0${k??""}`;
                    if (P.current === e) return;
                    let {
                        isFirstVisit: t,
                        startedAtMs: n
                    } = A.current;
                    P.current = e, S(n, t, A.current.newAppLifecycleEnabled)
                }, d[9] = E, d[10] = S, d[11] = f, d[12] = h, d[13] = w, d[14] = k, d[15] = c, d[16] = a) : a = d[16], d[17] !== E || d[18] !== f || d[19] !== h || d[20] !== w || d[21] !== b || d[22] !== k || d[23] !== c || d[24] !== C ? (o = [E, f, h, w, b, k, c, C], d[17] = E, d[18] = f, d[19] = h, d[20] = w, d[21] = b, d[22] = k, d[23] = c, d[24] = C, d[25] = o) : o = d[25], (0, u.useEffect)(a, o)
            },
            h: function(e) {
                let t, n, a, o, s, d, c, g = (0, i.c)(33),
                    {
                        scope: m,
                        categoryId: f,
                        enabled: h,
                        entrypoint: _,
                        pageName: b,
                        searchQuery: C,
                        source: E
                    } = e,
                    P = (0, u.useRef)(!1),
                    A = (0, u.useRef)(null),
                    w = (0, u.useRef)(l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED),
                    k = (0, u.useRef)("CHATGPT_APP_PAGE_NAME_UNSPECIFIED"),
                    S = (0, u.useRef)("");
                g[0] !== _ || g[1] !== m ? (t = () => {
                    (0, p.a)(m, l.CodexPluginDirectoryImpression, {
                        entrypoint: _
                    }), (0, p.a)(m, r.g, {
                        entrypoint: function(e) {
                            switch (e) {
                                case l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_SETTINGS";
                                case l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_SIDEBAR";
                                case l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_UNSPECIFIED:
                                case l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT:
                                case l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER:
                                case l.CodexPluginDirectoryEntrypoint.UNRECOGNIZED:
                                    return "CHATGPT_APP_DIRECTORY_ENTRYPOINT_UNSPECIFIED"
                            }
                        }(_)
                    })
                }, g[0] = _, g[1] = m, g[2] = t) : t = g[2];
                let N = (0, u.useEffectEvent)(t);
                g[3] !== f || g[4] !== b || g[5] !== m || g[6] !== E ? (n = e => {
                    (0, p.a)(m, l.CodexPluginPageView, {
                        ...b === l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY && null != f ? {
                            categoryId: f
                        } : {},
                        pageName: b,
                        referrer: e,
                        source: E
                    });
                    let t = I(m),
                        n = function(e) {
                            switch (e) {
                                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE:
                                    return "CHATGPT_APP_PAGE_NAME_APP_WORKSPACE";
                                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS:
                                    return "CHATGPT_APP_PAGE_NAME_APP_DETAILS";
                                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY:
                                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY:
                                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL:
                                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH:
                                    return "CHATGPT_APP_PAGE_NAME_APP_DIRECTORY";
                                case l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED:
                                case l.CodexPluginPageName.UNRECOGNIZED:
                                    return "CHATGPT_APP_PAGE_NAME_UNSPECIFIED"
                            }
                        }(b);
                    k.current !== n && ((0, p.a)(m, r.i, {
                        name: n,
                        referrer: y(e),
                        referrerUrl: t
                    }), k.current = n)
                }, g[3] = f, g[4] = b, g[5] = m, g[6] = E, g[7] = n) : n = g[7];
                let R = (0, u.useEffectEvent)(n);
                g[8] !== m || g[9] !== E ? (a = () => {
                    (0, p.a)(m, l.CodexPluginClick, {
                        source: E,
                        target: l.CodexPluginClickTarget.CODEX_PLUGIN_CLICK_TARGET_SUBMIT_SEARCH
                    })
                }, g[8] = m, g[9] = E, g[10] = a) : a = g[10];
                let M = (0, u.useEffectEvent)(a);
                g[11] !== f || g[12] !== h || g[13] !== N || g[14] !== R || g[15] !== b || g[16] !== m || g[17] !== E ? (o = () => {
                    if (!h) {
                        P.current = !1, A.current = null, w.current = l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED, k.current = "CHATGPT_APP_PAGE_NAME_UNSPECIFIED", v.delete(m);
                        return
                    }
                    P.current || (P.current = !0, N());
                    let e = b === l.CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY ? f ?? "" : "",
                        t = `${b}\0${E}\0${e}`;
                    A.current !== t && (R(T(w.current)), A.current = t, w.current = b)
                }, g[11] = f, g[12] = h, g[13] = N, g[14] = R, g[15] = b, g[16] = m, g[17] = E, g[18] = o) : o = g[18], g[19] !== f || g[20] !== h || g[21] !== _ || g[22] !== b || g[23] !== m || g[24] !== E ? (s = [f, h, _, b, m, E], g[19] = f, g[20] = h, g[21] = _, g[22] = b, g[23] = m, g[24] = E, g[25] = s) : s = g[25], (0, u.useEffect)(o, s), g[26] !== h || g[27] !== M || g[28] !== C ? (d = () => {
                    if (!h || "" === C) {
                        S.current = "";
                        return
                    }
                    let e = setTimeout(() => {
                        S.current !== C && (M(), S.current = C)
                    }, 1500);
                    return () => {
                        clearTimeout(e)
                    }
                }, g[26] = h, g[27] = M, g[28] = C, g[29] = d) : d = g[29], g[30] !== h || g[31] !== C ? (c = [h, C], g[30] = h, g[31] = C, g[32] = c) : c = g[32], (0, u.useEffect)(d, c)
            },
            i: function(e) {
                let t, n, a, r, o, s, u, c, p, m, f = (0, i.c)(27);
                f[0] !== e ? (t = void 0 === e ? {} : e, f[0] = e, f[1] = t) : t = f[1];
                let {
                    directoryTab: h
                } = t, _ = (0, d.X)();
                if (f[2] !== h || f[3] !== _.key || f[4] !== _.search || f[5] !== _.state) {
                    let e = new URLSearchParams(_.search),
                        t = e.get(g.a),
                        i = h ?? "openai";
                    null == h && ("workspace" === t || "teams" === t ? i = "workspace" : "personal" === t && (i = "personal"));
                    let d = e.get("category"),
                        {
                            pageName: m,
                            source: v
                        } = P({
                            categoryKey: d,
                            directoryTab: i,
                            isGlobalSearch: !0,
                            searchQuery: a = (n = e.get("search") ?? "").trim().toLowerCase()
                        });
                    r = v, o = d, s = i, f[14] !== _.key || f[15] !== _.state ? (u = function(e) {
                        let {
                            explicitEntrypoint: t,
                            locationKey: n,
                            locationState: i
                        } = e;
                        if (null != t) return t;
                        let a = E.safeParse(i);
                        return a.success && null != a.data.pluginDirectoryEntrypoint ? a.data.pluginDirectoryEntrypoint : "default" === n ? l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT : l.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER
                    }({
                        locationKey: _.key,
                        locationState: _.state
                    }), f[14] = _.key, f[15] = _.state, f[16] = u) : u = f[16], c = m, p = T(m), f[2] = h, f[3] = _.key, f[4] = _.search, f[5] = _.state, f[6] = n, f[7] = a, f[8] = r, f[9] = o, f[10] = s, f[11] = u, f[12] = c, f[13] = p
                } else n = f[6], a = f[7], r = f[8], o = f[9], s = f[10], u = f[11], c = f[12], p = f[13];
                return f[17] !== _.key || f[18] !== n || f[19] !== a || f[20] !== r || f[21] !== o || f[22] !== s || f[23] !== u || f[24] !== c || f[25] !== p ? (m = {
                    categoryKey: o,
                    directoryTab: s,
                    entrypoint: u,
                    pageName: c,
                    referrer: p,
                    routeKey: _.key,
                    searchQuery: n,
                    searchQueryNormalized: a,
                    source: r
                }, f[17] = _.key, f[18] = n, f[19] = a, f[20] = r, f[21] = o, f[22] = s, f[23] = u, f[24] = c, f[25] = p, f[26] = m) : m = f[26], m
            },
            j: function(e) {
                let t, n, a, r = (0, i.c)(13),
                    {
                        scope: o,
                        hasResults: s,
                        isReady: d,
                        searchQuery: c,
                        startedAtMs: g
                    } = e,
                    m = (0, u.useRef)(""),
                    h = (0, u.useRef)(null);
                r[0] !== o ? (t = (e, t) => {
                    try {
                        (0, p.a)(o, l.CodexPluginSearchResultsLoaded, {
                            hasResults: e,
                            searchDurationMs: t
                        })
                    } catch (e) {
                        f.a.error("Failed to log plugin search latency analytics", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    }
                }, r[0] = o, r[1] = t) : t = r[1];
                let _ = (0, u.useEffectEvent)(t);
                r[2] !== s || r[3] !== d || r[4] !== _ || r[5] !== c || r[6] !== g ? (n = () => {
                    if ("" === c) {
                        m.current = "", h.current = null;
                        return
                    }
                    if (m.current === c) return;
                    h.current?.query !== c && (h.current = {
                        hasResults: null,
                        query: c,
                        readyAtMs: null,
                        startedAtMs: g ?? performance.now()
                    });
                    let e = h.current;
                    d && null == e.readyAtMs && (e.hasResults = s, e.readyAtMs = performance.now());
                    let {
                        hasResults: t,
                        readyAtMs: n
                    } = e;
                    if (null == t || null == n) return;
                    let i = setTimeout(() => {
                        h.current === e && (h.current = null, m.current = c, _(t, Math.max(0, Math.round(n - e.startedAtMs))))
                    }, Math.max(0, 1500 - (performance.now() - e.startedAtMs)));
                    return () => {
                        clearTimeout(i)
                    }
                }, r[2] = s, r[3] = d, r[4] = _, r[5] = c, r[6] = g, r[7] = n) : n = r[7], r[8] !== s || r[9] !== d || r[10] !== c || r[11] !== g ? (a = [s, d, c, g], r[8] = s, r[9] = d, r[10] = c, r[11] = g, r[12] = a) : a = r[12], (0, u.useEffect)(n, a)
            }
        })
    }),
    IVVU: (function(e, t, n) {
        var i = n("Q840"),
            a = n("Zqzr"),
            r = n("CjTC"),
            l = n("ASxG"),
            o = n("OWtl"),
            s = n("GkpV"),
            u = n("JYRT"),
            d = n("jBHQ");
        let c = "1349514884",
            p = l.object({
                mention_surfaces_by_plugin_id: l.record(l.string(), l.array(l.string().min(1)).nullable().catch(null))
            }),
            g = l.object({
                hidden_plugin_ids: l.array(l.string()).default([])
            }).catch({
                hidden_plugin_ids: []
            });

        function m(e) {
            return {
                hiddenPluginIds: g.parse(e).hidden_plugin_ids
            }
        }
        let f = (0, i.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return t(s.b) ? [] : [a.mb]
            }),
            h = (0, i.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return t(d.a, s.a) ? [] : [a.mb]
            }),
            _ = (0, i.c)(o.a, e => {
                let {
                    get: t
                } = e, {
                    hiddenPluginIds: n
                } = m(t(u.a, c)?.value);
                return {
                    hiddenPluginIds: [...n, ...t(f)]
                }
            }),
            v = (0, i.c)(o.a, e => {
                let {
                    get: t
                } = e, n = t(u.a, c)?.value, i = p.safeParse(n), a = new Map;
                for (let [e, t] of Object.entries(i.data?.mention_surfaces_by_plugin_id ?? {})) null != t && a.set(e, t);
                return a
            });
        n.d(t, {}, {
            a: f,
            b: h,
            c: function(e, t) {
                return t.has(e.id) || null != e.requestedId && t.has(e.requestedId) || "GLOBAL" === e.scope && "LISTED" === e.discoverability && null != e.name && t.has(`${e.name}@${a._c}`)
            },
            d: function(e, t, n) {
                let {
                    plugin: i
                } = e, a = (0, r.a)(i) ?? i.id;
                return n.get(a)?.includes(t) ?? !0
            },
            e: m,
            f: v,
            g: _
        })
    }),
    H7Ld: (function(e, t, n) {
        var i = n("YWcr"),
            a = n("MX6A");
        n.d(t, {}, {
            a: "deep-research-workflow@openai-curated-remote",
            b: function(e) {
                let {
                    defaultPrompt: t,
                    pluginDisplayName: n,
                    pluginId: r
                } = e, l = `[@${n}](${(0,a.a)((0,i.w)(r))})`;
                return `${l} ${t?.trim()??""}`
            },
            c: function(e) {
                return e?.map(e => e.trim()).find(e => e.length > 0) ?? null
            }
        })
    }),
    C0re: (function(e, t, n) {
        var i = n("Zqzr");
        let a = ["plugins"];

        function r(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return [...a, "host", e, ...n]
        }

        function l(e) {
            return "local" === e || e === i.Xb
        }
        async function o(e, t) {
            let n = {
                queryKey: t
            };
            await e.cancelQueries(n), await e.invalidateQueries(n, {
                cancelRefetch: !1
            })
        }
        n.d(t, {}, {
            a: a,
            b: r,
            c: function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                return [...a, "directory", e, ...n]
            },
            d: function(e, t) {
                return l(e) ? [...a, t, e] : r(e, t)
            },
            e: function(e, t) {
                return o(e, r(t))
            },
            f: l,
            g: o
        })
    }),
    M3gf: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("Dgwo"),
            r = n("WFY2");
        n.d(t, {}, {
            a: async function(e, t, n) {
                try {
                    let l = await (0, a.b)(e, t).sendRequest("marketplace/add", n);
                    return r.a.info("plugin_marketplace_add_succeeded", {
                        safe: {
                            ...(0, i.Fg)(n),
                            alreadyAdded: l.alreadyAdded,
                            marketplaceName: l.marketplaceName
                        },
                        sensitive: (0, i.Gg)(n)
                    }), l
                } catch (e) {
                    throw r.a.warning("plugin_marketplace_add_failed", {
                        safe: (0, i.Fg)(n),
                        sensitive: {
                            ...(0, i.Gg)(n),
                            error: e
                        }
                    }), e
                }
            },
            b: async function(e, t, n) {
                r.a.info("plugin_install_started", {
                    safe: (0, i.Vg)(n),
                    sensitive: {
                        hostId: t,
                        ...(0, i.Wg)(n)
                    }
                });
                try {
                    let l = await (0, a.b)(e, t).sendRequest("plugin/install", n);
                    return r.a.info("plugin_install_succeeded", {
                        safe: (0, i.Vg)(n),
                        sensitive: {
                            hostId: t,
                            ...(0, i.Wg)(n)
                        }
                    }), l
                } catch (e) {
                    throw r.a.warning("plugin_install_failed", {
                        safe: {
                            ...(0, i.Vg)(n),
                            errorCategory: (0, i.Ug)(e)
                        },
                        sensitive: {
                            ...(0, i.Wg)(n),
                            hostId: t,
                            error: e
                        }
                    }), e
                }
            },
            c: async function(e, t, n) {
                try {
                    let i = await (0, a.b)(e, t).sendRequest("plugin/uninstall", n);
                    return r.a.info("plugin_uninstall_succeeded", {
                        safe: {
                            pluginId: n.pluginId
                        },
                        sensitive: {}
                    }), i
                } catch (e) {
                    throw r.a.warning("plugin_uninstall_failed", {
                        safe: {
                            pluginId: n.pluginId
                        },
                        sensitive: {
                            error: e
                        }
                    }), e
                }
            }
        })
    }),
    WzdM: (function(e, t, n) {
        var i = n("oo2L");
        n.d(t, {}, {
            a: function(e) {
                return e.release.display_name.trim() || e.name
            },
            b: function(e) {
                return {
                    [i.b]: ({
                        catalog: "CONNECTOR_SETTING",
                        chatgpt: "PROMPT_TEXT_AREA",
                        codex: "CODEX",
                        tpp: "TPP"
                    })[e ?? "catalog"]
                }
            }
        })
    }),
    ugfi: (function(e, t, n) {
        var i = n("QosV"),
            a = n("mfKi"),
            r = n("irkb"),
            l = n("xSOA"),
            o = n("Q840"),
            s = n("ZGX8"),
            u = n("Qgfj"),
            d = n("Wf1j"),
            c = n("Dgwo"),
            p = n("HUHI"),
            g = n("uc7r"),
            m = n("OiCI"),
            f = n("THSC"),
            h = n("SGsN"),
            _ = n("C0re"),
            v = n("EEop"),
            b = n("vLsY"),
            y = n("a4MG"),
            I = n("sLlu"),
            C = n("OWtl"),
            E = n("oiUH"),
            P = n("kfGJ"),
            A = n("bPa2"),
            w = n("WFY2"),
            T = n("HFSu"),
            k = n("OF5O"),
            S = n("p84t"),
            N = n("H0Gm"),
            R = n("md5w"),
            M = n("v70x"),
            O = n("M3gf"),
            L = n("WzdM"),
            D = n("PmQd"),
            x = n("jShI"),
            U = n("cLdu"),
            G = n("ueue");
        let q = ["user-saved-config"],
            F = (0, u.f)({
                enabledSuccess: {
                    id: "plugins.card.enableSuccess",
                    defaultMessage: "{pluginName} plugin enabled"
                },
                disabledSuccess: {
                    id: "plugins.card.disableSuccess",
                    defaultMessage: "{pluginName} plugin disabled"
                },
                toggleError: {
                    id: "plugins.card.toggleError",
                    defaultMessage: "Failed to update plugin"
                },
                uninstallSuccess: {
                    id: "plugins.card.uninstallSuccess",
                    defaultMessage: "{pluginName} plugin uninstalled"
                },
                uninstallError: {
                    id: "plugins.card.uninstallError",
                    defaultMessage: "Failed to uninstall plugin"
                },
                marketplacesUpgradeSuccess: {
                    id: "plugins.marketplace.upgradeAllSuccess",
                    defaultMessage: "Marketplaces upgraded"
                },
                marketplaceUpgradeSuccess: {
                    id: "plugins.marketplace.upgradeSuccess",
                    defaultMessage: "{marketplaceName} marketplace upgraded"
                },
                marketplacesUpgradeError: {
                    id: "plugins.marketplace.upgradeAllError",
                    defaultMessage: "Some marketplaces failed to upgrade"
                },
                marketplaceUpgradeError: {
                    id: "plugins.marketplace.upgradeError",
                    defaultMessage: "Failed to upgrade marketplace"
                },
                marketplacesUpgradeRequestError: {
                    id: "plugins.marketplace.upgradeAllRequestError",
                    defaultMessage: "Failed to upgrade marketplaces"
                },
                skillCatalogReloadError: {
                    id: "plugins.skillCatalog.reloadError",
                    defaultMessage: "Plugin changed, but skills couldn't refresh. Reload skills before starting a new chat"
                }
            });

        function K(e) {
            w.a.error("Failed to refresh plugins after updating enabled state", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function H(e) {
            var t;
            let [n, i] = e;
            return null != (t = i) && "object" == typeof t && "plugins" in t && Array.isArray(t.plugins) ? [
                [n, i]
            ] : []
        }

        function B(e) {
            w.a.error("Failed to refresh plugins after plugin uninstall", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function j(e, t, n, i) {
            let a = (0, U.i)(t);
            a && null == i || (e.setQueriesData({
                queryKey: [...(0, _.d)(t, "installed"), ...a ? ["hosted", i] : []]
            }, e => e?.some(e => e.plugin.id === n) ? e.filter(e => e.plugin.id !== n) : e), a || (e.setQueriesData({
                queryKey: (0, _.b)(t, "marketplace-kind")
            }, e => null == e ? e : z(e, n)), e.setQueriesData({
                queryKey: (0, _.b)(t, "list")
            }, e => {
                if (null == e) return e;
                let t = z(e.plugins, n);
                return t === e.plugins ? e : {
                    ...e,
                    plugins: t
                }
            })), e.setQueriesData({
                queryKey: (0, v.i)(t, i)
            }, e => null != e && e.summary.id === n && (e.summary.installed || e.summary.enabled) ? {
                ...e,
                summary: {
                    ...e.summary,
                    enabled: !1,
                    installed: !1
                }
            } : e))
        }

        function z(e, t) {
            return e.some(e => e.plugin.id === t && (e.plugin.installed || e.plugin.enabled)) ? e.map(e => e.plugin.id === t ? {
                ...e,
                plugin: {
                    ...e.plugin,
                    enabled: !1,
                    installed: !1
                }
            } : e) : e
        }
        async function W(e) {
            let {
                scope: t,
                hostId: n,
                intl: i,
                queryClient: a
            } = e;
            try {
                await (0, x.b)({
                    scope: t,
                    hostId: n,
                    queryClient: a
                })
            } catch (r) {
                w.a.error("plugin_skill_catalog_reload_failed_after_mutation", {
                    safe: {
                        hostId: n
                    },
                    sensitive: {
                        error: r
                    }
                });
                let e = t.get(h.f).warning(i.formatMessage(F.skillCatalogReloadError), {
                    duration: 0,
                    primaryAction: {
                        label: i.formatMessage({
                            id: "skills.page.refreshSkills",
                            defaultMessage: "Refresh"
                        }),
                        onClick: async () => {
                            e.close(), await Promise.all([W({
                                scope: t,
                                hostId: n,
                                intl: i,
                                queryClient: a
                            }), Y(a, n), (0, I.a)(a, p.a)])
                        }
                    }
                })
            }
        }
        async function V(e, t, n, i) {
            await Promise.all([(0, I.a)(e, g.a), Y(e, t, null != i && i !== n)])
        }
        async function Y(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = (0, U.i)(t);
            await Promise.all([(0, D.b)(e, i || n ? "account" : {
                hostId: t
            }), ...Q(i).map(t => (0, I.a)(e, t))])
        }

        function Q(e) {
            return [p.b, ["chatgpt-system-hints", "plugins"], ...e ? [] : [y.e, A.a, E.a, f.a, y.f, q]]
        }
        n.d(t, {}, {
            a: async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                await Promise.all([G.a, ...Q(t)].map(e))
            },
            b: async function(e) {
                let {
                    scope: t,
                    disableBundledAutoInstall: n = !0,
                    hostId: i,
                    marketplaceName: a,
                    pluginId: r,
                    pluginName: l,
                    queryClient: o,
                    requestPluginId: u,
                    signal: d
                } = e;
                d?.throwIfAborted();
                let c = (0, N.c)(t, {
                        hostId: i,
                        pluginId: r
                    }),
                    g = (0, U.i)(i),
                    f = t.get(m.d) ?? void 0,
                    h = g ? f : void 0;
                try {
                    let e = (0, s.a)(r);
                    if (!g && n && null != e && await (0, k.a)(t, e, !0), d?.throwIfAborted(), g) {
                        if (null == h) throw Error("Plugin account changed before uninstalling plugin");
                        await T.CodexRequest.safePost("/ps/plugins/{plugin_id}/uninstall", {
                            surface: "other",
                            parameters: {
                                path: {
                                    plugin_id: u ?? r
                                }
                            },
                            additionalHeaders: (0, L.b)()
                        }), j(o, i, r, h);
                        return
                    }
                    await (0, O.c)(t, i, {
                        pluginId: u ?? r
                    }), j(o, i, r);
                    let c = (0, p.g)(i, (0, m.c)(t));
                    o.cancelQueries({
                        queryKey: c
                    }).then(() => (0, p.k)({
                        scope: t,
                        accountId: (0, m.c)(t),
                        hostId: i,
                        queryClient: o
                    })).finally(() => (0, b.a)(c)).catch(e => {
                        o.invalidateQueries({
                            queryKey: c,
                            refetchType: "none"
                        }), w.a.error("Failed to refresh apps after plugin uninstall", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    }), await Promise.all([(0, x.b)({
                        scope: t,
                        hostId: i,
                        queryClient: o
                    }).catch(e => {
                        w.a.error("plugin_skill_catalog_reload_failed_after_mutation", {
                            safe: {
                                hostId: i
                            },
                            sensitive: {
                                error: e
                            }
                        })
                    }), (0, S.b)({
                        hostId: i,
                        marketplaceName: a,
                        pluginName: l
                    })])
                } finally {
                    (0, N.a)(t, c), V(o, i, r, u)
                }
            },
            c: function(e) {
                let t, n, u, c, g, f, _, v, y, I, E = (0, i.c)(36),
                    A = e?.hostId ?? P.a;
                E[0] !== A ? (t = (0, U.i)(A), E[0] = A, E[1] = t) : t = E[1];
                let R = t,
                    D = (0, o.y)(C.a),
                    x = (0, o.z)(m.a),
                    G = (0, r.c)(),
                    q = (0, d.a)(),
                    K = x ?? void 0;
                E[2] !== A || E[3] !== K ? (n = (0, p.g)(A, K), E[2] = A, E[3] = K, E[4] = n) : n = E[4];
                let H = n;
                E[5] !== H || E[6] !== A || E[7] !== R || E[8] !== q || E[9] !== G || E[10] !== D ? (u = async e => {
                    let {
                        marketplaceName: t,
                        pluginId: n,
                        pluginName: i,
                        requestPluginId: a,
                        accountId: r
                    } = e, l = D.get(m.d) ?? void 0, o = (0, s.a)(n);
                    if (R || null == o || await (0, k.a)(D, o, !0), R) {
                        if (null == r || l !== r) throw Error("Plugin account changed before uninstalling plugin");
                        await T.CodexRequest.safePost("/ps/plugins/{plugin_id}/uninstall", {
                            surface: "other",
                            parameters: {
                                path: {
                                    plugin_id: a ?? n
                                }
                            },
                            additionalHeaders: (0, L.b)()
                        }), j(G, A, n, r);
                        return
                    }
                    await (0, O.c)(D, A, {
                        pluginId: a ?? n
                    }), j(G, A, n);
                    let u = W({
                        scope: D,
                        hostId: A,
                        intl: q,
                        queryClient: G
                    });
                    G.cancelQueries({
                        queryKey: H
                    }).then(() => (0, p.k)({
                        scope: D,
                        accountId: (0, m.c)(D),
                        hostId: A,
                        queryClient: G
                    })).finally(() => (0, b.a)(H)).catch(e => {
                        G.invalidateQueries({
                            queryKey: H,
                            refetchType: "none"
                        }), w.a.error("Failed to refresh apps after plugin uninstall", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    }), await Promise.all([u, (0, S.b)({
                        hostId: A,
                        marketplaceName: t,
                        pluginName: i
                    })])
                }, E[5] = H, E[6] = A, E[7] = R, E[8] = q, E[9] = G, E[10] = D, E[11] = u) : u = E[11], E[12] !== A || E[13] !== D ? (c = e => {
                    let {
                        marketplaceAnalytics: t,
                        pluginId: n
                    } = e;
                    return null != t && (0, M.d)(D, {
                        action: a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        result: a.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                        ...t
                    }), {
                        operationId: (0, N.c)(D, {
                            hostId: A,
                            pluginId: n
                        })
                    }
                }, E[12] = A, E[13] = D, E[14] = c) : c = E[14], E[15] !== q || E[16] !== D ? (g = (e, t) => {
                    let {
                        marketplaceAnalytics: n,
                        pluginDisplayName: i
                    } = t;
                    null != n && (0, M.d)(D, {
                        action: a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        result: a.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                        ...n
                    }), D.get(h.f).success(q.formatMessage(F.uninstallSuccess, {
                        pluginName: i
                    }))
                }, f = (e, t) => {
                    let {
                        marketplaceAnalytics: n,
                        marketplaceName: i,
                        pluginId: r,
                        pluginName: l,
                        requestPluginId: o
                    } = t;
                    null != n && (0, M.d)(D, {
                        action: a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_REMOVE,
                        errorType: "request_failed",
                        result: a.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                        ...n
                    }), w.a.error("manual_plugin_uninstall_failed", {
                        safe: {
                            marketplaceName: i,
                            pluginId: o ?? r,
                            pluginName: l
                        },
                        sensitive: {
                            error: e
                        }
                    }), D.get(h.f).danger(q.formatMessage(F.uninstallError), {
                        errorAnalytics: {
                            toastId: "pluginsAvailability.onError.uninstallError"
                        }
                    })
                }, E[15] = q, E[16] = D, E[17] = g, E[18] = f) : (g = E[17], f = E[18]), E[19] !== A || E[20] !== G || E[21] !== D ? (_ = (e, t, n, i) => {
                    let {
                        pluginId: a,
                        requestPluginId: r,
                        accountId: l
                    } = n;
                    null != i && (0, N.a)(D, i.operationId), V(G, A, a, r).then(() => {
                        null == t && j(G, A, a, l)
                    }).catch(B)
                }, E[19] = A, E[20] = G, E[21] = D, E[22] = _) : _ = E[22], E[23] !== u || E[24] !== c || E[25] !== g || E[26] !== f || E[27] !== _ ? (v = {
                    mutationFn: u,
                    onMutate: c,
                    onSuccess: g,
                    onError: f,
                    onSettled: _
                }, E[23] = u, E[24] = c, E[25] = g, E[26] = f, E[27] = _, E[28] = v) : v = E[28];
                let z = (0, l.a)(v),
                    Y = z.isPending ? z.variables?.pluginId ?? null : null;
                return E[29] !== R || E[30] !== z || E[31] !== D ? (y = e => {
                    let t = D.get(m.d) ?? void 0;
                    return z.mutateAsync({
                        ...e,
                        accountId: R ? t : void 0
                    })
                }, E[29] = R, E[30] = z, E[31] = D, E[32] = y) : y = E[32], E[33] !== y || E[34] !== Y ? (I = {
                    pendingUninstallPluginId: Y,
                    uninstallPlugin: y
                }, E[33] = y, E[34] = Y, E[35] = I) : I = E[35], I
            },
            d: function(e) {
                let t, n, s, u, p, g, f, v, b, I = (0, i.c)(36),
                    E = e?.hostId ?? P.a;
                I[0] !== E ? (t = (0, U.i)(E), I[0] = E, I[1] = t) : t = I[1];
                let A = t,
                    k = (0, o.y)(C.a),
                    S = (0, r.c)(),
                    N = (0, d.a)();
                I[2] !== E || I[3] !== A || I[4] !== N || I[5] !== S || I[6] !== k ? (n = async e => {
                    let {
                        pluginId: t,
                        enabled: n,
                        plugin: i,
                        accountId: a,
                        changesPluginService: r
                    } = e, l = k.get(m.d) ?? void 0;
                    if (A && (null == a || l !== a)) throw Error("Plugin account changed before updating plugin");
                    if (r) {
                        if (await T.CodexRequest.safePost(n ? "/ps/plugins/{plugin_id}/enable" : "/ps/plugins/{plugin_id}/disable", {
                                surface: "other",
                                parameters: {
                                    path: {
                                        plugin_id: i?.remotePluginId ?? t
                                    }
                                },
                                additionalHeaders: (0, L.b)()
                            }), A) return
                    } else {
                        let e = await (0, y.m)(k, S, E);
                        await (0, c.b)(k, E).sendRequest("config/batchWrite", {
                            edits: (0, R.a)({
                                pluginId: t,
                                enabled: n
                            }),
                            filePath: e?.filePath ?? null,
                            expectedVersion: e?.expectedVersion ?? null,
                            reloadUserConfig: !0
                        })
                    }
                    await W({
                        scope: k,
                        hostId: E,
                        intl: N,
                        queryClient: S
                    })
                }, I[2] = E, I[3] = A, I[4] = N, I[5] = S, I[6] = k, I[7] = n) : n = I[7], I[8] !== E || I[9] !== A || I[10] !== S || I[11] !== k ? (s = async e => {
                    let {
                        pluginId: t,
                        enabled: n,
                        marketplaceAnalytics: i
                    } = e;
                    if (null != i && (0, M.d)(k, {
                            action: n ? a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                            result: a.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
                            ...i
                        }), A) return;
                    await Promise.all([S.cancelQueries({
                        queryKey: (0, _.b)(E, "list")
                    }), S.cancelQueries({
                        queryKey: y.f
                    })]);
                    let r = S.getQueryData(y.f),
                        l = S.getQueriesData({
                            queryKey: (0, _.b)(E, "list")
                        }).flatMap(H);
                    for (let [e, i] of l) S.setQueryData(e, function(e, t, n) {
                        return {
                            ...e,
                            plugins: e.plugins.map(e => e.plugin.id !== t || e.plugin.enabled === n ? e : {
                                ...e,
                                plugin: {
                                    ...e.plugin,
                                    enabled: n
                                }
                            })
                        }
                    }(i, t, n));
                    if (r) {
                        var o, s, u;
                        let e, i, a = {
                            ...r.config
                        };
                        o = r.config.plugins, s = t, u = n, i = (e = null == o || "object" != typeof o || Array.isArray(o) ? {} : o)[s], a.plugins = {
                            ...e,
                            [s]: null == i || "object" != typeof i || Array.isArray(i) ? {
                                enabled: u
                            } : {
                                ...i,
                                enabled: u
                            }
                        }, S.setQueryData(y.f, {
                            ...r,
                            config: a
                        })
                    }
                    return {
                        previousPluginLists: l,
                        previousUserConfig: r
                    }
                }, I[8] = E, I[9] = A, I[10] = S, I[11] = k, I[12] = s) : s = I[12], I[13] !== N || I[14] !== k ? (u = (e, t) => {
                    let {
                        enabled: n,
                        marketplaceAnalytics: i,
                        pluginDisplayName: r
                    } = t;
                    null != i && (0, M.d)(k, {
                        action: n ? a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                        result: a.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_SUCCESS,
                        ...i
                    }), k.get(h.f).success(N.formatMessage(n ? F.enabledSuccess : F.disabledSuccess, {
                        pluginName: r
                    }))
                }, I[13] = N, I[14] = k, I[15] = u) : u = I[15], I[16] !== N || I[17] !== S || I[18] !== k ? (p = (e, t, n) => {
                    let {
                        enabled: i,
                        marketplaceAnalytics: r
                    } = t;
                    for (let [t, l] of(null != r && (0, M.d)(k, {
                            action: i ? a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_ENABLE : a.CodexPluginActionType.CODEX_PLUGIN_ACTION_TYPE_DISABLE,
                            errorType: "request_failed",
                            result: a.CodexPluginActionResult.CODEX_PLUGIN_ACTION_RESULT_FAILURE,
                            ...r
                        }), w.a.error("Failed to update plugin enabled state", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        }), n?.previousUserConfig && S.setQueryData(y.f, n.previousUserConfig), n?.previousPluginLists ?? [])) S.setQueryData(t, l);
                    k.get(h.f).danger(N.formatMessage(F.toggleError), {
                        errorAnalytics: {
                            toastId: "pluginsAvailability.onError.toggleError"
                        }
                    })
                }, I[16] = N, I[17] = S, I[18] = k, I[19] = p) : p = I[19], I[20] !== E || I[21] !== S ? (g = (e, t, n) => {
                    let {
                        changesPluginService: i
                    } = n;
                    Y(S, E, i).catch(K)
                }, I[20] = E, I[21] = S, I[22] = g) : g = I[22], I[23] !== n || I[24] !== s || I[25] !== u || I[26] !== p || I[27] !== g ? (f = {
                    mutationFn: n,
                    onMutate: s,
                    onSuccess: u,
                    onError: p,
                    onSettled: g
                }, I[23] = n, I[24] = s, I[25] = u, I[26] = p, I[27] = g, I[28] = f) : f = I[28];
                let O = (0, l.a)(f),
                    D = O.isPending ? O.variables?.pluginId : null;
                return I[29] !== A || I[30] !== O || I[31] !== k ? (v = e => {
                    let t = k.get(m.d) ?? void 0,
                        n = e.plugin ?? e.marketplaceAnalytics?.plugin;
                    return O.mutateAsync({
                        ...e,
                        plugin: n,
                        changesPluginService: A || n?.source.type === "remote",
                        accountId: A ? t : void 0
                    })
                }, I[29] = A, I[30] = O, I[31] = k, I[32] = v) : v = I[32], I[33] !== D || I[34] !== v ? (b = {
                    pendingPluginId: D,
                    setPluginEnabled: v
                }, I[33] = D, I[34] = v, I[35] = b) : b = I[35], b
            }
        })
    }),
    SlNh: (function(e, t, n) {
        var i = n("nuXe"),
            a = n.n(i),
            r = n("Zqzr"),
            l = n("Haiv"),
            o = n("oszP"),
            s = n("ueue"),
            u = n("bnxy"),
            d = n("SaEY");
        let c = "/.agents/plugins/marketplace.json",
            p = "/marketplace.json",
            g = [`computer-use@${r.Yc}`, `${r.nc}@${r.Yc}`, `chrome@${r.Yc}`, `chrome-internal@${r.Yc}`, "spreadsheets@openai-primary-runtime", "presentations@openai-primary-runtime"];

        function m(e) {
            return e.trim().toLowerCase()
        }

        function f(e) {
            return (0, s.o)(e) ? "Built by OpenAI" : e
        }

        function h(e) {
            return e.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()
        }

        function _(e) {
            switch (m(e).replace(/[_-]+/g, " ")) {
                case "built by openai":
                    return 0;
                case "chatgpt official":
                    return 1;
                default:
                    return 2
            }
        }

        function v(e, t) {
            return e.sort((e, n) => {
                let i = b(e, t);
                if (i !== b(n, t)) return i ? -1 : 1;
                let a = (0, d.b)(e.plugin);
                return a !== (0, d.b)(n.plugin) ? a ? 1 : -1 : 0
            })
        }

        function b(e, t) {
            return t?.has(e.plugin.id) === !0 || null != e.plugin.remotePluginId && t?.has(e.plugin.remotePluginId) === !0
        }
        n.d(t, {}, {
            a: f,
            b: function(e) {
                return (0, s.o)(e.marketplaceName) || null != e.marketplaceDisplayName && (0, s.o)(e.marketplaceDisplayName)
            },
            c: function(e) {
                return e.find(e => e.plugin.name === r.nb && (0, r.ti)(e.marketplaceName)) ?? null
            },
            d: function(e) {
                let {
                    availablePlugins: t,
                    createdByMeRemotePlugins: n,
                    homeDirectory: i,
                    pluginShares: a,
                    storefrontPlugins: l
                } = e, u = t.find(e => (0, o.j)(i, e.marketplacePath)), d = null == u ? null : (0, s.i)(u), c = l.filter(e => null != d && (0, s.i)(e) === d), p = function(e, t, n) {
                    let i = new Set([...n.flatMap(e => {
                            let t = e.plugin.shareContext?.remotePluginId;
                            return null == t ? [] : [t]
                        }), ...t?.flatMap(e => {
                            let {
                                localPluginPath: t,
                                plugin: n
                            } = e;
                            if (null == t) return [];
                            if (null == n.remotePluginId) throw Error(`remote plugin share ${n.id} is missing remotePluginId`);
                            return [n.remotePluginId]
                        }) ?? []]),
                        a = [];
                    for (let t of e ?? []) {
                        let e = t.plugin.remotePluginId;
                        if (null == e) throw Error(`created by me remote plugin ${t.plugin.id} is missing remotePluginId`);
                        i.has(e) || (i.add(e), a.push(t))
                    }
                    if (null == t) return a;
                    for (let {
                            plugin: e
                        }
                        of t) {
                        let t = e.remotePluginId;
                        if (null == t) throw Error(`remote plugin share ${e.id} is missing remotePluginId`);
                        if (i.has(t)) continue;
                        let n = (0, r.Tg)(e.id);
                        if (null == n) throw Error(`remote plugin share ${e.id} is missing marketplace name`);
                        i.add(t), a.push({
                            ...(0, s.h)(e),
                            description: e.interface?.shortDescription ?? null,
                            displayName: e.interface?.displayName ?? null,
                            marketplaceDisplayName: null,
                            marketplaceName: n,
                            marketplacePath: null,
                            plugin: e,
                            keywords: e.keywords,
                            remoteMarketplaceName: n
                        })
                    }
                    return a
                }(n, a, c);
                return {
                    marketplaceFilterValue: d,
                    plugins: [...c, ...p]
                }
            },
            e: function(e) {
                return e.filter(e => e.plugin.installed && e.plugin.enabled && !(0, d.b)(e.plugin))
            },
            f: function(e) {
                let {
                    additionalSearchValues: t,
                    dedupeSearchResults: n = !1,
                    locale: i,
                    plugins: a,
                    marketplaceFilterValue: r = null,
                    query: o
                } = e, u = h(o), d = a.filter(e => (!(o.length > 0) || !!h([e.displayName ?? e.plugin.name, ...e.keywords ?? [], ...t?.(e) ?? []].join(" ")).includes(u)) && (null == r || (0, s.i)(e) === r && (e.marketplaceDisplayName?.trim() || e.marketplaceName).trim().length > 0)), c = n ? function(e) {
                    let t = new Map;
                    for (let n of e) {
                        let e = function(e) {
                                let t = e.plugin.remotePluginId ?? e.plugin.shareContext?.remotePluginId;
                                return null == t ? `plugin:${(0,s.i)(e)}:${e.plugin.id}` : `remote:${t}`
                            }(n),
                            i = t.get(e);
                        (null == i || !i.plugin.installed && n.plugin.installed) && t.set(e, n)
                    }
                    return Array.from(t.values())
                }(d) : d;
                if (null == i) return v(c);
                let p = new Intl.Collator(i, {
                    sensitivity: "base"
                });
                return c.sort((e, t) => p.compare((0, l.a)(e), (0, l.a)(t)))
            },
            g: function(e) {
                let t = new Set,
                    n = [];
                for (let i of e) {
                    let e = (0, s.i)(i),
                        a = i.marketplaceDisplayName?.trim() || i.marketplaceName;
                    0 !== a.trim().length && (t.has(e) || (t.add(e), n.push({
                        label: f(a),
                        subLabelSource: null == i.marketplacePath ? i.remoteMarketplaceName : function(e) {
                            let t = (0, u.r)(e).replace(/\/+$/, "");
                            return t.endsWith(c) ? t.slice(0, -c.length) : t.endsWith(p) ? t.slice(0, -p.length) : t
                        }(i.marketplacePath),
                        value: e
                    })))
                }
                let i = new Map,
                    a = new Map;
                for (let e of n) {
                    let t = a.get(e.label);
                    if (null == t) {
                        a.set(e.label, [e]);
                        continue
                    }
                    t.push(e)
                }
                for (let e of a.values()) {
                    if (e.length <= 1) continue;
                    let t = function(e) {
                        let t = e.map(e => (0, u.r)(e).replace(/\/+$/, "").split("/").filter(Boolean)),
                            n = Math.max(1, ...t.map(e => e.length));
                        for (let e = 1; e <= n; e++) {
                            let n = t.map(t => (function(e, t) {
                                let n = e.slice(-t).join("/");
                                return 0 === n.length ? "" : 1 === t ? n : e.length > t ? `.../${n}` : n
                            })(t, e));
                            if (new Set(n).size === n.length) return n
                        }
                        return e.map(e => (0, u.r)(e))
                    }(e.map(e => e.subLabelSource));
                    for (let [n, a] of e.entries()) i.set(a.value, t[n])
                }
                return n.sort((e, t) => {
                    let n = _(e.label) - _(t.label);
                    return 0 !== n ? n : e.label.localeCompare(t.label) || (i.get(e.value) ?? "").localeCompare(i.get(t.value) ?? "")
                }).map(e => ({
                    label: e.label,
                    subLabel: i.get(e.value) ?? null,
                    value: e.value
                }))
            },
            h: function(e) {
                let {
                    categoryOrder: t = [],
                    categorySections: n = [],
                    collapsedCategoryIds: i = [],
                    plugins: l,
                    connectedPlugins: o = l,
                    featuredPluginIds: s
                } = e, u = o.filter(e => e.plugin.installed).sort((e, t) => {
                    let n = (0, d.b)(e.plugin);
                    if (n !== (0, d.b)(t.plugin)) return n ? 1 : -1;
                    if (n) return 0;
                    let i = (0, r.ti)(e.marketplaceName) || e.marketplaceName === r.$c;
                    return i !== ((0, r.ti)(t.marketplaceName) || t.marketplaceName === r.$c) ? i ? 1 : -1 : e.plugin.installed !== t.plugin.installed ? e.plugin.installed ? 1 : -1 : 0
                }), c = null == s ? [] : function(e, t) {
                    let n = new Map(e.map(e => [e.plugin.id, e])),
                        i = [];
                    for (let e of t) {
                        let t = n.get(e);
                        null != t && i.push(t)
                    }
                    return i
                }(l, a()([...g, ...s])), p = new Set(i.map(m)), f = new Map;
                for (let e of n) {
                    let t = m(e.id);
                    if ("featured" === t) continue;
                    let n = f.get(t) ?? new Set;
                    for (let t of e.pluginIds) n.add(t);
                    f.set(t, n)
                }
                let h = new Map;
                for (let e of l) {
                    let t = e.plugin.interface?.category ?? "Other",
                        n = p.has(m(t)) ? "Other" : t,
                        i = h.get(n);
                    if (null == i) {
                        h.set(n, [e]);
                        continue
                    }
                    i.push(e)
                }
                let _ = new Map(t.map((e, t) => [m(e), t])),
                    y = Array.from(h.entries()).sort((e, n) => {
                        let [i] = e, [a] = n, r = _.get(m(i)) ?? t.length, l = _.get(m(a)) ?? t.length;
                        return r === l ? i.localeCompare(a) : r - l
                    }).map(e => {
                        let [t, n] = e, i = f.get(m(t));
                        return {
                            section: {
                                id: `plugins-${m(t).replaceAll(" ","-")}`,
                                title: t
                            },
                            plugins: v(n, i),
                            visibleItemLimit: null == i ? void 0 : n.filter(e => b(e, i)).length || void 0
                        }
                    });
                return [...u.length > 0 ? [{
                    section: {
                        id: "plugins-connected",
                        title: null
                    },
                    plugins: u
                }] : [], ...c.length > 0 ? [{
                    section: {
                        id: "plugins-featured",
                        title: "Featured"
                    },
                    plugins: c
                }] : [], ...y]
            },
            i: function(e) {
                return e.filter(e => {
                    let t = (0, r.Tg)(e.plugin.id);
                    return e.plugin.name !== r.nc || null == t || !(0, r.ti)(t)
                })
            },
            j: function(e, t, n) {
                if (0 === t.length && !n) return e;
                let i = new Set(t);
                return e.filter(e => (!n || !(0, s.q)(e.plugin.id)) && !i.has(e.plugin.id))
            }
        })
    }),
    CBsD: (function(e, t, n) {
        var i = n("NFGs"),
            a = n.n(i),
            r = n("zKw6"),
            l = n.n(r),
            o = n("Zqzr"),
            s = n("fGzQ"),
            u = n("WFY2"),
            d = n("rvFo");
        let c = {
            ".svg": "image/svg+xml",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".webp": "image/webp",
            ".gif": "image/gif",
            ".avif": "image/avif"
        };
        async function p(e, t, n, i, a, r) {
            let l = m(e);
            if (null == l) return null;
            try {
                let e = {
                        path: l,
                        hostId: t,
                        conversationId: a,
                        environmentId: r
                    },
                    o = await n.fetchQuery({
                        queryFn: t => {
                            let {
                                signal: n
                            } = t;
                            return (0, s.d)(e, null == i ? n : AbortSignal.any([n, i]))
                        },
                        queryKey: (0, s.f)(e),
                        retry: !1,
                        gcTime: d.b.FIVE_MINUTES,
                        staleTime: null != a && null == r ? 0 : d.b.INFINITE
                    });
                if (!o.contentsBase64) return null;
                return {
                    base64: o.contentsBase64,
                    mimeType: f(l)
                }
            } catch (e) {
                return u.a.warning("Failed to inline local image", {
                    safe: {},
                    sensitive: {
                        error: e,
                        resolvedImagePath: l
                    }
                }), null
            }
        }

        function g(e, t) {
            return `data:${f(e)};base64,${t}`
        }

        function m(e) {
            if (null == e) return null;
            let t = e.trim();
            if (0 === t.length || !/^(?:[\\/]|[A-Za-z]:[\\/])/.test(t)) return null;
            let n = (0, o.gk)(t);
            return (0, o.Ih)(n) ? t.startsWith("/") && !n.startsWith("//") && (0, o.tk)(t) === t ? t : n : null
        }

        function f(e) {
            return c[l().extname(e).toLowerCase()] ?? "application/octet-stream"
        }
        n.d(t, {}, {
            a: g,
            b: m,
            c: function(e, t, n, i, r) {
                if (null != i && null == r) return null;
                let l = m(e);
                for (let o of [e, l]) {
                    if (null == o) continue;
                    let e = {
                            path: o,
                            hostId: t,
                            conversationId: i,
                            environmentId: r
                        },
                        l = [(0, s.b)(e), (0, s.f)(e)].map(e => n.getQueryState(e)),
                        u = a()(l.filter(e => !e?.isInvalidated && e?.data?.contentsBase64), e => e?.dataUpdatedAt)?.data;
                    if (u?.contentsBase64) return `data:${u.mimeType??f(o)};base64,${u.contentsBase64}`
                }
                return null
            },
            d: p,
            e: async function(e, t, n, i, a, r) {
                let l = await p(e, t, n, i, a, r);
                return null == l ? null : `data:${l.mimeType};base64,${l.base64}`
            },
            f: async function(e) {
                let {
                    contentsBase64: t
                } = await (0, s.d)(e);
                return t ? g(e.path, t) : null
            }
        })
    }),
    tQpF: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("XNvh"),
            r = n("D4ZO"),
            l = n("CjTC"),
            o = n("uUv4"),
            s = n("ABl9");

        function u(e) {
            return "workspace-directory" === e || "workspace-shared-with-me" === e
        }

        function d(e) {
            return null != e.ownership ? "WORKSPACE" === e.ownership.scope : u((0, i.Tg)(e.plugin.id))
        }

        function c(e, t) {
            let {
                id: n,
                name: a
            } = e;
            if (null != n && !n.includes("@")) return n;
            let r = null == n ? null : (0, i.Tg)(n);
            if (r === i._c || t && (null == r || r === i.Zc)) return o.a[null == n ? (a ?? "").trim().toLowerCase() : n.slice(0, -(r?.length ?? 0) - 1)]
        }
        n.d(t, {}, {
            a: function(e) {
                return null != e && (u((0, i.Tg)(e)) || (0, i.ai)(e))
            },
            b: function(e, t, n) {
                let a = (0, i.Tg)(t),
                    o = e.filter(e => (null == n || (0, l.a)(e.plugin) === n) && ((0, r.e)(e.plugin) === t || e.plugin.id === t || e.referenceIds?.includes(t) || null != n && (a === i._c || u(a) && d(e)) && t === `${e.plugin.name}@${a}`));
                return 1 === o.length ? o[0] : void 0
            },
            c: function(e) {
                return null != e && (0, i.Tg)(e) === i._c ? e : c({
                    id: e
                }, !0)
            },
            d: function(e) {
                let t = (0, a.c)(e.plugin.id);
                if (e.plugin.id === s.a && e.ownership?.scope === "GLOBAL") return t;
                let n = (0, l.a)(e.plugin);
                return null != n && (0, i.ai)(n) && (null != e.ownership || d(e)) ? `${t}?${new URLSearchParams({remotePluginId:n})}` : t
            },
            e: function(e) {
                let t = e.indexOf("?");
                if (-1 === t) return null;
                let n = new URLSearchParams(e.slice(t + 1)).get("remotePluginId");
                return null != n && (0, i.ai)(n) ? n : null
            },
            f: c
        })
    }),
    vj6P: (function(e, t, n) {
        var i = n("pkoC"),
            a = n.n(i),
            r = n("i5ac"),
            l = n.n(r),
            o = n("Q840"),
            s = n("Zqzr"),
            u = n("D4ZO"),
            d = n("OiCI"),
            c = n("C0re"),
            p = n("EEop"),
            g = n("cLdu"),
            m = n("mq2k"),
            f = n("ueue"),
            h = n("OWtl"),
            _ = n("ndjw"),
            v = n("rvFo"),
            b = n("fEwQ"),
            y = n("tQpF");
        let I = (0, o.j)(h.a, e => (0, b.a)(4)),
            C = (0, o.q)(h.a, (e, t) => {
                let {
                    hostId: n,
                    references: i,
                    roots: r
                } = e, {
                    get: o,
                    scope: u
                } = t, h = (0, g.i)(n), b = h ? o(d.a) : null, w = h || o(m.b, n);
                return {
                    enabled: i.length > 0 && null != w && (!h || null != b),
                    queryKey: [...(0, c.d)(n, "references"), b, r, i, w],
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e, o = h ? void 0 : r ?? (await u.query.getOrFetch(_.j, {
                            hostId: n
                        })).roots, c = await (0, g.g)(u, {
                            accountId: h ? b : null,
                            hostId: n,
                            roots: o
                        }, "plugin_reference"), m = l()(i.filter(e => {
                            let {
                                id: t,
                                name: n
                            } = e;
                            return null != t || !!n?.trim()
                        }), e => {
                            let {
                                id: t,
                                name: n
                            } = e;
                            return JSON.stringify([t, n])
                        }), v = [], T = m.filter(e => {
                            let t = A(c, e, !0 === w);
                            return null == t || (v.push(P(t, e.id)), !1)
                        }), k = !h && T.some(e => null == (0, y.f)(e, !0 === w) && (null == e.id || e.id.includes("@"))) ? (await u.query.getOrFetch(f.s, {
                            hostId: n,
                            roots: o ?? [],
                            marketplaceKinds: ["local"],
                            isOpenAICuratedRemoteMarketplaceEnabled: !1
                        }).catch(() => void 0))?.plugins : void 0, S = T.filter(e => {
                            let t = A(k ?? [], e, !0 === w);
                            return null == t || (v.push(P(t, e.id)), !1)
                        });
                        if (h) {
                            let e = S.flatMap(e => {
                                    let t = (0, y.f)(e, !0) ?? (0, y.c)(e.id);
                                    return null == t ? [] : [{
                                        id: t,
                                        referenceId: e.id
                                    }]
                                }),
                                n = 0 === e.length ? void 0 : await u.query.getOrFetch(p.k, e.map(e => {
                                    let {
                                        id: t
                                    } = e;
                                    return t
                                })).catch(() => void 0);
                            for (let {
                                    id: t,
                                    referenceId: i
                                }
                                of e) {
                                let e = n?.get(t);
                                null != e && v.push(P(e, i))
                            }
                            return t.throwIfAborted(), E(void 0, v)
                        }
                        let [N, R] = a()(S, e => {
                            let {
                                id: t
                            } = e;
                            return null != b && (0, y.a)(t)
                        });
                        if (null != b && N.length > 0) {
                            if (t.throwIfAborted(), u.get(d.d) !== b) throw Error("Plugin account changed while loading references");
                            let e = await u.query.getOrFetch(C, {
                                hostId: s.Xb,
                                references: N,
                                roots: void 0
                            }).catch(() => []);
                            v.push(...e)
                        }
                        let M = u.get(I, n),
                            O = await Promise.all(R.map(async e => {
                                let i = (0, y.f)(e, !0 === w),
                                    a = i ?? e.id;
                                if (null == a || null == i && a.includes("@")) return null;
                                let r = await M(() => u.queryClient.fetchQuery({
                                    ...u.query.getOptions(p.l, (0, p.g)({
                                        hostId: n,
                                        pluginId: a,
                                        remotePluginId: i,
                                        roots: o
                                    })),
                                    retry: !1
                                }), t).catch(() => null);
                                return null == r ? null : P((0, f.c)(r), e.id)
                            }));
                        return v.push(...O.filter(e => null != e)), t.throwIfAborted(), E(void 0, v)
                    },
                    retry: !1,
                    staleTime: v.b.ONE_MINUTE
                }
            });

        function E(e, t) {
            let n = new Map((e ?? []).map(e => [(0, u.e)(e.plugin), e]));
            for (let i of t ?? []) {
                let t = (0, u.e)(i.plugin),
                    a = n.get(t);
                n.set(t, {
                    ...a ?? i,
                    plugin: a?.plugin ?? (null != e ? {
                        ...i.plugin,
                        installed: !1,
                        enabled: !1
                    } : i.plugin),
                    referenceIds: Array.from(new Set([...a?.referenceIds ?? [], ...i.referenceIds ?? []]))
                })
            }
            return Array.from(n.values())
        }

        function P(e, t) {
            return null == t || e.referenceIds?.includes(t) ? e : {
                ...e,
                referenceIds: [...e.referenceIds ?? [], t]
            }
        }

        function A(e, t, n) {
            if (null != t.id) {
                let i = (0, y.f)(t, n),
                    a = t.id.replace(/@dev-mode$/, "@created-by-me-remote");
                return (0, y.b)(e, a) ?? (null == i || i === a ? void 0 : (0, y.b)(e, i))
            }
            let i = t.name?.trim().toLowerCase(),
                a = e.filter(e => e.plugin.name.toLowerCase() === i || e.displayName?.toLowerCase() === i);
            return 1 === a.length ? a[0] : void 0
        }
        n.d(t, {}, {
            a: E,
            b: C
        })
    }),
    PmQd: (function(e, t, n) {
        var i = n("vLsY");
        n("sLlu");
        var a = n("C0re");
        n.d(t, {}, {
            a: async function(e, t, n) {
                let i = (0, a.e)(e.queryClient, t);
                if ("reconnect" !== n) return i;
                await Promise.all([i, (0, a.g)(e.queryClient, (0, a.c)(t))])
            },
            b: async function(e, t) {
                let n = "account" === t ? a.a : (0, a.b)(t.hostId);
                (0, i.a)(n), await Promise.all([(0, a.g)(e, n), void 0])
            }
        })
    }),
    jShI: (function(e, t, n) {
        var i = n("GaA7"),
            a = n("kfGJ"),
            r = n("c1Td"),
            l = n("bPa2");
        class o extends Error {
            constructor(e) {
                super("Plugin skill catalog reload failed", {
                    cause: e
                }), this.name = "PluginSkillCatalogReloadError"
            }
        }
        n.d(t, {}, {
            a: o,
            b: async function(e) {
                let {
                    scope: t,
                    hostId: n,
                    queryClient: s
                } = e, u = new Map(s.getQueriesData({
                    queryKey: [...l.a, n]
                }).flatMap(e => {
                    let [t] = e, n = t[2];
                    return Array.isArray(n) && n.every(e => "string" == typeof e) ? [n] : []
                }).map(e => [e.join("\0"), e])), d = u.size > 0 ? Array.from(u.values()) : [
                    []
                ];
                try {
                    for (let {
                            cwds: e,
                            response: o
                        }
                        of(n === a.a && await i.a.browserPluginConfig?.syncAfterPluginChange(), await Promise.all(d.map(async e => ({
                            cwds: e,
                            response: await (0, r.a)(t, n, e, {
                                forceReload: !0
                            })
                        }))))) s.setQueryData([...l.a, n, e], o)
                } catch (e) {
                    throw new o(e)
                }
            }
        })
    }),
    cjoy: (function(e, t, n) {
        var i = n("WzdM"),
            a = n("HFSu");
        n.d(t, {}, {
            a: function(e) {
                let {
                    pluginId: t,
                    skillName: n,
                    enabled: r
                } = e;
                return a.CodexRequest.safePost(r ? "/ps/plugins/{plugin_id}/skills/{skill_name}/enable" : "/ps/plugins/{plugin_id}/skills/{skill_name}/disable", {
                    surface: "other",
                    parameters: {
                        path: {
                            plugin_id: t,
                            skill_name: n
                        }
                    },
                    additionalHeaders: (0, i.b)()
                })
            }
        })
    }),
    ABl9: (function(e, t, n) {
        var i = n("tRL3");
        let a = `sites@${i.n}`,
            r = `plugin://${a}`,
            l = /(^|[^\p{L}\p{N}_$\\])\$sites(?![\p{L}\p{N}_$-])/gu;
        n.d(t, {}, {
            a: a,
            b: r,
            c: l,
            d: function(e) {
                return e.replace(l, "$1@Sites")
            }
        })
    }),
    ygu7: (function(e, t, n) {
        var i = n("Q840"),
            a = n("hOO0"),
            r = n("OiCI"),
            l = n("WzdM"),
            o = n("OWtl"),
            s = n("rvFo"),
            u = n("HFSu"),
            d = n("bJEQ");
        let c = (0, i.q)(o.a, (e, t) => {
            let {
                appId: n,
                productContext: i
            } = e, {
                get: a
            } = t;
            return {
                ...p(n, a(r.d), i),
                select: e => e.plugin_id
            }
        });

        function p(e, t, n, i) {
            return {
                queryKey: ["plugins", "canonical-app", t, i?.exactAppId ? e : (0, a.a)(e), ...null == n ? [] : [n], ...i?.expectedIdentity == null ? [] : [i.expectedIdentity.userId]],
                enabled: null != t,
                queryFn: t => {
                    let {
                        signal: a
                    } = t;
                    return u.CodexRequest.safeGet("/ps/plugins/canonical-app/{app_id}", {
                        surface: i?.surface ?? "other",
                        expectedIdentity: i?.expectedIdentity,
                        parameters: {
                            path: {
                                app_id: encodeURIComponent(e)
                            }
                        },
                        additionalHeaders: {
                            ...(0, l.b)(n),
                            ...i?.expectedIdentity == null ? {} : {
                                "ChatGPT-Account-ID": i.expectedIdentity.accountId
                            }
                        },
                        signal: null == i ? a : (0, d.a)(a)
                    })
                },
                retry: !1,
                staleTime: s.b.FIVE_MINUTES
            }
        }
        n.d(t, {}, {
            a: c,
            b: async function(e, t) {
                return (await e.query.fetch(c, {
                    appId: t
                })).plugin_id
            },
            c: async function(e, t, n) {
                return (await e.fetchQuery(p(t, n))).plugin_id ?? null
            },
            d: p
        })
    }),
    neAJ: (function(e, t, n) {
        var i = n("Q840"),
            a = n("WzdM"),
            r = n("OWtl"),
            l = n("rvFo"),
            o = n("HFSu"),
            s = n("ygu7"),
            u = n("bJEQ");
        let d = (0, i.q)(r.a, e => {
            let {
                identity: t,
                appId: n,
                surface: i
            } = e;
            return (0, s.d)(n, t.accountId, "codex", {
                expectedIdentity: t,
                surface: i
            })
        });

        function c(e, t, n) {
            return o.CodexRequest.safePost("/ps/plugins/batch", {
                ...n,
                requestBody: {
                    plugin_ids: e
                },
                additionalHeaders: {
                    ...(0, a.b)(t),
                    ...null == n.expectedIdentity ? {} : {
                        "ChatGPT-Account-ID": n.expectedIdentity.accountId
                    }
                }
            })
        }
        let p = (0, i.q)(r.a, e => {
            let {
                identity: t,
                ids: n
            } = e, i = [...new Set(n)].sort();
            return {
                queryKey: ["plugins", "connection-metadata", t.accountId, t.userId, "codex", i],
                staleTime: l.b.ONE_MINUTE,
                retry: !1,
                queryFn: async e => {
                    let {
                        signal: n
                    } = e, {
                        results: a
                    } = await c(i, "codex", {
                        surface: "workspace_agents",
                        expectedIdentity: t,
                        signal: (0, u.a)(n)
                    });
                    return new Map(a.map(e => {
                        let {
                            requested_plugin_id: t,
                            plugin: n
                        } = e;
                        return [t, n]
                    }))
                }
            }
        });
        n.d(t, {}, {
            a: p,
            b: d,
            c: c
        })
    }),
    NnK8: (function(e, t, n) {
        var i = n("Q840"),
            a = n("hOO0"),
            r = n("IVVU"),
            l = n("OWtl");
        let o = (0, i.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return new Set(t(r.g).hiddenPluginIds)
            }),
            s = (0, i.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return new Set(Array.from(t(o), a.a))
            });
        n.d(t, {}, {
            a: s,
            b: o
        })
    }),
    zDEm: (function(e, t, n) {
        var i = n("Q840"),
            a = n("OiCI"),
            r = n("CWeU"),
            l = n("K0RC"),
            o = n("tSEg"),
            s = n("ndjw"),
            u = n("cLdu");
        let d = (0, i.d)(o.a, (e, t) => {
            let {
                get: n,
                scope: i
            } = t, o = (0, u.i)(e), d = n(u.h, {
                hostId: e,
                accountId: o ? n(a.b) : null,
                productContext: "chatgpt-thread" === i.value.routeKind ? "chatgpt" : "codex",
                roots: o ? void 0 : n(s.j, {
                    hostId: e
                }).data?.roots
            }).data, c = n(l.c)[(0, l.b)(n(r.a), e)] ?? {}, p = new Map;
            for (let {
                    plugin: e
                }
                of d ?? []) {
                if (!e.installed || !e.enabled || "INSTALLED_BY_DEFAULT" === e.installPolicy) continue;
                let t = Math.max((e.installedAt ?? 0) * 1e3, c[e.id] ?? 0, null == e.remotePluginId ? 0 : c[e.remotePluginId] ?? 0);
                0 !== t && (p.set(e.id, t), null != e.remotePluginId && p.set(e.remotePluginId, t))
            }
            return p
        });
        n.d(t, {}, {
            a: d
        })
    }),
    EEop: (function(e, t, n) {
        var i = n("QosV"),
            a = n("T0Rc"),
            r = n("S2r0"),
            l = n("NxBK"),
            o = n("i5ac"),
            s = n.n(o),
            u = n("Q840"),
            d = n("Zqzr"),
            c = n("Dgwo"),
            p = n("hOO0"),
            g = n("FpcZ"),
            m = n("pDRe"),
            f = n("OiCI"),
            h = n("Cslg"),
            _ = n("IIEq"),
            v = n("rO8L"),
            b = n("IVVU"),
            y = n("C0re"),
            I = n("WzdM"),
            C = n("CBsD"),
            E = n("tQpF"),
            P = n("cLdu"),
            A = n("ueue"),
            w = n("OWtl"),
            T = n("kfGJ"),
            k = n("caug"),
            S = n("bnxy"),
            N = n("rvFo"),
            R = n("HFSu"),
            M = n("eShZ"),
            O = n("neAJ");
        let L = (0, u.q)(w.a, (e, t) => {
            let {
                get: n,
                queryClient: i,
                scope: a
            } = t, l = (0, P.i)(e.hostId), o = l ? n(f.b) : null;
            return {
                ... function(e) {
                    let {
                        scope: t,
                        accountId: n,
                        hostId: i,
                        marketplacePath: a,
                        pluginName: l,
                        queryClient: o,
                        remoteMarketplaceName: s,
                        requestOptions: u,
                        productContext: d,
                        prefetchAppsForUserId: p,
                        localMarketplaceName: _,
                        roots: v
                    } = e, b = (0, P.i)(i), y = t.get(f.d) ?? void 0, I = b && void 0 === n ? y : n;
                    return (0, r.a)({
                        queryKey: q({
                            accountId: I,
                            hostId: i,
                            marketplacePath: a,
                            pluginName: l,
                            remoteMarketplaceName: s,
                            localMarketplaceName: _,
                            roots: v,
                            productContext: d
                        }),
                        queryFn: async e => {
                            let {
                                signal: n
                            } = e;
                            if (null == l) throw Error("plugin detail query requires pluginName");
                            let r = t.get(f.d) ?? void 0;
                            if (b && (null == I || r !== I)) throw Error("Plugin account changed before loading plugin details");
                            let y = a;
                            if (!b && null == a && null == s && null != _) {
                                let {
                                    marketplaces: e
                                } = await t.query.getOrFetch(A.s, {
                                    hostId: i,
                                    isOpenAICuratedRemoteMarketplaceEnabled: !1,
                                    marketplaceKinds: ["local"],
                                    roots: v ?? []
                                });
                                if (null == (y = e.find(e => e.name === _)?.path ?? null)) throw Error("Local plugin marketplace is unavailable");
                                n.throwIfAborted()
                            }
                            let w = b ? await async function(e, t, n, i, a, r) {
                                if (null == (0, E.c)(t)) throw new M.FetchError("Plugin not found", 404, void 0, null);
                                let [{
                                    plugin: l,
                                    usedCodexFallback: o
                                }, s] = await Promise.all([e.queryClient.fetchQuery(B(i, t, void 0, a)).then(t => {
                                    let a = e.get(h.m);
                                    if (null != r && !n.aborted && !a.accountLoading && a.userId === r && null != i && e.get(f.a) === i && e.get(f.d) === i) {
                                        let n = z(t.plugin).map(e => {
                                            let {
                                                id: t
                                            } = e;
                                            return t
                                        });
                                        for (let t of (0, g.getHostedAppsContentQueriesOptions)({
                                                accountId: i,
                                                appIds: n,
                                                enabled: !0
                                            }).queries) e.queryClient.prefetchQuery(t);
                                        n.length > 0 && e.queryClient.prefetchQuery((0, m.b)({
                                            accountId: i,
                                            userId: r,
                                            appIds: n,
                                            enabled: !0
                                        }))
                                    }
                                    return t
                                }), (0, P.d)(e, {
                                    productContext: ("catalog" === a ? void 0 : a) ?? "chatgpt",
                                    signal: n,
                                    surface: "other"
                                })]);
                                n.throwIfAborted();
                                let u = (o ? await (0, P.d)(e, {
                                    productContext: "codex",
                                    signal: n,
                                    surface: "other"
                                }) : s).find(e => e.plugin.remotePluginId === l.id);
                                return j(l, u)
                            }(t, l, n, I, d, (0, m.c)(i) ? p : null): (await (0, c.b)(t, i).sendRequest("plugin/read", {
                                ...(0, A.j)({
                                    marketplacePath: y,
                                    remoteMarketplaceName: s
                                }),
                                pluginName: l
                            }, u)).plugin, T = t.get(f.d) ?? void 0;
                            if (b && T !== I) throw Error("Plugin account changed while loading plugin details");
                            let k = w.summary.interface,
                                S = (0, C.e)(k?.logo, i, o),
                                N = (0, C.e)(k?.logoDark, i, o),
                                R = (0, C.e)(k?.composerIcon, i, o),
                                O = Promise.all(w.skills.map(async e => {
                                    if (null == e.interface) return null;
                                    let [t, n] = await Promise.all([(0, C.e)(e.interface.iconSmall, i, o), (0, C.e)(e.interface.iconLarge, i, o)]);
                                    return {
                                        iconSmallDataUrl: t,
                                        iconLargeDataUrl: n
                                    }
                                })),
                                [L, D, x, U] = await Promise.all([R, S, N, O]);
                            return function(e, t) {
                                let {
                                    logoDataUrl: n,
                                    logoDarkDataUrl: i,
                                    composerIconDataUrl: a,
                                    skillImageDataUrls: r
                                } = t, l = e.summary.interface, o = e.skills.map((e, t) => {
                                    let n = r[t] ?? null;
                                    return null == e.interface || null == n ? e : {
                                        ...e,
                                        interface: {
                                            ...e.interface, ...null != n.iconSmallDataUrl ? {
                                                iconSmall: n.iconSmallDataUrl
                                            } : {}, ...null != n.iconLargeDataUrl ? {
                                                iconLarge: n.iconLargeDataUrl
                                            } : {}
                                        }
                                    }
                                });
                                return {
                                    ...e,
                                    summary: null != l && (null != a || null != n || null != i) ? {
                                        ...e.summary,
                                        interface: {
                                            ...l, ...null != a ? {
                                                composerIcon: a
                                            } : {}, ...null != n ? {
                                                logo: n
                                            } : {}, ...null != i ? {
                                                logoDark: i
                                            } : {}
                                        }
                                    } : e.summary,
                                    skills: o
                                }
                            }(w, {
                                composerIconDataUrl: L,
                                logoDataUrl: D,
                                logoDarkDataUrl: x,
                                skillImageDataUrls: U
                            })
                        },
                        retryOnMount: !b,
                        staleTime: N.b.FIVE_MINUTES
                    })
                }({
                    ...e,
                    accountId: o,
                    queryClient: i,
                    scope: a
                }),
                enabled: null != e.pluginName && (l || null != e.localMarketplaceName || null != e.marketplacePath || null != e.remoteMarketplaceName) && (!l || null != o),
                refetchOnMount: !0
            }
        });

        function D(e) {
            return e.template_id
        }

        function x(e) {
            return !0 === e.can_setup
        }

        function U(e) {
            let [t, n] = e;
            return [t, n.id]
        }
        async function G() {}

        function q(e) {
            let {
                accountId: t,
                hostId: n,
                marketplacePath: i,
                pluginName: a,
                remoteMarketplaceName: r,
                localMarketplaceName: l,
                roots: o,
                productContext: s
            } = e, u = (0, P.i)(n);
            return [...F(n, t), i ?? "", r ?? "", a ?? "", ...null == s ? [] : [s], ...u || null != i || null != r || null == l ? [] : ["local-marketplace", l, o ?? []]]
        }

        function F(e, t) {
            let n = (0, y.d)(e, "detail");
            return (0, P.i)(e) ? [...n, "hosted", t ?? null] : n
        }
        let K = (0, u.j)(w.a, (e, t) => {
                let {
                    scope: n
                } = t;
                return (0, k.a)({
                    key: e => e,
                    watchIdentity: () => {
                        let t = new AbortController,
                            i = n.watch(n => {
                                let {
                                    get: i
                                } = n;
                                (null == e || i(f.d) !== e) && t.abort(Error("Plugin account changed while loading metadata"))
                            });
                        return {
                            signal: t.signal,
                            stop: i
                        }
                    },
                    fetcher: async (e, t) => {
                        let {
                            results: n
                        } = await (0, O.c)(e, "chatgpt", {
                            signal: t
                        });
                        return new Map(n.map(e => {
                            let {
                                requested_plugin_id: t,
                                plugin: n
                            } = e;
                            return [t, n]
                        }))
                    }
                })
            }),
            H = (0, u.q)(w.a, (e, t) => {
                let {
                    get: n,
                    queryClient: i,
                    scope: a
                } = t, r = n(f.d), o = [...new Set(e)].sort();
                return {
                    queryKey: ["plugins", "hosted-metadata-batch", r, o],
                    enabled: null != r && o.length > 0,
                    staleTime: N.b.FIVE_MINUTES,
                    retry: !1,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e, n = new Map, s = [];
                        await Promise.all(o.map(async e => {
                            let o = B(r, e),
                                u = i.getQueryState(o.queryKey),
                                d = u?.data;
                            if (null == d && u?.fetchStatus === "fetching") try {
                                d = await i.fetchQuery(o)
                            } catch (e) {
                                if (t.throwIfAborted(), e instanceof l.a || a.get(f.d) !== r) throw e;
                                if (e instanceof M.FetchError && 404 === e.status) return
                            }
                            null == d ? s.push(e) : n.set(e, (0, P.f)(d.plugin))
                        }));
                        let u = a.get(K, r);
                        if (await Promise.all(s.map(async e => {
                                let l = await u.fetch({
                                    target: e,
                                    signal: t
                                });
                                if (t.throwIfAborted(), a.get(f.d) !== r) throw Error("Plugin account changed while loading metadata");
                                if (null == l) return;
                                let o = {
                                    plugin: {
                                        ...l,
                                        workspace_id: l.workspace_id ?? null,
                                        release: {
                                            ...l.release,
                                            interface: {
                                                ...l.release.interface, short_description: l.release.interface.short_description ?? null, category: l.release.interface.category ?? null, capabilities: l.release.interface.capabilities ?? [], logo_url: l.release.interface.logo_url ?? null
                                            },
                                            skills: l.release.skills?.map(e => ({
                                                ...e,
                                                interface: null == e.interface ? null : {
                                                    ...e.interface,
                                                    display_name: e.interface.display_name ?? null,
                                                    short_description: e.interface.short_description ?? null,
                                                    icon_small_url: e.interface.icon_small_url ?? null,
                                                    icon_large_url: e.interface.icon_large_url ?? null
                                                }
                                            }))
                                        },
                                        dependencies: l.dependencies?.map(e => ({
                                            ...e,
                                            navigation: null == e.navigation ? null : {
                                                kind: "plugin_detail",
                                                plugin_id: e.navigation.plugin_id
                                            }
                                        }))
                                    },
                                    usedCodexFallback: !1
                                };
                                n.set(e, (0, P.f)(o.plugin));
                                let {
                                    queryKey: s
                                } = B(r, e);
                                null == i.getQueryData(s) && i.setQueryData(s, o, {
                                    updatedAt: 0
                                })
                            })), t.throwIfAborted(), a.get(f.d) !== r) throw Error("Plugin account changed while loading metadata");
                        return n
                    }
                }
            });

        function B(e, t, n, i) {
            return (0, r.a)({
                queryKey: ["plugins", "hosted-metadata", e, t, ...null == i ? [] : [i]],
                queryFn: async a => {
                    let {
                        signal: r
                    } = a;
                    if (null == e || null == t) throw Error("Hosted plugin metadata requires an account and plugin");
                    return async function(e, t, n) {
                        let i = (0, E.c)(e);
                        if (null == i) throw new M.FetchError("Plugin not found", 404, void 0, null);
                        let a = !1;
                        return {
                            plugin: await R.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                                surface: "other",
                                parameters: {
                                    path: {
                                        plugin_id: i
                                    }
                                },
                                additionalHeaders: (0, I.b)(n ?? "chatgpt"),
                                expectedErrorStatuses: null == n ? [404] : void 0,
                                signal: t
                            }).catch(e => {
                                if (null != n || !(e instanceof M.FetchError && 404 === e.status)) throw e;
                                return t.throwIfAborted(), a = !0, R.CodexRequest.safeGet("/ps/plugins/{plugin_id}", {
                                    surface: "other",
                                    parameters: {
                                        path: {
                                            plugin_id: i
                                        }
                                    },
                                    additionalHeaders: (0, I.b)("codex"),
                                    signal: t
                                })
                            }),
                            usedCodexFallback: a
                        }
                    }(t, null == n ? r : AbortSignal.any([r, n]), i)
                },
                retry: !1,
                staleTime: 0
            })
        }

        function j(e, t) {
            let n = t ?? (0, P.f)(e),
                i = t?.servicePlugin,
                a = (e.release.skills ?? []).map(e => ({
                    description: e.description,
                    enabled: null == i || !("disabled_skill_names" in i) || !i.disabled_skill_names.includes(e.name),
                    interface: null == e.interface ? null : {
                        displayName: e.interface.display_name ?? void 0,
                        shortDescription: e.interface.short_description ?? void 0,
                        brandColor: e.interface.brand_color ?? void 0,
                        defaultPrompt: e.interface.default_prompt ?? void 0,
                        iconLargeUrl: e.interface.icon_large_url,
                        iconSmallUrl: e.interface.icon_small_url
                    },
                    name: e.name,
                    path: null,
                    shortDescription: e.interface?.short_description ?? null
                }));
            return {
                apps: z(e),
                appTemplates: (e.release.app_templates ?? []).map(e => ({
                    canonicalConnectorId: e.canonical_connector_id ?? null,
                    category: null,
                    description: e.description ?? null,
                    logoUrl: e.logo_url ?? null,
                    logoUrlDark: e.logo_url_dark ?? null,
                    materializedAppIds: s()([...e.materialized_app_ids ?? [], ...(e.instances ?? []).filter(e => "USER" === e.scope).map(e => e.id)], p.a),
                    name: e.name,
                    reason: e.reason ?? null,
                    templateId: e.template_id
                })),
                description: e.release.interface.long_description ?? e.release.description,
                hooks: [],
                marketplaceName: n.marketplaceName,
                marketplacePath: null,
                mcpServers: (e.release.mcp_servers ?? []).map(e => e.key),
                scheduledTasks: null,
                onboardingSkill: n.plugin.enabled ? a.find(t => t.enabled && t.name === e.release.onboarding_skill_name) ?? null : null,
                shareUrl: e.share_url ?? null,
                skills: a,
                summary: n.plugin
            }
        }

        function z(e) {
            let t = (e.release.app_templates ?? []).flatMap(e => (e.instances ?? []).filter(e => "USER" === e.scope));
            return s()([...e.release.app_ids ?? [], ...t.map(e => e.id)], p.a).map(n => {
                let i = (0, p.a)(n),
                    a = e.release.app_templates?.find(e => null != e.canonical_connector_id && (0, p.a)(e.canonical_connector_id) === i || e.materialized_app_ids?.some(e => (0, p.a)(e) === i) === !0 || e.instances?.some(e => (0, p.a)(e.id) === i) === !0);
                return {
                    category: null,
                    description: a?.description ?? null,
                    id: n,
                    installUrl: null,
                    name: t.find(e => (0, p.a)(e.id) === i)?.name ?? a?.name ?? n
                }
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let {
                    hostId: t,
                    pluginId: n
                } = e;
                return {
                    hostId: t,
                    marketplacePath: null,
                    pluginName: (0, P.i)(t) ? (0, E.c)(n) ?? null : n,
                    remoteMarketplaceName: d.Wb
                }
            },
            b: function(e) {
                return (0, S.p)(e, `.tmp/bundled-marketplaces/${d.Yc}/.agents/plugins/marketplace.json`)
            },
            c: function(e, t) {
                let {
                    accountId: n,
                    hostId: i
                } = t;
                return (0, P.i)(i) && null == n ? [] : e.getQueriesData({
                    queryKey: F(i, n)
                }).flatMap(e => {
                    let [, t] = e;
                    return null == t ? [] : [t]
                })
            },
            d: async function(e, t, n, i, a) {
                let r = B(t, n, void 0, i),
                    l = e.getQueryData(r.queryKey);
                return null != l ? l.plugin.canonical_app_id ?? null : void 0 !== a ? a : (await e.fetchQuery(r)).plugin.canonical_app_id ?? null
            },
            e: B,
            f: j,
            g: function(e) {
                let {
                    hostId: t,
                    pluginId: n,
                    remotePluginId: i,
                    roots: a
                } = e, r = (0, P.i)(t), l = r || null != i || null == n ? null : (0, d.Tg)(n), o = r ? n : i ?? n;
                return null != l && null != n && (o = n.slice(0, -l.length - 1)), {
                    hostId: t,
                    marketplacePath: null,
                    pluginName: o,
                    localMarketplaceName: l,
                    remoteMarketplaceName: r || null != l ? null : d.Wb,
                    roots: a
                }
            },
            h: q,
            i: F,
            j: function(e, t, n) {
                return (0, r.a)({
                    queryKey: ["plugins", "workspace-template-instance", t, n],
                    queryFn: async i => {
                        let a, {
                            signal: r
                        } = i;
                        if (null == t || null == n) throw Error("Workspace template instance requires an account and template");
                        let l = new Set((await (0, P.d)(e, {
                                productContext: "chatgpt",
                                signal: r,
                                surface: "plugin_details"
                            })).map(e => e.plugin.remotePluginId)),
                            o = null;
                        for (let e = 0; e < 20; e++) {
                            let e = await R.CodexRequest.safeGet("/ps/plugins/workspace/template-instances", {
                                surface: "plugin_details",
                                parameters: {
                                    query: {
                                        template_plugin_id: n,
                                        limit: 30,
                                        ...null == a ? {} : {
                                            page_token: a
                                        }
                                    }
                                },
                                additionalHeaders: (0, I.b)("chatgpt"),
                                signal: r
                            });
                            for (let t of e.instances)
                                if (null != t.plugin_id && (null == o && (o = t), l.has(t.plugin_id))) return t;
                            if (0 === l.size && null != o || null == (a = e.pagination.next_page_token ?? void 0)) break
                        }
                        return o
                    },
                    staleTime: N.b.FIVE_MINUTES
                })
            },
            k: H,
            l: L,
            m: function(e) {
                let t, n, r, l, o, s, d, c, p, g, m, h, y, I, C = (0, i.c)(68),
                    {
                        hostId: E,
                        marketplacePath: w,
                        pluginName: k,
                        remoteMarketplaceName: S,
                        localMarketplaceName: R,
                        roots: M,
                        enabled: O,
                        productContext: q,
                        prefetchAppsForUserId: F
                    } = e,
                    K = void 0 === O || O,
                    H = E ?? T.a,
                    j = (0, u.z)(b.a);
                C[0] !== H ? (t = (0, P.i)(H), C[0] = H, C[1] = t) : t = C[1];
                let z = t,
                    W = (0, u.z)(f.b),
                    V = !z;
                C[2] !== H || C[3] !== V ? (n = {
                    enabled: V,
                    hostId: H
                }, C[2] = H, C[3] = V, C[4] = n) : n = C[4];
                let Y = (0, v.a)(n);
                C[5] !== k ? (r = null != k && (0, A.p)(k), C[5] = k, C[6] = r) : r = C[6];
                let Q = r,
                    X = z ? T.a : H;
                C[7] !== Q || C[8] !== X ? (l = {
                    enabled: Q,
                    hostId: X
                }, C[7] = Q, C[8] = X, C[9] = l) : l = C[9];
                let $ = (0, _.a)(l),
                    Z = (z || null != R || null != w || null != S) && null != k,
                    J = (z ? null != W : Y) && K && Z && Q && $.isLoading,
                    ee = (z ? null != W : Y) && K && Z && (!Q || $.available),
                    et = S ?? null;
                C[10] !== H || C[11] !== R || C[12] !== w || C[13] !== k || C[14] !== F || C[15] !== q || C[16] !== M || C[17] !== et ? (o = {
                    hostId: H,
                    marketplacePath: w,
                    pluginName: k,
                    remoteMarketplaceName: et,
                    localMarketplaceName: R,
                    roots: M,
                    productContext: q,
                    prefetchAppsForUserId: F
                }, C[10] = H, C[11] = R, C[12] = w, C[13] = k, C[14] = F, C[15] = q, C[16] = M, C[17] = et, C[18] = o) : o = C[18], C[19] !== ee ? (s = {
                    enabled: ee
                }, C[19] = ee, C[20] = s) : s = C[20];
                let {
                    data: en,
                    error: ei,
                    isLoading: ea,
                    refetch: er
                } = (0, u.x)(L, o, s), el = !!en?.appTemplates.length, eo = z ? k : null;
                !z && null != en && (H === T.a || el || en.apps.length > 0 && en.mcpServers.length > 0) && (eo = en.summary.remotePluginId ?? en.summary.shareContext?.remotePluginId ?? null);
                let es = ee && null != W && null != eo && (z && null != en || !1);
                C[21] !== W || C[22] !== eo || C[23] !== q ? (d = B(W, eo, void 0, q), C[21] = W, C[22] = eo, C[23] = q, C[24] = d) : d = C[24];
                let eu = !z || null != en,
                    ed = z ? N.b.FIVE_MINUTES : 0;
                C[25] !== es || C[26] !== d || C[27] !== eu || C[28] !== ed ? (c = {
                    ...d,
                    subscribed: eu,
                    enabled: es,
                    staleTime: ed
                }, C[25] = es, C[26] = d, C[27] = eu, C[28] = ed, C[29] = c) : c = C[29];
                let {
                    data: ec,
                    error: ep,
                    isLoading: eg,
                    refetch: em
                } = (0, a.a)(c);
                if (!ee || null != en && j.includes(en.summary.id)) {
                    let e;
                    return C[30] !== J ? (e = {
                        errorMessage: null,
                        hostedPlugin: null,
                        localPluginEditMetadata: null,
                        ownership: null,
                        isLoading: J,
                        isTemplate: !1,
                        isV2Template: !1,
                        isTemplateInstance: !1,
                        plugin: null,
                        requiresLocalExecutor: !1,
                        refetch: G
                    }, C[30] = J, C[31] = e) : e = C[31], e
                }
                let ef = z || el ? ec?.plugin.release.app_templates : void 0,
                    eh = z || el ? ec?.plugin.canonical_app_id : void 0,
                    e_ = ei?.message ?? (es ? ep?.message ?? null : null),
                    ev = z ? ec?.plugin ?? null : null,
                    eb = !z && H === T.a && es && null == ep && ec?.plugin.id === eo && ec.plugin.workspace_id === W && !0 !== ec.plugin.is_template && null == ec.plugin.template_plugin_id ? ec.plugin : null,
                    ey = ec?.plugin.scope;
                C[32] !== ec?.plugin || C[33] !== z ? (p = z ? (0, P.e)(ec?.plugin) : null, C[32] = ec?.plugin, C[33] = z, C[34] = p) : p = C[34];
                let eI = z ? ec?.plugin.source_gizmo_id ?? null : null,
                    eC = ea || es && eg,
                    eE = ec?.plugin.is_template === !0,
                    eP = ec?.plugin.is_v2_template === !0,
                    eA = ec?.plugin.template_plugin_id != null,
                    ew = ec?.plugin;
                C[35] !== ew ? (g = function(e) {
                    let t, n = e?.personal_mcp_template_setup,
                        i = e?.release.id;
                    if (e?.scope !== "GLOBAL" || !0 !== e.is_v2_template || null == n || 0 === n.url_templates.length || null == i) return;
                    let a = n.auth;
                    return t = null == a ? a : "oauth" === a.type || "mixed" === a.type ? {
                        type: a.type,
                        supports_dcr: a.supports_dcr ?? !1,
                        client_credentials_required: a.client_credentials_required ?? !0,
                        declared: a.declared
                    } : {
                        type: a.type
                    }, {
                        pluginId: e.id,
                        releaseId: i,
                        mcpKey: n.mcp_key,
                        urlTemplates: n.url_templates,
                        auth: t,
                        isOpenaiVerified: n.is_openai_verified
                    }
                }(ew), C[35] = ew, C[36] = g) : g = C[36];
                let eT = en ?? null;
                C[37] !== en || C[38] !== ec || C[39] !== z ? (m = ec?.plugin.release.app_manifest?.apps != null && (z || en?.summary.version != null && en.summary.version === ec.plugin.release.version) ? new Map(Object.entries(ec.plugin.release.app_manifest.apps).map(U)) : void 0, C[37] = en, C[38] = ec, C[39] = z, C[40] = m) : m = C[40], C[41] !== ef ? (h = null == ef ? void 0 : new Set(ef.filter(x).map(D)), C[41] = ef, C[42] = h) : h = C[42];
                let ek = z && !ec?.usedCodexFallback ? ec?.plugin : void 0,
                    eS = z && ec?.plugin.release.requires_local_executor === !0;
                return C[43] !== z || C[44] !== es || C[45] !== er || C[46] !== em ? (y = async () => {
                    await Promise.all([er(), ...!z && es ? [em()] : []])
                }, C[43] = z, C[44] = es, C[45] = er, C[46] = em, C[47] = y) : y = C[47], C[48] !== ef || C[49] !== eh || C[50] !== e_ || C[51] !== ev || C[52] !== eb || C[53] !== ey || C[54] !== p || C[55] !== eI || C[56] !== eC || C[57] !== eE || C[58] !== eP || C[59] !== eA || C[60] !== g || C[61] !== eT || C[62] !== m || C[63] !== h || C[64] !== ek || C[65] !== eS || C[66] !== y ? (I = {
                    canonicalAppId: eh,
                    errorMessage: e_,
                    hostedPlugin: ev,
                    localPluginEditMetadata: eb,
                    pluginScope: ey,
                    ownership: p,
                    sourceGizmoId: eI,
                    isLoading: eC,
                    isTemplate: eE,
                    isV2Template: eP,
                    isTemplateInstance: eA,
                    personalMcpTemplateSetup: g,
                    plugin: eT,
                    mcpAppIdsByServerKey: m,
                    setupEligibleAppTemplateIds: h,
                    serviceAppTemplates: ef,
                    servicePlugin: ek,
                    requiresLocalExecutor: eS,
                    refetch: y
                }, C[48] = ef, C[49] = eh, C[50] = e_, C[51] = ev, C[52] = eb, C[53] = ey, C[54] = p, C[55] = eI, C[56] = eC, C[57] = eE, C[58] = eP, C[59] = eA, C[60] = g, C[61] = eT, C[62] = m, C[63] = h, C[64] = ek, C[65] = eS, C[66] = y, C[67] = I) : I = C[67], I
            }
        })
    }),
    aFrt: (function(e, t, n) {
        var i = n("Zqzr"),
            a = n("D4ZO"),
            r = n("SaEY"),
            l = n("k7G6"),
            o = n("SlNh"),
            s = n("ueue");

        function u(e) {
            return {
                requiresLocalExecutor: e.requiresLocalExecutor,
                category: e.plugin.interface?.category ?? null,
                creatorName: e.plugin.shareContext?.creatorName?.trim() || null,
                developerName: e.plugin.interface?.developerName,
                description: e.description,
                disabledReason: e.plugin.disabledReason ?? null,
                displayName: e.displayName ?? e.plugin.name,
                enabled: e.plugin.enabled,
                id: (0, a.e)(e.plugin),
                installed: e.plugin.installed,
                isTemplate: !0 === e.isTemplate,
                installationPolicy: e.plugin.installPolicy,
                installedPlugin: e,
                keywords: e.keywords ?? [],
                logoDarkPath: e.logoDarkPath,
                logoPath: e.logoPath,
                marketplaceDisplayName: e.marketplaceDisplayName,
                marketplaceName: e.marketplaceName,
                marketplacePath: e.marketplacePath,
                name: e.plugin.name,
                origin: c(e.marketplaceName),
                pluginId: e.plugin.id,
                pluginSourceType: e.plugin.source.type,
                remoteMarketplaceName: e.remoteMarketplaceName ?? null,
                remotePluginId: e.plugin.remotePluginId ?? e.plugin.shareContext?.remotePluginId ?? null,
                source: "app-server",
                status: (0, r.b)(e.plugin) ? "DISABLED_BY_ADMIN" : "ENABLED"
            }
        }

        function d(e, t) {
            let n, i = e.release.interface;
            return "WORKSPACE" === e.scope ? n = "workspace" : "USER" === e.scope && (n = "user-cloud"), {
                requiresLocalExecutor: !0 === e.release.requires_local_executor,
                category: i.category ?? t?.plugin.interface?.category ?? null,
                connectionAppId: e.canonical_app_id ?? void 0,
                connectorId: e.connector_id ?? void 0,
                creatorName: (("creator_name" in e ? e.creator_name : null) ?? t?.plugin.shareContext?.creatorName)?.trim() || null,
                description: i.short_description ?? e.release.description,
                developerName: i.developer_name,
                disabledReason: e.disabled_reason ?? t?.plugin.disabledReason ?? null,
                displayName: e.release.display_name,
                enabled: t?.plugin.enabled ?? !1,
                id: e.id,
                isTemplate: !0 === e.is_template,
                installed: t?.plugin.installed ?? !1,
                installationPolicy: e.installation_policy,
                installedPlugin: t,
                keywords: i.capabilities,
                logoDarkPath: i.logo_url_dark ?? t?.logoDarkPath ?? null,
                logoPath: i.logo_url ?? t?.logoPath ?? null,
                marketplaceDisplayName: t?.marketplaceDisplayName ?? null,
                marketplaceName: t?.marketplaceName ?? null,
                marketplacePath: t?.marketplacePath ?? null,
                name: t?.plugin.name ?? e.name,
                origin: n,
                pluginId: t?.plugin.id ?? null,
                pluginSourceType: t?.plugin.source.type ?? null,
                remoteMarketplaceName: t?.remoteMarketplaceName ?? null,
                remotePluginId: e.id,
                scope: e.scope,
                source: "plugin-service",
                status: e.status
            }
        }

        function c(e) {
            return "created-by-me-remote" === e ? "user-cloud" : e?.startsWith("workspace-") ? "workspace" : void 0
        }
        n.d(t, {}, {
            a: u,
            b: function(e) {
                let {
                    homeDirectory: t,
                    plugins: n,
                    visibility: i
                } = e, a = (0, o.j)((0, s.e)({
                    plugins: n,
                    isComputerUseAvailable: i.isComputerUseAvailable,
                    isExternalBrowserUseAvailable: i.isExternalBrowserUseAvailable,
                    isInAppBrowserUseAvailable: i.isInAppBrowserUseAvailable,
                    isMessagesAvailable: i.isMessagesAvailable
                }), i.hiddenPluginIds, i.browserExtensionUnificationEnabled), r = (0, o.i)(a), {
                    marketplaceFilterValue: l,
                    plugins: u
                } = (0, o.d)({
                    availablePlugins: a,
                    createdByMeRemotePlugins: null,
                    homeDirectory: t,
                    pluginShares: null,
                    storefrontPlugins: r
                });
                return {
                    createdPlugins: u,
                    marketplacePlugins: r.filter(e => !(0, o.b)(e) && (null == l || (0, s.i)(e) !== l))
                }
            },
            c: function(e) {
                let {
                    createdByCurrentUser: t = !1,
                    hiddenPluginIds: n,
                    installedPlugins: i,
                    localPlugins: a,
                    remotePlugins: r
                } = e, l = new Map;
                for (let e of i)
                    for (let t of [e.plugin.id, e.plugin.remotePluginId, e.plugin.shareContext?.remotePluginId]) null != t && l.set(t, e);
                let s = new Set(n),
                    c = new Set(a.flatMap(e => {
                        let {
                            plugin: t
                        } = e, n = t.remotePluginId ?? t.shareContext?.remotePluginId;
                        return null == n ? [] : [n]
                    }));
                return [...(0, o.f)({
                    plugins: a,
                    query: ""
                }).map(e => ({
                    ...u(e),
                    origin: "local"
                })), ...r.flatMap(e => {
                    let n = l.get(e.id) ?? null;
                    return c.has(e.id) || s.has(e.id) || null != n && s.has(n.plugin.id) ? [] : (c.add(e.id), [{
                        ...d(e, n),
                        origin: t ? "user-cloud" : "workspace"
                    }])
                })]
            },
            d: function(e, t) {
                return (0, l.a)({
                    browseSearch: t?.browseSearch,
                    hostId: t?.hostId,
                    marketplacePath: e.marketplacePath,
                    pluginId: e.pluginId ?? e.id,
                    pluginName: null == e.marketplacePath ? e.remotePluginId ?? e.id : e.name,
                    remoteMarketplaceName: null == e.marketplacePath ? e.remoteMarketplaceName ?? i.Wb : null
                })
            },
            e: function(e, t) {
                return {
                    requiresLocalExecutor: e.requires_local_executor ?? t?.requiresLocalExecutor,
                    category: t?.plugin.interface?.category ?? null,
                    description: e.short_description ?? null,
                    disabledReason: e.disabled_reason ?? t?.plugin.disabledReason ?? null,
                    displayName: e.display_name,
                    enabled: t?.plugin.enabled ?? !1,
                    id: e.id,
                    isTemplate: !0 === e.is_template,
                    installed: void 0 === t ? void 0 : t?.plugin.installed ?? !1,
                    installationPolicy: e.installation_policy ?? void 0,
                    installedPlugin: t,
                    keywords: e.keywords ?? t?.keywords ?? [],
                    logoDarkPath: e.icon_url_dark ?? t?.logoDarkPath ?? null,
                    logoPath: e.icon_url ?? t?.logoPath ?? null,
                    marketplaceDisplayName: t?.marketplaceDisplayName ?? null,
                    marketplaceName: t?.marketplaceName ?? null,
                    marketplacePath: t?.marketplacePath ?? null,
                    name: t?.plugin.name ?? null,
                    origin: c(t?.marketplaceName),
                    pluginId: t?.plugin.id ?? null,
                    pluginSourceType: t?.plugin.source.type ?? null,
                    remoteMarketplaceName: t?.remoteMarketplaceName ?? null,
                    remotePluginId: e.id,
                    source: "plugin-service",
                    status: e.status
                }
            },
            f: d,
            g: function(e, t) {
                let {
                    browserExtensionUnificationEnabled: n,
                    hiddenPluginIds: a,
                    isComputerUseAvailable: r,
                    isExternalBrowserUseAvailable: l,
                    isInAppBrowserUseAvailable: u,
                    isMessagesAvailable: d
                } = t;
                return (0, o.i)((0, o.j)((0, s.e)({
                    isComputerUseAvailable: r,
                    isExternalBrowserUseAvailable: l,
                    isInAppBrowserUseAvailable: u,
                    isMessagesAvailable: d,
                    plugins: e
                }), a, n)).filter(e => {
                    if (!(0, o.b)(e)) return !1;
                    if (!(0, i.ti)(e.marketplaceName)) return !0;
                    let t = (0, i.fg)(e.plugin.name);
                    return t?.installWhenMissing !== !0 || !0 === t.installWhenMissingRequiresOptIn
                })
            }
        })
    }),
    aaXU: (function(e, t, n) {
        let i = new WeakMap;

        function a(e, t) {
            return null == e ? t : i.get(e) ?? t
        }

        function r(e, t, n) {
            let a = i.get(e);
            i.set(e, t);
            try {
                return n()
            } finally {
                null == a ? i.delete(e) : i.set(e, a)
            }
        }
        n.d(t, {}, {
            a: a,
            b: function(e) {
                return {
                    onFetch(t, n) {
                        let i = a(n, e),
                            l = t.fetchFn;
                        t.fetchFn = () => r(n, i, l)
                    }
                }
            },
            c: r
        })
    }),
    bJEQ: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                return AbortSignal.any([e, AbortSignal.timeout(3e4)])
            }
        })
    }),
    d4xq: (function(e, t, n) {
        var i = n("Q840");
        n("w0gB");
        var a = n("mGK9"),
            r = n("OWtl");
        n("kfGJ");
        let l = (0, i.d)(r.a, (e, t) => {
            let {
                get: n
            } = t;
            return null
        });
        n.d(t, {}, {
            a: async function(e, t, n) {
                return "chatgpt" === n || "unavailable" === n ? "chatgpt" === n : await (0, a.a)(e, t) === "chatgpt"
            },
            b: function(e) {
                return null == e ? [] : [e]
            },
            c: l
        })
    }),
    G5ZH: (function(e, t, n) {
        var i = n("i5ac"),
            a = n.n(i),
            r = n("Q840"),
            l = n("Zqzr"),
            o = n("OiCI"),
            s = n("jEyg"),
            u = n("C0re"),
            d = n("tQpF"),
            c = n("EEop"),
            p = n("ueue"),
            g = n("Gg2s"),
            m = n("OWtl"),
            f = n("ndjw"),
            h = n("eShZ"),
            _ = n("cLdu"),
            v = n("mq2k");
        let b = (0, r.q)(m.a, (e, t) => {
            let {
                hostId: n,
                pluginId: i,
                allowUniqueNameFallback: r = !1,
                productContext: m,
                requestOptions: h
            } = e, {
                get: b,
                scope: I
            } = t, C = !(0, _.i)(n);
            return {
                queryKey: [...(0, u.d)(n, "requested"), b(o.a), i, r, m, C ? b(f.j, {
                    hostId: n
                }).data?.roots : void 0, C ? b(v.b, n) : void 0, C ? b(f.d, {
                    hostId: n
                }).data?.codexHome : void 0],
                enabled: null != i,
                queryFn: async e => {
                    let {
                        signal: t
                    } = e;
                    if (null == i) return null;
                    if ((0, _.i)(n)) {
                        let e = (0, c.a)({
                            hostId: n,
                            pluginId: (0, d.f)({
                                id: i
                            }, !0) ?? i
                        });
                        if (null == e.pluginName) return null;
                        let t = await I.query.getOrFetch(c.l, {
                            ...e,
                            productContext: m
                        }).catch(y);
                        return null == t ? null : (0, p.c)(t)
                    }
                    let o = i;
                    (0, l.Tg)(i) === l.Zc && (null == I.get(v.b, n) && (await I.query.getOrFetch(g.b, n), await I.when(e => {
                        let {
                            get: t
                        } = e;
                        return null != t(v.b, n)
                    }), t.throwIfAborted()), I.get(v.b, n) && (o = `${i.slice(0,-l.Zc.length)}${l._c}`));
                    let [{
                        roots: u
                    }, {
                        codexHome: b
                    }] = await Promise.all([I.query.getOrFetch(f.j, {
                        hostId: n
                    }), I.query.getOrFetch(f.d, {
                        hostId: n
                    })]), [C, E] = await Promise.all([I.query.getOrFetch(_.b, {
                        hostId: n,
                        roots: u,
                        requestOptions: h
                    }), I.query.getOrFetch(p.s, {
                        hostId: n,
                        roots: (0, p.m)({
                            hostId: n,
                            codexHome: b,
                            workspaceRoots: u
                        }),
                        marketplaceKinds: ["local"],
                        isOpenAICuratedRemoteMarketplaceEnabled: !1
                    })]), P = a()([...(0, p.g)(C.marketplaces), ...E.plugins], e => {
                        let {
                            plugin: t,
                            marketplacePath: n
                        } = e;
                        return JSON.stringify([t.id, n])
                    }), A = (0, s.i)({
                        requestedPluginId: o,
                        plugins: P
                    });
                    if (null != A) return A;
                    t.throwIfAborted();
                    let w = (0, l.Tg)(o),
                        T = null == w ? o : o.slice(0, -w.length - 1),
                        k = (0, d.f)({
                            id: o
                        }, !0 === I.get(v.b, n)),
                        S = null == k ? E.marketplaces.find(e => {
                            let {
                                name: t
                            } = e;
                            return t === w
                        })?.path ?? null : null,
                        N = null != k || null == w ? l.Wb : w,
                        R = await I.queryClient.fetchQuery({
                            ...I.query.getOptions(c.l, {
                                hostId: n,
                                productContext: m,
                                marketplacePath: S,
                                pluginName: k ?? T,
                                remoteMarketplaceName: null == S ? N : null,
                                requestOptions: h
                            }),
                            retry: !1,
                            staleTime: 0
                        }).catch(y);
                    if (null == R) return (0, s.i)({
                        requestedPluginId: o,
                        plugins: P,
                        allowUniqueNameFallback: r
                    });
                    let M = R.summary;
                    return M.id === o || null != M.remotePluginId && (0, l.Hi)(M.remotePluginId, o) || M.shareContext?.remotePluginId === o || null != k && M.remotePluginId === k ? (0, p.c)(R) : null
                },
                retry: !1,
                staleTime: 0
            }
        });

        function y(e) {
            if (e instanceof h.FetchError && 404 === e.status || /plugin.*not found|not found.*plugin/i.test(e.message)) return null;
            throw e
        }
        n.d(t, {}, {
            a: b
        })
    }),
    cLdu: (function(e, t, n) {
        n.d(t, {
            a: () => D,
            b: () => x,
            c: () => U,
            d: () => H,
            e: () => j,
            f: () => z,
            g: () => B,
            h: () => G,
            i: () => _.f,
            j: () => K,
            k: () => F,
            l: () => q
        });
        var i = n("QosV"),
            a = n("KUdL"),
            r = n.n(a),
            l = n("Q840"),
            o = n("Zqzr"),
            s = n("D4ZO"),
            u = n("CjTC"),
            d = n("Dgwo"),
            c = n("rljs"),
            p = n("D5PZ"),
            g = n("OiCI"),
            m = n("OFP1"),
            f = n("UOa8"),
            h = n("IVVU"),
            _ = n("C0re"),
            v = n("WzdM"),
            b = n("ueue"),
            y = n("OWtl"),
            I = n("ndjw"),
            C = n("kfGJ"),
            E = n("WFY2"),
            P = n("zUz7"),
            A = n("rvFo"),
            w = n("HFSu"),
            T = n("ASxG"),
            k = n("CsuQ");
        let S = T.object({
                app_id: T.string(),
                tool_name: T.string(),
                type: T.enum(["global", "settings", "thread", "file"]),
                title: T.string(),
                icons: T.array(T.object({
                    src: T.string(),
                    mimeType: T.string().nullish(),
                    sizes: T.array(T.string()).nullish(),
                    theme: T.string().nullish()
                }))
            }).transform(e => {
                let {
                    app_id: t,
                    tool_name: n,
                    ...i
                } = e;
                return {
                    ...i,
                    appId: t,
                    toolName: n
                }
            }),
            N = T.object({
                app_id: T.string(),
                link_id: T.string(),
                tool_name: T.string(),
                title: T.string(),
                search_hint: T.string().trim().min(1).optional().catch(void 0),
                call: T.object({
                    name: T.string().min(1),
                    arguments: T.record(T.string(), T.json()),
                    _meta: T.object({
                        _codex_apps: T.object({
                            resource_uri: T.string().min(1)
                        }).catchall(T.json())
                    }).catchall(T.json())
                })
            }).transform(e => {
                let {
                    app_id: t,
                    link_id: n,
                    tool_name: i,
                    search_hint: a,
                    ...r
                } = e;
                return {
                    ...r,
                    appId: t,
                    linkId: n,
                    toolName: i,
                    searchHint: a
                }
            }),
            R = T.object({
                entrypoints: T.array(S).nullish(),
                search_mention_providers: T.array(N.nullable().catch(null)).catch([]).transform(e => e.filter(e => null != e)),
                settings_entrypoints: T.array(S).nullish(),
                thread_entrypoints: T.array(S).nullish(),
                file_handlers: T.array(S).nullish(),
                settings: T.array(T.object({
                    app_id: T.string(),
                    read_tool_name: T.string(),
                    update_tool_name: T.string()
                })).nullish()
            }).transform(e => ({
                searchMentionProviders: e.search_mention_providers,
                entrypoints: [...e.entrypoints ?? [], ...e.settings_entrypoints ?? [], ...e.thread_entrypoints ?? [], ...e.file_handlers ?? []],
                settings: (e.settings ?? []).map(e => ({
                    appId: e.app_id,
                    readToolName: e.read_tool_name,
                    updateToolName: e.update_tool_name
                }))
            }));
        var M = n("aaXU"),
            O = n("bJEQ"),
            L = n("mq2k");
        let D = C.a,
            x = (0, l.q)(y.a, (e, t) => {
                let {
                    hostId: n,
                    roots: i,
                    requestOptions: a
                } = e, {
                    scope: r
                } = t;
                return {
                    queryKey: [...(0, _.b)(n, "installed-inventory"), i, a?.priority ?? "background"],
                    queryFn: async () => {
                        E.a.info("Loading local plugin inventory", {
                            safe: {},
                            sensitive: {
                                hostId: n
                            }
                        });
                        try {
                            let e = await (0, d.b)(r, n).sendRequest("plugin/installed", null != i && i.length > 0 ? {
                                cwds: i
                            } : {}, {
                                priority: "background",
                                timeoutMs: 3e4,
                                ...a
                            });
                            return E.a.info("Loaded local plugin inventory", {
                                safe: {},
                                sensitive: {
                                    hostId: n
                                }
                            }), e
                        } catch (e) {
                            throw E.a.warning("Failed to load local plugin inventory", {
                                safe: {},
                                sensitive: {
                                    hostId: n,
                                    error: e
                                }
                            }), e
                        }
                    },
                    retry: !1,
                    staleTime: 0
                }
            });

        function U(e, t, n) {
            let i = e.queryClient.getQueriesData({
                    queryKey: (0, _.b)(t, "installed-inventory")
                }).flatMap(e => {
                    let [, t] = e;
                    return (t?.marketplaces ?? []).flatMap(e => {
                        let {
                            plugins: t
                        } = e;
                        return t.filter(e => e.installed && (e.id === n || (0, u.a)(e) === n))
                    })
                }),
                a = e.queryClient.getQueriesData({
                    queryKey: (0, _.d)(t, "installed")
                }).flatMap(e => {
                    let [, t] = e;
                    return (t ?? []).filter(e => {
                        let {
                            plugin: t
                        } = e;
                        return t.installed && (t.id === n || (0, u.a)(t) === n)
                    })
                }),
                r = new Set([...i.map(u.a), ...a.map(e => {
                    let {
                        plugin: t
                    } = e;
                    return (0, u.a)(t)
                })]);
            return 1 === r.size ? [...r][0] ?? void 0 : void 0
        }
        let G = (0, l.q)(y.a, (e, t) => {
            let {
                accountId: n,
                cacheOnly: i = !1,
                hostId: a,
                consumer: l = "ui",
                roots: s,
                productContext: u,
                includeExtensions: d = !0
            } = e, {
                get: p,
                queryClient: m,
                scope: f
            } = t, y = (0, _.f)(a), I = "chatgpt", P = !!y || p(i ? L.a : L.b, a), T = "executor" === l ? [] : p(i ? h.b : h.a);
            return {
                enabled: !i && (y ? null != n : null != s && (a === C.a || "connected" === p(c.b, a))),
                queryKey: y ? [...b.a, "installed", a, "hosted", n, ...null == u || u === I ? [] : [u], ...d ? [] : ["without-extensions"]] : [...(0, _.b)(a, "installed"), s, ..."executor" === l ? [l] : []],
                behavior: (0, M.b)("other"),
                queryFn: async e => {
                    let {
                        signal: t,
                        queryKey: i
                    } = e;
                    if (y) {
                        let e = m.getQueryCache().find({
                                queryKey: i,
                                exact: !0
                            }),
                            a = await async function(e) {
                                let t, {
                                        accountId: n,
                                        includeExtensions: i,
                                        productContext: a,
                                        signal: r,
                                        surface: l
                                    } = e,
                                    s = [];
                                E.a.info("Loading hosted plugin inventory", {
                                    safe: {
                                        productContext: a,
                                        surface: l,
                                        includeExtensions: i ?? ("chatgpt" === a || void 0)
                                    }
                                });
                                do {
                                    let e = await w.CodexRequest.safeGet("/ps/plugins/installed", {
                                        parameters: {
                                            query: {
                                                limit: 1e3,
                                                pageToken: t,
                                                includeExtensions: i ?? ("chatgpt" === a || void 0)
                                            }
                                        },
                                        additionalHeaders: {
                                            ...null == n ? {} : {
                                                "ChatGPT-Account-ID": n
                                            },
                                            ...(0, v.b)(a),
                                            [o.Ab]: l
                                        },
                                        signal: null == r ? void 0 : (0, O.a)(r)
                                    }).catch(e => {
                                        throw E.a[r?.aborted ? "info" : "warning"](r?.aborted ? "Cancelled hosted plugin inventory read" : "Failed to read hosted plugin inventory", {
                                            safe: {
                                                productContext: a,
                                                surface: l
                                            },
                                            sensitive: {
                                                error: e
                                            }
                                        }), e
                                    });
                                    s.push(...e.plugins), t = e.pagination.next_page_token ?? void 0
                                } while (null != t) return E.a.info("Loaded hosted plugin inventory", {
                                    safe: {
                                        productContext: a,
                                        surface: l,
                                        pluginCount: s.length
                                    }
                                }), s
                            }({
                                accountId: n ?? void 0,
                                includeExtensions: d,
                                surface: (0, M.a)(e, "other"),
                                productContext: u ?? I,
                                signal: t
                            });
                        if (f.get(g.a) !== n) throw Error("Plugin account changed while loading installed plugins");
                        return a.map(z)
                    }
                    let {
                        marketplaces: r
                    } = await f.query.fetch(x, {
                        hostId: a,
                        roots: s
                    });
                    return (0, b.n)({
                        hostId: a,
                        plugins: (0, b.g)(r, void 0, l),
                        queryClient: m,
                        signal: (0, O.a)(t)
                    })
                },
                select: e => r()(e.filter(e => {
                    let {
                        marketplaceName: t,
                        plugin: n
                    } = e;
                    return (!P || t !== o.Zc) && !T.includes(n.id)
                }), e => {
                    let {
                        plugin: t
                    } = e;
                    return -(t.installedAt ?? 0)
                }),
                retry: !1,
                staleTime: y ? A.b.FIVE_MINUTES : A.b.ONE_MINUTE
            }
        });

        function q(e) {
            let t, n, a, r, o, s, u, d, c = (0, i.c)(21),
                {
                    enabled: p,
                    hostId: m,
                    consumer: h,
                    roots: v,
                    resolveActiveRoots: b,
                    productContext: y,
                    includeExtensions: E
                } = e,
                P = void 0 === p || p,
                A = void 0 === h ? "ui" : h,
                w = void 0 !== b && b;
            c[0] !== m ? (t = (0, _.f)(m), c[0] = m, c[1] = t) : t = c[1];
            let T = t,
                k = (0, f.b)(T ? C.a : m),
                S = (0, l.z)(g.a);
            (0, l.z)(g.d), c[2] !== m ? (n = {
                hostId: m
            }, c[2] = m, c[3] = n) : n = c[3];
            let N = P && !T && w && null == v;
            c[4] !== N ? (a = {
                enabled: N
            }, c[4] = N, c[5] = a) : a = c[5];
            let {
                data: R,
                isError: M
            } = (0, l.x)(I.j, n, a), O = w ? v ?? R?.roots : v, L = T ? S : null;
            c[6] !== A || c[7] !== m || c[8] !== E || c[9] !== O || c[10] !== y || c[11] !== L ? (r = {
                accountId: L,
                hostId: m,
                consumer: A,
                roots: O,
                productContext: y,
                includeExtensions: E
            }, c[6] = A, c[7] = m, c[8] = E, c[9] = O, c[10] = y, c[11] = L, c[12] = r) : r = c[12];
            let D = P && (T || k?.isLoading !== !0);
            c[13] !== D ? (o = {
                enabled: D
            }, c[13] = D, c[14] = o) : o = c[14];
            let x = (0, l.x)(G, r, o);
            c[15] !== x ? ({
                isLoading: u,
                ...s
            } = x, c[15] = x, c[16] = s, c[17] = u) : (s = c[16], u = c[17]);
            let U = P && (u || !T && (k?.isLoading === !0 || null == O && !(w && M)));
            return c[18] !== s || c[19] !== U ? (d = {
                ...s,
                isLoading: U
            }, c[18] = s, c[19] = U, c[20] = d) : d = c[20], d
        }

        function F(e, t, n) {
            let i = (0, _.f)(t),
                a = i ? (0, g.c)(e) ?? null : null,
                r = i ? void 0 : e.query.getData(I.j, {
                    hostId: t
                })?.roots;
            if ((i ? null != a : null != r) && (n.marketplaceName !== o.Zc || !0 !== e.get(L.b, t)))
                for (let l of i ? [void 0, "catalog"] : [void 0]) e.query.setData(G, {
                    accountId: a,
                    hostId: t,
                    roots: r,
                    productContext: l
                }, e => {
                    if (null == e) return;
                    let t = (0, s.e)(n.plugin),
                        i = e.find(e => {
                            let {
                                plugin: n
                            } = e;
                            return (0, s.e)(n) === t
                        }),
                        a = {
                            ...n,
                            plugin: {
                                ...n.plugin,
                                enabled: !0,
                                installed: !0,
                                installedAt: n.plugin.installedAt ?? i?.plugin.installedAt ?? null
                            }
                        };
                    return null != i ? e.map(e => (0, s.e)(e.plugin) === t ? a : e) : [...e, a]
                })
        }
        async function K(e, t, n) {
            if ((0, _.f)(t)) {
                let i = {
                    accountId: (0, g.c)(e) ?? null,
                    hostId: t,
                    roots: void 0,
                    productContext: n
                };
                if (!1 === e.query.getOptions(G, i).enabled) return;
                await B(e, i, "sidebar");
                return
            }
            let {
                roots: i
            } = await e.query.getOrFetch(I.j, {
                hostId: t
            }), {
                authLoading: a
            } = e.get(m.g);
            if (a) return;
            let r = {
                accountId: null,
                hostId: t,
                roots: i
            };
            !1 !== e.query.getOptions(G, r).enabled && await e.query.getOrFetch(G, r)
        }
        async function H(e, t) {
            let {
                productContext: n,
                signal: i,
                surface: a
            } = t;
            i?.throwIfAborted();
            let r = e.get(g.a);
            if (null == r) throw Error("Installed plugins require an authenticated account");
            let l = await B(e, {
                accountId: r,
                hostId: C.a,
                roots: void 0,
                productContext: "chatgpt" === n ? void 0 : n
            }, a);
            if (i?.throwIfAborted(), e.get(g.a) !== r) throw Error("Plugin account changed while loading installed plugins");
            return l
        }

        function B(e, t, n) {
            let i = e.query.snapshot(G, t),
                a = e.queryClient.getQueryCache().build(e.queryClient, e.queryClient.defaultQueryOptions(i.getOptions()));
            return (0, M.c)(a, n, () => i.getOrFetch())
        }

        function j(e) {
            return null == e ? null : {
                creatorAccountUserId: e.creator_account_user_id ?? null,
                scope: e.scope,
                workspaceId: e.workspace_id
            }
        }

        function z(e) {
            var t, n;
            let i, a = e.release.interface,
                r = "enabled" in e,
                l = e.release.keywords ?? a.capabilities,
                s = r && e.enabled && "ENABLED" === e.status ? e.release.skills?.find(t => t.name === e.release.onboarding_skill_name && !e.disabled_skill_names.includes(t.name)) : null,
                u = (t = "extensions" in e ? e.extensions : void 0, n = e.id, i = R.safeParse(t), null == t || i.success || E.a.warning("Ignored invalid hosted plugin extension declarations", {
                    safe: {
                        pluginId: n
                    },
                    sensitive: {
                        validationErrors: k.g(i.error)
                    }
                }), i.success ? i.data : null);
            return {
                referenceIds: "WORKSPACE" === e.scope && null != e.discoverability ? [`${e.name}@${"LISTED"===e.discoverability?"workspace-directory":"workspace-shared-with-me"}`] : void 0,
                defaultPinned: "extensions" in e && e.extensions?.default_pinned === !0,
                canonicalAppId: e.canonical_app_id ?? null,
                discoverability: e.discoverability,
                hostedThreadEntrypoints: "extensions" in e ? e.extensions?.thread_entrypoints?.flatMap(e => {
                    let t = (0, p.a)({
                        appId: e.app_id,
                        toolName: e.tool_name,
                        title: e.title,
                        resourceUri: e.resource_uri,
                        icon: (0, P.a)(e),
                        linkId: e.link_id ?? void 0
                    });
                    return null == t ? [] : [t]
                }) : void 0,
                appIds: [e.canonical_app_id, e.connector_id, ...e.release.app_ids ?? []].filter(e => null != e),
                onboardingSkill: null == s ? null : {
                    name: s.name,
                    id: s.plugin_release_skill_id
                },
                isTemplate: e.is_template ?? !1,
                templatePluginId: e.template_plugin_id ?? null,
                ownership: j(e),
                extensions: u,
                servicePlugin: e,
                description: a.short_description ?? e.release.description,
                displayName: e.release.display_name,
                composerIconPath: a.composer_icon_url ?? null,
                logoDarkPath: a.logo_url_dark ?? null,
                logoPath: a.logo_url,
                marketplaceDisplayName: null,
                marketplaceName: o._c,
                marketplacePath: null,
                remoteMarketplaceName: o._c,
                keywords: l,
                requiresLocalExecutor: !0 === e.release.requires_local_executor,
                plugin: {
                    authPolicy: e.authentication_policy ?? "ON_USE",
                    installedAt: r && null != e.installed_at ? Date.parse(e.installed_at) / 1e3 : null,
                    disabledReason: e.disabled_reason ?? ("DISABLED_BY_ADMIN" === e.status ? "disabled_by_admin" : null),
                    eligiblePlanTypes: e.eligible_plan_types ?? null,
                    availability: "DISABLED_BY_ADMIN" === e.status ? "DISABLED_BY_ADMIN" : "AVAILABLE",
                    enabled: r && e.enabled,
                    id: `${e.name}@${o._c}`,
                    installed: r,
                    installPolicy: e.installation_policy ?? "AVAILABLE",
                    installPolicySource: e.installation_policy_source ?? null,
                    interface: {
                        brandColor: a.brand_color ?? null,
                        capabilities: a.capabilities,
                        category: a.category,
                        composerIcon: null,
                        composerIconUrl: a.composer_icon_url ?? null,
                        defaultPrompt: a.default_prompts ?? (null == a.default_prompt ? null : [a.default_prompt]),
                        developerName: a.developer_name ?? null,
                        displayName: e.release.display_name,
                        logo: null,
                        logoDark: null,
                        logoUrl: a.logo_url,
                        logoUrlDark: a.logo_url_dark ?? null,
                        longDescription: a.long_description ?? null,
                        privacyPolicyUrl: a.privacy_policy_url ?? null,
                        screenshots: [],
                        screenshotUrls: a.screenshot_urls ?? [],
                        shortDescription: a.short_description,
                        termsOfServiceUrl: a.terms_of_service_url ?? null,
                        websiteUrl: a.website_url ?? null
                    },
                    keywords: l,
                    localVersion: null,
                    mustShowInstallationInterstitial: e.must_show_installation_interstitial ?? null,
                    name: e.name,
                    remotePluginId: e.id,
                    shareContext: null,
                    source: {
                        type: "remote"
                    },
                    version: e.release.version ?? null
                }
            }
        }
    }),
    Buqh: (function(e, t, n) {
        var i = n("Q840"),
            a = n("Zqzr"),
            r = n("Dgwo"),
            l = n("tl5a"),
            o = n("IVVU"),
            s = n("C0re"),
            u = n("ueue"),
            d = n("OWtl"),
            c = n("ndjw"),
            p = n("kfGJ"),
            g = n("rvFo"),
            m = n("bJEQ"),
            f = n("mq2k");
        let h = (0, i.q)(d.a, (e, t) => {
            let {
                get: n,
                queryClient: i,
                scope: d
            } = t, h = n(f.b, e), _ = n(o.a), {
                data: v,
                isFetched: b
            } = n(c.j, {
                hostId: e
            }), {
                data: y,
                isFetched: I
            } = n(c.d, {
                hostId: e
            }), C = (0, u.m)({
                codexHome: y?.codexHome,
                hostId: e,
                workspaceRoots: v?.roots
            });
            return {
                enabled: b && I && (e === p.a || "connected" === n(l.b, e)),
                queryKey: [...(0, s.b)(e, "local"), C],
                queryFn: async t => {
                    let {
                        signal: n
                    } = t, {
                        featuredPluginIds: a,
                        marketplaceLoadErrors: l,
                        marketplaces: o
                    } = await (0, r.b)(d, e).sendRequest("plugin/list", {
                        ...C.length > 0 ? {
                            cwds: C
                        } : {},
                        marketplaceKinds: ["local"]
                    });
                    return {
                        featuredPluginIds: a,
                        marketplaceLoadErrors: l,
                        marketplaces: (0, u.t)(o),
                        plugins: await (0, u.n)({
                            hostId: e,
                            plugins: (0, u.g)(o),
                            queryClient: i,
                            signal: (0, m.a)(n)
                        })
                    }
                },
                retry: !1,
                select: e => ({
                    ...e,
                    plugins: e.plugins.filter(e => {
                        let {
                            marketplaceName: t,
                            plugin: n
                        } = e;
                        return (!h || t !== a.Zc) && !_.includes(n.id)
                    })
                }),
                staleTime: g.b.ONE_MINUTE
            }
        });
        n.d(t, {}, {
            a: h,
            b: async function(e, t) {
                await Promise.all([e.query.getOrFetch(c.j, {
                    hostId: t
                }), e.query.getOrFetch(c.d, {
                    hostId: t
                })]), !1 !== e.query.getOptions(h, t).enabled && await e.query.getOrFetch(h, t)
            }
        })
    }),
    PwKw: (function(e, t, n) {
        var i = n("QosV"),
            a = n("Q840"),
            r = n("OiCI"),
            l = n("usf5"),
            o = n("IIEq"),
            s = n("jWaO"),
            u = n("yrds"),
            d = n("Vyeu"),
            c = n("IVVU"),
            p = n("C0re"),
            g = n("WzdM"),
            m = n("SlNh"),
            f = n("ueue"),
            h = n("Gg2s"),
            _ = n("OWtl"),
            v = n("ndjw"),
            b = n("kfGJ"),
            y = n("rvFo"),
            I = n("HFSu"),
            C = n("aFrt"),
            E = n("aaXU"),
            P = n("bJEQ"),
            A = n("d4xq"),
            w = n("cLdu"),
            T = n("Buqh"),
            k = n("mq2k");
        let S = (0, a.q)(_.a, (e, t) => {
            let {
                get: n,
                queryClient: i,
                scope: a
            } = t, l = n(A.c, e), o = n(r.a);
            return {
                enabled: null != o,
                queryKey: (0, p.c)(e, "home", ...null == o ? [] : [o], ...(0, A.b)(l)),
                behavior: (0, E.b)("plugin_directory"),
                queryFn: async t => {
                    let {
                        signal: n,
                        queryKey: r
                    } = t, o = (0, E.a)(i.getQueryCache().find({
                        queryKey: r,
                        exact: !0
                    }), "plugin_directory");
                    return e === b.a || await (0, A.a)(a, e, l) ? I.CodexRequest.safeGet("/ps/plugins/home", {
                        additionalHeaders: (0, g.b)(),
                        surface: o,
                        signal: (0, P.a)(n)
                    }) : null
                },
                retry: !1,
                staleTime: y.b.ONE_HOUR,
                gcTime: y.b.ONE_HOUR
            }
        });
        n.d(t, {}, {
            a: async function(e, t, n) {
                if (null == (0, r.c)(e)) return;
                let i = async () => {
                    let i = e.query.snapshot(S, t);
                    if (void 0 !== i.getData()) return;
                    let a = e.queryClient.getQueryCache().build(e.queryClient, e.queryClient.defaultQueryOptions(i.getOptions()));
                    await (0, E.c)(a, n, () => i.getOrFetch())
                };
                t === b.a ? await i() : await (0, A.a)(e, t, e.get(A.c, t)) ? (await e.query.getOrFetch(h.b, t), await Promise.all([...e.get(k.b, t) ? [i()] : [], (0, T.b)(e, t)])) : await (0, T.b)(e, t)
            },
            b: S,
            c: function(e) {
                let t, n, r, p, g, _, y, I, E, P, A, N, R, M, O = (0, i.c)(50),
                    {
                        hostId: L
                    } = e,
                    D = void 0 === L ? b.a : L,
                    x = D === b.a,
                    U = !x;
                O[0] !== U ? (t = {
                    enabled: U
                }, O[0] = U, O[1] = t) : t = O[1];
                let {
                    isLoading: G
                } = (0, a.x)(h.b, D, t), q = (0, a.x)(k.b, D);
                O[2] !== D ? (n = {
                    hostId: D
                }, O[2] = D, O[3] = n) : n = O[3];
                let F = !x;
                O[4] !== F ? (r = {
                    enabled: F
                }, O[4] = F, O[5] = r) : r = O[5];
                let {
                    data: K,
                    isLoading: H
                } = (0, a.x)(v.j, n, r);
                O[6] !== D ? (p = {
                    hostId: D
                }, O[6] = D, O[7] = p) : p = O[7];
                let B = !x;
                O[8] !== B ? (g = {
                    enabled: B
                }, O[8] = B, O[9] = g) : g = O[9];
                let {
                    isLoading: j
                } = (0, a.x)(v.d, p, g), z = !x;
                O[10] !== z ? (_ = {
                    enabled: z
                }, O[10] = z, O[11] = _) : _ = O[11];
                let {
                    data: W,
                    error: V,
                    isLoading: Y
                } = (0, a.x)(T.a, D, _), Q = !0 === q;
                O[12] !== Q ? (y = {
                    enabled: Q
                }, O[12] = Q, O[13] = y) : y = O[13];
                let {
                    data: X,
                    error: $,
                    isLoading: Z
                } = (0, a.x)(S, D, y), J = K?.roots;
                O[14] !== D || O[15] !== J ? (I = {
                    hostId: D,
                    roots: J,
                    productContext: "catalog"
                }, O[14] = D, O[15] = J, O[16] = I) : I = O[16];
                let {
                    data: ee,
                    error: et
                } = (0, w.l)(I), en = (0, l.b)(), ei = !x;
                O[17] !== D || O[18] !== ei ? (E = {
                    enabled: ei,
                    hostId: D
                }, O[17] = D, O[18] = ei, O[19] = E) : E = O[19];
                let ea = (0, o.a)(E);
                O[20] !== ea || O[21] !== D ? (P = {
                    computerUseAvailability: ea,
                    hostId: D
                }, O[20] = ea, O[21] = D, O[22] = P) : P = O[22];
                let er = (0, d.a)(P),
                    el = !x;
                O[23] !== D || O[24] !== el ? (A = {
                    enabled: el,
                    hostId: D
                }, O[23] = D, O[24] = el, O[25] = A) : A = O[25];
                let eo = (0, s.a)(A),
                    es = !x;
                O[26] !== D || O[27] !== es ? (N = {
                    enabled: es,
                    hostId: D
                }, O[26] = D, O[27] = es, O[28] = N) : N = O[28];
                let eu = (0, u.a)(N),
                    {
                        hiddenPluginIds: ed
                    } = (0, a.z)(c.g),
                    ec = (q ? $ : null) ?? (x ? null : V) ?? et ?? null,
                    ep = null == q || q && Z || !x && (G || H || j || Y || ea.isLoading || eo.isLoading || eu.isLoading || er.isLoading);
                if (null != ec || ep || !x && null == W || q && void 0 === X) {
                    let e;
                    return O[29] !== ec || O[30] !== ep ? (e = {
                        categories: void 0,
                        error: ec,
                        isLoading: ep
                    }, O[29] = ec, O[30] = ep, O[31] = e) : e = O[31], e
                }
                if (O[32] !== en || O[33] !== ea.available || O[34] !== eo.available || O[35] !== ed || O[36] !== eu.available || O[37] !== ee || O[38] !== x || O[39] !== q || O[40] !== W?.featuredPluginIds || O[41] !== W?.plugins || O[42] !== er.available || O[43] !== X) {
                    let e, t = {
                        isComputerUseAvailable: ea.available,
                        isExternalBrowserUseAvailable: eo.available,
                        isInAppBrowserUseAvailable: eu.available,
                        isMessagesAvailable: er.available
                    };
                    O[45] !== x || O[46] !== W?.featuredPluginIds ? (e = x ? [] : W?.featuredPluginIds ?? [], O[45] = x, O[46] = W?.featuredPluginIds, O[47] = e) : e = O[47], R = function(e) {
                        let {
                            featuredPluginIds: t,
                            hiddenPluginIds: n,
                            installedPlugins: i,
                            localPlugins: a,
                            remoteHome: r
                        } = e, l = new Map;
                        for (let e of [...i ?? [], ...a])
                            for (let t of [e.plugin.id, e.plugin.remotePluginId, e.plugin.shareContext?.remotePluginId]) null != t && l.set(t, e);
                        let o = new Set(n),
                            s = new Map;
                        for (let e of r?.sections ?? []) {
                            let t = e.id,
                                n = e.plugins.flatMap(e => {
                                    let t = l.get(e.id) ?? (null == i ? void 0 : null);
                                    return o.has(e.id) || null != t && o.has(t.plugin.id) ? [] : [(0, C.e)(e, t)]
                                }),
                                a = e.id.trim() || e.url_slug?.trim();
                            a && n.forEach((e, t) => {
                                e.homeImpressionPlacement = {
                                    sectionId: a,
                                    position: t
                                }
                            });
                            let r = s.get(t);
                            null == r ? s.set(t, {
                                id: t,
                                title: e.title,
                                urlSlug: e.url_slug,
                                plugins: n
                            }) : (r.plugins.push(...n), null != e.url_slug && (r.urlSlug = e.url_slug))
                        }
                        if (null == r) {
                            let e = new Set;
                            for (let {
                                    plugins: n,
                                    section: i
                                }
                                of(0, m.h)({
                                    connectedPlugins: [],
                                    featuredPluginIds: t,
                                    plugins: a
                                })) {
                                let t = n.flatMap(t => e.has(t.plugin.id) ? [] : (e.add(t.plugin.id), [(0, C.a)(t)])),
                                    a = s.get(i.id);
                                null != a ? a.plugins.unshift(...t) : s.set(i.id, {
                                    id: i.id,
                                    title: i.title,
                                    urlSlug: null,
                                    plugins: t
                                })
                            }
                        }
                        return Array.from(s.values()).filter(e => {
                            let {
                                plugins: t
                            } = e;
                            return t.length > 0
                        }).map(e => ({
                            ...e,
                            plugins: e.plugins.slice(0, 9)
                        }))
                    }({
                        featuredPluginIds: (0, f.d)({
                            featuredPluginIds: e,
                            ...t
                        }),
                        hiddenPluginIds: ed,
                        installedPlugins: ee,
                        localPlugins: (0, C.g)(x ? [] : W?.plugins ?? [], {
                            browserExtensionUnificationEnabled: en,
                            hiddenPluginIds: ed,
                            ...t
                        }),
                        remoteHome: q ? X ?? void 0 : void 0
                    }), O[32] = en, O[33] = ea.available, O[34] = eo.available, O[35] = ed, O[36] = eu.available, O[37] = ee, O[38] = x, O[39] = q, O[40] = W?.featuredPluginIds, O[41] = W?.plugins, O[42] = er.available, O[43] = X, O[44] = R
                } else R = O[44];
                return O[48] !== R ? (M = {
                    categories: R,
                    error: null,
                    isLoading: !1
                }, O[48] = R, O[49] = M) : M = O[49], M
            }
        })
    }),
    mq2k: (function(e, t, n) {
        var i = n("Q840"),
            a = n("Gg2s"),
            r = n("OWtl"),
            l = n("kfGJ"),
            o = n("OMIV"),
            s = n("jBHQ");
        let u = "4218407052",
            d = (0, i.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return p(e, n, !1)
            }),
            c = (0, i.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return p(e, n, !0)
            });

        function p(e, t, n) {
            if (e === l.a) return !0;
            let {
                data: i
            } = n ? t(a.b, e, {
                enabled: !1
            }) : t(a.b, e);
            if (null == i) return;
            let r = i.find(e => "remote_plugin" === e.name);
            return null != r ? r.enabled : t(o.h, u) ? void 0 : t(n ? s.a : o.e, u)
        }
        n.d(t, {}, {
            a: c,
            b: d
        })
    }),
    ueue: (function(e, t, n) {
        var i = n("QosV"),
            a = n("Q840"),
            r = n("Zqzr"),
            l = n("D4ZO"),
            o = n("SqAt"),
            s = n("Dgwo"),
            u = n("CfsC"),
            d = n("wHrF"),
            c = n("UOa8"),
            p = n("MI1z"),
            g = n("IIEq"),
            m = n("jWaO"),
            f = n("yrds"),
            h = n("rO8L"),
            _ = n("Vyeu"),
            v = n("w8IV"),
            b = n("sLlu"),
            y = n("OWtl"),
            I = n("ndjw"),
            C = n("kfGJ"),
            E = n("hZax"),
            P = n("bnxy"),
            A = n("rvFo"),
            w = n("JRAe"),
            T = n("AjOy"),
            k = n("lhA2"),
            S = n("IVVU"),
            N = n("C0re"),
            R = n("CBsD");
        let M = new Set,
            O = [],
            L = [],
            D = [],
            x = [],
            U = [],
            G = [],
            q = [r.Zc],
            F = ["datadog", "statsig"],
            K = new Set(["codex-official", r.Yc, r.Zc, r._c, "openai-primary-runtime"].map(er)),
            H = (0, a.q)(y.a, (e, t) => {
                var n, i, a;
                let l, {
                        hostId: o,
                        isOpenAICuratedRemoteMarketplaceEnabled: u,
                        marketplaceKinds: d,
                        roots: c
                    } = e,
                    {
                        get: p,
                        queryClient: g,
                        scope: m
                    } = t,
                    f = p(S.a),
                    h = function(e) {
                        let {
                            isOpenAICuratedRemoteMarketplaceEnabled: t
                        } = e;
                        return t ? q : x
                    }({
                        isOpenAICuratedRemoteMarketplaceEnabled: u
                    }),
                    _ = (n = o, i = c, a = d, l = u ? r._c : r.Zc, null == a ? [...(0, N.b)(n, "list"), i, "curated-marketplace", l] : [...(0, N.b)(n, "list"), i, "marketplace-kinds", a, "curated-marketplace", l]);
                return {
                    queryKey: _,
                    queryFn: async () => {
                        var e, t;
                        let n = await (0, s.b)(m, o).sendRequest("plugin/list", null == d ? {
                                ...c.length > 0 ? {
                                    cwds: c
                                } : {},
                                forceRefetch: M.has(o) || void 0
                            } : {
                                ...c.length > 0 ? {
                                    cwds: c
                                } : {},
                                marketplaceKinds: d,
                                forceRefetch: M.has(o) || void 0
                            }),
                            i = (e = n.marketplaces, 0 === (t = h).length ? e : e.filter(e => !t.includes(e.name))),
                            a = ec(i, g.getQueryData(_)?.plugins),
                            l = n.featuredPluginIds.filter(e => {
                                let t = ea(e).toLowerCase();
                                return !F.some(e => t === e || t.startsWith(`${e}-`))
                            }).filter(e => !h.some(t => e.endsWith(`@${t}`)));
                        return {
                            bundledCodexAppToolsPlugin: i.find(e => {
                                let {
                                    name: t
                                } = e;
                                return (0, r.ti)(t)
                            })?.plugins.find(e => {
                                let {
                                    name: t
                                } = e;
                                return t === r.gb
                            }),
                            featuredPluginIds: l,
                            marketplaceLoadErrors: n.marketplaceLoadErrors,
                            marketplaces: eo(i),
                            plugins: await es({
                                hostId: o,
                                plugins: a,
                                queryClient: g
                            })
                        }
                    },
                    select: e => ({
                        ...e,
                        plugins: e.plugins.filter(e => {
                            let {
                                plugin: t
                            } = e;
                            return !f.includes(t.id)
                        })
                    }),
                    staleTime: A.b.SIX_HOURS,
                    gcTime: A.b.FIVE_MINUTES
                }
            }),
            B = (0, a.q)(y.a, (e, t) => {
                let {
                    cacheOnly: n = !1,
                    hostId: i,
                    marketplaceKind: a
                } = e, {
                    get: r,
                    queryClient: l,
                    scope: o
                } = t, u = r(n ? S.b : S.a), d = [...(0, N.b)(i, "marketplace-kind"), a];
                return {
                    ...n ? {
                        enabled: !1
                    } : {},
                    queryKey: d,
                    queryFn: async () => {
                        let e = await (0, s.b)(o, i).sendRequest("plugin/list", {
                            marketplaceKinds: [a],
                            forceRefetch: M.has(i) || void 0
                        });
                        return es({
                            hostId: i,
                            plugins: ec(e.marketplaces, l.getQueryData(d)),
                            queryClient: l
                        })
                    },
                    select: e => e.filter(e => {
                        let {
                            plugin: t
                        } = e;
                        return !u.includes(t.id)
                    }),
                    staleTime: A.b.SIX_HOURS
                }
            }),
            j = (0, a.d)(y.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(B, {
                    cacheOnly: !0,
                    hostId: e,
                    marketplaceKind: "local"
                })
            });

        function z(e) {
            let {
                marketplacePath: t,
                remoteMarketplaceName: n
            } = e;
            if (null != t && null != n) throw Error("plugin marketplace request requires one marketplace source");
            if (null != t) return {
                marketplacePath: t
            };
            if (null != n) return {
                remoteMarketplaceName: n
            };
            throw Error("plugin marketplace request requires a marketplace source")
        }

        function W(e) {
            return e.marketplacePath ?? `remote:${e.remoteMarketplaceName}`
        }
        async function V() {}
        async function Y() {}
        async function Q() {
            return {
                availablePlugins: G,
                installedPlugins: G
            }
        }

        function X(e) {
            let {
                featuredPluginIds: t,
                ...n
            } = e;
            return t.filter(e => ee(e, n))
        }

        function $(e) {
            let {
                plugins: t,
                ...n
            } = e;
            return t.filter(e => ee(e.plugin.id, n))
        }

        function Z(e) {
            return e.filter(e => e.plugin.installed)
        }

        function J(e) {
            let {
                enabled: t,
                installed: n,
                pluginId: i,
                plugins: a
            } = e;
            return a.some(e => e.plugin.id === i && (e.plugin.installed !== n || e.plugin.enabled !== t)) ? a.map(e => e.plugin.id === i ? {
                ...e,
                plugin: {
                    ...e.plugin,
                    enabled: t,
                    installed: n
                }
            } : e) : a
        }

        function ee(e, t) {
            let {
                isComputerUseAvailable: n,
                isExternalBrowserUseAvailable: i,
                isInAppBrowserUseAvailable: a,
                isMessagesAvailable: l
            } = t;
            return ea(e) === r.nc ? a || i : !(!a && et(e) || !i && en(e) || !n && ei(e)) && (!!l || e !== v.a)
        }

        function et(e) {
            let t = ea(e);
            return t === r.nc || t === r.sc
        }

        function en(e) {
            let t = ea(e);
            return "chrome" === t || "chrome-dev" === t || "chrome-internal" === t
        }

        function ei(e) {
            return "computer-use" === ea(e)
        }

        function ea(e) {
            let t = e.indexOf("@");
            return -1 === t ? e : e.slice(0, t)
        }

        function er(e) {
            return e.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")
        }

        function el(e) {
            return K.has(er(e))
        }

        function eo(e) {
            let t = new Map;
            for (let n of e) {
                let e = `${n.name}\0${n.path??""}`;
                if (t.has(e)) continue;
                let i = el(n.name);
                t.set(e, {
                    displayName: n.interface?.displayName ?? null,
                    isBuiltIn: i,
                    name: n.name,
                    path: n.path,
                    pluginCount: n.plugins.length
                })
            }
            return Array.from(t.values()).sort((e, t) => {
                let n = e.displayName?.trim() || e.name,
                    i = t.displayName?.trim() || t.name;
                return n.localeCompare(i)
            })
        }
        async function es(e) {
            let {
                hostId: t,
                plugins: n,
                queryClient: i,
                signal: a
            } = e, r = [...n];
            return await Promise.all(Array.from({
                length: Math.min(4, n.length)
            }, (e, l) => (async function e(l) {
                let o = n[l];
                if (null == o) return;
                let [s, u, d] = await Promise.all([eu(o.composerIconPath, t, i, a), eu(o.logoPath, t, i, a), eu(o.logoDarkPath, t, i, a)]);
                (null != s || null != u || null != d) && (r[l] = {
                    ...o,
                    composerIconPath: s ?? o.composerIconPath,
                    logoDarkPath: d ?? o.logoDarkPath,
                    logoPath: u ?? o.logoPath,
                    plugin: o.plugin.interface ? {
                        ...o.plugin, interface: {
                            ...o.plugin.interface, composerIcon: s ?? o.plugin.interface.composerIcon, logo: u ?? o.plugin.interface.logo, ...null == d ? {} : {
                                logoDark: d
                            }
                        }
                    } : o.plugin
                }), await e(l + 4)
            })(l))), r
        }
        async function eu(e, t, n, i) {
            return (0, R.e)(e, t, n, i)
        }

        function ed(e) {
            var t, n;
            let {
                codexHome: i,
                hostId: a,
                rootsOverrideCwd: l,
                workspaceRoots: o
            } = e, s = a === C.a && null != i ? (0, P.p)(i, ".tmp/marketplaces/openai-internal-testing") : null;
            return t = [..."string" == typeof l ? [l] : l ?? o ?? [], ...null == s ? [] : [s]], n = i, Array.from(new Set(t.map(e => e.trim()).filter(e => {
                var t, i;
                return (0, r.Ih)(e) && (t = e, null == (i = n) || ((0, r.Pi)(i) || (0, r.Ri)(i) ? (0, r.Pi)(t) || (0, r.Ri)(t) : t.startsWith("/") && !t.startsWith("//")))
            })))
        }

        function ec(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui",
                {
                    plugins: i,
                    freshDirectoryPluginIds: a
                } = (0, l.a)(e, n),
                r = new Map(t.map(e => [(0, l.e)(e.plugin), e])),
                o = !1,
                s = i.map(e => {
                    let t = {
                            ...e,
                            ...ep(e.plugin)
                        },
                        n = (0, l.e)(t.plugin),
                        i = r.get(n);
                    return !t.plugin.installed || null == i || a.has(n) ? t : (o || (o = t.marketplaceName !== i.marketplaceName || t.marketplacePath !== i.marketplacePath), {
                        ...i,
                        plugin: {
                            ...t.plugin,
                            id: i.plugin.id,
                            interface: i.plugin.interface ?? t.plugin.interface,
                            keywords: i.plugin.keywords ?? t.plugin.keywords,
                            name: i.plugin.name,
                            remotePluginId: i.plugin.remotePluginId ?? t.plugin.remotePluginId,
                            shareContext: i.plugin.shareContext ?? t.plugin.shareContext,
                            source: i.plugin.source
                        }
                    })
                });
            if (!o) return s;
            let u = new Map(s.map(e => [(0, l.e)(e.plugin), e]));
            return [...t.flatMap(e => {
                let t = (0, l.e)(e.plugin),
                    n = u.get(t);
                return u.delete(t), null == n ? [] : [n]
            }), ...u.values()]
        }

        function ep(e, t) {
            let n = (0, d.c)(e.remotePluginId)?.iconUrl;
            if (null != n) return {
                composerIconPath: n,
                logoDarkPath: n,
                logoPath: n
            };
            let i = e.interface,
                a = i?.composerIcon ?? i?.composerIconUrl,
                r = i?.logo ?? i?.logoUrl,
                l = i?.logoDark ?? i?.logoUrlDark,
                o = (0, w.a)(e),
                s = null != r || null != l,
                u = a ?? (s ? null : o),
                c = s ? r ?? l ?? null : o ?? t?.logoUrl ?? t?.logoUrlDark ?? null,
                p = s ? l ?? null : o ?? t?.logoUrlDark ?? t?.logoUrl ?? null;
            if (null != c) return {
                composerIconPath: u,
                logoDarkPath: p,
                logoPath: c
            };
            let g = (0, k.a)(e.remotePluginId ?? e.shareContext?.remotePluginId ?? e.id);
            return {
                composerIconPath: u ?? g,
                logoDarkPath: null,
                logoPath: g
            }
        }
        n.d(t, {
            a: () => N.a
        }, {
            b: j,
            c: function(e) {
                return {
                    ...ep(e.summary),
                    description: e.summary.interface?.shortDescription ?? e.description ?? null,
                    displayName: e.summary.interface?.displayName ?? null,
                    marketplaceDisplayName: null,
                    marketplaceName: e.marketplaceName,
                    plugin: e.summary,
                    keywords: e.summary.keywords,
                    ...(0, l.d)({
                        marketplaceName: e.marketplaceName,
                        marketplacePath: e.marketplacePath
                    })
                }
            },
            d: X,
            e: $,
            f: function(e) {
                let {
                    buildFlavor: t,
                    plugins: n
                } = e, i = (0, r.Ng)(t);
                return n.filter(e => !(0, r.ti)(e.marketplaceName) || e.marketplaceName === i)
            },
            g: ec,
            h: ep,
            i: W,
            j: z,
            k: function(e) {
                let t = e.plugin.remotePluginId ?? e.plugin.shareContext?.remotePluginId;
                return `${W(e)}:${e.plugin.id}:${t??""}`
            },
            l: function(e) {
                return {
                    ...z(e),
                    pluginName: (0, o.a)(e)
                }
            },
            m: ed,
            n: es,
            o: el,
            p: ei,
            q: en,
            r: et,
            s: H,
            t: eo,
            u: function(e) {
                let {
                    enabled: t,
                    hostId: n,
                    installed: i,
                    pluginId: a,
                    queryClient: r
                } = e;
                r.setQueriesData({
                    queryKey: (0, N.b)(n, "list")
                }, e => {
                    if (null == e) return e;
                    let n = J({
                        enabled: t,
                        installed: i,
                        pluginId: a,
                        plugins: e.plugins
                    });
                    return n === e.plugins ? void 0 : {
                        ...e,
                        plugins: n
                    }
                }), r.setQueriesData({
                    queryKey: (0, N.b)(n, "marketplace-kind")
                }, e => {
                    if (null == e) return;
                    let n = J({
                        enabled: t,
                        installed: i,
                        pluginId: a,
                        plugins: e
                    });
                    return n === e ? void 0 : n
                }), r.setQueriesData({
                    queryKey: (0, N.d)(n, "installed")
                }, e => {
                    if (null == e) return;
                    if (!i) {
                        let t = e.filter(e => e.plugin.id !== a);
                        return t.length === e.length ? void 0 : t
                    }
                    let n = J({
                        enabled: t,
                        installed: i,
                        pluginId: a,
                        plugins: e
                    });
                    return n === e ? void 0 : n
                }), r.setQueriesData({
                    queryKey: (0, N.d)(n, "detail")
                }, e => {
                    if (null != e && e.summary.id === a && (e.summary.installed !== i || e.summary.enabled !== t)) return {
                        ...e,
                        summary: {
                            ...e.summary,
                            enabled: t,
                            installed: i
                        }
                    }
                })
            },
            v: function(e, t, n) {
                let r, l, o, s, d, v, y, C, P, A, w, k, S, R, x, q, F, K, B, j, z, W, J, ee = (0, i.c)(78),
                    et = n?.enabled !== !1;
                ee[0] !== e || ee[1] !== et ? (r = {
                    enabled: et,
                    hostId: e
                }, ee[0] = e, ee[1] = et, ee[2] = r) : r = ee[2];
                let en = (0, h.a)(r) && et,
                    ei = n?.additionalMarketplaceKinds ?? D,
                    ea = (0, E.f)("4218407052"),
                    er = (0, c.b)(e),
                    el = n?.includeRemoteCatalog ?? !0;
                ee[3] !== ei || ee[4] !== er?.authMethod || ee[5] !== ea || ee[6] !== n?.includeRemoteCatalog || ee[7] !== el ? (l = function(e) {
                    let {
                        additionalMarketplaceKinds: t,
                        includeRemoteCatalog: n,
                        includeVerticalCatalog: i
                    } = e;
                    return n && !i && 0 === t.length ? null : i ? ["local", "vertical", ...t] : ["local", ...t]
                }({
                    additionalMarketplaceKinds: ei,
                    includeRemoteCatalog: el,
                    includeVerticalCatalog: n?.includeRemoteCatalog !== !1 && !ea && (0, T.a)(er?.authMethod ?? null)
                }), ee[3] = ei, ee[4] = er?.authMethod, ee[5] = ea, ee[6] = n?.includeRemoteCatalog, ee[7] = el, ee[8] = l) : l = ee[8];
                let eo = l,
                    es = (0, b.b)(),
                    eu = (0, a.z)(u.b);
                ee[9] !== e || ee[10] !== eu ? (o = eu.includes(e), ee[9] = e, ee[10] = eu, ee[11] = o) : o = ee[11];
                let ec = o,
                    ep = void 0 === t;
                ee[12] !== e ? (s = {
                    hostId: e
                }, ee[12] = e, ee[13] = s) : s = ee[13];
                let eg = en && ec && ep;
                ee[14] !== eg ? (d = {
                    enabled: eg
                }, ee[14] = eg, ee[15] = d) : d = ee[15];
                let em = (0, a.x)(I.j, s, d);
                ee[16] !== en ? (v = {
                    enabled: en
                }, ee[16] = en, ee[17] = v) : v = ee[17];
                let ef = (0, p.a)(e, v),
                    eh = en && ec;
                ee[18] !== e || ee[19] !== eh ? (y = {
                    enabled: eh,
                    hostId: e
                }, ee[18] = e, ee[19] = eh, ee[20] = y) : y = ee[20];
                let e_ = (0, g.a)(y);
                ee[21] !== e_ || ee[22] !== e ? (C = {
                    computerUseAvailability: e_,
                    hostId: e
                }, ee[21] = e_, ee[22] = e, ee[23] = C) : C = ee[23];
                let ev = (0, _.a)(C),
                    eb = en && ec;
                ee[24] !== e || ee[25] !== eb ? (P = {
                    enabled: eb,
                    hostId: e
                }, ee[24] = e, ee[25] = eb, ee[26] = P) : P = ee[26];
                let ey = (0, f.a)(P),
                    eI = en && ec;
                ee[27] !== e || ee[28] !== eI ? (A = {
                    enabled: eI,
                    hostId: e
                }, ee[27] = e, ee[28] = eI, ee[29] = A) : A = ee[29];
                let eC = (0, m.a)(A),
                    eE = em.data?.roots;
                ee[30] !== ef || ee[31] !== e || ee[32] !== t || ee[33] !== eE ? (w = ed({
                    codexHome: ef,
                    hostId: e,
                    rootsOverrideCwd: t,
                    workspaceRoots: eE
                }), ee[30] = ef, ee[31] = e, ee[32] = t, ee[33] = eE, ee[34] = w) : w = ee[34];
                let eP = w,
                    eA = en && er?.isLoading !== !0 && ec && (void 0 !== t || em.isFetched);
                ee[35] !== e || ee[36] !== ea || ee[37] !== eo || ee[38] !== eP ? (k = {
                    hostId: e,
                    isOpenAICuratedRemoteMarketplaceEnabled: ea,
                    marketplaceKinds: eo,
                    roots: eP
                }, ee[35] = e, ee[36] = ea, ee[37] = eo, ee[38] = eP, ee[39] = k) : k = ee[39], ee[40] !== eA ? (S = {
                    enabled: eA
                }, ee[40] = eA, ee[41] = S) : S = ee[41];
                let ew = (0, a.x)(H, k, S);
                if (!en || !ec) {
                    let e;
                    return ee[42] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                        availablePlugins: G,
                        featuredPluginIds: O,
                        installedPlugins: G,
                        marketplaceLoadErrors: L,
                        marketplaces: U,
                        errorMessage: null,
                        isLoading: !1,
                        isFetching: !1,
                        refetch: Q,
                        reload: Y,
                        forceReload: V
                    }, ee[42] = e) : e = ee[42], e
                }
                ee[43] !== e_.available || ee[44] !== eC.available || ee[45] !== ey.available || ee[46] !== ev.available || ee[47] !== ew.data?.bundledCodexAppToolsPlugin || ee[48] !== ew.data?.featuredPluginIds || ee[49] !== ew.data?.plugins ? (R = {
                    isComputerUseAvailable: e_.available,
                    isExternalBrowserUseAvailable: eC.available,
                    isInAppBrowserUseAvailable: ey.available,
                    isMessagesAvailable: ev.available
                }, q = $({
                    plugins: x = ew.data?.plugins ?? G,
                    ...R
                }), F = ew.data?.bundledCodexAppToolsPlugin, K = X({
                    featuredPluginIds: ew.data?.featuredPluginIds ?? O,
                    ...R
                }), ee[43] = e_.available, ee[44] = eC.available, ee[45] = ey.available, ee[46] = ev.available, ee[47] = ew.data?.bundledCodexAppToolsPlugin, ee[48] = ew.data?.featuredPluginIds, ee[49] = ew.data?.plugins, ee[50] = R, ee[51] = x, ee[52] = q, ee[53] = F, ee[54] = K) : (R = ee[50], x = ee[51], q = ee[52], F = ee[53], K = ee[54]), ee[55] !== x ? (B = Z(x), ee[55] = x, ee[56] = B) : B = ee[56];
                let eT = ew.data?.marketplaceLoadErrors ?? L,
                    ek = ew.data?.marketplaces ?? U,
                    eS = ew.error ? ew.error.message : null,
                    eN = ep && em.isLoading || ew.isLoading || ey.isLoading || eC.isLoading || e_.isLoading || ev.isLoading,
                    eR = ep && em.isFetching || ew.isFetching || e_.isFetching;
                return ee[57] !== R || ee[58] !== ew ? (j = async () => {
                    let e = await ew.refetch(),
                        t = e.data?.plugins ?? G;
                    return {
                        availablePlugins: $({
                            plugins: t,
                            ...R
                        }),
                        installedPlugins: Z(t)
                    }
                }, ee[57] = R, ee[58] = ew, ee[59] = j) : j = ee[59], ee[60] !== es ? (z = () => es(N.a), ee[60] = es, ee[61] = z) : z = ee[61], ee[62] !== e || ee[63] !== es ? (W = async () => {
                    M.add(e), await (async () => {
                        await es(N.a)
                    })().finally(() => {
                        M.delete(e)
                    })
                }, ee[62] = e, ee[63] = es, ee[64] = W) : W = ee[64], ee[65] !== q || ee[66] !== F || ee[67] !== K || ee[68] !== B || ee[69] !== eT || ee[70] !== ek || ee[71] !== eS || ee[72] !== eN || ee[73] !== eR || ee[74] !== j || ee[75] !== z || ee[76] !== W ? (J = {
                    availablePlugins: q,
                    bundledCodexAppToolsPlugin: F,
                    featuredPluginIds: K,
                    installedPlugins: B,
                    marketplaceLoadErrors: eT,
                    marketplaces: ek,
                    errorMessage: eS,
                    isLoading: eN,
                    isFetching: eR,
                    refetch: j,
                    reload: z,
                    forceReload: W
                }, ee[65] = q, ee[66] = F, ee[67] = K, ee[68] = B, ee[69] = eT, ee[70] = ek, ee[71] = eS, ee[72] = eN, ee[73] = eR, ee[74] = j, ee[75] = z, ee[76] = W, ee[77] = J) : J = ee[77], J
            },
            w: function(e) {
                let t, n, r, l, o = (0, i.c)(10),
                    {
                        enabled: s,
                        hostId: u,
                        marketplaceKind: d
                    } = e;
                o[0] !== u ? (t = {
                    hostId: u
                }, o[0] = u, o[1] = t) : t = o[1];
                let p = (0, h.a)(t),
                    g = (0, c.b)(u);
                o[2] !== g?.authMethod || o[3] !== d ? (n = "local" === d || (0, T.a)(g?.authMethod ?? null), o[2] = g?.authMethod, o[3] = d, o[4] = n) : n = o[4];
                let m = n;
                o[5] !== u || o[6] !== d ? (r = {
                    hostId: u,
                    marketplaceKind: d
                }, o[5] = u, o[6] = d, o[7] = r) : r = o[7];
                let f = (void 0 === s || s) && p && m;
                return o[8] !== f ? (l = {
                    enabled: f
                }, o[8] = f, o[9] = l) : l = o[9], (0, a.x)(B, r, l)
            }
        })
    }),
    haw8: (function() {
        "function" != typeof AbortSignal.any && Object.defineProperty(AbortSignal, "any", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(e) {
                let t = new AbortController,
                    n = e => {
                        t.abort(e.target.reason)
                    };
                for (let i of e) {
                    if (i.aborted) {
                        t.abort(i.reason);
                        break
                    }
                    i.addEventListener("abort", n, {
                        signal: t.signal
                    })
                }
                return t.signal
            }
        }), "function" != typeof AbortSignal.timeout && Object.defineProperty(AbortSignal, "timeout", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function(e) {
                let t = new AbortController;
                return globalThis.setTimeout(() => t.abort(new DOMException("The operation timed out.", "TimeoutError")), e), t.signal
            }
        })
    }),
    bW5B: (function(e, t, n) {
        n("eqYI"), n("yCBR")
    }),
    tFDr: (function(e, t, n) {
        n("UDML"), n("SDCy")
    }),
    UjfB: (function(e, t, n) {
        n("UDML"), n("mlfH")
    }),
    kzsq: (function(e, t, n) {
        n.a(e, async function(e, t) {
            try {
                let e = document.documentElement;
                ["feed", "grid", "itemcontrols", "noitemcontrols"].every(t => e.focusGroup?.supports(t)) || (await n.e(822370).then(n.bind(n, "GS9f"))).polyfillBodyAndObserve(), t()
            } catch (e) {
                t(e)
            }
        }, 1)
    }),
    D5xp: (function(e, t, n) {
        n.a(e, async function(e, t) {
            try {
                let e = ! function() {
                    try {
                        return "review" === new URL("codex://review").hostname
                    } catch {
                        return !1
                    }
                }();
                if (e || "function" != typeof URL.parse || "function" != typeof URL.canParse) {
                    let {
                        polyfillUrl: t
                    } = await n.e(329784).then(n.bind(n, "TsR8"));
                    await t(e)
                }("function" != typeof URL.createObjectURL || "function" != typeof URL.revokeObjectURL) && "u" > typeof webkitURL && await n.e(247248).then(n.t.bind(n, "jPdZ", 23)), t()
            } catch (e) {
                t(e)
            }
        }, 1)
    }),
    T5AA: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                return null
            }
        })
    })
};