export const __rspack_esm_ids = [371732];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var i = a("ABep"),
            r = a("Bbed"),
            n = a("N55g");
        let l = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(431630), a.e(589307), a.e(81461), a.e(882456), a.e(145049), a.e(744644), a.e(758939), a.e(114517), a.e(499790), a.e(971634), a.e(301030), a.e(502948), a.e(782496), a.e(909395), a.e(540889), a.e(587936), a.e(904817), a.e(452048), a.e(684598), a.e(299268), a.e(777166), a.e(433520), a.e(212487), a.e(17983), a.e(167649), a.e(509282), a.e(523433), a.e(403815), a.e(471657), a.e(314455), a.e(933668)]).then(a.bind(a, "wvL0"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, i.jsx)(n.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: l
        })
    }),
    KO1w: (function(e, t, a) {
        var i = a("ABep"),
            r = a("Bbed"),
            n = a("vbBn");
        let l = (0, r.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(673131), a.e(877700), a.e(353230), a.e(589307), a.e(81461), a.e(882456), a.e(145049), a.e(744644), a.e(784669), a.e(8197), a.e(328034), a.e(16910), a.e(148673), a.e(349381), a.e(91753), a.e(872469), a.e(114517), a.e(499790), a.e(971634), a.e(301030), a.e(502948), a.e(782496), a.e(909395), a.e(540889), a.e(587936), a.e(904817), a.e(452048), a.e(684598), a.e(299268), a.e(777166), a.e(433520), a.e(212487), a.e(17983), a.e(167649), a.e(509282), a.e(523433), a.e(403815), a.e(889841), a.e(314455), a.e(105716)]).then(a.bind(a, "Ez1q"))).DilResponse, {
            errorFallback: (0, i.jsx)(n.b, {
                stage: "host_error",
                initialization: !0
            })
        });
        a.d(t, {}, {
            DilResponse: l
        })
    }),
    greq: (function(e, t, a) {
        a.d(t, {
            a: () => p,
            b: () => m,
            c: () => g,
            d: () => u
        });
        var i = a("Nl8C"),
            r = a("zd8w"),
            n = a("PFjh"),
            l = a("hJIv"),
            o = a("BolX"),
            s = a("fVOX"),
            d = a("OWtl");
        a("WFY2");
        let c = (0, o.u)(d.a, e => {
            let {
                scope: t
            } = e, a = 0, r = 0, l = (e, a, i) => {
                try {
                    (0, n.c)(t).count("default", "chatgpt.model_written_dil.v2.startup.report_suppressed", {
                        result: e,
                        report_cutoff: a,
                        reason: i,
                        web_frontend: "codex_webview"
                    })
                } catch {}
            }, o = (e, t) => a < 10 || (l(e, t, "page_report_limit"), !1);
            return {
                canPublish: o,
                recordSuppression: l,
                publish: (e, n, d) => {
                    if (!o(n.result, n.report_cutoff)) return !1;
                    try {
                        let o, c = (0, i.h)(n);
                        if (c > i.b ? o = "report_byte_limit" : r + c > 262144 && (o = "page_byte_limit"), null != o) return l(n.result, n.report_cutoff, o), !1;
                        return a++, r += c, t.get(s.a).log({
                            message: e,
                            status: d ? "info" : "error",
                            context: n
                        }), !0
                    } catch {
                        return l(n.result, n.report_cutoff, "observer_error"), !1
                    }
                }
            }
        });

        function u(e) {
            let t, a = (t = (0, n.c)(e), {
                    count: (e, a) => t.count("default", e, {
                        ...a,
                        web_frontend: "codex_webview"
                    }),
                    hist: (e, a, i) => t.hist("default", e, {
                        ...a,
                        web_frontend: "codex_webview"
                    }, i)
                }),
                r = e.get(l.a),
                o = e.get(c),
                s = (0, i.e)(a, {
                    enabled: () => r,
                    reporting: o
                });
            return {
                metrics: a,
                diagnosticsEnabled: r,
                render: (0, i.d)({
                    metrics: a,
                    diagnosticsExpected: r,
                    startupReporting: r ? o : void 0,
                    presentation: s
                }),
                presentation: s
            }
        }
        let m = (0, r.createContext)(null),
            p = (0, r.createContext)(null),
            g = (0, r.createContext)(void 0)
    }),
    vbBn: (function(e, t, a) {
        a.d(t, {
            a: () => j,
            b: () => P
        });
        var i = a("ABep"),
            r = a("QosV"),
            n = a("BolX"),
            l = a("wDWo"),
            o = a("zd8w"),
            s = a("UIU6"),
            d = a("nUGc"),
            c = a("cWXs"),
            u = a("OWtl"),
            m = a("TUMj"),
            p = a("RAbv"),
            g = a("zgGI"),
            h = a("zHp1"),
            f = a("Yscs");
        let _ = new WeakMap,
            v = new WeakMap,
            b = /^image\/(?:jpeg|png|webp|gif)$/i;

        function I(e) {
            let t = e.getAttribute("src"),
                a = e.closest("[data-d-progressive-settled]")?.parentElement?.querySelector("[data-d-progressive-full] img");
            return !t || t.startsWith("data:") || e.srcset || a?.complete && a.naturalWidth > 0 || null != e.closest("picture") || "" === e.getAttribute("alt") || !e.closest('[data-d-component="image"]') || !e.currentSrc || e.currentSrc !== e.src ? null : t
        }

        function y(e) {
            let t = e.dataset.chatgptCopyImageSrc;
            if (null == t) return 0;
            let a = v.get(e);
            return a?.url === e.currentSrc && t === I(e) ? a.bytes : (delete e.dataset.chatgptCopyImageData, delete e.dataset.chatgptCopyImageSrc, v.delete(e), 0)
        }
        var x = a("N55g"),
            S = a("greq");
        let w = new Set;

        function E() {
            for (let e of w) e.presentation.onPageHide()
        }

        function j(e) {
            let t, a, l, d, c, m, p, g, h, f, _, v = (0, r.c)(33),
                {
                    children: b,
                    contentReferenceIndex: I,
                    observationMessageId: y,
                    isPresented: x,
                    isPreparing: j,
                    isStreaming: A,
                    sourceMessageId: T
                } = e,
                L = void 0 === x || x,
                O = (0, n.y)(u.a);
            v[0] !== y || v[1] !== O ? (t = () => ({
                messageId: y,
                observation: (0, S.d)(O)
            }), v[0] = y, v[1] = O, v[2] = t) : t = v[2];
            let [R, M] = (0, o.useState)(t);
            R.messageId !== y && M({
                messageId: y,
                observation: (0, S.d)(O)
            });
            let F = R.observation,
                D = void 0 !== j && j ? null : F;
            v[3] !== L || v[4] !== A || v[5] !== D ? (a = () => {
                D && (D.presentation.updateStreaming(A), D.presentation.setPresented(L))
            }, l = [D, L, A], v[3] = L, v[4] = A, v[5] = D, v[6] = a, v[7] = l) : (a = v[6], l = v[7]), (0, o.useLayoutEffect)(a, l), v[8] !== A || v[9] !== D?.presentation || v[10] !== D?.presentation.attach ? (d = () => D?.presentation.attach(A), v[8] = A, v[9] = D?.presentation, v[10] = D?.presentation.attach, v[11] = d) : d = v[11];
            let k = (0, o.useEffectEvent)(d);
            v[12] !== k || v[13] !== D ? (c = () => {
                if (!D) return;
                let e = k();
                return w.add(D), 1 === w.size && window.addEventListener("pagehide", E, !0), () => {
                    w.delete(D), 0 === w.size && window.removeEventListener("pagehide", E, !0), e?.()
                }
            }, v[12] = k, v[13] = D, v[14] = c) : c = v[14], v[15] !== D ? (m = [D], v[15] = D, v[16] = m) : m = v[16], (0, o.useEffect)(c, m);
            let N = null == I ? void 0 : "contents";
            v[17] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, i.jsx)(P, {}), v[17] = p) : p = v[17];
            let G = D?.render.onHostRenderFailure;
            return v[18] !== b || v[19] !== y || v[20] !== G ? (g = (0, i.jsx)(s.a, {
                name: "ModelWrittenDILV2Renderer",
                resetKey: y,
                fallback: p,
                onError: G,
                children: b
            }), v[18] = b, v[19] = y, v[20] = G, v[21] = g) : g = v[21], v[22] !== I || v[23] !== T || v[24] !== g || v[25] !== N ? (h = (0, i.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": T,
                "data-chatgpt-copy-reference": I,
                "data-markdown-copy": N,
                onLoadCapture: C,
                children: g
            }), v[22] = I, v[23] = T, v[24] = g, v[25] = N, v[26] = h) : h = v[26], v[27] !== D || v[28] !== h ? (f = (0, i.jsx)(S.b.Provider, {
                value: D,
                children: h
            }), v[27] = D, v[28] = h, v[29] = f) : f = v[29], v[30] !== F.render.onPreparationEnd || v[31] !== f ? (_ = (0, i.jsx)(S.a.Provider, {
                value: F.render.onPreparationEnd,
                children: f
            }), v[30] = F.render.onPreparationEnd, v[31] = f, v[32] = _) : _ = v[32], _
        }

        function C(e) {
            e.target instanceof HTMLImageElement && async function(e, t) {
                if (y(t) > 0) return;
                let a = I(t);
                if (!a) return;
                let i = URL.parse(t.currentSrc);
                if (null == i || i.origin !== e.ownerDocument.location.origin || !["blob:", "https:", "http:"].includes(i.protocol)) return;
                let r = (_.get(e) ?? Promise.resolve()).then(() => (async function(e, t, a, i) {
                    let r = () => e.contains(t) && a === I(t) && i.href === t.currentSrc;
                    try {
                        let n;
                        if (!r() || y(t) > 0) return;
                        let l = p.a;
                        for (let t of e.querySelectorAll("img[data-chatgpt-copy-image-src]")) l -= y(t);
                        let o = Math.min(524288, l);
                        if (o <= 0) return;
                        if ("blob:" === i.protocol) n = (0, h.f)(i.href);
                        else {
                            let e = await fetch(i, {
                                cache: "only-if-cached",
                                mode: "same-origin",
                                redirect: "error"
                            });
                            if (!e.ok || !b.test(e.headers.get("content-type") ?? "")) return;
                            n = await (0, g.a)(e, o)
                        }
                        if (null == n || !b.test(n.type) || 0 === n.size || n.size > o) return;
                        let s = await (0, f.a)(n);
                        r() && (t.dataset.chatgptCopyImageSrc = a, t.dataset.chatgptCopyImageData = s, v.set(t, {
                            bytes: n.size,
                            url: i.href
                        }))
                    } catch {}
                })(e, t, a, i));
                return _.set(e, r), r
            }(e.currentTarget, e.target)
        }

        function P(e) {
            let t, a, n, s = (0, r.c)(11),
                {
                    savedAnswer: u,
                    stage: p,
                    errorClass: g,
                    initialization: h
                } = e,
                f = void 0 !== h && h,
                _ = (0, o.useContext)(S.b),
                v = (0, m.d)(),
                b = (0, o.useContext)(d.a);
            if (s[0] !== f || s[1] !== _ || s[2] !== p ? (t = () => {
                    null != p && _?.render.onTerminalFailure(p), _?.render.onFallbackResult("shown", p), _?.presentation.reportRootFailure(f)
                }, a = [_, p, f], s[0] = f, s[1] = _, s[2] = p, s[3] = t, s[4] = a) : (t = s[3], a = s[4]), (0, o.useEffect)(t, a), s[5] !== g || s[6] !== b || s[7] !== u || s[8] !== p || s[9] !== v?.contentReferences) {
                let e = b || u?.source_message_status !== "finished_successfully" ? "" : (0, l.i)((0, l.e)(u) ?? "", v?.contentReferences ?? [], {
                    isStreaming: !1
                });
                n = e.trim() ? (0, i.jsx)(c.Markdown, {
                    externalResourcePolicy: "restricted",
                    textStyle: {
                        kind: "assistant-message"
                    },
                    children: e
                }) : (0, i.jsx)(x.a, {
                    stage: p,
                    errorClass: g
                }), s[5] = g, s[6] = b, s[7] = u, s[8] = p, s[9] = v?.contentReferences, s[10] = n
            } else n = s[10];
            return n
        }
    }),
    erFs: (function(e, t, a) {
        a.d(t, {
            a: () => $,
            b: () => Z
        });
        var i = a("FS1B"),
            r = a("BOYb"),
            n = a("Cslg"),
            l = a("X6Vn"),
            o = a("yGJW"),
            s = a("O666"),
            d = a("LulU"),
            c = a("k5RO"),
            u = a("cQW3"),
            m = a("Tywu"),
            p = a("ABep"),
            g = a("QosV");
        let h = {
            $type: "protobuf_analytics_events.v1.ChatgptImagegenPromptSharingAction"
        };
        var f = a("T0Rc"),
            _ = a("BolX"),
            v = a("zd8w"),
            b = a("Wf1j"),
            I = a("oyxz"),
            y = a("EShr"),
            x = a("OWtl"),
            S = a("hZax"),
            w = a("eShZ"),
            E = a("lBzi"),
            j = a("r9i9"),
            C = a("tdfh"),
            P = a("aFoA"),
            A = a("OOaz"),
            T = a("dQRk"),
            L = a("jfiJ"),
            O = a("Sm6l"),
            R = a("bf6R"),
            M = a("MM0V"),
            F = a("JNtf"),
            D = a("mUDD");

        function k(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var N = a("zLIa");

        function G(e) {
            let t, a, i, r, n, l, o, s = (0, g.c)(19),
                {
                    content: d,
                    onChange: c,
                    disabled: u,
                    autoFocus: m
                } = e,
                h = void 0 !== u && u,
                f = void 0 !== m && m;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, p.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-title",
                children: (0, p.jsx)(I.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title"
                })
            }), s[0] = t) : t = s[0], s[1] !== d || s[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), s[1] = d, s[2] = c, s[3] = a) : a = s[3], s[4] !== f || s[5] !== d.title || s[6] !== a ? (i = (0, p.jsxs)(D.f, {
                children: [t, (0, p.jsx)(N.c, {
                    id: "image-prompt-title",
                    autoFocus: f,
                    name: "title",
                    variant: "compact",
                    required: !0,
                    rows: 1,
                    maxLength: 400,
                    value: d.title,
                    onChange: a
                })]
            }), s[4] = f, s[5] = d.title, s[6] = a, s[7] = i) : i = s[7], s[8] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, p.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, p.jsx)(I.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt"
                })
            }), s[8] = r) : r = s[8], s[9] !== d || s[10] !== c ? (n = e => c({
                ...d,
                prompt: e.target.value
            }), s[9] = d, s[10] = c, s[11] = n) : n = s[11], s[12] !== d.prompt || s[13] !== n ? (l = (0, p.jsxs)(D.f, {
                children: [r, (0, p.jsx)(N.c, {
                    id: "image-prompt-text",
                    name: "prompt",
                    variant: "compact",
                    required: !0,
                    rows: 2,
                    maxLength: 2e5,
                    value: d.prompt,
                    onChange: n
                })]
            }), s[12] = d.prompt, s[13] = n, s[14] = l) : l = s[14], s[15] !== h || s[16] !== i || s[17] !== l ? (o = (0, p.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [i, l]
            }), s[15] = h, s[16] = i, s[17] = l, s[18] = o) : o = s[18], o
        }

        function W(e) {
            let t, a, i, r, n, l, o, s, d, c, u, m, h, f, _, y, x, S, E, j, C = (0, g.c)(54),
                {
                    content: P,
                    onSave: A,
                    onClose: T,
                    onCloseAutoFocus: L
                } = e,
                N = (0, b.a)(),
                [W, H] = (0, v.useState)(P),
                [B, z] = (0, v.useState)(!1),
                [q, U] = (0, v.useState)(null);
            C[0] !== W || C[1] !== B || C[2] !== T || C[3] !== A ? (t = async function() {
                if (!B && k(W)) {
                    z(!0), U(null);
                    try {
                        await A(W), T()
                    } catch (e) {
                        U(e instanceof w.FetchError && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    z(!1)
                }
            }, C[0] = W, C[1] = B, C[2] = T, C[3] = A, C[4] = t) : t = C[4];
            let V = t,
                K = !B;
            return C[5] !== L ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: L
            }, C[5] = L, C[6] = a) : a = C[6], C[7] !== B || C[8] !== T ? (i = e => {
                e || B || T()
            }, C[7] = B, C[8] = T, C[9] = i) : i = C[9], C[10] !== V ? (r = e => {
                e.preventDefault(), e.stopPropagation(), V()
            }, C[10] = V, C[11] = r) : r = C[11], C[12] !== N ? (n = N.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back"
            }), C[12] = N, C[13] = n) : n = C[13], C[14] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, p.jsx)(R.bc, {}), C[14] = l) : l = C[14], C[15] !== B || C[16] !== T || C[17] !== n ? (o = (0, p.jsx)(O.a, {
                color: "ghost",
                size: "icon",
                disabled: B,
                "aria-label": n,
                onClick: T,
                children: l
            }), C[15] = B, C[16] = T, C[17] = n, C[18] = o) : o = C[18], C[19] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, p.jsx)(D.d, {
                title: (0, p.jsx)(F.e, {
                    children: (0, p.jsx)(I.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt"
                    })
                })
            }), C[19] = s) : s = C[19], C[20] !== o ? (d = (0, p.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [o, s]
            }), C[20] = o, C[21] = d) : d = C[21], C[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                H(e), U(null)
            }, C[22] = c) : c = C[22], C[23] !== W || C[24] !== B ? (u = (0, p.jsx)(D.e, {
                spacing: "large",
                children: (0, p.jsx)(G, {
                    content: W,
                    disabled: B,
                    autoFocus: !0,
                    onChange: c
                })
            }), C[23] = W, C[24] = B, C[25] = u) : u = C[25], C[26] !== q ? (m = null != q && (0, p.jsx)(D.e, {
                children: (0, p.jsx)(M.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === q ? (0, p.jsx)(I.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again."
                    }) : (0, p.jsx)(I.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again."
                    })
                })
            }), C[26] = q, C[27] = m) : m = C[27], C[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, p.jsx)(I.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel"
            }), C[28] = h) : h = C[28], C[29] !== B || C[30] !== T ? (f = (0, p.jsx)(O.a, {
                color: "outline",
                disabled: B,
                onClick: T,
                children: h
            }), C[29] = B, C[30] = T, C[31] = f) : f = C[31], C[32] !== W || C[33] !== B ? (_ = !k(W) || B, C[32] = W, C[33] = B, C[34] = _) : _ = C[34], C[35] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, p.jsx)(I.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save"
            }), C[35] = y) : y = C[35], C[36] !== B || C[37] !== _ ? (x = (0, p.jsx)(O.a, {
                type: "submit",
                color: "primary",
                loading: B,
                disabled: _,
                children: y
            }), C[36] = B, C[37] = _, C[38] = x) : x = C[38], C[39] !== f || C[40] !== x ? (S = (0, p.jsxs)(D.c, {
                expandSingleButton: !1,
                children: [f, x]
            }), C[39] = f, C[40] = x, C[41] = S) : S = C[41], C[42] !== d || C[43] !== u || C[44] !== m || C[45] !== S || C[46] !== r ? (E = (0, p.jsxs)(D.b, {
                as: "form",
                size: "viewport",
                onSubmit: r,
                children: [d, u, m, S]
            }), C[42] = d, C[43] = u, C[44] = m, C[45] = S, C[46] = r, C[47] = E) : E = C[47], C[48] !== B || C[49] !== K || C[50] !== E || C[51] !== a || C[52] !== i ? (j = (0, p.jsx)(F.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: K,
                shouldIgnoreClickOutside: B,
                contentProps: a,
                onOpenChange: i,
                children: E
            }), C[48] = B, C[49] = K, C[50] = E, C[51] = a, C[52] = i, C[53] = j) : j = C[53], j
        }

        function H(e) {
            let t, a, i, r, n, l, o, s, d, c, u, m = (0, g.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: _,
                    disabled: I,
                    onSave: y
                } = e,
                x = (0, b.a)(),
                [S, w] = (0, v.useState)(!1),
                E = (0, v.useRef)(null);
            return m[0] !== _ || m[1] !== f ? (t = null != f && (0, p.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: _,
                src: f,
                referrerPolicy: "no-referrer"
            }), m[0] = _, m[1] = f, m[2] = t) : t = m[2], m[3] !== x ? (a = x.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt"
            }), m[3] = x, m[4] = a) : a = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => w(!0), r = (0, p.jsx)(R.ag, {}), m[5] = i, m[6] = r) : (i = m[5], r = m[6]), m[7] !== I || m[8] !== a ? (n = (0, p.jsx)(O.a, {
                ref: E,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: I,
                "aria-label": a,
                onClick: i,
                children: r
            }), m[7] = I, m[8] = a, m[9] = n) : n = m[9], m[10] !== t || m[11] !== n ? (l = (0, p.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, n]
            }), m[10] = t, m[11] = n, m[12] = l) : l = m[12], m[13] !== h.title ? (o = (0, p.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: h.title
            }), m[13] = h.title, m[14] = o) : o = m[14], m[15] !== h.prompt ? (s = (0, p.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: h.prompt
            }), m[15] = h.prompt, m[16] = s) : s = m[16], m[17] !== l || m[18] !== o || m[19] !== s ? (d = (0, p.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [l, o, s]
            }), m[17] = l, m[18] = o, m[19] = s, m[20] = d) : d = m[20], m[21] !== h || m[22] !== S || m[23] !== y ? (c = S && (0, p.jsx)(W, {
                content: h,
                onSave: y,
                onClose: () => w(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), E.current?.focus()
                }
            }), m[21] = h, m[22] = S, m[23] = y, m[24] = c) : c = m[24], m[25] !== c || m[26] !== d ? (u = (0, p.jsxs)(p.Fragment, {
                children: [d, c]
            }), m[25] = c, m[26] = d, m[27] = u) : u = m[27], u
        }
        var B = a("AuIy"),
            z = a("iqEK"),
            q = a("ccwJ"),
            U = a("tOYk"),
            V = a("Kwur");
        let K = (0, _.v)(x.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function Q(e, t, a) {
            X(e, t);
            let i = t.assetPointer,
                r = t.messageId;
            if (null == i || null == r) throw Error("Image prompt share source unavailable");
            let n = e.get(K, t);
            if (null != n.publication) return n.publication;
            let l = n.idempotencyKey ?? crypto.randomUUID();
            e.set(K, t, {
                ...n,
                idempotencyKey: l
            });
            try {
                let s = await e.queryClient.fetchQuery({
                    queryKey: ["image-prompt-share-publication", t, l],
                    staleTime: 1 / 0,
                    gcTime: 1 / 0,
                    retry: !1,
                    queryFn: async () => {
                        let s = await V.Request.safePost("/share/prompt-share", {
                            isExpectedError: Y,
                            requestBody: {
                                idempotency_key: l,
                                conversation_id: t.conversationId,
                                message_id: r,
                                output_asset_pointer: i,
                                post_text: a.title,
                                published_content: n.editedContent ?? void 0
                            }
                        });
                        X(e, t);
                        let d = n.editedContent ?? a;
                        try {
                            d.prompt !== a.prompt && (0, o.a)(e, U.a, {
                                postId: s.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_PROMPT"
                            }), d.title.trim() !== a.title.trim() && (0, o.a)(e, U.a, {
                                postId: s.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_TITLE"
                            })
                        } catch {}
                        return s
                    }
                });
                return X(e, t), e.set(K, t, e => ({
                    ...e,
                    publication: s
                })), s
            } catch (a) {
                throw a instanceof w.FetchError && Y(a) && e.set(K, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }

        function X(e, t) {
            if (null == t.accountId || null == t.userId || e.get(n.f) !== t.accountId || e.get(n.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function Y(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function J(e) {
            let t, a, i, r, l, s, d, c, u, m, O, R, M, F, D = (0, g.c)(69),
                N = (0, _.y)(x.a),
                G = (0, b.a)(),
                W = (0, _.z)(n.f),
                U = (0, _.z)(n.j);
            D[0] !== W || D[1] !== U ? (t = {
                accountId: W,
                userId: U
            }, D[0] = W, D[1] = U, D[2] = t) : t = D[2];
            let [J] = (0, v.useState)(t), $ = (0, S.f)("1939400492"), Z = (0, S.j)("250422953"), [ee, et] = (0, v.useState)("image");
            D[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {}, D[3] = a) : a = D[3];
            let [ea] = (0, v.useState)(a), ei = e.image, er = ei?.item.isAnimated === !0, en = J.accountId === W && J.userId === U, el = null != ei && !ei.additionalImages?.length && null != W && null != U && en && !$, eo = e.mobileImagePromptShareTreatment;
            D[4] !== el || D[5] !== Z || D[6] !== eo ? (i = el && ("prompt-with-image" === eo || null == eo && Z.get("imagegen_prompt_share_tabs_enabled", !1)), D[4] = el, D[5] = Z, D[6] = eo, D[7] = i) : i = D[7];
            let es = i,
                ed = ei?.item.id;
            D[8] !== W || D[9] !== e.serverConversationId || D[10] !== ed || D[11] !== U ? (r = ["image-prompt-share-source", W, U, e.serverConversationId, ed], D[8] = W, D[9] = e.serverConversationId, D[10] = ed, D[11] = U, D[12] = r) : r = D[12], D[13] !== ei || D[14] !== e.serverConversationId || D[15] !== N ? (l = async t => {
                let {
                    signal: a
                } = t;
                if (null == ei) return null;
                let i = (0, A.c)(e.serverConversationId),
                    r = N.get(P.a, i) ?? i,
                    n = () => {
                        let e = N.get(T.N, r) ?? N.query.getData(E.chatGptConversationQueryById$, i)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, q.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, i] = a, r = a[1].message, n = (0, q.b)(r, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (n?.src == null || "completed" !== n.status || !(0, z.d)(n.src)) return null;
                            let l = (0, B.b)({
                                mapping: e.mapping,
                                current_node: i?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == l || (0, B.n)(l)) return null;
                            let o = (0, B.s)(r.content),
                                s = (Array.isArray(o?.parts) ? o.parts : []).map(B.s).find(e => e?.asset_pointer === n.src || (0, B.s)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, B.s)(s?.image_asset_pointer) ?? s,
                                c = (0, B.i)((0, B.s)((0, B.s)(d?.metadata)?.dalle)?.prompt) ?? (0, B.i)((0, B.e)(l)),
                                u = (0, B.i)(r.id);
                            return null == c || null == u ? null : {
                                assetPointer: n.src,
                                messageId: u,
                                content: {
                                    title: Array.from(n.chatGptDisplayTitle?.trim() || c).slice(0, 200).join(""),
                                    prompt: c
                                }
                            }
                        }({
                            mapping: e
                        }, ei.item)
                    },
                    l = n();
                return null != l ? l : (await (0, L.a)(N, i, a), n())
            }, D[13] = ei, D[14] = e.serverConversationId, D[15] = N, D[16] = l) : l = D[16], D[17] !== r || D[18] !== l || D[19] !== es ? (s = {
                enabled: es,
                queryKey: r,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: l
            }, D[17] = r, D[18] = l, D[19] = es, D[20] = s) : s = D[20];
            let {
                data: ec
            } = (0, f.a)(s), eu = ec?.messageId ?? null, em = ec?.assetPointer ?? null;
            D[21] !== W || D[22] !== e.serverConversationId || D[23] !== eu || D[24] !== em || D[25] !== U ? (d = {
                accountId: W,
                userId: U,
                conversationId: e.serverConversationId,
                messageId: eu,
                assetPointer: em
            }, D[21] = W, D[22] = e.serverConversationId, D[23] = eu, D[24] = em, D[25] = U, D[26] = d) : d = D[26];
            let ep = d,
                {
                    editedContent: eg,
                    publication: eh,
                    revision: ef
                } = (0, _.x)(K, ep),
                e_ = es && null != ec,
                ev = e_ && null == eo && "image_with_prompt" === Z.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                eb = e_ && "template" === ee;
            D[27] !== eg || D[28] !== eh?.title || D[29] !== ec ? (c = eg ?? (null == ec ? void 0 : {
                ...ec.content,
                title: eh?.title ?? ec.content.title
            }), D[27] = eg, D[28] = eh?.title, D[29] = ec, D[30] = c) : c = D[30];
            let eI = c;
            D[31] !== J.accountId || D[32] !== J.userId || D[33] !== N ? (u = function() {
                if (N.get(n.f) !== J.accountId || N.get(n.j) !== J.userId) throw Error("Image prompt share account changed")
            }, D[31] = J.accountId, D[32] = J.userId, D[33] = N, D[34] = u) : u = D[34];
            let ey = u;
            D[35] !== eI || D[36] !== ei || D[37] !== e.source || D[38] !== ey || D[39] !== N || D[40] !== ep || D[41] !== ec ? (m = async function(t) {
                let a;
                if (ey(), null == ec || null == eI || !k(eI)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await Q(N, ep, ec.content)
                } catch (e) {
                    if (e instanceof w.FetchError && "prompt_share_not_publishable" === e.errorCode) throw new j.a;
                    throw e
                }
                if (ey(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, o.a)(N, h, {
                        action: "tap_send_to",
                        entryPoint: t,
                        tapTarget: "copy_link",
                        shareType: "prompt_with_generated_image",
                        promptShareId: a.prompt_share_id,
                        originalGenerationId: ei?.item.chatGptGenerationId
                    })
                }
                return {
                    shareLinkId: a.post_id,
                    shareLinkUrl: `https://chatgpt.com/s/${encodeURIComponent(a.post_id)}`,
                    isWorkspaceOnly: !1,
                    title: a.title
                }
            }, D[35] = eI, D[36] = ei, D[37] = e.source, D[38] = ey, D[39] = N, D[40] = ep, D[41] = ec, D[42] = m) : m = D[42];
            let ex = m;
            if (D[43] !== er || D[44] !== ev ? (O = er ? (0, p.jsx)(I.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt"
                }) : "image_with_prompt" === ev ? (0, p.jsx)(I.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt"
                }) : (0, p.jsx)(I.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image"
                }), D[43] = er, D[44] = ev, D[45] = O) : O = D[45], !en) return null;
            let eS = eb ? "template" : "image";
            return D[46] !== G || D[47] !== er || D[48] !== ee || D[49] !== O || D[50] !== e_ ? (R = e_ ? e => (0, p.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, p.jsx)(y.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: ee,
                    onSelect: et,
                    ariaLabel: G.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: er ? (0, p.jsx)(I.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only"
                        }) : (0, p.jsx)(I.a, {
                            id: "imagePromptShare.imageOnly",
                            defaultMessage: "Image only"
                        })
                    }, {
                        id: "template",
                        disabled: e,
                        label: O
                    }]
                })
            }) : void 0, D[46] = G, D[47] = er, D[48] = ee, D[49] = O, D[50] = e_, D[51] = R) : R = D[51], D[52] !== eI || D[53] !== ex || D[54] !== ei?.alt || D[55] !== ey || D[56] !== ef || D[57] !== N || D[58] !== ep || D[59] !== ec || D[60] !== ev || D[61] !== eb ? (M = eb && null != eI ? {
                label: ev,
                revision: ef,
                createLink: ex,
                actionsDisabled: !k(eI),
                preview: (e, t, a) => (0, p.jsx)(H, {
                    content: eI,
                    previewSrc: t,
                    alt: ei?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (ey(), null == ec) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== eI.title.trim() || e.prompt !== eI.prompt) && await async function(e, t, a, i) {
                            X(e, t);
                            let r = e.get(K, t),
                                n = null == r.idempotencyKey ? r.publication : await Q(e, t, a),
                                l = i;
                            if (null != n) {
                                let e = await V.Request.safePatch("/share/post/{post_id}/prompt-share", {
                                    isExpectedError: Y,
                                    parameters: {
                                        path: {
                                            post_id: n.post_id
                                        }
                                    },
                                    requestBody: i
                                });
                                l = {
                                    title: e.title,
                                    prompt: e.prompt
                                }
                            }
                            X(e, t), e.set(K, t, e => ({
                                ...e,
                                editedContent: l,
                                publication: null == e.publication ? null : {
                                    ...e.publication,
                                    title: l.title
                                },
                                revision: e.revision + 1
                            }))
                        }(N, ep, ec.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), ey(), a()
                    }
                })
            } : void 0, D[52] = eI, D[53] = ex, D[54] = ei?.alt, D[55] = ey, D[56] = ef, D[57] = N, D[58] = ep, D[59] = ec, D[60] = ev, D[61] = eb, D[62] = M) : M = D[62], D[63] !== ea || D[64] !== e || D[65] !== eS || D[66] !== R || D[67] !== M ? (F = (0, p.jsx)(C.a, {
                ...e,
                mobileImageRowScrollPositions: ea,
                imageShareOptions: R,
                imagePromptTemplate: M
            }, eS), D[63] = ea, D[64] = e, D[65] = eS, D[66] = R, D[67] = M, D[68] = F) : F = D[68], F
        }

        function $(e, t) {
            let a, {
                    additionalImages: d,
                    alt: p,
                    downloadAnalyticsImage: g,
                    downloadIsParagen: h,
                    image: f,
                    isDirectLightboxShare: _,
                    previewSrc: v,
                    serverConversationId: b,
                    source: I = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    title: y
                } = t,
                x = crypto.randomUUID(),
                S = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    conversationId: b,
                    shareSessionId: x,
                    source: I
                };
            (0, o.a)(e, i.i, {
                ...S,
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED"
            });
            let w = e.get(n.f),
                E = e.get(n.j),
                j = (0, r.d)(),
                C = j && null != w && null != E ? (0, c.h)(e.get(s.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                P = e.get(n.e),
                A = "loaded" === P.status && "personal" === P.structure || "loading" === P.status && "personal" === P.structureAtLogin,
                T = null == C ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: C,
                    isMobileBrowser: j,
                    isPersonalAccount: A
                }),
                L = () => e.get(n.f) === w && e.get(n.j) === E,
                O = t => {
                    !t.isWorkspaceOnly && t.shareLinkId !== a && L() && (a = t.shareLinkId, (0, o.a)(e, i.i, {
                        ...S,
                        action: "CHATGPT_SHARE_FLOW_ACTION_POST_LINK_PREPARED",
                        shareId: t.shareLinkId
                    }))
                },
                R = {
                    additionalImages: d,
                    alt: p,
                    downloadAnalyticsImage: g,
                    downloadIsParagen: h,
                    isDirectLightboxShare: _,
                    item: f,
                    previewSrc: v
                },
                M = () => (0, l.f)(e, J, {
                    currentNodeId: f.id,
                    image: R,
                    serverConversationId: b,
                    shareSessionId: x,
                    source: I,
                    title: y,
                    mobileImageExperience: T,
                    mobileImagePromptShareTreatment: C?.promptShareTreatment,
                    onImageShareLinkPrepared: null == C ? void 0 : O,
                    trackMobileImageShareLifecycle: j && C?.kind === "native"
                });
            j && C?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, b, R);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void M();
                    if (!L()) return;
                    if (!A) return void M();
                    O(a);
                    let i = await (0, m.b)(e, a, b, x, I);
                    if ("shared" === i || "cancelled" === i) return
                } catch {}
                L() && M()
            }(): M()
        }
        async function Z(e, t) {
            if (!t.src?.startsWith("data:image/gif")) return t;
            let {
                uploadChatGptConversationFile: i
            } = await Promise.resolve().then(a.bind(a, "uLW7")), {
                file: r
            } = (0, d.a)(t.src, "animation.gif"), n = await i(e, r, {
                storeInLibrary: !1
            });
            return {
                ...t,
                src: `sediment://${n.id}`
            }
        }
    }),
    Tw2n: (function(e, t, a) {
        var i = a("mBJV"),
            r = a("BolX"),
            n = a("Vi6J"),
            l = a("ASxG"),
            o = a("maWI"),
            s = a("Cslg"),
            d = a("yGJW"),
            c = a("OWtl"),
            u = a("dQRk"),
            m = a("srYL");
        let p = (0, r.v)(c.a, e => ({})),
            g = l.object({
                async_completion_id: l.string().nullish()
            }),
            h = l.object({
                content_type: l.literal("image_asset_pointer"),
                asset_pointer: l.string(),
                height: l.number(),
                metadata: l.object({
                    generation: l.object({
                        height: l.number()
                    }),
                    is_no_auth_placeholder: l.boolean().nullish()
                })
            });

        function f(e, t, a) {
            let r, n, {
                    element: l,
                    isCurrentImage: c,
                    assetPointer: u
                } = t,
                m = l.ownerDocument,
                g = !1,
                h = () => {
                    let t;
                    if (g || !l.isConnected || !l.complete || 0 === l.naturalWidth || !c() || null == n) return;
                    let a = e.get(s.m),
                        {
                            userId: r
                        } = a;
                    if (a.authLoading || "chatgpt" !== a.authMethod || !r || a.authenticatedAccountId !== n.accountId) return;
                    let {
                        accountId: h,
                        conversationId: _,
                        messageId: v,
                        asyncCompletionId: b,
                        isDelayed: I
                    } = n, y = null == u ? void 0 : (0, o.b)(m);
                    if (null != y && null != u) {
                        if ("allowed" !== e.get(d.c).getAnalyticsAdmission()) return;
                        t = function(e, t, a, r, n, l) {
                            let {
                                conversationId: s,
                                messageId: c,
                                accountId: u,
                                asyncCompletionId: m
                            } = r, p = JSON.stringify([s, l, u, c, n]), g = t.firstLoads.get(p);
                            if (null != g) return g;
                            let h = t.loads.get(a);
                            if (null == h || h.src !== a.src) return;
                            let f = new Set;
                            t.firstLoads.set(p, {
                                status: "pending",
                                onSettled: f
                            });
                            let _ = r => {
                                let n = e.get(d.c),
                                    g = crypto.randomUUID();
                                (0, d.a)(e, i.Mb, {
                                    conversationId: s,
                                    messageId: c,
                                    asyncCompletionId: m,
                                    resultLoadId: g,
                                    ...h.timing
                                }, i => {
                                    let l = e.get(d.c);
                                    if ("sent" !== i.status && r && l !== n && "allowed" === l.getAnalyticsAdmission() && (0, o.b)(a.ownerDocument) === t) return void _(!1);
                                    let s = "sent" === i.status ? g : void 0;
                                    for (let e of (null == s ? t.firstLoads.delete(p) : t.firstLoads.set(p, {
                                            status: "sent",
                                            id: s
                                        }), f)) e(s);
                                    f.clear()
                                }, void 0, {
                                    expectedUserId: l,
                                    expectedAccountId: u
                                })
                            };
                            return _(!0), t.firstLoads.get(p)
                        }(e, y, l, n, u, r)
                    }
                    if ("visible" !== m.visibilityState) return;
                    let x = JSON.stringify([r, h, null == b ? "message" : "async", b ?? v]),
                        S = e.get(p, _)[x];
                    if ("viewed" === S) return void f();
                    if ("pending" === S) return;
                    e.set(p, _, e => ({
                        ...e,
                        [x]: "pending"
                    }));
                    let w = new Date(Date.now()).toISOString(),
                        E = t => {
                            e.set(p, _, e => {
                                if (t) return {
                                    ...e,
                                    [x]: "viewed"
                                };
                                let a = {
                                    ...e
                                };
                                return delete a[x], a
                            }), t && f()
                        },
                        j = t => {
                            null != y && (0, o.b)(m) !== y ? E(!1) : (0, d.a)(e, i.Nb, {
                                conversationId: _,
                                messageId: v,
                                asyncCompletionId: b,
                                isDelayed: I,
                                ...t && {
                                    resultLoadId: t
                                }
                            }, e => E("sent" === e.status), void 0, null == y ? void 0 : {
                                expectedUserId: r,
                                expectedAccountId: h,
                                eventCreatedAt: w
                            })
                        };
                    t?.status === "pending" ? t.onSettled.add(j) : j(t?.id)
                };

            function f() {
                g || (g = !0, r?.(), m.removeEventListener("visibilitychange", h), l.removeEventListener("load", h))
            }
            return m.addEventListener("visibilitychange", h), l.addEventListener("load", h), r = e.watch(e => {
                let {
                    get: t
                } = e;
                t(s.m), t(d.c), n = a(t), h()
            }), g && r(), f
        }
        a.d(t, {}, {
            a: function(e, t) {
                let {
                    conversationId: a,
                    messageId: i,
                    assetPointer: r,
                    element: l,
                    nativeLoad: d,
                    isCurrentImage: c
                } = t;
                return d && (0, o.a)(l), f(e, {
                    element: l,
                    isCurrentImage: c,
                    assetPointer: r
                }, e => {
                    let t = e(s.m).authenticatedAccountId,
                        l = e(u.j, a),
                        o = e(u.N, a)?.[i]?.message,
                        d = e(u._, a),
                        c = function(e, t) {
                            if (e?.author.role !== "tool" || !(0, n.b)(e.author.name) || "multimodal_text" !== e.content.content_type || e.metadata?.is_visually_hidden_from_conversation) return;
                            let a = e.metadata?.image_gen_delayed;
                            if (null != a && !(0, m.c)(e)) return;
                            let i = g.safeParse(e.metadata).data,
                                r = i?.async_completion_id ?? void 0;
                            if (e.content.parts.some(e => {
                                    let a = h.safeParse(e);
                                    return a.success && a.data.asset_pointer === t && !a.data.metadata.is_no_auth_placeholder && a.data.metadata.generation.height >= a.data.height
                                })) return {
                                asyncCompletionId: r,
                                isDelayed: null != a
                            }
                        }(o, r);
                    if (t && l && null == d && c) return {
                        accountId: t,
                        conversationId: l,
                        messageId: i,
                        ...c
                    }
                })
            },
            b: function(e, t) {
                let {
                    result: a,
                    element: i,
                    isCurrentImage: r
                } = t;
                return f(e, {
                    element: i,
                    isCurrentImage: r
                }, () => a)
            }
        })
    }),
    tf6h: (function(e, t, a) {
        var i = a("HFi9"),
            r = a.n(i),
            n = a("KUdL"),
            l = a.n(n),
            o = a("BolX"),
            s = a("iqEK"),
            d = a("Cslg"),
            c = a("s5Ri"),
            u = a("YITL"),
            m = a("OWtl"),
            p = a("tSEg"),
            g = a("dQRk"),
            h = a("uR23");
        let f = (0, o.v)(p.a, e => null),
            _ = (0, o.d)(m.a, (e, t) => {
                var a;
                let i, {
                    get: n
                } = t;
                if (null == e || !n(u.c) || null != n(g.$, e)) return null;
                let o = n(g.j, e),
                    s = n(d.f),
                    c = n(h.b);
                if (null == o || null == s || null == c) return null;
                let {
                    data: m
                } = n(h.a, {
                    accountId: s,
                    allowRequestUserFallback: !0,
                    userId: c,
                    serverConversationId: o,
                    conversationId: e
                });
                return {
                    versions: (a = m ?? [], i = l()(a.filter(y), e => Date.parse(e.record_creation_time)), new Map(Object.entries(r()(i, e => e.image_edit.source_file_id)))),
                    listedDocuments: null == m ? void 0 : {
                        conversationId: o,
                        ids: new Set(m.map(e => e.id))
                    }
                }
            });

        function v(e, t) {
            return null != t && t.id !== t.sourceImageId ? e.find(e => e.id === t.sourceImageId) : void 0
        }

        function b(e, t) {
            let a = (0, s.d)(e.src ?? "");
            return "completed" !== e.status || e.isPreview || null == a ? [] : t.get(a) ?? []
        }

        function I(e, t) {
            return (0, c.a)(e, t.id, t.file_id, t.image_edit.snapshot_version, t.file_size_bytes, t.width ?? e.width, t.height ?? e.height)
        }

        function y(e) {
            return "image_layers" === e.library_artifact_type && e.image_edit?.snapshot_version != null
        }
        a.d(t, {}, {
            a: _,
            b: v,
            c: function(e, t) {
                return e.flatMap(e => [e, ...b(e, t).map(t => I(e, t))])
            },
            d: function(e, t, a) {
                if (null == t || a?.id === e.id) return e;
                let i = b(e, t),
                    r = i.find(e => e.id === a?.id) ?? i.at(-1);
                return null == r ? e : I(e, r)
            },
            e: function(e, t, a) {
                return null != v(e, a) || null != t && e.some(e => b(e, t).length > 0)
            },
            f: f
        })
    }),
    s5Ri: (function(e, t, a) {
        var i = a("zMIV"),
            r = a.n(i),
            n = a("iqEK");

        function l(e, t) {
            for (let a of e) {
                let e = a.images.findIndex(t);
                if (e >= 0) return {
                    group: a,
                    index: e,
                    image: a.images[e]
                }
            }
        }

        function o(e, t, a, i, r) {
            let n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e.width,
                l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e.height;
            return {
                type: "generated-image",
                status: "completed",
                id: t,
                src: s(a),
                width: n,
                height: l,
                sizeBytes: r,
                chatGptImageMetadata: {
                    mimeType: "image/png"
                },
                layerRevision: {
                    version: i,
                    sourceImageId: e.layerRevision?.sourceImageId ?? e.id
                }
            }
        }

        function s(e) {
            return e.startsWith("file-") ? `file-service://${e}` : `sediment://${e}`
        }
        a.d(t, {}, {
            a: o,
            b: function(e, t, a, i, d) {
                let c = e.map(e => ({
                    ...e,
                    images: e.images.map(e => e.loading || null == e.textEditingOperationId || t.some(t => t.id === e.textEditingOperationId) ? e : r()(e, ["textEditingOperationId", "textEditingSourceImageId", "textEditingConversationImageId", "textEditingOriginalImageId", "textEditingStatus", "textEditingVersion"]))
                }));
                for (let e of t) {
                    let {
                        documentId: t,
                        imageFileId: r
                    } = e;
                    if (null != t && null != d && !d.ids.has(t) && e.listedInConversationIds?.includes(d.conversationId)) continue;
                    let u = l(c, t => t.id === e.sourceImageId) ?? l(c, t => !t.loading && (0, n.d)(t.src) === e.sourceFileId);
                    if (null == u && e.galleryId !== a && null == r) continue;
                    let m = null == t ? void 0 : r,
                        p = null == t ? void 0 : l(c, e => !e.loading && (e.textEditingDocumentId === t || null != m && (0, n.d)(e.src) === m)),
                        g = p?.image,
                        h = null == t ? void 0 : (null == g || g.loading ? void 0 : g.textEditingVersion) ?? e.version,
                        f = {
                            id: e.id,
                            textEditingOperationId: e.id,
                            textEditingDocumentId: t,
                            textEditingVersion: h,
                            textEditingStatus: "snapshot" === e.kind && "loading" === e.status ? "saving" : e.status
                        };
                    if (null != p && null != g && !g.loading && (null == u || g.textEditingDocumentId === t)) {
                        let t = g.textEditingOriginalImageId ?? g.id;
                        p.group.images[p.index] = {
                            ...g,
                            ...f,
                            textEditingSourceImageId: null != u && u.image !== g ? u.image.id : e.id,
                            textEditingConversationImageId: g.textEditingConversationImageId ?? t,
                            textEditingOriginalImageId: t
                        };
                        continue
                    }
                    if (null == u) continue;
                    let {
                        group: _,
                        image: v
                    } = u;
                    if (v.loading) continue;
                    let b = null != m ? s(m) : v.src,
                        I = "preparation" === e.kind ? i.editableCopy : i.editedCopy,
                        y = v.sourceImage;
                    null != y && null != t && null != m && null != h ? y = o(y, t, m, h) : null != y && (null == y.layerRevision || y.src !== b) && (y = {
                        ...y,
                        layerRevision: void 0,
                        id: e.id,
                        src: b,
                        previewSrc: b,
                        displayVariants: void 0,
                        displayVariantId: void 0
                    });
                    let x = {
                        ...v,
                        ...f,
                        src: b,
                        previewSrc: b,
                        alt: I,
                        tabTitle: I,
                        displayVariants: void 0,
                        displayVariantId: void 0,
                        hasPanoramaPrompt: !1,
                        textEditingSourceImageId: v.id,
                        textEditingConversationImageId: v.textEditingConversationImageId ?? v.id,
                        textEditingOriginalImageId: null == g || g.loading || g.id === v.id ? void 0 : g.textEditingOriginalImageId ?? (g.id === e.id ? void 0 : g.id),
                        sourceImage: y
                    };
                    for (let t of c) t.images = t.images.filter(a => a.id === e.id ? t === _ : a.loading || a.id === v.id || null == m || (0, n.d)(a.src) !== m);
                    let S = _.images.findIndex(t => t.id === e.id);
                    if (S >= 0) _.images[S] = x;
                    else {
                        let e = _.images.findIndex(e => e.id === v.id);
                        _.images.splice(e + 1, 0, x)
                    }
                }
                return c.filter(e => e.images.length > 0)
            }
        })
    }),
    EQ0X: (function(e, t, a) {
        var i = a("ABep"),
            r = a("QosV"),
            n = a("slpy"),
            l = a("zd8w"),
            o = a("Wf1j"),
            s = a("oyxz"),
            d = a("Sm6l"),
            c = a("bqtn"),
            u = a("HOLv"),
            m = a("bf6R"),
            p = a("UxN3"),
            g = a("ddzD"),
            h = a("I0AH"),
            f = a("j9wQ"),
            _ = a("ZedP"),
            v = a("fi73"),
            b = a("uVXd");

        function I(e) {
            let t, a = (0, r.c)(3),
                l = !0 !== e["aria-expanded"] && "true" !== e["aria-expanded"] && void 0;
            return a[0] !== e || a[1] !== l ? (t = (0, i.jsx)(n.a, {
                ...e,
                forceOpen: l
            }), a[0] = e, a[1] = l, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, n, y, x, S, w, E = (0, r.c)(53),
                    {
                        downloadImageCount: j,
                        floatingToolbarVariant: C,
                        moreActions: P,
                        isAnimated: A,
                        isImageActionsDisabled: T,
                        isUnifiedViewerEnabled: L,
                        onDownload: O,
                        onDownloadAll: R,
                        onDownloadMenuOpen: M,
                        onShare: F,
                        onShareAll: D,
                        onShareMenuOpen: k,
                        saveAction: N,
                        shareImageCount: G,
                        showShareText: W
                    } = e,
                    H = void 0 !== A && A,
                    B = void 0 !== L && L,
                    z = void 0 !== W && W,
                    q = (0, o.a)(),
                    [U, V] = (0, l.useState)(!1),
                    K = "toolbar";
                null != C && (K = "imageTools" === C ? "imageToolbar" : "composerSm"), E[0] !== K || E[1] !== C || E[2] !== q || E[3] !== T || E[4] !== B || E[5] !== F || E[6] !== D || E[7] !== z ? (t = B ? (0, i.jsxs)(f.c, {
                    "aria-label": q.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }),
                    disabled: T,
                    uniform: !z,
                    onClick: null == D ? F : void 0,
                    children: [(0, i.jsx)(p.b, {
                        icon: {
                            16: m.L,
                            20: m.M
                        }
                    }), z ? (0, i.jsx)(s.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }) : null]
                }) : (0, i.jsx)(d.a, {
                    color: null == C ? "primary" : "ghostActive",
                    disabled: T,
                    size: K,
                    onClick: null == D ? F : void 0,
                    children: (0, i.jsx)(s.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    })
                }), E[0] = K, E[1] = C, E[2] = q, E[3] = T, E[4] = B, E[5] = F, E[6] = D, E[7] = z, E[8] = t) : t = E[8];
                let Q = t;
                if (null != F && null != D) {
                    let e;
                    E[9] !== H || E[10] !== T || E[11] !== F || E[12] !== D || E[13] !== k || E[14] !== Q || E[15] !== G ? (e = (0, i.jsx)(_.a, {
                        disabled: T,
                        imageCount: G,
                        isAnimated: H,
                        onOpen: k,
                        onShare: F,
                        onShareAll: D,
                        triggerButton: Q
                    }), E[9] = H, E[10] = T, E[11] = F, E[12] = D, E[13] = k, E[14] = Q, E[15] = G, E[16] = e) : e = E[16], Q = e
                }
                if (null != C) {
                    let e;
                    E[17] !== C || E[18] !== Q ? (e = (0, i.jsx)(h.a, {
                        variant: C,
                        children: Q
                    }), E[17] = C, E[18] = Q, E[19] = e) : e = E[19], Q = e
                }
                E[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    V(!0), await e().finally(() => {
                        V(!1)
                    })
                }, E[20] = a) : a = E[20];
                let X = a;
                E[21] !== K || E[22] !== j || E[23] !== C || E[24] !== q || E[25] !== H || E[26] !== U || E[27] !== T || E[28] !== B || E[29] !== O || E[30] !== R || E[31] !== M || E[32] !== N ? (n = null != R && null != O ? (0, i.jsxs)(c.a, {
                    align: "end",
                    disabled: T || U,
                    onOpenChange: e => {
                        e && M?.()
                    },
                    triggerButton: (0, i.jsx)(I, {
                        content: (0, i.jsx)(s.a, {
                            ...(0, g.a)({
                                isAnimated: H
                            }).downloadLabel
                        }),
                        children: B ? (0, i.jsx)(f.c, {
                            "aria-label": q.formatMessage((0, g.a)({
                                isAnimated: H
                            }).downloadLabel),
                            disabled: T || U,
                            loading: U,
                            uniform: !0,
                            children: (0, i.jsx)(p.b, {
                                icon: {
                                    assets: {
                                        16: v.a,
                                        20: b.a
                                    }
                                }
                            })
                        }) : (0, i.jsx)(d.a, {
                            "aria-label": q.formatMessage((0, g.a)({
                                isAnimated: H
                            }).downloadLabel),
                            color: null == C ? "ghost" : "ghostActive",
                            disabled: T || U,
                            loading: U,
                            size: K,
                            uniform: !0,
                            children: "compact" === C ? (0, i.jsx)(u.a, {
                                asset: v.a
                            }) : (0, i.jsx)(m.r, {})
                        })
                    }),
                    children: [(0, i.jsx)(c.c.Item, {
                        onSelect: () => void X(O),
                        children: (0, i.jsx)(s.a, {
                            ...(0, g.a)({
                                isAnimated: H
                            }).downloadMenuLabel
                        })
                    }), (0, i.jsx)(c.c.Item, {
                        onSelect: () => void X(R),
                        children: (0, i.jsx)(s.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            values: {
                                count: j
                            }
                        })
                    })]
                }) : N, E[21] = K, E[22] = j, E[23] = C, E[24] = q, E[25] = H, E[26] = U, E[27] = T, E[28] = B, E[29] = O, E[30] = R, E[31] = M, E[32] = N, E[33] = n) : n = E[33];
                let Y = n;
                if (null != C && null != R && null != O) {
                    let e;
                    E[34] !== Y || E[35] !== C ? (e = (0, i.jsx)(h.a, {
                        variant: C,
                        children: Y
                    }), E[34] = Y, E[35] = C, E[36] = e) : e = E[36], Y = e
                }
                let J = null == F ? null : Q;
                E[37] !== Y || E[38] !== J ? (y = (0, i.jsxs)(i.Fragment, {
                    children: [Y, J]
                }), E[37] = Y, E[38] = J, E[39] = y) : y = E[39];
                let $ = y;
                E[40] !== C || E[41] !== P ? (x = null == P || null == C ? P : (0, i.jsx)(h.a, {
                    variant: C,
                    children: P
                }), E[40] = C, E[41] = P, E[42] = x) : x = E[42];
                let Z = x,
                    ee = null != F || null != Y;
                if (!B || z) {
                    let e;
                    return E[43] !== $ || E[44] !== Z ? (e = (0, i.jsxs)(i.Fragment, {
                        children: [$, Z]
                    }), E[43] = $, E[44] = Z, E[45] = e) : e = E[45], e
                }
                return E[46] !== ee || E[47] !== q || E[48] !== $ ? (S = ee ? (0, i.jsx)(f.i, {
                    label: q.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions"
                    }),
                    children: $
                }) : null, E[46] = ee, E[47] = q, E[48] = $, E[49] = S) : S = E[49], E[50] !== S || E[51] !== Z ? (w = (0, i.jsxs)(i.Fragment, {
                    children: [S, Z]
                }), E[50] = S, E[51] = Z, E[52] = w) : w = E[52], w
            }
        })
    }),
    ZedP: (function(e, t, a) {
        var i = a("ABep"),
            r = a("QosV"),
            n = a("oyxz"),
            l = a("bqtn"),
            o = a("HOLv"),
            s = a("ddzD"),
            d = a("wTsG"),
            c = a("QcuK");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, m, p, g, h, f = (0, r.c)(19),
                    {
                        disabled: _,
                        imageCount: v,
                        isAnimated: b,
                        onOpen: I,
                        onShare: y,
                        onShareAll: x,
                        triggerButton: S
                    } = e,
                    w = void 0 !== b && b;
                return f[0] !== I ? (t = e => {
                    e && I?.()
                }, f[0] = I, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(o.a, {
                    className: "text-gray-1000",
                    asset: d.a
                }), f[2] = a) : a = f[2], f[3] !== w ? (u = (0, s.a)({
                    isAnimated: w
                }), f[3] = w, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (m = (0, i.jsx)(n.a, {
                    ...u.shareSelectionLabel
                }), f[5] = u.shareSelectionLabel, f[6] = m) : m = f[6], f[7] !== y || f[8] !== m ? (p = (0, i.jsx)(l.c.Item, {
                    leftIcon: a,
                    onSelect: y,
                    children: m
                }), f[7] = y, f[8] = m, f[9] = p) : p = f[9], f[10] !== v || f[11] !== x ? (g = null == x ? null : (0, i.jsx)(l.c.Item, {
                    leftIcon: (0, i.jsx)(o.a, {
                        className: "text-gray-1000",
                        asset: c.a
                    }),
                    onSelect: x,
                    children: (0, i.jsx)(n.a, {
                        id: "imagePreview.shareSeries",
                        defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                        values: {
                            imageCount: v
                        }
                    })
                }), f[10] = v, f[11] = x, f[12] = g) : g = f[12], f[13] !== _ || f[14] !== t || f[15] !== p || f[16] !== g || f[17] !== S ? (h = (0, i.jsxs)(l.a, {
                    align: "end",
                    disabled: _,
                    triggerButton: S,
                    onOpenChange: t,
                    children: [p, g]
                }), f[13] = _, f[14] = t, f[15] = p, f[16] = g, f[17] = S, f[18] = h) : h = f[18], h
            }
        })
    }),
    TKsx: (function(e, t, a) {
        var i = a("BolX"),
            r = a("Dgwo"),
            n = a("tl5a"),
            l = a("OWtl"),
            o = a("rvFo");
        let s = ["plan", "default"];

        function d(e, t) {
            return {
                queryKey: ["collaboration-modes", "list", t],
                staleTime: o.b.INFINITE,
                queryFn: async () => (function(e, t) {
                    let a = {};
                    for (let t of e) {
                        let e = function(e) {
                            let t = e.mode;
                            return null == t || "plan" === t || "default" === t ? e : {
                                ...e,
                                mode: "default"
                            }
                        }(t);
                        null == e.mode || a[e.mode] || (a[e.mode] = e)
                    }
                    let i = [];
                    for (let e of t) {
                        let t = a[e];
                        t && i.push(t)
                    }
                    return i
                })((await (0, r.b)(e, t).sendRequest("collaborationMode/list", {})).data, s)
            }
        }
        let c = (0, i.q)(l.a, (e, t) => {
                let {
                    scope: a
                } = t;
                return d(a, e)
            }),
            u = (0, i.r)(l.a, e => {
                let {
                    get: t,
                    scope: a
                } = e;
                return d(a, t(n.q))
            });
        a.d(t, {}, {
            a: c,
            b: u
        })
    })
};