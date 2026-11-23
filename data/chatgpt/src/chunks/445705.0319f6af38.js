export const __rspack_esm_ids = [445705];
export const __webpack_modules__ = {
    mQnY: (function(a, b, c) {
        c.d(b, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostDownloadClicked"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostPageViewed"
            }
        })
    }),
    zy7P: (function(a, b, c) {
        var d = c("nB3p"),
            e = c("Q840"),
            f = c("OWtl"),
            g = c("rvFo"),
            h = c("Kwur");
        let i = (0, e.q)(f.a, a => {
            let {
                accountId: b,
                userId: c,
                url: e
            } = a, f = null == e ? null : (0, d.c)(e), i = f?.workspaceDocument == null ? null : `external-gdrive:file:${f.nativeFileId}`;
            return {
                enabled: null != b && null != c && null != i,
                queryKey: ["google-file-title", b, c, i],
                staleTime: g.b.FIVE_MINUTES,
                retry: !1,
                queryFn: async a => {
                    let {
                        signal: d
                    } = a;
                    if (null == b || null == c || null == i) return null;
                    try {
                        let a = await h.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
                            additionalHeaders: {
                                "ChatGPT-Account-ID": b
                            },
                            expectedIdentity: {
                                accountId: b,
                                userId: c
                            },
                            expectedErrorStatuses: [400, 401, 403, 404, 409, 429, 502, 503, 504],
                            parameters: {
                                path: {
                                    provider_key: "google_drive"
                                }
                            },
                            requestBody: {
                                file_id: i
                            },
                            retry: !1,
                            signal: d
                        });
                        return d.throwIfAborted(), a.file_id === i && a.name.trim() || null
                    } catch {
                        return d.throwIfAborted(), null
                    }
                }
            }
        });
        c.d(b, {}, {
            a: i
        })
    }),
    ahg9: (function(a, b, c) {
        var d = c("rKAs"),
            e = c("zSQm");
        c.d(b, {}, {
            a: function(a) {
                let b = (0, d.p)(a);
                return null == b ? null : (0, e.a)(b) ?? null
            }
        })
    }),
    C15n: (function(a, b, c) {
        c.d(b, {
            ChatGptFileReference: () => au
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Rzcw"),
            g = c("nB3p"),
            h = c("ZDhX"),
            i = c("gIcl"),
            j = c("Q840"),
            k = c("zd8w"),
            l = c("v7qY"),
            m = c("Wf1j"),
            n = c("oyxz"),
            o = c("mG2A"),
            p = c("w7Qu"),
            q = c("bmU4"),
            r = c("O0M0");
        c("Cslg");
        var s = c("w9uH"),
            t = c("NkEl"),
            u = c("Sm6l"),
            v = c("bf6R"),
            w = c("MyoZ"),
            x = c("bYzY");

        function y(a) {
            let b, c, f, g, h = (0, e.c)(9),
                {
                    children: i,
                    actionLabel: j
                } = a;
            return h[0] !== i ? (b = (0, d.jsx)("span", {
                className: "group-focus-within/resource-row:hidden group-hover/resource-row:hidden",
                children: i
            }), h[0] = i, h[1] = b) : b = h[1], h[2] !== j ? (c = j ?? (0, d.jsx)(n.a, {
                id: "chatgpt.artifacts.resource_row.open_file.label",
                defaultMessage: "Open file"
            }), h[2] = j, h[3] = c) : c = h[3], h[4] !== c ? (f = (0, d.jsx)("span", {
                className: "hidden group-focus-within/resource-row:inline group-hover/resource-row:inline",
                "data-markdown-copy": "exclude",
                children: c
            }), h[4] = c, h[5] = f) : f = h[5], h[6] !== b || h[7] !== f ? (g = (0, d.jsxs)(d.Fragment, {
                children: [b, f]
            }), h[6] = b, h[7] = f, h[8] = g) : g = h[8], g
        }

        function z(a) {
            let b, c, f, g, i, j, k = (0, e.c)(14);
            k[0] !== a ? ({
                label: b,
                loading: c,
                ...f
            } = a, k[0] = a, k[1] = b, k[2] = c, k[3] = f) : (b = k[1], c = k[2], f = k[3]);
            let l = f["aria-label"] ?? b;
            return k[4] !== c ? (g = !c && (0, d.jsx)(x.a, {
                "aria-hidden": !0,
                className: "icon-base"
            }), k[4] = c, k[5] = g) : g = k[5], k[6] !== c || k[7] !== f || k[8] !== l || k[9] !== g ? (i = (0, d.jsx)(u.a, {
                ...f,
                "aria-label": l,
                color: "ghostActive",
                loading: c,
                radius: "large",
                size: "imageToolbar",
                uniform: !0,
                children: g
            }), k[6] = c, k[7] = f, k[8] = l, k[9] = g, k[10] = i) : i = k[10], k[11] !== b || k[12] !== i ? (j = (0, d.jsx)("span", {
                className: "pointer-events-none relative z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100",
                children: (0, d.jsx)(h.a, {
                    content: b,
                    children: i
                })
            }), k[11] = b, k[12] = i, k[13] = j) : j = k[13], j
        }
        var A = c("RNul"),
            B = c("SGsN"),
            C = c("bWX0"),
            D = c("i1PI"),
            E = c("tl2n"),
            F = c("jCsa"),
            G = c("MExO"),
            H = c("vYmP"),
            I = c("ZjkF"),
            J = c("WAdu"),
            K = c("cckT"),
            L = c("S1CS"),
            M = c("Ph61");
        c("NRR1"), c("e1xH");
        var N = c("coFq"),
            O = c("GaA7"),
            P = c("tSEg"),
            Q = c("WFY2"),
            R = c("zsxQ"),
            S = c("vldH"),
            T = c("zy7P"),
            U = c("u4MG"),
            V = c("dQRk"),
            W = c("TUMj"),
            X = c("rxj0"),
            Y = c("zamV"),
            Z = c("s60H"),
            $ = c("Ul98"),
            _ = c("f2PP"),
            aa = c("c9lJ"),
            ab = c("j0nn"),
            ac = c("ahg9"),
            ad = c("j8Yf"),
            ae = c("t2JB"),
            af = c("PO1G"),
            ag = c("DIH2");

        function ah(a) {
            let b, c, f, h, i, l, m, n, o = (0, e.c)(34),
                {
                    reference: p
                } = a,
                q = (0, j.y)(P.a),
                r = (0, W.e)(),
                s = "restricted" === (0, k.useContext)(J.a);
            o[0] !== p.name ? (b = (0, ag.b)(p.name), o[0] = p.name, o[1] = b) : b = o[1];
            let t = b,
                u = (0, ae.b)(p),
                w = (0, k.useRef)(null),
                x = r?.savedContentResponse,
                y = r?.shouldBlockExternalEgress === !0,
                z = null == x || null == u || y ? null : (0, g.k)(u);
            o[2] !== z || o[3] !== x || o[4] !== q ? (c = () => {
                (0, M.a)(q, w, x, z)
            }, o[2] = z, o[3] = x, o[4] = q, o[5] = c) : c = o[5];
            let A = (0, k.useEffectEvent)(c);
            o[6] !== A ? (f = () => {
                A()
            }, o[6] = A, o[7] = f) : f = o[7];
            let B = z?.id,
                C = z?.kind,
                D = x?.conversationId,
                E = x?.responseId,
                F = x?.savedContentBackend;
            if (o[8] !== B || o[9] !== C || o[10] !== D || o[11] !== E || o[12] !== F ? (h = [B, C, D, E, F], o[8] = B, o[9] = C, o[10] = D, o[11] = E, o[12] = F, o[13] = h) : h = o[13], (0, k.useEffect)(f, h), null == t || null == u) {
                let a;
                return o[14] !== p ? (a = (0, d.jsx)(ad.a, {
                    reference: p
                }), o[14] = p, o[15] = a) : a = o[15], a
            }
            o[16] !== z || o[17] !== u || o[18] !== y || o[19] !== t || o[20] !== s || o[21] !== x || o[22] !== q ? (i = y ? (0, d.jsx)(H.a, {
                ariaLabel: t,
                disabled: !0,
                icon: (0, d.jsx)(v.Kd, {}),
                isTerminalInline: !0,
                label: t,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onClick: ai
            }) : (0, d.jsx)(H.a, {
                ariaLabel: t,
                href: u,
                icon: (0, d.jsx)(v.Kd, {}),
                isTerminalInline: !0,
                label: t,
                requiresConfirmation: s,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onActivate: () => {
                    (0, M.a)(q, w, x, z, !0)
                }
            }), o[16] = z, o[17] = u, o[18] = y, o[19] = t, o[20] = s, o[21] = x, o[22] = q, o[23] = i) : i = o[23];
            let G = i;
            o[24] !== t || o[25] !== p ? (l = function(a, b) {
                let c = (0, ag.b)(a.matched_text),
                    d = (0, ag.b)(a.library_path);
                if (null == c || null == d) return null;
                let e = c.match(/^`+/)?.[0],
                    f = null != e && c.endsWith(e),
                    g = f ? c.slice(e.length, -e.length) : c,
                    h = d.split("/").filter(Boolean);
                if (h.length < 2 || h.at(-1) !== b) return null;
                let i = h.join("/");
                if (!new Set([`/${i}`, i, `/${i}/`, `${i}/`, `Library/${i}`, ...[" / ", " > ", " \u2192 ", " \u203A "].map(a => h.join(a))]).has(g)) return null;
                let j = g.lastIndexOf(b);
                return {
                    isInlineCode: f,
                    prefix: g.slice(0, j),
                    suffix: g.slice(j + b.length)
                }
            }(p, t), o[24] = t, o[25] = p, o[26] = l) : l = o[26];
            let I = l;
            if (null == I) return G;
            o[27] !== G || o[28] !== I.prefix || o[29] !== I.suffix ? (m = (0, d.jsxs)(d.Fragment, {
                children: [I.prefix, G, I.suffix]
            }), o[27] = G, o[28] = I.prefix, o[29] = I.suffix, o[30] = m) : m = o[30];
            let K = m;
            return o[31] !== K || o[32] !== I.isInlineCode ? (n = I.isInlineCode ? (0, d.jsx)("code", {
                children: K
            }) : K, o[31] = K, o[32] = I.isInlineCode, o[33] = n) : n = o[33], n
        }

        function ai() {}
        var aj = c("Bbed"),
            ak = c("ePaQ"),
            al = c("JAYD"),
            am = c("Nfif");
        let an = (0, aj.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(777265)]).then(c.bind(c, "kcNG"))).PrivateSourceFollowUp);

        function ao(a) {
            let b, c, f, g, h, i, l, m = (0, e.c)(29),
                {
                    source: n
                } = a,
                o = (0, j.y)(P.a),
                p = (0, W.e)(),
                [q, r] = (0, k.useState)(""),
                [s, t] = (0, k.useState)(!1),
                u = (0, k.useContext)(J.a);
            m[0] !== u || m[1] !== o.value ? (b = null != (0, P.h)(o.value) && "restricted" !== u, m[0] = u, m[1] = o.value, m[2] = b) : b = m[2];
            let v = b,
                w = (0, j.x)(v ? al.a : null, n.connector_id),
                x = !v || !w;
            m[3] !== x || m[4] !== s || m[5] !== q || m[6] !== n || m[7] !== p ? (c = x || null == p || p.isReadOnly || p.shouldBlockExternalEgress || p.renderRestrictedWidgets || p.renderRestrictedModelResponses ? void 0 : (0, d.jsx)(an, {
                source: n,
                question: q,
                onQuestionChange: r,
                turn: p,
                pending: s,
                onPendingChange: t
            }, n.id), m[3] = x, m[4] = s, m[5] = q, m[6] = n, m[7] = p, m[8] = c) : c = m[8];
            let y = n.snippet ?? void 0;
            m[9] !== n.name || m[10] !== y ? (f = {
                title: n.name,
                body: y
            }, m[9] = n.name, m[10] = y, m[11] = f) : f = m[11], m[12] !== n.name || m[13] !== f ? (g = {
                title: n.name,
                hoverCard: f
            }, m[12] = n.name, m[13] = f, m[14] = g) : g = m[14], m[15] !== n.connector_id ? (h = (0, d.jsx)(am.a, {
                appId: n.connector_id
            }), m[15] = n.connector_id, m[16] = h) : h = m[16];
            let z = n.medical_file_reference?.source_label ?? n.name;
            return m[17] !== x || m[18] !== n.name || m[19] !== h || m[20] !== z ? (i = (0, d.jsx)(H.a, {
                ariaLabel: n.name,
                disabled: x,
                icon: h,
                label: z,
                variant: "file",
                testId: "chatgpt-private-source-citation",
                onClick: ap
            }), m[17] = x, m[18] = n.name, m[19] = h, m[20] = z, m[21] = i) : i = m[21], m[22] !== x || m[23] !== s || m[24] !== n.connector_id || m[25] !== c || m[26] !== g || m[27] !== i ? (l = (0, d.jsx)(ak.a, {
                disabled: x,
                openOnClick: !0,
                closeOnTriggerClick: !1,
                keepOpen: s,
                followUp: c,
                metadata: g,
                sourceAppId: n.connector_id,
                children: i
            }), m[22] = x, m[23] = s, m[24] = n.connector_id, m[25] = c, m[26] = g, m[27] = i, m[28] = l) : l = m[28], l
        }

        function ap(a) {
            return a.currentTarget.focus()
        }
        var aq = c("lAQI");
        let ar = aq.F({
                type: aq.z("file"),
                id: aq.L().min(1),
                name: aq.L().min(1),
                connector_id: aq.L().min(1),
                start_idx: aq.E().optional(),
                cloud_doc_url: aq.L().nullish(),
                extra: aq.F({
                    cloud_doc_url: aq.L().nullish()
                }).nullish(),
                snippet: aq.L().nullish(),
                medical_file_reference: aq.F({
                    source_label: aq.L().min(1),
                    journal_name: aq.L().nullish(),
                    authors_display: aq.L().nullish(),
                    publication_year: aq.L().nullish(),
                    source_url: aq.L().nullish(),
                    journal_homepage_url: aq.L().nullish(),
                    source_icon_url: aq.L().nullish(),
                    doi: aq.L().nullish()
                }),
                drug_file_reference: aq.R().nullish()
            }).refine(a => !a.cloud_doc_url && !a.extra?.cloud_doc_url && !a.medical_file_reference?.journal_name && !a.medical_file_reference?.authors_display && !a.medical_file_reference?.publication_year && !a.medical_file_reference?.source_url && !a.medical_file_reference?.journal_homepage_url && !a.medical_file_reference?.source_icon_url && !a.medical_file_reference?.doi && null == a.drug_file_reference),
            as = (0, j.q)(P.a, (a, b) => {
                let {
                    scope: c
                } = b;
                return {
                    queryKey: ["add-to-space-source", a],
                    enabled: null != a,
                    staleTime: 6e4,
                    retry: !1,
                    queryFn: b => {
                        let {
                            signal: d
                        } = b;
                        return null == a ? null : (0, S.k)({
                            conversationId: c.get(V.j, a.conversationId) ?? a.conversationId,
                            gizmoId: c.get(V.T, a.conversationId),
                            signal: d,
                            target: a.target
                        })
                    }
                }
            }),
            at = (0, j.q)(P.a, (a, b) => {
                let {
                    conversationId: c,
                    messageId: d,
                    target: e
                } = a, {
                    scope: f
                } = b;
                return {
                    queryKey: ["latex-card-workspace-file", c, d, e],
                    staleTime: 0,
                    retry: !1,
                    queryFn: async () => {
                        if (null != e) {
                            let a = await (0, s.b)(f, c, e);
                            if (null != a && "tex" === (0, C.c)(a.path)) return {
                                file: a,
                                originalSource: !1
                            };
                            let b = await (0, s.a)(f, c, d, e);
                            return null == b ? null : {
                                file: b,
                                originalSource: !0
                            }
                        }
                        return null
                    }
                }
            });

        function au(a) {
            let b, c, f, g = (0, e.c)(17);
            g[0] !== a.reference ? (b = ar.safeParse(a.reference), g[0] = a.reference, g[1] = b) : b = g[1];
            let h = b;
            if (h.success) {
                let a;
                return g[2] !== h.data ? (a = (0, d.jsx)(ao, {
                    source: h.data
                }, h.data.id), g[2] = h.data, g[3] = a) : a = g[3], a
            }
            if ("library_folder" === a.reference.type || (0, ae.c)(a.reference)) {
                let b;
                return g[4] !== a.reference ? (b = (0, d.jsx)(ah, {
                    reference: a.reference
                }), g[4] = a.reference, g[5] = b) : b = g[5], b
            }
            if ("file_navlist" === a.reference.type) {
                let b;
                return g[6] !== a ? (b = (0, d.jsx)(ay, {
                    ...a
                }), g[6] = a, g[7] = b) : b = g[7], b
            }
            let i = "template" === a.presentation ? "auto" : a.presentation;
            g[8] !== a || g[9] !== i ? (c = (0, d.jsx)(aw, {
                ...a,
                presentation: i
            }), g[8] = a, g[9] = i, g[10] = c) : c = g[10];
            let j = c;
            if ("file" === a.reference.type && (null == a.presentation || "auto" === a.presentation) && null == (0, ag.b)(a.reference.sandbox_path) && !(0, ag.b)(a.reference.link_markdown)?.includes("sandbox:")) {
                let a;
                g[11] !== j ? (a = (0, d.jsx)(av, {
                    children: j
                }), g[11] = j, g[12] = a) : a = g[12], j = a
            }
            let k = "template" === a.presentation;
            return g[13] !== j || g[14] !== a.reference || g[15] !== k ? (f = (0, d.jsx)(o.a, {
                reference: a.reference,
                fallback: j,
                isTemplate: k
            }), g[13] = j, g[14] = a.reference, g[15] = k, g[16] = f) : f = g[16], f
        }

        function av(a) {
            let {
                children: b
            } = a, c = (0, W.e)(), d = (0, j.x)(V.T, c?.conversationId ?? null);
            return null == d || (0, U.a)(d) ? b : null
        }

        function aw(a) {
            var b, c, o, s;
            let U, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar = (0, e.c)(50),
                {
                    children: au,
                    contentReferenceIndex: av,
                    fileNavigationIndex: aw,
                    presentation: ay,
                    reference: az,
                    showSaveAs: aA
                } = a,
                aB = void 0 === ay ? "auto" : ay,
                aC = (0, j.y)(P.a),
                aD = (0, m.a)(),
                aE = (0, W.e)();
            ar[0] !== av || ar[1] !== aE ? (U = (0, W.c)(aE, av)?.messageId ?? aE?.messageId, ar[0] = av, ar[1] = aE, ar[2] = U) : U = ar[2];
            let aF = U,
                aG = (0, k.useContext)(r.a),
                aH = "restricted" === (0, k.useContext)(J.a),
                [aI, aJ] = (0, k.useState)(),
                aK = (0, k.useRef)(null),
                aL = null != aI,
                aM = aG?.accountId ?? null,
                aN = aG?.userId ?? null;
            ar[3] !== az.cloud_doc_url || ar[4] !== az.codex_file_citation_authoritative || ar[5] !== aH || ar[6] !== aE?.shouldBlockExternalEgress ? (ah = aE?.shouldBlockExternalEgress !== !1 || aH || !0 !== az.codex_file_citation_authoritative ? null : (0, ag.b)(az.cloud_doc_url), ar[3] = az.cloud_doc_url, ar[4] = az.codex_file_citation_authoritative, ar[5] = aH, ar[6] = aE?.shouldBlockExternalEgress, ar[7] = ah) : ah = ar[7], ar[8] !== aM || ar[9] !== aN || ar[10] !== ah ? (ai = {
                accountId: aM,
                userId: aN,
                url: ah
            }, ar[8] = aM, ar[9] = aN, ar[10] = ah, ar[11] = ai) : ai = ar[11];
            let {
                data: aO
            } = (0, j.x)(T.a, ai), aP = aO ?? (0, ae.a)(az), aQ = "library_folder" === az.source_type, aR = (0, S.c)(az, {
                fileName: aP ?? void 0,
                messageId: aF
            }), aS = aE?.conversationId, aT = (0, aa.a)(aC.value.pathname)?.params.sharedConversationId, aU = null == aS ? null : aC.get(V.ab, aS);
            null != aT && aT === aS && (aU = aT);
            let aV = aC.get(ab.f, aG)?.id,
                aW = (0, S.f)(az),
                aX = null != aR && aE?.shouldBlockExternalEgress === !0,
                aY = null != aR && null != aP && !aX && (0, F.a)({
                    fileName: "mounted-library" === aR.type ? aR.sourceFileName ?? aP : aP,
                    mimeType: "mounted-library" === aR.type ? aR.mimeType ?? aW : aW,
                    mountedLibraryFileId: "mounted-library" === aR.type ? aR.mountedLibraryFileId : void 0
                }),
                aZ = null == aP || aR?.type === "mounted-library" ? void 0 : (0, Z.a)(aP),
                a$ = null == aP ? void 0 : (0, C.c)(aP)?.toUpperCase(),
                a_ = (0, j.z)(!1),
                a0 = (0, j.z)(!!a_ && E.b),
                {
                    data: a1
                } = (0, j.x)(as, null),
                a2 = null != aZ || aR?.type === "mounted-library" || null != aP && (0, R.a)(aP, aW),
                a3 = null != aR && (!aY && "mounted-library" === aR.type && null == aU && null == aV || (0, _.canOpenChatGptFilePreview)({
                    browserPreview: a2
                })),
                a4 = !aX && (aY || a3),
                a5 = O.a?.latex != null && "artifact-row" === aB && null != aP && "tex" === (0, C.c)(aP) && a4 && aE?.isReadOnly !== !0 && null == aU && null == aV,
                {
                    data: a6
                } = (0, j.x)(at, {
                    conversationId: aS,
                    messageId: aE?.messageId,
                    target: aR
                }, {
                    enabled: a5
                }),
                a7 = a5 && null != a6,
                a8 = (void 0 === aA || aA) && aY && (0, _.canSaveChatGptFile)(),
                a9 = (0, ac.a)(az),
                ba = {
                    fileName: aP ?? void 0,
                    mimeType: (0, S.d)(az) ?? (aR?.type === "mounted-library" ? aR.mimeType ?? void 0 : void 0),
                    mountedLibraryFileId: aR?.type === "mounted-library" ? aR.mountedLibraryFileId : void 0,
                    sourceMimeType: (0, S.e)(az),
                    sourceUrl: a9 ?? void 0
                },
                bb = "library_folder" === az.source_type ? (0, ae.b)(az) : a9,
                bc = null != bb && aE?.shouldBlockExternalEgress === !0,
                bd = null == aR || null == aP ? null : (0, $.a)(aR, aP, aW),
                be = null == bd ? null : (0, G.d)(bd)?.sourceUrl,
                bf = aX || bc ? null : be ?? (aY || bc ? null : bb),
                bg = aE?.savedContentResponse,
                bh = null;
            null != bg && null != aP && (a4 || null != bf) && aR?.type !== "mounted-library" && ("library_folder" === az.source_type && null != bf ? bh = (0, g.k)(bf) : null != aR && "libraryFileId" in aR && (bh = (0, g.j)(aR.libraryFileId)));
            let bi = (0, k.useEffectEvent)(() => {
                (0, M.a)(aC, aK, bg, bh)
            });
            ar[12] !== bi ? (aj = () => {
                bi()
            }, ar[12] = bi, ar[13] = aj) : aj = ar[13];
            let bj = bh?.id,
                bk = bh?.kind,
                bl = bg?.conversationId,
                bm = bg?.responseId,
                bn = bg?.savedContentBackend;
            if (ar[14] !== bk || ar[15] !== bl || ar[16] !== bm || ar[17] !== bn || ar[18] !== bj ? (ak = [bj, bk, bl, bm, bn], ar[14] = bk, ar[15] = bl, ar[16] = bm, ar[17] = bn, ar[18] = bj, ar[19] = ak) : ak = ar[19], (0, k.useEffect)(aj, ak), null == aP) {
                let a;
                return ar[20] !== az ? (a = (0, d.jsx)(ad.a, {
                    reference: az
                }), ar[20] = az, ar[21] = a) : a = ar[21], a
            }
            let bo = () => {
                    (0, M.a)(aC, aK, bg, bh, !0)
                },
                bp = (a, b, c) => {
                    if (aL || null == aR) return;
                    "opening" === a && bo();
                    let e = (0, p.a)(aP);
                    if ("saving" === a && null != aS && null == aU && null == aV && ("pptx" === e || "xlsx" === e || "csv" === e || "tsv" === e)) {
                        let a = (0, q.b)({
                            artifactType: "pptx" === e ? "slides" : "spreadsheet",
                            importKind: e,
                            threadId: aS,
                            originatingTurn: aE?.turnId == null ? void 0 : {
                                turnId: aE.turnId,
                                inputMessageId: null,
                                messageId: aF ?? null
                            }
                        }, "download-url" === aR.type ? void 0 : {
                            conversationId: aS,
                            byteSource: "chatgpt",
                            target: aR
                        });
                        null != a && (0, q.c)(aC, {
                            ...a,
                            surface: "output-card"
                        }, "download", {
                            format: e
                        })
                    }
                    "saving" === a && null != aS && null != e && (0, Y.b)(aC, {
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD",
                        importKind: e,
                        isEditing: !1,
                        source: {
                            conversationId: aS,
                            byteSource: "chatgpt",
                            sharedConversationId: aU,
                            artifactInteractionExcluded: null != aV,
                            target: aR
                        },
                        originatingTurn: aE?.turnId == null ? void 0 : {
                            turnId: aE.turnId,
                            inputMessageId: null,
                            messageId: aF ?? null
                        }
                    }), aJ(a);
                    let f = !0,
                        g = () => {
                            f && (f = !1, aJ(void 0))
                        },
                        h = {
                            conversationId: aC.get(V.j, aS ?? null) ?? aS,
                            fileName: aP,
                            gizmoId: null == aS ? null : aC.get(V.T, aS),
                            sharedConversationId: aU,
                            mimeType: aW,
                            postId: aV,
                            target: aR
                        };
                    "adding-to-space" === a ? g() : ("saving" === a ? (0, _.saveChatGptFile)(aC, h) : (0, _.openChatGptFile)(aC, {
                        ...h,
                        messageId: (0, W.c)(aE, av)?.messageId,
                        connectedFileIntent: "open",
                        interaction: b,
                        isAccessBlocked: a => (0, X.j)(a, aS),
                        browserPreview: a2,
                        conversationViewerUrl: aZ,
                        onClose: null == c ? void 0 : () => {
                            g(), c()
                        },
                        downloadFallback: aY && !a3,
                        tabKey: `${aE?.messageId??"message"}:${String(av)}:${aP}${null==aw?"":`:${String(aw)}`}`
                    })).catch(b => {
                        "opening" === a && f && null != c && ((0, l.flushSync)(g), c()), Q.a.warning("ChatGPT content reference file action failed", {
                            safe: {},
                            sensitive: {
                                error: b
                            }
                        }), aC.get(B.f).danger("opening" === a && (a3 || null != bd) ? (0, d.jsx)(n.a, {
                            id: "file-tile.open-failed",
                            defaultMessage: "Failed to open {fileName}",
                            values: {
                                fileName: aP
                            }
                        }) : (0, d.jsx)(n.a, {
                            id: "file-tile.download-failed-with-name",
                            defaultMessage: "Failed to download {fileName}. Please try again later.",
                            values: {
                                fileName: aP
                            }
                        }), {
                            errorAnalytics: {
                                toastId: "saving" === a ? "file_download_failed" : "unknown"
                            }
                        })
                    }).finally(g)
                },
                bq = a => {
                    a4 && (a.preventDefault(), bp("opening", a))
                };
            if ("artifact-row" === aB && aY) {
                let a;
                ar[22] !== aD ? (a = aD.formatMessage({
                    id: "chatgpt.artifacts.resource_row.download_file.label",
                    defaultMessage: "Download file"
                }), ar[22] = aD, ar[23] = a) : a = ar[23], al = a
            } else a8 && (al = aD.formatMessage({
                id: "chatgpt.contentReferences.file.saveAs.ariaLabel",
                defaultMessage: "Save {fileName} as\u2026"
            }, {
                fileName: aP
            }));
            let br = null;
            if (null != al && (br = "artifact-row" === aB ? (0, d.jsx)(z, {
                    label: al,
                    disabled: aL,
                    loading: "saving" === aI,
                    onClick: a => {
                        a.stopPropagation(), bp("saving")
                    }
                }) : (0, d.jsx)(h.a, {
                    content: al,
                    children: (0, d.jsx)(u.a, {
                        "aria-label": al,
                        color: "ghost",
                        disabled: aL,
                        loading: "saving" === aI,
                        radius: "default",
                        size: "toolbar",
                        uniform: !0,
                        onClick: a => {
                            a.stopPropagation(), bp("saving")
                        },
                        children: "saving" !== aI && (0, d.jsx)(x.a, {
                            "aria-hidden": !0,
                            className: "icon-sm"
                        })
                    })
                })), a4 && null != bd ? am = aL ? aD.formatMessage({
                    id: "chatgpt.contentReferences.file.openingConnectedFile.ariaLabel",
                    defaultMessage: "Opening {fileName}"
                }, {
                    fileName: aP
                }) : aD.formatMessage({
                    id: "chatgpt.contentReferences.file.openConnectedFile.ariaLabel",
                    defaultMessage: "Open {fileName}"
                }, {
                    fileName: aP
                }) : a4 ? am = a3 && aL ? aD.formatMessage({
                    id: "chatgpt.contentReferences.file.openingPreview.ariaLabel",
                    defaultMessage: "Opening preview of {fileName}"
                }, {
                    fileName: aP
                }) : a3 ? aD.formatMessage({
                    id: "chatgpt.contentReferences.file.openPreview.ariaLabel",
                    defaultMessage: "Open preview of {fileName}"
                }, {
                    fileName: aP
                }) : aL ? aD.formatMessage({
                    id: "chatgpt.contentReferences.file.downloading.ariaLabel",
                    defaultMessage: "Downloading {fileName}"
                }, {
                    fileName: aP
                }) : aD.formatMessage({
                    id: "chatgpt.contentReferences.file.download.ariaLabel",
                    defaultMessage: "Download {fileName}"
                }, {
                    fileName: aP
                }) : aX && (am = a3 ? aD.formatMessage({
                    id: "chatgpt.contentReferences.file.previewBlocked.ariaLabel",
                    defaultMessage: "Preview of {fileName} unavailable in lockdown mode"
                }, {
                    fileName: aP
                }) : aD.formatMessage({
                    id: "chatgpt.contentReferences.file.downloadBlocked.ariaLabel",
                    defaultMessage: "Download {fileName} unavailable in lockdown mode"
                }, {
                    fileName: aP
                })), "artifact-row" !== aB && "file-tile" !== aB) {
                let a = !0 !== az.codex_file_citation_authoritative && "my_files" === (b = az).source && null != (0, ag.b)(b.library_file_id) && !ax(b),
                    e = !0 !== az.codex_file_citation_authoritative && null == au && !a && (ax(az) || null != bd || aE?.conversationOrigin === "tpp" && null != (0, ag.b)(az.library_file_id)),
                    g = null == au ? (0, ag.b)((0, ag.d)(az.codex_file_citation_attributes)?.label) ?? (0, ag.b)((0, ag.d)(az.codex_file_citation_attributes)?.title) ?? aP : (0, I.a)(au);
                a ? (c = az, o = aP, g = (0, f.c)({
                    fileName: o,
                    matchedText: (0, ag.b)(c.matched_text) ?? void 0
                })) : e && (g = (0, f.b)(function(a) {
                    try {
                        return decodeURIComponent(a)
                    } catch {
                        return a
                    }
                }(aP)));
                let j = (0, d.jsx)("span", {
                    style: f.h,
                    children: (0, d.jsx)(D.a, {
                        ...ba,
                        "aria-hidden": !0,
                        size: 16,
                        style: f.i
                    })
                });
                if (e) {
                    let a, b, c = a => {
                            if (!a4) return;
                            a.preventDefault();
                            let b = a.currentTarget;
                            bp(aY && (0, K.a)(a) ? "saving" : "opening", a, () => {
                                requestAnimationFrame(() => {
                                    b.isConnected && document.activeElement === document.body && b.focus({
                                        preventScroll: !0
                                    })
                                })
                            })
                        },
                        e = {
                            ref: a => {
                                if (null != a) return (0, t.b)(a, {
                                    text: [aP, g, bf].join(" "),
                                    highlight: (0, i.e)() ? "block" : "auto"
                                })
                            },
                            ariaLabel: am ?? aP,
                            icon: j,
                            isTerminalInline: !0,
                            label: g,
                            testId: "chatgpt-library-file-citation"
                        };
                    a = null != bf ? (0, d.jsx)(H.a, {
                        ...e,
                        href: bf,
                        onActivate: bo,
                        requiresConfirmation: aH,
                        showHoverActions: null != be,
                        tooltipContent: aP,
                        variant: "file",
                        onUnmodifiedClick: c
                    }) : a4 ? (0, d.jsx)(H.a, {
                        ...e,
                        disabled: aL,
                        variant: "file",
                        onClick: c
                    }) : (0, d.jsx)(H.a, {
                        ...e,
                        disabled: !0,
                        variant: "file",
                        onClick: () => bp("opening")
                    });
                    let f = null != bf ? a : (0, d.jsx)(h.a, {
                        content: aP,
                        children: (0, d.jsx)("span", {
                            className: "inline-flex",
                            children: a
                        })
                    });
                    return ar[24] !== f ? (b = (0, d.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: f
                    }), ar[24] = f, ar[25] = b) : b = ar[25], b
                }
                if (!0 === az.codex_file_citation_authoritative || null != au || a || aE?.conversationOrigin === "tpp") {
                    let a, b = null != bf ? (0, d.jsxs)(af.a, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-(color:--link-primary-text-color-hover) hover:decoration-inherit",
                        href: bf,
                        onActivate: bo,
                        "aria-busy": aL,
                        "aria-label": am ?? aP,
                        tooltipContent: aP,
                        showHoverActions: null != be,
                        onUnmodifiedClick: bq,
                        children: [j, au ?? g]
                    }) : (0, d.jsxs)(L.c, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-(color:--link-primary-text-color-hover) hover:decoration-inherit",
                        reference: {
                            path: aP
                        },
                        ariaBusy: aL,
                        ariaLabel: am ?? aP,
                        cwd: null,
                        disabled: aL || !a4,
                        enableWorkspaceFileActions: !1,
                        hostId: aE?.hostId,
                        label: g,
                        tooltipText: aP,
                        onOpen: (a, b) => {
                            a4 && (b.preventDefault(), bp(aY && (0, K.a)(b) ? "saving" : "opening", b))
                        },
                        children: [j, au ?? g]
                    });
                    return ar[26] !== b ? (a = (0, d.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: b
                    }), ar[26] = b, ar[27] = a) : a = ar[27], a
                }
            }
            let bs = (0, f.f)({
                    fileName: aP,
                    mimeType: (s = az, (0, ag.b)(s.source_mime_type) ?? (0, ag.b)(s.mounted_library_mime_type) ?? (0, ag.b)(s.mime_type) ?? void 0),
                    sourceUrl: a9 ?? void 0
                }),
                bt = null;
            if (null != bf ? bt = (0, d.jsx)(af.a, {
                    "data-testid": aQ ? "chatgpt-library-folder-navigation" : void 0,
                    className: "artifact-row" === aB ? "absolute inset-0 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset" : "absolute inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    href: bf,
                    onActivate: bo,
                    "aria-busy": aL,
                    tooltipContent: aP,
                    showHoverActions: null != be,
                    onUnmodifiedClick: bq,
                    children: (0, d.jsx)("span", {
                        className: "sr-only",
                        children: aP
                    })
                }) : a4 ? bt = (0, d.jsx)("button", {
                    "aria-busy": aL,
                    "aria-label": am,
                    className: "artifact-row" === aB ? "absolute inset-0 cursor-interaction bg-transparent hover:bg-text/5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait" : "absolute inset-0 cursor-interaction bg-transparent hover:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait",
                    disabled: aL,
                    onClick: a => bp(aY && (0, K.a)(a) ? "saving" : "opening", a),
                    type: "button"
                }) : (aX || bc) && (bt = (0, d.jsx)("button", {
                    "aria-disabled": !0,
                    "aria-label": am ?? aP,
                    className: "absolute inset-0 bg-transparent",
                    disabled: !0,
                    type: "button"
                })), aL) {
                let a;
                ar[28] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(A.a, {
                    className: "icon-xs shrink-0 text-text/70",
                    "aria-hidden": !0
                }), ar[28] = a) : a = ar[28], an = a
            } else if (null != br && "artifact-row" === aB) an = br;
            else if (null != br) {
                let a, b = "pointer-events-auto";
                "file-tile" === aB && (b = "pointer-events-none absolute end-1.5 top-1.5 z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), ar[29] !== br || ar[30] !== b ? (a = (0, d.jsx)("span", {
                    className: b,
                    children: br
                }), ar[29] = br, ar[30] = b, ar[31] = a) : a = ar[31], an = a
            }
            if (a0 && null != a1) {
                let a;
                ar[32] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(n.a, {
                    id: "chatgpt.contentReferences.file.addToSpace",
                    defaultMessage: "Add to Space"
                }), ar[32] = a) : a = ar[32], an = (0, d.jsxs)("span", {
                    className: "pointer-events-auto flex items-center gap-1",
                    children: [(0, d.jsx)(u.a, {
                        type: "button",
                        size: "toolbar",
                        color: "ghost",
                        disabled: aL,
                        loading: "adding-to-space" === aI,
                        onClick: a => {
                            a.stopPropagation(), bp("adding-to-space")
                        },
                        children: a
                    }), an]
                })
            }
            if (a7) {
                let a, b;
                ar[33] !== a6?.originalSource ? (a = a6?.originalSource ? (0, d.jsx)(n.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source.description",
                    defaultMessage: "Edits are saved to the original workspace file, not this Library copy"
                }) : void 0, ar[33] = a6?.originalSource, ar[34] = a) : a = ar[34], ar[35] !== a6?.originalSource ? (b = a6?.originalSource ? (0, d.jsx)(n.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source",
                    defaultMessage: "Open original source"
                }) : (0, d.jsx)(n.a, {
                    id: "chatgpt.artifacts.resource_row.open_latex_editor",
                    defaultMessage: "Open LaTeX editor"
                }), ar[35] = a6?.originalSource, ar[36] = b) : b = ar[36], an = (0, d.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, d.jsx)(h.a, {
                        content: a,
                        children: (0, d.jsx)(u.a, {
                            className: "pointer-events-auto",
                            color: "primary",
                            disabled: aL,
                            size: "toolbar",
                            onClick: () => {
                                a6?.originalSource ? (0, N.openFileSidePanelTab)(aC, a6.file.path, {
                                    hostId: a6.file.hostId
                                }) : bp("opening")
                            },
                            children: b
                        })
                    }), an]
                })
            }
            let bu = a$,
                bv = "default";
            "artifact-row" === aB ? (bu = a7 && !a6?.originalSource ? (0, d.jsx)(n.a, {
                id: "chatgpt.artifacts.resource_row.latex_file_type",
                defaultMessage: "LaTeX document \xb7 Editable source"
            }) : (0, d.jsx)(y, {
                children: (0, d.jsx)(n.a, {
                    ...(0, f.d)(bs.category, bs.iconKey)
                })
            }), bv = a7 ? "default" : "artifact-list") : "file-tile" === aB && (bu = aQ ? (0, d.jsx)(n.a, {
                id: "chatgpt.file_navigation.folder.label",
                defaultMessage: "Folder"
            }) : function(a) {
                let b = a.source_type ?? a.source;
                if ("my_files" !== b && "google_drive" !== b) return null;
                let c = (0, ag.b)(a.description) ?? (0, ag.b)(a.snippet);
                return c?.startsWith("/") === !0 ? c : null
            }(az) ?? (0, d.jsx)(n.a, {
                ...(0, f.d)(bs.category, bs.iconKey)
            }), bv = "file-tile");
            let bw = "file-tile" === aB ? (0, d.jsx)("span", {
                className: "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl",
                children: aQ ? (0, d.jsx)(v.Ld, {
                    "aria-hidden": !0
                }) : (0, d.jsx)(D.a, {
                    ...ba,
                    "aria-hidden": !0,
                    size: 24
                })
            }) : (0, d.jsx)(D.a, {
                ...ba,
                "aria-hidden": !0,
                className: "shrink-0",
                size: 24
            });
            ar[37] !== aP || ar[38] !== bv || ar[39] !== bu || ar[40] !== bw || ar[41] !== an ? (ao = (0, d.jsx)(w.h, {
                className: "pointer-events-none relative z-10",
                icon: bw,
                subtitle: bu,
                title: aP,
                titleTooltip: aP,
                trailing: an,
                variant: bv
            }), ar[37] = aP, ar[38] = bv, ar[39] = bu, ar[40] = bw, ar[41] = an, ar[42] = ao) : ao = ar[42], ar[43] !== bt || ar[44] !== ao ? (ap = (0, d.jsxs)("span", {
                className: "group/resource-row relative",
                children: [bt, ao]
            }), ar[43] = bt, ar[44] = ao, ar[45] = ap) : ap = ar[45];
            let bx = ap;
            if ("artifact-row" === aB) return bx;
            if ("file-tile" === aB) {
                let a;
                return ar[46] !== bx ? (a = (0, d.jsx)(w.a, {
                    as: "span",
                    variant: "file-tile",
                    children: bx
                }), ar[46] = bx, ar[47] = a) : a = ar[47], a
            }
            return ar[48] !== bx ? (aq = (0, d.jsx)(w.a, {
                as: "span",
                className: "mt-3",
                children: bx
            }), ar[48] = bx, ar[49] = aq) : aq = ar[49], aq
        }

        function ax(a) {
            if ("file_citation" === (0, ag.b)((0, ag.d)(a.fff_metadata)?.file_reference_type)) return !0;
            let b = (0, ag.b)(a.matched_text)?.trim().toLowerCase();
            return b?.startsWith("\uE200filecite") === !0 || b?.startsWith("[citefilecite") === !0
        }

        function ay(a) {
            let b, c, f, g, h, i = (0, e.c)(15),
                {
                    contentReferenceIndex: j,
                    reference: k
                } = a;
            if (i[0] !== k.items ? (b = Array.isArray(k.items) ? k.items : [], i[0] = k.items, i[1] = b) : b = i[1], i[2] !== j || i[3] !== k || i[4] !== b) {
                g = Symbol.for("react.early_return_sentinel");
                a: {
                    let a, e = b.flatMap(az);
                    if (0 === e.length) {
                        let a;
                        i[8] !== k ? (a = (0, d.jsx)(ad.c, {
                            reference: k
                        }), i[8] = k, i[9] = a) : a = i[9], g = a;
                        break a
                    }
                    c = "not-prose m-0 mt-6 flex list-none flex-wrap gap-2 p-0",
                    i[10] !== j ? (a = (a, b) => (0, d.jsx)("li", {
                        className: "m-0 p-0",
                        children: (0, d.jsx)(au, {
                            contentReferenceIndex: j,
                            fileNavigationIndex: b,
                            presentation: "file-tile",
                            reference: a
                        })
                    }, `${a.name}:${String(b)}`), i[10] = j, i[11] = a) : a = i[11],
                    f = e.map(a)
                }
                i[2] = j, i[3] = k, i[4] = b, i[5] = c, i[6] = f, i[7] = g
            } else c = i[5], f = i[6], g = i[7];
            return g !== Symbol.for("react.early_return_sentinel") ? g : (i[12] !== c || i[13] !== f ? (h = (0, d.jsx)("ul", {
                className: c,
                children: f
            }), i[12] = c, i[13] = f, i[14] = h) : h = i[14], h)
        }

        function az(a) {
            let b = (0, ag.d)(a),
                c = null == b ? null : (0, ae.a)(b);
            return null == b || null == c ? [] : [{
                ...b,
                name: c,
                type: "file"
            }]
        }
    }),
    PO1G: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("KDax");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i, j = (0, e.c)(8);
                return j[0] !== a ? ({
                    className: b,
                    ...c
                } = a, j[0] = a, j[1] = b, j[2] = c) : (b = j[1], c = j[2]), j[3] !== b ? (h = (0, f.b)("cursor-interaction", b), j[3] = b, j[4] = h) : h = j[4], j[5] !== c || j[6] !== h ? (i = (0, d.jsx)(g.a, {
                    ...c,
                    className: h,
                    initiator: "markdown_link_click"
                }), j[5] = c, j[6] = h, j[7] = i) : i = j[7], i
            }
        })
    }),
    zamV: (function(a, b, c) {
        var d = c("tFxw"),
            e = c("MVHH"),
            f = c("yGJW"),
            g = c("dQRk"),
            h = c("jAnS");
        let i = {
            "autofit-column": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_AUTOFIT_COLUMN",
            "autofit-row": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_AUTOFIT_ROW",
            "click-formula-bar": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CLICK_FORMULA_BAR",
            copy: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_COPY",
            cut: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CUT",
            "delete-selection": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DELETE_SELECTION",
            "double-click-content": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOUBLE_CLICK_CONTENT",
            "fit-to-viewport": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_FIT_TO_VIEWPORT",
            paste: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_PASTE",
            "paste-without-formatting": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_PASTE_WITHOUT_FORMATTING",
            redo: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_REDO",
            "resize-column": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_RESIZE_COLUMN",
            "resize-row": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_RESIZE_ROW",
            save: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SAVE",
            search: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SEARCH",
            "select-all": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_SELECT_ALL",
            undo: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_UNDO",
            "zoom-in": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_ZOOM_IN",
            "zoom-out": "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_ZOOM_OUT"
        };

        function j(a, b) {
            let c, {
                action: i,
                importKind: j,
                source: l,
                isEditing: m,
                originatingTurn: n
            } = b;
            if (null == l || m) return;
            let {
                conversationId: o,
                target: p
            } = l;
            if ("chatgpt-thread" !== a.value.routeKind || a.value.conversationId !== o || null != l.sharedConversationId || !0 === l.artifactInteractionExcluded || null != a.get(g.bb, o)) return;
            if ("pptx" === j) c = "CHATGPT_WEB_ARTIFACT_KIND_PRESENTATION";
            else {
                if ("xlsx" !== j && "csv" !== j && "tsv" !== j) return;
                c = "CHATGPT_WEB_ARTIFACT_KIND_SPREADSHEET"
            }
            let q = a.get(g.y, o),
                r = "tpp" === q || "flora" === q;
            if (!r || "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW" !== i) try {
                let b = "fileId" in p ? p.fileId : void 0,
                    g = "libraryFileId" in p ? p.libraryFileId : void 0,
                    j = (0, d.a)("mounted-library" === p.type ? p.mountedLibraryFileId : void 0, g, b),
                    l = null != j && (null != (0, d.d)(j) || (0, d.j)(j)) ? j : void 0;
                (0, f.a)(a, e.k, {
                    action: i,
                    artifactKind: c,
                    conversationId: o,
                    fileId: k(b),
                    libraryFileId: k(g),
                    mountedLibraryFileId: l,
                    messageId: n?.messageId ?? ("sandbox" === p.type ? p.messageId : void 0),
                    inputMessageId: n?.inputMessageId ?? void 0,
                    turnExchangeId: n?.turnId,
                    interactionMode: "CHATGPT_WEB_ARTIFACT_INTERACTION_MODE_VIEW_ONLY",
                    isTemporaryChat: (0, h.i)(a.value.search ?? ""),
                    productExperience: r ? "CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_WORK" : "CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_CHAT"
                })
            } catch {}
        }

        function k(a) {
            return a?.replace(/^(?:file-library:)+/u, "").startsWith("external-") ? void 0 : a || void 0
        }
        c.d(b, {}, {
            a: function(a, b) {
                return {
                    onPreviewOpened: () => j(a, {
                        ...b,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW"
                    }),
                    onDownload: () => j(a, {
                        ...b,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD"
                    }),
                    onClose: () => j(a, {
                        ...b,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CLOSE_PREVIEW"
                    }),
                    onInteractionAttempt: c => {
                        j(a, {
                            ...b,
                            action: i[c]
                        })
                    }
                }
            },
            b: j
        })
    }),
    s60H: (function(a, b, c) {
        c("QdUF"), c("M8lA"), c("bWX0"), c.d(b, {}, {
            a: function(a) {}
        })
    }),
    SQeA: (function(a, b, c) {
        var d = c("CWHL"),
            e = c("lAQI"),
            f = c("w5lF"),
            g = c("GDNt"),
            h = c("Kwur");
        c.d(b, {}, {
            a: async function(a, b) {
                try {
                    let c = await h.Request.safeGet("/share/post/resolve/{post_id}", {
                        parameters: {
                            path: {
                                post_id: encodeURIComponent(a)
                            }
                        },
                        signal: b
                    });
                    return {
                        status: "ready",
                        post: c.post,
                        receiverAction: (0, d.a)(c, {
                            defaultEyebrowAutoSend: !0
                        })
                    }
                } catch (c) {
                    if (b?.throwIfAborted(), !(c instanceof g.a)) throw c;
                    let a = c.diagnosticError;
                    if (a instanceof f.c) {
                        let b = e.F({
                            message: e.L().optional(),
                            reason: e.L().optional(),
                            code: e.L().optional()
                        }).safeParse(a.detail).data;
                        if ("no_permission" === a.jsonError || 403 === c.status && b?.message === "no_permission") return {
                            status: "unavailable",
                            reason: "workspace"
                        };
                        if (b?.reason === "deleted" || b?.code === "shared_post_deleted") return {
                            status: "unavailable",
                            reason: "deleted"
                        }
                    }
                    if (c.status >= 500) throw c;
                    return {
                        status: "unavailable",
                        reason: "not_found"
                    }
                }
            }
        })
    }),
    GigQ: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b) {
                let c, d = a.attachments[0];
                if (d?.kind === "media_generation") {
                    if (1 !== a.attachments.length || d.output_blocked || null == d.asset_pointer || null == d.messages) return null;
                    let b = d.asset_pointer.split("?")[0],
                        e = d.messages;
                    if (!e.some((a, c) => "assistant" === a.author.role && "string" == typeof a.recipient && e.slice(c + 1).some(c => "tool" === c.author.role && c.author.name === a.recipient && "multimodal_text" === c.content.content_type && c.content.parts.some(a => "string" != typeof a && "content_type" in a && "image_asset_pointer" === a.content_type && a.asset_pointer.split("?")[0] === b)))) return null;
                    c = e
                } else {
                    if (!(a.attachments.length > 0 && a.attachments.every(a => ("message_slice" === a.kind || "deep_research" === a.kind) && a.messages.length > 0))) return null;
                    c = a.attachments.flatMap(a => "message_slice" === a.kind || "deep_research" === a.kind ? a.messages : [])
                }
                let e = {
                        id: "y-root",
                        message: null,
                        parent: null,
                        children: []
                    },
                    f = [e],
                    g = new Set([e.id]);
                for (let a of c) {
                    if (!a.id || g.has(a.id)) return null;
                    g.add(a.id), e.children = [a.id];
                    let b = {
                        id: a.id,
                        message: a,
                        parent: e.id,
                        children: []
                    };
                    f.push(b), e = b
                }
                return {
                    conversation_id: b,
                    current_node: e.id,
                    mapping: Object.fromEntries(f.map(a => [a.id, a])),
                    linear_conversation: f,
                    title: null,
                    moderation_results: [],
                    moderation_state: {},
                    has_user_editable_context: !1,
                    is_public: !1,
                    is_indexable: !1,
                    continue_conversation_url: ""
                }
            }
        })
    }),
    uQqo: (function(a, b, c) {
        var d = c("ccwJ"),
            e = c("XPCU");
        c.d(b, {}, {
            a: function(a, b) {
                let c = new Set(a.attachments.flatMap(a => "message_slice" === a.kind || "deep_research" === a.kind ? a.messages.flatMap(a => (0, d.c)(a).map(a => a.src)) : [])),
                    f = a.attachments.flatMap(a => "media_generation" !== a.kind || "image_gen" !== a.generation_type || a.output_blocked ? [] : [a]);
                return b.flatMap(a => {
                    if (null != a.src && c.has(a.src)) return [a];
                    let b = f.find(b => b.id === a.id) ?? f.find(b => null != b.asset_pointer && b.asset_pointer.split("?")[0] === a.src?.split("?")[0]);
                    if (null == b) return [];
                    let d = (0, e.a)(b.url);
                    return null == d ? [] : [{
                        ...a,
                        src: d,
                        previewSrc: d,
                        height: a.height ?? b.height,
                        width: a.width ?? b.width
                    }]
                })
            },
            b: function(a) {
                return a.attachments.flatMap(a => {
                    if ("media_generation" !== a.kind || "image_gen" !== a.generation_type || a.output_blocked) return [];
                    let b = a.asset_pointer ?? `${a.id.startsWith("file_")?"sediment":"file-service"}://${a.id}`,
                        c = (a.messages ?? []).flatMap(d.c).find(a => a.src.split("?")[0] === b.split("?")[0]);
                    return [{
                        type: "generated-image",
                        isAnimated: c?.isAnimated,
                        spritesheet: c?.spritesheet,
                        id: a.id,
                        chatGptGenerationId: a.generation_id,
                        chatGptImageMetadata: c?.chatGptImageMetadata,
                        chatGptMessageId: a.message_id ?? void 0,
                        src: b,
                        width: a.width,
                        height: a.height,
                        status: "completed"
                    }]
                })
            },
            c: function(a) {
                return a.attachments.flatMap(b => {
                    if ("error" !== b.kind || "image_share" !== b.underlying_kind) return [];
                    let c = a.web_image_attachments?.find(a => a.id === b.id);
                    return null == c ? [] : [c]
                })
            }
        })
    }),
    XPCU: (function(a, b, c) {
        var d = c("Kwur");
        c.d(b, {}, {
            a: function(a) {
                if (null == a || 0 === a.trim().length) return null;
                try {
                    return new URL((0, d.b)(a) ?? a, window.location.href).href
                } catch {
                    return null
                }
            }
        })
    }),
    j0nn: (function(a, b, c) {
        var d = c("lSdY"),
            e = c("mQnY"),
            f = c("Fjze"),
            g = c("Q840"),
            h = c("rEML"),
            i = c("yGJW"),
            j = c("tSEg"),
            k = c("yMDx"),
            l = c("dQRk"),
            m = c("rfhJ"),
            n = c("SQeA"),
            o = c("GigQ"),
            p = c("uQqo"),
            q = c("XW2n");

        function r(a) {
            return a.attachments[0]?.kind !== "prompt_share"
        }
        let s = (0, g.q)(j.a, (a, b) => {
                let {
                    scope: c
                } = b, d = (0, h.L)("/s/:postId", c.value.pathname)?.params.postId;
                return {
                    enabled: null != d && !d.startsWith("cx_") && null != a && !a.isLoading,
                    queryKey: ["chatgpt-shared-post", d, a?.userId, a?.accountId],
                    queryFn: a => {
                        let {
                            signal: b
                        } = a;
                        return null == d ? Promise.resolve(null) : (0, n.a)(d, b)
                    },
                    gcTime: 0,
                    staleTime: 0,
                    retry: !1,
                    refetchInterval: a => {
                        let b = a.state.data;
                        return !!(b?.status === "ready" && b.post.attachments.some(a => "message_slice" === a.kind && a.messages.some(a => Object.values((0, k.c)(a.metadata)?.widgets ?? {}).some(a => "string" == typeof a?.poll_id && "published" === a.lifecycle)))) && 5e3
                    }
                }
            }),
            t = (0, g.d)(j.a, (a, b) => {
                let {
                    get: c,
                    scope: d
                } = b;
                if (null == a || a.isLoading || null == (0, h.L)("/s/:postId", d.value.pathname)) return null;
                let {
                    data: e,
                    isError: f
                } = c(s, a);
                return e?.status !== "ready" || f ? null : e.post
            }),
            u = (0, g.d)(j.a, (a, b) => {
                let {
                    auth: c,
                    conversationId: d
                } = a, {
                    get: e
                } = b;
                if (null == c || c.isLoading || null !== c.authMethod) return !1;
                let f = e(t, c),
                    g = e(l.bb, d);
                return null != f && g?.kind === "post" && g.forkFromSharedPost && g.post.id === f.id
            }),
            v = (0, g.v)(j.a, a => !1, {
                onMount: (a, b) => {
                    let c = null;
                    return b.watch(e => {
                        let {
                            get: f
                        } = e, {
                            auth: g,
                            conversationId: h
                        } = b.key, i = f(t, g);
                        if (null == i) {
                            let {
                                data: d,
                                isError: e
                            } = f(s, g);
                            null != c && (e || d?.status === "unavailable") && ((0, l.kb)(b, h, c), c = null), a(!1);
                            return
                        }
                        if (c = i.id, null == y(b, i, h)) return void a(!1);
                        let j = new Set;
                        for (let a of i.attachments)
                            if ("message_slice" === a.kind)
                                for (let b of a.messages) b.id && ("assistant" === b.author.role || "tool" === b.author.role) && j.add(b.id);
                        if (0 === j.size) return void a(!0);
                        let k = {
                            productExperience: b.key.dotAnswerCardOpen ? d.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS : void 0,
                            messageIds: j
                        };
                        return b.set(q.b, k), a(!0), () => {
                            b.get(q.b) === k && b.set(q.b, null)
                        }
                    })
                }
            }),
            w = (0, g.u)(j.a, []),
            x = (0, g.u)(j.a, () => null);

        function y(a, b, c) {
            let d = (0, o.a)(b, c);
            return null == d ? null : ((0, l.rb)(a, {
                conversation: d,
                conversationId: c,
                post: b
            }), c)
        }
        c.d(b, {}, {
            a: y,
            b: function(a) {
                return null != a && r(a) && (0, p.c)(a).length > 0
            },
            c: r,
            d: function(a, b, c) {
                let d = b.attachments[0]?.kind;
                (0, i.a)(a, e.a, {
                    postId: b.id,
                    attachmentType: d,
                    isAuthenticated: c
                }), (0, i.a)(a, f.b, {
                    actionType: "CHATGPT_SHARED_POST_RECEIVER_ACTION_TYPE_DOWNLOAD_CLICKED",
                    postId: b.id,
                    attachmentKind: d,
                    legacyStatsigEventName: "chatgpt_share_post_download_clicked"
                })
            },
            e: function(a, b, c, d, e, f) {
                let g = b.attachments.find(a => "media_generation" === a.kind && "image_gen" === a.generation_type && (a.id === c.id || null != a.asset_pointer && a.asset_pointer.split("?")[0] === c.src?.split("?")[0]));
                g?.kind === "media_generation" && (0, m.b)(a, {
                    image: {
                        ...c,
                        src: g.asset_pointer ?? null,
                        chatGptMessageId: g.message_id ?? c.chatGptMessageId
                    },
                    conversationId: g.conversation_id,
                    entryPoint: d,
                    downloadScope: e,
                    requestedImageCount: f
                })
            },
            f: t,
            g: v,
            h: u,
            i: w,
            j: s,
            k: x
        })
    })
};