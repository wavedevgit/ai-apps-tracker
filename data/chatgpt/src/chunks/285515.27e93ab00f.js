export const __rspack_esm_id = 285515;
export const __rspack_esm_ids = [285515];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("N55g");
        let s = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(753405), a.e(585419), a.e(644241), a.e(877700), a.e(636463), a.e(736270), a.e(55762), a.e(669998), a.e(565013), a.e(561042), a.e(945902), a.e(874459), a.e(445355), a.e(762474), a.e(851888), a.e(62441), a.e(587936), a.e(168420), a.e(476311), a.e(536161), a.e(242986), a.e(826779), a.e(530869), a.e(886364), a.e(16212), a.e(741494), a.e(379413), a.e(178928), a.e(480493), a.e(377245)]).then(a.bind(a, "iXkm"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, r.jsx)(n.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: s
        })
    }),
    KO1w: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("XAx9");
        let s = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(753405), a.e(585419), a.e(673131), a.e(321957), a.e(644241), a.e(877700), a.e(636463), a.e(669998), a.e(565013), a.e(784669), a.e(8197), a.e(328034), a.e(469804), a.e(810177), a.e(183629), a.e(825230), a.e(704984), a.e(467281), a.e(945902), a.e(874459), a.e(445355), a.e(762474), a.e(851888), a.e(62441), a.e(587936), a.e(168420), a.e(476311), a.e(536161), a.e(242986), a.e(826779), a.e(530869), a.e(886364), a.e(16212), a.e(741494), a.e(379413), a.e(681480), a.e(178928), a.e(705352)]).then(a.bind(a, "WCGU"))).DilResponse, {
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
            b: () => _,
            c: () => u
        });
        var r = a("REzJ"),
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
        let _ = (0, i.createContext)(null),
            g = (0, i.createContext)(null)
    }),
    XAx9: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("iTtm"),
            s = a("zd8w"),
            o = a("UIU6"),
            l = a("OWtl"),
            d = a("N55g"),
            c = a("greq");
        let u = new Set;

        function _() {
            for (let e of u) e.presentation.onPageHide()
        }

        function g(e) {
            let t, a, d, g, p, T, h, f, E, I, A, G = (0, i.c)(30),
                {
                    children: b,
                    contentReferenceIndex: v,
                    isPresented: y,
                    isPreparing: O,
                    isStreaming: P,
                    sourceMessageId: S
                } = e,
                C = void 0 === y || y,
                H = (0, n.y)(l.a);
            G[0] !== H ? (t = () => (0, c.c)(H), G[0] = H, G[1] = t) : t = G[1];
            let [w] = (0, s.useState)(t), x = void 0 !== O && O ? null : w;
            G[2] !== C || G[3] !== P || G[4] !== x ? (a = () => {
                x && (x.presentation.updateStreaming(P), x.presentation.setPresented(C))
            }, d = [x, C, P], G[2] = C, G[3] = P, G[4] = x, G[5] = a, G[6] = d) : (a = G[5], d = G[6]), (0, s.useLayoutEffect)(a, d), G[7] !== P || G[8] !== x?.presentation ? (g = () => x?.presentation.attach(P), G[7] = P, G[8] = x?.presentation, G[9] = g) : g = G[9];
            let M = (0, s.useEffectEvent)(g);
            G[10] !== M || G[11] !== x ? (p = () => {
                if (!x) return;
                let e = M();
                return u.add(x), 1 === u.size && window.addEventListener("pagehide", _, !0), () => {
                    u.delete(x), 0 === u.size && window.removeEventListener("pagehide", _, !0), e?.()
                }
            }, G[10] = M, G[11] = x, G[12] = p) : p = G[12], G[13] !== x ? (T = [x], G[13] = x, G[14] = T) : T = G[14], (0, s.useEffect)(p, T);
            let L = null == v ? void 0 : "contents";
            G[15] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, r.jsx)(m, {}), G[15] = h) : h = G[15];
            let R = x?.render.onHostRenderFailure;
            return G[16] !== b || G[17] !== R ? (f = (0, r.jsx)(o.a, {
                name: "ModelWrittenDILV2Renderer",
                fallback: h,
                onError: R,
                children: b
            }), G[16] = b, G[17] = R, G[18] = f) : f = G[18], G[19] !== v || G[20] !== S || G[21] !== f || G[22] !== L ? (E = (0, r.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": S,
                "data-chatgpt-copy-reference": v,
                "data-markdown-copy": L,
                children: f
            }), G[19] = v, G[20] = S, G[21] = f, G[22] = L, G[23] = E) : E = G[23], G[24] !== x || G[25] !== E ? (I = (0, r.jsx)(c.b.Provider, {
                value: x,
                children: E
            }), G[24] = x, G[25] = E, G[26] = I) : I = G[26], G[27] !== w.render.onPreparationEnd || G[28] !== I ? (A = (0, r.jsx)(c.a.Provider, {
                value: w.render.onPreparationEnd,
                children: I
            }), G[27] = w.render.onPreparationEnd, G[28] = I, G[29] = A) : A = G[29], A
        }

        function m(e) {
            let t, a, n, o = (0, i.c)(12),
                {
                    stage: l,
                    errorClass: u,
                    initialization: _
                } = e,
                g = void 0 !== _ && _,
                m = (0, s.useContext)(c.b);
            return o[0] !== g || o[1] !== m?.presentation || o[2] !== m?.render || o[3] !== l ? (t = () => {
                null != l && m?.render.onTerminalFailure(l), m?.render.onFallbackResult("shown", l), m?.presentation.reportRootFailure(g)
            }, o[0] = g, o[1] = m?.presentation, o[2] = m?.render, o[3] = l, o[4] = t) : t = o[4], o[5] !== g || o[6] !== m || o[7] !== l ? (a = [m, l, g], o[5] = g, o[6] = m, o[7] = l, o[8] = a) : a = o[8], (0, s.useEffect)(t, a), o[9] !== u || o[10] !== l ? (n = (0, r.jsx)(d.a, {
                stage: l,
                errorClass: u
            }), o[9] = u, o[10] = l, o[11] = n) : n = o[11], n
        }
        a.d(t, {
            a: () => g,
            b: () => m
        })
    }),
    erFs: (function(e, t, a) {
        a.d(t, {
            a: () => Z,
            b: () => J
        });
        var r = a("FS1B"),
            i = a("BOYb"),
            n = a("Cslg"),
            s = a("X6Vn"),
            o = a("yGJW"),
            l = a("O666"),
            d = a("LulU"),
            c = a("cQW3"),
            u = a("Tywu"),
            _ = a("ABep"),
            g = a("QosV");
        let m = {
            $type: "protobuf_analytics_events.v1.ChatgptImagegenPromptSharingAction"
        };
        var p = a("T0Rc"),
            T = a("iTtm"),
            h = a("zd8w"),
            f = a("Wf1j"),
            E = a("oyxz"),
            I = a("EShr"),
            A = a("OWtl"),
            G = a("hZax"),
            b = a("eShZ"),
            v = a("lBzi"),
            y = a("r9i9"),
            O = a("vlt6"),
            P = a("aFoA"),
            S = a("OOaz"),
            C = a("MrGp"),
            H = a("jfiJ"),
            w = a("ygO2"),
            x = a("bf6R"),
            M = a("zKCW"),
            L = a("JNtf"),
            R = a("mUDD");

        function N(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var B = a("zLIa");

        function j(e) {
            let t, a, r, i, n, s, o, l = (0, g.c)(19),
                {
                    content: d,
                    onChange: c,
                    disabled: u,
                    autoFocus: m
                } = e,
                p = void 0 !== u && u,
                T = void 0 !== m && m;
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, _.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-title",
                children: (0, _.jsx)(E.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title",
                    description: "Label for the shared image prompt template title"
                })
            }), l[0] = t) : t = l[0], l[1] !== d || l[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), l[1] = d, l[2] = c, l[3] = a) : a = l[3], l[4] !== T || l[5] !== d.title || l[6] !== a ? (r = (0, _.jsxs)(R.f, {
                children: [t, (0, _.jsx)(B.c, {
                    id: "image-prompt-title",
                    autoFocus: T,
                    name: "title",
                    variant: "compact",
                    required: !0,
                    rows: 1,
                    maxLength: 400,
                    value: d.title,
                    onChange: a
                })]
            }), l[4] = T, l[5] = d.title, l[6] = a, l[7] = r) : r = l[7], l[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, _.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, _.jsx)(E.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt",
                    description: "Label for the reusable image generation prompt"
                })
            }), l[8] = i) : i = l[8], l[9] !== d || l[10] !== c ? (n = e => c({
                ...d,
                prompt: e.target.value
            }), l[9] = d, l[10] = c, l[11] = n) : n = l[11], l[12] !== d.prompt || l[13] !== n ? (s = (0, _.jsxs)(R.f, {
                children: [i, (0, _.jsx)(B.c, {
                    id: "image-prompt-text",
                    name: "prompt",
                    variant: "compact",
                    required: !0,
                    rows: 2,
                    maxLength: 2e5,
                    value: d.prompt,
                    onChange: n
                })]
            }), l[12] = d.prompt, l[13] = n, l[14] = s) : s = l[14], l[15] !== p || l[16] !== r || l[17] !== s ? (o = (0, _.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: p,
                children: [r, s]
            }), l[15] = p, l[16] = r, l[17] = s, l[18] = o) : o = l[18], o
        }

        function Y(e) {
            let t, a, r, i, n, s, o, l, d, c, u, m, p, T, I, A, G, v, y, O, P = (0, g.c)(54),
                {
                    content: S,
                    onSave: C,
                    onClose: H,
                    onCloseAutoFocus: B
                } = e,
                Y = (0, f.a)(),
                [U, X] = (0, h.useState)(S),
                [F, D] = (0, h.useState)(!1),
                [k, q] = (0, h.useState)(null);
            P[0] !== U || P[1] !== F || P[2] !== H || P[3] !== C ? (t = async function() {
                if (!F && N(U)) {
                    D(!0), q(null);
                    try {
                        await C(U), H()
                    } catch (e) {
                        q(e instanceof b.a && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    D(!1)
                }
            }, P[0] = U, P[1] = F, P[2] = H, P[3] = C, P[4] = t) : t = P[4];
            let z = t,
                W = !F;
            return P[5] !== B ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: B
            }, P[5] = B, P[6] = a) : a = P[6], P[7] !== F || P[8] !== H ? (r = e => {
                e || F || H()
            }, P[7] = F, P[8] = H, P[9] = r) : r = P[9], P[10] !== z ? (i = e => {
                e.preventDefault(), e.stopPropagation(), z()
            }, P[10] = z, P[11] = i) : i = P[11], P[12] !== Y ? (n = Y.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back",
                description: "Return from the image prompt editor to the sharing preview without saving the draft"
            }), P[12] = Y, P[13] = n) : n = P[13], P[14] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, _.jsx)(x.ac, {}), P[14] = s) : s = P[14], P[15] !== F || P[16] !== H || P[17] !== n ? (o = (0, _.jsx)(w.a, {
                color: "ghost",
                size: "icon",
                disabled: F,
                "aria-label": n,
                onClick: H,
                children: s
            }), P[15] = F, P[16] = H, P[17] = n, P[18] = o) : o = P[18], P[19] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, _.jsx)(R.d, {
                title: (0, _.jsx)(L.e, {
                    children: (0, _.jsx)(E.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt",
                        description: "Title of the dialog for editing the image's shared title and prompt"
                    })
                })
            }), P[19] = l) : l = P[19], P[20] !== o ? (d = (0, _.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [o, l]
            }), P[20] = o, P[21] = d) : d = P[21], P[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                X(e), q(null)
            }, P[22] = c) : c = P[22], P[23] !== U || P[24] !== F ? (u = (0, _.jsx)(R.e, {
                spacing: "large",
                children: (0, _.jsx)(j, {
                    content: U,
                    disabled: F,
                    autoFocus: !0,
                    onChange: c
                })
            }), P[23] = U, P[24] = F, P[25] = u) : u = P[25], P[26] !== k ? (m = null != k && (0, _.jsx)(R.e, {
                children: (0, _.jsx)(M.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === k ? (0, _.jsx)(E.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again.",
                        description: "Error when moderation rejects an edit to a shared image prompt"
                    }) : (0, _.jsx)(E.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again.",
                        description: "Error when saving an image prompt fails; the draft remains in the editor for retry"
                    })
                })
            }), P[26] = k, P[27] = m) : m = P[27], P[28] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, _.jsx)(E.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel",
                description: "Discard edits and return to the image prompt sharing preview"
            }), P[28] = p) : p = P[28], P[29] !== F || P[30] !== H ? (T = (0, _.jsx)(w.a, {
                color: "outline",
                disabled: F,
                onClick: H,
                children: p
            }), P[29] = F, P[30] = H, P[31] = T) : T = P[31], P[32] !== U || P[33] !== F ? (I = !N(U) || F, P[32] = U, P[33] = F, P[34] = I) : I = P[34], P[35] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, _.jsx)(E.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save",
                description: "Apply the edited title and prompt and return to the image sharing preview"
            }), P[35] = A) : A = P[35], P[36] !== F || P[37] !== I ? (G = (0, _.jsx)(w.a, {
                type: "submit",
                color: "primary",
                loading: F,
                disabled: I,
                children: A
            }), P[36] = F, P[37] = I, P[38] = G) : G = P[38], P[39] !== T || P[40] !== G ? (v = (0, _.jsxs)(R.c, {
                expandSingleButton: !1,
                children: [T, G]
            }), P[39] = T, P[40] = G, P[41] = v) : v = P[41], P[42] !== d || P[43] !== u || P[44] !== m || P[45] !== v || P[46] !== i ? (y = (0, _.jsxs)(R.b, {
                as: "form",
                size: "viewport",
                onSubmit: i,
                children: [d, u, m, v]
            }), P[42] = d, P[43] = u, P[44] = m, P[45] = v, P[46] = i, P[47] = y) : y = P[47], P[48] !== F || P[49] !== W || P[50] !== y || P[51] !== a || P[52] !== r ? (O = (0, _.jsx)(L.b, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: W,
                shouldIgnoreClickOutside: F,
                contentProps: a,
                onOpenChange: r,
                children: y
            }), P[48] = F, P[49] = W, P[50] = y, P[51] = a, P[52] = r, P[53] = O) : O = P[53], O
        }

        function U(e) {
            let t, a, r, i, n, s, o, l, d, c, u, m = (0, g.c)(28),
                {
                    content: p,
                    previewSrc: T,
                    alt: E,
                    disabled: I,
                    onSave: A
                } = e,
                G = (0, f.a)(),
                [b, v] = (0, h.useState)(!1),
                y = (0, h.useRef)(null);
            return m[0] !== E || m[1] !== T ? (t = null != T && (0, _.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: E,
                src: T,
                referrerPolicy: "no-referrer"
            }), m[0] = E, m[1] = T, m[2] = t) : t = m[2], m[3] !== G ? (a = G.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt",
                description: "Accessible label for the pencil button that opens the shared image title and prompt editor"
            }), m[3] = G, m[4] = a) : a = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => v(!0), i = (0, _.jsx)(x.Of, {}), m[5] = r, m[6] = i) : (r = m[5], i = m[6]), m[7] !== I || m[8] !== a ? (n = (0, _.jsx)(w.a, {
                ref: y,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: I,
                "aria-label": a,
                onClick: r,
                children: i
            }), m[7] = I, m[8] = a, m[9] = n) : n = m[9], m[10] !== t || m[11] !== n ? (s = (0, _.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, n]
            }), m[10] = t, m[11] = n, m[12] = s) : s = m[12], m[13] !== p.title ? (o = (0, _.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: p.title
            }), m[13] = p.title, m[14] = o) : o = m[14], m[15] !== p.prompt ? (l = (0, _.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: p.prompt
            }), m[15] = p.prompt, m[16] = l) : l = m[16], m[17] !== s || m[18] !== o || m[19] !== l ? (d = (0, _.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [s, o, l]
            }), m[17] = s, m[18] = o, m[19] = l, m[20] = d) : d = m[20], m[21] !== p || m[22] !== b || m[23] !== A ? (c = b && (0, _.jsx)(Y, {
                content: p,
                onSave: A,
                onClose: () => v(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), y.current?.focus()
                }
            }), m[21] = p, m[22] = b, m[23] = A, m[24] = c) : c = m[24], m[25] !== c || m[26] !== d ? (u = (0, _.jsxs)(_.Fragment, {
                children: [d, c]
            }), m[25] = c, m[26] = d, m[27] = u) : u = m[27], u
        }
        var X = a("AuIy"),
            F = a("Wc42"),
            D = a("iqEK"),
            k = a("ccwJ"),
            q = a("Kwur");
        let z = (0, T.v)(A.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function W(e, t, a) {
            K(e, t);
            let r = t.assetPointer,
                i = t.messageId;
            if (null == r || null == i) throw Error("Image prompt share source unavailable");
            let n = e.get(z, t);
            if (null != n.publication) return n.publication;
            let s = n.idempotencyKey ?? crypto.randomUUID();
            e.set(z, t, {
                ...n,
                idempotencyKey: s
            });
            try {
                let o = await e.queryClient.fetchQuery({
                    queryKey: ["image-prompt-share-publication", t, s],
                    staleTime: 1 / 0,
                    gcTime: 1 / 0,
                    retry: !1,
                    queryFn: () => q.Request.safePost("/share/prompt-share", {
                        isExpectedError: Q,
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
                return K(e, t), e.set(z, t, e => ({
                    ...e,
                    publication: o
                })), o
            } catch (a) {
                throw a instanceof b.a && Q(a) && e.set(z, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }
        async function V(e, t, a, r) {
            K(e, t);
            let i = e.get(z, t),
                n = null == i.idempotencyKey ? i.publication : await W(e, t, a),
                s = r;
            if (null != n) {
                let e = await q.Request.safePatch("/share/post/{post_id}/prompt-share", {
                    isExpectedError: Q,
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
            K(e, t), e.set(z, t, e => ({
                ...e,
                editedContent: s,
                publication: null == e.publication ? null : {
                    ...e.publication,
                    title: s.title
                },
                revision: e.revision + 1
            }))
        }

        function K(e, t) {
            if (null == t.accountId || null == t.userId || e.get(n.e) !== t.accountId || e.get(n.i) !== t.userId) throw Error("Image prompt share account changed")
        }

        function Q(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function $(e) {
            let t, a, r, i, s, l, d, c, u, w, x, M, L, R = (0, g.c)(65),
                B = (0, T.y)(A.a),
                j = (0, f.a)(),
                Y = (0, T.z)(n.e),
                q = (0, T.z)(n.i);
            R[0] !== Y || R[1] !== q ? (t = {
                accountId: Y,
                userId: q
            }, R[0] = Y, R[1] = q, R[2] = t) : t = R[2];
            let [K] = (0, h.useState)(t), Q = (0, G.h)("2496586795"), $ = (0, G.h)("1939400492"), Z = (0, G.m)("250422953"), [J, ee] = (0, h.useState)("image"), et = e.image, ea = et?.item.isAnimated === !0, er = K.accountId === Y && K.userId === q, ei = null != et && !et.additionalImages?.length && null != Y && null != q && er && Q && !$;
            R[3] !== ei || R[4] !== Z ? (a = ei && Z.get("imagegen_prompt_share_tabs_enabled", !1), R[3] = ei, R[4] = Z, R[5] = a) : a = R[5];
            let en = a,
                es = et?.item.id;
            R[6] !== Y || R[7] !== e.serverConversationId || R[8] !== es || R[9] !== q ? (r = ["image-prompt-share-source", Y, q, e.serverConversationId, es], R[6] = Y, R[7] = e.serverConversationId, R[8] = es, R[9] = q, R[10] = r) : r = R[10], R[11] !== et || R[12] !== e.serverConversationId || R[13] !== B ? (i = async t => {
                let {
                    signal: a
                } = t;
                if (null == et) return null;
                let r = (0, S.c)(e.serverConversationId),
                    i = B.get(P.a, r) ?? r,
                    n = () => {
                        let e = B.get(C.L, i) ?? B.query.getData(v.chatGptConversationQueryById$, r)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, k.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, r] = a, i = a[1].message, n = (0, k.b)(i, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (n?.src == null || "completed" !== n.status || !(0, D.d)(n.src)) return null;
                            let s = (0, X.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == s || (0, X.k)(s)) return null;
                            let o = (0, X.o)(i.content),
                                l = (Array.isArray(o?.parts) ? o.parts : []).map(X.o).find(e => e?.asset_pointer === n.src || (0, X.o)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, X.o)(l?.image_asset_pointer) ?? l,
                                c = (0, F.a)((0, X.o)((0, X.o)(d?.metadata)?.dalle)?.prompt) ?? (0, F.a)((0, X.d)(s)),
                                u = (0, F.a)(i.id);
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
                return null != s ? s : (await (0, H.a)(B, r, a), n())
            }, R[11] = et, R[12] = e.serverConversationId, R[13] = B, R[14] = i) : i = R[14], R[15] !== r || R[16] !== i || R[17] !== en ? (s = {
                enabled: en,
                queryKey: r,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: i
            }, R[15] = r, R[16] = i, R[17] = en, R[18] = s) : s = R[18];
            let {
                data: eo
            } = (0, p.a)(s), el = eo?.messageId ?? null, ed = eo?.assetPointer ?? null;
            R[19] !== Y || R[20] !== e.serverConversationId || R[21] !== el || R[22] !== ed || R[23] !== q ? (l = {
                accountId: Y,
                userId: q,
                conversationId: e.serverConversationId,
                messageId: el,
                assetPointer: ed
            }, R[19] = Y, R[20] = e.serverConversationId, R[21] = el, R[22] = ed, R[23] = q, R[24] = l) : l = R[24];
            let ec = l,
                {
                    editedContent: eu,
                    publication: e_
                } = (0, T.x)(z, ec),
                eg = en && null != eo,
                em = eg && "image_with_prompt" === Z.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                ep = eg && "template" === J;
            R[25] !== eu || R[26] !== e_?.title || R[27] !== eo ? (d = eu ?? (null == eo ? void 0 : {
                ...eo.content,
                title: e_?.title ?? eo.content.title
            }), R[25] = eu, R[26] = e_?.title, R[27] = eo, R[28] = d) : d = R[28];
            let eT = d;
            R[29] !== K.accountId || R[30] !== K.userId || R[31] !== B ? (c = function() {
                if (B.get(n.e) !== K.accountId || B.get(n.i) !== K.userId) throw Error("Image prompt share account changed")
            }, R[29] = K.accountId, R[30] = K.userId, R[31] = B, R[32] = c) : c = R[32];
            let eh = c;
            R[33] !== eT || R[34] !== et?.item || R[35] !== e.source || R[36] !== eh || R[37] !== B || R[38] !== ec || R[39] !== eo ? (u = async function(t) {
                let a;
                if (eh(), null == eo || null == eT || !N(eT)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await W(B, ec, eo.content)
                } catch (e) {
                    if (e instanceof b.a && "prompt_share_not_publishable" === e.errorCode) throw new y.a;
                    throw e
                }
                if (eh(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, o.a)(B, m, {
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
            }, R[33] = eT, R[34] = et?.item, R[35] = e.source, R[36] = eh, R[37] = B, R[38] = ec, R[39] = eo, R[40] = u) : u = R[40];
            let ef = u;
            if (R[41] !== ea || R[42] !== em ? (w = ea ? (0, _.jsx)(E.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt",
                    description: "Short share-format option in the generated GIF sharing dialog. Shares the animated GIF together with its reusable prompt; the other option is GIF only."
                }) : "image_with_prompt" === em ? (0, _.jsx)(E.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt",
                    description: "Share-format option for sharing the generated image together with its reusable prompt. The other option is Image only."
                }) : (0, _.jsx)(E.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image",
                    description: "Share the reusable prompt together with the generated image"
                }), R[41] = ea, R[42] = em, R[43] = w) : w = R[43], !er) return null;
            let eE = ep ? "template" : "image";
            return R[44] !== j || R[45] !== ea || R[46] !== J || R[47] !== w || R[48] !== eg ? (x = eg ? e => (0, _.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, _.jsx)(I.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: J,
                    onSelect: ee,
                    ariaLabel: j.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format",
                        description: "Label for choosing between sharing an image or its prompt template"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: ea ? (0, _.jsx)(E.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only",
                            description: "Short share-format option in the generated GIF sharing dialog. Shares only the animated GIF; the other option shares the GIF with its reusable prompt."
                        }) : (0, _.jsx)(E.a, {
                            id: "imagePromptShare.imageOnly",
                            defaultMessage: "Image only",
                            description: "Share only the generated image"
                        })
                    }, {
                        id: "template",
                        disabled: e,
                        label: w
                    }]
                })
            }) : void 0, R[44] = j, R[45] = ea, R[46] = J, R[47] = w, R[48] = eg, R[49] = x) : x = R[49], R[50] !== eT || R[51] !== ef || R[52] !== et?.alt || R[53] !== eh || R[54] !== B || R[55] !== ec || R[56] !== eo || R[57] !== em || R[58] !== ep ? (M = ep && null != eT ? {
                label: em,
                createLink: ef,
                actionsDisabled: !N(eT),
                preview: (e, t, a) => (0, _.jsx)(U, {
                    content: eT,
                    previewSrc: t,
                    alt: et?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (eh(), null == eo) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== eT.title.trim() || e.prompt !== eT.prompt) && await V(B, ec, eo.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), eh(), a()
                    }
                })
            } : void 0, R[50] = eT, R[51] = ef, R[52] = et?.alt, R[53] = eh, R[54] = B, R[55] = ec, R[56] = eo, R[57] = em, R[58] = ep, R[59] = M) : M = R[59], R[60] !== e || R[61] !== eE || R[62] !== x || R[63] !== M ? (L = (0, _.jsx)(O.a, {
                ...e,
                imageShareOptions: x,
                imagePromptTemplate: M
            }, eE), R[60] = e, R[61] = eE, R[62] = x, R[63] = M, R[64] = L) : L = R[64], L
        }

        function Z(e, t) {
            let {
                additionalImages: a,
                alt: d,
                image: _,
                isDirectLightboxShare: g,
                previewSrc: m,
                serverConversationId: p,
                source: T = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                title: h
            } = t, f = crypto.randomUUID();
            (0, o.a)(e, r.h, {
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED",
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                conversationId: p,
                shareSessionId: f,
                source: T
            });
            let E = e.get(n.e),
                I = e.get(n.i),
                A = (0, i.d)(),
                G = A && null != E && null != I ? e.get(l.a, "2001123255")?.get("mweb_image_share_sheet_variant", "new_custom") ?? "new_custom" : "new_custom",
                b = e.get(n.d),
                v = "loaded" === b.status && "personal" === b.structure || "loading" === b.status && "personal" === b.structureAtLogin,
                y = {
                    additionalImages: a,
                    alt: d,
                    isDirectLightboxShare: g,
                    item: _,
                    previewSrc: m
                },
                O = () => (0, s.f)(e, $, {
                    currentNodeId: _.id,
                    image: y,
                    serverConversationId: p,
                    shareSessionId: f,
                    source: T,
                    title: h,
                    mobileImageSheet: A && ("new_custom" === G || "native_with_fallback" === G && "function" == typeof navigator.share && v),
                    trackMobileImageShareLifecycle: A && "native_with_fallback" === G
                });
            async function P() {
                let t = () => e.get(n.e) === E && e.get(n.i) === I,
                    a = (0, c.a)(e, p, y);
                try {
                    let r = e.queryClient.getQueryData(a.queryKey);
                    if (null == r) return void O();
                    if (!t()) return;
                    if (!v) return void O();
                    let i = await (0, u.b)(e, r, p, f, T);
                    if ("shared" === i) return
                } catch {}
                t() && O()
            }
            A && "native_with_fallback" === G && "function" == typeof navigator.share ? P() : O()
        }
        async function J(e, t) {
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
    rfhJ: (function(e, t, a) {
        var r = a("ozm1"),
            i = a("SavH"),
            n = a("ETwP"),
            s = a("Ci8z"),
            o = a("yGJW"),
            l = a("WFY2"),
            d = a("Kwur");

        function c(e, t, a) {
            let r = a.chatGptMessageId;
            if (null == a.src || null == r) return;
            let {
                generationId: i,
                parentGenerationId: s,
                imageIndex: c
            } = a.chatGptImageMetadata ?? {}, u = {
                mimeType: a.chatGptImageMetadata?.mimeType,
                conversationId: t,
                messageId: r,
                generationId: i,
                parentGenerationId: s,
                imageIndex: c,
                fileId: a.src.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1],
                source: "chat",
                model: "gpt-4o"
            };
            (0, o.a)(e, n.g, {
                legacyStatsigEventName: "chatgpt_image_download",
                metadata: u,
                isParagen: !1
            }), t && r && i && d.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "image_download",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t,
                            message_id: r,
                            image_generation_id: i
                        }
                    }
                }
            }).catch(e => {
                l.a.warning("Failed to record shared image download", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                })
            })
        }

        function u(e, t, a, s, l) {
            if ("share" === s) return void(0, o.a)(e, i.a, {
                button: "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE",
                selectionState: "CHATGPT_IMAGEGEN_SELECTION_STATE_PENDING_SELECTION",
                imageSeriesCount: (0, r.b)(l)
            });
            let {
                generationId: d,
                parentGenerationId: c,
                model: u,
                imageIndex: _,
                sourceOperation: g
            } = a.chatGptImageMetadata ?? {};
            (0, o.a)(e, n.a, {
                metadata: {
                    mimeType: a.chatGptImageMetadata?.mimeType,
                    conversationId: t,
                    messageId: a.chatGptMessageId,
                    generationId: d,
                    parentGenerationId: c,
                    model: u,
                    imageIndex: _,
                    sourceOperation: g,
                    source: "chat",
                    fileId: a.src?.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1]
                },
                downloadableImageCount: (0, r.b)(l),
                selectionState: "pending_selection"
            })
        }

        function _(e, t, a, r) {
            let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "chat";
            if (null == a.chatGptMessageId) return;
            let {
                generationId: l,
                parentGenerationId: d,
                model: c,
                sourceOperation: u,
                imageIndex: _
            } = a.chatGptImageMetadata ?? {}, p = /^(file-service|sediment):\/\//.test(a.src ?? "") ? a.src ?? void 0 : void 0, T = a.src?.match(/^(?:file-service|sediment):\/\/(.+)$/)?.[1], h = "open" === r || "view" === r || r.startsWith("360") ? g() : void 0;
            if (("open" === r || "view" === r) && (null != h && (0, o.a)(e, i.c, {
                    metadata: {
                        sessionId: h,
                        conversationId: t,
                        messageId: a.chatGptMessageId,
                        generationId: l,
                        parentGenerationId: d,
                        fileId: p
                    },
                    source: "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION"
                }), "view" === r) || r.startsWith("360") && null == h) return;
            let f = {
                metadata: {
                    sessionId: h,
                    conversationId: t,
                    messageId: a.chatGptMessageId,
                    generationId: l,
                    parentGenerationId: d,
                    fileId: p
                },
                source: "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION"
            };
            switch (r) {
                case "360Impression":
                    (0, o.a)(e, i.f, f);
                    return;
                case "360Opened":
                    (0, o.a)(e, i.g, f);
                    return;
                case "360Loaded":
                    (0, o.a)(e, i.j, f);
                    return;
                case "360DependencyFailed":
                case "360ImageFailed":
                    (0, o.a)(e, i.h, {
                        ...f,
                        failureType: "360DependencyFailed" === r ? "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_DEPENDENCY_LOAD" : "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_PANORAMA_LOAD"
                    });
                    return
            }
            let E = "paragen" === s,
                I = {
                    mimeType: a.chatGptImageMetadata?.mimeType,
                    conversationId: t,
                    messageId: a.chatGptMessageId,
                    generationId: l,
                    parentGenerationId: d,
                    fileId: T,
                    source: s,
                    model: E ? "gpt-4o" : c,
                    imageIndex: _,
                    hasParent: E && "open" !== r ? !!d : void 0
                };
            if ("open" === r) {
                (0, o.a)(e, n.k, {
                    metadata: {
                        ...I,
                        sourceOperation: u ?? "none"
                    }
                }), E && m(t, a, "open");
                return
            }
            let A = "thumbsUp" === r,
                G = "download" === r ? "chatgpt_imagegen_image_paragen_download" : "chatgpt_imagegen_image_paragen_rating";
            "download" === r ? (0, o.a)(e, n.g, {
                legacyStatsigEventName: E ? G : void 0,
                metadata: I,
                isParagen: E
            }) : (0, o.a)(e, n.h, {
                legacyStatsigEventName: E ? G : void 0,
                ratingType: E ? "CHATGPT_IMAGEGEN_IMAGE_RATING_TYPE_PARAGEN" : "CHATGPT_IMAGEGEN_IMAGE_RATING_TYPE_IMAGEGEN",
                metadata: I,
                liked: A
            }), E && m(t, a, r)
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

        function m(e, t, a) {
            let r = t.chatGptImageMetadata?.generationId,
                i = t.chatGptMessageId;
            if (!r || !e || !i) return;
            let n = "open" === a ? "image_view_full" : "download" === a ? "imagegen_image_paragen_download" : "imagegen_image_paragen_rating";
            d.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: n,
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: e,
                            message_id: i,
                            image_generation_id: r
                        },
                        imagegen_image_paragen_rating: "imagegen_image_paragen_rating" === n ? {
                            rating: "thumbsUp" === a ? "thumbs_up" : "thumbs_down"
                        } : void 0
                    }
                }
            }).catch(e => {
                l.a.warning("Failed to record Paragen image interaction", {
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
            b: () => _,
            c: () => u,
            d: () => c
        })
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
            _ = a("gbRX"),
            g = a("hwXH"),
            m = a("FGJH");
        async function p(e, t, a) {
            if (e.get(m.c, t)?.complete === !0) return;
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
                    return s.assertRequestCurrent(), a?.aborted || e.get(n.a) !== r || ((0, i.flushSync)(() => (0, u.gc)(e, c, {
                        mergeActiveBranch: !0,
                        preserveAsyncStatus: !0
                    })), e.query.setData(l.chatGptConversationQueryById$, t, c)), c
                }
            })
        }
        async function T(e, t, a) {
            let i = e.get(m.c, t);
            if (null == i || i.complete || i.isLoading || null == i.cursor || null == i.oldestMessageId) return;
            let {
                cursor: p,
                oldestMessageId: T
            } = i, f = e.get(n.a), E = (0, g.c)(e, t), I = {
                ...i,
                isLoading: !0,
                hasError: !1
            }, A = () => {
                let a = e.get(m.c, t);
                return e.get(n.a) === f && null != a && !a.complete && a.cursor === p && a.oldestMessageId === T
            };
            try {
                E.assertRequestCurrent(), e.set(m.c, t, I);
                let n = new Set,
                    G = p,
                    b = async () => {
                        n.add(G);
                        let a = await e.queryClient.fetchQuery({
                            queryKey: ["chatgpt-conversation-page", E.expectedIdentity?.accountId ?? f, t, G],
                            staleTime: 0,
                            retry: (e, t) => e < 1 && "AbortError" !== t.name && !h(t) && !(t instanceof o.a && 429 === t.responseStatus),
                            queryFn: a => {
                                let {
                                    signal: r
                                } = a;
                                return (0, _.c)(e, "page", r, () => d.Request.safeGet("/conversations/{conversation_id}/messages", {
                                    ...E,
                                    retry: "except-rate-limit",
                                    parameters: {
                                        path: {
                                            conversation_id: t
                                        },
                                        query: {
                                            before: G,
                                            num_turns: i.numTurns,
                                            include_has_versions: !0
                                        }
                                    },
                                    additionalHeaders: {
                                        ...(0, g.b)(e, t),
                                        ...E.additionalHeaders
                                    },
                                    signal: r
                                }).finally(() => {
                                    r.throwIfAborted(), E.assertRequestCurrent()
                                }))
                            }
                        });
                        return E.assertRequestCurrent(), (0, s.a)(e, r.b, {
                            conversationId: t,
                            messageCount: a.messages.length,
                            hasMoreMessages: a.page_info.has_previous_page
                        }), a
                    }, v = await b(), y = v.page_info.has_previous_page ? v.page_info.start_cursor ?? null : null;
                for (; 0 === v.messages.length && null != y;) {
                    if (!A()) return;
                    if (n.has(y)) throw Error("Conversation pagination cursor did not advance");
                    G = y;
                    let e = await b();
                    y = (v = {
                        ...e,
                        safe_urls: [...v.safe_urls ?? [], ...e.safe_urls ?? []],
                        blocked_urls: [...v.blocked_urls ?? [], ...e.blocked_urls ?? []]
                    }).page_info.has_previous_page ? v.page_info.start_cursor ?? null : null
                }
                if (!A()) return;
                if (null != y && n.has(y)) throw Error("Conversation pagination cursor did not advance");
                E.assertRequestCurrent(), a(() => {
                    let a = (0, u.Cb)(e, (0, c.c)(t), v.messages, T);
                    e.set(m.c, t, {
                        ...i,
                        cursor: y,
                        oldestMessageId: a,
                        isLoading: !1,
                        hasError: !1,
                        hasLoadedOlderPages: !0
                    })
                }), e.query.setData(l.chatGptConversationQueryById$, t, e => null == e ? e : {
                    ...e,
                    safe_urls: [...new Set([...e.safe_urls ?? [], ...v.safe_urls ?? []])],
                    blocked_urls: [...new Set([...e.blocked_urls ?? [], ...v.blocked_urls ?? []])]
                })
            } catch (r) {
                if (r instanceof Error && "AbortError" === r.name || !A()) return;
                if (h(r)) try {
                    let r = await (0, g.a)(e, t);
                    if (E.assertRequestCurrent(), !A()) return;
                    a(() => {
                        e.set(m.c, t, {
                            ...i,
                            isLoading: !1,
                            hasLoadedOlderPages: !1
                        }), (0, u.gc)(e, r, {
                            preserveAsyncStatus: !0
                        })
                    });
                    return
                } catch (e) {
                    if (e instanceof Error && "AbortError" === e.name) return
                }
                A() && e.set(m.c, t, {
                    ...i,
                    isLoading: !1,
                    hasError: !0
                })
            } finally {
                e.get(m.c, t) === I && e.set(m.c, t, {
                    ...I,
                    isLoading: !1
                })
            }
        }

        function h(e) {
            return e instanceof o.a && 400 === e.responseStatus && "invalid_cursor" === e.errorCode
        }
        a.d(t, {
            a: () => p,
            b: () => T
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
            _ = a("Yscs"),
            g = a("GDNt");
        let m = (0, r.v)(c.a, e => null),
            p = (0, r.j)(c.a, (e, t) => {
                let r, {
                        image: s,
                        imageAssetResolver: c
                    } = e,
                    {
                        signal: p,
                        scope: T
                    } = t,
                    E = s?.gifPlayback?.originalSrc ?? s?.src,
                    I = JSON.stringify([s?.id, E]),
                    A = 0,
                    G = Promise.resolve(),
                    b = p({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (s?.isAnimated) return T.watch(t => {
                                if (0 !== A) return;
                                let a = t.get(m, I),
                                    r = a ?? h(t, s)?.gifPlayback?.speed ?? 1;
                                (null != a || 1 !== r) && (e({
                                    preview: null,
                                    busy: !0
                                }), P(r, !1))
                            })
                        }
                    }),
                    v = async e => {
                        let t = null != e && (0, u.g)(e) && null != c ? await (0, u.a)(T.queryClient, e, c) : e,
                            a = null == t ? null : await (0, l.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, y = () => (null == r && (r = v(E).catch(e => {
                        throw r = void 0, e
                    })), r), O = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E,
                            r = b.get().preview;
                        if (r?.speed === e && r.originalSrc === t) return r;
                        let i = (t === s?.watermarkedSrc ? s?.gifPlayback?.watermarkedVariants : s?.gifPlayback?.variants)?.[String(e)],
                            n = null == i ? null : await v(i).catch(() => null),
                            o = n ?? (t === E ? await y() : await v(t)),
                            l = null != n || 1 === e ? o : await (await a.e(764968).then(a.bind(a, "TPR0"))).withGifPlaybackSpeed(o, e);
                        return {
                            assetSrc: null != n ? i : void 0,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, _.a)(l),
                            sizeBytes: l.size
                        }
                    }, P = async (e, t) => {
                        let a = ++A;
                        b.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let r = await O(e);
                            if (a !== A) return !1;
                            return b.set({
                                preview: r,
                                busy: !1
                            }), t && (T.set(m, I, e), G = G.then(async () => {
                                if (a !== A || "chatgpt-thread" !== T.value.routeKind || s?.chatGptMessageId == null || null == E) return;
                                let t = T.get(n.j, T.value.conversationId);
                                null != t && await i.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: s.chatGptMessageId,
                                        asset_pointer: E,
                                        selected_speed: e
                                    },
                                    expectedErrorStatuses: [404, 405]
                                })
                            }).catch(e => {
                                e instanceof g.a && (404 === e.status || 405 === e.status) || T.get(o.f).danger(T.get(d.a).formatMessage({
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
                            return t && a === A && T.get(o.f).danger(T.get(d.a).formatMessage({
                                id: "gifEditor.speedChangeFailed",
                                defaultMessage: "Couldn’t change GIF speed. Try again",
                                description: "Error shown when a generated GIF could not be loaded or retimed after choosing a playback speed"
                            }), {
                                errorAnalytics: {
                                    toastId: "gifEditor.speedChangeFailed"
                                }
                            }), !1
                        } finally {
                            a === A && b.set(e => ({
                                ...e,
                                busy: !1
                            }))
                        }
                    };
                return {
                    state$: b,
                    loadOriginal: y,
                    loadExport: async e => v((await O(e)).src),
                    changeSpeed: e => P(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let r = b.get().preview?.speed ?? T.get(m, I) ?? e.gifPlayback?.speed ?? 1,
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
                        let n = await O(r, t);
                        return f(i, a && null != n.assetSrc ? {
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
            T = (0, r.d)(c.a, (e, t) => {
                let {
                    image: a,
                    conversationId: r,
                    imageAssetResolver: i
                } = e, {
                    scope: n
                } = t, s = h(n, a, r), o = n.get(p, {
                    image: s?.isAnimated === !0 ? s : void 0,
                    imageAssetResolver: i
                }), {
                    preview: l
                } = n.get(o.state$);
                return {
                    playback: o,
                    previewSrc: l?.src,
                    image: null == s ? void 0 : f(s, l),
                    originalSrc: s?.isAnimated === !0 ? s.gifPlayback?.originalSrc ?? s.src : s?.src,
                    canControl: a?.isAnimated === !0 && null != a.gifPlayback && "chatgpt-thread" === n.value.routeKind
                }
            });

        function h(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(s.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function f(e, t) {
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
            a: () => f,
            b: () => h
        }, {
            c: p,
            d: T
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
            let _ = null == o ? void 0 : "toolbar",
                g = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                m = "imageTools" === u && "gap-0 shadow-md",
                p = "playback" === u && "gap-2 shadow-sm";
            return s[4] !== d || s[5] !== g || s[6] !== m || s[7] !== p ? (t = (0, n.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", g, m, p, d), s[4] = d, s[5] = g, s[6] = m, s[7] = p, s[8] = t) : t = s[8], s[9] !== o || s[10] !== l || s[11] !== _ || s[12] !== t ? (a = (0, r.jsx)("div", {
                role: _,
                "aria-label": o,
                className: t,
                children: l
            }), s[9] = o, s[10] = l, s[11] = _, s[12] = t, s[13] = a) : a = s[13], a
        }
        a.d(t, {
            a: () => s
        })
    }),
    eYeG: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("zd8w"),
            s = a("Qgfj"),
            o = a("aqd9"),
            l = a("POjP");

        function d(e) {
            let t, a, s, d = (0, i.c)(6),
                {
                    generationStartedAtMs: _,
                    isActive: g
                } = e,
                m = void 0 === g || g,
                [p, T] = (0, n.useState)(c),
                h = (0, n.useRef)(null);
            return d[0] !== _ || d[1] !== m ? (t = () => {
                let e, t = h.current;
                if (null == t) return;
                let a = t.ownerDocument,
                    r = !1,
                    i = () => {
                        let t = (0, l.a)(Date.now() - _);
                        return T(t), 99 === t && (clearInterval(e), e = void 0), t
                    },
                    n = () => {
                        clearInterval(e), e = void 0, r && !a.hidden && 99 > i() && (e = setInterval(i, 500))
                    };
                if (i(), !m) return;
                a.addEventListener("visibilitychange", n);
                let s = (0, o.a)(t, e => {
                    r = e, n()
                });
                return () => {
                    s?.(), a.removeEventListener("visibilitychange", n), clearInterval(e)
                }
            }, a = [_, m], d[0] = _, d[1] = m, d[2] = t, d[3] = a) : (t = d[2], a = d[3]), (0, n.useLayoutEffect)(t, a), d[4] !== p ? (s = (0, r.jsx)(u, {
                ref: h,
                progress: p
            }), d[4] = p, d[5] = s) : s = d[5], s
        }

        function c() {
            return (0, l.a)(0)
        }

        function u(e) {
            let t, a, n = (0, i.c)(5),
                {
                    progress: o,
                    ref: l
                } = e,
                d = o / 100;
            return n[0] !== d ? (t = (0, r.jsx)(s.c, {
                value: d,
                style: "percent"
            }), n[0] = d, n[1] = t) : t = n[1], n[2] !== l || n[3] !== t ? (a = (0, r.jsx)("span", {
                ref: l,
                className: "pointer-events-none absolute end-3.5 bottom-3.5 z-10 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-card/80 px-2 body-sm font-medium text-[color:var(--color-image-generation-text,var(--color-text-info))] tabular-nums shadow-lg ring-[0.5px] ring-border backdrop-blur-md select-none",
                children: t
            }), n[2] = l, n[3] = t, n[4] = a) : a = n[4], a
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

        function i(e) {
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
        a.d(t, {
            a: () => i
        })
    }),
    ghCJ: (function(e, t, a) {
        a.d(t, {
            a: () => g
        });
        var r = a("ABep"),
            i = a("QosV"),
            n = a("on57"),
            s = a("zd8w"),
            o = a("Wf1j"),
            l = a("aqd9"),
            d = a("T1PX"),
            c = a("a6Zv"),
            u = a("eYeG");
        let _ = {
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
            let t, a, s, l, d, c, _ = (0, i.c)(22),
                {
                    ariaLabel: g,
                    background: p,
                    generationStartedAtMs: T,
                    isAnimating: h,
                    presentation: f,
                    previewSrc: E
                } = e,
                I = void 0 === h || h,
                A = void 0 === f ? "default" : f,
                G = (0, o.a)(),
                b = A;
            "single" === b ? b = "playground" : "fill" === b && (b = "default"), _[0] !== g || _[1] !== G ? (t = g ?? G.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image...",
                description: "Aria label for the image generation loading placeholder"
            }), _[0] = g, _[1] = G, _[2] = t) : t = _[2];
            let v = null != E ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
                y = null == E && "surface" === (void 0 === p ? "surface" : p) && ("single" === A ? "bg-surface-secondary" : "dark:bg-primary-ghost-hover bg-primary-soft-active");
            _[3] !== A || _[4] !== v || _[5] !== y ? (a = (0, n.b)("overflow-clip", v, y, "fill" === A ? "absolute inset-0 size-full" : ["relative aspect-square", "thumbnail" === A ? "rounded-lg" : "rounded-2xl", "single" === A ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]"]), _[3] = A, _[4] = v, _[5] = y, _[6] = a) : a = _[6], _[7] !== E ? (s = null != E ? (0, r.jsx)("img", {
                alt: "",
                className: "pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover opacity-70 blur-3xl",
                src: E,
                referrerPolicy: "no-referrer"
            }) : null, _[7] = E, _[8] = s) : s = _[8];
            let O = null != E;
            return _[9] !== b || _[10] !== I || _[11] !== O ? (l = (0, r.jsx)(m, {
                isAnimating: I,
                overImage: O,
                presentation: b
            }), _[9] = b, _[10] = I, _[11] = O, _[12] = l) : l = _[12], _[13] !== T || _[14] !== I ? (d = null != T ? (0, r.jsx)(u.a, {
                generationStartedAtMs: T,
                isActive: I
            }, T) : null, _[13] = T, _[14] = I, _[15] = d) : d = _[15], _[16] !== l || _[17] !== d || _[18] !== t || _[19] !== a || _[20] !== s ? (c = (0, r.jsxs)("div", {
                "aria-busy": !0,
                "aria-label": t,
                className: a,
                children: [s, l, d]
            }), _[16] = l, _[17] = d, _[18] = t, _[19] = a, _[20] = s, _[21] = c) : c = _[21], c
        }

        function m(e) {
            let t, a, o, u, g, m = (0, i.c)(17),
                {
                    isAnimating: E,
                    overImage: I,
                    presentation: A
                } = e,
                G = (0, d.a)(),
                b = (0, c.a)(),
                v = (0, s.useRef)(null),
                y = (0, s.useRef)(null);
            m[0] !== E || m[1] !== b || m[2] !== A || m[3] !== G ? (t = () => {
                if (!E) return;
                let e = v.current,
                    t = y.current,
                    a = t?.getContext("2d");
                if (null == e || null == t || null == a) return;
                let r = 2 * Math.PI,
                    i = getComputedStyle(e).color || (b ? "white" : "black"),
                    n = (e, t) => e + (G ? .5 : Math.random()) * (t - e),
                    s = e => 1.2 * e * n(1, 1.35),
                    o = {
                        durations: {
                            offsetX1: s(4500),
                            offsetY1: s(6330),
                            offsetX2: s(5600),
                            offsetY2: s(5750),
                            fieldSize1: s(3600),
                            fieldSize2: s(2400)
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
                    g = !0,
                    m = null,
                    I = !1,
                    O = n => {
                        var s, l, E, I, b, v, y, P, S, C, H, w;
                        if (!G && 0 !== c && n - c < 33.333333333333336) {
                            d = requestAnimationFrame(O);
                            return
                        }
                        if (c = n, null == m && (m = n), (g || null == u) && (() => {
                                let a = e.getBoundingClientRect(),
                                    r = Math.max(0, Math.floor(a.width)),
                                    i = Math.max(0, Math.floor(a.height));
                                if (0 === r || 0 === i) {
                                    u = null, g = !1;
                                    return
                                }
                                let n = Math.max(1, window.devicePixelRatio || 1),
                                    s = Math.floor(r * n),
                                    o = Math.floor(i * n);
                                (t.width !== s || t.height !== o) && (t.width = s, t.height = o);
                                let l = "default" === A ? Math.max(1, 12 / n) : _[A].spacing,
                                    d = Math.max(1, Math.floor(r / l)),
                                    c = Math.max(1, Math.floor(i / l)),
                                    m = (r - (d - 1) * l) * .5,
                                    p = (i - (c - 1) * l) * .5,
                                    T = new Float32Array(d),
                                    h = new Float32Array(c),
                                    f = new Float32Array(d),
                                    E = new Float32Array(c);
                                for (let e = 0; e < d; e += 1) T[e] = m + e * l, f[e] = 1 === d ? .5 : e / (d - 1);
                                for (let e = 0; e < c; e += 1) h[e] = p + e * l, E[e] = 1 === c ? .5 : e / (c - 1);
                                u = {
                                    width: r,
                                    height: i,
                                    dpr: n,
                                    spacing: l,
                                    xPositions: T,
                                    yPositions: h,
                                    xNormals: f,
                                    yNormals: E
                                }, g = !1
                            })(), null == u) {
                            d = null;
                            return
                        }
                        let x = G ? 0 : n - m,
                            M = (e, t) => {
                                let a;
                                return (a = (x / e + t) % 1) <= .5 ? 2 * a : 2 - 2 * a
                            },
                            L = (s = o.bounds.x1Start, l = o.bounds.x1End, s + (l - s) * f(M(o.durations.offsetX1, o.phases.offsetX1))),
                            R = (E = o.bounds.y1Start, I = o.bounds.y1End, E + (I - E) * h(M(o.durations.offsetY1, o.phases.offsetY1))),
                            N = (b = o.bounds.x2Start, v = o.bounds.x2End, b + (v - b) * f(M(o.durations.offsetX2, o.phases.offsetX2))),
                            B = (y = o.bounds.y2Start, P = o.bounds.y2End, y + (P - y) * h(M(o.durations.offsetY2, o.phases.offsetY2))),
                            j = .78 * (S = o.fieldSizeRange.firstStart, C = o.fieldSizeRange.firstEnd, S + (C - S) * h(M(o.durations.fieldSize1, o.phases.fieldSize1))),
                            Y = .78 * (H = o.fieldSizeRange.secondStart, w = o.fieldSizeRange.secondEnd, H + (w - H) * h(M(o.durations.fieldSize2, o.phases.fieldSize2)));
                        a.save(), a.setTransform(u.dpr, 0, 0, u.dpr, 0, 0), a.clearRect(0, 0, u.width, u.height), a.fillStyle = i;
                        let U = "default" === A ? Math.max(.55, .5 * u.spacing * .16) : _[A].radius;
                        for (let e = 0; e < u.yPositions.length; e += 1) {
                            let t = u.yPositions[e],
                                i = u.yNormals[e];
                            for (let e = 0; e < u.xPositions.length; e += 1) {
                                let n = u.xPositions[e],
                                    s = u.xNormals[e],
                                    o = Math.pow(p((1 - T(0, j, Math.hypot(s - L, i - R))) * 1.2 + (1 - T(0, Y, Math.hypot(s - N, i - B))) * .82), 1.18);
                                o <= .03 || (a.globalAlpha = o, a.beginPath(), a.moveTo(n + U, t), a.arc(n, t, U, 0, r), a.fill())
                            }
                        }
                        a.restore(), d = G ? null : requestAnimationFrame(O)
                    },
                    P = new ResizeObserver(() => {
                        g = !0, I && null == d && (d = requestAnimationFrame(O))
                    });
                P.observe(e);
                let S = (0, l.a)(e, e => {
                    (I = e) ? null == d && (d = requestAnimationFrame(O)): null != d && (cancelAnimationFrame(d), d = null)
                });
                return () => {
                    S?.(), null != d && cancelAnimationFrame(d), P.disconnect()
                }
            }, m[0] = E, m[1] = b, m[2] = A, m[3] = G, m[4] = t) : t = m[4], m[5] !== E || m[6] !== b || m[7] !== I || m[8] !== A || m[9] !== G ? (a = [E, b, I, A, G], m[5] = E, m[6] = b, m[7] = I, m[8] = A, m[9] = G, m[10] = a) : a = m[10], (0, s.useEffect)(t, a);
            let O = I && "overImage-KmHrEc",
                P = (!E || G) && "reducedMotion-ttnr0y";
            return m[11] !== O || m[12] !== P ? (o = (0, n.b)("dots-avXrIV", O, P), m[11] = O, m[12] = P, m[13] = o) : o = m[13], m[14] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)("canvas", {
                ref: y,
                "aria-hidden": !0,
                className: "block h-full w-full"
            }), m[14] = u) : u = m[14], m[15] !== o ? (g = (0, r.jsx)("div", {
                ref: v,
                className: o,
                children: u
            }), m[15] = o, m[16] = g) : g = m[16], g
        }

        function p(e) {
            return Math.min(1, Math.max(0, e))
        }

        function T(e, t, a) {
            let r = p((a - e) / (t - e));
            return r * r * (3 - 2 * r)
        }

        function h(e) {
            return e * e * (3 - 2 * e)
        }

        function f(e) {
            return e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
        }
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
            _ = a("UxN3"),
            g = a("ddzD"),
            m = a("I0AH"),
            p = a("mDqV"),
            T = a("ZedP"),
            h = a("qgx6"),
            f = a("thT2");

        function E(e) {
            let t, a, E, I, A, G, b, v = (0, i.c)(53),
                {
                    downloadImageCount: y,
                    floatingToolbarVariant: O,
                    moreActions: P,
                    isAnimated: S,
                    isImageActionsDisabled: C,
                    isUnifiedViewerEnabled: H,
                    onDownload: w,
                    onDownloadAll: x,
                    onDownloadMenuOpen: M,
                    onShare: L,
                    onShareAll: R,
                    onShareMenuOpen: N,
                    saveAction: B,
                    shareImageCount: j,
                    showShareText: Y
                } = e,
                U = void 0 !== S && S,
                X = void 0 !== H && H,
                F = void 0 !== Y && Y,
                D = (0, s.a)(),
                [k, q] = (0, n.useState)(!1),
                z = "toolbar";
            null != O && (z = "imageTools" === O ? "imageToolbar" : "composerSm"), v[0] !== z || v[1] !== O || v[2] !== D || v[3] !== C || v[4] !== X || v[5] !== L || v[6] !== R || v[7] !== F ? (t = X ? (0, r.jsxs)(p.c, {
                "aria-label": D.formatMessage({
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                }),
                disabled: C,
                uniform: !F,
                onClick: null == R ? L : void 0,
                children: [(0, r.jsx)(_.b, {
                    icon: {
                        16: u.L,
                        20: u.M
                    }
                }), F ? (0, r.jsx)(o.a, {
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                }) : null]
            }) : (0, r.jsx)(l.a, {
                color: null == O ? "primary" : "ghostActive",
                disabled: C,
                size: z,
                onClick: null == R ? L : void 0,
                children: (0, r.jsx)(o.a, {
                    id: "imageSidePanel.share",
                    defaultMessage: "Share",
                    description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                })
            }), v[0] = z, v[1] = O, v[2] = D, v[3] = C, v[4] = X, v[5] = L, v[6] = R, v[7] = F, v[8] = t) : t = v[8];
            let W = t;
            if (null != L && null != R) {
                let e;
                v[9] !== U || v[10] !== C || v[11] !== L || v[12] !== R || v[13] !== N || v[14] !== W || v[15] !== j ? (e = (0, r.jsx)(T.a, {
                    disabled: C,
                    imageCount: j,
                    isAnimated: U,
                    onOpen: N,
                    onShare: L,
                    onShareAll: R,
                    triggerButton: W
                }), v[9] = U, v[10] = C, v[11] = L, v[12] = R, v[13] = N, v[14] = W, v[15] = j, v[16] = e) : e = v[16], W = e
            }
            if (null != O) {
                let e;
                v[17] !== O || v[18] !== W ? (e = (0, r.jsx)(m.a, {
                    variant: O,
                    children: W
                }), v[17] = O, v[18] = W, v[19] = e) : e = v[19], W = e
            }
            v[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                q(!0), await e().finally(() => {
                    q(!1)
                })
            }, v[20] = a) : a = v[20];
            let V = a;
            v[21] !== z || v[22] !== y || v[23] !== O || v[24] !== D || v[25] !== U || v[26] !== k || v[27] !== C || v[28] !== X || v[29] !== w || v[30] !== x || v[31] !== M || v[32] !== B ? (E = null != x && null != w ? (0, r.jsxs)(d.a, {
                align: "end",
                disabled: C || k,
                onOpenChange: e => {
                    e && M?.()
                },
                triggerButton: X ? (0, r.jsx)(p.c, {
                    "aria-label": D.formatMessage((0, g.a)({
                        isAnimated: U
                    }).downloadLabel),
                    disabled: C || k,
                    loading: k,
                    uniform: !0,
                    children: (0, r.jsx)(_.b, {
                        icon: {
                            assets: {
                                16: h.a,
                                20: f.a
                            }
                        }
                    })
                }) : (0, r.jsx)(l.a, {
                    "aria-label": D.formatMessage((0, g.a)({
                        isAnimated: U
                    }).downloadLabel),
                    color: null == O ? "ghost" : "ghostActive",
                    disabled: C || k,
                    loading: k,
                    size: z,
                    uniform: !0,
                    children: "compact" === O ? (0, r.jsx)(c.a, {
                        asset: h.a
                    }) : (0, r.jsx)(u.r, {})
                }),
                children: [(0, r.jsx)(d.c.Item, {
                    onSelect: () => void V(w),
                    children: (0, r.jsx)(o.a, {
                        ...(0, g.a)({
                            isAnimated: U
                        }).downloadMenuLabel
                    })
                }), (0, r.jsx)(d.c.Item, {
                    onSelect: () => void V(x),
                    children: (0, r.jsx)(o.a, {
                        id: "imagePreview.downloadSeries",
                        defaultMessage: "Download {count} images in this series",
                        description: "Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.",
                        values: {
                            count: y
                        }
                    })
                })]
            }) : B, v[21] = z, v[22] = y, v[23] = O, v[24] = D, v[25] = U, v[26] = k, v[27] = C, v[28] = X, v[29] = w, v[30] = x, v[31] = M, v[32] = B, v[33] = E) : E = v[33];
            let K = E;
            if (null != O && null != x && null != w) {
                let e;
                v[34] !== K || v[35] !== O ? (e = (0, r.jsx)(m.a, {
                    variant: O,
                    children: K
                }), v[34] = K, v[35] = O, v[36] = e) : e = v[36], K = e
            }
            let Q = null == L ? null : W;
            v[37] !== K || v[38] !== Q ? (I = (0, r.jsxs)(r.Fragment, {
                children: [K, Q]
            }), v[37] = K, v[38] = Q, v[39] = I) : I = v[39];
            let $ = I;
            v[40] !== O || v[41] !== P ? (A = null == P || null == O ? P : (0, r.jsx)(m.a, {
                variant: O,
                children: P
            }), v[40] = O, v[41] = P, v[42] = A) : A = v[42];
            let Z = A,
                J = null != L || null != K;
            if (!X || F) {
                let e;
                return v[43] !== $ || v[44] !== Z ? (e = (0, r.jsxs)(r.Fragment, {
                    children: [$, Z]
                }), v[43] = $, v[44] = Z, v[45] = e) : e = v[45], e
            }
            return v[46] !== J || v[47] !== D || v[48] !== $ ? (G = J ? (0, r.jsx)(p.i, {
                label: D.formatMessage({
                    id: "imagePreview.headerActions",
                    defaultMessage: "Image actions",
                    description: "Accessible label for the image viewer's Share and Download actions group"
                }),
                children: $
            }) : null, v[46] = J, v[47] = D, v[48] = $, v[49] = G) : G = v[49], v[50] !== G || v[51] !== Z ? (b = (0, r.jsxs)(r.Fragment, {
                children: [G, Z]
            }), v[50] = G, v[51] = Z, v[52] = b) : b = v[52], b
        }
        a.d(t, {
            a: () => E
        })
    }),
    ZedP: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("oyxz"),
            s = a("bqtn"),
            o = a("HOLv"),
            l = a("ddzD"),
            d = a("KidR"),
            c = a("fiK2");

        function u(e) {
            let t, a, u, _, g, m, p, T = (0, i.c)(19),
                {
                    disabled: h,
                    imageCount: f,
                    isAnimated: E,
                    onOpen: I,
                    onShare: A,
                    onShareAll: G,
                    triggerButton: b
                } = e,
                v = void 0 !== E && E;
            return T[0] !== I ? (t = e => {
                e && I?.()
            }, T[0] = I, T[1] = t) : t = T[1], T[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(o.a, {
                className: "text-gray-1000",
                asset: d.a
            }), T[2] = a) : a = T[2], T[3] !== v ? (u = (0, l.a)({
                isAnimated: v
            }), T[3] = v, T[4] = u) : u = T[4], T[5] !== u.shareSelectionLabel ? (_ = (0, r.jsx)(n.a, {
                ...u.shareSelectionLabel
            }), T[5] = u.shareSelectionLabel, T[6] = _) : _ = T[6], T[7] !== A || T[8] !== _ ? (g = (0, r.jsx)(s.c.Item, {
                leftIcon: a,
                onSelect: A,
                children: _
            }), T[7] = A, T[8] = _, T[9] = g) : g = T[9], T[10] !== f || T[11] !== G ? (m = null == G ? null : (0, r.jsx)(s.c.Item, {
                leftIcon: (0, r.jsx)(o.a, {
                    className: "text-gray-1000",
                    asset: c.a
                }),
                onSelect: G,
                children: (0, r.jsx)(n.a, {
                    id: "imagePreview.shareSeries",
                    defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                    description: "Option in the generated-image Share dropdown that shares every completed image in the selected generation series. imageCount is the number of images included, always greater than one. Keep this menu label concise.",
                    values: {
                        imageCount: f
                    }
                })
            }), T[10] = f, T[11] = G, T[12] = m) : m = T[12], T[13] !== h || T[14] !== t || T[15] !== g || T[16] !== m || T[17] !== b ? (p = (0, r.jsxs)(s.a, {
                align: "end",
                disabled: h,
                triggerButton: b,
                onOpenChange: t,
                children: [g, m]
            }), T[13] = h, T[14] = t, T[15] = g, T[16] = m, T[17] = b, T[18] = p) : p = T[18], p
        }
        a.d(t, {
            a: () => u
        })
    }),
    SavH: (function(e, t, a) {
        var r, i, n, s = ((r = {}).CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_UNSPECIFIED = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_UNSPECIFIED", r.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION", r.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_HOME_LIBRARY = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_HOME_LIBRARY", r.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_LIBRARY = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_LIBRARY", r.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION_CALPICO = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION_CALPICO", r.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION_SHARED = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION_SHARED", r.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_COMPOSER_EDIT = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_COMPOSER_EDIT", r.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_GLOBAL_SEARCH = "CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_GLOBAL_SEARCH", r.UNRECOGNIZED = "UNRECOGNIZED", r),
            o = ((i = {}).CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_UNSPECIFIED = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_UNSPECIFIED", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SAVE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SAVE", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SHARE", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_EDIT = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_EDIT", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_COMPOSER = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_COMPOSER", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_ADD_PHOTO = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_ADD_PHOTO", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_TAKE_PHOTO = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_TAKE_PHOTO", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_STYLE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_STYLE", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SELECT_AREA = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_SELECT_AREA", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_GO_TO_CONVERSATION = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_GO_TO_CONVERSATION", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_LEARN_MORE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_LEARN_MORE", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_THUMB_UP = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_THUMB_UP", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_THUMB_DOWN = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_THUMB_DOWN", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_CLOSE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_CLOSE", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_DELETE_SHARE_LINK = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_DELETE_SHARE_LINK", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_REPORT = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_REPORT", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_ANIMATE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_ANIMATE", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_REMOVE_SOMETHING = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_REMOVE_SOMETHING", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_RESIZE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_RESIZE", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_RESIZE_OPTION = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_RESIZE_OPTION", i.CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_TRY_THIS_STYLE = "CHATGPT_IMAGE_LIGHTBOX_BUTTON_TYPE_TRY_THIS_STYLE", i.UNRECOGNIZED = "UNRECOGNIZED", i),
            l = ((n = {}).CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_UNSPECIFIED = "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_UNSPECIFIED", n.CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_DEPENDENCY_LOAD = "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_DEPENDENCY_LOAD", n.CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_PANORAMA_LOAD = "CHATGPT_IMAGE_LIGHTBOX_THREE_SIXTY_VIEWER_LOAD_FAILURE_TYPE_PANORAMA_LOAD", n.UNRECOGNIZED = "UNRECOGNIZED", n);
        a.d(t, {
            b: () => o,
            e: () => s,
            i: () => l
        }, {
            a: {
                $type: "protobuf_analytics_events.v1.ChatgptImageLightboxButtonTapped"
            },
            c: {
                $type: "protobuf_analytics_events.v1.ChatgptImageLightboxImpression"
            },
            d: {
                $type: "protobuf_analytics_events.v1.ChatgptImageLightboxShareRequestReturned"
            },
            f: {
                $type: "protobuf_analytics_events.v1.ChatgptImageLightboxThreeSixtyEntrypointImpression"
            },
            g: {
                $type: "protobuf_analytics_events.v1.ChatgptImageLightboxThreeSixtyEntrypointTapped"
            },
            h: {
                $type: "protobuf_analytics_events.v1.ChatgptImageLightboxThreeSixtyViewerLoadFailed"
            },
            j: {
                $type: "protobuf_analytics_events.v1.ChatgptImageLightboxThreeSixtyViewerLoaded"
            },
            k: {
                $type: "protobuf_analytics_events.v1.ChatgptWebImageLibraryLightboxImageOpenInChatClicked"
            }
        })
    })
};