export const __rspack_esm_ids = [823218];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("N55g");
        let l = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(954244), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(753405), a.e(585419), a.e(877700), a.e(353230), a.e(736270), a.e(516509), a.e(81461), a.e(214652), a.e(789902), a.e(883579), a.e(160112), a.e(822348), a.e(499790), a.e(769185), a.e(62441), a.e(907652), a.e(310815), a.e(762074), a.e(679646), a.e(587936), a.e(904817), a.e(452048), a.e(445991), a.e(299268), a.e(454441), a.e(877533), a.e(167649), a.e(826779), a.e(433520), a.e(509282), a.e(142274), a.e(975420), a.e(184940), a.e(523316)]).then(a.bind(a, "nTBW"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, r.jsx)(n.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: l
        })
    }),
    KO1w: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("vbBn");
        let l = (0, i.a)(async () => (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(954244), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(753405), a.e(585419), a.e(673131), a.e(321957), a.e(877700), a.e(353230), a.e(81461), a.e(214652), a.e(789902), a.e(784669), a.e(8197), a.e(882456), a.e(43573), a.e(373390), a.e(469052), a.e(418893), a.e(444472), a.e(281801), a.e(665589), a.e(631955), a.e(822348), a.e(499790), a.e(769185), a.e(62441), a.e(907652), a.e(310815), a.e(762074), a.e(679646), a.e(587936), a.e(904817), a.e(452048), a.e(445991), a.e(299268), a.e(454441), a.e(877533), a.e(167649), a.e(826779), a.e(433520), a.e(509282), a.e(142274), a.e(975420), a.e(912134), a.e(184940), a.e(240603)]).then(a.bind(a, "Ct9d"))).DilResponse, {
            errorFallback: (0, r.jsx)(n.b, {
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
            a: () => m,
            b: () => p,
            c: () => u
        });
        var r = a("Nl8C"),
            i = a("zd8w"),
            n = a("PFjh"),
            l = a("hJIv"),
            o = a("BolX"),
            s = a("fVOX"),
            d = a("OWtl");
        a("WFY2");
        let c = (0, o.u)(d.a, e => {
            let {
                scope: t
            } = e, a = 0, i = 0, l = (e, a, r) => {
                try {
                    (0, n.c)(t).count("default", "chatgpt.model_written_dil.v2.startup.report_suppressed", {
                        result: e,
                        report_cutoff: a,
                        reason: r,
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
                        let o, c = (0, r.h)(n);
                        if (c > r.b ? o = "report_byte_limit" : i + c > 262144 && (o = "page_byte_limit"), null != o) return l(n.result, n.report_cutoff, o), !1;
                        return a++, i += c, t.get(s.a).log({
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
                    hist: (e, a, r) => t.hist("default", e, {
                        ...a,
                        web_frontend: "codex_webview"
                    }, r)
                }),
                i = e.get(l.a),
                o = e.get(c),
                s = (0, r.e)(a, {
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
                    presentation: s
                }),
                presentation: s
            }
        }
        let p = (0, i.createContext)(null),
            m = (0, i.createContext)(null)
    }),
    vbBn: (function(e, t, a) {
        a.d(t, {
            a: () => _,
            b: () => I
        });
        var r = a("ABep"),
            i = a("QosV"),
            n = a("BolX"),
            l = a("zd8w"),
            o = a("UIU6"),
            s = a("OWtl"),
            d = a("RAbv"),
            c = a("zgGI"),
            u = a("zHp1"),
            p = a("Yscs");
        let m = new WeakMap,
            g = new WeakMap,
            h = /^image\/(?:jpeg|png|webp|gif)$/i;

        function f(e) {
            let t = e.getAttribute("src"),
                a = e.closest("[data-d-progressive-settled]")?.parentElement?.querySelector("[data-d-progressive-full] img");
            return !t || t.startsWith("data:") || e.srcset || a?.complete && a.naturalWidth > 0 || null != e.closest("picture") || "" === e.getAttribute("alt") || !e.closest('[data-d-component="image"]') || !e.currentSrc || e.currentSrc !== e.src ? null : t
        }

        function b(e) {
            let t = e.dataset.chatgptCopyImageSrc;
            if (null == t) return 0;
            let a = g.get(e);
            return a?.url === e.currentSrc && t === f(e) ? a.bytes : (delete e.dataset.chatgptCopyImageData, delete e.dataset.chatgptCopyImageSrc, g.delete(e), 0)
        }
        var v = a("N55g"),
            y = a("greq");
        let x = new Set;

        function w() {
            for (let e of x) e.presentation.onPageHide()
        }

        function _(e) {
            let t, a, d, c, u, p, m, g, h, f, b, v = (0, i.c)(31),
                {
                    children: _,
                    contentReferenceIndex: j,
                    isPresented: P,
                    isPreparing: E,
                    isStreaming: A,
                    sourceMessageId: C
                } = e,
                M = void 0 === P || P,
                T = (0, n.y)(s.a);
            v[0] !== T ? (t = () => (0, y.c)(T), v[0] = T, v[1] = t) : t = v[1];
            let [k] = (0, l.useState)(t), R = void 0 !== E && E ? null : k;
            v[2] !== M || v[3] !== A || v[4] !== R ? (a = () => {
                R && (R.presentation.updateStreaming(A), R.presentation.setPresented(M))
            }, d = [R, M, A], v[2] = M, v[3] = A, v[4] = R, v[5] = a, v[6] = d) : (a = v[5], d = v[6]), (0, l.useLayoutEffect)(a, d), v[7] !== A || v[8] !== R?.presentation || v[9] !== R?.presentation.attach ? (c = () => R?.presentation.attach(A), v[7] = A, v[8] = R?.presentation, v[9] = R?.presentation.attach, v[10] = c) : c = v[10];
            let L = (0, l.useEffectEvent)(c);
            v[11] !== L || v[12] !== R ? (u = () => {
                if (!R) return;
                let e = L();
                return x.add(R), 1 === x.size && window.addEventListener("pagehide", w, !0), () => {
                    x.delete(R), 0 === x.size && window.removeEventListener("pagehide", w, !0), e?.()
                }
            }, v[11] = L, v[12] = R, v[13] = u) : u = v[13], v[14] !== R ? (p = [R], v[14] = R, v[15] = p) : p = v[15], (0, l.useEffect)(u, p);
            let F = null == j ? void 0 : "contents";
            v[16] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, r.jsx)(I, {}), v[16] = m) : m = v[16];
            let O = R?.render.onHostRenderFailure;
            return v[17] !== _ || v[18] !== O ? (g = (0, r.jsx)(o.a, {
                name: "ModelWrittenDILV2Renderer",
                fallback: m,
                onError: O,
                children: _
            }), v[17] = _, v[18] = O, v[19] = g) : g = v[19], v[20] !== j || v[21] !== C || v[22] !== g || v[23] !== F ? (h = (0, r.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": C,
                "data-chatgpt-copy-reference": j,
                "data-markdown-copy": F,
                onLoadCapture: S,
                children: g
            }), v[20] = j, v[21] = C, v[22] = g, v[23] = F, v[24] = h) : h = v[24], v[25] !== R || v[26] !== h ? (f = (0, r.jsx)(y.b.Provider, {
                value: R,
                children: h
            }), v[25] = R, v[26] = h, v[27] = f) : f = v[27], v[28] !== k.render.onPreparationEnd || v[29] !== f ? (b = (0, r.jsx)(y.a.Provider, {
                value: k.render.onPreparationEnd,
                children: f
            }), v[28] = k.render.onPreparationEnd, v[29] = f, v[30] = b) : b = v[30], b
        }

        function S(e) {
            e.target instanceof HTMLImageElement && async function(e, t) {
                if (b(t) > 0) return;
                let a = f(t);
                if (!a) return;
                let r = URL.parse(t.currentSrc);
                if (null == r || r.origin !== e.ownerDocument.location.origin || !["blob:", "https:", "http:"].includes(r.protocol)) return;
                let i = (m.get(e) ?? Promise.resolve()).then(() => (async function(e, t, a, r) {
                    let i = () => e.contains(t) && a === f(t) && r.href === t.currentSrc;
                    try {
                        let n;
                        if (!i() || b(t) > 0) return;
                        let l = d.a;
                        for (let t of e.querySelectorAll("img[data-chatgpt-copy-image-src]")) l -= b(t);
                        let o = Math.min(524288, l);
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
                        let s = await (0, p.a)(n);
                        i() && (t.dataset.chatgptCopyImageSrc = a, t.dataset.chatgptCopyImageData = s, g.set(t, {
                            bytes: n.size,
                            url: r.href
                        }))
                    } catch {}
                })(e, t, a, r));
                return m.set(e, i), i
            }(e.currentTarget, e.target)
        }

        function I(e) {
            let t, a, n, o = (0, i.c)(8),
                {
                    stage: s,
                    errorClass: d,
                    initialization: c
                } = e,
                u = void 0 !== c && c,
                p = (0, l.useContext)(y.b);
            return o[0] !== u || o[1] !== p || o[2] !== s ? (t = () => {
                null != s && p?.render.onTerminalFailure(s), p?.render.onFallbackResult("shown", s), p?.presentation.reportRootFailure(u)
            }, a = [p, s, u], o[0] = u, o[1] = p, o[2] = s, o[3] = t, o[4] = a) : (t = o[3], a = o[4]), (0, l.useEffect)(t, a), o[5] !== d || o[6] !== s ? (n = (0, r.jsx)(v.a, {
                stage: s,
                errorClass: d
            }), o[5] = d, o[6] = s, o[7] = n) : n = o[7], n
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
            l = a("X6Vn"),
            o = a("yGJW"),
            s = a("O666"),
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
            b = a("BolX"),
            v = a("zd8w"),
            y = a("Wf1j"),
            x = a("oyxz"),
            w = a("EShr"),
            _ = a("OWtl"),
            S = a("hZax"),
            I = a("eShZ"),
            j = a("lBzi"),
            P = a("r9i9"),
            E = a("tdfh"),
            A = a("aFoA"),
            C = a("OOaz"),
            M = a("dQRk"),
            T = a("jfiJ"),
            k = a("Sm6l"),
            R = a("bf6R"),
            L = a("qKAH"),
            F = a("zKCW"),
            O = a("JNtf"),
            z = a("mUDD");

        function N(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var G = a("zLIa");

        function B(e) {
            let t, a, r, i, n, l, o, s = (0, g.c)(19),
                {
                    content: d,
                    onChange: c,
                    disabled: u,
                    autoFocus: p
                } = e,
                h = void 0 !== u && u,
                f = void 0 !== p && p;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, m.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-title",
                children: (0, m.jsx)(x.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title",
                    description: "Label for the shared image prompt template title"
                })
            }), s[0] = t) : t = s[0], s[1] !== d || s[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), s[1] = d, s[2] = c, s[3] = a) : a = s[3], s[4] !== f || s[5] !== d.title || s[6] !== a ? (r = (0, m.jsxs)(z.f, {
                children: [t, (0, m.jsx)(G.c, {
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
            }), s[4] = f, s[5] = d.title, s[6] = a, s[7] = r) : r = s[7], s[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, m.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, m.jsx)(x.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt",
                    description: "Label for the reusable image generation prompt"
                })
            }), s[8] = i) : i = s[8], s[9] !== d || s[10] !== c ? (n = e => c({
                ...d,
                prompt: e.target.value
            }), s[9] = d, s[10] = c, s[11] = n) : n = s[11], s[12] !== d.prompt || s[13] !== n ? (l = (0, m.jsxs)(z.f, {
                children: [i, (0, m.jsx)(G.c, {
                    id: "image-prompt-text",
                    name: "prompt",
                    variant: "compact",
                    required: !0,
                    rows: 2,
                    maxLength: 2e5,
                    value: d.prompt,
                    onChange: n
                })]
            }), s[12] = d.prompt, s[13] = n, s[14] = l) : l = s[14], s[15] !== h || s[16] !== r || s[17] !== l ? (o = (0, m.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [r, l]
            }), s[15] = h, s[16] = r, s[17] = l, s[18] = o) : o = s[18], o
        }

        function H(e) {
            let t, a, r, i, n, l, o, s, d, c, u, p, h, f, b, w, _, S, j, P, E = (0, g.c)(54),
                {
                    content: A,
                    onSave: C,
                    onClose: M,
                    onCloseAutoFocus: T
                } = e,
                L = (0, y.a)(),
                [G, H] = (0, v.useState)(A),
                [D, q] = (0, v.useState)(!1),
                [W, V] = (0, v.useState)(null);
            E[0] !== G || E[1] !== D || E[2] !== M || E[3] !== C ? (t = async function() {
                if (!D && N(G)) {
                    q(!0), V(null);
                    try {
                        await C(G), M()
                    } catch (e) {
                        V(e instanceof I.a && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    q(!1)
                }
            }, E[0] = G, E[1] = D, E[2] = M, E[3] = C, E[4] = t) : t = E[4];
            let Q = t,
                U = !D;
            return E[5] !== T ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: T
            }, E[5] = T, E[6] = a) : a = E[6], E[7] !== D || E[8] !== M ? (r = e => {
                e || D || M()
            }, E[7] = D, E[8] = M, E[9] = r) : r = E[9], E[10] !== Q ? (i = e => {
                e.preventDefault(), e.stopPropagation(), Q()
            }, E[10] = Q, E[11] = i) : i = E[11], E[12] !== L ? (n = L.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back",
                description: "Return from the image prompt editor to the sharing preview without saving the draft"
            }), E[12] = L, E[13] = n) : n = E[13], E[14] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, m.jsx)(R.bc, {}), E[14] = l) : l = E[14], E[15] !== D || E[16] !== M || E[17] !== n ? (o = (0, m.jsx)(k.a, {
                color: "ghost",
                size: "icon",
                disabled: D,
                "aria-label": n,
                onClick: M,
                children: l
            }), E[15] = D, E[16] = M, E[17] = n, E[18] = o) : o = E[18], E[19] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, m.jsx)(z.d, {
                title: (0, m.jsx)(O.d, {
                    children: (0, m.jsx)(x.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt",
                        description: "Title of the dialog for editing the image's shared title and prompt"
                    })
                })
            }), E[19] = s) : s = E[19], E[20] !== o ? (d = (0, m.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [o, s]
            }), E[20] = o, E[21] = d) : d = E[21], E[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                H(e), V(null)
            }, E[22] = c) : c = E[22], E[23] !== G || E[24] !== D ? (u = (0, m.jsx)(z.e, {
                spacing: "large",
                children: (0, m.jsx)(B, {
                    content: G,
                    disabled: D,
                    autoFocus: !0,
                    onChange: c
                })
            }), E[23] = G, E[24] = D, E[25] = u) : u = E[25], E[26] !== W ? (p = null != W && (0, m.jsx)(z.e, {
                children: (0, m.jsx)(F.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === W ? (0, m.jsx)(x.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again.",
                        description: "Error when moderation rejects an edit to a shared image prompt"
                    }) : (0, m.jsx)(x.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again.",
                        description: "Error when saving an image prompt fails; the draft remains in the editor for retry"
                    })
                })
            }), E[26] = W, E[27] = p) : p = E[27], E[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, m.jsx)(x.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel",
                description: "Discard edits and return to the image prompt sharing preview"
            }), E[28] = h) : h = E[28], E[29] !== D || E[30] !== M ? (f = (0, m.jsx)(k.a, {
                color: "outline",
                disabled: D,
                onClick: M,
                children: h
            }), E[29] = D, E[30] = M, E[31] = f) : f = E[31], E[32] !== G || E[33] !== D ? (b = !N(G) || D, E[32] = G, E[33] = D, E[34] = b) : b = E[34], E[35] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, m.jsx)(x.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save",
                description: "Apply the edited title and prompt and return to the image sharing preview"
            }), E[35] = w) : w = E[35], E[36] !== D || E[37] !== b ? (_ = (0, m.jsx)(k.a, {
                type: "submit",
                color: "primary",
                loading: D,
                disabled: b,
                children: w
            }), E[36] = D, E[37] = b, E[38] = _) : _ = E[38], E[39] !== f || E[40] !== _ ? (S = (0, m.jsxs)(z.c, {
                expandSingleButton: !1,
                children: [f, _]
            }), E[39] = f, E[40] = _, E[41] = S) : S = E[41], E[42] !== d || E[43] !== u || E[44] !== p || E[45] !== S || E[46] !== i ? (j = (0, m.jsxs)(z.b, {
                as: "form",
                size: "viewport",
                onSubmit: i,
                children: [d, u, p, S]
            }), E[42] = d, E[43] = u, E[44] = p, E[45] = S, E[46] = i, E[47] = j) : j = E[47], E[48] !== D || E[49] !== U || E[50] !== j || E[51] !== a || E[52] !== r ? (P = (0, m.jsx)(O.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: U,
                shouldIgnoreClickOutside: D,
                contentProps: a,
                onOpenChange: r,
                children: j
            }), E[48] = D, E[49] = U, E[50] = j, E[51] = a, E[52] = r, E[53] = P) : P = E[53], P
        }

        function D(e) {
            let t, a, r, i, n, l, o, s, d, c, u, p, h, f, b, x, w = (0, g.c)(42),
                {
                    content: _,
                    previewSrc: S,
                    alt: I,
                    disabled: j,
                    onSave: P
                } = e,
                E = (0, y.a)(),
                [A, C] = (0, v.useState)(!1),
                M = (0, v.useRef)(null);
            return w[0] !== I || w[1] !== S ? (t = null != S && (0, m.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: I,
                src: S,
                referrerPolicy: "no-referrer"
            }), w[0] = I, w[1] = S, w[2] = t) : t = w[2], w[3] !== _.title ? (a = (0, m.jsx)("h2", {
                className: "font-medium break-words",
                children: _.title
            }), w[3] = _.title, w[4] = a) : a = w[4], w[5] !== _.prompt ? (r = (0, m.jsx)("p", {
                className: "break-words whitespace-pre-wrap",
                children: _.prompt
            }), w[5] = _.prompt, w[6] = r) : r = w[6], w[7] !== I || w[8] !== S ? (i = null != S && (0, m.jsx)("img", {
                alt: I,
                src: S,
                referrerPolicy: "no-referrer",
                className: "h-auto max-w-full rounded-xl"
            }), w[7] = I, w[8] = S, w[9] = i) : i = w[9], w[10] !== a || w[11] !== r || w[12] !== i ? (n = (0, m.jsx)(L.a, {
                children: (0, m.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [a, r, i]
                })
            }), w[10] = a, w[11] = r, w[12] = i, w[13] = n) : n = w[13], w[14] !== E ? (l = E.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt",
                description: "Accessible label for the pencil button that opens the shared image title and prompt editor"
            }), w[14] = E, w[15] = l) : l = w[15], w[16] === Symbol.for("react.memo_cache_sentinel") ? (o = () => C(!0), s = (0, m.jsx)(R.Vf, {}), w[16] = o, w[17] = s) : (o = w[16], s = w[17]), w[18] !== j || w[19] !== l ? (d = (0, m.jsx)(k.a, {
                ref: M,
                color: "ghost",
                size: "icon",
                disabled: j,
                "aria-label": l,
                onClick: o,
                children: s
            }), w[18] = j, w[19] = l, w[20] = d) : d = w[20], w[21] !== n || w[22] !== d ? (c = (0, m.jsxs)("div", {
                className: "ms-auto flex gap-1",
                children: [n, d]
            }), w[21] = n, w[22] = d, w[23] = c) : c = w[23], w[24] !== t || w[25] !== c ? (u = (0, m.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, c]
            }), w[24] = t, w[25] = c, w[26] = u) : u = w[26], w[27] !== _.title ? (p = (0, m.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: _.title
            }), w[27] = _.title, w[28] = p) : p = w[28], w[29] !== _.prompt ? (h = (0, m.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: _.prompt
            }), w[29] = _.prompt, w[30] = h) : h = w[30], w[31] !== u || w[32] !== p || w[33] !== h ? (f = (0, m.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [u, p, h]
            }), w[31] = u, w[32] = p, w[33] = h, w[34] = f) : f = w[34], w[35] !== _ || w[36] !== A || w[37] !== P ? (b = A && (0, m.jsx)(H, {
                content: _,
                onSave: P,
                onClose: () => C(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), M.current?.focus()
                }
            }), w[35] = _, w[36] = A, w[37] = P, w[38] = b) : b = w[38], w[39] !== f || w[40] !== b ? (x = (0, m.jsxs)(m.Fragment, {
                children: [f, b]
            }), w[39] = f, w[40] = b, w[41] = x) : x = w[41], x
        }
        var q = a("AuIy"),
            W = a("iqEK"),
            V = a("ccwJ"),
            Q = a("tOYk"),
            U = a("Kwur");
        let Y = (0, b.v)(_.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function K(e, t, a) {
            X(e, t);
            let r = t.assetPointer,
                i = t.messageId;
            if (null == r || null == i) throw Error("Image prompt share source unavailable");
            let n = e.get(Y, t);
            if (null != n.publication) return n.publication;
            let l = n.idempotencyKey ?? crypto.randomUUID();
            e.set(Y, t, {
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
                        let s = await U.Request.safePost("/share/prompt-share", {
                            isExpectedError: J,
                            requestBody: {
                                idempotency_key: l,
                                conversation_id: t.conversationId,
                                message_id: i,
                                output_asset_pointer: r,
                                post_text: a.title,
                                published_content: n.editedContent ?? void 0
                            }
                        });
                        X(e, t);
                        let d = n.editedContent ?? a;
                        try {
                            d.prompt !== a.prompt && (0, o.a)(e, Q.a, {
                                postId: s.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_PROMPT"
                            }), d.title.trim() !== a.title.trim() && (0, o.a)(e, Q.a, {
                                postId: s.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_TITLE"
                            })
                        } catch {}
                        return s
                    }
                });
                return X(e, t), e.set(Y, t, e => ({
                    ...e,
                    publication: s
                })), s
            } catch (a) {
                throw a instanceof I.a && J(a) && e.set(Y, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }

        function X(e, t) {
            if (null == t.accountId || null == t.userId || e.get(n.f) !== t.accountId || e.get(n.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function J(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function $(e) {
            let t, a, r, i, l, s, d, c, u, p, k, R, L, F = (0, g.c)(65),
                O = (0, b.y)(_.a),
                z = (0, y.a)(),
                G = (0, b.z)(n.f),
                B = (0, b.z)(n.j);
            F[0] !== G || F[1] !== B ? (t = {
                accountId: G,
                userId: B
            }, F[0] = G, F[1] = B, F[2] = t) : t = F[2];
            let [H] = (0, v.useState)(t), Q = (0, S.h)("1939400492"), $ = (0, S.m)("250422953"), [Z, ee] = (0, v.useState)("image"), et = e.image, ea = et?.item.isAnimated === !0, er = H.accountId === G && H.userId === B, ei = null != et && !et.additionalImages?.length && null != G && null != B && er && !Q;
            F[3] !== ei || F[4] !== $ ? (a = ei && $.get("imagegen_prompt_share_tabs_enabled", !1), F[3] = ei, F[4] = $, F[5] = a) : a = F[5];
            let en = a,
                el = et?.item.id;
            F[6] !== G || F[7] !== e.serverConversationId || F[8] !== el || F[9] !== B ? (r = ["image-prompt-share-source", G, B, e.serverConversationId, el], F[6] = G, F[7] = e.serverConversationId, F[8] = el, F[9] = B, F[10] = r) : r = F[10], F[11] !== et || F[12] !== e.serverConversationId || F[13] !== O ? (i = async t => {
                let {
                    signal: a
                } = t;
                if (null == et) return null;
                let r = (0, C.c)(e.serverConversationId),
                    i = O.get(A.a, r) ?? r,
                    n = () => {
                        let e = O.get(M.L, i) ?? O.query.getData(j.chatGptConversationQueryById$, r)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, V.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, r] = a, i = a[1].message, n = (0, V.b)(i, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (n?.src == null || "completed" !== n.status || !(0, W.d)(n.src)) return null;
                            let l = (0, q.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == l || (0, q.m)(l)) return null;
                            let o = (0, q.r)(i.content),
                                s = (Array.isArray(o?.parts) ? o.parts : []).map(q.r).find(e => e?.asset_pointer === n.src || (0, q.r)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, q.r)(s?.image_asset_pointer) ?? s,
                                c = (0, q.i)((0, q.r)((0, q.r)(d?.metadata)?.dalle)?.prompt) ?? (0, q.i)((0, q.e)(l)),
                                u = (0, q.i)(i.id);
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
                    l = n();
                return null != l ? l : (await (0, T.a)(O, r, a), n())
            }, F[11] = et, F[12] = e.serverConversationId, F[13] = O, F[14] = i) : i = F[14], F[15] !== r || F[16] !== i || F[17] !== en ? (l = {
                enabled: en,
                queryKey: r,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: i
            }, F[15] = r, F[16] = i, F[17] = en, F[18] = l) : l = F[18];
            let {
                data: eo
            } = (0, f.a)(l), es = eo?.messageId ?? null, ed = eo?.assetPointer ?? null;
            F[19] !== G || F[20] !== e.serverConversationId || F[21] !== es || F[22] !== ed || F[23] !== B ? (s = {
                accountId: G,
                userId: B,
                conversationId: e.serverConversationId,
                messageId: es,
                assetPointer: ed
            }, F[19] = G, F[20] = e.serverConversationId, F[21] = es, F[22] = ed, F[23] = B, F[24] = s) : s = F[24];
            let ec = s,
                {
                    editedContent: eu,
                    publication: ep
                } = (0, b.x)(Y, ec),
                em = en && null != eo,
                eg = em && "image_with_prompt" === $.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                eh = em && "template" === Z;
            F[25] !== eu || F[26] !== ep?.title || F[27] !== eo ? (d = eu ?? (null == eo ? void 0 : {
                ...eo.content,
                title: ep?.title ?? eo.content.title
            }), F[25] = eu, F[26] = ep?.title, F[27] = eo, F[28] = d) : d = F[28];
            let ef = d;
            F[29] !== H.accountId || F[30] !== H.userId || F[31] !== O ? (c = function() {
                if (O.get(n.f) !== H.accountId || O.get(n.j) !== H.userId) throw Error("Image prompt share account changed")
            }, F[29] = H.accountId, F[30] = H.userId, F[31] = O, F[32] = c) : c = F[32];
            let eb = c;
            F[33] !== ef || F[34] !== et || F[35] !== e.source || F[36] !== eb || F[37] !== O || F[38] !== ec || F[39] !== eo ? (u = async function(t) {
                let a;
                if (eb(), null == eo || null == ef || !N(ef)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await K(O, ec, eo.content)
                } catch (e) {
                    if (e instanceof I.a && "prompt_share_not_publishable" === e.errorCode) throw new P.a;
                    throw e
                }
                if (eb(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, o.a)(O, h, {
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
            }, F[33] = ef, F[34] = et, F[35] = e.source, F[36] = eb, F[37] = O, F[38] = ec, F[39] = eo, F[40] = u) : u = F[40];
            let ev = u;
            if (F[41] !== ea || F[42] !== eg ? (p = ea ? (0, m.jsx)(x.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt",
                    description: "Short share-format option in the generated GIF sharing dialog. Shares the animated GIF together with its reusable prompt; the other option is GIF only."
                }) : "image_with_prompt" === eg ? (0, m.jsx)(x.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt",
                    description: "Share-format option for sharing the generated image together with its reusable prompt. The other option is Image only."
                }) : (0, m.jsx)(x.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image",
                    description: "Share the reusable prompt together with the generated image"
                }), F[41] = ea, F[42] = eg, F[43] = p) : p = F[43], !er) return null;
            let ey = eh ? "template" : "image";
            return F[44] !== z || F[45] !== ea || F[46] !== Z || F[47] !== p || F[48] !== em ? (k = em ? e => (0, m.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, m.jsx)(w.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: Z,
                    onSelect: ee,
                    ariaLabel: z.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format",
                        description: "Label for choosing between sharing an image or its prompt template"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: ea ? (0, m.jsx)(x.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only",
                            description: "Short share-format option in the generated GIF sharing dialog. Shares only the animated GIF; the other option shares the GIF with its reusable prompt."
                        }) : (0, m.jsx)(x.a, {
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
            }) : void 0, F[44] = z, F[45] = ea, F[46] = Z, F[47] = p, F[48] = em, F[49] = k) : k = F[49], F[50] !== ef || F[51] !== ev || F[52] !== et?.alt || F[53] !== eb || F[54] !== O || F[55] !== ec || F[56] !== eo || F[57] !== eg || F[58] !== eh ? (R = eh && null != ef ? {
                label: eg,
                createLink: ev,
                actionsDisabled: !N(ef),
                preview: (e, t, a) => (0, m.jsx)(D, {
                    content: ef,
                    previewSrc: t,
                    alt: et?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (eb(), null == eo) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== ef.title.trim() || e.prompt !== ef.prompt) && await async function(e, t, a, r) {
                            X(e, t);
                            let i = e.get(Y, t),
                                n = null == i.idempotencyKey ? i.publication : await K(e, t, a),
                                l = r;
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
                                l = {
                                    title: e.title,
                                    prompt: e.prompt
                                }
                            }
                            X(e, t), e.set(Y, t, e => ({
                                ...e,
                                editedContent: l,
                                publication: null == e.publication ? null : {
                                    ...e.publication,
                                    title: l.title
                                },
                                revision: e.revision + 1
                            }))
                        }(O, ec, eo.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), eb(), a()
                    }
                })
            } : void 0, F[50] = ef, F[51] = ev, F[52] = et?.alt, F[53] = eb, F[54] = O, F[55] = ec, F[56] = eo, F[57] = eg, F[58] = eh, F[59] = R) : R = F[59], F[60] !== e || F[61] !== ey || F[62] !== k || F[63] !== R ? (L = (0, m.jsx)(E.a, {
                ...e,
                imageShareOptions: k,
                imagePromptTemplate: R
            }, ey), F[60] = e, F[61] = ey, F[62] = k, F[63] = R, F[64] = L) : L = F[64], L
        }

        function Z(e, t) {
            let a, {
                    additionalImages: d,
                    alt: m,
                    downloadAnalyticsImage: g,
                    downloadIsParagen: h,
                    image: f,
                    isDirectLightboxShare: b,
                    previewSrc: v,
                    serverConversationId: y,
                    source: x = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    title: w
                } = t,
                _ = crypto.randomUUID(),
                S = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    conversationId: y,
                    shareSessionId: _,
                    source: x
                };
            (0, o.a)(e, r.h, {
                ...S,
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED"
            });
            let I = e.get(n.f),
                j = e.get(n.j),
                P = (0, i.d)(),
                E = P && null != I && null != j ? (0, c.h)(e.get(s.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                A = e.get(n.e),
                C = "loaded" === A.status && "personal" === A.structure || "loading" === A.status && "personal" === A.structureAtLogin,
                M = null == E ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: E,
                    isMobileBrowser: P,
                    isPersonalAccount: C
                }),
                T = () => e.get(n.f) === I && e.get(n.j) === j,
                k = t => {
                    !t.isWorkspaceOnly && t.shareLinkId !== a && T() && (a = t.shareLinkId, (0, o.a)(e, r.h, {
                        ...S,
                        action: "CHATGPT_SHARE_FLOW_ACTION_POST_LINK_PREPARED",
                        shareId: t.shareLinkId
                    }))
                },
                R = {
                    additionalImages: d,
                    alt: m,
                    downloadAnalyticsImage: g,
                    downloadIsParagen: h,
                    isDirectLightboxShare: b,
                    item: f,
                    previewSrc: v
                },
                L = () => (0, l.f)(e, $, {
                    currentNodeId: f.id,
                    image: R,
                    serverConversationId: y,
                    shareSessionId: _,
                    source: x,
                    title: w,
                    mobileImageExperience: M,
                    onImageShareLinkPrepared: null == E ? void 0 : k,
                    trackMobileImageShareLifecycle: P && E?.kind === "native"
                });
            P && E?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, y, R);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void L();
                    if (!T()) return;
                    if (!C) return void L();
                    k(a);
                    let r = await (0, p.b)(e, a, y, _, x);
                    if ("shared" === r || "cancelled" === r) return
                } catch {}
                T() && L()
            }(): L()
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
    umQU: (function(e, t, a) {
        var r = a("BolX"),
            i = a("ccwJ"),
            n = a("Kwur"),
            l = a("dQRk"),
            o = a("bmqg"),
            s = a("SGsN"),
            d = a("urzV"),
            c = a("svjy"),
            u = a("tSEg"),
            p = a("zHp1"),
            m = a("Yscs"),
            g = a("GDNt");
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
                    x = JSON.stringify([r?.id, b]),
                    w = 0,
                    _ = Promise.resolve(),
                    S = u({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (r?.isAnimated) return f.watch(t => {
                                if (0 !== w) return;
                                let a = t.get(h, x),
                                    n = (0, i.d)(v(t, r)?.gifPlayback, a ?? void 0);
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
                    }, j = () => (null == a && (a = I(b).catch(e => {
                        throw a = void 0, e
                    })), a), P = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                            a = v(f, r),
                            n = t === a?.watermarkedSrc ? a?.gifPlayback?.watermarkedVariants : a?.gifPlayback?.variants;
                        if (!(0, i.a)(n).includes(e)) throw Error("GIF speed variant unavailable");
                        let l = 1 === e ? void 0 : n?.[String(e)],
                            o = S.get().preview;
                        if (o?.speed === e && o.originalSrc === t && o.assetSrc === l) return o;
                        let s = null == l && t === b ? await j() : await I(l ?? t);
                        return {
                            assetSrc: l,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, m.a)(s),
                            sizeBytes: s.size
                        }
                    }, E = async (e, t) => {
                        let a = ++w;
                        S.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let i = await P(e);
                            if (a !== w) return !1;
                            return S.set({
                                preview: i,
                                busy: !1
                            }), t && (f.set(h, x, e), _ = _.then(async () => {
                                if (a !== w || "chatgpt-thread" !== f.value.routeKind || r?.chatGptMessageId == null || null == b) return;
                                let t = f.get(l.j, f.value.conversationId);
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
                                e instanceof g.a && (404 === e.status || 405 === e.status) || f.get(s.f).danger(f.get(c.a).formatMessage({
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
                            return t && a === w && f.get(s.f).danger(f.get(c.a).formatMessage({
                                id: "gifEditor.speedChangeFailed",
                                defaultMessage: "Couldn’t change GIF speed. Try again",
                                description: "Error shown when a generated GIF could not be loaded or retimed after choosing a playback speed"
                            }), {
                                errorAnalytics: {
                                    toastId: "gifEditor.speedChangeFailed"
                                }
                            }), !1
                        } finally {
                            a === w && S.set(e => ({
                                ...e,
                                busy: !1
                            }))
                        }
                    };
                return {
                    state$: S,
                    loadOriginal: j,
                    loadExport: async e => I((await P(e)).src),
                    changeSpeed: e => E(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let r = (0, i.d)(v(f, e)?.gifPlayback, S.get().preview?.speed ?? f.get(h, x) ?? void 0),
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
                        let l = await P(r, t);
                        return y(n, a && null != l.assetSrc ? {
                            ...l,
                            src: l.assetSrc
                        } : l)
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
                    scope: l
                } = t, o = v(l, a, r), s = l.get(f, {
                    image: o?.isAnimated === !0 ? o : void 0,
                    imageAssetResolver: n
                }), {
                    preview: d
                } = l.get(s.state$);
                return {
                    playback: s,
                    previewSrc: null != d && (0, i.a)(o?.gifPlayback?.variants).includes(d.speed) ? d.src : void 0,
                    image: null == o ? void 0 : y(o, d),
                    originalSrc: o?.isAnimated === !0 ? o.gifPlayback?.originalSrc ?? o.src : o?.src,
                    canControl: o?.isAnimated === !0 && (0, i.a)(o.gifPlayback?.variants).length > 1
                }
            });

        function v(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(o.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function y(e, t) {
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
            a: y,
            b: v,
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
                let t, a, l = (0, i.c)(14),
                    {
                        ariaLabel: o,
                        children: s,
                        className: d,
                        variant: c
                    } = e,
                    u = void 0 === c ? "compact" : c;
                if ("embedded" === u) {
                    let e, t = null == o ? void 0 : "group";
                    return l[0] !== o || l[1] !== s || l[2] !== t ? (e = (0, r.jsx)("div", {
                        role: t,
                        "aria-label": o,
                        className: "flex min-w-0 items-center",
                        children: s
                    }), l[0] = o, l[1] = s, l[2] = t, l[3] = e) : e = l[3], e
                }
                let p = null == o ? void 0 : "toolbar",
                    m = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                    g = "imageTools" === u && "gap-0 shadow-md",
                    h = "playback" === u && "gap-2 shadow-sm";
                return l[4] !== d || l[5] !== m || l[6] !== g || l[7] !== h ? (t = (0, n.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", m, g, h, d), l[4] = d, l[5] = m, l[6] = g, l[7] = h, l[8] = t) : t = l[8], l[9] !== o || l[10] !== s || l[11] !== p || l[12] !== t ? (a = (0, r.jsx)("div", {
                    role: p,
                    "aria-label": o,
                    className: t,
                    children: s
                }), l[9] = o, l[10] = s, l[11] = p, l[12] = t, l[13] = a) : a = l[13], a
            }
        })
    }),
    eYeG: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("on57"),
            l = a("zd8w"),
            o = a("Qgfj"),
            s = a("aqd9"),
            d = a("POjP");

        function c() {
            return (0, d.a)(0)
        }

        function u(e) {
            let t, a, l, s = (0, i.c)(8),
                {
                    placement: d,
                    progress: c,
                    ref: u
                } = e,
                p = "top" === (void 0 === d ? "bottom" : d) ? "top-3.5" : "bottom-3.5";
            s[0] !== p ? (t = (0, n.b)("pointer-events-none absolute end-3.5 z-10 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-card/80 px-2 body-sm font-medium text-[color:var(--color-image-generation-text,var(--color-text-info))] tabular-nums shadow-lg ring-[0.5px] ring-border backdrop-blur-md select-none", p), s[0] = p, s[1] = t) : t = s[1];
            let m = c / 100;
            return s[2] !== m ? (a = (0, r.jsx)(o.c, {
                value: m,
                style: "percent"
            }), s[2] = m, s[3] = a) : a = s[3], s[4] !== u || s[5] !== t || s[6] !== a ? (l = (0, r.jsx)("span", {
                ref: u,
                className: t,
                children: a
            }), s[4] = u, s[5] = t, s[6] = a, s[7] = l) : l = s[7], l
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, n, o = (0, i.c)(7),
                    {
                        generationStartedAtMs: p,
                        isActive: m,
                        placement: g
                    } = e,
                    h = void 0 === m || m,
                    [f, b] = (0, l.useState)(c),
                    v = (0, l.useRef)(null);
                return o[0] !== p || o[1] !== h ? (t = () => {
                    let e, t = v.current;
                    if (null == t) return;
                    let a = t.ownerDocument,
                        r = !1,
                        i = () => {
                            let t = (0, d.a)(Date.now() - p);
                            return b(t), 99 === t && (clearInterval(e), e = void 0), t
                        },
                        n = () => {
                            clearInterval(e), e = void 0, r && !a.hidden && 99 > i() && (e = setInterval(i, 500))
                        };
                    if (i(), !h) return;
                    a.addEventListener("visibilitychange", n);
                    let l = (0, s.a)(t, e => {
                        r = e, n()
                    });
                    return () => {
                        l?.(), a.removeEventListener("visibilitychange", n), clearInterval(e)
                    }
                }, a = [p, h], o[0] = p, o[1] = h, o[2] = t, o[3] = a) : (t = o[2], a = o[3]), (0, l.useLayoutEffect)(t, a), o[4] !== g || o[5] !== f ? (n = (0, r.jsx)(u, {
                    ref: v,
                    placement: g,
                    progress: f
                }), o[4] = g, o[5] = f, o[6] = n) : n = o[6], n
            },
            b: u
        })
    }),
    POjP: (function(e, t, a) {
        let r = [
            [0, 3],
            [.1, 25],
            [.55, 58],
            [.85, 88],
            [1, 90]
        ];
        a.d(t, {}, {
            a: function(e) {
                let t = Math.max(0, e / 45e3);
                for (let e = 1; e < r.length; e += 1) {
                    let a = r[e - 1],
                        i = r[e];
                    if (t <= i[0]) {
                        let e = (t - a[0]) / (i[0] - a[0]);
                        return Math.floor(a[1] + e * (i[1] - a[1]))
                    }
                }
                return Math.min(99, Math.floor(90 + 10 * (1 - Math.exp(-1.5 * (t - 1)))))
            }
        })
    }),
    ghCJ: (function(e, t, a) {
        a.d(t, {
            a: () => m
        });
        var r = a("ABep"),
            i = a("QosV"),
            n = a("on57"),
            l = a("zd8w"),
            o = a("Wf1j"),
            s = a("aqd9"),
            d = a("T1PX"),
            c = a("a6Zv"),
            u = a("eYeG");
        let p = {
            "image-preview": {
                spacing: 22,
                radius: 2
            },
            playground: {
                spacing: 14,
                radius: 1.5
            },
            thumbnail: {
                spacing: 6,
                radius: .75
            }
        };

        function m(e) {
            let t, a, l, s, d, c, p = (0, i.c)(25),
                {
                    ariaLabel: m,
                    background: h,
                    generationStartedAtMs: f,
                    isAnimating: b,
                    presentation: v,
                    previewSrc: y
                } = e,
                x = void 0 === b || b,
                w = void 0 === v ? "default" : v,
                _ = (0, o.a)(),
                S = "fill" === w || "image-preview" === w,
                I = w;
            "single" === I ? I = "playground" : "fill" === I && (I = "default"), p[0] !== m || p[1] !== _ ? (t = m ?? _.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image...",
                description: "Aria label for the image generation loading placeholder"
            }), p[0] = m, p[1] = _, p[2] = t) : t = p[2];
            let j = null != y ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
                P = null == y && "surface" === (void 0 === h ? "surface" : h) && ("single" === w ? "bg-surface-secondary" : "dark:bg-secondary-ghost-hover bg-primary-soft-active");
            p[3] !== S || p[4] !== w || p[5] !== j || p[6] !== P ? (a = (0, n.b)("overflow-clip", j, P, S ? "absolute inset-0 size-full" : ["relative aspect-square", "thumbnail" === w ? "rounded-lg" : "rounded-2xl", "single" === w ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]"]), p[3] = S, p[4] = w, p[5] = j, p[6] = P, p[7] = a) : a = p[7], p[8] !== w || p[9] !== y ? (l = null != y ? (0, r.jsx)("img", {
                alt: "",
                className: (0, n.b)("pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70", "image-preview" === w ? "blur-md" : "scale-125 blur-3xl"),
                src: y,
                referrerPolicy: "no-referrer"
            }) : null, p[8] = w, p[9] = y, p[10] = l) : l = p[10];
            let E = null != y;
            return p[11] !== I || p[12] !== x || p[13] !== E ? (s = (0, r.jsx)(g, {
                isAnimating: x,
                overImage: E,
                presentation: I
            }), p[11] = I, p[12] = x, p[13] = E, p[14] = s) : s = p[14], p[15] !== S || p[16] !== f || p[17] !== x ? (d = null != f ? (0, r.jsx)(u.a, {
                generationStartedAtMs: f,
                isActive: x,
                placement: S ? "top" : "bottom"
            }, f) : null, p[15] = S, p[16] = f, p[17] = x, p[18] = d) : d = p[18], p[19] !== s || p[20] !== d || p[21] !== t || p[22] !== a || p[23] !== l ? (c = (0, r.jsxs)("div", {
                "aria-busy": !0,
                "aria-label": t,
                className: a,
                children: [l, s, d]
            }), p[19] = s, p[20] = d, p[21] = t, p[22] = a, p[23] = l, p[24] = c) : c = p[24], c
        }

        function g(e) {
            let t, a, o, u, m, g = (0, i.c)(17),
                {
                    isAnimating: y,
                    overImage: x,
                    presentation: w
                } = e,
                _ = (0, d.a)(),
                S = (0, c.a)(),
                I = (0, l.useRef)(null),
                j = (0, l.useRef)(null);
            g[0] !== y || g[1] !== S || g[2] !== w || g[3] !== _ ? (t = () => {
                if (!y) return;
                let e = I.current,
                    t = j.current,
                    a = t?.getContext("2d");
                if (null == e || null == t || null == a) return;
                let r = 2 * Math.PI,
                    i = getComputedStyle(e).color || (S ? "white" : "black"),
                    n = (e, t) => e + (_ ? .5 : Math.random()) * (t - e),
                    l = e => 1.2 * e * n(1, 1.35),
                    o = {
                        durations: {
                            offsetX1: l(4500),
                            offsetY1: l(6330),
                            offsetX2: l(5600),
                            offsetY2: l(5750),
                            fieldSize1: l(3600),
                            fieldSize2: l(2400)
                        },
                        phases: {
                            offsetX1: n(0, 1),
                            offsetY1: n(0, 1),
                            offsetX2: n(0, 1),
                            offsetY2: n(0, 1),
                            fieldSize1: n(0, 1),
                            fieldSize2: n(0, 1)
                        },
                        bounds: {
                            x1Start: n(.1, .32),
                            x1End: n(.68, .9),
                            y1Start: n(.1, .32),
                            y1End: n(.68, .9),
                            x2Start: n(.68, .9),
                            x2End: n(.1, .32),
                            y2Start: n(.68, .9),
                            y2End: n(.1, .32)
                        },
                        fieldSizeRange: {
                            firstStart: n(.42, .52),
                            firstEnd: n(.62, .75),
                            secondStart: n(.5, .62),
                            secondEnd: n(.74, .9)
                        }
                    },
                    d = null,
                    c = 0,
                    u = null,
                    m = !0,
                    g = null,
                    x = !1,
                    P = n => {
                        var l, s, y, x, S, I, j, E, A, C, M, T;
                        if (!_ && 0 !== c && n - c < 33.333333333333336) {
                            d = requestAnimationFrame(P);
                            return
                        }
                        if (c = n, null == g && (g = n), (m || null == u) && (() => {
                                let a = "image-preview" === w ? {
                                        width: e.clientWidth,
                                        height: e.clientHeight
                                    } : e.getBoundingClientRect(),
                                    r = Math.max(0, Math.floor(a.width)),
                                    i = Math.max(0, Math.floor(a.height));
                                if (0 === r || 0 === i) {
                                    u = null, m = !1;
                                    return
                                }
                                let n = Math.max(1, window.devicePixelRatio || 1),
                                    l = Math.floor(r * n),
                                    o = Math.floor(i * n);
                                (t.width !== l || t.height !== o) && (t.width = l, t.height = o);
                                let s = "default" === w ? Math.max(1, 12 / n) : p[w].spacing,
                                    d = Math.max(1, Math.floor(r / s)),
                                    c = Math.max(1, Math.floor(i / s)),
                                    g = (r - (d - 1) * s) * .5,
                                    h = (i - (c - 1) * s) * .5,
                                    f = new Float32Array(d),
                                    b = new Float32Array(c),
                                    v = new Float32Array(d),
                                    y = new Float32Array(c);
                                for (let e = 0; e < d; e += 1) f[e] = g + e * s, v[e] = 1 === d ? .5 : e / (d - 1);
                                for (let e = 0; e < c; e += 1) b[e] = h + e * s, y[e] = 1 === c ? .5 : e / (c - 1);
                                u = {
                                    width: r,
                                    height: i,
                                    dpr: n,
                                    spacing: s,
                                    xPositions: f,
                                    yPositions: b,
                                    xNormals: v,
                                    yNormals: y
                                }, m = !1
                            })(), null == u) {
                            d = null;
                            return
                        }
                        let k = _ ? 0 : n - g,
                            R = (e, t) => {
                                let a;
                                return (a = (k / e + t) % 1) <= .5 ? 2 * a : 2 - 2 * a
                            },
                            L = (l = o.bounds.x1Start, s = o.bounds.x1End, l + (s - l) * v(R(o.durations.offsetX1, o.phases.offsetX1))),
                            F = (y = o.bounds.y1Start, x = o.bounds.y1End, y + (x - y) * b(R(o.durations.offsetY1, o.phases.offsetY1))),
                            O = (S = o.bounds.x2Start, I = o.bounds.x2End, S + (I - S) * v(R(o.durations.offsetX2, o.phases.offsetX2))),
                            z = (j = o.bounds.y2Start, E = o.bounds.y2End, j + (E - j) * b(R(o.durations.offsetY2, o.phases.offsetY2))),
                            N = .78 * (A = o.fieldSizeRange.firstStart, C = o.fieldSizeRange.firstEnd, A + (C - A) * b(R(o.durations.fieldSize1, o.phases.fieldSize1))),
                            G = .78 * (M = o.fieldSizeRange.secondStart, T = o.fieldSizeRange.secondEnd, M + (T - M) * b(R(o.durations.fieldSize2, o.phases.fieldSize2)));
                        a.save(), a.setTransform(u.dpr, 0, 0, u.dpr, 0, 0), a.clearRect(0, 0, u.width, u.height), a.fillStyle = i;
                        let B = "default" === w ? Math.max(.55, .5 * u.spacing * .16) : p[w].radius;
                        for (let e = 0; e < u.yPositions.length; e += 1) {
                            let t = u.yPositions[e],
                                i = u.yNormals[e];
                            for (let e = 0; e < u.xPositions.length; e += 1) {
                                let n = u.xPositions[e],
                                    l = u.xNormals[e],
                                    o = Math.pow(h((1 - f(0, N, Math.hypot(l - L, i - F))) * 1.2 + (1 - f(0, G, Math.hypot(l - O, i - z))) * .82), 1.18);
                                o <= .03 || (a.globalAlpha = o, a.beginPath(), a.moveTo(n + B, t), a.arc(n, t, B, 0, r), a.fill())
                            }
                        }
                        a.restore(), d = _ ? null : requestAnimationFrame(P)
                    },
                    E = new ResizeObserver(() => {
                        m = !0, x && null == d && (d = requestAnimationFrame(P))
                    });
                E.observe(e);
                let A = (0, s.a)(e, e => {
                    (x = e) ? null == d && (d = requestAnimationFrame(P)): null != d && (cancelAnimationFrame(d), d = null)
                });
                return () => {
                    A?.(), null != d && cancelAnimationFrame(d), E.disconnect()
                }
            }, g[0] = y, g[1] = S, g[2] = w, g[3] = _, g[4] = t) : t = g[4], g[5] !== y || g[6] !== S || g[7] !== x || g[8] !== w || g[9] !== _ ? (a = [y, S, x, w, _], g[5] = y, g[6] = S, g[7] = x, g[8] = w, g[9] = _, g[10] = a) : a = g[10], (0, l.useEffect)(t, a);
            let P = (x || "image-preview" === w) && "overImage-KmHrEc",
                E = (!y || _) && "reducedMotion-ttnr0y";
            return g[11] !== P || g[12] !== E ? (o = (0, n.b)("dots-avXrIV", P, E), g[11] = P, g[12] = E, g[13] = o) : o = g[13], g[14] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)("canvas", {
                ref: j,
                "aria-hidden": !0,
                className: "block h-full w-full"
            }), g[14] = u) : u = g[14], g[15] !== o ? (m = (0, r.jsx)("div", {
                ref: I,
                className: o,
                children: u
            }), g[15] = o, g[16] = m) : m = g[16], m
        }

        function h(e) {
            return Math.min(1, Math.max(0, e))
        }

        function f(e, t, a) {
            let r = h((a - e) / (t - e));
            return r * r * (3 - 2 * r)
        }

        function b(e) {
            return e * e * (3 - 2 * e)
        }

        function v(e) {
            return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
        }
    }),
    EQ0X: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("zd8w"),
            l = a("Wf1j"),
            o = a("oyxz"),
            s = a("Sm6l"),
            d = a("bqtn"),
            c = a("HOLv"),
            u = a("bf6R"),
            p = a("UxN3"),
            m = a("CqQF"),
            g = a("ddzD"),
            h = a("I0AH"),
            f = a("j9wQ"),
            b = a("ZedP"),
            v = a("fi73"),
            y = a("uVXd");

        function x(e) {
            let t, a = (0, i.c)(3),
                n = !0 === e["aria-expanded"];
            return a[0] !== e || a[1] !== n ? (t = (0, r.jsx)(m.a, {
                ...e,
                triggerPopupOpen: n
            }), a[0] = e, a[1] = n, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, m, w, _, S, I, j = (0, i.c)(53),
                    {
                        downloadImageCount: P,
                        floatingToolbarVariant: E,
                        moreActions: A,
                        isAnimated: C,
                        isImageActionsDisabled: M,
                        isUnifiedViewerEnabled: T,
                        onDownload: k,
                        onDownloadAll: R,
                        onDownloadMenuOpen: L,
                        onShare: F,
                        onShareAll: O,
                        onShareMenuOpen: z,
                        saveAction: N,
                        shareImageCount: G,
                        showShareText: B
                    } = e,
                    H = void 0 !== C && C,
                    D = void 0 !== T && T,
                    q = void 0 !== B && B,
                    W = (0, l.a)(),
                    [V, Q] = (0, n.useState)(!1),
                    U = "toolbar";
                null != E && (U = "imageTools" === E ? "imageToolbar" : "composerSm"), j[0] !== U || j[1] !== E || j[2] !== W || j[3] !== M || j[4] !== D || j[5] !== F || j[6] !== O || j[7] !== q ? (t = D ? (0, r.jsxs)(f.c, {
                    "aria-label": W.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }),
                    disabled: M,
                    uniform: !q,
                    onClick: null == O ? F : void 0,
                    children: [(0, r.jsx)(p.b, {
                        icon: {
                            16: u.L,
                            20: u.M
                        }
                    }), q ? (0, r.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }) : null]
                }) : (0, r.jsx)(s.a, {
                    color: null == E ? "primary" : "ghostActive",
                    disabled: M,
                    size: U,
                    onClick: null == O ? F : void 0,
                    children: (0, r.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    })
                }), j[0] = U, j[1] = E, j[2] = W, j[3] = M, j[4] = D, j[5] = F, j[6] = O, j[7] = q, j[8] = t) : t = j[8];
                let Y = t;
                if (null != F && null != O) {
                    let e;
                    j[9] !== H || j[10] !== M || j[11] !== F || j[12] !== O || j[13] !== z || j[14] !== Y || j[15] !== G ? (e = (0, r.jsx)(b.a, {
                        disabled: M,
                        imageCount: G,
                        isAnimated: H,
                        onOpen: z,
                        onShare: F,
                        onShareAll: O,
                        triggerButton: Y
                    }), j[9] = H, j[10] = M, j[11] = F, j[12] = O, j[13] = z, j[14] = Y, j[15] = G, j[16] = e) : e = j[16], Y = e
                }
                if (null != E) {
                    let e;
                    j[17] !== E || j[18] !== Y ? (e = (0, r.jsx)(h.a, {
                        variant: E,
                        children: Y
                    }), j[17] = E, j[18] = Y, j[19] = e) : e = j[19], Y = e
                }
                j[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    Q(!0), await e().finally(() => {
                        Q(!1)
                    })
                }, j[20] = a) : a = j[20];
                let K = a;
                j[21] !== U || j[22] !== P || j[23] !== E || j[24] !== W || j[25] !== H || j[26] !== V || j[27] !== M || j[28] !== D || j[29] !== k || j[30] !== R || j[31] !== L || j[32] !== N ? (m = null != R && null != k ? (0, r.jsxs)(d.a, {
                    align: "end",
                    disabled: M || V,
                    onOpenChange: e => {
                        e && L?.()
                    },
                    triggerButton: (0, r.jsx)(x, {
                        cloneCustomTrigger: !0,
                        tooltipContent: (0, r.jsx)(o.a, {
                            ...(0, g.a)({
                                isAnimated: H
                            }).downloadLabel
                        }),
                        children: D ? (0, r.jsx)(f.c, {
                            "aria-label": W.formatMessage((0, g.a)({
                                isAnimated: H
                            }).downloadLabel),
                            disabled: M || V,
                            loading: V,
                            uniform: !0,
                            children: (0, r.jsx)(p.b, {
                                icon: {
                                    assets: {
                                        16: v.a,
                                        20: y.a
                                    }
                                }
                            })
                        }) : (0, r.jsx)(s.a, {
                            "aria-label": W.formatMessage((0, g.a)({
                                isAnimated: H
                            }).downloadLabel),
                            color: null == E ? "ghost" : "ghostActive",
                            disabled: M || V,
                            loading: V,
                            size: U,
                            uniform: !0,
                            children: "compact" === E ? (0, r.jsx)(c.a, {
                                asset: v.a
                            }) : (0, r.jsx)(u.r, {})
                        })
                    }),
                    children: [(0, r.jsx)(d.c.Item, {
                        onSelect: () => void K(k),
                        children: (0, r.jsx)(o.a, {
                            ...(0, g.a)({
                                isAnimated: H
                            }).downloadMenuLabel
                        })
                    }), (0, r.jsx)(d.c.Item, {
                        onSelect: () => void K(R),
                        children: (0, r.jsx)(o.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            description: "Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.",
                            values: {
                                count: P
                            }
                        })
                    })]
                }) : N, j[21] = U, j[22] = P, j[23] = E, j[24] = W, j[25] = H, j[26] = V, j[27] = M, j[28] = D, j[29] = k, j[30] = R, j[31] = L, j[32] = N, j[33] = m) : m = j[33];
                let X = m;
                if (null != E && null != R && null != k) {
                    let e;
                    j[34] !== X || j[35] !== E ? (e = (0, r.jsx)(h.a, {
                        variant: E,
                        children: X
                    }), j[34] = X, j[35] = E, j[36] = e) : e = j[36], X = e
                }
                let J = null == F ? null : Y;
                j[37] !== X || j[38] !== J ? (w = (0, r.jsxs)(r.Fragment, {
                    children: [X, J]
                }), j[37] = X, j[38] = J, j[39] = w) : w = j[39];
                let $ = w;
                j[40] !== E || j[41] !== A ? (_ = null == A || null == E ? A : (0, r.jsx)(h.a, {
                    variant: E,
                    children: A
                }), j[40] = E, j[41] = A, j[42] = _) : _ = j[42];
                let Z = _,
                    ee = null != F || null != X;
                if (!D || q) {
                    let e;
                    return j[43] !== $ || j[44] !== Z ? (e = (0, r.jsxs)(r.Fragment, {
                        children: [$, Z]
                    }), j[43] = $, j[44] = Z, j[45] = e) : e = j[45], e
                }
                return j[46] !== ee || j[47] !== W || j[48] !== $ ? (S = ee ? (0, r.jsx)(f.i, {
                    label: W.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions",
                        description: "Accessible label for the image viewer's Share and Download actions group"
                    }),
                    children: $
                }) : null, j[46] = ee, j[47] = W, j[48] = $, j[49] = S) : S = j[49], j[50] !== S || j[51] !== Z ? (I = (0, r.jsxs)(r.Fragment, {
                    children: [S, Z]
                }), j[50] = S, j[51] = Z, j[52] = I) : I = j[52], I
            }
        })
    }),
    ZedP: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("oyxz"),
            l = a("bqtn"),
            o = a("HOLv"),
            s = a("ddzD"),
            d = a("wTsG"),
            c = a("QcuK");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, p, m, g, h, f = (0, i.c)(19),
                    {
                        disabled: b,
                        imageCount: v,
                        isAnimated: y,
                        onOpen: x,
                        onShare: w,
                        onShareAll: _,
                        triggerButton: S
                    } = e,
                    I = void 0 !== y && y;
                return f[0] !== x ? (t = e => {
                    e && x?.()
                }, f[0] = x, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(o.a, {
                    className: "text-gray-1000",
                    asset: d.a
                }), f[2] = a) : a = f[2], f[3] !== I ? (u = (0, s.a)({
                    isAnimated: I
                }), f[3] = I, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (p = (0, r.jsx)(n.a, {
                    ...u.shareSelectionLabel
                }), f[5] = u.shareSelectionLabel, f[6] = p) : p = f[6], f[7] !== w || f[8] !== p ? (m = (0, r.jsx)(l.c.Item, {
                    leftIcon: a,
                    onSelect: w,
                    children: p
                }), f[7] = w, f[8] = p, f[9] = m) : m = f[9], f[10] !== v || f[11] !== _ ? (g = null == _ ? null : (0, r.jsx)(l.c.Item, {
                    leftIcon: (0, r.jsx)(o.a, {
                        className: "text-gray-1000",
                        asset: c.a
                    }),
                    onSelect: _,
                    children: (0, r.jsx)(n.a, {
                        id: "imagePreview.shareSeries",
                        defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                        description: "Option in the generated-image Share dropdown that shares every completed image in the selected generation series. imageCount is the number of images included, always greater than one. Keep this menu label concise.",
                        values: {
                            imageCount: v
                        }
                    })
                }), f[10] = v, f[11] = _, f[12] = g) : g = f[12], f[13] !== b || f[14] !== t || f[15] !== m || f[16] !== g || f[17] !== S ? (h = (0, r.jsxs)(l.a, {
                    align: "end",
                    disabled: b,
                    triggerButton: S,
                    onOpenChange: t,
                    children: [m, g]
                }), f[13] = b, f[14] = t, f[15] = m, f[16] = g, f[17] = S, f[18] = h) : h = f[18], h
            }
        })
    }),
    RiLw: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("oyxz"),
            l = a("bf6R"),
            o = a("UxN3"),
            s = a("Y3Vu"),
            d = a("Q81T");
        let c = (0, r.jsx)(o.b, {
            className: d.a.shareIcon,
            icon: {
                16: l.L,
                20: l.M
            }
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, o, d, u = (0, i.c)(9);
                u[0] !== e ? ({
                    children: t,
                    leading: l,
                    ...a
                } = e, u[0] = e, u[1] = t, u[2] = a, u[3] = l) : (t = u[1], a = u[2], l = u[3]);
                let p = void 0 === l ? c : l;
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
                }), u[4] = o) : o = u[4], u[5] !== t || u[6] !== p || u[7] !== a ? (d = (0, r.jsxs)(s.a, {
                    focusRing: "inset",
                    ...a,
                    children: [p, o, t]
                }), u[5] = t, u[6] = p, u[7] = a, u[8] = d) : d = u[8], d
            }
        })
    })
};