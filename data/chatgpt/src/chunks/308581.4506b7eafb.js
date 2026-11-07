export const __rspack_esm_ids = [308581];
export const __webpack_modules__ = {
    oTAj: (function(e, t, a) {
        a.d(t, {
            a: () => ee
        });
        var l = a("ABep"),
            n = a("QosV"),
            r = a("SIRb"),
            i = a("slpy"),
            s = a("BolX"),
            o = a("d0tz"),
            d = a("zd8w"),
            c = a("jqIZ"),
            m = a("B8Ul"),
            u = a("Cslg"),
            h = a("Gdjn"),
            f = a("ILTo"),
            p = a("YWcr"),
            b = a("DAFh"),
            y = a("rS3J"),
            x = a("WB4T"),
            g = a("dKZq"),
            v = a("QlrJ"),
            I = a("HOLv"),
            w = a("bf6R"),
            j = a("Bbed"),
            T = a("A9Yt"),
            S = a("FqCE"),
            k = a("WE3h"),
            E = a("TxRk"),
            F = a("e2wX"),
            _ = a("k7G6"),
            L = a("tSEg"),
            M = a("lBzi"),
            C = a("Kmy6"),
            A = a("M0Ez"),
            N = a("ZfbS"),
            z = a("drbS"),
            B = a("YRXX"),
            P = a("dQRk"),
            U = a("NcJA");

        function R(e) {
            let t, a, r, i, o = (0, n.c)(17),
                {
                    mention: d,
                    conversationId: c,
                    shouldBlockExternalEgress: m
                } = e,
                u = (0, s.y)(L.a),
                h = (0, s.z)(U.a.registration$)?.host,
                f = (0, s.z)(U.a.boundConversationId$),
                p = (0, s.x)(P.j, c);
            o[0] !== f || o[1] !== h || o[2] !== d.path || o[3] !== u || o[4] !== p ? (t = null != p && f === p ? h?.getReferenceAction?.(d.path, () => u.get(U.a.registration$)?.host === h && u.get(U.a.boundConversationId$) === p) : void 0, o[0] = f, o[1] = h, o[2] = d.path, o[3] = u, o[4] = p, o[5] = t) : t = o[5];
            let b = t;
            if (m || null == b) {
                let e;
                return o[6] !== d.label ? (e = (0, l.jsx)("span", {
                    children: d.label
                }), o[6] = d.label, o[7] = e) : e = o[7], e
            }
            return o[8] !== d.label || o[9] !== d.path ? (a = (0, y.e)({
                href: d.path,
                label: d.label
            }), o[8] = d.label, o[9] = d.path, o[10] = a) : a = o[10], o[11] !== d.label || o[12] !== a ? (r = (0, l.jsx)(E.a, {
                interactive: !0,
                dataAttributes: a,
                children: d.label
            }), o[11] = d.label, o[12] = a, o[13] = r) : r = o[13], o[14] !== b || o[15] !== r ? (i = (0, l.jsx)("button", {
                type: "button",
                onClick: b,
                children: r
            }), o[14] = b, o[15] = r, o[16] = i) : i = o[16], i
        }
        var $ = a("tHvi"),
            G = a("pdPj"),
            V = a("OWtl"),
            H = a("Kwur"),
            W = a("ZM7C"),
            q = a("gJdM"),
            K = a("iHfE"),
            O = a("OWHf"),
            X = a("t5e6");
        let Z = (0, s.q)(V.a, (e, t) => {
            let {
                get: a
            } = t, l = a(W.a);
            return {
                enabled: null != l && a(G.a),
                queryKey: ["chatgpt-reference-image-message-thumbnail", l, a(W.b), e],
                queryFn: async t => {
                    let {
                        signal: a
                    } = t;
                    return (await H.Request.safeGet("/files/library/reference-images/{reference_image_id}/thumbnail_url", {
                        additionalHeaders: null == l ? void 0 : (0, O.a)(l),
                        parameters: {
                            path: {
                                reference_image_id: e
                            }
                        },
                        signal: a
                    })).thumbnail_url
                },
                staleTime: 27e5,
                gcTime: 27e5,
                retry: !1
            }
        });

        function J(e) {
            let t, a, r, i, o = (0, n.c)(13),
                {
                    mention: d,
                    shouldBlockExternalEgress: c
                } = e,
                m = (0, s.z)(G.a);
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                enabled: !1
            }, o[0] = t) : t = o[0];
            let {
                data: u
            } = (0, s.z)(K.c, t), h = m && !c ? u?.find(e => e.id === d.referenceImageId) : void 0, f = !c && null == h;
            o[1] !== f ? (a = {
                enabled: f
            }, o[1] = f, o[2] = a) : a = o[2];
            let {
                data: p
            } = (0, s.x)(Z, d.referenceImageId, a), b = E.a, x = (0, y.e)({
                href: (0, q.b)({
                    referenceImageId: d.referenceImageId,
                    assetPointer: h?.asset_pointer,
                    thumbnailAssetPointer: h?.thumbnail_asset_pointer
                }),
                label: d.name
            });
            return o[3] !== m || o[4] !== h || o[5] !== c || o[6] !== p ? (r = m && !c && (null != h || null != p) ? (0, l.jsx)("span", {
                children: (0, l.jsx)(X.a, {
                    alt: "",
                    assetPointer: h?.asset_pointer,
                    composerThumbnailUrl: h?.thumbnail_url ?? p,
                    fallbackUrl: h?.thumbnail_url ?? p,
                    name: null,
                    size: "response",
                    thumbnailAssetPointer: h?.thumbnail_asset_pointer,
                    useComposerThumbnailCache: !0
                })
            }) : (0, l.jsx)(w.dg, {}), o[3] = m, o[4] = h, o[5] = c, o[6] = p, o[7] = r) : r = o[7], o[8] !== b || o[9] !== d.name || o[10] !== x || o[11] !== r ? (i = (0, l.jsx)(b, {
                fontWeight: "inherit",
                dataAttributes: x,
                icon: r,
                iconSizing: "authored",
                layout: "inline-flow",
                tone: "composer-reference",
                children: d.name
            }), o[8] = b, o[9] = d.name, o[10] = x, o[11] = r, o[12] = i) : i = o[12], i
        }
        var Q = a("SCbd");
        let Y = (0, j.a)(r.h, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        name: t
                    } = e;
                    return (0, l.jsx)(E.a, {
                        icon: (0, f.b)(),
                        children: t
                    })
                }
            }),
            D = (0, s.t)("ChatGptUserMessageContentScope", {
                key: e => e.tabKeyPrefix,
                parent: L.a,
                retain: {
                    max: 0
                }
            });

        function ee(e) {
            let t, a, r, i, o, c, m, u, h, f, b, y, I, w = (0, n.c)(54),
                {
                    ref: j,
                    conversationId: T,
                    hostId: S,
                    mentions: E,
                    skillMentions: F,
                    folderMentions: _,
                    referenceImageMentions: L,
                    message: C,
                    messageId: A,
                    renderMarkdown: N,
                    shouldBlockExternalEgress: B,
                    systemHintMentions: P,
                    tabKeyPrefix: U
                } = e;
            w[0] !== F ? (t = void 0 === F ? [] : F, w[0] = F, w[1] = t) : t = w[1];
            let R = t;
            w[2] !== _ ? (a = void 0 === _ ? [] : _, w[2] = _, w[3] = a) : a = w[3];
            let G = a;
            w[4] !== L ? (r = void 0 === L ? [] : L, w[4] = L, w[5] = r) : r = w[5];
            let V = r;
            if (w[6] !== G || w[7] !== E || w[8] !== V || w[9] !== R || w[10] !== C) i = [...E, ...R, ...G, ...V, ...C.includes($.a) ? (0, z.g)(C).filter(e => e.path.startsWith($.a)).map(e => ({
                ...e,
                label: (0, $.b)(e.label),
                officeSheet: !0
            })) : []].sort(el), w[6] = G, w[7] = E, w[8] = V, w[9] = R, w[10] = C, w[11] = i;
            else i = w[11];
            let H = i,
                W = (0, d.useId)();
            if (w[12] !== W) {
                let e;
                w[14] === Symbol.for("react.memo_cache_sentinel") ? (e = /[^a-z0-9-]/gi, w[14] = e) : e = w[14], o = W.replace(e, ""), w[12] = W, w[13] = o
            } else o = w[13];
            let q = `chatgpt-file-mention-${o}`;
            w[15] !== B || w[16] !== C ? (c = !B && C.includes("app://"), w[15] = B, w[16] = C, w[17] = c) : c = w[17];
            let K = c;
            w[18] !== K ? (m = {
                enabled: K
            }, w[18] = K, w[19] = m) : m = w[19];
            let {
                data: O
            } = (0, s.z)(M.m, m);
            if (w[20] !== K || w[21] !== P || w[22] !== O || w[23] !== C) {
                if (u = [], K && null != O)
                    for (let e of (0, z.g)(C)) {
                        let t = O[e.path];
                        null != t && u.push({
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
                u.push(...P), w[20] = K, w[21] = P, w[22] = O, w[23] = C, w[24] = u
            } else u = w[24];
            w[25] !== q ? (h = {
                [q]: en
            }, w[25] = q, w[26] = h) : h = w[26];
            let X = h;
            w[27] !== H || w[28] !== u || w[29] !== C ? (f = e => {
                if (e.length === C.length) return C;
                let t = [...H, ...u].reduce(ea, e.length);
                return C.slice(0, t)
            }, w[27] = H, w[28] = u, w[29] = C, w[30] = f) : f = w[30];
            let Z = f;
            return w[31] !== T || w[32] !== S || w[33] !== H || w[34] !== A || w[35] !== u || w[36] !== B || w[37] !== U || w[38] !== C ? (b = {
                conversationId: T,
                hostId: S,
                message: C,
                messageId: A,
                mentions: H,
                shouldBlockExternalEgress: B,
                systemHintMentions: u,
                tabKeyPrefix: U
            }, w[31] = T, w[32] = S, w[33] = H, w[34] = A, w[35] = u, w[36] = B, w[37] = U, w[38] = C, w[39] = b) : b = w[39], w[40] !== q || w[41] !== X || w[42] !== Z || w[43] !== S || w[44] !== H || w[45] !== j || w[46] !== N || w[47] !== u || w[48] !== B || w[49] !== C ? (y = N ? (0, l.jsx)(x.a, {
                ref: j,
                cwd: null,
                directives: X,
                hostId: S,
                hasSerializedParagraphs: !0,
                renderMath: !1,
                serializeVisibleText: e => es(Z(e), H, u).map(e => "text" === e.kind ? e.text : `:${q}{kind="${e.kind}" index="${String(e.index)}"}`).join(""),
                text: C
            }) : (0, l.jsx)(g.a, {
                text: C,
                textTone: "user-message",
                children: e => {
                    let t = Z(e),
                        a = es(t, H, u);
                    return (0, l.jsx)("div", {
                        ref: a.some(et) ? j : void 0,
                        className: "text-size-chat whitespace-pre-wrap",
                        dir: "auto",
                        children: a.map((e, a) => "text" === e.kind ? (0, l.jsx)(v.a, {
                            renderLink: e => "text" === (0, p.x)(e) ? null : B ? e.label : (0, k.b)({
                                ...e,
                                hostId: S,
                                cwd: null
                            }),
                            sourceStartIndex: e.startIndex,
                            sourceText: t,
                            text: e.text
                        }, a) : (0, l.jsx)(en, {
                            name: q,
                            attributes: {
                                kind: e.kind,
                                index: String(e.index)
                            }
                        }, a))
                    })
                }
            }), w[40] = q, w[41] = X, w[42] = Z, w[43] = S, w[44] = H, w[45] = j, w[46] = N, w[47] = u, w[48] = B, w[49] = C, w[50] = y) : y = w[50], w[51] !== b || w[52] !== y ? (I = (0, l.jsx)(s.b, {
                scope: D,
                value: b,
                children: y
            }), w[51] = b, w[52] = y, w[53] = I) : I = w[53], I
        }

        function et(e) {
            return "text" !== e.kind
        }

        function ea(e, t) {
            return t.startIndex < e && t.endIndex > e ? Math.min(e, t.startIndex) : e
        }

        function el(e, t) {
            return e.startIndex - t.startIndex
        }

        function en(e) {
            let t, a = (0, n.c)(66),
                {
                    attributes: r
                } = e,
                {
                    value: o
                } = (0, s.y)(D),
                m = (0, s.z)(u.f),
                p = (0, s.z)(u.k);
            a[0] !== r.index ? (t = "string" == typeof r.index ? Number.parseInt(r.index, 10) : 0 / 0, a[0] = r.index, a[1] = t) : t = a[1];
            let b = t;
            if ("system-hint" === r.kind) {
                let e, t = o.systemHintMentions[b];
                return a[2] !== t ? (e = null == t ? null : (0, l.jsx)(er, {
                    mention: t
                }), a[2] = t, a[3] = e) : e = a[3], e
            }
            let x = o.mentions[b];
            if (null == x) return null;
            if ("officeSheet" in x) {
                let e;
                return a[4] !== x || a[5] !== o.conversationId || a[6] !== o.shouldBlockExternalEgress ? (e = (0, l.jsx)(R, {
                    mention: x,
                    conversationId: o.conversationId,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress
                }), a[4] = x, a[5] = o.conversationId, a[6] = o.shouldBlockExternalEgress, a[7] = e) : e = a[7], e
            }
            if ("referenceImageId" in x) {
                let e;
                return a[8] !== x || a[9] !== o.shouldBlockExternalEgress ? (e = (0, l.jsx)(J, {
                    mention: x,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress
                }), a[8] = x, a[9] = o.shouldBlockExternalEgress, a[10] = e) : e = a[10], e
            }
            if ("directoryId" in x) {
                let e, t, n, r, s = x.displayPath ?? x.name;
                a[18] !== x.directoryId || a[19] !== x.name ? (e = (0, y.e)({
                    href: (0, S.f)(x.directoryId),
                    label: x.name
                }), a[18] = x.directoryId, a[19] = x.name, a[20] = e) : e = a[20];
                let d = e;
                a[21] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, l.jsx)(w.wd, {}), a[21] = t) : t = a[21], a[22] !== x.name ? (n = (0, l.jsxs)(l.Fragment, {
                    children: [t, (0, l.jsx)("span", {
                        className: "max-w-64 self-baseline truncate",
                        children: x.name
                    })]
                }), a[22] = x.name, a[23] = n) : n = a[23];
                let m = n;
                return a[24] !== m || a[25] !== d || a[26] !== s || a[27] !== x.directoryId || a[28] !== x.displayPath || a[29] !== o.shouldBlockExternalEgress ? (r = null == x.displayPath || o.shouldBlockExternalEgress ? (0, l.jsx)("span", {
                    ...d,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    title: s,
                    children: m
                }) : (0, l.jsx)(i.a, {
                    content: s,
                    children: (0, l.jsx)(c.g, {
                        ...d,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap underline decoration-dotted underline-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        to: `/library/d/${encodeURIComponent(x.directoryId)}`,
                        "aria-label": s,
                        children: m
                    })
                }), a[24] = m, a[25] = d, a[26] = s, a[27] = x.directoryId, a[28] = x.displayPath, a[29] = o.shouldBlockExternalEgress, a[30] = r) : r = a[30], r
            }
            if ("name" in x) {
                let e, t, n, r, i;
                a[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, f.b)(), a[31] = e) : e = a[31], a[32] !== x.name ? (t = (0, l.jsx)(E.a, {
                    icon: e,
                    children: x.name
                }), a[32] = x.name, a[33] = t) : t = a[33];
                let s = t;
                return a[34] !== m || a[35] !== x.id || a[36] !== x.name || a[37] !== p ? (n = (0, y.e)({
                    href: null == m ? void 0 : (0, h.a)(x.id, {
                        accountId: m,
                        userId: p
                    }),
                    label: `@${x.name}`
                }), a[34] = m, a[35] = x.id, a[36] = x.name, a[37] = p, a[38] = n) : n = a[38], a[39] !== s || a[40] !== x.id || a[41] !== x.name || a[42] !== o.hostId || a[43] !== o.shouldBlockExternalEgress ? (r = o.shouldBlockExternalEgress ? s : (0, l.jsx)(d.Suspense, {
                    fallback: s,
                    children: (0, l.jsx)(Y, {
                        id: x.id,
                        name: x.name,
                        hostId: o.hostId
                    })
                }), a[39] = s, a[40] = x.id, a[41] = x.name, a[42] = o.hostId, a[43] = o.shouldBlockExternalEgress, a[44] = r) : r = a[44], a[45] !== n || a[46] !== r ? (i = (0, l.jsx)("span", {
                    ...n,
                    children: r
                }), a[45] = n, a[46] = r, a[47] = i) : i = a[47], i
            }
            if ("attachment" in x) {
                let e, t, n, {
                        attachment: r
                    } = x,
                    i = r.mountedLibraryFileId ?? r.libraryFileId;
                a[48] !== r.fileId || a[49] !== r.libraryArtifactType || a[50] !== r.mimeType || a[51] !== r.mountedLibraryMimeType || a[52] !== i || a[53] !== x.endIndex || a[54] !== x.startIndex || a[55] !== o.message ? (e = (0, y.e)({
                    href: null == i ? void 0 : (0, S.c)({
                        fileId: r.fileId ?? "",
                        libraryFileId: i,
                        libraryArtifactType: r.libraryArtifactType ?? "",
                        mimeType: r.mountedLibraryMimeType ?? r.mimeType ?? ""
                    }),
                    label: o.message.slice(x.startIndex, x.endIndex).replace(/^@/, "")
                }), a[48] = r.fileId, a[49] = r.libraryArtifactType, a[50] = r.mimeType, a[51] = r.mountedLibraryMimeType, a[52] = i, a[53] = x.endIndex, a[54] = x.startIndex, a[55] = o.message, a[56] = e) : e = a[56];
                let s = `${o.tabKeyPrefix}:${String(b)}:${r.name}`;
                return a[57] !== r || a[58] !== s || a[59] !== o.conversationId || a[60] !== o.messageId || a[61] !== o.shouldBlockExternalEgress ? (t = (0, l.jsx)(B.a, {
                    attachment: r,
                    conversationId: o.conversationId,
                    messageId: o.messageId,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress,
                    tabKey: s,
                    variant: "inline"
                }), a[57] = r, a[58] = s, a[59] = o.conversationId, a[60] = o.messageId, a[61] = o.shouldBlockExternalEgress, a[62] = t) : t = a[62], a[63] !== e || a[64] !== t ? (n = (0, l.jsx)("span", {
                    ...e,
                    children: t
                }), a[63] = e, a[64] = t, a[65] = n) : n = a[65], n
            }
            return null
        }

        function er(e) {
            let t, a = (0, n.c)(8),
                {
                    mention: r
                } = e;
            if (null != (0, p.z)(r.id)) {
                let e, t;
                return a[0] !== r.id || a[1] !== r.label ? (e = (0, y.e)({
                    href: r.id,
                    label: r.label
                }), a[0] = r.id, a[1] = r.label, a[2] = e) : e = a[2], a[3] !== r.label || a[4] !== e ? (t = (0, l.jsx)(E.a, {
                    dataAttributes: e,
                    icon: T.a,
                    layout: "selection-pill",
                    title: r.label,
                    children: r.label
                }), a[3] = r.label, a[4] = e, a[5] = t) : t = a[5], t
            }
            return a[6] !== r ? (t = (0, l.jsx)(ei, {
                mention: r
            }), a[6] = r, a[7] = t) : t = a[7], t
        }

        function ei(e) {
            let t, a, r, i, d, u, h, f, x, g, v, w, j, T, S = (0, n.c)(47),
                {
                    mention: k
                } = e,
                {
                    value: L
                } = (0, s.y)(D),
                z = !L.shouldBlockExternalEgress && null == k.systemHint;
            S[0] !== z ? (t = {
                enabled: z
            }, S[0] = z, S[1] = t) : t = S[1];
            let {
                data: B
            } = (0, s.z)(M.m, t);
            S[2] !== k.id || S[3] !== L.shouldBlockExternalEgress ? (i = k.id.replace(/^(?:connector|plugin):/u, ""), a = (0, A.g)(i), r = !L.shouldBlockExternalEgress && /^(?:connector|plugin):.+/u.test(k.id) && null == a, d = k.id.startsWith("plugin:") && (0, o.Zh)(i) ? i : null, S[2] = k.id, S[3] = L.shouldBlockExternalEgress, S[4] = a, S[5] = r, S[6] = i, S[7] = d) : (a = S[4], r = S[5], i = S[6], d = S[7]);
            let P = d;
            S[8] === Symbol.for("react.memo_cache_sentinel") ? (u = {
                enabled: !1
            }, S[8] = u) : u = S[8];
            let U = (0, s.x)(N.b, i, u),
                R = r ? P ?? U : null;
            S[9] !== k.systemHint || S[10] !== i || S[11] !== B || S[12] !== L.shouldBlockExternalEgress ? (h = L.shouldBlockExternalEgress ? void 0 : k.systemHint ?? B?.[(0, p.c)(i)], S[9] = k.systemHint, S[10] = i, S[11] = B, S[12] = L.shouldBlockExternalEgress, S[13] = h) : h = S[13];
            let $ = h;
            S[14] !== $?.name || S[15] !== i ? (f = (0, m.c)(i) ?? (0, m.c)($?.name), S[14] = $?.name, S[15] = i, S[16] = f) : f = S[16];
            let G = f,
                V = a ?? G?.icon;
            if (null == V && G?.iconUrl) {
                let e;
                S[17] !== G.iconUrl ? (e = (0, l.jsx)("img", {
                    alt: "",
                    src: G.iconUrl
                }), S[17] = G.iconUrl, S[18] = e) : e = S[18], V = e
            }
            if (null == V) {
                let e;
                S[19] !== $ ? (e = $?.logo ? (0, l.jsx)(C.a, {
                    logo: $.logo
                }) : (0, l.jsx)(I.a, {
                    asset: Q.a
                }), S[19] = $, S[20] = e) : e = S[20], V = e
            }
            if (S[21] !== k.id || S[22] !== k.label || S[23] !== k.promptLink || S[24] !== i) {
                let e = b.d.shape.systemHint.safeParse(k.id);
                x = E.a, g = y.e, v = k.promptLink ?? {
                    href: e.success ? (0, b.g)(e.data) : (0, p.c)(i),
                    label: e.success ? k.label : `@${k.label}`
                }, S[21] = k.id, S[22] = k.label, S[23] = k.promptLink, S[24] = i, S[25] = x, S[26] = g, S[27] = v
            } else x = S[25], g = S[26], v = S[27];
            S[28] !== g || S[29] !== v ? (w = g(v), S[28] = g, S[29] = v, S[30] = w) : w = S[30];
            let H = G?.name ?? $?.name ?? k.label;
            S[31] !== x || S[32] !== r || S[33] !== V || S[34] !== H || S[35] !== w ? (j = (0, l.jsx)(x, {
                dataAttributes: w,
                icon: V,
                interactive: r,
                layout: "selection-pill",
                children: H
            }), S[31] = x, S[32] = r, S[33] = V, S[34] = H, S[35] = w, S[36] = j) : j = S[36];
            let W = j;
            if (!r) return W;
            if (null == R && k.id.startsWith("plugin:") && null != (0, o.Rg)(i)) {
                let e, t;
                return S[37] !== i || S[38] !== L.hostId ? (e = (0, _.a)({
                    pluginId: i,
                    hostId: L.hostId
                }), S[37] = i, S[38] = L.hostId, S[39] = e) : e = S[39], S[40] !== W || S[41] !== e ? (t = (0, l.jsx)(c.g, {
                    className: "inline cursor-interaction bg-transparent p-0 text-start align-baseline",
                    to: e,
                    children: W
                }), S[40] = W, S[41] = e, S[42] = t) : t = S[42], t
            }
            return S[43] !== W || S[44] !== R || S[45] !== i ? (T = (0, l.jsx)(F.a, {
                appId: i,
                pluginId: R,
                children: W
            }), S[43] = W, S[44] = R, S[45] = i, S[46] = T) : T = S[46], T
        }

        function es(e, t, a) {
            let l = [...t.map((e, t) => ({
                    ...e,
                    index: t,
                    kind: "inline"
                })), ...a.map((e, t) => ({
                    ...e,
                    index: t,
                    kind: "system-hint"
                }))].sort((e, t) => e.startIndex - t.startIndex || t.endIndex - e.endIndex),
                n = [],
                r = 0;
            for (let t of l) t.startIndex < r || t.endIndex > e.length || (n.push({
                kind: "text",
                startIndex: r,
                text: e.slice(r, t.startIndex)
            }, {
                kind: t.kind,
                index: t.index
            }), r = t.endIndex);
            return n.push({
                kind: "text",
                startIndex: r,
                text: e.slice(r)
            }), n
        }
    }),
    YRXX: (function(e, t, a) {
        a.d(t, {
            a: () => Q,
            b: () => Z
        });
        var l = a("ABep"),
            n = a("QosV"),
            r = a("Rzcw"),
            i = a("BolX"),
            s = a("zd8w"),
            o = a("oyxz"),
            d = a("Cslg"),
            c = a("rS3J"),
            m = a("ZtSy"),
            u = a("Bbed"),
            h = a("VL1D"),
            f = a("RNul"),
            p = a("SGsN"),
            b = a("R1rp"),
            y = a("FqCE"),
            x = a("UxLW"),
            g = a("ulpJ"),
            v = a("L9GI"),
            I = a("MExO"),
            w = a("tSEg"),
            j = a("hZax"),
            T = a("WFY2"),
            S = a("ug4w"),
            k = a("YJm0"),
            E = a("DrWu"),
            F = a("dQRk"),
            _ = a("rxj0"),
            L = a("Ul98"),
            M = a("f2PP"),
            C = a("slpy"),
            A = a("T0Rc"),
            N = a("Wf1j"),
            z = a("Sm6l"),
            B = a("HOLv"),
            P = a("UzPs"),
            U = a("rvFo"),
            R = a("zsxQ"),
            $ = a("vldH"),
            G = a("fi73"),
            V = a("AtSM");

        function H(e) {
            let t, a, r, s, d, c, m, u, h, y, x, g, v, I, j, S, k, E, L, H, K, O, X = (0, n.c)(86),
                {
                    attachment: Z,
                    conversationId: J,
                    tabKey: Q,
                    target: Y
                } = e,
                D = (0, i.y)(w.a),
                ee = (0, N.a)();
            X[0] !== J || X[1] !== D ? (t = D.get(F.S, J), X[0] = J, X[1] = D, X[2] = t) : t = X[2];
            let et = t;
            X[3] !== J || X[4] !== D ? (a = D.get(F.Z, J), X[3] = J, X[4] = D, X[5] = a) : a = X[5];
            let ea = a;
            X[6] !== J || X[7] !== Q ? (r = ["chatgpt-user-message-csv-preview", J, Q], X[6] = J, X[7] = Q, X[8] = r) : r = X[8], X[9] !== J || X[10] !== et || X[11] !== ea || X[12] !== Y ? (s = async e => {
                let {
                    signal: t
                } = e, a = await (0, $.fetchChatGptFileBlob)({
                    conversationId: J,
                    gizmoId: et,
                    sharedConversationId: ea,
                    signal: t,
                    target: Y
                });
                if (a.size > 1e6) throw Error("ChatGPT CSV attachment exceeds the preview size limit");
                let l = await a.text();
                return t.throwIfAborted(),
                    function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e6,
                            a = 1,
                            l = 1,
                            n = 1,
                            r = 1,
                            i = !1;
                        for (let t = 0; t < e.length; t += 1) {
                            let s = e[t];
                            if ('"' === s) {
                                i && '"' === e[t + 1] ? t += 1 : i = !i;
                                continue
                            }
                            if (!i && ("," === s ? (a += 1, l = Math.max(l, a), r += 1) : ("\n" === s || "\r" === s) && ("\r" === s && "\n" === e[t + 1] && (t += 1), a = 1, n += 1, r += 1), a > 100 || n > 1e4 || r > 1e5)) throw Error("CSV exceeds preview shape limits")
                        }
                        if (n * l > t) throw Error("CSV exceeds preview shape limits");
                        return (0, P.planCsvImport)(e).values
                    }(l)
            }, X[9] = J, X[10] = et, X[11] = ea, X[12] = Y, X[13] = s) : s = X[13], X[14] !== r || X[15] !== s ? (d = {
                queryKey: r,
                queryFn: s,
                retry: !1,
                staleTime: U.b.FIVE_MINUTES
            }, X[14] = r, X[15] = s, X[16] = d) : d = X[16];
            let {
                data: el,
                isError: en,
                isLoading: er,
                refetch: ei
            } = (0, A.a)(d);
            X[17] !== Z.name ? (c = (Z.name.split("/").at(-1) ?? "").replace(/[-_]/gu, " ").split(".")[0] ?? "", X[17] = Z.name, X[18] = c) : c = X[18];
            let es = c;
            X[19] !== Z.name || X[20] !== ee ? (m = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.download",
                defaultMessage: "Download {filename}",
                description: "Accessible label for a compact icon button in an inline CSV attachment preview. Activating the button downloads the named file. {filename} is the original user-visible filename and may be truncated elsewhere in the preview."
            }, {
                filename: Z.name
            }), X[19] = Z.name, X[20] = ee, X[21] = m) : m = X[21];
            let eo = m;
            X[22] !== Z.name || X[23] !== ee ? (u = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.open",
                defaultMessage: "Open {filename}",
                description: "Accessible label for a compact icon button in an inline CSV attachment preview. Activating the button opens the named file in the full file preview. {filename} is the original user-visible filename and may be truncated elsewhere in the preview."
            }, {
                filename: Z.name
            }), X[22] = Z.name, X[23] = ee, X[24] = u) : u = X[24];
            let ed = u;
            X[25] !== Z.name || X[26] !== J || X[27] !== et || X[28] !== D || X[29] !== ea || X[30] !== Y ? (h = () => {
                (0, $.a)({
                    conversationId: J,
                    fileName: Z.name,
                    gizmoId: et,
                    sharedConversationId: ea,
                    target: Y
                }).catch(e => {
                    T.a.error("ChatGPT CSV attachment failed to download", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), D.get(p.f).danger((0, l.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.downloadFailed",
                        defaultMessage: "Couldn't download this file. Try again",
                        description: "Error shown when an attached CSV file cannot be downloaded from its inline preview"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgpt.userMessage.csvPreview.downloadFailed"
                        }
                    })
                })
            }, X[25] = Z.name, X[26] = J, X[27] = et, X[28] = D, X[29] = ea, X[30] = Y, X[31] = h) : h = X[31];
            let ec = h;
            X[32] !== Z.isSharedLibraryFile || X[33] !== Z.mimeType || X[34] !== Z.name || X[35] !== J || X[36] !== et || X[37] !== D || X[38] !== ea || X[39] !== Q || X[40] !== Y ? (y = () => {
                (0, M.openChatGptFile)(D, {
                    isAccessBlocked: e => (0, _.i)(e, J) || !0 === Z.isSharedLibraryFile && e.get(b.d),
                    browserPreview: (0, R.a)(Z.name, Z.mimeType),
                    conversationId: J,
                    fileName: Z.name,
                    mimeType: Z.mimeType,
                    gizmoId: et,
                    sharedConversationId: ea,
                    tabKey: Q,
                    target: Y
                }).catch(W)
            }, X[32] = Z.isSharedLibraryFile, X[33] = Z.mimeType, X[34] = Z.name, X[35] = J, X[36] = et, X[37] = D, X[38] = ea, X[39] = Q, X[40] = Y, X[41] = y) : y = X[41];
            let em = y;
            if (er) {
                let e, t;
                X[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)(f.a, {
                    "aria-hidden": !0
                }), X[42] = e) : e = X[42], X[43] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, l.jsxs)("div", {
                    className: "flex h-full items-center justify-center",
                    children: [e, (0, l.jsx)("span", {
                        className: "sr-only",
                        children: (0, l.jsx)(o.a, {
                            id: "chatgpt.userMessage.csvPreview.loading",
                            defaultMessage: "Loading table preview",
                            description: "Screen-reader status announced while an inline preview of an attached CSV file is loading in a ChatGPT conversation"
                        })
                    })]
                }), X[43] = t) : t = X[43], x = t
            } else if (en) {
                let e, t, a, n;
                X[44] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, l.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.error",
                        defaultMessage: "Unable to display table preview",
                        description: "Error message shown inside an attached CSV file preview when the table could not be downloaded or parsed"
                    })
                }), X[44] = e) : e = X[44], X[45] !== ei ? (t = () => void ei(), X[45] = ei, X[46] = t) : t = X[46], X[47] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, l.jsx)(o.a, {
                    id: "chatgpt.userMessage.csvPreview.retry",
                    defaultMessage: "Try again",
                    description: "Button label for retrying a failed inline CSV attachment preview in a ChatGPT conversation"
                }), X[47] = a) : a = X[47], X[48] !== t ? (n = (0, l.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-3 px-4 text-center",
                    role: "alert",
                    children: [e, (0, l.jsx)(z.a, {
                        color: "secondary",
                        onClick: t,
                        children: a
                    })]
                }), X[48] = t, X[49] = n) : n = X[49], x = n
            } else if (null == el || 0 === el.length) {
                let e;
                X[50] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, l.jsx)("div", {
                    className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondary",
                    children: (0, l.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.empty",
                        defaultMessage: "This CSV file is empty",
                        description: "Empty state shown inside an inline CSV attachment preview when the file contains no rows"
                    })
                }), X[50] = e) : e = X[50], x = e
            } else {
                let e, t, a;
                X[51] !== el[0] ? (e = el[0] ?? [], X[51] = el[0], X[52] = e) : e = X[52], X[53] !== el ? (t = el.slice(1), X[53] = el, X[54] = t) : t = X[54], X[55] !== e || X[56] !== t ? (a = (0, l.jsx)(q, {
                    columnNames: e,
                    rows: t
                }), X[55] = e, X[56] = t, X[57] = a) : a = X[57], x = a
            }
            return X[58] !== es ? (g = (0, l.jsx)("span", {
                className: "truncate font-semibold text-default capitalize",
                children: es
            }), X[58] = es, X[59] = g) : g = X[59], X[60] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, l.jsx)(B.a, {
                asset: G.a
            }), X[60] = v) : v = X[60], X[61] !== eo || X[62] !== ec ? (I = (0, l.jsx)(z.a, {
                "aria-label": eo,
                color: "ghost",
                onClick: ec,
                size: "iconCircleSm",
                children: v
            }), X[61] = eo, X[62] = ec, X[63] = I) : I = X[63], X[64] !== eo || X[65] !== I ? (j = (0, l.jsx)(C.a, {
                content: eo,
                children: I
            }), X[64] = eo, X[65] = I, X[66] = j) : j = X[66], X[67] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, l.jsx)(B.a, {
                asset: V.a
            }), X[67] = S) : S = X[67], X[68] !== em || X[69] !== ed ? (k = (0, l.jsx)(z.a, {
                "aria-label": ed,
                color: "ghost",
                onClick: em,
                size: "iconCircleSm",
                children: S
            }), X[68] = em, X[69] = ed, X[70] = k) : k = X[70], X[71] !== ed || X[72] !== k ? (E = (0, l.jsx)(C.a, {
                content: ed,
                children: k
            }), X[71] = ed, X[72] = k, X[73] = E) : E = X[73], X[74] !== j || X[75] !== E ? (L = (0, l.jsxs)("span", {
                className: "flex items-center gap-2",
                children: [j, E]
            }), X[74] = j, X[75] = E, X[76] = L) : L = X[76], X[77] !== g || X[78] !== L ? (H = (0, l.jsxs)("header", {
                className: "flex h-12 items-center justify-between gap-2 px-4 select-none",
                children: [g, L]
            }), X[77] = g, X[78] = L, X[79] = H) : H = X[79], X[80] !== x ? (K = (0, l.jsx)("div", {
                className: "h-72 border-t border-default",
                children: x
            }), X[80] = x, X[81] = K) : K = X[81], X[82] !== Z.name || X[83] !== H || X[84] !== K ? (O = (0, l.jsxs)("section", {
                className: "w-full overflow-hidden rounded-2xl border border-default bg-surface",
                "aria-label": Z.name,
                children: [H, K]
            }), X[82] = Z.name, X[83] = H, X[84] = K, X[85] = O) : O = X[85], O
        }

        function W(e) {
            T.a.error("ChatGPT CSV attachment failed to open", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function q(e) {
            let t, a, r, i, o, d, c, m, u, h, f, p, b = (0, n.c)(40),
                {
                    columnNames: y,
                    rows: x
                } = e,
                [g, v] = (0, s.useState)(0),
                I = Math.max(0, Math.floor(g / 40) - 5),
                w = Math.min(x.length, I + 18);
            if (b[0] !== y || b[1] !== I || b[2] !== w || b[3] !== x) {
                let e, n, s, u, h = x.slice(I, w),
                    f = 40 * I;
                t = (x.length - w) * 40, b[12] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                    v(e.currentTarget.scrollTop)
                }, b[12] = e) : e = b[12], c = "h-full overflow-auto", m = e, i = "min-w-full border-separate border-spacing-0 text-start text-sm", o = x.length + 1, b[13] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, l.jsx)("th", {
                    className: "sticky start-0 top-0 z-20 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                    "aria-hidden": !0
                }), b[13] = n) : n = b[13], b[14] !== y ? (s = y.map(K), b[14] = y, b[15] = s) : s = b[15], b[16] !== s ? (d = (0, l.jsx)("thead", {
                    children: (0, l.jsxs)("tr", {
                        "aria-rowindex": 1,
                        children: [n, s]
                    })
                }), b[16] = s, b[17] = d) : d = b[17], b[18] !== y.length || b[19] !== f ? (a = f > 0 ? (0, l.jsx)("tr", {
                    "aria-hidden": !0,
                    children: (0, l.jsx)("td", {
                        colSpan: y.length + 1,
                        style: {
                            height: f
                        }
                    })
                }) : null, b[18] = y.length, b[19] = f, b[20] = a) : a = b[20], b[21] !== y || b[22] !== I ? (u = (e, t) => {
                    let a = I + t;
                    return (0, l.jsxs)("tr", {
                        "aria-rowindex": a + 2,
                        children: [(0, l.jsx)("th", {
                            className: "sticky start-0 z-10 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                            scope: "row",
                            children: a + 1
                        }), y.map((t, a) => {
                            let n = e[a] ?? "";
                            return (0, l.jsx)("td", {
                                className: "h-10 min-w-32 border-e border-b border-default px-3 text-default last:border-e-0",
                                title: n,
                                children: (0, l.jsx)("span", {
                                    className: "block max-w-80 truncate",
                                    children: n
                                })
                            }, a)
                        })]
                    }, a)
                }, b[21] = y, b[22] = I, b[23] = u) : u = b[23], r = h.map(u), b[0] = y, b[1] = I, b[2] = w, b[3] = x, b[4] = t, b[5] = a, b[6] = r, b[7] = i, b[8] = o, b[9] = d, b[10] = c, b[11] = m
            } else t = b[4], a = b[5], r = b[6], i = b[7], o = b[8], d = b[9], c = b[10], m = b[11];
            return b[24] !== t || b[25] !== y.length ? (u = t > 0 ? (0, l.jsx)("tr", {
                "aria-hidden": !0,
                children: (0, l.jsx)("td", {
                    colSpan: y.length + 1,
                    style: {
                        height: t
                    }
                })
            }) : null, b[24] = t, b[25] = y.length, b[26] = u) : u = b[26], b[27] !== a || b[28] !== r || b[29] !== u ? (h = (0, l.jsxs)("tbody", {
                children: [a, r, u]
            }), b[27] = a, b[28] = r, b[29] = u, b[30] = h) : h = b[30], b[31] !== i || b[32] !== o || b[33] !== d || b[34] !== h ? (f = (0, l.jsxs)("table", {
                className: i,
                "aria-rowcount": o,
                children: [d, h]
            }), b[31] = i, b[32] = o, b[33] = d, b[34] = h, b[35] = f) : f = b[35], b[36] !== f || b[37] !== c || b[38] !== m ? (p = (0, l.jsx)("div", {
                className: c,
                onScroll: m,
                children: f
            }), b[36] = f, b[37] = c, b[38] = m, b[39] = p) : p = b[39], p
        }

        function K(e, t) {
            return (0, l.jsx)("th", {
                className: "sticky top-0 z-10 h-10 min-w-32 border-e border-b border-default bg-surface-secondary px-3 text-start font-semibold text-default last:border-e-0",
                scope: "col",
                title: e,
                children: (0, l.jsx)("span", {
                    className: "block max-w-80 truncate",
                    children: e
                })
            }, `${e}-${String(t)}`)
        }

        function O(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e.isSharedLibraryFile && !t) return null;
            if (null != e.mountedLibraryFileId) return {
                fileName: e.name,
                mimeType: e.mountedLibraryMimeType ?? e.mimeType ?? void 0,
                mountedLibraryFileId: e.mountedLibraryFileId,
                sourceUrl: e.sourceUrl,
                type: "mounted-library"
            };
            let a = (0, $.i)(e.downloadUrl);
            return null != a ? {
                downloadUrl: a,
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
        let X = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(469955)]).then(a.bind(a, "lUP2"))).ChatGptUserMessageAudioAttachment);

        function Z(e) {
            let t, a, r, s, o = (0, n.c)(15),
                {
                    attachments: c,
                    conversationId: m,
                    messageId: u,
                    shouldBlockExternalEgress: h,
                    tabKeyPrefix: f
                } = e,
                {
                    accountId: p
                } = (0, i.z)(d.m),
                y = (0, i.z)(b.c),
                {
                    data: x
                } = (0, i.x)(k.a, p);
            o[0] !== x?.features || o[1] !== h ? (t = !h && x?.features?.includes("graphite") === !0, o[0] = x?.features, o[1] = h, o[2] = t) : t = o[2];
            let g = t;
            if (o[3] !== c || o[4] !== m || o[5] !== u || o[6] !== y || o[7] !== h || o[8] !== g || o[9] !== f) {
                let e = g ? c.flatMap((e, t) => {
                        let a = O(e, y);
                        return e.name.trim().toLowerCase().endsWith(".csv") && null != e.sizeBytes && e.sizeBytes <= 1e6 && null != a ? [{
                            attachment: e,
                            attachmentIndex: t,
                            target: a
                        }] : []
                    }) : [],
                    t = new Set(e.map(J)),
                    n = c.flatMap((e, a) => t.has(a) ? [] : [{
                        attachment: e,
                        attachmentIndex: a
                    }]);
                a = n.length > 0 ? (0, l.jsx)("div", {
                    className: "flex w-full flex-wrap justify-end gap-2 self-end md:w-4/5",
                    children: n.map(e => {
                        let {
                            attachment: t,
                            attachmentIndex: a
                        } = e;
                        return (0, l.jsx)(Q, {
                            attachment: t,
                            conversationId: m,
                            messageId: u,
                            shouldBlockExternalEgress: h,
                            tabKey: `${f}:${String(a)}:${t.name}`
                        }, `${t.name}-${String(a)}`)
                    })
                }) : null, r = e.length > 0 ? (0, l.jsx)("div", {
                    className: "flex w-full flex-col gap-2 self-end md:w-4/5",
                    children: e.map(e => {
                        let {
                            attachment: t,
                            attachmentIndex: a,
                            target: n
                        } = e;
                        return (0, l.jsx)(H, {
                            attachment: t,
                            conversationId: m,
                            tabKey: `${f}:${String(a)}:${t.name}`,
                            target: n
                        }, `${t.name}-${String(a)}`)
                    })
                }) : null, o[3] = c, o[4] = m, o[5] = u, o[6] = y, o[7] = h, o[8] = g, o[9] = f, o[10] = a, o[11] = r
            } else a = o[10], r = o[11];
            return o[12] !== a || o[13] !== r ? (s = (0, l.jsxs)(l.Fragment, {
                children: [a, r]
            }), o[12] = a, o[13] = r, o[14] = s) : s = o[14], s
        }

        function J(e) {
            let {
                attachmentIndex: t
            } = e;
            return t
        }

        function Q(e) {
            let t, a, d, u, k, C, A, N, z, B, P, U, R, $, G, V, H, W, q, K, Z, J, Q, Y, D = (0, n.c)(137),
                {
                    attachment: ee,
                    conversationId: et,
                    messageId: ea,
                    shouldBlockExternalEgress: el,
                    tabKey: en,
                    variant: er
                } = e,
                ei = void 0 === er ? "card" : er,
                es = (0, i.y)(w.a),
                eo = (0, j.k)(),
                ed = (0, i.x)(F.y, et),
                [ec, em] = (0, s.useState)(!1),
                eu = (0, s.useRef)(null);
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => eu.current?.abort(), a = [], D[0] = t, D[1] = a) : (t = D[0], a = D[1]), (0, s.useEffect)(t, a);
            let eh = (0, i.z)(b.d);
            if (D[2] !== ee || D[3] !== ed || D[4] !== eh || D[5] !== el || D[6] !== eo || D[7] !== ei) {
                let e;
                N = O(ee, !eh), u = !el && null != N, k = "card" === ei && "tpp" !== ed && "flora" !== ed && !el && null != N && (0, S.d)({
                    fileName: ee.name,
                    mimeType: ee.mountedLibraryMimeType ?? ee.mimeType
                }), d = eo.checkGate("2666007232", {
                    disableExposureLog: !k
                });
                let t = ee.mountedLibraryFileId ?? ee.libraryFileId;
                D[14] !== t ? (e = (0, x.a)(t), D[14] = t, D[15] = e) : e = D[15], C = e;
                let a = u ? (0, L.a)(N, ee.name, ee.mimeType) : null;
                A = null == a ? null : (0, I.d)(a)?.sourceUrl, null != a && ee.isSourceReference && (A = ee.sourceUrl ?? A), D[2] = ee, D[3] = ed, D[4] = eh, D[5] = el, D[6] = eo, D[7] = ei, D[8] = d, D[9] = u, D[10] = k, D[11] = C, D[12] = A, D[13] = N
            } else d = D[8], u = D[9], k = D[10], C = D[11], A = D[12], N = D[13];
            D[16] !== ee.isSharedLibraryFile || D[17] !== ee.isSourceReference || D[18] !== ee.libraryArtifactType || D[19] !== ee.mimeType || D[20] !== ee.mountedLibraryFileId || D[21] !== ee.mountedLibraryMimeType || D[22] !== ee.name || D[23] !== u || D[24] !== et || D[25] !== ec || D[26] !== ea || D[27] !== es || D[28] !== A || D[29] !== en || D[30] !== N ? (z = u ? e => {
                if (ee.isSourceReference && null != A && null != ee.mountedLibraryFileId) return void(0, v.b)(es, {
                    href: A,
                    title: ee.name,
                    libraryFileId: ee.mountedLibraryFileId,
                    mimeType: ee.mimeType
                }, e, et);
                if (ec) return;
                let t = new AbortController;
                eu.current = t, em(!0), (0, M.openChatGptFile)(es, {
                    connectedFileIntent: "open",
                    interaction: e,
                    isAccessBlocked: e => (0, _.i)(e, et) || !0 === ee.isSharedLibraryFile && e.get(b.d),
                    browserPreview: !0,
                    conversationId: et,
                    messageId: ea,
                    fileName: ee.name,
                    libraryArtifactType: ee.libraryArtifactType,
                    gizmoId: es.get(F.S, et),
                    sharedConversationId: es.get(F.Z, et),
                    mimeType: ee.mountedLibraryMimeType ?? ee.mimeType,
                    signal: t.signal,
                    tabKey: en,
                    target: N
                }).catch(e => {
                    t.signal.aborted || ee.isSharedLibraryFile && es.get(b.d) || (T.a.warning("ChatGPT user attachment failed to open", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), es.get(p.f).danger((0, l.jsx)(o.a, {
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
            } : void 0, D[16] = ee.isSharedLibraryFile, D[17] = ee.isSourceReference, D[18] = ee.libraryArtifactType, D[19] = ee.mimeType, D[20] = ee.mountedLibraryFileId, D[21] = ee.mountedLibraryMimeType, D[22] = ee.name, D[23] = u, D[24] = et, D[25] = ec, D[26] = ea, D[27] = es, D[28] = A, D[29] = en, D[30] = N, D[31] = z) : z = D[31];
            let ef = z;
            D[32] !== ef ? (B = e => {
                null != ef && (e.preventDefault(), ef(e))
            }, D[32] = ef, D[33] = B) : B = D[33];
            let ep = B;
            if (k && d) {
                let e;
                return D[34] !== ee || D[35] !== et || D[36] !== N ? (e = (0, l.jsx)(X, {
                    attachment: ee,
                    conversationId: et,
                    target: N
                }), D[34] = ee, D[35] = et, D[36] = N, D[37] = e) : e = D[37], e
            }
            if ("inline" === ei) {
                let e, t, a, n, r, i, s = ee.mountedLibraryFileId ?? ee.libraryFileId;
                D[38] !== ee.fileId || D[39] !== ee.isSourceReference || D[40] !== ee.libraryArtifactType || D[41] !== ee.mimeType || D[42] !== ee.mountedLibraryMimeType || D[43] !== ee.name || D[44] !== ee.sourceUrl || D[45] !== s ? (e = null == s ? void 0 : (0, c.e)({
                    label: ee.name,
                    href: (0, y.c)({
                        fileId: ee.fileId ?? "",
                        libraryArtifactType: ee.libraryArtifactType ?? "",
                        libraryFileId: s,
                        mimeType: ee.mountedLibraryMimeType ?? ee.mimeType ?? "",
                        ...ee.isSourceReference ? {
                            sourceUrl: ee.sourceUrl,
                            serializeAsUrl: !0
                        } : {}
                    })
                }), D[38] = ee.fileId, D[39] = ee.isSourceReference, D[40] = ee.libraryArtifactType, D[41] = ee.mimeType, D[42] = ee.mountedLibraryMimeType, D[43] = ee.name, D[44] = ee.sourceUrl, D[45] = s, D[46] = e) : e = D[46];
                let o = e;
                D[47] !== ee.libraryArtifactType || D[48] !== ee.libraryFileId || D[49] !== ee.mimeType || D[50] !== ee.mountedLibraryFileId || D[51] !== ee.mountedLibraryMimeType || D[52] !== ee.name || D[53] !== ee.sourceUrl || D[54] !== ec || D[55] !== C ? (t = ec ? (0, l.jsx)(f.a, {
                    as: "span",
                    className: "size-4"
                }) : (0, l.jsx)(g.a, {
                    fileName: ee.name,
                    libraryArtifactType: ee.libraryArtifactType,
                    mimeType: ee.mimeType ?? void 0,
                    provider: C,
                    sourceMimeType: ee.mountedLibraryMimeType ?? void 0,
                    mountedLibraryFileId: ee.mountedLibraryFileId ?? ee.libraryFileId,
                    sourceUrl: ee.sourceUrl ?? void 0,
                    style: "message-inline"
                }), D[47] = ee.libraryArtifactType, D[48] = ee.libraryFileId, D[49] = ee.mimeType, D[50] = ee.mountedLibraryFileId, D[51] = ee.mountedLibraryMimeType, D[52] = ee.name, D[53] = ee.sourceUrl, D[54] = ec, D[55] = C, D[56] = t) : t = D[56], D[57] !== ee ? (a = 0 === (0, E.h)(ee).length ? ee.name : (0, E.g)(ee.name), D[57] = ee, D[58] = a) : a = D[58], D[59] !== a ? (n = (0, l.jsx)("span", {
                    className: "max-w-64 self-baseline truncate",
                    children: a
                }), D[59] = a, D[60] = n) : n = D[60], D[61] !== t || D[62] !== n ? (r = (0, l.jsxs)(l.Fragment, {
                    children: [t, n]
                }), D[61] = t, D[62] = n, D[63] = r) : r = D[63];
                let d = r;
                if (null != A) {
                    let e;
                    return D[64] !== ee.name || D[65] !== d || D[66] !== o || D[67] !== ep || D[68] !== A ? (e = (0, l.jsx)(m.a, {
                        ...o,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        "aria-label": ee.name,
                        href: A,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ee.name,
                        onUnmodifiedClick: ep,
                        children: d
                    }), D[64] = ee.name, D[65] = d, D[66] = o, D[67] = ep, D[68] = A, D[69] = e) : e = D[69], e
                }
                return D[70] !== ee.name || D[71] !== u || D[72] !== d || D[73] !== o || D[74] !== ec || D[75] !== ef ? (i = u ? (0, l.jsx)("button", {
                    ...o,
                    type: "button",
                    className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                    "aria-busy": ec,
                    "aria-label": ee.name,
                    disabled: ec,
                    onClick: ef,
                    children: d
                }) : (0, l.jsx)("span", {
                    ...o,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    children: d
                }), D[70] = ee.name, D[71] = u, D[72] = d, D[73] = o, D[74] = ec, D[75] = ef, D[76] = i) : i = D[76], i
            }
            if (D[77] !== ee.libraryArtifactType || D[78] !== ee.libraryFileId || D[79] !== ee.mimeType || D[80] !== ee.mountedLibraryFileId || D[81] !== ee.mountedLibraryMimeType || D[82] !== ee.name || D[83] !== ee.sourceUrl || D[84] !== u || D[85] !== ec || D[86] !== ef || D[87] !== ep || D[88] !== C || D[89] !== A) {
                let e = (0, r.f)({
                        fileName: ee.name,
                        mimeType: ee.mimeType ?? void 0
                    }),
                    t = null;
                if (null != A) {
                    let e;
                    D[100] !== ee.name || D[101] !== ep || D[102] !== A ? (e = (0, l.jsx)(h.b, {
                        "aria-label": ee.name,
                        href: A,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ee.name,
                        onUnmodifiedClick: ep
                    }), D[100] = ee.name, D[101] = ep, D[102] = A, D[103] = e) : e = D[103], t = e
                } else if (u) {
                    let e;
                    D[104] !== ee.name || D[105] !== ec || D[106] !== ef ? (e = (0, l.jsx)(h.b, {
                        "aria-busy": ec,
                        "aria-label": ee.name,
                        disabled: ec,
                        onClick: ef
                    }), D[104] = ee.name, D[105] = ec, D[106] = ef, D[107] = e) : e = D[107], t = e
                }
                R = h.a, G = "span", V = "file-tile", K = "group/resource-card relative", $ = t, U = h.h, W = "pointer-events-none relative z-10", D[108] !== ee.libraryArtifactType || D[109] !== ee.libraryFileId || D[110] !== ee.mimeType || D[111] !== ee.mountedLibraryFileId || D[112] !== ee.mountedLibraryMimeType || D[113] !== ee.name || D[114] !== ee.sourceUrl || D[115] !== ec || D[116] !== C ? (q = (0, l.jsx)("span", {
                    className: "flex size-10 items-center justify-center overflow-hidden rounded-xl",
                    children: ec ? (0, l.jsx)(f.a, {
                        as: "span",
                        className: "size-5"
                    }) : (0, l.jsx)(g.a, {
                        fileName: ee.name,
                        libraryArtifactType: ee.libraryArtifactType,
                        mimeType: ee.mimeType ?? void 0,
                        provider: C,
                        sourceMimeType: ee.mountedLibraryMimeType ?? void 0,
                        mountedLibraryFileId: ee.mountedLibraryFileId ?? ee.libraryFileId,
                        sourceUrl: ee.sourceUrl ?? void 0,
                        style: "message-card"
                    })
                }), D[108] = ee.libraryArtifactType, D[109] = ee.libraryFileId, D[110] = ee.mimeType, D[111] = ee.mountedLibraryFileId, D[112] = ee.mountedLibraryMimeType, D[113] = ee.name, D[114] = ee.sourceUrl, D[115] = ec, D[116] = C, D[117] = q) : q = D[117], P = o.a, H = (0, r.d)(e.category), D[77] = ee.libraryArtifactType, D[78] = ee.libraryFileId, D[79] = ee.mimeType, D[80] = ee.mountedLibraryFileId, D[81] = ee.mountedLibraryMimeType, D[82] = ee.name, D[83] = ee.sourceUrl, D[84] = u, D[85] = ec, D[86] = ef, D[87] = ep, D[88] = C, D[89] = A, D[90] = P, D[91] = U, D[92] = R, D[93] = $, D[94] = G, D[95] = V, D[96] = H, D[97] = W, D[98] = q, D[99] = K
            } else P = D[90], U = D[91], R = D[92], $ = D[93], G = D[94], V = D[95], H = D[96], W = D[97], q = D[98], K = D[99];
            D[118] !== P || D[119] !== H ? (Z = (0, l.jsx)(P, {
                ...H
            }), D[118] = P, D[119] = H, D[120] = Z) : Z = D[120];
            let eb = null == A ? ee.name : void 0;
            return D[121] !== U || D[122] !== ee.name || D[123] !== Z || D[124] !== eb || D[125] !== W || D[126] !== q ? (J = (0, l.jsx)(U, {
                className: W,
                icon: q,
                subtitle: Z,
                title: ee.name,
                titleTooltip: eb,
                variant: "file-tile"
            }), D[121] = U, D[122] = ee.name, D[123] = Z, D[124] = eb, D[125] = W, D[126] = q, D[127] = J) : J = D[127], D[128] !== $ || D[129] !== J || D[130] !== K ? (Q = (0, l.jsxs)("span", {
                className: K,
                children: [$, J]
            }), D[128] = $, D[129] = J, D[130] = K, D[131] = Q) : Q = D[131], D[132] !== R || D[133] !== G || D[134] !== V || D[135] !== Q ? (Y = (0, l.jsx)(R, {
                as: G,
                variant: V,
                children: Q
            }), D[132] = R, D[133] = G, D[134] = V, D[135] = Q, D[136] = Y) : Y = D[136], Y
        }
    }),
    Aa8X: (function(e, t, a) {
        var l = a("ABep"),
            n = a("QosV"),
            r = a("oyxz"),
            i = a("zjpG"),
            s = a("bf6R");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, d, c, m, u = (0, n.c)(14),
                    {
                        settings: h
                    } = e,
                    {
                        style_label: f,
                        aspect_ratio: p,
                        image_count: b
                    } = h;
                if (!f && null == p && null == b) return null;
                u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, l.jsxs)(l.Fragment, {
                    children: [" ", (0, l.jsx)(i.a, {}), " "]
                }), u[0] = t) : t = u[0];
                let y = t;
                u[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, l.jsx)(s.uh, {}), u[1] = a) : a = u[1], u[2] !== f ? (o = f && (0, l.jsx)("bdi", {
                    children: f
                }), u[2] = f, u[3] = o) : o = u[3];
                let x = f && null != p ? y : null;
                u[4] !== p ? (d = null != p && (0, l.jsx)("bdi", {
                    children: "auto" === p ? (0, l.jsx)(r.a, {
                        id: "chatgptConversations.imageOptions.sent.autoRatio",
                        defaultMessage: "Auto",
                        description: "Short label above a sent image prompt indicating that the image model was allowed to choose its aspect ratio"
                    }) : p
                }), u[4] = p, u[5] = d) : d = u[5];
                let g = (f || null != p) && null != b ? y : null;
                return u[6] !== b ? (c = null != b && (0, l.jsx)("bdi", {
                    children: (0, l.jsx)(r.a, {
                        id: "chatgptConversations.imageOptions.sent.count",
                        defaultMessage: "{count, plural, one {# image} other {# images}}",
                        description: "Number of images the user requested, shown above their sent image prompt alongside the selected style and aspect ratio",
                        values: {
                            count: b
                        }
                    })
                }), u[6] = b, u[7] = c) : c = u[7], u[8] !== o || u[9] !== x || u[10] !== d || u[11] !== g || u[12] !== c ? (m = (0, l.jsxs)("div", {
                    role: "note",
                    className: "flex max-w-[70%] items-center gap-1.5 self-end pe-3 text-sm text-secondary",
                    children: [a, (0, l.jsxs)("span", {
                        className: "min-w-0 text-end break-words",
                        children: [o, x, d, g, c]
                    })]
                }), u[8] = o, u[9] = x, u[10] = d, u[11] = g, u[12] = c, u[13] = m) : m = u[13], m
            }
        })
    }),
    R1rp: (function(e, t, a) {
        a.d(t, {
            a: () => c,
            b: () => d,
            c: () => m,
            d: () => u
        });
        var l = a("BolX"),
            n = a("OWtl"),
            r = a("twmu"),
            i = a("Cslg");
        let s = (0, l.c)(n.a, e => {
                let {
                    get: t
                } = e, a = t(i.f);
                if (null != a && "allowed" === t(i.n)) return t(r.b, a).data?.accounts[a]?.features
            }),
            o = (0, l.c)(n.a, e => {
                let {
                    get: t
                } = e, a = t(i.n);
                return "loading" === a || "allowed" === a && t(r.b, t(i.f)).isPending
            }),
            d = (0, l.c)(n.a, () => !1),
            c = (0, l.c)(n.a, () => !1),
            m = (0, l.c)(n.a, e => {
                let {
                    get: t
                } = e;
                return t(s)?.includes("library_shared_content_available") === !0
            }),
            u = (0, l.c)(n.a, e => {
                let {
                    get: t
                } = e;
                return !t(o) && !t(m)
            })
    })
};