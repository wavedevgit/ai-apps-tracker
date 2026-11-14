export const __rspack_esm_ids = [308581];
export const __webpack_modules__ = {
    oTAj: (function(e, t, a) {
        a.d(t, {
            a: () => ee
        });
        var n = a("ABep"),
            l = a("QosV"),
            r = a("SIRb"),
            i = a("slpy"),
            s = a("BolX"),
            o = a("I07G"),
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
            T = a("Ymcw"),
            S = a("FqCE"),
            k = a("WE3h"),
            E = a("TxRk"),
            _ = a("e2wX"),
            F = a("k7G6"),
            C = a("tSEg"),
            L = a("lBzi"),
            M = a("Kmy6"),
            A = a("M0Ez"),
            N = a("ZfbS"),
            z = a("drbS"),
            B = a("YRXX"),
            U = a("dQRk"),
            P = a("NcJA");

        function R(e) {
            let t, a, r, i, o = (0, l.c)(17),
                {
                    mention: d,
                    conversationId: c,
                    shouldBlockExternalEgress: m
                } = e,
                u = (0, s.y)(C.a),
                h = (0, s.z)(P.a.registration$)?.host,
                f = (0, s.z)(P.a.boundConversationId$),
                p = (0, s.x)(U.j, c);
            o[0] !== f || o[1] !== h || o[2] !== d.path || o[3] !== u || o[4] !== p ? (t = null != p && f === p ? h?.getReferenceAction?.(d.path, () => u.get(P.a.registration$)?.host === h && u.get(P.a.boundConversationId$) === p) : void 0, o[0] = f, o[1] = h, o[2] = d.path, o[3] = u, o[4] = p, o[5] = t) : t = o[5];
            let b = t;
            if (m || null == b) {
                let e;
                return o[6] !== d.label ? (e = (0, n.jsx)("span", {
                    children: d.label
                }), o[6] = d.label, o[7] = e) : e = o[7], e
            }
            return o[8] !== d.label || o[9] !== d.path ? (a = (0, y.e)({
                href: d.path,
                label: d.label
            }), o[8] = d.label, o[9] = d.path, o[10] = a) : a = o[10], o[11] !== d.label || o[12] !== a ? (r = (0, n.jsx)(E.a, {
                interactive: !0,
                dataAttributes: a,
                children: d.label
            }), o[11] = d.label, o[12] = a, o[13] = r) : r = o[13], o[14] !== b || o[15] !== r ? (i = (0, n.jsx)("button", {
                type: "button",
                onClick: b,
                children: r
            }), o[14] = b, o[15] = r, o[16] = i) : i = o[16], i
        }
        var $ = a("tHvi"),
            V = a("pdPj"),
            G = a("OWtl"),
            H = a("Kwur"),
            W = a("ZM7C"),
            q = a("gJdM"),
            K = a("iHfE"),
            O = a("OWHf"),
            X = a("t5e6");
        let J = (0, s.q)(G.a, (e, t) => {
            let {
                get: a
            } = t, n = a(W.a);
            return {
                enabled: null != n && a(V.a),
                queryKey: ["chatgpt-reference-image-message-thumbnail", n, a(W.b), e],
                queryFn: async t => {
                    let {
                        signal: a
                    } = t;
                    return (await H.Request.safeGet("/files/library/reference-images/{reference_image_id}/thumbnail_url", {
                        additionalHeaders: null == n ? void 0 : (0, O.a)(n),
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
            } = (0, s.z)(K.c, t), h = m && !c ? u?.find(e => e.id === d.referenceImageId) : void 0, f = !c && null == h;
            o[1] !== f ? (a = {
                enabled: f
            }, o[1] = f, o[2] = a) : a = o[2];
            let {
                data: p
            } = (0, s.x)(J, d.referenceImageId, a), b = E.a, x = (0, y.e)({
                href: (0, q.b)({
                    referenceImageId: d.referenceImageId,
                    assetPointer: h?.asset_pointer,
                    thumbnailAssetPointer: h?.thumbnail_asset_pointer
                }),
                label: d.name
            });
            return o[3] !== m || o[4] !== h || o[5] !== c || o[6] !== p ? (r = m && !c && (null != h || null != p) ? (0, n.jsx)("span", {
                children: (0, n.jsx)(X.a, {
                    alt: "",
                    assetPointer: h?.asset_pointer,
                    composerThumbnailUrl: h?.thumbnail_url ?? p,
                    fallbackUrl: h?.thumbnail_url ?? p,
                    name: null,
                    size: "response",
                    thumbnailAssetPointer: h?.thumbnail_asset_pointer,
                    useComposerThumbnailCache: !0
                })
            }) : (0, n.jsx)(w.jg, {}), o[3] = m, o[4] = h, o[5] = c, o[6] = p, o[7] = r) : r = o[7], o[8] !== b || o[9] !== d.name || o[10] !== x || o[11] !== r ? (i = (0, n.jsx)(b, {
                fontWeight: "inherit",
                dataAttributes: x,
                icon: r,
                iconSizing: "authored",
                layout: "inline-flow",
                tone: "composer-reference",
                children: d.name
            }), o[8] = b, o[9] = d.name, o[10] = x, o[11] = r, o[12] = i) : i = o[12], i
        }
        var D = a("rzdI");
        let Y = (0, j.a)(r.h, {
                suspendToParent: !0,
                errorFallback: e => {
                    let {
                        name: t
                    } = e;
                    return (0, n.jsx)(E.a, {
                        icon: (0, f.b)(),
                        children: t
                    })
                }
            }),
            Z = (0, s.t)("ChatGptUserMessageContentScope", {
                key: e => e.tabKeyPrefix,
                parent: C.a,
                retain: {
                    max: 0
                }
            });

        function ee(e) {
            let t, a, r, i, o, c, m, u, h, f, b, y, I, w = (0, l.c)(55),
                {
                    ref: j,
                    plainTextRef: T,
                    conversationId: S,
                    hostId: E,
                    mentions: _,
                    skillMentions: F,
                    folderMentions: C,
                    referenceImageMentions: M,
                    message: A,
                    messageId: N,
                    renderFormat: B,
                    shouldBlockExternalEgress: U,
                    systemHintMentions: P,
                    tabKeyPrefix: R
                } = e;
            w[0] !== F ? (t = void 0 === F ? [] : F, w[0] = F, w[1] = t) : t = w[1];
            let V = t;
            w[2] !== C ? (a = void 0 === C ? [] : C, w[2] = C, w[3] = a) : a = w[3];
            let G = a;
            w[4] !== M ? (r = void 0 === M ? [] : M, w[4] = M, w[5] = r) : r = w[5];
            let H = r;
            if (w[6] !== G || w[7] !== _ || w[8] !== H || w[9] !== V || w[10] !== A) i = [..._, ...V, ...G, ...H, ...A.includes($.a) ? (0, z.g)(A).filter(e => e.path.startsWith($.a)).map(e => ({
                ...e,
                label: (0, $.b)(e.label),
                officeSheet: !0
            })) : []].sort(en), w[6] = G, w[7] = _, w[8] = H, w[9] = V, w[10] = A, w[11] = i;
            else i = w[11];
            let W = i,
                q = (0, d.useId)();
            if (w[12] !== q) {
                let e;
                w[14] === Symbol.for("react.memo_cache_sentinel") ? (e = /[^a-z0-9-]/gi, w[14] = e) : e = w[14], o = q.replace(e, ""), w[12] = q, w[13] = o
            } else o = w[13];
            let K = `chatgpt-file-mention-${o}`;
            w[15] !== U || w[16] !== A ? (c = !U && A.includes("app://"), w[15] = U, w[16] = A, w[17] = c) : c = w[17];
            let O = c;
            w[18] !== O ? (m = {
                enabled: O
            }, w[18] = O, w[19] = m) : m = w[19];
            let {
                data: X
            } = (0, s.z)(L.m, m);
            if (w[20] !== O || w[21] !== P || w[22] !== X || w[23] !== A) {
                if (u = [], O && null != X)
                    for (let e of (0, z.g)(A)) {
                        let t = X[e.path];
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
                u.push(...P), w[20] = O, w[21] = P, w[22] = X, w[23] = A, w[24] = u
            } else u = w[24];
            w[25] !== K ? (h = {
                [K]: el
            }, w[25] = K, w[26] = h) : h = w[26];
            let J = h;
            w[27] !== W || w[28] !== u || w[29] !== A ? (f = e => {
                if (e.length === A.length) return A;
                let t = [...W, ...u].reduce(ea, e.length);
                return A.slice(0, t)
            }, w[27] = W, w[28] = u, w[29] = A, w[30] = f) : f = w[30];
            let Q = f;
            return w[31] !== S || w[32] !== E || w[33] !== W || w[34] !== N || w[35] !== u || w[36] !== U || w[37] !== R || w[38] !== A ? (b = {
                conversationId: S,
                hostId: E,
                message: A,
                messageId: N,
                mentions: W,
                shouldBlockExternalEgress: U,
                systemHintMentions: u,
                tabKeyPrefix: R
            }, w[31] = S, w[32] = E, w[33] = W, w[34] = N, w[35] = u, w[36] = U, w[37] = R, w[38] = A, w[39] = b) : b = w[39], w[40] !== K || w[41] !== J || w[42] !== Q || w[43] !== E || w[44] !== W || w[45] !== T || w[46] !== j || w[47] !== B || w[48] !== u || w[49] !== U || w[50] !== A ? (y = "markdown" === B ? (0, n.jsx)(x.a, {
                ref: j,
                cwd: null,
                directives: J,
                hostId: E,
                hasSerializedParagraphs: !0,
                renderMath: !1,
                serializeVisibleText: e => es(Q(e), W, u).map(e => "text" === e.kind ? e.text : `:${K}{kind="${e.kind}" index="${String(e.index)}"}`).join(""),
                text: A
            }) : (0, n.jsx)(g.a, {
                text: A,
                textTone: "user-message",
                children: e => {
                    let t = Q(e),
                        a = es(t, W, u);
                    return (0, n.jsx)(g.b, {
                        ref: a.some(et) ? j : T,
                        children: a.map((e, a) => "text" === e.kind ? (0, n.jsx)(v.a, {
                            renderLink: e => "text" === (0, p.x)(e) ? null : U ? e.label : (0, k.b)({
                                ...e,
                                hostId: E,
                                cwd: null
                            }),
                            preserveCodeDelimiters: "plain" === B,
                            sourceStartIndex: e.startIndex,
                            sourceText: t,
                            text: e.text
                        }, a) : (0, n.jsx)(el, {
                            name: K,
                            attributes: {
                                kind: e.kind,
                                index: String(e.index)
                            }
                        }, a))
                    })
                }
            }), w[40] = K, w[41] = J, w[42] = Q, w[43] = E, w[44] = W, w[45] = T, w[46] = j, w[47] = B, w[48] = u, w[49] = U, w[50] = A, w[51] = y) : y = w[51], w[52] !== b || w[53] !== y ? (I = (0, n.jsx)(s.b, {
                scope: Z,
                value: b,
                children: y
            }), w[52] = b, w[53] = y, w[54] = I) : I = w[54], I
        }

        function et(e) {
            return "text" !== e.kind
        }

        function ea(e, t) {
            return t.startIndex < e && t.endIndex > e ? Math.min(e, t.startIndex) : e
        }

        function en(e, t) {
            return e.startIndex - t.startIndex
        }

        function el(e) {
            let t, a = (0, l.c)(61),
                {
                    attributes: r
                } = e,
                {
                    value: o
                } = (0, s.y)(Z),
                m = (0, s.z)(u.f),
                p = (0, s.z)(u.k);
            a[0] !== r.index ? (t = "string" == typeof r.index ? Number.parseInt(r.index, 10) : 0 / 0, a[0] = r.index, a[1] = t) : t = a[1];
            let b = t;
            if ("system-hint" === r.kind) {
                let e, t = o.systemHintMentions[b];
                return a[2] !== t ? (e = null == t ? null : (0, n.jsx)(er, {
                    mention: t
                }), a[2] = t, a[3] = e) : e = a[3], e
            }
            let x = o.mentions[b];
            if (null == x) return null;
            if ("officeSheet" in x) {
                let e;
                return a[4] !== x || a[5] !== o.conversationId || a[6] !== o.shouldBlockExternalEgress ? (e = (0, n.jsx)(R, {
                    mention: x,
                    conversationId: o.conversationId,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress
                }), a[4] = x, a[5] = o.conversationId, a[6] = o.shouldBlockExternalEgress, a[7] = e) : e = a[7], e
            }
            if ("referenceImageId" in x) {
                let e;
                return a[8] !== x || a[9] !== o.shouldBlockExternalEgress ? (e = (0, n.jsx)(Q, {
                    mention: x,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress
                }), a[8] = x, a[9] = o.shouldBlockExternalEgress, a[10] = e) : e = a[10], e
            }
            if ("directoryId" in x) {
                let e, t, l, r, s = x.displayPath ?? x.name;
                a[18] !== x.directoryId || a[19] !== x.name ? (e = (0, y.e)({
                    href: (0, S.f)(x.directoryId),
                    label: x.name
                }), a[18] = x.directoryId, a[19] = x.name, a[20] = e) : e = a[20];
                let d = e;
                a[21] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(w.Cd, {}), a[21] = t) : t = a[21], a[22] !== x.name ? (l = (0, n.jsxs)(n.Fragment, {
                    children: [t, (0, n.jsx)("span", {
                        className: "max-w-64 self-baseline truncate",
                        children: x.name
                    })]
                }), a[22] = x.name, a[23] = l) : l = a[23];
                let m = l;
                return a[24] !== m || a[25] !== d || a[26] !== s || a[27] !== x.directoryId || a[28] !== x.displayPath || a[29] !== o.shouldBlockExternalEgress ? (r = null == x.displayPath || o.shouldBlockExternalEgress ? (0, n.jsx)("span", {
                    ...d,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    title: s,
                    children: m
                }) : (0, n.jsx)(i.a, {
                    content: s,
                    children: (0, n.jsx)(c.g, {
                        ...d,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap underline decoration-dotted underline-offset-2 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        to: `/library/d/${encodeURIComponent(x.directoryId)}`,
                        "aria-label": s,
                        children: m
                    })
                }), a[24] = m, a[25] = d, a[26] = s, a[27] = x.directoryId, a[28] = x.displayPath, a[29] = o.shouldBlockExternalEgress, a[30] = r) : r = a[30], r
            }
            if ("name" in x) {
                let e, t, l, r, i;
                a[31] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, f.b)(), a[31] = e) : e = a[31], a[32] !== x.name ? (t = (0, n.jsx)(E.a, {
                    icon: e,
                    children: x.name
                }), a[32] = x.name, a[33] = t) : t = a[33];
                let s = t;
                return a[34] !== m || a[35] !== x.id || a[36] !== x.name || a[37] !== p ? (l = (0, y.e)({
                    href: null == m ? void 0 : (0, h.a)(x.id, {
                        accountId: m,
                        userId: p
                    }),
                    label: `@${x.name}`
                }), a[34] = m, a[35] = x.id, a[36] = x.name, a[37] = p, a[38] = l) : l = a[38], a[39] !== s || a[40] !== x.id || a[41] !== x.name || a[42] !== o.hostId || a[43] !== o.shouldBlockExternalEgress ? (r = o.shouldBlockExternalEgress ? s : (0, n.jsx)(d.Suspense, {
                    fallback: s,
                    children: (0, n.jsx)(Y, {
                        id: x.id,
                        name: x.name,
                        hostId: o.hostId
                    })
                }), a[39] = s, a[40] = x.id, a[41] = x.name, a[42] = o.hostId, a[43] = o.shouldBlockExternalEgress, a[44] = r) : r = a[44], a[45] !== l || a[46] !== r ? (i = (0, n.jsx)("span", {
                    ...l,
                    children: r
                }), a[45] = l, a[46] = r, a[47] = i) : i = a[47], i
            }
            if ("attachment" in x) {
                let e, t, {
                    attachment: l
                } = x;
                a[48] !== l.isSourceReference || a[49] !== l.name || a[50] !== x.endIndex || a[51] !== x.startIndex || a[52] !== o.message ? (e = l.isSourceReference ? l.name : o.message.slice(x.startIndex, x.endIndex).replace(/^@/, ""), a[48] = l.isSourceReference, a[49] = l.name, a[50] = x.endIndex, a[51] = x.startIndex, a[52] = o.message, a[53] = e) : e = a[53];
                let r = `${o.tabKeyPrefix}:${String(b)}:${l.name}`;
                return a[54] !== l || a[55] !== e || a[56] !== r || a[57] !== o.conversationId || a[58] !== o.messageId || a[59] !== o.shouldBlockExternalEgress ? (t = (0, n.jsx)(B.a, {
                    attachment: l,
                    conversationId: o.conversationId,
                    copyLabel: e,
                    messageId: o.messageId,
                    shouldBlockExternalEgress: o.shouldBlockExternalEgress,
                    tabKey: r,
                    variant: "inline"
                }), a[54] = l, a[55] = e, a[56] = r, a[57] = o.conversationId, a[58] = o.messageId, a[59] = o.shouldBlockExternalEgress, a[60] = t) : t = a[60], t
            }
            return null
        }

        function er(e) {
            let t, a = (0, l.c)(8),
                {
                    mention: r
                } = e;
            if (null != (0, p.z)(r.id)) {
                let e, t;
                return a[0] !== r.id || a[1] !== r.label ? (e = (0, y.e)({
                    href: r.id,
                    label: r.label
                }), a[0] = r.id, a[1] = r.label, a[2] = e) : e = a[2], a[3] !== r.label || a[4] !== e ? (t = (0, n.jsx)(E.a, {
                    dataAttributes: e,
                    icon: T.a,
                    layout: "selection-pill",
                    title: r.label,
                    children: r.label
                }), a[3] = r.label, a[4] = e, a[5] = t) : t = a[5], t
            }
            return a[6] !== r ? (t = (0, n.jsx)(ei, {
                mention: r
            }), a[6] = r, a[7] = t) : t = a[7], t
        }

        function ei(e) {
            let t, a, r, i, d, u, h, f, x, g, v, w, j, T, S = (0, l.c)(47),
                {
                    mention: k
                } = e,
                {
                    value: C
                } = (0, s.y)(Z),
                z = !C.shouldBlockExternalEgress && null == k.systemHint;
            S[0] !== z ? (t = {
                enabled: z
            }, S[0] = z, S[1] = t) : t = S[1];
            let {
                data: B
            } = (0, s.z)(L.m, t);
            S[2] !== k.id || S[3] !== C.shouldBlockExternalEgress ? (i = k.id.replace(/^(?:connector|plugin):/u, ""), a = (0, A.g)(i), r = !C.shouldBlockExternalEgress && /^(?:connector|plugin):.+/u.test(k.id) && null == a, d = k.id.startsWith("plugin:") && (0, o.bi)(i) ? i : null, S[2] = k.id, S[3] = C.shouldBlockExternalEgress, S[4] = a, S[5] = r, S[6] = i, S[7] = d) : (a = S[4], r = S[5], i = S[6], d = S[7]);
            let U = d;
            S[8] === Symbol.for("react.memo_cache_sentinel") ? (u = {
                enabled: !1
            }, S[8] = u) : u = S[8];
            let P = (0, s.x)(N.b, i, u),
                R = r ? U ?? P : null;
            S[9] !== k.systemHint || S[10] !== i || S[11] !== B || S[12] !== C.shouldBlockExternalEgress ? (h = C.shouldBlockExternalEgress ? void 0 : k.systemHint ?? B?.[(0, p.c)(i)], S[9] = k.systemHint, S[10] = i, S[11] = B, S[12] = C.shouldBlockExternalEgress, S[13] = h) : h = S[13];
            let $ = h;
            S[14] !== $?.name || S[15] !== i ? (f = (0, m.c)(i) ?? (0, m.c)($?.name), S[14] = $?.name, S[15] = i, S[16] = f) : f = S[16];
            let V = f,
                G = a ?? V?.icon;
            if (null == G && V?.iconUrl) {
                let e;
                S[17] !== V.iconUrl ? (e = (0, n.jsx)("img", {
                    alt: "",
                    src: V.iconUrl
                }), S[17] = V.iconUrl, S[18] = e) : e = S[18], G = e
            }
            if (null == G) {
                let e;
                S[19] !== $ ? (e = $?.logo ? (0, n.jsx)(M.a, {
                    logo: $.logo
                }) : (0, n.jsx)(I.a, {
                    asset: D.a
                }), S[19] = $, S[20] = e) : e = S[20], G = e
            }
            if (S[21] !== k.id || S[22] !== k.label || S[23] !== k.promptLink || S[24] !== i) {
                let e = b.d.shape.systemHint.safeParse(k.id);
                x = E.a, g = y.e, v = k.promptLink ?? {
                    href: e.success ? (0, b.g)(e.data) : (0, p.c)(i),
                    label: e.success ? k.label : `@${k.label}`
                }, S[21] = k.id, S[22] = k.label, S[23] = k.promptLink, S[24] = i, S[25] = x, S[26] = g, S[27] = v
            } else x = S[25], g = S[26], v = S[27];
            S[28] !== g || S[29] !== v ? (w = g(v), S[28] = g, S[29] = v, S[30] = w) : w = S[30];
            let H = V?.name ?? $?.name ?? k.label;
            S[31] !== x || S[32] !== r || S[33] !== G || S[34] !== H || S[35] !== w ? (j = (0, n.jsx)(x, {
                dataAttributes: w,
                icon: G,
                interactive: r,
                layout: "selection-pill",
                children: H
            }), S[31] = x, S[32] = r, S[33] = G, S[34] = H, S[35] = w, S[36] = j) : j = S[36];
            let W = j;
            if (!r) return W;
            if (null == R && k.id.startsWith("plugin:") && null != (0, o.Ug)(i)) {
                let e, t;
                return S[37] !== i || S[38] !== C.hostId ? (e = (0, F.a)({
                    pluginId: i,
                    hostId: C.hostId
                }), S[37] = i, S[38] = C.hostId, S[39] = e) : e = S[39], S[40] !== W || S[41] !== e ? (t = (0, n.jsx)(c.g, {
                    className: "inline cursor-interaction bg-transparent p-0 text-start align-baseline",
                    to: e,
                    children: W
                }), S[40] = W, S[41] = e, S[42] = t) : t = S[42], t
            }
            return S[43] !== W || S[44] !== R || S[45] !== i ? (T = (0, n.jsx)(_.a, {
                appId: i,
                pluginId: R,
                children: W
            }), S[43] = W, S[44] = R, S[45] = i, S[46] = T) : T = S[46], T
        }

        function es(e, t, a) {
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
    YRXX: (function(e, t, a) {
        a.d(t, {
            a: () => Z,
            b: () => D
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
            _ = a("dQRk"),
            F = a("rxj0"),
            C = a("s60H"),
            L = a("Ul98"),
            M = a("f2PP"),
            A = a("c9lJ"),
            N = a("slpy"),
            z = a("T0Rc"),
            B = a("Wf1j"),
            U = a("Sm6l"),
            P = a("HOLv"),
            R = a("RnNU"),
            $ = a("rvFo"),
            V = a("zsxQ"),
            G = a("vldH"),
            H = a("AVhl"),
            W = a("Amnz");

        function q(e) {
            let t, a, r, s, d, c, m, u, h, y, x, g, v, I, j, S, k, E, C, L, A, q, X = (0, l.c)(86),
                {
                    attachment: J,
                    conversationId: Q,
                    tabKey: D,
                    target: Y
                } = e,
                Z = (0, i.y)(w.a),
                ee = (0, B.a)();
            X[0] !== Q || X[1] !== Z ? (t = Z.get(_.T, Q), X[0] = Q, X[1] = Z, X[2] = t) : t = X[2];
            let et = t;
            X[3] !== Q || X[4] !== Z ? (a = Z.get(_._, Q), X[3] = Q, X[4] = Z, X[5] = a) : a = X[5];
            let ea = a;
            X[6] !== Q || X[7] !== D ? (r = ["chatgpt-user-message-csv-preview", Q, D], X[6] = Q, X[7] = D, X[8] = r) : r = X[8], X[9] !== Q || X[10] !== et || X[11] !== ea || X[12] !== Y ? (s = async e => {
                let {
                    signal: t
                } = e, a = await (0, G.fetchChatGptFileBlob)({
                    conversationId: Q,
                    gizmoId: et,
                    sharedConversationId: ea,
                    signal: t,
                    target: Y
                });
                if (a.size > 1e6) throw Error("ChatGPT CSV attachment exceeds the preview size limit");
                let n = await a.text();
                return t.throwIfAborted(),
                    function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e6,
                            a = 1,
                            n = 1,
                            l = 1,
                            r = 1,
                            i = !1;
                        for (let t = 0; t < e.length; t += 1) {
                            let s = e[t];
                            if ('"' === s) {
                                i && '"' === e[t + 1] ? t += 1 : i = !i;
                                continue
                            }
                            if (!i && ("," === s ? (a += 1, n = Math.max(n, a), r += 1) : ("\n" === s || "\r" === s) && ("\r" === s && "\n" === e[t + 1] && (t += 1), a = 1, l += 1, r += 1), a > 100 || l > 1e4 || r > 1e5)) throw Error("CSV exceeds preview shape limits")
                        }
                        if (l * n > t) throw Error("CSV exceeds preview shape limits");
                        return (0, R.planCsvImport)(e).values
                    }(n)
            }, X[9] = Q, X[10] = et, X[11] = ea, X[12] = Y, X[13] = s) : s = X[13], X[14] !== r || X[15] !== s ? (d = {
                queryKey: r,
                queryFn: s,
                retry: !1,
                staleTime: $.b.FIVE_MINUTES
            }, X[14] = r, X[15] = s, X[16] = d) : d = X[16];
            let {
                data: en,
                isError: el,
                isLoading: er,
                refetch: ei
            } = (0, z.a)(d);
            X[17] !== J.name ? (c = (J.name.split("/").at(-1) ?? "").replace(/[-_]/gu, " ").split(".")[0] ?? "", X[17] = J.name, X[18] = c) : c = X[18];
            let es = c;
            X[19] !== J.name || X[20] !== ee ? (m = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.download",
                defaultMessage: "Download {filename}"
            }, {
                filename: J.name
            }), X[19] = J.name, X[20] = ee, X[21] = m) : m = X[21];
            let eo = m;
            X[22] !== J.name || X[23] !== ee ? (u = ee.formatMessage({
                id: "chatgpt.userMessage.csvPreview.open",
                defaultMessage: "Open {filename}"
            }, {
                filename: J.name
            }), X[22] = J.name, X[23] = ee, X[24] = u) : u = X[24];
            let ed = u;
            X[25] !== J.name || X[26] !== Q || X[27] !== et || X[28] !== Z || X[29] !== ea || X[30] !== Y ? (h = () => {
                (0, G.a)({
                    conversationId: Q,
                    fileName: J.name,
                    gizmoId: et,
                    sharedConversationId: ea,
                    target: Y
                }).catch(e => {
                    T.a.error("ChatGPT CSV attachment failed to download", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), Z.get(p.f).danger((0, n.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.downloadFailed",
                        defaultMessage: "Couldn't download this file. Try again"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgpt.userMessage.csvPreview.downloadFailed"
                        }
                    })
                })
            }, X[25] = J.name, X[26] = Q, X[27] = et, X[28] = Z, X[29] = ea, X[30] = Y, X[31] = h) : h = X[31];
            let ec = h;
            X[32] !== J.isSharedLibraryFile || X[33] !== J.mimeType || X[34] !== J.name || X[35] !== Q || X[36] !== et || X[37] !== Z || X[38] !== ea || X[39] !== D || X[40] !== Y ? (y = () => {
                (0, M.openChatGptFile)(Z, {
                    isAccessBlocked: e => (0, F.j)(e, Q) || !0 === J.isSharedLibraryFile && e.get(b.b),
                    browserPreview: (0, V.a)(J.name, J.mimeType),
                    conversationId: Q,
                    fileName: J.name,
                    mimeType: J.mimeType,
                    gizmoId: et,
                    sharedConversationId: ea,
                    tabKey: D,
                    target: Y
                }).catch(K)
            }, X[32] = J.isSharedLibraryFile, X[33] = J.mimeType, X[34] = J.name, X[35] = Q, X[36] = et, X[37] = Z, X[38] = ea, X[39] = D, X[40] = Y, X[41] = y) : y = X[41];
            let em = y;
            if (er) {
                let e, t;
                X[42] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.a, {
                    "aria-hidden": !0
                }), X[42] = e) : e = X[42], X[43] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)("div", {
                    className: "flex h-full items-center justify-center",
                    children: [e, (0, n.jsx)("span", {
                        className: "sr-only",
                        children: (0, n.jsx)(o.a, {
                            id: "chatgpt.userMessage.csvPreview.loading",
                            defaultMessage: "Loading table preview"
                        })
                    })]
                }), X[43] = t) : t = X[43], x = t
            } else if (el) {
                let e, t, a, l;
                X[44] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, n.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.error",
                        defaultMessage: "Unable to display table preview"
                    })
                }), X[44] = e) : e = X[44], X[45] !== ei ? (t = () => void ei(), X[45] = ei, X[46] = t) : t = X[46], X[47] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(o.a, {
                    id: "chatgpt.userMessage.csvPreview.retry",
                    defaultMessage: "Try again"
                }), X[47] = a) : a = X[47], X[48] !== t ? (l = (0, n.jsxs)("div", {
                    className: "flex h-full flex-col items-center justify-center gap-3 px-4 text-center",
                    role: "alert",
                    children: [e, (0, n.jsx)(U.a, {
                        color: "secondary",
                        onClick: t,
                        children: a
                    })]
                }), X[48] = t, X[49] = l) : l = X[49], x = l
            } else if (null == en || 0 === en.length) {
                let e;
                X[50] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("div", {
                    className: "flex h-full items-center justify-center px-4 text-center text-sm text-secondary",
                    children: (0, n.jsx)(o.a, {
                        id: "chatgpt.userMessage.csvPreview.empty",
                        defaultMessage: "This CSV file is empty"
                    })
                }), X[50] = e) : e = X[50], x = e
            } else {
                let e, t, a;
                X[51] !== en[0] ? (e = en[0] ?? [], X[51] = en[0], X[52] = e) : e = X[52], X[53] !== en ? (t = en.slice(1), X[53] = en, X[54] = t) : t = X[54], X[55] !== e || X[56] !== t ? (a = (0, n.jsx)(O, {
                    columnNames: e,
                    rows: t
                }), X[55] = e, X[56] = t, X[57] = a) : a = X[57], x = a
            }
            return X[58] !== es ? (g = (0, n.jsx)("span", {
                className: "truncate font-semibold text-default capitalize",
                children: es
            }), X[58] = es, X[59] = g) : g = X[59], X[60] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, n.jsx)(P.a, {
                asset: H.a
            }), X[60] = v) : v = X[60], X[61] !== eo || X[62] !== ec ? (I = (0, n.jsx)(U.a, {
                "aria-label": eo,
                color: "ghost",
                onClick: ec,
                size: "iconCircleSm",
                children: v
            }), X[61] = eo, X[62] = ec, X[63] = I) : I = X[63], X[64] !== eo || X[65] !== I ? (j = (0, n.jsx)(N.a, {
                content: eo,
                children: I
            }), X[64] = eo, X[65] = I, X[66] = j) : j = X[66], X[67] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, n.jsx)(P.a, {
                asset: W.a
            }), X[67] = S) : S = X[67], X[68] !== em || X[69] !== ed ? (k = (0, n.jsx)(U.a, {
                "aria-label": ed,
                color: "ghost",
                onClick: em,
                size: "iconCircleSm",
                children: S
            }), X[68] = em, X[69] = ed, X[70] = k) : k = X[70], X[71] !== ed || X[72] !== k ? (E = (0, n.jsx)(N.a, {
                content: ed,
                children: k
            }), X[71] = ed, X[72] = k, X[73] = E) : E = X[73], X[74] !== j || X[75] !== E ? (C = (0, n.jsxs)("span", {
                className: "flex items-center gap-2",
                children: [j, E]
            }), X[74] = j, X[75] = E, X[76] = C) : C = X[76], X[77] !== g || X[78] !== C ? (L = (0, n.jsxs)("header", {
                className: "flex h-12 items-center justify-between gap-2 px-4 select-none",
                children: [g, C]
            }), X[77] = g, X[78] = C, X[79] = L) : L = X[79], X[80] !== x ? (A = (0, n.jsx)("div", {
                className: "h-72 border-t border-default",
                children: x
            }), X[80] = x, X[81] = A) : A = X[81], X[82] !== J.name || X[83] !== L || X[84] !== A ? (q = (0, n.jsxs)("section", {
                className: "w-full overflow-hidden rounded-2xl border border-default bg-surface",
                "aria-label": J.name,
                children: [L, A]
            }), X[82] = J.name, X[83] = L, X[84] = A, X[85] = q) : q = X[85], q
        }

        function K(e) {
            T.a.error("ChatGPT CSV attachment failed to open", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }

        function O(e) {
            let t, a, r, i, o, d, c, m, u, h, f, p, b = (0, l.c)(40),
                {
                    columnNames: y,
                    rows: x
                } = e,
                [g, v] = (0, s.useState)(0),
                I = Math.max(0, Math.floor(g / 40) - 5),
                w = Math.min(x.length, I + 18);
            if (b[0] !== y || b[1] !== I || b[2] !== w || b[3] !== x) {
                let e, l, s, u, h = x.slice(I, w),
                    f = 40 * I;
                t = (x.length - w) * 40, b[12] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                    v(e.currentTarget.scrollTop)
                }, b[12] = e) : e = b[12], c = "h-full overflow-auto", m = e, i = "min-w-full border-separate border-spacing-0 text-start text-sm", o = x.length + 1, b[13] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)("th", {
                    className: "sticky start-0 top-0 z-20 h-10 w-10 min-w-10 border-e border-b border-default bg-surface-secondary px-2 text-end font-normal text-tertiary",
                    "aria-hidden": !0
                }), b[13] = l) : l = b[13], b[14] !== y ? (s = y.map(X), b[14] = y, b[15] = s) : s = b[15], b[16] !== s ? (d = (0, n.jsx)("thead", {
                    children: (0, n.jsxs)("tr", {
                        "aria-rowindex": 1,
                        children: [l, s]
                    })
                }), b[16] = s, b[17] = d) : d = b[17], b[18] !== y.length || b[19] !== f ? (a = f > 0 ? (0, n.jsx)("tr", {
                    "aria-hidden": !0,
                    children: (0, n.jsx)("td", {
                        colSpan: y.length + 1,
                        style: {
                            height: f
                        }
                    })
                }) : null, b[18] = y.length, b[19] = f, b[20] = a) : a = b[20], b[21] !== y || b[22] !== I ? (u = (e, t) => {
                    let a = I + t;
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
                }, b[21] = y, b[22] = I, b[23] = u) : u = b[23], r = h.map(u), b[0] = y, b[1] = I, b[2] = w, b[3] = x, b[4] = t, b[5] = a, b[6] = r, b[7] = i, b[8] = o, b[9] = d, b[10] = c, b[11] = m
            } else t = b[4], a = b[5], r = b[6], i = b[7], o = b[8], d = b[9], c = b[10], m = b[11];
            return b[24] !== t || b[25] !== y.length ? (u = t > 0 ? (0, n.jsx)("tr", {
                "aria-hidden": !0,
                children: (0, n.jsx)("td", {
                    colSpan: y.length + 1,
                    style: {
                        height: t
                    }
                })
            }) : null, b[24] = t, b[25] = y.length, b[26] = u) : u = b[26], b[27] !== a || b[28] !== r || b[29] !== u ? (h = (0, n.jsxs)("tbody", {
                children: [a, r, u]
            }), b[27] = a, b[28] = r, b[29] = u, b[30] = h) : h = b[30], b[31] !== i || b[32] !== o || b[33] !== d || b[34] !== h ? (f = (0, n.jsxs)("table", {
                className: i,
                "aria-rowcount": o,
                children: [d, h]
            }), b[31] = i, b[32] = o, b[33] = d, b[34] = h, b[35] = f) : f = b[35], b[36] !== f || b[37] !== c || b[38] !== m ? (p = (0, n.jsx)("div", {
                className: c,
                onScroll: m,
                children: f
            }), b[36] = f, b[37] = c, b[38] = m, b[39] = p) : p = b[39], p
        }

        function X(e, t) {
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

        function J(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e.isSharedLibraryFile && !t) return null;
            if (null != e.mountedLibraryFileId) return {
                fileName: e.name,
                mimeType: e.mountedLibraryMimeType ?? e.mimeType ?? void 0,
                mountedLibraryFileId: e.mountedLibraryFileId,
                sourceUrl: e.sourceUrl,
                type: "mounted-library"
            };
            let a = (0, G.i)(e.downloadUrl);
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
        let Q = (0, u.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(469955)]).then(a.bind(a, "lUP2"))).ChatGptUserMessageAudioAttachment);

        function D(e) {
            let t, a, r, s, o = (0, l.c)(15),
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
                y = (0, i.z)(b.a),
                {
                    data: x
                } = (0, i.x)(k.a, p);
            o[0] !== x?.features || o[1] !== h ? (t = !h && x?.features?.includes("graphite") === !0, o[0] = x?.features, o[1] = h, o[2] = t) : t = o[2];
            let g = t;
            if (o[3] !== c || o[4] !== m || o[5] !== u || o[6] !== y || o[7] !== h || o[8] !== g || o[9] !== f) {
                let e = g ? c.flatMap((e, t) => {
                        let a = J(e, y);
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
                            shouldBlockExternalEgress: h,
                            tabKey: `${f}:${String(a)}:${t.name}`
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
                        return (0, n.jsx)(q, {
                            attachment: t,
                            conversationId: m,
                            tabKey: `${f}:${String(a)}:${t.name}`,
                            target: l
                        }, `${t.name}-${String(a)}`)
                    })
                }) : null, o[3] = c, o[4] = m, o[5] = u, o[6] = y, o[7] = h, o[8] = g, o[9] = f, o[10] = a, o[11] = r
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
            let t, a, d, u, k, N, z, B, U, P, R, $, V, G, H, W, q, K, O, X, D, Y, Z, ee, et = (0, l.c)(138),
                {
                    attachment: ea,
                    conversationId: en,
                    copyLabel: el,
                    messageId: er,
                    shouldBlockExternalEgress: ei,
                    tabKey: es,
                    variant: eo
                } = e,
                ed = void 0 === eo ? "card" : eo,
                ec = (0, i.y)(w.a),
                em = (0, j.i)(),
                eu = (0, i.x)(_.y, en),
                [eh, ef] = (0, s.useState)(!1),
                ep = (0, s.useRef)(null);
            et[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => ep.current?.abort(), a = [], et[0] = t, et[1] = a) : (t = et[0], a = et[1]), (0, s.useEffect)(t, a);
            let eb = (0, i.z)(b.b);
            if (et[2] !== ea || et[3] !== eu || et[4] !== eb || et[5] !== ei || et[6] !== em || et[7] !== ed) {
                let e;
                B = J(ea, !eb), u = !ei && null != B, k = "card" === ed && "tpp" !== eu && "flora" !== eu && !ei && null != B && (0, S.d)({
                    fileName: ea.name,
                    mimeType: ea.mountedLibraryMimeType ?? ea.mimeType
                }), d = em.checkGate("2666007232", {
                    disableExposureLog: !k
                });
                let t = ea.mountedLibraryFileId ?? ea.libraryFileId;
                et[14] !== t ? (e = (0, x.a)(t), et[14] = t, et[15] = e) : e = et[15], N = e;
                let a = u ? (0, L.a)(B, ea.name, ea.mimeType) : null;
                z = null == a ? null : (0, I.d)(a)?.sourceUrl, null != a && ea.isSourceReference && (z = ea.sourceUrl ?? z), et[2] = ea, et[3] = eu, et[4] = eb, et[5] = ei, et[6] = em, et[7] = ed, et[8] = d, et[9] = u, et[10] = k, et[11] = N, et[12] = z, et[13] = B
            } else d = et[8], u = et[9], k = et[10], N = et[11], z = et[12], B = et[13];
            et[16] !== ea.isSharedLibraryFile || et[17] !== ea.isSourceReference || et[18] !== ea.libraryArtifactType || et[19] !== ea.mimeType || et[20] !== ea.mountedLibraryFileId || et[21] !== ea.mountedLibraryMimeType || et[22] !== ea.name || et[23] !== u || et[24] !== en || et[25] !== eh || et[26] !== er || et[27] !== ec || et[28] !== z || et[29] !== es || et[30] !== B ? (U = u ? e => {
                if (ea.isSourceReference && null != z && null != ea.mountedLibraryFileId) return void(0, v.b)(ec, {
                    href: z,
                    title: ea.name,
                    libraryFileId: ea.mountedLibraryFileId,
                    mimeType: ea.mimeType
                }, e, en);
                if (eh) return;
                let t = new AbortController;
                ep.current = t, ef(!0);
                let a = (0, A.a)(ec.value.pathname);
                (0, M.openChatGptFile)(ec, {
                    connectedFileIntent: "open",
                    interaction: e,
                    isAccessBlocked: e => (0, F.j)(e, en) || !0 === ea.isSharedLibraryFile && e.get(b.b),
                    browserPreview: !0,
                    conversationViewerUrl: "mounted-library" === B.type ? void 0 : (0, C.a)(ea.name),
                    conversationId: en,
                    messageId: er,
                    fileName: ea.name,
                    libraryArtifactType: ea.libraryArtifactType,
                    gizmoId: ec.get(_.T, en),
                    sharedConversationId: null != a && a.params.sharedConversationId !== en ? null : a?.params.sharedConversationId ?? ec.get(_._, en),
                    mimeType: ea.mountedLibraryMimeType ?? ea.mimeType,
                    signal: t.signal,
                    tabKey: es,
                    target: B
                }).catch(e => {
                    t.signal.aborted || ea.isSharedLibraryFile && ec.get(b.b) || (T.a.warning("ChatGPT user attachment failed to open", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), ec.get(p.f).danger((0, n.jsx)(o.a, {
                        id: "file-tile.download-failed",
                        defaultMessage: "Failed to download file. Please try again later."
                    }), {
                        errorAnalytics: {
                            toastId: "unknown"
                        }
                    }))
                }).finally(() => {
                    ep.current = null, ef(!1)
                })
            } : void 0, et[16] = ea.isSharedLibraryFile, et[17] = ea.isSourceReference, et[18] = ea.libraryArtifactType, et[19] = ea.mimeType, et[20] = ea.mountedLibraryFileId, et[21] = ea.mountedLibraryMimeType, et[22] = ea.name, et[23] = u, et[24] = en, et[25] = eh, et[26] = er, et[27] = ec, et[28] = z, et[29] = es, et[30] = B, et[31] = U) : U = et[31];
            let ey = U;
            et[32] !== ey ? (P = e => {
                null != ey && (e.preventDefault(), ey(e))
            }, et[32] = ey, et[33] = P) : P = et[33];
            let ex = P;
            if (k && d) {
                let e;
                return et[34] !== ea || et[35] !== en || et[36] !== B ? (e = (0, n.jsx)(Q, {
                    attachment: ea,
                    conversationId: en,
                    target: B
                }), et[34] = ea, et[35] = en, et[36] = B, et[37] = e) : e = et[37], e
            }
            if ("inline" === ed) {
                let e, t, a, l, r, i, s = ea.mountedLibraryFileId ?? ea.libraryFileId;
                et[38] !== ea.fileId || et[39] !== ea.isSourceReference || et[40] !== ea.libraryArtifactType || et[41] !== ea.mimeType || et[42] !== ea.mountedLibraryMimeType || et[43] !== ea.name || et[44] !== ea.sourceUrl || et[45] !== el || et[46] !== s ? (e = null == s ? void 0 : (0, c.e)({
                    label: el ?? ea.name,
                    href: (0, y.c)({
                        fileId: ea.fileId ?? "",
                        libraryArtifactType: ea.libraryArtifactType ?? "",
                        libraryFileId: s,
                        mimeType: ea.mountedLibraryMimeType ?? ea.mimeType ?? "",
                        ...ea.isSourceReference ? {
                            sourceUrl: ea.sourceUrl,
                            serializeAsUrl: !0
                        } : {}
                    })
                }), et[38] = ea.fileId, et[39] = ea.isSourceReference, et[40] = ea.libraryArtifactType, et[41] = ea.mimeType, et[42] = ea.mountedLibraryMimeType, et[43] = ea.name, et[44] = ea.sourceUrl, et[45] = el, et[46] = s, et[47] = e) : e = et[47];
                let o = e;
                et[48] !== ea.libraryArtifactType || et[49] !== ea.libraryFileId || et[50] !== ea.mimeType || et[51] !== ea.mountedLibraryFileId || et[52] !== ea.mountedLibraryMimeType || et[53] !== ea.name || et[54] !== ea.sourceUrl || et[55] !== eh || et[56] !== N ? (t = eh ? (0, n.jsx)(f.a, {
                    as: "span",
                    className: "size-4"
                }) : (0, n.jsx)(g.a, {
                    fileName: ea.name,
                    libraryArtifactType: ea.libraryArtifactType,
                    mimeType: ea.mimeType ?? void 0,
                    provider: N,
                    sourceMimeType: ea.mountedLibraryMimeType ?? void 0,
                    mountedLibraryFileId: ea.mountedLibraryFileId ?? ea.libraryFileId,
                    sourceUrl: ea.sourceUrl ?? void 0,
                    style: "message-inline"
                }), et[48] = ea.libraryArtifactType, et[49] = ea.libraryFileId, et[50] = ea.mimeType, et[51] = ea.mountedLibraryFileId, et[52] = ea.mountedLibraryMimeType, et[53] = ea.name, et[54] = ea.sourceUrl, et[55] = eh, et[56] = N, et[57] = t) : t = et[57], et[58] !== ea ? (a = 0 === (0, E.h)(ea).length ? ea.name : (0, E.g)(ea.name), et[58] = ea, et[59] = a) : a = et[59], et[60] !== a ? (l = (0, n.jsx)("span", {
                    className: "max-w-64 self-baseline truncate",
                    children: a
                }), et[60] = a, et[61] = l) : l = et[61], et[62] !== t || et[63] !== l ? (r = (0, n.jsxs)(n.Fragment, {
                    children: [t, l]
                }), et[62] = t, et[63] = l, et[64] = r) : r = et[64];
                let d = r;
                if (null != z) {
                    let e;
                    return et[65] !== ea.name || et[66] !== d || et[67] !== o || et[68] !== ex || et[69] !== z ? (e = (0, n.jsx)(m.a, {
                        ...o,
                        className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                        "aria-label": ea.name,
                        href: z,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ea.name,
                        onUnmodifiedClick: ex,
                        children: d
                    }), et[65] = ea.name, et[66] = d, et[67] = o, et[68] = ex, et[69] = z, et[70] = e) : e = et[70], e
                }
                return et[71] !== ea.name || et[72] !== u || et[73] !== d || et[74] !== o || et[75] !== eh || et[76] !== ey ? (i = u ? (0, n.jsx)("button", {
                    ...o,
                    type: "button",
                    className: "inline-flex max-w-full cursor-interaction items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none",
                    "aria-busy": eh,
                    "aria-label": ea.name,
                    disabled: eh,
                    onClick: ey,
                    children: d
                }) : (0, n.jsx)("span", {
                    ...o,
                    className: "inline-flex max-w-full items-center gap-1 rounded-sm px-1 py-0 align-baseline font-medium whitespace-nowrap",
                    children: d
                }), et[71] = ea.name, et[72] = u, et[73] = d, et[74] = o, et[75] = eh, et[76] = ey, et[77] = i) : i = et[77], i
            }
            if (et[78] !== ea.libraryArtifactType || et[79] !== ea.libraryFileId || et[80] !== ea.mimeType || et[81] !== ea.mountedLibraryFileId || et[82] !== ea.mountedLibraryMimeType || et[83] !== ea.name || et[84] !== ea.sourceUrl || et[85] !== u || et[86] !== eh || et[87] !== ey || et[88] !== ex || et[89] !== N || et[90] !== z) {
                let e = (0, r.f)({
                        fileName: ea.name,
                        mimeType: ea.mimeType ?? void 0
                    }),
                    t = null;
                if (null != z) {
                    let e;
                    et[101] !== ea.name || et[102] !== ex || et[103] !== z ? (e = (0, n.jsx)(h.b, {
                        "aria-label": ea.name,
                        href: z,
                        initiator: "sites_library",
                        showHoverActions: !0,
                        tooltipContent: ea.name,
                        onUnmodifiedClick: ex
                    }), et[101] = ea.name, et[102] = ex, et[103] = z, et[104] = e) : e = et[104], t = e
                } else if (u) {
                    let e;
                    et[105] !== ea.name || et[106] !== eh || et[107] !== ey ? (e = (0, n.jsx)(h.b, {
                        "aria-busy": eh,
                        "aria-label": ea.name,
                        disabled: eh,
                        onClick: ey
                    }), et[105] = ea.name, et[106] = eh, et[107] = ey, et[108] = e) : e = et[108], t = e
                }
                V = h.a, H = "span", W = "file-tile", X = "group/resource-card relative", G = t, $ = h.h, K = "pointer-events-none relative z-10", et[109] !== ea.libraryArtifactType || et[110] !== ea.libraryFileId || et[111] !== ea.mimeType || et[112] !== ea.mountedLibraryFileId || et[113] !== ea.mountedLibraryMimeType || et[114] !== ea.name || et[115] !== ea.sourceUrl || et[116] !== eh || et[117] !== N ? (O = (0, n.jsx)("span", {
                    className: "flex size-10 items-center justify-center overflow-hidden rounded-xl",
                    children: eh ? (0, n.jsx)(f.a, {
                        as: "span",
                        className: "size-5"
                    }) : (0, n.jsx)(g.a, {
                        fileName: ea.name,
                        libraryArtifactType: ea.libraryArtifactType,
                        mimeType: ea.mimeType ?? void 0,
                        provider: N,
                        sourceMimeType: ea.mountedLibraryMimeType ?? void 0,
                        mountedLibraryFileId: ea.mountedLibraryFileId ?? ea.libraryFileId,
                        sourceUrl: ea.sourceUrl ?? void 0,
                        style: "message-card"
                    })
                }), et[109] = ea.libraryArtifactType, et[110] = ea.libraryFileId, et[111] = ea.mimeType, et[112] = ea.mountedLibraryFileId, et[113] = ea.mountedLibraryMimeType, et[114] = ea.name, et[115] = ea.sourceUrl, et[116] = eh, et[117] = N, et[118] = O) : O = et[118], R = o.a, q = (0, r.d)(e.category), et[78] = ea.libraryArtifactType, et[79] = ea.libraryFileId, et[80] = ea.mimeType, et[81] = ea.mountedLibraryFileId, et[82] = ea.mountedLibraryMimeType, et[83] = ea.name, et[84] = ea.sourceUrl, et[85] = u, et[86] = eh, et[87] = ey, et[88] = ex, et[89] = N, et[90] = z, et[91] = R, et[92] = $, et[93] = V, et[94] = G, et[95] = H, et[96] = W, et[97] = q, et[98] = K, et[99] = O, et[100] = X
            } else R = et[91], $ = et[92], V = et[93], G = et[94], H = et[95], W = et[96], q = et[97], K = et[98], O = et[99], X = et[100];
            et[119] !== R || et[120] !== q ? (D = (0, n.jsx)(R, {
                ...q
            }), et[119] = R, et[120] = q, et[121] = D) : D = et[121];
            let eg = null == z ? ea.name : void 0;
            return et[122] !== $ || et[123] !== ea.name || et[124] !== D || et[125] !== eg || et[126] !== K || et[127] !== O ? (Y = (0, n.jsx)($, {
                className: K,
                icon: O,
                subtitle: D,
                title: ea.name,
                titleTooltip: eg,
                variant: "file-tile"
            }), et[122] = $, et[123] = ea.name, et[124] = D, et[125] = eg, et[126] = K, et[127] = O, et[128] = Y) : Y = et[128], et[129] !== G || et[130] !== Y || et[131] !== X ? (Z = (0, n.jsxs)("span", {
                className: X,
                children: [G, Y]
            }), et[129] = G, et[130] = Y, et[131] = X, et[132] = Z) : Z = et[132], et[133] !== V || et[134] !== H || et[135] !== W || et[136] !== Z ? (ee = (0, n.jsx)(V, {
                as: H,
                variant: W,
                children: Z
            }), et[133] = V, et[134] = H, et[135] = W, et[136] = Z, et[137] = ee) : ee = et[137], ee
        }
    }),
    Aa8X: (function(e, t, a) {
        var n = a("ABep"),
            l = a("QosV"),
            r = a("oyxz"),
            i = a("zjpG"),
            s = a("bf6R");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, d, c, m, u = (0, l.c)(14),
                    {
                        settings: h
                    } = e,
                    {
                        style_label: f,
                        aspect_ratio: p,
                        image_count: b
                    } = h;
                if (!f && null == p && null == b) return null;
                u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsxs)(n.Fragment, {
                    children: [" ", (0, n.jsx)(i.a, {}), " "]
                }), u[0] = t) : t = u[0];
                let y = t;
                u[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(s.Ah, {}), u[1] = a) : a = u[1], u[2] !== f ? (o = f && (0, n.jsx)("bdi", {
                    children: f
                }), u[2] = f, u[3] = o) : o = u[3];
                let x = f && null != p ? y : null;
                u[4] !== p ? (d = null != p && (0, n.jsx)("bdi", {
                    children: "auto" === p ? (0, n.jsx)(r.a, {
                        id: "chatgptConversations.imageOptions.sent.autoRatio",
                        defaultMessage: "Auto"
                    }) : p
                }), u[4] = p, u[5] = d) : d = u[5];
                let g = (f || null != p) && null != b ? y : null;
                return u[6] !== b ? (c = null != b && (0, n.jsx)("bdi", {
                    children: (0, n.jsx)(r.a, {
                        id: "chatgptConversations.imageOptions.sent.count",
                        defaultMessage: "{count, plural, one {# image} other {# images}}",
                        values: {
                            count: b
                        }
                    })
                }), u[6] = b, u[7] = c) : c = u[7], u[8] !== o || u[9] !== x || u[10] !== d || u[11] !== g || u[12] !== c ? (m = (0, n.jsxs)("div", {
                    role: "note",
                    className: "flex max-w-[70%] items-center gap-1.5 self-end pe-3 text-sm text-secondary",
                    children: [a, (0, n.jsxs)("span", {
                        className: "min-w-0 text-end break-words",
                        children: [o, x, d, g, c]
                    })]
                }), u[8] = o, u[9] = x, u[10] = d, u[11] = g, u[12] = c, u[13] = m) : m = u[13], m
            }
        })
    }),
    R1rp: (function(e, t, a) {
        a.d(t, {
            a: () => d,
            b: () => c
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
            d = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return t(s)?.includes("library_shared_content_available") === !0
            }),
            c = (0, n.c)(l.a, e => {
                let {
                    get: t
                } = e;
                return !t(o) && !t(d)
            })
    })
};