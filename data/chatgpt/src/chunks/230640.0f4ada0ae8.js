export const __rspack_esm_ids = [230640];
export const __webpack_modules__ = {
    piij: (function(e, t, a) {
        e.exports = a.p + "assets/space-recovery.105d9c61fe.png"
    }),
    vSCF: (function(e, t, a) {
        var i = a("ABep"),
            n = a("Bbed"),
            r = a("N55g");
        let s = (0, n.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(322024), a.e(81461), a.e(882456), a.e(212773), a.e(259288), a.e(268159), a.e(456707), a.e(839342), a.e(221469), a.e(499790), a.e(301030), a.e(953533), a.e(383559), a.e(909395), a.e(587936), a.e(865302), a.e(452048), a.e(684598), a.e(299268), a.e(134408), a.e(433520), a.e(543588), a.e(17983), a.e(167649), a.e(910298), a.e(16212), a.e(722053), a.e(113138), a.e(985170), a.e(960277)]).then(a.bind(a, "XPeo"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, i.jsx)(r.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: s
        })
    }),
    xof2: (function(e, t, a) {
        var i = a("EA6X"),
            n = a("D015"),
            r = a("yGJW"),
            s = a("OMIV"),
            l = a("CTBG"),
            o = a("Kwur"),
            d = a("dQRk"),
            c = a("hx97");

        function u(e, t, a) {
            if (null == t || null == a) return;
            let i = 0,
                r = !1;
            for (let s of e.get(l.c, t) ?? [])
                if ((0, c.o)(s) && (r = !1), "assistant" !== s.author.role || r || (i += 1, r = !0), s.id === a) return i > 0 ? (0, n.a)(i) : void 0
        }

        function m(e, t) {
            let a = e.parentContext;
            return {
                action_type: t,
                surface_location: e.surfaceLocation,
                assistant_message_id: e.assistantMessageId,
                turn_ordinal: e.turnOrdinal,
                content_reference_type: e.contentReferenceType,
                content_reference_start_index: e.contentReferenceStartIndex,
                parent_context: null == a ? void 0 : {
                    entity_id: a.entityId,
                    entity_category: a.entityCategory,
                    widget_type: a.widgetType,
                    widget_name: a.widgetName,
                    content_reference_start_index: a.contentReferenceStartIndex,
                    message_id: a.messageId
                }
            }
        }

        function g(e, t) {
            return Math.random() < (e.get(s.g)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(t, 1) ?? 1)
        }

        function p(e, t, a) {
            null != t.actionType && g(e, "widget_action") && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "widget_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        widget_action: {
                            ...m(t, t.actionType),
                            widget_type: t.widgetType,
                            widget_name: t.widgetName,
                            widget_affordance: t.widgetAffordance,
                            widget_action_target: t.widgetActionTarget,
                            widget_action_value: t.widgetActionValue,
                            feedback_reasons: t.feedbackReasons,
                            effect: a
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function h(e, t) {
            null != t.actionType && "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" !== t.actionType && g(e, "entity_action") && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "entity_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        entity_action: {
                            ...m(t, t.actionType),
                            entity_id: t.entityId,
                            entity_category: t.entityCategory,
                            entity_affordance: t.entityAffordance
                        }
                    }
                }
            }).catch(() => void 0)
        }

        function f(e, t) {
            null != t.actionType && g(e, "link_action") && o.Request.safePost("/unified_user_signals", {
                requestBody: {
                    signal_type: "link_action",
                    product_surface: "CHAT",
                    signal_metadata: {},
                    user_metadata: {},
                    signal_detail: {
                        common_metadata: {
                            conversation_id: t.conversationId,
                            message_id: t.messageId
                        },
                        link_action: {
                            ...m(t, t.actionType),
                            link_type: t.linkType,
                            link_affordance: t.linkAffordance,
                            url: t.url,
                            link_index: t.linkIndex,
                            citation_numbers: t.citationNumbers
                        }
                    }
                }
            }).catch(() => void 0)
        }
        a.d(t, {}, {
            a: u,
            b: function(e, t) {
                try {
                    let a = {
                        ...t,
                        conversationId: null == t.conversationId ? void 0 : e.get(d.j, t.conversationId) ?? void 0,
                        turnOrdinal: u(e, t.conversationId, t.assistantMessageId ?? t.messageId)
                    };
                    h(e, a), (0, r.a)(e, i.c, a)
                } catch {}
            },
            c: function(e, t) {
                null != t.actionType && g(e, "image_action") && o.Request.safePost("/unified_user_signals", {
                    requestBody: {
                        signal_type: "image_action",
                        product_surface: "CHAT",
                        signal_metadata: {},
                        user_metadata: {},
                        signal_detail: {
                            common_metadata: {
                                conversation_id: t.conversationId,
                                message_id: t.messageId
                            },
                            image_action: {
                                ...m(t, t.actionType),
                                image_affordance: t.imageAffordance,
                                image_index: t.imageIndex,
                                url: t.url,
                                content_url: t.contentUrl,
                                original_content_url: t.originalContentUrl,
                                tags: t.tags
                            }
                        }
                    }
                }).catch(() => void 0), (0, r.a)(e, i.e, t)
            },
            d: function(e, t) {
                f(e, t), (0, r.a)(e, i.g, t)
            },
            e: function(e, t) {
                h(e, t), (0, r.a)(e, i.c, t)
            },
            f: function(e, t) {
                p(e, t), (0, r.a)(e, i.j, t)
            },
            g: f,
            h: p
        })
    }),
    erFs: (function(e, t, a) {
        a.d(t, {
            a: () => $,
            b: () => Z
        });
        var i = a("FS1B"),
            n = a("RGCh"),
            r = a("Cslg"),
            s = a("X6Vn"),
            l = a("yGJW"),
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
            _ = a("Q840"),
            y = a("zd8w"),
            v = a("Wf1j"),
            b = a("oyxz"),
            I = a("EShr"),
            w = a("OWtl"),
            S = a("hZax"),
            x = a("eShZ"),
            T = a("CKur"),
            A = a("r9i9"),
            E = a("tdfh"),
            P = a("aFoA"),
            j = a("OOaz"),
            C = a("dQRk"),
            O = a("jfiJ"),
            k = a("Sm6l"),
            L = a("bf6R"),
            N = a("MM0V"),
            R = a("JNtf"),
            G = a("mUDD");

        function M(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var F = a("zLIa");

        function H(e) {
            let t, a, i, n, r, s, l, o = (0, p.c)(19),
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
                children: (0, g.jsx)(b.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title"
                })
            }), o[0] = t) : t = o[0], o[1] !== d || o[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), o[1] = d, o[2] = c, o[3] = a) : a = o[3], o[4] !== f || o[5] !== d.title || o[6] !== a ? (i = (0, g.jsxs)(G.f, {
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
                children: (0, g.jsx)(b.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt"
                })
            }), o[8] = n) : n = o[8], o[9] !== d || o[10] !== c ? (r = e => c({
                ...d,
                prompt: e.target.value
            }), o[9] = d, o[10] = c, o[11] = r) : r = o[11], o[12] !== d.prompt || o[13] !== r ? (s = (0, g.jsxs)(G.f, {
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
            }), o[12] = d.prompt, o[13] = r, o[14] = s) : s = o[14], o[15] !== h || o[16] !== i || o[17] !== s ? (l = (0, g.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [i, s]
            }), o[15] = h, o[16] = i, o[17] = s, o[18] = l) : l = o[18], l
        }

        function D(e) {
            let t, a, i, n, r, s, l, o, d, c, u, m, h, f, _, I, w, S, T, A, E = (0, p.c)(54),
                {
                    content: P,
                    onSave: j,
                    onClose: C,
                    onCloseAutoFocus: O
                } = e,
                F = (0, v.a)(),
                [D, W] = (0, y.useState)(P),
                [q, B] = (0, y.useState)(!1),
                [U, z] = (0, y.useState)(null);
            E[0] !== D || E[1] !== q || E[2] !== C || E[3] !== j ? (t = async function() {
                if (!q && M(D)) {
                    B(!0), z(null);
                    try {
                        await j(D), C()
                    } catch (e) {
                        z(e instanceof x.FetchError && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    B(!1)
                }
            }, E[0] = D, E[1] = q, E[2] = C, E[3] = j, E[4] = t) : t = E[4];
            let Q = t,
                V = !q;
            return E[5] !== O ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: O
            }, E[5] = O, E[6] = a) : a = E[6], E[7] !== q || E[8] !== C ? (i = e => {
                e || q || C()
            }, E[7] = q, E[8] = C, E[9] = i) : i = E[9], E[10] !== Q ? (n = e => {
                e.preventDefault(), e.stopPropagation(), Q()
            }, E[10] = Q, E[11] = n) : n = E[11], E[12] !== F ? (r = F.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back"
            }), E[12] = F, E[13] = r) : r = E[13], E[14] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, g.jsx)(L.dc, {}), E[14] = s) : s = E[14], E[15] !== q || E[16] !== C || E[17] !== r ? (l = (0, g.jsx)(k.a, {
                color: "ghost",
                size: "icon",
                disabled: q,
                "aria-label": r,
                onClick: C,
                children: s
            }), E[15] = q, E[16] = C, E[17] = r, E[18] = l) : l = E[18], E[19] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, g.jsx)(G.d, {
                title: (0, g.jsx)(R.f, {
                    children: (0, g.jsx)(b.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt"
                    })
                })
            }), E[19] = o) : o = E[19], E[20] !== l ? (d = (0, g.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [l, o]
            }), E[20] = l, E[21] = d) : d = E[21], E[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                W(e), z(null)
            }, E[22] = c) : c = E[22], E[23] !== D || E[24] !== q ? (u = (0, g.jsx)(G.e, {
                spacing: "large",
                children: (0, g.jsx)(H, {
                    content: D,
                    disabled: q,
                    autoFocus: !0,
                    onChange: c
                })
            }), E[23] = D, E[24] = q, E[25] = u) : u = E[25], E[26] !== U ? (m = null != U && (0, g.jsx)(G.e, {
                children: (0, g.jsx)(N.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === U ? (0, g.jsx)(b.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again."
                    }) : (0, g.jsx)(b.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again."
                    })
                })
            }), E[26] = U, E[27] = m) : m = E[27], E[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, g.jsx)(b.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel"
            }), E[28] = h) : h = E[28], E[29] !== q || E[30] !== C ? (f = (0, g.jsx)(k.a, {
                color: "outline",
                disabled: q,
                onClick: C,
                children: h
            }), E[29] = q, E[30] = C, E[31] = f) : f = E[31], E[32] !== D || E[33] !== q ? (_ = !M(D) || q, E[32] = D, E[33] = q, E[34] = _) : _ = E[34], E[35] === Symbol.for("react.memo_cache_sentinel") ? (I = (0, g.jsx)(b.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save"
            }), E[35] = I) : I = E[35], E[36] !== q || E[37] !== _ ? (w = (0, g.jsx)(k.a, {
                type: "submit",
                color: "primary",
                loading: q,
                disabled: _,
                children: I
            }), E[36] = q, E[37] = _, E[38] = w) : w = E[38], E[39] !== f || E[40] !== w ? (S = (0, g.jsxs)(G.c, {
                expandSingleButton: !1,
                children: [f, w]
            }), E[39] = f, E[40] = w, E[41] = S) : S = E[41], E[42] !== d || E[43] !== u || E[44] !== m || E[45] !== S || E[46] !== n ? (T = (0, g.jsxs)(G.b, {
                as: "form",
                size: "viewport",
                onSubmit: n,
                children: [d, u, m, S]
            }), E[42] = d, E[43] = u, E[44] = m, E[45] = S, E[46] = n, E[47] = T) : T = E[47], E[48] !== q || E[49] !== V || E[50] !== T || E[51] !== a || E[52] !== i ? (A = (0, g.jsx)(R.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: V,
                shouldIgnoreClickOutside: q,
                contentProps: a,
                onOpenChange: i,
                children: T
            }), E[48] = q, E[49] = V, E[50] = T, E[51] = a, E[52] = i, E[53] = A) : A = E[53], A
        }

        function W(e) {
            let t, a, i, n, r, s, l, o, d, c, u, m = (0, p.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: _,
                    disabled: b,
                    onSave: I
                } = e,
                w = (0, v.a)(),
                [S, x] = (0, y.useState)(!1),
                T = (0, y.useRef)(null);
            return m[0] !== _ || m[1] !== f ? (t = null != f && (0, g.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: _,
                src: f,
                referrerPolicy: "no-referrer"
            }), m[0] = _, m[1] = f, m[2] = t) : t = m[2], m[3] !== w ? (a = w.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt"
            }), m[3] = w, m[4] = a) : a = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (i = () => x(!0), n = (0, g.jsx)(L.cg, {}), m[5] = i, m[6] = n) : (i = m[5], n = m[6]), m[7] !== b || m[8] !== a ? (r = (0, g.jsx)(k.a, {
                ref: T,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: b,
                "aria-label": a,
                onClick: i,
                children: n
            }), m[7] = b, m[8] = a, m[9] = r) : r = m[9], m[10] !== t || m[11] !== r ? (s = (0, g.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, r]
            }), m[10] = t, m[11] = r, m[12] = s) : s = m[12], m[13] !== h.title ? (l = (0, g.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: h.title
            }), m[13] = h.title, m[14] = l) : l = m[14], m[15] !== h.prompt ? (o = (0, g.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: h.prompt
            }), m[15] = h.prompt, m[16] = o) : o = m[16], m[17] !== s || m[18] !== l || m[19] !== o ? (d = (0, g.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [s, l, o]
            }), m[17] = s, m[18] = l, m[19] = o, m[20] = d) : d = m[20], m[21] !== h || m[22] !== S || m[23] !== I ? (c = S && (0, g.jsx)(D, {
                content: h,
                onSave: I,
                onClose: () => x(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), T.current?.focus()
                }
            }), m[21] = h, m[22] = S, m[23] = I, m[24] = c) : c = m[24], m[25] !== c || m[26] !== d ? (u = (0, g.jsxs)(g.Fragment, {
                children: [d, c]
            }), m[25] = c, m[26] = d, m[27] = u) : u = m[27], u
        }
        var q = a("AuIy"),
            B = a("iqEK"),
            U = a("ccwJ"),
            z = a("tOYk"),
            Q = a("Kwur");
        let V = (0, _.v)(w.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function K(e, t, a) {
            J(e, t);
            let i = t.assetPointer,
                n = t.messageId;
            if (null == i || null == n) throw Error("Image prompt share source unavailable");
            let r = e.get(V, t);
            if (null != r.publication) return r.publication;
            let s = r.idempotencyKey ?? crypto.randomUUID();
            e.set(V, t, {
                ...r,
                idempotencyKey: s
            });
            try {
                let o = await e.queryClient.fetchQuery({
                    queryKey: ["image-prompt-share-publication", t, s],
                    staleTime: 1 / 0,
                    gcTime: 1 / 0,
                    retry: !1,
                    queryFn: async () => {
                        let o = await Q.Request.safePost("/share/prompt-share", {
                            isExpectedError: Y,
                            requestBody: {
                                idempotency_key: s,
                                conversation_id: t.conversationId,
                                message_id: n,
                                output_asset_pointer: i,
                                post_text: a.title,
                                published_content: r.editedContent ?? void 0
                            }
                        });
                        J(e, t);
                        let d = r.editedContent ?? a;
                        try {
                            d.prompt !== a.prompt && (0, l.a)(e, z.a, {
                                postId: o.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_PROMPT"
                            }), d.title.trim() !== a.title.trim() && (0, l.a)(e, z.a, {
                                postId: o.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_TITLE"
                            })
                        } catch {}
                        return o
                    }
                });
                return J(e, t), e.set(V, t, e => e.publication === o ? e : {
                    ...e,
                    publication: o
                }), o
            } catch (a) {
                throw a instanceof x.FetchError && Y(a) && e.set(V, t, e => null == e.idempotencyKey ? e : {
                    ...e,
                    idempotencyKey: null
                }), a
            }
        }

        function J(e, t) {
            if (null == t.accountId || null == t.userId || e.get(r.f) !== t.accountId || e.get(r.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function Y(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function X(e) {
            let t, a, i, n, s, o, d, c, u, m, k, L, N, R, G = (0, p.c)(69),
                F = (0, _.y)(w.a),
                H = (0, v.a)(),
                D = (0, _.z)(r.f),
                z = (0, _.z)(r.j);
            G[0] !== D || G[1] !== z ? (t = {
                accountId: D,
                userId: z
            }, G[0] = D, G[1] = z, G[2] = t) : t = G[2];
            let [X] = (0, y.useState)(t), $ = (0, S.f)("1939400492"), Z = (0, S.j)("250422953"), [ee, et] = (0, y.useState)("image");
            G[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {}, G[3] = a) : a = G[3];
            let [ea] = (0, y.useState)(a), ei = e.image, en = ei?.item.isAnimated === !0, er = X.accountId === D && X.userId === z, es = null != ei && !ei.additionalImages?.length && null != D && null != z && er && !$, el = e.mobileImagePromptShareTreatment;
            G[4] !== es || G[5] !== Z || G[6] !== el ? (i = es && ("prompt-with-image" === el || null == el && Z.get("imagegen_prompt_share_tabs_enabled", !1)), G[4] = es, G[5] = Z, G[6] = el, G[7] = i) : i = G[7];
            let eo = i,
                ed = ei?.item.id;
            G[8] !== D || G[9] !== e.serverConversationId || G[10] !== ed || G[11] !== z ? (n = ["image-prompt-share-source", D, z, e.serverConversationId, ed], G[8] = D, G[9] = e.serverConversationId, G[10] = ed, G[11] = z, G[12] = n) : n = G[12], G[13] !== ei || G[14] !== e.serverConversationId || G[15] !== F ? (s = async t => {
                let {
                    signal: a
                } = t;
                if (null == ei) return null;
                let i = (0, j.c)(e.serverConversationId),
                    n = F.get(P.a, i) ?? i,
                    r = () => {
                        let e = F.get(C.N, n) ?? F.query.getData(T.chatGptConversationQueryById$, i)?.mapping;
                        return null == e ? null : function(e, t) {
                            let a = Object.entries(e.mapping).find(e => {
                                let [, a] = e;
                                return a?.message != null && (0, U.b)(a.message, {
                                    isActiveTurn: !1,
                                    isStreaming: !1
                                }).some(e => e.id === t.id || e.src === t.src)
                            });
                            if (a?.[1]?.message == null) return null;
                            let [, i] = a, n = a[1].message, r = (0, U.b)(n, {
                                isActiveTurn: !1,
                                isStreaming: !1
                            }).find(e => e.id === t.id || e.src === t.src);
                            if (r?.src == null || "completed" !== r.status || !(0, B.d)(r.src)) return null;
                            let s = (0, q.b)({
                                mapping: e.mapping,
                                current_node: i?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == s || (0, q.n)(s)) return null;
                            let l = (0, q.s)(n.content),
                                o = (Array.isArray(l?.parts) ? l.parts : []).map(q.s).find(e => e?.asset_pointer === r.src || (0, q.s)(e?.image_asset_pointer)?.asset_pointer === r.src),
                                d = (0, q.s)(o?.image_asset_pointer) ?? o,
                                c = (0, q.i)((0, q.s)((0, q.s)(d?.metadata)?.dalle)?.prompt) ?? (0, q.i)((0, q.e)(s)),
                                u = (0, q.i)(n.id);
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
                    s = r();
                return null != s ? s : (await (0, O.a)(F, i, a), r())
            }, G[13] = ei, G[14] = e.serverConversationId, G[15] = F, G[16] = s) : s = G[16], G[17] !== n || G[18] !== s || G[19] !== eo ? (o = {
                enabled: eo,
                queryKey: n,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: s
            }, G[17] = n, G[18] = s, G[19] = eo, G[20] = o) : o = G[20];
            let {
                data: ec
            } = (0, f.a)(o), eu = ec?.messageId ?? null, em = ec?.assetPointer ?? null;
            G[21] !== D || G[22] !== e.serverConversationId || G[23] !== eu || G[24] !== em || G[25] !== z ? (d = {
                accountId: D,
                userId: z,
                conversationId: e.serverConversationId,
                messageId: eu,
                assetPointer: em
            }, G[21] = D, G[22] = e.serverConversationId, G[23] = eu, G[24] = em, G[25] = z, G[26] = d) : d = G[26];
            let eg = d,
                {
                    editedContent: ep,
                    publication: eh,
                    revision: ef
                } = (0, _.x)(V, eg),
                e_ = eo && null != ec,
                ey = e_ && null == el && "image_with_prompt" === Z.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                ev = e_ && "template" === ee;
            G[27] !== ep || G[28] !== eh?.title || G[29] !== ec ? (c = ep ?? (null == ec ? void 0 : {
                ...ec.content,
                title: eh?.title ?? ec.content.title
            }), G[27] = ep, G[28] = eh?.title, G[29] = ec, G[30] = c) : c = G[30];
            let eb = c;
            G[31] !== X.accountId || G[32] !== X.userId || G[33] !== F ? (u = function() {
                if (F.get(r.f) !== X.accountId || F.get(r.j) !== X.userId) throw Error("Image prompt share account changed")
            }, G[31] = X.accountId, G[32] = X.userId, G[33] = F, G[34] = u) : u = G[34];
            let eI = u;
            G[35] !== eb || G[36] !== ei || G[37] !== e.source || G[38] !== eI || G[39] !== F || G[40] !== eg || G[41] !== ec ? (m = async function(t) {
                let a;
                if (eI(), null == ec || null == eb || !M(eb)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await K(F, eg, ec.content)
                } catch (e) {
                    if (e instanceof x.FetchError && "prompt_share_not_publishable" === e.errorCode) throw new A.a;
                    throw e
                }
                if (eI(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, l.a)(F, h, {
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
            }, G[35] = eb, G[36] = ei, G[37] = e.source, G[38] = eI, G[39] = F, G[40] = eg, G[41] = ec, G[42] = m) : m = G[42];
            let ew = m;
            if (G[43] !== en || G[44] !== ey ? (k = en ? (0, g.jsx)(b.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt"
                }) : "image_with_prompt" === ey ? (0, g.jsx)(b.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt"
                }) : (0, g.jsx)(b.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image"
                }), G[43] = en, G[44] = ey, G[45] = k) : k = G[45], !er) return null;
            let eS = ev ? "template" : "image";
            return G[46] !== H || G[47] !== en || G[48] !== ee || G[49] !== k || G[50] !== e_ ? (L = e_ ? e => (0, g.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, g.jsx)(I.a, {
                    fullWidth: !0,
                    wrapLabels: !0,
                    variant: "form",
                    selectedId: ee,
                    onSelect: et,
                    ariaLabel: H.formatMessage({
                        id: "imagePromptShare.mode",
                        defaultMessage: "Share format"
                    }),
                    options: [{
                        id: "image",
                        disabled: e,
                        label: en ? (0, g.jsx)(b.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only"
                        }) : (0, g.jsx)(b.a, {
                            id: "imagePromptShare.imageOnly",
                            defaultMessage: "Image only"
                        })
                    }, {
                        id: "template",
                        disabled: e,
                        label: k
                    }]
                })
            }) : void 0, G[46] = H, G[47] = en, G[48] = ee, G[49] = k, G[50] = e_, G[51] = L) : L = G[51], G[52] !== eb || G[53] !== ew || G[54] !== ei?.alt || G[55] !== eI || G[56] !== ef || G[57] !== F || G[58] !== eg || G[59] !== ec || G[60] !== ey || G[61] !== ev ? (N = ev && null != eb ? {
                label: ey,
                revision: ef,
                createLink: ew,
                actionsDisabled: !M(eb),
                preview: (e, t, a) => (0, g.jsx)(W, {
                    content: eb,
                    previewSrc: t,
                    alt: ei?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (eI(), null == ec) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== eb.title.trim() || e.prompt !== eb.prompt) && await async function(e, t, a, i) {
                            J(e, t);
                            let n = e.get(V, t),
                                r = null == n.idempotencyKey ? n.publication : await K(e, t, a),
                                s = i;
                            if (null != r) {
                                let e = await Q.Request.safePatch("/share/post/{post_id}/prompt-share", {
                                    isExpectedError: Y,
                                    parameters: {
                                        path: {
                                            post_id: r.post_id
                                        }
                                    },
                                    requestBody: i
                                });
                                s = {
                                    title: e.title,
                                    prompt: e.prompt
                                }
                            }
                            J(e, t), e.set(V, t, e => ({
                                ...e,
                                editedContent: s,
                                publication: null == e.publication ? null : {
                                    ...e.publication,
                                    title: s.title
                                },
                                revision: e.revision + 1
                            }))
                        }(F, eg, ec.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), eI(), a()
                    }
                })
            } : void 0, G[52] = eb, G[53] = ew, G[54] = ei?.alt, G[55] = eI, G[56] = ef, G[57] = F, G[58] = eg, G[59] = ec, G[60] = ey, G[61] = ev, G[62] = N) : N = G[62], G[63] !== ea || G[64] !== e || G[65] !== eS || G[66] !== L || G[67] !== N ? (R = (0, g.jsx)(E.a, {
                ...e,
                mobileImageRowScrollPositions: ea,
                imageShareOptions: L,
                imagePromptTemplate: N
            }, eS), G[63] = ea, G[64] = e, G[65] = eS, G[66] = L, G[67] = N, G[68] = R) : R = G[68], R
        }

        function $(e, t) {
            let a, {
                    additionalImages: d,
                    alt: g,
                    downloadAnalyticsImage: p,
                    downloadIsParagen: h,
                    image: f,
                    isDirectLightboxShare: _,
                    previewSrc: y,
                    serverConversationId: v,
                    source: b = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    title: I
                } = t,
                w = crypto.randomUUID(),
                S = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    conversationId: v,
                    shareSessionId: w,
                    source: b
                };
            (0, l.a)(e, i.i, {
                ...S,
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED"
            });
            let x = e.get(r.f),
                T = e.get(r.j),
                A = (0, n.d)(),
                E = A && null != x && null != T ? (0, c.h)(e.get(o.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                P = e.get(r.e),
                j = "loaded" === P.status && "personal" === P.structure || "loading" === P.status && "personal" === P.structureAtLogin,
                C = null == E ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: E,
                    isMobileBrowser: A,
                    isPersonalAccount: j
                }),
                O = () => e.get(r.f) === x && e.get(r.j) === T,
                k = t => {
                    !t.isWorkspaceOnly && t.shareLinkId !== a && O() && (a = t.shareLinkId, (0, l.a)(e, i.i, {
                        ...S,
                        action: "CHATGPT_SHARE_FLOW_ACTION_POST_LINK_PREPARED",
                        shareId: t.shareLinkId
                    }))
                },
                L = {
                    additionalImages: d,
                    alt: g,
                    downloadAnalyticsImage: p,
                    downloadIsParagen: h,
                    isDirectLightboxShare: _,
                    item: f,
                    previewSrc: y
                },
                N = () => (0, s.f)(e, X, {
                    currentNodeId: f.id,
                    image: L,
                    serverConversationId: v,
                    shareSessionId: w,
                    source: b,
                    title: I,
                    mobileImageExperience: C,
                    mobileImagePromptShareTreatment: E?.promptShareTreatment,
                    onImageShareLinkPrepared: null == E ? void 0 : k,
                    trackMobileImageShareLifecycle: A && E?.kind === "native"
                });
            A && E?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, v, L);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void N();
                    if (!O()) return;
                    if (!j) return void N();
                    k(a);
                    let i = await (0, m.b)(e, a, v, w, b);
                    if ("shared" === i || "cancelled" === i) return
                } catch {}
                O() && N()
            }(): N()
        }
        async function Z(e, t) {
            if (!t.src?.startsWith("data:image/gif")) return t;
            let {
                uploadChatGptConversationFile: i
            } = await Promise.resolve().then(a.bind(a, "AUdp")), {
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
        var i = a("Q840"),
            n = a("OWtl"),
            r = a("zHp1"),
            s = a("Kwur");
        let l = (0, i.q)(n.a, e => {
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
                    return s.Request.safeGet("/files/{file_id}/simple", {
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
            a: l,
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
            n = a("Q840"),
            r = a("Vi6J"),
            s = a("lAQI"),
            l = a("maWI"),
            o = a("Cslg"),
            d = a("yGJW"),
            c = a("OWtl"),
            u = a("dQRk"),
            m = a("srYL");
        let g = (0, n.v)(c.a, e => ({})),
            p = s.F({
                async_completion_id: s.L().nullish()
            }),
            h = s.F({
                content_type: s.z("image_asset_pointer"),
                asset_pointer: s.L(),
                height: s.E(),
                metadata: s.F({
                    generation: s.F({
                        height: s.E()
                    }),
                    is_no_auth_placeholder: s.j().nullish()
                })
            });

        function f(e, t, a) {
            let n, r, {
                    element: s,
                    isCurrentImage: c,
                    assetPointer: u
                } = t,
                m = s.ownerDocument,
                p = !1,
                h = () => {
                    let t;
                    if (p || !s.isConnected || !s.complete || 0 === s.naturalWidth || !c() || null == r) return;
                    let a = e.get(o.n),
                        {
                            userId: n
                        } = a;
                    if (a.authLoading || "chatgpt" !== a.authMethod || !n || a.authenticatedAccountId !== r.accountId) return;
                    let {
                        accountId: h,
                        conversationId: _,
                        messageId: y,
                        asyncCompletionId: v,
                        isDelayed: b
                    } = r, I = null == u ? void 0 : (0, l.b)(m);
                    if (null != I && null != u) {
                        if ("allowed" !== e.get(d.c).getAnalyticsAdmission()) return;
                        t = function(e, t, a, n, r, s) {
                            let {
                                conversationId: o,
                                messageId: c,
                                accountId: u,
                                asyncCompletionId: m
                            } = n, g = JSON.stringify([o, s, u, c, r]), p = t.firstLoads.get(g);
                            if (null != p) return p;
                            let h = t.loads.get(a);
                            if (null == h || h.src !== a.src) return;
                            let f = new Set;
                            t.firstLoads.set(g, {
                                status: "pending",
                                onSettled: f
                            });
                            let _ = n => {
                                let r = e.get(d.c),
                                    p = crypto.randomUUID();
                                (0, d.a)(e, i.Pb, {
                                    conversationId: o,
                                    messageId: c,
                                    asyncCompletionId: m,
                                    resultLoadId: p,
                                    ...h.timing
                                }, i => {
                                    let s = e.get(d.c);
                                    if ("sent" !== i.status && n && s !== r && "allowed" === s.getAnalyticsAdmission() && (0, l.b)(a.ownerDocument) === t) return void _(!1);
                                    let o = "sent" === i.status ? p : void 0;
                                    for (let e of (null == o ? t.firstLoads.delete(g) : t.firstLoads.set(g, {
                                            status: "sent",
                                            id: o
                                        }), f)) e(o);
                                    f.clear()
                                }, void 0, {
                                    expectedUserId: s,
                                    expectedAccountId: u
                                })
                            };
                            return _(!0), t.firstLoads.get(g)
                        }(e, I, s, r, u, n)
                    }
                    if ("visible" !== m.visibilityState) return;
                    let w = JSON.stringify([n, h, null == v ? "message" : "async", v ?? y]),
                        S = e.get(g, _)[w];
                    if ("viewed" === S) return void f();
                    if ("pending" === S) return;
                    e.set(g, _, e => ({
                        ...e,
                        [w]: "pending"
                    }));
                    let x = new Date(Date.now()).toISOString(),
                        T = t => {
                            e.set(g, _, e => {
                                if (t) return {
                                    ...e,
                                    [w]: "viewed"
                                };
                                let a = {
                                    ...e
                                };
                                return delete a[w], a
                            }), t && f()
                        },
                        A = t => {
                            null != I && (0, l.b)(m) !== I ? T(!1) : (0, d.a)(e, i.Qb, {
                                conversationId: _,
                                messageId: y,
                                asyncCompletionId: v,
                                isDelayed: b,
                                ...t && {
                                    resultLoadId: t
                                }
                            }, e => T("sent" === e.status), void 0, null == I ? void 0 : {
                                expectedUserId: n,
                                expectedAccountId: h,
                                eventCreatedAt: x
                            })
                        };
                    t?.status === "pending" ? t.onSettled.add(A) : A(t?.id)
                };

            function f() {
                p || (p = !0, n?.(), m.removeEventListener("visibilitychange", h), s.removeEventListener("load", h))
            }
            return m.addEventListener("visibilitychange", h), s.addEventListener("load", h), n = e.watch(e => {
                let {
                    get: t
                } = e;
                t(o.n), t(d.c), r = a(t), h()
            }), p && n(), f
        }
        a.d(t, {}, {
            a: function(e, t) {
                let {
                    conversationId: a,
                    messageId: i,
                    assetPointer: n,
                    element: s,
                    nativeLoad: d,
                    isCurrentImage: c
                } = t;
                return d && (0, l.a)(s), f(e, {
                    element: s,
                    isCurrentImage: c,
                    assetPointer: n
                }, e => {
                    let t = e(o.n).authenticatedAccountId,
                        s = e(u.j, a),
                        l = e(u.N, a)?.[i]?.message,
                        d = e(u.ab, a),
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
                        }(l, n);
                    if (t && s && null == d && c) return {
                        accountId: t,
                        conversationId: s,
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
    PxnS: (function(e, t, a) {
        var i = a("EA6X"),
            n = a("lSdY"),
            r = a("Q840"),
            s = a("aiHW"),
            l = a("yGJW"),
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
                    get: s
                } = t, l = s(u.b);
                if (l?.productExperience !== n.a.CHATGPT_PRODUCT_EXPERIENCE_DOTS) return;
                let o = r ?? i,
                    d = null != i && l.messageIds.has(i) ? i : void 0;
                if (null != o && (l.messageIds.has(o) || null != d)) return {
                    widgetType: a,
                    messageId: o,
                    assistantMessageId: d
                }
            });

        function p(e, t, a, n) {
            (0, l.a)(e, i.j, {
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
                        for (let e = (0, s.a)(a); e; e = (0, s.a)(e))
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
    nUGc: (function(e, t, a) {
        let i = (0, a("zd8w").createContext)(null);
        a.d(t, {}, {
            a: i
        })
    }),
    umQU: (function(e, t, a) {
        var i = a("Q840"),
            n = a("ccwJ"),
            r = a("Kwur"),
            s = a("dQRk"),
            l = a("bmqg"),
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
                        imageAssetResolver: l
                    } = e,
                    {
                        signal: u,
                        scope: f
                    } = t,
                    _ = i?.gifPlayback?.originalSrc ?? i?.src,
                    b = JSON.stringify([i?.id, _]),
                    I = 0,
                    w = Promise.resolve(),
                    S = u({
                        preview: null,
                        busy: !1
                    }, {
                        onMount: e => {
                            if (i?.isAnimated) return f.watch(t => {
                                if (0 !== I) return;
                                let a = t.get(h, b),
                                    r = (0, n.d)(y(t, i)?.gifPlayback, a ?? void 0);
                                (null != a || 1 !== r) && (e({
                                    preview: null,
                                    busy: !0
                                }), E(r, !1))
                            })
                        }
                    }),
                    x = async e => {
                        let t = null != e && (0, m.h)(e) && null != l ? await (0, m.a)(f.queryClient, e, l) : e,
                            a = null == t ? null : await (0, d.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, T = () => (null == a && (a = x(_).catch(e => {
                        throw a = void 0, e
                    })), a), A = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                            a = y(f, i),
                            r = t === a?.watermarkedSrc ? a?.gifPlayback?.watermarkedVariants : a?.gifPlayback?.variants;
                        if (!(0, n.a)(r).includes(e)) throw Error("GIF speed variant unavailable");
                        let s = 1 === e ? void 0 : r?.[String(e)],
                            l = S.get().preview;
                        if (l?.speed === e && l.originalSrc === t && l.assetSrc === s) return l;
                        let o = null == s && t === _ ? await T() : await x(s ?? t);
                        return {
                            assetSrc: s,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, g.a)(o),
                            sizeBytes: o.size
                        }
                    }, E = async (e, t) => {
                        let a = ++I;
                        S.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let n = await A(e);
                            if (a !== I) return !1;
                            return S.set({
                                preview: n,
                                busy: !1
                            }), t && (f.set(h, b, e), w = w.then(async () => {
                                if (a !== I || "chatgpt-thread" !== f.value.routeKind || i?.chatGptMessageId == null || null == _) return;
                                let t = f.get(s.j, f.value.conversationId);
                                null != t && await r.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: i.chatGptMessageId,
                                        asset_pointer: _,
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
                    loadOriginal: T,
                    loadExport: async e => 1 === e ? T() : x((await A(e)).src),
                    changeSpeed: e => E(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let i = (0, n.d)(y(f, e)?.gifPlayback, S.get().preview?.speed ?? f.get(h, b) ?? void 0),
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
                        let s = await A(i, t);
                        return v(r, a && null != s.assetSrc ? {
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
            _ = (0, i.d)(u.a, (e, t) => {
                let {
                    image: a,
                    conversationId: i,
                    imageAssetResolver: r
                } = e, {
                    scope: s
                } = t, l = y(s, a, i), o = s.get(f, {
                    image: l?.isAnimated === !0 ? l : void 0,
                    imageAssetResolver: r
                }), {
                    preview: d
                } = s.get(o.state$);
                return {
                    playback: o,
                    previewSrc: null != d && (0, n.a)(l?.gifPlayback?.variants).includes(d.speed) ? d.src : void 0,
                    image: null == l ? void 0 : v(l, d),
                    originalSrc: l?.isAnimated === !0 ? l.gifPlayback?.originalSrc ?? l.src : l?.src,
                    canControl: l?.isAnimated === !0 && (0, n.a)(l.gifPlayback?.variants).length > 1
                }
            });

        function y(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(l.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function v(e, t) {
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
            a: v,
            b: y,
            c: f,
            d: _
        })
    }),
    I0AH: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            r = a("on57");
        a.d(t, {}, {
            a: function(e) {
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
                    return s[0] !== l || s[1] !== o || s[2] !== t ? (e = (0, i.jsx)("div", {
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
                return s[4] !== d || s[5] !== g || s[6] !== p || s[7] !== h ? (t = (0, r.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", g, p, h, d), s[4] = d, s[5] = g, s[6] = p, s[7] = h, s[8] = t) : t = s[8], s[9] !== l || s[10] !== o || s[11] !== m || s[12] !== t ? (a = (0, i.jsx)("div", {
                    role: m,
                    "aria-label": l,
                    className: t,
                    children: o
                }), s[9] = l, s[10] = o, s[11] = m, s[12] = t, s[13] = a) : a = s[13], a
            }
        })
    }),
    EQ0X: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            r = a("slpy"),
            s = a("zd8w"),
            l = a("Wf1j"),
            o = a("oyxz"),
            d = a("Sm6l"),
            c = a("bqtn"),
            u = a("HOLv"),
            m = a("bf6R"),
            g = a("UxN3"),
            p = a("ddzD"),
            h = a("I0AH"),
            f = a("j9wQ"),
            _ = a("ZedP"),
            y = a("jFtA"),
            v = a("yO1S");

        function b(e) {
            let t, a = (0, n.c)(3),
                s = !0 !== e["aria-expanded"] && "true" !== e["aria-expanded"] && void 0;
            return a[0] !== e || a[1] !== s ? (t = (0, i.jsx)(r.a, {
                ...e,
                forceOpen: s
            }), a[0] = e, a[1] = s, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, r, I, w, S, x, T = (0, n.c)(53),
                    {
                        downloadImageCount: A,
                        floatingToolbarVariant: E,
                        moreActions: P,
                        isAnimated: j,
                        isImageActionsDisabled: C,
                        isUnifiedViewerEnabled: O,
                        onDownload: k,
                        onDownloadAll: L,
                        onDownloadMenuOpen: N,
                        onShare: R,
                        onShareAll: G,
                        onShareMenuOpen: M,
                        saveAction: F,
                        shareImageCount: H,
                        showShareText: D
                    } = e,
                    W = void 0 !== j && j,
                    q = void 0 !== O && O,
                    B = void 0 !== D && D,
                    U = (0, l.a)(),
                    [z, Q] = (0, s.useState)(!1),
                    V = "toolbar";
                null != E && (V = "imageTools" === E ? "imageToolbar" : "composerSm"), T[0] !== V || T[1] !== E || T[2] !== U || T[3] !== C || T[4] !== q || T[5] !== R || T[6] !== G || T[7] !== B ? (t = q ? (0, i.jsxs)(f.c, {
                    "aria-label": U.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }),
                    disabled: C,
                    uniform: !B,
                    onClick: null == G ? R : void 0,
                    children: [(0, i.jsx)(g.b, {
                        icon: {
                            16: m.N,
                            20: m.O
                        }
                    }), B ? (0, i.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }) : null]
                }) : (0, i.jsx)(d.a, {
                    color: null == E ? "primary" : "ghostActive",
                    disabled: C,
                    size: V,
                    onClick: null == G ? R : void 0,
                    children: (0, i.jsx)(o.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    })
                }), T[0] = V, T[1] = E, T[2] = U, T[3] = C, T[4] = q, T[5] = R, T[6] = G, T[7] = B, T[8] = t) : t = T[8];
                let K = t;
                if (null != R && null != G) {
                    let e;
                    T[9] !== W || T[10] !== C || T[11] !== R || T[12] !== G || T[13] !== M || T[14] !== K || T[15] !== H ? (e = (0, i.jsx)(_.a, {
                        disabled: C,
                        imageCount: H,
                        isAnimated: W,
                        onOpen: M,
                        onShare: R,
                        onShareAll: G,
                        triggerButton: K
                    }), T[9] = W, T[10] = C, T[11] = R, T[12] = G, T[13] = M, T[14] = K, T[15] = H, T[16] = e) : e = T[16], K = e
                }
                if (null != E) {
                    let e;
                    T[17] !== E || T[18] !== K ? (e = (0, i.jsx)(h.a, {
                        variant: E,
                        children: K
                    }), T[17] = E, T[18] = K, T[19] = e) : e = T[19], K = e
                }
                T[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    Q(!0), await e().finally(() => {
                        Q(!1)
                    })
                }, T[20] = a) : a = T[20];
                let J = a;
                T[21] !== V || T[22] !== A || T[23] !== E || T[24] !== U || T[25] !== W || T[26] !== z || T[27] !== C || T[28] !== q || T[29] !== k || T[30] !== L || T[31] !== N || T[32] !== F ? (r = null != L && null != k ? (0, i.jsxs)(c.a, {
                    align: "end",
                    disabled: C || z,
                    onOpenChange: e => {
                        e && N?.()
                    },
                    triggerButton: (0, i.jsx)(b, {
                        content: (0, i.jsx)(o.a, {
                            ...(0, p.a)({
                                isAnimated: W
                            }).downloadLabel
                        }),
                        children: q ? (0, i.jsx)(f.c, {
                            "aria-label": U.formatMessage((0, p.a)({
                                isAnimated: W
                            }).downloadLabel),
                            disabled: C || z,
                            loading: z,
                            uniform: !0,
                            children: (0, i.jsx)(g.b, {
                                icon: {
                                    assets: {
                                        16: y.a,
                                        20: v.a
                                    }
                                }
                            })
                        }) : (0, i.jsx)(d.a, {
                            "aria-label": U.formatMessage((0, p.a)({
                                isAnimated: W
                            }).downloadLabel),
                            color: null == E ? "ghost" : "ghostActive",
                            disabled: C || z,
                            loading: z,
                            size: V,
                            uniform: !0,
                            children: "compact" === E ? (0, i.jsx)(u.a, {
                                asset: y.a
                            }) : (0, i.jsx)(m.t, {})
                        })
                    }),
                    children: [(0, i.jsx)(c.c.Item, {
                        onSelect: () => void J(k),
                        children: (0, i.jsx)(o.a, {
                            ...(0, p.a)({
                                isAnimated: W
                            }).downloadMenuLabel
                        })
                    }), (0, i.jsx)(c.c.Item, {
                        onSelect: () => void J(L),
                        children: (0, i.jsx)(o.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            values: {
                                count: A
                            }
                        })
                    })]
                }) : F, T[21] = V, T[22] = A, T[23] = E, T[24] = U, T[25] = W, T[26] = z, T[27] = C, T[28] = q, T[29] = k, T[30] = L, T[31] = N, T[32] = F, T[33] = r) : r = T[33];
                let Y = r;
                if (null != E && null != L && null != k) {
                    let e;
                    T[34] !== Y || T[35] !== E ? (e = (0, i.jsx)(h.a, {
                        variant: E,
                        children: Y
                    }), T[34] = Y, T[35] = E, T[36] = e) : e = T[36], Y = e
                }
                let X = null == R ? null : K;
                T[37] !== Y || T[38] !== X ? (I = (0, i.jsxs)(i.Fragment, {
                    children: [Y, X]
                }), T[37] = Y, T[38] = X, T[39] = I) : I = T[39];
                let $ = I;
                T[40] !== E || T[41] !== P ? (w = null == P || null == E ? P : (0, i.jsx)(h.a, {
                    variant: E,
                    children: P
                }), T[40] = E, T[41] = P, T[42] = w) : w = T[42];
                let Z = w,
                    ee = null != R || null != Y;
                if (!q || B) {
                    let e;
                    return T[43] !== $ || T[44] !== Z ? (e = (0, i.jsxs)(i.Fragment, {
                        children: [$, Z]
                    }), T[43] = $, T[44] = Z, T[45] = e) : e = T[45], e
                }
                return T[46] !== ee || T[47] !== U || T[48] !== $ ? (S = ee ? (0, i.jsx)(f.i, {
                    label: U.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions"
                    }),
                    children: $
                }) : null, T[46] = ee, T[47] = U, T[48] = $, T[49] = S) : S = T[49], T[50] !== S || T[51] !== Z ? (x = (0, i.jsxs)(i.Fragment, {
                    children: [S, Z]
                }), T[50] = S, T[51] = Z, T[52] = x) : x = T[52], x
            }
        })
    }),
    ZedP: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            r = a("oyxz"),
            s = a("bqtn"),
            l = a("HOLv"),
            o = a("ddzD"),
            d = a("e3en"),
            c = a("ncOG");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, m, g, p, h, f = (0, n.c)(19),
                    {
                        disabled: _,
                        imageCount: y,
                        isAnimated: v,
                        onOpen: b,
                        onShare: I,
                        onShareAll: w,
                        triggerButton: S
                    } = e,
                    x = void 0 !== v && v;
                return f[0] !== b ? (t = e => {
                    e && b?.()
                }, f[0] = b, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(l.a, {
                    className: "text-gray-1000",
                    asset: d.a
                }), f[2] = a) : a = f[2], f[3] !== x ? (u = (0, o.a)({
                    isAnimated: x
                }), f[3] = x, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (m = (0, i.jsx)(r.a, {
                    ...u.shareSelectionLabel
                }), f[5] = u.shareSelectionLabel, f[6] = m) : m = f[6], f[7] !== I || f[8] !== m ? (g = (0, i.jsx)(s.c.Item, {
                    leftIcon: a,
                    onSelect: I,
                    children: m
                }), f[7] = I, f[8] = m, f[9] = g) : g = f[9], f[10] !== y || f[11] !== w ? (p = null == w ? null : (0, i.jsx)(s.c.Item, {
                    leftIcon: (0, i.jsx)(l.a, {
                        className: "text-gray-1000",
                        asset: c.a
                    }),
                    onSelect: w,
                    children: (0, i.jsx)(r.a, {
                        id: "imagePreview.shareSeries",
                        defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                        values: {
                            imageCount: y
                        }
                    })
                }), f[10] = y, f[11] = w, f[12] = p) : p = f[12], f[13] !== _ || f[14] !== t || f[15] !== g || f[16] !== p || f[17] !== S ? (h = (0, i.jsxs)(s.a, {
                    align: "end",
                    disabled: _,
                    triggerButton: S,
                    onOpenChange: t,
                    children: [g, p]
                }), f[13] = _, f[14] = t, f[15] = g, f[16] = p, f[17] = S, f[18] = h) : h = f[18], h
            }
        })
    }),
    RiLw: (function(e, t, a) {
        var i = a("ABep"),
            n = a("QosV"),
            r = a("on57"),
            s = a("Wf1j"),
            l = a("oyxz"),
            o = a("bf6R"),
            d = a("syEl"),
            c = a("UxN3"),
            u = a("Y3Vu"),
            m = a("oP6N");
        let g = (0, i.jsx)(c.b, {
            className: m.a.shareIcon,
            icon: {
                16: o.N,
                20: o.O
            }
        });
        a.d(t, {}, {
            a: function(e) {
                let t, a, o, c, p, h, f, _, y = (0, n.c)(24);
                y[0] !== e ? ({
                    children: t,
                    className: a,
                    facepile: o,
                    iconOnly: p,
                    leading: h,
                    ...c
                } = e, y[0] = e, y[1] = t, y[2] = a, y[3] = o, y[4] = c, y[5] = p, y[6] = h) : (t = y[1], a = y[2], o = y[3], c = y[4], p = y[5], h = y[6]);
                let v = void 0 !== p && p,
                    b = void 0 === h ? g : h,
                    I = (0, s.a)();
                if (v) {
                    let e, t, n;
                    y[7] !== I ? (e = I.formatMessage({
                        id: "artifactViewer.share",
                        defaultMessage: "Share"
                    }), y[7] = I, y[8] = e) : e = y[8];
                    let s = e;
                    return y[9] !== a || y[10] !== o || y[11] !== s || y[12] !== c ? (t = e => (0, i.jsxs)(u.a, {
                        focusRing: "inset",
                        ...c,
                        ...e,
                        className: (0, r.b)(a, null != o && m.a.iconShareWithFacepile),
                        uniform: null == o,
                        "aria-label": s,
                        children: [o, g]
                    }), y[9] = a, y[10] = o, y[11] = s, y[12] = c, y[13] = t) : t = y[13], y[14] !== s || y[15] !== t ? (n = (0, i.jsx)(d.b, {
                        content: s,
                        describeTrigger: !1,
                        children: t
                    }), y[14] = s, y[15] = t, y[16] = n) : n = y[16], n
                }
                return y[17] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, i.jsx)("span", {
                    "data-page-share-label": !0,
                    "data-tooltip-visibility-target": !0,
                    "data-tooltip-enablement-target": !0,
                    "data-viewer-header-collapsible": !0,
                    className: "overflow-hidden whitespace-nowrap",
                    children: (0, i.jsx)(l.a, {
                        id: "artifactViewer.share",
                        defaultMessage: "Share"
                    })
                }), y[17] = f) : f = y[17], y[18] !== t || y[19] !== a || y[20] !== o || y[21] !== b || y[22] !== c ? (_ = (0, i.jsxs)(u.a, {
                    focusRing: "inset",
                    className: a,
                    ...c,
                    children: [b, o, f, t]
                }), y[18] = t, y[19] = a, y[20] = o, y[21] = b, y[22] = c, y[23] = _) : _ = y[23], _
            }
        })
    })
};