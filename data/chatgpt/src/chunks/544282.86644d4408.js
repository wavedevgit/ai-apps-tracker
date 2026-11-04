export const __rspack_esm_ids = [544282];
export const __webpack_modules__ = {
    oTAj: (function(e, t, a) {
        a.d(t, {
            a: () => ea
        });
        var n = a("ABep"),
            l = a("QosV"),
            r = a("SIRb"),
            i = a("slpy"),
            s = a("BolX"),
            o = a("d0tz"),
            d = a("zd8w"),
            c = a("jqIZ"),
            m = a("B8Ul"),
            u = a("Cslg"),
            f = a("Gdjn"),
            h = a("ILTo"),
            p = a("YWcr"),
            b = a("DAFh"),
            y = a("EULo"),
            x = a("MX6A"),
            g = a("rS3J"),
            I = a("WB4T"),
            v = a("dKZq"),
            w = a("HOLv"),
            j = a("bf6R"),
            T = a("Bbed"),
            S = a("A9Yt"),
            k = a("FqCE"),
            E = a("WE3h"),
            F = a("SCxD"),
            L = a("TxRk"),
            _ = a("e2wX"),
            M = a("k7G6"),
            C = a("tSEg"),
            A = a("lBzi"),
            N = a("Kmy6"),
            z = a("M0Ez"),
            B = a("ZfbS"),
            U = a("drbS"),
            P = a("flj6"),
            $ = a("dQRk"),
            R = a("NcJA");

        function G(e) {
            let t, a, r, i, o = (0, l.c)(17),
                {
                    mention: d,
                    conversationId: c,
                    shouldBlockExternalEgress: m
                } = e,
                u = (0, s.y)(C.a),
                f = (0, s.z)(R.a.registration$)?.host,
                h = (0, s.z)(R.a.boundConversationId$),
                p = (0, s.x)($.j, c);
            o[0] !== h || o[1] !== f || o[2] !== d.path || o[3] !== u || o[4] !== p ? (t = null != p && h === p ? f?.getReferenceAction?.(d.path, () => u.get(R.a.registration$)?.host === f && u.get(R.a.boundConversationId$) === p) : void 0, o[0] = h, o[1] = f, o[2] = d.path, o[3] = u, o[4] = p, o[5] = t) : t = o[5];
            let b = t;
            if (m || null == b) {
                let e;
                return o[6] !== d.label ? (e = (0, n.jsx)("span", {
                    children: d.label
                }), o[6] = d.label, o[7] = e) : e = o[7], e
            }
            return o[8] !== d.label || o[9] !== d.path ? (a = (0, g.e)({
                href: d.path,
                label: d.label
            }), o[8] = d.label, o[9] = d.path, o[10] = a) : a = o[10], o[11] !== d.label || o[12] !== a ? (r = (0, n.jsx)(L.a, {
                interactive: !0,
                dataAttributes: a,
                children: d.label
            }), o[11] = d.label, o[12] = a, o[13] = r) : r = o[13], o[14] !== b || o[15] !== r ? (i = (0, n.jsx)("button", {
                type: "button",
                onClick: b,
                children: r
            }), o[14] = b, o[15] = r, o[16] = i) : i = o[16], i
        }
        var H = a("tHvi"),
            V = a("pdPj"),
            W = a("OWtl"),
            K = a("Kwur"),
            O = a("ZM7C"),
            q = a("gJdM"),
            D = a("iHfE"),
            J = a("OWHf"),
            Y = a("t5e6");
        let Z = (0, s.q)(W.a, (e, t) => {
            let {
                get: a
            } = t, n = a(O.a);
            return {
                enabled: null != n && a(V.a),
                queryKey: ["chatgpt-reference-image-message-thumbnail", n, a(O.b), e],
                queryFn: async t => {
                    let {
                        signal: a
                    } = t;
                    return (await K.Request.safeGet("/files/library/reference-images/{reference_image_id}/thumbnail_url", {
                        additionalHeaders: null == n ? void 0 : (0, J.a)(n),
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

        function Q(e) {
            let t, a, r, i, o = (0, l.c)(13),
                {
                    mention: d,
                    shouldBlockExternalEgress: c
                } = e,
                m = (0, s.z)(V.a);
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                enabled: !1
            }, o[0] = t) : t = o[0];
            let {
                data: u
            } = (0, s.z)(D.c, t), f = m && !c ? u?.find(e => e.id === d.referenceImageId) : void 0, h = !c && null == f;
            o[1] !== h ? (a = {
                enabled: h
            }, o[1] = h, o[2] = a) : a = o[2];
            let {
                data: p
            } = (0, s.x)(Z, d.referenceImageId, a), b = L.a, y = (0, g.e)({
                href: (0, q.b)({
                    referenceImageId: d.referenceImageId,
                    assetPointer: f?.asset_pointer,
                    thumbnailAssetPointer: f?.thumbnail_asset_pointer
                }),
                label: d.name
            });
            return o[3] !== m || o[4] !== f || o[5] !== c || o[6] !== p ? (r = m && !c && (null != f || null != p) ? (0, n.jsx)("span", {
                children: (0, n.jsx)(Y.a, {
                    alt: "",
                    assetPointer: f?.asset_pointer,
                    composerThumbnailUrl: f?.thumbnail_url ?? p,
                    fallbackUrl: f?.thumbnail_url ?? p,
                    name: null,
                    size: "response",
                    thumbnailAssetPointer: f?.thumbnail_asset_pointer,
                    useComposerThumbnailCache: !0
                })
            }) : (0, n.jsx)(j.cg, {}), o[3] = m, o[4] = f, o[5] = c, o[6] = p, o[7] = r) : r = o[7], o[8] !== b || o[9] !== d.name || o[10] !== y || o[11] !== r ? (i = (0, n.jsx)(b, {
                fontWeight: "inherit",
                dataAttributes: y,
                icon: r,
                iconSizing: "authored",
                layout: "inline-flow",
                tone: "composer-reference",
                children: d.name
            }), o[8] = b, o[9] = d.name, o[10] = y, o[11] = r, o[12] = i) : i = o[12], i
        }
        var X = a("SCbd");
        let ee = (0, T.a)(r.h, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        name: t
                    } = e;
                    return (0, n.jsx)(L.a, {
                        icon: (0, h.b)(),
                        children: t
                    })
                }
            }),
            et = (0, s.t)("ChatGptUserMessageContentScope", {
                key: e => e.tabKeyPrefix,
                parent: C.a,
                retain: {
                    max: 0
                }
            });

        function ea(e) {
            let t, a, r, i, o, c, m, u, f, h, p = (0, l.c)(47),
                {
                    ref: b,
                    conversationId: y,
                    hostId: x,
                    mentions: g,
                    skillMentions: w,
                    folderMentions: j,
                    referenceImageMentions: T,
                    message: S,
                    messageId: k,
                    renderMarkdown: E,
                    shouldBlockExternalEgress: F,
                    systemHintMentions: L,
                    tabKeyPrefix: _
                } = e;
            if (p[0] !== g || p[1] !== w || p[2] !== j || p[3] !== T || p[4] !== S) {
                let e = void 0 === w ? [] : w,
                    a = void 0 === j ? [] : j,
                    n = void 0 === T ? [] : T;
                t = [...g, ...e, ...a, ...n, ...S.includes(H.a) ? (0, U.g)(S).filter(e => e.path.startsWith(H.a)).map(e => ({
                    ...e,
                    label: (0, H.b)(e.label),
                    officeSheet: !0
                })) : []].sort(er), p[0] = g, p[1] = w, p[2] = j, p[3] = T, p[4] = S, p[5] = t
            } else t = p[5];
            let M = t,
                C = (0, d.useId)();
            if (p[6] !== C) {
                let e;
                p[8] === Symbol.for("react.memo_cache_sentinel") ? (e = /[^a-z0-9-]/gi, p[8] = e) : e = p[8], a = C.replace(e, ""), p[6] = C, p[7] = a
            } else a = p[7];
            let N = `chatgpt-file-mention-${a}`;
            p[9] !== F || p[10] !== S ? (r = !F && S.includes("app://"), p[9] = F, p[10] = S, p[11] = r) : r = p[11];
            let z = r;
            p[12] !== z ? (i = {
                enabled: z
            }, p[12] = z, p[13] = i) : i = p[13];
            let {
                data: B
            } = (0, s.z)(A.m, i);
            if (p[14] !== z || p[15] !== L || p[16] !== B || p[17] !== S) {
                if (o = [], z && null != B)
                    for (let e of (0, U.g)(S)) {
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
            p[19] !== N ? (c = {
                [N]: eo
            }, p[19] = N, p[20] = c) : c = p[20];
            let P = c;
            p[21] !== M || p[22] !== o || p[23] !== S ? (m = e => {
                if (e.length === S.length) return S;
                let t = [...M, ...o].reduce(el, e.length);
                return S.slice(0, t)
            }, p[21] = M, p[22] = o, p[23] = S, p[24] = m) : m = p[24];
            let $ = m;
            return p[25] !== y || p[26] !== x || p[27] !== M || p[28] !== k || p[29] !== o || p[30] !== F || p[31] !== _ || p[32] !== S ? (u = {
                conversationId: y,
                hostId: x,
                message: S,
                messageId: k,
                mentions: M,
                shouldBlockExternalEgress: F,
                systemHintMentions: o,
                tabKeyPrefix: _
            }, p[25] = y, p[26] = x, p[27] = M, p[28] = k, p[29] = o, p[30] = F, p[31] = _, p[32] = S, p[33] = u) : u = p[33], p[34] !== N || p[35] !== P || p[36] !== $ || p[37] !== x || p[38] !== M || p[39] !== b || p[40] !== E || p[41] !== o || p[42] !== S ? (f = E ? (0, n.jsx)(I.a, {
                ref: b,
                cwd: null,
                directives: P,
                hostId: x,
                hasSerializedParagraphs: !0,
                renderMath: !1,
                serializeVisibleText: e => em($(e), M, o).map(e => "text" === e.kind ? e.text : `:${N}{kind="${e.kind}" index="${String(e.index)}"}`).join(""),
                text: S
            }) : (0, n.jsx)(v.a, {
                text: S,
                textTone: "user-message",
                children: e => {
                    let t = $(e),
                        a = em(t, M, o);
                    return (0, n.jsx)("div", {
                        ref: a.some(en) ? b : void 0,
                        className: "text-size-chat whitespace-pre-wrap",
                        dir: "auto",
                        children: a.map((e, a) => "text" === e.kind ? (0, n.jsx)(ei, {
                            hostId: x,
                            sourceStartIndex: e.startIndex,
                            sourceText: t,
                            text: e.text
                        }, a) : (0, n.jsx)(eo, {
                            name: N,
                            attributes: {
                                kind: e.kind,
                                index: String(e.index)
                            }
                        }, a))
                    })
                }
            }), p[34] = N, p[35] = P, p[36] = $, p[37] = x, p[38] = M, p[39] = b, p[40] = E, p[41] = o, p[42] = S, p[43] = f) : f = p[43], p[44] !== u || p[45] !== f ? (h = (0, n.jsx)(s.b, {
                scope: et,
                value: u,
                children: f
            }), p[44] = u, p[45] = f, p[46] = h) : h = p[46], h
        }

        function en(e) {
            return "text" !== e.kind
        }

        function el(e, t) {
            return t.startIndex < e && t.endIndex > e ? Math.min(e, t.startIndex) : e
        }

        function er(e, t) {
            return e.startIndex - t.startIndex
        }

        function ei(e) {
            let t, a = (0, l.c)(11),
                {
                    hostId: r,
                    sourceStartIndex: i,
                    sourceText: o,
                    text: d
                } = e,
                {
                    value: c
                } = (0, s.y)(et);
            if (a[0] !== r || a[1] !== i || a[2] !== o || a[3] !== d || a[4] !== c) {
                let e;
                a[6] !== r || a[7] !== i || a[8] !== o || a[9] !== c ? (e = (e, t) => {
                    if ("text" === e.kind) {
                        let t = [],
                            a = 0;
                        for (let n of (0, y.b)(e.text)) {
                            let l = (0, y.c)(n.path),
                                i = (0, x.c)(n.label);
                            if (es(e.text, n.start) || "text" === (0, p.x)({
                                    href: l,
                                    label: i
                                })) continue;
                            let s = c.shouldBlockExternalEgress ? i : (0, E.b)({
                                cwd: null,
                                elementKey: String(n.start),
                                hostId: r,
                                href: l,
                                label: i
                            });
                            null != s && (t.push(e.text.slice(a, n.start), s), a = n.end)
                        }
                        return t.push(e.text.slice(a)), t
                    }
                    let a = i + e.startIndex,
                        l = i + e.endIndex,
                        s = "`" === o[a - 1] || "`" === o[l],
                        d = es(o, a) || es(o, "fenced-code" === e.kind ? a + e.text.lastIndexOf("```") : l - 1);
                    if ("fenced-code" === e.kind) {
                        let r = /^ {0,3}```(?!`)([^\r\n]*)\r?\n(?:([\s\S]*?)\r?\n)? {0,3}```[ \t]*$/.exec(e.text),
                            i = o.lastIndexOf("\n", a - 1) + 1,
                            c = o.indexOf("\n", l),
                            m = o.slice(l, -1 === c ? o.length : c);
                        return s || d || null == r || !/^ {0,3}$/.test(o.slice(i, a)) || r[1].includes("`") || !/^[ \t]*\r?$/.test(m) ? e.text : (0, n.jsx)(F.a, {
                            content: r[2] ?? "",
                            language: r[1].trim().split(/\s+/, 1)[0] || void 0
                        }, t)
                    }
                    if ("inline-code" === e.kind) return s || d || !/^`[^`\n]+`$/.test(e.text) ? e.text : (0, n.jsx)("code", {
                        children: e.text.slice(1, -1)
                    }, t)
                }, a[6] = r, a[7] = i, a[8] = o, a[9] = c, a[10] = e) : e = a[10], t = (0, U.f)(d).map(e), a[0] = r, a[1] = i, a[2] = o, a[3] = d, a[4] = c, a[5] = t
            } else t = a[5];
            return t
        }

        function es(e, t) {
            let a = t - 1;
            for (;
                "\\" === e[a];) a -= 1;
            return (t - a) % 2 == 0
        }

        function eo(e) {
            let t, a = (0, l.c)(66),
                {
                    attributes: r
                } = e,
                {
                    value: o
                } = (0, s.y)(et),
                m = (0, s.z)(u.f),
                p = (0, s.z)(u.k);
            a[0] !== r.index ? (t = "string" == typeof r.index ? Number.parseInt(r.index, 10) : 0 / 0, a[0] = r.index, a[1] = t) : t = a[1];
            let b = t;
            if ("system-hint" === r.kind) {
                let e, t = o.systemHintMentions[b];
                return a[2] !== t ? (e = null == t ? null : (0, n.jsx)(ed, {
                    mention: t
                }), a[2] = t, a[3] = e) : e = a[3], e
            }
            let y = o.mentions[b];
            if (null == y) return null;
            if ("officeSheet" in y) {
                let e;
                return a[4] !== y || a[5] !== o.conversationId || a[6] !== o.shouldBlockExternalEgress ? (e = (0, n.jsx)(G, {
                    mention: y,
                    conversationId: o.conversationId,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress
                }), a[4] = y, a[5] = o.conversationId, a[6] = o.shouldBlockExternalEgress, a[7] = e) : e = a[7], e
            }
            if ("referenceImageId" in y) {
                let e;
                return a[8] !== y || a[9] !== o.shouldBlockExternalEgress ? (e = (0, n.jsx)(Q, {
                    mention: y,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress
                }), a[8] = y, a[9] = o.shouldBlockExternalEgress, a[10] = e) : e = a[10], e
            }
            if ("directoryId" in y) {
                let e, t, l, r, s = y.displayPath ?? y.name;
                a[18] !== y.directoryId || a[19] !== y.name ? (e = (0, g.e)({
                    href: (0, k.f)(y.directoryId),
                    label: y.name
                }), a[18] = y.directoryId, a[19] = y.name, a[20] = e) : e = a[20];
                let d = e;
                a[21] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(j.yd, {}), a[21] = t) : t = a[21], a[22] !== y.name ? (l = (0, n.jsxs)(n.Fragment, {
                    children: [t, (0, n.jsx)("span", {
                        className: "max-w-64 self-baseline truncate",
                        children: y.name
                    })]
                }), a[22] = y.name, a[23] = l) : l = a[23];
                let m = l;
                return a[24] !== m || a[25] !== d || a[26] !== s || a[27] !== y.directoryId || a[28] !== y.displayPath || a[29] !== o.shouldBlockExternalEgress ? (r = null == y.displayPath || o.shouldBlockExternalEgress ? (0, n.jsx)("span", {
                    ...d,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    title: s,
                    children: m
                }) : (0, n.jsx)(i.a, {
                    content: s,
                    children: (0, n.jsx)(c.g, {
                        ...d,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap underline decoration-dotted underline-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        to: `/library/d/${encodeURIComponent(y.directoryId)}`,
                        "aria-label": s,
                        children: m
                    })
                }), a[24] = m, a[25] = d, a[26] = s, a[27] = y.directoryId, a[28] = y.displayPath, a[29] = o.shouldBlockExternalEgress, a[30] = r) : r = a[30], r
            }
            if ("name" in y) {
                let e, t, l, r, i;
                a[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, h.b)(), a[31] = e) : e = a[31], a[32] !== y.name ? (t = (0, n.jsx)(L.a, {
                    icon: e,
                    children: y.name
                }), a[32] = y.name, a[33] = t) : t = a[33];
                let s = t;
                return a[34] !== m || a[35] !== y.id || a[36] !== y.name || a[37] !== p ? (l = (0, g.e)({
                    href: null == m ? void 0 : (0, f.a)(y.id, {
                        accountId: m,
                        userId: p
                    }),
                    label: `@${y.name}`
                }), a[34] = m, a[35] = y.id, a[36] = y.name, a[37] = p, a[38] = l) : l = a[38], a[39] !== s || a[40] !== y.id || a[41] !== y.name || a[42] !== o.hostId || a[43] !== o.shouldBlockExternalEgress ? (r = o.shouldBlockExternalEgress ? s : (0, n.jsx)(d.Suspense, {
                    fallback: s,
                    children: (0, n.jsx)(ee, {
                        id: y.id,
                        name: y.name,
                        hostId: o.hostId
                    })
                }), a[39] = s, a[40] = y.id, a[41] = y.name, a[42] = o.hostId, a[43] = o.shouldBlockExternalEgress, a[44] = r) : r = a[44], a[45] !== l || a[46] !== r ? (i = (0, n.jsx)("span", {
                    ...l,
                    children: r
                }), a[45] = l, a[46] = r, a[47] = i) : i = a[47], i
            }
            if ("attachment" in y) {
                let e, t, l, {
                        attachment: r
                    } = y,
                    i = r.mountedLibraryFileId ?? r.libraryFileId;
                a[48] !== r.fileId || a[49] !== r.libraryArtifactType || a[50] !== r.mimeType || a[51] !== r.mountedLibraryMimeType || a[52] !== i || a[53] !== y.endIndex || a[54] !== y.startIndex || a[55] !== o.message ? (e = (0, g.e)({
                    href: null == i ? void 0 : (0, k.c)({
                        fileId: r.fileId ?? "",
                        libraryFileId: i,
                        libraryArtifactType: r.libraryArtifactType ?? "",
                        mimeType: r.mountedLibraryMimeType ?? r.mimeType ?? ""
                    }),
                    label: o.message.slice(y.startIndex, y.endIndex).replace(/^@/, "")
                }), a[48] = r.fileId, a[49] = r.libraryArtifactType, a[50] = r.mimeType, a[51] = r.mountedLibraryMimeType, a[52] = i, a[53] = y.endIndex, a[54] = y.startIndex, a[55] = o.message, a[56] = e) : e = a[56];
                let s = `${o.tabKeyPrefix}:${String(b)}:${r.name}`;
                return a[57] !== r || a[58] !== s || a[59] !== o.conversationId || a[60] !== o.messageId || a[61] !== o.shouldBlockExternalEgress ? (t = (0, n.jsx)(P.a, {
                    attachment: r,
                    conversationId: o.conversationId,
                    messageId: o.messageId,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress,
                    tabKey: s,
                    variant: "inline"
                }), a[57] = r, a[58] = s, a[59] = o.conversationId, a[60] = o.messageId, a[61] = o.shouldBlockExternalEgress, a[62] = t) : t = a[62], a[63] !== e || a[64] !== t ? (l = (0, n.jsx)("span", {
                    ...e,
                    children: t
                }), a[63] = e, a[64] = t, a[65] = l) : l = a[65], l
            }
            return null
        }

        function ed(e) {
            let t, a = (0, l.c)(8),
                {
                    mention: r
                } = e;
            if (null != (0, p.z)(r.id)) {
                let e, t;
                return a[0] !== r.id || a[1] !== r.label ? (e = (0, g.e)({
                    href: r.id,
                    label: r.label
                }), a[0] = r.id, a[1] = r.label, a[2] = e) : e = a[2], a[3] !== r.label || a[4] !== e ? (t = (0, n.jsx)(L.a, {
                    dataAttributes: e,
                    icon: S.a,
                    layout: "selection-pill",
                    title: r.label,
                    children: r.label
                }), a[3] = r.label, a[4] = e, a[5] = t) : t = a[5], t
            }
            return a[6] !== r ? (t = (0, n.jsx)(ec, {
                mention: r
            }), a[6] = r, a[7] = t) : t = a[7], t
        }

        function ec(e) {
            let t, a, r, i, d, u, f, h, y, x, I, v, j, T, S = (0, l.c)(47),
                {
                    mention: k
                } = e,
                {
                    value: E
                } = (0, s.y)(et),
                F = !E.shouldBlockExternalEgress && null == k.systemHint;
            S[0] !== F ? (t = {
                enabled: F
            }, S[0] = F, S[1] = t) : t = S[1];
            let {
                data: C
            } = (0, s.z)(A.m, t);
            S[2] !== k.id || S[3] !== E.shouldBlockExternalEgress ? (i = k.id.replace(/^(?:connector|plugin):/u, ""), a = (0, z.g)(i), r = !E.shouldBlockExternalEgress && /^(?:connector|plugin):.+/u.test(k.id) && null == a, d = k.id.startsWith("plugin:") && (0, o.Uh)(i) ? i : null, S[2] = k.id, S[3] = E.shouldBlockExternalEgress, S[4] = a, S[5] = r, S[6] = i, S[7] = d) : (a = S[4], r = S[5], i = S[6], d = S[7]);
            let U = d;
            S[8] === Symbol.for("react.memo_cache_sentinel") ? (u = {
                enabled: !1
            }, S[8] = u) : u = S[8];
            let P = (0, s.x)(B.b, i, u),
                $ = r ? U ?? P : null;
            S[9] !== k.systemHint || S[10] !== i || S[11] !== C || S[12] !== E.shouldBlockExternalEgress ? (f = E.shouldBlockExternalEgress ? void 0 : k.systemHint ?? C?.[(0, p.c)(i)], S[9] = k.systemHint, S[10] = i, S[11] = C, S[12] = E.shouldBlockExternalEgress, S[13] = f) : f = S[13];
            let R = f;
            S[14] !== R?.name || S[15] !== i ? (h = (0, m.c)(i) ?? (0, m.c)(R?.name), S[14] = R?.name, S[15] = i, S[16] = h) : h = S[16];
            let G = h,
                H = a ?? G?.icon;
            if (null == H && G?.iconUrl) {
                let e;
                S[17] !== G.iconUrl ? (e = (0, n.jsx)("img", {
                    alt: "",
                    src: G.iconUrl
                }), S[17] = G.iconUrl, S[18] = e) : e = S[18], H = e
            }
            if (null == H) {
                let e;
                S[19] !== R ? (e = R?.logo ? (0, n.jsx)(N.a, {
                    logo: R.logo
                }) : (0, n.jsx)(w.a, {
                    asset: X.a
                }), S[19] = R, S[20] = e) : e = S[20], H = e
            }
            if (S[21] !== k.id || S[22] !== k.label || S[23] !== k.promptLink || S[24] !== i) {
                let e = b.d.shape.systemHint.safeParse(k.id);
                y = L.a, x = g.e, I = k.promptLink ?? {
                    href: e.success ? (0, b.g)(e.data) : (0, p.c)(i),
                    label: e.success ? k.label : `@${k.label}`
                }, S[21] = k.id, S[22] = k.label, S[23] = k.promptLink, S[24] = i, S[25] = y, S[26] = x, S[27] = I
            } else y = S[25], x = S[26], I = S[27];
            S[28] !== x || S[29] !== I ? (v = x(I), S[28] = x, S[29] = I, S[30] = v) : v = S[30];
            let V = G?.name ?? R?.name ?? k.label;
            S[31] !== y || S[32] !== r || S[33] !== H || S[34] !== V || S[35] !== v ? (j = (0, n.jsx)(y, {
                dataAttributes: v,
                icon: H,
                interactive: r,
                layout: "selection-pill",
                children: V
            }), S[31] = y, S[32] = r, S[33] = H, S[34] = V, S[35] = v, S[36] = j) : j = S[36];
            let W = j;
            if (!r) return W;
            if (null == $ && k.id.startsWith("plugin:") && null != (0, o.Pg)(i)) {
                let e, t;
                return S[37] !== i || S[38] !== E.hostId ? (e = (0, M.a)({
                    pluginId: i,
                    hostId: E.hostId
                }), S[37] = i, S[38] = E.hostId, S[39] = e) : e = S[39], S[40] !== W || S[41] !== e ? (t = (0, n.jsx)(c.g, {
                    className: "inline cursor-interaction bg-transparent p-0 text-start align-baseline",
                    to: e,
                    children: W
                }), S[40] = W, S[41] = e, S[42] = t) : t = S[42], t
            }
            return S[43] !== W || S[44] !== $ || S[45] !== i ? (T = (0, n.jsx)(_.a, {
                appId: i,
                pluginId: $,
                children: W
            }), S[43] = W, S[44] = $, S[45] = i, S[46] = T) : T = S[46], T
        }

        function em(e, t, a) {
            let n = [...t.map((e, t) => ({
                    ...e,
                    index: t,
                    kind: "inline"
                })), ...a.map((e, t) => ({
                    ...e,
                    index: t,
                    kind: "system-hint"
                }))].sort((e, t) => e.startIndex - t.startIndex || t.endIndex - e.endIndex),
                l = [],
                r = 0;
            for (let t of n) t.startIndex < r || t.endIndex > e.length || (l.push({
                kind: "text",
                startIndex: r,
                text: e.slice(r, t.startIndex)
            }, {
                kind: t.kind,
                index: t.index
            }), r = t.endIndex);
            return l.push({
                kind: "text",
                startIndex: r,
                text: e.slice(r)
            }), l
        }
    }),
    flj6: (function(e, t, a) {
        a.d(t, {
            a: () => Z,
            b: () => J
        });
        var n = a("ABep"),
            l = a("QosV"),
            r = a("Rzcw"),
            i = a("BolX"),
            s = a("zd8w"),
            o = a("oyxz"),
            d = a("Cslg"),
            c = a("rS3J"),
            m = a("ZtSy"),
            u = a("Bbed"),
            f = a("VL1D"),
            h = a("RNul"),
            p = a("SGsN"),
            b = a("R1rp"),
            y = a("FqCE"),
            x = a("UxLW"),
            g = a("ulpJ"),
            I = a("L9GI"),
            v = a("MExO"),
            w = a("tSEg"),
            j = a("hZax"),
            T = a("WFY2"),
            S = a("ug4w"),
            k = a("YJm0"),
            E = a("DrWu"),
            F = a("dQRk"),
            L = a("rxj0"),
            _ = a("Ul98"),
            M = a("f2PP"),
            C = a("slpy"),
            A = a("RUAz"),
            N = a("T0Rc"),
            z = a("Wf1j"),
            B = a("ygO2"),
            U = a("HOLv"),
            P = a("rvFo"),
            $ = a("zsxQ"),
            R = a("vldH"),
            G = a("fi73"),
            H = a("AtSM");

        function V(e) {
            let t, a, r, s, d, c, m, u, f, y, x, g, I, v, j, S, k, E, _, V, O, q, D = (0, l.c)(86),
                {
                    attachment: J,
                    conversationId: Y,
                    tabKey: Z,
                    target: Q
                } = e,
                X = (0, i.y)(w.a),
                ee = (0, z.a)();
            D[0] !== Y || D[1] !== X ? (t = X.get(F.R, Y), D[0] = Y, D[1] = X, D[2] = t) : t = D[2];
            let et = t;
            D[3] !== Y || D[4] !== X ? (a = X.get(F.Y, Y), D[3] = Y, D[4] = X, D[5] = a) : a = D[5];
            let ea = a;
            D[6] !== Y || D[7] !== Z ? (r = ["chatgpt-user-message-csv-preview", Y, Z], D[6] = Y, D[7] = Z, D[8] = r) : r = D[8], D[9] !== Y || D[10] !== et || D[11] !== ea || D[12] !== Q ? (s = async e => {
                let {
                    signal: t
                } = e, a = await (0, R.fetchChatGptFileBlob)({
                    conversationId: Y,
                    gizmoId: et,
                    sharedConversationId: ea,
                    signal: t,
                    target: Q
                });
                if (a.size > 1e6) throw Error("ChatGPT CSV attachment exceeds the preview size limit");
                let n = await a.text();
                return t.throwIfAborted(),
                    function(e) {
                        let t = 1,
                            a = 1,
                            n = 1,
                            l = !1;
                        for (let r = 0; r < e.length; r += 1) {
                            let i = e[r];
                            if ('"' === i) {
                                l && '"' === e[r + 1] ? r += 1 : l = !l;
                                continue
                            }
                            if (!l && ("," === i ? (t += 1, n += 1) : ("\n" === i || "\r" === i) && ("\r" === i && "\n" === e[r + 1] && (r += 1), t = 1, a += 1, n += 1), t > 100 || a > 1e4 || n > 1e5)) throw Error("ChatGPT CSV attachment exceeds preview shape limits")
                        }
                    }(n), (0, A.planCsvImport)(n).values
            }, D[9] = Y, D[10] = et, D[11] = ea, D[12] = Q, D[13] = s) : s = D[13], D[14] !== r || D[15] !== s ? (d = {
                queryKey: r,
                queryFn: s,
                retry: !1,
                staleTime: P.b.FIVE_MINUTES
            }, D[14] = r, D[15] = s, D[16] = d) : d = D[16];
            let {
                data: en,
                isError: el,
                isLoading: er,
                refetch: ei
            } = (0, N.a)(d);
            D[17] !== J.name ? (c = (J.name.split("/").at(-1) ?? "").replace(/[-_]/gu, " ").split(".")[0] ?? "", D[17] = J.name, D[18] = c) : c = D[18];
            let es = c;
            D[19] !== J.name || D[20] !== ee ? (m = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.download",
                defaultMessage: "Download {filename}",
                description: "Accessible label for a compact icon button in an inline CSV attachment preview. Activating the button downloads the named file. {filename} is the original user-visible filename and may be truncated elsewhere in the preview."
            }, {
                filename: J.name
            }), D[19] = J.name, D[20] = ee, D[21] = m) : m = D[21];
            let eo = m;
            D[22] !== J.name || D[23] !== ee ? (u = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.open",
                defaultMessage: "Open {filename}",
                description: "Accessible label for a compact icon button in an inline CSV attachment preview. Activating the button opens the named file in the full file preview. {filename} is the original user-visible filename and may be truncated elsewhere in the preview."
            }, {
                filename: J.name
            }), D[22] = J.name, D[23] = ee, D[24] = u) : u = D[24];
            let ed = u;
            D[25] !== J.name || D[26] !== Y || D[27] !== et || D[28] !== X || D[29] !== ea || D[30] !== Q ? (f = () => {
                (0, R.a)({
                    conversationId: Y,
                    fileName: J.name,
                    gizmoId: et,
                    sharedConversationId: ea,
                    target: Q
                }).catch(e => {
                    T.a.error("ChatGPT CSV attachment failed to download", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), X.get(p.f).danger((0, n.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.downloadFailed",
                        defaultMessage: "Couldn't download this file. Try again",
                        description: "Error shown when an attached CSV file cannot be downloaded from its inline preview"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgpt.userMessage.csvPreview.downloadFailed"
                        }
                    })
                })
            }, D[25] = J.name, D[26] = Y, D[27] = et, D[28] = X, D[29] = ea, D[30] = Q, D[31] = f) : f = D[31];
            let ec = f;
            D[32] !== J.isSharedLibraryFile || D[33] !== J.mimeType || D[34] !== J.name || D[35] !== Y || D[36] !== et || D[37] !== X || D[38] !== ea || D[39] !== Z || D[40] !== Q ? (y = () => {
                (0, M.openChatGptFile)(X, {
                    isAccessBlocked: e => (0, L.i)(e, Y) || !0 === J.isSharedLibraryFile && e.get(b.d),
                    browserPreview: (0, $.a)(J.name, J.mimeType),
                    conversationId: Y,
                    fileName: J.name,
                    mimeType: J.mimeType,
                    gizmoId: et,
                    sharedConversationId: ea,
                    tabKey: Z,
                    target: Q
                }).catch(W)
            }, D[32] = J.isSharedLibraryFile, D[33] = J.mimeType, D[34] = J.name, D[35] = Y, D[36] = et, D[37] = X, D[38] = ea, D[39] = Z, D[40] = Q, D[41] = y) : y = D[41];
            let em = y;
            if (er) {
                let e, t;
                D[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(h.a, {
                    "aria-hidden": !0
                }), D[42] = e) : e = D[42], D[43] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)("div", {
                    className: "flex h-full items-center justify-center",
                    children: [e, (0, n.jsx)("span", {
                        className: "sr-only",
                        children: (0, n.jsx)(o.a, {
                            id: "chatgpt.userMessage.csvPreview.loading",
                            defaultMessage: "Loading table preview",
                            description: "Screen-reader status announced while an inline preview of an attached CSV file is loading in a ChatGPT conversation"
                        })
                    })]
                }), D[43] = t) : t = D[43], x = t
            } else if (el) {
                let e, t, a, l;
                D[44] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.error",
                        defaultMessage: "Unable to display table preview",
                        description: "Error message shown inside an attached CSV file preview when the table could not be downloaded or parsed"
                    })
                }), D[44] = e) : e = D[44], D[45] !== ei ? (t = () => void ei(), D[45] = ei, D[46] = t) : t = D[46], D[47] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(o.a, {
                    id: "chatgpt.userMessage.csvPreview.retry",
                    defaultMessage: "Try again",
                    description: "Button label for retrying a failed inline CSV attachment preview in a ChatGPT conversation"
                }), D[47] = a) : a = D[47], D[48] !== t ? (l = (0, n.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-3 px-4 text-center",
                    role: "alert",
                    children: [e, (0, n.jsx)(B.a, {
                        color: "secondary",
                        onClick: t,
                        children: a
                    })]
                }), D[48] = t, D[49] = l) : l = D[49], x = l
            } else if (null == en || 0 === en.length) {
                let e;
                D[50] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                    className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondary",
                    children: (0, n.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.empty",
                        defaultMessage: "This CSV file is empty",
                        description: "Empty state shown inside an inline CSV attachment preview when the file contains no rows"
                    })
                }), D[50] = e) : e = D[50], x = e
            } else {
                let e, t, a;
                D[51] !== en[0] ? (e = en[0] ?? [], D[51] = en[0], D[52] = e) : e = D[52], D[53] !== en ? (t = en.slice(1), D[53] = en, D[54] = t) : t = D[54], D[55] !== e || D[56] !== t ? (a = (0, n.jsx)(K, {
                    columnNames: e,
                    rows: t
                }), D[55] = e, D[56] = t, D[57] = a) : a = D[57], x = a
            }
            return D[58] !== es ? (g = (0, n.jsx)("span", {
                className: "truncate font-semibold text-default capitalize",
                children: es
            }), D[58] = es, D[59] = g) : g = D[59], D[60] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, n.jsx)(U.a, {
                asset: G.a
            }), D[60] = I) : I = D[60], D[61] !== eo || D[62] !== ec ? (v = (0, n.jsx)(B.a, {
                "aria-label": eo,
                color: "ghost",
                onClick: ec,
                size: "iconCircleSm",
                children: I
            }), D[61] = eo, D[62] = ec, D[63] = v) : v = D[63], D[64] !== eo || D[65] !== v ? (j = (0, n.jsx)(C.a, {
                content: eo,
                children: v
            }), D[64] = eo, D[65] = v, D[66] = j) : j = D[66], D[67] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, n.jsx)(U.a, {
                asset: H.a
            }), D[67] = S) : S = D[67], D[68] !== em || D[69] !== ed ? (k = (0, n.jsx)(B.a, {
                "aria-label": ed,
                color: "ghost",
                onClick: em,
                size: "iconCircleSm",
                children: S
            }), D[68] = em, D[69] = ed, D[70] = k) : k = D[70], D[71] !== ed || D[72] !== k ? (E = (0, n.jsx)(C.a, {
                content: ed,
                children: k
            }), D[71] = ed, D[72] = k, D[73] = E) : E = D[73], D[74] !== j || D[75] !== E ? (_ = (0, n.jsxs)("span", {
                className: "flex items-center gap-2",
                children: [j, E]
            }), D[74] = j, D[75] = E, D[76] = _) : _ = D[76], D[77] !== g || D[78] !== _ ? (V = (0, n.jsxs)("header", {
                className: "flex h-12 items-center justify-between gap-2 px-4 select-none",
                children: [g, _]
            }), D[77] = g, D[78] = _, D[79] = V) : V = D[79], D[80] !== x ? (O = (0, n.jsx)("div", {
                className: "h-72 border-t border-default",
                children: x
            }), D[80] = x, D[81] = O) : O = D[81], D[82] !== J.name || D[83] !== V || D[84] !== O ? (q = (0, n.jsxs)("section", {
                className: "w-full overflow-hidden rounded-2xl border border-default bg-surface",
                "aria-label": J.name,
                children: [V, O]
            }), D[82] = J.name, D[83] = V, D[84] = O, D[85] = q) : q = D[85], q
        }

        function W(e) {
            T.a.error("ChatGPT CSV attachment failed to open", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function K(e) {
            let t, a, r, i, o, d, c, m, u, f, h, p, b = (0, l.c)(40),
                {
                    columnNames: y,
                    rows: x
                } = e,
                [g, I] = (0, s.useState)(0),
                v = Math.max(0, Math.floor(g / 40) - 5),
                w = Math.min(x.length, v + 18);
            if (b[0] !== y || b[1] !== v || b[2] !== w || b[3] !== x) {
                let e, l, s, u, f = x.slice(v, w),
                    h = 40 * v;
                t = (x.length - w) * 40, b[12] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                    I(e.currentTarget.scrollTop)
                }, b[12] = e) : e = b[12], c = "h-full overflow-auto", m = e, i = "min-w-full border-separate border-spacing-0 text-start text-sm", o = x.length + 1, b[13] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("th", {
                    className: "sticky start-0 top-0 z-20 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                    "aria-hidden": !0
                }), b[13] = l) : l = b[13], b[14] !== y ? (s = y.map(O), b[14] = y, b[15] = s) : s = b[15], b[16] !== s ? (d = (0, n.jsx)("thead", {
                    children: (0, n.jsxs)("tr", {
                        "aria-rowindex": 1,
                        children: [l, s]
                    })
                }), b[16] = s, b[17] = d) : d = b[17], b[18] !== y.length || b[19] !== h ? (a = h > 0 ? (0, n.jsx)("tr", {
                    "aria-hidden": !0,
                    children: (0, n.jsx)("td", {
                        colSpan: y.length + 1,
                        style: {
                            height: h
                        }
                    })
                }) : null, b[18] = y.length, b[19] = h, b[20] = a) : a = b[20], b[21] !== y || b[22] !== v ? (u = (e, t) => {
                    let a = v + t;
                    return (0, n.jsxs)("tr", {
                        "aria-rowindex": a + 2,
                        children: [(0, n.jsx)("th", {
                            className: "sticky start-0 z-10 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                            scope: "row",
                            children: a + 1
                        }), y.map((t, a) => {
                            let l = e[a] ?? "";
                            return (0, n.jsx)("td", {
                                className: "h-10 min-w-32 border-e border-b border-default px-3 text-default last:border-e-0",
                                title: l,
                                children: (0, n.jsx)("span", {
                                    className: "block max-w-80 truncate",
                                    children: l
                                })
                            }, a)
                        })]
                    }, a)
                }, b[21] = y, b[22] = v, b[23] = u) : u = b[23], r = f.map(u), b[0] = y, b[1] = v, b[2] = w, b[3] = x, b[4] = t, b[5] = a, b[6] = r, b[7] = i, b[8] = o, b[9] = d, b[10] = c, b[11] = m
            } else t = b[4], a = b[5], r = b[6], i = b[7], o = b[8], d = b[9], c = b[10], m = b[11];
            return b[24] !== t || b[25] !== y.length ? (u = t > 0 ? (0, n.jsx)("tr", {
                "aria-hidden": !0,
                children: (0, n.jsx)("td", {
                    colSpan: y.length + 1,
                    style: {
                        height: t
                    }
                })
            }) : null, b[24] = t, b[25] = y.length, b[26] = u) : u = b[26], b[27] !== a || b[28] !== r || b[29] !== u ? (f = (0, n.jsxs)("tbody", {
                children: [a, r, u]
            }), b[27] = a, b[28] = r, b[29] = u, b[30] = f) : f = b[30], b[31] !== i || b[32] !== o || b[33] !== d || b[34] !== f ? (h = (0, n.jsxs)("table", {
                className: i,
                "aria-rowcount": o,
                children: [d, f]
            }), b[31] = i, b[32] = o, b[33] = d, b[34] = f, b[35] = h) : h = b[35], b[36] !== h || b[37] !== c || b[38] !== m ? (p = (0, n.jsx)("div", {
                className: c,
                onScroll: m,
                children: h
            }), b[36] = h, b[37] = c, b[38] = m, b[39] = p) : p = b[39], p
        }

        function O(e, t) {
            return (0, n.jsx)("th", {
                className: "sticky top-0 z-10 h-10 min-w-32 border-e border-b border-default bg-surface-secondary px-3 text-start font-semibold text-default last:border-e-0",
                scope: "col",
                title: e,
                children: (0, n.jsx)("span", {
                    className: "block max-w-80 truncate",
                    children: e
                })
            }, `${e}-${String(t)}`)
        }

        function q(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e.isSharedLibraryFile && !t) return null;
            if (null != e.mountedLibraryFileId) return {
                fileName: e.name,
                mimeType: e.mountedLibraryMimeType ?? e.mimeType ?? void 0,
                mountedLibraryFileId: e.mountedLibraryFileId,
                sourceUrl: e.sourceUrl,
                type: "mounted-library"
            };
            let a = (0, R.i)(e.downloadUrl);
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
        let D = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(469955)]).then(a.bind(a, "lUP2"))).ChatGptUserMessageAudioAttachment);

        function J(e) {
            let t, a, r, s, o = (0, l.c)(15),
                {
                    attachments: c,
                    conversationId: m,
                    messageId: u,
                    shouldBlockExternalEgress: f,
                    tabKeyPrefix: h
                } = e,
                {
                    accountId: p
                } = (0, i.z)(d.m),
                y = (0, i.z)(b.c),
                {
                    data: x
                } = (0, i.x)(k.a, p);
            o[0] !== x?.features || o[1] !== f ? (t = !f && x?.features?.includes("graphite") === !0, o[0] = x?.features, o[1] = f, o[2] = t) : t = o[2];
            let g = t;
            if (o[3] !== c || o[4] !== m || o[5] !== u || o[6] !== y || o[7] !== f || o[8] !== g || o[9] !== h) {
                let e = g ? c.flatMap((e, t) => {
                        let a = q(e, y);
                        return e.name.trim().toLowerCase().endsWith(".csv") && null != e.sizeBytes && e.sizeBytes <= 1e6 && null != a ? [{
                            attachment: e,
                            attachmentIndex: t,
                            target: a
                        }] : []
                    }) : [],
                    t = new Set(e.map(Y)),
                    l = c.flatMap((e, a) => t.has(a) ? [] : [{
                        attachment: e,
                        attachmentIndex: a
                    }]);
                a = l.length > 0 ? (0, n.jsx)("div", {
                    className: "flex w-full flex-wrap justify-end gap-2 self-end md:w-4/5",
                    children: l.map(e => {
                        let {
                            attachment: t,
                            attachmentIndex: a
                        } = e;
                        return (0, n.jsx)(Z, {
                            attachment: t,
                            conversationId: m,
                            messageId: u,
                            shouldBlockExternalEgress: f,
                            tabKey: `${h}:${String(a)}:${t.name}`
                        }, `${t.name}-${String(a)}`)
                    })
                }) : null, r = e.length > 0 ? (0, n.jsx)("div", {
                    className: "flex w-full flex-col gap-2 self-end md:w-4/5",
                    children: e.map(e => {
                        let {
                            attachment: t,
                            attachmentIndex: a,
                            target: l
                        } = e;
                        return (0, n.jsx)(V, {
                            attachment: t,
                            conversationId: m,
                            tabKey: `${h}:${String(a)}:${t.name}`,
                            target: l
                        }, `${t.name}-${String(a)}`)
                    })
                }) : null, o[3] = c, o[4] = m, o[5] = u, o[6] = y, o[7] = f, o[8] = g, o[9] = h, o[10] = a, o[11] = r
            } else a = o[10], r = o[11];
            return o[12] !== a || o[13] !== r ? (s = (0, n.jsxs)(n.Fragment, {
                children: [a, r]
            }), o[12] = a, o[13] = r, o[14] = s) : s = o[14], s
        }

        function Y(e) {
            let {
                attachmentIndex: t
            } = e;
            return t
        }

        function Z(e) {
            let t, a, d, u, k, C, A, N, z, B, U, P, $, R, G, H, V, W, K, O, J, Y, Z, Q, X = (0, l.c)(137),
                {
                    attachment: ee,
                    conversationId: et,
                    messageId: ea,
                    shouldBlockExternalEgress: en,
                    tabKey: el,
                    variant: er
                } = e,
                ei = void 0 === er ? "card" : er,
                es = (0, i.y)(w.a),
                eo = (0, j.k)(),
                ed = (0, i.x)(F.x, et),
                [ec, em] = (0, s.useState)(!1),
                eu = (0, s.useRef)(null);
            X[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => eu.current?.abort(), a = [], X[0] = t, X[1] = a) : (t = X[0], a = X[1]), (0, s.useEffect)(t, a);
            let ef = (0, i.z)(b.d);
            if (X[2] !== ee || X[3] !== ed || X[4] !== ef || X[5] !== en || X[6] !== eo || X[7] !== ei) {
                let e;
                N = q(ee, !ef), u = !en && null != N, k = "card" === ei && "tpp" !== ed && "flora" !== ed && !en && null != N && (0, S.d)({
                    fileName: ee.name,
                    mimeType: ee.mountedLibraryMimeType ?? ee.mimeType
                }), d = eo.checkGate("2666007232", {
                    disableExposureLog: !k
                });
                let t = ee.mountedLibraryFileId ?? ee.libraryFileId;
                X[14] !== t ? (e = (0, x.a)(t), X[14] = t, X[15] = e) : e = X[15], C = e;
                let a = u ? (0, _.a)(N, ee.name, ee.mimeType) : null;
                A = null == a ? null : (0, v.d)(a)?.sourceUrl, null != a && ee.isSourceReference && (A = ee.sourceUrl ?? A), X[2] = ee, X[3] = ed, X[4] = ef, X[5] = en, X[6] = eo, X[7] = ei, X[8] = d, X[9] = u, X[10] = k, X[11] = C, X[12] = A, X[13] = N
            } else d = X[8], u = X[9], k = X[10], C = X[11], A = X[12], N = X[13];
            X[16] !== ee.isSharedLibraryFile || X[17] !== ee.isSourceReference || X[18] !== ee.libraryArtifactType || X[19] !== ee.mimeType || X[20] !== ee.mountedLibraryFileId || X[21] !== ee.mountedLibraryMimeType || X[22] !== ee.name || X[23] !== u || X[24] !== et || X[25] !== ec || X[26] !== ea || X[27] !== es || X[28] !== A || X[29] !== el || X[30] !== N ? (z = u ? e => {
                if (ee.isSourceReference && null != A && null != ee.mountedLibraryFileId) return void(0, I.b)(es, {
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
                    isAccessBlocked: e => (0, L.i)(e, et) || !0 === ee.isSharedLibraryFile && e.get(b.d),
                    browserPreview: !0,
                    conversationId: et,
                    messageId: ea,
                    fileName: ee.name,
                    libraryArtifactType: ee.libraryArtifactType,
                    gizmoId: es.get(F.R, et),
                    sharedConversationId: es.get(F.Y, et),
                    mimeType: ee.mountedLibraryMimeType ?? ee.mimeType,
                    signal: t.signal,
                    tabKey: el,
                    target: N
                }).catch(e => {
                    t.signal.aborted || ee.isSharedLibraryFile && es.get(b.d) || (T.a.warning("ChatGPT user attachment failed to open", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), es.get(p.f).danger((0, n.jsx)(o.a, {
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
            } : void 0, X[16] = ee.isSharedLibraryFile, X[17] = ee.isSourceReference, X[18] = ee.libraryArtifactType, X[19] = ee.mimeType, X[20] = ee.mountedLibraryFileId, X[21] = ee.mountedLibraryMimeType, X[22] = ee.name, X[23] = u, X[24] = et, X[25] = ec, X[26] = ea, X[27] = es, X[28] = A, X[29] = el, X[30] = N, X[31] = z) : z = X[31];
            let eh = z;
            X[32] !== eh ? (B = e => {
                null != eh && (e.preventDefault(), eh(e))
            }, X[32] = eh, X[33] = B) : B = X[33];
            let ep = B;
            if (k && d) {
                let e;
                return X[34] !== ee || X[35] !== et || X[36] !== N ? (e = (0, n.jsx)(D, {
                    attachment: ee,
                    conversationId: et,
                    target: N
                }), X[34] = ee, X[35] = et, X[36] = N, X[37] = e) : e = X[37], e
            }
            if ("inline" === ei) {
                let e, t, a, l, r, i, s = ee.mountedLibraryFileId ?? ee.libraryFileId;
                X[38] !== ee.fileId || X[39] !== ee.isSourceReference || X[40] !== ee.libraryArtifactType || X[41] !== ee.mimeType || X[42] !== ee.mountedLibraryMimeType || X[43] !== ee.name || X[44] !== ee.sourceUrl || X[45] !== s ? (e = null == s ? void 0 : (0, c.e)({
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
                }), X[38] = ee.fileId, X[39] = ee.isSourceReference, X[40] = ee.libraryArtifactType, X[41] = ee.mimeType, X[42] = ee.mountedLibraryMimeType, X[43] = ee.name, X[44] = ee.sourceUrl, X[45] = s, X[46] = e) : e = X[46];
                let o = e;
                X[47] !== ee.libraryArtifactType || X[48] !== ee.libraryFileId || X[49] !== ee.mimeType || X[50] !== ee.mountedLibraryFileId || X[51] !== ee.mountedLibraryMimeType || X[52] !== ee.name || X[53] !== ee.sourceUrl || X[54] !== ec || X[55] !== C ? (t = ec ? (0, n.jsx)(h.a, {
                    as: "span",
                    className: "size-4"
                }) : (0, n.jsx)(g.a, {
                    fileName: ee.name,
                    libraryArtifactType: ee.libraryArtifactType,
                    mimeType: ee.mimeType ?? void 0,
                    provider: C,
                    sourceMimeType: ee.mountedLibraryMimeType ?? void 0,
                    mountedLibraryFileId: ee.mountedLibraryFileId ?? ee.libraryFileId,
                    sourceUrl: ee.sourceUrl ?? void 0,
                    style: "message-inline"
                }), X[47] = ee.libraryArtifactType, X[48] = ee.libraryFileId, X[49] = ee.mimeType, X[50] = ee.mountedLibraryFileId, X[51] = ee.mountedLibraryMimeType, X[52] = ee.name, X[53] = ee.sourceUrl, X[54] = ec, X[55] = C, X[56] = t) : t = X[56], X[57] !== ee ? (a = 0 === (0, E.h)(ee).length ? ee.name : (0, E.g)(ee.name), X[57] = ee, X[58] = a) : a = X[58], X[59] !== a ? (l = (0, n.jsx)("span", {
                    className: "max-w-64 self-baseline truncate",
                    children: a
                }), X[59] = a, X[60] = l) : l = X[60], X[61] !== t || X[62] !== l ? (r = (0, n.jsxs)(n.Fragment, {
                    children: [t, l]
                }), X[61] = t, X[62] = l, X[63] = r) : r = X[63];
                let d = r;
                if (null != A) {
                    let e;
                    return X[64] !== ee.name || X[65] !== d || X[66] !== o || X[67] !== ep || X[68] !== A ? (e = (0, n.jsx)(m.a, {
                        ...o,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        "aria-label": ee.name,
                        href: A,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ee.name,
                        onUnmodifiedClick: ep,
                        children: d
                    }), X[64] = ee.name, X[65] = d, X[66] = o, X[67] = ep, X[68] = A, X[69] = e) : e = X[69], e
                }
                return X[70] !== ee.name || X[71] !== u || X[72] !== d || X[73] !== o || X[74] !== ec || X[75] !== eh ? (i = u ? (0, n.jsx)("button", {
                    ...o,
                    type: "button",
                    className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                    "aria-busy": ec,
                    "aria-label": ee.name,
                    disabled: ec,
                    onClick: eh,
                    children: d
                }) : (0, n.jsx)("span", {
                    ...o,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    children: d
                }), X[70] = ee.name, X[71] = u, X[72] = d, X[73] = o, X[74] = ec, X[75] = eh, X[76] = i) : i = X[76], i
            }
            if (X[77] !== ee.libraryArtifactType || X[78] !== ee.libraryFileId || X[79] !== ee.mimeType || X[80] !== ee.mountedLibraryFileId || X[81] !== ee.mountedLibraryMimeType || X[82] !== ee.name || X[83] !== ee.sourceUrl || X[84] !== u || X[85] !== ec || X[86] !== eh || X[87] !== ep || X[88] !== C || X[89] !== A) {
                let e = (0, r.f)({
                        fileName: ee.name,
                        mimeType: ee.mimeType ?? void 0
                    }),
                    t = null;
                if (null != A) {
                    let e;
                    X[100] !== ee.name || X[101] !== ep || X[102] !== A ? (e = (0, n.jsx)(f.b, {
                        "aria-label": ee.name,
                        href: A,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ee.name,
                        onUnmodifiedClick: ep
                    }), X[100] = ee.name, X[101] = ep, X[102] = A, X[103] = e) : e = X[103], t = e
                } else if (u) {
                    let e;
                    X[104] !== ee.name || X[105] !== ec || X[106] !== eh ? (e = (0, n.jsx)(f.b, {
                        "aria-busy": ec,
                        "aria-label": ee.name,
                        disabled: ec,
                        onClick: eh
                    }), X[104] = ee.name, X[105] = ec, X[106] = eh, X[107] = e) : e = X[107], t = e
                }
                $ = f.a, G = "span", H = "file-tile", O = "group/resource-card relative", R = t, P = f.h, W = "pointer-events-none relative z-10", X[108] !== ee.libraryArtifactType || X[109] !== ee.libraryFileId || X[110] !== ee.mimeType || X[111] !== ee.mountedLibraryFileId || X[112] !== ee.mountedLibraryMimeType || X[113] !== ee.name || X[114] !== ee.sourceUrl || X[115] !== ec || X[116] !== C ? (K = (0, n.jsx)("span", {
                    className: "flex size-10 items-center justify-center overflow-hidden rounded-xl",
                    children: ec ? (0, n.jsx)(h.a, {
                        as: "span",
                        className: "size-5"
                    }) : (0, n.jsx)(g.a, {
                        fileName: ee.name,
                        libraryArtifactType: ee.libraryArtifactType,
                        mimeType: ee.mimeType ?? void 0,
                        provider: C,
                        sourceMimeType: ee.mountedLibraryMimeType ?? void 0,
                        mountedLibraryFileId: ee.mountedLibraryFileId ?? ee.libraryFileId,
                        sourceUrl: ee.sourceUrl ?? void 0,
                        style: "message-card"
                    })
                }), X[108] = ee.libraryArtifactType, X[109] = ee.libraryFileId, X[110] = ee.mimeType, X[111] = ee.mountedLibraryFileId, X[112] = ee.mountedLibraryMimeType, X[113] = ee.name, X[114] = ee.sourceUrl, X[115] = ec, X[116] = C, X[117] = K) : K = X[117], U = o.a, V = (0, r.d)(e.category), X[77] = ee.libraryArtifactType, X[78] = ee.libraryFileId, X[79] = ee.mimeType, X[80] = ee.mountedLibraryFileId, X[81] = ee.mountedLibraryMimeType, X[82] = ee.name, X[83] = ee.sourceUrl, X[84] = u, X[85] = ec, X[86] = eh, X[87] = ep, X[88] = C, X[89] = A, X[90] = U, X[91] = P, X[92] = $, X[93] = R, X[94] = G, X[95] = H, X[96] = V, X[97] = W, X[98] = K, X[99] = O
            } else U = X[90], P = X[91], $ = X[92], R = X[93], G = X[94], H = X[95], V = X[96], W = X[97], K = X[98], O = X[99];
            X[118] !== U || X[119] !== V ? (J = (0, n.jsx)(U, {
                ...V
            }), X[118] = U, X[119] = V, X[120] = J) : J = X[120];
            let eb = null == A ? ee.name : void 0;
            return X[121] !== P || X[122] !== ee.name || X[123] !== J || X[124] !== eb || X[125] !== W || X[126] !== K ? (Y = (0, n.jsx)(P, {
                className: W,
                icon: K,
                subtitle: J,
                title: ee.name,
                titleTooltip: eb,
                variant: "file-tile"
            }), X[121] = P, X[122] = ee.name, X[123] = J, X[124] = eb, X[125] = W, X[126] = K, X[127] = Y) : Y = X[127], X[128] !== R || X[129] !== Y || X[130] !== O ? (Z = (0, n.jsxs)("span", {
                className: O,
                children: [R, Y]
            }), X[128] = R, X[129] = Y, X[130] = O, X[131] = Z) : Z = X[131], X[132] !== $ || X[133] !== G || X[134] !== H || X[135] !== Z ? (Q = (0, n.jsx)($, {
                as: G,
                variant: H,
                children: Z
            }), X[132] = $, X[133] = G, X[134] = H, X[135] = Z, X[136] = Q) : Q = X[136], Q
        }
    }),
    R1rp: (function(e, t, a) {
        a.d(t, {
            a: () => c,
            b: () => d,
            c: () => m,
            d: () => u
        });
        var n = a("BolX"),
            l = a("OWtl"),
            r = a("twmu"),
            i = a("Cslg");
        let s = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e, a = t(i.f);
                if (null != a && "allowed" === t(i.n)) return t(r.b, a).data?.accounts[a]?.features
            }),
            o = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e, a = t(i.n);
                return "loading" === a || "allowed" === a && t(r.b, t(i.f)).isPending
            }),
            d = (0, n.c)(l.a, () => !1),
            c = (0, n.c)(l.a, () => !1),
            m = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return t(s)?.includes("library_shared_content_available") === !0
            }),
            u = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return !t(o) && !t(m)
            })
    })
};