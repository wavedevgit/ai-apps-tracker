export const __rspack_esm_ids = [970033];
export const __webpack_modules__ = {
    Xvoy: (function(e, t, n) {
        var a = n("iTtm"),
            i = n("v7qY"),
            r = n("OWtl");
        let l = (0, a.h)(r.a, () => !1, e => {
            let {
                set: t
            } = e, n = () => (0, i.flushSync)(() => t(!0)), a = () => t(!1);
            return window.addEventListener("beforeprint", n), window.addEventListener("afterprint", a), () => {
                window.removeEventListener("beforeprint", n), window.removeEventListener("afterprint", a)
            }
        });
        n.d(t, {}, {
            a: l
        })
    }),
    kFSN: (function(e, t, n) {
        n.d(t, {
            a: () => Z
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("SIRb"),
            l = n("DNYL"),
            s = n("iTtm"),
            o = n("xnQm"),
            d = n("zd8w"),
            c = n("jqIZ"),
            m = n("B8Ul"),
            u = n("Cslg"),
            f = n("Gdjn"),
            h = n("ILTo"),
            p = n("YWcr"),
            b = n("DAFh"),
            x = n("EULo"),
            y = n("MX6A"),
            g = n("rS3J"),
            v = n("WB4T"),
            w = n("dKZq"),
            I = n("HOLv"),
            j = n("bf6R"),
            T = n("Bbed"),
            S = n("oSX4"),
            k = n("FqCE"),
            M = n("WE3h"),
            E = n("SCxD"),
            L = n("TxRk"),
            F = n("e2wX"),
            N = n("k7G6"),
            C = n("tSEg"),
            _ = n("lBzi"),
            A = n("Kmy6"),
            z = n("M0Ez"),
            B = n("ZfbS"),
            P = n("drbS"),
            U = n("flj6"),
            R = n("pdPj"),
            $ = n("OWtl"),
            H = n("Kwur"),
            G = n("ZM7C"),
            O = n("gJdM"),
            V = n("iHfE"),
            W = n("OWHf"),
            q = n("t5e6");
        let K = (0, s.q)($.a, (e, t) => {
            let {
                get: n
            } = t, a = n(G.a);
            return {
                enabled: null != a && n(R.a),
                queryKey: ["chatgpt-reference-image-message-thumbnail", a, n(G.b), e],
                queryFn: async t => {
                    let {
                        signal: n
                    } = t;
                    return (await H.Request.safeGet("/files/library/reference-images/{reference_image_id}/thumbnail_url", {
                        additionalHeaders: null == a ? void 0 : (0, W.a)(a),
                        parameters: {
                            path: {
                                reference_image_id: e
                            }
                        },
                        signal: n
                    })).thumbnail_url
                },
                staleTime: 27e5,
                gcTime: 27e5,
                retry: !1
            }
        });

        function Y(e) {
            let t, n, r, l, o = (0, i.c)(13),
                {
                    mention: d,
                    shouldBlockExternalEgress: c
                } = e,
                m = (0, s.z)(R.a);
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                enabled: !1
            }, o[0] = t) : t = o[0];
            let {
                data: u
            } = (0, s.z)(V.c, t), f = m && !c ? u?.find(e => e.id === d.referenceImageId) : void 0, h = !c && null == f;
            o[1] !== h ? (n = {
                enabled: h
            }, o[1] = h, o[2] = n) : n = o[2];
            let {
                data: p
            } = (0, s.x)(K, d.referenceImageId, n), b = L.a, x = (0, g.d)({
                href: (0, O.b)({
                    referenceImageId: d.referenceImageId,
                    assetPointer: f?.asset_pointer,
                    thumbnailAssetPointer: f?.thumbnail_asset_pointer
                }),
                label: d.name
            });
            return o[3] !== m || o[4] !== f || o[5] !== c || o[6] !== p ? (r = m && !c && (null != f || null != p) ? (0, a.jsx)("span", {
                children: (0, a.jsx)(q.a, {
                    alt: "",
                    assetPointer: f?.asset_pointer,
                    composerThumbnailUrl: f?.thumbnail_url ?? p,
                    fallbackUrl: f?.thumbnail_url ?? p,
                    name: null,
                    size: "response",
                    thumbnailAssetPointer: f?.thumbnail_asset_pointer,
                    useComposerThumbnailCache: !0
                })
            }) : (0, a.jsx)(j.$f, {}), o[3] = m, o[4] = f, o[5] = c, o[6] = p, o[7] = r) : r = o[7], o[8] !== b || o[9] !== d.name || o[10] !== x || o[11] !== r ? (l = (0, a.jsx)(b, {
                fontWeight: "inherit",
                dataAttributes: x,
                icon: r,
                iconSizing: "authored",
                layout: "inline-flow",
                tone: "composer-reference",
                children: d.name
            }), o[8] = b, o[9] = d.name, o[10] = x, o[11] = r, o[12] = l) : l = o[12], l
        }
        var D = n("yF0p");
        let Q = (0, T.a)(r.h, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        name: t
                    } = e;
                    return (0, a.jsx)(L.a, {
                        icon: (0, h.b)(),
                        children: t
                    })
                }
            }),
            X = (0, s.t)("ChatGptUserMessageContentScope", {
                key: e => e.tabKeyPrefix,
                parent: C.a,
                retain: {
                    max: 0
                }
            });

        function Z(e) {
            let t, n, r, l, o, c, m, u, f, h, p = (0, i.c)(47),
                {
                    ref: b,
                    conversationId: x,
                    hostId: y,
                    mentions: g,
                    skillMentions: I,
                    folderMentions: j,
                    referenceImageMentions: T,
                    message: S,
                    messageId: k,
                    renderMarkdown: M,
                    shouldBlockExternalEgress: E,
                    systemHintMentions: L,
                    tabKeyPrefix: F
                } = e;
            if (p[0] !== g || p[1] !== I || p[2] !== j || p[3] !== T || p[4] !== S) {
                let e = void 0 === I ? [] : I,
                    n = void 0 === j ? [] : j,
                    a = void 0 === T ? [] : T;
                t = [...g, ...e, ...n, ...a].sort(et), p[0] = g, p[1] = I, p[2] = j, p[3] = T, p[4] = S, p[5] = t
            } else t = p[5];
            let N = t,
                C = (0, d.useId)();
            if (p[6] !== C) {
                let e;
                p[8] === Symbol.for("react.memo_cache_sentinel") ? (e = /[^a-z0-9-]/gi, p[8] = e) : e = p[8], n = C.replace(e, ""), p[6] = C, p[7] = n
            } else n = p[7];
            let A = `chatgpt-file-mention-${n}`;
            p[9] !== E || p[10] !== S ? (r = !E && S.includes("app://"), p[9] = E, p[10] = S, p[11] = r) : r = p[11];
            let z = r;
            p[12] !== z ? (l = {
                enabled: z
            }, p[12] = z, p[13] = l) : l = p[13];
            let {
                data: B
            } = (0, s.z)(_.m, l);
            if (p[14] !== z || p[15] !== L || p[16] !== B || p[17] !== S) {
                if (o = [], z && null != B)
                    for (let e of (0, P.g)(S)) {
                        let t = B[e.path];
                        null != t && o.push({
                            id: t.system_hint,
                            label: t.name,
                            startIndex: e.startIndex,
                            endIndex: e.endIndex,
                            promptLink: {
                                href: e.path,
                                label: e.label
                            },
                            systemHint: {
                                name: t.name,
                                logo: t.logo
                            }
                        })
                    }
                o.push(...L), p[14] = z, p[15] = L, p[16] = B, p[17] = S, p[18] = o
            } else o = p[18];
            p[19] !== A ? (c = {
                [A]: ei
            }, p[19] = A, p[20] = c) : c = p[20];
            let U = c;
            p[21] !== N || p[22] !== o || p[23] !== S ? (m = e => {
                if (e.length === S.length) return S;
                let t = [...N, ...o].reduce(ee, e.length);
                return S.slice(0, t)
            }, p[21] = N, p[22] = o, p[23] = S, p[24] = m) : m = p[24];
            let R = m;
            return p[25] !== x || p[26] !== y || p[27] !== N || p[28] !== k || p[29] !== o || p[30] !== E || p[31] !== F || p[32] !== S ? (u = {
                conversationId: x,
                hostId: y,
                message: S,
                messageId: k,
                mentions: N,
                shouldBlockExternalEgress: E,
                systemHintMentions: o,
                tabKeyPrefix: F
            }, p[25] = x, p[26] = y, p[27] = N, p[28] = k, p[29] = o, p[30] = E, p[31] = F, p[32] = S, p[33] = u) : u = p[33], p[34] !== A || p[35] !== U || p[36] !== R || p[37] !== y || p[38] !== N || p[39] !== b || p[40] !== M || p[41] !== o || p[42] !== S ? (f = M ? (0, a.jsx)(v.a, {
                ref: b,
                cwd: null,
                directives: U,
                hostId: y,
                hasSerializedParagraphs: !0,
                renderMath: !1,
                serializeVisibleText: e => es(R(e), N, o).map(e => "text" === e.kind ? e.text : `:${A}{kind="${e.kind}" index="${String(e.index)}"}`).join(""),
                text: S
            }) : (0, a.jsx)(w.a, {
                text: S,
                textTone: "user-message",
                children: e => {
                    let t = R(e),
                        n = es(t, N, o);
                    return (0, a.jsx)("div", {
                        ref: n.some(J) ? b : void 0,
                        className: "text-size-chat whitespace-pre-wrap",
                        dir: "auto",
                        children: n.map((e, n) => "text" === e.kind ? (0, a.jsx)(en, {
                            hostId: y,
                            sourceStartIndex: e.startIndex,
                            sourceText: t,
                            text: e.text
                        }, n) : (0, a.jsx)(ei, {
                            name: A,
                            attributes: {
                                kind: e.kind,
                                index: String(e.index)
                            }
                        }, n))
                    })
                }
            }), p[34] = A, p[35] = U, p[36] = R, p[37] = y, p[38] = N, p[39] = b, p[40] = M, p[41] = o, p[42] = S, p[43] = f) : f = p[43], p[44] !== u || p[45] !== f ? (h = (0, a.jsx)(s.b, {
                scope: X,
                value: u,
                children: f
            }), p[44] = u, p[45] = f, p[46] = h) : h = p[46], h
        }

        function J(e) {
            return "text" !== e.kind
        }

        function ee(e, t) {
            return t.startIndex < e && t.endIndex > e ? Math.min(e, t.startIndex) : e
        }

        function et(e, t) {
            return e.startIndex - t.startIndex
        }

        function en(e) {
            let t, n = (0, i.c)(11),
                {
                    hostId: r,
                    sourceStartIndex: l,
                    sourceText: o,
                    text: d
                } = e,
                {
                    value: c
                } = (0, s.y)(X);
            if (n[0] !== r || n[1] !== l || n[2] !== o || n[3] !== d || n[4] !== c) {
                let e;
                n[6] !== r || n[7] !== l || n[8] !== o || n[9] !== c ? (e = (e, t) => {
                    if ("text" === e.kind) {
                        let t = [],
                            n = 0;
                        for (let a of (0, x.b)(e.text)) {
                            let i = (0, x.c)(a.path),
                                l = (0, y.c)(a.label);
                            if (ea(e.text, a.start) || "text" === (0, p.x)({
                                    href: i,
                                    label: l
                                })) continue;
                            let s = c.shouldBlockExternalEgress ? l : (0, M.b)({
                                cwd: null,
                                elementKey: String(a.start),
                                hostId: r,
                                href: i,
                                label: l
                            });
                            null != s && (t.push(e.text.slice(n, a.start), s), n = a.end)
                        }
                        return t.push(e.text.slice(n)), t
                    }
                    let n = l + e.startIndex,
                        i = l + e.endIndex,
                        s = "`" === o[n - 1] || "`" === o[i],
                        d = ea(o, n) || ea(o, "fenced-code" === e.kind ? n + e.text.lastIndexOf("```") : i - 1);
                    if ("fenced-code" === e.kind) {
                        let r = /^ {0,3}```(?!`)([^\r\n]*)\r?\n(?:([\s\S]*?)\r?\n)? {0,3}```[ \t]*$/.exec(e.text),
                            l = o.lastIndexOf("\n", n - 1) + 1,
                            c = o.indexOf("\n", i),
                            m = o.slice(i, -1 === c ? o.length : c);
                        return s || d || null == r || !/^ {0,3}$/.test(o.slice(l, n)) || r[1].includes("`") || !/^[ \t]*\r?$/.test(m) ? e.text : (0, a.jsx)(E.a, {
                            content: r[2] ?? "",
                            language: r[1].trim().split(/\s+/, 1)[0] || void 0
                        }, t)
                    }
                    if ("inline-code" === e.kind) return s || d || !/^`[^`\n]+`$/.test(e.text) ? e.text : (0, a.jsx)("code", {
                        children: e.text.slice(1, -1)
                    }, t)
                }, n[6] = r, n[7] = l, n[8] = o, n[9] = c, n[10] = e) : e = n[10], t = (0, P.f)(d).map(e), n[0] = r, n[1] = l, n[2] = o, n[3] = d, n[4] = c, n[5] = t
            } else t = n[5];
            return t
        }

        function ea(e, t) {
            let n = t - 1;
            for (;
                "\\" === e[n];) n -= 1;
            return (t - n) % 2 == 0
        }

        function ei(e) {
            let t, n = (0, i.c)(62),
                {
                    attributes: r
                } = e,
                {
                    value: o
                } = (0, s.y)(X),
                m = (0, s.z)(u.f),
                p = (0, s.z)(u.k);
            n[0] !== r.index ? (t = "string" == typeof r.index ? Number.parseInt(r.index, 10) : 0 / 0, n[0] = r.index, n[1] = t) : t = n[1];
            let b = t;
            if ("system-hint" === r.kind) {
                let e, t = o.systemHintMentions[b];
                return n[2] !== t ? (e = null == t ? null : (0, a.jsx)(er, {
                    mention: t
                }), n[2] = t, n[3] = e) : e = n[3], e
            }
            let x = o.mentions[b];
            if (null == x) return null;
            if ("referenceImageId" in x) {
                let e;
                return n[4] !== x || n[5] !== o.shouldBlockExternalEgress ? (e = (0, a.jsx)(Y, {
                    mention: x,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress
                }), n[4] = x, n[5] = o.shouldBlockExternalEgress, n[6] = e) : e = n[6], e
            }
            if ("directoryId" in x) {
                let e, t, i, r, s = x.displayPath ?? x.name;
                n[14] !== x.directoryId || n[15] !== x.name ? (e = (0, g.d)({
                    href: (0, k.f)(x.directoryId),
                    label: x.name
                }), n[14] = x.directoryId, n[15] = x.name, n[16] = e) : e = n[16];
                let d = e;
                n[17] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(j.vd, {}), n[17] = t) : t = n[17], n[18] !== x.name ? (i = (0, a.jsxs)(a.Fragment, {
                    children: [t, (0, a.jsx)("span", {
                        className: "max-w-64 self-baseline truncate",
                        children: x.name
                    })]
                }), n[18] = x.name, n[19] = i) : i = n[19];
                let m = i;
                return n[20] !== m || n[21] !== d || n[22] !== s || n[23] !== x.directoryId || n[24] !== x.displayPath || n[25] !== o.shouldBlockExternalEgress ? (r = null == x.displayPath || o.shouldBlockExternalEgress ? (0, a.jsx)("span", {
                    ...d,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    title: s,
                    children: m
                }) : (0, a.jsx)(l.a, {
                    content: s,
                    children: (0, a.jsx)(c.f, {
                        ...d,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap underline decoration-dotted underline-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        to: `/library/d/${encodeURIComponent(x.directoryId)}`,
                        "aria-label": s,
                        children: m
                    })
                }), n[20] = m, n[21] = d, n[22] = s, n[23] = x.directoryId, n[24] = x.displayPath, n[25] = o.shouldBlockExternalEgress, n[26] = r) : r = n[26], r
            }
            if ("name" in x) {
                let e, t, i, r, l;
                n[27] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, h.b)(), n[27] = e) : e = n[27], n[28] !== x.name ? (t = (0, a.jsx)(L.a, {
                    icon: e,
                    children: x.name
                }), n[28] = x.name, n[29] = t) : t = n[29];
                let s = t;
                return n[30] !== m || n[31] !== x.id || n[32] !== x.name || n[33] !== p ? (i = (0, g.d)({
                    href: null == m ? void 0 : (0, f.a)(x.id, {
                        accountId: m,
                        userId: p
                    }),
                    label: `@${x.name}`
                }), n[30] = m, n[31] = x.id, n[32] = x.name, n[33] = p, n[34] = i) : i = n[34], n[35] !== s || n[36] !== x.id || n[37] !== x.name || n[38] !== o.hostId || n[39] !== o.shouldBlockExternalEgress ? (r = o.shouldBlockExternalEgress ? s : (0, a.jsx)(d.Suspense, {
                    fallback: s,
                    children: (0, a.jsx)(Q, {
                        id: x.id,
                        name: x.name,
                        hostId: o.hostId
                    })
                }), n[35] = s, n[36] = x.id, n[37] = x.name, n[38] = o.hostId, n[39] = o.shouldBlockExternalEgress, n[40] = r) : r = n[40], n[41] !== i || n[42] !== r ? (l = (0, a.jsx)("span", {
                    ...i,
                    children: r
                }), n[41] = i, n[42] = r, n[43] = l) : l = n[43], l
            }
            if ("attachment" in x) {
                let e, t, i, {
                        attachment: r
                    } = x,
                    l = r.mountedLibraryFileId ?? r.libraryFileId;
                n[44] !== r.fileId || n[45] !== r.libraryArtifactType || n[46] !== r.mimeType || n[47] !== r.mountedLibraryMimeType || n[48] !== l || n[49] !== x.endIndex || n[50] !== x.startIndex || n[51] !== o.message ? (e = (0, g.d)({
                    href: null == l ? void 0 : (0, k.c)({
                        fileId: r.fileId ?? "",
                        libraryFileId: l,
                        libraryArtifactType: r.libraryArtifactType ?? "",
                        mimeType: r.mountedLibraryMimeType ?? r.mimeType ?? ""
                    }),
                    label: o.message.slice(x.startIndex, x.endIndex).replace(/^@/, "")
                }), n[44] = r.fileId, n[45] = r.libraryArtifactType, n[46] = r.mimeType, n[47] = r.mountedLibraryMimeType, n[48] = l, n[49] = x.endIndex, n[50] = x.startIndex, n[51] = o.message, n[52] = e) : e = n[52];
                let s = `${o.tabKeyPrefix}:${String(b)}:${r.name}`;
                return n[53] !== r || n[54] !== s || n[55] !== o.conversationId || n[56] !== o.messageId || n[57] !== o.shouldBlockExternalEgress ? (t = (0, a.jsx)(U.a, {
                    attachment: r,
                    conversationId: o.conversationId,
                    messageId: o.messageId,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress,
                    tabKey: s,
                    variant: "inline"
                }), n[53] = r, n[54] = s, n[55] = o.conversationId, n[56] = o.messageId, n[57] = o.shouldBlockExternalEgress, n[58] = t) : t = n[58], n[59] !== e || n[60] !== t ? (i = (0, a.jsx)("span", {
                    ...e,
                    children: t
                }), n[59] = e, n[60] = t, n[61] = i) : i = n[61], i
            }
            return null
        }

        function er(e) {
            let t, n = (0, i.c)(8),
                {
                    mention: r
                } = e;
            if (null != (0, p.z)(r.id)) {
                let e, t;
                return n[0] !== r.id || n[1] !== r.label ? (e = (0, g.d)({
                    href: r.id,
                    label: r.label
                }), n[0] = r.id, n[1] = r.label, n[2] = e) : e = n[2], n[3] !== r.label || n[4] !== e ? (t = (0, a.jsx)(L.a, {
                    dataAttributes: e,
                    icon: S.a,
                    layout: "selection-pill",
                    title: r.label,
                    children: r.label
                }), n[3] = r.label, n[4] = e, n[5] = t) : t = n[5], t
            }
            return n[6] !== r ? (t = (0, a.jsx)(el, {
                mention: r
            }), n[6] = r, n[7] = t) : t = n[7], t
        }

        function el(e) {
            let t, n, r, l, d, u, f, h, x, y, v, w, j, T, S = (0, i.c)(47),
                {
                    mention: k
                } = e,
                {
                    value: M
                } = (0, s.y)(X),
                E = !M.shouldBlockExternalEgress && null == k.systemHint;
            S[0] !== E ? (t = {
                enabled: E
            }, S[0] = E, S[1] = t) : t = S[1];
            let {
                data: C
            } = (0, s.z)(_.m, t);
            S[2] !== k.id || S[3] !== M.shouldBlockExternalEgress ? (l = k.id.replace(/^(?:connector|plugin):/u, ""), n = (0, z.g)(l), r = !M.shouldBlockExternalEgress && /^(?:connector|plugin):.+/u.test(k.id) && null == n, d = k.id.startsWith("plugin:") && (0, o.Rh)(l) ? l : null, S[2] = k.id, S[3] = M.shouldBlockExternalEgress, S[4] = n, S[5] = r, S[6] = l, S[7] = d) : (n = S[4], r = S[5], l = S[6], d = S[7]);
            let P = d;
            S[8] === Symbol.for("react.memo_cache_sentinel") ? (u = {
                enabled: !1
            }, S[8] = u) : u = S[8];
            let U = (0, s.x)(B.b, l, u),
                R = r ? P ?? U : null;
            S[9] !== k.systemHint || S[10] !== l || S[11] !== C || S[12] !== M.shouldBlockExternalEgress ? (f = M.shouldBlockExternalEgress ? void 0 : k.systemHint ?? C?.[(0, p.c)(l)], S[9] = k.systemHint, S[10] = l, S[11] = C, S[12] = M.shouldBlockExternalEgress, S[13] = f) : f = S[13];
            let $ = f;
            S[14] !== $?.name || S[15] !== l ? (h = (0, m.c)(l) ?? (0, m.c)($?.name), S[14] = $?.name, S[15] = l, S[16] = h) : h = S[16];
            let H = h,
                G = n ?? H?.icon;
            if (null == G && H?.iconUrl) {
                let e;
                S[17] !== H.iconUrl ? (e = (0, a.jsx)("img", {
                    alt: "",
                    src: H.iconUrl
                }), S[17] = H.iconUrl, S[18] = e) : e = S[18], G = e
            }
            if (null == G) {
                let e;
                S[19] !== $ ? (e = $?.logo ? (0, a.jsx)(A.a, {
                    logo: $.logo
                }) : (0, a.jsx)(I.a, {
                    asset: D.a
                }), S[19] = $, S[20] = e) : e = S[20], G = e
            }
            if (S[21] !== k.id || S[22] !== k.label || S[23] !== k.promptLink || S[24] !== l) {
                let e = b.d.shape.systemHint.safeParse(k.id);
                x = L.a, y = g.d, v = k.promptLink ?? {
                    href: e.success ? (0, b.g)(e.data) : (0, p.c)(l),
                    label: e.success ? k.label : `@${k.label}`
                }, S[21] = k.id, S[22] = k.label, S[23] = k.promptLink, S[24] = l, S[25] = x, S[26] = y, S[27] = v
            } else x = S[25], y = S[26], v = S[27];
            S[28] !== y || S[29] !== v ? (w = y(v), S[28] = y, S[29] = v, S[30] = w) : w = S[30];
            let O = H?.name ?? $?.name ?? k.label;
            S[31] !== x || S[32] !== r || S[33] !== G || S[34] !== O || S[35] !== w ? (j = (0, a.jsx)(x, {
                dataAttributes: w,
                icon: G,
                interactive: r,
                layout: "selection-pill",
                children: O
            }), S[31] = x, S[32] = r, S[33] = G, S[34] = O, S[35] = w, S[36] = j) : j = S[36];
            let V = j;
            if (!r) return V;
            if (null == R && k.id.startsWith("plugin:") && null != (0, o.Ng)(l)) {
                let e, t;
                return S[37] !== l || S[38] !== M.hostId ? (e = (0, N.a)({
                    pluginId: l,
                    hostId: M.hostId
                }), S[37] = l, S[38] = M.hostId, S[39] = e) : e = S[39], S[40] !== V || S[41] !== e ? (t = (0, a.jsx)(c.f, {
                    className: "inline cursor-interaction bg-transparent p-0 text-start align-baseline",
                    to: e,
                    children: V
                }), S[40] = V, S[41] = e, S[42] = t) : t = S[42], t
            }
            return S[43] !== V || S[44] !== R || S[45] !== l ? (T = (0, a.jsx)(F.a, {
                appId: l,
                pluginId: R,
                children: V
            }), S[43] = V, S[44] = R, S[45] = l, S[46] = T) : T = S[46], T
        }

        function es(e, t, n) {
            let a = [...t.map((e, t) => ({
                    ...e,
                    index: t,
                    kind: "inline"
                })), ...n.map((e, t) => ({
                    ...e,
                    index: t,
                    kind: "system-hint"
                }))].sort((e, t) => e.startIndex - t.startIndex || t.endIndex - e.endIndex),
                i = [],
                r = 0;
            for (let t of a) t.startIndex < r || t.endIndex > e.length || (i.push({
                kind: "text",
                startIndex: r,
                text: e.slice(r, t.startIndex)
            }, {
                kind: t.kind,
                index: t.index
            }), r = t.endIndex);
            return i.push({
                kind: "text",
                startIndex: r,
                text: e.slice(r)
            }), i
        }
    }),
    flj6: (function(e, t, n) {
        n.d(t, {
            a: () => X,
            b: () => D
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("Rzcw"),
            l = n("iTtm"),
            s = n("zd8w"),
            o = n("oyxz"),
            d = n("Cslg"),
            c = n("rS3J"),
            m = n("PAiv"),
            u = n("Bbed"),
            f = n("qRWe"),
            h = n("RNul"),
            p = n("SGsN"),
            b = n("R1rp"),
            x = n("FqCE"),
            y = n("UxLW"),
            g = n("ulpJ"),
            v = n("L9GI"),
            w = n("MExO"),
            I = n("tSEg"),
            j = n("hZax"),
            T = n("WFY2"),
            S = n("ug4w"),
            k = n("YJm0"),
            M = n("DrWu"),
            E = n("dQRk"),
            L = n("rxj0"),
            F = n("Ul98"),
            N = n("f2PP"),
            C = n("DNYL"),
            _ = n("AX0B"),
            A = n("T0Rc"),
            z = n("Wf1j"),
            B = n("ygO2"),
            P = n("HOLv"),
            U = n("rvFo"),
            R = n("zsxQ"),
            $ = n("vldH"),
            H = n("h13t"),
            G = n("J0NG");

        function O(e) {
            let t, n, r, s, d, c, m, u, f, x, y, g, v, w, j, S, k, M, F, O, q, K, Y = (0, i.c)(86),
                {
                    attachment: D,
                    conversationId: Q,
                    tabKey: X,
                    target: Z
                } = e,
                J = (0, l.y)(I.a),
                ee = (0, z.a)();
            Y[0] !== Q || Y[1] !== J ? (t = J.get(E.R, Q), Y[0] = Q, Y[1] = J, Y[2] = t) : t = Y[2];
            let et = t;
            Y[3] !== Q || Y[4] !== J ? (n = J.get(E.Y, Q), Y[3] = Q, Y[4] = J, Y[5] = n) : n = Y[5];
            let en = n;
            Y[6] !== Q || Y[7] !== X ? (r = ["chatgpt-user-message-csv-preview", Q, X], Y[6] = Q, Y[7] = X, Y[8] = r) : r = Y[8], Y[9] !== Q || Y[10] !== et || Y[11] !== en || Y[12] !== Z ? (s = async e => {
                let {
                    signal: t
                } = e, n = await (0, $.fetchChatGptFileBlob)({
                    conversationId: Q,
                    gizmoId: et,
                    sharedConversationId: en,
                    signal: t,
                    target: Z
                });
                if (n.size > 1e6) throw Error("ChatGPT CSV attachment exceeds the preview size limit");
                let a = await n.text();
                return t.throwIfAborted(),
                    function(e) {
                        let t = 1,
                            n = 1,
                            a = 1,
                            i = !1;
                        for (let r = 0; r < e.length; r += 1) {
                            let l = e[r];
                            if ('"' === l) {
                                i && '"' === e[r + 1] ? r += 1 : i = !i;
                                continue
                            }
                            if (!i && ("," === l ? (t += 1, a += 1) : ("\n" === l || "\r" === l) && ("\r" === l && "\n" === e[r + 1] && (r += 1), t = 1, n += 1, a += 1), t > 100 || n > 1e4 || a > 1e5)) throw Error("ChatGPT CSV attachment exceeds preview shape limits")
                        }
                    }(a), (0, _.planCsvImport)(a).values
            }, Y[9] = Q, Y[10] = et, Y[11] = en, Y[12] = Z, Y[13] = s) : s = Y[13], Y[14] !== r || Y[15] !== s ? (d = {
                queryKey: r,
                queryFn: s,
                retry: !1,
                staleTime: U.b.FIVE_MINUTES
            }, Y[14] = r, Y[15] = s, Y[16] = d) : d = Y[16];
            let {
                data: ea,
                isError: ei,
                isLoading: er,
                refetch: el
            } = (0, A.a)(d);
            Y[17] !== D.name ? (c = (D.name.split("/").at(-1) ?? "").replace(/[-_]/gu, " ").split(".")[0] ?? "", Y[17] = D.name, Y[18] = c) : c = Y[18];
            let es = c;
            Y[19] !== D.name || Y[20] !== ee ? (m = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.download",
                defaultMessage: "Download {filename}",
                description: "Accessible label for a compact icon button in an inline CSV attachment preview. Activating the button downloads the named file. {filename} is the original user-visible filename and may be truncated elsewhere in the preview."
            }, {
                filename: D.name
            }), Y[19] = D.name, Y[20] = ee, Y[21] = m) : m = Y[21];
            let eo = m;
            Y[22] !== D.name || Y[23] !== ee ? (u = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.open",
                defaultMessage: "Open {filename}",
                description: "Accessible label for a compact icon button in an inline CSV attachment preview. Activating the button opens the named file in the full file preview. {filename} is the original user-visible filename and may be truncated elsewhere in the preview."
            }, {
                filename: D.name
            }), Y[22] = D.name, Y[23] = ee, Y[24] = u) : u = Y[24];
            let ed = u;
            Y[25] !== D.name || Y[26] !== Q || Y[27] !== et || Y[28] !== J || Y[29] !== en || Y[30] !== Z ? (f = () => {
                (0, $.a)({
                    conversationId: Q,
                    fileName: D.name,
                    gizmoId: et,
                    sharedConversationId: en,
                    target: Z
                }).catch(e => {
                    T.a.error("ChatGPT CSV attachment failed to download", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), J.get(p.f).danger((0, a.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.downloadFailed",
                        defaultMessage: "Couldn't download this file. Try again",
                        description: "Error shown when an attached CSV file cannot be downloaded from its inline preview"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgpt.userMessage.csvPreview.downloadFailed"
                        }
                    })
                })
            }, Y[25] = D.name, Y[26] = Q, Y[27] = et, Y[28] = J, Y[29] = en, Y[30] = Z, Y[31] = f) : f = Y[31];
            let ec = f;
            Y[32] !== D.isSharedLibraryFile || Y[33] !== D.mimeType || Y[34] !== D.name || Y[35] !== Q || Y[36] !== et || Y[37] !== J || Y[38] !== en || Y[39] !== X || Y[40] !== Z ? (x = () => {
                (0, N.openChatGptFile)(J, {
                    isAccessBlocked: e => (0, L.i)(e, Q) || !0 === D.isSharedLibraryFile && e.get(b.d),
                    browserPreview: (0, R.a)(D.name, D.mimeType),
                    conversationId: Q,
                    fileName: D.name,
                    mimeType: D.mimeType,
                    gizmoId: et,
                    sharedConversationId: en,
                    tabKey: X,
                    target: Z
                }).catch(V)
            }, Y[32] = D.isSharedLibraryFile, Y[33] = D.mimeType, Y[34] = D.name, Y[35] = Q, Y[36] = et, Y[37] = J, Y[38] = en, Y[39] = X, Y[40] = Z, Y[41] = x) : x = Y[41];
            let em = x;
            if (er) {
                let e, t;
                Y[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(h.a, {
                    "aria-hidden": !0
                }), Y[42] = e) : e = Y[42], Y[43] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsxs)("div", {
                    className: "flex h-full items-center justify-center",
                    children: [e, (0, a.jsx)("span", {
                        className: "sr-only",
                        children: (0, a.jsx)(o.a, {
                            id: "chatgpt.userMessage.csvPreview.loading",
                            defaultMessage: "Loading table preview",
                            description: "Screen-reader status announced while an inline preview of an attached CSV file is loading in a ChatGPT conversation"
                        })
                    })]
                }), Y[43] = t) : t = Y[43], y = t
            } else if (ei) {
                let e, t, n, i;
                Y[44] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.error",
                        defaultMessage: "Unable to display table preview",
                        description: "Error message shown inside an attached CSV file preview when the table could not be downloaded or parsed"
                    })
                }), Y[44] = e) : e = Y[44], Y[45] !== el ? (t = () => void el(), Y[45] = el, Y[46] = t) : t = Y[46], Y[47] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(o.a, {
                    id: "chatgpt.userMessage.csvPreview.retry",
                    defaultMessage: "Try again",
                    description: "Button label for retrying a failed inline CSV attachment preview in a ChatGPT conversation"
                }), Y[47] = n) : n = Y[47], Y[48] !== t ? (i = (0, a.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-3 px-4 text-center",
                    role: "alert",
                    children: [e, (0, a.jsx)(B.a, {
                        color: "secondary",
                        onClick: t,
                        children: n
                    })]
                }), Y[48] = t, Y[49] = i) : i = Y[49], y = i
            } else if (null == ea || 0 === ea.length) {
                let e;
                Y[50] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                    className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondary",
                    children: (0, a.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.empty",
                        defaultMessage: "This CSV file is empty",
                        description: "Empty state shown inside an inline CSV attachment preview when the file contains no rows"
                    })
                }), Y[50] = e) : e = Y[50], y = e
            } else {
                let e, t, n;
                Y[51] !== ea[0] ? (e = ea[0] ?? [], Y[51] = ea[0], Y[52] = e) : e = Y[52], Y[53] !== ea ? (t = ea.slice(1), Y[53] = ea, Y[54] = t) : t = Y[54], Y[55] !== e || Y[56] !== t ? (n = (0, a.jsx)(W, {
                    columnNames: e,
                    rows: t
                }), Y[55] = e, Y[56] = t, Y[57] = n) : n = Y[57], y = n
            }
            return Y[58] !== es ? (g = (0, a.jsx)("span", {
                className: "truncate font-semibold text-default capitalize",
                children: es
            }), Y[58] = es, Y[59] = g) : g = Y[59], Y[60] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(P.a, {
                asset: H.a
            }), Y[60] = v) : v = Y[60], Y[61] !== eo || Y[62] !== ec ? (w = (0, a.jsx)(B.a, {
                "aria-label": eo,
                color: "ghost",
                onClick: ec,
                size: "iconCircleSm",
                children: v
            }), Y[61] = eo, Y[62] = ec, Y[63] = w) : w = Y[63], Y[64] !== eo || Y[65] !== w ? (j = (0, a.jsx)(C.a, {
                content: eo,
                children: w
            }), Y[64] = eo, Y[65] = w, Y[66] = j) : j = Y[66], Y[67] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, a.jsx)(P.a, {
                asset: G.a
            }), Y[67] = S) : S = Y[67], Y[68] !== em || Y[69] !== ed ? (k = (0, a.jsx)(B.a, {
                "aria-label": ed,
                color: "ghost",
                onClick: em,
                size: "iconCircleSm",
                children: S
            }), Y[68] = em, Y[69] = ed, Y[70] = k) : k = Y[70], Y[71] !== ed || Y[72] !== k ? (M = (0, a.jsx)(C.a, {
                content: ed,
                children: k
            }), Y[71] = ed, Y[72] = k, Y[73] = M) : M = Y[73], Y[74] !== j || Y[75] !== M ? (F = (0, a.jsxs)("span", {
                className: "flex items-center gap-2",
                children: [j, M]
            }), Y[74] = j, Y[75] = M, Y[76] = F) : F = Y[76], Y[77] !== g || Y[78] !== F ? (O = (0, a.jsxs)("header", {
                className: "flex h-12 items-center justify-between gap-2 px-4 select-none",
                children: [g, F]
            }), Y[77] = g, Y[78] = F, Y[79] = O) : O = Y[79], Y[80] !== y ? (q = (0, a.jsx)("div", {
                className: "h-72 border-t border-default",
                children: y
            }), Y[80] = y, Y[81] = q) : q = Y[81], Y[82] !== D.name || Y[83] !== O || Y[84] !== q ? (K = (0, a.jsxs)("section", {
                className: "w-full overflow-hidden rounded-2xl border border-default bg-surface",
                "aria-label": D.name,
                children: [O, q]
            }), Y[82] = D.name, Y[83] = O, Y[84] = q, Y[85] = K) : K = Y[85], K
        }

        function V(e) {
            T.a.error("ChatGPT CSV attachment failed to open", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function W(e) {
            let t, n, r, l, o, d, c, m, u, f, h, p, b = (0, i.c)(40),
                {
                    columnNames: x,
                    rows: y
                } = e,
                [g, v] = (0, s.useState)(0),
                w = Math.max(0, Math.floor(g / 40) - 5),
                I = Math.min(y.length, w + 18);
            if (b[0] !== x || b[1] !== w || b[2] !== I || b[3] !== y) {
                let e, i, s, u, f = y.slice(w, I),
                    h = 40 * w;
                t = (y.length - I) * 40, b[12] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                    v(e.currentTarget.scrollTop)
                }, b[12] = e) : e = b[12], c = "h-full overflow-auto", m = e, l = "min-w-full border-separate border-spacing-0 text-start text-sm", o = y.length + 1, b[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)("th", {
                    className: "sticky start-0 top-0 z-20 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                    "aria-hidden": !0
                }), b[13] = i) : i = b[13], b[14] !== x ? (s = x.map(q), b[14] = x, b[15] = s) : s = b[15], b[16] !== s ? (d = (0, a.jsx)("thead", {
                    children: (0, a.jsxs)("tr", {
                        "aria-rowindex": 1,
                        children: [i, s]
                    })
                }), b[16] = s, b[17] = d) : d = b[17], b[18] !== x.length || b[19] !== h ? (n = h > 0 ? (0, a.jsx)("tr", {
                    "aria-hidden": !0,
                    children: (0, a.jsx)("td", {
                        colSpan: x.length + 1,
                        style: {
                            height: h
                        }
                    })
                }) : null, b[18] = x.length, b[19] = h, b[20] = n) : n = b[20], b[21] !== x || b[22] !== w ? (u = (e, t) => {
                    let n = w + t;
                    return (0, a.jsxs)("tr", {
                        "aria-rowindex": n + 2,
                        children: [(0, a.jsx)("th", {
                            className: "sticky start-0 z-10 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                            scope: "row",
                            children: n + 1
                        }), x.map((t, n) => {
                            let i = e[n] ?? "";
                            return (0, a.jsx)("td", {
                                className: "h-10 min-w-32 border-e border-b border-default px-3 text-default last:border-e-0",
                                title: i,
                                children: (0, a.jsx)("span", {
                                    className: "block max-w-80 truncate",
                                    children: i
                                })
                            }, n)
                        })]
                    }, n)
                }, b[21] = x, b[22] = w, b[23] = u) : u = b[23], r = f.map(u), b[0] = x, b[1] = w, b[2] = I, b[3] = y, b[4] = t, b[5] = n, b[6] = r, b[7] = l, b[8] = o, b[9] = d, b[10] = c, b[11] = m
            } else t = b[4], n = b[5], r = b[6], l = b[7], o = b[8], d = b[9], c = b[10], m = b[11];
            return b[24] !== t || b[25] !== x.length ? (u = t > 0 ? (0, a.jsx)("tr", {
                "aria-hidden": !0,
                children: (0, a.jsx)("td", {
                    colSpan: x.length + 1,
                    style: {
                        height: t
                    }
                })
            }) : null, b[24] = t, b[25] = x.length, b[26] = u) : u = b[26], b[27] !== n || b[28] !== r || b[29] !== u ? (f = (0, a.jsxs)("tbody", {
                children: [n, r, u]
            }), b[27] = n, b[28] = r, b[29] = u, b[30] = f) : f = b[30], b[31] !== l || b[32] !== o || b[33] !== d || b[34] !== f ? (h = (0, a.jsxs)("table", {
                className: l,
                "aria-rowcount": o,
                children: [d, f]
            }), b[31] = l, b[32] = o, b[33] = d, b[34] = f, b[35] = h) : h = b[35], b[36] !== h || b[37] !== c || b[38] !== m ? (p = (0, a.jsx)("div", {
                className: c,
                onScroll: m,
                children: h
            }), b[36] = h, b[37] = c, b[38] = m, b[39] = p) : p = b[39], p
        }

        function q(e, t) {
            return (0, a.jsx)("th", {
                className: "sticky top-0 z-10 h-10 min-w-32 border-e border-b border-default bg-surface-secondary px-3 text-start font-semibold text-default last:border-e-0",
                scope: "col",
                title: e,
                children: (0, a.jsx)("span", {
                    className: "block max-w-80 truncate",
                    children: e
                })
            }, `${e}-${String(t)}`)
        }

        function K(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e.isSharedLibraryFile && !t) return null;
            if (null != e.mountedLibraryFileId) return {
                fileName: e.name,
                mimeType: e.mountedLibraryMimeType ?? e.mimeType ?? void 0,
                mountedLibraryFileId: e.mountedLibraryFileId,
                sourceUrl: e.sourceUrl,
                type: "mounted-library"
            };
            let n = (0, $.i)(e.downloadUrl);
            return null != n ? {
                downloadUrl: n,
                fileId: e.fileId ?? void 0,
                isSharedLibraryFile: e.isSharedLibraryFile,
                libraryFileId: e.libraryFileId ?? void 0,
                type: "download-url"
            } : null == e.fileId ? null : {
                fileId: e.fileId,
                libraryFileId: e.libraryFileId ?? void 0,
                type: "file-id"
            }
        }
        let Y = (0, u.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(882629)]).then(n.bind(n, "vT9Z"))).ChatGptUserMessageAudioAttachment);

        function D(e) {
            let t, n, r, s, o = (0, i.c)(15),
                {
                    attachments: c,
                    conversationId: m,
                    messageId: u,
                    shouldBlockExternalEgress: f,
                    tabKeyPrefix: h
                } = e,
                {
                    accountId: p
                } = (0, l.z)(d.m),
                x = (0, l.z)(b.c),
                {
                    data: y
                } = (0, l.x)(k.a, p);
            o[0] !== y?.features || o[1] !== f ? (t = !f && y?.features?.includes("graphite") === !0, o[0] = y?.features, o[1] = f, o[2] = t) : t = o[2];
            let g = t;
            if (o[3] !== c || o[4] !== m || o[5] !== u || o[6] !== x || o[7] !== f || o[8] !== g || o[9] !== h) {
                let e = g ? c.flatMap((e, t) => {
                        let n = K(e, x);
                        return e.name.trim().toLowerCase().endsWith(".csv") && null != e.sizeBytes && e.sizeBytes <= 1e6 && null != n ? [{
                            attachment: e,
                            attachmentIndex: t,
                            target: n
                        }] : []
                    }) : [],
                    t = new Set(e.map(Q)),
                    i = c.flatMap((e, n) => t.has(n) ? [] : [{
                        attachment: e,
                        attachmentIndex: n
                    }]);
                n = i.length > 0 ? (0, a.jsx)("div", {
                    className: "flex w-full flex-wrap justify-end gap-2 self-end md:w-4/5",
                    children: i.map(e => {
                        let {
                            attachment: t,
                            attachmentIndex: n
                        } = e;
                        return (0, a.jsx)(X, {
                            attachment: t,
                            conversationId: m,
                            messageId: u,
                            shouldBlockExternalEgress: f,
                            tabKey: `${h}:${String(n)}:${t.name}`
                        }, `${t.name}-${String(n)}`)
                    })
                }) : null, r = e.length > 0 ? (0, a.jsx)("div", {
                    className: "flex w-full flex-col gap-2 self-end md:w-4/5",
                    children: e.map(e => {
                        let {
                            attachment: t,
                            attachmentIndex: n,
                            target: i
                        } = e;
                        return (0, a.jsx)(O, {
                            attachment: t,
                            conversationId: m,
                            tabKey: `${h}:${String(n)}:${t.name}`,
                            target: i
                        }, `${t.name}-${String(n)}`)
                    })
                }) : null, o[3] = c, o[4] = m, o[5] = u, o[6] = x, o[7] = f, o[8] = g, o[9] = h, o[10] = n, o[11] = r
            } else n = o[10], r = o[11];
            return o[12] !== n || o[13] !== r ? (s = (0, a.jsxs)(a.Fragment, {
                children: [n, r]
            }), o[12] = n, o[13] = r, o[14] = s) : s = o[14], s
        }

        function Q(e) {
            let {
                attachmentIndex: t
            } = e;
            return t
        }

        function X(e) {
            let t, n, d, u, k, C, _, A, z, B, P, U, R, $, H, G, O, V, W, q, D, Q, X, Z, J = (0, i.c)(137),
                {
                    attachment: ee,
                    conversationId: et,
                    messageId: en,
                    shouldBlockExternalEgress: ea,
                    tabKey: ei,
                    variant: er
                } = e,
                el = void 0 === er ? "card" : er,
                es = (0, l.y)(I.a),
                eo = (0, j.k)(),
                ed = (0, l.x)(E.x, et),
                [ec, em] = (0, s.useState)(!1),
                eu = (0, s.useRef)(null);
            J[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => eu.current?.abort(), n = [], J[0] = t, J[1] = n) : (t = J[0], n = J[1]), (0, s.useEffect)(t, n);
            let ef = (0, l.z)(b.d);
            if (J[2] !== ee || J[3] !== ed || J[4] !== ef || J[5] !== ea || J[6] !== eo || J[7] !== el) {
                let e;
                A = K(ee, !ef), u = !ea && null != A, k = "card" === el && "tpp" !== ed && "flora" !== ed && !ea && null != A && (0, S.d)({
                    fileName: ee.name,
                    mimeType: ee.mountedLibraryMimeType ?? ee.mimeType
                }), d = eo.checkGate("2666007232", {
                    disableExposureLog: !k
                });
                let t = ee.mountedLibraryFileId ?? ee.libraryFileId;
                J[14] !== t ? (e = (0, y.a)(t), J[14] = t, J[15] = e) : e = J[15], C = e;
                let n = u ? (0, F.a)(A, ee.name, ee.mimeType) : null;
                _ = null == n ? null : (0, w.d)(n)?.sourceUrl, null != n && ee.isSourceReference && (_ = ee.sourceUrl ?? _), J[2] = ee, J[3] = ed, J[4] = ef, J[5] = ea, J[6] = eo, J[7] = el, J[8] = d, J[9] = u, J[10] = k, J[11] = C, J[12] = _, J[13] = A
            } else d = J[8], u = J[9], k = J[10], C = J[11], _ = J[12], A = J[13];
            J[16] !== ee.isSharedLibraryFile || J[17] !== ee.isSourceReference || J[18] !== ee.libraryArtifactType || J[19] !== ee.mimeType || J[20] !== ee.mountedLibraryFileId || J[21] !== ee.mountedLibraryMimeType || J[22] !== ee.name || J[23] !== u || J[24] !== et || J[25] !== ec || J[26] !== en || J[27] !== es || J[28] !== _ || J[29] !== ei || J[30] !== A ? (z = u ? e => {
                if (ee.isSourceReference && null != _ && null != ee.mountedLibraryFileId) return void(0, v.b)(es, {
                    href: _,
                    title: ee.name,
                    libraryFileId: ee.mountedLibraryFileId,
                    mimeType: ee.mimeType
                }, e, et);
                if (ec) return;
                let t = new AbortController;
                eu.current = t, em(!0), (0, N.openChatGptFile)(es, {
                    connectedFileIntent: "open",
                    interaction: e,
                    isAccessBlocked: e => (0, L.i)(e, et) || !0 === ee.isSharedLibraryFile && e.get(b.d),
                    browserPreview: !0,
                    conversationId: et,
                    messageId: en,
                    fileName: ee.name,
                    libraryArtifactType: ee.libraryArtifactType,
                    gizmoId: es.get(E.R, et),
                    sharedConversationId: es.get(E.Y, et),
                    mimeType: ee.mountedLibraryMimeType ?? ee.mimeType,
                    signal: t.signal,
                    tabKey: ei,
                    target: A
                }).catch(e => {
                    t.signal.aborted || ee.isSharedLibraryFile && es.get(b.d) || (T.a.warning("ChatGPT user attachment failed to open", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), es.get(p.f).danger((0, a.jsx)(o.a, {
                        id: "file-tile.download-failed",
                        defaultMessage: "Failed to download file. Please try again later.",
                        description: "Error toast when opening or downloading a file from a ChatGPT message fails"
                    }), {
                        errorAnalytics: {
                            toastId: "unknown"
                        }
                    }))
                }).finally(() => {
                    eu.current = null, em(!1)
                })
            } : void 0, J[16] = ee.isSharedLibraryFile, J[17] = ee.isSourceReference, J[18] = ee.libraryArtifactType, J[19] = ee.mimeType, J[20] = ee.mountedLibraryFileId, J[21] = ee.mountedLibraryMimeType, J[22] = ee.name, J[23] = u, J[24] = et, J[25] = ec, J[26] = en, J[27] = es, J[28] = _, J[29] = ei, J[30] = A, J[31] = z) : z = J[31];
            let eh = z;
            J[32] !== eh ? (B = e => {
                null != eh && (e.preventDefault(), eh(e))
            }, J[32] = eh, J[33] = B) : B = J[33];
            let ep = B;
            if (k && d) {
                let e;
                return J[34] !== ee || J[35] !== et || J[36] !== A ? (e = (0, a.jsx)(Y, {
                    attachment: ee,
                    conversationId: et,
                    target: A
                }), J[34] = ee, J[35] = et, J[36] = A, J[37] = e) : e = J[37], e
            }
            if ("inline" === el) {
                let e, t, n, i, r, l, s = ee.mountedLibraryFileId ?? ee.libraryFileId;
                J[38] !== ee.fileId || J[39] !== ee.isSourceReference || J[40] !== ee.libraryArtifactType || J[41] !== ee.mimeType || J[42] !== ee.mountedLibraryMimeType || J[43] !== ee.name || J[44] !== ee.sourceUrl || J[45] !== s ? (e = null == s ? void 0 : (0, c.d)({
                    label: ee.name,
                    href: (0, x.c)({
                        fileId: ee.fileId ?? "",
                        libraryArtifactType: ee.libraryArtifactType ?? "",
                        libraryFileId: s,
                        mimeType: ee.mountedLibraryMimeType ?? ee.mimeType ?? "",
                        ...ee.isSourceReference ? {
                            sourceUrl: ee.sourceUrl,
                            serializeAsUrl: !0
                        } : {}
                    })
                }), J[38] = ee.fileId, J[39] = ee.isSourceReference, J[40] = ee.libraryArtifactType, J[41] = ee.mimeType, J[42] = ee.mountedLibraryMimeType, J[43] = ee.name, J[44] = ee.sourceUrl, J[45] = s, J[46] = e) : e = J[46];
                let o = e;
                J[47] !== ee.libraryArtifactType || J[48] !== ee.libraryFileId || J[49] !== ee.mimeType || J[50] !== ee.mountedLibraryFileId || J[51] !== ee.mountedLibraryMimeType || J[52] !== ee.name || J[53] !== ee.sourceUrl || J[54] !== ec || J[55] !== C ? (t = ec ? (0, a.jsx)(h.a, {
                    as: "span",
                    className: "size-4"
                }) : (0, a.jsx)(g.a, {
                    fileName: ee.name,
                    libraryArtifactType: ee.libraryArtifactType,
                    mimeType: ee.mimeType ?? void 0,
                    provider: C,
                    sourceMimeType: ee.mountedLibraryMimeType ?? void 0,
                    mountedLibraryFileId: ee.mountedLibraryFileId ?? ee.libraryFileId,
                    sourceUrl: ee.sourceUrl ?? void 0,
                    style: "message-inline"
                }), J[47] = ee.libraryArtifactType, J[48] = ee.libraryFileId, J[49] = ee.mimeType, J[50] = ee.mountedLibraryFileId, J[51] = ee.mountedLibraryMimeType, J[52] = ee.name, J[53] = ee.sourceUrl, J[54] = ec, J[55] = C, J[56] = t) : t = J[56], J[57] !== ee ? (n = 0 === (0, M.h)(ee).length ? ee.name : (0, M.g)(ee.name), J[57] = ee, J[58] = n) : n = J[58], J[59] !== n ? (i = (0, a.jsx)("span", {
                    className: "max-w-64 self-baseline truncate",
                    children: n
                }), J[59] = n, J[60] = i) : i = J[60], J[61] !== t || J[62] !== i ? (r = (0, a.jsxs)(a.Fragment, {
                    children: [t, i]
                }), J[61] = t, J[62] = i, J[63] = r) : r = J[63];
                let d = r;
                if (null != _) {
                    let e;
                    return J[64] !== ee.name || J[65] !== d || J[66] !== o || J[67] !== ep || J[68] !== _ ? (e = (0, a.jsx)(m.a, {
                        ...o,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        "aria-label": ee.name,
                        href: _,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ee.name,
                        onUnmodifiedClick: ep,
                        children: d
                    }), J[64] = ee.name, J[65] = d, J[66] = o, J[67] = ep, J[68] = _, J[69] = e) : e = J[69], e
                }
                return J[70] !== ee.name || J[71] !== u || J[72] !== d || J[73] !== o || J[74] !== ec || J[75] !== eh ? (l = u ? (0, a.jsx)("button", {
                    ...o,
                    type: "button",
                    className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                    "aria-busy": ec,
                    "aria-label": ee.name,
                    disabled: ec,
                    onClick: eh,
                    children: d
                }) : (0, a.jsx)("span", {
                    ...o,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    children: d
                }), J[70] = ee.name, J[71] = u, J[72] = d, J[73] = o, J[74] = ec, J[75] = eh, J[76] = l) : l = J[76], l
            }
            if (J[77] !== ee.libraryArtifactType || J[78] !== ee.libraryFileId || J[79] !== ee.mimeType || J[80] !== ee.mountedLibraryFileId || J[81] !== ee.mountedLibraryMimeType || J[82] !== ee.name || J[83] !== ee.sourceUrl || J[84] !== u || J[85] !== ec || J[86] !== eh || J[87] !== ep || J[88] !== C || J[89] !== _) {
                let e = (0, r.f)({
                        fileName: ee.name,
                        mimeType: ee.mimeType ?? void 0
                    }),
                    t = null;
                if (null != _) {
                    let e;
                    J[100] !== ee.name || J[101] !== ep || J[102] !== _ ? (e = (0, a.jsx)(f.b, {
                        "aria-label": ee.name,
                        href: _,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ee.name,
                        onUnmodifiedClick: ep
                    }), J[100] = ee.name, J[101] = ep, J[102] = _, J[103] = e) : e = J[103], t = e
                } else if (u) {
                    let e;
                    J[104] !== ee.name || J[105] !== ec || J[106] !== eh ? (e = (0, a.jsx)(f.b, {
                        "aria-busy": ec,
                        "aria-label": ee.name,
                        disabled: ec,
                        onClick: eh
                    }), J[104] = ee.name, J[105] = ec, J[106] = eh, J[107] = e) : e = J[107], t = e
                }
                R = f.a, H = "span", G = "file-tile", q = "group/resource-card relative", $ = t, U = f.h, V = "pointer-events-none relative z-10", J[108] !== ee.libraryArtifactType || J[109] !== ee.libraryFileId || J[110] !== ee.mimeType || J[111] !== ee.mountedLibraryFileId || J[112] !== ee.mountedLibraryMimeType || J[113] !== ee.name || J[114] !== ee.sourceUrl || J[115] !== ec || J[116] !== C ? (W = (0, a.jsx)("span", {
                    className: "flex size-10 items-center justify-center overflow-hidden rounded-xl",
                    children: ec ? (0, a.jsx)(h.a, {
                        as: "span",
                        className: "size-5"
                    }) : (0, a.jsx)(g.a, {
                        fileName: ee.name,
                        libraryArtifactType: ee.libraryArtifactType,
                        mimeType: ee.mimeType ?? void 0,
                        provider: C,
                        sourceMimeType: ee.mountedLibraryMimeType ?? void 0,
                        mountedLibraryFileId: ee.mountedLibraryFileId ?? ee.libraryFileId,
                        sourceUrl: ee.sourceUrl ?? void 0,
                        style: "message-card"
                    })
                }), J[108] = ee.libraryArtifactType, J[109] = ee.libraryFileId, J[110] = ee.mimeType, J[111] = ee.mountedLibraryFileId, J[112] = ee.mountedLibraryMimeType, J[113] = ee.name, J[114] = ee.sourceUrl, J[115] = ec, J[116] = C, J[117] = W) : W = J[117], P = o.a, O = (0, r.d)(e.category), J[77] = ee.libraryArtifactType, J[78] = ee.libraryFileId, J[79] = ee.mimeType, J[80] = ee.mountedLibraryFileId, J[81] = ee.mountedLibraryMimeType, J[82] = ee.name, J[83] = ee.sourceUrl, J[84] = u, J[85] = ec, J[86] = eh, J[87] = ep, J[88] = C, J[89] = _, J[90] = P, J[91] = U, J[92] = R, J[93] = $, J[94] = H, J[95] = G, J[96] = O, J[97] = V, J[98] = W, J[99] = q
            } else P = J[90], U = J[91], R = J[92], $ = J[93], H = J[94], G = J[95], O = J[96], V = J[97], W = J[98], q = J[99];
            J[118] !== P || J[119] !== O ? (D = (0, a.jsx)(P, {
                ...O
            }), J[118] = P, J[119] = O, J[120] = D) : D = J[120];
            let eb = null == _ ? ee.name : void 0;
            return J[121] !== U || J[122] !== ee.name || J[123] !== D || J[124] !== eb || J[125] !== V || J[126] !== W ? (Q = (0, a.jsx)(U, {
                className: V,
                icon: W,
                subtitle: D,
                title: ee.name,
                titleTooltip: eb,
                variant: "file-tile"
            }), J[121] = U, J[122] = ee.name, J[123] = D, J[124] = eb, J[125] = V, J[126] = W, J[127] = Q) : Q = J[127], J[128] !== $ || J[129] !== Q || J[130] !== q ? (X = (0, a.jsxs)("span", {
                className: q,
                children: [$, Q]
            }), J[128] = $, J[129] = Q, J[130] = q, J[131] = X) : X = J[131], J[132] !== R || J[133] !== H || J[134] !== G || J[135] !== X ? (Z = (0, a.jsx)(R, {
                as: H,
                variant: G,
                children: X
            }), J[132] = R, J[133] = H, J[134] = G, J[135] = X, J[136] = Z) : Z = J[136], Z
        }
    }),
    dKZq: (function(e, t, n) {
        var a = n("ABep"),
            i = n("QosV"),
            r = n("on57"),
            l = n("iTtm"),
            s = n("zd8w"),
            o = n("oyxz"),
            d = n("Xvoy"),
            c = n("NkEl"),
            m = n("ygO2"),
            u = n("oQwr"),
            f = n("YBOx"),
            h = n("hMRX");
        let p = "a[href], area[href]";

        function b(e, t, n) {
            e.toggleAttribute("inert", !t), t ? null == n ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n) : e.setAttribute("aria-hidden", "true")
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, x, y, g, v, w, I, j, T, S, k, M, E, L, F, N = (0, i.c)(59),
                    {
                        children: C,
                        collapsedLineCount: _,
                        collapseIndicator: A,
                        textTone: z,
                        text: B
                    } = e,
                    P = void 0 === _ ? 20 : _,
                    U = void 0 === A ? "ellipsis" : A,
                    R = void 0 === z ? "default" : z,
                    $ = (0, l.z)(d.a),
                    H = 512 * P,
                    G = !$ && "function" == typeof C && B.length > H;
                N[0] !== P || N[1] !== G || N[2] !== B ? (t = {
                    text: B,
                    collapsedLineCount: P,
                    fallbackFontSizePx: 13,
                    forceCollapsible: G
                }, N[0] = P, N[1] = G, N[2] = B, N[3] = t) : t = N[3];
                let {
                    setTextContentMeasurementRef: O,
                    collapseState: V,
                    handleToggleExpansion: W
                } = (0, u.b)(t), q = !$ && "collapsed" === V, K = q && "ellipsis" === U && P > 2, Y = P - !!K, D = (0, s.useRef)(null);
                N[4] !== Y || N[5] !== G || N[6] !== q ? (n = () => {
                    if (!q || G) return;
                    let e = D.current,
                        t = e?.firstElementChild;
                    if (null == e || null == t) return;
                    let n = () => {
                        let t = e.querySelectorAll('[data-markdown-copy="code-block"]:not(pre)');
                        if (0 === t.length) {
                            e.style.maxHeight = `${Y}lh`;
                            return
                        }
                        let n = Number.parseFloat(window.getComputedStyle(e).lineHeight);
                        if (!Number.isFinite(n)) return;
                        let a = e.getBoundingClientRect(),
                            i = 0 === e.offsetHeight ? 1 : a.height / e.offsetHeight,
                            r = Math.ceil(n * Y);
                        for (let e of t) {
                            let t = e.getBoundingClientRect(),
                                n = (t.top - a.top) / i,
                                l = (t.bottom - a.top) / i;
                            n < r && l > r && (r = Math.ceil(l))
                        }
                        e.style.maxHeight = `${r}px`
                    };
                    n();
                    let a = new ResizeObserver(n);
                    a.observe(t);
                    let i = new MutationObserver(n);
                    return i.observe(t, {
                        childList: !0,
                        subtree: !0
                    }), () => {
                        a.disconnect(), i.disconnect()
                    }
                }, N[4] = Y, N[5] = G, N[6] = q, N[7] = n) : n = N[7], N[8] !== Y || N[9] !== G || N[10] !== q || N[11] !== B ? (x = [Y, G, q, B], N[8] = Y, N[9] = G, N[10] = q, N[11] = B, N[12] = x) : x = N[12], (0, s.useLayoutEffect)(n, x), N[13] !== q ? (y = () => {
                    if (!q) return;
                    let e = D.current;
                    if (null == e) return;
                    let t = "u" < typeof IntersectionObserver ? null : new IntersectionObserver(e => {
                            for (let t of e) n.has(t.target) && b(t.target, t.isIntersecting && (t.target.matches(p) ? t.intersectionRatio > 0 : t.intersectionRatio >= 1), n.get(t.target) ?? null)
                        }, {
                            root: e,
                            rootMargin: "0px",
                            threshold: [Number.EPSILON, 1]
                        }),
                        n = new Map,
                        a = () => {
                            for (let a of n.keys()) e.contains(a) || (t?.unobserve(a), n.delete(a));
                            for (let a of e.querySelectorAll('a[href], area[href], button, input, select, textarea, summary, audio[controls], video[controls], iframe, [contenteditable]:not([contenteditable="false"]), [tabindex]:not([tabindex="-1"])')) {
                                if (n.has(a) || a.hasAttribute("inert")) continue;
                                let i = a.getAttribute("aria-hidden");
                                n.set(a, i), b(a, null == t && function(e, t) {
                                    let n = e.getBoundingClientRect(),
                                        a = t.getBoundingClientRect();
                                    return e.matches(p) ? Math.min(n.right, a.right) > Math.max(n.left, a.left) && Math.min(n.bottom, a.bottom) > Math.max(n.top, a.top) : n.top >= a.top && n.right <= a.right && n.bottom <= a.bottom && n.left >= a.left
                                }(a, e), i), t?.observe(a)
                            }
                        };
                    a();
                    let i = new MutationObserver(a);
                    return i.observe(e, {
                        childList: !0,
                        subtree: !0
                    }), () => {
                        for (let [e, a] of(t?.disconnect(), i.disconnect(), n)) b(e, !0, a)
                    }
                }, N[13] = q, N[14] = y) : y = N[14], N[15] !== P || N[16] !== q || N[17] !== B ? (g = [P, q, B], N[15] = P, N[16] = q, N[17] = B, N[18] = g) : g = N[18], (0, s.useEffect)(y, g);
                let Q = !$;
                N[19] !== W || N[20] !== G || N[21] !== q || N[22] !== B ? (v = e => {
                    if (D.current = e, null != e) return (0, c.b)(e, {
                        highlight: "text",
                        text: B,
                        isTruncated: q && G,
                        reveal: q ? W : void 0
                    })
                }, N[19] = W, N[20] = G, N[21] = q, N[22] = B, N[23] = v) : v = N[23];
                let X = q && "overflow-hidden",
                    Z = q && "fade" === U && "mask-b-from-80% mask-b-to-100%";
                N[24] !== X || N[25] !== Z ? (w = (0, r.b)(X, Z), N[24] = X, N[25] = Z, N[26] = w) : w = N[26], N[27] !== Y || N[28] !== q ? (I = q ? {
                    maxHeight: `${Y}lh`
                } : void 0, N[27] = Y, N[28] = q, N[29] = I) : I = N[29];
                let J = G ? void 0 : O;
                return N[30] !== C || N[31] !== q || N[32] !== H || N[33] !== B ? (j = "function" == typeof C ? C(q ? B.slice(0, H) : B) : C, N[30] = C, N[31] = q, N[32] = H, N[33] = B, N[34] = j) : j = N[34], N[35] !== J || N[36] !== j ? (T = (0, a.jsx)("div", {
                    ref: J,
                    children: j
                }), N[35] = J, N[36] = j, N[37] = T) : T = N[37], N[38] !== v || N[39] !== w || N[40] !== I || N[41] !== T ? (S = (0, a.jsx)("div", {
                    ref: v,
                    className: w,
                    style: I,
                    children: T
                }), N[38] = v, N[39] = w, N[40] = I, N[41] = T, N[42] = S) : S = N[42], N[43] !== S || N[44] !== Q ? (k = (0, a.jsx)(h.a.Provider, {
                    value: Q,
                    children: S
                }), N[43] = S, N[44] = Q, N[45] = k) : k = N[45], N[46] !== K ? (M = K ? (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: "block",
                    children: "…"
                }) : null, N[46] = K, N[47] = M) : M = N[47], N[48] !== k || N[49] !== M ? (E = (0, a.jsxs)("div", {
                    className: "relative w-full min-w-0 text-size-chat leading-relaxed",
                    children: [k, M]
                }), N[48] = k, N[49] = M, N[50] = E) : E = N[50], N[51] !== V || N[52] !== W || N[53] !== $ || N[54] !== R ? (L = $ || "uncollapsible" === V ? null : (0, a.jsxs)(m.a, {
                    className: (0, r.b)("mt-1.5 self-start text-size-chat", "default" === R && "text-codex-description"),
                    "aria-expanded": "expanded" === V,
                    "data-thread-find-skip": !0,
                    "data-markdown-copy": "exclude",
                    color: "user-message" === R ? "ghostUserMessage" : "disclosure",
                    onClick: W,
                    size: "inline",
                    children: [(0, a.jsx)("span", {
                        children: "expanded" === V ? (0, a.jsx)(o.a, {
                            id: "codex.userMessage.showLess",
                            defaultMessage: "Show less",
                            description: "Button label for collapsing an expanded user message"
                        }) : (0, a.jsx)(o.a, {
                            id: "codex.userMessage.showMore",
                            defaultMessage: "Show more",
                            description: "Button label for expanding a truncated user message"
                        })
                    }), (0, a.jsx)(f.a, {
                        className: "expanded" === V ? "icon-2xs rotate-180" : "icon-2xs"
                    })]
                }), N[51] = V, N[52] = W, N[53] = $, N[54] = R, N[55] = L) : L = N[55], N[56] !== E || N[57] !== L ? (F = (0, a.jsxs)("div", {
                    className: "flex flex-col items-end gap-1",
                    children: [E, L]
                }), N[56] = E, N[57] = L, N[58] = F) : F = N[58], F
            }
        })
    }),
    R1rp: (function(e, t, n) {
        n.d(t, {
            a: () => c,
            b: () => d,
            c: () => m,
            d: () => u
        });
        var a = n("iTtm"),
            i = n("OWtl"),
            r = n("twmu"),
            l = n("Cslg");
        let s = (0, a.c)(i.a, e => {
                let {
                    get: t
                } = e, n = t(l.f);
                if (null != n && "allowed" === t(l.n)) return t(r.b, n).data?.accounts[n]?.features
            }),
            o = (0, a.c)(i.a, e => {
                let {
                    get: t
                } = e, n = t(l.n);
                return "loading" === n || "allowed" === n && t(r.b, t(l.f)).isPending
            }),
            d = (0, a.c)(i.a, () => !1),
            c = (0, a.c)(i.a, () => !1),
            m = (0, a.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(s)?.includes("library_shared_content_available") === !0
            }),
            u = (0, a.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return !t(o) && !t(m)
            })
    })
};