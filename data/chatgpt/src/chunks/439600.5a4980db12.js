export const __rspack_esm_ids = [439600];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("N55g");
        let l = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(431630), a.e(806110), a.e(81461), a.e(882456), a.e(145049), a.e(580441), a.e(883579), a.e(625652), a.e(4304), a.e(499790), a.e(769185), a.e(909395), a.e(907652), a.e(70086), a.e(762074), a.e(679646), a.e(587936), a.e(904817), a.e(452048), a.e(445991), a.e(299268), a.e(212487), a.e(17983), a.e(167649), a.e(826779), a.e(433520), a.e(509282), a.e(523433), a.e(403815), a.e(340405), a.e(811451)]).then(a.bind(a, "nTBW"))).ChatGptDilDirectiveRenderer, {
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
        let l = (0, i.a)(async () => (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(284470), a.e(753405), a.e(321957), a.e(585419), a.e(673131), a.e(877700), a.e(353230), a.e(806110), a.e(81461), a.e(882456), a.e(145049), a.e(580441), a.e(784669), a.e(8197), a.e(43573), a.e(373390), a.e(371054), a.e(418893), a.e(444472), a.e(281801), a.e(885752), a.e(4304), a.e(499790), a.e(769185), a.e(909395), a.e(907652), a.e(70086), a.e(762074), a.e(679646), a.e(587936), a.e(904817), a.e(452048), a.e(445991), a.e(299268), a.e(212487), a.e(17983), a.e(167649), a.e(826779), a.e(433520), a.e(509282), a.e(523433), a.e(403815), a.e(912134), a.e(340405), a.e(377437)]).then(a.bind(a, "dKrY"))).DilResponse, {
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
        let p = (0, i.createContext)(null),
            m = (0, i.createContext)(null),
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
        let _ = new Set;

        function w() {
            for (let e of _) e.presentation.onPageHide()
        }

        function x(e) {
            let t, a, d, c, u, p, m, g, h, f, b, v = (0, i.c)(31),
                {
                    children: x,
                    contentReferenceIndex: j,
                    isPresented: P,
                    isPreparing: C,
                    isStreaming: E,
                    sourceMessageId: A
                } = e,
                T = void 0 === P || P,
                k = (0, n.y)(s.a);
            v[0] !== k ? (t = () => (0, y.d)(k), v[0] = k, v[1] = t) : t = v[1];
            let [L] = (0, l.useState)(t), R = void 0 !== C && C ? null : L;
            v[2] !== T || v[3] !== E || v[4] !== R ? (a = () => {
                R && (R.presentation.updateStreaming(E), R.presentation.setPresented(T))
            }, d = [R, T, E], v[2] = T, v[3] = E, v[4] = R, v[5] = a, v[6] = d) : (a = v[5], d = v[6]), (0, l.useLayoutEffect)(a, d), v[7] !== E || v[8] !== R?.presentation || v[9] !== R?.presentation.attach ? (c = () => R?.presentation.attach(E), v[7] = E, v[8] = R?.presentation, v[9] = R?.presentation.attach, v[10] = c) : c = v[10];
            let O = (0, l.useEffectEvent)(c);
            v[11] !== O || v[12] !== R ? (u = () => {
                if (!R) return;
                let e = O();
                return _.add(R), 1 === _.size && window.addEventListener("pagehide", w, !0), () => {
                    _.delete(R), 0 === _.size && window.removeEventListener("pagehide", w, !0), e?.()
                }
            }, v[11] = O, v[12] = R, v[13] = u) : u = v[13], v[14] !== R ? (p = [R], v[14] = R, v[15] = p) : p = v[15], (0, l.useEffect)(u, p);
            let F = null == j ? void 0 : "contents";
            v[16] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, r.jsx)(I, {}), v[16] = m) : m = v[16];
            let M = R?.render.onHostRenderFailure;
            return v[17] !== x || v[18] !== M ? (g = (0, r.jsx)(o.a, {
                name: "ModelWrittenDILV2Renderer",
                fallback: m,
                onError: M,
                children: x
            }), v[17] = x, v[18] = M, v[19] = g) : g = v[19], v[20] !== j || v[21] !== A || v[22] !== g || v[23] !== F ? (h = (0, r.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": A,
                "data-chatgpt-copy-reference": j,
                "data-markdown-copy": F,
                onLoadCapture: S,
                children: g
            }), v[20] = j, v[21] = A, v[22] = g, v[23] = F, v[24] = h) : h = v[24], v[25] !== R || v[26] !== h ? (f = (0, r.jsx)(y.b.Provider, {
                value: R,
                children: h
            }), v[25] = R, v[26] = h, v[27] = f) : f = v[27], v[28] !== L.render.onPreparationEnd || v[29] !== f ? (b = (0, r.jsx)(y.a.Provider, {
                value: L.render.onPreparationEnd,
                children: f
            }), v[28] = L.render.onPreparationEnd, v[29] = f, v[30] = b) : b = v[30], b
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
            _ = a("oyxz"),
            w = a("EShr"),
            x = a("OWtl"),
            S = a("hZax"),
            I = a("eShZ"),
            j = a("lBzi"),
            P = a("r9i9"),
            C = a("tdfh"),
            E = a("aFoA"),
            A = a("OOaz"),
            T = a("dQRk"),
            k = a("jfiJ"),
            L = a("Sm6l"),
            R = a("bf6R"),
            O = a("qKAH"),
            F = a("zKCW"),
            M = a("JNtf"),
            N = a("mUDD");

        function G(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var B = a("zLIa");

        function H(e) {
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
                children: (0, m.jsx)(_.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title",
                    description: "Label for the shared image prompt template title"
                })
            }), s[0] = t) : t = s[0], s[1] !== d || s[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), s[1] = d, s[2] = c, s[3] = a) : a = s[3], s[4] !== f || s[5] !== d.title || s[6] !== a ? (r = (0, m.jsxs)(N.f, {
                children: [t, (0, m.jsx)(B.c, {
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
                children: (0, m.jsx)(_.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt",
                    description: "Label for the reusable image generation prompt"
                })
            }), s[8] = i) : i = s[8], s[9] !== d || s[10] !== c ? (n = e => c({
                ...d,
                prompt: e.target.value
            }), s[9] = d, s[10] = c, s[11] = n) : n = s[11], s[12] !== d.prompt || s[13] !== n ? (l = (0, m.jsxs)(N.f, {
                children: [i, (0, m.jsx)(B.c, {
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

        function z(e) {
            let t, a, r, i, n, l, o, s, d, c, u, p, h, f, b, w, x, S, j, P, C = (0, g.c)(54),
                {
                    content: E,
                    onSave: A,
                    onClose: T,
                    onCloseAutoFocus: k
                } = e,
                O = (0, y.a)(),
                [B, z] = (0, v.useState)(E),
                [D, W] = (0, v.useState)(!1),
                [q, U] = (0, v.useState)(null);
            C[0] !== B || C[1] !== D || C[2] !== T || C[3] !== A ? (t = async function() {
                if (!D && G(B)) {
                    W(!0), U(null);
                    try {
                        await A(B), T()
                    } catch (e) {
                        U(e instanceof I.a && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    W(!1)
                }
            }, C[0] = B, C[1] = D, C[2] = T, C[3] = A, C[4] = t) : t = C[4];
            let K = t,
                V = !D;
            return C[5] !== k ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: k
            }, C[5] = k, C[6] = a) : a = C[6], C[7] !== D || C[8] !== T ? (r = e => {
                e || D || T()
            }, C[7] = D, C[8] = T, C[9] = r) : r = C[9], C[10] !== K ? (i = e => {
                e.preventDefault(), e.stopPropagation(), K()
            }, C[10] = K, C[11] = i) : i = C[11], C[12] !== O ? (n = O.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back",
                description: "Return from the image prompt editor to the sharing preview without saving the draft"
            }), C[12] = O, C[13] = n) : n = C[13], C[14] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, m.jsx)(R.bc, {}), C[14] = l) : l = C[14], C[15] !== D || C[16] !== T || C[17] !== n ? (o = (0, m.jsx)(L.a, {
                color: "ghost",
                size: "icon",
                disabled: D,
                "aria-label": n,
                onClick: T,
                children: l
            }), C[15] = D, C[16] = T, C[17] = n, C[18] = o) : o = C[18], C[19] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, m.jsx)(N.d, {
                title: (0, m.jsx)(M.d, {
                    children: (0, m.jsx)(_.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt",
                        description: "Title of the dialog for editing the image's shared title and prompt"
                    })
                })
            }), C[19] = s) : s = C[19], C[20] !== o ? (d = (0, m.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [o, s]
            }), C[20] = o, C[21] = d) : d = C[21], C[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                z(e), U(null)
            }, C[22] = c) : c = C[22], C[23] !== B || C[24] !== D ? (u = (0, m.jsx)(N.e, {
                spacing: "large",
                children: (0, m.jsx)(H, {
                    content: B,
                    disabled: D,
                    autoFocus: !0,
                    onChange: c
                })
            }), C[23] = B, C[24] = D, C[25] = u) : u = C[25], C[26] !== q ? (p = null != q && (0, m.jsx)(N.e, {
                children: (0, m.jsx)(F.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === q ? (0, m.jsx)(_.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again.",
                        description: "Error when moderation rejects an edit to a shared image prompt"
                    }) : (0, m.jsx)(_.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again.",
                        description: "Error when saving an image prompt fails; the draft remains in the editor for retry"
                    })
                })
            }), C[26] = q, C[27] = p) : p = C[27], C[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, m.jsx)(_.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel",
                description: "Discard edits and return to the image prompt sharing preview"
            }), C[28] = h) : h = C[28], C[29] !== D || C[30] !== T ? (f = (0, m.jsx)(L.a, {
                color: "outline",
                disabled: D,
                onClick: T,
                children: h
            }), C[29] = D, C[30] = T, C[31] = f) : f = C[31], C[32] !== B || C[33] !== D ? (b = !G(B) || D, C[32] = B, C[33] = D, C[34] = b) : b = C[34], C[35] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, m.jsx)(_.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save",
                description: "Apply the edited title and prompt and return to the image sharing preview"
            }), C[35] = w) : w = C[35], C[36] !== D || C[37] !== b ? (x = (0, m.jsx)(L.a, {
                type: "submit",
                color: "primary",
                loading: D,
                disabled: b,
                children: w
            }), C[36] = D, C[37] = b, C[38] = x) : x = C[38], C[39] !== f || C[40] !== x ? (S = (0, m.jsxs)(N.c, {
                expandSingleButton: !1,
                children: [f, x]
            }), C[39] = f, C[40] = x, C[41] = S) : S = C[41], C[42] !== d || C[43] !== u || C[44] !== p || C[45] !== S || C[46] !== i ? (j = (0, m.jsxs)(N.b, {
                as: "form",
                size: "viewport",
                onSubmit: i,
                children: [d, u, p, S]
            }), C[42] = d, C[43] = u, C[44] = p, C[45] = S, C[46] = i, C[47] = j) : j = C[47], C[48] !== D || C[49] !== V || C[50] !== j || C[51] !== a || C[52] !== r ? (P = (0, m.jsx)(M.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: V,
                shouldIgnoreClickOutside: D,
                contentProps: a,
                onOpenChange: r,
                children: j
            }), C[48] = D, C[49] = V, C[50] = j, C[51] = a, C[52] = r, C[53] = P) : P = C[53], P
        }

        function D(e) {
            let t, a, r, i, n, l, o, s, d, c, u, p, h, f, b, _, w = (0, g.c)(42),
                {
                    content: x,
                    previewSrc: S,
                    alt: I,
                    disabled: j,
                    onSave: P
                } = e,
                C = (0, y.a)(),
                [E, A] = (0, v.useState)(!1),
                T = (0, v.useRef)(null);
            return w[0] !== I || w[1] !== S ? (t = null != S && (0, m.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: I,
                src: S,
                referrerPolicy: "no-referrer"
            }), w[0] = I, w[1] = S, w[2] = t) : t = w[2], w[3] !== x.title ? (a = (0, m.jsx)("h2", {
                className: "font-medium break-words",
                children: x.title
            }), w[3] = x.title, w[4] = a) : a = w[4], w[5] !== x.prompt ? (r = (0, m.jsx)("p", {
                className: "break-words whitespace-pre-wrap",
                children: x.prompt
            }), w[5] = x.prompt, w[6] = r) : r = w[6], w[7] !== I || w[8] !== S ? (i = null != S && (0, m.jsx)("img", {
                alt: I,
                src: S,
                referrerPolicy: "no-referrer",
                className: "h-auto max-w-full rounded-xl"
            }), w[7] = I, w[8] = S, w[9] = i) : i = w[9], w[10] !== a || w[11] !== r || w[12] !== i ? (n = (0, m.jsx)(O.a, {
                children: (0, m.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [a, r, i]
                })
            }), w[10] = a, w[11] = r, w[12] = i, w[13] = n) : n = w[13], w[14] !== C ? (l = C.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt",
                description: "Accessible label for the pencil button that opens the shared image title and prompt editor"
            }), w[14] = C, w[15] = l) : l = w[15], w[16] === Symbol.for("react.memo_cache_sentinel") ? (o = () => A(!0), s = (0, m.jsx)(R.Vf, {}), w[16] = o, w[17] = s) : (o = w[16], s = w[17]), w[18] !== j || w[19] !== l ? (d = (0, m.jsx)(L.a, {
                ref: T,
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
            }), w[24] = t, w[25] = c, w[26] = u) : u = w[26], w[27] !== x.title ? (p = (0, m.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: x.title
            }), w[27] = x.title, w[28] = p) : p = w[28], w[29] !== x.prompt ? (h = (0, m.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: x.prompt
            }), w[29] = x.prompt, w[30] = h) : h = w[30], w[31] !== u || w[32] !== p || w[33] !== h ? (f = (0, m.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [u, p, h]
            }), w[31] = u, w[32] = p, w[33] = h, w[34] = f) : f = w[34], w[35] !== x || w[36] !== E || w[37] !== P ? (b = E && (0, m.jsx)(z, {
                content: x,
                onSave: P,
                onClose: () => A(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), T.current?.focus()
                }
            }), w[35] = x, w[36] = E, w[37] = P, w[38] = b) : b = w[38], w[39] !== f || w[40] !== b ? (_ = (0, m.jsxs)(m.Fragment, {
                children: [f, b]
            }), w[39] = f, w[40] = b, w[41] = _) : _ = w[41], _
        }
        var W = a("AuIy"),
            q = a("iqEK"),
            U = a("ccwJ"),
            K = a("tOYk"),
            V = a("Kwur");
        let Q = (0, b.v)(x.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function Y(e, t, a) {
            X(e, t);
            let r = t.assetPointer,
                i = t.messageId;
            if (null == r || null == i) throw Error("Image prompt share source unavailable");
            let n = e.get(Q, t);
            if (null != n.publication) return n.publication;
            let l = n.idempotencyKey ?? crypto.randomUUID();
            e.set(Q, t, {
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
                            d.prompt !== a.prompt && (0, o.a)(e, K.a, {
                                postId: s.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_PROMPT"
                            }), d.title.trim() !== a.title.trim() && (0, o.a)(e, K.a, {
                                postId: s.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_TITLE"
                            })
                        } catch {}
                        return s
                    }
                });
                return X(e, t), e.set(Q, t, e => ({
                    ...e,
                    publication: s
                })), s
            } catch (a) {
                throw a instanceof I.a && J(a) && e.set(Q, t, e => ({
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
            let t, a, r, i, l, s, d, c, u, p, L, R, O, F, M = (0, g.c)(69),
                N = (0, b.y)(x.a),
                B = (0, y.a)(),
                H = (0, b.z)(n.f),
                z = (0, b.z)(n.j);
            M[0] !== H || M[1] !== z ? (t = {
                accountId: H,
                userId: z
            }, M[0] = H, M[1] = z, M[2] = t) : t = M[2];
            let [K] = (0, v.useState)(t), $ = (0, S.h)("1939400492"), Z = (0, S.m)("250422953"), [ee, et] = (0, v.useState)("image");
            M[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {}, M[3] = a) : a = M[3];
            let [ea] = (0, v.useState)(a), er = e.image, ei = er?.item.isAnimated === !0, en = K.accountId === H && K.userId === z, el = null != er && !er.additionalImages?.length && null != H && null != z && en && !$, eo = e.mobileImagePromptShareTreatment;
            M[4] !== el || M[5] !== Z || M[6] !== eo ? (r = el && ("prompt-with-image" === eo || null == eo && Z.get("imagegen_prompt_share_tabs_enabled", !1)), M[4] = el, M[5] = Z, M[6] = eo, M[7] = r) : r = M[7];
            let es = r,
                ed = er?.item.id;
            M[8] !== H || M[9] !== e.serverConversationId || M[10] !== ed || M[11] !== z ? (i = ["image-prompt-share-source", H, z, e.serverConversationId, ed], M[8] = H, M[9] = e.serverConversationId, M[10] = ed, M[11] = z, M[12] = i) : i = M[12], M[13] !== er || M[14] !== e.serverConversationId || M[15] !== N ? (l = async t => {
                let {
                    signal: a
                } = t;
                if (null == er) return null;
                let r = (0, A.c)(e.serverConversationId),
                    i = N.get(E.a, r) ?? r,
                    n = () => {
                        let e = N.get(T.L, i) ?? N.query.getData(j.chatGptConversationQueryById$, r)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, U.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, r] = a, i = a[1].message, n = (0, U.b)(i, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (n?.src == null || "completed" !== n.status || !(0, q.d)(n.src)) return null;
                            let l = (0, W.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == l || (0, W.m)(l)) return null;
                            let o = (0, W.r)(i.content),
                                s = (Array.isArray(o?.parts) ? o.parts : []).map(W.r).find(e => e?.asset_pointer === n.src || (0, W.r)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, W.r)(s?.image_asset_pointer) ?? s,
                                c = (0, W.i)((0, W.r)((0, W.r)(d?.metadata)?.dalle)?.prompt) ?? (0, W.i)((0, W.e)(l)),
                                u = (0, W.i)(i.id);
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
                return null != l ? l : (await (0, k.a)(N, r, a), n())
            }, M[13] = er, M[14] = e.serverConversationId, M[15] = N, M[16] = l) : l = M[16], M[17] !== i || M[18] !== l || M[19] !== es ? (s = {
                enabled: es,
                queryKey: i,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: l
            }, M[17] = i, M[18] = l, M[19] = es, M[20] = s) : s = M[20];
            let {
                data: ec
            } = (0, f.a)(s), eu = ec?.messageId ?? null, ep = ec?.assetPointer ?? null;
            M[21] !== H || M[22] !== e.serverConversationId || M[23] !== eu || M[24] !== ep || M[25] !== z ? (d = {
                accountId: H,
                userId: z,
                conversationId: e.serverConversationId,
                messageId: eu,
                assetPointer: ep
            }, M[21] = H, M[22] = e.serverConversationId, M[23] = eu, M[24] = ep, M[25] = z, M[26] = d) : d = M[26];
            let em = d,
                {
                    editedContent: eg,
                    publication: eh,
                    revision: ef
                } = (0, b.x)(Q, em),
                eb = es && null != ec,
                ev = eb && null == eo && "image_with_prompt" === Z.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                ey = eb && "template" === ee;
            M[27] !== eg || M[28] !== eh?.title || M[29] !== ec ? (c = eg ?? (null == ec ? void 0 : {
                ...ec.content,
                title: eh?.title ?? ec.content.title
            }), M[27] = eg, M[28] = eh?.title, M[29] = ec, M[30] = c) : c = M[30];
            let e_ = c;
            M[31] !== K.accountId || M[32] !== K.userId || M[33] !== N ? (u = function() {
                if (N.get(n.f) !== K.accountId || N.get(n.j) !== K.userId) throw Error("Image prompt share account changed")
            }, M[31] = K.accountId, M[32] = K.userId, M[33] = N, M[34] = u) : u = M[34];
            let ew = u;
            M[35] !== e_ || M[36] !== er || M[37] !== e.source || M[38] !== ew || M[39] !== N || M[40] !== em || M[41] !== ec ? (p = async function(t) {
                let a;
                if (ew(), null == ec || null == e_ || !G(e_)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await Y(N, em, ec.content)
                } catch (e) {
                    if (e instanceof I.a && "prompt_share_not_publishable" === e.errorCode) throw new P.a;
                    throw e
                }
                if (ew(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, o.a)(N, h, {
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
            }, M[35] = e_, M[36] = er, M[37] = e.source, M[38] = ew, M[39] = N, M[40] = em, M[41] = ec, M[42] = p) : p = M[42];
            let ex = p;
            if (M[43] !== ei || M[44] !== ev ? (L = ei ? (0, m.jsx)(_.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt",
                    description: "Short share-format option in the generated GIF sharing dialog. Shares the animated GIF together with its reusable prompt; the other option is GIF only."
                }) : "image_with_prompt" === ev ? (0, m.jsx)(_.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt",
                    description: "Share-format option for sharing the generated image together with its reusable prompt. The other option is Image only."
                }) : (0, m.jsx)(_.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image",
                    description: "Share the reusable prompt together with the generated image"
                }), M[43] = ei, M[44] = ev, M[45] = L) : L = M[45], !en) return null;
            let eS = ey ? "template" : "image";
            return M[46] !== B || M[47] !== ei || M[48] !== ee || M[49] !== L || M[50] !== eb ? (R = eb ? e => (0, m.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, m.jsx)(w.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: ee,
                    onSelect: et,
                    ariaLabel: B.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format",
                        description: "Label for choosing between sharing an image or its prompt template"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: ei ? (0, m.jsx)(_.a, {
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
                        label: L
                    }]
                })
            }) : void 0, M[46] = B, M[47] = ei, M[48] = ee, M[49] = L, M[50] = eb, M[51] = R) : R = M[51], M[52] !== e_ || M[53] !== ex || M[54] !== er?.alt || M[55] !== ew || M[56] !== ef || M[57] !== N || M[58] !== em || M[59] !== ec || M[60] !== ev || M[61] !== ey ? (O = ey && null != e_ ? {
                label: ev,
                revision: ef,
                createLink: ex,
                actionsDisabled: !G(e_),
                preview: (e, t, a) => (0, m.jsx)(D, {
                    content: e_,
                    previewSrc: t,
                    alt: er?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (ew(), null == ec) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== e_.title.trim() || e.prompt !== e_.prompt) && await async function(e, t, a, r) {
                            X(e, t);
                            let i = e.get(Q, t),
                                n = null == i.idempotencyKey ? i.publication : await Y(e, t, a),
                                l = r;
                            if (null != n) {
                                let e = await V.Request.safePatch("/share/post/{post_id}/prompt-share", {
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
                            X(e, t), e.set(Q, t, e => ({
                                ...e,
                                editedContent: l,
                                publication: null == e.publication ? null : {
                                    ...e.publication,
                                    title: l.title
                                },
                                revision: e.revision + 1
                            }))
                        }(N, em, ec.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), ew(), a()
                    }
                })
            } : void 0, M[52] = e_, M[53] = ex, M[54] = er?.alt, M[55] = ew, M[56] = ef, M[57] = N, M[58] = em, M[59] = ec, M[60] = ev, M[61] = ey, M[62] = O) : O = M[62], M[63] !== ea || M[64] !== e || M[65] !== eS || M[66] !== R || M[67] !== O ? (F = (0, m.jsx)(C.a, {
                ...e,
                mobileImageRowScrollPositions: ea,
                imageShareOptions: R,
                imagePromptTemplate: O
            }, eS), M[63] = ea, M[64] = e, M[65] = eS, M[66] = R, M[67] = O, M[68] = F) : F = M[68], F
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
                C = P && null != I && null != j ? (0, c.h)(e.get(s.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                E = e.get(n.e),
                A = "loaded" === E.status && "personal" === E.structure || "loading" === E.status && "personal" === E.structureAtLogin,
                T = null == C ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: C,
                    isMobileBrowser: P,
                    isPersonalAccount: A
                }),
                k = () => e.get(n.f) === I && e.get(n.j) === j,
                L = t => {
                    !t.isWorkspaceOnly && t.shareLinkId !== a && k() && (a = t.shareLinkId, (0, o.a)(e, r.h, {
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
                O = () => (0, l.f)(e, $, {
                    currentNodeId: f.id,
                    image: R,
                    serverConversationId: y,
                    shareSessionId: x,
                    source: _,
                    title: w,
                    mobileImageExperience: T,
                    mobileImagePromptShareTreatment: C?.promptShareTreatment,
                    onImageShareLinkPrepared: null == C ? void 0 : L,
                    trackMobileImageShareLifecycle: P && C?.kind === "native"
                });
            P && C?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, y, R);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void O();
                    if (!k()) return;
                    if (!A) return void O();
                    L(a);
                    let r = await (0, p.b)(e, a, y, x, _);
                    if ("shared" === r || "cancelled" === r) return
                } catch {}
                k() && O()
            }(): O()
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
                                }), C(n, !1))
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
                    }, C = async (e, t) => {
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
                    changeSpeed: e => C(e, !0),
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

        function _(e) {
            let t, a = (0, i.c)(3),
                n = !0 === e["aria-expanded"];
            return a[0] !== e || a[1] !== n ? (t = (0, r.jsx)(m.a, {
                ...e,
                triggerPopupOpen: n
            }), a[0] = e, a[1] = n, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, m, w, x, S, I, j = (0, i.c)(53),
                    {
                        downloadImageCount: P,
                        floatingToolbarVariant: C,
                        moreActions: E,
                        isAnimated: A,
                        isImageActionsDisabled: T,
                        isUnifiedViewerEnabled: k,
                        onDownload: L,
                        onDownloadAll: R,
                        onDownloadMenuOpen: O,
                        onShare: F,
                        onShareAll: M,
                        onShareMenuOpen: N,
                        saveAction: G,
                        shareImageCount: B,
                        showShareText: H
                    } = e,
                    z = void 0 !== A && A,
                    D = void 0 !== k && k,
                    W = void 0 !== H && H,
                    q = (0, l.a)(),
                    [U, K] = (0, n.useState)(!1),
                    V = "toolbar";
                null != C && (V = "imageTools" === C ? "imageToolbar" : "composerSm"), j[0] !== V || j[1] !== C || j[2] !== q || j[3] !== T || j[4] !== D || j[5] !== F || j[6] !== M || j[7] !== W ? (t = D ? (0, r.jsxs)(f.c, {
                    "aria-label": q.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }),
                    disabled: T,
                    uniform: !W,
                    onClick: null == M ? F : void 0,
                    children: [(0, r.jsx)(p.b, {
                        icon: {
                            16: u.L,
                            20: u.M
                        }
                    }), W ? (0, r.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }) : null]
                }) : (0, r.jsx)(s.a, {
                    color: null == C ? "primary" : "ghostActive",
                    disabled: T,
                    size: V,
                    onClick: null == M ? F : void 0,
                    children: (0, r.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    })
                }), j[0] = V, j[1] = C, j[2] = q, j[3] = T, j[4] = D, j[5] = F, j[6] = M, j[7] = W, j[8] = t) : t = j[8];
                let Q = t;
                if (null != F && null != M) {
                    let e;
                    j[9] !== z || j[10] !== T || j[11] !== F || j[12] !== M || j[13] !== N || j[14] !== Q || j[15] !== B ? (e = (0, r.jsx)(b.a, {
                        disabled: T,
                        imageCount: B,
                        isAnimated: z,
                        onOpen: N,
                        onShare: F,
                        onShareAll: M,
                        triggerButton: Q
                    }), j[9] = z, j[10] = T, j[11] = F, j[12] = M, j[13] = N, j[14] = Q, j[15] = B, j[16] = e) : e = j[16], Q = e
                }
                if (null != C) {
                    let e;
                    j[17] !== C || j[18] !== Q ? (e = (0, r.jsx)(h.a, {
                        variant: C,
                        children: Q
                    }), j[17] = C, j[18] = Q, j[19] = e) : e = j[19], Q = e
                }
                j[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    K(!0), await e().finally(() => {
                        K(!1)
                    })
                }, j[20] = a) : a = j[20];
                let Y = a;
                j[21] !== V || j[22] !== P || j[23] !== C || j[24] !== q || j[25] !== z || j[26] !== U || j[27] !== T || j[28] !== D || j[29] !== L || j[30] !== R || j[31] !== O || j[32] !== G ? (m = null != R && null != L ? (0, r.jsxs)(d.a, {
                    align: "end",
                    disabled: T || U,
                    onOpenChange: e => {
                        e && O?.()
                    },
                    triggerButton: (0, r.jsx)(_, {
                        cloneCustomTrigger: !0,
                        tooltipContent: (0, r.jsx)(o.a, {
                            ...(0, g.a)({
                                isAnimated: z
                            }).downloadLabel
                        }),
                        children: D ? (0, r.jsx)(f.c, {
                            "aria-label": q.formatMessage((0, g.a)({
                                isAnimated: z
                            }).downloadLabel),
                            disabled: T || U,
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
                        }) : (0, r.jsx)(s.a, {
                            "aria-label": q.formatMessage((0, g.a)({
                                isAnimated: z
                            }).downloadLabel),
                            color: null == C ? "ghost" : "ghostActive",
                            disabled: T || U,
                            loading: U,
                            size: V,
                            uniform: !0,
                            children: "compact" === C ? (0, r.jsx)(c.a, {
                                asset: v.a
                            }) : (0, r.jsx)(u.r, {})
                        })
                    }),
                    children: [(0, r.jsx)(d.c.Item, {
                        onSelect: () => void Y(L),
                        children: (0, r.jsx)(o.a, {
                            ...(0, g.a)({
                                isAnimated: z
                            }).downloadMenuLabel
                        })
                    }), (0, r.jsx)(d.c.Item, {
                        onSelect: () => void Y(R),
                        children: (0, r.jsx)(o.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            description: "Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.",
                            values: {
                                count: P
                            }
                        })
                    })]
                }) : G, j[21] = V, j[22] = P, j[23] = C, j[24] = q, j[25] = z, j[26] = U, j[27] = T, j[28] = D, j[29] = L, j[30] = R, j[31] = O, j[32] = G, j[33] = m) : m = j[33];
                let X = m;
                if (null != C && null != R && null != L) {
                    let e;
                    j[34] !== X || j[35] !== C ? (e = (0, r.jsx)(h.a, {
                        variant: C,
                        children: X
                    }), j[34] = X, j[35] = C, j[36] = e) : e = j[36], X = e
                }
                let J = null == F ? null : Q;
                j[37] !== X || j[38] !== J ? (w = (0, r.jsxs)(r.Fragment, {
                    children: [X, J]
                }), j[37] = X, j[38] = J, j[39] = w) : w = j[39];
                let $ = w;
                j[40] !== C || j[41] !== E ? (x = null == E || null == C ? E : (0, r.jsx)(h.a, {
                    variant: C,
                    children: E
                }), j[40] = C, j[41] = E, j[42] = x) : x = j[42];
                let Z = x,
                    ee = null != F || null != X;
                if (!D || W) {
                    let e;
                    return j[43] !== $ || j[44] !== Z ? (e = (0, r.jsxs)(r.Fragment, {
                        children: [$, Z]
                    }), j[43] = $, j[44] = Z, j[45] = e) : e = j[45], e
                }
                return j[46] !== ee || j[47] !== q || j[48] !== $ ? (S = ee ? (0, r.jsx)(f.i, {
                    label: q.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions",
                        description: "Accessible label for the image viewer's Share and Download actions group"
                    }),
                    children: $
                }) : null, j[46] = ee, j[47] = q, j[48] = $, j[49] = S) : S = j[49], j[50] !== S || j[51] !== Z ? (I = (0, r.jsxs)(r.Fragment, {
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
                }), f[3] = I, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (p = (0, r.jsx)(n.a, {
                    ...u.shareSelectionLabel
                }), f[5] = u.shareSelectionLabel, f[6] = p) : p = f[6], f[7] !== w || f[8] !== p ? (m = (0, r.jsx)(l.c.Item, {
                    leftIcon: a,
                    onSelect: w,
                    children: p
                }), f[7] = w, f[8] = p, f[9] = m) : m = f[9], f[10] !== v || f[11] !== x ? (g = null == x ? null : (0, r.jsx)(l.c.Item, {
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
                }), f[10] = v, f[11] = x, f[12] = g) : g = f[12], f[13] !== b || f[14] !== t || f[15] !== m || f[16] !== g || f[17] !== S ? (h = (0, r.jsxs)(l.a, {
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