export const __rspack_esm_ids = [54071];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("N55g");
        let l = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(153380), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(204542), a.e(982651), a.e(673108), a.e(487481), a.e(229522), a.e(390575), a.e(353032), a.e(637885), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(431630), a.e(589307), a.e(81461), a.e(882456), a.e(145049), a.e(744644), a.e(758939), a.e(992070), a.e(499790), a.e(769185), a.e(301030), a.e(70086), a.e(22085), a.e(909395), a.e(587936), a.e(904817), a.e(452048), a.e(839111), a.e(299268), a.e(219246), a.e(212487), a.e(433520), a.e(17983), a.e(167649), a.e(509282), a.e(523433), a.e(403815), a.e(71991), a.e(729388), a.e(710372)]).then(a.bind(a, "wvL0"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, r.jsx)(n.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: l
        })
    }),
    erFs: (function(e, t, a) {
        a.d(t, {
            a: () => Z,
            b: () => $
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
            x = a("EShr"),
            S = a("OWtl"),
            w = a("hZax"),
            I = a("eShZ"),
            E = a("lBzi"),
            j = a("r9i9"),
            P = a("tdfh"),
            A = a("aFoA"),
            T = a("OOaz"),
            C = a("dQRk"),
            M = a("jfiJ"),
            k = a("Sm6l"),
            R = a("bf6R"),
            L = a("MM0V"),
            O = a("JNtf"),
            G = a("mUDD");

        function F(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var N = a("zLIa");

        function z(e) {
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
            }), s[1] = d, s[2] = c, s[3] = a) : a = s[3], s[4] !== f || s[5] !== d.title || s[6] !== a ? (r = (0, p.jsxs)(G.f, {
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
            }), s[9] = d, s[10] = c, s[11] = n) : n = s[11], s[12] !== d.prompt || s[13] !== n ? (l = (0, p.jsxs)(G.f, {
                children: [i, (0, p.jsx)(N.c, {
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

        function H(e) {
            let t, a, r, i, n, l, o, s, d, c, u, m, h, f, b, x, S, w, E, j, P = (0, g.c)(54),
                {
                    content: A,
                    onSave: T,
                    onClose: C,
                    onCloseAutoFocus: M
                } = e,
                N = (0, y.a)(),
                [H, D] = (0, v.useState)(A),
                [B, W] = (0, v.useState)(!1),
                [q, V] = (0, v.useState)(null);
            P[0] !== H || P[1] !== B || P[2] !== C || P[3] !== T ? (t = async function() {
                if (!B && F(H)) {
                    W(!0), V(null);
                    try {
                        await T(H), C()
                    } catch (e) {
                        V(e instanceof I.FetchError && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    W(!1)
                }
            }, P[0] = H, P[1] = B, P[2] = C, P[3] = T, P[4] = t) : t = P[4];
            let Y = t,
                X = !B;
            return P[5] !== M ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: M
            }, P[5] = M, P[6] = a) : a = P[6], P[7] !== B || P[8] !== C ? (r = e => {
                e || B || C()
            }, P[7] = B, P[8] = C, P[9] = r) : r = P[9], P[10] !== Y ? (i = e => {
                e.preventDefault(), e.stopPropagation(), Y()
            }, P[10] = Y, P[11] = i) : i = P[11], P[12] !== N ? (n = N.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back",
                description: "Return from the image prompt editor to the sharing preview without saving the draft"
            }), P[12] = N, P[13] = n) : n = P[13], P[14] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, p.jsx)(R.bc, {}), P[14] = l) : l = P[14], P[15] !== B || P[16] !== C || P[17] !== n ? (o = (0, p.jsx)(k.a, {
                color: "ghost",
                size: "icon",
                disabled: B,
                "aria-label": n,
                onClick: C,
                children: l
            }), P[15] = B, P[16] = C, P[17] = n, P[18] = o) : o = P[18], P[19] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, p.jsx)(G.d, {
                title: (0, p.jsx)(O.e, {
                    children: (0, p.jsx)(_.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt",
                        description: "Title of the dialog for editing the image's shared title and prompt"
                    })
                })
            }), P[19] = s) : s = P[19], P[20] !== o ? (d = (0, p.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [o, s]
            }), P[20] = o, P[21] = d) : d = P[21], P[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                D(e), V(null)
            }, P[22] = c) : c = P[22], P[23] !== H || P[24] !== B ? (u = (0, p.jsx)(G.e, {
                spacing: "large",
                children: (0, p.jsx)(z, {
                    content: H,
                    disabled: B,
                    autoFocus: !0,
                    onChange: c
                })
            }), P[23] = H, P[24] = B, P[25] = u) : u = P[25], P[26] !== q ? (m = null != q && (0, p.jsx)(G.e, {
                children: (0, p.jsx)(L.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === q ? (0, p.jsx)(_.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again.",
                        description: "Error when moderation rejects an edit to a shared image prompt"
                    }) : (0, p.jsx)(_.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again.",
                        description: "Error when saving an image prompt fails; the draft remains in the editor for retry"
                    })
                })
            }), P[26] = q, P[27] = m) : m = P[27], P[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, p.jsx)(_.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel",
                description: "Discard edits and return to the image prompt sharing preview"
            }), P[28] = h) : h = P[28], P[29] !== B || P[30] !== C ? (f = (0, p.jsx)(k.a, {
                color: "outline",
                disabled: B,
                onClick: C,
                children: h
            }), P[29] = B, P[30] = C, P[31] = f) : f = P[31], P[32] !== H || P[33] !== B ? (b = !F(H) || B, P[32] = H, P[33] = B, P[34] = b) : b = P[34], P[35] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, p.jsx)(_.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save",
                description: "Apply the edited title and prompt and return to the image sharing preview"
            }), P[35] = x) : x = P[35], P[36] !== B || P[37] !== b ? (S = (0, p.jsx)(k.a, {
                type: "submit",
                color: "primary",
                loading: B,
                disabled: b,
                children: x
            }), P[36] = B, P[37] = b, P[38] = S) : S = P[38], P[39] !== f || P[40] !== S ? (w = (0, p.jsxs)(G.c, {
                expandSingleButton: !1,
                children: [f, S]
            }), P[39] = f, P[40] = S, P[41] = w) : w = P[41], P[42] !== d || P[43] !== u || P[44] !== m || P[45] !== w || P[46] !== i ? (E = (0, p.jsxs)(G.b, {
                as: "form",
                size: "viewport",
                onSubmit: i,
                children: [d, u, m, w]
            }), P[42] = d, P[43] = u, P[44] = m, P[45] = w, P[46] = i, P[47] = E) : E = P[47], P[48] !== B || P[49] !== X || P[50] !== E || P[51] !== a || P[52] !== r ? (j = (0, p.jsx)(O.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: X,
                shouldIgnoreClickOutside: B,
                contentProps: a,
                onOpenChange: r,
                children: E
            }), P[48] = B, P[49] = X, P[50] = E, P[51] = a, P[52] = r, P[53] = j) : j = P[53], j
        }

        function D(e) {
            let t, a, r, i, n, l, o, s, d, c, u, m = (0, g.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: b,
                    disabled: _,
                    onSave: x
                } = e,
                S = (0, y.a)(),
                [w, I] = (0, v.useState)(!1),
                E = (0, v.useRef)(null);
            return m[0] !== b || m[1] !== f ? (t = null != f && (0, p.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: b,
                src: f,
                referrerPolicy: "no-referrer"
            }), m[0] = b, m[1] = f, m[2] = t) : t = m[2], m[3] !== S ? (a = S.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt",
                description: "Accessible label for the pencil button that opens the shared image title and prompt editor"
            }), m[3] = S, m[4] = a) : a = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => I(!0), i = (0, p.jsx)(R.Vf, {}), m[5] = r, m[6] = i) : (r = m[5], i = m[6]), m[7] !== _ || m[8] !== a ? (n = (0, p.jsx)(k.a, {
                ref: E,
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
            }), m[17] = l, m[18] = o, m[19] = s, m[20] = d) : d = m[20], m[21] !== h || m[22] !== w || m[23] !== x ? (c = w && (0, p.jsx)(H, {
                content: h,
                onSave: x,
                onClose: () => I(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), E.current?.focus()
                }
            }), m[21] = h, m[22] = w, m[23] = x, m[24] = c) : c = m[24], m[25] !== c || m[26] !== d ? (u = (0, p.jsxs)(p.Fragment, {
                children: [d, c]
            }), m[25] = c, m[26] = d, m[27] = u) : u = m[27], u
        }
        var B = a("AuIy"),
            W = a("iqEK"),
            q = a("ccwJ"),
            V = a("tOYk"),
            Y = a("Kwur");
        let X = (0, b.v)(S.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function U(e, t, a) {
            Q(e, t);
            let r = t.assetPointer,
                i = t.messageId;
            if (null == r || null == i) throw Error("Image prompt share source unavailable");
            let n = e.get(X, t);
            if (null != n.publication) return n.publication;
            let l = n.idempotencyKey ?? crypto.randomUUID();
            e.set(X, t, {
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
                        let s = await Y.Request.safePost("/share/prompt-share", {
                            isExpectedError: K,
                            requestBody: {
                                idempotency_key: l,
                                conversation_id: t.conversationId,
                                message_id: i,
                                output_asset_pointer: r,
                                post_text: a.title,
                                published_content: n.editedContent ?? void 0
                            }
                        });
                        Q(e, t);
                        let d = n.editedContent ?? a;
                        try {
                            d.prompt !== a.prompt && (0, o.a)(e, V.a, {
                                postId: s.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_PROMPT"
                            }), d.title.trim() !== a.title.trim() && (0, o.a)(e, V.a, {
                                postId: s.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_TITLE"
                            })
                        } catch {}
                        return s
                    }
                });
                return Q(e, t), e.set(X, t, e => ({
                    ...e,
                    publication: s
                })), s
            } catch (a) {
                throw a instanceof I.FetchError && K(a) && e.set(X, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }

        function Q(e, t) {
            if (null == t.accountId || null == t.userId || e.get(n.f) !== t.accountId || e.get(n.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function K(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function J(e) {
            let t, a, r, i, l, s, d, c, u, m, k, R, L, O, G = (0, g.c)(69),
                N = (0, b.y)(S.a),
                z = (0, y.a)(),
                H = (0, b.z)(n.f),
                V = (0, b.z)(n.j);
            G[0] !== H || G[1] !== V ? (t = {
                accountId: H,
                userId: V
            }, G[0] = H, G[1] = V, G[2] = t) : t = G[2];
            let [J] = (0, v.useState)(t), Z = (0, w.f)("1939400492"), $ = (0, w.j)("250422953"), [ee, et] = (0, v.useState)("image");
            G[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {}, G[3] = a) : a = G[3];
            let [ea] = (0, v.useState)(a), er = e.image, ei = er?.item.isAnimated === !0, en = J.accountId === H && J.userId === V, el = null != er && !er.additionalImages?.length && null != H && null != V && en && !Z, eo = e.mobileImagePromptShareTreatment;
            G[4] !== el || G[5] !== $ || G[6] !== eo ? (r = el && ("prompt-with-image" === eo || null == eo && $.get("imagegen_prompt_share_tabs_enabled", !1)), G[4] = el, G[5] = $, G[6] = eo, G[7] = r) : r = G[7];
            let es = r,
                ed = er?.item.id;
            G[8] !== H || G[9] !== e.serverConversationId || G[10] !== ed || G[11] !== V ? (i = ["image-prompt-share-source", H, V, e.serverConversationId, ed], G[8] = H, G[9] = e.serverConversationId, G[10] = ed, G[11] = V, G[12] = i) : i = G[12], G[13] !== er || G[14] !== e.serverConversationId || G[15] !== N ? (l = async t => {
                let {
                    signal: a
                } = t;
                if (null == er) return null;
                let r = (0, T.c)(e.serverConversationId),
                    i = N.get(A.a, r) ?? r,
                    n = () => {
                        let e = N.get(C.M, i) ?? N.query.getData(E.chatGptConversationQueryById$, r)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, q.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, r] = a, i = a[1].message, n = (0, q.b)(i, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (n?.src == null || "completed" !== n.status || !(0, W.d)(n.src)) return null;
                            let l = (0, B.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == l || (0, B.n)(l)) return null;
                            let o = (0, B.s)(i.content),
                                s = (Array.isArray(o?.parts) ? o.parts : []).map(B.s).find(e => e?.asset_pointer === n.src || (0, B.s)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, B.s)(s?.image_asset_pointer) ?? s,
                                c = (0, B.i)((0, B.s)((0, B.s)(d?.metadata)?.dalle)?.prompt) ?? (0, B.i)((0, B.e)(l)),
                                u = (0, B.i)(i.id);
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
                return null != l ? l : (await (0, M.a)(N, r, a), n())
            }, G[13] = er, G[14] = e.serverConversationId, G[15] = N, G[16] = l) : l = G[16], G[17] !== i || G[18] !== l || G[19] !== es ? (s = {
                enabled: es,
                queryKey: i,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: l
            }, G[17] = i, G[18] = l, G[19] = es, G[20] = s) : s = G[20];
            let {
                data: ec
            } = (0, f.a)(s), eu = ec?.messageId ?? null, em = ec?.assetPointer ?? null;
            G[21] !== H || G[22] !== e.serverConversationId || G[23] !== eu || G[24] !== em || G[25] !== V ? (d = {
                accountId: H,
                userId: V,
                conversationId: e.serverConversationId,
                messageId: eu,
                assetPointer: em
            }, G[21] = H, G[22] = e.serverConversationId, G[23] = eu, G[24] = em, G[25] = V, G[26] = d) : d = G[26];
            let ep = d,
                {
                    editedContent: eg,
                    publication: eh,
                    revision: ef
                } = (0, b.x)(X, ep),
                eb = es && null != ec,
                ev = eb && null == eo && "image_with_prompt" === $.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                ey = eb && "template" === ee;
            G[27] !== eg || G[28] !== eh?.title || G[29] !== ec ? (c = eg ?? (null == ec ? void 0 : {
                ...ec.content,
                title: eh?.title ?? ec.content.title
            }), G[27] = eg, G[28] = eh?.title, G[29] = ec, G[30] = c) : c = G[30];
            let e_ = c;
            G[31] !== J.accountId || G[32] !== J.userId || G[33] !== N ? (u = function() {
                if (N.get(n.f) !== J.accountId || N.get(n.j) !== J.userId) throw Error("Image prompt share account changed")
            }, G[31] = J.accountId, G[32] = J.userId, G[33] = N, G[34] = u) : u = G[34];
            let ex = u;
            G[35] !== e_ || G[36] !== er || G[37] !== e.source || G[38] !== ex || G[39] !== N || G[40] !== ep || G[41] !== ec ? (m = async function(t) {
                let a;
                if (ex(), null == ec || null == e_ || !F(e_)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await U(N, ep, ec.content)
                } catch (e) {
                    if (e instanceof I.FetchError && "prompt_share_not_publishable" === e.errorCode) throw new j.a;
                    throw e
                }
                if (ex(), "copy" === t) {
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
            }, G[35] = e_, G[36] = er, G[37] = e.source, G[38] = ex, G[39] = N, G[40] = ep, G[41] = ec, G[42] = m) : m = G[42];
            let eS = m;
            if (G[43] !== ei || G[44] !== ev ? (k = ei ? (0, p.jsx)(_.a, {
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
                }), G[43] = ei, G[44] = ev, G[45] = k) : k = G[45], !en) return null;
            let ew = ey ? "template" : "image";
            return G[46] !== z || G[47] !== ei || G[48] !== ee || G[49] !== k || G[50] !== eb ? (R = eb ? e => (0, p.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, p.jsx)(x.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: ee,
                    onSelect: et,
                    ariaLabel: z.formatMessage({
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
            }) : void 0, G[46] = z, G[47] = ei, G[48] = ee, G[49] = k, G[50] = eb, G[51] = R) : R = G[51], G[52] !== e_ || G[53] !== eS || G[54] !== er?.alt || G[55] !== ex || G[56] !== ef || G[57] !== N || G[58] !== ep || G[59] !== ec || G[60] !== ev || G[61] !== ey ? (L = ey && null != e_ ? {
                label: ev,
                revision: ef,
                createLink: eS,
                actionsDisabled: !F(e_),
                preview: (e, t, a) => (0, p.jsx)(D, {
                    content: e_,
                    previewSrc: t,
                    alt: er?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (ex(), null == ec) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== e_.title.trim() || e.prompt !== e_.prompt) && await async function(e, t, a, r) {
                            Q(e, t);
                            let i = e.get(X, t),
                                n = null == i.idempotencyKey ? i.publication : await U(e, t, a),
                                l = r;
                            if (null != n) {
                                let e = await Y.Request.safePatch("/share/post/{post_id}/prompt-share", {
                                    isExpectedError: K,
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
                            Q(e, t), e.set(X, t, e => ({
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
                        }), ex(), a()
                    }
                })
            } : void 0, G[52] = e_, G[53] = eS, G[54] = er?.alt, G[55] = ex, G[56] = ef, G[57] = N, G[58] = ep, G[59] = ec, G[60] = ev, G[61] = ey, G[62] = L) : L = G[62], G[63] !== ea || G[64] !== e || G[65] !== ew || G[66] !== R || G[67] !== L ? (O = (0, p.jsx)(P.a, {
                ...e,
                mobileImageRowScrollPositions: ea,
                imageShareOptions: R,
                imagePromptTemplate: L
            }, ew), G[63] = ea, G[64] = e, G[65] = ew, G[66] = R, G[67] = L, G[68] = O) : O = G[68], O
        }

        function Z(e, t) {
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
                    title: x
                } = t,
                S = crypto.randomUUID(),
                w = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    conversationId: y,
                    shareSessionId: S,
                    source: _
                };
            (0, o.a)(e, r.i, {
                ...w,
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED"
            });
            let I = e.get(n.f),
                E = e.get(n.j),
                j = (0, i.d)(),
                P = j && null != I && null != E ? (0, c.h)(e.get(s.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                A = e.get(n.e),
                T = "loaded" === A.status && "personal" === A.structure || "loading" === A.status && "personal" === A.structureAtLogin,
                C = null == P ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: P,
                    isMobileBrowser: j,
                    isPersonalAccount: T
                }),
                M = () => e.get(n.f) === I && e.get(n.j) === E,
                k = t => {
                    !t.isWorkspaceOnly && t.shareLinkId !== a && M() && (a = t.shareLinkId, (0, o.a)(e, r.i, {
                        ...w,
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
                L = () => (0, l.f)(e, J, {
                    currentNodeId: f.id,
                    image: R,
                    serverConversationId: y,
                    shareSessionId: S,
                    source: _,
                    title: x,
                    mobileImageExperience: C,
                    mobileImagePromptShareTreatment: P?.promptShareTreatment,
                    onImageShareLinkPrepared: null == P ? void 0 : k,
                    trackMobileImageShareLifecycle: j && P?.kind === "native"
                });
            j && P?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, y, R);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void L();
                    if (!M()) return;
                    if (!T) return void L();
                    k(a);
                    let r = await (0, m.b)(e, a, y, S, _);
                    if ("shared" === r || "cancelled" === r) return
                } catch {}
                M() && L()
            }(): L()
        }
        async function $(e, t) {
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
    PxnS: (function(e, t, a) {
        var r = a("EA6X"),
            i = a("lSdY"),
            n = a("BolX"),
            l = a("aiHW"),
            o = a("yGJW"),
            s = a("OWtl"),
            d = a("xsLm"),
            c = a("HgLj"),
            u = a("XW2n");
        let m = (0, n.u)(s.a, () => new WeakMap),
            p = (0, n.d)(s.a, (e, t) => {
                let {
                    widgetType: a,
                    turnMessageId: r,
                    sourceMessageId: n
                } = e, {
                    get: l
                } = t, o = l(u.b);
                if (o?.productExperience !== i.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS) return;
                let s = n ?? r,
                    d = null != r && o.messageIds.has(r) ? r : void 0;
                if (null != s && (o.messageIds.has(s) || null != d)) return {
                    widgetType: a,
                    messageId: s,
                    assistantMessageId: d
                }
            });

        function g(e, t, a, i) {
            (0, o.a)(e, r.j, {
                ...t,
                actionType: a,
                widgetActionTarget: i,
                surfaceLocation: r.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                isGenui: "model_written_dil" === t.widgetType || void 0
            })
        }
        a.d(t, {}, {
            a: function(e, t, a, r) {
                return (0, c.a)(r, a => {
                    if (!t || !a) return;
                    let r = e.get(m);
                    if (r.get(a) !== t.messageId) return (0, d.a)(a, () => {
                        for (let e = (0, l.a)(a); e; e = (0, l.a)(e))
                            if (e.hasAttribute("data-shared-answer-widget-shell")) return !0;
                        return r.set(a, t.messageId), g(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION", "widget_container"), !0
                    }, {
                        threshold: .01
                    })
                })(a)
            },
            b: function(e, t, a) {
                t && g(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED", a)
            },
            c: p
        })
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
                    x = 0,
                    S = Promise.resolve(),
                    w = u({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (r?.isAnimated) return f.watch(t => {
                                if (0 !== x) return;
                                let a = t.get(h, _),
                                    n = (0, i.d)(v(t, r)?.gifPlayback, a ?? void 0);
                                (null != a || 1 !== n) && (e({
                                    preview: null,
                                    busy: !0
                                }), P(n, !1))
                            })
                        }
                    }),
                    I = async e => {
                        let t = null != e && (0, m.h)(e) && null != o ? await (0, m.a)(f.queryClient, e, o) : e,
                            a = null == t ? null : await (0, d.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, E = () => (null == a && (a = I(b).catch(e => {
                        throw a = void 0, e
                    })), a), j = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                            a = v(f, r),
                            n = t === a?.watermarkedSrc ? a?.gifPlayback?.watermarkedVariants : a?.gifPlayback?.variants;
                        if (!(0, i.a)(n).includes(e)) throw Error("GIF speed variant unavailable");
                        let l = 1 === e ? void 0 : n?.[String(e)],
                            o = w.get().preview;
                        if (o?.speed === e && o.originalSrc === t && o.assetSrc === l) return o;
                        let s = null == l && t === b ? await E() : await I(l ?? t);
                        return {
                            assetSrc: l,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, p.a)(s),
                            sizeBytes: s.size
                        }
                    }, P = async (e, t) => {
                        let a = ++x;
                        w.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let i = await j(e);
                            if (a !== x) return !1;
                            return w.set({
                                preview: i,
                                busy: !1
                            }), t && (f.set(h, _, e), S = S.then(async () => {
                                if (a !== x || "chatgpt-thread" !== f.value.routeKind || r?.chatGptMessageId == null || null == b) return;
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
                            return t && a === x && f.get(s.f).danger(f.get(c.a).formatMessage({
                                id: "gifEditor.speedChangeFailed",
                                defaultMessage: "Couldn’t change GIF speed. Try again",
                                description: "Error shown when a generated GIF could not be loaded or retimed after choosing a playback speed"
                            }), {
                                errorAnalytics: {
                                    toastId: "gifEditor.speedChangeFailed"
                                }
                            }), !1
                        } finally {
                            a === x && w.set(e => ({
                                ...e,
                                busy: !1
                            }))
                        }
                    };
                return {
                    state$: w,
                    loadOriginal: E,
                    loadExport: async e => I((await j(e)).src),
                    changeSpeed: e => P(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let r = (0, i.d)(v(f, e)?.gifPlayback, w.get().preview?.speed ?? f.get(h, _) ?? void 0),
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
                        let l = await j(r, t);
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
                x = void 0 === v ? "default" : v,
                S = (0, o.a)(),
                w = "fill" === x || "image-preview" === x,
                I = x;
            "single" === I ? I = "playground" : "fill" === I && (I = "default"), m[0] !== p || m[1] !== S ? (t = p ?? S.formatMessage({
                id: "codex.chatGptConversation.imageGeneration.loadingLabel",
                defaultMessage: "Generating image...",
                description: "Aria label for the image generation loading placeholder"
            }), m[0] = p, m[1] = S, m[2] = t) : t = m[2];
            let E = null != y ? "bg-surface-secondary text-media-foreground" : "dark:text-white/70 text-secondary",
                j = null == y && "surface" === (void 0 === h ? "surface" : h) && ("single" === x ? "bg-surface-secondary" : "dark:bg-secondary-ghost-hover bg-primary-soft-active");
            m[3] !== w || m[4] !== x || m[5] !== E || m[6] !== j ? (a = (0, n.b)("overflow-clip", E, j, w ? "absolute inset-0 size-full" : ["relative aspect-square", "thumbnail" === x ? "rounded-lg" : "rounded-2xl", "single" === x ? "size-[min(100cqw,100cqh)]" : "w-full max-w-[400px]"]), m[3] = w, m[4] = x, m[5] = E, m[6] = j, m[7] = a) : a = m[7], m[8] !== x || m[9] !== y ? (l = null != y ? (0, r.jsx)("img", {
                alt: "",
                className: (0, n.b)("pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70", "image-preview" === x ? "blur-md" : "scale-125 blur-3xl"),
                src: y,
                referrerPolicy: "no-referrer"
            }) : null, m[8] = x, m[9] = y, m[10] = l) : l = m[10];
            let P = null != y;
            return m[11] !== I || m[12] !== _ || m[13] !== P ? (s = (0, r.jsx)(g, {
                isAnimating: _,
                overImage: P,
                presentation: I
            }), m[11] = I, m[12] = _, m[13] = P, m[14] = s) : s = m[14], m[15] !== w || m[16] !== f || m[17] !== _ ? (d = null != f ? (0, r.jsx)(u.a, {
                generationStartedAtMs: f,
                isActive: _,
                placement: w ? "top" : "bottom"
            }, f) : null, m[15] = w, m[16] = f, m[17] = _, m[18] = d) : d = m[18], m[19] !== s || m[20] !== d || m[21] !== t || m[22] !== a || m[23] !== l ? (c = (0, r.jsxs)("div", {
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
                    presentation: x
                } = e,
                S = (0, d.a)(),
                w = (0, c.a)(),
                I = (0, l.useRef)(null),
                E = (0, l.useRef)(null);
            g[0] !== y || g[1] !== w || g[2] !== x || g[3] !== S ? (t = () => {
                if (!y) return;
                let e = I.current,
                    t = E.current,
                    a = t?.getContext("2d");
                if (null == e || null == t || null == a) return;
                let r = 2 * Math.PI,
                    i = getComputedStyle(e).color || (w ? "white" : "black"),
                    n = (e, t) => e + (S ? .5 : Math.random()) * (t - e),
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
                    j = !1,
                    P = t.ownerDocument,
                    A = n => {
                        var l, s, y, _, w, I, E, j, P, T, C, M;
                        if (!S && 0 !== c && n - c < 33.333333333333336) {
                            d = requestAnimationFrame(A);
                            return
                        }
                        if (c = n, null == g && (g = n), (p || null == u) && (() => {
                                let a = "image-preview" === x ? {
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
                                let s = "default" === x ? Math.max(1, 12 / n) : m[x].spacing,
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
                        let k = S ? 0 : n - g,
                            R = (e, t) => {
                                let a;
                                return (a = (k / e + t) % 1) <= .5 ? 2 * a : 2 - 2 * a
                            },
                            L = (l = o.bounds.x1Start, s = o.bounds.x1End, l + (s - l) * v(R(o.durations.offsetX1, o.phases.offsetX1))),
                            O = (y = o.bounds.y1Start, _ = o.bounds.y1End, y + (_ - y) * b(R(o.durations.offsetY1, o.phases.offsetY1))),
                            G = (w = o.bounds.x2Start, I = o.bounds.x2End, w + (I - w) * v(R(o.durations.offsetX2, o.phases.offsetX2))),
                            F = (E = o.bounds.y2Start, j = o.bounds.y2End, E + (j - E) * b(R(o.durations.offsetY2, o.phases.offsetY2))),
                            N = .78 * (P = o.fieldSizeRange.firstStart, T = o.fieldSizeRange.firstEnd, P + (T - P) * b(R(o.durations.fieldSize1, o.phases.fieldSize1))),
                            z = .78 * (C = o.fieldSizeRange.secondStart, M = o.fieldSizeRange.secondEnd, C + (M - C) * b(R(o.durations.fieldSize2, o.phases.fieldSize2)));
                        a.save(), a.setTransform(u.dpr, 0, 0, u.dpr, 0, 0), a.clearRect(0, 0, u.width, u.height), a.fillStyle = i;
                        let H = "default" === x ? Math.max(.55, .5 * u.spacing * .16) : m[x].radius;
                        for (let e = 0; e < u.yPositions.length; e += 1) {
                            let t = u.yPositions[e],
                                i = u.yNormals[e];
                            for (let e = 0; e < u.xPositions.length; e += 1) {
                                let n = u.xPositions[e],
                                    l = u.xNormals[e],
                                    o = Math.pow(h((1 - f(0, N, Math.hypot(l - L, i - O))) * 1.2 + (1 - f(0, z, Math.hypot(l - G, i - F))) * .82), 1.18);
                                o <= .03 || (a.globalAlpha = o, a.beginPath(), a.moveTo(n + H, t), a.arc(n, t, H, 0, r), a.fill())
                            }
                        }
                        a.restore(), d = S ? null : requestAnimationFrame(A)
                    },
                    T = new ResizeObserver(() => {
                        p = !0, _ && null == d && (d = requestAnimationFrame(A))
                    });
                T.observe(e);
                let C = () => {
                        (_ = j && "hidden" !== P.visibilityState) ? null == d && (d = requestAnimationFrame(A)): null != d && (cancelAnimationFrame(d), d = null)
                    },
                    M = (0, s.a)(e, e => {
                        j = e, C()
                    });
                return P.addEventListener("visibilitychange", C), () => {
                    M?.(), P.removeEventListener("visibilitychange", C), null != d && cancelAnimationFrame(d), T.disconnect()
                }
            }, g[0] = y, g[1] = w, g[2] = x, g[3] = S, g[4] = t) : t = g[4], g[5] !== y || g[6] !== w || g[7] !== _ || g[8] !== x || g[9] !== S ? (a = [y, w, _, x, S], g[5] = y, g[6] = w, g[7] = _, g[8] = x, g[9] = S, g[10] = a) : a = g[10], (0, l.useEffect)(t, a);
            let j = (_ || "image-preview" === x) && "overImage-KmHrEc",
                P = (!y || S) && "reducedMotion-ttnr0y";
            return g[11] !== j || g[12] !== P ? (o = (0, n.b)("dots-avXrIV", j, P), g[11] = j, g[12] = P, g[13] = o) : o = g[13], g[14] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, r.jsx)("canvas", {
                ref: E,
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
                let t, a, n, x, S, w, I, E = (0, i.c)(53),
                    {
                        downloadImageCount: j,
                        floatingToolbarVariant: P,
                        moreActions: A,
                        isAnimated: T,
                        isImageActionsDisabled: C,
                        isUnifiedViewerEnabled: M,
                        onDownload: k,
                        onDownloadAll: R,
                        onDownloadMenuOpen: L,
                        onShare: O,
                        onShareAll: G,
                        onShareMenuOpen: F,
                        saveAction: N,
                        shareImageCount: z,
                        showShareText: H
                    } = e,
                    D = void 0 !== T && T,
                    B = void 0 !== M && M,
                    W = void 0 !== H && H,
                    q = (0, o.a)(),
                    [V, Y] = (0, l.useState)(!1),
                    X = "toolbar";
                null != P && (X = "imageTools" === P ? "imageToolbar" : "composerSm"), E[0] !== X || E[1] !== P || E[2] !== q || E[3] !== C || E[4] !== B || E[5] !== O || E[6] !== G || E[7] !== W ? (t = B ? (0, r.jsxs)(f.c, {
                    "aria-label": q.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }),
                    disabled: C,
                    uniform: !W,
                    onClick: null == G ? O : void 0,
                    children: [(0, r.jsx)(p.b, {
                        icon: {
                            16: m.L,
                            20: m.M
                        }
                    }), W ? (0, r.jsx)(s.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    }) : null]
                }) : (0, r.jsx)(d.a, {
                    color: null == P ? "primary" : "ghostActive",
                    disabled: C,
                    size: X,
                    onClick: null == G ? O : void 0,
                    children: (0, r.jsx)(s.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share",
                        description: "Label for the image viewer header button that opens sharing options for the currently displayed generated image."
                    })
                }), E[0] = X, E[1] = P, E[2] = q, E[3] = C, E[4] = B, E[5] = O, E[6] = G, E[7] = W, E[8] = t) : t = E[8];
                let U = t;
                if (null != O && null != G) {
                    let e;
                    E[9] !== D || E[10] !== C || E[11] !== O || E[12] !== G || E[13] !== F || E[14] !== U || E[15] !== z ? (e = (0, r.jsx)(b.a, {
                        disabled: C,
                        imageCount: z,
                        isAnimated: D,
                        onOpen: F,
                        onShare: O,
                        onShareAll: G,
                        triggerButton: U
                    }), E[9] = D, E[10] = C, E[11] = O, E[12] = G, E[13] = F, E[14] = U, E[15] = z, E[16] = e) : e = E[16], U = e
                }
                if (null != P) {
                    let e;
                    E[17] !== P || E[18] !== U ? (e = (0, r.jsx)(h.a, {
                        variant: P,
                        children: U
                    }), E[17] = P, E[18] = U, E[19] = e) : e = E[19], U = e
                }
                E[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    Y(!0), await e().finally(() => {
                        Y(!1)
                    })
                }, E[20] = a) : a = E[20];
                let Q = a;
                E[21] !== X || E[22] !== j || E[23] !== P || E[24] !== q || E[25] !== D || E[26] !== V || E[27] !== C || E[28] !== B || E[29] !== k || E[30] !== R || E[31] !== L || E[32] !== N ? (n = null != R && null != k ? (0, r.jsxs)(c.a, {
                    align: "end",
                    disabled: C || V,
                    onOpenChange: e => {
                        e && L?.()
                    },
                    triggerButton: (0, r.jsx)(_, {
                        content: (0, r.jsx)(s.a, {
                            ...(0, g.a)({
                                isAnimated: D
                            }).downloadLabel
                        }),
                        children: B ? (0, r.jsx)(f.c, {
                            "aria-label": q.formatMessage((0, g.a)({
                                isAnimated: D
                            }).downloadLabel),
                            disabled: C || V,
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
                        }) : (0, r.jsx)(d.a, {
                            "aria-label": q.formatMessage((0, g.a)({
                                isAnimated: D
                            }).downloadLabel),
                            color: null == P ? "ghost" : "ghostActive",
                            disabled: C || V,
                            loading: V,
                            size: X,
                            uniform: !0,
                            children: "compact" === P ? (0, r.jsx)(u.a, {
                                asset: v.a
                            }) : (0, r.jsx)(m.r, {})
                        })
                    }),
                    children: [(0, r.jsx)(c.c.Item, {
                        onSelect: () => void Q(k),
                        children: (0, r.jsx)(s.a, {
                            ...(0, g.a)({
                                isAnimated: D
                            }).downloadMenuLabel
                        })
                    }), (0, r.jsx)(c.c.Item, {
                        onSelect: () => void Q(R),
                        children: (0, r.jsx)(s.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            description: "Option in the generated-image Download dropdown that saves every completed image in the selected generation series. count is the number of images to download, always greater than one. Keep this menu label concise.",
                            values: {
                                count: j
                            }
                        })
                    })]
                }) : N, E[21] = X, E[22] = j, E[23] = P, E[24] = q, E[25] = D, E[26] = V, E[27] = C, E[28] = B, E[29] = k, E[30] = R, E[31] = L, E[32] = N, E[33] = n) : n = E[33];
                let K = n;
                if (null != P && null != R && null != k) {
                    let e;
                    E[34] !== K || E[35] !== P ? (e = (0, r.jsx)(h.a, {
                        variant: P,
                        children: K
                    }), E[34] = K, E[35] = P, E[36] = e) : e = E[36], K = e
                }
                let J = null == O ? null : U;
                E[37] !== K || E[38] !== J ? (x = (0, r.jsxs)(r.Fragment, {
                    children: [K, J]
                }), E[37] = K, E[38] = J, E[39] = x) : x = E[39];
                let Z = x;
                E[40] !== P || E[41] !== A ? (S = null == A || null == P ? A : (0, r.jsx)(h.a, {
                    variant: P,
                    children: A
                }), E[40] = P, E[41] = A, E[42] = S) : S = E[42];
                let $ = S,
                    ee = null != O || null != K;
                if (!B || W) {
                    let e;
                    return E[43] !== Z || E[44] !== $ ? (e = (0, r.jsxs)(r.Fragment, {
                        children: [Z, $]
                    }), E[43] = Z, E[44] = $, E[45] = e) : e = E[45], e
                }
                return E[46] !== ee || E[47] !== q || E[48] !== Z ? (w = ee ? (0, r.jsx)(f.i, {
                    label: q.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions",
                        description: "Accessible label for the image viewer's Share and Download actions group"
                    }),
                    children: Z
                }) : null, E[46] = ee, E[47] = q, E[48] = Z, E[49] = w) : w = E[49], E[50] !== w || E[51] !== $ ? (I = (0, r.jsxs)(r.Fragment, {
                    children: [w, $]
                }), E[50] = w, E[51] = $, E[52] = I) : I = E[52], I
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
                        onShare: x,
                        onShareAll: S,
                        triggerButton: w
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
                }), f[5] = u.shareSelectionLabel, f[6] = m) : m = f[6], f[7] !== x || f[8] !== m ? (p = (0, r.jsx)(l.c.Item, {
                    leftIcon: a,
                    onSelect: x,
                    children: m
                }), f[7] = x, f[8] = m, f[9] = p) : p = f[9], f[10] !== v || f[11] !== S ? (g = null == S ? null : (0, r.jsx)(l.c.Item, {
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
                            imageCount: v
                        }
                    })
                }), f[10] = v, f[11] = S, f[12] = g) : g = f[12], f[13] !== b || f[14] !== t || f[15] !== p || f[16] !== g || f[17] !== w ? (h = (0, r.jsxs)(l.a, {
                    align: "end",
                    disabled: b,
                    triggerButton: w,
                    onOpenChange: t,
                    children: [p, g]
                }), f[13] = b, f[14] = t, f[15] = p, f[16] = g, f[17] = w, f[18] = h) : h = f[18], h
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
                let m = void 0 === l ? c : l;
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
                }), u[4] = o) : o = u[4], u[5] !== t || u[6] !== m || u[7] !== a ? (d = (0, r.jsxs)(s.a, {
                    focusRing: "inset",
                    ...a,
                    children: [m, o, t]
                }), u[5] = t, u[6] = m, u[7] = a, u[8] = d) : d = u[8], d
            }
        })
    })
};