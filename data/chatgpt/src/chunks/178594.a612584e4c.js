export const __rspack_esm_ids = [178594];
export const __webpack_modules__ = {
    vSCF: (function(e, t, a) {
        var i = a("ABep"),
            n = a("Bbed"),
            r = a("N55g");
        let l = (0, n.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(322024), a.e(827442), a.e(81461), a.e(882456), a.e(813117), a.e(259288), a.e(976863), a.e(839342), a.e(499790), a.e(918122), a.e(301030), a.e(502948), a.e(782496), a.e(909395), a.e(587936), a.e(540889), a.e(904817), a.e(452048), a.e(684598), a.e(299268), a.e(219246), a.e(433520), a.e(212487), a.e(17983), a.e(167649), a.e(46150), a.e(523433), a.e(403815), a.e(341738), a.e(617029), a.e(32634)]).then(a.bind(a, "XPeo"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, i.jsx)(r.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: l
        })
    }),
    erFs: (function(e, t, a) {
        a.d(t, {
            a: () => $,
            b: () => Z
        });
        var i = a("FS1B"),
            n = a("BOYb"),
            r = a("Cslg"),
            l = a("X6Vn"),
            s = a("yGJW"),
            o = a("O666"),
            d = a("LulU"),
            c = a("k5RO"),
            u = a("cQW3"),
            m = a("Tywu"),
            g = a("ABep"),
            p = a("QosV");
        let h = {
            $type: "protobuf_analytics_events.v1.ChatgptImagegenPromptSharingAction"
        };
        var f = a("T0Rc"),
            v = a("BolX"),
            b = a("zd8w"),
            _ = a("Wf1j"),
            y = a("oyxz"),
            I = a("EShr"),
            x = a("OWtl"),
            S = a("hZax"),
            w = a("eShZ"),
            E = a("lBzi"),
            P = a("r9i9"),
            j = a("tdfh"),
            T = a("aFoA"),
            A = a("OOaz"),
            C = a("dQRk"),
            O = a("jfiJ"),
            L = a("Sm6l"),
            R = a("bf6R"),
            k = a("MM0V"),
            G = a("JNtf"),
            M = a("mUDD");

        function N(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var F = a("zLIa");

        function D(e) {
            let t, a, i, n, r, l, s, o = (0, p.c)(19),
                {
                    content: d,
                    onChange: c,
                    disabled: u,
                    autoFocus: m
                } = e,
                h = void 0 !== u && u,
                f = void 0 !== m && m;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, g.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-title",
                children: (0, g.jsx)(y.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title"
                })
            }), o[0] = t) : t = o[0], o[1] !== d || o[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), o[1] = d, o[2] = c, o[3] = a) : a = o[3], o[4] !== f || o[5] !== d.title || o[6] !== a ? (i = (0, g.jsxs)(M.f, {
                children: [t, (0, g.jsx)(F.c, {
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
            }), o[4] = f, o[5] = d.title, o[6] = a, o[7] = i) : i = o[7], o[8] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, g.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, g.jsx)(y.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt"
                })
            }), o[8] = n) : n = o[8], o[9] !== d || o[10] !== c ? (r = e => c({
                ...d,
                prompt: e.target.value
            }), o[9] = d, o[10] = c, o[11] = r) : r = o[11], o[12] !== d.prompt || o[13] !== r ? (l = (0, g.jsxs)(M.f, {
                children: [n, (0, g.jsx)(F.c, {
                    id: "image-prompt-text",
                    name: "prompt",
                    variant: "compact",
                    required: !0,
                    rows: 2,
                    maxLength: 2e5,
                    value: d.prompt,
                    onChange: r
                })]
            }), o[12] = d.prompt, o[13] = r, o[14] = l) : l = o[14], o[15] !== h || o[16] !== i || o[17] !== l ? (s = (0, g.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [i, l]
            }), o[15] = h, o[16] = i, o[17] = l, o[18] = s) : s = o[18], s
        }

        function H(e) {
            let t, a, i, n, r, l, s, o, d, c, u, m, h, f, v, I, x, S, E, P, j = (0, p.c)(54),
                {
                    content: T,
                    onSave: A,
                    onClose: C,
                    onCloseAutoFocus: O
                } = e,
                F = (0, _.a)(),
                [H, B] = (0, b.useState)(T),
                [W, q] = (0, b.useState)(!1),
                [z, U] = (0, b.useState)(null);
            j[0] !== H || j[1] !== W || j[2] !== C || j[3] !== A ? (t = async function() {
                if (!W && N(H)) {
                    q(!0), U(null);
                    try {
                        await A(H), C()
                    } catch (e) {
                        U(e instanceof w.FetchError && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    q(!1)
                }
            }, j[0] = H, j[1] = W, j[2] = C, j[3] = A, j[4] = t) : t = j[4];
            let V = t,
                K = !W;
            return j[5] !== O ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: O
            }, j[5] = O, j[6] = a) : a = j[6], j[7] !== W || j[8] !== C ? (i = e => {
                e || W || C()
            }, j[7] = W, j[8] = C, j[9] = i) : i = j[9], j[10] !== V ? (n = e => {
                e.preventDefault(), e.stopPropagation(), V()
            }, j[10] = V, j[11] = n) : n = j[11], j[12] !== F ? (r = F.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back"
            }), j[12] = F, j[13] = r) : r = j[13], j[14] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, g.jsx)(R.cc, {}), j[14] = l) : l = j[14], j[15] !== W || j[16] !== C || j[17] !== r ? (s = (0, g.jsx)(L.a, {
                color: "ghost",
                size: "icon",
                disabled: W,
                "aria-label": r,
                onClick: C,
                children: l
            }), j[15] = W, j[16] = C, j[17] = r, j[18] = s) : s = j[18], j[19] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, g.jsx)(M.d, {
                title: (0, g.jsx)(G.e, {
                    children: (0, g.jsx)(y.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt"
                    })
                })
            }), j[19] = o) : o = j[19], j[20] !== s ? (d = (0, g.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [s, o]
            }), j[20] = s, j[21] = d) : d = j[21], j[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                B(e), U(null)
            }, j[22] = c) : c = j[22], j[23] !== H || j[24] !== W ? (u = (0, g.jsx)(M.e, {
                spacing: "large",
                children: (0, g.jsx)(D, {
                    content: H,
                    disabled: W,
                    autoFocus: !0,
                    onChange: c
                })
            }), j[23] = H, j[24] = W, j[25] = u) : u = j[25], j[26] !== z ? (m = null != z && (0, g.jsx)(M.e, {
                children: (0, g.jsx)(k.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === z ? (0, g.jsx)(y.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again."
                    }) : (0, g.jsx)(y.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again."
                    })
                })
            }), j[26] = z, j[27] = m) : m = j[27], j[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, g.jsx)(y.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel"
            }), j[28] = h) : h = j[28], j[29] !== W || j[30] !== C ? (f = (0, g.jsx)(L.a, {
                color: "outline",
                disabled: W,
                onClick: C,
                children: h
            }), j[29] = W, j[30] = C, j[31] = f) : f = j[31], j[32] !== H || j[33] !== W ? (v = !N(H) || W, j[32] = H, j[33] = W, j[34] = v) : v = j[34], j[35] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, g.jsx)(y.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save"
            }), j[35] = I) : I = j[35], j[36] !== W || j[37] !== v ? (x = (0, g.jsx)(L.a, {
                type: "submit",
                color: "primary",
                loading: W,
                disabled: v,
                children: I
            }), j[36] = W, j[37] = v, j[38] = x) : x = j[38], j[39] !== f || j[40] !== x ? (S = (0, g.jsxs)(M.c, {
                expandSingleButton: !1,
                children: [f, x]
            }), j[39] = f, j[40] = x, j[41] = S) : S = j[41], j[42] !== d || j[43] !== u || j[44] !== m || j[45] !== S || j[46] !== n ? (E = (0, g.jsxs)(M.b, {
                as: "form",
                size: "viewport",
                onSubmit: n,
                children: [d, u, m, S]
            }), j[42] = d, j[43] = u, j[44] = m, j[45] = S, j[46] = n, j[47] = E) : E = j[47], j[48] !== W || j[49] !== K || j[50] !== E || j[51] !== a || j[52] !== i ? (P = (0, g.jsx)(G.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: K,
                shouldIgnoreClickOutside: W,
                contentProps: a,
                onOpenChange: i,
                children: E
            }), j[48] = W, j[49] = K, j[50] = E, j[51] = a, j[52] = i, j[53] = P) : P = j[53], P
        }

        function B(e) {
            let t, a, i, n, r, l, s, o, d, c, u, m = (0, p.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: v,
                    disabled: y,
                    onSave: I
                } = e,
                x = (0, _.a)(),
                [S, w] = (0, b.useState)(!1),
                E = (0, b.useRef)(null);
            return m[0] !== v || m[1] !== f ? (t = null != f && (0, g.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: v,
                src: f,
                referrerPolicy: "no-referrer"
            }), m[0] = v, m[1] = f, m[2] = t) : t = m[2], m[3] !== x ? (a = x.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt"
            }), m[3] = x, m[4] = a) : a = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => w(!0), n = (0, g.jsx)(R.Zf, {}), m[5] = i, m[6] = n) : (i = m[5], n = m[6]), m[7] !== y || m[8] !== a ? (r = (0, g.jsx)(L.a, {
                ref: E,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: y,
                "aria-label": a,
                onClick: i,
                children: n
            }), m[7] = y, m[8] = a, m[9] = r) : r = m[9], m[10] !== t || m[11] !== r ? (l = (0, g.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, r]
            }), m[10] = t, m[11] = r, m[12] = l) : l = m[12], m[13] !== h.title ? (s = (0, g.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: h.title
            }), m[13] = h.title, m[14] = s) : s = m[14], m[15] !== h.prompt ? (o = (0, g.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: h.prompt
            }), m[15] = h.prompt, m[16] = o) : o = m[16], m[17] !== l || m[18] !== s || m[19] !== o ? (d = (0, g.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [l, s, o]
            }), m[17] = l, m[18] = s, m[19] = o, m[20] = d) : d = m[20], m[21] !== h || m[22] !== S || m[23] !== I ? (c = S && (0, g.jsx)(H, {
                content: h,
                onSave: I,
                onClose: () => w(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), E.current?.focus()
                }
            }), m[21] = h, m[22] = S, m[23] = I, m[24] = c) : c = m[24], m[25] !== c || m[26] !== d ? (u = (0, g.jsxs)(g.Fragment, {
                children: [d, c]
            }), m[25] = c, m[26] = d, m[27] = u) : u = m[27], u
        }
        var W = a("AuIy"),
            q = a("iqEK"),
            z = a("ccwJ"),
            U = a("tOYk"),
            V = a("Kwur");
        let K = (0, v.v)(x.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function Q(e, t, a) {
            X(e, t);
            let i = t.assetPointer,
                n = t.messageId;
            if (null == i || null == n) throw Error("Image prompt share source unavailable");
            let r = e.get(K, t);
            if (null != r.publication) return r.publication;
            let l = r.idempotencyKey ?? crypto.randomUUID();
            e.set(K, t, {
                ...r,
                idempotencyKey: l
            });
            try {
                let o = await e.queryClient.fetchQuery({
                    queryKey: ["image-prompt-share-publication", t, l],
                    staleTime: 1 / 0,
                    gcTime: 1 / 0,
                    retry: !1,
                    queryFn: async () => {
                        let o = await V.Request.safePost("/share/prompt-share", {
                            isExpectedError: Y,
                            requestBody: {
                                idempotency_key: l,
                                conversation_id: t.conversationId,
                                message_id: n,
                                output_asset_pointer: i,
                                post_text: a.title,
                                published_content: r.editedContent ?? void 0
                            }
                        });
                        X(e, t);
                        let d = r.editedContent ?? a;
                        try {
                            d.prompt !== a.prompt && (0, s.a)(e, U.a, {
                                postId: o.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_PROMPT"
                            }), d.title.trim() !== a.title.trim() && (0, s.a)(e, U.a, {
                                postId: o.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_TITLE"
                            })
                        } catch {}
                        return o
                    }
                });
                return X(e, t), e.set(K, t, e => ({
                    ...e,
                    publication: o
                })), o
            } catch (a) {
                throw a instanceof w.FetchError && Y(a) && e.set(K, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }

        function X(e, t) {
            if (null == t.accountId || null == t.userId || e.get(r.f) !== t.accountId || e.get(r.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function Y(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function J(e) {
            let t, a, i, n, l, o, d, c, u, m, L, R, k, G, M = (0, p.c)(69),
                F = (0, v.y)(x.a),
                D = (0, _.a)(),
                H = (0, v.z)(r.f),
                U = (0, v.z)(r.j);
            M[0] !== H || M[1] !== U ? (t = {
                accountId: H,
                userId: U
            }, M[0] = H, M[1] = U, M[2] = t) : t = M[2];
            let [J] = (0, b.useState)(t), $ = (0, S.f)("1939400492"), Z = (0, S.j)("250422953"), [ee, et] = (0, b.useState)("image");
            M[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {}, M[3] = a) : a = M[3];
            let [ea] = (0, b.useState)(a), ei = e.image, en = ei?.item.isAnimated === !0, er = J.accountId === H && J.userId === U, el = null != ei && !ei.additionalImages?.length && null != H && null != U && er && !$, es = e.mobileImagePromptShareTreatment;
            M[4] !== el || M[5] !== Z || M[6] !== es ? (i = el && ("prompt-with-image" === es || null == es && Z.get("imagegen_prompt_share_tabs_enabled", !1)), M[4] = el, M[5] = Z, M[6] = es, M[7] = i) : i = M[7];
            let eo = i,
                ed = ei?.item.id;
            M[8] !== H || M[9] !== e.serverConversationId || M[10] !== ed || M[11] !== U ? (n = ["image-prompt-share-source", H, U, e.serverConversationId, ed], M[8] = H, M[9] = e.serverConversationId, M[10] = ed, M[11] = U, M[12] = n) : n = M[12], M[13] !== ei || M[14] !== e.serverConversationId || M[15] !== F ? (l = async t => {
                let {
                    signal: a
                } = t;
                if (null == ei) return null;
                let i = (0, A.c)(e.serverConversationId),
                    n = F.get(T.a, i) ?? i,
                    r = () => {
                        let e = F.get(C.N, n) ?? F.query.getData(E.chatGptConversationQueryById$, i)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, z.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, i] = a, n = a[1].message, r = (0, z.b)(n, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (r?.src == null || "completed" !== r.status || !(0, q.d)(r.src)) return null;
                            let l = (0, W.b)({
                                mapping: e.mapping,
                                current_node: i?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == l || (0, W.n)(l)) return null;
                            let s = (0, W.s)(n.content),
                                o = (Array.isArray(s?.parts) ? s.parts : []).map(W.s).find(e => e?.asset_pointer === r.src || (0, W.s)(e?.image_asset_pointer)?.asset_pointer === r.src),
                                d = (0, W.s)(o?.image_asset_pointer) ?? o,
                                c = (0, W.i)((0, W.s)((0, W.s)(d?.metadata)?.dalle)?.prompt) ?? (0, W.i)((0, W.e)(l)),
                                u = (0, W.i)(n.id);
                            return null == c || null == u ? null : {
                                assetPointer: r.src,
                                messageId: u,
                                content: {
                                    title: Array.from(r.chatGptDisplayTitle?.trim() || c).slice(0, 200).join(""),
                                    prompt: c
                                }
                            }
                        }({
                            mapping: e
                        }, ei.item)
                    },
                    l = r();
                return null != l ? l : (await (0, O.a)(F, i, a), r())
            }, M[13] = ei, M[14] = e.serverConversationId, M[15] = F, M[16] = l) : l = M[16], M[17] !== n || M[18] !== l || M[19] !== eo ? (o = {
                enabled: eo,
                queryKey: n,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: l
            }, M[17] = n, M[18] = l, M[19] = eo, M[20] = o) : o = M[20];
            let {
                data: ec
            } = (0, f.a)(o), eu = ec?.messageId ?? null, em = ec?.assetPointer ?? null;
            M[21] !== H || M[22] !== e.serverConversationId || M[23] !== eu || M[24] !== em || M[25] !== U ? (d = {
                accountId: H,
                userId: U,
                conversationId: e.serverConversationId,
                messageId: eu,
                assetPointer: em
            }, M[21] = H, M[22] = e.serverConversationId, M[23] = eu, M[24] = em, M[25] = U, M[26] = d) : d = M[26];
            let eg = d,
                {
                    editedContent: ep,
                    publication: eh,
                    revision: ef
                } = (0, v.x)(K, eg),
                ev = eo && null != ec,
                eb = ev && null == es && "image_with_prompt" === Z.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                e_ = ev && "template" === ee;
            M[27] !== ep || M[28] !== eh?.title || M[29] !== ec ? (c = ep ?? (null == ec ? void 0 : {
                ...ec.content,
                title: eh?.title ?? ec.content.title
            }), M[27] = ep, M[28] = eh?.title, M[29] = ec, M[30] = c) : c = M[30];
            let ey = c;
            M[31] !== J.accountId || M[32] !== J.userId || M[33] !== F ? (u = function() {
                if (F.get(r.f) !== J.accountId || F.get(r.j) !== J.userId) throw Error("Image prompt share account changed")
            }, M[31] = J.accountId, M[32] = J.userId, M[33] = F, M[34] = u) : u = M[34];
            let eI = u;
            M[35] !== ey || M[36] !== ei || M[37] !== e.source || M[38] !== eI || M[39] !== F || M[40] !== eg || M[41] !== ec ? (m = async function(t) {
                let a;
                if (eI(), null == ec || null == ey || !N(ey)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await Q(F, eg, ec.content)
                } catch (e) {
                    if (e instanceof w.FetchError && "prompt_share_not_publishable" === e.errorCode) throw new P.a;
                    throw e
                }
                if (eI(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, s.a)(F, h, {
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
            }, M[35] = ey, M[36] = ei, M[37] = e.source, M[38] = eI, M[39] = F, M[40] = eg, M[41] = ec, M[42] = m) : m = M[42];
            let ex = m;
            if (M[43] !== en || M[44] !== eb ? (L = en ? (0, g.jsx)(y.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt"
                }) : "image_with_prompt" === eb ? (0, g.jsx)(y.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt"
                }) : (0, g.jsx)(y.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image"
                }), M[43] = en, M[44] = eb, M[45] = L) : L = M[45], !er) return null;
            let eS = e_ ? "template" : "image";
            return M[46] !== D || M[47] !== en || M[48] !== ee || M[49] !== L || M[50] !== ev ? (R = ev ? e => (0, g.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, g.jsx)(I.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: ee,
                    onSelect: et,
                    ariaLabel: D.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: en ? (0, g.jsx)(y.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only"
                        }) : (0, g.jsx)(y.a, {
                            id: "imagePromptShare.imageOnly",
                            defaultMessage: "Image only"
                        })
                    }, {
                        id: "template",
                        disabled: e,
                        label: L
                    }]
                })
            }) : void 0, M[46] = D, M[47] = en, M[48] = ee, M[49] = L, M[50] = ev, M[51] = R) : R = M[51], M[52] !== ey || M[53] !== ex || M[54] !== ei?.alt || M[55] !== eI || M[56] !== ef || M[57] !== F || M[58] !== eg || M[59] !== ec || M[60] !== eb || M[61] !== e_ ? (k = e_ && null != ey ? {
                label: eb,
                revision: ef,
                createLink: ex,
                actionsDisabled: !N(ey),
                preview: (e, t, a) => (0, g.jsx)(B, {
                    content: ey,
                    previewSrc: t,
                    alt: ei?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (eI(), null == ec) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== ey.title.trim() || e.prompt !== ey.prompt) && await async function(e, t, a, i) {
                            X(e, t);
                            let n = e.get(K, t),
                                r = null == n.idempotencyKey ? n.publication : await Q(e, t, a),
                                l = i;
                            if (null != r) {
                                let e = await V.Request.safePatch("/share/post/{post_id}/prompt-share", {
                                    isExpectedError: Y,
                                    parameters: {
                                        path: {
                                            post_id: r.post_id
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
                        }(F, eg, ec.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), eI(), a()
                    }
                })
            } : void 0, M[52] = ey, M[53] = ex, M[54] = ei?.alt, M[55] = eI, M[56] = ef, M[57] = F, M[58] = eg, M[59] = ec, M[60] = eb, M[61] = e_, M[62] = k) : k = M[62], M[63] !== ea || M[64] !== e || M[65] !== eS || M[66] !== R || M[67] !== k ? (G = (0, g.jsx)(j.a, {
                ...e,
                mobileImageRowScrollPositions: ea,
                imageShareOptions: R,
                imagePromptTemplate: k
            }, eS), M[63] = ea, M[64] = e, M[65] = eS, M[66] = R, M[67] = k, M[68] = G) : G = M[68], G
        }

        function $(e, t) {
            let a, {
                    additionalImages: d,
                    alt: g,
                    downloadAnalyticsImage: p,
                    downloadIsParagen: h,
                    image: f,
                    isDirectLightboxShare: v,
                    previewSrc: b,
                    serverConversationId: _,
                    source: y = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    title: I
                } = t,
                x = crypto.randomUUID(),
                S = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    conversationId: _,
                    shareSessionId: x,
                    source: y
                };
            (0, s.a)(e, i.i, {
                ...S,
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED"
            });
            let w = e.get(r.f),
                E = e.get(r.j),
                P = (0, n.d)(),
                j = P && null != w && null != E ? (0, c.h)(e.get(o.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                T = e.get(r.e),
                A = "loaded" === T.status && "personal" === T.structure || "loading" === T.status && "personal" === T.structureAtLogin,
                C = null == j ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: j,
                    isMobileBrowser: P,
                    isPersonalAccount: A
                }),
                O = () => e.get(r.f) === w && e.get(r.j) === E,
                L = t => {
                    !t.isWorkspaceOnly && t.shareLinkId !== a && O() && (a = t.shareLinkId, (0, s.a)(e, i.i, {
                        ...S,
                        action: "CHATGPT_SHARE_FLOW_ACTION_POST_LINK_PREPARED",
                        shareId: t.shareLinkId
                    }))
                },
                R = {
                    additionalImages: d,
                    alt: g,
                    downloadAnalyticsImage: p,
                    downloadIsParagen: h,
                    isDirectLightboxShare: v,
                    item: f,
                    previewSrc: b
                },
                k = () => (0, l.f)(e, J, {
                    currentNodeId: f.id,
                    image: R,
                    serverConversationId: _,
                    shareSessionId: x,
                    source: y,
                    title: I,
                    mobileImageExperience: C,
                    mobileImagePromptShareTreatment: j?.promptShareTreatment,
                    onImageShareLinkPrepared: null == j ? void 0 : L,
                    trackMobileImageShareLifecycle: P && j?.kind === "native"
                });
            P && j?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, _, R);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void k();
                    if (!O()) return;
                    if (!A) return void k();
                    L(a);
                    let i = await (0, m.b)(e, a, _, x, y);
                    if ("shared" === i || "cancelled" === i) return
                } catch {}
                O() && k()
            }(): k()
        }
        async function Z(e, t) {
            if (!t.src?.startsWith("data:image/gif")) return t;
            let {
                uploadChatGptConversationFile: i
            } = await Promise.resolve().then(a.bind(a, "PYGO")), {
                file: n
            } = (0, d.a)(t.src, "animation.gif"), r = await i(e, n, {
                storeInLibrary: !1
            });
            return {
                ...t,
                src: `sediment://${r.id}`
            }
        }
    }),
    ONnF: (function(e, t, a) {
        var i = a("BolX"),
            n = a("OWtl"),
            r = a("zHp1"),
            l = a("Kwur");
        let s = (0, i.q)(n.a, e => {
            let {
                accountId: t,
                conversationId: a,
                fileId: i,
                userId: n
            } = e;
            return {
                queryKey: ["library-api", t, n, "generated-image-info", i, a],
                staleTime: 3e4,
                queryFn: e => {
                    let {
                        signal: n
                    } = e;
                    return l.Request.safeGet("/files/{file_id}/simple", {
                        additionalHeaders: {
                            "ChatGPT-Account-ID": t
                        },
                        parameters: {
                            path: {
                                file_id: i
                            },
                            query: {
                                conversation_id: a
                            }
                        },
                        signal: n
                    })
                },
                refetchInterval: e => "success" === e.state.status && e.state.data?.library_file_id == null && e.state.dataUpdateCount < 6 && Math.min(2e3 * 2 ** (e.state.dataUpdateCount - 1), 8e3)
            }
        });

        function o(e) {
            return "completed" !== e.status || e.isPreview || null == e.src || !(0, r.h)(e.src) ? null : e.src.slice(e.src.indexOf("://") + 3)
        }
        a.d(t, {}, {
            a: s,
            b: o,
            c: function(e, t, a) {
                if (null == e) return;
                let i = o(e);
                if (null != i) return {
                    conversationId: t,
                    identity: {
                        type: "file",
                        fileId: i
                    },
                    mimeType: e.chatGptImageMetadata?.mimeType,
                    name: a
                }
            }
        })
    }),
    Tw2n: (function(e, t, a) {
        var i = a("mBJV"),
            n = a("BolX"),
            r = a("Vi6J"),
            l = a("ASxG"),
            s = a("maWI"),
            o = a("Cslg"),
            d = a("yGJW"),
            c = a("OWtl"),
            u = a("dQRk"),
            m = a("srYL");
        let g = (0, n.v)(c.a, e => ({})),
            p = l.object({
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
            let n, r, {
                    element: l,
                    isCurrentImage: c,
                    assetPointer: u
                } = t,
                m = l.ownerDocument,
                p = !1,
                h = () => {
                    let t;
                    if (p || !l.isConnected || !l.complete || 0 === l.naturalWidth || !c() || null == r) return;
                    let a = e.get(o.m),
                        {
                            userId: n
                        } = a;
                    if (a.authLoading || "chatgpt" !== a.authMethod || !n || a.authenticatedAccountId !== r.accountId) return;
                    let {
                        accountId: h,
                        conversationId: v,
                        messageId: b,
                        asyncCompletionId: _,
                        isDelayed: y
                    } = r, I = null == u ? void 0 : (0, s.b)(m);
                    if (null != I && null != u) {
                        if ("allowed" !== e.get(d.c).getAnalyticsAdmission()) return;
                        t = function(e, t, a, n, r, l) {
                            let {
                                conversationId: o,
                                messageId: c,
                                accountId: u,
                                asyncCompletionId: m
                            } = n, g = JSON.stringify([o, l, u, c, r]), p = t.firstLoads.get(g);
                            if (null != p) return p;
                            let h = t.loads.get(a);
                            if (null == h || h.src !== a.src) return;
                            let f = new Set;
                            t.firstLoads.set(g, {
                                status: "pending",
                                onSettled: f
                            });
                            let v = n => {
                                let r = e.get(d.c),
                                    p = crypto.randomUUID();
                                (0, d.a)(e, i.Ob, {
                                    conversationId: o,
                                    messageId: c,
                                    asyncCompletionId: m,
                                    resultLoadId: p,
                                    ...h.timing
                                }, i => {
                                    let l = e.get(d.c);
                                    if ("sent" !== i.status && n && l !== r && "allowed" === l.getAnalyticsAdmission() && (0, s.b)(a.ownerDocument) === t) return void v(!1);
                                    let o = "sent" === i.status ? p : void 0;
                                    for (let e of (null == o ? t.firstLoads.delete(g) : t.firstLoads.set(g, {
                                            status: "sent",
                                            id: o
                                        }), f)) e(o);
                                    f.clear()
                                }, void 0, {
                                    expectedUserId: l,
                                    expectedAccountId: u
                                })
                            };
                            return v(!0), t.firstLoads.get(g)
                        }(e, I, l, r, u, n)
                    }
                    if ("visible" !== m.visibilityState) return;
                    let x = JSON.stringify([n, h, null == _ ? "message" : "async", _ ?? b]),
                        S = e.get(g, v)[x];
                    if ("viewed" === S) return void f();
                    if ("pending" === S) return;
                    e.set(g, v, e => ({
                        ...e,
                        [x]: "pending"
                    }));
                    let w = new Date(Date.now()).toISOString(),
                        E = t => {
                            e.set(g, v, e => {
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
                        P = t => {
                            null != I && (0, s.b)(m) !== I ? E(!1) : (0, d.a)(e, i.Pb, {
                                conversationId: v,
                                messageId: b,
                                asyncCompletionId: _,
                                isDelayed: y,
                                ...t && {
                                    resultLoadId: t
                                }
                            }, e => E("sent" === e.status), void 0, null == I ? void 0 : {
                                expectedUserId: n,
                                expectedAccountId: h,
                                eventCreatedAt: w
                            })
                        };
                    t?.status === "pending" ? t.onSettled.add(P) : P(t?.id)
                };

            function f() {
                p || (p = !0, n?.(), m.removeEventListener("visibilitychange", h), l.removeEventListener("load", h))
            }
            return m.addEventListener("visibilitychange", h), l.addEventListener("load", h), n = e.watch(e => {
                let {
                    get: t
                } = e;
                t(o.m), t(d.c), r = a(t), h()
            }), p && n(), f
        }
        a.d(t, {}, {
            a: function(e, t) {
                let {
                    conversationId: a,
                    messageId: i,
                    assetPointer: n,
                    element: l,
                    nativeLoad: d,
                    isCurrentImage: c
                } = t;
                return d && (0, s.a)(l), f(e, {
                    element: l,
                    isCurrentImage: c,
                    assetPointer: n
                }, e => {
                    let t = e(o.m).authenticatedAccountId,
                        l = e(u.j, a),
                        s = e(u.N, a)?.[i]?.message,
                        d = e(u._, a),
                        c = function(e, t) {
                            if (e?.author.role !== "tool" || !(0, r.b)(e.author.name) || "multimodal_text" !== e.content.content_type || e.metadata?.is_visually_hidden_from_conversation) return;
                            let a = e.metadata?.image_gen_delayed;
                            if (null != a && !(0, m.c)(e)) return;
                            let i = p.safeParse(e.metadata).data,
                                n = i?.async_completion_id ?? void 0;
                            if (e.content.parts.some(e => {
                                    let a = h.safeParse(e);
                                    return a.success && a.data.asset_pointer === t && !a.data.metadata.is_no_auth_placeholder && a.data.metadata.generation.height >= a.data.height
                                })) return {
                                asyncCompletionId: n,
                                isDelayed: null != a
                            }
                        }(s, n);
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
                    isCurrentImage: n
                } = t;
                return f(e, {
                    element: i,
                    isCurrentImage: n
                }, () => a)
            }
        })
    }),
    tf6h: (function(e, t, a) {
        var i = a("HFi9"),
            n = a.n(i),
            r = a("KUdL"),
            l = a.n(r),
            s = a("BolX"),
            o = a("iqEK"),
            d = a("Cslg"),
            c = a("s5Ri"),
            u = a("YITL"),
            m = a("OWtl"),
            g = a("tSEg"),
            p = a("dQRk"),
            h = a("uR23");
        let f = (0, s.v)(g.a, e => null),
            v = (0, s.d)(m.a, (e, t) => {
                var a;
                let i, {
                    get: r
                } = t;
                if (null == e || !r(u.c) || null != r(p.$, e)) return null;
                let s = r(p.j, e),
                    o = r(d.f),
                    c = r(h.b);
                if (null == s || null == o || null == c) return null;
                let {
                    data: m
                } = r(h.a, {
                    accountId: o,
                    allowRequestUserFallback: !0,
                    userId: c,
                    serverConversationId: s,
                    conversationId: e
                });
                return {
                    versions: (a = m ?? [], i = l()(a.filter(I), e => Date.parse(e.record_creation_time)), new Map(Object.entries(n()(i, e => e.image_edit.source_file_id)))),
                    listedDocuments: null == m ? void 0 : {
                        conversationId: s,
                        ids: new Set(m.map(e => e.id))
                    }
                }
            });

        function b(e, t) {
            return null != t && t.id !== t.sourceImageId ? e.find(e => e.id === t.sourceImageId) : void 0
        }

        function _(e, t) {
            let a = (0, o.d)(e.src ?? "");
            return "completed" !== e.status || e.isPreview || null == a ? [] : t.get(a) ?? []
        }

        function y(e, t) {
            return (0, c.a)(e, t.id, t.file_id, t.image_edit.snapshot_version, t.file_size_bytes, t.width ?? e.width, t.height ?? e.height)
        }

        function I(e) {
            return "image_layers" === e.library_artifact_type && e.image_edit?.snapshot_version != null
        }
        a.d(t, {}, {
            a: v,
            b: b,
            c: function(e, t) {
                return e.flatMap(e => [e, ..._(e, t).map(t => y(e, t))])
            },
            d: function(e, t, a) {
                if (null == t || a?.id === e.id) return e;
                let i = _(e, t),
                    n = i.find(e => e.id === a?.id) ?? i.at(-1);
                return null == n ? e : y(e, n)
            },
            e: function(e, t, a) {
                return null != b(e, a) || null != t && e.some(e => _(e, t).length > 0)
            },
            f: f
        })
    }),
    PxnS: (function(e, t, a) {
        var i = a("EA6X"),
            n = a("lSdY"),
            r = a("BolX"),
            l = a("aiHW"),
            s = a("yGJW"),
            o = a("OWtl"),
            d = a("xsLm"),
            c = a("HgLj"),
            u = a("XW2n");
        let m = (0, r.u)(o.a, () => new WeakMap),
            g = (0, r.d)(o.a, (e, t) => {
                let {
                    widgetType: a,
                    turnMessageId: i,
                    sourceMessageId: r
                } = e, {
                    get: l
                } = t, s = l(u.b);
                if (s?.productExperience !== n.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS) return;
                let o = r ?? i,
                    d = null != i && s.messageIds.has(i) ? i : void 0;
                if (null != o && (s.messageIds.has(o) || null != d)) return {
                    widgetType: a,
                    messageId: o,
                    assistantMessageId: d
                }
            });

        function p(e, t, a, n) {
            (0, s.a)(e, i.j, {
                ...t,
                actionType: a,
                widgetActionTarget: n,
                surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                isGenui: "model_written_dil" === t.widgetType || void 0
            })
        }
        a.d(t, {}, {
            a: function(e, t, a, i) {
                return (0, c.a)(i, a => {
                    if (!t || !a) return;
                    let i = e.get(m);
                    if (i.get(a) !== t.messageId) return (0, d.a)(a, () => {
                        for (let e = (0, l.a)(a); e; e = (0, l.a)(e))
                            if (e.hasAttribute("data-shared-answer-widget-shell")) return !0;
                        return i.set(a, t.messageId), p(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_VIEWPORT_IMPRESSION", "widget_container"), !0
                    }, {
                        threshold: .01
                    })
                })(a)
            },
            b: function(e, t, a) {
                t && p(e, t, "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED", a)
            },
            c: g
        })
    }),
    umQU: (function(e, t, a) {
        var i = a("BolX"),
            n = a("ccwJ"),
            r = a("Kwur"),
            l = a("dQRk"),
            s = a("bmqg"),
            o = a("SGsN"),
            d = a("urzV"),
            c = a("svjy"),
            u = a("tSEg"),
            m = a("zHp1"),
            g = a("Yscs"),
            p = a("GDNt");
        let h = (0, i.v)(u.a, e => null),
            f = (0, i.j)(u.a, (e, t) => {
                let a, {
                        image: i,
                        imageAssetResolver: s
                    } = e,
                    {
                        signal: u,
                        scope: f
                    } = t,
                    v = i?.gifPlayback?.originalSrc ?? i?.src,
                    y = JSON.stringify([i?.id, v]),
                    I = 0,
                    x = Promise.resolve(),
                    S = u({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (i?.isAnimated) return f.watch(t => {
                                if (0 !== I) return;
                                let a = t.get(h, y),
                                    r = (0, n.d)(b(t, i)?.gifPlayback, a ?? void 0);
                                (null != a || 1 !== r) && (e({
                                    preview: null,
                                    busy: !0
                                }), j(r, !1))
                            })
                        }
                    }),
                    w = async e => {
                        let t = null != e && (0, m.h)(e) && null != s ? await (0, m.a)(f.queryClient, e, s) : e,
                            a = null == t ? null : await (0, d.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, E = () => (null == a && (a = w(v).catch(e => {
                        throw a = void 0, e
                    })), a), P = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                            a = b(f, i),
                            r = t === a?.watermarkedSrc ? a?.gifPlayback?.watermarkedVariants : a?.gifPlayback?.variants;
                        if (!(0, n.a)(r).includes(e)) throw Error("GIF speed variant unavailable");
                        let l = 1 === e ? void 0 : r?.[String(e)],
                            s = S.get().preview;
                        if (s?.speed === e && s.originalSrc === t && s.assetSrc === l) return s;
                        let o = null == l && t === v ? await E() : await w(l ?? t);
                        return {
                            assetSrc: l,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, g.a)(o),
                            sizeBytes: o.size
                        }
                    }, j = async (e, t) => {
                        let a = ++I;
                        S.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let n = await P(e);
                            if (a !== I) return !1;
                            return S.set({
                                preview: n,
                                busy: !1
                            }), t && (f.set(h, y, e), x = x.then(async () => {
                                if (a !== I || "chatgpt-thread" !== f.value.routeKind || i?.chatGptMessageId == null || null == v) return;
                                let t = f.get(l.j, f.value.conversationId);
                                null != t && await r.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: i.chatGptMessageId,
                                        asset_pointer: v,
                                        selected_speed: e
                                    },
                                    expectedErrorStatuses: [404, 405]
                                })
                            }).catch(e => {
                                e instanceof p.a && (404 === e.status || 405 === e.status) || f.get(o.f).danger(f.get(c.a).formatMessage({
                                    id: "gifEditor.saveSpeedFailed",
                                    defaultMessage: "Couldn’t save GIF speed. Try again"
                                }), {
                                    errorAnalytics: {
                                        toastId: "gifEditor.saveSpeedFailed"
                                    }
                                })
                            })), !0
                        } catch {
                            return t && a === I && f.get(o.f).danger(f.get(c.a).formatMessage({
                                id: "gifEditor.speedChangeFailed",
                                defaultMessage: "Couldn’t change GIF speed. Try again"
                            }), {
                                errorAnalytics: {
                                    toastId: "gifEditor.speedChangeFailed"
                                }
                            }), !1
                        } finally {
                            a === I && S.set(e => ({
                                ...e,
                                busy: !1
                            }))
                        }
                    };
                return {
                    state$: S,
                    loadOriginal: E,
                    loadExport: async e => 1 === e ? E() : w((await P(e)).src),
                    changeSpeed: e => j(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let i = (0, n.d)(b(f, e)?.gifPlayback, S.get().preview?.speed ?? f.get(h, y) ?? void 0),
                            r = {
                                ...e,
                                src: t,
                                gifPlayback: {
                                    ...e.gifPlayback,
                                    originalSrc: t,
                                    speed: i
                                }
                            };
                        if (1 === i) return r;
                        let l = await P(i, t);
                        return _(r, a && null != l.assetSrc ? {
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
            v = (0, i.d)(u.a, (e, t) => {
                let {
                    image: a,
                    conversationId: i,
                    imageAssetResolver: r
                } = e, {
                    scope: l
                } = t, s = b(l, a, i), o = l.get(f, {
                    image: s?.isAnimated === !0 ? s : void 0,
                    imageAssetResolver: r
                }), {
                    preview: d
                } = l.get(o.state$);
                return {
                    playback: o,
                    previewSrc: null != d && (0, n.a)(s?.gifPlayback?.variants).includes(d.speed) ? d.src : void 0,
                    image: null == s ? void 0 : _(s, d),
                    originalSrc: s?.isAnimated === !0 ? s.gifPlayback?.originalSrc ?? s.src : s?.src,
                    canControl: s?.isAnimated === !0 && (0, n.a)(s.gifPlayback?.variants).length > 1
                }
            });

        function b(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(s.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function _(e, t) {
            let a = (0, n.d)(e.gifPlayback),
                i = null != e.gifPlayback && e.gifPlayback.speed !== a ? {
                    ...e,
                    gifPlayback: {
                        ...e.gifPlayback,
                        speed: a
                    }
                } : e;
            return !0 === e.isAnimated && null != t && (0, n.a)(e.gifPlayback?.variants).includes(t.speed) && t.originalSrc === (e.gifPlayback?.originalSrc ?? e.src) ? {
                ...e,
                src: t.src,
                sizeBytes: t.sizeBytes,
                gifPlayback: {
                    ...e.gifPlayback,
                    originalSrc: t.originalSrc,
                    speed: t.speed
                }
            } : i
        }
        a.d(t, {}, {
            a: _,
            b: b,
            c: f,
            d: v
        })
    }),
    I0AH: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            r = a("on57");
        a.d(t, {}, {
            a: function(e) {
                let t, a, l = (0, n.c)(14),
                    {
                        ariaLabel: s,
                        children: o,
                        className: d,
                        variant: c
                    } = e,
                    u = void 0 === c ? "compact" : c;
                if ("embedded" === u) {
                    let e, t = null == s ? void 0 : "group";
                    return l[0] !== s || l[1] !== o || l[2] !== t ? (e = (0, i.jsx)("div", {
                        role: t,
                        "aria-label": s,
                        className: "flex min-w-0 items-center",
                        children: o
                    }), l[0] = s, l[1] = o, l[2] = t, l[3] = e) : e = l[3], e
                }
                let m = null == s ? void 0 : "toolbar",
                    g = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                    p = "imageTools" === u && "gap-0 shadow-md",
                    h = "playback" === u && "gap-2 shadow-sm";
                return l[4] !== d || l[5] !== g || l[6] !== p || l[7] !== h ? (t = (0, r.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", g, p, h, d), l[4] = d, l[5] = g, l[6] = p, l[7] = h, l[8] = t) : t = l[8], l[9] !== s || l[10] !== o || l[11] !== m || l[12] !== t ? (a = (0, i.jsx)("div", {
                    role: m,
                    "aria-label": s,
                    className: t,
                    children: o
                }), l[9] = s, l[10] = o, l[11] = m, l[12] = t, l[13] = a) : a = l[13], a
            }
        })
    }),
    s5Ri: (function(e, t, a) {
        var i = a("zMIV"),
            n = a.n(i),
            r = a("iqEK");

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

        function s(e, t, a, i, n) {
            let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e.width,
                l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e.height;
            return {
                type: "generated-image",
                status: "completed",
                id: t,
                src: o(a),
                width: r,
                height: l,
                sizeBytes: n,
                chatGptImageMetadata: {
                    mimeType: "image/png"
                },
                layerRevision: {
                    version: i,
                    sourceImageId: e.layerRevision?.sourceImageId ?? e.id
                }
            }
        }

        function o(e) {
            return e.startsWith("file-") ? `file-service://${e}` : `sediment://${e}`
        }
        a.d(t, {}, {
            a: s,
            b: function(e, t, a, i, d) {
                let c = e.map(e => ({
                    ...e,
                    images: e.images.map(e => e.loading || null == e.textEditingOperationId || t.some(t => t.id === e.textEditingOperationId) ? e : n()(e, ["textEditingOperationId", "textEditingSourceImageId", "textEditingConversationImageId", "textEditingOriginalImageId", "textEditingStatus", "textEditingVersion"]))
                }));
                for (let e of t) {
                    let {
                        documentId: t,
                        imageFileId: n
                    } = e;
                    if (null != t && null != d && !d.ids.has(t) && e.listedInConversationIds?.includes(d.conversationId)) continue;
                    let u = l(c, t => t.id === e.sourceImageId) ?? l(c, t => !t.loading && (0, r.d)(t.src) === e.sourceFileId);
                    if (null == u && e.galleryId !== a && null == n) continue;
                    let m = null == t ? void 0 : n,
                        g = null == t ? void 0 : l(c, e => !e.loading && (e.textEditingDocumentId === t || null != m && (0, r.d)(e.src) === m)),
                        p = g?.image,
                        h = null == t ? void 0 : (null == p || p.loading ? void 0 : p.textEditingVersion) ?? e.version,
                        f = {
                            id: e.id,
                            textEditingOperationId: e.id,
                            textEditingDocumentId: t,
                            textEditingVersion: h,
                            textEditingStatus: "snapshot" === e.kind && "loading" === e.status ? "saving" : e.status
                        };
                    if (null != g && null != p && !p.loading && (null == u || p.textEditingDocumentId === t)) {
                        let t = p.textEditingOriginalImageId ?? p.id;
                        g.group.images[g.index] = {
                            ...p,
                            ...f,
                            textEditingSourceImageId: null != u && u.image !== p ? u.image.id : e.id,
                            textEditingConversationImageId: p.textEditingConversationImageId ?? t,
                            textEditingOriginalImageId: t
                        };
                        continue
                    }
                    if (null == u) continue;
                    let {
                        group: v,
                        image: b
                    } = u;
                    if (b.loading) continue;
                    let _ = null != m ? o(m) : b.src,
                        y = "preparation" === e.kind ? i.editableCopy : i.editedCopy,
                        I = b.sourceImage;
                    null != I && null != t && null != m && null != h ? I = s(I, t, m, h) : null != I && (null == I.layerRevision || I.src !== _) && (I = {
                        ...I,
                        layerRevision: void 0,
                        id: e.id,
                        src: _,
                        previewSrc: _,
                        displayVariants: void 0,
                        displayVariantId: void 0
                    });
                    let x = {
                        ...b,
                        ...f,
                        src: _,
                        previewSrc: _,
                        alt: y,
                        tabTitle: y,
                        displayVariants: void 0,
                        displayVariantId: void 0,
                        hasPanoramaPrompt: !1,
                        textEditingSourceImageId: b.id,
                        textEditingConversationImageId: b.textEditingConversationImageId ?? b.id,
                        textEditingOriginalImageId: null == p || p.loading || p.id === b.id ? void 0 : p.textEditingOriginalImageId ?? (p.id === e.id ? void 0 : p.id),
                        sourceImage: I
                    };
                    for (let t of c) t.images = t.images.filter(a => a.id === e.id ? t === v : a.loading || a.id === b.id || null == m || (0, r.d)(a.src) !== m);
                    let S = v.images.findIndex(t => t.id === e.id);
                    if (S >= 0) v.images[S] = x;
                    else {
                        let e = v.images.findIndex(e => e.id === b.id);
                        v.images.splice(e + 1, 0, x)
                    }
                }
                return c.filter(e => e.images.length > 0)
            }
        })
    }),
    EQ0X: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            r = a("slpy"),
            l = a("zd8w"),
            s = a("Wf1j"),
            o = a("oyxz"),
            d = a("Sm6l"),
            c = a("bqtn"),
            u = a("HOLv"),
            m = a("bf6R"),
            g = a("UxN3"),
            p = a("ddzD"),
            h = a("I0AH"),
            f = a("j9wQ"),
            v = a("ZedP"),
            b = a("dPgE"),
            _ = a("dRu8");

        function y(e) {
            let t, a = (0, n.c)(3),
                l = !0 !== e["aria-expanded"] && "true" !== e["aria-expanded"] && void 0;
            return a[0] !== e || a[1] !== l ? (t = (0, i.jsx)(r.a, {
                ...e,
                forceOpen: l
            }), a[0] = e, a[1] = l, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r, I, x, S, w, E = (0, n.c)(53),
                    {
                        downloadImageCount: P,
                        floatingToolbarVariant: j,
                        moreActions: T,
                        isAnimated: A,
                        isImageActionsDisabled: C,
                        isUnifiedViewerEnabled: O,
                        onDownload: L,
                        onDownloadAll: R,
                        onDownloadMenuOpen: k,
                        onShare: G,
                        onShareAll: M,
                        onShareMenuOpen: N,
                        saveAction: F,
                        shareImageCount: D,
                        showShareText: H
                    } = e,
                    B = void 0 !== A && A,
                    W = void 0 !== O && O,
                    q = void 0 !== H && H,
                    z = (0, s.a)(),
                    [U, V] = (0, l.useState)(!1),
                    K = "toolbar";
                null != j && (K = "imageTools" === j ? "imageToolbar" : "composerSm"), E[0] !== K || E[1] !== j || E[2] !== z || E[3] !== C || E[4] !== W || E[5] !== G || E[6] !== M || E[7] !== q ? (t = W ? (0, i.jsxs)(f.c, {
                    "aria-label": z.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }),
                    disabled: C,
                    uniform: !q,
                    onClick: null == M ? G : void 0,
                    children: [(0, i.jsx)(g.b, {
                        icon: {
                            16: m.L,
                            20: m.M
                        }
                    }), q ? (0, i.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }) : null]
                }) : (0, i.jsx)(d.a, {
                    color: null == j ? "primary" : "ghostActive",
                    disabled: C,
                    size: K,
                    onClick: null == M ? G : void 0,
                    children: (0, i.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    })
                }), E[0] = K, E[1] = j, E[2] = z, E[3] = C, E[4] = W, E[5] = G, E[6] = M, E[7] = q, E[8] = t) : t = E[8];
                let Q = t;
                if (null != G && null != M) {
                    let e;
                    E[9] !== B || E[10] !== C || E[11] !== G || E[12] !== M || E[13] !== N || E[14] !== Q || E[15] !== D ? (e = (0, i.jsx)(v.a, {
                        disabled: C,
                        imageCount: D,
                        isAnimated: B,
                        onOpen: N,
                        onShare: G,
                        onShareAll: M,
                        triggerButton: Q
                    }), E[9] = B, E[10] = C, E[11] = G, E[12] = M, E[13] = N, E[14] = Q, E[15] = D, E[16] = e) : e = E[16], Q = e
                }
                if (null != j) {
                    let e;
                    E[17] !== j || E[18] !== Q ? (e = (0, i.jsx)(h.a, {
                        variant: j,
                        children: Q
                    }), E[17] = j, E[18] = Q, E[19] = e) : e = E[19], Q = e
                }
                E[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    V(!0), await e().finally(() => {
                        V(!1)
                    })
                }, E[20] = a) : a = E[20];
                let X = a;
                E[21] !== K || E[22] !== P || E[23] !== j || E[24] !== z || E[25] !== B || E[26] !== U || E[27] !== C || E[28] !== W || E[29] !== L || E[30] !== R || E[31] !== k || E[32] !== F ? (r = null != R && null != L ? (0, i.jsxs)(c.a, {
                    align: "end",
                    disabled: C || U,
                    onOpenChange: e => {
                        e && k?.()
                    },
                    triggerButton: (0, i.jsx)(y, {
                        content: (0, i.jsx)(o.a, {
                            ...(0, p.a)({
                                isAnimated: B
                            }).downloadLabel
                        }),
                        children: W ? (0, i.jsx)(f.c, {
                            "aria-label": z.formatMessage((0, p.a)({
                                isAnimated: B
                            }).downloadLabel),
                            disabled: C || U,
                            loading: U,
                            uniform: !0,
                            children: (0, i.jsx)(g.b, {
                                icon: {
                                    assets: {
                                        16: b.a,
                                        20: _.a
                                    }
                                }
                            })
                        }) : (0, i.jsx)(d.a, {
                            "aria-label": z.formatMessage((0, p.a)({
                                isAnimated: B
                            }).downloadLabel),
                            color: null == j ? "ghost" : "ghostActive",
                            disabled: C || U,
                            loading: U,
                            size: K,
                            uniform: !0,
                            children: "compact" === j ? (0, i.jsx)(u.a, {
                                asset: b.a
                            }) : (0, i.jsx)(m.r, {})
                        })
                    }),
                    children: [(0, i.jsx)(c.c.Item, {
                        onSelect: () => void X(L),
                        children: (0, i.jsx)(o.a, {
                            ...(0, p.a)({
                                isAnimated: B
                            }).downloadMenuLabel
                        })
                    }), (0, i.jsx)(c.c.Item, {
                        onSelect: () => void X(R),
                        children: (0, i.jsx)(o.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            values: {
                                count: P
                            }
                        })
                    })]
                }) : F, E[21] = K, E[22] = P, E[23] = j, E[24] = z, E[25] = B, E[26] = U, E[27] = C, E[28] = W, E[29] = L, E[30] = R, E[31] = k, E[32] = F, E[33] = r) : r = E[33];
                let Y = r;
                if (null != j && null != R && null != L) {
                    let e;
                    E[34] !== Y || E[35] !== j ? (e = (0, i.jsx)(h.a, {
                        variant: j,
                        children: Y
                    }), E[34] = Y, E[35] = j, E[36] = e) : e = E[36], Y = e
                }
                let J = null == G ? null : Q;
                E[37] !== Y || E[38] !== J ? (I = (0, i.jsxs)(i.Fragment, {
                    children: [Y, J]
                }), E[37] = Y, E[38] = J, E[39] = I) : I = E[39];
                let $ = I;
                E[40] !== j || E[41] !== T ? (x = null == T || null == j ? T : (0, i.jsx)(h.a, {
                    variant: j,
                    children: T
                }), E[40] = j, E[41] = T, E[42] = x) : x = E[42];
                let Z = x,
                    ee = null != G || null != Y;
                if (!W || q) {
                    let e;
                    return E[43] !== $ || E[44] !== Z ? (e = (0, i.jsxs)(i.Fragment, {
                        children: [$, Z]
                    }), E[43] = $, E[44] = Z, E[45] = e) : e = E[45], e
                }
                return E[46] !== ee || E[47] !== z || E[48] !== $ ? (S = ee ? (0, i.jsx)(f.i, {
                    label: z.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions"
                    }),
                    children: $
                }) : null, E[46] = ee, E[47] = z, E[48] = $, E[49] = S) : S = E[49], E[50] !== S || E[51] !== Z ? (w = (0, i.jsxs)(i.Fragment, {
                    children: [S, Z]
                }), E[50] = S, E[51] = Z, E[52] = w) : w = E[52], w
            }
        })
    }),
    ZedP: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            r = a("oyxz"),
            l = a("bqtn"),
            s = a("HOLv"),
            o = a("ddzD"),
            d = a("HJ49"),
            c = a("wldO");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, m, g, p, h, f = (0, n.c)(19),
                    {
                        disabled: v,
                        imageCount: b,
                        isAnimated: _,
                        onOpen: y,
                        onShare: I,
                        onShareAll: x,
                        triggerButton: S
                    } = e,
                    w = void 0 !== _ && _;
                return f[0] !== y ? (t = e => {
                    e && y?.()
                }, f[0] = y, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(s.a, {
                    className: "text-gray-1000",
                    asset: d.a
                }), f[2] = a) : a = f[2], f[3] !== w ? (u = (0, o.a)({
                    isAnimated: w
                }), f[3] = w, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (m = (0, i.jsx)(r.a, {
                    ...u.shareSelectionLabel
                }), f[5] = u.shareSelectionLabel, f[6] = m) : m = f[6], f[7] !== I || f[8] !== m ? (g = (0, i.jsx)(l.c.Item, {
                    leftIcon: a,
                    onSelect: I,
                    children: m
                }), f[7] = I, f[8] = m, f[9] = g) : g = f[9], f[10] !== b || f[11] !== x ? (p = null == x ? null : (0, i.jsx)(l.c.Item, {
                    leftIcon: (0, i.jsx)(s.a, {
                        className: "text-gray-1000",
                        asset: c.a
                    }),
                    onSelect: x,
                    children: (0, i.jsx)(r.a, {
                        id: "imagePreview.shareSeries",
                        defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                        values: {
                            imageCount: b
                        }
                    })
                }), f[10] = b, f[11] = x, f[12] = p) : p = f[12], f[13] !== v || f[14] !== t || f[15] !== g || f[16] !== p || f[17] !== S ? (h = (0, i.jsxs)(l.a, {
                    align: "end",
                    disabled: v,
                    triggerButton: S,
                    onOpenChange: t,
                    children: [g, p]
                }), f[13] = v, f[14] = t, f[15] = g, f[16] = p, f[17] = S, f[18] = h) : h = f[18], h
            }
        })
    }),
    TKsx: (function(e, t, a) {
        var i = a("BolX"),
            n = a("Dgwo"),
            r = a("tl5a"),
            l = a("OWtl"),
            s = a("rvFo");
        let o = ["plan", "default"];

        function d(e, t) {
            return {
                queryKey: ["collaboration-modes", "list", t],
                staleTime: s.b.INFINITE,
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
                })((await (0, n.b)(e, t).sendRequest("collaborationMode/list", {})).data, o)
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
                return d(a, t(r.q))
            });
        a.d(t, {}, {
            a: c,
            b: u
        })
    }),
    RiLw: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            r = a("oyxz"),
            l = a("bf6R"),
            s = a("UxN3"),
            o = a("Y3Vu"),
            d = a("lcwe");
        let c = (0, i.jsx)(s.b, {
            className: d.a.shareIcon,
            icon: {
                16: l.L,
                20: l.M
            }
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, l, s, d, u = (0, n.c)(9);
                u[0] !== e ? ({
                    children: t,
                    leading: l,
                    ...a
                } = e, u[0] = e, u[1] = t, u[2] = a, u[3] = l) : (t = u[1], a = u[2], l = u[3]);
                let m = void 0 === l ? c : l;
                return u[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)("span", {
                    "data-page-share-label": !0,
                    "data-tooltip-visibility-target": !0,
                    "data-tooltip-enablement-target": !0,
                    "data-viewer-header-collapsible": !0,
                    className: "overflow-hidden whitespace-nowrap",
                    children: (0, i.jsx)(r.a, {
                        id: "artifactViewer.share",
                        defaultMessage: "Share"
                    })
                }), u[4] = s) : s = u[4], u[5] !== t || u[6] !== m || u[7] !== a ? (d = (0, i.jsxs)(o.a, {
                    focusRing: "inset",
                    ...a,
                    children: [m, s, t]
                }), u[5] = t, u[6] = m, u[7] = a, u[8] = d) : d = u[8], d
            }
        })
    })
};