export const __rspack_esm_ids = [101257];
export const __webpack_modules__ = {
    mQnY: (function(e, t, i) {
        i.d(t, {}, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostDownloadClicked"
            },
            b: {
                $type: "protobuf_analytics_events.v1.ChatgptSharePostPageViewed"
            }
        })
    }),
    zy7P: (function(e, t, i) {
        var n = i("nB3p"),
            a = i("Q840"),
            l = i("OWtl"),
            r = i("rvFo"),
            o = i("Kwur");
        let s = (0, a.q)(l.a, e => {
            let {
                accountId: t,
                userId: i,
                url: a
            } = e, l = null == a ? null : (0, n.c)(a), s = l?.workspaceDocument == null ? null : `external-gdrive:file:${l.nativeFileId}`;
            return {
                enabled: null != t && null != i && null != s,
                queryKey: ["google-file-title", t, i, s],
                staleTime: r.b.FIVE_MINUTES,
                retry: !1,
                queryFn: async e => {
                    let {
                        signal: n
                    } = e;
                    if (null == t || null == i || null == s) return null;
                    try {
                        let e = await o.Request.safePost("/files/library/mounted/{provider_key}/file_metadata", {
                            additionalHeaders: {
                                "ChatGPT-Account-ID": t
                            },
                            expectedIdentity: {
                                accountId: t,
                                userId: i
                            },
                            expectedErrorStatuses: [400, 401, 403, 404, 409, 429, 502, 503, 504],
                            parameters: {
                                path: {
                                    provider_key: "google_drive"
                                }
                            },
                            requestBody: {
                                file_id: s
                            },
                            retry: !1,
                            signal: n
                        });
                        return n.throwIfAborted(), e.file_id === s && e.name.trim() || null
                    } catch {
                        return n.throwIfAborted(), null
                    }
                }
            }
        });
        i.d(t, {}, {
            a: s
        })
    }),
    ahg9: (function(e, t, i) {
        var n = i("rKAs"),
            a = i("zSQm");
        i.d(t, {}, {
            a: function(e) {
                let t = (0, n.p)(e);
                return null == t ? null : (0, a.a)(t) ?? null
            }
        })
    }),
    g60l: (function(e, t, i) {
        i.d(t, {
            ChatGptFileReference: () => eb
        });
        var n = i("ABep"),
            a = i("QosV"),
            l = i("Rzcw"),
            r = i("nB3p"),
            o = i("slpy"),
            s = i("BOYb"),
            c = i("Q840"),
            u = i("zd8w"),
            d = i("v7qY"),
            f = i("Wf1j"),
            p = i("oyxz"),
            _ = i("mG2A"),
            h = i("w7Qu"),
            g = i("bmU4"),
            m = i("O0M0"),
            b = i("w9uH"),
            T = i("NkEl"),
            v = i("Sm6l"),
            y = i("bf6R"),
            I = i("MyoZ"),
            A = i("RzPe");

        function C(e) {
            let t, i, l, r, o = (0, a.c)(9),
                {
                    children: s,
                    actionLabel: c
                } = e;
            return o[0] !== s ? (t = (0, n.jsx)("span", {
                className: "group-focus-within/resource-row:hidden group-hover/resource-row:hidden",
                children: s
            }), o[0] = s, o[1] = t) : t = o[1], o[2] !== c ? (i = c ?? (0, n.jsx)(p.a, {
                id: "chatgpt.artifacts.resource_row.open_file.label",
                defaultMessage: "Open file"
            }), o[2] = c, o[3] = i) : i = o[3], o[4] !== i ? (l = (0, n.jsx)("span", {
                className: "hidden group-focus-within/resource-row:inline group-hover/resource-row:inline",
                "data-markdown-copy": "exclude",
                children: i
            }), o[4] = i, o[5] = l) : l = o[5], o[6] !== t || o[7] !== l ? (r = (0, n.jsxs)(n.Fragment, {
                children: [t, l]
            }), o[6] = t, o[7] = l, o[8] = r) : r = o[8], r
        }

        function x(e) {
            let t, i, l, r, s, c, u = (0, a.c)(14);
            u[0] !== e ? ({
                label: t,
                loading: i,
                ...l
            } = e, u[0] = e, u[1] = t, u[2] = i, u[3] = l) : (t = u[1], i = u[2], l = u[3]);
            let d = l["aria-label"] ?? t;
            return u[4] !== i ? (r = !i && (0, n.jsx)(A.a, {
                "aria-hidden": !0,
                className: "icon-base"
            }), u[4] = i, u[5] = r) : r = u[5], u[6] !== i || u[7] !== l || u[8] !== d || u[9] !== r ? (s = (0, n.jsx)(v.a, {
                ...l,
                "aria-label": d,
                color: "ghostActive",
                loading: i,
                radius: "large",
                size: "imageToolbar",
                uniform: !0,
                children: r
            }), u[6] = i, u[7] = l, u[8] = d, u[9] = r, u[10] = s) : s = u[10], u[11] !== t || u[12] !== s ? (c = (0, n.jsx)("span", {
                className: "pointer-events-none relative z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100",
                children: (0, n.jsx)(o.a, {
                    content: t,
                    children: s
                })
            }), u[11] = t, u[12] = s, u[13] = c) : c = u[13], c
        }
        var w = i("RNul"),
            N = i("SGsN"),
            E = i("bWX0"),
            O = i("i1PI"),
            R = i("jCsa"),
            j = i("MExO"),
            k = i("vYmP"),
            P = i("ZjkF"),
            M = i("WAdu"),
            F = i("cckT"),
            S = i("S1CS"),
            G = i("Ph61"),
            L = i("LOXd"),
            W = i("coFq"),
            B = i("GaA7"),
            D = i("tSEg"),
            H = i("WFY2"),
            U = i("zsxQ"),
            $ = i("vldH"),
            z = i("zy7P"),
            K = i("u4MG"),
            Q = i("dQRk"),
            q = i("TUMj"),
            X = i("rxj0"),
            V = i("zamV"),
            Y = i("s60H"),
            J = i("Ul98"),
            Z = i("f2PP"),
            ee = i("c9lJ"),
            et = i("j0nn"),
            ei = i("ahg9"),
            en = i("j8Yf"),
            ea = i("t2JB"),
            el = i("PO1G"),
            er = i("DIH2");

        function eo(e) {
            let t, i, l, o, s, d, f, p, _ = (0, a.c)(34),
                {
                    reference: h
                } = e,
                g = (0, c.y)(D.a),
                m = (0, q.d)(),
                b = "restricted" === (0, u.useContext)(M.a);
            _[0] !== h.name ? (t = (0, er.b)(h.name), _[0] = h.name, _[1] = t) : t = _[1];
            let T = t,
                v = (0, ea.b)(h),
                I = (0, u.useRef)(null),
                A = m?.savedContentResponse,
                C = m?.shouldBlockExternalEgress === !0,
                x = null == A || null == v || C ? null : (0, r.k)(v);
            _[2] !== x || _[3] !== A || _[4] !== g ? (i = () => {
                (0, G.a)(g, I, A, x)
            }, _[2] = x, _[3] = A, _[4] = g, _[5] = i) : i = _[5];
            let w = (0, u.useEffectEvent)(i);
            _[6] !== w ? (l = () => {
                w()
            }, _[6] = w, _[7] = l) : l = _[7];
            let N = x?.id,
                E = x?.kind,
                O = A?.conversationId,
                R = A?.responseId,
                j = A?.savedContentBackend;
            if (_[8] !== N || _[9] !== E || _[10] !== O || _[11] !== R || _[12] !== j ? (o = [N, E, O, R, j], _[8] = N, _[9] = E, _[10] = O, _[11] = R, _[12] = j, _[13] = o) : o = _[13], (0, u.useEffect)(l, o), null == T || null == v) {
                let e;
                return _[14] !== h ? (e = (0, n.jsx)(en.a, {
                    reference: h
                }), _[14] = h, _[15] = e) : e = _[15], e
            }
            _[16] !== x || _[17] !== v || _[18] !== C || _[19] !== T || _[20] !== b || _[21] !== A || _[22] !== g ? (s = C ? (0, n.jsx)(k.a, {
                ariaLabel: T,
                disabled: !0,
                icon: (0, n.jsx)(y.Ad, {}),
                isTerminalInline: !0,
                label: T,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onClick: es
            }) : (0, n.jsx)(k.a, {
                ariaLabel: T,
                href: v,
                icon: (0, n.jsx)(y.Ad, {}),
                isTerminalInline: !0,
                label: T,
                requiresConfirmation: b,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onActivate: () => {
                    (0, G.a)(g, I, A, x, !0)
                }
            }), _[16] = x, _[17] = v, _[18] = C, _[19] = T, _[20] = b, _[21] = A, _[22] = g, _[23] = s) : s = _[23];
            let P = s;
            _[24] !== T || _[25] !== h ? (d = function(e, t) {
                let i = (0, er.b)(e.matched_text),
                    n = (0, er.b)(e.library_path);
                if (null == i || null == n) return null;
                let a = i.match(/^`+/)?.[0],
                    l = null != a && i.endsWith(a),
                    r = l ? i.slice(a.length, -a.length) : i,
                    o = n.split("/").filter(Boolean);
                if (o.length < 2 || o.at(-1) !== t) return null;
                let s = o.join("/");
                if (!new Set([`/${s}`, s, `/${s}/`, `${s}/`, `Library/${s}`, ...[" / ", " > ", " → ", " › "].map(e => o.join(e))]).has(r)) return null;
                let c = r.lastIndexOf(t);
                return {
                    isInlineCode: l,
                    prefix: r.slice(0, c),
                    suffix: r.slice(c + t.length)
                }
            }(h, T), _[24] = T, _[25] = h, _[26] = d) : d = _[26];
            let F = d;
            if (null == F) return P;
            _[27] !== P || _[28] !== F.prefix || _[29] !== F.suffix ? (f = (0, n.jsxs)(n.Fragment, {
                children: [F.prefix, P, F.suffix]
            }), _[27] = P, _[28] = F.prefix, _[29] = F.suffix, _[30] = f) : f = _[30];
            let S = f;
            return _[31] !== S || _[32] !== F.isInlineCode ? (p = F.isInlineCode ? (0, n.jsx)("code", {
                children: S
            }) : S, _[31] = S, _[32] = F.isInlineCode, _[33] = p) : p = _[33], p
        }

        function es() {}
        var ec = i("Bbed"),
            eu = i("ePaQ"),
            ed = i("JAYD"),
            ef = i("Nfif");
        let ep = (0, ec.a)(async () => (await Promise.all([i.e(418851), i.e(109308), i.e(399565), i.e(257798), i.e(447351), i.e(617936), i.e(807489), i.e(337882), i.e(955979), i.e(646436), i.e(7078), i.e(200429), i.e(698524), i.e(956483), i.e(87162), i.e(396705), i.e(155568), i.e(731863), i.e(767086), i.e(76629), i.e(514085), i.e(204542), i.e(691685)]).then(i.bind(i, "kcNG"))).PrivateSourceFollowUp);

        function e_(e) {
            let t, i, l, r, o, s, d, f = (0, a.c)(29),
                {
                    source: p
                } = e,
                _ = (0, c.y)(D.a),
                h = (0, q.d)(),
                [g, m] = (0, u.useState)(""),
                [b, T] = (0, u.useState)(!1),
                v = (0, u.useContext)(M.a);
            f[0] !== v || f[1] !== _.value ? (t = null != (0, D.h)(_.value) && "restricted" !== v, f[0] = v, f[1] = _.value, f[2] = t) : t = f[2];
            let y = t,
                I = (0, c.x)(y ? ed.a : null, p.connector_id),
                A = !y || !I;
            f[3] !== A || f[4] !== b || f[5] !== g || f[6] !== p || f[7] !== h ? (i = A || null == h || h.isReadOnly || h.shouldBlockExternalEgress || h.renderRestrictedWidgets || h.renderRestrictedModelResponses ? void 0 : (0, n.jsx)(ep, {
                source: p,
                question: g,
                onQuestionChange: m,
                turn: h,
                pending: b,
                onPendingChange: T
            }, p.id), f[3] = A, f[4] = b, f[5] = g, f[6] = p, f[7] = h, f[8] = i) : i = f[8];
            let C = p.snippet ?? void 0;
            f[9] !== p.name || f[10] !== C ? (l = {
                title: p.name,
                body: C
            }, f[9] = p.name, f[10] = C, f[11] = l) : l = f[11], f[12] !== p.name || f[13] !== l ? (r = {
                title: p.name,
                hoverCard: l
            }, f[12] = p.name, f[13] = l, f[14] = r) : r = f[14], f[15] !== p.connector_id ? (o = (0, n.jsx)(ef.a, {
                appId: p.connector_id
            }), f[15] = p.connector_id, f[16] = o) : o = f[16];
            let x = p.medical_file_reference?.source_label ?? p.name;
            return f[17] !== A || f[18] !== p.name || f[19] !== o || f[20] !== x ? (s = (0, n.jsx)(k.a, {
                ariaLabel: p.name,
                disabled: A,
                icon: o,
                label: x,
                variant: "file",
                testId: "chatgpt-private-source-citation",
                onClick: eh
            }), f[17] = A, f[18] = p.name, f[19] = o, f[20] = x, f[21] = s) : s = f[21], f[22] !== A || f[23] !== b || f[24] !== p.connector_id || f[25] !== i || f[26] !== r || f[27] !== s ? (d = (0, n.jsx)(eu.a, {
                disabled: A,
                openOnClick: !0,
                closeOnTriggerClick: !1,
                keepOpen: b,
                followUp: i,
                metadata: r,
                sourceAppId: p.connector_id,
                children: s
            }), f[22] = A, f[23] = b, f[24] = p.connector_id, f[25] = i, f[26] = r, f[27] = s, f[28] = d) : d = f[28], d
        }

        function eh(e) {
            return e.currentTarget.focus()
        }
        var eg = i("iKA6");
        let em = (0, c.q)(D.a, (e, t) => {
            let {
                conversationId: i,
                messageId: n,
                target: a
            } = e, {
                scope: l
            } = t;
            return {
                queryKey: ["latex-card-workspace-file", i, n, a],
                staleTime: 0,
                retry: !1,
                queryFn: async () => {
                    if (null != a) {
                        let e = await (0, b.b)(l, i, a);
                        if (null != e && "tex" === (0, E.c)(e.path)) return {
                            file: e,
                            originalSource: !1
                        };
                        let t = await (0, b.a)(l, i, n, a);
                        return null == t ? null : {
                            file: t,
                            originalSource: !0
                        }
                    }
                    return null
                }
            }
        });

        function eb(e) {
            let t, i, l, r = (0, a.c)(17);
            r[0] !== e.reference ? (t = eg.a.safeParse(e.reference), r[0] = e.reference, r[1] = t) : t = r[1];
            let o = t;
            if (o.success) {
                let e;
                return r[2] !== o.data ? (e = (0, n.jsx)(e_, {
                    source: o.data
                }, o.data.id), r[2] = o.data, r[3] = e) : e = r[3], e
            }
            if ("library_folder" === e.reference.type || (0, ea.c)(e.reference)) {
                let t;
                return r[4] !== e.reference ? (t = (0, n.jsx)(eo, {
                    reference: e.reference
                }), r[4] = e.reference, r[5] = t) : t = r[5], t
            }
            if ("file_navlist" === e.reference.type) {
                let t;
                return r[6] !== e ? (t = (0, n.jsx)(eA, {
                    ...e
                }), r[6] = e, r[7] = t) : t = r[7], t
            }
            let s = "template" === e.presentation ? "auto" : e.presentation;
            r[8] !== e || r[9] !== s ? (i = (0, n.jsx)(ev, {
                ...e,
                presentation: s
            }), r[8] = e, r[9] = s, r[10] = i) : i = r[10];
            let c = i;
            if ("file" === e.reference.type && (null == e.presentation || "auto" === e.presentation) && null == (0, er.b)(e.reference.sandbox_path) && !(0, er.b)(e.reference.link_markdown)?.includes("sandbox:")) {
                let e;
                r[11] !== c ? (e = (0, n.jsx)(eT, {
                    children: c
                }), r[11] = c, r[12] = e) : e = r[12], c = e
            }
            let u = "template" === e.presentation;
            return r[13] !== c || r[14] !== e.reference || r[15] !== u ? (l = (0, n.jsx)(_.a, {
                reference: e.reference,
                fallback: c,
                isTemplate: u
            }), r[13] = c, r[14] = e.reference, r[15] = u, r[16] = l) : l = r[16], l
        }

        function eT(e) {
            let {
                children: t
            } = e, i = (0, q.d)(), n = (0, c.x)(Q.T, i?.conversationId ?? null);
            return null == n || (0, K.a)(n) ? t : null
        }

        function ev(e) {
            var t, i, _, b;
            let K, eo, es, ec, eu, ed, ef, ep, e_, eh, eg, eb = (0, a.c)(49),
                {
                    children: eT,
                    contentReferenceIndex: ev,
                    fileNavigationIndex: eA,
                    presentation: eC,
                    reference: ex,
                    showSaveAs: ew
                } = e,
                eN = void 0 === eC ? "auto" : eC,
                eE = (0, c.y)(D.a),
                eO = (0, f.a)(),
                eR = (0, q.d)();
            eb[0] !== ev || eb[1] !== eR ? (K = (0, q.c)(eR, ev)?.messageId ?? eR?.messageId, eb[0] = ev, eb[1] = eR, eb[2] = K) : K = eb[2];
            let ej = K,
                ek = (0, u.useContext)(m.a),
                eP = "restricted" === (0, u.useContext)(M.a),
                [eM, eF] = (0, u.useState)(),
                eS = (0, u.useRef)(null),
                eG = null != eM,
                eL = ek?.accountId ?? null,
                eW = ek?.userId ?? null;
            eb[3] !== ex.cloud_doc_url || eb[4] !== ex.codex_file_citation_authoritative || eb[5] !== eP || eb[6] !== eR?.shouldBlockExternalEgress ? (eo = eR?.shouldBlockExternalEgress !== !1 || eP || !0 !== ex.codex_file_citation_authoritative ? null : (0, er.b)(ex.cloud_doc_url), eb[3] = ex.cloud_doc_url, eb[4] = ex.codex_file_citation_authoritative, eb[5] = eP, eb[6] = eR?.shouldBlockExternalEgress, eb[7] = eo) : eo = eb[7], eb[8] !== eL || eb[9] !== eW || eb[10] !== eo ? (es = {
                accountId: eL,
                userId: eW,
                url: eo
            }, eb[8] = eL, eb[9] = eW, eb[10] = eo, eb[11] = es) : es = eb[11];
            let {
                data: eB
            } = (0, c.x)(z.a, es), eD = eB ?? (0, ea.a)(ex), eH = "library_folder" === ex.source_type, eU = (0, $.b)(ex, {
                fileName: eD ?? void 0,
                messageId: ej
            }), e$ = eR?.conversationId, ez = (0, ee.a)(eE.value.pathname)?.params.sharedConversationId, eK = null == e$ ? null : eE.get(Q._, e$);
            null != ez && ez === e$ && (eK = ez);
            let eQ = eE.get(et.f, ek)?.id,
                eq = (0, $.e)(ex),
                eX = null != eU && eR?.shouldBlockExternalEgress === !0,
                eV = null != eU && null != eD && !eX && (0, R.a)({
                    fileName: "mounted-library" === eU.type ? eU.sourceFileName ?? eD : eD,
                    mimeType: "mounted-library" === eU.type ? eU.mimeType ?? eq : eq,
                    mountedLibraryFileId: "mounted-library" === eU.type ? eU.mountedLibraryFileId : void 0
                }),
                eY = null == eD || eU?.type === "mounted-library" ? void 0 : (0, Y.a)(eD),
                eJ = null != eY || eU?.type === "mounted-library" || null != eD && (0, U.a)(eD, eq),
                eZ = null != eU && (!eV && "mounted-library" === eU.type && null == eK && null == eQ || (0, Z.canOpenChatGptFilePreview)({
                    browserPreview: eJ
                })),
                e0 = !eX && (eV || eZ),
                e1 = B.a?.latex != null && "artifact-row" === eN && null != eD && "tex" === (0, E.c)(eD) && e0 && eR?.isReadOnly !== !0 && null == eK && null == eQ,
                {
                    data: e2
                } = (0, c.x)(em, {
                    conversationId: e$,
                    messageId: eR?.messageId,
                    target: eU
                }, {
                    enabled: e1
                }),
                e3 = e1 && null != e2,
                e4 = (void 0 === ew || ew) && eV && (0, Z.canSaveChatGptFile)(),
                e6 = (0, ei.a)(ex),
                e5 = {
                    fileName: eD ?? void 0,
                    mimeType: (0, $.c)(ex) ?? (eU?.type === "mounted-library" ? eU.mimeType ?? void 0 : void 0),
                    mountedLibraryFileId: eU?.type === "mounted-library" ? eU.mountedLibraryFileId : void 0,
                    sourceMimeType: (0, $.d)(ex),
                    sourceUrl: e6 ?? void 0
                },
                e8 = "library_folder" === ex.source_type ? (0, ea.b)(ex) : e6,
                e7 = null != e8 && eR?.shouldBlockExternalEgress === !0,
                e9 = null == eU || null == eD ? null : (0, J.a)(eU, eD, eq),
                te = null == e9 ? null : (0, j.d)(e9)?.sourceUrl,
                tt = eX || e7 ? null : te ?? (eV || e7 ? null : e8),
                ti = eR?.savedContentResponse,
                tn = null;
            null != ti && null != eD && (e0 || null != tt) && eU?.type !== "mounted-library" && ("library_folder" === ex.source_type && null != tt ? tn = (0, r.k)(tt) : null != eU && "libraryFileId" in eU && (tn = (0, r.j)(eU.libraryFileId)));
            let ta = (0, u.useEffectEvent)(() => {
                (0, G.a)(eE, eS, ti, tn)
            });
            eb[12] !== ta ? (ec = () => {
                ta()
            }, eb[12] = ta, eb[13] = ec) : ec = eb[13];
            let tl = tn?.id,
                tr = tn?.kind,
                to = ti?.conversationId,
                ts = ti?.responseId,
                tc = ti?.savedContentBackend;
            if (eb[14] !== tr || eb[15] !== to || eb[16] !== ts || eb[17] !== tc || eb[18] !== tl ? (eu = [tl, tr, to, ts, tc], eb[14] = tr, eb[15] = to, eb[16] = ts, eb[17] = tc, eb[18] = tl, eb[19] = eu) : eu = eb[19], (0, u.useEffect)(ec, eu), null == eD) {
                let e;
                return eb[20] !== ex ? (e = (0, n.jsx)(en.a, {
                    reference: ex
                }), eb[20] = ex, eb[21] = e) : e = eb[21], e
            }
            let tu = () => {
                    (0, G.a)(eE, eS, ti, tn, !0)
                },
                td = (e, t, i) => {
                    if (eG || null == eU) return;
                    "opening" === e && tu();
                    let a = (0, h.a)(eD);
                    if ("saving" === e && null != e$ && null == eK && null == eQ && ("pptx" === a || "xlsx" === a || "csv" === a || "tsv" === a)) {
                        let e = (0, g.b)({
                            artifactType: "pptx" === a ? "slides" : "spreadsheet",
                            importKind: a,
                            threadId: e$,
                            originatingTurn: eR?.turnId == null ? void 0 : {
                                turnId: eR.turnId,
                                inputMessageId: null,
                                messageId: ej ?? null
                            }
                        }, "download-url" === eU.type ? void 0 : {
                            conversationId: e$,
                            byteSource: "chatgpt",
                            target: eU
                        });
                        null != e && (0, g.c)(eE, {
                            ...e,
                            surface: "output-card"
                        }, "download", {
                            format: a
                        })
                    }
                    "saving" === e && null != e$ && null != a && (0, V.b)(eE, {
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD",
                        importKind: a,
                        isEditing: !1,
                        source: {
                            conversationId: e$,
                            byteSource: "chatgpt",
                            sharedConversationId: eK,
                            artifactInteractionExcluded: null != eQ,
                            target: eU
                        },
                        originatingTurn: eR?.turnId == null ? void 0 : {
                            turnId: eR.turnId,
                            inputMessageId: null,
                            messageId: ej ?? null
                        }
                    }), eF(e);
                    let l = !0,
                        r = () => {
                            l && (l = !1, eF(void 0))
                        },
                        o = {
                            conversationId: eE.get(Q.j, e$ ?? null) ?? e$,
                            fileName: eD,
                            gizmoId: null == e$ ? null : eE.get(Q.T, e$),
                            sharedConversationId: eK,
                            mimeType: eq,
                            postId: eQ,
                            target: eU
                        };
                    ("saving" === e ? (0, Z.saveChatGptFile)(eE, o) : (0, Z.openChatGptFile)(eE, {
                        ...o,
                        messageId: (0, q.c)(eR, ev)?.messageId,
                        connectedFileIntent: "open",
                        interaction: t,
                        isAccessBlocked: e => (0, X.j)(e, e$),
                        browserPreview: eJ,
                        conversationViewerUrl: eY,
                        onClose: null == i ? void 0 : () => {
                            r(), i()
                        },
                        downloadFallback: eV && !eZ,
                        tabKey: `${eR?.messageId??"message"}:${String(ev)}:${eD}${null==eA?"":`:${String(eA)}`}`
                    })).catch(t => {
                        "opening" === e && l && null != i && ((0, d.flushSync)(r), i()), H.a.warning("ChatGPT content reference file action failed", {
                            safe: {},
                            sensitive: {
                                error: t
                            }
                        }), eE.get(N.f).danger((0, n.jsx)(p.a, {
                            id: "file-tile.download-failed",
                            defaultMessage: "Failed to download file. Please try again later."
                        }), {
                            errorAnalytics: {
                                toastId: "saving" === e ? "file_download_failed" : "unknown"
                            }
                        })
                    }).finally(r)
                },
                tf = e => {
                    e0 && (e.preventDefault(), td("opening", e))
                };
            if ("artifact-row" === eN && eV) {
                let e;
                eb[22] !== eO ? (e = eO.formatMessage({
                    id: "chatgpt.artifacts.resource_row.download_file.label",
                    defaultMessage: "Download file"
                }), eb[22] = eO, eb[23] = e) : e = eb[23], ed = e
            } else e4 && (ed = eO.formatMessage({
                id: "chatgpt.contentReferences.file.saveAs.ariaLabel",
                defaultMessage: "Save {fileName} as…"
            }, {
                fileName: eD
            }));
            let tp = null;
            if (null != ed && (tp = "artifact-row" === eN ? (0, n.jsx)(x, {
                    label: ed,
                    disabled: eG,
                    loading: "saving" === eM,
                    onClick: e => {
                        e.stopPropagation(), td("saving")
                    }
                }) : (0, n.jsx)(o.a, {
                    content: ed,
                    children: (0, n.jsx)(v.a, {
                        "aria-label": ed,
                        color: "ghost",
                        disabled: eG,
                        loading: "saving" === eM,
                        radius: "default",
                        size: "toolbar",
                        uniform: !0,
                        onClick: e => {
                            e.stopPropagation(), td("saving")
                        },
                        children: "saving" !== eM && (0, n.jsx)(A.a, {
                            "aria-hidden": !0,
                            className: "icon-sm"
                        })
                    })
                })), e0 && null != e9 ? ef = eG ? eO.formatMessage({
                    id: "chatgpt.contentReferences.file.openingConnectedFile.ariaLabel",
                    defaultMessage: "Opening {fileName}"
                }, {
                    fileName: eD
                }) : eO.formatMessage({
                    id: "chatgpt.contentReferences.file.openConnectedFile.ariaLabel",
                    defaultMessage: "Open {fileName}"
                }, {
                    fileName: eD
                }) : e0 ? ef = eZ && eG ? eO.formatMessage({
                    id: "chatgpt.contentReferences.file.openingPreview.ariaLabel",
                    defaultMessage: "Opening preview of {fileName}"
                }, {
                    fileName: eD
                }) : eZ ? eO.formatMessage({
                    id: "chatgpt.contentReferences.file.openPreview.ariaLabel",
                    defaultMessage: "Open preview of {fileName}"
                }, {
                    fileName: eD
                }) : eG ? eO.formatMessage({
                    id: "chatgpt.contentReferences.file.downloading.ariaLabel",
                    defaultMessage: "Downloading {fileName}"
                }, {
                    fileName: eD
                }) : eO.formatMessage({
                    id: "chatgpt.contentReferences.file.download.ariaLabel",
                    defaultMessage: "Download {fileName}"
                }, {
                    fileName: eD
                }) : eX && (ef = eZ ? eO.formatMessage({
                    id: "chatgpt.contentReferences.file.previewBlocked.ariaLabel",
                    defaultMessage: "Preview of {fileName} unavailable in lockdown mode"
                }, {
                    fileName: eD
                }) : eO.formatMessage({
                    id: "chatgpt.contentReferences.file.downloadBlocked.ariaLabel",
                    defaultMessage: "Download {fileName} unavailable in lockdown mode"
                }, {
                    fileName: eD
                })), "artifact-row" !== eN && "file-tile" !== eN) {
                let e = !0 !== ex.codex_file_citation_authoritative && "my_files" === (t = ex).source && null != (0, er.b)(t.library_file_id) && !eI(t),
                    a = !0 !== ex.codex_file_citation_authoritative && null == eT && !e && (eI(ex) || null != e9 || eR?.conversationOrigin === "tpp" && null != (0, er.b)(ex.library_file_id)),
                    r = null == eT ? (0, er.b)((0, er.d)(ex.codex_file_citation_attributes)?.label) ?? (0, er.b)((0, er.d)(ex.codex_file_citation_attributes)?.title) ?? eD : (0, P.a)(eT);
                e ? (i = ex, _ = eD, r = (0, l.c)({
                    fileName: _,
                    matchedText: (0, er.b)(i.matched_text) ?? void 0
                })) : a && (r = (0, l.b)(function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch {
                        return e
                    }
                }(eD)));
                let c = (0, n.jsx)("span", {
                    style: l.h,
                    children: (0, n.jsx)(O.a, {
                        ...e5,
                        "aria-hidden": !0,
                        size: 16,
                        style: l.i
                    })
                });
                if (a) {
                    let e, t, i = e => {
                            if (!e0) return;
                            e.preventDefault();
                            let t = e.currentTarget;
                            td(eV && (0, F.a)(e) ? "saving" : "opening", e, () => {
                                requestAnimationFrame(() => {
                                    t.isConnected && document.activeElement === document.body && t.focus({
                                        preventScroll: !0
                                    })
                                })
                            })
                        },
                        a = {
                            ref: e => {
                                if (null != e) return (0, T.b)(e, {
                                    text: [eD, r, tt, ...(0, L.a)(eO, [ex]).sources.flatMap(ey)].join(" "),
                                    highlight: (0, s.e)() ? "block" : "auto"
                                })
                            },
                            ariaLabel: ef ?? eD,
                            icon: c,
                            isTerminalInline: !0,
                            label: r,
                            testId: "chatgpt-library-file-citation"
                        };
                    e = null != tt ? (0, n.jsx)(k.a, {
                        ...a,
                        href: tt,
                        onActivate: tu,
                        requiresConfirmation: eP,
                        showHoverActions: null != te,
                        tooltipContent: eD,
                        variant: "file",
                        onUnmodifiedClick: i
                    }) : e0 ? (0, n.jsx)(k.a, {
                        ...a,
                        disabled: eG,
                        variant: "file",
                        onClick: i
                    }) : (0, n.jsx)(k.a, {
                        ...a,
                        disabled: !0,
                        variant: "file",
                        onClick: () => td("opening")
                    });
                    let l = null != tt ? e : (0, n.jsx)(o.a, {
                        content: eD,
                        children: (0, n.jsx)("span", {
                            className: "inline-flex",
                            children: e
                        })
                    });
                    return eb[24] !== l ? (t = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: l
                    }), eb[24] = l, eb[25] = t) : t = eb[25], t
                }
                if (!0 === ex.codex_file_citation_authoritative || null != eT || e || eR?.conversationOrigin === "tpp") {
                    let e, t = null != tt ? (0, n.jsxs)(el.a, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-(color:--link-primary-text-color-hover) hover:decoration-inherit",
                        href: tt,
                        onActivate: tu,
                        "aria-busy": eG,
                        "aria-label": ef ?? eD,
                        tooltipContent: eD,
                        showHoverActions: null != te,
                        onUnmodifiedClick: tf,
                        children: [c, eT ?? r]
                    }) : (0, n.jsxs)(S.c, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-(color:--link-primary-text-color-hover) hover:decoration-inherit",
                        reference: {
                            path: eD
                        },
                        ariaBusy: eG,
                        ariaLabel: ef ?? eD,
                        cwd: null,
                        disabled: eG || !e0,
                        enableWorkspaceFileActions: !1,
                        hostId: eR?.hostId,
                        label: r,
                        tooltipText: eD,
                        onOpen: (e, t) => {
                            e0 && (t.preventDefault(), td(eV && (0, F.a)(t) ? "saving" : "opening", t))
                        },
                        children: [c, eT ?? r]
                    });
                    return eb[26] !== t ? (e = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: t
                    }), eb[26] = t, eb[27] = e) : e = eb[27], e
                }
            }
            let t_ = (0, l.f)({
                    fileName: eD,
                    mimeType: (b = ex, (0, er.b)(b.source_mime_type) ?? (0, er.b)(b.mounted_library_mime_type) ?? (0, er.b)(b.mime_type) ?? void 0),
                    sourceUrl: e6 ?? void 0
                }),
                th = (0, E.c)(eD)?.toUpperCase(),
                tg = null;
            if (null != tt ? tg = (0, n.jsx)(el.a, {
                    "data-testid": eH ? "chatgpt-library-folder-navigation" : void 0,
                    className: "artifact-row" === eN ? "absolute inset-0 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset" : "absolute inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    href: tt,
                    onActivate: tu,
                    "aria-busy": eG,
                    tooltipContent: eD,
                    showHoverActions: null != te,
                    onUnmodifiedClick: tf,
                    children: (0, n.jsx)("span", {
                        className: "sr-only",
                        children: eD
                    })
                }) : e0 ? tg = (0, n.jsx)("button", {
                    "aria-busy": eG,
                    "aria-label": ef,
                    className: "artifact-row" === eN ? "absolute inset-0 cursor-interaction bg-transparent hover:bg-text/5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait" : "absolute inset-0 cursor-interaction bg-transparent hover:bg-background-secondary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait",
                    disabled: eG,
                    onClick: e => td(eV && (0, F.a)(e) ? "saving" : "opening", e),
                    type: "button"
                }) : (eX || e7) && (tg = (0, n.jsx)("button", {
                    "aria-disabled": !0,
                    "aria-label": ef ?? eD,
                    className: "absolute inset-0 bg-transparent",
                    disabled: !0,
                    type: "button"
                })), eG) {
                let e;
                eb[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(w.a, {
                    className: "icon-xs shrink-0 text-text/70",
                    "aria-hidden": !0
                }), eb[28] = e) : e = eb[28], ep = e
            } else if (null != tp && "artifact-row" === eN) ep = tp;
            else if (null != tp) {
                let e, t = "pointer-events-auto";
                "file-tile" === eN && (t = "pointer-events-none absolute end-1.5 top-1.5 z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), eb[29] !== tp || eb[30] !== t ? (e = (0, n.jsx)("span", {
                    className: t,
                    children: tp
                }), eb[29] = tp, eb[30] = t, eb[31] = e) : e = eb[31], ep = e
            }
            if (e3) {
                let e, t;
                eb[32] !== e2?.originalSource ? (e = e2?.originalSource ? (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source.description",
                    defaultMessage: "Edits are saved to the original workspace file, not this Library copy"
                }) : void 0, eb[32] = e2?.originalSource, eb[33] = e) : e = eb[33], eb[34] !== e2?.originalSource ? (t = e2?.originalSource ? (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source",
                    defaultMessage: "Open original source"
                }) : (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_latex_editor",
                    defaultMessage: "Open LaTeX editor"
                }), eb[34] = e2?.originalSource, eb[35] = t) : t = eb[35], ep = (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, n.jsx)(o.a, {
                        content: e,
                        children: (0, n.jsx)(v.a, {
                            className: "pointer-events-auto",
                            color: "primary",
                            disabled: eG,
                            size: "toolbar",
                            onClick: () => {
                                e2?.originalSource ? (0, W.openFileSidePanelTab)(eE, e2.file.path, {
                                    hostId: e2.file.hostId
                                }) : td("opening")
                            },
                            children: t
                        })
                    }), ep]
                })
            }
            let tm = th,
                tb = "default";
            "artifact-row" === eN ? (tm = e3 && !e2?.originalSource ? (0, n.jsx)(p.a, {
                id: "chatgpt.artifacts.resource_row.latex_file_type",
                defaultMessage: "LaTeX document · Editable source"
            }) : (0, n.jsx)(C, {
                children: (0, n.jsx)(p.a, {
                    ...(0, l.d)(t_.category, t_.iconKey)
                })
            }), tb = e3 ? "default" : "artifact-list") : "file-tile" === eN && (tm = eH ? (0, n.jsx)(p.a, {
                id: "chatgpt.file_navigation.folder.label",
                defaultMessage: "Folder"
            }) : function(e) {
                let t = e.source_type ?? e.source;
                if ("my_files" !== t && "google_drive" !== t) return null;
                let i = (0, er.b)(e.description) ?? (0, er.b)(e.snippet);
                return i?.startsWith("/") === !0 ? i : null
            }(ex) ?? (0, n.jsx)(p.a, {
                ...(0, l.d)(t_.category, t_.iconKey)
            }), tb = "file-tile");
            let tT = "file-tile" === eN ? (0, n.jsx)("span", {
                className: "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl",
                children: eH ? (0, n.jsx)(y.Bd, {
                    "aria-hidden": !0
                }) : (0, n.jsx)(O.a, {
                    ...e5,
                    "aria-hidden": !0,
                    size: 24
                })
            }) : (0, n.jsx)(O.a, {
                ...e5,
                "aria-hidden": !0,
                className: "shrink-0",
                size: 24
            });
            eb[36] !== eD || eb[37] !== tb || eb[38] !== tm || eb[39] !== tT || eb[40] !== ep ? (e_ = (0, n.jsx)(I.h, {
                className: "pointer-events-none relative z-10",
                icon: tT,
                subtitle: tm,
                title: eD,
                titleTooltip: eD,
                trailing: ep,
                variant: tb
            }), eb[36] = eD, eb[37] = tb, eb[38] = tm, eb[39] = tT, eb[40] = ep, eb[41] = e_) : e_ = eb[41], eb[42] !== tg || eb[43] !== e_ ? (eh = (0, n.jsxs)("span", {
                className: "group/resource-row relative",
                children: [tg, e_]
            }), eb[42] = tg, eb[43] = e_, eb[44] = eh) : eh = eb[44];
            let tv = eh;
            if ("artifact-row" === eN) return tv;
            if ("file-tile" === eN) {
                let e;
                return eb[45] !== tv ? (e = (0, n.jsx)(I.a, {
                    as: "span",
                    variant: "file-tile",
                    children: tv
                }), eb[45] = tv, eb[46] = e) : e = eb[46], e
            }
            return eb[47] !== tv ? (eg = (0, n.jsx)(I.a, {
                as: "span",
                className: "mt-3",
                children: tv
            }), eb[47] = tv, eb[48] = eg) : eg = eb[48], eg
        }

        function ey(e) {
            return [e.displayLabel, e.sourceName]
        }

        function eI(e) {
            if ("file_citation" === (0, er.b)((0, er.d)(e.fff_metadata)?.file_reference_type)) return !0;
            let t = (0, er.b)(e.matched_text)?.trim().toLowerCase();
            return t?.startsWith("filecite") === !0 || t?.startsWith("[citefilecite") === !0
        }

        function eA(e) {
            let t, i, l, r, o, s = (0, a.c)(15),
                {
                    contentReferenceIndex: c,
                    reference: u
                } = e;
            if (s[0] !== u.items ? (t = Array.isArray(u.items) ? u.items : [], s[0] = u.items, s[1] = t) : t = s[1], s[2] !== c || s[3] !== u || s[4] !== t) {
                r = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a = t.flatMap(eC);
                    if (0 === a.length) {
                        let e;
                        s[8] !== u ? (e = (0, n.jsx)(en.c, {
                            reference: u
                        }), s[8] = u, s[9] = e) : e = s[9], r = e;
                        break e
                    }
                    i = "not-prose m-0 mt-6 flex list-none flex-wrap gap-2 p-0",
                    s[10] !== c ? (e = (e, t) => (0, n.jsx)("li", {
                        className: "m-0 p-0",
                        children: (0, n.jsx)(eb, {
                            contentReferenceIndex: c,
                            fileNavigationIndex: t,
                            presentation: "file-tile",
                            reference: e
                        })
                    }, `${e.name}:${String(t)}`), s[10] = c, s[11] = e) : e = s[11],
                    l = a.map(e)
                }
                s[2] = c, s[3] = u, s[4] = t, s[5] = i, s[6] = l, s[7] = r
            } else i = s[5], l = s[6], r = s[7];
            return r !== Symbol.for("react.early_return_sentinel") ? r : (s[12] !== i || s[13] !== l ? (o = (0, n.jsx)("ul", {
                className: i,
                children: l
            }), s[12] = i, s[13] = l, s[14] = o) : o = s[14], o)
        }

        function eC(e) {
            let t = (0, er.d)(e),
                i = null == t ? null : (0, ea.a)(t);
            return null == t || null == i ? [] : [{
                ...t,
                name: i,
                type: "file"
            }]
        }
    }),
    PO1G: (function(e, t, i) {
        var n = i("ABep"),
            a = i("QosV"),
            l = i("on57"),
            r = i("KDax");
        i.d(t, {}, {
            a: function(e) {
                let t, i, o, s, c = (0, a.c)(8);
                return c[0] !== e ? ({
                    className: t,
                    ...i
                } = e, c[0] = e, c[1] = t, c[2] = i) : (t = c[1], i = c[2]), c[3] !== t ? (o = (0, l.b)("cursor-interaction", t), c[3] = t, c[4] = o) : o = c[4], c[5] !== i || c[6] !== o ? (s = (0, n.jsx)(r.a, {
                    ...i,
                    className: o,
                    initiator: "markdown_link_click"
                }), c[5] = i, c[6] = o, c[7] = s) : s = c[7], s
            }
        })
    }),
    iKA6: (function(e, t, i) {
        var n = i("ASxG");
        let a = n.object({
            type: n.literal("file"),
            id: n.string().min(1),
            name: n.string().min(1),
            connector_id: n.string().min(1),
            start_idx: n.number().optional(),
            cloud_doc_url: n.string().nullish(),
            extra: n.object({
                cloud_doc_url: n.string().nullish()
            }).nullish(),
            snippet: n.string().nullish(),
            medical_file_reference: n.object({
                source_label: n.string().min(1),
                journal_name: n.string().nullish(),
                authors_display: n.string().nullish(),
                publication_year: n.string().nullish(),
                source_url: n.string().nullish(),
                journal_homepage_url: n.string().nullish(),
                source_icon_url: n.string().nullish(),
                doi: n.string().nullish()
            }),
            drug_file_reference: n.unknown().nullish()
        }).refine(e => !e.cloud_doc_url && !e.extra?.cloud_doc_url && !e.medical_file_reference?.journal_name && !e.medical_file_reference?.authors_display && !e.medical_file_reference?.publication_year && !e.medical_file_reference?.source_url && !e.medical_file_reference?.journal_homepage_url && !e.medical_file_reference?.source_icon_url && !e.medical_file_reference?.doi && null == e.drug_file_reference);
        i.d(t, {}, {
            a: a
        })
    }),
    zamV: (function(e, t, i) {
        var n = i("tFxw"),
            a = i("MVHH"),
            l = i("yGJW"),
            r = i("dQRk"),
            o = i("jAnS");
        let s = {
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

        function c(e, t) {
            let i, {
                action: s,
                importKind: c,
                source: d,
                isEditing: f,
                originatingTurn: p
            } = t;
            if (null == d || f) return;
            let {
                conversationId: _,
                target: h
            } = d;
            if ("chatgpt-thread" !== e.value.routeKind || e.value.conversationId !== _ || null != d.sharedConversationId || !0 === d.artifactInteractionExcluded || null != e.get(r.$, _)) return;
            if ("pptx" === c) i = "CHATGPT_WEB_ARTIFACT_KIND_PRESENTATION";
            else {
                if ("xlsx" !== c && "csv" !== c && "tsv" !== c) return;
                i = "CHATGPT_WEB_ARTIFACT_KIND_SPREADSHEET"
            }
            let g = e.get(r.y, _),
                m = "tpp" === g || "flora" === g;
            if (!m || "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW" !== s) try {
                let t = "fileId" in h ? h.fileId : void 0,
                    r = "libraryFileId" in h ? h.libraryFileId : void 0,
                    c = (0, n.a)("mounted-library" === h.type ? h.mountedLibraryFileId : void 0, r, t),
                    d = null != c && (null != (0, n.d)(c) || (0, n.j)(c)) ? c : void 0;
                (0, l.a)(e, a.k, {
                    action: s,
                    artifactKind: i,
                    conversationId: _,
                    fileId: u(t),
                    libraryFileId: u(r),
                    mountedLibraryFileId: d,
                    messageId: p?.messageId ?? ("sandbox" === h.type ? h.messageId : void 0),
                    inputMessageId: p?.inputMessageId ?? void 0,
                    turnExchangeId: p?.turnId,
                    interactionMode: "CHATGPT_WEB_ARTIFACT_INTERACTION_MODE_VIEW_ONLY",
                    isTemporaryChat: (0, o.i)(e.value.search ?? ""),
                    productExperience: m ? "CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_WORK" : "CHATGPT_WEB_ARTIFACT_INTERACTION_PRODUCT_EXPERIENCE_CHAT"
                })
            } catch {}
        }

        function u(e) {
            return e?.replace(/^(?:file-library:)+/u, "").startsWith("external-") ? void 0 : e || void 0
        }
        i.d(t, {}, {
            a: function(e, t) {
                return {
                    onPreviewOpened: () => c(e, {
                        ...t,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW"
                    }),
                    onDownload: () => c(e, {
                        ...t,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD"
                    }),
                    onClose: () => c(e, {
                        ...t,
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_CLOSE_PREVIEW"
                    }),
                    onInteractionAttempt: i => {
                        c(e, {
                            ...t,
                            action: s[i]
                        })
                    }
                }
            },
            b: c
        })
    }),
    s60H: (function(e, t, i) {
        i("QdUF"), i("M8lA"), i("bWX0"), i.d(t, {}, {
            a: function(e) {}
        })
    }),
    SQeA: (function(e, t, i) {
        var n = i("ASxG"),
            a = i("w5lF"),
            l = i("GDNt"),
            r = i("Kwur");
        i.d(t, {}, {
            a: async function(e, t) {
                try {
                    let {
                        post: i
                    } = await r.Request.safeGet("/share/post/resolve/{post_id}", {
                        parameters: {
                            path: {
                                post_id: encodeURIComponent(e)
                            }
                        },
                        signal: t
                    });
                    return {
                        status: "ready",
                        post: i
                    }
                } catch (i) {
                    if (t?.throwIfAborted(), !(i instanceof l.a)) throw i;
                    let e = i.diagnosticError;
                    if (e instanceof a.c) {
                        let t = n.object({
                            message: n.string().optional(),
                            reason: n.string().optional(),
                            code: n.string().optional()
                        }).safeParse(e.detail).data;
                        if ("no_permission" === e.jsonError || 403 === i.status && t?.message === "no_permission") return {
                            status: "unavailable",
                            reason: "workspace"
                        };
                        if (t?.reason === "deleted" || t?.code === "shared_post_deleted") return {
                            status: "unavailable",
                            reason: "deleted"
                        }
                    }
                    if (i.status >= 500) throw i;
                    return {
                        status: "unavailable",
                        reason: "not_found"
                    }
                }
            }
        })
    }),
    GigQ: (function(e, t, i) {
        i.d(t, {}, {
            a: function(e, t) {
                let i, n = e.attachments[0];
                if (n?.kind === "media_generation") {
                    if (1 !== e.attachments.length || n.output_blocked || null == n.asset_pointer || null == n.messages) return null;
                    let t = n.asset_pointer.split("?")[0],
                        a = n.messages;
                    if (!a.some((e, i) => "assistant" === e.author.role && "string" == typeof e.recipient && a.slice(i + 1).some(i => "tool" === i.author.role && i.author.name === e.recipient && "multimodal_text" === i.content.content_type && i.content.parts.some(e => "string" != typeof e && "content_type" in e && "image_asset_pointer" === e.content_type && e.asset_pointer.split("?")[0] === t)))) return null;
                    i = a
                } else {
                    if (!(e.attachments.length > 0 && e.attachments.every(e => ("message_slice" === e.kind || "deep_research" === e.kind) && e.messages.length > 0))) return null;
                    i = e.attachments.flatMap(e => "message_slice" === e.kind || "deep_research" === e.kind ? e.messages : [])
                }
                let a = {
                        id: "y-root",
                        message: null,
                        parent: null,
                        children: []
                    },
                    l = [a],
                    r = new Set([a.id]);
                for (let e of i) {
                    if (!e.id || r.has(e.id)) return null;
                    r.add(e.id), a.children = [e.id];
                    let t = {
                        id: e.id,
                        message: e,
                        parent: a.id,
                        children: []
                    };
                    l.push(t), a = t
                }
                return {
                    conversation_id: t,
                    current_node: a.id,
                    mapping: Object.fromEntries(l.map(e => [e.id, e])),
                    linear_conversation: l,
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
    uQqo: (function(e, t, i) {
        var n = i("ccwJ"),
            a = i("XPCU");
        i.d(t, {}, {
            a: function(e, t) {
                let i = new Set(e.attachments.flatMap(e => "message_slice" === e.kind || "deep_research" === e.kind ? e.messages.flatMap(e => (0, n.c)(e).map(e => e.src)) : [])),
                    l = e.attachments.flatMap(e => "media_generation" !== e.kind || "image_gen" !== e.generation_type || e.output_blocked ? [] : [e]);
                return t.flatMap(e => {
                    if (null != e.src && i.has(e.src)) return [e];
                    let t = l.find(t => t.id === e.id) ?? l.find(t => null != t.asset_pointer && t.asset_pointer.split("?")[0] === e.src?.split("?")[0]);
                    if (null == t) return [];
                    let n = (0, a.a)(t.url);
                    return null == n ? [] : [{
                        ...e,
                        src: n,
                        previewSrc: n,
                        height: e.height ?? t.height,
                        width: e.width ?? t.width
                    }]
                })
            },
            b: function(e) {
                return e.attachments.flatMap(e => {
                    if ("media_generation" !== e.kind || "image_gen" !== e.generation_type || e.output_blocked) return [];
                    let t = e.asset_pointer ?? `${e.id.startsWith("file_")?"sediment":"file-service"}://${e.id}`,
                        i = (e.messages ?? []).flatMap(n.c).find(e => e.src.split("?")[0] === t.split("?")[0]);
                    return [{
                        type: "generated-image",
                        isAnimated: i?.isAnimated,
                        spritesheet: i?.spritesheet,
                        id: e.id,
                        chatGptGenerationId: e.generation_id,
                        chatGptImageMetadata: i?.chatGptImageMetadata,
                        chatGptMessageId: e.message_id ?? void 0,
                        src: t,
                        width: e.width,
                        height: e.height,
                        status: "completed"
                    }]
                })
            },
            c: function(e) {
                return e.attachments.flatMap(t => {
                    if ("error" !== t.kind || "image_share" !== t.underlying_kind) return [];
                    let i = e.web_image_attachments?.find(e => e.id === t.id);
                    return null == i ? [] : [i]
                })
            }
        })
    }),
    XPCU: (function(e, t, i) {
        var n = i("Kwur");
        i.d(t, {}, {
            a: function(e) {
                if (null == e || 0 === e.trim().length) return null;
                try {
                    return new URL((0, n.b)(e) ?? e, window.location.href).href
                } catch {
                    return null
                }
            }
        })
    }),
    j0nn: (function(e, t, i) {
        var n = i("lSdY"),
            a = i("mQnY"),
            l = i("Fjze"),
            r = i("Q840"),
            o = i("rEML"),
            s = i("yGJW"),
            c = i("tSEg"),
            u = i("yMDx"),
            d = i("dQRk"),
            f = i("rfhJ"),
            p = i("SQeA"),
            _ = i("GigQ"),
            h = i("uQqo"),
            g = i("XW2n");

        function m(e) {
            return e.attachments[0]?.kind !== "prompt_share"
        }
        let b = (0, r.q)(c.a, (e, t) => {
                let {
                    scope: i
                } = t, n = (0, o.J)("/s/:postId", i.value.pathname)?.params.postId;
                return {
                    enabled: null != n && !n.startsWith("cx_") && null != e && !e.isLoading,
                    queryKey: ["chatgpt-shared-post", n, e?.userId, e?.accountId],
                    queryFn: e => {
                        let {
                            signal: t
                        } = e;
                        return null == n ? Promise.resolve(null) : (0, p.a)(n, t)
                    },
                    gcTime: 0,
                    staleTime: 0,
                    retry: !1,
                    refetchInterval: e => {
                        let t = e.state.data;
                        return !!(t?.status === "ready" && t.post.attachments.some(e => "message_slice" === e.kind && e.messages.some(e => Object.values((0, u.c)(e.metadata)?.widgets ?? {}).some(e => "string" == typeof e?.poll_id && "published" === e.lifecycle)))) && 5e3
                    }
                }
            }),
            T = (0, r.d)(c.a, (e, t) => {
                let {
                    get: i,
                    scope: n
                } = t;
                if (null == e || e.isLoading || null == (0, o.J)("/s/:postId", n.value.pathname)) return null;
                let {
                    data: a,
                    isError: l
                } = i(b, e);
                return a?.status !== "ready" || l ? null : a.post
            }),
            v = (0, r.d)(c.a, (e, t) => {
                let {
                    auth: i,
                    conversationId: n
                } = e, {
                    get: a
                } = t;
                if (null == i || i.isLoading || null !== i.authMethod) return !1;
                let l = a(T, i),
                    r = a(d.$, n);
                return null != l && r?.kind === "post" && r.forkFromSharedPost && r.post.id === l.id
            }),
            y = (0, r.v)(c.a, e => !1, {
                onMount: (e, t) => {
                    let i = null;
                    return t.watch(a => {
                        let {
                            get: l
                        } = a, {
                            auth: r,
                            conversationId: o
                        } = t.key, s = l(T, r);
                        if (null == s) {
                            let {
                                data: n,
                                isError: a
                            } = l(b, r);
                            null != i && (a || n?.status === "unavailable") && ((0, d.ib)(t, o, i), i = null), e(!1);
                            return
                        }
                        if (i = s.id, null == C(t, s, o)) return void e(!1);
                        let c = new Set;
                        for (let e of s.attachments)
                            if ("message_slice" === e.kind)
                                for (let t of e.messages) t.id && ("assistant" === t.author.role || "tool" === t.author.role) && c.add(t.id);
                        if (0 === c.size) return void e(!0);
                        let u = {
                            productExperience: t.key.dotAnswerCardOpen ? n.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS : void 0,
                            messageIds: c
                        };
                        return t.set(g.b, u), e(!0), () => {
                            t.get(g.b) === u && t.set(g.b, null)
                        }
                    })
                }
            }),
            I = (0, r.u)(c.a, []),
            A = (0, r.u)(c.a, () => null);

        function C(e, t, i) {
            let n = (0, _.a)(t, i);
            return null == n ? null : ((0, d.pb)(e, {
                conversation: n,
                conversationId: i,
                post: t
            }), i)
        }
        i.d(t, {}, {
            a: C,
            b: function(e) {
                return null != e && m(e) && (0, h.c)(e).length > 0
            },
            c: m,
            d: function(e, t, i) {
                let n = t.attachments[0]?.kind;
                (0, s.a)(e, a.a, {
                    postId: t.id,
                    attachmentType: n,
                    isAuthenticated: i
                }), (0, s.a)(e, l.b, {
                    actionType: "CHATGPT_SHARED_POST_RECEIVER_ACTION_TYPE_DOWNLOAD_CLICKED",
                    postId: t.id,
                    attachmentKind: n,
                    legacyStatsigEventName: "chatgpt_share_post_download_clicked"
                })
            },
            e: function(e, t, i, n, a, l) {
                let r = t.attachments.find(e => "media_generation" === e.kind && "image_gen" === e.generation_type && (e.id === i.id || null != e.asset_pointer && e.asset_pointer.split("?")[0] === i.src?.split("?")[0]));
                r?.kind === "media_generation" && (0, f.b)(e, {
                    image: {
                        ...i,
                        src: r.asset_pointer ?? null,
                        chatGptMessageId: r.message_id ?? i.chatGptMessageId
                    },
                    conversationId: r.conversation_id,
                    entryPoint: n,
                    downloadScope: a,
                    requestedImageCount: l
                })
            },
            f: T,
            g: y,
            h: v,
            i: I,
            j: b,
            k: A
        })
    }),
    LOXd: (function(e, t, i) {
        var n = i("ASxG"),
            a = i("iKA6"),
            l = i("zSQm");
        let r = n.string().trim().nullish().transform(e => e || void 0),
            o = n.object({
                journal_name: r,
                source_label: r,
                authors_display: r,
                publication_year: r,
                source_url: r,
                journal_homepage_url: r,
                source_icon_url: r,
                doi: r
            }),
            s = n.object({
                id: n.string().trim().min(1),
                title: r,
                name: r,
                snippet: r,
                cloud_doc_url: r,
                extra: n.object({
                    cloud_doc_url: r
                }).nullish(),
                medical_file_reference: o.nullish(),
                drug_file_reference: n.object({
                    title: r,
                    effective_time: r
                }).nullish()
            }),
            c = n.object({
                url: n.string().trim().min(1),
                title: r,
                source_name: r,
                authors: n.array(n.string().catch("")).nullish(),
                tags: n.array(n.string().trim().catch("")).nullish().catch(void 0),
                attribution: r,
                pub_date: n.number().min(-864e10).max(864e10).nullish().catch(void 0),
                snippet: r
            }),
            u = n.object({
                items: n.array(n.object({
                    supporting_websites: n.array(n.unknown()).nullish()
                }).loose())
            });

        function d(e, t) {
            let i = [],
                n = Object.create(null),
                a = new Map,
                l = new Map,
                r = new Map;
            for (let o of t ?? []) {
                let t = [];
                for (let {
                        webMetadata: r,
                        ...s
                    }
                    of f(e, o)) {
                    let e = a.get(s.sourceKey);
                    if (null == e) e = {
                        ...s,
                        number: i.length + 1
                    }, i.push(e), a.set(e.sourceKey, e), null != r && l.set(e.sourceKey, r);
                    else if (null != r) {
                        let t = l.get(e.sourceKey);
                        null != t && (t.title = t.title ?? r.title, t.sourceName = t.sourceName ?? r.sourceName, t.attribution = t.attribution ?? r.attribution, e.title = t.title ?? e.title, e.sourceName = t.sourceName ?? t.attribution ?? h(e.url), e.displayLabel = t.attribution ?? e.sourceName ?? e.title, e.authors = e.authors ?? s.authors, e.dateDisplay = e.dateDisplay ?? s.dateDisplay, e.publicationDateMs = e.publicationDateMs ?? s.publicationDateMs, e.snippet = e.snippet ?? s.snippet, s.tags?.length && (e.tags = [...new Set([...e.tags ?? [], ...s.tags])]))
                    }
                    null != r && null != s.url && (n[s.url] = e.number), t.includes(e) || t.push(e)
                }
                r.set(o, t)
            }
            return {
                sources: i,
                numbersByUrl: n,
                sourcesByReference: r
            }
        }

        function f(e, t) {
            if ("file" === t.type) {
                if (a.a.safeParse(t).success) return [];
                let i = s.safeParse(t);
                if (!i.success) return [];
                let n = i.data,
                    l = n.medical_file_reference,
                    r = n.drug_file_reference;
                if (null == l && null == r) return [];
                let o = n.cloud_doc_url ?? n.extra?.cloud_doc_url ?? l?.source_url ?? l?.journal_homepage_url,
                    c = _(o),
                    u = null != r ? "U.S. National Library of Medicine: DailyMed" : l?.journal_name ?? l?.source_label,
                    d = null != r ? "DailyMed" : l?.source_label ?? u,
                    f = e.formatMessage({
                        id: "clinicalCitation.sourceFallback",
                        defaultMessage: "Source"
                    }),
                    p = n.title ?? n.name ?? r?.title ?? d ?? u ?? h(o) ?? f,
                    m = u ?? h(o) ?? p;
                return [{
                    sourceKey: `file:${n.id.toLowerCase()}`,
                    title: p,
                    displayLabel: d ?? m,
                    sourceName: m,
                    dateDisplay: null != r ? function(e, t) {
                        let i = t?.match(/^(\d{4})-?(\d{2})-?(\d{2})$/);
                        if (null == i) return t;
                        let n = Number(i[1]),
                            a = Number(i[2]),
                            l = Number(i[3]),
                            r = new Date(n, a - 1, l);
                        return r.getFullYear() === n && r.getMonth() === a - 1 && r.getDate() === l ? g(e, r) : t
                    }(e, r.effective_time) : l?.publication_year,
                    authors: l?.authors_display,
                    doi: l?.doi,
                    url: c,
                    iconUrl: _(l?.source_icon_url ?? l?.source_url ?? l?.journal_homepage_url ?? o),
                    snippet: n.snippet
                }]
            }
            if ("webpage" === t.type || "webpage_extended" === t.type) {
                let i = p(e, t);
                return null == i ? [] : [i]
            }
            if ("grouped_webpages" !== t.type || "hidden" === t.style || "loading" === t.status || "error" === t.status) return [];
            let i = u.safeParse(t);
            return i.success ? i.data.items.flatMap(t => [t, ...t.supporting_websites ?? []].flatMap(t => {
                let i = p(e, t);
                return null == i ? [] : [i]
            })) : []
        }

        function p(e, t) {
            let i = c.safeParse(t);
            if (!i.success) return;
            let n = i.data,
                a = _(n.url);
            if (null == a) return;
            let l = n.source_name ?? n.attribution ?? h(a);
            return {
                webMetadata: {
                    title: n.title,
                    sourceName: n.source_name,
                    attribution: n.attribution
                },
                sourceKey: `url:${function(e){let t=e;try{t=new URL(e).toString()}catch{}let i=t.indexOf("?"),n=t.indexOf("#");if(i<0||n>=0&&i>n)return t;let a=n>=0?n:t.length,l=t.slice(i+1,a).split("&"),r=l.filter(e=>{let t=new URLSearchParams(` ? $ {
                    e
                }
                `);return!(t.has("utm_source")||"chatgpt"===t.get("source"))});if(r.length===l.length)return t;let o=r.length>0?` ? $ {
                    r.join("&")
                }
                `:"";return`
                $ {
                    t.slice(0, i)
                }
                $ {
                    o
                }
                $ {
                    t.slice(a)
                }
                `}(a)}`,
                title : n.title ?? a,
                displayLabel: n.attribution ?? l ?? n.title ?? a,
                sourceName: l,
                authors: function(e) {
                    let t = e?.map(e => e.trim()).filter(Boolean);
                    if (t?.length) return 1 === t.length ? t[0] : 2 === t.length ? `${t[0]} & ${t[1]}` : `${t[0]}, et al.`
                }(n.authors),
                publicationDateMs: null == n.pub_date ? void 0 : 1e3 * n.pub_date,
                dateDisplay: null == n.pub_date ? void 0 : g(e, new Date(1e3 * n.pub_date)),
                url: a,
                iconUrl: a,
                snippet: n.snippet,
                tags: null == n.tags ? void 0 : [...new Set(n.tags.filter(Boolean))]
            }
        }

        function _(e) {
            if (!(null == e || /^file:\/\//i.test(e))) {
                try {
                    if ("localhost" === new URL(e).hostname) return
                } catch {}
                return (0, l.a)(e)
            }
        }

        function h(e) {
            if (null != e) try {
                return new URL(e).hostname.replace("www.", "")
            } catch {
                return e
            }
        }

        function g(e, t) {
            return Number.isNaN(t.getTime()) ? void 0 : new Intl.DateTimeFormat(e.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }).format(t)
        }

        function m(e, t) {
            return "number" == typeof e.start_idx && "number" == typeof e.end_idx && "number" == typeof t.start_idx && "number" == typeof t.end_idx && t.start_idx - e.end_idx <= 1
        }
        i.d(t, {}, {
            a: d,
            b: function(e, t, i, n, a) {
                let l = t?.[i];
                if (null == l || "hidden" === l.style || 0 === f(e, l).length) return;
                let r = e => null == n ? a : n[e],
                    o = r(i),
                    s = t?.[i - 1];
                if (null != s && "hidden" !== s.style && null != o && r(i - 1) === o && f(e, s).length > 0 && m(s, l)) return {
                    isLeading: !1,
                    sources: []
                };
                let c = d(e, t),
                    u = new Set,
                    p = l;
                for (let e = i;; e += 1) {
                    for (let e of c.sourcesByReference.get(p) ?? []) u.add(e);
                    let i = t?.[e + 1];
                    if (null == i || "hidden" === i.style || null == o || r(e + 1) !== o || !c.sourcesByReference.get(i)?.length || !m(p, i)) break;
                    p = i
                }
                return {
                    isLeading: !0,
                    sources: [...u]
                }
            }
        })
    })
};