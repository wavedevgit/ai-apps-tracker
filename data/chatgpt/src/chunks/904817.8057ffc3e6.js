export const __rspack_esm_ids = [904817];
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
            l = i("iTtm"),
            a = i("OWtl"),
            r = i("rvFo"),
            o = i("Kwur");
        let s = (0, l.q)(a.a, e => {
            let {
                accountId: t,
                userId: i,
                url: l
            } = e, a = null == l ? null : (0, n.c)(l), s = a?.workspaceDocument == null ? null : `external-gdrive:file:${a.nativeFileId}`;
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
            l = i("zSQm");
        i.d(t, {}, {
            a: function(e) {
                let t = (0, n.p)(e);
                return null == t ? null : (0, l.a)(t) ?? null
            }
        })
    }),
    GnI8: (function(e, t, i) {
        i.d(t, {
            ChatGptFileReference: () => eh
        });
        var n = i("ABep"),
            l = i("QosV"),
            a = i("Rzcw"),
            r = i("nB3p"),
            o = i("DNYL"),
            s = i("BOYb"),
            c = i("iTtm"),
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
            v = i("ygO2"),
            y = i("bf6R"),
            I = i("qRWe"),
            A = i("RNul"),
            C = i("SGsN"),
            x = i("bWX0"),
            w = i("i1PI"),
            N = i("gC53"),
            E = i("jCsa"),
            O = i("MExO"),
            R = i("vYmP"),
            j = i("ZjkF"),
            k = i("WAdu"),
            P = i("cckT"),
            F = i("S1CS"),
            M = i("Ph61"),
            S = i("LOXd"),
            G = i("coFq"),
            L = i("GaA7"),
            B = i("tSEg"),
            W = i("WFY2"),
            D = i("zsxQ"),
            H = i("vldH"),
            U = i("zy7P"),
            K = i("u4MG"),
            z = i("dQRk"),
            $ = i("TUMj"),
            q = i("rxj0"),
            Q = i("zamV"),
            V = i("Ul98"),
            Y = i("f2PP"),
            X = i("c9lJ"),
            Z = i("gsAl"),
            J = i("ahg9"),
            ee = i("j8Yf"),
            et = i("t2JB"),
            ei = i("PO1G"),
            en = i("DIH2");

        function el(e) {
            let t, i, a, o, s, d, f, p, _ = (0, l.c)(34),
                {
                    reference: h
                } = e,
                g = (0, c.y)(B.a),
                m = (0, $.d)(),
                b = "restricted" === (0, u.useContext)(k.a);
            _[0] !== h.name ? (t = (0, en.b)(h.name), _[0] = h.name, _[1] = t) : t = _[1];
            let T = t,
                v = (0, et.b)(h),
                I = (0, u.useRef)(null),
                A = m?.savedContentResponse,
                C = m?.shouldBlockExternalEgress === !0,
                x = null == A || null == v || C ? null : (0, r.k)(v);
            _[2] !== x || _[3] !== A || _[4] !== g ? (i = () => {
                (0, M.a)(g, I, A, x)
            }, _[2] = x, _[3] = A, _[4] = g, _[5] = i) : i = _[5];
            let w = (0, u.useEffectEvent)(i);
            _[6] !== w ? (a = () => {
                w()
            }, _[6] = w, _[7] = a) : a = _[7];
            let N = x?.id,
                E = x?.kind,
                O = A?.conversationId,
                j = A?.responseId,
                P = A?.savedContentBackend;
            if (_[8] !== N || _[9] !== E || _[10] !== O || _[11] !== j || _[12] !== P ? (o = [N, E, O, j, P], _[8] = N, _[9] = E, _[10] = O, _[11] = j, _[12] = P, _[13] = o) : o = _[13], (0, u.useEffect)(a, o), null == T || null == v) {
                let e;
                return _[14] !== h ? (e = (0, n.jsx)(ee.a, {
                    reference: h
                }), _[14] = h, _[15] = e) : e = _[15], e
            }
            _[16] !== x || _[17] !== v || _[18] !== C || _[19] !== T || _[20] !== b || _[21] !== A || _[22] !== g ? (s = C ? (0, n.jsx)(R.a, {
                ariaLabel: T,
                disabled: !0,
                icon: (0, n.jsx)(y.ud, {}),
                isTerminalInline: !0,
                label: T,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onClick: ea
            }) : (0, n.jsx)(R.a, {
                ariaLabel: T,
                href: v,
                icon: (0, n.jsx)(y.ud, {}),
                isTerminalInline: !0,
                label: T,
                requiresConfirmation: b,
                testId: "chatgpt-library-folder-citation",
                variant: "file",
                onActivate: () => {
                    (0, M.a)(g, I, A, x, !0)
                }
            }), _[16] = x, _[17] = v, _[18] = C, _[19] = T, _[20] = b, _[21] = A, _[22] = g, _[23] = s) : s = _[23];
            let F = s;
            _[24] !== T || _[25] !== h ? (d = function(e, t) {
                let i = (0, en.b)(e.matched_text),
                    n = (0, en.b)(e.library_path);
                if (null == i || null == n) return null;
                let l = i.match(/^`+/)?.[0],
                    a = null != l && i.endsWith(l),
                    r = a ? i.slice(l.length, -l.length) : i,
                    o = n.split("/").filter(Boolean);
                if (o.length < 2 || o.at(-1) !== t) return null;
                let s = o.join("/");
                if (!new Set([`/${s}`, s, `/${s}/`, `${s}/`, `Library/${s}`, ...[" / ", " > ", " → ", " › "].map(e => o.join(e))]).has(r)) return null;
                let c = r.lastIndexOf(t);
                return {
                    isInlineCode: a,
                    prefix: r.slice(0, c),
                    suffix: r.slice(c + t.length)
                }
            }(h, T), _[24] = T, _[25] = h, _[26] = d) : d = _[26];
            let S = d;
            if (null == S) return F;
            _[27] !== F || _[28] !== S.prefix || _[29] !== S.suffix ? (f = (0, n.jsxs)(n.Fragment, {
                children: [S.prefix, F, S.suffix]
            }), _[27] = F, _[28] = S.prefix, _[29] = S.suffix, _[30] = f) : f = _[30];
            let G = f;
            return _[31] !== G || _[32] !== S.isInlineCode ? (p = S.isInlineCode ? (0, n.jsx)("code", {
                children: G
            }) : G, _[31] = G, _[32] = S.isInlineCode, _[33] = p) : p = _[33], p
        }

        function ea() {}
        var er = i("Bbed"),
            eo = i("ePaQ"),
            es = i("JAYD"),
            ec = i("Nfif");
        let eu = (0, er.a)(async () => (await Promise.all([i.e(418851), i.e(109308), i.e(399565), i.e(257798), i.e(153380), i.e(617936), i.e(807489), i.e(337882), i.e(955979), i.e(646436), i.e(7078), i.e(200429), i.e(698524), i.e(956483), i.e(87162), i.e(396705), i.e(155568), i.e(731863), i.e(767086), i.e(76629), i.e(514085), i.e(204542), i.e(982651), i.e(673108), i.e(487481), i.e(199033)]).then(i.bind(i, "kcNG"))).PrivateSourceFollowUp);

        function ed(e) {
            let t, i, a, r, o, s, d, f = (0, l.c)(29),
                {
                    source: p
                } = e,
                _ = (0, c.y)(B.a),
                h = (0, $.d)(),
                [g, m] = (0, u.useState)(""),
                [b, T] = (0, u.useState)(!1),
                v = (0, u.useContext)(k.a);
            f[0] !== v || f[1] !== _.value ? (t = null != (0, B.h)(_.value) && "restricted" !== v, f[0] = v, f[1] = _.value, f[2] = t) : t = f[2];
            let y = t,
                I = (0, c.x)(y ? es.a : null, p.connector_id),
                A = !y || !I;
            f[3] !== A || f[4] !== b || f[5] !== g || f[6] !== p || f[7] !== h ? (i = A || null == h || h.isReadOnly || h.shouldBlockExternalEgress || h.renderRestrictedWidgets || h.renderRestrictedModelResponses ? void 0 : (0, n.jsx)(eu, {
                source: p,
                question: g,
                onQuestionChange: m,
                turn: h,
                pending: b,
                onPendingChange: T
            }, p.id), f[3] = A, f[4] = b, f[5] = g, f[6] = p, f[7] = h, f[8] = i) : i = f[8];
            let C = p.snippet ?? void 0;
            f[9] !== p.name || f[10] !== C ? (a = {
                title: p.name,
                body: C
            }, f[9] = p.name, f[10] = C, f[11] = a) : a = f[11], f[12] !== p.name || f[13] !== a ? (r = {
                title: p.name,
                hoverCard: a
            }, f[12] = p.name, f[13] = a, f[14] = r) : r = f[14], f[15] !== p.connector_id ? (o = (0, n.jsx)(ec.a, {
                appId: p.connector_id
            }), f[15] = p.connector_id, f[16] = o) : o = f[16];
            let x = p.medical_file_reference?.source_label ?? p.name;
            return f[17] !== A || f[18] !== p.name || f[19] !== o || f[20] !== x ? (s = (0, n.jsx)(R.a, {
                ariaLabel: p.name,
                disabled: A,
                icon: o,
                label: x,
                variant: "file",
                testId: "chatgpt-private-source-citation",
                onClick: ef
            }), f[17] = A, f[18] = p.name, f[19] = o, f[20] = x, f[21] = s) : s = f[21], f[22] !== A || f[23] !== b || f[24] !== p.connector_id || f[25] !== i || f[26] !== r || f[27] !== s ? (d = (0, n.jsx)(eo.a, {
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

        function ef(e) {
            return e.currentTarget.focus()
        }
        var ep = i("iKA6");
        let e_ = (0, c.q)(B.a, (e, t) => {
            let {
                conversationId: i,
                messageId: n,
                target: l
            } = e, {
                scope: a
            } = t;
            return {
                queryKey: ["latex-card-workspace-file", i, n, l],
                staleTime: 0,
                retry: !1,
                queryFn: async () => {
                    if (null != l) {
                        let e = await (0, b.b)(a, i, l);
                        if (null != e && "tex" === (0, x.c)(e.path)) return {
                            file: e,
                            originalSource: !1
                        };
                        let t = await (0, b.a)(a, i, n, l);
                        return null == t ? null : {
                            file: t,
                            originalSource: !0
                        }
                    }
                    return null
                }
            }
        });

        function eh(e) {
            let t, i, a, r = (0, l.c)(17);
            r[0] !== e.reference ? (t = ep.a.safeParse(e.reference), r[0] = e.reference, r[1] = t) : t = r[1];
            let o = t;
            if (o.success) {
                let e;
                return r[2] !== o.data ? (e = (0, n.jsx)(ed, {
                    source: o.data
                }, o.data.id), r[2] = o.data, r[3] = e) : e = r[3], e
            }
            if ("library_folder" === e.reference.type || (0, et.c)(e.reference)) {
                let t;
                return r[4] !== e.reference ? (t = (0, n.jsx)(el, {
                    reference: e.reference
                }), r[4] = e.reference, r[5] = t) : t = r[5], t
            }
            if ("file_navlist" === e.reference.type) {
                let t;
                return r[6] !== e ? (t = (0, n.jsx)(ev, {
                    ...e
                }), r[6] = e, r[7] = t) : t = r[7], t
            }
            let s = "template" === e.presentation ? "auto" : e.presentation;
            r[8] !== e || r[9] !== s ? (i = (0, n.jsx)(em, {
                ...e,
                presentation: s
            }), r[8] = e, r[9] = s, r[10] = i) : i = r[10];
            let c = i;
            if ("file" === e.reference.type && (null == e.presentation || "auto" === e.presentation) && null == (0, en.b)(e.reference.sandbox_path) && !(0, en.b)(e.reference.link_markdown)?.includes("sandbox:")) {
                let e;
                r[11] !== c ? (e = (0, n.jsx)(eg, {
                    children: c
                }), r[11] = c, r[12] = e) : e = r[12], c = e
            }
            let u = "template" === e.presentation;
            return r[13] !== c || r[14] !== e.reference || r[15] !== u ? (a = (0, n.jsx)(_.a, {
                reference: e.reference,
                fallback: c,
                isTemplate: u
            }), r[13] = c, r[14] = e.reference, r[15] = u, r[16] = a) : a = r[16], a
        }

        function eg(e) {
            let {
                children: t
            } = e, i = (0, $.d)(), n = (0, c.x)(z.R, i?.conversationId ?? null);
            return null == n || (0, K.a)(n) ? t : null
        }

        function em(e) {
            var t, i, _, b;
            let K, el, ea, er, eo, es, ec, eu, ed, ef, ep = (0, l.c)(46),
                {
                    children: eh,
                    contentReferenceIndex: eg,
                    fileNavigationIndex: em,
                    presentation: ev,
                    reference: ey,
                    showSaveAs: eI
                } = e,
                eA = void 0 === ev ? "auto" : ev,
                eC = (0, c.y)(B.a),
                ex = (0, f.a)(),
                ew = (0, $.d)(),
                eN = (0, $.c)(ew, eg)?.messageId ?? ew?.messageId,
                eE = (0, u.useContext)(m.a),
                eO = "restricted" === (0, u.useContext)(k.a),
                [eR, ej] = (0, u.useState)(),
                ek = (0, u.useRef)(null),
                eP = null != eR,
                eF = eE?.accountId ?? null,
                eM = eE?.userId ?? null;
            ep[0] !== ey.cloud_doc_url || ep[1] !== ey.codex_file_citation_authoritative || ep[2] !== eO || ep[3] !== ew?.shouldBlockExternalEgress ? (K = ew?.shouldBlockExternalEgress !== !1 || eO || !0 !== ey.codex_file_citation_authoritative ? null : (0, en.b)(ey.cloud_doc_url), ep[0] = ey.cloud_doc_url, ep[1] = ey.codex_file_citation_authoritative, ep[2] = eO, ep[3] = ew?.shouldBlockExternalEgress, ep[4] = K) : K = ep[4], ep[5] !== eF || ep[6] !== eM || ep[7] !== K ? (el = {
                accountId: eF,
                userId: eM,
                url: K
            }, ep[5] = eF, ep[6] = eM, ep[7] = K, ep[8] = el) : el = ep[8];
            let {
                data: eS
            } = (0, c.x)(U.a, el), eG = eS ?? (0, et.a)(ey), eL = "library_folder" === ey.source_type, eB = (0, H.b)(ey, {
                fileName: eG ?? void 0,
                messageId: eN
            }), eW = ew?.conversationId, eD = (0, X.a)(eC.value.pathname)?.params.sharedConversationId, eH = null == eW ? null : eC.get(z.Y, eW);
            null != eD && eD === eW && (eH = eD);
            let eU = eC.get(Z.e, eE)?.id,
                eK = (0, H.e)(ey),
                ez = null != eB && ew?.shouldBlockExternalEgress === !0,
                e$ = null != eB && null != eG && !ez && (0, E.a)({
                    fileName: "mounted-library" === eB.type ? eB.sourceFileName ?? eG : eG,
                    mimeType: "mounted-library" === eB.type ? eB.mimeType ?? eK : eK,
                    mountedLibraryFileId: "mounted-library" === eB.type ? eB.mountedLibraryFileId : void 0
                }),
                eq = eB?.type === "mounted-library" || null != eG && (0, D.a)(eG, eK),
                eQ = null != eB && (!e$ && "mounted-library" === eB.type && null == eH && null == eU || (0, Y.canOpenChatGptFilePreview)({
                    browserPreview: eq
                })),
                eV = !ez && (e$ || eQ),
                eY = L.appServices?.latex != null && "artifact-row" === eA && null != eG && "tex" === (0, x.c)(eG) && eV && ew?.isReadOnly !== !0 && null == eH && null == eU,
                {
                    data: eX
                } = (0, c.x)(e_, {
                    conversationId: eW,
                    messageId: ew?.messageId,
                    target: eB
                }, {
                    enabled: eY
                }),
                eZ = eY && null != eX,
                eJ = (void 0 === eI || eI) && e$ && (0, Y.canSaveChatGptFile)(),
                e0 = (0, J.a)(ey),
                e1 = {
                    fileName: eG ?? void 0,
                    mimeType: (0, H.c)(ey) ?? (eB?.type === "mounted-library" ? eB.mimeType ?? void 0 : void 0),
                    mountedLibraryFileId: eB?.type === "mounted-library" ? eB.mountedLibraryFileId : void 0,
                    sourceMimeType: (0, H.d)(ey),
                    sourceUrl: e0 ?? void 0
                },
                e2 = "library_folder" === ey.source_type ? (0, et.b)(ey) : e0,
                e3 = null != e2 && ew?.shouldBlockExternalEgress === !0,
                e4 = null == eB || null == eG ? null : (0, V.a)(eB, eG, eK),
                e5 = null == e4 ? null : (0, O.d)(e4)?.sourceUrl,
                e6 = ez || e3 ? null : e5 ?? (e$ || e3 ? null : e2),
                e8 = ew?.savedContentResponse,
                e7 = null;
            null != e8 && null != eG && (eV || null != e6) && eB?.type !== "mounted-library" && ("library_folder" === ey.source_type && null != e6 ? e7 = (0, r.k)(e6) : null != eB && "libraryFileId" in eB && (e7 = (0, r.j)(eB.libraryFileId)));
            let e9 = (0, u.useEffectEvent)(() => {
                (0, M.a)(eC, ek, e8, e7)
            });
            ep[9] !== e9 ? (ea = () => {
                e9()
            }, ep[9] = e9, ep[10] = ea) : ea = ep[10];
            let te = e7?.id,
                tt = e7?.kind,
                ti = e8?.conversationId,
                tn = e8?.responseId,
                tl = e8?.savedContentBackend;
            if (ep[11] !== ti || ep[12] !== tn || ep[13] !== tl || ep[14] !== te || ep[15] !== tt ? (er = [te, tt, ti, tn, tl], ep[11] = ti, ep[12] = tn, ep[13] = tl, ep[14] = te, ep[15] = tt, ep[16] = er) : er = ep[16], (0, u.useEffect)(ea, er), null == eG) {
                let e;
                return ep[17] !== ey ? (e = (0, n.jsx)(ee.a, {
                    reference: ey
                }), ep[17] = ey, ep[18] = e) : e = ep[18], e
            }
            let ta = () => {
                    (0, M.a)(eC, ek, e8, e7, !0)
                },
                tr = (e, t, i) => {
                    if (eP || null == eB) return;
                    "opening" === e && ta();
                    let l = (0, h.a)(eG);
                    if ("saving" === e && null != eW && null == eH && null == eU && ("pptx" === l || "xlsx" === l || "csv" === l || "tsv" === l)) {
                        let e = (0, g.b)({
                            artifactType: "pptx" === l ? "slides" : "spreadsheet",
                            importKind: l,
                            threadId: eW,
                            originatingTurn: ew?.turnId == null ? void 0 : {
                                turnId: ew.turnId,
                                inputMessageId: null,
                                messageId: eN ?? null
                            }
                        }, "download-url" === eB.type ? void 0 : {
                            conversationId: eW,
                            byteSource: "chatgpt",
                            target: eB
                        });
                        null != e && (0, g.c)(eC, {
                            ...e,
                            surface: "output-card"
                        }, "download", {
                            format: l
                        })
                    }
                    "saving" === e && null != eW && null != l && (0, Q.b)(eC, {
                        action: "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_DOWNLOAD",
                        importKind: l,
                        isEditing: !1,
                        source: {
                            conversationId: eW,
                            byteSource: "chatgpt",
                            sharedConversationId: eH,
                            artifactInteractionExcluded: null != eU,
                            target: eB
                        },
                        originatingTurn: ew?.turnId == null ? void 0 : {
                            turnId: ew.turnId,
                            inputMessageId: null,
                            messageId: eN ?? null
                        }
                    }), ej(e);
                    let a = !0,
                        r = () => {
                            a && (a = !1, ej(void 0))
                        },
                        o = {
                            conversationId: eC.get(z.j, eW ?? null) ?? eW,
                            fileName: eG,
                            gizmoId: null == eW ? null : eC.get(z.R, eW),
                            sharedConversationId: eH,
                            mimeType: eK,
                            postId: eU,
                            target: eB
                        };
                    ("saving" === e ? (0, Y.saveChatGptFile)(eC, o) : (0, Y.openChatGptFile)(eC, {
                        ...o,
                        messageId: (0, $.c)(ew, eg)?.messageId,
                        connectedFileIntent: "open",
                        interaction: t,
                        isAccessBlocked: e => (0, q.i)(e, eW),
                        browserPreview: eq,
                        onClose: null == i ? void 0 : () => {
                            r(), i()
                        },
                        downloadFallback: e$ && !eQ,
                        tabKey: `${ew?.messageId??"message"}:${String(eg)}:${eG}${null==em?"":`:${String(em)}`}`
                    })).catch(t => {
                        "opening" === e && a && null != i && ((0, d.flushSync)(r), i()), W.a.warning("ChatGPT content reference file action failed", {
                            safe: {},
                            sensitive: {
                                error: t
                            }
                        }), eC.get(C.f).danger((0, n.jsx)(p.a, {
                            id: "file-tile.download-failed",
                            defaultMessage: "Failed to download file. Please try again later.",
                            description: "Error toast when opening or downloading a file from a ChatGPT message fails"
                        }), {
                            errorAnalytics: {
                                toastId: "saving" === e ? "file_download_failed" : "unknown"
                            }
                        })
                    }).finally(r)
                },
                to = e => {
                    eV && (e.preventDefault(), tr("opening", e))
                };
            if ("artifact-row" === eA && e$) {
                let e;
                ep[19] !== ex ? (e = ex.formatMessage({
                    id: "chatgpt.artifacts.resource_row.download_file.label",
                    defaultMessage: "Download file",
                    description: "Tooltip and accessibility label for the icon-only download button in an artifact file card beneath a ChatGPT response. It appears when desktop users hover over or focus the row and remains visible on touch devices. Activating the button downloads the file. Short, space-limited action label for end users."
                }), ep[19] = ex, ep[20] = e) : e = ep[20], eo = e
            } else eJ && (eo = ex.formatMessage({
                id: "chatgpt.contentReferences.file.saveAs.ariaLabel",
                defaultMessage: "Save {fileName} as…",
                description: "Accessible label and tooltip for saving a generated ChatGPT file to a user-selected location. The fileName placeholder is the displayed file name."
            }, {
                fileName: eG
            }));
            let ts = null != eo ? (0, n.jsx)(o.a, {
                content: eo,
                children: (0, n.jsx)(v.a, {
                    "aria-label": eo,
                    color: "artifact-row" === eA ? "ghostActive" : "ghost",
                    disabled: eP,
                    loading: "saving" === eR,
                    radius: "artifact-row" === eA ? "large" : "default",
                    size: "artifact-row" === eA ? "imageToolbar" : "toolbar",
                    uniform: !0,
                    onClick: e => {
                        e.stopPropagation(), tr("saving")
                    },
                    children: "saving" !== eR && (0, n.jsx)(N.a, {
                        "aria-hidden": !0,
                        className: "artifact-row" === eA ? "icon-base" : "icon-sm"
                    })
                })
            }) : null;
            if (eV && null != e4 ? es = eP ? ex.formatMessage({
                    id: "chatgpt.contentReferences.file.openingConnectedFile.ariaLabel",
                    defaultMessage: "Opening {fileName}",
                    description: "Accessible label for a connected-provider file reference while it is opening in the preferred browser or the file preview. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eG
                }) : ex.formatMessage({
                    id: "chatgpt.contentReferences.file.openConnectedFile.ariaLabel",
                    defaultMessage: "Open {fileName}",
                    description: "Accessible label for a connected-provider file reference. Activating it opens the file in the preferred browser on Desktop or the file preview on the web. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eG
                }) : eV ? es = eQ && eP ? ex.formatMessage({
                    id: "chatgpt.contentReferences.file.openingPreview.ariaLabel",
                    defaultMessage: "Opening preview of {fileName}",
                    description: "Accessible label for a disabled ChatGPT file reference card while its file is being prepared for the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eG
                }) : eQ ? ex.formatMessage({
                    id: "chatgpt.contentReferences.file.openPreview.ariaLabel",
                    defaultMessage: "Open preview of {fileName}",
                    description: "Accessible label for a ChatGPT file reference card that downloads the file and opens it in the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eG
                }) : eP ? ex.formatMessage({
                    id: "chatgpt.contentReferences.file.downloading.ariaLabel",
                    defaultMessage: "Downloading {fileName}",
                    description: "Accessible label for a disabled ChatGPT file reference card while its file download is pending. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eG
                }) : ex.formatMessage({
                    id: "chatgpt.contentReferences.file.download.ariaLabel",
                    defaultMessage: "Download {fileName}",
                    description: "Accessible label for a ChatGPT file reference card that downloads a file attached to a response. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eG
                }) : ez && (es = eQ ? ex.formatMessage({
                    id: "chatgpt.contentReferences.file.previewBlocked.ariaLabel",
                    defaultMessage: "Preview of {fileName} unavailable in lockdown mode",
                    description: "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file for the right-side preview panel. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eG
                }) : ex.formatMessage({
                    id: "chatgpt.contentReferences.file.downloadBlocked.ariaLabel",
                    defaultMessage: "Download {fileName} unavailable in lockdown mode",
                    description: "Accessible label for a disabled ChatGPT file reference card when lockdown mode blocks downloading the file. The fileName placeholder is the displayed file name."
                }, {
                    fileName: eG
                })), "artifact-row" !== eA && "file-tile" !== eA) {
                let e = !0 !== ey.codex_file_citation_authoritative && "my_files" === (t = ey).source && null != (0, en.b)(t.library_file_id) && !eT(t),
                    l = !0 !== ey.codex_file_citation_authoritative && null == eh && !e && (eT(ey) || null != e4 || ew?.conversationOrigin === "tpp" && null != (0, en.b)(ey.library_file_id)),
                    r = null == eh ? (0, en.b)((0, en.d)(ey.codex_file_citation_attributes)?.label) ?? (0, en.b)((0, en.d)(ey.codex_file_citation_attributes)?.title) ?? eG : (0, j.a)(eh);
                e ? (i = ey, _ = eG, r = (0, a.c)({
                    fileName: _,
                    matchedText: (0, en.b)(i.matched_text) ?? void 0
                })) : l && (r = (0, a.b)(function(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch {
                        return e
                    }
                }(eG)));
                let c = (0, n.jsx)("span", {
                    style: a.h,
                    children: (0, n.jsx)(w.a, {
                        ...e1,
                        "aria-hidden": !0,
                        size: 16,
                        style: a.i
                    })
                });
                if (l) {
                    let e, t, i = e => {
                            if (!eV) return;
                            e.preventDefault();
                            let t = e.currentTarget;
                            tr(e$ && (0, P.a)(e) ? "saving" : "opening", e, () => {
                                requestAnimationFrame(() => {
                                    t.isConnected && document.activeElement === document.body && t.focus({
                                        preventScroll: !0
                                    })
                                })
                            })
                        },
                        l = {
                            ref: e => {
                                if (null != e) return (0, T.b)(e, {
                                    text: [eG, r, e6, ...(0, S.a)(ex, [ey]).sources.flatMap(eb)].join(" "),
                                    highlight: (0, s.e)() ? "block" : "auto"
                                })
                            },
                            ariaLabel: es ?? eG,
                            icon: c,
                            isTerminalInline: !0,
                            label: r,
                            testId: "chatgpt-library-file-citation"
                        };
                    e = null != e6 ? (0, n.jsx)(R.a, {
                        ...l,
                        href: e6,
                        onActivate: ta,
                        requiresConfirmation: eO,
                        showHoverActions: null != e5,
                        tooltipContent: eG,
                        variant: "file",
                        onUnmodifiedClick: i
                    }) : eV ? (0, n.jsx)(R.a, {
                        ...l,
                        disabled: eP,
                        variant: "file",
                        onClick: i
                    }) : (0, n.jsx)(R.a, {
                        ...l,
                        disabled: !0,
                        variant: "file",
                        onClick: () => tr("opening")
                    });
                    let a = null != e6 ? e : (0, n.jsx)(o.a, {
                        content: eG,
                        children: (0, n.jsx)("span", {
                            className: "inline-flex",
                            children: e
                        })
                    });
                    return ep[21] !== a ? (t = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: a
                    }), ep[21] = a, ep[22] = t) : t = ep[22], t
                }
                if (!0 === ey.codex_file_citation_authoritative || null != eh || e || ew?.conversationOrigin === "tpp") {
                    let e, t = null != e6 ? (0, n.jsxs)(ei.a, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit",
                        href: e6,
                        onActivate: ta,
                        "aria-busy": eP,
                        "aria-label": es ?? eG,
                        tooltipContent: eG,
                        showHoverActions: null != e5,
                        onUnmodifiedClick: to,
                        children: [c, eh ?? r]
                    }) : (0, n.jsxs)(F.c, {
                        className: "inline cursor-interaction px-1 text-start align-baseline text-inherit underline decoration-text-tertiary decoration-dotted decoration-[1px] underline-offset-[2px] hover:text-info hover:decoration-inherit",
                        reference: {
                            path: eG
                        },
                        ariaBusy: eP,
                        ariaLabel: es ?? eG,
                        cwd: null,
                        disabled: eP || !eV,
                        enableWorkspaceFileActions: !1,
                        hostId: ew?.hostId,
                        label: r,
                        tooltipText: eG,
                        onOpen: (e, t) => {
                            eV && tr(e$ && (0, P.a)(t) ? "saving" : "opening", t)
                        },
                        children: [c, eh ?? r]
                    });
                    return ep[23] !== t ? (e = (0, n.jsx)("span", {
                        className: "inline-flex items-center gap-1",
                        children: t
                    }), ep[23] = t, ep[24] = e) : e = ep[24], e
                }
            }
            let tc = (0, a.f)({
                    fileName: eG,
                    mimeType: (b = ey, (0, en.b)(b.source_mime_type) ?? (0, en.b)(b.mounted_library_mime_type) ?? (0, en.b)(b.mime_type) ?? void 0),
                    sourceUrl: e0 ?? void 0
                }),
                tu = (0, x.c)(eG)?.toUpperCase(),
                td = null;
            if (null != e6 ? td = (0, n.jsx)(ei.a, {
                    "data-testid": eL ? "chatgpt-library-folder-navigation" : void 0,
                    className: "artifact-row" === eA ? "absolute inset-0 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset" : "absolute inset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                    href: e6,
                    onActivate: ta,
                    "aria-busy": eP,
                    tooltipContent: eG,
                    showHoverActions: null != e5,
                    onUnmodifiedClick: to,
                    children: (0, n.jsx)("span", {
                        className: "sr-only",
                        children: eG
                    })
                }) : eV ? td = (0, n.jsx)("button", {
                    "aria-busy": eP,
                    "aria-label": es,
                    className: "artifact-row" === eA ? "absolute inset-0 cursor-interaction bg-transparent hover:bg-text/5 focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait" : "absolute inset-0 cursor-interaction bg-transparent hover:bg-background-primary-ghost-hover/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset disabled:cursor-wait",
                    disabled: eP,
                    onClick: e => tr(e$ && (0, P.a)(e) ? "saving" : "opening", e),
                    type: "button"
                }) : (ez || e3) && (td = (0, n.jsx)("button", {
                    "aria-disabled": !0,
                    "aria-label": es ?? eG,
                    className: "absolute inset-0 bg-transparent",
                    disabled: !0,
                    type: "button"
                })), eP) {
                let e;
                ep[25] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(A.a, {
                    className: "icon-xs shrink-0 text-text/70",
                    "aria-hidden": !0
                }), ep[25] = e) : e = ep[25], ec = e
            } else if (null != ts) {
                let e, t = "pointer-events-auto";
                "artifact-row" === eA ? t = "pointer-events-none relative z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100" : "file-tile" === eA && (t = "pointer-events-none absolute end-1.5 top-1.5 z-20 opacity-0 group-focus-within/resource-row:pointer-events-auto group-focus-within/resource-row:opacity-100 group-hover/resource-row:pointer-events-auto group-hover/resource-row:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100"), ep[26] !== ts || ep[27] !== t ? (e = (0, n.jsx)("span", {
                    className: t,
                    children: ts
                }), ep[26] = ts, ep[27] = t, ep[28] = e) : e = ep[28], ec = e
            }
            if (eZ) {
                let e, t;
                ep[29] !== eX?.originalSource ? (e = eX?.originalSource ? (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source.description",
                    defaultMessage: "Edits are saved to the original workspace file, not this Library copy",
                    description: "Explains that the original-source action opens a separate workspace file, and editing it does not update the uploaded Library copy"
                }) : void 0, ep[29] = eX?.originalSource, ep[30] = e) : e = ep[30], ep[31] !== eX?.originalSource ? (t = eX?.originalSource ? (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_original_source",
                    defaultMessage: "Open original source",
                    description: "Opens the original LaTeX workspace file that was uploaded to create this separate Library copy"
                }) : (0, n.jsx)(p.a, {
                    id: "chatgpt.artifacts.resource_row.open_latex_editor",
                    defaultMessage: "Open LaTeX editor",
                    description: "Opens this conversation's local LaTeX source in the built-in editor with a live PDF preview"
                }), ep[31] = eX?.originalSource, ep[32] = t) : t = ep[32], ec = (0, n.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, n.jsx)(o.a, {
                        content: e,
                        children: (0, n.jsx)(v.a, {
                            className: "pointer-events-auto",
                            color: "primary",
                            disabled: eP,
                            size: "toolbar",
                            onClick: () => {
                                eX?.originalSource ? (0, G.openFileSidePanelTab)(eC, eX.file.path, {
                                    hostId: eX.file.hostId
                                }) : tr("opening")
                            },
                            children: t
                        })
                    }), ec]
                })
            }
            let tf = tu,
                tp = "default";
            "artifact-row" === eA ? (tf = eZ && !eX?.originalSource ? (0, n.jsx)(p.a, {
                id: "chatgpt.artifacts.resource_row.latex_file_type",
                defaultMessage: "LaTeX document · Editable source",
                description: "Identifies an editable LaTeX source file owned by this conversation's workspace"
            }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("span", {
                    className: "group-focus-within/resource-row:hidden group-hover/resource-row:hidden",
                    children: (0, n.jsx)(p.a, {
                        ...(0, a.d)(tc.category, tc.iconKey)
                    })
                }), (0, n.jsx)("span", {
                    className: "hidden group-focus-within/resource-row:inline group-hover/resource-row:inline",
                    "data-markdown-copy": "exclude",
                    children: (0, n.jsx)(p.a, {
                        id: "chatgpt.artifacts.resource_row.open_file.label",
                        defaultMessage: "Open file",
                        description: "Hover and keyboard-focus subtitle in a file-card row under a ChatGPT response. It tells the end user that activating the row opens the file preview. This is a short, space-limited action label."
                    })
                })]
            }), tp = eZ ? "default" : "artifact-list") : "file-tile" === eA && (tf = eL ? (0, n.jsx)(p.a, {
                id: "chatgpt.file_navigation.folder.label",
                defaultMessage: "Folder",
                description: "Type label shown under a Library folder in a navigation result card"
            }) : function(e) {
                let t = e.source_type ?? e.source;
                if ("my_files" !== t && "google_drive" !== t) return null;
                let i = (0, en.b)(e.description) ?? (0, en.b)(e.snippet);
                return i?.startsWith("/") === !0 ? i : null
            }(ey) ?? (0, n.jsx)(p.a, {
                ...(0, a.d)(tc.category, tc.iconKey)
            }), tp = "file-tile");
            let t_ = "file-tile" === eA ? (0, n.jsx)("span", {
                className: "flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl",
                children: eL ? (0, n.jsx)(y.vd, {
                    "aria-hidden": !0
                }) : (0, n.jsx)(w.a, {
                    ...e1,
                    "aria-hidden": !0,
                    size: 24
                })
            }) : (0, n.jsx)(w.a, {
                ...e1,
                "aria-hidden": !0,
                className: "shrink-0",
                size: 24
            });
            ep[33] !== eG || ep[34] !== tp || ep[35] !== tf || ep[36] !== t_ || ep[37] !== ec ? (eu = (0, n.jsx)(I.h, {
                className: "pointer-events-none relative z-10",
                icon: t_,
                subtitle: tf,
                title: eG,
                titleTooltip: eG,
                trailing: ec,
                variant: tp
            }), ep[33] = eG, ep[34] = tp, ep[35] = tf, ep[36] = t_, ep[37] = ec, ep[38] = eu) : eu = ep[38], ep[39] !== td || ep[40] !== eu ? (ed = (0, n.jsxs)("span", {
                className: "group/resource-row relative",
                children: [td, eu]
            }), ep[39] = td, ep[40] = eu, ep[41] = ed) : ed = ep[41];
            let th = ed;
            if ("artifact-row" === eA) return th;
            if ("file-tile" === eA) {
                let e;
                return ep[42] !== th ? (e = (0, n.jsx)(I.a, {
                    as: "span",
                    variant: "file-tile",
                    children: th
                }), ep[42] = th, ep[43] = e) : e = ep[43], e
            }
            return ep[44] !== th ? (ef = (0, n.jsx)(I.a, {
                as: "span",
                className: "mt-3",
                children: th
            }), ep[44] = th, ep[45] = ef) : ef = ep[45], ef
        }

        function eb(e) {
            return [e.displayLabel, e.sourceName]
        }

        function eT(e) {
            if ("file_citation" === (0, en.b)((0, en.d)(e.fff_metadata)?.file_reference_type)) return !0;
            let t = (0, en.b)(e.matched_text)?.trim().toLowerCase();
            return t?.startsWith("filecite") === !0 || t?.startsWith("[citefilecite") === !0
        }

        function ev(e) {
            let t, i, a, r, o = (0, l.c)(12),
                {
                    contentReferenceIndex: s,
                    reference: c
                } = e;
            if (o[0] !== s || o[1] !== c) {
                a = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, l = (Array.isArray(c.items) ? c.items : []).flatMap(ey);
                    if (0 === l.length) {
                        let e;
                        o[5] !== c ? (e = (0, n.jsx)(ee.c, {
                            reference: c
                        }), o[5] = c, o[6] = e) : e = o[6], a = e;
                        break e
                    }
                    t = "not-prose m-0 mt-6 flex list-none flex-wrap gap-2 p-0",
                    o[7] !== s ? (e = (e, t) => (0, n.jsx)("li", {
                        className: "m-0 p-0",
                        children: (0, n.jsx)(eh, {
                            contentReferenceIndex: s,
                            fileNavigationIndex: t,
                            presentation: "file-tile",
                            reference: e
                        })
                    }, `${e.name}:${String(t)}`), o[7] = s, o[8] = e) : e = o[8],
                    i = l.map(e)
                }
                o[0] = s, o[1] = c, o[2] = t, o[3] = i, o[4] = a
            } else t = o[2], i = o[3], a = o[4];
            return a !== Symbol.for("react.early_return_sentinel") ? a : (o[9] !== t || o[10] !== i ? (r = (0, n.jsx)("ul", {
                className: t,
                children: i
            }), o[9] = t, o[10] = i, o[11] = r) : r = o[11], r)
        }

        function ey(e) {
            let t = (0, en.d)(e),
                i = null == t ? null : (0, et.a)(t);
            return null == t || null == i ? [] : [{
                ...t,
                name: i,
                type: "file"
            }]
        }
    }),
    PO1G: (function(e, t, i) {
        var n = i("ABep"),
            l = i("QosV"),
            a = i("on57"),
            r = i("KDax");
        i.d(t, {}, {
            a: function(e) {
                let t, i, o, s, c = (0, l.c)(8);
                return c[0] !== e ? ({
                    className: t,
                    ...i
                } = e, c[0] = e, c[1] = t, c[2] = i) : (t = c[1], i = c[2]), c[3] !== t ? (o = (0, a.b)("cursor-interaction", t), c[3] = t, c[4] = o) : o = c[4], c[5] !== i || c[6] !== o ? (s = (0, n.jsx)(r.a, {
                    ...i,
                    className: o,
                    initiator: "markdown_link_click"
                }), c[5] = i, c[6] = o, c[7] = s) : s = c[7], s
            }
        })
    }),
    iKA6: (function(e, t, i) {
        var n = i("ASxG");
        let l = n.object({
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
            a: l
        })
    }),
    zamV: (function(e, t, i) {
        var n = i("tFxw"),
            l = i("MVHH"),
            a = i("yGJW"),
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
            if ("chatgpt-thread" !== e.value.routeKind || e.value.conversationId !== _ || null != d.sharedConversationId || !0 === d.artifactInteractionExcluded || null != e.get(r.Z, _)) return;
            if ("pptx" === c) i = "CHATGPT_WEB_ARTIFACT_KIND_PRESENTATION";
            else {
                if ("xlsx" !== c && "csv" !== c && "tsv" !== c) return;
                i = "CHATGPT_WEB_ARTIFACT_KIND_SPREADSHEET"
            }
            let g = e.get(r.x, _),
                m = "tpp" === g || "flora" === g;
            if (!m || "CHATGPT_WEB_ARTIFACT_INTERACTION_ACTION_OPEN_PREVIEW" !== s) try {
                let t = "fileId" in h ? h.fileId : void 0,
                    r = "libraryFileId" in h ? h.libraryFileId : void 0,
                    c = (0, n.a)("mounted-library" === h.type ? h.mountedLibraryFileId : void 0, r, t),
                    d = null != c && (null != (0, n.d)(c) || (0, n.j)(c)) ? c : void 0;
                (0, a.a)(e, l.k, {
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
                    isTemporaryChat: (0, o.h)(e.value.search ?? ""),
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
    GigQ: (function(e, t, i) {
        i.d(t, {}, {
            a: function(e, t) {
                let i, n = e.attachments[0];
                if (n?.kind === "media_generation") {
                    if (1 !== e.attachments.length || n.output_blocked || null == n.asset_pointer || null == n.messages) return null;
                    let t = n.asset_pointer.split("?")[0],
                        l = n.messages;
                    if (!l.some((e, i) => "assistant" === e.author.role && "string" == typeof e.recipient && l.slice(i + 1).some(i => "tool" === i.author.role && i.author.name === e.recipient && "multimodal_text" === i.content.content_type && i.content.parts.some(e => "string" != typeof e && "content_type" in e && "image_asset_pointer" === e.content_type && e.asset_pointer.split("?")[0] === t)))) return null;
                    i = l
                } else {
                    if (!(e.attachments.length > 0 && e.attachments.every(e => ("message_slice" === e.kind || "deep_research" === e.kind) && e.messages.length > 0))) return null;
                    i = e.attachments.flatMap(e => "message_slice" === e.kind || "deep_research" === e.kind ? e.messages : [])
                }
                let l = {
                        id: "y-root",
                        message: null,
                        parent: null,
                        children: []
                    },
                    a = [l],
                    r = new Set([l.id]);
                for (let e of i) {
                    if (!e.id || r.has(e.id)) return null;
                    r.add(e.id), l.children = [e.id];
                    let t = {
                        id: e.id,
                        message: e,
                        parent: l.id,
                        children: []
                    };
                    a.push(t), l = t
                }
                return {
                    conversation_id: t,
                    current_node: l.id,
                    mapping: Object.fromEntries(a.map(e => [e.id, e])),
                    linear_conversation: a,
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
    gsAl: (function(e, t, i) {
        i.d(t, {
            a: () => C,
            b: () => m,
            c: () => w,
            d: () => x,
            e: () => T,
            f: () => y,
            g: () => v,
            h: () => I,
            i: () => b,
            j: () => A
        });
        var n = i("mQnY"),
            l = i("Fjze"),
            a = i("iTtm"),
            r = i("jqIZ"),
            o = i("yGJW"),
            s = i("tSEg"),
            c = i("yMDx"),
            u = i("dQRk"),
            d = i("rfhJ"),
            f = i("ASxG"),
            p = i("w5lF"),
            _ = i("GDNt"),
            h = i("Kwur"),
            g = i("GigQ");

        function m(e) {
            return e.attachments[0]?.kind !== "prompt_share"
        }
        let b = (0, a.q)(s.a, (e, t) => {
                let {
                    scope: i
                } = t, n = (0, r.I)("/s/:postId", i.value.pathname)?.params.postId;
                return {
                    enabled: null != n && !n.startsWith("cx_") && null != e && !e.isLoading,
                    queryKey: ["chatgpt-shared-post", n, e?.userId, e?.accountId],
                    queryFn: e => {
                        let {
                            signal: t
                        } = e;
                        return null == n ? Promise.resolve(null) : async function(e, t) {
                            try {
                                let {
                                    post: i
                                } = await h.Request.safeGet("/share/post/resolve/{post_id}", {
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
                                if (t?.throwIfAborted(), !(i instanceof _.a)) throw i;
                                let e = i.diagnosticError;
                                if (e instanceof p.c) {
                                    let t = f.object({
                                        message: f.string().optional(),
                                        reason: f.string().optional(),
                                        code: f.string().optional()
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
                        }(n, t)
                    },
                    gcTime: 0,
                    staleTime: 0,
                    retry: !1,
                    refetchInterval: e => {
                        let t = e.state.data;
                        return !!(t?.status === "ready" && t.post.attachments.some(e => "message_slice" === e.kind && e.messages.some(e => Object.values((0, c.c)(e.metadata)?.widgets ?? {}).some(e => "string" == typeof e?.poll_id && "published" === e.lifecycle)))) && 5e3
                    }
                }
            }),
            T = (0, a.d)(s.a, (e, t) => {
                let {
                    get: i,
                    scope: n
                } = t;
                if (null == e || e.isLoading || null == (0, r.I)("/s/:postId", n.value.pathname)) return null;
                let {
                    data: l,
                    isError: a
                } = i(b, e);
                return l?.status !== "ready" || a ? null : l.post
            }),
            v = (0, a.d)(s.a, (e, t) => {
                let {
                    auth: i,
                    conversationId: n
                } = e, {
                    get: l
                } = t;
                if (null == i || i.isLoading || null !== i.authMethod) return !1;
                let a = l(T, i),
                    r = l(u.Z, n);
                return null != a && r?.kind === "post" && r.forkFromSharedPost && r.post.id === a.id
            }),
            y = (0, a.v)(s.a, e => !1, {
                onMount: (e, t) => {
                    let i = null;
                    return t.watch(n => {
                        let {
                            get: l
                        } = n, {
                            auth: a,
                            conversationId: r
                        } = t.key, o = l(T, a);
                        if (null == o) {
                            let {
                                data: n,
                                isError: o
                            } = l(b, a);
                            null != i && (o || n?.status === "unavailable") && ((0, u.gb)(t, r, i), i = null), e(!1);
                            return
                        }
                        i = o.id, e(null != C(t, o, r))
                    })
                }
            }),
            I = (0, a.u)(s.a, []),
            A = (0, a.u)(s.a, () => null);

        function C(e, t, i) {
            let n = (0, g.a)(t, i);
            return null == n ? null : ((0, u.nb)(e, {
                conversation: n,
                conversationId: i,
                post: t
            }), i)
        }

        function x(e, t, i, n, l, a) {
            let r = t.attachments.find(e => "media_generation" === e.kind && "image_gen" === e.generation_type && (e.id === i.id || null != e.asset_pointer && e.asset_pointer.split("?")[0] === i.src?.split("?")[0]));
            r?.kind === "media_generation" && (0, d.b)(e, {
                image: {
                    ...i,
                    src: r.asset_pointer ?? null,
                    chatGptMessageId: r.message_id ?? i.chatGptMessageId
                },
                conversationId: r.conversation_id,
                entryPoint: n,
                downloadScope: l,
                requestedImageCount: a
            })
        }

        function w(e, t, i) {
            let a = t.attachments[0]?.kind;
            (0, o.a)(e, n.a, {
                postId: t.id,
                attachmentType: a,
                isAuthenticated: i
            }), (0, o.a)(e, l.b, {
                actionType: "CHATGPT_SHARED_POST_RECEIVER_ACTION_TYPE_DOWNLOAD_CLICKED",
                postId: t.id,
                attachmentKind: a,
                legacyStatsigEventName: "chatgpt_share_post_download_clicked"
            })
        }
    }),
    LOXd: (function(e, t, i) {
        var n = i("ASxG"),
            l = i("iKA6"),
            a = i("zSQm");
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
                l = new Map,
                a = new Map,
                r = new Map;
            for (let o of t ?? []) {
                let t = [];
                for (let {
                        webMetadata: r,
                        ...s
                    }
                    of f(e, o)) {
                    let e = l.get(s.sourceKey);
                    if (null == e) e = {
                        ...s,
                        number: i.length + 1
                    }, i.push(e), l.set(e.sourceKey, e), null != r && a.set(e.sourceKey, r);
                    else if (null != r) {
                        let t = a.get(e.sourceKey);
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
                if (l.a.safeParse(t).success) return [];
                let i = s.safeParse(t);
                if (!i.success) return [];
                let n = i.data,
                    a = n.medical_file_reference,
                    r = n.drug_file_reference;
                if (null == a && null == r) return [];
                let o = n.cloud_doc_url ?? n.extra?.cloud_doc_url ?? a?.source_url ?? a?.journal_homepage_url,
                    c = _(o),
                    u = null != r ? "U.S. National Library of Medicine: DailyMed" : a?.journal_name ?? a?.source_label,
                    d = null != r ? "DailyMed" : a?.source_label ?? u,
                    f = e.formatMessage({
                        id: "clinicalCitation.sourceFallback",
                        defaultMessage: "Source",
                        description: "Fallback label for a clinical citation with no title, publisher, or URL"
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
                            l = Number(i[2]),
                            a = Number(i[3]),
                            r = new Date(n, l - 1, a);
                        return r.getFullYear() === n && r.getMonth() === l - 1 && r.getDate() === a ? g(e, r) : t
                    }(e, r.effective_time) : a?.publication_year,
                    authors: a?.authors_display,
                    doi: a?.doi,
                    url: c,
                    iconUrl: _(a?.source_icon_url ?? a?.source_url ?? a?.journal_homepage_url ?? o),
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
                l = _(n.url);
            if (null == l) return;
            let a = n.source_name ?? n.attribution ?? h(l);
            return {
                webMetadata: {
                    title: n.title,
                    sourceName: n.source_name,
                    attribution: n.attribution
                },
                sourceKey: `url:${function(e){let t=e;try{t=new URL(e).toString()}catch{}let i=t.indexOf("?"),n=t.indexOf("#");if(i<0||n>=0&&i>n)return t;let l=n>=0?n:t.length,a=t.slice(i+1,l).split("&"),r=a.filter(e=>{let t=new URLSearchParams(` ? $ {
                    e
                }
                `);return!(t.has("utm_source")||"chatgpt"===t.get("source"))});if(r.length===a.length)return t;let o=r.length>0?` ? $ {
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
                    t.slice(l)
                }
                `}(l)}`,
                title : n.title ?? l,
                displayLabel: n.attribution ?? a ?? n.title ?? l,
                sourceName: a,
                authors: function(e) {
                    let t = e?.map(e => e.trim()).filter(Boolean);
                    if (t?.length) return 1 === t.length ? t[0] : 2 === t.length ? `${t[0]} & ${t[1]}` : `${t[0]}, et al.`
                }(n.authors),
                publicationDateMs: null == n.pub_date ? void 0 : 1e3 * n.pub_date,
                dateDisplay: null == n.pub_date ? void 0 : g(e, new Date(1e3 * n.pub_date)),
                url: l,
                iconUrl: l,
                snippet: n.snippet,
                tags: null == n.tags ? void 0 : [...new Set(n.tags.filter(Boolean))]
            }
        }

        function _(e) {
            if (!(null == e || /^file:\/\//i.test(e))) {
                try {
                    if ("localhost" === new URL(e).hostname) return
                } catch {}
                return (0, a.a)(e)
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
            b: function(e, t, i, n, l) {
                let a = t?.[i];
                if (null == a || "hidden" === a.style || 0 === f(e, a).length) return;
                let r = e => null == n ? l : n[e],
                    o = r(i),
                    s = t?.[i - 1];
                if (null != s && "hidden" !== s.style && null != o && r(i - 1) === o && f(e, s).length > 0 && m(s, a)) return {
                    isLeading: !1,
                    sources: []
                };
                let c = d(e, t),
                    u = new Set,
                    p = a;
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