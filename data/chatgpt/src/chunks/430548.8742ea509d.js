export const __rspack_esm_id = 430548;
export const __rspack_esm_ids = [430548];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            n = a("Bbed"),
            i = a("N55g");
        let s = (0, n.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(753405), a.e(585419), a.e(644241), a.e(877700), a.e(636463), a.e(736270), a.e(937528), a.e(546037), a.e(669998), a.e(477144), a.e(120889), a.e(945902), a.e(874459), a.e(445355), a.e(762474), a.e(851888), a.e(909395), a.e(587936), a.e(168420), a.e(88870), a.e(749876), a.e(145701), a.e(899923), a.e(24689), a.e(729227), a.e(674763), a.e(558509), a.e(864768), a.e(388573), a.e(278893)]).then(a.bind(a, "QHj3"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, r.jsx)(i.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: s
        })
    }),
    KO1w: (function(e, t, a) {
        var r = a("ABep"),
            n = a("Bbed"),
            i = a("XAx9");
        let s = (0, n.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(753405), a.e(585419), a.e(673131), a.e(321957), a.e(644241), a.e(877700), a.e(636463), a.e(546037), a.e(669998), a.e(477144), a.e(492915), a.e(310373), a.e(680021), a.e(469804), a.e(92135), a.e(507449), a.e(664836), a.e(550464), a.e(788364), a.e(945902), a.e(874459), a.e(445355), a.e(762474), a.e(851888), a.e(909395), a.e(587936), a.e(168420), a.e(88870), a.e(749876), a.e(145701), a.e(899923), a.e(24689), a.e(729227), a.e(674763), a.e(98437), a.e(864768), a.e(641521)]).then(a.bind(a, "WCGU"))).DilResponse, {
            errorFallback: (0, r.jsx)(i.b, {
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
            b: () => m,
            c: () => u
        });
        var r = a("REzJ"),
            n = a("zd8w"),
            i = a("PFjh"),
            s = a("hJIv"),
            l = a("XnlH"),
            o = a("fVOX"),
            d = a("OWtl");
        a("WFY2");
        let c = (0, l.u)(d.a, e => {
            let {
                scope: t
            } = e, a = 0, n = 0, s = (e, a, r) => {
                try {
                    (0, i.c)(t).count("default", "chatgpt.model_written_dil.v2.startup.report_suppressed", {
                        result: e,
                        report_cutoff: a,
                        reason: r,
                        web_frontend: "codex_webview"
                    })
                } catch {}
            }, l = (e, t) => a < 10 || (s(e, t, "page_report_limit"), !1);
            return {
                canPublish: l,
                recordSuppression: s,
                publish: (e, i, d) => {
                    if (!l(i.result, i.report_cutoff)) return !1;
                    try {
                        let l, c = (0, r.h)(i);
                        if (c > r.b ? l = "report_byte_limit" : n + c > 262144 && (l = "page_byte_limit"), null != l) return s(i.result, i.report_cutoff, l), !1;
                        return a++, n += c, t.get(o.a).log({
                            message: e,
                            status: d ? "info" : "error",
                            context: i
                        }), !0
                    } catch {
                        return s(i.result, i.report_cutoff, "observer_error"), !1
                    }
                }
            }
        });

        function u(e) {
            let t, a = (t = (0, i.c)(e), {
                    count: (e, a) => t.count("default", e, {
                        ...a,
                        web_frontend: "codex_webview"
                    }),
                    hist: (e, a, r) => t.hist("default", e, {
                        ...a,
                        web_frontend: "codex_webview"
                    }, r)
                }),
                n = e.get(s.a),
                l = e.get(c),
                o = (0, r.e)(a, {
                    enabled: () => n,
                    reporting: l
                });
            return {
                metrics: a,
                diagnosticsEnabled: n,
                render: (0, r.d)({
                    metrics: a,
                    diagnosticsExpected: n,
                    startupReporting: n ? l : void 0,
                    presentation: o
                }),
                presentation: o
            }
        }
        let m = (0, n.createContext)(null),
            g = (0, n.createContext)(null)
    }),
    XAx9: (function(e, t, a) {
        var r = a("ABep"),
            n = a("QosV"),
            i = a("XnlH"),
            s = a("zd8w"),
            l = a("UIU6"),
            o = a("OWtl"),
            d = a("N55g"),
            c = a("greq");
        let u = new Set;

        function m() {
            for (let e of u) e.presentation.onPageHide()
        }

        function g(e) {
            let t, a, d, g, h, f, _, b, v, y, w, x = (0, n.c)(30),
                {
                    children: S,
                    contentReferenceIndex: I,
                    isPresented: E,
                    isPreparing: A,
                    isStreaming: T,
                    sourceMessageId: P
                } = e,
                C = void 0 === E || E,
                j = (0, i.y)(o.a);
            x[0] !== j ? (t = () => (0, c.c)(j), x[0] = j, x[1] = t) : t = x[1];
            let [M] = (0, s.useState)(t), G = void 0 !== A && A ? null : M;
            x[2] !== C || x[3] !== T || x[4] !== G ? (a = () => {
                G && (G.presentation.updateStreaming(T), G.presentation.setPresented(C))
            }, d = [G, C, T], x[2] = C, x[3] = T, x[4] = G, x[5] = a, x[6] = d) : (a = x[5], d = x[6]), (0, s.useLayoutEffect)(a, d), x[7] !== T || x[8] !== G?.presentation ? (g = () => G?.presentation.attach(T), x[7] = T, x[8] = G?.presentation, x[9] = g) : g = x[9];
            let R = (0, s.useEffectEvent)(g);
            x[10] !== R || x[11] !== G ? (h = () => {
                if (!G) return;
                let e = R();
                return u.add(G), 1 === u.size && window.addEventListener("pagehide", m, !0), () => {
                    u.delete(G), 0 === u.size && window.removeEventListener("pagehide", m, !0), e?.()
                }
            }, x[10] = R, x[11] = G, x[12] = h) : h = x[12], x[13] !== G ? (f = [G], x[13] = G, x[14] = f) : f = x[14], (0, s.useEffect)(h, f);
            let O = null == I ? void 0 : "contents";
            x[15] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, r.jsx)(p, {}), x[15] = _) : _ = x[15];
            let L = G?.render.onHostRenderFailure;
            return x[16] !== S || x[17] !== L ? (b = (0, r.jsx)(l.a, {
                name: "ModelWrittenDILV2Renderer",
                fallback: _,
                onError: L,
                children: S
            }), x[16] = S, x[17] = L, x[18] = b) : b = x[18], x[19] !== I || x[20] !== P || x[21] !== b || x[22] !== O ? (v = (0, r.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": P,
                "data-chatgpt-copy-reference": I,
                "data-markdown-copy": O,
                children: b
            }), x[19] = I, x[20] = P, x[21] = b, x[22] = O, x[23] = v) : v = x[23], x[24] !== G || x[25] !== v ? (y = (0, r.jsx)(c.b.Provider, {
                value: G,
                children: v
            }), x[24] = G, x[25] = v, x[26] = y) : y = x[26], x[27] !== M.render.onPreparationEnd || x[28] !== y ? (w = (0, r.jsx)(c.a.Provider, {
                value: M.render.onPreparationEnd,
                children: y
            }), x[27] = M.render.onPreparationEnd, x[28] = y, x[29] = w) : w = x[29], w
        }

        function p(e) {
            let t, a, i, l = (0, n.c)(12),
                {
                    stage: o,
                    errorClass: u,
                    initialization: m
                } = e,
                g = void 0 !== m && m,
                p = (0, s.useContext)(c.b);
            return l[0] !== g || l[1] !== p?.presentation || l[2] !== p?.render || l[3] !== o ? (t = () => {
                null != o && p?.render.onTerminalFailure(o), p?.render.onFallbackResult("shown", o), p?.presentation.reportRootFailure(g)
            }, l[0] = g, l[1] = p?.presentation, l[2] = p?.render, l[3] = o, l[4] = t) : t = l[4], l[5] !== g || l[6] !== p || l[7] !== o ? (a = [p, o, g], l[5] = g, l[6] = p, l[7] = o, l[8] = a) : a = l[8], (0, s.useEffect)(t, a), l[9] !== u || l[10] !== o ? (i = (0, r.jsx)(d.a, {
                stage: o,
                errorClass: u
            }), l[9] = u, l[10] = o, l[11] = i) : i = l[11], i
        }
        a.d(t, {
            a: () => g,
            b: () => p
        })
    }),
    EvMC: (function(e, t, a) {
        a.d(t, {
            a: () => $,
            b: () => Z
        });
        var r = a("hKYX"),
            n = a("BOYb"),
            i = a("Cslg"),
            s = a("X6Vn"),
            l = a("yGJW"),
            o = a("O666"),
            d = a("LulU"),
            c = a("cQW3"),
            u = a("Tywu"),
            m = a("ABep"),
            g = a("QosV"),
            p = a("ebYr"),
            h = a("T0Rc"),
            f = a("XnlH"),
            _ = a("zd8w"),
            b = a("Wf1j"),
            v = a("oyxz"),
            y = a("EShr"),
            w = a("OWtl"),
            x = a("hZax"),
            S = a("eShZ"),
            I = a("lBzi"),
            E = a("r9i9"),
            A = a("vlt6"),
            T = a("aFoA"),
            P = a("OOaz"),
            C = a("MrGp"),
            j = a("jfiJ"),
            M = a("ygO2"),
            G = a("bf6R"),
            R = a("zKCW"),
            O = a("JNtf"),
            L = a("mUDD");

        function F(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var N = a("zLIa");

        function k(e) {
            let t, a, r, n, i, s, l, o = (0, g.c)(19),
                {
                    content: d,
                    onChange: c,
                    disabled: u,
                    autoFocus: p
                } = e,
                h = void 0 !== u && u,
                f = void 0 !== p && p;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, m.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-title",
                children: (0, m.jsx)(v.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title",
                    description: "Label for the shared image prompt template title"
                })
            }), o[0] = t) : t = o[0], o[1] !== d || o[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), o[1] = d, o[2] = c, o[3] = a) : a = o[3], o[4] !== f || o[5] !== d.title || o[6] !== a ? (r = (0, m.jsxs)(L.f, {
                children: [t, (0, m.jsx)(N.c, {
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
            }), o[4] = f, o[5] = d.title, o[6] = a, o[7] = r) : r = o[7], o[8] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, m.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, m.jsx)(v.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt",
                    description: "Label for the reusable image generation prompt"
                })
            }), o[8] = n) : n = o[8], o[9] !== d || o[10] !== c ? (i = e => c({
                ...d,
                prompt: e.target.value
            }), o[9] = d, o[10] = c, o[11] = i) : i = o[11], o[12] !== d.prompt || o[13] !== i ? (s = (0, m.jsxs)(L.f, {
                children: [n, (0, m.jsx)(N.c, {
                    id: "image-prompt-text",
                    name: "prompt",
                    variant: "compact",
                    required: !0,
                    rows: 2,
                    maxLength: 2e5,
                    value: d.prompt,
                    onChange: i
                })]
            }), o[12] = d.prompt, o[13] = i, o[14] = s) : s = o[14], o[15] !== h || o[16] !== r || o[17] !== s ? (l = (0, m.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [r, s]
            }), o[15] = h, o[16] = r, o[17] = s, o[18] = l) : l = o[18], l
        }

        function H(e) {
            let t, a, r, n, i, s, l, o, d, c, u, p, h, f, y, w, x, I, E, A, T = (0, g.c)(54),
                {
                    content: P,
                    onSave: C,
                    onClose: j,
                    onCloseAutoFocus: N
                } = e,
                H = (0, b.a)(),
                [q, z] = (0, _.useState)(P),
                [B, D] = (0, _.useState)(!1),
                [W, Y] = (0, _.useState)(null);
            T[0] !== q || T[1] !== B || T[2] !== j || T[3] !== C ? (t = async function() {
                if (!B && F(q)) {
                    D(!0), Y(null);
                    try {
                        await C(q), j()
                    } catch (e) {
                        Y(e instanceof S.a && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    D(!1)
                }
            }, T[0] = q, T[1] = B, T[2] = j, T[3] = C, T[4] = t) : t = T[4];
            let X = t,
                K = !B;
            return T[5] !== N ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: N
            }, T[5] = N, T[6] = a) : a = T[6], T[7] !== B || T[8] !== j ? (r = e => {
                e || B || j()
            }, T[7] = B, T[8] = j, T[9] = r) : r = T[9], T[10] !== X ? (n = e => {
                e.preventDefault(), e.stopPropagation(), X()
            }, T[10] = X, T[11] = n) : n = T[11], T[12] !== H ? (i = H.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back",
                description: "Return from the image prompt editor to the sharing preview without saving the draft"
            }), T[12] = H, T[13] = i) : i = T[13], T[14] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, m.jsx)(G.ac, {}), T[14] = s) : s = T[14], T[15] !== B || T[16] !== j || T[17] !== i ? (l = (0, m.jsx)(M.a, {
                color: "ghost",
                size: "icon",
                disabled: B,
                "aria-label": i,
                onClick: j,
                children: s
            }), T[15] = B, T[16] = j, T[17] = i, T[18] = l) : l = T[18], T[19] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, m.jsx)(L.d, {
                title: (0, m.jsx)(O.e, {
                    children: (0, m.jsx)(v.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt",
                        description: "Title of the dialog for editing the image's shared title and prompt"
                    })
                })
            }), T[19] = o) : o = T[19], T[20] !== l ? (d = (0, m.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [l, o]
            }), T[20] = l, T[21] = d) : d = T[21], T[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                z(e), Y(null)
            }, T[22] = c) : c = T[22], T[23] !== q || T[24] !== B ? (u = (0, m.jsx)(L.e, {
                spacing: "large",
                children: (0, m.jsx)(k, {
                    content: q,
                    disabled: B,
                    autoFocus: !0,
                    onChange: c
                })
            }), T[23] = q, T[24] = B, T[25] = u) : u = T[25], T[26] !== W ? (p = null != W && (0, m.jsx)(L.e, {
                children: (0, m.jsx)(R.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === W ? (0, m.jsx)(v.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again.",
                        description: "Error when moderation rejects an edit to a shared image prompt"
                    }) : (0, m.jsx)(v.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again.",
                        description: "Error when saving an image prompt fails; the draft remains in the editor for retry"
                    })
                })
            }), T[26] = W, T[27] = p) : p = T[27], T[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, m.jsx)(v.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel",
                description: "Discard edits and return to the image prompt sharing preview"
            }), T[28] = h) : h = T[28], T[29] !== B || T[30] !== j ? (f = (0, m.jsx)(M.a, {
                color: "outline",
                disabled: B,
                onClick: j,
                children: h
            }), T[29] = B, T[30] = j, T[31] = f) : f = T[31], T[32] !== q || T[33] !== B ? (y = !F(q) || B, T[32] = q, T[33] = B, T[34] = y) : y = T[34], T[35] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, m.jsx)(v.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save",
                description: "Apply the edited title and prompt and return to the image sharing preview"
            }), T[35] = w) : w = T[35], T[36] !== B || T[37] !== y ? (x = (0, m.jsx)(M.a, {
                type: "submit",
                color: "primary",
                loading: B,
                disabled: y,
                children: w
            }), T[36] = B, T[37] = y, T[38] = x) : x = T[38], T[39] !== f || T[40] !== x ? (I = (0, m.jsxs)(L.c, {
                expandSingleButton: !1,
                children: [f, x]
            }), T[39] = f, T[40] = x, T[41] = I) : I = T[41], T[42] !== d || T[43] !== u || T[44] !== p || T[45] !== I || T[46] !== n ? (E = (0, m.jsxs)(L.b, {
                as: "form",
                size: "viewport",
                onSubmit: n,
                children: [d, u, p, I]
            }), T[42] = d, T[43] = u, T[44] = p, T[45] = I, T[46] = n, T[47] = E) : E = T[47], T[48] !== B || T[49] !== K || T[50] !== E || T[51] !== a || T[52] !== r ? (A = (0, m.jsx)(O.b, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: K,
                shouldIgnoreClickOutside: B,
                contentProps: a,
                onOpenChange: r,
                children: E
            }), T[48] = B, T[49] = K, T[50] = E, T[51] = a, T[52] = r, T[53] = A) : A = T[53], A
        }

        function q(e) {
            let t, a, r, n, i, s, l, o, d, c, u, p = (0, g.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: v,
                    disabled: y,
                    onSave: w
                } = e,
                x = (0, b.a)(),
                [S, I] = (0, _.useState)(!1),
                E = (0, _.useRef)(null);
            return p[0] !== v || p[1] !== f ? (t = null != f && (0, m.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: v,
                src: f,
                referrerPolicy: "no-referrer"
            }), p[0] = v, p[1] = f, p[2] = t) : t = p[2], p[3] !== x ? (a = x.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt",
                description: "Accessible label for the pencil button that opens the shared image title and prompt editor"
            }), p[3] = x, p[4] = a) : a = p[4], p[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => I(!0), n = (0, m.jsx)(G.Nf, {}), p[5] = r, p[6] = n) : (r = p[5], n = p[6]), p[7] !== y || p[8] !== a ? (i = (0, m.jsx)(M.a, {
                ref: E,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: y,
                "aria-label": a,
                onClick: r,
                children: n
            }), p[7] = y, p[8] = a, p[9] = i) : i = p[9], p[10] !== t || p[11] !== i ? (s = (0, m.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, i]
            }), p[10] = t, p[11] = i, p[12] = s) : s = p[12], p[13] !== h.title ? (l = (0, m.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: h.title
            }), p[13] = h.title, p[14] = l) : l = p[14], p[15] !== h.prompt ? (o = (0, m.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: h.prompt
            }), p[15] = h.prompt, p[16] = o) : o = p[16], p[17] !== s || p[18] !== l || p[19] !== o ? (d = (0, m.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [s, l, o]
            }), p[17] = s, p[18] = l, p[19] = o, p[20] = d) : d = p[20], p[21] !== h || p[22] !== S || p[23] !== w ? (c = S && (0, m.jsx)(H, {
                content: h,
                onSave: w,
                onClose: () => I(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), E.current?.focus()
                }
            }), p[21] = h, p[22] = S, p[23] = w, p[24] = c) : c = p[24], p[25] !== c || p[26] !== d ? (u = (0, m.jsxs)(m.Fragment, {
                children: [d, c]
            }), p[25] = c, p[26] = d, p[27] = u) : u = p[27], u
        }
        var z = a("AuIy"),
            B = a("Wc42"),
            D = a("iqEK"),
            W = a("ccwJ"),
            Y = a("Kwur");
        let X = (0, f.v)(w.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function K(e, t, a) {
            V(e, t);
            let r = t.assetPointer,
                n = t.messageId;
            if (null == r || null == n) throw Error("Image prompt share source unavailable");
            let i = e.get(X, t);
            if (null != i.publication) return i.publication;
            let s = i.idempotencyKey ?? crypto.randomUUID();
            e.set(X, t, {
                ...i,
                idempotencyKey: s
            });
            try {
                let l = await e.queryClient.fetchQuery({
                    queryKey: ["image-prompt-share-publication", t, s],
                    staleTime: 1 / 0,
                    gcTime: 1 / 0,
                    retry: !1,
                    queryFn: () => Y.Request.safePost("/share/prompt-share", {
                        isExpectedError: Q,
                        requestBody: {
                            idempotency_key: s,
                            conversation_id: t.conversationId,
                            message_id: n,
                            output_asset_pointer: r,
                            post_text: a.title,
                            published_content: i.editedContent ?? void 0
                        }
                    })
                });
                return V(e, t), e.set(X, t, e => ({
                    ...e,
                    publication: l
                })), l
            } catch (a) {
                throw a instanceof S.a && Q(a) && e.set(X, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }
        async function U(e, t, a, r) {
            V(e, t);
            let n = e.get(X, t),
                i = null == n.idempotencyKey ? n.publication : await K(e, t, a),
                s = r;
            if (null != i) {
                let e = await Y.Request.safePatch("/share/post/{post_id}/prompt-share", {
                    isExpectedError: Q,
                    parameters: {
                        path: {
                            post_id: i.post_id
                        }
                    },
                    requestBody: r
                });
                s = {
                    title: e.title,
                    prompt: e.prompt
                }
            }
            V(e, t), e.set(X, t, e => ({
                ...e,
                editedContent: s,
                publication: null == e.publication ? null : {
                    ...e.publication,
                    title: s.title
                },
                revision: e.revision + 1
            }))
        }

        function V(e, t) {
            if (null == t.accountId || null == t.userId || e.get(i.e) !== t.accountId || e.get(i.i) !== t.userId) throw Error("Image prompt share account changed")
        }

        function Q(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function J(e) {
            let t, a, r, n, s, o, d, c, u, M, G, R, O, L = (0, g.c)(65),
                N = (0, f.y)(w.a),
                k = (0, b.a)(),
                H = (0, f.z)(i.e),
                Y = (0, f.z)(i.i);
            L[0] !== H || L[1] !== Y ? (t = {
                accountId: H,
                userId: Y
            }, L[0] = H, L[1] = Y, L[2] = t) : t = L[2];
            let [V] = (0, _.useState)(t), Q = (0, x.h)("2496586795"), J = (0, x.h)("1939400492"), $ = (0, x.m)("250422953"), [Z, ee] = (0, _.useState)("image"), et = e.image, ea = et?.item.isAnimated === !0, er = V.accountId === H && V.userId === Y, en = null != et && !et.additionalImages?.length && null != H && null != Y && er && Q && !J;
            L[3] !== en || L[4] !== $ ? (a = en && $.get("imagegen_prompt_share_tabs_enabled", !1), L[3] = en, L[4] = $, L[5] = a) : a = L[5];
            let ei = a,
                es = et?.item.id;
            L[6] !== H || L[7] !== e.serverConversationId || L[8] !== es || L[9] !== Y ? (r = ["image-prompt-share-source", H, Y, e.serverConversationId, es], L[6] = H, L[7] = e.serverConversationId, L[8] = es, L[9] = Y, L[10] = r) : r = L[10], L[11] !== et || L[12] !== e.serverConversationId || L[13] !== N ? (n = async t => {
                let {
                    signal: a
                } = t;
                if (null == et) return null;
                let r = (0, P.c)(e.serverConversationId),
                    n = N.get(T.a, r) ?? r,
                    i = () => {
                        let e = N.get(C.K, n) ?? N.query.getData(I.chatGptConversationQueryById$, r)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, W.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, r] = a, n = a[1].message, i = (0, W.b)(n, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (i?.src == null || "completed" !== i.status || !(0, D.d)(i.src)) return null;
                            let s = (0, z.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == s || (0, z.k)(s)) return null;
                            let l = (0, z.o)(n.content),
                                o = (Array.isArray(l?.parts) ? l.parts : []).map(z.o).find(e => e?.asset_pointer === i.src || (0, z.o)(e?.image_asset_pointer)?.asset_pointer === i.src),
                                d = (0, z.o)(o?.image_asset_pointer) ?? o,
                                c = (0, B.a)((0, z.o)((0, z.o)(d?.metadata)?.dalle)?.prompt) ?? (0, B.a)((0, z.d)(s)),
                                u = (0, B.a)(n.id);
                            return null == c || null == u ? null : {
                                assetPointer: i.src,
                                messageId: u,
                                content: {
                                    title: Array.from(i.chatGptDisplayTitle?.trim() || c).slice(0, 200).join(""),
                                    prompt: c
                                }
                            }
                        }({
                            mapping: e
                        }, et.item)
                    },
                    s = i();
                return null != s ? s : (await (0, j.a)(N, r, a), i())
            }, L[11] = et, L[12] = e.serverConversationId, L[13] = N, L[14] = n) : n = L[14], L[15] !== r || L[16] !== n || L[17] !== ei ? (s = {
                enabled: ei,
                queryKey: r,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: n
            }, L[15] = r, L[16] = n, L[17] = ei, L[18] = s) : s = L[18];
            let {
                data: el
            } = (0, h.a)(s), eo = el?.messageId ?? null, ed = el?.assetPointer ?? null;
            L[19] !== H || L[20] !== e.serverConversationId || L[21] !== eo || L[22] !== ed || L[23] !== Y ? (o = {
                accountId: H,
                userId: Y,
                conversationId: e.serverConversationId,
                messageId: eo,
                assetPointer: ed
            }, L[19] = H, L[20] = e.serverConversationId, L[21] = eo, L[22] = ed, L[23] = Y, L[24] = o) : o = L[24];
            let ec = o,
                {
                    editedContent: eu,
                    publication: em
                } = (0, f.x)(X, ec),
                eg = ei && null != el,
                ep = eg && "image_with_prompt" === $.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                eh = eg && "template" === Z;
            L[25] !== eu || L[26] !== em?.title || L[27] !== el ? (d = eu ?? (null == el ? void 0 : {
                ...el.content,
                title: em?.title ?? el.content.title
            }), L[25] = eu, L[26] = em?.title, L[27] = el, L[28] = d) : d = L[28];
            let ef = d;
            L[29] !== V.accountId || L[30] !== V.userId || L[31] !== N ? (c = function() {
                if (N.get(i.e) !== V.accountId || N.get(i.i) !== V.userId) throw Error("Image prompt share account changed")
            }, L[29] = V.accountId, L[30] = V.userId, L[31] = N, L[32] = c) : c = L[32];
            let e_ = c;
            L[33] !== ef || L[34] !== et?.item || L[35] !== e.source || L[36] !== e_ || L[37] !== N || L[38] !== ec || L[39] !== el ? (u = async function(t) {
                let a;
                if (e_(), null == el || null == ef || !F(ef)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await K(N, ec, el.content)
                } catch (e) {
                    if (e instanceof S.a && "prompt_share_not_publishable" === e.errorCode) throw new E.a;
                    throw e
                }
                if (e_(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, l.a)(N, p.a, {
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
            }, L[33] = ef, L[34] = et?.item, L[35] = e.source, L[36] = e_, L[37] = N, L[38] = ec, L[39] = el, L[40] = u) : u = L[40];
            let eb = u;
            if (L[41] !== ea || L[42] !== ep ? (M = ea ? (0, m.jsx)(v.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt",
                    description: "Short share-format option in the generated GIF sharing dialog. Shares the animated GIF together with its reusable prompt; the other option is GIF only."
                }) : "image_with_prompt" === ep ? (0, m.jsx)(v.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt",
                    description: "Share-format option for sharing the generated image together with its reusable prompt. The other option is Image only."
                }) : (0, m.jsx)(v.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image",
                    description: "Share the reusable prompt together with the generated image"
                }), L[41] = ea, L[42] = ep, L[43] = M) : M = L[43], !er) return null;
            let ev = eh ? "template" : "image";
            return L[44] !== k || L[45] !== ea || L[46] !== Z || L[47] !== M || L[48] !== eg ? (G = eg ? e => (0, m.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, m.jsx)(y.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: Z,
                    onSelect: ee,
                    ariaLabel: k.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format",
                        description: "Label for choosing between sharing an image or its prompt template"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: ea ? (0, m.jsx)(v.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only",
                            description: "Short share-format option in the generated GIF sharing dialog. Shares only the animated GIF; the other option shares the GIF with its reusable prompt."
                        }) : (0, m.jsx)(v.a, {
                            id: "imagePromptShare.imageOnly",
                            defaultMessage: "Image only",
                            description: "Share only the generated image"
                        })
                    }, {
                        id: "template",
                        disabled: e,
                        label: M
                    }]
                })
            }) : void 0, L[44] = k, L[45] = ea, L[46] = Z, L[47] = M, L[48] = eg, L[49] = G) : G = L[49], L[50] !== ef || L[51] !== eb || L[52] !== et?.alt || L[53] !== e_ || L[54] !== N || L[55] !== ec || L[56] !== el || L[57] !== ep || L[58] !== eh ? (R = eh && null != ef ? {
                label: ep,
                createLink: eb,
                actionsDisabled: !F(ef),
                preview: (e, t, a) => (0, m.jsx)(q, {
                    content: ef,
                    previewSrc: t,
                    alt: et?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (e_(), null == el) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== ef.title.trim() || e.prompt !== ef.prompt) && await U(N, ec, el.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), e_(), a()
                    }
                })
            } : void 0, L[50] = ef, L[51] = eb, L[52] = et?.alt, L[53] = e_, L[54] = N, L[55] = ec, L[56] = el, L[57] = ep, L[58] = eh, L[59] = R) : R = L[59], L[60] !== e || L[61] !== ev || L[62] !== G || L[63] !== R ? (O = (0, m.jsx)(A.a, {
                ...e,
                imageShareOptions: G,
                imagePromptTemplate: R
            }, ev), L[60] = e, L[61] = ev, L[62] = G, L[63] = R, L[64] = O) : O = L[64], O
        }

        function $(e, t) {
            let {
                additionalImages: a,
                alt: d,
                image: m,
                isDirectLightboxShare: g,
                previewSrc: p,
                serverConversationId: h,
                source: f = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                title: _
            } = t, b = crypto.randomUUID();
            (0, l.a)(e, r.h, {
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED",
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                conversationId: h,
                shareSessionId: b,
                source: f
            });
            let v = e.get(i.e),
                y = e.get(i.i),
                w = (0, n.d)(),
                x = w && null != v && null != y ? e.get(o.a, "2001123255")?.get("mweb_image_share_sheet_variant", "new_custom") ?? "new_custom" : "new_custom",
                S = e.get(i.d),
                I = "loaded" === S.status && "personal" === S.structure || "loading" === S.status && "personal" === S.structureAtLogin,
                E = {
                    additionalImages: a,
                    alt: d,
                    isDirectLightboxShare: g,
                    item: m,
                    previewSrc: p
                },
                A = () => (0, s.f)(e, J, {
                    currentNodeId: m.id,
                    image: E,
                    serverConversationId: h,
                    shareSessionId: b,
                    source: f,
                    title: _,
                    mobileImageSheet: w && ("new_custom" === x || "native_with_fallback" === x && "function" == typeof navigator.share && I),
                    trackMobileImageShareLifecycle: w && "native_with_fallback" === x
                });
            async function T() {
                let t = () => e.get(i.e) === v && e.get(i.i) === y,
                    a = (0, c.a)(e, h, E);
                try {
                    let r = e.queryClient.getQueryData(a.queryKey);
                    if (null == r) return void A();
                    if (!t()) return;
                    if (!I) return void A();
                    let n = await (0, u.b)(e, r, h, b, f);
                    if ("shared" === n) return
                } catch {}
                t() && A()
            }
            w && "native_with_fallback" === x && "function" == typeof navigator.share ? T() : A()
        }
        async function Z(e, t) {
            if (!t.src?.startsWith("data:image/gif")) return t;
            let {
                uploadChatGptConversationFile: r
            } = await Promise.resolve().then(a.bind(a, "uLW7")), {
                file: n
            } = (0, d.a)(t.src, "animation.gif"), i = await r(e, n, {
                storeInLibrary: !1
            });
            return {
                ...t,
                src: `sediment://${i.id}`
            }
        }
    }),
    rfhJ: (function(e, t, a) {
        var r = a("tG1k"),
            n = a("wwNr"),
            i = a("x9Ft"),
            s = a("Ci8z"),
            l = a("yGJW"),
            o = a("WFY2"),
            d = a("Kwur");

        function c(e, t, a) {
            let r = a.chatGptMessageId;
            if (null == a.src || null == r) return;
            let {
                generationId: n,
                parentGenerationId: s,
                imageIndex: c
            } = a.chatGptImageMetadata ?? {}, u = {
                mimeType: a.chatGptImageMetadata?.mimeType,
                conversationId: t,
                messageId: r,
                generationId: n,
                parentGenerationId: s,
                imageIndex: c,
                fileId: a.src.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1],
                source: "chat",
                model: "gpt-4o"
            };
            (0, l.a)(e, i.g, {
                legacyStatsigEventName: "chatgpt_image_download",
                metadata: u,
                isParagen: !1
            }), t && r && n && d.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "image_download",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t,
                            message_id: r,
                            image_generation_id: n
                        }
                    }
                }
            }).catch(e => {
                o.a.warning("Failed to record shared image download", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                })
            })
        }

        function u(e, t, a, s, o) {
            if ("share" === s) return void(0, l.a)(e, n.a, {
                button: "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE",
                selectionState: "CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION",
                imageSeriesCount: (0, r.b)(o)
            });
            let {
                generationId: d,
                parentGenerationId: c,
                model: u,
                imageIndex: m,
                sourceOperation: g
            } = a.chatGptImageMetadata ?? {};
            (0, l.a)(e, i.a, {
                metadata: {
                    mimeType: a.chatGptImageMetadata?.mimeType,
                    conversationId: t,
                    messageId: a.chatGptMessageId,
                    generationId: d,
                    parentGenerationId: c,
                    model: u,
                    imageIndex: m,
                    sourceOperation: g,
                    source: "chat",
                    fileId: a.src?.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1]
                },
                downloadableImageCount: (0, r.b)(o),
                selectionState: "pending_selection"
            })
        }

        function m(e, t, a, r) {
            let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "chat";
            if (null == a.chatGptMessageId) return;
            let {
                generationId: o,
                parentGenerationId: d,
                model: c,
                sourceOperation: u,
                imageIndex: m
            } = a.chatGptImageMetadata ?? {}, h = /^(file-service|sediment):\/\//.test(a.src ?? "") ? a.src ?? void 0 : void 0, f = a.src?.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1], _ = "open" === r || "view" === r || r.startsWith("360") ? g() : void 0;
            if (("open" === r || "view" === r) && (null != _ && (0, l.a)(e, n.c, {
                    metadata: {
                        sessionId: _,
                        conversationId: t,
                        messageId: a.chatGptMessageId,
                        generationId: o,
                        parentGenerationId: d,
                        fileId: h
                    },
                    source: "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION"
                }), "view" === r) || r.startsWith("360") && null == _) return;
            let b = {
                metadata: {
                    sessionId: _,
                    conversationId: t,
                    messageId: a.chatGptMessageId,
                    generationId: o,
                    parentGenerationId: d,
                    fileId: h
                },
                source: "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION"
            };
            switch (r) {
                case "360Impression":
                    (0, l.a)(e, n.f, b);
                    return;
                case "360Opened":
                    (0, l.a)(e, n.g, b);
                    return;
                case "360Loaded":
                    (0, l.a)(e, n.j, b);
                    return;
                case "360DependencyFailed":
                case "360ImageFailed":
                    (0, l.a)(e, n.h, {
                        ...b,
                        failureType: "360DependencyFailed" === r ? "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_DEPENDENCY_LOAD" : "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_PANORAMA_LOAD"
                    });
                    return
            }
            let v = "paragen" === s,
                y = {
                    mimeType: a.chatGptImageMetadata?.mimeType,
                    conversationId: t,
                    messageId: a.chatGptMessageId,
                    generationId: o,
                    parentGenerationId: d,
                    fileId: f,
                    source: s,
                    model: v ? "gpt-4o" : c,
                    imageIndex: m,
                    hasParent: v && "open" !== r ? !!d : void 0
                };
            if ("open" === r) {
                (0, l.a)(e, i.k, {
                    metadata: {
                        ...y,
                        sourceOperation: u ?? "none"
                    }
                }), v && p(t, a, "open");
                return
            }
            let w = "thumbsUp" === r,
                x = "download" === r ? "chatgpt_imagegen_image_paragen_download" : "chatgpt_imagegen_image_paragen_rating";
            "download" === r ? (0, l.a)(e, i.g, {
                legacyStatsigEventName: v ? x : void 0,
                metadata: y,
                isParagen: v
            }) : (0, l.a)(e, i.h, {
                legacyStatsigEventName: v ? x : void 0,
                ratingType: v ? "CHATGPT_IMAGEGEN_IMAGE_RATING_TYPE_PARAGEN" : "CHATGPT_IMAGEGEN_IMAGE_RATING_TYPE_IMAGEGEN",
                metadata: y,
                liked: w
            }), v && p(t, a, r)
        }

        function g() {
            try {
                let e = sessionStorage.getItem("_sli");
                if (e) return e;
                let t = (0, s.a)();
                return sessionStorage.setItem("_sli", t), t
            } catch {
                return
            }
        }

        function p(e, t, a) {
            let r = t.chatGptImageMetadata?.generationId,
                n = t.chatGptMessageId;
            if (!r || !e || !n) return;
            let i = "open" === a ? "image_view_full" : "download" === a ? "imagegen_image_paragen_download" : "imagegen_image_paragen_rating";
            d.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: i,
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: e,
                            message_id: n,
                            image_generation_id: r
                        },
                        imagegen_image_paragen_rating: "imagegen_image_paragen_rating" === i ? {
                            rating: "thumbsUp" === a ? "thumbs_up" : "thumbs_down"
                        } : void 0
                    }
                }
            }).catch(e => {
                o.a.warning("Failed to record Paragen image interaction", {
                    safe: {
                        interaction: a
                    },
                    sensitive: {
                        error: e
                    }
                })
            })
        }
        a.d(t, {
            a: () => g,
            b: () => m,
            c: () => u,
            d: () => c
        })
    }),
    jfiJ: (function(e, t, a) {
        var r = a("PQYu"),
            n = a("v7qY"),
            i = a("TDcV"),
            s = a("yGJW"),
            l = a("GDNt"),
            o = a("lBzi"),
            d = a("Kwur"),
            c = a("OOaz"),
            u = a("MrGp"),
            m = a("gbRX"),
            g = a("hwXH"),
            p = a("FGJH");
        async function h(e, t, a) {
            if (e.get(p.c, t)?.complete === !0) return;
            let r = e.get(i.a),
                s = (0, g.c)(e, t, a);
            s.assertRequestCurrent(), await e.queryClient.fetchQuery({
                queryKey: ["chatgpt-conversation-full", s.expectedIdentity?.accountId ?? r, t],
                staleTime: 0,
                retry: !1,
                queryFn: async l => {
                    let {
                        signal: d
                    } = l, c = await (0, g.a)(e, t, {
                        forceFull: !0,
                        signal: null == a ? d : AbortSignal.any([a, d])
                    });
                    return s.assertRequestCurrent(), a?.aborted || e.get(i.a) !== r || ((0, n.flushSync)(() => (0, u.fc)(e, c, {
                        mergeActiveBranch: !0,
                        preserveAsyncStatus: !0
                    })), e.query.setData(o.chatGptConversationQueryById$, t, c)), c
                }
            })
        }
        async function f(e, t, a) {
            let n = e.get(p.c, t);
            if (null == n || n.complete || n.isLoading || null == n.cursor || null == n.oldestMessageId) return;
            let {
                cursor: h,
                oldestMessageId: f
            } = n, b = e.get(i.a), v = (0, g.c)(e, t), y = {
                ...n,
                isLoading: !0,
                hasError: !1
            }, w = () => {
                let a = e.get(p.c, t);
                return e.get(i.a) === b && null != a && !a.complete && a.cursor === h && a.oldestMessageId === f
            };
            try {
                v.assertRequestCurrent(), e.set(p.c, t, y);
                let i = new Set,
                    x = h,
                    S = async () => {
                        i.add(x);
                        let a = await e.queryClient.fetchQuery({
                            queryKey: ["chatgpt-conversation-page", v.expectedIdentity?.accountId ?? b, t, x],
                            staleTime: 0,
                            retry: (e, t) => e < 1 && "AbortError" !== t.name && !_(t) && !(t instanceof l.a && 429 === t.responseStatus),
                            queryFn: a => {
                                let {
                                    signal: r
                                } = a;
                                return (0, m.c)(e, "page", r, () => d.Request.safeGet("/conversations/{conversation_id}/messages", {
                                    ...v,
                                    retry: "except-rate-limit",
                                    parameters: {
                                        path: {
                                            conversation_id: t
                                        },
                                        query: {
                                            before: x,
                                            num_turns: n.numTurns,
                                            include_has_versions: !0
                                        }
                                    },
                                    additionalHeaders: {
                                        ...(0, g.b)(e, t),
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
                    }, I = await S(), E = I.page_info.has_previous_page ? I.page_info.start_cursor ?? null : null;
                for (; 0 === I.messages.length && null != E;) {
                    if (!w()) return;
                    if (i.has(E)) throw Error("Conversation pagination cursor did not advance");
                    x = E;
                    let e = await S();
                    E = (I = {
                        ...e,
                        safe_urls: [...I.safe_urls ?? [], ...e.safe_urls ?? []],
                        blocked_urls: [...I.blocked_urls ?? [], ...e.blocked_urls ?? []]
                    }).page_info.has_previous_page ? I.page_info.start_cursor ?? null : null
                }
                if (!w()) return;
                if (null != E && i.has(E)) throw Error("Conversation pagination cursor did not advance");
                v.assertRequestCurrent(), a(() => {
                    let a = (0, u.Bb)(e, (0, c.c)(t), I.messages, f);
                    e.set(p.c, t, {
                        ...n,
                        cursor: E,
                        oldestMessageId: a,
                        isLoading: !1,
                        hasError: !1,
                        hasLoadedOlderPages: !0
                    })
                }), e.query.setData(o.chatGptConversationQueryById$, t, e => null == e ? e : {
                    ...e,
                    safe_urls: [...new Set([...e.safe_urls ?? [], ...I.safe_urls ?? []])],
                    blocked_urls: [...new Set([...e.blocked_urls ?? [], ...I.blocked_urls ?? []])]
                })
            } catch (r) {
                if (r instanceof Error && "AbortError" === r.name || !w()) return;
                if (_(r)) try {
                    let r = await (0, g.a)(e, t);
                    if (v.assertRequestCurrent(), !w()) return;
                    a(() => {
                        e.set(p.c, t, {
                            ...n,
                            isLoading: !1,
                            hasLoadedOlderPages: !1
                        }), (0, u.fc)(e, r, {
                            preserveAsyncStatus: !0
                        })
                    });
                    return
                } catch (e) {
                    if (e instanceof Error && "AbortError" === e.name) return
                }
                w() && e.set(p.c, t, {
                    ...n,
                    isLoading: !1,
                    hasError: !0
                })
            } finally {
                e.get(p.c, t) === y && e.set(p.c, t, {
                    ...y,
                    isLoading: !1
                })
            }
        }

        function _(e) {
            return e instanceof l.a && 400 === e.responseStatus && "invalid_cursor" === e.errorCode
        }
        a.d(t, {
            a: () => h,
            b: () => f
        })
    }),
    umQU: (function(e, t, a) {
        var r = a("XnlH"),
            n = a("Kwur"),
            i = a("MrGp"),
            s = a("bmqg"),
            l = a("SGsN"),
            o = a("urzV"),
            d = a("svjy"),
            c = a("tSEg"),
            u = a("zHp1"),
            m = a("Yscs"),
            g = a("GDNt");
        let p = (0, r.v)(c.a, e => null),
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
                    y = JSON.stringify([s?.id, v]),
                    w = 0,
                    x = Promise.resolve(),
                    S = h({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (s?.isAnimated) return f.watch(t => {
                                if (0 !== w) return;
                                let a = t.get(p, y),
                                    r = a ?? _(t, s)?.gifPlayback?.speed ?? 1;
                                (null != a || 1 !== r) && (e({
                                    preview: null,
                                    busy: !0
                                }), T(r, !1))
                            })
                        }
                    }),
                    I = async e => {
                        let t = null != e && (0, u.f)(e) && null != c ? await (0, u.a)(f.queryClient, e, c) : e,
                            a = null == t ? null : await (0, o.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, E = () => (null == r && (r = I(v).catch(e => {
                        throw r = void 0, e
                    })), r), A = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                            r = S.get().preview;
                        if (r?.speed === e && r.originalSrc === t) return r;
                        let n = (t === s?.watermarkedSrc ? s?.gifPlayback?.watermarkedVariants : s?.gifPlayback?.variants)?.[String(e)],
                            i = null == n ? null : await I(n).catch(() => null),
                            l = i ?? (t === v ? await E() : await I(t)),
                            o = null != i || 1 === e ? l : await (await a.e(764968).then(a.bind(a, "TPR0"))).withGifPlaybackSpeed(l, e);
                        return {
                            assetSrc: null != i ? n : void 0,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, m.a)(o),
                            sizeBytes: o.size
                        }
                    }, T = async (e, t) => {
                        let a = ++w;
                        S.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let r = await A(e);
                            if (a !== w) return !1;
                            return S.set({
                                preview: r,
                                busy: !1
                            }), t && (f.set(p, y, e), x = x.then(async () => {
                                if (a !== w || "chatgpt-thread" !== f.value.routeKind || s?.chatGptMessageId == null || null == v) return;
                                let t = f.get(i.j, f.value.conversationId);
                                null != t && await n.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: s.chatGptMessageId,
                                        asset_pointer: v,
                                        selected_speed: e
                                    },
                                    expectedErrorStatuses: [404, 405]
                                })
                            }).catch(e => {
                                e instanceof g.a && (404 === e.status || 405 === e.status) || f.get(l.f).danger(f.get(d.a).formatMessage({
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
                            return t && a === w && f.get(l.f).danger(f.get(d.a).formatMessage({
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
                    loadOriginal: E,
                    loadExport: async e => I((await A(e)).src),
                    changeSpeed: e => T(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let r = S.get().preview?.speed ?? f.get(p, y) ?? e.gifPlayback?.speed ?? 1,
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
                        let i = await A(r, t);
                        return b(n, a && null != i.assetSrc ? {
                            ...i,
                            src: i.assetSrc
                        } : i)
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
                    imageAssetResolver: n
                } = e, {
                    scope: i
                } = t, s = _(i, a, r), l = i.get(h, {
                    image: s?.isAnimated === !0 ? s : void 0,
                    imageAssetResolver: n
                }), {
                    preview: o
                } = i.get(l.state$);
                return {
                    playback: l,
                    previewSrc: o?.src,
                    image: null == s ? void 0 : b(s, o),
                    originalSrc: s?.isAnimated === !0 ? s.gifPlayback?.originalSrc ?? s.src : s?.src,
                    canControl: a?.isAnimated === !0 && null != a.gifPlayback && "chatgpt-thread" === i.value.routeKind
                }
            });

        function _(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(s.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function b(e, t) {
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
            a: () => b,
            b: () => _
        }, {
            c: h,
            d: f
        })
    }),
    I0AH: (function(e, t, a) {
        var r = a("ABep"),
            n = a("QosV"),
            i = a("on57");

        function s(e) {
            let t, a, s = (0, n.c)(14),
                {
                    ariaLabel: l,
                    children: o,
                    className: d,
                    variant: c
                } = e,
                u = void 0 === c ? "compact" : c;
            if ("embedded" === u) {
                let e, t = null == l ? void 0 : "group";
                return s[0] !== l || s[1] !== o || s[2] !== t ? (e = (0, r.jsx)("div", {
                    role: t,
                    "aria-label": l,
                    className: "flex min-w-0 items-center",
                    children: o
                }), s[0] = l, s[1] = o, s[2] = t, s[3] = e) : e = s[3], e
            }
            let m = null == l ? void 0 : "toolbar",
                g = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                p = "imageTools" === u && "gap-0 shadow-md",
                h = "playback" === u && "gap-2 shadow-sm";
            return s[4] !== d || s[5] !== g || s[6] !== p || s[7] !== h ? (t = (0, i.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", g, p, h, d), s[4] = d, s[5] = g, s[6] = p, s[7] = h, s[8] = t) : t = s[8], s[9] !== l || s[10] !== o || s[11] !== m || s[12] !== t ? (a = (0, r.jsx)("div", {
                role: m,
                "aria-label": l,
                className: t,
                children: o
            }), s[9] = l, s[10] = o, s[11] = m, s[12] = t, s[13] = a) : a = s[13], a
        }
        a.d(t, {
            a: () => s
        })
    }),
    eYeG: (function(e, t, a) {
        var r = a("ABep"),
            n = a("QosV"),
            i = a("zd8w"),
            s = a("Qgfj"),
            l = a("aqd9"),
            o = a("POjP");

        function d(e) {
            let t, a, s, d = (0, n.c)(6),
                {
                    generationStartedAtMs: m,
                    isActive: g
                } = e,
                p = void 0 === g || g,
                [h, f] = (0, i.useState)(c),
                _ = (0, i.useRef)(null);
            return d[0] !== m || d[1] !== p ? (t = () => {
                let e, t = _.current;
                if (null == t) return;
                let a = t.ownerDocument,
                    r = !1,
                    n = () => {
                        let t = (0, o.a)(Date.now() - m);
                        return f(t), 99 === t && (clearInterval(e), e = void 0), t
                    },
                    i = () => {
                        clearInterval(e), e = void 0, r && !a.hidden && 99 > n() && (e = setInterval(n, 500))
                    };
                if (n(), !p) return;
                a.addEventListener("visibilitychange", i);
                let s = (0, l.a)(t, e => {
                    r = e, i()
                });
                return () => {
                    s?.(), a.removeEventListener("visibilitychange", i), clearInterval(e)
                }
            }, a = [m, p], d[0] = m, d[1] = p, d[2] = t, d[3] = a) : (t = d[2], a = d[3]), (0, i.useLayoutEffect)(t, a), d[4] !== h ? (s = (0, r.jsx)(u, {
                ref: _,
                progress: h
            }), d[4] = h, d[5] = s) : s = d[5], s
        }

        function c() {
            return (0, o.a)(0)
        }

        function u(e) {
            let t, a, i = (0, n.c)(5),
                {
                    progress: l,
                    ref: o
                } = e,
                d = l / 100;
            return i[0] !== d ? (t = (0, r.jsx)(s.c, {
                value: d,
                style: "percent"
            }), i[0] = d, i[1] = t) : t = i[1], i[2] !== o || i[3] !== t ? (a = (0, r.jsx)("span", {
                ref: o,
                className: "pointer-events-none absolute end-3.5 bottom-3.5 z-10 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-card/80 px-2 body-sm font-medium text-[color:var(--color-image-generation-text,var(--color-text-info))] tabular-nums shadow-lg ring-[0.5px] ring-border backdrop-blur-md select-none",
                children: t
            }), i[2] = o, i[3] = t, i[4] = a) : a = i[4], a
        }
        a.d(t, {
            a: () => d,
            b: () => u
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

        function n(e) {
            let t = Math.max(0, e / 45e3);
            for (let e = 1; e < r.length; e += 1) {
                let a = r[e - 1],
                    n = r[e];
                if (t <= n[0]) {
                    let e = (t - a[0]) / (n[0] - a[0]);
                    return Math.floor(a[1] + e * (n[1] - a[1]))
                }
            }
            return Math.min(99, Math.floor(90 + 10 * (1 - Math.exp(-1.5 * (t - 1)))))
        }
        a.d(t, {
            a: () => n
        })
    }),
    ghCJ: (function(e, t, a) {
        a.d(t, {
            a: () => g
        });
        var r = a("ABep"),
            n = a("QosV"),
            i = a("on57"),
            s = a("zd8w"),
            l = a("Wf1j"),
            o = a("aqd9"),
            d = a("T1PX"),
            c = a("a6Zv"),
            u = a("eYeG");
        let m = {
            playground: {
                spacing: 14,
                radius: 1.5
            },
            thumbnail: {
                spacing: 6,
                radius: .75
            }
        };

        function g(e) {
            let t, a, s, o, d, c, m = (0, n.c)(22),
                {
                    ariaLabel: g,
                    background: h,
                    generationStartedAtMs: f,
                    isAnimating: _,
                    presentation: b,
                    previewSrc: v
                } = e,
                y = void 0 === _ || _,
                w = void 0 === b ? "default" : b,
                x = (0, l.a)(),
                S = w;
            "single" === S ? S = "playground" : "fill" === S && (S = "default"), m[0] !== g || m[1] !== x ? (t = g ?? x.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image...",
                description: "Aria label for the image generation loading placeholder"
            }), m[0] = g, m[1] = x, m[2] = t) : t = m[2];
            let I = null != v ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
                E = null == v && "surface" === (void 0 === h ? "surface" : h) && ("single" === w ? "bg-surface-secondary" : "dark:bg-primary-ghost-hover bg-primary-soft-active");
            m[3] !== w || m[4] !== I || m[5] !== E ? (a = (0, i.b)("overflow-clip", I, E, "fill" === w ? "absolute inset-0 size-full" : ["relative aspect-square", "thumbnail" === w ? "rounded-lg" : "rounded-2xl", "single" === w ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]"]), m[3] = w, m[4] = I, m[5] = E, m[6] = a) : a = m[6], m[7] !== v ? (s = null != v ? (0, r.jsx)("img", {
                alt: "",
                className: "pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-3xl",
                src: v,
                referrerPolicy: "no-referrer"
            }) : null, m[7] = v, m[8] = s) : s = m[8];
            let A = null != v;
            return m[9] !== S || m[10] !== y || m[11] !== A ? (o = (0, r.jsx)(p, {
                isAnimating: y,
                overImage: A,
                presentation: S
            }), m[9] = S, m[10] = y, m[11] = A, m[12] = o) : o = m[12], m[13] !== f || m[14] !== y ? (d = null != f ? (0, r.jsx)(u.a, {
                generationStartedAtMs: f,
                isActive: y
            }, f) : null, m[13] = f, m[14] = y, m[15] = d) : d = m[15], m[16] !== o || m[17] !== d || m[18] !== t || m[19] !== a || m[20] !== s ? (c = (0, r.jsxs)("div", {
                "aria-busy": !0,
                "aria-label": t,
                className: a,
                children: [s, o, d]
            }), m[16] = o, m[17] = d, m[18] = t, m[19] = a, m[20] = s, m[21] = c) : c = m[21], c
        }

        function p(e) {
            let t, a, l, u, g, p = (0, n.c)(17),
                {
                    isAnimating: v,
                    overImage: y,
                    presentation: w
                } = e,
                x = (0, d.a)(),
                S = (0, c.a)(),
                I = (0, s.useRef)(null),
                E = (0, s.useRef)(null);
            p[0] !== v || p[1] !== S || p[2] !== w || p[3] !== x ? (t = () => {
                if (!v) return;
                let e = I.current,
                    t = E.current,
                    a = t?.getContext("2d");
                if (null == e || null == t || null == a) return;
                let r = 2 * Math.PI,
                    n = getComputedStyle(e).color || (S ? "white" : "black"),
                    i = (e, t) => e + (x ? .5 : Math.random()) * (t - e),
                    s = e => 1.2 * e * i(1, 1.35),
                    l = {
                        durations: {
                            offsetX1: s(4500),
                            offsetY1: s(6330),
                            offsetX2: s(5600),
                            offsetY2: s(5750),
                            fieldSize1: s(3600),
                            fieldSize2: s(2400)
                        },
                        phases: {
                            offsetX1: i(0, 1),
                            offsetY1: i(0, 1),
                            offsetX2: i(0, 1),
                            offsetY2: i(0, 1),
                            fieldSize1: i(0, 1),
                            fieldSize2: i(0, 1)
                        },
                        bounds: {
                            x1Start: i(.1, .32),
                            x1End: i(.68, .9),
                            y1Start: i(.1, .32),
                            y1End: i(.68, .9),
                            x2Start: i(.68, .9),
                            x2End: i(.1, .32),
                            y2Start: i(.68, .9),
                            y2End: i(.1, .32)
                        },
                        fieldSizeRange: {
                            firstStart: i(.42, .52),
                            firstEnd: i(.62, .75),
                            secondStart: i(.5, .62),
                            secondEnd: i(.74, .9)
                        }
                    },
                    d = null,
                    c = 0,
                    u = null,
                    g = !0,
                    p = null,
                    y = !1,
                    A = i => {
                        var s, o, v, y, S, I, E, T, P, C, j, M;
                        if (!x && 0 !== c && i - c < 33.333333333333336) {
                            d = requestAnimationFrame(A);
                            return
                        }
                        if (c = i, null == p && (p = i), (g || null == u) && (() => {
                                let a = e.getBoundingClientRect(),
                                    r = Math.max(0, Math.floor(a.width)),
                                    n = Math.max(0, Math.floor(a.height));
                                if (0 === r || 0 === n) {
                                    u = null, g = !1;
                                    return
                                }
                                let i = Math.max(1, window.devicePixelRatio || 1),
                                    s = Math.floor(r * i),
                                    l = Math.floor(n * i);
                                (t.width !== s || t.height !== l) && (t.width = s, t.height = l);
                                let o = "default" === w ? Math.max(1, 12 / i) : m[w].spacing,
                                    d = Math.max(1, Math.floor(r / o)),
                                    c = Math.max(1, Math.floor(n / o)),
                                    p = (r - (d - 1) * o) * .5,
                                    h = (n - (c - 1) * o) * .5,
                                    f = new Float32Array(d),
                                    _ = new Float32Array(c),
                                    b = new Float32Array(d),
                                    v = new Float32Array(c);
                                for (let e = 0; e < d; e += 1) f[e] = p + e * o, b[e] = 1 === d ? .5 : e / (d - 1);
                                for (let e = 0; e < c; e += 1) _[e] = h + e * o, v[e] = 1 === c ? .5 : e / (c - 1);
                                u = {
                                    width: r,
                                    height: n,
                                    dpr: i,
                                    spacing: o,
                                    xPositions: f,
                                    yPositions: _,
                                    xNormals: b,
                                    yNormals: v
                                }, g = !1
                            })(), null == u) {
                            d = null;
                            return
                        }
                        let G = x ? 0 : i - p,
                            R = (e, t) => {
                                let a;
                                return (a = (G / e + t) % 1) <= .5 ? 2 * a : 2 - 2 * a
                            },
                            O = (s = l.bounds.x1Start, o = l.bounds.x1End, s + (o - s) * b(R(l.durations.offsetX1, l.phases.offsetX1))),
                            L = (v = l.bounds.y1Start, y = l.bounds.y1End, v + (y - v) * _(R(l.durations.offsetY1, l.phases.offsetY1))),
                            F = (S = l.bounds.x2Start, I = l.bounds.x2End, S + (I - S) * b(R(l.durations.offsetX2, l.phases.offsetX2))),
                            N = (E = l.bounds.y2Start, T = l.bounds.y2End, E + (T - E) * _(R(l.durations.offsetY2, l.phases.offsetY2))),
                            k = .78 * (P = l.fieldSizeRange.firstStart, C = l.fieldSizeRange.firstEnd, P + (C - P) * _(R(l.durations.fieldSize1, l.phases.fieldSize1))),
                            H = .78 * (j = l.fieldSizeRange.secondStart, M = l.fieldSizeRange.secondEnd, j + (M - j) * _(R(l.durations.fieldSize2, l.phases.fieldSize2)));
                        a.save(), a.setTransform(u.dpr, 0, 0, u.dpr, 0, 0), a.clearRect(0, 0, u.width, u.height), a.fillStyle = n;
                        let q = "default" === w ? Math.max(.55, .5 * u.spacing * .16) : m[w].radius;
                        for (let e = 0; e < u.yPositions.length; e += 1) {
                            let t = u.yPositions[e],
                                n = u.yNormals[e];
                            for (let e = 0; e < u.xPositions.length; e += 1) {
                                let i = u.xPositions[e],
                                    s = u.xNormals[e],
                                    l = Math.pow(h((1 - f(0, k, Math.hypot(s - O, n - L))) * 1.2 + (1 - f(0, H, Math.hypot(s - F, n - N))) * .82), 1.18);
                                l <= .03 || (a.globalAlpha = l, a.beginPath(), a.moveTo(i + q, t), a.arc(i, t, q, 0, r), a.fill())
                            }
                        }
                        a.restore(), d = x ? null : requestAnimationFrame(A)
                    },
                    T = new ResizeObserver(() => {
                        g = !0, y && null == d && (d = requestAnimationFrame(A))
                    });
                T.observe(e);
                let P = (0, o.a)(e, e => {
                    (y = e) ? null == d && (d = requestAnimationFrame(A)): null != d && (cancelAnimationFrame(d), d = null)
                });
                return () => {
                    P?.(), null != d && cancelAnimationFrame(d), T.disconnect()
                }
            }, p[0] = v, p[1] = S, p[2] = w, p[3] = x, p[4] = t) : t = p[4], p[5] !== v || p[6] !== S || p[7] !== y || p[8] !== w || p[9] !== x ? (a = [v, S, y, w, x], p[5] = v, p[6] = S, p[7] = y, p[8] = w, p[9] = x, p[10] = a) : a = p[10], (0, s.useEffect)(t, a);
            let A = y && "overImage-KmHrEc",
                T = (!v || x) && "reducedMotion-ttnr0y";
            return p[11] !== A || p[12] !== T ? (l = (0, i.b)("dots-avXrIV", A, T), p[11] = A, p[12] = T, p[13] = l) : l = p[13], p[14] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)("canvas", {
                ref: E,
                "aria-hidden": !0,
                className: "block h-full w-full"
            }), p[14] = u) : u = p[14], p[15] !== l ? (g = (0, r.jsx)("div", {
                ref: I,
                className: l,
                children: u
            }), p[15] = l, p[16] = g) : g = p[16], g
        }

        function h(e) {
            return Math.min(1, Math.max(0, e))
        }

        function f(e, t, a) {
            let r = h((a - e) / (t - e));
            return r * r * (3 - 2 * r)
        }

        function _(e) {
            return e * e * (3 - 2 * e)
        }

        function b(e) {
            return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
        }
    }),
    EQ0X: (function(e, t, a) {
        var r = a("ABep"),
            n = a("QosV"),
            i = a("zd8w"),
            s = a("Wf1j"),
            l = a("oyxz"),
            o = a("ygO2"),
            d = a("bqtn"),
            c = a("HOLv"),
            u = a("bf6R"),
            m = a("UxN3"),
            g = a("ddzD"),
            p = a("I0AH"),
            h = a("mDqV"),
            f = a("ZedP"),
            _ = a("qgx6"),
            b = a("thT2");

        function v(e) {
            let t, a, v, y, w, x, S, I = (0, n.c)(53),
                {
                    downloadImageCount: E,
                    floatingToolbarVariant: A,
                    moreActions: T,
                    isAnimated: P,
                    isImageActionsDisabled: C,
                    isUnifiedViewerEnabled: j,
                    onDownload: M,
                    onDownloadAll: G,
                    onDownloadMenuOpen: R,
                    onShare: O,
                    onShareAll: L,
                    onShareMenuOpen: F,
                    saveAction: N,
                    shareImageCount: k,
                    showShareText: H
                } = e,
                q = void 0 !== P && P,
                z = void 0 !== j && j,
                B = void 0 !== H && H,
                D = (0, s.a)(),
                [W, Y] = (0, i.useState)(!1),
                X = "toolbar";
            null != A && (X = "imageTools" === A ? "imageToolbar" : "composerSm"), I[0] !== X || I[1] !== A || I[2] !== D || I[3] !== C || I[4] !== z || I[5] !== O || I[6] !== L || I[7] !== B ? (t = z ? (0, r.jsxs)(h.c, {
                "aria-label": D.formatMessage({
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                }),
                disabled: C,
                uniform: !B,
                onClick: null == L ? O : void 0,
                children: [(0, r.jsx)(m.b, {
                    icon: {
                        16: u.L,
                        20: u.M
                    }
                }), B ? (0, r.jsx)(l.a, {
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                }) : null]
            }) : (0, r.jsx)(o.a, {
                color: null == A ? "primary" : "ghostActive",
                disabled: C,
                size: X,
                onClick: null == L ? O : void 0,
                children: (0, r.jsx)(l.a, {
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                })
            }), I[0] = X, I[1] = A, I[2] = D, I[3] = C, I[4] = z, I[5] = O, I[6] = L, I[7] = B, I[8] = t) : t = I[8];
            let K = t;
            if (null != O && null != L) {
                let e;
                I[9] !== q || I[10] !== C || I[11] !== O || I[12] !== L || I[13] !== F || I[14] !== K || I[15] !== k ? (e = (0, r.jsx)(f.a, {
                    disabled: C,
                    imageCount: k,
                    isAnimated: q,
                    onOpen: F,
                    onShare: O,
                    onShareAll: L,
                    triggerButton: K
                }), I[9] = q, I[10] = C, I[11] = O, I[12] = L, I[13] = F, I[14] = K, I[15] = k, I[16] = e) : e = I[16], K = e
            }
            if (null != A) {
                let e;
                I[17] !== A || I[18] !== K ? (e = (0, r.jsx)(p.a, {
                    variant: A,
                    children: K
                }), I[17] = A, I[18] = K, I[19] = e) : e = I[19], K = e
            }
            I[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                Y(!0), await e().finally(() => {
                    Y(!1)
                })
            }, I[20] = a) : a = I[20];
            let U = a;
            I[21] !== X || I[22] !== E || I[23] !== A || I[24] !== D || I[25] !== q || I[26] !== W || I[27] !== C || I[28] !== z || I[29] !== M || I[30] !== G || I[31] !== R || I[32] !== N ? (v = null != G && null != M ? (0, r.jsxs)(d.a, {
                align: "end",
                disabled: C || W,
                onOpenChange: e => {
                    e && R?.()
                },
                triggerButton: z ? (0, r.jsx)(h.c, {
                    "aria-label": D.formatMessage((0, g.a)({
                        isAnimated: q
                    }).downloadLabel),
                    disabled: C || W,
                    loading: W,
                    uniform: !0,
                    children: (0, r.jsx)(m.b, {
                        icon: {
                            assets: {
                                16: _.a,
                                20: b.a
                            }
                        }
                    })
                }) : (0, r.jsx)(o.a, {
                    "aria-label": D.formatMessage((0, g.a)({
                        isAnimated: q
                    }).downloadLabel),
                    color: null == A ? "ghost" : "ghostActive",
                    disabled: C || W,
                    loading: W,
                    size: X,
                    uniform: !0,
                    children: "compact" === A ? (0, r.jsx)(c.a, {
                        asset: _.a
                    }) : (0, r.jsx)(u.r, {})
                }),
                children: [(0, r.jsx)(d.c.Item, {
                    onSelect: () => void U(M),
                    children: (0, r.jsx)(l.a, {
                        ...(0, g.a)({
                            isAnimated: q
                        }).downloadMenuLabel
                    })
                }), (0, r.jsx)(d.c.Item, {
                    onSelect: () => void U(G),
                    children: (0, r.jsx)(l.a, {
                        id: "imagePreview.downloadSeries",
                        defaultMessage: "Download {count} images in this series",
                        description: "Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.",
                        values: {
                            count: E
                        }
                    })
                })]
            }) : N, I[21] = X, I[22] = E, I[23] = A, I[24] = D, I[25] = q, I[26] = W, I[27] = C, I[28] = z, I[29] = M, I[30] = G, I[31] = R, I[32] = N, I[33] = v) : v = I[33];
            let V = v;
            if (null != A && null != G && null != M) {
                let e;
                I[34] !== V || I[35] !== A ? (e = (0, r.jsx)(p.a, {
                    variant: A,
                    children: V
                }), I[34] = V, I[35] = A, I[36] = e) : e = I[36], V = e
            }
            let Q = null == O ? null : K;
            I[37] !== V || I[38] !== Q ? (y = (0, r.jsxs)(r.Fragment, {
                children: [V, Q]
            }), I[37] = V, I[38] = Q, I[39] = y) : y = I[39];
            let J = y;
            I[40] !== A || I[41] !== T ? (w = null == T || null == A ? T : (0, r.jsx)(p.a, {
                variant: A,
                children: T
            }), I[40] = A, I[41] = T, I[42] = w) : w = I[42];
            let $ = w,
                Z = null != O || null != V;
            if (!z || B) {
                let e;
                return I[43] !== J || I[44] !== $ ? (e = (0, r.jsxs)(r.Fragment, {
                    children: [J, $]
                }), I[43] = J, I[44] = $, I[45] = e) : e = I[45], e
            }
            return I[46] !== Z || I[47] !== D || I[48] !== J ? (x = Z ? (0, r.jsx)(h.i, {
                label: D.formatMessage({
                    id: "imagePreview.headerActions",
                    defaultMessage: "Image actions",
                    description: "Accessible label for the image viewer's Share and Download actions group"
                }),
                children: J
            }) : null, I[46] = Z, I[47] = D, I[48] = J, I[49] = x) : x = I[49], I[50] !== x || I[51] !== $ ? (S = (0, r.jsxs)(r.Fragment, {
                children: [x, $]
            }), I[50] = x, I[51] = $, I[52] = S) : S = I[52], S
        }
        a.d(t, {
            a: () => v
        })
    }),
    ZedP: (function(e, t, a) {
        var r = a("ABep"),
            n = a("QosV"),
            i = a("oyxz"),
            s = a("bqtn"),
            l = a("HOLv"),
            o = a("ddzD"),
            d = a("KidR"),
            c = a("fiK2");

        function u(e) {
            let t, a, u, m, g, p, h, f = (0, n.c)(19),
                {
                    disabled: _,
                    imageCount: b,
                    isAnimated: v,
                    onOpen: y,
                    onShare: w,
                    onShareAll: x,
                    triggerButton: S
                } = e,
                I = void 0 !== v && v;
            return f[0] !== y ? (t = e => {
                e && y?.()
            }, f[0] = y, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(l.a, {
                className: "text-gray-1000",
                asset: d.a
            }), f[2] = a) : a = f[2], f[3] !== I ? (u = (0, o.a)({
                isAnimated: I
            }), f[3] = I, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (m = (0, r.jsx)(i.a, {
                ...u.shareSelectionLabel
            }), f[5] = u.shareSelectionLabel, f[6] = m) : m = f[6], f[7] !== w || f[8] !== m ? (g = (0, r.jsx)(s.c.Item, {
                leftIcon: a,
                onSelect: w,
                children: m
            }), f[7] = w, f[8] = m, f[9] = g) : g = f[9], f[10] !== b || f[11] !== x ? (p = null == x ? null : (0, r.jsx)(s.c.Item, {
                leftIcon: (0, r.jsx)(l.a, {
                    className: "text-gray-1000",
                    asset: c.a
                }),
                onSelect: x,
                children: (0, r.jsx)(i.a, {
                    id: "imagePreview.shareSeries",
                    defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                    description: "Option in the generated-image Share dropdown that shares every completed image in the selected generation series. imageCount is the number of images included, always greater than one. Keep this menu label concise.",
                    values: {
                        imageCount: b
                    }
                })
            }), f[10] = b, f[11] = x, f[12] = p) : p = f[12], f[13] !== _ || f[14] !== t || f[15] !== g || f[16] !== p || f[17] !== S ? (h = (0, r.jsxs)(s.a, {
                align: "end",
                disabled: _,
                triggerButton: S,
                onOpenChange: t,
                children: [g, p]
            }), f[13] = _, f[14] = t, f[15] = g, f[16] = p, f[17] = S, f[18] = h) : h = f[18], h
        }
        a.d(t, {
            a: () => u
        })
    })
};