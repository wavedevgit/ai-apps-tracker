export const __rspack_esm_ids = [308581];
export const __webpack_modules__ = {
    oTAj: (function(a, b, c) {
        c.d(b, {
            a: () => aa
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("SIRb"),
            g = c("ZDhX"),
            h = c("Q840"),
            i = c("KvQL"),
            j = c("zd8w"),
            k = c("rEML"),
            l = c("wHrF"),
            m = c("Cslg"),
            n = c("Gdjn"),
            o = c("ILTo"),
            p = c("YWcr"),
            q = c("DAFh"),
            r = c("rS3J"),
            s = c("WB4T"),
            t = c("dKZq"),
            u = c("QlrJ"),
            v = c("HOLv"),
            w = c("bf6R"),
            x = c("Bbed"),
            y = c("T9RQ"),
            z = c("FqCE"),
            A = c("WE3h"),
            B = c("TxRk"),
            C = c("e2wX"),
            D = c("k7G6"),
            E = c("tSEg"),
            F = c("CKur"),
            G = c("Kmy6"),
            H = c("M0Ez"),
            I = c("ZfbS"),
            J = c("drbS"),
            K = c("YRXX"),
            L = c("dQRk"),
            M = c("NcJA");

        function N(a) {
            let b, c, f, g, i = (0, e.c)(17),
                {
                    mention: j,
                    conversationId: k,
                    shouldBlockExternalEgress: l
                } = a,
                m = (0, h.y)(E.a),
                n = (0, h.z)(M.b.registration$)?.host,
                o = (0, h.z)(M.b.boundConversationId$),
                p = (0, h.x)(L.j, k);
            i[0] !== o || i[1] !== n || i[2] !== j.path || i[3] !== m || i[4] !== p ? (b = null != p && o === p ? n?.getReferenceAction?.(j.path, () => m.get(M.b.registration$)?.host === n && m.get(M.b.boundConversationId$) === p) : void 0, i[0] = o, i[1] = n, i[2] = j.path, i[3] = m, i[4] = p, i[5] = b) : b = i[5];
            let q = b;
            if (l || null == q) {
                let a;
                return i[6] !== j.label ? (a = (0, d.jsx)("span", {
                    children: j.label
                }), i[6] = j.label, i[7] = a) : a = i[7], a
            }
            return i[8] !== j.label || i[9] !== j.path ? (c = (0, r.e)({
                href: j.path,
                label: j.label
            }), i[8] = j.label, i[9] = j.path, i[10] = c) : c = i[10], i[11] !== j.label || i[12] !== c ? (f = (0, d.jsx)(B.a, {
                interactive: !0,
                dataAttributes: c,
                children: j.label
            }), i[11] = j.label, i[12] = c, i[13] = f) : f = i[13], i[14] !== q || i[15] !== f ? (g = (0, d.jsx)("button", {
                type: "button",
                onClick: q,
                children: f
            }), i[14] = q, i[15] = f, i[16] = g) : g = i[16], g
        }
        var O = c("tHvi"),
            P = c("pdPj"),
            Q = c("OWtl"),
            R = c("Kwur"),
            S = c("ZM7C"),
            T = c("gJdM"),
            U = c("iHfE"),
            V = c("OWHf"),
            W = c("t5e6");
        let X = (0, h.q)(Q.a, (a, b) => {
            let {
                get: c
            } = b, d = c(S.a);
            return {
                enabled: null != d && c(P.a),
                queryKey: ["chatgpt-reference-image-message-thumbnail", d, c(S.b), a],
                queryFn: async b => {
                    let {
                        signal: c
                    } = b;
                    return (await R.Request.safeGet("/files/library/reference-images/{reference_image_id}/thumbnail_url", {
                        additionalHeaders: null == d ? void 0 : (0, V.a)(d),
                        parameters: {
                            path: {
                                reference_image_id: a
                            }
                        },
                        signal: c
                    })).thumbnail_url
                },
                staleTime: 27e5,
                gcTime: 27e5,
                retry: !1
            }
        });

        function Y(a) {
            let b, c, f, g, i = (0, e.c)(13),
                {
                    mention: j,
                    shouldBlockExternalEgress: k
                } = a,
                l = (0, h.z)(P.a);
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                enabled: !1
            }, i[0] = b) : b = i[0];
            let {
                data: m
            } = (0, h.z)(U.c, b), n = l && !k ? m?.find(a => a.id === j.referenceImageId) : void 0, o = !k && null == n;
            i[1] !== o ? (c = {
                enabled: o
            }, i[1] = o, i[2] = c) : c = i[2];
            let {
                data: p
            } = (0, h.x)(X, j.referenceImageId, c), q = B.a, s = (0, r.e)({
                href: (0, T.b)({
                    referenceImageId: j.referenceImageId,
                    assetPointer: n?.asset_pointer,
                    thumbnailAssetPointer: n?.thumbnail_asset_pointer
                }),
                label: j.name
            });
            return i[3] !== l || i[4] !== n || i[5] !== k || i[6] !== p ? (f = l && !k && (null != n || null != p) ? (0, d.jsx)("span", {
                children: (0, d.jsx)(W.a, {
                    alt: "",
                    assetPointer: n?.asset_pointer,
                    composerThumbnailUrl: n?.thumbnail_url ?? p,
                    fallbackUrl: n?.thumbnail_url ?? p,
                    name: null,
                    size: "response",
                    thumbnailAssetPointer: n?.thumbnail_asset_pointer,
                    useComposerThumbnailCache: !0
                })
            }) : (0, d.jsx)(w.Ag, {}), i[3] = l, i[4] = n, i[5] = k, i[6] = p, i[7] = f) : f = i[7], i[8] !== q || i[9] !== j.name || i[10] !== s || i[11] !== f ? (g = (0, d.jsx)(q, {
                fontWeight: "inherit",
                dataAttributes: s,
                icon: f,
                iconSizing: "authored",
                layout: "inline-flow",
                tone: "composer-reference",
                children: j.name
            }), i[8] = q, i[9] = j.name, i[10] = s, i[11] = f, i[12] = g) : g = i[12], g
        }
        var Z = c("zX7p");
        let $ = (0, x.a)(f.h, {
                suspendToParent: !0,
                errorFallback: a => {
                    let {
                        name: b
                    } = a;
                    return (0, d.jsx)(B.a, {
                        icon: (0, o.b)(),
                        children: b
                    })
                }
            }),
            _ = (0, h.t)("ChatGptUserMessageContentScope", {
                key: a => a.tabKeyPrefix,
                parent: E.a,
                retain: {
                    max: 0
                }
            });

        function aa(a) {
            let b, c, f, g, i, k, l, m, n, o, q, r, v, w = (0, e.c)(55),
                {
                    ref: x,
                    plainTextRef: y,
                    conversationId: z,
                    hostId: B,
                    mentions: C,
                    skillMentions: D,
                    folderMentions: E,
                    referenceImageMentions: G,
                    message: H,
                    messageId: I,
                    renderFormat: K,
                    shouldBlockExternalEgress: L,
                    systemHintMentions: M,
                    tabKeyPrefix: N
                } = a;
            w[0] !== D ? (b = void 0 === D ? [] : D, w[0] = D, w[1] = b) : b = w[1];
            let P = b;
            w[2] !== E ? (c = void 0 === E ? [] : E, w[2] = E, w[3] = c) : c = w[3];
            let Q = c;
            w[4] !== G ? (f = void 0 === G ? [] : G, w[4] = G, w[5] = f) : f = w[5];
            let R = f;
            if (w[6] !== Q || w[7] !== C || w[8] !== R || w[9] !== P || w[10] !== H) g = [...C, ...P, ...Q, ...R, ...H.includes(O.a) ? (0, J.g)(H).filter(a => a.path.startsWith(O.a)).map(a => ({
                ...a,
                label: (0, O.b)(a.label),
                officeSheet: !0
            })) : []].sort(ad), w[6] = Q, w[7] = C, w[8] = R, w[9] = P, w[10] = H, w[11] = g;
            else g = w[11];
            let S = g,
                T = (0, j.useId)();
            if (w[12] !== T) {
                let a;
                w[14] === Symbol.for("react.memo_cache_sentinel") ? (a = /[^a-z0-9-]/gi, w[14] = a) : a = w[14], i = T.replace(a, ""), w[12] = T, w[13] = i
            } else i = w[13];
            let U = `chatgpt-file-mention-${i}`;
            w[15] !== L || w[16] !== H ? (k = !L && H.includes("app://"), w[15] = L, w[16] = H, w[17] = k) : k = w[17];
            let V = k;
            w[18] !== V ? (l = {
                enabled: V
            }, w[18] = V, w[19] = l) : l = w[19];
            let {
                data: W
            } = (0, h.z)(F.m, l);
            if (w[20] !== V || w[21] !== M || w[22] !== W || w[23] !== H) {
                if (m = [], V && null != W)
                    for (let a of (0, J.g)(H)) {
                        let b = W[a.path];
                        null != b && m.push({
                            id: b.system_hint,
                            label: b.name,
                            startIndex: a.startIndex,
                            endIndex: a.endIndex,
                            promptLink: {
                                href: a.path,
                                label: a.label
                            },
                            systemHint: {
                                name: b.name,
                                logo: b.logo
                            }
                        })
                    }
                m.push(...M), w[20] = V, w[21] = M, w[22] = W, w[23] = H, w[24] = m
            } else m = w[24];
            w[25] !== U ? (n = {
                [U]: ae
            }, w[25] = U, w[26] = n) : n = w[26];
            let X = n;
            w[27] !== S || w[28] !== m || w[29] !== H ? (o = a => {
                if (a.length === H.length) return H;
                let b = [...S, ...m].reduce(ac, a.length);
                return H.slice(0, b)
            }, w[27] = S, w[28] = m, w[29] = H, w[30] = o) : o = w[30];
            let Y = o;
            return w[31] !== z || w[32] !== B || w[33] !== S || w[34] !== I || w[35] !== m || w[36] !== L || w[37] !== N || w[38] !== H ? (q = {
                conversationId: z,
                hostId: B,
                message: H,
                messageId: I,
                mentions: S,
                shouldBlockExternalEgress: L,
                systemHintMentions: m,
                tabKeyPrefix: N
            }, w[31] = z, w[32] = B, w[33] = S, w[34] = I, w[35] = m, w[36] = L, w[37] = N, w[38] = H, w[39] = q) : q = w[39], w[40] !== U || w[41] !== X || w[42] !== Y || w[43] !== B || w[44] !== S || w[45] !== y || w[46] !== x || w[47] !== K || w[48] !== m || w[49] !== L || w[50] !== H ? (r = "markdown" === K ? (0, d.jsx)(s.a, {
                ref: x,
                cwd: null,
                directives: X,
                hostId: B,
                hasSerializedParagraphs: !0,
                renderMath: !1,
                serializeVisibleText: a => ah(Y(a), S, m).map(a => "text" === a.kind ? a.text : `:${U}{kind="${a.kind}" index="${String(a.index)}"}`).join(""),
                text: H
            }) : (0, d.jsx)(t.a, {
                text: H,
                textTone: "user-message",
                children: a => {
                    let b = Y(a),
                        c = ah(b, S, m);
                    return (0, d.jsx)(t.b, {
                        ref: c.some(ab) ? x : y,
                        children: c.map((a, c) => "text" === a.kind ? (0, d.jsx)(u.a, {
                            renderLink: a => "text" === (0, p.x)(a) ? null : L ? a.label : (0, A.b)({
                                ...a,
                                hostId: B,
                                cwd: null,
                                isUserMessage: !0
                            }),
                            preserveCodeDelimiters: "plain" === K,
                            sourceStartIndex: a.startIndex,
                            sourceText: b,
                            text: a.text
                        }, c) : (0, d.jsx)(ae, {
                            name: U,
                            attributes: {
                                kind: a.kind,
                                index: String(a.index)
                            }
                        }, c))
                    })
                }
            }), w[40] = U, w[41] = X, w[42] = Y, w[43] = B, w[44] = S, w[45] = y, w[46] = x, w[47] = K, w[48] = m, w[49] = L, w[50] = H, w[51] = r) : r = w[51], w[52] !== q || w[53] !== r ? (v = (0, d.jsx)(h.b, {
                scope: _,
                value: q,
                children: r
            }), w[52] = q, w[53] = r, w[54] = v) : v = w[54], v
        }

        function ab(a) {
            return "text" !== a.kind
        }

        function ac(a, b) {
            return b.startIndex < a && b.endIndex > a ? Math.min(a, b.startIndex) : a
        }

        function ad(a, b) {
            return a.startIndex - b.startIndex
        }

        function ae(a) {
            let b, c = (0, e.c)(61),
                {
                    attributes: f
                } = a,
                {
                    value: i
                } = (0, h.y)(_),
                l = (0, h.z)(m.f),
                p = (0, h.z)(m.k);
            c[0] !== f.index ? (b = "string" == typeof f.index ? Number.parseInt(f.index, 10) : 0 / 0, c[0] = f.index, c[1] = b) : b = c[1];
            let q = b;
            if ("system-hint" === f.kind) {
                let a, b = i.systemHintMentions[q];
                return c[2] !== b ? (a = null == b ? null : (0, d.jsx)(af, {
                    mention: b
                }), c[2] = b, c[3] = a) : a = c[3], a
            }
            let s = i.mentions[q];
            if (null == s) return null;
            if ("officeSheet" in s) {
                let a;
                return c[4] !== s || c[5] !== i.conversationId || c[6] !== i.shouldBlockExternalEgress ? (a = (0, d.jsx)(N, {
                    mention: s,
                    conversationId: i.conversationId,
                    shouldBlockExternalEgress: i.shouldBlockExternalEgress
                }), c[4] = s, c[5] = i.conversationId, c[6] = i.shouldBlockExternalEgress, c[7] = a) : a = c[7], a
            }
            if ("referenceImageId" in s) {
                let a;
                return c[8] !== s || c[9] !== i.shouldBlockExternalEgress ? (a = (0, d.jsx)(Y, {
                    mention: s,
                    shouldBlockExternalEgress: i.shouldBlockExternalEgress
                }), c[8] = s, c[9] = i.shouldBlockExternalEgress, c[10] = a) : a = c[10], a
            }
            if ("directoryId" in s) {
                let a, b, e, f, h = s.displayPath ?? s.name;
                c[18] !== s.directoryId || c[19] !== s.name ? (a = (0, r.e)({
                    href: (0, z.f)(s.directoryId),
                    label: s.name
                }), c[18] = s.directoryId, c[19] = s.name, c[20] = a) : a = c[20];
                let j = a;
                c[21] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(w.Ld, {}), c[21] = b) : b = c[21], c[22] !== s.name ? (e = (0, d.jsxs)(d.Fragment, {
                    children: [b, (0, d.jsx)("span", {
                        className: "max-w-64 self-baseline truncate",
                        children: s.name
                    })]
                }), c[22] = s.name, c[23] = e) : e = c[23];
                let l = e;
                return c[24] !== l || c[25] !== j || c[26] !== h || c[27] !== s.directoryId || c[28] !== s.displayPath || c[29] !== i.shouldBlockExternalEgress ? (f = null == s.displayPath || i.shouldBlockExternalEgress ? (0, d.jsx)("span", {
                    ...j,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    title: h,
                    children: l
                }) : (0, d.jsx)(g.a, {
                    content: h,
                    children: (0, d.jsx)(k.g, {
                        ...j,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap underline decoration-dotted underline-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        to: `/library/d/${encodeURIComponent(s.directoryId)}`,
                        "aria-label": h,
                        children: l
                    })
                }), c[24] = l, c[25] = j, c[26] = h, c[27] = s.directoryId, c[28] = s.displayPath, c[29] = i.shouldBlockExternalEgress, c[30] = f) : f = c[30], f
            }
            if ("name" in s) {
                let a, b, e, f, g;
                c[31] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, o.b)(), c[31] = a) : a = c[31], c[32] !== s.name ? (b = (0, d.jsx)(B.a, {
                    icon: a,
                    children: s.name
                }), c[32] = s.name, c[33] = b) : b = c[33];
                let h = b;
                return c[34] !== l || c[35] !== s.id || c[36] !== s.name || c[37] !== p ? (e = (0, r.e)({
                    href: null == l ? void 0 : (0, n.a)(s.id, {
                        accountId: l,
                        userId: p
                    }),
                    label: `@${s.name}`
                }), c[34] = l, c[35] = s.id, c[36] = s.name, c[37] = p, c[38] = e) : e = c[38], c[39] !== h || c[40] !== s.id || c[41] !== s.name || c[42] !== i.hostId || c[43] !== i.shouldBlockExternalEgress ? (f = i.shouldBlockExternalEgress ? h : (0, d.jsx)(j.Suspense, {
                    fallback: h,
                    children: (0, d.jsx)($, {
                        id: s.id,
                        name: s.name,
                        hostId: i.hostId
                    })
                }), c[39] = h, c[40] = s.id, c[41] = s.name, c[42] = i.hostId, c[43] = i.shouldBlockExternalEgress, c[44] = f) : f = c[44], c[45] !== e || c[46] !== f ? (g = (0, d.jsx)("span", {
                    ...e,
                    children: f
                }), c[45] = e, c[46] = f, c[47] = g) : g = c[47], g
            }
            if ("attachment" in s) {
                let a, b, {
                    attachment: e
                } = s;
                c[48] !== e.isSourceReference || c[49] !== e.name || c[50] !== s.endIndex || c[51] !== s.startIndex || c[52] !== i.message ? (a = e.isSourceReference ? e.name : i.message.slice(s.startIndex, s.endIndex).replace(/^@/, ""), c[48] = e.isSourceReference, c[49] = e.name, c[50] = s.endIndex, c[51] = s.startIndex, c[52] = i.message, c[53] = a) : a = c[53];
                let f = `${i.tabKeyPrefix}:${String(q)}:${e.name}`;
                return c[54] !== e || c[55] !== a || c[56] !== f || c[57] !== i.conversationId || c[58] !== i.messageId || c[59] !== i.shouldBlockExternalEgress ? (b = (0, d.jsx)(K.a, {
                    attachment: e,
                    conversationId: i.conversationId,
                    copyLabel: a,
                    messageId: i.messageId,
                    shouldBlockExternalEgress: i.shouldBlockExternalEgress,
                    tabKey: f,
                    variant: "inline"
                }), c[54] = e, c[55] = a, c[56] = f, c[57] = i.conversationId, c[58] = i.messageId, c[59] = i.shouldBlockExternalEgress, c[60] = b) : b = c[60], b
            }
            return null
        }

        function af(a) {
            let b, c = (0, e.c)(8),
                {
                    mention: f
                } = a;
            if (null != (0, p.z)(f.id)) {
                let a, b;
                return c[0] !== f.id || c[1] !== f.label ? (a = (0, r.e)({
                    href: f.id,
                    label: f.label
                }), c[0] = f.id, c[1] = f.label, c[2] = a) : a = c[2], c[3] !== f.label || c[4] !== a ? (b = (0, d.jsx)(B.a, {
                    dataAttributes: a,
                    icon: y.a,
                    layout: "selection-pill",
                    title: f.label,
                    children: f.label
                }), c[3] = f.label, c[4] = a, c[5] = b) : b = c[5], b
            }
            return c[6] !== f ? (b = (0, d.jsx)(ag, {
                mention: f
            }), c[6] = f, c[7] = b) : b = c[7], b
        }

        function ag(a) {
            let b, c, f, g, j, m, n, o, s, t, u, w, x, y, z = (0, e.c)(47),
                {
                    mention: A
                } = a,
                {
                    value: E
                } = (0, h.y)(_),
                J = !E.shouldBlockExternalEgress && null == A.systemHint;
            z[0] !== J ? (b = {
                enabled: J
            }, z[0] = J, z[1] = b) : b = z[1];
            let {
                data: K
            } = (0, h.z)(F.m, b);
            z[2] !== A.id || z[3] !== E.shouldBlockExternalEgress ? (g = A.id.replace(/^(?:connector|plugin):/u, ""), c = (0, H.g)(g), f = !E.shouldBlockExternalEgress && /^(?:connector|plugin):.+/u.test(A.id) && null == c, j = A.id.startsWith("plugin:") && (0, i.ei)(g) ? g : null, z[2] = A.id, z[3] = E.shouldBlockExternalEgress, z[4] = c, z[5] = f, z[6] = g, z[7] = j) : (c = z[4], f = z[5], g = z[6], j = z[7]);
            let L = j;
            z[8] === Symbol.for("react.memo_cache_sentinel") ? (m = {
                enabled: !1
            }, z[8] = m) : m = z[8];
            let M = (0, h.x)(I.b, g, m),
                N = f ? L ?? M : null;
            z[9] !== A.systemHint || z[10] !== g || z[11] !== K || z[12] !== E.shouldBlockExternalEgress ? (n = E.shouldBlockExternalEgress ? void 0 : A.systemHint ?? K?.[(0, p.c)(g)], z[9] = A.systemHint, z[10] = g, z[11] = K, z[12] = E.shouldBlockExternalEgress, z[13] = n) : n = z[13];
            let O = n;
            z[14] !== O?.name || z[15] !== g ? (o = (0, l.c)(g) ?? (0, l.c)(O?.name), z[14] = O?.name, z[15] = g, z[16] = o) : o = z[16];
            let P = o,
                Q = c ?? P?.icon;
            if (null == Q && P?.iconUrl) {
                let a;
                z[17] !== P.iconUrl ? (a = (0, d.jsx)("img", {
                    alt: "",
                    src: P.iconUrl
                }), z[17] = P.iconUrl, z[18] = a) : a = z[18], Q = a
            }
            if (null == Q) {
                let a;
                z[19] !== O ? (a = O?.logo ? (0, d.jsx)(G.a, {
                    logo: O.logo
                }) : (0, d.jsx)(v.a, {
                    asset: Z.a
                }), z[19] = O, z[20] = a) : a = z[20], Q = a
            }
            if (z[21] !== A.id || z[22] !== A.label || z[23] !== A.promptLink || z[24] !== g) {
                let a = q.d.shape.systemHint.safeParse(A.id);
                s = B.a, t = r.e, u = A.promptLink ?? {
                    href: a.success ? (0, q.g)(a.data) : (0, p.c)(g),
                    label: a.success ? A.label : `@${A.label}`
                }, z[21] = A.id, z[22] = A.label, z[23] = A.promptLink, z[24] = g, z[25] = s, z[26] = t, z[27] = u
            } else s = z[25], t = z[26], u = z[27];
            z[28] !== t || z[29] !== u ? (w = t(u), z[28] = t, z[29] = u, z[30] = w) : w = z[30];
            let R = P?.name ?? O?.name ?? A.label;
            z[31] !== s || z[32] !== f || z[33] !== Q || z[34] !== R || z[35] !== w ? (x = (0, d.jsx)(s, {
                dataAttributes: w,
                icon: Q,
                interactive: f,
                layout: "selection-pill",
                children: R
            }), z[31] = s, z[32] = f, z[33] = Q, z[34] = R, z[35] = w, z[36] = x) : x = z[36];
            let S = x;
            if (!f) return S;
            if (null == N && A.id.startsWith("plugin:") && null != (0, i.Xg)(g)) {
                let a, b;
                return z[37] !== g || z[38] !== E.hostId ? (a = (0, D.a)({
                    pluginId: g,
                    hostId: E.hostId
                }), z[37] = g, z[38] = E.hostId, z[39] = a) : a = z[39], z[40] !== S || z[41] !== a ? (b = (0, d.jsx)(k.g, {
                    className: "inline cursor-interaction bg-transparent p-0 text-start align-baseline",
                    to: a,
                    children: S
                }), z[40] = S, z[41] = a, z[42] = b) : b = z[42], b
            }
            return z[43] !== S || z[44] !== N || z[45] !== g ? (y = (0, d.jsx)(C.a, {
                appId: g,
                pluginId: N,
                children: S
            }), z[43] = S, z[44] = N, z[45] = g, z[46] = y) : y = z[46], y
        }

        function ah(a, b, c) {
            let d = [...b.map((a, b) => ({
                    ...a,
                    index: b,
                    kind: "inline"
                })), ...c.map((a, b) => ({
                    ...a,
                    index: b,
                    kind: "system-hint"
                }))].sort((a, b) => a.startIndex - b.startIndex || b.endIndex - a.endIndex),
                e = [],
                f = 0;
            for (let b of d) b.startIndex < f || b.endIndex > a.length || (e.push({
                kind: "text",
                startIndex: f,
                text: a.slice(f, b.startIndex)
            }, {
                kind: b.kind,
                index: b.index
            }), f = b.endIndex);
            return e.push({
                kind: "text",
                startIndex: f,
                text: a.slice(f)
            }), e
        }
    }),
    YRXX: (function(a, b, c) {
        c.d(b, {
            a: () => _,
            b: () => Z
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Rzcw"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("oyxz"),
            j = c("Cslg"),
            k = c("rS3J"),
            l = c("ZtSy"),
            m = c("Bbed"),
            n = c("MyoZ"),
            o = c("RNul"),
            p = c("SGsN"),
            q = c("R1rp"),
            r = c("FqCE"),
            s = c("UxLW"),
            t = c("ulpJ"),
            u = c("L9GI"),
            v = c("MExO"),
            w = c("tSEg"),
            x = c("hZax"),
            y = c("WFY2"),
            z = c("ug4w"),
            A = c("YJm0"),
            B = c("DrWu"),
            C = c("dQRk"),
            D = c("rxj0"),
            E = c("s60H"),
            F = c("Ul98"),
            G = c("f2PP"),
            H = c("c9lJ"),
            I = c("ZDhX"),
            J = c("T0Rc"),
            K = c("Wf1j"),
            L = c("Sm6l"),
            M = c("HOLv"),
            N = c("RqRN"),
            O = c("rvFo"),
            P = c("zsxQ"),
            Q = c("vldH"),
            R = c("JWvJ"),
            S = c("aakY");

        function T(a) {
            let b, c, f, h, j, k, l, m, n, r, s, t, u, v, x, z, A, B, E, F, H, T, W = (0, e.c)(86),
                {
                    attachment: X,
                    conversationId: Y,
                    tabKey: Z,
                    target: $
                } = a,
                _ = (0, g.y)(w.a),
                aa = (0, K.a)();
            W[0] !== Y || W[1] !== _ ? (b = _.get(C.T, Y), W[0] = Y, W[1] = _, W[2] = b) : b = W[2];
            let ab = b;
            W[3] !== Y || W[4] !== _ ? (c = _.get(C.ab, Y), W[3] = Y, W[4] = _, W[5] = c) : c = W[5];
            let ac = c;
            W[6] !== Y || W[7] !== Z ? (f = ["chatgpt-user-message-csv-preview", Y, Z], W[6] = Y, W[7] = Z, W[8] = f) : f = W[8], W[9] !== Y || W[10] !== ab || W[11] !== ac || W[12] !== $ ? (h = async a => {
                let {
                    signal: b
                } = a, c = await (0, Q.fetchChatGptFileBlob)({
                    conversationId: Y,
                    gizmoId: ab,
                    sharedConversationId: ac,
                    signal: b,
                    target: $
                });
                if (c.size > 1e6) throw Error("ChatGPT CSV attachment exceeds the preview size limit");
                let d = await c.text();
                return b.throwIfAborted(),
                    function(a) {
                        let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e6,
                            c = 1,
                            d = 1,
                            e = 1,
                            f = 1,
                            g = !1;
                        for (let b = 0; b < a.length; b += 1) {
                            let h = a[b];
                            if ('"' === h) {
                                g && '"' === a[b + 1] ? b += 1 : g = !g;
                                continue
                            }
                            if (g) continue;
                            let i = "\n" === h || "\r" === h && "\n" !== a[b + 1];
                            if ("," === h ? (c += 1, d = Math.max(d, c), f += 1) : i && b + 1 < a.length && (c = 1, e += 1, f += 1), c > 100 || e > 1e4 || f > 1e5) throw Error("CSV exceeds preview shape limits")
                        }
                        if (e * d > b) throw Error("CSV exceeds preview shape limits");
                        return (0, N.planCsvImport)(a).values
                    }(d)
            }, W[9] = Y, W[10] = ab, W[11] = ac, W[12] = $, W[13] = h) : h = W[13], W[14] !== f || W[15] !== h ? (j = {
                queryKey: f,
                queryFn: h,
                retry: !1,
                staleTime: O.b.FIVE_MINUTES
            }, W[14] = f, W[15] = h, W[16] = j) : j = W[16];
            let {
                data: ad,
                isError: ae,
                isLoading: af,
                refetch: ag
            } = (0, J.a)(j);
            W[17] !== X.name ? (k = (X.name.split("/").at(-1) ?? "").replace(/[-_]/gu, " ").split(".")[0] ?? "", W[17] = X.name, W[18] = k) : k = W[18];
            let ah = k;
            W[19] !== X.name || W[20] !== aa ? (l = aa.formatMessage({
                id: "chatgpt.userMessage.csvPreview.download",
                defaultMessage: "Download {filename}"
            }, {
                filename: X.name
            }), W[19] = X.name, W[20] = aa, W[21] = l) : l = W[21];
            let ai = l;
            W[22] !== X.name || W[23] !== aa ? (m = aa.formatMessage({
                id: "chatgpt.userMessage.csvPreview.open",
                defaultMessage: "Open {filename}"
            }, {
                filename: X.name
            }), W[22] = X.name, W[23] = aa, W[24] = m) : m = W[24];
            let aj = m;
            W[25] !== X.name || W[26] !== Y || W[27] !== ab || W[28] !== _ || W[29] !== ac || W[30] !== $ ? (n = () => {
                (0, Q.b)({
                    conversationId: Y,
                    fileName: X.name,
                    gizmoId: ab,
                    sharedConversationId: ac,
                    target: $
                }).catch(a => {
                    y.a.error("ChatGPT CSV attachment failed to download", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    }), _.get(p.f).danger((0, d.jsx)(i.a, {
                        id: "chatgpt.userMessage.csvPreview.downloadFailed",
                        defaultMessage: "Couldn't download this file. Try again"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgpt.userMessage.csvPreview.downloadFailed"
                        }
                    })
                })
            }, W[25] = X.name, W[26] = Y, W[27] = ab, W[28] = _, W[29] = ac, W[30] = $, W[31] = n) : n = W[31];
            let ak = n;
            W[32] !== X.isSharedLibraryFile || W[33] !== X.mimeType || W[34] !== X.name || W[35] !== Y || W[36] !== ab || W[37] !== _ || W[38] !== ac || W[39] !== Z || W[40] !== $ ? (r = () => {
                (0, G.openChatGptFile)(_, {
                    isAccessBlocked: a => (0, D.j)(a, Y) || !0 === X.isSharedLibraryFile && a.get(q.b),
                    browserPreview: (0, P.a)(X.name, X.mimeType),
                    conversationId: Y,
                    fileName: X.name,
                    mimeType: X.mimeType,
                    gizmoId: ab,
                    sharedConversationId: ac,
                    tabKey: Z,
                    target: $
                }).catch(U)
            }, W[32] = X.isSharedLibraryFile, W[33] = X.mimeType, W[34] = X.name, W[35] = Y, W[36] = ab, W[37] = _, W[38] = ac, W[39] = Z, W[40] = $, W[41] = r) : r = W[41];
            let al = r;
            if (af) {
                let a, b;
                W[42] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(o.a, {
                    "aria-hidden": !0
                }), W[42] = a) : a = W[42], W[43] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsxs)("div", {
                    className: "flex h-full items-center justify-center",
                    children: [a, (0, d.jsx)("span", {
                        className: "sr-only",
                        children: (0, d.jsx)(i.a, {
                            id: "chatgpt.userMessage.csvPreview.loading",
                            defaultMessage: "Loading table preview"
                        })
                    })]
                }), W[43] = b) : b = W[43], s = b
            } else if (ae) {
                let a, b, c, e;
                W[44] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, d.jsx)(i.a, {
                        id: "chatgpt.userMessage.csvPreview.error",
                        defaultMessage: "Unable to display table preview"
                    })
                }), W[44] = a) : a = W[44], W[45] !== ag ? (b = () => void ag(), W[45] = ag, W[46] = b) : b = W[46], W[47] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(i.a, {
                    id: "chatgpt.userMessage.csvPreview.retry",
                    defaultMessage: "Try again"
                }), W[47] = c) : c = W[47], W[48] !== b ? (e = (0, d.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-3 px-4 text-center",
                    role: "alert",
                    children: [a, (0, d.jsx)(L.a, {
                        color: "secondary",
                        onClick: b,
                        children: c
                    })]
                }), W[48] = b, W[49] = e) : e = W[49], s = e
            } else if (null == ad || 0 === ad.length) {
                let a;
                W[50] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)("div", {
                    className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondary",
                    children: (0, d.jsx)(i.a, {
                        id: "chatgpt.userMessage.csvPreview.empty",
                        defaultMessage: "This CSV file is empty"
                    })
                }), W[50] = a) : a = W[50], s = a
            } else {
                let a, b, c;
                W[51] !== ad[0] ? (a = ad[0] ?? [], W[51] = ad[0], W[52] = a) : a = W[52], W[53] !== ad ? (b = ad.slice(1), W[53] = ad, W[54] = b) : b = W[54], W[55] !== a || W[56] !== b ? (c = (0, d.jsx)(V, {
                    columnNames: a,
                    rows: b
                }), W[55] = a, W[56] = b, W[57] = c) : c = W[57], s = c
            }
            return W[58] !== ah ? (t = (0, d.jsx)("span", {
                className: "truncate font-semibold text-default capitalize",
                children: ah
            }), W[58] = ah, W[59] = t) : t = W[59], W[60] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, d.jsx)(M.a, {
                asset: R.a
            }), W[60] = u) : u = W[60], W[61] !== ai || W[62] !== ak ? (v = (0, d.jsx)(L.a, {
                "aria-label": ai,
                color: "ghost",
                onClick: ak,
                size: "iconCircleSm",
                children: u
            }), W[61] = ai, W[62] = ak, W[63] = v) : v = W[63], W[64] !== ai || W[65] !== v ? (x = (0, d.jsx)(I.a, {
                content: ai,
                children: v
            }), W[64] = ai, W[65] = v, W[66] = x) : x = W[66], W[67] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, d.jsx)(M.a, {
                asset: S.a
            }), W[67] = z) : z = W[67], W[68] !== al || W[69] !== aj ? (A = (0, d.jsx)(L.a, {
                "aria-label": aj,
                color: "ghost",
                onClick: al,
                size: "iconCircleSm",
                children: z
            }), W[68] = al, W[69] = aj, W[70] = A) : A = W[70], W[71] !== aj || W[72] !== A ? (B = (0, d.jsx)(I.a, {
                content: aj,
                children: A
            }), W[71] = aj, W[72] = A, W[73] = B) : B = W[73], W[74] !== x || W[75] !== B ? (E = (0, d.jsxs)("span", {
                className: "flex items-center gap-2",
                children: [x, B]
            }), W[74] = x, W[75] = B, W[76] = E) : E = W[76], W[77] !== t || W[78] !== E ? (F = (0, d.jsxs)("header", {
                className: "flex h-12 items-center justify-between gap-2 px-4 select-none",
                children: [t, E]
            }), W[77] = t, W[78] = E, W[79] = F) : F = W[79], W[80] !== s ? (H = (0, d.jsx)("div", {
                className: "h-72 border-t border-default",
                children: s
            }), W[80] = s, W[81] = H) : H = W[81], W[82] !== X.name || W[83] !== F || W[84] !== H ? (T = (0, d.jsxs)("section", {
                className: "w-full overflow-hidden rounded-2xl border border-default bg-surface",
                "aria-label": X.name,
                children: [F, H]
            }), W[82] = X.name, W[83] = F, W[84] = H, W[85] = T) : T = W[85], T
        }

        function U(a) {
            y.a.error("ChatGPT CSV attachment failed to open", {
                safe: {},
                sensitive: {
                    error: a
                }
            })
        }

        function V(a) {
            let b, c, f, g, i, j, k, l, m, n, o, p, q = (0, e.c)(40),
                {
                    columnNames: r,
                    rows: s
                } = a,
                [t, u] = (0, h.useState)(0),
                v = Math.max(0, Math.floor(t / 40) - 5),
                w = Math.min(s.length, v + 18);
            if (q[0] !== r || q[1] !== v || q[2] !== w || q[3] !== s) {
                let a, e, h, m, n = s.slice(v, w),
                    o = 40 * v;
                b = (s.length - w) * 40, q[12] === Symbol.for("react.memo_cache_sentinel") ? (a = a => {
                    u(a.currentTarget.scrollTop)
                }, q[12] = a) : a = q[12], k = "h-full overflow-auto", l = a, g = "min-w-full border-separate border-spacing-0 text-start text-sm", i = s.length + 1, q[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, d.jsx)("th", {
                    className: "sticky start-0 top-0 z-20 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                    "aria-hidden": !0
                }), q[13] = e) : e = q[13], q[14] !== r ? (h = r.map(W), q[14] = r, q[15] = h) : h = q[15], q[16] !== h ? (j = (0, d.jsx)("thead", {
                    children: (0, d.jsxs)("tr", {
                        "aria-rowindex": 1,
                        children: [e, h]
                    })
                }), q[16] = h, q[17] = j) : j = q[17], q[18] !== r.length || q[19] !== o ? (c = o > 0 ? (0, d.jsx)("tr", {
                    "aria-hidden": !0,
                    children: (0, d.jsx)("td", {
                        colSpan: r.length + 1,
                        style: {
                            height: o
                        }
                    })
                }) : null, q[18] = r.length, q[19] = o, q[20] = c) : c = q[20], q[21] !== r || q[22] !== v ? (m = (a, b) => {
                    let c = v + b;
                    return (0, d.jsxs)("tr", {
                        "aria-rowindex": c + 2,
                        children: [(0, d.jsx)("th", {
                            className: "sticky start-0 z-10 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                            scope: "row",
                            children: c + 1
                        }), r.map((b, c) => {
                            let e = a[c] ?? "";
                            return (0, d.jsx)("td", {
                                className: "h-10 min-w-32 border-e border-b border-default px-3 text-default last:border-e-0",
                                title: e,
                                children: (0, d.jsx)("span", {
                                    className: "block max-w-80 truncate",
                                    children: e
                                })
                            }, c)
                        })]
                    }, c)
                }, q[21] = r, q[22] = v, q[23] = m) : m = q[23], f = n.map(m), q[0] = r, q[1] = v, q[2] = w, q[3] = s, q[4] = b, q[5] = c, q[6] = f, q[7] = g, q[8] = i, q[9] = j, q[10] = k, q[11] = l
            } else b = q[4], c = q[5], f = q[6], g = q[7], i = q[8], j = q[9], k = q[10], l = q[11];
            return q[24] !== b || q[25] !== r.length ? (m = b > 0 ? (0, d.jsx)("tr", {
                "aria-hidden": !0,
                children: (0, d.jsx)("td", {
                    colSpan: r.length + 1,
                    style: {
                        height: b
                    }
                })
            }) : null, q[24] = b, q[25] = r.length, q[26] = m) : m = q[26], q[27] !== c || q[28] !== f || q[29] !== m ? (n = (0, d.jsxs)("tbody", {
                children: [c, f, m]
            }), q[27] = c, q[28] = f, q[29] = m, q[30] = n) : n = q[30], q[31] !== g || q[32] !== i || q[33] !== j || q[34] !== n ? (o = (0, d.jsxs)("table", {
                className: g,
                "aria-rowcount": i,
                children: [j, n]
            }), q[31] = g, q[32] = i, q[33] = j, q[34] = n, q[35] = o) : o = q[35], q[36] !== o || q[37] !== k || q[38] !== l ? (p = (0, d.jsx)("div", {
                className: k,
                onScroll: l,
                children: o
            }), q[36] = o, q[37] = k, q[38] = l, q[39] = p) : p = q[39], p
        }

        function W(a, b) {
            return (0, d.jsx)("th", {
                className: "sticky top-0 z-10 h-10 min-w-32 border-e border-b border-default bg-surface-secondary px-3 text-start font-semibold text-default last:border-e-0",
                scope: "col",
                title: a,
                children: (0, d.jsx)("span", {
                    className: "block max-w-80 truncate",
                    children: a
                })
            }, `${a}-${String(b)}`)
        }

        function X(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (a.isSharedLibraryFile && !b) return null;
            if (null != a.mountedLibraryFileId) return {
                fileName: a.name,
                mimeType: a.mountedLibraryMimeType ?? a.mimeType ?? void 0,
                mountedLibraryFileId: a.mountedLibraryFileId,
                sourceUrl: a.sourceUrl,
                type: "mounted-library"
            };
            let c = (0, Q.j)(a.downloadUrl);
            return null != c ? {
                downloadUrl: c,
                fileId: a.fileId ?? void 0,
                isSharedLibraryFile: a.isSharedLibraryFile,
                libraryFileId: a.libraryFileId ?? void 0,
                type: "download-url"
            } : null == a.fileId ? null : {
                fileId: a.fileId,
                libraryFileId: a.libraryFileId ?? void 0,
                type: "file-id"
            }
        }
        let Y = (0, m.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(469955)]).then(c.bind(c, "lUP2"))).ChatGptUserMessageAudioAttachment);

        function Z(a) {
            let b, c, f, h, i = (0, e.c)(15),
                {
                    attachments: k,
                    conversationId: l,
                    messageId: m,
                    shouldBlockExternalEgress: n,
                    tabKeyPrefix: o
                } = a,
                {
                    accountId: p
                } = (0, g.z)(j.n),
                r = (0, g.z)(q.a),
                {
                    data: s
                } = (0, g.x)(A.a, p);
            i[0] !== s?.features || i[1] !== n ? (b = !n && s?.features?.includes("graphite") === !0, i[0] = s?.features, i[1] = n, i[2] = b) : b = i[2];
            let t = b;
            if (i[3] !== k || i[4] !== l || i[5] !== m || i[6] !== r || i[7] !== n || i[8] !== t || i[9] !== o) {
                let a = t ? k.flatMap((a, b) => {
                        let c = X(a, r);
                        return a.name.trim().toLowerCase().endsWith(".csv") && null != a.sizeBytes && a.sizeBytes <= 1e6 && null != c ? [{
                            attachment: a,
                            attachmentIndex: b,
                            target: c
                        }] : []
                    }) : [],
                    b = new Set(a.map($)),
                    e = k.flatMap((a, c) => b.has(c) ? [] : [{
                        attachment: a,
                        attachmentIndex: c
                    }]);
                c = e.length > 0 ? (0, d.jsx)("div", {
                    className: "flex w-full flex-wrap justify-end gap-2 self-end md:w-4/5",
                    children: e.map(a => {
                        let {
                            attachment: b,
                            attachmentIndex: c
                        } = a;
                        return (0, d.jsx)(_, {
                            attachment: b,
                            conversationId: l,
                            messageId: m,
                            shouldBlockExternalEgress: n,
                            tabKey: `${o}:${String(c)}:${b.name}`
                        }, `${b.name}-${String(c)}`)
                    })
                }) : null, f = a.length > 0 ? (0, d.jsx)("div", {
                    className: "flex w-full flex-col gap-2 self-end md:w-4/5",
                    children: a.map(a => {
                        let {
                            attachment: b,
                            attachmentIndex: c,
                            target: e
                        } = a;
                        return (0, d.jsx)(T, {
                            attachment: b,
                            conversationId: l,
                            tabKey: `${o}:${String(c)}:${b.name}`,
                            target: e
                        }, `${b.name}-${String(c)}`)
                    })
                }) : null, i[3] = k, i[4] = l, i[5] = m, i[6] = r, i[7] = n, i[8] = t, i[9] = o, i[10] = c, i[11] = f
            } else c = i[10], f = i[11];
            return i[12] !== c || i[13] !== f ? (h = (0, d.jsxs)(d.Fragment, {
                children: [c, f]
            }), i[12] = c, i[13] = f, i[14] = h) : h = i[14], h
        }

        function $(a) {
            let {
                attachmentIndex: b
            } = a;
            return b
        }

        function _(a) {
            let b, c, j, m, A, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, Z, $, _, aa, ab = (0, e.c)(138),
                {
                    attachment: ac,
                    conversationId: ad,
                    copyLabel: ae,
                    messageId: af,
                    shouldBlockExternalEgress: ag,
                    tabKey: ah,
                    variant: ai
                } = a,
                aj = void 0 === ai ? "card" : ai,
                ak = (0, g.y)(w.a),
                al = (0, x.i)(),
                am = (0, g.x)(C.y, ad),
                [an, ao] = (0, h.useState)(!1),
                ap = (0, h.useRef)(null);
            ab[0] === Symbol.for("react.memo_cache_sentinel") ? (b = () => () => ap.current?.abort(), c = [], ab[0] = b, ab[1] = c) : (b = ab[0], c = ab[1]), (0, h.useEffect)(b, c);
            let aq = (0, g.z)(q.b);
            if (ab[2] !== ac || ab[3] !== am || ab[4] !== aq || ab[5] !== ag || ab[6] !== al || ab[7] !== aj) {
                let a;
                K = X(ac, !aq), m = !ag && null != K, A = "card" === aj && "tpp" !== am && "flora" !== am && !ag && null != K && (0, z.d)({
                    fileName: ac.name,
                    mimeType: ac.mountedLibraryMimeType ?? ac.mimeType
                }), j = al.checkGate("2666007232", {
                    disableExposureLog: !A
                });
                let b = ac.mountedLibraryFileId ?? ac.libraryFileId;
                ab[14] !== b ? (a = (0, s.a)(b), ab[14] = b, ab[15] = a) : a = ab[15], I = a;
                let c = m ? (0, F.a)(K, ac.name, ac.mimeType) : null;
                J = null == c ? null : (0, v.d)(c)?.sourceUrl, null != c && ac.isSourceReference && (J = ac.sourceUrl ?? J), ab[2] = ac, ab[3] = am, ab[4] = aq, ab[5] = ag, ab[6] = al, ab[7] = aj, ab[8] = j, ab[9] = m, ab[10] = A, ab[11] = I, ab[12] = J, ab[13] = K
            } else j = ab[8], m = ab[9], A = ab[10], I = ab[11], J = ab[12], K = ab[13];
            ab[16] !== ac.isSharedLibraryFile || ab[17] !== ac.isSourceReference || ab[18] !== ac.libraryArtifactType || ab[19] !== ac.mimeType || ab[20] !== ac.mountedLibraryFileId || ab[21] !== ac.mountedLibraryMimeType || ab[22] !== ac.name || ab[23] !== m || ab[24] !== ad || ab[25] !== an || ab[26] !== af || ab[27] !== ak || ab[28] !== J || ab[29] !== ah || ab[30] !== K ? (L = m ? a => {
                if (ac.isSourceReference && null != J && null != ac.mountedLibraryFileId) return void(0, u.b)(ak, {
                    href: J,
                    title: ac.name,
                    libraryFileId: ac.mountedLibraryFileId,
                    mimeType: ac.mimeType
                }, a, ad);
                if (an) return;
                let b = new AbortController;
                ap.current = b, ao(!0);
                let c = (0, H.a)(ak.value.pathname);
                (0, G.openChatGptFile)(ak, {
                    connectedFileIntent: "open",
                    interaction: a,
                    isAccessBlocked: a => (0, D.j)(a, ad) || !0 === ac.isSharedLibraryFile && a.get(q.b),
                    browserPreview: !0,
                    conversationViewerUrl: "mounted-library" === K.type ? void 0 : (0, E.a)(ac.name),
                    conversationId: ad,
                    messageId: af,
                    fileName: ac.name,
                    libraryArtifactType: ac.libraryArtifactType,
                    gizmoId: ak.get(C.T, ad),
                    sharedConversationId: null != c && c.params.sharedConversationId !== ad ? null : c?.params.sharedConversationId ?? ak.get(C.ab, ad),
                    mimeType: ac.mountedLibraryMimeType ?? ac.mimeType,
                    signal: b.signal,
                    tabKey: ah,
                    target: K
                }).catch(a => {
                    b.signal.aborted || ac.isSharedLibraryFile && ak.get(q.b) || (y.a.warning("ChatGPT user attachment failed to open", {
                        safe: {},
                        sensitive: {
                            error: a
                        }
                    }), ak.get(p.f).danger((0, d.jsx)(i.a, {
                        id: "file-tile.open-failed",
                        defaultMessage: "Failed to open {fileName}",
                        values: {
                            fileName: ac.name
                        }
                    }), {
                        errorAnalytics: {
                            toastId: "unknown"
                        }
                    }))
                }).finally(() => {
                    ap.current = null, ao(!1)
                })
            } : void 0, ab[16] = ac.isSharedLibraryFile, ab[17] = ac.isSourceReference, ab[18] = ac.libraryArtifactType, ab[19] = ac.mimeType, ab[20] = ac.mountedLibraryFileId, ab[21] = ac.mountedLibraryMimeType, ab[22] = ac.name, ab[23] = m, ab[24] = ad, ab[25] = an, ab[26] = af, ab[27] = ak, ab[28] = J, ab[29] = ah, ab[30] = K, ab[31] = L) : L = ab[31];
            let ar = L;
            ab[32] !== ar ? (M = a => {
                null != ar && (a.preventDefault(), ar(a))
            }, ab[32] = ar, ab[33] = M) : M = ab[33];
            let as = M;
            if (A && j) {
                let a;
                return ab[34] !== ac || ab[35] !== ad || ab[36] !== K ? (a = (0, d.jsx)(Y, {
                    attachment: ac,
                    conversationId: ad,
                    target: K
                }), ab[34] = ac, ab[35] = ad, ab[36] = K, ab[37] = a) : a = ab[37], a
            }
            if ("inline" === aj) {
                let a, b, c, e, f, g, h = ac.mountedLibraryFileId ?? ac.libraryFileId;
                ab[38] !== ac.fileId || ab[39] !== ac.isSourceReference || ab[40] !== ac.libraryArtifactType || ab[41] !== ac.mimeType || ab[42] !== ac.mountedLibraryMimeType || ab[43] !== ac.name || ab[44] !== ac.sourceUrl || ab[45] !== ae || ab[46] !== h ? (a = null == h ? void 0 : (0, k.e)({
                    label: ae ?? ac.name,
                    href: (0, r.c)({
                        fileId: ac.fileId ?? "",
                        libraryArtifactType: ac.libraryArtifactType ?? "",
                        libraryFileId: h,
                        mimeType: ac.mountedLibraryMimeType ?? ac.mimeType ?? "",
                        ...ac.isSourceReference ? {
                            sourceUrl: ac.sourceUrl,
                            serializeAsUrl: !0
                        } : {}
                    })
                }), ab[38] = ac.fileId, ab[39] = ac.isSourceReference, ab[40] = ac.libraryArtifactType, ab[41] = ac.mimeType, ab[42] = ac.mountedLibraryMimeType, ab[43] = ac.name, ab[44] = ac.sourceUrl, ab[45] = ae, ab[46] = h, ab[47] = a) : a = ab[47];
                let i = a;
                ab[48] !== ac.libraryArtifactType || ab[49] !== ac.libraryFileId || ab[50] !== ac.mimeType || ab[51] !== ac.mountedLibraryFileId || ab[52] !== ac.mountedLibraryMimeType || ab[53] !== ac.name || ab[54] !== ac.sourceUrl || ab[55] !== an || ab[56] !== I ? (b = an ? (0, d.jsx)(o.a, {
                    as: "span",
                    className: "size-4"
                }) : (0, d.jsx)(t.a, {
                    fileName: ac.name,
                    libraryArtifactType: ac.libraryArtifactType,
                    mimeType: ac.mimeType ?? void 0,
                    provider: I,
                    sourceMimeType: ac.mountedLibraryMimeType ?? void 0,
                    mountedLibraryFileId: ac.mountedLibraryFileId ?? ac.libraryFileId,
                    sourceUrl: ac.sourceUrl ?? void 0,
                    style: "message-inline"
                }), ab[48] = ac.libraryArtifactType, ab[49] = ac.libraryFileId, ab[50] = ac.mimeType, ab[51] = ac.mountedLibraryFileId, ab[52] = ac.mountedLibraryMimeType, ab[53] = ac.name, ab[54] = ac.sourceUrl, ab[55] = an, ab[56] = I, ab[57] = b) : b = ab[57], ab[58] !== ac ? (c = 0 === (0, B.i)(ac).length ? ac.name : (0, B.h)(ac.name), ab[58] = ac, ab[59] = c) : c = ab[59], ab[60] !== c ? (e = (0, d.jsx)("span", {
                    className: "max-w-64 self-baseline truncate",
                    children: c
                }), ab[60] = c, ab[61] = e) : e = ab[61], ab[62] !== b || ab[63] !== e ? (f = (0, d.jsxs)(d.Fragment, {
                    children: [b, e]
                }), ab[62] = b, ab[63] = e, ab[64] = f) : f = ab[64];
                let j = f;
                if (null != J) {
                    let a;
                    return ab[65] !== ac.name || ab[66] !== j || ab[67] !== i || ab[68] !== as || ab[69] !== J ? (a = (0, d.jsx)(l.a, {
                        ...i,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        "aria-label": ac.name,
                        href: J,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ac.name,
                        onUnmodifiedClick: as,
                        children: j
                    }), ab[65] = ac.name, ab[66] = j, ab[67] = i, ab[68] = as, ab[69] = J, ab[70] = a) : a = ab[70], a
                }
                return ab[71] !== ac.name || ab[72] !== m || ab[73] !== j || ab[74] !== i || ab[75] !== an || ab[76] !== ar ? (g = m ? (0, d.jsx)("button", {
                    ...i,
                    type: "button",
                    className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                    "aria-busy": an,
                    "aria-label": ac.name,
                    disabled: an,
                    onClick: ar,
                    children: j
                }) : (0, d.jsx)("span", {
                    ...i,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    children: j
                }), ab[71] = ac.name, ab[72] = m, ab[73] = j, ab[74] = i, ab[75] = an, ab[76] = ar, ab[77] = g) : g = ab[77], g
            }
            if (ab[78] !== ac.libraryArtifactType || ab[79] !== ac.libraryFileId || ab[80] !== ac.mimeType || ab[81] !== ac.mountedLibraryFileId || ab[82] !== ac.mountedLibraryMimeType || ab[83] !== ac.name || ab[84] !== ac.sourceUrl || ab[85] !== m || ab[86] !== an || ab[87] !== ar || ab[88] !== as || ab[89] !== I || ab[90] !== J) {
                let a = (0, f.f)({
                        fileName: ac.name,
                        mimeType: ac.mimeType ?? void 0
                    }),
                    b = null;
                if (null != J) {
                    let a;
                    ab[101] !== ac.name || ab[102] !== as || ab[103] !== J ? (a = (0, d.jsx)(n.b, {
                        "aria-label": ac.name,
                        href: J,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ac.name,
                        onUnmodifiedClick: as
                    }), ab[101] = ac.name, ab[102] = as, ab[103] = J, ab[104] = a) : a = ab[104], b = a
                } else if (m) {
                    let a;
                    ab[105] !== ac.name || ab[106] !== an || ab[107] !== ar ? (a = (0, d.jsx)(n.b, {
                        "aria-busy": an,
                        "aria-label": ac.name,
                        disabled: an,
                        onClick: ar
                    }), ab[105] = ac.name, ab[106] = an, ab[107] = ar, ab[108] = a) : a = ab[108], b = a
                }
                P = n.a, R = "span", S = "file-tile", W = "group/resource-card relative", Q = b, O = n.h, U = "pointer-events-none relative z-10", ab[109] !== ac.libraryArtifactType || ab[110] !== ac.libraryFileId || ab[111] !== ac.mimeType || ab[112] !== ac.mountedLibraryFileId || ab[113] !== ac.mountedLibraryMimeType || ab[114] !== ac.name || ab[115] !== ac.sourceUrl || ab[116] !== an || ab[117] !== I ? (V = (0, d.jsx)("span", {
                    className: "flex size-10 items-center justify-center overflow-hidden rounded-xl",
                    children: an ? (0, d.jsx)(o.a, {
                        as: "span",
                        className: "size-5"
                    }) : (0, d.jsx)(t.a, {
                        fileName: ac.name,
                        libraryArtifactType: ac.libraryArtifactType,
                        mimeType: ac.mimeType ?? void 0,
                        provider: I,
                        sourceMimeType: ac.mountedLibraryMimeType ?? void 0,
                        mountedLibraryFileId: ac.mountedLibraryFileId ?? ac.libraryFileId,
                        sourceUrl: ac.sourceUrl ?? void 0,
                        style: "message-card"
                    })
                }), ab[109] = ac.libraryArtifactType, ab[110] = ac.libraryFileId, ab[111] = ac.mimeType, ab[112] = ac.mountedLibraryFileId, ab[113] = ac.mountedLibraryMimeType, ab[114] = ac.name, ab[115] = ac.sourceUrl, ab[116] = an, ab[117] = I, ab[118] = V) : V = ab[118], N = i.a, T = (0, f.d)(a.category), ab[78] = ac.libraryArtifactType, ab[79] = ac.libraryFileId, ab[80] = ac.mimeType, ab[81] = ac.mountedLibraryFileId, ab[82] = ac.mountedLibraryMimeType, ab[83] = ac.name, ab[84] = ac.sourceUrl, ab[85] = m, ab[86] = an, ab[87] = ar, ab[88] = as, ab[89] = I, ab[90] = J, ab[91] = N, ab[92] = O, ab[93] = P, ab[94] = Q, ab[95] = R, ab[96] = S, ab[97] = T, ab[98] = U, ab[99] = V, ab[100] = W
            } else N = ab[91], O = ab[92], P = ab[93], Q = ab[94], R = ab[95], S = ab[96], T = ab[97], U = ab[98], V = ab[99], W = ab[100];
            ab[119] !== N || ab[120] !== T ? (Z = (0, d.jsx)(N, {
                ...T
            }), ab[119] = N, ab[120] = T, ab[121] = Z) : Z = ab[121];
            let at = null == J ? ac.name : void 0;
            return ab[122] !== O || ab[123] !== ac.name || ab[124] !== Z || ab[125] !== at || ab[126] !== U || ab[127] !== V ? ($ = (0, d.jsx)(O, {
                className: U,
                icon: V,
                subtitle: Z,
                title: ac.name,
                titleTooltip: at,
                variant: "file-tile"
            }), ab[122] = O, ab[123] = ac.name, ab[124] = Z, ab[125] = at, ab[126] = U, ab[127] = V, ab[128] = $) : $ = ab[128], ab[129] !== Q || ab[130] !== $ || ab[131] !== W ? (_ = (0, d.jsxs)("span", {
                className: W,
                children: [Q, $]
            }), ab[129] = Q, ab[130] = $, ab[131] = W, ab[132] = _) : _ = ab[132], ab[133] !== P || ab[134] !== R || ab[135] !== S || ab[136] !== _ ? (aa = (0, d.jsx)(P, {
                as: R,
                variant: S,
                children: _
            }), ab[133] = P, ab[134] = R, ab[135] = S, ab[136] = _, ab[137] = aa) : aa = ab[137], aa
        }
    }),
    Aa8X: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("zjpG"),
            h = c("bf6R");
        c.d(b, {}, {
            a: function(a) {
                let b, c, i, j, k, l, m = (0, e.c)(14),
                    {
                        settings: n
                    } = a,
                    {
                        style_label: o,
                        aspect_ratio: p,
                        image_count: q
                    } = n;
                if (!o && null == p && null == q) return null;
                m[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsxs)(d.Fragment, {
                    children: [" ", (0, d.jsx)(g.a, {}), " "]
                }), m[0] = b) : b = m[0];
                let r = b;
                m[1] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(h.Th, {}), m[1] = c) : c = m[1], m[2] !== o ? (i = o && (0, d.jsx)("bdi", {
                    children: o
                }), m[2] = o, m[3] = i) : i = m[3];
                let s = o && null != p ? r : null;
                m[4] !== p ? (j = null != p && (0, d.jsx)("bdi", {
                    children: "auto" === p ? (0, d.jsx)(f.a, {
                        id: "chatgptConversations.imageOptions.sent.autoRatio",
                        defaultMessage: "Auto"
                    }) : p
                }), m[4] = p, m[5] = j) : j = m[5];
                let t = (o || null != p) && null != q ? r : null;
                return m[6] !== q ? (k = null != q && (0, d.jsx)("bdi", {
                    children: (0, d.jsx)(f.a, {
                        id: "chatgptConversations.imageOptions.sent.count",
                        defaultMessage: "{count, plural, one {# image} other {# images}}",
                        values: {
                            count: q
                        }
                    })
                }), m[6] = q, m[7] = k) : k = m[7], m[8] !== i || m[9] !== s || m[10] !== j || m[11] !== t || m[12] !== k ? (l = (0, d.jsxs)("div", {
                    role: "note",
                    className: "flex max-w-[70%] items-center gap-1.5 self-end pe-3 text-sm text-secondary",
                    children: [c, (0, d.jsxs)("span", {
                        className: "min-w-0 text-end break-words",
                        children: [i, s, j, t, k]
                    })]
                }), m[8] = i, m[9] = s, m[10] = j, m[11] = t, m[12] = k, m[13] = l) : l = m[13], l
            }
        })
    }),
    R1rp: (function(a, b, c) {
        c.d(b, {
            a: () => j,
            b: () => k
        });
        var d = c("Q840"),
            e = c("OWtl"),
            f = c("twmu"),
            g = c("Cslg");
        let h = (0, d.c)(e.a, a => {
                let {
                    get: b
                } = a, c = b(g.f);
                if (null != c && "allowed" === b(g.o)) return b(f.b, c).data?.accounts[c]?.features
            }),
            i = (0, d.c)(e.a, a => {
                let {
                    get: b
                } = a, c = b(g.o);
                return "loading" === c || "allowed" === c && b(f.b, b(g.f)).isPending
            }),
            j = (0, d.c)(e.a, a => {
                let {
                    get: b
                } = a;
                return b(h)?.includes("library_shared_content_available") === !0
            }),
            k = (0, d.c)(e.a, a => {
                let {
                    get: b
                } = a;
                return !b(i) && !b(j)
            })
    })
};