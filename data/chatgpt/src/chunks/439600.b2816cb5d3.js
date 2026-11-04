export const __rspack_esm_ids = [439600];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("N55g");
        let s = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(753405), a.e(585419), a.e(877700), a.e(353230), a.e(736270), a.e(349034), a.e(81461), a.e(985455), a.e(581472), a.e(883579), a.e(471776), a.e(573896), a.e(499790), a.e(874459), a.e(62441), a.e(907652), a.e(648834), a.e(762074), a.e(266704), a.e(587936), a.e(904817), a.e(452048), a.e(536822), a.e(417574), a.e(118186), a.e(17983), a.e(167649), a.e(509282), a.e(826779), a.e(433520), a.e(142274), a.e(412268), a.e(328514), a.e(287931)]).then(a.bind(a, "nTBW"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, r.jsx)(n.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: s
        })
    }),
    KO1w: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("vbBn");
        let s = (0, i.a)(async () => (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(753405), a.e(585419), a.e(673131), a.e(321957), a.e(877700), a.e(353230), a.e(81461), a.e(985455), a.e(581472), a.e(784669), a.e(251191), a.e(882456), a.e(43573), a.e(373390), a.e(567140), a.e(85412), a.e(940922), a.e(444472), a.e(76657), a.e(573896), a.e(499790), a.e(874459), a.e(62441), a.e(907652), a.e(648834), a.e(762074), a.e(266704), a.e(587936), a.e(904817), a.e(452048), a.e(536822), a.e(417574), a.e(118186), a.e(17983), a.e(167649), a.e(509282), a.e(826779), a.e(433520), a.e(142274), a.e(412268), a.e(912134), a.e(328514), a.e(378077)]).then(a.bind(a, "gZgS"))).DilResponse, {
            errorFallback: (0, r.jsx)(n.b, {
                stage: "host_error",
                initialization: !0
            })
        });
        a.d(t, {}, {
            DilResponse: s
        })
    }),
    greq: (function(e, t, a) {
        a.d(t, {
            a: () => g,
            b: () => p,
            c: () => u
        });
        var r = a("Nl8C"),
            i = a("zd8w"),
            n = a("PFjh"),
            s = a("hJIv"),
            o = a("BolX"),
            l = a("fVOX"),
            d = a("OWtl");
        a("WFY2");
        let c = (0, o.u)(d.a, e => {
            let {
                scope: t
            } = e, a = 0, i = 0, s = (e, a, r) => {
                try {
                    (0, n.c)(t).count("default", "chatgpt.model_written_dil.v2.startup.report_suppressed", {
                        result: e,
                        report_cutoff: a,
                        reason: r,
                        web_frontend: "codex_webview"
                    })
                } catch {}
            }, o = (e, t) => a < 10 || (s(e, t, "page_report_limit"), !1);
            return {
                canPublish: o,
                recordSuppression: s,
                publish: (e, n, d) => {
                    if (!o(n.result, n.report_cutoff)) return !1;
                    try {
                        let o, c = (0, r.h)(n);
                        if (c > r.b ? o = "report_byte_limit" : i + c > 262144 && (o = "page_byte_limit"), null != o) return s(n.result, n.report_cutoff, o), !1;
                        return a++, i += c, t.get(l.a).log({
                            message: e,
                            status: d ? "info" : "error",
                            context: n
                        }), !0
                    } catch {
                        return s(n.result, n.report_cutoff, "observer_error"), !1
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
                    hist: (e, a, r) => t.hist("default", e, {
                        ...a,
                        web_frontend: "codex_webview"
                    }, r)
                }),
                i = e.get(s.a),
                o = e.get(c),
                l = (0, r.e)(a, {
                    enabled: () => i,
                    reporting: o
                });
            return {
                metrics: a,
                diagnosticsEnabled: i,
                render: (0, r.d)({
                    metrics: a,
                    diagnosticsExpected: i,
                    startupReporting: i ? o : void 0,
                    presentation: l
                }),
                presentation: l
            }
        }
        let p = (0, i.createContext)(null),
            g = (0, i.createContext)(null)
    }),
    vbBn: (function(e, t, a) {
        a.d(t, {
            a: () => S,
            b: () => I
        });
        var r = a("ABep"),
            i = a("QosV"),
            n = a("BolX"),
            s = a("zd8w"),
            o = a("UIU6"),
            l = a("OWtl"),
            d = a("RAbv"),
            c = a("zgGI"),
            u = a("zHp1"),
            p = a("Yscs");
        let g = new WeakMap,
            m = new WeakMap,
            h = /^image\/(?:jpeg|png|webp|gif)$/i;

        function f(e) {
            let t = e.getAttribute("src"),
                a = e.closest("[data-d-progressive-settled]")?.parentElement?.querySelector("[data-d-progressive-full] img");
            return !t || t.startsWith("data:") || e.srcset || a?.complete && a.naturalWidth > 0 || null != e.closest("picture") || "" === e.getAttribute("alt") || !e.closest('[data-d-component="image"]') || !e.currentSrc || e.currentSrc !== e.src ? null : t
        }

        function b(e) {
            let t = e.dataset.chatgptCopyImageSrc;
            if (null == t) return 0;
            let a = m.get(e);
            return a?.url === e.currentSrc && t === f(e) ? a.bytes : (delete e.dataset.chatgptCopyImageData, delete e.dataset.chatgptCopyImageSrc, m.delete(e), 0)
        }
        var y = a("N55g"),
            _ = a("greq");
        let v = new Set;

        function w() {
            for (let e of v) e.presentation.onPageHide()
        }

        function S(e) {
            let t, a, d, c, u, p, g, m, h, f, b, y = (0, i.c)(30),
                {
                    children: S,
                    contentReferenceIndex: C,
                    isPresented: j,
                    isPreparing: E,
                    isStreaming: P,
                    sourceMessageId: A
                } = e,
                T = void 0 === j || j,
                k = (0, n.y)(l.a);
            y[0] !== k ? (t = () => (0, _.c)(k), y[0] = k, y[1] = t) : t = y[1];
            let [L] = (0, s.useState)(t), R = void 0 !== E && E ? null : L;
            y[2] !== T || y[3] !== P || y[4] !== R ? (a = () => {
                R && (R.presentation.updateStreaming(P), R.presentation.setPresented(T))
            }, d = [R, T, P], y[2] = T, y[3] = P, y[4] = R, y[5] = a, y[6] = d) : (a = y[5], d = y[6]), (0, s.useLayoutEffect)(a, d), y[7] !== P || y[8] !== R?.presentation ? (c = () => R?.presentation.attach(P), y[7] = P, y[8] = R?.presentation, y[9] = c) : c = y[9];
            let O = (0, s.useEffectEvent)(c);
            y[10] !== O || y[11] !== R ? (u = () => {
                if (!R) return;
                let e = O();
                return v.add(R), 1 === v.size && window.addEventListener("pagehide", w, !0), () => {
                    v.delete(R), 0 === v.size && window.removeEventListener("pagehide", w, !0), e?.()
                }
            }, y[10] = O, y[11] = R, y[12] = u) : u = y[12], y[13] !== R ? (p = [R], y[13] = R, y[14] = p) : p = y[14], (0, s.useEffect)(u, p);
            let F = null == C ? void 0 : "contents";
            y[15] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, r.jsx)(I, {}), y[15] = g) : g = y[15];
            let M = R?.render.onHostRenderFailure;
            return y[16] !== S || y[17] !== M ? (m = (0, r.jsx)(o.a, {
                name: "ModelWrittenDILV2Renderer",
                fallback: g,
                onError: M,
                children: S
            }), y[16] = S, y[17] = M, y[18] = m) : m = y[18], y[19] !== C || y[20] !== A || y[21] !== m || y[22] !== F ? (h = (0, r.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": A,
                "data-chatgpt-copy-reference": C,
                "data-markdown-copy": F,
                onLoadCapture: x,
                children: m
            }), y[19] = C, y[20] = A, y[21] = m, y[22] = F, y[23] = h) : h = y[23], y[24] !== R || y[25] !== h ? (f = (0, r.jsx)(_.b.Provider, {
                value: R,
                children: h
            }), y[24] = R, y[25] = h, y[26] = f) : f = y[26], y[27] !== L.render.onPreparationEnd || y[28] !== f ? (b = (0, r.jsx)(_.a.Provider, {
                value: L.render.onPreparationEnd,
                children: f
            }), y[27] = L.render.onPreparationEnd, y[28] = f, y[29] = b) : b = y[29], b
        }

        function x(e) {
            e.target instanceof HTMLImageElement && async function(e, t) {
                if (b(t) > 0) return;
                let a = f(t);
                if (!a) return;
                let r = URL.parse(t.currentSrc);
                if (null == r || r.origin !== e.ownerDocument.location.origin || !["blob:", "https:", "http:"].includes(r.protocol)) return;
                let i = (g.get(e) ?? Promise.resolve()).then(() => (async function(e, t, a, r) {
                    let i = () => e.contains(t) && a === f(t) && r.href === t.currentSrc;
                    try {
                        let n;
                        if (!i() || b(t) > 0) return;
                        let s = d.a;
                        for (let t of e.querySelectorAll("img[data-chatgpt-copy-image-src]")) s -= b(t);
                        let o = Math.min(524288, s);
                        if (o <= 0) return;
                        if ("blob:" === r.protocol) n = (0, u.f)(r.href);
                        else {
                            let e = await fetch(r, {
                                cache: "only-if-cached",
                                mode: "same-origin",
                                redirect: "error"
                            });
                            if (!e.ok || !h.test(e.headers.get("content-type") ?? "")) return;
                            n = await (0, c.a)(e, o)
                        }
                        if (null == n || !h.test(n.type) || 0 === n.size || n.size > o) return;
                        let l = await (0, p.a)(n);
                        i() && (t.dataset.chatgptCopyImageSrc = a, t.dataset.chatgptCopyImageData = l, m.set(t, {
                            bytes: n.size,
                            url: r.href
                        }))
                    } catch {}
                })(e, t, a, r));
                return g.set(e, i), i
            }(e.currentTarget, e.target)
        }

        function I(e) {
            let t, a, n, o = (0, i.c)(12),
                {
                    stage: l,
                    errorClass: d,
                    initialization: c
                } = e,
                u = void 0 !== c && c,
                p = (0, s.useContext)(_.b);
            return o[0] !== u || o[1] !== p?.presentation || o[2] !== p?.render || o[3] !== l ? (t = () => {
                null != l && p?.render.onTerminalFailure(l), p?.render.onFallbackResult("shown", l), p?.presentation.reportRootFailure(u)
            }, o[0] = u, o[1] = p?.presentation, o[2] = p?.render, o[3] = l, o[4] = t) : t = o[4], o[5] !== u || o[6] !== p || o[7] !== l ? (a = [p, l, u], o[5] = u, o[6] = p, o[7] = l, o[8] = a) : a = o[8], (0, s.useEffect)(t, a), o[9] !== d || o[10] !== l ? (n = (0, r.jsx)(y.a, {
                stage: l,
                errorClass: d
            }), o[9] = d, o[10] = l, o[11] = n) : n = o[11], n
        }
    }),
    erFs: (function(e, t, a) {
        a.d(t, {
            a: () => $,
            b: () => Z
        });
        var r = a("FS1B"),
            i = a("BOYb"),
            n = a("Cslg"),
            s = a("X6Vn"),
            o = a("yGJW"),
            l = a("O666"),
            d = a("LulU"),
            c = a("k5RO"),
            u = a("cQW3"),
            p = a("Tywu"),
            g = a("ABep"),
            m = a("QosV");
        let h = {
            $type: "protobuf_analytics_events.v1.ChatgptImagegenPromptSharingAction"
        };
        var f = a("T0Rc"),
            b = a("BolX"),
            y = a("zd8w"),
            _ = a("Wf1j"),
            v = a("oyxz"),
            w = a("EShr"),
            S = a("OWtl"),
            x = a("hZax"),
            I = a("eShZ"),
            C = a("lBzi"),
            j = a("r9i9"),
            E = a("tdfh"),
            P = a("aFoA"),
            A = a("OOaz"),
            T = a("dQRk"),
            k = a("jfiJ"),
            L = a("ygO2"),
            R = a("bf6R"),
            O = a("zKCW"),
            F = a("JNtf"),
            M = a("mUDD");

        function G(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var N = a("zLIa");

        function q(e) {
            let t, a, r, i, n, s, o, l = (0, m.c)(19),
                {
                    content: d,
                    onChange: c,
                    disabled: u,
                    autoFocus: p
                } = e,
                h = void 0 !== u && u,
                f = void 0 !== p && p;
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, g.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-title",
                children: (0, g.jsx)(v.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title",
                    description: "Label for the shared image prompt template title"
                })
            }), l[0] = t) : t = l[0], l[1] !== d || l[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), l[1] = d, l[2] = c, l[3] = a) : a = l[3], l[4] !== f || l[5] !== d.title || l[6] !== a ? (r = (0, g.jsxs)(M.f, {
                children: [t, (0, g.jsx)(N.c, {
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
            }), l[4] = f, l[5] = d.title, l[6] = a, l[7] = r) : r = l[7], l[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, g.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, g.jsx)(v.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt",
                    description: "Label for the reusable image generation prompt"
                })
            }), l[8] = i) : i = l[8], l[9] !== d || l[10] !== c ? (n = e => c({
                ...d,
                prompt: e.target.value
            }), l[9] = d, l[10] = c, l[11] = n) : n = l[11], l[12] !== d.prompt || l[13] !== n ? (s = (0, g.jsxs)(M.f, {
                children: [i, (0, g.jsx)(N.c, {
                    id: "image-prompt-text",
                    name: "prompt",
                    variant: "compact",
                    required: !0,
                    rows: 2,
                    maxLength: 2e5,
                    value: d.prompt,
                    onChange: n
                })]
            }), l[12] = d.prompt, l[13] = n, l[14] = s) : s = l[14], l[15] !== h || l[16] !== r || l[17] !== s ? (o = (0, g.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [r, s]
            }), l[15] = h, l[16] = r, l[17] = s, l[18] = o) : o = l[18], o
        }

        function H(e) {
            let t, a, r, i, n, s, o, l, d, c, u, p, h, f, b, w, S, x, C, j, E = (0, m.c)(54),
                {
                    content: P,
                    onSave: A,
                    onClose: T,
                    onCloseAutoFocus: k
                } = e,
                N = (0, _.a)(),
                [H, B] = (0, y.useState)(P),
                [D, z] = (0, y.useState)(!1),
                [W, Q] = (0, y.useState)(null);
            E[0] !== H || E[1] !== D || E[2] !== T || E[3] !== A ? (t = async function() {
                if (!D && G(H)) {
                    z(!0), Q(null);
                    try {
                        await A(H), T()
                    } catch (e) {
                        Q(e instanceof I.a && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    z(!1)
                }
            }, E[0] = H, E[1] = D, E[2] = T, E[3] = A, E[4] = t) : t = E[4];
            let U = t,
                K = !D;
            return E[5] !== k ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: k
            }, E[5] = k, E[6] = a) : a = E[6], E[7] !== D || E[8] !== T ? (r = e => {
                e || D || T()
            }, E[7] = D, E[8] = T, E[9] = r) : r = E[9], E[10] !== U ? (i = e => {
                e.preventDefault(), e.stopPropagation(), U()
            }, E[10] = U, E[11] = i) : i = E[11], E[12] !== N ? (n = N.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back",
                description: "Return from the image prompt editor to the sharing preview without saving the draft"
            }), E[12] = N, E[13] = n) : n = E[13], E[14] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, g.jsx)(R.bc, {}), E[14] = s) : s = E[14], E[15] !== D || E[16] !== T || E[17] !== n ? (o = (0, g.jsx)(L.a, {
                color: "ghost",
                size: "icon",
                disabled: D,
                "aria-label": n,
                onClick: T,
                children: s
            }), E[15] = D, E[16] = T, E[17] = n, E[18] = o) : o = E[18], E[19] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, g.jsx)(M.d, {
                title: (0, g.jsx)(F.d, {
                    children: (0, g.jsx)(v.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt",
                        description: "Title of the dialog for editing the image's shared title and prompt"
                    })
                })
            }), E[19] = l) : l = E[19], E[20] !== o ? (d = (0, g.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [o, l]
            }), E[20] = o, E[21] = d) : d = E[21], E[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                B(e), Q(null)
            }, E[22] = c) : c = E[22], E[23] !== H || E[24] !== D ? (u = (0, g.jsx)(M.e, {
                spacing: "large",
                children: (0, g.jsx)(q, {
                    content: H,
                    disabled: D,
                    autoFocus: !0,
                    onChange: c
                })
            }), E[23] = H, E[24] = D, E[25] = u) : u = E[25], E[26] !== W ? (p = null != W && (0, g.jsx)(M.e, {
                children: (0, g.jsx)(O.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === W ? (0, g.jsx)(v.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again.",
                        description: "Error when moderation rejects an edit to a shared image prompt"
                    }) : (0, g.jsx)(v.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again.",
                        description: "Error when saving an image prompt fails; the draft remains in the editor for retry"
                    })
                })
            }), E[26] = W, E[27] = p) : p = E[27], E[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, g.jsx)(v.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel",
                description: "Discard edits and return to the image prompt sharing preview"
            }), E[28] = h) : h = E[28], E[29] !== D || E[30] !== T ? (f = (0, g.jsx)(L.a, {
                color: "outline",
                disabled: D,
                onClick: T,
                children: h
            }), E[29] = D, E[30] = T, E[31] = f) : f = E[31], E[32] !== H || E[33] !== D ? (b = !G(H) || D, E[32] = H, E[33] = D, E[34] = b) : b = E[34], E[35] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, g.jsx)(v.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save",
                description: "Apply the edited title and prompt and return to the image sharing preview"
            }), E[35] = w) : w = E[35], E[36] !== D || E[37] !== b ? (S = (0, g.jsx)(L.a, {
                type: "submit",
                color: "primary",
                loading: D,
                disabled: b,
                children: w
            }), E[36] = D, E[37] = b, E[38] = S) : S = E[38], E[39] !== f || E[40] !== S ? (x = (0, g.jsxs)(M.c, {
                expandSingleButton: !1,
                children: [f, S]
            }), E[39] = f, E[40] = S, E[41] = x) : x = E[41], E[42] !== d || E[43] !== u || E[44] !== p || E[45] !== x || E[46] !== i ? (C = (0, g.jsxs)(M.b, {
                as: "form",
                size: "viewport",
                onSubmit: i,
                children: [d, u, p, x]
            }), E[42] = d, E[43] = u, E[44] = p, E[45] = x, E[46] = i, E[47] = C) : C = E[47], E[48] !== D || E[49] !== K || E[50] !== C || E[51] !== a || E[52] !== r ? (j = (0, g.jsx)(F.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: K,
                shouldIgnoreClickOutside: D,
                contentProps: a,
                onOpenChange: r,
                children: C
            }), E[48] = D, E[49] = K, E[50] = C, E[51] = a, E[52] = r, E[53] = j) : j = E[53], j
        }

        function B(e) {
            let t, a, r, i, n, s, o, l, d, c, u, p = (0, m.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: b,
                    disabled: v,
                    onSave: w
                } = e,
                S = (0, _.a)(),
                [x, I] = (0, y.useState)(!1),
                C = (0, y.useRef)(null);
            return p[0] !== b || p[1] !== f ? (t = null != f && (0, g.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: b,
                src: f,
                referrerPolicy: "no-referrer"
            }), p[0] = b, p[1] = f, p[2] = t) : t = p[2], p[3] !== S ? (a = S.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt",
                description: "Accessible label for the pencil button that opens the shared image title and prompt editor"
            }), p[3] = S, p[4] = a) : a = p[4], p[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => I(!0), i = (0, g.jsx)(R.Qf, {}), p[5] = r, p[6] = i) : (r = p[5], i = p[6]), p[7] !== v || p[8] !== a ? (n = (0, g.jsx)(L.a, {
                ref: C,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: v,
                "aria-label": a,
                onClick: r,
                children: i
            }), p[7] = v, p[8] = a, p[9] = n) : n = p[9], p[10] !== t || p[11] !== n ? (s = (0, g.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, n]
            }), p[10] = t, p[11] = n, p[12] = s) : s = p[12], p[13] !== h.title ? (o = (0, g.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: h.title
            }), p[13] = h.title, p[14] = o) : o = p[14], p[15] !== h.prompt ? (l = (0, g.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: h.prompt
            }), p[15] = h.prompt, p[16] = l) : l = p[16], p[17] !== s || p[18] !== o || p[19] !== l ? (d = (0, g.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [s, o, l]
            }), p[17] = s, p[18] = o, p[19] = l, p[20] = d) : d = p[20], p[21] !== h || p[22] !== x || p[23] !== w ? (c = x && (0, g.jsx)(H, {
                content: h,
                onSave: w,
                onClose: () => I(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), C.current?.focus()
                }
            }), p[21] = h, p[22] = x, p[23] = w, p[24] = c) : c = p[24], p[25] !== c || p[26] !== d ? (u = (0, g.jsxs)(g.Fragment, {
                children: [d, c]
            }), p[25] = c, p[26] = d, p[27] = u) : u = p[27], u
        }
        var D = a("AuIy"),
            z = a("iqEK"),
            W = a("ccwJ"),
            Q = a("tOYk"),
            U = a("Kwur");
        let K = (0, b.v)(S.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function V(e, t, a) {
            Y(e, t);
            let r = t.assetPointer,
                i = t.messageId;
            if (null == r || null == i) throw Error("Image prompt share source unavailable");
            let n = e.get(K, t);
            if (null != n.publication) return n.publication;
            let s = n.idempotencyKey ?? crypto.randomUUID();
            e.set(K, t, {
                ...n,
                idempotencyKey: s
            });
            try {
                let l = await e.queryClient.fetchQuery({
                    queryKey: ["image-prompt-share-publication", t, s],
                    staleTime: 1 / 0,
                    gcTime: 1 / 0,
                    retry: !1,
                    queryFn: async () => {
                        let l = await U.Request.safePost("/share/prompt-share", {
                            isExpectedError: J,
                            requestBody: {
                                idempotency_key: s,
                                conversation_id: t.conversationId,
                                message_id: i,
                                output_asset_pointer: r,
                                post_text: a.title,
                                published_content: n.editedContent ?? void 0
                            }
                        });
                        Y(e, t);
                        let d = n.editedContent ?? a;
                        try {
                            d.prompt !== a.prompt && (0, o.a)(e, Q.a, {
                                postId: l.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_PROMPT"
                            }), d.title.trim() !== a.title.trim() && (0, o.a)(e, Q.a, {
                                postId: l.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_TITLE"
                            })
                        } catch {}
                        return l
                    }
                });
                return Y(e, t), e.set(K, t, e => ({
                    ...e,
                    publication: l
                })), l
            } catch (a) {
                throw a instanceof I.a && J(a) && e.set(K, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }

        function Y(e, t) {
            if (null == t.accountId || null == t.userId || e.get(n.f) !== t.accountId || e.get(n.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function J(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function X(e) {
            let t, a, r, i, s, l, d, c, u, p, L, R, O, F = (0, m.c)(65),
                M = (0, b.y)(S.a),
                N = (0, _.a)(),
                q = (0, b.z)(n.f),
                H = (0, b.z)(n.j);
            F[0] !== q || F[1] !== H ? (t = {
                accountId: q,
                userId: H
            }, F[0] = q, F[1] = H, F[2] = t) : t = F[2];
            let [Q] = (0, y.useState)(t), X = (0, x.h)("1939400492"), $ = (0, x.m)("250422953"), [Z, ee] = (0, y.useState)("image"), et = e.image, ea = et?.item.isAnimated === !0, er = Q.accountId === q && Q.userId === H, ei = null != et && !et.additionalImages?.length && null != q && null != H && er && !X;
            F[3] !== ei || F[4] !== $ ? (a = ei && $.get("imagegen_prompt_share_tabs_enabled", !1), F[3] = ei, F[4] = $, F[5] = a) : a = F[5];
            let en = a,
                es = et?.item.id;
            F[6] !== q || F[7] !== e.serverConversationId || F[8] !== es || F[9] !== H ? (r = ["image-prompt-share-source", q, H, e.serverConversationId, es], F[6] = q, F[7] = e.serverConversationId, F[8] = es, F[9] = H, F[10] = r) : r = F[10], F[11] !== et || F[12] !== e.serverConversationId || F[13] !== M ? (i = async t => {
                let {
                    signal: a
                } = t;
                if (null == et) return null;
                let r = (0, A.c)(e.serverConversationId),
                    i = M.get(P.a, r) ?? r,
                    n = () => {
                        let e = M.get(T.L, i) ?? M.query.getData(C.chatGptConversationQueryById$, r)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, W.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, r] = a, i = a[1].message, n = (0, W.b)(i, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (n?.src == null || "completed" !== n.status || !(0, z.d)(n.src)) return null;
                            let s = (0, D.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == s || (0, D.m)(s)) return null;
                            let o = (0, D.r)(i.content),
                                l = (Array.isArray(o?.parts) ? o.parts : []).map(D.r).find(e => e?.asset_pointer === n.src || (0, D.r)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, D.r)(l?.image_asset_pointer) ?? l,
                                c = (0, D.i)((0, D.r)((0, D.r)(d?.metadata)?.dalle)?.prompt) ?? (0, D.i)((0, D.e)(s)),
                                u = (0, D.i)(i.id);
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
                        }, et.item)
                    },
                    s = n();
                return null != s ? s : (await (0, k.a)(M, r, a), n())
            }, F[11] = et, F[12] = e.serverConversationId, F[13] = M, F[14] = i) : i = F[14], F[15] !== r || F[16] !== i || F[17] !== en ? (s = {
                enabled: en,
                queryKey: r,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: i
            }, F[15] = r, F[16] = i, F[17] = en, F[18] = s) : s = F[18];
            let {
                data: eo
            } = (0, f.a)(s), el = eo?.messageId ?? null, ed = eo?.assetPointer ?? null;
            F[19] !== q || F[20] !== e.serverConversationId || F[21] !== el || F[22] !== ed || F[23] !== H ? (l = {
                accountId: q,
                userId: H,
                conversationId: e.serverConversationId,
                messageId: el,
                assetPointer: ed
            }, F[19] = q, F[20] = e.serverConversationId, F[21] = el, F[22] = ed, F[23] = H, F[24] = l) : l = F[24];
            let ec = l,
                {
                    editedContent: eu,
                    publication: ep
                } = (0, b.x)(K, ec),
                eg = en && null != eo,
                em = eg && "image_with_prompt" === $.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                eh = eg && "template" === Z;
            F[25] !== eu || F[26] !== ep?.title || F[27] !== eo ? (d = eu ?? (null == eo ? void 0 : {
                ...eo.content,
                title: ep?.title ?? eo.content.title
            }), F[25] = eu, F[26] = ep?.title, F[27] = eo, F[28] = d) : d = F[28];
            let ef = d;
            F[29] !== Q.accountId || F[30] !== Q.userId || F[31] !== M ? (c = function() {
                if (M.get(n.f) !== Q.accountId || M.get(n.j) !== Q.userId) throw Error("Image prompt share account changed")
            }, F[29] = Q.accountId, F[30] = Q.userId, F[31] = M, F[32] = c) : c = F[32];
            let eb = c;
            F[33] !== ef || F[34] !== et?.item || F[35] !== e.source || F[36] !== eb || F[37] !== M || F[38] !== ec || F[39] !== eo ? (u = async function(t) {
                let a;
                if (eb(), null == eo || null == ef || !G(ef)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await V(M, ec, eo.content)
                } catch (e) {
                    if (e instanceof I.a && "prompt_share_not_publishable" === e.errorCode) throw new j.a;
                    throw e
                }
                if (eb(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, o.a)(M, h, {
                        action: "tap_send_to",
                        entryPoint: t,
                        tapTarget: "copy_link",
                        shareType: "prompt_with_generated_image",
                        promptShareId: a.prompt_share_id,
                        originalGenerationId: et?.item.chatGptGenerationId
                    })
                }
                return {
                    shareLinkId: a.post_id,
                    shareLinkUrl: `https://chatgpt.com/s/${encodeURIComponent(a.post_id)}`,
                    isWorkspaceOnly: !1,
                    title: a.title
                }
            }, F[33] = ef, F[34] = et?.item, F[35] = e.source, F[36] = eb, F[37] = M, F[38] = ec, F[39] = eo, F[40] = u) : u = F[40];
            let ey = u;
            if (F[41] !== ea || F[42] !== em ? (p = ea ? (0, g.jsx)(v.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt",
                    description: "Short share-format option in the generated GIF sharing dialog. Shares the animated GIF together with its reusable prompt; the other option is GIF only."
                }) : "image_with_prompt" === em ? (0, g.jsx)(v.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt",
                    description: "Share-format option for sharing the generated image together with its reusable prompt. The other option is Image only."
                }) : (0, g.jsx)(v.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image",
                    description: "Share the reusable prompt together with the generated image"
                }), F[41] = ea, F[42] = em, F[43] = p) : p = F[43], !er) return null;
            let e_ = eh ? "template" : "image";
            return F[44] !== N || F[45] !== ea || F[46] !== Z || F[47] !== p || F[48] !== eg ? (L = eg ? e => (0, g.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, g.jsx)(w.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: Z,
                    onSelect: ee,
                    ariaLabel: N.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format",
                        description: "Label for choosing between sharing an image or its prompt template"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: ea ? (0, g.jsx)(v.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only",
                            description: "Short share-format option in the generated GIF sharing dialog. Shares only the animated GIF; the other option shares the GIF with its reusable prompt."
                        }) : (0, g.jsx)(v.a, {
                            id: "imagePromptShare.imageOnly",
                            defaultMessage: "Image only",
                            description: "Share only the generated image"
                        })
                    }, {
                        id: "template",
                        disabled: e,
                        label: p
                    }]
                })
            }) : void 0, F[44] = N, F[45] = ea, F[46] = Z, F[47] = p, F[48] = eg, F[49] = L) : L = F[49], F[50] !== ef || F[51] !== ey || F[52] !== et?.alt || F[53] !== eb || F[54] !== M || F[55] !== ec || F[56] !== eo || F[57] !== em || F[58] !== eh ? (R = eh && null != ef ? {
                label: em,
                createLink: ey,
                actionsDisabled: !G(ef),
                preview: (e, t, a) => (0, g.jsx)(B, {
                    content: ef,
                    previewSrc: t,
                    alt: et?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (eb(), null == eo) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== ef.title.trim() || e.prompt !== ef.prompt) && await async function(e, t, a, r) {
                            Y(e, t);
                            let i = e.get(K, t),
                                n = null == i.idempotencyKey ? i.publication : await V(e, t, a),
                                s = r;
                            if (null != n) {
                                let e = await U.Request.safePatch("/share/post/{post_id}/prompt-share", {
                                    isExpectedError: J,
                                    parameters: {
                                        path: {
                                            post_id: n.post_id
                                        }
                                    },
                                    requestBody: r
                                });
                                s = {
                                    title: e.title,
                                    prompt: e.prompt
                                }
                            }
                            Y(e, t), e.set(K, t, e => ({
                                ...e,
                                editedContent: s,
                                publication: null == e.publication ? null : {
                                    ...e.publication,
                                    title: s.title
                                },
                                revision: e.revision + 1
                            }))
                        }(M, ec, eo.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), eb(), a()
                    }
                })
            } : void 0, F[50] = ef, F[51] = ey, F[52] = et?.alt, F[53] = eb, F[54] = M, F[55] = ec, F[56] = eo, F[57] = em, F[58] = eh, F[59] = R) : R = F[59], F[60] !== e || F[61] !== e_ || F[62] !== L || F[63] !== R ? (O = (0, g.jsx)(E.a, {
                ...e,
                imageShareOptions: L,
                imagePromptTemplate: R
            }, e_), F[60] = e, F[61] = e_, F[62] = L, F[63] = R, F[64] = O) : O = F[64], O
        }

        function $(e, t) {
            let a, {
                    additionalImages: d,
                    alt: g,
                    downloadAnalyticsImage: m,
                    downloadIsParagen: h,
                    image: f,
                    isDirectLightboxShare: b,
                    previewSrc: y,
                    serverConversationId: _,
                    source: v = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    title: w
                } = t,
                S = crypto.randomUUID(),
                x = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    conversationId: _,
                    shareSessionId: S,
                    source: v
                };
            (0, o.a)(e, r.h, {
                ...x,
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED"
            });
            let I = e.get(n.f),
                C = e.get(n.j),
                j = (0, i.d)(),
                E = j && null != I && null != C ? (0, c.h)(e.get(l.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                P = e.get(n.e),
                A = "loaded" === P.status && "personal" === P.structure || "loading" === P.status && "personal" === P.structureAtLogin,
                T = null == E ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: E,
                    isMobileBrowser: j,
                    isPersonalAccount: A
                }),
                k = () => e.get(n.f) === I && e.get(n.j) === C,
                L = t => {
                    !t.isWorkspaceOnly && t.shareLinkId !== a && k() && (a = t.shareLinkId, (0, o.a)(e, r.h, {
                        ...x,
                        action: "CHATGPT_SHARE_FLOW_ACTION_POST_LINK_PREPARED",
                        shareId: t.shareLinkId
                    }))
                },
                R = {
                    additionalImages: d,
                    alt: g,
                    downloadAnalyticsImage: m,
                    downloadIsParagen: h,
                    isDirectLightboxShare: b,
                    item: f,
                    previewSrc: y
                },
                O = () => (0, s.f)(e, X, {
                    currentNodeId: f.id,
                    image: R,
                    serverConversationId: _,
                    shareSessionId: S,
                    source: v,
                    title: w,
                    mobileImageExperience: T,
                    onImageShareLinkPrepared: null == E ? void 0 : L,
                    trackMobileImageShareLifecycle: j && E?.kind === "native"
                });
            j && E?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, _, R);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void O();
                    if (!k()) return;
                    if (!A) return void O();
                    L(a);
                    let r = await (0, p.b)(e, a, _, S, v);
                    if ("shared" === r || "cancelled" === r) return
                } catch {}
                k() && O()
            }(): O()
        }
        async function Z(e, t) {
            if (!t.src?.startsWith("data:image/gif")) return t;
            let {
                uploadChatGptConversationFile: r
            } = await Promise.resolve().then(a.bind(a, "uLW7")), {
                file: i
            } = (0, d.a)(t.src, "animation.gif"), n = await r(e, i, {
                storeInLibrary: !1
            });
            return {
                ...t,
                src: `sediment://${n.id}`
            }
        }
    }),
    jfiJ: (function(e, t, a) {
        var r = a("SKgd"),
            i = a("v7qY"),
            n = a("TDcV"),
            s = a("yGJW"),
            o = a("GDNt"),
            l = a("lBzi"),
            d = a("Kwur"),
            c = a("OOaz"),
            u = a("dQRk"),
            p = a("gbRX"),
            g = a("hwXH"),
            m = a("vkOF"),
            h = a("FGJH");

        function f(e) {
            return e instanceof o.a && 400 === e.responseStatus && "invalid_cursor" === e.errorCode
        }
        a.d(t, {}, {
            a: async function(e, t, a) {
                if (e.get(h.c, t)?.complete === !0) return;
                let r = e.get(n.a),
                    s = (0, g.c)(e, t, a);
                s.assertRequestCurrent(), await e.queryClient.fetchQuery({
                    queryKey: ["chatgpt-conversation-full", s.expectedIdentity?.accountId ?? r, t],
                    staleTime: 0,
                    retry: !1,
                    queryFn: async o => {
                        let {
                            signal: d
                        } = o, c = await (0, g.a)(e, t, {
                            forceFull: !0,
                            signal: null == a ? d : AbortSignal.any([a, d])
                        });
                        return s.assertRequestCurrent(), a?.aborted || e.get(n.a) !== r || ((0, i.flushSync)(() => (0, u.ic)(e, c, {
                            mergeActiveBranch: !0,
                            preserveAsyncStatus: !0
                        })), e.query.setData(l.chatGptConversationQueryById$, t, c)), c
                    }
                })
            },
            b: async function(e, t, a) {
                let {
                    skipEmptyPages: i = !0,
                    source: b = "CHATGPT_CONVERSATION_MESSAGE_PAGE_LOAD_SOURCE_CHAT_SCROLL"
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, y = e.get(h.c, t);
                if (null == y || y.complete || y.isLoading || null == y.cursor || null == y.oldestMessageId) return;
                let {
                    cursor: _,
                    oldestMessageId: v
                } = y, w = e.get(n.a), S = (0, g.c)(e, t), x = {
                    ...y,
                    isLoading: !0,
                    hasError: !1
                }, I = () => {
                    let a = e.get(h.c, t);
                    return e.get(n.a) === w && null != a && !a.complete && a.cursor === _ && a.oldestMessageId === v
                };
                try {
                    S.assertRequestCurrent(), e.set(h.c, t, x);
                    let n = new Set,
                        m = _,
                        C = async () => {
                            n.add(m);
                            let a = await e.queryClient.fetchQuery({
                                queryKey: ["chatgpt-conversation-page", S.expectedIdentity?.accountId ?? w, t, m],
                                staleTime: 0,
                                retry: (e, t) => e < 1 && "AbortError" !== t.name && !f(t) && !(t instanceof o.a && 429 === t.responseStatus),
                                queryFn: a => {
                                    let {
                                        signal: r
                                    } = a;
                                    return (0, p.c)(e, "page", r, () => d.Request.safeGet("/conversations/{conversation_id}/messages", {
                                        ...S,
                                        retry: "except-rate-limit",
                                        parameters: {
                                            path: {
                                                conversation_id: t
                                            },
                                            query: {
                                                before: m,
                                                num_turns: y.numTurns,
                                                include_has_versions: !0
                                            }
                                        },
                                        additionalHeaders: {
                                            ...(0, g.b)(e, t),
                                            ...S.additionalHeaders
                                        },
                                        signal: r
                                    }).finally(() => {
                                        r.throwIfAborted(), S.assertRequestCurrent()
                                    }))
                                }
                            });
                            return S.assertRequestCurrent(), (0, s.a)(e, r.c, {
                                conversationId: t,
                                messageCount: a.messages.length,
                                hasMoreMessages: a.page_info.has_previous_page,
                                source: b
                            }), a
                        }, j = await C(), E = j.page_info.has_previous_page ? j.page_info.start_cursor ?? null : null;
                    for (; i && 0 === j.messages.length && null != E;) {
                        if (!I()) return;
                        if (n.has(E)) throw Error("Conversation pagination cursor did not advance");
                        m = E;
                        let e = await C();
                        E = (j = {
                            ...e,
                            safe_urls: [...j.safe_urls ?? [], ...e.safe_urls ?? []],
                            blocked_urls: [...j.blocked_urls ?? [], ...e.blocked_urls ?? []]
                        }).page_info.has_previous_page ? j.page_info.start_cursor ?? null : null
                    }
                    if (!I()) return;
                    if (null != E && n.has(E)) throw Error("Conversation pagination cursor did not advance");
                    S.assertRequestCurrent(), a(() => {
                        let a = (0, u.Db)(e, (0, c.c)(t), j.messages, v);
                        e.set(h.c, t, {
                            ...y,
                            cursor: E,
                            oldestMessageId: a,
                            isLoading: !1,
                            hasError: !1,
                            hasLoadedOlderPages: !0
                        })
                    }), e.query.setData(l.chatGptConversationQueryById$, t, e => null == e ? e : {
                        ...e,
                        safe_urls: [...new Set([...e.safe_urls ?? [], ...j.safe_urls ?? []])],
                        blocked_urls: [...new Set([...e.blocked_urls ?? [], ...j.blocked_urls ?? []])]
                    })
                } catch (r) {
                    if (r instanceof Error && "AbortError" === r.name || !I()) return;
                    if (f(r)) try {
                        let r;
                        if (i) r = await (0, g.a)(e, t);
                        else {
                            let a = await (0, p.c)(e, "initial", void 0, () => d.Request.safeGet("/conversations/{conversation_id}", {
                                ...S,
                                retry: "except-rate-limit",
                                parameters: {
                                    path: {
                                        conversation_id: t
                                    },
                                    query: {
                                        num_turns: y.numTurns,
                                        include_has_versions: !0
                                    }
                                },
                                additionalHeaders: {
                                    ...(0, g.b)(e, t),
                                    ...S.additionalHeaders
                                },
                                expectedErrorStatuses: [423]
                            }).finally(S.assertRequestCurrent));
                            if (0 === a.messages.length && a.page_info.has_previous_page) throw Error("Conversation cursor refresh has no message anchor");
                            r = (0, m.a)(a, y.numTurns)
                        }
                        if (S.assertRequestCurrent(), !I()) return;
                        a(() => {
                            e.set(h.c, t, {
                                ...y,
                                isLoading: !1,
                                hasLoadedOlderPages: !1
                            }), (0, u.ic)(e, r, {
                                preserveAsyncStatus: !0
                            })
                        });
                        return
                    } catch (e) {
                        if (e instanceof Error && "AbortError" === e.name) return
                    }
                    I() && e.set(h.c, t, {
                        ...y,
                        isLoading: !1,
                        hasError: !0
                    })
                } finally {
                    e.get(h.c, t) === x && e.set(h.c, t, {
                        ...x,
                        isLoading: !1
                    })
                }
            }
        })
    }),
    umQU: (function(e, t, a) {
        var r = a("BolX"),
            i = a("ccwJ"),
            n = a("Kwur"),
            s = a("dQRk"),
            o = a("bmqg"),
            l = a("SGsN"),
            d = a("urzV"),
            c = a("svjy"),
            u = a("tSEg"),
            p = a("zHp1"),
            g = a("Yscs"),
            m = a("GDNt");
        let h = (0, r.v)(u.a, e => null),
            f = (0, r.j)(u.a, (e, t) => {
                let a, {
                        image: r,
                        imageAssetResolver: o
                    } = e,
                    {
                        signal: u,
                        scope: f
                    } = t,
                    b = r?.gifPlayback?.originalSrc ?? r?.src,
                    v = JSON.stringify([r?.id, b]),
                    w = 0,
                    S = Promise.resolve(),
                    x = u({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (r?.isAnimated) return f.watch(t => {
                                if (0 !== w) return;
                                let a = t.get(h, v),
                                    n = (0, i.d)(y(t, r)?.gifPlayback, a ?? void 0);
                                (null != a || 1 !== n) && (e({
                                    preview: null,
                                    busy: !0
                                }), E(n, !1))
                            })
                        }
                    }),
                    I = async e => {
                        let t = null != e && (0, p.h)(e) && null != o ? await (0, p.a)(f.queryClient, e, o) : e,
                            a = null == t ? null : await (0, d.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, C = () => (null == a && (a = I(b).catch(e => {
                        throw a = void 0, e
                    })), a), j = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                            a = y(f, r),
                            n = t === a?.watermarkedSrc ? a?.gifPlayback?.watermarkedVariants : a?.gifPlayback?.variants;
                        if (!(0, i.a)(n).includes(e)) throw Error("GIF speed variant unavailable");
                        let s = 1 === e ? void 0 : n?.[String(e)],
                            o = x.get().preview;
                        if (o?.speed === e && o.originalSrc === t && o.assetSrc === s) return o;
                        let l = null == s && t === b ? await C() : await I(s ?? t);
                        return {
                            assetSrc: s,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, g.a)(l),
                            sizeBytes: l.size
                        }
                    }, E = async (e, t) => {
                        let a = ++w;
                        x.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let i = await j(e);
                            if (a !== w) return !1;
                            return x.set({
                                preview: i,
                                busy: !1
                            }), t && (f.set(h, v, e), S = S.then(async () => {
                                if (a !== w || "chatgpt-thread" !== f.value.routeKind || r?.chatGptMessageId == null || null == b) return;
                                let t = f.get(s.j, f.value.conversationId);
                                null != t && await n.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: r.chatGptMessageId,
                                        asset_pointer: b,
                                        selected_speed: e
                                    },
                                    expectedErrorStatuses: [404, 405]
                                })
                            }).catch(e => {
                                e instanceof m.a && (404 === e.status || 405 === e.status) || f.get(l.f).danger(f.get(c.a).formatMessage({
                                    id: "gifEditor.saveSpeedFailed",
                                    defaultMessage: "Couldn’t save GIF speed. Try again",
                                    description: "Error toast when the selected GIF playback speed could not be saved to the conversation"
                                }), {
                                    errorAnalytics: {
                                        toastId: "gifEditor.saveSpeedFailed"
                                    }
                                })
                            })), !0
                        } catch {
                            return t && a === w && f.get(l.f).danger(f.get(c.a).formatMessage({
                                id: "gifEditor.speedChangeFailed",
                                defaultMessage: "Couldn’t change GIF speed. Try again",
                                description: "Error shown when a generated GIF could not be loaded or retimed after choosing a playback speed"
                            }), {
                                errorAnalytics: {
                                    toastId: "gifEditor.speedChangeFailed"
                                }
                            }), !1
                        } finally {
                            a === w && x.set(e => ({
                                ...e,
                                busy: !1
                            }))
                        }
                    };
                return {
                    state$: x,
                    loadOriginal: C,
                    loadExport: async e => I((await j(e)).src),
                    changeSpeed: e => E(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let r = (0, i.d)(y(f, e)?.gifPlayback, x.get().preview?.speed ?? f.get(h, v) ?? void 0),
                            n = {
                                ...e,
                                src: t,
                                gifPlayback: {
                                    ...e.gifPlayback,
                                    originalSrc: t,
                                    speed: r
                                }
                            };
                        if (1 === r) return n;
                        let s = await j(r, t);
                        return _(n, a && null != s.assetSrc ? {
                            ...s,
                            src: s.assetSrc
                        } : s)
                    }
                }
            }, {
                autoDispose: 6e4,
                key: e => {
                    let {
                        image: t
                    } = e;
                    return JSON.stringify([t?.id, t?.gifPlayback?.originalSrc ?? t?.src, t?.gifPlayback?.variants, t?.gifPlayback?.watermarkedVariants])
                }
            }),
            b = (0, r.d)(u.a, (e, t) => {
                let {
                    image: a,
                    conversationId: r,
                    imageAssetResolver: n
                } = e, {
                    scope: s
                } = t, o = y(s, a, r), l = s.get(f, {
                    image: o?.isAnimated === !0 ? o : void 0,
                    imageAssetResolver: n
                }), {
                    preview: d
                } = s.get(l.state$);
                return {
                    playback: l,
                    previewSrc: null != d && (0, i.a)(o?.gifPlayback?.variants).includes(d.speed) ? d.src : void 0,
                    image: null == o ? void 0 : _(o, d),
                    originalSrc: o?.isAnimated === !0 ? o.gifPlayback?.originalSrc ?? o.src : o?.src,
                    canControl: o?.isAnimated === !0 && (0, i.a)(o.gifPlayback?.variants).length > 1
                }
            });

        function y(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(o.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function _(e, t) {
            let a = (0, i.d)(e.gifPlayback),
                r = null != e.gifPlayback && e.gifPlayback.speed !== a ? {
                    ...e,
                    gifPlayback: {
                        ...e.gifPlayback,
                        speed: a
                    }
                } : e;
            return !0 === e.isAnimated && null != t && (0, i.a)(e.gifPlayback?.variants).includes(t.speed) && t.originalSrc === (e.gifPlayback?.originalSrc ?? e.src) ? {
                ...e,
                src: t.src,
                sizeBytes: t.sizeBytes,
                gifPlayback: {
                    ...e.gifPlayback,
                    originalSrc: t.originalSrc,
                    speed: t.speed
                }
            } : r
        }
        a.d(t, {}, {
            a: _,
            b: y,
            c: f,
            d: b
        })
    }),
    I0AH: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("on57");
        a.d(t, {}, {
            a: function(e) {
                let t, a, s = (0, i.c)(14),
                    {
                        ariaLabel: o,
                        children: l,
                        className: d,
                        variant: c
                    } = e,
                    u = void 0 === c ? "compact" : c;
                if ("embedded" === u) {
                    let e, t = null == o ? void 0 : "group";
                    return s[0] !== o || s[1] !== l || s[2] !== t ? (e = (0, r.jsx)("div", {
                        role: t,
                        "aria-label": o,
                        className: "flex min-w-0 items-center",
                        children: l
                    }), s[0] = o, s[1] = l, s[2] = t, s[3] = e) : e = s[3], e
                }
                let p = null == o ? void 0 : "toolbar",
                    g = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                    m = "imageTools" === u && "gap-0 shadow-md",
                    h = "playback" === u && "gap-2 shadow-sm";
                return s[4] !== d || s[5] !== g || s[6] !== m || s[7] !== h ? (t = (0, n.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", g, m, h, d), s[4] = d, s[5] = g, s[6] = m, s[7] = h, s[8] = t) : t = s[8], s[9] !== o || s[10] !== l || s[11] !== p || s[12] !== t ? (a = (0, r.jsx)("div", {
                    role: p,
                    "aria-label": o,
                    className: t,
                    children: l
                }), s[9] = o, s[10] = l, s[11] = p, s[12] = t, s[13] = a) : a = s[13], a
            }
        })
    }),
    EQ0X: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("zd8w"),
            s = a("Wf1j"),
            o = a("oyxz"),
            l = a("ygO2"),
            d = a("bqtn"),
            c = a("HOLv"),
            u = a("bf6R"),
            p = a("UxN3"),
            g = a("CqQF"),
            m = a("ddzD"),
            h = a("I0AH"),
            f = a("pZQ9"),
            b = a("ZedP"),
            y = a("OmZp"),
            _ = a("GakI");

        function v(e) {
            let t, a = (0, i.c)(3),
                n = !0 === e["aria-expanded"];
            return a[0] !== e || a[1] !== n ? (t = (0, r.jsx)(g.a, {
                ...e,
                triggerPopupOpen: n
            }), a[0] = e, a[1] = n, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, g, w, S, x, I, C = (0, i.c)(53),
                    {
                        downloadImageCount: j,
                        floatingToolbarVariant: E,
                        moreActions: P,
                        isAnimated: A,
                        isImageActionsDisabled: T,
                        isUnifiedViewerEnabled: k,
                        onDownload: L,
                        onDownloadAll: R,
                        onDownloadMenuOpen: O,
                        onShare: F,
                        onShareAll: M,
                        onShareMenuOpen: G,
                        saveAction: N,
                        shareImageCount: q,
                        showShareText: H
                    } = e,
                    B = void 0 !== A && A,
                    D = void 0 !== k && k,
                    z = void 0 !== H && H,
                    W = (0, s.a)(),
                    [Q, U] = (0, n.useState)(!1),
                    K = "toolbar";
                null != E && (K = "imageTools" === E ? "imageToolbar" : "composerSm"), C[0] !== K || C[1] !== E || C[2] !== W || C[3] !== T || C[4] !== D || C[5] !== F || C[6] !== M || C[7] !== z ? (t = D ? (0, r.jsxs)(f.c, {
                    "aria-label": W.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }),
                    disabled: T,
                    uniform: !z,
                    onClick: null == M ? F : void 0,
                    children: [(0, r.jsx)(p.b, {
                        icon: {
                            16: u.L,
                            20: u.M
                        }
                    }), z ? (0, r.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }) : null]
                }) : (0, r.jsx)(l.a, {
                    color: null == E ? "primary" : "ghostActive",
                    disabled: T,
                    size: K,
                    onClick: null == M ? F : void 0,
                    children: (0, r.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    })
                }), C[0] = K, C[1] = E, C[2] = W, C[3] = T, C[4] = D, C[5] = F, C[6] = M, C[7] = z, C[8] = t) : t = C[8];
                let V = t;
                if (null != F && null != M) {
                    let e;
                    C[9] !== B || C[10] !== T || C[11] !== F || C[12] !== M || C[13] !== G || C[14] !== V || C[15] !== q ? (e = (0, r.jsx)(b.a, {
                        disabled: T,
                        imageCount: q,
                        isAnimated: B,
                        onOpen: G,
                        onShare: F,
                        onShareAll: M,
                        triggerButton: V
                    }), C[9] = B, C[10] = T, C[11] = F, C[12] = M, C[13] = G, C[14] = V, C[15] = q, C[16] = e) : e = C[16], V = e
                }
                if (null != E) {
                    let e;
                    C[17] !== E || C[18] !== V ? (e = (0, r.jsx)(h.a, {
                        variant: E,
                        children: V
                    }), C[17] = E, C[18] = V, C[19] = e) : e = C[19], V = e
                }
                C[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    U(!0), await e().finally(() => {
                        U(!1)
                    })
                }, C[20] = a) : a = C[20];
                let Y = a;
                C[21] !== K || C[22] !== j || C[23] !== E || C[24] !== W || C[25] !== B || C[26] !== Q || C[27] !== T || C[28] !== D || C[29] !== L || C[30] !== R || C[31] !== O || C[32] !== N ? (g = null != R && null != L ? (0, r.jsxs)(d.a, {
                    align: "end",
                    disabled: T || Q,
                    onOpenChange: e => {
                        e && O?.()
                    },
                    triggerButton: (0, r.jsx)(v, {
                        cloneCustomTrigger: !0,
                        tooltipContent: (0, r.jsx)(o.a, {
                            ...(0, m.a)({
                                isAnimated: B
                            }).downloadLabel
                        }),
                        children: D ? (0, r.jsx)(f.c, {
                            "aria-label": W.formatMessage((0, m.a)({
                                isAnimated: B
                            }).downloadLabel),
                            disabled: T || Q,
                            loading: Q,
                            uniform: !0,
                            children: (0, r.jsx)(p.b, {
                                icon: {
                                    assets: {
                                        16: y.a,
                                        20: _.a
                                    }
                                }
                            })
                        }) : (0, r.jsx)(l.a, {
                            "aria-label": W.formatMessage((0, m.a)({
                                isAnimated: B
                            }).downloadLabel),
                            color: null == E ? "ghost" : "ghostActive",
                            disabled: T || Q,
                            loading: Q,
                            size: K,
                            uniform: !0,
                            children: "compact" === E ? (0, r.jsx)(c.a, {
                                asset: y.a
                            }) : (0, r.jsx)(u.r, {})
                        })
                    }),
                    children: [(0, r.jsx)(d.c.Item, {
                        onSelect: () => void Y(L),
                        children: (0, r.jsx)(o.a, {
                            ...(0, m.a)({
                                isAnimated: B
                            }).downloadMenuLabel
                        })
                    }), (0, r.jsx)(d.c.Item, {
                        onSelect: () => void Y(R),
                        children: (0, r.jsx)(o.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            description: "Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.",
                            values: {
                                count: j
                            }
                        })
                    })]
                }) : N, C[21] = K, C[22] = j, C[23] = E, C[24] = W, C[25] = B, C[26] = Q, C[27] = T, C[28] = D, C[29] = L, C[30] = R, C[31] = O, C[32] = N, C[33] = g) : g = C[33];
                let J = g;
                if (null != E && null != R && null != L) {
                    let e;
                    C[34] !== J || C[35] !== E ? (e = (0, r.jsx)(h.a, {
                        variant: E,
                        children: J
                    }), C[34] = J, C[35] = E, C[36] = e) : e = C[36], J = e
                }
                let X = null == F ? null : V;
                C[37] !== J || C[38] !== X ? (w = (0, r.jsxs)(r.Fragment, {
                    children: [J, X]
                }), C[37] = J, C[38] = X, C[39] = w) : w = C[39];
                let $ = w;
                C[40] !== E || C[41] !== P ? (S = null == P || null == E ? P : (0, r.jsx)(h.a, {
                    variant: E,
                    children: P
                }), C[40] = E, C[41] = P, C[42] = S) : S = C[42];
                let Z = S,
                    ee = null != F || null != J;
                if (!D || z) {
                    let e;
                    return C[43] !== $ || C[44] !== Z ? (e = (0, r.jsxs)(r.Fragment, {
                        children: [$, Z]
                    }), C[43] = $, C[44] = Z, C[45] = e) : e = C[45], e
                }
                return C[46] !== ee || C[47] !== W || C[48] !== $ ? (x = ee ? (0, r.jsx)(f.i, {
                    label: W.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions",
                        description: "Accessible label for the image viewer's Share and Download actions group"
                    }),
                    children: $
                }) : null, C[46] = ee, C[47] = W, C[48] = $, C[49] = x) : x = C[49], C[50] !== x || C[51] !== Z ? (I = (0, r.jsxs)(r.Fragment, {
                    children: [x, Z]
                }), C[50] = x, C[51] = Z, C[52] = I) : I = C[52], I
            }
        })
    }),
    ZedP: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("oyxz"),
            s = a("bqtn"),
            o = a("HOLv"),
            l = a("ddzD"),
            d = a("WIRl"),
            c = a("waOU");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, p, g, m, h, f = (0, i.c)(19),
                    {
                        disabled: b,
                        imageCount: y,
                        isAnimated: _,
                        onOpen: v,
                        onShare: w,
                        onShareAll: S,
                        triggerButton: x
                    } = e,
                    I = void 0 !== _ && _;
                return f[0] !== v ? (t = e => {
                    e && v?.()
                }, f[0] = v, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(o.a, {
                    className: "text-gray-1000",
                    asset: d.a
                }), f[2] = a) : a = f[2], f[3] !== I ? (u = (0, l.a)({
                    isAnimated: I
                }), f[3] = I, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (p = (0, r.jsx)(n.a, {
                    ...u.shareSelectionLabel
                }), f[5] = u.shareSelectionLabel, f[6] = p) : p = f[6], f[7] !== w || f[8] !== p ? (g = (0, r.jsx)(s.c.Item, {
                    leftIcon: a,
                    onSelect: w,
                    children: p
                }), f[7] = w, f[8] = p, f[9] = g) : g = f[9], f[10] !== y || f[11] !== S ? (m = null == S ? null : (0, r.jsx)(s.c.Item, {
                    leftIcon: (0, r.jsx)(o.a, {
                        className: "text-gray-1000",
                        asset: c.a
                    }),
                    onSelect: S,
                    children: (0, r.jsx)(n.a, {
                        id: "imagePreview.shareSeries",
                        defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                        description: "Option in the generated-image Share dropdown that shares every completed image in the selected generation series. imageCount is the number of images included, always greater than one. Keep this menu label concise.",
                        values: {
                            imageCount: y
                        }
                    })
                }), f[10] = y, f[11] = S, f[12] = m) : m = f[12], f[13] !== b || f[14] !== t || f[15] !== g || f[16] !== m || f[17] !== x ? (h = (0, r.jsxs)(s.a, {
                    align: "end",
                    disabled: b,
                    triggerButton: x,
                    onOpenChange: t,
                    children: [g, m]
                }), f[13] = b, f[14] = t, f[15] = g, f[16] = m, f[17] = x, f[18] = h) : h = f[18], h
            }
        })
    }),
    RiLw: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("oyxz"),
            s = a("bf6R"),
            o = a("UxN3"),
            l = a("Y3Vu"),
            d = a("Q81T");
        let c = (0, r.jsx)(o.b, {
            className: d.a.shareIcon,
            icon: {
                16: s.L,
                20: s.M
            }
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, s, o, d, u = (0, i.c)(9);
                u[0] !== e ? ({
                    children: t,
                    leading: s,
                    ...a
                } = e, u[0] = e, u[1] = t, u[2] = a, u[3] = s) : (t = u[1], a = u[2], s = u[3]);
                let p = void 0 === s ? c : s;
                return u[4] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, r.jsx)("span", {
                    "data-page-share-label": !0,
                    "data-tooltip-visibility-target": !0,
                    "data-tooltip-enablement-target": !0,
                    "data-viewer-header-collapsible": !0,
                    className: "overflow-hidden whitespace-nowrap",
                    children: (0, r.jsx)(n.a, {
                        id: "artifactViewer.share",
                        defaultMessage: "Share",
                        description: "Button for sharing an artifact from its viewer"
                    })
                }), u[4] = o) : o = u[4], u[5] !== t || u[6] !== p || u[7] !== a ? (d = (0, r.jsxs)(l.a, {
                    focusRing: "inset",
                    ...a,
                    children: [p, o, t]
                }), u[5] = t, u[6] = p, u[7] = a, u[8] = d) : d = u[8], d
            }
        })
    })
};