export const __rspack_esm_id = 284390;
export const __rspack_esm_ids = [284390];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("N55g");
        let s = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(753405), a.e(585419), a.e(644241), a.e(877700), a.e(636463), a.e(736270), a.e(179982), a.e(81461), a.e(42239), a.e(999846), a.e(945902), a.e(874459), a.e(445355), a.e(762474), a.e(851888), a.e(62441), a.e(587936), a.e(168420), a.e(648495), a.e(536161), a.e(242986), a.e(826779), a.e(433520), a.e(741325), a.e(16212), a.e(741494), a.e(379413), a.e(814300), a.e(420355), a.e(206304)]).then(a.bind(a, "nTBW"))).ChatGptDilDirectiveRenderer, {
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
        let s = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(753405), a.e(585419), a.e(673131), a.e(321957), a.e(644241), a.e(877700), a.e(636463), a.e(81461), a.e(42239), a.e(784669), a.e(8197), a.e(328034), a.e(994303), a.e(810177), a.e(789179), a.e(339201), a.e(742741), a.e(289646), a.e(945902), a.e(874459), a.e(445355), a.e(762474), a.e(851888), a.e(62441), a.e(587936), a.e(168420), a.e(648495), a.e(536161), a.e(242986), a.e(826779), a.e(433520), a.e(741325), a.e(16212), a.e(741494), a.e(379413), a.e(681480), a.e(814300), a.e(949676)]).then(a.bind(a, "TWJJ"))).DilResponse, {
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
            a: () => m,
            b: () => p,
            c: () => u
        });
        var r = a("cDSo"),
            i = a("zd8w"),
            n = a("PFjh"),
            s = a("hJIv"),
            o = a("iTtm"),
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
            m = (0, i.createContext)(null)
    }),
    vbBn: (function(e, t, a) {
        a.d(t, {
            a: () => I,
            b: () => C
        });
        var r = a("ABep"),
            i = a("QosV"),
            n = a("iTtm"),
            s = a("zd8w"),
            o = a("UIU6"),
            l = a("OWtl"),
            d = a("RAbv"),
            c = a("zgGI"),
            u = a("zHp1"),
            p = a("Yscs");
        let m = new WeakMap,
            g = new WeakMap,
            h = /^image\/(?:jpeg|png|webp|gif)$/i;
        async function f(e, t) {
            if (v(t) > 0) return;
            let a = y(t);
            if (!a) return;
            let r = URL.parse(t.currentSrc);
            if (null == r || r.origin !== e.ownerDocument.location.origin || !["blob:", "https:", "http:"].includes(r.protocol)) return;
            let i = (m.get(e) ?? Promise.resolve()).then(() => b(e, t, a, r));
            return m.set(e, i), i
        }
        async function b(e, t, a, r) {
            let i = () => e.contains(t) && a === y(t) && r.href === t.currentSrc;
            try {
                let n;
                if (!i() || v(t) > 0) return;
                let s = d.a;
                for (let t of e.querySelectorAll("img[data-chatgpt-copy-image-src]")) s -= v(t);
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
                i() && (t.dataset.chatgptCopyImageSrc = a, t.dataset.chatgptCopyImageData = l, g.set(t, {
                    bytes: n.size,
                    url: r.href
                }))
            } catch {}
        }

        function y(e) {
            let t = e.getAttribute("src"),
                a = e.closest("[data-d-progressive-settled]")?.parentElement?.querySelector("[data-d-progressive-full] img");
            return !t || t.startsWith("data:") || e.srcset || a?.complete && a.naturalWidth > 0 || null != e.closest("picture") || "" === e.getAttribute("alt") || !e.closest('[data-d-component="image"]') || !e.currentSrc || e.currentSrc !== e.src ? null : t
        }

        function v(e) {
            let t = e.dataset.chatgptCopyImageSrc;
            if (null == t) return 0;
            let a = g.get(e);
            return a?.url === e.currentSrc && t === y(e) ? a.bytes : (delete e.dataset.chatgptCopyImageData, delete e.dataset.chatgptCopyImageSrc, g.delete(e), 0)
        }
        var _ = a("N55g"),
            w = a("greq");
        let S = new Set;

        function x() {
            for (let e of S) e.presentation.onPageHide()
        }

        function I(e) {
            let t, a, d, c, u, p, m, g, h, f, b, y = (0, i.c)(30),
                {
                    children: v,
                    contentReferenceIndex: _,
                    isPresented: I,
                    isPreparing: E,
                    isStreaming: A,
                    sourceMessageId: P
                } = e,
                T = void 0 === I || I,
                k = (0, n.y)(l.a);
            y[0] !== k ? (t = () => (0, w.c)(k), y[0] = k, y[1] = t) : t = y[1];
            let [L] = (0, s.useState)(t), M = void 0 !== E && E ? null : L;
            y[2] !== T || y[3] !== A || y[4] !== M ? (a = () => {
                M && (M.presentation.updateStreaming(A), M.presentation.setPresented(T))
            }, d = [M, T, A], y[2] = T, y[3] = A, y[4] = M, y[5] = a, y[6] = d) : (a = y[5], d = y[6]), (0, s.useLayoutEffect)(a, d), y[7] !== A || y[8] !== M?.presentation ? (c = () => M?.presentation.attach(A), y[7] = A, y[8] = M?.presentation, y[9] = c) : c = y[9];
            let O = (0, s.useEffectEvent)(c);
            y[10] !== O || y[11] !== M ? (u = () => {
                if (!M) return;
                let e = O();
                return S.add(M), 1 === S.size && window.addEventListener("pagehide", x, !0), () => {
                    S.delete(M), 0 === S.size && window.removeEventListener("pagehide", x, !0), e?.()
                }
            }, y[10] = O, y[11] = M, y[12] = u) : u = y[12], y[13] !== M ? (p = [M], y[13] = M, y[14] = p) : p = y[14], (0, s.useEffect)(u, p);
            let R = null == _ ? void 0 : "contents";
            y[15] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, r.jsx)(C, {}), y[15] = m) : m = y[15];
            let F = M?.render.onHostRenderFailure;
            return y[16] !== v || y[17] !== F ? (g = (0, r.jsx)(o.a, {
                name: "ModelWrittenDILV2Renderer",
                fallback: m,
                onError: F,
                children: v
            }), y[16] = v, y[17] = F, y[18] = g) : g = y[18], y[19] !== _ || y[20] !== P || y[21] !== g || y[22] !== R ? (h = (0, r.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": P,
                "data-chatgpt-copy-reference": _,
                "data-markdown-copy": R,
                onLoadCapture: j,
                children: g
            }), y[19] = _, y[20] = P, y[21] = g, y[22] = R, y[23] = h) : h = y[23], y[24] !== M || y[25] !== h ? (f = (0, r.jsx)(w.b.Provider, {
                value: M,
                children: h
            }), y[24] = M, y[25] = h, y[26] = f) : f = y[26], y[27] !== L.render.onPreparationEnd || y[28] !== f ? (b = (0, r.jsx)(w.a.Provider, {
                value: L.render.onPreparationEnd,
                children: f
            }), y[27] = L.render.onPreparationEnd, y[28] = f, y[29] = b) : b = y[29], b
        }

        function j(e) {
            e.target instanceof HTMLImageElement && f(e.currentTarget, e.target)
        }

        function C(e) {
            let t, a, n, o = (0, i.c)(12),
                {
                    stage: l,
                    errorClass: d,
                    initialization: c
                } = e,
                u = void 0 !== c && c,
                p = (0, s.useContext)(w.b);
            return o[0] !== u || o[1] !== p?.presentation || o[2] !== p?.render || o[3] !== l ? (t = () => {
                null != l && p?.render.onTerminalFailure(l), p?.render.onFallbackResult("shown", l), p?.presentation.reportRootFailure(u)
            }, o[0] = u, o[1] = p?.presentation, o[2] = p?.render, o[3] = l, o[4] = t) : t = o[4], o[5] !== u || o[6] !== p || o[7] !== l ? (a = [p, l, u], o[5] = u, o[6] = p, o[7] = l, o[8] = a) : a = o[8], (0, s.useEffect)(t, a), o[9] !== d || o[10] !== l ? (n = (0, r.jsx)(_.a, {
                stage: l,
                errorClass: d
            }), o[9] = d, o[10] = l, o[11] = n) : n = o[11], n
        }
    }),
    erFs: (function(e, t, a) {
        a.d(t, {
            a: () => Z,
            b: () => ee
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
            m = a("ABep"),
            g = a("QosV");
        let h = {
            $type: "protobuf_analytics_events.v1.ChatgptImagegenPromptSharingAction"
        };
        var f = a("T0Rc"),
            b = a("iTtm"),
            y = a("zd8w"),
            v = a("Wf1j"),
            _ = a("oyxz"),
            w = a("EShr"),
            S = a("OWtl"),
            x = a("hZax"),
            I = a("eShZ"),
            j = a("lBzi"),
            C = a("r9i9"),
            E = a("tdfh"),
            A = a("aFoA"),
            P = a("OOaz"),
            T = a("MrGp"),
            k = a("jfiJ"),
            L = a("ygO2"),
            M = a("bf6R"),
            O = a("zKCW"),
            R = a("JNtf"),
            F = a("mUDD");

        function G(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var q = a("zLIa");

        function N(e) {
            let t, a, r, i, n, s, o, l = (0, g.c)(19),
                {
                    content: d,
                    onChange: c,
                    disabled: u,
                    autoFocus: p
                } = e,
                h = void 0 !== u && u,
                f = void 0 !== p && p;
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, m.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-title",
                children: (0, m.jsx)(_.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title",
                    description: "Label for the shared image prompt template title"
                })
            }), l[0] = t) : t = l[0], l[1] !== d || l[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), l[1] = d, l[2] = c, l[3] = a) : a = l[3], l[4] !== f || l[5] !== d.title || l[6] !== a ? (r = (0, m.jsxs)(F.f, {
                children: [t, (0, m.jsx)(q.c, {
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
            }), l[4] = f, l[5] = d.title, l[6] = a, l[7] = r) : r = l[7], l[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, m.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, m.jsx)(_.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt",
                    description: "Label for the reusable image generation prompt"
                })
            }), l[8] = i) : i = l[8], l[9] !== d || l[10] !== c ? (n = e => c({
                ...d,
                prompt: e.target.value
            }), l[9] = d, l[10] = c, l[11] = n) : n = l[11], l[12] !== d.prompt || l[13] !== n ? (s = (0, m.jsxs)(F.f, {
                children: [i, (0, m.jsx)(q.c, {
                    id: "image-prompt-text",
                    name: "prompt",
                    variant: "compact",
                    required: !0,
                    rows: 2,
                    maxLength: 2e5,
                    value: d.prompt,
                    onChange: n
                })]
            }), l[12] = d.prompt, l[13] = n, l[14] = s) : s = l[14], l[15] !== h || l[16] !== r || l[17] !== s ? (o = (0, m.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [r, s]
            }), l[15] = h, l[16] = r, l[17] = s, l[18] = o) : o = l[18], o
        }

        function z(e) {
            let t, a, r, i, n, s, o, l, d, c, u, p, h, f, b, w, S, x, j, C, E = (0, g.c)(54),
                {
                    content: A,
                    onSave: P,
                    onClose: T,
                    onCloseAutoFocus: k
                } = e,
                q = (0, v.a)(),
                [z, B] = (0, y.useState)(A),
                [D, H] = (0, y.useState)(!1),
                [W, K] = (0, y.useState)(null);
            E[0] !== z || E[1] !== D || E[2] !== T || E[3] !== P ? (t = async function() {
                if (!D && G(z)) {
                    H(!0), K(null);
                    try {
                        await P(z), T()
                    } catch (e) {
                        K(e instanceof I.a && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    H(!1)
                }
            }, E[0] = z, E[1] = D, E[2] = T, E[3] = P, E[4] = t) : t = E[4];
            let U = t,
                V = !D;
            return E[5] !== k ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: k
            }, E[5] = k, E[6] = a) : a = E[6], E[7] !== D || E[8] !== T ? (r = e => {
                e || D || T()
            }, E[7] = D, E[8] = T, E[9] = r) : r = E[9], E[10] !== U ? (i = e => {
                e.preventDefault(), e.stopPropagation(), U()
            }, E[10] = U, E[11] = i) : i = E[11], E[12] !== q ? (n = q.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back",
                description: "Return from the image prompt editor to the sharing preview without saving the draft"
            }), E[12] = q, E[13] = n) : n = E[13], E[14] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, m.jsx)(M.ac, {}), E[14] = s) : s = E[14], E[15] !== D || E[16] !== T || E[17] !== n ? (o = (0, m.jsx)(L.a, {
                color: "ghost",
                size: "icon",
                disabled: D,
                "aria-label": n,
                onClick: T,
                children: s
            }), E[15] = D, E[16] = T, E[17] = n, E[18] = o) : o = E[18], E[19] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, m.jsx)(F.d, {
                title: (0, m.jsx)(R.e, {
                    children: (0, m.jsx)(_.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt",
                        description: "Title of the dialog for editing the image's shared title and prompt"
                    })
                })
            }), E[19] = l) : l = E[19], E[20] !== o ? (d = (0, m.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [o, l]
            }), E[20] = o, E[21] = d) : d = E[21], E[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                B(e), K(null)
            }, E[22] = c) : c = E[22], E[23] !== z || E[24] !== D ? (u = (0, m.jsx)(F.e, {
                spacing: "large",
                children: (0, m.jsx)(N, {
                    content: z,
                    disabled: D,
                    autoFocus: !0,
                    onChange: c
                })
            }), E[23] = z, E[24] = D, E[25] = u) : u = E[25], E[26] !== W ? (p = null != W && (0, m.jsx)(F.e, {
                children: (0, m.jsx)(O.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === W ? (0, m.jsx)(_.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again.",
                        description: "Error when moderation rejects an edit to a shared image prompt"
                    }) : (0, m.jsx)(_.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again.",
                        description: "Error when saving an image prompt fails; the draft remains in the editor for retry"
                    })
                })
            }), E[26] = W, E[27] = p) : p = E[27], E[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, m.jsx)(_.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel",
                description: "Discard edits and return to the image prompt sharing preview"
            }), E[28] = h) : h = E[28], E[29] !== D || E[30] !== T ? (f = (0, m.jsx)(L.a, {
                color: "outline",
                disabled: D,
                onClick: T,
                children: h
            }), E[29] = D, E[30] = T, E[31] = f) : f = E[31], E[32] !== z || E[33] !== D ? (b = !G(z) || D, E[32] = z, E[33] = D, E[34] = b) : b = E[34], E[35] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, m.jsx)(_.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save",
                description: "Apply the edited title and prompt and return to the image sharing preview"
            }), E[35] = w) : w = E[35], E[36] !== D || E[37] !== b ? (S = (0, m.jsx)(L.a, {
                type: "submit",
                color: "primary",
                loading: D,
                disabled: b,
                children: w
            }), E[36] = D, E[37] = b, E[38] = S) : S = E[38], E[39] !== f || E[40] !== S ? (x = (0, m.jsxs)(F.c, {
                expandSingleButton: !1,
                children: [f, S]
            }), E[39] = f, E[40] = S, E[41] = x) : x = E[41], E[42] !== d || E[43] !== u || E[44] !== p || E[45] !== x || E[46] !== i ? (j = (0, m.jsxs)(F.b, {
                as: "form",
                size: "viewport",
                onSubmit: i,
                children: [d, u, p, x]
            }), E[42] = d, E[43] = u, E[44] = p, E[45] = x, E[46] = i, E[47] = j) : j = E[47], E[48] !== D || E[49] !== V || E[50] !== j || E[51] !== a || E[52] !== r ? (C = (0, m.jsx)(R.b, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: V,
                shouldIgnoreClickOutside: D,
                contentProps: a,
                onOpenChange: r,
                children: j
            }), E[48] = D, E[49] = V, E[50] = j, E[51] = a, E[52] = r, E[53] = C) : C = E[53], C
        }

        function B(e) {
            let t, a, r, i, n, s, o, l, d, c, u, p = (0, g.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: b,
                    disabled: _,
                    onSave: w
                } = e,
                S = (0, v.a)(),
                [x, I] = (0, y.useState)(!1),
                j = (0, y.useRef)(null);
            return p[0] !== b || p[1] !== f ? (t = null != f && (0, m.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: b,
                src: f,
                referrerPolicy: "no-referrer"
            }), p[0] = b, p[1] = f, p[2] = t) : t = p[2], p[3] !== S ? (a = S.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt",
                description: "Accessible label for the pencil button that opens the shared image title and prompt editor"
            }), p[3] = S, p[4] = a) : a = p[4], p[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => I(!0), i = (0, m.jsx)(M.Of, {}), p[5] = r, p[6] = i) : (r = p[5], i = p[6]), p[7] !== _ || p[8] !== a ? (n = (0, m.jsx)(L.a, {
                ref: j,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: _,
                "aria-label": a,
                onClick: r,
                children: i
            }), p[7] = _, p[8] = a, p[9] = n) : n = p[9], p[10] !== t || p[11] !== n ? (s = (0, m.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, n]
            }), p[10] = t, p[11] = n, p[12] = s) : s = p[12], p[13] !== h.title ? (o = (0, m.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: h.title
            }), p[13] = h.title, p[14] = o) : o = p[14], p[15] !== h.prompt ? (l = (0, m.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: h.prompt
            }), p[15] = h.prompt, p[16] = l) : l = p[16], p[17] !== s || p[18] !== o || p[19] !== l ? (d = (0, m.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [s, o, l]
            }), p[17] = s, p[18] = o, p[19] = l, p[20] = d) : d = p[20], p[21] !== h || p[22] !== x || p[23] !== w ? (c = x && (0, m.jsx)(z, {
                content: h,
                onSave: w,
                onClose: () => I(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), j.current?.focus()
                }
            }), p[21] = h, p[22] = x, p[23] = w, p[24] = c) : c = p[24], p[25] !== c || p[26] !== d ? (u = (0, m.jsxs)(m.Fragment, {
                children: [d, c]
            }), p[25] = c, p[26] = d, p[27] = u) : u = p[27], u
        }
        var D = a("AuIy"),
            H = a("Wc42"),
            W = a("iqEK"),
            K = a("ccwJ"),
            U = a("Kwur");
        let V = (0, b.v)(S.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function Q(e, t, a) {
            Y(e, t);
            let r = t.assetPointer,
                i = t.messageId;
            if (null == r || null == i) throw Error("Image prompt share source unavailable");
            let n = e.get(V, t);
            if (null != n.publication) return n.publication;
            let s = n.idempotencyKey ?? crypto.randomUUID();
            e.set(V, t, {
                ...n,
                idempotencyKey: s
            });
            try {
                let o = await e.queryClient.fetchQuery({
                    queryKey: ["image-prompt-share-publication", t, s],
                    staleTime: 1 / 0,
                    gcTime: 1 / 0,
                    retry: !1,
                    queryFn: () => U.Request.safePost("/share/prompt-share", {
                        isExpectedError: $,
                        requestBody: {
                            idempotency_key: s,
                            conversation_id: t.conversationId,
                            message_id: i,
                            output_asset_pointer: r,
                            post_text: a.title,
                            published_content: n.editedContent ?? void 0
                        }
                    })
                });
                return Y(e, t), e.set(V, t, e => ({
                    ...e,
                    publication: o
                })), o
            } catch (a) {
                throw a instanceof I.a && $(a) && e.set(V, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }
        async function J(e, t, a, r) {
            Y(e, t);
            let i = e.get(V, t),
                n = null == i.idempotencyKey ? i.publication : await Q(e, t, a),
                s = r;
            if (null != n) {
                let e = await U.Request.safePatch("/share/post/{post_id}/prompt-share", {
                    isExpectedError: $,
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
            Y(e, t), e.set(V, t, e => ({
                ...e,
                editedContent: s,
                publication: null == e.publication ? null : {
                    ...e.publication,
                    title: s.title
                },
                revision: e.revision + 1
            }))
        }

        function Y(e, t) {
            if (null == t.accountId || null == t.userId || e.get(n.f) !== t.accountId || e.get(n.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function $(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function X(e) {
            let t, a, r, i, s, l, d, c, u, p, L, M, O, R = (0, g.c)(65),
                F = (0, b.y)(S.a),
                q = (0, v.a)(),
                N = (0, b.z)(n.f),
                z = (0, b.z)(n.j);
            R[0] !== N || R[1] !== z ? (t = {
                accountId: N,
                userId: z
            }, R[0] = N, R[1] = z, R[2] = t) : t = R[2];
            let [U] = (0, y.useState)(t), Y = (0, x.h)("2496586795"), $ = (0, x.h)("1939400492"), X = (0, x.m)("250422953"), [Z, ee] = (0, y.useState)("image"), et = e.image, ea = et?.item.isAnimated === !0, er = U.accountId === N && U.userId === z, ei = null != et && !et.additionalImages?.length && null != N && null != z && er && Y && !$;
            R[3] !== ei || R[4] !== X ? (a = ei && X.get("imagegen_prompt_share_tabs_enabled", !1), R[3] = ei, R[4] = X, R[5] = a) : a = R[5];
            let en = a,
                es = et?.item.id;
            R[6] !== N || R[7] !== e.serverConversationId || R[8] !== es || R[9] !== z ? (r = ["image-prompt-share-source", N, z, e.serverConversationId, es], R[6] = N, R[7] = e.serverConversationId, R[8] = es, R[9] = z, R[10] = r) : r = R[10], R[11] !== et || R[12] !== e.serverConversationId || R[13] !== F ? (i = async t => {
                let {
                    signal: a
                } = t;
                if (null == et) return null;
                let r = (0, P.c)(e.serverConversationId),
                    i = F.get(A.a, r) ?? r,
                    n = () => {
                        let e = F.get(T.L, i) ?? F.query.getData(j.chatGptConversationQueryById$, r)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, K.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, r] = a, i = a[1].message, n = (0, K.b)(i, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (n?.src == null || "completed" !== n.status || !(0, W.d)(n.src)) return null;
                            let s = (0, D.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == s || (0, D.k)(s)) return null;
                            let o = (0, D.o)(i.content),
                                l = (Array.isArray(o?.parts) ? o.parts : []).map(D.o).find(e => e?.asset_pointer === n.src || (0, D.o)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, D.o)(l?.image_asset_pointer) ?? l,
                                c = (0, H.a)((0, D.o)((0, D.o)(d?.metadata)?.dalle)?.prompt) ?? (0, H.a)((0, D.d)(s)),
                                u = (0, H.a)(i.id);
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
                return null != s ? s : (await (0, k.a)(F, r, a), n())
            }, R[11] = et, R[12] = e.serverConversationId, R[13] = F, R[14] = i) : i = R[14], R[15] !== r || R[16] !== i || R[17] !== en ? (s = {
                enabled: en,
                queryKey: r,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: i
            }, R[15] = r, R[16] = i, R[17] = en, R[18] = s) : s = R[18];
            let {
                data: eo
            } = (0, f.a)(s), el = eo?.messageId ?? null, ed = eo?.assetPointer ?? null;
            R[19] !== N || R[20] !== e.serverConversationId || R[21] !== el || R[22] !== ed || R[23] !== z ? (l = {
                accountId: N,
                userId: z,
                conversationId: e.serverConversationId,
                messageId: el,
                assetPointer: ed
            }, R[19] = N, R[20] = e.serverConversationId, R[21] = el, R[22] = ed, R[23] = z, R[24] = l) : l = R[24];
            let ec = l,
                {
                    editedContent: eu,
                    publication: ep
                } = (0, b.x)(V, ec),
                em = en && null != eo,
                eg = em && "image_with_prompt" === X.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                eh = em && "template" === Z;
            R[25] !== eu || R[26] !== ep?.title || R[27] !== eo ? (d = eu ?? (null == eo ? void 0 : {
                ...eo.content,
                title: ep?.title ?? eo.content.title
            }), R[25] = eu, R[26] = ep?.title, R[27] = eo, R[28] = d) : d = R[28];
            let ef = d;
            R[29] !== U.accountId || R[30] !== U.userId || R[31] !== F ? (c = function() {
                if (F.get(n.f) !== U.accountId || F.get(n.j) !== U.userId) throw Error("Image prompt share account changed")
            }, R[29] = U.accountId, R[30] = U.userId, R[31] = F, R[32] = c) : c = R[32];
            let eb = c;
            R[33] !== ef || R[34] !== et?.item || R[35] !== e.source || R[36] !== eb || R[37] !== F || R[38] !== ec || R[39] !== eo ? (u = async function(t) {
                let a;
                if (eb(), null == eo || null == ef || !G(ef)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await Q(F, ec, eo.content)
                } catch (e) {
                    if (e instanceof I.a && "prompt_share_not_publishable" === e.errorCode) throw new C.a;
                    throw e
                }
                if (eb(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, o.a)(F, h, {
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
            }, R[33] = ef, R[34] = et?.item, R[35] = e.source, R[36] = eb, R[37] = F, R[38] = ec, R[39] = eo, R[40] = u) : u = R[40];
            let ey = u;
            if (R[41] !== ea || R[42] !== eg ? (p = ea ? (0, m.jsx)(_.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt",
                    description: "Short share-format option in the generated GIF sharing dialog. Shares the animated GIF together with its reusable prompt; the other option is GIF only."
                }) : "image_with_prompt" === eg ? (0, m.jsx)(_.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt",
                    description: "Share-format option for sharing the generated image together with its reusable prompt. The other option is Image only."
                }) : (0, m.jsx)(_.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image",
                    description: "Share the reusable prompt together with the generated image"
                }), R[41] = ea, R[42] = eg, R[43] = p) : p = R[43], !er) return null;
            let ev = eh ? "template" : "image";
            return R[44] !== q || R[45] !== ea || R[46] !== Z || R[47] !== p || R[48] !== em ? (L = em ? e => (0, m.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, m.jsx)(w.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: Z,
                    onSelect: ee,
                    ariaLabel: q.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format",
                        description: "Label for choosing between sharing an image or its prompt template"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: ea ? (0, m.jsx)(_.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only",
                            description: "Short share-format option in the generated GIF sharing dialog. Shares only the animated GIF; the other option shares the GIF with its reusable prompt."
                        }) : (0, m.jsx)(_.a, {
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
            }) : void 0, R[44] = q, R[45] = ea, R[46] = Z, R[47] = p, R[48] = em, R[49] = L) : L = R[49], R[50] !== ef || R[51] !== ey || R[52] !== et?.alt || R[53] !== eb || R[54] !== F || R[55] !== ec || R[56] !== eo || R[57] !== eg || R[58] !== eh ? (M = eh && null != ef ? {
                label: eg,
                createLink: ey,
                actionsDisabled: !G(ef),
                preview: (e, t, a) => (0, m.jsx)(B, {
                    content: ef,
                    previewSrc: t,
                    alt: et?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (eb(), null == eo) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== ef.title.trim() || e.prompt !== ef.prompt) && await J(F, ec, eo.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), eb(), a()
                    }
                })
            } : void 0, R[50] = ef, R[51] = ey, R[52] = et?.alt, R[53] = eb, R[54] = F, R[55] = ec, R[56] = eo, R[57] = eg, R[58] = eh, R[59] = M) : M = R[59], R[60] !== e || R[61] !== ev || R[62] !== L || R[63] !== M ? (O = (0, m.jsx)(E.a, {
                ...e,
                imageShareOptions: L,
                imagePromptTemplate: M
            }, ev), R[60] = e, R[61] = ev, R[62] = L, R[63] = M, R[64] = O) : O = R[64], O
        }

        function Z(e, t) {
            let {
                additionalImages: a,
                alt: d,
                downloadAnalyticsImage: m,
                downloadIsParagen: g,
                image: h,
                isDirectLightboxShare: f,
                previewSrc: b,
                serverConversationId: y,
                source: v = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                title: _
            } = t, w = crypto.randomUUID();
            (0, o.a)(e, r.h, {
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED",
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                conversationId: y,
                shareSessionId: w,
                source: v
            });
            let S = e.get(n.f),
                x = e.get(n.j),
                I = (0, i.d)(),
                j = I && null != S && null != x ? (0, c.h)(e.get(l.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                C = e.get(n.e),
                E = "loaded" === C.status && "personal" === C.structure || "loading" === C.status && "personal" === C.structureAtLogin,
                A = null == j ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: j,
                    isMobileBrowser: I,
                    isPersonalAccount: E
                }),
                P = {
                    additionalImages: a,
                    alt: d,
                    downloadAnalyticsImage: m,
                    downloadIsParagen: g,
                    isDirectLightboxShare: f,
                    item: h,
                    previewSrc: b
                },
                T = () => (0, s.f)(e, X, {
                    currentNodeId: h.id,
                    image: P,
                    serverConversationId: y,
                    shareSessionId: w,
                    source: v,
                    title: _,
                    mobileImageExperience: A,
                    trackMobileImageShareLifecycle: I && j?.kind === "native"
                });
            async function k() {
                let t = () => e.get(n.f) === S && e.get(n.j) === x,
                    a = (0, u.a)(e, y, P);
                try {
                    let r = e.queryClient.getQueryData(a.queryKey);
                    if (null == r) return void T();
                    if (!t()) return;
                    if (!E) return void T();
                    let i = await (0, p.b)(e, r, y, w, v);
                    if ("shared" === i || "cancelled" === i) return
                } catch {}
                t() && T()
            }
            I && j?.kind === "native" && "function" == typeof navigator.share ? k() : T()
        }
        async function ee(e, t) {
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
            u = a("MrGp"),
            p = a("gbRX"),
            m = a("hwXH"),
            g = a("FGJH");
        async function h(e, t, a) {
            if (e.get(g.c, t)?.complete === !0) return;
            let r = e.get(n.a),
                s = (0, m.c)(e, t, a);
            s.assertRequestCurrent(), await e.queryClient.fetchQuery({
                queryKey: ["chatgpt-conversation-full", s.expectedIdentity?.accountId ?? r, t],
                staleTime: 0,
                retry: !1,
                queryFn: async o => {
                    let {
                        signal: d
                    } = o, c = await (0, m.a)(e, t, {
                        forceFull: !0,
                        signal: null == a ? d : AbortSignal.any([a, d])
                    });
                    return s.assertRequestCurrent(), a?.aborted || e.get(n.a) !== r || ((0, i.flushSync)(() => (0, u.hc)(e, c, {
                        mergeActiveBranch: !0,
                        preserveAsyncStatus: !0
                    })), e.query.setData(l.chatGptConversationQueryById$, t, c)), c
                }
            })
        }
        async function f(e, t, a) {
            let i = e.get(g.c, t);
            if (null == i || i.complete || i.isLoading || null == i.cursor || null == i.oldestMessageId) return;
            let {
                cursor: h,
                oldestMessageId: f
            } = i, y = e.get(n.a), v = (0, m.c)(e, t), _ = {
                ...i,
                isLoading: !0,
                hasError: !1
            }, w = () => {
                let a = e.get(g.c, t);
                return e.get(n.a) === y && null != a && !a.complete && a.cursor === h && a.oldestMessageId === f
            };
            try {
                v.assertRequestCurrent(), e.set(g.c, t, _);
                let n = new Set,
                    S = h,
                    x = async () => {
                        n.add(S);
                        let a = await e.queryClient.fetchQuery({
                            queryKey: ["chatgpt-conversation-page", v.expectedIdentity?.accountId ?? y, t, S],
                            staleTime: 0,
                            retry: (e, t) => e < 1 && "AbortError" !== t.name && !b(t) && !(t instanceof o.a && 429 === t.responseStatus),
                            queryFn: a => {
                                let {
                                    signal: r
                                } = a;
                                return (0, p.c)(e, "page", r, () => d.Request.safeGet("/conversations/{conversation_id}/messages", {
                                    ...v,
                                    retry: "except-rate-limit",
                                    parameters: {
                                        path: {
                                            conversation_id: t
                                        },
                                        query: {
                                            before: S,
                                            num_turns: i.numTurns,
                                            include_has_versions: !0
                                        }
                                    },
                                    additionalHeaders: {
                                        ...(0, m.b)(e, t),
                                        ...v.additionalHeaders
                                    },
                                    signal: r
                                }).finally(() => {
                                    r.throwIfAborted(), v.assertRequestCurrent()
                                }))
                            }
                        });
                        return v.assertRequestCurrent(), (0, s.a)(e, r.b, {
                            conversationId: t,
                            messageCount: a.messages.length,
                            hasMoreMessages: a.page_info.has_previous_page
                        }), a
                    }, I = await x(), j = I.page_info.has_previous_page ? I.page_info.start_cursor ?? null : null;
                for (; 0 === I.messages.length && null != j;) {
                    if (!w()) return;
                    if (n.has(j)) throw Error("Conversation pagination cursor did not advance");
                    S = j;
                    let e = await x();
                    j = (I = {
                        ...e,
                        safe_urls: [...I.safe_urls ?? [], ...e.safe_urls ?? []],
                        blocked_urls: [...I.blocked_urls ?? [], ...e.blocked_urls ?? []]
                    }).page_info.has_previous_page ? I.page_info.start_cursor ?? null : null
                }
                if (!w()) return;
                if (null != j && n.has(j)) throw Error("Conversation pagination cursor did not advance");
                v.assertRequestCurrent(), a(() => {
                    let a = (0, u.Db)(e, (0, c.c)(t), I.messages, f);
                    e.set(g.c, t, {
                        ...i,
                        cursor: j,
                        oldestMessageId: a,
                        isLoading: !1,
                        hasError: !1,
                        hasLoadedOlderPages: !0
                    })
                }), e.query.setData(l.chatGptConversationQueryById$, t, e => null == e ? e : {
                    ...e,
                    safe_urls: [...new Set([...e.safe_urls ?? [], ...I.safe_urls ?? []])],
                    blocked_urls: [...new Set([...e.blocked_urls ?? [], ...I.blocked_urls ?? []])]
                })
            } catch (r) {
                if (r instanceof Error && "AbortError" === r.name || !w()) return;
                if (b(r)) try {
                    let r = await (0, m.a)(e, t);
                    if (v.assertRequestCurrent(), !w()) return;
                    a(() => {
                        e.set(g.c, t, {
                            ...i,
                            isLoading: !1,
                            hasLoadedOlderPages: !1
                        }), (0, u.hc)(e, r, {
                            preserveAsyncStatus: !0
                        })
                    });
                    return
                } catch (e) {
                    if (e instanceof Error && "AbortError" === e.name) return
                }
                w() && e.set(g.c, t, {
                    ...i,
                    isLoading: !1,
                    hasError: !0
                })
            } finally {
                e.get(g.c, t) === _ && e.set(g.c, t, {
                    ..._,
                    isLoading: !1
                })
            }
        }

        function b(e) {
            return e instanceof o.a && 400 === e.responseStatus && "invalid_cursor" === e.errorCode
        }
        a.d(t, {
            a: () => h,
            b: () => f
        })
    }),
    umQU: (function(e, t, a) {
        var r = a("iTtm"),
            i = a("Kwur"),
            n = a("MrGp"),
            s = a("bmqg"),
            o = a("SGsN"),
            l = a("urzV"),
            d = a("svjy"),
            c = a("tSEg"),
            u = a("zHp1"),
            p = a("Yscs"),
            m = a("GDNt");
        let g = (0, r.v)(c.a, e => null),
            h = (0, r.j)(c.a, (e, t) => {
                let r, {
                        image: s,
                        imageAssetResolver: c
                    } = e,
                    {
                        signal: h,
                        scope: f
                    } = t,
                    v = s?.gifPlayback?.originalSrc ?? s?.src,
                    _ = JSON.stringify([s?.id, v]),
                    w = 0,
                    S = Promise.resolve(),
                    x = h({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (s?.isAnimated) return f.watch(t => {
                                if (0 !== w) return;
                                let a = t.get(g, _),
                                    r = a ?? b(t, s)?.gifPlayback?.speed ?? 1;
                                (null != a || 1 !== r) && (e({
                                    preview: null,
                                    busy: !0
                                }), E(r, !1))
                            })
                        }
                    }),
                    I = async e => {
                        let t = null != e && (0, u.h)(e) && null != c ? await (0, u.a)(f.queryClient, e, c) : e,
                            a = null == t ? null : await (0, l.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, j = () => (null == r && (r = I(v).catch(e => {
                        throw r = void 0, e
                    })), r), C = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                            r = x.get().preview;
                        if (r?.speed === e && r.originalSrc === t) return r;
                        let i = (t === s?.watermarkedSrc ? s?.gifPlayback?.watermarkedVariants : s?.gifPlayback?.variants)?.[String(e)],
                            n = null == i ? null : await I(i).catch(() => null),
                            o = n ?? (t === v ? await j() : await I(t)),
                            l = null != n || 1 === e ? o : await (await a.e(764968).then(a.bind(a, "TPR0"))).withGifPlaybackSpeed(o, e);
                        return {
                            assetSrc: null != n ? i : void 0,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, p.a)(l),
                            sizeBytes: l.size
                        }
                    }, E = async (e, t) => {
                        let a = ++w;
                        x.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let r = await C(e);
                            if (a !== w) return !1;
                            return x.set({
                                preview: r,
                                busy: !1
                            }), t && (f.set(g, _, e), S = S.then(async () => {
                                if (a !== w || "chatgpt-thread" !== f.value.routeKind || s?.chatGptMessageId == null || null == v) return;
                                let t = f.get(n.j, f.value.conversationId);
                                null != t && await i.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: s.chatGptMessageId,
                                        asset_pointer: v,
                                        selected_speed: e
                                    },
                                    expectedErrorStatuses: [404, 405]
                                })
                            }).catch(e => {
                                e instanceof m.a && (404 === e.status || 405 === e.status) || f.get(o.f).danger(f.get(d.a).formatMessage({
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
                            return t && a === w && f.get(o.f).danger(f.get(d.a).formatMessage({
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
                    loadOriginal: j,
                    loadExport: async e => I((await C(e)).src),
                    changeSpeed: e => E(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let r = x.get().preview?.speed ?? f.get(g, _) ?? e.gifPlayback?.speed ?? 1,
                            i = {
                                ...e,
                                src: t,
                                gifPlayback: {
                                    ...e.gifPlayback,
                                    originalSrc: t,
                                    speed: r
                                }
                            };
                        if (1 === r) return i;
                        let n = await C(r, t);
                        return y(i, a && null != n.assetSrc ? {
                            ...n,
                            src: n.assetSrc
                        } : n)
                    }
                }
            }, {
                autoDispose: 6e4,
                key: e => {
                    let {
                        image: t
                    } = e;
                    return JSON.stringify([t?.id, t?.gifPlayback?.originalSrc ?? t?.src])
                }
            }),
            f = (0, r.d)(c.a, (e, t) => {
                let {
                    image: a,
                    conversationId: r,
                    imageAssetResolver: i
                } = e, {
                    scope: n
                } = t, s = b(n, a, r), o = n.get(h, {
                    image: s?.isAnimated === !0 ? s : void 0,
                    imageAssetResolver: i
                }), {
                    preview: l
                } = n.get(o.state$);
                return {
                    playback: o,
                    previewSrc: l?.src,
                    image: null == s ? void 0 : y(s, l),
                    originalSrc: s?.isAnimated === !0 ? s.gifPlayback?.originalSrc ?? s.src : s?.src,
                    canControl: a?.isAnimated === !0 && null != a.gifPlayback && "chatgpt-thread" === n.value.routeKind
                }
            });

        function b(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(s.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function y(e, t) {
            return !0 !== e.isAnimated || null == t || t.originalSrc !== (e.gifPlayback?.originalSrc ?? e.src) ? e : {
                ...e,
                src: t.src,
                sizeBytes: t.sizeBytes,
                gifPlayback: {
                    ...e.gifPlayback,
                    originalSrc: t.originalSrc,
                    speed: t.speed
                }
            }
        }
        a.d(t, {
            a: () => y,
            b: () => b
        }, {
            c: h,
            d: f
        })
    }),
    I0AH: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("on57");

        function s(e) {
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
                m = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                g = "imageTools" === u && "gap-0 shadow-md",
                h = "playback" === u && "gap-2 shadow-sm";
            return s[4] !== d || s[5] !== m || s[6] !== g || s[7] !== h ? (t = (0, n.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", m, g, h, d), s[4] = d, s[5] = m, s[6] = g, s[7] = h, s[8] = t) : t = s[8], s[9] !== o || s[10] !== l || s[11] !== p || s[12] !== t ? (a = (0, r.jsx)("div", {
                role: p,
                "aria-label": o,
                className: t,
                children: l
            }), s[9] = o, s[10] = l, s[11] = p, s[12] = t, s[13] = a) : a = s[13], a
        }
        a.d(t, {
            a: () => s
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
            m = a("ddzD"),
            g = a("I0AH"),
            h = a("mDqV"),
            f = a("ZedP"),
            b = a("h13t"),
            y = a("Y7yc");

        function v(e) {
            let t, a, v, _, w, S, x, I = (0, i.c)(53),
                {
                    downloadImageCount: j,
                    floatingToolbarVariant: C,
                    moreActions: E,
                    isAnimated: A,
                    isImageActionsDisabled: P,
                    isUnifiedViewerEnabled: T,
                    onDownload: k,
                    onDownloadAll: L,
                    onDownloadMenuOpen: M,
                    onShare: O,
                    onShareAll: R,
                    onShareMenuOpen: F,
                    saveAction: G,
                    shareImageCount: q,
                    showShareText: N
                } = e,
                z = void 0 !== A && A,
                B = void 0 !== T && T,
                D = void 0 !== N && N,
                H = (0, s.a)(),
                [W, K] = (0, n.useState)(!1),
                U = "toolbar";
            null != C && (U = "imageTools" === C ? "imageToolbar" : "composerSm"), I[0] !== U || I[1] !== C || I[2] !== H || I[3] !== P || I[4] !== B || I[5] !== O || I[6] !== R || I[7] !== D ? (t = B ? (0, r.jsxs)(h.c, {
                "aria-label": H.formatMessage({
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                }),
                disabled: P,
                uniform: !D,
                onClick: null == R ? O : void 0,
                children: [(0, r.jsx)(p.b, {
                    icon: {
                        16: u.L,
                        20: u.M
                    }
                }), D ? (0, r.jsx)(o.a, {
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                }) : null]
            }) : (0, r.jsx)(l.a, {
                color: null == C ? "primary" : "ghostActive",
                disabled: P,
                size: U,
                onClick: null == R ? O : void 0,
                children: (0, r.jsx)(o.a, {
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                })
            }), I[0] = U, I[1] = C, I[2] = H, I[3] = P, I[4] = B, I[5] = O, I[6] = R, I[7] = D, I[8] = t) : t = I[8];
            let V = t;
            if (null != O && null != R) {
                let e;
                I[9] !== z || I[10] !== P || I[11] !== O || I[12] !== R || I[13] !== F || I[14] !== V || I[15] !== q ? (e = (0, r.jsx)(f.a, {
                    disabled: P,
                    imageCount: q,
                    isAnimated: z,
                    onOpen: F,
                    onShare: O,
                    onShareAll: R,
                    triggerButton: V
                }), I[9] = z, I[10] = P, I[11] = O, I[12] = R, I[13] = F, I[14] = V, I[15] = q, I[16] = e) : e = I[16], V = e
            }
            if (null != C) {
                let e;
                I[17] !== C || I[18] !== V ? (e = (0, r.jsx)(g.a, {
                    variant: C,
                    children: V
                }), I[17] = C, I[18] = V, I[19] = e) : e = I[19], V = e
            }
            I[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                K(!0), await e().finally(() => {
                    K(!1)
                })
            }, I[20] = a) : a = I[20];
            let Q = a;
            I[21] !== U || I[22] !== j || I[23] !== C || I[24] !== H || I[25] !== z || I[26] !== W || I[27] !== P || I[28] !== B || I[29] !== k || I[30] !== L || I[31] !== M || I[32] !== G ? (v = null != L && null != k ? (0, r.jsxs)(d.a, {
                align: "end",
                disabled: P || W,
                onOpenChange: e => {
                    e && M?.()
                },
                triggerButton: B ? (0, r.jsx)(h.c, {
                    "aria-label": H.formatMessage((0, m.a)({
                        isAnimated: z
                    }).downloadLabel),
                    disabled: P || W,
                    loading: W,
                    uniform: !0,
                    children: (0, r.jsx)(p.b, {
                        icon: {
                            assets: {
                                16: b.a,
                                20: y.a
                            }
                        }
                    })
                }) : (0, r.jsx)(l.a, {
                    "aria-label": H.formatMessage((0, m.a)({
                        isAnimated: z
                    }).downloadLabel),
                    color: null == C ? "ghost" : "ghostActive",
                    disabled: P || W,
                    loading: W,
                    size: U,
                    uniform: !0,
                    children: "compact" === C ? (0, r.jsx)(c.a, {
                        asset: b.a
                    }) : (0, r.jsx)(u.r, {})
                }),
                children: [(0, r.jsx)(d.c.Item, {
                    onSelect: () => void Q(k),
                    children: (0, r.jsx)(o.a, {
                        ...(0, m.a)({
                            isAnimated: z
                        }).downloadMenuLabel
                    })
                }), (0, r.jsx)(d.c.Item, {
                    onSelect: () => void Q(L),
                    children: (0, r.jsx)(o.a, {
                        id: "imagePreview.downloadSeries",
                        defaultMessage: "Download {count} images in this series",
                        description: "Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.",
                        values: {
                            count: j
                        }
                    })
                })]
            }) : G, I[21] = U, I[22] = j, I[23] = C, I[24] = H, I[25] = z, I[26] = W, I[27] = P, I[28] = B, I[29] = k, I[30] = L, I[31] = M, I[32] = G, I[33] = v) : v = I[33];
            let J = v;
            if (null != C && null != L && null != k) {
                let e;
                I[34] !== J || I[35] !== C ? (e = (0, r.jsx)(g.a, {
                    variant: C,
                    children: J
                }), I[34] = J, I[35] = C, I[36] = e) : e = I[36], J = e
            }
            let Y = null == O ? null : V;
            I[37] !== J || I[38] !== Y ? (_ = (0, r.jsxs)(r.Fragment, {
                children: [J, Y]
            }), I[37] = J, I[38] = Y, I[39] = _) : _ = I[39];
            let $ = _;
            I[40] !== C || I[41] !== E ? (w = null == E || null == C ? E : (0, r.jsx)(g.a, {
                variant: C,
                children: E
            }), I[40] = C, I[41] = E, I[42] = w) : w = I[42];
            let X = w,
                Z = null != O || null != J;
            if (!B || D) {
                let e;
                return I[43] !== $ || I[44] !== X ? (e = (0, r.jsxs)(r.Fragment, {
                    children: [$, X]
                }), I[43] = $, I[44] = X, I[45] = e) : e = I[45], e
            }
            return I[46] !== Z || I[47] !== H || I[48] !== $ ? (S = Z ? (0, r.jsx)(h.i, {
                label: H.formatMessage({
                    id: "imagePreview.headerActions",
                    defaultMessage: "Image actions",
                    description: "Accessible label for the image viewer's Share and Download actions group"
                }),
                children: $
            }) : null, I[46] = Z, I[47] = H, I[48] = $, I[49] = S) : S = I[49], I[50] !== S || I[51] !== X ? (x = (0, r.jsxs)(r.Fragment, {
                children: [S, X]
            }), I[50] = S, I[51] = X, I[52] = x) : x = I[52], x
        }
        a.d(t, {
            a: () => v
        })
    }),
    ZedP: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("oyxz"),
            s = a("bqtn"),
            o = a("HOLv"),
            l = a("ddzD"),
            d = a("W0i8"),
            c = a("vifj");

        function u(e) {
            let t, a, u, p, m, g, h, f = (0, i.c)(19),
                {
                    disabled: b,
                    imageCount: y,
                    isAnimated: v,
                    onOpen: _,
                    onShare: w,
                    onShareAll: S,
                    triggerButton: x
                } = e,
                I = void 0 !== v && v;
            return f[0] !== _ ? (t = e => {
                e && _?.()
            }, f[0] = _, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(o.a, {
                className: "text-gray-1000",
                asset: d.a
            }), f[2] = a) : a = f[2], f[3] !== I ? (u = (0, l.a)({
                isAnimated: I
            }), f[3] = I, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (p = (0, r.jsx)(n.a, {
                ...u.shareSelectionLabel
            }), f[5] = u.shareSelectionLabel, f[6] = p) : p = f[6], f[7] !== w || f[8] !== p ? (m = (0, r.jsx)(s.c.Item, {
                leftIcon: a,
                onSelect: w,
                children: p
            }), f[7] = w, f[8] = p, f[9] = m) : m = f[9], f[10] !== y || f[11] !== S ? (g = null == S ? null : (0, r.jsx)(s.c.Item, {
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
            }), f[10] = y, f[11] = S, f[12] = g) : g = f[12], f[13] !== b || f[14] !== t || f[15] !== m || f[16] !== g || f[17] !== x ? (h = (0, r.jsxs)(s.a, {
                align: "end",
                disabled: b,
                triggerButton: x,
                onOpenChange: t,
                children: [m, g]
            }), f[13] = b, f[14] = t, f[15] = m, f[16] = g, f[17] = x, f[18] = h) : h = f[18], h
        }
        a.d(t, {
            a: () => u
        })
    })
};