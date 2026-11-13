export const __rspack_esm_ids = [864399];
export const __webpack_modules__ = {
    piij: (function(e, t, a) {
        e.exports = a.p + "assets/space-recovery.105d9c61fe.png"
    }),
    vSCF: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("N55g");
        let o = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(431630), a.e(589307), a.e(81461), a.e(882456), a.e(145049), a.e(744644), a.e(332810), a.e(114517), a.e(499790), a.e(918122), a.e(301030), a.e(502948), a.e(782496), a.e(909395), a.e(587936), a.e(540889), a.e(904817), a.e(452048), a.e(684598), a.e(299268), a.e(777166), a.e(433520), a.e(212487), a.e(17983), a.e(167649), a.e(509282), a.e(523433), a.e(403815), a.e(471657), a.e(240959), a.e(933668)]).then(a.bind(a, "wvL0"))).ChatGptDilDirectiveRenderer, {
            errorFallback: (0, r.jsx)(n.a, {})
        });
        a.d(t, {}, {
            ChatGptDilDirectiveRenderer: o
        })
    }),
    KO1w: (function(e, t, a) {
        var r = a("ABep"),
            i = a("Bbed"),
            n = a("vbBn");
        let o = (0, i.a)(async () => (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(514085), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(673131), a.e(877700), a.e(353230), a.e(589307), a.e(81461), a.e(882456), a.e(145049), a.e(744644), a.e(784669), a.e(8197), a.e(328034), a.e(16910), a.e(148673), a.e(349381), a.e(688740), a.e(8771), a.e(114517), a.e(499790), a.e(918122), a.e(301030), a.e(502948), a.e(782496), a.e(909395), a.e(587936), a.e(540889), a.e(904817), a.e(452048), a.e(684598), a.e(299268), a.e(777166), a.e(433520), a.e(212487), a.e(17983), a.e(167649), a.e(509282), a.e(523433), a.e(403815), a.e(631989), a.e(240959), a.e(538461)]).then(a.bind(a, "S7XM"))).DilResponse, {
            errorFallback: (0, r.jsx)(n.b, {
                stage: "host_error",
                initialization: !0
            })
        });
        a.d(t, {}, {
            DilResponse: o
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
            o = a("hJIv"),
            s = a("BolX"),
            l = a("fVOX"),
            d = a("OWtl");
        a("WFY2");
        let c = (0, s.u)(d.a, e => {
            let {
                scope: t
            } = e, a = 0, i = 0, o = (e, a, r) => {
                try {
                    (0, n.c)(t).count("default", "chatgpt.model_written_dil.v2.startup.report_suppressed", {
                        result: e,
                        report_cutoff: a,
                        reason: r,
                        web_frontend: "codex_webview"
                    })
                } catch {}
            }, s = (e, t) => a < 10 || (o(e, t, "page_report_limit"), !1);
            return {
                canPublish: s,
                recordSuppression: o,
                publish: (e, n, d) => {
                    if (!s(n.result, n.report_cutoff)) return !1;
                    try {
                        let s, c = (0, r.h)(n);
                        if (c > r.b ? s = "report_byte_limit" : i + c > 262144 && (s = "page_byte_limit"), null != s) return o(n.result, n.report_cutoff, s), !1;
                        return a++, i += c, t.get(l.a).log({
                            message: e,
                            status: d ? "info" : "error",
                            context: n
                        }), !0
                    } catch {
                        return o(n.result, n.report_cutoff, "observer_error"), !1
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
                i = e.get(o.a),
                s = e.get(c),
                l = (0, r.e)(a, {
                    enabled: () => i,
                    reporting: s
                });
            return {
                metrics: a,
                diagnosticsEnabled: i,
                render: (0, r.d)({
                    metrics: a,
                    diagnosticsExpected: i,
                    startupReporting: i ? s : void 0,
                    presentation: l
                }),
                presentation: l
            }
        }
        let m = (0, i.createContext)(null),
            p = (0, i.createContext)(null),
            g = (0, i.createContext)(void 0)
    }),
    vbBn: (function(e, t, a) {
        a.d(t, {
            a: () => P,
            b: () => C
        });
        var r = a("ABep"),
            i = a("QosV"),
            n = a("BolX"),
            o = a("wDWo"),
            s = a("zd8w"),
            l = a("UIU6"),
            d = a("nUGc"),
            c = a("cWXs"),
            u = a("OWtl"),
            m = a("TUMj"),
            p = a("RAbv"),
            g = a("zgGI"),
            h = a("zHp1"),
            f = a("Yscs");
        let _ = new WeakMap,
            y = new WeakMap,
            b = /^image\/(?:jpeg|png|webp|gif)$/i;

        function v(e) {
            let t = e.getAttribute("src"),
                a = e.closest("[data-d-progressive-settled]")?.parentElement?.querySelector("[data-d-progressive-full] img");
            return !t || t.startsWith("data:") || e.srcset || a?.complete && a.naturalWidth > 0 || null != e.closest("picture") || "" === e.getAttribute("alt") || !e.closest('[data-d-component="image"]') || !e.currentSrc || e.currentSrc !== e.src ? null : t
        }

        function w(e) {
            let t = e.dataset.chatgptCopyImageSrc;
            if (null == t) return 0;
            let a = y.get(e);
            return a?.url === e.currentSrc && t === v(e) ? a.bytes : (delete e.dataset.chatgptCopyImageData, delete e.dataset.chatgptCopyImageSrc, y.delete(e), 0)
        }
        var x = a("N55g"),
            I = a("greq");
        let S = new Set;

        function j() {
            for (let e of S) e.presentation.onPageHide()
        }

        function P(e) {
            let t, a, o, d, c, m, p, g, h, f, _, y = (0, i.c)(33),
                {
                    children: b,
                    contentReferenceIndex: v,
                    observationMessageId: w,
                    isPresented: x,
                    isPreparing: P,
                    isStreaming: E,
                    sourceMessageId: A
                } = e,
                k = void 0 === x || x,
                R = (0, n.y)(u.a);
            y[0] !== w || y[1] !== R ? (t = () => ({
                messageId: w,
                observation: (0, I.d)(R)
            }), y[0] = w, y[1] = R, y[2] = t) : t = y[2];
            let [L, O] = (0, s.useState)(t);
            L.messageId !== w && O({
                messageId: w,
                observation: (0, I.d)(R)
            });
            let M = L.observation,
                F = void 0 !== P && P ? null : M;
            y[3] !== k || y[4] !== E || y[5] !== F ? (a = () => {
                F && (F.presentation.updateStreaming(E), F.presentation.setPresented(k))
            }, o = [F, k, E], y[3] = k, y[4] = E, y[5] = F, y[6] = a, y[7] = o) : (a = y[6], o = y[7]), (0, s.useLayoutEffect)(a, o), y[8] !== E || y[9] !== F?.presentation || y[10] !== F?.presentation.attach ? (d = () => F?.presentation.attach(E), y[8] = E, y[9] = F?.presentation, y[10] = F?.presentation.attach, y[11] = d) : d = y[11];
            let G = (0, s.useEffectEvent)(d);
            y[12] !== G || y[13] !== F ? (c = () => {
                if (!F) return;
                let e = G();
                return S.add(F), 1 === S.size && window.addEventListener("pagehide", j, !0), () => {
                    S.delete(F), 0 === S.size && window.removeEventListener("pagehide", j, !0), e?.()
                }
            }, y[12] = G, y[13] = F, y[14] = c) : c = y[14], y[15] !== F ? (m = [F], y[15] = F, y[16] = m) : m = y[16], (0, s.useEffect)(c, m);
            let N = null == v ? void 0 : "contents";
            y[17] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, r.jsx)(C, {}), y[17] = p) : p = y[17];
            let H = F?.render.onHostRenderFailure;
            return y[18] !== b || y[19] !== w || y[20] !== H ? (g = (0, r.jsx)(l.a, {
                name: "ModelWrittenDILV2Renderer",
                resetKey: w,
                fallback: p,
                onError: H,
                children: b
            }), y[18] = b, y[19] = w, y[20] = H, y[21] = g) : g = y[21], y[22] !== v || y[23] !== A || y[24] !== g || y[25] !== N ? (h = (0, r.jsx)("div", {
                className: "my-4 first:mt-0 last:mb-0 empty:hidden",
                "data-dil-source-message-id": A,
                "data-chatgpt-copy-reference": v,
                "data-markdown-copy": N,
                onLoadCapture: T,
                children: g
            }), y[22] = v, y[23] = A, y[24] = g, y[25] = N, y[26] = h) : h = y[26], y[27] !== F || y[28] !== h ? (f = (0, r.jsx)(I.b.Provider, {
                value: F,
                children: h
            }), y[27] = F, y[28] = h, y[29] = f) : f = y[29], y[30] !== M.render.onPreparationEnd || y[31] !== f ? (_ = (0, r.jsx)(I.a.Provider, {
                value: M.render.onPreparationEnd,
                children: f
            }), y[30] = M.render.onPreparationEnd, y[31] = f, y[32] = _) : _ = y[32], _
        }

        function T(e) {
            e.target instanceof HTMLImageElement && async function(e, t) {
                if (w(t) > 0) return;
                let a = v(t);
                if (!a) return;
                let r = URL.parse(t.currentSrc);
                if (null == r || r.origin !== e.ownerDocument.location.origin || !["blob:", "https:", "http:"].includes(r.protocol)) return;
                let i = (_.get(e) ?? Promise.resolve()).then(() => (async function(e, t, a, r) {
                    let i = () => e.contains(t) && a === v(t) && r.href === t.currentSrc;
                    try {
                        let n;
                        if (!i() || w(t) > 0) return;
                        let o = p.a;
                        for (let t of e.querySelectorAll("img[data-chatgpt-copy-image-src]")) o -= w(t);
                        let s = Math.min(524288, o);
                        if (s <= 0) return;
                        if ("blob:" === r.protocol) n = (0, h.f)(r.href);
                        else {
                            let e = await fetch(r, {
                                cache: "only-if-cached",
                                mode: "same-origin",
                                redirect: "error"
                            });
                            if (!e.ok || !b.test(e.headers.get("content-type") ?? "")) return;
                            n = await (0, g.a)(e, s)
                        }
                        if (null == n || !b.test(n.type) || 0 === n.size || n.size > s) return;
                        let l = await (0, f.a)(n);
                        i() && (t.dataset.chatgptCopyImageSrc = a, t.dataset.chatgptCopyImageData = l, y.set(t, {
                            bytes: n.size,
                            url: r.href
                        }))
                    } catch {}
                })(e, t, a, r));
                return _.set(e, i), i
            }(e.currentTarget, e.target)
        }

        function C(e) {
            let t, a, n, l = (0, i.c)(11),
                {
                    savedAnswer: u,
                    stage: p,
                    errorClass: g,
                    initialization: h
                } = e,
                f = void 0 !== h && h,
                _ = (0, s.useContext)(I.b),
                y = (0, m.d)(),
                b = (0, s.useContext)(d.a);
            if (l[0] !== f || l[1] !== _ || l[2] !== p ? (t = () => {
                    null != p && _?.render.onTerminalFailure(p), _?.render.onFallbackResult("shown", p), _?.presentation.reportRootFailure(f)
                }, a = [_, p, f], l[0] = f, l[1] = _, l[2] = p, l[3] = t, l[4] = a) : (t = l[3], a = l[4]), (0, s.useEffect)(t, a), l[5] !== g || l[6] !== b || l[7] !== u || l[8] !== p || l[9] !== y?.contentReferences) {
                let e = b || u?.source_message_status !== "finished_successfully" ? "" : (0, o.i)((0, o.e)(u) ?? "", y?.contentReferences ?? [], {
                    isStreaming: !1
                });
                n = e.trim() ? (0, r.jsx)(c.Markdown, {
                    externalResourcePolicy: "restricted",
                    textStyle: {
                        kind: "assistant-message"
                    },
                    children: e
                }) : (0, r.jsx)(x.a, {
                    stage: p,
                    errorClass: g
                }), l[5] = g, l[6] = b, l[7] = u, l[8] = p, l[9] = y?.contentReferences, l[10] = n
            } else n = l[10];
            return n
        }
    }),
    xof2: (function(e, t, a) {
        var r = a("EA6X"),
            i = a("D015"),
            n = a("yGJW"),
            o = a("OMIV"),
            s = a("CTBG"),
            l = a("Kwur"),
            d = a("dQRk"),
            c = a("hx97");

        function u(e, t, a) {
            if (null == t || null == a) return;
            let r = 0,
                n = !1;
            for (let o of e.get(s.c, t) ?? [])
                if ((0, c.n)(o) && (n = !1), "assistant" !== o.author.role || n || (r += 1, n = !0), o.id === a) return r > 0 ? (0, i.a)(r) : void 0
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

        function p(e, t) {
            return Math.random() < (e.get(o.f)?.getDynamicConfig("3538562248", {
                disableExposureLog: !0
            }).get(t, 1) ?? 1)
        }

        function g(e, t, a) {
            null != t.actionType && p(e, "widget_action") && l.Request.safePost("/unified_user_signals", {
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
            null != t.actionType && "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN" !== t.actionType && p(e, "entity_action") && l.Request.safePost("/unified_user_signals", {
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
            null != t.actionType && p(e, "link_action") && l.Request.safePost("/unified_user_signals", {
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
                    h(e, a), (0, n.a)(e, r.c, a)
                } catch {}
            },
            c: function(e, t) {
                null != t.actionType && p(e, "image_action") && l.Request.safePost("/unified_user_signals", {
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
                }).catch(() => void 0), (0, n.a)(e, r.e, t)
            },
            d: function(e, t) {
                f(e, t), (0, n.a)(e, r.g, t)
            },
            e: function(e, t) {
                h(e, t), (0, n.a)(e, r.c, t)
            },
            f: function(e, t) {
                g(e, t), (0, n.a)(e, r.j, t)
            },
            g: f,
            h: g
        })
    }),
    erFs: (function(e, t, a) {
        a.d(t, {
            a: () => $,
            b: () => Z
        });
        var r = a("FS1B"),
            i = a("BOYb"),
            n = a("Cslg"),
            o = a("X6Vn"),
            s = a("yGJW"),
            l = a("O666"),
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
            _ = a("BolX"),
            y = a("zd8w"),
            b = a("Wf1j"),
            v = a("oyxz"),
            w = a("EShr"),
            x = a("OWtl"),
            I = a("hZax"),
            S = a("eShZ"),
            j = a("lBzi"),
            P = a("r9i9"),
            T = a("tdfh"),
            C = a("aFoA"),
            E = a("OOaz"),
            A = a("dQRk"),
            k = a("jfiJ"),
            R = a("Sm6l"),
            L = a("bf6R"),
            O = a("MM0V"),
            M = a("JNtf"),
            F = a("mUDD");

        function G(e) {
            return !!e.title.trim() && !!e.prompt.trim() && Array.from(e.title.trim()).length <= 200 && Array.from(e.prompt).length <= 1e5
        }
        var N = a("zLIa");

        function H(e) {
            let t, a, r, i, n, o, s, l = (0, g.c)(19),
                {
                    content: d,
                    onChange: c,
                    disabled: u,
                    autoFocus: m
                } = e,
                h = void 0 !== u && u,
                f = void 0 !== m && m;
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, p.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-title",
                children: (0, p.jsx)(v.a, {
                    id: "imagePromptShare.titleLabel",
                    defaultMessage: "Title"
                })
            }), l[0] = t) : t = l[0], l[1] !== d || l[2] !== c ? (a = e => c({
                ...d,
                title: e.target.value
            }), l[1] = d, l[2] = c, l[3] = a) : a = l[3], l[4] !== f || l[5] !== d.title || l[6] !== a ? (r = (0, p.jsxs)(F.f, {
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
            }), l[4] = f, l[5] = d.title, l[6] = a, l[7] = r) : r = l[7], l[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, p.jsx)("label", {
                className: "text-sm font-medium select-none",
                htmlFor: "image-prompt-text",
                children: (0, p.jsx)(v.a, {
                    id: "imagePromptShare.promptLabel",
                    defaultMessage: "Prompt"
                })
            }), l[8] = i) : i = l[8], l[9] !== d || l[10] !== c ? (n = e => c({
                ...d,
                prompt: e.target.value
            }), l[9] = d, l[10] = c, l[11] = n) : n = l[11], l[12] !== d.prompt || l[13] !== n ? (o = (0, p.jsxs)(F.f, {
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
            }), l[12] = d.prompt, l[13] = n, l[14] = o) : o = l[14], l[15] !== h || l[16] !== r || l[17] !== o ? (s = (0, p.jsxs)("fieldset", {
                className: "flex min-w-0 flex-col gap-4",
                disabled: h,
                children: [r, o]
            }), l[15] = h, l[16] = r, l[17] = o, l[18] = s) : s = l[18], s
        }

        function B(e) {
            let t, a, r, i, n, o, s, l, d, c, u, m, h, f, _, w, x, I, j, P, T = (0, g.c)(54),
                {
                    content: C,
                    onSave: E,
                    onClose: A,
                    onCloseAutoFocus: k
                } = e,
                N = (0, b.a)(),
                [B, D] = (0, y.useState)(C),
                [z, W] = (0, y.useState)(!1),
                [q, U] = (0, y.useState)(null);
            T[0] !== B || T[1] !== z || T[2] !== A || T[3] !== E ? (t = async function() {
                if (!z && G(B)) {
                    W(!0), U(null);
                    try {
                        await E(B), A()
                    } catch (e) {
                        U(e instanceof S.FetchError && "prompt_share_not_publishable" === e.errorCode ? "blocked" : "failed")
                    }
                    W(!1)
                }
            }, T[0] = B, T[1] = z, T[2] = A, T[3] = E, T[4] = t) : t = T[4];
            let K = t,
                V = !z;
            return T[5] !== k ? (a = {
                "aria-describedby": void 0,
                onCloseAutoFocus: k
            }, T[5] = k, T[6] = a) : a = T[6], T[7] !== z || T[8] !== A ? (r = e => {
                e || z || A()
            }, T[7] = z, T[8] = A, T[9] = r) : r = T[9], T[10] !== K ? (i = e => {
                e.preventDefault(), e.stopPropagation(), K()
            }, T[10] = K, T[11] = i) : i = T[11], T[12] !== N ? (n = N.formatMessage({
                id: "imagePromptShare.editBack",
                defaultMessage: "Back"
            }), T[12] = N, T[13] = n) : n = T[13], T[14] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, p.jsx)(L.bc, {}), T[14] = o) : o = T[14], T[15] !== z || T[16] !== A || T[17] !== n ? (s = (0, p.jsx)(R.a, {
                color: "ghost",
                size: "icon",
                disabled: z,
                "aria-label": n,
                onClick: A,
                children: o
            }), T[15] = z, T[16] = A, T[17] = n, T[18] = s) : s = T[18], T[19] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, p.jsx)(F.d, {
                title: (0, p.jsx)(M.e, {
                    children: (0, p.jsx)(v.a, {
                        id: "imagePromptShare.editTitle",
                        defaultMessage: "Edit image prompt"
                    })
                })
            }), T[19] = l) : l = T[19], T[20] !== s ? (d = (0, p.jsxs)("div", {
                className: "flex items-center gap-2 pe-8",
                children: [s, l]
            }), T[20] = s, T[21] = d) : d = T[21], T[22] === Symbol.for("react.memo_cache_sentinel") ? (c = e => {
                D(e), U(null)
            }, T[22] = c) : c = T[22], T[23] !== B || T[24] !== z ? (u = (0, p.jsx)(F.e, {
                spacing: "large",
                children: (0, p.jsx)(H, {
                    content: B,
                    disabled: z,
                    autoFocus: !0,
                    onChange: c
                })
            }), T[23] = B, T[24] = z, T[25] = u) : u = T[25], T[26] !== q ? (m = null != q && (0, p.jsx)(F.e, {
                children: (0, p.jsx)(O.a, {
                    type: "error",
                    role: "alert",
                    content: "blocked" === q ? (0, p.jsx)(v.a, {
                        id: "imagePromptShare.editBlocked",
                        defaultMessage: "This prompt can’t be shared. Edit it and try again."
                    }) : (0, p.jsx)(v.a, {
                        id: "imagePromptShare.editFailed",
                        defaultMessage: "Couldn’t save your edits. Try again."
                    })
                })
            }), T[26] = q, T[27] = m) : m = T[27], T[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, p.jsx)(v.a, {
                id: "imagePromptShare.editCancel",
                defaultMessage: "Cancel"
            }), T[28] = h) : h = T[28], T[29] !== z || T[30] !== A ? (f = (0, p.jsx)(R.a, {
                color: "outline",
                disabled: z,
                onClick: A,
                children: h
            }), T[29] = z, T[30] = A, T[31] = f) : f = T[31], T[32] !== B || T[33] !== z ? (_ = !G(B) || z, T[32] = B, T[33] = z, T[34] = _) : _ = T[34], T[35] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, p.jsx)(v.a, {
                id: "imagePromptShare.editSave",
                defaultMessage: "Save"
            }), T[35] = w) : w = T[35], T[36] !== z || T[37] !== _ ? (x = (0, p.jsx)(R.a, {
                type: "submit",
                color: "primary",
                loading: z,
                disabled: _,
                children: w
            }), T[36] = z, T[37] = _, T[38] = x) : x = T[38], T[39] !== f || T[40] !== x ? (I = (0, p.jsxs)(F.c, {
                expandSingleButton: !1,
                children: [f, x]
            }), T[39] = f, T[40] = x, T[41] = I) : I = T[41], T[42] !== d || T[43] !== u || T[44] !== m || T[45] !== I || T[46] !== i ? (j = (0, p.jsxs)(F.b, {
                as: "form",
                size: "viewport",
                onSubmit: i,
                children: [d, u, m, I]
            }), T[42] = d, T[43] = u, T[44] = m, T[45] = I, T[46] = i, T[47] = j) : j = T[47], T[48] !== z || T[49] !== V || T[50] !== j || T[51] !== a || T[52] !== r ? (P = (0, p.jsx)(M.a, {
                open: !0,
                size: "share",
                variant: "opaque",
                showDialogClose: V,
                shouldIgnoreClickOutside: z,
                contentProps: a,
                onOpenChange: r,
                children: j
            }), T[48] = z, T[49] = V, T[50] = j, T[51] = a, T[52] = r, T[53] = P) : P = T[53], P
        }

        function D(e) {
            let t, a, r, i, n, o, s, l, d, c, u, m = (0, g.c)(28),
                {
                    content: h,
                    previewSrc: f,
                    alt: _,
                    disabled: v,
                    onSave: w
                } = e,
                x = (0, b.a)(),
                [I, S] = (0, y.useState)(!1),
                j = (0, y.useRef)(null);
            return m[0] !== _ || m[1] !== f ? (t = null != f && (0, p.jsx)("img", {
                className: "size-20 rounded-lg object-cover",
                alt: _,
                src: f,
                referrerPolicy: "no-referrer"
            }), m[0] = _, m[1] = f, m[2] = t) : t = m[2], m[3] !== x ? (a = x.formatMessage({
                id: "imagePromptShare.edit",
                defaultMessage: "Edit image prompt"
            }), m[3] = x, m[4] = a) : a = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (r = () => S(!0), i = (0, p.jsx)(L.$f, {}), m[5] = r, m[6] = i) : (r = m[5], i = m[6]), m[7] !== v || m[8] !== a ? (n = (0, p.jsx)(R.a, {
                ref: j,
                className: "ms-auto",
                color: "ghost",
                size: "icon",
                disabled: v,
                "aria-label": a,
                onClick: r,
                children: i
            }), m[7] = v, m[8] = a, m[9] = n) : n = m[9], m[10] !== t || m[11] !== n ? (o = (0, p.jsxs)("div", {
                className: "flex items-start justify-between gap-3",
                children: [t, n]
            }), m[10] = t, m[11] = n, m[12] = o) : o = m[12], m[13] !== h.title ? (s = (0, p.jsx)("p", {
                className: "line-clamp-2 font-medium break-words",
                children: h.title
            }), m[13] = h.title, m[14] = s) : s = m[14], m[15] !== h.prompt ? (l = (0, p.jsx)("p", {
                className: "line-clamp-4 break-words whitespace-pre-wrap text-secondary",
                children: h.prompt
            }), m[15] = h.prompt, m[16] = l) : l = m[16], m[17] !== o || m[18] !== s || m[19] !== l ? (d = (0, p.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-xl bg-secondary-soft p-4 text-sm text-default",
                children: [o, s, l]
            }), m[17] = o, m[18] = s, m[19] = l, m[20] = d) : d = m[20], m[21] !== h || m[22] !== I || m[23] !== w ? (c = I && (0, p.jsx)(B, {
                content: h,
                onSave: w,
                onClose: () => S(!1),
                onCloseAutoFocus: e => {
                    e.preventDefault(), j.current?.focus()
                }
            }), m[21] = h, m[22] = I, m[23] = w, m[24] = c) : c = m[24], m[25] !== c || m[26] !== d ? (u = (0, p.jsxs)(p.Fragment, {
                children: [d, c]
            }), m[25] = c, m[26] = d, m[27] = u) : u = m[27], u
        }
        var z = a("AuIy"),
            W = a("iqEK"),
            q = a("ccwJ"),
            U = a("tOYk"),
            K = a("Kwur");
        let V = (0, _.v)(x.a, e => ({
            idempotencyKey: null,
            publication: null,
            editedContent: null,
            revision: 0
        }));
        async function Q(e, t, a) {
            X(e, t);
            let r = t.assetPointer,
                i = t.messageId;
            if (null == r || null == i) throw Error("Image prompt share source unavailable");
            let n = e.get(V, t);
            if (null != n.publication) return n.publication;
            let o = n.idempotencyKey ?? crypto.randomUUID();
            e.set(V, t, {
                ...n,
                idempotencyKey: o
            });
            try {
                let l = await e.queryClient.fetchQuery({
                    queryKey: ["image-prompt-share-publication", t, o],
                    staleTime: 1 / 0,
                    gcTime: 1 / 0,
                    retry: !1,
                    queryFn: async () => {
                        let l = await K.Request.safePost("/share/prompt-share", {
                            isExpectedError: Y,
                            requestBody: {
                                idempotency_key: o,
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
                            d.prompt !== a.prompt && (0, s.a)(e, U.a, {
                                postId: l.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_PROMPT"
                            }), d.title.trim() !== a.title.trim() && (0, s.a)(e, U.a, {
                                postId: l.post_id,
                                field: "CHATGPT_SHARE_PROMPT_EDITED_FIELD_TITLE"
                            })
                        } catch {}
                        return l
                    }
                });
                return X(e, t), e.set(V, t, e => ({
                    ...e,
                    publication: l
                })), l
            } catch (a) {
                throw a instanceof S.FetchError && Y(a) && e.set(V, t, e => ({
                    ...e,
                    idempotencyKey: null
                })), a
            }
        }

        function X(e, t) {
            if (null == t.accountId || null == t.userId || e.get(n.f) !== t.accountId || e.get(n.j) !== t.userId) throw Error("Image prompt share account changed")
        }

        function Y(e) {
            return "prompt_share_not_publishable" === e.errorCode
        }

        function J(e) {
            let t, a, r, i, o, l, d, c, u, m, R, L, O, M, F = (0, g.c)(69),
                N = (0, _.y)(x.a),
                H = (0, b.a)(),
                B = (0, _.z)(n.f),
                U = (0, _.z)(n.j);
            F[0] !== B || F[1] !== U ? (t = {
                accountId: B,
                userId: U
            }, F[0] = B, F[1] = U, F[2] = t) : t = F[2];
            let [J] = (0, y.useState)(t), $ = (0, I.f)("1939400492"), Z = (0, I.j)("250422953"), [ee, et] = (0, y.useState)("image");
            F[3] === Symbol.for("react.memo_cache_sentinel") ? (a = {}, F[3] = a) : a = F[3];
            let [ea] = (0, y.useState)(a), er = e.image, ei = er?.item.isAnimated === !0, en = J.accountId === B && J.userId === U, eo = null != er && !er.additionalImages?.length && null != B && null != U && en && !$, es = e.mobileImagePromptShareTreatment;
            F[4] !== eo || F[5] !== Z || F[6] !== es ? (r = eo && ("prompt-with-image" === es || null == es && Z.get("imagegen_prompt_share_tabs_enabled", !1)), F[4] = eo, F[5] = Z, F[6] = es, F[7] = r) : r = F[7];
            let el = r,
                ed = er?.item.id;
            F[8] !== B || F[9] !== e.serverConversationId || F[10] !== ed || F[11] !== U ? (i = ["image-prompt-share-source", B, U, e.serverConversationId, ed], F[8] = B, F[9] = e.serverConversationId, F[10] = ed, F[11] = U, F[12] = i) : i = F[12], F[13] !== er || F[14] !== e.serverConversationId || F[15] !== N ? (o = async t => {
                let {
                    signal: a
                } = t;
                if (null == er) return null;
                let r = (0, E.c)(e.serverConversationId),
                    i = N.get(C.a, r) ?? r,
                    n = () => {
                        let e = N.get(A.N, i) ?? N.query.getData(j.chatGptConversationQueryById$, r)?.mapping;
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
                            let o = (0, z.b)({
                                mapping: e.mapping,
                                current_node: r?.parent
                            }).find(e => "user" === e.author.role);
                            if (null == o || (0, z.n)(o)) return null;
                            let s = (0, z.s)(i.content),
                                l = (Array.isArray(s?.parts) ? s.parts : []).map(z.s).find(e => e?.asset_pointer === n.src || (0, z.s)(e?.image_asset_pointer)?.asset_pointer === n.src),
                                d = (0, z.s)(l?.image_asset_pointer) ?? l,
                                c = (0, z.i)((0, z.s)((0, z.s)(d?.metadata)?.dalle)?.prompt) ?? (0, z.i)((0, z.e)(o)),
                                u = (0, z.i)(i.id);
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
                    o = n();
                return null != o ? o : (await (0, k.a)(N, r, a), n())
            }, F[13] = er, F[14] = e.serverConversationId, F[15] = N, F[16] = o) : o = F[16], F[17] !== i || F[18] !== o || F[19] !== el ? (l = {
                enabled: el,
                queryKey: i,
                staleTime: 1 / 0,
                retry: !1,
                queryFn: o
            }, F[17] = i, F[18] = o, F[19] = el, F[20] = l) : l = F[20];
            let {
                data: ec
            } = (0, f.a)(l), eu = ec?.messageId ?? null, em = ec?.assetPointer ?? null;
            F[21] !== B || F[22] !== e.serverConversationId || F[23] !== eu || F[24] !== em || F[25] !== U ? (d = {
                accountId: B,
                userId: U,
                conversationId: e.serverConversationId,
                messageId: eu,
                assetPointer: em
            }, F[21] = B, F[22] = e.serverConversationId, F[23] = eu, F[24] = em, F[25] = U, F[26] = d) : d = F[26];
            let ep = d,
                {
                    editedContent: eg,
                    publication: eh,
                    revision: ef
                } = (0, _.x)(V, ep),
                e_ = el && null != ec,
                ey = e_ && null == es && "image_with_prompt" === Z.get("imagegen_prompt_share_label", "prompt_with_image") ? "image_with_prompt" : "prompt_with_image",
                eb = e_ && "template" === ee;
            F[27] !== eg || F[28] !== eh?.title || F[29] !== ec ? (c = eg ?? (null == ec ? void 0 : {
                ...ec.content,
                title: eh?.title ?? ec.content.title
            }), F[27] = eg, F[28] = eh?.title, F[29] = ec, F[30] = c) : c = F[30];
            let ev = c;
            F[31] !== J.accountId || F[32] !== J.userId || F[33] !== N ? (u = function() {
                if (N.get(n.f) !== J.accountId || N.get(n.j) !== J.userId) throw Error("Image prompt share account changed")
            }, F[31] = J.accountId, F[32] = J.userId, F[33] = N, F[34] = u) : u = F[34];
            let ew = u;
            F[35] !== ev || F[36] !== er || F[37] !== e.source || F[38] !== ew || F[39] !== N || F[40] !== ep || F[41] !== ec ? (m = async function(t) {
                let a;
                if (ew(), null == ec || null == ev || !G(ev)) throw Error("Image prompt share source unavailable or invalid");
                try {
                    a = await Q(N, ep, ec.content)
                } catch (e) {
                    if (e instanceof S.FetchError && "prompt_share_not_publishable" === e.errorCode) throw new P.a;
                    throw e
                }
                if (ew(), "copy" === t) {
                    let t;
                    "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID" === e.source ? t = "image_inline_action" : ("CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIGHTBOX_CONVERSATION" === e.source || "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_LIGHTBOX" === e.source) && (t = "image_lightbox_action"), (0, s.a)(N, h, {
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
            }, F[35] = ev, F[36] = er, F[37] = e.source, F[38] = ew, F[39] = N, F[40] = ep, F[41] = ec, F[42] = m) : m = F[42];
            let ex = m;
            if (F[43] !== ei || F[44] !== ey ? (R = ei ? (0, p.jsx)(v.a, {
                    id: "imagePromptShare.gifWithPrompt",
                    defaultMessage: "GIF with prompt"
                }) : "image_with_prompt" === ey ? (0, p.jsx)(v.a, {
                    id: "imagePromptShare.imageWithPrompt",
                    defaultMessage: "Image with prompt"
                }) : (0, p.jsx)(v.a, {
                    id: "imagePromptShare.template",
                    defaultMessage: "Prompt with image"
                }), F[43] = ei, F[44] = ey, F[45] = R) : R = F[45], !en) return null;
            let eI = eb ? "template" : "image";
            return F[46] !== H || F[47] !== ei || F[48] !== ee || F[49] !== R || F[50] !== e_ ? (L = e_ ? e => (0, p.jsx)("div", {
                className: "mx-auto w-80 max-w-full",
                children: (0, p.jsx)(w.a, {
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
                        label: ei ? (0, p.jsx)(v.a, {
                            id: "imagePromptShare.gifOnly",
                            defaultMessage: "GIF only"
                        }) : (0, p.jsx)(v.a, {
                            id: "imagePromptShare.imageOnly",
                            defaultMessage: "Image only"
                        })
                    }, {
                        id: "template",
                        disabled: e,
                        label: R
                    }]
                })
            }) : void 0, F[46] = H, F[47] = ei, F[48] = ee, F[49] = R, F[50] = e_, F[51] = L) : L = F[51], F[52] !== ev || F[53] !== ex || F[54] !== er?.alt || F[55] !== ew || F[56] !== ef || F[57] !== N || F[58] !== ep || F[59] !== ec || F[60] !== ey || F[61] !== eb ? (O = eb && null != ev ? {
                label: ey,
                revision: ef,
                createLink: ex,
                actionsDisabled: !G(ev),
                preview: (e, t, a) => (0, p.jsx)(D, {
                    content: ev,
                    previewSrc: t,
                    alt: er?.alt ?? "",
                    disabled: e,
                    onSave: async e => {
                        if (ew(), null == ec) throw Error("Image prompt share source unavailable");
                        (e.title.trim() !== ev.title.trim() || e.prompt !== ev.prompt) && await async function(e, t, a, r) {
                            X(e, t);
                            let i = e.get(V, t),
                                n = null == i.idempotencyKey ? i.publication : await Q(e, t, a),
                                o = r;
                            if (null != n) {
                                let e = await K.Request.safePatch("/share/post/{post_id}/prompt-share", {
                                    isExpectedError: Y,
                                    parameters: {
                                        path: {
                                            post_id: n.post_id
                                        }
                                    },
                                    requestBody: r
                                });
                                o = {
                                    title: e.title,
                                    prompt: e.prompt
                                }
                            }
                            X(e, t), e.set(V, t, e => ({
                                ...e,
                                editedContent: o,
                                publication: null == e.publication ? null : {
                                    ...e.publication,
                                    title: o.title
                                },
                                revision: e.revision + 1
                            }))
                        }(N, ep, ec.content, {
                            title: e.title.trim(),
                            prompt: e.prompt
                        }), ew(), a()
                    }
                })
            } : void 0, F[52] = ev, F[53] = ex, F[54] = er?.alt, F[55] = ew, F[56] = ef, F[57] = N, F[58] = ep, F[59] = ec, F[60] = ey, F[61] = eb, F[62] = O) : O = F[62], F[63] !== ea || F[64] !== e || F[65] !== eI || F[66] !== L || F[67] !== O ? (M = (0, p.jsx)(T.a, {
                ...e,
                mobileImageRowScrollPositions: ea,
                imageShareOptions: L,
                imagePromptTemplate: O
            }, eI), F[63] = ea, F[64] = e, F[65] = eI, F[66] = L, F[67] = O, F[68] = M) : M = F[68], M
        }

        function $(e, t) {
            let a, {
                    additionalImages: d,
                    alt: p,
                    downloadAnalyticsImage: g,
                    downloadIsParagen: h,
                    image: f,
                    isDirectLightboxShare: _,
                    previewSrc: y,
                    serverConversationId: b,
                    source: v = "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                    title: w
                } = t,
                x = crypto.randomUUID(),
                I = {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                    conversationId: b,
                    shareSessionId: x,
                    source: v
                };
            (0, s.a)(e, r.i, {
                ...I,
                action: "CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED"
            });
            let S = e.get(n.f),
                j = e.get(n.j),
                P = (0, i.d)(),
                T = P && null != S && null != j ? (0, c.h)(e.get(l.a, c.a)?.get(c.b, "native_with_fallback")) : null,
                C = e.get(n.e),
                E = "loaded" === C.status && "personal" === C.structure || "loading" === C.status && "personal" === C.structureAtLogin,
                A = null == T ? void 0 : (0, c.f)({
                    canUseNativeShare: "function" == typeof navigator.share,
                    experience: T,
                    isMobileBrowser: P,
                    isPersonalAccount: E
                }),
                k = () => e.get(n.f) === S && e.get(n.j) === j,
                R = t => {
                    !t.isWorkspaceOnly && t.shareLinkId !== a && k() && (a = t.shareLinkId, (0, s.a)(e, r.i, {
                        ...I,
                        action: "CHATGPT_SHARE_FLOW_ACTION_POST_LINK_PREPARED",
                        shareId: t.shareLinkId
                    }))
                },
                L = {
                    additionalImages: d,
                    alt: p,
                    downloadAnalyticsImage: g,
                    downloadIsParagen: h,
                    isDirectLightboxShare: _,
                    item: f,
                    previewSrc: y
                },
                O = () => (0, o.f)(e, J, {
                    currentNodeId: f.id,
                    image: L,
                    serverConversationId: b,
                    shareSessionId: x,
                    source: v,
                    title: w,
                    mobileImageExperience: A,
                    mobileImagePromptShareTreatment: T?.promptShareTreatment,
                    onImageShareLinkPrepared: null == T ? void 0 : R,
                    trackMobileImageShareLifecycle: P && T?.kind === "native"
                });
            P && T?.kind === "native" && "function" == typeof navigator.share ? async function() {
                let t = (0, u.a)(e, b, L);
                try {
                    let a = e.queryClient.getQueryData(t.queryKey);
                    if (null == a) return void O();
                    if (!k()) return;
                    if (!E) return void O();
                    R(a);
                    let r = await (0, m.b)(e, a, b, x, v);
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
    nUGc: (function(e, t, a) {
        let r = (0, a("zd8w").createContext)(null);
        a.d(t, {}, {
            a: r
        })
    }),
    umQU: (function(e, t, a) {
        var r = a("BolX"),
            i = a("ccwJ"),
            n = a("Kwur"),
            o = a("dQRk"),
            s = a("bmqg"),
            l = a("SGsN"),
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
                        imageAssetResolver: s
                    } = e,
                    {
                        signal: u,
                        scope: f
                    } = t,
                    _ = r?.gifPlayback?.originalSrc ?? r?.src,
                    v = JSON.stringify([r?.id, _]),
                    w = 0,
                    x = Promise.resolve(),
                    I = u({
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
                                }), T(n, !1))
                            })
                        }
                    }),
                    S = async e => {
                        let t = null != e && (0, m.h)(e) && null != s ? await (0, m.a)(f.queryClient, e, s) : e,
                            a = null == t ? null : await (0, d.a)(t);
                        if (null == a) throw Error("GIF download unavailable");
                        return a.blob
                    }, j = () => (null == a && (a = S(_).catch(e => {
                        throw a = void 0, e
                    })), a), P = async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                            a = y(f, r),
                            n = t === a?.watermarkedSrc ? a?.gifPlayback?.watermarkedVariants : a?.gifPlayback?.variants;
                        if (!(0, i.a)(n).includes(e)) throw Error("GIF speed variant unavailable");
                        let o = 1 === e ? void 0 : n?.[String(e)],
                            s = I.get().preview;
                        if (s?.speed === e && s.originalSrc === t && s.assetSrc === o) return s;
                        let l = null == o && t === _ ? await j() : await S(o ?? t);
                        return {
                            assetSrc: o,
                            originalSrc: t ?? "",
                            speed: e,
                            src: await (0, p.a)(l),
                            sizeBytes: l.size
                        }
                    }, T = async (e, t) => {
                        let a = ++w;
                        I.set(e => ({
                            ...e,
                            busy: !0
                        }));
                        try {
                            let i = await P(e);
                            if (a !== w) return !1;
                            return I.set({
                                preview: i,
                                busy: !1
                            }), t && (f.set(h, v, e), x = x.then(async () => {
                                if (a !== w || "chatgpt-thread" !== f.value.routeKind || r?.chatGptMessageId == null || null == _) return;
                                let t = f.get(o.j, f.value.conversationId);
                                null != t && await n.Request.safePost("/image-gen/gif/select_speed", {
                                    requestBody: {
                                        conversation_id: t,
                                        message_id: r.chatGptMessageId,
                                        asset_pointer: _,
                                        selected_speed: e
                                    },
                                    expectedErrorStatuses: [404, 405]
                                })
                            }).catch(e => {
                                e instanceof g.a && (404 === e.status || 405 === e.status) || f.get(l.f).danger(f.get(c.a).formatMessage({
                                    id: "gifEditor.saveSpeedFailed",
                                    defaultMessage: "Couldn’t save GIF speed. Try again"
                                }), {
                                    errorAnalytics: {
                                        toastId: "gifEditor.saveSpeedFailed"
                                    }
                                })
                            })), !0
                        } catch {
                            return t && a === w && f.get(l.f).danger(f.get(c.a).formatMessage({
                                id: "gifEditor.speedChangeFailed",
                                defaultMessage: "Couldn’t change GIF speed. Try again"
                            }), {
                                errorAnalytics: {
                                    toastId: "gifEditor.speedChangeFailed"
                                }
                            }), !1
                        } finally {
                            a === w && I.set(e => ({
                                ...e,
                                busy: !1
                            }))
                        }
                    };
                return {
                    state$: I,
                    loadOriginal: j,
                    loadExport: async e => 1 === e ? j() : S((await P(e)).src),
                    changeSpeed: e => T(e, !0),
                    imageForExport: async function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                            {
                                forSharing: a = !1
                            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e.isAnimated || null == t) return e;
                        let r = (0, i.d)(y(f, e)?.gifPlayback, I.get().preview?.speed ?? f.get(h, v) ?? void 0),
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
                        let o = await P(r, t);
                        return b(n, a && null != o.assetSrc ? {
                            ...o,
                            src: o.assetSrc
                        } : o)
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
            _ = (0, r.d)(u.a, (e, t) => {
                let {
                    image: a,
                    conversationId: r,
                    imageAssetResolver: n
                } = e, {
                    scope: o
                } = t, s = y(o, a, r), l = o.get(f, {
                    image: s?.isAnimated === !0 ? s : void 0,
                    imageAssetResolver: n
                }), {
                    preview: d
                } = o.get(l.state$);
                return {
                    playback: l,
                    previewSrc: null != d && (0, i.a)(s?.gifPlayback?.variants).includes(d.speed) ? d.src : void 0,
                    image: null == s ? void 0 : b(s, d),
                    originalSrc: s?.isAnimated === !0 ? s.gifPlayback?.originalSrc ?? s.src : s?.src,
                    canControl: s?.isAnimated === !0 && (0, i.a)(s.gifPlayback?.variants).length > 1
                }
            });

        function y(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "chatgpt-thread" === e.value.routeKind ? e.value.conversationId : null;
            return t?.isAnimated === !0 && null != a ? e.get(s.b, a)?.find(e => e.id === t.id) ?? t : t
        }

        function b(e, t) {
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
            a: b,
            b: y,
            c: f,
            d: _
        })
    }),
    I0AH: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("on57");
        a.d(t, {}, {
            a: function(e) {
                let t, a, o = (0, i.c)(14),
                    {
                        ariaLabel: s,
                        children: l,
                        className: d,
                        variant: c
                    } = e,
                    u = void 0 === c ? "compact" : c;
                if ("embedded" === u) {
                    let e, t = null == s ? void 0 : "group";
                    return o[0] !== s || o[1] !== l || o[2] !== t ? (e = (0, r.jsx)("div", {
                        role: t,
                        "aria-label": s,
                        className: "flex min-w-0 items-center",
                        children: l
                    }), o[0] = s, o[1] = l, o[2] = t, o[3] = e) : e = o[3], e
                }
                let m = null == s ? void 0 : "toolbar",
                    p = "compact" === u ? "gap-0.5 bg-surface-tertiary/95 shadow-md ring-1 ring-border-subtle backdrop-blur-sm" : "border border-default bg-surface-elevated",
                    g = "imageTools" === u && "gap-0 shadow-md",
                    h = "playback" === u && "gap-2 shadow-sm";
                return o[4] !== d || o[5] !== p || o[6] !== g || o[7] !== h ? (t = (0, n.b)("flex w-fit max-w-full select-none items-center overflow-hidden rounded-full p-0.5", p, g, h, d), o[4] = d, o[5] = p, o[6] = g, o[7] = h, o[8] = t) : t = o[8], o[9] !== s || o[10] !== l || o[11] !== m || o[12] !== t ? (a = (0, r.jsx)("div", {
                    role: m,
                    "aria-label": s,
                    className: t,
                    children: l
                }), o[9] = s, o[10] = l, o[11] = m, o[12] = t, o[13] = a) : a = o[13], a
            }
        })
    }),
    EQ0X: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("slpy"),
            o = a("zd8w"),
            s = a("Wf1j"),
            l = a("oyxz"),
            d = a("Sm6l"),
            c = a("bqtn"),
            u = a("HOLv"),
            m = a("bf6R"),
            p = a("UxN3"),
            g = a("ddzD"),
            h = a("I0AH"),
            f = a("j9wQ"),
            _ = a("ZedP"),
            y = a("fi73"),
            b = a("uVXd");

        function v(e) {
            let t, a = (0, i.c)(3),
                o = !0 !== e["aria-expanded"] && "true" !== e["aria-expanded"] && void 0;
            return a[0] !== e || a[1] !== o ? (t = (0, r.jsx)(n.a, {
                ...e,
                forceOpen: o
            }), a[0] = e, a[1] = o, a[2] = t) : t = a[2], t
        }
        a.d(t, {}, {
            a: function(e) {
                let t, a, n, w, x, I, S, j = (0, i.c)(53),
                    {
                        downloadImageCount: P,
                        floatingToolbarVariant: T,
                        moreActions: C,
                        isAnimated: E,
                        isImageActionsDisabled: A,
                        isUnifiedViewerEnabled: k,
                        onDownload: R,
                        onDownloadAll: L,
                        onDownloadMenuOpen: O,
                        onShare: M,
                        onShareAll: F,
                        onShareMenuOpen: G,
                        saveAction: N,
                        shareImageCount: H,
                        showShareText: B
                    } = e,
                    D = void 0 !== E && E,
                    z = void 0 !== k && k,
                    W = void 0 !== B && B,
                    q = (0, s.a)(),
                    [U, K] = (0, o.useState)(!1),
                    V = "toolbar";
                null != T && (V = "imageTools" === T ? "imageToolbar" : "composerSm"), j[0] !== V || j[1] !== T || j[2] !== q || j[3] !== A || j[4] !== z || j[5] !== M || j[6] !== F || j[7] !== W ? (t = z ? (0, r.jsxs)(f.c, {
                    "aria-label": q.formatMessage({
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }),
                    disabled: A,
                    uniform: !W,
                    onClick: null == F ? M : void 0,
                    children: [(0, r.jsx)(p.b, {
                        icon: {
                            16: m.L,
                            20: m.M
                        }
                    }), W ? (0, r.jsx)(l.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    }) : null]
                }) : (0, r.jsx)(d.a, {
                    color: null == T ? "primary" : "ghostActive",
                    disabled: A,
                    size: V,
                    onClick: null == F ? M : void 0,
                    children: (0, r.jsx)(l.a, {
                        id: "imageSidePanel.share",
                        defaultMessage: "Share"
                    })
                }), j[0] = V, j[1] = T, j[2] = q, j[3] = A, j[4] = z, j[5] = M, j[6] = F, j[7] = W, j[8] = t) : t = j[8];
                let Q = t;
                if (null != M && null != F) {
                    let e;
                    j[9] !== D || j[10] !== A || j[11] !== M || j[12] !== F || j[13] !== G || j[14] !== Q || j[15] !== H ? (e = (0, r.jsx)(_.a, {
                        disabled: A,
                        imageCount: H,
                        isAnimated: D,
                        onOpen: G,
                        onShare: M,
                        onShareAll: F,
                        triggerButton: Q
                    }), j[9] = D, j[10] = A, j[11] = M, j[12] = F, j[13] = G, j[14] = Q, j[15] = H, j[16] = e) : e = j[16], Q = e
                }
                if (null != T) {
                    let e;
                    j[17] !== T || j[18] !== Q ? (e = (0, r.jsx)(h.a, {
                        variant: T,
                        children: Q
                    }), j[17] = T, j[18] = Q, j[19] = e) : e = j[19], Q = e
                }
                j[20] === Symbol.for("react.memo_cache_sentinel") ? (a = async e => {
                    K(!0), await e().finally(() => {
                        K(!1)
                    })
                }, j[20] = a) : a = j[20];
                let X = a;
                j[21] !== V || j[22] !== P || j[23] !== T || j[24] !== q || j[25] !== D || j[26] !== U || j[27] !== A || j[28] !== z || j[29] !== R || j[30] !== L || j[31] !== O || j[32] !== N ? (n = null != L && null != R ? (0, r.jsxs)(c.a, {
                    align: "end",
                    disabled: A || U,
                    onOpenChange: e => {
                        e && O?.()
                    },
                    triggerButton: (0, r.jsx)(v, {
                        content: (0, r.jsx)(l.a, {
                            ...(0, g.a)({
                                isAnimated: D
                            }).downloadLabel
                        }),
                        children: z ? (0, r.jsx)(f.c, {
                            "aria-label": q.formatMessage((0, g.a)({
                                isAnimated: D
                            }).downloadLabel),
                            disabled: A || U,
                            loading: U,
                            uniform: !0,
                            children: (0, r.jsx)(p.b, {
                                icon: {
                                    assets: {
                                        16: y.a,
                                        20: b.a
                                    }
                                }
                            })
                        }) : (0, r.jsx)(d.a, {
                            "aria-label": q.formatMessage((0, g.a)({
                                isAnimated: D
                            }).downloadLabel),
                            color: null == T ? "ghost" : "ghostActive",
                            disabled: A || U,
                            loading: U,
                            size: V,
                            uniform: !0,
                            children: "compact" === T ? (0, r.jsx)(u.a, {
                                asset: y.a
                            }) : (0, r.jsx)(m.r, {})
                        })
                    }),
                    children: [(0, r.jsx)(c.c.Item, {
                        onSelect: () => void X(R),
                        children: (0, r.jsx)(l.a, {
                            ...(0, g.a)({
                                isAnimated: D
                            }).downloadMenuLabel
                        })
                    }), (0, r.jsx)(c.c.Item, {
                        onSelect: () => void X(L),
                        children: (0, r.jsx)(l.a, {
                            id: "imagePreview.downloadSeries",
                            defaultMessage: "Download {count} images in this series",
                            values: {
                                count: P
                            }
                        })
                    })]
                }) : N, j[21] = V, j[22] = P, j[23] = T, j[24] = q, j[25] = D, j[26] = U, j[27] = A, j[28] = z, j[29] = R, j[30] = L, j[31] = O, j[32] = N, j[33] = n) : n = j[33];
                let Y = n;
                if (null != T && null != L && null != R) {
                    let e;
                    j[34] !== Y || j[35] !== T ? (e = (0, r.jsx)(h.a, {
                        variant: T,
                        children: Y
                    }), j[34] = Y, j[35] = T, j[36] = e) : e = j[36], Y = e
                }
                let J = null == M ? null : Q;
                j[37] !== Y || j[38] !== J ? (w = (0, r.jsxs)(r.Fragment, {
                    children: [Y, J]
                }), j[37] = Y, j[38] = J, j[39] = w) : w = j[39];
                let $ = w;
                j[40] !== T || j[41] !== C ? (x = null == C || null == T ? C : (0, r.jsx)(h.a, {
                    variant: T,
                    children: C
                }), j[40] = T, j[41] = C, j[42] = x) : x = j[42];
                let Z = x,
                    ee = null != M || null != Y;
                if (!z || W) {
                    let e;
                    return j[43] !== $ || j[44] !== Z ? (e = (0, r.jsxs)(r.Fragment, {
                        children: [$, Z]
                    }), j[43] = $, j[44] = Z, j[45] = e) : e = j[45], e
                }
                return j[46] !== ee || j[47] !== q || j[48] !== $ ? (I = ee ? (0, r.jsx)(f.i, {
                    label: q.formatMessage({
                        id: "imagePreview.headerActions",
                        defaultMessage: "Image actions"
                    }),
                    children: $
                }) : null, j[46] = ee, j[47] = q, j[48] = $, j[49] = I) : I = j[49], j[50] !== I || j[51] !== Z ? (S = (0, r.jsxs)(r.Fragment, {
                    children: [I, Z]
                }), j[50] = I, j[51] = Z, j[52] = S) : S = j[52], S
            }
        })
    }),
    ZedP: (function(e, t, a) {
        var r = a("ABep"),
            i = a("QosV"),
            n = a("oyxz"),
            o = a("bqtn"),
            s = a("HOLv"),
            l = a("ddzD"),
            d = a("wTsG"),
            c = a("QcuK");
        a.d(t, {}, {
            a: function(e) {
                let t, a, u, m, p, g, h, f = (0, i.c)(19),
                    {
                        disabled: _,
                        imageCount: y,
                        isAnimated: b,
                        onOpen: v,
                        onShare: w,
                        onShareAll: x,
                        triggerButton: I
                    } = e,
                    S = void 0 !== b && b;
                return f[0] !== v ? (t = e => {
                    e && v?.()
                }, f[0] = v, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.jsx)(s.a, {
                    className: "text-gray-1000",
                    asset: d.a
                }), f[2] = a) : a = f[2], f[3] !== S ? (u = (0, l.a)({
                    isAnimated: S
                }), f[3] = S, f[4] = u) : u = f[4], f[5] !== u.shareSelectionLabel ? (m = (0, r.jsx)(n.a, {
                    ...u.shareSelectionLabel
                }), f[5] = u.shareSelectionLabel, f[6] = m) : m = f[6], f[7] !== w || f[8] !== m ? (p = (0, r.jsx)(o.c.Item, {
                    leftIcon: a,
                    onSelect: w,
                    children: m
                }), f[7] = w, f[8] = m, f[9] = p) : p = f[9], f[10] !== y || f[11] !== x ? (g = null == x ? null : (0, r.jsx)(o.c.Item, {
                    leftIcon: (0, r.jsx)(s.a, {
                        className: "text-gray-1000",
                        asset: c.a
                    }),
                    onSelect: x,
                    children: (0, r.jsx)(n.a, {
                        id: "imagePreview.shareSeries",
                        defaultMessage: "All {imageCount, plural, one {# image} other {# images}} in this series",
                        values: {
                            imageCount: y
                        }
                    })
                }), f[10] = y, f[11] = x, f[12] = g) : g = f[12], f[13] !== _ || f[14] !== t || f[15] !== p || f[16] !== g || f[17] !== I ? (h = (0, r.jsxs)(o.a, {
                    align: "end",
                    disabled: _,
                    triggerButton: I,
                    onOpenChange: t,
                    children: [p, g]
                }), f[13] = _, f[14] = t, f[15] = p, f[16] = g, f[17] = I, f[18] = h) : h = f[18], h
            }
        })
    })
};