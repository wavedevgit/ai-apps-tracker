export const __rspack_esm_id = 168420;
export const __rspack_esm_ids = [168420];
export const __webpack_modules__ = {
    xAI: (function(e, t, n) {
        var r = n("AS");
        let a = r.object({
                index: r.string().regex(/^\d+$/).transform(Number)
            }).strip(),
            l = r.object({
                marker_text: r.string().trim().min(1).optional(),
                marker_type: r.string().trim().min(1).optional()
            }).strip();

        function i(e) {
            let t = a.safeParse(e);
            return t.success ? t.data.index : null
        }

        function s(e) {
            let t = l.safeParse(e);
            return t.success ? t.data.marker_text ?? null : null
        }

        function o(e) {
            let t = l.safeParse(e);
            return t.success ? t.data.marker_type ?? null : null
        }
        n.d(t, {
            a: () => i,
            b: () => s,
            c: () => o
        })
    }),
    UeP: (function(e, t, n) {
        n.d(t, {
            ChatGptMarkdown: () => eg
        });
        var r = n("A"),
            a = n("Qo"),
            l = n("Xnl"),
            i = n("rK"),
            s = n("zd"),
            o = n("hz"),
            c = n("cWX"),
            u = n("RUB"),
            d = n("WA"),
            f = n("tZ3"),
            m = n("X3K"),
            p = n("xAI"),
            g = n("G6"),
            _ = n("y73"),
            h = n("f1X");

        function v(e) {
            return e?.type === "heading"
        }
        var b = n("cg"),
            x = n("ybW"),
            y = n("wDW"),
            w = n("Bb"),
            I = n("JQA"),
            E = n("HAE"),
            C = n("vSC"),
            T = n("S9k"),
            k = n("xJ2");
        let R = (0, w.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(851456), n.e(974872), n.e(170947), n.e(715515), n.e(339581), n.e(592453), n.e(720436), n.e(329804), n.e(819550), n.e(678608), n.e(872467), n.e(984883)]).then(n.bind(n, "wIo"))).QuickChatWritingBlockDirectiveRenderer, E.a),
            S = {
                "codex-resource": function() {
                    return null
                },
                "scheduled-task-receipt": (0, w.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(226913), n.e(753405), n.e(636463), n.e(909395), n.e(638947), n.e(900600), n.e(244730), n.e(401870), n.e(948624), n.e(424954)]).then(n.bind(n, "d0s"))).ScheduledTaskReceiptDirective),
                [y.a]: I.a,
                [i.a]: T.a,
                [y.b]: C.ChatGptDilDirectiveRenderer,
                [y.c]: k.b,
                [x.a]: R
            };
        var A = n("bME"),
            j = n("D2C"),
            N = n("TUM"),
            P = n("MMX"),
            O = n.n(P),
            G = n("i6"),
            M = n("Vn"),
            L = n("cC"),
            F = n("nd"),
            W = n("mMF"),
            D = n("L0h"),
            U = n("dVr"),
            H = n("Tp"),
            z = n("Rv7"),
            B = n("AS"),
            $ = n("zS"),
            Y = n("DIH"),
            K = n("Cv");
        let V = B.object({
                url: B.string().min(1),
                title: B.string().min(1),
                attribution: B.string().nullish()
            }),
            q = new G.b(z.c, {
                breaks: !0,
                gfm: !0,
                walkTokens: H.c,
                tokenizer: {
                    del: e => !e.startsWith("~~") && void 0
                },
                extensions: [{
                    name: "math",
                    renderer: e => O()(e.raw)
                }],
                renderer: {
                    html(e) {
                        let {
                            text: t
                        } = e;
                        return /^<br\s*\/?>$/i.test(t) ? "<br>" : O()(t)
                    },
                    link(e) {
                        let {
                            href: t,
                            title: n,
                            tokens: r
                        } = e, a = this.parser.parseInline(r), l = (0, $.a)(t);
                        if (null == l) return a;
                        let i = null == n ? "" : ` title="${O()(n)}"`;
                        return `<a href="${O()(l)}"${i}>${a}</a>`
                    },
                    image(e) {
                        let {
                            href: t,
                            text: n,
                            title: r
                        } = e, a = (0, $.b)(t);
                        if (null == a) return O()(n);
                        let l = null == r ? "" : ` title="${O()(r)}"`;
                        return `<img src="${O()(a)}" alt="${O()(n)}"${l}>`
                    }
                }
            });

        function J(e, t, n, r, a) {
            let l = (0, g.a)(e, t)?.reference;
            if (null == l || "mcp_source" === l.type && !a) return "";
            if ("url" === l.type) {
                let e = (0, i.h)(l)[0]?.sources[0];
                return null == e || null == (0, $.a)(e.url) ? "" : Q((0, W.a)({
                    type: "link",
                    url: e.url,
                    children: [{
                        type: "text",
                        value: "string" == typeof l.title ? l.title : e.label
                    }]
                }).trim())
            }
            if ("grouped_webpages" === l.type && Array.isArray(l.items)) {
                let e = [];
                for (let t of l.items) {
                    let a = V.safeParse(t).data;
                    if (null == a || null == (0, $.a)(a.url)) continue;
                    let l = n.get(a.url);
                    if (null == l) {
                        let e = n.size + 1;
                        for (; r.has(String(e));) e += 1;
                        r.add(String(e)), l = {
                            type: "definition",
                            identifier: String(e),
                            url: a.url,
                            title: a.title
                        }, n.set(a.url, l)
                    }
                    e.push(Q((0, W.a)({
                        type: "linkReference",
                        identifier: l.identifier,
                        referenceType: "full",
                        children: [{
                            type: "text",
                            value: a.attribution ?? function(e) {
                                try {
                                    return new URL(e).hostname.replace("www.", "").replace(/\.[^.]*$/, "")
                                } catch {
                                    return e
                                }
                            }(a.url)
                        }]
                    }).trim()))
                }
                return 0 === e.length ? "" : `(${e.join(", ")})`
            }
            switch (l.type) {
                case "hidden":
                case "status":
                case "optimistic_image_citation":
                case "webpage":
                case "optimistic_image_inline":
                case "invalid":
                case "attribution_footer":
                case "sports":
                case "grouped_webpages_v2":
                    return "";
                default:
                    var s = l;
                    let o = function(e) {
                            if ("client_defined_widget" !== e.type) return null;
                            let t = (0, Y.d)(e.data),
                                n = (0, Y.b)(t?.content);
                            if ("translation_block" === e.category) return (0, Y.b)(t?.translated_text) ?? n;
                            if (null == n || "language_learning_block" !== e.category && "pronunciation_block" !== e.category) return null;
                            let r = (0, Y.b)(t?.pronunciation_hint);
                            return "language_learning_block" === e.category && (t?.intent === "translation" || t?.presentation === "inline_anchor") || null == r ? n : `${n} (${r})`
                        }(s),
                        c = o ?? s.alt;
                    if ("string" != typeof c || 0 === c.length) return "";
                    let u = (0, L.a)(c, {
                        extensions: [(0, U.a)({
                            singleTilde: !1
                        })],
                        mdastExtensions: [(0, F.a)()]
                    }).children[0];
                    return u?.type !== "paragraph" ? null == o ? "" : Q((0, W.a)({
                        type: "text",
                        value: o
                    }).trim()) : Q((0, W.a)(u, {
                        extensions: [(0, F.b)()]
                    }).trim())
            }
        }

        function Q(e) {
            return e.replace(/(\\*)\|/g, (e, t) => t.length % 2 == 0 ? `\\${e}` : e).replace(/\r?\n/g, "<br>")
        }

        function Z(e) {
            let t, n, l = (0, a.c)(6),
                s = (0, N.d)(),
                o = s?.conversationOrigin === "tpp" || s?.conversationOrigin === "flora";
            return l[0] !== o || l[1] !== s?.contentReferences ? (t = e => (function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = function(e, t) {
                        let {
                            includeMcpSourceCitations: n = !0
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = (0, K.a)(e), a = [], l = new Map, s = new Set(Array.from(r.matchAll(/\[\s*(\d+)\s*\]/g), e => e[1])), o = r.replace(/\uE200[^\uE201]*\uE201/g, e => e.replace(/[^\r\n]/g, "x")), c = [...(0, L.a)(o, {
                            extensions: [(0, U.a)({
                                singleTilde: !1
                            }), (0, D.a)()],
                            mdastExtensions: [(0, F.a)(), (0, M.a)()]
                        }).children];
                        for (; c.length > 0;) {
                            let e = c.shift(),
                                o = e?.position?.start.offset,
                                u = e?.position?.end.offset;
                            if (null != e && null != o && null != u)
                                if (("textDirective" === e.type || "leafDirective" === e.type) && e.name === i.a) {
                                    let r = {};
                                    for (let [t, n] of Object.entries(e.attributes ?? {})) r[t] = n ?? !0;
                                    let i = c[0],
                                        d = i?.type === "link" && i.position?.start.offset === u && i.url.startsWith("sandbox:");
                                    a.push({
                                        start: o,
                                        end: u,
                                        text: d ? "" : J(r, t, l, s, n)
                                    })
                                } else if (("textDirective" === e.type || "leafDirective" === e.type) && e.name === y.a) {
                                let t = (0, Y.b)(e.attributes?.label),
                                    n = (0, Y.b)(e.attributes?.url),
                                    r = "";
                                null != t && null != n && null != (0, $.a)(n) && (r = Q((0, W.a)({
                                    type: "link",
                                    url: n,
                                    title: (0, Y.b)(e.attributes?.title),
                                    children: [{
                                        type: "text",
                                        value: t
                                    }]
                                }).trim())), a.push({
                                    start: o,
                                    end: u,
                                    text: r
                                })
                            } else if ("text" === e.type)
                                for (let e of r.slice(o, u).matchAll(/\uE200[^\uE201]*\uE201/g)) a.push({
                                    start: o + e.index,
                                    end: o + e.index + e[0].length,
                                    text: J({
                                        marker_text: e[0]
                                    }, t, l, s, n)
                                });
                            else "children" in e && c.unshift(...e.children)
                        }
                        let u = 0,
                            d = [];
                        for (let {
                                start: e,
                                end: t,
                                text: n
                            }
                            of a) d.push(r.slice(u, e), n), u = t;
                        return d.push(r.slice(u)), l.size > 0 && d.push("\n\n", (0, W.a)({
                            type: "root",
                            children: [...l.values()]
                        }).trim()), d.join("")
                    }(e, t, n);
                return {
                    "text/plain": r,
                    "text/html": q.parse(r, {
                        async: !1
                    })
                }
            })(e, s?.contentReferences, {
                includeMcpSourceCitations: o
            }), l[0] = o, l[1] = s?.contentReferences, l[2] = t) : t = l[2], l[3] !== e || l[4] !== t ? (n = (0, r.jsx)(j.a, {
                ...e,
                getCopyContent: t
            }), l[3] = e, l[4] = t, l[5] = n) : n = l[5], n
        }
        var X = n("org"),
            ee = n("H0j"),
            et = n("SZ"),
            en = n.n(et),
            er = n("Au"),
            ea = (n("HZ"), n("hue")),
            el = n("OW"),
            ei = n("hZa"),
            es = n("odv"),
            eo = n("KDa"),
            ec = n("UIe");
        let eu = B.record(B.string(), B.string()),
            ed = (0, l.d)(el.a, (e, t) => {
                let {
                    get: n
                } = t, r = null == e ? null : n(es.a, e);
                if (null == r) return null;
                let a = new Set,
                    l = new Map;
                for (let e of r) {
                    let t = e.metadata?.search_result_groups;
                    for (let e of Array.isArray(t) ? t : []) {
                        let t = (0, er.o)(e)?.entries;
                        for (let e of Array.isArray(t) ? t : []) {
                            let t = (0, er.o)(e)?.url;
                            "string" == typeof t && t.length > 0 && a.add(t)
                        }
                    }
                    let n = eu.safeParse((0, er.o)(e.metadata?.__internal)?.utm_tags);
                    n.success && l.set((0, er.f)(e), n.data)
                }
                return {
                    searchUrls: a,
                    utmTagsByMessageId: l
                }
            }, {
                isEqual: en()
            }),
            ef = (0, l.d)(el.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(ed, e);
                return null == r ? null : {
                    searchUrls: new Set(Array.from(r.searchUrls, ec.c)),
                    utmTagsByMessageId: r.utmTagsByMessageId
                }
            }),
            em = (0, l.d)(el.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: r,
                    href: a
                } = e, {
                    get: l
                } = t;
                if (null == a) return a;
                let i = l(ef, n);
                return null == i ? a : (0, ec.b)(a, i.searchUrls, null == r ? void 0 : i.utmTagsByMessageId.get(r))
            });

        function ep(e) {
            let t, n, i, s = (0, a.c)(15);
            (0, l.z)(el.a);
            let o = (0, N.d)();
            (0, ei.h)(!1);
            let c = o?.conversationId ?? null,
                u = o?.messageId;
            s[0] !== e.href || s[1] !== c || s[2] !== u ? (t = {
                conversationId: c,
                messageId: u,
                href: e.href
            }, s[0] = e.href, s[1] = c, s[2] = u, s[3] = t) : t = s[3];
            let d = (0, l.x)(em, t),
                f = e.appearance ?? "decorated";
            s[8] !== d || s[9] !== e || s[10] !== f ? (n = (0, r.jsx)(ea.a, {
                ...e,
                appearance: f,
                ExternalLinkComponent: eo.a,
                href: d
            }), s[8] = d, s[9] = e, s[10] = f, s[11] = n) : n = s[11];
            let m = n;
            return s[12] !== m || s[13] !== o ? (i = m, s[12] = m, s[13] = o, s[14] = i) : i = s[14], i
        }

        function eg(e) {
            let t, n, x, y, w, I, E, C, T, k, R, j, P, O, G, M = (0, a.c)(53);
            M[0] !== e ? ({
                conversationId: w,
                directives: t,
                extensions: n,
                isBrowserEnabled: x,
                ...y
            } = e, M[0] = e, M[1] = t, M[2] = n, M[3] = x, M[4] = y, M[5] = w) : (t = M[1], n = M[2], x = M[3], y = M[4], w = M[5]);
            let L = void 0 === w ? null : w;
            M[6] === Symbol.for("react.memo_cache_sentinel") ? (I = {
                name: "browser.in-app"
            }, M[6] = I) : I = M[6];
            let F = (0, l.x)(o.a, I).isCapable,
                W = (0, N.d)(),
                D = (0, l.x)(f.c, W?.conversationId ?? null),
                U = (0, l.x)(X.a, W?.conversationId ?? null),
                H = (0, l.x)(ee.c, W?.conversationId ?? null),
                z = (0, s.useContext)(b.a),
                B = (0, s.useContext)(d.a),
                $ = W?.shouldBlockExternalEgress === !0 || "restricted" === B ? "restricted" : y.externalResourcePolicy;
            M[7] !== n ? (E = null == n ? i.b : [...i.b, ...n], M[7] = n, M[8] = E) : E = M[8];
            let Y = E;
            M[9] === Symbol.for("react.memo_cache_sentinel") ? (C = S, M[9] = C) : C = M[9];
            let K = C;
            M[10] !== t ? (T = null == t ? K : {
                ...K,
                ...t
            }, M[10] = t, M[11] = T) : T = M[11];
            let V = T;
            M[12] !== L || M[13] !== F || M[14] !== z?.externalLinkTarget || M[15] !== $ || M[16] !== x || M[17] !== y.components?.a || M[18] !== y.cwd || M[19] !== y.externalLinkAppearance || M[20] !== y.hostId || M[21] !== y.onFileLinkOpen || M[22] !== y.openFileLinksInSidePanel || M[23] !== y.pluginMentionPresentation || M[24] !== y.savedContentResponse || M[25] !== W?.conversationOrigin ? (k = () => y.components?.a ?? (0, u.c)({
                ExternalLinkComponent: ep,
                conversationId: L,
                cwd: y.cwd,
                externalResourcePolicy: $,
                externalLinkAppearance: y.externalLinkAppearance ?? (W?.conversationOrigin === "tpp" || W?.conversationOrigin === "flora" ? "inline-mention" : void 0),
                hostId: y.hostId,
                isBrowserEnabled: x ?? F,
                onFileLinkOpen: y.onFileLinkOpen,
                openFileLinksInSidePanel: y.openFileLinksInSidePanel ?? !1,
                openTarget: z?.externalLinkTarget,
                pluginMentionPresentation: y.pluginMentionPresentation,
                savedContentResponse: y.savedContentResponse
            }), M[12] = L, M[13] = F, M[14] = z?.externalLinkTarget, M[15] = $, M[16] = x, M[17] = y.components?.a, M[18] = y.cwd, M[19] = y.externalLinkAppearance, M[20] = y.hostId, M[21] = y.onFileLinkOpen, M[22] = y.openFileLinksInSidePanel, M[23] = y.pluginMentionPresentation, M[24] = y.savedContentResponse, M[25] = W?.conversationOrigin, M[26] = k) : k = M[26], z?.externalLinkTarget, y.components?.a, W?.conversationOrigin, M[27] !== k ? (R = k(), M[27] = k, M[28] = R) : R = M[28];
            let q = R;
            y.components?.table, M[29] !== y.allowWideBlocks || M[30] !== y.components?.table ? (j = y.components?.table ?? function(e) {
                let {
                    children: t,
                    className: n,
                    markdownSource: a
                } = e;
                return (0, r.jsx)(Z, {
                    className: n,
                    allowWideBlocks: y.allowWideBlocks ?? !1,
                    markdownSource: a,
                    children: t
                })
            }, M[29] = y.allowWideBlocks, M[30] = y.components?.table, M[31] = j) : j = M[31];
            let J = j;
            M[32] !== q || M[33] !== J || M[34] !== y.components ? (P = {
                ...y.components,
                a: q,
                table: J
            }, M[32] = q, M[33] = J, M[34] = y.components, M[35] = P) : P = M[35];
            let Q = y.getDefaultComponents ?? void 0,
                et = x ?? F;
            return M[36] !== U || M[37] !== D?.businessProfile?.website_url || M[38] !== H || M[39] !== y.isStreaming || M[40] !== y.renderRoot || M[41] !== W ? (O = y.renderRoot ?? (null != H && null != W ? (e, t) => (function(e, t, n, a, l, s) {
                let o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    c = arguments.length > 7 ? arguments[7] : void 0,
                    u = e.findIndex(e => {
                        if ("space" === e.type) return !1;
                        if ("codexDirective" === e.type && e.name === i.a) {
                            let t = (0, g.a)(e.attributes, l);
                            return t?.reference.type !== "image_group" && "image_group" !== (0, p.c)(e.attributes)
                        }
                        return !0
                    }),
                    d = e[u],
                    f = null == d && a,
                    b = v(d) && 2 === d.depth && (d.text === n || a && e.slice(u + 1).every(e => "space" === e.type) && n.startsWith(d.text));
                return f || b ? [...t(f ? e : e.slice(0, u)), (0, r.jsxs)("h2", {
                    className: h.a.Heading,
                    children: [n, (0, r.jsx)(_.b, {
                        claimed: o?.is_verified ?? null
                    })]
                }, "entity-title"), (0, r.jsx)(_.a, {
                    conversationId: s,
                    status: o,
                    websiteUrl: c
                }, "entity-actions"), ...f ? [(0, r.jsx)("div", {
                    className: "mt-3",
                    children: (0, r.jsx)(m.b, {
                        lines: 3,
                        seed: "entity-loading-0",
                        size: "md",
                        variant: "chatgpt"
                    })
                }, "entity-body-pending")] : t(e.slice(u + 1))] : (null != o || c) && v(d) && 2 === d.depth ? [...t(e.slice(0, u)), (0, r.jsx)(_.d, {
                    conversationId: s,
                    status: o,
                    websiteUrl: c,
                    children: t([d])
                }, "entity-heading"), ...t(e.slice(u + 1))] : t(e)
            })(e, t, H, y.isStreaming, W.contentReferences, W.conversationId, U, D?.businessProfile?.website_url) : void 0), M[36] = U, M[37] = D?.businessProfile?.website_url, M[38] = H, M[39] = y.isStreaming, M[40] = y.renderRoot, M[41] = W, M[42] = O) : O = M[42], M[43] !== L || M[44] !== $ || M[45] !== V || M[46] !== Y || M[47] !== y || M[48] !== Q || M[49] !== et || M[50] !== O || M[51] !== P ? (G = (0, r.jsx)(A.a, {
                children: (0, r.jsx)(c.a, {
                    ...y,
                    components: P,
                    conversationId: L,
                    directives: V,
                    extensions: Y,
                    externalResourcePolicy: $,
                    getDefaultComponents: Q,
                    isBrowserEnabled: et,
                    renderRoot: O
                })
            }), M[43] = L, M[44] = $, M[45] = V, M[46] = Y, M[47] = y, M[48] = Q, M[49] = et, M[50] = O, M[51] = P, M[52] = G) : G = M[52], G
        }
    }),
    G6: (function(e, t, n) {
        var r = n("rK"),
            a = n("xAI");

        function l(e, t) {
            if (null == t) return null;
            let n = (0, a.a)(e);
            if (null != n) {
                let e = t[n];
                return null == e ? null : {
                    index: n,
                    reference: e
                }
            }
            let l = (0, a.b)(e);
            if (null == l) return null;
            let i = t.findIndex(e => (0, r.l)(e) === l);
            if (-1 === i) return null;
            let s = t[i];
            return null == s ? null : {
                index: i,
                reference: s
            }
        }
        n.d(t, {
            a: () => l
        })
    }),
    S9k: (function(e, t, n) {
        n.d(t, {
            a: () => eZ
        });
        var r = n("A"),
            a = n("Qo"),
            l = n("Xnl"),
            i = n("rK"),
            s = n("zd"),
            o = n("WA"),
            c = n("OW"),
            u = n("WdQ"),
            d = n("xAI"),
            f = n("tZ3"),
            m = n("TUM"),
            p = n("aLP"),
            g = n("G6"),
            _ = n("nD0"),
            h = n("AS"),
            v = n("vSC"),
            b = n("KO"),
            x = n("XAx"),
            y = n("e0C"),
            w = n("qm"),
            I = n("REz"),
            E = n("Au"),
            C = n("Csl"),
            T = n("yG"),
            k = n("OM"),
            R = n("Kwu"),
            S = n("Mr"),
            A = n("gK"),
            j = n("xo"),
            N = n("CMl"),
            P = n("ciV");
        let O = (0, l.d)(c.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(P.a) || !n(k.c, "1205965498") || null != n(S.W, e.conversationId)) return !1;
            let r = n(S.J, e.conversationId)?.[e.messageId]?.message;
            return null != r && (0, E.o)(r.metadata?.chatgpt_sdk)?.is_custom_agent !== !0 && r.metadata?.model_dil_v2 == null && (0, E.o)((0, E.o)(r.metadata?.model_dil)?.dil)?.type == null && (r.metadata?.is_complete ?? "in_progress" !== r.status) === !0
        });

        function G(e) {
            let t, n, i, u, d, f, p, g, _, v, b = (0, a.c)(40),
                {
                    contentReferenceIndex: x,
                    reference: k
                } = e,
                P = (0, l.z)(c.a),
                G = (0, s.useRef)(null),
                F = (0, m.d)(),
                W = (0, s.useContext)(o.a);
            b[0] !== x || b[1] !== F ? (t = (0, m.c)(F, x), b[0] = x, b[1] = F, b[2] = t) : t = b[2];
            let D = t;
            b[3] !== D || b[4] !== F ? (n = null != F && null != D ? {
                conversationId: F.conversationId,
                messageId: D.messageId
            } : null, b[3] = D, b[4] = F, b[5] = n) : n = b[5];
            let U = n,
                H = (0, l.x)(O, U),
                z = (0, l.x)(S.j, F?.conversationId ?? null);
            if (!H || null == F || null == D || !z || !0 === k.hide_widget_feedback || "custom_agent_run" === k.name || F.isReadOnly || F.shouldBlockExternalEgress || "restricted" === W) return null;
            if (b[6] !== k.dil) {
                let e = (0, E.o)(k.dil);
                i = h.string().safeParse(e?.type), b[6] = k.dil, b[7] = i
            } else i = b[7];
            let B = i.data;
            b[8] !== k.dil ? (u = A.c.safeParse(k.dil), b[8] = k.dil, b[9] = u) : u = b[9];
            let $ = u.data;
            b[10] !== k.name ? (d = h.string().safeParse(k.name), b[10] = k.name, b[11] = d) : d = b[11];
            let Y = d.data,
                K = `${D.messageId}:${D.index}`;
            b[12] !== k.start_idx ? (f = h.number().safeParse(k.start_idx), b[12] = k.start_idx, b[13] = f) : f = b[13];
            let V = f.data;
            b[14] !== z || b[15] !== P || b[16] !== D.messageId || b[17] !== V || b[18] !== F || b[19] !== Y || b[20] !== B ? (p = (e, t, n) => {
                try {
                    let r = {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        assistantMessageId: D.messageId,
                        contentReferenceStartIndex: null == V ? void 0 : (0, w.a)(V),
                        contentReferenceType: "dil",
                        conversationId: z,
                        feedbackReasons: t?.length ? t : void 0,
                        isGenui: !1,
                        messageId: D.messageId,
                        surfaceLocation: y.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                        turnOrdinal: (0, j.a)(P, F.conversationId, D.messageId),
                        widgetActionTarget: e,
                        widgetAffordance: "feedback_panel" === e ? y.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_OPEN_BUTTON : y.k.CHATGPT_WIDGET_AFFORDANCE_FEEDBACK_SUBMIT_BUTTON,
                        widgetName: Y,
                        widgetType: B
                    };
                    (void 0 === n || n) && (0, j.h)(r), (0, T.a)(P, y.j, r)
                } catch {}
            }, b[14] = z, b[15] = P, b[16] = D.messageId, b[17] = V, b[18] = F, b[19] = Y, b[20] = B, b[21] = p) : p = b[21];
            let q = p;
            return b[22] !== q || b[23] !== P ? (g = () => {
                G.current = P.get(C.l), q("feedback_panel")
            }, b[22] = q, b[23] = P, b[24] = g) : g = b[24], b[25] !== z || b[26] !== q || b[27] !== $?.appData || b[28] !== k.dil_url || b[29] !== k.dil_version || b[30] !== P || b[31] !== D.messageId || b[32] !== Y || b[33] !== K || b[34] !== B ? (_ = e => {
                let {
                    feedbackText: t,
                    feedbackReasons: n
                } = e, r = P.get(C.l), a = null != G.current && G.current.userId === r.userId && G.current.authenticatedAccountId === r.authenticatedAccountId && G.current.authMethod === r.authMethod;
                q("feedback_form", n, a), a && R.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "widget_feedback",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: z,
                                message_id: D.messageId
                            },
                            widget_feedback: {
                                feedback: t,
                                checked_reasons: n.length > 0 ? n : void 0,
                                widget_name: Y,
                                widget_type: B,
                                widget_ref_id: K,
                                dil_version: h.string().safeParse(k.dil_version).data
                            }
                        }
                    }
                }).catch(L), R.Request.safePost("/conversation/message/genui/feedback", {
                    requestBody: {
                        checked_reasons: n.length > 0 ? n : void 0,
                        conversation_id: z,
                        dil_url: h.string().safeParse(k.dil_url).data,
                        dil_version: h.string().safeParse(k.dil_version).data,
                        feedback: t,
                        language: globalThis.navigator?.language ?? "en-US",
                        message_id: D.messageId,
                        metadata: (0, I.g)($?.appData),
                        timestamp_client: Date.now(),
                        user_agent: globalThis.navigator?.userAgent || void 0,
                        widget_name: Y,
                        widget_ref_id: K,
                        widget_type: B
                    }
                }).catch(M)
            }, b[25] = z, b[26] = q, b[27] = $?.appData, b[28] = k.dil_url, b[29] = k.dil_version, b[30] = P, b[31] = D.messageId, b[32] = Y, b[33] = K, b[34] = B, b[35] = _) : _ = b[35], b[36] !== g || b[37] !== _ || b[38] !== K ? (v = (0, r.jsx)("div", {
                className: "flex justify-end",
                children: (0, r.jsx)(N.a, {
                    onOpen: g,
                    onSubmit: _
                }, K)
            }), b[36] = g, b[37] = _, b[38] = K, b[39] = v) : v = b[39], v
        }

        function M() {}

        function L() {}
        var F = n("boW");

        function W(e) {
            let t, n, l, i = (0, a.c)(26),
                {
                    contentReferenceIndex: s,
                    reference: o,
                    widgetRefId: c
                } = e,
                u = (0, m.d)();
            i[0] !== s || i[1] !== o || i[2] !== u ? (t = null == s ? null : (0, r.jsx)(F.a, {
                contentReferenceIndex: s,
                reference: {
                    ...o,
                    type: "dil"
                },
                turnContext: u
            }), i[0] = s, i[1] = o, i[2] = u, i[3] = t) : t = i[3];
            let d = t;
            if (null != o.model_dil_v2) {
                let e, t, n, a = "string" == typeof o.source_message_id ? o.source_message_id : void 0,
                    l = u?.dilPreparationId ?? a ?? c,
                    f = u?.dilPreparing,
                    m = u?.isPresented ?? !0,
                    p = u?.isStreaming === !0 && "finished_successfully" !== o.source_message_status;
                return i[4] !== o ? (e = (0, r.jsx)(b.DilResponse, {
                    reference: o
                }), i[4] = o, i[5] = e) : e = i[5], i[6] !== s || i[7] !== a || i[8] !== l || i[9] !== f || i[10] !== m || i[11] !== p || i[12] !== e ? (t = (0, r.jsx)(x.a, {
                    contentReferenceIndex: s,
                    sourceMessageId: a,
                    isPreparing: f,
                    isPresented: m,
                    isStreaming: p,
                    children: e
                }, l), i[6] = s, i[7] = a, i[8] = l, i[9] = f, i[10] = m, i[11] = p, i[12] = e, i[13] = t) : t = i[13], i[14] !== d || i[15] !== t ? (n = (0, r.jsxs)(r.Fragment, {
                    children: [d, t]
                }), i[14] = d, i[15] = t, i[16] = n) : n = i[16], n
            }
            i[17] !== o || i[18] !== c ? (n = function(e, t) {
                let n = e.dil;
                if (null == n) return null;
                try {
                    return JSON.stringify({
                        dil: n,
                        ..."string" == typeof e.dil_version ? {
                            dil_version: e.dil_version
                        } : {},
                        ..."string" == typeof e.dil_url ? {
                            dil_url: e.dil_url
                        } : {},
                        ..."string" == typeof e.name ? {
                            name: e.name
                        } : {},
                        ..."boolean" == typeof e.contains_pii ? {
                            contains_pii: e.contains_pii
                        } : {},
                        widgetRefId: t,
                        contentReferenceStartIndex: e.start_idx
                    }) ?? null
                } catch {
                    return null
                }
            }(o, c), i[17] = o, i[18] = c, i[19] = n) : n = i[19];
            let f = n;
            return i[20] !== s || i[21] !== d || i[22] !== f || i[23] !== o || i[24] !== u ? (l = null == f ? null : (0, r.jsxs)(r.Fragment, {
                children: [d, (0, r.jsx)(m.b.Provider, {
                    value: null == u ? null : {
                        ...u,
                        safeUrls: h.array(h.string()).safeParse(o.safe_urls).data
                    },
                    children: (0, r.jsx)(v.ChatGptDilDirectiveRenderer, {
                        feedback: (0, r.jsx)(G, {
                            contentReferenceIndex: s,
                            reference: o
                        }),
                        isNativeHermesContentReference: "custom_agent_run" === o.name,
                        rawText: f
                    })
                })]
            }), i[20] = s, i[21] = d, i[22] = f, i[23] = o, i[24] = u, i[25] = l) : l = i[25], l
        }
        var D = n("xJ2"),
            U = n("Bb"),
            H = n("YAi");

        function z(e) {
            let t, n, l = (0, a.c)(4),
                {
                    reference: s
                } = e;
            l[0] !== s ? (t = (0, i.j)(s), l[0] = s, l[1] = t) : t = l[1];
            let o = t;
            return l[2] !== o ? (n = null == o ? null : (0, r.jsx)("span", {
                className: "rounded bg-surface-secondary/92 px-0.5",
                children: o
            }), l[2] = o, l[3] = n) : n = l[3], n
        }
        var B = n("Nv0"),
            $ = n("j8Y"),
            Y = n("DIH");

        function K(e) {
            let t, n, l, i, s, o = (0, a.c)(15),
                {
                    reference: c
                } = e;
            o[0] !== c.expression ? (t = (0, Y.b)(c.expression), o[0] = c.expression, o[1] = t) : t = o[1];
            let u = t;
            o[2] !== c.result ? (n = (0, Y.b)(c.result), o[2] = c.result, o[3] = n) : n = o[3];
            let d = n;
            if (null == u && null == d) {
                let e;
                return o[4] !== c ? (e = (0, r.jsx)($.c, {
                    reference: c
                }), o[4] = c, o[5] = e) : e = o[5], e
            }
            return o[6] !== u ? (l = null == u ? null : (0, r.jsx)("div", {
                className: "font-mono text-sm text-secondary",
                children: u
            }), o[6] = u, o[7] = l) : l = o[7], o[8] !== c.prefix || o[9] !== c.suffix || o[10] !== d ? (i = null == d ? null : (0, r.jsxs)("div", {
                className: "mt-1 text-2xl font-semibold text-default",
                children: [(0, Y.b)(c.prefix), d, (0, Y.b)(c.suffix)]
            }), o[8] = c.prefix, o[9] = c.suffix, o[10] = d, o[11] = i) : i = o[11], o[12] !== l || o[13] !== i ? (s = (0, r.jsxs)(B.a, {
                children: [l, i]
            }), o[12] = l, o[13] = i, o[14] = s) : s = o[14], s
        }
        var V = n("c1H"),
            q = n("JQA"),
            J = n("zS"),
            Q = n("tSE");
        let Z = (0, l.v)(Q.a, e => !1);

        function X(e) {
            let t, n, o, c, u = (0, a.c)(13),
                {
                    contentReferenceIndex: d,
                    isTerminalInline: f,
                    reference: m,
                    turnContext: p
                } = e,
                g = (0, l.z)(Q.a),
                _ = (0, i.h)(m),
                h = _[0]?.attributes.url,
                v = p?.contentReferenceMessageIds?.[d] ?? p?.messageId,
                b = "loading" !== m.status && "error" !== m.status,
                x = b && "url" === m.type && "hidden" !== m.style && null != h && null != (0, J.a)(h),
                y = x && null != v && !v.startsWith("WEB:") ? JSON.stringify([v, m.start_idx, h]) : null,
                w = p?.trackShownImpressions !== !1,
                I = e => {
                    null != y && null != p && (0, T.a)(g, V.d, {
                        eventType: e,
                        contentReferenceType: "url",
                        messageId: v,
                        conversationId: g.get(S.j, p.conversationId) ?? void 0
                    })
                },
                E = (0, s.useEffectEvent)(() => {
                    null == y || null == p || g.get(Z, y) || (g.set(Z, y, !0), I("CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_URL_CITATION_SHOWN"))
                });
            if (u[0] !== E || u[1] !== w ? (t = () => {
                    w && E()
                }, u[0] = E, u[1] = w, u[2] = t) : t = u[2], u[3] !== g || u[4] !== y || u[5] !== w ? (n = [g, y, w], u[3] = g, u[4] = y, u[5] = w, u[6] = n) : n = u[6], (0, s.useEffect)(t, n), "hidden" === m.style || !b || 0 === _.length) return null;
            u[7] !== f || u[8] !== x || u[9] !== I ? (o = (e, t) => (0, r.jsx)(q.a, {
                attributes: e.attributes,
                isTerminalInline: f,
                onClick: x ? () => I("CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_URL_CITATION_CLICKED") : void 0,
                sources: e.sources
            }, `${e.attributes.url}-${String(t)}`), u[7] = f, u[8] = x, u[9] = I, u[10] = o) : o = u[10];
            let C = _.map(o);
            return u[11] !== C ? (c = (0, r.jsx)(r.Fragment, {
                children: C
            }), u[11] = C, u[12] = c) : c = u[12], c
        }
        var ee = n("Wf"),
            et = n("de"),
            en = n("TxR");

        function er(e) {
            let t, n, l = (0, a.c)(5),
                {
                    reference: s
                } = e,
                o = (0, ee.a)();
            l[0] !== o || l[1] !== s ? (t = (0, i.o)(s) ?? o.formatMessage({
                id: "chatgpt.contentReferences.code.label",
                defaultMessage: "Code",
                description: "Fallback label for a code execution citation"
            }), l[0] = o, l[1] = s, l[2] = t) : t = l[2];
            let c = t;
            return l[3] !== c ? (n = (0, r.jsx)(en.a, {
                icon: et.a,
                children: c
            }), l[3] = c, l[4] = n) : n = l[4], n
        }
        var ea = n("K1w"),
            el = n("GnI"),
            ei = n("YYE"),
            es = n("E8"),
            eo = n("O0M"),
            ec = n("g3w"),
            eu = n("nlN"),
            ed = n("WF"),
            ef = n("Lt"),
            em = n("YYm"),
            ep = n("OOa"),
            eg = n("DW1"),
            e_ = n("gsA"),
            eh = n("jA"),
            ev = n("GO3");

        function eb(e) {
            let t, n, o, c, u = (0, a.c)(15),
                {
                    isMemory: d,
                    reference: f
                } = e,
                p = void 0 !== d && d,
                g = (0, l.z)(Q.a),
                _ = (0, s.useContext)(eo.a),
                h = (0, m.d)();
            u[0] !== f ? (t = (0, Y.b)(f.prompt_text) ?? (0, Y.b)(f.matched_text) ?? (0, i.j)(f), u[0] = f, u[1] = t) : t = u[1];
            let v = t;
            u[2] !== f.matched_text || u[3] !== v ? (n = (0, Y.b)(f.matched_text) ?? v, u[2] = f.matched_text, u[3] = v, u[4] = n) : n = u[4];
            let b = n;
            if (null == v || null == b) return null;
            u[5] !== _ || u[6] !== p || u[7] !== f || u[8] !== g || u[9] !== v || u[10] !== h ? (o = () => {
                if (null == h) return;
                let e = h.contentReferences.indexOf(f),
                    t = h.contentReferenceMessageIds?.[e] ?? h.messageId,
                    n = (0, m.c)(h, e),
                    r = null != n && n.messageId.length > 0 && n.messageId.length <= 256 && !n.messageId.startsWith("WEB:") ? n.messageId : void 0,
                    a = (0, ev.b)(f),
                    l = null == r ? void 0 : (0, ev.a)(f),
                    i = l?.actionId ?? (a?.level === "l2" && ("followup_a" === a.renderer || "inline_followup_a" === a.renderer) && a.actionId?.startsWith(`l2.${a.useCase}.`) && a.source === ("l2.look_something_up.current_information" === a.actionId ? "conversational_onboarding_use_case_l2_web_search" : "conversational_onboarding_use_case_l2") ? a.actionId : void 0);
                if (null != t && !t.startsWith("WEB:")) {
                    try {
                        "conversation_followup_suggestions_v1" === f.source && (0, eg.b)(g, {
                            data: {
                                ...f,
                                interaction_type: "clicked",
                                followup_source: f.source,
                                followup_presentation_mode: f.presentation_mode
                            },
                            surface: "content_reference",
                            conversationId: h.conversationId,
                            messageId: t
                        }), (0, T.a)(g, V.d, {
                            eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED",
                            conversationId: g.get(S.j, h.conversationId) ?? void 0,
                            messageId: t,
                            contentReferenceType: "string" == typeof f.type ? f.type : void 0,
                            followupSource: "string" == typeof f.source ? f.source : void 0
                        })
                    } catch {}
                    let e = a ?? l;
                    if (null != e) try {
                        (0, T.a)(g, ei.a, null == l ? e : {
                            ...l,
                            conversationId: g.get(S.j, h.conversationId) ?? void 0,
                            messageId: r
                        })
                    } catch {}
                }
                if (p) return void(0, em.e)(g, h.conversationId, {
                    messageMetadata: {
                        followups_v2_followup_clicked: !0
                    },
                    targetText: v
                });
                let s = g.get(e_.c, _),
                    o = h.conversationId,
                    c = g.get(eu.c);
                null != s && (0, ep.e)(o) && null == g.get(S.j, o) && null == g.get(S.W, o) && (0, e_.a)(g, s, o), (0, ef.submitChatGptFollowUp)(g, {
                    conversationId: h.conversationId,
                    isTemporaryChat: h.isTemporaryChat,
                    messageMetadata: {
                        followups_v2_followup_clicked: !0,
                        ...null != i && null != r ? {
                            onboarding_selected_action_id: i,
                            source_message_id: r
                        } : {},
                        ..."string" == typeof f.source && f.source ? {
                            followups_v2_followup_source: f.source
                        } : {}
                    },
                    prompt: v,
                    onSubmitted: null == s ? void 0 : () => {
                        g.get(eu.c) === c && (0, es.c)(g, (0, eh.c)(o))
                    }
                }).catch(ex)
            }, u[5] = _, u[6] = p, u[7] = f, u[8] = g, u[9] = v, u[10] = h, u[11] = o) : o = u[11];
            let x = o;
            return u[12] !== b || u[13] !== x ? (c = (0, r.jsx)(ec.a, {
                displayText: b,
                onActivate: x
            }), u[12] = b, u[13] = x, u[14] = c) : c = u[14], c
        }

        function ex(e) {
            ed.a.error("ChatGPT followup content reference submit failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        var ey = n("nB3"),
            ew = n("Ph"),
            eI = n("ahg"),
            eE = n("PO1");

        function eC(e) {
            let t, n, o, u, d, f, p, g, _ = (0, a.c)(31),
                {
                    reference: h
                } = e,
                v = (0, l.z)(c.a),
                b = (0, m.d)()?.savedContentResponse,
                x = (0, s.useRef)(null);
            _[0] !== h ? (t = (0, i.o)(h), _[0] = h, _[1] = t) : t = _[1];
            let y = t;
            _[2] !== h || _[3] !== b || _[4] !== y ? (n = (0, eI.a)(h), o = null != b && null != y && null != n ? (0, ey.l)(n) : null, _[2] = h, _[3] = b, _[4] = y, _[5] = n, _[6] = o) : (n = _[5], o = _[6]);
            let w = o;
            _[7] !== w || _[8] !== b || _[9] !== v ? (u = () => {
                (0, ew.a)(v, x, b, w)
            }, _[7] = w, _[8] = b, _[9] = v, _[10] = u) : u = _[10];
            let I = (0, s.useEffectEvent)(u);
            _[11] !== I ? (d = () => {
                I()
            }, _[11] = I, _[12] = d) : d = _[12];
            let E = w?.id,
                C = w?.kind,
                T = b?.conversationId,
                k = b?.responseId,
                R = b?.savedContentBackend;
            if (_[13] !== E || _[14] !== C || _[15] !== T || _[16] !== k || _[17] !== R ? (f = [E, C, T, k, R], _[13] = E, _[14] = C, _[15] = T, _[16] = k, _[17] = R, _[18] = f) : f = _[18], (0, s.useEffect)(d, f), null == y) {
                let e;
                return _[19] !== h ? (e = (0, r.jsx)($.a, {
                    reference: h
                }), _[19] = h, _[20] = e) : e = _[20], e
            }
            if (null == n) {
                let e;
                return _[21] !== y ? (e = (0, r.jsx)("span", {
                    className: "underline decoration-current underline-offset-2",
                    children: y
                }), _[21] = y, _[22] = e) : e = _[22], e
            }
            return _[23] !== w || _[24] !== b || _[25] !== v ? (p = () => {
                (0, ew.a)(v, x, b, w, !0)
            }, _[23] = w, _[24] = b, _[25] = v, _[26] = p) : p = _[26], _[27] !== n || _[28] !== p || _[29] !== y ? (g = (0, r.jsx)(eE.a, {
                className: "underline decoration-current underline-offset-2",
                href: n,
                onActivate: p,
                children: y
            }), _[27] = n, _[28] = p, _[29] = y, _[30] = g) : g = _[30], g
        }
        var eT = n("tG"),
            ek = n("kOW"),
            eR = n("v8x"),
            eS = n("p8C"),
            eA = n("Mda"),
            ej = n("zUz"),
            eN = n("o7g");
        let eP = eN.a.omit({
            hoverCard: !0
        }).extend({
            type: h.literal("mcp_source"),
            hover_card: eN.a.shape.hoverCard,
            connector_id: h.string().min(1),
            link_id: h.string().nullish(),
            tool_name: h.string().min(1),
            tool_arguments: h.record(h.string(), h.json()),
            start_idx: h.number().optional()
        });

        function eO(e) {
            let t, n, s, o, c, u, d, f, m, p, g, _, h, v, b, x, y, w, I = (0, a.c)(55),
                {
                    contentReferenceIndex: E,
                    isTerminalInline: C,
                    reference: k,
                    turnContext: R
                } = e,
                S = (0, l.z)(Q.a);
            if (R?.conversationOrigin !== "tpp" && R?.conversationOrigin !== "flora") return null;
            if (I[0] !== E || I[1] !== C || I[2] !== k || I[3] !== R.contentReferenceMessageIds || I[4] !== R.conversationId || I[5] !== R.isReadOnly || I[6] !== R.messageId || I[7] !== R.renderRestrictedModelResponses || I[8] !== R.renderRestrictedWidgets || I[9] !== R.shouldBlockExternalEgress) {
                u = Symbol.for("react.early_return_sentinel");
                e: {
                    if ({
                            data: n
                        } = eP.safeParse(k), s = R.contentReferenceMessageIds?.[E] ?? R.messageId, null == n || null == s) {
                        let e, t;
                        I[24] !== k ? (e = (0, i.j)(k), I[24] = k, I[25] = e) : e = I[25], I[26] !== e ? (t = (0, r.jsx)(r.Fragment, {
                            children: e
                        }), I[26] = e, I[27] = t) : t = I[27], u = t;
                        break e
                    }
                    t = eR.a,
                    c = C,
                    o = JSON.stringify(["chatgpt", R.conversationId, s, n.start_idx ?? E]),
                    d = n.title,
                    f = R.isReadOnly || R.shouldBlockExternalEgress || R.renderRestrictedWidgets || R.renderRestrictedModelResponses || "open_chart_source" !== n.tool_name || null == n.tool_arguments.source ? void 0 : {
                        chart_source: n.tool_arguments.source,
                        connector_id: n.connector_id,
                        link_id: n.link_id
                    },
                    m = "open_chart_source" === n.tool_name ? n.connector_id : void 0,
                    p = (0, eA.a)(n.connector_id, n.hover_card, n.tool_name),
                    g = n.url,
                    _ = n.icons,
                    h = (0, ej.a)(n),
                    v = (0, eS.a)(n.tool_arguments)
                }
                I[0] = E, I[1] = C, I[2] = k, I[3] = R.contentReferenceMessageIds, I[4] = R.conversationId, I[5] = R.isReadOnly, I[6] = R.messageId, I[7] = R.renderRestrictedModelResponses, I[8] = R.renderRestrictedWidgets, I[9] = R.shouldBlockExternalEgress, I[10] = t, I[11] = n, I[12] = s, I[13] = o, I[14] = c, I[15] = u, I[16] = d, I[17] = f, I[18] = m, I[19] = p, I[20] = g, I[21] = _, I[22] = h, I[23] = v
            } else t = I[10], n = I[11], s = I[12], o = I[13], c = I[14], u = I[15], d = I[16], f = I[17], m = I[18], p = I[19], g = I[20], _ = I[21], h = I[22], v = I[23];
            return u !== Symbol.for("react.early_return_sentinel") ? u : (I[28] !== n || I[29] !== s || I[30] !== R.conversationId || I[31] !== R.conversationOrigin || I[32] !== R.hostId ? (b = e => eG(e, {
                citation: n,
                conversationId: R.conversationId,
                conversationOrigin: R.conversationOrigin,
                hostId: R.hostId,
                messageId: s
            }), I[28] = n, I[29] = s, I[30] = R.conversationId, I[31] = R.conversationOrigin, I[32] = R.hostId, I[33] = b) : b = I[33], I[34] !== o || I[35] !== b || I[36] !== d || I[37] !== f || I[38] !== m || I[39] !== p || I[40] !== g || I[41] !== _ || I[42] !== h || I[43] !== v ? (x = {
                id: o,
                title: d,
                followUpContext: f,
                sourceAppId: m,
                hoverCard: p,
                url: g,
                icons: _,
                icon: h,
                categoryIcon: v,
                load: b
            }, I[34] = o, I[35] = b, I[36] = d, I[37] = f, I[38] = m, I[39] = p, I[40] = g, I[41] = _, I[42] = h, I[43] = v, I[44] = x) : x = I[44], I[45] !== n.start_idx || I[46] !== s || I[47] !== S || I[48] !== R.conversationId ? (y = () => {
                (0, T.a)(S, ek.d, {
                    conversationId: R.conversationId,
                    messageId: s,
                    contentReferenceStartIndex: (0, eT.b)(n.start_idx)
                })
            }, I[45] = n.start_idx, I[46] = s, I[47] = S, I[48] = R.conversationId, I[49] = y) : y = I[49], I[50] !== t || I[51] !== c || I[52] !== x || I[53] !== y ? (w = (0, r.jsx)(t, {
                isTerminalInline: c,
                source: x,
                onClick: y
            }), I[50] = t, I[51] = c, I[52] = x, I[53] = y, I[54] = w) : w = I[54], w)
        }
        async function eG(e, t) {
            let [{
                loadChatGptSourceView: r
            }, {
                ChatGptEcosystemWidgetContent: a
            }] = await Promise.all([n.e(263165).then(n.bind(n, "zEG")), Promise.resolve().then(n.bind(n, "OMc"))]);
            return e.signal.throwIfAborted(), r(e, t, a)
        }
        var eM = n("uH1"),
            eL = n("net"),
            eF = n("bf");

        function eW(e) {
            let t, n, l, s, o = (0, a.c)(9),
                {
                    reference: c
                } = e,
                u = (0, ee.a)();
            o[0] !== u || o[1] !== c ? (t = function(e, t) {
                let n = (0, Y.b)(e.utc_time);
                if (null == n) return null;
                let r = new Date(n);
                return Number.isNaN(r.getTime()) ? null : t.formatTime(new Date(r.getTime() + function(e) {
                    let t = (0, Y.b)(e.utc_offset);
                    if (null == t) return 0;
                    let n = /^([+-])(\d{2}):?(\d{2})?$/.exec(t);
                    if (null == n) return 0;
                    let [, r, a, l] = n, i = Number(a), s = Number(l ?? "0");
                    return Number.isFinite(i) && Number.isFinite(s) ? ("-" === r ? -1 : 1) * (60 * i + s) * 6e4 : 0
                }(e)), {
                    hour: "numeric",
                    minute: "numeric",
                    timeZone: "UTC"
                })
            }(c, u), o[0] = u, o[1] = c, o[2] = t) : t = o[2];
            let d = t;
            if (null == d && "hidden" === c.type) return null;
            o[3] !== c || o[4] !== d ? (n = d ?? (0, i.j)(c), o[3] = c, o[4] = d, o[5] = n) : n = o[5];
            let f = n;
            return null == f ? null : (o[6] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, r.jsx)("span", {
                children: (0, r.jsx)(eF.oc, {
                    "aria-hidden": !1
                })
            }), o[6] = l) : l = o[6], o[7] !== f ? (s = (0, r.jsx)(en.a, {
                icon: l,
                labelClassName: "whitespace-nowrap",
                children: f
            }), o[7] = f, o[8] = s) : s = o[8], s)
        }

        function eD(e) {
            let t, n, l, s = (0, a.c)(11),
                {
                    reference: o
                } = e;
            s[0] !== o ? (t = (0, Y.b)(o.description) ?? (0, i.o)(o), s[0] = o, s[1] = t) : t = s[1];
            let c = t;
            if (null == c) {
                let e;
                return s[2] !== o ? (e = (0, r.jsx)($.a, {
                    reference: o
                }), s[2] = o, s[3] = e) : e = s[3], e
            }
            s[4] !== o ? (n = (0, eI.a)(o), s[4] = o, s[5] = n) : n = s[5];
            let u = n;
            if (null == u) {
                let e;
                return s[6] !== c ? (e = (0, r.jsx)("span", {
                    className: "font-semibold text-default",
                    children: c
                }), s[6] = c, s[7] = e) : e = s[7], e
            }
            return s[8] !== u || s[9] !== c ? (l = (0, r.jsx)(eE.a, {
                className: "font-semibold text-default underline-offset-2 hover:underline",
                href: u,
                children: c
            }), s[8] = u, s[9] = c, s[10] = l) : l = s[10], l
        }
        let eU = (0, U.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(14428)]).then(n.bind(n, "T4s"))).ChatGptProductCarousel, {
                errorFallback: $.b
            }),
            eH = (0, U.a)(async () => (await n.e(370781).then(n.bind(n, "AxOW"))).ChatGptEntityMetadataContentReference, {
                errorFallback: $.b
            }),
            ez = (0, U.a)(async () => (await n.e(726487).then(n.bind(n, "A5x"))).ChatGptForecastReference, {
                errorFallback: $.b
            }),
            eB = (0, U.a)(async () => (await n.e(273324).then(n.bind(n, "Mhd"))).ChatGptLocationSearch, {
                errorFallback: $.b
            }),
            e$ = (0, U.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(14428), n.e(486886)]).then(n.bind(n, "z86"))).ChatGptProductContentReference, {
                errorFallback: $.b
            }),
            eY = (0, U.a)(async () => (await n.e(327345).then(n.bind(n, "DAj"))).ChatGptSportsContentReference, {
                errorFallback: $.b
            }),
            eK = (0, U.a)(async () => (await n.e(163216).then(n.bind(n, "sha"))).ChatGptStockReference, {
                errorFallback: $.b
            }),
            eV = (0, U.a)(async () => (await n.e(825205).then(n.bind(n, "JhX"))).ChatGptVideoReference, {
                errorFallback: $.b
            }),
            eq = new Set(["attribution", "calculator", "container", "file", "file_navlist", "followup_a", "followup_memory_a", "forecast", "link_title", "location_search", "nav_list", "navigation", "python", "sports_schedule", "sports_standings", "stock", "strix", "title_citation", "mcp_source", "tldr", "video"]);

        function eJ(e) {
            let t, n, l, i = (0, a.c)(10);
            return i[0] !== e.contentReferenceIndex || i[1] !== e.contentReferenceType || i[2] !== e.reference || i[3] !== e.turnContext ? (t = "dil" === e.contentReferenceType || "image_group" === e.contentReferenceType ? null : (0, r.jsx)(F.a, {
                contentReferenceIndex: e.contentReferenceIndex,
                reference: e.reference,
                turnContext: e.turnContext
            }), i[0] = e.contentReferenceIndex, i[1] = e.contentReferenceType, i[2] = e.reference, i[3] = e.turnContext, i[4] = t) : t = i[4], i[5] !== e ? (n = (0, r.jsx)(eQ, {
                ...e
            }), i[5] = e, i[6] = n) : n = i[6], i[7] !== t || i[8] !== n ? (l = (0, r.jsxs)(r.Fragment, {
                children: [t, n]
            }), i[7] = t, i[8] = n, i[9] = l) : l = i[9], l
        }

        function eQ(e) {
            let t = (0, a.c)(77),
                {
                    children: n,
                    contentReferenceIndex: l,
                    contentReferenceType: i,
                    isStreaming: s,
                    isTerminalInline: o,
                    reference: c,
                    turnContext: u
                } = e;
            if ("hidden" === c.type && null != i && eq.has(i)) return null;
            switch (i) {
                case "codex_sandbox_image": {
                    let e;
                    return t[0] !== l || t[1] !== c ? (e = (0, r.jsx)(eL.a, {
                        reference: c,
                        contentReferenceIndex: l
                    }), t[0] = l, t[1] = c, t[2] = e) : e = t[2], e
                }
                case "mcp_source": {
                    let e;
                    return t[3] !== l || t[4] !== o || t[5] !== c || t[6] !== u ? (e = (0, r.jsx)(eO, {
                        contentReferenceIndex: l,
                        isTerminalInline: o,
                        reference: c,
                        turnContext: u
                    }), t[3] = l, t[4] = o, t[5] = c, t[6] = u, t[7] = e) : e = t[7], e
                }
                case "image_group":
                case "image_v2": {
                    let e, n = u?.conversationId;
                    return t[8] !== l || t[9] !== c || t[10] !== n ? (e = (0, r.jsx)(D.a, {
                        contentReferenceIndex: l,
                        conversationId: n,
                        reference: c
                    }), t[8] = l, t[9] = c, t[10] = n, t[11] = e) : e = t[11], e
                }
                case "products":
                case "product_group": {
                    let e;
                    return t[12] !== c ? (e = (0, r.jsx)(eU, {
                        reference: c
                    }), t[12] = c, t[13] = e) : e = t[13], e
                }
                case "product":
                case "product_entity":
                case "explore_more":
                case "product_reviews":
                case "product_rationale":
                case "product_show_more_header": {
                    let e;
                    return t[14] !== c ? (e = (0, r.jsx)(e$, {
                        reference: c
                    }), t[14] = c, t[15] = e) : e = t[15], e
                }
                case "map":
                case "businesses_map": {
                    let e;
                    return t[16] !== l || t[17] !== c ? (e = (0, r.jsx)(H.a, {
                        contentReferenceIndex: l,
                        reference: c
                    }), t[16] = l, t[17] = c, t[18] = e) : e = t[18], e
                }
                case "grouped_webpages":
                case "grouped_webpages_v2":
                case "grouped_webpages_model_predicted_fallback":
                case "url":
                case "webpage":
                case "webpage_extended": {
                    let e;
                    return t[19] !== l || t[20] !== o || t[21] !== c || t[22] !== u ? (e = (0, r.jsx)(X, {
                        contentReferenceIndex: l,
                        isTerminalInline: o,
                        reference: c,
                        turnContext: u
                    }), t[19] = l, t[20] = o, t[21] = c, t[22] = u, t[23] = e) : e = t[23], e
                }
                case "sources_footnote":
                case "checkout_confirmation":
                case "dil":
                case "hidden":
                case null:
                    return null;
                case "file":
                case "library_folder":
                case "file_navlist": {
                    let e, a = null == n;
                    return t[24] !== n || t[25] !== l || t[26] !== c || t[27] !== a ? (e = (0, r.jsx)(el.ChatGptFileReference, {
                        contentReferenceIndex: l,
                        reference: c,
                        showSaveAs: a,
                        children: n
                    }), t[24] = n, t[25] = l, t[26] = c, t[27] = a, t[28] = e) : e = t[28], e
                }
                case "python":
                case "container": {
                    let e;
                    return t[29] !== c ? (e = (0, r.jsx)(er, {
                        reference: c
                    }), t[29] = c, t[30] = e) : e = t[30], e
                }
                case "title_citation": {
                    let e;
                    return t[31] !== c ? (e = (0, r.jsx)(eD, {
                        reference: c
                    }), t[31] = c, t[32] = e) : e = t[32], e
                }
                case "link_title": {
                    let e;
                    return t[33] !== c ? (e = (0, r.jsx)(eC, {
                        reference: c
                    }), t[33] = c, t[34] = e) : e = t[34], e
                }
                case "location_search": {
                    let e;
                    return t[35] !== c ? (e = (0, r.jsx)(eB, {
                        reference: c
                    }), t[35] = c, t[36] = e) : e = t[36], e
                }
                case "time": {
                    let e;
                    return t[37] !== c ? (e = (0, r.jsx)(eW, {
                        reference: c
                    }), t[37] = c, t[38] = e) : e = t[38], e
                }
                case "attribution":
                case "strix": {
                    let e;
                    return t[39] !== c ? (e = (0, r.jsx)(z, {
                        reference: c
                    }), t[39] = c, t[40] = e) : e = t[40], e
                }
                case "followup_a": {
                    let e;
                    return t[41] !== c ? (e = (0, r.jsx)(eb, {
                        reference: c
                    }), t[41] = c, t[42] = e) : e = t[42], e
                }
                case "followup_memory_a": {
                    let e;
                    return t[43] !== c ? (e = (0, r.jsx)(eb, {
                        isMemory: !0,
                        reference: c
                    }), t[43] = c, t[44] = e) : e = t[44], e
                }
                case "entity": {
                    let e;
                    return t[45] !== l || t[46] !== c || t[47] !== u ? (e = null == u ? null : (0, r.jsx)(ea.a, {
                        contentReferenceIndex: l,
                        reference: c,
                        turnContext: u
                    }), t[45] = l, t[46] = c, t[47] = u, t[48] = e) : e = t[48], e
                }
                case "image_inline": {
                    let e;
                    return t[49] !== o || t[50] !== c ? (e = (0, r.jsx)($.d, {
                        isTerminalInline: o,
                        reference: c
                    }), t[49] = o, t[50] = c, t[51] = e) : e = t[51], e
                }
                case "nav_list":
                case "tldr":
                case "navigation": {
                    let e;
                    return t[52] !== c ? (e = (0, r.jsx)(eM.a, {
                        reference: c
                    }), t[52] = c, t[53] = e) : e = t[53], e
                }
                case "sports_standings":
                case "sports_schedule": {
                    let e;
                    return t[54] !== c ? (e = (0, r.jsx)(eY, {
                        reference: c
                    }), t[54] = c, t[55] = e) : e = t[55], e
                }
                case "entity_metadata": {
                    let e;
                    return t[56] !== l || t[57] !== c || t[58] !== u ? (e = (0, r.jsx)(eH, {
                        reference: c,
                        contentReferenceIndex: l,
                        turnContext: u
                    }), t[56] = l, t[57] = c, t[58] = u, t[59] = e) : e = t[59], e
                }
                case "video": {
                    let e;
                    return t[60] !== c ? (e = (0, r.jsx)(eV, {
                        reference: c
                    }), t[60] = c, t[61] = e) : e = t[61], e
                }
                case "calculator": {
                    let e;
                    return t[62] !== c ? (e = (0, r.jsx)(K, {
                        reference: c
                    }), t[62] = c, t[63] = e) : e = t[63], e
                }
                case "stock": {
                    let e;
                    return t[64] !== c ? (e = (0, r.jsx)(eK, {
                        reference: c
                    }), t[64] = c, t[65] = e) : e = t[65], e
                }
                case "forecast": {
                    let e;
                    return t[66] !== c ? (e = (0, r.jsx)(ez, {
                        reference: c
                    }), t[66] = c, t[67] = e) : e = t[67], e
                }
                case "client_defined_widget": {
                    let e;
                    return t[68] !== l || t[69] !== s || t[70] !== c ? (e = (0, r.jsx)(_.a, {
                        contentReferenceIndex: l,
                        isStreaming: s,
                        reference: c
                    }), t[68] = l, t[69] = s, t[70] = c, t[71] = e) : e = t[71], e
                }
                case "writing": {
                    let e;
                    return t[72] !== c ? (e = (0, r.jsx)($.c, {
                        reference: c
                    }), t[72] = c, t[73] = e) : e = t[73], e
                }
                default: {
                    let e;
                    return t[74] !== o || t[75] !== c ? (e = (0, r.jsx)($.b, {
                        isTerminalInline: o,
                        reference: c
                    }), t[74] = o, t[75] = c, t[76] = e) : e = t[76], e
                }
            }
        }

        function eZ(e) {
            let t, n, l, s = (0, a.c)(10),
                o = (0, m.d)(),
                c = o?.contentReferences;
            s[0] !== e.attributes || s[1] !== c ? (t = (0, g.a)(e.attributes, c), s[0] = e.attributes, s[1] = c, s[2] = t) : t = s[2];
            let u = t;
            s[3] !== u || s[4] !== e ? (n = (0, r.jsx)(eX, {
                ...e,
                match: u
            }), s[3] = u, s[4] = e, s[5] = n) : n = s[5];
            let d = n;
            if (null == u || "writing_block" !== u.reference.category && (0, i.H)(u.reference) && null != u.reference.model_dil_v2) return d;
            let f = e.isBlock ? "div" : "span";
            return s[6] !== f || s[7] !== d || s[8] !== u.index ? (l = (0, r.jsx)(f, {
                className: "contents",
                "data-chatgpt-copy-reference": u.index,
                "data-markdown-copy": "contents",
                children: d
            }), s[6] = f, s[7] = d, s[8] = u.index, s[9] = l) : l = s[9], l
        }

        function eX(e) {
            let t, n, g, h, v, b, x = (0, a.c)(51),
                {
                    attributes: y,
                    children: w,
                    isTerminalInline: I,
                    match: E
                } = e,
                C = (0, l.z)(c.a),
                T = (0, m.d)(),
                k = (0, s.useContext)(o.a),
                R = s.Children.count(w) > 0 ? w : void 0;
            x[0] !== y ? (t = (0, d.c)(y), x[0] = y, x[1] = t) : t = x[1];
            let S = t,
                A = (0, l.x)("image_group" === S && f.a, T?.conversationId ?? null),
                j = null != E && "string" == typeof E.reference.type && E.reference.type.length > 0 ? E.reference.type : null,
                N = T?.conversationId ?? "",
                P = (null == E ? void 0 : T?.contentReferenceMessageIds?.[E.index]) ?? T?.messageId ?? "",
                O = "number" == typeof E?.reference.start_idx ? E.reference.start_idx : void 0;
            x[2] !== N || x[3] !== P || x[4] !== O ? (n = {
                conversationId: N,
                messageId: P,
                startIndex: O
            }, x[2] = N, x[3] = P, x[4] = O, x[5] = n) : n = x[5];
            let G = n,
                {
                    visible: M
                } = (0, l.x)(p.c, G);
            x[6] !== G || x[7] !== C ? (g = () => (0, p.d)(C, G), x[6] = G, x[7] = C, x[8] = g) : g = x[8];
            let L = (0, s.useEffectEvent)(g);
            if (x[9] !== L || x[10] !== j || x[11] !== M ? (h = () => {
                    M && "hidden" !== j && L()
                }, x[9] = L, x[10] = j, x[11] = M, x[12] = h) : h = x[12], x[13] !== j || x[14] !== G.conversationId || x[15] !== G.messageId || x[16] !== G.startIndex || x[17] !== C || x[18] !== M ? (v = [C, M, j, G.conversationId, G.messageId, G.startIndex], x[13] = j, x[14] = G.conversationId, x[15] = G.messageId, x[16] = G.startIndex, x[17] = C, x[18] = M, x[19] = v) : v = x[19], (0, s.useLayoutEffect)(h, v), !M) return null;
            if (null != R && (T?.isStreaming || "restricted" === k)) {
                let e;
                return x[20] !== R ? (e = (0, r.jsx)(r.Fragment, {
                    children: R
                }), x[20] = R, x[21] = e) : e = x[21], e
            }
            if (("image_group" === S || "image_v2" === S) && (null == E || "hidden" === j)) {
                let e, t;
                if (A || "hidden" === j && !T?.isStreaming) return null;
                let n = E?.index ?? 0,
                    a = T?.conversationId;
                return x[22] !== S ? (e = {
                    type: S
                }, x[22] = S, x[23] = e) : e = x[23], x[24] !== a || x[25] !== e || x[26] !== n ? (t = (0, r.jsx)(D.a, {
                    contentReferenceIndex: n,
                    conversationId: a,
                    reference: e
                }), x[24] = a, x[25] = e, x[26] = n, x[27] = t) : t = x[27], t
            }
            if (null == E) return null;
            let {
                index: F,
                reference: U
            } = E;
            if ("writing_block" === U.category) {
                let e, t = null == y.is_streaming ? void 0 : "true" === y.is_streaming;
                return x[28] !== F || x[29] !== U || x[30] !== t ? (e = (0, r.jsx)(_.a, {
                    contentReferenceIndex: F,
                    isStreaming: t,
                    reference: U
                }), x[28] = F, x[29] = U, x[30] = t, x[31] = e) : e = x[31], e
            }
            if ("app_block" === U.category) {
                let e, t = "true" === y.is_streaming;
                return x[32] !== U || x[33] !== t ? (e = (0, r.jsx)(u.a, {
                    reference: U,
                    isStreaming: t
                }), x[32] = U, x[33] = t, x[34] = e) : e = x[34], e
            }
            if ((0, i.H)(U)) {
                let e, t, n = T?.contentReferenceMessageIds,
                    a = n?.[F],
                    l = a ?? T?.messageId;
                x[35] !== F || x[36] !== a || x[37] !== n ? (e = null == n || null == a ? F : n.slice(0, F).filter(e => e === a).length, x[35] = F, x[36] = a, x[37] = n, x[38] = e) : e = x[38];
                let i = e,
                    s = l ? `${l}:${String(i)}` : void 0;
                return x[39] !== F || x[40] !== U || x[41] !== s ? (t = (0, r.jsx)(W, {
                    contentReferenceIndex: F,
                    reference: U,
                    widgetRefId: s
                }), x[39] = F, x[40] = U, x[41] = s, x[42] = t) : t = x[42], t
            }
            let H = "hidden" === j ? S : j,
                z = null == y.is_streaming ? void 0 : "true" === y.is_streaming;
            return x[43] !== F || x[44] !== I || x[45] !== R || x[46] !== U || x[47] !== z || x[48] !== H || x[49] !== T ? (b = (0, r.jsx)(eJ, {
                contentReferenceIndex: F,
                contentReferenceType: H,
                isStreaming: z,
                isTerminalInline: I,
                reference: U,
                turnContext: T,
                children: R
            }), x[43] = F, x[44] = I, x[45] = R, x[46] = U, x[47] = z, x[48] = H, x[49] = T, x[50] = b) : b = x[50], b
        }
    }),
    Nv0: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo");

        function l(e) {
            let t, n, l = (0, a.c)(5),
                {
                    children: i,
                    title: s
                } = e;
            return l[0] !== s ? (t = null == s ? null : (0, r.jsx)("div", {
                className: "mb-2 font-semibold text-default",
                children: s
            }), l[0] = s, l[1] = t) : t = l[1], l[2] !== i || l[3] !== t ? (n = (0, r.jsxs)("div", {
                className: "my-3 max-w-[40rem] rounded-lg border border-subtle bg-surface-secondary/92 p-3 text-sm text-default",
                "data-testid": "chatgpt-content-reference-card",
                children: [t, i]
            }), l[2] = i, l[3] = t, l[4] = n) : n = l[4], n
        }
        n.d(t, {
            a: () => l
        })
    }),
    sWZ: (function(e, t, n) {
        var r = n("zd");
        let a = (0, r.createContext)(null);

        function l() {
            return (0, r.use)(a)
        }
        n.d(t, {
            b: () => l
        }, {
            a: a
        })
    }),
    bME: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            l = n("zd"),
            i = n("nzx"),
            s = n("sWZ");
        let o = "codex-inline-pronunciation-popover-opened",
            c = "[data-inline-pronunciation-trigger]";

        function u(e) {
            let t, n, u, d, f, m, p, g, _, h, v, b, x, y, w, I, E, C, T, k, R, S, A, j, N, P, O, G, M, L, F, W, D = (0, a.c)(50),
                {
                    children: U
                } = e,
                H = (0, l.useId)();
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, D[0] = t) : t = D[0];
            let z = (0, l.useRef)(t);
            D[1] === Symbol.for("react.memo_cache_sentinel") ? (n = new Map, D[1] = n) : n = D[1];
            let B = (0, l.useRef)(n),
                $ = (0, l.useRef)(null);
            D[2] === Symbol.for("react.memo_cache_sentinel") ? (u = new Set, D[2] = u) : u = D[2];
            let Y = (0, l.useRef)(u),
                K = (0, l.useRef)(null),
                V = (0, l.useRef)(null),
                q = (0, l.useRef)(null),
                [J, Q] = (0, l.useState)(null);
            D[3] === Symbol.for("react.memo_cache_sentinel") ? (d = () => {
                null != q.current && (window.clearTimeout(q.current), q.current = null)
            }, D[3] = d) : d = D[3];
            let Z = d;
            D[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                let t = $.current?.popoverId ?? null,
                    n = e?.popoverId ?? null;
                if ($.current = e, Q(e), t !== n) {
                    if (null != t)
                        for (let e of B.current.get(t) ?? []) e();
                    if (null != n)
                        for (let e of B.current.get(n) ?? []) e()
                }
            }, D[4] = f) : f = D[4];
            let X = f;
            D[5] === Symbol.for("react.memo_cache_sentinel") ? (m = e => {
                Z();
                let t = $.current;
                null != t && (Y.current.delete(t.popoverId), V.current = "other_popover_opened" !== e && "focus" === t.openAction && t.anchor.isConnected ? t.anchor : null, t.onClose(e), X(null))
            }, D[5] = m) : m = D[5];
            let ee = m;
            D[6] === Symbol.for("react.memo_cache_sentinel") ? (p = () => {
                if (null != q.current) return;
                let e = $.current?.popoverId;
                null == e || Y.current.has(e) || (q.current = window.setTimeout(() => {
                    ee("pointer_exit")
                }, 120))
            }, D[6] = p) : p = D[6];
            let et = p;
            D[7] !== H ? (g = (e, t, n) => {
                let r = z.current.get(e);
                if (null == r) return;
                Z();
                let a = $.current;
                (a?.popoverId !== e || a.anchor !== t) && (null != a && (ee("other_popover_opened"), V.current = null), X({
                    ...r,
                    anchor: t,
                    hoverContainer: t.closest("table, ul, ol") ?? t.parentElement ?? t,
                    openAction: n
                }), r.onOpen(n), window.dispatchEvent(new CustomEvent(o, {
                    detail: {
                        providerId: H
                    }
                })))
            }, D[7] = H, D[8] = g) : g = D[8];
            let en = g;
            D[9] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                z.current.set(e.popoverId, e);
                let t = $.current;
                return t?.popoverId === e.popoverId && X({
                    ...t,
                    ...e
                }), () => {
                    if (z.current.get(e.popoverId) !== e) return;
                    let t = $.current;
                    t?.popoverId === e.popoverId && t.anchor.isConnected || (z.current.delete(e.popoverId), Y.current.delete(e.popoverId), t?.popoverId === e.popoverId && ee("unmounted"))
                }
            }, D[9] = _) : _ = D[9];
            let er = _;
            D[10] === Symbol.for("react.memo_cache_sentinel") ? (h = (e, t) => {
                t ? (Y.current.add(e), Z()) : Y.current.delete(e)
            }, D[10] = h) : h = D[10];
            let ea = h;
            D[11] === Symbol.for("react.memo_cache_sentinel") ? (v = e => $.current?.popoverId === e, D[11] = v) : v = D[11];
            let el = v;
            D[12] === Symbol.for("react.memo_cache_sentinel") ? (b = (e, t) => {
                let n = B.current.get(e) ?? new Set;
                return n.add(t), B.current.set(e, n), () => {
                    n.delete(t), 0 === n.size && B.current.delete(e)
                }
            }, D[12] = b) : b = D[12];
            let ei = b;
            D[13] !== H ? (x = () => {
                let e = e => {
                    e.detail.providerId !== H && ee("other_popover_opened")
                };
                return window.addEventListener(o, e), () => {
                    window.removeEventListener(o, e)
                }
            }, y = [ee, H], D[13] = H, D[14] = x, D[15] = y) : (x = D[14], y = D[15]), (0, l.useEffect)(x, y), D[16] === Symbol.for("react.memo_cache_sentinel") ? (w = () => {
                let e = () => {
                    "hidden" === document.visibilityState && ee("page_hidden")
                };
                return document.addEventListener("visibilitychange", e), () => {
                    document.removeEventListener("visibilitychange", e)
                }
            }, I = [ee], D[16] = w, D[17] = I) : (w = D[16], I = D[17]), (0, l.useEffect)(w, I), D[18] !== en || D[19] !== J ? (E = () => {
                if (null == J) return;
                let e = e => {
                        if ("touch" === e.pointerType) return;
                        let t = document.elementFromPoint?.(e.clientX, e.clientY) ?? (e.target instanceof Element ? e.target : null),
                            n = t?.closest(c),
                            r = n?.getAttribute("data-inline-pronunciation-trigger");
                        if (null != n && null != r && z.current.has(r)) return void en(r, n, "hover");
                        let a = $.current;
                        if (null != a) {
                            if (null == t) return void et();
                            a.hoverContainer.contains(t) || K.current?.contains(t) === !0 ? Z() : et()
                        }
                    },
                    t = e => {
                        "touch" !== e.pointerType && null == e.relatedTarget && et()
                    };
                return window.addEventListener("pointermove", e, !0), window.addEventListener("pointerover", e, !0), window.addEventListener("pointerout", t, !0), () => {
                    window.removeEventListener("pointermove", e, !0), window.removeEventListener("pointerover", e, !0), window.removeEventListener("pointerout", t, !0)
                }
            }, C = [en, J, Z, et], D[18] = en, D[19] = J, D[20] = E, D[21] = C) : (E = D[20], C = D[21]), (0, l.useEffect)(E, C), D[22] === Symbol.for("react.memo_cache_sentinel") ? (T = () => () => {
                Z(), ee("unmounted")
            }, k = [Z, ee], D[22] = T, D[23] = k) : (T = D[22], k = D[23]), (0, l.useEffect)(T, k), D[24] !== en ? (R = {
                activatePopover: en,
                closePopover: ee,
                isPopoverOpen: el,
                registerPopover: er,
                setPopoverHeldOpen: ea,
                subscribeToPopoverOpenState: ei
            }, D[24] = en, D[25] = R) : R = D[25];
            let es = R,
                eo = null != J;
            D[26] === Symbol.for("react.memo_cache_sentinel") ? (S = e => {
                e || ee("outside_press")
            }, D[26] = S) : S = D[26], D[27] !== J ? (A = null == J ? null : (0, r.jsx)(i.b, {
                virtualRef: {
                    current: J.anchor
                }
            }), D[27] = J, D[28] = A) : A = D[28];
            let ec = J?.ariaLabel;
            D[29] === Symbol.for("react.memo_cache_sentinel") ? (j = e => {
                e.preventDefault();
                let t = V.current;
                V.current = null, t?.focus()
            }, N = () => {
                ee("escape")
            }, D[29] = j, D[30] = N) : (j = D[29], N = D[30]), D[31] !== J?.openAction ? (P = e => {
                J?.openAction !== "focus" && e.preventDefault()
            }, D[31] = J?.openAction, D[32] = P) : P = D[32], D[33] === Symbol.for("react.memo_cache_sentinel") ? (O = e => {
                e.target instanceof Element && null != e.target.closest(c) ? e.preventDefault() : ee("outside_press")
            }, D[33] = O) : O = D[33];
            let eu = J?.popoverId;
            D[34] === Symbol.for("react.memo_cache_sentinel") ? (G = e => {
                "touch" !== e.pointerType && et()
            }, D[34] = G) : G = D[34];
            let ed = J?.content;
            return D[35] !== eu || D[36] !== ed ? (M = (0, r.jsx)("div", {
                ref: K,
                onPointerEnter: Z,
                onPointerLeave: G,
                children: ed
            }, eu), D[35] = eu, D[36] = ed, D[37] = M) : M = D[37], D[38] !== ec || D[39] !== P || D[40] !== M ? (L = (0, r.jsx)(i.c, {
                "aria-label": ec,
                align: "start",
                className: "p-0",
                disablePadding: !0,
                side: "right",
                sideOffset: 6,
                size: "menuWide",
                updatePositionStrategy: "always",
                variant: "menu",
                onCloseAutoFocus: j,
                onEscapeKeyDown: N,
                onOpenAutoFocus: P,
                onPointerDownOutside: O,
                children: M
            }), D[38] = ec, D[39] = P, D[40] = M, D[41] = L) : L = D[41], D[42] !== eo || D[43] !== A || D[44] !== L ? (F = (0, r.jsxs)(i.a, {
                open: eo,
                onOpenChange: S,
                children: [A, L]
            }), D[42] = eo, D[43] = A, D[44] = L, D[45] = F) : F = D[45], D[46] !== U || D[47] !== es || D[48] !== F ? (W = (0, r.jsxs)(s.a, {
                value: es,
                children: [U, F]
            }), D[46] = U, D[47] = es, D[48] = F, D[49] = W) : W = D[49], W
        }
        n.d(t, {
            a: () => u
        })
    }),
    xJ2: (function(e, t, n) {
        n.d(t, {
            a: () => ei,
            b: () => el
        });
        var r = n("A"),
            a = n("Qo"),
            l = n("c1H"),
            i = n("e0C"),
            s = n("T0"),
            o = n("D7"),
            c = n("Xnl"),
            u = n("aM"),
            d = n("rK"),
            f = n("zd"),
            m = n("Csl"),
            p = n("DcH0"),
            g = n("T1"),
            _ = n("r21"),
            h = n("AdZ"),
            v = n("hHa"),
            b = n("Sqq"),
            x = n("WA"),
            y = n("yG"),
            w = n("iL7"),
            I = n("OW"),
            E = n("tSE"),
            C = n("hZa"),
            T = n("xAI"),
            k = n("taW"),
            R = n("tZ3"),
            S = n("ADj"),
            A = n("Mr"),
            j = n("TUM"),
            N = n("xo"),
            P = n("RW7"),
            O = n("TJE"),
            G = n("wF"),
            M = n("LQi"),
            L = n("H0j"),
            F = n("fYL"),
            W = n("oQ7"),
            D = n("ejv"),
            U = n("niC"),
            H = n("on"),
            z = n("oy"),
            B = n("Wf"),
            $ = n("HOL"),
            Y = n("ib"),
            K = n("YeQ"),
            V = n("TwL"),
            q = n("SUh"),
            J = n("Sd"),
            Q = n("OH4");

        function Z(e) {
            let t, n, l, i, s, o = (0, a.c)(15),
                {
                    ref: c,
                    cards: u,
                    conversationId: d,
                    imageAssetResolver: m,
                    layout: p,
                    onOpenImage: g,
                    renderImageFavorite: h
                } = e,
                v = (0, Y.a)("(width < 48rem)"),
                b = "carousel" === p && v ? u.length : 3;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, o[0] = t) : t = o[0];
            let x = (0, f.useRef)(t);
            o[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => ({
                getThumbnail: e => x.current.get(e) ?? null
            }), o[1] = n) : n = o[1], (0, f.useImperativeHandle)(c, n);
            let y = "bento" === p ? "grid aspect-9/5 grid-cols-3 grid-rows-2" : "no-scrollbar flex overflow-x-auto md:grid md:grid-cols-3";
            return o[2] !== y ? (l = (0, H.b)("my-3 gap-1", y), o[2] = y, o[3] = l) : l = o[3], o[4] !== u || o[5] !== d || o[6] !== m || o[7] !== p || o[8] !== g || o[9] !== h || o[10] !== b ? (i = u.slice(0, b).map((e, t) => {
                let {
                    image: n,
                    thumbnailOnly: a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, H.b)("group/generated-image-preview relative min-h-0 min-w-0 overflow-hidden border border-default", "carousel" === p && "aspect-5/4 max-h-64 w-32 shrink-0 rounded-xl md:w-auto", "bento" === p && 0 === t && "col-span-2 row-span-2 rounded-ss-xl rounded-se-md rounded-ee-md rounded-es-xl", "bento" === p && 1 === t && "rounded-ss-md rounded-se-xl rounded-ee-md rounded-es-md", "bento" === p && 2 === t && "rounded-ss-md rounded-se-md rounded-ee-xl rounded-es-md"),
                    children: null == n ? (0, r.jsx)(_.a, {
                        className: "h-full w-full"
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(X, {
                            image: n,
                            imageRef: e => {
                                if (null != e) return x.current.set(n.id, e), () => {
                                    x.current.get(n.id) === e && x.current.delete(n.id)
                                }
                            },
                            conversationId: d,
                            imageAssetResolver: m,
                            thumbnailOnly: a,
                            aspectRatio: "bento" === p ? 1.2 : 1.25,
                            imageNumber: t + 1,
                            onOpen: () => g(n)
                        }, n.src), (0, r.jsx)("div", {
                            className: "pointer-events-none absolute end-3 top-3 z-10",
                            children: h?.(n)
                        }), t === b - 1 && u.length > b ? (0, r.jsxs)("div", {
                            className: "pointer-events-none absolute end-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-media-control-background px-3 py-1.5 text-sm font-medium text-media-foreground select-none",
                            children: [(0, r.jsx)($.a, {
                                asset: Q.a
                            }), (0, r.jsx)("span", {
                                className: "tabular-nums",
                                "aria-hidden": "true",
                                children: u.length
                            }), (0, r.jsx)("span", {
                                className: "sr-only",
                                children: (0, r.jsx)(z.a, {
                                    id: "chatgpt.imageGroup.imageCount",
                                    defaultMessage: "{count, plural, one {# image} other {# images}}",
                                    description: "Accessible text for the total image count in a ChatGPT search image group. Count includes images available in the gallery beyond the visible tiles.",
                                    values: {
                                        count: u.length
                                    }
                                })
                            })]
                        }) : null]
                    })
                }, t)
            }), o[4] = u, o[5] = d, o[6] = m, o[7] = p, o[8] = g, o[9] = h, o[10] = b, o[11] = i) : i = o[11], o[12] !== l || o[13] !== i ? (s = (0, r.jsx)("div", {
                className: l,
                children: i
            }), o[12] = l, o[13] = i, o[14] = s) : s = o[14], s
        }

        function X(e) {
            let t, n, l, i, s, o, u, d, m, p, g, h, v = (0, a.c)(49),
                {
                    image: b,
                    imageRef: x,
                    conversationId: y,
                    imageAssetResolver: w,
                    thumbnailOnly: I,
                    aspectRatio: E,
                    imageNumber: C,
                    onOpen: T
                } = e,
                k = (0, c.z)(J.a),
                R = (0, B.a)();
            v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], v[0] = t) : t = v[0];
            let [S, A] = (0, f.useState)(t), [j, N] = (0, f.useState)(null), P = I ? b.previewSrc : b.src, O = I ? b.src : b.previewSrc;
            v[1] !== S || v[2] !== P || v[3] !== O ? (n = [P, O].filter(e => null != e && !S.includes(e)), v[1] = S, v[2] = P, v[3] = O, v[4] = n) : n = v[4];
            let [G, M] = n;
            v[5] !== y || v[6] !== w ? (l = {
                conversationId: y,
                imageAssetResolver: w,
                shouldLoadFileDataUrl: !1
            }, v[5] = y, v[6] = w, v[7] = l) : l = v[7];
            let L = l,
                F = G ?? "";
            v[8] !== L || v[9] !== F ? (i = {
                ...L,
                src: F
            }, v[8] = L, v[9] = F, v[10] = i) : i = v[10];
            let W = (0, q.a)(i),
                D = null != W.previewSrc && j === W.previewSrc,
                U = !W.isError && (I || D) ? "" : M ?? "";
            v[11] !== L || v[12] !== U ? (s = {
                ...L,
                src: U
            }, v[11] = L, v[12] = U, v[13] = s) : s = v[13];
            let H = (0, q.a)(s),
                z = W.isError ? H.previewSrc : W.previewSrc,
                $ = W.isError ? M : G,
                Y = I || W.isError || D || H.previewSrc === z ? null : H.previewSrc,
                Q = Y ?? z;
            return v[14] !== y || v[15] !== b.id || v[16] !== b.previewSrc || v[17] !== b.searchResult?.title || v[18] !== b.src || v[19] !== w || v[20] !== R || v[21] !== k || v[22] !== Q ? (o = () => null == Q ? [] : (0, K.getGeneratedImageContextMenuItems)(k, {
                chatGptConversationId: y.startsWith("chatgpt:") ? y.slice(8) : void 0,
                displaySrc: Q,
                image: {
                    id: b.id,
                    alt: b.searchResult?.title ?? "",
                    tabTitle: b.searchResult?.title ?? "",
                    previewSrc: b.previewSrc ?? b.src,
                    src: b.src
                },
                imageAssetResolver: w,
                intl: R
            }), v[14] = y, v[15] = b.id, v[16] = b.previewSrc, v[17] = b.searchResult?.title, v[18] = b.src, v[19] = w, v[20] = R, v[21] = k, v[22] = Q, v[23] = o) : o = v[23], v[24] !== C || v[25] !== R ? (u = R.formatMessage({
                id: "chatgpt.imageGroup.bento.openImage",
                defaultMessage: "Open image {number}",
                description: "Accessible label for opening a search image in a ChatGPT response's image grid. Number is the one-based position in the group."
            }, {
                number: C
            }), v[24] = C, v[25] = R, v[26] = u) : u = v[26], v[27] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, r.jsx)(_.a, {
                className: "absolute inset-0"
            }), v[27] = d) : d = v[27], v[28] !== E || v[29] !== $ || v[30] !== b || v[31] !== x || v[32] !== Y || v[33] !== z ? (m = null == z ? null : (0, r.jsx)("img", {
                ref: null == Y ? x : void 0,
                className: "relative h-full w-full object-cover",
                style: {
                    objectPosition: ee(b, E)
                },
                src: z,
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                onLoad: () => N(z),
                onError: () => {
                    null != $ && A(e => [...e, $])
                }
            }, z), v[28] = E, v[29] = $, v[30] = b, v[31] = x, v[32] = Y, v[33] = z, v[34] = m) : m = v[34], v[35] !== E || v[36] !== M || v[37] !== b || v[38] !== x || v[39] !== Y ? (p = null == Y ? null : (0, r.jsx)("img", {
                ref: x,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                style: {
                    objectPosition: ee(b, E)
                },
                src: Y,
                alt: "",
                "aria-hidden": "true",
                draggable: !1,
                referrerPolicy: "no-referrer",
                onError: () => {
                    null != M && A(e => [...e, M])
                }
            }, Y), v[35] = E, v[36] = M, v[37] = b, v[38] = x, v[39] = Y, v[40] = p) : p = v[40], v[41] !== T || v[42] !== u || v[43] !== m || v[44] !== p ? (g = (0, r.jsxs)("button", {
                className: "relative h-full w-full cursor-interaction bg-surface-secondary select-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                type: "button",
                "aria-label": u,
                onClick: T,
                children: [d, m, p]
            }), v[41] = T, v[42] = u, v[43] = m, v[44] = p, v[45] = g) : g = v[45], v[46] !== o || v[47] !== g ? (h = (0, r.jsx)(V.a, {
                getItems: o,
                children: g
            }), v[46] = o, v[47] = g, v[48] = h) : h = v[48], h
        }

        function ee(e, t) {
            let n = e.thumbnailCrop;
            if (null == n) return;
            let r = n.width / n.height;
            if (1e-6 > Math.abs(r - t)) return;
            let a = r > t,
                l = a ? r : 1 / r,
                i = a ? t : 1 / t,
                s = Math.max(0, Math.min(100, ((a ? n.center_x_percent : n.center_y_percent) * l - i / 2) / (l - i) * 100)).toFixed(1);
            return a ? `${s}% 50.0%` : `50.0% ${s}%`
        }
        var et = n("DIH"),
            en = n("boW");
        let er = (0, u.Me)("chatgpt:image-group"),
            ea = (0, f.lazy)(async () => {
                let {
                    ChatGptImageLightbox: e
                } = await Promise.all([n.e(800306), n.e(428728)]).then(n.bind(n, "Zvr"));
                return {
                    default: e
                }
            });

        function el(e) {
            let t, n, l, i, s = (0, a.c)(10),
                {
                    attributes: o
                } = e,
                c = (0, j.d)();
            if (s[0] !== o || s[1] !== c) {
                l = Symbol.for("react.early_return_sentinel");
                e: {
                    var u, f;
                    let e;
                    if (null == (t = (0, T.a)(o)) || c?.contentReferences[t]?.type === "hidden" && !c.isStreaming) {
                        l = null;
                        break e
                    }
                    n = es((u = t, f = c?.contentReferences, null == (e = f?.[u]) ? [] : (0, d.u)(e, u)), c?.shouldBlockExternalEgress === !0 && !0 !== c.renderRestrictedImages)
                }
                s[0] = o, s[1] = c, s[2] = t, s[3] = n, s[4] = l
            } else t = s[2], n = s[3], l = s[4];
            if (l !== Symbol.for("react.early_return_sentinel")) return l;
            let m = n;
            if (c?.shouldBlockExternalEgress === !0 && 0 === m.length) return null;
            let p = c?.conversationId,
                g = c?.contentReferences[t];
            return s[5] !== m || s[6] !== t || s[7] !== p || s[8] !== g ? (i = (0, r.jsx)(eu, {
                contentReferenceIndex: t,
                conversationId: p,
                reference: g,
                images: m
            }), s[5] = m, s[6] = t, s[7] = p, s[8] = g, s[9] = i) : i = s[9], i
        }

        function ei(e) {
            let t, n, l = (0, a.c)(9),
                {
                    contentReferenceIndex: i,
                    conversationId: s,
                    reference: o
                } = e,
                c = (0, j.d)();
            l[0] !== i || l[1] !== o || l[2] !== c ? (t = es((0, d.u)(o, i), c?.shouldBlockExternalEgress === !0 && !0 !== c.renderRestrictedImages), l[0] = i, l[1] = o, l[2] = c, l[3] = t) : t = l[3];
            let u = t;
            return c?.shouldBlockExternalEgress === !0 && 0 === u.length ? null : (l[4] !== i || l[5] !== s || l[6] !== u || l[7] !== o ? (n = (0, r.jsx)(eu, {
                contentReferenceIndex: i,
                conversationId: s,
                reference: o,
                images: u
            }), l[4] = i, l[5] = s, l[6] = u, l[7] = o, l[8] = n) : n = l[8], n)
        }

        function es(e, t) {
            return t ? e.flatMap(e => (0, b.d)(e.src) ? [] : [{
                ...e,
                previewSrc: null == e.previewSrc || (0, b.d)(e.previewSrc) ? e.src : e.previewSrc
            }]) : e
        }

        function eo(e) {
            let t, n = (0, a.c)(4),
                {
                    fullWidth: l
                } = e,
                i = (0, f.useContext)(M.a);
            if (l) {
                let e, t;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(p.a, {
                    className: "aspect-5/4",
                    "aria-hidden": "true",
                    variant: "prominent"
                }), n[0] = e) : e = n[0], n[1] !== i ? (t = (0, r.jsx)("div", {
                    className: "-mx-6 mb-5",
                    "data-testid": "chatgpt-image-group-shimmer",
                    children: (0, r.jsx)("div", {
                        ref: i,
                        "data-entity-photos": !0,
                        children: e
                    })
                }), n[1] = i, n[2] = t) : t = n[2], t
            }
            return n[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, r.jsx)("div", {
                className: "my-3",
                "data-testid": "chatgpt-image-group-shimmer",
                children: (0, r.jsx)("div", {
                    className: "grid gap-2 overflow-hidden",
                    style: {
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
                    },
                    children: Array.from({
                        length: 4
                    }, ec)
                })
            }), n[3] = t) : t = n[3], t
        }

        function ec(e, t) {
            return (0, r.jsx)(_.a, {
                className: "aspect-square min-w-0 rounded-2xl",
                "data-testid": "chatgpt-image-group-shimmer-tile"
            }, t)
        }

        function eu(e) {
            let t, n, l, s, o, d, p, _, b, y, T = (0, a.c)(55),
                {
                    contentReferenceIndex: M,
                    conversationId: H,
                    reference: z,
                    images: B
                } = e,
                $ = (0, c.z)(I.a),
                Y = (0, c.z)(E.a),
                K = (0, j.d)(),
                V = (0, c.x)(R.a, H ?? null),
                q = z?.layout === "full_width" || z?.start_idx === 0 && (V || (0, O.i)(K?.imageEngagementContext?.parentContext.entityCategory ?? null)),
                J = !q && z?.layout === "bento",
                Q = Array.isArray(z?.images) ? z.images : [],
                X = null;
            J ? X = "bento" : z?.type !== "image_group" || q || 1 === Q.length || (X = "carousel");
            let ee = (0, f.useContext)(x.a),
                el = q && !K?.contentReferences.slice(0, M).some(ev),
                ei = (0, c.x)(L.e, el ? H ?? null : null),
                es = "restricted" !== ee && K?.shouldBlockExternalEgress !== !0 ? ei ?? void 0 : void 0,
                ec = es?.src,
                eu = es?.previewSrc;
            T[0] !== ec || T[1] !== eu ? (t = new Set([ec, eu].filter(eh)), T[0] = ec, T[1] = eu, T[2] = t) : t = T[2];
            let ex = t;
            T[3] !== ex ? (n = e => ex.has(e.src) || ex.has(e.previewSrc ?? "") || ex.has(e.searchResult?.originalSrc ?? ""), T[3] = ex, T[4] = n) : n = T[4];
            let ey = B.find(n),
                ew = null != es ? [{
                    ...es,
                    ...ey,
                    id: es.id,
                    src: ey?.src ?? es.src,
                    previewSrc: es.previewSrc ?? es.src
                }, ...B.filter(e => !ex.has(e.src) && !ex.has(e.previewSrc ?? "") && !ex.has(e.searchResult?.originalSrc ?? ""))] : B,
                [eI, eE] = (0, f.useState)(null),
                eC = (0, f.useRef)(null),
                eT = (0, g.a)(),
                ek = (0, f.useContext)(F.a),
                eR = (0, C.k)(),
                eS = (0, c.x)(A.j, H ?? null),
                eA = null == H ? er : (0, u.Me)(`chatgpt:${H}`),
                ej = null == eS ? void 0 : (0, k.c)(eS),
                eN = "chatgpt-thread" === Y.value.routeKind && Y.value.conversationId === H,
                eP = ew.map(e_),
                eO = ew.map(D.c),
                eG = eO.flatMap(eg),
                eM = K?.contentReferenceMessageIds?.[M] ?? K?.messageId;
            T[5] === Symbol.for("react.memo_cache_sentinel") ? (l = new Set, T[5] = l) : l = T[5];
            let eL = (0, f.useRef)(l),
                eF = q || null != X || null != ek || ew.some(ep) ? e => {
                    let t = {
                            engagementContext: {
                                conversationId: eS ?? void 0,
                                messageId: eM,
                                assistantMessageId: K?.messageId,
                                turnOrdinal: (0, N.a)($, H, K?.messageId)
                            },
                            viewOnly: q,
                            imageAssetContext: {
                                conversationId: eA,
                                imageAssetResolver: ej
                            },
                            images: eP,
                            favorites: 0 === eG.length || K?.productReference != null ? void 0 : {
                                sources: eO,
                                conversationId: eS ?? void 0,
                                messageId: eM
                            },
                            selectedIndex: e
                        },
                        n = {
                            request: t,
                            imageIds: ew.map(em),
                            onNavigate(e, n) {
                                (0, w.a)($.get(m.l).authMethod) && (ew[e]?.searchResult != null || 0 === e && null != es) && (0, S.a)($, {
                                    turnContext: K,
                                    contentReferenceIndex: M,
                                    image: t.images[e],
                                    imageIndex: e,
                                    galleryArrow: n,
                                    surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY
                                })
                            }
                        };
                    (ew[e]?.searchResult != null || 0 === e && null != es) && (0, S.a)($, {
                        turnContext: K,
                        contentReferenceIndex: M,
                        imageUse: ew.some(ef) ? "deepResearch" : "legacyCarousel",
                        image: t.images[e],
                        imageIndex: e
                    });
                    let r = null == ek && !Y.get(E.h) && (0, C.f)(eR, "2983946247").get("image_overlay_enabled", !1);
                    null != ek ? ek(t) : r ? (0, h.b)({
                        source: eC.current?.getThumbnail(ew[e].id) ?? null,
                        open: e => eE({
                            ...n,
                            imageRef: e
                        }),
                        reducedMotion: eT
                    }) : eE(n)
                } : void 0,
                eW = e => {
                    let t = eO[ew.findIndex(t => t.id === e.id)];
                    return null == t || K?.productReference != null ? null : (0, r.jsx)(W.SearchImageFavorite, {
                        source: t,
                        sources: eG,
                        conversationId: eS ?? void 0,
                        messageId: eM,
                        surface: "image_tile",
                        presentation: "folderMenu"
                    })
                };
            T[6] !== M || T[7] !== K ? (s = K?.contentReferences[M]?.type === "image_group" ? (0, r.jsx)(en.a, {
                contentReferenceIndex: M,
                reference: K.contentReferences[M],
                turnContext: K
            }) : null, T[6] = M, T[7] = K, T[8] = s) : s = T[8];
            let eD = ew.map(e => (0, r.jsx)(eb, {
                    contentReferenceIndex: M,
                    image: e,
                    logged: eL,
                    turnContext: K
                }, e.id)),
                eU = null != X ? (0, r.jsx)(Z, {
                    ref: eC,
                    cards: Array.from({
                        length: Q.length || Math.max(ew.length, 3)
                    }, (e, t) => {
                        let n = ew.find(e => e.sourceImageIndex === t);
                        return {
                            image: n,
                            thumbnailOnly: ("carousel" === X || 0 !== t) && n?.thumbnailOnly === !0
                        }
                    }),
                    conversationId: eA,
                    imageAssetResolver: ej,
                    layout: X,
                    onOpenImage: e => eF?.(ew.findIndex(t => t.id === e.id)),
                    renderImageFavorite: eW
                }) : null;
            return T[9] !== q || T[10] !== ew.length || T[11] !== X ? (o = 0 === ew.length && null == X ? (0, r.jsx)(eo, {
                fullWidth: q
            }) : null, T[9] = q, T[10] = ew.length, T[11] = X, T[12] = o) : o = T[12], T[13] !== M || T[14] !== es?.previewSrc || T[15] !== es?.src || T[16] !== q || T[17] !== eC || T[18] !== eA || T[19] !== ej || T[20] !== ew || T[21] !== eF || T[22] !== $ || T[23] !== K ? (d = ew.length > 0 && q ? (0, r.jsx)(U.a, {
                ref: eC,
                conversationId: eA,
                firstPhotoFallbackSrc: es?.previewSrc ?? es?.src,
                imageAssetResolver: ej,
                images: ew,
                onOpenImage: eF,
                onArrowClick: (e, t) => {
                    let n = ew[t],
                        r = K?.contentReferences[M];
                    if (r?.type !== "image_group" || null == n.sourceImageIndex) return;
                    let a = Array.isArray(r.images) ? r.images.map(et.d).filter(ed) : [],
                        l = (0, et.d)(a[n.sourceImageIndex]?.image_result);
                    (0, S.a)($, {
                        turnContext: K,
                        contentReferenceIndex: M,
                        galleryArrow: e,
                        imageIndex: n.sourceImageIndex,
                        image: {
                            attribution: null,
                            destinationUrl: (0, et.b)(l?.url),
                            originalSrc: (0, et.b)(l?.original_content_url) ?? void 0,
                            src: (0, et.b)(l?.content_url) ?? "",
                            title: null
                        }
                    })
                }
            }) : null, T[13] = M, T[14] = es?.previewSrc, T[15] = es?.src, T[16] = q, T[17] = eC, T[18] = eA, T[19] = ej, T[20] = ew, T[21] = eF, T[22] = $, T[23] = K, T[24] = d) : d = T[24], T[25] !== H || T[26] !== q || T[27] !== eC || T[28] !== eA || T[29] !== ej || T[30] !== ew || T[31] !== eN || T[32] !== eF || T[33] !== ek || T[34] !== eW || T[35] !== Y || T[36] !== X ? (p = ew.length > 0 && !q && null == X ? (0, r.jsx)("div", {
                className: "my-3",
                children: (0, r.jsx)(v.a, {
                    ref: eC,
                    conversationId: eA,
                    enableCanvas: !1,
                    imageEditAttribution: {
                        editEntryPoint: "conversation"
                    },
                    enableImageEditor: eN && null == ek && ew.every(P.a),
                    imageAssetResolver: ej,
                    images: ew,
                    onImageEditSubmit: null != H && eN ? (e, t) => (0, P.c)(Y, {
                        conversationId: H,
                        image: e,
                        request: t
                    }) : void 0,
                    onOpenImage: eF,
                    renderImageFavorite: eW
                })
            }) : null, T[25] = H, T[26] = q, T[27] = eC, T[28] = eA, T[29] = ej, T[30] = ew, T[31] = eN, T[32] = eF, T[33] = ek, T[34] = eW, T[35] = Y, T[36] = X, T[37] = p) : p = T[37], T[38] !== H || T[39] !== el || T[40] !== K ? (_ = el && null != H ? (0, r.jsx)(G.a, {
                conversationId: H,
                turnContext: K ?? void 0
            }) : null, T[38] = H, T[39] = el, T[40] = K, T[41] = _) : _ = T[41], T[42] !== eC || T[43] !== eI || T[44] !== eE ? (b = null == eI ? null : (0, r.jsx)(f.Suspense, {
                fallback: null,
                children: (0, r.jsx)(ea, {
                    imageRef: eI.imageRef,
                    getThumbnail: e => eC.current?.getThumbnail(eI.imageIds[e]) ?? null,
                    request: eI.request,
                    onNavigate: eI.onNavigate,
                    onClose: () => eE(null)
                })
            }), T[42] = eC, T[43] = eI, T[44] = eE, T[45] = b) : b = T[45], T[46] !== d || T[47] !== p || T[48] !== _ || T[49] !== b || T[50] !== s || T[51] !== eD || T[52] !== eU || T[53] !== o ? (y = (0, r.jsxs)(r.Fragment, {
                children: [s, eD, eU, o, d, p, _, b]
            }), T[46] = d, T[47] = p, T[48] = _, T[49] = b, T[50] = s, T[51] = eD, T[52] = eU, T[53] = o, T[54] = y) : y = T[54], y
        }

        function ed(e) {
            return null != e
        }

        function ef(e) {
            return e.searchResult?.isProxied
        }

        function em(e) {
            return e.id
        }

        function ep(e) {
            return null != e.searchResult
        }

        function eg(e) {
            return null == e ? [] : [e]
        }

        function e_(e) {
            return {
                attribution: e.searchResult?.attribution ?? null,
                contentSize: null != e.width && null != e.height ? {
                    width: e.width,
                    height: e.height
                } : void 0,
                destinationUrl: e.searchResult?.destinationUrl ?? null,
                fallbackSrc: e.previewSrc,
                originalSrc: e.searchResult?.originalSrc,
                isProxied: e.searchResult?.isProxied,
                src: e.src,
                title: e.searchResult?.title ?? null
            }
        }

        function eh(e) {
            return null != e
        }

        function ev(e) {
            return "image_group" === e.type && "full_width" === e.layout
        }

        function eb(e) {
            let t, n, r, i, o, u, d, m, p, g, _, h, v = (0, a.c)(45),
                {
                    contentReferenceIndex: b,
                    image: x,
                    logged: w,
                    turnContext: E
                } = e,
                C = (0, c.z)(I.a),
                T = E?.contentReferences[b],
                k = E?.contentReferenceMessageIds?.[b] ?? E?.messageId,
                R = (0, c.x)(A.j, E?.conversationId ?? null),
                S = E?.trackShownImpressions !== !1 && E?.productReference == null && null != x.searchResult && (T?.type === "image_group" || T?.type === "image_v2");
            if (v[0] !== x.sourceImageIndex || v[1] !== T) {
                let e = null != x.sourceImageIndex && Array.isArray(T?.images) ? (0, et.d)(T.images[x.sourceImageIndex]) : null;
                t = (0, et.d)(e?.image_result) ?? e, v[0] = x.sourceImageIndex, v[1] = T, v[2] = t
            } else t = v[2];
            let j = t,
                N = x.searchResult?.isProxied ? void 0 : x.previewSrc ?? void 0;
            v[3] !== N ? (n = ex(N), v[3] = N, v[4] = n) : n = v[4];
            let P = S && null != N;
            v[5] !== n || v[6] !== P ? (r = {
                ...n,
                staleTime: 1 / 0,
                enabled: P
            }, v[5] = n, v[6] = P, v[7] = r) : r = v[7];
            let {
                isSuccess: O,
                isError: G
            } = (0, s.a)(r);
            if (v[8] !== x.src || v[9] !== j?.thumbnail_render_mode || v[10] !== G || v[11] !== N) {
                let e, t = x.src.replace(/^http:\/\//, "https://");
                v[15] !== j?.thumbnail_render_mode || v[16] !== G || v[17] !== N ? (e = j?.thumbnail_render_mode !== "thumbnail_only" && (G || null != N && URL.parse(N)?.origin === "https://images.openai.com"), v[15] = j?.thumbnail_render_mode, v[16] = G, v[17] = N, v[18] = e) : e = v[18], i = e, u = s.a, o = ex(i ? t : void 0), v[8] = x.src, v[9] = j?.thumbnail_render_mode, v[10] = G, v[11] = N, v[12] = i, v[13] = o, v[14] = u
            } else i = v[12], o = v[13], u = v[14];
            let M = S && i;
            v[19] !== o || v[20] !== M ? (d = {
                ...o,
                staleTime: 1 / 0,
                enabled: M
            }, v[19] = o, v[20] = M, v[21] = d) : d = v[21];
            let {
                isSuccess: L
            } = u(d), F = O || L, W = "string" == typeof T?.type ? T.type : void 0, D = R ?? void 0;
            if (v[22] !== x.searchResult?.isProxied || v[23] !== j?.title || v[24] !== k || v[25] !== T || v[26] !== D || v[27] !== W || v[28] !== N) {
                let e, t;
                m = {
                    eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN",
                    contentReferenceType: W,
                    messageId: k,
                    conversationId: D
                }, T?.type === "image_v2" ? e = x.searchResult?.isProxied ? "deepResearch" : "legacyCarousel" : T?.layout !== "full_width" && (e = "imageGroup", "carousel" == (t = T?.layout === "bento" ? "bento" : "carousel") && Array.isArray(T?.images) && 1 === T.images.length && (t = "single")), p = JSON.stringify([m, String(N), String(j?.title), e, t]), v[22] = x.searchResult?.isProxied, v[23] = j?.title, v[24] = k, v[25] = T, v[26] = D, v[27] = W, v[28] = N, v[29] = m, v[30] = p
            } else m = v[29], p = v[30];
            let U = p;
            v[31] !== U || v[32] !== w || v[33] !== k || v[34] !== m || v[35] !== C || v[36] !== S ? (g = () => {
                !S || null == k || k.startsWith("WEB:") || w.current.has(U) || (w.current.add(U), (0, y.a)(C, l.d, m))
            }, v[31] = U, v[32] = w, v[33] = k, v[34] = m, v[35] = C, v[36] = S, v[37] = g) : g = v[37];
            let H = (0, f.useEffectEvent)(g);
            return v[38] !== F || v[39] !== H ? (_ = () => {
                F && H()
            }, v[38] = F, v[39] = H, v[40] = _) : _ = v[40], v[41] !== U || v[42] !== F || v[43] !== S ? (h = [F, U, S], v[41] = U, v[42] = F, v[43] = S, v[44] = h) : h = v[44], (0, f.useEffect)(_, h), null
        }

        function ex(e) {
            return {
                queryKey: ["chatgpt-search-image-download", e],
                queryFn: null == e ? o.u : () => new Promise((t, n) => {
                    let r = new Image;
                    r.onload = () => t(!0), r.onerror = () => n(Error("Search image download failed")), r.referrerPolicy = "no-referrer", r.src = e
                }),
                retry: 3
            }
        }
    }),
    M3F: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            l = n("on"),
            i = n("zd"),
            s = n("tt"),
            o = n("zS"),
            c = n("WA"),
            u = n("KDa"),
            d = n("TUM");

        function f(e) {
            let t, n, o, u, f, p, g = (0, a.c)(19),
                {
                    imageAspectClassName: _,
                    subtitle: h,
                    thumbnailUrl: v,
                    title: b,
                    url: x
                } = e,
                y = void 0 === _ ? "aspect-[4/3]" : _,
                w = (0, d.d)(),
                I = (0, i.useContext)(c.a),
                E = w?.shouldBlockExternalEgress === !0 || "restricted" === I;
            g[0] !== y || g[1] !== E || g[2] !== v || g[3] !== b || g[4] !== x ? (t = null == v ? (0, r.jsx)("div", {
                className: (0, l.b)(y, "flex w-20 shrink-0 items-center justify-center rounded bg-surface-secondary/85"),
                children: null == x ? null : (0, r.jsx)(s.a, {
                    className: "icon-md",
                    href: x,
                    loadRemote: !E
                })
            }) : E ? (0, r.jsx)("div", {
                className: (0, l.b)(y, "w-20 shrink-0 rounded bg-surface-secondary/85")
            }) : (0, r.jsx)("img", {
                alt: b,
                className: (0, l.b)(y, "m-0 w-20 shrink-0 rounded object-cover"),
                src: v
            }), g[0] = y, g[1] = E, g[2] = v, g[3] = b, g[4] = x, g[5] = t) : t = g[5], g[6] !== b ? (n = (0, r.jsx)("div", {
                className: "line-clamp-2 font-medium text-default",
                children: b
            }), g[6] = b, g[7] = n) : n = g[7], g[8] !== h ? (o = null == h ? null : (0, r.jsx)("div", {
                className: "mt-1 line-clamp-2 text-secondary",
                children: h
            }), g[8] = h, g[9] = o) : o = g[9], g[10] !== n || g[11] !== o ? (u = (0, r.jsxs)("div", {
                className: "min-w-0",
                children: [n, o]
            }), g[10] = n, g[11] = o, g[12] = u) : u = g[12], g[13] !== t || g[14] !== u ? (f = (0, r.jsxs)("div", {
                className: "flex min-w-0 gap-3 rounded-md border border-subtle bg-surface-secondary p-2",
                children: [t, u]
            }), g[13] = t, g[14] = u, g[15] = f) : f = g[15];
            let C = f;
            return g[16] !== C || g[17] !== x ? (p = null == x ? C : (0, r.jsx)(m, {
                className: "block no-underline",
                href: x,
                children: C
            }), g[16] = C, g[17] = x, g[18] = p) : p = g[18], p
        }

        function m(e) {
            let t, n, i, s = (0, a.c)(9),
                {
                    ref: c,
                    children: d,
                    className: f,
                    href: m
                } = e;
            s[0] !== m ? (t = null == m ? null : (0, o.a)(m), s[0] = m, s[1] = t) : t = s[1];
            let p = t;
            return null == p ? null : (s[2] !== f ? (n = (0, l.b)("cursor-interaction", f), s[2] = f, s[3] = n) : n = s[3], s[4] !== d || s[5] !== c || s[6] !== p || s[7] !== n ? (i = (0, r.jsx)(u.a, {
                ref: c,
                className: n,
                href: p,
                initiator: "markdown_link_click",
                children: d
            }), s[4] = d, s[5] = c, s[6] = p, s[7] = n, s[8] = i) : i = s[8], i)
        }
        n.d(t, {
            a: () => f,
            b: () => m
        })
    }),
    uH1: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            l = n("c1H"),
            i = n("Xnl"),
            s = n("rK"),
            o = n("Wf"),
            c = n("oy"),
            u = n("NkE"),
            d = n("Vm"),
            f = n("ygO"),
            m = n("tt"),
            p = n("yG"),
            g = n("tSE"),
            _ = n("BWE"),
            h = n("Mr"),
            v = n("TUM"),
            b = n("mYb"),
            x = n("xZE"),
            y = n("Nv0"),
            w = n("j8Y"),
            I = n("M3F"),
            E = n("DIH");

        function C(e) {
            let t, n, u, d, m, I, C, S, A, j, N, O, G = (0, a.c)(37),
                {
                    reference: M
                } = e,
                L = (0, i.z)(g.a),
                F = (0, v.d)(),
                W = (0, o.a)();
            if ("nav_list" === M.type) {
                let e;
                return G[0] !== M ? (e = (0, r.jsx)(R, {
                    reference: M
                }), G[0] = M, G[1] = e) : e = G[1], e
            }
            G[2] !== M ? (t = (0, s.o)(M), G[2] = M, G[3] = t) : t = G[3];
            let D = t;
            if (G[4] !== F || G[5] !== M || G[6] !== D) {
                A = Symbol.for("react.early_return_sentinel");
                e: {
                    var U;
                    let e, t, a;G[15] !== M.type ? (e = e => "navigation" !== M.type || null != e.url, G[15] = M.type, G[16] = e) : e = G[16];
                    let l = P(M).filter(e),
                        i = l.length > 0 ? l : (U = M, null == (a = (0, E.b)(U.page_title) ?? (0, E.b)(U.display_title)) ? [] : [{
                            subtitle: (0, E.b)(U.snippet) ?? (0, E.b)(U.display_title),
                            thumbnailUrl: null,
                            title: a,
                            url: (0, E.b)(U.url)
                        }]);G[17] !== F || G[18] !== M ? (t = F?.contentReferenceMessageIds?.[F.contentReferences.indexOf(M)] ?? F?.messageId, G[17] = F, G[18] = M, G[19] = t) : t = G[19],
                    d = t,
                    m = "navigation" === M.type && null != d ? (0, b.c)(M, d) : [];
                    let s = new Set(l.slice(0, 3).map(k));
                    if (u = "navigation" === M.type && Array.isArray(M.domains) && (l.length > 3 || m.some(e => "web" === e.kind && !s.has(e.url))) && null != F && null != d, 0 === i.length && !u) {
                        let e;
                        G[20] !== M ? (e = (0, r.jsx)(w.c, {
                            reference: M
                        }), G[20] = M, G[21] = e) : e = G[21], A = e;
                        break e
                    }
                    n = y.a,
                    S = D,
                    I = "grid gap-2 sm:grid-cols-2",
                    C = i.slice(0, u ? 3 : 6).map(T)
                }
                G[4] = F, G[5] = M, G[6] = D, G[7] = n, G[8] = u, G[9] = d, G[10] = m, G[11] = I, G[12] = C, G[13] = S, G[14] = A
            } else n = G[7], u = G[8], d = G[9], m = G[10], I = G[11], C = G[12], S = G[13], A = G[14];
            return A !== Symbol.for("react.early_return_sentinel") ? A : (G[22] !== I || G[23] !== C ? (j = (0, r.jsx)("div", {
                className: I,
                children: C
            }), G[22] = I, G[23] = C, G[24] = j) : j = G[24], G[25] !== F || G[26] !== u || G[27] !== W || G[28] !== d || G[29] !== m || G[30] !== L ? (N = u ? (0, r.jsx)(f.a, {
                color: "secondary",
                size: "compact",
                onClick: () => {
                    d && !d.startsWith("WEB:") && (0, p.a)(L, l.d, {
                        eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED",
                        contentReferenceType: "navigation",
                        conversationId: L.get(h.j, F.conversationId) ?? void 0,
                        messageId: d
                    }), (0, x.a)(L, {
                        conversationId: F.conversationId,
                        shouldBlockExternalEgress: F.shouldBlockExternalEgress,
                        sources: m
                    }, W.formatMessage(_.d))
                },
                children: (0, r.jsx)(c.a, {
                    id: "chatgpt.contentReferences.navigation.moreLinks",
                    defaultMessage: "More links",
                    description: "Button below navigation website cards in a ChatGPT answer that opens all of that reference's links in the Sources panel"
                })
            }) : null, G[25] = F, G[26] = u, G[27] = W, G[28] = d, G[29] = m, G[30] = L, G[31] = N) : N = G[31], G[32] !== n || G[33] !== S || G[34] !== j || G[35] !== N ? (O = (0, r.jsxs)(n, {
                title: S,
                children: [j, N]
            }), G[32] = n, G[33] = S, G[34] = j, G[35] = N, G[36] = O) : O = G[36], O)
        }

        function T(e, t) {
            return (0, r.jsx)(I.a, {
                subtitle: e.subtitle,
                thumbnailUrl: e.thumbnailUrl,
                title: e.title,
                url: e.url
            }, `${e.url??e.title}-${String(t)}`)
        }

        function k(e) {
            return (0, d.a)({
                url: e.url ?? ""
            })?.url
        }

        function R(e) {
            let t, n, l, i, s, o, c, u, d = (0, a.c)(19),
                {
                    reference: f
                } = e;
            if (d[0] !== f) {
                o = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a = P(f).filter(A);
                    if (0 === a.length) {
                        o = null;
                        break e
                    }
                    d[7] !== f.title ? (e = (0, E.b)(f.title), d[7] = f.title, d[8] = e) : e = d[8];
                    let c = e;l = "not-prose mt-6 mb-1",
                    i = "chatgpt-nav-list",
                    d[9] !== c ? (s = null == c ? null : (0, r.jsx)("div", {
                        className: "-mb-1 pb-3 font-semibold text-default",
                        children: c
                    }), d[9] = c, d[10] = s) : s = d[10],
                    t = "hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2",
                    n = a.map(S)
                }
                d[0] = f, d[1] = t, d[2] = n, d[3] = l, d[4] = i, d[5] = s, d[6] = o
            } else t = d[1], n = d[2], l = d[3], i = d[4], s = d[5], o = d[6];
            return o !== Symbol.for("react.early_return_sentinel") ? o : (d[11] !== t || d[12] !== n ? (c = (0, r.jsx)("div", {
                className: t,
                children: n
            }), d[11] = t, d[12] = n, d[13] = c) : c = d[13], d[14] !== l || d[15] !== i || d[16] !== s || d[17] !== c ? (u = (0, r.jsxs)("div", {
                className: l,
                "data-testid": i,
                children: [s, c]
            }), d[14] = l, d[15] = i, d[16] = s, d[17] = c, d[18] = u) : u = d[18], u)
        }

        function S(e, t) {
            return (0, r.jsx)(j, {
                item: e
            }, `${e.url}-${String(t)}`)
        }

        function A(e) {
            return null != e.url
        }

        function j(e) {
            let t, n, l, i, s, c, d, f, p, g, _, h, b, x = (0, a.c)(45),
                {
                    item: y
                } = e,
                w = (0, o.a)(),
                E = (0, v.d)(),
                C = E?.shouldBlockExternalEgress === !0;
            x[0] !== w || x[1] !== y.dateLabel || x[2] !== y.pubDate ? (t = y.dateLabel ?? function(e, t) {
                if (null == t) return null;
                let n = new Date(1e3 * t),
                    r = Math.max(Math.floor((Date.now() - n.getTime()) / 864e5), 0);
                if (r > 30) return e.formatDate(n, {
                    dateStyle: "medium"
                });
                let a = e.formatRelativeTime(-r, "day", {
                    numeric: "auto"
                });
                return e.locale.startsWith("en") ? `${a.charAt(0).toUpperCase()}${a.slice(1)}` : a
            }(w, y.pubDate), x[0] = w, x[1] = y.dateLabel, x[2] = y.pubDate, x[3] = t) : t = x[3];
            let T = t;
            x[4] !== T || x[5] !== y.attribution || x[6] !== y.subtitle || x[7] !== y.title || x[8] !== y.url ? (n = e => {
                if (null != e) return (0, u.b)(e, {
                    text: [y.title, y.url, y.attribution, y.subtitle, T].join(" "),
                    highlight: "block"
                })
            }, x[4] = T, x[5] = y.attribution, x[6] = y.subtitle, x[7] = y.title, x[8] = y.url, x[9] = n) : n = x[9];
            let k = !C;
            x[10] !== y.url || x[11] !== k ? (l = (0, r.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center blur-3xl",
                children: (0, r.jsx)(m.a, {
                    className: "size-64 opacity-20 dark:opacity-10",
                    href: y.url,
                    loadRemote: k
                })
            }), x[10] = y.url, x[11] = k, x[12] = l) : l = x[12];
            let R = !C;
            x[13] !== y.url || x[14] !== R ? (i = (0, r.jsx)("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: (0, r.jsx)(m.a, {
                    className: "size-10 overflow-hidden rounded-[22%]",
                    href: y.url,
                    loadRemote: R
                })
            }), x[13] = y.url, x[14] = R, x[15] = i) : i = x[15], x[16] !== y.thumbnailUrl || x[17] !== y.title || x[18] !== C ? (s = null == y.thumbnailUrl || C ? null : (0, r.jsx)("img", {
                alt: y.title,
                className: "absolute inset-0 m-0 h-full w-full object-cover",
                decoding: "async",
                onError: N,
                referrerPolicy: "no-referrer",
                src: y.thumbnailUrl
            }), x[16] = y.thumbnailUrl, x[17] = y.title, x[18] = C, x[19] = s) : s = x[19], x[20] !== l || x[21] !== i || x[22] !== s ? (c = (0, r.jsxs)("div", {
                className: "relative flex h-36 w-full shrink-0 items-center justify-center overflow-hidden bg-surface-secondary/92",
                children: [l, i, s]
            }), x[20] = l, x[21] = i, x[22] = s, x[23] = c) : c = x[23];
            let S = !C;
            return x[24] !== y.url || x[25] !== S ? (d = (0, r.jsx)(m.a, {
                className: "icon-xs overflow-hidden rounded-[22%]",
                href: y.url,
                loadRemote: S
            }), x[24] = y.url, x[25] = S, x[26] = d) : d = x[26], x[27] !== y.attribution ? (f = (0, r.jsx)("span", {
                className: "truncate",
                children: y.attribution
            }), x[27] = y.attribution, x[28] = f) : f = x[28], x[29] !== d || x[30] !== f ? (p = (0, r.jsxs)("div", {
                className: "flex items-center gap-1.5 text-xs text-default",
                children: [d, f]
            }), x[29] = d, x[30] = f, x[31] = p) : p = x[31], x[32] !== y.title ? (g = (0, r.jsx)("div", {
                className: "line-clamp-5 text-sm font-medium text-default decoration-text-info",
                children: y.title
            }), x[32] = y.title, x[33] = g) : g = x[33], x[34] !== T ? (_ = null == T ? null : (0, r.jsx)("div", {
                className: "text-xs text-secondary",
                children: T
            }), x[34] = T, x[35] = _) : _ = x[35], x[36] !== p || x[37] !== g || x[38] !== _ ? (h = (0, r.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-2 overflow-hidden px-4 text-ellipsis",
                children: [p, g, _]
            }), x[36] = p, x[37] = g, x[38] = _, x[39] = h) : h = x[39], x[40] !== y.url || x[41] !== h || x[42] !== n || x[43] !== c ? (b = (0, r.jsxs)(I.b, {
                ref: n,
                className: "flex shrink-0 basis-[calc((100%_-_1rem)/2)] snap-start flex-col gap-4 overflow-hidden rounded-xl border border-strong bg-surface pb-6 text-default no-underline shadow-none xs:basis-[calc((100%_-_2rem)/3)]",
                href: y.url,
                children: [c, h]
            }), x[40] = y.url, x[41] = h, x[42] = n, x[43] = c, x[44] = b) : b = x[44], b
        }

        function N(e) {
            e.currentTarget.hidden = !0
        }

        function P(e) {
            let t = Array.isArray(e.items) ? e.items : [],
                n = Array.isArray(e.domains) ? e.domains : [];
            return [...t, ...n].flatMap(e => {
                let t = (0, E.d)(e),
                    n = (0, E.b)(t?.title),
                    r = (0, E.b)(t?.url);
                return null == n ? [] : [{
                    attribution: (0, E.b)(t?.attribution) ?? (0, E.a)(r) ?? r,
                    dateLabel: (0, E.b)(t?.date_label),
                    pubDate: (0, E.c)(t?.pub_date),
                    subtitle: (0, E.b)(t?.subtitle) ?? (0, E.b)(t?.snippet) ?? (0, E.b)(t?.domain) ?? (0, E.a)(r),
                    thumbnailUrl: (0, E.b)(t?.thumbnail_url),
                    title: n,
                    url: r
                }]
            })
        }
        n.d(t, {
            a: () => C
        })
    }),
    GO3: (function(e, t, n) {
        var r = n("tG"),
            a = n("AS"),
            l = n("pd1");
        let i = a.object({
                type: a.literal("followup_a"),
                onboarding_renderer: l.a.shape.renderer,
                onboarding_level: l.a.shape.level,
                onboarding_use_case: l.a.shape.use_case,
                onboarding_action_id: l.a.shape.action_id,
                source: l.a.shape.source,
                start_idx: a.number().optional().catch(void 0)
            }),
            s = a.object({
                type: a.literal("followup_a"),
                source: a.literal("conversational_onboarding_use_case_l2_suggestion"),
                onboarding_attribution: a.object({
                    actions: a.tuple([a.object({
                        level: a.literal("l3"),
                        action_id: a.string().min(1).max(256),
                        originating_action_id: a.string().min(1).max(256).nullish()
                    }).strict()])
                }).strict(),
                onboarding_use_case: l.a.shape.use_case.optional().catch(void 0),
                start_idx: a.number().optional().catch(void 0)
            });

        function o(e) {
            let t = s.safeParse(e);
            if (!t.success) return;
            let n = t.data.onboarding_attribution.actions[0];
            return {
                type: "followup_a",
                renderer: "inline_followup_a",
                level: n.level,
                useCase: t.data.onboarding_use_case,
                actionId: n.action_id,
                originatingActionId: n.originating_action_id ?? void 0,
                source: t.data.source,
                contentReferenceStartIndex: (0, r.b)(t.data.start_idx)?.toString()
            }
        }

        function c(e) {
            let t = i.safeParse(e);
            if (t.success) return {
                renderer: t.data.onboarding_renderer,
                level: t.data.onboarding_level,
                useCase: t.data.onboarding_use_case,
                actionId: t.data.onboarding_action_id,
                source: t.data.source,
                contentReferenceStartIndex: (0, r.b)(t.data.start_idx)?.toString()
            }
        }
        n.d(t, {
            a: () => o,
            b: () => c
        })
    }),
    boW: (function(e, t, n) {
        var r = n("Qo"),
            a = n("c1H"),
            l = n("YYE"),
            i = n("Xnl"),
            s = n("zd"),
            o = n("yG"),
            c = n("OW"),
            u = n("Mr"),
            d = n("DW1"),
            f = n("GO3"),
            m = n("DIH");

        function p(e) {
            let t, n, p, _, h, v, b, x, y, w = (0, r.c)(48),
                {
                    contentReferenceIndex: I,
                    reference: E,
                    turnContext: C
                } = e,
                T = (0, i.z)(c.a);
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, w[0] = t) : t = w[0];
            let k = (0, s.useRef)(t);
            w[1] !== E || w[2] !== C ? (n = function(e, t) {
                switch (e.type) {
                    case "calculator":
                    case "container":
                    case "python":
                    case "title_citation":
                    case "location_search":
                    case "time":
                    case "stock":
                    case "forecast":
                    case "map":
                    case "businesses_map":
                    case "navigation":
                    case "dil":
                        return e.type;
                    case "nav_list":
                        return Array.isArray(e.items) && e.items.length > 0 ? "nav_list" : null;
                    case "sports_schedule":
                        return Array.isArray(e.games) && e.games.length > 0 ? "sports" : null;
                    case "sports_standings":
                        return Array.isArray(e.conferences) && e.conferences.length > 0 ? "sports" : null;
                    case "video":
                        return t?.shouldBlockExternalEgress ? null : "video";
                    case "followup_a":
                    case "followup_memory_a": {
                        let t = e.prompt_text ?? e.matched_text;
                        return "string" == typeof t && t.trim() ? e.type : null
                    }
                    case "image_group": {
                        let t = "string" == typeof e.matched_text && /^\ue200image_group\ue202[\s\S]*\ue201$/.test(e.matched_text),
                            n = Array.isArray(e.images) && e.images.some(e => (0, m.d)(e)?.image_result != null);
                        return t || n ? "image_group" : null
                    }
                    default:
                        return null
                }
            }(E, C), w[1] = E, w[2] = C, w[3] = n) : n = w[3];
            let R = n,
                S = C?.contentReferenceMessageIds?.[I] ?? C?.messageId,
                A = C?.conversationId,
                j = C?.trackShownImpressions !== !1;
            w[4] !== E.domains || w[5] !== E.type ? (p = "navigation" === E.type && Array.isArray(E.domains) ? E.domains.flatMap(g).join(",") : void 0, w[4] = E.domains, w[5] = E.type, w[6] = p) : p = w[6];
            let N = p,
                P = "dil" === E.type && "string" == typeof E.name ? E.name : void 0,
                O = ("followup_a" === E.type || "followup_memory_a" === E.type) && "string" == typeof E.source ? E.source : void 0;
            if (w[7] !== E.followup_kind || w[8] !== E.followup_position || w[9] !== E.followup_promotion_id || w[10] !== E.presentation_mode || w[11] !== E.receiver_followup_capability_scope || w[12] !== E.receiver_followup_intent || w[13] !== E.receiver_followup_position || w[14] !== E.receiver_followup_prompt_version || w[15] !== E.receiver_followup_share_surface || w[16] !== E.receiver_followup_treatment || w[17] !== E.start_idx || w[18] !== E.type) {
                let e = "followup_a" === E.type && E.receiver_followup_intent && null != E.receiver_followup_position && E.receiver_followup_treatment && E.receiver_followup_capability_scope && E.receiver_followup_prompt_version ? [E.receiver_followup_intent, E.receiver_followup_position, E.receiver_followup_treatment, E.receiver_followup_capability_scope, E.receiver_followup_prompt_version, E.receiver_followup_share_surface ?? void 0] : void 0;
                _ = "followup_a" === E.type || "followup_memory_a" === E.type ? JSON.stringify([E.start_idx, E.presentation_mode ?? void 0, E.followup_kind ?? void 0, E.followup_position ?? void 0, E.followup_promotion_id ?? void 0, e]) : void 0, w[7] = E.followup_kind, w[8] = E.followup_position, w[9] = E.followup_promotion_id, w[10] = E.presentation_mode, w[11] = E.receiver_followup_capability_scope, w[12] = E.receiver_followup_intent, w[13] = E.receiver_followup_position, w[14] = E.receiver_followup_prompt_version, w[15] = E.receiver_followup_share_surface, w[16] = E.receiver_followup_treatment, w[17] = E.start_idx, w[18] = E.type, w[19] = _
            } else _ = w[19];
            let G = _;
            w[20] !== E ? (v = JSON.stringify(h = (0, f.b)(E)), w[20] = E, w[21] = h, w[22] = v) : (h = w[21], v = w[22]);
            let M = v;
            w[23] !== R || w[24] !== A || w[25] !== G || w[26] !== O || w[27] !== S || w[28] !== N || w[29] !== h || w[30] !== E || w[31] !== T || w[32] !== P ? (b = () => {
                if (null == R || null == S || S.startsWith("WEB:") || null == A) return;
                let e = {
                        legacyStatsigEventName: "search_content_reference_shown",
                        eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_SHOWN",
                        contentReferenceType: R,
                        messageId: S,
                        conversationId: T.get(u.j, A) ?? void 0,
                        widgetName: P,
                        followupSource: O
                    },
                    t = JSON.stringify([e, E.type, N, G]);
                if (k.current.has(t) || (k.current.add(t), null != G && "conversation_followup_suggestions_v1" === O && (0, d.b)(T, {
                        data: {
                            ...E,
                            interaction_type: "shown",
                            followup_source: O,
                            followup_presentation_mode: E.presentation_mode
                        },
                        surface: "content_reference",
                        conversationId: A,
                        messageId: S
                    }), (0, o.a)(T, a.d, e)), null != h) {
                    let e = JSON.stringify(["onboarding", A, S, h]);
                    if (!k.current.has(e)) {
                        k.current.add(e);
                        try {
                            (0, o.a)(T, l.b, h)
                        } catch {}
                    }
                }
            }, w[23] = R, w[24] = A, w[25] = G, w[26] = O, w[27] = S, w[28] = N, w[29] = h, w[30] = E, w[31] = T, w[32] = P, w[33] = b) : b = w[33];
            let L = (0, s.useEffectEvent)(b);
            return w[34] !== L || w[35] !== j ? (x = () => {
                j && L()
            }, w[34] = L, w[35] = j, w[36] = x) : x = w[36], w[37] !== R || w[38] !== A || w[39] !== G || w[40] !== O || w[41] !== S || w[42] !== N || w[43] !== M || w[44] !== E.type || w[45] !== j || w[46] !== P ? (y = [R, S, A, j, P, O, G, M, E.type, N], w[37] = R, w[38] = A, w[39] = G, w[40] = O, w[41] = S, w[42] = N, w[43] = M, w[44] = E.type, w[45] = j, w[46] = P, w[47] = y) : y = w[47], (0, s.useEffect)(x, y), null
        }

        function g(e) {
            let t = (0, m.d)(e)?.url;
            return "string" == typeof t && t ? [t] : []
        }
        n.d(t, {
            a: () => p
        })
    }),
    Cv: (function(e, t, n) {
        var r = n("Vn"),
            a = n("cC"),
            l = n("nd"),
            i = n("L0h"),
            s = n("dVr"),
            o = n("av");

        function c(e) {
            if (!e.includes(":codex-resource")) return e;
            let t = [...(0, a.a)(e, {
                    extensions: [(0, s.a)({
                        singleTilde: !1
                    }), (0, i.a)()],
                    mdastExtensions: [(0, l.a)(), (0, r.a)()]
                }).children],
                n = [],
                c = 0;
            for (; t.length > 0;) {
                let r = t.shift(),
                    a = r?.position?.start.offset;
                if (r?.type === "textDirective" && "codex-resource" === r.name && null != a && a >= c) {
                    let t = (0, o.b)(e, a);
                    null != t && (n.push(e.slice(c, a)), c = t.endIndex)
                } else null != r && "children" in r && t.unshift(...r.children)
            }
            return n.push(e.slice(c)), n.join("")
        }
        n.d(t, {
            a: () => c
        })
    }),
    ADj: (function(e, t, n) {
        var r = n("tG"),
            a = n("c1H"),
            l = n("e0C"),
            i = n("r3Z"),
            s = n("Au"),
            o = n("Wc4"),
            c = n("AS"),
            u = n("yG"),
            d = n("Mr"),
            f = n("xo");
        let m = c.object({
                type: c.string().optional().catch(void 0),
                start_idx: c.number().int().nonnegative().optional().catch(void 0)
            }),
            p = c.object({
                source: c.string().optional().catch(void 0),
                event_name: c.string().optional().catch(void 0),
                event_data: c.record(c.string(), c.unknown()).optional().catch(void 0)
            }),
            g = c.strictObject({
                widget_type: c.string().trim().min(1).optional(),
                widgetType: c.string().trim().min(1).optional(),
                widget_name: c.string().trim().min(1).optional(),
                widgetName: c.string().trim().min(1).optional(),
                content_reference_start_index: c.int32().optional(),
                contentReferenceStartIndex: c.int32().optional(),
                message_id: c.string().trim().min(1).optional(),
                messageId: c.string().trim().min(1).optional(),
                entity_id: c.string().trim().min(1).optional(),
                entityId: c.string().trim().min(1).optional(),
                entity_category: c.string().trim().min(1).optional(),
                entityCategory: c.string().trim().min(1).optional()
            }).refine(e => [
                ["widget_type", "widgetType"],
                ["widget_name", "widgetName"],
                ["content_reference_start_index", "contentReferenceStartIndex"],
                ["message_id", "messageId"],
                ["entity_id", "entityId"],
                ["entity_category", "entityCategory"]
            ].every(t => {
                let [n, r] = t;
                return null == e[n] || null == e[r] || e[n] === e[r]
            })),
            _ = c.strictObject({
                image_index: c.int32().nonnegative(),
                content_reference_type: c.string().trim().min(1).optional(),
                contentReferenceType: c.string().trim().min(1).optional(),
                image_affordance: c.string().trim().min(1).optional(),
                imageAffordance: c.string().trim().min(1).optional(),
                surface_location: c.string().trim().min(1).optional(),
                surfaceLocation: c.string().trim().min(1).optional(),
                parent_context: g.optional(),
                parentContext: g.optional()
            }).refine(e => (null == e.parent_context || null == e.parentContext) && [
                ["content_reference_type", "contentReferenceType"],
                ["image_affordance", "imageAffordance"],
                ["surface_location", "surfaceLocation"]
            ].every(t => {
                let [n, r] = t;
                return null == e[n] || null == e[r] || e[n] === e[r]
            }));

        function h(e, t) {
            let {
                turnContext: n,
                contentReferenceIndex: g,
                image: h,
                imageIndex: b,
                dilPayload: x,
                sourceMessageId: y,
                widgetName: w,
                imageUse: I,
                galleryArrow: E,
                surfaceLocation: C,
                dilV2: T,
                isGenui: k,
                dilVersion: R
            } = t, S = !1;
            if (null == n) return !1;
            try {
                let t = y ?? T?.sourceMessageId ?? (null == g ? void 0 : n.contentReferenceMessageIds?.[g]) ?? n.messageId,
                    A = e.get(d.j, n.conversationId) ?? void 0,
                    j = m.parse(null == g ? {} : n.contentReferences[g] ?? {}),
                    N = T?.contentReferenceStartIndex ?? j.start_idx,
                    P = null == x ? void 0 : p.parse(x),
                    O = null == T ? {
                        ...P?.event_data
                    } : {
                        content_reference_type: P?.source === "image_group" || P?.event_data?.content_reference_type === "image_group" || P?.event_data?.contentReferenceType === "image_group" ? "image_group" : "dil",
                        image_affordance: "image_group_tile",
                        parent_context: {}
                    },
                    G = P?.event_name?.toLowerCase(),
                    M = "chatgpt_image_action" === G;
                if (M) {
                    for (let e of ["url", "content_url", "contentUrl", "original_content_url", "originalContentUrl"]) delete O[e];
                    O.image_index = b
                }
                let L = e => "string" == typeof O[e] && O[e].trim() || void 0,
                    F = null == P ? j.type : L("content_reference_type") ?? L("contentReferenceType") ?? ("image_group" === P.source ? "image_group" : void 0),
                    W = null == P ? null : e.get(d.J, n.conversationId),
                    D = null == t ? void 0 : W?.[t]?.message,
                    U = (0, s.o)(D?.metadata?.model_dil),
                    H = null != T || (k ?? (null != P && ((0, s.o)(U?.dil)?.type != null || D?.metadata?.model_dil_v2 != null))),
                    z = null != T && null != E,
                    B = null == P || z || M || (null != T || "image_group" === F) && !["chatgpt_entity_action", "chatgpt_widget_action"].includes(G ?? ""),
                    $ = !1;
                if (B) {
                    let a = null == P ? n.imageEngagementContext : void 0,
                        i = a?.parentContext;
                    "image_group" !== F && (i = "image_v2" === F && null != i ? {
                        entityCategory: i.entityCategory
                    } : void 0);
                    let u = M ? L("image_affordance") ?? L("imageAffordance") : "image_group_tile",
                        d = c.enum(l.f).safeParse(`CHATGPT_IMAGE_AFFORDANCE_${u?.toUpperCase().replace(/^CHATGPT_IMAGE_AFFORDANCE_/,"")}`),
                        m = c.enum(l.b).safeParse(`CHATGPT_ENGAGEMENT_SURFACE_LOCATION_${(L("surface_location")??L("surfaceLocation"))?.toUpperCase().replace(/^CHATGPT_ENGAGEMENT_SURFACE_LOCATION_/,"")}`);
                    if (M) {
                        let e = _.safeParse(O);
                        $ = P?.event_name === "chatgpt_image_action" && e.success && (null == e.data.image_affordance && null == e.data.imageAffordance || d.success) && (null == e.data.surface_location && null == e.data.surfaceLocation || m.success)
                    }
                    let p = null;
                    "2.0" === R ? p = {} : M ? p = (0, s.o)(O.parent_context ?? O.parentContext) : null != P && (p = {});
                    let g = (e, t) => {
                            let n = p?.[e] ?? p?.[t];
                            return "string" == typeof n && n.trim() || void 0
                        },
                        y = p?.content_reference_start_index ?? p?.contentReferenceStartIndex ?? N,
                        I = null == x ? null : (0, s.o)(Array.isArray(x.images) ? x.images[b] : null),
                        k = null == P ? h.destinationUrl : (0, o.a)(I?.url),
                        j = null == P ? h.src : (0, o.a)(I?.content_url),
                        G = d.success ? d.data : l.f.CHATGPT_IMAGE_AFFORDANCE_UNSPECIFIED;
                    "next" === E ? G = l.f.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_NEXT_BUTTON : "previous" === E && (G = l.f.CHATGPT_IMAGE_AFFORDANCE_IMAGE_GALLERY_PREVIOUS_BUTTON);
                    let W = n.shouldBlockExternalEgress,
                        D = C ?? ("image_group" === F ? a?.surfaceLocation : void 0) ?? l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE;
                    M && m.success && (D = m.data), z && (D = l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_FULLSCREEN_IMAGE_GALLERY), (0, f.c)(e, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        surfaceLocation: D,
                        imageAffordance: G,
                        imageIndex: (0, r.b)(b),
                        conversationId: A,
                        messageId: t,
                        assistantMessageId: T?.assistantMessageId ?? (D === l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR ? a?.parentContext.messageId : void 0) ?? n.messageId ?? t,
                        ...null != T || "2.0" === R ? {
                            turnOrdinal: (0, f.a)(e, n.conversationId, T?.assistantMessageId ?? t)
                        } : {},
                        contentReferenceStartIndex: null == N ? void 0 : (0, r.b)(N),
                        contentReferenceType: M ? L("content_reference_type") ?? L("contentReferenceType") ?? "dil" : F,
                        isGenui: H,
                        parentContext: null == p ? i : {
                            widgetType: g("widget_type", "widgetType") ?? (H ? "model_written_dil" : void 0),
                            widgetName: T?.widgetName ?? g("widget_name", "widgetName") ?? (H && "2.0" !== R ? void 0 : w ?? void 0),
                            contentReferenceStartIndex: null == y ? void 0 : (0, r.b)(Number(y)),
                            messageId: g("message_id", "messageId") ?? t,
                            entityId: g("entity_id", "entityId"),
                            entityCategory: g("entity_category", "entityCategory")
                        },
                        url: W ? void 0 : v(k),
                        contentUrl: W ? void 0 : v(j),
                        originalContentUrl: W ? void 0 : v(h.originalSrc),
                        tags: []
                    }), S = !0
                }
                if (null != E) return S;
                if (null != P) {
                    if (null != T) return M && (0, u.a)(e, i.a, {
                        eventName: "chatgpt_image_action",
                        eventData: JSON.stringify(O)
                    }), S;
                    if (null == P.event_name || "" === P.event_name.trim()) return S;
                    return $ || (0, u.a)(e, i.a, {
                        eventName: P.event_name,
                        eventData: JSON.stringify(O)
                    }), S
                }
                if (null == t || t.startsWith("WEB:")) return S;
                let Y = null == I ? h.isProxied : "deepResearch" === I;
                (0, u.a)(e, a.d, {
                    legacyStatsigEventName: "search_content_reference_clicked",
                    eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_SEARCH_REFERENCE_CLICKED",
                    conversationId: A,
                    messageId: t,
                    contentReferenceType: "image_v2",
                    imageUse: Y ? "CHATGPT_CONTENT_REFERENCE_IMAGE_USE_DEEP_RESEARCH" : "CHATGPT_CONTENT_REFERENCE_IMAGE_USE_LEGACY_CAROUSEL"
                })
            } catch {}
            return S
        }

        function v(e) {
            if (null != e) try {
                let {
                    protocol: t
                } = new URL(e);
                return "http:" === t || "https:" === t ? e : void 0
            } catch {
                return
            }
        }
        n.d(t, {
            a: () => h
        })
    }),
    BWE: (function(e, t, n) {
        var r = n("Qg");
        let a = (0, r.e)({
                id: "chatgptConversations.summaryPanel.sources.title",
                defaultMessage: "Sources",
                description: "Title for the sources section in the ChatGPT summary panel"
            }),
            l = (0, r.f)({
                links: {
                    id: "chatgptConversations.sources.category.links",
                    defaultMessage: "Links",
                    description: "Heading and accessible list label for suggested navigation links in the ChatGPT Sources panel"
                },
                more: {
                    id: "chatgptConversations.sources.category.more",
                    defaultMessage: "More",
                    description: "Heading and accessible list label for additional search results that were not cited in the ChatGPT answer, below its cited sources"
                },
                apps: {
                    id: "chatgptConversations.sources.category.apps",
                    defaultMessage: "Apps",
                    description: "Heading and accessible list label for connected app sources in a ChatGPT Sources side panel"
                },
                files: {
                    id: "chatgptConversations.sources.category.files",
                    defaultMessage: "Files",
                    description: "Heading and accessible list label for file sources in a ChatGPT Sources side panel"
                },
                memory: {
                    id: "chatgptConversations.sources.category.memory",
                    defaultMessage: "Memory",
                    description: "Heading and accessible list label for remembered information and past conversations in a ChatGPT Sources side panel"
                },
                skills: {
                    id: "chatgptConversations.sources.category.skills",
                    defaultMessage: "Skills",
                    description: "Heading and accessible list label for skill sources in a ChatGPT Sources side panel"
                },
                web: {
                    id: "chatgptConversations.sources.category.web",
                    defaultMessage: "Web",
                    description: "Heading and accessible list label for cited websites in a ChatGPT Sources side panel"
                }
            }),
            i = (0, r.f)({
                plugin: {
                    id: "chatgptConversations.sources.skill.attribution.plugin",
                    defaultMessage: "Plugin",
                    description: "Attribution label for a ChatGPT Sources row backed by a plugin skill"
                },
                skill: {
                    id: "chatgptConversations.sources.skill.attribution.skill",
                    defaultMessage: "Skill",
                    description: "Attribution label for a ChatGPT Sources row backed by a skill"
                }
            }),
            s = (0, r.f)({
                userInstructions: {
                    id: "chatgptConversations.sources.memory.attribution.userInstructions",
                    defaultMessage: "Custom instructions",
                    description: "Attribution label for a ChatGPT Sources row backed by the user's account custom instructions"
                },
                userMemory: {
                    id: "chatgptConversations.sources.memory.attribution.userMemory",
                    defaultMessage: "Saved memory",
                    description: "Attribution label for a ChatGPT Sources row backed by a saved account memory"
                },
                generalMemory: {
                    id: "chatgptConversations.sources.memory.attribution.generalMemory",
                    defaultMessage: "Memory",
                    description: "Attribution label for a ChatGPT Sources row backed by general account memory context"
                }
            });
        n.d(t, {}, {
            a: s,
            b: i,
            c: l,
            d: a
        })
    }),
    CMl: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            l = n("Xnl"),
            i = n("zd"),
            s = n("Wf"),
            o = n("oy"),
            c = n("Qg"),
            u = n("ygO"),
            d = n("nhm"),
            f = n("nzx"),
            m = n("zLI"),
            p = n("SGs"),
            g = n("OW");
        let _ = [
            ["helpful", "reasonHelpful"],
            ["wrong_or_confusing", "reasonConfusing"],
            ["broken", "reasonBroken"],
            ["not_relevant_to_question", "reasonNotRelevant"],
            ["data_is_incorrect", "reasonIncorrectInformation"]
        ];

        function h(e) {
            let t, n, c, h, x, y, w, I, E, C, T, k, R, S, A, j, N, P, O = (0, a.c)(41),
                {
                    isVisible: G,
                    onOpen: M,
                    onSubmit: L
                } = e,
                F = (0, l.z)(g.a),
                W = (0, s.a)(),
                D = (0, i.useId)(),
                [U, H] = (0, i.useState)("");
            O[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], O[0] = t) : t = O[0];
            let [z, B] = (0, i.useState)(t), [$, Y] = (0, i.useState)(!1);
            if (!(void 0 === G || G)) return null;
            O[1] !== M ? (n = e => {
                Y(e), e && M()
            }, O[1] = M, O[2] = n) : n = O[2], O[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, r.jsx)(f.e, {
                asChild: !0,
                children: (0, r.jsx)(u.a, {
                    color: "ghostSecondary",
                    "data-turn-action-width": "content",
                    size: "compact",
                    type: "button",
                    children: (0, r.jsx)(o.a, {
                        id: "chatgpt.modelWrittenDil.feedback.button.open",
                        defaultMessage: "Give feedback",
                        description: "Short button label at the far end of the action row below a completed ChatGPT response containing a generated visual answer. Opens a popover where the user can send feedback about that visual."
                    })
                })
            }), O[3] = c) : c = O[3], O[4] !== U || O[5] !== L || O[6] !== z || O[7] !== F ? (h = e => {
                e.preventDefault();
                let t = U.trim();
                "" !== t && (L({
                    feedbackText: t,
                    feedbackReasons: z
                }), H(""), B([]), Y(!1), F.get(p.h).success((0, r.jsx)(o.a, {
                    id: "chatgpt.modelWrittenDil.feedback.toast.success",
                    defaultMessage: "Your feedback has been submitted",
                    description: "Success toast shown immediately after a user sends written feedback about a generated visual answer in a ChatGPT response. The submission is best effort and does not interrupt the conversation."
                })))
            }, O[4] = U, O[5] = L, O[6] = z, O[7] = F, O[8] = h) : h = O[8], O[9] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, r.jsx)(f.d, {
                children: (0, r.jsx)(o.a, {
                    id: "chatgpt.modelWrittenDil.feedback.popover.title",
                    defaultMessage: "Help our team improve visual answers in ChatGPT",
                    description: "Heading in the feedback popover opened from a completed ChatGPT response containing a generated visual answer. Invites the user to help improve those visual answers."
                })
            }), O[9] = x) : x = O[9], O[10] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, r.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, r.jsx)(o.a, {
                    id: "chatgpt.modelWrittenDil.feedback.popover.description",
                    defaultMessage: "Tell us what’s working and what’s not. The more specific the feedback, the better.",
                    description: "Two-sentence instruction in the generated visual answer feedback popover. Encourages the ChatGPT user to provide specific positive or negative feedback."
                })
            }), O[10] = y) : y = O[10], O[11] !== z ? (w = _.map(e => {
                let [t, n] = e;
                return (0, r.jsxs)("label", {
                    className: "relative flex cursor-interaction items-center justify-between gap-2",
                    children: [(0, r.jsx)("span", {
                        children: (0, r.jsx)(o.a, {
                            ...b[n]
                        })
                    }), (0, r.jsx)(d.a, {
                        checked: z.includes(t),
                        onCheckedChange: e => {
                            B(n => e ? [...n, t] : n.filter(e => e !== t))
                        }
                    })]
                }, t)
            }), O[11] = z, O[12] = w) : w = O[12], O[13] !== w ? (I = (0, r.jsx)("fieldset", {
                className: "flex flex-col gap-2 text-sm",
                children: w
            }), O[13] = w, O[14] = I) : I = O[14], O[15] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, r.jsx)(o.a, {
                id: "chatgpt.modelWrittenDil.feedback.textarea.label",
                defaultMessage: "Additional feedback",
                description: "Screen-reader label for the required multiline text field in the generated visual answer feedback popover. The user describes what worked or what should improve."
            }), O[15] = E) : E = O[15], O[16] !== D ? (C = (0, r.jsx)("label", {
                className: "sr-only",
                htmlFor: D,
                children: E
            }), O[16] = D, O[17] = C) : C = O[17], O[18] !== W || O[19] !== z.length ? (T = W.formatMessage(z.length > 0 ? b.placeholderWithReasons : b.placeholderDefault), O[18] = W, O[19] = z.length, O[20] = T) : T = O[20], O[21] === Symbol.for("react.memo_cache_sentinel") ? (k = e => H(e.target.value), O[21] = k) : k = O[21], O[22] !== U || O[23] !== D || O[24] !== T ? (R = (0, r.jsx)(m.c, {
                id: D,
                autoFocus: !0,
                autoResize: !0,
                maxLength: 1600,
                name: "model-written-dil-feedback",
                placeholder: T,
                rows: 3,
                value: U,
                variant: "feedback",
                onChange: k
            }), O[22] = U, O[23] = D, O[24] = T, O[25] = R) : R = O[25], O[26] !== U ? (S = U.trim(), O[26] = U, O[27] = S) : S = O[27];
            let K = "" === S;
            return O[28] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, r.jsx)(o.a, {
                id: "chatgpt.modelWrittenDil.feedback.button.submit",
                defaultMessage: "Send feedback",
                description: "Short button label in the generated visual answer feedback popover. Submits the required written feedback and any selected reason checkboxes."
            }), O[28] = A) : A = O[28], O[29] !== K ? (j = (0, r.jsx)(u.a, {
                className: "self-center",
                color: "primary",
                disabled: K,
                radius: "full",
                size: "menuRow",
                type: "submit",
                children: A
            }), O[29] = K, O[30] = j) : j = O[30], O[31] !== C || O[32] !== R || O[33] !== j || O[34] !== h || O[35] !== I ? (N = (0, r.jsx)(f.c, {
                className: "select-none",
                align: "end",
                side: "bottom",
                variant: "menu",
                onEscapeKeyDown: v,
                children: (0, r.jsxs)("form", {
                    className: "flex flex-col gap-3 p-2",
                    onSubmit: h,
                    children: [x, y, I, C, R, j]
                })
            }), O[31] = C, O[32] = R, O[33] = j, O[34] = h, O[35] = I, O[36] = N) : N = O[36], O[37] !== $ || O[38] !== N || O[39] !== n ? (P = (0, r.jsxs)(f.a, {
                open: $,
                onOpenChange: n,
                children: [c, N]
            }), O[37] = $, O[38] = N, O[39] = n, O[40] = P) : P = O[40], P
        }

        function v(e) {
            return e.stopPropagation()
        }
        let b = (0, c.f)({
            reasonHelpful: {
                id: "chatgpt.modelWrittenDil.feedback.reason.helpful",
                defaultMessage: "This visual is helpful",
                description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when the visual shown above the response action row is useful."
            },
            reasonConfusing: {
                id: "chatgpt.modelWrittenDil.feedback.reason.confusing",
                defaultMessage: "This visual is confusing",
                description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when the visual is difficult to understand or unclear, even if its information may be correct."
            },
            reasonBroken: {
                id: "chatgpt.modelWrittenDil.feedback.reason.broken",
                defaultMessage: "This visual is broken",
                description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when the visual has a rendering, display, or interaction problem rather than incorrect information."
            },
            reasonNotRelevant: {
                id: "chatgpt.modelWrittenDil.feedback.reason.notRelevant",
                defaultMessage: "This visual is not relevant",
                description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when the visual does not relate to the question they asked."
            },
            reasonIncorrectInformation: {
                id: "chatgpt.modelWrittenDil.feedback.reason.incorrectInformation",
                defaultMessage: "This visual has incorrect information",
                description: "Checkbox label in the generated visual answer feedback popover. The ChatGPT user selects it when content such as numbers, labels, or facts in the visual is wrong, not when the visual is merely broken."
            },
            placeholderWithReasons: {
                id: "chatgpt.modelWrittenDil.feedback.textarea.placeholder.withReasons",
                defaultMessage: "Tell our team why…",
                description: "Placeholder in the required multiline text field after the ChatGPT user selects at least one generated visual answer feedback reason. Asks for details supporting the selected reasons."
            },
            placeholderDefault: {
                id: "chatgpt.modelWrittenDil.feedback.textarea.placeholder.default",
                defaultMessage: "What would you like us to know?",
                description: "Placeholder in the required multiline text field before the ChatGPT user selects a generated visual answer feedback reason. Invites any feedback about the visual."
            }
        });
        n.d(t, {
            a: () => h
        })
    }),
    ciV: (function(e, t, n) {
        var r = n("Xnl"),
            a = n("aM"),
            l = n("Csl"),
            i = n("OF"),
            s = n("OW"),
            o = n("tSE"),
            c = n("UR"),
            u = n("vw"),
            d = n("g2");
        let f = (0, r.c)(s.a, e => {
                let {
                    get: t
                } = e;
                return t(d.p).data?.trainingAllowed === !0
            }),
            m = (0, r.c)(s.a, e => {
                let {
                    get: t
                } = e, {
                    authLoading: n,
                    accountInfoLoading: r,
                    accountInfoError: a,
                    authMethod: l,
                    plan: s
                } = t(i.e);
                return n || a || r || "chatgpt" !== l || null == s ? null : (0, c.f)(s) || (0, u.b)(s)
            }),
            p = (0, r.c)(s.a, e => {
                let {
                    get: t
                } = e, n = t(l.l);
                return !n.authLoading && !n.accountLoading && (null == n.authMethod || "chatgpt" === n.authMethod && null != n.plan && (!(0, u.b)(n.plan) || (0, a.di)(n.email ?? null)))
            }),
            g = (0, r.v)(o.a, e => null),
            _ = (0, r.v)(o.a, e => "unknown"),
            h = (0, r.u)(o.a, !1);
        n.d(t, {}, {
            a: p,
            b: h,
            c: m,
            d: f,
            e: g,
            f: _
        })
    }),
    DW1: (function(e, t, n) {
        var r = n("tG"),
            a = n("UgP"),
            l = n("AS"),
            i = n("yG"),
            s = n("Mr");
        let o = l.object({
                interaction_type: l.enum(["shown", "clicked"]),
                followup_kind: l.enum(["regular", "capability", "voice"]),
                followup_position: l.number().int().min(1).max(3),
                followup_promotion_id: l.string().optional().catch(void 0),
                followup_source: l.string().optional().catch(void 0),
                followup_presentation_mode: l.enum(["bottom_list", "coherent_paragraph"]).optional().catch(void 0)
            }),
            c = new Set(["create_editable_writing_artifact", "search_web_with_primary_citations", "generate_new_image"]),
            u = {
                regular: "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_REGULAR",
                capability: "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_CAPABILITY",
                voice: "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_KIND_VOICE"
            };

        function d(e, t) {
            let {
                data: n,
                surface: l,
                conversationId: d,
                messageId: f
            } = t, m = o.safeParse(n);
            if (!m.success) return !1;
            let p = m.data,
                g = p.followup_promotion_id;
            try {
                return (0, i.a)(e, a.b, {
                    interactionType: "shown" === p.interaction_type ? "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_INTERACTION_TYPE_SHOWN" : "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_INTERACTION_TYPE_CLICKED",
                    suggestionKind: u[p.followup_kind],
                    position: (0, r.b)(p.followup_position),
                    promotionId: "capability" === p.followup_kind && null != g && c.has(g) ? g : void 0,
                    source: p.followup_source,
                    presentationMode: p.followup_presentation_mode,
                    surface: "content_reference" === l ? "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_SURFACE_CONTENT_REFERENCE" : "CHATGPT_CONVERSATION_FOLLOWUP_SUGGESTION_SURFACE_ACTION_LIST",
                    conversationId: e.get(s.j, d ?? null) ?? void 0,
                    messageId: f
                }), !0
            } catch {
                return !1
            }
        }
        n.d(t, {
            b: () => d
        }, {
            a: "ChatgptConversationFollowupSuggestionInteraction"
        })
    }),
    pd1: (function(e, t, n) {
        var r = n("AS");
        let a = r.object({
            renderer: r.enum(["dil", "followup_a", "inline_followup_a"]),
            level: r.enum(["l1", "l2"]),
            use_case: r.enum(["learn", "look_something_up", "write", "create_an_image", "try_voice", "study", "how_to", "wellness", "get_advice", "personalize", "tasks"]),
            action_id: r.union([r.enum(["l1.create_an_image", "l1.write", "l1.look_something_up", "l1.learn", "l1.get_advice", "l1.wellness", "interactive.create_an_image", "interactive.try_voice", "interactive.write_something", "interactive.look_something_up", "interactive.study", "interactive.how_to", "interactive.personalize", "interactive.tasks", "l2.learn.explain_simply", "l2.learn.study_plan", "l2.learn.quiz", "l2.look_something_up.explain", "l2.look_something_up.current_information", "l2.look_something_up.summarize_source", "l2.write.outline", "l2.write.improve", "l2.write.draft", "l2.create_an_image.ideas", "l2.create_an_image.style", "l2.create_an_image.description", "l2.wellness.healthy_routine", "l2.wellness.manage_stress", "l2.wellness.sleep_habits", "l2.get_advice.weigh_options", "l2.get_advice.think_through", "l2.get_advice.action_plan", "l2.tasks.product_comparison", "l2.tasks.budget_plan", "l2.tasks.job_matches", "l2.tasks.concert_alerts", "l2.tasks.coupon_finder", "l2.tasks.research_updates", "l2.tasks.weekend_long_read", "l2.tasks.follow_a_topic", "l2.tasks.daily_language_lesson", "l2.tasks.daily_brief", "l2.tasks.home_upkeep", "l2.tasks.outfit_ideas", "l2.tasks.weather_check", "l2.tasks.birthday_plans", "l2.tasks.weekend_ideas", "l2.tasks.weekly_meal_plan", "l2.tasks.weekly_workout_plan", "l2.tasks.sale_monitor", "l2.tasks.book_recommendations", "l2.tasks.company_mentions", "l2.tasks.industry_trends", "l2.tasks.competitor_launches", "l2.tasks.watch_recommendations"]), r.string().max(96).regex(/^l2\.tasks\.[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}(?:~[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12})?$/)]),
            source: r.enum(["conversational_onboarding_use_case_pills", "conversational_onboarding_interactive_image", "conversational_onboarding_interactive_voice", "conversational_onboarding_interactive_write", "conversational_onboarding_interactive_lookup", "conversational_onboarding_interactive_study", "conversational_onboarding_interactive_how_to", "conversational_onboarding_interactive_personalize", "conversational_onboarding_interactive_tasks", "conversational_onboarding_task_starter", "conversational_onboarding_use_case_l2", "conversational_onboarding_use_case_l2_web_search"])
        });
        n.d(t, {}, {
            a: a
        })
    }),
    xZE: (function(e, t, n) {
        var r = n("zd"),
            a = n("ZU2"),
            l = n("UI"),
            i = n("Bb"),
            s = n("JC"),
            o = n("Yc"),
            c = n("Qxe"),
            u = n("g2");
        let d = (0, i.a)(async () => {
            let {
                ChatGptSourcesFloatingPanel: e
            } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(753405), n.e(585419), n.e(877700), n.e(636463), n.e(669998), n.e(859973), n.e(293453), n.e(909395), n.e(146419), n.e(729227), n.e(503607), n.e(274769), n.e(777545)]).then(n.bind(n, "WZc"));
            return e
        }, {
            errorFallback: (0, r.createElement)(l.b, {
                resetError: () => window.location.reload(),
                stayOnPage: !0
            })
        });

        function f(e, t, n) {
            let l = e.get(u.n),
                i = e.get(s.d)?.content,
                f = (0, r.isValidElement)(i) && i.type === d && i.props.sourceAccountId === l;
            if (f && null != t.turn && i.props.turn?.conversationId === t.turn.conversationId && i.props.turn.messageId === t.turn.messageId && i.props.turn.turnId === t.turn.turnId) return void i.props.onClose();
            let m = (0, s.b)(e, {
                label: n,
                content: (0, r.createElement)(d, {
                    ...t,
                    sourceAccountId: l,
                    title: n,
                    onClose: () => m()
                }),
                onClose: () => {}
            });
            f || (0, c.b)(e, {
                tabId: o.a.SOURCES
            }, e.get(a.j.tabIds$).length, "manual")
        }
        n.d(t, {
            a: () => f
        })
    }),
    fYL: (function(e, t, n) {
        let r = (0, n("zd").createContext)(null);
        n.d(t, {}, {
            a: r
        })
    }),
    TwL: (function(e, t, n) {
        var r = n("A"),
            a = n("Qo"),
            l = n("rm");

        function i(e) {
            let t, n, i, s = (0, a.c)(10),
                {
                    children: o,
                    getItems: c,
                    useGifPlaybackMenu: u
                } = e,
                d = void 0 !== u && u;
            return s[0] !== o || s[1] !== d ? (t = d ? null : (0, r.jsx)(r.Fragment, {
                children: o
            }), s[0] = o, s[1] = d, s[2] = t) : t = s[2], s[3] !== o || s[4] !== c || s[5] !== d ? (n = d ? (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(l.a, {
                    getItems: c,
                    children: o
                })
            }) : null, s[3] = o, s[4] = c, s[5] = d, s[6] = n) : n = s[6], s[7] !== t || s[8] !== n ? (i = (0, r.jsxs)(r.Fragment, {
                children: [t, n]
            }), s[7] = t, s[8] = n, s[9] = i) : i = s[9], i
        }
        n.d(t, {
            a: () => i
        })
    })
};