export const __rspack_esm_ids = [849939];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("N55g");
        let l = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(431630), a.e(680164), a.e(81461), a.e(882456), a.e(145049), a.e(744644), a.e(758939), a.e(4304), a.e(499790), a.e(769185), a.e(907652), a.e(909395), a.e(70086), a.e(22085), a.e(587936), a.e(904817), a.e(452048), a.e(445991), a.e(299268), a.e(857274), a.e(212487), a.e(17983), a.e(167649), a.e(826779), a.e(433520), a.e(509282), a.e(523433), a.e(403815), a.e(471657), a.e(287551), a.e(822200)]).then(a.bind(a, "nTBW"))).ChatGptDilDirectiveRenderer, {
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
        let l = (0, i.a)(async () => (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(753405), a.e(321957), a.e(585419), a.e(673131), a.e(877700), a.e(353230), a.e(680164), a.e(81461), a.e(882456), a.e(145049), a.e(744644), a.e(784669), a.e(8197), a.e(328034), a.e(810177), a.e(371054), a.e(698401), a.e(91753), a.e(817327), a.e(4304), a.e(499790), a.e(769185), a.e(907652), a.e(909395), a.e(70086), a.e(22085), a.e(587936), a.e(904817), a.e(452048), a.e(445991), a.e(299268), a.e(857274), a.e(212487), a.e(17983), a.e(167649), a.e(826779), a.e(433520), a.e(509282), a.e(523433), a.e(403815), a.e(912134), a.e(287551), a.e(349106)]).then(a.bind(a, "QUSY"))).DilResponse, {
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
            a: () => p,
            b: () => m,
            c: () => g,
            d: () => u
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
        let m = (0, i.createContext)(null),
            p = (0, i.createContext)(null),
            g = (0, i.createContext)(void 0)
    }),
    vbBn: (function(e, t, a) {
        a.d(t, {
            a: () => x,
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
            m = a("Yscs");
        let p = new WeakMap,
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
        let _ = new Set;

        function w() {
            for (let e of _) e.presentation.onPageHide()
        }

        function x(e) {
            let t, a, d, c, u, m, p, g, h, f, b, v = (0, i.c)(33),
                {
                    children: x,
                    contentReferenceIndex: j,
                    observationMessageId: P,
                    isPresented: E,
                    isPreparing: A,
                    isStreaming: C,
                    sourceMessageId: M
                } = e,
                T = void 0 === E || E,
                k = (0, n.y)(s.a);
            v[0] !== P || v[1] !== k ? (t = () => ({
                messageId: P,
                observation: (0, y.d)(k)
            }), v[0] = P, v[1] = k, v[2] = t) : t = v[2];
            let [R, F] = (0, l.useState)(t);
            R.messageId !== P && F({
                messageId: P,
                observation: (0, y.d)(k)
            });
            let L = R.observation,
                O = void 0 !== A && A ? null : L;
            v[3] !== T || v[4] !== C || v[5] !== O ? (a = () => {
                O && (O.presentation.updateStreaming(C), O.presentation.setPresented(T))
            }, d = [O, T, C], v[3] = T, v[4] = C, v[5] = O, v[6] = a, v[7] = d) : (a = v[6], d = v[7]), (0, l.useLayoutEffect)(a, d), v[8] !== C || v[9] !== O?.presentation || v[10] !== O?.presentation.attach ? (c = () => O?.presentation.attach(C), v[8] = C, v[9] = O?.presentation, v[10] = O?.presentation.attach, v[11] = c) : c = v[11];
            let z = (0, l.useEffectEvent)(c);
            v[12] !== z || v[13] !== O ? (u = () => {
                if (!O) return;
                let e = z();
                return _.add(O), 1 === _.size && window.addEventListener("pagehide", w, !0), () => {
                    _.delete(O), 0 === _.size && window.removeEventListener("pagehide", w, !0), e?.()
                }
            }, v[12] = z, v[13] = O, v[14] = u) : u = v[14], v[15] !== O ? (m = [O], v[15] = O, v[16] = m) : m = v[16], (0, l.useEffect)(u, m);
            let G = null == j ? void 0 : "contents";
            v[17] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)(I, {}), v[17] = p) : p = v[17];
            let N = O?.render.onHostRenderFailure;
            return v[18] !== x || v[19] !== P || v[20] !== N ? (g = (0, r.jsx)(o.a, {
                name: "ModelWrittenDILV2Renderer",
                resetKey: P,
                fallback: p,
                onError: N,
                children: x
            }), v[18] = x, v[19] = P, v[20] = N, v[21] = g) : g = v[21], v[22] !== j || v[23] !== M || v[24] !== g || v[25] !== G ? (h = (0, r.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": M,
                "data-chatgpt-copy-reference": j,
                "data-markdown-copy": G,
                onLoadCapture: S,
                children: g
            }), v[22] = j, v[23] = M, v[24] = g, v[25] = G, v[26] = h) : h = v[26], v[27] !== O || v[28] !== h ? (f = (0, r.jsx)(y.b.Provider, {
                value: O,
                children: h
            }), v[27] = O, v[28] = h, v[29] = f) : f = v[29], v[30] !== L.render.onPreparationEnd || v[31] !== f ? (b = (0, r.jsx)(y.a.Provider, {
                value: L.render.onPreparationEnd,
                children: f
            }), v[30] = L.render.onPreparationEnd, v[31] = f, v[32] = b) : b = v[32], b
        }

        function S(e) {
            e.target instanceof HTMLImageElement && async function(e, t) {
                if (b(t) > 0) return;
                let a = f(t);
                if (!a) return;
                let r = URL.parse(t.currentSrc);
                if (null == r || r.origin !== e.ownerDocument.location.origin || !["blob:", "https:", "http:"].includes(r.protocol)) return;
                let i = (p.get(e) ?? Promise.resolve()).then(() => (async function(e, t, a, r) {
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
                        let s = await (0, m.a)(n);
                        i() && (t.dataset.chatgptCopyImageSrc = a, t.dataset.chatgptCopyImageData = s, g.set(t, {
                            bytes: n.size,
                            url: r.href
                        }))
                    } catch {}
                })(e, t, a, r));
                return p.set(e, i), i
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
                m = (0, l.useContext)(y.b);
            return o[0] !== u || o[1] !== m || o[2] !== s ? (t = () => {
                null != s && m?.render.onTerminalFailure(s), m?.render.onFallbackResult("shown", s), m?.presentation.reportRootFailure(u)
            }, a = [m, s, u], o[0] = u, o[1] = m, o[2] = s, o[3] = t, o[4] = a) : (t = o[3], a = o[4]), (0, l.useEffect)(t, a), o[5] !== d || o[6] !== s ? (n = (0, r.jsx)(v.a, {
                stage: s,
                errorClass: d
            }), o[5] = d, o[6] = s, o[7] = n) : n = o[7], n
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
            b = a("BolX"),
            v = a("zd8w"),
            y = a("Wf1j"),
            _ = a("oyxz"),
            w = a("EShr"),
            x = a("OWtl"),
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
            F = a("MM0V"),
            L = a("JNtf"),
            O = a("mUDD");

        function z(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var G = a("zLIa");

        function N(e) {
            let t, a, r, i, n, l, o, s = (0, g.c)(19),
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
                children: (0, p.jsx)(_.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title",
                    description: "Label for the shared image prompt template title"
                })
            }), s[0] = t) : t = s[0], s[1] !== d || s[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), s[1] = d, s[2] = c, s[3] = a) : a = s[3], s[4] !== f || s[5] !== d.title || s[6] !== a ? (r = (0, p.jsxs)(O.f, {
                children: [t, (0, p.jsx)(G.c, {
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
            }), s[4] = f, s[5] = d.title, s[6] = a, s[7] = r) : r = s[7], s[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, p.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, p.jsx)(_.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt",
                    description: "Label for the reusable image generation prompt"
                })
            }), s[8] = i) : i = s[8], s[9] !== d || s[10] !== c ? (n = e => c({
                ...d,
                prompt: e.target.value
            }), s[9] = d, s[10] = c, s[11] = n) : n = s[11], s[12] !== d.prompt || s[13] !== n ? (l = (0, p.jsxs)(O.f, {
                children: [i, (0, p.jsx)(G.c, {
                    id: "image-prompt-text",
                    name: "prompt",
                    variant: "compact",
                    required: !0,
                    rows: 2,
                    maxLength: 2e5,
                    value: d.prompt,
                    onChange: n
                })]
            }), s[12] = d.prompt, s[13] = n, s[14] = l) : l = s[14], s[15] !== h || s[16] !== r || s[17] !== l ? (o = (0, p.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [r, l]
            }), s[15] = h, s[16] = r, s[17] = l, s[18] = o) : o = s[18], o
        }

        function B(e) {
            let t, a, r, i, n, l, o, s, d, c, u, m, h, f, b, w, x, S, j, P, E = (0, g.c)(54),
                {
                    content: A,
                    onSave: C,
                    onClose: M,
                    onCloseAutoFocus: T
                } = e,
                G = (0, y.a)(),
                [B, D] = (0, v.useState)(A),
                [H, q] = (0, v.useState)(!1),
                [W, U] = (0, v.useState)(null);
            E[0] !== B || E[1] !== H || E[2] !== M || E[3] !== C ? (t = async function() {
                if (!H && z(B)) {
                    q(!0), U(null);
                    try {
                        await C(B), M()
                    } catch (e) {
                        U(e instanceof I.FetchError && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    q(!1)
                }
            }, E[0] = B, E[1] = H, E[2] = M, E[3] = C, E[4] = t) : t = E[4];
            let V = t,
                Y = !H;
            return E[5] !== T ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: T
            }, E[5] = T, E[6] = a) : a = E[6], E[7] !== H || E[8] !== M ? (r = e => {
                e || H || M()
            }, E[7] = H, E[8] = M, E[9] = r) : r = E[9], E[10] !== V ? (i = e => {
                e.preventDefault(), e.stopPropagation(), V()
            }, E[10] = V, E[11] = i) : i = E[11], E[12] !== G ? (n = G.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back",
                description: "Return from the image prompt editor to the sharing preview without saving the draft"
            }), E[12] = G, E[13] = n) : n = E[13], E[14] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, p.jsx)(R.bc, {}), E[14] = l) : l = E[14], E[15] !== H || E[16] !== M || E[17] !== n ? (o = (0, p.jsx)(k.a, {
                color: "ghost",
                size: "icon",
                disabled: H,
                "aria-label": n,
                onClick: M,
                children: l
            }), E[15] = H, E[16] = M, E[17] = n, E[18] = o) : o = E[18], E[19] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, p.jsx)(O.d, {
                title: (0, p.jsx)(L.d, {
                    children: (0, p.jsx)(_.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt",
                        description: "Title of the dialog for editing the image's shared title and prompt"
                    })
                })
            }), E[19] = s) : s = E[19], E[20] !== o ? (d = (0, p.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [o, s]
            }), E[20] = o, E[21] = d) : d = E[21], E[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                D(e), U(null)
            }, E[22] = c) : c = E[22], E[23] !== B || E[24] !== H ? (u = (0, p.jsx)(O.e, {
                spacing: "large",
                children: (0, p.jsx)(N, {
                    content: B,
                    disabled: H,
                    autoFocus: !0,
                    onChange: c
                })
            }), E[23] = B, E[24] = H, E[25] = u) : u = E[25], E[26] !== W ? (m = null != W && (0, p.jsx)(O.e, {
                children: (0, p.jsx)(F.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === W ? (0, p.jsx)(_.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again.",
                        description: "Error when moderation rejects an edit to a shared image prompt"
                    }) : (0, p.jsx)(_.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again.",
                        description: "Error when saving an image prompt fails; the draft remains in the editor for retry"
                    })
                })
            }), E[26] = W, E[27] = m) : m = E[27], E[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, p.jsx)(_.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel",
                description: "Discard edits and return to the image prompt sharing preview"
            }), E[28] = h) : h = E[28], E[29] !== H || E[30] !== M ? (f = (0, p.jsx)(k.a, {
                color: "outline",
                disabled: H,
                onClick: M,
                children: h
            }), E[29] = H, E[30] = M, E[31] = f) : f = E[31], E[32] !== B || E[33] !== H ? (b = !z(B) || H, E[32] = B, E[33] = H, E[34] = b) : b = E[34], E[35] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, p.jsx)(_.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save",
                description: "Apply the edited title and prompt and return to the image sharing preview"
            }), E[35] = w) : w = E[35], E[36] !== H || E[37] !== b ? (x = (0, p.jsx)(k.a, {
                type: "submit",
                color: "primary",
                loading: H,
                disabled: b,
                children: w
            }), E[36] = H, E[37] = b, E[38] = x) : x = E[38], E[39] !== f || E[40] !== x ? (S = (0, p.jsxs)(O.c, {
                expandSingleButton: !1,
                children: [f, x]
            }), E[39] = f, E[40] = x, E[41] = S) : S = E[41], E[42] !== d || E[43] !== u || E[44] !== m || E[45] !== S || E[46] !== i ? (j = (0, p.jsxs)(O.b, {
                as: "form",
                size: "viewport",
                onSubmit: i,
                children: [d, u, m, S]
            }), E[42] = d, E[43] = u, E[44] = m, E[45] = S, E[46] = i, E[47] = j) : j = E[47], E[48] !== H || E[49] !== Y || E[50] !== j || E[51] !== a || E[52] !== r ? (P = (0, p.jsx)(L.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: Y,
                shouldIgnoreClickOutside: H,
                contentProps: a,
                onOpenChange: r,
                children: j
            }), E[48] = H, E[49] = Y, E[50] = j, E[51] = a, E[52] = r, E[53] = P) : P = E[53], P
        }

        function D(e) {
            let t, a, r, i, n, l, o, s, d, c, u, m = (0, g.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: b,
                    disabled: _,
                    onSave: w
                } = e,
                x = (0, y.a)(),
                [S, I] = (0, v.useState)(!1),
                j = (0, v.useRef)(null);
            return m[0] !== b || m[1] !== f ? (t = null != f && (0, p.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: b,
                src: f,
                referrerPolicy: "no-referrer"
            }), m[0] = b, m[1] = f, m[2] = t) : t = m[2], m[3] !== x ? (a = x.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt",
                description: "Accessible label for the pencil button that opens the shared image title and prompt editor"
            }), m[3] = x, m[4] = a) : a = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => I(!0), i = (0, p.jsx)(R.Vf, {}), m[5] = r, m[6] = i) : (r = m[5], i = m[6]), m[7] !== _ || m[8] !== a ? (n = (0, p.jsx)(k.a, {
                ref: j,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: _,
                "aria-label": a,
                onClick: r,
                children: i
            }), m[7] = _, m[8] = a, m[9] = n) : n = m[9], m[10] !== t || m[11] !== n ? (l = (0, p.jsxs)("div", {
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
            }), m[17] = l, m[18] = o, m[19] = s, m[20] = d) : d = m[20], m[21] !== h || m[22] !== S || m[23] !== w ? (c = S && (0, p.jsx)(B, {
                content: h,
                onSave: w,
                onClose: () => I(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), j.current?.focus()
                }
            }), m[21] = h, m[22] = S, m[23] = w, m[24] = c) : c = m[24], m[25] !== c || m[26] !== d ? (u = (0, p.jsxs)(p.Fragment, {
                children: [d, c]
            }), m[25] = c, m[26] = d, m[27] = u) : u = m[27], u
        }
        var H = a("AuIy"),
            q = a("iqEK"),
            W = a("ccwJ"),
            U = a("tOYk"),
            V = a("Kwur");
        let Y = (0, b.v)(x.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function X(e, t, a) {
            K(e, t);
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
                        let s = await V.Request.safePost("/share/prompt-share", {
                            isExpectedError: Q,
                            requestBody: {
                                idempotency_key: l,
                                conversation_id: t.conversationId,
                                message_id: i,
                                output_asset_pointer: r,
                                post_text: a.title,
                                published_content: n.editedContent ?? void 0
                            }
                        });
                        K(e, t);
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
                return K(e, t), e.set(Y, t, e => ({
                    ...e,
                    publication: s
                })), s
            } catch (a) {
                throw a instanceof I.FetchError && Q(a) && e.set(Y, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }

        function K(e, t) {
            if (null == t.accountId || null == t.userId || e.get(n.f) !== t.accountId || e.get(n.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function Q(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function J(e) {
            let t, a, r, i, l, s, d, c, u, m, k, R, F, L, O = (0, g.c)(69),
                G = (0, b.y)(x.a),
                N = (0, y.a)(),
                B = (0, b.z)(n.f),
                U = (0, b.z)(n.j);
            O[0] !== B || O[1] !== U ? (t = {
                accountId: B,
                userId: U
            }, O[0] = B, O[1] = U, O[2] = t) : t = O[2];
            let [J] = (0, v.useState)(t), $ = (0, S.h)("1939400492"), Z = (0, S.m)("250422953"), [ee, et] = (0, v.useState)("image");
            O[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {}, O[3] = a) : a = O[3];
            let [ea] = (0, v.useState)(a), er = e.image, ei = er?.item.isAnimated === !0, en = J.accountId === B && J.userId === U, el = null != er && !er.additionalImages?.length && null != B && null != U && en && !$, eo = e.mobileImagePromptShareTreatment;
            O[4] !== el || O[5] !== Z || O[6] !== eo ? (r = el && ("prompt-with-image" === eo || null == eo && Z.get("imagegen_prompt_share_tabs_enabled", !1)), O[4] = el, O[5] = Z, O[6] = eo, O[7] = r) : r = O[7];
            let es = r,
                ed = er?.item.id;
            O[8] !== B || O[9] !== e.serverConversationId || O[10] !== ed || O[11] !== U ? (i = ["image-prompt-share-source", B, U, e.serverConversationId, ed], O[8] = B, O[9] = e.serverConversationId, O[10] = ed, O[11] = U, O[12] = i) : i = O[12], O[13] !== er || O[14] !== e.serverConversationId || O[15] !== G ? (l = async t => {
                let {
                    signal: a
                } = t;
                if (null == er) return null;
                let r = (0, C.c)(e.serverConversationId),
                    i = G.get(A.a, r) ?? r,
                    n = () => {
                        let e = G.get(M.M, i) ?? G.query.getData(j.chatGptConversationQueryById$, r)?.mapping;
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
                            if (n?.src == null || "completed" !== n.status || !(0, q.d)(n.src)) return null;
                            let l = (0, H.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == l || (0, H.m)(l)) return null;
                            let o = (0, H.r)(i.content),
                                s = (Array.isArray(o?.parts) ? o.parts : []).map(H.r).find(e => e?.asset_pointer === n.src || (0, H.r)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, H.r)(s?.image_asset_pointer) ?? s,
                                c = (0, H.i)((0, H.r)((0, H.r)(d?.metadata)?.dalle)?.prompt) ?? (0, H.i)((0, H.e)(l)),
                                u = (0, H.i)(i.id);
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
                        }, er.item)
                    },
                    l = n();
                return null != l ? l : (await (0, T.a)(G, r, a), n())
            }, O[13] = er, O[14] = e.serverConversationId, O[15] = G, O[16] = l) : l = O[16], O[17] !== i || O[18] !== l || O[19] !== es ? (s = {
                enabled: es,
                queryKey: i,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: l
            }, O[17] = i, O[18] = l, O[19] = es, O[20] = s) : s = O[20];
            let {
                data: ec
            } = (0, f.a)(s), eu = ec?.messageId ?? null, em = ec?.assetPointer ?? null;
            O[21] !== B || O[22] !== e.serverConversationId || O[23] !== eu || O[24] !== em || O[25] !== U ? (d = {
                accountId: B,
                userId: U,
                conversationId: e.serverConversationId,
                messageId: eu,
                assetPointer: em
            }, O[21] = B, O[22] = e.serverConversationId, O[23] = eu, O[24] = em, O[25] = U, O[26] = d) : d = O[26];
            let ep = d,
                {
                    editedContent: eg,
                    publication: eh,
                    revision: ef
                } = (0, b.x)(Y, ep),
                eb = es && null != ec,
                ev = eb && null == eo && "image_with_prompt" === Z.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                ey = eb && "template" === ee;
            O[27] !== eg || O[28] !== eh?.title || O[29] !== ec ? (c = eg ?? (null == ec ? void 0 : {
                ...ec.content,
                title: eh?.title ?? ec.content.title
            }), O[27] = eg, O[28] = eh?.title, O[29] = ec, O[30] = c) : c = O[30];
            let e_ = c;
            O[31] !== J.accountId || O[32] !== J.userId || O[33] !== G ? (u = function() {
                if (G.get(n.f) !== J.accountId || G.get(n.j) !== J.userId) throw Error("Image prompt share account changed")
            }, O[31] = J.accountId, O[32] = J.userId, O[33] = G, O[34] = u) : u = O[34];
            let ew = u;
            O[35] !== e_ || O[36] !== er || O[37] !== e.source || O[38] !== ew || O[39] !== G || O[40] !== ep || O[41] !== ec ? (m = async function(t) {
                let a;
                if (ew(), null == ec || null == e_ || !z(e_)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await X(G, ep, ec.content)
                } catch (e) {
                    if (e instanceof I.FetchError && "prompt_share_not_publishable" === e.errorCode) throw new P.a;
                    throw e
                }
                if (ew(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, o.a)(G, h, {
                        action: "tap_send_to",
                        entryPoint: t,
                        tapTarget: "copy_link",
                        shareType: "prompt_with_generated_image",
                        promptShareId: a.prompt_share_id,
                        originalGenerationId: er?.item.chatGptGenerationId
                    })
                }
                return {
                    shareLinkId: a.post_id,
                    shareLinkUrl: `https://chatgpt.com/s/${encodeURIComponent(a.post_id)}`,
                    isWorkspaceOnly: !1,
                    title: a.title
                }
            }, O[35] = e_, O[36] = er, O[37] = e.source, O[38] = ew, O[39] = G, O[40] = ep, O[41] = ec, O[42] = m) : m = O[42];
            let ex = m;
            if (O[43] !== ei || O[44] !== ev ? (k = ei ? (0, p.jsx)(_.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt",
                    description: "Short share-format option in the generated GIF sharing dialog. Shares the animated GIF together with its reusable prompt; the other option is GIF only."
                }) : "image_with_prompt" === ev ? (0, p.jsx)(_.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt",
                    description: "Share-format option for sharing the generated image together with its reusable prompt. The other option is Image only."
                }) : (0, p.jsx)(_.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image",
                    description: "Share the reusable prompt together with the generated image"
                }), O[43] = ei, O[44] = ev, O[45] = k) : k = O[45], !en) return null;
            let eS = ey ? "template" : "image";
            return O[46] !== N || O[47] !== ei || O[48] !== ee || O[49] !== k || O[50] !== eb ? (R = eb ? e => (0, p.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, p.jsx)(w.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: ee,
                    onSelect: et,
                    ariaLabel: N.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format",
                        description: "Label for choosing between sharing an image or its prompt template"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: ei ? (0, p.jsx)(_.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only",
                            description: "Short share-format option in the generated GIF sharing dialog. Shares only the animated GIF; the other option shares the GIF with its reusable prompt."
                        }) : (0, p.jsx)(_.a, {
                            id: "imagePromptShare.imageOnly",
                            defaultMessage: "Image only",
                            description: "Share only the generated image"
                        })
                    }, {
                        id: "template",
                        disabled: e,
                        label: k
                    }]
                })
            }) : void 0, O[46] = N, O[47] = ei, O[48] = ee, O[49] = k, O[50] = eb, O[51] = R) : R = O[51], O[52] !== e_ || O[53] !== ex || O[54] !== er?.alt || O[55] !== ew || O[56] !== ef || O[57] !== G || O[58] !== ep || O[59] !== ec || O[60] !== ev || O[61] !== ey ? (F = ey && null != e_ ? {
                label: ev,
                revision: ef,
                createLink: ex,
                actionsDisabled: !z(e_),
                preview: (e, t, a) => (0, p.jsx)(D, {
                    content: e_,
                    previewSrc: t,
                    alt: er?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (ew(), null == ec) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== e_.title.trim() || e.prompt !== e_.prompt) && await async function(e, t, a, r) {
                            K(e, t);
                            let i = e.get(Y, t),
                                n = null == i.idempotencyKey ? i.publication : await X(e, t, a),
                                l = r;
                            if (null != n) {
                                let e = await V.Request.safePatch("/share/post/{post_id}/prompt-share", {
                                    isExpectedError: Q,
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
                            K(e, t), e.set(Y, t, e => ({
                                ...e,
                                editedContent: l,
                                publication: null == e.publication ? null : {
                                    ...e.publication,
                                    title: l.title
                                },
                                revision: e.revision + 1
                            }))
                        }(G, ep, ec.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), ew(), a()
                    }
                })
            } : void 0, O[52] = e_, O[53] = ex, O[54] = er?.alt, O[55] = ew, O[56] = ef, O[57] = G, O[58] = ep, O[59] = ec, O[60] = ev, O[61] = ey, O[62] = F) : F = O[62], O[63] !== ea || O[64] !== e || O[65] !== eS || O[66] !== R || O[67] !== F ? (L = (0, p.jsx)(E.a, {
                ...e,
                mobileImageRowScrollPositions: ea,
                imageShareOptions: R,
                imagePromptTemplate: F
            }, eS), O[63] = ea, O[64] = e, O[65] = eS, O[66] = R, O[67] = F, O[68] = L) : L = O[68], L
        }

        function $(e, t) {
            let a, {
                    additionalImages: d,
                    alt: p,
                    downloadAnalyticsImage: g,
                    downloadIsParagen: h,
                    image: f,
                    isDirectLightboxShare: b,
                    previewSrc: v,
                    serverConversationId: y,
                    source: _ = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    title: w
                } = t,
                x = crypto.randomUUID(),
                S = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    conversationId: y,
                    shareSessionId: x,
                    source: _
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
                    alt: p,
                    downloadAnalyticsImage: g,
                    downloadIsParagen: h,
                    isDirectLightboxShare: b,
                    item: f,
                    previewSrc: v
                },
                F = () => (0, l.f)(e, J, {
                    currentNodeId: f.id,
                    image: R,
                    serverConversationId: y,
                    shareSessionId: x,
                    source: _,
                    title: w,
                    mobileImageExperience: M,
                    mobileImagePromptShareTreatment: E?.promptShareTreatment,
                    onImageShareLinkPrepared: null == E ? void 0 : k,
                    trackMobileImageShareLifecycle: P && E?.kind === "native"
                });
            P && E?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, y, R);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void F();
                    if (!T()) return;
                    if (!C) return void F();
                    k(a);
                    let r = await (0, m.b)(e, a, y, x, _);
                    if ("shared" === r || "cancelled" === r) return
                } catch {}
                T() && F()
            }(): F()
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
            m = a("zHp1"),
            p = a("Yscs"),
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
                    _ = JSON.stringify([r?.id, b]),
                    w = 0,
                    x = Promise.resolve(),
                    S = u({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (r?.isAnimated) return f.watch(t => {
                                if (0 !== w) return;
                                let a = t.get(h, _),
                                    n = (0, i.d)(v(t, r)?.gifPlayback, a ?? void 0);
                                (null != a || 1 !== n) && (e({
                                    preview: null,
                                    busy: !0
                                }), E(n, !1))
                            })
                        }
                    }),
                    I = async e => {
                        let t = null != e && (0, m.h)(e) && null != o ? await (0, m.a)(f.queryClient, e, o) : e,
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
                            src: await (0, p.a)(s),
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
                            }), t && (f.set(h, _, e), x = x.then(async () => {
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
                        let r = (0, i.d)(v(f, e)?.gifPlayback, S.get().preview?.speed ?? f.get(h, _) ?? void 0),
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
                let m = null == o ? void 0 : "toolbar",
                    p = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                    g = "imageTools" === u && "gap-0 shadow-md",
                    h = "playback" === u && "gap-2 shadow-sm";
                return l[4] !== d || l[5] !== p || l[6] !== g || l[7] !== h ? (t = (0, n.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", p, g, h, d), l[4] = d, l[5] = p, l[6] = g, l[7] = h, l[8] = t) : t = l[8], l[9] !== o || l[10] !== s || l[11] !== m || l[12] !== t ? (a = (0, r.jsx)("div", {
                    role: m,
                    "aria-label": o,
                    className: t,
                    children: s
                }), l[9] = o, l[10] = s, l[11] = m, l[12] = t, l[13] = a) : a = l[13], a
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
                m = "top" === (void 0 === d ? "bottom" : d) ? "top-3.5" : "bottom-3.5";
            s[0] !== m ? (t = (0, n.b)("pointer-events-none absolute end-3.5 z-10 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-card/80 px-2 body-sm font-medium text-[color:var(--color-image-generation-text,var(--color-text-info))] tabular-nums shadow-lg ring-[0.5px] ring-border backdrop-blur-md select-none", m), s[0] = m, s[1] = t) : t = s[1];
            let p = c / 100;
            return s[2] !== p ? (a = (0, r.jsx)(o.c, {
                value: p,
                style: "percent"
            }), s[2] = p, s[3] = a) : a = s[3], s[4] !== u || s[5] !== t || s[6] !== a ? (l = (0, r.jsx)("span", {
                ref: u,
                className: t,
                children: a
            }), s[4] = u, s[5] = t, s[6] = a, s[7] = l) : l = s[7], l
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, n, o = (0, i.c)(7),
                    {
                        generationStartedAtMs: m,
                        isActive: p,
                        placement: g
                    } = e,
                    h = void 0 === p || p,
                    [f, b] = (0, l.useState)(c),
                    v = (0, l.useRef)(null);
                return o[0] !== m || o[1] !== h ? (t = () => {
                    let e, t = v.current;
                    if (null == t) return;
                    let a = t.ownerDocument,
                        r = !1,
                        i = () => {
                            let t = (0, d.a)(Date.now() - m);
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
                }, a = [m, h], o[0] = m, o[1] = h, o[2] = t, o[3] = a) : (t = o[2], a = o[3]), (0, l.useLayoutEffect)(t, a), o[4] !== g || o[5] !== f ? (n = (0, r.jsx)(u, {
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
            a: () => p
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
        let m = {
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

        function p(e) {
            let t, a, l, s, d, c, m = (0, i.c)(25),
                {
                    ariaLabel: p,
                    background: h,
                    generationStartedAtMs: f,
                    isAnimating: b,
                    presentation: v,
                    previewSrc: y
                } = e,
                _ = void 0 === b || b,
                w = void 0 === v ? "default" : v,
                x = (0, o.a)(),
                S = "fill" === w || "image-preview" === w,
                I = w;
            "single" === I ? I = "playground" : "fill" === I && (I = "default"), m[0] !== p || m[1] !== x ? (t = p ?? x.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image...",
                description: "Aria label for the image generation loading placeholder"
            }), m[0] = p, m[1] = x, m[2] = t) : t = m[2];
            let j = null != y ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
                P = null == y && "surface" === (void 0 === h ? "surface" : h) && ("single" === w ? "bg-surface-secondary" : "dark:bg-secondary-ghost-hover bg-primary-soft-active");
            m[3] !== S || m[4] !== w || m[5] !== j || m[6] !== P ? (a = (0, n.b)("overflow-clip", j, P, S ? "absolute inset-0 size-full" : ["relative aspect-square", "thumbnail" === w ? "rounded-lg" : "rounded-2xl", "single" === w ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]"]), m[3] = S, m[4] = w, m[5] = j, m[6] = P, m[7] = a) : a = m[7], m[8] !== w || m[9] !== y ? (l = null != y ? (0, r.jsx)("img", {
                alt: "",
                className: (0, n.b)("pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70", "image-preview" === w ? "blur-md" : "scale-125 blur-3xl"),
                src: y,
                referrerPolicy: "no-referrer"
            }) : null, m[8] = w, m[9] = y, m[10] = l) : l = m[10];
            let E = null != y;
            return m[11] !== I || m[12] !== _ || m[13] !== E ? (s = (0, r.jsx)(g, {
                isAnimating: _,
                overImage: E,
                presentation: I
            }), m[11] = I, m[12] = _, m[13] = E, m[14] = s) : s = m[14], m[15] !== S || m[16] !== f || m[17] !== _ ? (d = null != f ? (0, r.jsx)(u.a, {
                generationStartedAtMs: f,
                isActive: _,
                placement: S ? "top" : "bottom"
            }, f) : null, m[15] = S, m[16] = f, m[17] = _, m[18] = d) : d = m[18], m[19] !== s || m[20] !== d || m[21] !== t || m[22] !== a || m[23] !== l ? (c = (0, r.jsxs)("div", {
                "aria-busy": !0,
                "aria-label": t,
                className: a,
                children: [l, s, d]
            }), m[19] = s, m[20] = d, m[21] = t, m[22] = a, m[23] = l, m[24] = c) : c = m[24], c
        }

        function g(e) {
            let t, a, o, u, p, g = (0, i.c)(17),
                {
                    isAnimating: y,
                    overImage: _,
                    presentation: w
                } = e,
                x = (0, d.a)(),
                S = (0, c.a)(),
                I = (0, l.useRef)(null),
                j = (0, l.useRef)(null);
            g[0] !== y || g[1] !== S || g[2] !== w || g[3] !== x ? (t = () => {
                if (!y) return;
                let e = I.current,
                    t = j.current,
                    a = t?.getContext("2d");
                if (null == e || null == t || null == a) return;
                let r = 2 * Math.PI,
                    i = getComputedStyle(e).color || (S ? "white" : "black"),
                    n = (e, t) => e + (x ? .5 : Math.random()) * (t - e),
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
                    p = !0,
                    g = null,
                    _ = !1,
                    P = !1,
                    E = t.ownerDocument,
                    A = n => {
                        var l, s, y, _, S, I, j, P, E, C, M, T;
                        if (!x && 0 !== c && n - c < 33.333333333333336) {
                            d = requestAnimationFrame(A);
                            return
                        }
                        if (c = n, null == g && (g = n), (p || null == u) && (() => {
                                let a = "image-preview" === w ? {
                                        width: e.clientWidth,
                                        height: e.clientHeight
                                    } : e.getBoundingClientRect(),
                                    r = Math.max(0, Math.floor(a.width)),
                                    i = Math.max(0, Math.floor(a.height));
                                if (0 === r || 0 === i) {
                                    u = null, p = !1;
                                    return
                                }
                                let n = Math.max(1, window.devicePixelRatio || 1),
                                    l = Math.floor(r * n),
                                    o = Math.floor(i * n);
                                (t.width !== l || t.height !== o) && (t.width = l, t.height = o);
                                let s = "default" === w ? Math.max(1, 12 / n) : m[w].spacing,
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
                                }, p = !1
                            })(), null == u) {
                            d = null;
                            return
                        }
                        let k = x ? 0 : n - g,
                            R = (e, t) => {
                                let a;
                                return (a = (k / e + t) % 1) <= .5 ? 2 * a : 2 - 2 * a
                            },
                            F = (l = o.bounds.x1Start, s = o.bounds.x1End, l + (s - l) * v(R(o.durations.offsetX1, o.phases.offsetX1))),
                            L = (y = o.bounds.y1Start, _ = o.bounds.y1End, y + (_ - y) * b(R(o.durations.offsetY1, o.phases.offsetY1))),
                            O = (S = o.bounds.x2Start, I = o.bounds.x2End, S + (I - S) * v(R(o.durations.offsetX2, o.phases.offsetX2))),
                            z = (j = o.bounds.y2Start, P = o.bounds.y2End, j + (P - j) * b(R(o.durations.offsetY2, o.phases.offsetY2))),
                            G = .78 * (E = o.fieldSizeRange.firstStart, C = o.fieldSizeRange.firstEnd, E + (C - E) * b(R(o.durations.fieldSize1, o.phases.fieldSize1))),
                            N = .78 * (M = o.fieldSizeRange.secondStart, T = o.fieldSizeRange.secondEnd, M + (T - M) * b(R(o.durations.fieldSize2, o.phases.fieldSize2)));
                        a.save(), a.setTransform(u.dpr, 0, 0, u.dpr, 0, 0), a.clearRect(0, 0, u.width, u.height), a.fillStyle = i;
                        let B = "default" === w ? Math.max(.55, .5 * u.spacing * .16) : m[w].radius;
                        for (let e = 0; e < u.yPositions.length; e += 1) {
                            let t = u.yPositions[e],
                                i = u.yNormals[e];
                            for (let e = 0; e < u.xPositions.length; e += 1) {
                                let n = u.xPositions[e],
                                    l = u.xNormals[e],
                                    o = Math.pow(h((1 - f(0, G, Math.hypot(l - F, i - L))) * 1.2 + (1 - f(0, N, Math.hypot(l - O, i - z))) * .82), 1.18);
                                o <= .03 || (a.globalAlpha = o, a.beginPath(), a.moveTo(n + B, t), a.arc(n, t, B, 0, r), a.fill())
                            }
                        }
                        a.restore(), d = x ? null : requestAnimationFrame(A)
                    },
                    C = new ResizeObserver(() => {
                        p = !0, _ && null == d && (d = requestAnimationFrame(A))
                    });
                C.observe(e);
                let M = () => {
                        (_ = P && "hidden" !== E.visibilityState) ? null == d && (d = requestAnimationFrame(A)): null != d && (cancelAnimationFrame(d), d = null)
                    },
                    T = (0, s.a)(e, e => {
                        P = e, M()
                    });
                return E.addEventListener("visibilitychange", M), () => {
                    T?.(), E.removeEventListener("visibilitychange", M), null != d && cancelAnimationFrame(d), C.disconnect()
                }
            }, g[0] = y, g[1] = S, g[2] = w, g[3] = x, g[4] = t) : t = g[4], g[5] !== y || g[6] !== S || g[7] !== _ || g[8] !== w || g[9] !== x ? (a = [y, S, _, w, x], g[5] = y, g[6] = S, g[7] = _, g[8] = w, g[9] = x, g[10] = a) : a = g[10], (0, l.useEffect)(t, a);
            let P = (_ || "image-preview" === w) && "overImage-KmHrEc",
                E = (!y || x) && "reducedMotion-ttnr0y";
            return g[11] !== P || g[12] !== E ? (o = (0, n.b)("dots-avXrIV", P, E), g[11] = P, g[12] = E, g[13] = o) : o = g[13], g[14] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)("canvas", {
                ref: j,
                "aria-hidden": !0,
                className: "block h-full w-full"
            }), g[14] = u) : u = g[14], g[15] !== o ? (p = (0, r.jsx)("div", {
                ref: I,
                className: o,
                children: u
            }), g[15] = o, g[16] = p) : p = g[16], p
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
            b = a("ZedP"),
            v = a("fi73"),
            y = a("uVXd");

        function _(e) {
            let t, a = (0, i.c)(3),
                l = !0 !== e["aria-expanded"] && "true" !== e["aria-expanded"] && void 0;
            return a[0] !== e || a[1] !== l ? (t = (0, r.jsx)(n.a, {
                ...e,
                forceOpen: l
            }), a[0] = e, a[1] = l, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, n, w, x, S, I, j = (0, i.c)(53),
                    {
                        downloadImageCount: P,
                        floatingToolbarVariant: E,
                        moreActions: A,
                        isAnimated: C,
                        isImageActionsDisabled: M,
                        isUnifiedViewerEnabled: T,
                        onDownload: k,
                        onDownloadAll: R,
                        onDownloadMenuOpen: F,
                        onShare: L,
                        onShareAll: O,
                        onShareMenuOpen: z,
                        saveAction: G,
                        shareImageCount: N,
                        showShareText: B
                    } = e,
                    D = void 0 !== C && C,
                    H = void 0 !== T && T,
                    q = void 0 !== B && B,
                    W = (0, o.a)(),
                    [U, V] = (0, l.useState)(!1),
                    Y = "toolbar";
                null != E && (Y = "imageTools" === E ? "imageToolbar" : "composerSm"), j[0] !== Y || j[1] !== E || j[2] !== W || j[3] !== M || j[4] !== H || j[5] !== L || j[6] !== O || j[7] !== q ? (t = H ? (0, r.jsxs)(f.c, {
                    "aria-label": W.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }),
                    disabled: M,
                    uniform: !q,
                    onClick: null == O ? L : void 0,
                    children: [(0, r.jsx)(p.b, {
                        icon: {
                            16: m.L,
                            20: m.M
                        }
                    }), q ? (0, r.jsx)(s.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }) : null]
                }) : (0, r.jsx)(d.a, {
                    color: null == E ? "primary" : "ghostActive",
                    disabled: M,
                    size: Y,
                    onClick: null == O ? L : void 0,
                    children: (0, r.jsx)(s.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    })
                }), j[0] = Y, j[1] = E, j[2] = W, j[3] = M, j[4] = H, j[5] = L, j[6] = O, j[7] = q, j[8] = t) : t = j[8];
                let X = t;
                if (null != L && null != O) {
                    let e;
                    j[9] !== D || j[10] !== M || j[11] !== L || j[12] !== O || j[13] !== z || j[14] !== X || j[15] !== N ? (e = (0, r.jsx)(b.a, {
                        disabled: M,
                        imageCount: N,
                        isAnimated: D,
                        onOpen: z,
                        onShare: L,
                        onShareAll: O,
                        triggerButton: X
                    }), j[9] = D, j[10] = M, j[11] = L, j[12] = O, j[13] = z, j[14] = X, j[15] = N, j[16] = e) : e = j[16], X = e
                }
                if (null != E) {
                    let e;
                    j[17] !== E || j[18] !== X ? (e = (0, r.jsx)(h.a, {
                        variant: E,
                        children: X
                    }), j[17] = E, j[18] = X, j[19] = e) : e = j[19], X = e
                }
                j[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    V(!0), await e().finally(() => {
                        V(!1)
                    })
                }, j[20] = a) : a = j[20];
                let K = a;
                j[21] !== Y || j[22] !== P || j[23] !== E || j[24] !== W || j[25] !== D || j[26] !== U || j[27] !== M || j[28] !== H || j[29] !== k || j[30] !== R || j[31] !== F || j[32] !== G ? (n = null != R && null != k ? (0, r.jsxs)(c.a, {
                    align: "end",
                    disabled: M || U,
                    onOpenChange: e => {
                        e && F?.()
                    },
                    triggerButton: (0, r.jsx)(_, {
                        content: (0, r.jsx)(s.a, {
                            ...(0, g.a)({
                                isAnimated: D
                            }).downloadLabel
                        }),
                        children: H ? (0, r.jsx)(f.c, {
                            "aria-label": W.formatMessage((0, g.a)({
                                isAnimated: D
                            }).downloadLabel),
                            disabled: M || U,
                            loading: U,
                            uniform: !0,
                            children: (0, r.jsx)(p.b, {
                                icon: {
                                    assets: {
                                        16: v.a,
                                        20: y.a
                                    }
                                }
                            })
                        }) : (0, r.jsx)(d.a, {
                            "aria-label": W.formatMessage((0, g.a)({
                                isAnimated: D
                            }).downloadLabel),
                            color: null == E ? "ghost" : "ghostActive",
                            disabled: M || U,
                            loading: U,
                            size: Y,
                            uniform: !0,
                            children: "compact" === E ? (0, r.jsx)(u.a, {
                                asset: v.a
                            }) : (0, r.jsx)(m.r, {})
                        })
                    }),
                    children: [(0, r.jsx)(c.c.Item, {
                        onSelect: () => void K(k),
                        children: (0, r.jsx)(s.a, {
                            ...(0, g.a)({
                                isAnimated: D
                            }).downloadMenuLabel
                        })
                    }), (0, r.jsx)(c.c.Item, {
                        onSelect: () => void K(R),
                        children: (0, r.jsx)(s.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            description: "Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.",
                            values: {
                                count: P
                            }
                        })
                    })]
                }) : G, j[21] = Y, j[22] = P, j[23] = E, j[24] = W, j[25] = D, j[26] = U, j[27] = M, j[28] = H, j[29] = k, j[30] = R, j[31] = F, j[32] = G, j[33] = n) : n = j[33];
                let Q = n;
                if (null != E && null != R && null != k) {
                    let e;
                    j[34] !== Q || j[35] !== E ? (e = (0, r.jsx)(h.a, {
                        variant: E,
                        children: Q
                    }), j[34] = Q, j[35] = E, j[36] = e) : e = j[36], Q = e
                }
                let J = null == L ? null : X;
                j[37] !== Q || j[38] !== J ? (w = (0, r.jsxs)(r.Fragment, {
                    children: [Q, J]
                }), j[37] = Q, j[38] = J, j[39] = w) : w = j[39];
                let $ = w;
                j[40] !== E || j[41] !== A ? (x = null == A || null == E ? A : (0, r.jsx)(h.a, {
                    variant: E,
                    children: A
                }), j[40] = E, j[41] = A, j[42] = x) : x = j[42];
                let Z = x,
                    ee = null != L || null != Q;
                if (!H || q) {
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
                let t, a, u, m, p, g, h, f = (0, i.c)(19),
                    {
                        disabled: b,
                        imageCount: v,
                        isAnimated: y,
                        onOpen: _,
                        onShare: w,
                        onShareAll: x,
                        triggerButton: S
                    } = e,
                    I = void 0 !== y && y;
                return f[0] !== _ ? (t = e => {
                    e && _?.()
                }, f[0] = _, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(o.a, {
                    className: "text-gray-1000",
                    asset: d.a
                }), f[2] = a) : a = f[2], f[3] !== I ? (u = (0, s.a)({
                    isAnimated: I
                }), f[3] = I, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (m = (0, r.jsx)(n.a, {
                    ...u.shareSelectionLabel
                }), f[5] = u.shareSelectionLabel, f[6] = m) : m = f[6], f[7] !== w || f[8] !== m ? (p = (0, r.jsx)(l.c.Item, {
                    leftIcon: a,
                    onSelect: w,
                    children: m
                }), f[7] = w, f[8] = m, f[9] = p) : p = f[9], f[10] !== v || f[11] !== x ? (g = null == x ? null : (0, r.jsx)(l.c.Item, {
                    leftIcon: (0, r.jsx)(o.a, {
                        className: "text-gray-1000",
                        asset: c.a
                    }),
                    onSelect: x,
                    children: (0, r.jsx)(n.a, {
                        id: "imagePreview.shareSeries",
                        defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                        description: "Option in the generated-image Share dropdown that shares every completed image in the selected generation series. imageCount is the number of images included, always greater than one. Keep this menu label concise.",
                        values: {
                            imageCount: v
                        }
                    })
                }), f[10] = v, f[11] = x, f[12] = g) : g = f[12], f[13] !== b || f[14] !== t || f[15] !== p || f[16] !== g || f[17] !== S ? (h = (0, r.jsxs)(l.a, {
                    align: "end",
                    disabled: b,
                    triggerButton: S,
                    onOpenChange: t,
                    children: [p, g]
                }), f[13] = b, f[14] = t, f[15] = p, f[16] = g, f[17] = S, f[18] = h) : h = f[18], h
            }
        })
    })
};