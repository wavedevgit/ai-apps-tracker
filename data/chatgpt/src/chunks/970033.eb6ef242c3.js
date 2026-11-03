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
            a: () => J
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("SIRb"),
            l = n("slpy"),
            s = n("iTtm"),
            o = n("bg18"),
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
            S = n("EKFE"),
            k = n("FqCE"),
            E = n("WE3h"),
            M = n("SCxD"),
            L = n("TxRk"),
            F = n("e2wX"),
            C = n("k7G6"),
            _ = n("tSEg"),
            N = n("lBzi"),
            A = n("Kmy6"),
            z = n("M0Ez"),
            B = n("ZfbS"),
            P = n("drbS"),
            U = n("flj6"),
            R = n("pdPj"),
            $ = n("OWtl"),
            H = n("Kwur"),
            O = n("ZM7C"),
            G = n("gJdM"),
            V = n("iHfE"),
            q = n("OWHf"),
            W = n("t5e6");
        let K = (0, s.q)($.a, (e, t) => {
            let {
                get: n
            } = t, a = n(O.a);
            return {
                enabled: null != a && n(R.a),
                queryKey: ["chatgpt-reference-image-message-thumbnail", a, n(O.b), e],
                queryFn: async t => {
                    let {
                        signal: n
                    } = t;
                    return (await H.Request.safeGet("/files/library/reference-images/{reference_image_id}/thumbnail_url", {
                        additionalHeaders: null == a ? void 0 : (0, q.a)(a),
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

        function Z(e) {
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
                href: (0, G.b)({
                    referenceImageId: d.referenceImageId,
                    assetPointer: f?.asset_pointer,
                    thumbnailAssetPointer: f?.thumbnail_asset_pointer
                }),
                label: d.name
            });
            return o[3] !== m || o[4] !== f || o[5] !== c || o[6] !== p ? (r = m && !c && (null != f || null != p) ? (0, a.jsx)("span", {
                children: (0, a.jsx)(W.a, {
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
        var Q = n("Q03P");
        let Y = (0, T.a)(r.h, {
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
            D = (0, s.t)("ChatGptUserMessageContentScope", {
                key: e => e.tabKeyPrefix,
                parent: _.a,
                retain: {
                    max: 0
                }
            });

        function J(e) {
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
                    renderMarkdown: E,
                    shouldBlockExternalEgress: M,
                    systemHintMentions: L,
                    tabKeyPrefix: F
                } = e;
            if (p[0] !== g || p[1] !== I || p[2] !== j || p[3] !== T || p[4] !== S) {
                let e = void 0 === I ? [] : I,
                    n = void 0 === j ? [] : j,
                    a = void 0 === T ? [] : T;
                t = [...g, ...e, ...n, ...a].sort(et), p[0] = g, p[1] = I, p[2] = j, p[3] = T, p[4] = S, p[5] = t
            } else t = p[5];
            let C = t,
                _ = (0, d.useId)();
            if (p[6] !== _) {
                let e;
                p[8] === Symbol.for("react.memo_cache_sentinel") ? (e = /[^a-z0-9-]/gi, p[8] = e) : e = p[8], n = _.replace(e, ""), p[6] = _, p[7] = n
            } else n = p[7];
            let A = `chatgpt-file-mention-${n}`;
            p[9] !== M || p[10] !== S ? (r = !M && S.includes("app://"), p[9] = M, p[10] = S, p[11] = r) : r = p[11];
            let z = r;
            p[12] !== z ? (l = {
                enabled: z
            }, p[12] = z, p[13] = l) : l = p[13];
            let {
                data: B
            } = (0, s.z)(N.m, l);
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
            p[21] !== C || p[22] !== o || p[23] !== S ? (m = e => {
                if (e.length === S.length) return S;
                let t = [...C, ...o].reduce(ee, e.length);
                return S.slice(0, t)
            }, p[21] = C, p[22] = o, p[23] = S, p[24] = m) : m = p[24];
            let R = m;
            return p[25] !== x || p[26] !== y || p[27] !== C || p[28] !== k || p[29] !== o || p[30] !== M || p[31] !== F || p[32] !== S ? (u = {
                conversationId: x,
                hostId: y,
                message: S,
                messageId: k,
                mentions: C,
                shouldBlockExternalEgress: M,
                systemHintMentions: o,
                tabKeyPrefix: F
            }, p[25] = x, p[26] = y, p[27] = C, p[28] = k, p[29] = o, p[30] = M, p[31] = F, p[32] = S, p[33] = u) : u = p[33], p[34] !== A || p[35] !== U || p[36] !== R || p[37] !== y || p[38] !== C || p[39] !== b || p[40] !== E || p[41] !== o || p[42] !== S ? (f = E ? (0, a.jsx)(v.a, {
                ref: b,
                cwd: null,
                directives: U,
                hostId: y,
                hasSerializedParagraphs: !0,
                renderMath: !1,
                serializeVisibleText: e => es(R(e), C, o).map(e => "text" === e.kind ? e.text : `:${A}{kind="${e.kind}" index="${String(e.index)}"}`).join(""),
                text: S
            }) : (0, a.jsx)(w.a, {
                text: S,
                textTone: "user-message",
                children: e => {
                    let t = R(e),
                        n = es(t, C, o);
                    return (0, a.jsx)("div", {
                        ref: n.some(X) ? b : void 0,
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
            }), p[34] = A, p[35] = U, p[36] = R, p[37] = y, p[38] = C, p[39] = b, p[40] = E, p[41] = o, p[42] = S, p[43] = f) : f = p[43], p[44] !== u || p[45] !== f ? (h = (0, a.jsx)(s.b, {
                scope: D,
                value: u,
                children: f
            }), p[44] = u, p[45] = f, p[46] = h) : h = p[46], h
        }

        function X(e) {
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
                } = (0, s.y)(D);
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
                            let s = c.shouldBlockExternalEgress ? l : (0, E.b)({
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
                        return s || d || null == r || !/^ {0,3}$/.test(o.slice(l, n)) || r[1].includes("`") || !/^[ \t]*\r?$/.test(m) ? e.text : (0, a.jsx)(M.a, {
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
                } = (0, s.y)(D),
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
                return n[4] !== x || n[5] !== o.shouldBlockExternalEgress ? (e = (0, a.jsx)(Z, {
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
                    children: (0, a.jsx)(c.g, {
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
                    children: (0, a.jsx)(Y, {
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
                    value: E
                } = (0, s.y)(D),
                M = !E.shouldBlockExternalEgress && null == k.systemHint;
            S[0] !== M ? (t = {
                enabled: M
            }, S[0] = M, S[1] = t) : t = S[1];
            let {
                data: _
            } = (0, s.z)(N.m, t);
            S[2] !== k.id || S[3] !== E.shouldBlockExternalEgress ? (l = k.id.replace(/^(?:connector|plugin):/u, ""), n = (0, z.g)(l), r = !E.shouldBlockExternalEgress && /^(?:connector|plugin):.+/u.test(k.id) && null == n, d = k.id.startsWith("plugin:") && (0, o.Rh)(l) ? l : null, S[2] = k.id, S[3] = E.shouldBlockExternalEgress, S[4] = n, S[5] = r, S[6] = l, S[7] = d) : (n = S[4], r = S[5], l = S[6], d = S[7]);
            let P = d;
            S[8] === Symbol.for("react.memo_cache_sentinel") ? (u = {
                enabled: !1
            }, S[8] = u) : u = S[8];
            let U = (0, s.x)(B.b, l, u),
                R = r ? P ?? U : null;
            S[9] !== k.systemHint || S[10] !== l || S[11] !== _ || S[12] !== E.shouldBlockExternalEgress ? (f = E.shouldBlockExternalEgress ? void 0 : k.systemHint ?? _?.[(0, p.c)(l)], S[9] = k.systemHint, S[10] = l, S[11] = _, S[12] = E.shouldBlockExternalEgress, S[13] = f) : f = S[13];
            let $ = f;
            S[14] !== $?.name || S[15] !== l ? (h = (0, m.c)(l) ?? (0, m.c)($?.name), S[14] = $?.name, S[15] = l, S[16] = h) : h = S[16];
            let H = h,
                O = n ?? H?.icon;
            if (null == O && H?.iconUrl) {
                let e;
                S[17] !== H.iconUrl ? (e = (0, a.jsx)("img", {
                    alt: "",
                    src: H.iconUrl
                }), S[17] = H.iconUrl, S[18] = e) : e = S[18], O = e
            }
            if (null == O) {
                let e;
                S[19] !== $ ? (e = $?.logo ? (0, a.jsx)(A.a, {
                    logo: $.logo
                }) : (0, a.jsx)(I.a, {
                    asset: Q.a
                }), S[19] = $, S[20] = e) : e = S[20], O = e
            }
            if (S[21] !== k.id || S[22] !== k.label || S[23] !== k.promptLink || S[24] !== l) {
                let e = b.d.shape.systemHint.safeParse(k.id);
                x = L.a, y = g.d, v = k.promptLink ?? {
                    href: e.success ? (0, b.g)(e.data) : (0, p.c)(l),
                    label: e.success ? k.label : `@${k.label}`
                }, S[21] = k.id, S[22] = k.label, S[23] = k.promptLink, S[24] = l, S[25] = x, S[26] = y, S[27] = v
            } else x = S[25], y = S[26], v = S[27];
            S[28] !== y || S[29] !== v ? (w = y(v), S[28] = y, S[29] = v, S[30] = w) : w = S[30];
            let G = H?.name ?? $?.name ?? k.label;
            S[31] !== x || S[32] !== r || S[33] !== O || S[34] !== G || S[35] !== w ? (j = (0, a.jsx)(x, {
                dataAttributes: w,
                icon: O,
                interactive: r,
                layout: "selection-pill",
                children: G
            }), S[31] = x, S[32] = r, S[33] = O, S[34] = G, S[35] = w, S[36] = j) : j = S[36];
            let V = j;
            if (!r) return V;
            if (null == R && k.id.startsWith("plugin:") && null != (0, o.Ng)(l)) {
                let e, t;
                return S[37] !== l || S[38] !== E.hostId ? (e = (0, C.a)({
                    pluginId: l,
                    hostId: E.hostId
                }), S[37] = l, S[38] = E.hostId, S[39] = e) : e = S[39], S[40] !== V || S[41] !== e ? (t = (0, a.jsx)(c.g, {
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
            a: () => D,
            b: () => Q
        });
        var a = n("ABep"),
            i = n("QosV"),
            r = n("Rzcw"),
            l = n("iTtm"),
            s = n("zd8w"),
            o = n("oyxz"),
            d = n("Cslg"),
            c = n("rS3J"),
            m = n("ZtSy"),
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
            E = n("DrWu"),
            M = n("dQRk"),
            L = n("rxj0"),
            F = n("Ul98"),
            C = n("f2PP"),
            _ = n("slpy"),
            N = n("RUAz"),
            A = n("T0Rc"),
            z = n("Wf1j"),
            B = n("ygO2"),
            P = n("HOLv"),
            U = n("rvFo"),
            R = n("zsxQ"),
            $ = n("vldH"),
            H = n("KBix"),
            O = n("v2Oq");

        function G(e) {
            let t, n, r, s, d, c, m, u, f, x, y, g, v, w, j, S, k, E, F, G, W, K, Z = (0, i.c)(86),
                {
                    attachment: Q,
                    conversationId: Y,
                    tabKey: D,
                    target: J
                } = e,
                X = (0, l.y)(I.a),
                ee = (0, z.a)();
            Z[0] !== Y || Z[1] !== X ? (t = X.get(M.R, Y), Z[0] = Y, Z[1] = X, Z[2] = t) : t = Z[2];
            let et = t;
            Z[3] !== Y || Z[4] !== X ? (n = X.get(M.Y, Y), Z[3] = Y, Z[4] = X, Z[5] = n) : n = Z[5];
            let en = n;
            Z[6] !== Y || Z[7] !== D ? (r = ["chatgpt-user-message-csv-preview", Y, D], Z[6] = Y, Z[7] = D, Z[8] = r) : r = Z[8], Z[9] !== Y || Z[10] !== et || Z[11] !== en || Z[12] !== J ? (s = async e => {
                let {
                    signal: t
                } = e, n = await (0, $.fetchChatGptFileBlob)({
                    conversationId: Y,
                    gizmoId: et,
                    sharedConversationId: en,
                    signal: t,
                    target: J
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
                    }(a), (0, N.planCsvImport)(a).values
            }, Z[9] = Y, Z[10] = et, Z[11] = en, Z[12] = J, Z[13] = s) : s = Z[13], Z[14] !== r || Z[15] !== s ? (d = {
                queryKey: r,
                queryFn: s,
                retry: !1,
                staleTime: U.b.FIVE_MINUTES
            }, Z[14] = r, Z[15] = s, Z[16] = d) : d = Z[16];
            let {
                data: ea,
                isError: ei,
                isLoading: er,
                refetch: el
            } = (0, A.a)(d);
            Z[17] !== Q.name ? (c = (Q.name.split("/").at(-1) ?? "").replace(/[-_]/gu, " ").split(".")[0] ?? "", Z[17] = Q.name, Z[18] = c) : c = Z[18];
            let es = c;
            Z[19] !== Q.name || Z[20] !== ee ? (m = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.download",
                defaultMessage: "Download {filename}",
                description: "Accessible label for a compact icon button in an inline CSV attachment preview. Activating the button downloads the named file. {filename} is the original user-visible filename and may be truncated elsewhere in the preview."
            }, {
                filename: Q.name
            }), Z[19] = Q.name, Z[20] = ee, Z[21] = m) : m = Z[21];
            let eo = m;
            Z[22] !== Q.name || Z[23] !== ee ? (u = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.open",
                defaultMessage: "Open {filename}",
                description: "Accessible label for a compact icon button in an inline CSV attachment preview. Activating the button opens the named file in the full file preview. {filename} is the original user-visible filename and may be truncated elsewhere in the preview."
            }, {
                filename: Q.name
            }), Z[22] = Q.name, Z[23] = ee, Z[24] = u) : u = Z[24];
            let ed = u;
            Z[25] !== Q.name || Z[26] !== Y || Z[27] !== et || Z[28] !== X || Z[29] !== en || Z[30] !== J ? (f = () => {
                (0, $.a)({
                    conversationId: Y,
                    fileName: Q.name,
                    gizmoId: et,
                    sharedConversationId: en,
                    target: J
                }).catch(e => {
                    T.a.error("ChatGPT CSV attachment failed to download", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), X.get(p.f).danger((0, a.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.downloadFailed",
                        defaultMessage: "Couldn't download this file. Try again",
                        description: "Error shown when an attached CSV file cannot be downloaded from its inline preview"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgpt.userMessage.csvPreview.downloadFailed"
                        }
                    })
                })
            }, Z[25] = Q.name, Z[26] = Y, Z[27] = et, Z[28] = X, Z[29] = en, Z[30] = J, Z[31] = f) : f = Z[31];
            let ec = f;
            Z[32] !== Q.isSharedLibraryFile || Z[33] !== Q.mimeType || Z[34] !== Q.name || Z[35] !== Y || Z[36] !== et || Z[37] !== X || Z[38] !== en || Z[39] !== D || Z[40] !== J ? (x = () => {
                (0, C.openChatGptFile)(X, {
                    isAccessBlocked: e => (0, L.i)(e, Y) || !0 === Q.isSharedLibraryFile && e.get(b.d),
                    browserPreview: (0, R.a)(Q.name, Q.mimeType),
                    conversationId: Y,
                    fileName: Q.name,
                    mimeType: Q.mimeType,
                    gizmoId: et,
                    sharedConversationId: en,
                    tabKey: D,
                    target: J
                }).catch(V)
            }, Z[32] = Q.isSharedLibraryFile, Z[33] = Q.mimeType, Z[34] = Q.name, Z[35] = Y, Z[36] = et, Z[37] = X, Z[38] = en, Z[39] = D, Z[40] = J, Z[41] = x) : x = Z[41];
            let em = x;
            if (er) {
                let e, t;
                Z[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(h.a, {
                    "aria-hidden": !0
                }), Z[42] = e) : e = Z[42], Z[43] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsxs)("div", {
                    className: "flex h-full items-center justify-center",
                    children: [e, (0, a.jsx)("span", {
                        className: "sr-only",
                        children: (0, a.jsx)(o.a, {
                            id: "chatgpt.userMessage.csvPreview.loading",
                            defaultMessage: "Loading table preview",
                            description: "Screen-reader status announced while an inline preview of an attached CSV file is loading in a ChatGPT conversation"
                        })
                    })]
                }), Z[43] = t) : t = Z[43], y = t
            } else if (ei) {
                let e, t, n, i;
                Z[44] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, a.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.error",
                        defaultMessage: "Unable to display table preview",
                        description: "Error message shown inside an attached CSV file preview when the table could not be downloaded or parsed"
                    })
                }), Z[44] = e) : e = Z[44], Z[45] !== el ? (t = () => void el(), Z[45] = el, Z[46] = t) : t = Z[46], Z[47] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(o.a, {
                    id: "chatgpt.userMessage.csvPreview.retry",
                    defaultMessage: "Try again",
                    description: "Button label for retrying a failed inline CSV attachment preview in a ChatGPT conversation"
                }), Z[47] = n) : n = Z[47], Z[48] !== t ? (i = (0, a.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-3 px-4 text-center",
                    role: "alert",
                    children: [e, (0, a.jsx)(B.a, {
                        color: "secondary",
                        onClick: t,
                        children: n
                    })]
                }), Z[48] = t, Z[49] = i) : i = Z[49], y = i
            } else if (null == ea || 0 === ea.length) {
                let e;
                Z[50] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("div", {
                    className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondary",
                    children: (0, a.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.empty",
                        defaultMessage: "This CSV file is empty",
                        description: "Empty state shown inside an inline CSV attachment preview when the file contains no rows"
                    })
                }), Z[50] = e) : e = Z[50], y = e
            } else {
                let e, t, n;
                Z[51] !== ea[0] ? (e = ea[0] ?? [], Z[51] = ea[0], Z[52] = e) : e = Z[52], Z[53] !== ea ? (t = ea.slice(1), Z[53] = ea, Z[54] = t) : t = Z[54], Z[55] !== e || Z[56] !== t ? (n = (0, a.jsx)(q, {
                    columnNames: e,
                    rows: t
                }), Z[55] = e, Z[56] = t, Z[57] = n) : n = Z[57], y = n
            }
            return Z[58] !== es ? (g = (0, a.jsx)("span", {
                className: "truncate font-semibold text-default capitalize",
                children: es
            }), Z[58] = es, Z[59] = g) : g = Z[59], Z[60] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(P.a, {
                asset: H.a
            }), Z[60] = v) : v = Z[60], Z[61] !== eo || Z[62] !== ec ? (w = (0, a.jsx)(B.a, {
                "aria-label": eo,
                color: "ghost",
                onClick: ec,
                size: "iconCircleSm",
                children: v
            }), Z[61] = eo, Z[62] = ec, Z[63] = w) : w = Z[63], Z[64] !== eo || Z[65] !== w ? (j = (0, a.jsx)(_.a, {
                content: eo,
                children: w
            }), Z[64] = eo, Z[65] = w, Z[66] = j) : j = Z[66], Z[67] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, a.jsx)(P.a, {
                asset: O.a
            }), Z[67] = S) : S = Z[67], Z[68] !== em || Z[69] !== ed ? (k = (0, a.jsx)(B.a, {
                "aria-label": ed,
                color: "ghost",
                onClick: em,
                size: "iconCircleSm",
                children: S
            }), Z[68] = em, Z[69] = ed, Z[70] = k) : k = Z[70], Z[71] !== ed || Z[72] !== k ? (E = (0, a.jsx)(_.a, {
                content: ed,
                children: k
            }), Z[71] = ed, Z[72] = k, Z[73] = E) : E = Z[73], Z[74] !== j || Z[75] !== E ? (F = (0, a.jsxs)("span", {
                className: "flex items-center gap-2",
                children: [j, E]
            }), Z[74] = j, Z[75] = E, Z[76] = F) : F = Z[76], Z[77] !== g || Z[78] !== F ? (G = (0, a.jsxs)("header", {
                className: "flex h-12 items-center justify-between gap-2 px-4 select-none",
                children: [g, F]
            }), Z[77] = g, Z[78] = F, Z[79] = G) : G = Z[79], Z[80] !== y ? (W = (0, a.jsx)("div", {
                className: "h-72 border-t border-default",
                children: y
            }), Z[80] = y, Z[81] = W) : W = Z[81], Z[82] !== Q.name || Z[83] !== G || Z[84] !== W ? (K = (0, a.jsxs)("section", {
                className: "w-full overflow-hidden rounded-2xl border border-default bg-surface",
                "aria-label": Q.name,
                children: [G, W]
            }), Z[82] = Q.name, Z[83] = G, Z[84] = W, Z[85] = K) : K = Z[85], K
        }

        function V(e) {
            T.a.error("ChatGPT CSV attachment failed to open", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function q(e) {
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
                }), b[13] = i) : i = b[13], b[14] !== x ? (s = x.map(W), b[14] = x, b[15] = s) : s = b[15], b[16] !== s ? (d = (0, a.jsx)("thead", {
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

        function W(e, t) {
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
        let Z = (0, u.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(882629)]).then(n.bind(n, "vT9Z"))).ChatGptUserMessageAudioAttachment);

        function Q(e) {
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
                    t = new Set(e.map(Y)),
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
                        return (0, a.jsx)(D, {
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
                        return (0, a.jsx)(G, {
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

        function Y(e) {
            let {
                attachmentIndex: t
            } = e;
            return t
        }

        function D(e) {
            let t, n, d, u, k, _, N, A, z, B, P, U, R, $, H, O, G, V, q, W, Q, Y, D, J, X = (0, i.c)(137),
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
                ed = (0, l.x)(M.x, et),
                [ec, em] = (0, s.useState)(!1),
                eu = (0, s.useRef)(null);
            X[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => eu.current?.abort(), n = [], X[0] = t, X[1] = n) : (t = X[0], n = X[1]), (0, s.useEffect)(t, n);
            let ef = (0, l.z)(b.d);
            if (X[2] !== ee || X[3] !== ed || X[4] !== ef || X[5] !== ea || X[6] !== eo || X[7] !== el) {
                let e;
                A = K(ee, !ef), u = !ea && null != A, k = "card" === el && "tpp" !== ed && "flora" !== ed && !ea && null != A && (0, S.d)({
                    fileName: ee.name,
                    mimeType: ee.mountedLibraryMimeType ?? ee.mimeType
                }), d = eo.checkGate("2666007232", {
                    disableExposureLog: !k
                });
                let t = ee.mountedLibraryFileId ?? ee.libraryFileId;
                X[14] !== t ? (e = (0, y.a)(t), X[14] = t, X[15] = e) : e = X[15], _ = e;
                let n = u ? (0, F.a)(A, ee.name, ee.mimeType) : null;
                N = null == n ? null : (0, w.d)(n)?.sourceUrl, null != n && ee.isSourceReference && (N = ee.sourceUrl ?? N), X[2] = ee, X[3] = ed, X[4] = ef, X[5] = ea, X[6] = eo, X[7] = el, X[8] = d, X[9] = u, X[10] = k, X[11] = _, X[12] = N, X[13] = A
            } else d = X[8], u = X[9], k = X[10], _ = X[11], N = X[12], A = X[13];
            X[16] !== ee.isSharedLibraryFile || X[17] !== ee.isSourceReference || X[18] !== ee.libraryArtifactType || X[19] !== ee.mimeType || X[20] !== ee.mountedLibraryFileId || X[21] !== ee.mountedLibraryMimeType || X[22] !== ee.name || X[23] !== u || X[24] !== et || X[25] !== ec || X[26] !== en || X[27] !== es || X[28] !== N || X[29] !== ei || X[30] !== A ? (z = u ? e => {
                if (ee.isSourceReference && null != N && null != ee.mountedLibraryFileId) return void(0, v.b)(es, {
                    href: N,
                    title: ee.name,
                    libraryFileId: ee.mountedLibraryFileId,
                    mimeType: ee.mimeType
                }, e, et);
                if (ec) return;
                let t = new AbortController;
                eu.current = t, em(!0), (0, C.openChatGptFile)(es, {
                    connectedFileIntent: "open",
                    interaction: e,
                    isAccessBlocked: e => (0, L.i)(e, et) || !0 === ee.isSharedLibraryFile && e.get(b.d),
                    browserPreview: !0,
                    conversationId: et,
                    messageId: en,
                    fileName: ee.name,
                    libraryArtifactType: ee.libraryArtifactType,
                    gizmoId: es.get(M.R, et),
                    sharedConversationId: es.get(M.Y, et),
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
            } : void 0, X[16] = ee.isSharedLibraryFile, X[17] = ee.isSourceReference, X[18] = ee.libraryArtifactType, X[19] = ee.mimeType, X[20] = ee.mountedLibraryFileId, X[21] = ee.mountedLibraryMimeType, X[22] = ee.name, X[23] = u, X[24] = et, X[25] = ec, X[26] = en, X[27] = es, X[28] = N, X[29] = ei, X[30] = A, X[31] = z) : z = X[31];
            let eh = z;
            X[32] !== eh ? (B = e => {
                null != eh && (e.preventDefault(), eh(e))
            }, X[32] = eh, X[33] = B) : B = X[33];
            let ep = B;
            if (k && d) {
                let e;
                return X[34] !== ee || X[35] !== et || X[36] !== A ? (e = (0, a.jsx)(Z, {
                    attachment: ee,
                    conversationId: et,
                    target: A
                }), X[34] = ee, X[35] = et, X[36] = A, X[37] = e) : e = X[37], e
            }
            if ("inline" === el) {
                let e, t, n, i, r, l, s = ee.mountedLibraryFileId ?? ee.libraryFileId;
                X[38] !== ee.fileId || X[39] !== ee.isSourceReference || X[40] !== ee.libraryArtifactType || X[41] !== ee.mimeType || X[42] !== ee.mountedLibraryMimeType || X[43] !== ee.name || X[44] !== ee.sourceUrl || X[45] !== s ? (e = null == s ? void 0 : (0, c.d)({
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
                }), X[38] = ee.fileId, X[39] = ee.isSourceReference, X[40] = ee.libraryArtifactType, X[41] = ee.mimeType, X[42] = ee.mountedLibraryMimeType, X[43] = ee.name, X[44] = ee.sourceUrl, X[45] = s, X[46] = e) : e = X[46];
                let o = e;
                X[47] !== ee.libraryArtifactType || X[48] !== ee.libraryFileId || X[49] !== ee.mimeType || X[50] !== ee.mountedLibraryFileId || X[51] !== ee.mountedLibraryMimeType || X[52] !== ee.name || X[53] !== ee.sourceUrl || X[54] !== ec || X[55] !== _ ? (t = ec ? (0, a.jsx)(h.a, {
                    as: "span",
                    className: "size-4"
                }) : (0, a.jsx)(g.a, {
                    fileName: ee.name,
                    libraryArtifactType: ee.libraryArtifactType,
                    mimeType: ee.mimeType ?? void 0,
                    provider: _,
                    sourceMimeType: ee.mountedLibraryMimeType ?? void 0,
                    mountedLibraryFileId: ee.mountedLibraryFileId ?? ee.libraryFileId,
                    sourceUrl: ee.sourceUrl ?? void 0,
                    style: "message-inline"
                }), X[47] = ee.libraryArtifactType, X[48] = ee.libraryFileId, X[49] = ee.mimeType, X[50] = ee.mountedLibraryFileId, X[51] = ee.mountedLibraryMimeType, X[52] = ee.name, X[53] = ee.sourceUrl, X[54] = ec, X[55] = _, X[56] = t) : t = X[56], X[57] !== ee ? (n = 0 === (0, E.h)(ee).length ? ee.name : (0, E.g)(ee.name), X[57] = ee, X[58] = n) : n = X[58], X[59] !== n ? (i = (0, a.jsx)("span", {
                    className: "max-w-64 self-baseline truncate",
                    children: n
                }), X[59] = n, X[60] = i) : i = X[60], X[61] !== t || X[62] !== i ? (r = (0, a.jsxs)(a.Fragment, {
                    children: [t, i]
                }), X[61] = t, X[62] = i, X[63] = r) : r = X[63];
                let d = r;
                if (null != N) {
                    let e;
                    return X[64] !== ee.name || X[65] !== d || X[66] !== o || X[67] !== ep || X[68] !== N ? (e = (0, a.jsx)(m.a, {
                        ...o,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        "aria-label": ee.name,
                        href: N,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ee.name,
                        onUnmodifiedClick: ep,
                        children: d
                    }), X[64] = ee.name, X[65] = d, X[66] = o, X[67] = ep, X[68] = N, X[69] = e) : e = X[69], e
                }
                return X[70] !== ee.name || X[71] !== u || X[72] !== d || X[73] !== o || X[74] !== ec || X[75] !== eh ? (l = u ? (0, a.jsx)("button", {
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
                }), X[70] = ee.name, X[71] = u, X[72] = d, X[73] = o, X[74] = ec, X[75] = eh, X[76] = l) : l = X[76], l
            }
            if (X[77] !== ee.libraryArtifactType || X[78] !== ee.libraryFileId || X[79] !== ee.mimeType || X[80] !== ee.mountedLibraryFileId || X[81] !== ee.mountedLibraryMimeType || X[82] !== ee.name || X[83] !== ee.sourceUrl || X[84] !== u || X[85] !== ec || X[86] !== eh || X[87] !== ep || X[88] !== _ || X[89] !== N) {
                let e = (0, r.f)({
                        fileName: ee.name,
                        mimeType: ee.mimeType ?? void 0
                    }),
                    t = null;
                if (null != N) {
                    let e;
                    X[100] !== ee.name || X[101] !== ep || X[102] !== N ? (e = (0, a.jsx)(f.b, {
                        "aria-label": ee.name,
                        href: N,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ee.name,
                        onUnmodifiedClick: ep
                    }), X[100] = ee.name, X[101] = ep, X[102] = N, X[103] = e) : e = X[103], t = e
                } else if (u) {
                    let e;
                    X[104] !== ee.name || X[105] !== ec || X[106] !== eh ? (e = (0, a.jsx)(f.b, {
                        "aria-busy": ec,
                        "aria-label": ee.name,
                        disabled: ec,
                        onClick: eh
                    }), X[104] = ee.name, X[105] = ec, X[106] = eh, X[107] = e) : e = X[107], t = e
                }
                R = f.a, H = "span", O = "file-tile", W = "group/resource-card relative", $ = t, U = f.h, V = "pointer-events-none relative z-10", X[108] !== ee.libraryArtifactType || X[109] !== ee.libraryFileId || X[110] !== ee.mimeType || X[111] !== ee.mountedLibraryFileId || X[112] !== ee.mountedLibraryMimeType || X[113] !== ee.name || X[114] !== ee.sourceUrl || X[115] !== ec || X[116] !== _ ? (q = (0, a.jsx)("span", {
                    className: "flex size-10 items-center justify-center overflow-hidden rounded-xl",
                    children: ec ? (0, a.jsx)(h.a, {
                        as: "span",
                        className: "size-5"
                    }) : (0, a.jsx)(g.a, {
                        fileName: ee.name,
                        libraryArtifactType: ee.libraryArtifactType,
                        mimeType: ee.mimeType ?? void 0,
                        provider: _,
                        sourceMimeType: ee.mountedLibraryMimeType ?? void 0,
                        mountedLibraryFileId: ee.mountedLibraryFileId ?? ee.libraryFileId,
                        sourceUrl: ee.sourceUrl ?? void 0,
                        style: "message-card"
                    })
                }), X[108] = ee.libraryArtifactType, X[109] = ee.libraryFileId, X[110] = ee.mimeType, X[111] = ee.mountedLibraryFileId, X[112] = ee.mountedLibraryMimeType, X[113] = ee.name, X[114] = ee.sourceUrl, X[115] = ec, X[116] = _, X[117] = q) : q = X[117], P = o.a, G = (0, r.d)(e.category), X[77] = ee.libraryArtifactType, X[78] = ee.libraryFileId, X[79] = ee.mimeType, X[80] = ee.mountedLibraryFileId, X[81] = ee.mountedLibraryMimeType, X[82] = ee.name, X[83] = ee.sourceUrl, X[84] = u, X[85] = ec, X[86] = eh, X[87] = ep, X[88] = _, X[89] = N, X[90] = P, X[91] = U, X[92] = R, X[93] = $, X[94] = H, X[95] = O, X[96] = G, X[97] = V, X[98] = q, X[99] = W
            } else P = X[90], U = X[91], R = X[92], $ = X[93], H = X[94], O = X[95], G = X[96], V = X[97], q = X[98], W = X[99];
            X[118] !== P || X[119] !== G ? (Q = (0, a.jsx)(P, {
                ...G
            }), X[118] = P, X[119] = G, X[120] = Q) : Q = X[120];
            let eb = null == N ? ee.name : void 0;
            return X[121] !== U || X[122] !== ee.name || X[123] !== Q || X[124] !== eb || X[125] !== V || X[126] !== q ? (Y = (0, a.jsx)(U, {
                className: V,
                icon: q,
                subtitle: Q,
                title: ee.name,
                titleTooltip: eb,
                variant: "file-tile"
            }), X[121] = U, X[122] = ee.name, X[123] = Q, X[124] = eb, X[125] = V, X[126] = q, X[127] = Y) : Y = X[127], X[128] !== $ || X[129] !== Y || X[130] !== W ? (D = (0, a.jsxs)("span", {
                className: W,
                children: [$, Y]
            }), X[128] = $, X[129] = Y, X[130] = W, X[131] = D) : D = X[131], X[132] !== R || X[133] !== H || X[134] !== O || X[135] !== D ? (J = (0, a.jsx)(R, {
                as: H,
                variant: O,
                children: D
            }), X[132] = R, X[133] = H, X[134] = O, X[135] = D, X[136] = J) : J = X[136], J
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
            f = n("mPVn"),
            h = n("hMRX");
        let p = "a[href], area[href]";

        function b(e, t, n) {
            e.toggleAttribute("inert", !t), t ? null == n ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", n) : e.setAttribute("aria-hidden", "true")
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, x, y, g, v, w, I, j, T, S, k, E, M, L, F, C = (0, i.c)(59),
                    {
                        children: _,
                        collapsedLineCount: N,
                        collapseIndicator: A,
                        textTone: z,
                        text: B
                    } = e,
                    P = void 0 === N ? 20 : N,
                    U = void 0 === A ? "ellipsis" : A,
                    R = void 0 === z ? "default" : z,
                    $ = (0, l.z)(d.a),
                    H = 512 * P,
                    O = !$ && "function" == typeof _ && B.length > H;
                C[0] !== P || C[1] !== O || C[2] !== B ? (t = {
                    text: B,
                    collapsedLineCount: P,
                    fallbackFontSizePx: 13,
                    forceCollapsible: O
                }, C[0] = P, C[1] = O, C[2] = B, C[3] = t) : t = C[3];
                let {
                    setTextContentMeasurementRef: G,
                    collapseState: V,
                    handleToggleExpansion: q
                } = (0, u.b)(t), W = !$ && "collapsed" === V, K = W && "ellipsis" === U && P > 2, Z = P - !!K, Q = (0, s.useRef)(null);
                C[4] !== Z || C[5] !== O || C[6] !== W ? (n = () => {
                    if (!W || O) return;
                    let e = Q.current,
                        t = e?.firstElementChild;
                    if (null == e || null == t) return;
                    let n = () => {
                        let t = e.querySelectorAll('[data-markdown-copy="code-block"]:not(pre)');
                        if (0 === t.length) {
                            e.style.maxHeight = `${Z}lh`;
                            return
                        }
                        let n = Number.parseFloat(window.getComputedStyle(e).lineHeight);
                        if (!Number.isFinite(n)) return;
                        let a = e.getBoundingClientRect(),
                            i = 0 === e.offsetHeight ? 1 : a.height / e.offsetHeight,
                            r = Math.ceil(n * Z);
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
                }, C[4] = Z, C[5] = O, C[6] = W, C[7] = n) : n = C[7], C[8] !== Z || C[9] !== O || C[10] !== W || C[11] !== B ? (x = [Z, O, W, B], C[8] = Z, C[9] = O, C[10] = W, C[11] = B, C[12] = x) : x = C[12], (0, s.useLayoutEffect)(n, x), C[13] !== W ? (y = () => {
                    if (!W) return;
                    let e = Q.current;
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
                }, C[13] = W, C[14] = y) : y = C[14], C[15] !== P || C[16] !== W || C[17] !== B ? (g = [P, W, B], C[15] = P, C[16] = W, C[17] = B, C[18] = g) : g = C[18], (0, s.useEffect)(y, g);
                let Y = !$;
                C[19] !== q || C[20] !== O || C[21] !== W || C[22] !== B ? (v = e => {
                    if (Q.current = e, null != e) return (0, c.b)(e, {
                        highlight: "text",
                        text: B,
                        isTruncated: W && O,
                        reveal: W ? q : void 0
                    })
                }, C[19] = q, C[20] = O, C[21] = W, C[22] = B, C[23] = v) : v = C[23];
                let D = W && "overflow-hidden",
                    J = W && "fade" === U && "mask-b-from-80% mask-b-to-100%";
                C[24] !== D || C[25] !== J ? (w = (0, r.b)(D, J), C[24] = D, C[25] = J, C[26] = w) : w = C[26], C[27] !== Z || C[28] !== W ? (I = W ? {
                    maxHeight: `${Z}lh`
                } : void 0, C[27] = Z, C[28] = W, C[29] = I) : I = C[29];
                let X = O ? void 0 : G;
                return C[30] !== _ || C[31] !== W || C[32] !== H || C[33] !== B ? (j = "function" == typeof _ ? _(W ? B.slice(0, H) : B) : _, C[30] = _, C[31] = W, C[32] = H, C[33] = B, C[34] = j) : j = C[34], C[35] !== X || C[36] !== j ? (T = (0, a.jsx)("div", {
                    ref: X,
                    children: j
                }), C[35] = X, C[36] = j, C[37] = T) : T = C[37], C[38] !== v || C[39] !== w || C[40] !== I || C[41] !== T ? (S = (0, a.jsx)("div", {
                    ref: v,
                    className: w,
                    style: I,
                    children: T
                }), C[38] = v, C[39] = w, C[40] = I, C[41] = T, C[42] = S) : S = C[42], C[43] !== S || C[44] !== Y ? (k = (0, a.jsx)(h.a.Provider, {
                    value: Y,
                    children: S
                }), C[43] = S, C[44] = Y, C[45] = k) : k = C[45], C[46] !== K ? (E = K ? (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: "block",
                    children: "…"
                }) : null, C[46] = K, C[47] = E) : E = C[47], C[48] !== k || C[49] !== E ? (M = (0, a.jsxs)("div", {
                    className: "relative w-full min-w-0 text-size-chat leading-relaxed",
                    children: [k, E]
                }), C[48] = k, C[49] = E, C[50] = M) : M = C[50], C[51] !== V || C[52] !== q || C[53] !== $ || C[54] !== R ? (L = $ || "uncollapsible" === V ? null : (0, a.jsxs)(m.a, {
                    className: (0, r.b)("mt-1.5 self-start text-size-chat", "default" === R && "text-codex-description"),
                    "aria-expanded": "expanded" === V,
                    "data-thread-find-skip": !0,
                    "data-markdown-copy": "exclude",
                    color: "user-message" === R ? "ghostUserMessage" : "disclosure",
                    onClick: q,
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
                }), C[51] = V, C[52] = q, C[53] = $, C[54] = R, C[55] = L) : L = C[55], C[56] !== M || C[57] !== L ? (F = (0, a.jsxs)("div", {
                    className: "flex flex-col items-end gap-1",
                    children: [M, L]
                }), C[56] = M, C[57] = L, C[58] = F) : F = C[58], F
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